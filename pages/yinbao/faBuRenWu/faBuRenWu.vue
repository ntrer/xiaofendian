<template>
	<view>
		<u-navbar title="优惠券" :background="background" title-color="#000" :isBack="true"></u-navbar>

		<view class="flex align-center justify-between text-color" style="height: 85rpx;background-color: #fff;box-shadow: 0px 2rpx 5rpx 0px rgba(0, 0, 0, 0.2);">

			<view class="flex align-center justify-between">
				<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				<text class="ml-4" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">内容</text>
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
        	<input style="text-align: end;" type="text" v-model="oupon_price" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;"/>
        </view>
       <divider v-if="value1=='代金券'"  :height="4"></divider>
	   
	   <!-- 使用门槛 -->
	   <view v-if="value1=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		   <view class="flex flex-column ">
			   <text >使用门槛</text>
			   <text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
		   </view>
	    	<input style="text-align: end;" type="text" v-model="use_threshold" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;"/>
	    </view>
	   <divider v-if="value1=='代金券'" :height="4"></divider>
	   
	   
	   <!-- 折扣 -->
	   <view v-if="value1=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
	       <text >折扣</text>
	    	<input style="text-align: end;" type="text" v-model="discount" placeholder="输入折扣" placeholder-style="color: #9F9F9F;text-align: end;"/>
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
         	<input style="text-align: end;" type="text" v-model="collect_coupons_effective_days" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;"/>
         </view>
        <divider v-if="value2=='有效天数'" :height="4"></divider>
        
		<!-- 适用范围 -->
		 <view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >任务名称</text>
		 	<input style="text-align: end;" type="text" v-model="merchant_task_name" placeholder="输入任务名称" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		<divider  :height="4"></divider>
		
		
		<!-- 适用范围 -->
		 <view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >适用范围</text>
		 	<input style="text-align: end;" type="text" v-model="use_scope" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		<divider  :height="4"></divider>
		
		<!-- 奖品数量 -->
		 <view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >奖品数量</text>
		 	<input style="text-align: end;" type="text" v-model="total_num" placeholder="奖品份数，数量越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		<divider  :height="4"></divider>
		
		<!-- 每日上限 -->
		 <view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<view class="flex flex-column ">
		 		<text >每日上限</text>
		 	    <text style="font-size: 22upx;color: #aaa;">此奖项每天最多可抽中的数量</text>
		 	</view>
		 	<input style="text-align: end;" type="text" v-model="limited_collection_num" placeholder="请输入数量，0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
		 </view>
		<divider  :height="20"></divider>
		
		
		<view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >单个优惠券分佣金额</text>
			<view class="flex align-center justify-between">
				<input style="text-align: end;" type="text" v-model="commission_amount" placeholder="请输入数字" placeholder-style="color: #9F9F9F;text-align: end;"/>
			</view>
		 	
		 </view>
		<divider  :height="4"></divider>
		
		<view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >平台佣金百分比</text>
			<view class="flex align-center justify-between">
				<input style="text-align: end;" type="text" v-model="platform_commission_ratio" placeholder="请输入数字" placeholder-style="color: #9F9F9F;text-align: end;"/>
				<text class="ml-1">%</text>
			</view>
		 	
		 </view>
		<divider  :height="4"></divider>
		
		<view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >发布商户上级佣金</text>
			<view class="flex align-center justify-between">
				<input style="text-align: end;" type="text" v-model="publish_task_superior_commission_ratio" placeholder="请输入数字" placeholder-style="color: #9F9F9F;text-align: end;"/>
				<text class="ml-1">%</text>
			</view>
		 	
		 </view>
		<divider  :height="4"></divider>
		
		<view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >领取商户上级佣金</text>
			<view class="flex align-center justify-between">
				<input style="text-align: end;" type="text" v-model="pickup_task_superior_commission_ratio" placeholder="请输入数字" placeholder-style="color: #9F9F9F;text-align: end;"/>
				<text class="ml-1">%</text>
			</view>
		 	
		 </view>
		<divider  :height="4"></divider>
		
		<view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >转发商户可领佣金</text>
			<view class="flex align-center justify-between">
				<input style="text-align: end;" type="text" v-model="pickup_task_commission_ratio" placeholder="请输入数字" placeholder-style="color: #9F9F9F;text-align: end;"/>
				<text class="ml-1">%</text>
			</view>
		 	
		 </view>
		<divider  :height="4"></divider>
		
		<view  class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
		 	<text >转发客户可领佣金</text>
			<view class="flex align-center justify-between">
				<input style="text-align: end;" type="text" v-model="share_customer_commission_ratio" placeholder="请输入数字" placeholder-style="color: #9F9F9F;text-align: end;"/>
				<text class="ml-1">%</text>
			</view>
		 	
		 </view>
		<view class="" style="height: 100rpx;"></view>
		
		
		
		
		
		<view class="fixed-bottom main-bg-color flex align-center justify-center" style="height: 96rpx;font-size: 36upx;color: #fff;" @click="createCoupon()">
			创建优惠券
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
					hour: true,
					minute: true,
					second: true,
					province: false,
					city: false,
					area: false,
					timestamp: false, // 1.3.7版本提供
				},
				showTime:false,
				index:-1,
				collect_coupons_effective_days: "", //int | 领券后有效天数 | 必传    
				coupon_effective_type: "", //int | 券有效期 1指定日期 2有效天数 | 必传    
				oupon_price: 0, //long | 优惠券金额 | 必传    
				coupon_type: 1, //int | 优惠券类型 1代金券 2折扣券 3兑换券 | 必传    
				create_merchant_user_id: "", //long | 创建人ID | 必传    
				create_time: "", //datetime | 创建时间 | 必传    
				discount: "", //string | 折扣 | 必传    
				drainage_products_type: "", //int | 引流产品类型 1大转盘抽奖 2发优惠券活动 3推荐有礼 4红包裂变 5砸金蛋 6任务平台 7会员裂变 8会员返利 | 必传    
				enable: "", //boolean | 0:停用 1:启用 | 必传    
				end_date: "", //datetime | 结束时间 | 必传    
				exchange_gifts_name: "", //string | 兑换礼品名称 | 必传    
				id: "", //long | 主键Id | 必传    
				limited_collection_num: "", //int | 每人限领张数 | 必传    
				merchant_id: "", //long | 所属商户ID | 必传    
				start_date: "", //datetime | 开始时间 | 必传    
				total_num: "", //int | 优惠券总数 | 必传    
				use_scope: "全店通用", //string | 适用范围 | 必传    
				use_threshold: "" ,//long | 门槛 | 必传
				pickup_task_commission_ratio: 0, //long | 领取任务商户佣金百分比 | 必传    
				pickup_task_superior_commission_ratio: 0, //long | 领取任务上级商户佣金百分比 | 必传    
				platform_commission_ratio: 10, //long | 平台佣金百分比 | 必传    
				publish_task_superior_commission_ratio: 0, //long | 发布任务上级商户佣金百分比 | 必传    
				share_customer_commission_ratio: 0 ,//long | 分享用户佣金百分比 | 必传    
				commission_amount:"",
				merchant_task_name:""
				
			}
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange1(e) {
				console.log(e)
				if (e == "代金券") {
                     this.coupon_type==1
				} else {
                     this.coupon_type==2
				}
			},
			
			radioChange2(e){
				if (e == "指定日期") {
				     this.coupon_effective_type==1
				} else {
				     this.coupon_effective_type==2
				}
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
					this.startTime =res.year+"-"+res.month+"-"+res.day+" "+res.hour+":"+res.minute+":"+res.second;
					this.start_date=this.startTime
				}
				else{
					this.endTime = res.year+"-"+res.month+"-"+res.day+" "+res.hour+":"+res.minute+":"+res.second;
					this.end_date=this.endTime
				}
			},
			
			createCoupon(){
				
				// 校验佣金比例之和
				if(parseInt(this.pickup_task_commission_ratio) + parseInt(this.pickup_task_superior_commission_ratio) +parseInt(this.platform_commission_ratio) + parseInt(this.publish_task_superior_commission_ratio) +parseInt(this.share_customer_commission_ratio) !=100){
					
					console.log(parseInt(this.pickup_task_commission_ratio) + parseInt(this.pickup_task_superior_commission_ratio) +parseInt(this.platform_commission_ratio) + parseInt(this.publish_task_superior_commission_ratio) +parseInt(this.share_customer_commission_ratio))
					
					uni.showToast({
						icon:'none',
						title:"佣金比例之和应为100%",
						duration:2000
					})
					return
				}
				
				// 整合数据
				let data={
					collect_coupons_effective_days: this.collect_coupons_effective_days||"", //int | 领券后有效天数 | 必传
					coupon_effective_type: this.coupon_effective_type, //int | 券有效期 1指定日期 2有效天数 | 必传    
					oupon_price: this.oupon_price||0, //long | 优惠券金额 | 必传    
					coupon_type: this.coupon_type, //int | 优惠券类型 1代金券 2折扣券 3兑换券 | 必传    
					discount: this.discount||0, //string | 折扣 | 必传    
					end_date: this.end_date||"", //datetime | 结束时间 | 必传    
					limited_collection_num: this.limited_collection_num, //int | 每人限领张数 | 必传    
					start_date: this.start_date||"", //datetime | 开始时间 | 必传    
					total_num: this.total_num, //int | 优惠券总数 | 必传    
					use_scope: this.use_scope, //string | 适用范围 | 必传    
					use_threshold: this.use_threshold ,//long | 门槛 | 必传
					pickup_task_commission_ratio: this.pickup_task_commission_ratio, //long | 领取任务商户佣金百分比 | 必传    
					pickup_task_superior_commission_ratio: this.pickup_task_superior_commission_ratio, //long | 领取任务上级商户佣金百分比 | 必传    
					platform_commission_ratio: 10, //long | 平台佣金百分比 | 必传    
					publish_task_superior_commission_ratio: this.publish_task_superior_commission_ratio, //long | 发布任务上级商户佣金百分比 | 必传    
					share_customer_commission_ratio: this.share_customer_commission_ratio, //long | 分享用户佣金百分比 | 必传
				    merchant_task_name:this.merchant_task_name,
					commission_amount:this.commission_amount,
				}
				
				if(this.coupon_type==1){
					if(this.use_threshold==""){
						uni.showToast({
							icon:'none',
							title:"请输入使用门槛"
						})
						return
					}
				}
				
				if(this.coupon_type==2){
					if(this.this.discount==""){
						uni.showToast({
							icon:'none',
							title:"请输入使用折扣"
						})
						return
					}
				}
				
				if(this.coupon_effective_type==1){
					if(this.start_date==""&&this.end_date==""){
						uni.showToast({
							icon:'none',
							title:"请输入时间范围"
						})
						return
					}
				}
				
				if(this.coupon_effective_type==2){
					if(this.collect_coupons_effective_days==""){
						uni.showToast({
							icon:'none',
							title:"请输入有效天数"
						})
						return
					}
				}
				
				if(this.use_scope==""&&this.total_num==""&&this.limited_collection_num==""&&merchant_task_name==""&&this.commission_amount==""){
					uni.showToast({
						icon:'none',
						title:"请填写完整"
					})
					return
				}
				
				
				// 发送到服务端
				$H.post("/merchant_task",data).then((res) => {
					
					//请求成功
					console.log(res)
					
					
				}).catch((e) => {
					//请求失败
					console.log("失败"+e)
				})
				
				
				
			}
		}
	}
</script>

<style>

</style>
