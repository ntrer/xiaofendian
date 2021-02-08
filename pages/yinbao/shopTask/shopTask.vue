<template>
	<view style="background-color: #F4F4F4;min-height: 100vh;">
		<u-navbar title="平台任务" :background="background" title-color="#000" :isBack="true"></u-navbar>


		<view class="flex align-center justify-between bg-white w-100" style="height: 100rpx;box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);position: fixed;" :style="'top:'+scrollH+'px;'">
			<view class="flex flex-1 align-center  text-color font-bold flex-column" style="height: 100rpx; font-size: 32rpx;"
			 @click="switchType(1)">
				<text style="margin-top: 30rpx;">全部任务</text>
				<view v-if="index==1" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>

			<view class="flex flex-1 align-center text-color font-bold flex-column" style="height: 100rpx;font-size: 32rpx;"
			 @click="switchType(3)">
				<text style="margin-top: 30rpx;">已接取任务</text>
				<view v-if="index==3" class="main-bg-color" style="width: 80rpx;height: 8rpx;margin-top: 22rpx;"></view>
			</view>
		</view>



		<!-- 任务列表 -->
		<view class="" style="margin-top: 100rpx;">
			<view class="flex flex-column m-3 bg-white " style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.02);" v-for="(item,index) in listData"
			 :key="index">
				<!-- 头部 -->
				<view class="flex align-center justify-between pl-2 pr-2" style="background-color: #FFE1E1;height: 50rpx;">
					<view style="color: #DF6162;font-size: 20rpx;">
						<text>已领取</text>
						<text class="ml-2">{{item.receive_num==null?'0':item.receive_num}}张</text>
					</view>
					<view style="color: #DF6162;font-size: 20rpx;">
						<text>已使用</text>
						<text class="ml-2">{{item.use_num==null?'0':item.use_num}}张</text>
					</view>
			
				</view>
				<!-- 内容 -->
				<view class="flex" style="height: 160rpx;">
					<view v-if="item.coupon_type==1" class="font-bold flex align-center justify-center flex-1" style="color: #FF7200;font-size: 44rpx;">
						代金券
					</view>
					<view v-if="item.coupon_type==2" class="font-bold flex align-center justify-center flex-1" style="color: #FF7200;font-size: 44rpx;">
						折扣券
					</view>
					<view v-if="item.coupon_type==3" class="font-bold flex align-center justify-center flex-1" style="color: #FF7200;font-size: 44rpx;">
						兑换券
					</view>
			
					<view class="flex flex-column text-color justify-center flex-1" style="font-size: 20rpx;">
						<text>{{item.merchant_task_name}}</text>
						<text v-if="item.collect_coupons_effective_days!=null" class="mt-1">有效期：{{item.collect_coupons_effective_days}} 天</text>
						<text class="mt-1" v-if="item.start_date_format!=null">有效期：{{item.start_date_format}} ~ {{item.end_date_format}}</text>
						<text class="mt-1">每人限领{{item.limited_collection_num}}张</text>
					</view>
			
					<view class="flex flex-1 align-center justify-center">
						<view class="rounded-1 flex align-center justify-center " style="background-color:#FF7200;height: 40rpx; width: 100rpx;"
						 @click="getTask(item.id)">
							<text v-if="type==1" style="font-size: 26upx;color: #fff;">领取</text>
							<text v-if="type==3" style="font-size: 26upx;color: #fff;">分享</text>
						</view>
					</view>
			
			
				</view>
				<!-- 使用范围 -->
				<view class="flex align-center justify-between pl-2 pr-2" style="height: 60rpx;background-color: #F8F8F8;" @click="toMingXi(item.id)">
					<text style="color: #9F9F9F;font-size: 20upx;">{{item.use_scope}}</text>
					<view class="flex align-center justify-between">
						<text style="font-size: 24rpx; color: #9f9f9f;">佣金明细</text>
						<!-- <image :src="showDetail?'../../static/common/arrowUp.png':'../../static/common/arrowDown.png'" style="width: 18rpx;height: 16rpx;margin-left: 10rpx;" ></image> -->
					</view>
				</view>
			
			</view>
		</view>
		


		<!-- 暂无数据 -->
		<view v-if="nodata==true" class="flex align-center justify-center flex-column" style="font-size: 28rpx;color: #9F9F9F;margin-top: 320rpx;">
			<image src="../../../static/common/no_task.png" style="height: 206rpx;width: 218rpx;"></image>
			<text style="margin-top: 20rpx;">目前暂无任务</text>
		</view>

		<uni-load-more :status="status" :content-text="contentText" v-if="!nodata" />



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
				index: 1,
				showDetail: false,
				showIndex: -1,
				show: false,
				type: 1,
				page: 1,
				reload: true,
				loadMore: false,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				listData: [],
				mingxiList: [],
				nodata: false,
				scrollH:0

			}
		},

		onLoad() {

			uni.getSystemInfo({
				success: (res) => {
					console.log(res.windowHeight)

					if (620 < res.windowHeight <= 688) {
						this.scrollH = 40
					}

					if (res.windowHeight <= 688) {
						this.scrollH = 40
					}

					if (688 < res.windowHeight <= 730) {
						this.scrollH = 40
					}

					if (730 < res.windowHeight <= 810) {
						this.scrollH = 40
					}

					if (810 < res.windowHeight <= 850) {
						this.scrollH = 80
					}

					if (res.windowHeight > 814) {

						this.scrollH = 80
					}
				}
			});

			this.getData()
		},

		onReachBottom() {
			this.loadMore = true;
			this.page++;
			if (this.status == 'noMore') {
				return;
			}
			this.status = 'loading';
			this.getData()
		},

		onPullDownRefresh() {
			this.reload = true;
			this.page = 1;
			this.status = 'more';
			this.getData()
		},

		methods: {

			toMingXi(id) {
				uni.navigateTo({
					url: '../yongJinMingXi/yongJinMingXi?id=' + id + "&type=3"
				})
			},


			getData() {

				let data = {
					type: this.type,
					size: 10,
					current: this.page,
				}

				// 发送到服务端
				$H.get("/merchant_task/page/all", data).then((res) => {
					uni.stopPullDownRefresh()
					//请求成功
					console.log(res)
					let list = res.data.records

					let pages = res.data.pages;

					console.log(this.page)
					if (pages > 1 && this.page <= pages) {
						this.listData = this.reload ? list : this.listData.concat(list);
						this.nodata = false;
					} else if (pages == 0) {
						this.listData = [];
						this.nodata = true;
						this.status = 'noMore'

					} else if (pages == 1) {
						this.listData = list
						this.status = 'noMore'
						this.nodata = false;
					} else {
						this.status = 'noMore'
					}

					this.reload = false;


				}).catch((e) => {
					uni.stopPullDownRefresh()
					//请求失败
					console.log("失败" + e)
				})
			},

			getTask(id) {

				let data = {
					merchant_task_id: id
				}

				// 发送到服务端
				$H.post("/merchant_receive_task", data).then((res) => {

					//请求成功
					uni.showModal({
						title: "领取成功",
						confirmColor: "#FF7200",
						showCancel: true,
						success: (res) => {
							if (res.confirm) {
								this.page = 1
								this.reload = true;
								this.status = 'more';
								this.getData()
							}
						}
					})


				}).catch((e) => {

					//请求失败
					console.log("失败" + e)
				})
			},


			switchType(num) {
				this.index = num;
				this.type = num
				this.page = 1
				this.reload = true;
				this.status = 'more';
				this.getData()

			},
			changeShow(ind) {
				this.showIndex = ind;
				this.showDetail = !this.showDetail
			}
		}
	}
</script>

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>
