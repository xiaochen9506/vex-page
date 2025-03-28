import { inject as ve, defineComponent as Ke, openBlock as v, createElementBlock as E, createElementVNode as ye, warn as Bn, ref as x, computed as I, unref as u, isRef as Ge, getCurrentInstance as U, provide as Un, reactive as Rn, h as ie, Transition as Kn, withCtx as T, withDirectives as Gt, createVNode as P, vShow as Gn, createApp as Hn, toRefs as Yn, nextTick as He, watch as le, onMounted as Ye, Fragment as F, renderList as k, createBlock as $, createCommentVNode as O, mergeProps as N, createTextVNode as B, toDisplayString as L, normalizeClass as We, onUnmounted as Wn, resolveComponent as qn, renderSlot as xe } from "vue";
import { ElCard as Zn, ElForm as Ht, ElRow as ke, ElCol as re, ElFormItem as Yt, ElInput as we, ElSelect as Wt, ElOption as qt, ElDatePicker as Zt, ElCascader as Jn, ElButton as ae, ElPagination as Xn, ElInputNumber as Qn, ElTag as er, ElImage as tr, ElSwitch as nr, ElRadioGroup as rr, ElRadio as Jt, ElMessage as ct, ElTable as ar, ElTableColumn as Ne, ElDialog as or, ElDescriptions as lr, ElDescriptionsItem as sr } from "element-plus";
let ur = "pageSize", ir = "pageNum", cr = (e) => e.data, dr = (e) => e.total;
function fr(e, t) {
  t && t.provide("vxe-page", e);
}
function pr() {
  return ve("vxe-page", {
    PAGE_SIZE_KEY: ur,
    PAGE_NUM_KEY: ir,
    GET_LIST: cr,
    GET_TOTAL: dr
  });
}
var dt;
const qe = typeof window < "u";
qe && ((dt = window == null ? void 0 : window.navigator) != null && dt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const gr = Object.prototype.hasOwnProperty, ft = (e, t) => gr.call(e, t), Ze = (e) => typeof e == "string", Oe = (e) => e !== null && typeof e == "object", Xt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, vr = /-(\w)/g, yr = Xt((e) => e.replace(vr, (t, n) => n ? n.toUpperCase() : "")), hr = /\B([A-Z])/g, mr = Xt(
  (e) => e.replace(hr, "-$1").toLowerCase()
);
var Qt = typeof global == "object" && global && global.Object === Object && global, br = typeof self == "object" && self && self.Object === Object && self, z = Qt || br || Function("return this")(), M = z.Symbol, en = Object.prototype, wr = en.hasOwnProperty, Tr = en.toString, ce = M ? M.toStringTag : void 0;
function Cr(e) {
  var t = wr.call(e, ce), n = e[ce];
  try {
    e[ce] = void 0;
    var r = !0;
  } catch {
  }
  var a = Tr.call(e);
  return r && (t ? e[ce] = n : delete e[ce]), a;
}
var $r = Object.prototype, xr = $r.toString;
function Sr(e) {
  return xr.call(e);
}
var _r = "[object Null]", Ar = "[object Undefined]", pt = M ? M.toStringTag : void 0;
function J(e) {
  return e == null ? e === void 0 ? Ar : _r : pt && pt in Object(e) ? Cr(e) : Sr(e);
}
function X(e) {
  return e != null && typeof e == "object";
}
var Or = "[object Symbol]";
function Je(e) {
  return typeof e == "symbol" || X(e) && J(e) == Or;
}
function tn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Q = Array.isArray, Er = 1 / 0, gt = M ? M.prototype : void 0, vt = gt ? gt.toString : void 0;
function nn(e) {
  if (typeof e == "string")
    return e;
  if (Q(e))
    return tn(e, nn) + "";
  if (Je(e))
    return vt ? vt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Er ? "-0" : t;
}
function q(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Pr(e) {
  return e;
}
var jr = "[object AsyncFunction]", Ir = "[object Function]", Vr = "[object GeneratorFunction]", Nr = "[object Proxy]";
function rn(e) {
  if (!q(e))
    return !1;
  var t = J(e);
  return t == Ir || t == Vr || t == jr || t == Nr;
}
var Fe = z["__core-js_shared__"], yt = function() {
  var e = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fr(e) {
  return !!yt && yt in e;
}
var Lr = Function.prototype, kr = Lr.toString;
function ee(e) {
  if (e != null) {
    try {
      return kr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Mr = /[\\^$.*+?()[\]{}|]/g, zr = /^\[object .+?Constructor\]$/, Dr = Function.prototype, Br = Object.prototype, Ur = Dr.toString, Rr = Br.hasOwnProperty, Kr = RegExp(
  "^" + Ur.call(Rr).replace(Mr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gr(e) {
  if (!q(e) || Fr(e))
    return !1;
  var t = rn(e) ? Kr : zr;
  return t.test(ee(e));
}
function Hr(e, t) {
  return e == null ? void 0 : e[t];
}
function te(e, t) {
  var n = Hr(e, t);
  return Gr(n) ? n : void 0;
}
var Me = te(z, "WeakMap"), ht = Object.create, Yr = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!q(t))
      return {};
    if (ht)
      return ht(t);
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
function qr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Zr = 800, Jr = 16, Xr = Date.now;
function Qr(e) {
  var t = 0, n = 0;
  return function() {
    var r = Xr(), a = Jr - (r - n);
    if (n = r, a > 0) {
      if (++t >= Zr)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ea(e) {
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
}(), ta = Se ? function(e, t) {
  return Se(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ea(t),
    writable: !0
  });
} : Pr;
const na = ta;
var ra = Qr(na);
function aa(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var oa = 9007199254740991, la = /^(?:0|[1-9]\d*)$/;
function an(e, t) {
  var n = typeof e;
  return t = t ?? oa, !!t && (n == "number" || n != "symbol" && la.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function on(e, t, n) {
  t == "__proto__" && Se ? Se(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ln(e, t) {
  return e === t || e !== e && t !== t;
}
var sa = Object.prototype, ua = sa.hasOwnProperty;
function Xe(e, t, n) {
  var r = e[t];
  (!(ua.call(e, t) && ln(r, n)) || n === void 0 && !(t in e)) && on(e, t, n);
}
function he(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var l = t[o], g = r ? r(n[l], e[l], l, n, e) : void 0;
    g === void 0 && (g = e[l]), a ? on(n, l, g) : Xe(n, l, g);
  }
  return n;
}
var mt = Math.max;
function ia(e, t, n) {
  return t = mt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = mt(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(s), Wr(e, this, l);
  };
}
var ca = 9007199254740991;
function sn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ca;
}
function un(e) {
  return e != null && sn(e.length) && !rn(e);
}
var da = Object.prototype;
function Qe(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || da;
  return e === n;
}
function fa(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var pa = "[object Arguments]";
function bt(e) {
  return X(e) && J(e) == pa;
}
var cn = Object.prototype, ga = cn.hasOwnProperty, va = cn.propertyIsEnumerable, dn = bt(/* @__PURE__ */ function() {
  return arguments;
}()) ? bt : function(e) {
  return X(e) && ga.call(e, "callee") && !va.call(e, "callee");
};
function ya() {
  return !1;
}
var fn = typeof exports == "object" && exports && !exports.nodeType && exports, wt = fn && typeof module == "object" && module && !module.nodeType && module, ha = wt && wt.exports === fn, Tt = ha ? z.Buffer : void 0, ma = Tt ? Tt.isBuffer : void 0, pn = ma || ya, ba = "[object Arguments]", wa = "[object Array]", Ta = "[object Boolean]", Ca = "[object Date]", $a = "[object Error]", xa = "[object Function]", Sa = "[object Map]", _a = "[object Number]", Aa = "[object Object]", Oa = "[object RegExp]", Ea = "[object Set]", Pa = "[object String]", ja = "[object WeakMap]", Ia = "[object ArrayBuffer]", Va = "[object DataView]", Na = "[object Float32Array]", Fa = "[object Float64Array]", La = "[object Int8Array]", ka = "[object Int16Array]", Ma = "[object Int32Array]", za = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ba = "[object Uint16Array]", Ua = "[object Uint32Array]", A = {};
A[Na] = A[Fa] = A[La] = A[ka] = A[Ma] = A[za] = A[Da] = A[Ba] = A[Ua] = !0;
A[ba] = A[wa] = A[Ia] = A[Ta] = A[Va] = A[Ca] = A[$a] = A[xa] = A[Sa] = A[_a] = A[Aa] = A[Oa] = A[Ea] = A[Pa] = A[ja] = !1;
function Ra(e) {
  return X(e) && sn(e.length) && !!A[J(e)];
}
function et(e) {
  return function(t) {
    return e(t);
  };
}
var gn = typeof exports == "object" && exports && !exports.nodeType && exports, fe = gn && typeof module == "object" && module && !module.nodeType && module, Ka = fe && fe.exports === gn, Le = Ka && Qt.process, oe = function() {
  try {
    var e = fe && fe.require && fe.require("util").types;
    return e || Le && Le.binding && Le.binding("util");
  } catch {
  }
}(), Ct = oe && oe.isTypedArray, Ga = Ct ? et(Ct) : Ra, Ha = Object.prototype, Ya = Ha.hasOwnProperty;
function vn(e, t) {
  var n = Q(e), r = !n && dn(e), a = !n && !r && pn(e), o = !n && !r && !a && Ga(e), s = n || r || a || o, l = s ? fa(e.length, String) : [], g = l.length;
  for (var d in e)
    (t || Ya.call(e, d)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    an(d, g))) && l.push(d);
  return l;
}
function yn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Wa = yn(Object.keys, Object), qa = Object.prototype, Za = qa.hasOwnProperty;
function Ja(e) {
  if (!Qe(e))
    return Wa(e);
  var t = [];
  for (var n in Object(e))
    Za.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function tt(e) {
  return un(e) ? vn(e) : Ja(e);
}
function Xa(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Qa = Object.prototype, eo = Qa.hasOwnProperty;
function to(e) {
  if (!q(e))
    return Xa(e);
  var t = Qe(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !eo.call(e, r)) || n.push(r);
  return n;
}
function nt(e) {
  return un(e) ? vn(e, !0) : to(e);
}
var no = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ro = /^\w*$/;
function ao(e, t) {
  if (Q(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Je(e) ? !0 : ro.test(e) || !no.test(e) || t != null && e in Object(t);
}
var pe = te(Object, "create");
function oo() {
  this.__data__ = pe ? pe(null) : {}, this.size = 0;
}
function lo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var so = "__lodash_hash_undefined__", uo = Object.prototype, io = uo.hasOwnProperty;
function co(e) {
  var t = this.__data__;
  if (pe) {
    var n = t[e];
    return n === so ? void 0 : n;
  }
  return io.call(t, e) ? t[e] : void 0;
}
var fo = Object.prototype, po = fo.hasOwnProperty;
function go(e) {
  var t = this.__data__;
  return pe ? t[e] !== void 0 : po.call(t, e);
}
var vo = "__lodash_hash_undefined__";
function yo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = pe && t === void 0 ? vo : t, this;
}
function Z(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Z.prototype.clear = oo;
Z.prototype.delete = lo;
Z.prototype.get = co;
Z.prototype.has = go;
Z.prototype.set = yo;
function ho() {
  this.__data__ = [], this.size = 0;
}
function Ee(e, t) {
  for (var n = e.length; n--; )
    if (ln(e[n][0], t))
      return n;
  return -1;
}
var mo = Array.prototype, bo = mo.splice;
function wo(e) {
  var t = this.__data__, n = Ee(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : bo.call(t, n, 1), --this.size, !0;
}
function To(e) {
  var t = this.__data__, n = Ee(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Co(e) {
  return Ee(this.__data__, e) > -1;
}
function $o(e, t) {
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
R.prototype.clear = ho;
R.prototype.delete = wo;
R.prototype.get = To;
R.prototype.has = Co;
R.prototype.set = $o;
var ge = te(z, "Map");
function xo() {
  this.size = 0, this.__data__ = {
    hash: new Z(),
    map: new (ge || R)(),
    string: new Z()
  };
}
function So(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Pe(e, t) {
  var n = e.__data__;
  return So(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _o(e) {
  var t = Pe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ao(e) {
  return Pe(this, e).get(e);
}
function Oo(e) {
  return Pe(this, e).has(e);
}
function Eo(e, t) {
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
K.prototype.clear = xo;
K.prototype.delete = _o;
K.prototype.get = Ao;
K.prototype.has = Oo;
K.prototype.set = Eo;
var Po = "Expected a function";
function rt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Po);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, r);
    return n.cache = o.set(a, s) || o, s;
  };
  return n.cache = new (rt.Cache || K)(), n;
}
rt.Cache = K;
var jo = 500;
function Io(e) {
  var t = rt(e, function(r) {
    return n.size === jo && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Vo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, No = /\\(\\)?/g, Fo = Io(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Vo, function(n, r, a, o) {
    t.push(a ? o.replace(No, "$1") : r || n);
  }), t;
});
function Lo(e) {
  return e == null ? "" : nn(e);
}
function je(e, t) {
  return Q(e) ? e : ao(e, t) ? [e] : Fo(Lo(e));
}
var ko = 1 / 0;
function at(e) {
  if (typeof e == "string" || Je(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ko ? "-0" : t;
}
function hn(e, t) {
  t = je(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[at(t[n++])];
  return n && n == r ? e : void 0;
}
function ze(e, t, n) {
  var r = e == null ? void 0 : hn(e, t);
  return r === void 0 ? n : r;
}
function ot(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var $t = M ? M.isConcatSpreadable : void 0;
function Mo(e) {
  return Q(e) || dn(e) || !!($t && e && e[$t]);
}
function mn(e, t, n, r, a) {
  var o = -1, s = e.length;
  for (n || (n = Mo), a || (a = []); ++o < s; ) {
    var l = e[o];
    t > 0 && n(l) ? t > 1 ? mn(l, t - 1, n, r, a) : ot(a, l) : r || (a[a.length] = l);
  }
  return a;
}
function zo(e) {
  var t = e == null ? 0 : e.length;
  return t ? mn(e, 1) : [];
}
function Do(e) {
  return ra(ia(e, void 0, zo), e + "");
}
var lt = yn(Object.getPrototypeOf, Object), Bo = "[object Object]", Uo = Function.prototype, Ro = Object.prototype, bn = Uo.toString, Ko = Ro.hasOwnProperty, Go = bn.call(Object);
function Ho(e) {
  if (!X(e) || J(e) != Bo)
    return !1;
  var t = lt(e);
  if (t === null)
    return !0;
  var n = Ko.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && bn.call(n) == Go;
}
function Yo(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = e[r + t];
  return o;
}
function Wo() {
  this.__data__ = new R(), this.size = 0;
}
function qo(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Zo(e) {
  return this.__data__.get(e);
}
function Jo(e) {
  return this.__data__.has(e);
}
var Xo = 200;
function Qo(e, t) {
  var n = this.__data__;
  if (n instanceof R) {
    var r = n.__data__;
    if (!ge || r.length < Xo - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new K(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function se(e) {
  var t = this.__data__ = new R(e);
  this.size = t.size;
}
se.prototype.clear = Wo;
se.prototype.delete = qo;
se.prototype.get = Zo;
se.prototype.has = Jo;
se.prototype.set = Qo;
function el(e, t) {
  return e && he(t, tt(t), e);
}
function tl(e, t) {
  return e && he(t, nt(t), e);
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, xt = wn && typeof module == "object" && module && !module.nodeType && module, nl = xt && xt.exports === wn, St = nl ? z.Buffer : void 0, _t = St ? St.allocUnsafe : void 0;
function rl(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = _t ? _t(n) : new e.constructor(n);
  return e.copy(r), r;
}
function al(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[a++] = s);
  }
  return o;
}
function Tn() {
  return [];
}
var ol = Object.prototype, ll = ol.propertyIsEnumerable, At = Object.getOwnPropertySymbols, st = At ? function(e) {
  return e == null ? [] : (e = Object(e), al(At(e), function(t) {
    return ll.call(e, t);
  }));
} : Tn;
function sl(e, t) {
  return he(e, st(e), t);
}
var ul = Object.getOwnPropertySymbols, il = ul ? function(e) {
  for (var t = []; e; )
    ot(t, st(e)), e = lt(e);
  return t;
} : Tn;
const Cn = il;
function cl(e, t) {
  return he(e, Cn(e), t);
}
function $n(e, t, n) {
  var r = t(e);
  return Q(e) ? r : ot(r, n(e));
}
function dl(e) {
  return $n(e, tt, st);
}
function xn(e) {
  return $n(e, nt, Cn);
}
var De = te(z, "DataView"), Be = te(z, "Promise"), Ue = te(z, "Set"), Ot = "[object Map]", fl = "[object Object]", Et = "[object Promise]", Pt = "[object Set]", jt = "[object WeakMap]", It = "[object DataView]", pl = ee(De), gl = ee(ge), vl = ee(Be), yl = ee(Ue), hl = ee(Me), W = J;
(De && W(new De(new ArrayBuffer(1))) != It || ge && W(new ge()) != Ot || Be && W(Be.resolve()) != Et || Ue && W(new Ue()) != Pt || Me && W(new Me()) != jt) && (W = function(e) {
  var t = J(e), n = t == fl ? e.constructor : void 0, r = n ? ee(n) : "";
  if (r)
    switch (r) {
      case pl:
        return It;
      case gl:
        return Ot;
      case vl:
        return Et;
      case yl:
        return Pt;
      case hl:
        return jt;
    }
  return t;
});
const ut = W;
var ml = Object.prototype, bl = ml.hasOwnProperty;
function wl(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && bl.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Vt = z.Uint8Array;
function it(e) {
  var t = new e.constructor(e.byteLength);
  return new Vt(t).set(new Vt(e)), t;
}
function Tl(e, t) {
  var n = t ? it(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Cl = /\w*$/;
function $l(e) {
  var t = new e.constructor(e.source, Cl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Nt = M ? M.prototype : void 0, Ft = Nt ? Nt.valueOf : void 0;
function xl(e) {
  return Ft ? Object(Ft.call(e)) : {};
}
function Sl(e, t) {
  var n = t ? it(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var _l = "[object Boolean]", Al = "[object Date]", Ol = "[object Map]", El = "[object Number]", Pl = "[object RegExp]", jl = "[object Set]", Il = "[object String]", Vl = "[object Symbol]", Nl = "[object ArrayBuffer]", Fl = "[object DataView]", Ll = "[object Float32Array]", kl = "[object Float64Array]", Ml = "[object Int8Array]", zl = "[object Int16Array]", Dl = "[object Int32Array]", Bl = "[object Uint8Array]", Ul = "[object Uint8ClampedArray]", Rl = "[object Uint16Array]", Kl = "[object Uint32Array]";
function Gl(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Nl:
      return it(e);
    case _l:
    case Al:
      return new r(+e);
    case Fl:
      return Tl(e, n);
    case Ll:
    case kl:
    case Ml:
    case zl:
    case Dl:
    case Bl:
    case Ul:
    case Rl:
    case Kl:
      return Sl(e, n);
    case Ol:
      return new r();
    case El:
    case Il:
      return new r(e);
    case Pl:
      return $l(e);
    case jl:
      return new r();
    case Vl:
      return xl(e);
  }
}
function Hl(e) {
  return typeof e.constructor == "function" && !Qe(e) ? Yr(lt(e)) : {};
}
var Yl = "[object Map]";
function Wl(e) {
  return X(e) && ut(e) == Yl;
}
var Lt = oe && oe.isMap, ql = Lt ? et(Lt) : Wl, Zl = "[object Set]";
function Jl(e) {
  return X(e) && ut(e) == Zl;
}
var kt = oe && oe.isSet, Xl = kt ? et(kt) : Jl, Ql = 1, es = 2, ts = 4, Sn = "[object Arguments]", ns = "[object Array]", rs = "[object Boolean]", as = "[object Date]", os = "[object Error]", _n = "[object Function]", ls = "[object GeneratorFunction]", ss = "[object Map]", us = "[object Number]", An = "[object Object]", is = "[object RegExp]", cs = "[object Set]", ds = "[object String]", fs = "[object Symbol]", ps = "[object WeakMap]", gs = "[object ArrayBuffer]", vs = "[object DataView]", ys = "[object Float32Array]", hs = "[object Float64Array]", ms = "[object Int8Array]", bs = "[object Int16Array]", ws = "[object Int32Array]", Ts = "[object Uint8Array]", Cs = "[object Uint8ClampedArray]", $s = "[object Uint16Array]", xs = "[object Uint32Array]", _ = {};
_[Sn] = _[ns] = _[gs] = _[vs] = _[rs] = _[as] = _[ys] = _[hs] = _[ms] = _[bs] = _[ws] = _[ss] = _[us] = _[An] = _[is] = _[cs] = _[ds] = _[fs] = _[Ts] = _[Cs] = _[$s] = _[xs] = !0;
_[os] = _[_n] = _[ps] = !1;
function Te(e, t, n, r, a, o) {
  var s, l = t & Ql, g = t & es, d = t & ts;
  if (n && (s = a ? n(e, r, a, o) : n(e)), s !== void 0)
    return s;
  if (!q(e))
    return e;
  var i = Q(e);
  if (i) {
    if (s = wl(e), !l)
      return qr(e, s);
  } else {
    var w = ut(e), y = w == _n || w == ls;
    if (pn(e))
      return rl(e, l);
    if (w == An || w == Sn || y && !a) {
      if (s = g || y ? {} : Hl(e), !l)
        return g ? cl(e, tl(s, e)) : sl(e, el(s, e));
    } else {
      if (!_[w])
        return a ? e : {};
      s = Gl(e, w, l);
    }
  }
  o || (o = new se());
  var S = o.get(e);
  if (S)
    return S;
  o.set(e, s), Xl(e) ? e.forEach(function(h) {
    s.add(Te(h, t, n, h, e, o));
  }) : ql(e) && e.forEach(function(h, c) {
    s.set(c, Te(h, t, n, c, e, o));
  });
  var m = d ? g ? xn : dl : g ? nt : tt, f = i ? void 0 : m(e);
  return aa(f || e, function(h, c) {
    f && (c = h, h = e[c]), Xe(s, c, Te(h, t, n, c, e, o));
  }), s;
}
function Ss(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function _s(e, t) {
  return t.length < 2 ? e : hn(e, Yo(t, 0, -1));
}
function As(e, t) {
  return t = je(t, e), e = _s(e, t), e == null || delete e[at(Ss(t))];
}
function Os(e) {
  return Ho(e) ? void 0 : e;
}
var Es = 1, Ps = 2, js = 4, Mt = Do(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = tn(t, function(o) {
    return o = je(o, e), r || (r = o.length > 1), o;
  }), he(e, xn(e), n), r && (n = Te(n, Es | Ps | js, Os));
  for (var a = t.length; a--; )
    As(n, t[a]);
  return n;
});
function Is(e, t, n, r) {
  if (!q(e))
    return e;
  t = je(t, e);
  for (var a = -1, o = t.length, s = o - 1, l = e; l != null && ++a < o; ) {
    var g = at(t[a]), d = n;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (a != s) {
      var i = l[g];
      d = r ? r(i, g, l) : void 0, d === void 0 && (d = q(i) ? i : an(t[a + 1]) ? [] : {});
    }
    Xe(l, g, d), l = l[g];
  }
  return e;
}
function Vs(e, t, n) {
  return e == null ? e : Is(e, t, n);
}
const Ns = (e) => typeof e == "number", zt = (e) => Object.keys(e);
class Fs extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ls(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ze(e) ? new Fs(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const On = (e = "") => e.split(" ").filter((t) => !!t.trim()), Dt = (e, t) => {
  !e || !t.trim() || e.classList.add(...On(t));
}, _e = (e, t) => {
  !e || !t.trim() || e.classList.remove(...On(t));
}, de = (e, t) => {
  var n;
  if (!qe || !e || !t)
    return "";
  let r = yr(t);
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
var ks = /* @__PURE__ */ Ke({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, n) => (v(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ye("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Ms = ks, zs = /* @__PURE__ */ Ke({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, n) => (v(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ye("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), Ds = zs;
const En = "__epPropKey", Bs = (e) => Oe(e) && !!e[En], Us = (e, t) => {
  if (!Oe(e) || Bs(e))
    return e;
  const { values: n, required: r, default: a, type: o, validator: s } = e, g = {
    type: o,
    required: !!r,
    validator: n || s ? (d) => {
      let i = !1, w = [];
      if (n && (w = Array.from(n), ft(e, "default") && w.push(a), i || (i = w.includes(d))), s && (i || (i = s(d))), !i && w.length > 0) {
        const y = [...new Set(w)].map((S) => JSON.stringify(S)).join(", ");
        Bn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(d)}.`);
      }
      return i;
    } : void 0,
    [En]: !0
  };
  return ft(e, "default") && (g.default = a), g;
}, Rs = ["", "default", "small", "large"];
var Ks = {
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
const Gs = (e) => (t, n) => Hs(t, n, u(e)), Hs = (e, t, n) => ze(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var o;
  return `${(o = t == null ? void 0 : t[a]) != null ? o : `{${a}}`}`;
}), Ys = (e) => {
  const t = I(() => u(e).name), n = Ge(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Gs(e)
  };
}, Pn = Symbol("localeContextKey"), Ws = (e) => {
  const t = e || ve(Pn, x());
  return Ys(I(() => t.value || Ks));
}, Ce = "el", qs = "is-", Y = (e, t, n, r, a) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), a && (o += `--${a}`), o;
}, jn = Symbol("namespaceContextKey"), Zs = (e) => {
  const t = e || (U() ? ve(jn, x(Ce)) : x(Ce));
  return I(() => u(t) || Ce);
}, Js = (e, t) => {
  const n = Zs(t);
  return {
    namespace: n,
    b: (f = "") => Y(n.value, e, f, "", ""),
    e: (f) => f ? Y(n.value, e, "", f, "") : "",
    m: (f) => f ? Y(n.value, e, "", "", f) : "",
    be: (f, h) => f && h ? Y(n.value, e, f, h, "") : "",
    em: (f, h) => f && h ? Y(n.value, e, "", f, h) : "",
    bm: (f, h) => f && h ? Y(n.value, e, f, "", h) : "",
    bem: (f, h, c) => f && h && c ? Y(n.value, e, f, h, c) : "",
    is: (f, ...h) => {
      const c = h.length >= 1 ? h[0] : !0;
      return f && c ? `${qs}${f}` : "";
    },
    cssVar: (f) => {
      const h = {};
      for (const c in f)
        f[c] && (h[`--${n.value}-${c}`] = f[c]);
      return h;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const h = {};
      for (const c in f)
        f[c] && (h[`--${n.value}-${e}-${c}`] = f[c]);
      return h;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, Bt = x(0), In = 2e3, Vn = Symbol("zIndexContextKey"), Xs = (e) => {
  const t = e || (U() ? ve(Vn, void 0) : void 0), n = I(() => {
    const o = u(t);
    return Ns(o) ? o : In;
  }), r = I(() => n.value + Bt.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Bt.value++, r.value)
  };
};
Us({
  type: String,
  values: Rs,
  required: !1
});
const Qs = Symbol("size"), Nn = Symbol(), Ae = x();
function Fn(e, t = void 0) {
  const n = U() ? ve(Nn, Ae) : Ae;
  return e ? I(() => {
    var r, a;
    return (a = (r = n.value) == null ? void 0 : r[e]) != null ? a : t;
  }) : n;
}
function eu(e, t) {
  const n = Fn(), r = Js(e, I(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Ce;
  })), a = Ws(I(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), o = Xs(I(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || In;
  })), s = I(() => {
    var l;
    return u(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return tu(I(() => u(n) || {})), {
    ns: r,
    locale: a,
    zIndex: o,
    size: s
  };
}
const tu = (e, t, n = !1) => {
  var r;
  const a = !!U(), o = a ? Fn() : void 0, s = (r = t == null ? void 0 : t.provide) != null ? r : a ? Un : void 0;
  if (!s) {
    Ls("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = I(() => {
    const g = u(e);
    return o != null && o.value ? nu(o.value, g) : g;
  });
  return s(Nn, l), s(Pn, I(() => l.value.locale)), s(jn, I(() => l.value.namespace)), s(Vn, I(() => l.value.zIndex)), s(Qs, {
    size: I(() => l.value.size || "")
  }), (n || !Ae.value) && (Ae.value = l.value), l;
}, nu = (e, t) => {
  var n;
  const r = [.../* @__PURE__ */ new Set([...zt(e), ...zt(t)])], a = {};
  for (const o of r)
    a[o] = (n = t[o]) != null ? n : e[o];
  return a;
};
function ru(e) {
  let t;
  const n = x(!1), r = Rn({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function a(y) {
    r.text = y;
  }
  function o() {
    const y = r.parent, S = w.ns;
    if (!y.vLoadingAddClassList) {
      let m = y.getAttribute("loading-number");
      m = Number.parseInt(m) - 1, m ? y.setAttribute("loading-number", m.toString()) : (_e(y, S.bm("parent", "relative")), y.removeAttribute("loading-number")), _e(y, S.bm("parent", "hidden"));
    }
    s(), i.unmount();
  }
  function s() {
    var y, S;
    (S = (y = w.$el) == null ? void 0 : y.parentNode) == null || S.removeChild(w.$el);
  }
  function l() {
    var y;
    e.beforeClose && !e.beforeClose() || (n.value = !0, clearTimeout(t), t = window.setTimeout(g, 400), r.visible = !1, (y = e.closed) == null || y.call(e));
  }
  function g() {
    if (!n.value)
      return;
    const y = r.parent;
    n.value = !1, y.vLoadingAddClassList = void 0, o();
  }
  const d = Ke({
    name: "ElLoading",
    setup(y, { expose: S }) {
      const { ns: m, zIndex: f } = eu("loading");
      return S({
        ns: m,
        zIndex: f
      }), () => {
        const h = r.spinner || r.svg, c = ie("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...h ? { innerHTML: h } : {}
        }, [
          ie("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), C = r.text ? ie("p", { class: m.b("text") }, [r.text]) : void 0;
        return ie(Kn, {
          name: m.b("fade"),
          onAfterLeave: g
        }, {
          default: T(() => [
            Gt(P("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                m.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              ie("div", {
                class: m.b("spinner")
              }, [c, C])
            ]), [[Gn, r.visible]])
          ])
        });
      };
    }
  }), i = Hn(d), w = i.mount(document.createElement("div"));
  return {
    ...Yn(r),
    setText: a,
    removeElLoadingChild: s,
    close: l,
    handleAfterLeave: g,
    vm: w,
    get $el() {
      return w.$el;
    }
  };
}
let be;
const au = function(e = {}) {
  if (!qe)
    return;
  const t = ou(e);
  if (t.fullscreen && be)
    return be;
  const n = ru({
    ...t,
    closed: () => {
      var a;
      (a = t.closed) == null || a.call(t), t.fullscreen && (be = void 0);
    }
  });
  lu(t, t.parent, n), Ut(t, t.parent, n), t.parent.vLoadingAddClassList = () => Ut(t, t.parent, n);
  let r = t.parent.getAttribute("loading-number");
  return r ? r = `${Number.parseInt(r) + 1}` : r = "1", t.parent.setAttribute("loading-number", r), t.parent.appendChild(n.$el), He(() => n.visible.value = t.visible), t.fullscreen && (be = n), n;
}, ou = (e) => {
  var t, n, r, a;
  let o;
  return Ze(e.target) ? o = (t = document.querySelector(e.target)) != null ? t : document.body : o = e.target || document.body, {
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
}, lu = async (e, t, n) => {
  const { nextZIndex: r } = n.vm.zIndex || n.vm._.exposed.zIndex, a = {};
  if (e.fullscreen)
    n.originalPosition.value = de(document.body, "position"), n.originalOverflow.value = de(document.body, "overflow"), a.zIndex = r();
  else if (e.parent === document.body) {
    n.originalPosition.value = de(document.body, "position"), await He();
    for (const o of ["top", "left"]) {
      const s = o === "top" ? "scrollTop" : "scrollLeft";
      a[o] = `${e.target.getBoundingClientRect()[o] + document.body[s] + document.documentElement[s] - Number.parseInt(de(document.body, `margin-${o}`), 10)}px`;
    }
    for (const o of ["height", "width"])
      a[o] = `${e.target.getBoundingClientRect()[o]}px`;
  } else
    n.originalPosition.value = de(t, "position");
  for (const [o, s] of Object.entries(a))
    n.$el.style[o] = s;
}, Ut = (e, t, n) => {
  const r = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? _e(t, r.bm("parent", "relative")) : Dt(t, r.bm("parent", "relative")), e.fullscreen && e.lock ? Dt(t, r.bm("parent", "hidden")) : _e(t, r.bm("parent", "hidden"));
}, $e = Symbol("ElLoading"), Rt = (e, t) => {
  var n, r, a, o;
  const s = t.instance, l = (y) => Oe(t.value) ? t.value[y] : void 0, g = (y) => {
    const S = Ze(y) && (s == null ? void 0 : s[y]) || y;
    return S && x(S);
  }, d = (y) => g(l(y) || e.getAttribute(`element-loading-${mr(y)}`)), i = (n = l("fullscreen")) != null ? n : t.modifiers.fullscreen, w = {
    text: d("text"),
    svg: d("svg"),
    svgViewBox: d("svgViewBox"),
    spinner: d("spinner"),
    background: d("background"),
    customClass: d("customClass"),
    fullscreen: i,
    target: (r = l("target")) != null ? r : i ? void 0 : e,
    body: (a = l("body")) != null ? a : t.modifiers.body,
    lock: (o = l("lock")) != null ? o : t.modifiers.lock
  };
  e[$e] = {
    options: w,
    instance: au(w)
  };
}, su = (e, t) => {
  for (const n of Object.keys(t))
    Ge(t[n]) && (t[n].value = e[n]);
}, uu = {
  mounted(e, t) {
    t.value && Rt(e, t);
  },
  updated(e, t) {
    const n = e[$e];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Rt(e, t) : t.value && t.oldValue ? Oe(t.value) && su(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[$e]) == null || t.instance.close(), e[$e] = null;
  }
}, iu = {
  input: "请输入",
  select: "请选择",
  start: "开始",
  end: "结束",
  search: "搜索",
  reset: "重置"
}, cu = {
  input: "Please Input",
  select: "Please Select",
  start: "Start",
  end: "End",
  search: "Search",
  reset: "Reset"
}, du = {
  zh: iu,
  en: cu
}, fu = () => localStorage.getItem("language") || "zh", D = (e) => {
  var n;
  const t = fu();
  return ((n = du[t]) == null ? void 0 : n[e]) || e;
}, pu = { class: "v-filter" }, Ln = {
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
      const c = r.filter.filter((p) => p.required), C = {};
      return c.forEach((p) => {
        C[p.prop] = [
          { required: !0, message: p.message || `${p.label}不能为空` }
        ];
      }), C;
    }), o = x(), s = x({}), l = x([]), g = x(["date", "daterange", "month", "year", "monthrange"]), d = I(() => 24 / r.col);
    le(() => r.filter, (c) => {
      i(c);
    }, { deep: !0 });
    const i = (c = []) => {
      l.value = c.map((C) => ((C.initValue || C.initValue === 0) && (s.value[C.prop] = C.initValue), {
        ...C
      }));
    }, w = () => {
      s.value = {};
    }, y = (c, C) => {
      g.value.includes(C.scope) && (C.startKey && (s.value[C.startKey] = c && c.length > 1 ? c[0] : ""), C.endKey && (s.value[C.endKey] = c && c.length > 1 ? c[1] : ""));
    }, S = () => new Promise((c, C) => {
      o.value.validate((p) => {
        if (p) {
          const b = {};
          l.value.forEach((j) => {
            const me = j.filterProp || j.prop;
            j.startKey ? (b[j.startKey] = s.value[j.startKey], b[j.endKey] = s.value[j.endKey]) : b[me] = s.value[j.prop], j.format && typeof j.format == "function" && (b[me] = j.format(s.value[j.prop]));
          }), n.$emit("search", b), c();
        } else
          C();
      });
    }), m = () => {
      w(), n.$emit("reset");
    };
    return t({
      search: S,
      getCurrentFilter: () => s.value,
      setCurrentFilter: (c, C = !0) => {
        s.value = {
          ...c
        }, C && S();
      }
    }), Ye(() => {
      i(r.filter);
    }), (c, C) => (v(), E("div", pu, [
      P(u(Zn), null, {
        default: T(() => [
          P(u(Ht), {
            ref_key: "filterFormRef",
            ref: o,
            model: s.value,
            "label-width": e.labelWidth,
            rules: a.value
          }, {
            default: T(() => [
              P(u(ke), { gutter: 20 }, {
                default: T(() => [
                  (v(!0), E(F, null, k(l.value, (p) => (v(), $(u(re), {
                    span: d.value,
                    key: p.prop
                  }, {
                    default: T(() => [
                      P(u(Yt), {
                        label: p.label,
                        "label-width": p.labelWidth || e.labelWidth,
                        prop: p.prop
                      }, {
                        default: T(() => [
                          p.scope === "input" ? (v(), $(u(we), {
                            key: 0,
                            modelValue: s.value[p.prop],
                            "onUpdate:modelValue": (b) => s.value[p.prop] = b,
                            modelModifiers: { trim: !0 },
                            placeholder: p.placeholder || u(D)("input")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : O("", !0),
                          p.scope === "select" ? (v(), $(u(Wt), N({
                            key: 1,
                            modelValue: s.value[p.prop],
                            "onUpdate:modelValue": (b) => s.value[p.prop] = b,
                            placeholder: p.placeholder || u(D)("select"),
                            clearable: "",
                            filterable: ""
                          }, {
                            ...p
                          }, {
                            "filter-method": (b) => {
                              var j;
                              return (j = p.remoteMethod) == null ? void 0 : j.call(p, b, p);
                            },
                            onChange: function(b) {
                              p.onchange && p.onchange(b);
                            }
                          }), {
                            default: T(() => [
                              (v(!0), E(F, null, k(p.options || [], (b) => (v(), $(u(qt), {
                                key: b.value,
                                label: b.label,
                                value: b.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : O("", !0),
                          g.value.includes(p.scope) ? (v(), $(u(Zt), {
                            key: 2,
                            modelValue: s.value[p.prop],
                            "onUpdate:modelValue": (b) => s.value[p.prop] = b,
                            "value-format": p.format || "YYYY-MM-DD HH:mm:ss",
                            type: p.scope,
                            placeholder: p.placeholder || u(D)("select"),
                            "start-placeholder": u(D)("start"),
                            "end-placeholder": u(D)("end"),
                            clearable: "",
                            onChange: (b) => y(b, p)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "start-placeholder", "end-placeholder", "onChange"])) : O("", !0),
                          p.scope === "range" ? (v(), $(u(ke), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: T(() => [
                              P(u(re), { span: 11 }, {
                                default: T(() => [
                                  P(u(we), {
                                    modelValue: s.value[p.startKey],
                                    "onUpdate:modelValue": (b) => s.value[p.startKey] = b,
                                    placeholder: p.placeholder || u(D)("input"),
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024),
                              P(u(re), {
                                class: "line",
                                span: 2
                              }, {
                                default: T(() => [
                                  B("-")
                                ]),
                                _: 1
                              }),
                              P(u(re), { span: 11 }, {
                                default: T(() => [
                                  P(u(we), {
                                    modelValue: s.value[p.endKey],
                                    "onUpdate:modelValue": (b) => s.value[p.endKey] = b,
                                    placeholder: p.placeholder || u(D)("input"),
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : O("", !0),
                          p.scope === "cascader" ? (v(), $(u(Jn), {
                            key: 4,
                            modelValue: s.value[p.prop],
                            "onUpdate:modelValue": (b) => s.value[p.prop] = b,
                            options: p.options,
                            props: p.cascaderProps || { checkStrictly: !0, emitPath: !1 },
                            "collapse-tags": p.collapseTags,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "collapse-tags"])) : O("", !0)
                        ]),
                        _: 2
                      }, 1032, ["label", "label-width", "prop"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128)),
                  P(u(re), { span: d.value }, {
                    default: T(() => [
                      P(u(ae), {
                        type: "primary",
                        icon: u(Ds),
                        onClick: S
                      }, {
                        default: T(() => [
                          B(L(u(D)("search")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      P(u(ae), {
                        icon: u(Ms),
                        onClick: m
                      }, {
                        default: T(() => [
                          B(L(u(D)("reset")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (v(!0), E(F, null, k(e.btns, (p) => (v(), $(u(ae), {
                        key: p.text,
                        onClick: p.click
                      }, {
                        default: T(() => [
                          B(L(p.text), 1)
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
var gu = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function vu(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function yu() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function Kt(e, t, n) {
  const r = yu(), a = e - r, o = 20;
  let s = 0;
  t = typeof t > "u" ? 500 : t;
  var l = function() {
    s += o;
    var g = Math.easeInOutQuad(s, r, a, t);
    vu(g), s < t ? gu(l) : n && typeof n == "function" && n();
  };
  l();
}
const kn = {
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
    const t = e, n = x(10), r = x(t.page || 1), { proxy: a } = U();
    le(() => t.page, (l) => {
      r.value = l;
    });
    const o = (l) => {
      r.value * l > t.total && (r.value = 1), n.value = l, a.$emit("pagination", { pageNum: r.value, pageSize: l }), t.autoScroll && Kt(0, 800);
    }, s = (l) => {
      r.value = l, a.$emit("pagination", { pageNum: l, pageSize: n.value }), t.autoScroll && Kt(0, 800);
    };
    return (l, g) => (v(), E("div", {
      class: We([{ hidden: e.hidden }, "v-pagination"])
    }, [
      P(u(Xn), N({
        "current-page": r.value,
        layout: e.layout
      }, l.$attrs, {
        onSizeChange: o,
        onCurrentChange: s
      }), null, 16, ["current-page", "layout"])
    ], 2));
  }
}, hu = { key: 0 }, mu = { key: 1 }, bu = { key: 2 }, Ie = {
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
    },
    options: {
      type: Array,
      default: () => []
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
    const n = e, r = t, a = x(ze(n.row, n.col.prop));
    le(() => ze(n.row, n.col.prop), (g) => {
      a.value = g;
    });
    const o = () => {
      Vs(n.row, n.col.prop, a.value), n.col.change && n.col.change(n.row, a.value), r("update:row", n.row);
    }, s = (g, d) => d.find((w) => w.value === g) || {}, l = (g, d) => {
      const i = s(g, d);
      return (i == null ? void 0 : i.label) || g;
    };
    return (g, d) => (v(), E(F, null, [
      e.col.scope ? O("", !0) : (v(), E("div", hu, L(e.row[e.col.prop]), 1)),
      e.col.scope === "number-col" ? (v(), E("div", mu, L(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : O("", !0),
      e.col.scope === "render" && e.col.render ? (v(), E("div", bu, L(e.col.render(e.row, e.col.prop)), 1)) : O("", !0),
      ["textarea", "input"].includes(e.col.scope) ? (v(), $(u(we), N({
        key: 3,
        type: e.col.scope || "text"
      }, {
        ...Mt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : O("", !0),
      e.col.scope === "input-number" ? (v(), $(u(Qn), N({ key: 4 }, {
        ...Mt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[1] || (d[1] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "select" ? (v(), $(u(Wt), N({ key: 5 }, {
        ...e.col
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[2] || (d[2] = (i) => a.value = i),
        onChange: o
      }), {
        default: T(() => [
          (v(!0), E(F, null, k(e.options, (i) => (v(), $(u(qt), {
            key: i.value,
            label: i.label,
            value: i.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "tag" && l(e.row[e.col.prop], e.options) ? (v(), $(u(er), {
        key: 6,
        type: s(e.row[e.col.prop], e.options).type
      }, {
        default: T(() => [
          B(L(l(e.row[e.col.prop], e.options)), 1)
        ]),
        _: 1
      }, 8, ["type"])) : O("", !0),
      e.col.scope === "img" ? (v(), $(u(tr), {
        key: 7,
        src: a.value,
        fit: e.col.fit || "cover"
      }, null, 8, ["src", "fit"])) : O("", !0),
      ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (v(), $(u(Zt), N({ key: 8 }, {
        ...e.col
      }, {
        type: e.col.scope,
        modelValue: a.value,
        "onUpdate:modelValue": d[3] || (d[3] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : O("", !0),
      e.col.scope === "switch" ? (v(), $(u(nr), N({
        key: 9,
        modelValue: a.value,
        "onUpdate:modelValue": d[4] || (d[4] = (i) => a.value = i),
        onChange: o
      }, {
        ...e.col
      }), null, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "radio" ? (v(), $(u(rr), {
        key: 10,
        modelValue: a.value,
        "onUpdate:modelValue": d[5] || (d[5] = (i) => a.value = i),
        onChange: o
      }, {
        default: T(() => [
          (v(!0), E(F, null, k(e.options, (i) => (v(), $(u(Jt), {
            label: i.value,
            key: i.label
          }, {
            default: T(() => [
              B(L(i.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : O("", !0)
    ], 64));
  }
}, wu = (e, t = "拷贝成功") => {
  if (navigator.clipboard)
    navigator.clipboard.writeText(e), ct.success(t);
  else {
    const n = document.createElement("textarea");
    document.body.appendChild(n), n.style.position = "fixed", n.style.clip = "rect(0 0 0 0)", n.style.top = "10px", n.value = e, n.select(), document.execCommand("copy", !0), document.body.removeChild(n), ct.success(t);
  }
}, Re = (e = 32) => {
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = t.length;
  let r = "";
  for (let a = 0; a < e; a++)
    r += t.charAt(Math.floor(Math.random() * n));
  return r;
}, Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  copy: wu,
  randomStr: Re
}, Symbol.toStringTag, { value: "Module" })), Mn = {
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
    const n = e, { proxy: r } = U(), a = x(null), o = x(null), s = x(null), l = x(Re());
    le(() => n.columns, (m) => {
      l.value = Re();
    }, { deep: !0, immediate: !0 });
    const g = () => {
      const m = document.querySelector(".table-container .c-table");
      if (m) {
        const { top: f } = m.getBoundingClientRect();
        o.value = window.innerHeight - f - 50;
      }
    }, d = () => {
      s.value.clearSelection();
    }, i = () => {
      s.value.setCurrentRow();
    }, w = (m) => {
      a.value = m ? m.id : null, n.radio && n.radio(m);
    }, y = (m, f, h) => {
      r.$emit(m.event, f, h), r.$emit("btnClick", {
        btn: m,
        row: f,
        index: h
      });
    }, S = (m, f, h) => "if" in m ? typeof m.if == "function" ? m.if(f, h) : f[m.if] : m.render ? !!m.render(f, h) : !!m.label;
    return t({
      clearSelection: d,
      clearRadio: i
    }), Ye(() => {
      n.onSize && (window.addEventListener("resize", g), He(() => {
        g();
      }));
    }), Wn(() => {
      n.onSize && window.removeEventListener("resize", g);
    }), (m, f) => {
      const h = qn("v-table", !0);
      return v(), E("div", {
        class: We(["v-table", { pd: e.onAdd }])
      }, [
        (v(), $(u(ar), N({
          ref_key: "tableRef",
          ref: s,
          border: ""
        }, e.tableProps, {
          data: e.data,
          key: l.value,
          "highlight-current-row": !!e.radio,
          onCurrentChange: w,
          onSelectionChange: e.selection
        }), {
          default: T(() => [
            e.selection ? (v(), $(u(Ne), {
              key: 0,
              type: "selection",
              width: "40"
            })) : O("", !0),
            e.radio ? (v(), $(u(Ne), {
              key: 1,
              fixed: "left",
              width: "60"
            }, {
              header: T(() => [
                ye("div", {
                  class: "radio-header",
                  onClick: i
                }, "取消")
              ]),
              default: T(({ row: c }) => [
                P(u(Jt), {
                  modelValue: a.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (C) => a.value = C),
                  label: c.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : O("", !0),
            (v(!0), E(F, null, k(e.columns, (c) => (v(), $(u(Ne), N({
              key: c.prop,
              width: c.width
            }, c), {
              default: T(({ row: C, $index: p }) => [
                ["btn", "table"].includes(c.scope) ? O("", !0) : (v(), $(Ie, {
                  key: 0,
                  row: C,
                  col: c,
                  options: c.options || []
                }, null, 8, ["row", "col", "options"])),
                c.scope === "table" ? (v(), $(h, {
                  key: 1,
                  data: C[c.prop],
                  columns: c.options
                }, null, 8, ["data", "columns"])) : O("", !0),
                c.scope === "btn" ? (v(!0), E(F, { key: 2 }, k(c.options || [], (b) => (v(), E(F, {
                  key: b.event
                }, [
                  S(b, C, p) ? (v(), $(u(ae), N({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: b.type || "primary",
                    onClick: (j) => y(b, C, p)
                  }, {
                    ...b
                  }), {
                    default: T(() => [
                      B(L(b.label || (b.render ? b.render(C, p) : "")), 1)
                    ]),
                    _: 2
                  }, 1040, ["type", "onClick"])) : O("", !0)
                ], 64))), 128)) : O("", !0)
              ]),
              _: 2
            }, 1040, ["width"]))), 128))
          ]),
          _: 1
        }, 16, ["data", "highlight-current-row", "onSelectionChange"])),
        e.onAdd ? (v(), E("div", {
          key: 0,
          class: "add-btn",
          onClick: f[1] || (f[1] = (...c) => e.onAdd && e.onAdd(...c))
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
    const { GET_LIST: n, GET_TOTAL: r, PAGE_NUM_KEY: a, PAGE_SIZE_KEY: o } = pr(), { proxy: s } = U(), l = e, g = x([]), d = x({}), i = x(0), w = x({}), y = x({}), S = x(null), m = () => {
      var V;
      (V = S.value) == null || V.clearRadio();
    }, f = () => {
      var V;
      (V = S.value) == null || V.clearSelection();
    }, h = ({ btn: V, row: G, index: H }) => {
      s.$emit(V.event, G, H);
    }, c = x(!1), C = async (V = {}) => {
      if (l.getList) {
        c.value = !0;
        try {
          d.value = {
            [a]: w.value.pageNum || 1,
            [o]: w.value.pageSize || 10,
            ...V
          };
          const G = await l.getList(d.value);
          let H = n(G);
          l.formatList && (H = l.formatList(H)), g.value = H.map((ne, Ve) => ({
            ...ne,
            index: Ve + 1 + (d.value[a] - 1) * d.value[o]
          })), i.value = r(G);
        } finally {
          c.value = !1;
        }
      }
    }, p = (V) => {
      w.value = V, f(), m(), C({
        ...V,
        ...y.value
      });
    }, b = async () => {
      f(), m(), await C({
        ...w.value,
        ...y.value
      });
    }, j = (V) => {
      w.value.pageNum = 1, y.value = V, b(), s.$emit("search", V);
    }, me = () => {
      ue.value.search();
    }, ue = x(), zn = () => ue.value.getCurrentFilter();
    return Ye(() => {
      l.init && (l.showFilter ? ue.value.search() : C());
    }), t({
      refreshList: b,
      clearSelection: f,
      clearRadio: m,
      search: me,
      getCurrentFilter: zn,
      filterRef: ue
    }), (V, G) => {
      const H = uu;
      return v(), E("div", {
        class: We(["v-page", { pd: l.table && l.table.onAdd }])
      }, [
        e.showFilter ? (v(), $(Ln, {
          key: 0,
          ref_key: "filterRef",
          ref: ue,
          filter: e.filter,
          "label-width": e.filterLabelWidth,
          btns: e.filterBtns,
          col: e.filterCol,
          onSearch: j,
          onReset: G[0] || (G[0] = () => j({}))
        }, null, 8, ["filter", "label-width", "btns", "col"])) : O("", !0),
        ye("div", Tu, [
          (v(!0), E(F, null, k(e.btns, (ne, Ve) => (v(), $(u(ae), {
            key: Ve,
            type: ne.type || "primary",
            onClick: (Dn) => ne.click && ne.click(Dn)
          }, {
            default: T(() => [
              B(L(ne.label), 1)
            ]),
            _: 2
          }, 1032, ["type", "onClick"]))), 128)),
          xe(V.$slots, "btn")
        ]),
        Gt((v(), E("div", Cu, [
          P(Mn, N({
            ref_key: "tableRef",
            ref: S,
            data: g.value,
            columns: e.columns,
            selection: e.selection,
            radio: e.radio
          }, {
            ...l.table
          }, { onBtnClick: h }), null, 16, ["data", "columns", "selection", "radio"])
        ])), [
          [H, c.value]
        ]),
        e.showPagination ? (v(), $(kn, {
          key: 1,
          page: w.value.pageNum,
          total: i.value,
          onPagination: p
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
    const r = e, a = n, o = x({ ...r.value }), s = x();
    le(() => r.value, () => {
      l();
    }, { deep: !0 });
    const l = () => {
      o.value = {
        ...r.value
      };
    }, g = (i) => {
      a("update:value", i);
    };
    return t({
      validate: () => new Promise((i, w) => {
        s.value.validate((y) => {
          y ? i(o.value) : w();
        });
      }),
      reset: l,
      form: o
    }), (i, w) => (v(), $(u(Ht), N({
      class: "c-form",
      ref_key: "formRef",
      ref: s,
      model: o.value,
      rules: e.rules,
      "label-width": "130px"
    }, i.$attrs), {
      default: T(() => [
        P(u(ke), { gutter: 20 }, {
          default: T(() => [
            (v(!0), E(F, null, k(e.list, (y) => (v(), $(u(re), {
              span: y.colSpan || 24 / e.col,
              key: y.prop
            }, {
              default: T(() => [
                P(u(Yt), {
                  label: y.label,
                  prop: y.prop
                }, {
                  default: T(() => [
                    P(Ie, {
                      row: o.value,
                      col: y,
                      "onUpdate:row": g
                    }, null, 8, ["row", "col"]),
                    xe(i.$slots, y.prop)
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
  const t = U(), n = x(e.modelValue);
  return le(() => e.modelValue, (o) => {
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
    return (o, s) => (v(), $(u(or), N({
      modelValue: u(n),
      "onUpdate:modelValue": s[0] || (s[0] = (l) => Ge(n) ? n.value = l : null),
      title: e.title,
      "close-on-click-modal": !1,
      "before-close": u(a)
    }, e.dialogProps), {
      footer: T(() => [
        ye("div", _u, [
          P(u(ae), { onClick: u(r) }, {
            default: T(() => [
              B("Cancel")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: T(() => [
        P(u(lr), N({ class: "v-detail" }, e.descProps), {
          default: T(() => [
            (v(!0), E(F, null, k(e.columns, (l) => (v(), $(u(sr), {
              label: l.label,
              span: l.span,
              key: l.prop
            }, {
              default: T(() => [
                P(Ie, {
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
}, ju = {
  install(e, t = {}) {
    const { config: n } = t;
    n && fr(n, e), e.component("VPage", $u), e.component("VFilter", Ln), e.component("VTable", Mn), e.component("VElement", Ie), e.component("VPagination", kn), e.component("VForm", xu), e.component("VDetail", Au);
  }
};
export {
  Au as VDetail,
  Ie as VElement,
  Ln as VFilter,
  xu as VForm,
  kn as VPagination,
  Mn as VTable,
  ju as default,
  fr as setConfig,
  Pu as utils
};
