webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_vue__ = __webpack_require__("./resources/assets/js/components/admin/order.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__order_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        appOrder: __WEBPACK_IMPORTED_MODULE_0__order_vue___default.a
    },
    data: function data() {
        return {
            searchTerm: '',
            orders: [],
            status: 'pendiente',
            filtered: [],
            selected: null

        };
    },

    methods: {
        update: function update(order) {
            if (order.viewed) {
                order.viewed = 1;
            } else {
                order.viewed = 0;
            }
            var data = {
                order: order.id,
                field: 'viewed',
                value: order.viewed
            };
            this.$http.put('/admin/order', data);
        },
        statusChanged: function statusChanged(event) {
            this.status = event.status;
        },
        changestatus: function changestatus(status) {
            this.status = status;
            this.selected = null;
        }
    },

    computed: {
        filteredOrders: function filteredOrders() {
            var vm = this;
            var res = this.orders.filter(function (order) {

                return order.status == vm.status;
            });

            if (vm.searchTerm.trim().length > 2) {
                res = res.filter(function (order) {
                    var searchTerm = vm.searchTerm.trim().toLowerCase();

                    var client = '';
                    if (order.client) {
                        client = order.client.trim().toLowerCase();
                    }

                    var email = '';
                    if (order.email) {
                        email = order.email.trim().toLowerCase();
                    }

                    return client.indexOf(searchTerm) > -1 || email.indexOf(searchTerm) > -1;
                });
            }

            res = _.sortBy(res, 'created_at');
            res = res.reverse();

            return res;
        }
    },
    created: function created() {
        var _this = this;

        this.$http.get('/admin/getOrders').then(function (response) {
            _this.orders = response.data;
        });
    },

    filters: {
        datetime: function datetime(val) {
            return moment(val).format('DD/MM/YYYY H:mm');
        }
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/order.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['order'],
    data: function data() {
        return {
            city: null
        };
    },

    methods: {
        saveComments: function saveComments() {
            var data = {
                order: this.order.id,
                field: 'comments',
                value: this.order.comments
            };
            this.$http.put('/admin/order', data);
        },
        setStatus: function setStatus(status) {
            var vm = this;
            this.order.status = status;
            var data = {
                order: this.order.id,
                field: 'status',
                value: status
            };
            this.$http.put('/admin/order', data).then(function (response) {
                vm.$emit('statusChanged', response.data);
            });
        }
    },
    computed: {
        total: function total() {

            var tot = 0;
            if (this.order.order_items && this.order.order_items.length > 0) {
                this.order.order_items.forEach(function (op) {
                    tot += op.price * op.qty;
                });
            }

            return tot;
        }
    },
    filters: {
        datetime: function datetime(val) {
            return moment(val).format('DD/MM/YYYY H:mm');
        }
    },
    created: function created() {
        var vm = this;
        if (this.order.shipping) {
            this.$http.get('/api/city/' + vm.order.city_id).then(function (res) {
                vm.city = res.data;
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"checkbox\"][data-v-129a08dc]{\n     height: 20px;\n     width: 20px;\n}\n.cursor-pointer[data-v-129a08dc] {\n     cursor: pointer;\n}\n.table-container[data-v-129a08dc]{\n    height: 85vh;\n    scroll-behavior: auto;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-129a08dc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 row mt-2" }, [
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block ",
              class: {
                "btn-outline-warning": _vm.status != "pendiente",
                "btn-warning": _vm.status == "pendiente"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("pendiente")
                }
              }
            },
            [
              _c("span", { staticClass: "far fa-clock" }),
              _vm._v("\n                    Pendientes\n                ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block",
              class: {
                "btn-outline-success": _vm.status != "pagado",
                "btn-success": _vm.status == "pagado"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("pagado")
                }
              }
            },
            [
              _c("span", { staticClass: "fa fa-dollar-sign" }),
              _vm._v("\n                    Pagadas\n                ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block",
              class: {
                "btn-outline-info": _vm.status != "enviado",
                "btn-info": _vm.status == "enviado"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("enviado")
                }
              }
            },
            [
              _c("span", { staticClass: "fa fa-truck" }),
              _vm._v("\n                    Enviadas\n                ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 col-lg-3 m-0 p-0" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-block",
              class: {
                "btn-outline-danger": _vm.status != "cancelado",
                "btn-danger": _vm.status == "cancelado"
              },
              on: {
                click: function($event) {
                  _vm.changestatus("cancelado")
                }
              }
            },
            [
              _c("span", { staticClass: "fa fa-times" }),
              _vm._v("\n                   Canceladas\n                ")
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 row" }, [
      _c("div", { staticClass: "col-12 col-lg-4 table-container" }, [
        _c("table", { staticClass: "table table-striped table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _c("tr", [
                _c("td", { attrs: { colspan: "3" } }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchTerm,
                        expression: "searchTerm"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "BUSCAR" },
                    domProps: { value: _vm.searchTerm },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.searchTerm = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.filteredOrders, function(order) {
                return _c(
                  "tr",
                  {
                    key: "order" + order.id,
                    class: { "bg-info": order == _vm.selected },
                    staticStyle: { cursor: "pointer" },
                    on: {
                      click: function($event) {
                        _vm.selected = order
                      }
                    }
                  },
                  [
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("datetime")(order.created_at)))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(order.client))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: order.viewed,
                            expression: "order.viewed"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(order.viewed)
                            ? _vm._i(order.viewed, null) > -1
                            : order.viewed
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = order.viewed,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(order, "viewed", $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      order,
                                      "viewed",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(order, "viewed", $$c)
                              }
                            },
                            function($event) {
                              _vm.update(order)
                            }
                          ]
                        }
                      })
                    ])
                  ]
                )
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-lg-8 bg-white" },
        [
          _vm.selected
            ? _c("app-order", {
                attrs: { order: _vm.selected },
                on: { statusChanged: _vm.statusChanged }
              })
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Fecha")]),
      _vm._v(" "),
      _c("th", [_vm._v("Cliente")]),
      _vm._v(" "),
      _c("th", [_vm._v("Visto")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-129a08dc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fe71c572\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/order.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "border border-primary p-3 mt-3" }, [
    _c("div", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("span", { staticClass: "font-weight-bold text-primary" }, [
            _vm._v(
              "Fecha: " + _vm._s(_vm._f("datetime")(_vm.order.created_at)) + " "
            )
          ]),
          _vm._v(" "),
          _c("br")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _vm.order.seller
            ? _c("span", { staticClass: "font-weight-bold text-primary" }, [
                _vm._v("Vendedor: " + _vm._s(_vm.order.seller) + " ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _vm.order.message
            ? _c(
                "span",
                { staticClass: "font-weight-bold text-primary mt-2" },
                [
                  _vm._v(
                    'Mensaje adjunto: " ' + _vm._s(_vm.order.message) + ' " '
                  )
                ]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped table-bordered mt-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.order.order_items, function(op) {
            return _c("tr", { key: "op" + op.product_id }, [
              _c("td", [_vm._v(" " + _vm._s(op.code) + " ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(op.name) + " ")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(" $" + _vm._s(_vm._f("price")(op.price)) + " ")
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(op.qty) + " ")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(" $" + _vm._s(_vm._f("price")(op.qty * op.price)) + " ")
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c("tfoot", [
          _c("tr", [
            _c("td"),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td", { staticStyle: { color: "blue" } }, [_vm._v("TOTAL")]),
            _vm._v(" "),
            _c("td", { staticStyle: { color: "blue" } }, [
              _vm._v(" $" + _vm._s(_vm._f("price")(_vm.total)) + " ")
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", [
      _c("ul", [
        _vm.order.client
          ? _c("li", [
              _vm._v("Nombre del cliente: " + _vm._s(_vm.order.client) + " ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.order.phone
          ? _c("li", [_vm._v("Telefono: " + _vm._s(_vm.order.phone) + " ")])
          : _vm._e(),
        _vm._v(" "),
        _vm.order.email
          ? _c("li", [_vm._v("Email: " + _vm._s(_vm.order.email) + " ")])
          : _vm._e(),
        _vm._v(" "),
        _vm.order.message
          ? _c("li", [
              _vm._v("Mensaje adjunto: " + _vm._s(_vm.order.message) + " ")
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _vm.order.shipping
      ? _c("div", [
          _c("h4", [_vm._v("Datos de envío")]),
          _vm._v(" "),
          _c("ul", [
            _vm.city
              ? _c("li", [
                  _vm._v("  Provincia: " + _vm._s(_vm.city.state.name) + " ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.city
              ? _c("li", [_vm._v(" Ciudad: " + _vm._s(_vm.city.name) + " ")])
              : _vm._e(),
            _vm._v(" "),
            _c("li", [_vm._v(" CP: " + _vm._s(_vm.order.cp) + "  ")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(" Direccion: " + _vm._s(_vm.order.address) + " ")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Transporte: " + _vm._s(_vm.order.transport) + "  ")
            ])
          ])
        ])
      : _c("div", [_vm._v("\n                - Retira en local.\n      ")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 offset-lg-9 col-lg-3" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-block btn-outline-primary",
            attrs: { href: "/admin/pdf/" + _vm.order.id, target: "_blank" }
          },
          [_vm._v("\n                Generar PDF\n            ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _vm.order.status == "pagado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-info",
                on: {
                  click: function($event) {
                    _vm.setStatus("enviado")
                  }
                }
              },
              [
                _c("span", { staticClass: "fa fa-truck" }),
                _vm._v("\n                Marcar como enviado\n            ")
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.order.status != "pagado" && _vm.order.status != "cancelado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-success",
                on: {
                  click: function($event) {
                    _vm.setStatus("pagado")
                  }
                }
              },
              [
                _c("span", { staticClass: "fa fa-dollar-sign" }),
                _vm._v("\n                Marcar como pagado\n            ")
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.order.status != "cancelado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-danger",
                on: {
                  click: function($event) {
                    _vm.setStatus("cancelado")
                  }
                }
              },
              [
                _c("span", { staticClass: "fa fa-times" }),
                _vm._v("\n                Marcar como Cancelado\n            ")
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.order.status != "pendiente" && _vm.order.status != "enviado"
        ? _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-outline-warning",
                on: {
                  click: function($event) {
                    _vm.setStatus("pendiente")
                  }
                }
              },
              [
                _c("span", { staticClass: "far fa-clock" }),
                _vm._v("\n                Marcar como Pendiente\n            ")
              ]
            )
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("hr"),
        _vm._v(" "),
        _c("label", { staticClass: "label" }, [_vm._v("Comentarios")]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model.lazy",
              value: _vm.order.comments,
              expression: "order.comments",
              modifiers: { lazy: true }
            }
          ],
          staticClass: "form-control",
          attrs: { rows: "5" },
          domProps: { value: _vm.order.comments },
          on: {
            change: [
              function($event) {
                _vm.$set(_vm.order, "comments", $event.target.value)
              },
              _vm.saveComments
            ]
          }
        })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Codigo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Subtotal")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fe71c572", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b109887e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./resources/assets/js/components/admin/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-129a08dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/admin/Orders.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/Orders.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-129a08dc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/Orders.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-129a08dc"
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
Component.options.__file = "resources/assets/js/components/admin/Orders.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-129a08dc", Component.options)
  } else {
    hotAPI.reload("data-v-129a08dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/order.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/order.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fe71c572\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/order.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/js/components/admin/order.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe71c572", Component.options)
  } else {
    hotAPI.reload("data-v-fe71c572", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});