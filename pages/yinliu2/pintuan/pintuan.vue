<template>
	<view>
		<u-navbar title="拼团活动" :background="background" title-color="#000" :isBack="true"></u-navbar>

		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">基础设置</text>
		</view>

		<view class="flex  justify-center" style="height: 380rpx;background-color: #F4F4F4;" @click="chooseBg()">

			<view class="align-center flex flex-column mt-2">
				<text style="font-size: 140upx;color: #D8D8D8;">+</text>
				<text style="font-size: 30upx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;margin-top: -20rpx;">上传头图</text>
				<text class="mt-2" style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;
color: #8A8A8A;font-size: 28upx;">用于活动封面，建议尺寸750×380（必填项）</text>
			</view>

		</view>

		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
			<text>活动标题</text>
			<input style="text-align: end;" type="text"  v-model="uploadData.title" placeholder="不超过50字" placeholder-style="color: #9F9F9F;text-align: end;" />
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
				<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">拼团必填</text>
				<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">打开后，拼团需获取顾客手机号码</text>
			</view>

			<view class="flex align-center justify-between">
				<text class="mr-2" style="font-family: PingFangSC-Regular, PingFang SC;color: #C3C3C3;font-size: 28upx;">手机号码</text>
				<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="needPhone"></u-switch>
			</view>

		</view>
		<divider :height="20"></divider>



		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
