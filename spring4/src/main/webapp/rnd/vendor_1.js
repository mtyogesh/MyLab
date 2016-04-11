d3 = function() {
    function t(t) {
        return null != t && !isNaN(t)
    }

    function n(t) {
        return t.length
    }

    function e(t) {
        for (var n = 1; t * n % 1;) n *= 10;
        return n
    }

    function r(t, n) {
        try {
            for (var e in n) Object.defineProperty(t.prototype, e, {
                value: n[e],
                enumerable: !1
            })
        } catch (r) {
            t.prototype = n
        }
    }

    function i() {}

    function o() {}

    function a(t, n, e) {
        return function() {
            var r = e.apply(n, arguments);
            return r === n ? t : r
        }
    }

    function u(t, n) {
        if (n in t) return n;
        n = n.charAt(0).toUpperCase() + n.substring(1);
        for (var e = 0, r = qo.length; r > e; ++e) {
            var i = qo[e] + n;
            if (i in t) return i
        }
    }

    function s() {}

    function l() {}

    function c(t) {
        function n() {
            for (var n, r = e, i = -1, o = r.length; ++i < o;)(n = r[i].on) && n.apply(this, arguments);
            return t
        }
        var e = [],
            r = new i;
        return n.on = function(n, i) {
            var o, a = r.get(n);
            return arguments.length < 2 ? a && a.on : (a && (a.on = null, e = e.slice(0, o = e.indexOf(a)).concat(e.slice(o + 1)), r.remove(n)), i && e.push(r.set(n, {
                on: i
            })), t)
        }, n
    }

    function f() {
        yo.event.preventDefault()
    }

    function h() {
        for (var t, n = yo.event; t = n.sourceEvent;) n = t;
        return n
    }

    function p(t) {
        for (var n = new l, e = 0, r = arguments.length; ++e < r;) n[arguments[e]] = c(n);
        return n.of = function(e, r) {
            return function(i) {
                try {
                    var o = i.sourceEvent = yo.event;
                    i.target = t, yo.event = i, n[i.type].apply(e, r)
                } finally {
                    yo.event = o
                }
            }
        }, n
    }

    function d(t) {
        return zo(t, Bo), t
    }

    function g(t) {
        return "function" == typeof t ? t : function() {
            return Fo(t, this)
        }
    }

    function m(t) {
        return "function" == typeof t ? t : function() {
            return Oo(t, this)
        }
    }

    function v(t, n) {
        function e() {
            this.removeAttribute(t)
        }

        function r() {
            this.removeAttributeNS(t.space, t.local)
        }

        function i() {
            this.setAttribute(t, n)
        }

        function o() {
            this.setAttributeNS(t.space, t.local, n)
        }

        function a() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }

        function u() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
        return t = yo.ns.qualify(t), null == n ? t.local ? r : e : "function" == typeof n ? t.local ? u : a : t.local ? o : i
    }

    function y(t) {
        return t.trim().replace(/\s+/g, " ")
    }

    function x(t) {
        return new RegExp("(?:^|\\s+)" + yo.requote(t) + "(?:\\s+|$)", "g")
    }

    function b(t, n) {
        function e() {
            for (var e = -1; ++e < i;) t[e](this, n)
        }

        function r() {
            for (var e = -1, r = n.apply(this, arguments); ++e < i;) t[e](this, r)
        }
        t = t.trim().split(/\s+/).map(M);
        var i = t.length;
        return "function" == typeof n ? r : e;

    }

    function M(t) {
        var n = x(t);
        return function(e, r) {
            if (i = e.classList) return r ? i.add(t) : i.remove(t);
            var i = e.getAttribute("class") || "";
            r ? (n.lastIndex = 0, n.test(i) || e.setAttribute("class", y(i + " " + t))) : e.setAttribute("class", y(i.replace(n, " ")))
        }
    }

    function w(t, n, e) {
        function r() {
            this.style.removeProperty(t)
        }

        function i() {
            this.style.setProperty(t, n, e)
        }

        function o() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
        return null == n ? r : "function" == typeof n ? o : i
    }

    function _(t, n) {
        function e() {
            delete this[t]
        }

        function r() {
            this[t] = n
        }

        function i() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
        return null == n ? e : "function" == typeof n ? i : r
    }

    function E(t) {
        return "function" == typeof t ? t : (t = yo.ns.qualify(t)).local ? function() {
            return Mo.createElementNS(t.space, t.local)
        } : function() {
            return Mo.createElementNS(this.namespaceURI, t)
        }
    }

    function k(t) {
        return {
            __data__: t
        }
    }

    function S(t) {
        return function() {
            return Ro(this, t)
        }
    }

    function T(t) {
        return arguments.length || (t = yo.ascending),
            function(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
    }

    function N(t, n) {
        for (var e = 0, r = t.length; r > e; e++)
            for (var i, o = t[e], a = 0, u = o.length; u > a; a++)(i = o[a]) && n(i, a, e);
        return t
    }

    function C(t) {
        return zo(t, Wo), t
    }

    function A(t) {
        var n, e;
        return function(r, i, o) {
            var a, u = t[o].update,
                s = u.length;
            for (o != e && (e = o, n = 0), i >= n && (n = i + 1); !(a = u[n]) && ++n < s;);
            return a
        }
    }

    function D() {
        var t = this.__transition__;
        t && ++t.active
    }

    function j(t, n, e) {
        function r() {
            var n = this[a];
            n && (this.removeEventListener(t, n, n.$), delete this[a])
        }

        function i() {
            var i = l(n, bo(arguments));
            r.call(this), this.addEventListener(t, this[a] = i, i.$ = e), i._ = n
        }

        function o() {
            var n, e = new RegExp("^__on([^.]+)" + yo.requote(t) + "$");
            for (var r in this)
                if (n = r.match(e)) {
                    var i = this[r];
                    this.removeEventListener(n[1], i, i.$), delete this[r]
                }
        }
        var a = "__on" + t,
            u = t.indexOf("."),
            l = L;
        u > 0 && (t = t.substring(0, u));
        var c = Xo.get(t);
        return c && (t = c, l = q), u ? n ? i : r : n ? s : o
    }

    function L(t, n) {
        return function(e) {
            var r = yo.event;
            yo.event = e, n[0] = this.__data__;
            try {
                t.apply(this, n)
            } finally {
                yo.event = r
            }
        }
    }

    function q(t, n) {
        var e = L(t, n);
        return function(t) {
            var n = this,
                r = t.relatedTarget;
            r && (r === n || 8 & r.compareDocumentPosition(n)) || e.call(n, t)
        }
    }

    function H() {
        var t = ".dragsuppress-" + ++Yo,
            n = "touchmove" + t,
            e = "selectstart" + t,
            r = "dragstart" + t,
            i = "click" + t,
            o = yo.select(_o).on(n, f).on(e, f).on(r, f),
            a = wo.style,
            u = a[Uo];
        return a[Uo] = "none",
            function(n) {
                function e() {
                    o.on(i, null)
                }
                o.on(t, null), a[Uo] = u, n && (o.on(i, function() {
                    f(), e()
                }, !0), setTimeout(e, 0))
            }
    }

    function z(t, n) {
        n.changedTouches && (n = n.changedTouches[0]);
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > Vo && (_o.scrollX || _o.scrollY)) {
                e = yo.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var i = e[0][0].getScreenCTM();
                Vo = !(i.f || i.e), e.remove()
            }
            return Vo ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
        }
        var o = t.getBoundingClientRect();
        return [n.clientX - o.left - t.clientLeft, n.clientY - o.top - t.clientTop]
    }

    function F(t) {
        return t > 0 ? 1 : 0 > t ? -1 : 0
    }

    function O(t) {
        return t > 1 ? 0 : -1 > t ? Zo : Math.acos(t)
    }

    function P(t) {
        return t > 1 ? Zo / 2 : -1 > t ? -Zo / 2 : Math.asin(t)
    }

    function R(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2
    }

    function B(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2
    }

    function I(t) {
        return R(t) / B(t)
    }

    function W(t) {
        return (t = Math.sin(t / 2)) * t
    }

    function $() {}

    function X(t, n, e) {
        return new U(t, n, e)
    }

    function U(t, n, e) {
        this.h = t, this.s = n, this.l = e
    }

    function Y(t, n, e) {
        function r(t) {
            return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? o + (a - o) * t / 60 : 180 > t ? a : 240 > t ? o + (a - o) * (240 - t) / 60 : o
        }

        function i(t) {
            return Math.round(255 * r(t))
        }
        var o, a;
        return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, n = isNaN(n) ? 0 : 0 > n ? 0 : n > 1 ? 1 : n, e = 0 > e ? 0 : e > 1 ? 1 : e, a = .5 >= e ? e * (1 + n) : e + n - e * n, o = 2 * e - a, at(i(t + 120), i(t), i(t - 120))
    }

    function V(t, n, e) {
        return new Z(t, n, e)
    }

    function Z(t, n, e) {
        this.h = t, this.c = n, this.l = e
    }

    function J(t, n, e) {
        return isNaN(t) && (t = 0), isNaN(n) && (n = 0), G(e, Math.cos(t *= Ko) * n, Math.sin(t) * n)
    }

    function G(t, n, e) {
        return new K(t, n, e)
    }

    function K(t, n, e) {
        this.l = t, this.a = n, this.b = e
    }

    function Q(t, n, e) {
        var r = (t + 16) / 116,
            i = r + n / 500,
            o = r - e / 200;
        return i = nt(i) * la, r = nt(r) * ca, o = nt(o) * fa, at(rt(3.2404542 * i - 1.5371385 * r - .4985314 * o), rt(-.969266 * i + 1.8760108 * r + .041556 * o), rt(.0556434 * i - .2040259 * r + 1.0572252 * o))
    }

    function tt(t, n, e) {
        return t > 0 ? V(Math.atan2(e, n) * Qo, Math.sqrt(n * n + e * e), t) : V(0 / 0, 0 / 0, t)
    }

    function nt(t) {
        return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
    }

    function et(t) {
        return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
    }

    function rt(t) {
        return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
    }

    function it(t) {
        return at(t >> 16, t >> 8 & 255, 255 & t)
    }

    function ot(t) {
        return it(t) + ""
    }

    function at(t, n, e) {
        return new ut(t, n, e)
    }

    function ut(t, n, e) {
        this.r = t, this.g = n, this.b = e
    }

    function st(t) {
        return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
    }

    function lt(t, n, e) {
        var r, i, o, a = 0,
            u = 0,
            s = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (i = r[2].split(","), r[1]) {
            case "hsl":
                return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
            case "rgb":
                return n(pt(i[0]), pt(i[1]), pt(i[2]))
        }
        return (o = da.get(t)) ? n(o.r, o.g, o.b) : (null != t && "#" === t.charAt(0) && (4 === t.length ? (a = t.charAt(1), a += a, u = t.charAt(2), u += u, s = t.charAt(3), s += s) : 7 === t.length && (a = t.substring(1, 3), u = t.substring(3, 5), s = t.substring(5, 7)), a = parseInt(a, 16), u = parseInt(u, 16), s = parseInt(s, 16)), n(a, u, s))
    }

    function ct(t, n, e) {
        var r, i, o = Math.min(t /= 255, n /= 255, e /= 255),
            a = Math.max(t, n, e),
            u = a - o,
            s = (a + o) / 2;
        return u ? (i = .5 > s ? u / (a + o) : u / (2 - a - o), r = t == a ? (n - e) / u + (e > n ? 6 : 0) : n == a ? (e - t) / u + 2 : (t - n) / u + 4, r *= 60) : (r = 0 / 0, i = s > 0 && 1 > s ? 0 : r), X(r, i, s)
    }

    function ft(t, n, e) {
        t = ht(t), n = ht(n), e = ht(e);
        var r = et((.4124564 * t + .3575761 * n + .1804375 * e) / la),
            i = et((.2126729 * t + .7151522 * n + .072175 * e) / ca),
            o = et((.0193339 * t + .119192 * n + .9503041 * e) / fa);
        return G(116 * i - 16, 500 * (r - i), 200 * (i - o))
    }

    function ht(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function pt(t) {
        var n = parseFloat(t);
        return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n
    }

    function dt(t) {
        return "function" == typeof t ? t : function() {
            return t
        }
    }

    function gt(t) {
        return t
    }

    function mt(t) {
        return function(n, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = null), vt(n, e, t, r)
        }
    }

    function vt(t, n, e, r) {
        function i() {
            var t, n = s.status;
            if (!n && s.responseText || n >= 200 && 300 > n || 304 === n) {
                try {
                    t = e.call(o, s)
                } catch (r) {
                    return void a.error.call(o, r)
                }
                a.load.call(o, t)
            } else a.error.call(o, s)
        }
        var o = {},
            a = yo.dispatch("beforesend", "progress", "load", "error"),
            u = {},
            s = new XMLHttpRequest,
            l = null;
        return !_o.XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = i : s.onreadystatechange = function() {
            s.readyState > 3 && i()
        }, s.onprogress = function(t) {
            var n = yo.event;
            yo.event = t;
            try {
                a.progress.call(o, s)
            } finally {
                yo.event = n
            }
        }, o.header = function(t, n) {
            return t = (t + "").toLowerCase(), arguments.length < 2 ? u[t] : (null == n ? delete u[t] : u[t] = n + "", o)
        }, o.mimeType = function(t) {
            return arguments.length ? (n = null == t ? null : t + "", o) : n
        }, o.responseType = function(t) {
            return arguments.length ? (l = t, o) : l
        }, o.response = function(t) {
            return e = t, o
        }, ["get", "post"].forEach(function(t) {
            o[t] = function() {
                return o.send.apply(o, [t].concat(bo(arguments)))
            }
        }), o.send = function(e, r, i) {
            if (2 === arguments.length && "function" == typeof r && (i = r, r = null), s.open(e, t, !0), null == n || "accept" in u || (u.accept = n + ",*/*"), s.setRequestHeader)
                for (var c in u) s.setRequestHeader(c, u[c]);
            return null != n && s.overrideMimeType && s.overrideMimeType(n), null != l && (s.responseType = l), null != i && o.on("error", i).on("load", function(t) {
                i(null, t)
            }), a.beforesend.call(o, s), s.send(null == r ? null : r), o
        }, o.abort = function() {
            return s.abort(), o
        }, yo.rebind(o, a, "on"), null == r ? o : o.get(yt(r))
    }

    function yt(t) {
        return 1 === t.length ? function(n, e) {
            t(null == n ? e : null)
        } : t
    }

    function xt() {
        var t = Mt(),
            n = wt() - t;
        n > 24 ? (isFinite(n) && (clearTimeout(ya), ya = setTimeout(xt, n)), va = 0) : (va = 1, ba(xt))
    }

    function bt(t, n, e) {
        var r = arguments.length;
        2 > r && (n = 0), 3 > r && (e = Date.now()), xa.callback = t, xa.time = e + n
    }

    function Mt() {
        var t = Date.now();
        for (xa = ga; xa;) t >= xa.time && (xa.flush = xa.callback(t - xa.time)), xa = xa.next;
        return t
    }

    function wt() {
        for (var t, n = ga, e = 1 / 0; n;) n.flush ? n = t ? t.next = n.next : ga = n.next : (n.time < e && (e = n.time), n = (t = n).next);
        return ma = t, e
    }

    function _t(t, n) {
        var e = Math.pow(10, 3 * Math.abs(8 - n));
        return {
            scale: n > 8 ? function(t) {
                return t / e
            } : function(t) {
                return t * e
            },
            symbol: t
        }
    }

    function Et(t, n) {
        return n - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
    }

    function kt(t) {
        return t + ""
    }

    function St() {}

    function Tt(t, n, e) {
        var r = e.s = t + n,
            i = r - t,
            o = r - i;
        e.t = t - o + (n - i)
    }

    function Nt(t, n) {
        t && ja.hasOwnProperty(t.type) && ja[t.type](t, n)
    }

    function Ct(t, n, e) {
        var r, i = -1,
            o = t.length - e;
        for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }

    function At(t, n) {
        var e = -1,
            r = t.length;
        for (n.polygonStart(); ++e < r;) Ct(t[e], n, 1);
        n.polygonEnd()
    }

    function Dt() {
        function t(t, n) {
            t *= Ko, n = n * Ko / 2 + Zo / 4;
            var e = t - r,
                a = Math.cos(n),
                u = Math.sin(n),
                s = o * u,
                l = i * a + s * Math.cos(e),
                c = s * Math.sin(e);
            qa.add(Math.atan2(c, l)), r = t, i = a, o = u
        }
        var n, e, r, i, o;
        Ha.point = function(a, u) {
            Ha.point = t, r = (n = a) * Ko, i = Math.cos(u = (e = u) * Ko / 2 + Zo / 4), o = Math.sin(u)
        }, Ha.lineEnd = function() {
            t(n, e)
        }
    }

    function jt(t) {
        var n = t[0],
            e = t[1],
            r = Math.cos(e);
        return [r * Math.cos(n), r * Math.sin(n), Math.sin(e)]
    }

    function Lt(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function qt(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function Ht(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function zt(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }

    function Ft(t) {
        var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function Ot(t) {
        return [Math.atan2(t[1], t[0]), P(t[2])]
    }

    function Pt(t, n) {
        return Math.abs(t[0] - n[0]) < Jo && Math.abs(t[1] - n[1]) < Jo
    }

    function Rt(t, n) {
        t *= Ko;
        var e = Math.cos(n *= Ko);
        Bt(e * Math.cos(t), e * Math.sin(t), Math.sin(n))
    }

    function Bt(t, n, e) {
        ++za, Oa += (t - Oa) / za, Pa += (n - Pa) / za, Ra += (e - Ra) / za
    }

    function It() {
        function t(t, i) {
            t *= Ko;
            var o = Math.cos(i *= Ko),
                a = o * Math.cos(t),
                u = o * Math.sin(t),
                s = Math.sin(i),
                l = Math.atan2(Math.sqrt((l = e * s - r * u) * l + (l = r * a - n * s) * l + (l = n * u - e * a) * l), n * a + e * u + r * s);
            Fa += l, Ba += l * (n + (n = a)), Ia += l * (e + (e = u)), Wa += l * (r + (r = s)), Bt(n, e, r)
        }
        var n, e, r;
        Ya.point = function(i, o) {
            i *= Ko;
            var a = Math.cos(o *= Ko);
            n = a * Math.cos(i), e = a * Math.sin(i), r = Math.sin(o), Ya.point = t, Bt(n, e, r)
        }
    }

    function Wt() {
        Ya.point = Rt
    }

    function $t() {
        function t(t, n) {
            t *= Ko;
            var e = Math.cos(n *= Ko),
                a = e * Math.cos(t),
                u = e * Math.sin(t),
                s = Math.sin(n),
                l = i * s - o * u,
                c = o * a - r * s,
                f = r * u - i * a,
                h = Math.sqrt(l * l + c * c + f * f),
                p = r * a + i * u + o * s,
                d = h && -O(p) / h,
                g = Math.atan2(h, p);
            $a += d * l, Xa += d * c, Ua += d * f, Fa += g, Ba += g * (r + (r = a)), Ia += g * (i + (i = u)), Wa += g * (o + (o = s)), Bt(r, i, o)
        }
        var n, e, r, i, o;
        Ya.point = function(a, u) {
            n = a, e = u, Ya.point = t, a *= Ko;
            var s = Math.cos(u *= Ko);
            r = s * Math.cos(a), i = s * Math.sin(a), o = Math.sin(u), Bt(r, i, o)
        }, Ya.lineEnd = function() {
            t(n, e), Ya.lineEnd = Wt, Ya.point = Rt
        }
    }

    function Xt() {
        return !0
    }

    function Ut(t, n, e, r, i) {
        var o = [],
            a = [];
        if (t.forEach(function(t) {
                if (!((n = t.length - 1) <= 0)) {
                    var n, e = t[0],
                        r = t[n];
                    if (Pt(e, r)) {
                        i.lineStart();
                        for (var u = 0; n > u; ++u) i.point((e = t[u])[0], e[1]);
                        return void i.lineEnd()
                    }
                    var s = {
                            point: e,
                            points: t,
                            other: null,
                            visited: !1,
                            entry: !0,
                            subject: !0
                        },
                        l = {
                            point: e,
                            points: [e],
                            other: s,
                            visited: !1,
                            entry: !1,
                            subject: !1
                        };
                    s.other = l, o.push(s), a.push(l), s = {
                        point: r,
                        points: [r],
                        other: null,
                        visited: !1,
                        entry: !1,
                        subject: !0
                    }, l = {
                        point: r,
                        points: [r],
                        other: s,
                        visited: !1,
                        entry: !0,
                        subject: !1
                    }, s.other = l, o.push(s), a.push(l)
                }
            }), a.sort(n), Yt(o), Yt(a), o.length) {
            if (e)
                for (var u = 1, s = !e(a[0].point), l = a.length; l > u; ++u) a[u].entry = s = !s;
            for (var c, f, h, p = o[0];;) {
                for (c = p; c.visited;)
                    if ((c = c.next) === p) return;
                f = c.points, i.lineStart();
                do {
                    if (c.visited = c.other.visited = !0, c.entry) {
                        if (c.subject)
                            for (var u = 0; u < f.length; u++) i.point((h = f[u])[0], h[1]);
                        else r(c.point, c.next.point, 1, i);
                        c = c.next
                    } else {
                        if (c.subject) {
                            f = c.prev.points;
                            for (var u = f.length; --u >= 0;) i.point((h = f[u])[0], h[1])
                        } else r(c.point, c.prev.point, -1, i);
                        c = c.prev
                    }
                    c = c.other, f = c.points
                } while (!c.visited);
                i.lineEnd()
            }
        }
    }

    function Yt(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; ++r < n;) i.next = e = t[r], e.prev = i, i = e;
            i.next = e = t[0], e.prev = i
        }
    }

    function Vt(t, n, e, r) {
        return function(i) {
            function o(n, e) {
                t(n, e) && i.point(n, e)
            }

            function a(t, n) {
                g.point(t, n)
            }

            function u() {
                m.point = a, g.lineStart()
            }

            function s() {
                m.point = o, g.lineEnd()
            }

            function l(t, n) {
                y.point(t, n), d.push([t, n])
            }

            function c() {
                y.lineStart(), d = []
            }

            function f() {
                l(d[0][0], d[0][1]), y.lineEnd();
                var t, n = y.clean(),
                    e = v.buffer(),
                    r = e.length;
                if (d.pop(), p.push(d), d = null, r) {
                    if (1 & n) {
                        t = e[0];
                        var o, r = t.length - 1,
                            a = -1;
                        for (i.lineStart(); ++a < r;) i.point((o = t[a])[0], o[1]);
                        return void i.lineEnd()
                    }
                    r > 1 && 2 & n && e.push(e.pop().concat(e.shift())), h.push(e.filter(Zt))
                }
            }
            var h, p, d, g = n(i),
                m = {
                    point: o,
                    lineStart: u,
                    lineEnd: s,
                    polygonStart: function() {
                        m.point = l, m.lineStart = c, m.lineEnd = f, h = [], p = [], i.polygonStart()
                    },
                    polygonEnd: function() {
                        m.point = o, m.lineStart = u, m.lineEnd = s, h = yo.merge(h), h.length ? Ut(h, Gt, null, e, i) : r(p) && (i.lineStart(), e(null, null, 1, i), i.lineEnd()), i.polygonEnd(), h = p = null
                    },
                    sphere: function() {
                        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                    }
                },
                v = Jt(),
                y = n(v);
            return m
        }
    }

    function Zt(t) {
        return t.length > 1
    }

    function Jt() {
        var t, n = [];
        return {
            lineStart: function() {
                n.push(t = [])
            },
            point: function(n, e) {
                t.push([n, e])
            },
            lineEnd: s,
            buffer: function() {
                var e = n;
                return n = [], t = null, e
            },
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            }
        }
    }

    function Gt(t, n) {
        return ((t = t.point)[0] < 0 ? t[1] - Zo / 2 - Jo : Zo / 2 - t[1]) - ((n = n.point)[0] < 0 ? n[1] - Zo / 2 - Jo : Zo / 2 - n[1])
    }

    function Kt(t, n) {
        var e = t[0],
            r = t[1],
            i = [Math.sin(e), -Math.cos(e), 0],
            o = 0,
            a = !1,
            u = !1,
            s = 0;
        qa.reset();
        for (var l = 0, c = n.length; c > l; ++l) {
            var f = n[l],
                h = f.length;
            if (h) {
                for (var p = f[0], d = p[0], g = p[1] / 2 + Zo / 4, m = Math.sin(g), v = Math.cos(g), y = 1;;) {
                    y === h && (y = 0), t = f[y];
                    var x = t[0],
                        b = t[1] / 2 + Zo / 4,
                        M = Math.sin(b),
                        w = Math.cos(b),
                        _ = x - d,
                        E = Math.abs(_) > Zo,
                        k = m * M;
                    if (qa.add(Math.atan2(k * Math.sin(_), v * w + k * Math.cos(_))), Math.abs(b) < Jo && (u = !0), o += E ? _ + (_ >= 0 ? 2 : -2) * Zo : _, E ^ d >= e ^ x >= e) {
                        var S = qt(jt(p), jt(t));
                        Ft(S);
                        var T = qt(i, S);
                        Ft(T);
                        var N = (E ^ _ >= 0 ? -1 : 1) * P(T[2]);
                        r > N && (s += E ^ _ >= 0 ? 1 : -1)
                    }
                    if (!y++) break;
                    d = x, m = M, v = w, p = t
                }
                Math.abs(o) > Jo && (a = !0)
            }
        }
        return (!u && !a && 0 > qa || -Jo > o) ^ 1 & s
    }

    function Qt(t) {
        var n, e = 0 / 0,
            r = 0 / 0,
            i = 0 / 0;
        return {
            lineStart: function() {
                t.lineStart(), n = 1
            },
            point: function(o, a) {
                var u = o > 0 ? Zo : -Zo,
                    s = Math.abs(o - e);
                Math.abs(s - Zo) < Jo ? (t.point(e, r = (r + a) / 2 > 0 ? Zo / 2 : -Zo / 2), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && s >= Zo && (Math.abs(e - i) < Jo && (e -= i * Jo), Math.abs(o - u) < Jo && (o -= u * Jo), r = tn(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u
            },
            lineEnd: function() {
                t.lineEnd(), e = r = 0 / 0
            },
            clean: function() {
                return 2 - n
            }
        }
    }

    function tn(t, n, e, r) {
        var i, o, a = Math.sin(t - e);
        return Math.abs(a) > Jo ? Math.atan((Math.sin(n) * (o = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) / (i * o * a)) : (n + r) / 2
    }

    function nn(t, n, e, r) {
        var i;
        if (null == t) i = e * Zo / 2, r.point(-Zo, i), r.point(0, i), r.point(Zo, i), r.point(Zo, 0), r.point(Zo, -i), r.point(0, -i), r.point(-Zo, -i), r.point(-Zo, 0), r.point(-Zo, i);
        else if (Math.abs(t[0] - n[0]) > Jo) {
            var o = (t[0] < n[0] ? 1 : -1) * Zo;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
        } else r.point(n[0], n[1])
    }

    function en(t) {
        return Kt(Za, t)
    }

    function rn(t) {
        function n(t, n) {
            return Math.cos(t) * Math.cos(n) > a
        }

        function e(t) {
            var e, o, a, s, c;
            return {
                lineStart: function() {
                    s = a = !1, c = 1
                },
                point: function(f, h) {
                    var p, d = [f, h],
                        g = n(f, h),
                        m = u ? g ? 0 : i(f, h) : g ? i(f + (0 > f ? Zo : -Zo), h) : 0;
                    if (!e && (s = a = g) && t.lineStart(), g !== a && (p = r(e, d), (Pt(e, p) || Pt(d, p)) && (d[0] += Jo, d[1] += Jo, g = n(d[0], d[1]))), g !== a) c = 0, g ? (t.lineStart(), p = r(d, e), t.point(p[0], p[1])) : (p = r(e, d), t.point(p[0], p[1]), t.lineEnd()), e = p;
                    else if (l && e && u ^ g) {
                        var v;
                        m & o || !(v = r(d, e, !0)) || (c = 0, u ? (t.lineStart(), t.point(v[0][0], v[0][1]), t.point(v[1][0], v[1][1]), t.lineEnd()) : (t.point(v[1][0], v[1][1]), t.lineEnd(), t.lineStart(), t.point(v[0][0], v[0][1])))
                    }!g || e && Pt(e, d) || t.point(d[0], d[1]), e = d, a = g, o = m
                },
                lineEnd: function() {
                    a && t.lineEnd(), e = null
                },
                clean: function() {
                    return c | (s && a) << 1
                }
            }
        }

        function r(t, n, e) {
            var r = jt(t),
                i = jt(n),
                o = [1, 0, 0],
                u = qt(r, i),
                s = Lt(u, u),
                l = u[0],
                c = s - l * l;
            if (!c) return !e && t;
            var f = a * s / c,
                h = -a * l / c,
                p = qt(o, u),
                d = zt(o, f),
                g = zt(u, h);
            Ht(d, g);
            var m = p,
                v = Lt(d, m),
                y = Lt(m, m),
                x = v * v - y * (Lt(d, d) - 1);
            if (!(0 > x)) {
                var b = Math.sqrt(x),
                    M = zt(m, (-v - b) / y);
                if (Ht(M, d), M = Ot(M), !e) return M;
                var w, _ = t[0],
                    E = n[0],
                    k = t[1],
                    S = n[1];
                _ > E && (w = _, _ = E, E = w);
                var T = E - _,
                    N = Math.abs(T - Zo) < Jo,
                    C = N || Jo > T;
                if (!N && k > S && (w = k, k = S, S = w), C ? N ? k + S > 0 ^ M[1] < (Math.abs(M[0] - _) < Jo ? k : S) : k <= M[1] && M[1] <= S : T > Zo ^ (_ <= M[0] && M[0] <= E)) {
                    var A = zt(m, (-v + b) / y);
                    return Ht(A, d), [M, Ot(A)]
                }
            }
        }

        function i(n, e) {
            var r = u ? t : Zo - t,
                i = 0;
            return -r > n ? i |= 1 : n > r && (i |= 2), -r > e ? i |= 4 : e > r && (i |= 8), i
        }

        function o(t) {
            return Kt(s, t)
        }
        var a = Math.cos(t),
            u = a > 0,
            s = [t, 0],
            l = Math.abs(a) > Jo,
            c = An(t, 6 * Ko);
        return Vt(n, e, c, o)
    }

    function on(t, n, e, r) {
        function i(r, i) {
            return Math.abs(r[0] - t) < Jo ? i > 0 ? 0 : 3 : Math.abs(r[0] - e) < Jo ? i > 0 ? 2 : 1 : Math.abs(r[1] - n) < Jo ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function o(t, n) {
            return a(t.point, n.point)
        }

        function a(t, n) {
            var e = i(t, 1),
                r = i(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }

        function u(i, o) {
            var a = o[0] - i[0],
                u = o[1] - i[1],
                s = [0, 1];
            return Math.abs(a) < Jo && Math.abs(u) < Jo ? t <= i[0] && i[0] <= e && n <= i[1] && i[1] <= r : an(t - i[0], a, s) && an(i[0] - e, -a, s) && an(n - i[1], u, s) && an(i[1] - r, -u, s) ? (s[1] < 1 && (o[0] = i[0] + s[1] * a, o[1] = i[1] + s[1] * u), s[0] > 0 && (i[0] += s[0] * a, i[1] += s[0] * u), !0) : !1
        }
        return function(s) {
            function l(o) {
                var a = i(o, -1),
                    u = c([0 === a || 3 === a ? t : e, a > 1 ? r : n]);
                return u
            }

            function c(t) {
                for (var n = 0, e = x.length, r = t[1], i = 0; e > i; ++i)
                    for (var o, a = 1, u = x[i], s = u.length, l = u[0]; s > a; ++a) o = u[a], l[1] <= r ? o[1] > r && f(l, o, t) > 0 && ++n : o[1] <= r && f(l, o, t) < 0 && --n, l = o;
                return 0 !== n
            }

            function f(t, n, e) {
                return (n[0] - t[0]) * (e[1] - t[1]) - (e[0] - t[0]) * (n[1] - t[1])
            }

            function h(o, u, s, l) {
                var c = 0,
                    f = 0;
                if (null == o || (c = i(o, s)) !== (f = i(u, s)) || a(o, u) < 0 ^ s > 0) {
                    do l.point(0 === c || 3 === c ? t : e, c > 1 ? r : n); while ((c = (c + s + 4) % 4) !== f)
                } else l.point(u[0], u[1])
            }

            function p(i, o) {
                return i >= t && e >= i && o >= n && r >= o
            }

            function d(t, n) {
                p(t, n) && s.point(t, n)
            }

            function g() {
                A.point = v, x && x.push(b = []), T = !0, S = !1, E = k = 0 / 0
            }

            function m() {
                y && (v(M, w), _ && S && C.rejoin(), y.push(C.buffer())), A.point = d, S && s.lineEnd()
            }

            function v(t, n) {
                t = Math.max(-Ja, Math.min(Ja, t)), n = Math.max(-Ja, Math.min(Ja, n));
                var e = p(t, n);
                if (x && b.push([t, n]), T) M = t, w = n, _ = e, T = !1, e && (s.lineStart(), s.point(t, n));
                else if (e && S) s.point(t, n);
                else {
                    var r = [E, k],
                        i = [t, n];
                    u(r, i) ? (S || (s.lineStart(), s.point(r[0], r[1])), s.point(i[0], i[1]), e || s.lineEnd()) : e && (s.lineStart(), s.point(t, n))
                }
                E = t, k = n, S = e
            }
            var y, x, b, M, w, _, E, k, S, T, N = s,
                C = Jt(),
                A = {
                    point: d,
                    lineStart: g,
                    lineEnd: m,
                    polygonStart: function() {
                        s = C, y = [], x = []
                    },
                    polygonEnd: function() {
                        s = N, (y = yo.merge(y)).length ? (s.polygonStart(), Ut(y, o, l, h, s), s.polygonEnd()) : c([t, n]) && (s.polygonStart(), s.lineStart(), h(null, null, 1, s), s.lineEnd(), s.polygonEnd()), y = x = b = null
                    }
                };
            return A
        }
    }

    function an(t, n, e) {
        if (Math.abs(n) < Jo) return 0 >= t;
        var r = t / n;
        if (n > 0) {
            if (r > e[1]) return !1;
            r > e[0] && (e[0] = r)
        } else {
            if (r < e[0]) return !1;
            r < e[1] && (e[1] = r)
        }
        return !0
    }

    function un(t, n) {
        function e(e, r) {
            return e = t(e, r), n(e[0], e[1])
        }
        return t.invert && n.invert && (e.invert = function(e, r) {
            return e = n.invert(e, r), e && t.invert(e[0], e[1])
        }), e
    }

    function sn(t) {
        var n = 0,
            e = Zo / 3,
            r = _n(t),
            i = r(n, e);
        return i.parallels = function(t) {
            return arguments.length ? r(n = t[0] * Zo / 180, e = t[1] * Zo / 180) : [n / Zo * 180, e / Zo * 180]
        }, i
    }

    function ln(t, n) {
        function e(t, n) {
            var e = Math.sqrt(o - 2 * i * Math.sin(n)) / i;
            return [e * Math.sin(t *= i), a - e * Math.cos(t)]
        }
        var r = Math.sin(t),
            i = (r + Math.sin(n)) / 2,
            o = 1 + r * (2 * i - r),
            a = Math.sqrt(o) / i;
        return e.invert = function(t, n) {
            var e = a - n;
            return [Math.atan2(t, e) / i, P((o - (t * t + e * e) * i * i) / (2 * i))]
        }, e
    }

    function cn() {
        function t(t, n) {
            Ka += i * t - r * n, r = t, i = n
        }
        var n, e, r, i;
        ru.point = function(o, a) {
            ru.point = t, n = r = o, e = i = a
        }, ru.lineEnd = function() {
            t(n, e)
        }
    }

    function fn(t, n) {
        Qa > t && (Qa = t), t > nu && (nu = t), tu > n && (tu = n), n > eu && (eu = n)
    }

    function hn() {
        function t(t, n) {
            a.push("M", t, ",", n, o)
        }

        function n(t, n) {
            a.push("M", t, ",", n), u.point = e
        }

        function e(t, n) {
            a.push("L", t, ",", n)
        }

        function r() {
            u.point = t
        }

        function i() {
            a.push("Z")
        }
        var o = pn(4.5),
            a = [],
            u = {
                point: t,
                lineStart: function() {
                    u.point = n
                },
                lineEnd: r,
                polygonStart: function() {
                    u.lineEnd = i
                },
                polygonEnd: function() {
                    u.lineEnd = r, u.point = t
                },
                pointRadius: function(t) {
                    return o = pn(t), u
                },
                result: function() {
                    if (a.length) {
                        var t = a.join("");
                        return a = [], t
                    }
                }
            };
        return u
    }

    function pn(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function dn(t, n) {
        Oa += t, Pa += n, ++Ra
    }

    function gn() {
        function t(t, r) {
            var i = t - n,
                o = r - e,
                a = Math.sqrt(i * i + o * o);
            Ba += a * (n + t) / 2, Ia += a * (e + r) / 2, Wa += a, dn(n = t, e = r)
        }
        var n, e;
        ou.point = function(r, i) {
            ou.point = t, dn(n = r, e = i)
        }
    }

    function mn() {
        ou.point = dn
    }

    function vn() {
        function t(t, n) {
            var e = t - r,
                o = n - i,
                a = Math.sqrt(e * e + o * o);
            Ba += a * (r + t) / 2, Ia += a * (i + n) / 2, Wa += a, a = i * t - r * n, $a += a * (r + t), Xa += a * (i + n), Ua += 3 * a, dn(r = t, i = n)
        }
        var n, e, r, i;
        ou.point = function(o, a) {
            ou.point = t, dn(n = r = o, e = i = a)
        }, ou.lineEnd = function() {
            t(n, e)
        }
    }

    function yn(t) {
        function n(n, e) {
            t.moveTo(n, e), t.arc(n, e, a, 0, 2 * Zo)
        }

        function e(n, e) {
            t.moveTo(n, e), u.point = r
        }

        function r(n, e) {
            t.lineTo(n, e)
        }

        function i() {
            u.point = n
        }

        function o() {
            t.closePath()
        }
        var a = 4.5,
            u = {
                point: n,
                lineStart: function() {
                    u.point = e
                },
                lineEnd: i,
                polygonStart: function() {
                    u.lineEnd = o
                },
                polygonEnd: function() {
                    u.lineEnd = i, u.point = n
                },
                pointRadius: function(t) {
                    return a = t, u
                },
                result: s
            };
        return u
    }

    function xn(t) {
        function n(n) {
            function r(e, r) {
                e = t(e, r), n.point(e[0], e[1])
            }

            function i() {
                x = 0 / 0, E.point = a, n.lineStart()
            }

            function a(r, i) {
                var a = jt([r, i]),
                    u = t(r, i);
                e(x, b, y, M, w, _, x = u[0], b = u[1], y = r, M = a[0], w = a[1], _ = a[2], o, n), n.point(x, b)
            }

            function u() {
                E.point = r, n.lineEnd()
            }

            function s() {
                i(), E.point = l, E.lineEnd = c
            }

            function l(t, n) {
                a(f = t, h = n), p = x, d = b, g = M, m = w, v = _, E.point = a
            }

            function c() {
                e(x, b, y, M, w, _, p, d, f, g, m, v, o, n), E.lineEnd = u, u()
            }
            var f, h, p, d, g, m, v, y, x, b, M, w, _, E = {
                point: r,
                lineStart: i,
                lineEnd: u,
                polygonStart: function() {
                    n.polygonStart(), E.lineStart = s
                },
                polygonEnd: function() {
                    n.polygonEnd(), E.lineStart = i
                }
            };
            return E
        }

        function e(n, o, a, u, s, l, c, f, h, p, d, g, m, v) {
            var y = c - n,
                x = f - o,
                b = y * y + x * x;
            if (b > 4 * r && m--) {
                var M = u + p,
                    w = s + d,
                    _ = l + g,
                    E = Math.sqrt(M * M + w * w + _ * _),
                    k = Math.asin(_ /= E),
                    S = Math.abs(Math.abs(_) - 1) < Jo ? (a + h) / 2 : Math.atan2(w, M),
                    T = t(S, k),
                    N = T[0],
                    C = T[1],
                    A = N - n,
                    D = C - o,
                    j = x * A - y * D;
                (j * j / b > r || Math.abs((y * A + x * D) / b - .5) > .3 || i > u * p + s * d + l * g) && (e(n, o, a, u, s, l, N, C, S, M /= E, w /= E, _, m, v), v.point(N, C), e(N, C, S, M, w, _, c, f, h, p, d, g, m, v))
            }
        }
        var r = .5,
            i = Math.cos(30 * Ko),
            o = 16;
        return n.precision = function(t) {
            return arguments.length ? (o = (r = t * t) > 0 && 16, n) : Math.sqrt(r)
        }, n
    }

    function bn(t) {
        this.stream = t
    }

    function Mn(t) {
        var n = xn(function(n, e) {
            return t([n * Qo, e * Qo])
        });
        return function(t) {
            var e = new bn(t = n(t));
            return e.point = function(n, e) {
                t.point(n * Ko, e * Ko)
            }, e
        }
    }

    function wn(t) {
        return _n(function() {
            return t
        })()
    }

    function _n(t) {
        function n(t) {
            return t = u(t[0] * Ko, t[1] * Ko), [t[0] * h + s, l - t[1] * h]
        }

        function e(t) {
            return t = u.invert((t[0] - s) / h, (l - t[1]) / h), t && [t[0] * Qo, t[1] * Qo]
        }

        function r() {
            u = un(a = Sn(v, y, x), o);
            var t = o(g, m);
            return s = p - t[0] * h, l = d + t[1] * h, i()
        }

        function i() {
            return c && (c.valid = !1, c = null), n
        }
        var o, a, u, s, l, c, f = xn(function(t, n) {
                return t = o(t, n), [t[0] * h + s, l - t[1] * h]
            }),
            h = 150,
            p = 480,
            d = 250,
            g = 0,
            m = 0,
            v = 0,
            y = 0,
            x = 0,
            b = Va,
            M = gt,
            w = null,
            _ = null;
        return n.stream = function(t) {
                return c && (c.valid = !1), c = En(a, b(f(M(t)))), c.valid = !0, c
            }, n.clipAngle = function(t) {
                return arguments.length ? (b = null == t ? (w = t, Va) : rn((w = +t) * Ko), i()) : w
            }, n.clipExtent = function(t) {
                return arguments.length ? (_ = t, M = t ? on(t[0][0], t[0][1], t[1][0], t[1][1]) : gt, i()) : _
            }, n.scale = function(t) {
                return arguments.length ? (h = +t, r()) : h
            }, n.translate = function(t) {
                return arguments.length ? (p = +t[0], d = +t[1], r()) : [p, d]
            }, n.center = function(t) {
                return arguments.length ? (g = t[0] % 360 * Ko, m = t[1] % 360 * Ko, r()) : [g * Qo, m * Qo]
            }, n.rotate = function(t) {
                return arguments.length ? (v = t[0] % 360 * Ko, y = t[1] % 360 * Ko, x = t.length > 2 ? t[2] % 360 * Ko : 0, r()) : [v * Qo, y * Qo, x * Qo]
            }, yo.rebind(n, f, "precision"),
            function() {
                return o = t.apply(this, arguments), n.invert = o.invert && e, r()
            }
    }

    function En(t, n) {
        var e = new bn(n);
        return e.point = function(e, r) {
            r = t(e * Ko, r * Ko), e = r[0], n.point(e > Zo ? e - 2 * Zo : -Zo > e ? e + 2 * Zo : e, r[1])
        }, e
    }

    function kn(t, n) {
        return [t, n]
    }

    function Sn(t, n, e) {
        return t ? n || e ? un(Nn(t), Cn(n, e)) : Nn(t) : n || e ? Cn(n, e) : kn
    }

    function Tn(t) {
        return function(n, e) {
            return n += t, [n > Zo ? n - 2 * Zo : -Zo > n ? n + 2 * Zo : n, e]
        }
    }

    function Nn(t) {
        var n = Tn(t);
        return n.invert = Tn(-t), n
    }

    function Cn(t, n) {
        function e(t, n) {
            var e = Math.cos(n),
                u = Math.cos(t) * e,
                s = Math.sin(t) * e,
                l = Math.sin(n),
                c = l * r + u * i;
            return [Math.atan2(s * o - c * a, u * r - l * i), P(c * o + s * a)]
        }
        var r = Math.cos(t),
            i = Math.sin(t),
            o = Math.cos(n),
            a = Math.sin(n);
        return e.invert = function(t, n) {
            var e = Math.cos(n),
                u = Math.cos(t) * e,
                s = Math.sin(t) * e,
                l = Math.sin(n),
                c = l * o - s * a;
            return [Math.atan2(s * o + l * a, u * r + c * i), P(c * r - u * i)]
        }, e
    }

    function An(t, n) {
        var e = Math.cos(t),
            r = Math.sin(t);
        return function(i, o, a, u) {
            var s = a * n;
            null != i ? (i = Dn(e, i), o = Dn(e, o), (a > 0 ? o > i : i > o) && (i += 2 * a * Zo)) : (i = t + 2 * a * Zo, o = t - .5 * s);
            for (var l, c = i; a > 0 ? c > o : o > c; c -= s) u.point((l = Ot([e, -r * Math.cos(c), -r * Math.sin(c)]))[0], l[1])
        }
    }

    function Dn(t, n) {
        var e = jt(n);
        e[0] -= t, Ft(e);
        var r = O(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Jo) % (2 * Math.PI)
    }

    function jn(t, n, e) {
        var r = yo.range(t, n - Jo, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [t, n]
            })
        }
    }

    function Ln(t, n, e) {
        var r = yo.range(t, n - Jo, e).concat(n);
        return function(t) {
            return r.map(function(n) {
                return [n, t]
            })
        }
    }

    function qn(t) {
        return t.source
    }

    function Hn(t) {
        return t.target
    }

    function zn(t, n, e, r) {
        var i = Math.cos(n),
            o = Math.sin(n),
            a = Math.cos(r),
            u = Math.sin(r),
            s = i * Math.cos(t),
            l = i * Math.sin(t),
            c = a * Math.cos(e),
            f = a * Math.sin(e),
            h = 2 * Math.asin(Math.sqrt(W(r - n) + i * a * W(e - t))),
            p = 1 / Math.sin(h),
            d = h ? function(t) {
                var n = Math.sin(t *= h) * p,
                    e = Math.sin(h - t) * p,
                    r = e * s + n * c,
                    i = e * l + n * f,
                    a = e * o + n * u;
                return [Math.atan2(i, r) * Qo, Math.atan2(a, Math.sqrt(r * r + i * i)) * Qo]
            } : function() {
                return [t * Qo, n * Qo]
            };
        return d.distance = h, d
    }

    function Fn() {
        function t(t, i) {
            var o = Math.sin(i *= Ko),
                a = Math.cos(i),
                u = Math.abs((t *= Ko) - n),
                s = Math.cos(u);
            au += Math.atan2(Math.sqrt((u = a * Math.sin(u)) * u + (u = r * o - e * a * s) * u), e * o + r * a * s), n = t, e = o, r = a
        }
        var n, e, r;
        uu.point = function(i, o) {
            n = i * Ko, e = Math.sin(o *= Ko), r = Math.cos(o), uu.point = t
        }, uu.lineEnd = function() {
            uu.point = uu.lineEnd = s
        }
    }

    function On(t, n) {
        function e(n, e) {
            var r = Math.cos(n),
                i = Math.cos(e),
                o = t(r * i);
            return [o * i * Math.sin(n), o * Math.sin(e)]
        }
        return e.invert = function(t, e) {
            var r = Math.sqrt(t * t + e * e),
                i = n(r),
                o = Math.sin(i),
                a = Math.cos(i);
            return [Math.atan2(t * o, r * a), Math.asin(r && e * o / r)]
        }, e
    }

    function Pn(t, n) {
        function e(t, n) {
            var e = Math.abs(Math.abs(n) - Zo / 2) < Jo ? 0 : a / Math.pow(i(n), o);
            return [e * Math.sin(o * t), a - e * Math.cos(o * t)]
        }
        var r = Math.cos(t),
            i = function(t) {
                return Math.tan(Zo / 4 + t / 2)
            },
            o = t === n ? Math.sin(t) : Math.log(r / Math.cos(n)) / Math.log(i(n) / i(t)),
            a = r * Math.pow(i(t), o) / o;
        return o ? (e.invert = function(t, n) {
            var e = a - n,
                r = F(o) * Math.sqrt(t * t + e * e);
            return [Math.atan2(t, e) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - Zo / 2]
        }, e) : Bn
    }

    function Rn(t, n) {
        function e(t, n) {
            var e = o - n;
            return [e * Math.sin(i * t), o - e * Math.cos(i * t)]
        }
        var r = Math.cos(t),
            i = t === n ? Math.sin(t) : (r - Math.cos(n)) / (n - t),
            o = r / i + t;
        return Math.abs(i) < Jo ? kn : (e.invert = function(t, n) {
            var e = o - n;
            return [Math.atan2(t, e) / i, o - F(i) * Math.sqrt(t * t + e * e)]
        }, e)
    }

    function Bn(t, n) {
        return [t, Math.log(Math.tan(Zo / 4 + n / 2))]
    }

    function In(t) {
        var n, e = wn(t),
            r = e.scale,
            i = e.translate,
            o = e.clipExtent;
        return e.scale = function() {
            var t = r.apply(e, arguments);
            return t === e ? n ? e.clipExtent(null) : e : t
        }, e.translate = function() {
            var t = i.apply(e, arguments);
            return t === e ? n ? e.clipExtent(null) : e : t
        }, e.clipExtent = function(t) {
            var a = o.apply(e, arguments);
            if (a === e) {
                if (n = null == t) {
                    var u = Zo * r(),
                        s = i();
                    o([
                        [s[0] - u, s[1] - u],
                        [s[0] + u, s[1] + u]
                    ])
                }
            } else n && (a = null);
            return a
        }, e.clipExtent(null)
    }

    function Wn(t, n) {
        var e = Math.cos(n) * Math.sin(t);
        return [Math.log((1 + e) / (1 - e)) / 2, Math.atan2(Math.tan(n), Math.cos(t))]
    }

    function $n(t) {
        function n(n) {
            function a() {
                l.push("M", o(t(c), u))
            }
            for (var s, l = [], c = [], f = -1, h = n.length, p = dt(e), d = dt(r); ++f < h;) i.call(this, s = n[f], f) ? c.push([+p.call(this, s, f), +d.call(this, s, f)]) : c.length && (a(), c = []);
            return c.length && a(), l.length ? l.join("") : null
        }
        var e = Xn,
            r = Un,
            i = Xt,
            o = Yn,
            a = o.key,
            u = .7;
        return n.x = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.y = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.defined = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.interpolate = function(t) {
            return arguments.length ? (a = "function" == typeof t ? o = t : (o = pu.get(t) || Yn).key, n) : a
        }, n.tension = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    }

    function Xn(t) {
        return t[0]
    }

    function Un(t) {
        return t[1]
    }

    function Yn(t) {
        return t.join("L")
    }

    function Vn(t) {
        return Yn(t) + "Z"
    }

    function Zn(t) {
        for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r[0] + (r = t[n])[0]) / 2, "V", r[1]);
        return e > 1 && i.push("H", r[0]), i.join("")
    }

    function Jn(t) {
        for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("V", (r = t[n])[1], "H", r[0]);
        return i.join("")
    }

    function Gn(t) {
        for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; ++n < e;) i.push("H", (r = t[n])[0], "V", r[1]);
        return i.join("")
    }

    function Kn(t, n) {
        return t.length < 4 ? Yn(t) : t[1] + ne(t.slice(1, t.length - 1), ee(t, n))
    }

    function Qn(t, n) {
        return t.length < 3 ? Yn(t) : t[0] + ne((t.push(t[0]), t), ee([t[t.length - 2]].concat(t, [t[1]]), n))
    }

    function te(t, n) {
        return t.length < 3 ? Yn(t) : t[0] + ne(t, ee(t, n))
    }

    function ne(t, n) {
        if (n.length < 1 || t.length != n.length && t.length != n.length + 2) return Yn(t);
        var e = t.length != n.length,
            r = "",
            i = t[0],
            o = t[1],
            a = n[0],
            u = a,
            s = 1;
        if (e && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], s = 2), n.length > 1) {
            u = n[1], o = t[s], s++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1];
            for (var l = 2; l < n.length; l++, s++) o = t[s], u = n[l], r += "S" + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1]
        }
        if (e) {
            var c = t[s];
            r += "Q" + (o[0] + 2 * u[0] / 3) + "," + (o[1] + 2 * u[1] / 3) + "," + c[0] + "," + c[1]
        }
        return r
    }

    function ee(t, n) {
        for (var e, r = [], i = (1 - n) / 2, o = t[0], a = t[1], u = 1, s = t.length; ++u < s;) e = o, o = a, a = t[u], r.push([i * (a[0] - e[0]), i * (a[1] - e[1])]);
        return r
    }

    function re(t) {
        if (t.length < 3) return Yn(t);
        var n = 1,
            e = t.length,
            r = t[0],
            i = r[0],
            o = r[1],
            a = [i, i, i, (r = t[1])[0]],
            u = [o, o, o, r[1]],
            s = [i, ",", o, "L", ue(mu, a), ",", ue(mu, u)];
        for (t.push(t[e - 1]); ++n <= e;) r = t[n], a.shift(), a.push(r[0]), u.shift(), u.push(r[1]), se(s, a, u);
        return t.pop(), s.push("L", r), s.join("")
    }

    function ie(t) {
        if (t.length < 4) return Yn(t);
        for (var n, e = [], r = -1, i = t.length, o = [0], a = [0]; ++r < 3;) n = t[r], o.push(n[0]), a.push(n[1]);
        for (e.push(ue(mu, o) + "," + ue(mu, a)), --r; ++r < i;) n = t[r], o.shift(), o.push(n[0]), a.shift(), a.push(n[1]), se(e, o, a);
        return e.join("")
    }

    function oe(t) {
        for (var n, e, r = -1, i = t.length, o = i + 4, a = [], u = []; ++r < 4;) e = t[r % i], a.push(e[0]), u.push(e[1]);
        for (n = [ue(mu, a), ",", ue(mu, u)], --r; ++r < o;) e = t[r % i], a.shift(), a.push(e[0]), u.shift(), u.push(e[1]), se(n, a, u);
        return n.join("")
    }

    function ae(t, n) {
        var e = t.length - 1;
        if (e)
            for (var r, i, o = t[0][0], a = t[0][1], u = t[e][0] - o, s = t[e][1] - a, l = -1; ++l <= e;) r = t[l], i = l / e, r[0] = n * r[0] + (1 - n) * (o + i * u), r[1] = n * r[1] + (1 - n) * (a + i * s);
        return re(t)
    }

    function ue(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
    }

    function se(t, n, e) {
        t.push("C", ue(du, n), ",", ue(du, e), ",", ue(gu, n), ",", ue(gu, e), ",", ue(mu, n), ",", ue(mu, e))
    }

    function le(t, n) {
        return (n[1] - t[1]) / (n[0] - t[0])
    }

    function ce(t) {
        for (var n = 0, e = t.length - 1, r = [], i = t[0], o = t[1], a = r[0] = le(i, o); ++n < e;) r[n] = (a + (a = le(i = o, o = t[n + 1]))) / 2;
        return r[n] = a, r
    }

    function fe(t) {
        for (var n, e, r, i, o = [], a = ce(t), u = -1, s = t.length - 1; ++u < s;) n = le(t[u], t[u + 1]), Math.abs(n) < 1e-6 ? a[u] = a[u + 1] = 0 : (e = a[u] / n, r = a[u + 1] / n, i = e * e + r * r, i > 9 && (i = 3 * n / Math.sqrt(i), a[u] = i * e, a[u + 1] = i * r));
        for (u = -1; ++u <= s;) i = (t[Math.min(s, u + 1)][0] - t[Math.max(0, u - 1)][0]) / (6 * (1 + a[u] * a[u])), o.push([i || 0, a[u] * i || 0]);
        return o
    }

    function he(t) {
        return t.length < 3 ? Yn(t) : t[0] + ne(t, fe(t))
    }

    function pe(t, n, e, r) {
        var i, o, a, u, s, l, c;
        return i = r[t], o = i[0], a = i[1], i = r[n], u = i[0], s = i[1], i = r[e], l = i[0], c = i[1], (c - a) * (u - o) - (s - a) * (l - o) > 0
    }

    function de(t, n, e) {
        return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0])
    }

    function ge(t, n, e, r) {
        var i = t[0],
            o = e[0],
            a = n[0] - i,
            u = r[0] - o,
            s = t[1],
            l = e[1],
            c = n[1] - s,
            f = r[1] - l,
            h = (u * (s - l) - f * (i - o)) / (f * a - u * c);
        return [i + h * a, s + h * c]
    }

    function me(t) {
        var n = t[0],
            e = t[t.length - 1];
        return !(n[0] - e[0] || n[1] - e[1])
    }

    function ve(t, n) {
        var e = {
                list: t.map(function(t, n) {
                    return {
                        index: n,
                        x: t[0],
                        y: t[1]
                    }
                }).sort(function(t, n) {
                    return t.y < n.y ? -1 : t.y > n.y ? 1 : t.x < n.x ? -1 : t.x > n.x ? 1 : 0
                }),
                bottomSite: null
            },
            r = {
                list: [],
                leftEnd: null,
                rightEnd: null,
                init: function() {
                    r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
                },
                createHalfEdge: function(t, n) {
                    return {
                        edge: t,
                        side: n,
                        vertex: null,
                        l: null,
                        r: null
                    }
                },
                insert: function(t, n) {
                    n.l = t, n.r = t.r, t.r.l = n, t.r = n
                },
                leftBound: function(t) {
                    var n = r.leftEnd;
                    do n = n.r; while (n != r.rightEnd && i.rightOf(n, t));
                    return n = n.l
                },
                del: function(t) {
                    t.l.r = t.r, t.r.l = t.l, t.edge = null
                },
                right: function(t) {
                    return t.r
                },
                left: function(t) {
                    return t.l
                },
                leftRegion: function(t) {
                    return null == t.edge ? e.bottomSite : t.edge.region[t.side]
                },
                rightRegion: function(t) {
                    return null == t.edge ? e.bottomSite : t.edge.region[yu[t.side]]
                }
            },
            i = {
                bisect: function(t, n) {
                    var e = {
                            region: {
                                l: t,
                                r: n
                            },
                            ep: {
                                l: null,
                                r: null
                            }
                        },
                        r = n.x - t.x,
                        i = n.y - t.y,
                        o = r > 0 ? r : -r,
                        a = i > 0 ? i : -i;
                    return e.c = t.x * r + t.y * i + .5 * (r * r + i * i), o > a ? (e.a = 1, e.b = i / r, e.c /= r) : (e.b = 1, e.a = r / i, e.c /= i), e
                },
                intersect: function(t, n) {
                    var e = t.edge,
                        r = n.edge;
                    if (!e || !r || e.region.r == r.region.r) return null;
                    var i = e.a * r.b - e.b * r.a;
                    if (Math.abs(i) < 1e-10) return null;
                    var o, a, u = (e.c * r.b - r.c * e.b) / i,
                        s = (r.c * e.a - e.c * r.a) / i,
                        l = e.region.r,
                        c = r.region.r;
                    l.y < c.y || l.y == c.y && l.x < c.x ? (o = t,
                        a = e) : (o = n, a = r);
                    var f = u >= a.region.r.x;
                    return f && "l" === o.side || !f && "r" === o.side ? null : {
                        x: u,
                        y: s
                    }
                },
                rightOf: function(t, n) {
                    var e = t.edge,
                        r = e.region.r,
                        i = n.x > r.x;
                    if (i && "l" === t.side) return 1;
                    if (!i && "r" === t.side) return 0;
                    if (1 === e.a) {
                        var o = n.y - r.y,
                            a = n.x - r.x,
                            u = 0,
                            s = 0;
                        if (!i && e.b < 0 || i && e.b >= 0 ? s = u = o >= e.b * a : (s = n.x + n.y * e.b > e.c, e.b < 0 && (s = !s), s || (u = 1)), !u) {
                            var l = r.x - e.region.l.x;
                            s = e.b * (a * a - o * o) < l * o * (1 + 2 * a / l + e.b * e.b), e.b < 0 && (s = !s)
                        }
                    } else {
                        var c = e.c - e.a * n.x,
                            f = n.y - c,
                            h = n.x - r.x,
                            p = c - r.y;
                        s = f * f > h * h + p * p
                    }
                    return "l" === t.side ? s : !s
                },
                endPoint: function(t, e, r) {
                    t.ep[e] = r, t.ep[yu[e]] && n(t)
                },
                distance: function(t, n) {
                    var e = t.x - n.x,
                        r = t.y - n.y;
                    return Math.sqrt(e * e + r * r)
                }
            },
            o = {
                list: [],
                insert: function(t, n, e) {
                    t.vertex = n, t.ystar = n.y + e;
                    for (var r = 0, i = o.list, a = i.length; a > r; r++) {
                        var u = i[r];
                        if (!(t.ystar > u.ystar || t.ystar == u.ystar && n.x > u.vertex.x)) break
                    }
                    i.splice(r, 0, t)
                },
                del: function(t) {
                    for (var n = 0, e = o.list, r = e.length; r > n && e[n] != t; ++n);
                    e.splice(n, 1)
                },
                empty: function() {
                    return 0 === o.list.length
                },
                nextEvent: function(t) {
                    for (var n = 0, e = o.list, r = e.length; r > n; ++n)
                        if (e[n] == t) return e[n + 1];
                    return null
                },
                min: function() {
                    var t = o.list[0];
                    return {
                        x: t.vertex.x,
                        y: t.ystar
                    }
                },
                extractMin: function() {
                    return o.list.shift()
                }
            };
        r.init(), e.bottomSite = e.list.shift();
        for (var a, u, s, l, c, f, h, p, d, g, m, v, y, x = e.list.shift();;)
            if (o.empty() || (a = o.min()), x && (o.empty() || x.y < a.y || x.y == a.y && x.x < a.x)) u = r.leftBound(x), s = r.right(u), h = r.rightRegion(u), v = i.bisect(h, x), f = r.createHalfEdge(v, "l"), r.insert(u, f), g = i.intersect(u, f), g && (o.del(u), o.insert(u, g, i.distance(g, x))), u = f, f = r.createHalfEdge(v, "r"), r.insert(u, f), g = i.intersect(f, s), g && o.insert(f, g, i.distance(g, x)), x = e.list.shift();
            else {
                if (o.empty()) break;
                u = o.extractMin(), l = r.left(u), s = r.right(u), c = r.right(s), h = r.leftRegion(u), p = r.rightRegion(s), m = u.vertex, i.endPoint(u.edge, u.side, m), i.endPoint(s.edge, s.side, m), r.del(u), o.del(s), r.del(s), y = "l", h.y > p.y && (d = h, h = p, p = d, y = "r"), v = i.bisect(h, p), f = r.createHalfEdge(v, y), r.insert(l, f), i.endPoint(v, yu[y], m), g = i.intersect(l, f), g && (o.del(l), o.insert(l, g, i.distance(g, h))), g = i.intersect(f, c), g && o.insert(f, g, i.distance(g, h))
            }
        for (u = r.right(r.leftEnd); u != r.rightEnd; u = r.right(u)) n(u.edge)
    }

    function ye(t) {
        return t.x
    }

    function xe(t) {
        return t.y
    }

    function be() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function Me(t, n, e, r, i, o) {
        if (!t(n, e, r, i, o)) {
            var a = .5 * (e + i),
                u = .5 * (r + o),
                s = n.nodes;
            s[0] && Me(t, s[0], e, r, a, u), s[1] && Me(t, s[1], a, r, i, u), s[2] && Me(t, s[2], e, u, a, o), s[3] && Me(t, s[3], a, u, i, o)
        }
    }

    function we(t, n) {
        t = yo.rgb(t), n = yo.rgb(n);
        var e = t.r,
            r = t.g,
            i = t.b,
            o = n.r - e,
            a = n.g - r,
            u = n.b - i;
        return function(t) {
            return "#" + st(Math.round(e + o * t)) + st(Math.round(r + a * t)) + st(Math.round(i + u * t))
        }
    }

    function _e(t, n) {
        var e, r = {},
            i = {};
        for (e in t) e in n ? r[e] = Se(t[e], n[e]) : i[e] = t[e];
        for (e in n) e in t || (i[e] = n[e]);
        return function(t) {
            for (e in r) i[e] = r[e](t);
            return i
        }
    }

    function Ee(t, n) {
        return n -= t = +t,
            function(e) {
                return t + n * e
            }
    }

    function ke(t, n) {
        var e, r, i, o, a, u = 0,
            s = 0,
            l = [],
            c = [];
        for (t += "", n += "", xu.lastIndex = 0, r = 0; e = xu.exec(n); ++r) e.index && l.push(n.substring(u, s = e.index)), c.push({
            i: l.length,
            x: e[0]
        }), l.push(null), u = xu.lastIndex;
        for (u < n.length && l.push(n.substring(u)), r = 0, o = c.length;
            (e = xu.exec(t)) && o > r; ++r)
            if (a = c[r], a.x == e[0]) {
                if (a.i)
                    if (null == l[a.i + 1])
                        for (l[a.i - 1] += a.x, l.splice(a.i, 1), i = r + 1; o > i; ++i) c[i].i--;
                    else
                        for (l[a.i - 1] += a.x + l[a.i + 1], l.splice(a.i, 2), i = r + 1; o > i; ++i) c[i].i -= 2;
                else if (null == l[a.i + 1]) l[a.i] = a.x;
                else
                    for (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1), i = r + 1; o > i; ++i) c[i].i--;
                c.splice(r, 1), o--, r--
            } else a.x = Ee(parseFloat(e[0]), parseFloat(a.x));
        for (; o > r;) a = c.pop(), null == l[a.i + 1] ? l[a.i] = a.x : (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1)), o--;
        return 1 === l.length ? null == l[0] ? (a = c[0].x, function(t) {
            return a(t) + ""
        }) : function() {
            return n
        } : function(t) {
            for (r = 0; o > r; ++r) l[(a = c[r]).i] = a.x(t);
            return l.join("")
        }
    }

    function Se(t, n) {
        for (var e, r = yo.interpolators.length; --r >= 0 && !(e = yo.interpolators[r](t, n)););
        return e
    }

    function Te(t, n) {
        var e, r = [],
            i = [],
            o = t.length,
            a = n.length,
            u = Math.min(t.length, n.length);
        for (e = 0; u > e; ++e) r.push(Se(t[e], n[e]));
        for (; o > e; ++e) i[e] = t[e];
        for (; a > e; ++e) i[e] = n[e];
        return function(t) {
            for (e = 0; u > e; ++e) i[e] = r[e](t);
            return i
        }
    }

    function Ne(t) {
        return function(n) {
            return 0 >= n ? 0 : n >= 1 ? 1 : t(n)
        }
    }

    function Ce(t) {
        return function(n) {
            return 1 - t(1 - n)
        }
    }

    function Ae(t) {
        return function(n) {
            return .5 * (.5 > n ? t(2 * n) : 2 - t(2 - 2 * n))
        }
    }

    function De(t) {
        return t * t
    }

    function je(t) {
        return t * t * t
    }

    function Le(t) {
        if (0 >= t) return 0;
        if (t >= 1) return 1;
        var n = t * t,
            e = n * t;
        return 4 * (.5 > t ? e : 3 * (t - n) + e - .75)
    }

    function qe(t) {
        return function(n) {
            return Math.pow(n, t)
        }
    }

    function He(t) {
        return 1 - Math.cos(t * Zo / 2)
    }

    function ze(t) {
        return Math.pow(2, 10 * (t - 1))
    }

    function Fe(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function Oe(t, n) {
        var e;
        return arguments.length < 2 && (n = .45), arguments.length ? e = n / (2 * Zo) * Math.asin(1 / t) : (t = 1, e = n / 4),
            function(r) {
                return 1 + t * Math.pow(2, 10 * -r) * Math.sin(2 * (r - e) * Zo / n)
            }
    }

    function Pe(t) {
        return t || (t = 1.70158),
            function(n) {
                return n * n * ((t + 1) * n - t)
            }
    }

    function Re(t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }

    function Be(t, n) {
        t = yo.hcl(t), n = yo.hcl(n);
        var e = t.h,
            r = t.c,
            i = t.l,
            o = n.h - e,
            a = n.c - r,
            u = n.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? n.c : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : -180 > o && (o += 360),
            function(t) {
                return J(e + o * t, r + a * t, i + u * t) + ""
            }
    }

    function Ie(t, n) {
        t = yo.hsl(t), n = yo.hsl(n);
        var e = t.h,
            r = t.s,
            i = t.l,
            o = n.h - e,
            a = n.s - r,
            u = n.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? n.s : r), isNaN(o) ? (o = 0, e = isNaN(e) ? n.h : e) : o > 180 ? o -= 360 : -180 > o && (o += 360),
            function(t) {
                return Y(e + o * t, r + a * t, i + u * t) + ""
            }
    }

    function We(t, n) {
        t = yo.lab(t), n = yo.lab(n);
        var e = t.l,
            r = t.a,
            i = t.b,
            o = n.l - e,
            a = n.a - r,
            u = n.b - i;
        return function(t) {
            return Q(e + o * t, r + a * t, i + u * t) + ""
        }
    }

    function $e(t, n) {
        return n -= t,
            function(e) {
                return Math.round(t + n * e)
            }
    }

    function Xe(t) {
        var n = [t.a, t.b],
            e = [t.c, t.d],
            r = Ye(n),
            i = Ue(n, e),
            o = Ye(Ve(e, n, -i)) || 0;
        n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Qo, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o ? Math.atan2(i, o) * Qo : 0
    }

    function Ue(t, n) {
        return t[0] * n[0] + t[1] * n[1]
    }

    function Ye(t) {
        var n = Math.sqrt(Ue(t, t));
        return n && (t[0] /= n, t[1] /= n), n
    }

    function Ve(t, n, e) {
        return t[0] += e * n[0], t[1] += e * n[1], t
    }

    function Ze(t, n) {
        var e, r = [],
            i = [],
            o = yo.transform(t),
            a = yo.transform(n),
            u = o.translate,
            s = a.translate,
            l = o.rotate,
            c = a.rotate,
            f = o.skew,
            h = a.skew,
            p = o.scale,
            d = a.scale;
        return u[0] != s[0] || u[1] != s[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
                i: 1,
                x: Ee(u[0], s[0])
            }, {
                i: 3,
                x: Ee(u[1], s[1])
            })) : r.push(s[0] || s[1] ? "translate(" + s + ")" : ""), l != c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), i.push({
                i: r.push(r.pop() + "rotate(", null, ")") - 2,
                x: Ee(l, c)
            })) : c && r.push(r.pop() + "rotate(" + c + ")"), f != h ? i.push({
                i: r.push(r.pop() + "skewX(", null, ")") - 2,
                x: Ee(f, h)
            }) : h && r.push(r.pop() + "skewX(" + h + ")"), p[0] != d[0] || p[1] != d[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
                i: e - 4,
                x: Ee(p[0], d[0])
            }, {
                i: e - 2,
                x: Ee(p[1], d[1])
            })) : (1 != d[0] || 1 != d[1]) && r.push(r.pop() + "scale(" + d + ")"), e = i.length,
            function(t) {
                for (var n, o = -1; ++o < e;) r[(n = i[o]).i] = n.x(t);
                return r.join("")
            }
    }

    function Je(t, n) {
        return n = n - (t = +t) ? 1 / (n - t) : 0,
            function(e) {
                return (e - t) * n
            }
    }

    function Ge(t, n) {
        return n = n - (t = +t) ? 1 / (n - t) : 0,
            function(e) {
                return Math.max(0, Math.min(1, (e - t) * n))
            }
    }

    function Ke(t) {
        for (var n = t.source, e = t.target, r = tr(n, e), i = [n]; n !== r;) n = n.parent, i.push(n);
        for (var o = i.length; e !== r;) i.splice(o, 0, e), e = e.parent;
        return i
    }

    function Qe(t) {
        for (var n = [], e = t.parent; null != e;) n.push(t), t = e, e = e.parent;
        return n.push(t), n
    }

    function tr(t, n) {
        if (t === n) return t;
        for (var e = Qe(t), r = Qe(n), i = e.pop(), o = r.pop(), a = null; i === o;) a = i, i = e.pop(), o = r.pop();
        return a
    }

    function nr(t) {
        t.fixed |= 2
    }

    function er(t) {
        t.fixed &= -7
    }

    function rr(t) {
        t.fixed |= 4, t.px = t.x, t.py = t.y
    }

    function ir(t) {
        t.fixed &= -5
    }

    function or(t, n, e) {
        var r = 0,
            i = 0;
        if (t.charge = 0, !t.leaf)
            for (var o, a = t.nodes, u = a.length, s = -1; ++s < u;) o = a[s], null != o && (or(o, n, e), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
        if (t.point) {
            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
            var l = n * e[t.point.index];
            t.charge += t.pointCharge = l, r += l * t.point.x, i += l * t.point.y
        }
        t.cx = r / t.charge, t.cy = i / t.charge
    }

    function ar(t, n) {
        return yo.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = cr, t
    }

    function ur(t) {
        return t.children
    }

    function sr(t) {
        return t.value
    }

    function lr(t, n) {
        return n.value - t.value
    }

    function cr(t) {
        return yo.merge(t.map(function(t) {
            return (t.children || []).map(function(n) {
                return {
                    source: t,
                    target: n
                }
            })
        }))
    }

    function fr(t) {
        return t.x
    }

    function hr(t) {
        return t.y
    }

    function pr(t, n, e) {
        t.y0 = n, t.y = e
    }

    function dr(t) {
        return yo.range(t.length)
    }

    function gr(t) {
        for (var n = -1, e = t[0].length, r = []; ++n < e;) r[n] = 0;
        return r
    }

    function mr(t) {
        for (var n, e = 1, r = 0, i = t[0][1], o = t.length; o > e; ++e)(n = t[e][1]) > i && (r = e, i = n);
        return r
    }

    function vr(t) {
        return t.reduce(yr, 0)
    }

    function yr(t, n) {
        return t + n[1]
    }

    function xr(t, n) {
        return br(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1))
    }

    function br(t, n) {
        for (var e = -1, r = +t[0], i = (t[1] - r) / n, o = []; ++e <= n;) o[e] = i * e + r;
        return o
    }

    function Mr(t) {
        return [yo.min(t), yo.max(t)]
    }

    function wr(t, n) {
        return t.parent == n.parent ? 1 : 2
    }

    function _r(t) {
        var n = t.children;
        return n && n.length ? n[0] : t._tree.thread
    }

    function Er(t) {
        var n, e = t.children;
        return e && (n = e.length) ? e[n - 1] : t._tree.thread
    }

    function kr(t, n) {
        var e = t.children;
        if (e && (i = e.length))
            for (var r, i, o = -1; ++o < i;) n(r = kr(e[o], n), t) > 0 && (t = r);
        return t
    }

    function Sr(t, n) {
        return t.x - n.x
    }

    function Tr(t, n) {
        return n.x - t.x
    }

    function Nr(t, n) {
        return t.depth - n.depth
    }

    function Cr(t, n) {
        function e(t, r) {
            var i = t.children;
            if (i && (a = i.length))
                for (var o, a, u = null, s = -1; ++s < a;) o = i[s], e(o, u), u = o;
            n(t, r)
        }
        e(t, null)
    }

    function Ar(t) {
        for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) n = i[o]._tree, n.prelim += e, n.mod += e, e += n.shift + (r += n.change)
    }

    function Dr(t, n, e) {
        t = t._tree, n = n._tree;
        var r = e / (n.number - t.number);
        t.change += r, n.change -= r, n.shift += e, n.prelim += e, n.mod += e
    }

    function jr(t, n, e) {
        return t._tree.ancestor.parent == n.parent ? t._tree.ancestor : e
    }

    function Lr(t, n) {
        return t.value - n.value
    }

    function qr(t, n) {
        var e = t._pack_next;
        t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n
    }

    function Hr(t, n) {
        t._pack_next = n, n._pack_prev = t
    }

    function zr(t, n) {
        var e = n.x - t.x,
            r = n.y - t.y,
            i = t.r + n.r;
        return .999 * i * i > e * e + r * r
    }

    function Fr(t) {
        function n(t) {
            c = Math.min(t.x - t.r, c), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), p = Math.max(t.y + t.r, p)
        }
        if ((e = t.children) && (l = e.length)) {
            var e, r, i, o, a, u, s, l, c = 1 / 0,
                f = -(1 / 0),
                h = 1 / 0,
                p = -(1 / 0);
            if (e.forEach(Or), r = e[0], r.x = -r.r, r.y = 0, n(r), l > 1 && (i = e[1], i.x = i.r, i.y = 0, n(i), l > 2))
                for (o = e[2], Br(r, i, o), n(o), qr(r, o), r._pack_prev = o, qr(o, i), i = r._pack_next, a = 3; l > a; a++) {
                    Br(r, i, o = e[a]);
                    var d = 0,
                        g = 1,
                        m = 1;
                    for (u = i._pack_next; u !== i; u = u._pack_next, g++)
                        if (zr(u, o)) {
                            d = 1;
                            break
                        }
                    if (1 == d)
                        for (s = r._pack_prev; s !== u._pack_prev && !zr(s, o); s = s._pack_prev, m++);
                    d ? (m > g || g == m && i.r < r.r ? Hr(r, i = u) : Hr(r = s, i), a--) : (qr(r, o), i = o, n(o))
                }
            var v = (c + f) / 2,
                y = (h + p) / 2,
                x = 0;
            for (a = 0; l > a; a++) o = e[a], o.x -= v, o.y -= y, x = Math.max(x, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
            t.r = x, e.forEach(Pr)
        }
    }

    function Or(t) {
        t._pack_next = t._pack_prev = t
    }

    function Pr(t) {
        delete t._pack_next, delete t._pack_prev
    }

    function Rr(t, n, e, r) {
        var i = t.children;
        if (t.x = n += r * t.x, t.y = e += r * t.y, t.r *= r, i)
            for (var o = -1, a = i.length; ++o < a;) Rr(i[o], n, e, r)
    }

    function Br(t, n, e) {
        var r = t.r + e.r,
            i = n.x - t.x,
            o = n.y - t.y;
        if (r && (i || o)) {
            var a = n.r + e.r,
                u = i * i + o * o;
            a *= a, r *= r;
            var s = .5 + (r - a) / (2 * u),
                l = Math.sqrt(Math.max(0, 2 * a * (r + u) - (r -= u) * r - a * a)) / (2 * u);
            e.x = t.x + s * i + l * o, e.y = t.y + s * o - l * i
        } else e.x = t.x + r, e.y = t.y
    }

    function Ir(t) {
        return 1 + yo.max(t, function(t) {
            return t.y
        })
    }

    function Wr(t) {
        return t.reduce(function(t, n) {
            return t + n.x
        }, 0) / t.length
    }

    function $r(t) {
        var n = t.children;
        return n && n.length ? $r(n[0]) : t
    }

    function Xr(t) {
        var n, e = t.children;
        return e && (n = e.length) ? Xr(e[n - 1]) : t
    }

    function Ur(t) {
        return {
            x: t.x,
            y: t.y,
            dx: t.dx,
            dy: t.dy
        }
    }

    function Yr(t, n) {
        var e = t.x + n[3],
            r = t.y + n[0],
            i = t.dx - n[1] - n[3],
            o = t.dy - n[0] - n[2];
        return 0 > i && (e += i / 2, i = 0), 0 > o && (r += o / 2, o = 0), {
            x: e,
            y: r,
            dx: i,
            dy: o
        }
    }

    function Vr(t) {
        var n = t[0],
            e = t[t.length - 1];
        return e > n ? [n, e] : [e, n]
    }

    function Zr(t) {
        return t.rangeExtent ? t.rangeExtent() : Vr(t.range())
    }

    function Jr(t, n, e, r) {
        var i = e(t[0], t[1]),
            o = r(n[0], n[1]);
        return function(t) {
            return o(i(t))
        }
    }

    function Gr(t, n) {
        var e, r = 0,
            i = t.length - 1,
            o = t[r],
            a = t[i];
        return o > a && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t
    }

    function Kr(t) {
        return t ? {
            floor: function(n) {
                return Math.floor(n / t) * t
            },
            ceil: function(n) {
                return Math.ceil(n / t) * t
            }
        } : Cu
    }

    function Qr(t, n, e, r) {
        var i = [],
            o = [],
            a = 0,
            u = Math.min(t.length, n.length) - 1;
        for (t[u] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a <= u;) i.push(e(t[a - 1], t[a])), o.push(r(n[a - 1], n[a]));
        return function(n) {
            var e = yo.bisect(t, n, 1, u) - 1;
            return o[e](i[e](n))
        }
    }

    function ti(t, n, e, r) {
        function i() {
            var i = Math.min(t.length, n.length) > 2 ? Qr : Jr,
                s = r ? Ge : Je;
            return a = i(t, n, s, e), u = i(n, t, s, Se), o
        }

        function o(t) {
            return a(t)
        }
        var a, u;
        return o.invert = function(t) {
            return u(t)
        }, o.domain = function(n) {
            return arguments.length ? (t = n.map(Number), i()) : t
        }, o.range = function(t) {
            return arguments.length ? (n = t, i()) : n
        }, o.rangeRound = function(t) {
            return o.range(t).interpolate($e)
        }, o.clamp = function(t) {
            return arguments.length ? (r = t, i()) : r
        }, o.interpolate = function(t) {
            return arguments.length ? (e = t, i()) : e
        }, o.ticks = function(n) {
            return ii(t, n)
        }, o.tickFormat = function(n, e) {
            return oi(t, n, e)
        }, o.nice = function(n) {
            return ei(t, n), i()
        }, o.copy = function() {
            return ti(t, n, e, r)
        }, i()
    }

    function ni(t, n) {
        return yo.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
    }

    function ei(t, n) {
        return Gr(t, Kr(ri(t, n)[2]))
    }

    function ri(t, n) {
        null == n && (n = 10);
        var e = Vr(t),
            r = e[1] - e[0],
            i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)),
            o = n / r * i;
        return .15 >= o ? i *= 10 : .35 >= o ? i *= 5 : .75 >= o && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
    }

    function ii(t, n) {
        return yo.range.apply(yo, ri(t, n))
    }

    function oi(t, n, e) {
        var r = -Math.floor(Math.log(ri(t, n)[2]) / Math.LN10 + .01);
        return yo.format(e ? e.replace(Sa, function(t, n, e, i, o, a, u, s, l, c) {
            return [n, e, i, o, a, u, s, l || "." + (r - 2 * ("%" === c)), c].join("")
        }) : ",." + r + "f")
    }

    function ai(t, n, e, r) {
        function i(t) {
            return (e ? Math.log(0 > t ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(n)
        }

        function o(t) {
            return e ? Math.pow(n, t) : -Math.pow(n, -t)
        }

        function a(n) {
            return t(i(n))
        }
        return a.invert = function(n) {
            return o(t.invert(n))
        }, a.domain = function(n) {
            return arguments.length ? (e = n[0] >= 0, t.domain((r = n.map(Number)).map(i)), a) : r
        }, a.base = function(e) {
            return arguments.length ? (n = +e, t.domain(r.map(i)), a) : n
        }, a.nice = function() {
            var n = Gr(r.map(i), e ? Math : Du);
            return t.domain(n), r = n.map(o), a
        }, a.ticks = function() {
            var t = Vr(r),
                a = [],
                u = t[0],
                s = t[1],
                l = Math.floor(i(u)),
                c = Math.ceil(i(s)),
                f = n % 1 ? 2 : n;
            if (isFinite(c - l)) {
                if (e) {
                    for (; c > l; l++)
                        for (var h = 1; f > h; h++) a.push(o(l) * h);
                    a.push(o(l))
                } else
                    for (a.push(o(l)); l++ < c;)
                        for (var h = f - 1; h > 0; h--) a.push(o(l) * h);
                for (l = 0; a[l] < u; l++);
                for (c = a.length; a[c - 1] > s; c--);
                a = a.slice(l, c)
            }
            return a
        }, a.tickFormat = function(t, n) {
            if (!arguments.length) return Au;
            arguments.length < 2 ? n = Au : "function" != typeof n && (n = yo.format(n));
            var r, u = Math.max(.1, t / a.ticks().length),
                s = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function(t) {
                return t / o(s(i(t) + r)) <= u ? n(t) : ""
            }
        }, a.copy = function() {
            return ai(t.copy(), n, e, r)
        }, ni(a, t)
    }

    function ui(t, n, e) {
        function r(n) {
            return t(i(n))
        }
        var i = si(n),
            o = si(1 / n);
        return r.invert = function(n) {
            return o(t.invert(n))
        }, r.domain = function(n) {
            return arguments.length ? (t.domain((e = n.map(Number)).map(i)), r) : e
        }, r.ticks = function(t) {
            return ii(e, t)
        }, r.tickFormat = function(t, n) {
            return oi(e, t, n)
        }, r.nice = function(t) {
            return r.domain(ei(e, t))
        }, r.exponent = function(a) {
            return arguments.length ? (i = si(n = a), o = si(1 / n), t.domain(e.map(i)), r) : n
        }, r.copy = function() {
            return ui(t.copy(), n, e)
        }, ni(r, t)
    }

    function si(t) {
        return function(n) {
            return 0 > n ? -Math.pow(-n, t) : Math.pow(n, t)
        }
    }

    function li(t, n) {
        function e(n) {
            return a[((o.get(n) || o.set(n, t.push(n))) - 1) % a.length]
        }

        function r(n, e) {
            return yo.range(t.length).map(function(t) {
                return n + e * t
            })
        }
        var o, a, u;
        return e.domain = function(r) {
            if (!arguments.length) return t;
            t = [], o = new i;
            for (var a, u = -1, s = r.length; ++u < s;) o.has(a = r[u]) || o.set(a, t.push(a));
            return e[n.t].apply(e, n.a)
        }, e.range = function(t) {
            return arguments.length ? (a = t, u = 0, n = {
                t: "range",
                a: arguments
            }, e) : a
        }, e.rangePoints = function(i, o) {
            arguments.length < 2 && (o = 0);
            var s = i[0],
                l = i[1],
                c = (l - s) / (Math.max(1, t.length - 1) + o);
            return a = r(t.length < 2 ? (s + l) / 2 : s + c * o / 2, c), u = 0, n = {
                t: "rangePoints",
                a: arguments
            }, e
        }, e.rangeBands = function(i, o, s) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (s = o);
            var l = i[1] < i[0],
                c = i[l - 0],
                f = i[1 - l],
                h = (f - c) / (t.length - o + 2 * s);
            return a = r(c + h * s, h), l && a.reverse(), u = h * (1 - o), n = {
                t: "rangeBands",
                a: arguments
            }, e
        }, e.rangeRoundBands = function(i, o, s) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (s = o);
            var l = i[1] < i[0],
                c = i[l - 0],
                f = i[1 - l],
                h = Math.floor((f - c) / (t.length - o + 2 * s)),
                p = f - c - (t.length - o) * h;
            return a = r(c + Math.round(p / 2), h), l && a.reverse(), u = Math.round(h * (1 - o)), n = {
                t: "rangeRoundBands",
                a: arguments
            }, e
        }, e.rangeBand = function() {
            return u
        }, e.rangeExtent = function() {
            return Vr(n.a[0])
        }, e.copy = function() {
            return li(t, n)
        }, e.domain(t)
    }

    function ci(t, n) {
        function e() {
            var e = 0,
                o = n.length;
            for (i = []; ++e < o;) i[e - 1] = yo.quantile(t, e / o);
            return r
        }

        function r(t) {
            return isNaN(t = +t) ? void 0 : n[yo.bisect(i, t)]
        }
        var i;
        return r.domain = function(n) {
            return arguments.length ? (t = n.filter(function(t) {
                return !isNaN(t)
            }).sort(yo.ascending), e()) : t
        }, r.range = function(t) {
            return arguments.length ? (n = t, e()) : n
        }, r.quantiles = function() {
            return i
        }, r.invertExtent = function(e) {
            return e = n.indexOf(e), 0 > e ? [0 / 0, 0 / 0] : [e > 0 ? i[e - 1] : t[0], e < i.length ? i[e] : t[t.length - 1]]
        }, r.copy = function() {
            return ci(t, n)
        }, e()
    }

    function fi(t, n, e) {
        function r(n) {
            return e[Math.max(0, Math.min(a, Math.floor(o * (n - t))))]
        }

        function i() {
            return o = e.length / (n - t), a = e.length - 1, r
        }
        var o, a;
        return r.domain = function(e) {
            return arguments.length ? (t = +e[0], n = +e[e.length - 1], i()) : [t, n]
        }, r.range = function(t) {
            return arguments.length ? (e = t, i()) : e
        }, r.invertExtent = function(n) {
            return n = e.indexOf(n), n = 0 > n ? 0 / 0 : n / o + t, [n, n + 1 / o]
        }, r.copy = function() {
            return fi(t, n, e)
        }, i()
    }

    function hi(t, n) {
        function e(e) {
            return e >= e ? n[yo.bisect(t, e)] : void 0
        }
        return e.domain = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.range = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.invertExtent = function(e) {
            return e = n.indexOf(e), [t[e - 1], t[e]]
        }, e.copy = function() {
            return hi(t, n)
        }, e
    }

    function pi(t) {
        function n(t) {
            return +t
        }
        return n.invert = n, n.domain = n.range = function(e) {
            return arguments.length ? (t = e.map(n), n) : t
        }, n.ticks = function(n) {
            return ii(t, n)
        }, n.tickFormat = function(n, e) {
            return oi(t, n, e)
        }, n.copy = function() {
            return pi(t)
        }, n
    }

    function di(t) {
        return t.innerRadius
    }

    function gi(t) {
        return t.outerRadius
    }

    function mi(t) {
        return t.startAngle
    }

    function vi(t) {
        return t.endAngle
    }

    function yi(t) {
        for (var n, e, r, i = -1, o = t.length; ++i < o;) n = t[i], e = n[0], r = n[1] + zu, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r);
        return t
    }

    function xi(t) {
        function n(n) {
            function s() {
                g.push("M", u(t(v), f), c, l(t(m.reverse()), f), "Z")
            }
            for (var h, p, d, g = [], m = [], v = [], y = -1, x = n.length, b = dt(e), M = dt(i), w = e === r ? function() {
                    return p
                } : dt(r), _ = i === o ? function() {
                    return d
                } : dt(o); ++y < x;) a.call(this, h = n[y], y) ? (m.push([p = +b.call(this, h, y), d = +M.call(this, h, y)]), v.push([+w.call(this, h, y), +_.call(this, h, y)])) : m.length && (s(), m = [], v = []);
            return m.length && s(), g.length ? g.join("") : null
        }
        var e = Xn,
            r = Xn,
            i = 0,
            o = Un,
            a = Xt,
            u = Yn,
            s = u.key,
            l = u,
            c = "L",
            f = .7;
        return n.x = function(t) {
            return arguments.length ? (e = r = t, n) : r
        }, n.x0 = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.x1 = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.y = function(t) {
            return arguments.length ? (i = o = t, n) : o
        }, n.y0 = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.y1 = function(t) {
            return arguments.length ? (o = t, n) : o
        }, n.defined = function(t) {
            return arguments.length ? (a = t, n) : a
        }, n.interpolate = function(t) {
            return arguments.length ? (s = "function" == typeof t ? u = t : (u = pu.get(t) || Yn).key, l = u.reverse || u, c = u.closed ? "M" : "L", n) : s
        }, n.tension = function(t) {
            return arguments.length ? (f = t, n) : f
        }, n
    }

    function bi(t) {
        return t.radius
    }

    function Mi(t) {
        return [t.x, t.y]
    }

    function wi(t) {
        return function() {
            var n = t.apply(this, arguments),
                e = n[0],
                r = n[1] + zu;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }

    function _i() {
        return 64
    }

    function Ei() {
        return "circle"
    }

    function ki(t) {
        var n = Math.sqrt(t / Zo);
        return "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z"
    }

    function Si(t, n) {
        return zo(t, Wu), t.id = n, t
    }

    function Ti(t, n, e, r) {
        var i = t.id;
        return N(t, "function" == typeof e ? function(t, o, a) {
            t.__transition__[i].tween.set(n, r(e.call(t, t.__data__, o, a)))
        } : (e = r(e), function(t) {
            t.__transition__[i].tween.set(n, e)
        }))
    }

    function Ni(t) {
        return null == t && (t = ""),
            function() {
                this.textContent = t
            }
    }

    function Ci(t, n, e, r) {
        var o = t.__transition__ || (t.__transition__ = {
                active: 0,
                count: 0
            }),
            a = o[e];
        if (!a) {
            var u = r.time;
            a = o[e] = {
                tween: new i,
                time: u,
                ease: r.ease,
                delay: r.delay,
                duration: r.duration
            }, ++o.count, yo.timer(function(r) {
                function i(r) {
                    return o.active > e ? l() : (o.active = e, a.event && a.event.start.call(t, c, n), a.tween.forEach(function(e, r) {
                        (r = r.call(t, c, n)) && d.push(r)
                    }), s(r) ? 1 : void bt(s, 0, u))
                }

                function s(r) {
                    if (o.active !== e) return l();
                    for (var i = (r - h) / p, u = f(i), s = d.length; s > 0;) d[--s].call(t, u);
                    return i >= 1 ? (a.event && a.event.end.call(t, c, n), l()) : void 0
                }

                function l() {
                    return --o.count ? delete o[e] : delete t.__transition__, 1
                }
                var c = t.__data__,
                    f = a.ease,
                    h = a.delay,
                    p = a.duration,
                    d = [];
                return r >= h ? i(r) : void bt(i, h, u)
            }, 0, u)
        }
    }

    function Ai(t, n) {
        t.attr("transform", function(t) {
            return "translate(" + n(t) + ",0)"
        })
    }

    function Di(t, n) {
        t.attr("transform", function(t) {
            return "translate(0," + n(t) + ")"
        })
    }

    function ji() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Li(t, n, e) {
        function r(n) {
            var e = t(n),
                r = o(e, 1);
            return r - n > n - e ? e : r
        }

        function i(e) {
            return n(e = t(new Ju(e - 1)), 1), e
        }

        function o(t, e) {
            return n(t = new Ju(+t), e), t
        }

        function a(t, r, o) {
            var a = i(t),
                u = [];
            if (o > 1)
                for (; r > a;) e(a) % o || u.push(new Date(+a)), n(a, 1);
            else
                for (; r > a;) u.push(new Date(+a)), n(a, 1);
            return u
        }

        function u(t, n, e) {
            try {
                Ju = ji;
                var r = new ji;
                return r._ = t, a(r, n, e)
            } finally {
                Ju = Date
            }
        }
        t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = a;
        var s = t.utc = qi(t);
        return s.floor = s, s.round = qi(r), s.ceil = qi(i), s.offset = qi(o), s.range = u, t
    }

    function qi(t) {
        return function(n, e) {
            try {
                Ju = ji;
                var r = new ji;
                return r._ = n, t(r, e)._
            } finally {
                Ju = Date
            }
        }
    }

    function Hi(t) {
        function n(n) {
            for (var r, i, o, a = [], u = -1, s = 0; ++u < e;) 37 === t.charCodeAt(u) && (a.push(t.substring(s, u)), null != (i = gs[r = t.charAt(++u)]) && (r = t.charAt(++u)), (o = ms[r]) && (r = o(n, null == i ? "e" === r ? " " : "0" : i)), a.push(r), s = u + 1);
            return a.push(t.substring(s, u)), a.join("")
        }
        var e = t.length;
        return n.parse = function(n) {
            var e = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                },
                r = zi(e, t, n, 0);
            if (r != n.length) return null;
            "p" in e && (e.H = e.H % 12 + 12 * e.p);
            var i = null != e.Z && Ju !== ji,
                o = new(i ? ji : Ju);
            return "j" in e ? o.setFullYear(e.y, 0, e.j) : "w" in e && ("W" in e || "U" in e) ? (o.setFullYear(e.y, 0, 1), o.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (o.getDay() + 5) % 7 : e.w + 7 * e.U - (o.getDay() + 6) % 7)) : o.setFullYear(e.y, e.m, e.d), o.setHours(e.H + Math.floor(e.Z / 100), e.M + e.Z % 100, e.S, e.L), i ? o._ : o
        }, n.toString = function() {
            return t
        }, n
    }

    function zi(t, n, e, r) {
        for (var i, o, a, u = 0, s = n.length, l = e.length; s > u;) {
            if (r >= l) return -1;
            if (i = n.charCodeAt(u++), 37 === i) {
                if (a = n.charAt(u++), o = vs[a in gs ? n.charAt(u++) : a], !o || (r = o(t, e, r)) < 0) return -1
            } else if (i != e.charCodeAt(r++)) return -1
        }
        return r
    }

    function Fi(t) {
        return new RegExp("^(?:" + t.map(yo.requote).join("|") + ")", "i")
    }

    function Oi(t) {
        for (var n = new i, e = -1, r = t.length; ++e < r;) n.set(t[e].toLowerCase(), e);
        return n
    }

    function Pi(t, n, e) {
        var r = 0 > t ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
        return r + (e > o ? new Array(e - o + 1).join(n) + i : i)
    }

    function Ri(t, n, e) {
        ss.lastIndex = 0;
        var r = ss.exec(n.substring(e));
        return r ? (t.w = ls.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Bi(t, n, e) {
        as.lastIndex = 0;
        var r = as.exec(n.substring(e));
        return r ? (t.w = us.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Ii(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }

    function Wi(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }

    function $i(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }

    function Xi(t, n, e) {
        hs.lastIndex = 0;
        var r = hs.exec(n.substring(e));
        return r ? (t.m = ps.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Ui(t, n, e) {
        cs.lastIndex = 0;
        var r = cs.exec(n.substring(e));
        return r ? (t.m = fs.get(r[0].toLowerCase()), e + r[0].length) : -1
    }

    function Yi(t, n, e) {
        return zi(t, ms.c.toString(), n, e)
    }

    function Vi(t, n, e) {
        return zi(t, ms.x.toString(), n, e)
    }

    function Zi(t, n, e) {
        return zi(t, ms.X.toString(), n, e)
    }

    function Ji(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }

    function Gi(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 2));
        return r ? (t.y = Qi(+r[0]), e + r[0].length) : -1
    }

    function Ki(t, n, e) {
        return /^[+-]\d{4}$/.test(n = n.substring(e, e + 5)) ? (t.Z = +n, e + 5) : -1
    }

    function Qi(t) {
        return t + (t > 68 ? 1900 : 2e3)
    }

    function to(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }

    function no(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }

    function eo(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 3));
        return r ? (t.j = +r[0], e + r[0].length) : -1
    }

    function ro(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }

    function io(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }

    function oo(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }

    function ao(t, n, e) {
        ys.lastIndex = 0;
        var r = ys.exec(n.substring(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }

    function uo(t, n, e) {
        var r = xs.get(n.substring(e, e += 2).toLowerCase());
        return null == r ? -1 : (t.p = r, e)
    }

    function so(t) {
        var n = t.getTimezoneOffset(),
            e = n > 0 ? "-" : "+",
            r = ~~(Math.abs(n) / 60),
            i = Math.abs(n) % 60;
        return e + Pi(r, "0", 2) + Pi(i, "0", 2)
    }

    function lo(t, n, e) {
        ds.lastIndex = 0;
        var r = ds.exec(n.substring(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function co(t) {
        function n(t) {
            try {
                Ju = ji;
                var n = new Ju;
                return n._ = t, e(n)
            } finally {
                Ju = Date
            }
        }
        var e = Hi(t);
        return n.parse = function(t) {
            try {
                Ju = ji;
                var n = e.parse(t);
                return n && n._
            } finally {
                Ju = Date
            }
        }, n.toString = e.toString, n
    }

    function fo(t) {
        return t.toISOString()
    }

    function ho(t, n, e) {
        function r(n) {
            return t(n)
        }

        function i(t, e) {
            var r = t[1] - t[0],
                i = r / e,
                o = yo.bisect(Ms, i);
            return o == Ms.length ? [n.year, ri(t.map(function(t) {
                return t / 31536e6
            }), e)[2]] : o ? n[i / Ms[o - 1] < Ms[o] / i ? o - 1 : o] : [ks, ri(t, e)[2]]
        }
        return r.invert = function(n) {
            return po(t.invert(n))
        }, r.domain = function(n) {
            return arguments.length ? (t.domain(n), r) : t.domain().map(po)
        }, r.nice = function(t, n) {
            function e(e) {
                return !isNaN(e) && !t.range(e, po(+e + 1), n).length
            }
            var o = r.domain(),
                a = Vr(o),
                u = null == t ? i(a, 10) : "number" == typeof t && i(a, t);
            return u && (t = u[0], n = u[1]), r.domain(Gr(o, n > 1 ? {
                floor: function(n) {
                    for (; e(n = t.floor(n));) n = po(n - 1);
                    return n
                },
                ceil: function(n) {
                    for (; e(n = t.ceil(n));) n = po(+n + 1);
                    return n
                }
            } : t))
        }, r.ticks = function(t, n) {
            var e = Vr(r.domain()),
                o = null == t ? i(e, 10) : "number" == typeof t ? i(e, t) : !t.range && [{
                    range: t
                }, n];
            return o && (t = o[0], n = o[1]), t.range(e[0], po(+e[1] + 1), n)
        }, r.tickFormat = function() {
            return e
        }, r.copy = function() {
            return ho(t.copy(), n, e)
        }, ni(r, t)
    }

    function po(t) {
        return new Date(t)
    }

    function go(t) {
        return function(n) {
            for (var e = t.length - 1, r = t[e]; !r[1](n);) r = t[--e];
            return r[0](n)
        }
    }

    function mo(t) {
        return JSON.parse(t.responseText)
    }

    function vo(t) {
        var n = Mo.createRange();
        return n.selectNode(Mo.body), n.createContextualFragment(t.responseText)
    }
    var yo = {
        version: "3.3.3"
    };
    Date.now || (Date.now = function() {
        return +new Date
    });
    var xo = [].slice,
        bo = function(t) {
            return xo.call(t)
        },
        Mo = document,
        wo = Mo.documentElement,
        _o = window;
    try {
        bo(wo.childNodes)[0].nodeType
    } catch (Eo) {
        bo = function(t) {
            for (var n = t.length, e = new Array(n); n--;) e[n] = t[n];
            return e
        }
    }
    try {
        Mo.createElement("div").style.setProperty("opacity", 0, "")
    } catch (ko) {
        var So = _o.Element.prototype,
            To = So.setAttribute,
            No = So.setAttributeNS,
            Co = _o.CSSStyleDeclaration.prototype,
            Ao = Co.setProperty;
        So.setAttribute = function(t, n) {
            To.call(this, t, n + "")
        }, So.setAttributeNS = function(t, n, e) {
            No.call(this, t, n, e + "")
        }, Co.setProperty = function(t, n, e) {
            Ao.call(this, t, n + "", e)
        }
    }
    yo.ascending = function(t, n) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, yo.descending = function(t, n) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }, yo.min = function(t, n) {
        var e, r, i = -1,
            o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null != (e = t[i]) && e >= e);) e = void 0;
            for (; ++i < o;) null != (r = t[i]) && e > r && (e = r)
        } else {
            for (; ++i < o && !(null != (e = n.call(t, t[i], i)) && e >= e);) e = void 0;
            for (; ++i < o;) null != (r = n.call(t, t[i], i)) && e > r && (e = r)
        }
        return e
    }, yo.max = function(t, n) {
        var e, r, i = -1,
            o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null != (e = t[i]) && e >= e);) e = void 0;
            for (; ++i < o;) null != (r = t[i]) && r > e && (e = r)
        } else {
            for (; ++i < o && !(null != (e = n.call(t, t[i], i)) && e >= e);) e = void 0;
            for (; ++i < o;) null != (r = n.call(t, t[i], i)) && r > e && (e = r)
        }
        return e
    }, yo.extent = function(t, n) {
        var e, r, i, o = -1,
            a = t.length;
        if (1 === arguments.length) {
            for (; ++o < a && !(null != (e = i = t[o]) && e >= e);) e = i = void 0;
            for (; ++o < a;) null != (r = t[o]) && (e > r && (e = r), r > i && (i = r))
        } else {
            for (; ++o < a && !(null != (e = i = n.call(t, t[o], o)) && e >= e);) e = void 0;
            for (; ++o < a;) null != (r = n.call(t, t[o], o)) && (e > r && (e = r), r > i && (i = r))
        }
        return [e, i]
    }, yo.sum = function(t, n) {
        var e, r = 0,
            i = t.length,
            o = -1;
        if (1 === arguments.length)
            for (; ++o < i;) isNaN(e = +t[o]) || (r += e);
        else
            for (; ++o < i;) isNaN(e = +n.call(t, t[o], o)) || (r += e);
        return r
    }, yo.mean = function(n, e) {
        var r, i = n.length,
            o = 0,
            a = -1,
            u = 0;
        if (1 === arguments.length)
            for (; ++a < i;) t(r = n[a]) && (o += (r - o) / ++u);
        else
            for (; ++a < i;) t(r = e.call(n, n[a], a)) && (o += (r - o) / ++u);
        return u ? o : void 0
    }, yo.quantile = function(t, n) {
        var e = (t.length - 1) * n + 1,
            r = Math.floor(e),
            i = +t[r - 1],
            o = e - r;
        return o ? i + o * (t[r] - i) : i
    }, yo.median = function(n, e) {
        return arguments.length > 1 && (n = n.map(e)), n = n.filter(t), n.length ? yo.quantile(n.sort(yo.ascending), .5) : void 0
    }, yo.bisector = function(t) {
        return {
            left: function(n, e, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); i > r;) {
                    var o = r + i >>> 1;
                    t.call(n, n[o], o) < e ? r = o + 1 : i = o
                }
                return r
            },
            right: function(n, e, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); i > r;) {
                    var o = r + i >>> 1;
                    e < t.call(n, n[o], o) ? i = o : r = o + 1
                }
                return r
            }
        }
    };
    var Do = yo.bisector(function(t) {
        return t
    });
    yo.bisectLeft = Do.left, yo.bisect = yo.bisectRight = Do.right, yo.shuffle = function(t) {
        for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
        return t
    }, yo.permute = function(t, n) {
        for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
        return r
    }, yo.pairs = function(t) {
        for (var n, e = 0, r = t.length - 1, i = t[0], o = new Array(0 > r ? 0 : r); r > e;) o[e] = [n = i, i = t[++e]];
        return o
    }, yo.zip = function() {
        if (!(i = arguments.length)) return [];
        for (var t = -1, e = yo.min(arguments, n), r = new Array(e); ++t < e;)
            for (var i, o = -1, a = r[t] = new Array(i); ++o < i;) a[o] = arguments[o][t];
        return r
    }, yo.transpose = function(t) {
        return yo.zip.apply(yo, t)
    }, yo.keys = function(t) {
        var n = [];
        for (var e in t) n.push(e);
        return n
    }, yo.values = function(t) {
        var n = [];
        for (var e in t) n.push(t[e]);
        return n
    }, yo.entries = function(t) {
        var n = [];
        for (var e in t) n.push({
            key: e,
            value: t[e]
        });
        return n
    }, yo.merge = function(t) {
        return Array.prototype.concat.apply([], t)
    }, yo.range = function(t, n, r) {
        if (arguments.length < 3 && (r = 1, arguments.length < 2 && (n = t, t = 0)), (n - t) / r === 1 / 0) throw new Error("infinite range");
        var i, o = [],
            a = e(Math.abs(r)),
            u = -1;
        if (t *= a, n *= a, r *= a, 0 > r)
            for (;
                (i = t + r * ++u) > n;) o.push(i / a);
        else
            for (;
                (i = t + r * ++u) < n;) o.push(i / a);
        return o
    }, yo.map = function(t) {
        var n = new i;
        if (t instanceof i) t.forEach(function(t, e) {
            n.set(t, e)
        });
        else
            for (var e in t) n.set(e, t[e]);
        return n
    }, r(i, {
        has: function(t) {
            return jo + t in this
        },
        get: function(t) {
            return this[jo + t]
        },
        set: function(t, n) {
            return this[jo + t] = n
        },
        remove: function(t) {
            return t = jo + t, t in this && delete this[t]
        },
        keys: function() {
            var t = [];
            return this.forEach(function(n) {
                t.push(n)
            }), t
        },
        values: function() {
            var t = [];
            return this.forEach(function(n, e) {
                t.push(e)
            }), t
        },
        entries: function() {
            var t = [];
            return this.forEach(function(n, e) {
                t.push({
                    key: n,
                    value: e
                })
            }), t
        },
        forEach: function(t) {
            for (var n in this) n.charCodeAt(0) === Lo && t.call(this, n.substring(1), this[n])
        }
    });
    var jo = "\x00",
        Lo = jo.charCodeAt(0);
    yo.nest = function() {
        function t(n, u, s) {
            if (s >= a.length) return r ? r.call(o, u) : e ? u.sort(e) : u;
            for (var l, c, f, h, p = -1, d = u.length, g = a[s++], m = new i; ++p < d;)(h = m.get(l = g(c = u[p]))) ? h.push(c) : m.set(l, [c]);
            return n ? (c = n(), f = function(e, r) {
                c.set(e, t(n, r, s))
            }) : (c = {}, f = function(e, r) {
                c[e] = t(n, r, s)
            }), m.forEach(f), c
        }

        function n(t, e) {
            if (e >= a.length) return t;
            var r = [],
                i = u[e++];
            return t.forEach(function(t, i) {
                r.push({
                    key: t,
                    values: n(i, e)
                })
            }), i ? r.sort(function(t, n) {
                return i(t.key, n.key)
            }) : r
        }
        var e, r, o = {},
            a = [],
            u = [];
        return o.map = function(n, e) {
            return t(e, n, 0)
        }, o.entries = function(e) {
            return n(t(yo.map, e, 0), 0)
        }, o.key = function(t) {
            return a.push(t), o
        }, o.sortKeys = function(t) {
            return u[a.length - 1] = t, o
        }, o.sortValues = function(t) {
            return e = t, o
        }, o.rollup = function(t) {
            return r = t, o
        }, o
    }, yo.set = function(t) {
        var n = new o;
        if (t)
            for (var e = 0, r = t.length; r > e; ++e) n.add(t[e]);
        return n
    }, r(o, {
        has: function(t) {
            return jo + t in this
        },
        add: function(t) {
            return this[jo + t] = !0, t
        },
        remove: function(t) {
            return t = jo + t, t in this && delete this[t]
        },
        values: function() {
            var t = [];
            return this.forEach(function(n) {
                t.push(n)
            }), t
        },
        forEach: function(t) {
            for (var n in this) n.charCodeAt(0) === Lo && t.call(this, n.substring(1));

        }
    }), yo.behavior = {}, yo.rebind = function(t, n) {
        for (var e, r = 1, i = arguments.length; ++r < i;) t[e = arguments[r]] = a(t, n, n[e]);
        return t
    };
    var qo = ["webkit", "ms", "moz", "Moz", "o", "O"];
    yo.dispatch = function() {
        for (var t = new l, n = -1, e = arguments.length; ++n < e;) t[arguments[n]] = c(t);
        return t
    }, l.prototype.on = function(t, n) {
        var e = t.indexOf("."),
            r = "";
        if (e >= 0 && (r = t.substring(e + 1), t = t.substring(0, e)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, n);
        if (2 === arguments.length) {
            if (null == n)
                for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
            return this
        }
    }, yo.event = null, yo.requote = function(t) {
        return t.replace(Ho, "\\$&")
    };
    var Ho = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        zo = {}.__proto__ ? function(t, n) {
            t.__proto__ = n
        } : function(t, n) {
            for (var e in n) t[e] = n[e]
        },
        Fo = function(t, n) {
            return n.querySelector(t)
        },
        Oo = function(t, n) {
            return n.querySelectorAll(t)
        },
        Po = wo[u(wo, "matchesSelector")],
        Ro = function(t, n) {
            return Po.call(t, n)
        };
    "function" == typeof Sizzle && (Fo = function(t, n) {
        return Sizzle(t, n)[0] || null
    }, Oo = function(t, n) {
        return Sizzle.uniqueSort(Sizzle(t, n))
    }, Ro = Sizzle.matchesSelector), yo.selection = function() {
        return $o
    };
    var Bo = yo.selection.prototype = [];
    Bo.select = function(t) {
        var n, e, r, i, o = [];
        t = g(t);
        for (var a = -1, u = this.length; ++a < u;) {
            o.push(n = []), n.parentNode = (r = this[a]).parentNode;
            for (var s = -1, l = r.length; ++s < l;)(i = r[s]) ? (n.push(e = t.call(i, i.__data__, s, a)), e && "__data__" in i && (e.__data__ = i.__data__)) : n.push(null)
        }
        return d(o)
    }, Bo.selectAll = function(t) {
        var n, e, r = [];
        t = m(t);
        for (var i = -1, o = this.length; ++i < o;)
            for (var a = this[i], u = -1, s = a.length; ++u < s;)(e = a[u]) && (r.push(n = bo(t.call(e, e.__data__, u, i))), n.parentNode = e);
        return d(r)
    };
    var Io = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    yo.ns = {
        prefix: Io,
        qualify: function(t) {
            var n = t.indexOf(":"),
                e = t;
            return n >= 0 && (e = t.substring(0, n), t = t.substring(n + 1)), Io.hasOwnProperty(e) ? {
                space: Io[e],
                local: t
            } : t
        }
    }, Bo.attr = function(t, n) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var e = this.node();
                return t = yo.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
            }
            for (n in t) this.each(v(n, t[n]));
            return this
        }
        return this.each(v(t, n))
    }, Bo.classed = function(t, n) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var e = this.node(),
                    r = (t = t.trim().split(/^|\s+/g)).length,
                    i = -1;
                if (n = e.classList) {
                    for (; ++i < r;)
                        if (!n.contains(t[i])) return !1
                } else
                    for (n = e.getAttribute("class"); ++i < r;)
                        if (!x(t[i]).test(n)) return !1; return !0
            }
            for (n in t) this.each(b(n, t[n]));
            return this
        }
        return this.each(b(t, n))
    }, Bo.style = function(t, n, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (n = "");
                for (e in t) this.each(w(e, t[e], n));
                return this
            }
            if (2 > r) return _o.getComputedStyle(this.node(), null).getPropertyValue(t);
            e = ""
        }
        return this.each(w(t, n, e))
    }, Bo.property = function(t, n) {
        if (arguments.length < 2) {
            if ("string" == typeof t) return this.node()[t];
            for (n in t) this.each(_(n, t[n]));
            return this
        }
        return this.each(_(t, n))
    }, Bo.text = function(t) {
        return arguments.length ? this.each("function" == typeof t ? function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        } : null == t ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = t
        }) : this.node().textContent
    }, Bo.html = function(t) {
        return arguments.length ? this.each("function" == typeof t ? function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        } : null == t ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = t
        }) : this.node().innerHTML
    }, Bo.append = function(t) {
        return t = E(t), this.select(function() {
            return this.appendChild(t.apply(this, arguments))
        })
    }, Bo.insert = function(t, n) {
        return t = E(t), n = g(n), this.select(function() {
            return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments))
        })
    }, Bo.remove = function() {
        return this.each(function() {
            var t = this.parentNode;
            t && t.removeChild(this)
        })
    }, Bo.data = function(t, n) {
        function e(t, e) {
            var r, o, a, u = t.length,
                f = e.length,
                h = Math.min(u, f),
                p = new Array(f),
                d = new Array(f),
                g = new Array(u);
            if (n) {
                var m, v = new i,
                    y = new i,
                    x = [];
                for (r = -1; ++r < u;) m = n.call(o = t[r], o.__data__, r), v.has(m) ? g[r] = o : v.set(m, o), x.push(m);
                for (r = -1; ++r < f;) m = n.call(e, a = e[r], r), (o = v.get(m)) ? (p[r] = o, o.__data__ = a) : y.has(m) || (d[r] = k(a)), y.set(m, a), v.remove(m);
                for (r = -1; ++r < u;) v.has(x[r]) && (g[r] = t[r])
            } else {
                for (r = -1; ++r < h;) o = t[r], a = e[r], o ? (o.__data__ = a, p[r] = o) : d[r] = k(a);
                for (; f > r; ++r) d[r] = k(e[r]);
                for (; u > r; ++r) g[r] = t[r]
            }
            d.update = p, d.parentNode = p.parentNode = g.parentNode = t.parentNode, s.push(d), l.push(p), c.push(g)
        }
        var r, o, a = -1,
            u = this.length;
        if (!arguments.length) {
            for (t = new Array(u = (r = this[0]).length); ++a < u;)(o = r[a]) && (t[a] = o.__data__);
            return t
        }
        var s = C([]),
            l = d([]),
            c = d([]);
        if ("function" == typeof t)
            for (; ++a < u;) e(r = this[a], t.call(r, r.parentNode.__data__, a));
        else
            for (; ++a < u;) e(r = this[a], t);
        return l.enter = function() {
            return s
        }, l.exit = function() {
            return c
        }, l
    }, Bo.datum = function(t) {
        return arguments.length ? this.property("__data__", t) : this.property("__data__")
    }, Bo.filter = function(t) {
        var n, e, r, i = [];
        "function" != typeof t && (t = S(t));
        for (var o = 0, a = this.length; a > o; o++) {
            i.push(n = []), n.parentNode = (e = this[o]).parentNode;
            for (var u = 0, s = e.length; s > u; u++)(r = e[u]) && t.call(r, r.__data__, u) && n.push(r)
        }
        return d(i)
    }, Bo.order = function() {
        for (var t = -1, n = this.length; ++t < n;)
            for (var e, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(e = r[i]) && (o && o !== e.nextSibling && o.parentNode.insertBefore(e, o), o = e);
        return this
    }, Bo.sort = function(t) {
        t = T.apply(this, arguments);
        for (var n = -1, e = this.length; ++n < e;) this[n].sort(t);
        return this.order()
    }, Bo.each = function(t) {
        return N(this, function(n, e, r) {
            t.call(n, n.__data__, e, r)
        })
    }, Bo.call = function(t) {
        var n = bo(arguments);
        return t.apply(n[0] = this, n), this
    }, Bo.empty = function() {
        return !this.node()
    }, Bo.node = function() {
        for (var t = 0, n = this.length; n > t; t++)
            for (var e = this[t], r = 0, i = e.length; i > r; r++) {
                var o = e[r];
                if (o) return o
            }
        return null
    }, Bo.size = function() {
        var t = 0;
        return this.each(function() {
            ++t
        }), t
    };
    var Wo = [];
    yo.selection.enter = C, yo.selection.enter.prototype = Wo, Wo.append = Bo.append, Wo.empty = Bo.empty, Wo.node = Bo.node, Wo.call = Bo.call, Wo.size = Bo.size, Wo.select = function(t) {
        for (var n, e, r, i, o, a = [], u = -1, s = this.length; ++u < s;) {
            r = (i = this[u]).update, a.push(n = []), n.parentNode = i.parentNode;
            for (var l = -1, c = i.length; ++l < c;)(o = i[l]) ? (n.push(r[l] = e = t.call(i.parentNode, o.__data__, l, u)), e.__data__ = o.__data__) : n.push(null)
        }
        return d(a)
    }, Wo.insert = function(t, n) {
        return arguments.length < 2 && (n = A(this)), Bo.insert.call(this, t, n)
    }, Bo.transition = function() {
        for (var t, n, e = Pu || ++$u, r = [], i = Ru || {
                time: Date.now(),
                ease: Le,
                delay: 0,
                duration: 250
            }, o = -1, a = this.length; ++o < a;) {
            r.push(t = []);
            for (var u = this[o], s = -1, l = u.length; ++s < l;)(n = u[s]) && Ci(n, s, e, i), t.push(n)
        }
        return Si(r, e)
    }, Bo.interrupt = function() {
        return this.each(D)
    }, yo.select = function(t) {
        var n = ["string" == typeof t ? Fo(t, Mo) : t];
        return n.parentNode = wo, d([n])
    }, yo.selectAll = function(t) {
        var n = bo("string" == typeof t ? Oo(t, Mo) : t);
        return n.parentNode = wo, d([n])
    };
    var $o = yo.select(wo);
    Bo.on = function(t, n, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (n = !1);
                for (e in t) this.each(j(e, t[e], n));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + t]) && r._;
            e = !1
        }
        return this.each(j(t, n, e))
    };
    var Xo = yo.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    Xo.forEach(function(t) {
        "on" + t in Mo && Xo.remove(t)
    });
    var Uo = u(wo.style, "userSelect"),
        Yo = 0;
    yo.mouse = function(t) {
        return z(t, h())
    };
    var Vo = /WebKit/.test(_o.navigator.userAgent) ? -1 : 0;
    yo.touches = function(t, n) {
        return arguments.length < 2 && (n = h().touches), n ? bo(n).map(function(n) {
            var e = z(t, n);
            return e.identifier = n.identifier, e
        }) : []
    }, yo.behavior.drag = function() {
        function t() {
            this.on("mousedown.drag", a).on("touchstart.drag", u)
        }

        function n() {
            return yo.event.changedTouches[0].identifier
        }

        function e(t, n) {
            return yo.touches(t).filter(function(t) {
                return t.identifier === n
            })[0]
        }

        function r(t, n, e, r) {
            return function() {
                function a() {
                    if (!c) return u();
                    var t = n(c, p),
                        e = t[0] - g[0],
                        r = t[1] - g[1];
                    m |= e | r, g = t, f({
                        type: "drag",
                        x: t[0] + s[0],
                        y: t[1] + s[1],
                        dx: e,
                        dy: r
                    })
                }

                function u() {
                    v.on(e + "." + d, null).on(r + "." + d, null), y(m && yo.event.target === h), f({
                        type: "dragend"
                    })
                }
                var s, l = this,
                    c = l.parentNode,
                    f = i.of(l, arguments),
                    h = yo.event.target,
                    p = t(),
                    d = null == p ? "drag" : "drag-" + p,
                    g = n(c, p),
                    m = 0,
                    v = yo.select(_o).on(e + "." + d, a).on(r + "." + d, u),
                    y = H();
                o ? (s = o.apply(l, arguments), s = [s.x - g[0], s.y - g[1]]) : s = [0, 0], f({
                    type: "dragstart"
                })
            }
        }
        var i = p(t, "drag", "dragstart", "dragend"),
            o = null,
            a = r(s, yo.mouse, "mousemove", "mouseup"),
            u = r(n, e, "touchmove", "touchend");
        return t.origin = function(n) {
            return arguments.length ? (o = n, t) : o
        }, yo.rebind(t, i, "on")
    };
    var Zo = Math.PI,
        Jo = 1e-6,
        Go = Jo * Jo,
        Ko = Zo / 180,
        Qo = 180 / Zo,
        ta = Math.SQRT2,
        na = 2,
        ea = 4;
    yo.interpolateZoom = function(t, n) {
        function e(t) {
            var n = t * y;
            if (v) {
                var e = B(g),
                    a = o / (na * h) * (e * I(ta * n + g) - R(g));
                return [r + a * l, i + a * c, o * e / B(ta * n + g)]
            }
            return [r + t * l, i + t * c, o * Math.exp(ta * n)]
        }
        var r = t[0],
            i = t[1],
            o = t[2],
            a = n[0],
            u = n[1],
            s = n[2],
            l = a - r,
            c = u - i,
            f = l * l + c * c,
            h = Math.sqrt(f),
            p = (s * s - o * o + ea * f) / (2 * o * na * h),
            d = (s * s - o * o - ea * f) / (2 * s * na * h),
            g = Math.log(Math.sqrt(p * p + 1) - p),
            m = Math.log(Math.sqrt(d * d + 1) - d),
            v = m - g,
            y = (v || Math.log(s / o)) / ta;
        return e.duration = 1e3 * y, e
    }, yo.behavior.zoom = function() {
        function t(t) {
            t.on(T, l).on(oa + ".zoom", h).on(N, d).on("dblclick.zoom", g).on(A, c)
        }

        function n(t) {
            return [(t[0] - E.x) / E.k, (t[1] - E.y) / E.k]
        }

        function e(t) {
            return [t[0] * E.k + E.x, t[1] * E.k + E.y]
        }

        function r(t) {
            E.k = Math.max(S[0], Math.min(S[1], t))
        }

        function i(t, n) {
            n = e(n), E.x += t[0] - n[0], E.y += t[1] - n[1]
        }

        function o() {
            M && M.domain(b.range().map(function(t) {
                return (t - E.x) / E.k
            }).map(b.invert)), _ && _.domain(w.range().map(function(t) {
                return (t - E.y) / E.k
            }).map(w.invert))
        }

        function a(t) {
            t({
                type: "zoomstart"
            })
        }

        function u(t) {
            o(), t({
                type: "zoom",
                scale: E.k,
                translate: [E.x, E.y]
            })
        }

        function s(t) {
            t({
                type: "zoomend"
            })
        }

        function l() {
            function t() {
                c = 1, i(yo.mouse(r), h), u(o)
            }

            function e() {
                f.on(N, _o === r ? d : null).on(C, null), p(c && yo.event.target === l), s(o)
            }
            var r = this,
                o = j.of(r, arguments),
                l = yo.event.target,
                c = 0,
                f = yo.select(_o).on(N, t).on(C, e),
                h = n(yo.mouse(r)),
                p = H();
            D.call(r), a(o)
        }

        function c() {
            function t() {
                var t = yo.touches(d);
                return p = E.k, t.forEach(function(t) {
                    t.identifier in m && (m[t.identifier] = n(t))
                }), t
            }

            function e() {
                for (var n = yo.event.changedTouches, e = 0, o = n.length; o > e; ++e) m[n[e].identifier] = null;
                var a = t(),
                    s = Date.now();
                if (1 === a.length) {
                    if (500 > s - x) {
                        var l = a[0],
                            c = m[l.identifier];
                        r(2 * E.k), i(l, c), f(), u(g)
                    }
                    x = s
                } else if (a.length > 1) {
                    var l = a[0],
                        h = a[1],
                        p = l[0] - h[0],
                        d = l[1] - h[1];
                    v = p * p + d * d
                }
            }

            function o() {
                for (var t, n, e, o, a = yo.touches(d), s = 0, l = a.length; l > s; ++s, o = null)
                    if (e = a[s], o = m[e.identifier]) {
                        if (n) break;
                        t = e, n = o
                    }
                if (o) {
                    var c = (c = e[0] - t[0]) * c + (c = e[1] - t[1]) * c,
                        f = v && Math.sqrt(c / v);
                    t = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], n = [(n[0] + o[0]) / 2, (n[1] + o[1]) / 2], r(f * p)
                }
                x = null, i(t, n), u(g)
            }

            function h() {
                if (yo.event.touches.length) {
                    for (var n = yo.event.changedTouches, e = 0, r = n.length; r > e; ++e) delete m[n[e].identifier];
                    for (var i in m) return void t()
                }
                w.on(b, null).on(M, null), _.on(T, l).on(A, c), k(), s(g)
            }
            var p, d = this,
                g = j.of(d, arguments),
                m = {},
                v = 0,
                y = yo.event.changedTouches[0].identifier,
                b = "touchmove.zoom-" + y,
                M = "touchend.zoom-" + y,
                w = yo.select(_o).on(b, o).on(M, h),
                _ = yo.select(d).on(T, null).on(A, e),
                k = H();
            D.call(d), e(), a(g)
        }

        function h() {
            var t = j.of(this, arguments);
            y ? clearTimeout(y) : (D.call(this), a(t)), y = setTimeout(function() {
                y = null, s(t)
            }, 50), f();
            var e = v || yo.mouse(this);
            m || (m = n(e)), r(Math.pow(2, .002 * ra()) * E.k), i(e, m), u(t)
        }

        function d() {
            m = null
        }

        function g() {
            var t = j.of(this, arguments),
                e = yo.mouse(this),
                o = n(e),
                l = Math.log(E.k) / Math.LN2;
            a(t), r(Math.pow(2, yo.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1)), i(e, o), u(t), s(t)
        }
        var m, v, y, x, b, M, w, _, E = {
                x: 0,
                y: 0,
                k: 1
            },
            k = [960, 500],
            S = ia,
            T = "mousedown.zoom",
            N = "mousemove.zoom",
            C = "mouseup.zoom",
            A = "touchstart.zoom",
            j = p(t, "zoomstart", "zoom", "zoomend");
        return t.event = function(t) {
            t.each(function() {
                var t = j.of(this, arguments),
                    n = E;
                Pu ? yo.select(this).transition().each("start.zoom", function() {
                    E = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, a(t)
                }).tween("zoom:zoom", function() {
                    var e = k[0],
                        r = k[1],
                        i = e / 2,
                        o = r / 2,
                        a = yo.interpolateZoom([(i - E.x) / E.k, (o - E.y) / E.k, e / E.k], [(i - n.x) / n.k, (o - n.y) / n.k, e / n.k]);
                    return function(n) {
                        var r = a(n),
                            s = e / r[2];
                        this.__chart__ = E = {
                            x: i - r[0] * s,
                            y: o - r[1] * s,
                            k: s
                        }, u(t)
                    }
                }).each("end.zoom", function() {
                    s(t)
                }) : (this.__chart__ = E, a(t), u(t), s(t))
            })
        }, t.translate = function(n) {
            return arguments.length ? (E = {
                x: +n[0],
                y: +n[1],
                k: E.k
            }, o(), t) : [E.x, E.y]
        }, t.scale = function(n) {
            return arguments.length ? (E = {
                x: E.x,
                y: E.y,
                k: +n
            }, o(), t) : E.k
        }, t.scaleExtent = function(n) {
            return arguments.length ? (S = null == n ? ia : [+n[0], +n[1]], t) : S
        }, t.center = function(n) {
            return arguments.length ? (v = n && [+n[0], +n[1]], t) : v
        }, t.size = function(n) {
            return arguments.length ? (k = n && [+n[0], +n[1]], t) : k
        }, t.x = function(n) {
            return arguments.length ? (M = n, b = n.copy(), E = {
                x: 0,
                y: 0,
                k: 1
            }, t) : M
        }, t.y = function(n) {
            return arguments.length ? (_ = n, w = n.copy(), E = {
                x: 0,
                y: 0,
                k: 1
            }, t) : _
        }, yo.rebind(t, j, "on")
    };
    var ra, ia = [0, 1 / 0],
        oa = "onwheel" in Mo ? (ra = function() {
            return -yo.event.deltaY * (yo.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in Mo ? (ra = function() {
            return yo.event.wheelDelta
        }, "mousewheel") : (ra = function() {
            return -yo.event.detail
        }, "MozMousePixelScroll");
    $.prototype.toString = function() {
        return this.rgb() + ""
    }, yo.hsl = function(t, n, e) {
        return 1 === arguments.length ? t instanceof U ? X(t.h, t.s, t.l) : lt("" + t, ct, X) : X(+t, +n, +e)
    };
    var aa = U.prototype = new $;
    aa.brighter = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), X(this.h, this.s, this.l / t)
    }, aa.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), X(this.h, this.s, t * this.l)
    }, aa.rgb = function() {
        return Y(this.h, this.s, this.l)
    }, yo.hcl = function(t, n, e) {
        return 1 === arguments.length ? t instanceof Z ? V(t.h, t.c, t.l) : t instanceof K ? tt(t.l, t.a, t.b) : tt((t = ft((t = yo.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : V(+t, +n, +e)
    };
    var ua = Z.prototype = new $;
    ua.brighter = function(t) {
        return V(this.h, this.c, Math.min(100, this.l + sa * (arguments.length ? t : 1)))
    }, ua.darker = function(t) {
        return V(this.h, this.c, Math.max(0, this.l - sa * (arguments.length ? t : 1)))
    }, ua.rgb = function() {
        return J(this.h, this.c, this.l).rgb()
    }, yo.lab = function(t, n, e) {
        return 1 === arguments.length ? t instanceof K ? G(t.l, t.a, t.b) : t instanceof Z ? J(t.l, t.c, t.h) : ft((t = yo.rgb(t)).r, t.g, t.b) : G(+t, +n, +e)
    };
    var sa = 18,
        la = .95047,
        ca = 1,
        fa = 1.08883,
        ha = K.prototype = new $;
    ha.brighter = function(t) {
        return G(Math.min(100, this.l + sa * (arguments.length ? t : 1)), this.a, this.b)
    }, ha.darker = function(t) {
        return G(Math.max(0, this.l - sa * (arguments.length ? t : 1)), this.a, this.b)
    }, ha.rgb = function() {
        return Q(this.l, this.a, this.b)
    }, yo.rgb = function(t, n, e) {
        return 1 === arguments.length ? t instanceof ut ? at(t.r, t.g, t.b) : lt("" + t, at, Y) : at(~~t, ~~n, ~~e)
    };
    var pa = ut.prototype = new $;
    pa.brighter = function(t) {
        t = Math.pow(.7, arguments.length ? t : 1);
        var n = this.r,
            e = this.g,
            r = this.b,
            i = 30;
        return n || e || r ? (n && i > n && (n = i), e && i > e && (e = i), r && i > r && (r = i), at(Math.min(255, ~~(n / t)), Math.min(255, ~~(e / t)), Math.min(255, ~~(r / t)))) : at(i, i, i)
    }, pa.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), at(~~(t * this.r), ~~(t * this.g), ~~(t * this.b))
    }, pa.hsl = function() {
        return ct(this.r, this.g, this.b)
    }, pa.toString = function() {
        return "#" + st(this.r) + st(this.g) + st(this.b)
    };
    var da = yo.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    da.forEach(function(t, n) {
        da.set(t, it(n))
    }), yo.functor = dt, yo.xhr = mt(gt), yo.dsv = function(t, n) {
        function e(t, e, o) {
            arguments.length < 3 && (o = e, e = null);
            var a = yo.xhr(t, n, o);
            return a.row = function(t) {
                return arguments.length ? a.response(null == (e = t) ? r : i(t)) : e
            }, a.row(e)
        }

        function r(t) {
            return e.parse(t.responseText)
        }

        function i(t) {
            return function(n) {
                return e.parse(n.responseText, t)
            }
        }

        function a(n) {
            return n.map(u).join(t)
        }

        function u(t) {
            return s.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
        }
        var s = new RegExp('["' + t + "\n]"),
            l = t.charCodeAt(0);
        return e.parse = function(t, n) {
            var r;
            return e.parseRows(t, function(t, e) {
                if (r) return r(t, e - 1);
                var i = new Function("d", "return {" + t.map(function(t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
                }).join(",") + "}");
                r = n ? function(t, e) {
                    return n(i(t), e)
                } : i
            })
        }, e.parseRows = function(t, n) {
            function e() {
                if (c >= s) return a;
                if (i) return i = !1, o;
                var n = c;
                if (34 === t.charCodeAt(n)) {
                    for (var e = n; e++ < s;)
                        if (34 === t.charCodeAt(e)) {
                            if (34 !== t.charCodeAt(e + 1)) break;
                            ++e
                        }
                    c = e + 2;
                    var r = t.charCodeAt(e + 1);
                    return 13 === r ? (i = !0, 10 === t.charCodeAt(e + 2) && ++c) : 10 === r && (i = !0), t.substring(n + 1, e).replace(/""/g, '"')
                }
                for (; s > c;) {
                    var r = t.charCodeAt(c++),
                        u = 1;
                    if (10 === r) i = !0;
                    else if (13 === r) i = !0, 10 === t.charCodeAt(c) && (++c, ++u);
                    else if (r !== l) continue;
                    return t.substring(n, c - u)
                }
                return t.substring(n)
            }
            for (var r, i, o = {}, a = {}, u = [], s = t.length, c = 0, f = 0;
                (r = e()) !== a;) {
                for (var h = []; r !== o && r !== a;) h.push(r), r = e();
                (!n || (h = n(h, f++))) && u.push(h)
            }
            return u
        }, e.format = function(n) {
            if (Array.isArray(n[0])) return e.formatRows(n);
            var r = new o,
                i = [];
            return n.forEach(function(t) {
                for (var n in t) r.has(n) || i.push(r.add(n))
            }), [i.map(u).join(t)].concat(n.map(function(n) {
                return i.map(function(t) {
                    return u(n[t])
                }).join(t)
            })).join("\n")
        }, e.formatRows = function(t) {
            return t.map(a).join("\n")
        }, e
    }, yo.csv = yo.dsv(",", "text/csv"), yo.tsv = yo.dsv("	", "text/tab-separated-values");
    var ga, ma, va, ya, xa, ba = _o[u(_o, "requestAnimationFrame")] || function(t) {
        setTimeout(t, 17)
    };
    yo.timer = function(t, n, e) {
        var r = arguments.length;
        2 > r && (n = 0), 3 > r && (e = Date.now());
        var i = e + n,
            o = {
                callback: t,
                time: i,
                next: null
            };
        ma ? ma.next = o : ga = o, ma = o, va || (ya = clearTimeout(ya), va = 1, ba(xt))
    }, yo.timer.flush = function() {
        Mt(), wt()
    };
    var Ma = ".",
        wa = ",",
        _a = [3, 3],
        Ea = "$",
        ka = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(_t);
    yo.formatPrefix = function(t, n) {
        var e = 0;
        return t && (0 > t && (t *= -1), n && (t = yo.round(t, Et(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3)))), ka[8 + e / 3]
    }, yo.round = function(t, n) {
        return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t)
    }, yo.format = function(t) {
        var n = Sa.exec(t),
            e = n[1] || " ",
            r = n[2] || ">",
            i = n[3] || "",
            o = n[4] || "",
            a = n[5],
            u = +n[6],
            s = n[7],
            l = n[8],
            c = n[9],
            f = 1,
            h = "",
            p = !1;
        switch (l && (l = +l.substring(1)), (a || "0" === e && "=" === r) && (a = e = "0", r = "=", s && (u -= Math.floor((u - 1) / 4))), c) {
            case "n":
                s = !0, c = "g";
                break;
            case "%":
                f = 100, h = "%", c = "f";
                break;
            case "p":
                f = 100, h = "%", c = "r";
                break;
            case "b":
            case "o":
            case "x":
            case "X":
                "#" === o && (o = "0" + c.toLowerCase());
            case "c":
            case "d":
                p = !0, l = 0;
                break;
            case "s":
                f = -1, c = "r"
        }
        "#" === o ? o = "" : "$" === o && (o = Ea), "r" != c || l || (c = "g"), null != l && ("g" == c ? l = Math.max(1, Math.min(21, l)) : ("e" == c || "f" == c) && (l = Math.max(0, Math.min(20, l)))), c = Ta.get(c) || kt;
        var d = a && s;
        return function(t) {
            if (p && t % 1) return "";
            var n = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : i;
            if (0 > f) {
                var g = yo.formatPrefix(t, l);
                t = g.scale(t), h = g.symbol
            } else t *= f;
            t = c(t, l);
            var m = t.lastIndexOf("."),
                v = 0 > m ? t : t.substring(0, m),
                y = 0 > m ? "" : Ma + t.substring(m + 1);
            !a && s && (v = Na(v));
            var x = o.length + v.length + y.length + (d ? 0 : n.length),
                b = u > x ? new Array(x = u - x + 1).join(e) : "";
            return d && (v = Na(b + v)), n += o, t = v + y, ("<" === r ? n + t + b : ">" === r ? b + n + t : "^" === r ? b.substring(0, x >>= 1) + n + t + b.substring(x) : n + (d ? t : b + t)) + h
        }
    };
    var Sa = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        Ta = yo.map({
            b: function(t) {
                return t.toString(2)
            },
            c: function(t) {
                return String.fromCharCode(t)
            },
            o: function(t) {
                return t.toString(8)
            },
            x: function(t) {
                return t.toString(16)
            },
            X: function(t) {
                return t.toString(16).toUpperCase()
            },
            g: function(t, n) {
                return t.toPrecision(n)
            },
            e: function(t, n) {
                return t.toExponential(n)
            },
            f: function(t, n) {
                return t.toFixed(n)
            },
            r: function(t, n) {
                return (t = yo.round(t, Et(t, n))).toFixed(Math.max(0, Math.min(20, Et(t * (1 + 1e-15), n))))
            }
        }),
        Na = gt;
    if (_a) {
        var Ca = _a.length;
        Na = function(t) {
            for (var n = t.length, e = [], r = 0, i = _a[0]; n > 0 && i > 0;) e.push(t.substring(n -= i, n + i)), i = _a[r = (r + 1) % Ca];
            return e.reverse().join(wa)
        }
    }
    yo.geo = {}, St.prototype = {
        s: 0,
        t: 0,
        add: function(t) {
            Tt(t, this.t, Aa), Tt(Aa.s, this.s, this), this.s ? this.t += Aa.t : this.s = Aa.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var Aa = new St;
    yo.geo.stream = function(t, n) {
        t && Da.hasOwnProperty(t.type) ? Da[t.type](t, n) : Nt(t, n)
    };
    var Da = {
            Feature: function(t, n) {
                Nt(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;) Nt(e[r].geometry, n)
            }
        },
        ja = {
            Sphere: function(t, n) {
                n.sphere()
            },
            Point: function(t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
            },
            LineString: function(t, n) {
                Ct(t.coordinates, n, 0)
            },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Ct(e[r], n, 0)
            },
            Polygon: function(t, n) {
                At(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) At(e[r], n)
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;) Nt(e[r], n)
            }
        };
    yo.geo.area = function(t) {
        return La = 0, yo.geo.stream(t, Ha), La
    };
    var La, qa = new St,
        Ha = {
            sphere: function() {
                La += 4 * Zo
            },
            point: s,
            lineStart: s,
            lineEnd: s,
            polygonStart: function() {
                qa.reset(), Ha.lineStart = Dt
            },
            polygonEnd: function() {
                var t = 2 * qa;
                La += 0 > t ? 4 * Zo + t : t, Ha.lineStart = Ha.lineEnd = Ha.point = s
            }
        };
    yo.geo.bounds = function() {
        function t(t, n) {
            x.push(b = [c = t, h = t]), f > n && (f = n), n > p && (p = n)
        }

        function n(n, e) {
            var r = jt([n * Ko, e * Ko]);
            if (v) {
                var i = qt(v, r),
                    o = [i[1], -i[0], 0],
                    a = qt(o, i);
                Ft(a), a = Ot(a);
                var s = n - d,
                    l = s > 0 ? 1 : -1,
                    g = a[0] * Qo * l,
                    m = Math.abs(s) > 180;
                if (m ^ (g > l * d && l * n > g)) {
                    var y = a[1] * Qo;
                    y > p && (p = y)
                } else if (g = (g + 360) % 360 - 180, m ^ (g > l * d && l * n > g)) {
                    var y = -a[1] * Qo;
                    f > y && (f = y)
                } else f > e && (f = e), e > p && (p = e);
                m ? d > n ? u(c, n) > u(c, h) && (h = n) : u(n, h) > u(c, h) && (c = n) : h >= c ? (c > n && (c = n), n > h && (h = n)) : n > d ? u(c, n) > u(c, h) && (h = n) : u(n, h) > u(c, h) && (c = n)
            } else t(n, e);
            v = r, d = n
        }

        function e() {
            M.point = n
        }

        function r() {
            b[0] = c, b[1] = h, M.point = t, v = null
        }

        function i(t, e) {
            if (v) {
                var r = t - d;
                y += Math.abs(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else g = t, m = e;
            Ha.point(t, e), n(t, e)
        }

        function o() {
            Ha.lineStart()
        }

        function a() {
            i(g, m), Ha.lineEnd(), Math.abs(y) > Jo && (c = -(h = 180)), b[0] = c, b[1] = h, v = null
        }

        function u(t, n) {
            return (n -= t) < 0 ? n + 360 : n
        }

        function s(t, n) {
            return t[0] - n[0]
        }

        function l(t, n) {
            return n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
        }
        var c, f, h, p, d, g, m, v, y, x, b, M = {
            point: t,
            lineStart: e,
            lineEnd: r,
            polygonStart: function() {
                M.point = i, M.lineStart = o, M.lineEnd = a, y = 0, Ha.polygonStart()
            },
            polygonEnd: function() {
                Ha.polygonEnd(), M.point = t, M.lineStart = e, M.lineEnd = r, 0 > qa ? (c = -(h = 180), f = -(p = 90)) : y > Jo ? p = 90 : -Jo > y && (f = -90), b[0] = c, b[1] = h
            }
        };
        return function(t) {
            p = h = -(c = f = 1 / 0), x = [], yo.geo.stream(t, M);
            var n = x.length;
            if (n) {
                x.sort(s);
                for (var e, r = 1, i = x[0], o = [i]; n > r; ++r) e = x[r], l(e[0], i) || l(e[1], i) ? (u(i[0], e[1]) > u(i[0], i[1]) && (i[1] = e[1]), u(e[0], i[1]) > u(i[0], i[1]) && (i[0] = e[0])) : o.push(i = e);
                for (var a, e, d = -(1 / 0), n = o.length - 1, r = 0, i = o[n]; n >= r; i = e, ++r) e = o[r], (a = u(i[1], e[0])) > d && (d = a, c = e[0], h = i[1])
            }
            return x = b = null, c === 1 / 0 || f === 1 / 0 ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [c, f],
                [h, p]
            ]
        }
    }(), yo.geo.centroid = function(t) {
        za = Fa = Oa = Pa = Ra = Ba = Ia = Wa = $a = Xa = Ua = 0, yo.geo.stream(t, Ya);
        var n = $a,
            e = Xa,
            r = Ua,
            i = n * n + e * e + r * r;
        return Go > i && (n = Ba, e = Ia, r = Wa, Jo > Fa && (n = Oa, e = Pa, r = Ra), i = n * n + e * e + r * r, Go > i) ? [0 / 0, 0 / 0] : [Math.atan2(e, n) * Qo, P(r / Math.sqrt(i)) * Qo]
    };
    var za, Fa, Oa, Pa, Ra, Ba, Ia, Wa, $a, Xa, Ua, Ya = {
            sphere: s,
            point: Rt,
            lineStart: It,
            lineEnd: Wt,
            polygonStart: function() {
                Ya.lineStart = $t
            },
            polygonEnd: function() {
                Ya.lineStart = It
            }
        },
        Va = Vt(Xt, Qt, nn, en),
        Za = [-Zo, 0],
        Ja = 1e9;
    yo.geo.clipExtent = function() {
        var t, n, e, r, i, o, a = {
            stream: function(t) {
                return i && (i.valid = !1), i = o(t), i.valid = !0, i
            },
            extent: function(u) {
                return arguments.length ? (o = on(t = +u[0][0], n = +u[0][1], e = +u[1][0], r = +u[1][1]), i && (i.valid = !1, i = null), a) : [
                    [t, n],
                    [e, r]
                ]
            }
        };
        return a.extent([
            [0, 0],
            [960, 500]
        ])
    }, (yo.geo.conicEqualArea = function() {
        return sn(ln)
    }).raw = ln, yo.geo.albers = function() {
        return yo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, yo.geo.albersUsa = function() {
        function t(t) {
            var o = t[0],
                a = t[1];
            return n = null, e(o, a), n || (r(o, a), n) || i(o, a), n
        }
        var n, e, r, i, o = yo.geo.albers(),
            a = yo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            u = yo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            s = {
                point: function(t, e) {
                    n = [t, e]
                }
            };
        return t.invert = function(t) {
            var n = o.scale(),
                e = o.translate(),
                r = (t[0] - e[0]) / n,
                i = (t[1] - e[1]) / n;
            return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? a : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? u : o).invert(t)
        }, t.stream = function(t) {
            var n = o.stream(t),
                e = a.stream(t),
                r = u.stream(t);
            return {
                point: function(t, i) {
                    n.point(t, i), e.point(t, i), r.point(t, i)
                },
                sphere: function() {
                    n.sphere(), e.sphere(), r.sphere()
                },
                lineStart: function() {
                    n.lineStart(), e.lineStart(), r.lineStart()
                },
                lineEnd: function() {
                    n.lineEnd(), e.lineEnd(), r.lineEnd()
                },
                polygonStart: function() {
                    n.polygonStart(), e.polygonStart(), r.polygonStart()
                },
                polygonEnd: function() {
                    n.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                }
            }
        }, t.precision = function(n) {
            return arguments.length ? (o.precision(n), a.precision(n), u.precision(n), t) : o.precision()
        }, t.scale = function(n) {
            return arguments.length ? (o.scale(n), a.scale(.35 * n), u.scale(n), t.translate(o.translate())) : o.scale()
        }, t.translate = function(n) {
            if (!arguments.length) return o.translate();
            var l = o.scale(),
                c = +n[0],
                f = +n[1];
            return e = o.translate(n).clipExtent([
                [c - .455 * l, f - .238 * l],
                [c + .455 * l, f + .238 * l]
            ]).stream(s).point, r = a.translate([c - .307 * l, f + .201 * l]).clipExtent([
                [c - .425 * l + Jo, f + .12 * l + Jo],
                [c - .214 * l - Jo, f + .234 * l - Jo]
            ]).stream(s).point, i = u.translate([c - .205 * l, f + .212 * l]).clipExtent([
                [c - .214 * l + Jo, f + .166 * l + Jo],
                [c - .115 * l - Jo, f + .234 * l - Jo]
            ]).stream(s).point, t
        }, t.scale(1070)
    };
    var Ga, Ka, Qa, tu, nu, eu, ru = {
            point: s,
            lineStart: s,
            lineEnd: s,
            polygonStart: function() {
                Ka = 0, ru.lineStart = cn
            },
            polygonEnd: function() {
                ru.lineStart = ru.lineEnd = ru.point = s, Ga += Math.abs(Ka / 2)
            }
        },
        iu = {
            point: fn,
            lineStart: s,
            lineEnd: s,
            polygonStart: s,
            polygonEnd: s
        },
        ou = {
            point: dn,
            lineStart: gn,
            lineEnd: mn,
            polygonStart: function() {
                ou.lineStart = vn
            },
            polygonEnd: function() {
                ou.point = dn, ou.lineStart = gn, ou.lineEnd = mn
            }
        };
    yo.geo.transform = function(t) {
        return {
            stream: function(n) {
                var e = new bn(n);
                for (var r in t) e[r] = t[r];
                return e
            }
        }
    }, bn.prototype = {
        point: function(t, n) {
            this.stream.point(t, n)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, yo.geo.path = function() {
        function t(t) {
            return t && ("function" == typeof u && o.pointRadius(+u.apply(this, arguments)), a && a.valid || (a = i(o)), yo.geo.stream(t, a)), o.result()
        }

        function n() {
            return a = null, t
        }
        var e, r, i, o, a, u = 4.5;
        return t.area = function(t) {
            return Ga = 0, yo.geo.stream(t, i(ru)), Ga
        }, t.centroid = function(t) {
            return Oa = Pa = Ra = Ba = Ia = Wa = $a = Xa = Ua = 0, yo.geo.stream(t, i(ou)), Ua ? [$a / Ua, Xa / Ua] : Wa ? [Ba / Wa, Ia / Wa] : Ra ? [Oa / Ra, Pa / Ra] : [0 / 0, 0 / 0]
        }, t.bounds = function(t) {
            return nu = eu = -(Qa = tu = 1 / 0), yo.geo.stream(t, i(iu)), [
                [Qa, tu],
                [nu, eu]
            ]
        }, t.projection = function(t) {
            return arguments.length ? (i = (e = t) ? t.stream || Mn(t) : gt, n()) : e
        }, t.context = function(t) {
            return arguments.length ? (o = null == (r = t) ? new hn : new yn(t), "function" != typeof u && o.pointRadius(u), n()) : r
        }, t.pointRadius = function(n) {
            return arguments.length ? (u = "function" == typeof n ? n : (o.pointRadius(+n), +n), t) : u
        }, t.projection(yo.geo.albersUsa()).context(null)
    }, yo.geo.projection = wn, yo.geo.projectionMutator = _n, (yo.geo.equirectangular = function() {
        return wn(kn)
    }).raw = kn.invert = kn, yo.geo.rotation = function(t) {
        function n(n) {
            return n = t(n[0] * Ko, n[1] * Ko), n[0] *= Qo, n[1] *= Qo, n
        }
        return t = Sn(t[0] % 360 * Ko, t[1] * Ko, t.length > 2 ? t[2] * Ko : 0), n.invert = function(n) {
            return n = t.invert(n[0] * Ko, n[1] * Ko), n[0] *= Qo, n[1] *= Qo, n
        }, n
    }, yo.geo.circle = function() {
        function t() {
            var t = "function" == typeof r ? r.apply(this, arguments) : r,
                n = Sn(-t[0] * Ko, -t[1] * Ko, 0).invert,
                i = [];
            return e(null, null, 1, {
                point: function(t, e) {
                    i.push(t = n(t, e)), t[0] *= Qo, t[1] *= Qo
                }
            }), {
                type: "Polygon",
                coordinates: [i]
            }
        }
        var n, e, r = [0, 0],
            i = 6;
        return t.origin = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.angle = function(r) {
            return arguments.length ? (e = An((n = +r) * Ko, i * Ko), t) : n
        }, t.precision = function(r) {
            return arguments.length ? (e = An(n * Ko, (i = +r) * Ko), t) : i
        }, t.angle(90)
    }, yo.geo.distance = function(t, n) {
        var e, r = (n[0] - t[0]) * Ko,
            i = t[1] * Ko,
            o = n[1] * Ko,
            a = Math.sin(r),
            u = Math.cos(r),
            s = Math.sin(i),
            l = Math.cos(i),
            c = Math.sin(o),
            f = Math.cos(o);
        return Math.atan2(Math.sqrt((e = f * a) * e + (e = l * c - s * f * u) * e), s * c + l * f * u)
    }, yo.geo.graticule = function() {
        function t() {
            return {
                type: "MultiLineString",
                coordinates: n()
            }
        }

        function n() {
            return yo.range(Math.ceil(o / m) * m, i, m).map(h).concat(yo.range(Math.ceil(l / v) * v, s, v).map(p)).concat(yo.range(Math.ceil(r / d) * d, e, d).filter(function(t) {
                return Math.abs(t % m) > Jo
            }).map(c)).concat(yo.range(Math.ceil(u / g) * g, a, g).filter(function(t) {
                return Math.abs(t % v) > Jo
            }).map(f))
        }
        var e, r, i, o, a, u, s, l, c, f, h, p, d = 10,
            g = d,
            m = 90,
            v = 360,
            y = 2.5;
        return t.lines = function() {
            return n().map(function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            })
        }, t.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(o).concat(p(s).slice(1), h(i).reverse().slice(1), p(l).reverse().slice(1))]
            }
        }, t.extent = function(n) {
            return arguments.length ? t.majorExtent(n).minorExtent(n) : t.minorExtent()
        }, t.majorExtent = function(n) {
            return arguments.length ? (o = +n[0][0], i = +n[1][0], l = +n[0][1], s = +n[1][1], o > i && (n = o, o = i, i = n), l > s && (n = l, l = s, s = n), t.precision(y)) : [
                [o, l],
                [i, s]
            ]
        }, t.minorExtent = function(n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], a = +n[1][1], r > e && (n = r, r = e, e = n), u > a && (n = u, u = a, a = n), t.precision(y)) : [
                [r, u],
                [e, a]
            ]
        }, t.step = function(n) {
            return arguments.length ? t.majorStep(n).minorStep(n) : t.minorStep()
        }, t.majorStep = function(n) {
            return arguments.length ? (m = +n[0], v = +n[1], t) : [m, v]
        }, t.minorStep = function(n) {
            return arguments.length ? (d = +n[0], g = +n[1], t) : [d, g]
        }, t.precision = function(n) {
            return arguments.length ? (y = +n, c = jn(u, a, 90), f = Ln(r, e, y), h = jn(l, s, 90), p = Ln(o, i, y), t) : y
        }, t.majorExtent([
            [-180, -90 + Jo],
            [180, 90 - Jo]
        ]).minorExtent([
            [-180, -80 - Jo],
            [180, 80 + Jo]
        ])
    }, yo.geo.greatArc = function() {
        function t() {
            return {
                type: "LineString",
                coordinates: [n || r.apply(this, arguments), e || i.apply(this, arguments)]
            }
        }
        var n, e, r = qn,
            i = Hn;
        return t.distance = function() {
            return yo.geo.distance(n || r.apply(this, arguments), e || i.apply(this, arguments))
        }, t.source = function(e) {
            return arguments.length ? (r = e, n = "function" == typeof e ? null : e, t) : r
        }, t.target = function(n) {
            return arguments.length ? (i = n, e = "function" == typeof n ? null : n, t) : i
        }, t.precision = function() {
            return arguments.length ? t : 0
        }, t
    }, yo.geo.interpolate = function(t, n) {
        return zn(t[0] * Ko, t[1] * Ko, n[0] * Ko, n[1] * Ko)
    }, yo.geo.length = function(t) {
        return au = 0, yo.geo.stream(t, uu), au
    };
    var au, uu = {
            sphere: s,
            point: s,
            lineStart: Fn,
            lineEnd: s,
            polygonStart: s,
            polygonEnd: s
        },
        su = On(function(t) {
            return Math.sqrt(2 / (1 + t))
        }, function(t) {
            return 2 * Math.asin(t / 2)
        });
    (yo.geo.azimuthalEqualArea = function() {
        return wn(su);

    }).raw = su;
    var lu = On(function(t) {
        var n = Math.acos(t);
        return n && n / Math.sin(n)
    }, gt);
    (yo.geo.azimuthalEquidistant = function() {
        return wn(lu)
    }).raw = lu, (yo.geo.conicConformal = function() {
        return sn(Pn)
    }).raw = Pn, (yo.geo.conicEquidistant = function() {
        return sn(Rn)
    }).raw = Rn;
    var cu = On(function(t) {
        return 1 / t
    }, Math.atan);
    (yo.geo.gnomonic = function() {
        return wn(cu)
    }).raw = cu, Bn.invert = function(t, n) {
        return [t, 2 * Math.atan(Math.exp(n)) - Zo / 2]
    }, (yo.geo.mercator = function() {
        return In(Bn)
    }).raw = Bn;
    var fu = On(function() {
        return 1
    }, Math.asin);
    (yo.geo.orthographic = function() {
        return wn(fu)
    }).raw = fu;
    var hu = On(function(t) {
        return 1 / (1 + t)
    }, function(t) {
        return 2 * Math.atan(t)
    });
    (yo.geo.stereographic = function() {
        return wn(hu)
    }).raw = hu, Wn.invert = function(t, n) {
        return [Math.atan2(R(t), Math.cos(n)), P(Math.sin(n) / B(t))]
    }, (yo.geo.transverseMercator = function() {
        return In(Wn)
    }).raw = Wn, yo.geom = {}, yo.svg = {}, yo.svg.line = function() {
        return $n(gt)
    };
    var pu = yo.map({
        linear: Yn,
        "linear-closed": Vn,
        step: Zn,
        "step-before": Jn,
        "step-after": Gn,
        basis: re,
        "basis-open": ie,
        "basis-closed": oe,
        bundle: ae,
        cardinal: te,
        "cardinal-open": Kn,
        "cardinal-closed": Qn,
        monotone: he
    });
    pu.forEach(function(t, n) {
        n.key = t, n.closed = /-closed$/.test(t)
    });
    var du = [0, 2 / 3, 1 / 3, 0],
        gu = [0, 1 / 3, 2 / 3, 0],
        mu = [0, 1 / 6, 2 / 3, 1 / 6];
    yo.geom.hull = function(t) {
        function n(t) {
            if (t.length < 3) return [];
            var n, i, o, a, u, s, l, c, f, h, p, d, g = dt(e),
                m = dt(r),
                v = t.length,
                y = v - 1,
                x = [],
                b = [],
                M = 0;
            if (g === Xn && r === Un) n = t;
            else
                for (o = 0, n = []; v > o; ++o) n.push([+g.call(this, i = t[o], o), +m.call(this, i, o)]);
            for (o = 1; v > o; ++o)(n[o][1] < n[M][1] || n[o][1] == n[M][1] && n[o][0] < n[M][0]) && (M = o);
            for (o = 0; v > o; ++o) o !== M && (s = n[o][1] - n[M][1], u = n[o][0] - n[M][0], x.push({
                angle: Math.atan2(s, u),
                index: o
            }));
            for (x.sort(function(t, n) {
                    return t.angle - n.angle
                }), p = x[0].angle, h = x[0].index, f = 0, o = 1; y > o; ++o) {
                if (a = x[o].index, p == x[o].angle) {
                    if (u = n[h][0] - n[M][0], s = n[h][1] - n[M][1], l = n[a][0] - n[M][0], c = n[a][1] - n[M][1], u * u + s * s >= l * l + c * c) {
                        x[o].index = -1;
                        continue
                    }
                    x[f].index = -1
                }
                p = x[o].angle, f = o, h = a
            }
            for (b.push(M), o = 0, a = 0; 2 > o; ++a) x[a].index > -1 && (b.push(x[a].index), o++);
            for (d = b.length; y > a; ++a)
                if (!(x[a].index < 0)) {
                    for (; !pe(b[d - 2], b[d - 1], x[a].index, n);) --d;
                    b[d++] = x[a].index
                }
            var w = [];
            for (o = d - 1; o >= 0; --o) w.push(t[b[o]]);
            return w
        }
        var e = Xn,
            r = Un;
        return arguments.length ? n(t) : (n.x = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.y = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n)
    }, yo.geom.polygon = function(t) {
        return zo(t, vu), t
    };
    var vu = yo.geom.polygon.prototype = [];
    vu.area = function() {
        for (var t, n = -1, e = this.length, r = this[e - 1], i = 0; ++n < e;) t = r, r = this[n], i += t[1] * r[0] - t[0] * r[1];
        return .5 * i
    }, vu.centroid = function(t) {
        var n, e, r = -1,
            i = this.length,
            o = 0,
            a = 0,
            u = this[i - 1];
        for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) n = u, u = this[r], e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e;
        return [o * t, a * t]
    }, vu.clip = function(t) {
        for (var n, e, r, i, o, a, u = me(t), s = -1, l = this.length - me(this), c = this[l - 1]; ++s < l;) {
            for (n = t.slice(), t.length = 0, i = this[s], o = n[(r = n.length - u) - 1], e = -1; ++e < r;) a = n[e], de(a, c, i) ? (de(o, c, i) || t.push(ge(o, a, c, i)), t.push(a)) : de(o, c, i) && t.push(ge(o, a, c, i)), o = a;
            u && t.push(t[0]), c = i
        }
        return t
    }, yo.geom.delaunay = function(t) {
        var n = t.map(function() {
                return []
            }),
            e = [];
        return ve(t, function(e) {
            n[e.region.l.index].push(t[e.region.r.index])
        }), n.forEach(function(n, r) {
            var i = t[r],
                o = i[0],
                a = i[1];
            n.forEach(function(t) {
                t.angle = Math.atan2(t[0] - o, t[1] - a)
            }), n.sort(function(t, n) {
                return t.angle - n.angle
            });
            for (var u = 0, s = n.length - 1; s > u; u++) e.push([i, n[u], n[u + 1]])
        }), e
    }, yo.geom.voronoi = function(t) {
        function n(t) {
            var n, o, a, u = t.map(function() {
                    return []
                }),
                s = dt(e),
                l = dt(r),
                c = t.length,
                f = 1e6;
            if (s === Xn && l === Un) n = t;
            else
                for (n = new Array(c), a = 0; c > a; ++a) n[a] = [+s.call(this, o = t[a], a), +l.call(this, o, a)];
            if (ve(n, function(t) {
                    var n, e, r, i, o, a;
                    1 === t.a && t.b >= 0 ? (n = t.ep.r, e = t.ep.l) : (n = t.ep.l, e = t.ep.r), 1 === t.a ? (o = n ? n.y : -f, r = t.c - t.b * o, a = e ? e.y : f, i = t.c - t.b * a) : (r = n ? n.x : -f, o = t.c - t.a * r, i = e ? e.x : f, a = t.c - t.a * i);
                    var s = [r, o],
                        l = [i, a];
                    u[t.region.l.index].push(s, l), u[t.region.r.index].push(s, l)
                }), u = u.map(function(t, e) {
                    var r = n[e][0],
                        i = n[e][1],
                        o = t.map(function(t) {
                            return Math.atan2(t[0] - r, t[1] - i)
                        }),
                        a = yo.range(t.length).sort(function(t, n) {
                            return o[t] - o[n]
                        });
                    return a.filter(function(t, n) {
                        return !n || o[t] - o[a[n - 1]] > Jo
                    }).map(function(n) {
                        return t[n]
                    })
                }), u.forEach(function(t, e) {
                    var r = t.length;
                    if (!r) return t.push([-f, -f], [-f, f], [f, f], [f, -f]);
                    if (!(r > 2)) {
                        var i = n[e],
                            o = t[0],
                            a = t[1],
                            u = i[0],
                            s = i[1],
                            l = o[0],
                            c = o[1],
                            h = a[0],
                            p = a[1],
                            d = Math.abs(h - l),
                            g = p - c;
                        if (Math.abs(g) < Jo) {
                            var m = c > s ? -f : f;
                            t.push([-f, m], [f, m])
                        } else if (Jo > d) {
                            var v = l > u ? -f : f;
                            t.push([v, -f], [v, f])
                        } else {
                            var m = (l - u) * (p - c) > (h - l) * (c - s) ? f : -f,
                                y = Math.abs(g) - d;
                            Math.abs(y) < Jo ? t.push([0 > g ? m : -m, m]) : (y > 0 && (m *= -1), t.push([-f, m], [f, m]))
                        }
                    }
                }), i)
                for (a = 0; c > a; ++a) i.clip(u[a]);
            for (a = 0; c > a; ++a) u[a].point = t[a];
            return u
        }
        var e = Xn,
            r = Un,
            i = null;
        return arguments.length ? n(t) : (n.x = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.y = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.clipExtent = function(t) {
            if (!arguments.length) return i && [i[0], i[2]];
            if (null == t) i = null;
            else {
                var e = +t[0][0],
                    r = +t[0][1],
                    o = +t[1][0],
                    a = +t[1][1];
                i = yo.geom.polygon([
                    [e, r],
                    [e, a],
                    [o, a],
                    [o, r]
                ])
            }
            return n
        }, n.size = function(t) {
            return arguments.length ? n.clipExtent(t && [
                [0, 0], t
            ]) : i && i[2]
        }, n.links = function(t) {
            var n, i, o, a = t.map(function() {
                    return []
                }),
                u = [],
                s = dt(e),
                l = dt(r),
                c = t.length;
            if (s === Xn && l === Un) n = t;
            else
                for (n = new Array(c), o = 0; c > o; ++o) n[o] = [+s.call(this, i = t[o], o), +l.call(this, i, o)];
            return ve(n, function(n) {
                var e = n.region.l.index,
                    r = n.region.r.index;
                a[e][r] || (a[e][r] = a[r][e] = !0, u.push({
                    source: t[e],
                    target: t[r]
                }))
            }), u
        }, n.triangles = function(t) {
            if (e === Xn && r === Un) return yo.geom.delaunay(t);
            for (var n, i = new Array(s), o = dt(e), a = dt(r), u = -1, s = t.length; ++u < s;)(i[u] = [+o.call(this, n = t[u], u), +a.call(this, n, u)]).data = n;
            return yo.geom.delaunay(i).map(function(t) {
                return t.map(function(t) {
                    return t.data
                })
            })
        }, n)
    };
    var yu = {
        l: "r",
        r: "l"
    };
    yo.geom.quadtree = function(t, n, e, r, i) {
        function o(t) {
            function o(t, n, e, r, i, o, a, u) {
                if (!isNaN(e) && !isNaN(r))
                    if (t.leaf) {
                        var s = t.x,
                            c = t.y;
                        if (null != s)
                            if (Math.abs(s - e) + Math.abs(c - r) < .01) l(t, n, e, r, i, o, a, u);
                            else {
                                var f = t.point;
                                t.x = t.y = t.point = null, l(t, f, s, c, i, o, a, u), l(t, n, e, r, i, o, a, u)
                            } else t.x = e, t.y = r, t.point = n
                    } else l(t, n, e, r, i, o, a, u)
            }

            function l(t, n, e, r, i, a, u, s) {
                var l = .5 * (i + u),
                    c = .5 * (a + s),
                    f = e >= l,
                    h = r >= c,
                    p = (h << 1) + f;
                t.leaf = !1, t = t.nodes[p] || (t.nodes[p] = be()), f ? i = l : u = l, h ? a = c : s = c, o(t, n, e, r, i, a, u, s)
            }
            var c, f, h, p, d, g, m, v, y, x = dt(u),
                b = dt(s);
            if (null != n) g = n, m = e, v = r, y = i;
            else if (v = y = -(g = m = 1 / 0), f = [], h = [], d = t.length, a)
                for (p = 0; d > p; ++p) c = t[p], c.x < g && (g = c.x), c.y < m && (m = c.y), c.x > v && (v = c.x), c.y > y && (y = c.y), f.push(c.x), h.push(c.y);
            else
                for (p = 0; d > p; ++p) {
                    var M = +x(c = t[p], p),
                        w = +b(c, p);
                    g > M && (g = M), m > w && (m = w), M > v && (v = M), w > y && (y = w), f.push(M), h.push(w)
                }
            var _ = v - g,
                E = y - m;
            _ > E ? y = m + _ : v = g + E;
            var k = be();
            if (k.add = function(t) {
                    o(k, t, +x(t, ++p), +b(t, p), g, m, v, y)
                }, k.visit = function(t) {
                    Me(t, k, g, m, v, y)
                }, p = -1, null == n) {
                for (; ++p < d;) o(k, t[p], f[p], h[p], g, m, v, y);
                --p
            } else t.forEach(k.add);
            return f = h = t = c = null, k
        }
        var a, u = Xn,
            s = Un;
        return (a = arguments.length) ? (u = ye, s = xe, 3 === a && (i = e, r = n, e = n = 0), o(t)) : (o.x = function(t) {
            return arguments.length ? (u = t, o) : u
        }, o.y = function(t) {
            return arguments.length ? (s = t, o) : s
        }, o.extent = function(t) {
            return arguments.length ? (null == t ? n = e = r = i = null : (n = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), o) : null == n ? null : [
                [n, e],
                [r, i]
            ]
        }, o.size = function(t) {
            return arguments.length ? (null == t ? n = e = r = i = null : (n = e = 0, r = +t[0], i = +t[1]), o) : null == n ? null : [r - n, i - e]
        }, o)
    }, yo.interpolateRgb = we, yo.interpolateObject = _e, yo.interpolateNumber = Ee, yo.interpolateString = ke;
    var xu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    yo.interpolate = Se, yo.interpolators = [function(t, n) {
        var e = typeof n;
        return ("string" === e ? da.has(n) || /^(#|rgb\(|hsl\()/.test(n) ? we : ke : n instanceof $ ? we : "object" === e ? Array.isArray(n) ? Te : _e : Ee)(t, n)
    }], yo.interpolateArray = Te;
    var bu = function() {
            return gt
        },
        Mu = yo.map({
            linear: bu,
            poly: qe,
            quad: function() {
                return De
            },
            cubic: function() {
                return je
            },
            sin: function() {
                return He
            },
            exp: function() {
                return ze
            },
            circle: function() {
                return Fe
            },
            elastic: Oe,
            back: Pe,
            bounce: function() {
                return Re
            }
        }),
        wu = yo.map({
            "in": gt,
            out: Ce,
            "in-out": Ae,
            "out-in": function(t) {
                return Ae(Ce(t))
            }
        });
    yo.ease = function(t) {
        var n = t.indexOf("-"),
            e = n >= 0 ? t.substring(0, n) : t,
            r = n >= 0 ? t.substring(n + 1) : "in";
        return e = Mu.get(e) || bu, r = wu.get(r) || gt, Ne(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, yo.interpolateHcl = Be, yo.interpolateHsl = Ie, yo.interpolateLab = We, yo.interpolateRound = $e, yo.transform = function(t) {
        var n = Mo.createElementNS(yo.ns.prefix.svg, "g");
        return (yo.transform = function(t) {
            if (null != t) {
                n.setAttribute("transform", t);
                var e = n.transform.baseVal.consolidate()
            }
            return new Xe(e ? e.matrix : _u)
        })(t)
    }, Xe.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var _u = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    yo.interpolateTransform = Ze, yo.layout = {}, yo.layout.bundle = function() {
        return function(t) {
            for (var n = [], e = -1, r = t.length; ++e < r;) n.push(Ke(t[e]));
            return n
        }
    }, yo.layout.chord = function() {
        function t() {
            var t, l, f, h, p, d = {},
                g = [],
                m = yo.range(o),
                v = [];
            for (e = [], r = [], t = 0, h = -1; ++h < o;) {
                for (l = 0, p = -1; ++p < o;) l += i[h][p];
                g.push(l), v.push(yo.range(o)), t += l
            }
            for (a && m.sort(function(t, n) {
                    return a(g[t], g[n])
                }), u && v.forEach(function(t, n) {
                    t.sort(function(t, e) {
                        return u(i[n][t], i[n][e])
                    })
                }), t = (2 * Zo - c * o) / t, l = 0, h = -1; ++h < o;) {
                for (f = l, p = -1; ++p < o;) {
                    var y = m[h],
                        x = v[y][p],
                        b = i[y][x],
                        M = l,
                        w = l += b * t;
                    d[y + "-" + x] = {
                        index: y,
                        subindex: x,
                        startAngle: M,
                        endAngle: w,
                        value: b
                    }
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: l,
                    value: (l - f) / t
                }, l += c
            }
            for (h = -1; ++h < o;)
                for (p = h - 1; ++p < o;) {
                    var _ = d[h + "-" + p],
                        E = d[p + "-" + h];
                    (_.value || E.value) && e.push(_.value < E.value ? {
                        source: E,
                        target: _
                    } : {
                        source: _,
                        target: E
                    })
                }
            s && n()
        }

        function n() {
            e.sort(function(t, n) {
                return s((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2)
            })
        }
        var e, r, i, o, a, u, s, l = {},
            c = 0;
        return l.matrix = function(t) {
            return arguments.length ? (o = (i = t) && i.length, e = r = null, l) : i
        }, l.padding = function(t) {
            return arguments.length ? (c = t, e = r = null, l) : c
        }, l.sortGroups = function(t) {
            return arguments.length ? (a = t, e = r = null, l) : a
        }, l.sortSubgroups = function(t) {
            return arguments.length ? (u = t, e = null, l) : u
        }, l.sortChords = function(t) {
            return arguments.length ? (s = t, e && n(), l) : s
        }, l.chords = function() {
            return e || t(), e
        }, l.groups = function() {
            return r || t(), r
        }, l
    }, yo.layout.force = function() {
        function t(t) {
            return function(n, e, r, i) {
                if (n.point !== t) {
                    var o = n.cx - t.x,
                        a = n.cy - t.y,
                        u = 1 / Math.sqrt(o * o + a * a);
                    if (g > (i - e) * u) {
                        var s = n.charge * u * u;
                        return t.px -= o * s, t.py -= a * s, !0
                    }
                    if (n.point && isFinite(u)) {
                        var s = n.pointCharge * u * u;
                        t.px -= o * s, t.py -= a * s
                    }
                }
                return !n.charge
            }
        }

        function n(t) {
            t.px = yo.event.x, t.py = yo.event.y, u.resume()
        }
        var e, r, i, o, a, u = {},
            s = yo.dispatch("start", "tick", "end"),
            l = [1, 1],
            c = .9,
            f = Eu,
            h = ku,
            p = -30,
            d = .1,
            g = .8,
            m = [],
            v = [];
        return u.tick = function() {
            if ((r *= .99) < .005) return s.end({
                type: "end",
                alpha: r = 0
            }), !0;
            var n, e, u, f, h, g, y, x, b, M = m.length,
                w = v.length;
            for (e = 0; w > e; ++e) u = v[e], f = u.source, h = u.target, x = h.x - f.x, b = h.y - f.y, (g = x * x + b * b) && (g = r * o[e] * ((g = Math.sqrt(g)) - i[e]) / g, x *= g, b *= g, h.x -= x * (y = f.weight / (h.weight + f.weight)), h.y -= b * y, f.x += x * (y = 1 - y), f.y += b * y);
            if ((y = r * d) && (x = l[0] / 2, b = l[1] / 2, e = -1, y))
                for (; ++e < M;) u = m[e], u.x += (x - u.x) * y, u.y += (b - u.y) * y;
            if (p)
                for (or(n = yo.geom.quadtree(m), r, a), e = -1; ++e < M;)(u = m[e]).fixed || n.visit(t(u));
            for (e = -1; ++e < M;) u = m[e], u.fixed ? (u.x = u.px, u.y = u.py) : (u.x -= (u.px - (u.px = u.x)) * c, u.y -= (u.py - (u.py = u.y)) * c);
            s.tick({
                type: "tick",
                alpha: r
            })
        }, u.nodes = function(t) {
            return arguments.length ? (m = t, u) : m
        }, u.links = function(t) {
            return arguments.length ? (v = t, u) : v
        }, u.size = function(t) {
            return arguments.length ? (l = t, u) : l
        }, u.linkDistance = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : +t, u) : f
        }, u.distance = u.linkDistance, u.linkStrength = function(t) {
            return arguments.length ? (h = "function" == typeof t ? t : +t, u) : h
        }, u.friction = function(t) {
            return arguments.length ? (c = +t, u) : c
        }, u.charge = function(t) {
            return arguments.length ? (p = "function" == typeof t ? t : +t, u) : p
        }, u.gravity = function(t) {
            return arguments.length ? (d = +t, u) : d
        }, u.theta = function(t) {
            return arguments.length ? (g = +t, u) : g
        }, u.alpha = function(t) {
            return arguments.length ? (t = +t, r ? r = t > 0 ? t : 0 : t > 0 && (s.start({
                type: "start",
                alpha: r = t
            }), yo.timer(u.tick)), u) : r
        }, u.start = function() {
            function t(t, r) {
                for (var i, o = n(e), a = -1, u = o.length; ++a < u;)
                    if (!isNaN(i = o[a][t])) return i;
                return Math.random() * r
            }

            function n() {
                if (!s) {
                    for (s = [], r = 0; d > r; ++r) s[r] = [];
                    for (r = 0; g > r; ++r) {
                        var t = v[r];
                        s[t.source.index].push(t.target), s[t.target.index].push(t.source)
                    }
                }
                return s[e]
            }
            var e, r, s, c, d = m.length,
                g = v.length,
                y = l[0],
                x = l[1];
            for (e = 0; d > e; ++e)(c = m[e]).index = e, c.weight = 0;
            for (e = 0; g > e; ++e) c = v[e], "number" == typeof c.source && (c.source = m[c.source]), "number" == typeof c.target && (c.target = m[c.target]), ++c.source.weight, ++c.target.weight;
            for (e = 0; d > e; ++e) c = m[e], isNaN(c.x) && (c.x = t("x", y)), isNaN(c.y) && (c.y = t("y", x)), isNaN(c.px) && (c.px = c.x), isNaN(c.py) && (c.py = c.y);
            if (i = [], "function" == typeof f)
                for (e = 0; g > e; ++e) i[e] = +f.call(this, v[e], e);
            else
                for (e = 0; g > e; ++e) i[e] = f;
            if (o = [], "function" == typeof h)
                for (e = 0; g > e; ++e) o[e] = +h.call(this, v[e], e);
            else
                for (e = 0; g > e; ++e) o[e] = h;
            if (a = [], "function" == typeof p)
                for (e = 0; d > e; ++e) a[e] = +p.call(this, m[e], e);
            else
                for (e = 0; d > e; ++e) a[e] = p;
            return u.resume()
        }, u.resume = function() {
            return u.alpha(.1)
        }, u.stop = function() {
            return u.alpha(0)
        }, u.drag = function() {
            return e || (e = yo.behavior.drag().origin(gt).on("dragstart.force", nr).on("drag.force", n).on("dragend.force", er)), arguments.length ? void this.on("mouseover.force", rr).on("mouseout.force", ir).call(e) : e
        }, yo.rebind(u, s, "on")
    };
    var Eu = 20,
        ku = 1;
    yo.layout.hierarchy = function() {
        function t(n, a, u) {
            var s = i.call(e, n, a);
            if (n.depth = a, u.push(n), s && (l = s.length)) {
                for (var l, c, f = -1, h = n.children = [], p = 0, d = a + 1; ++f < l;) c = t(s[f], d, u), c.parent = n, h.push(c), p += c.value;
                r && h.sort(r), o && (n.value = p)
            } else o && (n.value = +o.call(e, n, a) || 0);
            return n
        }

        function n(t, r) {
            var i = t.children,
                a = 0;
            if (i && (u = i.length))
                for (var u, s = -1, l = r + 1; ++s < u;) a += n(i[s], l);
            else o && (a = +o.call(e, t, r) || 0);
            return o && (t.value = a), a
        }

        function e(n) {
            var e = [];
            return t(n, 0, e), e
        }
        var r = lr,
            i = ur,
            o = sr;
        return e.sort = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e.children = function(t) {
            return arguments.length ? (i = t, e) : i
        }, e.value = function(t) {
            return arguments.length ? (o = t, e) : o
        }, e.revalue = function(t) {
            return n(t, 0), t
        }, e
    }, yo.layout.partition = function() {
        function t(n, e, r, i) {
            var o = n.children;
            if (n.x = e, n.y = n.depth * i, n.dx = r, n.dy = i, o && (a = o.length)) {
                var a, u, s, l = -1;
                for (r = n.value ? r / n.value : 0; ++l < a;) t(u = o[l], e, s = u.value * r, i), e += s
            }
        }

        function n(t) {
            var e = t.children,
                r = 0;
            if (e && (i = e.length))
                for (var i, o = -1; ++o < i;) r = Math.max(r, n(e[o]));
            return 1 + r
        }

        function e(e, o) {
            var a = r.call(this, e, o);
            return t(a[0], 0, i[0], i[1] / n(a[0])), a
        }
        var r = yo.layout.hierarchy(),
            i = [1, 1];
        return e.size = function(t) {
            return arguments.length ? (i = t, e) : i
        }, ar(e, r)
    }, yo.layout.pie = function() {
        function t(o) {
            var a = o.map(function(e, r) {
                    return +n.call(t, e, r)
                }),
                u = +("function" == typeof r ? r.apply(this, arguments) : r),
                s = (("function" == typeof i ? i.apply(this, arguments) : i) - u) / yo.sum(a),
                l = yo.range(o.length);
            null != e && l.sort(e === Su ? function(t, n) {
                return a[n] - a[t]
            } : function(t, n) {
                return e(o[t], o[n])
            });
            var c = [];
            return l.forEach(function(t) {
                var n;
                c[t] = {
                    data: o[t],
                    value: n = a[t],
                    startAngle: u,
                    endAngle: u += n * s
                }
            }), c
        }
        var n = Number,
            e = Su,
            r = 0,
            i = 2 * Zo;
        return t.value = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.sort = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.startAngle = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.endAngle = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    var Su = {};
    yo.layout.stack = function() {
        function t(u, s) {
            var l = u.map(function(e, r) {
                    return n.call(t, e, r)
                }),
                c = l.map(function(n) {
                    return n.map(function(n, e) {
                        return [o.call(t, n, e), a.call(t, n, e)]
                    })
                }),
                f = e.call(t, c, s);
            l = yo.permute(l, f), c = yo.permute(c, f);
            var h, p, d, g = r.call(t, c, s),
                m = l.length,
                v = l[0].length;
            for (p = 0; v > p; ++p)
                for (i.call(t, l[0][p], d = g[p], c[0][p][1]), h = 1; m > h; ++h) i.call(t, l[h][p], d += c[h - 1][p][1], c[h][p][1]);
            return u
        }
        var n = gt,
            e = dr,
            r = gr,
            i = pr,
            o = fr,
            a = hr;
        return t.values = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.order = function(n) {
            return arguments.length ? (e = "function" == typeof n ? n : Tu.get(n) || dr, t) : e
        }, t.offset = function(n) {
            return arguments.length ? (r = "function" == typeof n ? n : Nu.get(n) || gr, t) : r
        }, t.x = function(n) {
            return arguments.length ? (o = n, t) : o
        }, t.y = function(n) {
            return arguments.length ? (a = n, t) : a
        }, t.out = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    var Tu = yo.map({
            "inside-out": function(t) {
                var n, e, r = t.length,
                    i = t.map(mr),
                    o = t.map(vr),
                    a = yo.range(r).sort(function(t, n) {
                        return i[t] - i[n]
                    }),
                    u = 0,
                    s = 0,
                    l = [],
                    c = [];
                for (n = 0; r > n; ++n) e = a[n], s > u ? (u += o[e], l.push(e)) : (s += o[e], c.push(e));
                return c.reverse().concat(l)
            },
            reverse: function(t) {
                return yo.range(t.length).reverse()
            },
            "default": dr
        }),
        Nu = yo.map({
            silhouette: function(t) {
                var n, e, r, i = t.length,
                    o = t[0].length,
                    a = [],
                    u = 0,
                    s = [];
                for (e = 0; o > e; ++e) {
                    for (n = 0, r = 0; i > n; n++) r += t[n][e][1];
                    r > u && (u = r), a.push(r)
                }
                for (e = 0; o > e; ++e) s[e] = (u - a[e]) / 2;
                return s
            },
            wiggle: function(t) {
                var n, e, r, i, o, a, u, s, l, c = t.length,
                    f = t[0],
                    h = f.length,
                    p = [];
                for (p[0] = s = l = 0, e = 1; h > e; ++e) {
                    for (n = 0, i = 0; c > n; ++n) i += t[n][e][1];
                    for (n = 0, o = 0, u = f[e][0] - f[e - 1][0]; c > n; ++n) {
                        for (r = 0, a = (t[n][e][1] - t[n][e - 1][1]) / (2 * u); n > r; ++r) a += (t[r][e][1] - t[r][e - 1][1]) / u;
                        o += a * t[n][e][1]
                    }
                    p[e] = s -= i ? o / i * u : 0, l > s && (l = s)
                }
                for (e = 0; h > e; ++e) p[e] -= l;
                return p
            },
            expand: function(t) {
                var n, e, r, i = t.length,
                    o = t[0].length,
                    a = 1 / i,
                    u = [];
                for (e = 0; o > e; ++e) {
                    for (n = 0, r = 0; i > n; n++) r += t[n][e][1];
                    if (r)
                        for (n = 0; i > n; n++) t[n][e][1] /= r;
                    else
                        for (n = 0; i > n; n++) t[n][e][1] = a
                }
                for (e = 0; o > e; ++e) u[e] = 0;
                return u
            },
            zero: gr
        });
    yo.layout.histogram = function() {
        function t(t, o) {
            for (var a, u, s = [], l = t.map(e, this), c = r.call(this, l, o), f = i.call(this, c, l, o), o = -1, h = l.length, p = f.length - 1, d = n ? 1 : 1 / h; ++o < p;) a = s[o] = [], a.dx = f[o + 1] - (a.x = f[o]), a.y = 0;
            if (p > 0)
                for (o = -1; ++o < h;) u = l[o], u >= c[0] && u <= c[1] && (a = s[yo.bisect(f, u, 1, p) - 1], a.y += d, a.push(t[o]));
            return s
        }
        var n = !0,
            e = Number,
            r = Mr,
            i = xr;
        return t.value = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.range = function(n) {
            return arguments.length ? (r = dt(n), t) : r
        }, t.bins = function(n) {
            return arguments.length ? (i = "number" == typeof n ? function(t) {
                return br(t, n)
            } : dt(n), t) : i
        }, t.frequency = function(e) {
            return arguments.length ? (n = !!e, t) : n
        }, t
    }, yo.layout.tree = function() {
        function t(t, o) {
            function a(t, n) {
                var r = t.children,
                    i = t._tree;
                if (r && (o = r.length)) {
                    for (var o, u, l, c = r[0], f = c, h = -1; ++h < o;) l = r[h], a(l, u), f = s(l, u, f), u = l;
                    Ar(t);
                    var p = .5 * (c._tree.prelim + l._tree.prelim);
                    n ? (i.prelim = n._tree.prelim + e(t, n), i.mod = i.prelim - p) : i.prelim = p
                } else n && (i.prelim = n._tree.prelim + e(t, n))
            }

            function u(t, n) {
                t.x = t._tree.prelim + n;
                var e = t.children;
                if (e && (r = e.length)) {
                    var r, i = -1;
                    for (n += t._tree.mod; ++i < r;) u(e[i], n)
                }
            }

            function s(t, n, r) {
                if (n) {
                    for (var i, o = t, a = t, u = n, s = t.parent.children[0], l = o._tree.mod, c = a._tree.mod, f = u._tree.mod, h = s._tree.mod; u = Er(u), o = _r(o), u && o;) s = _r(s), a = Er(a), a._tree.ancestor = t, i = u._tree.prelim + f - o._tree.prelim - l + e(u, o), i > 0 && (Dr(jr(u, t, r), t, i), l += i, c += i), f += u._tree.mod, l += o._tree.mod, h += s._tree.mod, c += a._tree.mod;
                    u && !Er(a) && (a._tree.thread = u, a._tree.mod += f - c), o && !_r(s) && (s._tree.thread = o, s._tree.mod += l - h, r = t)
                }
                return r
            }
            var l = n.call(this, t, o),
                c = l[0];
            Cr(c, function(t, n) {
                t._tree = {
                    ancestor: t,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: n ? n._tree.number + 1 : 0
                }
            }), a(c), u(c, -c._tree.prelim);
            var f = kr(c, Tr),
                h = kr(c, Sr),
                p = kr(c, Nr),
                d = f.x - e(f, h) / 2,
                g = h.x + e(h, f) / 2,
                m = p.depth || 1;
            return Cr(c, i ? function(t) {
                t.x *= r[0], t.y = t.depth * r[1], delete t._tree
            } : function(t) {
                t.x = (t.x - d) / (g - d) * r[0], t.y = t.depth / m * r[1], delete t._tree
            }), l
        }
        var n = yo.layout.hierarchy().sort(null).value(null),
            e = wr,
            r = [1, 1],
            i = !1;
        return t.separation = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.size = function(n) {
            return arguments.length ? (i = null == (r = n), t) : i ? null : r
        }, t.nodeSize = function(n) {
            return arguments.length ? (i = null != (r = n), t) : i ? r : null
        }, ar(t, n)
    }, yo.layout.pack = function() {
        function t(t, o) {
            var a = e.call(this, t, o),
                u = a[0],
                s = i[0],
                l = i[1],
                c = null == n ? Math.sqrt : "function" == typeof n ? n : function() {
                    return n
                };
            if (u.x = u.y = 0, Cr(u, function(t) {
                    t.r = +c(t.value)
                }), Cr(u, Fr), r) {
                var f = r * (n ? 1 : Math.max(2 * u.r / s, 2 * u.r / l)) / 2;
                Cr(u, function(t) {
                    t.r += f
                }), Cr(u, Fr), Cr(u, function(t) {
                    t.r -= f
                })
            }
            return Rr(u, s / 2, l / 2, n ? 1 : 1 / Math.max(2 * u.r / s, 2 * u.r / l)), a
        }
        var n, e = yo.layout.hierarchy().sort(Lr),
            r = 0,
            i = [1, 1];
        return t.size = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.radius = function(e) {
            return arguments.length ? (n = null == e || "function" == typeof e ? e : +e, t) : n
        }, t.padding = function(n) {
            return arguments.length ? (r = +n, t) : r
        }, ar(t, e)
    }, yo.layout.cluster = function() {
        function t(t, o) {
            var a, u = n.call(this, t, o),
                s = u[0],
                l = 0;
            Cr(s, function(t) {
                var n = t.children;
                n && n.length ? (t.x = Wr(n), t.y = Ir(n)) : (t.x = a ? l += e(t, a) : 0, t.y = 0, a = t)
            });
            var c = $r(s),
                f = Xr(s),
                h = c.x - e(c, f) / 2,
                p = f.x + e(f, c) / 2;
            return Cr(s, i ? function(t) {
                t.x = (t.x - s.x) * r[0], t.y = (s.y - t.y) * r[1]
            } : function(t) {
                t.x = (t.x - h) / (p - h) * r[0], t.y = (1 - (s.y ? t.y / s.y : 1)) * r[1]
            }), u
        }
        var n = yo.layout.hierarchy().sort(null).value(null),
            e = wr,
            r = [1, 1],
            i = !1;
        return t.separation = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.size = function(n) {
            return arguments.length ? (i = null == (r = n), t) : i ? null : r
        }, t.nodeSize = function(n) {
            return arguments.length ? (i = null != (r = n), t) : i ? r : null
        }, ar(t, n)
    }, yo.layout.treemap = function() {
        function t(t, n) {
            for (var e, r, i = -1, o = t.length; ++i < o;) r = (e = t[i]).value * (0 > n ? 0 : n), e.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function n(e) {
            var o = e.children;
            if (o && o.length) {
                var a, u, s, l = f(e),
                    c = [],
                    h = o.slice(),
                    d = 1 / 0,
                    g = "slice" === p ? l.dx : "dice" === p ? l.dy : "slice-dice" === p ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (t(h, l.dx * l.dy / e.value), c.area = 0;
                    (s = h.length) > 0;) c.push(a = h[s - 1]), c.area += a.area, "squarify" !== p || (u = r(c, g)) <= d ? (h.pop(), d = u) : (c.area -= c.pop().area, i(c, g, l, !1), g = Math.min(l.dx, l.dy), c.length = c.area = 0, d = 1 / 0);
                c.length && (i(c, g, l, !0), c.length = c.area = 0), o.forEach(n)
            }
        }

        function e(n) {
            var r = n.children;
            if (r && r.length) {
                var o, a = f(n),
                    u = r.slice(),
                    s = [];
                for (t(u, a.dx * a.dy / n.value), s.area = 0; o = u.pop();) s.push(o), s.area += o.area, null != o.z && (i(s, o.z ? a.dx : a.dy, a, !u.length), s.length = s.area = 0);
                r.forEach(e)
            }
        }

        function r(t, n) {
            for (var e, r = t.area, i = 0, o = 1 / 0, a = -1, u = t.length; ++a < u;)(e = t[a].area) && (o > e && (o = e), e > i && (i = e));
            return r *= r, n *= n, r ? Math.max(n * i * d / r, r / (n * o * d)) : 1 / 0
        }

        function i(t, n, e, r) {
            var i, o = -1,
                a = t.length,
                u = e.x,
                l = e.y,
                c = n ? s(t.area / n) : 0;
            if (n == e.dx) {
                for ((r || c > e.dy) && (c = e.dy); ++o < a;) i = t[o], i.x = u, i.y = l, i.dy = c, u += i.dx = Math.min(e.x + e.dx - u, c ? s(i.area / c) : 0);
                i.z = !0, i.dx += e.x + e.dx - u, e.y += c, e.dy -= c
            } else {
                for ((r || c > e.dx) && (c = e.dx); ++o < a;) i = t[o], i.x = u, i.y = l, i.dx = c, l += i.dy = Math.min(e.y + e.dy - l, c ? s(i.area / c) : 0);
                i.z = !1, i.dy += e.y + e.dy - l, e.x += c, e.dx -= c
            }
        }

        function o(r) {
            var i = a || u(r),
                o = i[0];
            return o.x = 0, o.y = 0, o.dx = l[0], o.dy = l[1], a && u.revalue(o), t([o], o.dx * o.dy / o.value), (a ? e : n)(o), h && (a = i), i
        }
        var a, u = yo.layout.hierarchy(),
            s = Math.round,
            l = [1, 1],
            c = null,
            f = Ur,
            h = !1,
            p = "squarify",
            d = .5 * (1 + Math.sqrt(5));
        return o.size = function(t) {
            return arguments.length ? (l = t, o) : l
        }, o.padding = function(t) {
            function n(n) {
                var e = t.call(o, n, n.depth);
                return null == e ? Ur(n) : Yr(n, "number" == typeof e ? [e, e, e, e] : e)
            }

            function e(n) {
                return Yr(n, t)
            }
            if (!arguments.length) return c;
            var r;
            return f = null == (c = t) ? Ur : "function" == (r = typeof t) ? n : "number" === r ? (t = [t, t, t, t], e) : e, o
        }, o.round = function(t) {
            return arguments.length ? (s = t ? Math.round : Number, o) : s != Number
        }, o.sticky = function(t) {
            return arguments.length ? (h = t, a = null, o) : h
        }, o.ratio = function(t) {
            return arguments.length ? (d = t, o) : d
        }, o.mode = function(t) {
            return arguments.length ? (p = t + "", o) : p
        }, ar(o, u)
    }, yo.random = {
        normal: function(t, n) {
            var e = arguments.length;
            return 2 > e && (n = 1), 1 > e && (t = 0),
                function() {
                    var e, r, i;
                    do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1);
                    return t + n * e * Math.sqrt(-2 * Math.log(i) / i)
                }
        },
        logNormal: function() {
            var t = yo.random.normal.apply(yo, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        irwinHall: function(t) {
            return function() {
                for (var n = 0, e = 0; t > e; e++) n += Math.random();
                return n / t
            }
        }
    }, yo.scale = {};
    var Cu = {
        floor: gt,
        ceil: gt
    };
    yo.scale.linear = function() {
        return ti([0, 1], [0, 1], Se, !1)
    }, yo.scale.log = function() {
        return ai(yo.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var Au = yo.format(".0e"),
        Du = {
            floor: function(t) {
                return -Math.ceil(-t)
            },
            ceil: function(t) {
                return -Math.floor(-t)
            }
        };
    yo.scale.pow = function() {
        return ui(yo.scale.linear(), 1, [0, 1])
    }, yo.scale.sqrt = function() {
        return yo.scale.pow().exponent(.5)
    }, yo.scale.ordinal = function() {
        return li([], {
            t: "range",
            a: [
                []
            ]
        })
    }, yo.scale.category10 = function() {
        return yo.scale.ordinal().range(ju)
    }, yo.scale.category20 = function() {
        return yo.scale.ordinal().range(Lu)
    }, yo.scale.category20b = function() {
        return yo.scale.ordinal().range(qu)
    }, yo.scale.category20c = function() {
        return yo.scale.ordinal().range(Hu)
    };
    var ju = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ot),
        Lu = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ot),
        qu = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ot),
        Hu = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ot);
    yo.scale.quantile = function() {
        return ci([], [])
    }, yo.scale.quantize = function() {
        return fi(0, 1, [0, 1])
    }, yo.scale.threshold = function() {
        return hi([.5], [0, 1])
    }, yo.scale.identity = function() {
        return pi([0, 1])
    }, yo.svg.arc = function() {
        function t() {
            var t = n.apply(this, arguments),
                o = e.apply(this, arguments),
                a = r.apply(this, arguments) + zu,
                u = i.apply(this, arguments) + zu,
                s = (a > u && (s = a, a = u, u = s), u - a),
                l = Zo > s ? "0" : "1",
                c = Math.cos(a),
                f = Math.sin(a),
                h = Math.cos(u),
                p = Math.sin(u);
            return s >= Fu ? t ? "M0," + o + "A" + o + "," + o + " 0 1,1 0," + -o + "A" + o + "," + o + " 0 1,1 0," + o + "M0," + t + "A" + t + "," + t + " 0 1,0 0," + -t + "A" + t + "," + t + " 0 1,0 0," + t + "Z" : "M0," + o + "A" + o + "," + o + " 0 1,1 0," + -o + "A" + o + "," + o + " 0 1,1 0," + o + "Z" : t ? "M" + o * c + "," + o * f + "A" + o + "," + o + " 0 " + l + ",1 " + o * h + "," + o * p + "L" + t * h + "," + t * p + "A" + t + "," + t + " 0 " + l + ",0 " + t * c + "," + t * f + "Z" : "M" + o * c + "," + o * f + "A" + o + "," + o + " 0 " + l + ",1 " + o * h + "," + o * p + "L0,0Z"
        }
        var n = di,
            e = gi,
            r = mi,
            i = vi;
        return t.innerRadius = function(e) {
            return arguments.length ? (n = dt(e), t) : n
        }, t.outerRadius = function(n) {
            return arguments.length ? (e = dt(n), t) : e
        }, t.startAngle = function(n) {
            return arguments.length ? (r = dt(n), t) : r
        }, t.endAngle = function(n) {
            return arguments.length ? (i = dt(n), t) : i
        }, t.centroid = function() {
            var t = (n.apply(this, arguments) + e.apply(this, arguments)) / 2,
                o = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + zu;
            return [Math.cos(o) * t, Math.sin(o) * t]
        }, t
    };
    var zu = -Zo / 2,
        Fu = 2 * Zo - 1e-6;
    yo.svg.line.radial = function() {
        var t = $n(yi);
        return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
    }, Jn.reverse = Gn, Gn.reverse = Jn, yo.svg.area = function() {
        return xi(gt)
    }, yo.svg.area.radial = function() {
        var t = xi(yi);
        return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
    }, yo.svg.chord = function() {
        function t(t, u) {
            var s = n(this, o, t, u),
                l = n(this, a, t, u);
            return "M" + s.p0 + r(s.r, s.p1, s.a1 - s.a0) + (e(s, l) ? i(s.r, s.p1, s.r, s.p0) : i(s.r, s.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + i(l.r, l.p1, s.r, s.p0)) + "Z"
        }

        function n(t, n, e, r) {
            var i = n.call(t, e, r),
                o = u.call(t, i, r),
                a = s.call(t, i, r) + zu,
                c = l.call(t, i, r) + zu;
            return {
                r: o,
                a0: a,
                a1: c,
                p0: [o * Math.cos(a), o * Math.sin(a)],
                p1: [o * Math.cos(c), o * Math.sin(c)]
            }
        }

        function e(t, n) {
            return t.a0 == n.a0 && t.a1 == n.a1
        }

        function r(t, n, e) {
            return "A" + t + "," + t + " 0 " + +(e > Zo) + ",1 " + n
        }

        function i(t, n, e, r) {
            return "Q 0,0 " + r
        }
        var o = qn,
            a = Hn,
            u = bi,
            s = mi,
            l = vi;
        return t.radius = function(n) {
            return arguments.length ? (u = dt(n), t) : u
        }, t.source = function(n) {
            return arguments.length ? (o = dt(n), t) : o
        }, t.target = function(n) {
            return arguments.length ? (a = dt(n), t) : a
        }, t.startAngle = function(n) {
            return arguments.length ? (s = dt(n), t) : s
        }, t.endAngle = function(n) {
            return arguments.length ? (l = dt(n), t) : l
        }, t
    }, yo.svg.diagonal = function() {
        function t(t, i) {
            var o = n.call(this, t, i),
                a = e.call(this, t, i),
                u = (o.y + a.y) / 2,
                s = [o, {
                    x: o.x,
                    y: u
                }, {
                    x: a.x,
                    y: u
                }, a];
            return s = s.map(r), "M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3]
        }
        var n = qn,
            e = Hn,
            r = Mi;
        return t.source = function(e) {
            return arguments.length ? (n = dt(e), t) : n
        }, t.target = function(n) {
            return arguments.length ? (e = dt(n), t) : e
        }, t.projection = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t
    }, yo.svg.diagonal.radial = function() {
        var t = yo.svg.diagonal(),
            n = Mi,
            e = t.projection;
        return t.projection = function(t) {
            return arguments.length ? e(wi(n = t)) : n
        }, t
    }, yo.svg.symbol = function() {
        function t(t, r) {
            return (Ou.get(n.call(this, t, r)) || ki)(e.call(this, t, r))
        }
        var n = Ei,
            e = _i;
        return t.type = function(e) {
            return arguments.length ? (n = dt(e), t) : n
        }, t.size = function(n) {
            return arguments.length ? (e = dt(n), t) : e
        }, t
    };
    var Ou = yo.map({
        circle: ki,
        cross: function(t) {
            var n = Math.sqrt(t / 5) / 2;
            return "M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z"
        },
        diamond: function(t) {
            var n = Math.sqrt(t / (2 * Iu)),
                e = n * Iu;
            return "M0," + -n + "L" + e + ",0 0," + n + " " + -e + ",0Z"
        },
        square: function(t) {
            var n = Math.sqrt(t) / 2;
            return "M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z"
        },
        "triangle-down": function(t) {
            var n = Math.sqrt(t / Bu),
                e = n * Bu / 2;
            return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z"
        },
        "triangle-up": function(t) {
            var n = Math.sqrt(t / Bu),
                e = n * Bu / 2;
            return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z"
        }
    });
    yo.svg.symbolTypes = Ou.keys();
    var Pu, Ru, Bu = Math.sqrt(3),
        Iu = Math.tan(30 * Ko),
        Wu = [],
        $u = 0;
    Wu.call = Bo.call, Wu.empty = Bo.empty, Wu.node = Bo.node, Wu.size = Bo.size, yo.transition = function(t) {
        return arguments.length ? Pu ? t.transition() : t : $o.transition()
    }, yo.transition.prototype = Wu, Wu.select = function(t) {
        var n, e, r, i = this.id,
            o = [];
        t = g(t);
        for (var a = -1, u = this.length; ++a < u;) {
            o.push(n = []);
            for (var s = this[a], l = -1, c = s.length; ++l < c;)(r = s[l]) && (e = t.call(r, r.__data__, l, a)) ? ("__data__" in r && (e.__data__ = r.__data__), Ci(e, l, i, r.__transition__[i]), n.push(e)) : n.push(null)
        }
        return Si(o, i)
    }, Wu.selectAll = function(t) {
        var n, e, r, i, o, a = this.id,
            u = [];
        t = m(t);
        for (var s = -1, l = this.length; ++s < l;)
            for (var c = this[s], f = -1, h = c.length; ++f < h;)
                if (r = c[f]) {
                    o = r.__transition__[a], e = t.call(r, r.__data__, f, s), u.push(n = []);
                    for (var p = -1, d = e.length; ++p < d;)(i = e[p]) && Ci(i, p, a, o), n.push(i)
                }
        return Si(u, a)
    }, Wu.filter = function(t) {
        var n, e, r, i = [];
        "function" != typeof t && (t = S(t));
        for (var o = 0, a = this.length; a > o; o++) {
            i.push(n = []);
            for (var e = this[o], u = 0, s = e.length; s > u; u++)(r = e[u]) && t.call(r, r.__data__, u) && n.push(r)
        }
        return Si(i, this.id)
    }, Wu.tween = function(t, n) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(t) : N(this, null == n ? function(n) {
            n.__transition__[e].tween.remove(t)
        } : function(r) {
            r.__transition__[e].tween.set(t, n)
        })
    }, Wu.attr = function(t, n) {
        function e() {
            this.removeAttribute(u)
        }

        function r() {
            this.removeAttributeNS(u.space, u.local)
        }

        function i(t) {
            return null == t ? e : (t += "", function() {
                var n, e = this.getAttribute(u);
                return e !== t && (n = a(e, t), function(t) {
                    this.setAttribute(u, n(t))
                })
            })
        }

        function o(t) {
            return null == t ? r : (t += "", function() {
                var n, e = this.getAttributeNS(u.space, u.local);
                return e !== t && (n = a(e, t), function(t) {
                    this.setAttributeNS(u.space, u.local, n(t))
                })
            })
        }
        if (arguments.length < 2) {
            for (n in t) this.attr(n, t[n]);
            return this
        }
        var a = "transform" == t ? Ze : Se,
            u = yo.ns.qualify(t);
        return Ti(this, "attr." + t, n, u.local ? o : i)
    }, Wu.attrTween = function(t, n) {
        function e(t, e) {
            var r = n.call(this, t, e, this.getAttribute(i));
            return r && function(t) {
                this.setAttribute(i, r(t))
            }
        }

        function r(t, e) {
            var r = n.call(this, t, e, this.getAttributeNS(i.space, i.local));
            return r && function(t) {
                this.setAttributeNS(i.space, i.local, r(t))
            }
        }
        var i = yo.ns.qualify(t);
        return this.tween("attr." + t, i.local ? r : e)
    }, Wu.style = function(t, n, e) {
        function r() {
            this.style.removeProperty(t)
        }

        function i(n) {
            return null == n ? r : (n += "", function() {
                var r, i = _o.getComputedStyle(this, null).getPropertyValue(t);
                return i !== n && (r = Se(i, n), function(n) {
                    this.style.setProperty(t, r(n), e)
                })
            })
        }
        var o = arguments.length;
        if (3 > o) {
            if ("string" != typeof t) {
                2 > o && (n = "");
                for (e in t) this.style(e, t[e], n);
                return this
            }
            e = ""
        }
        return Ti(this, "style." + t, n, i)
    }, Wu.styleTween = function(t, n, e) {
        function r(r, i) {
            var o = n.call(this, r, i, _o.getComputedStyle(this, null).getPropertyValue(t));
            return o && function(n) {
                this.style.setProperty(t, o(n), e)
            }
        }
        return arguments.length < 3 && (e = ""), this.tween("style." + t, r)
    }, Wu.text = function(t) {
        return Ti(this, "text", t, Ni)
    }, Wu.remove = function() {
        return this.each("end.transition", function() {
            var t;
            this.__transition__.count < 2 && (t = this.parentNode) && t.removeChild(this)
        })
    }, Wu.ease = function(t) {
        var n = this.id;
        return arguments.length < 1 ? this.node().__transition__[n].ease : ("function" != typeof t && (t = yo.ease.apply(yo, arguments)), N(this, function(e) {
            e.__transition__[n].ease = t
        }))
    }, Wu.delay = function(t) {
        var n = this.id;
        return N(this, "function" == typeof t ? function(e, r, i) {
            e.__transition__[n].delay = +t.call(e, e.__data__, r, i)
        } : (t = +t, function(e) {
            e.__transition__[n].delay = t
        }))
    }, Wu.duration = function(t) {
        var n = this.id;
        return N(this, "function" == typeof t ? function(e, r, i) {
            e.__transition__[n].duration = Math.max(1, t.call(e, e.__data__, r, i))
        } : (t = Math.max(1, t), function(e) {
            e.__transition__[n].duration = t
        }))
    }, Wu.each = function(t, n) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = Ru,
                i = Pu;
            Pu = e, N(this, function(n, r, i) {
                Ru = n.__transition__[e], t.call(n, n.__data__, r, i)
            }), Ru = r, Pu = i
        } else N(this, function(r) {
            var i = r.__transition__[e];
            (i.event || (i.event = yo.dispatch("start", "end"))).on(t, n)
        });
        return this
    }, Wu.transition = function() {
        for (var t, n, e, r, i = this.id, o = ++$u, a = [], u = 0, s = this.length; s > u; u++) {
            a.push(t = []);
            for (var n = this[u], l = 0, c = n.length; c > l; l++)(e = n[l]) && (r = Object.create(e.__transition__[i]), r.delay += r.duration, Ci(e, l, o, r)), t.push(e)
        }
        return Si(a, o)
    }, yo.svg.axis = function() {
        function t(t) {
            t.each(function() {
                var t, l = yo.select(this),
                    c = null == s ? e.ticks ? e.ticks.apply(e, u) : e.domain() : s,
                    f = null == n ? e.tickFormat ? e.tickFormat.apply(e, u) : gt : n,
                    h = l.selectAll(".tick").data(c, gt),
                    p = h.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
                    d = yo.transition(h.exit()).style("opacity", 1e-6).remove(),
                    g = yo.transition(h).style("opacity", 1),
                    m = Zr(e),
                    v = l.selectAll(".domain").data([0]),
                    y = (v.enter().append("path").attr("class", "domain"), yo.transition(v)),
                    x = e.copy(),
                    b = this.__chart__ || x;
                this.__chart__ = x, p.append("line"), p.append("text");
                var M = p.select("line"),
                    w = g.select("line"),
                    _ = h.select("text").text(f),
                    E = p.select("text"),
                    k = g.select("text");
                switch (r) {
                    case "bottom":
                        t = Ai, M.attr("y2", i), E.attr("y", Math.max(i, 0) + a), w.attr("x2", 0).attr("y2", i), k.attr("x", 0).attr("y", Math.max(i, 0) + a), _.attr("dy", ".71em").style("text-anchor", "middle"), y.attr("d", "M" + m[0] + "," + o + "V0H" + m[1] + "V" + o);
                        break;
                    case "top":
                        t = Ai, M.attr("y2", -i), E.attr("y", -(Math.max(i, 0) + a)), w.attr("x2", 0).attr("y2", -i), k.attr("x", 0).attr("y", -(Math.max(i, 0) + a)), _.attr("dy", "0em").style("text-anchor", "middle"), y.attr("d", "M" + m[0] + "," + -o + "V0H" + m[1] + "V" + -o);
                        break;
                    case "left":
                        t = Di, M.attr("x2", -i), E.attr("x", -(Math.max(i, 0) + a)), w.attr("x2", -i).attr("y2", 0), k.attr("x", -(Math.max(i, 0) + a)).attr("y", 0), _.attr("dy", ".32em").style("text-anchor", "end"), y.attr("d", "M" + -o + "," + m[0] + "H0V" + m[1] + "H" + -o);
                        break;
                    case "right":
                        t = Di, M.attr("x2", i), E.attr("x", Math.max(i, 0) + a), w.attr("x2", i).attr("y2", 0), k.attr("x", Math.max(i, 0) + a).attr("y", 0), _.attr("dy", ".32em").style("text-anchor", "start"), y.attr("d", "M" + o + "," + m[0] + "H0V" + m[1] + "H" + o)
                }
                if (e.rangeBand) {
                    var S = x.rangeBand() / 2,
                        T = function(t) {
                            return x(t) + S
                        };
                    p.call(t, T), g.call(t, T)
                } else p.call(t, b), g.call(t, x), d.call(t, x)
            })
        }
        var n, e = yo.scale.linear(),
            r = Xu,
            i = 6,
            o = 6,
            a = 3,
            u = [10],
            s = null;
        return t.scale = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.orient = function(n) {
            return arguments.length ? (r = n in Uu ? n + "" : Xu, t) : r
        }, t.ticks = function() {
            return arguments.length ? (u = arguments, t) : u
        }, t.tickValues = function(n) {
            return arguments.length ? (s = n, t) : s
        }, t.tickFormat = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.tickSize = function(n) {
            var e = arguments.length;
            return e ? (i = +n, o = +arguments[e - 1], t) : i
        }, t.innerTickSize = function(n) {
            return arguments.length ? (i = +n, t) : i
        }, t.outerTickSize = function(n) {
            return arguments.length ? (o = +n, t) : o
        }, t.tickPadding = function(n) {
            return arguments.length ? (a = +n, t) : a
        }, t.tickSubdivide = function() {
            return arguments.length && t
        }, t
    };
    var Xu = "bottom",
        Uu = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    yo.svg.brush = function() {
        function t(o) {
            o.each(function() {
                var o = yo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i),
                    a = o.selectAll(".background").data([0]);
                a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), o.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var u = o.selectAll(".resize").data(m, gt);
                u.exit().remove(), u.enter().append("g").attr("class", function(t) {
                    return "resize " + t
                }).style("cursor", function(t) {
                    return Yu[t]
                }).append("rect").attr("x", function(t) {
                    return /[ew]$/.test(t) ? -3 : null
                }).attr("y", function(t) {
                    return /^[ns]/.test(t) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), u.style("display", t.empty() ? "none" : null);
                var c, f = yo.transition(o),
                    h = yo.transition(a);
                s && (c = Zr(s), h.attr("x", c[0]).attr("width", c[1] - c[0]), e(f)), l && (c = Zr(l), h.attr("y", c[0]).attr("height", c[1] - c[0]), r(f)), n(f)
            })
        }

        function n(t) {
            t.selectAll(".resize").attr("transform", function(t) {
                return "translate(" + c[+/e$/.test(t)] + "," + h[+/^s/.test(t)] + ")"
            })
        }

        function e(t) {
            t.select(".extent").attr("x", c[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", c[1] - c[0])
        }

        function r(t) {
            t.select(".extent").attr("y", h[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
        }

        function i() {
            function i() {
                32 == yo.event.keyCode && (N || (x = null, A[0] -= c[1], A[1] -= h[1], N = 2), f())
            }

            function p() {
                32 == yo.event.keyCode && 2 == N && (A[0] += c[1], A[1] += h[1], N = 0, f())
            }

            function m() {
                var t = yo.mouse(M),
                    i = !1;
                b && (t[0] += b[0], t[1] += b[1]), N || (yo.event.altKey ? (x || (x = [(c[0] + c[1]) / 2, (h[0] + h[1]) / 2]), A[0] = c[+(t[0] < x[0])], A[1] = h[+(t[1] < x[1])]) : x = null), S && v(t, s, 0) && (e(E), i = !0), T && v(t, l, 1) && (r(E), i = !0), i && (n(E), _({
                    type: "brush",
                    mode: N ? "move" : "resize"
                }))
            }

            function v(t, n, e) {
                var r, i, u = Zr(n),
                    s = u[0],
                    l = u[1],
                    f = A[e],
                    p = e ? h : c,
                    m = p[1] - p[0];
                return N && (s -= f, l -= m + f), r = (e ? g : d) ? Math.max(s, Math.min(l, t[e])) : t[e], N ? i = (r += f) + m : (x && (f = Math.max(s, Math.min(l, 2 * x[e] - r))), r > f ? (i = r, r = f) : i = f), p[0] != r || p[1] != i ? (e ? a = null : o = null, p[0] = r, p[1] = i, !0) : void 0
            }

            function y() {
                m(), E.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), yo.select("body").style("cursor", null), D.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), C(), _({
                    type: "brushend"
                })
            }
            var x, b, M = this,
                w = yo.select(yo.event.target),
                _ = u.of(M, arguments),
                E = yo.select(M),
                k = w.datum(),
                S = !/^(n|s)$/.test(k) && s,
                T = !/^(e|w)$/.test(k) && l,
                N = w.classed("extent"),
                C = H(),
                A = yo.mouse(M),
                D = yo.select(_o).on("keydown.brush", i).on("keyup.brush", p);
            if (yo.event.changedTouches ? D.on("touchmove.brush", m).on("touchend.brush", y) : D.on("mousemove.brush", m).on("mouseup.brush", y), E.interrupt().selectAll("*").interrupt(), N) A[0] = c[0] - A[0], A[1] = h[0] - A[1];
            else if (k) {
                var j = +/w$/.test(k),
                    L = +/^n/.test(k);
                b = [c[1 - j] - A[0], h[1 - L] - A[1]], A[0] = c[j], A[1] = h[L]
            } else yo.event.altKey && (x = A.slice());
            E.style("pointer-events", "none").selectAll(".resize").style("display", null), yo.select("body").style("cursor", w.style("cursor")), _({
                type: "brushstart"
            }), m()
        }
        var o, a, u = p(t, "brushstart", "brush", "brushend"),
            s = null,
            l = null,
            c = [0, 0],
            h = [0, 0],
            d = !0,
            g = !0,
            m = Vu[0];
        return t.event = function(t) {
            t.each(function() {
                var t = u.of(this, arguments),
                    n = {
                        x: c,
                        y: h,
                        i: o,
                        j: a
                    },
                    e = this.__chart__ || n;
                this.__chart__ = n, Pu ? yo.select(this).transition().each("start.brush", function() {
                    o = e.i, a = e.j, c = e.x, h = e.y, t({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var e = Te(c, n.x),
                        r = Te(h, n.y);
                    return o = a = null,
                        function(i) {
                            c = n.x = e(i), h = n.y = r(i), t({
                                type: "brush",
                                mode: "resize"
                            })
                        }
                }).each("end.brush", function() {
                    o = n.i, a = n.j, t({
                        type: "brush",
                        mode: "resize"
                    }), t({
                        type: "brushend"
                    })
                }) : (t({
                    type: "brushstart"
                }), t({
                    type: "brush",
                    mode: "resize"
                }), t({
                    type: "brushend"
                }))
            })
        }, t.x = function(n) {
            return arguments.length ? (s = n, m = Vu[!s << 1 | !l], t) : s
        }, t.y = function(n) {
            return arguments.length ? (l = n, m = Vu[!s << 1 | !l], t) : l
        }, t.clamp = function(n) {
            return arguments.length ? (s && l ? (d = !!n[0], g = !!n[1]) : s ? d = !!n : l && (g = !!n), t) : s && l ? [d, g] : s ? d : l ? g : null
        }, t.extent = function(n) {
            var e, r, i, u, f;
            return arguments.length ? (s && (e = n[0], r = n[1], l && (e = e[0], r = r[0]), o = [e, r], s.invert && (e = s(e), r = s(r)), e > r && (f = e, e = r, r = f), (e != c[0] || r != c[1]) && (c = [e, r])), l && (i = n[0], u = n[1], s && (i = i[1], u = u[1]), a = [i, u], l.invert && (i = l(i), u = l(u)), i > u && (f = i, i = u, u = f), (i != h[0] || u != h[1]) && (h = [i, u])), t) : (s && (o ? (e = o[0], r = o[1]) : (e = c[0], r = c[1], s.invert && (e = s.invert(e), r = s.invert(r)), e > r && (f = e, e = r, r = f))), l && (a ? (i = a[0], u = a[1]) : (i = h[0], u = h[1], l.invert && (i = l.invert(i), u = l.invert(u)), i > u && (f = i, i = u, u = f))), s && l ? [
                [e, i],
                [r, u]
            ] : s ? [e, r] : l && [i, u])
        }, t.clear = function() {
            return t.empty() || (c = [0, 0], h = [0, 0], o = a = null), t
        }, t.empty = function() {
            return !!s && c[0] == c[1] || !!l && h[0] == h[1]
        }, yo.rebind(t, u, "on")
    };
    var Yu = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        Vu = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Zu = yo.time = {},
        Ju = Date,
        Gu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    ji.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            Ku.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            Ku.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            Ku.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            Ku.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            Ku.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            Ku.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            Ku.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            Ku.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            Ku.setTime.apply(this._, arguments)
        }
    };
    var Ku = Date.prototype,
        Qu = "%a %b %e %X %Y",
        ts = "%m/%d/%Y",
        ns = "%H:%M:%S",
        es = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        rs = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        is = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        os = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    Zu.year = Li(function(t) {
        return t = Zu.day(t), t.setMonth(0, 1), t
    }, function(t, n) {
        t.setFullYear(t.getFullYear() + n)
    }, function(t) {
        return t.getFullYear()
    }), Zu.years = Zu.year.range, Zu.years.utc = Zu.year.utc.range, Zu.day = Li(function(t) {
        var n = new Ju(2e3, 0);
        return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
    }, function(t, n) {
        t.setDate(t.getDate() + n)
    }, function(t) {
        return t.getDate() - 1
    }), Zu.days = Zu.day.range, Zu.days.utc = Zu.day.utc.range, Zu.dayOfYear = function(t) {
        var n = Zu.year(t);
        return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5)
    }, Gu.forEach(function(t, n) {
        t = t.toLowerCase(), n = 7 - n;
        var e = Zu[t] = Li(function(t) {
            return (t = Zu.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
        }, function(t, n) {
            t.setDate(t.getDate() + 7 * Math.floor(n))
        }, function(t) {
            var e = Zu.year(t).getDay();
            return Math.floor((Zu.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
        });
        Zu[t + "s"] = e.range, Zu[t + "s"].utc = e.utc.range, Zu[t + "OfYear"] = function(t) {
            var e = Zu.year(t).getDay();
            return Math.floor((Zu.dayOfYear(t) + (e + n) % 7) / 7)
        }
    }), Zu.week = Zu.sunday, Zu.weeks = Zu.sunday.range, Zu.weeks.utc = Zu.sunday.utc.range, Zu.weekOfYear = Zu.sundayOfYear, Zu.format = Hi;
    var as = Fi(es),
        us = Oi(es),
        ss = Fi(rs),
        ls = Oi(rs),
        cs = Fi(is),
        fs = Oi(is),
        hs = Fi(os),
        ps = Oi(os),
        ds = /^%/,
        gs = {
            "-": "",
            _: " ",
            0: "0"
        },
        ms = {
            a: function(t) {
                return rs[t.getDay()]
            },
            A: function(t) {
                return es[t.getDay()]
            },
            b: function(t) {
                return os[t.getMonth()]
            },
            B: function(t) {
                return is[t.getMonth()]
            },
            c: Hi(Qu),
            d: function(t, n) {
                return Pi(t.getDate(), n, 2)
            },
            e: function(t, n) {
                return Pi(t.getDate(), n, 2)
            },
            H: function(t, n) {
                return Pi(t.getHours(), n, 2)
            },
            I: function(t, n) {
                return Pi(t.getHours() % 12 || 12, n, 2)
            },
            j: function(t, n) {
                return Pi(1 + Zu.dayOfYear(t), n, 3)
            },
            L: function(t, n) {
                return Pi(t.getMilliseconds(), n, 3)
            },
            m: function(t, n) {
                return Pi(t.getMonth() + 1, n, 2)
            },
            M: function(t, n) {
                return Pi(t.getMinutes(), n, 2)
            },
            p: function(t) {
                return t.getHours() >= 12 ? "PM" : "AM"
            },
            S: function(t, n) {
                return Pi(t.getSeconds(), n, 2)
            },
            U: function(t, n) {
                return Pi(Zu.sundayOfYear(t), n, 2)
            },
            w: function(t) {
                return t.getDay()
            },
            W: function(t, n) {
                return Pi(Zu.mondayOfYear(t), n, 2)
            },
            x: Hi(ts),
            X: Hi(ns),
            y: function(t, n) {
                return Pi(t.getFullYear() % 100, n, 2)
            },
            Y: function(t, n) {
                return Pi(t.getFullYear() % 1e4, n, 4)
            },
            Z: so,
            "%": function() {
                return "%"
            }
        },
        vs = {
            a: Ri,
            A: Bi,
            b: Xi,
            B: Ui,
            c: Yi,
            d: no,
            e: no,
            H: ro,
            I: ro,
            j: eo,
            L: ao,
            m: to,
            M: io,
            p: uo,
            S: oo,
            U: Wi,
            w: Ii,
            W: $i,
            x: Vi,
            X: Zi,
            y: Gi,
            Y: Ji,
            Z: Ki,
            "%": lo
        },
        ys = /^\s*\d+/,
        xs = yo.map({
            am: 0,
            pm: 1
        });
    Hi.utc = co;
    var bs = co("%Y-%m-%dT%H:%M:%S.%LZ");
    Hi.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? fo : bs, fo.parse = function(t) {
        var n = new Date(t);
        return isNaN(n) ? null : n
    }, fo.toString = bs.toString, Zu.second = Li(function(t) {
        return new Ju(1e3 * Math.floor(t / 1e3))
    }, function(t, n) {
        t.setTime(t.getTime() + 1e3 * Math.floor(n))
    }, function(t) {
        return t.getSeconds()
    }), Zu.seconds = Zu.second.range, Zu.seconds.utc = Zu.second.utc.range, Zu.minute = Li(function(t) {
        return new Ju(6e4 * Math.floor(t / 6e4))
    }, function(t, n) {
        t.setTime(t.getTime() + 6e4 * Math.floor(n))
    }, function(t) {
        return t.getMinutes()
    }), Zu.minutes = Zu.minute.range, Zu.minutes.utc = Zu.minute.utc.range, Zu.hour = Li(function(t) {
        var n = t.getTimezoneOffset() / 60;
        return new Ju(36e5 * (Math.floor(t / 36e5 - n) + n))
    }, function(t, n) {
        t.setTime(t.getTime() + 36e5 * Math.floor(n))
    }, function(t) {
        return t.getHours()
    }), Zu.hours = Zu.hour.range, Zu.hours.utc = Zu.hour.utc.range, Zu.month = Li(function(t) {
        return t = Zu.day(t), t.setDate(1), t
    }, function(t, n) {
        t.setMonth(t.getMonth() + n)
    }, function(t) {
        return t.getMonth()
    }), Zu.months = Zu.month.range, Zu.months.utc = Zu.month.utc.range;
    var Ms = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        ws = [
            [Zu.second, 1],
            [Zu.second, 5],
            [Zu.second, 15],
            [Zu.second, 30],
            [Zu.minute, 1],
            [Zu.minute, 5],
            [Zu.minute, 15],
            [Zu.minute, 30],
            [Zu.hour, 1],
            [Zu.hour, 3],
            [Zu.hour, 6],
            [Zu.hour, 12],
            [Zu.day, 1],
            [Zu.day, 2],
            [Zu.week, 1],
            [Zu.month, 1],
            [Zu.month, 3],
            [Zu.year, 1]
        ],
        _s = [
            [Hi("%Y"), Xt],
            [Hi("%B"), function(t) {
                return t.getMonth()
            }],
            [Hi("%b %d"), function(t) {
                return 1 != t.getDate()
            }],
            [Hi("%a %d"), function(t) {
                return t.getDay() && 1 != t.getDate()
            }],
            [Hi("%I %p"), function(t) {
                return t.getHours()
            }],
            [Hi("%I:%M"), function(t) {
                return t.getMinutes()
            }],
            [Hi(":%S"), function(t) {
                return t.getSeconds()
            }],
            [Hi(".%L"), function(t) {
                return t.getMilliseconds()
            }]
        ],
        Es = go(_s);
    ws.year = Zu.year, Zu.scale = function() {
        return ho(yo.scale.linear(), ws, Es)
    };
    var ks = {
            range: function(t, n, e) {
                return yo.range(+t, +n, e).map(po)
            }
        },
        Ss = ws.map(function(t) {
            return [t[0].utc, t[1]]
        }),
        Ts = [
            [co("%Y"), Xt],
            [co("%B"), function(t) {
                return t.getUTCMonth()
            }],
            [co("%b %d"), function(t) {
                return 1 != t.getUTCDate()
            }],
            [co("%a %d"), function(t) {
                return t.getUTCDay() && 1 != t.getUTCDate()
            }],
            [co("%I %p"), function(t) {
                return t.getUTCHours()
            }],
            [co("%I:%M"), function(t) {
                return t.getUTCMinutes()
            }],
            [co(":%S"), function(t) {
                return t.getUTCSeconds()
            }],
            [co(".%L"), function(t) {
                return t.getUTCMilliseconds()
            }]
        ],
        Ns = go(Ts);
    return Ss.year = Zu.year.utc, Zu.scale.utc = function() {
        return ho(yo.scale.linear(), Ss, Ns)
    }, yo.text = mt(function(t) {
        return t.responseText
    }), yo.json = function(t, n) {
        return vt(t, "application/json", mo, n)
    }, yo.html = function(t, n) {
        return vt(t, "text/html", vo, n)
    }, yo.xml = mt(function(t) {
        return t.responseXML
    }), yo
}();