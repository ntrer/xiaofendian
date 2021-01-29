<template>
	<view>

		<u-navbar :is-back="true" title=" 订单收益分析" title-color="#000" :background="background">
		</u-navbar>

		<!-- 切换条件 -->
		<view class="flex align-center justify-between m-2" style="background-color: #fff;">

			<!-- 切换日/月报 -->
			<view class="flex align-center justify-between m-2">
				<view class="rounded-1 mr-2 flex align-center justify-center" style="width: 100rpx; height: 50rpx;" :style="checked?' background-color:#FF7200;color:#fff':'background-color:#FFF;border: #000000 solid 1rpx;color:#000'"
				 @click="chooseType(1)">日报</view>
				<view class="rounded-1 flex align-center justify-center" style="width: 100rpx; height: 50rpx;" :style="checked?' background-color:#FFF;border: #000000 solid 1rpx;color:#000':'background-color:#FF7200;color:#fff'"
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

		<view class="flex align-center justify-between mt-4" style="margin-left: 80rpx;margin-right: 80rpx;">
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

		</view>

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

		<view class="flex flex-column" v-for="(item,index) in 10">
			<view class="flex align-center justify-between ml-2 mr-2" style="height: 140rpx;">
				<view class="flex align-center justify-between">
					<free-avater size="100" style="margin-right: 20rpx;"></free-avater>
					<view class="flex align-center flex-column">
						<view class="flex align-center justify-between">
							<text style="color: #000;">Misaki</text>
							<view class="flex align-center justify-center rounded-1 ml-1" style="border: #FF7200 solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#FF7200 ;">
								商城订单
							</view>
							<!-- <view class="flex align-center justify-center rounded-1 ml-1" style="border: #FDCA0E solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#FDCA0E ;">
								活动订单
							</view>
							<view class="flex align-center justify-center rounded-1 ml-1" style="border: #35DAFD solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#35DAFD ;">
								优惠订单
							</view>
							<view class="flex align-center justify-center rounded-1 ml-1" style="border: #48F431 solid 1rpx; font-size: 20rpx;padding-left: 10rpx;padding-right: 10rpx;padding-top: 5rpx;padding-bottom: 5rpx; color:#48F431 ;">
								到店促销
							</view> -->
						</view>

						<view class="mt-2">
							<text style="color: #9F9F9F;">01-18 10:26:13</text>
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
						<text style="color: #1D1200;font-size: 36rpx;font-weight: 600;">0.01</text>
					</view>
				</view>
			</view>
			<divider :height="4"></divider>
		</view>




		<u-picker mode="time" v-model="show" title="请选择时间" confirm-color="#FF7200" :mask-close-able="false" :params="params"
		 @confirm="chooseTime()"></u-picker>

	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import freeAvater from '@/components/free-avater.vue'
	export default {
		components: {
			divider,
			freeAvater
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
				nowTime: ""
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
			console.log(this.year)
		},



		methods: {
			// 切换日/月报
			chooseType(index) {
				if (index == 1) {
					this.checked = true;
					this.params.year = false
					this.params.day = true
					this.nowTime = this.month + this.day;
				} else {
					this.checked = false;
					this.params.year = true
					this.params.day = false
					this.nowTime = this.year + this.month;
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
				} else {
					this.nowTime = res.year + "年" + res.month + "月";
				}
			}
		}
	}
</script>

<style>

</style>
