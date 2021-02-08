<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar  :background="background" title-color="#fff" title="订单收益" :isBack="false"></u-navbar>
	     <view class="" style="height: 240rpx;background-color: #FF7200;"></view>
	     <!-- 浮动块 -->
	     <view class="ml-2 mr-2" style="height: 340rpx; background: #FFFFFF;box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);border-radius: 8px; margin-top: -150rpx;">
			 
			 <!-- 自定义查询 -->
			 <view class="flex align-center" style="color: #1879F1;font-size: 30upx;height: 100rpx;" @click="toSearch()">
				 <text style="position: absolute;right: 50rpx;">自定义查询</text>
			 </view>
			 
			 <view class="flex justify-between ">
				 
				 <view class="flex flex-column flex-1 align-center" @click="toOrder()">
					 <text class="text-color" style="font-size: 28rpx;">今日收款{{orderNum}}笔</text>
					 <text class="text-color mt-2 mb-2" style="font-size: 66rpx;">￥{{orderPrice==null?0:orderPrice}}</text>
					 <text style="font-size: 28rpx;color: #1879F1;">明细分析</text>
				 </view>
				 
				 <view class="" style="width: 4rpx;height: 200rpx;background: #EFEFEF;border-radius: 1rpx;"></view>
				 
				 <view class="flex flex-column flex-1 align-center">
				 	<text class="text-color" style="font-size: 28rpx;">余额</text>
				 	<text class="text-color mt-2 mb-2" style="font-size: 66rpx;">￥{{yuE}}</text>
				 	<text style="font-size: 28rpx;color: #1879F1;" @click="toZiJin()">资金管理</text>
				 </view>
				 
			 </view>
			 
		 </view>
		 
		 <!-- 分类 -->
		 <view class="flex align-center bg-white mt-2" style="height: 100rpx;">
			 <scroll-view scroll-x="true" class="scroll-row" style="height: 80rpx;">
			 	<view v-for="(item,index) in catagor" :key="index"
			 	class="scroll-row-item px-2 py-2 "
			 	:class="tabIndex===index?'text-checked-color font-bold':''"
			 	@click="changeIndex(index)"
				style="font-size: 30upx;"
			 	>
			 	{{item.name}}
			 	</view>
			 </scroll-view>
		 </view>
		  <divider :height="4"></divider>
		<!-- <view class="flex align-center text-color ml-2" style="height: 80rpx;font-size: 28upx;">
			 {{time}}
		 </view> -->
		 
		 <!-- 订单列表 -->
		 <view class="flex flex-column justify-center pl-2 pr-2 bg-white" v-for="(item,index) in listData" :key="index">
			 
			 <view class="flex align-center justify-between" style="height: 160rpx;">
				 
				 <view class="flex flex-column">
					 <text v-if="item.type==1" class="text-color" style="font-size: 30upx;">优惠买单</text>
					  <text v-if="item.type==2" class="text-color" style="font-size: 30upx;">商城订单</text>
					 <text class="mt-2" style="font-size: 26upx;color: #8A8A8A;">{{item.order_time}}</text>
				 </view>
				 
				 <view class="flex flex-column align-end">
				 	<text class="text-color" style="font-size: 30upx;color: #FF7200;">+{{item.pay_price}}</text>
				 	<!-- <text class="mt-2" style="font-size: 26upx;color: #8A8A8A;">余额：80.66</text> -->
				 </view>
				 
				 
			 </view>
			 
			 <divider :height="4"></divider>
		 </view>
		 
		 <!-- 暂无数据 -->
		 <view v-if="nodata==true"  class="flex align-center justify-center flex-column" style="font-size: 28rpx;color: #9F9F9F;margin-top: 200rpx;">
		 	<image src="../../../static/common/no_yongjin_data.png" style="height: 160rpx;width: 160rpx;"></image>
		 	<text style="margin-top: 20rpx;">目前暂无数据</text>
		 </view>
		 
		 <uni-load-more :status="status" :content-text="contentText" v-if="!nodata" />
		 
		 
		 
		 
		 
		
	</view>
</template>

<script>
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import divider from '@/components/divider.vue';
	export default {
		components:{
			divider,
			uniLoadMore
		},
		data() {
			return {
				background:{
					backgroundImage: 'linear-gradient(0deg, #FF7200 0%, #FFB183 100%)'
				},
				tabIndex:0,
				time:"2020.01.20",
				orderNum:"",
				orderPrice:"",
				yuE:"",
				type:1,
				listData:[],
				catagor: [ {
						name: '优惠买单',
						id:2
					},
					{
						name: '商城订单',
						id:3
					}
				],
				page:1,
				reload: true,
				loadMore: false,
				status: 'more',
				nodata:false,
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		
		onLoad() {
			this.getHeader()
			this.getList()
		},
		
		
		onReachBottom() {
				this.loadMore = true;
				this.page++;  
				if (this.status == 'noMore') {
					return;
				}
				this.status = 'loading';
			    this.getList()
		},
		
		
		methods: {
			
			getHeader(){
				// 发送到服务端
				$H.get("/order/profit").then((res) => {
					//请求成功
					console.log(res)
					this.orderNum=res.data.orderListComplete
					this.orderPrice=res.data.orderSumPayPrice
					this.yuE=res.data.account
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			getList(){
				
				let data={
					type:this.type,
					size:10,
					current:this.page
				}
				// 发送到服务端
				$H.get("/order/page/all",data).then((res) => {
					//请求成功
					
					let list = res.data.records;
					let pages=res.data.pages;
					 
					 console.log(list)
					 
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
					
					console.log(this.listData)
					
					this.reload = false;
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			
			
			changeIndex(index) {
				if (this.tabIndex == index) {
					return;
				}
				this.tabIndex = index;
				this.reload=true
				if(index==0){
					this.type=1;
					this.page=1
					this.reload=true
					this.status = 'more';
					this.getList()
				}
				else{
					this.type=2;
					this.page=1
					this.reload=true
					this.status = 'more';
					this.getList()
				}
			},
			
			toSearch(){
				uni.navigateTo({
					url:'../../dingdan/ziDingYiChaXun/ziDingYiChaXun'
				})
			},
			
			toOrder(){
				uni.navigateTo({
					url:'../../yinbao/orderAnalyze/orderAnalyze'
				})
			},
			
			toZiJin(){
				uni.navigateTo({
					url:'../../yinbao/yuE/yuE'
				})
			}
		}
	}
</script>

<style>

</style>
