<template>
	<view>
		<u-navbar title="大转盘-活动记录" :background="background" title-color="#000" :isBack="true" ></u-navbar>
		
		<view class="flex align-center justify-between pl-4 pr-4" style="height: 120rpx;">
			
			<u-search placeholder="手机号/微信昵称" v-model="keyword" shape="round" :show-action="false" :animation="true" style="width: 520rpx;"></u-search>
			
			<view class=" flex align-center justify-center" style="width: 120rpx; height: 50rpx;background-color: #FF7200;color: #fff;border-radius: 8rpx;" @click="search(keyword)">
				<text>查询</text>
			</view>
			
		</view>
		<divider :height="4"></divider>
		
		<view class="flex align-center justify-between" v-for="(item,index) in 3" :key="index">
			<view class="flex align-center pl-2" style="height: 120rpx;">
				<image src="../../../static/common/userpic.png" style="height: 80rpx;width: 80rpx;"></image>
				<view class="flex flex-column justify-between ml-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text style="font-size: 28upx;">消费者名称</text>
					<text style="font-size: 24upx;" class="mt-1">17555555555</text>
				</view>
			</view>
			
			<view class="flex align-end flex-column " >
				<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">未中奖</text>
				<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">2021.01.02 12:01:22</text>
			</view>
			
			<view class=" flex align-center justify-center mr-2" style="width: 160rpx; height: 60rpx;background-color: #FF7200;color: #fff;border-radius: 8rpx;" >
				<text>增加一次</text>
			</view>
		</view>
		
		
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
			}
		},
		methods: {
			switchType(index){
				if(index==1){
					
					this.checkedIndex=1
					
				}
				else{
					
					this.checkedIndex=2
				}
			},
		}
	}
</script>

<style>

</style>
