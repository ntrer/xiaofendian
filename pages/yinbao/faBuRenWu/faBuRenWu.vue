<template>
	<view>
		<u-navbar title="优惠券" :background="background" title-color="#000" :isBack="true"></u-navbar>

		<view class="flex align-center justify-between text-color" style="height: 85rpx;background-color: #fff;box-shadow: 0px 2rpx 5rpx 0px rgba(0, 0, 0, 0.2);">

			<view class="flex align-center justify-between">
				<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				<text class="ml-4" style="font-size: 32rpx;">内容</text>
			</view>


			<u-radio-group v-model="value1" width="200rpx" active-color="#FF7200">
				<u-radio @change="radioChange1" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">
					{{item.name}}
				</u-radio>
			</u-radio-group>


		</view>


         <!-- 优惠金额 -->
        <view v-if="value1=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
        	<text >优惠金额</text>
        	<input style="text-align: end;" type="text" :value="shopName" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;"/>
        </view>
       <divider v-if="value1=='代金券'"  :height="4"></divider>
	   
	   <!-- 使用门槛 -->
	   <view v-if="value1=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		   <view class="flex flex-column ">
			   <text >使用门槛</text>
			   <text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
		   </view>
	    	<input style="text-align: end;" type="text" :value="shopName" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;"/>
	    </view>
	   <divider v-if="value1=='代金券'" :height="4"></divider>
	   
	   
	   <!-- 折扣 -->
	   <view v-if="value1=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
	       <text >折扣</text>
	    	<input style="text-align: end;" type="text" :value="shopName" placeholder="输入折扣" placeholder-style="color: #9F9F9F;text-align: end;"/>
	    </view>
	   <divider v-if="value1=='折扣券'" :height="4"></divider>
	   
	   
	   
	   <!-- 券有效期 -->
	   <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
	   		  <text >券有效期</text>
	    	<u-radio-group v-model="value2" width="200rpx" active-color="#FF7200">
	    		<u-radio @change="radioChange2" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
	    		{{item.name}}
	    		</u-radio>
	    	</u-radio-group>
	    </view>
	   <divider :height="4"></divider>

       <!-- 开始时间 -->
       <view v-if="value2=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="selectTime(1)">
       	<text >开始时间</text>
       	<view class="flex align-center justify-between">
       		<text :style="startTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime}}</text>
       		<uni-icon  :size="20" color="#000" type="arrowright" />
       	</view>
       </view>
      <divider v-if="value2=='指定日期'" :height="4"></divider>

       <!-- 结束时间 -->
       <view v-if="value2=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="selectTime(2)">
       	<text >结束时间</text>
       	<view class="flex align-center justify-between">
       		<text :style="endTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime}}</text>
       		<uni-icon  :size="20" color="#000" type="arrowright" />
       	</view>
       </view>
       <divider v-if="value2=='指定日期'" :height="4"></divider>

        
        <!-- 有效天数 -->
        <view v-if="value2=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
            <text >领取后有效天数</text>
         	<input style="text-align: end;" type="text" :value="shopName" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;"/>
         </view>
        <divider v-if="value2=='有效天数'" :height="4"></divider>
        
		<!-- 适用范围 -->
		 <view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >适用范围</text>
		 	<input style="text-align: end;" type="text" :value="shopName" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		<divider  :height="4"></divider>
		
		<!-- 奖品数量 -->
		 <view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >奖品数量</text>
		 	<input style="text-align: end;" type="text" :value="shopName" placeholder="奖品份数，数量越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		<divider  :height="4"></divider>
		
		<!-- 每日上限 -->
		 <view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<view class="flex flex-column ">
		 		<text >每日上限</text>
		 	    <text style="font-size: 22upx;color: #aaa;">此奖项每天最多可抽中的数量</text>
		 	</view>
		 	<input style="text-align: end;" type="text" :value="shopName" placeholder="请输入数量，0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		<divider  :height="4"></divider>
		
		
		<view class="fixed-bottom main-bg-color flex align-center justify-center" style="height: 96rpx;font-size: 36upx;color: #fff;">
			创建优惠券
		</view>

         <!-- 时间选择器 -->
		 <u-picker mode="time" v-model="showTime" :params="params" @confirm="chooseTime()"></u-picker>
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	export default {
		components:{
			divider
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				list: [{
						name: '代金券',
						disabled: false
					},
					{
						name: '折扣券',
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
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				value1: '代金券',
				value2: '指定日期',
				startTime:"选择开始时间",
				endTime:"选择结束时间",
				params :{
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false,
					province: false,
					city: false,
					area: false,
					timestamp: false, // 1.3.7版本提供
				},
				showTime:false,
				index:-1,
			}
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange1(e) {
				if (e == "代金券") {

				} else {

				}
			},
			
			radioChange2(e){
				
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
					this.startTime =res.year+"-"+res.month+"-"+res.day;
				}
				else{
					this.endTime = res.year+"-"+res.month+"-"+res.day;
				}
			},
		}
	}
</script>

<style>

</style>
