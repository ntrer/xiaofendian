<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="所有订单"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex align-center justify-between bg-white" style="height: 100rpx;box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);">
			<view class="flex flex-1 align-center  flex-column" :class="typeIndex==1?'text-color font-bold':''"    style="height: 100rpx; font-size: 32rpx;" @click="switchType(1)">
				<text style="margin-top: 30rpx;">待支付</text>
				<view v-if="typeIndex==1" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			
			<view class="flex flex-1 align-center  flex-column" :class="typeIndex==2?'text-color font-bold':''" style="height: 100rpx;font-size: 32rpx;" @click="switchType(2)">
				<text style="margin-top: 30rpx;">已支付</text>
				<view v-if="typeIndex==2" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			
			<view class="flex flex-1 align-center  flex-column"  :class="typeIndex==3?'text-color font-bold':''" style="height: 100rpx;font-size: 32rpx;" @click="switchType(3)">
				<text style="margin-top: 30rpx;">已核销</text>
				<view v-if="typeIndex==3" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
		</view>
		
		
		<view class="bg-white" >
			<view class="pl-2 pr-2" v-for="(item,index) in 2" :key="index" @click="toOrderDetail()">
				<view class="flex align-center justify-between  " style="height: 220rpx;">
					<view class="flex align-center justify-between">
						<image src="../../../static/common/live_logo.png" style="width: 160rpx;height: 160rpx;"></image>
						<view class="flex flex-column  ml-2" style="height: 160rpx;">
							<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;width: 360rpx;">商品券名称比较长的名字是德甲还记得上次时间长参加深刻的基础肯定</text>
							<text class=" mt-1" style="color: #8A8A8A;">2021.01.02 12:01:22</text>
						</view>
					</view>
		
					<view class="flex flex-column justify-between " style="height: 160rpx;text-align: end;">
						<text v-if="typeIndex==1" class="text-color">待支付</text>
						<text v-if="typeIndex==2" class="text-color">已支付</text>
						<text v-if="typeIndex==3" class="text-color">已核销</text>
						<text class="text-color font-bold ">￥199999.9</text>
					</view>
		
		
				</view>
				<divider :height="4"></divider>
			</view>
		</view>
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	export default {
		components:{
			divider,
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				typeIndex:1,
			}
		},
		methods: {
			switchType(num){
				this.typeIndex=num;
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
