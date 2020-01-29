// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [],
            []
        ]



    };
    var aa, ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = { sf: !0 },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.sf;
                break a
            } catch (a) {}
            fa = !1
        }
        da = fa ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var ka = da,
        la = this || self,
        ma = /^[\w+/_-]+[=]{0,2}$/,
        oa = null;
    var pa = function() {},
        qa = function(a) { return "function" == typeof a },
        f = function(a) { return "string" == typeof a },
        ra = function(a) { return "number" == typeof a && !isNaN(a) },
        ua = function(a) { return "[object Array]" == Object.prototype.toString.call(Object(a)) },
        t = function(a, b) {
            if (Array.prototype.indexOf) { var c = a.indexOf(b); return "number" == typeof c ? c : -1 }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        va = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        wa = function(a, b) {
            if (!ra(a) ||
                !ra(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ya = function(a, b) {
            for (var c = new xa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        za = function(a, b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Aa = function(a) { return Math.round(Number(a)) || 0 },
        Ca = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Da = function(a) {
            var b = [];
            if (ua(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ea = function(a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        Fa = function() { return (new Date).getTime() },
        xa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    xa.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    xa.prototype.get = function(a) { return this.values[this.prefix + a] };
    xa.prototype.contains = function(a) { return void 0 !== this.get(a) };
    var Ga = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Ha = function(a) {
            var b = !1;
            return function() {
                if (!b) try { a() } catch (c) {}
                b = !0
            }
        },
        Ia = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ka = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        La = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ma = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Na = function(a) { if (null == a) return String(a); var b = Ma.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Oa = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Pa = function(a) {
            if (!a || "object" != Na(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Oa(a, "constructor") && !Oa(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Oa(a, b)
        },
        C = function(a, b) {
            var c = b || ("array" == Na(a) ? [] : {}),
                d;
            for (d in a)
                if (Oa(a, d)) { var e = a[d]; "array" == Na(e) ? ("array" != Na(c[d]) && (c[d] = []), c[d] = C(e, c[d])) : Pa(e) ? (Pa(c[d]) || (c[d] = {}), c[d] = C(e, c[d])) : c[d] = e }
            return c
        };
    var ob;
    var pb = [],
        qb = [],
        rb = [],
        sb = [],
        ub = [],
        vb = {},
        wb, xb, yb, zb = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Ab = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = vb[c],
                e = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[void 0 !== d ? g : g.substr(4)] = a[g]);
            return void 0 !== d ? d(e) : ob(c, e, b)
        },
        Cb = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Bb(a[e], b, c));
            return d
        },
        Db = function(a) { var b = a["function"]; if (!b) throw "Error: No function name given for function call."; var c = vb[b]; return c ? c.priorityOverride || 0 : 0 },
        Bb = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Bb(a[e], b, c));
                        return d;
                    case "macro":
                        var g = a[1];
                        if (c[g]) return;
                        var h = pb[g];
                        if (!h || b.Jc(h)) return;
                        c[g] = !0;
                        try {
                            var k = Cb(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Ab(k, b);
                            yb && (d = yb.Uf(d, k))
                        } catch (y) { b.he && b.he(y, Number(g)), d = !1 }
                        c[g] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Bb(a[l], b, c)] = Bb(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var q = Bb(a[n], b, c);
                            xb && (m = m || q === xb.zb);
                            d.push(q)
                        }
                        return xb && m ? xb.Xf(d) : d.join("");
                    case "escape":
                        d = Bb(a[1], b, c);
                        if (xb && ua(a[1]) && "macro" === a[1][0] && xb.Dg(a)) return xb.Og(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Qa[a[u]] && (d = Qa[a[u]](d));
                        return d;
                    case "tag":
                        var p = a[1];
                        if (!sb[p]) throw Error("Unable to resolve tag reference " + p + ".");
                        return d = {
                            Wd: a[2],
                            index: p
                        };
                    case "zb":
                        var r = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        r["function"] = a[1];
                        var v = Fb(r, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Fb = function(a, b, c) { try { return wb(Cb(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var Gb = function() { var a = function(b) { return { toString: function() { return b } } }; return { ld: a("convert_case_to"), md: a("convert_false_to"), nd: a("convert_null_to"), od: a("convert_true_to"), pd: a("convert_undefined_to"), uh: a("debug_mode_metadata"), ma: a("function"), ff: a("instance_name"), hf: a("live_only"), jf: a("malware_disabled"), kf: a("metadata"), wh: a("original_vendor_template_id"), lf: a("once_per_event"), Jd: a("once_per_load"), Kd: a("setup_tags"), Ld: a("tag_id"), Md: a("teardown_tags") } }();
    var Hb = null,
        Kb = function(a) {
            function b(q) { for (var u = 0; u < q.length; u++) d[q[u]] = !0 }
            var c = [],
                d = [];
            Hb = Ib(a);
            for (var e = 0; e < qb.length; e++) {
                var g = qb[e],
                    h = Jb(g);
                if (h) {
                    for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || [])
            }
            for (var m = [], n = 0; n < sb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        Jb = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) { var d = Hb(b[c]); if (0 === d) return !1; if (2 === d) return null }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = Hb(e[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Ib = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = Fb(rb[c], a)); return b[c] } };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var D = window,
        F = document,
        Zb = navigator,
        $b = F.currentScript && F.currentScript.src,
        ac = function(a, b) {
            var c = D[a];
            D[a] = void 0 === c ? b : c;
            return D[a]
        },
        bc = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        cc = function(a, b, c) {
            var d = F.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            bc(d, b);
            c && (d.onerror = c);
            var e;
            if (null === oa) b: {
                var g = la.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) { var k = h.nonce || h.getAttribute("nonce"); if (k && ma.test(k)) { oa = k; break b } }
                oa = ""
            }
            e = oa;
            e && d.setAttribute("nonce", e);
            var l = F.getElementsByTagName("script")[0] || F.body || F.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        dc = function() { if ($b) { var a = $b.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 },
        ec = function(a, b) {
            var c = F.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = F.body && F.body.lastChild ||
                F.body || F.head;
            d.parentNode.insertBefore(c, d);
            bc(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        fc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        gc = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        hc = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        G = function(a) { D.setTimeout(a, 0) },
        ic = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        jc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        kc = function(a) {
            var b = F.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        lc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        },
        mc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var oc = function(a) { return nc ? F.querySelectorAll(a) : null },
        pc = function(a, b) {
            if (!nc) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        qc = !1;
    if (F.querySelectorAll) try {
        var sc = F.querySelectorAll(":root");
        sc && 1 == sc.length && sc[0] == F.documentElement && (qc = !0)
    } catch (a) {}
    var nc = qc;
    var H = { la: "_ee", gc: "event_callback", Ra: "event_timeout", w: "gtag.config", O: "allow_ad_personalization_signals", oc: "restricted_data_processing", U: "cookie_expires", Qa: "cookie_update", Ba: "session_duration", V: "user_properties" };
    H.cc = "page_view", H.Fe = "user_engagement", H.Ge = "allow_custom_scripts", H.He = "allow_display_features", H.Ie = "allow_enhanced_conversions", H.Ad = "enhanced_conversions", H.sb = "client_id", H.T = "cookie_domain", H.tb = "cookie_name", H.ya = "cookie_path", H.ca = "currency", H.ub = "custom_params", H.Le = "custom_map", H.kc = "groups", H.za = "language", H.Ke = "country", H.vh = "non_interaction", H.Va = "page_location", H.Wa = "page_referrer", H.nc = "page_title", H.Xa = "send_page_view", H.Aa = "send_to", H.qc = "session_engaged", H.xb = "session_id", H.sc =
        "session_number", H.cf = "tracking_id", H.ka = "linker", H.Sa = "accept_incoming", H.F = "domains", H.Ua = "url_position", H.Ta = "decorate_forms", H.Ed = "phone_conversion_number", H.Cd = "phone_conversion_callback", H.Dd = "phone_conversion_css_class", H.Fd = "phone_conversion_options", H.Ze = "phone_conversion_ids", H.Ye = "phone_conversion_country_code", H.qd = "aw_remarketing", H.rd = "aw_remarketing_only", H.Z = "value", H.$e = "quantity", H.Oe = "affiliation", H.Se = "tax", H.Re = "shipping", H.fc = "list_name", H.zd = "checkout_step", H.yd = "checkout_option",
        H.Pe = "coupon", H.Qe = "promotions", H.Ya = "transaction_id", H.Za = "user_id", H.xa = "conversion_linker", H.wa = "conversion_cookie_prefix", H.P = "cookie_prefix", H.Y = "items", H.vd = "aw_merchant_id", H.td = "aw_feed_country", H.ud = "aw_feed_language", H.sd = "discount", H.xd = "disable_merchant_reported_purchases", H.mc = "new_customer", H.wd = "customer_lifetime_value", H.Ne = "dc_natural_search", H.Me = "dc_custom_params", H.df = "trip_type", H.Bd = "passengers", H.We = "method", H.bf = "search_term", H.Je = "content_type", H.Xe = "optimize_id", H.Te = "experiments",
        H.wb = "google_signals", H.jc = "google_tld", H.yb = "update", H.ic = "firebase_id", H.vb = "ga_restrict_domain", H.hc = "event_settings", H.af = "screen_name", H.Ve = "_x_19", H.Ue = "_x_20", H.da = "transport_url", H.ef = [H.O, H.oc, H.T, H.U, H.tb, H.ya, H.P, H.Qa, H.ub, H.gc, H.hc, H.Ra, H.vb, H.wb, H.jc, H.kc, H.ka, H.Aa, H.Xa, H.Ba, H.yb, H.V, H.da], H.Hd = [H.Va, H.Wa, H.nc, H.za, H.af, H.Za, H.ic], H.jd = [H.Aa, H.qd, H.rd, H.ub, H.Xa, H.za, H.Z, H.ca, H.Ya, H.Za, H.xa, H.wa, H.P, H.Va, H.Wa, H.Ed, H.Cd, H.Dd, H.Fd, H.Y, H.vd, H.td, H.ud, H.sd, H.xd, H.mc, H.wd, H.O, H.oc, H.yb, H.ic,
            H.Ad, H.da
        ];
    var Ic = /[A-Z]+/,
        Jc = /\s/,
        Kc = function(a) {
            if (f(a) && (a = Ea(a), !Jc.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ic.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], h: d }
                    }
                }
            }
        },
        Mc = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Kc(a[c]);
                d && (b[d.id] = d)
            }
            Lc(b);
            var e = [];
            za(b, function(g, h) { e.push(h) });
            return e
        };

    function Lc(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.h[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Nc = {},
        Oc = null,
        Pc = Math.random();
    Nc.m = "UA-23581568-13";
    Nc.Db = "c61";
    var Qc = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0, __paused: !0, __tg: !0 },
        Rc = "www.googletagmanager.com/gtm.js";
    Rc = "www.googletagmanager.com/gtag/js";
    var Sc = Rc,
        Tc = null,
        Uc = null,
        Vc = null,
        Wc = "//www.googletagmanager.com/a?id=" + Nc.m + "&cv=1",
        Xc = {},
        Yc = {},
        Zc = function() {
            var a = Oc.sequence || 0;
            Oc.sequence = a + 1;
            return a
        };
    var $c = {},
        I = function(a, b) {
            $c[a] = $c[a] || [];
            $c[a][b] = !0
        },
        ad = function(a) { for (var b = [], c = $c[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") };
    var cd = function() { return "&tc=" + sb.filter(function(a) { return a }).length },
        fd = function() { dd || (dd = D.setTimeout(ed, 500)) },
        ed = function() {
            dd && (D.clearTimeout(dd), dd = void 0);
            void 0 === gd || hd[gd] && !id && !jd || (kd[gd] || ld.Fg() || 0 >= md-- ? (I("GTM", 1), kd[gd] = !0) : (ld.Zg(), fc(nd()), hd[gd] = !0, od = jd = id = ""))
        },
        nd = function() {
            var a = gd;
            if (void 0 === a) return "";
            var b = ad("GTM"),
                c = ad("TAGGING");
            return [pd, hd[a] ? "" : "&es=1", qd[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", cd(), id, jd, od, "&z=0"].join("")
        },
        rd = function() {
            return [Wc, "&v=3&t=t", "&pid=" +
                wa(), "&rv=" + Nc.Db
            ].join("")
        },
        sd = "0.005000" > Math.random(),
        pd = rd(),
        td = function() { pd = rd() },
        hd = {},
        id = "",
        jd = "",
        od = "",
        gd = void 0,
        qd = {},
        kd = {},
        dd = void 0,
        ld = function(a, b) {
            var c = 0,
                d = 0;
            return {
                Fg: function() {
                    if (c < a) return !1;
                    Fa() - d >= b && (c = 0);
                    return c >= a
                },
                Zg: function() {
                    Fa() - d >= b && (c = 0);
                    c++;
                    d = Fa()
                }
            }
        }(2, 1E3),
        md = 1E3,
        ud = function(a, b) {
            if (sd && !kd[a] && gd !== a) {
                ed();
                gd = a;
                id = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                qd[a] = "&e=" + c + "&eid=" + a;
                fd()
            }
        },
        vd = function(a, b, c) {
            if (sd && !kd[a] && b) {
                a !== gd &&
                    (ed(), gd = a);
                var d = String(b[Gb.ma] || "").replace(/_/g, "");
                0 === d.indexOf("cvt") && (d = "cvt");
                var e = c + d;
                id = id ? id + "." + e : "&tr=" + e;
                fd();
                2022 <= nd().length && ed()
            }
        },
        wd = function(a, b, c) {
            if (sd && !kd[a]) {
                a !== gd && (ed(), gd = a);
                var d = c + b;
                jd = jd ? jd + "." + d : "&epr=" + d;
                fd();
                2022 <= nd().length && ed()
            }
        };
    var xd = {},
        yd = new xa,
        zd = {},
        Ad = {},
        Dd = {
            name: "dataLayer",
            set: function(a, b) {
                C(La(a, b), zd);
                Bd()
            },
            get: function(a) { return Cd(a, 2) },
            reset: function() {
                yd = new xa;
                zd = {};
                Bd()
            }
        },
        Cd = function(a, b) {
            if (2 != b) {
                var c = yd.get(a);
                if (sd) {
                    var d = Ed(a);
                    c !== d && I("GTM", 5)
                }
                return c
            }
            return Ed(a)
        },
        Ed = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            var h = function(k, l) {
                for (var m = 0; void 0 !== k && m < d.length; m++) {
                    if (null === k) return !1;
                    k = k[d[m]]
                }
                return void 0 !== k || 1 < m ? k : l.length ? h(Fd(l.pop()), l) : Gd(d)
            };
            e = !0;
            g = h(zd.eventModel, [b, c]);
            return e ? g : Gd(d)
        },
        Gd = function(a) {
            for (var b = zd, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var Fd = function(a) { if (a) { var b = Gd(["gtag", "targets", a]); return Pa(b) ? b : void 0 } },
        Hd = function(a, b) {
            function c(g) { g && za(g, function(h) { d[h] = null }) }
            var d = {};
            c(zd);
            delete d.eventModel;
            c(Fd(a));
            c(Fd(b));
            c(zd.eventModel);
            var e = [];
            za(d, function(g) { e.push(g) });
            return e
        };
    var Id = function(a, b) { Ad.hasOwnProperty(a) || (yd.set(a, b), C(La(a, b), zd), Bd()) },
        Bd = function(a) {
            za(Ad, function(b, c) {
                yd.set(b, c);
                C(La(b, void 0), zd);
                C(La(b, c), zd);
                a && delete Ad[b]
            })
        },
        Jd = function(a, b, c) { xd[a] = xd[a] || {}; var d = 1 !== c ? Ed(b) : yd.get(b); "array" === Na(d) || "object" === Na(d) ? xd[a][b] = C(d) : xd[a][b] = d },
        Kd = function(a, b) { if (xd[a]) return xd[a][b] };
    var Ld = function() { var a = !1; return a };
    var P = function(a, b, c, d) { return (2 === Md() || d || "http:" != D.location.protocol ? a : b) + c },
        Md = function() {
            var a = dc(),
                b;
            if (1 === a) a: {
                var c = Sc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = F.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) { b = 3; break a }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Od = function(a, b, c) {
            if (D[a.functionName]) return b.Qc && G(b.Qc), D[a.functionName];
            var d = Nd();
            D[a.functionName] = d;
            if (a.Gb)
                for (var e = 0; e < a.Gb.length; e++) D[a.Gb[e]] = D[a.Gb[e]] || Nd();
            a.Rb && void 0 === D[a.Rb] && (D[a.Rb] = c);
            cc(P("https://", "http://", a.$c), b.Qc, b.Jg);
            return d
        },
        Nd = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Pd = { functionName: "_googWcmImpl", Rb: "_googWcmAk", $c: "www.gstatic.com/wcm/loader.js" },
        Qd = { functionName: "_gaPhoneImpl", Rb: "ga_wpid", $c: "www.gstatic.com/gaphone/loader.js" },
        Rd = { Ce: "", pf: "1" },
        Sd = { functionName: "_googCallTrackingImpl", Gb: [Qd.functionName, Pd.functionName], $c: "www.gstatic.com/call-tracking/call-tracking_" + (Rd.Ce || Rd.pf) + ".js" },
        Td = {},
        Ud = function(a, b, c, d) {
            I("GTM", 22);
            if (c) {
                d = d || {};
                var e = Od(Pd, d, a),
                    g = { ak: a, cl: b };
                void 0 === d.ba && (g.autoreplace = c);
                e(2, d.ba, g, c, 0, new Date, d.options)
            }
        },
        Vd = function(a, b, c) {
            I("GTM", 23);
            if (b) {
                c = c || {};
                var d = Od(Qd, c, a),
                    e = {};
                void 0 !== c.ba ? e.receiver = c.ba : e.replace = b;
                e.ga_wpid = a;
                e.destination = b;
                d(2, new Date,
                    e)
            }
        },
        Wd = function(a, b, c, d) {
            I("GTM", 21);
            if (b && c) {
                d = d || {};
                for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: new Date }, g = 0; g < a.length; g++) {
                    var h = a[g];
                    Td[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.h.length ? (e.adData = { ak: h.h[0], cl: h.h[1] }, Td[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = { gaWpid: h.containerId }, Td[h.id] = !0))
                }(e.gaData || e.adData) && Od(Sd, d)(d.ba, e, d.options)
            }
        },
        Xd = function() {
            var a = !1;
            return a
        },
        Yd = function(a, b) {
            if (a)
                if (Ld()) {} else {
                    if (f(a)) {
                        var c = Kc(a);
                        if (!c) return;
                        a = c
                    }
                    var d = function(x) { return b ? b.getWithConfig(x) : Ed(x, a.containerId, a.id) },
                        e = void 0,
                        g = !1,
                        h = d(H.Ze);
                    if (h && ua(h)) {
                        e = [];
                        for (var k = 0; k < h.length; k++) {
                            var l = Kc(h[k]);
                            l && (e.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (g = !0))
                        }
                    }
                    if (!e || g) {
                        var m = d(H.Ed),
                            n;
                        if (m) {
                            n = ua(m) ? m : [m];
                            var q = d(H.Cd),
                                u = d(H.Dd),
                                p = d(H.Fd),
                                r = d(H.Ye),
                                v = q || u,
                                w = 1;
                            "UA" !== a.prefix || e || (w = 5);
                            for (var y = 0; y < n.length; y++) y < w && (e ? Wd(e, n[y], r, { ba: v, options: p }) : "AW" === a.prefix && a.h[1] ? Xd() ? Wd([a], n[y], r || "US", { ba: v, options: p }) : Ud(a.h[0], a.h[1], n[y], { ba: v, options: p }) : "UA" === a.prefix && (Xd() ? Wd([a], n[y], r || "US", { ba: v }) : Vd(a.containerId, n[y], { ba: v })))
                        }
                    }
                }
        };
    var ae = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        be = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        ce = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        de = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var fe = function(a) {
            Yc.pntr = Yc.pntr || ["nonGoogleScripts"];
            Yc.snppx = Yc.snppx || ["nonGoogleScripts"];
            Yc.qpx = Yc.qpx || ["nonGooglePixels"];
            var b = Cd("gtm.whitelist");
            b && I("GTM", 9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Ka(Da(b), be),
                d = Cd("gtm.blacklist");
            d || (d = Cd("tagTypeBlacklist")) && I("GTM", 3);
            d ? I("GTM", 8) : d = [];
            ee() && (d = Da(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= t(Da(d), "google") && I("GTM", 2);
            var e = d && Ka(Da(d), ce),
                g = {};
            return function(h) {
                var k = h && h[Gb.ma];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = Yc[k] || [],
                    m = a(k, l);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > t(c, k))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > t(c, l[q])) {
                                        I("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else { n = !1; break a }
                        n = !0
                    }
                    m = n
                }
                var u = !1;
                if (d) {
                    var p = 0 <= t(e, k);
                    if (p) u = p;
                    else {
                        var r = ya(e, l || []);
                        r && I("GTM", 10);
                        u = r
                    }
                }
                var v = !m || u;
                v || !(0 <= t(l, "sandboxedScripts")) || c && -1 !== t(c, "sandboxedScripts") || (v = ya(e, de));
                return g[k] = v
            }
        },
        ee = function() { return ae.test(D.location && D.location.hostname) };
    var ge = {
        Uf: function(a, b) {
            b[Gb.ld] && "string" === typeof a && (a = 1 == b[Gb.ld] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Gb.nd) && null === a && (a = b[Gb.nd]);
            b.hasOwnProperty(Gb.pd) && void 0 === a && (a = b[Gb.pd]);
            b.hasOwnProperty(Gb.od) && !0 === a && (a = b[Gb.od]);
            b.hasOwnProperty(Gb.md) && !1 === a && (a = b[Gb.md]);
            return a
        }
    };
    var he = { active: !0, isWhitelisted: function() { return !0 } },
        ie = function(a) { var b = Oc.zones;!b && a && (b = Oc.zones = a()); return b };
    var je = function() {};
    var ke = !1,
        le = 0,
        me = [];

    function ne(a) {
        if (!ke) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) { ke = !0; for (var e = 0; e < me.length; e++) G(me[e]) }
            me.push = function() { for (var g = 0; g < arguments.length; g++) G(arguments[g]); return 0 }
        }
    }

    function oe() { if (!ke && 140 > le) { le++; try { F.documentElement.doScroll("left"), ne() } catch (a) { D.setTimeout(oe, 50) } } }
    var pe = function(a) { ke ? a() : me.push(a) };
    var qe = {},
        re = {},
        se = function(a, b, c, d) {
            if (!re[a] || Qc[b] || "__zone" === b) return -1;
            var e = {};
            Pa(d) && (e = C(d, e));
            e.id = c;
            e.status = "timeout";
            return re[a].tags.push(e) - 1
        },
        te = function(a, b, c, d) {
            if (re[a]) {
                var e = re[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function ue(a) {
        for (var b = qe[a] || [], c = 0; c < b.length; c++) b[c]();
        qe[a] = { push: function(d) { d(Nc.m, re[a]) } }
    }
    var xe = function(a, b, c) {
            re[a] = { tags: [] };
            qa(b) && ve(a, b);
            c && D.setTimeout(function() { return ue(a) }, Number(c));
            return we(a)
        },
        ve = function(a, b) {
            qe[a] = qe[a] || [];
            qe[a].push(Ha(function() { return G(function() { b(Nc.m, re[a]) }) }))
        };

    function we(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return Ha(function() {
                    b++;
                    d && b >= c && ue(a)
                })
            },
            Ef: function() {
                d = !0;
                b >= c && ue(a)
            }
        }
    };
    var ye = function() {
        function a(d) { return !ra(d) || 0 > d ? 0 : d }
        if (!Oc._li && D.performance && D.performance.timing) {
            var b = D.performance.timing.navigationStart,
                c = ra(Dd.get("gtm.start")) ? Dd.get("gtm.start") : 0;
            Oc._li = { cst: a(c - b), cbt: a(Uc - b) }
        }
    };
    var Ce = !1,
        De = function() { return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject] },
        Ee = !1;
    var Fe = function(a) {
            D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
            var b = D.GoogleAnalyticsObject;
            if (D[b]) D.hasOwnProperty(b) || I("GTM", 12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                D[b] = c
            }
            ye();
            return D[b]
        },
        Ge = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = De();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var Ie = function() {},
        He = function() { return D.GoogleAnalyticsObject || "ga" };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ke = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Le = /:[0-9]+$/,
        Me = function(a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var g = d[e].split("="); if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) { var h = g.slice(1).join("="); return c ? h : decodeURIComponent(h).replace(/\+/g, " ") } } },
        Pe = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Ne(a.protocol) || Ne(D.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : D.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || D.location.hostname).replace(Le, "").toLowerCase());
            var g = b,
                h, k = Ne(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = Oe(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(Le, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || I("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= t(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = Me(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        Ne = function(a) { return a ? a.replace(":", "").toLowerCase() : "" },
        Oe = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Qe = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || I("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Le, "");
            return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port }
        };

    function Ve(a, b, c, d) {
        var e = sb[a],
            g = We(a, b, c, d);
        if (!g) return null;
        var h = Bb(e[Gb.Kd], c, []);
        if (h && h.length) {
            var k = h[0];
            g = Ve(k.index, { s: g, o: 1 === k.Wd ? b.terminate : g, terminate: b.terminate }, c, d)
        }
        return g
    }

    function We(a, b, c, d) {
        function e() {
            if (g[Gb.jf]) k();
            else {
                var w = Cb(g, c, []),
                    y = se(c.id, String(g[Gb.ma]), Number(g[Gb.Ld]), w[Gb.kf]),
                    x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var A = Fa() - B;
                        vd(c.id, sb[a], "5");
                        te(c.id, y, "success", A);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var A = Fa() - B;
                        vd(c.id, sb[a], "6");
                        te(c.id, y, "failure", A);
                        k()
                    }
                };
                w.vtp_gtmTagId = g.tag_id;
                w.vtp_gtmEventId = c.id;
                vd(c.id, g, "1");
                var z = function() {
                    var A = Fa() - B;
                    vd(c.id, g, "7");
                    te(c.id, y, "exception", A);
                    x || (x = !0, k())
                };
                var B = Fa();
                try { Ab(w, c) } catch (A) { z(A) }
            }
        }
        var g = sb[a],
            h = b.s,
            k = b.o,
            l = b.terminate;
        if (c.Jc(g)) return null;
        var m = Bb(g[Gb.Md], c, []);
        if (m && m.length) {
            var n = m[0],
                q = Ve(n.index, { s: h, o: k, terminate: l }, c, d);
            if (!q) return null;
            h = q;
            k = 2 === n.Wd ? l : q
        }
        if (g[Gb.Jd] || g[Gb.lf]) {
            var u = g[Gb.Jd] ? ub : c.ih,
                p = h,
                r = k;
            if (!u[a]) {
                e = Ha(e);
                var v = Xe(a, u, e);
                h = v.s;
                k = v.o
            }
            return function() { u[a](p, r) }
        }
        return e
    }

    function Xe(a, b, c) {
        var d = [],
            e = [];
        b[a] = Ye(d, e, c);
        return { s: function() { b[a] = Ze; for (var g = 0; g < d.length; g++) d[g]() }, o: function() { b[a] = $e; for (var g = 0; g < e.length; g++) e[g]() } }
    }

    function Ye(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ze(a) { a() }

    function $e(a, b) { b() };
    var cf = function(a, b) {
        for (var c = [], d = 0; d < sb.length; d++)
            if (a.kb[d]) {
                var e = sb[d];
                var g = b.add();
                try {
                    var h = Ve(d, { s: g, o: g, terminate: g }, a, d);
                    h ? c.push({ ze: d, oe: Db(e), eg: h }) : (af(d, a), g())
                } catch (l) { g() }
            }
        b.Ef();
        c.sort(bf);
        for (var k = 0; k < c.length; k++) c[k].eg();
        return 0 < c.length
    };

    function bf(a, b) {
        var c, d = b.oe,
            e = a.oe;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.ze,
                k = b.ze;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function af(a, b) {
        if (!sd) return;
        var c = function(d) {
            var e = b.Jc(sb[d]) ? "3" : "4",
                g = Bb(sb[d][Gb.Kd], b, []);
            g && g.length && c(g[0].index);
            vd(b.id, sb[d], e);
            var h = Bb(sb[d][Gb.Md], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var df = !1,
        ef = function(a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (df) return !1;
                df = !0
            }
            ud(a, b);
            var g = xe(a, d, e);
            Jd(a, "event", 1);
            Jd(a, "ecommerce", 1);
            Jd(a, "gtm");
            var h = { id: a, name: b, Jc: fe(c), kb: [], ih: [], he: function() { I("GTM", 6) } };
            h.kb = Kb(h);
            var k = cf(h, g);
            if (!k) return k;
            for (var l = 0; l < h.kb.length; l++)
                if (h.kb[l]) { var m = sb[l]; if (m && !Qc[String(m[Gb.ma])]) return !0 }
            return !1
        };
    var ff = function(a, b) {
        var c = zb(a, b);
        sb.push(c);
        return sb.length - 1
    };
    var gf = /^https?:\/\/www\.googletagmanager\.com/;

    function hf() { var a; return a }

    function kf(a, b) {}

    function jf(a) { 0 !== a.indexOf("http://") && 0 !== a.indexOf("https://") && (a = "https://" + a); "/" === a[a.length - 1] && (a = a.substring(0, a.length - 1)); return a }

    function lf() { var a = !1; return a };
    var mf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.Ma = {};
            this.globalConfig = {};
            this.s = function() {};
            this.o = function() {}
        },
        nf = function(a) {
            var b = new mf;
            b.eventModel = a;
            return b
        },
        of = function(a, b) { a.targetConfig = b; return a },
        pf = function(a, b) { a.containerConfig = b; return a },
        qf = function(a, b) { a.Ma = b; return a },
        rf = function(a, b) { a.globalConfig = b; return a },
        sf = function(a, b) { a.s = b; return a },
        tf = function(a, b) { a.o = b; return a };
    mf.prototype.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.Ma[a]) return this.Ma[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a] };
    var uf = function(a) {
        function b(e) { za(e, function(g) { c[g] = null }) }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        za(c, function(e) { d.push(e) });
        return d
    };
    var vf = {},
        wf = ["G"];
    vf.Be = "";
    var xf = vf.Be.split(",");

    function yf() { var a = Oc; return a.gcq = a.gcq || new zf }
    var Af = function(a, b, c) { yf().register(a, b, c) },
        Bf = function(a, b, c, d) { yf().push("event", [b, a], c, d) },
        Cf = function(a, b) { yf().push("config", [a], b) },
        Df = {},
        Ef = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.Ma = {};
            this.pe = null;
            this.ae = !1
        },
        Ff = function(a, b, c, d, e) {
            this.type = a;
            this.Ae = b;
            this.L = c || "";
            this.Hb = d;
            this.defer = e
        },
        zf = function() {
            this.Sd = {};
            this.$d = {};
            this.eb = []
        },
        Gf = function(a, b) { var c = Kc(b); return a.Sd[c.containerId] = a.Sd[c.containerId] || new Ef },
        Hf = function(a, b, c, d) {
            if (d.L) {
                var e =
                    Gf(a, d.L),
                    g = e.pe;
                if (g) {
                    var h = C(c),
                        k = C(e.targetConfig[d.L]),
                        l = C(e.containerConfig),
                        m = C(e.Ma),
                        n = C(a.$d),
                        q = Cd("gtm.uniqueEventId"),
                        u = Kc(d.L).prefix,
                        p = tf(sf(rf(qf(pf(of(nf(h), k), l), m), n), function() { wd(q, u, "2"); }), function() { wd(q, u, "3"); });
                    try {
                        wd(q, u, "1");
                        3 === g.length ? g(b, d.Ae, p) : 4 === g.length &&
                            g(d.L, b, d.Ae, p)
                    } catch (r) { wd(q, u, "4"); }
                }
            }
        };
    zf.prototype.register = function(a, b, c) {
        if (3 !== Gf(this, a).status) {
            Gf(this, a).pe = b;
            Gf(this, a).status = 3;
            c && (Gf(this, a).Ma = c);
            var d = Kc(a),
                e = Df[d.containerId];
            if (void 0 !== e) {
                var g = Oc[d.containerId].bootstrap,
                    h = d.prefix.toUpperCase();
                Oc[d.containerId]._spx && (h = h.toLowerCase());
                var k = Cd("gtm.uniqueEventId"),
                    l = h,
                    m = Fa() - g;
                if (sd && !kd[k]) {
                    k !== gd && (ed(), gd = k);
                    var n = l + "." + Math.floor(g - e) + "." + Math.floor(m);
                    od = od ? od + "," + n : "&cl=" + n
                }
                delete Df[d.containerId]
            }
            this.flush()
        }
    };
    zf.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Fa() / 1E3);
        if (c) {
            var g = Kc(c),
                h;
            if (h = g) {
                var k;
                if (k = 1 === Gf(this, c).status) a: { var l = g.prefix;k = !0 }
                h = k
            }
            if (h && (Gf(this, c).status = 2, this.push("require", [], g.containerId), Df[g.containerId] = Fa(), !Ld())) {
                var m = encodeURIComponent(g.containerId),
                    n = ("http:" != D.location.protocol ? "https:" : "http:") +
                    "//www.googletagmanager.com";
                cc(n + "/gtag/js?id=" + m + "&l=dataLayer&cx=c")
            }
        }
        this.eb.push(new Ff(a, e, c, b, d));
        d || this.flush()
    };
    zf.prototype.flush = function(a) {
        for (var b = this; this.eb.length;) {
            var c = this.eb[0];
            if (c.defer) c.defer = !1, this.eb.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Gf(this, c.L).status && !a) return;
                    break;
                case "set":
                    za(c.Hb[0], function(l, m) { C(La(l, m), b.$d) });
                    break;
                case "config":
                    var d = c.Hb[0],
                        e = !!d[H.yb];
                    delete d[H.yb];
                    var g = Gf(this, c.L),
                        h = Kc(c.L),
                        k = h.containerId === h.id;
                    e || (k ? g.containerConfig = {} : g.targetConfig[c.L] = {});
                    g.ae && e || Hf(this, H.w, d, c);
                    g.ae = !0;
                    delete d[H.la];
                    k ? C(d, g.containerConfig) : C(d, g.targetConfig[c.L]);
                    break;
                case "event":
                    Hf(this, c.Hb[1], c.Hb[0], c)
            }
            this.eb.shift()
        }
    };
    var If = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        Lf = function(a, b, c, d) {
            var e = Jf(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = Kf(e, function(g) { return g.Mb }, b);
                if (1 === e.length) return e[0].id;
                e = Kf(e, function(g) { return g.lb }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function Mf(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= If(b, e).indexOf(c)
    }
    var Qf = function(a, b, c, d, e, g) {
        d = d || "auto";
        var h = { path: c || "/" };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var q = void 0,
                u = void 0,
                p;
            for (p in h)
                if (h.hasOwnProperty(p)) {
                    var r = h[p];
                    if (null != r) switch (p) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            q = r;
                            break;
                        default:
                            "path" == p && (u = r), "expires" == p && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + p + "=" + r
                    }
                }
            if ("auto" === q) {
                for (var v = Nf(), w = 0; w < v.length; ++w) { var y = "none" != v[w] ? v[w] : void 0; if (!Pf(y, u) && Mf(m + (y ? "; domain=" + y : ""), a, l)) { k = !0; break a } }
                k = !1
            } else q && "none" != q && (m += "; domain=" + q),
            k = !Pf(q, u) && Mf(m, a, l)
        }
        return k
    };

    function Kf(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Jf(a, b) {
        for (var c = [], d = If(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({ id: g.join("."), Mb: 1 * k[0] || 1, lb: 1 * k[1] || 1 }))
            }
        }
        return c
    }
    var Rf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Sf = /(^|\.)doubleclick\.net$/i,
        Pf = function(a, b) { return Sf.test(document.location.hostname) || "/" === b && Rf.test(a) },
        Nf = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            Sf.test(e) || Rf.test(e) || a.push("none");
            return a
        };
    var Tf = "".split(/,/),
        Uf = !1;
    var Vf = null,
        Wf = {},
        Xf = {},
        Yf;

    function Zf(a, b) {
        var c = { event: a };
        b && (c.eventModel = C(b), b[H.gc] && (c.eventCallback = b[H.gc]), b[H.Ra] && (c.eventTimeout = b[H.Ra]));
        return c
    }
    var $f = function() {
            Vf = Vf || !Oc.gtagRegistered;
            Oc.gtagRegistered = !0;
            return Vf
        },
        ag = function(a) {
            if (void 0 === Xf[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = ff("gtagua", { trackingId: a.id });
                        break;
                    case "AW":
                        b = ff("gtagaw", { conversionId: a });
                        break;
                    case "DC":
                        b = ff("gtagfl", { targetId: a.id });
                        break;
                    case "GF":
                        b = ff("gtaggf", { conversionId: a });
                        break;
                    case "G":
                        b = ff("get", { trackingId: a.id, isAutoTag: !0 });
                        break;
                    case "HA":
                        b = ff("gtagha", { conversionId: a });
                        break;
                    case "GP":
                        b = ff("gtaggp", { conversionId: a.id });
                        break;
                    default:
                        return
                }
                if (!Yf) {
                    var c =
                        zb("v", { name: "send_to", dataLayerVersion: 2 });
                    pb.push(c);
                    Yf = ["macro", pb.length - 1]
                }
                var d = { arg0: Yf, arg1: a.id, ignore_case: !1 };
                d[Gb.ma] = "_lc";
                rb.push(d);
                var e = { "if": [rb.length - 1], add: [b] };
                e["if"] && (e.add || e.block) && qb.push(e);
                Xf[a.id] = b
            }
        },
        bg = function(a) {
            za(Wf, function(b, c) {
                var d = t(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        cg = Ha(function() {}),
        dg = function(a) {
            if (a.containerId !== Nc.m && "G" !== a.prefix) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = 14;
                        break;
                    case "AW":
                        b = 15;
                        break;
                    case "DC":
                        b = 16;
                        break;
                    default:
                        b = 17
                }
                I("GTM", b)
            }
        };
    var eg = {
            config: function(a) {
                var b = a[2] || {};
                if (2 > a.length || !f(a[1]) || !Pa(b)) return;
                var c = Kc(a[1]);
                if (!c) return;
                bg(c.id);
                var d = c.id,
                    e = b[H.kc] || "default";
                e = e.toString().split(",");
                for (var g = 0; g < e.length; g++) Wf[e[g]] = Wf[e[g]] || [], Wf[e[g]].push(d);
                delete b[H.kc];
                C(b);
                if ($f()) {
                    if (Uf && -1 !== t(Tf, c.prefix)) {
                        "G" === c.prefix && (b[H.la] = !0);
                        Cf(b, c.id);
                        return
                    }
                    ag(c);
                    dg(c)
                } else cg();
                Id("gtag.targets." + c.id, void 0);
                Id("gtag.targets." + c.id, C(b));
                var h = {};
                h[H.Aa] = c.id;
                return Zf(H.w, h);
            },
            event: function(a) {
                var b = a[1];
                if (f(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!Pa(a[2]) && void 0 != a[2]) return;
                        c = a[2]
                    }
                    var d = Zf(b, c);
                    var e;
                    var g = c,
                        h = Cd("gtag.fields.send_to", 2);
                    f(h) || (h = H.Aa);
                    var k = g && g[h];
                    void 0 === k && (k = Cd(h, 2), void 0 === k && (k = "default"));
                    if (f(k) || ua(k)) {
                        for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++) 0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(Wf[l[n]] || []);
                        e = Mc(m)
                    } else e = void 0;
                    var q = e;
                    if (!q) return;
                    var u = $f();
                    u || cg();
                    for (var p = [], r = 0; u && r < q.length; r++) {
                        var v = q[r];
                        dg(v);
                        if (Uf && -1 !== t(Tf, v.prefix)) {
                            var w = C(c);
                            "G" === v.prefix && (w[H.la] = !0);
                            Bf(b, w, v.id)
                        } else ag(v);
                        p.push(v.id)
                    }
                    C(c, { event: b });
                    d.eventModel = d.eventModel || {};
                    0 < q.length ? d.eventModel[H.Aa] = p.join() : delete d.eventModel[H.Aa];
                    return d
                }
            },
            js: function(a) { if (2 == a.length && a[1].getTime) return { event: "gtm.js", "gtm.start": a[1].getTime() } },
            policy: function(a) { 3 === a.length && (void 0).Ih().Ah(a[1], a[2]) },
            set: function(a) {
                var b;
                2 == a.length && Pa(a[1]) ? b =
                    C(a[1]) : 3 == a.length && f(a[1]) && (b = {}, Pa(a[2]) || ua(a[2]) ? b[a[1]] = C(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if ($f()) {
                        var c = C(b);
                        yf().push("set", [c])
                    }
                    C(b);
                    b._clear = !0;
                    return b
                }
            }
        },
        fg = { policy: !0 };
    var gg = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) { d = !1; break }
                d && (c.end(), c.end = null)
            }
        },
        ig = function(a) {
            var b = hg(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var pg = function(a) {
        if (og(a)) return a;
        this.ph = a
    };
    pg.prototype.lg = function() { return this.ph };
    var og = function(a) { return !a || "object" !== Na(a) || Pa(a) ? !1 : "getUntrustedUpdateValue" in a };
    pg.prototype.getUntrustedUpdateValue = pg.prototype.lg;
    var qg = !1,
        rg = [];

    function sg() { if (!qg) { qg = !0; for (var a = 0; a < rg.length; a++) G(rg[a]) } }
    var tg = function(a) { qg ? G(a) : rg.push(a) };
    var ug = [],
        vg = !1,
        wg = function(a) { return D["dataLayer"].push(a) },
        xg = function(a) {
            var b = Oc["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {++d === c && a() }
        };

    function yg(a) {
        var b = a._clear;
        za(a, function(g, h) { "_clear" !== g && (b && Id(g, void 0), Id(g, h)) });
        Tc || (Tc = a["gtm.start"]);
        var c = a.event;
        if (!c) return !1;
        var d = a["gtm.uniqueEventId"];
        d || (d = Zc(), a["gtm.uniqueEventId"] = d, Id("gtm.uniqueEventId", d));
        Vc = c;
        var e = zg(a);
        Vc = null;
        switch (c) {
            case "gtm.init":
                I("GTM", 19), e && I("GTM", 20)
        }
        return e
    }

    function zg(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = Oc.zones;
        d = e ? e.checkState(Nc.m, c) : he;
        return d.active ? ef(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }

    function Ag() {
        for (var a = !1; !vg && 0 < ug.length;) {
            vg = !0;
            delete zd.eventModel;
            Bd();
            var b = ug.shift();
            if (null != b) {
                var c = og(b);
                if (c) {
                    var d = b;
                    b = og(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                        var h = e[g],
                            k = Cd(h, 1);
                        if (ua(k) || Pa(k)) k = C(k);
                        Ad[h] = k
                    }
                }
                try {
                    if (qa(b)) try { b.call(Dd) } catch (v) {} else if (ua(b)) {
                        var l = b;
                        if (f(l[0])) {
                            var m =
                                l[0].split("."),
                                n = m.pop(),
                                q = l.slice(1),
                                u = Cd(m.join("."), 2);
                            if (void 0 !== u && null !== u) try { u[n].apply(u, q) } catch (v) {}
                        }
                    } else {
                        var p = b;
                        if (p && ("[object Arguments]" == Object.prototype.toString.call(p) || Object.prototype.hasOwnProperty.call(p, "callee"))) {
                            a: {
                                if (b.length && f(b[0])) { var r = eg[b[0]]; if (r && (!c || !fg[b[0]])) { b = r(b); break a } }
                                b = void 0
                            }
                            if (!b) { vg = !1; continue }
                        }
                        a = yg(b) || a
                    }
                } finally { c && Bd(!0) }
            }
            vg = !1
        }
        return !a
    }

    function Bg() { var a = Ag(); try { gg(D["dataLayer"], Nc.m) } catch (b) {} return a }
    var Dg = function() {
            var a = ac("dataLayer", []),
                b = ac("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            pe(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
            tg(function() { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < Oc.SANDBOXED_JS_SEMAPHORE) { d = []; for (var e = 0; e < arguments.length; e++) d[e] = new pg(arguments[e]) } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                ug.push.apply(ug, d);
                if (300 <
                    this.length)
                    for (I("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Ag() && h
            };
            ug.push.apply(ug, a.slice(0));
            Cg() && G(Bg)
        },
        Cg = function() { var a = !0; return a };
    var Eg = {};
    Eg.zb = new String("undefined");
    var Fg = function(a) { this.resolve = function(b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Eg.zb ? b : a[d]); return c.join("") } };
    Fg.prototype.toString = function() { return this.resolve("undefined") };
    Fg.prototype.valueOf = Fg.prototype.toString;
    Eg.qf = Fg;
    Eg.wc = {};
    Eg.Xf = function(a) { return new Fg(a) };
    var Gg = {};
    Eg.$g = function(a, b) {
        var c = Zc();
        Gg[c] = [a, b];
        return c
    };
    Eg.Td = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Gg[c];
            if (d && "function" === typeof d[b]) d[b]();
            Gg[c] = void 0
        }
    };
    Eg.Dg = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Eg.Og = function(a) {
        if (a === Eg.zb) return a;
        var b = Zc();
        Eg.wc[b] = a;
        return 'google_tag_manager["' + Nc.m + '"].macro(' + b + ")"
    };
    Eg.Hg = function(a, b, c) { a instanceof Eg.qf && (a = a.resolve(Eg.$g(b, c)), b = pa); return { Hc: a, s: b } };
    var Hg = function(a, b, c) {
            function d(g, h) { var k = g[h]; return k }
            var e = { event: b, "gtm.element": a, "gtm.elementClasses": d(a, "className"), "gtm.elementId": a["for"] || ic(a, "id") || "", "gtm.elementTarget": a.formTarget || d(a, "target") || "" };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        Ig = function(a) {
            Oc.hasOwnProperty("autoEventsSettings") || (Oc.autoEventsSettings = {});
            var b = Oc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Jg = function(a, b, c) { Ig(a)[b] = c },
        Kg = function(a, b, c, d) {
            var e = Ig(a),
                g = Ga(e, b, d);
            e[b] = c(g)
        },
        Lg = function(a, b, c) { var d = Ig(a); return Ga(d, b, c) };
    var Mg = function() {
            for (var a = Zb.userAgent + (F.cookie || "") + (F.referrer || ""), b = a.length, c = D.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Fa() / 1E3)].join(".")
        },
        Pg = function(a, b, c, d) { var e = Ng(b); return Lf(a, e, Og(c), d) },
        Qg = function(a, b, c, d) {
            var e = "" + Ng(c),
                g = Og(d);
            1 < g && (e += "-" + g);
            return [b, e, a].join(".")
        },
        Ng = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Og = function(a) { if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length - 1 };
    var Rg = ["1"],
        Sg = {},
        Wg = function(a, b, c, d) {
            var e = Tg(a);
            Sg[e] || Ug(e, b, c) || (Vg(e, Mg(), b, c, d), Ug(e, b, c))
        };

    function Vg(a, b, c, d, e) {
        var g = Qg(b, "1", d, c);
        Qf(a, g, c, d, 0 == e ? void 0 : new Date(Fa() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function Ug(a, b, c) {
        var d = Pg(a, b, c, Rg);
        d && (Sg[a] = d);
        return d
    }

    function Tg(a) { return (a || "_gcl") + "_au" };
    var Xg = function() {
        for (var a = [], b = F.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({ cd: e[1], value: e[2] })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) { var k = a[h].value.split("."); "1" == k[0] && 3 == k.length && k[1] && (g[a[h].cd] || (g[a[h].cd] = []), g[a[h].cd].push({ timestamp: k[1], ig: k[2] })) }
        return g
    };

    function Yg() { for (var a = Zg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function $g() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Zg, ah;

    function bh(a) {
        Zg = Zg || $g();
        ah = ah || Yg();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                g = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                l = g >> 2,
                m = (g & 3) << 4 | h >> 4,
                n = (h & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (n = 64));
            b.push(Zg[l], Zg[m], Zg[n], Zg[q])
        }
        return b.join("")
    }

    function ch(a) {
        function b(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = ah[m];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        Zg = Zg || $g();
        ah = ah || Yg();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                g = b(0),
                h = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | g >> 4);
            64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var dh;

    function eh(a, b) {
        if (!a || b === F.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) { if (a[c].test(b)) return !0 } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var ih = function() {
            var a = fh,
                b = gh,
                c = hh(),
                d = function(h) { a(h.target || h.srcElement || {}) },
                e = function(h) { b(h.target || h.srcElement || {}) };
            if (!c.init) {
                gc(F, "mousedown", d);
                gc(F, "keyup", d);
                gc(F, "submit", e);
                var g = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    g.call(this)
                };
                c.init = !0
            }
        },
        hh = function() {
            var a = ac("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = { decorators: [] }, a.gl = b);
            return b
        };
    var jh = /(.*?)\*(.*?)\*(.*)/,
        kh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        lh = /^(?:www\.|m\.|amp\.)+/,
        mh = /([^?#]+)(\?[^#]*)?(#.*)?/,
        nh = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        ph = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(bh(String(d))))
                }
            var e = b.join("*");
            return ["1", oh(e), e].join("*")
        },
        oh = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = dh)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            dh = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ dh[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        rh = function() {
            return function(a) {
                var b = Qe(D.location.href),
                    c = b.search.replace("?", ""),
                    d = Me(c, "_gl", !0) || "";
                a.query = qh(d) || {};
                var e = Pe(b, "fragment").match(nh);
                a.fragment = qh(e && e[3] ||
                    "") || {}
            }
        },
        sh = function() {
            var a = rh(),
                b = hh();
            b.data || (b.data = { query: {}, fragment: {} }, a(b.data));
            var c = {},
                d = b.data;
            d && (Ia(c, d.query), Ia(c, d.fragment));
            return c
        },
        qh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = jh.exec(d);
                            if (g) { c = g; break a }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === oh(k, n)) { l = !0; break a }
                            l = !1
                        }
                        if (l) { for (var q = {}, u = k ? k.split("*") : [], p = 0; p < u.length; p += 2) q[u[p]] = ch(u[p + 1]); return q }
                    }
                }
            } catch (r) {}
        };

    function th(a, b, c) {
        function d(m) {
            var n = m,
                q = nh.exec(n),
                u = n;
            if (q) {
                var p = q[2],
                    r = q[4];
                u = q[1];
                r && (u = u + p + r)
            }
            m = u;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = mh.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function uh(a, b, c) {
        for (var d = {}, e = {}, g = hh().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && eh(k.domains, b) && (k.fragment ? Ia(e, k.callback()) : Ia(d, k.callback()))
        }
        if (Ja(d)) {
            var l = ph(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], q = !1, u = 0; u < n.length; u++) {
                            var p = n[u];
                            if ("_gl" === p.name) {
                                p.setAttribute("value", l);
                                q = !0;
                                break
                            }
                        }
                        if (!q) {
                            var r = F.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = th(l, a.action);
                        Ke.test(v) && (a.action = v)
                    }
                }
            } else vh(l, a, !1)
        }
        if (!c && Ja(e)) {
            var w = ph(e);
            vh(w, a, !0)
        }
    }

    function vh(a, b, c) {
        if (b.href) {
            var d = th(a, b.href, void 0 === c ? !1 : c);
            Ke.test(d) && (b.href = d)
        }
    }
    var fh = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) { var g = e.protocol; "http:" !== g && "https:" !== g || uh(e, e.hostname, !1) }
            } catch (h) {}
        },
        gh = function(a) {
            try {
                if (a.action) {
                    var b = Pe(Qe(a.action), "host");
                    uh(a, b, !0)
                }
            } catch (c) {}
        },
        wh = function(a, b, c, d) {
            ih();
            var e = { callback: a, domains: b, fragment: "fragment" === c, forms: !!d };
            hh().decorators.push(e)
        },
        xh = function() {
            var a = F.location.hostname,
                b = kh.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(lh, ""),
                l = e.replace(lh, ""),
                m;
            if (!(m = k === l)) {
                var n = "." + l;
                m = k.substring(k.length - n.length, k.length) === n
            }
            return m
        },
        yh = function(a, b) { return !1 === a ? !1 : a || b || xh() };
    var zh = {};
    var Ah = /^\w+$/,
        Bh = /^[\w-]+$/,
        Ch = /^~?[\w-]+$/,
        Dh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp" };

    function Eh(a) { return a && "string" == typeof a && a.match(Ah) ? a : "_gcl" }
    var Gh = function() {
        var a = Qe(D.location.href),
            b = Pe(a, "query", !1, void 0, "gclid"),
            c = Pe(a, "query", !1, void 0, "gclsrc"),
            d = Pe(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || Me(e, "gclid", void 0);
            c = c || Me(e, "gclsrc", void 0)
        }
        return Fh(b, c, d)
    };

    function Fh(a, b, c) {
        var d = {},
            e = function(g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(Bh)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == zh.gtm_3pds ? 0 : zh.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha");
                break;
            case "gp":
                e(a, "gp")
        }
        c && e(c, "dc");
        return d
    }
    var Ih = function(a) {
        var b = Gh();
        Hh(b, a)
    };

    function Hh(a, b, c) {
        function d(q, u) {
            var p = Jh(q, e);
            p && Qf(p, u, h, g, l, !0)
        }
        b = b || {};
        var e = Eh(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Ja ? 7776E3 : b.Ja;
        c = c || Fa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(q) { return ["GCL", m, q].join(".") };
        a.aw && (!0 === b.Yh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]));
        a.gp && d("gp", n(a.gp[0]))
    }
    var Lh = function(a, b, c, d, e) {
            for (var g = sh(), h = Eh(b), k = 0; k < a.length; ++k) {
                var l = a[k];
                if (void 0 !== Dh[l]) {
                    var m = Jh(l, h),
                        n = g[m];
                    if (n) {
                        var q = Math.min(Kh(n), Fa()),
                            u;
                        b: {
                            for (var p = q, r = If(m, F.cookie), v = 0; v < r.length; ++v)
                                if (Kh(r[v]) > p) { u = !0; break b }
                            u = !1
                        }
                        u || Qf(m, n, c, d, 0 == e ? void 0 : new Date(q + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var w = { prefix: b, path: c, domain: d };
            Hh(Fh(g.gclid, g.gclsrc), w)
        },
        Jh = function(a, b) { var c = Dh[a]; if (void 0 !== c) return b + c },
        Kh = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
                0)
        };

    function Mh(a) { var b = a.split("."); if (3 == b.length && "GCL" == b[0] && b[1]) return b[2] }
    var Nh = function(a, b, c, d, e) {
            if (ua(b)) {
                var g = Eh(e);
                wh(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = Jh(a[k], g);
                        if (l) {
                            var m = If(l, F.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        Oh = function(a) { return a.filter(function(b) { return Ch.test(b) }) },
        Ph = function(a, b) {
            for (var c = Eh(b && b.prefix), d = {}, e = 0; e < a.length; e++) Dh[a[e]] && (d[a[e]] = Dh[a[e]]);
            za(d, function(g, h) {
                var k = If(c + h, F.cookie);
                if (k.length) {
                    var l = k[0],
                        m = Kh(l),
                        n = {};
                    n[g] = [Mh(l)];
                    Hh(n, b, m)
                }
            })
        };
    var Qh = /^\d+\.fls\.doubleclick\.net$/;

    function Rh(a) {
        var b = Qe(D.location.href),
            c = Pe(b, "host", !1);
        if (c && c.match(Qh)) { var d = Pe(b, "path").split(a + "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0] }
    }

    function Sh(a, b) {
        if ("aw" == a || "dc" == a) { var c = Rh("gcl" + a); if (c) return c.split(".") }
        var d = Eh(b);
        if ("_gcl" == d) {
            var e;
            e = Gh()[a] || [];
            if (0 < e.length) return e
        }
        var g = Jh(a, d),
            h;
        if (g) {
            var k = [];
            if (F.cookie) {
                var l = If(g, F.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = Mh(l[m]);
                        n && -1 === t(k, n) && k.push(n)
                    }
                    h = Oh(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var Th = function() {
            var a = Rh("gac");
            if (a) return decodeURIComponent(a);
            var b = Xg(),
                c = [];
            za(b, function(d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].ig);
                g = Oh(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        Uh = function(a, b, c, d, e) {
            Wg(b, c, d, e);
            var g = Sg[Tg(b)],
                h = Gh().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = Oc.joined_au = Oc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var q = "https://adservice.google.com/ddm/regclk",
                            u = q = q + "?gclid=" + h[n] + "&auiddc=" + g;
                        Zb.sendBeacon && Zb.sendBeacon(u) || fc(u);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var p = Tg(b),
                    r = Sg[p];
                r && Vg(p, r, c, d, e)
            }
        };
    var Vh;
    if (3 === Nc.Db.length) Vh = "g";
    else {
        var Wh = "G";
        Wh = "g";
        Vh = Wh
    }
    var Xh = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Vh, OPT: "o" },
        Yh = function(a) {
            var b = Nc.m.split("-"),
                c = b[0].toUpperCase(),
                d = Xh[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                g;
            if (3 === Nc.Db.length) {
                var h = void 0;
                h = h || (Ld() ? "s" : "o");
                g = "2" + (h || "w")
            } else g =
                "";
            return g + d + Nc.Db + e
        };
    var Zh = function(a) { return !(void 0 === a || null === a || 0 === (a + "").length) },
        $h = function(a, b) {
            var c;
            if (2 === b.S) return a("ord", wa(1E11, 1E13)), !0;
            if (3 === b.S) return a("ord", "1"), a("num", wa(1E11, 1E13)), !0;
            if (4 === b.S) return Zh(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.S) c = "1";
            else if (6 === b.S) c = b.Xc;
            else return !1;
            Zh(c) && a("qty", c);
            Zh(b.Jb) && a("cost", b.Jb);
            Zh(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        ai = encodeURIComponent,
        bi = function(a, b) {
            function c(n, q, u) {
                g.hasOwnProperty(n) || (q += "", e += ";" + n + "=" +
                    (u ? q : ai(q)))
            }
            var d = a.Ec,
                e = a.protocol;
            e += a.Vb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + ai(d) + (";type=" + ai(a.Gc)) + (";cat=" + ai(a.cb));
            var g = a.Zf || {};
            za(g, function(n, q) { e += ";" + ai(n) + "=" + ai(q + "") });
            if ($h(c, a)) {
                Zh(a.bc) && c("u", a.bc);
                Zh(a.ac) && c("tran", a.ac);
                c("gtm", Yh());
                !1 === a.Af && c("npa", "1");
                if (a.Cc) {
                    var h = Sh("dc", a.Ea);
                    h && h.length && c("gcldc", h.join("."));
                    var k = Sh("aw", a.Ea);
                    k && k.length && c("gclaw", k.join("."));
                    var l = Th();
                    l && c("gac", l);
                    Wg(a.Ea, void 0, a.Vf, a.Wf);
                    var m = Sg[Tg(a.Ea)];
                    m && c("auiddc", m)
                }
                Zh(a.Tc) && c("prd", a.Tc, !0);
                za(a.ed, function(n, q) { c(n, q) });
                e += b || "";
                Zh(a.Tb) && c("~oref", a.Tb);
                a.Vb ? ec(e + "?", a.s) : fc(e + "?", a.s, a.o)
            } else G(a.o)
        };
    var ci = ["input", "select", "textarea"],
        di = ["button", "hidden", "image", "reset", "submit"],
        ei = function(a) { var b = a.tagName.toLowerCase(); return !va(ci, function(c) { return c === b }) || "input" === b && va(di, function(c) { return c === a.type.toLowerCase() }) ? !1 : !0 },
        fi = function(a) { return a.form ? a.form.tagName ? a.form : F.getElementById(a.form) : lc(a, ["form"], 100) },
        gi = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, g = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (ei(h)) {
                    if (h.getAttribute(c) === d) return g;
                    g++
                }
            }
            return 0
        };
    var ii = function(a) {
            var b;
            if (a.hasOwnProperty("conversion_data")) b = "conversion_data";
            else if (a.hasOwnProperty("price")) b = "price";
            else return;
            var c = b,
                d = "/pagead/conversion/" + hi(a.conversion_id) + "/?",
                e = hi(JSON.stringify(a[c])),
                g = "https://www.googletraveladservices.com/travel/flights/clk" + d + c + "=" + e;
            if (a.conversionLinkerEnabled) {
                var h = Sh("gf", a.cookiePrefix);
                if (h && h.length)
                    for (var k = 0; k < h.length; k++) g += "&gclgf=" + hi(h[k])
            }
            fc(g, a.onSuccess, a.onFailure)
        },
        hi = function(a) {
            return null === a || void 0 === a || 0 === String(a).length ?
                "" : encodeURIComponent(String(a))
        };
    var ji = !!D.MutationObserver,
        ki = void 0,
        li = function(a) {
            if (!ki) {
                var b = function() {
                    var c = F.body;
                    if (c)
                        if (ji)(new MutationObserver(function() { for (var e = 0; e < ki.length; e++) G(ki[e]) })).observe(c, { childList: !0, subtree: !0 });
                        else {
                            var d = !1;
                            gc(c, "DOMNodeInserted", function() { d || (d = !0, G(function() { d = !1; for (var e = 0; e < ki.length; e++) G(ki[e]) })) })
                        }
                };
                ki = [];
                F.body ? b() : G(b)
            }
            ki.push(a)
        };
    var Hi = D.clearTimeout,
        Ii = D.setTimeout,
        T = function(a, b, c) { if (Ld()) { b && G(b) } else return cc(a, b, c) },
        Ji = function() { return D.location.href },
        Ki = function(a) { return Pe(Qe(a), "fragment") },
        Li = function(a) { return Oe(Qe(a)) },
        V = function(a, b) { return Cd(a, b || 2) },
        Mi = function(a, b, c) { b && (a.eventCallback = b, c && (a.eventTimeout = c)); return wg(a) },
        Ni = function(a, b) { D[a] = b },
        W = function(a, b, c) { b && (void 0 === D[a] || c && !D[a]) && (D[a] = b); return D[a] },
        Oi = function(a, b, c) { return If(a, b, void 0 === c ? !0 : !!c) },
        Pi = function(a, b) { if (Ld()) { b && G(b) } else ec(a, b) },
        Qi = function(a) { return !!Lg(a, "init", !1) },
        Ri = function(a) { Jg(a, "init", !0) },
        Si = function(a, b) {
            var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Sc;
            c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            T(P("https://", "http://", c))
        },
        Ti = function(a, b) { var c = a[b]; return c };
    var Ui = Eg.Hg;
    var Vi;
    var rj = new xa;

    function sj(a, b) {
        function c(h) {
            var k = Qe(h),
                l = Pe(k, "protocol"),
                m = Pe(k, "host", !0),
                n = Pe(k, "port"),
                q = Pe(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
            return [l, m, n, q]
        }
        for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
            if (d[g] !== e[g]) return !1;
        return !0
    }

    function tj(a) { return uj(a) ? 1 : 0 }

    function uj(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ua(c)) {
            for (var d = 0; d < c.length; d++)
                if (tj({ "function": a["function"], arg0: b, arg1: c[d] })) return !0;
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var e;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) { e = b[g[h]](c); break a }
                        } catch (v) {}
                    }
                    e = !1
                }
                return e;
            case "_ew":
                var k, l;
                k = String(b);
                l = String(c);
                var m = k.length -
                    l.length;
                return 0 <= m && k.indexOf(l, m) == m;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var n;
                n = String(b).split(",");
                return 0 <= t(n, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var u = a.ignore_case ? "i" : void 0;
                try {
                    var p = String(c) + u,
                        r = rj.get(p);
                    r || (r = new RegExp(c, u), rj.set(p, r));
                    q = r.test(b)
                } catch (v) { q = !1 }
                return q;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return sj(b,
                    c)
        }
        return !1
    };
    var vj = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var wj = {},
        xj = encodeURI,
        X = encodeURIComponent,
        yj = fc;
    var zj = function(a, b) {
        if (!a) return !1;
        var c = Pe(Qe(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var Aj = function(a, b, c) { for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0); return e ? d : null };
    wj.Eg = function() { var a = !1; return a };
    var Kk = function() {
        var a = D.gaGlobal = D.gaGlobal || {};
        a.hid = a.hid || wa();
        return a.hid
    };
    var Vk = window,
        Wk = document,
        Xk = function(a) {
            var b = Vk._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Vk["ga-disable-" + a]) return !0;
            try { var c = Vk.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (g) {}
            for (var d = If("AMP_TOKEN", Wk.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Wk.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function $k(a) { return "_" === a.charAt(0) }
    var al = function(a) {
        za(a, function(c) { $k(c) && delete a[c] });
        var b = a[H.V] || {};
        za(b, function(c) { $k(c) && delete b[c] })
    };
    var el = function(a, b, c) { Bf(b, c, a) },
        fl = function(a, b, c) { Bf(b, c, a, !0) },
        hl = function(a, b) {};

    function gl(a, b) {}
    var il = function(a) { var b = kf(a, "/2"); return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? P("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js") : "https://www.google.com/pagead/conversion_async.js" },
        jl = !1,
        kl = [],
        ll = ["aw", "dc"],
        ml = function(a) {
            var b = D.google_trackConversion,
                c = a.gtm_onFailure;
            "function" == typeof b ? b(a) || c() : c()
        },
        nl = function() { for (; 0 < kl.length;) ml(kl.shift()) },
        ol = function(a) {
            if (!jl) {
                jl = !0;
                ye();
                var b = function() {
                    nl();
                    kl = { push: ml }
                };
                Ld() ? b() : cc(a, b, function() {
                    nl();
                    jl = !1
                })
            }
        },
        pl = function(a) {
            if (a) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && b.push({ item_id: d.id, quantity: d.quantity, value: d.price, start_date: d.start_date, end_date: d.end_date })
                }
                return b
            }
        },
        ql = !1;
    var rl = function(a, b, c, d) {
        var e = Kc(a),
            g = b == H.w,
            h = e.h[0],
            k = e.h[1],
            l = void 0 !== k,
            m = function(Q) { return d.getWithConfig(Q) },
            n = !1 !== m(H.xa),
            q = m(H.wa) || m(H.P),
            u = m(H.T),
            p = m(H.U),
            r = il(m(H.da));
        if (g) {
            var v = m(H.ka) || {};
            if (n) {
                yh(v[H.Sa], !!v[H.F]) && Lh(ll, q, void 0, u, p);
                var w = { prefix: q, domain: u, Ja: p };
                Ih(w);
                Ph(["aw", "dc"], w)
            }
            v[H.F] && Nh(ll, v[H.F], v[H.Ua], !!v[H.Ta], q);
            var y = !1;
            y ? Yd(e, d) : Yd(e)
        }
        var x = !1 === m(H.qd) || !1 === m(H.Xa);
        if (!g || !l && !x)
            if (!0 === m(H.rd) && (l = !1), !1 !== m(H.O) || l) {
                var z = {
                    google_conversion_id: h,
                    google_remarketing_only: !l,
                    onload_callback: d.s,
                    gtm_onFailure: d.o,
                    google_conversion_format: "3",
                    google_conversion_color: "ffffff",
                    google_conversion_domain: "",
                    google_conversion_label: k,
                    google_conversion_language: m(H.za),
                    google_conversion_value: m(H.Z),
                    google_conversion_currency: m(H.ca),
                    google_conversion_order_id: m(H.Ya),
                    google_user_id: m(H.Za),
                    google_conversion_page_url: m(H.Va),
                    google_conversion_referrer_url: m(H.Wa),
                    google_gtm: Yh(),
                    google_transport_url: kf(m(H.da), "/")
                };
                Ld() && (z.opt_image_generator = function() { return new Image }, z.google_enable_display_cookie_match = !1);
                !1 === m(H.O) && (z.google_allow_ad_personalization_signals = !1);
                z.google_read_gcl_cookie_opt_out = !n;
                n && q && (z.google_gcl_cookie_prefix = q);
                var B = function() {
                    var Q = m(H.ub),
                        Z = { event: b };
                    if (ua(Q)) {
                        I("GTM", 26);
                        for (var ea = 0; ea < Q.length; ++ea) {
                            var N = Q[ea],
                                L = m(N);
                            void 0 !== L && (Z[N] = L)
                        }
                        return Z
                    }
                    var S = d.eventModel;
                    if (!S) return null;
                    C(S, Z);
                    for (var U = 0; U < H.jd.length; ++U) delete Z[H.jd[U]];
                    return Z
                }();
                B && (z.google_custom_params = B);
                !l && m(H.Y) && (z.google_gtag_event_data = { items: m(H.Y), value: m(H.Z) });
                if (l && "purchase" == b) {
                    z.google_conversion_merchant_id = m(H.vd);
                    z.google_basket_feed_country = m(H.td);
                    z.google_basket_feed_language = m(H.ud);
                    z.google_basket_discount = m(H.sd);
                    z.google_basket_transaction_type = b;
                    z.google_disable_merchant_reported_conversions = !0 === m(H.xd);
                    Ld() && (z.google_disable_merchant_reported_conversions = !0);
                    var A = pl(m(H.Y));
                    A && (z.google_conversion_items = A)
                }
                var E = function(Q, Z) {
                    void 0 !=
                        Z && "" !== Z && (z.google_additional_conversion_params = z.google_additional_conversion_params || {}, z.google_additional_conversion_params[Q] = Z)
                };
                l && ("boolean" === typeof m(H.mc) && E("vdnc", m(H.mc)), E("vdltv", m(H.wd)));
                var J = !0;
                J && kl.push(z)
            }
        ol(r)
    };
    var sl = function(a, b, c, d, e, g) {
            var h = { config: a, gtm: Yh() };
            c && (Wg(d, void 0, e, g), h.auiddc = Sg[Tg(d)]);
            b && (h.loadInsecure = b);
            void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = []);
            D.__dc_ns_processor.push(h);
            cc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
        },
        tl = function(a, b, c) {
            var d = /^u([1-9]\d?|100)$/,
                e = a.getWithConfig(H.Le) || {},
                g = Hd(b, c);
            var h = {},
                k = {};
            if (Pa(e))
                for (var l in e)
                    if (e.hasOwnProperty(l) &&
                        d.test(l)) {
                        var m = e[l];
                        f(m) && (h[l] = m)
                    }
            for (var n = 0; n < g.length; n++) {
                var q = g[n];
                d.test(q) && (h[q] = q)
            }
            for (var u in h) h.hasOwnProperty(u) && (k[u] = a.getWithConfig(h[u]));
            return k
        },
        ul = function(a) {
            function b(l, m, n) { void 0 !== n && 0 !== (n + "").length && d.push(l + m + ":" + c(n + "")) }
            var c = encodeURIComponent,
                d = [],
                e = a(H.Y) || [];
            if (ua(e))
                for (var g = 0; g < e.length; g++) {
                    var h = e[g],
                        k = g + 1;
                    b("i", k, h.id);
                    b("p", k, h.price);
                    b("q", k, h.quantity);
                    b("c", k, a(H.Ke));
                    b("l", k, a(H.za))
                }
            return d.join("|")
        },
        vl = function(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) { var c = { standard: 2, unique: 3, per_session: 4, transactions: 5, items_sold: 6, "": 1 }[(b[5] || "").toLowerCase()]; if (c) return { containerId: "DC-" + b[1], L: b[3] ? a : "", uf: b[1], tf: b[3] || "", cb: b[4] || "", S: c } }
        },
        xl = function(a, b, c, d) {
            var e = vl(a);
            if (e) {
                var g = function(M) { return d.getWithConfig(M) },
                    h = !1 !== g(H.xa),
                    k = g(H.wa) || g(H.P),
                    l = g(H.T),
                    m = g(H.U),
                    n = g(H.Ne),
                    q = 3 === Md();
                if (b === H.w) {
                    var u = g(H.ka) || {},
                        p = g(H.Qa),
                        r = void 0 === p ? !0 : !!p;
                    if (h) {
                        if (yh(u[H.Sa], !!u[H.F])) {
                            Lh(wl, k, void 0, l,
                                m);
                        }
                        var v = { prefix: k, domain: l, Ja: m };
                        Ih(v);
                        Ph(wl, v);
                        Uh(r, k, void 0, l, m)
                    }
                    if (u[H.F]) { Nh(wl, u[H.F], u[H.Ua], !!u[H.Ta], k); }
                    if (n && n.exclusion_parameters && n.engines)
                        if (Ld()) {} else sl(n, q, h, k, l, m);
                    G(d.s)
                } else {
                    var w = {},
                        y = g(H.Me);
                    if (Pa(y))
                        for (var x in y)
                            if (y.hasOwnProperty(x)) {
                                var z = y[x];
                                void 0 !== z && null !==
                                    z && (w[x] = z)
                            }
                    var B = "";
                    if (5 === e.S || 6 === e.S) B = ul(g);
                    var A = tl(d, e.containerId, e.L),
                        E = !0 === g(H.Ge);
                    if (Ld() && E) { E = !1 }
                    var J = { cb: e.cb, Cc: h, Vf: l, Wf: m, Ea: k, Jb: g(H.Z), S: e.S, Zf: w, Ec: e.uf, Gc: e.tf, o: d.o, s: d.s, Tb: Oe(Qe(D.location.href)), Tc: B, protocol: q ? "http:" : "https:", Xc: g(H.$e), Vb: E, sessionId: g(H.xb), ac: void 0, transactionId: g(H.Ya), bc: void 0, ed: A, Af: !1 !== g(H.O) };
                    bi(J)
                }
            } else G(d.o)
        },
        wl = ["aw", "dc"];
    var yl = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
        Al = function(a, b, c, d) {
            var e = function(w) { return d.getWithConfig(w) },
                g = Kc(a).h[0],
                h = !1 !== e(H.xa),
                k = e(H.wa) || e(H.P),
                l = e(H.T),
                m = e(H.U);
            if (b === H.w) {
                if (h) {
                    var n = { prefix: k, domain: l, Ja: m };
                    Ih(n);
                    Ph(["aw", "dc"], n)
                }
                G(d.s)
            } else {
                var q = { conversion_id: g, onFailure: d.o, onSuccess: d.s, conversionLinkerEnabled: h, cookiePrefix: k },
                    u = yl.test(D.location.href);
                if ("purchase" !== b) G(d.o);
                else {
                    var r = { partner_id: g, trip_type: e(H.df), total_price: e(H.Z), currency: e(H.ca), is_direct_booking: u, flight_segment: zl(e(H.Y)) },
                        v = e(H.Bd);
                    v && "object" === typeof v && (r.passengers_total = v.total, r.passengers_adult = v.adult, r.passengers_child = v.child, r.passengers_infant_in_seat = v.infant_in_seat, r.passengers_infant_in_lap = v.infant_in_lap);
                    q.conversion_data = r;
                    ii(q)
                }
            }
        },
        zl = function(a) { if (a) { for (var b = [], c = 0, d = 0; d < a.length; ++d) { var e = a[d];!e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = { cabin: e.travel_class, fare_product: e.fare_product, booking_code: e.booking_code, flight_number: e.flight_number, origin: e.origin, destination: e.destination, departure_date: e.start_date }, c++) } return b } };
    var Dl = function(a, b, c, d) {
            var e = Kc(a),
                g = !1 !== d.getWithConfig(H.xa),
                h = d.getWithConfig(H.wa) || d.getWithConfig(H.P),
                k = d.getWithConfig(H.T),
                l = d.getWithConfig(H.U);
            if (b === H.w) {
                var m = d.getWithConfig(H.ka) || {};
                if (g) {
                    yh(m[H.Sa], !!m[H.F]) && Lh(Bl, h, void 0, k, l);
                    var n = { prefix: h, domain: k, Ja: l };
                    Ih(n);
                    Ph(["aw", "dc"], n)
                }
                if (m[H.F]) { Nh(Bl, m[H.F], m[H.Ua], !!m[H.Ta], h); }
                G(d.s)
            } else if ("purchase" === b) {
                var q = d.getWithConfig(H.Ya),
                    u = d.getWithConfig(H.Z),
                    p = d.getWithConfig(H.ca),
                    r = d.getWithConfig(H.Y),
                    v = {};
                if (f(q) || "number" === typeof q) v.pg = String(q);
                f(p) && (v.sg = p);
                if (f(u) || "number" === typeof u) v.vg = v.og = String(u);
                if (ua(r) && 0 !== r.length) {
                    var w = r[0];
                    if (Pa(w)) {
                        if (f(w.id) || "number" === typeof w.id) v.ug = String(w.id);
                        f(w.start_date) && (v.qg = w.start_date);
                        f(w.end_date) && (v.rg = w.end_date)
                    }
                }
                var y = e.h[0],
                    x = d.s,
                    z = d.o;
                /^\d+$/.test(y) ? fc(Cl(y, v, g, h), x, z) : G(z)
            } else G(d.o)
        },
        Cl = function(a, b, c, d) {
            var e = encodeURIComponent(a),
                g = encodeURIComponent(El(b)),
                h = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" +
                e + "/?data=" + g;
            c && (h += Sh("ha", d).map(function(k) { return "&gclha=" + encodeURIComponent(k) }).join(""));
            return h
        },
        El = function(a) {
            function b(d, e) { void 0 !== e && c.push(d + "=" + e) }
            var c = [];
            b("hct_base_price", a.og);
            b("hct_booking_xref", a.pg);
            b("hct_checkin_date", a.qg);
            b("hct_checkout_date", a.rg);
            b("hct_currency_code", a.sg);
            b("hct_partner_hotel_id", a.ug);
            b("hct_total_price", a.vg);
            return c.join(";")
        },
        Bl = ["ha"];
    var Sl = function(a, b, c, d) {
            var e = "https://www.google-analytics.com/analytics.js",
                g = Fe();
            if (qa(g)) {
                var h = "gtag_" + a.split("-").join("_"),
                    k = function(x) {
                        var z = [].slice.call(arguments, 0);
                        z[0] = h + "." + z[0];
                        g.apply(window, z)
                    },
                    l = function() {
                        var x = function(E, J) { for (var M = 0; J && M < J.length; M++) k(E, J[M]) },
                            z = Jl(b, d);
                        if (z) {
                            var B = z.action;
                            if ("impressions" === B) x("ec:addImpression", z.yg);
                            else if ("promo_click" === B || "promo_view" === B) {
                                var A = z.Uc;
                                x("ec:addPromo", z.Uc);
                                A && 0 < A.length && "promo_click" === B && k("ec:setAction", B)
                            } else x("ec:addProduct",
                                z.La), k("ec:setAction", B, z.ab)
                        }
                    },
                    m = function() {
                        if (Ld()) {} else {
                            var x = d.getWithConfig(H.Xe);
                            x && (k("require", x, { dataLayer: "dataLayer" }), k("require", "render"))
                        }
                    },
                    n = Kl(a, h, b, d);
                Ll(h, n.Fa) && (g(function() { De() && De().remove(h) }), Ml[h] = !1);
                g("create", a, n.Fa);
                (function() {
                    var x = d.getWithConfig("custom_map");
                    g(function() {
                        if (Pa(x)) {
                            var z = n.ia,
                                B = De().getByName(h),
                                A;
                            for (A in x)
                                if (x.hasOwnProperty(A) && /^(dimension|metric)\d+$/.test(A) && void 0 != x[A]) {
                                    var E = B.get(Nl(x[A]));
                                    Ol(z, A, E)
                                }
                        }
                    })
                })();
                (function(x) {
                    if (x) {
                        var z = {};
                        if (Pa(x))
                            for (var B in Pl) Pl.hasOwnProperty(B) && Ql(Pl[B], B, x[B], z);
                        k("require", "linkid", z)
                    }
                })(n.linkAttribution);
                var u = n[H.ka];
                if (u && u[H.F]) {
                    var p = u[H.Ua];
                    Ge(h + ".", u[H.F], void 0 === p ? !!u.use_anchor : "fragment" === p, !!u[H.Ta])
                }
                var r = function(x, z, B) {
                    B && (z = "" + z);
                    n.ia[x] = z
                };
                if (b === H.cc) m(), k("send", "pageview", n.ia);
                else if (b === H.w) {
                    m();
                    var v = !1;
                    v ? Yd(a, d) : Yd(a);
                    0 != n.sendPageView && k("send", "pageview", n.ia)
                } else "screen_view" === b ? k("send", "screenview", n.ia) : "timing_complete" === b ? (r("timingCategory",
                    n.eventCategory, !0), r("timingVar", n.name, !0), r("timingValue", Aa(n.value)), void 0 !== n.eventLabel && r("timingLabel", n.eventLabel, !0), k("send", "timing", n.ia)) : "exception" === b ? k("send", "exception", n.ia) : "optimize.callback" !== b && (0 <= t("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), b) && (k("require", "ec", "ec.js"), l()), r("eventCategory", n.eventCategory, !0), r("eventAction", n.eventAction || b, !0), void 0 !== n.eventLabel && r("eventLabel", n.eventLabel, !0), void 0 !== n.value && r("eventValue", Aa(n.value)), k("send", "event", n.ia));
                if (!Rl) {
                    Rl = !0;
                    ye();
                    var w = d.o,
                        y = function() { De().loaded || w() };
                    Ld() ? G(y) : cc(e, y, w)
                }
            } else G(d.o)
        },
        Rl, Ml = {},
        Tl = { client_id: 1, client_storage: "storage", cookie_name: 1, cookie_domain: 1, cookie_expires: 1, cookie_path: 1, cookie_update: 1, sample_rate: 1, site_speed_sample_rate: 1, use_amp_client_id: 1, store_gac: 1, conversion_linker: "storeGac" },
        Ul = {
            anonymize_ip: 1,
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: { name: "campaignName", source: "campaignSource", medium: "campaignMedium", term: "campaignTerm", content: "campaignContent", id: "campaignId" },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        },
        Vl = {
            content_id: 1,
            event_category: 1,
            event_action: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1
        },
        Pl = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
        Wl = { anonymize_ip: 1, fatal: 1, non_interaction: 1, use_amp_client_id: 1, send_page_view: 1, store_gac: 1, conversion_linker: 1 },
        Ql = function(a, b, c, d) {
            if (void 0 !== c)
                if (Wl[b] && (c = Ca(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Nl(b)] = c;
                else if (f(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Nl = function(a) {
            return a && f(a) ? a.replace(/(_[a-z])/g, function(b) { return b[1].toUpperCase() }) :
                a
        },
        Xl = function(a) {
            var b = "general";
            0 <= t("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), a) ? b = "ecommerce" : 0 <= t("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Ol = function(a, b, c) { a.hasOwnProperty(b) || (a[b] = c) },
        Yl = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d =
                        a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            g = d.variant;
                        void 0 != e && void 0 != g && b.push(String(e) + "." + String(g))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Kl = function(a, b, c, d) {
            var e = function(B) { return d.getWithConfig(B) },
                g = {},
                h = {},
                k = {},
                l = Yl(e(H.Te));
            l && Ol(h, "exp", l);
            var m = e("custom_map");
            if (Pa(m))
                for (var n in m)
                    if (m.hasOwnProperty(n) && /^(dimension|metric)\d+$/.test(n) && void 0 != m[n]) {
                        var q = e(String(m[n]));
                        void 0 !== q && Ol(h, n, q)
                    }
            var u = Hd(a);
            for (var p = 0; p < u.length; ++p) {
                var r = u[p],
                    v = e(r);
                Vl.hasOwnProperty(r) ? Ql(Vl[r], r, v, g) : Ul.hasOwnProperty(r) ? Ql(Ul[r], r, v, h) : Tl.hasOwnProperty(r) ? Ql(Tl[r], r, v, k) : /^(dimension|metric|content_group)\d+$/.test(r) ? Ql(1, r, v, h) : r === H.P && 0 > t(u, H.tb) && (k.cookieName = v + "_ga")
            }
            Ol(k, "cookieDomain", "auto");
            Ol(h, "forceSSL", !0);
            Ol(g, "eventCategory", Xl(c));
            0 <= t(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && Ol(h, "nonInteraction", !0);
            "login" === c || "sign_up" === c || "share" === c ? Ol(g, "eventLabel",
                e(H.We)) : "search" === c || "view_search_results" === c ? Ol(g, "eventLabel", e(H.bf)) : "select_content" === c && Ol(g, "eventLabel", e(H.Je));
            var w = g[H.ka] || {},
                y = w[H.Sa];
            y || 0 != y && w[H.F] ? k.allowLinker = !0 : !1 === y && Ol(k, "useAmpClientId", !1);
            if (!1 === e(H.He) || !1 === e(H.O)) h.allowAdFeatures = !1;
            !1 === e(H.O) && I("GTM", 27);
            k.name = b;
            h["&gtm"] = Yh(!0);
            h.hitCallback = d.s;
            var x = e(H.Ve) || Cd("gtag.remote_config." + a + ".url", 2),
                z = e(H.Ue) || Cd("gtag.remote_config." + a + ".dualId", 2);
            x && (k._x_19 = x);
            z && (k._x_20 = z);
            g.ia = h;
            g.Fa = k;
            return g
        },
        Jl = function(a,
            b) {
            function c(v) {
                var w = C(v);
                w.list = v.list_name;
                w.listPosition = v.list_position;
                w.position = v.list_position || v.creative_slot;
                w.creative = v.creative_name;
                return w
            }

            function d(v) { for (var w = [], y = 0; v && y < v.length; y++) v[y] && w.push(c(v[y])); return w.length ? w : void 0 }

            function e(v) { return { id: g(H.Ya), affiliation: g(H.Oe), revenue: g(H.Z), tax: g(H.Se), shipping: g(H.Re), coupon: g(H.Pe), list: g(H.fc) || v } }
            for (var g = function(v) { return b.getWithConfig(v) }, h = g(H.Y), k, l = 0; h && l < h.length && !(k = h[l][H.fc]); l++);
            var m = g("custom_map");
            if (Pa(m))
                for (var n = 0; h && n < h.length; ++n) {
                    var q = h[n],
                        u;
                    for (u in m) m.hasOwnProperty(u) && /^(dimension|metric)\d+$/.test(u) && void 0 != m[u] && Ol(q, u, q[m[u]])
                }
            var p = null,
                r = g(H.Qe);
            "purchase" === a || "refund" === a ? p = { action: a, ab: e(), La: d(h) } : "add_to_cart" === a ? p = { action: "add", La: d(h) } : "remove_from_cart" === a ? p = { action: "remove", La: d(h) } : "view_item" === a ? p = { action: "detail", ab: e(k), La: d(h) } : "view_item_list" === a ? p = { action: "impressions", yg: d(h) } : "view_promotion" === a ? p = { action: "promo_view", Uc: d(r) } : "select_content" === a &&
                r && 0 < r.length ? p = { action: "promo_click", Uc: d(r) } : "select_content" === a ? p = { action: "click", ab: { list: g(H.fc) || k }, La: d(h) } : "begin_checkout" === a || "checkout_progress" === a ? p = { action: "checkout", La: d(h), ab: { step: "begin_checkout" === a ? 1 : g(H.zd), option: g(H.yd) } } : "set_checkout_option" === a && (p = { action: "checkout_option", ab: { step: g(H.zd), option: g(H.yd) } });
            p && (p.Eh = g(H.ca));
            return p
        },
        Zl = {},
        Ll = function(a, b) {
            var c = Zl[a];
            Zl[a] = C(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) &&
                    c[e] !== b[e]) return !0;
            return !1
        };
    var Y = { a: {} };



    Y.a.gtagha = ["google"],
        function() {
            var a = !1;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = Vc,
                    g = V("eventModel");
                if (a) {
                    Af(d.id, Dl);
                    if (e === H.w) {
                        var h = V("gtag.targets." + d.id);
                        Cf(h, d.id)
                    } else Bf(e, g, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = tf(sf(nf(g), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) { return Ed(l, d.containerId, d.id) };
                    Dl(d.id, e, (new Date).getTime(),
                        k)
                }
            };
            Y.__gtagha = b;
            Y.__gtagha.b = "gtagha";
            Y.__gtagha.g = !0;
            Y.__gtagha.priorityOverride = 0;
        }();
    Y.a.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.b = "e";
                Y.__e.g = !0;
                Y.__e.priorityOverride = 0
            })(function(a) { return String(Kd(a.vtp_gtmEventId, "event")) })
        }();

    Y.a.v = ["google"],
        function() {
            (function(a) {
                Y.__v = a;
                Y.__v.b = "v";
                Y.__v.g = !0;
                Y.__v.priorityOverride = 0
            })(function(a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = V(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1); return void 0 !== c ? c : a.vtp_defaultValue })
        }();








    Y.a.gtagaw = ["google"],
        function() {
            var a = !1;
            a = !0;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = void 0 !== d.h[1] ? d.id : void 0,
                    g = Vc,
                    h = V("eventModel");
                if (a) {
                    Af(c.vtp_conversionId.id, rl);
                    if (g === H.w) {
                        var k = V("gtag.targets." + d.id);
                        Cf(k, c.vtp_conversionId.id)
                    } else Bf(g, h, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var l = tf(sf(nf(h), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    l.getWithConfig = function(m) {
                        return Ed(m,
                            d.containerId, e)
                    };
                    rl(c.vtp_conversionId.id, g, (new Date).getTime(), l)
                }
            };
            Y.__gtagaw = b;
            Y.__gtagaw.b = "gtagaw";
            Y.__gtagaw.g = !0;
            Y.__gtagaw.priorityOverride = 0;
        }();


    Y.a.get = ["google"],
        function() {
            (function(a) {
                Y.__get = a;
                Y.__get.b = "get";
                Y.__get.g = !0;
                Y.__get.priorityOverride = 0
            })(function(a) {
                if (a.vtp_isAutoTag) {
                    var b = String(a.vtp_trackingId),
                        c = Vc || "",
                        d = {};
                    if (c === H.w) {
                        var e = V("gtag.targets." + b);
                        C(e, d);
                        d[H.la] = !0;
                        Cf(d, b)
                    } else {
                        var g = V("eventModel");
                        C(g, d);
                        d[H.la] = !0;
                        Bf(c, d, b)
                    }
                } else {
                    var h = a.vtp_settings,
                        k = h.eventParameters,
                        l = h.userProperties;
                    C(Aj(a.vtp_eventParameters, "name", "value"), k);
                    C(Aj(a.vtp_userProperties, "name", "value"), l);
                    k[H.V] = l;
                    var m = String(a.vtp_eventName),
                        n = a.vtp_allowSystemNames;
                    if (!n && $k(m)) return;
                    n || al(k);
                    (a.vtp_deferrable ? fl : el)(String(h.streamId), m, k)
                }
                a.vtp_gtmOnSuccess()
            })
        }();

    Y.a.gtagfl = [],
        function() {
            function a(d) { var e = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(d); if (e) return { containerId: "DC-" + e[1], L: e[3] && d } }
            var b = !1;
            var c = function(d) {
                var e = d.vtp_targetId,
                    g = Vc,
                    h = V("eventModel");
                if (b) {
                    Af(e, xl);
                    if (g === H.w) {
                        var k = V("gtag.targets." + e);
                        Cf(k, e)
                    } else Bf(g, h, e);
                    G(d.vtp_gtmOnSuccess)
                } else {
                    var l = a(e);
                    if (l) {
                        var m = tf(sf(nf(h), d.vtp_gtmOnSuccess),
                            d.vtp_gtmOnFailure);
                        m.getWithConfig = function(n) { return Ed(n, l.containerId, l.L) };
                        xl(e, g, (new Date).getTime(), m)
                    } else G(d.vtp_gtmOnFailure)
                }
            };
            Y.__gtagfl = c;
            Y.__gtagfl.b = "gtagfl";
            Y.__gtagfl.g = !0;
            Y.__gtagfl.priorityOverride = 0;
        }();


    Y.a.gtaggf = ["google"],
        function() {
            var a = !1;
            var b = function(c) {
                var d = c.vtp_conversionId,
                    e = Vc,
                    g = V("eventModel");
                if (a) {
                    Af(d.id, Al);
                    if (e === H.w) {
                        var h = V("gtag.targets." + d.id);
                        Cf(h, d.id)
                    } else Bf(e, g, d.id);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = tf(sf(nf(g), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) { return Ed(l, d.containerId, d.id) };
                    Al(d.id, e,
                        (new Date).getTime(), k)
                }
            };
            Y.__gtaggf = b;
            Y.__gtaggf.b = "gtaggf";
            Y.__gtaggf.g = !0;
            Y.__gtaggf.priorityOverride = 0;
        }();




    Y.a.gtagua = ["google"],
        function() {
            var a = !1;
            var b = function(c) {
                var d = c.vtp_trackingId,
                    e = Vc,
                    g = V("eventModel");
                if (a) {
                    Af(d, Sl);
                    if (e === H.w) {
                        var h = V("gtag.targets." + d);
                        Cf(h, d)
                    } else Bf(e, g, d);
                    G(c.vtp_gtmOnSuccess)
                } else {
                    var k = tf(sf(nf(g), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    k.getWithConfig = function(l) { return Ed(l, d, void 0) };
                    Sl(d, e, (new Date).getTime(), k)
                }
            };
            Y.__gtagua =
                b;
            Y.__gtagua.b = "gtagua";
            Y.__gtagua.g = !0;
            Y.__gtagua.priorityOverride = 0;
        }();


    var $l = {};
    $l.macro = function(a) { if (Eg.wc.hasOwnProperty(a)) return Eg.wc[a] }, $l.onHtmlSuccess = Eg.Td(!0), $l.onHtmlFailure = Eg.Td(!1);
    $l.dataLayer = Dd;
    $l.callback = function(a) {
        Xc.hasOwnProperty(a) && qa(Xc[a]) && Xc[a]();
        delete Xc[a]
    };

    function am() {
        Oc[Nc.m] = $l;
        Ia(Yc, Y.a);
        xb = xb || Eg;
        yb = ge
    }

    function bm() {
        zh.gtm_3pds = !0;
        Oc = D.google_tag_manager = D.google_tag_manager || {};
        if (Oc[Nc.m]) {
            var a = Oc.zones;
            a && a.unregisterChild(Nc.m)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) pb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) sb.push(e[g]);
            for (var h = b.predicates || [], k = 0; k <
                h.length; k++) rb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], q = {}, u = 0; u < n.length; u++) q[n[u][0]] = Array.prototype.slice.call(n[u], 1);
                qb.push(q)
            }
            vb = Y;
            wb = tj;
            am();
            Dg();
            ke = !1;
            le = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) ne();
            else {
                gc(F, "DOMContentLoaded", ne);
                gc(F, "readystatechange", ne);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var p = !0;
                    try { p = !D.frameElement } catch (y) {}
                    p && oe()
                }
                gc(D, "load", ne)
            }
            qg = !1;
            "complete" === F.readyState ? sg() : gc(D,
                "load", sg);
            a: { if (!sd) break a;D.setInterval(td, 864E5); }
            Uc = (new Date).getTime();
            $l.bootstrap = Uc;
        }
    }
    bm();

})()