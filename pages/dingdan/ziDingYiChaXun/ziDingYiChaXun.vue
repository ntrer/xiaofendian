<template>
	<view>
		<u-navbar title="自定义查询" :background="background" title-color="#000" :isBack="true"></u-navbar>
		<view class="flex align-center justify-center text-color" style="height: 66rpx;background-color: #FEEBEB;font-size: 24upx;">
			目前仅支持开始时间起31日内的查询
		</view>

		<view class="flex align-center text-color" style="height: 100rpx;background-color: #fff;">
			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-4 " style="font-size: 36upx;">日期范围</text>
		</view>

		<!-- 时间范围 -->
		<view class="flex align-center pl-4 mt-2">

			<view class="flex align-center justify-center pl-3 pr-3 pt-1 pb-1" style="font-size: 26upx;border-radius: 18px;"
			 :style="chooseDateIndex==1?'background:#FF7200;color:#fff;border: 1px solid #FF7200':'border: 1px solid #1D1200;'"
			 @click="chooseDate(1)">
				近24小时
			</view>

			<view class="flex align-center justify-center pl-3 pr-3 pt-1 pb-1 ml-2" style="font-size: 26upx;border-radius: 18px;"
			 :style="chooseDateIndex==2?'background:#FF7200;color:#fff;border: 1px solid #FF7200':'border: 1px solid #1D1200;'"
			 @click="chooseDate(2)">
				本周
			</view>

			<view class="flex align-center justify-center pl-3 pr-3 pt-1 pb-1 ml-2" style="font-size: 26upx;border-radius: 18px;"
			 :style="chooseDateIndex==3?'background:#FF7200;color:#fff;border: 1px solid #FF7200':'border: 1px solid #1D1200;'"
			 @click="chooseDate(3)">
				本月
			</view>

		</view>


		<!-- 选项列表 -->
		<!-- 开始时间 -->
		<view class="flex align-center justify-between ml-4 mr-4 mt-1" style="height: 100rpx;" @click="selectTime(1)">
			<text class="text-color">开始时间</text>
			<view class="flex align-center justify-between">
				<text class="text-color" :style="startTime.indexOf('选择')?'color:#1D1200':'color:#C3C3C3'">{{startTime}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="ml-4 mr-4">
			<divider :height="4"></divider>
		</view>

		<!-- 结束时间 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="selectTime(2)">
			<text class="text-color">结束时间</text>
			<view class="flex align-center justify-between">
				<text class="text-color" :style="endTime.indexOf('选择')?'color:#1D1200':'color:#C3C3C3'">{{endTime}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="ml-4 mr-4">
			<divider :height="4"></divider>
		</view>

		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="selectFilter()">
			<text class="text-color">高级选项</text>
			<view class="flex align-center justify-between">
				<text class="text-color" :style="selectType.indexOf('选择')?'color:#1D1200':'color:#C3C3C3'">{{selectType}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="ml-4 mr-4">
			<divider :height="4"></divider>
		</view>


		<!-- 时间选择器 -->
		<u-picker mode="time" v-model="show" title="请选择时间" confirm-color="#FF7200" :mask-close-able="false" :params="params"
		 @confirm="chooseTime()"></u-picker>


		<!-- 筛选条件 -->
		<u-popup v-model="showSelect" mode="bottom" height="30%" :closeable="false">
			<view class="flex flex-column fixed-top bg-white">
				<view class="flex align-center justify-between pl-3 pr-3" style="height: 80rpx;">
					<text style="font-size: 32rpx;" @click="cancle()">取消</text>
					<text class="font-bold" style="font-size: 34rpx;">筛选条件</text>
					<text style="font-size: 32rpx;color: #FF7200;" @click="confirm()">确定</text>
				</view>
				<divider :height="4"></divider>
			</view>
			<view class="" style="margin-top: 80rpx;"></view>
			<!-- 条件列表 -->
			<view class="flex flex-column " v-for="(item,index) in catagor" :key="index">
				<view class="flex align-center justify-between pl-3 pr-3" style="height: 100rpx;" @click="chooseItem(index)">
					<text>{{item.name}}</text>
					<image v-if="index==chooseIndex" src="../../../static/common/duihao.png" style="height: 40rpx;width: 40rpx;"></image>
				</view>
				<divider :height="4"></divider>
			</view>


		</u-popup>


		<!-- 确定按钮 -->
		<view class="flex align-center justify-center ml-4 mr-4 mt-5" style="height: 76rpx;border-radius: 40rpx;color: #fff;font-size: 32rpx;"
		 :style="endTime.indexOf('选择')&&startTime.indexOf('选择')?'background:#FF7200':'background:#ccc'" @click="searchOrder(true)">
			查询
		</view>
		
		<view class="flex align-center justify-center" style="height: 160rpx;" v-show="nodata">
			<text style="color: #C3C3C3;font-size: 28upx;">所选时间无订单记录</text>
		</view>
		
		
		<view class="flex flex-column justify-center pl-2 pr-2 bg-white" v-for="(item,index) in dataList" :key="index">
					 
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
		
		<uni-load-more :status="status" :content-text="contentText" v-if="dataList.length>0" />
		
		
		
		

	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	export default {
		components: {
			divider,
			uniIcon
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				showSelect: false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
				chooseIndex: -1,
				chooseDateIndex: -1,
				startTime: "选择开始时间",
				endTime: "选择结束时间",
				selectType: "选择指定条件",
				show: false,
				num: 1,
				catagor: [{
						name: '优惠买单',
						id: 1
					}, {
						name: '商城订单',
						id: 2
					}
				],
				now:"",
				nowDayOfWeek:"",
				nowDay:"",
				nowMonth:"",
				nowYear:"",
				type:"",
				page:1,
				reload: true,
				loadMore: false,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				dataList:[],
				nodata:false
			}
		},
		
		onReachBottom() {
				this.loadMore = true;
				this.page++;  
				console.log(this.status)
				if (this.status == 'noMore') {
					return;
				}
				this.status = 'loading';
			    this.searchOrder(false)
		},
		

		methods: {
			selectTime(index) {
				this.show = true
				if (index == 1) {
					this.num = 1
				} else {
					this.num = 2
				}
			},
			// 选择时间
			chooseTime(res) {
				if (this.num == 1) {
					this.startTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute ;
				} else {
					this.endTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute ;
				}

			},

			// 显示条件弹窗
			selectFilter() {
				this.showSelect = true
			},

			// 选择条件
			chooseItem(num) {
				this.chooseIndex = num;
				this.type=num+1
				console.log(this.type)
			},


			cancle() {
				this.showSelect = false
			},

			confirm() {
				this.showSelect = false
				this.selectType = this.catagor[this.chooseIndex].name
			},


			chooseDate(index) {
				this.chooseDateIndex = index
				if(index==1){
					const end = new Date();
					const start =new Date(end.getTime() - 24*60*60*1000);
					this.startTime=this.formatDate(start)
					this.endTime=this.formatDate(end)
				}
				else if(index==2){
					const end = new Date();
					const start = new Date(new Date() - (new Date().getDay() - 1) * 86400000);
					this.startTime=this.formatDate(start)
					this.endTime=this.formatDate(end)
					
				}
				else{
					 var nowMonth = new Date().getMonth(); //当前月 
					 var nowYear = new Date().getFullYear(); //当前年 
					 const end = new Date();            
					 const start = new Date(nowYear, nowMonth, 1); 
					 this.startTime=this.formatDate(start)
					 this.endTime=this.formatDate(end)
				}
				
			},
			
			
			// 格式化日期
			formatDate(inputTime) {
			        var date = new Date(inputTime);
			        var y = date.getFullYear();
			        var m = date.getMonth() + 1;
			        m = m < 10 ? ('0' + m) : m;
			        var d = date.getDate();
			        d = d < 10 ? ('0' + d) : d;
			        var h = date.getHours();
			        h = h < 10 ? ('0' + h) : h;
			        var minute = date.getMinutes();
			        var second = date.getSeconds();
			        minute = minute < 10 ? ('0' + minute) : minute;
			        second = second < 10 ? ('0' + second) : second;
			        return y + '-' + m + '-' + d+' '+h+':'+minute;
			      },



			searchOrder(search) {
				if (this.endTime.indexOf("选择") && this.startTime.indexOf("选择")) {
					
					if(search){
						this.reload=true
						this.page=1
						this.status = 'more';
					}
					else{
						this.reload=false
					}
					
					let data={
						type:this.type||"",
						searchStartTime:this.startTime,
						searchEndTime:this.endTime,
						size:10,
						current:this.page,
					}
					
					// 发送到服务端
					$H.get("/order/page/all",data).then((res) => {
						//请求成功
						let list = res.data.records
						
						let pages=res.data.pages;
						
						console.log(this.page)
						if(pages>1&&this.page<=pages){
							this.dataList = this.reload ? list : this.dataList.concat(list);
						}
						else if(pages==0){
							this.dataList=[];
							this.nodata=true;
							this.status ='noMore'
						}
						else if(pages==1){
							this.dataList = list
							this.status ='noMore'
						}
						else{
							this.status ='noMore'
						}
						
						this.reload = false;
						
					}).catch((e) => {
						
						//请求失败
						console.log("失败"+e)
					})

				} else {
					console.log("不能")

				}
			}

		}
	}
</script>

<style>

</style>
