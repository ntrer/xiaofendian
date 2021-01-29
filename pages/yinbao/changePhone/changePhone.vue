<template>
	<view>
		<u-navbar title="更换手机号" :background="background" title-color="#000" :isBack="true"></u-navbar>

		<view class=" ml-2 mr-2 mt-2 mb-2" style="color: #8A8A8A;">更换手机后，下次登录可使用新手机号登录。当前手机号：
			{{phone}}</view>


		<view class="flex align-center pl-2 pr-2" style="height: 100rpx;">

			<view class="text-color" style="font-size: 32upx;">手机号</view>
			<input style="margin-left: 20rpx; font-size: 32upx;" type="text" v-model="newPhone" placeholder="请输入手机号"
			 placeholder-style="color: #9F9F9F;" />
		</view>

		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<view class="flex align-center justify-between pl-2 pr-2" style="height: 100rpx;">

			<view class=" flex align-center justify-between">
				<view class="text-color" style="font-size: 32upx;">验证码</view>
				<input style="margin-left: 20rpx; font-size: 32upx;" type="text" v-model="newPhone" placeholder="请输入验证码"
				 placeholder-style="color: #9F9F9F;" />
			</view>

			<view style="font-size: 32upx;color: #FF7200;" @click="getCode()">{{yzm}}</view>

		</view>

		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>
		
		<view class="main-bg-color flex align-center justify-center " style="font-size: 32rpx;color: #fff; height: 75rpx; margin-left: 60rpx;margin-right: 60rpx;margin-top: 100rpx;border-radius: 50rpx;" >
			 更换手机号 		 
		</view>
		

	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	export default {
		components: {
			divider
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				phone: "17677777777",
				newPhone: "",
				yzm: "获取验证码",
				second: 60
			}
		},
		methods: {
			//获取验证码，记得做防止重复点击
			getCode() {
				var interval = setInterval(() => {
					let times = --this.second
					this.second = times < 10 ? '0' + times : times ,//小于10秒补 0
					this.yzm=this.second+"秒后重新获取"
				}, 1000)
				setTimeout(() => {
					clearInterval(interval)
					this.second = 60
					this.yzm="重新获取验证码"
				}, 60000)
			}
		}
	}
</script>

<style>

</style>
