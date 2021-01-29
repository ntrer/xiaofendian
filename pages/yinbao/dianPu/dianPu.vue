<template>
	<view>
		<u-navbar title="店铺管理"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex flex-column">
			<!-- 背景图 -->
			<image class="w-100" src="../../../static/common/dianpu_bg.jpg" style="height: 360rpx;"></image>
			
			<!-- 浮动店铺信息 -->
			<view class="ml-4 mr-4 flex flex-column" style="height: 160rpx; background-color: #fff; box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15); border-radius: 24rpx;margin-top: -100rpx;">
				
				<view class="ml-2 mt-3" >
					<text style="font-size: 32rpx;color: #1D1200;">L的店铺</text>
				</view>
				
				<view class="flex align-center justify-between ml-2 mt-2">
					<view class="flex align-center justify-between">
						<text style="color: #303030;font-size: 26rpx;">客流裂变系统</text>
						<view class="ml-2 mr-2 mb-2" style="width: 1rpx;height: 20rpx;background: #DDD;">
							<text>|</text>
						</view>
						<text  style="color: #FF7200;font-size: 26rpx;margin-bottom: 5rpx;">未使用</text>
					</view>
					
					<view class="rounded-1 flex align-center justify-center mr-4 mb-2" style="height: 50rpx;width: 140rpx;background-color: #FF7200;">
						
						<text style="font-size: 26upx;color: #fff;">立即购买</text>
						
					</view>
				</view>
						 
			</view>
			
		</view>
		
		<!-- 店铺资料 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="toDianPuZiLiao()">
			<text class="text-color font-normal">店铺资料</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		
		<divider :height="30"></divider>
		<!-- 预览店铺首页 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;">
			<text class="text-color font-normal">预览店铺首页</text>
			<view class="flex align-center justify-between">
				<text style="color: #9F9F9F;">小程序</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<divider :height="4"></divider>
		<!-- 小程序商城管理 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="toShop()">
			<text class="text-color font-normal">小程序商城管理</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<divider :height="30"></divider>
		
		<!-- 店铺收款码 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="toShouKuanMa()">
			<text class="text-color font-normal">店铺收款码</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<divider :height="4"></divider>
		
		<!-- 店铺收款配置 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;">
			<text class="text-color font-normal">店铺收款配置</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<divider :height="4"></divider>
		<!-- 佣金配置 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="toYongJin()">
			<text class="text-color font-normal">佣金配置</text>
			<view class="flex align-center justify-between">
				<text style="color: #9F9F9F;">当前佣金为{{yongjin}}%</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<divider :height="30"></divider>
		<!-- 邀请好友开店 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="toYaoYue()">
			<text class="text-color font-normal">邀请好友开店</text>
			<view class="flex align-center justify-between">
				<text style="color: #9F9F9F;">奖励</text>
				<text class="text-checked-color ml-1">999元</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<divider :height="4"></divider>
		<!-- 我的专属策划师 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="showCeHuaShi()">
			<text class="text-color font-normal">我的专属策划师</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		
		
		<!-- 策划师弹框 -->
		<u-popup v-model="ceHuaShow" mode="bottom" border-radius="20" height="60%" :closeable="false" >
			<view class="">
				<image src="../../../static/common/yaoqing_bg.png" style="width: 100%;height: 100%;position: absolute;z-index: -1;"></image>
				
				<view class=" flex justify-between align-center pl-2 pr-2 pt-2" style="height: 200rpx;">
					<view class="flex flex-column align-center justify-center" style="max-width: 160rpx;">
						<free-avater size="80" style="margin-right: 10rpx;margin-top: 5rpx;"></free-avater>
						<text class="text-color font-bold text-center" style="font-size: 24upx;">直播顾问@MISAKI</text>
					</view>
					
					<view class="flex align-center pt-4">
						<image src="../../../static/common/dialog.png" style="width: 600rpx; height: 160rpx;position: absolute;z-index: -1;"></image>
						<text class="pl-4 pr-2" style="line-height: 44rpx;">哈喽~MiSaki,我是你的专属直播顾问，加一下我微信，免费为你定制直播引流方案~</text>
					</view>
				
				</view>	
					
				<view class="flex align-center justify-center mt-4">
					<image src="../../../static/common/finger.png" style="width: 40rpx;height: 40rpx;"></image>
				</view>	
				
				<view class="flex align-center justify-center flex-column mt-2">
					
					<image src="../../../static/common/qrcode.png" style="width: 240rpx;height: 240rpx;"></image>
					<text class="text-color mt-2" style="font-size: 32upx;">微信号:337845818</text>
				</view>
					
				<view class="bg-white flex align-center justify-center " style="font-size: 32upx;color: #FF7200; height: 75rpx;border-radius: 40rpx; margin-left: 120rpx;margin-right: 120rpx;margin-top: 100rpx;">
				 复制微信号&打开微信
							 
				</view>	
					
					
			</view>
			 
				 	
		</u-popup>
		
	</view>
</template>

<script>
	import freeAvater from'@/components/free-avater.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import divider from '@/components/divider.vue';
	export default {
		
		components:{
			divider,
			freeAvater
		},
		
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				yongjin:0,
				ceHuaShow:false
			}
		},
		methods: {
			toDianPuZiLiao(){
				uni.navigateTo({
					url:'../dianPuZiLiao/dianPuZiLiao'
				})
			},
			toYongJin(){
				uni.navigateTo({
					url:'../yongJinPeiZhi/yongJinPeiZhi'
				})
			},
			
			toShouKuanMa(){
				uni.navigateTo({
					url:'../shouKuanMa/shouKuanMa'
				})
			},
			
			toYaoYue(){
				uni.navigateTo({
					url:'../tuiJianYaoYue/tuiJianYaoYue'
				})
			},
			
			toShop(){
				uni.navigateTo({
					url:'../shop/shop'
				})
			},
			
			showCeHuaShi(){
				this.ceHuaShow=true
			}
		}
	}
</script>

<style>

</style>
