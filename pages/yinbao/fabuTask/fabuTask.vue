<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="发布的任务"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	
	    <!-- 任务列表 -->
	    <view class="flex flex-column m-3 bg-white" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.02);" v-for="(item,index) in listData" :key="index">
	    	<!-- 头部 -->
	    	<view class="flex align-center justify-between pl-2 pr-2" style="background-color: #FFE1E1;height: 50rpx;">
	    		<view style="color: #DF6162;font-size: 20rpx;">
	    			<text>已领取</text>
	    			<text class="ml-2">{{item.receive_num==null?'0':item.receive_num}}张</text>
	    		</view>
	    		<view style="color: #DF6162;font-size: 20rpx;">
	    			<text>已使用</text>
	    			<text class="ml-2">{{item.use_num==null?'0':item.use_num}}张</text>
	    		</view>
	    		
	    	</view>
	    	<!-- 内容 -->
	    	<view class="flex" style="height: 160rpx;">
	    		<view v-if="item.coupon_type==1" class="font-bold flex align-center justify-center flex-1" style="color: #FF7200;font-size: 44rpx;">
	    			代金券
	    		</view>
	    		<view v-if="item.coupon_type==2" class="font-bold flex align-center justify-center flex-1" style="color: #FF7200;font-size: 44rpx;">
	    			折扣券
	    		</view>
	    		<view v-if="item.coupon_type==3" class="font-bold flex align-center justify-center flex-1" style="color: #FF7200;font-size: 44rpx;">
	    			兑换券
	    		</view>
	    		
	    		<view class="flex flex-column text-color justify-center flex-1" style="font-size: 20rpx;">
	    			<text>{{item.merchant_task_name}}</text>
					<text v-if="item.collect_coupons_effective_days!=null" class="mt-1">有效期：{{item.collect_coupons_effective_days}} 天</text>
	    			<text class="mt-1" v-if="item.start_date_format!=null">有效期：{{item.start_date_format}} ~ {{item.end_date_format}}</text>
	    			<text class="mt-1">每人限领{{item.limited_collection_num}}张</text>
	    		</view>
	    		
	    		<view class="flex flex-1 align-center justify-center">
	    			<view class="rounded-1 flex align-center justify-center " style="background-color:#FF7200;height: 40rpx; width: 100rpx;" @click="share()">
	    				<text style="font-size: 26upx;color: #fff;">分享</text>
	    			</view>
	    		</view>
	    		
	    		
	    	</view>
	    	<!-- 使用范围 -->
	    	<view class="flex align-center justify-between pl-2 pr-2" style="height: 60rpx;background-color: #F8F8F8;" @click="toMingXi(item.id)">
	    		<text style="color: #9F9F9F;font-size: 20upx;">{{item.use_scope}}</text>
	    		<view class="flex align-center justify-between" >
	    			<text style="font-size: 24rpx; color: #9f9f9f;">佣金明细</text>
	    			<!-- <image :src="showDetail?'../../static/common/arrowUp.png':'../../static/common/arrowDown.png'" style="width: 18rpx;height: 16rpx;margin-left: 10rpx;" ></image> -->
	    		</view>
	    	</view>
	    	
	    	
	    </view>
		

	
	<!-- 暂无数据 -->
	<view v-if="nodata==true"  class="flex align-center justify-center flex-column" style="font-size: 28rpx;color: #9F9F9F;margin-top: 320rpx;">
		<image src="../../../static/common/no_task.png" style="height: 206rpx;width: 218rpx;"></image>
		<text style="margin-top: 20rpx;">目前暂无任务</text>
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
				showDetail:false,
				showIndex:-1,
				type:1,
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
				nodata:false
			}
		},
		
		
		onLoad() {
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
		
		toMingXi(id){
			uni.navigateTo({
				url:'../yongJinMingXi/yongJinMingXi?id='+id+"&type=2"
			})
		},
			
			getData(){
				
				let data={
					type:2,
					size:10,
					current:this.page,
				}
				
				// 发送到服务端
				$H.get("/merchant_task/page/all",data).then((res) => {
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
			
			
			
			changeShow(ind){
				this.showIndex=ind;
				this.showDetail=!this.showDetail
			}
		}
	}
</script>

<style>

</style>
