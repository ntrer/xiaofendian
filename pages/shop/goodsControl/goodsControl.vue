<template>
	<view>
		<u-navbar title="商品管理" :background="background" title-color="#000" :isBack="true"></u-navbar>


              <u-dropdown ref="uDropdown" active-color="#FF7200">
              	<u-dropdown-item v-model="value1" title="商品状态" :options="options1" @change="changeState()"></u-dropdown-item>
              	<u-dropdown-item v-model="value1" title="排序方式" :options="options3" @change="changeOrder()"></u-dropdown-item>
              </u-dropdown>
           
			<divider :height="4"></divider>
		<view  class="bg-white" >
			<view class="pl-2 pr-2" v-for="(item,index) in listData" :key="index" @click="toGoodsDetail(item.id)">
				<view class="flex align-center justify-between  " style="height: 220rpx;">
					<view class="flex align-center justify-between">
						<image :src="'http://'+item.top_picture" style="width: 160rpx;height: 160rpx;" mode="aspectFill"></image>
						<view class="flex flex-column  ml-2 justify-between" style="height: 160rpx;">
							<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;width: 360rpx;">{{item.goods_name}}</text>
							<text class=" mt-1" style="color: #8A8A8A;font-size: 26upx;">已售{{item.sold_num}}件|库存{{item.goods_stock}}件</text>
						</view>
					</view>

					<view class="flex flex-column justify-between align-end" style="height: 160rpx;text-align: end;">
						<image src="../../../static/common/option.png" style="height: 40rpx;width: 40rpx;" @click.stop="chooseOption(item.id)"></image>
						<text class=" font-bold " style="color: #FF7200;font-size: 32upx;">￥{{item.goods_price_show}}</text>
					</view>


				</view>
				<divider :height="4"></divider>
			</view>
			
			<uni-load-more :status="status" :content-text="contentText" v-if="!nodata" />
			
		</view>
		
		

		<u-popup v-model="showPop" mode="bottom" border-radius="20" height="20%" :closeable="false">
			<view class="flex flex-column" style="height: 100%;">
				<view class="flex align-center justify-center flex-1">
					<image src="../../../static/common/yulan.png" style="height: 40rpx;width: 40rpx;"></image>
					<text class="ml-1">预览</text>
				</view>
				<divider :height="4"></divider>
				<view class="flex align-center justify-center flex-1">
					<image src="../../../static/common/fenxiang.png" style="height: 40rpx;width: 40rpx;"></image>
					<text class="ml-1">分享</text>
				</view>
				<divider :height="4"></divider>
				<view class="flex align-center justify-center flex-1" @click="deleteGoods(selectIndex)">
					<image src="../../../static/common/shanchu.png" style="height: 40rpx;width: 40rpx;"></image>
					<text class="ml-1">删除</text>
				</view>
			</view>

		</u-popup>


		<u-modal v-model="showPop2" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="确定删除这个商品？"
		 :show-confirm-button="true" :show-cancel-button="true" :confirm-style="{backgroundColor:'#FF7200',color: '#fff'}"
		 @confirm="deleteConfirm()">
			<view class="flex  flex-column pl-3 pr-3 text-color mt-2 align-center justify-center" style="height: 160rpx;">
				<text>被删除的商品，你和客户将无法看见</text>
			</view>
		</u-modal>


        <!-- 暂无数据 -->
        <view v-if="nodata==true"  class="flex align-center justify-center flex-column" style="font-size: 28rpx;color: #9F9F9F;margin-top: 320rpx;">
        	<image src="../../../static/common/no_yongjin_data.png" style="height: 206rpx;width: 218rpx;"></image>
        	<text style="margin-top: 20rpx;">目前暂无数据</text>
        </view>
        
        

        

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
				typeIndex: 1,
				value1: 1,
				value2: 1,
				sell: 0,
				noSell: 0,
				showPop: false,
				showPop2: false,
				selectIndex: 0,
				options1: [{
						label: '全部',
						value: 1,
					},
					{
						label: '上架中',
						value: 2,
					},
					{
						label: '已上架',
						value: 3,
					}
				],

				options3: [{
						label: '上架时间由近到远',
						value: 1,
					},
					{
						label: '销量多少',
						value: 2,
					}
				],
				page: 1,
				show: false,
				reload: true,
				loadMore: false,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				listData: [],
				is_put_shelves: "",
				is_asc: 1,
				nodata:false,
				scrollH:0,
				deleteId:""
			}
		},
		
		onShow() {
			this.reload = true;
			this.page = 1;
			this.status = 'more';
			this.getData()
		},

		onLoad() {
			
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - uni.upx2px(160)
				}
			});
			
			
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

            toGoodsDetail(id){
				uni.navigateTo({
					url:'../createGoods/createGoods?id='+id
				})
			},

			changeState(index) {
				if (index == 1) {
					this.is_put_shelves = ""
				} else if (index == 2) {
					this.is_put_shelves = -1
				} else {
					this.is_put_shelves = 1
				}

				this.reload = true;
				this.page = 1;
				this.status = 'more';
				this.getData()
			},

			changeOrder(index) {
				console.log(index)
				this.is_asc = index

				this.reload = true;
				this.page = 1;
				this.status = 'more';
				this.getData()
			},

			chooseOption(index) {
				this.showPop = true
				this.selectIndex = index
			},

			deleteGoods(id) {
				this.showPop = false
				this.showPop2 = true
                this.deleteId=id
			},

			deleteConfirm() {
              // 发送到服务端
              $H.get("/goods/delete/"+ this.deleteId).then((res) => {
              	//请求成功				
              	console.log(res)
              	uni.showToast({
              		title:"删除成功",
              		icon:'success',
              		complete: () => {
              			setTimeout(() => {
              				this.reload = true;
              				this.page = 1;
              				this.status = 'more';
              				this.getData()
              			}, 1000)
              		}
              	})
              	
              }).catch((e) => {
              	
              	//请求失败
              	console.log("失败"+e)
              })
			},

			getData() {
				let data = {
					size: 10,
					current: this.page,
					is_asc:this.is_asc,
					is_put_shelves:this.is_put_shelves
				}

				// 发送到服务端
				$H.get("/goods/page/all", data).then((res) => {
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
			}


		}
	}
</script>

<style>

</style>
