<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="商城系统" :background="background" title-color="#000" :isBack="true" ></u-navbar>

		<view class="flex align-center bg-white" style="height: 200rpx;">
			<view class="flex align-center flex-1 justify-center flex-column">
				<image src="../../../static/common/Scan_code.png" style="height: 80rpx;width: 80rpx;"></image>
				<text class="mt-1">扫码提货</text>
			</view>

			<view class="flex align-center flex-1 justify-center flex-column" @click="toOrder()">
				<image src="../../../static/common/order.png" style="height: 80rpx;width: 80rpx;"></image>
				<text class="mt-1">商城订单</text>
			</view>

			<view class="flex align-center flex-1 justify-center flex-column" @click="toGoods()">
				<image src="../../../static/common/commodity.png" style="height: 80rpx;width: 80rpx;"></image>
				<text class="mt-1">商品管理</text>
			</view>

			<view class="flex align-center flex-1 justify-center flex-column">
				<image src="../../../static/common/release.png" style="height: 80rpx;width: 80rpx;"></image>
				<text class="mt-1">发布商品</text>
			</view>
		</view>


		<!-- 今日数据 标题-->
		<view class="flex flex-row align-center mt-3 pt-2 bg-white">
			<view class="main-bg-color" style="width: 8rpx;height: 36rpx;"></view>
			<text style="font-size: 32rpx;font-weight: 600;" class="ml-2">今日数据</text>

		</view>

		<!-- 今日数据宫格 -->
		<view class="flex align-center  bg-white" style="height: 200rpx;">
			<view class="flex align-center justify-center flex-column flex-1">
				<text>访客数</text>
				<text class="mt-4">{{todyAdd}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>订单数</text>
				<text class="mt-4">{{todyOrder}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>订单金额</text>
				<text class="mt-4">{{todyMoney}}</text>
			</view>
		</view>

		<!-- 分割线 -->
		<view class="pl-4 pr-4 bg-white">
			<divider :height="4"></divider>
		</view>

		<!-- 本月数据标题 -->
		<view class="flex flex-row align-center  bg-white" style="height: 80rpx;">
			<view class="main-bg-color" style="width: 8rpx;height: 36rpx;"></view>
			<text style="font-size: 32rpx;font-weight: 600;" class="ml-2">本月数据</text>
		</view>

		<!-- 本月数据 -->
		<view class="flex align-center  bg-white" style="height: 120rpx;">
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{monthAdd}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{monthOrder}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{monthMoney}}</text>
			</view>
		</view>


		<!-- 商城订单 -->
		<view class=" mt-3 flex align-center justify-between bg-white" style="height: 100rpx;">
			<view class="flex align-center">
				<view class="main-bg-color" style="width: 8rpx;height: 36rpx;"></view>
				<text style="font-size: 32rpx;font-weight: 600;" class="ml-2">商城订单</text>
			</view>

			<view class="flex align-center justify-between mr-2" @click="toMoreGoods()">
				<text style="color: #757272;">所有商城订单</text>
				<uni-icon :size="20" color="#757272" type="arrowright" />
			</view>

		</view>

		<view class=" bg-white flex align-center justify-center" style="height: 120rpx;">
			<text style="color: #8A8A8A;">暂无订单，加油哦~</text>
		</view>

		<view class="bg-white " style="display: none;">
			<view class="pl-2 pr-2" v-for="(item,index) in 2" :key="index" @click="toOrderDetail()">
				<view class="flex align-center justify-between  " style="height: 220rpx;">
					<view class="flex align-center justify-between">
						<image src="../../../static/common/live_logo.png" style="width: 160rpx;height: 160rpx;"></image>
						<view class="flex flex-column  ml-1" style="height: 160rpx;">
							<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;width: 360rpx;">商品券名称比较长的名字是德甲还记得上次时间长参加深刻的基础肯定</text>
							<text class=" mt-1" style="color: #8A8A8A;">2021.01.02 12:01:22</text>
						</view>
					</view>

					<view class="flex flex-column justify-between " style="height: 160rpx;text-align: end;">
						<text class="text-color">已核销</text>
						<text class="text-color font-bold ">￥199999.9</text>
					</view>


				</view>
				<divider :height="4"></divider>
			</view>
		</view>

		<view class="flex align-center pl-5 pr-5 mt-3 mb-3">
			<view class="flex-1 mr-4 flex align-center justify-center" style="border-radius: 36rpx;border: #1D1200 solid 1rpx;height: 72rpx;"
			 @click="shopSetting()">
				设置商城
			</view>
			<view class="flex-1 ml-4 flex align-center justify-center" style="border-radius: 36rpx;border: #1D1200 solid 1rpx;height: 72rpx;">
				预览商城
			</view>
		</view>


		<view v-if="open==false" class="flex align-center justify-center fixed-bottom" style="height: 100rpx;background-color: #FF7200;color: #fff;font-size: 36upx;"
		 @click="openShop()">
			开启商城系统
		</view>

		<view v-if="open==true" class="flex align-center justify-center fixed-bottom">
			<view class="flex flex-2 align-center justify-center" style="background-color: #000000;color: #fff;font-size: 34upx;height: 100rpx;">
				生成门店海报
			</view>
			<view class="flex flex-4 align-center justify-center" style="background-color: #FF7200;color: #fff;font-size: 34upx;height: 100rpx;">
				分享给客户购买
			</view>
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
				todyAdd: 0,
				todyOrder: 0,
				todyMoney: 0,
				monthAdd: 0,
				monthOrder: 0,
				monthMoney: 0,
				open: false
			}
		},

        onShow(data) {
        	if(data){
				if(data=="true"){
					this.open=true
				}
				else{
					this.open=false
				}
			}
        },


		methods: {
			toMoreGoods() {
				uni.navigateTo({
					url: '../moreGoods/moreGoods'
				})
			},

			// 开启商城系统
			openShop() {
				uni.showModal({
					title: "提示",
					content: "是否要开启商城系统",
					confirmColor: "#FF7200",
					success: (res) => {
						if (res.confirm) {
							this.open = true
						}
					}
				})

			},

			// 设置商城
			shopSetting() {
				uni.navigateTo({
					url: '../shopSetting/shopSetting?open=' + this.open
				})
			},
			
			toOrder(){
				uni.navigateTo({
					url: '../moreGoods/moreGoods'
				})
			},
			
			toGoods(){
				uni.navigateTo({
					url: '../goodsControl/goodsControl'
				})
			},
			
			toOrderDetail(){
				uni.navigateTo({
					url:'../orderDetail/orderDetail'
				})
			}
		}
	}
</script>

<style>

</style>
