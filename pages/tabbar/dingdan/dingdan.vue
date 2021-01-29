<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar  :background="background" title-color="#fff" title="订单收益" :isBack="false"></u-navbar>
	     <view class="" style="height: 240rpx;background-color: #FF7200;"></view>
	     <!-- 浮动块 -->
	     <view class="ml-2 mr-2" style="height: 340rpx; background: #FFFFFF;box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);border-radius: 8px; margin-top: -150rpx;">
			 
			 <!-- 自定义查询 -->
			 <view class="flex align-center" style="color: #1879F1;font-size: 30upx;height: 100rpx;" @click="toSearch()">
				 <text style="position: absolute;right: 50rpx;">自定义查询</text>
			 </view>
			 
			 <view class="flex justify-between ">
				 
				 <view class="flex flex-column flex-1 align-center" @click="toOrder()">
					 <text class="text-color" style="font-size: 28rpx;">今日收款0笔</text>
					 <text class="text-color mt-2 mb-2" style="font-size: 72rpx;">￥0</text>
					 <text style="font-size: 28rpx;color: #1879F1;">明细分析</text>
				 </view>
				 
				 <view class="" style="width: 4rpx;height: 200rpx;background: #EFEFEF;border-radius: 1rpx;"></view>
				 
				 <view class="flex flex-column flex-1 align-center">
				 	<text class="text-color" style="font-size: 28rpx;">余额</text>
				 	<text class="text-color mt-2 mb-2" style="font-size: 72rpx;">￥0</text>
				 	<text style="font-size: 28rpx;color: #1879F1;">资金管理</text>
				 </view>
				 
			 </view>
			 
		 </view>
		 
		 <!-- 分类 -->
		 <view class="flex align-center bg-white mt-2" style="height: 100rpx;">
			 <scroll-view scroll-x="true" class="scroll-row" style="height: 80rpx;">
			 	<view v-for="(item,index) in catagor" :key="index"
			 	class="scroll-row-item px-2 py-2 "
			 	:class="tabIndex===index?'text-checked-color font-bold':''"
			 	@click="changeIndex(index)"
				style="font-size: 30upx;"
			 	>
			 	{{item.name}}
			 	</view>
			 </scroll-view>
		 </view>
		 
		 <view class="flex align-center text-color ml-2" style="height: 80rpx;font-size: 28upx;">
			 {{time}}
		 </view>
		 
		 <!-- 订单列表 -->
		 <view class="flex flex-column justify-center pl-2 pr-2 bg-white" v-for="(item,index) in 4" :key="index">
			 
			 <view class="flex align-center justify-between" style="height: 160rpx;">
				 
				 <view class="flex flex-column">
					 <text class="text-color" style="font-size: 30upx;">优惠买单</text>
					 <text class="mt-2" style="font-size: 26upx;color: #8A8A8A;">01.20 15:53</text>
				 </view>
				 
				 <view class="flex flex-column align-end">
				 	<text class="text-color" style="font-size: 30upx;color: #FF7200;">+16.00</text>
				 	<text class="mt-2" style="font-size: 26upx;color: #8A8A8A;">余额：80.66</text>
				 </view>
				 
				 
			 </view>
			 
			 <divider :height="4"></divider>
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
					backgroundImage: 'linear-gradient(0deg, #FF7200 0%, #FFB183 100%)'
				},
				tabIndex:0,
				time:"2020.01.20",
				catagor: [{
						name: '全部',
						id:1
					}, {
						name: '优惠买单',
						id:2
					},
					{
						name: '到店核销',
						id:3
					},
					{
						name: '活动线上',
						id:4
					},
					{
						name: '活动到店',
						id:5
					},
					{
						name: '余额',
						id:6
					}
				],
			}
		},
		methods: {
			changeIndex(index) {
				if (this.tabIndex == index) {
					return;
				}
				this.tabIndex = index;
				
			},
			
			toSearch(){
				uni.navigateTo({
					url:'../../dingdan/ziDingYiChaXun/ziDingYiChaXun'
				})
			},
			
			toOrder(){
				uni.navigateTo({
					url:'../../dingdan/orderAnalyze/orderAnalyze'
				})
			}
		}
	}
</script>

<style>

</style>
