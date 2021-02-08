<template>
	<view style="background-color: #F3F3F3; min-height: 100vh;" >
		<u-navbar title="多种型号设置" :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class=" bg-white mt-2 mb-2" style="min-height: 280rpx;" v-for="(item,index) in guiGe" :key="index">
			<view class="flex align-center justify-between">
				<view class=""></view>
				<view class="rounded-circle flex align-center justify-center mr-1  font-bold text-center" style="background-color: #8A8A8A;width: 36rpx;height: 36rpx;color: #FFFFFF;margin-left: 10rpx;" @tap.stop="deleteGuige(index)">
					<text style="margin-bottom: 5rpx;">x</text>
				</view>
			</view>
			<view class="flex align-center pl-2 pr-2 justify-between" style="height: 100rpx;">
				<text style="margin-left: 20rpx;">{{item.name}}</text>
				<input class="ml-2 pl-2" type="text" v-model="item.value"  placeholder="如颜色" placeholder-style="color: #9F9F9F;" style="border: solid 1rpx #C3C3C3;height: 70rpx; width: 560rpx;" />
			</view>
			
			<view class="flex align-center  pr-2  justify-between" style="height: 100rpx; margin-left: 100rpx;" v-for="(item2,index2) in item.content" :key="index2" >
				<view class="flex justify-between align-center" style="margin-left: 90rpx;">
					<view class="rounded-circle flex align-center justify-center mr-1" style="background-color: #FF7200;" @click="removeItem(index,index2)">
						<text class="text-center font-bold" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">一</text>
					</view>
					<text >型号</text>
				</view>
				<input class="ml-2 pl-2" type="text" v-model="item2.value" placeholder=" " placeholder-style="color: #9F9F9F;" style="border: solid 1rpx #C3C3C3;height: 70rpx; width: 400rpx;" />
			</view>
			
			<view class="flex align-center justify-center mt-1" @click="addXingHao(index)" style="height: 80rpx;">
				<view class="rounded-circle flex align-center justify-center mr-1 font-bold" style="background-color: #1879F1;width: 36rpx;height: 36rpx;color: #FFFFFF;font-size: 32upx;">
					+
				</view>
				<text class="ml-2">添加型号</text>
				
				
			</view>
			
			
		</view>
	
		
		<view class="flex align-center justify-center flex-column mt-3" @click="addGuiGe()">
			
			<view class="flex align-center justify-center" style="width: 210rpx;height: 72rpx;border: 1rpx solid #1D1200;border-radius: 50rpx;">
				+添加规格
			</view>
			<text class="mt-1" style="color: #8A8A8A;font-size: 24upx;">奖项数至少1个，最多2个</text>
			
		</view>
		
		<view class="" style="height: 200rpx;"></view>
		
		
		<view class="flex align-center justify-center fixed-bottom" style="background-color: #FF7200;height: 100rpx;font-size: 36rpx;color: #fff;"
		 @click="toNext()">
			 下一步 		
		</view>
		
		
		<!-- <view class="flex align-center justify-center " style="background-color: background-color: #F3F3F3;height: 200rpx;position: fixed;bottom: 0rpx;" @click="toNext()">
			<view class="main-bg-color flex align-center justify-center" style="font-size: 36rpx;color: #fff; height: 80rpx; width: 660rpx; border-radius: 10rpx;">
				 下一步 		 
			</view>
		</view> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				num:1,
				num2:1,
				num3:1,
				guiGe:[],
				data:[
					{
						levele:"1",
						name:"",
						content:[]
					},
					{
						levele:"2",
						name:"",
						content:[]
					}
				],
				
				xingHaoGuiGe1:[],
				xingHaoGuiGe2:[],
				name1:"",
				name2:""
			}
		},
		
		
		onLoad(data) {
			if(data.list){
				let list=JSON.parse(data.list)
				for (var i = 0; i < list.length; i++) {
					
					let data={
						name:'型号1',
						id:list[i].id,
						value:list[i].goods_model,
						goods_price:list[i].goods_price/100,
						goods_stock:list[i].goods_stock,
						picture_url:list[i].picture_url
					}
					
					if(list[i].goods_specification_grade==1){
						this.name1=list[i].goods_specifications
						this.xingHaoGuiGe1.push(data)
					
					}
					else{
						this.name2=list[i].goods_specifications
						this.xingHaoGuiGe2.push(data)
					}
					
				}
				
				this.num=this.xingHaoGuiGe1.length
				this.num3=this.xingHaoGuiGe2.length
				
				let data1={
					name:"规格一",
					id:1,
					value:this.name1,
					content:[]
				}
				
				let data2={
					name:"规格二",
					id:1,
					value:this.name2,
					content:[]
				}
			
				
				for(var i = 0; i < this.xingHaoGuiGe1.length; i++){
					data1.content.push(this.xingHaoGuiGe1[i])
				}
				
				this.guiGe.push(data1)
				
				if(this.name2!=""){
					for(var i = 0; i < this.xingHaoGuiGe2.length; i++){
						data2.content.push(this.xingHaoGuiGe2[i])
					}
					
					this.guiGe.push(data2)
				}
				
				
				this.num2=this.guiGe.length
				
				
				
			}
			else{
				let data={
					name:"规格一",
					id:1,
					value:"",
					content:[
						{
							name:'型号1',
							id:1,
							value:""
						}
					]
				}
				this.guiGe.push(data)
			}
			
			
			
		},
		
		methods: {
			
			// 显示第二个规格
			addGuiGe(){
				console.log(this.num2)
				this.num2++
				let data={
					name:'规格二',
					id:2,
					value:"",
					content:[
						{
							name:'型号1',
							id:1,
							value:""
						}
					]
				}
				if(this.num2<=2){
					this.guiGe.push(data)	
				}
				else{
					this.num2=2
					uni.showToast({
						icon:"none",
						title:"最多添加2个"
					})
				}
			},
			
			deleteGuige(index){
				if(index==1){
					this.num2--
					this.guiGe.pop(index)
				}
			},
			
			
			addXingHao(index){
				if(index==0){
					this.num++
					let data={
						name:'型号'+this.num,
						id:this.num,
						value:""
					}
					if(this.num<=5){
						this.guiGe[index].content.push(data)		
					}
					else{
						this.num=5
						uni.showToast({
							icon:"none",
							title:"最多添加5个"
						})
					}
				}
				else{
					this.num3++
					let data={
						name:'型号'+this.num3,
						id:this.num3,
						value:""
					}
					if(this.num3<=5){
						this.guiGe[index].content.push(data)		
					}
					else{
						this.num3=5
						uni.showToast({
							icon:"none",
							title:"最多添加5个"
						})
					}
				}
	            	
	
			},
			
			removeItem(index,index2){
				if(index==0){
					if(this.num>1){
					    this.num--
						this.guiGe[index].content.pop(index2)
					}
					else{
						return
					}
				
				}
				else{
					if(this.num3>1){
					    this.num3--
						this.guiGe[index].content.pop(index2)
					}
					else{
						return
					}
				}
                
				
			},
			
			toNext(){
				
				for (var i = 0; i < this.guiGe.length; i++) {
					this.data[i].name=this.guiGe[i].value
					this.data[i].levele=i+1
					if(this.guiGe[i].value==""){
						uni.showToast({
							icon:"none",
							title:"请填写完整"
						})
						return;
					}
					
					for (var j = 0; j < this.guiGe[i].content.length; j++) {
						this.data[i].content.push(this.guiGe[i].content[j])
						if(this.guiGe[i].content[j].value==""){
							uni.showToast({
								icon:"none",
								title:"请填写完整"
							})
							return;
						}
					}
				}
				console.log("还好好"+JSON.stringify(this.data))
				uni.navigateTo({
					url:"../xingHaoJuTiSetting/xingHaoJuTiSetting?data="+JSON.stringify(this.data),
					success: () => {
						this.data=[
					{
						name:"",
						content:[]
					},
					{
						name:"",
						content:[]
					}
				]
					}
				})
				
				
			}
		}
	}
</script>

<style>

</style>
