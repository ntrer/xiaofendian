(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/shop/createGoods/createGoods"],{

/***/ 363:
/*!********************************************************************************************!*\
  !*** D:/HbuilderProject/b端小程序/main.js?{"page":"pages%2Fshop%2FcreateGoods%2FcreateGoods"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _createGoods = _interopRequireDefault(__webpack_require__(/*! ./pages/shop/createGoods/createGoods.vue */ 364));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_createGoods.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 364:
/*!***********************************************************************!*\
  !*** D:/HbuilderProject/b端小程序/pages/shop/createGoods/createGoods.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGoods.vue?vue&type=template&id=f8c7c476& */ 365);
/* harmony import */ var _createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGoods.vue?vue&type=script&lang=js& */ 367);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__["render"],
  _createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/shop/createGoods/createGoods.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 365:
/*!******************************************************************************************************!*\
  !*** D:/HbuilderProject/b端小程序/pages/shop/createGoods/createGoods.vue?vue&type=template&id=f8c7c476& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createGoods.vue?vue&type=template&id=f8c7c476& */ 366);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_template_id_f8c7c476___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 366:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HbuilderProject/b端小程序/pages/shop/createGoods/createGoods.vue?vue&type=template&id=f8c7c476& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uNavbar: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-navbar/u-navbar */ "uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 515))
  },
  uniIcon: function() {
    return __webpack_require__.e(/*! import() | components/uni-icon/uni-icon */ "components/uni-icon/uni-icon").then(__webpack_require__.bind(null, /*! @/components/uni-icon/uni-icon.vue */ 420))
  },
  uSwitch: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-switch/u-switch */ "uview-ui/components/u-switch/u-switch").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-switch/u-switch.vue */ 589))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 367:
/*!************************************************************************************************!*\
  !*** D:/HbuilderProject/b端小程序/pages/shop/createGoods/createGoods.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createGoods.vue?vue&type=script&lang=js& */ 368);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 368:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HbuilderProject/b端小程序/pages/shop/createGoods/createGoods.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































































































