<template>
	<view>
		<u-navbar title="客流裂变系统"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<divider :height="4"></divider>
		<view class="flex align-center justify-between pl-3 pr-3" style="height: 160rpx;">
			
			<view class="flex align-center justify-between">
				<image src="../../../static/common/shop_logo.png" style="width: 130rpx;height: 100rpx;"></image>
				<view class="flex flex-column ml-2">
					<text class="text-color font-bold" style="font-size: 30upx;">Shan的店铺</text>
					<text class="mt-1 font-bold" style="color: #FFB183;font-size: 26upx;">未开通服务，点击开通</text>
				</view>
			</view>
			
			<view class="flex align-center justify-between">
				<text class="font-bold" style="color: #9F9F9F;font-size: 26upx;">修改资料</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
			
		</view>
		
		<divider :height="16"></divider>
		
		<!-- 功能列表 -->
		<view class="flex flex-column" v-for="(item,index) in 10" :key="index">
			<view class="flex align-center  pl-3 pr-3" style="height: 280rpx;">
				<image src="../../../static/common/toolsList.png" style="height: 200rpx;width: 200rpx;"></image>
	            <view class="flex flex-column ml-2">
					
					<text class="font-bold text-color" style="font-size: 32upx;">会员裂变</text>
					<text class="mt-2 font-bold" style="width: 460rpx;font-size: 24upx;color: #6B6B6B;">动给会员派发优惠券，刺激会员裂变新会员，轻松实现客户翻倍增长。</text>
					
					<view class="flex align-center justify-between mt-2">
						<text class="font-bold" style="font-size: 22upx;color: #9F9F9F;">98568商家使用</text>                      
						<view class="rounded-1 flex align-center justify-center" style="width: 160rpx;height: 50rpx;background-color: #FECACB;">
							<text class="text-checked-color" style="font-size: 26rpx;">已开启</text>
						</view>
						<!-- <view class="rounded-1 flex align-center justify-center" style="width: 160rpx;height: 50rpx;background-color: #F43132;">
							<text style="font-size: 26rpx;color: #fff;">去开启</text>
						</view> -->
					</view>
					
				</view>			
				
			</view>
		
			<divider :height="16"></divider>
		</view>
		
		
		
		
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
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
