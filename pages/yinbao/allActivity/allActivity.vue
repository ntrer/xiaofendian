<template>
	<view style="background-color: #F3F3F3;min-height: 100vh;">
		<u-navbar title="所有活动"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex align-center mt-1"  v-for="(item,index) in 4" :key="index" style="background-color: #fff;height: 200rpx;">
			
			<view class="flex flex-row  ml-4 mr-4">
				<image src="../../../static/common/allActivity.png" style="width: 220rpx;height: 160rpx;"></image>
				 <view class="flex  flex-column">
					 <!-- 名字 -->
					<view class="flex align-center ml-2">
						<text style="font-size: 28rpx;font-family: PingFang SC;font-weight: bold;color: #1D1200;">活动名称</text>
						<view class="ml-2 flex align-center justify-center" style="background: #FF7200;border-radius: 10rpx;height: 36rpx;width: 80rpx;">
							<text style="color: #fff;font-size: 20rpx;">进行中</text>
							<!-- <text>已结束</text> -->
						</view>
					</view>
					<!-- 内容 -->
					 <text class="ml-2 mt-2" style="font-family: PingFang SC;font-weight: 500;color: #757272;">活动内容活动内容</text>
					 <!-- 领券 -->
					 <view class="ml-2 mt-2 flex">
						 <view class="flex align-center justify-center pl-1 pr-1" style="color: #FF7200;font-size: 20rpx;background-color: #FFF0F0;border-radius: 18rpx;height: 40rpx;min-width: 110rpx;">
							 <text>今日参与:</text>
							 <text class="ml-1">0</text>
						 </view>
						 <view class="flex align-center justify-center pl-1 pr-1 ml-2" style="color: #FF7200;font-size: 20rpx;background-color: #FFF0F0;border-radius: 18rpx;height: 40rpx;min-width: 110rpx;">
						 	<text>总参与:</text>
						 	<text class="ml-1">0</text>
						 </view>
					 </view>
				 </view>
			</view>
		</view>
		
		<u-divider fontSize="34" color="#1D1200" margin-top="30" margin-bottom="30" border-color="#DADADA" bg-color="#F3F3F3"> 已结束活动</u-divider>
		
		<view class="flex align-center mt-1"  v-for="(item,index) in 2" :key="index" style="background-color: #fff;height: 200rpx;">
			
			<!-- <divider v-if="index>0" :height="16"></divider> -->
			
			<view class="flex flex-row  ml-4 mr-4">
				<image src="../../../static/common/allActivity.png" style="width: 220rpx;height: 160rpx;"></image>
				 <view class="flex  flex-column">
					 <!-- 名字 -->
					<view class="flex align-center ml-2">
						<text style="font-size: 28rpx;font-family: PingFang SC;font-weight: bold;color: #1D1200;">活动名称</text>
						<view class="ml-2 flex align-center justify-center" style="background:#9F9F9F;border-radius: 10rpx;height: 36rpx;width: 80rpx;">
							<!-- <text style="color: #fff;font-size: 20rpx;">进行中</text> -->
							<text style="color: #fff;font-size: 20rpx;">已结束</text>
						</view>
					</view>
					<!-- 内容 -->
					 <text class="ml-2 mt-2" style="font-family: PingFang SC;font-weight: 500;color: #757272;">活动内容活动内容</text>
					 <!-- 领券 -->
					 <view class="ml-2 mt-2 flex">
						 <view class="flex align-center justify-center pl-1 pr-1" style="color: #F23132;font-size: 20rpx;background-color: #FFF0F0;border-radius: 18rpx;height: 40rpx;min-width: 110rpx;">
							 <text>今日参与:</text>
							 <text class="ml-1">0</text>
						 </view>
						 <view class="flex align-center justify-center pl-1 pr-1 ml-2" style="color: #F23132;font-size: 20rpx;background-color: #FFF0F0;border-radius: 18rpx;height: 40rpx;min-width: 110rpx;">
						 	<text>总参与:</text>
						 	<text class="ml-1">0</text>
						 </view>
					 </view>
				 </view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	export default {
		components:{
			divider
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
