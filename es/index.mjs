import { inject as G, defineComponent as te, openBlock as c, createElementBlock as _, createElementVNode as K, getCurrentInstance as q, computed as N, ref as E, watch as R, onMounted as Te, createVNode as j, unref as s, withCtx as $, Fragment as L, renderList as D, createBlock as m, createCommentVNode as T, mergeProps as F, createTextVNode as Y, toDisplayString as B, normalizeClass as x, warn as Rn, renderSlot as ye, toRef as Dn, onUnmounted as Rt, normalizeStyle as dt, withModifiers as Gn, withKeys as Hn, resolveDynamicComponent as pe, nextTick as Dt, resolveComponent as Yn } from "vue";
import { ElCard as qn, ElForm as Gt, ElRow as Le, ElCol as ue, ElFormItem as Ht, ElInput as _e, ElSelect as Yt, ElOption as qt, ElDatePicker as Wt, ElCascader as Wn, ElButton as ge, ElPagination as Jn, ElInputNumber as Zn, ElTag as Xn, ElImage as Qn, ElRadioGroup as er, ElRadio as Jt, ElTable as tr, ElTableColumn as xe, ElLoading as nr } from "element-plus";
let rr = "pageSize", or = "pageNum", ar = (e) => e.data, lr = (e) => e.total;
function ir(e, t) {
  t && t.provide("vxe-page", e);
}
function ur() {
  return G("vxe-page", {
    PAGE_SIZE_KEY: rr,
    PAGE_NUM_KEY: or,
    GET_LIST: ar,
    GET_TOTAL: lr
  });
}
/*! Element Plus Icons Vue v2.3.1 */
var sr = /* @__PURE__ */ te({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (c(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), cr = sr, dr = /* @__PURE__ */ te({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, n) => (c(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), fr = dr, pr = /* @__PURE__ */ te({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, n) => (c(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      K("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), vr = pr;
const gr = { class: "v-filter" }, Zt = {
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
    const { proxy: n } = q(), r = e, o = N(() => {
      const d = r.filter.filter((u) => u.required), f = {};
      return d.forEach((u) => {
        f[u.prop] = [
          { required: !0, message: u.message || `${u.label}不能为空` }
        ];
      }), f;
    }), l = E(), i = E({}), a = E([]), h = E(["date", "daterange", "month", "year", "monthrange"]), v = N(() => 24 / r.col);
    R(() => r.filter, (d) => {
      b(d);
    }, { deep: !0 });
    const b = (d = []) => {
      a.value = d.map((f) => ((f.initValue || f.initValue === 0) && (i.value[f.prop] = f.initValue), {
        ...f
      }));
    }, g = () => {
      i.value = {};
    }, C = (d, f) => {
      h.value.includes(f.scope) && (f.startKey && (i.value[f.startKey] = d && d.length > 1 ? d[0] : ""), f.endKey && (i.value[f.endKey] = d && d.length > 1 ? d[1] : ""));
    }, S = () => new Promise((d, f) => {
      l.value.validate((u) => {
        if (u) {
          const w = {};
          a.value.forEach((y) => {
            const k = y.filterProp || y.prop;
            y.startKey ? (w[y.startKey] = i.value[y.startKey], w[y.endKey] = i.value[y.endKey]) : w[k] = i.value[y.prop], y.format && typeof y.format == "function" && (w[k] = y.format(i.value[y.prop]));
          }), n.$emit("search", w), d();
        } else
          f();
      });
    }), P = () => {
      g(), n.$emit("reset");
    };
    return Te(() => {
      b(r.filter);
    }), t({
      search: S
    }), (d, f) => (c(), _("div", gr, [
      j(s(qn), null, {
        default: $(() => [
          j(s(Gt), {
            ref_key: "filterFormRef",
            ref: l,
            model: i.value,
            "label-width": e.labelWidth,
            rules: o.value
          }, {
            default: $(() => [
              j(s(Le), { gutter: 20 }, {
                default: $(() => [
                  (c(!0), _(L, null, D(a.value, (u) => (c(), m(s(ue), {
                    span: v.value,
                    key: u.prop
                  }, {
                    default: $(() => [
                      j(s(Ht), {
                        label: u.label,
                        "label-width": u.labelWidth || e.labelWidth,
                        prop: u.prop
                      }, {
                        default: $(() => [
                          u.scope === "input" ? (c(), m(s(_e), {
                            key: 0,
                            modelValue: i.value[u.prop],
                            "onUpdate:modelValue": (w) => i.value[u.prop] = w,
                            modelModifiers: { trim: !0 },
                            placeholder: u.placeholder || "请输入"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : T("", !0),
                          u.scope === "select" ? (c(), m(s(Yt), F({
                            key: 1,
                            modelValue: i.value[u.prop],
                            "onUpdate:modelValue": (w) => i.value[u.prop] = w,
                            placeholder: u.placeholder || "请选择",
                            clearable: "",
                            filterable: ""
                          }, {
                            ...u
                          }, {
                            "filter-method": (w) => {
                              var y;
                              return (y = u.remoteMethod) == null ? void 0 : y.call(u, w, u);
                            },
                            onChange: function(w) {
                              u.onchange && u.onchange(w);
                            }
                          }), {
                            default: $(() => [
                              (c(!0), _(L, null, D(u.options || [], (w) => (c(), m(s(qt), {
                                key: w.value,
                                label: w.label,
                                value: w.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : T("", !0),
                          h.value.includes(u.scope) ? (c(), m(s(Wt), {
                            key: 2,
                            modelValue: i.value[u.prop],
                            "onUpdate:modelValue": (w) => i.value[u.prop] = w,
                            "value-format": u.format || "YYYY-MM-DD HH:mm:ss",
                            type: u.scope,
                            placeholder: u.placeholder || "请选择",
                            "start-placeholder": "开始",
                            "end-placeholder": "结束",
                            clearable: "",
                            onChange: (w) => C(w, u)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "onChange"])) : T("", !0),
                          u.scope === "range" ? (c(), m(s(Le), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: $(() => [
                              j(s(ue), { span: 11 }, {
                                default: $(() => [
                                  j(s(_e), {
                                    modelValue: i.value[u.startKey],
                                    "onUpdate:modelValue": (w) => i.value[u.startKey] = w,
                                    placeholder: u.placeholder || "请输入",
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024),
                              j(s(ue), {
                                class: "line",
                                span: 2
                              }, {
                                default: $(() => [
                                  Y("-")
                                ]),
                                _: 1
                              }),
                              j(s(ue), { span: 11 }, {
                                default: $(() => [
                                  j(s(_e), {
                                    modelValue: i.value[u.endKey],
                                    "onUpdate:modelValue": (w) => i.value[u.endKey] = w,
                                    placeholder: u.placeholder || "请输入",
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : T("", !0),
                          u.scope === "cascader" ? (c(), m(s(Wn), {
                            key: 4,
                            modelValue: i.value[u.prop],
                            "onUpdate:modelValue": (w) => i.value[u.prop] = w,
                            options: u.options,
                            props: u.cascaderProps || { checkStrictly: !0, emitPath: !1 },
                            "collapse-tags": u.collapseTags,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "collapse-tags"])) : T("", !0)
                        ]),
                        _: 2
                      }, 1032, ["label", "label-width", "prop"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128)),
                  j(s(ue), { span: v.value }, {
                    default: $(() => [
                      j(s(ge), {
                        type: "primary",
                        icon: s(vr),
                        onClick: S
                      }, {
                        default: $(() => [
                          Y("搜索")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      j(s(ge), {
                        icon: s(fr),
                        onClick: P
                      }, {
                        default: $(() => [
                          Y("重置")
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (c(!0), _(L, null, D(e.btns, (u) => (c(), m(s(ge), {
                        key: u.text,
                        onClick: u.click
                      }, {
                        default: $(() => [
                          Y(B(u.text), 1)
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
var hr = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function yr(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function br() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function ft(e, t, n) {
  const r = br(), o = e - r, l = 20;
  let i = 0;
  t = typeof t > "u" ? 500 : t;
  var a = function() {
    i += l;
    var h = Math.easeInOutQuad(i, r, o, t);
    yr(h), i < t ? hr(a) : n && typeof n == "function" && n();
  };
  a();
}
const Xt = {
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
    const t = e, n = E(10), r = E(t.page || 1), { proxy: o } = q();
    R(() => t.page, (a) => {
      console.log(a), r.value = a;
    });
    const l = (a) => {
      console.log("size change"), r.value * a > t.total && (r.value = 1), n.value = a, o.$emit("pagination", { pageNum: r.value, pageSize: a }), t.autoScroll && ft(0, 800);
    }, i = (a) => {
      console.log("page change"), r.value = a, o.$emit("pagination", { pageNum: a, pageSize: n.value }), t.autoScroll && ft(0, 800);
    };
    return (a, h) => (c(), _("div", {
      class: x([{ hidden: e.hidden }, "v-pagination"])
    }, [
      j(s(Jn), F({
        "current-page": r.value,
        layout: e.layout
      }, a.$attrs, {
        onSizeChange: l,
        onCurrentChange: i
      }), null, 16, ["current-page", "layout"])
    ], 2));
  }
};
var pt;
const Qt = typeof window < "u";
Qt && ((pt = window == null ? void 0 : window.navigator) != null && pt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const mr = Object.prototype.hasOwnProperty, vt = (e, t) => mr.call(e, t), Fe = (e) => typeof e == "function", se = (e) => typeof e == "string", qe = (e) => e !== null && typeof e == "object", gt = (e) => (qe(e) || Fe(e)) && Fe(e.then) && Fe(e.catch);
var en = typeof global == "object" && global && global.Object === Object && global, wr = typeof self == "object" && self && self.Object === Object && self, U = en || wr || Function("return this")(), M = U.Symbol, tn = Object.prototype, Tr = tn.hasOwnProperty, $r = tn.toString, ve = M ? M.toStringTag : void 0;
function Sr(e) {
  var t = Tr.call(e, ve), n = e[ve];
  try {
    e[ve] = void 0;
    var r = !0;
  } catch {
  }
  var o = $r.call(e);
  return r && (t ? e[ve] = n : delete e[ve]), o;
}
var _r = Object.prototype, Cr = _r.toString;
function Er(e) {
  return Cr.call(e);
}
var Or = "[object Null]", Ar = "[object Undefined]", ht = M ? M.toStringTag : void 0;
function ne(e) {
  return e == null ? e === void 0 ? Ar : Or : ht && ht in Object(e) ? Sr(e) : Er(e);
}
function re(e) {
  return e != null && typeof e == "object";
}
var Ir = "[object Symbol]";
function We(e) {
  return typeof e == "symbol" || re(e) && ne(e) == Ir;
}
function nn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var oe = Array.isArray, Pr = 1 / 0, yt = M ? M.prototype : void 0, bt = yt ? yt.toString : void 0;
function rn(e) {
  if (typeof e == "string")
    return e;
  if (oe(e))
    return nn(e, rn) + "";
  if (We(e))
    return bt ? bt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Pr ? "-0" : t;
}
function Q(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function jr(e) {
  return e;
}
var Vr = "[object AsyncFunction]", Nr = "[object Function]", xr = "[object GeneratorFunction]", Fr = "[object Proxy]";
function on(e) {
  if (!Q(e))
    return !1;
  var t = ne(e);
  return t == Nr || t == xr || t == Vr || t == Fr;
}
var ke = U["__core-js_shared__"], mt = function() {
  var e = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function kr(e) {
  return !!mt && mt in e;
}
var zr = Function.prototype, Br = zr.toString;
function ae(e) {
  if (e != null) {
    try {
      return Br.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Lr = /[\\^$.*+?()[\]{}|]/g, Mr = /^\[object .+?Constructor\]$/, Ur = Function.prototype, Kr = Object.prototype, Rr = Ur.toString, Dr = Kr.hasOwnProperty, Gr = RegExp(
  "^" + Rr.call(Dr).replace(Lr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hr(e) {
  if (!Q(e) || kr(e))
    return !1;
  var t = on(e) ? Gr : Mr;
  return t.test(ae(e));
}
function Yr(e, t) {
  return e == null ? void 0 : e[t];
}
function le(e, t) {
  var n = Yr(e, t);
  return Hr(n) ? n : void 0;
}
var Me = le(U, "WeakMap"), wt = Object.create, qr = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Q(t))
      return {};
    if (wt)
      return wt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Wr(e, t, n) {
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
function Jr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Zr = 800, Xr = 16, Qr = Date.now;
function eo(e) {
  var t = 0, n = 0;
  return function() {
    var r = Qr(), o = Xr - (r - n);
    if (n = r, o > 0) {
      if (++t >= Zr)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function to(e) {
  return function() {
    return e;
  };
}
var Ie = function() {
  try {
    var e = le(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), no = Ie ? function(e, t) {
  return Ie(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: to(t),
    writable: !0
  });
} : jr;
const ro = no;
var oo = eo(ro);
function ao(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var lo = 9007199254740991, io = /^(?:0|[1-9]\d*)$/;
function an(e, t) {
  var n = typeof e;
  return t = t ?? lo, !!t && (n == "number" || n != "symbol" && io.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ln(e, t, n) {
  t == "__proto__" && Ie ? Ie(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function un(e, t) {
  return e === t || e !== e && t !== t;
}
var uo = Object.prototype, so = uo.hasOwnProperty;
function Je(e, t, n) {
  var r = e[t];
  (!(so.call(e, t) && un(r, n)) || n === void 0 && !(t in e)) && ln(e, t, n);
}
function $e(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var a = t[l], h = r ? r(n[a], e[a], a, n, e) : void 0;
    h === void 0 && (h = e[a]), o ? ln(n, a, h) : Je(n, a, h);
  }
  return n;
}
var Tt = Math.max;
function co(e, t, n) {
  return t = Tt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, l = Tt(r.length - t, 0), i = Array(l); ++o < l; )
      i[o] = r[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = r[o];
    return a[t] = n(i), Wr(e, this, a);
  };
}
var fo = 9007199254740991;
function sn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fo;
}
function cn(e) {
  return e != null && sn(e.length) && !on(e);
}
var po = Object.prototype;
function Ze(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || po;
  return e === n;
}
function vo(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var go = "[object Arguments]";
function $t(e) {
  return re(e) && ne(e) == go;
}
var dn = Object.prototype, ho = dn.hasOwnProperty, yo = dn.propertyIsEnumerable, fn = $t(/* @__PURE__ */ function() {
  return arguments;
}()) ? $t : function(e) {
  return re(e) && ho.call(e, "callee") && !yo.call(e, "callee");
};
function bo() {
  return !1;
}
var pn = typeof exports == "object" && exports && !exports.nodeType && exports, St = pn && typeof module == "object" && module && !module.nodeType && module, mo = St && St.exports === pn, _t = mo ? U.Buffer : void 0, wo = _t ? _t.isBuffer : void 0, vn = wo || bo, To = "[object Arguments]", $o = "[object Array]", So = "[object Boolean]", _o = "[object Date]", Co = "[object Error]", Eo = "[object Function]", Oo = "[object Map]", Ao = "[object Number]", Io = "[object Object]", Po = "[object RegExp]", jo = "[object Set]", Vo = "[object String]", No = "[object WeakMap]", xo = "[object ArrayBuffer]", Fo = "[object DataView]", ko = "[object Float32Array]", zo = "[object Float64Array]", Bo = "[object Int8Array]", Lo = "[object Int16Array]", Mo = "[object Int32Array]", Uo = "[object Uint8Array]", Ko = "[object Uint8ClampedArray]", Ro = "[object Uint16Array]", Do = "[object Uint32Array]", I = {};
I[ko] = I[zo] = I[Bo] = I[Lo] = I[Mo] = I[Uo] = I[Ko] = I[Ro] = I[Do] = !0;
I[To] = I[$o] = I[xo] = I[So] = I[Fo] = I[_o] = I[Co] = I[Eo] = I[Oo] = I[Ao] = I[Io] = I[Po] = I[jo] = I[Vo] = I[No] = !1;
function Go(e) {
  return re(e) && sn(e.length) && !!I[ne(e)];
}
function Xe(e) {
  return function(t) {
    return e(t);
  };
}
var gn = typeof exports == "object" && exports && !exports.nodeType && exports, he = gn && typeof module == "object" && module && !module.nodeType && module, Ho = he && he.exports === gn, ze = Ho && en.process, ce = function() {
  try {
    var e = he && he.require && he.require("util").types;
    return e || ze && ze.binding && ze.binding("util");
  } catch {
  }
}(), Ct = ce && ce.isTypedArray, Yo = Ct ? Xe(Ct) : Go, qo = Object.prototype, Wo = qo.hasOwnProperty;
function hn(e, t) {
  var n = oe(e), r = !n && fn(e), o = !n && !r && vn(e), l = !n && !r && !o && Yo(e), i = n || r || o || l, a = i ? vo(e.length, String) : [], h = a.length;
  for (var v in e)
    (t || Wo.call(e, v)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    an(v, h))) && a.push(v);
  return a;
}
function yn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Jo = yn(Object.keys, Object), Zo = Object.prototype, Xo = Zo.hasOwnProperty;
function Qo(e) {
  if (!Ze(e))
    return Jo(e);
  var t = [];
  for (var n in Object(e))
    Xo.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Qe(e) {
  return cn(e) ? hn(e) : Qo(e);
}
function ea(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var ta = Object.prototype, na = ta.hasOwnProperty;
function ra(e) {
  if (!Q(e))
    return ea(e);
  var t = Ze(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !na.call(e, r)) || n.push(r);
  return n;
}
function et(e) {
  return cn(e) ? hn(e, !0) : ra(e);
}
var oa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, aa = /^\w*$/;
function la(e, t) {
  if (oe(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || We(e) ? !0 : aa.test(e) || !oa.test(e) || t != null && e in Object(t);
}
var be = le(Object, "create");
function ia() {
  this.__data__ = be ? be(null) : {}, this.size = 0;
}
function ua(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sa = "__lodash_hash_undefined__", ca = Object.prototype, da = ca.hasOwnProperty;
function fa(e) {
  var t = this.__data__;
  if (be) {
    var n = t[e];
    return n === sa ? void 0 : n;
  }
  return da.call(t, e) ? t[e] : void 0;
}
var pa = Object.prototype, va = pa.hasOwnProperty;
function ga(e) {
  var t = this.__data__;
  return be ? t[e] !== void 0 : va.call(t, e);
}
var ha = "__lodash_hash_undefined__";
function ya(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = be && t === void 0 ? ha : t, this;
}
function ee(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ee.prototype.clear = ia;
ee.prototype.delete = ua;
ee.prototype.get = fa;
ee.prototype.has = ga;
ee.prototype.set = ya;
function ba() {
  this.__data__ = [], this.size = 0;
}
function Pe(e, t) {
  for (var n = e.length; n--; )
    if (un(e[n][0], t))
      return n;
  return -1;
}
var ma = Array.prototype, wa = ma.splice;
function Ta(e) {
  var t = this.__data__, n = Pe(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : wa.call(t, n, 1), --this.size, !0;
}
function $a(e) {
  var t = this.__data__, n = Pe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Sa(e) {
  return Pe(this.__data__, e) > -1;
}
function _a(e, t) {
  var n = this.__data__, r = Pe(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function H(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
H.prototype.clear = ba;
H.prototype.delete = Ta;
H.prototype.get = $a;
H.prototype.has = Sa;
H.prototype.set = _a;
var me = le(U, "Map");
function Ca() {
  this.size = 0, this.__data__ = {
    hash: new ee(),
    map: new (me || H)(),
    string: new ee()
  };
}
function Ea(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function je(e, t) {
  var n = e.__data__;
  return Ea(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Oa(e) {
  var t = je(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Aa(e) {
  return je(this, e).get(e);
}
function Ia(e) {
  return je(this, e).has(e);
}
function Pa(e, t) {
  var n = je(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function W(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
W.prototype.clear = Ca;
W.prototype.delete = Oa;
W.prototype.get = Aa;
W.prototype.has = Ia;
W.prototype.set = Pa;
var ja = "Expected a function";
function tt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ja);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, r);
    return n.cache = l.set(o, i) || l, i;
  };
  return n.cache = new (tt.Cache || W)(), n;
}
tt.Cache = W;
var Va = 500;
function Na(e) {
  var t = tt(e, function(r) {
    return n.size === Va && n.clear(), r;
  }), n = t.cache;
  return t;
}
var xa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fa = /\\(\\)?/g, ka = Na(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xa, function(n, r, o, l) {
    t.push(o ? l.replace(Fa, "$1") : r || n);
  }), t;
});
function za(e) {
  return e == null ? "" : rn(e);
}
function Ve(e, t) {
  return oe(e) ? e : la(e, t) ? [e] : ka(za(e));
}
var Ba = 1 / 0;
function nt(e) {
  if (typeof e == "string" || We(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ba ? "-0" : t;
}
function bn(e, t) {
  t = Ve(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[nt(t[n++])];
  return n && n == r ? e : void 0;
}
function Et(e, t, n) {
  var r = e == null ? void 0 : bn(e, t);
  return r === void 0 ? n : r;
}
function rt(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ot = M ? M.isConcatSpreadable : void 0;
function La(e) {
  return oe(e) || fn(e) || !!(Ot && e && e[Ot]);
}
function mn(e, t, n, r, o) {
  var l = -1, i = e.length;
  for (n || (n = La), o || (o = []); ++l < i; ) {
    var a = e[l];
    t > 0 && n(a) ? t > 1 ? mn(a, t - 1, n, r, o) : rt(o, a) : r || (o[o.length] = a);
  }
  return o;
}
function Ma(e) {
  var t = e == null ? 0 : e.length;
  return t ? mn(e, 1) : [];
}
function Ua(e) {
  return oo(co(e, void 0, Ma), e + "");
}
var ot = yn(Object.getPrototypeOf, Object), Ka = "[object Object]", Ra = Function.prototype, Da = Object.prototype, wn = Ra.toString, Ga = Da.hasOwnProperty, Ha = wn.call(Object);
function Ya(e) {
  if (!re(e) || ne(e) != Ka)
    return !1;
  var t = ot(e);
  if (t === null)
    return !0;
  var n = Ga.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && wn.call(n) == Ha;
}
function qa(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var l = Array(o); ++r < o; )
    l[r] = e[r + t];
  return l;
}
function Wa() {
  this.__data__ = new H(), this.size = 0;
}
function Ja(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Za(e) {
  return this.__data__.get(e);
}
function Xa(e) {
  return this.__data__.has(e);
}
var Qa = 200;
function el(e, t) {
  var n = this.__data__;
  if (n instanceof H) {
    var r = n.__data__;
    if (!me || r.length < Qa - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new W(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function de(e) {
  var t = this.__data__ = new H(e);
  this.size = t.size;
}
de.prototype.clear = Wa;
de.prototype.delete = Ja;
de.prototype.get = Za;
de.prototype.has = Xa;
de.prototype.set = el;
function tl(e, t) {
  return e && $e(t, Qe(t), e);
}
function nl(e, t) {
  return e && $e(t, et(t), e);
}
var Tn = typeof exports == "object" && exports && !exports.nodeType && exports, At = Tn && typeof module == "object" && module && !module.nodeType && module, rl = At && At.exports === Tn, It = rl ? U.Buffer : void 0, Pt = It ? It.allocUnsafe : void 0;
function ol(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Pt ? Pt(n) : new e.constructor(n);
  return e.copy(r), r;
}
function al(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, l = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (l[o++] = i);
  }
  return l;
}
function $n() {
  return [];
}
var ll = Object.prototype, il = ll.propertyIsEnumerable, jt = Object.getOwnPropertySymbols, at = jt ? function(e) {
  return e == null ? [] : (e = Object(e), al(jt(e), function(t) {
    return il.call(e, t);
  }));
} : $n;
function ul(e, t) {
  return $e(e, at(e), t);
}
var sl = Object.getOwnPropertySymbols, cl = sl ? function(e) {
  for (var t = []; e; )
    rt(t, at(e)), e = ot(e);
  return t;
} : $n;
const Sn = cl;
function dl(e, t) {
  return $e(e, Sn(e), t);
}
function _n(e, t, n) {
  var r = t(e);
  return oe(e) ? r : rt(r, n(e));
}
function fl(e) {
  return _n(e, Qe, at);
}
function Cn(e) {
  return _n(e, et, Sn);
}
var Ue = le(U, "DataView"), Ke = le(U, "Promise"), Re = le(U, "Set"), Vt = "[object Map]", pl = "[object Object]", Nt = "[object Promise]", xt = "[object Set]", Ft = "[object WeakMap]", kt = "[object DataView]", vl = ae(Ue), gl = ae(me), hl = ae(Ke), yl = ae(Re), bl = ae(Me), X = ne;
(Ue && X(new Ue(new ArrayBuffer(1))) != kt || me && X(new me()) != Vt || Ke && X(Ke.resolve()) != Nt || Re && X(new Re()) != xt || Me && X(new Me()) != Ft) && (X = function(e) {
  var t = ne(e), n = t == pl ? e.constructor : void 0, r = n ? ae(n) : "";
  if (r)
    switch (r) {
      case vl:
        return kt;
      case gl:
        return Vt;
      case hl:
        return Nt;
      case yl:
        return xt;
      case bl:
        return Ft;
    }
  return t;
});
const lt = X;
var ml = Object.prototype, wl = ml.hasOwnProperty;
function Tl(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && wl.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var zt = U.Uint8Array;
function it(e) {
  var t = new e.constructor(e.byteLength);
  return new zt(t).set(new zt(e)), t;
}
function $l(e, t) {
  var n = t ? it(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Sl = /\w*$/;
function _l(e) {
  var t = new e.constructor(e.source, Sl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Bt = M ? M.prototype : void 0, Lt = Bt ? Bt.valueOf : void 0;
function Cl(e) {
  return Lt ? Object(Lt.call(e)) : {};
}
function El(e, t) {
  var n = t ? it(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Ol = "[object Boolean]", Al = "[object Date]", Il = "[object Map]", Pl = "[object Number]", jl = "[object RegExp]", Vl = "[object Set]", Nl = "[object String]", xl = "[object Symbol]", Fl = "[object ArrayBuffer]", kl = "[object DataView]", zl = "[object Float32Array]", Bl = "[object Float64Array]", Ll = "[object Int8Array]", Ml = "[object Int16Array]", Ul = "[object Int32Array]", Kl = "[object Uint8Array]", Rl = "[object Uint8ClampedArray]", Dl = "[object Uint16Array]", Gl = "[object Uint32Array]";
function Hl(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Fl:
      return it(e);
    case Ol:
    case Al:
      return new r(+e);
    case kl:
      return $l(e, n);
    case zl:
    case Bl:
    case Ll:
    case Ml:
    case Ul:
    case Kl:
    case Rl:
    case Dl:
    case Gl:
      return El(e, n);
    case Il:
      return new r();
    case Pl:
    case Nl:
      return new r(e);
    case jl:
      return _l(e);
    case Vl:
      return new r();
    case xl:
      return Cl(e);
  }
}
function Yl(e) {
  return typeof e.constructor == "function" && !Ze(e) ? qr(ot(e)) : {};
}
var ql = "[object Map]";
function Wl(e) {
  return re(e) && lt(e) == ql;
}
var Mt = ce && ce.isMap, Jl = Mt ? Xe(Mt) : Wl, Zl = "[object Set]";
function Xl(e) {
  return re(e) && lt(e) == Zl;
}
var Ut = ce && ce.isSet, Ql = Ut ? Xe(Ut) : Xl, ei = 1, ti = 2, ni = 4, En = "[object Arguments]", ri = "[object Array]", oi = "[object Boolean]", ai = "[object Date]", li = "[object Error]", On = "[object Function]", ii = "[object GeneratorFunction]", ui = "[object Map]", si = "[object Number]", An = "[object Object]", ci = "[object RegExp]", di = "[object Set]", fi = "[object String]", pi = "[object Symbol]", vi = "[object WeakMap]", gi = "[object ArrayBuffer]", hi = "[object DataView]", yi = "[object Float32Array]", bi = "[object Float64Array]", mi = "[object Int8Array]", wi = "[object Int16Array]", Ti = "[object Int32Array]", $i = "[object Uint8Array]", Si = "[object Uint8ClampedArray]", _i = "[object Uint16Array]", Ci = "[object Uint32Array]", A = {};
A[En] = A[ri] = A[gi] = A[hi] = A[oi] = A[ai] = A[yi] = A[bi] = A[mi] = A[wi] = A[Ti] = A[ui] = A[si] = A[An] = A[ci] = A[di] = A[fi] = A[pi] = A[$i] = A[Si] = A[_i] = A[Ci] = !0;
A[li] = A[On] = A[vi] = !1;
function Ce(e, t, n, r, o, l) {
  var i, a = t & ei, h = t & ti, v = t & ni;
  if (n && (i = o ? n(e, r, o, l) : n(e)), i !== void 0)
    return i;
  if (!Q(e))
    return e;
  var b = oe(e);
  if (b) {
    if (i = Tl(e), !a)
      return Jr(e, i);
  } else {
    var g = lt(e), C = g == On || g == ii;
    if (vn(e))
      return ol(e, a);
    if (g == An || g == En || C && !o) {
      if (i = h || C ? {} : Yl(e), !a)
        return h ? dl(e, nl(i, e)) : ul(e, tl(i, e));
    } else {
      if (!A[g])
        return o ? e : {};
      i = Hl(e, g, a);
    }
  }
  l || (l = new de());
  var S = l.get(e);
  if (S)
    return S;
  l.set(e, i), Ql(e) ? e.forEach(function(f) {
    i.add(Ce(f, t, n, f, e, l));
  }) : Jl(e) && e.forEach(function(f, u) {
    i.set(u, Ce(f, t, n, u, e, l));
  });
  var P = v ? h ? Cn : fl : h ? et : Qe, d = b ? void 0 : P(e);
  return ao(d || e, function(f, u) {
    d && (u = f, f = e[u]), Je(i, u, Ce(f, t, n, u, e, l));
  }), i;
}
function Ei(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Oi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Ai(e, t) {
  return t.length < 2 ? e : bn(e, qa(t, 0, -1));
}
function Ii(e, t) {
  return t = Ve(t, e), e = Ai(e, t), e == null || delete e[nt(Ei(t))];
}
function Pi(e) {
  return Ya(e) ? void 0 : e;
}
var ji = 1, Vi = 2, Ni = 4, Kt = Ua(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = nn(t, function(l) {
    return l = Ve(l, e), r || (r = l.length > 1), l;
  }), $e(e, Cn(e), n), r && (n = Ce(n, ji | Vi | Ni, Pi));
  for (var o = t.length; o--; )
    Ii(n, t[o]);
  return n;
});
function xi(e, t, n, r) {
  if (!Q(e))
    return e;
  t = Ve(t, e);
  for (var o = -1, l = t.length, i = l - 1, a = e; a != null && ++o < l; ) {
    var h = nt(t[o]), v = n;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return e;
    if (o != i) {
      var b = a[h];
      v = r ? r(b, h, a) : void 0, v === void 0 && (v = Q(b) ? b : an(t[o + 1]) ? [] : {});
    }
    Je(a, h, v), a = a[h];
  }
  return e;
}
function Fi(e, t, n) {
  return e == null ? e : xi(e, t, n);
}
const ki = (e) => e === void 0, Ee = (e) => typeof e == "boolean", Oe = (e) => typeof e == "number", zi = (e) => se(e) ? !Number.isNaN(Number(e)) : !1;
class In extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Bi(e, t) {
  throw new In(`[${e}] ${t}`);
}
function we(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = se(e) ? new In(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Li = "utils/dom/style";
function Pn(e, t = "px") {
  if (!e)
    return "";
  if (Oe(e) || zi(e))
    return `${e}${t}`;
  if (se(e))
    return e;
  we(Li, "binding value must be a string or number");
}
const jn = "__epPropKey", ut = (e) => e, Mi = (e) => qe(e) && !!e[jn], Vn = (e, t) => {
  if (!qe(e) || Mi(e))
    return e;
  const { values: n, required: r, default: o, type: l, validator: i } = e, h = {
    type: l,
    required: !!r,
    validator: n || i ? (v) => {
      let b = !1, g = [];
      if (n && (g = Array.from(n), vt(e, "default") && g.push(o), b || (b = g.includes(v))), i && (b || (b = i(v))), !b && g.length > 0) {
        const C = [...new Set(g)].map((S) => JSON.stringify(S)).join(", ");
        Rn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${C}], got value ${JSON.stringify(v)}.`);
      }
      return b;
    } : void 0,
    [jn]: !0
  };
  return vt(e, "default") && (h.default = o), h;
}, Nn = (e) => Oi(Object.entries(e).map(([t, n]) => [
  t,
  Vn(n, t)
])), Se = ut([
  String,
  Object,
  Function
]), xn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, De = "update:modelValue", Ge = "change", He = "input", Fn = ["", "default", "small", "large"], Ui = (e) => ["", ...Fn].includes(e), Ki = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: l = "API" }, i) => {
  R(() => s(i), (a) => {
    a && we(n, `[${l}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Be = "el", Ri = "is-", Z = (e, t, n, r, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), r && (l += `__${r}`), o && (l += `--${o}`), l;
}, Di = Symbol("namespaceContextKey"), kn = (e) => {
  const t = e || (q() ? G(Di, E(Be)) : E(Be));
  return N(() => s(t) || Be);
}, zn = (e, t) => {
  const n = kn(t);
  return {
    namespace: n,
    b: (d = "") => Z(n.value, e, d, "", ""),
    e: (d) => d ? Z(n.value, e, "", d, "") : "",
    m: (d) => d ? Z(n.value, e, "", "", d) : "",
    be: (d, f) => d && f ? Z(n.value, e, d, f, "") : "",
    em: (d, f) => d && f ? Z(n.value, e, "", d, f) : "",
    bm: (d, f) => d && f ? Z(n.value, e, d, "", f) : "",
    bem: (d, f, u) => d && f && u ? Z(n.value, e, d, f, u) : "",
    is: (d, ...f) => {
      const u = f.length >= 1 ? f[0] : !0;
      return d && u ? `${Ri}${d}` : "";
    },
    cssVar: (d) => {
      const f = {};
      for (const u in d)
        d[u] && (f[`--${n.value}-${u}`] = d[u]);
      return f;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const f = {};
      for (const u in d)
        d[u] && (f[`--${n.value}-${e}-${u}`] = d[u]);
      return f;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
}, Bn = (e) => {
  const t = q();
  return N(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Ye = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Gi = Symbol("elIdInjection"), Hi = () => q() ? G(Gi, Ye) : Ye, Yi = (e) => {
  const t = Hi();
  !Qt && t === Ye && we("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = kn();
  return N(() => s(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
Vn({
  type: String,
  values: Fn,
  required: !1
});
const qi = Symbol("size"), Wi = () => {
  const e = G(qi, {});
  return N(() => s(e.size) || "");
};
var Ln = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Ji = Nn({
  size: {
    type: ut([Number, String])
  },
  color: {
    type: String
  }
}), Zi = te({
  name: "ElIcon",
  inheritAttrs: !1
}), Xi = /* @__PURE__ */ te({
  ...Zi,
  props: Ji,
  setup(e) {
    const t = e, n = zn("icon"), r = N(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: ki(o) ? void 0 : Pn(o),
        "--color": l
      };
    });
    return (o, l) => (c(), _("i", F({
      class: s(n).b(),
      style: s(r)
    }, o.$attrs), [
      ye(o.$slots, "default")
    ], 16));
  }
});
var Qi = /* @__PURE__ */ Ln(Xi, [["__file", "icon.vue"]]);
const ie = xn(Qi), st = Symbol("formContextKey"), Mn = Symbol("formItemContextKey"), eu = (e, t = {}) => {
  const n = E(void 0), r = t.prop ? n : Bn("size"), o = t.global ? n : Wi(), l = t.form ? { size: void 0 } : G(st, void 0), i = t.formItem ? { size: void 0 } : G(Mn, void 0);
  return N(() => r.value || s(e) || (i == null ? void 0 : i.size) || (l == null ? void 0 : l.size) || o.value || "");
}, tu = (e) => {
  const t = Bn("disabled"), n = G(st, void 0);
  return N(() => t.value || s(e) || (n == null ? void 0 : n.disabled) || !1);
}, nu = () => {
  const e = G(st, void 0), t = G(Mn, void 0);
  return {
    form: e,
    formItem: t
  };
}, ru = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = E(!1)), r || (r = E(!1));
  const o = E();
  let l;
  const i = N(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Te(() => {
    l = R([Dn(e, "id"), n], ([a, h]) => {
      const v = a ?? (h ? void 0 : Yi().value);
      v !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !h && v && t.addInputId(v)), o.value = v);
    }, { immediate: !0 });
  }), Rt(() => {
    l && l(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: i,
    inputId: o
  };
}, ou = Nn({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    validator: Ui
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: {
    type: Boolean,
    default: !1
  },
  inactiveActionIcon: {
    type: Se
  },
  activeActionIcon: {
    type: Se
  },
  activeIcon: {
    type: Se
  },
  inactiveIcon: {
    type: Se
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  beforeChange: {
    type: ut(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  value: {
    type: [Boolean, String, Number],
    default: !1
  },
  label: {
    type: String,
    default: void 0
  }
}), au = {
  [De]: (e) => Ee(e) || se(e) || Oe(e),
  [Ge]: (e) => Ee(e) || se(e) || Oe(e),
  [He]: (e) => Ee(e) || se(e) || Oe(e)
}, lu = ["onClick"], iu = ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"], uu = ["aria-hidden"], su = ["aria-hidden"], cu = ["aria-hidden"], Ae = "ElSwitch", du = te({
  name: Ae
}), fu = /* @__PURE__ */ te({
  ...du,
  props: ou,
  emits: au,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = q(), { formItem: l } = nu(), i = eu(), a = zn("switch");
    ((p) => {
      p.forEach((O) => {
        Ki({
          from: O[0],
          replacement: O[1],
          scope: Ae,
          version: "2.3.0",
          ref: "https://element-plus.org/en-US/component/switch.html#attributes",
          type: "Attribute"
        }, N(() => {
          var z;
          return !!((z = o.vnode.props) != null && z[O[2]]);
        }));
      });
    })([
      ['"value"', '"model-value" or "v-model"', "value"],
      ['"active-color"', "CSS var `--el-switch-on-color`", "activeColor"],
      ['"inactive-color"', "CSS var `--el-switch-off-color`", "inactiveColor"],
      ['"border-color"', "CSS var `--el-switch-border-color`", "borderColor"]
    ]);
    const { inputId: v } = ru(r, {
      formItemContext: l
    }), b = tu(N(() => r.loading)), g = E(r.modelValue !== !1), C = E(), S = E(), P = N(() => [
      a.b(),
      a.m(i.value),
      a.is("disabled", b.value),
      a.is("checked", y.value)
    ]), d = N(() => [
      a.e("label"),
      a.em("label", "left"),
      a.is("active", !y.value)
    ]), f = N(() => [
      a.e("label"),
      a.em("label", "right"),
      a.is("active", y.value)
    ]), u = N(() => ({
      width: Pn(r.width)
    }));
    R(() => r.modelValue, () => {
      g.value = !0;
    }), R(() => r.value, () => {
      g.value = !1;
    });
    const w = N(() => g.value ? r.modelValue : r.value), y = N(() => w.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(w.value) || (n(De, r.inactiveValue), n(Ge, r.inactiveValue), n(He, r.inactiveValue)), R(y, (p) => {
      var O;
      C.value.checked = p, r.validateEvent && ((O = l == null ? void 0 : l.validate) == null || O.call(l, "change").catch((z) => we(z)));
    });
    const k = () => {
      const p = y.value ? r.inactiveValue : r.activeValue;
      n(De, p), n(Ge, p), n(He, p), Dt(() => {
        C.value.checked = y.value;
      });
    }, Ne = () => {
      if (b.value)
        return;
      const { beforeChange: p } = r;
      if (!p) {
        k();
        return;
      }
      const O = p();
      [
        gt(O),
        Ee(O)
      ].includes(!0) || Bi(Ae, "beforeChange must return type `Promise<boolean>` or `boolean`"), gt(O) ? O.then((J) => {
        J && k();
      }).catch((J) => {
        we(Ae, `some error occurred: ${J}`);
      }) : O && k();
    }, fe = N(() => a.cssVarBlock({
      ...r.activeColor ? { "on-color": r.activeColor } : null,
      ...r.inactiveColor ? { "off-color": r.inactiveColor } : null,
      ...r.borderColor ? { "border-color": r.borderColor } : null
    })), V = () => {
      var p, O;
      (O = (p = C.value) == null ? void 0 : p.focus) == null || O.call(p);
    };
    return Te(() => {
      C.value.checked = y.value;
    }), t({
      focus: V,
      checked: y
    }), (p, O) => (c(), _("div", {
      class: x(s(P)),
      style: dt(s(fe)),
      onClick: Gn(Ne, ["prevent"])
    }, [
      K("input", {
        id: s(v),
        ref_key: "input",
        ref: C,
        class: x(s(a).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": s(y),
        "aria-disabled": s(b),
        "aria-label": p.label,
        name: p.name,
        "true-value": p.activeValue,
        "false-value": p.inactiveValue,
        disabled: s(b),
        tabindex: p.tabindex,
        onChange: k,
        onKeydown: Hn(Ne, ["enter"])
      }, null, 42, iu),
      !p.inlinePrompt && (p.inactiveIcon || p.inactiveText) ? (c(), _("span", {
        key: 0,
        class: x(s(d))
      }, [
        p.inactiveIcon ? (c(), m(s(ie), { key: 0 }, {
          default: $(() => [
            (c(), m(pe(p.inactiveIcon)))
          ]),
          _: 1
        })) : T("v-if", !0),
        !p.inactiveIcon && p.inactiveText ? (c(), _("span", {
          key: 1,
          "aria-hidden": s(y)
        }, B(p.inactiveText), 9, uu)) : T("v-if", !0)
      ], 2)) : T("v-if", !0),
      K("span", {
        ref_key: "core",
        ref: S,
        class: x(s(a).e("core")),
        style: dt(s(u))
      }, [
        p.inlinePrompt ? (c(), _("div", {
          key: 0,
          class: x(s(a).e("inner"))
        }, [
          p.activeIcon || p.inactiveIcon ? (c(), m(s(ie), {
            key: 0,
            class: x(s(a).is("icon"))
          }, {
            default: $(() => [
              (c(), m(pe(s(y) ? p.activeIcon : p.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : p.activeText || p.inactiveText ? (c(), _("span", {
            key: 1,
            class: x(s(a).is("text")),
            "aria-hidden": !s(y)
          }, B(s(y) ? p.activeText : p.inactiveText), 11, su)) : T("v-if", !0)
        ], 2)) : T("v-if", !0),
        K("div", {
          class: x(s(a).e("action"))
        }, [
          p.loading ? (c(), m(s(ie), {
            key: 0,
            class: x(s(a).is("loading"))
          }, {
            default: $(() => [
              j(s(cr))
            ]),
            _: 1
          }, 8, ["class"])) : s(y) ? ye(p.$slots, "active-action", { key: 1 }, () => [
            p.activeActionIcon ? (c(), m(s(ie), { key: 0 }, {
              default: $(() => [
                (c(), m(pe(p.activeActionIcon)))
              ]),
              _: 1
            })) : T("v-if", !0)
          ]) : s(y) ? T("v-if", !0) : ye(p.$slots, "inactive-action", { key: 2 }, () => [
            p.inactiveActionIcon ? (c(), m(s(ie), { key: 0 }, {
              default: $(() => [
                (c(), m(pe(p.inactiveActionIcon)))
              ]),
              _: 1
            })) : T("v-if", !0)
          ])
        ], 2)
      ], 6),
      !p.inlinePrompt && (p.activeIcon || p.activeText) ? (c(), _("span", {
        key: 1,
        class: x(s(f))
      }, [
        p.activeIcon ? (c(), m(s(ie), { key: 0 }, {
          default: $(() => [
            (c(), m(pe(p.activeIcon)))
          ]),
          _: 1
        })) : T("v-if", !0),
        !p.activeIcon && p.activeText ? (c(), _("span", {
          key: 1,
          "aria-hidden": !s(y)
        }, B(p.activeText), 9, cu)) : T("v-if", !0)
      ], 2)) : T("v-if", !0)
    ], 14, lu));
  }
});
var pu = /* @__PURE__ */ Ln(fu, [["__file", "switch.vue"]]);
const vu = xn(pu), gu = { key: 0 }, hu = { key: 1 }, yu = { key: 2 }, ct = {
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
    const n = e, r = t, o = E(Et(n.row, n.col.prop));
    R(() => Et(n.row, n.col.prop), (h) => {
      o.value = h;
    });
    const l = () => {
      Fi(n.row, n.col.prop, o.value), n.col.change && n.col.change(n.row, o.value), r("update:row", n.row);
    }, i = (h, v) => v.find((g) => g.value === h) || {}, a = (h, v) => {
      const b = i(h, v);
      return (b == null ? void 0 : b.label) || h;
    };
    return (h, v) => {
      const b = vu;
      return c(), _(L, null, [
        e.col.scope ? T("", !0) : (c(), _("div", gu, B(e.row[e.col.prop]), 1)),
        e.col.scope === "number-col" ? (c(), _("div", hu, B(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : T("", !0),
        e.col.scope === "render" && e.col.render ? (c(), _("div", yu, B(e.col.render(e.row, e.col.prop)), 1)) : T("", !0),
        ["textarea", "input"].includes(e.col.scope) ? (c(), m(s(_e), F({
          key: 3,
          type: e.col.scope || "text"
        }, {
          ...Kt(e.col, ["label"])
        }, {
          modelValue: o.value,
          "onUpdate:modelValue": v[0] || (v[0] = (g) => o.value = g),
          onChange: l
        }), null, 16, ["type", "modelValue"])) : T("", !0),
        e.col.scope === "input-number" ? (c(), m(s(Zn), F({ key: 4 }, {
          ...Kt(e.col, ["label"])
        }, {
          modelValue: o.value,
          "onUpdate:modelValue": v[1] || (v[1] = (g) => o.value = g),
          onChange: l
        }), null, 16, ["modelValue"])) : T("", !0),
        e.col.scope === "select" ? (c(), m(s(Yt), F({ key: 5 }, {
          ...e.col
        }, {
          modelValue: o.value,
          "onUpdate:modelValue": v[2] || (v[2] = (g) => o.value = g),
          onChange: l
        }), {
          default: $(() => [
            (c(!0), _(L, null, D(e.col.options, (g) => (c(), m(s(qt), {
              key: g.value,
              label: g.label,
              value: g.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue"])) : T("", !0),
        e.col.scope === "tag" ? (c(), m(s(Xn), {
          key: 6,
          type: i(e.row[e.col.prop], e.col.options).type
        }, {
          default: $(() => [
            Y(B(a(e.row[e.col.prop], e.col.options)), 1)
          ]),
          _: 1
        }, 8, ["type"])) : T("", !0),
        e.col.scope === "img" ? (c(), m(s(Qn), {
          key: 7,
          src: o.value,
          fit: e.col.fit || "cover"
        }, null, 8, ["src", "fit"])) : T("", !0),
        ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (c(), m(s(Wt), F({ key: 8 }, {
          ...e.col
        }, {
          type: e.col.scope,
          modelValue: o.value,
          "onUpdate:modelValue": v[3] || (v[3] = (g) => o.value = g),
          onChange: l
        }), null, 16, ["type", "modelValue"])) : T("", !0),
        e.col.scope === "switch" ? (c(), m(b, F({
          key: 9,
          modelValue: o.value,
          "onUpdate:modelValue": v[4] || (v[4] = (g) => o.value = g),
          onChange: l
        }, {
          ...e.col
        }), null, 16, ["modelValue"])) : T("", !0),
        e.col.scope === "radio" ? (c(), m(s(er), {
          key: 10,
          modelValue: o.value,
          "onUpdate:modelValue": v[5] || (v[5] = (g) => o.value = g),
          onChange: l
        }, {
          default: $(() => [
            (c(!0), _(L, null, D(e.col.options, (g) => (c(), m(s(Jt), {
              label: g.value,
              key: g.label
            }, {
              default: $(() => [
                Y(B(g.label), 1)
              ]),
              _: 2
            }, 1032, ["label"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : T("", !0)
      ], 64);
    };
  }
}, Un = {
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
    const n = e, { proxy: r } = q(), o = E(null), l = E(null), i = E(null), a = () => {
      const S = document.querySelector(".table-container .c-table");
      if (S) {
        const { top: P } = S.getBoundingClientRect();
        l.value = window.innerHeight - P - 50;
      }
    }, h = () => {
      i.value.clearSelection();
    }, v = () => {
      i.value.setCurrentRow();
    }, b = (S) => {
      o.value = S ? S.id : null, n.radio && n.radio(S);
    }, g = (S, P, d) => {
      r.$emit(S.event, P, d), r.$emit("btnClick", {
        btn: S,
        row: P,
        index: d
      });
    }, C = (S, P, d) => "if" in S ? typeof S.if == "function" ? S.if(P, d) : P[S.if] : S.render ? !!S.render(P, d) : !!S.label;
    return t({
      clearSelection: h,
      clearRadio: v
    }), Te(() => {
      n.onSize && (window.addEventListener("resize", a), Dt(() => {
        a();
      }));
    }), Rt(() => {
      n.onSize && window.removeEventListener("resize", a);
    }), (S, P) => {
      const d = Yn("v-table", !0);
      return c(), _("div", {
        class: x(["v-table", { pd: e.onAdd }])
      }, [
        j(s(tr), F({
          ref_key: "tableRef",
          ref: i,
          border: ""
        }, {
          ...e.tableProps
        }, {
          data: e.data,
          onSelectionChange: e.selection,
          "highlight-current-row": !!e.radio,
          onCurrentChange: b
        }), {
          default: $(() => [
            e.selection ? (c(), m(s(xe), {
              key: 0,
              type: "selection",
              width: "40"
            })) : T("", !0),
            e.radio ? (c(), m(s(xe), {
              key: 1,
              fixed: "left",
              width: "60"
            }, {
              header: $(() => [
                K("div", {
                  class: "radio-header",
                  onClick: v
                }, "取消")
              ]),
              default: $(({ row: f }) => [
                j(s(Jt), {
                  modelValue: o.value,
                  "onUpdate:modelValue": P[0] || (P[0] = (u) => o.value = u),
                  label: f.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : T("", !0),
            (c(!0), _(L, null, D(e.columns, (f) => (c(), m(s(xe), F({
              key: f.prop,
              width: f.width
            }, {
              ...f
            }), {
              default: $(({ row: u, $index: w }) => [
                ["btn", "table"].includes(f.scope) ? T("", !0) : (c(), m(ct, {
                  key: 0,
                  row: u,
                  col: f
                }, null, 8, ["row", "col"])),
                f.scope === "table" ? (c(), m(d, {
                  key: 1,
                  data: u[f.prop],
                  columns: f.options
                }, null, 8, ["data", "columns"])) : T("", !0),
                f.scope === "btn" ? (c(!0), _(L, { key: 2 }, D(f.options || [], (y) => (c(), _(L, {
                  key: y.event
                }, [
                  C(y, u, w) ? (c(), m(s(ge), F({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: y.type || "primary",
                    onClick: (k) => g(y, u, w)
                  }, {
                    ...y
                  }), {
                    default: $(() => [
                      Y(B(y.label || (y.render ? y.render(u, w) : "")), 1)
                    ]),
                    _: 2
                  }, 1040, ["type", "onClick"])) : T("", !0)
                ], 64))), 128)) : T("", !0)
              ]),
              _: 2
            }, 1040, ["width"]))), 128))
          ]),
          _: 1
        }, 16, ["data", "onSelectionChange", "highlight-current-row"]),
        e.onAdd ? (c(), _("div", {
          key: 0,
          class: "add-btn",
          onClick: P[1] || (P[1] = (...f) => e.onAdd && e.onAdd(...f))
        })) : T("", !0)
      ], 2);
    };
  }
}, bu = { class: "v-page-operator" }, mu = { class: "v-page-table" }, wu = {
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
    const { GET_LIST: n, GET_TOTAL: r, PAGE_NUM_KEY: o, PAGE_SIZE_KEY: l } = ur(), { proxy: i } = q(), a = e, h = E([]), v = E({}), b = E(0), g = E({}), C = E({}), S = E(null), P = () => {
      var V;
      (V = S.value) == null || V.clearRadio();
    }, d = () => {
      var V;
      (V = S.value) == null || V.clearSelection();
    }, f = ({ btn: V, row: p, index: O }) => {
      i.$emit(V.event, p, O);
    }, u = async (V = {}) => {
      if (!a.getList)
        return;
      const p = nr.service({
        target: ".v-page-table"
      });
      try {
        v.value = {
          [o]: g.value.pageNum || 1,
          [l]: g.value.pageSize || 10,
          ...V
        };
        const O = await a.getList(v.value);
        let z = n(O);
        a.formatList && (z = a.formatList(z)), h.value = z.map((J, Kn) => ({
          ...J,
          index: Kn + 1 + (v.value[o] - 1) * v.value[l]
        })), b.value = r(O);
      } finally {
        p.close();
      }
    }, w = (V) => {
      g.value = V, d(), P(), u({
        ...V,
        ...C.value
      });
    }, y = async () => {
      d(), P(), await u({
        ...g.value,
        ...C.value
      });
    }, k = (V) => {
      g.value.pageNum = 1, C.value = V, y(), i.$emit("search", V);
    };
    t({
      refreshList: y,
      clearSelection: d,
      clearRadio: P,
      search: () => {
        fe.value.search();
      }
    });
    const fe = E();
    return Te(() => {
      a.init && (a.showFilter ? fe.value.search() : u());
    }), (V, p) => (c(), _("div", {
      class: x(["v-page", { pd: a.table && a.table.onAdd }])
    }, [
      e.showFilter ? (c(), m(Zt, {
        key: 0,
        ref_key: "filterRef",
        ref: fe,
        filter: e.filter,
        "label-width": e.filterLabelWidth,
        btns: e.filterBtns,
        col: e.filterCol,
        onSearch: k,
        onReset: p[0] || (p[0] = () => k({}))
      }, null, 8, ["filter", "label-width", "btns", "col"])) : T("", !0),
      K("div", bu, [
        (c(!0), _(L, null, D(e.btns, (O, z) => (c(), m(s(ge), {
          key: z,
          type: O.type || "primary",
          onClick: (J) => O.click && O.click(J)
        }, {
          default: $(() => [
            Y(B(O.label), 1)
          ]),
          _: 2
        }, 1032, ["type", "onClick"]))), 128)),
        ye(V.$slots, "btn")
      ]),
      K("div", mu, [
        j(Un, F({
          ref_key: "tableRef",
          ref: S,
          data: h.value,
          columns: e.columns,
          selection: e.selection,
          radio: e.radio
        }, {
          ...a.table
        }, { onBtnClick: f }), null, 16, ["data", "columns", "selection", "radio"])
      ]),
      e.showPagination ? (c(), m(Xt, {
        key: 1,
        page: g.value.pageNum,
        total: b.value,
        onPagination: w
      }, null, 8, ["page", "total"])) : T("", !0)
    ], 2));
  }
}, Tu = {
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
    const r = e, o = n, l = E({ ...r.value }), i = E();
    R(() => r.value, () => {
      a();
    }, { deep: !0 });
    const a = () => {
      l.value = {
        ...r.value
      };
    }, h = (b) => {
      o("update:value", b);
    };
    return t({
      validate: () => new Promise((b, g) => {
        i.value.validate((C) => {
          C ? b(l.value) : g();
        });
      }),
      reset: a,
      form: l
    }), (b, g) => (c(), m(s(Gt), F({
      class: "c-form",
      ref_key: "formRef",
      ref: i,
      model: l.value,
      rules: e.rules,
      "label-width": "130px"
    }, b.$attrs), {
      default: $(() => [
        j(s(Le), { gutter: 20 }, {
          default: $(() => [
            (c(!0), _(L, null, D(e.list, (C) => (c(), m(s(ue), {
              span: C.colSpan || 24 / e.col,
              key: C.prop
            }, {
              default: $(() => [
                j(s(Ht), {
                  label: C.label,
                  prop: C.prop
                }, {
                  default: $(() => [
                    j(ct, {
                      row: l.value,
                      col: C,
                      "onUpdate:row": h
                    }, null, 8, ["row", "col"]),
                    ye(b.$slots, C.prop)
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
}, _u = {
  install(e, t = {}) {
    const { config: n } = t;
    n && ir(n, e), e.component("VPage", wu), e.component("VFilter", Zt), e.component("VTable", Un), e.component("VElement", ct), e.component("VPagination", Xt), e.component("VForm", Tu);
  }
};
export {
  ct as VElement,
  Zt as VFilter,
  Tu as VForm,
  Xt as VPagination,
  Un as VTable,
  _u as default,
  ir as setConfig
};
