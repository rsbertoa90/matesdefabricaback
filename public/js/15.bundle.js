webpackJsonp([15],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        list: { default: [] },
        total: { default: 0 }
    },

    data: function data() {
        return {
            state: null,
            loading: false,
            formData: {
                shipping: false,
                cp: '',
                address: '',
                transport: '',
                city_id: null,
                message: '',
                phone: '',
                email: '',
                client: '',
                seller: ''
            }

        };
    },

    computed: {
        configs: function configs() {
            return this.$store.getters.getConfig;
        },
        minBuy: function minBuy() {
            if (this.configs) {
                if (this.formData.shipping) {
                    return this.configs.minbuy_ship;
                } else {
                    return this.configs.minbuy;
                }
            }
        },
        user: function user() {
            return this.$store.getters.getUser;
        },
        states: function states() {
            return this.$store.getters.getStates;
        }
    },

    methods: {
        validateEmail: function validateEmail(email) {

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return re.test(String(email).toLowerCase());
        },
        formValid: function formValid() {
            if (this.formData.phone.length < 6) {
                swal('Hay algo mal con el telefono', '', 'error');
                return false;
            } else if (!this.formData.client || this.formData.client.trim() == '') {
                swal('El campo "Nombre y Apellido" es obligatorio ', '', 'error');
                return false;
            } else if (!this.validateEmail(this.formData.email) && this.user.role_id > 2) {
                swal('Hay algo mal con el mail', '', 'error');
                return false;
            } else if (this.list.length <= 0) {
                swal('No hay productos seleccionados', '', 'error');
                return false;
            } else if (this.total < this.minBuy) {
                swal('El minimo de compra es de $' + this.minBuy, '', 'error');
                return false;
            } else {
                return true;
            }
        },
        confirmSend: function confirmSend() {
            var vm = this;
            if (this.formValid()) {
                if (this.formData.shipping) {

                    swal({
                        title: "Importante!",
                        text: "La eleccion del transporte y el costo de envío corren por cuenta del cliente. Mates fabi no se hace responsable de eventuales daños que pueda ocasionar la empresa de transporte.",
                        icon: "warning",
                        buttons: ['Cancelar', 'Continuar'],
                        confirmButtonColor: '#8CD4F5',
                        cancelButtonText: 'Cancel'
                        /*   dangerMode: true, */
                    }).then(function (isConfirm) {
                        if (isConfirm) {
                            vm.send();
                        }
                    });
                } else {
                    vm.send();
                }
            }
        },
        compactList: function compactList() {
            var res = [];
            this.list.forEach(function (item) {
                var compactItem = {
                    id: item.id,
                    units: item.units
                };
                res.push(compactItem);
            });
            return res;
        },
        send: function send() {

            var data = this.formData;
            var list = this.compactList();
            data.list = JSON.stringify(list);
            data.total = this.total;
            if (data.shipping) {
                data.shipping = 1;
            } else {
                data.shipping = 0;
            }

            var vm = this;
            vm.loading = true;
            $.ajax({
                method: 'post',
                data: data,
                url: '/cotizer/send',
                success: function success(r) {

                    if (vm.user.role_id > 2) {
                        swal('Enviamos tu presupuesto', 'Te estaremos contactando a la brevedad', 'success').then(function (confirm) {
                            window.location.replace('/');
                        });
                    } else {
                        swal('Orden guardada', 'Revisa el panel de administracion de ordenes', 'success').then(function (confirm) {
                            window.location.replace('/admin/cotizador');
                        });
                    }
                }
            });
        }
    }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loader[data-v-54f6f00b] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  z-index: 110;\n  background-color: #ddddddaa;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  padding-top: 5%;\n}\n.warn[data-v-54f6f00b] {\n  font-size: 0.8rem;\n  color: red;\n  font-style: italic;\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54f6f00b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.user
    ? _c("div", {}, [
        _vm.loading
          ? _c(
              "div",
              { staticClass: "loader" },
              [
                _c("fade-loader", {
                  attrs: { loading: _vm.loading, size: "200px" }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("h5", [_vm._v("Envianos tu pedido")]),
        _vm._v(" "),
        _c("p", [_vm._v("Recibiras confirmacion de tu presupuesto por email")]),
        _vm._v(" "),
        _c("form", { staticClass: "col-12", attrs: { id: "form" } }, [
          _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
            _c("div", { staticClass: "col-12 col-lg-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.shipping,
                    expression: "formData.shipping"
                  }
                ],
                attrs: { type: "radio" },
                domProps: {
                  value: false,
                  checked: _vm._q(_vm.formData.shipping, false)
                },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.formData, "shipping", false)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "text-secondary radioText",
                  class: { "text-success": !_vm.formData.shipping },
                  on: {
                    click: function($event) {
                      _vm.formData.shipping = false
                    }
                  }
                },
                [
                  _c("span", { staticClass: "fa fa-building" }),
                  _vm._v(" Retiro en el local\n                 ")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
            _c("div", { staticClass: "col-12 col-lg-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formData.shipping,
                    expression: "formData.shipping"
                  }
                ],
                attrs: { type: "radio" },
                domProps: {
                  value: true,
                  checked: _vm._q(_vm.formData.shipping, true)
                },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.formData, "shipping", true)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "text-secondary radioText",
                  class: { "text-success": _vm.formData.shipping },
                  on: {
                    click: function($event) {
                      _vm.formData.shipping = true
                    }
                  }
                },
                [
                  _c("span", { staticClass: "fa fa-truck" }),
                  _vm._v(" Envio por transporte\n                ")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          !_vm.formData.shipping
            ? _c("span", { staticClass: "warn" }, [
                _vm._v(
                  "*Los retiros  presenciales son el local de Pasteur 428(Once) a los 3-5 dias habiles de haber echo el pedido "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.formData.shipping
            ? _c("span", { staticClass: "warn" }, [
                _vm._v(
                  "*El despacho de la mercaderia se realiza de 3 a 5 dias habiles luego del pago. "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("span", { staticClass: "warn" }, [
            _vm._v("*Los precios no incluyen IVA")
          ]),
          _vm._v(" "),
          _vm.user.role_id > 2
            ? _c("div", { staticClass: "col-12 row form-group-row mb-3" }, [
                !_vm.formData.shipping
                  ? _c("span", { staticClass: " warn" }, [
                      _vm._v(
                        "*El minimo de compra retirando en el local es de $" +
                          _vm._s(_vm.minBuy)
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.formData.shipping
                  ? _c("span", { staticClass: " warn" }, [
                      _vm._v(
                        "*El minimo de compra para envios es de $" +
                          _vm._s(_vm.minBuy) +
                          " "
                      )
                    ])
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Nombre y Apellido "),
              _vm.user.role_id < 3
                ? _c("span", [_vm._v(" (cliente) ")])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.client,
                  expression: "formData.client"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { required: "", type: "text" },
              domProps: { value: _vm.formData.client },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "client", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm.user.role_id < 3
            ? _c("div", { staticClass: "col-12 row form-group-row" }, [
                _c(
                  "label",
                  { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                  [_vm._v("Nombre del vendedor")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formData.seller,
                      expression: "formData.seller"
                    }
                  ],
                  staticClass: "form-control col-8 col-lg-4",
                  attrs: { required: "", type: "text" },
                  domProps: { value: _vm.formData.seller },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.formData, "seller", $event.target.value)
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.formData.shipping
            ? _c("div", [
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Provincia ")]
                  ),
                  _vm._v(" "),
                  _vm.states.length > 0
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.state,
                              expression: "state"
                            }
                          ],
                          staticClass: "form-control col-8 col-lg-4",
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
                              _vm.state = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        _vm._l(_vm.states, function(opt) {
                          return _c(
                            "option",
                            { key: opt.id, domProps: { value: opt } },
                            [
                              _vm._v(
                                " \n                            " +
                                  _vm._s(opt.name) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Ciudad ")]
                  ),
                  _vm._v(" "),
                  _vm.state
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.formData.city_id,
                              expression: "formData.city_id"
                            }
                          ],
                          staticClass: "form-control col-8 col-lg-4",
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
                              _vm.$set(
                                _vm.formData,
                                "city_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.state.cities, function(opt) {
                          return _c(
                            "option",
                            { key: opt.id, domProps: { value: opt.id } },
                            [
                              _vm._v(
                                " \n                            " +
                                  _vm._s(opt.name) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Direccion ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.address,
                        expression: "formData.address"
                      }
                    ],
                    staticClass: "form-control col-8 col-lg-4",
                    attrs: { type: "text" },
                    domProps: { value: _vm.formData.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "address", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Transporte ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.transport,
                        expression: "formData.transport"
                      }
                    ],
                    staticClass: "form-control col-8 col-lg-4",
                    attrs: { type: "text" },
                    domProps: { value: _vm.formData.transport },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "transport", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 row form-group-row" }, [
                  _c(
                    "label",
                    { staticClass: "col-4 col-lg-4", attrs: { for: "" } },
                    [_vm._v(" Codigo Postal ")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.cp,
                        expression: "formData.cp"
                      }
                    ],
                    staticClass: "form-control col-8 col-lg-4",
                    attrs: { type: "text" },
                    domProps: { value: _vm.formData.cp },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "cp", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Email")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.email,
                  expression: "formData.email"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { required: _vm.user.role_id > 2, type: "email" },
              domProps: { value: _vm.formData.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "email", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Telefono")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.phone,
                  expression: "formData.phone"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { type: "text" },
              domProps: { value: _vm.formData.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "phone", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row form-group-row" }, [
            _c("label", { staticClass: "col-4 col-lg-4", attrs: { for: "" } }, [
              _vm._v("Mensaje")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.message,
                  expression: "formData.message"
                }
              ],
              staticClass: "form-control col-8 col-lg-4",
              attrs: { name: "message" },
              domProps: { value: _vm.formData.message },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "message", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button btn-lg btn-outline-success offset-2 mt-2",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  $event.stopPropagation()
                  return _vm.confirmSend($event)
                }
              }
            },
            [_vm._v("\n                    Enviar\n            ")]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-54f6f00b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("132e5b92", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer-form.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cotizer-form.vue");
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

/***/ "./resources/assets/js/components/cotizer/Cotizer-form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54f6f00b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-54f6f00b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/cotizer/Cotizer-form.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54f6f00b"
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
Component.options.__file = "resources/assets/js/components/cotizer/Cotizer-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54f6f00b", Component.options)
  } else {
    hotAPI.reload("data-v-54f6f00b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});