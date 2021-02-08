<template>
	<view>
		<u-navbar title="推荐有礼活动" :background="background" title-color="#000" :isBack="true"></u-navbar>
		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">基础设置</text>
		</view>

		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
			<text>活动标题</text>
			<input style="text-align: end;" type="text" placeholder="不超过10个字" placeholder-style="color: #9F9F9F;text-align: end;" />
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
				<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">领券必填</text>
				<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">打开后，需获取推荐人和被推荐人手机号码</text>
			</view>

			<view class="flex align-center justify-between">
				<text class="mr-2" style="font-family: PingFangSC-Regular, PingFang SC;color: #C3C3C3;font-size: 28upx;">手机号码</text>
				<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="change2"></u-switch>
			</view>

		</view>

		<divider :height="20"></divider>



		<!-- 推荐人奖品 -->

		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">推荐人礼品</text>
		</view>

		<view class="flex align-center justify-between text-color pl-2 " style="font-size: 32upx;height: 100rpx;">
			<text>券类型</text>
			<u-radio-group v-model="value1" width="160rpx" active-color="#FF7200" size="30">
				<u-radio @change="radioChange1" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled"
				 style="align-items: flex-end;">
					{{item.name}}
				</u-radio>
			</u-radio-group>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 折扣 -->
		<view v-if="value1=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>折扣</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view v-if="value1=='折扣券'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 奖品名称 -->
		<view v-if="value1=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>奖品名称</text>
			<input style="text-align: end;" type="text" placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view v-if="value1=='兑换券'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 优惠金额 -->
		<view v-if="value1=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>优惠金额</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<divider v-if="value1=='代金券'" :height="4"></divider>

		<!-- 使用门槛 -->
		<view v-if="value1=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<view class="flex flex-column ">
				<text>使用门槛</text>
				<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
			</view>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<divider v-if="value1=='代金券'" :height="4"></divider>


		<!-- 奖品数量 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>券数量</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="请合理设置" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 券有效期 -->
		<view class="flex align-center justify-between text-color pl-2 " style="font-size: 32upx;height: 100rpx;">
			<text>券有效期</text>
			<u-radio-group v-model="value2" width="180rpx" active-color="#FF7200" size="30">
				<u-radio @change="radioChange2" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
					{{item.name}}
				</u-radio>
			</u-radio-group>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 开始时间 -->
		<view v-if="value2=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
		 @click="selectTime2(1)">
			<text>开始时间</text>
			<view class="flex align-center justify-between">
				<text :style="startTime2.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime2}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view v-if="value2=='指定日期'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>


		<!-- 结束时间 -->
		<view v-if="value2=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
		 @click="selectTime2(2)">
			<text>结束时间</text>
			<view class="flex align-center justify-between">
				<text :style="endTime2.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime2}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view v-if="value2=='指定日期'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 有效天数 -->
		<view v-if="value2=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>领取后有效天数</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view v-if="value2=='有效天数'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>


		<!-- 适用范围 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>适用范围</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>

		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">

			<view class="flex flex-column">
				<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">礼品总数量</text>
				<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">填写推荐人发放的总礼品数</text>
			</view>

			<input style="text-align: end;" type="text" placeholder="请输入礼品发放数量" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>

		<view class=" pl-2 pr-4 flex align-center" style="height: 80rpx;background-color: #f5f5f5;color: #FF7200;font-size: 20upx;">
			<text>*被推荐人到店核销券后自动发放礼品券给推荐人。礼品总数量发放完后，不再给推荐人和被推荐人发放礼品。</text>
		</view>


		<!-- 被推荐人礼品 -->
		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">推荐人礼品</text>
		</view>

		<view class="flex align-center justify-between text-color pl-2 " style="font-size: 32upx;height: 100rpx;">
			<text>券类型</text>
			<u-radio-group v-model="value3" width="160rpx" active-color="#FF7200" size="30">
				<u-radio @change="radioChange1" v-for="(item, index) in list3" :key="index" :name="item.name" :disabled="item.disabled"
				 style="align-items: flex-end;">
					{{item.name}}
				</u-radio>
			</u-radio-group>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 折扣 -->
		<view v-if="value3=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>折扣</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view v-if="value3=='折扣券'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 奖品名称 -->
		<view v-if="value3=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>奖品名称</text>
			<input style="text-align: end;" type="text" placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view v-if="value3=='兑换券'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 优惠金额 -->
		<view v-if="value3=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>优惠金额</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<divider v-if="value3=='代金券'" :height="4"></divider>

		<!-- 使用门槛 -->
		<view v-if="value3=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<view class="flex flex-column ">
				<text>使用门槛</text>
				<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
			</view>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<divider v-if="value3=='代金券'" :height="4"></divider>


		<!-- 奖品数量 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>券数量</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="请合理设置" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 券有效期 -->
		<view class="flex align-center justify-between text-color pl-2 " style="font-size: 32upx;height: 100rpx;">
			<text>券有效期</text>
			<u-radio-group v-model="value4" width="180rpx" active-color="#FF7200" size="30">
				<u-radio @change="radioChange2" v-for="(item, index) in list4" :key="index" :name="item.name" :disabled="item.disabled">
					{{item.name}}
				</u-radio>
			</u-radio-group>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 开始时间 -->
		<view v-if="value4=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
		 @click="selectTime3(1)">
			<text>开始时间</text>
			<view class="flex align-center justify-between">
				<text :style="startTime3.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime3}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view v-if="value4=='指定日期'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>


		<!-- 结束时间 -->
		<view v-if="value4=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
		 @click="selectTime3(2)">
			<text>结束时间</text>
			<view class="flex align-center justify-between">
				<text :style="endTime3.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime3}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view v-if="value4=='指定日期'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 有效天数 -->
		<view v-if="value4=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>领取后有效天数</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>
		<view v-if="value4=='有效天数'" class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>


		<!-- 适用范围 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>适用范围</text>
			<input style="text-align: end;" type="text" :value="shopName" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;" />
		</view>

        <divider :height="20"></divider>


		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">

			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
			<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">活动描述</text>
		</view>

		<view class="ml-2 mr-2 pl-1 " style="height: 280rpx;border-radius: 2px;border: 1px solid #C3C3C3;">
			<view class="flex  justify-between flex-column pt-1" style="height: 100%;">
				<textarea placeholder="请输入活动描述，不超过1000个字…" placeholder-style="color:#C3C3C3" style="width: 95%;height: 270rpx;"
				 class="p-1" v-model="activityDetail" :maxlength="-1" />

				<view class=" flex flex-column justify-between  pr-2 align-end">
					           			<view class=""></view>
					           			<view class="" style="color: #8A8A8A;font-size: 24upx;margin-bottom: 10rpx;">
					           				<text>{{activityDetail.length}}/1000</text>
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
					 		   		<textarea  placeholder="请输入活动规则，不超过2000个字…" placeholder-style="color:#C3C3C3"  style="width: 95%;height: 490rpx;" class="p-1"  v-model="activityRule" :maxlength="-1" />
					 		   		
					 		   		<view class=" flex flex-column justify-between  pr-2 align-end">
					 		   			<view class=""></view>
					 		   			<view class="" style="color: #8A8A8A;font-size: 24upx;margin-bottom: 10rpx;">
					 		   				<text>{{activityRule.length}}/2000</text>
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
					 
					 			<u-switch v-model="open4" active-color="#FF7200" inactive-color="#D8D8D8" @change="change4"></u-switch>
					 
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
		<u-picker mode="time" v-model="showTime2" :params="params" @confirm="chooseTime2()"></u-picker>
		<u-picker mode="time" v-model="showTime3" :params="params" @confirm="chooseTime3()"></u-picker>
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
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
					second: false,
					province: true,
					city: true,
					area: true,
					timestamp: false, // 1.3.7版本提供
				},
				open: false,
				open2: false,
				open3: false,
				index: -1,
				index2: -1,
				index3: -1,
				musicName:"无",
				startTime: "选择开始时间",
				endTime: "选择结束时间",
				startTime2: "选择开始时间",
				endTime2: "选择结束时间",
				startTime3: "选择开始时间",
				endTime3: "选择结束时间",
				showTime: false,
				showTime2: false,
				showTime3: false,
				value1: '代金券',
				value2: '指定日期',
				value3: '代金券',
				value4: '指定日期',
				activityDetail:"",
				activityRule:"",
				imageList:[],
				imageUrls:"",
				list: [{
						name: '代金券',
						disabled: false
					},
					{
						name: '折扣券',
						disabled: false
					},
					{
						name: '兑换券',
						disabled: false
					},
				],
				list2: [{
						name: '指定日期',
						disabled: false
					},
					{
						name: '有效天数',
						disabled: false
					},
				],
				list3: [{
						name: '代金券',
						disabled: false
					},
					{
						name: '折扣券',
						disabled: false
					},
					{
						name: '兑换券',
						disabled: false
					},
				],
				list4: [{
						name: '指定日期',
						disabled: false
					},
					{
						name: '有效天数',
						disabled: false
					},
				],
			}
		},
		methods: {
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
					this.startTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				} else {
					this.endTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				}
			},
			
			// 选择营业时间
			selectTime2(num) {
				this.showTime2 = true
				if (num == 1) {
					this.index2 = 1
				} else {
					this.index2 = 2
				}
			},
			chooseTime2(res) {
				console.log(res)
				if (this.index2 == 1) {
					this.startTime2 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				} else {
					this.endTime2 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				}
			},
			
			// 选择营业时间
			selectTime3(num) {
				this.showTime3 = true
				if (num == 1) {
					this.index3 = 1
				} else {
					this.index3 = 2
				}
			},
			chooseTime3(res) {
				console.log(res)
				if (this.index3 == 1) {
					this.startTime3 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				} else {
					this.endTime3 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
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
			}
		}
	}
</script>

<style>

</style>
