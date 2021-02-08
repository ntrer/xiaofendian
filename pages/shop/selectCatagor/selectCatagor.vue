<template>
	<view style="background-color: #F3F3F3; min-height: 100vh;">
		
		<u-navbar title="请选择分类" :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex align-center text-color justify-between pr-3" style="height: 100rpx;background-color: #fff;margin-top: 4rpx;" @click="toGoodsDetail()">
			<view class="flex align-center">
				<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				<text class="ml-2 font-bold" style="font-size: 32rpx;">管理分类</text>
			</view>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		
		<view class="flex align-center justify-center bg-white" style="height: 160rpx;font-size: 28upx;margin-top: 4rpx;">
			暂无生效中的分类，可先添加商品分类
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
