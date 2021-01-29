<template>
	<view >
		<u-navbar title="推荐店主拿返现"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		<view class="flex flex-column" style="height: 100vh;">
			<image src="../../../static/common/yaoyue_bg.png" style="position: absolute;z-index: 0;width: 100%;height: 100%;"></image>
			
			<view class="flex align-center justify-center " style="border-radius: 50rpx; background: #FFB701;box-shadow: 0px 5px 5px 0px rgba(169, 125, 14, 0.75);margin-left: 200rpx;margin-right: 200rpx;margin-top: 700rpx;z-index: 99;height: 70rpx;">
				
				<text style="font-size: 34upx;color: #fff;">推荐店主拿返现</text>
				
			</view>
			
			<view class="flex align-center justify-center mt-5" style="z-index: 99">
				<image src="../../../static/common/qrcode.png" style="height: 250rpx;width: 250rpx;"></image>
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
