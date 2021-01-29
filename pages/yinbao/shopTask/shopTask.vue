<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="商圈任务"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex align-center justify-between bg-white" style="height: 100rpx;box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);">
			<view class="flex flex-1 align-center  text-color font-bold flex-column" style="height: 100rpx; font-size: 32rpx;" @click="switchType(1)">
				<text style="margin-top: 30rpx;">平台任务</text>
				<view v-if="index==1" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			
			<view class="flex flex-1 align-center text-color font-bold flex-column" style="height: 100rpx;font-size: 32rpx;" @click="switchType(2)">
				<text style="margin-top: 30rpx;">已接取任务</text>
				<view v-if="index==2" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
		</view>
		
		<!-- 任务列表 -->
		<view class="flex flex-column m-3 bg-white" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.02);" v-for="(item,index) in 3" :key="index">
			<!-- 头部 -->
			<view class="flex align-center justify-between pl-2 pr-2" style="background-color: #FFE1E1;height: 50rpx;">
				<view style="color: #DF6162;font-size: 20rpx;">
					<text>已领取</text>
					<text class="ml-2">0张</text>
				</view>
				<view style="color: #DF6162;font-size: 20rpx;">
					<text>已使用</text>
					<text class="ml-2">0张</text>
				</view>
				
			</view>
			<!-- 内容 -->
			<view class="flex" style="height: 160rpx;">
				<view class="font-bold flex align-center justify-center flex-1" style="color: #FF7200;font-size: 44rpx;">
					兑换券
				</view>
				
				<view class="flex flex-column text-color justify-center flex-1" style="font-size: 20rpx;">
					<text>嘀嘀打车券</text>
					<text class="mt-1">有效期：01.20 ~ 01.30</text>
					<text class="mt-1">每人限领 5 张</text>
				</view>
				
				<view class="flex flex-1 align-center justify-center">
					<view class="rounded-1 flex align-center justify-center " style="background-color:#FF7200;height: 40rpx; width: 100rpx;" @click="getMoney()">
						<text style="font-size: 26upx;color: #fff;">领取</text>
					</view>
				</view>
				
				
			</view>
			<!-- 使用范围 -->
			<view class="flex align-center justify-between pl-2 pr-2" style="height: 60rpx;background-color: #F8F8F8;" @click="changeShow(index)">
				<text style="color: #9F9F9F;font-size: 20upx;">全店通用</text>
				<view class="flex align-center justify-between" >
					<text style="font-size: 24rpx; color: #9f9f9f;">佣金明细</text>
					<!-- <image :src="showDetail?'../../static/common/arrowUp.png':'../../static/common/arrowDown.png'" style="width: 18rpx;height: 16rpx;margin-left: 10rpx;" ></image> -->
				</view>
			</view>
			
			<view v-if="showDetail&&showIndex==index">
				<divider :height="4"></divider>
				<view class="slot-content  text-color flex align-center pl-2 pr-2" style="background-color: #F8F8F8;font-size: 24rpx;min-height: 100rpx;line-height: 40rpx;">
					<text>只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来</text>
				</view>
			</view>
			
		</view>
		
		
		<!-- 暂无数据 -->
		<!-- <view  class="flex align-center justify-center flex-column" style="font-size: 28rpx;color: #9F9F9F;margin-top: 320rpx;">
			<image src="../../static/common/no_task.png" style="height: 206rpx;width: 218rpx;"></image>
			<text style="margin-top: 20rpx;">目前暂无任务</text>
		</view> -->
		
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
				},
				index:1,
				showDetail:false,
				showIndex:-1
			}
		},
		methods: {
			switchType(num){
				this.index=num;
			},
			changeShow(ind){
				this.showIndex=ind;
				this.showDetail=!this.showDetail
			}
		}
	}
</script>

<style>
  .u-dropdown{
	  
  }
</style>
