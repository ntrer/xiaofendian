<template>
	<view>
		<u-navbar  :background="background" title="资金管理" title-color="#fff":isBack="true" back-icon-color="#fff"></u-navbar>
		
		<view class="main-bg-color flex align-center justify-center" style="height: 320rpx;">
			<view class="flex align-center justify-center flex-column" style="margin-top: -80rpx;">
				<view class="flex align-center justify-center mt-4" @click="showDes()">
					<text class="mr-1" style="font-size: 30rpx;color: #fff;">余额</text>
					<view class="rounded-circle flex align-center justify-center" style="height: 32rpx;width: 32rpx; background-color: #fff;">
						<text class="text-center" style="font-size: 24upx;color: #FF7200;">!</text>
					</view>
				</view>
				<text class=" mt-1 font-bold" style="font-size: 72upx;color: #fff;">{{yuE}}</text>
				<!-- <text class="mt-1">手动提现></text> -->
			</view>
			
		</view>
		
		<view class=" bg-white ml-3 mr-3 flex align-center justify-between" style="border-radius: 20rpx;height: 160rpx;margin-top: -100rpx;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);">
           
		   <view class="flex align-center justify-between flex-1 flex-column">
			   <text style="color: #aaa;">累计入账金额</text>
			   <text class="mt-1 text-color">{{leiji}}</text>
		   </view>

            <view class="flex align-center justify-between flex-1 flex-column">
			   <text style="color: #aaa;">待入账金额</text>
			   <text class="mt-1 text-color">{{daiRu}}</text>
		   </view>

</view>
		
		<!-- <view class="flex align-center justify-between" style="height: 120rpx;font-size: 34rpx;padding-top: 20rpx;">
			<view class="flex flex-1 align-center justify-center" :class="checked?' font-bold text-checked-color':''" @click="switchType(1)">
				收入明细 <text v-show="checkedIndex==1" class="ml-2" style="font-size: 28upx;">▼</text>
				        <text v-show="checkedIndex==2" class="ml-2" style="font-size: 28upx;color: #fff;">▼</text>
			</view>
			<view class="flex flex-1 align-center justify-center" :class="!checked?'font-bold text-checked-color':''" @click="switchType(2)">
				支出明细 <text v-show="checkedIndex==2" class="ml-2" style="font-size: 28upx;">▼</text>
				<text v-show="checkedIndex==1" class="ml-2" style="font-size: 28upx;color: #fff;">▼</text>
			</view>
		</view> -->
		
		<view class="flex align-center justify-between bg-white mt-1" style="height: 120rpx;box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.0);">
			<view class="flex flex-1 align-center  text-color  flex-column" style="height: 100rpx; font-size: 32rpx;" @click="switchType(1)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==1?'font-bold':''">收支明细</text>
				<view v-if="checkedIndex==1" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
			
			<view class="flex flex-1 align-center text-color flex-column" style="height: 100rpx;font-size: 32rpx;" @click="switchType(2)">
				<text style="margin-top: 30rpx;" :class="checkedIndex==2?'font-bold':''">待入账明细</text>
				<view v-if="checkedIndex==2" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
		</view>
		
		
		
		<divider :height="4"></divider>
		
		<!-- 明细列表 -->
		
		<view class="flex flex-column" v-for="(item,index) in listData" :key="index">
			
			<view class="flex flex-row align-center justify-between" style="height: 140rpx;">
				
				<view class="flex align-center justify-center flex-column ml-2 mt-4">
					<text style="font-size: 32rpx;color: #1D1200;">收入—商城订单</text>
					<text class="mt-2" style="color: #9F9F9F; font-size: 26rpx;">2021.01.20 10:30:00</text>
				</view>
				
				<view class="flex align-center justify-between flex-row mt-2">
					<text class="text-checked-color" style="font-size: 36rpx;">+0.01</text>
					<view v-if="index==0" class="rounded-1 flex align-center justify-center ml-2 mr-4" style="background-color:#FF7200;height: 50rpx; width: 110rpx;" @click="getMoney()">
						<text style="font-size: 30upx;color: #fff;">收款</text>
					</view>
					<image v-if="index==1" class="ml-3 mr-4" src="../../../static/common/yishoukuan.png" style="height: 100rpx;width: 100rpx;"></image>
				</view>
				
			</view>
			
			<view class="mt-2">
				<divider :height="4"></divider>
			</view>
			
		</view>
		
		
		<u-modal v-model="show" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="余额说明"
		 :show-confirm-button="false" >
			<view class="flex  flex-column pl-3 pr-3 text-color mt-3" style="height: 240rpx;">
				<text>1、余额提现需联系平台负责人</text>	
				<text class="mt-1">2、店铺赚取的佣金会默认存入余额账户</text>	
				
				
				<view class=" flex align-center justify-center mt-4 font-bold " style="background-color:#FF7200;border-radius: 40rpx; color: #fff;height: 70rpx;font-size: 28upx;margin-left: 120rpx;margin-right: 120rpx;" @click="showDes()">
					<text>知道了</text>
				</view>
				
			</view>
		</u-modal>
		
		 <uni-load-more :status="status" :content-text="contentText" v-if="listData.length>0" />
		
	</view>
</template>

<script>
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	import divider from '@/components/divider.vue';
	export default {
		
		components:{
			divider
		},
		
		data() {
			return {
				background:{
					backgroundImage: 'linear-gradient(0deg, #FF7200 0%, #FFB183 100%)'
				},
				checked:true,
				show:false,
				checkedIndex:1,
				yuE:0,
				leiji:0,
				daiRu:0,
				kind:1,
				page:1,
				reload: true,
				loadMore: false,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				listData:[]
			}
		},
		
		onLoad() {
			this.initData()
			this.getDataList()
		},
		
		
		onReachBottom() {
				this.loadMore = true;
				this.page++;  
				if (this.status == 'noMore') {
					return;
				}
				this.status = 'loading';
			    this.getDataList()
		},
		
		methods: {
			
			initData(){
				// 发送到服务端
				$H.get("/merchant/waterInit").then((res) => {
					//请求成功
					console.log(res)
					this.yuE=res.data.acount
					this.leiji=res.data.historyAcount
					this.daiRu=res.data.wati_acount
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			
			
			
			getDataList(){
			    let data={
					kind:this.kind,
					size:10,
					current:this.page,
				}
				// 发送到服务端
				$H.get("/merchant/waterDetail",data).then((res) => {
					//请求成功
					console.log(res)
					let list = res.data.records
					
					let pages=res.data.pages;
					
					console.log(this.page)
					if(pages>1&&this.page<=pages){
						this.listData = this.reload ? list : this.listData.concat(list);
					}
					else if(pages==0){
						this.listData=[];
						this.nodata=true;
						this.status ='noMore'
					}
					else if(pages==1){
						this.listData = list
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
			},
			
			
			switchType(index){
				if(index==1){
					this.checked=true
					this.checkedIndex=1
					this.kind=1;
					this.page=1
					this.status = 'more';
					this.getDataList()
				}
				else{
					this.checked=false
					this.checkedIndex=2
					this.kind=0
					this.page=1
					this.status = 'more';
					this.getDataList()
				}
			},
			
			// 收款
			getMoney(){
				uni.showModal({
					title:"确定收款吗?",
					cancelText:"取消",
					confirmText:"收款",
					confirmColor:"#FF7200",
					success(res) {
						if(res.confirm){
							
						}
					}
				})
			},
			
			showDes(){
				this.show=!this.show
			}
		}
	}
</script>

<style>

</style>
