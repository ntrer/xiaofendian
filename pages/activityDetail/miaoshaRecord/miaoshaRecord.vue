<template>
	<view>
		<u-navbar title="秒杀活动-活动记录" :background="background" title-color="#000" title-width="400" :isBack="true" ></u-navbar>
		
		
		<view class="flex align-center justify-between pl-4 pr-4" style="height: 120rpx;">
			
			<u-search placeholder="手机号/微信昵称" v-model="keyword" shape="round" :show-action="false" :animation="true" style="width: 520rpx;"></u-search>
			
			<view class=" flex align-center justify-center" style="width: 120rpx; height: 50rpx;background-color: #FF7200;color: #fff;border-radius: 8rpx;" @click="search(keyword)">
				<text>查询</text>
			</view>
			
		</view>
		
		<divider :height="4"></divider>
		
		<view class="" v-for="(item,index) in 3" :key="index">
			<view class="flex align-center justify-between">
				<view class="flex align-center pl-2" style="height: 120rpx;">
					<image src="../../../static/common/userpic.png" style="height: 80rpx;width: 80rpx;"></image>
					<view class="flex flex-column justify-between ml-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
						<text style="font-size: 28upx;">消费者名称</text>
						<text style="font-size: 24upx;" class="mt-1">17555555555</text>
					</view>
				</view>
				
				<view class="flex align-end flex-column pr-2" >
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FF7200;font-size: 28upx;">￥10.00</text>
					<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">2021.01.02 12:01:22</text>
				</view>
			</view>
			
			<view class=" pl-2 pr-2">
				<divider :height="4"></divider>
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
				checkedIndex:1,
				show:false
			}
		},
		methods: {
	
			
	
		}
	}
</script>

<style>
 ::-webkit-scrollbar{
 		  display: none;
 	}
</style>
