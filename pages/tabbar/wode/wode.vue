<template>
	<view style="background-color: #F5F5F5;height: 100vh;">
		
		<u-navbar :is-back="false" title="我的粉丝" title-color="#fff" :background="background"></u-navbar>
		
		<!-- 今日数据 标题-->
		<view class="flex flex-row align-center pl-4 pr-4 pt-4 bg-white">
			<text style="font-size: 32rpx;font-weight: 600;" class="mr-2">今日数据</text>
			<text style="font-size: 24rpx;" >(数据截止到30分钟前)</text>
		</view>
		
		<!-- 今日数据宫格 -->
		<view class="flex align-center  bg-white" style="height: 200rpx;">
			<view class="flex align-center justify-center flex-column flex-1">
				<text>今日数据</text>
				<text class="mt-4">{{todyAdd}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>本月浏览</text>
				<text class="mt-4">{{todyVisit}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>消费粉丝</text>
				<text class="mt-4">{{todyConsumptionFansNum}}</text>
			</view>
		</view>
		
		<!-- 分割线 -->
		<view class="ml-4 mr-4">
			<divider :height="4"></divider>
		</view>

          <!-- 本月数据标题 -->
         <view class="flex flex-row align-center pl-4 pr-4 bg-white" style="height: 80rpx;">
         	<text style="font-size: 32rpx;font-weight: 600;" class="mr-2">本月数据</text>
         	<text style="font-size: 24rpx;" >(数据截止到30分钟前)</text>
         </view>

          <!-- 本月数据 -->
           <view class="flex align-center  bg-white" style="height: 100rpx;">
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{monthAdd}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{monthVisit}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1">{{monthConsumptionFansNum}}</text>
			</view>
		</view>
		
		
		<!-- 分割线 -->
		<divider :height="30"></divider>
		
		<view class="flex align-center justify-between p-4 bg-white" style="height: 120rpx;" @click="toFans()">
			<text style="font-size:32rpx ; font-weight: 600;">总粉丝数</text>
			<view class="flex align-center justify-center flex-row">
				<text style="font-size: 28rpx;"></text>
				<text style="font-size: 44rpx; margin-bottom: 5rpx;" class="ml-1">></text>
			</view>
		</view>
		
		<!-- 分割线 -->
		<!-- <divider :height="30"></divider> -->
		
		<!-- 动态标题 -->
	<!-- 	<view class="ml-4 mt-4">
			<text style="font-size: 32rpx;font-weight: 600;" >粉丝动态</text>
		</view>
		
		<view class="flex align-center justify-center mt-4 flex-column" v-if="dataList.length==0">
			<text>
				微信好友领券，参与活动才会产生粉丝动态喔~~
			</text>
			
			<text>
				赶紧去创建活动邀请微信好友参与喔~~
			</text>
		</view> -->

		<!-- 动态列表 -->
		<!-- <view v-if="dataList.length>0" class="flex flex-column" v-for="(item,index) in 10">
			<view class="pl-4 pr-4  mt-4">
				<view class="mb-1">
					<text >2021-01-19</text>
				</view>
				<divider :height="4"></divider>
				
				<view class="flex align-center justify-between">
					<view class="flex align-center flex-row" style="margin-top: 16rpx;">
						<free-avater size="40" style="margin-right: 10rpx;"></free-avater>
						<text>Misaki浏览了店铺详情</text>
					</view>
					<view class="flex align-center justify-center">
						<text>10:34</text>
					</view>
				</view>
				 <view class="mt-2 p-2 ml-4 rounded flex align-center" style="background-color: #fff6e5;min-height: 100rpx;">
					 <text>您的店铺详情正在被浏览</text>
				 </view>
			</view>
			
			<view class="mt-2">
				<divider :height="20"></divider>
			</view>
			
		</view> -->
		
		
		
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
		
		components: {
			divider,
			freeAvater
		},
		
		data() {
			return {
				background:{
					backgroundImage: 'linear-gradient(0deg, #FF7200 0%, #FFB183 100%)'
				},
				monthAdd:0,
				monthConsumptionFansNum:0,
				monthVisit:0,
				todyAdd:0,
				todyConsumptionFansNum:0,
				todyVisit:0,
				dataList:["1"]
			}
		},
		
		onLoad() {
			this.getData();
		},
		
		onPullDownRefresh() {
			this.getData();
		},
		
		
		
		methods: {
			
			// 获取首页粉丝数据
			getData(){
				// 发送到服务端
				$H.post("/fansInit").then((res) => {
					//请求成功
					console.log(res);
					this.monthAdd=res.monthAdd
					this.monthConsumptionFansNum=res.monthConsumptionFansNum
					this.monthVisit=res.monthVisit
					this.todyAdd=res.todyAdd
					this.todyConsumptionFansNum=res.todyConsumptionFansNum
					this.todyVisit=res.todyVisit
					
				}).catch((e) => {
					//请求失败
					console.log("失败"+e)
				})
			},
			
			
			toFans(){
				uni.navigateTo({
					url:'../../wode/fans/fans'
				})
			}
		}
	}
</script>

<style>

</style>
