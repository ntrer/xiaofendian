<template>
	<view>
		<u-navbar title="店铺分类"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	
	    <!-- 分类列表 -->
	    <view class="flex flex-column" v-for="(item,index) in catagor" :key="index" @click="toSecondFenlei(item.classification_name,item.id)">
			<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
				<text>{{item.classification_name}}</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
			<divider :height="4"></divider>
		</view>
	
	
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
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
				catagor: [],
			}
		},
		
		onLoad() {
			this.getFirstFenLei()
		},

		methods: {
			
			getFirstFenLei(){
				// 发送到服务端
				$H.get("/merchant_classification/all?level=1").then((res) => {
					//请求成功
					console.log(res)
					this.catagor=res.data
				
				}).catch((e) => {
				
					//请求失败
					console.log("失败" + e)
				})
			},
			
			
			// 选择二级分类
			toSecondFenlei(name,id){
				uni.navigateTo({
					url:'../secondFenLei/secondFenLei?name='+name+"&id="+id
				})
			}
		}
	}
</script>

<style>

</style>
