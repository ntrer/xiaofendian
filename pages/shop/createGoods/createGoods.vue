<template>
	<view style="background-color: #F3F3F3;min-height: 100vh;">
		<u-navbar title="发布商品" :background="background" title-color="#000" :isBack="true"></u-navbar>

		<view class="flex align-center justify-center" style="height: 650rpx;background-color: #F4F4F4;">

			<view v-if="imageList.length==0" class="align-center flex flex-column" @click="chooseImage()">
				<text style="font-size: 140upx;color: #D8D8D8;">+</text>
				<text style="font-size: 32upx;">上传商品图片</text>
			</view>


			<swiper v-if="imageList.length>0" style="height: 650rpx;width: 100%;" :indicator-dots="indicatorDots" :autoplay="autoplay"
			 :interval="interval" :duration="duration" @click="chooseImage()">
				<swiper-item v-for="(item,index) in imageList" :key='index'>
					<image :src="item" mode="aspectFill" style="width: 100%;height: 100%;"></image>
				</swiper-item>
			</swiper>


		</view>


		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2 font-bold" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;">基本信息</text>
		</view>
		<view class=" flex align-center pl-3 justify-between pr-3" style="font-size: 32rpx;height: 100rpx;background-color: #fff;">
			<text class="text-color" style="margin-right: 20rpx;">标题</text>
			<input type="text" v-model="goods_name" placeholder="请填写商品标题" placeholder-style="color: #9F9F9F;" style="text-align: end;" />
		</view>

		<view class="flex align-center text-color mt-3" style="height: 80rpx;background-color: #fff;">
			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2 font-bold " style="font-size: 32rpx;">商品售价</text>
		</view>

		<view class="flex align-center justify-between pl-3 pr-3 bg-white" style="height: 100rpx;" @click="toXingHaoSetting()">
			<text class="text-color">多型号</text>
			<view class="flex align-center justify-between">
				<text class="text-color">去设置</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>

		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>


		<view class=" flex align-center pl-3 justify-between pr-3" style="height: 100rpx;background-color: #fff;">
			<text class="text-color" style="margin-right: 20rpx;">商品价格</text>
			<input type="text" v-model="goods_price" placeholder="请输入金额" placeholder-style="color: #9F9F9F;" style="text-align: end;" />
		</view>

		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>

		<view v-if="showKuCun" class=" flex align-center pl-3 justify-between pr-3" style="height: 100rpx;background-color: #fff;">
			<text class="text-color" style="margin-right: 20rpx;">库存</text>
			<input type="text" v-model="goods_stock" placeholder="请输入库存" placeholder-style="color: #9F9F9F;" style="text-align: end;" />
		</view>

		<view class="ml-2 mr-2">
			<divider :height="4"></divider>
		</view>




		<view class="flex align-center text-color mt-3 justify-between pr-3" style="height: 100rpx;background-color: #fff;"
		 @click="toGoodsDetail()">
			<view class="flex align-center">
				<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				<text class="ml-2 font-bold" style="font-size: 32rpx;">商品详情</text>
			</view>
			<uni-icon :size="20" color="#000" type="arrowright" />
		</view>

		<view class="flex align-center text-color mt-3" style="height: 80rpx;background-color: #fff;">
			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2 font-bold" style="font-size: 32rpx;">其他设置</text>
		</view>

		<view class=" flex align-center pl-3 justify-between pr-3" style="height: 100rpx;background-color: #fff;">
			<text class="text-color" style="margin-right: 20rpx;">设为隐藏商品</text>
			<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="change"></u-switch>
		</view>


		<view class="flex align-center justify-center mt-4 " style="background-color:#F3F3F3;height: 200rpx;">
			<view class="main-bg-color flex align-center justify-center" style="font-size: 36rpx;color: #fff; height: 75rpx; width: 600rpx; border-radius: 10rpx;"
			 @click="confirmFabu()">
				确认发布
			</view>
		</view>

	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';

	export default {
		components: {
			divider,
			uniIcon
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				open: false,
				imageList: [],
				goods_main_picture_idList:[],
				goods_details_idList:[],
				goods_details_list:[],
				goods_specifications_model_json:[],
				goods_specifications_model_list:[],
				goods_name:"",
				goods_price:"",
				goods_stock:"",
				is_hide:-1,
				set_multi_model:-1,
				showKuCun:true,
				id:"",
			}
		},
		
		onLoad(e) {
			if(e.id){
				this.id=e.id;
				this.getData(e.id)
			}
			
		},
		
		onShow(data) {
			 console.log("进来了"+this.set_multi_model)
			if (data) {
				
				// 获取返回的分类
				if(data[0].goodsPrice==null||data[0].goodsPrice==undefined){
					this.goods_details_idList=data
					console.log(data)
					console.log(this.goods_details_idList)
				}
				else{
					
					this.goods_specifications_model_json=data
					// 隐藏库存
					if(data){
						this.showKuCun=false
						this.set_multi_model=1
					}
					if(this.goods_specifications_model_json[0].goodsPrice!=this.goods_specifications_model_json[this.goods_specifications_model_json.length-1].goodsPrice){
						this.goods_price=this.goods_specifications_model_json[0].goodsPrice+"-"+this.goods_specifications_model_json[this.goods_specifications_model_json.length-1].goodsPrice
					}
					else{
						this.goods_price=this.goods_specifications_model_json[0].goodsPrice
					}
					
				}
			}
		},
		
		methods: {
			
			// 获取详情
			getData(id){
				// 发送到服务端
				$H.get("/goods/detail/"+ id).then((res) => {
					//请求成功				
					console.log(res)
					this.goods_name=res.data.goods_name
					this.goods_price=res.data.goods_price_show
					if(res.data.set_multi_model==1){
						this.showKuCun=false
					}
					else{
						this.goods_stock=res.data.goods_stock
					}
					
					if(res.data.goods_main_picture_list.length>0){
						for (var i = 0; i < res.data.goods_main_picture_list.length; i++) {
							this.imageList.push("http://"+res.data.goods_main_picture_list[i].picture_url)
						}
						console.log(this.imageList)
					}
					
					
					this.goods_details_list=res.data.goods_details_list
					this.goods_specifications_model_list=res.data.goods_specifications_model_list
					for (var i = 0; i < this.goods_details_list.length; i++) {
						this.goods_specifications_model_json.push(this.goods_details_list[i].id)
					}
					
					for (var i = 0; i < res.data.goods_details_list.length; i++) {
						this.goods_details_idList.push(res.data.goods_details_list[i].id)
					}
					
					
					if(res.data.is_hide==-1){
						this.open=false
					}
					else{
						this.open=true
					}
					
				}).catch((e) => {
					
					//请求失败
					console.log("失败"+e)
				})
			},
			
			
			
			//是否开启隐藏
			change(status) {
				console.log(status)
				this.open = status
				if(this.open){
					this.is_hide=1
				}
				else{
					this.is_hide=-1
				}
			},

			confirmFabu() {
				
				if(this.set_multi_model==-1){
					if(this.goods_stock==""||this.goods_price==""){
						uni.showToast({
							icon:'none',
							title:"请填写完整"
						})
						console.log("空了1")
						return
					}
				}
				
				
				if(this.goods_name==""||this.goods_price==""||this.goods_details_idList.length==0){
					uni.showToast({
						icon:'none',
						title:"请填写完整"
					})
					
					
					
					return
				}
				
				console.log("空了2"+this.set_multi_model)
				
               let data={
				   goods_main_picture_id_list:JSON.stringify(this.goods_main_picture_idList)||"",
				   goods_details_id_list:JSON.stringify(this.goods_details_idList),
				   goods_specifications_model_json:this.set_multi_model==1?JSON.stringify(this.goods_specifications_model_json):"",
				   goods_name:this.goods_name,
				   goods_price:this.set_multi_model==-1?this.goods_price:"",
				   goods_stock:this.goods_stock||"",
				   is_hide:this.is_hide,
				   set_multi_model:this.set_multi_model,
				   id:this.id||""
			   }
			   
			   // 发送到服务端
			   $H.post("/goods",data).then((res) => {
			   	//请求成功
			    	uni.showToast({
			    		title:"创建成功",
						icon:'success',
						complete: () => {
							setTimeout(() => {
								uni.navigateBack({
									delta:1
								})
							}, 1000)
						}
			    	})
					
			   	
			   }).catch((e) => {
			   	
			   	//请求失败
			   	console.log("失败"+e)
			   })
			   
			   
			},

			// 型号设置
			toXingHaoSetting() {
				
				if(this.goods_specifications_model_list.length>0){
					uni.navigateTo({
						url: '../xingHaoSeting/xingHaoSeting?list='+JSON.stringify(this.goods_specifications_model_list)
					})
				}
				else{
					uni.navigateTo({
						url: '../xingHaoSeting/xingHaoSeting'
					})
				}
				
			},


			toGoodsDetail() {
				if(this.goods_details_list.length>0){
					uni.navigateTo({
						url: '../goodsDetail/goodsDetail?list='+JSON.stringify(this.goods_details_list)
					})
				}
				else{
					uni.navigateTo({
						url: '../goodsDetail/goodsDetail'
					})
				}
				
			},

			toGoodsCatagor() {
				uni.navigateTo({
					url: '../selectCatagor/selectCatagor'
				})
			},

			chooseImage() {
				if (this.imageList.length <= 9) {
					uni.chooseImage({
						count: 9, //默认9
						success: (res) => {
							console.log(res.tempFilePaths);
							this.imageList = res.tempFilePaths
							this.uploadImage(this.imageList)
						},
						fail: (err) => {
							console.log(err)
						}
					});
				} else {
					uni.showToast({
						icon: "none",
						title: "最多上传9张"
					})
				}
			},

			uploadImage(imageList) {

				let data = {
					files: imageList
				}

                 let token=$U.getStorage("token")
				//发送图片或者视频到服务器
                uni.showLoading({
                	title:"上传图片中..."
                })
				for (var i = 0; i < imageList.length; i++) {
					uni.uploadFile({
						url: $C.baseUrl + '/goods_main_picture',
						filePath: imageList[i],
						name: 'file',
						header: { // 设置请求的 header
							'authorization': token
						},
						success: (uploadFileRes) => {
							uni.hideLoading()
							console.log(JSON.parse(uploadFileRes.data).data)
							// JSON.parse(uploadFileRes)
							this.goods_main_picture_idList.push(JSON.parse(uploadFileRes.data).data)
						},
						fail(res) {
							uni.showToast({
								title: res
							})
						}
					});
				}



				// // 发送到服务端
				// $H.post("/goods_main_picture",data).then((res) => {
				// 	//请求成功
				// 	console.log(res)

				// }).catch((e) => {

				// 	//请求失败
				// 	console.log("失败"+e)
				// })
			}
		}
	}
</script>

<style>

</style>
