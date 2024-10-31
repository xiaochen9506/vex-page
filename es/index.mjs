import { inject as rn, defineComponent as vt, openBlock as c, createElementBlock as _, createElementVNode as ae, getCurrentInstance as fe, computed as ze, ref as E, watch as de, onMounted as _e, createVNode as j, unref as d, withCtx as m, Fragment as I, renderList as M, createBlock as v, createCommentVNode as S, mergeProps as P, createTextVNode as R, toDisplayString as L, normalizeClass as Oe, nextTick as an, onUnmounted as on, resolveComponent as ln, renderSlot as bt } from "vue";
import { ElCard as un, ElForm as mt, ElRow as we, ElCol as X, ElFormItem as Tt, ElInput as ie, ElSelect as wt, ElOption as $t, ElDatePicker as St, ElCascader as cn, ElButton as ne, ElPagination as sn, ElInputNumber as fn, ElTag as dn, ElImage as pn, ElSwitch as gn, ElRadioGroup as hn, ElRadio as At, ElTable as yn, ElTableColumn as be, ElLoading as vn } from "element-plus";
let bn = "pageSize", mn = "pageNum", Tn = (e) => e.data, wn = (e) => e.total;
function $n(e, t) {
  t && t.provide("vxe-page", e);
}
function Sn() {
  return rn("vxe-page", {
    PAGE_SIZE_KEY: bn,
    PAGE_NUM_KEY: mn,
    GET_LIST: Tn,
    GET_TOTAL: wn
  });
}
/*! Element Plus Icons Vue v2.3.1 */
var An = /* @__PURE__ */ vt({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, n) => (c(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ae("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Cn = An, _n = /* @__PURE__ */ vt({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, n) => (c(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ae("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), On = _n;
const jn = { class: "v-filter" }, Ct = {
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
    const { proxy: n } = fe(), r = e, a = ze(() => {
      const y = r.filter.filter((l) => l.required), p = {};
      return y.forEach((l) => {
        p[l.prop] = [
          { required: !0, message: l.message || `${l.label}不能为空` }
        ];
      }), p;
    }), i = E(), o = E({}), u = E([]), g = E(["date", "daterange", "month", "year", "monthrange"]), f = ze(() => 24 / r.col);
    de(() => r.filter, (y) => {
      s(y);
    }, { deep: !0 });
    const s = (y = []) => {
      u.value = y.map((p) => ((p.initValue || p.initValue === 0) && (o.value[p.prop] = p.initValue), {
        ...p
      }));
    }, A = () => {
      o.value = {};
    }, O = (y, p) => {
      g.value.includes(p.scope) && (p.startKey && (o.value[p.startKey] = y && y.length > 1 ? y[0] : ""), p.endKey && (o.value[p.endKey] = y && y.length > 1 ? y[1] : ""));
    }, b = () => new Promise((y, p) => {
      i.value.validate((l) => {
        if (l) {
          const h = {};
          u.value.forEach((T) => {
            const W = T.filterProp || T.prop;
            T.startKey ? (h[T.startKey] = o.value[T.startKey], h[T.endKey] = o.value[T.endKey]) : h[W] = o.value[T.prop], T.format && typeof T.format == "function" && (h[W] = T.format(o.value[T.prop]));
          }), n.$emit("search", h), y();
        } else
          p();
      });
    }), C = () => {
      A(), n.$emit("reset");
    };
    return _e(() => {
      s(r.filter);
    }), t({
      search: b
    }), (y, p) => (c(), _("div", jn, [
      j(d(un), null, {
        default: m(() => [
          j(d(mt), {
            ref_key: "filterFormRef",
            ref: i,
            model: o.value,
            "label-width": e.labelWidth,
            rules: a.value
          }, {
            default: m(() => [
              j(d(we), { gutter: 20 }, {
                default: m(() => [
                  (c(!0), _(I, null, M(u.value, (l) => (c(), v(d(X), {
                    span: f.value,
                    key: l.prop
                  }, {
                    default: m(() => [
                      j(d(Tt), {
                        label: l.label,
                        "label-width": l.labelWidth || e.labelWidth,
                        prop: l.prop
                      }, {
                        default: m(() => [
                          l.scope === "input" ? (c(), v(d(ie), {
                            key: 0,
                            modelValue: o.value[l.prop],
                            "onUpdate:modelValue": (h) => o.value[l.prop] = h,
                            modelModifiers: { trim: !0 },
                            placeholder: l.placeholder || "请输入"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : S("", !0),
                          l.scope === "select" ? (c(), v(d(wt), P({
                            key: 1,
                            modelValue: o.value[l.prop],
                            "onUpdate:modelValue": (h) => o.value[l.prop] = h,
                            placeholder: l.placeholder || "请选择",
                            clearable: "",
                            filterable: ""
                          }, {
                            ...l
                          }, {
                            "filter-method": (h) => {
                              var T;
                              return (T = l.remoteMethod) == null ? void 0 : T.call(l, h, l);
                            },
                            onChange: function(h) {
                              l.onchange && l.onchange(h);
                            }
                          }), {
                            default: m(() => [
                              (c(!0), _(I, null, M(l.options || [], (h) => (c(), v(d($t), {
                                key: h.value,
                                label: h.label,
                                value: h.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : S("", !0),
                          g.value.includes(l.scope) ? (c(), v(d(St), {
                            key: 2,
                            modelValue: o.value[l.prop],
                            "onUpdate:modelValue": (h) => o.value[l.prop] = h,
                            "value-format": l.format || "YYYY-MM-DD HH:mm:ss",
                            type: l.scope,
                            placeholder: l.placeholder || "请选择",
                            "start-placeholder": "开始",
                            "end-placeholder": "结束",
                            clearable: "",
                            onChange: (h) => O(h, l)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "onChange"])) : S("", !0),
                          l.scope === "range" ? (c(), v(d(we), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: m(() => [
                              j(d(X), { span: 11 }, {
                                default: m(() => [
                                  j(d(ie), {
                                    modelValue: o.value[l.startKey],
                                    "onUpdate:modelValue": (h) => o.value[l.startKey] = h,
                                    placeholder: l.placeholder || "请输入",
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
                                  R("-")
                                ]),
                                _: 1
                              }),
                              j(d(X), { span: 11 }, {
                                default: m(() => [
                                  j(d(ie), {
                                    modelValue: o.value[l.endKey],
                                    "onUpdate:modelValue": (h) => o.value[l.endKey] = h,
                                    placeholder: l.placeholder || "请输入",
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : S("", !0),
                          l.scope === "cascader" ? (c(), v(d(cn), {
                            key: 4,
                            modelValue: o.value[l.prop],
                            "onUpdate:modelValue": (h) => o.value[l.prop] = h,
                            options: l.options,
                            props: l.cascaderProps || { checkStrictly: !0, emitPath: !1 },
                            "collapse-tags": l.collapseTags,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "collapse-tags"])) : S("", !0)
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
                        icon: d(On),
                        onClick: b
                      }, {
                        default: m(() => [
                          R("搜索")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      j(d(ne), {
                        icon: d(Cn),
                        onClick: C
                      }, {
                        default: m(() => [
                          R("重置")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (c(!0), _(I, null, M(e.btns, (l) => (c(), v(d(ne), {
                        key: l.text,
                        onClick: l.click
                      }, {
                        default: m(() => [
                          R(L(l.text), 1)
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
var En = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function xn(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function Pn() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function Ge(e, t, n) {
  const r = Pn(), a = e - r, i = 20;
  let o = 0;
  t = typeof t > "u" ? 500 : t;
  var u = function() {
    o += i;
    var g = Math.easeInOutQuad(o, r, a, t);
    xn(g), o < t ? En(u) : n && typeof n == "function" && n();
  };
  u();
}
const _t = {
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
    const t = e, n = E(10), r = E(t.page || 1), { proxy: a } = fe();
    de(() => t.page, (u) => {
      console.log(u), r.value = u;
    });
    const i = (u) => {
      console.log("size change"), r.value * u > t.total && (r.value = 1), n.value = u, a.$emit("pagination", { pageNum: r.value, pageSize: u }), t.autoScroll && Ge(0, 800);
    }, o = (u) => {
      console.log("page change"), r.value = u, a.$emit("pagination", { pageNum: u, pageSize: n.value }), t.autoScroll && Ge(0, 800);
    };
    return (u, g) => (c(), _("div", {
      class: Oe([{ hidden: e.hidden }, "v-pagination"])
    }, [
      j(d(sn), P({
        "current-page": r.value,
        layout: e.layout
      }, u.$attrs, {
        onSizeChange: i,
        onCurrentChange: o
      }), null, 16, ["current-page", "layout"])
    ], 2));
  }
};
var Ot = typeof global == "object" && global && global.Object === Object && global, In = typeof self == "object" && self && self.Object === Object && self, F = Ot || In || Function("return this")(), V = F.Symbol, jt = Object.prototype, Vn = jt.hasOwnProperty, Fn = jt.toString, te = V ? V.toStringTag : void 0;
function Nn(e) {
  var t = Vn.call(e, te), n = e[te];
  try {
    e[te] = void 0;
    var r = !0;
  } catch {
  }
  var a = Fn.call(e);
  return r && (t ? e[te] = n : delete e[te]), a;
}
var Mn = Object.prototype, Un = Mn.toString;
function Ln(e) {
  return Un.call(e);
}
var Rn = "[object Null]", kn = "[object Undefined]", De = V ? V.toStringTag : void 0;
function D(e) {
  return e == null ? e === void 0 ? kn : Rn : De && De in Object(e) ? Nn(e) : Ln(e);
}
function K(e) {
  return e != null && typeof e == "object";
}
var Bn = "[object Symbol]";
function je(e) {
  return typeof e == "symbol" || K(e) && D(e) == Bn;
}
function Et(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var H = Array.isArray, zn = 1 / 0, Ke = V ? V.prototype : void 0, He = Ke ? Ke.toString : void 0;
function xt(e) {
  if (typeof e == "string")
    return e;
  if (H(e))
    return Et(e, xt) + "";
  if (je(e))
    return He ? He.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -zn ? "-0" : t;
}
function z(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Gn(e) {
  return e;
}
var Dn = "[object AsyncFunction]", Kn = "[object Function]", Hn = "[object GeneratorFunction]", Yn = "[object Proxy]";
function Pt(e) {
  if (!z(e))
    return !1;
  var t = D(e);
  return t == Kn || t == Hn || t == Dn || t == Yn;
}
var me = F["__core-js_shared__"], Ye = function() {
  var e = /[^.]+$/.exec(me && me.keys && me.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qn(e) {
  return !!Ye && Ye in e;
}
var Wn = Function.prototype, Zn = Wn.toString;
function Y(e) {
  if (e != null) {
    try {
      return Zn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xn = /[\\^$.*+?()[\]{}|]/g, Qn = /^\[object .+?Constructor\]$/, Jn = Function.prototype, er = Object.prototype, tr = Jn.toString, nr = er.hasOwnProperty, rr = RegExp(
  "^" + tr.call(nr).replace(Xn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ar(e) {
  if (!z(e) || qn(e))
    return !1;
  var t = Pt(e) ? rr : Qn;
  return t.test(Y(e));
}
function or(e, t) {
  return e == null ? void 0 : e[t];
}
function q(e, t) {
  var n = or(e, t);
  return ar(n) ? n : void 0;
}
var $e = q(F, "WeakMap"), qe = Object.create, lr = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!z(t))
      return {};
    if (qe)
      return qe(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function ur(e, t, n) {
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
function ir(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var cr = 800, sr = 16, fr = Date.now;
function dr(e) {
  var t = 0, n = 0;
  return function() {
    var r = fr(), a = sr - (r - n);
    if (n = r, a > 0) {
      if (++t >= cr)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function pr(e) {
  return function() {
    return e;
  };
}
var se = function() {
  try {
    var e = q(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), gr = se ? function(e, t) {
  return se(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: pr(t),
    writable: !0
  });
} : Gn;
const hr = gr;
var yr = dr(hr);
function vr(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var br = 9007199254740991, mr = /^(?:0|[1-9]\d*)$/;
function It(e, t) {
  var n = typeof e;
  return t = t ?? br, !!t && (n == "number" || n != "symbol" && mr.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Vt(e, t, n) {
  t == "__proto__" && se ? se(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ft(e, t) {
  return e === t || e !== e && t !== t;
}
var Tr = Object.prototype, wr = Tr.hasOwnProperty;
function Ee(e, t, n) {
  var r = e[t];
  (!(wr.call(e, t) && Ft(r, n)) || n === void 0 && !(t in e)) && Vt(e, t, n);
}
function ue(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var u = t[i], g = r ? r(n[u], e[u], u, n, e) : void 0;
    g === void 0 && (g = e[u]), a ? Vt(n, u, g) : Ee(n, u, g);
  }
  return n;
}
var We = Math.max;
function $r(e, t, n) {
  return t = We(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, i = We(r.length - t, 0), o = Array(i); ++a < i; )
      o[a] = r[t + a];
    a = -1;
    for (var u = Array(t + 1); ++a < t; )
      u[a] = r[a];
    return u[t] = n(o), ur(e, this, u);
  };
}
var Sr = 9007199254740991;
function Nt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Sr;
}
function Mt(e) {
  return e != null && Nt(e.length) && !Pt(e);
}
var Ar = Object.prototype;
function xe(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ar;
  return e === n;
}
function Cr(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var _r = "[object Arguments]";
function Ze(e) {
  return K(e) && D(e) == _r;
}
var Ut = Object.prototype, Or = Ut.hasOwnProperty, jr = Ut.propertyIsEnumerable, Lt = Ze(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ze : function(e) {
  return K(e) && Or.call(e, "callee") && !jr.call(e, "callee");
};
function Er() {
  return !1;
}
var Rt = typeof exports == "object" && exports && !exports.nodeType && exports, Xe = Rt && typeof module == "object" && module && !module.nodeType && module, xr = Xe && Xe.exports === Rt, Qe = xr ? F.Buffer : void 0, Pr = Qe ? Qe.isBuffer : void 0, kt = Pr || Er, Ir = "[object Arguments]", Vr = "[object Array]", Fr = "[object Boolean]", Nr = "[object Date]", Mr = "[object Error]", Ur = "[object Function]", Lr = "[object Map]", Rr = "[object Number]", kr = "[object Object]", Br = "[object RegExp]", zr = "[object Set]", Gr = "[object String]", Dr = "[object WeakMap]", Kr = "[object ArrayBuffer]", Hr = "[object DataView]", Yr = "[object Float32Array]", qr = "[object Float64Array]", Wr = "[object Int8Array]", Zr = "[object Int16Array]", Xr = "[object Int32Array]", Qr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", ea = "[object Uint16Array]", ta = "[object Uint32Array]", $ = {};
$[Yr] = $[qr] = $[Wr] = $[Zr] = $[Xr] = $[Qr] = $[Jr] = $[ea] = $[ta] = !0;
$[Ir] = $[Vr] = $[Kr] = $[Fr] = $[Hr] = $[Nr] = $[Mr] = $[Ur] = $[Lr] = $[Rr] = $[kr] = $[Br] = $[zr] = $[Gr] = $[Dr] = !1;
function na(e) {
  return K(e) && Nt(e.length) && !!$[D(e)];
}
function Pe(e) {
  return function(t) {
    return e(t);
  };
}
var Bt = typeof exports == "object" && exports && !exports.nodeType && exports, re = Bt && typeof module == "object" && module && !module.nodeType && module, ra = re && re.exports === Bt, Te = ra && Ot.process, Q = function() {
  try {
    var e = re && re.require && re.require("util").types;
    return e || Te && Te.binding && Te.binding("util");
  } catch {
  }
}(), Je = Q && Q.isTypedArray, aa = Je ? Pe(Je) : na, oa = Object.prototype, la = oa.hasOwnProperty;
function zt(e, t) {
  var n = H(e), r = !n && Lt(e), a = !n && !r && kt(e), i = !n && !r && !a && aa(e), o = n || r || a || i, u = o ? Cr(e.length, String) : [], g = u.length;
  for (var f in e)
    (t || la.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    It(f, g))) && u.push(f);
  return u;
}
function Gt(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ua = Gt(Object.keys, Object), ia = Object.prototype, ca = ia.hasOwnProperty;
function sa(e) {
  if (!xe(e))
    return ua(e);
  var t = [];
  for (var n in Object(e))
    ca.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ie(e) {
  return Mt(e) ? zt(e) : sa(e);
}
function fa(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var da = Object.prototype, pa = da.hasOwnProperty;
function ga(e) {
  if (!z(e))
    return fa(e);
  var t = xe(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !pa.call(e, r)) || n.push(r);
  return n;
}
function Ve(e) {
  return Mt(e) ? zt(e, !0) : ga(e);
}
var ha = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ya = /^\w*$/;
function va(e, t) {
  if (H(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || je(e) ? !0 : ya.test(e) || !ha.test(e) || t != null && e in Object(t);
}
var oe = q(Object, "create");
function ba() {
  this.__data__ = oe ? oe(null) : {}, this.size = 0;
}
function ma(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ta = "__lodash_hash_undefined__", wa = Object.prototype, $a = wa.hasOwnProperty;
function Sa(e) {
  var t = this.__data__;
  if (oe) {
    var n = t[e];
    return n === Ta ? void 0 : n;
  }
  return $a.call(t, e) ? t[e] : void 0;
}
var Aa = Object.prototype, Ca = Aa.hasOwnProperty;
function _a(e) {
  var t = this.__data__;
  return oe ? t[e] !== void 0 : Ca.call(t, e);
}
var Oa = "__lodash_hash_undefined__";
function ja(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = oe && t === void 0 ? Oa : t, this;
}
function G(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
G.prototype.clear = ba;
G.prototype.delete = ma;
G.prototype.get = Sa;
G.prototype.has = _a;
G.prototype.set = ja;
function Ea() {
  this.__data__ = [], this.size = 0;
}
function pe(e, t) {
  for (var n = e.length; n--; )
    if (Ft(e[n][0], t))
      return n;
  return -1;
}
var xa = Array.prototype, Pa = xa.splice;
function Ia(e) {
  var t = this.__data__, n = pe(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Pa.call(t, n, 1), --this.size, !0;
}
function Va(e) {
  var t = this.__data__, n = pe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Fa(e) {
  return pe(this.__data__, e) > -1;
}
function Na(e, t) {
  var n = this.__data__, r = pe(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function U(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
U.prototype.clear = Ea;
U.prototype.delete = Ia;
U.prototype.get = Va;
U.prototype.has = Fa;
U.prototype.set = Na;
var le = q(F, "Map");
function Ma() {
  this.size = 0, this.__data__ = {
    hash: new G(),
    map: new (le || U)(),
    string: new G()
  };
}
function Ua(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ge(e, t) {
  var n = e.__data__;
  return Ua(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function La(e) {
  var t = ge(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ra(e) {
  return ge(this, e).get(e);
}
function ka(e) {
  return ge(this, e).has(e);
}
function Ba(e, t) {
  var n = ge(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function k(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
k.prototype.clear = Ma;
k.prototype.delete = La;
k.prototype.get = Ra;
k.prototype.has = ka;
k.prototype.set = Ba;
var za = "Expected a function";
function Fe(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(za);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, r);
    return n.cache = i.set(a, o) || i, o;
  };
  return n.cache = new (Fe.Cache || k)(), n;
}
Fe.Cache = k;
var Ga = 500;
function Da(e) {
  var t = Fe(e, function(r) {
    return n.size === Ga && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Ka = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ha = /\\(\\)?/g, Ya = Da(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ka, function(n, r, a, i) {
    t.push(a ? i.replace(Ha, "$1") : r || n);
  }), t;
});
function qa(e) {
  return e == null ? "" : xt(e);
}
function he(e, t) {
  return H(e) ? e : va(e, t) ? [e] : Ya(qa(e));
}
var Wa = 1 / 0;
function Ne(e) {
  if (typeof e == "string" || je(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Wa ? "-0" : t;
}
function Dt(e, t) {
  t = he(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ne(t[n++])];
  return n && n == r ? e : void 0;
}
function et(e, t, n) {
  var r = e == null ? void 0 : Dt(e, t);
  return r === void 0 ? n : r;
}
function Me(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var tt = V ? V.isConcatSpreadable : void 0;
function Za(e) {
  return H(e) || Lt(e) || !!(tt && e && e[tt]);
}
function Kt(e, t, n, r, a) {
  var i = -1, o = e.length;
  for (n || (n = Za), a || (a = []); ++i < o; ) {
    var u = e[i];
    t > 0 && n(u) ? t > 1 ? Kt(u, t - 1, n, r, a) : Me(a, u) : r || (a[a.length] = u);
  }
  return a;
}
function Xa(e) {
  var t = e == null ? 0 : e.length;
  return t ? Kt(e, 1) : [];
}
function Qa(e) {
  return yr($r(e, void 0, Xa), e + "");
}
var Ue = Gt(Object.getPrototypeOf, Object), Ja = "[object Object]", eo = Function.prototype, to = Object.prototype, Ht = eo.toString, no = to.hasOwnProperty, ro = Ht.call(Object);
function ao(e) {
  if (!K(e) || D(e) != Ja)
    return !1;
  var t = Ue(e);
  if (t === null)
    return !0;
  var n = no.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ht.call(n) == ro;
}
function oo(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++r < a; )
    i[r] = e[r + t];
  return i;
}
function lo() {
  this.__data__ = new U(), this.size = 0;
}
function uo(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function io(e) {
  return this.__data__.get(e);
}
function co(e) {
  return this.__data__.has(e);
}
var so = 200;
function fo(e, t) {
  var n = this.__data__;
  if (n instanceof U) {
    var r = n.__data__;
    if (!le || r.length < so - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new k(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function J(e) {
  var t = this.__data__ = new U(e);
  this.size = t.size;
}
J.prototype.clear = lo;
J.prototype.delete = uo;
J.prototype.get = io;
J.prototype.has = co;
J.prototype.set = fo;
function po(e, t) {
  return e && ue(t, Ie(t), e);
}
function go(e, t) {
  return e && ue(t, Ve(t), e);
}
var Yt = typeof exports == "object" && exports && !exports.nodeType && exports, nt = Yt && typeof module == "object" && module && !module.nodeType && module, ho = nt && nt.exports === Yt, rt = ho ? F.Buffer : void 0, at = rt ? rt.allocUnsafe : void 0;
function yo(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = at ? at(n) : new e.constructor(n);
  return e.copy(r), r;
}
function vo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (i[a++] = o);
  }
  return i;
}
function qt() {
  return [];
}
var bo = Object.prototype, mo = bo.propertyIsEnumerable, ot = Object.getOwnPropertySymbols, Le = ot ? function(e) {
  return e == null ? [] : (e = Object(e), vo(ot(e), function(t) {
    return mo.call(e, t);
  }));
} : qt;
function To(e, t) {
  return ue(e, Le(e), t);
}
var wo = Object.getOwnPropertySymbols, $o = wo ? function(e) {
  for (var t = []; e; )
    Me(t, Le(e)), e = Ue(e);
  return t;
} : qt;
const Wt = $o;
function So(e, t) {
  return ue(e, Wt(e), t);
}
function Zt(e, t, n) {
  var r = t(e);
  return H(e) ? r : Me(r, n(e));
}
function Ao(e) {
  return Zt(e, Ie, Le);
}
function Xt(e) {
  return Zt(e, Ve, Wt);
}
var Se = q(F, "DataView"), Ae = q(F, "Promise"), Ce = q(F, "Set"), lt = "[object Map]", Co = "[object Object]", ut = "[object Promise]", it = "[object Set]", ct = "[object WeakMap]", st = "[object DataView]", _o = Y(Se), Oo = Y(le), jo = Y(Ae), Eo = Y(Ce), xo = Y($e), B = D;
(Se && B(new Se(new ArrayBuffer(1))) != st || le && B(new le()) != lt || Ae && B(Ae.resolve()) != ut || Ce && B(new Ce()) != it || $e && B(new $e()) != ct) && (B = function(e) {
  var t = D(e), n = t == Co ? e.constructor : void 0, r = n ? Y(n) : "";
  if (r)
    switch (r) {
      case _o:
        return st;
      case Oo:
        return lt;
      case jo:
        return ut;
      case Eo:
        return it;
      case xo:
        return ct;
    }
  return t;
});
const Re = B;
var Po = Object.prototype, Io = Po.hasOwnProperty;
function Vo(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Io.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var ft = F.Uint8Array;
function ke(e) {
  var t = new e.constructor(e.byteLength);
  return new ft(t).set(new ft(e)), t;
}
function Fo(e, t) {
  var n = t ? ke(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var No = /\w*$/;
function Mo(e) {
  var t = new e.constructor(e.source, No.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var dt = V ? V.prototype : void 0, pt = dt ? dt.valueOf : void 0;
function Uo(e) {
  return pt ? Object(pt.call(e)) : {};
}
function Lo(e, t) {
  var n = t ? ke(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Ro = "[object Boolean]", ko = "[object Date]", Bo = "[object Map]", zo = "[object Number]", Go = "[object RegExp]", Do = "[object Set]", Ko = "[object String]", Ho = "[object Symbol]", Yo = "[object ArrayBuffer]", qo = "[object DataView]", Wo = "[object Float32Array]", Zo = "[object Float64Array]", Xo = "[object Int8Array]", Qo = "[object Int16Array]", Jo = "[object Int32Array]", el = "[object Uint8Array]", tl = "[object Uint8ClampedArray]", nl = "[object Uint16Array]", rl = "[object Uint32Array]";
function al(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Yo:
      return ke(e);
    case Ro:
    case ko:
      return new r(+e);
    case qo:
      return Fo(e, n);
    case Wo:
    case Zo:
    case Xo:
    case Qo:
    case Jo:
    case el:
    case tl:
    case nl:
    case rl:
      return Lo(e, n);
    case Bo:
      return new r();
    case zo:
    case Ko:
      return new r(e);
    case Go:
      return Mo(e);
    case Do:
      return new r();
    case Ho:
      return Uo(e);
  }
}
function ol(e) {
  return typeof e.constructor == "function" && !xe(e) ? lr(Ue(e)) : {};
}
var ll = "[object Map]";
function ul(e) {
  return K(e) && Re(e) == ll;
}
var gt = Q && Q.isMap, il = gt ? Pe(gt) : ul, cl = "[object Set]";
function sl(e) {
  return K(e) && Re(e) == cl;
}
var ht = Q && Q.isSet, fl = ht ? Pe(ht) : sl, dl = 1, pl = 2, gl = 4, Qt = "[object Arguments]", hl = "[object Array]", yl = "[object Boolean]", vl = "[object Date]", bl = "[object Error]", Jt = "[object Function]", ml = "[object GeneratorFunction]", Tl = "[object Map]", wl = "[object Number]", en = "[object Object]", $l = "[object RegExp]", Sl = "[object Set]", Al = "[object String]", Cl = "[object Symbol]", _l = "[object WeakMap]", Ol = "[object ArrayBuffer]", jl = "[object DataView]", El = "[object Float32Array]", xl = "[object Float64Array]", Pl = "[object Int8Array]", Il = "[object Int16Array]", Vl = "[object Int32Array]", Fl = "[object Uint8Array]", Nl = "[object Uint8ClampedArray]", Ml = "[object Uint16Array]", Ul = "[object Uint32Array]", w = {};
w[Qt] = w[hl] = w[Ol] = w[jl] = w[yl] = w[vl] = w[El] = w[xl] = w[Pl] = w[Il] = w[Vl] = w[Tl] = w[wl] = w[en] = w[$l] = w[Sl] = w[Al] = w[Cl] = w[Fl] = w[Nl] = w[Ml] = w[Ul] = !0;
w[bl] = w[Jt] = w[_l] = !1;
function ce(e, t, n, r, a, i) {
  var o, u = t & dl, g = t & pl, f = t & gl;
  if (n && (o = a ? n(e, r, a, i) : n(e)), o !== void 0)
    return o;
  if (!z(e))
    return e;
  var s = H(e);
  if (s) {
    if (o = Vo(e), !u)
      return ir(e, o);
  } else {
    var A = Re(e), O = A == Jt || A == ml;
    if (kt(e))
      return yo(e, u);
    if (A == en || A == Qt || O && !a) {
      if (o = g || O ? {} : ol(e), !u)
        return g ? So(e, go(o, e)) : To(e, po(o, e));
    } else {
      if (!w[A])
        return a ? e : {};
      o = al(e, A, u);
    }
  }
  i || (i = new J());
  var b = i.get(e);
  if (b)
    return b;
  i.set(e, o), fl(e) ? e.forEach(function(p) {
    o.add(ce(p, t, n, p, e, i));
  }) : il(e) && e.forEach(function(p, l) {
    o.set(l, ce(p, t, n, l, e, i));
  });
  var C = f ? g ? Xt : Ao : g ? Ve : Ie, y = s ? void 0 : C(e);
  return vr(y || e, function(p, l) {
    y && (l = p, p = e[l]), Ee(o, l, ce(p, t, n, l, e, i));
  }), o;
}
function Ll(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Rl(e, t) {
  return t.length < 2 ? e : Dt(e, oo(t, 0, -1));
}
function kl(e, t) {
  return t = he(t, e), e = Rl(e, t), e == null || delete e[Ne(Ll(t))];
}
function Bl(e) {
  return ao(e) ? void 0 : e;
}
var zl = 1, Gl = 2, Dl = 4, yt = Qa(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = Et(t, function(i) {
    return i = he(i, e), r || (r = i.length > 1), i;
  }), ue(e, Xt(e), n), r && (n = ce(n, zl | Gl | Dl, Bl));
  for (var a = t.length; a--; )
    kl(n, t[a]);
  return n;
});
function Kl(e, t, n, r) {
  if (!z(e))
    return e;
  t = he(t, e);
  for (var a = -1, i = t.length, o = i - 1, u = e; u != null && ++a < i; ) {
    var g = Ne(t[a]), f = n;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (a != o) {
      var s = u[g];
      f = r ? r(s, g, u) : void 0, f === void 0 && (f = z(s) ? s : It(t[a + 1]) ? [] : {});
    }
    Ee(u, g, f), u = u[g];
  }
  return e;
}
function Hl(e, t, n) {
  return e == null ? e : Kl(e, t, n);
}
const Yl = { key: 0 }, ql = { key: 1 }, Wl = { key: 2 }, Be = {
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
    const n = e, r = t, a = E(et(n.row, n.col.prop));
    de(() => et(n.row, n.col.prop), (g) => {
      a.value = g;
    });
    const i = () => {
      Hl(n.row, n.col.prop, a.value), n.col.change && n.col.change(n.row, a.value), r("update:row", n.row);
    }, o = (g, f) => f.find((A) => A.value === g) || {}, u = (g, f) => {
      const s = o(g, f);
      return (s == null ? void 0 : s.label) || g;
    };
    return (g, f) => (c(), _(I, null, [
      e.col.scope ? S("", !0) : (c(), _("div", Yl, L(e.row[e.col.prop]), 1)),
      e.col.scope === "number-col" ? (c(), _("div", ql, L(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : S("", !0),
      e.col.scope === "render" && e.col.render ? (c(), _("div", Wl, L(e.col.render(e.row, e.col.prop)), 1)) : S("", !0),
      ["textarea", "input"].includes(e.col.scope) ? (c(), v(d(ie), P({
        key: 3,
        type: e.col.scope || "text"
      }, {
        ...yt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[0] || (f[0] = (s) => a.value = s),
        onChange: i
      }), null, 16, ["type", "modelValue"])) : S("", !0),
      e.col.scope === "input-number" ? (c(), v(d(fn), P({ key: 4 }, {
        ...yt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[1] || (f[1] = (s) => a.value = s),
        onChange: i
      }), null, 16, ["modelValue"])) : S("", !0),
      e.col.scope === "select" ? (c(), v(d(wt), P({ key: 5 }, {
        ...e.col
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": f[2] || (f[2] = (s) => a.value = s),
        onChange: i
      }), {
        default: m(() => [
          (c(!0), _(I, null, M(e.col.options, (s) => (c(), v(d($t), {
            key: s.value,
            label: s.label,
            value: s.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"])) : S("", !0),
      e.col.scope === "tag" ? (c(), v(d(dn), {
        key: 6,
        type: o(e.row[e.col.prop], e.col.options).type
      }, {
        default: m(() => [
          R(L(u(e.row[e.col.prop], e.col.options)), 1)
        ]),
        _: 1
      }, 8, ["type"])) : S("", !0),
      e.col.scope === "img" ? (c(), v(d(pn), {
        key: 7,
        src: a.value,
        fit: e.col.fit || "cover"
      }, null, 8, ["src", "fit"])) : S("", !0),
      ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (c(), v(d(St), P({ key: 8 }, {
        ...e.col
      }, {
        type: e.col.scope,
        modelValue: a.value,
        "onUpdate:modelValue": f[3] || (f[3] = (s) => a.value = s),
        onChange: i
      }), null, 16, ["type", "modelValue"])) : S("", !0),
      e.col.scope === "switch" ? (c(), v(d(gn), P({
        key: 9,
        modelValue: a.value,
        "onUpdate:modelValue": f[4] || (f[4] = (s) => a.value = s),
        onChange: i
      }, {
        ...e.col
      }), null, 16, ["modelValue"])) : S("", !0),
      e.col.scope === "radio" ? (c(), v(d(hn), {
        key: 10,
        modelValue: a.value,
        "onUpdate:modelValue": f[5] || (f[5] = (s) => a.value = s),
        onChange: i
      }, {
        default: m(() => [
          (c(!0), _(I, null, M(e.col.options, (s) => (c(), v(d(At), {
            label: s.value,
            key: s.label
          }, {
            default: m(() => [
              R(L(s.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : S("", !0)
    ], 64));
  }
}, tn = {
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
    const n = e, { proxy: r } = fe(), a = E(null), i = E(null), o = E(null), u = () => {
      const b = document.querySelector(".table-container .c-table");
      if (b) {
        const { top: C } = b.getBoundingClientRect();
        i.value = window.innerHeight - C - 50;
      }
    }, g = () => {
      o.value.clearSelection();
    }, f = () => {
      o.value.setCurrentRow();
    }, s = (b) => {
      a.value = b ? b.id : null, n.radio && n.radio(b);
    }, A = (b, C, y) => {
      r.$emit(b.event, C, y), r.$emit("btnClick", {
        btn: b,
        row: C,
        index: y
      });
    }, O = (b, C, y) => "if" in b ? typeof b.if == "function" ? b.if(C, y) : C[b.if] : b.render ? !!b.render(C, y) : !!b.label;
    return t({
      clearSelection: g,
      clearRadio: f
    }), _e(() => {
      n.onSize && (window.addEventListener("resize", u), an(() => {
        u();
      }));
    }), on(() => {
      n.onSize && window.removeEventListener("resize", u);
    }), (b, C) => {
      const y = ln("v-table", !0);
      return c(), _("div", {
        class: Oe(["v-table", { pd: e.onAdd }])
      }, [
        j(d(yn), P({
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
            e.selection ? (c(), v(d(be), {
              key: 0,
              type: "selection",
              width: "40"
            })) : S("", !0),
            e.radio ? (c(), v(d(be), {
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
                  "onUpdate:modelValue": C[0] || (C[0] = (l) => a.value = l),
                  label: p.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : S("", !0),
            (c(!0), _(I, null, M(e.columns, (p) => (c(), v(d(be), P({
              key: p.prop,
              width: p.width
            }, {
              ...p
            }), {
              default: m(({ row: l, $index: h }) => [
                ["btn", "table"].includes(p.scope) ? S("", !0) : (c(), v(Be, {
                  key: 0,
                  row: l,
                  col: p
                }, null, 8, ["row", "col"])),
                p.scope === "table" ? (c(), v(y, {
                  key: 1,
                  data: l[p.prop],
                  columns: p.options
                }, null, 8, ["data", "columns"])) : S("", !0),
                p.scope === "btn" ? (c(!0), _(I, { key: 2 }, M(p.options || [], (T) => (c(), _(I, {
                  key: T.event
                }, [
                  O(T, l, h) ? (c(), v(d(ne), P({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: T.type || "primary",
                    onClick: (W) => A(T, l, h)
                  }, {
                    ...T
                  }), {
                    default: m(() => [
                      R(L(T.label || (T.render ? T.render(l, h) : "")), 1)
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
          onClick: C[1] || (C[1] = (...p) => e.onAdd && e.onAdd(...p))
        })) : S("", !0)
      ], 2);
    };
  }
}, Zl = { class: "v-page-operator" }, Xl = { class: "v-page-table" }, Ql = {
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
    const { GET_LIST: n, GET_TOTAL: r, PAGE_NUM_KEY: a, PAGE_SIZE_KEY: i } = Sn(), { proxy: o } = fe(), u = e, g = E([]), f = E({}), s = E(0), A = E({}), O = E({}), b = E(null), C = () => {
      var x;
      (x = b.value) == null || x.clearRadio();
    }, y = () => {
      var x;
      (x = b.value) == null || x.clearSelection();
    }, p = ({ btn: x, row: Z, index: N }) => {
      o.$emit(x.event, Z, N);
    }, l = async (x = {}) => {
      if (!u.getList)
        return;
      const Z = vn.service({
        target: ".v-page-table"
      });
      try {
        f.value = {
          [a]: A.value.pageNum || 1,
          [i]: A.value.pageSize || 10,
          ...x
        };
        const N = await u.getList(f.value);
        let ee = n(N);
        u.formatList && (ee = u.formatList(ee)), g.value = ee.map((ve, nn) => ({
          ...ve,
          index: nn + 1 + (f.value[a] - 1) * f.value[i]
        })), s.value = r(N);
      } finally {
        Z.close();
      }
    }, h = (x) => {
      A.value = x, y(), C(), l({
        ...x,
        ...O.value
      });
    }, T = async () => {
      y(), C(), await l({
        ...A.value,
        ...O.value
      });
    }, W = (x) => {
      A.value.pageNum = 1, O.value = x, T(), o.$emit("search", x);
    };
    t({
      refreshList: T,
      clearSelection: y,
      clearRadio: C,
      search: () => {
        ye.value.search();
      }
    });
    const ye = E();
    return _e(() => {
      u.init && (u.showFilter ? ye.value.search() : l());
    }), (x, Z) => (c(), _("div", {
      class: Oe(["v-page", { pd: u.table && u.table.onAdd }])
    }, [
      e.showFilter ? (c(), v(Ct, {
        key: 0,
        ref_key: "filterRef",
        ref: ye,
        filter: e.filter,
        "label-width": e.filterLabelWidth,
        btns: e.filterBtns,
        col: e.filterCol,
        onSearch: W,
        onReset: Z[0] || (Z[0] = () => W({}))
      }, null, 8, ["filter", "label-width", "btns", "col"])) : S("", !0),
      ae("div", Zl, [
        (c(!0), _(I, null, M(e.btns, (N, ee) => (c(), v(d(ne), {
          key: ee,
          type: N.type || "primary",
          onClick: (ve) => N.click && N.click(ve)
        }, {
          default: m(() => [
            R(L(N.label), 1)
          ]),
          _: 2
        }, 1032, ["type", "onClick"]))), 128)),
        bt(x.$slots, "btn")
      ]),
      ae("div", Xl, [
        j(tn, P({
          ref_key: "tableRef",
          ref: b,
          data: g.value,
          columns: e.columns,
          selection: e.selection,
          radio: e.radio
        }, {
          ...u.table
        }, { onBtnClick: p }), null, 16, ["data", "columns", "selection", "radio"])
      ]),
      e.showPagination ? (c(), v(_t, {
        key: 1,
        page: A.value.pageNum,
        total: s.value,
        onPagination: h
      }, null, 8, ["page", "total"])) : S("", !0)
    ], 2));
  }
}, Jl = {
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
    const r = e, a = n, i = E({ ...r.value }), o = E();
    de(() => r.value, () => {
      u();
    }, { deep: !0 });
    const u = () => {
      i.value = {
        ...r.value
      };
    }, g = (s) => {
      a("update:value", s);
    };
    return t({
      validate: () => new Promise((s, A) => {
        o.value.validate((O) => {
          O ? s(i.value) : A();
        });
      }),
      reset: u,
      form: i
    }), (s, A) => (c(), v(d(mt), P({
      class: "c-form",
      ref_key: "formRef",
      ref: o,
      model: i.value,
      rules: e.rules,
      "label-width": "130px"
    }, s.$attrs), {
      default: m(() => [
        j(d(we), { gutter: 20 }, {
          default: m(() => [
            (c(!0), _(I, null, M(e.list, (O) => (c(), v(d(X), {
              span: O.colSpan || 24 / e.col,
              key: O.prop
            }, {
              default: m(() => [
                j(d(Tt), {
                  label: O.label,
                  prop: O.prop
                }, {
                  default: m(() => [
                    j(Be, {
                      row: i.value,
                      col: O,
                      "onUpdate:row": g
                    }, null, 8, ["row", "col"]),
                    bt(s.$slots, O.prop)
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
}, ru = {
  install(e, t = {}) {
    const { config: n } = t;
    n && $n(n, e), e.component("VPage", Ql), e.component("VFilter", Ct), e.component("VTable", tn), e.component("VElement", Be), e.component("VPagination", _t), e.component("VForm", Jl);
  }
};
export {
  Be as VElement,
  Ct as VFilter,
  Jl as VForm,
  _t as VPagination,
  tn as VTable,
  ru as default,
  $n as setConfig
};
