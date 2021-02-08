<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar  :background="background" title-color="#fff" :isBack="false">
			<view class="flex align-center ml-4" @click="toShopList()">
				<free-avater size="50" style="margin-right: 10rpx;margin-top: 5rpx;" :src="'https://'+merchantImage"></free-avater>
				<text class="map-wrap-text mr-1 ml-1" style="font-weight: 600;color: #fff;">{{merchantName}}</text>
				<text>⏷</text>
			</view>
			<view slot="right" class="mr-2" @click="toMy()">
				 <image src="../../../static/common/wode.png" style="height: 50rpx;width: 50rpx;"></image>
			</view>
		</u-navbar>
		 
	<view class="flex flex-row pt-5" style="height: 360rpx;background-color: #FF7200;border-radius: 0px 0px 60px 60px;">
		<view class="flex flex-1 align-center  flex-column" style="font-size: 32rpx;color: #fff;" @click="toFans()">
			<text>总粉丝数</text>
			<text class="mt-2">{{fansNum}}</text>
		</view>
		
		<view class="flex flex-1 align-center  flex-column" style="font-size: 32rpx;color: #fff;" @click="toDingDan()">
			<text>本月订单</text>
			<text class="mt-2">{{orderNum}}</text>
		</view>
		
		<view class="flex flex-1 align-center  flex-column" style="font-size: 32rpx;color: #fff;" @click="toYuE()">
			<text>订单金额</text>
			<text class="mt-2">{{orderPrice==null?0:orderPrice}}</text>
		</view>
		
	</view>
	
	<!-- 第一块 -->
	<view class="ml-3 mr-3 flex  flex-column pt-4" style="height: 450rpx;background: #FFFFFF;box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);border-radius: 30px; margin-top: -150rpx;">
		
		<!-- 3个功能块 -->
		<view class=" flex flex-row">
			<view class="flex flex-1 justify-center" style="height: 160rpx;">
				<view class="flex align-center justify-center flex-column" @click="toScan()">
					<image src="../../../static/common/saomahexiao.png" style="height: 80rpx;width: 80rpx;"></image>
					<text class="mt-2 text-color">扫码核销</text>
				</view>
			</view>
			
			<view class="flex flex-1 justify-center" style="height: 160rpx;" @click="toDianPu()">
				<view class="flex align-center justify-center flex-column">
					<image src="../../../static/common/dianpuguanli.png" style="height: 80rpx;width: 80rpx;"></image>
					<text class="mt-2 text-color">店铺管理</text>
				</view>
			</view>
			
	
			
			<view class="flex flex-1 justify-center" style="height: 160rpx;" @click="toShopCircle()">
				<view class="flex align-center justify-center flex-column">
					<image src="../../../static/common/shangyelianmeng.png" style="height: 80rpx;width: 80rpx;"></image>
					<text class="mt-2 text-color">任务平台</text>
				</view>
			</view>
		</view>
		
		<!-- 直播引流和裂变系统 -->
		<view class="flex align-center justify-between" style="height: 220rpx;">
			<view class="flex flex-1 ml-2 mr-1 align-center justify-center" @click="quLive()">
				<image src="../../../static/common/zhibopeixun.png" style="height: 190rpx;width: 320rpx;position: absolute;z-index: 0;"></image>
				<image src="../../../static/common/quzhibo.png" style="width: 130rpx;height: 42rpx;margin-top: 84rpx;z-index: 99;"></image>
			</view>
			
			<view class="flex flex-1 ml-1 mr-2 align-center justify-center" @click="toLieBian()">
				
				<image src="../../../static/common/yinliuhuodong.png" style="height: 190rpx;width: 320rpx;position: absolute;z-index: 0;"></image>
				
				<image src="../../../static/common/quliebian.png" style="width: 130rpx;height: 42rpx;margin-top: 84rpx;z-index: 99;"></image>
				
			</view>
		
		</view>
		
		<!-- 商圈直播引流 -->
		<!-- <view class="ml-2 mr-2 mt-1 mb-1 flex align-center justify-center" style="height: 140rpx;">
			<image src="../../../static/common/quyunliu.png" style="width: 100%; height: 140rpx;;"></image>
		</view> -->
		
	
		
		
		
		
		
	</view>
	
	<!-- 第二块 -->
	<view class="mt-4 ml-3 mr-3" style="height: 560rpx;background: #FFFFFF;box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);border-radius: 30px; ">
		
		<!-- 标题 -->
		<view class="pt-4 pl-4 flex align-center justify-between" >
			<text style="font-size: 36rpx;font-weight: 600;">我的活动</text>
			
			<view class="flex align-center justify-between mr-4" @click="toAllActivity()">
				<text style="color: #757272;">查看更多</text>
				<uni-icon  :size="20" color="#757272" type="arrowright" />
			</view>
			
		</view>
		
		<!-- 列表 -->

		<view class="ml-4 mr-4 mt-4" v-for="(item,index) in 2" :key="index" @click="toActivityDetail()">
			<view class="flex flex-row ">
				<image src="../../../static/common/activity.png" style="width: 220rpx;height: 160rpx;"></image>
				 <view class="flex  flex-column">
					 <!-- 名字 -->
					<view class="flex align-center ml-2">
						<text style="font-size: 28rpx;font-family: PingFang SC;font-weight: bold;color: #1D1200;">活动名称</text>
						<view class="ml-2 flex align-center justify-center" style="background: #FF7200;border-radius: 10rpx;height: 36rpx;width: 80rpx;">
							<text style="color: #fff;font-size: 20rpx;">进行中</text>
							<!-- <text>已结束</text> -->
						</view>
					</view>
					<!-- 内容 -->
					 <text class="ml-2 mt-2" style="font-family: PingFang SC;font-weight: 500;color: #757272;">活动内容活动内容</text>
					 <!-- 领券 -->
					 <view class="ml-2 mt-2 flex">
						 <view class="flex align-center justify-center pl-1 pr-1" style="color: #FF7200;font-size: 20rpx;background-color: #FFF0F0;border-radius: 18rpx;height: 40rpx;min-width: 110rpx;">
							 <text>今日领券:</text>
							 <text class="ml-1">0</text>
						 </view>
						 <view class="flex align-center justify-center pl-1 pr-1 ml-2" style="color: #FF7200;font-size: 20rpx;background-color: #FFF0F0;border-radius: 18rpx;height: 40rpx;min-width: 110rpx;">
						 	<text>总领券:</text>
						 	<text class="ml-1">0</text>
						 </view>
					 </view>
				 </view>
			</view>
			<view class="mt-2" v-if="index==0">
				<divider :height="4"></divider>
			</view>
		</view>
	
		
		
	</view>
	
	<!-- 第三块 -->
	<view class="mt-4 ml-3 mr-3 " style="min-height: 600rpx;background: #FFFFFF;box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);border-radius: 30px;">
		
		
		<!-- 标题 -->
		<view class="pt-4 pl-4 flex align-center justify-between" >
			<text style="font-size: 36rpx;font-weight: 600;">经典引流方案</text>
		</view>
		
		<!-- 吸顶分类菜单 -->
		<u-sticky :offset-top="offsettop">
			<!-- 只能有一个根元素 -->
			<view class="flex align-center flex-row pl-2" style="position: relative; background-color: #fff;">
				
				<scroll-view scroll-x="true" class="scroll-row" style="height: 80rpx;">
					<view v-for="(item,index) in catagor" :key="index"
					class="scroll-row-item px-2 py-2 "
					:class="tabIndex===index?'text-checked-color font-bold':''"
					@click="changeIndex(index)"
					:style="index==catagor.length-1?'margin-right: 60rpx;':''"
					>
					{{item.name}}
					</view>
				</scroll-view>
				
				<view class="" style="position: absolute;right: 0; height: 40rpx;width: 60rpx; background-color: #fff;" @click="toMoreFenLei()">
					<image class="mr-2" src="../../../static/fenlei.png" style="width: 40rpx;height: 40rpx;"></image>
					
				</view>
				
			</view>
		</u-sticky>
		
		
		<!-- 商品列表 -->
		<view class="ml-4 mr-4 mt-2" v-for="(item,index) in 10" :key="index">
			<view class="flex flex-row ">
				<image src="../../../static/common/activity.png" style="width: 200rpx;height: 130rpx;"></image>
				 <view class="flex  flex-column">
					 <!-- 名字 -->
					<view class="flex align-center ml-2">
						<text style="font-size: 28rpx;font-family: PingFang SC;font-weight: bold;color: #1D1200;">活动名称</text>
					</view>
					<!-- 内容 -->
					<view class=" ml-2 mt-1">
						<text style="font-size: 24rpx; font-family: PingFang SC;font-weight: 500;color: #F23132;">25252</text>
						<text  style="font-size: 24rpx; font-family: PingFang SC;font-weight: 500;color: 
