<template>
	<view >
		<u-navbar title="商品详情" :background="background" title-color="#000" :isBack="true" :custom-back="backToSave"></u-navbar>
		
		<view class=" bg-white pb-2 pt-2 mt-2">
			
			<view class="" v-for="(item,index) in goodsDetailsJson" :key="index">
				<!-- 文字 -->
				<view  v-if="item.type==1" class="pl-2 ml-2 mr-2 mt-2" style="height: 280rpx;border-radius: 2px;border: 1px solid #C3C3C3;">
					<view class="flex  justify-between">
						<textarea  placeholder="请输入活动描述，不超过1000个字…" placeholder-style="color:#C3C3C3"  style="width: 80%" class="p-1"  v-model="item.text"/>
						
						<view class=" flex flex-column justify-between pb-2 pr-2 align-end">
							
							<view class="rounded-circle flex  align-center justify-center mt-1" style="background-color: #FF7200;float: right;width: 36rpx;height: 36rpx;" @click="deleteTextOrImage(index)">
								<text class="text-center font-bold" style="color: #FFFFFF;font-size: 24upx;">一</text>
							</view>
							
							<view class="" style="color: #8A8A8A;font-size: 24upx;">
								<text>{{item.text.length}}/1000</text>
							</view>
						</view>
						
						
						
					</view>
				
					
				</view>
				
				<!-- 图片 -->
				<view v-if="item.type==2" class="ml-2 mr-2 mt-2">
					<view class="rounded-circle flex  align-center justify-center mt-1" style="background-color: #FF7200;float: right;width: 36rpx;height: 36rpx;position: absolute;right: 40rpx;" @click="deleteTextOrImage(index)">
						<text class="text-center font-bold" style="color: #FFFFFF;font-size: 24upx;">一</text>
					</view>
					<image :src="item.pictureUrl" style="width: 100%;" mode="widthFix"></image>
				</view>
			</view>
			
		</view>
		
		
		<view class="flex align-center  mt-3 mb-3" style="margin-left: 120rpx;margin-right: 120rpx;">
			<view class="flex-1 mr-2 flex align-center justify-center text-color" style="border-radius: 36rpx;border: #1D1200 solid 1rpx;height: 72rpx;"
			 @click="addContent(1)">
				添加文案
			</view>
			<view class="flex-1 ml-2 flex align-center justify-center text-color" style="border-radius: 36rpx;border: #1D1200 solid 1rpx;height: 72rpx;" @click="addContent(2)">
				添加图片
			</view>
		</view>
		
		
		<view class="" style="height: 100rpx;"></view>
		
		<view class="flex align-center justify-center fixed-bottom" style="background-color: #FF7200;height: 100rpx;font-size: 36rpx;color: #fff;"
		 @click="saveDetail()">
			 确认 		
		</view>
		
		<u-modal v-model="showPop" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="温馨提示"
		 :show-confirm-button="true" :show-cancel-button="true" :confirm-style="{backgroundColor:'#FF7200',color: '#fff'}"
		 @confirm="quitDetail()">
			<view class="flex  flex-column pl-3 pr-3 text-color mt-2 align-center justify-center" style="height: 140rpx;">
				<text>你有未保存的内容，确认退出吗?</text>	
			</view>
		</u-modal>
		
	</view>
</template>


<script>
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				wordslength:0,
				showPop:false,
				goodsDetailsJson:[
				],
				detailId:[]
				
			}
		},
		
		onLoad(data) {
			if(data.list){
				let list=JSON.parse(data.list)
				console.log(list)
				for (var i = 0; i < list.length; i++) {
					let data={
						type:list[i].type,
						pictureUrl:list[i].pictureUrl,
						text:list[i].text
					}
					this.goodsDetailsJson.push(data)
					
				}
			}
			
			
		},
		
		methods: {
			
			backToSave:function(){
				this.showPop=true
			},
			
			quitDetail(){
				uni.navigateBack({
					delta:1
				})
			},
			
			addContent(index){
				if(index==1){
					let data={
						type:1,
						pictureUrl:"",
						text:""
					}
					this.goodsDetailsJson.push(data)
				}
				else{
					this.toChooseImage()
				}
				
				
				
			},
			
			toChooseImage(){
				
				uni.chooseImage({
				   count: 9, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					
					for (var i = 0; i < res.tempFilePaths.length; i++) {
						let data={
							type:2,
							pictureUrl:res.tempFilePaths[i],
							text:""
						}
						this.goodsDetailsJson.push(data)
					}
					
					
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			},
			
			deleteTextOrImage(index){
				this.goodsDetailsJson.splice(index, 1);
				console.log(this.types)
			},
			
			
			
			saveDetail(){
				
				let data={
					goodsDetailsJson:this.goodsDetailsJson
				}
				
				// 发送到服务端
				$H.get("/goods_details",data).then((res) => {
					//请求成功
					console.log(res)
				    
					for (var i = 0; i < res.data.length; i++) {
						this.detailId.push(res.data[i].id)
					}
				
				    // 获取当前页面栈
				    let pages = getCurrentPages()
				    // pages数组中的最后一个为当前页面，倒数第二个为上一个页面
				    let prevPage = pages[pages.length - 2]
				    
				    // 重点来了
				    // 调用$vm 注册一个自定义方法 将参数传入进去
				    prevPage.onShow(this.detailId)
				    // 然后调用navigateBack返回页面
				    uni.navigateBack({
				      	// 这个属性表示返回1个页面
				      	delta: 1
				    })
				
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
