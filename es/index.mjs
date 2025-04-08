import { inject as he, defineComponent as Ke, openBlock as v, createElementBlock as E, createElementVNode as me, warn as Un, ref as S, computed as V, unref as u, isRef as Ge, getCurrentInstance as U, provide as Kn, reactive as Gn, h as de, Transition as Hn, withCtx as T, withDirectives as Gt, createVNode as P, vShow as Yn, createApp as Wn, toRefs as qn, nextTick as He, watch as se, onMounted as Ye, Fragment as F, renderList as L, createBlock as C, createCommentVNode as O, mergeProps as N, createTextVNode as R, toDisplayString as k, normalizeClass as We, onUnmounted as Zn, resolveComponent as Jn, renderSlot as oe, normalizeProps as Ht, guardReactiveProps as Yt, createSlots as Xn } from "vue";
import { ElCard as Qn, ElForm as Wt, ElRow as ke, ElCol as re, ElFormItem as qt, ElInput as $e, ElSelect as Zt, ElOption as Jt, ElDatePicker as Xt, ElCascader as er, ElButton as ae, ElPagination as tr, ElInputNumber as nr, ElTag as rr, ElImage as ar, ElSwitch as or, ElRadioGroup as lr, ElRadio as Qt, ElMessage as ct, ElTable as sr, ElTableColumn as Ne, ElDialog as ur, ElDescriptions as ir, ElDescriptionsItem as cr } from "element-plus";
let dr = "pageSize", fr = "pageNum", pr = (e) => e.data, gr = (e) => e.total;
function vr(e, t) {
  t && t.provide("vxe-page", e);
}
function yr() {
  return he("vxe-page", {
    PAGE_SIZE_KEY: dr,
    PAGE_NUM_KEY: fr,
    GET_LIST: pr,
    GET_TOTAL: gr
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
const hr = Object.prototype.hasOwnProperty, ft = (e, t) => hr.call(e, t), Ze = (e) => typeof e == "string", Ee = (e) => e !== null && typeof e == "object", en = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, mr = /-(\w)/g, br = en((e) => e.replace(mr, (t, n) => n ? n.toUpperCase() : "")), wr = /\B([A-Z])/g, Tr = en(
  (e) => e.replace(wr, "-$1").toLowerCase()
);
var tn = typeof global == "object" && global && global.Object === Object && global, $r = typeof self == "object" && self && self.Object === Object && self, z = tn || $r || Function("return this")(), M = z.Symbol, nn = Object.prototype, Cr = nn.hasOwnProperty, Sr = nn.toString, fe = M ? M.toStringTag : void 0;
function xr(e) {
  var t = Cr.call(e, fe), n = e[fe];
  try {
    e[fe] = void 0;
    var r = !0;
  } catch {
  }
  var a = Sr.call(e);
  return r && (t ? e[fe] = n : delete e[fe]), a;
}
var _r = Object.prototype, Ar = _r.toString;
function Or(e) {
  return Ar.call(e);
}
var Er = "[object Null]", Pr = "[object Undefined]", pt = M ? M.toStringTag : void 0;
function X(e) {
  return e == null ? e === void 0 ? Pr : Er : pt && pt in Object(e) ? xr(e) : Or(e);
}
function Q(e) {
  return e != null && typeof e == "object";
}
var jr = "[object Symbol]";
function Je(e) {
  return typeof e == "symbol" || Q(e) && X(e) == jr;
}
function rn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var ee = Array.isArray, Ir = 1 / 0, gt = M ? M.prototype : void 0, vt = gt ? gt.toString : void 0;
function an(e) {
  if (typeof e == "string")
    return e;
  if (ee(e))
    return rn(e, an) + "";
  if (Je(e))
    return vt ? vt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ir ? "-0" : t;
}
function Z(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Vr(e) {
  return e;
}
var Nr = "[object AsyncFunction]", Fr = "[object Function]", Lr = "[object GeneratorFunction]", kr = "[object Proxy]";
function on(e) {
  if (!Z(e))
    return !1;
  var t = X(e);
  return t == Fr || t == Lr || t == Nr || t == kr;
}
var Fe = z["__core-js_shared__"], yt = function() {
  var e = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Mr(e) {
  return !!yt && yt in e;
}
var zr = Function.prototype, Dr = zr.toString;
function te(e) {
  if (e != null) {
    try {
      return Dr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Br = /[\\^$.*+?()[\]{}|]/g, Rr = /^\[object .+?Constructor\]$/, Ur = Function.prototype, Kr = Object.prototype, Gr = Ur.toString, Hr = Kr.hasOwnProperty, Yr = RegExp(
  "^" + Gr.call(Hr).replace(Br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wr(e) {
  if (!Z(e) || Mr(e))
    return !1;
  var t = on(e) ? Yr : Rr;
  return t.test(te(e));
}
function qr(e, t) {
  return e == null ? void 0 : e[t];
}
function ne(e, t) {
  var n = qr(e, t);
  return Wr(n) ? n : void 0;
}
var Me = ne(z, "WeakMap"), ht = Object.create, Zr = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Z(t))
      return {};
    if (ht)
      return ht(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Jr(e, t, n) {
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
function Xr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Qr = 800, ea = 16, ta = Date.now;
function na(e) {
  var t = 0, n = 0;
  return function() {
    var r = ta(), a = ea - (r - n);
    if (n = r, a > 0) {
      if (++t >= Qr)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ra(e) {
  return function() {
    return e;
  };
}
var _e = function() {
  try {
    var e = ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), aa = _e ? function(e, t) {
  return _e(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ra(t),
    writable: !0
  });
} : Vr;
const oa = aa;
var la = na(oa);
function sa(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var ua = 9007199254740991, ia = /^(?:0|[1-9]\d*)$/;
function ln(e, t) {
  var n = typeof e;
  return t = t ?? ua, !!t && (n == "number" || n != "symbol" && ia.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function sn(e, t, n) {
  t == "__proto__" && _e ? _e(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function un(e, t) {
  return e === t || e !== e && t !== t;
}
var ca = Object.prototype, da = ca.hasOwnProperty;
function Xe(e, t, n) {
  var r = e[t];
  (!(da.call(e, t) && un(r, n)) || n === void 0 && !(t in e)) && sn(e, t, n);
}
function be(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var l = t[o], g = r ? r(n[l], e[l], l, n, e) : void 0;
    g === void 0 && (g = e[l]), a ? sn(n, l, g) : Xe(n, l, g);
  }
  return n;
}
var mt = Math.max;
function fa(e, t, n) {
  return t = mt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = mt(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(s), Jr(e, this, l);
  };
}
var pa = 9007199254740991;
function cn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pa;
}
function dn(e) {
  return e != null && cn(e.length) && !on(e);
}
var ga = Object.prototype;
function Qe(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ga;
  return e === n;
}
function va(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ya = "[object Arguments]";
function bt(e) {
  return Q(e) && X(e) == ya;
}
var fn = Object.prototype, ha = fn.hasOwnProperty, ma = fn.propertyIsEnumerable, pn = bt(/* @__PURE__ */ function() {
  return arguments;
}()) ? bt : function(e) {
  return Q(e) && ha.call(e, "callee") && !ma.call(e, "callee");
};
function ba() {
  return !1;
}
var gn = typeof exports == "object" && exports && !exports.nodeType && exports, wt = gn && typeof module == "object" && module && !module.nodeType && module, wa = wt && wt.exports === gn, Tt = wa ? z.Buffer : void 0, Ta = Tt ? Tt.isBuffer : void 0, vn = Ta || ba, $a = "[object Arguments]", Ca = "[object Array]", Sa = "[object Boolean]", xa = "[object Date]", _a = "[object Error]", Aa = "[object Function]", Oa = "[object Map]", Ea = "[object Number]", Pa = "[object Object]", ja = "[object RegExp]", Ia = "[object Set]", Va = "[object String]", Na = "[object WeakMap]", Fa = "[object ArrayBuffer]", La = "[object DataView]", ka = "[object Float32Array]", Ma = "[object Float64Array]", za = "[object Int8Array]", Da = "[object Int16Array]", Ba = "[object Int32Array]", Ra = "[object Uint8Array]", Ua = "[object Uint8ClampedArray]", Ka = "[object Uint16Array]", Ga = "[object Uint32Array]", A = {};
A[ka] = A[Ma] = A[za] = A[Da] = A[Ba] = A[Ra] = A[Ua] = A[Ka] = A[Ga] = !0;
A[$a] = A[Ca] = A[Fa] = A[Sa] = A[La] = A[xa] = A[_a] = A[Aa] = A[Oa] = A[Ea] = A[Pa] = A[ja] = A[Ia] = A[Va] = A[Na] = !1;
function Ha(e) {
  return Q(e) && cn(e.length) && !!A[X(e)];
}
function et(e) {
  return function(t) {
    return e(t);
  };
}
var yn = typeof exports == "object" && exports && !exports.nodeType && exports, ge = yn && typeof module == "object" && module && !module.nodeType && module, Ya = ge && ge.exports === yn, Le = Ya && tn.process, le = function() {
  try {
    var e = ge && ge.require && ge.require("util").types;
    return e || Le && Le.binding && Le.binding("util");
  } catch {
  }
}(), $t = le && le.isTypedArray, Wa = $t ? et($t) : Ha, qa = Object.prototype, Za = qa.hasOwnProperty;
function hn(e, t) {
  var n = ee(e), r = !n && pn(e), a = !n && !r && vn(e), o = !n && !r && !a && Wa(e), s = n || r || a || o, l = s ? va(e.length, String) : [], g = l.length;
  for (var d in e)
    (t || Za.call(e, d)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    ln(d, g))) && l.push(d);
  return l;
}
function mn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ja = mn(Object.keys, Object), Xa = Object.prototype, Qa = Xa.hasOwnProperty;
function eo(e) {
  if (!Qe(e))
    return Ja(e);
  var t = [];
  for (var n in Object(e))
    Qa.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function tt(e) {
  return dn(e) ? hn(e) : eo(e);
}
function to(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var no = Object.prototype, ro = no.hasOwnProperty;
function ao(e) {
  if (!Z(e))
    return to(e);
  var t = Qe(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !ro.call(e, r)) || n.push(r);
  return n;
}
function nt(e) {
  return dn(e) ? hn(e, !0) : ao(e);
}
var oo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lo = /^\w*$/;
function so(e, t) {
  if (ee(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Je(e) ? !0 : lo.test(e) || !oo.test(e) || t != null && e in Object(t);
}
var ve = ne(Object, "create");
function uo() {
  this.__data__ = ve ? ve(null) : {}, this.size = 0;
}
function io(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var co = "__lodash_hash_undefined__", fo = Object.prototype, po = fo.hasOwnProperty;
function go(e) {
  var t = this.__data__;
  if (ve) {
    var n = t[e];
    return n === co ? void 0 : n;
  }
  return po.call(t, e) ? t[e] : void 0;
}
var vo = Object.prototype, yo = vo.hasOwnProperty;
function ho(e) {
  var t = this.__data__;
  return ve ? t[e] !== void 0 : yo.call(t, e);
}
var mo = "__lodash_hash_undefined__";
function bo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ve && t === void 0 ? mo : t, this;
}
function J(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
J.prototype.clear = uo;
J.prototype.delete = io;
J.prototype.get = go;
J.prototype.has = ho;
J.prototype.set = bo;
function wo() {
  this.__data__ = [], this.size = 0;
}
function Pe(e, t) {
  for (var n = e.length; n--; )
    if (un(e[n][0], t))
      return n;
  return -1;
}
var To = Array.prototype, $o = To.splice;
function Co(e) {
  var t = this.__data__, n = Pe(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : $o.call(t, n, 1), --this.size, !0;
}
function So(e) {
  var t = this.__data__, n = Pe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xo(e) {
  return Pe(this.__data__, e) > -1;
}
function _o(e, t) {
  var n = this.__data__, r = Pe(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function K(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
K.prototype.clear = wo;
K.prototype.delete = Co;
K.prototype.get = So;
K.prototype.has = xo;
K.prototype.set = _o;
var ye = ne(z, "Map");
function Ao() {
  this.size = 0, this.__data__ = {
    hash: new J(),
    map: new (ye || K)(),
    string: new J()
  };
}
function Oo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function je(e, t) {
  var n = e.__data__;
  return Oo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Eo(e) {
  var t = je(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Po(e) {
  return je(this, e).get(e);
}
function jo(e) {
  return je(this, e).has(e);
}
function Io(e, t) {
  var n = je(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function G(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
G.prototype.clear = Ao;
G.prototype.delete = Eo;
G.prototype.get = Po;
G.prototype.has = jo;
G.prototype.set = Io;
var Vo = "Expected a function";
function rt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Vo);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, r);
    return n.cache = o.set(a, s) || o, s;
  };
  return n.cache = new (rt.Cache || G)(), n;
}
rt.Cache = G;
var No = 500;
function Fo(e) {
  var t = rt(e, function(r) {
    return n.size === No && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Lo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ko = /\\(\\)?/g, Mo = Fo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lo, function(n, r, a, o) {
    t.push(a ? o.replace(ko, "$1") : r || n);
  }), t;
});
function zo(e) {
  return e == null ? "" : an(e);
}
function Ie(e, t) {
  return ee(e) ? e : so(e, t) ? [e] : Mo(zo(e));
}
var Do = 1 / 0;
function at(e) {
  if (typeof e == "string" || Je(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Do ? "-0" : t;
}
function bn(e, t) {
  t = Ie(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[at(t[n++])];
  return n && n == r ? e : void 0;
}
function ze(e, t, n) {
  var r = e == null ? void 0 : bn(e, t);
  return r === void 0 ? n : r;
}
function ot(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var Ct = M ? M.isConcatSpreadable : void 0;
function Bo(e) {
  return ee(e) || pn(e) || !!(Ct && e && e[Ct]);
}
function wn(e, t, n, r, a) {
  var o = -1, s = e.length;
  for (n || (n = Bo), a || (a = []); ++o < s; ) {
    var l = e[o];
    t > 0 && n(l) ? t > 1 ? wn(l, t - 1, n, r, a) : ot(a, l) : r || (a[a.length] = l);
  }
  return a;
}
function Ro(e) {
  var t = e == null ? 0 : e.length;
  return t ? wn(e, 1) : [];
}
function Uo(e) {
  return la(fa(e, void 0, Ro), e + "");
}
var lt = mn(Object.getPrototypeOf, Object), Ko = "[object Object]", Go = Function.prototype, Ho = Object.prototype, Tn = Go.toString, Yo = Ho.hasOwnProperty, Wo = Tn.call(Object);
function qo(e) {
  if (!Q(e) || X(e) != Ko)
    return !1;
  var t = lt(e);
  if (t === null)
    return !0;
  var n = Yo.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Tn.call(n) == Wo;
}
function Zo(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = e[r + t];
  return o;
}
function Jo() {
  this.__data__ = new K(), this.size = 0;
}
function Xo(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Qo(e) {
  return this.__data__.get(e);
}
function el(e) {
  return this.__data__.has(e);
}
var tl = 200;
function nl(e, t) {
  var n = this.__data__;
  if (n instanceof K) {
    var r = n.__data__;
    if (!ye || r.length < tl - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new G(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ue(e) {
  var t = this.__data__ = new K(e);
  this.size = t.size;
}
ue.prototype.clear = Jo;
ue.prototype.delete = Xo;
ue.prototype.get = Qo;
ue.prototype.has = el;
ue.prototype.set = nl;
function rl(e, t) {
  return e && be(t, tt(t), e);
}
function al(e, t) {
  return e && be(t, nt(t), e);
}
var $n = typeof exports == "object" && exports && !exports.nodeType && exports, St = $n && typeof module == "object" && module && !module.nodeType && module, ol = St && St.exports === $n, xt = ol ? z.Buffer : void 0, _t = xt ? xt.allocUnsafe : void 0;
function ll(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = _t ? _t(n) : new e.constructor(n);
  return e.copy(r), r;
}
function sl(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[a++] = s);
  }
  return o;
}
function Cn() {
  return [];
}
var ul = Object.prototype, il = ul.propertyIsEnumerable, At = Object.getOwnPropertySymbols, st = At ? function(e) {
  return e == null ? [] : (e = Object(e), sl(At(e), function(t) {
    return il.call(e, t);
  }));
} : Cn;
function cl(e, t) {
  return be(e, st(e), t);
}
var dl = Object.getOwnPropertySymbols, fl = dl ? function(e) {
  for (var t = []; e; )
    ot(t, st(e)), e = lt(e);
  return t;
} : Cn;
const Sn = fl;
function pl(e, t) {
  return be(e, Sn(e), t);
}
function xn(e, t, n) {
  var r = t(e);
  return ee(e) ? r : ot(r, n(e));
}
function gl(e) {
  return xn(e, tt, st);
}
function _n(e) {
  return xn(e, nt, Sn);
}
var De = ne(z, "DataView"), Be = ne(z, "Promise"), Re = ne(z, "Set"), Ot = "[object Map]", vl = "[object Object]", Et = "[object Promise]", Pt = "[object Set]", jt = "[object WeakMap]", It = "[object DataView]", yl = te(De), hl = te(ye), ml = te(Be), bl = te(Re), wl = te(Me), q = X;
(De && q(new De(new ArrayBuffer(1))) != It || ye && q(new ye()) != Ot || Be && q(Be.resolve()) != Et || Re && q(new Re()) != Pt || Me && q(new Me()) != jt) && (q = function(e) {
  var t = X(e), n = t == vl ? e.constructor : void 0, r = n ? te(n) : "";
  if (r)
    switch (r) {
      case yl:
        return It;
      case hl:
        return Ot;
      case ml:
        return Et;
      case bl:
        return Pt;
      case wl:
        return jt;
    }
  return t;
});
const ut = q;
var Tl = Object.prototype, $l = Tl.hasOwnProperty;
function Cl(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && $l.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Vt = z.Uint8Array;
function it(e) {
  var t = new e.constructor(e.byteLength);
  return new Vt(t).set(new Vt(e)), t;
}
function Sl(e, t) {
  var n = t ? it(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var xl = /\w*$/;
function _l(e) {
  var t = new e.constructor(e.source, xl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Nt = M ? M.prototype : void 0, Ft = Nt ? Nt.valueOf : void 0;
function Al(e) {
  return Ft ? Object(Ft.call(e)) : {};
}
function Ol(e, t) {
  var n = t ? it(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var El = "[object Boolean]", Pl = "[object Date]", jl = "[object Map]", Il = "[object Number]", Vl = "[object RegExp]", Nl = "[object Set]", Fl = "[object String]", Ll = "[object Symbol]", kl = "[object ArrayBuffer]", Ml = "[object DataView]", zl = "[object Float32Array]", Dl = "[object Float64Array]", Bl = "[object Int8Array]", Rl = "[object Int16Array]", Ul = "[object Int32Array]", Kl = "[object Uint8Array]", Gl = "[object Uint8ClampedArray]", Hl = "[object Uint16Array]", Yl = "[object Uint32Array]";
function Wl(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case kl:
      return it(e);
    case El:
    case Pl:
      return new r(+e);
    case Ml:
      return Sl(e, n);
    case zl:
    case Dl:
    case Bl:
    case Rl:
    case Ul:
    case Kl:
    case Gl:
    case Hl:
    case Yl:
      return Ol(e, n);
    case jl:
      return new r();
    case Il:
    case Fl:
      return new r(e);
    case Vl:
      return _l(e);
    case Nl:
      return new r();
    case Ll:
      return Al(e);
  }
}
function ql(e) {
  return typeof e.constructor == "function" && !Qe(e) ? Zr(lt(e)) : {};
}
var Zl = "[object Map]";
function Jl(e) {
  return Q(e) && ut(e) == Zl;
}
var Lt = le && le.isMap, Xl = Lt ? et(Lt) : Jl, Ql = "[object Set]";
function es(e) {
  return Q(e) && ut(e) == Ql;
}
var kt = le && le.isSet, ts = kt ? et(kt) : es, ns = 1, rs = 2, as = 4, An = "[object Arguments]", os = "[object Array]", ls = "[object Boolean]", ss = "[object Date]", us = "[object Error]", On = "[object Function]", is = "[object GeneratorFunction]", cs = "[object Map]", ds = "[object Number]", En = "[object Object]", fs = "[object RegExp]", ps = "[object Set]", gs = "[object String]", vs = "[object Symbol]", ys = "[object WeakMap]", hs = "[object ArrayBuffer]", ms = "[object DataView]", bs = "[object Float32Array]", ws = "[object Float64Array]", Ts = "[object Int8Array]", $s = "[object Int16Array]", Cs = "[object Int32Array]", Ss = "[object Uint8Array]", xs = "[object Uint8ClampedArray]", _s = "[object Uint16Array]", As = "[object Uint32Array]", _ = {};
_[An] = _[os] = _[hs] = _[ms] = _[ls] = _[ss] = _[bs] = _[ws] = _[Ts] = _[$s] = _[Cs] = _[cs] = _[ds] = _[En] = _[fs] = _[ps] = _[gs] = _[vs] = _[Ss] = _[xs] = _[_s] = _[As] = !0;
_[us] = _[On] = _[ys] = !1;
function Ce(e, t, n, r, a, o) {
  var s, l = t & ns, g = t & rs, d = t & as;
  if (n && (s = a ? n(e, r, a, o) : n(e)), s !== void 0)
    return s;
  if (!Z(e))
    return e;
  var i = ee(e);
  if (i) {
    if (s = Cl(e), !l)
      return Xr(e, s);
  } else {
    var w = ut(e), y = w == On || w == is;
    if (vn(e))
      return ll(e, l);
    if (w == En || w == An || y && !a) {
      if (s = g || y ? {} : ql(e), !l)
        return g ? pl(e, al(s, e)) : cl(e, rl(s, e));
    } else {
      if (!_[w])
        return a ? e : {};
      s = Wl(e, w, l);
    }
  }
  o || (o = new ue());
  var x = o.get(e);
  if (x)
    return x;
  o.set(e, s), ts(e) ? e.forEach(function(h) {
    s.add(Ce(h, t, n, h, e, o));
  }) : Xl(e) && e.forEach(function(h, c) {
    s.set(c, Ce(h, t, n, c, e, o));
  });
  var m = d ? g ? _n : gl : g ? nt : tt, f = i ? void 0 : m(e);
  return sa(f || e, function(h, c) {
    f && (c = h, h = e[c]), Xe(s, c, Ce(h, t, n, c, e, o));
  }), s;
}
function Os(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Es(e, t) {
  return t.length < 2 ? e : bn(e, Zo(t, 0, -1));
}
function Ps(e, t) {
  return t = Ie(t, e), e = Es(e, t), e == null || delete e[at(Os(t))];
}
function js(e) {
  return qo(e) ? void 0 : e;
}
var Is = 1, Vs = 2, Ns = 4, Mt = Uo(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = rn(t, function(o) {
    return o = Ie(o, e), r || (r = o.length > 1), o;
  }), be(e, _n(e), n), r && (n = Ce(n, Is | Vs | Ns, js));
  for (var a = t.length; a--; )
    Ps(n, t[a]);
  return n;
});
function Fs(e, t, n, r) {
  if (!Z(e))
    return e;
  t = Ie(t, e);
  for (var a = -1, o = t.length, s = o - 1, l = e; l != null && ++a < o; ) {
    var g = at(t[a]), d = n;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (a != s) {
      var i = l[g];
      d = r ? r(i, g, l) : void 0, d === void 0 && (d = Z(i) ? i : ln(t[a + 1]) ? [] : {});
    }
    Xe(l, g, d), l = l[g];
  }
  return e;
}
function Ls(e, t, n) {
  return e == null ? e : Fs(e, t, n);
}
const ks = (e) => typeof e == "number", zt = (e) => Object.keys(e);
class Ms extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function zs(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ze(e) ? new Ms(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Pn = (e = "") => e.split(" ").filter((t) => !!t.trim()), Dt = (e, t) => {
  !e || !t.trim() || e.classList.add(...Pn(t));
}, Ae = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Pn(t));
}, pe = (e, t) => {
  var n;
  if (!qe || !e || !t)
    return "";
  let r = br(t);
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
var Ds = /* @__PURE__ */ Ke({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, n) => (v(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Bs = Ds, Rs = /* @__PURE__ */ Ke({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, n) => (v(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), Us = Rs;
const jn = "__epPropKey", Ks = (e) => Ee(e) && !!e[jn], Gs = (e, t) => {
  if (!Ee(e) || Ks(e))
    return e;
  const { values: n, required: r, default: a, type: o, validator: s } = e, g = {
    type: o,
    required: !!r,
    validator: n || s ? (d) => {
      let i = !1, w = [];
      if (n && (w = Array.from(n), ft(e, "default") && w.push(a), i || (i = w.includes(d))), s && (i || (i = s(d))), !i && w.length > 0) {
        const y = [...new Set(w)].map((x) => JSON.stringify(x)).join(", ");
        Un(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(d)}.`);
      }
      return i;
    } : void 0,
    [jn]: !0
  };
  return ft(e, "default") && (g.default = a), g;
}, Hs = ["", "default", "small", "large"];
var Ys = {
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
const Ws = (e) => (t, n) => qs(t, n, u(e)), qs = (e, t, n) => ze(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var o;
  return `${(o = t == null ? void 0 : t[a]) != null ? o : `{${a}}`}`;
}), Zs = (e) => {
  const t = V(() => u(e).name), n = Ge(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Ws(e)
  };
}, In = Symbol("localeContextKey"), Js = (e) => {
  const t = e || he(In, S());
  return Zs(V(() => t.value || Ys));
}, Se = "el", Xs = "is-", W = (e, t, n, r, a) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), a && (o += `--${a}`), o;
}, Vn = Symbol("namespaceContextKey"), Qs = (e) => {
  const t = e || (U() ? he(Vn, S(Se)) : S(Se));
  return V(() => u(t) || Se);
}, eu = (e, t) => {
  const n = Qs(t);
  return {
    namespace: n,
    b: (f = "") => W(n.value, e, f, "", ""),
    e: (f) => f ? W(n.value, e, "", f, "") : "",
    m: (f) => f ? W(n.value, e, "", "", f) : "",
    be: (f, h) => f && h ? W(n.value, e, f, h, "") : "",
    em: (f, h) => f && h ? W(n.value, e, "", f, h) : "",
    bm: (f, h) => f && h ? W(n.value, e, f, "", h) : "",
    bem: (f, h, c) => f && h && c ? W(n.value, e, f, h, c) : "",
    is: (f, ...h) => {
      const c = h.length >= 1 ? h[0] : !0;
      return f && c ? `${Xs}${f}` : "";
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
}, Bt = S(0), Nn = 2e3, Fn = Symbol("zIndexContextKey"), tu = (e) => {
  const t = e || (U() ? he(Fn, void 0) : void 0), n = V(() => {
    const o = u(t);
    return ks(o) ? o : Nn;
  }), r = V(() => n.value + Bt.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Bt.value++, r.value)
  };
};
Gs({
  type: String,
  values: Hs,
  required: !1
});
const nu = Symbol("size"), Ln = Symbol(), Oe = S();
function kn(e, t = void 0) {
  const n = U() ? he(Ln, Oe) : Oe;
  return e ? V(() => {
    var r, a;
    return (a = (r = n.value) == null ? void 0 : r[e]) != null ? a : t;
  }) : n;
}
function ru(e, t) {
  const n = kn(), r = eu(e, V(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Se;
  })), a = Js(V(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), o = tu(V(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Nn;
  })), s = V(() => {
    var l;
    return u(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return au(V(() => u(n) || {})), {
    ns: r,
    locale: a,
    zIndex: o,
    size: s
  };
}
const au = (e, t, n = !1) => {
  var r;
  const a = !!U(), o = a ? kn() : void 0, s = (r = t == null ? void 0 : t.provide) != null ? r : a ? Kn : void 0;
  if (!s) {
    zs("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = V(() => {
    const g = u(e);
    return o != null && o.value ? ou(o.value, g) : g;
  });
  return s(Ln, l), s(In, V(() => l.value.locale)), s(Vn, V(() => l.value.namespace)), s(Fn, V(() => l.value.zIndex)), s(nu, {
    size: V(() => l.value.size || "")
  }), (n || !Oe.value) && (Oe.value = l.value), l;
}, ou = (e, t) => {
  var n;
  const r = [.../* @__PURE__ */ new Set([...zt(e), ...zt(t)])], a = {};
  for (const o of r)
    a[o] = (n = t[o]) != null ? n : e[o];
  return a;
};
function lu(e) {
  let t;
  const n = S(!1), r = Gn({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function a(y) {
    r.text = y;
  }
  function o() {
    const y = r.parent, x = w.ns;
    if (!y.vLoadingAddClassList) {
      let m = y.getAttribute("loading-number");
      m = Number.parseInt(m) - 1, m ? y.setAttribute("loading-number", m.toString()) : (Ae(y, x.bm("parent", "relative")), y.removeAttribute("loading-number")), Ae(y, x.bm("parent", "hidden"));
    }
    s(), i.unmount();
  }
  function s() {
    var y, x;
    (x = (y = w.$el) == null ? void 0 : y.parentNode) == null || x.removeChild(w.$el);
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
    setup(y, { expose: x }) {
      const { ns: m, zIndex: f } = ru("loading");
      return x({
        ns: m,
        zIndex: f
      }), () => {
        const h = r.spinner || r.svg, c = de("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...h ? { innerHTML: h } : {}
        }, [
          de("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), $ = r.text ? de("p", { class: m.b("text") }, [r.text]) : void 0;
        return de(Hn, {
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
              de("div", {
                class: m.b("spinner")
              }, [c, $])
            ]), [[Yn, r.visible]])
          ])
        });
      };
    }
  }), i = Wn(d), w = i.mount(document.createElement("div"));
  return {
    ...qn(r),
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
let Te;
const su = function(e = {}) {
  if (!qe)
    return;
  const t = uu(e);
  if (t.fullscreen && Te)
    return Te;
  const n = lu({
    ...t,
    closed: () => {
      var a;
      (a = t.closed) == null || a.call(t), t.fullscreen && (Te = void 0);
    }
  });
  iu(t, t.parent, n), Rt(t, t.parent, n), t.parent.vLoadingAddClassList = () => Rt(t, t.parent, n);
  let r = t.parent.getAttribute("loading-number");
  return r ? r = `${Number.parseInt(r) + 1}` : r = "1", t.parent.setAttribute("loading-number", r), t.parent.appendChild(n.$el), He(() => n.visible.value = t.visible), t.fullscreen && (Te = n), n;
}, uu = (e) => {
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
}, iu = async (e, t, n) => {
  const { nextZIndex: r } = n.vm.zIndex || n.vm._.exposed.zIndex, a = {};
  if (e.fullscreen)
    n.originalPosition.value = pe(document.body, "position"), n.originalOverflow.value = pe(document.body, "overflow"), a.zIndex = r();
  else if (e.parent === document.body) {
    n.originalPosition.value = pe(document.body, "position"), await He();
    for (const o of ["top", "left"]) {
      const s = o === "top" ? "scrollTop" : "scrollLeft";
      a[o] = `${e.target.getBoundingClientRect()[o] + document.body[s] + document.documentElement[s] - Number.parseInt(pe(document.body, `margin-${o}`), 10)}px`;
    }
    for (const o of ["height", "width"])
      a[o] = `${e.target.getBoundingClientRect()[o]}px`;
  } else
    n.originalPosition.value = pe(t, "position");
  for (const [o, s] of Object.entries(a))
    n.$el.style[o] = s;
}, Rt = (e, t, n) => {
  const r = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? Ae(t, r.bm("parent", "relative")) : Dt(t, r.bm("parent", "relative")), e.fullscreen && e.lock ? Dt(t, r.bm("parent", "hidden")) : Ae(t, r.bm("parent", "hidden"));
}, xe = Symbol("ElLoading"), Ut = (e, t) => {
  var n, r, a, o;
  const s = t.instance, l = (y) => Ee(t.value) ? t.value[y] : void 0, g = (y) => {
    const x = Ze(y) && (s == null ? void 0 : s[y]) || y;
    return x && S(x);
  }, d = (y) => g(l(y) || e.getAttribute(`element-loading-${Tr(y)}`)), i = (n = l("fullscreen")) != null ? n : t.modifiers.fullscreen, w = {
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
  e[xe] = {
    options: w,
    instance: su(w)
  };
}, cu = (e, t) => {
  for (const n of Object.keys(t))
    Ge(t[n]) && (t[n].value = e[n]);
}, du = {
  mounted(e, t) {
    t.value && Ut(e, t);
  },
  updated(e, t) {
    const n = e[xe];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Ut(e, t) : t.value && t.oldValue ? Ee(t.value) && cu(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[xe]) == null || t.instance.close(), e[xe] = null;
  }
}, fu = {
  input: "请输入",
  select: "请选择",
  start: "开始",
  end: "结束",
  search: "搜索",
  reset: "重置"
}, pu = {
  input: "Please Input",
  select: "Please Select",
  start: "Start",
  end: "End",
  search: "Search",
  reset: "Reset"
}, gu = {
  zh: fu,
  en: pu
}, vu = () => localStorage.getItem("language") || "zh", B = (e) => {
  var n;
  const t = vu();
  return ((n = gu[t]) == null ? void 0 : n[e]) || e;
}, yu = { class: "v-filter" }, Mn = {
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
    const { proxy: n } = U(), r = e, a = V(() => {
      const c = r.filter.filter((p) => p.required), $ = {};
      return c.forEach((p) => {
        $[p.prop] = [
          { required: !0, message: p.message || `${p.label}不能为空` }
        ];
      }), $;
    }), o = S(), s = S({}), l = S([]), g = S(["date", "daterange", "month", "year", "monthrange"]), d = V(() => 24 / r.col);
    se(() => r.filter, (c) => {
      i(c);
    }, { deep: !0 });
    const i = (c = []) => {
      l.value = c.map(($) => (($.initValue || $.initValue === 0) && (s.value[$.prop] = $.initValue), {
        ...$
      }));
    }, w = () => {
      s.value = {};
    }, y = (c, $) => {
      g.value.includes($.scope) && ($.startKey && (s.value[$.startKey] = c && c.length > 1 ? c[0] : ""), $.endKey && (s.value[$.endKey] = c && c.length > 1 ? c[1] : ""));
    }, x = () => new Promise((c, $) => {
      o.value.validate((p) => {
        if (p) {
          const b = {};
          l.value.forEach((j) => {
            const we = j.filterProp || j.prop;
            j.startKey ? (b[j.startKey] = s.value[j.startKey], b[j.endKey] = s.value[j.endKey]) : b[we] = s.value[j.prop], j.format && typeof j.format == "function" && (b[we] = j.format(s.value[j.prop]));
          }), n.$emit("search", b), c();
        } else
          $();
      });
    }), m = () => {
      w(), n.$emit("reset");
    };
    return t({
      search: x,
      getCurrentFilter: () => s.value,
      setCurrentFilter: (c, $ = !0) => {
        s.value = {
          ...c
        }, $ && x();
      }
    }), Ye(() => {
      i(r.filter);
    }), (c, $) => (v(), E("div", yu, [
      P(u(Qn), null, {
        default: T(() => [
          P(u(Wt), {
            ref_key: "filterFormRef",
            ref: o,
            model: s.value,
            "label-width": e.labelWidth,
            rules: a.value
          }, {
            default: T(() => [
              P(u(ke), { gutter: 20 }, {
                default: T(() => [
                  (v(!0), E(F, null, L(l.value, (p) => (v(), C(u(re), {
                    span: d.value,
                    key: p.prop
                  }, {
                    default: T(() => [
                      P(u(qt), {
                        label: p.label,
                        "label-width": p.labelWidth || e.labelWidth,
                        prop: p.prop
                      }, {
                        default: T(() => [
                          p.scope === "input" ? (v(), C(u($e), {
                            key: 0,
                            modelValue: s.value[p.prop],
                            "onUpdate:modelValue": (b) => s.value[p.prop] = b,
                            modelModifiers: { trim: !0 },
                            placeholder: p.placeholder || u(B)("input")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : O("", !0),
                          p.scope === "select" ? (v(), C(u(Zt), N({
                            key: 1,
                            modelValue: s.value[p.prop],
                            "onUpdate:modelValue": (b) => s.value[p.prop] = b,
                            placeholder: p.placeholder || u(B)("select"),
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
                              (v(!0), E(F, null, L(p.options || [], (b) => (v(), C(u(Jt), {
                                key: b.value,
                                label: b.label,
                                value: b.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : O("", !0),
                          g.value.includes(p.scope) ? (v(), C(u(Xt), {
                            key: 2,
                            modelValue: s.value[p.prop],
                            "onUpdate:modelValue": (b) => s.value[p.prop] = b,
                            "value-format": p.format || "YYYY-MM-DD HH:mm:ss",
                            type: p.scope,
                            placeholder: p.placeholder || u(B)("select"),
                            "start-placeholder": u(B)("start"),
                            "end-placeholder": u(B)("end"),
                            clearable: "",
                            onChange: (b) => y(b, p)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "start-placeholder", "end-placeholder", "onChange"])) : O("", !0),
                          p.scope === "range" ? (v(), C(u(ke), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: T(() => [
                              P(u(re), { span: 11 }, {
                                default: T(() => [
                                  P(u($e), {
                                    modelValue: s.value[p.startKey],
                                    "onUpdate:modelValue": (b) => s.value[p.startKey] = b,
                                    placeholder: p.placeholder || u(B)("input"),
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
                                  R("-")
                                ]),
                                _: 1
                              }),
                              P(u(re), { span: 11 }, {
                                default: T(() => [
                                  P(u($e), {
                                    modelValue: s.value[p.endKey],
                                    "onUpdate:modelValue": (b) => s.value[p.endKey] = b,
                                    placeholder: p.placeholder || u(B)("input"),
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : O("", !0),
                          p.scope === "cascader" ? (v(), C(u(er), {
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
                        icon: u(Us),
                        onClick: x
                      }, {
                        default: T(() => [
                          R(k(u(B)("search")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      P(u(ae), {
                        icon: u(Bs),
                        onClick: m
                      }, {
                        default: T(() => [
                          R(k(u(B)("reset")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (v(!0), E(F, null, L(e.btns, (p) => (v(), C(u(ae), {
                        key: p.text,
                        onClick: p.click
                      }, {
                        default: T(() => [
                          R(k(p.text), 1)
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
var hu = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function mu(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function bu() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function Kt(e, t, n) {
  const r = bu(), a = e - r, o = 20;
  let s = 0;
  t = typeof t > "u" ? 500 : t;
  var l = function() {
    s += o;
    var g = Math.easeInOutQuad(s, r, a, t);
    mu(g), s < t ? hu(l) : n && typeof n == "function" && n();
  };
  l();
}
const zn = {
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
    se(() => t.page, (l) => {
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
      P(u(tr), N({
        "current-page": r.value,
        layout: e.layout
      }, l.$attrs, {
        onSizeChange: o,
        onCurrentChange: s
      }), null, 16, ["current-page", "layout"])
    ], 2));
  }
}, wu = { key: 0 }, Tu = { key: 1 }, $u = { key: 2 }, Ve = {
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
    se(() => ze(n.row, n.col.prop), (g) => {
      a.value = g;
    });
    const o = () => {
      Ls(n.row, n.col.prop, a.value), n.col.change && n.col.change(n.row, a.value), r("update:row", n.row);
    }, s = (g, d) => d.find((w) => w.value === g) || {}, l = (g, d) => {
      const i = s(g, d);
      return (i == null ? void 0 : i.label) || g;
    };
    return (g, d) => (v(), E(F, null, [
      e.col.scope ? O("", !0) : (v(), E("div", wu, k(e.row[e.col.prop]), 1)),
      e.col.scope === "number-col" ? (v(), E("div", Tu, k(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : O("", !0),
      e.col.scope === "render" && e.col.render ? (v(), E("div", $u, k(e.col.render(e.row, e.col.prop)), 1)) : O("", !0),
      ["textarea", "input"].includes(e.col.scope) ? (v(), C(u($e), N({
        key: 3,
        type: e.col.scope || "text"
      }, {
        ...Mt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : O("", !0),
      e.col.scope === "input-number" ? (v(), C(u(nr), N({ key: 4 }, {
        ...Mt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[1] || (d[1] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "select" ? (v(), C(u(Zt), N({ key: 5 }, {
        ...e.col
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": d[2] || (d[2] = (i) => a.value = i),
        onChange: o
      }), {
        default: T(() => [
          (v(!0), E(F, null, L(e.col.options, (i) => (v(), C(u(Jt), {
            key: i.value,
            label: i.label,
            value: i.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "tag" && l(e.row[e.col.prop], e.col.options) ? (v(), C(u(rr), {
        key: 6,
        type: s(e.row[e.col.prop], e.col.options).type
      }, {
        default: T(() => [
          R(k(l(e.row[e.col.prop], e.col.options)), 1)
        ]),
        _: 1
      }, 8, ["type"])) : O("", !0),
      e.col.scope === "img" ? (v(), C(u(ar), {
        key: 7,
        src: a.value,
        fit: e.col.fit || "cover"
      }, null, 8, ["src", "fit"])) : O("", !0),
      ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (v(), C(u(Xt), N({ key: 8 }, {
        ...e.col
      }, {
        type: e.col.scope,
        modelValue: a.value,
        "onUpdate:modelValue": d[3] || (d[3] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : O("", !0),
      e.col.scope === "switch" ? (v(), C(u(or), N({
        key: 9,
        modelValue: a.value,
        "onUpdate:modelValue": d[4] || (d[4] = (i) => a.value = i),
        onChange: o
      }, {
        ...e.col
      }), null, 16, ["modelValue"])) : O("", !0),
      e.col.scope === "radio" ? (v(), C(u(lr), {
        key: 10,
        modelValue: a.value,
        "onUpdate:modelValue": d[5] || (d[5] = (i) => a.value = i),
        onChange: o
      }, {
        default: T(() => [
          (v(!0), E(F, null, L(e.col.options, (i) => (v(), C(u(Qt), {
            label: i.value,
            key: i.label
          }, {
            default: T(() => [
              R(k(i.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : O("", !0)
    ], 64));
  }
}, Cu = (e, t = "拷贝成功") => {
  if (navigator.clipboard)
    navigator.clipboard.writeText(e), ct.success(t);
  else {
    const n = document.createElement("textarea");
    document.body.appendChild(n), n.style.position = "fixed", n.style.clip = "rect(0 0 0 0)", n.style.top = "10px", n.value = e, n.select(), document.execCommand("copy", !0), document.body.removeChild(n), ct.success(t);
  }
}, Ue = (e = 32) => {
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = t.length;
  let r = "";
  for (let a = 0; a < e; a++)
    r += t.charAt(Math.floor(Math.random() * n));
  return r;
}, Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  copy: Cu,
  randomStr: Ue
}, Symbol.toStringTag, { value: "Module" })), Dn = {
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
    const n = e, { proxy: r } = U(), a = S(null), o = S(null), s = S(null), l = S(Ue());
    se(() => n.columns, (m) => {
      l.value = Ue();
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
    }, x = (m, f, h) => "if" in m ? typeof m.if == "function" ? m.if(f, h) : f[m.if] : m.render ? !!m.render(f, h) : !!m.label;
    return t({
      clearSelection: d,
      clearRadio: i
    }), Ye(() => {
      n.onSize && (window.addEventListener("resize", g), He(() => {
        g();
      }));
    }), Zn(() => {
      n.onSize && window.removeEventListener("resize", g);
    }), (m, f) => {
      const h = Jn("v-table", !0);
      return v(), E("div", {
        class: We(["v-table", { pd: e.onAdd }])
      }, [
        (v(), C(u(sr), N({
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
            e.selection ? (v(), C(u(Ne), {
              key: 0,
              type: "selection",
              width: "40"
            })) : O("", !0),
            e.radio ? (v(), C(u(Ne), {
              key: 1,
              fixed: "left",
              width: "60"
            }, {
              header: T(() => [
                me("div", {
                  class: "radio-header",
                  onClick: i
                }, "取消")
              ]),
              default: T(({ row: c }) => [
                P(u(Qt), {
                  modelValue: a.value,
                  "onUpdate:modelValue": f[0] || (f[0] = ($) => a.value = $),
                  label: c.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : O("", !0),
            (v(!0), E(F, null, L(e.columns, (c) => (v(), C(u(Ne), N({
              key: c.prop,
              width: c.width
            }, c), {
              default: T(({ row: $, $index: p }) => [
                ["btn", "table", "slot"].includes(c.scope) ? O("", !0) : (v(), C(Ve, {
                  key: 0,
                  row: $,
                  col: c
                }, null, 8, ["row", "col"])),
                c.scope === "table" ? (v(), C(h, {
                  key: 1,
                  data: $[c.prop],
                  columns: c.options
                }, null, 8, ["data", "columns"])) : O("", !0),
                c.scope === "btn" ? (v(!0), E(F, { key: 2 }, L(c.options || [], (b) => (v(), E(F, {
                  key: b.event
                }, [
                  x(b, $, p) ? (v(), C(u(ae), N({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: b.type || "primary",
                    onClick: (j) => y(b, $, p)
                  }, {
                    ...b
                  }), {
                    default: T(() => [
                      R(k(b.label || (b.render ? b.render($, p) : "")), 1)
                    ]),
                    _: 2
                  }, 1040, ["type", "onClick"])) : O("", !0)
                ], 64))), 128)) : O("", !0),
                oe(m.$slots, c.prop, Ht(Yt({ row: $ })))
              ]),
              _: 2
            }, 1040, ["width"]))), 128))
          ]),
          _: 3
        }, 16, ["data", "highlight-current-row", "onSelectionChange"])),
        e.onAdd ? (v(), E("div", {
          key: 0,
          class: "add-btn",
          onClick: f[1] || (f[1] = (...c) => e.onAdd && e.onAdd(...c))
        })) : O("", !0)
      ], 2);
    };
  }
}, Su = { class: "v-page-operator" }, xu = { class: "v-page-table" }, _u = {
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
    const { GET_LIST: n, GET_TOTAL: r, PAGE_NUM_KEY: a, PAGE_SIZE_KEY: o } = yr(), { proxy: s } = U(), l = e, g = S([]), d = S({}), i = S(0), w = S({}), y = S({}), x = S(null), m = () => {
      var I;
      (I = x.value) == null || I.clearRadio();
    }, f = () => {
      var I;
      (I = x.value) == null || I.clearSelection();
    }, h = ({ btn: I, row: H, index: Y }) => {
      s.$emit(I.event, H, Y);
    }, c = S(!1), $ = async (I = {}) => {
      if (l.getList) {
        c.value = !0;
        try {
          d.value = {
            [a]: w.value.pageNum || 1,
            [o]: w.value.pageSize || 10,
            ...I
          };
          const H = await l.getList(d.value);
          let Y = n(H);
          l.formatList && (Y = l.formatList(Y)), g.value = Y.map((D, ce) => ({
            ...D,
            index: ce + 1 + (d.value[a] - 1) * d.value[o]
          })), i.value = r(H);
        } finally {
          c.value = !1;
        }
      }
    }, p = (I) => {
      w.value = I, f(), m(), $({
        ...I,
        ...y.value
      });
    }, b = async () => {
      f(), m(), await $({
        ...w.value,
        ...y.value
      });
    }, j = (I) => {
      w.value.pageNum = 1, y.value = I, b(), s.$emit("search", I);
    }, we = () => {
      ie.value.search();
    }, ie = S(), Bn = () => ie.value.getCurrentFilter();
    return Ye(() => {
      l.init && (l.showFilter ? ie.value.search() : $());
    }), t({
      refreshList: b,
      clearSelection: f,
      clearRadio: m,
      search: we,
      getCurrentFilter: Bn,
      filterRef: ie
    }), (I, H) => {
      const Y = du;
      return v(), E("div", {
        class: We(["v-page", { pd: l.table && l.table.onAdd }])
      }, [
        e.showFilter ? (v(), C(Mn, {
          key: 0,
          ref_key: "filterRef",
          ref: ie,
          filter: e.filter,
          "label-width": e.filterLabelWidth,
          btns: e.filterBtns,
          col: e.filterCol,
          onSearch: j,
          onReset: H[0] || (H[0] = () => j({}))
        }, null, 8, ["filter", "label-width", "btns", "col"])) : O("", !0),
        me("div", Su, [
          (v(!0), E(F, null, L(e.btns, (D, ce) => (v(), C(u(ae), {
            key: ce,
            type: D.type || "primary",
            onClick: (Rn) => D.click && D.click(Rn)
          }, {
            default: T(() => [
              R(k(D.label), 1)
            ]),
            _: 2
          }, 1032, ["type", "onClick"]))), 128)),
          oe(I.$slots, "btn")
        ]),
        Gt((v(), E("div", xu, [
          P(Dn, N({
            ref_key: "tableRef",
            ref: x,
            data: g.value,
            columns: e.columns,
            selection: e.selection,
            radio: e.radio
          }, {
            ...l.table
          }, { onBtnClick: h }), Xn({ _: 2 }, [
            L(e.columns, (D) => ({
              name: D.prop,
              fn: T((ce) => [
                oe(I.$slots, D.prop, Ht(Yt(ce)))
              ])
            }))
          ]), 1040, ["data", "columns", "selection", "radio"])
        ])), [
          [Y, c.value]
        ]),
        e.showPagination ? (v(), C(zn, {
          key: 1,
          page: w.value.pageNum,
          total: i.value,
          onPagination: p
        }, null, 8, ["page", "total"])) : O("", !0)
      ], 2);
    };
  }
}, Au = {
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
    se(() => r.value, () => {
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
    }), (i, w) => (v(), C(u(Wt), N({
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
            (v(!0), E(F, null, L(e.list, (y) => (v(), C(u(re), {
              span: y.colSpan || 24 / e.col,
              key: y.prop
            }, {
              default: T(() => [
                P(u(qt), {
                  label: y.label,
                  prop: y.prop
                }, {
                  default: T(() => [
                    P(Ve, {
                      row: o.value,
                      col: y,
                      "onUpdate:row": g
                    }, null, 8, ["row", "col"]),
                    oe(i.$slots, y.prop)
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
function Ou(e) {
  const t = U(), n = S(e.modelValue);
  return se(() => e.modelValue, (o) => {
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
const Eu = { class: "dialog-footer" }, Pu = {
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
    const t = e, { dialogVisible: n, closeDialog: r, beforeClose: a } = Ou(t);
    return (o, s) => (v(), C(u(ur), N({
      modelValue: u(n),
      "onUpdate:modelValue": s[0] || (s[0] = (l) => Ge(n) ? n.value = l : null),
      title: e.title,
      "close-on-click-modal": !1,
      "before-close": u(a)
    }, e.dialogProps), {
      footer: T(() => [
        me("div", Eu, [
          P(u(ae), { onClick: u(r) }, {
            default: T(() => [
              R("Cancel")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: T(() => [
        P(u(ir), N({ class: "v-detail" }, e.descProps), {
          default: T(() => [
            (v(!0), E(F, null, L(e.columns, (l) => (v(), C(u(cr), {
              label: l.label,
              span: l.span,
              key: l.prop
            }, {
              default: T(() => [
                P(Ve, {
                  row: e.data,
                  col: l
                }, null, 8, ["row", "col"]),
                oe(o.$slots, l.prop)
              ]),
              _: 2
            }, 1032, ["label", "span"]))), 128))
          ]),
          _: 3
        }, 16),
        oe(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue", "title", "before-close"]));
  }
}, Nu = {
  install(e, t = {}) {
    const { config: n } = t;
    n && vr(n, e), e.component("VPage", _u), e.component("VFilter", Mn), e.component("VTable", Dn), e.component("VElement", Ve), e.component("VPagination", zn), e.component("VForm", Au), e.component("VDetail", Pu);
  }
};
export {
  Pu as VDetail,
  Ve as VElement,
  Mn as VFilter,
  Au as VForm,
  zn as VPagination,
  Dn as VTable,
  Nu as default,
  vr as setConfig,
  Vu as utils
};
