<template>
	<view style="background-color: #F3F3F3;min-height: 100vh;">
		<u-navbar title="中奖统计" :background="background" title-color="#000" :isBack="true" ></u-navbar>
		
		<view class="flex align-center pl-2 pr-2 bg-white" style="height: 100rpx;">
			<text class="flex-1" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #1D1200;font-size: 32upx;">奖品内容</text>
			<text class="flex-1" style=" font-family: PingFangSC-Regular, PingFang SC;color: #1D1200;font-size: 28upx;">中奖人数</text>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>
		
		<view class=" flex align-center pl-2 pr-2 bg-white" style="height: 100rpx;" v-for="(item,index) in 3" :key="index">
			<text class="flex-1">东航随心飞</text>
			<text class="flex-1 text-center pr-3">1</text>
			<view class=" flex align-center justify-center mr-2" style="width: 100rpx; height: 50rpx;background-color: #FF7200;color: #fff;border-radius: 8rpx;" @click="showDetail(index)">
				<text>查看</text>
			</view>
		</view>
		
		<u-modal v-model="show" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="中奖统计"
		 :show-confirm-button="false" :mask-close-able="true">
		 <view class="mt-1">
			  <divider :height="4"></divider>
		 </view>
		
			<view class="flex  flex-column  text-color mt-1" style="height: 500rpx;overflow-y: scroll;">
			<view class="flex align-center justify-between" v-for="(item,index) in 8" :key="index">
				<view class="flex align-center pl-2" style="height: 120rpx;">
					<image src="../../../static/common/userpic.png" style="height: 80rpx;width: 80rpx;"></image>
					<view class="flex flex-column justify-between ml-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
						<text style="font-size: 28upx;">消费者名称</text>
						<text style="font-size: 24upx;" class="mt-1">17555555555</text>
					</view>
				</view>
				
				<view class="flex align-end flex-column pr-2" >
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">未中奖</text>
					<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">2021.01.02 12:01:22</text>
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
				show:false
			}
		},
		methods: {
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
