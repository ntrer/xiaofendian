<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="订单详情"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="mt-3 flex align-center justify-between bg-white pl-2 pr-2" style="height: 216rpx;">
			<view class="flex align-center justify-between">
				<image :src="data.head_portrait_image_url" style="width: 160rpx;height: 160rpx;border-radius: 8rpx;"></image>
				<view class="flex flex-column  ml-2" style="height: 160rpx;">
					<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;width: 360rpx;">{{data.goods_name}}</text>
				</view>
			</view>
						
			<view class="flex flex-column justify-between align-end" style="height: 160rpx;text-align: end;">
				<text v-if="data.is_verification==-1"  style="color: #FF7200;">已支付</text>
				<text v-if="data.is_verification==1" style="color: #FF7200;">已核销</text>
			</view>
		</view>
		
		
		<view class=" bg-white mt-3 pl-2 pr-2" style="height: 514rpx;">
			
			<view class=" text-color font-bold flex align-center " style="height: 100rpx;">
				订单信息
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>购买人：</text>
				<text>{{data.wx_nick_name}}</text>
			</view>
			
			
			<view class="flex" style="height: 70rpx;">
				<text>手机号码：</text>
				<text>{{data.mobile_number}}</text>
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>下单时间：</text>
				<text>{{data.order_time}}</text>
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>支付时间：</text>
				<text>{{data.resp_pay_time}}</text>
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>核销时间：</text>
				<text>{{data.verification_time==null?'':data.verification_time}}</text>
			</view>
			
			
			
			<view class="flex align-center fixed-right mr-3">
				<text style="font-size: 26upx;">实付金额：</text>
				<text style="color: #FF7200;">￥{{data.pay_price}}</text>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				data:{}
			}
		},
		
		onLoad(e) {
			console.log(e.data)
			this.data=JSON.parse(e.data)
		},
		
		methods: {
			
		}
	}
</script>

<style>

</style>
