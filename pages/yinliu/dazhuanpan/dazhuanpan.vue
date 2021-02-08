<template>
	<view>
		<u-navbar title="大转盘抽奖活动" :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
		
					<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
					<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">基础设置</text>
				</view>
		
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>活动标题</text>
					<input style="text-align: end;" type="text" placeholder="不超过50字" placeholder-style="color: #9F9F9F;text-align: end;" />
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
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">抽奖必填</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">打开后，抽奖需获取顾客手机号码</text>
					</view>
		
					<view class="flex align-center justify-between">
						<text class="mr-2" style="font-family: PingFangSC-Regular, PingFang SC;color: #C3C3C3;font-size: 28upx;">手机号码</text>
						<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="change"></u-switch>
					</view>
		
				</view>
				<divider :height="20"></divider>
				
				
				<!-- 抽奖设置 -->
				<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
				
							<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
							<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
				color: #1D1200;font-weight: 600;">抽奖设置</text>
						</view>
				
					<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
							
						<view class="flex flex-column">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每天抽奖</text>
							<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">单人每天可抽奖次数</text>
						</view>
							
						<input style="text-align: end;" type="text"  placeholder="请输入次数" placeholder-style="color: #9F9F9F;text-align: end;"/>
						</view>
							
					<view class="pl-2 pr-2">
						<divider :height="4"></divider>
					</view>
					
					<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
							
						<view class="flex flex-column">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">最多中奖</text>
							<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">单人最多可抽奖次数</text>
						</view>
							
						<input style="text-align: end;" type="text"  placeholder="请输入次数" placeholder-style="color: #9F9F9F;text-align: end;"/>
						</view>
							
					<view class="pl-2 pr-2">
						<divider :height="4"></divider>
					</view>
					
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">中奖概率</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">每次抽奖会中奖的概率，中奖率为5%，则输入5</text>
					</view>
					
					<view class="flex align-center">
						<input style="text-align: end;" type="text"  placeholder="请输入概率" placeholder-style="color: #9F9F9F;text-align: end;"/>
						<text>%</text>
					</view>	
					
					</view>
						
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
					
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">做任务奖次数</text>
						<text  class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;width: 500rpx;">开启后，会提醒顾客联系你领取任务（如发朋友圈，加好友等），增加额外抽奖次数</text>
					</view>
						
					<view class="flex align-center justify-between">
						
						<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="change"></u-switch>
					</view>
						
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
						
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">增加次数</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">输入几次，为客户增加几次次数</text>
					</view>
						
					<input style="text-align: end;" type="text"  placeholder="请输入次数" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
						
					<divider :height="20"></divider>	
						
			
			<!-- 奖品设置 一等奖-->
			<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
			
						<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
						<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
			color: #1D1200;font-weight: 600;">奖品设置</text>
					</view>			
				
			<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
				<text>奖品名称</text>
				<input style="text-align: end;" type="text" value="一等奖" placeholder="输入奖品名称" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
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
			
			<!-- 奖品图片 -->
			<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
				<text>奖品图片</text>
				<text>不上传则显示默认图片</text>
			</view>
				
			<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
				<view class=""></view>
				<view v-if="imageUrl1==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage(1)">
					<view class="flex flex-column align-center">
						<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
						<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
					</view>
					
				</view>
				
				<view v-if="imageUrl1" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(1)">
					<image :src="imageUrl1" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
					
				</view>
				
				
			</view>	
			
			
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 奖品数量 -->
			<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
				<text>奖品数量</text>
				<input style="text-align: end;" type="text" :value="shopName" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
					
				<view class="flex flex-column">
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
					<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
				</view>
					
				<input style="text-align: end;" type="text"  placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
				</view>
					
			
			
			<!-- 奖品设置 二等奖-->
			
			<view class="" v-if="awardNum>=2">
				
				<divider :height="20"></divider>
				
				<view class="flex align-center justify-between text-color" style="height: 80rpx;background-color: #fff;">
				            <view class="flex align-center">
								<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
											<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
								color: #1D1200;font-weight: 600;">奖品设置</text>
							</view>
							
							<view class="rounded-circle flex align-center justify-center mr-2" style="background-color: #FF7200;" @click="removeItem(2)">
								<text class="text-center font-bold" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">一</text>
							</view>
				            
				
						</view>			
					
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text" value="二等奖" placeholder="输入奖品名称" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>	
				
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 32upx;height: 100rpx;">
					<text>券类型</text>
					<u-radio-group v-model="value3" width="160rpx" active-color="#FF7200" size="30">
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
						<u-radio @change="radioChange2" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 开始时间 -->
				<view v-if="value4=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
				 @click="selectTime2(1)">
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
				 @click="selectTime2(2)">
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
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品图片 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品图片</text>
					<text>不上传则显示默认图片</text>
				</view>
					
				<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
					<view class=""></view>
					<view v-if="imageUrl2==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage2(1)">
						<view class="flex flex-column align-center">
							<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
							<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
						</view>
						
					</view>
					
					<view v-if="imageUrl2" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(2)">
						<image :src="imageUrl2" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
						
					</view>
					
					
				</view>	
				
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品数量 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品数量</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
					</view>
						
					<input style="text-align: end;" type="text"  placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
			</view>
			
			
			
			
			<view class="" v-if="awardNum>=3">
				<divider :height="20"></divider>
				<!-- 奖品设置 三等奖-->
				<view class="flex align-center justify-between text-color" style="height: 80rpx;background-color: #fff;">
				            <view class="flex align-center">
								<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
											<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
								color: #1D1200;font-weight: 600;">奖品设置</text>
							</view>
							
							<view class="rounded-circle flex align-center justify-center mr-2" style="background-color: #FF7200;" @click="removeItem(3)">
								<text class="text-center font-bold" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">一</text>
							</view>
				            
				
						</view>			
					
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text" value="三等奖" placeholder="输入奖品名称" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>	
				
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 32upx;height: 100rpx;">
					<text>券类型</text>
					<u-radio-group v-model="value5" width="160rpx" active-color="#FF7200" size="30">
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
				<view v-if="value5=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>折扣</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value5=='折扣券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品名称 -->
				<view v-if="value5=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text" placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value5=='兑换券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 优惠金额 -->
				<view v-if="value5=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>优惠金额</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value5=='代金券'" :height="4"></divider>
				
				<!-- 使用门槛 -->
				<view v-if="value5=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<view class="flex flex-column ">
						<text>使用门槛</text>
						<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
					</view>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value5=='代金券'" :height="4"></divider>
				
				
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
					<u-radio-group v-model="value6" width="180rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioChange2" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 开始时间 -->
				<view v-if="value6=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
				 @click="selectTime2(1)">
					<text>开始时间</text>
					<view class="flex align-center justify-between">
						<text :style="startTime4.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime4}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value6=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 结束时间 -->
				<view v-if="value6=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
				 @click="selectTime2(2)">
					<text>结束时间</text>
					<view class="flex align-center justify-between">
						<text :style="endTime4.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime4}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value6=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 有效天数 -->
				<view v-if="value6=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>领取后有效天数</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value6=='有效天数'" class="pl-2 pr-2">
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
				
				<!-- 奖品图片 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品图片</text>
					<text>不上传则显示默认图片</text>
				</view>
					
				<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
					<view class=""></view>
					<view v-if="imageUrl3==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage3(3)">
						<view class="flex flex-column align-center">
							<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
							<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
						</view>
						
					</view>
					
					<view v-if="imageUrl3" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(3)">
						<image :src="imageUrl3" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
						
					</view>
					
					
				</view>	
				
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品数量 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品数量</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
					</view>
						
					<input style="text-align: end;" type="text"  placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
			</view>
			
			
			
			
			<view class="" v-if="awardNum==4">
				<divider :height="20"></divider>
				<!-- 奖品设置 四等奖-->
				<view class="flex align-center justify-between text-color" style="height: 80rpx;background-color: #fff;">
				            <view class="flex align-center">
								<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
											<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
								color: #1D1200;font-weight: 600;">奖品设置</text>
							</view>
							
							<view class="rounded-circle flex align-center justify-center mr-2" style="background-color: #FF7200;" @click="removeItem(4)">
								<text class="text-center font-bold" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">一</text>
							</view>
				            
				
						</view>			
					
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text" value="四等奖" placeholder="输入奖品名称" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>	
				
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 32upx;height: 100rpx;">
					<text>券类型</text>
					<u-radio-group v-model="value7" width="160rpx" active-color="#FF7200" size="30">
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
				<view v-if="value7=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>折扣</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value7=='折扣券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品名称 -->
				<view v-if="value7=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text" placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value7=='兑换券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 优惠金额 -->
				<view v-if="value7=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>优惠金额</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value7=='代金券'" :height="4"></divider>
				
				<!-- 使用门槛 -->
				<view v-if="value7=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<view class="flex flex-column ">
						<text>使用门槛</text>
						<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
					</view>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value7=='代金券'" :height="4"></divider>
				
				
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
					<u-radio-group v-model="value8" width="180rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioChange2" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 开始时间 -->
				<view v-if="value8=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
				 @click="selectTime2(1)">
					<text>开始时间</text>
					<view class="flex align-center justify-between">
						<text :style="startTime5.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime5}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value8=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 结束时间 -->
				<view v-if="value8=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;"
				 @click="selectTime2(2)">
					<text>结束时间</text>
					<view class="flex align-center justify-between">
						<text :style="endTime5.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime5}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value8=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 有效天数 -->
				<view v-if="value8=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>领取后有效天数</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value8=='有效天数'" class="pl-2 pr-2">
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
				
				<!-- 奖品图片 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品图片</text>
					<text>不上传则显示默认图片</text>
				</view>
					
				<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
					<view class=""></view>
					<view v-if="imageUrl4==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage4(3)">
						<view class="flex flex-column align-center">
							<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
							<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
						</view>
						
					</view>
					
					<view v-if="imageUrl4" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(4)">
						<image :src="imageUrl4" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
						
					</view>
					
					
				</view>	
				
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品数量 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
					<text>奖品数量</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
					</view>
						
					<input style="text-align: end;" type="text"  placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
			</view>
			
			
			<view class=" flex align-center justify-center flex-column" style="height: 200rpx;background-color: #F4F4F4;">
				
				<view class="flex align-center justify-center" style="width: 210rpx;height: 72rpx;border-radius: 36rpx;border: 1rpx solid #1D1200;" @click="addAward()">
					<text style="font-family: PingFangSC-Regular, PingFang SC;color: #1D1200;font-size: 28upx;">＋添加奖项</text>
				</view>
				
				<view class="mt-2">
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">奖项数至少1个，最多4个</text>
				</view>
				
			</view>
			
			
			
			
			
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
						 			  <view class="flex align-center justify-center " style="background-color: #FF7200;width: 120rpx;height: 50rpx;border-radius: 30rpx;" @click="chooseImageAct()">
						 			  	<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">选择</text>
						 			  </view>
						 		  </view>
						 		  
						 		  <view class="flex align-center ml-2  mr-2" style="flex-wrap: wrap;">
						 			  <view class="flex align-center  justify-center mt-1" style="height: 200rpx;width: 33.3%;"
						 			  v-for="(item,index) in imageUrlList" :key="index" >
						 			  			<view class="align-center flex flex-column " @click="previewImageAct(item)">
						 			  				<image :src="item" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
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
				awardNum:1,
				index: -1,
				musicName:"无",
				startTime: "选择开始时间",
				endTime: "选择结束时间",
				startTime2: "选择开始时间",
				endTime2: "选择结束时间",
				startTime3: "选择开始时间",
				endTime3: "选择结束时间",
				startTime4: "选择开始时间",
				endTime4: "选择结束时间",
				startTime5: "选择开始时间",
				endTime5: "选择结束时间",
				showTime: false,
				showTime2: false,
				showTime3: false,
				showTime4: false,
				showTime5: false,
				open: false,
				open2: false,
				open3: false,
				activityDetail:"",
				activityRule:"",
				imageUrl1:"",
				imageUrl2:"",
				imageUrl3:"",
				imageUrl4:"",
				imageUrlList:[],
				imageList:[],
				imageList2:[],
				imageList3:[],
				imageList4:[],
				imgurls:[],
				value1: '代金券',
				value2: '指定日期',
				value3: '代金券',
				value4: '指定日期',
				value5: '代金券',
				value6: '指定日期',
				value7: '代金券',
				value8: '指定日期',
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
			}
		},
		methods: {
			
			
			addAward(){
				if(this.awardNum<4){
					this.awardNum++
				}
				else{
					uni.showToast({
						icon:'none',
						title:"最多添加4个奖品"
					})
				}
			},
			
			removeItem(index){
				if(this.awardNum!=1){
					this.awardNum--
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
			
			// 选择营业时间
			selectTime4(num) {
				this.showTime4 = true
				if (num == 1) {
					this.index4 = 1
				} else {
					this.index4 = 2
				}
			},
			chooseTime4(res) {
				console.log(res)
				if (this.index4 == 1) {
					this.startTime4 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				} else {
					this.endTime4 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				}
			},
			
			// 选择营业时间
			selectTime5(num) {
				this.showTime5 = true
				if (num == 1) {
					this.index5 = 1
				} else {
					this.index5 = 2
				}
			},
			chooseTime5(res) {
				console.log(res)
				if (this.index5 == 1) {
					this.startTime5 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				} else {
					this.endTime5 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + "-" + res.minute;
				}
			},
			
			
			
			chooseImageAct(){
				if(this.imageList.length<=9){
					uni.chooseImage({
					   count: 9, //默认9
					   success: (res) => {
					   	console.log(res.tempFilePaths);
						this.imageUrlList=res.tempFilePaths
						
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
			
			previewImageAct(url){
				uni.previewImage({
					current:url,
					urls:this.imageUrlList,
					indicator:"default",
					success: (res) => {
						
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			
			
			chooseImage(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl1=res.tempFilePaths
					this.imageList=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			chooseImage2(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl2=res.tempFilePaths
					this.imageList2=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			chooseImage3(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl3=res.tempFilePaths
					this.imageList3=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			chooseImage4(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl4=res.tempFilePaths
					this.imageList4=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			
			previewImage(index){
				if(index==1){
					this.imgurls=this.imageList
				}
				else if(index==2){
					this.imgurls=this.imageList2
				}
				else if(index==3){
					this.imgurls=this.imageList3
				}
				else if(index==4){
					this.imgurls=this.imageList4
				}
				
				
				
				uni.previewImage({
					current:this.imageUrl+"index",
					urls:this.imgurls,
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
