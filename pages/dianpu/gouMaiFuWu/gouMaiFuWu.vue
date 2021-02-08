<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="购买服务" :background="background" title-color="#000" :isBack="true"></u-navbar>
		<view class="flex align-center pl-2 mt-3 " style="height: 120rpx;">
			<image src="../../../static/common/shop_logo.png" style="width: 160rpx;height: 120rpx;" mode="scaleToFill"></image>
			<view class=" ml-2 flex  flex-column" style="height: 100%;">
				<text class="mt-1" style="font-family: PingFangSC-Medium, PingFang SC;color: #000000;font-size: 32upx;">{{name}}</text>
				<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;color: #1D1200;font-size: 24upx;">地址：</text>
			</view>
		</view>

		<view class=" flex flex-column ml-2 mr-2 mt-3" style="background: #FFFFFF;box-shadow: 0px 4rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);border-radius: 16rpx;">
			<view class="flex align-center pl-2 " style="height: 100rpx;">
				<text style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #1D1200;font-size: 32upx;">客流裂变系统</text>

			</view>

			<view class="flex justify-between ">
				<view class="flex flex-1 mr-1 ml-2 flex-column align-center" style="height: 260rpx;" :style="checkedIndex==1?' background:rgba(255, 114, 0, 0.04);border-radius: 8rpx;border: 1rpx solid #FF7200;':'background-color:#FFF;border: 1px solid rgba(0, 0, 0, 0.16);'"
				 @click="switchType(1)">
					<text class="mt-3" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;font-size: 32upx;" :style="checkedIndex==1?'color:#FF7200':'color:#000'">一档</text>
					<text class="mt-2" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;font-size: 32upx;color:#FF7200">￥2999</text>
					<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;font-size: 24upx;color:#FF7200">满足日常</text>
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;font-size: 24upx;color:#FF7200">营销活动</text>
				</view>
				<view class="flex flex-1 ml-1 mr-1 flex-column align-center" style="height: 260rpx;" :style="checkedIndex==2?' background:rgba(255, 114, 0, 0.04);border-radius: 8rpx;border: 1rpx solid #FF7200;':'background-color:#FFF;border: 1px solid rgba(0, 0, 0, 0.16);'"
				 @click="switchType(2)">
					<text class="mt-3" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;font-size: 32upx;" :style="checkedIndex==2?'color:#FF7200':'color:#000'">二档</text>
					<text class="mt-2" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;font-size: 32upx;color:#FF7200">￥4999</text>
					<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;font-size: 24upx;color:#FF7200">增加直播</text>
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;font-size: 24upx;color:#FF7200">引流方案</text>
				</view>

				<view class="flex flex-1 ml-1 mr-2 flex-column align-center" style="height: 260rpx;" :style="checkedIndex==3?' background:rgba(255, 114, 0, 0.04);border-radius: 8rpx;border: 1rpx solid #FF7200;':'background-color:#FFF;border: 1px solid rgba(0, 0, 0, 0.16);'"
				 @click="switchType(3)">
					<text class="mt-3" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;font-size: 32upx;" :style="checkedIndex==3?'color:#FF7200':'color:#000'">三档</text>
					<text class="mt-2" style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;font-size: 32upx;color:#FF7200">￥5999</text>
					<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;font-size: 24upx;color:#FF7200">赚取佣金</text>
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;font-size: 24upx;color:#FF7200">发布任务</text>
				</view>


			</view>

			<view class="flex align-center ml-2 mr-2" style="height: 160rpx;">
				<view class="main-bg-color flex align-center justify-center w-100" style="font-size: 36rpx;color: #fff; height: 75rpx; border-radius: 50rpx;"
				 @click="confirmBuy()">
					<text v-if="checkedIndex==1">￥2999立即购买</text>
					<text v-if="checkedIndex==2">￥4999立即购买</text>
					<text v-if="checkedIndex==3">￥5999立即购买</text>
				</view>
			</view>


			<view class="flex align-center pl-2 " style="height: 50rpx;">
				<text style="font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #1D1200;font-size: 32upx;">服务包含</text>

			</view>

			<view class=" ml-2 mr-2 flex justify-between mt-2">
				<view class="flex-1 mr-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
					<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
background: #FF7200;margin-top: -18rpx;">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">01</text>

					</view>

					<view class="flex align-center flex-column">
						<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">会员裂变</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">每月自动发券</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">邀请好友升级裂变</text>
					</view>
				</view>
				<view class="flex-1 ml-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
					<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
				background: #FF7200;margin-top: -18rpx;">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">02</text>

					</view>

					<view class="flex align-center flex-column">
						<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">在线商城</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">线上购物，到店核销</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">选货自提</text>
					</view>
				</view>
			</view>


<view class=" ml-2 mr-2 flex justify-between mt-2">
				<view class="flex-1 mr-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
					<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
background: #FF7200;margin-top: -18rpx;">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">03</text>

					</view>

					<view class="flex align-center flex-column">
						<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">营销活动</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">10款活动每款都能</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">为你引爆门店客流</text>
					</view>
				</view>
				<view class="flex-1 ml-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
					<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
				background: #FF7200;margin-top: -18rpx;">
						<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">04</text>

					</view>

					<view class="flex align-center flex-column">
						<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">引流方案</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">1000多种引流方案</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">1对1策划服务</text>
					</view>
				</view>
			</view>
			
			
			<view class=" ml-2 mr-2 flex justify-between mt-2">
							<view class="flex-1 mr-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
								<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
			background: #FF7200;margin-top: -18rpx;">
									<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">05</text>
			
								</view>
			
								<view class="flex align-center flex-column">
									<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">微信直播</text>
									<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">商城链接直播销售</text>
									<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">微信引流加粉</text>
								</view>
							</view>
							<view class="flex-1 ml-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
								<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
							background: #FF7200;margin-top: -18rpx;">
									<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">06</text>
			
								</view>
			
								<view class="flex align-center flex-column">
									<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">直播引流</text>
									<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">微信直播，裂变引流</text>
									<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">长期培训成长</text>
								</view>
							</view>
						</view>
						
						
						<view class=" ml-2 mr-2 flex justify-between mt-2">
										<view class="flex-1 mr-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
											<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
						background: #FF7200;margin-top: -18rpx;">
												<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">07</text>
						
											</view>
						
											<view class="flex align-center flex-column">
												<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">佣金收益</text>
												<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">平台经营任务</text>
												<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">领任务赚取佣金</text>
											</view>
										</view>
										<view class="flex-1 ml-1" style="height: 210rpx;background: rgba(244, 49, 50, 0.05);border-radius: 8rpx;">
											<view class="flex align-center justify-center ml-2" style="width: 44rpx;height: 35rpx;border-radius: 18px;
										background: #FF7200;margin-top: -18rpx;">
												<text style="font-family: PingFangSC-Medium, PingFang SC;color: #FFFFFF;font-size: 24upx;">08</text>
						
											</view>
						
											<view class="flex align-center flex-column">
												<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 32upx;">发布任务</text>
												<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">营销活动推广</text>
												<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7D7D7D;font-size: 28upx;">人人都为你店铺引流</text>
											</view>
										</view>
									</view>
									
									<view class="" style="height: 60rpx;"></view>


		</view>
		<view class="" style="height: 60rpx;"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				name: "",
				checkedIndex: 1
			}
		},

		onLoad(data) {
			console.log(data)
			this.name = data.name
		},

		methods: {
			switchType(index) {
				this.checkedIndex = index
			}
		}
	}
</script>

<style>

</style>
