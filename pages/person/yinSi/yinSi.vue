<template>
	<view>
		<u-navbar title="隐私服务"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		
		<!-- 启航新零售服务协议 -->
		<view class="flex align-center justify-between ml-2 mr-2 text-color" style="height: 100rpx;">
			<text>启航新零售服务协议</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		<!-- 隐私协议 -->
		<view class="flex align-center justify-between ml-2 mr-2 text-color" style="height: 100rpx;">
			<text>隐私协议</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		<!-- 活动发布协议 -->
		<view class="flex align-center justify-between ml-2 mr-2 text-color" style="height: 100rpx;">
			<text>活动发布协议</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		<!-- 店铺服务协议 -->
		<view class="flex align-center justify-between ml-2 mr-2 text-color" style="height: 100rpx;">
			<text>店铺服务协议</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components:{
			divider,
			uniIcon
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
