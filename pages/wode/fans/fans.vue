<template>
	<view>
		<u-navbar :is-back="true" title=" " :background="background">
			<view class="slot-wrap">
				<text class="ml-4" style="font-size: 32rpx;">总粉丝数({{fans}})</text>
			</view>
		</u-navbar>
		
		<view class="flex align-center justify-between pl-4 pr-4" style="height: 120rpx;">
			
			<u-search placeholder="手机号/微信昵称" v-model="keyword" shape="round" :show-action="false" :animation="true" style="width: 520rpx;"></u-search>
			
			<view class="rounded-1 flex align-center justify-center" style="width: 120rpx; height: 50rpx;background-color: #FF7200;color: #fff;" @click="search(keyword)">
				<text>查询</text>
			</view>
			
		</view>
		<divider :height="4"></divider>
		
		<!-- 排序 -->
		<!-- <view class="flex align-center justify-between pl-3 pr-3" style="height: 100rpx;">
			<text style="font-size: 30rpx;" :style="isMoren?'color: #1D1200;':'color:#9F9F9F'"   @click="moren()">默认</text>
			<view class="flex align-center justify-between">
				<text style="font-size: 30rpx;" :style="order==2||order==3?'color: #1D1200;':'color:#9F9F9F'" @click="paixu(order)"  >消费金融</text>
				<image :src="orderSrc" style="height: 46rpx;width: 46rpx;"></image>
			</view>
		</view> -->
		
		
		<!-- 粉丝列表 -->
		<view class="pl-4 pr-4 mt-2" v-for="(item,index) in listData" :key="index">
			<view class="flex align-center justify-between">
				<view class="flex align-center justify-between">
					<free-avater size="100" style="margin-right: 20rpx;" :src="item.head_portrait_image_url"></free-avater>
					<text style="font-size: 30rpx;font-weight:600;">{{item.wx_nick_name}}</text>
				</view>
				<!-- <view class="flex align-center justify-between pr-1">
					<text style="font-size: 32rpx;font-weight:600;">￥</text>
					<text style="font-size: 36rpx;font-weight:600;">99</text>
				</view> -->
			</view>
			<view class="mt-1">
				<divider :height="4"></divider>
			</view>
			
		</view>
		
		<uni-load-more :status="status" :content-text="contentText" v-show="listData.length" />
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import freeAvater from'@/components/free-avater.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	
	export default {
		components:{
			divider,
			freeAvater,
			uniLoadMore
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				fans:0,
				isMoren:true,
				order:1,
				orderSrc:'../../../static/common/paixu1.png',
				page:1,
				listData: [],
				reload: true,
				loadMore: false,
				status: 'more',
				keyword:"",
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		
		onLoad() {
			// 获取粉丝数量
			this.getCount();
			
			//获取粉丝列表
			this.getData();
		},
		
		onPullDownRefresh() {
			this.reload = true;
			this.loadMore = false;
			this.page=1;
			this.status = 'more';
			
			if(this.keyword!=""){
				this.reload = true;
				if(this.keyword.startsWith("1")){
					this.getData("",this.keyword)
				}
				else{
					this.getData(this.keyword,"")
				}
			}
			else{
				this.getData();
				this.getCount();
			}
			
		},
		
		onReachBottom() {
			this.loadMore = true;
			this.page++;
			if (this.status == 'noMore') {
				return;
			}
			this.status = 'loading';
			if(this.keyword!=""){
				this.reload = true;
				if(this.keyword.startsWith("1")){
					this.getData("",keyword)
				}
				else{
					this.getData(keyword,"")
				}
			}
			else{
				this.getData();
			}
			
		
		},
		
		methods: {
			
			search(keyword){
				this.page=1;
				this.reload = true;
				if(keyword.startsWith("1")){
					this.getData("",keyword)
				}
				else{
					this.getData(keyword,"")
				}
			},
			
			
			// 获取粉丝数量
			getCount(){
				// 发送到服务端
				$H.get("/customer_fans/count").then((res) => {
					//请求成功
					this.fans=res.data+"人"
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			// 获取粉丝列表
			getData(name,phone){
				
				uni.showLoading({
					title: '加载中'
				});
				
				let param={
					size:10,
					current:this.page,
					wx_nick_name:name||"",
					mobile_number:phone||""
				}
			
				// 发送到服务端
				$H.get("/customer_fans/page/all",param).then((res) => {
					uni.stopPullDownRefresh()
					uni.hideLoading();
					
					let list = res.data.records;
                    let pages=res.data.pages;
                     
					if(pages>0&&this.page<=pages){
						this.listData = this.reload ? list : this.listData.concat(list);
					}
					else if(pages==0){
						this.listData=[];
						this.status ='noMore'
					}
					else{
						this.status ='noMore'
					}
					
					console.log("失败"+this.listData)
					
					this.reload = false;
					
					
				}).catch((e) => {
					
					uni.hideLoading();
					uni.stopPullDownRefresh();
					//请求失败
					console.log("失败"+e)
				})
			},
			
			//默认排序
			moren(){
				this.isMoren=true
				this.order=1
				this.orderSrc='../../../static/common/paixu1.png'
			},
			
			paixu(index){
				this.isMoren=false
				if(index==2||index==1){
					this.order=3
					this.orderSrc='../../../static/common/paixu2.png'
				}
				
				 if(index==3){
					this.order=2
					this.orderSrc='../../../static/common/paixu3.png'
				}
				console.log(this.order)
			}
		}
	}
</script>

<style>
.slot-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		/* padding: 0 30rpx; */
	}
</style>
