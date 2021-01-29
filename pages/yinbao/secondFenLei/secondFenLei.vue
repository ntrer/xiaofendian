<template>
	<view>
		<u-navbar :title="title"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	     <!-- 分类列表 -->
	     <view class="flex flex-column" v-for="(item,index) in catagor" :key="index" @click="chooseFenLei(item)">
	     	<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
	     		<text>{{item.name}}</text>
	     		<uni-icon  :size="20" color="#000" type="arrowright" />
	     	</view>
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
				},
				title:"",
				catagor: [{
						name: '全部订单',
						id:1
					}, {
						name: '门店优惠订单',
						id:2
					},
					{
						name: '到店核销订单',
						id:3
					},
					{
						name: '活动线上订单',
						id:4
					},
					{
						name: '活动到店买单',
						id:5
					},
					{
						name: '余额充值',
						id:6
					},
					{
						name: '余额核销',
						id:7
					},
					{
						name: '商城订单',
						id:8
					}
				],
			}
		},
		
		onLoad(e) {
			this.title=e.name
		},
		
		
		methods: {
			chooseFenLei(data){
				// 获取当前页面栈
				let pages = getCurrentPages()
				// pages数组中的最后一个为当前页面，倒数第二个为上一个页面
				let prevPage = pages[pages.length - 3]
				
				// 重点来了
				// 调用$vm 注册一个自定义方法 将参数传入进去
				prevPage.onShow(data)
				// 然后调用navigateBack返回页面
				uni.navigateBack({
				  	// 这个属性表示返回1个页面
				  	delta: 2
				})
			}
		
		},
		
		
	}
</script>

<style>

</style>
