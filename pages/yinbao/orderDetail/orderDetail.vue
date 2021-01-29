<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="订单详情"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="mt-3 flex align-center justify-between bg-white pl-2 pr-2" style="height: 216rpx;">
			<view class="flex align-center justify-between">
				<image src="../../../static/common/live_logo.png" style="width: 160rpx;height: 160rpx;"></image>
				<view class="flex flex-column  ml-1" style="height: 160rpx;">
					<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;width: 360rpx;">商品券名称比较长的名字是德甲还记得上次时间长参加深刻的基础肯定</text>
				</view>
			</view>
						
			<view class="flex flex-column justify-between align-end" style="height: 160rpx;text-align: end;">
				<text  style="color: #FF7200;">已支付</text>
			</view>
		</view>
		
		
		<view class=" bg-white mt-3 pl-2 pr-2" style="height: 514rpx;">
			
			<view class=" text-color font-bold flex align-center " style="height: 100rpx;">
				订单信息
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>购买人：</text>
				<text><text>购买人：</text></text>
			</view>
			
			
			<view class="flex" style="height: 70rpx;">
				<text>手机号码：</text>
				<text><text>16767676767</text></text>
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>下单时间：</text>
				<text><text>2021.01.02 12:01:22</text></text>
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>支付时间：</text>
				<text><text>2021.01.02 12:01:22</text></text>
			</view>
			
			<view class="flex" style="height: 70rpx;">
				<text>核销时间：</text>
				<text><text>2021.01.02 12:01:22</text></text>
			</view>
			
			
			
			<view class="flex align-center fixed-right mr-3">
				<text style="font-size: 26upx;">实付金额：</text>
				<text style="color: #FF7200;">￥0.02</text>
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
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
