<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="所有订单"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		
		    <!-- <view class="fixed-top" style="height: 100rpx;"></view> -->
		
		    <!-- 吸顶分类菜单 -->
		   
			<view class="flex align-center justify-between bg-white w-100" style="height: 100rpx;position: fixed;":style="'top:'+scrollH+'px;'">
				
				<view class="flex flex-1 align-center  flex-column" :class="typeIndex==2?'text-color font-bold':''" style="height: 100rpx;font-size: 32rpx;" @click="switchType(2)">
					<text style="margin-top: 30rpx;">已支付</text>
					<view v-if="typeIndex==2" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
				</view>
				
				<view class="flex flex-1 align-center  flex-column"  :class="typeIndex==3?'text-color font-bold':''" style="height: 100rpx;font-size: 32rpx;" @click="switchType(3)">
					<text style="margin-top: 30rpx;">已核销</text>
					<view v-if="typeIndex==3" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
				</view>
			</view>
			
		
	
		<divider :height="4"></divider>
		
		<view class="bg-white" style="margin-top: 60rpx;">
			<view class="pl-2 pr-2" v-for="(item,index) in listData" :key="index" @click="toOrderDetail(index)">
				<view class="flex align-center justify-between  " style="height: 220rpx;">
					<view class="flex align-center justify-between">
						<image :src="item.head_portrait_image_url" style="width: 160rpx;height: 160rpx;border-radius: 8rpx;"></image>
						<view class="flex flex-column justify-between  ml-2" style="height: 160rpx;">
							<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;width: 360rpx;">{{item.goods_name}}</text>
							<text class=" mt-1" style="color: #8A8A8A;">{{item.order_time}}</text>
						</view>
					</view>
		
					<view class="flex flex-column justify-between " style="height: 160rpx;text-align: end;">
						<!-- <text v-if="typeIndex==1" class="text-color">待支付</text> -->
						<text v-if="typeIndex==2" class="text-color">已支付</text>
						<text v-if="typeIndex==3" class="text-color">已核销</text>
						<text class="text-color font-bold ">￥{{item.pay_price}}</text>
					</view>
		
		
				</view>
				<divider :height="4"></divider>
			</view>
		</view>
		
		
		<!-- 暂无数据 -->
		<view v-if="nodata==true"  class="flex align-center justify-center flex-column" style="font-size: 28rpx;color: #9F9F9F;margin-top: 320rpx;">
			<image src="../../../static/common/no_yongjin_data.png" style="height: 206rpx;width: 218rpx;"></image>
			<text style="margin-top: 20rpx;">目前暂无数据</text>
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
			divider,
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				typeIndex:2,
				is_verification:-1,
				page:1,
				show:false,
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
				scrollH:0
			}
		},
		
		
		onLoad() {
			 uni.getSystemInfo({
			 	success: (res) => {
					console.log(res.windowHeight)
					
					if(620<res.windowHeight<=688){
						this.scrollH=60
					}
					
			 		if(res.windowHeight<=688){
			 			this.scrollH=60
			 		}
					
					if(688<res.windowHeight<=730){
						this.scrollH=80
					}
					
			 		if(730<res.windowHeight<=810){
			 			this.scrollH=60
			 		}

                      if(810<res.windowHeight<=850){
			 			this.scrollH=80
			 		}
			 		
					 if(res.windowHeight>814){
						
						this.scrollH=80
					}
			 	}
			 });
			 this.getData()
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
		
		onPullDownRefresh() {
			this.reload=true;
			this.page=1;
			this.status = 'more';
			this.getData()
		},
		
		
		methods: {
			switchType(num){
				this.typeIndex=num;
				if(num==1){
				   this.is_verification=-1	
				   this.reload=true;
				   this.page=1;
				   this.status = 'more';
				   this.getData()
				}
				else if(num==2){
					this.is_verification=-1
					this.reload=true;
					this.page=1;
					this.status = 'more';
					this.getData()
				}
				else{
					 this.is_verification=1	
					 this.reload=true;
					 this.page=1;
					 this.status = 'more';
					 this.getData()
				}
			},
			
			getData(){
				let data={
					type:2,
					size:10,
					current:this.page,
					is_verification:this.is_verification
				}
				
				// 发送到服务端
				$H.get("/order/page/all",data).then((res) => {
					uni.stopPullDownRefresh()
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
					uni.stopPullDownRefresh()
					//请求失败
					console.log("失败"+e)
				})
			},
			
			
			
			toOrderDetail(index){
				
				// console.log(this.listData[index])
				
				uni.navigateTo({
					url:'../orderDetail/orderDetail?data='+JSON.stringify(this.listData[index])
				})
			}
		}
	}
</script>

<style>

</style>
