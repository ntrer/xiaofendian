<template>
	<view>

		<u-navbar :is-back="true" title=" 订单收益分析" title-color="#000" :background="background">
		</u-navbar>

		<!-- 切换条件 -->
		<view class="flex align-center justify-between m-2" style="background-color: #fff;">

			<!-- 切换日/月报 -->
			<view class="flex align-center justify-between m-2">
				<view class=" mr-2 flex align-center justify-center" style="width: 120rpx; height: 50rpx;border-radius: 30rpx;" :style="checked?' background-color:#FF7200;color:#fff':'background-color:#FFF;border: #000000 solid 1rpx;color:#000'"
				 @click="chooseType(1)">日报</view>
				<view class=" flex align-center justify-center" style="width: 120rpx; height: 50rpx;border-radius: 30rpx;" :style="checked?' background-color:#FFF;border: #000000 solid 1rpx;color:#000':'background-color:#FF7200;color:#fff'"
				 @click="chooseType(2)">月报</view>
			</view>

			<!-- 切换选择器 -->
			<view class="flex align-center justify-between" style="font-size: 30rpx;" @click="choosePicker()">
				<text>{{nowTime}}</text>
				<text>⏷</text>
			</view>

		</view>


		<!-- 销售金额 -->
		<view class="flex align-center justify-center mt-4">
			<text class="mr-1" style="font-size: 36rpx; font-weight: 600;">销售金额</text>
			<view class="rounded-circle flex align-center justify-center" style="background-color: #FF7200;">
				<text class="text-center" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">!</text>
			</view>
		</view>
		<view class="flex align-center justify-center mt-2">
			<text style="font-size: 34rpx; font-weight: 600;">￥</text>
			<text style="font-size: 50rpx; font-weight: 600;">999</text>
		</view>


		<!-- 具体数据 -->
		<view class="flex align-center justify-between mt-4" style="margin-left: 80rpx;margin-right: 80rpx;">
			<view class="flex align-center flex-column">
				<text style="font-size: 36rpx; color: #9F9F9F;">收款笔数</text>
				<text style="font-size: 36rpx; font-weight: 600;" class="mt-1">1</text>
			</view>

			<view class="flex align-center flex-column">
				<view class="flex align-center justify-between">
					<text style="font-size: 36rpx; color: #9F9F9F;">佣金金额</text>
					<view class="rounded-circle flex align-center justify-center ml-1" style="background-color: #FF7200;">
						<text class="text-center" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">!</text>
					</view>
				</view>
				<text style="font-size: 36rpx; font-weight: 600;" class="mt-1">￥99</text>
			</view>

		</view>

	<!-- 	<view class="flex align-center justify-between mt-4" style="margin-left: 80rpx;margin-right: 80rpx;">
			<view class="flex align-center flex-column">
				<text style="font-size: 36rpx; color: #9F9F9F;">退款笔数</text>
				<text style="font-size: 36rpx; font-weight: 600;" class="mt-1">1</text>
			</view>

			<view class="flex align-center flex-column">
				<view class="flex align-center justify-between">
					<text style="font-size: 36rpx; color: #9F9F9F;">退款金额</text>
					<view class="rounded-circle flex align-center justify-center ml-1" style="background-color: #FF7200;">
						<text class="text-center" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">!</text>
					</view>
				</view>
				<text style="font-size: 36rpx; font-weight: 600;" class="mt-1">￥99</text>
			</view>

		</view> -->

		<view class="mt-4">
			<divider :height="30"></divider>
		</view>


		<!-- 账单列表 -->
		<view class="flex align-center justify-between pl-4" style="height: 80rpx;">
			<view class="flex align-center justify-between flex-row" style="font-size: 32rpx;font-weight: 500;">
				<text>{{nowTime}}</text>
				—
				<text>订单</text>
			</view>
		</view>

		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>

		<view class="flex flex-column" v-for="(item,index) in dataList" :key="index">
			<view class="flex align-center justify-between ml-2 mr-2" style="height: 140rpx;">
				<view class="flex align-center justify-between">
					<free-avater size="100" style="margin-right: 20rpx;"></free-avater>
					<view class="flex  flex-column align-start">
						<view class="flex align-center justify-between">
							<text style="color: #000;">{{item.wx_nick_name}}</text>
							<view v-if="item.type==2" class="flex align-center justify-center rounded-1 ml-1" style="border: #FF7200 solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#FF7200 ;">
								商城订单
							</view>
							<!-- <view class="flex align-center justify-center rounded-1 ml-1" style="border: #FDCA0E solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#FDCA0E ;">
								活动订单
							</view> -->
							<view v-if="item.type==1" class="flex align-center justify-center rounded-1 ml-1" style="border: #35DAFD solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#35DAFD ;">
								优惠订单
							</view>
							<!-- <view class="flex align-center justify-center rounded-1 ml-1" style="border: #48F431 solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#48F431 ;">
								到店促销
							</view> -->
						</view>

						<view class="mt-2">
							<text style="color: #9F9F9F;">{{item.order_time}}</text>
						</view>
					</view>
				</view>
				<view class="flex align-center flex-column">
					<view class="flex align-center justify-between" style="color: #9F9F9F;">
						<text>佣金</text>
						<text>￥0</text>
					</view>
					<view class="flex align-center justify-between mt-2">
						<text style="color: #1D1200;font-size: 24rpx;">￥</text>
						<text style="color: #1D1200;font-size: 36rpx;font-weight: 600;">{{item.pay_price/100}}</text>
					</view>
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
		


		<u-picker mode="time" v-model="show" title="请选择时间" confirm-color="#FF7200" :mask-close-able="false" :params="params"
		 @confirm="chooseTime()"></u-picker>

	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import freeAvater from '@/components/free-avater.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	export default {
		components: {
			divider,
			freeAvater,
			uniLoadMore
		},

		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				checked: true,
				params: {
					year: false,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				show: false,
				month: "",
				day: "",
				year: "",
				month2: "",
				day2: "",
				year2: "",
				nowTime: "",
				searchDayTime:"",
				searchMonthTime:"",
				dataList:[],
				page:1,
				reload: true,
				loadMore: false,
				nodata:false,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},

		computed: {
           
		},

		mounted() {
			var date = new Date();
			this.month = date.getMonth() + 1;
			if (this.month < 10) {
				this.month = "0" + (date.getMonth() + 1).toString() + "月";
			} else {
				this.month = (date.getMonth() + 1).toString() + "月";
			}
			this.year = date.getFullYear().toString() + "年"
			this.day = date.getDate().toString() + "日";
			this.nowTime = this.month + this.day;
			
			if (this.month2 < 10) {
				this.month2 = "0" + (date.getMonth() + 1).toString() ;
			} else {
				this.month2 = (date.getMonth() + 1).toString() 
			}
			
			if (this.day2 < 10) {
				this.day2 = "0" + date.getDate().toString() ;
			} else {
				this.day2 = date.getDate()().toString() 
			}
			
			this.year2 = date.getFullYear().toString() 
			this.searchDayTime=this.year2+"-"+this.month2 +"-"+this.day2;
			
			this.getDayData()
			console.log(this.day2)
		},

       onReachBottom() {
		this.loadMore = true;
		this.page++;  
		if (this.status == 'noMore') {
			return;
		}
		this.status = 'loading';
       	if(this.checked){
			this.getDayData()
		}
		else{
			this.getMounthData()
		}
       },


		methods: {
			// 切换日/月报
			chooseType(index) {
				if (index == 1) {
					this.page=1
					this.reload = true;
					this.checked = true;
					this.params.year = false
					this.params.day = true
					this.nowTime = this.month + this.day;
					this.searchDayTime=this.year2+"-"+this.month2 +"-"+this.day2;
					this.status = 'loading';
					this.getDayData()
				} else {
					this.page=1
					this.reload = true;
					this.checked = false;
					this.params.year = true
					this.params.day = false
					this.nowTime = this.year + this.month;
					this.searchMonthTime=this.year2 +"-"+this.month2+"-01";
					this.status = 'loading';
					this.getMounthData()
				}

			},

			// 切换选择器
			choosePicker() {
				this.show = true
			},

			// 选择时间
			chooseTime(res) {
				console.log(res)
				if (this.checked) {
					this.nowTime = res.month + "月" + res.day + "日";
					this.searchDayTime=this.year2+"-"+res.month+"-"+res.day
					this.page=1
					this.reload = true;
					this.getDayData()
				} else {
					this.nowTime = res.year + "年" + res.month + "月";
					this.searchMonthTime=res.year+"-"+res.month+"-01"
					this.page=1
					this.reload = true;
					this.getMounthData()
				}
			},
			
			// 获取列表数据
			getDayData(){
				
				uni.showLoading({
					title: '加载中'
				});
				
				let param={
					size:10,
					current:this.page,
				}
				
				// 发送到服务端
				$H.get("/order/today?searchDayTime="+this.searchDayTime,param).then((res) => {
					
					uni.hideLoading();
					//请求成功
					let list = res.data.orderList.records
					
					let pages=res.data.orderList.pages;
					
					
					if(pages>1&&this.page<=pages){
						this.dataList = this.reload ? list : this.dataList.concat(list);
						this.nodata=false;
					}
					else if(pages==0){
						this.dataList=[];
						this.nodata=true;
						this.status ='noMore'
					}
					else if(pages==1){
						this.dataList = list
						this.status ='noMore'
						this.nodata=false;
					}
					else{
						this.status ='noMore'
					}
					console.log(this.dataList.length)
					
					this.reload = false;
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			getMounthData(){
				uni.showLoading({
					title: '加载中'
				});
				
				let param={
					size:10,
					current:this.page,
				}
				
				// 发送到服务端
				$H.get("/order/month?searchMonthTime="+this.searchMonthTime,param).then((res) => {
					//请求成功
				uni.hideLoading();
				//请求成功
				let list = res.data.orderList.records
				let pages=res.data.orderList.pages;
				
				
				if(pages>1&&this.page<=pages){
					this.dataList = this.reload ? list : this.dataList.concat(list);
					this.nodata=false;
				}
				else if(pages==0){
					this.dataList=[];
					this.nodata=true;
					this.status ='noMore'
				}
				else if(pages==1){
					this.dataList = list
					this.nodata=false;
					this.status ='noMore'
				}
				else{
					this.status ='noMore'
				}
				console.log(this.dataList)
				
				this.reload = false;
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			}
			
		}
	}
</script>

<style>

</style>
