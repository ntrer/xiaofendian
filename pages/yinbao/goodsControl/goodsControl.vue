<template>
	<view>
		<u-navbar title="商品管理" :background="background" title-color="#000" :isBack="true"></u-navbar>

		<u-dropdown ref="uDropdown" active-color="#FF7200">
			<u-dropdown-item v-model="value1" title="商品状态" :options="options1" @change="changeState()"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="分类" :options="options2" @change="changeCagator()"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="排序方式" :options="options3" @change="changeOrder()"></u-dropdown-item>
		</u-dropdown>


		<view class="bg-white">
			<view class="pl-2 pr-2" v-for="(item,index) in 2" :key="index">
				<view class="flex align-center justify-between  " style="height: 220rpx;">
					<view class="flex align-center justify-between">
						<image src="../../../static/common/live_logo.png" style="width: 160rpx;height: 160rpx;"></image>
						<view class="flex flex-column  ml-2 justify-between" style="height: 160rpx;">
							<text class="text-color" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;width: 360rpx;">商品券名称比较长的名字是德甲还记得上次时间长参加深刻的基础肯定</text>
							<text class=" mt-1" style="color: #8A8A8A;font-size: 26upx;">已售{{sell}}件|库存{{noSell}}件</text>
						</view>
					</view>

					<view class="flex flex-column justify-between align-end" style="height: 160rpx;text-align: end;">
						<image src="../../../static/common/option.png" style="height: 40rpx;width: 40rpx;" @click="chooseOption(index)"></image>
						<text class=" font-bold " style="color: #FF7200;font-size: 32upx;">￥0.02-555</text>
					</view>


				</view>
				<divider :height="4"></divider>
			</view>
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
				typeIndex: 1,
				value1: 1,
				value2: 2,
				value3: 3,
				sell: 0,
				noSell: 0,
				showPop: false,
                showPop2:false,
				selectIndex:0,
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

				options2: [{
						label: '全部',
						value: 1,
					},
					{
						label: '测试',
						value: 2,
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
			}
		},
		methods: {
			switchType(num) {
				this.typeIndex = num;
			},

			changeState(index) {

			},

			changeCagator(index) {

			},

			changeOrder(index) {

			},

			chooseOption(index) {
				this.showPop = true
				this.selectIndex=index
			},
			
			deleteGoods(index){
				this.showPop=false
				this.showPop2=true
				
			},
			
			deleteConfirm(){
				
			}
		}
	}
</script>

<style>

</style>
