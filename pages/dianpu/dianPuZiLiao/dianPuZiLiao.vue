<template>
	<view>
		<u-navbar title="店铺资料" :background="background" title-color="#000" :isBack="true" :customBack="askBack"></u-navbar>
		<view class="flex flex-column" style="width: 100%; height: 320rpx;position: absolute;" @click="chooseBg()">
			<image :src="bgImage" style="width: 100%; height: 320rpx;" mode="aspectFill"></image>
			<view class="flex align-center justify-center" style="height: 60rpx; background-color: #847b76; background:rgba(0,0,0,0.3);font-size: 32upx; color: #fff; position: relative;bottom: 0;">
				点击替换门头照
			</view>
		</view>

		<!-- 店铺全称 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;margin-top: 320rpx;height: 100rpx;">
			<text>店铺全称</text>
			<input style="text-align: end;" type="text" placeholder="填写店铺名称" placeholder-style="color: #9F9F9F;text-align: end;"
			 v-model="shopName" />
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 所在地区 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="chooseAddress()">
			<text>所在地区</text>
			<text :style="cityData.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{cityData}}</text>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 详细地址 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>详细地址</text>
			<input style="text-align: end;" type="text" value="" placeholder="输入具体店铺地址" placeholder-style="color: #9F9F9F;text-align: end;" v-model="address"/>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 店铺分类 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="toFenLei()">
			<text>店铺分类</text>
			<view class="flex align-center justify-between">
				<text :style="fenlei.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{fenlei}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 营业开始时间 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="selectTime(1)">
			<text>营业开始时间</text>
			<view class="flex align-center justify-between">
				<text :style="startTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 营业结束时间 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;" @click="selectTime(2)">
			<text>营业结束时间</text>
			<view class="flex align-center justify-between">
				<text :style="endTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime}}</text>
				<uni-icon :size="20" color="#000" type="arrowright" />
			</view>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>
		<divider :height="30"></divider>

		<!-- 联系电话 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>联系电话</text>
			<input style="text-align: end;" type="text" value="" placeholder="输入电话" placeholder-style="color: #9F9F9F;text-align: end;" v-model="phoneNumber"/>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 加粉微信号 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 100rpx;">
			<text>加粉微信号</text>
			<input style="text-align: end;" type="text" value="" placeholder="填写微信号,方便客户加你" placeholder-style="color: #9F9F9F;text-align: end;" v-model="wxNum"/>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<!-- 加粉微信二维码 -->
		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 32upx;height: 200rpx;">
			<view class="flex flex-column ">
				<text class="text-color" style="font-size: 32upx;">加粉微信二维码</text>
				<text class="mt-1" style="font-size: 30upx;color: #9F9F9F;">上传微信二维码，方便客户加你</text>
			</view>

			<!-- 选择图片 -->
			<view v-if="wxImage==''" class="flex flex-column align-center justify-center pl-1 pr-1" style="height: 140rpx;width: 140rpx;border:#eee solid 1rpx ;background-color: #eae8eb;"
			 @click="chooseWxImage()">
				<text class="font-bold" style="color: #9F9F9F;font-size: 56upx;">+</text>
				<text style="font-size: 24upx;color: #9F9F9F;">添加二维码</text>
			</view>

			<!-- 选择的图片 -->
			<view v-if="wxImage!=''" class="flex flex-column align-center justify-center pl-1 pr-1" style="height: 140rpx;width: 140rpx;"
			 @click="chooseWxImage()">
				<image :src="wxImage" style="height: 140rpx;width: 140rpx;"></image>
			</view>
		</view>
		<view class="pl-2 pr-2">
			<divider :height="4"></divider>
		</view>

		<divider :height="30"></divider>

		<view class="flex align-center justify-center" style="height: 80rpx; background-color: #FF7200;" @click="saveDianpu()">
			<text style="font-size: 32upx;color: #fff;">保存店铺信息</text>
		</view>


		<!-- 省市区选择器 -->
		<u-picker mode="region" v-model="showCity" :params="params" @confirm="chooseCity()"></u-picker>

		<!-- 时间选择器 -->
		<u-picker mode="time" v-model="showTime" :params="params" @confirm="chooseTime()"></u-picker>

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
	import divider from '@/components/divider.vue';
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import provinceData from "@/uview-ui/libs/util/province.js"
	import city from '@/uview-ui/libs/util/city.js'
	import area from '@/uview-ui/libs/util/area.js'
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';

	export default {
		components: {
			divider,
			uniIcon
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				params: {
					year: false,
					month: false,
					day: false,
					hour: true,
					minute: true,
					second: false,
					province: true,
					city: true,
					area: true,
					timestamp: false, // 1.3.7版本提供
				},
				index: -1,
				shopName: "",
				address:"",
				phoneNumber:"",
				wxNum:"",
				wxImage: "",
				showCity: false,
				showTime: false,
				cityData: "选择省/市/区",
				fenlei: "选择分类",
				startTime: "选择开始时间",
				endTime: "选择结束时间",
				bgImage: "../../../static/common/dianpu_bg.jpg",
				id: "",
				LogInfo: {},
				uptdateData: {
					merchant_name: "",
					province_code: "",
					area_code: "",
					city_code: "",
					address:"",
					business_start_ours:"",
					second_classification_id:"",
					first_classification_id:"",
					juridical_person_phone:"",
					wx_num:""
				},
				showPop:false,
				provinceData: [],
				city: [],
				area: [],
				getData:[],
				token:""
			}
		},

		onShow(data) {
			if (data) {
				// 获取返回的分类
				this.fenlei = data.secondeNmae
				this.uptdateData.first_classification_id=data.firstId
				this.uptdateData.second_classification_id=data.secondId
			}
		},

		onLoad() {
			this.LogInfo = $U.getStorage("LogInfo");
			// 初始化店铺信息
			this.InitData(this.LogInfo.merchant_id)
			this.initCityData(provinceData, city, area);
			this.token=$U.getStorage("token")
		},


		methods: {

            askBack:function(){
				this.showPop=true
			},

			
			quitDetail(){
				uni.navigateBack({
					delta:1
				})
			},

			initCityData(provinceData, city, area) {
				this.provinceData = provinceData;
				this.city = city;
				this.area = area

				

			},


			InitData(id) {

				let param = {
					id: id
				}

				// 发送到服务端
				$H.get("/merchant/details/" + id).then((res) => {
					//请求成功
					this.getData=res.data
					this.shopName = this.getData.merchant.merchant_name
					this.address =this.getData.merchant.address||""
					this.fenlei =this.getData.merchant.second_classification_name||"选择"
                    this.startTime=this.getData.merchant.business_start_ours||"选择开始时间"
					this.endTime=this.getData.merchant.business_end_ours||"选择结束时间"
					this.uptdateData.business_start_ours=this.startTime
					this.uptdateData.business_end_ours=this.endTime
					this.phoneNumber=this.getData.merchant.juridical_person_phone||""
					this.wxNum=this.getData.merchant.wx_num||""
					this.bgImage="https://"+this.getData.merchant.merchant_image||""
					this.wxImage="https://"+this.getData.merchant.wx_qr_code||""
					this.uptdateData.first_classification_id=this.getData.merchant.first_classification_id
					this.uptdateData.second_classification_id=this.getData.merchant.second_classification_id
					
					if (res.data.merchant.province_code != "") {
						this.getCityData(res.data.merchant.province_code, res.data.merchant.city_code, res.data.merchant.area_code)
                       this.uptdateData.province_code = this.getData.merchant.province_code
                       this.uptdateData.city_code = this.getData.merchant.city_code
                       this.uptdateData.area_code = this.getData.merchant.area_code
					}

				}).catch((e) => {

					//请求失败
					console.log("失败" + e)
				})
			},

			getCityData(province_code, city_code, area_code) {
				for (var i = 0; i < this.provinceData.length; i++) {
					if (province_code == this.provinceData[i].value) {
						this.cityData = this.provinceData[i].label + " "
					}
				}

				for (var i = 0; i < this.city.length; i++) {
					for (var j = 0; j < this.city[i].length; j++) {
						if (city_code == this.city[i][j].value) {
							this.cityData += this.city[i][j].label + " "
						
						}
					}
				}

				for (var i = 0; i < this.area.length; i++) {
					for (var j = 0; j < this.area[i].length; j++) {
						for (var z = 0; z < this.area[i][j].length; z++) {
							if (area_code == this.area[i][j][z].value) {
								this.cityData += this.area[i][j][z].label + " "
							
							}
						}
					}
				
				}
			},

			// 选择省市区
			chooseAddress() {
				this.showCity = true
			},
			chooseCity(res) {
				console.log(res)
				this.cityData = res.province.label + " " + res.city.label + " " + res.area.label
				this.uptdateData.province_code = res.province.value
				this.uptdateData.city_code = res.city.value
				this.uptdateData.area_code = res.area.value
			},


			// 选择营业时间
			selectTime(num) {
				this.showTime = true
				if (num == 1) {
					this.index = 1
				} else {
					this.index = 2
				}
			},
			chooseTime(res) {
				console.log(res)
				if (this.index == 1) {
					this.startTime = res.hour + "时" + res.minute + "分";
					this.uptdateData.business_start_ours=this.startTime
				} else {
					this.endTime = res.hour + "时" + res.minute + "分";
					this.uptdateData.business_end_ours=this.endTime
				}
				
			},

			// 选择头图
			chooseBg() {
				uni.chooseImage({
					count: 1, //默认9
					success: (res) => {
						this.bgImage = res.tempFilePaths[0]
						this.upLoadImage(this.bgImage,"topImg")
						
					}
				});
			},

			// 选择微信二维码
			chooseWxImage() {
				uni.chooseImage({
					count: 1, //默认9
					success: (res) => {
						this.wxImage = res.tempFilePaths[0]
						this.upLoadImage(this.wxImage,"wx")
					}
				});
			},
			
			
			upLoadImage(data,type){
				
				uni.showLoading({
					title:'上传图片中...',
				})
				
				uni.uploadFile({
					url:$C.baseUrl + '/merchant/upload_merchant_image',
					filePath:data,
					name:"file",
					header:{authorization:this.token},
					success: (res) => {
						uni.hideLoading()
						
						if(type=="wx"){
							this.uptdateData.wx_qr_code=JSON.parse(res.data).data.pictureUrl
						}
						else{
							this.uptdateData.merchant_image=JSON.parse(res.data).data.pictureUrl
						}
						
						
					},
					fail: (err) => {
						uni.hideLoading()
						console.log(err);
						
					}
				})
				
			
			},
			
			
			

			// 选择分类
			toFenLei() {
				uni.navigateTo({
					url: '../dianPuFenLei/dianPuFenLei'
				})
			},


			// 保存店铺信息
			saveDianpu() {
				
				this.uptdateData.merchant_name = this.shopName||""
				this.uptdateData.address = this.address||""
                this.uptdateData.second_classification_name = this.fenlei||""
				this.uptdateData.juridical_person_phone=this.phoneNumber||""
				this.uptdateData.wx_num=this.wxNum||""
				// 发送到服务端
				$H.put("/merchant", this.uptdateData).then((res) => {
					//请求成功
					uni.showToast({
						icon:'none',
						title:'保存成功',
						success() {
							uni.navigateBack({
								delta:1
							})
						}
					})

				}).catch((e) => {

					//请求失败
					console.log("失败" + e)
				})
			}

		}
	}
</script>

<style>

</style>
