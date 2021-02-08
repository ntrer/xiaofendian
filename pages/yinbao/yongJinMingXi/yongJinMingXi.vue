<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="佣金明细"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<!-- 佣金列表 -->
		<view class="flex flex-column" style="background-color: #fff;" v-for="(item,index) in listData" :key="index">
			<view class="flex justify-between align-center pl-3 pr-3">
				<view class="flex flex-column justify-center" style="height: 130rpx;">
					<text class="text-color" style="font-size: 26rpx;">{{item.remarks}}</text>
					<text class="mt-2" style="font-size: 24rpx;color: #828282;">{{item.create_time}}</text>
				</view>
				
				<text class="font-bold" style="font-size: 32rpx;color: #4CB811;">{{item.commission}}</text>
			</view>
			<divider :height="4"></divider>
		</view>
		
		<!-- 暂无数据 -->
		<view v-if="nodata==true"  class="flex align-center justify-center flex-column" style="font-size: 28rpx;color: #9F9F9F;margin-top: 320rpx;">
			<image src="../../../static/common/no_yongjin_data.png" style="height: 206rpx;width: 218rpx;"></image>
			<text style="margin-top: 20rpx;margin-left: -52rpx;">目前暂无明细</text>
		</view>
		
		<uni-load-more :status="status" :content-text="contentText" v-if="!nodata" />
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	export default {
		components:{
			divider
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				page:1,
				reload: true,
				loadMore: false,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				listData:[],
				nodata:false,
				type:-1
			}
		},
		
		onLoad(e) {
			this.type=e.type;
			console.log(this.type)
			this.getData(e.id)
		},
		
		onReachBottom() {
				this.loadMore = true;
				this.page++;  
				if (this.status == 'noMore') {
					return;
				}
				this.status = 'loading';
			    this.getData()
		},
		
		methods: {
			getData(id){
				 this.show=true
				let data={
					merchant_task_id:id,
					size:10,
					current:this.page
				}
				let url="";
				if(this.type==1){
					url="/commission/detailed"
				}
				else if(this.type==2){
					url="/my/task/commission/detailed"
				}
				else{
					url="/pickup/task/commission/detailed"
				}
				
				// 发送到服务端
				$H.get(url,data).then((res) => {
					
					//请求成功
					console.log(res)
					let list = res.data.records
					
					let pages=res.data.pages;
					
					console.log(this.page)
					if(pages>1&&this.page<=pages){
						this.listData = this.reload ? list : this.listData.concat(list);
						this.nodata=false;
					}
					else if(pages==0){
						this.listData=[];
						this.nodata=true;
						this.status ='noMore'
						
					}
					else if(pages==1){
						this.listData = list
						this.status ='noMore'
						this.nodata=false;
					}
					else{
						this.status ='noMore'
					}
					
					this.reload = false;
					
				}).catch((e) => {
					//请求失败
					console.log("失败"+e)
				})
			},
		}
	}
</script>

<style>

</style>
