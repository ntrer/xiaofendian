<template>
	<view>
		<u-navbar title="佣金配置"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	     <view class="text-color flex align-center justify-center mt-5" style="font-size: 32upx;">
			 <text>当前店铺佣金比例</text>
		 </view>
		 
		 <view class="text-color font-bold flex align-center justify-center mt-4" style="font-size: 66upx;">
			 <text>{{yongjin}}%</text>
		 </view>
		 
		 <view class="flex align-center justify-center mt-4" style="background-color:#FF7200;border-radius: 40rpx; color: #fff;height: 70rpx; margin-left: 180rpx;margin-right: 180rpx;" @click="showModal()">
			 <text>修改</text>
		 </view>
		 
		 <view class="mt-4 pl-2 pr-2" style="font-size: 28upx;color: #757272;">
			 <text >店铺佣金比例说明:</text>
			 <view class="mt-2" v-for="(item,index) in shuoming" :key="index">
				 <text >{{item}}</text>
			 </view>
		 </view>
	
	     <view class="mt-4">
			 <divider :height="4"></divider>
		 </view>
		 
		 
		 <!-- 修改记录 -->
		 <view class="flex align-center text-color pl-2 pr-2" style="height: 80rpx;font-size: 32upx;">
			 修改记录
		 </view>
		 
		 <!-- 记录列表 -->
		 <view class="flex align-center justify-between pl-2 pr-2" style="font-size: 22upx;height: 50rpx;" v-for="(item,index) in editList" :key="index">
			  <text>{{item.time}}</text>
			  <view class="flex align-center">
				  <text >{{item.name}}</text>
				  <text class="ml-2">{{item.state}}</text>
			  </view>
		 </view>
		 
		 
		 <u-modal v-model="show" :title-style="{color: '#000',fontSize:'36upx'}" title="修改佣金配置"
		 :show-cancel-button="true"  confirm-color="#FF7200"  @confirm="confirm">
		 	<view class="flex align-center justify-between pl-3 pr-3 text-color" style="height: 160rpx;">
		 			<text >佣金比例</text>
					<view class="flex justify-between align-center">
						<input type="text" v-model="yongJinData" placeholder="0" style="width: 200rpx;text-align: end;"/>
						<text class="ml-1">%</text>
					</view>
		 	</view>
		 </u-modal>
	
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	export default {
		components:{
			divider,
			
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				show:false,
				yongjin:0,
				yongJinData:0,
				shuoming:[
					"1、店铺的联盟返佣比例、分销佣金比例均统一使用本佣金配置，请谨慎设置。",
					"2、佣金金额计算公式为：实付金额*佣金比例。订单佣金以当前生效的比例计算。",
					"3、由于修改佣金比例会影响结算账单，需经审核后才能生效，预计审核时间为１个工作日。",
					"4、为确保交易资金安全，佣金比例最高不得超过50%。",
					"5、佣金比例审核期间，产生的佣金将优先从余额账户内扣除，请确保余额充足。"
				],
				editList: [{
					    time:"2021.01.11 09.37.47",
						name: '修改为10%',
						state:"已生效",
						id:1
					}, {
						time:"2021.01.11 09.37.47",
						name: '修改为10%',
						state:"已生效",
						id:2
					},
					{
						time:"2021.01.11 09.37.47",
						name: '修改为10%',
						state:"已生效",
						id:3
					},
					{
						time:"2021.01.11 09.37.47",
						name: '修改为10%',
						state:"已生效",
						id:4
					}
				],
			}
		},
		methods: {
			showModal(){
				this.show=true
			},
			
			confirm(){
				this.yongjin=this.yongJinData
			}
		}
	}
</script>

<style>

</style>
