<template>
	<view>
		<u-navbar title="请选择感兴趣的店铺"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		
		<view class=" " v-for="(item,index) in catagor" :key="index">
			<view class="flex align-center text-color" style="height: 85rpx;background-color: #fff;font-weight: 500;">
				<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view> 
				<text class="ml-2" style="font-size: 32rpx;">{{item.name}}</text>
			</view>
			
			<view class="flex flex-wrap pl-2 pr-2 " style="justify-content: space-between;
		align-content: space-between;">
				<view class="flex align-center justify-center mr-1 mt-1" 
				style="height: 120rpx;width: 160rpx; background: rgba(255, 114, 0, 0.1);border-radius: 4rpx;"  v-for="(item2,index2) in item.secondCatagor" :key="index2">
					{{item2.name}}
				</view>
			</view>
			
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				
				catagor:[
					{
						name:"娱乐",
						secondCatagor:[{
							name: '全部',
							id:1
						}, {
							name: '零售',
							id:2
						},
						{
							name: '美食娱乐',
							id:3
						},
						{
							name: '美业休闲',
							id:4
						},
						{
							name: '亲子教培',
							id:5
						},
						{
							name: 'dota',
							id:6
						},
						{
							name: '亲子教培2',
							id:7
						},
						{
							name: '亲子教培3',
							id:8
						},
						]
					},
					{
						name:"零用",
						secondCatagor:[{
							name: '全部',
							id:1
						}, {
							name: '零售',
							id:2
						},
						{
							name: '美食娱乐',
							id:3
						},
						{
							name: '美业休闲',
							id:4
						},
						{
							name: '亲子教培',
							id:5
						},
						{
							name: 'dota',
							id:6
						},
						{
							name: '亲子教培2',
							id:7
						},
						{
							name: '亲子教培3',
							id:8
						},
						]
					},
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
