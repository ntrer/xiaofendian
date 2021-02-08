<template>
	<view style="background-color: #F4F4F4;height: 100vh;">
		<u-navbar title="设置商城" :background="background" title-color="#000" :isBack="true" :customBack="goBack"></u-navbar>
		<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">

			<view class="flex flex-column">
				<text>商城系统</text>
				<text style="font-size: 24upx;color: #8A8A8A;">打开后，可开启整个商城系统，关闭后无法在商城下单</text>
			</view>

			<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="change"></u-switch>

		</view>

		<view class="flex align-center text-color mt-2" style="height: 85rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-4" style="font-size: 32rpx;">其他设置</text>
		</view>

		<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">

			<view class="flex flex-column">
				<text>智能防刷</text>
				<text style="font-size: 24upx;color: #8A8A8A;">打开后，仅限距离店铺15公里内的客户可参与，请谨慎使用</text>
			</view>

			<u-switch v-model="openPos" active-color="#FF7200" inactive-color="#D8D8D8" @change="change2"></u-switch>

		</view>


        <view class="flex align-center justify-center mt-4" style="font-size: 26upx;">
			<text class="#8A8A8A">创建活动即表示你已同意</text>
			<text class="text-color">《活动发布协议》</text>
		</view>
        

         <view class="main-bg-color flex align-center justify-center mt-4" style="font-size: 36rpx;color: #fff; height: 75rpx; margin-left: 40rpx;margin-right: 40rpx;border-radius: 10rpx;" @click="saveSeting()">
         	 保存设置 		 
         </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				open: false,
				openPos:false,
			}
		},
		onLoad(e) {
			if (e != undefined) {
				if (e.open == "false") {
					this.open = false
				} else {
					this.open = true
				}

			}
		},

		methods: {
			// switch打开或者关闭时触发，值为true或者false
			// 即使不监听此事件，this.checked此时也会相应的变成true或者false
			//是否开启商城
			change(status) {
				console.log(status)
				this.open = status
			},
			
			//是否开启地域限制
			change2(status){
				this.openPos = status
			},

			goBack() {
				// 获取当前页面栈
				let pages = getCurrentPages()
				// pages数组中的最后一个为当前页面，倒数第二个为上一个页面
				let prevPage = pages[pages.length - 2]

				let data = "";
				if (this.open) {
					data = "true"
				} else {
					data = "false"
				}
				// 重点来了
				// 调用$vm 注册一个自定义方法 将参数传入进去
				prevPage.onShow(data)
				uni.navigateBack({
					delta: 1
				})
			},

            saveSeting(){
				uni.showModal({
					title:"提示",
					content:"是否保存设置",
					confirmColor:"#FF7200",
					success: (res) => {
						if (res.confirm) {
							this.save()
						}
					}
				})
			},
			
			save(){
				
			}
		}
	}
</script>

<style>

</style>
