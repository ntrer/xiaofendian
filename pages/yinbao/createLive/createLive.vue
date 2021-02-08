<template>
	<view style="background-color: #F8F8F8;height: 100vh;">
		<u-navbar title="创建直播"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	     <divider :height="4"></divider>
		 
		 <!-- 基本设置 -->
		 <view class="flex align-center text-color" style="height: 85rpx;background-color: #fff;">
			
			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view> 
			 <text class="ml-4" style="font-size: 32rpx;">基本设置</text>
		 </view>
		 
		 <!-- 封面 -->
		 <view class="flex align-center justify-between p-4" style="height: 360rpx;background-color: #F8F8F8;">
			 <view class="rounded-1 flex align-center justify-center flex-column" style="background-color: #EBEAEA;height: 306rpx;width: 416rpx;">
				 <image src="../../../static/common/uploadPic.png" style="height: 100rpx;width: 100rpx;"></image>
				 <text style="font-size: 24rpx; color: #C2BDBD;margin-top: 25rpx;">添加分享封面</text>
			 </view>
			 <view class="ml-2 rounded-1 flex align-center justify-center flex-column" style="background-color: #EBEAEA;height: 306rpx;width: 268rpx;">
				 <image src="../../../static/common/uploadPic.png" style="height: 100rpx;width: 100rpx;"></image>
				 <text style="font-size: 24rpx; color: #C2BDBD;margin-top: 25rpx;">添加首页封面</text>
			 </view>
		 </view>
		 
		 <!-- 直播标题 -->
		 <view class=" flex align-center pl-5" style="font-size: 32rpx;height: 100rpx;background-color: #fff;">
			 <text class="text-color" style="margin-right: 20rpx;">直播标题</text>
			 <input type="text" value="" placeholder="请填写直播标题" placeholder-style="color: #9F9F9F;"/>
		 </view>
		 <divider :height="4"></divider>
		 
		 <!-- 直播时间 -->
		 <view class=" flex align-center pl-5" style="font-size: 32rpx;height: 100rpx;background-color: #fff;">
		 	 <text class="text-color" style="margin-right: 20rpx;">直播时间</text>
		 	 <text style="color: #9F9F9F;" @click="selectTime()">{{liveTime}}</text>
		 </view>
		 
		  <divider :height="30"></divider>
		 
		 <!-- 直播商品 -->
		 <view class="flex align-center text-color justify-between" style="height: 85rpx;background-color: #fff;" @click="chooseGoods()">
		 	<view class="flex align-center justify-between">
				<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				<text class="ml-4" style="font-size: 32rpx;">直播商品</text>
			</view>		
		 	<view class="flex align-center justify-between mr-4">
				<text style="color: #757272;font-size: 24rpx;">选择商品</text>
				<uni-icon  :size="20" color="#757272" type="arrowright" />
			</view>
			
		 </view>
		 
		 
		 <!-- 创建预告 -->
		 
		 <view class="main-bg-color flex align-center justify-center " style="font-size: 36rpx;color: #fff; height: 75rpx;border-radius: 40rpx; margin-left: 120rpx;margin-right: 120rpx;margin-top: 100rpx;">
			 创建预告
			 
		 </view>
		 
		 <!-- 时间选择器 -->
		 <u-picker mode="time" v-model="show" title="请选择时间" confirm-color="#FF7200" :mask-close-able="false" :params="params"
		  @confirm="chooseTime()"></u-picker>
		  
		  
		  <!-- TODO -->
		  <!-- 商品弹出选择 -->
		  <u-popup v-model="goodsShow" mode="bottom" border-radius="20" height="60%" :mask-close-able="false" :closeable="true" close-icon-pos="top-right">
			  <view class=" flex align-center" style="height: 120rpx;">
				  <view class="flex align-center justify-center ml-3" style=" border: 1rpx solid #9F9F9F;border-radius: 20rpx;height: 55rpx;width: 160rpx;">添加商品</view>
				  <view class="font-bold text-color" style="font-size: 34rpx;margin-left: 120rpx;">直播商品(0)</view>
			  </view>
			  
			  <!-- 无商品 -->
			  <view class="">
				  
			  </view>
		 
			
		  </u-popup>
		   <!-- TODO -->
		  
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components:{
			divider,
			uniIcon
		},
		data() {
			return {
				background:{
					backgroundColor: '#fff',
				},
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
				show: false,
				goodsShow:false,
				liveTime:"请选择开播时间"
			}
		},
		methods: {
			selectTime(){
				this.show = true
			},
			// 选择时间
			chooseTime(res) {
				this.liveTime = res.year+"年" +res.month + "月" + res.day + "日"+res.hour+"时"+res.minute+"分";
			},
			chooseGoods(){
				this.goodsShow=true
			}
		}
	}
</script>

<style>

</style>
