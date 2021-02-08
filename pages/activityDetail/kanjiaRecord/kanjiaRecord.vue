<template>
	<view>
		<u-navbar title="砍价活动-活动记录" :background="background" title-color="#000" title-width="400" :isBack="true" ></u-navbar>
		
		
		<view class="flex align-center justify-between pl-4 pr-4" style="height: 120rpx;">
			
			<u-search placeholder="手机号/微信昵称" v-model="keyword" shape="round" :show-action="false" :animation="true" style="width: 520rpx;"></u-search>
			
			<view class=" flex align-center justify-center" style="width: 120rpx; height: 50rpx;background-color: #FF7200;color: #fff;border-radius: 8rpx;" @click="search(keyword)">
				<text>查询</text>
			</view>
			
		</view>
		
		<view class="flex align-center justify-between bg-white " style="height: 100rpx;box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.0);">
			<view class="flex flex-1 align-center  text-color  flex-column" style="height: 100rpx; font-size: 28rpx;" @click="switchType(1)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==1?'font-bold':''">全部</text>
				<view v-if="checkedIndex==1" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			
			<view class="flex flex-1 align-center text-color flex-column" style="height: 100rpx;font-size: 28rpx;" @click="switchType(2)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==2?'font-bold':''">砍价中</text>
				<view v-if="checkedIndex==2" class="main-bg-color" style="width: 100rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			<view class="flex flex-1 align-center text-color flex-column" style="height: 100rpx;font-size: 28rpx;" @click="switchType(3)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==3?'font-bold':''">砍价成功</text>
				<view v-if="checkedIndex==3" class="main-bg-color" style="width: 100rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			<view class="flex flex-1 align-center text-color flex-column" style="height: 100rpx;font-size: 28rpx;" @click="switchType(4)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==4?'font-bold':''">砍价失败</text>
				<view v-if="checkedIndex==4" class="main-bg-color" style="width: 100rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
		</view>
		<divider :height="4"></divider>
		
		
		
		<view class="" v-for="(item,index) in 3" :key="index">
			<view class="flex align-center justify-between" >
				<view class="flex align-center pl-2" style="height: 120rpx;">
					<image src="../../../static/common/userpic.png" style="height: 80rpx;width: 80rpx;"></image>
					<view class="flex flex-column justify-between ml-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
						<text style="font-size: 28upx;">消费者名称</text>
						<text style="font-size: 24upx;" class="mt-1">17555555555</text>
					</view>
				</view>
				
				<view class="flex align-end flex-column " >
					<view class="flex align-center">
						<text style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #1D1200;">￥0.02</text>
						<text class="ml-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FF7200;font-size: 28upx;">砍价成功</text>
					</view>
					
					<!-- <text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">砍价失败</text>
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1879F1;font-size: 28upx;">砍价中</text> -->
					<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">2021.01.02 12:01:22</text>
				</view>
				
				<view class=" flex align-center justify-center mr-2" style="width: 120rpx; height: 50rpx;background-color: #FF7200;color: #fff;border-radius: 8rpx;" @click="showDetail(index)">
					<text>查看</text>
				</view>
			
			</view>
			
			<view class=" pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
		</view>
		
		<u-modal v-model="show" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="砍价统计"
		 :show-confirm-button="false" :mask-close-able="true">
		 <view class="mt-1">
			  <divider :height="4"></divider>
		 </view>
		
		    <view class="flex  flex-column  text-color mt-1" style="height: 500rpx;overflow-y: scroll;">
			<view class="" v-for="(item,index) in 10" :key="index">
				<view class="flex align-center justify-between" >
					<view class="flex align-center pl-2" style="height: 120rpx;">
						<image src="../../../static/common/userpic.png" style="height: 80rpx;width: 80rpx;"></image>
						<view class="flex flex-column justify-between ml-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
							<text style="font-size: 28upx;">消费者名称</text>
							<text style="font-size: 24upx;" class="mt-1">17555555555</text>
						</view>
					</view>
					
					<view class="flex align-end flex-column pr-2" >
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FF7200;font-size: 28upx;">-￥10.55</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">2021.01.02 12:01:22</text>
					</view>
					
					
				
				</view>
				
				<view class=" pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
			</view>
			 </view>
		</u-modal>
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import freeAvater from'@/components/free-avater.vue'
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	export default {
		components:{
			divider,
			freeAvater,
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				keyword:"",
				checkedIndex:1,
				show:false
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
				else if(index==3){
					
					this.checkedIndex=3
				}
				else{
					
					this.checkedIndex=4
				}
			},
			
			showDetail(){
				this.show=true
			}
		}
	}
</script>

<style>
 ::-webkit-scrollbar{
 		  display: none;
 	}
</style>
