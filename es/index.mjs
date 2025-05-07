import { inject as me, defineComponent as Ke, openBlock as y, createElementBlock as O, createElementVNode as be, warn as Kn, ref as S, computed as V, unref as u, isRef as Ge, getCurrentInstance as U, provide as Gn, reactive as Hn, h as fe, Transition as Yn, withCtx as T, withDirectives as Ht, createVNode as P, vShow as Wn, createApp as Zn, toRefs as qn, nextTick as He, watch as q, onMounted as Ye, Fragment as F, renderList as L, createBlock as $, createCommentVNode as E, mergeProps as N, createTextVNode as R, toDisplayString as z, normalizeClass as We, normalizeProps as Ze, onUnmounted as Jn, resolveComponent as Xn, renderSlot as le, guardReactiveProps as Yt, createSlots as Qn } from "vue";
import { ElCard as er, ElForm as Wt, ElRow as ze, ElCol as ae, ElFormItem as Zt, ElInput as Ce, ElSelect as qt, ElOption as Jt, ElDatePicker as Xt, ElCascader as tr, ElButton as oe, ElPagination as nr, ElInputNumber as rr, ElTag as ar, ElImage as or, ElSwitch as lr, ElRadioGroup as sr, ElRadio as Qt, ElMessage as dt, ElTable as ur, ElTableColumn as Ne, ElDialog as ir, ElDescriptions as cr, ElDescriptionsItem as dr } from "element-plus";
let fr = "pageSize", pr = "pageNum", gr = (e) => e.data, vr = (e) => e.total;
function yr(e, t) {
  t && t.provide("vxe-page", e);
}
function hr() {
  return me("vxe-page", {
    PAGE_SIZE: 10,
    PAGE_SIZE_KEY: fr,
    PAGE_NUM_KEY: pr,
    GET_LIST: gr,
    GET_TOTAL: vr
  });
}
var ft;
const qe = typeof window < "u";
qe && ((ft = window == null ? void 0 : window.navigator) != null && ft.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const mr = Object.prototype.hasOwnProperty, pt = (e, t) => mr.call(e, t), Je = (e) => typeof e == "string", Oe = (e) => e !== null && typeof e == "object", en = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, br = /-(\w)/g, wr = en((e) => e.replace(br, (t, n) => n ? n.toUpperCase() : "")), Tr = /\B([A-Z])/g, Cr = en(
  (e) => e.replace(Tr, "-$1").toLowerCase()
);
var tn = typeof global == "object" && global && global.Object === Object && global, $r = typeof self == "object" && self && self.Object === Object && self, M = tn || $r || Function("return this")(), k = M.Symbol, nn = Object.prototype, Sr = nn.hasOwnProperty, xr = nn.toString, pe = k ? k.toStringTag : void 0;
function _r(e) {
  var t = Sr.call(e, pe), n = e[pe];
  try {
    e[pe] = void 0;
    var r = !0;
  } catch {
  }
  var a = xr.call(e);
  return r && (t ? e[pe] = n : delete e[pe]), a;
}
var Ar = Object.prototype, Er = Ar.toString;
function Or(e) {
  return Er.call(e);
}
var Pr = "[object Null]", jr = "[object Undefined]", gt = k ? k.toStringTag : void 0;
function Q(e) {
  return e == null ? e === void 0 ? jr : Pr : gt && gt in Object(e) ? _r(e) : Or(e);
}
function ee(e) {
  return e != null && typeof e == "object";
}
var Ir = "[object Symbol]";
function Xe(e) {
  return typeof e == "symbol" || ee(e) && Q(e) == Ir;
}
function rn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var te = Array.isArray, Vr = 1 / 0, vt = k ? k.prototype : void 0, yt = vt ? vt.toString : void 0;
function an(e) {
  if (typeof e == "string")
    return e;
  if (te(e))
    return rn(e, an) + "";
  if (Xe(e))
    return yt ? yt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vr ? "-0" : t;
}
function J(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Nr(e) {
  return e;
}
var Fr = "[object AsyncFunction]", Lr = "[object Function]", zr = "[object GeneratorFunction]", kr = "[object Proxy]";
function on(e) {
  if (!J(e))
    return !1;
  var t = Q(e);
  return t == Lr || t == zr || t == Fr || t == kr;
}
var Fe = M["__core-js_shared__"], ht = function() {
  var e = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Mr(e) {
  return !!ht && ht in e;
}
var Dr = Function.prototype, Br = Dr.toString;
function ne(e) {
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
var Rr = /[\\^$.*+?()[\]{}|]/g, Ur = /^\[object .+?Constructor\]$/, Kr = Function.prototype, Gr = Object.prototype, Hr = Kr.toString, Yr = Gr.hasOwnProperty, Wr = RegExp(
  "^" + Hr.call(Yr).replace(Rr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zr(e) {
  if (!J(e) || Mr(e))
    return !1;
  var t = on(e) ? Wr : Ur;
  return t.test(ne(e));
}
function qr(e, t) {
  return e == null ? void 0 : e[t];
}
function re(e, t) {
  var n = qr(e, t);
  return Zr(n) ? n : void 0;
}
var ke = re(M, "WeakMap"), mt = Object.create, Jr = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!J(t))
      return {};
    if (mt)
      return mt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Xr(e, t, n) {
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
function Qr(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var ea = 800, ta = 16, na = Date.now;
function ra(e) {
  var t = 0, n = 0;
  return function() {
    var r = na(), a = ta - (r - n);
    if (n = r, a > 0) {
      if (++t >= ea)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function aa(e) {
  return function() {
    return e;
  };
}
var _e = function() {
  try {
    var e = re(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), oa = _e ? function(e, t) {
  return _e(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: aa(t),
    writable: !0
  });
} : Nr;
const la = oa;
var sa = ra(la);
function ua(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var ia = 9007199254740991, ca = /^(?:0|[1-9]\d*)$/;
function ln(e, t) {
  var n = typeof e;
  return t = t ?? ia, !!t && (n == "number" || n != "symbol" && ca.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var da = Object.prototype, fa = da.hasOwnProperty;
function Qe(e, t, n) {
  var r = e[t];
  (!(fa.call(e, t) && un(r, n)) || n === void 0 && !(t in e)) && sn(e, t, n);
}
function we(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, l = t.length; ++o < l; ) {
    var s = t[o], g = r ? r(n[s], e[s], s, n, e) : void 0;
    g === void 0 && (g = e[s]), a ? sn(n, s, g) : Qe(n, s, g);
  }
  return n;
}
var bt = Math.max;
function pa(e, t, n) {
  return t = bt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = bt(r.length - t, 0), l = Array(o); ++a < o; )
      l[a] = r[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = r[a];
    return s[t] = n(l), Xr(e, this, s);
  };
}
var ga = 9007199254740991;
function cn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ga;
}
function dn(e) {
  return e != null && cn(e.length) && !on(e);
}
var va = Object.prototype;
function et(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || va;
  return e === n;
}
function ya(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ha = "[object Arguments]";
function wt(e) {
  return ee(e) && Q(e) == ha;
}
var fn = Object.prototype, ma = fn.hasOwnProperty, ba = fn.propertyIsEnumerable, pn = wt(/* @__PURE__ */ function() {
  return arguments;
}()) ? wt : function(e) {
  return ee(e) && ma.call(e, "callee") && !ba.call(e, "callee");
};
function wa() {
  return !1;
}
var gn = typeof exports == "object" && exports && !exports.nodeType && exports, Tt = gn && typeof module == "object" && module && !module.nodeType && module, Ta = Tt && Tt.exports === gn, Ct = Ta ? M.Buffer : void 0, Ca = Ct ? Ct.isBuffer : void 0, vn = Ca || wa, $a = "[object Arguments]", Sa = "[object Array]", xa = "[object Boolean]", _a = "[object Date]", Aa = "[object Error]", Ea = "[object Function]", Oa = "[object Map]", Pa = "[object Number]", ja = "[object Object]", Ia = "[object RegExp]", Va = "[object Set]", Na = "[object String]", Fa = "[object WeakMap]", La = "[object ArrayBuffer]", za = "[object DataView]", ka = "[object Float32Array]", Ma = "[object Float64Array]", Da = "[object Int8Array]", Ba = "[object Int16Array]", Ra = "[object Int32Array]", Ua = "[object Uint8Array]", Ka = "[object Uint8ClampedArray]", Ga = "[object Uint16Array]", Ha = "[object Uint32Array]", A = {};
A[ka] = A[Ma] = A[Da] = A[Ba] = A[Ra] = A[Ua] = A[Ka] = A[Ga] = A[Ha] = !0;
A[$a] = A[Sa] = A[La] = A[xa] = A[za] = A[_a] = A[Aa] = A[Ea] = A[Oa] = A[Pa] = A[ja] = A[Ia] = A[Va] = A[Na] = A[Fa] = !1;
function Ya(e) {
  return ee(e) && cn(e.length) && !!A[Q(e)];
}
function tt(e) {
  return function(t) {
    return e(t);
  };
}
var yn = typeof exports == "object" && exports && !exports.nodeType && exports, ve = yn && typeof module == "object" && module && !module.nodeType && module, Wa = ve && ve.exports === yn, Le = Wa && tn.process, se = function() {
  try {
    var e = ve && ve.require && ve.require("util").types;
    return e || Le && Le.binding && Le.binding("util");
  } catch {
  }
}(), $t = se && se.isTypedArray, Za = $t ? tt($t) : Ya, qa = Object.prototype, Ja = qa.hasOwnProperty;
function hn(e, t) {
  var n = te(e), r = !n && pn(e), a = !n && !r && vn(e), o = !n && !r && !a && Za(e), l = n || r || a || o, s = l ? ya(e.length, String) : [], g = s.length;
  for (var h in e)
    (t || Ja.call(e, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    ln(h, g))) && s.push(h);
  return s;
}
function mn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Xa = mn(Object.keys, Object), Qa = Object.prototype, eo = Qa.hasOwnProperty;
function to(e) {
  if (!et(e))
    return Xa(e);
  var t = [];
  for (var n in Object(e))
    eo.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function nt(e) {
  return dn(e) ? hn(e) : to(e);
}
function no(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var ro = Object.prototype, ao = ro.hasOwnProperty;
function oo(e) {
  if (!J(e))
    return no(e);
  var t = et(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !ao.call(e, r)) || n.push(r);
  return n;
}
function rt(e) {
  return dn(e) ? hn(e, !0) : oo(e);
}
var lo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, so = /^\w*$/;
function uo(e, t) {
  if (te(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Xe(e) ? !0 : so.test(e) || !lo.test(e) || t != null && e in Object(t);
}
var ye = re(Object, "create");
function io() {
  this.__data__ = ye ? ye(null) : {}, this.size = 0;
}
function co(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fo = "__lodash_hash_undefined__", po = Object.prototype, go = po.hasOwnProperty;
function vo(e) {
  var t = this.__data__;
  if (ye) {
    var n = t[e];
    return n === fo ? void 0 : n;
  }
  return go.call(t, e) ? t[e] : void 0;
}
var yo = Object.prototype, ho = yo.hasOwnProperty;
function mo(e) {
  var t = this.__data__;
  return ye ? t[e] !== void 0 : ho.call(t, e);
}
var bo = "__lodash_hash_undefined__";
function wo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ye && t === void 0 ? bo : t, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
X.prototype.clear = io;
X.prototype.delete = co;
X.prototype.get = vo;
X.prototype.has = mo;
X.prototype.set = wo;
function To() {
  this.__data__ = [], this.size = 0;
}
function Pe(e, t) {
  for (var n = e.length; n--; )
    if (un(e[n][0], t))
      return n;
  return -1;
}
var Co = Array.prototype, $o = Co.splice;
function So(e) {
  var t = this.__data__, n = Pe(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : $o.call(t, n, 1), --this.size, !0;
}
function xo(e) {
  var t = this.__data__, n = Pe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function _o(e) {
  return Pe(this.__data__, e) > -1;
}
function Ao(e, t) {
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
K.prototype.clear = To;
K.prototype.delete = So;
K.prototype.get = xo;
K.prototype.has = _o;
K.prototype.set = Ao;
var he = re(M, "Map");
function Eo() {
  this.size = 0, this.__data__ = {
    hash: new X(),
    map: new (he || K)(),
    string: new X()
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
function Po(e) {
  var t = je(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function jo(e) {
  return je(this, e).get(e);
}
function Io(e) {
  return je(this, e).has(e);
}
function Vo(e, t) {
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
G.prototype.clear = Eo;
G.prototype.delete = Po;
G.prototype.get = jo;
G.prototype.has = Io;
G.prototype.set = Vo;
var No = "Expected a function";
function at(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(No);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var l = e.apply(this, r);
    return n.cache = o.set(a, l) || o, l;
  };
  return n.cache = new (at.Cache || G)(), n;
}
at.Cache = G;
var Fo = 500;
function Lo(e) {
  var t = at(e, function(r) {
    return n.size === Fo && n.clear(), r;
  }), n = t.cache;
  return t;
}
var zo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ko = /\\(\\)?/g, Mo = Lo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zo, function(n, r, a, o) {
    t.push(a ? o.replace(ko, "$1") : r || n);
  }), t;
});
function Do(e) {
  return e == null ? "" : an(e);
}
function Ie(e, t) {
  return te(e) ? e : uo(e, t) ? [e] : Mo(Do(e));
}
var Bo = 1 / 0;
function ot(e) {
  if (typeof e == "string" || Xe(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Bo ? "-0" : t;
}
function bn(e, t) {
  t = Ie(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ot(t[n++])];
  return n && n == r ? e : void 0;
}
function Me(e, t, n) {
  var r = e == null ? void 0 : bn(e, t);
  return r === void 0 ? n : r;
}
function lt(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var St = k ? k.isConcatSpreadable : void 0;
function Ro(e) {
  return te(e) || pn(e) || !!(St && e && e[St]);
}
function wn(e, t, n, r, a) {
  var o = -1, l = e.length;
  for (n || (n = Ro), a || (a = []); ++o < l; ) {
    var s = e[o];
    t > 0 && n(s) ? t > 1 ? wn(s, t - 1, n, r, a) : lt(a, s) : r || (a[a.length] = s);
  }
  return a;
}
function Uo(e) {
  var t = e == null ? 0 : e.length;
  return t ? wn(e, 1) : [];
}
function Ko(e) {
  return sa(pa(e, void 0, Uo), e + "");
}
var st = mn(Object.getPrototypeOf, Object), Go = "[object Object]", Ho = Function.prototype, Yo = Object.prototype, Tn = Ho.toString, Wo = Yo.hasOwnProperty, Zo = Tn.call(Object);
function qo(e) {
  if (!ee(e) || Q(e) != Go)
    return !1;
  var t = st(e);
  if (t === null)
    return !0;
  var n = Wo.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Tn.call(n) == Zo;
}
function Jo(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = e[r + t];
  return o;
}
function Xo() {
  this.__data__ = new K(), this.size = 0;
}
function Qo(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function el(e) {
  return this.__data__.get(e);
}
function tl(e) {
  return this.__data__.has(e);
}
var nl = 200;
function rl(e, t) {
  var n = this.__data__;
  if (n instanceof K) {
    var r = n.__data__;
    if (!he || r.length < nl - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new G(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ue(e) {
  var t = this.__data__ = new K(e);
  this.size = t.size;
}
ue.prototype.clear = Xo;
ue.prototype.delete = Qo;
ue.prototype.get = el;
ue.prototype.has = tl;
ue.prototype.set = rl;
function al(e, t) {
  return e && we(t, nt(t), e);
}
function ol(e, t) {
  return e && we(t, rt(t), e);
}
var Cn = typeof exports == "object" && exports && !exports.nodeType && exports, xt = Cn && typeof module == "object" && module && !module.nodeType && module, ll = xt && xt.exports === Cn, _t = ll ? M.Buffer : void 0, At = _t ? _t.allocUnsafe : void 0;
function sl(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = At ? At(n) : new e.constructor(n);
  return e.copy(r), r;
}
function ul(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (o[a++] = l);
  }
  return o;
}
function $n() {
  return [];
}
var il = Object.prototype, cl = il.propertyIsEnumerable, Et = Object.getOwnPropertySymbols, ut = Et ? function(e) {
  return e == null ? [] : (e = Object(e), ul(Et(e), function(t) {
    return cl.call(e, t);
  }));
} : $n;
function dl(e, t) {
  return we(e, ut(e), t);
}
var fl = Object.getOwnPropertySymbols, pl = fl ? function(e) {
  for (var t = []; e; )
    lt(t, ut(e)), e = st(e);
  return t;
} : $n;
const Sn = pl;
function gl(e, t) {
  return we(e, Sn(e), t);
}
function xn(e, t, n) {
  var r = t(e);
  return te(e) ? r : lt(r, n(e));
}
function vl(e) {
  return xn(e, nt, ut);
}
function _n(e) {
  return xn(e, rt, Sn);
}
var De = re(M, "DataView"), Be = re(M, "Promise"), Re = re(M, "Set"), Ot = "[object Map]", yl = "[object Object]", Pt = "[object Promise]", jt = "[object Set]", It = "[object WeakMap]", Vt = "[object DataView]", hl = ne(De), ml = ne(he), bl = ne(Be), wl = ne(Re), Tl = ne(ke), Z = Q;
(De && Z(new De(new ArrayBuffer(1))) != Vt || he && Z(new he()) != Ot || Be && Z(Be.resolve()) != Pt || Re && Z(new Re()) != jt || ke && Z(new ke()) != It) && (Z = function(e) {
  var t = Q(e), n = t == yl ? e.constructor : void 0, r = n ? ne(n) : "";
  if (r)
    switch (r) {
      case hl:
        return Vt;
      case ml:
        return Ot;
      case bl:
        return Pt;
      case wl:
        return jt;
      case Tl:
        return It;
    }
  return t;
});
const it = Z;
var Cl = Object.prototype, $l = Cl.hasOwnProperty;
function Sl(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && $l.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Nt = M.Uint8Array;
function ct(e) {
  var t = new e.constructor(e.byteLength);
  return new Nt(t).set(new Nt(e)), t;
}
function xl(e, t) {
  var n = t ? ct(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var _l = /\w*$/;
function Al(e) {
  var t = new e.constructor(e.source, _l.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Ft = k ? k.prototype : void 0, Lt = Ft ? Ft.valueOf : void 0;
function El(e) {
  return Lt ? Object(Lt.call(e)) : {};
}
function Ol(e, t) {
  var n = t ? ct(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Pl = "[object Boolean]", jl = "[object Date]", Il = "[object Map]", Vl = "[object Number]", Nl = "[object RegExp]", Fl = "[object Set]", Ll = "[object String]", zl = "[object Symbol]", kl = "[object ArrayBuffer]", Ml = "[object DataView]", Dl = "[object Float32Array]", Bl = "[object Float64Array]", Rl = "[object Int8Array]", Ul = "[object Int16Array]", Kl = "[object Int32Array]", Gl = "[object Uint8Array]", Hl = "[object Uint8ClampedArray]", Yl = "[object Uint16Array]", Wl = "[object Uint32Array]";
function Zl(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case kl:
      return ct(e);
    case Pl:
    case jl:
      return new r(+e);
    case Ml:
      return xl(e, n);
    case Dl:
    case Bl:
    case Rl:
    case Ul:
    case Kl:
    case Gl:
    case Hl:
    case Yl:
    case Wl:
      return Ol(e, n);
    case Il:
      return new r();
    case Vl:
    case Ll:
      return new r(e);
    case Nl:
      return Al(e);
    case Fl:
      return new r();
    case zl:
      return El(e);
  }
}
function ql(e) {
  return typeof e.constructor == "function" && !et(e) ? Jr(st(e)) : {};
}
var Jl = "[object Map]";
function Xl(e) {
  return ee(e) && it(e) == Jl;
}
var zt = se && se.isMap, Ql = zt ? tt(zt) : Xl, es = "[object Set]";
function ts(e) {
  return ee(e) && it(e) == es;
}
var kt = se && se.isSet, ns = kt ? tt(kt) : ts, rs = 1, as = 2, os = 4, An = "[object Arguments]", ls = "[object Array]", ss = "[object Boolean]", us = "[object Date]", is = "[object Error]", En = "[object Function]", cs = "[object GeneratorFunction]", ds = "[object Map]", fs = "[object Number]", On = "[object Object]", ps = "[object RegExp]", gs = "[object Set]", vs = "[object String]", ys = "[object Symbol]", hs = "[object WeakMap]", ms = "[object ArrayBuffer]", bs = "[object DataView]", ws = "[object Float32Array]", Ts = "[object Float64Array]", Cs = "[object Int8Array]", $s = "[object Int16Array]", Ss = "[object Int32Array]", xs = "[object Uint8Array]", _s = "[object Uint8ClampedArray]", As = "[object Uint16Array]", Es = "[object Uint32Array]", _ = {};
_[An] = _[ls] = _[ms] = _[bs] = _[ss] = _[us] = _[ws] = _[Ts] = _[Cs] = _[$s] = _[Ss] = _[ds] = _[fs] = _[On] = _[ps] = _[gs] = _[vs] = _[ys] = _[xs] = _[_s] = _[As] = _[Es] = !0;
_[is] = _[En] = _[hs] = !1;
function $e(e, t, n, r, a, o) {
  var l, s = t & rs, g = t & as, h = t & os;
  if (n && (l = a ? n(e, r, a, o) : n(e)), l !== void 0)
    return l;
  if (!J(e))
    return e;
  var v = te(e);
  if (v) {
    if (l = Sl(e), !s)
      return Qr(e, l);
  } else {
    var i = it(e), d = i == En || i == cs;
    if (vn(e))
      return sl(e, s);
    if (i == On || i == An || d && !a) {
      if (l = g || d ? {} : ql(e), !s)
        return g ? gl(e, ol(l, e)) : dl(e, al(l, e));
    } else {
      if (!_[i])
        return a ? e : {};
      l = Zl(e, i, s);
    }
  }
  o || (o = new ue());
  var x = o.get(e);
  if (x)
    return x;
  o.set(e, l), ns(e) ? e.forEach(function(m) {
    l.add($e(m, t, n, m, e, o));
  }) : Ql(e) && e.forEach(function(m, p) {
    l.set(p, $e(m, t, n, p, e, o));
  });
  var b = h ? g ? _n : vl : g ? rt : nt, f = v ? void 0 : b(e);
  return ua(f || e, function(m, p) {
    f && (p = m, m = e[p]), Qe(l, p, $e(m, t, n, p, e, o));
  }), l;
}
function Os(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Ps(e, t) {
  return t.length < 2 ? e : bn(e, Jo(t, 0, -1));
}
function js(e, t) {
  return t = Ie(t, e), e = Ps(e, t), e == null || delete e[ot(Os(t))];
}
function Is(e) {
  return qo(e) ? void 0 : e;
}
var Vs = 1, Ns = 2, Fs = 4, Mt = Ko(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = rn(t, function(o) {
    return o = Ie(o, e), r || (r = o.length > 1), o;
  }), we(e, _n(e), n), r && (n = $e(n, Vs | Ns | Fs, Is));
  for (var a = t.length; a--; )
    js(n, t[a]);
  return n;
});
function Ls(e, t, n, r) {
  if (!J(e))
    return e;
  t = Ie(t, e);
  for (var a = -1, o = t.length, l = o - 1, s = e; s != null && ++a < o; ) {
    var g = ot(t[a]), h = n;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (a != l) {
      var v = s[g];
      h = r ? r(v, g, s) : void 0, h === void 0 && (h = J(v) ? v : ln(t[a + 1]) ? [] : {});
    }
    Qe(s, g, h), s = s[g];
  }
  return e;
}
function zs(e, t, n) {
  return e == null ? e : Ls(e, t, n);
}
const ks = (e) => typeof e == "number", Dt = (e) => Object.keys(e);
class Ms extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ds(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Je(e) ? new Ms(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Pn = (e = "") => e.split(" ").filter((t) => !!t.trim()), Bt = (e, t) => {
  !e || !t.trim() || e.classList.add(...Pn(t));
}, Ae = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Pn(t));
}, ge = (e, t) => {
  var n;
  if (!qe || !e || !t)
    return "";
  let r = wr(t);
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
var Bs = /* @__PURE__ */ Ke({
  name: "Refresh",
  __name: "refresh",
  setup(e) {
    return (t, n) => (y(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      be("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Rs = Bs, Us = /* @__PURE__ */ Ke({
  name: "Search",
  __name: "search",
  setup(e) {
    return (t, n) => (y(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      be("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), Ks = Us;
const jn = "__epPropKey", Gs = (e) => Oe(e) && !!e[jn], Hs = (e, t) => {
  if (!Oe(e) || Gs(e))
    return e;
  const { values: n, required: r, default: a, type: o, validator: l } = e, g = {
    type: o,
    required: !!r,
    validator: n || l ? (h) => {
      let v = !1, i = [];
      if (n && (i = Array.from(n), pt(e, "default") && i.push(a), v || (v = i.includes(h))), l && (v || (v = l(h))), !v && i.length > 0) {
        const d = [...new Set(i)].map((x) => JSON.stringify(x)).join(", ");
        Kn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(h)}.`);
      }
      return v;
    } : void 0,
    [jn]: !0
  };
  return pt(e, "default") && (g.default = a), g;
}, Ys = ["", "default", "small", "large"];
var Ws = {
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
const Zs = (e) => (t, n) => qs(t, n, u(e)), qs = (e, t, n) => Me(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var o;
  return `${(o = t == null ? void 0 : t[a]) != null ? o : `{${a}}`}`;
}), Js = (e) => {
  const t = V(() => u(e).name), n = Ge(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Zs(e)
  };
}, In = Symbol("localeContextKey"), Xs = (e) => {
  const t = e || me(In, S());
  return Js(V(() => t.value || Ws));
}, Se = "el", Qs = "is-", W = (e, t, n, r, a) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), a && (o += `--${a}`), o;
}, Vn = Symbol("namespaceContextKey"), eu = (e) => {
  const t = e || (U() ? me(Vn, S(Se)) : S(Se));
  return V(() => u(t) || Se);
}, tu = (e, t) => {
  const n = eu(t);
  return {
    namespace: n,
    b: (f = "") => W(n.value, e, f, "", ""),
    e: (f) => f ? W(n.value, e, "", f, "") : "",
    m: (f) => f ? W(n.value, e, "", "", f) : "",
    be: (f, m) => f && m ? W(n.value, e, f, m, "") : "",
    em: (f, m) => f && m ? W(n.value, e, "", f, m) : "",
    bm: (f, m) => f && m ? W(n.value, e, f, "", m) : "",
    bem: (f, m, p) => f && m && p ? W(n.value, e, f, m, p) : "",
    is: (f, ...m) => {
      const p = m.length >= 1 ? m[0] : !0;
      return f && p ? `${Qs}${f}` : "";
    },
    cssVar: (f) => {
      const m = {};
      for (const p in f)
        f[p] && (m[`--${n.value}-${p}`] = f[p]);
      return m;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const m = {};
      for (const p in f)
        f[p] && (m[`--${n.value}-${e}-${p}`] = f[p]);
      return m;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, Rt = S(0), Nn = 2e3, Fn = Symbol("zIndexContextKey"), nu = (e) => {
  const t = e || (U() ? me(Fn, void 0) : void 0), n = V(() => {
    const o = u(t);
    return ks(o) ? o : Nn;
  }), r = V(() => n.value + Rt.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Rt.value++, r.value)
  };
};
Hs({
  type: String,
  values: Ys,
  required: !1
});
const ru = Symbol("size"), Ln = Symbol(), Ee = S();
function zn(e, t = void 0) {
  const n = U() ? me(Ln, Ee) : Ee;
  return e ? V(() => {
    var r, a;
    return (a = (r = n.value) == null ? void 0 : r[e]) != null ? a : t;
  }) : n;
}
function au(e, t) {
  const n = zn(), r = tu(e, V(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.namespace) || Se;
  })), a = Xs(V(() => {
    var s;
    return (s = n.value) == null ? void 0 : s.locale;
  })), o = nu(V(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.zIndex) || Nn;
  })), l = V(() => {
    var s;
    return u(t) || ((s = n.value) == null ? void 0 : s.size) || "";
  });
  return ou(V(() => u(n) || {})), {
    ns: r,
    locale: a,
    zIndex: o,
    size: l
  };
}
const ou = (e, t, n = !1) => {
  var r;
  const a = !!U(), o = a ? zn() : void 0, l = (r = t == null ? void 0 : t.provide) != null ? r : a ? Gn : void 0;
  if (!l) {
    Ds("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = V(() => {
    const g = u(e);
    return o != null && o.value ? lu(o.value, g) : g;
  });
  return l(Ln, s), l(In, V(() => s.value.locale)), l(Vn, V(() => s.value.namespace)), l(Fn, V(() => s.value.zIndex)), l(ru, {
    size: V(() => s.value.size || "")
  }), (n || !Ee.value) && (Ee.value = s.value), s;
}, lu = (e, t) => {
  var n;
  const r = [.../* @__PURE__ */ new Set([...Dt(e), ...Dt(t)])], a = {};
  for (const o of r)
    a[o] = (n = t[o]) != null ? n : e[o];
  return a;
};
function su(e) {
  let t;
  const n = S(!1), r = Hn({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function a(d) {
    r.text = d;
  }
  function o() {
    const d = r.parent, x = i.ns;
    if (!d.vLoadingAddClassList) {
      let b = d.getAttribute("loading-number");
      b = Number.parseInt(b) - 1, b ? d.setAttribute("loading-number", b.toString()) : (Ae(d, x.bm("parent", "relative")), d.removeAttribute("loading-number")), Ae(d, x.bm("parent", "hidden"));
    }
    l(), v.unmount();
  }
  function l() {
    var d, x;
    (x = (d = i.$el) == null ? void 0 : d.parentNode) == null || x.removeChild(i.$el);
  }
  function s() {
    var d;
    e.beforeClose && !e.beforeClose() || (n.value = !0, clearTimeout(t), t = window.setTimeout(g, 400), r.visible = !1, (d = e.closed) == null || d.call(e));
  }
  function g() {
    if (!n.value)
      return;
    const d = r.parent;
    n.value = !1, d.vLoadingAddClassList = void 0, o();
  }
  const h = Ke({
    name: "ElLoading",
    setup(d, { expose: x }) {
      const { ns: b, zIndex: f } = au("loading");
      return x({
        ns: b,
        zIndex: f
      }), () => {
        const m = r.spinner || r.svg, p = fe("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...m ? { innerHTML: m } : {}
        }, [
          fe("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), C = r.text ? fe("p", { class: b.b("text") }, [r.text]) : void 0;
        return fe(Yn, {
          name: b.b("fade"),
          onAfterLeave: g
        }, {
          default: T(() => [
            Ht(P("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                b.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              fe("div", {
                class: b.b("spinner")
              }, [p, C])
            ]), [[Wn, r.visible]])
          ])
        });
      };
    }
  }), v = Zn(h), i = v.mount(document.createElement("div"));
  return {
    ...qn(r),
    setText: a,
    removeElLoadingChild: l,
    close: s,
    handleAfterLeave: g,
    vm: i,
    get $el() {
      return i.$el;
    }
  };
}
let Te;
const uu = function(e = {}) {
  if (!qe)
    return;
  const t = iu(e);
  if (t.fullscreen && Te)
    return Te;
  const n = su({
    ...t,
    closed: () => {
      var a;
      (a = t.closed) == null || a.call(t), t.fullscreen && (Te = void 0);
    }
  });
  cu(t, t.parent, n), Ut(t, t.parent, n), t.parent.vLoadingAddClassList = () => Ut(t, t.parent, n);
  let r = t.parent.getAttribute("loading-number");
  return r ? r = `${Number.parseInt(r) + 1}` : r = "1", t.parent.setAttribute("loading-number", r), t.parent.appendChild(n.$el), He(() => n.visible.value = t.visible), t.fullscreen && (Te = n), n;
}, iu = (e) => {
  var t, n, r, a;
  let o;
  return Je(e.target) ? o = (t = document.querySelector(e.target)) != null ? t : document.body : o = e.target || document.body, {
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
}, cu = async (e, t, n) => {
  const { nextZIndex: r } = n.vm.zIndex || n.vm._.exposed.zIndex, a = {};
  if (e.fullscreen)
    n.originalPosition.value = ge(document.body, "position"), n.originalOverflow.value = ge(document.body, "overflow"), a.zIndex = r();
  else if (e.parent === document.body) {
    n.originalPosition.value = ge(document.body, "position"), await He();
    for (const o of ["top", "left"]) {
      const l = o === "top" ? "scrollTop" : "scrollLeft";
      a[o] = `${e.target.getBoundingClientRect()[o] + document.body[l] + document.documentElement[l] - Number.parseInt(ge(document.body, `margin-${o}`), 10)}px`;
    }
    for (const o of ["height", "width"])
      a[o] = `${e.target.getBoundingClientRect()[o]}px`;
  } else
    n.originalPosition.value = ge(t, "position");
  for (const [o, l] of Object.entries(a))
    n.$el.style[o] = l;
}, Ut = (e, t, n) => {
  const r = n.vm.ns || n.vm._.exposed.ns;
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? Ae(t, r.bm("parent", "relative")) : Bt(t, r.bm("parent", "relative")), e.fullscreen && e.lock ? Bt(t, r.bm("parent", "hidden")) : Ae(t, r.bm("parent", "hidden"));
}, xe = Symbol("ElLoading"), Kt = (e, t) => {
  var n, r, a, o;
  const l = t.instance, s = (d) => Oe(t.value) ? t.value[d] : void 0, g = (d) => {
    const x = Je(d) && (l == null ? void 0 : l[d]) || d;
    return x && S(x);
  }, h = (d) => g(s(d) || e.getAttribute(`element-loading-${Cr(d)}`)), v = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, i = {
    text: h("text"),
    svg: h("svg"),
    svgViewBox: h("svgViewBox"),
    spinner: h("spinner"),
    background: h("background"),
    customClass: h("customClass"),
    fullscreen: v,
    target: (r = s("target")) != null ? r : v ? void 0 : e,
    body: (a = s("body")) != null ? a : t.modifiers.body,
    lock: (o = s("lock")) != null ? o : t.modifiers.lock
  };
  e[xe] = {
    options: i,
    instance: uu(i)
  };
}, du = (e, t) => {
  for (const n of Object.keys(t))
    Ge(t[n]) && (t[n].value = e[n]);
}, fu = {
  mounted(e, t) {
    t.value && Kt(e, t);
  },
  updated(e, t) {
    const n = e[xe];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Kt(e, t) : t.value && t.oldValue ? Oe(t.value) && du(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[xe]) == null || t.instance.close(), e[xe] = null;
  }
}, pu = {
  input: "请输入",
  select: "请选择",
  start: "开始",
  end: "结束",
  search: "搜索",
  reset: "重置"
}, gu = {
  input: "请输入",
  select: "请选择",
  start: "开始",
  end: "结束",
  search: "搜索",
  reset: "重置"
}, vu = {
  input: "Please Input",
  select: "Please Select",
  start: "Start",
  end: "End",
  search: "Search",
  reset: "Reset"
}, yu = {
  zh: pu,
  zh_CN: gu,
  en: vu
}, hu = () => localStorage.getItem("language") || "zh_CN", B = (e) => {
  var n;
  const t = hu();
  return ((n = yu[t]) == null ? void 0 : n[e]) || e;
}, mu = { class: "v-filter" }, kn = {
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
      const p = r.filter.filter((c) => c.required), C = {};
      return p.forEach((c) => {
        C[c.prop] = [
          { required: !0, message: c.message || `${c.label}不能为空` }
        ];
      }), C;
    }), o = S(), l = S({}), s = S([]), g = S(["date", "daterange", "month", "year", "monthrange"]), h = V(() => 24 / r.col);
    q(() => r.filter, (p) => {
      v(p);
    }, { deep: !0 });
    const v = (p = []) => {
      s.value = p.map((C) => ((C.initValue || C.initValue === 0) && (l.value[C.prop] = C.initValue), {
        ...C
      }));
    }, i = () => {
      l.value = {};
    }, d = (p, C) => {
      g.value.includes(C.scope) && (C.startKey && (l.value[C.startKey] = p && p.length > 1 ? p[0] : ""), C.endKey && (l.value[C.endKey] = p && p.length > 1 ? p[1] : ""));
    }, x = () => new Promise((p, C) => {
      o.value.validate((c) => {
        if (c) {
          const w = {};
          s.value.forEach((j) => {
            const ie = j.filterProp || j.prop;
            j.startKey ? (w[j.startKey] = l.value[j.startKey], w[j.endKey] = l.value[j.endKey]) : w[ie] = l.value[j.prop], j.format && typeof j.format == "function" && (w[ie] = j.format(l.value[j.prop]));
          }), n.$emit("search", w), p();
        } else
          C();
      });
    }), b = () => {
      i(), n.$emit("reset");
    };
    return t({
      search: x,
      getCurrentFilter: () => l.value,
      setCurrentFilter: (p, C = !0) => {
        l.value = {
          ...p
        }, C && x();
      }
    }), Ye(() => {
      v(r.filter);
    }), (p, C) => (y(), O("div", mu, [
      P(u(er), null, {
        default: T(() => [
          P(u(Wt), {
            ref_key: "filterFormRef",
            ref: o,
            model: l.value,
            "label-width": e.labelWidth,
            rules: a.value
          }, {
            default: T(() => [
              P(u(ze), { gutter: 20 }, {
                default: T(() => [
                  (y(!0), O(F, null, L(s.value, (c) => (y(), $(u(ae), {
                    span: h.value,
                    key: c.prop
                  }, {
                    default: T(() => [
                      P(u(Zt), {
                        label: c.label,
                        "label-width": c.labelWidth || e.labelWidth,
                        prop: c.prop
                      }, {
                        default: T(() => [
                          c.scope === "input" ? (y(), $(u(Ce), {
                            key: 0,
                            modelValue: l.value[c.prop],
                            "onUpdate:modelValue": (w) => l.value[c.prop] = w,
                            modelModifiers: { trim: !0 },
                            placeholder: c.placeholder || u(B)("input")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : E("", !0),
                          c.scope === "select" ? (y(), $(u(qt), N({
                            key: 1,
                            modelValue: l.value[c.prop],
                            "onUpdate:modelValue": (w) => l.value[c.prop] = w,
                            placeholder: c.placeholder || u(B)("select"),
                            clearable: "",
                            filterable: ""
                          }, {
                            ...c
                          }, {
                            "filter-method": (w) => {
                              var j;
                              return (j = c.remoteMethod) == null ? void 0 : j.call(c, w, c);
                            },
                            onChange: function(w) {
                              c.onchange && c.onchange(w);
                            }
                          }), {
                            default: T(() => [
                              (y(!0), O(F, null, L(c.options || [], (w) => (y(), $(u(Jt), {
                                key: w.value,
                                label: w.label,
                                value: w.value
                              }, null, 8, ["label", "value"]))), 128))
                            ]),
                            _: 2
                          }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder", "filter-method", "onChange"])) : E("", !0),
                          g.value.includes(c.scope) ? (y(), $(u(Xt), {
                            key: 2,
                            modelValue: l.value[c.prop],
                            "onUpdate:modelValue": (w) => l.value[c.prop] = w,
                            "value-format": c.format || "YYYY-MM-DD HH:mm:ss",
                            type: c.scope,
                            placeholder: c.placeholder || u(B)("select"),
                            "start-placeholder": u(B)("start"),
                            "end-placeholder": u(B)("end"),
                            clearable: "",
                            onChange: (w) => d(w, c)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value-format", "type", "placeholder", "start-placeholder", "end-placeholder", "onChange"])) : E("", !0),
                          c.scope === "range" ? (y(), $(u(ze), {
                            key: 3,
                            type: "flex",
                            align: "middle"
                          }, {
                            default: T(() => [
                              P(u(ae), { span: 11 }, {
                                default: T(() => [
                                  P(u(Ce), {
                                    modelValue: l.value[c.startKey],
                                    "onUpdate:modelValue": (w) => l.value[c.startKey] = w,
                                    placeholder: c.placeholder || u(B)("input"),
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024),
                              P(u(ae), {
                                class: "line",
                                span: 2
                              }, {
                                default: T(() => [
                                  R("-")
                                ]),
                                _: 1
                              }),
                              P(u(ae), { span: 11 }, {
                                default: T(() => [
                                  P(u(Ce), {
                                    modelValue: l.value[c.endKey],
                                    "onUpdate:modelValue": (w) => l.value[c.endKey] = w,
                                    placeholder: c.placeholder || u(B)("input"),
                                    style: { width: "100%" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)) : E("", !0),
                          c.scope === "cascader" ? (y(), $(u(tr), {
                            key: 4,
                            modelValue: l.value[c.prop],
                            "onUpdate:modelValue": (w) => l.value[c.prop] = w,
                            options: c.options,
                            props: c.cascaderProps || { checkStrictly: !0, emitPath: !1 },
                            "collapse-tags": c.collapseTags,
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "props", "collapse-tags"])) : E("", !0)
                        ]),
                        _: 2
                      }, 1032, ["label", "label-width", "prop"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128)),
                  P(u(ae), { span: h.value }, {
                    default: T(() => [
                      P(u(oe), {
                        type: "primary",
                        icon: u(Ks),
                        onClick: x
                      }, {
                        default: T(() => [
                          R(z(u(B)("search")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      P(u(oe), {
                        icon: u(Rs),
                        onClick: b
                      }, {
                        default: T(() => [
                          R(z(u(B)("reset")), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      (y(!0), O(F, null, L(e.btns, (c) => (y(), $(u(oe), {
                        key: c.text,
                        onClick: c.click
                      }, {
                        default: T(() => [
                          R(z(c.text), 1)
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
var bu = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
function wu(e) {
  document.documentElement.scrollTop = e, document.body.parentNode.scrollTop = e, document.body.scrollTop = e;
}
function Tu() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
function Gt(e, t, n) {
  const r = Tu(), a = e - r, o = 20;
  let l = 0;
  t = typeof t > "u" ? 500 : t;
  var s = function() {
    l += o;
    var g = Math.easeInOutQuad(l, r, a, t);
    wu(g), l < t ? bu(s) : n && typeof n == "function" && n();
  };
  s();
}
const Mn = {
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
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  setup(e) {
    const t = e, n = S(t.pageSize || 10), r = S(t.page || 1), { proxy: a } = U();
    q(() => t.page, (s) => {
      r.value = s;
    }), q(() => t.pageSize, (s) => {
      n.value = s;
    });
    const o = (s) => {
      r.value * s > t.total && (r.value = 1), n.value = s, a.$emit("pagination", { pageNum: r.value, pageSize: s }), t.autoScroll && Gt(0, 800);
    }, l = (s) => {
      r.value = s, a.$emit("pagination", { pageNum: s, pageSize: n.value }), t.autoScroll && Gt(0, 800);
    };
    return (s, g) => (y(), O("div", {
      class: We([{ hidden: e.hidden }, "v-pagination"])
    }, [
      P(u(nr), N({
        "current-page": r.value,
        layout: e.layout,
        "page-size": n.value
      }, s.$attrs, {
        onSizeChange: o,
        onCurrentChange: l
      }), null, 16, ["current-page", "layout", "page-size"])
    ], 2));
  }
}, Cu = { key: 0 }, $u = { key: 1 }, Su = { key: 2 }, Ve = {
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
    const n = e, r = t, a = S(Me(n.row, n.col.prop));
    q(() => Me(n.row, n.col.prop), (h) => {
      a.value = h;
    });
    const o = () => {
      zs(n.row, n.col.prop, a.value), n.col.change && n.col.change(n.row, a.value), r("update:row", n.row);
    }, l = (h, v) => v.find((d) => d.value === h) || {}, s = (h, v) => {
      const i = l(h, v), d = { ...i };
      return String(i.type).startsWith("#") && (d.color = i.type), d;
    }, g = (h, v) => {
      const i = l(h, v);
      return (i == null ? void 0 : i.label) || h;
    };
    return (h, v) => (y(), O(F, null, [
      e.col.scope ? E("", !0) : (y(), O("div", Cu, z(e.row[e.col.prop]), 1)),
      e.col.scope === "number-col" ? (y(), O("div", $u, z(e.row[e.col.prop] ? Number(e.row[e.col.prop]).toLocaleString() : ""), 1)) : E("", !0),
      e.col.scope === "render" && e.col.render ? (y(), O("div", Su, z(e.col.render(e.row, e.col.prop)), 1)) : E("", !0),
      ["textarea", "input"].includes(e.col.scope) ? (y(), $(u(Ce), N({
        key: 3,
        type: e.col.scope || "text"
      }, {
        ...Mt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": v[0] || (v[0] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : E("", !0),
      e.col.scope === "input-number" ? (y(), $(u(rr), N({ key: 4 }, {
        ...Mt(e.col, ["label"])
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": v[1] || (v[1] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["modelValue"])) : E("", !0),
      e.col.scope === "select" ? (y(), $(u(qt), N({ key: 5 }, {
        ...e.col
      }, {
        modelValue: a.value,
        "onUpdate:modelValue": v[2] || (v[2] = (i) => a.value = i),
        onChange: o
      }), {
        default: T(() => [
          (y(!0), O(F, null, L(e.col.options, (i) => (y(), $(u(Jt), {
            key: i.value,
            label: i.label,
            value: i.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"])) : E("", !0),
      e.col.scope === "tag" && g(e.row[e.col.prop], e.col.options) ? (y(), $(u(ar), Ze(N({ key: 6 }, s(e.row[e.col.prop], e.col.options))), {
        default: T(() => [
          R(z(g(e.row[e.col.prop], e.col.options)), 1)
        ]),
        _: 1
      }, 16)) : E("", !0),
      e.col.scope === "img" ? (y(), $(u(or), {
        key: 7,
        src: a.value,
        fit: e.col.fit || "cover"
      }, null, 8, ["src", "fit"])) : E("", !0),
      ["year", "month", "date", "dates", "datetime", "week", "datetimerange", "daterange", "monthrange"].includes(e.col.scope) ? (y(), $(u(Xt), N({ key: 8 }, {
        ...e.col
      }, {
        type: e.col.scope,
        modelValue: a.value,
        "onUpdate:modelValue": v[3] || (v[3] = (i) => a.value = i),
        onChange: o
      }), null, 16, ["type", "modelValue"])) : E("", !0),
      e.col.scope === "switch" ? (y(), $(u(lr), N({
        key: 9,
        modelValue: a.value,
        "onUpdate:modelValue": v[4] || (v[4] = (i) => a.value = i),
        onChange: o
      }, {
        ...e.col
      }), null, 16, ["modelValue"])) : E("", !0),
      e.col.scope === "radio" ? (y(), $(u(sr), {
        key: 10,
        modelValue: a.value,
        "onUpdate:modelValue": v[5] || (v[5] = (i) => a.value = i),
        onChange: o
      }, {
        default: T(() => [
          (y(!0), O(F, null, L(e.col.options, (i) => (y(), $(u(Qt), {
            label: i.value,
            key: i.label
          }, {
            default: T(() => [
              R(z(i.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : E("", !0)
    ], 64));
  }
}, xu = (e, t = "拷贝成功") => {
  if (navigator.clipboard)
    navigator.clipboard.writeText(e), dt.success(t);
  else {
    const n = document.createElement("textarea");
    document.body.appendChild(n), n.style.position = "fixed", n.style.clip = "rect(0 0 0 0)", n.style.top = "10px", n.value = e, n.select(), document.execCommand("copy", !0), document.body.removeChild(n), dt.success(t);
  }
}, Ue = (e = 32) => {
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = t.length;
  let r = "";
  for (let a = 0; a < e; a++)
    r += t.charAt(Math.floor(Math.random() * n));
  return r;
}, Fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  copy: xu,
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
    const n = e, { proxy: r } = U(), a = S(null), o = S(null), l = S(null), s = S(Ue());
    q(() => n.columns, (b) => {
      s.value = Ue();
    }, { deep: !0, immediate: !0 });
    const g = () => {
      const b = document.querySelector(".table-container .c-table");
      if (b) {
        const { top: f } = b.getBoundingClientRect();
        o.value = window.innerHeight - f - 50;
      }
    }, h = () => {
      l.value.clearSelection();
    }, v = () => {
      l.value.setCurrentRow();
    }, i = (b) => {
      a.value = b ? b.id : null, n.radio && n.radio(b);
    }, d = (b, f, m) => {
      r.$emit(b.event, f, m), r.$emit("btnClick", {
        btn: b,
        row: f,
        index: m
      });
    }, x = (b, f, m) => "if" in b ? typeof b.if == "function" ? b.if(f, m) : f[b.if] : b.render ? !!b.render(f, m) : !!b.label;
    return t({
      clearSelection: h,
      clearRadio: v
    }), Ye(() => {
      n.onSize && (window.addEventListener("resize", g), He(() => {
        g();
      }));
    }), Jn(() => {
      n.onSize && window.removeEventListener("resize", g);
    }), (b, f) => {
      const m = Xn("v-table", !0);
      return y(), O("div", {
        class: We(["v-table", { pd: e.onAdd }])
      }, [
        (y(), $(u(ur), N({
          ref_key: "tableRef",
          ref: l,
          border: ""
        }, e.tableProps, {
          data: e.data,
          key: s.value,
          "highlight-current-row": !!e.radio,
          onCurrentChange: i,
          onSelectionChange: e.selection
        }), {
          default: T(() => [
            e.selection ? (y(), $(u(Ne), {
              key: 0,
              type: "selection",
              width: "40"
            })) : E("", !0),
            e.radio ? (y(), $(u(Ne), {
              key: 1,
              fixed: "left",
              width: "60"
            }, {
              header: T(() => [
                be("div", {
                  class: "radio-header",
                  onClick: v
                }, "取消")
              ]),
              default: T(({ row: p }) => [
                P(u(Qt), {
                  modelValue: a.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (C) => a.value = C),
                  label: p.id
                }, null, 8, ["modelValue", "label"])
              ]),
              _: 1
            })) : E("", !0),
            (y(!0), O(F, null, L(e.columns, (p) => (y(), $(u(Ne), N({
              key: p.prop,
              width: p.width
            }, p), {
              default: T(({ row: C, $index: c }) => [
                ["btn", "table", "slot"].includes(p.scope) ? E("", !0) : (y(), $(Ve, {
                  key: 0,
                  row: C,
                  col: p
                }, null, 8, ["row", "col"])),
                p.scope === "table" ? (y(), $(m, {
                  key: 1,
                  data: C[p.prop],
                  columns: p.options
                }, null, 8, ["data", "columns"])) : E("", !0),
                p.scope === "btn" ? (y(!0), O(F, { key: 2 }, L(p.options || [], (w) => (y(), O(F, {
                  key: w.event
                }, [
                  x(w, C, c) ? (y(), $(u(oe), N({
                    key: 0,
                    link: "",
                    class: "v-table-btn",
                    type: w.type || "primary",
                    onClick: (j) => d(w, C, c)
                  }, {
                    ...w
                  }), {
                    default: T(() => [
                      R(z(w.label || (w.render ? w.render(C, c) : "")), 1)
                    ]),
                    _: 2
                  }, 1040, ["type", "onClick"])) : E("", !0)
                ], 64))), 128)) : E("", !0),
                le(b.$slots, p.prop, Ze(Yt({ row: C })))
              ]),
              _: 2
            }, 1040, ["width"]))), 128))
          ]),
          _: 3
        }, 16, ["data", "highlight-current-row", "onSelectionChange"])),
        e.onAdd ? (y(), O("div", {
          key: 0,
          class: "add-btn",
          onClick: f[1] || (f[1] = (...p) => e.onAdd && e.onAdd(...p))
        })) : E("", !0)
      ], 2);
    };
  }
}, _u = { class: "v-page-operator" }, Au = { class: "v-page-table" }, Eu = {
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
    const { GET_LIST: n, GET_TOTAL: r, PAGE_NUM_KEY: a, PAGE_SIZE_KEY: o, PAGE_SIZE: l = 10 } = hr(), { proxy: s } = U(), g = e, h = S([]), v = S({}), i = S(0), d = S({
      pageSize: l,
      pageNum: 1
    }), x = S({}), b = S(null), f = () => {
      var I;
      (I = b.value) == null || I.clearRadio();
    }, m = () => {
      var I;
      (I = b.value) == null || I.clearSelection();
    }, p = ({ btn: I, row: H, index: Y }) => {
      s.$emit(I.event, H, Y);
    }, C = S(!1), c = async (I = {}) => {
      if (g.getList) {
        C.value = !0;
        try {
          v.value = {
            [a]: d.value.pageNum || 1,
            [o]: d.value.pageSize || l,
            ...I
          };
          const H = await g.getList(v.value);
          let Y = n(H);
          g.formatList && (Y = g.formatList(Y)), h.value = Y.map((D, de) => ({
            ...D,
            index: de + 1 + (v.value[a] - 1) * v.value[o]
          })), i.value = r(H);
        } finally {
          C.value = !1;
        }
      }
    }, w = (I) => {
      d.value = I, m(), f(), c({
        ...I,
        ...x.value
      });
    }, j = async () => {
      m(), f(), await c({
        ...d.value,
        ...x.value
      });
    }, ie = (I) => {
      d.value.pageNum = 1, x.value = I, j(), s.$emit("search", I);
    }, Bn = () => {
      ce.value.search();
    }, ce = S(), Rn = () => ce.value.getCurrentFilter();
    return Ye(() => {
      g.init && (g.showFilter ? ce.value.search() : c());
    }), t({
      refreshList: j,
      clearSelection: m,
      clearRadio: f,
      search: Bn,
      getCurrentFilter: Rn,
      filterRef: ce
    }), (I, H) => {
      const Y = fu;
      return y(), O("div", {
        class: We(["v-page", { pd: g.table && g.table.onAdd }])
      }, [
        e.showFilter ? (y(), $(kn, {
          key: 0,
          ref_key: "filterRef",
          ref: ce,
          filter: e.filter,
          "label-width": e.filterLabelWidth,
          btns: e.filterBtns,
          col: e.filterCol,
          onSearch: ie,
          onReset: H[0] || (H[0] = () => ie({}))
        }, null, 8, ["filter", "label-width", "btns", "col"])) : E("", !0),
        be("div", _u, [
          (y(!0), O(F, null, L(e.btns, (D, de) => (y(), $(u(oe), {
            key: de,
            type: D.type || "primary",
            onClick: (Un) => D.click && D.click(Un)
          }, {
            default: T(() => [
              R(z(D.label), 1)
            ]),
            _: 2
          }, 1032, ["type", "onClick"]))), 128)),
          le(I.$slots, "btn")
        ]),
        Ht((y(), O("div", Au, [
          P(Dn, N({
            ref_key: "tableRef",
            ref: b,
            data: h.value,
            columns: e.columns,
            selection: e.selection,
            radio: e.radio
          }, {
            ...g.table
          }, { onBtnClick: p }), Qn({ _: 2 }, [
            L(e.columns, (D) => ({
              name: D.prop,
              fn: T((de) => [
                le(I.$slots, D.prop, Ze(Yt(de)))
              ])
            }))
          ]), 1040, ["data", "columns", "selection", "radio"])
        ])), [
          [Y, C.value]
        ]),
        e.showPagination ? (y(), $(Mn, {
          key: 1,
          page: d.value.pageNum,
          "page-size": d.value.pageSize,
          total: i.value,
          onPagination: w
        }, null, 8, ["page", "page-size", "total"])) : E("", !0)
      ], 2);
    };
  }
}, Ou = {
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
    const r = e, a = n, o = S({ ...r.value }), l = S();
    q(() => r.value, () => {
      s();
    }, { deep: !0 });
    const s = () => {
      o.value = {
        ...r.value
      };
    }, g = (v) => {
      a("update:value", v);
    };
    return t({
      validate: () => new Promise((v, i) => {
        l.value.validate((d) => {
          d ? v(o.value) : i();
        });
      }),
      reset: s,
      form: o
    }), (v, i) => (y(), $(u(Wt), N({
      class: "c-form",
      ref_key: "formRef",
      ref: l,
      model: o.value,
      rules: e.rules,
      "label-width": "130px"
    }, v.$attrs), {
      default: T(() => [
        P(u(ze), { gutter: 20 }, {
          default: T(() => [
            (y(!0), O(F, null, L(e.list, (d) => (y(), $(u(ae), {
              span: d.colSpan || 24 / e.col,
              key: d.prop
            }, {
              default: T(() => [
                P(u(Zt), {
                  label: d.label,
                  prop: d.prop
                }, {
                  default: T(() => [
                    P(Ve, {
                      row: o.value,
                      col: d,
                      "onUpdate:row": g
                    }, null, 8, ["row", "col"]),
                    le(v.$slots, d.prop)
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
function Pu(e) {
  const t = U(), n = S(e.modelValue);
  return q(() => e.modelValue, (o) => {
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
const ju = { class: "dialog-footer" }, Iu = {
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
    const t = e, { dialogVisible: n, closeDialog: r, beforeClose: a } = Pu(t);
    return (o, l) => (y(), $(u(ir), N({
      modelValue: u(n),
      "onUpdate:modelValue": l[0] || (l[0] = (s) => Ge(n) ? n.value = s : null),
      title: e.title,
      "close-on-click-modal": !1,
      "before-close": u(a)
    }, e.dialogProps), {
      footer: T(() => [
        be("div", ju, [
          P(u(oe), { onClick: u(r) }, {
            default: T(() => [
              R("Cancel")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: T(() => [
        P(u(cr), N({ class: "v-detail" }, e.descProps), {
          default: T(() => [
            (y(!0), O(F, null, L(e.columns, (s) => (y(), $(u(dr), {
              label: s.label,
              span: s.span,
              key: s.prop
            }, {
              default: T(() => [
                P(Ve, {
                  row: e.data,
                  col: s
                }, null, 8, ["row", "col"]),
                le(o.$slots, s.prop)
              ]),
              _: 2
            }, 1032, ["label", "span"]))), 128))
          ]),
          _: 3
        }, 16),
        le(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue", "title", "before-close"]));
  }
}, Lu = {
  install(e, t = {}) {
    const { config: n } = t;
    n && yr(n, e), e.component("VPage", Eu), e.component("VFilter", kn), e.component("VTable", Dn), e.component("VElement", Ve), e.component("VPagination", Mn), e.component("VForm", Ou), e.component("VDetail", Iu);
  }
};
export {
  Iu as VDetail,
  Ve as VElement,
  kn as VFilter,
  Ou as VForm,
  Mn as VPagination,
  Dn as VTable,
  Lu as default,
  yr as setConfig,
  Fu as utils
};
