import { inject as or, defineComponent as bt, openBlock as c, createElementBlock as _, createElementVNode as le, getCurrentInstance as pe, computed as Ge, ref as E, watch as ge, onMounted as Oe, createVNode as j, unref as d, withCtx as b, Fragment as V, renderList as L, createBlock as v, createCommentVNode as S, mergeProps as I, createTextVNode as z, toDisplayString as B, normalizeClass as je, nextTick as lr, onUnmounted as ur, resolveComponent as ir, renderSlot as mt } from "vue";
import { ElCard as cr, ElForm as Tt, ElRow as $e, ElCol as J, ElFormItem as wt, ElInput as se, ElSelect as $t, ElOption as St, ElDatePicker as Ct, ElCascader as sr, ElButton as ae, ElPagination as fr, ElInputNumber as dr, ElTag as pr, ElImage as gr, ElSwitch as hr, ElRadioGroup as yr, ElRadio as At, ElTable as vr, ElTableColumn as me, ElLoading as br } from "element-plus";
let mr = "pageSize", Tr = "pageNum", wr = (e) => e.data, $r = (e) => e.total;
function Sr(e, t) {
  t && t.provide("vxe-page", e);
}
function Cr() {
  return or("vxe-page", {
    PAGE_SIZE_KEY: mr,
    PAGE_NUM_KEY: Tr,
    GET_LIST: wr,
    GET_TOTAL: $r
  });
}
/*! Element Plus Icons Vue v2.3.1 */
var Ar = /* @__PURE__ */ bt({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, r) => (c(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      le("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), _r = Ar, Or = /* @__PURE__ */ bt({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, r) => (c(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      le("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), jr = Or;
const Er = { class: "v-filter" }, _t = {
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
    const { proxy: r } = pe(), n = e, a = Ge(() => {
      const g = n.filter.filter((i) => i.required), w = {};
      return g.forEach((i) => {
        w[i.prop] = [
          { required: !0, message: i.message || `${i.label}不能为空` }
        ];
      }), w;
    }), u = E(), o = E({}), l = E([]), p = E(["date", "daterange", "month", "year", "monthrange"]), f = Ge(() => 24 / n.col);
    ge(() => n.filter, (g) => {
      s(g);
    }, { deep: !0 });
    const s = (g = []) => {
      l.value = g.map((w) => ((w.initValue || w.initValue === 0) && (o.value[w.prop] = w.initValue), {
        ...w
      }));
    }, C = () => {
      o.value = {};
    }, O = (g, w) => {
      p.value.includes(w.scope) && (w.startKey && (o.value[w.startKey] = g && g.length > 1 ? g[0] : ""), w.endKey && (o.value[w.endKey] = g && g.length > 1 ? g[1] : ""));
    }, y = () => new Promise((g, w) => {
      u.value.validate((i) => {
        if (i) {
          const h = {};
          l.value.forEach((x) => {
            const k = x.filterProp || x.prop;
            x.startKey ? (h[x.startKey] = o.value[x.startKey], h[x.endKey] = o.value[x.endKey]) : h[k] = o.value[x.prop], x.format && typeof x.format == "function" && (h[k] = x.format(o.value[x.prop]));
          }), r.$emit("search", h), g();
        } else
          w();
      });
    }), A = () => {
      C(), r.$emit("reset");
    };
    return t({
      search: y,
      getCurrentFilter: () => o.value,
      setCurrentFilter: (g, w = !0) => {
        o.value = {
          ...g
        }, w && y();
      }
    }), Oe(() => {
      s(n.filter);
    }), (g, w) => (c(), _("div", Er, [
      j(d(cr), null, {
        default: b(() => [
          j(d(Tt), {
            ref_key: "filterFormRef",
            ref: u,
            model: o.value,
            "label-width": e.labelWidth,
            rules: a.value
          }, {
            default: b(() => [
              j(d($e), { gutter: 20 }, {
                default: b(() => [
                  (c(!0), _(V, null, L(l.value, (i) => (c(), v(d(J), {
                    span: f.value,
                    key: i.prop
                  }, {
                    default: b(() => [
                      j(d(wt), {
                        label: i.label,
                        "label-width": i.labelWidth || e.labelWidth,
                        prop: i.prop
                      }, {
                        default: b(() => [
                          i.scope === "input" ? (c(), v(d(se), {
                            key: 0,
                            modelValue: o.value[i.prop],
                            "onUpdate:modelValue": (h) => o.value[i.prop] = h,
                            modelModifiers: { trim: !0 },
                            placeholder: i.placeholder || "请输入"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : S("", !0),
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
                              var x;
                              return (x = i.remoteMethod) == null ? void 0 : x.call(i, h, i);
                            },
                            onChange: function(h) {
                              i.onchange && i.onchange(h);
                            }
                          }), {
                            default: b(() => [
                              (c(!0), _(V, null, L(i.options || [], (h) => (c(), v(d(St), {
                                key: h.value,
                                label: h.label,
                                value: h.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : S("", !0),
                          p.value.includes(i.scope) ? (c(), v(d(Ct), {
                            key: 2,
                            modelValue: o.value[i.prop],
                            "onUpdate:modelValue": (h) => o.value[i.prop] = h,
                            "value-format": i.format || "YYYY-MM-DD HH:mm:ss",
                            type: i.scope,
                            placeholder: i.placeholder || "请选择",
                            "start-placeholder": "开始",
                            "end-placeholder": "结束",
                            clearable: "",
                            onChange: (h) => O(h, i)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "onChange"])) : S("", !0),
                          i.scope === "range" ? (c(), v(d($e), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: b(() => [
                              j(d(J), { span: 11 }, {
                                default: b(() => [
                                  j(d(se), {
                                    modelValue: o.value[i.startKey],
                                    "onUpdate:modelValue": (h) => o.value[i.startKey] = h,
                                    placeholder: i.placeholder || "请输入",
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024),
                              j(d(J), {
                                class: "line",
                                span: 2
                              }, {
                                default: b(() => [
                                  z("-")
                                ]),
                                _: 1
                              }),
                              j(d(J), { span: 11 }, {
                                default: b(() => [
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
                          }, 1024)) : S("", !0),
                          i.scope === "cascader" ? (c(), v(d(sr), {
                            key: 4,
                            modelValue: o.value[i.prop],
                            "onUpdate:modelValue": (h) => o.value[i.prop] = h,
                            options: i.options,
                            props: i.cascaderProps || { checkStrictly: !0, emitPath: !1 },
                            "collapse-tags": i.collapseTags,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "collapse-tags"])) : S("", !0)
                        ]),
                        _: 2
                      }, 1032, ["label", "label-width", "prop"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128)),
                  j(d(J), { span: f.value }, {
                    default: b(() => [
                      j(d(ae), {
                        type: "primary",
                        icon: d(jr),
                        onClick: y
                      }, {
                        default: b(() => [
                          z("搜索")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      j(d(ae), {
                        icon: d(_r),
                        onClick: A
                      }, {
                        default: b(() => [
                          z("重置")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (c(!0), _(V, null, L(e.btns, (i) => (c(), v(d(ae), {
                        key: i.text,
                        onClick: i.click
                      }, {
                        default: b(() => [
                          z(B(i.text), 1)
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
Math.easeInOutQuad = function(e, t, r, n) {
  return e /= n / 2, e < 1 ? r / 2 * e * e + t : (e--, -r / 2 * (e * (e - 2) - 1) + t);
};
var xr = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function Pr(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function Fr() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function De(e, t, r) {
  const n = Fr(), a = e - n, u = 20;
  let o = 0;
  t = typeof t > "u" ? 500 : t;
  var l = function() {
    o += u;
    var p = Math.easeInOutQuad(o, n, a, t);
    Pr(p), o < t ? xr(l) : r && typeof r == "function" && r();
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
    const t = e, r = E(10), n = E(t.page || 1), { proxy: a } = pe();
    ge(() => t.page, (l) => {
      console.log(l), n.value = l;
    });
    const u = (l) => {
      console.log("size change"), n.value * l > t.total && (n.value = 1), r.value = l, a.$emit("pagination", { pageNum: n.value, pageSize: l }), t.autoScroll && De(0, 800);
    }, o = (l) => {
      console.log("page change"), n.value = l, a.$emit("pagination", { pageNum: l, pageSize: r.value }), t.autoScroll && De(0, 800);
    };
    return (l, p) => (c(), _("div", {
      class: je([{ hidden: e.hidden }, "v-pagination"])
    }, [
      j(d(fr), I({
        "current-page": n.value,
        layout: e.layout
      }, l.$attrs, {
        onSizeChange: u,
        onCurrentChange: o
      }), null, 16, ["current-page", "layout"])
    ], 2));
  }
};
var jt = typeof global == "object" && global && global.Object === Object && global, Ir = typeof self == "object" && self && self.Object === Object && self, M = jt || Ir || Function("return this")(), N = M.Symbol, Et = Object.prototype, Vr = Et.hasOwnProperty, Nr = Et.toString, ne = N ? N.toStringTag : void 0;
function Mr(e) {
  var t = Vr.call(e, ne), r = e[ne];
  try {
    e[ne] = void 0;
    var n = !0;
  } catch {
  }
  var a = Nr.call(e);
  return n && (t ? e[ne] = r : delete e[ne]), a;
}
var Ur = Object.prototype, Lr = Ur.toString;
function Rr(e) {
  return Lr.call(e);
}
var kr = "[object Null]", Br = "[object Undefined]", Ke = N ? N.toStringTag : void 0;
function Y(e) {
  return e == null ? e === void 0 ? Br : kr : Ke && Ke in Object(e) ? Mr(e) : Rr(e);
}
function q(e) {
  return e != null && typeof e == "object";
}
var zr = "[object Symbol]";
function Ee(e) {
  return typeof e == "symbol" || q(e) && Y(e) == zr;
}
function xt(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var W = Array.isArray, Gr = 1 / 0, He = N ? N.prototype : void 0, Ye = He ? He.toString : void 0;
function Pt(e) {
  if (typeof e == "string")
    return e;
  if (W(e))
    return xt(e, Pt) + "";
  if (Ee(e))
    return Ye ? Ye.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Gr ? "-0" : t;
}
function K(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Dr(e) {
  return e;
}
var Kr = "[object AsyncFunction]", Hr = "[object Function]", Yr = "[object GeneratorFunction]", qr = "[object Proxy]";
function Ft(e) {
  if (!K(e))
    return !1;
  var t = Y(e);
  return t == Hr || t == Yr || t == Kr || t == qr;
}
var Te = M["__core-js_shared__"], qe = function() {
  var e = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wr(e) {
  return !!qe && qe in e;
}
var Zr = Function.prototype, Xr = Zr.toString;
function Z(e) {
  if (e != null) {
    try {
      return Xr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qr = /[\\^$.*+?()[\]{}|]/g, Jr = /^\[object .+?Constructor\]$/, en = Function.prototype, tn = Object.prototype, rn = en.toString, nn = tn.hasOwnProperty, an = RegExp(
  "^" + rn.call(nn).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function on(e) {
  if (!K(e) || Wr(e))
    return !1;
  var t = Ft(e) ? an : Jr;
  return t.test(Z(e));
}
function ln(e, t) {
  return e == null ? void 0 : e[t];
}
function X(e, t) {
  var r = ln(e, t);
  return on(r) ? r : void 0;
}
var Se = X(M, "WeakMap"), We = Object.create, un = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!K(t))
      return {};
    if (We)
      return We(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function cn(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function sn(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var fn = 800, dn = 16, pn = Date.now;
function gn(e) {
  var t = 0, r = 0;
  return function() {
    var n = pn(), a = dn - (n - r);
    if (r = n, a > 0) {
      if (++t >= fn)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function hn(e) {
  return function() {
    return e;
  };
}
var de = function() {
  try {
    var e = X(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), yn = de ? function(e, t) {
  return de(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hn(t),
    writable: !0
  });
} : Dr;
const vn = yn;
var bn = gn(vn);
function mn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Tn = 9007199254740991, wn = /^(?:0|[1-9]\d*)$/;
function It(e, t) {
  var r = typeof e;
  return t = t ?? Tn, !!t && (r == "number" || r != "symbol" && wn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Vt(e, t, r) {
  t == "__proto__" && de ? de(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Nt(e, t) {
  return e === t || e !== e && t !== t;
}
var $n = Object.prototype, Sn = $n.hasOwnProperty;
function xe(e, t, r) {
  var n = e[t];
  (!(Sn.call(e, t) && Nt(n, r)) || r === void 0 && !(t in e)) && Vt(e, t, r);
}
function ce(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var u = -1, o = t.length; ++u < o; ) {
    var l = t[u], p = n ? n(r[l], e[l], l, r, e) : void 0;
    p === void 0 && (p = e[l]), a ? Vt(r, l, p) : xe(r, l, p);
  }
  return r;
}
var Ze = Math.max;
function Cn(e, t, r) {
  return t = Ze(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, u = Ze(n.length - t, 0), o = Array(u); ++a < u; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), cn(e, this, l);
  };
}
var An = 9007199254740991;
function Mt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= An;
}
function Ut(e) {
  return e != null && Mt(e.length) && !Ft(e);
}
var _n = Object.prototype;
function Pe(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _n;
  return e === r;
}
function On(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var jn = "[object Arguments]";
function Xe(e) {
  return q(e) && Y(e) == jn;
}
var Lt = Object.prototype, En = Lt.hasOwnProperty, xn = Lt.propertyIsEnumerable, Rt = Xe(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xe : function(e) {
  return q(e) && En.call(e, "callee") && !xn.call(e, "callee");
};
function Pn() {
  return !1;
}
var kt = typeof exports == "object" && exports && !exports.nodeType && exports, Qe = kt && typeof module == "object" && module && !module.nodeType && module, Fn = Qe && Qe.exports === kt, Je = Fn ? M.Buffer : void 0, In = Je ? Je.isBuffer : void 0, Bt = In || Pn, Vn = "[object Arguments]", Nn = "[object Array]", Mn = "[object Boolean]", Un = "[object Date]", Ln = "[object Error]", Rn = "[object Function]", kn = "[object Map]", Bn = "[object Number]", zn = "[object Object]", Gn = "[object RegExp]", Dn = "[object Set]", Kn = "[object String]", Hn = "[object WeakMap]", Yn = "[object ArrayBuffer]", qn = "[object DataView]", Wn = "[object Float32Array]", Zn = "[object Float64Array]", Xn = "[object Int8Array]", Qn = "[object Int16Array]", Jn = "[object Int32Array]", ea = "[object Uint8Array]", ta = "[object Uint8ClampedArray]", ra = "[object Uint16Array]", na = "[object Uint32Array]", $ = {};
$[Wn] = $[Zn] = $[Xn] = $[Qn] = $[Jn] = $[ea] = $[ta] = $[ra] = $[na] = !0;
$[Vn] = $[Nn] = $[Yn] = $[Mn] = $[qn] = $[Un] = $[Ln] = $[Rn] = $[kn] = $[Bn] = $[zn] = $[Gn] = $[Dn] = $[Kn] = $[Hn] = !1;
function aa(e) {
  return q(e) && Mt(e.length) && !!$[Y(e)];
}
function Fe(e) {
  return function(t) {
    return e(t);
  };
}
var zt = typeof exports == "object" && exports && !exports.nodeType && exports, oe = zt && typeof module == "object" && module && !module.nodeType && module, oa = oe && oe.exports === zt, we = oa && jt.process, ee = function() {
  try {
    var e = oe && oe.require && oe.require("util").types;
    return e || we && we.binding && we.binding("util");
  } catch {
  }
}(), et = ee && ee.isTypedArray, la = et ? Fe(et) : aa, ua = Object.prototype, ia = ua.hasOwnProperty;
function Gt(e, t) {
  var r = W(e), n = !r && Rt(e), a = !r && !n && Bt(e), u = !r && !n && !a && la(e), o = r || n || a || u, l = o ? On(e.length, String) : [], p = l.length;
  for (var f in e)
    (t || ia.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    It(f, p))) && l.push(f);
  return l;
}
function Dt(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ca = Dt(Object.keys, Object), sa = Object.prototype, fa = sa.hasOwnProperty;
function da(e) {
  if (!Pe(e))
    return ca(e);
  var t = [];
  for (var r in Object(e))
    fa.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Ie(e) {
  return Ut(e) ? Gt(e) : da(e);
}
function pa(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var ga = Object.prototype, ha = ga.hasOwnProperty;
function ya(e) {
  if (!K(e))
    return pa(e);
  var t = Pe(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ha.call(e, n)) || r.push(n);
  return r;
}
function Ve(e) {
  return Ut(e) ? Gt(e, !0) : ya(e);
}
var va = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ba = /^\w*$/;
function ma(e, t) {
  if (W(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ee(e) ? !0 : ba.test(e) || !va.test(e) || t != null && e in Object(t);
}
var ue = X(Object, "create");
function Ta() {
  this.__data__ = ue ? ue(null) : {}, this.size = 0;
}
function wa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $a = "__lodash_hash_undefined__", Sa = Object.prototype, Ca = Sa.hasOwnProperty;
function Aa(e) {
  var t = this.__data__;
  if (ue) {
    var r = t[e];
    return r === $a ? void 0 : r;
  }
  return Ca.call(t, e) ? t[e] : void 0;
}
var _a = Object.prototype, Oa = _a.hasOwnProperty;
function ja(e) {
  var t = this.__data__;
  return ue ? t[e] !== void 0 : Oa.call(t, e);
}
var Ea = "__lodash_hash_undefined__";
function xa(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ue && t === void 0 ? Ea : t, this;
}
function H(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
H.prototype.clear = Ta;
H.prototype.delete = wa;
H.prototype.get = Aa;
H.prototype.has = ja;
H.prototype.set = xa;
function Pa() {
  this.__data__ = [], this.size = 0;
}
function he(e, t) {
  for (var r = e.length; r--; )
    if (Nt(e[r][0], t))
      return r;
  return -1;
}
var Fa = Array.prototype, Ia = Fa.splice;
function Va(e) {
  var t = this.__data__, r = he(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ia.call(t, r, 1), --this.size, !0;
}
function Na(e) {
  var t = this.__data__, r = he(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Ma(e) {
  return he(this.__data__, e) > -1;
}
function Ua(e, t) {
  var r = this.__data__, n = he(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function R(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
R.prototype.clear = Pa;
R.prototype.delete = Va;
R.prototype.get = Na;
R.prototype.has = Ma;
R.prototype.set = Ua;
var ie = X(M, "Map");
function La() {
  this.size = 0, this.__data__ = {
    hash: new H(),
    map: new (ie || R)(),
    string: new H()
  };
}
function Ra(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ye(e, t) {
  var r = e.__data__;
  return Ra(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
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
  var r = ye(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function G(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
G.prototype.clear = La;
G.prototype.delete = ka;
G.prototype.get = Ba;
G.prototype.has = za;
G.prototype.set = Ga;
var Da = "Expected a function";
function Ne(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Da);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], u = r.cache;
    if (u.has(a))
      return u.get(a);
    var o = e.apply(this, n);
    return r.cache = u.set(a, o) || u, o;
  };
  return r.cache = new (Ne.Cache || G)(), r;
}
Ne.Cache = G;
var Ka = 500;
function Ha(e) {
  var t = Ne(e, function(n) {
    return r.size === Ka && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Ya = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qa = /\\(\\)?/g, Wa = Ha(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ya, function(r, n, a, u) {
    t.push(a ? u.replace(qa, "$1") : n || r);
  }), t;
});
function Za(e) {
  return e == null ? "" : Pt(e);
}
function ve(e, t) {
  return W(e) ? e : ma(e, t) ? [e] : Wa(Za(e));
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
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Me(t[r++])];
  return r && r == n ? e : void 0;
}
function tt(e, t, r) {
  var n = e == null ? void 0 : Kt(e, t);
  return n === void 0 ? r : n;
}
function Ue(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var rt = N ? N.isConcatSpreadable : void 0;
function Qa(e) {
  return W(e) || Rt(e) || !!(rt && e && e[rt]);
}
function Ht(e, t, r, n, a) {
  var u = -1, o = e.length;
  for (r || (r = Qa), a || (a = []); ++u < o; ) {
    var l = e[u];
    t > 0 && r(l) ? t > 1 ? Ht(l, t - 1, r, n, a) : Ue(a, l) : n || (a[a.length] = l);
  }
  return a;
}
function Ja(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ht(e, 1) : [];
}
function eo(e) {
  return bn(Cn(e, void 0, Ja), e + "");
}
var Le = Dt(Object.getPrototypeOf, Object), to = "[object Object]", ro = Function.prototype, no = Object.prototype, Yt = ro.toString, ao = no.hasOwnProperty, oo = Yt.call(Object);
function lo(e) {
  if (!q(e) || Y(e) != to)
    return !1;
  var t = Le(e);
  if (t === null)
    return !0;
  var r = ao.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Yt.call(r) == oo;
}
function uo(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var u = Array(a); ++n < a; )
    u[n] = e[n + t];
  return u;
}
function io() {
  this.__data__ = new R(), this.size = 0;
}
function co(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function so(e) {
  return this.__data__.get(e);
}
function fo(e) {
  return this.__data__.has(e);
}
var po = 200;
function go(e, t) {
  var r = this.__data__;
  if (r instanceof R) {
    var n = r.__data__;
    if (!ie || n.length < po - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new G(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function te(e) {
  var t = this.__data__ = new R(e);
  this.size = t.size;
}
te.prototype.clear = io;
te.prototype.delete = co;
te.prototype.get = so;
te.prototype.has = fo;
te.prototype.set = go;
function ho(e, t) {
  return e && ce(t, Ie(t), e);
}
function yo(e, t) {
  return e && ce(t, Ve(t), e);
}
var qt = typeof exports == "object" && exports && !exports.nodeType && exports, nt = qt && typeof module == "object" && module && !module.nodeType && module, vo = nt && nt.exports === qt, at = vo ? M.Buffer : void 0, ot = at ? at.allocUnsafe : void 0;
function bo(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = ot ? ot(r) : new e.constructor(r);
  return e.copy(n), n;
}
function mo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, u = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (u[a++] = o);
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
  return ce(e, Re(e), t);
}
var So = Object.getOwnPropertySymbols, Co = So ? function(e) {
  for (var t = []; e; )
    Ue(t, Re(e)), e = Le(e);
  return t;
} : Wt;
const Zt = Co;
function Ao(e, t) {
  return ce(e, Zt(e), t);
}
function Xt(e, t, r) {
  var n = t(e);
  return W(e) ? n : Ue(n, r(e));
}
function _o(e) {
  return Xt(e, Ie, Re);
}
function Qt(e) {
  return Xt(e, Ve, Zt);
}
var Ce = X(M, "DataView"), Ae = X(M, "Promise"), _e = X(M, "Set"), ut = "[object Map]", Oo = "[object Object]", it = "[object Promise]", ct = "[object Set]", st = "[object WeakMap]", ft = "[object DataView]", jo = Z(Ce), Eo = Z(ie), xo = Z(Ae), Po = Z(_e), Fo = Z(Se), D = Y;
(Ce && D(new Ce(new ArrayBuffer(1))) != ft || ie && D(new ie()) != ut || Ae && D(Ae.resolve()) != it || _e && D(new _e()) != ct || Se && D(new Se()) != st) && (D = function(e) {
  var t = Y(e), r = t == Oo ? e.constructor : void 0, n = r ? Z(r) : "";
  if (n)
    switch (n) {
      case jo:
        return ft;
      case Eo:
        return ut;
      case xo:
        return it;
      case Po:
        return ct;
      case Fo:
        return st;
    }
  return t;
});
const ke = D;
var Io = Object.prototype, Vo = Io.hasOwnProperty;
function No(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Vo.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var dt = M.Uint8Array;
function Be(e) {
  var t = new e.constructor(e.byteLength);
  return new dt(t).set(new dt(e)), t;
}
function Mo(e, t) {
  var r = t ? Be(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Uo = /\w*$/;
function Lo(e) {
  var t = new e.constructor(e.source, Uo.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var pt = N ? N.prototype : void 0, gt = pt ? pt.valueOf : void 0;
function Ro(e) {
  return gt ? Object(gt.call(e)) : {};
}
function ko(e, t) {
  var r = t ? Be(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Bo = "[object Boolean]", zo = "[object Date]", Go = "[object Map]", Do = "[object Number]", Ko = "[object RegExp]", Ho = "[object Set]", Yo = "[object String]", qo = "[object Symbol]", Wo = "[object ArrayBuffer]", Zo = "[object DataView]", Xo = "[object Float32Array]", Qo = "[object Float64Array]", Jo = "[object Int8Array]", el = "[object Int16Array]", tl = "[object Int32Array]", rl = "[object Uint8Array]", nl = "[object Uint8ClampedArray]", al = "[object Uint16Array]", ol = "[object Uint32Array]";
function ll(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Wo:
      return Be(e);
    case Bo:
    case zo:
      return new n(+e);
    case Zo:
      return Mo(e, r);
    case Xo:
    case Qo:
    case Jo:
    case el:
    case tl:
    case rl:
    case nl:
    case al:
    case ol:
      return ko(e, r);
    case Go:
      return new n();
    case Do:
    case Yo:
      return new n(e);
    case Ko:
      return Lo(e);
    case Ho:
      return new n();
    case qo:
      return Ro(e);
  }
}
function ul(e) {
  return typeof e.constructor == "function" && !Pe(e) ? un(Le(e)) : {};
}
var il = "[object Map]";
function cl(e) {
  return q(e) && ke(e) == il;
}
var ht = ee && ee.isMap, sl = ht ? Fe(ht) : cl, fl = "[object Set]";
function dl(e) {
  return q(e) && ke(e) == fl;
}
var yt = ee && ee.isSet, pl = yt ? Fe(yt) : dl, gl = 1, hl = 2, yl = 4, Jt = "[object Arguments]", vl = "[object Array]", bl = "[object Boolean]", ml = "[object Date]", Tl = "[object Error]", er = "[object Function]", wl = "[object GeneratorFunction]", $l = "[object Map]", Sl = "[object Number]", tr = "[object Object]", Cl = "[object RegExp]", Al = "[object Set]", _l = "[object String]", Ol = "[object Symbol]", jl = "[object WeakMap]", El = "[object ArrayBuffer]", xl = "[object DataView]", Pl = "[object Float32Array]", Fl = "[object Float64Array]", Il = "[object Int8Array]", Vl = "[object Int16Array]", Nl = "[object Int32Array]", Ml = "[object Uint8Array]", Ul = "[object Uint8ClampedArray]", Ll = "[object Uint16Array]", Rl = "[object Uint32Array]", T = {};
T[Jt] = T[vl] = T[El] = T[xl] = T[bl] = T[ml] = T[Pl] = T[Fl] = T[Il] = T[Vl] = T[Nl] = T[$l] = T[Sl] = T[tr] = T[Cl] = T[Al] = T[_l] = T[Ol] = T[Ml] = T[Ul] = T[Ll] = T[Rl] = !0;
T[Tl] = T[er] = T[jl] = !1;
function fe(e, t, r, n, a, u) {
  var o, l = t & gl, p = t & hl, f = t & yl;
  if (r && (o = a ? r(e, n, a, u) : r(e)), o !== void 0)
    return o;
  if (!K(e))
    return e;
  var s = W(e);
  if (s) {
    if (o = No(e), !l)
      return sn(e, o);
  } else {
    var C = ke(e), O = C == er || C == wl;
    if (Bt(e))
      return bo(e, l);
    if (C == tr || C == Jt || O && !a) {
      if (o = p || O ? {} : ul(e), !l)
        return p ? Ao(e, yo(o, e)) : $o(e, ho(o, e));
    } else {
      if (!T[C])
        return a ? e : {};
      o = ll(e, C, l);
    }
  }
  u || (u = new te());
  var y = u.get(e);
  if (y)
    return y;
  u.set(e, o), pl(e) ? e.forEach(function(m) {
    o.add(fe(m, t, r, m, e, u));
  }) : sl(e) && e.forEach(function(m, g) {
    o.set(g, fe(m, t, r, g, e, u));
  });
  var A = f ? p ? Qt : _o : p ? Ve : Ie, F = s ? void 0 : A(e);
  return mn(F || e, function(m, g) {
    F && (g = m, m = e[g]), xe(o, g, fe(m, t, r, g, e, u));
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
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = xt(t, function(u) {
    return u = ve(u, e), n || (n = u.length > 1), u;
  }), ce(e, Qt(e), r), n && (r = fe(r, Dl | Kl | Hl, Gl));
  for (var a = t.length; a--; )
    zl(r, t[a]);
  return r;
});
function Yl(e, t, r, n) {
  if (!K(e))
    return e;
  t = ve(t, e);
  for (var a = -1, u = t.length, o = u - 1, l = e; l != null && ++a < u; ) {
    var p = Me(t[a]), f = r;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return e;
    if (a != o) {
      var s = l[p];
      f = n ? n(s, p, l) : void 0, f === void 0 && (f = K(s) ? s : It(t[a + 1]) ? [] : {});
    }
    xe(l, p, f), l = l[p];
  }
  return e;
}
function ql(e, t, r) {
  return e == null ? e : Yl(e, t, r);
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
    const r = e, n = t, a = E(tt(r.row, r.col.prop));
    ge(() => tt(r.row, r.col.prop), (p) => {
      a.value = p;
    });
    const u = () => {
      ql(r.row, r.col.prop, a.value), r.col.change && r.col.change(r.row, a.value), n("update:row", r.row);
    }, o = (p, f) => f.find((C) => C.value === p) || {}, l = (p, f) => {
      const s = o(p, f);
      return (s == null ? void 0 : s.label) || p;
    };
    return (p, f) => (c(), _(V, null, [
      e.col.scope ? S("", !0) : (c(), _("div", Wl, B(e.row[e.col.prop]), 1)),
      e.col.scope === "number-col" ? (c(), _("div", Zl, B(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : S("", !0),
      e.col.scope === "render" && e.col.render ? (c(), _("div", Xl, B(e.col.render(e.row, e.col.prop)), 1)) : S("", !0),
      ["textarea", "input"].includes(e.col.scope) ? (c(), v(d(se), I({
        key: 3,
        type: e.col.scope || "text"
      }, {
        ...vt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[0] || (f[0] = (s) => a.value = s),
        onChange: u
      }), null, 16, ["type", "modelValue"])) : S("", !0),
      e.col.scope === "input-number" ? (c(), v(d(dr), I({ key: 4 }, {
        ...vt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[1] || (f[1] = (s) => a.value = s),
        onChange: u
      }), null, 16, ["modelValue"])) : S("", !0),
      e.col.scope === "select" ? (c(), v(d($t), I({ key: 5 }, {
        ...e.col
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[2] || (f[2] = (s) => a.value = s),
        onChange: u
      }), {
        default: b(() => [
          (c(!0), _(V, null, L(e.col.options, (s) => (c(), v(d(St), {
            key: s.value,
            label: s.label,
            value: s.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"])) : S("", !0),
      e.col.scope === "tag" ? (c(), v(d(pr), {
        key: 6,
        type: o(e.row[e.col.prop], e.col.options).type
      }, {
        default: b(() => [
          z(B(l(e.row[e.col.prop], e.col.options)), 1)
        ]),
        _: 1
      }, 8, ["type"])) : S("", !0),
      e.col.scope === "img" ? (c(), v(d(gr), {
        key: 7,
        src: a.value,
        fit: e.col.fit || "cover"
      }, null, 8, ["src", "fit"])) : S("", !0),
      ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (c(), v(d(Ct), I({ key: 8 }, {
        ...e.col
      }, {
        type: e.col.scope,
        modelValue: a.value,
        "onUpdate:modelValue": f[3] || (f[3] = (s) => a.value = s),
        onChange: u
      }), null, 16, ["type", "modelValue"])) : S("", !0),
      e.col.scope === "switch" ? (c(), v(d(hr), I({
        key: 9,
        modelValue: a.value,
        "onUpdate:modelValue": f[4] || (f[4] = (s) => a.value = s),
        onChange: u
      }, {
        ...e.col
      }), null, 16, ["modelValue"])) : S("", !0),
      e.col.scope === "radio" ? (c(), v(d(yr), {
        key: 10,
        modelValue: a.value,
        "onUpdate:modelValue": f[5] || (f[5] = (s) => a.value = s),
        onChange: u
      }, {
        default: b(() => [
          (c(!0), _(V, null, L(e.col.options, (s) => (c(), v(d(At), {
            label: s.value,
            key: s.label
          }, {
            default: b(() => [
              z(B(s.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : S("", !0)
    ], 64));
  }
}, rr = {
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
    const r = e, { proxy: n } = pe(), a = E(null), u = E(null), o = E(null), l = () => {
      const y = document.querySelector(".table-container .c-table");
      if (y) {
        const { top: A } = y.getBoundingClientRect();
        u.value = window.innerHeight - A - 50;
      }
    }, p = () => {
      o.value.clearSelection();
    }, f = () => {
      o.value.setCurrentRow();
    }, s = (y) => {
      a.value = y ? y.id : null, r.radio && r.radio(y);
    }, C = (y, A, F) => {
      n.$emit(y.event, A, F), n.$emit("btnClick", {
        btn: y,
        row: A,
        index: F
      });
    }, O = (y, A, F) => "if" in y ? typeof y.if == "function" ? y.if(A, F) : A[y.if] : y.render ? !!y.render(A, F) : !!y.label;
    return t({
      clearSelection: p,
      clearRadio: f
    }), Oe(() => {
      r.onSize && (window.addEventListener("resize", l), lr(() => {
        l();
      }));
    }), ur(() => {
      r.onSize && window.removeEventListener("resize", l);
    }), (y, A) => {
      const F = ir("v-table", !0);
      return c(), _("div", {
        class: je(["v-table", { pd: e.onAdd }])
      }, [
        j(d(vr), I({
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
          default: b(() => [
            e.selection ? (c(), v(d(me), {
              key: 0,
              type: "selection",
              width: "40"
            })) : S("", !0),
            e.radio ? (c(), v(d(me), {
              key: 1,
              fixed: "left",
              width: "60"
            }, {
              header: b(() => [
                le("div", {
                  class: "radio-header",
                  onClick: f
                }, "取消")
              ]),
              default: b(({ row: m }) => [
                j(d(At), {
                  modelValue: a.value,
                  "onUpdate:modelValue": A[0] || (A[0] = (g) => a.value = g),
                  label: m.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : S("", !0),
            (c(!0), _(V, null, L(e.columns, (m) => (c(), v(d(me), I({
              key: m.prop,
              width: m.width
            }, {
              ...m
            }), {
              default: b(({ row: g, $index: w }) => [
                ["btn", "table"].includes(m.scope) ? S("", !0) : (c(), v(ze, {
                  key: 0,
                  row: g,
                  col: m
                }, null, 8, ["row", "col"])),
                m.scope === "table" ? (c(), v(F, {
                  key: 1,
                  data: g[m.prop],
                  columns: m.options
                }, null, 8, ["data", "columns"])) : S("", !0),
                m.scope === "btn" ? (c(!0), _(V, { key: 2 }, L(m.options || [], (i) => (c(), _(V, {
                  key: i.event
                }, [
                  O(i, g, w) ? (c(), v(d(ae), I({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: i.type || "primary",
                    onClick: (h) => C(i, g, w)
                  }, {
                    ...i
                  }), {
                    default: b(() => [
                      z(B(i.label || (i.render ? i.render(g, w) : "")), 1)
                    ]),
                    _: 2
                  }, 1040, ["type", "onClick"])) : S("", !0)
                ], 64))), 128)) : S("", !0)
              ]),
              _: 2
            }, 1040, ["width"]))), 128))
          ]),
          _: 1
        }, 16, ["data", "onSelectionChange", "highlight-current-row"]),
        e.onAdd ? (c(), _("div", {
          key: 0,
          class: "add-btn",
          onClick: A[1] || (A[1] = (...m) => e.onAdd && e.onAdd(...m))
        })) : S("", !0)
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
    const { GET_LIST: r, GET_TOTAL: n, PAGE_NUM_KEY: a, PAGE_SIZE_KEY: u } = Cr(), { proxy: o } = pe(), l = e, p = E([]), f = E({}), s = E(0), C = E({}), O = E({}), y = E(null), A = () => {
      var P;
      (P = y.value) == null || P.clearRadio();
    }, F = () => {
      var P;
      (P = y.value) == null || P.clearSelection();
    }, m = ({ btn: P, row: Q, index: U }) => {
      o.$emit(P.event, Q, U);
    }, g = async (P = {}) => {
      if (!l.getList)
        return;
      const Q = br.service({
        target: ".v-page-table"
      });
      try {
        f.value = {
          [a]: C.value.pageNum || 1,
          [u]: C.value.pageSize || 10,
          ...P
        };
        const U = await l.getList(f.value);
        let re = r(U);
        l.formatList && (re = l.formatList(re)), p.value = re.map((be, ar) => ({
          ...be,
          index: ar + 1 + (f.value[a] - 1) * f.value[u]
        })), s.value = n(U);
      } finally {
        Q.close();
      }
    }, w = (P) => {
      C.value = P, F(), A(), g({
        ...P,
        ...O.value
      });
    }, i = async () => {
      F(), A(), await g({
        ...C.value,
        ...O.value
      });
    }, h = (P) => {
      C.value.pageNum = 1, O.value = P, i(), o.$emit("search", P);
    }, x = () => {
      k.value.search();
    }, k = E(), nr = () => k.value.getCurrentFilter();
    return Oe(() => {
      l.init && (l.showFilter ? k.value.search() : g());
    }), t({
      refreshList: i,
      clearSelection: F,
      clearRadio: A,
      search: x,
      getCurrentFilter: nr,
      filterRef: k
    }), (P, Q) => (c(), _("div", {
      class: je(["v-page", { pd: l.table && l.table.onAdd }])
    }, [
      e.showFilter ? (c(), v(_t, {
        key: 0,
        ref_key: "filterRef",
        ref: k,
        filter: e.filter,
        "label-width": e.filterLabelWidth,
        btns: e.filterBtns,
        col: e.filterCol,
        onSearch: h,
        onReset: Q[0] || (Q[0] = () => h({}))
      }, null, 8, ["filter", "label-width", "btns", "col"])) : S("", !0),
      le("div", Ql, [
        (c(!0), _(V, null, L(e.btns, (U, re) => (c(), v(d(ae), {
          key: re,
          type: U.type || "primary",
          onClick: (be) => U.click && U.click(be)
        }, {
          default: b(() => [
            z(B(U.label), 1)
          ]),
          _: 2
        }, 1032, ["type", "onClick"]))), 128)),
        mt(P.$slots, "btn")
      ]),
      le("div", Jl, [
        j(rr, I({
          ref_key: "tableRef",
          ref: y,
          data: p.value,
          columns: e.columns,
          selection: e.selection,
          radio: e.radio
        }, {
          ...l.table
        }, { onBtnClick: m }), null, 16, ["data", "columns", "selection", "radio"])
      ]),
      e.showPagination ? (c(), v(Ot, {
        key: 1,
        page: C.value.pageNum,
        total: s.value,
        onPagination: w
      }, null, 8, ["page", "total"])) : S("", !0)
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
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r, u = E({ ...n.value }), o = E();
    ge(() => n.value, () => {
      l();
    }, { deep: !0 });
    const l = () => {
      u.value = {
        ...n.value
      };
    }, p = (s) => {
      a("update:value", s);
    };
    return t({
      validate: () => new Promise((s, C) => {
        o.value.validate((O) => {
          O ? s(u.value) : C();
        });
      }),
      reset: l,
      form: u
    }), (s, C) => (c(), v(d(Tt), I({
      class: "c-form",
      ref_key: "formRef",
      ref: o,
      model: u.value,
      rules: e.rules,
      "label-width": "130px"
    }, s.$attrs), {
      default: b(() => [
        j(d($e), { gutter: 20 }, {
          default: b(() => [
            (c(!0), _(V, null, L(e.list, (O) => (c(), v(d(J), {
              span: O.colSpan || 24 / e.col,
              key: O.prop
            }, {
              default: b(() => [
                j(d(wt), {
                  label: O.label,
                  prop: O.prop
                }, {
                  default: b(() => [
                    j(ze, {
                      row: u.value,
                      col: O,
                      "onUpdate:row": p
                    }, null, 8, ["row", "col"]),
                    mt(s.$slots, O.prop)
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
    const { config: r } = t;
    r && Sr(r, e), e.component("VPage", eu), e.component("VFilter", _t), e.component("VTable", rr), e.component("VElement", ze), e.component("VPagination", Ot), e.component("VForm", tu);
  }
};
export {
  ze as VElement,
  _t as VFilter,
  tu as VForm,
  Ot as VPagination,
  rr as VTable,
  au as default,
  Sr as setConfig
};
