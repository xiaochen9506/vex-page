import { inject as on, defineComponent as bt, openBlock as c, createElementBlock as A, createElementVNode as ae, getCurrentInstance as pe, computed as Ge, ref as E, watch as ge, onMounted as Oe, createVNode as j, unref as d, withCtx as m, Fragment as F, renderList as U, createBlock as v, createCommentVNode as $, mergeProps as I, createTextVNode as k, toDisplayString as R, normalizeClass as je, nextTick as ln, onUnmounted as un, resolveComponent as cn, renderSlot as mt } from "vue";
import { ElCard as sn, ElForm as Tt, ElRow as $e, ElCol as X, ElFormItem as wt, ElInput as se, ElSelect as $t, ElOption as St, ElDatePicker as Ct, ElCascader as fn, ElButton as ne, ElPagination as dn, ElInputNumber as pn, ElTag as gn, ElImage as hn, ElSwitch as yn, ElRadioGroup as vn, ElRadio as At, ElTable as bn, ElTableColumn as me, ElLoading as mn } from "element-plus";
let Tn = "pageSize", wn = "pageNum", $n = (e) => e.data, Sn = (e) => e.total;
function Cn(e, t) {
  t && t.provide("vxe-page", e);
}
function An() {
  return on("vxe-page", {
    PAGE_SIZE_KEY: Tn,
    PAGE_NUM_KEY: wn,
    GET_LIST: $n,
    GET_TOTAL: Sn
  });
}
/*! Element Plus Icons Vue v2.3.1 */
var _n = /* @__PURE__ */ bt({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, n) => (c(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ae("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), On = _n, jn = /* @__PURE__ */ bt({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, n) => (c(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ae("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), En = jn;
const xn = { class: "v-filter" }, _t = {
  __name: "v-filter",
  props: {
    /**
     * @name filter
     * @vue Prop
     * @description 筛选项配置
     * @type ["Array"]
     * @default []
     */
    filter: {
      type: Array,
      default: () => []
    },
    /**
     * @name btns
     * @vue Prop
     * @description 按钮配置
     * @type ["Array"]
     * @default []
     */
    btns: {
      type: Array,
      default: () => []
    },
    /**
     * @name labelWidth
     * @vue Prop
     * @description label宽度
     * @type ["String", "Number"]
     * @default 110px
     */
    labelWidth: {
      type: [String, Number],
      default: "110px"
    },
    /**
     * @name col
     * @vue Prop
     * @description 一行几列
     * @type ["Number"]
     * @default 4
     */
    col: {
      type: Number,
      default: 4
    }
  },
  setup(e, { expose: t }) {
    const { proxy: n } = pe(), r = e, a = Ge(() => {
      const p = r.filter.filter((i) => i.required), y = {};
      return p.forEach((i) => {
        y[i.prop] = [
          { required: !0, message: i.message || `${i.label}不能为空` }
        ];
      }), y;
    }), u = E(), o = E({}), l = E([]), g = E(["date", "daterange", "month", "year", "monthrange"]), f = Ge(() => 24 / r.col);
    ge(() => r.filter, (p) => {
      s(p);
    }, { deep: !0 });
    const s = (p = []) => {
      l.value = p.map((y) => ((y.initValue || y.initValue === 0) && (o.value[y.prop] = y.initValue), {
        ...y
      }));
    }, S = () => {
      o.value = {};
    }, _ = (p, y) => {
      g.value.includes(y.scope) && (y.startKey && (o.value[y.startKey] = p && p.length > 1 ? p[0] : ""), y.endKey && (o.value[y.endKey] = p && p.length > 1 ? p[1] : ""));
    }, b = () => new Promise((p, y) => {
      u.value.validate((i) => {
        if (i) {
          const h = {};
          l.value.forEach((O) => {
            const ie = O.filterProp || O.prop;
            O.startKey ? (h[O.startKey] = o.value[O.startKey], h[O.endKey] = o.value[O.endKey]) : h[ie] = o.value[O.prop], O.format && typeof O.format == "function" && (h[ie] = O.format(o.value[O.prop]));
          }), n.$emit("search", h), p();
        } else
          y();
      });
    }), C = () => {
      S(), n.$emit("reset");
    }, P = () => o.value;
    return Oe(() => {
      s(r.filter);
    }), t({
      search: b,
      getCurrentFilter: P
    }), (p, y) => (c(), A("div", xn, [
      j(d(sn), null, {
        default: m(() => [
          j(d(Tt), {
            ref_key: "filterFormRef",
            ref: u,
            model: o.value,
            "label-width": e.labelWidth,
            rules: a.value
          }, {
            default: m(() => [
              j(d($e), { gutter: 20 }, {
                default: m(() => [
                  (c(!0), A(F, null, U(l.value, (i) => (c(), v(d(X), {
                    span: f.value,
                    key: i.prop
                  }, {
                    default: m(() => [
                      j(d(wt), {
                        label: i.label,
                        "label-width": i.labelWidth || e.labelWidth,
                        prop: i.prop
                      }, {
                        default: m(() => [
                          i.scope === "input" ? (c(), v(d(se), {
                            key: 0,
                            modelValue: o.value[i.prop],
                            "onUpdate:modelValue": (h) => o.value[i.prop] = h,
                            modelModifiers: { trim: !0 },
                            placeholder: i.placeholder || "请输入"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : $("", !0),
                          i.scope === "select" ? (c(), v(d($t), I({
                            key: 1,
                            modelValue: o.value[i.prop],
                            "onUpdate:modelValue": (h) => o.value[i.prop] = h,
                            placeholder: i.placeholder || "请选择",
                            clearable: "",
                            filterable: ""
                          }, {
                            ...i
                          }, {
                            "filter-method": (h) => {
                              var O;
                              return (O = i.remoteMethod) == null ? void 0 : O.call(i, h, i);
                            },
                            onChange: function(h) {
                              i.onchange && i.onchange(h);
                            }
                          }), {
                            default: m(() => [
                              (c(!0), A(F, null, U(i.options || [], (h) => (c(), v(d(St), {
                                key: h.value,
                                label: h.label,
                                value: h.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : $("", !0),
                          g.value.includes(i.scope) ? (c(), v(d(Ct), {
                            key: 2,
                            modelValue: o.value[i.prop],
                            "onUpdate:modelValue": (h) => o.value[i.prop] = h,
                            "value-format": i.format || "YYYY-MM-DD HH:mm:ss",
                            type: i.scope,
                            placeholder: i.placeholder || "请选择",
                            "start-placeholder": "开始",
                            "end-placeholder": "结束",
                            clearable: "",
                            onChange: (h) => _(h, i)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "onChange"])) : $("", !0),
                          i.scope === "range" ? (c(), v(d($e), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: m(() => [
                              j(d(X), { span: 11 }, {
                                default: m(() => [
                                  j(d(se), {
                                    modelValue: o.value[i.startKey],
                                    "onUpdate:modelValue": (h) => o.value[i.startKey] = h,
                                    placeholder: i.placeholder || "请输入",
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024),
                              j(d(X), {
                                class: "line",
                                span: 2
                              }, {
                                default: m(() => [
                                  k("-")
                                ]),
                                _: 1
                              }),
                              j(d(X), { span: 11 }, {
                                default: m(() => [
                                  j(d(se), {
                                    modelValue: o.value[i.endKey],
                                    "onUpdate:modelValue": (h) => o.value[i.endKey] = h,
                                    placeholder: i.placeholder || "请输入",
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : $("", !0),
                          i.scope === "cascader" ? (c(), v(d(fn), {
                            key: 4,
                            modelValue: o.value[i.prop],
                            "onUpdate:modelValue": (h) => o.value[i.prop] = h,
                            options: i.options,
                            props: i.cascaderProps || { checkStrictly: !0, emitPath: !1 },
                            "collapse-tags": i.collapseTags,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "collapse-tags"])) : $("", !0)
                        ]),
                        _: 2
                      }, 1032, ["label", "label-width", "prop"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128)),
                  j(d(X), { span: f.value }, {
                    default: m(() => [
                      j(d(ne), {
                        type: "primary",
                        icon: d(En),
                        onClick: b
                      }, {
                        default: m(() => [
                          k("搜索")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      j(d(ne), {
                        icon: d(On),
                        onClick: C
                      }, {
                        default: m(() => [
                          k("重置")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (c(!0), A(F, null, U(e.btns, (i) => (c(), v(d(ne), {
                        key: i.text,
                        onClick: i.click
                      }, {
                        default: m(() => [
                          k(R(i.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["span"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "label-width", "rules"])
        ]),
        _: 1
      })
    ]));
  }
};
Math.easeInOutQuad = function(e, t, n, r) {
  return e /= r / 2, e < 1 ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t);
};
var Pn = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function In(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function Fn() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function De(e, t, n) {
  const r = Fn(), a = e - r, u = 20;
  let o = 0;
  t = typeof t > "u" ? 500 : t;
  var l = function() {
    o += u;
    var g = Math.easeInOutQuad(o, r, a, t);
    In(g), o < t ? Pn(l) : n && typeof n == "function" && n();
  };
  l();
}
const Ot = {
  __name: "v-pagination",
  props: {
    page: {
      type: Number,
      default: 1
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    autoScroll: {
      type: Boolean,
      default: !0
    },
    hidden: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = E(10), r = E(t.page || 1), { proxy: a } = pe();
    ge(() => t.page, (l) => {
      console.log(l), r.value = l;
    });
    const u = (l) => {
      console.log("size change"), r.value * l > t.total && (r.value = 1), n.value = l, a.$emit("pagination", { pageNum: r.value, pageSize: l }), t.autoScroll && De(0, 800);
    }, o = (l) => {
      console.log("page change"), r.value = l, a.$emit("pagination", { pageNum: l, pageSize: n.value }), t.autoScroll && De(0, 800);
    };
    return (l, g) => (c(), A("div", {
      class: je([{ hidden: e.hidden }, "v-pagination"])
    }, [
      j(d(dn), I({
        "current-page": r.value,
        layout: e.layout
      }, l.$attrs, {
        onSizeChange: u,
        onCurrentChange: o
      }), null, 16, ["current-page", "layout"])
    ], 2));
  }
};
var jt = typeof global == "object" && global && global.Object === Object && global, Vn = typeof self == "object" && self && self.Object === Object && self, N = jt || Vn || Function("return this")(), V = N.Symbol, Et = Object.prototype, Nn = Et.hasOwnProperty, Mn = Et.toString, te = V ? V.toStringTag : void 0;
function Un(e) {
  var t = Nn.call(e, te), n = e[te];
  try {
    e[te] = void 0;
    var r = !0;
  } catch {
  }
  var a = Mn.call(e);
  return r && (t ? e[te] = n : delete e[te]), a;
}
var Ln = Object.prototype, Rn = Ln.toString;
function kn(e) {
  return Rn.call(e);
}
var Bn = "[object Null]", zn = "[object Undefined]", Ke = V ? V.toStringTag : void 0;
function K(e) {
  return e == null ? e === void 0 ? zn : Bn : Ke && Ke in Object(e) ? Un(e) : kn(e);
}
function H(e) {
  return e != null && typeof e == "object";
}
var Gn = "[object Symbol]";
function Ee(e) {
  return typeof e == "symbol" || H(e) && K(e) == Gn;
}
function xt(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Y = Array.isArray, Dn = 1 / 0, He = V ? V.prototype : void 0, Ye = He ? He.toString : void 0;
function Pt(e) {
  if (typeof e == "string")
    return e;
  if (Y(e))
    return xt(e, Pt) + "";
  if (Ee(e))
    return Ye ? Ye.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Dn ? "-0" : t;
}
function G(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Kn(e) {
  return e;
}
var Hn = "[object AsyncFunction]", Yn = "[object Function]", qn = "[object GeneratorFunction]", Wn = "[object Proxy]";
function It(e) {
  if (!G(e))
    return !1;
  var t = K(e);
  return t == Yn || t == qn || t == Hn || t == Wn;
}
var Te = N["__core-js_shared__"], qe = function() {
  var e = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zn(e) {
  return !!qe && qe in e;
}
var Xn = Function.prototype, Qn = Xn.toString;
function q(e) {
  if (e != null) {
    try {
      return Qn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jn = /[\\^$.*+?()[\]{}|]/g, er = /^\[object .+?Constructor\]$/, tr = Function.prototype, nr = Object.prototype, rr = tr.toString, ar = nr.hasOwnProperty, or = RegExp(
  "^" + rr.call(ar).replace(Jn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function lr(e) {
  if (!G(e) || Zn(e))
    return !1;
  var t = It(e) ? or : er;
  return t.test(q(e));
}
function ur(e, t) {
  return e == null ? void 0 : e[t];
}
function W(e, t) {
  var n = ur(e, t);
  return lr(n) ? n : void 0;
}
var Se = W(N, "WeakMap"), We = Object.create, ir = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!G(t))
      return {};
    if (We)
      return We(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function cr(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function sr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var fr = 800, dr = 16, pr = Date.now;
function gr(e) {
  var t = 0, n = 0;
  return function() {
    var r = pr(), a = dr - (r - n);
    if (n = r, a > 0) {
      if (++t >= fr)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function hr(e) {
  return function() {
    return e;
  };
}
var de = function() {
  try {
    var e = W(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), yr = de ? function(e, t) {
  return de(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hr(t),
    writable: !0
  });
} : Kn;
const vr = yr;
var br = gr(vr);
function mr(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Tr = 9007199254740991, wr = /^(?:0|[1-9]\d*)$/;
function Ft(e, t) {
  var n = typeof e;
  return t = t ?? Tr, !!t && (n == "number" || n != "symbol" && wr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Vt(e, t, n) {
  t == "__proto__" && de ? de(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Nt(e, t) {
  return e === t || e !== e && t !== t;
}
var $r = Object.prototype, Sr = $r.hasOwnProperty;
function xe(e, t, n) {
  var r = e[t];
  (!(Sr.call(e, t) && Nt(r, n)) || n === void 0 && !(t in e)) && Vt(e, t, n);
}
function ue(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var u = -1, o = t.length; ++u < o; ) {
    var l = t[u], g = r ? r(n[l], e[l], l, n, e) : void 0;
    g === void 0 && (g = e[l]), a ? Vt(n, l, g) : xe(n, l, g);
  }
  return n;
}
var Ze = Math.max;
function Cr(e, t, n) {
  return t = Ze(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, u = Ze(r.length - t, 0), o = Array(u); ++a < u; )
      o[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(o), cr(e, this, l);
  };
}
var Ar = 9007199254740991;
function Mt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ar;
}
function Ut(e) {
  return e != null && Mt(e.length) && !It(e);
}
var _r = Object.prototype;
function Pe(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || _r;
  return e === n;
}
function Or(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var jr = "[object Arguments]";
function Xe(e) {
  return H(e) && K(e) == jr;
}
var Lt = Object.prototype, Er = Lt.hasOwnProperty, xr = Lt.propertyIsEnumerable, Rt = Xe(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xe : function(e) {
  return H(e) && Er.call(e, "callee") && !xr.call(e, "callee");
};
function Pr() {
  return !1;
}
var kt = typeof exports == "object" && exports && !exports.nodeType && exports, Qe = kt && typeof module == "object" && module && !module.nodeType && module, Ir = Qe && Qe.exports === kt, Je = Ir ? N.Buffer : void 0, Fr = Je ? Je.isBuffer : void 0, Bt = Fr || Pr, Vr = "[object Arguments]", Nr = "[object Array]", Mr = "[object Boolean]", Ur = "[object Date]", Lr = "[object Error]", Rr = "[object Function]", kr = "[object Map]", Br = "[object Number]", zr = "[object Object]", Gr = "[object RegExp]", Dr = "[object Set]", Kr = "[object String]", Hr = "[object WeakMap]", Yr = "[object ArrayBuffer]", qr = "[object DataView]", Wr = "[object Float32Array]", Zr = "[object Float64Array]", Xr = "[object Int8Array]", Qr = "[object Int16Array]", Jr = "[object Int32Array]", ea = "[object Uint8Array]", ta = "[object Uint8ClampedArray]", na = "[object Uint16Array]", ra = "[object Uint32Array]", w = {};
w[Wr] = w[Zr] = w[Xr] = w[Qr] = w[Jr] = w[ea] = w[ta] = w[na] = w[ra] = !0;
w[Vr] = w[Nr] = w[Yr] = w[Mr] = w[qr] = w[Ur] = w[Lr] = w[Rr] = w[kr] = w[Br] = w[zr] = w[Gr] = w[Dr] = w[Kr] = w[Hr] = !1;
function aa(e) {
  return H(e) && Mt(e.length) && !!w[K(e)];
}
function Ie(e) {
  return function(t) {
    return e(t);
  };
}
var zt = typeof exports == "object" && exports && !exports.nodeType && exports, re = zt && typeof module == "object" && module && !module.nodeType && module, oa = re && re.exports === zt, we = oa && jt.process, Q = function() {
  try {
    var e = re && re.require && re.require("util").types;
    return e || we && we.binding && we.binding("util");
  } catch {
  }
}(), et = Q && Q.isTypedArray, la = et ? Ie(et) : aa, ua = Object.prototype, ia = ua.hasOwnProperty;
function Gt(e, t) {
  var n = Y(e), r = !n && Rt(e), a = !n && !r && Bt(e), u = !n && !r && !a && la(e), o = n || r || a || u, l = o ? Or(e.length, String) : [], g = l.length;
  for (var f in e)
    (t || ia.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Ft(f, g))) && l.push(f);
  return l;
}
function Dt(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ca = Dt(Object.keys, Object), sa = Object.prototype, fa = sa.hasOwnProperty;
function da(e) {
  if (!Pe(e))
    return ca(e);
  var t = [];
  for (var n in Object(e))
    fa.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Fe(e) {
  return Ut(e) ? Gt(e) : da(e);
}
function pa(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var ga = Object.prototype, ha = ga.hasOwnProperty;
function ya(e) {
  if (!G(e))
    return pa(e);
  var t = Pe(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !ha.call(e, r)) || n.push(r);
  return n;
}
function Ve(e) {
  return Ut(e) ? Gt(e, !0) : ya(e);
}
var va = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ba = /^\w*$/;
function ma(e, t) {
  if (Y(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ee(e) ? !0 : ba.test(e) || !va.test(e) || t != null && e in Object(t);
}
var oe = W(Object, "create");
function Ta() {
  this.__data__ = oe ? oe(null) : {}, this.size = 0;
}
function wa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $a = "__lodash_hash_undefined__", Sa = Object.prototype, Ca = Sa.hasOwnProperty;
function Aa(e) {
  var t = this.__data__;
  if (oe) {
    var n = t[e];
    return n === $a ? void 0 : n;
  }
  return Ca.call(t, e) ? t[e] : void 0;
}
var _a = Object.prototype, Oa = _a.hasOwnProperty;
function ja(e) {
  var t = this.__data__;
  return oe ? t[e] !== void 0 : Oa.call(t, e);
}
var Ea = "__lodash_hash_undefined__";
function xa(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = oe && t === void 0 ? Ea : t, this;
}
function D(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
D.prototype.clear = Ta;
D.prototype.delete = wa;
D.prototype.get = Aa;
D.prototype.has = ja;
D.prototype.set = xa;
function Pa() {
  this.__data__ = [], this.size = 0;
}
function he(e, t) {
  for (var n = e.length; n--; )
    if (Nt(e[n][0], t))
      return n;
  return -1;
}
var Ia = Array.prototype, Fa = Ia.splice;
function Va(e) {
  var t = this.__data__, n = he(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Fa.call(t, n, 1), --this.size, !0;
}
function Na(e) {
  var t = this.__data__, n = he(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ma(e) {
  return he(this.__data__, e) > -1;
}
function Ua(e, t) {
  var n = this.__data__, r = he(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function L(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
L.prototype.clear = Pa;
L.prototype.delete = Va;
L.prototype.get = Na;
L.prototype.has = Ma;
L.prototype.set = Ua;
var le = W(N, "Map");
function La() {
  this.size = 0, this.__data__ = {
    hash: new D(),
    map: new (le || L)(),
    string: new D()
  };
}
function Ra(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ye(e, t) {
  var n = e.__data__;
  return Ra(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ka(e) {
  var t = ye(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ba(e) {
  return ye(this, e).get(e);
}
function za(e) {
  return ye(this, e).has(e);
}
function Ga(e, t) {
  var n = ye(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function B(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
B.prototype.clear = La;
B.prototype.delete = ka;
B.prototype.get = Ba;
B.prototype.has = za;
B.prototype.set = Ga;
var Da = "Expected a function";
function Ne(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Da);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], u = n.cache;
    if (u.has(a))
      return u.get(a);
    var o = e.apply(this, r);
    return n.cache = u.set(a, o) || u, o;
  };
  return n.cache = new (Ne.Cache || B)(), n;
}
Ne.Cache = B;
var Ka = 500;
function Ha(e) {
  var t = Ne(e, function(r) {
    return n.size === Ka && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Ya = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qa = /\\(\\)?/g, Wa = Ha(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ya, function(n, r, a, u) {
    t.push(a ? u.replace(qa, "$1") : r || n);
  }), t;
});
function Za(e) {
  return e == null ? "" : Pt(e);
}
function ve(e, t) {
  return Y(e) ? e : ma(e, t) ? [e] : Wa(Za(e));
}
var Xa = 1 / 0;
function Me(e) {
  if (typeof e == "string" || Ee(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Xa ? "-0" : t;
}
function Kt(e, t) {
  t = ve(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Me(t[n++])];
  return n && n == r ? e : void 0;
}
function tt(e, t, n) {
  var r = e == null ? void 0 : Kt(e, t);
  return r === void 0 ? n : r;
}
function Ue(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var nt = V ? V.isConcatSpreadable : void 0;
function Qa(e) {
  return Y(e) || Rt(e) || !!(nt && e && e[nt]);
}
function Ht(e, t, n, r, a) {
  var u = -1, o = e.length;
  for (n || (n = Qa), a || (a = []); ++u < o; ) {
    var l = e[u];
    t > 0 && n(l) ? t > 1 ? Ht(l, t - 1, n, r, a) : Ue(a, l) : r || (a[a.length] = l);
  }
  return a;
}
function Ja(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ht(e, 1) : [];
}
function eo(e) {
  return br(Cr(e, void 0, Ja), e + "");
}
var Le = Dt(Object.getPrototypeOf, Object), to = "[object Object]", no = Function.prototype, ro = Object.prototype, Yt = no.toString, ao = ro.hasOwnProperty, oo = Yt.call(Object);
function lo(e) {
  if (!H(e) || K(e) != to)
    return !1;
  var t = Le(e);
  if (t === null)
    return !0;
  var n = ao.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Yt.call(n) == oo;
}
function uo(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var u = Array(a); ++r < a; )
    u[r] = e[r + t];
  return u;
}
function io() {
  this.__data__ = new L(), this.size = 0;
}
function co(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function so(e) {
  return this.__data__.get(e);
}
function fo(e) {
  return this.__data__.has(e);
}
var po = 200;
function go(e, t) {
  var n = this.__data__;
  if (n instanceof L) {
    var r = n.__data__;
    if (!le || r.length < po - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new B(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function J(e) {
  var t = this.__data__ = new L(e);
  this.size = t.size;
}
J.prototype.clear = io;
J.prototype.delete = co;
J.prototype.get = so;
J.prototype.has = fo;
J.prototype.set = go;
function ho(e, t) {
  return e && ue(t, Fe(t), e);
}
function yo(e, t) {
  return e && ue(t, Ve(t), e);
}
var qt = typeof exports == "object" && exports && !exports.nodeType && exports, rt = qt && typeof module == "object" && module && !module.nodeType && module, vo = rt && rt.exports === qt, at = vo ? N.Buffer : void 0, ot = at ? at.allocUnsafe : void 0;
function bo(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = ot ? ot(n) : new e.constructor(n);
  return e.copy(r), r;
}
function mo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, u = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (u[a++] = o);
  }
  return u;
}
function Wt() {
  return [];
}
var To = Object.prototype, wo = To.propertyIsEnumerable, lt = Object.getOwnPropertySymbols, Re = lt ? function(e) {
  return e == null ? [] : (e = Object(e), mo(lt(e), function(t) {
    return wo.call(e, t);
  }));
} : Wt;
function $o(e, t) {
  return ue(e, Re(e), t);
}
var So = Object.getOwnPropertySymbols, Co = So ? function(e) {
  for (var t = []; e; )
    Ue(t, Re(e)), e = Le(e);
  return t;
} : Wt;
const Zt = Co;
function Ao(e, t) {
  return ue(e, Zt(e), t);
}
function Xt(e, t, n) {
  var r = t(e);
  return Y(e) ? r : Ue(r, n(e));
}
function _o(e) {
  return Xt(e, Fe, Re);
}
function Qt(e) {
  return Xt(e, Ve, Zt);
}
var Ce = W(N, "DataView"), Ae = W(N, "Promise"), _e = W(N, "Set"), ut = "[object Map]", Oo = "[object Object]", it = "[object Promise]", ct = "[object Set]", st = "[object WeakMap]", ft = "[object DataView]", jo = q(Ce), Eo = q(le), xo = q(Ae), Po = q(_e), Io = q(Se), z = K;
(Ce && z(new Ce(new ArrayBuffer(1))) != ft || le && z(new le()) != ut || Ae && z(Ae.resolve()) != it || _e && z(new _e()) != ct || Se && z(new Se()) != st) && (z = function(e) {
  var t = K(e), n = t == Oo ? e.constructor : void 0, r = n ? q(n) : "";
  if (r)
    switch (r) {
      case jo:
        return ft;
      case Eo:
        return ut;
      case xo:
        return it;
      case Po:
        return ct;
      case Io:
        return st;
    }
  return t;
});
const ke = z;
var Fo = Object.prototype, Vo = Fo.hasOwnProperty;
function No(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Vo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var dt = N.Uint8Array;
function Be(e) {
  var t = new e.constructor(e.byteLength);
  return new dt(t).set(new dt(e)), t;
}
function Mo(e, t) {
  var n = t ? Be(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Uo = /\w*$/;
function Lo(e) {
  var t = new e.constructor(e.source, Uo.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var pt = V ? V.prototype : void 0, gt = pt ? pt.valueOf : void 0;
function Ro(e) {
  return gt ? Object(gt.call(e)) : {};
}
function ko(e, t) {
  var n = t ? Be(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Bo = "[object Boolean]", zo = "[object Date]", Go = "[object Map]", Do = "[object Number]", Ko = "[object RegExp]", Ho = "[object Set]", Yo = "[object String]", qo = "[object Symbol]", Wo = "[object ArrayBuffer]", Zo = "[object DataView]", Xo = "[object Float32Array]", Qo = "[object Float64Array]", Jo = "[object Int8Array]", el = "[object Int16Array]", tl = "[object Int32Array]", nl = "[object Uint8Array]", rl = "[object Uint8ClampedArray]", al = "[object Uint16Array]", ol = "[object Uint32Array]";
function ll(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Wo:
      return Be(e);
    case Bo:
    case zo:
      return new r(+e);
    case Zo:
      return Mo(e, n);
    case Xo:
    case Qo:
    case Jo:
    case el:
    case tl:
    case nl:
    case rl:
    case al:
    case ol:
      return ko(e, n);
    case Go:
      return new r();
    case Do:
    case Yo:
      return new r(e);
    case Ko:
      return Lo(e);
    case Ho:
      return new r();
    case qo:
      return Ro(e);
  }
}
function ul(e) {
  return typeof e.constructor == "function" && !Pe(e) ? ir(Le(e)) : {};
}
var il = "[object Map]";
function cl(e) {
  return H(e) && ke(e) == il;
}
var ht = Q && Q.isMap, sl = ht ? Ie(ht) : cl, fl = "[object Set]";
function dl(e) {
  return H(e) && ke(e) == fl;
}
var yt = Q && Q.isSet, pl = yt ? Ie(yt) : dl, gl = 1, hl = 2, yl = 4, Jt = "[object Arguments]", vl = "[object Array]", bl = "[object Boolean]", ml = "[object Date]", Tl = "[object Error]", en = "[object Function]", wl = "[object GeneratorFunction]", $l = "[object Map]", Sl = "[object Number]", tn = "[object Object]", Cl = "[object RegExp]", Al = "[object Set]", _l = "[object String]", Ol = "[object Symbol]", jl = "[object WeakMap]", El = "[object ArrayBuffer]", xl = "[object DataView]", Pl = "[object Float32Array]", Il = "[object Float64Array]", Fl = "[object Int8Array]", Vl = "[object Int16Array]", Nl = "[object Int32Array]", Ml = "[object Uint8Array]", Ul = "[object Uint8ClampedArray]", Ll = "[object Uint16Array]", Rl = "[object Uint32Array]", T = {};
T[Jt] = T[vl] = T[El] = T[xl] = T[bl] = T[ml] = T[Pl] = T[Il] = T[Fl] = T[Vl] = T[Nl] = T[$l] = T[Sl] = T[tn] = T[Cl] = T[Al] = T[_l] = T[Ol] = T[Ml] = T[Ul] = T[Ll] = T[Rl] = !0;
T[Tl] = T[en] = T[jl] = !1;
function fe(e, t, n, r, a, u) {
  var o, l = t & gl, g = t & hl, f = t & yl;
  if (n && (o = a ? n(e, r, a, u) : n(e)), o !== void 0)
    return o;
  if (!G(e))
    return e;
  var s = Y(e);
  if (s) {
    if (o = No(e), !l)
      return sr(e, o);
  } else {
    var S = ke(e), _ = S == en || S == wl;
    if (Bt(e))
      return bo(e, l);
    if (S == tn || S == Jt || _ && !a) {
      if (o = g || _ ? {} : ul(e), !l)
        return g ? Ao(e, yo(o, e)) : $o(e, ho(o, e));
    } else {
      if (!T[S])
        return a ? e : {};
      o = ll(e, S, l);
    }
  }
  u || (u = new J());
  var b = u.get(e);
  if (b)
    return b;
  u.set(e, o), pl(e) ? e.forEach(function(p) {
    o.add(fe(p, t, n, p, e, u));
  }) : sl(e) && e.forEach(function(p, y) {
    o.set(y, fe(p, t, n, y, e, u));
  });
  var C = f ? g ? Qt : _o : g ? Ve : Fe, P = s ? void 0 : C(e);
  return mr(P || e, function(p, y) {
    P && (y = p, p = e[y]), xe(o, y, fe(p, t, n, y, e, u));
  }), o;
}
function kl(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Bl(e, t) {
  return t.length < 2 ? e : Kt(e, uo(t, 0, -1));
}
function zl(e, t) {
  return t = ve(t, e), e = Bl(e, t), e == null || delete e[Me(kl(t))];
}
function Gl(e) {
  return lo(e) ? void 0 : e;
}
var Dl = 1, Kl = 2, Hl = 4, vt = eo(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = xt(t, function(u) {
    return u = ve(u, e), r || (r = u.length > 1), u;
  }), ue(e, Qt(e), n), r && (n = fe(n, Dl | Kl | Hl, Gl));
  for (var a = t.length; a--; )
    zl(n, t[a]);
  return n;
});
function Yl(e, t, n, r) {
  if (!G(e))
    return e;
  t = ve(t, e);
  for (var a = -1, u = t.length, o = u - 1, l = e; l != null && ++a < u; ) {
    var g = Me(t[a]), f = n;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (a != o) {
      var s = l[g];
      f = r ? r(s, g, l) : void 0, f === void 0 && (f = G(s) ? s : Ft(t[a + 1]) ? [] : {});
    }
    xe(l, g, f), l = l[g];
  }
  return e;
}
function ql(e, t, n) {
  return e == null ? e : Yl(e, t, n);
}
const Wl = { key: 0 }, Zl = { key: 1 }, Xl = { key: 2 }, ze = {
  __name: "v-element",
  props: {
    /**
     * @name row
     * @vue Prop
     * @description 数据源
     * @type ["Object"]
     * @default {}
     */
    row: {
      type: Object,
      default: () => ({})
    },
    /**
     * @name col
     * @vue Prop
     * @description 配置项
     * @type ["Object"]
     * @default {}
     */
    col: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    /**
     * @name update:row
     * @vue Event
     * @description 更新数据源
     */
    "update:row"
  ],
  setup(e, { emit: t }) {
    const n = e, r = t, a = E(tt(n.row, n.col.prop));
    ge(() => tt(n.row, n.col.prop), (g) => {
      a.value = g;
    });
    const u = () => {
      ql(n.row, n.col.prop, a.value), n.col.change && n.col.change(n.row, a.value), r("update:row", n.row);
    }, o = (g, f) => f.find((S) => S.value === g) || {}, l = (g, f) => {
      const s = o(g, f);
      return (s == null ? void 0 : s.label) || g;
    };
    return (g, f) => (c(), A(F, null, [
      e.col.scope ? $("", !0) : (c(), A("div", Wl, R(e.row[e.col.prop]), 1)),
      e.col.scope === "number-col" ? (c(), A("div", Zl, R(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : $("", !0),
      e.col.scope === "render" && e.col.render ? (c(), A("div", Xl, R(e.col.render(e.row, e.col.prop)), 1)) : $("", !0),
      ["textarea", "input"].includes(e.col.scope) ? (c(), v(d(se), I({
        key: 3,
        type: e.col.scope || "text"
      }, {
        ...vt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[0] || (f[0] = (s) => a.value = s),
        onChange: u
      }), null, 16, ["type", "modelValue"])) : $("", !0),
      e.col.scope === "input-number" ? (c(), v(d(pn), I({ key: 4 }, {
        ...vt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[1] || (f[1] = (s) => a.value = s),
        onChange: u
      }), null, 16, ["modelValue"])) : $("", !0),
      e.col.scope === "select" ? (c(), v(d($t), I({ key: 5 }, {
        ...e.col
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[2] || (f[2] = (s) => a.value = s),
        onChange: u
      }), {
        default: m(() => [
          (c(!0), A(F, null, U(e.col.options, (s) => (c(), v(d(St), {
            key: s.value,
            label: s.label,
            value: s.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"])) : $("", !0),
      e.col.scope === "tag" ? (c(), v(d(gn), {
        key: 6,
        type: o(e.row[e.col.prop], e.col.options).type
      }, {
        default: m(() => [
          k(R(l(e.row[e.col.prop], e.col.options)), 1)
        ]),
        _: 1
      }, 8, ["type"])) : $("", !0),
      e.col.scope === "img" ? (c(), v(d(hn), {
        key: 7,
        src: a.value,
        fit: e.col.fit || "cover"
      }, null, 8, ["src", "fit"])) : $("", !0),
      ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (c(), v(d(Ct), I({ key: 8 }, {
        ...e.col
      }, {
        type: e.col.scope,
        modelValue: a.value,
        "onUpdate:modelValue": f[3] || (f[3] = (s) => a.value = s),
        onChange: u
      }), null, 16, ["type", "modelValue"])) : $("", !0),
      e.col.scope === "switch" ? (c(), v(d(yn), I({
        key: 9,
        modelValue: a.value,
        "onUpdate:modelValue": f[4] || (f[4] = (s) => a.value = s),
        onChange: u
      }, {
        ...e.col
      }), null, 16, ["modelValue"])) : $("", !0),
      e.col.scope === "radio" ? (c(), v(d(vn), {
        key: 10,
        modelValue: a.value,
        "onUpdate:modelValue": f[5] || (f[5] = (s) => a.value = s),
        onChange: u
      }, {
        default: m(() => [
          (c(!0), A(F, null, U(e.col.options, (s) => (c(), v(d(At), {
            label: s.value,
            key: s.label
          }, {
            default: m(() => [
              k(R(s.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : $("", !0)
    ], 64));
  }
}, nn = {
  __name: "v-table",
  props: {
    /**
     * @name data
     * @vue Prop
     * @description 数据源
     * @type ["Array"]
     * @default []
     */
    data: {
      type: Array,
      default: () => []
    },
    /**
     * @name columns
     * @vue Prop
     * @description 列配置
     * @type ["Array"]
     */
    columns: {
      type: Array
    },
    /**
     * @name selection
     * @vue Prop
     * @description 多选
     * @type ["Function"]
     */
    selection: {
      type: Function
    },
    /**
     * @name radio
     * @vue Prop
     * @description 单选
     * @type ["Function"]
     */
    radio: {
      type: Function
    },
    /**
     * @name onAdd
     * @vue Prop
     * @description 添加按钮
     * @type ["Function"]
     */
    onAdd: {
      type: Function
    },
    /**
     * @name onSize
     * @vue Prop
     * @description 是否监听窗口变化
     * @type ["Boolean"]
     * @default false
     */
    onSize: {
      type: Boolean,
      default: !1
    },
    /**
     * @name height
     * @vue Prop
     * @description 表格高度
     * @type ["String", "Number"]
     */
    height: [String, Number],
    /**
     * @name tableProps
     * @vue Prop
     * @description el-table属性
     * @type ["Object"]
     * @default {}
     */
    tableProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { expose: t }) {
    const n = e, { proxy: r } = pe(), a = E(null), u = E(null), o = E(null), l = () => {
      const b = document.querySelector(".table-container .c-table");
      if (b) {
        const { top: C } = b.getBoundingClientRect();
        u.value = window.innerHeight - C - 50;
      }
    }, g = () => {
      o.value.clearSelection();
    }, f = () => {
      o.value.setCurrentRow();
    }, s = (b) => {
      a.value = b ? b.id : null, n.radio && n.radio(b);
    }, S = (b, C, P) => {
      r.$emit(b.event, C, P), r.$emit("btnClick", {
        btn: b,
        row: C,
        index: P
      });
    }, _ = (b, C, P) => "if" in b ? typeof b.if == "function" ? b.if(C, P) : C[b.if] : b.render ? !!b.render(C, P) : !!b.label;
    return t({
      clearSelection: g,
      clearRadio: f
    }), Oe(() => {
      n.onSize && (window.addEventListener("resize", l), ln(() => {
        l();
      }));
    }), un(() => {
      n.onSize && window.removeEventListener("resize", l);
    }), (b, C) => {
      const P = cn("v-table", !0);
      return c(), A("div", {
        class: je(["v-table", { pd: e.onAdd }])
      }, [
        j(d(bn), I({
          ref_key: "tableRef",
          ref: o,
          border: ""
        }, {
          ...e.tableProps
        }, {
          data: e.data,
          onSelectionChange: e.selection,
          "highlight-current-row": !!e.radio,
          onCurrentChange: s
        }), {
          default: m(() => [
            e.selection ? (c(), v(d(me), {
              key: 0,
              type: "selection",
              width: "40"
            })) : $("", !0),
            e.radio ? (c(), v(d(me), {
              key: 1,
              fixed: "left",
              width: "60"
            }, {
              header: m(() => [
                ae("div", {
                  class: "radio-header",
                  onClick: f
                }, "取消")
              ]),
              default: m(({ row: p }) => [
                j(d(At), {
                  modelValue: a.value,
                  "onUpdate:modelValue": C[0] || (C[0] = (y) => a.value = y),
                  label: p.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : $("", !0),
            (c(!0), A(F, null, U(e.columns, (p) => (c(), v(d(me), I({
              key: p.prop,
              width: p.width
            }, {
              ...p
            }), {
              default: m(({ row: y, $index: i }) => [
                ["btn", "table"].includes(p.scope) ? $("", !0) : (c(), v(ze, {
                  key: 0,
                  row: y,
                  col: p
                }, null, 8, ["row", "col"])),
                p.scope === "table" ? (c(), v(P, {
                  key: 1,
                  data: y[p.prop],
                  columns: p.options
                }, null, 8, ["data", "columns"])) : $("", !0),
                p.scope === "btn" ? (c(!0), A(F, { key: 2 }, U(p.options || [], (h) => (c(), A(F, {
                  key: h.event
                }, [
                  _(h, y, i) ? (c(), v(d(ne), I({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: h.type || "primary",
                    onClick: (O) => S(h, y, i)
                  }, {
                    ...h
                  }), {
                    default: m(() => [
                      k(R(h.label || (h.render ? h.render(y, i) : "")), 1)
                    ]),
                    _: 2
                  }, 1040, ["type", "onClick"])) : $("", !0)
                ], 64))), 128)) : $("", !0)
              ]),
              _: 2
            }, 1040, ["width"]))), 128))
          ]),
          _: 1
        }, 16, ["data", "onSelectionChange", "highlight-current-row"]),
        e.onAdd ? (c(), A("div", {
          key: 0,
          class: "add-btn",
          onClick: C[1] || (C[1] = (...p) => e.onAdd && e.onAdd(...p))
        })) : $("", !0)
      ], 2);
    };
  }
}, Ql = { class: "v-page-operator" }, Jl = { class: "v-page-table" }, eu = {
  __name: "v-page",
  props: {
    /**
     * @name showPagination
     * @vue Prop
     * @description 是否显示分页
     * @type ["Boolean"]
     * @default true
     */
    showPagination: {
      type: Boolean,
      default: !0
    },
    /**
     * @name columns
     * @vue Prop
     * @description 表格列配置
     * @type ["Array"]
     * @default []
     */
    columns: {
      type: Array,
      default: () => []
    },
    /**
     * @name radio
     * @vue Prop
     * @description 表格单选
     * @type ["Function"]
     */
    radio: {
      type: Function
    },
    /**
     * @name selection
     * @vue Prop
     * @description 表格多选
     * @type ["Function"]
     */
    selection: {
      type: Function
    },
    /**
     * @name onAdd
     * @vue Prop
     * @description 表格添加按钮方法
     * @type ["Function"]
     */
    onAdd: {
      type: Function
    },
    /**
     * @name filter
     * @vue Prop
     * @description 筛选配置
     * @type ["Array"]
     */
    filter: {
      type: Array
    },
    /**
     * @name showFilter
     * @vue Prop
     * @description 是否显示筛选
     * @type ["Boolean"]
     * @default true
     */
    showFilter: {
      type: Boolean,
      default: !0
    },
    /**
     * @name filterBtns
     * @vue Prop
     * @description 筛选按钮配置
     * @type ["Array"]
     * @default []
     */
    filterBtns: {
      type: Array,
      default: () => []
    },
    /**
     * @name filterLabelWidth
     * @vue Prop
     * @description 筛选项宽度设置
     * @type ["String"]
     */
    filterLabelWidth: {
      type: String
    },
    /**
     * @name filterCol
     * @vue Prop
     * @description 筛选列数
     * @type ["Number"]
     */
    filterCol: {
      type: Number,
      default: 4
    },
    /**
     * @name btns
     * @vue Prop
     * @description 按钮配置
     * @type ["Array"]
     * @default []
     */
    btns: {
      type: Array,
      default: () => []
    },
    /**
     * @name getList
     * @vue Prop
     * @description 表格获取数据源方法
     * @type ["Function"]
     */
    getList: {
      type: Function
    },
    /**
     * @name formatList
     * @vue Prop
     * @description 格式化数据
     * @type ["Function"]
     */
    formatList: {
      type: Function,
      default: null
    },
    /**
     * @name init
     * @vue Prop
     * @description 初始化请求列表
     * @type ["Boolean"]
     */
    init: {
      type: Boolean,
      default: !0
    },
    // 表格属性，透传下去
    table: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { expose: t }) {
    const { GET_LIST: n, GET_TOTAL: r, PAGE_NUM_KEY: a, PAGE_SIZE_KEY: u } = An(), { proxy: o } = pe(), l = e, g = E([]), f = E({}), s = E(0), S = E({}), _ = E({}), b = E(null), C = () => {
      var x;
      (x = b.value) == null || x.clearRadio();
    }, P = () => {
      var x;
      (x = b.value) == null || x.clearSelection();
    }, p = ({ btn: x, row: Z, index: M }) => {
      o.$emit(x.event, Z, M);
    }, y = async (x = {}) => {
      if (!l.getList)
        return;
      const Z = mn.service({
        target: ".v-page-table"
      });
      try {
        f.value = {
          [a]: S.value.pageNum || 1,
          [u]: S.value.pageSize || 10,
          ...x
        };
        const M = await l.getList(f.value);
        let ee = n(M);
        l.formatList && (ee = l.formatList(ee)), g.value = ee.map((be, an) => ({
          ...be,
          index: an + 1 + (f.value[a] - 1) * f.value[u]
        })), s.value = r(M);
      } finally {
        Z.close();
      }
    }, i = (x) => {
      S.value = x, P(), C(), y({
        ...x,
        ..._.value
      });
    }, h = async () => {
      P(), C(), await y({
        ...S.value,
        ..._.value
      });
    }, O = (x) => {
      S.value.pageNum = 1, _.value = x, h(), o.$emit("search", x);
    }, ie = () => {
      ce.value.search();
    }, ce = E(), rn = () => ce.value.getCurrentFilter();
    return Oe(() => {
      l.init && (l.showFilter ? ce.value.search() : y());
    }), t({
      refreshList: h,
      clearSelection: P,
      clearRadio: C,
      search: ie,
      getCurrentFilter: rn
    }), (x, Z) => (c(), A("div", {
      class: je(["v-page", { pd: l.table && l.table.onAdd }])
    }, [
      e.showFilter ? (c(), v(_t, {
        key: 0,
        ref_key: "filterRef",
        ref: ce,
        filter: e.filter,
        "label-width": e.filterLabelWidth,
        btns: e.filterBtns,
        col: e.filterCol,
        onSearch: O,
        onReset: Z[0] || (Z[0] = () => O({}))
      }, null, 8, ["filter", "label-width", "btns", "col"])) : $("", !0),
      ae("div", Ql, [
        (c(!0), A(F, null, U(e.btns, (M, ee) => (c(), v(d(ne), {
          key: ee,
          type: M.type || "primary",
          onClick: (be) => M.click && M.click(be)
        }, {
          default: m(() => [
            k(R(M.label), 1)
          ]),
          _: 2
        }, 1032, ["type", "onClick"]))), 128)),
        mt(x.$slots, "btn")
      ]),
      ae("div", Jl, [
        j(nn, I({
          ref_key: "tableRef",
          ref: b,
          data: g.value,
          columns: e.columns,
          selection: e.selection,
          radio: e.radio
        }, {
          ...l.table
        }, { onBtnClick: p }), null, 16, ["data", "columns", "selection", "radio"])
      ]),
      e.showPagination ? (c(), v(Ot, {
        key: 1,
        page: S.value.pageNum,
        total: s.value,
        onPagination: i
      }, null, 8, ["page", "total"])) : $("", !0)
    ], 2));
  }
}, tu = {
  __name: "v-form",
  props: {
    /**
     * @name list
     * @vue Prop
     * @description 配置
     * @type ["Array"]
     * @default []
     */
    list: {
      type: Array,
      default: () => []
    },
    /**
     * @name value
     * @vue Prop
     * @description 表单数据
     * @type ["Object"]
     * @default {}
     */
    value: {
      type: Object,
      default: () => ({})
    },
    /**
     * @name rules
     * @vue Prop
     * @description 表单验证规则
     * @type ["Object"]
     * @default {}
     */
    rules: {
      type: Object,
      default: () => ({})
    },
    /**
     * @name col
     * @vue Prop
     * @description 列数
     * @type ["Number"]
     * @default 2
     */
    col: {
      type: Number,
      default: 2
    }
  },
  emits: ["update:value"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = n, u = E({ ...r.value }), o = E();
    ge(() => r.value, () => {
      l();
    }, { deep: !0 });
    const l = () => {
      u.value = {
        ...r.value
      };
    }, g = (s) => {
      a("update:value", s);
    };
    return t({
      validate: () => new Promise((s, S) => {
        o.value.validate((_) => {
          _ ? s(u.value) : S();
        });
      }),
      reset: l,
      form: u
    }), (s, S) => (c(), v(d(Tt), I({
      class: "c-form",
      ref_key: "formRef",
      ref: o,
      model: u.value,
      rules: e.rules,
      "label-width": "130px"
    }, s.$attrs), {
      default: m(() => [
        j(d($e), { gutter: 20 }, {
          default: m(() => [
            (c(!0), A(F, null, U(e.list, (_) => (c(), v(d(X), {
              span: _.colSpan || 24 / e.col,
              key: _.prop
            }, {
              default: m(() => [
                j(d(wt), {
                  label: _.label,
                  prop: _.prop
                }, {
                  default: m(() => [
                    j(ze, {
                      row: u.value,
                      col: _,
                      "onUpdate:row": g
                    }, null, 8, ["row", "col"]),
                    mt(s.$slots, _.prop)
                  ]),
                  _: 2
                }, 1032, ["label", "prop"])
              ]),
              _: 2
            }, 1032, ["span"]))), 128))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["model", "rules"]));
  }
}, au = {
  install(e, t = {}) {
    const { config: n } = t;
    n && Cn(n, e), e.component("VPage", eu), e.component("VFilter", _t), e.component("VTable", nn), e.component("VElement", ze), e.component("VPagination", Ot), e.component("VForm", tu);
  }
};
export {
  ze as VElement,
  _t as VFilter,
  tu as VForm,
  Ot as VPagination,
  nn as VTable,
  au as default,
  Cn as setConfig
};
