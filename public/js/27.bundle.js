webpackJsonp([27],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/Category.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_grid_vue__ = __webpack_require__("./resources/assets/js/components/category/products-grid.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__products_grid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_list_vue__ = __webpack_require__("./resources/assets/js/components/category/products-list.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__products_list_vue__);
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
    components: { productsGrid: __WEBPACK_IMPORTED_MODULE_0__products_grid_vue___default.a, productsList: __WEBPACK_IMPORTED_MODULE_1__products_list_vue___default.a },
    props: ['category_id'],
    created: function created() {
        console.log($('texto'));
        $('.texto').each(function (txt) {
            console.log(txt);
            var texto = txt.val();
            texto = texto.replace(/\n/g, "<br />");
            $(txt).html(texto);
        });
    },

    computed: {
        category: function category() {
            return this.$store.getters['categories/getCategory'](this.category_id);
        },
        products: function products() {

            if (this.category != null && this.category.products.length > 0) {

                var prods = this.category.products;

                prods = prods.filter(function (prod) {
                    return !prod.paused;
                });

                prods = _.sortBy(prods, this.sortby);
                if (this.order == 'desc') {
                    prods = prods.reverse();
                }
                var from = (this.page - 1) * this.show;
                var to = from + this.show;
                prods = prods.slice(from, to);

                return prods;
            }
        },
        pagination: function pagination() {
            if (this.pages <= 6) {
                var array = [];
                for (var i = 1; i <= this.pages; i++) {
                    array.push(i);
                }
                return array;
            } else {
                var current = this.page;
                if (current >= this.pages) {
                    return [1, current - 4, current - 3, current - 2, current - 1, current];
                } else if (current >= this.pages - 1) {
                    return [1, current - 2, current - 1, current, this.pages];
                } else if (current > 2) {
                    return [1, current - 1, current, current + 1, this.pages];
                } else if (current == 1) {
                    return [1, 2, 3, 4, 5, this.pages];
                } else if (current == 2) {
                    return [1, 2, 3, 4, this.pages];
                }
            }
        },
        pages: function pages() {
            return Math.round(this.category.products.length / this.show);
        }
    },
    data: function data() {
        return {
            display: 'grid',
            sortby: 'name',
            order: 'desc',
            showOptions: [3, 6, 9, 12],
            show: 12,
            page: 1
        };
    },

    watch: {
        show: function show() {
            this.page = 1;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/products-grid.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/Carousel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue__);
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
    components: { carousel: __WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue___default.a },
    props: ['products'],
    data: function data() {
        return {
            carouselProduct: null
        };
    },

    methods: {
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
    },

    computed: {
        config: function config() {
            return this.$store.getters.getConfig;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/products-list.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue__ = __webpack_require__("./resources/assets/js/components/cotizer/Carousel.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue__);
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
    components: { carousel: __WEBPACK_IMPORTED_MODULE_0__cotizer_Carousel_vue___default.a },
    props: ['products'],
    data: function data() {
        return {
            carouselProduct: null
        };
    },

    methods: {
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
    },
    computed: {
        config: function config() {
            return this.$store.getters.getConfig;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Carousel.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['product'],
    data: function data() {
        return {
            file: null
        };
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-278dabe0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Carousel.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.carousel-control-prev-icon[data-v-278dabe0],\n.carousel-control-next-icon[data-v-278dabe0] {\n  height: 100px;\n  width: 100px;\n  outline: black;\n  background-size: 100%, 100%;\n  border-radius: 50%;\n  border: 1px solid black;\n  background-image: none;\n}\n.carousel-control-next-icon[data-v-278dabe0]:after {\n  content: '>';\n  font-size: 55px;\n  color: red;\n}\n.carousel-control-prev-icon[data-v-278dabe0]:after {\n  content: '<';\n  font-size: 55px;\n  color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc11295\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-4cc11295]:hover {\n  text-decoration: none;\n  color: inherit;\n}\nimg[data-v-4cc11295]:hover {\n  cursor: pointer;\n}\n.card-title[data-v-4cc11295], .card-subtitle[data-v-4cc11295] {\n  text-align: center;\n}\n.badge[data-v-4cc11295] {\n  margin-right: 80%;\n  margin-top: 2%;\n  padding: 5px;\n}\n.card-img-overlay[data-v-4cc11295] {\n  max-height: 60%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fd20288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/Category.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.links[data-v-7fd20288] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 5px;\n  background-color: #6e6c6c44;\n  font-size: .75rem;\n  font-weight: bold;\n}\n.links div[data-v-7fd20288] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.form-control[data-v-7fd20288] {\n  font-size: .7rem;\n  padding: 0;\n}\n@media (max-width: 990px) {\n.links[data-v-7fd20288] {\n    margin-left: -11%;\n    margin-right: -20%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ebfe6826\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-list.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-ebfe6826]:hover {\n  text-decoration: none;\n  color: inherit;\n}\nimg[data-v-ebfe6826]:hover {\n  cursor: pointer;\n}\n.card-title[data-v-ebfe6826], .card-subtitle[data-v-ebfe6826] {\n  text-align: center;\n}\n.badge[data-v-ebfe6826] {\n  margin-right: 80%;\n  margin-top: 2%;\n  padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-278dabe0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Carousel.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: { id: "image-modal", tabindex: "-1", role: "dialog" }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _vm.product
          ? _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v(
                    " " + _vm._s(_vm._f("ucFirst")(_vm.product.name)) + " "
                  )
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { enctype: "multipart/form-data", name: "uploader" }
                  },
                  [
                    _c(
                      "b-carousel",
                      {
                        attrs: {
                          controls: _vm.product.images.length > 1,
                          id: "carousel",
                          background: "#ababab",
                          interval: 4000,
                          "img-width": "600"
                        }
                      },
                      _vm._l(_vm.product.images, function(img) {
                        return _vm.product.images.length > 0
                          ? _c("b-carousel-slide", {
                              key: img.id,
                              attrs: { "img-src": img.url }
                            })
                          : _c("b-carousel-slide", {
                              attrs: {
                                "img-src": "/storage/images/app/no-image.png"
                              }
                            })
                      })
                    )
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-278dabe0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4cc11295\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.products
    ? _c(
        "div",
        { staticClass: "row" },
        [
          _vm._l(_vm.products, function(product) {
            return !product.paused
              ? _c(
                  "div",
                  {
                    key: product.id,
                    staticClass: "col-12 col-lg-4 mt-3",
                    attrs: {
                      itemscope: "",
                      itemtype: "https://schema.org/Product"
                    }
                  },
                  [
                    _c("div", { staticClass: "card text-center p-1" }, [
                      _c(
                        "div",
                        {
                          staticClass: "card-img-top",
                          on: {
                            click: function($event) {
                              _vm.show(product)
                            }
                          }
                        },
                        [
                          product.images[0]
                            ? _c("v-lazy-image", {
                                attrs: {
                                  alt: product.name,
                                  src: product.images[0].url,
                                  title: product.name,
                                  itemprop: "image"
                                }
                              })
                            : _c("v-lazy-image", {
                                attrs: {
                                  src: "/storage/images/app/no-photo.png",
                                  alt: "no hay foto"
                                }
                              })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      product.offer
                        ? _c(
                            "div",
                            {
                              staticClass: "card-img-overlay",
                              on: {
                                click: function($event) {
                                  _vm.show(product)
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "badge bg-focus white-bold " },
                                [_vm._v(" Oferta! ")]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body p-0" }, [
                        _c(
                          "h5",
                          {
                            staticClass: "card-title font-weight-bold",
                            staticStyle: { height: "40px" },
                            attrs: { itemprop: "name" }
                          },
                          [_vm._v(_vm._s(_vm._f("ucFirst")(product.name)))]
                        ),
                        _vm._v(" "),
                        _vm.config && !_vm.config.hide_prices
                          ? _c("h5", { staticClass: "card-subtitle" }, [
                              _vm._v("$" + _vm._s(product.price))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-outline-focus mt-2",
                            attrs: { href: product.slug, itemprop: "url" }
                          },
                          [_vm._v("Ver mas")]
                        ),
                        _vm._v(" "),
                        _vm._m(0, true)
                      ])
                    ])
                  ]
                )
              : _vm._e()
          }),
          _vm._v(" "),
          _vm.carouselProduct
            ? _c("carousel", {
                ref: "modal",
                attrs: { product: _vm.carouselProduct }
              })
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-outline-success mt-2",
        attrs: { href: "/cotizador" }
      },
      [
        _c("span", { staticClass: "fa fa-shopping-cart" }),
        _vm._v(" Hacer un pedido")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cc11295", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7fd20288\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/Category.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.category
    ? _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("h1", [
              _vm._v(" " + _vm._s(_vm._f("ucFirst")(_vm.category.name)) + " ")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-lg-6" }, [
            _c("img", {
              attrs: { src: _vm.category.image, alt: _vm.category.name }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-lg-6 " }, [
            _c("span", { staticClass: "texto" }, [
              _vm._v(" " + _vm._s(_vm.category.description) + " ")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row links mt-3" }, [
          _c("div", { staticClass: "col-2 col-lg-2 p-0" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-sm ",
                class: { "bg-focus white-bold": _vm.display == "grid" },
                on: {
                  click: function($event) {
                    _vm.display = "grid"
                  }
                }
              },
              [_c("span", { staticClass: "fa fa-th" })]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm ",
                class: { "bg-focus white-bold": _vm.display == "list" },
                on: {
                  click: function($event) {
                    _vm.display = "list"
                  }
                }
              },
              [_c("span", { staticClass: "fa fa-list-ul" })]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-10 col-lg-7 row p-0 d-flex justify-content-start pl-4"
            },
            [
              _c("div", { staticClass: "col-5 row p-0" }, [
                _c(
                  "label",
                  { staticClass: " p-0 pt-2 col-5 text-right pr-1" },
                  [_vm._v("Ordenar")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.sortby,
                        expression: "sortby"
                      }
                    ],
                    staticClass: "form-control col-7",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.sortby = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "name" } }, [
                      _vm._v("Nombre")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "price" } }, [
                      _vm._v("Precio")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-1 offset-1" }, [
                _vm.order == "asc"
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm bg-transparent",
                        on: {
                          click: function($event) {
                            _vm.order = "desc"
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-arrow-up" })]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-sm bg-transparent",
                        on: {
                          click: function($event) {
                            _vm.order = "asc"
                          }
                        }
                      },
                      [_c("span", { staticClass: "fas fa-arrow-down" })]
                    )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-5 col-lg-4 row p-0" }, [
                _c("label", { staticClass: " col-6 pt-2 pr-1 " }, [
                  _vm._v("Mostrar")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.show,
                        expression: "show"
                      }
                    ],
                    staticClass: "form-control col-6 p-0",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.show = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.showOptions, function(op) {
                    return _c("option", { key: op, domProps: { value: op } }, [
                      _vm._v(
                        " \n                            " +
                          _vm._s(op) +
                          " \n                    "
                      )
                    ])
                  })
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 mt-2 mt-lg-0 col-lg-3" }, [
            _vm.pages > 1
              ? _c(
                  "div",
                  [
                    _vm.page != 1
                      ? _c(
                          "button",
                          {
                            staticClass: " bg-transparent",
                            on: {
                              click: function($event) {
                                _vm.page--
                              }
                            }
                          },
                          [_c("span", { staticClass: "fa fa-chevron-left" })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.pagination, function(p) {
                      return _c(
                        "button",
                        {
                          key: p,
                          staticClass: " bg-transparent",
                          class: { "text-focus": _vm.page == p },
                          on: {
                            click: function($event) {
                              _vm.page = p
                            }
                          }
                        },
                        [_c("span", [_vm._v(" " + _vm._s(p) + " ")])]
                      )
                    }),
                    _vm._v(" "),
                    _vm.page != _vm.pages
                      ? _c(
                          "button",
                          {
                            staticClass: " bg-transparent",
                            on: {
                              click: function($event) {
                                _vm.page++
                              }
                            }
                          },
                          [_c("span", { staticClass: "fa fa-chevron-right" })]
                        )
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm.display == "grid"
            ? _c(
                "div",
                { staticClass: "col-12" },
                [_c("products-grid", { attrs: { products: _vm.products } })],
                1
              )
            : _c(
                "div",
                { staticClass: "col-12" },
                [_c("products-list", { attrs: { products: _vm.products } })],
                1
              )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-4" }, [
          _c("div", { staticClass: "col-12 col-lg-4 offset-lg-8 " }, [
            _vm.pages > 1
              ? _c(
                  "div",
                  { staticClass: "justify-content-center d-flex" },
                  [
                    _vm.page != 1
                      ? _c(
                          "button",
                          {
                            staticClass: " bg-transparent",
                            on: {
                              click: function($event) {
                                _vm.page--
                              }
                            }
                          },
                          [_c("span", { staticClass: "fa fa-chevron-left" })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.pagination, function(p) {
                      return _c(
                        "button",
                        {
                          key: p,
                          staticClass: " bg-transparent",
                          class: { "text-focus": _vm.page == p },
                          on: {
                            click: function($event) {
                              _vm.page = p
                            }
                          }
                        },
                        [_c("span", [_vm._v(" " + _vm._s(p) + " ")])]
                      )
                    }),
                    _vm._v(" "),
                    _vm.page != _vm.pages
                      ? _c(
                          "button",
                          {
                            staticClass: " bg-transparent",
                            on: {
                              click: function($event) {
                                _vm.page++
                              }
                            }
                          },
                          [_c("span", { staticClass: "fa fa-chevron-right" })]
                        )
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e()
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fd20288", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ebfe6826\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/products-list.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.products
    ? _c(
        "div",
        { staticClass: "row" },
        [
          _vm._l(_vm.products, function(product) {
            return !product.paused
              ? _c(
                  "div",
                  {
                    key: product.id,
                    staticClass: "col-12 mt-3 row",
                    attrs: {
                      itemscope: "",
                      itemtype: "https://schema.org/Product"
                    }
                  },
                  [
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "card col-12 col-lg-4",
                        on: {
                          click: function($event) {
                            _vm.show(product)
                          }
                        }
                      },
                      [
                        product.images[0]
                          ? _c("v-lazy-image", {
                              staticClass: "card-img-top",
                              attrs: {
                                alt: product.name,
                                src: product.images[0].url,
                                title: product.name,
                                itemprop: "image"
                              }
                            })
                          : _c("v-lazy-image", {
                              staticClass: "card-img-top",
                              attrs: {
                                src: "/storage/images/app/no-photo.png",
                                alt: "no hay foto"
                              }
                            }),
                        _vm._v(" "),
                        product.offer
                          ? _c("div", { staticClass: "card-img-overlay" }, [
                              _c(
                                "span",
                                { staticClass: "badge bg-focus white-bold " },
                                [_vm._v(" Oferta! ")]
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 col-lg-8 d-flex flex-column justify-content-around align-items-between"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "h-25 p-2 d-flex flex-column justify-content-between"
                          },
                          [
                            _c(
                              "h5",
                              {
                                attrs: {
                                  itemprop: "name",
                                  clasS: "font-weight-bold"
                                }
                              },
                              [_vm._v(_vm._s(_vm._f("ucFirst")(product.name)))]
                            ),
                            _vm._v(" "),
                            _vm.config && !_vm.config.hide_prices
                              ? _c("h5", [_vm._v("$" + _vm._s(product.price))])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "h-50 d-flex align-items-end ml-2",
                            attrs: { itemprop: "description" }
                          },
                          [
                            _c("p", [
                              _vm._v(" " + _vm._s(product.description) + " ")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "h-25" }, [
                          _c(
                            "div",
                            { staticClass: "col-4 d-flex align-items-base" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-outline-focus",
                                  attrs: { itemprop: "url", href: product.slug }
                                },
                                [_vm._v("Ver mas")]
                              ),
                              _vm._v(" "),
                              _vm._m(0, true)
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr")
                  ]
                )
              : _vm._e()
          }),
          _vm._v(" "),
          _vm.carouselProduct
            ? _c("carousel", {
                ref: "modal",
                attrs: { product: _vm.carouselProduct }
              })
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-outline-success ml-2",
        attrs: { href: "/cotizador" }
      },
      [
        _c("span", { staticClass: "fa fa-shopping-cart" }),
        _vm._v(" Hacer un pedido")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ebfe6826", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-278dabe0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Carousel.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-278dabe0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Carousel.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("5396a71a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-278dabe0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-278dabe0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc11295\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc11295\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-grid.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3706d24c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc11295\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-grid.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc11295\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-grid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fd20288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/Category.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fd20288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/Category.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("36df4dd6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fd20288\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Category.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fd20288\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Category.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ebfe6826\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-list.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ebfe6826\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-list.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4ed05ef4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ebfe6826\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ebfe6826\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./products-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/category/Category.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fd20288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/Category.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/Category.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7fd20288\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/Category.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7fd20288"
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
Component.options.__file = "resources/assets/js/components/category/Category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fd20288", Component.options)
  } else {
    hotAPI.reload("data-v-7fd20288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/category/products-grid.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cc11295\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-grid.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/products-grid.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4cc11295\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/products-grid.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4cc11295"
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
Component.options.__file = "resources/assets/js/components/category/products-grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cc11295", Component.options)
  } else {
    hotAPI.reload("data-v-4cc11295", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/category/products-list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ebfe6826\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/category/products-list.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/category/products-list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ebfe6826\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/category/products-list.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ebfe6826"
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
Component.options.__file = "resources/assets/js/components/category/products-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ebfe6826", Component.options)
  } else {
    hotAPI.reload("data-v-ebfe6826", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/cotizer/Carousel.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-278dabe0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Carousel.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Carousel.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-278dabe0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Carousel.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-278dabe0"
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
Component.options.__file = "resources/assets/js/components/cotizer/Carousel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-278dabe0", Component.options)
  } else {
    hotAPI.reload("data-v-278dabe0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});