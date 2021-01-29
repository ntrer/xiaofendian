<template>
	<view>
		<u-navbar :is-back="true" title=" " :background="background">
			<view class="slot-wrap">
				<text class="ml-4" style="font-size: 32rpx;">{{fans}}</text>
			</view>
		</u-navbar>
		
		<view class="flex align-center justify-between pl-4 pr-4" style="height: 120rpx;">
			
			<u-search placeholder="手机号/微信昵称" v-model="keyword" shape="round" :show-action="false" :animation="true" style="width: 520rpx;"></u-search>
			
			<view class="rounded-1 flex align-center justify-center" style="width: 120rpx; height: 50rpx;background-color: #FF7200;color: #fff;">
				<text>查询</text>
			</view>
			
		</view>
		<divider :height="4"></divider>
		
		<!-- 排序 -->
		<view class="flex align-center justify-between pl-3 pr-3" style="height: 100rpx;">
			<text style="font-size: 30rpx;" :style="isMoren?'color: #1D1200;':'color:#9F9F9F'"   @click="moren()">默认</text>
			<view class="flex align-center justify-between">
				<text style="font-size: 30rpx;" :style="order==2||order==3?'color: #1D1200;':'color:#9F9F9F'" @click="paixu(order)"  >消费金融</text>
				<image :src="orderSrc" style="height: 46rpx;width: 46rpx;"></image>
			</view>
		</view>
		
		
		<!-- 粉丝列表 -->
		<view class="pl-4 pr-4 mt-2" v-for="(item,index) in 10">
			<view class="flex align-center justify-between">
				<view class="flex align-center justify-between">
					<free-avater size="100" style="margin-right: 20rpx;"></free-avater>
					<text style="font-size: 30rpx;font-weight:600;">Misaki</text>
				</view>
				<view class="flex align-center justify-between pr-1">
					<text style="font-size: 32rpx;font-weight:600;">￥</text>
					<text style="font-size: 36rpx;font-weight:600;">99</text>
				</view>
			</view>
			<view class="mt-1">
				<divider :height="4"></divider>
			</view>
			
		</view>
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import freeAvater from'@/components/free-avater.vue'
	export default {
		components:{
			divider,
			freeAvater
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				fans:"总粉丝数 (5人)",
				isMoren:true,
				order:1,
				orderSrc:'../../../static/common/paixu1.png'
			}
		},
		methods: {
			
			//默认排序
			moren(){
				this.isMoren=true
				this.order=1
				this.orderSrc='../../../static/common/paixu1.png'
			},
			
			paixu(index){
				this.isMoren=false
				if(index==2||index==1){
					this.order=3
					this.orderSrc='../../../static/common/paixu2.png'
				}
				
				 if(index==3){
					this.order=2
					this.orderSrc='../../../static/common/paixu3.png'
				}
				console.log(this.order)
			}
		}
	}
</script>

<style>
.slot-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		/* padding: 0 30rpx; */
	}
</style>
