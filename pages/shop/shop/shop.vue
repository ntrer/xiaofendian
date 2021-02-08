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
				<text class="mt-1">商品券管理</text>
			</view>

			<view class="flex align-center flex-1 justify-center flex-column" @click="toCreateGoods()">
				<image src="../../../static/common/release.png" style="height: 80rpx;width: 80rpx;"></image>
				<text class="mt-1">发布商品券</text>
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
				<text class="mt-4">{{merchantVisitRecordCountOneDay}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>订单数</text>
				<text class="mt-4">{{OrderCountOneDay}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>订单金额</text>
				<text class="mt-4">{{sumPayPriceOneDay}}</text>
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
				<text class="mt-1">{{merchantVisitRecordCount}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{OrderCount}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{sumPayPrice}}</text>
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

		<view v-if="dataList.length==0" class=" bg-white flex align-center justify-center" style="height: 120rpx;">
			<text style="color: #8A8A8A;">暂无订单，加油哦~</text>
		</view>

		<view class="bg-white ">
			<view class="pl-2 pr-2" v-for="(item,index) in dataList" :key="index" @click="toOrderDetail()">
				<view class="flex align-center justify-between  " style="height: 220rpx;">
					<view class="flex align-center justify-between">
						<image src="../../../static/common/live_logo.png" style="width: 160rpx;height: 160rpx;"></image>
						<view class="flex flex-column justify-between ml-2" style="height: 160rpx;">
							<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;width: 360rpx;">{{item.goods_name}}</text>
							<text class=" mt-1" style="color: #8A8A8A;">{{item.order_time}}</text>
						</view>
					</view>

					<view class="flex flex-column justify-between " style="height: 160rpx;text-align: end;">
						<text v-if="item.is_verification==1" class="text-color">已核销</text>
						<text v-if="item.is_verification==-1" class="text-color">未核销</text>
						<text class="text-color font-bold ">￥{{item.pay_price}}</text>
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
		
		<view class="" style="height: 100rpx;"></view>


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
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	export default {
		components: {
			divider
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				OrderCount: 0,
				OrderCountOneDay: 0,
				merchantVisitRecordCount: 0,
				merchantVisitRecordCountOneDay: 0,
				sumPayPrice: 0,
				sumPayPriceOneDay: 0,
				open: false,
				dataList:[]
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
        
		onLoad() {
			this.getData()
			this.getList()
		},


		methods: {
			
			getData(){
				// 发送到服务端
				$H.get("/merchant/statistics/home").then((res) => {
					//请求成功
					this.OrderCount=res.data.OrderCount
					this.OrderCountOneDay=res.data.OrderCountOneDay
					this.merchantVisitRecordCount=res.data.merchantVisitRecordCount
					this.merchantVisitRecordCountOneDay=res.data.merchantVisitRecordCountOneDay
					this.sumPayPrice=res.data.sumPayPrice
					this.sumPayPriceOneDay=res.data.sumPayPriceOneDay
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			getList(){
				let data={
					type:2,
					size:3,
					current:1
				}
				// 发送到服务端
				$H.get("/order/page/all",data).then((res) => {
					//请求成功
					this.dataList = res.data.records;
					
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
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
			},
			
			toCreateGoods(){
				uni.navigateTo({
					url:'../createGoods/createGoods'
				})
			}
		}
	}
</script>

<style>

</style>
