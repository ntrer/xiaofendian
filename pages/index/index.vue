<template>
	<view>
		<view class="flex flex-column" style="font-size: 50rpx;font-weight: 800;margin-left: 60rpx;">
			<text class="title">小分店</text>
			<text class="title">轻松引爆门店客流</text>
		</view>

		<view class="m-6" style="margin-top: 300rpx;">
			<u-button type="success" shape="circle" style="height: 100rpx;" open-type="getUserInfo" lang="zh_CN" @getuserinfo="appLoginWx">
				<image src="../../static/common/wexin.png" mode="aspectFit" class="mr-1" style="width: 40rpx;height: 40rpx;"></image>
				<text class="font-md">微信一键登录</text>
			</u-button>
		</view>


		<!-- <view class="fixed-bottom flex align-center justify-center" style="margin-bottom: 250rpx;" @click="phoneLogin()">
			<text>使用手机号登录></text>
		</view> -->

		<view class="fixed-bottom flex align-center justify-center" style="margin-bottom: 100rpx;">
			<text>登录即表明您同意</text>
			<text style="color: #0062CC;">《xxx服务协议》</text>
			<text style="color: #0062CC;">《隐私协议》</text>
		</view>

	</view>
</template>

<script>
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

			phoneLogin() {
				uni.navigateTo({
					url: '../phonelogin/phonelogin'
				})
			},
			appLoginWx() {
				
				uni.showLoading({
					title:'登录中...'
				})
				
				// #ifdef MP-WEIXIN
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: (res2) => {
						                
									uni.getUserInfo({
										provider: 'weixin',
										success: (info) => { //这里请求接口
										
										uni.hideLoading();
										
											console.log(res2);
											console.log(info);
											
											this.toLogin(res2,info);
											
						             
										},
										fail: () => {
											uni.showToast({
												title: "微信登录授权失败",
												icon: "none"
											});
										}
									})
						
								},
								fail: () => {
									uni.showToast({
										title: "微信登录授权失败",
										icon: "none"
									});
								}
							})
						
						} else {
							uni.showToast({
								title: '请先安装微信或升级版本',
								icon: "none"
							});
						}
					}
				});
				//#endif
			},
			
			// 自己服务器的登录
			toLogin(data,info){
				
				let param={
					wx_user_name:info.userInfo.nickName,
					head_portrait_image:info.userInfo.avatarUrl
				}
				
				
				const requestTask = uni.request({
				  url: $C.baseUrl+"/public/auth_openid?js_code="+data.code,
				  data: param,
				  method:'POST',
				  header: {
				    'Content-Type':'application/json',
				  },
				  success(res) {
				    console.log(res.data)
					// 存储用户信息
					 $U.setStorage("userInfo",info.userInfo)
					 
					//请求成功
					uni.showToast({
						title:"登录成功"
					})
					uni.switchTab({
					   	url:'../tabbar/yinbao/yinbao'
					   })
					 
				  },
				  fail: (err) => {
				  	console.log(err)
				  	//请求失败
				  	uni.showToast({
				  		title:"登录失败"
				  	})
				  }
				})
				requestTask.onHeadersReceived((res) => {
					//存储token
				  $U.setStorage("token",res.header.authorization)
				  console.log('onHeadersReceived: ', res)
				})
				
			}
		}
	}
</script>

<style>


</style>
