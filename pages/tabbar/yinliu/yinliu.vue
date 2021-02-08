<template>
	<view>
		<u-navbar :is-back="false" title="引流学院" title-color="#fff" :background="background"></u-navbar>
		
		<view class="flex align-center justify-center" style="height: 72rpx;background-color: #F5E6DB;">
			<view class="flex align-center justify-center" style="font-size: 28upx;">
				<image src="../../../static/common/laba.png" style="height: 30rpx;width: 30rpx;"></image>
				<text style="font-family: PingFangSC-Regular, PingFang SC;">开通【客流裂变系统】引爆客流,</text>
				<text style="color: #FF7200;" class="ml-1">去开通 ></text>
			</view>
		</view>
		
		<view class="pl-2 pr-2" style="background-color: #F4F4F4;">
			
			<view class="flex align-center justify-center" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #1D1200;font-size: 40upx;height: 120rpx;">
				<text>客流裂变系统</text>
			</view>
			
			
			<!-- 第一行 -->
			<view class="flex align-center justify-between">
				<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #FFF;margin-right: 10rpx;border-radius: 16rpx;" @click="toShop()">
					<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="flex flex-column align-center ml-2">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">在线商城</text>
						<!-- <text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #1D1200;font-size: 20upx;">顾客在家随时购物</text> -->
						
						<!-- <view class="flex align-center justify-center mt-2" style="background-color: #FFF0E5;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FF7200;font-size: 28upx;">已开启</text>
						</view> -->
						
						<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">去开启</text>
						</view>
					</view>
				</view>
				
				<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-left: 10rpx;border-radius: 16rpx;" @click="toZhuanPan()">
					<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="flex flex-column align-center ml-2">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">大转盘抽奖</text>
						<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
						</view>
					</view>
				</view>
				
			</view>
			
			
			
			<!-- 第二行 -->
			<view class="flex align-center justify-between mt-2">
				
			<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-right: 10rpx;border-radius: 16rpx;" @click="topintuan()">
				<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
				<view class="flex flex-column align-center ml-2">
					<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">拼团活动</text>
					<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
					</view>
				</view>
			</view>
				
				<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-left: 10rpx;border-radius: 16rpx;" @click="totuijian()">
					<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="flex flex-column align-center ml-2">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">推荐有礼</text>
						<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
						</view>
					</view>
				</view>
				
			</view>
			
			
			<!-- 第三行 -->
			<view class="flex align-center justify-between mt-2">
				
			<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-right: 10rpx;border-radius: 16rpx;" @click="tokanjia()">
				<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
				<view class="flex flex-column align-center ml-2">
					<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">砍价活动</text>
					<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
					</view>
				</view>
			</view>
				
				<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-left: 10rpx;border-radius: 16rpx;" @click="tofaquan()">
					<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="flex flex-column align-center ml-2">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">一键发圈</text>
						<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
						</view>
					</view>
				</view>
				
			</view>
			
			
			<!-- 第四行 -->
			<view class="flex align-center justify-between mt-2">
				
			<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-right: 10rpx;border-radius: 16rpx;" @click="tomiaosha()">
				<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
				<view class="flex flex-column align-center ml-2">
					<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">秒杀活动</text>
					<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
					</view>
				</view>
			</view>
				
				<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-left: 10rpx;border-radius: 16rpx;" @click="tohongbao()">
					<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="flex flex-column align-center ml-2">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">红包裂变</text>
						<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
						</view>
					</view>
				</view>
				
			</view>
			
			
			<!-- 第五行 -->
			<view class="flex align-center justify-between mt-2">
				
			<view class="flex flex-1 align-center pl-2" style="height: 170rpx;background-color: #EDEDED;margin-right: 10rpx;border-radius: 16rpx;" @click="tojindan()">
				<image src="../../../static/common/Scan_code.png" style="width: 80rpx;height: 80rpx;"></image>
				<view class="flex flex-column align-center ml-2">
					<text style="font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-size:32upx;font-weight: 500;">砸金蛋抽奖</text>
					<view class="flex align-center justify-center mt-3" style="background-color: #FF7200;width: 150rpx;height: 50rpx;border-radius: 30rpx;">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">创建</text>
					</view>
				</view>
			</view>
				
				<view class="flex flex-1 align-center pl-2" style="height: 170rpx;margin-left: 10rpx;border-radius: 16rpx;">
					
				</view>
				
			</view>
			
			<view class="" style="height: 100rpx;"></view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					backgroundColor: '#FF7200',
				},
			}
		},
		methods: {
			toShop(){
				uni.navigateTo({
					url:'../../yinbao/shop/shop'
				})
			},
			
			toZhuanPan(){
				uni.navigateTo({
					url:'../../yinliu/dazhuanpan/dazhuanpan'
				})
			},
			
			totuijian(){
				uni.navigateTo({
					url:'../../yinliu2/tuijian/tuijian'
				})
			},
			
			tofaquan(){
				uni.navigateTo({
					url:'../../yinliu/faquan/faquan'
				})
			},
			tokanjia(){
				uni.navigateTo({
					url:'../../yinliu/kanjia/kanjia'
				})
			},
			
			tomiaosha(){
				uni.navigateTo({
					url:'../../yinliu2/miaosha/miaosha'
				})
			},
			
			tojindan(){
				uni.navigateTo({
					url:'../../yinliu2/zajindan/zajindan'
				})
			},
			
			topintuan(){
				uni.navigateTo({
					url:'../../yinliu2/pintuan/pintuan'
				})
			},
			
			tohongbao(){
				uni.navigateTo({
					url:'../../yinliu/hongbao/hongbao'
				})
			}
			
		}
	}
</script>

<style>

</style>
