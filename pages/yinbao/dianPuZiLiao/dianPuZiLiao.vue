<template>
	<view>
		<u-navbar title="店铺资料"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	     <view class="flex flex-column" style="width: 100%; height: 320rpx;position: absolute;" @click="chooseBg()">
			 <image :src="bgImage" style="width: 100%; height: 320rpx;"></image>
			 <view class="flex align-center justify-center" style="height: 60rpx; background-color: #847b76; background:rgba(0,0,0,0.3);font-size: 32upx; color: #fff; position: relative;bottom: 0;" >
			  点击替换门头照
			 </view>
		 </view>
		 
		 <!-- 店铺全称 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;margin-top: 320rpx;height: 100rpx;">
			 <text >店铺全称</text>
			 <input style="text-align: end;" type="text" :value="shopName" placeholder="填写店铺名称" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		 <view class="pl-2 pr-2">
			   <divider :height="4"></divider>
		 </view>
		 
		 <!-- 所在地区 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="chooseAddress()">
		 	<text >所在地区</text>
		 	<text :style="cityData.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{cityData}}</text>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 
		 <!-- 详细地址 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >详细地址</text>
		 	 <input style="text-align: end;" type="text" value="" placeholder="输入具体店铺地址" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 
		 <!-- 店铺分类 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="toFenLei()">
		 	<text >店铺分类</text>
		 	<view class="flex align-center justify-between">
		 		<text :style="fenlei.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{fenlei}}</text>
		 		<uni-icon  :size="20" color="#000" type="arrowright" />
		 	</view>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 
		 <!-- 营业开始时间 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="selectTime(1)">
		 	<text >营业开始时间</text>
		 	<view class="flex align-center justify-between">
		 		<text :style="startTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime}}</text>
		 		<uni-icon  :size="20" color="#000" type="arrowright" />
		 	</view>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 
		 <!-- 营业结束时间 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="selectTime(2)">
		 	<text >营业结束时间</text>
		 	<view class="flex align-center justify-between">
		 		<text :style="endTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime}}</text>
		 		<uni-icon  :size="20" color="#000" type="arrowright" />
		 	</view>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 <divider :height="30"></divider>
		 
		 <!-- 联系电话 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" >
		 	<text >联系电话</text>
		 	<input style="text-align: end;" type="text" value="" placeholder="输入电话" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 
		 <!-- 加粉微信号 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" >
		 	<text >加粉微信号</text>
		 	<input style="text-align: end;" type="text" value="" placeholder="填写微信号,方便客户加你" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 
		 <!-- 加粉微信二维码 -->
		 <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 200rpx;" >
			 <view class="flex flex-column ">
				 <text class="text-color" style="font-size: 32upx;">加粉微信二维码</text>
				 <text class="mt-1" style="font-size: 30upx;color: #9F9F9F;">上传微信二维码，方便客户加你</text>
			 </view>
		 	
			<!-- 选择图片 -->
			<view v-if="wxImage==''" class="flex flex-column align-center justify-center pl-1 pr-1" style="height: 140rpx;width: 140rpx;border:#eee solid 1rpx ;" @click="chooseWxImage()">
				<text class="font-bold" style="color: #9F9F9F;font-size: 56upx;">+</text>
				<text style="font-size: 24upx;color: #9F9F9F;">添加二维码</text>
			</view>
			
			<!-- 选择的图片 -->
		 	<view v-if="wxImage!=''" class="flex flex-column align-center justify-center pl-1 pr-1" style="height: 140rpx;width: 140rpx;" @click="chooseWxImage()">
		 		<image :src="wxImage" style="height: 140rpx;width: 140rpx;"></image>
		 	</view>
		 </view>
		 <view class="pl-2 pr-2">
		 	<divider :height="4"></divider>
		 </view>
		 
		  <divider :height="30"></divider>
		 
		 <view class="flex align-center justify-center" style="height: 80rpx; background-color: #FF7200;">
			 <text style="font-size: 32upx;color: #fff;">保存店铺信息</text>
		 </view>
		 
		 
		 <!-- 省市区选择器 -->
		 <u-picker mode="region" v-model="showCity" :params="params" @confirm="chooseCity()"></u-picker>
		 
		 <!-- 时间选择器 -->
		 <u-picker mode="time" v-model="showTime" :params="params" @confirm="chooseTime()"></u-picker>
		 
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
				 params :{
					year: false,
					month: false,
					day: false,
					hour: true,
					minute: true,
					second: false,
					province: true,
					city: true,
					area: true,
					timestamp: false, // 1.3.7版本提供
				},
				index:-1,
				shopName:"",
				wxImage:"",
				showCity:false,
				showTime:false,
				cityData:"选择省/市/区",
				fenlei:"选择分类",
				startTime:"选择开始时间",
				endTime:"选择结束时间",
				bgImage:"../../../static/common/dianpu_bg.jpg",
			}
		},
		
		onShow(data) {
			if (data) {
			// 获取返回的分类
			 this.fenlei=data.name
			}
		},
		
		
		methods: {
			
			// 选择省市区
			chooseAddress(){
				this.showCity=true
			},
			chooseCity(res){
				
				this.cityData=res.province.label+" "+res.city.label+" "+res.area.label
			},
			
			
			// 选择营业时间
			selectTime(num){
				this.showTime=true
				if(num==1){
					this.index=1
				}
				else{
					this.index=2
				}
			},
			chooseTime(res){
				console.log(res)
				if(this.index==1){
					this.startTime =res.hour+"时"+res.minute+"分";
				}
				else{
					this.endTime = res.hour+"时"+res.minute+"分";
				}
			},
			
			// 选择头图
			chooseBg(){
				uni.chooseImage({
				    count: 1, //默认9
				   success: (res) => {
				   	this.bgImage=res.tempFilePaths
				   	console.log(JSON.stringify(res.tempFilePaths));
				   }
				});
			},
			
			// 选择微信二维码
			chooseWxImage(){
				uni.chooseImage({
				    count: 1, //默认9
				   success: (res) => {
				   	this.wxImage=res.tempFilePaths
				   	console.log(JSON.stringify(res.tempFilePaths));
				   }
				});
			},
			
			// 选择分类
			toFenLei(){
				uni.navigateTo({
					url:'../dianPuFenLei/dianPuFenLei'
				})
			},
			
		}
	}
</script>

<style>

</style>
