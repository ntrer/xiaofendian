<template>
	<view>
		<u-navbar title="店铺分类"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	
	    <!-- 分类列表 -->
	    <view class="flex flex-column" v-for="(item,index) in catagor" :key="index" @click="toSecondFenlei(item.name,index)">
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

		methods: {
			// 选择二级分类
			toSecondFenlei(name,index){
				uni.navigateTo({
					url:'../secondFenLei/secondFenLei?name='+name+"&index="+index
				})
			}
		}
	}
</script>

<style>

</style>
