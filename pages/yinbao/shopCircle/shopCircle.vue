<template>
	<view >
		<u-navbar title="任务平台"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	    
		
		<view class="flex  justify-center font-bold bg-img" style="font-size: 36rpx;color: #fff;height: 360rpx;">
			<text  style="margin-top: 80rpx;z-index: 99;">店铺名称</text>
		</view>
		
		
		<!-- 浮动块 -->
		<view class="ml-3 mr-3 pt-5" style="height: 280rpx;background: linear-gradient(90deg, #F33132 0%, #FFB183 100%);
box-shadow: 0rpx 0rpx 32rpx 0rpx rgba(244, 49, 50, 0.4);border-radius: 10rpx;margin-top: -150rpx;">
			
			<text style="font-size: 32rpx;font-weight: bold;color: #fff; margin-left: 42rpx;">店铺收益</text>
			<!-- 4个数据块 -->
			<view class="flex flex-row pt-5 pl-2 pr-2" >
				<view class="flex flex-1 align-center  flex-column" style="font-size: 28rpx;color: #fff;">
					<text>平台任务</text>
					<text class="mt-2">{{taskNum}}</text>
				</view>
				
				<view class="flex flex-1 align-center  flex-column" style="font-size: 28rpx;color: #fff;">
					<text>发布任务</text>
					<text class="mt-2">{{taskingNum}}</text>
				</view>
				
				<view class="flex flex-1 align-center  flex-column" style="font-size: 28rpx;color: #fff;">
					<text>佣金收益</text>
					<text class="mt-2">￥{{getMoney}}</text>
				</view>
				
				<view class="flex flex-1 align-center  flex-column" style="font-size: 28rpx;color: #fff;">
					<text>佣金支出</text>
					<text class="mt-2">￥{{payMoney}}</text>
				</view>
				
			</view>
			
		</view>
		
		
		<!-- 3个功能块 -->
		
		<view class=" flex flex-row mt-7">
			<view class="flex flex-1 justify-center" style="height: 160rpx;">
				<view class="flex align-center justify-center flex-column font-bold" style="font-size: 24rpx;" @click="toShopTask()">
					<image src="../../../static/common/pingtai_renwu.png" style="height: 80rpx;width: 80rpx;"></image>
					<text class="mt-2 text-color">平台任务</text>
				</view>
			</view>
			
			<view class="flex flex-1 justify-center font-bold" style="height: 160rpx;font-size: 24rpx;" @click="toFaBu()">
				<view class="flex align-center justify-center flex-column" >
					<image src="../../../static/common/fabu_renwu.png" style="height: 80rpx;width: 80rpx;"></image>
					<text class="mt-2 text-color">发布的任务</text>
				</view>
			</view>
			
			<view class="flex flex-1 justify-center font-bold" style="height: 160rpx;font-size: 24rpx;" @click="toYongJin()">
				<view class="flex align-center justify-center flex-column">
					<image src="../../../static/common/wodeyongjin.png" style="height: 80rpx;width: 80rpx;"></image>
					<text class="mt-2 text-color">我的佣金</text>
				</view>
			</view>
			
		</view>
		
		<!-- 发布任务 -->
		
		<view class="main-bg-color flex align-center justify-center " style="font-size: 36rpx;color: #fff; height: 75rpx; margin-left: 140rpx;margin-right: 140rpx;margin-top: 100rpx; border-radius: 50rpx;" @click="toRenWu()">
			 发布任务 		 
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
				background:{
					backgroundColor: '#fff',
				},
				taskNum:0,
				taskingNum:0,
				getMoney:0,
				payMoney:0
			}
		},
		
		onLoad() {
			this.InitData()
		},
		
		methods: {
			
			
			InitData(){
				// 发送到服务端
				$H.get("/taskInit").then((res) => {
					//请求成功
					console.log(res)
					this.taskNum=res.data.totalTask
					this.taskingNum=res.data.totalCommission
					this.getMoney=res.data.wati_acount
					this.payMoney=res.data.totalPay
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			toYongJin(){
				uni.navigateTo({
					url:'../woDeYongJin/woDeYongJin'
				})
			},
			
			toShopTask(){
				uni.navigateTo({
					url:'../shopTask/shopTask'
				})
			},
			toYaoYue(){
				uni.navigateTo({
					url:'../tuiJianYaoYue/tuiJianYaoYue'
				})
			},
			
			toFaBu(){
				uni.navigateTo({
					url:'../fabuTask/fabuTask'
				})
			},
			
			toRenWu(){
				uni.navigateTo({
					url:'../faBuRenWu/faBuRenWu'
				})
			}
		}
	}
</script>

<style>
.bg-img{
	background-image: url("https://imgs.aixifan.com/o_1et22nt5d1hln145d1pjs1f2d1caj7.png");
	background-size: 100% 100%;
}
</style>
