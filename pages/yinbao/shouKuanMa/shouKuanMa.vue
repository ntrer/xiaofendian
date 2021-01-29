<template>
	<view style="background-color: #F4F4F4;height: 100vh;">
		<u-navbar title="店铺收款码" :background="background" title-color="#000" :isBack="true"></u-navbar>

		<view class=" flex align-center justify-center">
			<image :src="imgSrc" style="height: 760rpx; margin-top: 200rpx;
" mode="aspectFit"></image>
		</view>

			<view class="fixed-bottom main-bg-color font-bold flex align-center justify-center" style="height: 96rpx;font-size: 32rpx;color: #fff;" @click="saveImage()">
		保存图片
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				imgSrc: "../../static/common/shoukuanma.png",
				

			}
		},
		methods: {

			//微信小程序保存到相册
		  saveImage(){
			  uni.showLoading({
			  	title:"保存图片中..."
			  })
			  
			 uni.downloadFile({
				 url:"https://imgs.aixifan.com/Mlo0Unth08-YFvmeu-eAzIny-uUZJfy-22ErUv.png",
				 success: (res) => {
				 	uni.saveImageToPhotosAlbum({
				 		filePath: res.tempFilePath,
				 		success(res2) {
				 			uni.hideLoading();
				 			uni.showToast({
				 				title: '图片保存成功',
				 				duration: 2000
				 			})
				 			
				 		},
				 		fail: function(err) {
							console.log(err)
				 			if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg ===
				 				"saveImageToPhotosAlbum:fail auth deny") {
				 				// 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
				 				uni.showModal({
				 					title: '提示',
				 					content: '需要您授权保存相册',
				 					showCancel: false,
				 					success: modalSuccess => {
				 						uni.openSetting({
				 							success(settingdata) {
				 								console.log("settingdata", settingdata)
				 								if (settingdata.authSetting['scope.writePhotosAlbum']) {
				 									uni.showModal({
				 										title: '提示',
				 										content: '获取权限成功,再次点击图片即可保存',
				 										showCancel: false,
				 									})
				 								} else {
				 									uni.showModal({
				 										title: '提示',
				 										content: '获取权限失败，将无法保存到相册哦~',
				 										showCancel: false,
				 									})
				 								}
				 							},
				 							fail(failData) {
				 								console.log("failData", failData)
				 							},
				 							complete(finishData) {
				 								uni.hideLoading();
				 								console.log("finishData", finishData)
				 							}
				 						})
				 					}
				 				})
				 			}
				 		},
				 	})
				 },
				 fail: (res) => {
				 	console.log(res)
				 }
			 })
			  
			  
		  }
			

		}
	}
</script>

<style>

</style>
