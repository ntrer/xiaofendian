<template>
	<view :style="{
		height: height+'rpx',
		backgroundColor: bgColor}"></view>
</template>

<script>
	
	export default{
		props:{
			// 整个divider的高度单位rpx
			height: {
				type: [Number, String],
				default: '18'
			},
			// 整个divider的背景颜色
			bgColor: {
				type: String,
				default: '#F5F5F5'
			},
		}
	}
	
	
</script>

<style>
	
</style>
