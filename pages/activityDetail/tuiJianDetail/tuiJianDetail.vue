<template>
	<view>
		<u-navbar :is-back="true" title="推荐有礼-活动详情" title-color="#000" title-width="400" :background="background"></u-navbar>
		
		<divider :height="20"></divider>
		<!-- 今日数据 标题-->
		<view class="flex flex-row align-center  pt-2 bg-white">
			<view class="main-bg-color" style="width: 8rpx;height: 36rpx;"></view>
			<text style="font-size: 32rpx;font-weight: 600;" class="ml-2">今日数据</text>
			<view class="rounded-circle flex align-center justify-center ml-1" style="height: 32rpx;width: 32rpx; background-color: #FF7200;" @click="showDescPop(true)">
				<text class="text-center" style="font-size: 24upx;color: #fff;">!</text>
			</view>
		</view>
		
		<!-- 今日数据宫格 -->
		<view class="flex align-center  bg-white" style="height: 200rpx;">
			<view class="flex align-center justify-center flex-column flex-1" >
				<text>浏览次数</text>
				<text class="mt-4" style="font-size: 40upx;">{{todyAdd}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>送券数</text>
				<text class="mt-4" style="font-size: 40upx;">{{todyOrder}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text>用券数</text>
				<text class="mt-4" style="font-size: 40upx;">{{todyMoney}}</text>
			</view>
		</view>
		
		<!-- 分割线 -->
		<view class="pl-4 pr-4 bg-white">
			<divider :height="4"></divider>
		</view>
		
		<!-- 本月数据标题 -->
		<view class="flex flex-row align-center  bg-white" style="height: 80rpx;">
			<view class="main-bg-color" style="width: 8rpx;height: 36rpx;"></view>
			<text style="font-size: 32rpx;font-weight: 600;" class="ml-2">总计数据</text>
		</view>
		
		<!-- 本月数据 -->
		<view class="flex align-center  bg-white" style="height: 120rpx;">
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1" style="font-size: 40upx;">{{monthAdd}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1" style="font-size: 40upx;">{{monthOrder}}</text>
			</view>
			<view class="flex align-center justify-center flex-column flex-1">
				<text class="mt-1" style="font-size: 40upx;">{{monthMoney}}</text>
			</view>
		</view>
		
		<divider :height="20"></divider>
		
		<!-- 商城订单 -->
		<view class=" mt-3 flex align-center justify-between bg-white" style="height: 100rpx;">
			<view class="flex align-center">
				<view class="main-bg-color" style="width: 8rpx;height: 36rpx;"></view>
				<text style="font-size: 32rpx;font-weight: 600;" class="ml-2">推荐记录</text>
			</view>
		
			<view class="flex align-center justify-between mr-2" @click="toAllRecord()">
				<text style="color: #1D1200;">所有记录</text>
				<uni-icon :size="20" color="#1D1200" type="arrowright" />
			</view>
		
		</view>
		
		<view class=" bg-white flex align-center justify-center" style="height: 120rpx;display: none;">
			<text style="color: #8A8A8A;">还没有推荐记录，赶紧分享给客户去推荐</text>
		</view>
		
		
		<view class="flex align-center justify-between">
			<view class="flex align-center pl-2" style="height: 120rpx;">
				<image src="../../../static/common/userpic.png" style="height: 80rpx;width: 80rpx;"></image>
				<view class="flex flex-column justify-between ml-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text style="font-size: 28upx;">消费者名称</text>
					<text style="font-size: 24upx;" class="mt-1">17555555555</text>
				</view>
			</view>
			
			<view class="flex align-end flex-column pr-2" >
				<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">推荐好友：5位</text>
				<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">2021.01.02 12:01:22</text>
			</view>
		</view>
		
		
		
		
		<view class="flex align-center " style="padding-left: 70rpx;padding-right: 70rpx;background-color: #f5f5f5;height: 160rpx;">
			<view class="flex-1 flex align-center justify-center mr-5" style="border-radius: 36rpx;border: #1D1200 solid 1rpx;height: 72rpx;"
			 @click="shopSetting()">
				编辑活动
			</view>
			<view class="flex-1  flex align-center justify-center ml-5" style="border-radius: 36rpx;border: #1D1200 solid 1rpx;height: 72rpx;">
				预览活动
			</view>
		</view>
		
		
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>活动标题</text>
			<text>推荐有礼活动</text>
		</view>
		<divider :height="4"></divider>
		
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>开始时间</text>
			<text>2021.01.02 12:01:22</text>
		</view>
		<divider :height="4"></divider>
		
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>结束时间</text>
			<text>2021.01.02 12:01:22</text>
		</view>
		<divider :height="4"></divider>
		
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>参与必填</text>
			<text>手机号码</text>
		</view>
		<divider :height="4"></divider>
		
		
		
		<view class="" v-for="(item,index) in 2" :key="index">
			<view class="">
				<view class="flex flex-row align-center  pt-2 bg-white">
					<view class="main-bg-color" style="width: 8rpx;height: 28upx;"></view>
					<text style="font-size: 28rpx;" class="ml-2">推荐人礼品</text>
					
				</view>
				<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
					<text>新客专享</text>
					<text>未开启</text>
				</view>
				<divider :height="4"></divider>
				<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
					<text>礼品类型</text>
					<text>50元代金券</text>
				</view>
				<divider :height="4"></divider>
				<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
					<text>使用门槛</text>
					<text>满100可用</text>
				</view>
				<divider :height="4"></divider>
				<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
					<text>适用范围</text>
					<text>全场适用</text>
				</view>
				<divider :height="4"></divider>
				<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
					<text>券有效期</text>
					<text>30天</text>
				</view>
				
			</view>
			<divider :height="4"></divider>
		</view>
		
	
		
		
		<view class=" flex align-center justify-center flex-column pt-4" style="height: 200rpx;background-color: #F4F4F4;">
			<view class=" flex align-center justify-center " style="border-radius: 36rpx;border: #1D1200 solid 1rpx;height: 72rpx; width: 440rpx;"
			 @click="closeActivity()">
				结束活动
			</view>
			
			<view class=" flex align-center justify-center" style="font-size: 24upx;height: 100rpx;">
				<text style="color: #8A8A8A;">对活动有疑问？</text>
				<text style="color: #1D1200;">点击这里获取帮助</text>
			</view>
			
			
		</view>
		
		<view class="" style="height: 100rpx;"></view>
		
		<view  class="flex align-center justify-center fixed-bottom">
			<view class="flex flex-2 align-center justify-center" style="background-color: #000000;color: #fff;font-size: 34upx;height: 100rpx;" @click="toPoster()">
				生成门店海报
			</view>
			<view class="flex flex-4 align-center justify-center" style="background-color: #FF7200;color: #fff;font-size: 34upx;height: 100rpx;">
				分享给客户去推荐
			</view>
		</view>
		
		
		<u-modal v-model="showPop" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="确认结束活动"
		 :show-confirm-button="true" :show-cancel-button="true" :confirm-style="{backgroundColor:'#FF7200',color: '#fff'}"
		 @confirm="sureClose()">
			<view class="flex  flex-column pl-3 pr-3 text-color mt-1 align-center justify-center" style="height: 140rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">
				<text>结束活动后，用户无法领券，被推荐人使用券后，推荐人得不到礼品，请谨慎操作</text>
			</view>
		</u-modal>
		
		<u-modal v-model="showDesc" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="数据说明"
		 :show-confirm-button="false" :show-cancel-button="false" >
			<view class="flex  flex-column pl-3 pr-3 text-color mt-1 align-center justify-center" style="height: 140rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">
				<text>送券数：推荐人送出去的券数量</text>
				<text>用券数：送出的券中，已使用的数量</text>	
			</view>
			
			<view class=" flex align-center justify-center mt-2 font-bold mb-2" style="background-color:#FF7200;border-radius: 40rpx; color: #fff;height: 70rpx;font-size: 28upx;margin-left: 140rpx;margin-right: 140rpx;" @click="showDescPop(false)">
				<text>知道了</text>
			</view>
			
		</u-modal>
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	export default {
		components: {
			divider
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				todyAdd: 0,
				todyOrder: 0,
				todyMoney: 0,
				monthAdd: 0,
				monthOrder: 0,
				monthMoney: 0,
				showPop:false,
				showDesc:false
			}
		},
		methods: {
			toAllRecord(){
				uni.navigateTo({
					url:'../tuiJianRecord/tuiJianRecord'
				})
			},
			
			closeActivity(){
				this.showPop=true
			},
			
			
			showDescPop(show){
				
				this.showDesc=show
			},
			
			
			
			sureClose(){
				
			},
			toPoster(){
				uni.navigateTo({
					url:'../createPoster/createPoster'
				})
			}
		}
	}
</script>

<style>

</style>
