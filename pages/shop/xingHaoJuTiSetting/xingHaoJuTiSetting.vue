<template>
	<view>
		<u-navbar title="多种型号设置" :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex align-center justify-between bg-white pl-2 pr-2 text-color" style="height: 100rpx;">
		
			<text>所有型号统一价格</text>
		
			<u-switch v-model="open1" active-color="#FF7200" inactive-color="#D8D8D8" @change="change1"></u-switch>
		
		</view>
		
		<view class="ml-2 mr-2">
			<divider height="4"></divider>
		</view>
		
		<view class="flex align-center justify-between bg-white pl-2 pr-2 text-color" style="height: 100rpx;">
		
			<text>所有型号统一库存</text>
		
			<u-switch v-model="open2" active-color="#FF7200" inactive-color="#D8D8D8" @change="change2"></u-switch>
		
		</view>
		
		
		<!-- 列表 -->
		<view class="flex flex-column" v-for="(item,index) in datas" :key="index">
			<divider :height="20"></divider>
			<view class="pl-2 pr-2" style="height: 490rpx;">
				
				<view class="flex align-center justify-between" style="height: 100rpx;">
					<view class="flex align-center text-color">
						<text>{{item.name}}</text>
						<text class="ml-2">{{item.content}}</text>
					</view>
					
					<view class="" style="color: #C3C3C3;">{{index+1}}/{{datas.length}}</view>
				</view>
				
				<view class="flex align-center" style="height: 100rpx;">
					<text>价格</text>
					<input class="ml-2 pl-2" type="text" v-model="item.value1"  placeholder="输入价格" placeholder-style="color: #9F9F9F;" style="border: solid 1rpx #C3C3C3;height: 70rpx; width: 600rpx;" />
				</view>
				
				<view class="flex align-center" style="height: 100rpx;">
					<text>库存</text>
					<input class="ml-2 pl-2" type="text" v-model="item.value2"  placeholder="输入库存数量" placeholder-style="color: #9F9F9F;" style="border: solid 1rpx #C3C3C3;height: 70rpx; width: 600rpx;" />
				</view>
				
				<view class="flex align-center " style="height: 180rpx;">
					<text>图片</text>
					<view v-if="!item.img" class="flex align-center justify-center ml-2" style="border: solid 1rpx #C3C3C3;height: 160rpx;width: 150rpx;font-size: 120rpx;color: #D8D8D8;background-color: #E9E9E9;" @click="chooseImage(index)">
						<text style="margin-bottom: 20rpx;">+</text>
					</view>
					
					<view v-if="item.img" class="flex align-center justify-center ml-2" style="height: 160rpx;width: 150rpx;" @click="chooseImage(index)">
						<image :src="item.img" mode="aspectFill" style="height: 160rpx;width: 150rpx;"></image>
					</view>
					
					<text class="ml-2" style="font-size: 24rpx;color: #8A8A8A;margin-top: 120rpx;">不上传则显示商品主图</text>
				</view>
				
				
			</view>
		</view>
		
		<view class="" style="height: 180rpx;"></view>
		
		<view class="flex align-center justify-between pl-2 pr-2 fixed-bottom bg-white" style="height: 160rpx;">
			
			<view class="flex align-center justify-center font-bold flex-1 mr-2" style="border-radius: 50rpx;border: #FF7200 1rpx solid;font-size: 28rpx;color: #FF7200;height: 80rpx;" @click="goBack()">
				上一步
			</view>
			
			<view class="flex align-center justify-center font-bold flex-1 ml-2" style="border-radius: 50rpx;font-size: 28rpx;color: #fff;background-color:#FF7200 ;height: 80rpx;" @click="saveSetting()">
				完成
			</view>
			
		</view>
		
		
		<u-modal v-model="showPop" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="提示"
		 :show-confirm-button="true" :show-cancel-button="true" :confirm-style="{backgroundColor:'#FF7200',color: '#fff'}"
		 @confirm="ConfirmPrice()" @cancel="cancelPrice()">
			<view class="flex   pl-2 pr-2 text-color mt-2 align-center justify-center" style="height: 160rpx;">
				<text>请输入统一价格</text>	
				<input class="ml-2 pl-2" type="text" v-model="priceData"  placeholder="输入价格" placeholder-style="color: #9F9F9F;" style="border: solid 1rpx #C3C3C3;height: 70rpx; width: 260rpx;" />
			</view>
		</u-modal>
		
		<u-modal v-model="showPop2" :title-style="{color: '#000',fontSize:'50upx',fontWeight:'600'}" title="提示"
		 :show-confirm-button="true" :show-cancel-button="true" :confirm-style="{backgroundColor:'#FF7200',color: '#fff'}"
		 @confirm="ConfirmKuCun()" @cancel="cancelKuCun()">
			<view class="flex   pl-2 pr-2 text-color mt-2 align-center justify-center" style="height: 160rpx;">
				<text>请输入统一库存</text>	
				<input class="ml-2 pl-2" type="text" v-model="kuCunData"  placeholder="输入库存数量" placeholder-style="color: #9F9F9F;" style="border: solid 1rpx #C3C3C3;height: 70rpx; width: 260rpx;" />
			</view>
		</u-modal>
		
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	export default {
		components:{
			divider,
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				dataList:[],
				datas:[],
				open1: false,
				open2:false,
				showPop:false,
				showPop2:false,
				mTop:"",
				priceData:"",
				kuCunData:"",
				goods_specifications_model_json:[
					
				]
			}
		},
		
		onLoad(e) {
			if(e.data){
				this.dataList=JSON.parse(decodeURIComponent(e.data))
				
				for (var i = 0; i < this.dataList.length; i++) {
					
					for (var j = 0; j <  this.dataList[i].content.length; j++) {
						
						if(this.dataList[i].value==this.dataList[i++].value){
							i--
						}
						
						let data={
							levele:this.dataList[i].levele,
							name:this.dataList[i].name,
							id:this.dataList[i].content[j].id,
							content:this.dataList[i].content[j].value,
							value1:this.dataList[i].content[j].goods_price||"",
							value2:this.dataList[i].content[j].goods_stock||"",
							img:this.dataList[i].content[j].picture_url||""
						}
						this.datas.push(data)
					}
				}
				console.log(this.dataList)
				console.log("=============")
				console.log(this.datas)
				console.log("=============")
			}
			
		},
		
		methods: {
			
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			
			change1(status){
				this.showPop=status
			},
			
			change2(status){
				this.showPop2=status
			},
			
			ConfirmPrice(){
				for (var i = 0; i < this.datas.length; i++) {
					 this.datas[i].value1=this.priceData
				}
			},
			
			ConfirmKuCun(){
				for (var i = 0; i < this.datas.length; i++) {
					 this.datas[i].value2=this.kuCunData
				}
			},
			
			cancelPrice(){
				this.open1=false
			},
			
			cancelKuCun(){
				this.open2=false
			},
			
			chooseImage(index){
				uni.chooseImage({
					count: 1, //默认9
					success: (res) => {
						this.datas[index].img=res.tempFilePaths[0]
					},
					fail: (err) => {
						console.log(err)
					}
				});
			},
			
			saveSetting(){
				for (var i = 0; i < this.datas.length; i++) {
					let data={
						
							goodsSpecificationGrade: this.datas[i].levele,//NULL规格等级 1:规格1 2:规格2
							goodsSpecifications:this.datas[i].name,//规格名称
							goodsModel:this.datas[i].content,//型号名称
							goodsPrice:this.datas[i].value1,//商品价格
							goodsStock:this.datas[i].value2,//商品库存
							pictureUrl:this.datas[i].img//图片路径
						
					}
					this.goods_specifications_model_json.push(data)
				}
				this.goods_specifications_model_json=this.goods_specifications_model_json.sort(this.compare("goodsPrice"))
                 
				 // 获取当前页面栈
				 let pages = getCurrentPages()
				 // pages数组中的最后一个为当前页面，倒数第二个为上一个页面
				 let prevPage = pages[pages.length - 3]
				 
				 // 重点来了
				 // 调用$vm 注册一个自定义方法 将参数传入进去
				 prevPage.onShow(this.goods_specifications_model_json)
				 // 然后调用navigateBack返回页面
				 uni.navigateBack({
				   	// 这个属性表示返回1个页面
				   	delta: 2
				 })
				 
			},
			
			compare(property){
			    return function(a,b){
			        var value1 = a[property];
			        var value2 = b[property];
			        return value1 - value2;
			    }
			}
			
			
		}
	}
</script>

<style>

</style>
