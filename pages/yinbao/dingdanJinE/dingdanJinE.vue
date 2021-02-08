<template>
	<view>
		<u-navbar  :background="background" title="订单金额" title-color="#fff":isBack="true" back-icon-color="#fff"></u-navbar>
		
		
		<view class="flex align-center justify-between" style="height: 120rpx;font-size: 34rpx;padding-top: 20rpx;">
			<view class="flex flex-1 align-center justify-center" :class="checked?' font-bold text-checked-color':''" @click="switchType(1)">
				收入明细 <text v-show="checkedIndex==1" class="ml-2" style="font-size: 28upx;">▼</text>
				<text v-show="checkedIndex==2" class="ml-2" style="font-size: 28upx;color: #fff;">▼</text>
			</view>
			<view class="flex flex-1 align-center justify-center" :class="!checked?'font-bold text-checked-color':''" @click="switchType(2)">
				支出明细 <text v-show="checkedIndex==2" class="ml-2" style="font-size: 28upx;">▼</text>
				<text v-show="checkedIndex==1" class="ml-2" style="font-size: 28upx;color: #fff;">▼</text>
			</view>
		</view>
		<divider :height="4"></divider>
		
		<!-- 明细列表 -->
		
		<view class="flex flex-column" v-for="(item,index) in 2" :key="index">
			
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
		
	</view>
</template>

<script>
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
				checkedIndex:1
			}
		},
		methods: {
			switchType(index){
				if(index==1){
					this.checked=true
					this.checkedIndex=1
				}
				else{
					this.checked=false
					this.checkedIndex=2
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
