<template>
	<view>
		<u-navbar title="秒杀活动" :background="background" title-color="#000" :isBack="true"></u-navbar>
		<view class="flex align-center text-color" style="height:80rpx;background-color: #fff;">
		
					<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
					<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">基础设置</text>
				</view>
		
				<view class="flex  justify-center" style="height: 380rpx;background-color: #F4F4F4;">
		
					<view class="align-center flex flex-column mt-2">
						<text style="font-size: 140upx;color: #D8D8D8;">+</text>
						<text style="font-size: 30upx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;margin-top: -20rpx;">上传头图</text>
						<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;
		color: #8A8A8A;font-size: 28upx;">用于活动封面，建议尺寸750×380（必填项）</text>
					</view>
		
				</view>
		
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>活动标题</text>
					<input style="text-align: end;" type="text" v-model="uploadData.activity_title" placeholder="不超过50字" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<!-- 开始时间 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;"
				 @click="selectTime(1)">
					<text>开始时间</text>
					<view class="flex align-center justify-between">
						<text :style="startTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime}}</text>
					</view>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<!-- 结束时间 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;"
				 @click="selectTime(2)">
					<text>结束时间</text>
					<view class="flex align-center justify-between">
						<text :style="endTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime}}</text>
					</view>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">
		
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">秒杀必填</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">打开后，秒杀需获取顾客手机号码</text>
					</view>
		
					<view class="flex align-center justify-between">
						<text class="mr-2" style="font-family: PingFangSC-Regular, PingFang SC;color: #C3C3C3;font-size: 28upx;">手机号码</text>
						<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="needPhone"></u-switch>
					</view>
		
				</view>
				<divider :height="20"></divider>
		
		
		
				<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
		
					<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
					<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 600;
		color: #1D1200;">秒杀设置</text>
				</view>
		
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>商品库存</text>
					<input style="text-align: end;" type="text" v-model="uploadData.stock_count" placeholder="请合理设置勿超卖" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>原价</text>
					<input style="text-align: end;" type="text" v-model="uploadData.original_price" placeholder="请输入商品原价" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>秒杀价</text>
					<input style="text-align: end;" type="text" v-model="uploadData.flash_sale_price" placeholder="请输入秒杀金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>单人限秒次数</text>
					<input style="text-align: end;" type="text" v-model="uploadData.single_limit" placeholder="不填写和0为不限制" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
		
				<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">
		
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">全额付款</text>
					</view>
		
					<u-switch v-model="open2" active-color="#FF7200" inactive-color="#D8D8D8" @change="isQuane"></u-switch>
		
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<view v-if="!isquane" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>预付款</text>
					<input style="text-align: end;" type="text" v-model="uploadData.advance_payment_proportion" placeholder="建议原价的10以上%" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
		
				<divider :height="30"></divider>
		
		
				<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
		
					<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
					<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">活动描述</text>
				</view>
		
				<view class="ml-2 mr-2 pl-1 " style="height: 280rpx;border-radius: 2px;border: 1px solid #C3C3C3;">
					<view class="flex  justify-between flex-column pt-1" style="height: 100%;">
						<textarea placeholder="请输入活动描述，不超过1000个字…" v-model="uploadData.activity_desc" placeholder-style="color:#C3C3C3" style="width: 95%;height: 270rpx;" class="p-1"
						  :maxlength="-1" />
		
						<view class=" flex flex-column justify-between  pr-2 align-end">
		          			<view class=""></view>
		          			<view class="" style="color: #8A8A8A;font-size: 24upx;margin-bottom: 10rpx;">
		          				<text>{{uploadData.activity_desc.length}}/1000</text>
		          			</view>
		          		</view>
		          		
		          	</view>
		          
		          	
		          </view>
				  
		  
		          <view class="pl-2 pr-2 flex align-center justify-between" style="font-family: PingFangSC-Regular, PingFang SC;color: #1D1200;height: 100rpx;">
					  <text>活动图片（活动详细介绍图片，最多上传9张）</text>
					  <view class="flex align-center justify-center " style="background-color: #FF7200;width: 120rpx;height: 50rpx;border-radius: 30rpx;" @click="chooseImage()">
					  	<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">选择</text>
					  </view>
				  </view>
				  
				  <view class="flex align-center ml-2  mr-2" style="flex-wrap: wrap;">
					  <view class="flex align-center  justify-center mt-1" style="height: 200rpx;width: 33.3%;"
					  v-for="(item,index) in imageList" :key="index" >
					  			<view class="align-center flex flex-column " @click="previewImage(item.src)">
					  				<image :src="item.src" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
					  			</view>
					  
					  </view>
				  </view>
				
				  <view class="" style="height: 20rpx;"></view>
		
		
		          <divider :height="30"></divider>
				  
				  <view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
				  
				  	<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				  	<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">活动规则</text>
				  </view>
				  
				   <view class="ml-2 mr-2 pl-1 " style="height: 500rpx;border-radius: 2px;border: 1px solid #C3C3C3;">
				   	<view class="flex  justify-between flex-column pt-1" style="height: 100%;">
				   		<textarea  placeholder="请输入活动规则，不超过2000个字…" v-model="uploadData.rule" placeholder-style="color:#C3C3C3"  style="width: 95%;height: 490rpx;" class="p-1"   :maxlength="-1" />
				   		
				   		<view class=" flex flex-column justify-between  pr-2 align-end">
				   			<view class=""></view>
				   			<view class="" style="color: #8A8A8A;font-size: 24upx;margin-bottom: 10rpx;">
				   				<text>{{uploadData.rule.length}}/2000</text>
				   			</view>
				   		</view>
				   		
				   	</view>
				   
				   	
				   </view>
				   <view class="" style="height: 20rpx;"></view>
				  
		           <divider :height="30"></divider>
				   
				   <view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
				   
				   	<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				   	<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">其他设置</text>
				   </view>
		<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">
		
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">智能防刷</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;width: 500rpx;">打开后，仅限距离店铺15公里内的客户可参与，请谨慎使用</text>
					</view>
		
					<u-switch v-model="open4" active-color="#FF7200" inactive-color="#D8D8D8" @change="isFangShua"></u-switch>
		
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="selectTime(1)">
					<text >背景音乐</text>
					<view class="flex align-center justify-between">
						<text>{{musicName}}</text>
						<uni-icon  :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				
				<view class="flex align-center justify-center flex-column" style="height: 200rpx;background-color: #F5F5F5;">
					<view class="flex align-center justify-center">
						<text style="font-size: 24rpx;font-weight: 400;color: #8A8A8A;">创建活动即表示你已同意</text>
						<text style="font-size: 24rpx;font-weight: 400;color: #1D1200;">《活动发布协议》</text>
					</view>
					
					<view class="main-bg-color flex align-center justify-center mt-3" style="font-size: 36rpx;color: #fff; height: 75rpx; width: 86%; border-radius: 8rpx;" @click="confirmFabu()">
						 创建活动 		 
					</view>
					
				</view>
		
				<!-- 时间选择器 -->
				<u-picker mode="time" v-model="showTime" :params="params" @confirm="chooseTime()"></u-picker>
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	export default {
		components: {
			divider
		},
		data() {
			return {
			background: {
				backgroundColor: '#fff',
			},	
			params: {
				year: true,
				month: true,
				day: true,
				hour: true,
				minute: true,
				second: true,
				province: true,
				city: true,
				area: true,
				timestamp: false, // 1.3.7版本提供
			},
			index: -1,
			musicName:"无",
			startTime: "选择开始时间",
			endTime: "选择结束时间",
			showTime: false,
			open: false,
			open2: false,
			open3: false,
			open4: false,
			isquane:false,
			activityDetail:"",
			activityRule:"",
			imageList:[],
			imageUrls:"",
			shopId:"",
			uploadData:{
				    activity_desc: "", //string | 活动描述 | 必传    
				    activity_end_time: "", //datetime | 活动结束时间 | 必传    
				    activity_start_time: "", //datetime | 活动开始时间 | 必传    
				    activity_title: "", //string | 活动标题 | 必传    
				    advance_payment_proportion: "", //int | 预付款比例 | 必传    
				    background_music_url: "", //string | 背景音乐 | 必传    
				    click_farming_flag: 0, //boolean | 是否防止刷单 | 必传    
				    cover_image: "", //string | 封面图片 | 必传    
				    falsh_sale_images: "", //string | 秒杀图片 | 必传    
				    flash_sale_price: "", //long | 秒杀价 | 必传    
				    full_payment_flag: 0, //boolean | 是否全款购买 | 必传    
				    goods_count: "", //int | 商品数量 | 必传    
				    open_fee:0,
					rule:"",
					shop_id:"",
					fee_money:"",
					buy_money:"",
				    mobile_flag: 0, //boolean | 手机号是否必填 | 必传    
				    original_price: "", //long | 原价 | 必传    
				    single_limit: "", //int | 单人限秒次数 | 必传    
				    stock_count: "" //int | 商品库存 | 必传
			}
			}
		},
		
		onLoad() {
			 this.shopId=$U.getStorage("LogInfo").merchant_id
			 this.uploadData.shop_id=this.shopId
		},
		
		methods: {
			// 选择营业时间
			selectTime(num) {
				this.showTime = true
				if (num == 1) {
					this.index = 1
				} else {
					this.index = 2
				}
			},
			chooseTime(res) {
				console.log(res)
				if (this.index == 1) {
					this.startTime = res.year + "-" + res.month + "-" + res.day + " "+ res.hour + ":" + res.minute+":"+res.second;
					this.uploadData.activity_start_time=this.startTime
				} else {
					this.endTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.uploadData.activity_end_time=this.endTime
				}
			},
			
			
			needPhone(e){
				if(e){
					this.uploadData.mobile_flag=1
				}
				else{
					this.uploadData.mobile_flag=0
				}
			},
			
			isQuane(e){
				this.isquane=e;
				if(e){
					this.uploadData.full_payment_flag=1
				}
				else{
					this.uploadData.full_payment_flag=0
				}
			},
			
			isFangShua(e){
				if(e){
					this.uploadData.click_farming_flag=1
				}
				else{
					this.uploadData.click_farming_flag=0
				}
			},
			
			change(status) {
				console.log(status)
				this.open = status
			},
			
			change2(status) {
				console.log(status)
				this.open2 = status
			},
			
			change3(status) {
				console.log(status)
				this.open3 = status
			},
			
			change4(status) {
				console.log(status)
				this.open4 = status
			},
			
			chooseImage(){
				if(this.imageList.length<=9){
					uni.chooseImage({
					   count: 9, //默认9
					   success: (res) => {
					   	console.log(res.tempFilePaths);
						this.imageUrls=res.tempFilePaths
						for (var i = 0; i < res.tempFilePaths.length; i++) {
							let data={
								type:"pic",
								src:res.tempFilePaths[i],
							}
							this.imageList.push(data)
						}
						
					   },
					   fail: (err) => {
					   	console.log(err)
					   }
					});
				}
				else{
					uni.showToast({
						icon:"none",
						title:"最多上传9张"
					})
				}
			
			},
			
			previewImage(url){
				uni.previewImage({
					current:url,
					urls:this.imageUrls,
					indicator:"default",
					success: (res) => {
						
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			
			confirmFabu(){
				console.log(this.uploadData)
				// let data=this.uploadData
				//发送到服务端
				$H.post("/activity_flash_sale",this.uploadData,{
					header:{
						shop_id:this.shopId
					}
				}).then((res) => {
					//请求成功
				  console.log(res)
				
				}).catch((e) => {
				
					//请求失败
					console.log("失败" + e)
				})
				
			}
		}
	}
</script>

<style>

</style>
