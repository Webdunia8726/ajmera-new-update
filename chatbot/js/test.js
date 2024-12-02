! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t()
}(this, function() {
    "use strict";

    function e(e) {
        return void 0 === e || null === e
    }

    function t(e) {
        return void 0 !== e && null !== e
    }

    function n(e) {
        return !0 === e
    }

    function r(e) {
        return "string" == typeof e || "number" == typeof e
    }

    function i(e) {
        return null !== e && "object" == typeof e
    }

    function o(e) {
        return "[object Object]" === Ai.call(e)
    }

    function a(e) {
        return "[object RegExp]" === Ai.call(e)
    }

    function s(e) {
        return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
    }

    function c(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }

    function u(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return t ? function(e) {
            return n[e.toLowerCase()]
        } : function(e) {
            return n[e]
        }
    }

    function l(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1)
        }
    }

    function f(e, t) {
        return Si.call(e, t)
    }

    function p(e) {
        var t = Object.create(null);
        return function(n) {
            return t[n] || (t[n] = e(n))
        }
    }

    function d(e, t) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
        }
        return n._length = e.length, n
    }

    function v(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
        return r
    }

    function h(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function m(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && h(t, e[n]);
        return t
    }

    function g() {}

    function y(e, t) {
        var n = i(e),
            r = i(t);
        if (!n || !r) return !n && !r && String(e) === String(t);
        try {
            return JSON.stringify(e) === JSON.stringify(t)
        } catch (n) {
            return e === t
        }
    }

    function _(e, t) {
        for (var n = 0; n < e.length; n++)
            if (y(e[n], t)) return n;
        return -1
    }

    function b(e) {
        var t = !1;
        return function() {
            t || (t = !0, e.apply(this, arguments))
        }
    }

    function $(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t
    }

    function x(e, t, n, r) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        })
    }

    function w(e) {
        if (!Fi.test(e)) {
            var t = e.split(".");
            return function(e) {
                for (var n = 0; n < t.length; n++) {
                    if (!e) return;
                    e = e[t[n]]
                }
                return e
            }
        }
    }

    function C(e, t, n) {
        if (Pi.errorHandler) Pi.errorHandler.call(null, e, t, n);
        else {
            if (!Ui || "undefined" == typeof console) throw e;
            console.error(e)
        }
    }

    function k(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }

    function A(e) {
        oo.target && ao.push(oo.target), oo.target = e
    }

    function O() {
        oo.target = ao.pop()
    }

    function S(e, t) {
        e.__proto__ = t
    }

    function T(e, t, n) {
        for (var r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            x(e, o, t[o])
        }
    }

    function E(e, t) {
        if (i(e)) {
            var n;
            return f(e, "__ob__") && e.__ob__ instanceof fo ? n = e.__ob__ : lo.shouldConvert && !eo() && (Array.isArray(e) || o(e)) && Object.isExtensible(e) && !e._isVue && (n = new fo(e)), t && n && n.vmCount++, n
        }
    }

    function j(e, t, n, r) {
        var i = new oo,
            o = Object.getOwnPropertyDescriptor(e, t);
        if (!o || !1 !== o.configurable) {
            var a = o && o.get,
                s = o && o.set,
                c = E(n);
            Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var t = a ? a.call(e) : n;
                    return oo.target && (i.depend(), c && c.dep.depend(), Array.isArray(t) && I(t)), t
                },
                set: function(t) {
                    var r = a ? a.call(e) : n;
                    t === r || t !== t && r !== r || (s ? s.call(e, t) : n = t, c = E(t), i.notify())
                }
            })
        }
    }

    function N(e, t, n) {
        if (Array.isArray(e) && "number" == typeof t) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (f(e, t)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (j(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
    }

    function L(e, t) {
        if (Array.isArray(e) && "number" == typeof t) return void e.splice(t, 1);
        var n = e.__ob__;
        e._isVue || n && n.vmCount || f(e, t) && (delete e[t], n && n.dep.notify())
    }

    function I(e) {
        for (var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && I(t)
    }

    function D(e, t) {
        if (!t) return e;
        for (var n, r, i, a = Object.keys(t), s = 0; s < a.length; s++) n = a[s], r = e[n], i = t[n], f(e, n) ? o(r) && o(i) && D(r, i) : N(e, n, i);
        return e
    }

    function M(e, t) {
        return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
    }

    function P(e, t) {
        var n = Object.create(e || null);
        return t ? h(n, t) : n
    }

    function R(e) {
        var t = e.props;
        if (t) {
            var n, r, i, a = {};
            if (Array.isArray(t))
                for (n = t.length; n--;) "string" == typeof(r = t[n]) && (i = Ti(r), a[i] = {
                    type: null
                });
            else if (o(t))
                for (var s in t) r = t[s], i = Ti(s), a[i] = o(r) ? r : {
                    type: r
                };
            e.props = a
        }
    }

    function F(e) {
        var t = e.directives;
        if (t)
            for (var n in t) {
                var r = t[n];
                "function" == typeof r && (t[n] = {
                    bind: r,
                    update: r
                })
            }
    }

    function B(e, t, n) {
        function r(r) {
            var i = po[r] || vo;
            c[r] = i(e[r], t[r], n, r)
        }
        "function" == typeof t && (t = t.options), R(t), F(t);
        var i = t.extends;
        if (i && (e = B(e, i, n)), t.mixins)
            for (var o = 0, a = t.mixins.length; o < a; o++) e = B(e, t.mixins[o], n);
        var s, c = {};
        for (s in e) r(s);
        for (s in t) f(e, s) || r(s);
        return c
    }

    function H(e, t, n, r) {
        if ("string" == typeof n) {
            var i = e[t];
            if (f(i, n)) return i[n];
            var o = Ti(n);
            if (f(i, o)) return i[o];
            var a = Ei(o);
            if (f(i, a)) return i[a];
            var s = i[n] || i[o] || i[a];
            return s
        }
    }

    function U(e, t, n, r) {
        var i = t[e],
            o = !f(n, e),
            a = n[e];
        if (J(Boolean, i.type) && (o && !f(i, "default") ? a = !1 : J(String, i.type) || "" !== a && a !== ji(e) || (a = !0)), void 0 === a) {
            a = V(r, i, e);
            var s = lo.shouldConvert;
            lo.shouldConvert = !0, E(a), lo.shouldConvert = s
        }
        return a
    }

    function V(e, t, n) {
        if (f(t, "default")) {
            var r = t.default;
            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== z(t.type) ? r.call(e) : r
        }
    }

    function z(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : ""
    }

    function J(e, t) {
        if (!Array.isArray(t)) return z(t) === z(e);
        for (var n = 0, r = t.length; n < r; n++)
            if (z(t[n]) === z(e)) return !0;
        return !1
    }

    function K(e) {
        return new ho(void 0, void 0, void 0, String(e))
    }

    function q(e) {
        var t = new ho(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isCloned = !0, t
    }

    function W(e) {
        for (var t = e.length, n = new Array(t), r = 0; r < t; r++) n[r] = q(e[r]);
        return n
    }

    function Z(e) {
        function t() {
            var e = arguments,
                n = t.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = 0; r < n.length; r++) n[r].apply(null, e)
        }
        return t.fns = e, t
    }

    function G(t, n, r, i, o) {
        var a, s, c, u;
        for (a in t) s = t[a], c = n[a], u = _o(a), e(s) || (e(c) ? (e(s.fns) && (s = t[a] = Z(s)), r(u.name, s, u.once, u.capture, u.passive)) : s !== c && (c.fns = s, t[a] = c));
        for (a in n) e(t[a]) && (u = _o(a), i(u.name, n[a], u.capture))
    }

    function Y(r, i, o) {
        function a() {
            o.apply(this, arguments), l(s.fns, a)
        }
        var s, c = r[i];
        e(c) ? s = Z([a]) : t(c.fns) && n(c.merged) ? (s = c, s.fns.push(a)) : s = Z([c, a]), s.merged = !0, r[i] = s
    }

    function Q(n, r, i) {
        var o = r.options.props;
        if (!e(o)) {
            var a = {},
                s = n.attrs,
                c = n.props;
            if (t(s) || t(c))
                for (var u in o) {
                    var l = ji(u);
                    X(a, c, u, l, !0) || X(a, s, u, l, !1)
                }
            return a
        }
    }

    function X(e, n, r, i, o) {
        if (t(n)) {
            if (f(n, r)) return e[r] = n[r], o || delete n[r], !0;
            if (f(n, i)) return e[r] = n[i], o || delete n[i], !0
        }
        return !1
    }

    function ee(e) {
        for (var t = 0; t < e.length; t++)
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
        return e
    }

    function te(e) {
        return r(e) ? [K(e)] : Array.isArray(e) ? ne(e) : void 0
    }

    function ne(n, i) {
        var o, a, s, c = [];
        for (o = 0; o < n.length; o++) a = n[o], e(a) || "boolean" == typeof a || (s = c[c.length - 1], Array.isArray(a) ? c.push.apply(c, ne(a, (i || "") + "_" + o)) : r(a) ? t(s) && t(s.text) ? s.text += String(a) : "" !== a && c.push(K(a)) : t(a.text) && t(s) && t(s.text) ? c[c.length - 1] = K(s.text + a.text) : (t(a.tag) && e(a.key) && t(i) && (a.key = "__vlist" + i + "_" + o + "__"), c.push(a)));
        return c
    }

    function re(e, t) {
        return i(e) ? t.extend(e) : e
    }

    function ie(r, o, a) {
        if (n(r.error) && t(r.errorComp)) return r.errorComp;
        if (t(r.resolved)) return r.resolved;
        if (n(r.loading) && t(r.loadingComp)) return r.loadingComp;
        if (!t(r.contexts)) {
            var s = r.contexts = [a],
                c = !0,
                u = function() {
                    for (var e = 0, t = s.length; e < t; e++) s[e].$forceUpdate()
                },
                l = b(function(e) {
                    r.resolved = re(e, o), c || u()
                }),
                f = b(function(e) {
                    t(r.errorComp) && (r.error = !0, u())
                }),
                p = r(l, f);
            return i(p) && ("function" == typeof p.then ? e(r.resolved) && p.then(l, f) : t(p.component) && "function" == typeof p.component.then && (p.component.then(l, f), t(p.error) && (r.errorComp = re(p.error, o)), t(p.loading) && (r.loadingComp = re(p.loading, o), 0 === p.delay ? r.loading = !0 : setTimeout(function() {
                e(r.resolved) && e(r.error) && (r.loading = !0, u())
            }, p.delay || 200)), t(p.timeout) && setTimeout(function() {
                f(null)
            }, p.timeout))), c = !1, r.loading ? r.loadingComp : r.resolved
        }
        r.contexts.push(a)
    }

    function oe(e) {
        if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (t(r) && t(r.componentOptions)) return r
            }
    }

    function ae(e) {
        e._events = Object.create(null), e._hasHookEvent = !1;
        var t = e.$options._parentListeners;
        t && ue(e, t)
    }

    function se(e, t, n) {
        n ? go.$once(e, t) : go.$on(e, t)
    }

    function ce(e, t) {
        go.$off(e, t)
    }

    function ue(e, t, n) {
        go = e, G(t, n || {}, se, ce, e)
    }

    function le(e, t) {
        var n = {};
        if (!e) return n;
        for (var r = [], i = 0, o = e.length; i < o; i++) {
            var a = e[i];
            if (a.context !== t && a.functionalContext !== t || !a.data || null == a.data.slot) r.push(a);
            else {
                var s = a.data.slot,
                    c = n[s] || (n[s] = []);
                "template" === a.tag ? c.push.apply(c, a.children) : c.push(a)
            }
        }
        return r.every(fe) || (n.default = r), n
    }

    function fe(e) {
        return e.isComment || " " === e.text
    }

    function pe(e) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n][0]] = e[n][1];
        return t
    }

    function de(e) {
        var t = e.$options,
            n = t.parent;
        if (n && !t.abstract) {
            for (; n.$options.abstract && n.$parent;) n = n.$parent;
            n.$children.push(e)
        }
        e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
    }

    function ve(e, t, n) {
        e.$el = t, e.$options.render || (e.$options.render = yo), _e(e, "beforeMount");
        var r;
        return r = function() {
            e._update(e._render(), n)
        }, e._watcher = new So(e, r, g), n = !1, null == e.$vnode && (e._isMounted = !0, _e(e, "mounted")), e
    }

    function he(e, t, n, r, i) {
        var o = !!(i || e.$options._renderChildren || r.data.scopedSlots || e.$scopedSlots !== Ri);
        if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, t && e.$options.props) {
            lo.shouldConvert = !1;
            for (var a = e._props, s = e.$options._propKeys || [], c = 0; c < s.length; c++) {
                var u = s[c];
                a[u] = U(u, e.$options.props, t, e)
            }
            lo.shouldConvert = !0, e.$options.propsData = t
        }
        if (n) {
            var l = e.$options._parentListeners;
            e.$options._parentListeners = n, ue(e, n, l)
        }
        o && (e.$slots = le(i, r.context), e.$forceUpdate())
    }

    function me(e) {
        for (; e && (e = e.$parent);)
            if (e._inactive) return !0;
        return !1
    }

    function ge(e, t) {
        if (t) {
            if (e._directInactive = !1, me(e)) return
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) ge(e.$children[n]);
            _e(e, "activated")
        }
    }

    function ye(e, t) {
        if (!(t && (e._directInactive = !0, me(e)) || e._inactive)) {
            e._inactive = !0;
            for (var n = 0; n < e.$children.length; n++) ye(e.$children[n]);
            _e(e, "deactivated")
        }
    }

    function _e(e, t) {
        var n = e.$options[t];
        if (n)
            for (var r = 0, i = n.length; r < i; r++) try {
                n[r].call(e)
            } catch (n) {
                C(n, e, t + " hook")
            }
        e._hasHookEvent && e.$emit("hook:" + t)
    }

    function be() {
        $o.length = xo.length = 0, wo = {}, Co = ko = !1
    }

    function $e() {
        ko = !0;
        var e, t;
        for ($o.sort(function(e, t) {
                return e.id - t.id
            }), Ao = 0; Ao < $o.length; Ao++) e = $o[Ao], t = e.id, wo[t] = null, e.run();
        var n = xo.slice(),
            r = $o.slice();
        be(), Ce(n), xe(r), to && Pi.devtools && to.emit("flush")
    }

    function xe(e) {
        for (var t = e.length; t--;) {
            var n = e[t],
                r = n.vm;
            r._watcher === n && r._isMounted && _e(r, "updated")
        }
    }

    function we(e) {
        e._inactive = !1, xo.push(e)
    }

    function Ce(e) {
        for (var t = 0; t < e.length; t++) e[t]._inactive = !0, ge(e[t], !0)
    }

    function ke(e) {
        var t = e.id;
        if (null == wo[t]) {
            if (wo[t] = !0, ko) {
                for (var n = $o.length - 1; n >= 0 && $o[n].id > e.id;) n--;
                $o.splice(Math.max(n, Ao) + 1, 0, e)
            } else $o.push(e);
            Co || (Co = !0, ro($e))
        }
    }

    function Ae(e) {
        To.clear(), Oe(e, To)
    }

    function Oe(e, t) {
        var n, r, o = Array.isArray(e);
        if ((o || i(e)) && Object.isExtensible(e)) {
            if (e.__ob__) {
                var a = e.__ob__.dep.id;
                if (t.has(a)) return;
                t.add(a)
            }
            if (o)
                for (n = e.length; n--;) Oe(e[n], t);
            else
                for (r = Object.keys(e), n = r.length; n--;) Oe(e[r[n]], t)
        }
    }

    function Se(e, t, n) {
        Eo.get = function() {
            return this[t][n]
        }, Eo.set = function(e) {
            this[t][n] = e
        }, Object.defineProperty(e, n, Eo)
    }

    function Te(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && Ee(e, t.props), t.methods && Me(e, t.methods), t.data ? je(e) : E(e._data = {}, !0), t.computed && Le(e, t.computed), t.watch && Pe(e, t.watch)
    }

    function Ee(e, t) {
        var n = e.$options.propsData || {},
            r = e._props = {},
            i = e.$options._propKeys = [],
            o = !e.$parent;
        lo.shouldConvert = o;
        for (var a in t) ! function(o) {
            i.push(o);
            var a = U(o, t, n, e);
            j(r, o, a), o in e || Se(e, "_props", o)
        }(a);
        lo.shouldConvert = !0
    }

    function je(e) {
        var t = e.$options.data;
        t = e._data = "function" == typeof t ? Ne(t, e) : t || {}, o(t) || (t = {});
        for (var n = Object.keys(t), r = e.$options.props, i = n.length; i--;) r && f(r, n[i]) || $(n[i]) || Se(e, "_data", n[i]);
        E(t, !0)
    }

    function Ne(e, t) {
        try {
            return e.call(t)
        } catch (e) {
            return C(e, t, "data()"), {}
        }
    }

    function Le(e, t) {
        var n = e._computedWatchers = Object.create(null);
        for (var r in t) {
            var i = t[r],
                o = "function" == typeof i ? i : i.get;
            n[r] = new So(e, o, g, jo), r in e || Ie(e, r, i)
        }
    }

    function Ie(e, t, n) {
        "function" == typeof n ? (Eo.get = De(t), Eo.set = g) : (Eo.get = n.get ? !1 !== n.cache ? De(t) : n.get : g, Eo.set = n.set ? n.set : g), Object.defineProperty(e, t, Eo)
    }

    function De(e) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), oo.target && t.depend(), t.value
        }
    }

    function Me(e, t) {
        e.$options.props;
        for (var n in t) e[n] = null == t[n] ? g : d(t[n], e)
    }

    function Pe(e, t) {
        for (var n in t) {
            var r = t[n];
            if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) Re(e, n, r[i]);
            else Re(e, n, r)
        }
    }

    function Re(e, t, n) {
        var r;
        o(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
    }

    function Fe(e) {
        var t = e.$options.provide;
        t && (e._provided = "function" == typeof t ? t.call(e) : t)
    }

    function Be(e) {
        var t = He(e.$options.inject, e);
        t && Object.keys(t).forEach(function(n) {
            j(e, n, t[n])
        })
    }

    function He(e, t) {
        if (e) {
            for (var n = Array.isArray(e), r = Object.create(null), i = n ? e : no ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < i.length; o++)
                for (var a = i[o], s = n ? a : e[a], c = t; c;) {
                    if (c._provided && s in c._provided) {
                        r[a] = c._provided[s];
                        break
                    }
                    c = c.$parent
                }
            return r
        }
    }

    function Ue(e, n, r, i, o) {
        var a = {},
            s = e.options.props;
        if (t(s))
            for (var c in s) a[c] = U(c, s, n || {});
        else t(r.attrs) && Ve(a, r.attrs), t(r.props) && Ve(a, r.props);
        var u = Object.create(i),
            l = function(e, t, n, r) {
                return Ze(u, e, t, n, r, !0)
            },
            f = e.options.render.call(null, l, {
                data: r,
                props: a,
                children: o,
                parent: i,
                listeners: r.on || {},
                injections: He(e.options.inject, i),
                slots: function() {
                    return le(o, i)
                }
            });
        return f instanceof ho && (f.functionalContext = i, f.functionalOptions = e.options, r.slot && ((f.data || (f.data = {})).slot = r.slot)), f
    }

    function Ve(e, t) {
        for (var n in t) e[Ti(n)] = t[n]
    }

    function ze(r, o, a, s, c) {
        if (!e(r)) {
            var u = a.$options._base;
            if (i(r) && (r = u.extend(r)), "function" == typeof r && (!e(r.cid) || void 0 !== (r = ie(r, u, a)))) {
                ut(r), o = o || {}, t(o.model) && We(r.options, o);
                var l = Q(o, r, c);
                if (n(r.options.functional)) return Ue(r, l, o, a, s);
                var f = o.on;
                o.on = o.nativeOn, n(r.options.abstract) && (o = {}), Ke(o);
                var p = r.options.name || c;
                return new ho("vue-component-" + r.cid + (p ? "-" + p : ""), o, void 0, void 0, void 0, a, {
                    Ctor: r,
                    propsData: l,
                    listeners: f,
                    tag: c,
                    children: s
                })
            }
        }
    }

    function Je(e, n, r, i) {
        var o = e.componentOptions,
            a = {
                _isComponent: !0,
                parent: n,
                propsData: o.propsData,
                _componentTag: o.tag,
                _parentVnode: e,
                _parentListeners: o.listeners,
                _renderChildren: o.children,
                _parentElm: r || null,
                _refElm: i || null
            },
            s = e.data.inlineTemplate;
        return t(s) && (a.render = s.render, a.staticRenderFns = s.staticRenderFns), new o.Ctor(a)
    }

    function Ke(e) {
        e.hook || (e.hook = {});
        for (var t = 0; t < Lo.length; t++) {
            var n = Lo[t],
                r = e.hook[n],
                i = No[n];
            e.hook[n] = r ? qe(i, r) : i
        }
    }

    function qe(e, t) {
        return function(n, r, i, o) {
            e(n, r, i, o), t(n, r, i, o)
        }
    }

    function We(e, n) {
        var r = e.model && e.model.prop || "value",
            i = e.model && e.model.event || "input";
        (n.props || (n.props = {}))[r] = n.model.value;
        var o = n.on || (n.on = {});
        t(o[i]) ? o[i] = [n.model.callback].concat(o[i]) : o[i] = n.model.callback
    }

    function Ze(e, t, i, o, a, s) {
        return (Array.isArray(i) || r(i)) && (a = o, o = i, i = void 0), n(s) && (a = Do), Ge(e, t, i, o, a)
    }

    function Ge(e, n, r, i, o) {
        if (t(r) && t(r.__ob__)) return yo();
        if (!n) return yo();
        Array.isArray(i) && "function" == typeof i[0] && (r = r || {}, r.scopedSlots = {
            default: i[0]
        }, i.length = 0), o === Do ? i = te(i) : o === Io && (i = ee(i));
        var a, s;
        if ("string" == typeof n) {
            var c;
            s = Pi.getTagNamespace(n), a = Pi.isReservedTag(n) ? new ho(Pi.parsePlatformTagName(n), r, i, void 0, void 0, e) : t(c = H(e.$options, "components", n)) ? ze(c, r, e, i, n) : new ho(n, r, i, void 0, void 0, e)
        } else a = ze(n, r, e, i);
        return t(a) ? (s && Ye(a, s), a) : yo()
    }

    function Ye(n, r) {
        if (n.ns = r, "foreignObject" !== n.tag && t(n.children))
            for (var i = 0, o = n.children.length; i < o; i++) {
                var a = n.children[i];
                t(a.tag) && e(a.ns) && Ye(a, r)
            }
    }

    function Qe(e, t) {
        var n, r, o, a, s;
        if (Array.isArray(e) || "string" == typeof e)
            for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
        else if ("number" == typeof e)
            for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
        else if (i(e))
            for (a = Object.keys(e), n = new Array(a.length), r = 0, o = a.length; r < o; r++) s = a[r], n[r] = t(e[s], s, r);
        return n
    }

    function Xe(e, t, n, r) {
        var i = this.$scopedSlots[e];
        if (i) return n = n || {}, r && h(n, r), i(n) || t;
        var o = this.$slots[e];
        return o || t
    }

    function et(e) {
        return H(this.$options, "filters", e, !0) || Li
    }

    function tt(e, t, n) {
        var r = Pi.keyCodes[t] || n;
        return Array.isArray(r) ? -1 === r.indexOf(e) : r !== e
    }

    function nt(e, t, n, r) {
        if (n)
            if (i(n)) {
                Array.isArray(n) && (n = m(n));
                var o;
                for (var a in n) {
                    if ("class" === a || "style" === a) o = e;
                    else {
                        var s = e.attrs && e.attrs.type;
                        o = r || Pi.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                    }
                    a in o || (o[a] = n[a])
                }
            } else;
        return e
    }

    function rt(e, t) {
        var n = this._staticTrees[e];
        return n && !t ? Array.isArray(n) ? W(n) : q(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), ot(n, "__static__" + e, !1), n)
    }

    function it(e, t, n) {
        return ot(e, "__once__" + t + (n ? "_" + n : ""), !0), e
    }

    function ot(e, t, n) {
        if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && at(e[r], t + "_" + r, n);
        else at(e, t, n)
    }

    function at(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n
    }

    function st(e) {
        e._vnode = null, e._staticTrees = null;
        var t = e.$vnode = e.$options._parentVnode,
            n = t && t.context;
        e.$slots = le(e.$options._renderChildren, n), e.$scopedSlots = Ri, e._c = function(t, n, r, i) {
            return Ze(e, t, n, r, i, !1)
        }, e.$createElement = function(t, n, r, i) {
            return Ze(e, t, n, r, i, !0)
        }
    }

    function ct(e, t) {
        var n = e.$options = Object.create(e.constructor.options);
        n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
    }

    function ut(e) {
        var t = e.options;
        if (e.super) {
            var n = ut(e.super);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var r = lt(e);
                r && h(e.extendOptions, r), t = e.options = B(n, e.extendOptions), t.name && (t.components[t.name] = e)
            }
        }
        return t
    }

    function lt(e) {
        var t, n = e.options,
            r = e.extendOptions,
            i = e.sealedOptions;
        for (var o in n) n[o] !== i[o] && (t || (t = {}), t[o] = ft(n[o], r[o], i[o]));
        return t
    }

    function ft(e, t, n) {
        if (Array.isArray(e)) {
            var r = [];
            n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t];
            for (var i = 0; i < e.length; i++)(t.indexOf(e[i]) >= 0 || n.indexOf(e[i]) < 0) && r.push(e[i]);
            return r
        }
        return e
    }

    function pt(e) {
        this._init(e)
    }

    function dt(e) {
        e.use = function(e) {
            if (!e.installed) {
                var t = v(arguments, 1);
                return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t), e.installed = !0, this
            }
        }
    }

    function vt(e) {
        e.mixin = function(e) {
            this.options = B(this.options, e)
        }
    }

    function ht(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function(e) {
            e = e || {};
            var n = this,
                r = n.cid,
                i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];
            var o = e.name || n.options.name,
                a = function(e) {
                    this._init(e)
                };
            return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = B(n.options, e), a.super = n, a.options.props && mt(a), a.options.computed && gt(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Di.forEach(function(e) {
                a[e] = n[e]
            }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = h({}, a.options), i[r] = a, a
        }
    }

    function mt(e) {
        var t = e.options.props;
        for (var n in t) Se(e.prototype, "_props", n)
    }

    function gt(e) {
        var t = e.options.computed;
        for (var n in t) Ie(e.prototype, n, t[n])
    }

    function yt(e) {
        Di.forEach(function(t) {
            e[t] = function(e, n) {
                return n ? ("component" === t && o(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                    bind: n,
                    update: n
                }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
            }
        })
    }

    function _t(e) {
        return e && (e.Ctor.options.name || e.tag)
    }

    function bt(e, t) {
        return "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!a(e) && e.test(t)
    }

    function $t(e, t, n) {
        for (var r in e) {
            var i = e[r];
            if (i) {
                var o = _t(i.componentOptions);
                o && !n(o) && (i !== t && xt(i), e[r] = null)
            }
        }
    }

    function xt(e) {
        e && e.componentInstance.$destroy()
    }

    function wt(e) {
        for (var n = e.data, r = e, i = e; t(i.componentInstance);) i = i.componentInstance._vnode, i.data && (n = Ct(i.data, n));
        for (; t(r = r.parent);) r.data && (n = Ct(n, r.data));
        return kt(n)
    }

    function Ct(e, n) {
        return {
            staticClass: At(e.staticClass, n.staticClass),
            class: t(e.class) ? [e.class, n.class] : n.class
        }
    }

    function kt(e) {
        var n = e.class,
            r = e.staticClass;
        return t(r) || t(n) ? At(r, Ot(n)) : ""
    }

    function At(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }

    function Ot(n) {
        if (e(n)) return "";
        if ("string" == typeof n) return n;
        var r = "";
        if (Array.isArray(n)) {
            for (var o, a = 0, s = n.length; a < s; a++) t(n[a]) && t(o = Ot(n[a])) && "" !== o && (r += o + " ");
            return r.slice(0, -1)
        }
        if (i(n)) {
            for (var c in n) n[c] && (r += c + " ");
            return r.slice(0, -1)
        }
        return r
    }

    function St(e) {
        return aa(e) ? "svg" : "math" === e ? "math" : void 0
    }

    function Tt(e) {
        if (!Ui) return !0;
        if (ca(e)) return !1;
        if (e = e.toLowerCase(), null != ua[e]) return ua[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? ua[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ua[e] = /HTMLUnknownElement/.test(t.toString())
    }

    function Et(e) {
        if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t || document.createElement("div")
        }
        return e
    }

    function jt(e, t) {
        var n = document.createElement(e);
        return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
    }

    function Nt(e, t) {
        return document.createElementNS(ia[e], t)
    }

    function Lt(e) {
        return document.createTextNode(e)
    }

    function It(e) {
        return document.createComment(e)
    }

    function Dt(e, t, n) {
        e.insertBefore(t, n)
    }

    function Mt(e, t) {
        e.removeChild(t)
    }

    function Pt(e, t) {
        e.appendChild(t)
    }

    function Rt(e) {
        return e.parentNode
    }

    function Ft(e) {
        return e.nextSibling
    }

    function Bt(e) {
        return e.tagName
    }

    function Ht(e, t) {
        e.textContent = t
    }

    function Ut(e, t, n) {
        e.setAttribute(t, n)
    }

    function Vt(e, t) {
        var n = e.data.ref;
        if (n) {
            var r = e.context,
                i = e.componentInstance || e.elm,
                o = r.$refs;
            t ? Array.isArray(o[n]) ? l(o[n], i) : o[n] === i && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) && o[n].indexOf(i) < 0 ? o[n].push(i) : o[n] = [i] : o[n] = i
        }
    }

    function zt(e, n) {
        return e.key === n.key && e.tag === n.tag && e.isComment === n.isComment && t(e.data) === t(n.data) && Jt(e, n)
    }

    function Jt(e, n) {
        if ("input" !== e.tag) return !0;
        var r;
        return (t(r = e.data) && t(r = r.attrs) && r.type) === (t(r = n.data) && t(r = r.attrs) && r.type)
    }

    function Kt(e, n, r) {
        var i, o, a = {};
        for (i = n; i <= r; ++i) o = e[i].key, t(o) && (a[o] = i);
        return a
    }

    function qt(e, t) {
        (e.data.directives || t.data.directives) && Wt(e, t)
    }

    function Wt(e, t) {
        var n, r, i, o = e === pa,
            a = t === pa,
            s = Zt(e.data.directives, e.context),
            c = Zt(t.data.directives, t.context),
            u = [],
            l = [];
        for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, Yt(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (Yt(i, "bind", t, e), i.def && i.def.inserted && u.push(i));
        if (u.length) {
            var f = function() {
                for (var n = 0; n < u.length; n++) Yt(u[n], "inserted", t, e)
            };
            o ? Y(t.data.hook || (t.data.hook = {}), "insert", f) : f()
        }
        if (l.length && Y(t.data.hook || (t.data.hook = {}), "postpatch", function() {
                for (var n = 0; n < l.length; n++) Yt(l[n], "componentUpdated", t, e)
            }), !o)
            for (n in s) c[n] || Yt(s[n], "unbind", e, e, a)
    }

    function Zt(e, t) {
        var n = Object.create(null);
        if (!e) return n;
        var r, i;
        for (r = 0; r < e.length; r++) i = e[r], i.modifiers || (i.modifiers = ha), n[Gt(i)] = i, i.def = H(t.$options, "directives", i.name, !0);
        return n
    }

    function Gt(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }

    function Yt(e, t, n, r, i) {
        var o = e.def && e.def[t];
        if (o) try {
            o(n.elm, e, n, r, i)
        } catch (r) {
            C(r, n.context, "directive " + e.name + " " + t + " hook")
        }
    }

    function Qt(n, r) {
        if (!e(n.data.attrs) || !e(r.data.attrs)) {
            var i, o, a = r.elm,
                s = n.data.attrs || {},
                c = r.data.attrs || {};
            t(c.__ob__) && (c = r.data.attrs = h({}, c));
            for (i in c) o = c[i], s[i] !== o && Xt(a, i, o);
            Ji && c.value !== s.value && Xt(a, "value", c.value);
            for (i in s) e(c[i]) && (ta(i) ? a.removeAttributeNS(ea, na(i)) : Qo(i) || a.removeAttribute(i))
        }
    }

    function Xt(e, t, n) {
        Xo(t) ? ra(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : Qo(t) ? e.setAttribute(t, ra(n) || "false" === n ? "false" : "true") : ta(t) ? ra(n) ? e.removeAttributeNS(ea, na(t)) : e.setAttributeNS(ea, t, n) : ra(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
    }

    function en(n, r) {
        var i = r.elm,
            o = r.data,
            a = n.data;
        if (!(e(o.staticClass) && e(o.class) && (e(a) || e(a.staticClass) && e(a.class)))) {
            var s = wt(r),
                c = i._transitionClasses;
            t(c) && (s = At(s, Ot(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
        }
    }

    function tn(e) {
        function t() {
            (a || (a = [])).push(e.slice(v, i).trim()), v = i + 1
        }
        var n, r, i, o, a, s = !1,
            c = !1,
            u = !1,
            l = !1,
            f = 0,
            p = 0,
            d = 0,
            v = 0;
        for (i = 0; i < e.length; i++)
            if (r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);
            else if (c) 34 === n && 92 !== r && (c = !1);
        else if (u) 96 === n && 92 !== r && (u = !1);
        else if (l) 47 === n && 92 !== r && (l = !1);
        else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || f || p || d) {
            switch (n) {
                case 34:
                    c = !0;
                    break;
                case 39:
                    s = !0;
                    break;
                case 96:
                    u = !0;
                    break;
                case 40:
                    d++;
                    break;
                case 41:
                    d--;
                    break;
                case 91:
                    p++;
                    break;
                case 93:
                    p--;
                    break;
                case 123:
                    f++;
                    break;
                case 125:
                    f--
            }
            if (47 === n) {
                for (var h = i - 1, m = void 0; h >= 0 && " " === (m = e.charAt(h)); h--);
                m && _a.test(m) || (l = !0)
            }
        } else void 0 === o ? (v = i + 1, o = e.slice(0, i).trim()) : t();
        if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== v && t(), a)
            for (i = 0; i < a.length; i++) o = nn(o, a[i]);
        return o
    }

    function nn(e, t) {
        var n = t.indexOf("(");
        return n < 0 ? '_f("' + t + '")(' + e + ")" : '_f("' + t.slice(0, n) + '")(' + e + "," + t.slice(n + 1)
    }

    function rn(e) {
        console.error("[Vue compiler]: " + e)
    }

    function on(e, t) {
        return e ? e.map(function(e) {
            return e[t]
        }).filter(function(e) {
            return e
        }) : []
    }

    function an(e, t, n) {
        (e.props || (e.props = [])).push({
            name: t,
            value: n
        })
    }

    function sn(e, t, n) {
        (e.attrs || (e.attrs = [])).push({
            name: t,
            value: n
        })
    }

    function cn(e, t, n, r, i, o) {
        (e.directives || (e.directives = [])).push({
            name: t,
            rawName: n,
            value: r,
            arg: i,
            modifiers: o
        })
    }

    function un(e, t, n, r, i, o) {
        r && r.capture && (delete r.capture, t = "!" + t), r && r.once && (delete r.once, t = "~" + t), r && r.passive && (delete r.passive, t = "&" + t);
        var a;
        r && r.native ? (delete r.native, a = e.nativeEvents || (e.nativeEvents = {})) : a = e.events || (e.events = {});
        var s = {
                value: n,
                modifiers: r
            },
            c = a[t];
        Array.isArray(c) ? i ? c.unshift(s) : c.push(s) : a[t] = c ? i ? [s, c] : [c, s] : s
    }

    function ln(e, t, n) {
        var r = fn(e, ":" + t) || fn(e, "v-bind:" + t);
        if (null != r) return tn(r);
        if (!1 !== n) {
            var i = fn(e, t);
            if (null != i) return JSON.stringify(i)
        }
    }

    function fn(e, t) {
        var n;
        if (null != (n = e.attrsMap[t]))
            for (var r = e.attrsList, i = 0, o = r.length; i < o; i++)
                if (r[i].name === t) {
                    r.splice(i, 1);
                    break
                }
        return n
    }

    function pn(e, t, n) {
        var r = n || {},
            i = r.number,
            o = r.trim,
            a = "$$v";
        o && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (a = "_n(" + a + ")");
        var s = dn(t, a);
        e.model = {
            value: "(" + t + ")",
            expression: '"' + t + '"',
            callback: "function ($$v) {" + s + "}"
        }
    }

    function dn(e, t) {
        var n = vn(e);
        return null === n.idx ? e + "=" + t : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}"
    }

    function vn(e) {
        if (Ho = e, Bo = Ho.length, Vo = zo = Jo = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < Bo - 1) return {
            exp: e,
            idx: null
        };
        for (; !mn();) Uo = hn(), gn(Uo) ? _n(Uo) : 91 === Uo && yn(Uo);
        return {
            exp: e.substring(0, zo),
            idx: e.substring(zo + 1, Jo)
        }
    }

    function hn() {
        return Ho.charCodeAt(++Vo)
    }

    function mn() {
        return Vo >= Bo
    }

    function gn(e) {
        return 34 === e || 39 === e
    }

    function yn(e) {
        var t = 1;
        for (zo = Vo; !mn();)
            if (e = hn(), gn(e)) _n(e);
            else if (91 === e && t++, 93 === e && t--, 0 === t) {
            Jo = Vo;
            break
        }
    }

    function _n(e) {
        for (var t = e; !mn() && (e = hn()) !== t;);
    }

    function bn(e, t, n) {
        Ko = n;
        var r = t.value,
            i = t.modifiers,
            o = e.tag,
            a = e.attrsMap.type;
        if ("select" === o) wn(e, r, i);
        else if ("input" === o && "checkbox" === a) $n(e, r, i);
        else if ("input" === o && "radio" === a) xn(e, r, i);
        else if ("input" === o || "textarea" === o) Cn(e, r, i);
        else if (!Pi.isReservedTag(o)) return pn(e, r, i), !1;
        return !0
    }

    function $n(e, t, n) {
        var r = n && n.number,
            i = ln(e, "value") || "null",
            o = ln(e, "true-value") || "true",
            a = ln(e, "false-value") || "false";
        an(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), un(e, $a, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + dn(t, "$$c") + "}", null, !0)
    }

    function xn(e, t, n) {
        var r = n && n.number,
            i = ln(e, "value") || "null";
        i = r ? "_n(" + i + ")" : i, an(e, "checked", "_q(" + t + "," + i + ")"), un(e, $a, dn(t, i), null, !0)
    }

    function wn(e, t, n) {
        var r = n && n.number,
            i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})",
            o = "var $$selectedVal = " + i + ";";
        o = o + " " + dn(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), un(e, "change", o, null, !0)
    }

    function Cn(e, t, n) {
        var r = e.attrsMap.type,
            i = n || {},
            o = i.lazy,
            a = i.number,
            s = i.trim,
            c = !o && "range" !== r,
            u = o ? "change" : "range" === r ? ba : "input",
            l = "$event.target.value";
        s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
        var f = dn(t, l);
        c && (f = "if($event.target.composing)return;" + f), an(e, "value", "(" + t + ")"), un(e, u, f, null, !0), (s || a || "number" === r) && un(e, "blur", "$forceUpdate()")
    }

    function kn(e) {
        var n;
        t(e[ba]) && (n = zi ? "change" : "input", e[n] = [].concat(e[ba], e[n] || []), delete e[ba]), t(e[$a]) && (n = Zi ? "click" : "change", e[n] = [].concat(e[$a], e[n] || []), delete e[$a])
    }

    function An(e, t, n, r, i) {
        if (n) {
            var o = t,
                a = qo;
            t = function(n) {
                null !== (1 === arguments.length ? o(n) : o.apply(null, arguments)) && On(e, t, r, a)
            }
        }
        qo.addEventListener(e, t, Gi ? {
            capture: r,
            passive: i
        } : r)
    }

    function On(e, t, n, r) {
        (r || qo).removeEventListener(e, t, n)
    }

    function Sn(t, n) {
        if (!e(t.data.on) || !e(n.data.on)) {
            var r = n.data.on || {},
                i = t.data.on || {};
            qo = n.elm, kn(r), G(r, i, An, On, n.context)
        }
    }

    function Tn(n, r) {
        if (!e(n.data.domProps) || !e(r.data.domProps)) {
            var i, o, a = r.elm,
                s = n.data.domProps || {},
                c = r.data.domProps || {};
            t(c.__ob__) && (c = r.data.domProps = h({}, c));
            for (i in s) e(c[i]) && (a[i] = "");
            for (i in c)
                if (o = c[i], "textContent" !== i && "innerHTML" !== i || (r.children && (r.children.length = 0), o !== s[i]))
                    if ("value" === i) {
                        a._value = o;
                        var u = e(o) ? "" : String(o);
                        En(a, r, u) && (a.value = u)
                    } else a[i] = o
        }
    }

    function En(e, t, n) {
        return !e.composing && ("option" === t.tag || jn(e, n) || Nn(e, n))
    }

    function jn(e, t) {
        return document.activeElement !== e && e.value !== t
    }

    function Nn(e, n) {
        var r = e.value,
            i = e._vModifiers;
        return t(i) && i.number || "number" === e.type ? c(r) !== c(n) : t(i) && i.trim ? r.trim() !== n.trim() : r !== n
    }

    function Ln(e) {
        var t = In(e.style);
        return e.staticStyle ? h(e.staticStyle, t) : t
    }

    function In(e) {
        return Array.isArray(e) ? m(e) : "string" == typeof e ? Ca(e) : e
    }

    function Dn(e, t) {
        var n, r = {};
        if (t)
            for (var i = e; i.componentInstance;) i = i.componentInstance._vnode, i.data && (n = Ln(i.data)) && h(r, n);
        (n = Ln(e.data)) && h(r, n);
        for (var o = e; o = o.parent;) o.data && (n = Ln(o.data)) && h(r, n);
        return r
    }

    function Mn(n, r) {
        var i = r.data,
            o = n.data;
        if (!(e(i.staticStyle) && e(i.style) && e(o.staticStyle) && e(o.style))) {
            var a, s, c = r.elm,
                u = o.staticStyle,
                l = o.normalizedStyle || o.style || {},
                f = u || l,
                p = In(r.data.style) || {};
            r.data.normalizedStyle = t(p.__ob__) ? h({}, p) : p;
            var d = Dn(r, !0);
            for (s in f) e(d[s]) && Oa(c, s, "");
            for (s in d)(a = d[s]) !== f[s] && Oa(c, s, null == a ? "" : a)
        }
    }

    function Pn(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                return e.classList.add(t)
            }) : e.classList.add(t);
            else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
            }
    }

    function Rn(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                return e.classList.remove(t)
            }) : e.classList.remove(t);
            else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                e.setAttribute("class", n.trim())
            }
    }

    function Fn(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return !1 !== e.css && h(t, ja(e.name || "v")), h(t, e), t
            }
            return "string" == typeof e ? ja(e) : void 0
        }
    }

    function Bn(e) {
        Fa(function() {
            Fa(e)
        })
    }

    function Hn(e, t) {
        (e._transitionClasses || (e._transitionClasses = [])).push(t), Pn(e, t)
    }

    function Un(e, t) {
        e._transitionClasses && l(e._transitionClasses, t), Rn(e, t)
    }

    function Vn(e, t, n) {
        var r = zn(e, t),
            i = r.type,
            o = r.timeout,
            a = r.propCount;
        if (!i) return n();
        var s = i === La ? Ma : Ra,
            c = 0,
            u = function() {
                e.removeEventListener(s, l), n()
            },
            l = function(t) {
                t.target === e && ++c >= a && u()
            };
        setTimeout(function() {
            c < a && u()
        }, o + 1), e.addEventListener(s, l)
    }

    function zn(e, t) {
        var n, r = window.getComputedStyle(e),
            i = r[Da + "Delay"].split(", "),
            o = r[Da + "Duration"].split(", "),
            a = Jn(i, o),
            s = r[Pa + "Delay"].split(", "),
            c = r[Pa + "Duration"].split(", "),
            u = Jn(s, c),
            l = 0,
            f = 0;
        return t === La ? a > 0 && (n = La, l = a, f = o.length) : t === Ia ? u > 0 && (n = Ia, l = u, f = c.length) : (l = Math.max(a, u), n = l > 0 ? a > u ? La : Ia : null, f = n ? n === La ? o.length : c.length : 0), {
            type: n,
            timeout: l,
            propCount: f,
            hasTransform: n === La && Ba.test(r[Da + "Property"])
        }
    }

    function Jn(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max.apply(null, t.map(function(t, n) {
            return Kn(t) + Kn(e[n])
        }))
    }

    function Kn(e) {
        return 1e3 * Number(e.slice(0, -1))
    }

    function qn(n, r) {
        var o = n.elm;
        t(o._leaveCb) && (o._leaveCb.cancelled = !0, o._leaveCb());
        var a = Fn(n.data.transition);
        if (!e(a) && !t(o._enterCb) && 1 === o.nodeType) {
            for (var s = a.css, u = a.type, l = a.enterClass, f = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, g = a.enter, y = a.afterEnter, _ = a.enterCancelled, $ = a.beforeAppear, x = a.appear, w = a.afterAppear, C = a.appearCancelled, k = a.duration, A = bo, O = bo.$vnode; O && O.parent;) O = O.parent, A = O.context;
            var S = !A._isMounted || !n.isRootInsert;
            if (!S || x || "" === x) {
                var T = S && d ? d : l,
                    E = S && h ? h : p,
                    j = S && v ? v : f,
                    N = S ? $ || m : m,
                    L = S && "function" == typeof x ? x : g,
                    I = S ? w || y : y,
                    D = S ? C || _ : _,
                    M = c(i(k) ? k.enter : k),
                    P = !1 !== s && !Ji,
                    R = Gn(L),
                    F = o._enterCb = b(function() {
                        P && (Un(o, j), Un(o, E)), F.cancelled ? (P && Un(o, T), D && D(o)) : I && I(o), o._enterCb = null
                    });
                n.data.show || Y(n.data.hook || (n.data.hook = {}), "insert", function() {
                    var e = o.parentNode,
                        t = e && e._pending && e._pending[n.key];
                    t && t.tag === n.tag && t.elm._leaveCb && t.elm._leaveCb(), L && L(o, F)
                }), N && N(o), P && (Hn(o, T), Hn(o, E), Bn(function() {
                    Hn(o, j), Un(o, T), F.cancelled || R || (Zn(M) ? setTimeout(F, M) : Vn(o, u, F))
                })), n.data.show && (r && r(), L && L(o, F)), P || R || F()
            }
        }
    }

    function Wn(n, r) {
        function o() {
            C.cancelled || (n.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n), v && v(a), $ && (Hn(a, f), Hn(a, d), Bn(function() {
                Hn(a, p), Un(a, f), C.cancelled || x || (Zn(w) ? setTimeout(C, w) : Vn(a, l, C))
            })), h && h(a, C), $ || x || C())
        }
        var a = n.elm;
        t(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());
        var s = Fn(n.data.transition);
        if (e(s)) return r();
        if (!t(a._leaveCb) && 1 === a.nodeType) {
            var u = s.css,
                l = s.type,
                f = s.leaveClass,
                p = s.leaveToClass,
                d = s.leaveActiveClass,
                v = s.beforeLeave,
                h = s.leave,
                m = s.afterLeave,
                g = s.leaveCancelled,
                y = s.delayLeave,
                _ = s.duration,
                $ = !1 !== u && !Ji,
                x = Gn(h),
                w = c(i(_) ? _.leave : _),
                C = a._leaveCb = b(function() {
                    a.parentNode && a.parentNode._pending && (a.parentNode._pending[n.key] = null), $ && (Un(a, p), Un(a, d)), C.cancelled ? ($ && Un(a, f), g && g(a)) : (r(), m && m(a)), a._leaveCb = null
                });
            y ? y(o) : o()
        }
    }

    function Zn(e) {
        return "number" == typeof e && !isNaN(e)
    }

    function Gn(n) {
        if (e(n)) return !1;
        var r = n.fns;
        return t(r) ? Gn(Array.isArray(r) ? r[0] : r) : (n._length || n.length) > 1
    }

    function Yn(e, t) {
        !0 !== t.data.show && qn(t)
    }

    function Qn(e, t, n) {
        var r = t.value,
            i = e.multiple;
        if (!i || Array.isArray(r)) {
            for (var o, a, s = 0, c = e.options.length; s < c; s++)
                if (a = e.options[s], i) o = _(r, er(a)) > -1, a.selected !== o && (a.selected = o);
                else if (y(er(a), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
            i || (e.selectedIndex = -1)
        }
    }

    function Xn(e, t) {
        for (var n = 0, r = t.length; n < r; n++)
            if (y(er(t[n]), e)) return !1;
        return !0
    }

    function er(e) {
        return "_value" in e ? e._value : e.value
    }

    function tr(e) {
        e.target.composing = !0
    }

    function nr(e) {
        e.target.composing = !1, rr(e.target, "input")
    }

    function rr(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function ir(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : ir(e.componentInstance._vnode)
    }

    function or(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? or(oe(t.children)) : e
    }

    function ar(e) {
        var t = {},
            n = e.$options;
        for (var r in n.propsData) t[r] = e[r];
        var i = n._parentListeners;
        for (var o in i) t[Ti(o)] = i[o];
        return t
    }

    function sr(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
            props: t.componentOptions.propsData
        })
    }

    function cr(e) {
        for (; e = e.parent;)
            if (e.data.transition) return !0
    }

    function ur(e, t) {
        return t.key === e.key && t.tag === e.tag
    }

    function lr(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
    }

    function fr(e) {
        e.data.newPos = e.elm.getBoundingClientRect()
    }

    function pr(e) {
        var t = e.data.pos,
            n = e.data.newPos,
            r = t.left - n.left,
            i = t.top - n.top;
        if (r || i) {
            e.data.moved = !0;
            var o = e.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
        }
    }

    function dr(e) {
        return Xa = Xa || document.createElement("div"), Xa.innerHTML = e, Xa.textContent
    }

    function vr(e, t) {
        var n = t ? Ms : Ds;
        return e.replace(n, function(e) {
            return Is[e]
        })
    }

    function hr(e, t) {
        function n(t) {
            l += t, e = e.substring(t)
        }

        function r(e, n, r) {
            var i, s;
            if (null == n && (n = l), null == r && (r = l), e && (s = e.toLowerCase()), e)
                for (i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--);
            else i = 0;
            if (i >= 0) {
                for (var c = a.length - 1; c >= i; c--) t.end && t.end(a[c].tag, n, r);
                a.length = i, o = i && a[i - 1].tag
            } else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r))
        }
        for (var i, o, a = [], s = t.expectHTML, c = t.isUnaryTag || Ni, u = t.canBeLeftOpenTag || Ni, l = 0; e;) {
            if (i = e, o && Ns(o)) {
                var f = o.toLowerCase(),
                    p = Ls[f] || (Ls[f] = new RegExp("([\\s\\S]*?)(</" + f + "[^>]*>)", "i")),
                    d = 0,
                    v = e.replace(p, function(e, n, r) {
                        return d = r.length, Ns(f) || "noscript" === f || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), t.chars && t.chars(n), ""
                    });
                l += e.length - v.length, e = v, r(f, l - d, l)
            } else {
                var h = e.indexOf("<");
                if (0 === h) {
                    if (fs.test(e)) {
                        var m = e.indexOf("--\x3e");
                        if (m >= 0) {
                            n(m + 3);
                            continue
                        }
                    }
                    if (ps.test(e)) {
                        var g = e.indexOf("]>");
                        if (g >= 0) {
                            n(g + 2);
                            continue
                        }
                    }
                    var y = e.match(ls);
                    if (y) {
                        n(y[0].length);
                        continue
                    }
                    var _ = e.match(us);
                    if (_) {
                        var b = l;
                        n(_[0].length), r(_[1], b, l);
                        continue
                    }
                    var $ = function() {
                        var t = e.match(ss);
                        if (t) {
                            var r = {
                                tagName: t[1],
                                attrs: [],
                                start: l
                            };
                            n(t[0].length);
                            for (var i, o; !(i = e.match(cs)) && (o = e.match(os));) n(o[0].length), r.attrs.push(o);
                            if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r
                        }
                    }();
                    if ($) {
                        ! function(e) {
                            var n = e.tagName,
                                i = e.unarySlash;
                            s && ("p" === o && rs(n) && r(o), u(n) && o === n && r(n));
                            for (var l = c(n) || "html" === n && "head" === o || !!i, f = e.attrs.length, p = new Array(f), d = 0; d < f; d++) {
                                var v = e.attrs[d];
                                ds && -1 === v[0].indexOf('""') && ("" === v[3] && delete v[3], "" === v[4] && delete v[4], "" === v[5] && delete v[5]);
                                var h = v[3] || v[4] || v[5] || "";
                                p[d] = {
                                    name: v[1],
                                    value: vr(h, t.shouldDecodeNewlines)
                                }
                            }
                            l || (a.push({
                                tag: n,
                                lowerCasedTag: n.toLowerCase(),
                                attrs: p
                            }), o = n), t.start && t.start(n, p, l, e.start, e.end)
                        }($);
                        continue
                    }
                }
                var x = void 0,
                    w = void 0,
                    C = void 0;
                if (h >= 0) {
                    for (w = e.slice(h); !(us.test(w) || ss.test(w) || fs.test(w) || ps.test(w) || (C = w.indexOf("<", 1)) < 0);) h += C, w = e.slice(h);
                    x = e.substring(0, h), n(h)
                }
                h < 0 && (x = e, e = ""), t.chars && x && t.chars(x)
            }
            if (e === i) {
                t.chars && t.chars(e);
                break
            }
        }
        r()
    }

    function mr(e, t) {
        var n = t ? Rs(t) : Ps;
        if (n.test(e)) {
            for (var r, i, o = [], a = n.lastIndex = 0; r = n.exec(e);) {
                i = r.index, i > a && o.push(JSON.stringify(e.slice(a, i)));
                var s = tn(r[1].trim());
                o.push("_s(" + s + ")"), a = i + r[0].length
            }
            return a < e.length && o.push(JSON.stringify(e.slice(a))), o.join("+")
        }
    }

    function gr(e, t) {
        function n(e) {
            e.pre && (s = !1), _s(e.tag) && (c = !1)
        }
        vs = t.warn || rn, $s = t.getTagNamespace || Ni, bs = t.mustUseProp || Ni, _s = t.isPreTag || Ni, gs = on(t.modules, "preTransformNode"), ms = on(t.modules, "transformNode"), ys = on(t.modules, "postTransformNode"), hs = t.delimiters;
        var r, i, o = [],
            a = !1 !== t.preserveWhitespace,
            s = !1,
            c = !1;
        return hr(e, {
            warn: vs,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            start: function(e, a, u) {
                var l = i && i.ns || $s(e);
                zi && "svg" === l && (a = Mr(a));
                var f = {
                    type: 1,
                    tag: e,
                    attrsList: a,
                    attrsMap: Lr(a),
                    parent: i,
                    children: []
                };
                l && (f.ns = l), Dr(f) && !eo() && (f.forbidden = !0);
                for (var p = 0; p < gs.length; p++) gs[p](f, t);
                if (s || (yr(f), f.pre && (s = !0)), _s(f.tag) && (c = !0), s) _r(f);
                else {
                    xr(f), wr(f), Or(f), br(f), f.plain = !f.key && !a.length, $r(f), Sr(f), Tr(f);
                    for (var d = 0; d < ms.length; d++) ms[d](f, t);
                    Er(f)
                }
                if (r ? o.length || r.if && (f.elseif || f.else) && Ar(r, {
                        exp: f.elseif,
                        block: f
                    }) : r = f, i && !f.forbidden)
                    if (f.elseif || f.else) Cr(f, i);
                    else if (f.slotScope) {
                    i.plain = !1;
                    var v = f.slotTarget || '"default"';
                    (i.scopedSlots || (i.scopedSlots = {}))[v] = f
                } else i.children.push(f), f.parent = i;
                u ? n(f) : (i = f, o.push(f));
                for (var h = 0; h < ys.length; h++) ys[h](f, t)
            },
            end: function() {
                var e = o[o.length - 1],
                    t = e.children[e.children.length - 1];
                t && 3 === t.type && " " === t.text && !c && e.children.pop(), o.length -= 1, i = o[o.length - 1], n(e)
            },
            chars: function(e) {
                if (i && (!zi || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) {
                    var t = i.children;
                    if (e = c || e.trim() ? Ir(i) ? e : Ks(e) : a && t.length ? " " : "") {
                        var n;
                        !s && " " !== e && (n = mr(e, hs)) ? t.push({
                            type: 2,
                            expression: n,
                            text: e
                        }) : " " === e && t.length && " " === t[t.length - 1].text || t.push({
                            type: 3,
                            text: e
                        })
                    }
                }
            }
        }), r
    }

    function yr(e) {
        null != fn(e, "v-pre") && (e.pre = !0)
    }

    function _r(e) {
        var t = e.attrsList.length;
        if (t)
            for (var n = e.attrs = new Array(t), r = 0; r < t; r++) n[r] = {
                name: e.attrsList[r].name,
                value: JSON.stringify(e.attrsList[r].value)
            };
        else e.pre || (e.plain = !0)
    }

    function br(e) {
        var t = ln(e, "key");
        t && (e.key = t)
    }

    function $r(e) {
        var t = ln(e, "ref");
        t && (e.ref = t, e.refInFor = jr(e))
    }

    function xr(e) {
        var t;
        if (t = fn(e, "v-for")) {
            var n = t.match(Hs);
            if (!n) return;
            e.for = n[2].trim();
            var r = n[1].trim(),
                i = r.match(Us);
            i ? (e.alias = i[1].trim(), e.iterator1 = i[2].trim(), i[3] && (e.iterator2 = i[3].trim())) : e.alias = r
        }
    }

    function wr(e) {
        var t = fn(e, "v-if");
        if (t) e.if = t, Ar(e, {
            exp: t,
            block: e
        });
        else {
            null != fn(e, "v-else") && (e.else = !0);
            var n = fn(e, "v-else-if");
            n && (e.elseif = n)
        }
    }

    function Cr(e, t) {
        var n = kr(t.children);
        n && n.if && Ar(n, {
            exp: e.elseif,
            block: e
        })
    }

    function kr(e) {
        for (var t = e.length; t--;) {
            if (1 === e[t].type) return e[t];
            e.pop()
        }
    }

    function Ar(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
    }

    function Or(e) {
        null != fn(e, "v-once") && (e.once = !0)
    }

    function Sr(e) {
        if ("slot" === e.tag) e.slotName = ln(e, "name");
        else {
            var t = ln(e, "slot");
            t && (e.slotTarget = '""' === t ? '"default"' : t), "template" === e.tag && (e.slotScope = fn(e, "scope"))
        }
    }

    function Tr(e) {
        var t;
        (t = ln(e, "is")) && (e.component = t), null != fn(e, "inline-template") && (e.inlineTemplate = !0)
    }

    function Er(e) {
        var t, n, r, i, o, a, s, c = e.attrsList;
        for (t = 0, n = c.length; t < n; t++)
            if (r = i = c[t].name, o = c[t].value, Bs.test(r))
                if (e.hasBindings = !0, a = Nr(r), a && (r = r.replace(Js, "")), zs.test(r)) r = r.replace(zs, ""), o = tn(o), s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = Ti(r)) && (r = "innerHTML")), a.camel && (r = Ti(r)), a.sync && un(e, "update:" + Ti(r), dn(o, "$event"))), s || bs(e.tag, e.attrsMap.type, r) ? an(e, r, o) : sn(e, r, o);
                else if (Fs.test(r)) r = r.replace(Fs, ""), un(e, r, o, a, !1, vs);
        else {
            r = r.replace(Bs, "");
            var u = r.match(Vs),
                l = u && u[1];
            l && (r = r.slice(0, -(l.length + 1))), cn(e, r, i, o, l, a)
        } else sn(e, r, JSON.stringify(o))
    }

    function jr(e) {
        for (var t = e; t;) {
            if (void 0 !== t.for) return !0;
            t = t.parent
        }
        return !1
    }

    function Nr(e) {
        var t = e.match(Js);
        if (t) {
            var n = {};
            return t.forEach(function(e) {
                n[e.slice(1)] = !0
            }), n
        }
    }

    function Lr(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
        return t
    }

    function Ir(e) {
        return "script" === e.tag || "style" === e.tag
    }

    function Dr(e) {
        return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
    }

    function Mr(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            qs.test(r.name) || (r.name = r.name.replace(Ws, ""), t.push(r))
        }
        return t
    }

    function Pr(e, t) {
        e && (xs = Zs(t.staticKeys || ""), ws = t.isReservedTag || Ni, Fr(e), Br(e, !1))
    }

    function Rr(e) {
        return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""))
    }

    function Fr(e) {
        if (e.static = Ur(e), 1 === e.type) {
            if (!ws(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
            for (var t = 0, n = e.children.length; t < n; t++) {
                var r = e.children[t];
                Fr(r), r.static || (e.static = !1)
            }
        }
    }

    function Br(e, t) {
        if (1 === e.type) {
            if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
            if (e.staticRoot = !1, e.children)
                for (var n = 0, r = e.children.length; n < r; n++) Br(e.children[n], t || !!e.for);
            e.ifConditions && Hr(e.ifConditions, t)
        }
    }

    function Hr(e, t) {
        for (var n = 1, r = e.length; n < r; n++) Br(e[n].block, t)
    }

    function Ur(e) {
        return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || Oi(e.tag) || !ws(e.tag) || Vr(e) || !Object.keys(e).every(xs))))
    }

    function Vr(e) {
        for (; e.parent;) {
            if (e = e.parent, "template" !== e.tag) return !1;
            if (e.for) return !0
        }
        return !1
    }

    function zr(e, t, n) {
        var r = t ? "nativeOn:{" : "on:{";
        for (var i in e) {
            var o = e[i];
            r += '"' + i + '":' + Jr(i, o) + ","
        }
        return r.slice(0, -1) + "}"
    }

    function Jr(e, t) {
        if (!t) return "function(){}";
        if (Array.isArray(t)) return "[" + t.map(function(t) {
            return Jr(e, t)
        }).join(",") + "]";
        var n = Ys.test(t.value),
            r = Gs.test(t.value);
        if (t.modifiers) {
            var i = "",
                o = "",
                a = [];
            for (var s in t.modifiers) ec[s] ? (o += ec[s], Qs[s] && a.push(s)) : a.push(s);
            a.length && (i += Kr(a)), o && (i += o);
            return "function($event){" + i + (n ? t.value + "($event)" : r ? "(" + t.value + ")($event)" : t.value) + "}"
        }
        return n || r ? t.value : "function($event){" + t.value + "}"
    }

    function Kr(e) {
        return "if(!('button' in $event)&&" + e.map(qr).join("&&") + ")return null;"
    }

    function qr(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = Qs[e];
        return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")"
    }

    function Wr(e, t) {
        e.wrapData = function(n) {
            return "_b(" + n + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true" : "") + ")"
        }
    }

    function Zr(e, t) {
        var n = Ts,
            r = Ts = [],
            i = Es;
        Es = 0, js = t, Cs = t.warn || rn, ks = on(t.modules, "transformCode"), As = on(t.modules, "genData"), Os = t.directives || {}, Ss = t.isReservedTag || Ni;
        var o = e ? Gr(e) : '_c("div")';
        return Ts = n, Es = i, {
            render: "with(this){return " + o + "}",
            staticRenderFns: r
        }
    }

    function Gr(e) {
        if (e.staticRoot && !e.staticProcessed) return Yr(e);
        if (e.once && !e.onceProcessed) return Qr(e);
        if (e.for && !e.forProcessed) return ti(e);
        if (e.if && !e.ifProcessed) return Xr(e);
        if ("template" !== e.tag || e.slotTarget) {
            if ("slot" === e.tag) return di(e);
            var t;
            if (e.component) t = vi(e.component, e);
            else {
                var n = e.plain ? void 0 : ni(e),
                    r = e.inlineTemplate ? null : si(e, !0);
                t = "_c('" + e.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")"
            }
            for (var i = 0; i < ks.length; i++) t = ks[i](e, t);
            return t
        }
        return si(e) || "void 0"
    }

    function Yr(e) {
        return e.staticProcessed = !0, Ts.push("with(this){return " + Gr(e) + "}"), "_m(" + (Ts.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }

    function Qr(e) {
        if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Xr(e);
        if (e.staticInFor) {
            for (var t = "", n = e.parent; n;) {
                if (n.for) {
                    t = n.key;
                    break
                }
                n = n.parent
            }
            return t ? "_o(" + Gr(e) + "," + Es++ + (t ? "," + t : "") + ")" : Gr(e)
        }
        return Yr(e)
    }

    function Xr(e) {
        return e.ifProcessed = !0, ei(e.ifConditions.slice())
    }

    function ei(e) {
        function t(e) {
            return e.once ? Qr(e) : Gr(e)
        }
        if (!e.length) return "_e()";
        var n = e.shift();
        return n.exp ? "(" + n.exp + ")?" + t(n.block) + ":" + ei(e) : "" + t(n.block)
    }

    function ti(e) {
        var t = e.for,
            n = e.alias,
            r = e.iterator1 ? "," + e.iterator1 : "",
            i = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, "_l((" + t + "),function(" + n + r + i + "){return " + Gr(e) + "})"
    }

    function ni(e) {
        var t = "{",
            n = ri(e);
        n && (t += n + ","), e.key && (t += "key:" + e.key + ","), e.ref && (t += "ref:" + e.ref + ","), e.refInFor && (t += "refInFor:true,"), e.pre && (t += "pre:true,"), e.component && (t += 'tag:"' + e.tag + '",');
        for (var r = 0; r < As.length; r++) t += As[r](e);
        if (e.attrs && (t += "attrs:{" + hi(e.attrs) + "},"), e.props && (t += "domProps:{" + hi(e.props) + "},"), e.events && (t += zr(e.events, !1, Cs) + ","), e.nativeEvents && (t += zr(e.nativeEvents, !0, Cs) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += oi(e.scopedSlots) + ","), e.model && (t += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
            var i = ii(e);
            i && (t += i + ",")
        }
        return t = t.replace(/,$/, "") + "}", e.wrapData && (t = e.wrapData(t)), t
    }

    function ri(e) {
        var t = e.directives;
        if (t) {
            var n, r, i, o, a = "directives:[",
                s = !1;
            for (n = 0, r = t.length; n < r; n++) {
                i = t[n], o = !0;
                var c = Os[i.name] || tc[i.name];
                c && (o = !!c(e, i, Cs)), o && (s = !0, a += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
            }
            return s ? a.slice(0, -1) + "]" : void 0
        }
    }

    function ii(e) {
        var t = e.children[0];
        if (1 === t.type) {
            var n = Zr(t, js);
            return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function(e) {
                return "function(){" + e + "}"
            }).join(",") + "]}"
        }
    }

    function oi(e) {
        return "scopedSlots:_u([" + Object.keys(e).map(function(t) {
            return ai(t, e[t])
        }).join(",") + "])"
    }

    function ai(e, t) {
        return "[" + e + ",function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? si(t) || "void 0" : Gr(t)) + "}]"
    }

    function si(e, t) {
        var n = e.children;
        if (n.length) {
            var r = n[0];
            if (1 === n.length && r.for && "template" !== r.tag && "slot" !== r.tag) return Gr(r);
            var i = t ? ci(n) : 0;
            return "[" + n.map(fi).join(",") + "]" + (i ? "," + i : "")
        }
    }

    function ci(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = e[n];
            if (1 === r.type) {
                if (ui(r) || r.ifConditions && r.ifConditions.some(function(e) {
                        return ui(e.block)
                    })) {
                    t = 2;
                    break
                }(li(r) || r.ifConditions && r.ifConditions.some(function(e) {
                    return li(e.block)
                })) && (t = 1)
            }
        }
        return t
    }

    function ui(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
    }

    function li(e) {
        return !Ss(e.tag)
    }

    function fi(e) {
        return 1 === e.type ? Gr(e) : pi(e)
    }

    function pi(e) {
        return "_v(" + (2 === e.type ? e.expression : mi(JSON.stringify(e.text))) + ")"
    }

    function di(e) {
        var t = e.slotName || '"default"',
            n = si(e),
            r = "_t(" + t + (n ? "," + n : ""),
            i = e.attrs && "{" + e.attrs.map(function(e) {
                return Ti(e.name) + ":" + e.value
            }).join(",") + "}",
            o = e.attrsMap["v-bind"];
        return !i && !o || n || (r += ",null"), i && (r += "," + i), o && (r += (i ? "" : ",null") + "," + o), r + ")"
    }

    function vi(e, t) {
        var n = t.inlineTemplate ? null : si(t, !0);
        return "_c(" + e + "," + ni(t) + (n ? "," + n : "") + ")"
    }

    function hi(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e[n];
            t += '"' + r.name + '":' + mi(r.value) + ","
        }
        return t.slice(0, -1)
    }

    function mi(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }

    function gi(e, t) {
        var n = gr(e.trim(), t);
        Pr(n, t);
        var r = Zr(n, t);
        return {
            ast: n,
            render: r.render,
            staticRenderFns: r.staticRenderFns
        }
    }

    function yi(e, t) {
        try {
            return new Function(e)
        } catch (n) {
            return t.push({
                err: n,
                code: e
            }), g
        }
    }

    function _i(e, t) {
        var n = (t.warn, fn(e, "class"));
        n && (e.staticClass = JSON.stringify(n));
        var r = ln(e, "class", !1);
        r && (e.classBinding = r)
    }

    function bi(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
    }

    function $i(e, t) {
        var n = (t.warn, fn(e, "style"));
        n && (e.staticStyle = JSON.stringify(Ca(n)));
        var r = ln(e, "style", !1);
        r && (e.styleBinding = r)
    }

    function xi(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
    }

    function wi(e, t) {
        t.value && an(e, "textContent", "_s(" + t.value + ")")
    }

    function Ci(e, t) {
        t.value && an(e, "innerHTML", "_s(" + t.value + ")")
    }

    function ki(e) {
        if (e.outerHTML) return e.outerHTML;
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML
    }
    var Ai = Object.prototype.toString,
        Oi = u("slot,component", !0),
        Si = Object.prototype.hasOwnProperty,
        Ti = p(function(e) {
            return e.replace(/-(\w)/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        }),
        Ei = p(function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }),
        ji = p(function(e) {
            return e.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase()
        }),
        Ni = function() {
            return !1
        },
        Li = function(e) {
            return e
        },
        Ii = "data-server-rendered",
        Di = ["component", "directive", "filter"],
        Mi = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
        Pi = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: Ni,
            isReservedAttr: Ni,
            isUnknownElement: Ni,
            getTagNamespace: g,
            parsePlatformTagName: Li,
            mustUseProp: Ni,
            _lifecycleHooks: Mi
        },
        Ri = Object.freeze({}),
        Fi = /[^\w.$]/,
        Bi = g,
        Hi = "__proto__" in {},
        Ui = "undefined" != typeof window,
        Vi = Ui && window.navigator.userAgent.toLowerCase(),
        zi = Vi && /msie|trident/.test(Vi),
        Ji = Vi && Vi.indexOf("msie 9.0") > 0,
        Ki = Vi && Vi.indexOf("edge/") > 0,
        qi = Vi && Vi.indexOf("android") > 0,
        Wi = Vi && /iphone|ipad|ipod|ios/.test(Vi),
        Zi = Vi && /chrome\/\d+/.test(Vi) && !Ki,
        Gi = !1;
    if (Ui) try {
        var Yi = {};
        Object.defineProperty(Yi, "passive", {
            get: function() {
                Gi = !0
            }
        }), window.addEventListener("test-passive", null, Yi)
    } catch (e) {}
    var Qi, Xi, eo = function() {
            return void 0 === Qi && (Qi = !Ui && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), Qi
        },
        to = Ui && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        no = "undefined" != typeof Symbol && k(Symbol) && "undefined" != typeof Reflect && k(Reflect.ownKeys),
        ro = function() {
            function e() {
                r = !1;
                var e = n.slice(0);
                n.length = 0;
                for (var t = 0; t < e.length; t++) e[t]()
            }
            var t, n = [],
                r = !1;
            if ("undefined" != typeof Promise && k(Promise)) {
                var i = Promise.resolve(),
                    o = function(e) {
                        console.error(e)
                    };
                t = function() {
                    i.then(e).catch(o), Wi && setTimeout(g)
                }
            } else if ("undefined" == typeof MutationObserver || !k(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function() {
                setTimeout(e, 0)
            };
            else {
                var a = 1,
                    s = new MutationObserver(e),
                    c = document.createTextNode(String(a));
                s.observe(c, {
                    characterData: !0
                }), t = function() {
                    a = (a + 1) % 2, c.data = String(a)
                }
            }
            return function(e, i) {
                var o;
                if (n.push(function() {
                        if (e) try {
                            e.call(i)
                        } catch (e) {
                            C(e, i, "nextTick")
                        } else o && o(i)
                    }), r || (r = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function(e, t) {
                    o = e
                })
            }
        }();
    Xi = "undefined" != typeof Set && k(Set) ? Set : function() {
        function e() {
            this.set = Object.create(null)
        }
        return e.prototype.has = function(e) {
            return !0 === this.set[e]
        }, e.prototype.add = function(e) {
            this.set[e] = !0
        }, e.prototype.clear = function() {
            this.set = Object.create(null)
        }, e
    }();
    var io = 0,
        oo = function() {
            this.id = io++, this.subs = []
        };
    oo.prototype.addSub = function(e) {
        this.subs.push(e)
    }, oo.prototype.removeSub = function(e) {
        l(this.subs, e)
    }, oo.prototype.depend = function() {
        oo.target && oo.target.addDep(this)
    }, oo.prototype.notify = function() {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
    }, oo.target = null;
    var ao = [],
        so = Array.prototype,
        co = Object.create(so);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
        var t = so[e];
        x(co, e, function() {
            for (var n = arguments, r = arguments.length, i = new Array(r); r--;) i[r] = n[r];
            var o, a = t.apply(this, i),
                s = this.__ob__;
            switch (e) {
                case "push":
                case "unshift":
                    o = i;
                    break;
                case "splice":
                    o = i.slice(2)
            }
            return o && s.observeArray(o), s.dep.notify(), a
        })
    });
    var uo = Object.getOwnPropertyNames(co),
        lo = {
            shouldConvert: !0,
            isSettingProps: !1
        },
        fo = function(e) {
            if (this.value = e, this.dep = new oo, this.vmCount = 0, x(e, "__ob__", this), Array.isArray(e)) {
                (Hi ? S : T)(e, co, uo), this.observeArray(e)
            } else this.walk(e)
        };
    fo.prototype.walk = function(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) j(e, t[n], e[t[n]])
    }, fo.prototype.observeArray = function(e) {
        for (var t = 0, n = e.length; t < n; t++) E(e[t])
    };
    var po = Pi.optionMergeStrategies;
    po.data = function(e, t, n) {
        return n ? e || t ? function() {
            var r = "function" == typeof t ? t.call(n) : t,
                i = "function" == typeof e ? e.call(n) : void 0;
            return r ? D(r, i) : i
        } : void 0 : t ? "function" != typeof t ? e : e ? function() {
            return D(t.call(this), e.call(this))
        } : t : e
    }, Mi.forEach(function(e) {
        po[e] = M
    }), Di.forEach(function(e) {
        po[e + "s"] = P
    }), po.watch = function(e, t) {
        if (!t) return Object.create(e || null);
        if (!e) return t;
        var n = {};
        h(n, e);
        for (var r in t) {
            var i = n[r],
                o = t[r];
            i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : [o]
        }
        return n
    }, po.props = po.methods = po.computed = function(e, t) {
        if (!t) return Object.create(e || null);
        if (!e) return t;
        var n = Object.create(null);
        return h(n, e), h(n, t), n
    };
    var vo = function(e, t) {
            return void 0 === t ? e : t
        },
        ho = function(e, t, n, r, i, o, a) {
            this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1
        },
        mo = {
            child: {}
        };
    mo.child.get = function() {
        return this.componentInstance
    }, Object.defineProperties(ho.prototype, mo);
    var go, yo = function() {
            var e = new ho;
            return e.text = "", e.isComment = !0, e
        },
        _o = p(function(e) {
            var t = "&" === e.charAt(0);
            e = t ? e.slice(1) : e;
            var n = "~" === e.charAt(0);
            e = n ? e.slice(1) : e;
            var r = "!" === e.charAt(0);
            return e = r ? e.slice(1) : e, {
                name: e,
                once: n,
                capture: r,
                passive: t
            }
        }),
        bo = null,
        $o = [],
        xo = [],
        wo = {},
        Co = !1,
        ko = !1,
        Ao = 0,
        Oo = 0,
        So = function(e, t, n, r) {
            this.vm = e, e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Oo, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Xi, this.newDepIds = new Xi, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = w(t), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get()
        };
    So.prototype.get = function() {
        A(this);
        var e, t = this.vm;
        if (this.user) try {
            e = this.getter.call(t, t)
        } catch (e) {
            C(e, t, 'getter for watcher "' + this.expression + '"')
        } else e = this.getter.call(t, t);
        return this.deep && Ae(e), O(), this.cleanupDeps(), e
    }, So.prototype.addDep = function(e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
    }, So.prototype.cleanupDeps = function() {
        for (var e = this, t = this.deps.length; t--;) {
            var n = e.deps[t];
            e.newDepIds.has(n.id) || n.removeSub(e)
        }
        var r = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0
    }, So.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : ke(this)
    }, So.prototype.run = function() {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || i(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) try {
                    this.cb.call(this.vm, e, t)
                } catch (e) {
                    C(e, this.vm, 'callback for watcher "' + this.expression + '"')
                } else this.cb.call(this.vm, e, t)
            }
        }
    }, So.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1
    }, So.prototype.depend = function() {
        for (var e = this, t = this.deps.length; t--;) e.deps[t].depend()
    }, So.prototype.teardown = function() {
        var e = this;
        if (this.active) {
            this.vm._isBeingDestroyed || l(this.vm._watchers, this);
            for (var t = this.deps.length; t--;) e.deps[t].removeSub(e);
            this.active = !1
        }
    };
    var To = new Xi,
        Eo = {
            enumerable: !0,
            configurable: !0,
            get: g,
            set: g
        },
        jo = {
            lazy: !0
        },
        No = {
            init: function(e, t, n, r) {
                if (!e.componentInstance || e.componentInstance._isDestroyed) {
                    (e.componentInstance = Je(e, bo, n, r)).$mount(t ? e.elm : void 0, t)
                } else if (e.data.keepAlive) {
                    var i = e;
                    No.prepatch(i, i)
                }
            },
            prepatch: function(e, t) {
                var n = t.componentOptions;
                he(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
            },
            insert: function(e) {
                var t = e.context,
                    n = e.componentInstance;
                n._isMounted || (n._isMounted = !0, _e(n, "mounted")), e.data.keepAlive && (t._isMounted ? we(n) : ge(n, !0))
            },
            destroy: function(e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? ye(t, !0) : t.$destroy())
            }
        },
        Lo = Object.keys(No),
        Io = 1,
        Do = 2,
        Mo = 0;
    ! function(e) {
        e.prototype._init = function(e) {
            var t = this;
            t._uid = Mo++, t._isVue = !0, e && e._isComponent ? ct(t, e) : t.$options = B(ut(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, de(t), ae(t), st(t), _e(t, "beforeCreate"), Be(t), Te(t), Fe(t), _e(t, "created"), t.$options.el && t.$mount(t.$options.el)
        }
    }(pt),
    function(e) {
        var t = {};
        t.get = function() {
            return this._data
        };
        var n = {};
        n.get = function() {
            return this._props
        }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = N, e.prototype.$delete = L, e.prototype.$watch = function(e, t, n) {
            var r = this;
            n = n || {}, n.user = !0;
            var i = new So(r, e, t, n);
            return n.immediate && t.call(r, i.value),
                function() {
                    i.teardown()
                }
        }
    }(pt),
    function(e) {
        var t = /^hook:/;
        e.prototype.$on = function(e, n) {
            var r = this,
                i = this;
            if (Array.isArray(e))
                for (var o = 0, a = e.length; o < a; o++) r.$on(e[o], n);
            else(i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0);
            return i
        }, e.prototype.$once = function(e, t) {
            function n() {
                r.$off(e, n), t.apply(r, arguments)
            }
            var r = this;
            return n.fn = t, r.$on(e, n), r
        }, e.prototype.$off = function(e, t) {
            var n = this,
                r = this;
            if (!arguments.length) return r._events = Object.create(null), r;
            if (Array.isArray(e)) {
                for (var i = 0, o = e.length; i < o; i++) n.$off(e[i], t);
                return r
            }
            var a = r._events[e];
            if (!a) return r;
            if (1 === arguments.length) return r._events[e] = null, r;
            for (var s, c = a.length; c--;)
                if ((s = a[c]) === t || s.fn === t) {
                    a.splice(c, 1);
                    break
                }
            return r
        }, e.prototype.$emit = function(e) {
            var t = this,
                n = t._events[e];
            if (n) {
                n = n.length > 1 ? v(n) : n;
                for (var r = v(arguments, 1), i = 0, o = n.length; i < o; i++) n[i].apply(t, r)
            }
            return t
        }
    }(pt),
    function(e) {
        e.prototype._update = function(e, t) {
            var n = this;
            n._isMounted && _e(n, "beforeUpdate");
            var r = n.$el,
                i = n._vnode,
                o = bo;
            bo = n, n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), bo = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }, e.prototype.$forceUpdate = function() {
            var e = this;
            e._watcher && e._watcher.update()
        }, e.prototype.$destroy = function() {
            var e = this;
            if (!e._isBeingDestroyed) {
                _e(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || l(t.$children, e), e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), _e(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$options._parentElm = e.$options._refElm = null
            }
        }
    }(pt),
    function(e) {
        e.prototype.$nextTick = function(e) {
            return ro(e, this)
        }, e.prototype._render = function() {
            var e = this,
                t = e.$options,
                n = t.render,
                r = t.staticRenderFns,
                i = t._parentVnode;
            if (e._isMounted)
                for (var o in e.$slots) e.$slots[o] = W(e.$slots[o]);
            e.$scopedSlots = i && i.data.scopedSlots || Ri, r && !e._staticTrees && (e._staticTrees = []), e.$vnode = i;
            var a;
            try {
                a = n.call(e._renderProxy, e.$createElement)
            } catch (t) {
                C(t, e, "render function"), a = e._vnode
            }
            return a instanceof ho || (a = yo()), a.parent = i, a
        }, e.prototype._o = it, e.prototype._n = c, e.prototype._s = s, e.prototype._l = Qe, e.prototype._t = Xe, e.prototype._q = y, e.prototype._i = _, e.prototype._m = rt, e.prototype._f = et, e.prototype._k = tt, e.prototype._b = nt, e.prototype._v = K, e.prototype._e = yo, e.prototype._u = pe
    }(pt);
    var Po = [String, RegExp],
        Ro = {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: Po,
                exclude: Po
            },
            created: function() {
                this.cache = Object.create(null)
            },
            destroyed: function() {
                var e = this;
                for (var t in e.cache) xt(e.cache[t])
            },
            watch: {
                include: function(e) {
                    $t(this.cache, this._vnode, function(t) {
                        return bt(e, t)
                    })
                },
                exclude: function(e) {
                    $t(this.cache, this._vnode, function(t) {
                        return !bt(e, t)
                    })
                }
            },
            render: function() {
                var e = oe(this.$slots.default),
                    t = e && e.componentOptions;
                if (t) {
                    var n = _t(t);
                    if (n && (this.include && !bt(this.include, n) || this.exclude && bt(this.exclude, n))) return e;
                    var r = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                    this.cache[r] ? e.componentInstance = this.cache[r].componentInstance : this.cache[r] = e, e.data.keepAlive = !0
                }
                return e
            }
        },
        Fo = {
            KeepAlive: Ro
        };
    ! function(e) {
        var t = {};
        t.get = function() {
            return Pi
        }, Object.defineProperty(e, "config", t), e.util = {
            warn: Bi,
            extend: h,
            mergeOptions: B,
            defineReactive: j
        }, e.set = N, e.delete = L, e.nextTick = ro, e.options = Object.create(null), Di.forEach(function(t) {
            e.options[t + "s"] = Object.create(null)
        }), e.options._base = e, h(e.options.components, Fo), dt(e), vt(e), ht(e), yt(e)
    }(pt), Object.defineProperty(pt.prototype, "$isServer", {
        get: eo
    }), Object.defineProperty(pt.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode.ssrContext
        }
    }), pt.version = "2.3.2";
    var Bo, Ho, Uo, Vo, zo, Jo, Ko, qo, Wo, Zo = u("style,class"),
        Go = u("input,textarea,option,select"),
        Yo = function(e, t, n) {
            return "value" === n && Go(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        },
        Qo = u("contenteditable,draggable,spellcheck"),
        Xo = u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        ea = "http://www.w3.org/1999/xlink",
        ta = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        },
        na = function(e) {
            return ta(e) ? e.slice(6, e.length) : ""
        },
        ra = function(e) {
            return null == e || !1 === e
        },
        ia = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        },
        oa = u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
        aa = u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        sa = function(e) {
            return "pre" === e
        },
        ca = function(e) {
            return oa(e) || aa(e)
        },
        ua = Object.create(null),
        la = Object.freeze({
            createElement: jt,
            createElementNS: Nt,
            createTextNode: Lt,
            createComment: It,
            insertBefore: Dt,
            removeChild: Mt,
            appendChild: Pt,
            parentNode: Rt,
            nextSibling: Ft,
            tagName: Bt,
            setTextContent: Ht,
            setAttribute: Ut
        }),
        fa = {
            create: function(e, t) {
                Vt(t)
            },
            update: function(e, t) {
                e.data.ref !== t.data.ref && (Vt(e, !0), Vt(t))
            },
            destroy: function(e) {
                Vt(e, !0)
            }
        },
        pa = new ho("", {}, []),
        da = ["create", "activate", "update", "remove", "destroy"],
        va = {
            create: qt,
            update: qt,
            destroy: function(e) {
                qt(e, pa)
            }
        },
        ha = Object.create(null),
        ma = [fa, va],
        ga = {
            create: Qt,
            update: Qt
        },
        ya = {
            create: en,
            update: en
        },
        _a = /[\w).+\-_$\]]/,
        ba = "__r",
        $a = "__c",
        xa = {
            create: Sn,
            update: Sn
        },
        wa = {
            create: Tn,
            update: Tn
        },
        Ca = p(function(e) {
            var t = {};
            return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                if (e) {
                    var n = e.split(/:(.+)/);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim())
                }
            }), t
        }),
        ka = /^--/,
        Aa = /\s*!important$/,
        Oa = function(e, t, n) {
            if (ka.test(t)) e.style.setProperty(t, n);
            else if (Aa.test(n)) e.style.setProperty(t, n.replace(Aa, ""), "important");
            else {
                var r = Ta(t);
                if (Array.isArray(n))
                    for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i];
                else e.style[r] = n
            }
        },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = p(function(e) {
            if (Wo = Wo || document.createElement("div"), "filter" !== (e = Ti(e)) && e in Wo.style) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Sa.length; n++) {
                var r = Sa[n] + t;
                if (r in Wo.style) return r
            }
        }),
        Ea = {
            create: Mn,
            update: Mn
        },
        ja = p(function(e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        }),
        Na = Ui && !Ji,
        La = "transition",
        Ia = "animation",
        Da = "transition",
        Ma = "transitionend",
        Pa = "animation",
        Ra = "animationend";
    Na && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Da = "WebkitTransition", Ma = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Pa = "WebkitAnimation", Ra = "webkitAnimationEnd"));
    var Fa = Ui && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
        Ba = /\b(transform|all)(,|$)/,
        Ha = Ui ? {
            create: Yn,
            activate: Yn,
            remove: function(e, t) {
                !0 !== e.data.show ? Wn(e, t) : t()
            }
        } : {},
        Ua = [ga, ya, xa, wa, Ea, Ha],
        Va = Ua.concat(ma),
        za = function(i) {
            function o(e) {
                return new ho(E.tagName(e).toLowerCase(), {}, [], void 0, e)
            }

            function a(e, t) {
                function n() {
                    0 == --n.listeners && s(e)
                }
                return n.listeners = t, n
            }

            function s(e) {
                var n = E.parentNode(e);
                t(n) && E.removeChild(n, e)
            }

            function c(e, r, i, o, a) {
                if (e.isRootInsert = !a, !l(e, r, i, o)) {
                    var s = e.data,
                        c = e.children,
                        u = e.tag;
                    t(u) ? (e.elm = e.ns ? E.createElementNS(e.ns, u) : E.createElement(u, e), g(e), v(e, c, r), t(s) && m(e, r), d(i, e.elm, o)) : n(e.isComment) ? (e.elm = E.createComment(e.text), d(i, e.elm, o)) : (e.elm = E.createTextNode(e.text), d(i, e.elm, o))
                }
            }

            function l(e, r, i, o) {
                var a = e.data;
                if (t(a)) {
                    var s = t(e.componentInstance) && a.keepAlive;
                    if (t(a = a.hook) && t(a = a.init) && a(e, !1, i, o), t(e.componentInstance)) return f(e, r), n(s) && p(e, r, i, o), !0
                }
            }

            function f(e, n) {
                t(e.data.pendingInsert) && n.push.apply(n, e.data.pendingInsert), e.elm = e.componentInstance.$el, h(e) ? (m(e, n), g(e)) : (Vt(e), n.push(e))
            }

            function p(e, n, r, i) {
                for (var o, a = e; a.componentInstance;)
                    if (a = a.componentInstance._vnode, t(o = a.data) && t(o = o.transition)) {
                        for (o = 0; o < S.activate.length; ++o) S.activate[o](pa, a);
                        n.push(a);
                        break
                    }
                d(r, e.elm, i)
            }

            function d(e, n, r) {
                t(e) && (t(r) ? r.parentNode === e && E.insertBefore(e, n, r) : E.appendChild(e, n))
            }

            function v(e, t, n) {
                if (Array.isArray(t))
                    for (var i = 0; i < t.length; ++i) c(t[i], n, e.elm, null, !0);
                else r(e.text) && E.appendChild(e.elm, E.createTextNode(e.text))
            }

            function h(e) {
                for (; e.componentInstance;) e = e.componentInstance._vnode;
                return t(e.tag)
            }

            function m(e, n) {
                for (var r = 0; r < S.create.length; ++r) S.create[r](pa, e);
                A = e.data.hook, t(A) && (t(A.create) && A.create(pa, e), t(A.insert) && n.push(e))
            }

            function g(e) {
                for (var n, r = e; r;) t(n = r.context) && t(n = n.$options._scopeId) && E.setAttribute(e.elm, n, ""), r = r.parent;
                t(n = bo) && n !== e.context && t(n = n.$options._scopeId) && E.setAttribute(e.elm, n, "")
            }

            function y(e, t, n, r, i, o) {
                for (; r <= i; ++r) c(n[r], o, e, t)
            }

            function _(e) {
                var n, r, i = e.data;
                if (t(i))
                    for (t(n = i.hook) && t(n = n.destroy) && n(e), n = 0; n < S.destroy.length; ++n) S.destroy[n](e);
                if (t(n = e.children))
                    for (r = 0; r < e.children.length; ++r) _(e.children[r])
            }

            function b(e, n, r, i) {
                for (; r <= i; ++r) {
                    var o = n[r];
                    t(o) && (t(o.tag) ? ($(o), _(o)) : s(o.elm))
                }
            }

            function $(e, n) {
                if (t(n) || t(e.data)) {
                    var r, i = S.remove.length + 1;
                    for (t(n) ? n.listeners += i : n = a(e.elm, i), t(r = e.componentInstance) && t(r = r._vnode) && t(r.data) && $(r, n), r = 0; r < S.remove.length; ++r) S.remove[r](e, n);
                    t(r = e.data.hook) && t(r = r.remove) ? r(e, n) : n()
                } else s(e.elm)
            }

            function x(n, r, i, o, a) {
                for (var s, u, l, f, p = 0, d = 0, v = r.length - 1, h = r[0], m = r[v], g = i.length - 1, _ = i[0], $ = i[g], x = !a; p <= v && d <= g;) e(h) ? h = r[++p] : e(m) ? m = r[--v] : zt(h, _) ? (w(h, _, o), h = r[++p], _ = i[++d]) : zt(m, $) ? (w(m, $, o), m = r[--v], $ = i[--g]) : zt(h, $) ? (w(h, $, o), x && E.insertBefore(n, h.elm, E.nextSibling(m.elm)), h = r[++p], $ = i[--g]) : zt(m, _) ? (w(m, _, o), x && E.insertBefore(n, m.elm, h.elm), m = r[--v], _ = i[++d]) : (e(s) && (s = Kt(r, p, v)), u = t(_.key) ? s[_.key] : null, e(u) ? (c(_, o, n, h.elm), _ = i[++d]) : (l = r[u], zt(l, _) ? (w(l, _, o), r[u] = void 0, x && E.insertBefore(n, _.elm, h.elm), _ = i[++d]) : (c(_, o, n, h.elm), _ = i[++d])));
                p > v ? (f = e(i[g + 1]) ? null : i[g + 1].elm, y(n, f, i, d, g, o)) : d > g && b(n, r, p, v)
            }

            function w(r, i, o, a) {
                if (r !== i) {
                    if (n(i.isStatic) && n(r.isStatic) && i.key === r.key && (n(i.isCloned) || n(i.isOnce))) return i.elm = r.elm, void(i.componentInstance = r.componentInstance);
                    var s, c = i.data;
                    t(c) && t(s = c.hook) && t(s = s.prepatch) && s(r, i);
                    var u = i.elm = r.elm,
                        l = r.children,
                        f = i.children;
                    if (t(c) && h(i)) {
                        for (s = 0; s < S.update.length; ++s) S.update[s](r, i);
                        t(s = c.hook) && t(s = s.update) && s(r, i)
                    }
                    e(i.text) ? t(l) && t(f) ? l !== f && x(u, l, f, o, a) : t(f) ? (t(r.text) && E.setTextContent(u, ""), y(u, null, f, 0, f.length - 1, o)) : t(l) ? b(u, l, 0, l.length - 1) : t(r.text) && E.setTextContent(u, "") : r.text !== i.text && E.setTextContent(u, i.text), t(c) && t(s = c.hook) && t(s = s.postpatch) && s(r, i)
                }
            }

            function C(e, r, i) {
                if (n(i) && t(e.parent)) e.parent.data.pendingInsert = r;
                else
                    for (var o = 0; o < r.length; ++o) r[o].data.hook.insert(r[o])
            }

            function k(e, n, r) {
                n.elm = e;
                var i = n.tag,
                    o = n.data,
                    a = n.children;
                if (t(o) && (t(A = o.hook) && t(A = A.init) && A(n, !0), t(A = n.componentInstance))) return f(n, r), !0;
                if (t(i)) {
                    if (t(a))
                        if (e.hasChildNodes()) {
                            for (var s = !0, c = e.firstChild, u = 0; u < a.length; u++) {
                                if (!c || !k(c, a[u], r)) {
                                    s = !1;
                                    break
                                }
                                c = c.nextSibling
                            }
                            if (!s || c) return !1
                        } else v(n, a, r);
                    if (t(o))
                        for (var l in o)
                            if (!j(l)) {
                                m(n, r);
                                break
                            }
                } else e.data !== n.text && (e.data = n.text);
                return !0
            }
            var A, O, S = {},
                T = i.modules,
                E = i.nodeOps;
            for (A = 0; A < da.length; ++A)
                for (S[da[A]] = [], O = 0; O < T.length; ++O) t(T[O][da[A]]) && S[da[A]].push(T[O][da[A]]);
            var j = u("attrs,style,class,staticClass,staticStyle,key");
            return function(r, i, a, s, u, l) {
                if (e(i)) return void(t(r) && _(r));
                var f = !1,
                    p = [];
                if (e(r)) f = !0, c(i, p, u, l);
                else {
                    var d = t(r.nodeType);
                    if (!d && zt(r, i)) w(r, i, p, s);
                    else {
                        if (d) {
                            if (1 === r.nodeType && r.hasAttribute(Ii) && (r.removeAttribute(Ii), a = !0), n(a) && k(r, i, p)) return C(i, p, !0), r;
                            r = o(r)
                        }
                        var v = r.elm,
                            m = E.parentNode(v);
                        if (c(i, p, v._leaveCb ? null : m, E.nextSibling(v)), t(i.parent)) {
                            for (var g = i.parent; g;) g.elm = i.elm, g = g.parent;
                            if (h(i))
                                for (var y = 0; y < S.create.length; ++y) S.create[y](pa, i.parent)
                        }
                        t(m) ? b(m, [r], 0, 0) : t(r.tag) && _(r)
                    }
                }
                return C(i, p, f), i.elm
            }
        }({
            nodeOps: la,
            modules: Va
        });
    Ji && document.addEventListener("selectionchange", function() {
        var e = document.activeElement;
        e && e.vmodel && rr(e, "input")
    });
    var Ja = {
            inserted: function(e, t, n) {
                if ("select" === n.tag) {
                    var r = function() {
                        Qn(e, t, n.context)
                    };
                    r(), (zi || Ki) && setTimeout(r, 0)
                } else "textarea" !== n.tag && "text" !== e.type && "password" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", nr), qi || (e.addEventListener("compositionstart", tr), e.addEventListener("compositionend", nr)), Ji && (e.vmodel = !0)))
            },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    Qn(e, t, n.context);
                    (e.multiple ? t.value.some(function(t) {
                        return Xn(t, e.options)
                    }) : t.value !== t.oldValue && Xn(t.value, e.options)) && rr(e, "change")
                }
            }
        },
        Ka = {
            bind: function(e, t, n) {
                var r = t.value;
                n = ir(n);
                var i = n.data && n.data.transition,
                    o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                r && i && !Ji ? (n.data.show = !0, qn(n, function() {
                    e.style.display = o
                })) : e.style.display = r ? o : "none"
            },
            update: function(e, t, n) {
                var r = t.value;
                r !== t.oldValue && (n = ir(n), n.data && n.data.transition && !Ji ? (n.data.show = !0, r ? qn(n, function() {
                    e.style.display = e.__vOriginalDisplay
                }) : Wn(n, function() {
                    e.style.display = "none"
                })) : e.style.display = r ? e.__vOriginalDisplay : "none")
            },
            unbind: function(e, t, n, r, i) {
                i || (e.style.display = e.__vOriginalDisplay)
            }
        },
        qa = {
            model: Ja,
            show: Ka
        },
        Wa = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        },
        Za = {
            name: "transition",
            props: Wa,
            abstract: !0,
            render: function(e) {
                var t = this,
                    n = this.$slots.default;
                if (n && (n = n.filter(function(e) {
                        return e.tag
                    }), n.length)) {
                    var i = this.mode,
                        o = n[0];
                    if (cr(this.$vnode)) return o;
                    var a = or(o);
                    if (!a) return o;
                    if (this._leaving) return sr(e, o);
                    var s = "__transition-" + this._uid + "-";
                    a.key = null == a.key ? s + a.tag : r(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                    var c = (a.data || (a.data = {})).transition = ar(this),
                        u = this._vnode,
                        l = or(u);
                    if (a.data.directives && a.data.directives.some(function(e) {
                            return "show" === e.name
                        }) && (a.data.show = !0), l && l.data && !ur(a, l)) {
                        var f = l && (l.data.transition = h({}, c));
                        if ("out-in" === i) return this._leaving = !0, Y(f, "afterLeave", function() {
                            t._leaving = !1, t.$forceUpdate()
                        }), sr(e, o);
                        if ("in-out" === i) {
                            var p, d = function() {
                                p()
                            };
                            Y(c, "afterEnter", d), Y(c, "enterCancelled", d), Y(f, "delayLeave", function(e) {
                                p = e
                            })
                        }
                    }
                    return o
                }
            }
        },
        Ga = h({
            tag: String,
            moveClass: String
        }, Wa);
    delete Ga.mode;
    var Ya = {
            props: Ga,
            render: function(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = ar(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a)
                }
                if (r) {
                    for (var u = [], l = [], f = 0; f < r.length; f++) {
                        var p = r[f];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p)
                    }
                    this.kept = e(t, null, u), this.removed = l
                }
                return e(t, null, o)
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
            },
            updated: function() {
                var e = this.prevChildren,
                    t = this.moveClass || (this.name || "v") + "-move";
                if (e.length && this.hasMove(e[0].elm, t)) {
                    e.forEach(lr), e.forEach(fr), e.forEach(pr);
                    var n = document.body;
                    n.offsetHeight;
                    e.forEach(function(e) {
                        if (e.data.moved) {
                            var n = e.elm,
                                r = n.style;
                            Hn(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ma, n._moveCb = function e(r) {
                                r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ma, e), n._moveCb = null, Un(n, t))
                            })
                        }
                    })
                }
            },
            methods: {
                hasMove: function(e, t) {
                    if (!Na) return !1;
                    if (null != this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function(e) {
                        Rn(n, e)
                    }), Pn(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = zn(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        },
        Qa = {
            Transition: Za,
            TransitionGroup: Ya
        };
    pt.config.mustUseProp = Yo, pt.config.isReservedTag = ca, pt.config.isReservedAttr = Zo, pt.config.getTagNamespace = St, pt.config.isUnknownElement = Tt, h(pt.options.directives, qa), h(pt.options.components, Qa), pt.prototype.__patch__ = Ui ? za : g, pt.prototype.$mount = function(e, t) {
        return e = e && Ui ? Et(e) : void 0, ve(this, e, t)
    }, setTimeout(function() {
        Pi.devtools && to && to.emit("init", pt)
    }, 0);
    var Xa, es = !!Ui && function(e, t) {
            var n = document.createElement("div");
            return n.innerHTML = '<div a="' + e + '">', n.innerHTML.indexOf(t) > 0
        }("\n", "&#10;"),
        ts = u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        ns = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        rs = u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        is = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
        os = new RegExp("^\\s*" + /([^\s"'<>\/=]+)/.source + "(?:\\s*(" + /(?:=)/.source + ")\\s*(?:" + is.join("|") + "))?"),
        as = "[a-zA-Z_][\\w\\-\\.]*",
        ss = new RegExp("^<((?:" + as + "\\:)?" + as + ")"),
        cs = /^\s*(\/?)>/,
        us = new RegExp("^<\\/((?:" + as + "\\:)?" + as + ")[^>]*>"),
        ls = /^<!DOCTYPE [^>]+>/i,
        fs = /^<!--/,
        ps = /^<!\[/,
        ds = !1;
    "x".replace(/x(.)?/g, function(e, t) {
        ds = "" === t
    });
    var vs, hs, ms, gs, ys, _s, bs, $s, xs, ws, Cs, ks, As, Os, Ss, Ts, Es, js, Ns = u("script,style,textarea", !0),
        Ls = {},
        Is = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n"
        },
        Ds = /&(?:lt|gt|quot|amp);/g,
        Ms = /&(?:lt|gt|quot|amp|#10);/g,
        Ps = /\{\{((?:.|\n)+?)\}\}/g,
        Rs = p(function(e) {
            var t = e[0].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&"),
                n = e[1].replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
        }),
        Fs = /^@|^v-on:/,
        Bs = /^v-|^@|^:/,
        Hs = /(.*?)\s+(?:in|of)\s+(.*)/,
        Us = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
        Vs = /:(.*)$/,
        zs = /^:|^v-bind:/,
        Js = /\.[^.]+/g,
        Ks = p(dr),
        qs = /^xmlns:NS\d+/,
        Ws = /^NS\d+:/,
        Zs = p(Rr),
        Gs = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
        Ys = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
        Qs = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [8, 46]
        },
        Xs = function(e) {
            return "if(" + e + ")return null;"
        },
        ec = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: Xs("$event.target !== $event.currentTarget"),
            ctrl: Xs("!$event.ctrlKey"),
            shift: Xs("!$event.shiftKey"),
            alt: Xs("!$event.altKey"),
            meta: Xs("!$event.metaKey"),
            left: Xs("'button' in $event && $event.button !== 0"),
            middle: Xs("'button' in $event && $event.button !== 1"),
            right: Xs("'button' in $event && $event.button !== 2")
        },
        tc = {
            bind: Wr,
            cloak: g
        },
        nc = {
            staticKeys: ["staticClass"],
            transformNode: _i,
            genData: bi
        },
        rc = {
            staticKeys: ["staticStyle"],
            transformNode: $i,
            genData: xi
        },
        ic = [nc, rc],
        oc = {
            model: bn,
            text: wi,
            html: Ci
        },
        ac = {
            expectHTML: !0,
            modules: ic,
            directives: oc,
            isPreTag: sa,
            isUnaryTag: ts,
            mustUseProp: Yo,
            canBeLeftOpenTag: ns,
            isReservedTag: ca,
            getTagNamespace: St,
            staticKeys: function(e) {
                return e.reduce(function(e, t) {
                    return e.concat(t.staticKeys || [])
                }, []).join(",")
            }(ic)
        },
        sc = function(e) {
            function t(t, n) {
                var r = Object.create(e),
                    i = [],
                    o = [];
                if (r.warn = function(e, t) {
                        (t ? o : i).push(e)
                    }, n) {
                    n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = h(Object.create(e.directives), n.directives));
                    for (var a in n) "modules" !== a && "directives" !== a && (r[a] = n[a])
                }
                var s = gi(t, r);
                return s.errors = i, s.tips = o, s
            }

            function n(e, n, i) {
                n = n || {};
                var o = n.delimiters ? String(n.delimiters) + e : e;
                if (r[o]) return r[o];
                var a = t(e, n),
                    s = {},
                    c = [];
                s.render = yi(a.render, c);
                var u = a.staticRenderFns.length;
                s.staticRenderFns = new Array(u);
                for (var l = 0; l < u; l++) s.staticRenderFns[l] = yi(a.staticRenderFns[l], c);
                return r[o] = s
            }
            var r = Object.create(null);
            return {
                compile: t,
                compileToFunctions: n
            }
        }(ac),
        cc = sc.compileToFunctions,
        uc = p(function(e) {
            var t = Et(e);
            return t && t.innerHTML
        }),
        lc = pt.prototype.$mount;
    return pt.prototype.$mount = function(e, t) {
        if ((e = e && Et(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r)
                if ("string" == typeof r) "#" === r.charAt(0) && (r = uc(r));
                else {
                    if (!r.nodeType) return this;
                    r = r.innerHTML
                }
            else e && (r = ki(e));
            if (r) {
                var i = cc(r, {
                        shouldDecodeNewlines: es,
                        delimiters: n.delimiters
                    }, this),
                    o = i.render,
                    a = i.staticRenderFns;
                n.render = o, n.staticRenderFns = a
            }
        }
        return lc.call(this, e, t)
    }, pt.compile = cc, pt
});
! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return t.BotUI = e(t)
    }) : t.BotUI = e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    return function(e, o) {
        if (o = o || {}, !e) throw Error("BotUI: Container id is required as first argument.");
        if (!document.getElementById(e)) throw Error("BotUI: Element with id #" + e + " does not exist.");
        if (!t.Vue && !o.vue) throw Error("BotUI: Vue is required but not found.");
        var n, i, s, a = {
                debug: !1,
                fontawesome: !0,
                searchselect: !0
            },
            c = {},
            l = {
                icon: /!\(([^\)]+)\)/gim,
                image: /!\[(.*?)\]\((.*?)\)/gim,
                link: /\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim
            };
        for (var u in t.Vue = t.Vue || o.vue, a) o.hasOwnProperty(u) && (a[u] = o[u]);

        function r(t, e, o, n) {
            return "<a class='botui-message-content-link' target='" + (n ? "blank" : "") + "' href='" + o + "'>" + e + "</a>"
        }

        function b(t, e) {
            var o = document.createElement("script");
            o.type = "text/javascript", o.src = t, e && (o.onload = e), document.body.appendChild(o)
        }

        function v(t) {
            d.action.addMessage && c.message.human({
                delay: 100,
                content: t
            }), d.action.show = !d.action.autoHide
        }
        t.Promise || "undefined" != typeof Promise || o.promise || b("https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js");
        var f = {
            template: '<div class="botui botui-container" v-botui-container><div class="botui-messages-container"><div v-for="msg in messages" class="botui-message" :class="msg.cssClass" v-botui-scroll><transition name="slide-fade"><div v-if="msg.visible"><div v-if="msg.photo && !msg.loading" :class="[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]"> <img :src="msg.photo" :class="[{human: msg.human, \'agent\': !msg.human}]"></div><div :class="[{human: msg.human, \'botui-message-content\': true}, msg.type]"><span v-if="msg.type == \'text\'" v-text="msg.content" v-botui-markdown></span><span v-if="msg.type == \'html\'" v-html="msg.content"></span> <iframe v-if="msg.type == \'embed\'" :src="msg.content" frameborder="0" allowfullscreen></iframe></div></div></transition><div v-if="msg.photo && msg.loading && !msg.human" :class="[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]"> <img :src="msg.photo" :class="[{human: msg.human, \'agent\': !msg.human}]"></div><div v-if="msg.loading" class="botui-message-content loading"><i class="dot"></i><i class="dot"></i><i class="dot"></i></div></div></div><div class="botui-actions-container"><transition name="slide-fade"><div v-if="action.show" v-botui-scroll><form v-if="action.type == \'text\'" class="botui-actions-text" @submit.prevent="handle_action_text()" :class="action.cssClass"><i v-if="action.text.icon" class="botui-icon botui-action-text-icon fa" :class="\'fa-\' + action.text.icon"></i> <input type="text" ref="input" :type="action.text.sub_type" v-model="action.text.value" class="botui-actions-text-input" :placeholder="action.text.placeholder" :size="action.text.size" :value=" action.text.value" :class="action.text.cssClass" required v-focus/> <button type="submit" :class="{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}"><i v-if="action.text.button && action.text.button.icon" class="botui-icon botui-action-button-icon fa" :class="\'fa-\' + action.text.button.icon"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button></form><form v-if="action.type == \'select\'" class="botui-actions-select" @submit.prevent="handle_action_select()" :class="action.cssClass"><i v-if="action.select.icon" class="botui-icon botui-action-select-icon fa" :class="\'fa-\' + action.select.icon"></i><v-select v-if="action.select.searchselect && !action.select.multipleselect" v-model="action.select.value" :value="action.select.value" :placeholder="action.select.placeholder" class="botui-actions-text-searchselect" :label="action.select.label" :options="action.select.options"></v-select><v-select v-else-if="action.select.searchselect && action.select.multipleselect" multiple v-model="action.select.value" :value="action.select.value" :placeholder="action.select.placeholder" class="botui-actions-text-searchselect" :label="action.select.label" :options="action.select.options"></v-select> <select v-else v-model="action.select.value" class="botui-actions-text-select" :placeholder="action.select.placeholder" :size="action.select.size" :class="action.select.cssClass" required v-focus><option v-for="option in action.select.options" :class="action.select.optionClass" v-bind:value="option.value" :disabled="(option.value == \'\')?true:false" :selected="(action.select.value == option.value)?\'selected\':\'\'"> {{ option.text }}</option></select> <button type="submit" :class="{\'botui-actions-buttons-button\': !!action.select.button, \'botui-actions-select-submit\': !action.select.button}"><i v-if="action.select.button && action.select.button.icon" class="botui-icon botui-action-button-icon fa" :class="\'fa-\' + action.select.button.icon"></i> <span>{{(action.select.button && action.select.button.label) || \'Ok\'}}</span></button></form><div v-if="action.type == \'button\'" class="botui-actions-buttons" :class="action.cssClass"> <button type="button" :class="button.cssClass" class="botui-actions-buttons-button" v-botui-scroll v-for="button in action.button.buttons" @click="handle_action_button(button)"><i v-if="button.icon" class="botui-icon botui-action-button-icon fa" :class="\'fa-\' + button.icon"></i> {{button.text}}</button></div><form v-if="action.type == \'buttontext\'" class="botui-actions-text" @submit.prevent="handle_action_text()" :class="action.cssClass"><i v-if="action.text.icon" class="botui-icon botui-action-text-icon fa" :class="\'fa-\' + action.text.icon"></i> <input type="text" ref="input" :type="action.text.sub_type" v-model="action.text.value" class="botui-actions-text-input" :placeholder="action.text.placeholder" :size="action.text.size" :value="action.text.value" :class="action.text.cssClass" required v-focus/> <button type="submit" :class="{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}"><i v-if="action.text.button && action.text.button.icon" class="botui-icon botui-action-button-icon fa" :class="\'fa-\' + action.text.button.icon"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button><div class="botui-actions-buttons" :class="action.cssClass"> <button type="button" :class="button.cssClass" class="botui-actions-buttons-button" v-for="button in action.button.buttons" @click="handle_action_button(button)" autofocus><i v-if="button.icon" class="botui-icon botui-action-button-icon fa" :class="\'fa-\' + button.icon"></i> {{button.text}}</button></div></form></div></transition></div></div>',
            data: function() {
                return {
                    action: {
                        text: {
                            size: 30,
                            placeholder: "Write here .."
                        },
                        button: {},
                        show: !1,
                        type: "text",
                        autoHide: !0,
                        addMessage: !0
                    },
                    messages: []
                }
            },
            computed: {
                isMobile: function() {
                    return t.innerWidth && t.innerWidth <= 768
                }
            },
            methods: {
                handle_action_button: function(t) {
                    for (var e = 0; e < this.action.button.buttons.length; e++)
                        if (this.action.button.buttons[e].value == t.value && "function" == typeof this.action.button.buttons[e].event) {
                            if (this.action.button.buttons[e].event(t), this.action.button.buttons[e].actionStop) return !1;
                            break
                        }
                    v(t.text);
                    var o = {
                        type: "button",
                        text: t.text,
                        value: t.value
                    };
                    for (var n in t) t.hasOwnProperty(n) && "type" !== n && "text" !== n && "value" !== n && (o[n] = t[n]);
                    s(o)
                },
                handle_action_text: function() {
                    this.action.text.value && (v(this.action.text.value), s({
                        type: "text",
                        value: this.action.text.value
                    }), this.action.text.value = "")
                },
                handle_action_select: function() {
                    if (this.action.select.searchselect && !this.action.select.multipleselect) {
                        if (!this.action.select.value.value) return;
                        v(this.action.select.value[this.action.select.label]), s({
                            type: "text",
                            value: this.action.select.value.value,
                            text: this.action.select.value.text,
                            obj: this.action.select.value
                        })
                    }
                    if (this.action.select.searchselect && this.action.select.multipleselect) {
                        if (!this.action.select.value) return;
                        for (var t = new Array, e = new Array, o = 0; o < this.action.select.value.length; o++) t.push(this.action.select.value[o].value), e.push(this.action.select.value[o][this.action.select.label]);
                        v(e.join(", ")), s({
                            type: "text",
                            value: t.join(", "),
                            text: e.join(", "),
                            obj: this.action.select.value
                        })
                    } else {
                        if (!this.action.select.value) return;
                        for (o = 0; o < this.action.select.options.length; o++) this.action.select.options[o].value == this.action.select.value && (v(this.action.select.options[o].text), s({
                            type: "text",
                            value: this.action.select.value,
                            text: this.action.select.options[o].text
                        }))
                    }
                }
            }
        };
        t.Vue.directive("botui-markdown", function(t, e) {
            "false" != e.value && (t.innerHTML = t.textContent.replace(l.image, "<img class='botui-message-content-image' src='$2' alt='$1' />").replace(l.icon, "<i class='botui-icon botui-message-content-icon fa fa-$1'></i>").replace(l.link, r))
        }), t.Vue.directive("botui-scroll", {
            inserted: function(t) {
                i.scrollTop = i.scrollHeight, t.scrollIntoView(!0)
            }
        }), t.Vue.directive("focus", {
            inserted: function(t) {
                t.focus()
            }
        }), t.Vue.directive("botui-container", {
            inserted: function(t) {
                i = t
            }
        });
        var d = (n = new t.Vue({
            components: {
                "bot-ui": f
            }
        }).$mount("#" + e)).$children[0];

        function p(t) {
            if (!t.loading && !t.content) throw Error('BotUI: "content" is required in a non-loading message object.');
            t.type = t.type || "text", t.visible = !t.delay && !t.loading;
            var e = d.messages.push(t) - 1;
            return new Promise(function(o, n) {
                setTimeout(function() {
                    t.delay && (t.visible = !0, t.loading && (t.loading = !1)), o(e)
                }, t.delay || 0)
            })
        }

        function m(t) {
            return "string" == typeof t && (t = {
                content: t
            }), t || {}
        }

        function h(t) {
            if (!t.action && !t.actionButton && !t.actionText) throw Error('BotUI: "action" property is required.')
        }

        function g(t) {
            return h(t),
                function(t, e) {
                    for (var o in t) e.hasOwnProperty(o) || (e[o] = t[o])
                }({
                    type: "text",
                    cssClass: "",
                    autoHide: !0,
                    addMessage: !0
                }, t), d.action.type = t.type, d.action.cssClass = t.cssClass, d.action.autoHide = t.autoHide, d.action.addMessage = t.addMessage, new Promise(function(e, o) {
                    s = e, setTimeout(function() {
                        d.action.show = !0
                    }, t.delay || 0)
                })
        }
        return c.message = {
            add: function(t) {
                return p(m(t))
            },
            bot: function(t) {
                return p(t = m(t))
            },
            human: function(t) {
                return (t = m(t)).human = !0, p(t)
            },
            get: function(t) {
                return Promise.resolve(d.messages[t])
            },
            remove: function(t) {
                return d.messages.splice(t, 1), Promise.resolve()
            },
            update: function(t, e) {
                var o = d.messages[t];
                return o.content = e.content, o.visible = !e.loading, o.loading = !!e.loading, Promise.resolve(e.content)
            },
            removeAll: function() {
                return d.messages.splice(0, d.messages.length), Promise.resolve()
            }
        }, c.action = {
            show: g,
            hide: function() {
                return d.action.show = !1, Promise.resolve()
            },
            text: function(t) {
                return h(t), d.action.text = t.action, g(t)
            },
            button: function(t) {
                return h(t), t.type = "button", d.action.button.buttons = t.action, g(t)
            },
            select: function(t) {
                if (h(t), t.type = "select", t.action.label = t.action.label || "text", t.action.value = t.action.value || "", t.action.searchselect = void 0 !== t.action.searchselect ? t.action.searchselect : a.searchselect, t.action.multipleselect = t.action.multipleselect || !1, t.action.searchselect && "string" == typeof t.action.value)
                    if (t.action.multipleselect) {
                        var e = t.action.value.split(",");
                        for (t.action.value = new Array, n = 0; n < t.action.options.length; n++)
                            for (var o = 0; o < e.length; o++) t.action.options[n].value == e[o] && t.action.value.push(t.action.options[n])
                    } else
                        for (var n = 0; n < t.action.options.length; n++) t.action.options[n].value == t.action.value && (t.action.value = t.action.options[n]);
                return t.action.searchselect || t.action.options.unshift({
                    value: "",
                    text: t.action.placeholder
                }), d.action.button = t.action.button, d.action.select = t.action, g(t)
            },
            buttontext: function(t) {
                return h(t), t.type = "buttontext", d.action.button.buttons = t.actionButton, d.action.text = t.actionText, g(t)
            }
        }, a.fontawesome && b("https://use.fontawesome.com/ea731dcb6f.js"), a.searchselect && b("https://unpkg.com/vue-select@2.4.0/dist/vue-select.js", function() {
            Vue.component("v-select", VueSelect.VueSelect)
        }), a.debug && (c._botApp = n), c
    }
});

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Me = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                    return Je(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        et || (et = !0, ot())
    }, S.fx.stop = function() {
        et = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

$(document).ready((function() {
    setTimeout((function() {
        !$(".chat-box").is(":visible") && ($("#chat-circle").toggle("scale"), $(".chat-box").toggle("scale"), $(".botui-messages-container").is(":empty") && start_chat())
    }), 1e4)
})), $("#chat-circle").click((function() {
    !$(".chat-box").is(":visible") && ($("#chat-circle").toggle("scale"), $(".chat-box").toggle("scale"), $(".botui-messages-container").is(":empty") && start_chat()), 768 > $(document).width() && $(".chat-logs").height($(window).height() - 100)
})), $(".chat-box-toggle").click((function() {
    $("#chat-circle").toggle("scale"), $(".chat-box").toggle("scale")
}));
var botui = new BotUI("mls-chat-bot");

function start_chat() {
    let fulltext = [];
    fulltext.push('Welcome to our website. I am here to help you.', 'Do you need any help with following?');
    botui.message.add({
        delay: 2e3,
        loading: !0,
        content: "Welcome to our website. I am here to help you."
    }).then((function() {
        botui.message.add({
            delay: 2e3,
            loading: !0,
            content: "Do you need any help with following?"
        })
    })).then((function() {
        botui.action.button({
            delay: 2e3,
            loading: !0,
            action: [{
                text: "Pricing & Plans",
                value: "priceplans"
            }, {
                text: "Amenities",
                value: "amenities"
            }, {
                text: "Get Directions",
                value: "direction"
            }, {
                text: "Book Site Visit",
                value: "sitevisit"
            }, {
                text: "Online Presentation",
                value: "presentation"
            }, {
                text: "Get a call back",
                value: "callback"
            }]
        }).then((function(e) {
            fulltext.push(e.value);
            fulltext.push('Great, Have you ever visited our project before?');
            "priceplans" == e.value || "amenities" == e.value ? botui.message.add({
                    delay: 2e3,
                    loading: !0,
                    content: "Great, Have you ever visited our project before?"
                }).then((function() {
                    botui.action.button({
                        delay: 2e3,
                        loading: !0,
                        action: [{
                            text: "Yes",
                            value: "yes"
                        }, {
                            text: "No",
                            value: "no"
                        }]
                    }).then((function(e) {
                        fulltext.push(e.value);
                        fulltext.push('Select configuration that you are looking for ?');
                        botui.message.add({
                            delay: 2e3,
                            loading: !0,
                            content: "Select configuration that you are looking for ?"
                        }).then((function() {
                            botui.action.button({
                                delay: 2e3,
                                loading: !0,
                                action: [{
                                    text: "1 BHK",
                                    value: "1bhk"
                                }, {
                                    text: "2 BHK",
                                    value: "2bhk"
                                }, {
                                    text: "3 BHK",
                                    value: "3bhk"
                                }, {
                                    text: "4 BHK",
                                    value: "4bhk"
                                }, {
                                    text: "4 BHK +",
                                    value: "4bhk+"
                                }]
                            }).then((function(e) {
                                fulltext.push(e.value);
                                fulltext.push('Please provide your phone number for details');
                                botui.message.add({
                                    delay: 2e3,
                                    loading: !0,
                                    content: "Please provide your phone number for details"
                                }).then((function() {
                                    botui.action.text({
                                        action: {
                                            sub_type: "number",
                                            placeholder: "Enter your mobile number"
                                        }
                                    }).then((function(e) {
                                        validate_mobile(e, fulltext)
                                    }))
                                }))
                            }))
                        }))
                    }))
                })) : "sitevisit" == e.value ?
                (fulltext.push(e.value),
                    fulltext.push('Great, Have you ever visited our project before?'),
                    botui.message.add({
                        delay: 2e3,
                        loading: !0,
                        content: "Great, Have you ever visited our project before?"
                    }).then((function(e) {
                        botui.action.button({
                            delay: 2e3,
                            loading: !0,
                            action: [{
                                text: "Yes",
                                value: "yes"
                            }, {
                                text: "No",
                                value: "no"
                            }]
                        }).then((function(e) {
                            fulltext.push(e.value);
                            fulltext.push('Please select suitable date for site visit');
                            botui.message.add({
                                delay: 2e3,
                                loading: !0,
                                content: "Please select suitable date for site visit"
                            }).then((function() {
                                botui.action.text({
                                    action: {
                                        sub_type: "date",
                                        placeholder: "select date"
                                    }
                                }).then((function(e) {
                                    fulltext.push(e.value);
                                    fulltext.push('Okay, I am booking a visit slot for you please enter suitable time');
                                    botui.message.add({
                                        delay: 2e3,
                                        loading: !0,
                                        content: "Okay, I am booking a visit slot for you please enter suitable time"
                                    }).then((function() {
                                        botui.action.text({
                                            action: {
                                                sub_type: "time",
                                                placeholder: "select time"
                                            }
                                        }).then((function(e) {
                                            fulltext.push(e.value);
                                            fulltext.push('Great! I have booked a site visit slot for you. Please provide your phone number to complete the registration process');
                                            botui.message.add({
                                                delay: 2e3,
                                                loading: !0,
                                                content: "Great! I have booked a site visit slot for you. Please provide your phone number to complete the registration process"
                                            }).then((function() {
                                                botui.action.text({
                                                    action: {
                                                        sub_type: "number",
                                                        placeholder: "Enter your mobile number"
                                                    }
                                                }).then((function(e) {
                                                    validate_mobile(e, fulltext)
                                                }))
                                            }))
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))) : "presentation" == e.value ?
                (
                    fulltext.push(e.value),
                    fulltext.push('Please select suitable date for online presentation'),
                    botui.message.add({
                        delay: 2e3,
                        loading: !0,
                        content: "Please select suitable date for online presentation"
                    }).then((function() {
                        botui.action.text({
                            action: {
                                sub_type: "date",
                                placeholder: "select date"
                            }
                        }).then((function(e) {
                            fulltext.push(e.value);
                            fulltext.push('Okay, I am booking a online presentation slot for you please enter suitable time');
                            botui.message.add({
                                delay: 2e3,
                                loading: !0,
                                content: "Okay, I am booking a online presentation slot for you please enter suitable time"
                            }).then((function() {
                                botui.action.text({
                                    action: {
                                        sub_type: "time",
                                        placeholder: "select time"
                                    }
                                }).then((function(e) {
                                    fulltext.push(e.value);
                                    fulltext.push('Great! I have booked a online presentation slot for you. Please provide your phone number to complete the registration process');
                                    botui.message.add({
                                        delay: 2e3,
                                        loading: !0,
                                        content: "Great! I have booked a online presentation slot for you. Please provide your phone number to complete the registration process"
                                    }).then((function() {
                                        botui.action.text({
                                            action: {
                                                sub_type: "number",
                                                placeholder: "Enter your mobile number"
                                            }
                                        }).then((function(e) {
                                            validate_mobile(e, fulltext)
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))) : "direction" == e.value || "presentation" == e.value ?
                (
                    fulltext.push(e.value),
                    fulltext.push('Great, Have you ever visited our project before?'),
                    botui.message.add({
                        delay: 2e3,
                        loading: !0,
                        content: "Great, Have you ever visited our project before?"
                    }).then((function(e) {
                        botui.action.button({
                            delay: 2e3,
                            loading: !0,
                            action: [{
                                text: "Yes",
                                value: "yes"
                            }, {
                                text: "No",
                                value: "no"
                            }]
                        }).then((function(e) {
                            fulltext.push(e.value);
                            fulltext.push('Please provide your phone number for details');
                            botui.message.add({
                                delay: 2e3,
                                loading: !0,
                                content: "Please provide your phone number for details"
                            }).then((function() {
                                botui.action.text({
                                    action: {
                                        sub_type: "number",
                                        placeholder: "Enter your mobile number"
                                    }
                                }).then((function(e) {
                                    validate_mobile(e, fulltext)
                                }))
                            }))
                        }))
                    }))) :
                (
                    fulltext.push(e.value),
                    fulltext.push('Please provide your phone number for details'),
                    botui.message.add({
                        delay: 2e3,
                        loading: !0,
                        content: "Please provide your phone number for details"
                    }).then((function() {
                        botui.action.text({
                            action: {
                                sub_type: "number",
                                placeholder: "Enter your mobile number"
                            }
                        }).then((function(e) {
                            validate_mobile(e, fulltext)
                        }))
                    })))
        }))
    }))
}

function validate_mobile(e, fulltext) {
    var t = e.value,
        o = e.value,
        source = '';
    if (/^\d{10}$/.test(o)) {
        fulltext.push(e.value);
        fulltext = fulltext.join(', ')
        botui.message.add({
            delay: 2e3,
            loading: !0,
            content: "Thank you. Our sales executive will connect shortly for the needful."
        }), "BLANKD" != source && (source = "FZY");
        var n = {
            name: "Chatbot",
            email: "chatbot@digitalrubix.com",
            mobile: t,
            af1: fulltext,
            campaignId: 29645815,
        };
        window.location.href = `thanks.php?name=${n.name}&mobile=${n.mobile}&email=${n.email}&af1=${n.af1}&af4=&af5=&af6=&campaignid=${n.campaignId}`;
        // $.ajax({
        //     type: "get",
        //     url: `http://reraonline.co.in/demo/software/thanks.php?name=${n.name}&mobile=${n.mobile}&email=${n.email}&af1=${n.af1}&af4=&af5=&af6=&campaignid=${n.campaignId}`,
        //     success: function (e, t, o) {
        //         window.location.href = "/thank-you"
        //     },
        //     error: function (e, t) { }
        // })
    } else botui.message.add({
        delay: 2e3,
        loading: !0,
        content: "That was invalid number, Please provide correct number"
    }).then((function() {
        botui.action.text({
            action: {
                sub_type: "number",
                placeholder: "Enter 10 digit mobile number"
            }
        }).then((function(e) {
            validate_mobile(e, fulltext)
        }))
    }))
}
$(window).resize((function() {
    768 > $(document).width() && $(".chat-logs").height($(window).height() - 100)
}));