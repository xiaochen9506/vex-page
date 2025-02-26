import { inject as ge, defineComponent as Re, openBlock as f, createElementBlock as P, createElementVNode as ve, warn as Dn, ref as S, computed as I, unref as u, isRef as Ke, getCurrentInstance as U, provide as Bn, reactive as Un, h as ue, Transition as Rn, withCtx as w, withDirectives as Kt, createVNode as E, vShow as Kn, createApp as Gn, toRefs as Hn, nextTick as Ge, watch as ye, onMounted as He, Fragment as F, renderList as k, createBlock as $, createCommentVNode as O, mergeProps as N, createTextVNode as B, toDisplayString as L, normalizeClass as Ye, onUnmounted as Yn, resolveComponent as qn, renderSlot as xe, normalizeProps as Wn, guardReactiveProps as Zn } from "vue";
import { ElCard as Jn, ElForm as Gt, ElRow as ke, ElCol as re, ElFormItem as Ht, ElInput as we, ElSelect as Yt, ElOption as qt, ElDatePicker as Wt, ElCascader as Xn, ElButton as ae, ElPagination as Qn, ElInputNumber as er, ElTag as tr, ElImage as nr, ElSwitch as rr, ElRadioGroup as ar, ElRadio as Zt, ElTable as or, ElTableColumn as Ne, ElDialog as lr, ElDescriptions as sr, ElDescriptionsItem as ur, ElMessage as it } from "element-plus";
let ir = "pageSize", cr = "pageNum", dr = (e) => e.data, fr = (e) => e.total;
function pr(e, t) {
  t && t.provide("vxe-page", e);
}
function gr() {
  return ge("vxe-page", {
    PAGE_SIZE_KEY: ir,
    PAGE_NUM_KEY: cr,
    GET_LIST: dr,
    GET_TOTAL: fr
  });
}
var ct;
const qe = typeof window < "u";
qe && ((ct = window == null ? void 0 : window.navigator) != null && ct.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const vr = Object.prototype.hasOwnProperty, dt = (e, t) => vr.call(e, t), We = (e) => typeof e == "string", Oe = (e) => e !== null && typeof e == "object", Jt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, yr = /-(\w)/g, hr = Jt((e) => e.replace(yr, (t, n) => n ? n.toUpperCase() : "")), mr = /\B([A-Z])/g, br = Jt(
  (e) => e.replace(mr, "-$1").toLowerCase()
);
var Xt = typeof global == "object" && global && global.Object === Object && global, wr = typeof self == "object" && self && self.Object === Object && self, z = Xt || wr || Function("return this")(), M = z.Symbol, Qt = Object.prototype, Tr = Qt.hasOwnProperty, Cr = Qt.toString, ie = M ? M.toStringTag : void 0;
function $r(e) {
  var t = Tr.call(e, ie), n = e[ie];
  try {
    e[ie] = void 0;
    var r = !0;
  } catch {
  }
  var a = Cr.call(e);
  return r && (t ? e[ie] = n : delete e[ie]), a;
}
var xr = Object.prototype, Sr = xr.toString;
function _r(e) {
  return Sr.call(e);
}
var Ar = "[object Null]", Or = "[object Undefined]", ft = M ? M.toStringTag : void 0;
function J(e) {
  return e == null ? e === void 0 ? Or : Ar : ft && ft in Object(e) ? $r(e) : _r(e);
}
function X(e) {
  return e != null && typeof e == "object";
}
var Er = "[object Symbol]";
function Ze(e) {
  return typeof e == "symbol" || X(e) && J(e) == Er;
}
function en(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Q = Array.isArray, Pr = 1 / 0, pt = M ? M.prototype : void 0, gt = pt ? pt.toString : void 0;
function tn(e) {
  if (typeof e == "string")
    return e;
  if (Q(e))
    return en(e, tn) + "";
  if (Ze(e))
    return gt ? gt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Pr ? "-0" : t;
}
function W(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function jr(e) {
  return e;
}
var Ir = "[object AsyncFunction]", Vr = "[object Function]", Nr = "[object GeneratorFunction]", Fr = "[object Proxy]";
function nn(e) {
  if (!W(e))
    return !1;
  var t = J(e);
  return t == Vr || t == Nr || t == Ir || t == Fr;
}
var Fe = z["__core-js_shared__"], vt = function() {
  var e = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Lr(e) {
  return !!vt && vt in e;
}
var kr = Function.prototype, Mr = kr.toString;
function ee(e) {
  if (e != null) {
    try {
      return Mr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zr = /[\\^$.*+?()[\]{}|]/g, Dr = /^\[object .+?Constructor\]$/, Br = Function.prototype, Ur = Object.prototype, Rr = Br.toString, Kr = Ur.hasOwnProperty, Gr = RegExp(
  "^" + Rr.call(Kr).replace(zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hr(e) {
  if (!W(e) || Lr(e))
    return !1;
  var t = nn(e) ? Gr : Dr;
  return t.test(ee(e));
}
function Yr(e, t) {
  return e == null ? void 0 : e[t];
}
function te(e, t) {
  var n = Yr(e, t);
  return Hr(n) ? n : void 0;
}
var Me = te(z, "WeakMap"), yt = Object.create, qr = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!W(t))
      return {};
    if (yt)
      return yt(t);
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
function Zr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Jr = 800, Xr = 16, Qr = Date.now;
function ea(e) {
  var t = 0, n = 0;
  return function() {
    var r = Qr(), a = Xr - (r - n);
    if (n = r, a > 0) {
      if (++t >= Jr)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ta(e) {
  return function() {
    return e;
  };
}
var Se = function() {
  try {
    var e = te(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), na = Se ? function(e, t) {
  return Se(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ta(t),
    writable: !0
  });
} : jr;
const ra = na;
var aa = ea(ra);
function oa(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var la = 9007199254740991, sa = /^(?:0|[1-9]\d*)$/;
function rn(e, t) {
  var n = typeof e;
  return t = t ?? la, !!t && (n == "number" || n != "symbol" && sa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function an(e, t, n) {
  t == "__proto__" && Se ? Se(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function on(e, t) {
  return e === t || e !== e && t !== t;
}
var ua = Object.prototype, ia = ua.hasOwnProperty;
function Je(e, t, n) {
  var r = e[t];
  (!(ia.call(e, t) && on(r, n)) || n === void 0 && !(t in e)) && an(e, t, n);
}
function he(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var l = t[o], p = r ? r(n[l], e[l], l, n, e) : void 0;
    p === void 0 && (p = e[l]), a ? an(n, l, p) : Je(n, l, p);
  }
  return n;
}
var ht = Math.max;
function ca(e, t, n) {
  return t = ht(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = ht(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(s), Wr(e, this, l);
  };
}
var da = 9007199254740991;
function ln(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= da;
}
function sn(e) {
  return e != null && ln(e.length) && !nn(e);
}
var fa = Object.prototype;
function Xe(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || fa;
  return e === n;
}
function pa(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ga = "[object Arguments]";
function mt(e) {
  return X(e) && J(e) == ga;
}
var un = Object.prototype, va = un.hasOwnProperty, ya = un.propertyIsEnumerable, cn = mt(/* @__PURE__ */ function() {
  return arguments;
}()) ? mt : function(e) {
  return X(e) && va.call(e, "callee") && !ya.call(e, "callee");
};
function ha() {
  return !1;
}
var dn = typeof exports == "object" && exports && !exports.nodeType && exports, bt = dn && typeof module == "object" && module && !module.nodeType && module, ma = bt && bt.exports === dn, wt = ma ? z.Buffer : void 0, ba = wt ? wt.isBuffer : void 0, fn = ba || ha, wa = "[object Arguments]", Ta = "[object Array]", Ca = "[object Boolean]", $a = "[object Date]", xa = "[object Error]", Sa = "[object Function]", _a = "[object Map]", Aa = "[object Number]", Oa = "[object Object]", Ea = "[object RegExp]", Pa = "[object Set]", ja = "[object String]", Ia = "[object WeakMap]", Va = "[object ArrayBuffer]", Na = "[object DataView]", Fa = "[object Float32Array]", La = "[object Float64Array]", ka = "[object Int8Array]", Ma = "[object Int16Array]", za = "[object Int32Array]", Da = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", Ua = "[object Uint16Array]", Ra = "[object Uint32Array]", A = {};
A[Fa] = A[La] = A[ka] = A[Ma] = A[za] = A[Da] = A[Ba] = A[Ua] = A[Ra] = !0;
A[wa] = A[Ta] = A[Va] = A[Ca] = A[Na] = A[$a] = A[xa] = A[Sa] = A[_a] = A[Aa] = A[Oa] = A[Ea] = A[Pa] = A[ja] = A[Ia] = !1;
function Ka(e) {
  return X(e) && ln(e.length) && !!A[J(e)];
}
function Qe(e) {
  return function(t) {
    return e(t);
  };
}
var pn = typeof exports == "object" && exports && !exports.nodeType && exports, de = pn && typeof module == "object" && module && !module.nodeType && module, Ga = de && de.exports === pn, Le = Ga && Xt.process, oe = function() {
  try {
    var e = de && de.require && de.require("util").types;
    return e || Le && Le.binding && Le.binding("util");
  } catch {
  }
}(), Tt = oe && oe.isTypedArray, Ha = Tt ? Qe(Tt) : Ka, Ya = Object.prototype, qa = Ya.hasOwnProperty;
function gn(e, t) {
  var n = Q(e), r = !n && cn(e), a = !n && !r && fn(e), o = !n && !r && !a && Ha(e), s = n || r || a || o, l = s ? pa(e.length, String) : [], p = l.length;
  for (var d in e)
    (t || qa.call(e, d)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    rn(d, p))) && l.push(d);
  return l;
}
function vn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Wa = vn(Object.keys, Object), Za = Object.prototype, Ja = Za.hasOwnProperty;
function Xa(e) {
  if (!Xe(e))
    return Wa(e);
  var t = [];
  for (var n in Object(e))
    Ja.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function et(e) {
  return sn(e) ? gn(e) : Xa(e);
}
function Qa(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var eo = Object.prototype, to = eo.hasOwnProperty;
function no(e) {
  if (!W(e))
    return Qa(e);
  var t = Xe(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !to.call(e, r)) || n.push(r);
  return n;
}
function tt(e) {
  return sn(e) ? gn(e, !0) : no(e);
}
var ro = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ao = /^\w*$/;
function oo(e, t) {
  if (Q(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ze(e) ? !0 : ao.test(e) || !ro.test(e) || t != null && e in Object(t);
}
var fe = te(Object, "create");
function lo() {
  this.__data__ = fe ? fe(null) : {}, this.size = 0;
}
function so(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var uo = "__lodash_hash_undefined__", io = Object.prototype, co = io.hasOwnProperty;
function fo(e) {
  var t = this.__data__;
  if (fe) {
    var n = t[e];
    return n === uo ? void 0 : n;
  }
  return co.call(t, e) ? t[e] : void 0;
}
var po = Object.prototype, go = po.hasOwnProperty;
function vo(e) {
  var t = this.__data__;
  return fe ? t[e] !== void 0 : go.call(t, e);
}
var yo = "__lodash_hash_undefined__";
function ho(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = fe && t === void 0 ? yo : t, this;
}
function Z(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Z.prototype.clear = lo;
Z.prototype.delete = so;
Z.prototype.get = fo;
Z.prototype.has = vo;
Z.prototype.set = ho;
function mo() {
  this.__data__ = [], this.size = 0;
}
function Ee(e, t) {
  for (var n = e.length; n--; )
    if (on(e[n][0], t))
      return n;
  return -1;
}
var bo = Array.prototype, wo = bo.splice;
function To(e) {
  var t = this.__data__, n = Ee(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : wo.call(t, n, 1), --this.size, !0;
}
function Co(e) {
  var t = this.__data__, n = Ee(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function $o(e) {
  return Ee(this.__data__, e) > -1;
}
function xo(e, t) {
  var n = this.__data__, r = Ee(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function R(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
R.prototype.clear = mo;
R.prototype.delete = To;
R.prototype.get = Co;
R.prototype.has = $o;
R.prototype.set = xo;
var pe = te(z, "Map");
function So() {
  this.size = 0, this.__data__ = {
    hash: new Z(),
    map: new (pe || R)(),
    string: new Z()
  };
}
function _o(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Pe(e, t) {
  var n = e.__data__;
  return _o(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ao(e) {
  var t = Pe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Oo(e) {
  return Pe(this, e).get(e);
}
function Eo(e) {
  return Pe(this, e).has(e);
}
function Po(e, t) {
  var n = Pe(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function K(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
K.prototype.clear = So;
K.prototype.delete = Ao;
K.prototype.get = Oo;
K.prototype.has = Eo;
K.prototype.set = Po;
var jo = "Expected a function";
function nt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(jo);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, r);
    return n.cache = o.set(a, s) || o, s;
  };
  return n.cache = new (nt.Cache || K)(), n;
}
nt.Cache = K;
var Io = 500;
function Vo(e) {
  var t = nt(e, function(r) {
    return n.size === Io && n.clear(), r;
  }), n = t.cache;
  return t;
}
var No = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fo = /\\(\\)?/g, Lo = Vo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(No, function(n, r, a, o) {
    t.push(a ? o.replace(Fo, "$1") : r || n);
  }), t;
});
function ko(e) {
  return e == null ? "" : tn(e);
}
function je(e, t) {
  return Q(e) ? e : oo(e, t) ? [e] : Lo(ko(e));
}
var Mo = 1 / 0;
function rt(e) {
  if (typeof e == "string" || Ze(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Mo ? "-0" : t;
}
function yn(e, t) {
  t = je(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[rt(t[n++])];
  return n && n == r ? e : void 0;
}
function ze(e, t, n) {
  var r = e == null ? void 0 : yn(e, t);
  return r === void 0 ? n : r;
}
function at(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var Ct = M ? M.isConcatSpreadable : void 0;
function zo(e) {
  return Q(e) || cn(e) || !!(Ct && e && e[Ct]);
}
function hn(e, t, n, r, a) {
  var o = -1, s = e.length;
  for (n || (n = zo), a || (a = []); ++o < s; ) {
    var l = e[o];
    t > 0 && n(l) ? t > 1 ? hn(l, t - 1, n, r, a) : at(a, l) : r || (a[a.length] = l);
  }
  return a;
}
function Do(e) {
  var t = e == null ? 0 : e.length;
  return t ? hn(e, 1) : [];
}
function Bo(e) {
  return aa(ca(e, void 0, Do), e + "");
}
var ot = vn(Object.getPrototypeOf, Object), Uo = "[object Object]", Ro = Function.prototype, Ko = Object.prototype, mn = Ro.toString, Go = Ko.hasOwnProperty, Ho = mn.call(Object);
function Yo(e) {
  if (!X(e) || J(e) != Uo)
    return !1;
  var t = ot(e);
  if (t === null)
    return !0;
  var n = Go.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && mn.call(n) == Ho;
}
function qo(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = e[r + t];
  return o;
}
function Wo() {
  this.__data__ = new R(), this.size = 0;
}
function Zo(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Jo(e) {
  return this.__data__.get(e);
}
function Xo(e) {
  return this.__data__.has(e);
}
var Qo = 200;
function el(e, t) {
  var n = this.__data__;
  if (n instanceof R) {
    var r = n.__data__;
    if (!pe || r.length < Qo - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new K(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function le(e) {
  var t = this.__data__ = new R(e);
  this.size = t.size;
}
le.prototype.clear = Wo;
le.prototype.delete = Zo;
le.prototype.get = Jo;
le.prototype.has = Xo;
le.prototype.set = el;
function tl(e, t) {
  return e && he(t, et(t), e);
}
function nl(e, t) {
  return e && he(t, tt(t), e);
}
var bn = typeof exports == "object" && exports && !exports.nodeType && exports, $t = bn && typeof module == "object" && module && !module.nodeType && module, rl = $t && $t.exports === bn, xt = rl ? z.Buffer : void 0, St = xt ? xt.allocUnsafe : void 0;
function al(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = St ? St(n) : new e.constructor(n);
  return e.copy(r), r;
}
function ol(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[a++] = s);
  }
  return o;
}
function wn() {
  return [];
}
var ll = Object.prototype, sl = ll.propertyIsEnumerable, _t = Object.getOwnPropertySymbols, lt = _t ? function(e) {
  return e == null ? [] : (e = Object(e), ol(_t(e), function(t) {
    return sl.call(e, t);
  }));
} : wn;
function ul(e, t) {
  return he(e, lt(e), t);
}
var il = Object.getOwnPropertySymbols, cl = il ? function(e) {
  for (var t = []; e; )
    at(t, lt(e)), e = ot(e);
  return t;
} : wn;
const Tn = cl;
function dl(e, t) {
  return he(e, Tn(e), t);
}
function Cn(e, t, n) {
  var r = t(e);
  return Q(e) ? r : at(r, n(e));
}
function fl(e) {
  return Cn(e, et, lt);
}
function $n(e) {
  return Cn(e, tt, Tn);
}
var De = te(z, "DataView"), Be = te(z, "Promise"), Ue = te(z, "Set"), At = "[object Map]", pl = "[object Object]", Ot = "[object Promise]", Et = "[object Set]", Pt = "[object WeakMap]", jt = "[object DataView]", gl = ee(De), vl = ee(pe), yl = ee(Be), hl = ee(Ue), ml = ee(Me), q = J;
(De && q(new De(new ArrayBuffer(1))) != jt || pe && q(new pe()) != At || Be && q(Be.resolve()) != Ot || Ue && q(new Ue()) != Et || Me && q(new Me()) != Pt) && (q = function(e) {
  var t = J(e), n = t == pl ? e.constructor : void 0, r = n ? ee(n) : "";
  if (r)
    switch (r) {
      case gl:
        return jt;
      case vl:
        return At;
      case yl:
        return Ot;
      case hl:
        return Et;
      case ml:
        return Pt;
    }
  return t;
});
const st = q;
var bl = Object.prototype, wl = bl.hasOwnProperty;
function Tl(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && wl.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var It = z.Uint8Array;
function ut(e) {
  var t = new e.constructor(e.byteLength);
  return new It(t).set(new It(e)), t;
}
function Cl(e, t) {
  var n = t ? ut(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var $l = /\w*$/;
function xl(e) {
  var t = new e.constructor(e.source, $l.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Vt = M ? M.prototype : void 0, Nt = Vt ? Vt.valueOf : void 0;
function Sl(e) {
  return Nt ? Object(Nt.call(e)) : {};
}
function _l(e, t) {
  var n = t ? ut(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Al = "[object Boolean]", Ol = "[object Date]", El = "[object Map]", Pl = "[object Number]", jl = "[object RegExp]", Il = "[object Set]", Vl = "[object String]", Nl = "[object Symbol]", Fl = "[object ArrayBuffer]", Ll = "[object DataView]", kl = "[object Float32Array]", Ml = "[object Float64Array]", zl = "[object Int8Array]", Dl = "[object Int16Array]", Bl = "[object Int32Array]", Ul = "[object Uint8Array]", Rl = "[object Uint8ClampedArray]", Kl = "[object Uint16Array]", Gl = "[object Uint32Array]";
function Hl(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Fl:
      return ut(e);
    case Al:
    case Ol:
      return new r(+e);
    case Ll:
      return Cl(e, n);
    case kl:
    case Ml:
    case zl:
    case Dl:
    case Bl:
    case Ul:
    case Rl:
    case Kl:
    case Gl:
      return _l(e, n);
    case El:
      return new r();
    case Pl:
    case Vl:
      return new r(e);
    case jl:
      return xl(e);
    case Il:
      return new r();
    case Nl:
      return Sl(e);
  }
}
function Yl(e) {
  return typeof e.constructor == "function" && !Xe(e) ? qr(ot(e)) : {};
}
var ql = "[object Map]";
function Wl(e) {
  return X(e) && st(e) == ql;
}
var Ft = oe && oe.isMap, Zl = Ft ? Qe(Ft) : Wl, Jl = "[object Set]";
function Xl(e) {
  return X(e) && st(e) == Jl;
}
var Lt = oe && oe.isSet, Ql = Lt ? Qe(Lt) : Xl, es = 1, ts = 2, ns = 4, xn = "[object Arguments]", rs = "[object Array]", as = "[object Boolean]", os = "[object Date]", ls = "[object Error]", Sn = "[object Function]", ss = "[object GeneratorFunction]", us = "[object Map]", is = "[object Number]", _n = "[object Object]", cs = "[object RegExp]", ds = "[object Set]", fs = "[object String]", ps = "[object Symbol]", gs = "[object WeakMap]", vs = "[object ArrayBuffer]", ys = "[object DataView]", hs = "[object Float32Array]", ms = "[object Float64Array]", bs = "[object Int8Array]", ws = "[object Int16Array]", Ts = "[object Int32Array]", Cs = "[object Uint8Array]", $s = "[object Uint8ClampedArray]", xs = "[object Uint16Array]", Ss = "[object Uint32Array]", _ = {};
_[xn] = _[rs] = _[vs] = _[ys] = _[as] = _[os] = _[hs] = _[ms] = _[bs] = _[ws] = _[Ts] = _[us] = _[is] = _[_n] = _[cs] = _[ds] = _[fs] = _[ps] = _[Cs] = _[$s] = _[xs] = _[Ss] = !0;
_[ls] = _[Sn] = _[gs] = !1;
function Te(e, t, n, r, a, o) {
  var s, l = t & es, p = t & ts, d = t & ns;
  if (n && (s = a ? n(e, r, a, o) : n(e)), s !== void 0)
    return s;
  if (!W(e))
    return e;
  var c = Q(e);
  if (c) {
    if (s = Tl(e), !l)
      return Zr(e, s);
  } else {
    var b = st(e), h = b == Sn || b == ss;
    if (fn(e))
      return al(e, l);
    if (b == _n || b == xn || h && !a) {
      if (s = p || h ? {} : Yl(e), !l)
        return p ? dl(e, nl(s, e)) : ul(e, tl(s, e));
    } else {
      if (!_[b])
        return a ? e : {};
      s = Hl(e, b, l);
    }
  }
  o || (o = new le());
  var m = o.get(e);
  if (m)
    return m;
  o.set(e, s), Ql(e) ? e.forEach(function(y) {
    s.add(Te(y, t, n, y, e, o));
  }) : Zl(e) && e.forEach(function(y, v) {
    s.set(v, Te(y, t, n, v, e, o));
  });
  var T = d ? p ? $n : fl : p ? tt : et, g = c ? void 0 : T(e);
  return oa(g || e, function(y, v) {
    g && (v = y, y = e[v]), Je(s, v, Te(y, t, n, v, e, o));
  }), s;
}
function _s(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function As(e, t) {
  return t.length < 2 ? e : yn(e, qo(t, 0, -1));
}
function Os(e, t) {
  return t = je(t, e), e = As(e, t), e == null || delete e[rt(_s(t))];
}
function Es(e) {
  return Yo(e) ? void 0 : e;
}
var Ps = 1, js = 2, Is = 4, kt = Bo(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = en(t, function(o) {
    return o = je(o, e), r || (r = o.length > 1), o;
  }), he(e, $n(e), n), r && (n = Te(n, Ps | js | Is, Es));
  for (var a = t.length; a--; )
    Os(n, t[a]);
  return n;
});
function Vs(e, t, n, r) {
  if (!W(e))
    return e;
  t = je(t, e);
  for (var a = -1, o = t.length, s = o - 1, l = e; l != null && ++a < o; ) {
    var p = rt(t[a]), d = n;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return e;
    if (a != s) {
      var c = l[p];
      d = r ? r(c, p, l) : void 0, d === void 0 && (d = W(c) ? c : rn(t[a + 1]) ? [] : {});
    }
    Je(l, p, d), l = l[p];
  }
  return e;
}
function Ns(e, t, n) {
  return e == null ? e : Vs(e, t, n);
}
const Fs = (e) => typeof e == "number", Mt = (e) => Object.keys(e);
class Ls extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ks(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = We(e) ? new Ls(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const An = (e = "") => e.split(" ").filter((t) => !!t.trim()), zt = (e, t) => {
  !e || !t.trim() || e.classList.add(...An(t));
}, _e = (e, t) => {
  !e || !t.trim() || e.classList.remove(...An(t));
}, ce = (e, t) => {
  var n;
  if (!qe || !e || !t)
    return "";
  let r = hr(t);
  r === "float" && (r = "cssFloat");
  try {
    const a = e.style[r];
    if (a)
      return a;
    const o = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return o ? o[r] : "";
  } catch {
    return e.style[r];
  }
};
/*! Element Plus Icons Vue v2.3.1 */
var Ms = /* @__PURE__ */ Re({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, n) => (f(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ve("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), zs = Ms, Ds = /* @__PURE__ */ Re({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, n) => (f(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ve("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), Bs = Ds;
const On = "__epPropKey", Us = (e) => Oe(e) && !!e[On], Rs = (e, t) => {
  if (!Oe(e) || Us(e))
    return e;
  const { values: n, required: r, default: a, type: o, validator: s } = e, p = {
    type: o,
    required: !!r,
    validator: n || s ? (d) => {
      let c = !1, b = [];
      if (n && (b = Array.from(n), dt(e, "default") && b.push(a), c || (c = b.includes(d))), s && (c || (c = s(d))), !c && b.length > 0) {
        const h = [...new Set(b)].map((m) => JSON.stringify(m)).join(", ");
        Dn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(d)}.`);
      }
      return c;
    } : void 0,
    [On]: !0
  };
  return dt(e, "default") && (p.default = a), p;
}, Ks = ["", "default", "small", "large"];
var Gs = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const Hs = (e) => (t, n) => Ys(t, n, u(e)), Ys = (e, t, n) => ze(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var o;
  return `${(o = t == null ? void 0 : t[a]) != null ? o : `{${a}}`}`;
}), qs = (e) => {
  const t = I(() => u(e).name), n = Ke(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Hs(e)
  };
}, En = Symbol("localeContextKey"), Ws = (e) => {
  const t = e || ge(En, S());
  return qs(I(() => t.value || Gs));
}, Ce = "el", Zs = "is-", Y = (e, t, n, r, a) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), a && (o += `--${a}`), o;
}, Pn = Symbol("namespaceContextKey"), Js = (e) => {
  const t = e || (U() ? ge(Pn, S(Ce)) : S(Ce));
  return I(() => u(t) || Ce);
}, Xs = (e, t) => {
  const n = Js(t);
  return {
    namespace: n,
    b: (g = "") => Y(n.value, e, g, "", ""),
    e: (g) => g ? Y(n.value, e, "", g, "") : "",
    m: (g) => g ? Y(n.value, e, "", "", g) : "",
    be: (g, y) => g && y ? Y(n.value, e, g, y, "") : "",
    em: (g, y) => g && y ? Y(n.value, e, "", g, y) : "",
    bm: (g, y) => g && y ? Y(n.value, e, g, "", y) : "",
    bem: (g, y, v) => g && y && v ? Y(n.value, e, g, y, v) : "",
    is: (g, ...y) => {
      const v = y.length >= 1 ? y[0] : !0;
      return g && v ? `${Zs}${g}` : "";
    },
    cssVar: (g) => {
      const y = {};
      for (const v in g)
        g[v] && (y[`--${n.value}-${v}`] = g[v]);
      return y;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const y = {};
      for (const v in g)
        g[v] && (y[`--${n.value}-${e}-${v}`] = g[v]);
      return y;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, Dt = S(0), jn = 2e3, In = Symbol("zIndexContextKey"), Qs = (e) => {
  const t = e || (U() ? ge(In, void 0) : void 0), n = I(() => {
    const o = u(t);
    return Fs(o) ? o : jn;
  }), r = I(() => n.value + Dt.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Dt.value++, r.value)
  };
};
Rs({
  type: String,
  values: Ks,
  required: !1
});
const eu = Symbol("size"), Vn = Symbol(), Ae = S();
function Nn(e, t = void 0) {
  const n = U() ? ge(Vn, Ae) : Ae;
  return e ? I(() => {
    var r, a;
    return (a = (r = n.value) == null ? void 0 : r[e]) != null ? a : t;
  }) : n;
}
function tu(e, t) {
  const n = Nn(), r = Xs(e, I(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Ce;
  })), a = Ws(I(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), o = Qs(I(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || jn;
  })), s = I(() => {
    var l;
    return u(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return nu(I(() => u(n) || {})), {
    ns: r,
    locale: a,
    zIndex: o,
    size: s
  };
}
const nu = (e, t, n = !1) => {
  var r;
  const a = !!U(), o = a ? Nn() : void 0, s = (r = t == null ? void 0 : t.provide) != null ? r : a ? Bn : void 0;
  if (!s) {
    ks("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = I(() => {
    const p = u(e);
    return o != null && o.value ? ru(o.value, p) : p;
  });
  return s(Vn, l), s(En, I(() => l.value.locale)), s(Pn, I(() => l.value.namespace)), s(In, I(() => l.value.zIndex)), s(eu, {
    size: I(() => l.value.size || "")
  }), (n || !Ae.value) && (Ae.value = l.value), l;
}, ru = (e, t) => {
  var n;
  const r = [.../* @__PURE__ */ new Set([...Mt(e), ...Mt(t)])], a = {};
  for (const o of r)
    a[o] = (n = t[o]) != null ? n : e[o];
  return a;
};
function au(e) {
  let t;
  const n = S(!1), r = Un({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function a(h) {
    r.text = h;
  }
  function o() {
    const h = r.parent, m = b.ns;
    if (!h.vLoadingAddClassList) {
      let T = h.getAttribute("loading-number");
      T = Number.parseInt(T) - 1, T ? h.setAttribute("loading-number", T.toString()) : (_e(h, m.bm("parent", "relative")), h.removeAttribute("loading-number")), _e(h, m.bm("parent", "hidden"));
    }
    s(), c.unmount();
  }
  function s() {
    var h, m;
    (m = (h = b.$el) == null ? void 0 : h.parentNode) == null || m.removeChild(b.$el);
  }
  function l() {
    var h;
    e.beforeClose && !e.beforeClose() || (n.value = !0, clearTimeout(t), t = window.setTimeout(p, 400), r.visible = !1, (h = e.closed) == null || h.call(e));
  }
  function p() {
    if (!n.value)
      return;
    const h = r.parent;
    n.value = !1, h.vLoadingAddClassList = void 0, o();
  }
  const d = Re({
    name: "ElLoading",
    setup(h, { expose: m }) {
      const { ns: T, zIndex: g } = tu("loading");
      return m({
        ns: T,
        zIndex: g
      }), () => {
        const y = r.spinner || r.svg, v = ue("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...y ? { innerHTML: y } : {}
        }, [
          ue("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), x = r.text ? ue("p", { class: T.b("text") }, [r.text]) : void 0;
        return ue(Rn, {
          name: T.b("fade"),
          onAfterLeave: p
        }, {
          default: w(() => [
            Kt(E("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                T.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              ue("div", {
                class: T.b("spinner")
              }, [v, x])
            ]), [[Kn, r.visible]])
          ])
        });
      };
    }
  }), c = Gn(d), b = c.mount(document.createElement("div"));
  return {
    ...Hn(r),
    setText: a,
    removeElLoadingChild: s,
    close: l,
    handleAfterLeave: p,
    vm: b,
    get $el() {
      return b.$el;
    }
  };
}
let be;
const ou = function(e = {}) {
  if (!qe)
    return;
  const t = lu(e);
  if (t.fullscreen && be)
    return be;
  const n = au({
    ...t,
    closed: () => {
      var a;
      (a = t.closed) == null || a.call(t), t.fullscreen && (be = void 0);
    }
  });
  su(t, t.parent, n), Bt(t, t.parent, n), t.parent.vLoadingAddClassList = () => Bt(t, t.parent, n);
  let r = t.parent.getAttribute("loading-number");
  return r ? r = `${Number.parseInt(r) + 1}` : r = "1", t.parent.setAttribute("loading-number", r), t.parent.appendChild(n.$el), Ge(() => n.visible.value = t.visible), t.fullscreen && (be = n), n;
}, lu = (e) => {
  var t, n, r, a;
  let o;
  return We(e.target) ? o = (t = document.querySelector(e.target)) != null ? t : document.body : o = e.target || document.body, {
    parent: o === document.body || e.body ? document.body : o,
    background: e.background || "",
    svg: e.svg || "",
    svgViewBox: e.svgViewBox || "",
    spinner: e.spinner || !1,
    text: e.text || "",
    fullscreen: o === document.body && ((n = e.fullscreen) != null ? n : !0),
    lock: (r = e.lock) != null ? r : !1,
    customClass: e.customClass || "",
    visible: (a = e.visible) != null ? a : !0,
    target: o
  };
}, su = async (e, t, n) => {
  const { nextZIndex: r } = n.vm.zIndex || n.vm._.exposed.zIndex, a = {};
  if (e.fullscreen)
    n.originalPosition.value = ce(document.body, "position"), n.originalOverflow.value = ce(document.body, "overflow"), a.zIndex = r();
  else if (e.parent === document.body) {
    n.originalPosition.value = ce(document.body, "position"), await Ge();
    for (const o of ["top", "left"]) {
      const s = o === "top" ? "scrollTop" : "scrollLeft";
      a[o] = `${e.target.getBoundingClientRect()[o] + document.body[s] + document.documentElement[s] - Number.parseInt(ce(document.body, `margin-${o}`), 10)}px`;
    }
    for (const o of ["height", "width"])
      a[o] = `${e.target.getBoundingClientRect()[o]}px`;
  } else
    n.originalPosition.value = ce(t, "position");
  for (const [o, s] of Object.entries(a))
    n.$el.style[o] = s;
}, Bt = (e, t, n) => {
  const r = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? _e(t, r.bm("parent", "relative")) : zt(t, r.bm("parent", "relative")), e.fullscreen && e.lock ? zt(t, r.bm("parent", "hidden")) : _e(t, r.bm("parent", "hidden"));
}, $e = Symbol("ElLoading"), Ut = (e, t) => {
  var n, r, a, o;
  const s = t.instance, l = (h) => Oe(t.value) ? t.value[h] : void 0, p = (h) => {
    const m = We(h) && (s == null ? void 0 : s[h]) || h;
    return m && S(m);
  }, d = (h) => p(l(h) || e.getAttribute(`element-loading-${br(h)}`)), c = (n = l("fullscreen")) != null ? n : t.modifiers.fullscreen, b = {
    text: d("text"),
    svg: d("svg"),
    svgViewBox: d("svgViewBox"),
    spinner: d("spinner"),
    background: d("background"),
    customClass: d("customClass"),
    fullscreen: c,
    target: (r = l("target")) != null ? r : c ? void 0 : e,
    body: (a = l("body")) != null ? a : t.modifiers.body,
    lock: (o = l("lock")) != null ? o : t.modifiers.lock
  };
  e[$e] = {
    options: b,
    instance: ou(b)
  };
}, uu = (e, t) => {
  for (const n of Object.keys(t))
    Ke(t[n]) && (t[n].value = e[n]);
}, iu = {
  mounted(e, t) {
    t.value && Ut(e, t);
  },
  updated(e, t) {
    const n = e[$e];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Ut(e, t) : t.value && t.oldValue ? Oe(t.value) && uu(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[$e]) == null || t.instance.close(), e[$e] = null;
  }
}, cu = {
  input: "请输入",
  select: "请选择",
  start: "开始",
  end: "结束",
  search: "搜索",
  reset: "重置"
}, du = {
  input: "Please Input",
  select: "Please Select",
  start: "Start",
  end: "End",
  search: "Search",
  reset: "Reset"
}, fu = {
  zh: cu,
  en: du
}, pu = () => localStorage.getItem("language") || "zh", D = (e) => {
  var n;
  const t = pu();
  return ((n = fu[t]) == null ? void 0 : n[e]) || e;
}, gu = { class: "v-filter" }, Fn = {
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
    const { proxy: n } = U(), r = e, a = I(() => {
      const v = r.filter.filter((i) => i.required), x = {};
      return v.forEach((i) => {
        x[i.prop] = [
          { required: !0, message: i.message || `${i.label}不能为空` }
        ];
      }), x;
    }), o = S(), s = S({}), l = S([]), p = S(["date", "daterange", "month", "year", "monthrange"]), d = I(() => 24 / r.col);
    ye(() => r.filter, (v) => {
      c(v);
    }, { deep: !0 });
    const c = (v = []) => {
      l.value = v.map((x) => ((x.initValue || x.initValue === 0) && (s.value[x.prop] = x.initValue), {
        ...x
      }));
    }, b = () => {
      s.value = {};
    }, h = (v, x) => {
      p.value.includes(x.scope) && (x.startKey && (s.value[x.startKey] = v && v.length > 1 ? v[0] : ""), x.endKey && (s.value[x.endKey] = v && v.length > 1 ? v[1] : ""));
    }, m = () => new Promise((v, x) => {
      o.value.validate((i) => {
        if (i) {
          const C = {};
          l.value.forEach((j) => {
            const me = j.filterProp || j.prop;
            j.startKey ? (C[j.startKey] = s.value[j.startKey], C[j.endKey] = s.value[j.endKey]) : C[me] = s.value[j.prop], j.format && typeof j.format == "function" && (C[me] = j.format(s.value[j.prop]));
          }), n.$emit("search", C), v();
        } else
          x();
      });
    }), T = () => {
      b(), n.$emit("reset");
    };
    return t({
      search: m,
      getCurrentFilter: () => s.value,
      setCurrentFilter: (v, x = !0) => {
        s.value = {
          ...v
        }, x && m();
      }
    }), He(() => {
      c(r.filter);
    }), (v, x) => (f(), P("div", gu, [
      E(u(Jn), null, {
        default: w(() => [
          E(u(Gt), {
            ref_key: "filterFormRef",
            ref: o,
            model: s.value,
            "label-width": e.labelWidth,
            rules: a.value
          }, {
            default: w(() => [
              E(u(ke), { gutter: 20 }, {
                default: w(() => [
                  (f(!0), P(F, null, k(l.value, (i) => (f(), $(u(re), {
                    span: d.value,
                    key: i.prop
                  }, {
                    default: w(() => [
                      E(u(Ht), {
                        label: i.label,
                        "label-width": i.labelWidth || e.labelWidth,
                        prop: i.prop
                      }, {
                        default: w(() => [
                          i.scope === "input" ? (f(), $(u(we), {
                            key: 0,
                            modelValue: s.value[i.prop],
                            "onUpdate:modelValue": (C) => s.value[i.prop] = C,
                            modelModifiers: { trim: !0 },
                            placeholder: i.placeholder || u(D)("input")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : O("", !0),
                          i.scope === "select" ? (f(), $(u(Yt), N({
                            key: 1,
                            modelValue: s.value[i.prop],
                            "onUpdate:modelValue": (C) => s.value[i.prop] = C,
                            placeholder: i.placeholder || u(D)("select"),
                            clearable: "",
                            filterable: ""
                          }, {
                            ...i
                          }, {
                            "filter-method": (C) => {
                              var j;
                              return (j = i.remoteMethod) == null ? void 0 : j.call(i, C, i);
                            },
                            onChange: function(C) {
                              i.onchange && i.onchange(C);
                            }
                          }), {
                            default: w(() => [
                              (f(!0), P(F, null, k(i.options || [], (C) => (f(), $(u(qt), {
                                key: C.value,
                                label: C.label,
                                value: C.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : O("", !0),
                          p.value.includes(i.scope) ? (f(), $(u(Wt), {
                            key: 2,
                            modelValue: s.value[i.prop],
                            "onUpdate:modelValue": (C) => s.value[i.prop] = C,
                            "value-format": i.format || "YYYY-MM-DD HH:mm:ss",
                            type: i.scope,
                            placeholder: i.placeholder || u(D)("select"),
                            "start-placeholder": u(D)("start"),
                            "end-placeholder": u(D)("end"),
                            clearable: "",
                            onChange: (C) => h(C, i)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "start-placeholder", "end-placeholder", "onChange"])) : O("", !0),
                          i.scope === "range" ? (f(), $(u(ke), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: w(() => [
                              E(u(re), { span: 11 }, {
                                default: w(() => [
                                  E(u(we), {
                                    modelValue: s.value[i.startKey],
                                    "onUpdate:modelValue": (C) => s.value[i.startKey] = C,
                                    placeholder: i.placeholder || u(D)("input"),
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024),
                              E(u(re), {
                                class: "line",
                                span: 2
                              }, {
                                default: w(() => [
                                  B("-")
                                ]),
                                _: 1
                              }),
                              E(u(re), { span: 11 }, {
                                default: w(() => [
                                  E(u(we), {
                                    modelValue: s.value[i.endKey],
                                    "onUpdate:modelValue": (C) => s.value[i.endKey] = C,
                                    placeholder: i.placeholder || u(D)("input"),
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : O("", !0),
                          i.scope === "cascader" ? (f(), $(u(Xn), {
                            key: 4,
                            modelValue: s.value[i.prop],
                            "onUpdate:modelValue": (C) => s.value[i.prop] = C,
                            options: i.options,
                            props: i.cascaderProps || { checkStrictly: !0, emitPath: !1 },
                            "collapse-tags": i.collapseTags,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "collapse-tags"])) : O("", !0)
                        ]),
                        _: 2
                      }, 1032, ["label", "label-width", "prop"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128)),
                  E(u(re), { span: d.value }, {
                    default: w(() => [
                      E(u(ae), {
                        type: "primary",
                        icon: u(Bs),
                        onClick: m
                      }, {
                        default: w(() => [
                          B(L(u(D)("search")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      E(u(ae), {
                        icon: u(zs),
                        onClick: T
                      }, {
                        default: w(() => [
                          B(L(u(D)("reset")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (f(!0), P(F, null, k(e.btns, (i) => (f(), $(u(ae), {
                        key: i.text,
                        onClick: i.click
                      }, {
                        default: w(() => [
                          B(L(i.text), 1)
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
var vu = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function yu(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function hu() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function Rt(e, t, n) {
  const r = hu(), a = e - r, o = 20;
  let s = 0;
  t = typeof t > "u" ? 500 : t;
  var l = function() {
    s += o;
    var p = Math.easeInOutQuad(s, r, a, t);
    yu(p), s < t ? vu(l) : n && typeof n == "function" && n();
  };
  l();
}
const Ln = {
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
    const t = e, n = S(10), r = S(t.page || 1), { proxy: a } = U();
    ye(() => t.page, (l) => {
      r.value = l;
    });
    const o = (l) => {
      r.value * l > t.total && (r.value = 1), n.value = l, a.$emit("pagination", { pageNum: r.value, pageSize: l }), t.autoScroll && Rt(0, 800);
    }, s = (l) => {
      r.value = l, a.$emit("pagination", { pageNum: l, pageSize: n.value }), t.autoScroll && Rt(0, 800);
    };
    return (l, p) => (f(), P("div", {
      class: Ye([{ hidden: e.hidden }, "v-pagination"])
    }, [
      E(u(Qn), N({
        "current-page": r.value,
        layout: e.layout
      }, l.$attrs, {
        onSizeChange: o,
        onCurrentChange: s
      }), null, 16, ["current-page", "layout"])
    ], 2));
  }
}, mu = { key: 0 }, bu = { key: 1 }, wu = { key: 2 }, Ie = {
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
    const n = e, r = t, a = S(ze(n.row, n.col.prop));
    ye(() => ze(n.row, n.col.prop), (p) => {
      a.value = p;
    });
    const o = () => {
      Ns(n.row, n.col.prop, a.value), n.col.change && n.col.change(n.row, a.value), r("update:row", n.row);
    }, s = (p, d) => d.find((b) => b.value === p) || {}, l = (p, d) => {
      const c = s(p, d);
      return (c == null ? void 0 : c.label) || p;
    };
    return (p, d) => (f(), P(F, null, [
      e.col.scope ? O("", !0) : (f(), P("div", mu, L(e.row[e.col.prop]), 1)),
      e.col.scope === "number-col" ? (f(), P("div", bu, L(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : O("", !0),
      e.col.scope === "render" && e.col.render ? (f(), P("div", wu, L(e.col.render(e.row, e.col.prop)), 1)) : O("", !0),
      ["textarea", "input"].includes(e.col.scope) ? (f(), $(u(we), N({
        key: 3,
        type: e.col.scope || "text"
      }, {
        ...kt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => a.value = c),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : O("", !0),
      e.col.scope === "input-number" ? (f(), $(u(er), N({ key: 4 }, {
        ...kt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[1] || (d[1] = (c) => a.value = c),
        onChange: o
      }), null, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "select" ? (f(), $(u(Yt), N({ key: 5 }, {
        ...e.col
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[2] || (d[2] = (c) => a.value = c),
        onChange: o
      }), {
        default: w(() => [
          (f(!0), P(F, null, k(e.col.options, (c) => (f(), $(u(qt), {
            key: c.value,
            label: c.label,
            value: c.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "tag" && l(e.row[e.col.prop], e.col.options) ? (f(), $(u(tr), {
        key: 6,
        type: s(e.row[e.col.prop], e.col.options).type
      }, {
        default: w(() => [
          B(L(l(e.row[e.col.prop], e.col.options)), 1)
        ]),
        _: 1
      }, 8, ["type"])) : O("", !0),
      e.col.scope === "img" ? (f(), $(u(nr), {
        key: 7,
        src: a.value,
        fit: e.col.fit || "cover"
      }, null, 8, ["src", "fit"])) : O("", !0),
      ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (f(), $(u(Wt), N({ key: 8 }, {
        ...e.col
      }, {
        type: e.col.scope,
        modelValue: a.value,
        "onUpdate:modelValue": d[3] || (d[3] = (c) => a.value = c),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : O("", !0),
      e.col.scope === "switch" ? (f(), $(u(rr), N({
        key: 9,
        modelValue: a.value,
        "onUpdate:modelValue": d[4] || (d[4] = (c) => a.value = c),
        onChange: o
      }, {
        ...e.col
      }), null, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "radio" ? (f(), $(u(ar), {
        key: 10,
        modelValue: a.value,
        "onUpdate:modelValue": d[5] || (d[5] = (c) => a.value = c),
        onChange: o
      }, {
        default: w(() => [
          (f(!0), P(F, null, k(e.col.options, (c) => (f(), $(u(Zt), {
            label: c.value,
            key: c.label
          }, {
            default: w(() => [
              B(L(c.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : O("", !0)
    ], 64));
  }
}, kn = {
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
    const n = e, { proxy: r } = U(), a = S(null), o = S(null), s = S(null), l = () => {
      const m = document.querySelector(".table-container .c-table");
      if (m) {
        const { top: T } = m.getBoundingClientRect();
        o.value = window.innerHeight - T - 50;
      }
    }, p = () => {
      s.value.clearSelection();
    }, d = () => {
      s.value.setCurrentRow();
    }, c = (m) => {
      a.value = m ? m.id : null, n.radio && n.radio(m);
    }, b = (m, T, g) => {
      r.$emit(m.event, T, g), r.$emit("btnClick", {
        btn: m,
        row: T,
        index: g
      });
    }, h = (m, T, g) => "if" in m ? typeof m.if == "function" ? m.if(T, g) : T[m.if] : m.render ? !!m.render(T, g) : !!m.label;
    return t({
      clearSelection: p,
      clearRadio: d
    }), He(() => {
      n.onSize && (window.addEventListener("resize", l), Ge(() => {
        l();
      }));
    }), Yn(() => {
      n.onSize && window.removeEventListener("resize", l);
    }), (m, T) => {
      const g = qn("v-table", !0);
      return f(), P("div", {
        class: Ye(["v-table", { pd: e.onAdd }])
      }, [
        E(u(or), N({
          ref_key: "tableRef",
          ref: s,
          border: ""
        }, {
          ...e.tableProps
        }, {
          data: e.data,
          onSelectionChange: e.selection,
          "highlight-current-row": !!e.radio,
          onCurrentChange: c
        }), {
          default: w(() => [
            e.selection ? (f(), $(u(Ne), {
              key: 0,
              type: "selection",
              width: "40"
            })) : O("", !0),
            e.radio ? (f(), $(u(Ne), {
              key: 1,
              fixed: "left",
              width: "60"
            }, {
              header: w(() => [
                ve("div", {
                  class: "radio-header",
                  onClick: d
                }, "取消")
              ]),
              default: w(({ row: y }) => [
                E(u(Zt), {
                  modelValue: a.value,
                  "onUpdate:modelValue": T[0] || (T[0] = (v) => a.value = v),
                  label: y.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : O("", !0),
            (f(!0), P(F, null, k(e.columns, (y) => (f(), $(u(Ne), N({
              key: y.prop,
              width: y.width
            }, {
              ...y
            }), {
              default: w(({ row: v, $index: x }) => [
                ["btn", "table"].includes(y.scope) ? O("", !0) : (f(), $(Ie, {
                  key: 0,
                  row: v,
                  col: y
                }, null, 8, ["row", "col"])),
                y.scope === "table" ? (f(), $(g, {
                  key: 1,
                  data: v[y.prop],
                  columns: y.options
                }, null, 8, ["data", "columns"])) : O("", !0),
                y.scope === "btn" ? (f(!0), P(F, { key: 2 }, k(y.options || [], (i) => (f(), P(F, {
                  key: i.event
                }, [
                  h(i, v, x) ? (f(), $(u(ae), N({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: i.type || "primary",
                    onClick: (C) => b(i, v, x)
                  }, {
                    ...i
                  }), {
                    default: w(() => [
                      B(L(i.label || (i.render ? i.render(v, x) : "")), 1)
                    ]),
                    _: 2
                  }, 1040, ["type", "onClick"])) : O("", !0)
                ], 64))), 128)) : O("", !0)
              ]),
              _: 2
            }, 1040, ["width"]))), 128))
          ]),
          _: 1
        }, 16, ["data", "onSelectionChange", "highlight-current-row"]),
        e.onAdd ? (f(), P("div", {
          key: 0,
          class: "add-btn",
          onClick: T[1] || (T[1] = (...y) => e.onAdd && e.onAdd(...y))
        })) : O("", !0)
      ], 2);
    };
  }
}, Tu = { class: "v-page-operator" }, Cu = { class: "v-page-table" }, $u = {
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
    const { GET_LIST: n, GET_TOTAL: r, PAGE_NUM_KEY: a, PAGE_SIZE_KEY: o } = gr(), { proxy: s } = U(), l = e, p = S([]), d = S({}), c = S(0), b = S({}), h = S({}), m = S(null), T = () => {
      var V;
      (V = m.value) == null || V.clearRadio();
    }, g = () => {
      var V;
      (V = m.value) == null || V.clearSelection();
    }, y = ({ btn: V, row: G, index: H }) => {
      s.$emit(V.event, G, H);
    }, v = S(!1), x = async (V = {}) => {
      if (l.getList) {
        v.value = !0;
        try {
          d.value = {
            [a]: b.value.pageNum || 1,
            [o]: b.value.pageSize || 10,
            ...V
          };
          const G = await l.getList(d.value);
          let H = n(G);
          l.formatList && (H = l.formatList(H)), p.value = H.map((ne, Ve) => ({
            ...ne,
            index: Ve + 1 + (d.value[a] - 1) * d.value[o]
          })), c.value = r(G);
        } finally {
          v.value = !1;
        }
      }
    }, i = (V) => {
      b.value = V, g(), T(), x({
        ...V,
        ...h.value
      });
    }, C = async () => {
      g(), T(), await x({
        ...b.value,
        ...h.value
      });
    }, j = (V) => {
      b.value.pageNum = 1, h.value = V, C(), s.$emit("search", V);
    }, me = () => {
      se.value.search();
    }, se = S(), Mn = () => se.value.getCurrentFilter();
    return He(() => {
      l.init && (l.showFilter ? se.value.search() : x());
    }), t({
      refreshList: C,
      clearSelection: g,
      clearRadio: T,
      search: me,
      getCurrentFilter: Mn,
      filterRef: se
    }), (V, G) => {
      const H = iu;
      return f(), P("div", {
        class: Ye(["v-page", { pd: l.table && l.table.onAdd }])
      }, [
        e.showFilter ? (f(), $(Fn, {
          key: 0,
          ref_key: "filterRef",
          ref: se,
          filter: e.filter,
          "label-width": e.filterLabelWidth,
          btns: e.filterBtns,
          col: e.filterCol,
          onSearch: j,
          onReset: G[0] || (G[0] = () => j({}))
        }, null, 8, ["filter", "label-width", "btns", "col"])) : O("", !0),
        ve("div", Tu, [
          (f(!0), P(F, null, k(e.btns, (ne, Ve) => (f(), $(u(ae), {
            key: Ve,
            type: ne.type || "primary",
            onClick: (zn) => ne.click && ne.click(zn)
          }, {
            default: w(() => [
              B(L(ne.label), 1)
            ]),
            _: 2
          }, 1032, ["type", "onClick"]))), 128)),
          xe(V.$slots, "btn")
        ]),
        Kt((f(), P("div", Cu, [
          E(kn, N({
            ref_key: "tableRef",
            ref: m,
            data: p.value,
            columns: e.columns,
            selection: e.selection,
            radio: e.radio
          }, {
            ...l.table
          }, { onBtnClick: y }), null, 16, ["data", "columns", "selection", "radio"])
        ])), [
          [H, v.value]
        ]),
        e.showPagination ? (f(), $(Ln, {
          key: 1,
          page: b.value.pageNum,
          total: c.value,
          onPagination: i
        }, null, 8, ["page", "total"])) : O("", !0)
      ], 2);
    };
  }
}, xu = {
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
    const r = e, a = n, o = S({ ...r.value }), s = S();
    ye(() => r.value, () => {
      l();
    }, { deep: !0 });
    const l = () => {
      o.value = {
        ...r.value
      };
    }, p = (c) => {
      a("update:value", c);
    };
    return t({
      validate: () => new Promise((c, b) => {
        s.value.validate((h) => {
          h ? c(o.value) : b();
        });
      }),
      reset: l,
      form: o
    }), (c, b) => (f(), $(u(Gt), N({
      class: "c-form",
      ref_key: "formRef",
      ref: s,
      model: o.value,
      rules: e.rules,
      "label-width": "130px"
    }, c.$attrs), {
      default: w(() => [
        E(u(ke), { gutter: 20 }, {
          default: w(() => [
            (f(!0), P(F, null, k(e.list, (h) => (f(), $(u(re), {
              span: h.colSpan || 24 / e.col,
              key: h.prop
            }, {
              default: w(() => [
                E(u(Ht), {
                  label: h.label,
                  prop: h.prop
                }, {
                  default: w(() => [
                    E(Ie, {
                      row: o.value,
                      col: h,
                      "onUpdate:row": p
                    }, null, 8, ["row", "col"]),
                    xe(c.$slots, h.prop)
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
};
function Su(e) {
  const t = U(), n = S(e.modelValue);
  return ye(() => e.modelValue, (o) => {
    n.value = o;
  }), {
    dialogVisible: n,
    closeDialog: () => {
      t.emit("update:modelValue", !1);
    },
    beforeClose: (o) => {
      t.emit("update:modelValue", !1), o();
    }
  };
}
const _u = { class: "dialog-footer" }, Au = {
  __name: "index",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * @name data
     * @vue Prop
     * @description 详情数据
     * @type ["Object"]
     * @default {}
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * @name columns
     * @vue Prop
     * @description 配置
     * @type ["Array"]
     * @default []
     */
    columns: {
      type: Array,
      default: () => []
    },
    /**
     * @name title
     * @vue Prop
     * @description 标题
     * @type ["String"]
     * @default '详情'
     */
    title: {
      type: String,
      default: "详情"
    },
    /**
     * @name dialogProps
     * @vue Prop
     * @description dialog属性
     * @type ["Object"]
     * @default {}
     */
    dialogProps: {
      type: Object,
      default: () => ({
        width: "1000"
      })
    },
    /**
     * @name descProps
     * @vue Prop
     * @description el-descriptions属性
     * @type ["Object"]
     * @default {}
     */
    descProps: {
      type: Object,
      default: () => ({
        border: !0
      })
    }
  },
  setup(e) {
    const t = e, { dialogVisible: n, closeDialog: r, beforeClose: a } = Su(t);
    return (o, s) => (f(), $(u(lr), N({
      modelValue: u(n),
      "onUpdate:modelValue": s[0] || (s[0] = (l) => Ke(n) ? n.value = l : null),
      title: e.title,
      "close-on-click-modal": !1,
      "before-close": u(a)
    }, e.dialogProps), {
      footer: w(() => [
        ve("div", _u, [
          E(u(ae), { onClick: u(r) }, {
            default: w(() => [
              B("Cancel")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: w(() => [
        E(u(sr), Wn(Zn(e.descProps)), {
          default: w(() => [
            (f(!0), P(F, null, k(e.columns, (l) => (f(), $(u(ur), {
              label: l.label,
              span: l.span,
              key: l.prop
            }, {
              default: w(() => [
                E(Ie, {
                  row: e.data,
                  col: l
                }, null, 8, ["row", "col"]),
                xe(o.$slots, l.prop)
              ]),
              _: 2
            }, 1032, ["label", "span"]))), 128))
          ]),
          _: 3
        }, 16),
        xe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue", "title", "before-close"]));
  }
}, Ou = (e, t = "拷贝成功") => {
  if (navigator.clipboard)
    navigator.clipboard.writeText(e), it.success(t);
  else {
    const n = document.createElement("textarea");
    document.body.appendChild(n), n.style.position = "fixed", n.style.clip = "rect(0 0 0 0)", n.style.top = "10px", n.value = e, n.select(), document.execCommand("copy", !0), document.body.removeChild(n), it.success(t);
  }
}, ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  copy: Ou
}, Symbol.toStringTag, { value: "Module" })), Iu = {
  install(e, t = {}) {
    const { config: n } = t;
    n && pr(n, e), e.component("VPage", $u), e.component("VFilter", Fn), e.component("VTable", kn), e.component("VElement", Ie), e.component("VPagination", Ln), e.component("VForm", xu), e.component("VDetail", Au);
  }
};
export {
  Au as VDetail,
  Ie as VElement,
  Fn as VFilter,
  xu as VForm,
  Ln as VPagination,
  kn as VTable,
  Iu as default,
  pr as setConfig,
  ju as utils
};