color: #1D1200;font-weight: 600;">拼团设置</text>
		</view>

		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
			<text>商品库存</text>
			<input style="text-align: end;" type="text" v-model="uploadData.good_stock" placeholder="请合理设置勿超卖" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
			<text>原价</text>
			<input style="text-align: end;" type="text" v-model="uploadData.good_price" placeholder="请输入商品原价" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
			<text>拼团价</text>
			<input style="text-align: end;" type="text" v-model="uploadData.good_pt_price" placeholder="请输入商品拼团价" placeholder-style="color: #9F9F9F;text-align: end;" />
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
			<input style="text-align: end;" type="text" v-model="uploadData.pt_advance_price" placeholder="请输入商品拼团价" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view v-if="!isquane" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
			<text>成团人数</text>
			<input style="text-align: end;" type="text" v-model="uploadData.pt_user_count" placeholder="请输入成团人数" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

	

		<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">

			<view class="flex flex-column">
				<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">是否收费</text>
				<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;width: 500rpx;">打开后，用户领取券时需要支付购买金额，关闭则不需要</text>
			</view>

			<u-switch v-model="open3" active-color="#FF7200" inactive-color="#D8D8D8" @change="isShouFei"></u-switch>

		</view>
        <view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

        <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
        	<text>佣金</text>
			<view class="flex align-center">
				<input style="text-align: end;" type="text" v-model="uploadData.fee_money" placeholder="请输入佣金" placeholder-style="color: #9F9F9F;text-align: end;" />
				<text>元</text>
			</view>
        	
        </view>
        <view class="pl-2 pr-2">
        	<divider :height="4"></divider>
        </view>

        <view v-if="isshoufei" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
        	<text>购买金额</text>
        	<view class="flex align-center">
        		<input style="text-align: end;" type="text" v-model="uploadData.buy_money" placeholder="请输入购买金额" placeholder-style="color: #9F9F9F;text-align: end;" />
        		<text>元</text>
        	</view>
        	
        </view>
        <view v-if="isshoufei" class="pl-2 pr-2">
        	<divider :height="4"></divider>
        </view>



		<divider :height="30"></divider>


		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">活动描述</text>
		</view>

		<view class="ml-2 mr-2 pl-1 " style="height: 280rpx;border-radius: 2px;border: 1px solid #C3C3C3;">
			<view class="flex  justify-between flex-column pt-1" style="height: 100%;">
				<textarea placeholder="请输入活动描述，不超过1000个字…" v-model="uploadData.description" placeholder-style="color:#C3C3C3" style="width: 95%;height: 270rpx;" class="p-1"
				 :maxlength="-1" />

				<view class=" flex flex-column justify-between  pr-2 align-end">
          			<view class=""></view>
          			<view class="" style="color: #8A8A8A;font-size: 24upx;margin-bottom: 10rpx;">
          				<text>{{uploadData.description.length}}/1000</text>
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

			<u-switch v-model="open4" active-color="#FF7200" inactive-color="#D8D8D8" @change="areaFangShua"></u-switch>

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
				open4:false,
				activityDetail:"",
				activityRule:"",
				imageList:[],
				imageUrls:"",
				isquane:false,
				isshoufei:false,
				uploadData:{
					   
					    bgm: "", //long | 背景音乐 | 必传    
						open_fee:0 ,//是否收费(0:否;1:是)
						fee_money:"" ,//'佣金',
						uy_money:"",//'购买金额',
						rule:"",
						open_area_limit:"",
					   
					    description: "", //string | 活动描述 | 必传    
					    end_time: "", //datetime | 结束时间 | 必传    
					   
					   
					    good_price: "", //long | 商品原价 | 必传    
					    good_pt_price: "", //long | 商品拼团价 | 必传    
					    good_stock: "", //int | 商品库存 | 必传    
					    head_pic: "", //string | 头图 | 必传    
					   
					    open_advance_pay: 0, //boolean | 是否预付款(0:否;1:是) | 必传    
					    open_auto_pt: 0, //boolean | 是否自动成团(0:否;1:是) | 必传    
					    open_mobile: 0, //boolean | 是否需要填手机号(0:否;1:是) | 必传    
					    pic: "", //string | 图片数据 | 必传    
					    pt_advance_price: "", //long | 平团预付价 | 必传    
					    pt_time: "", //datetime | 成团时间 | 必传    
					    pt_user_count: "", //int | 拼团人数 | 必传    
					    
					    start_time: "", //datetime | 开始时间 | 必传    
					    title: "", //string | 活动标题 | 必传    
					   
				}
			}
		},
		
		
		
		methods: {
			
			// 活动头图
			chooseBg() {
				uni.chooseImage({
					count: 1, //默认9
					success: (res) => {
						this.bgImage = res.tempFilePaths[0]
						this.upLoadImage(this.bgImage,"topImg")
						
					}
				});
			},
			
			
			upLoadImage(data,type){
				
				uni.showLoading({
					title:'上传图片中...',
				})
				
				uni.uploadFile({
					url:$C.baseUrl + '/activity_pt/tob/detail',
					filePath:data,
					name:"file",
					header:{authorization:this.token},
					success: (res) => {
						uni.hideLoading()
						console.log(res)
						
					},
					fail: (err) => {
						uni.hideLoading()
						console.log(err);
						
					}
				})
				
			
			},
			
			
			// 是否需要手机号
			needPhone(e){
				if(e){
					this.uploadData.open_mobile=1
				}
				else{
					this.uploadData.open_mobile=0
				}
			},
			
			// 是否全额
			isQuane(e){
				this.isquane=e
				if(e){
					this.uploadData.open_advance_pay=1
					this.uploadData.pt_advance_price=""
				}
				else{
					this.uploadData.open_advance_pay=0
				}
			},
			
			// 地区放刷
			areaFangShua(e){
				if(e){
					this.uploadData.open_area_limit=1
				}
				else{
					this.uploadData.open_area_limit=0
				}
			},
			
			// 是否收费
			isShouFei(e){
				this.isshoufei=e
				if(e){
					this.uploadData.open_fee=1
				}
				else{
					this.uploadData.open_fee=0
				}
			},
			
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
					this.startTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.uploadData.start_time=this.startTime
				} else {
					this.endTime = res.year + "-" + res.month + "-" + res.day + " "  + res.hour + ":" + res.minute+":"+res.second;
					this.uploadData.end_time=this.endTime
				}
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
				// 发送到服务端
				$H.post("/activity_pt",this.uploadData).then((res) => {
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
