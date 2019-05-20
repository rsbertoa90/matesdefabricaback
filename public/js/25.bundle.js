webpackJsonp([25],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/Img-modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Img_modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/pedido.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pedido_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/tutorial.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__tutorial_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    components: { carousel: __WEBPACK_IMPORTED_MODULE_1__Img_modal_vue___default.a, pedido: __WEBPACK_IMPORTED_MODULE_2__pedido_vue___default.a, tutorial: __WEBPACK_IMPORTED_MODULE_3__tutorial_vue___default.a },
    data: function data() {
        return {
            selectedCategory: null,
            selector: {
                code: '',
                name: '',
                product: null,
                units: 0
            },

            list: [],
            showCarousel: false,
            carouselProduct: null
        };
    },


    watch: {
        'selector.code': function selectorCode() {
            var vm = this;
            var res = false;
            this.categories.forEach(function (cat) {
                cat.products.forEach(function (prod) {
                    if (vm.selector.code == prod.code) {
                        vm.selector.product = prod;
                        vm.selector.name = prod.name;
                        res = true;
                    }
                });
            });
            if (!res) {
                vm.selector.product = null;
                vm.selector.name = '';
            }
        },
        total: function total() {
            var result = [];
            var vm = this;
            vm.categories.forEach(function (category) {
                var prods = category.products.filter(function (el) {
                    return el.units != null & el.units > 0;
                });
                if (prods.length > 0) {
                    result.push(prods);
                }
            });

            vm.list = [].concat.apply([], result);
        }
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        categories: 'categories/getCategories',
        user: 'getUser',
        configs: 'getConfig'
    }), {
        total: function total() {
            var vm = this;
            var tot = 0;
            vm.categories.forEach(function (category) {
                category.products.forEach(function (product) {
                    if (product.units > 0) {

                        tot += product.price * product.units;
                    }
                });
            });
            return tot;
        }
    }),

    methods: {
        listChange: function listChange(event) {
            var product = this.list.find(function (prod) {
                return prod.id == event.id;
            });
            product.units = event.units;
        },
        addSelectorProduct: function addSelectorProduct() {
            var vm = this;
            if (vm.selector.units > 0 && vm.selector.product != null) {
                var prod = this.selector.product;
                if (prod.units == undefined) {
                    Vue.set(prod, 'units', 0);
                }
                prod.units = this.selector.units;
                vm.selector.product = null;
                vm.selector.code = '';
                vm.selector.units = 0;
                vm.selector.name = '';
            }
        },
        show: function show(product) {
            if (product.images[0]) {
                this.carouselProduct = product;
                this.showCarousel = true;

                var element = this.$refs.modal.$el;

                $(element).modal('show');
            } else {
                var content = document.createElement("img");
                $(content).attr('src', '/storage/images/app/no-photo.png');
                content.style.width = '100%';
                swal({ content: content });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['product'],
    data: function data() {
        return {
            file: null,
            i: 0,
            csrf: csrf,
            show: true
        };
    },

    watch: {
        product: function product() {
            this.show = true;
            this.preloadImages();
        }
    },
    methods: {
        preloadImages: function preloadImages() {
            /* console.log('preload'); */
            if (this.product && this.product.images && this.product.images.length > 0) {

                var images = [];
                this.product.images.forEach(function (image) {
                    var img = new Image();
                    img.src = image.url;
                    images.push(img);
                    /*  console.log(img); */
                });
            }
        },
        close: function close() {
            this.i = 0;
            this.$emit('closeModal');
        },
        changeImage: function changeImage(where) {
            if (where == 'next') {
                this.i++;
                if (!this.product.images[this.i]) {
                    this.i = 0;
                }
            } else {
                this.i--;
                if (this.i < 0) {
                    this.i = this.product.images.length - 1;
                }
            }
        }
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/pedido.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['list'],
    methods: {
        del: function del(product) {
            product.units = 0;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            viewed: false,
            scrolled: false,
            enterhand: false,
            clicknow: false,
            imagesrc: "/storage/images/app/tuto.png"

        };
    },

    watch: {
        scrolled: function scrolled() {}
    },
    methods: {
        handleScroll: function handleScroll() {
            var _this = this;

            if (!this.scrolled) {
                this.scrolled = window.scrollY > 150;

                setTimeout(function () {
                    _this.enterhand = true;
                }, 1000);

                setTimeout(function () {
                    _this.clicknow = true;
                    _this.imagesrc = "/storage/images/app/tuto2.png";
                }, 2100);
            }
        }
    },
    created: function created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/pedido.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table[data-v-0ae5e525]{\n    font-size:1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.redcircle[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: rgba(170, 16, 16, 0.479);\n}\n.animation[data-v-48ec1a84] {\n  position: absolute;\n  top: 40px;\n  left: 20px;\n  color: #131212;\n  font-size: 3rem;\n}\n.image-container[data-v-48ec1a84] {\n  width: 90%;\n  position: relative;\n}\n.overlay[data-v-48ec1a84] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #cccc;\n}\n.speech-bubble[data-v-48ec1a84] {\n  position: fixed;\n  top: 50px;\n  right: 50px;\n  background: #EB1889;\n  border-radius: .4em;\n  width: 50%;\n  padding: 20px;\n  text-align: center;\n  color: #fff;\n}\n.speech-bubble[data-v-48ec1a84]:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 37px solid transparent;\n  border-right-color: #EB1889;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -18.5px;\n  margin-left: -37px;\n}\n@media (min-width: 900px) {\n.image-container[data-v-48ec1a84] {\n    width: 20%;\n    margin-left: 0;\n}\n.overlay[data-v-48ec1a84] {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.speech-bubble[data-v-48ec1a84] {\n    top: 150px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-container[data-v-527fb35a] {\n  position: relative;\n  overflow: hidden;\n}\n.close-button[data-v-527fb35a] {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n}\n.controls[data-v-527fb35a] {\n  position: absolute;\n  bottom: 50%;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.controls .fa[data-v-527fb35a] {\n    font-size: 2rem;\n    cursor: pointer;\n    background-color: #09cca299;\n    color: #ff0aaf;\n    font-weight: bold;\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icono[data-v-731ed9d6]{\n    font-size: 2.75rem;\n    margin-right: 15px;\n    margin-top:-15px\n}\n.white-space-normal[data-v-731ed9d6]{\n    white-space: normal;\n}\n.text-big[data-v-731ed9d6]{\n    font-size: 1.5rem;\n}\n.category-miniature[data-v-731ed9d6]{\n    min-width: 100px;\n    width: 100px;\n    margin-right: 15px;\n}\n.container[data-v-731ed9d6]{\n    \n    margin-bottom: 100px;\n}\ntd[data-v-731ed9d6]{\n        white-space:normal;\n}\ninput[type=\"number\"][data-v-731ed9d6]{\n        width: 70px;\n}\n.sampleImage[data-v-731ed9d6]{width: 100px;\n}\n.btn-link[data-v-731ed9d6] {color : black;\n}\n#total[data-v-731ed9d6] {\n        position: fixed;\n        /* margin-left:50vw; */\n        bottom: 20px;\n        z-index: 100;\n}\nimg[data-v-731ed9d6]{width:100%\n}\n@media(max-width: 600px){\n.card-header[data-v-731ed9d6]{\n            padding:0;\n}\n.container[data-v-731ed9d6]{\n    \n            margin-left: -7%;\n            width: 100vw;\n            padding: 15px;\n}\n.sampleImage[data-v-731ed9d6]{width: 80px;\n}\ntd[data-v-731ed9d6] { white-space :normal;\n}\ntable[data-v-731ed9d6] {\n            font-size: 0.66rem;\n            font-weight: bold;\n}\n.card-body[data-v-731ed9d6],table th[data-v-731ed9d6], table td[data-v-731ed9d6]{padding:5px;\n}\n}\n@media(min-width: 600px){\n.sampleImage[data-v-731ed9d6]{width: 150px;\n}\ntable[data-v-731ed9d6]{ font-size: 1rem; font-weight: normal\n}\ntd[data-v-731ed9d6] {white-space: normal;\n}\n.card-body[data-v-731ed9d6],.container[data-v-731ed9d6]{padding:1.25rem\n}\n}\n   \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ae5e525\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/pedido.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.list && _vm.list.length > 0
    ? _c("div", { staticClass: "mt-5" }, [
        _c("h5", [_vm._v("Pedido actual:")]),
        _vm._v(" "),
        _c("table", { staticClass: "table table-striped" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.list, function(product) {
              return _c("tr", { key: product.id }, [
                _c("td", [_vm._v(" " + _vm._s(product.code) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(product.name) + " ")]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.lazy",
                        value: product.units,
                        expression: "product.units",
                        modifiers: { lazy: true }
                      }
                    ],
                    staticClass: "form-control",
                    staticStyle: { width: "100px" },
                    attrs: { type: "number" },
                    domProps: { value: product.units },
                    on: {
                      change: function($event) {
                        _vm.$set(product, "units", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    " $" +
                      _vm._s(_vm._f("price")(product.price * product.units)) +
                      " "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-outline-danger",
                      on: {
                        click: function($event) {
                          _vm.del(product)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fa fa-times" })]
                  )
                ])
              ])
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Codigo")]),
      _vm._v(" "),
      _c("th", [_vm._v("Producto")]),
      _vm._v(" "),
      _c("th", [_vm._v("Unidades")]),
      _vm._v(" "),
      _c("th", [_vm._v("Subtotal")]),
      _vm._v(" "),
      _c("th", [_vm._v("-")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ae5e525", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48ec1a84\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { "enter-active-class": "animate animated bounceIn" } },
    [
      _vm.scrolled && !_vm.viewed
        ? _c(
            "div",
            { staticClass: "overlay " },
            [
              _c(
                "div",
                { staticClass: "image-container " },
                [
                  _c("v-lazy-image", { attrs: { src: _vm.imagesrc } }),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animate animated slideInUp"
                      }
                    },
                    [
                      _vm.enterhand
                        ? _c(
                            "div",
                            {
                              staticClass: "animation ",
                              class: { redcircle: _vm.clicknow }
                            },
                            [_c("i", { staticClass: "fa fa-mouse-pointer" })]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  attrs: { "enter-active-class": "animate animated bounceIn" }
                },
                [
                  _vm.clicknow
                    ? _c("div", { staticClass: "speech-bubble" }, [
                        _c("span", [
                          _vm._v(
                            "Click en una categoria para ver detalles de productos"
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-block btn-danger",
                  staticStyle: { "max-width": "400px" },
                  on: {
                    click: function($event) {
                      _vm.viewed = true
                    }
                  }
                },
                [_vm._v(" Cerrar ")]
              )
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48ec1a84", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-527fb35a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "modal fade",
      attrs: { id: "image-modal", tabindex: "-1", role: "dialog" }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _vm.product
          ? _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v(" " + _vm._s(_vm.product.name) + " ")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        _vm.close()
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "image-container" },
                  [
                    _c(
                      "transition",
                      {
                        attrs: {
                          "leave-active-class":
                            " animated slideOutRight faster position-absolute"
                        }
                      },
                      [
                        _vm.product.images && _vm.product.images.length > 0
                          ? _c("img", {
                              key: _vm.product.images[_vm.i].id,
                              staticClass: "w-100 ",
                              attrs: {
                                src: _vm.product.images[_vm.i].url,
                                alt: _vm.product.name
                              }
                            })
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.product.images || !_vm.product.images.length > 0
                      ? _c("img", {
                          attrs: {
                            src: "/storage/images/app/no-image.png",
                            alt: _vm.product.name
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.images && _vm.product.images.length > 1
                      ? _c("div", { staticClass: "controls" }, [
                          _c("span", {
                            staticClass: "fa fa-chevron-left ",
                            on: {
                              click: function($event) {
                                _vm.changeImage("prev")
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "fa fa-chevron-right ",
                            on: {
                              click: function($event) {
                                _vm.changeImage("next")
                              }
                            }
                          })
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ])
            ])
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-527fb35a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-731ed9d6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("div", { staticClass: "row" }, [
        _vm.user && _vm.user.role_id > 2
          ? _c("h1", { staticClass: "col-12 col-lg-6 text-center" }, [
              _vm._v("Hace tu pedido")
            ])
          : _c("h1", { staticClass: "col-12 col-lg-6 text-center" }, [
              _vm._v("Tomar pedido")
            ]),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-2" }, [
        _vm._m(1),
        _vm._v(" "),
        _vm.configs
          ? _c(
              "div",
              {
                staticClass:
                  "col-12 d-flex justify-content-center align-items-center"
              },
              [
                _c("span", {
                  staticClass: "fas fa-hand-holding-usd text-focus icono"
                }),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Compra mínima por local $" +
                      _vm._s(_vm.configs.minbuy) +
                      ", para envíos $" +
                      _vm._s(_vm.configs.minbuy_ship) +
                      ". (Los precios publicados son sin IVA) Formas de pago: Efectivo o Deposito/Transferencia Bancaria"
                  )
                ])
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.user && _vm.user.role_id < 3 ? _c("hr") : _vm._e(),
      _vm._v(" "),
      _vm.user && _vm.user.role_id < 3
        ? _c("div", { staticClass: "row" }, [
            _c(
              "form",
              {
                staticClass: "form form-inline w-100 d-flex  ",
                class: {
                  "flex-column align-items-start justify-items-between":
                    _vm.$mq != "lg"
                },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addSelectorProduct($event)
                  }
                }
              },
              [
                _c("div", { staticClass: " d-flex ml-3 mt-2 " }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Codigo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selector.code,
                        expression: "selector.code"
                      }
                    ],
                    staticClass: "form-control ml-2",
                    attrs: { type: "text" },
                    domProps: { value: _vm.selector.code },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.selector, "code", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: " d-flex ml-3 mt-2 " }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                  _vm._v(" "),
                  _c("label", { staticClass: "text-info ml-4" }, [
                    _vm._v(" " + _vm._s(_vm.selector.name) + " ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: " d-flex ml-3 mt-2 " }, [
                  _c("label", { staticClass: "mr-2", attrs: { for: "" } }, [
                    _vm._v("Unidades")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selector.units,
                        expression: "selector.units"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", min: "0" },
                    domProps: { value: _vm.selector.units },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.selector, "units", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-md btn-secondary ml-2",
                    class: {
                      "btn-outline-success":
                        _vm.selector.product && _vm.selector.units > 0
                    },
                    attrs: { type: "submit" }
                  },
                  [_c("span", { staticClass: "fa fa-plus" })]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "w-100" },
              [
                _vm.list && _vm.list.length > 0
                  ? _c("pedido", {
                      attrs: { list: _vm.list },
                      on: { change: _vm.listChange }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "accordion" } },
        _vm._l(_vm.categories, function(category) {
          return _c(
            "div",
            { key: "category-" + category.id, staticClass: "card flex-wrap" },
            [
              _c(
                "div",
                {
                  staticClass: "card-header",
                  attrs: { id: "card" + category.id }
                },
                [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn  btn-link w-100 text-left text-big d-flex align-items-center w-100",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": "#acordion" + category.id,
                          "aria-expanded": "true",
                          "aria-controls": category.name
                        },
                        on: {
                          click: function($event) {
                            _vm.selectedCategory = category.id
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "category-miniature" },
                          [
                            _c("v-lazy-image", {
                              attrs: { src: category.image }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "white-space-normal" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(category.name.ucfirst()) +
                              "\n                                "
                          )
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse collapsed ",
                  attrs: {
                    id: "acordion" + category.id,
                    "aria-labelledby": "headingOne",
                    "data-parent": "#accordion"
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "table",
                      { staticClass: "table table-striped table-bordered " },
                      [
                        _c("thead", {}, [
                          _c("th", [_vm._v("Foto")]),
                          _vm._v(" "),
                          _vm.user && _vm.user.role_id < 3
                            ? _c("th", [_vm._v("Codigo")])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("th", [_vm._v("Producto")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Precio")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Quiero")])
                        ]),
                        _vm._v(" "),
                        _vm.selectedCategory == category.id
                          ? _c(
                              "tbody",
                              _vm._l(category.products, function(product) {
                                return !product.paused
                                  ? _c("tr", { key: product.id }, [
                                      _c(
                                        "td",
                                        {
                                          on: {
                                            click: function($event) {
                                              _vm.show(product)
                                            }
                                          }
                                        },
                                        [
                                          product.images.length > 0
                                            ? _c("v-lazy-image", {
                                                staticClass: "sampleImage",
                                                attrs: {
                                                  src: product.images[0].url,
                                                  alt: product.name
                                                }
                                              })
                                            : _c("v-lazy-image", {
                                                staticClass: "sampleImage",
                                                attrs: {
                                                  src:
                                                    "/storage/images/app/no-photo.png",
                                                  alt: "Sin foto"
                                                }
                                              })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.user && _vm.user.role_id < 3
                                        ? _c("td", [
                                            _vm._v(
                                              " " + _vm._s(product.code) + " "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: { cursor: "pointer" },
                                          on: {
                                            click: function($event) {
                                              _vm.show(product)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "  " +
                                              _vm._s(
                                                _vm._f("ucFirst")(product.name)
                                              ) +
                                              " "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "text-info text-center font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "$" +
                                              _vm._s(
                                                _vm._f("price")(product.price)
                                              )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !product.paused
                                        ? _c("td", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: product.units,
                                                  expression: "product.units"
                                                }
                                              ],
                                              staticClass: "form-control ",
                                              attrs: {
                                                type: "number",
                                                min: "0"
                                              },
                                              domProps: {
                                                value: product.units
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    product,
                                                    "units",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            product.units > 0
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-success d-flex flex-column p-0 m-0 justify-content-center align-items-center"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-success font-weight-bold"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "  $" +
                                                            _vm._s(
                                                              _vm._f("price")(
                                                                product.price *
                                                                  product.units
                                                              )
                                                            ) +
                                                            " "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ])
                                        : _vm._e()
                                    ])
                                  : _vm._e()
                              })
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "animated bounceIn",
            "leave-active-class": "animated fadeOutDown"
          }
        },
        [
          _vm.total > 0
            ? _c(
                "div",
                {
                  staticClass:
                    "col-12 row d-flex flex-column justify-content-center align-items-center w-100",
                  attrs: { id: "total" }
                },
                [
                  _c("div", { staticClass: "bg-success p-1 col-6 col-lg-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 bg-white d-flex justify-content-center"
                      },
                      [
                        _vm._v(
                          "\n                TOTAL : $" +
                            _vm._s(_vm._f("price")(_vm.total)) +
                            "\n                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "bg-success p-1 col-6 col-lg-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 bg-white d-flex justify-content-center"
                      },
                      [
                        _c("a", { attrs: { href: "#form" } }, [
                          _vm._v("Terminar pedido")
                        ])
                      ]
                    )
                  ])
                ]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "div",
        [_c("cotizer-form", { attrs: { list: _vm.list, total: _vm.total } })],
        1
      ),
      _vm._v(" "),
      _vm.list.length > 0
        ? _c("div", [_c("pedido", { attrs: { list: _vm.list } })], 1)
        : _vm._e(),
      _vm._v(" "),
      _c("carousel", {
        ref: "modal",
        attrs: { product: _vm.carouselProduct },
        on: {
          closeModal: function($event) {
            _vm.carouselProduct = null
          }
        }
      }),
      _vm._v(" "),
      !_vm.user || _vm.user.role_id > 2 ? _c("tutorial") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "col-12 col-lg-6 btn btn-lg btn-outline-info",
        attrs: { href: "/mates-fabi.pdf", target: "_blank" }
      },
      [
        _c("span", { staticClass: "fa fa-download" }),
        _vm._v(" Descargar lista de precios")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 d-flex justify-content-center align-items-center"
      },
      [
        _c("span", { staticClass: "fa fa-truck text-focus icono" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            " La compra es entregada sin cargo al transporte de carga elegido por el cliente. Los despachos se realizan de 1 a 5 días hábiles a partir del informe y acreditación del pago."
          )
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-731ed9d6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/pedido.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/pedido.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("98448f24", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pedido.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pedido.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0299ef40", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutorial.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tutorial.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("124fa637", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img-modal.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Img-modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("97fab082", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/cotizer/Cotizer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-731ed9d6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Cotizer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-731ed9d6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Cotizer.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-731ed9d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/cotizer/Cotizer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-731ed9d6", Component.options)
  } else {
    hotAPI.reload("data-v-731ed9d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/Img-modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-527fb35a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Img-modal.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Img-modal.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-527fb35a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Img-modal.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-527fb35a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/cotizer/Img-modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-527fb35a", Component.options)
  } else {
    hotAPI.reload("data-v-527fb35a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/pedido.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ae5e525\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/pedido.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/pedido.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ae5e525\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/pedido.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ae5e525"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/cotizer/pedido.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ae5e525", Component.options)
  } else {
    hotAPI.reload("data-v-0ae5e525", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/tutorial.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48ec1a84\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/tutorial.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/tutorial.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48ec1a84\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/tutorial.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-48ec1a84"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/cotizer/tutorial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48ec1a84", Component.options)
  } else {
    hotAPI.reload("data-v-48ec1a84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});