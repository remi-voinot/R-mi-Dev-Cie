(function(e) {
    function t(t) {
        for (var a, n, c = t[0], i = t[1], l = t[2], u = 0, p = []; u < c.length; u++) n = c[u], Object.prototype.hasOwnProperty.call(r, n) && r[n] && p.push(r[n][0]), r[n] = 0;
        for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
        d && d(t);
        while (p.length) p.shift()();
        return o.push.apply(o, l || []), s()
    }

    function s() {
        for (var e, t = 0; t < o.length; t++) {
            for (var s = o[t], a = !0, c = 1; c < s.length; c++) {
                var i = s[c];
                0 !== r[i] && (a = !1)
            }
            a && (o.splice(t--, 1), e = n(n.s = s[0]))
        }
        return e
    }
    var a = {},
        r = { app: 0 },
        o = [];

    function n(t) { if (a[t]) return a[t].exports; var s = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(s.exports, s, s.exports, n), s.l = !0, s.exports }
    n.m = e, n.c = a, n.d = function(e, t, s) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s }) }, n.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (n.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(s, a, function(t) { return e[t] }.bind(null, a));
        return s
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        i = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var d = i;
    o.push([0, "chunk-vendors"]), s()
})({
    0: function(e, t, s) { e.exports = s("56d7") },
    "034f": function(e, t, s) {
        "use strict";
        var a = s("64a9"),
            r = s.n(a);
        r.a
    },
    "0455": function(e, t, s) {
        "use strict";
        var a = s("346e"),
            r = s.n(a);
        r.a
    },
    "0d3a": function(e, t, s) {
        "use strict";
        var a = s("c083"),
            r = s.n(a);
        r.a
    },
    1224: function(e, t, s) {
        "use strict";
        var a = s("af6d"),
            r = s.n(a);
        r.a
    },
    "1ac8": function(e, t, s) {
        "use strict";
        var a = s("7fb6"),
            r = s.n(a);
        r.a
    },
    "274c": function(e, t, s) {},
    "29be": function(e, t, s) {},
    "2abe": function(e, t, s) {},
    3149: function(e, t, s) {
        "use strict";
        var a = s("a1ed"),
            r = s.n(a);
        r.a
    },
    3459: function(e, t, s) {},
    "346e": function(e, t, s) {},
    "36ae": function(e, t, s) {},
    "382f": function(e, t, s) {
        "use strict";
        var a = s("a85e"),
            r = s.n(a);
        r.a
    },
    "3f9d": function(e, t, s) {},
    "3fc0": function(e, t, s) {},
    "465b": function(e, t, s) {},
    "4baa": function(e, t, s) {
        "use strict";
        var a = s("3459"),
            r = s.n(a);
        r.a
    },
    "4e34": function(e, t, s) {
        "use strict";
        var a = s("c83c"),
            r = s.n(a);
        r.a
    },
    "56d7": function(e, t, s) {
        "use strict";
        s.r(t);
        s("a481"), s("cadf"), s("551c"), s("f751"), s("097d");
        var a = s("2b0e"),
            r = s("0e54"),
            o = s.n(r),
            n = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "app" } }, [s("app-navbar", { attrs: { repository: e.repository } }), s("router-view", { attrs: { darkMode: e.darkMode, konami: e.konami }, on: { toggleDarkMode: e.toggleDarkMode, setRepository: e.setRepository } }), s("app-footer", { attrs: { darkMode: e.darkMode }, on: { toggleDarkMode: e.toggleDarkMode } })], 1)
            },
            c = [],
            i = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("header", [s("container", [s("router-link", { attrs: { to: "/" } }, [e._v("discord.js")]), s("nav", [s("router-link", { attrs: { to: "/docs" } }, [e._v("Documentation")]), s("a", { attrs: { href: "https://github.com/" + e.repository } }, [e._v("GitHub")])], 1)], 1)], 1)
            },
            l = [],
            d = { name: "navbar", props: ["repository"] },
            u = d,
            p = (s("1ac8"), s("2877")),
            m = Object(p["a"])(u, i, l, !1, null, null, null),
            h = m.exports,
            f = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("footer", [s("container", [s("strong", [s("router-link", { attrs: { to: "/" } }, [e._v("discord.js")])], 1), s("p", [e._v("A powerful library for interacting with the Discord API")]), s("stats"), s("a", { attrs: { href: "", id: "dark-mode-link" }, on: { click: e.toggleDarkMode } }, [s("em", { staticClass: "fa", class: e.darkMode ? "fa-sun-o" : "fa-moon-o" }), e._v("\n      Turn " + e._s(e.darkMode ? "on" : "off") + " the lights\n    ")])], 1), s("div", { attrs: { id: "site-meta" } }, [s("div", { attrs: { id: "site-meta-label" } }, [e._v("π")]), e._v("\n    commit: " + e._s(e.hash)), s("br"), e._v("\n    built at: " + e._s(e.builtAt.toUTCString()) + "\n  ")])], 1)
            },
            v = [],
            g = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("ul", { staticClass: "stats" }, [s("li", [e._v(e._s(e.downloads) + " downloads")]), s("li", [e._v(e._s(e.stars) + " stars")]), s("li", [e._v(e._s(e.contributors) + " contributors")])])
            },
            y = [],
            b = (s("ac4d"), s("8a81"), s("ac6a"), s("5df3"), s("768b")),
            _ = (s("96cf"), s("3b8d")),
            k = (s("6b54"), function(e) { return e.json() }),
            w = function() {},
            C = { downloads: "".concat(28e5.toLocaleString(), "+"), stars: "".concat(4300..toLocaleString(), "+"), contributors: "100+", fetching: !1 },
            T = {
                name: "stats",
                data: function() { return C },
                beforeMount: function() { this.fetch() },
                methods: {
                    fetch: function(e) {
                        function t() { return e.apply(this, arguments) }
                        return t.toString = function() { return e.toString() }, t
                    }(Object(_["a"])(regeneratorRuntime.mark(function e() {
                        var t, s, a, r, o, n, c, i, l, d, u;
                        return regeneratorRuntime.wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.fetching) { e.next = 2; break }
                                    return e.abrupt("return");
                                case 2:
                                    return this.fetching = !0, e.next = 5, Promise.all([fetch("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/discord.js").then(k, w), fetch("https://api.github.com/repos/discordjs/discord.js").then(k, w), fetch("https://api.github.com/repos/discordjs/discord.js/stats/contributors").then(k, w)]);
                                case 5:
                                    if (t = e.sent, s = Object(b["a"])(t, 3), a = s[0], r = s[1], o = s[2], !a) { e.next = 32; break }
                                    for (this.downloads = 0, n = !0, c = !1, i = void 0, e.prev = 15, l = a.downloads[Symbol.iterator](); !(n = (d = l.next()).done); n = !0) u = d.value, this.downloads += u.downloads;
                                    e.next = 23;
                                    break;
                                case 19:
                                    e.prev = 19, e.t0 = e["catch"](15), c = !0, i = e.t0;
                                case 23:
                                    e.prev = 23, e.prev = 24, n || null == l.return || l.return();
                                case 26:
                                    if (e.prev = 26, !c) { e.next = 29; break }
                                    throw i;
                                case 29:
                                    return e.finish(26);
                                case 30:
                                    return e.finish(23);
                                case 31:
                                    this.downloads = this.downloads.toLocaleString();
                                case 32:
                                    r && (this.stars = r.stargazers_count.toLocaleString()), o && (this.contributors = o.length.toLocaleString());
                                case 34:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [15, 19, 23, 31],
                            [24, , 26, 30]
                        ])
                    })))
                }
            },
            S = T,
            $ = Object(p["a"])(S, g, y, !1, null, null, null),
            j = $.exports,
            x = { name: "footer", props: ["darkMode"], components: { Stats: j }, data: function() { return { hash: "a70c1bb03ecc0d07767543fa5731cd6ec8d0861b", builtAt: new Date(1583074443246) } }, methods: { toggleDarkMode: function(e) { this.$emit("toggleDarkMode"), e.preventDefault() } } },
            M = x,
            P = (s("7d7f"), Object(p["a"])(M, f, v, !1, null, null, null)),
            O = P.exports,
            D = (s("f559"), s("4f7f"), s("8d61")),
            E = s.n(D),
            R = (s("7f7f"), s("d225")),
            q = s("b0b4"),
            A = function(e) { if (!e.ok) throw new Error("Failed to fetch docs data file from GitHub"); return e.json() },
            N = function() {
                function e(t) { Object(R["a"])(this, e), this.id = t.id, this.name = t.name, this.global = t.global, this.repo = t.repo, this.defaultTag = t.defaultTag || "master", this.defaultFile = t.defaultFile || { category: "general", id: "welcome" }, this.source = t.source || "https://github.com/".concat(this.repo, "/blob/"), this.branchFilter = t.branchFilter || function(e) { return "master" !== e }, this.tagFilter = t.tagFilter || function() { return !0 }, this.tags = null, this.recentTag = null }
                return Object(q["a"])(e, [{
                    key: "fetchTags",
                    value: function() {
                        var e = this;
                        return this.tags ? Promise.resolve(this.tags) : Promise.all([fetch("https://api.github.com/repos/".concat(this.repo, "/branches")).then(A), fetch("https://api.github.com/repos/".concat(this.repo, "/tags")).then(A)]).catch(function(t) { if (localStorage["source-".concat(e.id)]) { console.error(t); var s = JSON.parse(localStorage["source-".concat(e.id)]); return [s.branches, s.tags] } throw t }).then(function(t) {
                            var s = Object(b["a"])(t, 2),
                                a = s[0],
                                r = s[1];
                            e.tags = [e.defaultTag], localStorage["source-".concat(e.id)] = JSON.stringify({ branches: a, tags: r });
                            var o = !0,
                                n = !1,
                                c = void 0;
                            try {
                                for (var i, l = a[Symbol.iterator](); !(o = (i = l.next()).done); o = !0) {
                                    var d = i.value;
                                    d.name !== e.defaultTag && e.branchFilter(d.name) && e.tags.push(d.name)
                                }
                            } catch (M) { n = !0, c = M } finally { try { o || null == l.return || l.return() } finally { if (n) throw c } }
                            var u = {},
                                p = !0,
                                m = !1,
                                h = void 0;
                            try {
                                for (var f, v = r[Symbol.iterator](); !(p = (f = v.next()).done); p = !0) {
                                    var g = f.value;
                                    if (E.a.valid(g.name)) {
                                        var y = "".concat(E.a.major(g.name), ".").concat(E.a.minor(g.name)),
                                            _ = E.a.patch(g.name);
                                        if (_ < u[y]) continue;
                                        u[y] = _
                                    }
                                }
                            } catch (M) { m = !0, h = M } finally { try { p || null == v.return || v.return() } finally { if (m) throw h } }
                            var k = !0,
                                w = !1,
                                C = void 0;
                            try {
                                for (var T, S = r[Symbol.iterator](); !(k = (T = S.next()).done); k = !0) {
                                    var $ = T.value;
                                    if ($.name !== e.defaultTag && e.tagFilter($.name)) {
                                        if (E.a.valid($.name)) {
                                            var j = "".concat(E.a.major($.name), ".").concat(E.a.minor($.name)),
                                                x = E.a.patch($.name);
                                            if (x < u[j]) continue
                                        }
                                        e.tags.push($.name)
                                    }
                                }
                            } catch (M) { w = !0, C = M } finally { try { k || null == S.return || S.return() } finally { if (w) throw C } }
                            return e.tags
                        })
                    }
                }, { key: "fetchDocs", value: function(e) { return fetch("https://raw.githubusercontent.com/".concat(this.repo, "/docs/").concat(e, ".json")).then(A) } }]), e
            }(),
            L = new Set(["docs", "webpack", "v8"]),
            F = new N({ id: "main", name: "Main library", global: "Discord", repo: "discordjs/discord.js", defaultTag: "stable", branchFilter: function(e) { return !L.has(e) && !e.startsWith("dependabot/") }, tagFilter: function(e) { return E.a.gte(e, "9.0.0") } }),
            z = s("4530"),
            U = s.n(z),
            W = null,
            H = {
                name: "app",
                components: { AppNavbar: h, AppFooter: O },
                data: function() { var e = localStorage.getItem("dark-mode"); return { darkMode: "false" !== e && null !== e, repository: F.repo, konami: !1 } },
                methods: {
                    toggleDarkMode: function() { this.darkMode = !this.darkMode, localStorage.setItem("dark-mode", this.darkMode), this.darkMode ? this.$el.classList.add("dark") : this.$el.classList.remove("dark") },
                    setRepository: function(e) { this.repository = e },
                    poop: function() {
                        var e = this,
                            t = document.createElement("div");
                        t.className = "poop", t.innerHTML = "💩";
                        var s = 4e3 * Math.random() + 1e3;
                        t.style.transition = "top ".concat(s, "ms linear, left ").concat(s, "ms linear"), t.style.animation = "spin ".concat(s / 3e3, "s infinite linear");
                        var a = Math.floor(4 * Math.random()) + 1,
                            r = { top: "".concat(2 === a || 4 === a ? Math.random() * window.innerHeight : 1 === a ? -200 : window.innerHeight + 200, "px"), left: "".concat(1 === a || 3 === a ? Math.random() * window.innerWidth : 4 === a ? -200 : window.innerWidth + 200, "px") },
                            o = { top: "".concat(2 === a || 4 === a ? Math.random() * window.innerHeight : 1 === a ? window.innerHeight + 200 : -200, "px"), left: "".concat(1 === a || 3 === a ? Math.random() * window.innerWidth : 4 === a ? window.innerWidth + 200 : -200, "px") };
                        Object.assign(t.style, r), window.setTimeout(function() { Object.assign(t.style, o) }, 100), document.body.appendChild(t), window.setTimeout(function() { document.body.removeChild(t) }, s + 100), window.setTimeout(function() { return e.poop() }, 1e4 * Math.random() + 1e3)
                    }
                },
                mounted: function() {
                    var e = this;
                    this.darkMode && this.$el.classList.add("dark"), W || (W = new U.a(function() { e.konami = !0, e.poop(), W.disable() }))
                }
            },
            J = H,
            B = (s("034f"), Object(p["a"])(J, n, c, !1, null, null, null)),
            G = B.exports,
            I = s("8c4f"),
            K = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "home" } }, [s("slide", { attrs: { id: "jumbotron" } }, [s("logo", { attrs: { light: !0, konami: e.konami, id: "logo" } }), s("code", [e._v("npm install discord.js")]), s("br")], 1), s("section", { attrs: { id: "info" } }, [e._m(0), s("div", { staticClass: "info-item" }, [s("h2", [e._v("Example")]), s("pre", [s("code", { directives: [{ name: "hljs", rawName: "v-hljs" }], staticClass: "javascript" }, [e._v("const Discord = require('discord.js');\nconst client = new Discord.Client();\n\nclient.on('ready', () => {\n  console.log(`Logged in as ${client.user.tag}!`);\n});\n\nclient.on('message', msg => {\n  if (msg.content === 'ping') {\n    msg.reply('Pong!');\n  }\n});\n\nclient.login('token');")])])]), e._m(1), s("div", { staticClass: "info-item" }, [s("h2", [e._v("Statistics")]), s("p", [s("stats")], 1), s("p", { staticClass: "center" }, [e._v("...and growing!")])]), s("div", { staticClass: "full-info-item" }, [s("router-link", { staticClass: "big-ass-btn", attrs: { to: "/docs" } }, [e._v("Get started")]), s("a", { staticClass: "big-ass-btn discord", attrs: { href: "https://discord.gg/bRCvFy9" } }, [e._v("Discord")])], 1)])], 1)
            },
            Z = [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "info-item" }, [s("h2", [e._v("About")]), s("p", [e._v("\n          discord.js is a powerful "), s("a", { attrs: { href: "https://nodejs.org/" } }, [e._v("node.js")]), e._v(" module that allows you to interact with the\n          "), s("a", { attrs: { href: "https://discordapp.com/developers/docs/intro" } }, [e._v("Discord API")]), e._v(" very easily.\n          It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend.\n        ")]), s("p", [e._v("\n          Usability, consistency, and performance are key focuses of discord.js, and it also has nearly 100% coverage of the Discord API.\n          It receives new Discord features shortly after they arrive in the API.\n        ")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "info-item" }, [s("h2", [e._v("Why?")]), s("p", [s("ul", [s("li", [e._v("Object-oriented")]), s("li", [e._v("Speedy and efficient")]), s("li", [e._v("Feature-rich")]), s("li", [e._v("Flexible")]), s("li", [e._v("100% Promise-based")])])])])
            }],
            Y = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("svg", { style: e.konami ? "animation: spin 0.5s infinite linear;" : "", attrs: { height: "100%", width: "100%", viewBox: "0 0 6111.4378 1102.9827" } }, [s("g", { attrs: { transform: "translate(2539.6 -107.66)" } }, [s("g", { attrs: { id: "logo-discord", fill: e.light ? "#fff" : "#3d3f42", transform: "translate(-44.194 1175.6)" } }, [s("path", { attrs: { d: "m-2495.4-1051.4v453.6 453.6l145.75-.37695c127.36-.3288 147.71-.58582 161.25-2.041 45.045-4.8398 76.353-11.233 111.79-22.826 44.217-14.465 83.672-35.567 118.71-63.49 13.615-10.851 40.444-37.567 50.889-50.674 37.186-46.665 61.816-98.191 78.01-163.2 23.57-94.614 23.154-219.66-1.0469-313.5-41.72-161.77-155.27-260-329.35-284.92-38.756-5.5479-34.464-5.4161-190.75-5.8086l-145.25-.3652zm161 130.09 41.75.0156c55.334.0205 78.397 1.6295 108.25 7.5566 105.75 20.995 171.57 87.554 196.39 198.59 12.878 57.6 14.716 139.6 4.5469 202.81-7.3952 45.963-21.469 87.286-40.711 119.53-12.041 20.179-33.82 45.681-51 59.719-38.627 31.563-87.98 50.255-148.73 56.326-9.5463.9541-32.361 1.7291-62.75 2.1328l-47.75.63477v-323.66-323.66z" } }), s("path", { attrs: { d: "m-1631.4-597.85v-453.5h80.5 80.5v453.5 453.5h-80.5-80.5v-453.5z" } }), s("path", { attrs: { d: "m-1008.4-128.41c-96.325-5.9603-189.36-41.918-264.54-102.25-15.565-12.49-33-28.526-33-30.352 0-.7224 20.622-25.63 45.826-55.351l45.826-54.038 3.8214 3.2697c17.83 15.256 22.538 19.151 29.616 24.501 48.673 36.79 103.35 61.169 158.92 70.862 18.387 3.2073 54.666 4.419 74.088 2.4745 41.751-4.1802 74.798-17.199 96.864-38.16 10.213-9.7012 15.896-17.429 21.626-29.408 17.4-36.376 13.152-81.77-10.39-111-16.357-20.31-45.054-37.907-98.696-60.521-41.654-17.56-164.15-71.537-176.19-77.638-85.541-43.335-134.63-104.27-148.9-184.84-2.6851-15.162-3.7276-49.931-1.9989-66.666 7.4631-72.25 48.261-136.63 113.09-178.46 41.81-26.976 88.546-43.103 144.99-50.03 20.52-2.5182 67.722-2.5268 88-.016 74.352 9.2063 141.74 36.296 199 79.999 18.772 14.327 37.632 31.435 36.864 33.44-.2001.52235-18.812 23.693-41.361 51.49l-40.997 50.54-3.503-2.9264c-1.9267-1.6095-9.4625-7.4505-16.746-12.98-44.158-33.522-88.429-52.307-140.26-59.513-17.665-2.4562-54.274-2.4782-70-.042-35.82 5.5488-61.303 16.869-80.113 35.588-17.506 17.422-26.238 37.587-27.528 63.576-1.3118 26.419 6.521 48.306 24.066 67.249 17.834 19.254 45.314 35.115 99.448 57.398 32.211 13.259 137.3 57.517 151.65 63.864 47.003 20.795 80.577 42.726 108.49 70.87 43.959 44.316 64.938 98.562 65.021 168.13.053 44.646-7.8058 78.816-26.734 116.23-12.46 24.632-27.741 45.114-49.45 66.28-51.458 50.172-122.59 79.937-208.86 87.392-17.502 1.5126-51.786 2.0335-67.962 1.0326z" } }), s("path", { attrs: { d: "m-155.84-128.44c-100.7-5.7557-190.26-44.562-257.1-111.4-58.171-58.171-98.098-136.72-116.41-229.01-13.522-68.153-15.549-148.4-5.5195-218.5 13.11-91.624 47.506-173.73 99.29-237 11.342-13.858 35.64-38.591 49.282-50.164 54.726-46.425 120.9-76.546 193.88-88.256 25.873-4.1511 37.999-5.0552 67.977-5.0681 28.858-.013 38.31.6981 60.5 4.5485 70.566 12.245 140.29 49.396 192.89 102.78l6.8911 6.9936-2.8911 3.4607c-1.59 1.9034-21.52 24.408-44.288 50.011l-41.397 46.551-10.103-9.0797c-40.998-36.846-79.308-56.146-125.89-63.421-13.826-2.1591-48.594-2.4422-62.711-.51067-51.945 7.1074-94.856 27.696-131.17 62.933-64.806 62.887-97.854 165.12-92.829 287.16 2.697 65.505 14.091 119.1 35.16 165.38 30.027 65.96 77.365 110.94 138.03 131.16 24.572 8.1885 46.583 11.525 76.026 11.525 45.839 0 83.431-9.665 120.81-31.062 19.559-11.195 45.837-32.314 63.267-50.848 3.7379-3.9745 7.1554-7.0833 7.5942-6.9085 1.3142.5236 88.109 97.158 88.109 98.098 0 2.0843-41.684 42.322-54 52.126-73.043 58.146-157.48 84.1-255.41 78.503z" } }), s("path", { attrs: { d: "m610.07-1067.8c-34.898-.056-47.464.862-75.232 5.4922-188.34 31.405-308.9 182.45-325.21 407.46-2.8044 38.675-2.2536 84.125 1.4941 123.38 9.2582 96.975 39.751 184.31 87.494 250.58 57.015 79.142 139.29 130.29 236.46 147 14.533 2.4988 40.496 5.3373 53.5 5.8496 147.12 5.7956 267.7-55.193 342.98-173.48 10.897-17.122 28.991-52.974 36.758-72.828 27.4-70.046 39.498-139.21 39.617-226.5.062-45.479-1.9339-73.343-7.9121-110.4-31.164-193.18-145.75-321-314.25-350.53-27.838-4.8789-41.445-5.9606-75.699-6.0156zm-1.4395 139.59c2.8062.0114 5.6199.0752 8.4395.19336 49.33 2.0671 91.449 18.361 127.46 49.305 12.954 11.133 20.363 19.102 31.482 33.861 40.99 54.409 62.709 125.93 66.582 219.25 4.5628 109.93-19.826 208.09-67.676 272.39-33.936 45.599-76.643 72.514-130.84 82.459-10.577 1.9408-50.92 2.8029-62 1.3242-74.694-9.9681-131.62-54.014-168.58-130.43-24.356-50.365-36.989-106.85-39.92-178.5-5.9652-145.81 37.791-262.31 118.61-315.79 33.933-22.452 74.357-34.245 116.45-34.074z" } }), s("path", { attrs: { d: "m1187.6-1051.4v453.54 453.54h80.5 80.5v-177.51-177.51l68.717.25585 68.719.25782 97.531 177.22 97.533 177.22 90.285.0273c85.686.0268 90.237-.0599 89.336-1.7207-.5222-.9625-49.147-86.08-108.05-189.15-58.906-103.07-106.98-187.52-106.83-187.67.1497-.14971 5.5455-2.31 11.99-4.8008 92.947-35.923 149.28-103.8 164.7-198.43 3.4973-21.47 4.3763-36.845 3.7539-65.688-.8444-39.124-4.5518-62.293-14.883-93.008-29.696-88.286-106.44-143.03-224.91-160.44-38.597-5.6719-28.81-5.4157-221.14-5.7871l-177.75-.3438zm161 128.95 84.25.37695c91.298.40795 95.375.61732 123.75 6.3809 23.495 4.7723 45.38 13.215 61 23.533 15.167 10.019 29.716 27.182 37.475 44.207 14.573 31.978 16.395 82.735 4.3301 120.62-6.6274 20.814-16.172 36.615-31.18 51.625-27.567 27.57-66.814 42.804-121.93 47.324-7.3903.60617-43.437 1.0508-85.25 1.0508h-72.445v-147.56-147.56z" } }), s("path", { attrs: { d: "m2014.6-1051.4v453.6 453.6l145.75-.37695c156.69-.4046 153.13-.29648 191.25-5.8008 38.321-5.5332 77.017-15.82 109.08-28.998 17.362-7.137 22.208-9.743 21.508-11.566-.3206-.8355-1.452-4.9721-2.5156-9.1914-3.4865-13.831-4.3718-23.482-3.7617-41.053.63-18.145 2.2913-27.3 7.7285-42.617 17.594-49.562 60.836-85.599 112.95-94.131 16.457-2.6941 38.955-1.8474 57.701 2.1719 3.6928.79178 3.1565 1.7476 11.26-20.041 27.066-72.775 38.169-169.68 30.476-265.97-14.239-178.25-95.276-299.81-236.97-355.47-33.122-13.01-69.539-22.404-108.45-27.975-38.756-5.5479-34.464-5.4161-190.75-5.8086l-145.25-.3652zm161 130.09 41.75.0156c55.334.0205 78.397 1.6295 108.25 7.5566 105.75 20.995 171.57 87.554 196.39 198.59 12.878 57.6 14.716 139.6 4.5469 202.81-7.3952 45.963-21.469 87.286-40.711 119.53-12.041 20.179-33.82 45.681-51 59.719-38.627 31.563-87.98 50.255-148.73 56.326-9.5463.9541-32.361 1.7291-62.75 2.1328l-47.75.63477v-323.66-323.66z" } })]), s("circle", { attrs: { id: "logo-dot", cx: "2575.3", cy: "939.96", r: "125.4", fill: e.light ? "#94d7b4" : "#499a6c" } }), s("g", { attrs: { id: "logo-js", fill: e.light ? "#8dd6f1" : "#33b5e5", transform: "translate(-44.194 1175.6)" } }, [s("path", { attrs: { d: "m2602.1 34.57c-57.094-4.6075-113.49-28.558-158.26-67.213-27.741-23.949-51.228-55.235-63.883-85.094-5.4804-12.93-5.926-15.992-2.3882-16.406 8.1404-.953 38.073-7.05 53.318-10.86 20.337-5.0831 29.827-8.2686 48.112-16.15 12.138-5.2318 12.996-5.46 14-3.7198 14.778 25.613 36.757 46.236 62.906 59.024 21.609 10.567 39.696 14.761 63.664 14.761 23.073 0 41.694-4.1466 61.73-13.746 36.584-17.528 62.542-46.884 75.844-85.772 2.3995-7.0151 7.5664-31.714 9.361-44.747 2.8753-20.881 3.0454-40.134 3.0555-345.75l.01-314.25h78 78v318.25c0 209.58-.3574 323.03-1.0389 332.25-4.4405 60.076-22.061 115.17-51.016 159.5-11.306 17.311-21.135 29.375-35.857 44.012-44.122 43.866-101.51 69.204-169.58 74.876-17.815 1.4842-53.463 2.0433-65.964 1.0344z" } }), s("path", { attrs: { d: "m3256.6 33.535c-103.92-8.2588-202.14-50.771-278.59-120.57l-11.459-10.464 4.7737-5.6963c2.6255-3.133 23.371-27.615 46.101-54.405l41.327-48.709 11.068 9.6086c54.856 47.624 120.13 79.074 185.78 89.508 19.275 3.0634 60.816 3.3389 79 .5237 56.007-8.6707 91.978-30.946 109.48-67.793 5.7814-12.174 8.6772-25.17 9.2639-41.574 1.8511-51.755-20.009-81.836-81.241-111.79-10.45-5.1123-25.75-12.128-34-15.591-32.568-13.67-168.23-73.282-178.56-78.459-84.895-42.577-136.19-105.76-149.34-183.97-24.654-146.62 80.068-271.29 246.91-293.93 39.105-5.3065 82.999-4.2183 122.48 3.0365 76.174 13.996 145.21 48.561 201.87 101.07l7.367 6.8275-39.699 49c-21.834 26.95-40.537 49.863-41.563 50.918-1.8327 1.8856-1.9536 1.8424-7.1685-2.562-25.013-21.126-59.394-41.952-87.804-53.188-33.742-13.345-63.677-18.968-101.5-19.066-28.062-.0727-45.321 2.2-65.5 8.6248-40.117 12.773-65.445 37.309-74.612 72.282-3.4331 13.097-3.8978 33.664-1.0368 45.883 7.6067 32.488 29.949 55.7 75.674 78.622 15.123 7.5809 24.021 11.522 52.974 23.46 125.45 51.728 173.58 73.274 198.67 88.935 70.314 43.888 106.41 97.76 116.97 174.59 2.1563 15.683 2.4444 55.002.5056 69-7.9359 57.297-31.186 104.9-70.626 144.6-53.439 53.792-126.37 84.242-218.91 91.402-14.98 1.1588-53.385 1.0944-68.605-.1152z" } })])])])
            },
            V = [],
            Q = { name: "logo", props: ["light", "konami"] },
            X = Q,
            ee = Object(p["a"])(X, Y, V, !1, null, null, null),
            te = ee.exports,
            se = { name: "home", props: ["konami"], components: { Logo: te, Stats: j }, mounted: function() { this.$emit("setRepository", F.repo) } },
            ae = se,
            re = (s("fed3"), Object(p["a"])(ae, K, Z, !1, null, null, null)),
            oe = re.exports,
            ne = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "docs" } }, [s("docs-navbar", { attrs: { sources: e.sources, source: e.source } }), s("router-view", { attrs: { source: e.source, tag: e.tag, darkMode: e.darkMode }, on: { toggleDarkMode: e.toggleDarkMode, setRepository: e.setRepository } })], 1)
            },
            ce = [],
            ie = s("bd86"),
            le = new Set(["docs"]),
            de = new N({ id: "collection", name: "Collection", global: "Collection", repo: "discordjs/collection", defaultTag: "master", branchFilter: function(e) { return !le.has(e) && !e.startsWith("dependabot/") } }),
            ue = new Set(["gh-pages", "docs"]),
            pe = new N({ id: "commando", name: "Commando", global: "Commando", repo: "discordjs/Commando", branchFilter: function(e) { return !ue.has(e) && !e.startsWith("dependabot/") }, tagFilter: function(e) { return E.a.gt(e.replace(/^v/, ""), "0.4.1") } }),
            me = (s("6762"), s("2fdb"), new N({ id: "rpc", name: "RPC", global: "RPC", repo: "discordjs/RPC", defaultTag: "master", branchFilter: function(e) { return "docs" !== e && !e.includes("greenkeeper") }, tagFilter: function(e) { return E.a.gte(e.replace(/^v/, ""), "3.0.0") } })),
            he = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "docs-navbar" } }, [s("container", [e._v("\n    View docs for\n\n    "), s("select", {
                    directives: [{ name: "model", rawName: "v-model", value: e.sourceChoice, expression: "sourceChoice" }],
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, function(e) { return e.selected }).map(function(e) { var t = "_value" in e ? e._value : e.value; return t });
                            e.sourceChoice = t.target.multiple ? s : s[0]
                        }
                    }
                }, e._l(e.sources, function(t) { return s("option", { key: t.id, domProps: { value: t.id } }, [e._v(e._s(t.name))]) }), 0), s("transition", { attrs: { name: "fade", mode: "out-in" }, on: { enter: e.updateTagChoice } }, [e.tags ? s("select", {
                    directives: [{ name: "model", rawName: "v-model", value: e.tagChoice, expression: "tagChoice" }],
                    key: e.source.id,
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, function(e) { return e.selected }).map(function(e) { var t = "_value" in e ? e._value : e.value; return t });
                            e.tagChoice = t.target.multiple ? s : s[0]
                        }
                    }
                }, e._l(e.tags, function(t) { return s("option", { key: t, domProps: { value: t } }, [e._v(e._s(t))]) }), 0) : s("loading")], 1), s("input", { directives: [{ name: "model", rawName: "v-model.trim", value: e.search, expression: "search", modifiers: { trim: !0 } }], attrs: { type: "search", placeholder: "Search" }, domProps: { value: e.search }, on: { keypress: function(t) { return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.goToSearch(t) }, input: function(t) { t.target.composing || (e.search = t.target.value.trim()) }, blur: function(t) { return e.$forceUpdate() } } }), s("router-link", { attrs: { to: { name: "docs-search" } } }, [s("em", { staticClass: "fa fa-search" })])], 1)], 1)
            },
            fe = [],
            ve = (s("8e6e"), s("456d"), s("386d"), s("b54a"), s("7618")),
            ge = (s("28a5"), s("4917"), s("0b16"));

        function ye(e) {
            if (window.hljs) window.hljs.highlightBlock(e);
            else var t = 0,
                s = setInterval(function() { window.hljs ? (window.hljs.highlightBlock(e), clearInterval(s)) : (t++, t >= 50 && clearInterval(s)) }, 100)
        }

        function be(e, t, s, a, r) { return Object(ge["resolve"])(e, "".concat(t, "/").concat(s).concat(a ? "/".concat(a) : "").concat(r ? "#L".concat(r) : "")) }

        function _e(e, t) {
            var s = e.match(/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i);
            s && (e = s[1]);
            var a = s ? s[2] : null,
                r = e.split(/(\.|#)/);
            return t.links[r[0]] ? { text: a || e, link: "object" === Object(ve["a"])(t.links[r[0]]) ? { name: t.links[r[0]].name, params: t.links[r[0]].params, query: { scrollTo: r[1] ? "".concat("." === r[1] ? "s-" : "").concat(r[2]) : void 0 } } : t.links[r[0]] } : e.match(/^https?:\/\//i) ? { text: a || e, link: e } : { text: a || e }
        }

        function ke(e, t, s, a) {
            if (!e) return null;
            var r, o = /\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi,
                n = "",
                c = 0;
            while (r = o.exec(e)) {
                n += e.slice(c, r.index);
                var i = _e(r[0], t);
                if (i.link) { var l = void 0; "object" === Object(ve["a"])(i.link) ? (i.link.params || (i.link.params = {}), i.link.params.source = a.params.source, i.link.params.tag = a.params.tag, l = s.resolve(i.link).href) : l = i.link, n += "[".concat(i.text, "](").concat(l, ")") } else n += i.text;
                c = r.index + r[0].length
            }
            return n ? (n += e.slice(c), n) : e
        }

        function we(e) { return "".concat("static" === e.scope ? "s-" : "").concat(e.name) }

        function Ce(e) { return "string" === typeof e ? e : e.join("-") }
        var Te = { switching: !1 };

        function Se(e, t) {
            var s = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), s.push.apply(s, a)
            }
            return s
        }

        function $e(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Se(s, !0).forEach(function(t) { Object(ie["a"])(e, t, s[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Se(s).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t)) })
            }
            return e
        }
        var je = {
                name: "docs-navbar",
                props: ["sources", "source"],
                data: function() { return { sourceChoice: this.source.id, tagChoice: null, tags: null, search: this.$route.query.q } },
                methods: {
                    loadTags: function() {
                        var e = this;
                        if (this.tags = this.source.tags, !this.tags) {
                            var t = this.source;
                            this.source.fetchTags().then(function(s) { e.source.id === t.id && (e.tags = s) })
                        }
                    },
                    updateTagChoice: function() { this.tags && (this.tagChoice = this.$route.params.tag || this.source.recentTag || this.source.defaultTag) },
                    goToSearch: function() { "docs-search" !== this.$route.name && this.$router.push({ name: "docs-search", query: { q: this.search } }) }
                },
                watch: { sourceChoice: function(e) { this.$route.params.source !== e && this.$router.push({ name: "docs-source", params: { source: e } }) }, tagChoice: function(e) { e && this.$route.params.tag !== e && (Te.switching = !0, this.$router.push({ name: this.$route.name, params: $e({}, this.$route.params, { tag: e }), query: this.$route.query })) }, source: function(e) { this.sourceChoice = e.id, this.tagChoice = null, this.loadTags() }, search: function(e) { this.$route.query.q ? this.$router.replace({ name: "docs-search", query: { q: e } }) : this.$router.push({ name: "docs-search", query: { q: e } }) }, $route: function(e) { this.tagChoice && e.params.tag && this.tagChoice !== e.params.tag && (this.tagChoice = e.params.tag) } },
                created: function() { this.loadTags() },
                mounted: function() { this.updateTagChoice() }
            },
            xe = je,
            Me = (s("596e"), Object(p["a"])(xe, he, fe, !1, null, null, null)),
            Pe = Me.exports,
            Oe = { name: "documentation", props: ["darkMode"], components: { DocsNavbar: Pe }, data: function() { var e; return { sources: (e = {}, Object(ie["a"])(e, F.id, F), Object(ie["a"])(e, de.id, de), Object(ie["a"])(e, pe.id, pe), Object(ie["a"])(e, me.id, me), e), source: F, tag: F.defaultTag } }, methods: { setSource: function(e) { this.source = this.sources[e] }, setTag: function(e) { this.tag = e, this.source.recentTag = e }, handleRoute: function(e) { e.params.source && this.sources[e.params.source] ? (this.setSource(e.params.source), e.params.tag ? (this.setTag(e.params.tag), e.params.file || e.params.class || e.params.typedef || "docs-search" === e.name || this.$router.replace({ name: "docs-file", params: { source: this.source.id, tag: this.tag, category: this.source.defaultFile.category, file: this.source.defaultFile.id } })) : this.$router.replace({ name: "docs-file", params: { source: this.source.id, tag: this.source.recentTag || this.source.defaultTag, category: this.source.defaultFile.category, file: this.source.defaultFile.id } })) : this.$router.replace({ name: "docs-file", params: { source: F.id, tag: F.defaultTag, category: F.defaultFile.category, file: F.defaultFile.id } }) }, toggleDarkMode: function() { this.$emit("toggleDarkMode") }, setRepository: function(e) { this.$emit("setRepository", e) } }, watch: { $route: function(e) { this.handleRoute(e) } }, created: function() { this.handleRoute(this.$route) } },
            De = Oe,
            Ee = Object(p["a"])(De, ne, ce, !1, null, null, null),
            Re = Ee.exports,
            qe = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("slide", { attrs: { id: "unknown-route" } }, [s("unknown-page", { attrs: { type: "route", darkMode: e.darkMode } })], 1)
            },
            Ae = [],
            Ne = { name: "unknown-route", props: ["darkMode"] },
            Le = Ne,
            Fe = (s("e283"), Object(p["a"])(Le, qe, Ae, !1, null, null, null)),
            ze = Fe.exports,
            Ue = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "docs-body" } }, [s("transition", { attrs: { name: "fade-resize", mode: "out-in" } }, [e.docs ? s("router-view", { attrs: { docs: e.docs, darkMode: e.darkMode }, on: { toggleDarkMode: e.toggleDarkMode, setRepository: e.setRepository } }) : s("slide", [e.error ? s("p", { attrs: { id: "docs-error" } }, [e._v("\n        Couldn't load the documentation data.\n        "), s("pre", [e._v(e._s(e.error.toString()))])]) : s("loading")], 1)], 1)], 1)
            },
            We = [],
            He = (s("55dd"), {
                name: "docs-loader",
                props: ["source", "tag", "darkMode"],
                data: function() { return { docs: null, error: null, loadingTag: null } },
                methods: {
                    loadDocs: function() {
                        var e = this;
                        if (this.loadingTag !== this.tag) {
                            this.docs = null, this.error = null;
                            var t = this.source,
                                s = this.tag;
                            this.loadingTag = this.tag, this.setRepository(this.source.repo), this.source.fetchDocs(this.tag).then(function(a) {
                                if (e.source === t && e.tag === s) {
                                    console.log("Loading", t, s), a.classes.sort(function(e, t) { return e.name.localeCompare(t.name) }), a.typedefs.sort(function(e, t) { return e.name.localeCompare(t.name) });
                                    var r = !0,
                                        o = !1,
                                        n = void 0;
                                    try {
                                        for (var c, i = a.classes[Symbol.iterator](); !(r = (c = i.next()).done); r = !0) {
                                            var l = c.value;
                                            l.props && l.props.sort(function(e, t) { return e.name.localeCompare(t.name) }), l.methods && l.methods.sort(function(e, t) { return e.name.localeCompare(t.name) }), l.events && l.events.sort(function(e, t) { return e.name.localeCompare(t.name) })
                                        }
                                    } catch (M) { o = !0, n = M } finally { try { r || null == i.return || i.return() } finally { if (o) throw n } }
                                    a.links = { string: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String", number: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number", boolean: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean", symbol: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol", void: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined", Object: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object", Function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function", function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function", Array: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array", Set: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set", Map: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map", Date: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date", RegExp: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp", Promise: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise", Error: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error", EventEmitter: "https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter", Timeout: "https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout", Buffer: "https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer", ReadableStream: "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable", ChildProcess: "https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess", Worker: "https://nodejs.org/api/worker_threads.html#worker_threads_class_worker", MessagePort: "https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport" }, a.externals = a.externals || [], a.classes = a.classes || [], a.typedefs = a.typedefs || [];
                                    var d = !0,
                                        u = !1,
                                        p = void 0;
                                    try {
                                        for (var m, h = a.externals[Symbol.iterator](); !(d = (m = h.next()).done); d = !0) {
                                            var f = m.value;
                                            a.links[f.name] = f.see[0].replace(/\{@link\s+(.+?)\s*\}/i, "$1")
                                        }
                                    } catch (M) { u = !0, p = M } finally { try { d || null == h.return || h.return() } finally { if (u) throw p } }
                                    var v = !0,
                                        g = !1,
                                        y = void 0;
                                    try {
                                        for (var b, _ = a.classes[Symbol.iterator](); !(v = (b = _.next()).done); v = !0) {
                                            var k = b.value;
                                            a.links[k.name] = { name: "docs-class", params: { class: k.name } }
                                        }
                                    } catch (M) { g = !0, y = M } finally { try { v || null == _.return || _.return() } finally { if (g) throw y } }
                                    var w = !0,
                                        C = !1,
                                        T = void 0;
                                    try {
                                        for (var S, $ = a.typedefs[Symbol.iterator](); !(w = (S = $.next()).done); w = !0) {
                                            var j = S.value;
                                            a.links[j.name] = { name: "docs-typedef", params: { typedef: j.name } }
                                        }
                                    } catch (M) { C = !0, T = M } finally { try { w || null == $.return || $.return() } finally { if (C) throw T } }
                                    if ("commando" === e.source.id && (a.links.Message = { name: "docs-class", params: { source: "main", tag: "master", class: "Message" } }), a.global = e.source.global, a.source = e.source.source, a.tag = e.tag, e.docs = a, e.loadingTag = null, console.log("Finished loading", t, s), Te.switching) {
                                        var x = e.$route;
                                        Te.switching = !1, "docs-class" === x.name ? a.classes.some(function(e) { return e.name === x.params.class }) || e.goHome() : "docs-typedef" === x.name ? a.typedefs.some(function(e) { return e.name === x.params.typedef }) || e.goHome() : "docs-file" === x.name && (a.custom[x.params.category] && a.custom[x.params.category].files[x.params.file] || e.goHome())
                                    }
                                }
                            }).catch(function(a) { console.error("Error while loading", t, s, a), e.error = a, e.loadingTag = null })
                        }
                    },
                    scroll: function(e) {
                        var t = this;
                        if (this.$route.query.scrollTo && this.docs) {
                            var s = function() {
                                    var e = document.getElementById("doc-for-".concat(t.$route.query.scrollTo));
                                    e || (e = document.getElementById("doc-for-e-".concat(t.$route.query.scrollTo))), e || (e = document.getElementById(t.$route.query.scrollTo)), e && (e.setAttribute("data-scrolled", !0), setTimeout(function() { return e.setAttribute("data-scrolled", !1) }, 1e3), setTimeout(function() { return e.removeAttribute("data-scrolled") }, 2e3), e.scrollIntoView(), window.scrollBy(0, -50))
                                },
                                a = e && (this.$route.name !== e.name || this.$route.params.class !== e.params.class || this.$route.params.typedef !== e.params.typedef || this.$route.params.file !== e.params.file);
                            a ? setTimeout(s, 400) : s()
                        }
                    },
                    goHome: function() { console.log("Redirecting to default file due to the current page not existing in the newly-loaded tag's docs."), this.$router.replace({ name: "docs-file", params: { source: this.source.id, tag: this.tag, category: this.source.defaultFile.category, file: this.source.defaultFile.id } }) },
                    toggleDarkMode: function() { this.$emit("toggleDarkMode") },
                    setRepository: function(e) { this.$emit("setRepository", e) }
                },
                watch: { source: function() { this.loadDocs() }, tag: function() { this.loadDocs() }, docs: function(e, t) { t || setTimeout(this.scroll, 700) }, $route: function(e, t) { this.scroll(t) } },
                created: function() { this.loadDocs() },
                mounted: function() { this.$nextTick(this.scroll) }
            }),
            Je = He,
            Be = (s("4e34"), Object(p["a"])(Je, Ue, We, !1, null, null, null)),
            Ge = Be.exports,
            Ie = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "docs-viewer" } }, [s("container", [s("sidebar", { attrs: { docs: e.docs, darkMode: e.darkMode }, on: { showPrivate: e.setShowPrivate, toggleDarkMode: e.toggleDarkMode } }), s("transition", { attrs: { name: "fade-slide", mode: "out-in" } }, [s("router-view", { key: e.key, attrs: { docs: e.docs, showPrivate: e.showPrivate, darkMode: e.darkMode } })], 1)], 1), s("div", { attrs: { id: "docs-meta" } }, [s("p", [e._v("\n      Documentation built at " + e._s(new Date(e.docs.meta.date).toUTCString()) + "."), s("br"), e._v("\n      Generator: v" + e._s(e.docs.meta.generator) + "   Format: " + e._s(e.docs.meta.format) + "\n    ")])]), s("div", { attrs: { id: "scroll-top", title: "Scroll to top" }, on: { click: e.scrollTop } }, [s("em", { staticClass: "fa fa-arrow-up" })])], 1)
            },
            Ke = [],
            Ze = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "docs-sidebar" } }, [s("div", { attrs: { id: "open-btn" }, on: { click: e.toggle } }, [s("em", { staticClass: "fa fa-bars" })]), s("div", { class: e.visible ? "open" : "closed", attrs: { id: "docs-sidebar-content" } }, [s("div", { attrs: { id: "close-btn" }, on: { click: e.toggle } }, [s("em", { staticClass: "fa fa-arrow-left", attrs: { "aria-hidden": "true" } })]), s("em", { staticClass: "fa toggle", class: e.showPrivate ? "fa-eye" : "fa-eye-slash", attrs: { id: "docs-visibility", title: e.togglePrivateLabel }, on: { click: e.togglePrivate } }), s("em", { staticClass: "fa toggle", class: e.darkMode ? "fa-moon-o" : "fa-sun-o", attrs: { id: "docs-brightness", title: e.toggleDarkModeLabel }, on: { click: e.toggleDarkMode } }), s("ul", [e._l(e.docs.custom, function(t, a) { return s("li", { key: a }, [e._v("\n        " + e._s(t.name) + "\n        "), s("ul", e._l(t.files, function(t, r) { return s("li", { key: r }, [s("router-link", { attrs: { to: { name: "docs-file", params: { category: a, file: r } } } }, [e._v("\n              " + e._s(t.name) + "\n            ")])], 1) }), 0)]) }), e.visibleClasses.length > 0 ? s("li", [e._v("\n        Classes\n        "), s("transition-group", { attrs: { name: "animated-list", tag: "ul" } }, e._l(e.visibleClasses, function(t) { return s("li", { key: t.name, staticClass: "animated-list-item" }, [s("router-link", { attrs: { exact: "", to: { name: "docs-class", params: { class: t.name } } } }, [e._v("\n              " + e._s(t.name) + "\n            ")])], 1) }), 0)], 1) : e._e(), e.visibleTypedefs.length > 0 ? s("li", [e._v("\n        Typedefs\n        "), s("ul", e._l(e.visibleTypedefs, function(t) { return s("li", { key: t.name }, [s("router-link", { attrs: { exact: "", to: { name: "docs-typedef", params: { typedef: t.name } } } }, [e._v("\n              " + e._s(t.name) + "\n            ")])], 1) }), 0)]) : e._e()], 2)])])
            },
            Ye = [],
            Ve = { name: "docs-sidebar", props: ["docs", "darkMode"], data: function() { return { visible: !1, showPrivate: !1 } }, computed: { visibleClasses: function() { return this.showPrivate ? this.docs.classes : this.docs.classes.filter(function(e) { return "private" !== e.access }) }, visibleTypedefs: function() { return this.showPrivate ? this.docs.typedefs : this.docs.typedefs.filter(function(e) { return "private" !== e.access }) }, togglePrivateLabel: function() { return "Private items are ".concat(this.showPrivate ? "shown" : "hidden", ". Click to toggle.") }, toggleDarkModeLabel: function() { return "The lights are ".concat(this.darkMode ? "off" : "on", ". Click to toggle.") } }, methods: { toggle: function() { this.visible = !this.visible }, togglePrivate: function() { this.showPrivate = !this.showPrivate }, toggleDarkMode: function() { this.$emit("toggleDarkMode") } }, watch: { showPrivate: function(e) { this.$emit("showPrivate", e) }, $route: function(e) { this.visible && (this.visible = !1), !e.query.scrollTo && (window.pageYOffset || document.documentElement.scrollTop) > 300 && window.scrollTo(0, 90) } } },
            Qe = Ve,
            Xe = (s("382f"), Object(p["a"])(Qe, Ze, Ye, !1, null, null, null)),
            et = Xe.exports,
            tt = {
                name: "docs-viewer",
                props: ["docs", "darkMode"],
                components: { Sidebar: et },
                data: function() { return { showPrivate: !1 } },
                computed: { key: function() { var e = this.$route.params; return e.file ? "".concat(e.category, "/").concat(e.file) : e.search ? "search" : e.class || e.typedef } },
                methods: { setShowPrivate: function(e) { this.showPrivate = e }, scrollTop: function() { window.scrollTo(0, 0) }, toggleDarkMode: function() { this.$emit("toggleDarkMode") } },
                mounted: function() {
                    this.$nextTick(function() {
                        var e, t, s = document.getElementById("scroll-top"),
                            a = function a() {
                                (window.pageYOffset || document.documentElement.scrollTop) > 300 && (clearTimeout(e), clearTimeout(t), s.style.display = "block", t = setTimeout(function() { s.style.opacity = "1" }, 20), window.removeEventListener("scroll", a), window.addEventListener("scroll", r))
                            },
                            r = function r() {
                                (window.pageYOffset || document.documentElement.scrollTop) < 300 && (clearTimeout(e), clearTimeout(t), s.style.opacity = "0", e = setTimeout(function() { s.style.display = "none" }, 1e3), window.removeEventListener("scroll", r), window.addEventListener("scroll", a))
                            };
                        window.addEventListener("scroll", a)
                    })
                }
            },
            st = tt,
            at = (s("f278"), Object(p["a"])(st, Ie, Ke, !1, null, null, null)),
            rt = at.exports,
            ot = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return e.file ? s("div", { staticClass: "docs-page", attrs: { id: "file-viewer" } }, [s("source-button", { attrs: { path: e.file.path, docs: e.docs } }), s("div", { domProps: { innerHTML: e._s(e.html) } })], 1) : s("unknown-page", { staticClass: "docs-page", attrs: { darkMode: e.darkMode } })
            },
            nt = [],
            ct = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "source-button" }, [s("a", { attrs: { href: "" + (e.meta ? e.sourceURL(e.meta.path, e.meta.file, e.meta.line) : e.sourceURL(e.path)), title: "Source" } }, [s("em", { staticClass: "fa fa-code" })])])
            },
            it = [],
            lt = { name: "source-button", props: ["meta", "path", "docs"], methods: { sourceURL: function(e, t, s) { return be(this.docs.source, this.docs.tag, e, t, s) } } },
            dt = lt,
            ut = (s("dbee"), Object(p["a"])(dt, ct, it, !1, null, null, null)),
            pt = ut.exports,
            mt = {
                name: "file-viewer",
                props: ["docs", "darkMode"],
                components: { SourceButton: pt },
                data: function() { return this.docs.custom[this.$route.params.category] ? { file: this.docs.custom[this.$route.params.category].files[this.$route.params.file] } : { file: null } },
                computed: { html: function() { var e; return e = "md" === this.file.type ? this.file.content : "# ".concat(this.file.name, "\n```").concat(this.file.type, "\n").concat(this.file.content, "\n```"), a["a"].filter("marked")(e) } },
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var t = !0,
                            s = !1,
                            a = void 0;
                        try {
                            for (var r, o = e.$el.querySelectorAll("pre code")[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                var n = r.value;
                                ye(n)
                            }
                        } catch (c) { s = !0, a = c } finally { try { t || null == o.return || o.return() } finally { if (s) throw a } }
                    })
                }
            },
            ht = mt,
            ft = (s("a703"), Object(p["a"])(ht, ot, nt, !1, null, null, null)),
            vt = ft.exports,
            gt = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return e.clarse ? s("div", { staticClass: "docs-page", attrs: { id: "class-viewer" } }, [s("source-button", { attrs: { meta: e.clarse.meta, docs: e.docs } }), s("h1", [e._v(e._s(e.clarse.name))]), s("p", { staticClass: "class-name-extra" }, [e.clarse.extends ? s("span", [e._v("extends\n      "), "string" === typeof e.clarse.extends[0] ? s("type-link", { attrs: { type: e.clarse.extends, docs: e.docs } }) : e._l(e.clarse.extends, function(t) { return s("types", { key: e.typeKey(t), attrs: { names: t, docs: e.docs } }) })], 2) : e._e(), e.clarse.implements ? s("span", [e._v(" implements\n      "), "string" === typeof e.clarse.implements[0] ? s("type-link", { attrs: { type: e.clarse.implements, docs: e.docs } }) : e._l(e.clarse.implements, function(t) { return s("types", { key: e.typeKey(t), attrs: { names: t, docs: e.docs } }) })], 2) : e._e()]), e.clarse.abstract ? s("span", { staticClass: "badge class-badge", attrs: { title: "This class is abstract, and may not be instantiated itself." } }, [e._v("Abstract")]) : e._e(), e.clarse.deprecated ? s("span", { staticClass: "badge class-badge warn", attrs: { title: "This class is deprecated, and may be removed in a future version." } }, [e._v("Deprecated")]) : e._e(), "private" === e.clarse.access ? s("span", { staticClass: "badge class-badge warn", attrs: { title: "This class is private, and may change or be removed at any time." } }, [e._v("Private")]) : e._e(), e.clarse.description ? s("p", { staticClass: "class-desc", domProps: { innerHTML: e._s(e.description) } }) : e._e(), e.clarse.see ? s("see", { attrs: { see: e.clarse.see, docs: e.docs } }) : e._e(), e.clarse.construct && (e.showPrivate || "private" !== e.clarse.construct.access) ? s("div", { attrs: { id: "class-constructor" } }, [s("h2", [e._v("Constructor")]), s("pre", [s("code", { staticClass: "js" }, [e._v("new " + e._s(e.docs.global) + "." + e._s(e.clarse.name) + "("), e._l(e.constructorParams, function(t) { return s("span", { key: t.name, staticClass: "constructor-param" }, [e._v(e._s(t.name))]) }), e._v(");")], 2)]), s("param-table", { attrs: { params: e.clarse.construct.params, docs: e.docs } })], 1) : e._e(), s("overview", { attrs: { properties: e.properties, methods: e.methods, events: e.clarse.events } }), e.properties && e.properties.length > 0 ? s("h2", [e._v("Properties")]) : e._e(), e._l(e.properties, function(t) { return s("property", { key: e.scopedName(t), attrs: { prop: t, docs: e.docs } }) }), e.methods && e.methods.length > 0 ? s("h2", [e._v("Methods")]) : e._e(), e._l(e.methods, function(t) { return s("method", { key: e.scopedName(t), attrs: { method: t, docs: e.docs } }) }), e.clarse.events && e.clarse.events.length > 0 ? s("h2", [e._v("Events")]) : e._e(), e._l(e.clarse.events, function(t) { return s("event", { key: "e-" + t.name, attrs: { event: t, docs: e.docs } }) })], 2) : s("unknown-page", { staticClass: "docs-page", attrs: { darkMode: e.darkMode } })
            },
            yt = [],
            bt = (s("7514"), function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("span", { staticClass: "docs-type" }, [e._v("\n  " + e._s(e.nullable ? "?" : "") + e._s(e.variable ? "..." : "")), e._l(e.names, function(t) { return s("type-link", { key: e.typeKey(t), attrs: { type: t, docs: e.docs } }) })], 2)
            }),
            _t = [],
            kt = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("span", { staticClass: "docs-type-link" }, [e.link ? "object" === typeof e.link ? s("router-link", { attrs: { to: e.link } }, [e._v(e._s(e.typeName))]) : s("a", { attrs: { href: e.link } }, [e._v(e._s(e.typeName))]) : s("span", { attrs: { title: "*" === e.type[0] ? "Any type" : null } }, [e._v(e._s(e.typeName))]), e.type[1] ? s("span", [e._v(e._s(e.type[1]))]) : e._e()], 1)
            },
            wt = [],
            Ct = { name: "type-link", props: ["docs", "type"], computed: { typeName: function() { return "function" === this.type[0] ? "Function" : this.type[0] }, link: function() { return this.docs.links[this.type[0]] ? this.docs.links[this.type[0]] : null } } },
            Tt = Ct,
            St = Object(p["a"])(Tt, kt, wt, !1, null, null, null),
            $t = St.exports,
            jt = { name: "types", props: ["names", "variable", "nullable", "docs"], components: { TypeLink: $t }, methods: { typeKey: Ce } },
            xt = jt,
            Mt = (s("abe3"), Object(p["a"])(xt, bt, _t, !1, null, null, null)),
            Pt = Mt.exports,
            Ot = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "param-table-wrapper" }, [s("table", { staticClass: "param-table" }, [s("thead", [s("tr", [s("th", [e._v("Parameter")]), s("th", [e._v("Type")]), e.hasOptional ? s("th", [e._v("Optional")]) : e._e(), e.hasOptional ? s("th", [e._v("Default")]) : e._e(), s("th", [e._v("Description")])])]), s("tbody", e._l(e.params, function(t) { return s("tr", { key: t.name }, [s("td", [e._v(e._s(t.name))]), s("td", e._l(t.type, function(a) { return s("types", { key: e.typeKey(a), attrs: { names: a, variable: t.variable, nullable: t.nullable, docs: e.docs } }) }), 1), e.hasOptional ? s("td", [t.optional ? s("em", { staticClass: "fa fa-check" }) : e._e()]) : e._e(), e.hasOptional ? s("td", [t.optional && "undefined" === typeof t.default ? s("em", [e._v("none")]) : s("span", { domProps: { innerHTML: e._s(e.paramDefault(t)) } })]) : e._e(), s("td", { domProps: { innerHTML: e._s(e.paramDescription(t)) } })]) }), 0)])])
            },
            Dt = [],
            Et = { name: "param-table", props: ["params", "docs"], components: { Types: Pt }, computed: { hasOptional: function() { return this.params.some(function(e) { return e.optional }) } }, methods: { typeKey: Ce, paramDescription: function(e) { return a["a"].filter("marked")(ke(e.description, this.docs, this.$router, this.$route)) }, paramDefault: function(e) { return e.optional ? "<code>".concat(e.default, "</code>") : "" } } },
            Rt = Et,
            qt = (s("944c"), Object(p["a"])(Rt, Ot, Dt, !1, null, null, null)),
            At = qt.exports,
            Nt = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { attrs: { id: "class-overview" } }, [e.properties && e.properties.length > 0 ? s("div", { staticClass: "col" }, [s("div", { staticClass: "title" }, [e._v("Properties")]), s("transition-group", { attrs: { name: "animated-list", tag: "ul" } }, e._l(e.properties, function(t) { return s("li", { key: e.scopedName(t), staticClass: "animated-list-item", on: { click: function(s) { e.scroll(e.scopedName(t)) } } }, [s("router-link", { attrs: { to: { name: "docs-class", query: { scrollTo: e.scopedName(t) } } } }, [e._v("\n          " + e._s(t.name) + "\n          "), "static" === t.scope ? s("span", { staticClass: "small-badge" }, [e._v("S")]) : e._e(), t.abstract ? s("span", { staticClass: "small-badge" }, [e._v("A")]) : e._e(), t.deprecated ? s("span", { staticClass: "small-badge warn" }, [e._v("D")]) : e._e(), "private" === t.access ? s("span", { staticClass: "small-badge warn" }, [e._v("P")]) : e._e()])], 1) }), 0)], 1) : e._e(), e.methods && e.methods.length > 0 ? s("div", { staticClass: "col" }, [s("div", { staticClass: "title" }, [e._v("Methods")]), s("transition-group", { attrs: { name: "animated-list", tag: "ul" } }, e._l(e.methods, function(t) { return s("li", { key: e.scopedName(t), staticClass: "animated-list-item", on: { click: function(s) { e.scroll(e.scopedName(t)) } } }, [s("router-link", { attrs: { to: { name: "docs-class", query: { scrollTo: e.scopedName(t) } } } }, [e._v("\n          " + e._s(t.name) + "\n          "), "static" === t.scope ? s("span", { staticClass: "small-badge" }, [e._v("S")]) : e._e(), t.abstract ? s("span", { staticClass: "small-badge" }, [e._v("A")]) : e._e(), t.deprecated ? s("span", { staticClass: "small-badge warn" }, [e._v("D")]) : e._e(), "private" === t.access ? s("span", { staticClass: "small-badge warn" }, [e._v("P")]) : e._e()])], 1) }), 0)], 1) : e._e(), e.events && e.events.length > 0 ? s("div", { staticClass: "col" }, [s("div", { staticClass: "title" }, [e._v("Events")]), s("ul", e._l(e.events, function(t) { return s("li", { key: t.name, on: { click: function(s) { return e.scroll("e-" + t.name) } } }, [s("router-link", { attrs: { to: { name: "docs-class", query: { scrollTo: "e-" + t.name } } } }, [e._v("\n          " + e._s(t.name) + "\n          "), t.deprecated ? s("span", { staticClass: "small-badge warn" }, [e._v("D")]) : e._e()])], 1) }), 0)]) : e._e()])
            },
            Lt = [],
            Ft = {
                name: "class-overview",
                props: ["properties", "methods", "events"],
                methods: {
                    scopedName: we,
                    scroll: function(e) {
                        var t = document.getElementById("doc-for-".concat(e));
                        t.setAttribute("data-scrolled", !0), setTimeout(function() { return t.setAttribute("data-scrolled", !1) }, 1e3), setTimeout(function() { return t.removeAttribute("data-scrolled") }, 2e3), t.scrollIntoView(), window.scrollBy(0, -50)
                    }
                }
            },
            zt = Ft,
            Ut = (s("ac06"), Object(p["a"])(zt, Nt, Lt, !1, null, null, null)),
            Wt = Ut.exports,
            Ht = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "class-prop class-item", attrs: { id: "doc-for-" + e.scrollTo } }, [s("source-button", { attrs: { meta: e.prop.meta, docs: e.docs } }), s("h3", [s("router-link", { attrs: { to: { name: "docs-class", query: { scrollTo: e.scrollTo } } } }, [e._v("." + e._s(e.prop.name))])], 1), "static" === e.prop.scope ? s("span", { staticClass: "badge", attrs: { title: "This property is on the class constructor function, not instances." } }, [e._v("Static")]) : e._e(), e.prop.readonly ? s("span", { staticClass: "badge", attrs: { title: "This property cannot be modified." } }, [e._v("Read-only")]) : e._e(), e.prop.deprecated ? s("span", { staticClass: "badge warn", attrs: { title: "This property is deprecated, and may be removed in a future version." } }, [e._v("Deprecated")]) : e._e(), "private" === e.prop.access ? s("span", { staticClass: "badge warn", attrs: { title: "This property is private, and may change or be removed at any time." } }, [e._v("Private")]) : e._e(), s("div", { staticClass: "class-item-details" }, [s("p", { domProps: { innerHTML: e._s(e.description) } }), e.prop.props && e.prop.props.length > 0 ? s("param-table", { attrs: { params: e.prop.props, docs: e.docs } }) : e._e(), s("div", { staticClass: "prop-type" }, [e._v("\n      Type:\n      "), e._l(e.prop.type, function(t) { return s("types", { key: e.typeKey(t), attrs: { names: t, nullable: e.prop.nullable, docs: e.docs } }) })], 2), e.prop.default ? s("div", { staticClass: "prop-default" }, [e._v("\n      Default: "), s("code", [e._v(e._s(e.prop.default))])]) : e._e(), e.prop.see ? s("see", { attrs: { see: e.prop.see, docs: e.docs } }) : e._e()], 1)], 1)
            },
            Jt = [],
            Bt = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("p", { staticClass: "docs-see" }, [e._v("\n  See also:\n\n  "), e.see.length > 1 ? s("ul", e._l(e.parsed, function(t) { return s("li", { key: t.text }, ["object" === typeof t.link ? s("router-link", { staticClass: "docs-type", attrs: { to: t.link } }, [e._v(e._s(t.text))]) : "string" === typeof t.link ? s("a", { attrs: { href: t.link } }, [e._v(e._s(t.text))]) : s("span", [e._v(e._s(t.text))])], 1) }), 0) : s("span", ["object" === typeof e.parsed[0].link ? s("router-link", { staticClass: "docs-type", attrs: { to: e.parsed[0].link } }, [e._v(e._s(e.parsed[0].text))]) : "string" === typeof e.parsed[0].link ? s("a", { attrs: { href: e.parsed[0].link } }, [e._v(e._s(e.parsed[0].text))]) : s("span", [e._v(e._s(e.parsed[0].text))])], 1)])
            },
            Gt = [],
            It = { name: "docs-see", props: ["see", "docs"], computed: { parsed: function() { for (var e = new Array(this.see.length), t = 0; t < this.see.length; t++) e[t] = _e(this.see[t], this.docs); return e } } },
            Kt = It,
            Zt = (s("3149"), Object(p["a"])(Kt, Bt, Gt, !1, null, null, null)),
            Yt = Zt.exports,
            Vt = { name: "class-property", props: ["prop", "docs"], components: { Types: Pt, ParamTable: At, SourceButton: pt, See: Yt }, computed: { description: function() { return a["a"].filter("marked")(ke(this.prop.description, this.docs, this.$router, this.$route)) }, scrollTo: function() { return "".concat("static" === this.prop.scope ? "s-" : "").concat(this.prop.name) } }, methods: { typeKey: Ce } },
            Qt = Vt,
            Xt = (s("defc"), Object(p["a"])(Qt, Ht, Jt, !1, null, null, null)),
            es = Xt.exports,
            ts = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "class-method class-item", attrs: { id: "doc-for-" + e.scrollTo } }, [s("source-button", { attrs: { meta: e.method.meta, docs: e.docs } }), s("h3", [s("router-link", { attrs: { to: { name: "docs-class", query: { scrollTo: e.scrollTo } } } }, [e._v("\n        ." + e._s(e.method.name) + "("), e._l(e.params, function(t) { return s("span", { key: t.name, staticClass: "method-param", class: t.optional ? "optional" : "" }, [e._v(e._s(t.variable ? "..." : "") + e._s(t.name))]) }), e._v(")\n      ")], 2)], 1), "static" === e.method.scope ? s("span", { staticClass: "badge", attrs: { title: "This method is on the class constructor function, not instances." } }, [e._v("Static")]) : e._e(), e.method.abstract ? s("span", { staticClass: "badge", attrs: { title: "This method is abstract, and must be implemented in a child class." } }, [e._v("Abstract")]) : e._e(), e.method.deprecated ? s("span", { staticClass: "badge warn", attrs: { title: "This method is deprecated, and may be removed in a future version." } }, [e._v("Deprecated")]) : e._e(), "private" === e.method.access ? s("span", { staticClass: "badge warn", attrs: { title: "This method is private, and may change or be removed at any time." } }, [e._v("Private")]) : e._e(), s("div", { staticClass: "class-item-details" }, [s("p", { domProps: { innerHTML: e._s(e.description) } }), e.method.params ? s("param-table", { attrs: { params: e.method.params, docs: e.docs } }) : e._e(), s("div", { staticClass: "method-return" }, [e._v("\n        Returns:\n        "), e.method.returns ? s("span", e._l(e.method.returns.types || e.method.returns, function(t) { return s("types", { key: e.typeKey(t), attrs: { names: t, variable: e.method.returns.variable, nullable: e.method.returns.nullable, docs: e.docs } }) }), 1) : s("type-link", { staticClass: "docs-type", attrs: { type: ["void"], docs: e.docs } }), e.method.returns && e.method.returns.description ? s("p", { domProps: { innerHTML: e._s(e.returnDescription) } }) : e._e()], 1), e.method.throws ? s("div", { staticClass: "method-throws" }, [e._v("\n        Throws:\n        "), e._l(e.method.throws, function(t) { return s("types", { key: t, attrs: { names: t, docs: e.docs } }) })], 2) : e._e(), e.emits ? s("div", { staticClass: "method-emits" }, [e._v("\n        Emits:\n        "), e.emits.length > 1 ? s("ul", e._l(e.emits, function(t) { return s("li", { key: t.text }, [s("router-link", { staticClass: "docs-type", attrs: { to: t.link } }, [e._v(e._s(t.text))])], 1) }), 0) : s("router-link", { staticClass: "docs-type", attrs: { to: e.emits[0].link } }, [e._v(e._s(e.emits[0].text))])], 1) : e._e(), e.method.examples ? s("div", { staticClass: "method-examples" }, [e._v("\n        Examples:\n        "), e._l(e.method.examples, function(t) { return s("pre", { key: t }, [s("code", { staticClass: "javascript" }, [e._v(e._s(t))])]) })], 2) : e._e(), e.method.see ? s("see", { attrs: { see: e.method.see, docs: e.docs } }) : e._e()], 1)], 1)
            },
            ss = [],
            as = { name: "class-method", props: ["method", "docs"], components: { Types: Pt, TypeLink: $t, ParamTable: At, SourceButton: pt, See: Yt }, computed: { params: function() { return this.method.params ? this.method.params.filter(function(e) { return !e.name.includes(".") }) : null }, description: function() { return a["a"].filter("marked")(ke(this.method.description, this.docs, this.$router, this.$route)) }, returnDescription: function() { return a["a"].filter("marked")(ke(this.method.returns.description, this.docs, this.$router, this.$route)) }, emits: function() { var e = this; return this.method.emits ? this.method.emits.map(function(t) { return _e(t.replace(/:event/i, ""), e.docs) }) : null }, scrollTo: function() { return "".concat("static" === this.method.scope ? "s-" : "").concat(this.method.name) } }, methods: { typeKey: Ce } },
            rs = as,
            os = (s("e386"), Object(p["a"])(rs, ts, ss, !1, null, null, null)),
            ns = os.exports,
            cs = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "class-event class-item", attrs: { id: "doc-for-e-" + e.event.name } }, [s("source-button", { attrs: { meta: e.event.meta, docs: e.docs } }), s("h3", [s("router-link", { attrs: { to: { name: "docs-class", query: { scrollTo: "e-" + e.event.name } } } }, [e._v(e._s(e.event.name))])], 1), e.event.deprecated ? s("span", { staticClass: "badge warn", attrs: { title: "This event is deprecated, and may be removed in a future version." } }, [e._v("Deprecated")]) : e._e(), s("div", { staticClass: "class-item-details" }, [s("p", { domProps: { innerHTML: e._s(e.description) } }), e.event.params && e.event.params.length > 0 ? s("param-table", { attrs: { params: e.event.params, docs: e.docs } }) : e._e(), e.event.see ? s("see", { attrs: { see: e.event.see, docs: e.docs } }) : e._e()], 1)], 1)
            },
            is = [],
            ls = { name: "class-event", props: ["event", "docs"], components: { ParamTable: At, SourceButton: pt, See: Yt }, computed: { description: function() { return a["a"].filter("marked")(ke(this.event.description, this.docs, this.$router, this.$route)) } } },
            ds = ls,
            us = (s("7fe0"), Object(p["a"])(ds, cs, is, !1, null, null, null)),
            ps = us.exports,
            ms = {
                name: "class-viewer",
                props: ["docs", "showPrivate", "darkMode"],
                components: { Types: Pt, TypeLink: $t, ParamTable: At, Overview: Wt, Property: es, Method: ns, Event: ps, SourceButton: pt, See: Yt },
                data: function() { var e = this; return { clarse: this.docs.classes.find(function(t) { return t.name === e.$route.params.class }) } },
                computed: { constructorParams: function() { return this.clarse.construct && this.clarse.construct.params ? this.clarse.construct.params.filter(function(e) { return !e.name.includes(".") }) : null }, properties: function() { return this.clarse.props ? (e = this.showPrivate ? this.clarse.props : this.clarse.props.filter(function(e) { return "private" !== e.access }), e.sort(function(e, t) { return "".concat("static" === e.scope ? "ZZZ" : "").concat(e.name).localeCompare("".concat("static" === t.scope ? "ZZZ" : "").concat(t.name)) })) : null; var e }, methods: function() { return this.clarse.methods ? (e = this.showPrivate ? this.clarse.methods : this.clarse.methods.filter(function(e) { return "private" !== e.access }), e.sort(function(e, t) { return "".concat("static" === e.scope ? "ZZZ" : "").concat(e.name).localeCompare("".concat("static" === t.scope ? "ZZZ" : "").concat(t.name)) })) : null; var e }, description: function() { return a["a"].filter("marked")(ke(this.clarse.description, this.docs, this.$router, this.$route)) } },
                methods: { scopedName: we, typeKey: Ce },
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var t = !0,
                            s = !1,
                            a = void 0;
                        try {
                            for (var r, o = e.$el.querySelectorAll("pre code")[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                var n = r.value;
                                ye(n)
                            }
                        } catch (c) { s = !0, a = c } finally { try { t || null == o.return || o.return() } finally { if (s) throw a } }
                    })
                }
            },
            hs = ms,
            fs = (s("4baa"), Object(p["a"])(hs, gt, yt, !1, null, null, null)),
            vs = fs.exports,
            gs = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return e.typedef ? s("div", { staticClass: "docs-page", attrs: { id: "typedef-viewer" } }, [s("source-button", { attrs: { meta: e.typedef.meta, docs: e.docs } }), s("h1", [e._v(e._s(e.typedef.name))]), e.typedef.deprecated ? s("span", { staticClass: "badge warn", attrs: { title: "This typedef is deprecated, and may be removed in a future version." } }, [e._v("Deprecated")]) : e._e(), e.typedef.description ? s("p", { staticClass: "typedef-desc", domProps: { innerHTML: e._s(e.description) } }) : e._e(), e.typedef.see ? s("see", { attrs: { see: e.typedef.see, docs: e.docs } }) : e._e(), s("h2", [e._v("Types")]), s("ul", { attrs: { id: "typedef-types" } }, e._l(e.typedef.type, function(t) { return s("li", { key: e.typeKey(t) }, [s("types", { attrs: { names: t, docs: e.docs } })], 1) }), 0), e.typedef.props && e.typedef.props.length > 0 ? s("div", { attrs: { id: "typedef-props" } }, [s("h2", [e._v("Properties")]), s("param-table", { attrs: { params: e.typedef.props, docs: e.docs } })], 1) : e._e(), e.typedef.params && e.typedef.params.length > 0 ? s("div", { attrs: { id: "typedef-params" } }, [s("h2", [e._v("Parameters")]), s("param-table", { attrs: { params: e.typedef.params, docs: e.docs } })], 1) : e._e(), e.typedef.returns ? s("div", { attrs: { id: "typedef-returns" } }, [s("h2", [e._v("Returns")]), s("p", { attrs: { id: "typedef-returns-types" } }, e._l(e.typedef.returns.types || e.typedef.returns, function(t) { return s("types", { key: e.typeKey(t), attrs: { names: t, variable: e.typedef.returns.variable, nullable: e.typedef.returns.nullable, docs: e.docs } }) }), 1), e.typedef.returns.description ? s("p", { domProps: { innerHTML: e._s(e.returnsDescription) } }) : e._e()]) : e._e()], 1) : s("unknown-page", { staticClass: "docs-page", attrs: { darkMode: e.darkMode } })
            },
            ys = [],
            bs = {
                name: "typedef-viewer",
                props: ["docs", "darkMode"],
                components: { Types: Pt, ParamTable: At, SourceButton: pt, See: Yt },
                data: function() { var e = this; return { typedef: this.docs.typedefs.find(function(t) { return t.name === e.$route.params.typedef }) } },
                computed: { description: function() { return a["a"].filter("marked")(ke(this.typedef.description, this.docs, this.$router, this.$route)) }, returnsDescription: function() { var e = this.typedef.returns; return e ? a["a"].filter("marked")(ke(e.description, this.docs, this.$router, this.$route)) : "" } },
                methods: { typeKey: Ce },
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var t = !0,
                            s = !1,
                            a = void 0;
                        try {
                            for (var r, o = e.$el.querySelectorAll("pre code")[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                var n = r.value;
                                ye(n)
                            }
                        } catch (c) { s = !0, a = c } finally { try { t || null == o.return || o.return() } finally { if (s) throw a } }
                    })
                }
            },
            _s = bs,
            ks = (s("0455"), Object(p["a"])(_s, gs, ys, !1, null, null, null)),
            ws = ks.exports,
            Cs = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "docs-page", attrs: { id: "docs-search" } }, [s("em", { class: "fa fa-bar-chart " + (e.showScores ? "" : "disabled"), attrs: { id: "show-scores", title: e.toggleScoresLabel }, on: { click: e.toggleScores } }), s("h1", [e._v("Search")]), s("input", { directives: [{ name: "model", rawName: "v-model.trim", value: e.search, expression: "search", modifiers: { trim: !0 } }], attrs: { type: "search" }, domProps: { value: e.search }, on: { input: function(t) { t.target.composing || (e.search = t.target.value.trim()) }, blur: function(t) { return e.$forceUpdate() } } }), s("div", { attrs: { id: "toggles" } }, [s("label", [s("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.toggles["classes"], expression: "toggles['classes']" }],
                    attrs: { type: "checkbox" },
                    domProps: { checked: Array.isArray(e.toggles["classes"]) ? e._i(e.toggles["classes"], null) > -1 : e.toggles["classes"] },
                    on: {
                        change: function(t) {
                            var s = e.toggles["classes"],
                                a = t.target,
                                r = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = e._i(s, o);
                                a.checked ? n < 0 && e.$set(e.toggles, "classes", s.concat([o])) : n > -1 && e.$set(e.toggles, "classes", s.slice(0, n).concat(s.slice(n + 1)))
                            } else e.$set(e.toggles, "classes", r)
                        }
                    }
                }), e._v(" Classes")]), s("label", [s("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.toggles["props"], expression: "toggles['props']" }],
                    attrs: { type: "checkbox" },
                    domProps: { checked: Array.isArray(e.toggles["props"]) ? e._i(e.toggles["props"], null) > -1 : e.toggles["props"] },
                    on: {
                        change: function(t) {
                            var s = e.toggles["props"],
                                a = t.target,
                                r = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = e._i(s, o);
                                a.checked ? n < 0 && e.$set(e.toggles, "props", s.concat([o])) : n > -1 && e.$set(e.toggles, "props", s.slice(0, n).concat(s.slice(n + 1)))
                            } else e.$set(e.toggles, "props", r)
                        }
                    }
                }), e._v(" Properties")]), s("label", [s("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.toggles["methods"], expression: "toggles['methods']" }],
                    attrs: { type: "checkbox" },
                    domProps: { checked: Array.isArray(e.toggles["methods"]) ? e._i(e.toggles["methods"], null) > -1 : e.toggles["methods"] },
                    on: {
                        change: function(t) {
                            var s = e.toggles["methods"],
                                a = t.target,
                                r = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = e._i(s, o);
                                a.checked ? n < 0 && e.$set(e.toggles, "methods", s.concat([o])) : n > -1 && e.$set(e.toggles, "methods", s.slice(0, n).concat(s.slice(n + 1)))
                            } else e.$set(e.toggles, "methods", r)
                        }
                    }
                }), e._v(" Methods")]), s("label", [s("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.toggles["events"], expression: "toggles['events']" }],
                    attrs: { type: "checkbox" },
                    domProps: { checked: Array.isArray(e.toggles["events"]) ? e._i(e.toggles["events"], null) > -1 : e.toggles["events"] },
                    on: {
                        change: function(t) {
                            var s = e.toggles["events"],
                                a = t.target,
                                r = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = e._i(s, o);
                                a.checked ? n < 0 && e.$set(e.toggles, "events", s.concat([o])) : n > -1 && e.$set(e.toggles, "events", s.slice(0, n).concat(s.slice(n + 1)))
                            } else e.$set(e.toggles, "events", r)
                        }
                    }
                }), e._v(" Events")]), s("label", [s("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.toggles["typedefs"], expression: "toggles['typedefs']" }],
                    attrs: { type: "checkbox" },
                    domProps: { checked: Array.isArray(e.toggles["typedefs"]) ? e._i(e.toggles["typedefs"], null) > -1 : e.toggles["typedefs"] },
                    on: {
                        change: function(t) {
                            var s = e.toggles["typedefs"],
                                a = t.target,
                                r = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = e._i(s, o);
                                a.checked ? n < 0 && e.$set(e.toggles, "typedefs", s.concat([o])) : n > -1 && e.$set(e.toggles, "typedefs", s.slice(0, n).concat(s.slice(n + 1)))
                            } else e.$set(e.toggles, "typedefs", r)
                        }
                    }
                }), e._v(" Typedefs")])]), s("transition", { attrs: { name: "fade", mode: "out-in" } }, [e.search && e.search.length >= 2 ? s("div", [s("transition", { attrs: { name: "fade", mode: "out-in" } }, [e.results.length ? s("transition-group", { attrs: { name: "fade" } }, [e.fullMatches.length ? s("div", { key: "fullMatches", class: { "results-separator": e.fullMatches.length && e.partialMatches.length } }, [s("h2", [e._v('Results for "' + e._s(e.search) + '"')]), s("search-results", { attrs: { results: e.fullMatches, showScores: e.showScores, searchTerm: e.search } })], 1) : e._e(), e.partialMatches.length ? s("div", { key: "partialMatches" }, [s("h2", [e._v('Similar results for "' + e._s(e.search) + '"')]), s("search-results", { attrs: { results: e.partialMatches, showScores: e.showScores, searchTerm: e.search } })], 1) : e._e()]) : s("p", [e._v("No results.")])], 1)], 1) : s("p", { key: "short" }, [e._v("Your search query must be at least two characters.")])])], 1)
            },
            Ts = [],
            Ss = s("ffe7"),
            $s = s.n(Ss),
            js = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("transition-group", { staticClass: "results-list", attrs: { name: "animated-list", tag: "ul" } }, e._l(e.results, function(t) { return s("li", { key: t.item.key || t.item.fullName || t.item.name, staticClass: "animated-list-item" }, [e.showScores ? s("span", { staticClass: "score" }, [e._v(e._s(Math.round(100 * (1 - t.score))) + "%")]) : e._e(), s("router-link", { attrs: { to: t.item.route } }, [s("span", { staticClass: "badge", attrs: { title: t.item.type } }, [e._v(e._s(t.item.type[0]))]), s("span", { domProps: { innerHTML: e._s(e.highlightName(t.item.fullName || t.item.name)) } }), e._v(e._s("Method" === t.item.type ? "()" : "") + "\n    ")])], 1) }), 0)
            },
            xs = [],
            Ms = (s("3b2b"), { props: ["results", "showScores", "searchTerm"], methods: { highlightName: function(e) { return e.replace(this.searchRegex, function(e) { return "<strong>".concat(e, "</strong>") }) } }, computed: { searchRegex: function() { return new RegExp(this.searchTerm, "ig") } } }),
            Ps = Ms,
            Os = (s("b583"), Object(p["a"])(Ps, js, xs, !1, null, null, null)),
            Ds = Os.exports,
            Es = {
                name: "docs-search",
                props: ["docs", "showPrivate"],
                components: { SearchResults: Ds },
                data: function() { var e = { classes: !0, props: !0, methods: !0, events: !0, typedefs: !0 }; return { toggles: e, search: this.$route.query.q, showScores: !1, fuse: this.buildFuse(e) } },
                computed: {
                    results: function() {
                        var e = this.fuse.search(this.search),
                            t = !0,
                            s = !1,
                            a = void 0;
                        try { for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) { var n = r.value; "Class" !== n.item.type ? "Property" !== n.item.type && "Method" !== n.item.type ? "Event" !== n.item.type ? "Typedef" !== n.item.type || (n.item.route = { name: "docs-typedef", params: { typedef: n.item.name } }) : (n.item.key = "e-".concat(n.item.parent, "#").concat(n.item.name), n.item.fullName = Rs(n.item, n.item.parent), n.item.route = { name: "docs-class", params: { class: n.item.parent }, query: { scrollTo: "e-".concat(n.item.name) } }) : (n.item.fullName = Rs(n.item, n.item.parent), n.item.route = { name: "docs-class", params: { class: n.item.parent }, query: { scrollTo: we(n.item) } }) : n.item.route = { name: "docs-class", params: { class: n.item.name } } } } catch (v) { s = !0, a = v } finally { try { t || null == o.return || o.return() } finally { if (s) throw a } }
                        var c = 0;
                        while (c < e.length) {
                            var i = e[c];
                            if ("Property" === i.item.type || "Method" === i.item.type || "Event" === i.item.type) {
                                var l = [],
                                    d = !0,
                                    u = !1,
                                    p = void 0;
                                try {
                                    for (var m, h = i.matches[Symbol.iterator](); !(d = (m = h.next()).done); d = !0) {
                                        var f = m.value;
                                        l.push(f.key)
                                    }
                                } catch (v) { u = !0, p = v } finally { try { d || null == h.return || h.return() } finally { if (u) throw p } }
                                if (2 === l.length && l.includes("parent") && l.includes("fullName")) { e.splice(c, 1); continue }
                            }
                            c++
                        }
                        return e
                    },
                    fullMatches: function() { return this.results.filter(function(e) { return 100 === Math.round(100 * (1 - e.score)) }) },
                    partialMatches: function() { return this.results.filter(function(e) { return 100 !== Math.round(100 * (1 - e.score)) }) },
                    toggleScoresLabel: function() { return "Scores are ".concat(this.showScores ? "shown" : "hidden", ". Click to toggle.") }
                },
                methods: {
                    toggleScores: function() { this.showScores = !this.showScores },
                    buildFuse: function(e) {
                        var t = [],
                            s = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var o, n = this.docs.classes[Symbol.iterator](); !(s = (o = n.next()).done); s = !0) {
                                var c = o.value;
                                if (this.showPrivate || "private" !== c.access) {
                                    if (e.classes && t.push({ type: "Class", parent: c.name, name: c.name, fullName: c.name, scope: c.scope, access: c.access, route: null }), c.props && e.props) {
                                        var i = !0,
                                            l = !1,
                                            d = void 0;
                                        try {
                                            for (var u, p = c.props[Symbol.iterator](); !(i = (u = p.next()).done); i = !0) {
                                                var m = u.value;
                                                (this.showPrivate || "private" !== m.access) && t.push({ type: "Property", parent: c.name, name: m.name, fullName: Rs(m, c.name), scope: m.scope, access: m.access, route: null })
                                            }
                                        } catch (D) { l = !0, d = D } finally { try { i || null == p.return || p.return() } finally { if (l) throw d } }
                                    }
                                    if (c.methods && e.methods) {
                                        var h = !0,
                                            f = !1,
                                            v = void 0;
                                        try {
                                            for (var g, y = c.methods[Symbol.iterator](); !(h = (g = y.next()).done); h = !0) {
                                                var b = g.value;
                                                (this.showPrivate || "private" !== b.access) && t.push({ type: "Method", parent: c.name, name: b.name, fullName: Rs(b, c.name), scope: b.scope, access: b.access, route: null })
                                            }
                                        } catch (D) { f = !0, v = D } finally { try { h || null == y.return || y.return() } finally { if (f) throw v } }
                                    }
                                    if (c.events && e.events) {
                                        var _ = !0,
                                            k = !1,
                                            w = void 0;
                                        try {
                                            for (var C, T = c.events[Symbol.iterator](); !(_ = (C = T.next()).done); _ = !0) {
                                                var S = C.value;
                                                (this.showPrivate || "private" !== S.access) && t.push({ type: "Event", parent: c.name, name: S.name, fullName: "".concat(c.name, "#").concat(S.name), scope: S.scope, access: S.access, key: null, route: null })
                                            }
                                        } catch (D) { k = !0, w = D } finally { try { _ || null == T.return || T.return() } finally { if (k) throw w } }
                                    }
                                }
                            }
                        } catch (D) { a = !0, r = D } finally { try { s || null == n.return || n.return() } finally { if (a) throw r } }
                        if (e.typedefs) {
                            var $ = !0,
                                j = !1,
                                x = void 0;
                            try {
                                for (var M, P = this.docs.typedefs[Symbol.iterator](); !($ = (M = P.next()).done); $ = !0) {
                                    var O = M.value;
                                    (this.showPrivate || "private" !== O.access) && t.push({ type: "Typedef", parent: O.name, name: O.name, fullName: O.name, scope: O.scope, access: O.access, route: null })
                                }
                            } catch (D) { j = !0, x = D } finally { try { $ || null == P.return || P.return() } finally { if (j) throw x } }
                        }
                        return new $s.a(t, { keys: [{ name: "name", weight: .5 }, { name: "parent", weight: .2 }, { name: "fullName", weight: .3 }], shouldSort: !0, includeScore: !0, includeMatches: !0, threshold: .4, minMatchCharLength: 3 })
                    }
                },
                watch: { $route: function(e) { this.search = e.query.q }, search: function(e) { this.$route.query.q !== e && (this.$route.query.q ? this.$router.replace({ name: "docs-search", query: { q: e } }) : this.$router.push({ name: "docs-search", query: { q: e } })) }, toggles: { deep: !0, handler: function() { this.fuse = this.buildFuse(this.toggles) } }, showPrivate: function() { this.fuse = this.buildFuse(this.toggles) } }
            };

        function Rs(e, t) { return "".concat(t + ("static" === e.scope ? "." : "#")).concat(e.name) }
        var qs = Es,
            As = (s("0d3a"), Object(p["a"])(qs, Cs, Ts, !1, null, null, null)),
            Ns = As.exports;
        a["a"].use(I["a"]);
        var Ls = new I["a"]({ routes: [{ path: "/", name: "home", component: oe }, { path: "/docs", name: "docs", component: Re, children: [{ path: ":source", name: "docs-source", component: Ge, children: [{ path: ":tag", name: "docs-tag", component: rt, children: [{ path: "search", name: "docs-search", component: Ns }, { path: "class/:class", name: "docs-class", component: vs }, { path: "typedef/:typedef", name: "docs-typedef", component: ws }, { path: ":category/:file", name: "docs-file", component: vt }] }] }] }, { path: "/!", redirect: { name: "home" }, children: [{ path: "docs", redirect: { name: "docs" }, children: [{ path: "tag/:tag", redirect: function(e) { return { name: "docs-tag", params: { source: "main", tag: e.params.tag }, query: { scrollTo: e.query.scrollto } } }, children: [{ path: "file/:category/:file", redirect: function(e) { return { name: "docs-file", params: { source: "main", tag: e.params.tag, category: e.params.category, file: e.params.file }, query: { scrollTo: e.query.scrollto } } } }, { path: "class/:class", redirect: function(e) { return { name: "docs-class", params: { source: "main", tag: e.params.tag, class: e.params.class }, query: { scrollTo: e.query.scrollto } } } }, { path: "typedef/:typedef", redirect: function(e) { return { name: "docs-typedef", params: { source: "main", tag: e.params.tag, typedef: e.params.typedef }, query: { scrollTo: e.query.scrollto } } } }] }] }] }, { path: "*", component: ze }] }),
            Fs = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "container" }, [e._t("default")], 2)
            },
            zs = [],
            Us = { name: "container" },
            Ws = Us,
            Hs = (s("88b1"), Object(p["a"])(Ws, Fs, zs, !1, null, null, null)),
            Js = Hs.exports,
            Bs = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "slide" }, [s("container", [e._t("default")], 2)], 1)
            },
            Gs = [],
            Is = { name: "slide" },
            Ks = Is,
            Zs = (s("6045"), Object(p["a"])(Ks, Bs, Gs, !1, null, null, null)),
            Ys = Zs.exports,
            Vs = function() {
                var e = this,
                    t = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            Qs = [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", { staticClass: "sk-folding-cube" }, [s("div", { staticClass: "sk-cube1 sk-cube" }), s("div", { staticClass: "sk-cube2 sk-cube" }), s("div", { staticClass: "sk-cube4 sk-cube" }), s("div", { staticClass: "sk-cube3 sk-cube" })])
            }],
            Xs = { name: "loading" },
            ea = Xs,
            ta = (s("cb13"), Object(p["a"])(ea, Vs, Qs, !1, null, null, null)),
            sa = ta.exports,
            aa = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", [s("h1", [e._v("Unknown " + e._s(e.type || "page"))]), s("p", [e._v("This page doesn't actually exist. Oh no!")]), s("p", [e._v("Instead, please accept this exceptionally awesome piece of artwork:")]), s("p", [s("awesome", { attrs: { light: e.darkMode } })], 1)])
            },
            ra = [],
            oa = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("svg", { attrs: { width: "432.4", height: "567.1", version: "1.1", viewBox: "0 0 114.4 150.1", xmlns: "http://www.w3.org/2000/svg" } }, [s("g", { attrs: { transform: "translate(58.39 -90.57)", fill: e.light ? "white" : "black" } }, [s("path", { attrs: { d: "m36.98 239.8c-0.701-1.163-1.164-2.237-2.31-5.358-0.5341-1.455-1.264-3.301-1.623-4.101-0.3584-0.8004-1.071-2.408-1.584-3.572-1.048-2.38-1.192-2.7-3.641-8.129-0.9667-2.143-2.005-4.703-2.308-5.689-0.6518-2.124-1.094-3.146-3.167-7.312-0.8587-1.726-1.561-3.302-1.561-3.502v-0.3641l-27.38 0.3366-0.191 0.2908c-0.105 0.1599-0.4353 1.092-0.7338 2.072-0.2986 0.9798-0.7809 2.185-1.072 2.678s-0.6905 1.478-0.8878 2.187-0.6848 2.184-1.083 3.275c-1.182 3.236-1.708 5.263-2.123 8.182l-0.3918 2.758-4e-3 3.327-4e-3 3.327-0.3608 1.534c-0.1985 0.8434-0.4296 1.602-0.5136 1.686l-0.1528 0.1528-0.7993-0.3067 0.8625-2.008 0.4067-10.05 0.2774-1.72c0.3197-1.982 0.976-4.316 2.009-7.144 0.3987-1.091 0.8862-2.565 1.083-3.275s0.5939-1.689 0.8815-2.177c0.4808-0.8148 1.606-4.066 1.606-4.64v-0.246l-1.042 0.5576-12.32-0.142 0.04-0.5292c0.022-0.291 0.2165-1.392 0.4322-2.447l0.3921-1.918 0.385-0.596c0.2118-0.3278 0.6039-1.191 0.8714-1.919l0.4864-1.323 2.818-2.802 0.5285-1.036c0.2907-0.5698 0.5285-1.269 0.5285-1.554 0-0.2848 0.2382-1.073 0.5294-1.753l0.5293-1.235 0.1579-2.293 0.1578-2.293 0.5182-2.514c0.285-1.382 0.5806-2.811 0.6569-3.175 0.0763-0.3638 0.4432-1.651 0.8153-2.86l0.6765-2.199-0.8962-0.9331c-0.4929-0.5132-1.313-1.162-1.822-1.442-0.5093-0.2801-1.64-1.103-2.514-1.829-0.8731-0.7256-2.958-2.255-4.633-3.399s-3.216-2.285-3.424-2.536-0.9213-0.8258-1.585-1.277c-0.6632-0.4516-1.958-1.455-2.878-2.229-0.9194-0.7745-2.051-1.604-2.514-1.843-0.9062-0.4684-2.179-1.441-4.119-3.147-0.6715-0.5906-1.876-1.536-2.676-2.101-1.693-1.195-2.7-2.088-8.046-7.128-6.046-5.7-10.86-10.61-12.03-12.27l-0.6213-0.8803 0.5074-0.5074 1.606 1.928c1.585 1.902 5.771 6.111 11.71 11.77 4.193 3.998 5.381 5.047 7.673 6.778 1.091 0.8241 2.639 2.043 3.44 2.708 0.8004 0.6654 2.096 1.627 2.88 2.137 1.306 0.8499 3.627 2.641 7.042 5.434 0.7276 0.5951 2.514 1.896 3.969 2.891s3.301 2.345 4.101 2.999c0.8004 0.6545 1.812 1.385 2.249 1.623 0.4366 0.2384 1.228 0.8496 1.759 1.358l0.9656 0.9246 0.1883-0.623c0.1036-0.3426 0.3401-0.9802 0.5257-1.417 0.1855-0.4366 0.5776-1.449 0.8714-2.249 2.052-5.593 3.5-8.935 4.411-10.19 0.3179-0.4366 0.6577-1.01 0.7551-1.274l0.1771-0.4798 0.2664 0.1647c0.3759 0.2323 0.3308 0.9427-0.0911 1.436-0.7629 0.8912-2.955 5.537-3.827 8.11-0.6586 1.943-1.306 3.67-1.784 4.755-0.1951 0.4432-0.4837 1.382-0.6414 2.085-0.1577 0.7037-0.5273 1.994-0.8214 2.867-0.2941 0.8729-0.6433 2.078-0.7761 2.677-0.1328 0.5995-0.4268 1.923-0.6535 2.942-0.2267 1.019-0.5275 3.144-0.6684 4.723l-0.2563 2.871-0.5542 1.76c-0.3048 0.9678-0.8586 2.39-1.231 3.16l-0.6763 1.4-1.285 1.231c-0.7066 0.6772-1.285 1.332-1.285 1.455s-0.3737 1.023-0.8304 1.999l-0.8304 1.775-0.3603 1.72c-0.1982 0.9458-0.3603 1.75-0.3603 1.786 0 0.0364 2.508 0.0662 5.574 0.0662h5.574l0.8913-0.4757 21.96-0.1639c12.08-0.0902 23.42-0.2332 25.2-0.318l3.241-0.1541v-0.9676l-1.002-1.54c-0.9603-1.477-2.438-4.775-2.438-5.441 0-0.6229-1.427-4.049-2.032-4.878-0.3378-0.4632-0.6142-0.904-0.6142-0.9795s-0.5228-0.8871-1.162-1.804c-0.6389-0.9165-1.49-2.262-1.891-2.989-0.4012-0.7276-1.173-1.859-1.716-2.514-0.5426-0.6548-1.671-2.322-2.507-3.704s-1.982-3.174-2.546-3.98c-0.5644-0.8067-1.026-1.565-1.026-1.685 0-0.12-0.3274-0.6109-0.7276-1.091-0.6424-0.7705-1.055-1.375-2.712-3.975-0.2183-0.3425-1.087-1.152-1.93-1.798l-1.533-1.176-1.087-1.548c-0.5978-0.8516-1.412-1.905-1.809-2.342-0.9476-1.042-1.315-1.788-1.315-2.674v-0.7242l0.4201-0.4642 0.4201-0.4642-0.1786-0.8078-1.275 0.6488c-0.701 0.3568-1.449 0.6488-1.663 0.6488-0.2136 0-0.683 0.193-1.043 0.429l-0.6547 0.429-8.065-0.2761-1.296-0.4224c-1.294-0.4218-4.012-1.846-5.559-2.913-1.841-1.27-4.884-4.663-7.952-8.867-1.322-1.811-1.513-2.153-4.097-7.341l-2.13-4.277v-4.45l0.6839-1.964c0.3762-1.08 1.343-3.63 2.148-5.666l1.464-3.701 1.064-1.855c1.548-2.699 1.775-3.142 1.662-3.255-0.0559-0.0559-0.6431 0.2158-1.305 0.6037l-1.203 0.7053-0.2725-0.1684c-0.1499-0.0926-0.2725-0.2787-0.2725-0.4136v-0.2452l1.521-0.8114c0.8367-0.4463 2.209-1.183 3.05-1.637l1.529-0.8255-0.5438-0.5438v-1.715l0.4831-0.2986 0.1852-1.096c0.2746-1.625 0.8354-2.801 2.152-4.513l1.181-1.535 1.637-1.123c2.127-1.458 2.25-1.529 5.209-2.99 3.923-1.938 5.041-2.391 6.747-2.737l1.588-0.3223 5.778 0.1638 0.2194 0.6615h-6.387l-1.261 0.3039c-1.365 0.329-2.124 0.6261-4.965 1.944-1.019 0.4724-2.031 0.9352-2.249 1.028-0.2183 0.0932-0.7541 0.4049-1.191 0.6928-0.4366 0.2878-0.9711 0.6079-1.188 0.7112-0.2168 0.1033-1.019 0.6254-1.782 1.16l-1.388 0.9723-1.061 1.284c-1.224 1.482-1.967 2.963-2.241 4.471-0.1058 0.5821-0.3093 1.2-0.4523 1.373l-0.26 0.3147 0.1706 1.37 2.117-1.115 5.121 0.3278 1.931-3.295 5.489-5.59 3.387-1.72h2.619l0.2514 0.2331c0.318 0.2949 4.506 1.726 6.606 2.257 0.8759 0.2216 3.495 0.713 5.821 1.092l4.228 0.689 0.4939 0.4824-0.1744 0.1744-0.1744 0.1744-2.983-0.4506c-1.641-0.2478-4.173-0.6896-5.627-0.9818l-2.644-0.5312-2.78-0.9333c-1.529-0.5133-2.893-1.041-3.032-1.173l-0.2514-0.2393h-2.09l-3.409 1.72-5.07 5.29-0.7482 1.269c-0.4115 0.698-0.7482 1.306-0.7482 1.351 0 0.0454 0.8791 0.1489 1.954 0.2302l1.954 0.1478 0.807 0.4173c0.4439 0.2295 1.501 1.06 2.349 1.845l1.542 1.427 3.17-3.162 1.014-0.5217c0.5575-0.287 1.927-0.7622 3.043-1.056l2.029-0.5344 6.937-0.2937 1.162 0.4301c0.6389 0.2365 2.293 0.6714 3.675 0.9664s2.752 0.6388 3.043 0.764 1.303 0.3706 2.249 0.5452c0.9459 0.1746 1.831 0.4255 1.967 0.5574l0.247 0.2398-0.3588 0.3588-1.92-0.3336c-1.056-0.1835-2.158-0.4381-2.449-0.5659-0.291-0.1278-1.87-0.5295-3.51-0.8927s-3.209-0.7826-3.488-0.932l-0.5076-0.2717h-4.728l-2.268 0.3956c-2.154 0.3756-2.628 0.5162-4.583 1.359l-0.8287 0.3573-3.39 3.373 2.207 2.857 1.308 2.51c0.7192 1.38 1.447 2.748 1.616 3.039 0.5083 0.8714 1.651 4.099 2.201 6.218 0.2835 1.091 0.6187 2.342 0.7448 2.778 0.1261 0.4366 0.6651 2.461 1.198 4.498l0.9684 3.704-0.2342 10.58-0.3813 0.9872c-0.2097 0.543-0.4629 1.069-0.5626 1.169-0.0997 0.0997-0.1813 0.3754-0.1813 0.6127v0.4314l-2.117 2.067v1.892l-0.8439 1.205 0.1504 0.5994 0.1504 0.5994 0.8668 0.942c0.4768 0.5181 1.317 1.609 1.867 2.424l0.9997 1.482 3.689 2.944v0.3446c0 0.4518 0.8596 1.22 1.365 1.22h0.3973l3.769-3.307 1.587-1.914c0.8728-1.053 2.099-2.644 2.724-3.536 0.6256-0.8921 1.614-2.303 2.196-3.136 1.387-1.984 3.137-4.171 6.226-7.782 1.387-1.621 2.809-3.364 3.16-3.874 0.3514-0.5093 1.13-1.521 1.729-2.249 1.449-1.759 5.121-6.978 5.95-8.459 0.3638-0.6493 1.125-1.988 1.691-2.975 0.5664-0.9872 1.234-2.367 1.483-3.065l0.4528-1.27 0.4744-0.105 0.171 1.205-0.9593 1.942c-0.5276 1.068-1.37 2.579-1.871 3.357-0.5017 0.7786-0.9121 1.522-0.9121 1.651 0 0.1296-0.4465 0.8078-0.9922 1.507-0.5457 0.6994-1.468 1.954-2.051 2.788s-1.571 2.184-2.198 3c-0.627 0.8156-1.52 2.007-1.984 2.647-0.4644 0.6404-2.035 2.563-3.49 4.273-4.236 4.977-5.58 6.723-8.442 10.97-1.358 2.014-4.155 5.462-5.023 6.193-0.2754 0.2319-1.072 0.9176-1.77 1.524-0.698 0.6063-1.467 1.213-1.71 1.349l-0.4406 0.2466 0.3974 0.7684c0.2186 0.4226 0.6477 0.995 0.9536 1.272s0.5563 0.6286 0.5563 0.7816c0 0.153 0.4618 0.9382 1.026 1.745 0.5644 0.8067 1.71 2.598 2.546 3.98s1.964 3.049 2.507 3.704c0.5426 0.6548 1.315 1.786 1.716 2.514 0.4012 0.7276 1.252 2.073 1.891 2.989 0.6389 0.9165 1.162 1.728 1.162 1.804s0.2764 0.5163 0.6142 0.9795c0.6047 0.8291 2.032 4.256 2.032 4.878 0 0.6707 1.48 3.969 2.452 5.462l1.015 1.561-0.1596 1.906-1.984 0.1639c-1.091 0.0901-5.884 0.1794-10.65 0.1984l-8.665 0.0346v0.2358c0 0.1297 0.7026 1.648 1.561 3.373 2.059 4.139 2.516 5.189 3.146 7.239 0.4673 1.52 1.519 4.024 3.501 8.334 0.3345 0.7276 0.8172 1.799 1.073 2.381 1.202 2.739 2.387 5.422 2.981 6.747 0.3584 0.8004 1.086 2.646 1.617 4.101s1.346 3.414 1.812 4.354 0.8865 1.803 0.935 1.918l0.0882 0.2102h-0.7947zm-26.19-85.76c0.4779-0.202 1.494-0.6393 2.259-0.9718l1.39-0.6044-0.1344-0.8346h1.152l1.626-1.554v-0.4268c0-0.2347 0.0984-0.5399 0.2186-0.6781 0.1202-0.1382 0.3881-0.7871 0.5953-1.442l0.3767-1.191-0.01-5.292-0.01-5.292-0.4248-1.588c-0.2336-0.8731-0.7429-2.719-1.132-4.101-0.3888-1.382-0.9261-3.347-1.194-4.366-0.5314-2.02-1.683-5.245-2.173-6.085-0.1698-0.291-0.893-1.651-1.607-3.021-1.317-2.527-2.839-4.743-3.524-5.128l-0.3762-0.2116v-0.7184l-1.372-1.234c-0.7549-0.6787-1.735-1.422-2.179-1.651l-0.8064-0.417-9.543-0.4566-0.9211 0.4714c-0.5066 0.2593-1.49 0.8641-2.186 1.344l-1.265 0.8725-0.6127 1.238c-0.337 0.6811-1.093 2.073-1.68 3.093l-1.067 1.855-1.464 3.702c-0.8053 2.036-1.772 4.585-2.148 5.666l-0.6839 1.964v3.921l2.183 4.397c1.201 2.418 2.361 4.71 2.58 5.093 1.027 1.802 5.283 7.157 6.983 8.786 1.591 1.525 2.33 2.048 4.659 3.299l1.984 1.066 1.191 0.2905c2.035 0.4965 2.17 0.5101 5.349 0.5416l3.1 0.0307zm-11.43-10.07c-0.1765-0.2126-0.578-0.4671-0.8923-0.5654-0.3143-0.0983-1.069-0.5197-1.677-0.9363-0.6083-0.4166-1.192-0.7575-1.298-0.7575-0.1056 0-0.5778-0.2943-1.049-0.654l-0.8575-0.654-0.8486-2.49v-1.696l-1.112-0.2907 0.1745-0.2824 0.1745-0.2824h6.552l0.2761 0.4467 7.521 0.359 0.7012 0.582v1.523h-0.4814l-0.6105 3.619-1.036 1.704-1.824 0.7619h-3.392zm4.083-0.7832 0.9-0.376 0.4069-0.7868c0.2238-0.4328 0.4846-1.305 0.5796-1.939 0.095-0.6337 0.3521-1.543 0.5714-2.022s0.3492-0.9189 0.2886-0.9795c-0.0606-0.0606-1.713-0.1844-3.673-0.2752l-3.563-0.1651-1.069-0.5134-4.222 0.1568-0.0791 0.68-0.0791 0.68 0.952 2.533 1.191 0.6644c0.6548 0.3654 1.496 0.8805 1.868 1.145 0.3727 0.2642 1.007 0.5631 1.41 0.6642l0.7328 0.1839 0.2785 0.7256h2.606zm-13.18-12.5-0.1764-0.1764v-12.05l0.5753-0.3555 0.3508 0.4566-0.1512 12.3h-0.211c-0.116 0-0.2904-0.0794-0.3874-0.1764zm12.37-5.728c-0.0736-0.1917-0.0996-1.591-0.0578-3.109l0.0759-2.76h0.5292l0.149 6.218h-0.2813c-0.1547 0-0.3415-0.1569-0.4151-0.3486z", "stroke-width": ".2646" } })])])
            },
            na = [],
            ca = { name: "awesome", props: ["light"] },
            ia = ca,
            la = Object(p["a"])(ia, oa, na, !1, null, null, null),
            da = la.exports,
            ua = { name: "unknown-page", props: ["type", "darkMode"], components: { Awesome: da } },
            pa = ua,
            ma = (s("1224"), Object(p["a"])(pa, aa, ra, !1, null, null, null)),
            ha = ma.exports;
        a["a"].config.productionTip = !1, s("93ec"), a["a"].component("container", Js), a["a"].component("slide", Ys), a["a"].component("loading", sa), a["a"].component("unknown-page", ha), a["a"].directive("hljs", ye), a["a"].filter("marked", function(e) { return e || (e = "**Documentation missing.**"), e = o()(e), e.replace(/<(info|warn)>([\s\S]+)<\/\1>/gi, '<div class="$1">$2</div>') }), new a["a"]({ router: Ls, render: function(e) { return e(G) } }).$mount("#app")
    },
    "596e": function(e, t, s) {
        "use strict";
        var a = s("914a"),
            r = s.n(a);
        r.a
    },
    6045: function(e, t, s) {
        "use strict";
        var a = s("2abe"),
            r = s.n(a);
        r.a
    },
    "64a9": function(e, t, s) {},
    6891: function(e, t, s) {},
    7131: function(e, t, s) {},
    "7d7f": function(e, t, s) {
        "use strict";
        var a = s("ef45"),
            r = s.n(a);
        r.a
    },
    "7fb6": function(e, t, s) {},
    "7fe0": function(e, t, s) {
        "use strict";
        var a = s("29be"),
            r = s.n(a);
        r.a
    },
    8792: function(e, t, s) {},
    "88b1": function(e, t, s) {
        "use strict";
        var a = s("6891"),
            r = s.n(a);
        r.a
    },
    "914a": function(e, t, s) {},
    "93ec": function(e, t, s) {},
    "944c": function(e, t, s) {
        "use strict";
        var a = s("9b2c"),
            r = s.n(a);
        r.a
    },
    "9b2c": function(e, t, s) {},
    a1ed: function(e, t, s) {},
    a703: function(e, t, s) {
        "use strict";
        var a = s("c332"),
            r = s.n(a);
        r.a
    },
    a85e: function(e, t, s) {},
    abe3: function(e, t, s) {
        "use strict";
        var a = s("3f9d"),
            r = s.n(a);
        r.a
    },
    ac06: function(e, t, s) {
        "use strict";
        var a = s("7131"),
            r = s.n(a);
        r.a
    },
    af6d: function(e, t, s) {},
    b583: function(e, t, s) {
        "use strict";
        var a = s("d3be"),
            r = s.n(a);
        r.a
    },
    c083: function(e, t, s) {},
    c332: function(e, t, s) {},
    c83c: function(e, t, s) {},
    c83d: function(e, t, s) {},
    cb13: function(e, t, s) {
        "use strict";
        var a = s("465b"),
            r = s.n(a);
        r.a
    },
    d3be: function(e, t, s) {},
    d73b: function(e, t, s) {},
    dbee: function(e, t, s) {
        "use strict";
        var a = s("36ae"),
            r = s.n(a);
        r.a
    },
    defc: function(e, t, s) {
        "use strict";
        var a = s("3fc0"),
            r = s.n(a);
        r.a
    },
    e283: function(e, t, s) {
        "use strict";
        var a = s("d73b"),
            r = s.n(a);
        r.a
    },
    e386: function(e, t, s) {
        "use strict";
        var a = s("274c"),
            r = s.n(a);
        r.a
    },
    ef45: function(e, t, s) {},
    f278: function(e, t, s) {
        "use strict";
        var a = s("c83d"),
            r = s.n(a);
        r.a
    },
    fed3: function(e, t, s) {
        "use strict";
        var a = s("8792"),
            r = s.n(a);
        r.a
    }
});
//# sourceMappingURL=app.712d6e63.js.map