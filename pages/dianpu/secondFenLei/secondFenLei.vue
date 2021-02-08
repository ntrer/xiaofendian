<template>
	<view>
		<u-navbar :title="title"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	     <!-- 分类列表 -->
	     <view class="flex flex-column" v-for="(item,index) in catagor" :key="index" @click="chooseFenLei(item.classification_name,item.id)">
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
				title:"",
				catagor: [],
				id:""
			}
		},
		
		onLoad(e) {
			this.title=e.name
			this.id=e.id
			
			this.getData(this.id)
		},
		
		
		methods: {
			
			getData(id){
				// 发送到服务端
				$H.get("/merchant_classification/all?level=2&id="+id).then((res) => {
					//请求成功
					console.log(res)
					this.catagor=res.data
				
				}).catch((e) => {
				
					//请求失败
					console.log("失败" + e)
				})
			},
			
			chooseFenLei(name,id){
				let data={
					firstId:this.id,
					secondId:id,
					secondeNmae:name
				}
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