var _request = _interopRequireDefault(__webpack_require__(/*! @/common/request.js */ 46));
var _config = _interopRequireDefault(__webpack_require__(/*! @/common/config.js */ 47));
var _util = _interopRequireDefault(__webpack_require__(/*! @/common/util.js */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var divider = function divider() {__webpack_require__.e(/*! require.ensure | components/divider */ "components/divider").then((function () {return resolve(__webpack_require__(/*! @/components/divider.vue */ 534));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniIcon = function uniIcon() {__webpack_require__.e(/*! require.ensure | components/uni-icon/uni-icon */ "components/uni-icon/uni-icon").then((function () {return resolve(__webpack_require__(/*! @/components/uni-icon/uni-icon.vue */ 420));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  components: {
    divider: divider,
    uniIcon: uniIcon },

  data: function data() {
    return {
      background: {
        backgroundColor: '#fff' },

      open: false,
      imageList: [],
      goods_main_picture_idList: [],
      goods_details_idList: [],
      goods_details_list: [],
      goods_specifications_model_json: [],
      goods_specifications_model_list: [],
      goods_name: "",
      goods_price: "",
      goods_stock: "",
      is_hide: -1,
      set_multi_model: -1,
      showKuCun: true,
      id: "" };

  },

  onLoad: function onLoad(e) {
    if (e.id) {
      this.id = e.id;
      this.getData(e.id);
    }

  },

  onShow: function onShow(data) {
    console.log("进来了" + this.set_multi_model);
    if (data) {

      // 获取返回的分类
      if (data[0].goodsPrice == null || data[0].goodsPrice == undefined) {
        this.goods_details_idList = data;
        console.log(data);
        console.log(this.goods_details_idList);
      } else
      {

        this.goods_specifications_model_json = data;
        // 隐藏库存
        if (data) {
          this.showKuCun = false;
          this.set_multi_model = 1;
        }
        if (this.goods_specifications_model_json[0].goodsPrice != this.goods_specifications_model_json[this.goods_specifications_model_json.length - 1].goodsPrice) {
          this.goods_price = this.goods_specifications_model_json[0].goodsPrice + "-" + this.goods_specifications_model_json[this.goods_specifications_model_json.length - 1].goodsPrice;
        } else
        {
          this.goods_price = this.goods_specifications_model_json[0].goodsPrice;
        }

      }
    }
  },

  methods: {

    // 获取详情
    getData: function getData(id) {var _this = this;
      // 发送到服务端
      _request.default.get("/goods/detail/" + id).then(function (res) {
        //请求成功				
        console.log(res);
        _this.goods_name = res.data.goods_name;
        _this.goods_price = res.data.goods_price_show;
        if (res.data.set_multi_model == 1) {
          _this.showKuCun = false;
        } else
        {
          _this.goods_stock = res.data.goods_stock;
        }

        if (res.data.goods_main_picture_list.length > 0) {
          for (var i = 0; i < res.data.goods_main_picture_list.length; i++) {
            _this.imageList.push("http://" + res.data.goods_main_picture_list[i].picture_url);
          }
          console.log(_this.imageList);
        }


        _this.goods_details_list = res.data.goods_details_list;
        _this.goods_specifications_model_list = res.data.goods_specifications_model_list;
        for (var i = 0; i < _this.goods_details_list.length; i++) {
          _this.goods_specifications_model_json.push(_this.goods_details_list[i].id);
        }

        for (var i = 0; i < res.data.goods_details_list.length; i++) {
          _this.goods_details_idList.push(res.data.goods_details_list[i].id);
        }


        if (res.data.is_hide == -1) {
          _this.open = false;
        } else
        {
          _this.open = true;
        }

      }).catch(function (e) {

        //请求失败
        console.log("失败" + e);
      });
    },



    //是否开启隐藏
    change: function change(status) {
      console.log(status);
      this.open = status;
      if (this.open) {
        this.is_hide = 1;
      } else
      {
        this.is_hide = -1;
      }
    },

    confirmFabu: function confirmFabu() {

      if (this.set_multi_model == -1) {
        if (this.goods_stock == "" || this.goods_price == "") {
          uni.showToast({
            icon: 'none',
            title: "请填写完整" });

          console.log("空了1");
          return;
        }
      }


      if (this.goods_name == "" || this.goods_price == "" || this.goods_details_idList.length == 0) {
        uni.showToast({
          icon: 'none',
          title: "请填写完整" });




        return;
      }

      console.log("空了2" + this.set_multi_model);

      var data = {
        goods_main_picture_id_list: JSON.stringify(this.goods_main_picture_idList) || "",
        goods_details_id_list: JSON.stringify(this.goods_details_idList),
        goods_specifications_model_json: this.set_multi_model == 1 ? JSON.stringify(this.goods_specifications_model_json) : "",
        goods_name: this.goods_name,
        goods_price: this.set_multi_model == -1 ? this.goods_price : "",
        goods_stock: this.goods_stock || "",
        is_hide: this.is_hide,
        set_multi_model: this.set_multi_model,
        id: this.id || "" };


      // 发送到服务端
      _request.default.post("/goods", data).then(function (res) {
        //请求成功
        uni.showToast({
          title: "创建成功",
          icon: 'success',
          complete: function complete() {
            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 1000);
          } });



      }).catch(function (e) {

        //请求失败
        console.log("失败" + e);
      });


    },

    // 型号设置
    toXingHaoSetting: function toXingHaoSetting() {

      if (this.goods_specifications_model_list.length > 0) {
        uni.navigateTo({
          url: '../xingHaoSeting/xingHaoSeting?list=' + JSON.stringify(this.goods_specifications_model_list) });

      } else
      {
        uni.navigateTo({
          url: '../xingHaoSeting/xingHaoSeting' });

      }

    },


    toGoodsDetail: function toGoodsDetail() {
      if (this.goods_details_list.length > 0) {
        uni.navigateTo({
          url: '../goodsDetail/goodsDetail?list=' + JSON.stringify(this.goods_details_list) });

      } else
      {
        uni.navigateTo({
          url: '../goodsDetail/goodsDetail' });

      }

    },

    toGoodsCatagor: function toGoodsCatagor() {
      uni.navigateTo({
        url: '../selectCatagor/selectCatagor' });

    },

    chooseImage: function chooseImage() {var _this2 = this;
      if (this.imageList.length <= 9) {
        uni.chooseImage({
          count: 9, //默认9
          success: function success(res) {
            console.log(res.tempFilePaths);
            _this2.imageList = res.tempFilePaths;
            _this2.uploadImage(_this2.imageList);
          },
          fail: function fail(err) {
            console.log(err);
          } });

      } else {
        uni.showToast({
          icon: "none",
          title: "最多上传9张" });

      }
    },

    uploadImage: function uploadImage(imageList) {var _this3 = this;

      var data = {
        files: imageList };


      var token = _util.default.getStorage("token");
      //发送图片或者视频到服务器
      uni.showLoading({
        title: "上传图片中..." });

      for (var i = 0; i < imageList.length; i++) {
        uni.uploadFile({
          url: _config.default.baseUrl + '/goods_main_picture',
          filePath: imageList[i],
          name: 'file',
          header: { // 设置请求的 header
            'authorization': token },

          success: function success(uploadFileRes) {
            uni.hideLoading();
            console.log(JSON.parse(uploadFileRes.data).data);
            // JSON.parse(uploadFileRes)
            _this3.goods_main_picture_idList.push(JSON.parse(uploadFileRes.data).data);
          },
          fail: function fail(res) {
            uni.showToast({
              title: res });

          } });

      }



      // // 发送到服务端
      // $H.post("/goods_main_picture",data).then((res) => {
      // 	//请求成功
      // 	console.log(res)

      // }).catch((e) => {

      // 	//请求失败
      // 	console.log("失败"+e)
      // })
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[363,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/shop/createGoods/createGoods.js.map