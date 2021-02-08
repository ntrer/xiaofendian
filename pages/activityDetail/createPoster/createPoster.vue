<template>
	<view>
		<u-navbar title="生成打印海报" :background="background" title-color="#000" :isBack="true" ></u-navbar>
		
		<view class="flex align-center justify-between bg-white mt-1" style="height: 120rpx;box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.0);">
			<view class="flex flex-1 align-center  text-color  flex-column" style="height: 100rpx; font-size: 32rpx;" @click="switchType(1)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==1?'font-bold':''">易拉宝</text>
				<view v-if="checkedIndex==1" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			
			<view class="flex flex-1 align-center text-color flex-column" style="height: 100rpx;font-size: 32rpx;" @click="switchType(2)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==2?'font-bold':''">海报</text>
				<view v-if="checkedIndex==2" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			
			<view class="flex flex-1 align-center text-color flex-column" style="height: 100rpx;font-size: 32rpx;" @click="switchType(3)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==3?'font-bold':''">活动码</text>
				<view v-if="checkedIndex==3" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
		</view>
		
		<view class="flex align-center justify-center pl-4 pr-4 mt-2" style="height: 660rpx;width: 300rpx;">
			<!-- <image src="" style="height: 100%;width: 300rpx;"></image> -->
		</view>
		
		
		<view class="flex   flex-column pl-4 mt-3" style="height: 160rpx;">
			<text>默认尺寸：800mm×1800mm</text>
			<text>把链接发给打印店，使用电脑访问链接即可打印海拔</text>
		</view>
		
		
		<view  class="flex align-center justify-center fixed-bottom">
			<view class="flex flex-2 align-center justify-center" style="background-color: #000000;color: #fff;font-size: 34upx;height: 100rpx;">
				分享打印链接
			</view>
			<view class="flex flex-4 align-center justify-center" style="background-color: #FF7200;color: #fff;font-size: 34upx;height: 100rpx;">
				复制打印链接
			</view>
		</view>
		
		
	</view>
</template>

<script>
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				checkedIndex:1,
			}
		},
		methods: {
			
			switchType(index){
				if(index==1){
					
					this.checkedIndex=1
					
				}
				else if(index==2){
				
					this.checkedIndex=2
					
				}
				else{
					
					this.checkedIndex=3
					
				}
			},
		}
	}
</script>

<style>

</style>
