<template>
	<view>
		<u-navbar title="个人中心"  :background="background" title-color="#000" :isBack="true"></u-navbar>
	    <view class="flex align-center justify-center text-color" style="height: 66rpx;background-color: #FEEBEB;font-size: 24upx;">
			目前仅支持开始时间起31日内的查询
		</view>
		
		<view class="flex align-center text-color" style="height: 100rpx;background-color: #fff;">
			<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view> 
			<text class="ml-4 " style="font-size: 36upx;">日期范围</text>
		</view>
		
		<!-- 时间范围 -->
		<view class="flex align-center pl-4 mt-2">
			
			<view class="flex align-center justify-center pl-3 pr-3 pt-1 pb-1" style="border-radius: 18px;border: 1px solid #1D1200;font-size: 26upx;">
				近24小时
			</view>
			
			<view class="flex align-center justify-center pl-3 pr-3 pt-1 pb-1 ml-2" style="border-radius: 18px;border: 1px solid #1D1200;font-size: 26upx;">
				本周
			</view>
			
			<view class="flex align-center justify-center pl-3 pr-3 pt-1 pb-1 ml-2" style="border-radius: 18px;border: 1px solid #1D1200;font-size: 26upx;">
				本月
			</view>
			
		</view>
		
		
		<!-- 选项列表 -->
		<!-- 开始时间 -->
		<view class="flex align-center justify-between ml-4 mr-4 mt-1" style="height: 100rpx;" @click="selectTime(1)">
			<text class="text-color">开始时间</text>
			<view class="flex align-center justify-between">
				<text class="text-color" :style="startTime.indexOf('选择')?'color:#1D1200':'color:#C3C3C3'">{{startTime}}</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="ml-4 mr-4">
			<divider :height="4"></divider>
		</view>
		
		<!-- 结束时间 -->
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="selectTime(2)">
			<text class="text-color">结束时间</text>
			<view class="flex align-center justify-between">
				<text class="text-color" :style="endTime.indexOf('选择')?'color:#1D1200':'color:#C3C3C3'">{{endTime}}</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="ml-4 mr-4">
			<divider :height="4"></divider>
		</view>
		
		<view class="flex align-center justify-between ml-4 mr-4" style="height: 100rpx;" @click="selectFilter()">
			<text class="text-color">高级选项</text>
			<view class="flex align-center justify-between">
				<text class="text-color" :style="selectType.indexOf('选择')?'color:#1D1200':'color:#C3C3C3'">{{selectType}}</text>
				<uni-icon  :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="ml-4 mr-4">
			<divider :height="4"></divider>
		</view>
		
		
		<!-- 时间选择器 -->
		<u-picker mode="time" v-model="show" title="请选择时间" confirm-color="#FF7200" :mask-close-able="false" :params="params"
		 @confirm="chooseTime()"></u-picker>
		
		
		<!-- 筛选条件 -->
		<u-popup v-model="showSelect" mode="bottom" height="60%" :closeable="false">
			   <view class="flex flex-column fixed-top bg-white">
				<view class="flex align-center justify-between pl-3 pr-3" style="height: 80rpx;">
					<text style="font-size: 32rpx;" @click="cancle()">取消</text>
					<text class="font-bold" style="font-size: 34rpx;">筛选条件</text>
					<text style="font-size: 32rpx;color: #FF7200;" @click="confirm()">确定</text>
				</view>	
				<divider :height="4"></divider>
			   </view>
				<view class="" style="margin-top: 80rpx;"></view>
				<!-- 条件列表 -->
				<view class="flex flex-column " v-for="(item,index) in catagor" :key="index">
					<view class="flex align-center justify-between pl-3 pr-3" style="height: 100rpx;"  @click="chooseItem(index)">
						<text>{{item.name}}</text>
						<image v-if="index==chooseIndex" src="../../static/common/duihao.png" style="height: 40rpx;width: 40rpx;"></image>
					</view>
					<divider :height="4"></divider>
				</view>
				
				
		</u-popup>
		
		
		<!-- 确定按钮 -->
		<view class="flex align-center justify-center ml-4 mr-4 mt-5" style="height: 76rpx;background: linear-gradient(139deg, #FF8337 0%, #F43635 100%, #FF7200 100%);border-radius: 40rpx;color: #fff;font-size: 32rpx;">
			查询
		</view>
		
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
				showSelect:false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
				chooseIndex:-1,
				startTime:"选择开始时间",
				endTime:"选择结束时间",
				selectType:"选择指定条件",
				show: false,
				num:1,
				catagor: [{
						name: '全部订单',
						id:1
					}, {
						name: '门店优惠订单',
						id:2
					},
					{
						name: '到店核销订单',
						id:3
					},
					{
						name: '活动线上订单',
						id:4
					},
					{
						name: '活动到店买单',
						id:5
					},
					{
						name: '余额充值',
						id:6
					},
					{
						name: '余额核销',
						id:7
					},
					{
						name: '商城订单',
						id:8
					}
				],
			}
		},
		
		methods: {
			selectTime(index){
				this.show = true
				if(index==1){
					this.num=1
				}
				else{
					this.num=2
				}
			},
			// 选择时间
			chooseTime(res) {
				if(this.num==1){
					this.startTime = res.year+"年" +res.month + "月" + res.day + "日"+res.hour+"时"+res.minute+"分";
				}
				else{
					this.endTime = res.year+"年" +res.month + "月" + res.day + "日"+res.hour+"时"+res.minute+"分";
				}
				
			},
			
			// 显示条件弹窗
			selectFilter(){
				this.showSelect=true
			},
			
			// 选择条件
			chooseItem(num){
				this.chooseIndex=num;
			},
			
			
			cancle(){
				this.showSelect=false  
			},
			
			confirm(){
				this.showSelect=false  
				this.selectType=this.catagor[this.chooseIndex].name
			}
		
		}
	}
</script>

<style>

</style>
