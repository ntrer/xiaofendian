<template>
	<view>
		<u-navbar title="微信直播列表"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
	<divider :height="10"></divider>	
	<view class="flex align-center" style="height: 80rpx;">
		
		<view class="fixed-right mr-5 rounded-1 flex align-center justify-center" style="border: #9F9F9F solid 1rpx;color: #9F9F9F;font-size: 26rpx;height: 44rpx;width: 100rpx;">
			筛选⏷
		</view>
	</view>
	<view class="ml-3 mr-3">
		<divider :height="4"></divider>
	</view>
	
	<!-- 直播列表 -->
	<view class="flex flex-column ml-3 mr-3">
		<view class="flex justify-between align-center" style="height: 150rpx;">
			<view class="flex justify-between ">
				<image src="../../static/common/live_logo.png" style="height: 106rpx;width: 106rpx;"></image>
				<view class="flex  justify-center flex-column ml-2">
					<text class="text-color font-bold" style="font-size: 32rpx;">直播名称</text>
					<text class="mt-2" style="font-size: 26rpx;color: #9F9F9F;">01-18 10:26:13</text>
				</view>
			</view>
			
			<image src="../../static/common/bofang2.png" style="height: 60rpx;width: 60rpx;margin-right: 40rpx;"></image>
			
		</view>	
		<divider :height="4"></divider>
	</view>
		
	
	<view class="fixed-bottom main-bg-color font-bold flex align-center justify-center" style="height: 96rpx;font-size: 32rpx;color: #fff;" @click="toCreateLive()">
		创建直播
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
			toCreateLive(){
				uni.navigateTo({
					url:'../createLive/createLive'
				})
			}
		}
	}
</script>

<style>

</style>