color: #F23132;;">家同行正在使用</text>
					</view>

                     <!-- 提示 -->
				    <view class="ml-2 mt-1" style="font-size: 24rpx; font-family: PingFang SC;font-weight: 500;color: #757272;">
						<text>Adbing...</text>
						<text>2个小时前关注过该方案</text>
					</view>
			
				 </view>
			</view>
			<view class="mt-2">
				<divider :height="4"></divider>
			</view>
		</view>
	</view>
	
	<view class="mt-4 ml-3 mr-3 " style="height: 10rpx;background:  #F4F4F4;">
		
	</view>
	
	
	</view>
</template>

<script>
	import freeAvater from'@/components/free-avater.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import divider from '@/components/divider.vue';
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	export default {
		components:{
			freeAvater,
			uniIcon,
			divider
		},
		data() {
			return {
				background:{
					backgroundImage: 'linear-gradient(0deg, #FF7200 0%, #FFB183 100%)'
				},
				tabIndex:0,
				offsettop:0,
				fansNum:0,
				orderNum:0,
				orderPrice:0,
				merchantName:"",
				merchantImage:"",
				catagor: [{
						name: '全部',
						id:1
					}, {
						name: '零售',
						id:2
					},
					{
						name: '美食娱乐',
						id:3
					},
					{
						name: '美业休闲',
						id:4
					},
					{
						name: '亲子教培',
						id:5
					},
					{
						name: 'dota',
						id:6
					}
				],
			}
		},
		
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					if(res.windowHeight<=688){
						this.offsettop=120
					}
					else if(730<res.windowHeight<=814){
						this.offsettop=160
					}
					else if(688<res.windowHeight<=730){
						this.offsettop=180
					}
				}
			});
			
			this.getpassenger()
			
		},
		
		
		onPullDownRefresh() {
			this.getpassenger()
		},
		
		
		methods: {
			
			// 获取头部总览数据
			getpassenger(){
				// 发送到服务端
				$H.get("/ignite/passenger/flow").then((res) => {
					uni.stopPullDownRefresh()
					//请求成功
					this.fansNum=res.data.fansNum
					this.orderNum=res.data.orderNum
					this.orderPrice=res.data.orderprice
					this.merchantName=res.data.merchant.merchant_name
					this.merchantImage=res.data.merchant.merchant_image
				}).catch((e) => {
					uni.stopPullDownRefresh()
					//请求失败
					console.log("失败"+e)
				})
			},
			
			toScan(){
				
			},
			
			toActivityDetail(){
				// uni.navigateTo({
				// 	url:'../../activityDetail/dazhuanpandetail/dazhuanpandetail'
				// })
				
				// uni.navigateTo({
				// 	url:'../../activityDetail/tuiJianDetail/tuiJianDetail'
				// })
				
				uni.navigateTo({
					url:'../../activityDetail/pinTuanDetail/pinTuanDetail'
				})
				
				// uni.navigateTo({
				// 	url:'../../activityDetail/kanJiaDetail/kanJiaDetail'
				// })
				
				// uni.navigateTo({
				// 	url:'../../activityDetail/hongbaoDetail/hongbaoDetail'
				// })
				
				// uni.navigateTo({
				// 	url:'../../activityDetail/zadanDetail/zadanDetail'
				// })
				
				// uni.navigateTo({
				// 	url:'../../activityDetail/miaoshaDetail/miaoshaDetail'
				// })
			},
			
			toShopList(){
				
			},
			
			toFans(){
				uni.navigateTo({
					url:'../../wode/fans/fans'
				})
			},
			
			toDingDan(){
				uni.navigateTo({
					url:'../../yinbao/orderAnalyze/orderAnalyze'
				})
			},
			
			toYuE(){
				uni.navigateTo({
					url:'../../yinbao/dingdanJinE/dingdanJinE'
				})
			},
			
			toMy(){
				uni.navigateTo({
					url:'../../person/person/person'
				})
			},
			
			toDianPu(){
				uni.navigateTo({
					url:'../../dianpu/dianPu/dianPu'
				})
			},
			
			toLieBian(){
				uni.navigateTo({
					url:'../../yinbao/keLiuLieBian/keLiuLieBian'
				})
			},
			
			quLive(){
				uni.navigateTo({
					url:'../../yinbao/wxLive/wxLive'
				})
			},
			
			toAllActivity(){
				uni.navigateTo({
					url:'../../yinbao/allActivity/allActivity'
				})
			},
			
			toShopCircle(){
				uni.navigateTo({
					url:'../../yinbao/shopCircle/shopCircle'
				})
			},
			
			toMoreFenLei(){
				uni.navigateTo({
					url:'../../yinbao/moreFenLei/moreFenLei'
				})
			},
			
			changeIndex(index) {
				if (this.tabIndex == index) {
					return;
				}
				this.tabIndex = index;
				
			},
		}
	}
</script>

<style>

.quzhibo{
	background-image: url("");
	height: 180rpx;
	background-size: 100% 100%;
}
</style>
