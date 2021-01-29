<template>
	<view>
		<u-navbar title="个人中心"  :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<!-- 同步微信头像 -->
		<view class="flex align-center justify-between pl-2 pr-2" style="background-color: #FECACB;height: 100rpx;">
			<text style="font-size: 30rpx;color: #FB7273;font-weight: 600;">同步微信头像、昵称方便好友辨别您的身份</text>
			<view class="rounded flex align-center justify-center" style="background-color: #FF7200;width: 100rpx; height: 48rpx;">
				<text style="color: #fff;">同步</text>
			</view>
		</view>
		
		<!-- 基础信息列表 -->
		<!-- 头像 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>头像</text>
			<free-avater size="64"></free-avater>
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		
		<!--昵称 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>昵称</text>
			<text>Misaki</text>
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		<!-- 手机号 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;" @click="changePhone()">
			<text>绑定的手机号</text>
			<view class="flex align-center justify-between">
				<text>186****0068</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<divider :height="20"></divider>
		
		<!-- 消息通知 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>消息通知</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<divider :height="20"></divider>
		
		
		<!-- 手机号 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>账号遇到问题</text>
			<view class="flex align-center justify-between">
				<text>联系客服</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		<!-- 当前版本 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;">
			<text>当前版本</text>
			<text>v1.0</text>
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		<!-- 安全中心 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;" @click="toSafe()">
			<text>安全中心</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		<!-- 隐私&服务协议 -->
		<view class="flex align-center justify-between ml-2 mr-2" style="height: 100rpx;" @click="toYinSi()">
			<text>隐私&服务协议</text>
			<uni-icon  :size="20" color="#000" type="arrowright" />
		</view>
		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>
		
		
		<view class="fixed-bottom flex align-center justify-center" style="height: 100rpx;background-color: #FF7200;">
			<text style="font-size: 32rpx; font-weight: 600; color: #fff;">退出账号</text>
		</view>
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import freeAvater from'@/components/free-avater.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components:{
			freeAvater,
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
			
			changePhone(){
				uni.navigateTo({
					url:'../changePhone/changePhone'
				})
			},
			
			toYinSi(){
				uni.navigateTo({
					url:'../yinSi/yinSi'
				})
			},
			
			toSafe(){
				uni.navigateTo({
					url:'../safe/safe'
				})
			}
		}
	}
</script>

<style>

</style>
