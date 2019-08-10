! function(e) { var t = {};

  function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports } n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
      for (var i in e) n.d(r, i, function(t) { return e[t] }.bind(null, i)); return r }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 62) }([function(e, t) { var n = e.exports = { version: "2.6.9" }; "number" == typeof __e && (__e = n) }, function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t, n) { e.exports = !n(8)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t, n) { var r = n(1),
    i = n(0),
    a = n(36),
    s = n(6),
    o = n(5),
    l = function(e, t, n) { var h, p, c, u = e & l.F,
        f = e & l.G,
        d = e & l.S,
        m = e & l.P,
        g = e & l.B,
        y = e & l.W,
        v = f ? i : i[t] || (i[t] = {}),
        b = v.prototype,
        x = f ? r : d ? r[t] : (r[t] || {}).prototype; for (h in f && (n = t), n)(p = !u && x && void 0 !== x[h]) && o(v, h) || (c = p ? x[h] : n[h], v[h] = f && "function" != typeof x[h] ? n[h] : g && p ? a(c, r) : y && x[h] == c ? function(e) { var t = function(t, n, r) { if (this instanceof e) { switch (arguments.length) {
              case 0:
                return new e;
              case 1:
                return new e(t);
              case 2:
                return new e(t, n) } return new e(t, n, r) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t }(c) : m && "function" == typeof c ? a(Function.call, c) : c, m && ((v.virtual || (v.virtual = {}))[h] = c, e & l.R && b && !b[h] && s(b, h, c))) };
  l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l }, function(e, t, n) { var r = n(11),
    i = n(37),
    a = n(20),
    s = Object.defineProperty;
  t.f = n(2) ? Object.defineProperty : function(e, t, n) { if (r(e), t = a(t, !0), r(n), i) try { return s(e, t, n) } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } }, function(e, t) { var n = {}.hasOwnProperty;
  e.exports = function(e, t) { return n.call(e, t) } }, function(e, t, n) { var r = n(4),
    i = n(14);
  e.exports = n(2) ? function(e, t, n) { return r.f(e, t, i(1, n)) } : function(e, t, n) { return e[t] = n, e } }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t, n) { var r = n(40),
    i = n(21);
  e.exports = function(e) { return r(i(e)) } }, function(e, t, n) { var r = n(24)("wks"),
    i = n(17),
    a = n(1).Symbol,
    s = "function" == typeof a;
  (e.exports = function(e) { return r[e] || (r[e] = s && a[e] || (s ? a : i)("Symbol." + e)) }).store = r }, function(e, t, n) { var r = n(7);
  e.exports = function(e) { if (!r(e)) throw TypeError(e + " is not an object!"); return e } }, function(e, t) { var n;
  n = function() { return this }(); try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) } e.exports = n }, function(e, t, n) { "use strict";
  e.exports = n(63) }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t, n) { var r = n(39),
    i = n(25);
  e.exports = Object.keys || function(e) { return r(e, i) } }, function(e, t) { e.exports = !0 }, function(e, t) { var n = 0,
    r = Math.random();
  e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36)) } }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) { var r = n(21);
  e.exports = function(e) { return Object(r(e)) } }, function(e, t, n) { var r = n(7);
  e.exports = function(e, t) { if (!r(e)) return e; var n, i; if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i; if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; throw TypeError("Can't convert object to primitive value") } }, function(e, t) { e.exports = function(e) { if (null == e) throw TypeError("Can't call method on  " + e); return e } }, function(e, t) { var n = Math.ceil,
    r = Math.floor;
  e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e) } }, function(e, t, n) { var r = n(24)("keys"),
    i = n(17);
  e.exports = function(e) { return r[e] || (r[e] = i(e)) } }, function(e, t, n) { var r = n(0),
    i = n(1),
    a = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
  (e.exports = function(e, t) { return a[e] || (a[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: r.version, mode: n(16) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t) { e.exports = {} }, function(e, t, n) { var r = n(11),
    i = n(102),
    a = n(25),
    s = n(23)("IE_PROTO"),
    o = function() {},
    l = function() { var e, t = n(38)("iframe"),
        r = a.length; for (t.style.display = "none", n(103).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[a[r]]; return l() };
  e.exports = Object.create || function(e, t) { var n; return null !== e ? (o.prototype = r(e), n = new o, o.prototype = null, n[s] = e) : n = l(), void 0 === t ? n : i(n, t) } }, function(e, t, n) { var r = n(4).f,
    i = n(5),
    a = n(10)("toStringTag");
  e.exports = function(e, t, n) { e && !i(e = n ? e : e.prototype, a) && r(e, a, { configurable: !0, value: t }) } }, function(e, t, n) { t.f = n(10) }, function(e, t, n) { var r = n(1),
    i = n(0),
    a = n(16),
    s = n(30),
    o = n(4).f;
  e.exports = function(e) { var t = i.Symbol || (i.Symbol = a ? {} : r.Symbol || {}); "_" == e.charAt(0) || e in t || o(t, e, { value: s.f(e) }) } }, , , , function(e, t, n) { "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var r = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable;
  e.exports = function() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) { return t[e] }).join("")) return !1; var r = {}; return "abcdefghijklmnopqrst".split("").forEach(function(e) { r[e] = e }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("") } catch (e) { return !1 } }() ? Object.assign : function(e, t) { for (var n, s, o = function(e) { if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) }(e), l = 1; l < arguments.length; l++) { for (var h in n = Object(arguments[l])) i.call(n, h) && (o[h] = n[h]); if (r) { s = r(n); for (var p = 0; p < s.length; p++) a.call(n, s[p]) && (o[s[p]] = n[s[p]]) } } return o } }, function(e, t, n) { var r = n(82);
  e.exports = function(e, t, n) { if (r(e), void 0 === t) return e; switch (n) {
      case 1:
        return function(n) { return e.call(t, n) };
      case 2:
        return function(n, r) { return e.call(t, n, r) };
      case 3:
        return function(n, r, i) { return e.call(t, n, r, i) } } return function() { return e.apply(t, arguments) } } }, function(e, t, n) { e.exports = !n(2) && !n(8)(function() { return 7 != Object.defineProperty(n(38)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, n) { var r = n(7),
    i = n(1).document,
    a = r(i) && r(i.createElement);
  e.exports = function(e) { return a ? i.createElement(e) : {} } }, function(e, t, n) { var r = n(5),
    i = n(9),
    a = n(84)(!1),
    s = n(23)("IE_PROTO");
  e.exports = function(e, t) { var n, o = i(e),
      l = 0,
      h = []; for (n in o) n != s && r(o, n) && h.push(n); for (; t.length > l;) r(o, n = t[l++]) && (~a(h, n) || h.push(n)); return h } }, function(e, t, n) { var r = n(41);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == r(e) ? e.split("") : Object(e) } }, function(e, t) { var n = {}.toString;
  e.exports = function(e) { return n.call(e).slice(8, -1) } }, function(e, t, n) { var r = n(5),
    i = n(19),
    a = n(23)("IE_PROTO"),
    s = Object.prototype;
  e.exports = Object.getPrototypeOf || function(e) { return e = i(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null } }, function(e, t, n) { "use strict";
  t.__esModule = !0; var r = s(n(97)),
    i = s(n(108)),
    a = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e };

  function s(e) { return e && e.__esModule ? e : { default: e } } t.default = "function" == typeof i.default && "symbol" === a(r.default) ? function(e) { return void 0 === e ? "undefined" : a(e) } : function(e) { return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e) } }, function(e, t, n) { "use strict"; var r = n(16),
    i = n(3),
    a = n(45),
    s = n(6),
    o = n(27),
    l = n(101),
    h = n(29),
    p = n(42),
    c = n(10)("iterator"),
    u = !([].keys && "next" in [].keys()),
    f = function() { return this };
  e.exports = function(e, t, n, d, m, g, y) { l(n, t, d); var v, b, x, E = function(e) { if (!u && e in S) return S[e]; switch (e) {
          case "keys":
          case "values":
            return function() { return new n(this, e) } } return function() { return new n(this, e) } },
      k = t + " Iterator",
      _ = "values" == m,
      w = !1,
      S = e.prototype,
      C = S[c] || S["@@iterator"] || m && S[m],
      P = C || E(m),
      T = m ? _ ? E("entries") : P : void 0,
      D = "Array" == t && S.entries || C; if (D && (x = p(D.call(new e))) !== Object.prototype && x.next && (h(x, k, !0), r || "function" == typeof x[c] || s(x, c, f)), _ && C && "values" !== C.name && (w = !0, P = function() { return C.call(this) }), r && !y || !u && !w && S[c] || s(S, c, P), o[t] = P, o[k] = f, m)
      if (v = { values: _ ? P : E("values"), keys: g ? P : E("keys"), entries: T }, y)
        for (b in v) b in S || a(S, b, v[b]);
      else i(i.P + i.F * (u || w), t, v); return v } }, function(e, t, n) { e.exports = n(6) }, function(e, t, n) { var r = n(39),
    i = n(25).concat("length", "prototype");
  t.f = Object.getOwnPropertyNames || function(e) { return r(e, i) } }, function(e, t, n) { var r = n(18),
    i = n(14),
    a = n(9),
    s = n(20),
    o = n(5),
    l = n(37),
    h = Object.getOwnPropertyDescriptor;
  t.f = n(2) ? h : function(e, t) { if (e = a(e), t = s(t, !0), l) try { return h(e, t) } catch (e) {}
    if (o(e, t)) return i(!r.f.call(e, t), e[t]) } }, , , , , , , , , , , , , , , function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
      function n() { this.constructor = e } r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
    a = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))(function(i, a) {
        function s(e) { try { l(r.next(e)) } catch (e) { a(e) } }

        function o(e) { try { l(r.throw(e)) } catch (e) { a(e) } }

        function l(e) { e.done ? i(e.value) : new n(function(t) { t(e.value) }).then(s, o) } l((r = r.apply(e, t || [])).next()) }) },
    s = this && this.__generator || function(e, t) { var n, r, i, a, s = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return a = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function() { return this }), a;

      function o(a) { return function(o) { return function(a) { if (n) throw new TypeError("Generator is already executing."); for (; s;) try { if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i; switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a; break;
                case 4:
                  return s.label++, { value: a[1], done: !1 };
                case 5:
                  s.label++, r = a[1], a = [0]; continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop(); continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) { s = 0; continue } if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) { s.label = a[1]; break } if (6 === a[0] && s.label < i[1]) { s.label = i[1], i = a; break } if (i && s.label < i[2]) { s.label = i[2], s.ops.push(a); break } i[2] && s.ops.pop(), s.trys.pop(); continue } a = t.call(e, s) } catch (e) { a = [6, e], r = 0 } finally { n = i = 0 }
            if (5 & a[0]) throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 } }([a, o]) } } },
    o = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t },
    l = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
  t.__esModule = !0; var h = o(n(13)),
    p = o(n(64));
  n(68), n(73); var c = l(n(74)),
    u = l(n(75)),
    f = l(n(76)),
    d = l(n(77)),
    m = o(n(130)),
    g = function(e) {
      function t(t) { var n = e.call(this, t) || this; return n.imageFetchers = [], n.lottieRef = function(e) { n.animationView = e }, n.urlRef = function(e) { e && n.savedResourceUrl && (e.value = n.savedResourceUrl), n.textbox = e }, n.onFetch = function() { var e = n.getSpreadsheetIdFromTextbox();
          e ? (n.savedResourceUrl = n.textbox.value, n.animationView.anim.playSegments([61, 370], !0), n.setState({ isFetching: !0, errorMessage: null }), parent.postMessage({ pluginMessage: { action: "beganFetching", data: { url: n.savedResourceUrl, limitToCurrentPage: n.limitToCurrentPage } } }, "*"), new c.default(e).fetchSpreadsheet(function(e) { switch (e.type) {
              case "BAD_RESPONSE":
                403 === e.response.status && n.setState({ isFetching: !1, errorMessage: "Unable to access – make sure you've made it shareable" }); break;
              case "ERROR":
                var t = e.error;
                console.log("Error: ", t), navigator.onLine ? n.setState({ isFetching: !1, errorMessage: "There was an error fetching. Try again later" }) : n.setState({ isFetching: !1, errorMessage: "There doesn't seem to be internet" }); break;
              case "SUCCESS":
                n.setState({ isFetching: !1, isProcessing: !0 }), parent.postMessage({ pluginMessage: { action: "fetched", data: { spreadsheet: e.object } } }, "*") } })) : n.setState({ invalidUrl: !0, errorMessage: null }) }, n.onCancel = function() { parent.postMessage({ pluginMessage: { action: "cancel" } }, "*") }, n.limitToCurrentPage = !0, n.state = { isFetching: !1, isProcessing: !1, invalidUrl: !1, closing: !1, errorMessage: null, transformError: null }, n.renderInfoPanel = n.renderInfoPanel.bind(n), n.renderFooter = n.renderFooter.bind(n), n.renderErrorMessage = n.renderErrorMessage.bind(n), n.handleUrlTextboxChange = n.handleUrlTextboxChange.bind(n), n } return i(t, e), t.prototype.componentDidMount = function() { var e = this;
        onmessage = function(t) { return a(e, void 0, void 0, function() { var e, n, r, i, a = this; return s(this, function(s) { switch ((e = t.data.pluginMessage).action) {
                case "fetch-image":
                  n = e.data.imageUrl, r = e.data.nodeId, this.imageFetchers.push(new u.default(n, r, function(e) {}));
                case "set-default-url":
                  this.savedResourceUrl = e.data.resourceUrl, this.savedResourceUrl && (this.textbox.value = this.savedResourceUrl); break;
                case "close":
                  this.setState({ closing: !0 }), setInterval(function() { a.animationView && a.animationView.destroy() }, 250); break;
                case "error":
                  i = e.data, this.setState({ transformError: i }) } return [2] }) }) } }, t.prototype.componentWillUnmount = function() {}, t.prototype.getSpreadsheetIdFromTextbox = function() { var e = this.textbox.value,
          t = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(e); if (t && !(t.length <= 1)) return t[1] }, t.prototype.handleUrlTextboxChange = function() { var e = void 0 === this.getSpreadsheetIdFromTextbox();
        e !== this.state.invalidUrl && this.setState({ invalidUrl: e }) }, t.prototype.renderFooter = function() { if (!this.state.isFetching && !this.state.isProcessing) return h.createElement("div", { className: "Footer" }, h.createElement("button", { className: "button button--primary", onClick: this.onFetch, disabled: this.state.invalidUrl }, "Sync"), h.createElement("button", { className: "button button--secondary", onClick: this.onCancel }, "Cancel")) }, t.prototype.renderInfoPanel = function() { var e = this; if (!this.state.isFetching && !this.state.isProcessing) { var t; return this.state.invalidUrl && (t = h.createElement("p", { className: "type type--11-pos error" }, "Invalid Google Sheets URL")), h.createElement("div", { style: { float: "left", position: "relative", padding: "16px", marginTop: "32px", width: "80%" } }, h.createElement("input", { onChange: this.handleUrlTextboxChange, className: "input", ref: this.urlRef, placeholder: "Enter Sheets shareable link here..." }), t, h.createElement(f.default, { defaultChecked: this.limitToCurrentPage, label: "Limit to current page", onChange: function(t) { return e.limitToCurrentPage = t } })) } }, t.prototype.renderErrorMessage = function() { if (this.state.errorMessage) { this.animationView.anim.playSegments([0, 61], !0); return h.createElement("p", { style: { position: "absolute", top: "32px", left: "120px" }, className: "type type--11-pos error" }, this.state.errorMessage) } }, t.prototype.render = function() { var e = this; if (this.state.transformError) { return h.createElement("div", { style: { padding: "8px" } }, h.createElement("p", { className: "type type--11-pos error" }, "There was an error processing the Google Sheets data"), h.createElement("br", null), h.createElement("p", { className: "type type--11-pos error" }, "This error shouldn't happen – please send the below error message to david@williames.com to help fix it"), h.createElement("br", null), h.createElement("p", { className: "type type--11-pos" }, "Error: ", this.state.transformError)) } var t = { loop: !1, autoplay: !1, animationData: m, rendererSettings: { preserveAspectRatio: "xMidYMid meet" } },
          n = { float: "left", position: "relative", height: "150px", width: this.state.isFetching || this.state.isProcessing ? "100%" : "20%", transition: "width 0.5s ease-in-out, transform 0.3s ease-in", transform: this.state.closing ? "scale(0.01)" : "scale(1)" },
          r = [{ eventName: "complete", callback: function() {
              (e.state.isProcessing || e.state.isFetching) && e.animationView.anim.playSegments([322, 370], !1) } }, { eventName: "DOMLoaded", callback: function() { e.animationView.anim.playSegments([0, 61], !0) } }]; return h.createElement("div", { className: "container" }, h.createElement("div", { style: n }, h.createElement(d.default, { ref: this.lottieRef, options: t, isClickToPauseDisabled: !0, eventListeners: r })), this.renderInfoPanel(), this.renderFooter(), this.renderErrorMessage()) }, t }(h.Component);
  p.render(h.createElement(g, null), document.getElementById("react-page")) }, function(e, t, n) { "use strict";
  /** @license React v16.8.6
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var r = n(35),
    i = "function" == typeof Symbol && Symbol.for,
    a = i ? Symbol.for("react.element") : 60103,
    s = i ? Symbol.for("react.portal") : 60106,
    o = i ? Symbol.for("react.fragment") : 60107,
    l = i ? Symbol.for("react.strict_mode") : 60108,
    h = i ? Symbol.for("react.profiler") : 60114,
    p = i ? Symbol.for("react.provider") : 60109,
    c = i ? Symbol.for("react.context") : 60110,
    u = i ? Symbol.for("react.concurrent_mode") : 60111,
    f = i ? Symbol.for("react.forward_ref") : 60112,
    d = i ? Symbol.for("react.suspense") : 60113,
    m = i ? Symbol.for("react.memo") : 60115,
    g = i ? Symbol.for("react.lazy") : 60116,
    y = "function" == typeof Symbol && Symbol.iterator;

  function v(e) { for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);! function(e, t, n, r, i, a, s, o) { if (!e) { if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else { var l = [n, r, i, a, s, o],
            h = 0;
          (e = Error(t.replace(/%s/g, function() { return l[h++] }))).name = "Invariant Violation" } throw e.framesToPop = 1, e } }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n) } var b = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    x = {};

  function E(e, t, n) { this.props = e, this.context = t, this.refs = x, this.updater = n || b }

  function k() {}

  function _(e, t, n) { this.props = e, this.context = t, this.refs = x, this.updater = n || b } E.prototype.isReactComponent = {}, E.prototype.setState = function(e, t) { "object" != typeof e && "function" != typeof e && null != e && v("85"), this.updater.enqueueSetState(this, e, t, "setState") }, E.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") }, k.prototype = E.prototype; var w = _.prototype = new k;
  w.constructor = _, r(w, E.prototype), w.isPureReactComponent = !0; var S = { current: null },
    C = { current: null },
    P = Object.prototype.hasOwnProperty,
    T = { key: !0, ref: !0, __self: !0, __source: !0 };

  function D(e, t, n) { var r = void 0,
      i = {},
      s = null,
      o = null; if (null != t)
      for (r in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) P.call(t, r) && !T.hasOwnProperty(r) && (i[r] = t[r]); var l = arguments.length - 2; if (1 === l) i.children = n;
    else if (1 < l) { for (var h = Array(l), p = 0; p < l; p++) h[p] = arguments[p + 2];
      i.children = h } if (e && e.defaultProps)
      for (r in l = e.defaultProps) void 0 === i[r] && (i[r] = l[r]); return { $$typeof: a, type: e, key: s, ref: o, props: i, _owner: C.current } }

  function A(e) { return "object" == typeof e && null !== e && e.$$typeof === a } var F = /\/+/g,
    M = [];

  function I(e, t, n, r) { if (M.length) { var i = M.pop(); return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i } return { result: e, keyPrefix: t, func: n, context: r, count: 0 } }

  function R(e) { e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > M.length && M.push(e) }

  function z(e, t, n) { return null == e ? 0 : function e(t, n, r, i) { var o = typeof t; "undefined" !== o && "boolean" !== o || (t = null); var l = !1; if (null === t) l = !0;
      else switch (o) {
        case "string":
        case "number":
          l = !0; break;
        case "object":
          switch (t.$$typeof) {
            case a:
            case s:
              l = !0 } }
      if (l) return r(i, t, "" === n ? "." + N(t, 0) : n), 1; if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
        for (var h = 0; h < t.length; h++) { var p = n + N(o = t[h], h);
          l += e(o, p, r, i) } else if (p = null === t || "object" != typeof t ? null : "function" == typeof(p = y && t[y] || t["@@iterator"]) ? p : null, "function" == typeof p)
          for (t = p.call(t), h = 0; !(o = t.next()).done;) l += e(o = o.value, p = n + N(o, h++), r, i);
        else "object" === o && v("31", "[object Object]" == (r = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""); return l }(e, "", t, n) }

  function N(e, t) { return "object" == typeof e && null !== e && null != e.key ? function(e) { var t = { "=": "=0", ":": "=2" }; return "$" + ("" + e).replace(/[=:]/g, function(e) { return t[e] }) }(e.key) : t.toString(36) }

  function B(e, t) { e.func.call(e.context, t, e.count++) }

  function V(e, t, n) { var r = e.result,
      i = e.keyPrefix;
    e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? O(e, r, n, function(e) { return e }) : null != e && (A(e) && (e = function(e, t) { return { $$typeof: a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(F, "$&/") + "/") + n)), r.push(e)) }

  function O(e, t, n, r, i) { var a = "";
    null != n && (a = ("" + n).replace(F, "$&/") + "/"), z(e, V, t = I(t, a, r, i)), R(t) }

  function L() { var e = S.current; return null === e && v("321"), e } var G = { Children: { map: function(e, t, n) { if (null == e) return e; var r = []; return O(e, r, null, t, n), r }, forEach: function(e, t, n) { if (null == e) return e;
          z(e, B, t = I(null, null, t, n)), R(t) }, count: function(e) { return z(e, function() { return null }, null) }, toArray: function(e) { var t = []; return O(e, t, null, function(e) { return e }), t }, only: function(e) { return A(e) || v("143"), e } }, createRef: function() { return { current: null } }, Component: E, PureComponent: _, createContext: function(e, t) { return void 0 === t && (t = null), (e = { $$typeof: c, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: p, _context: e }, e.Consumer = e }, forwardRef: function(e) { return { $$typeof: f, render: e } }, lazy: function(e) { return { $$typeof: g, _ctor: e, _status: -1, _result: null } }, memo: function(e, t) { return { $$typeof: m, type: e, compare: void 0 === t ? null : t } }, useCallback: function(e, t) { return L().useCallback(e, t) }, useContext: function(e, t) { return L().useContext(e, t) }, useEffect: function(e, t) { return L().useEffect(e, t) }, useImperativeHandle: function(e, t, n) { return L().useImperativeHandle(e, t, n) }, useDebugValue: function() {}, useLayoutEffect: function(e, t) { return L().useLayoutEffect(e, t) }, useMemo: function(e, t) { return L().useMemo(e, t) }, useReducer: function(e, t, n) { return L().useReducer(e, t, n) }, useRef: function(e) { return L().useRef(e) }, useState: function(e) { return L().useState(e) }, Fragment: o, StrictMode: l, Suspense: d, createElement: D, cloneElement: function(e, t, n) { null == e && v("267", e); var i = void 0,
          s = r({}, e.props),
          o = e.key,
          l = e.ref,
          h = e._owner; if (null != t) { void 0 !== t.ref && (l = t.ref, h = C.current), void 0 !== t.key && (o = "" + t.key); var p = void 0; for (i in e.type && e.type.defaultProps && (p = e.type.defaultProps), t) P.call(t, i) && !T.hasOwnProperty(i) && (s[i] = void 0 === t[i] && void 0 !== p ? p[i] : t[i]) } if (1 === (i = arguments.length - 2)) s.children = n;
        else if (1 < i) { p = Array(i); for (var c = 0; c < i; c++) p[c] = arguments[c + 2];
          s.children = p } return { $$typeof: a, type: e.type, key: o, ref: l, props: s, _owner: h } }, createFactory: function(e) { var t = D.bind(null, e); return t.type = e, t }, isValidElement: A, version: "16.8.6", unstable_ConcurrentMode: u, unstable_Profiler: h, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentDispatcher: S, ReactCurrentOwner: C, assign: r } },
    j = { default: G },
    H = j && G || j;
  e.exports = H.default || H }, function(e, t, n) { "use strict";! function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (e) { console.error(e) } }(), e.exports = n(65) }, function(e, t, n) { "use strict";
  /** @license React v16.8.6
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var r = n(13),
    i = n(35),
    a = n(66);

  function s(e) { for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);! function(e, t, n, r, i, a, s, o) { if (!e) { if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else { var l = [n, r, i, a, s, o],
            h = 0;
          (e = Error(t.replace(/%s/g, function() { return l[h++] }))).name = "Invariant Violation" } throw e.framesToPop = 1, e } }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n) } r || s("227"); var o = !1,
    l = null,
    h = !1,
    p = null,
    c = { onError: function(e) { o = !0, l = e } };

  function u(e, t, n, r, i, a, s, h, p) { o = !1, l = null,
      function(e, t, n, r, i, a, s, o, l) { var h = Array.prototype.slice.call(arguments, 3); try { t.apply(n, h) } catch (e) { this.onError(e) } }.apply(c, arguments) } var f = null,
    d = {};

  function m() { if (f)
      for (var e in d) { var t = d[e],
          n = f.indexOf(e); if (-1 < n || s("96", e), !y[n])
          for (var r in t.extractEvents || s("97", e), y[n] = t, n = t.eventTypes) { var i = void 0,
              a = n[r],
              o = t,
              l = r;
            v.hasOwnProperty(l) && s("99", l), v[l] = a; var h = a.phasedRegistrationNames; if (h) { for (i in h) h.hasOwnProperty(i) && g(h[i], o, l);
              i = !0 } else a.registrationName ? (g(a.registrationName, o, l), i = !0) : i = !1;
            i || s("98", r, e) } } }

  function g(e, t, n) { b[e] && s("100", e), b[e] = t, x[e] = t.eventTypes[n].dependencies } var y = [],
    v = {},
    b = {},
    x = {},
    E = null,
    k = null,
    _ = null;

  function w(e, t, n) { var r = e.type || "unknown-event";
    e.currentTarget = _(n),
      function(e, t, n, r, i, a, c, f, d) { if (u.apply(this, arguments), o) { if (o) { var m = l;
            o = !1, l = null } else s("198"), m = void 0;
          h || (h = !0, p = m) } }(r, t, void 0, e), e.currentTarget = null }

  function S(e, t) { return null == t && s("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t] }

  function C(e, t, n) { Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e) } var P = null;

  function T(e) { if (e) { var t = e._dispatchListeners,
        n = e._dispatchInstances; if (Array.isArray(t))
        for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) w(e, t[r], n[r]);
      else t && w(e, t, n);
      e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e) } } var D = { injectEventPluginOrder: function(e) { f && s("101"), f = Array.prototype.slice.call(e), m() }, injectEventPluginsByName: function(e) { var t, n = !1; for (t in e)
        if (e.hasOwnProperty(t)) { var r = e[t];
          d.hasOwnProperty(t) && d[t] === r || (d[t] && s("102", t), d[t] = r, n = !0) } n && m() } };

  function A(e, t) { var n = e.stateNode; if (!n) return null; var r = E(n); if (!r) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r; break e;
      default:
        e = !1 }
    return e ? null : (n && "function" != typeof n && s("231", t, typeof n), n) }

  function F(e) { if (null !== e && (P = S(P, e)), e = P, P = null, e && (C(e, T), P && s("95"), h)) throw e = p, h = !1, p = null, e } var M = Math.random().toString(36).slice(2),
    I = "__reactInternalInstance$" + M,
    R = "__reactEventHandlers$" + M;

  function z(e) { if (e[I]) return e[I]; for (; !e[I];) { if (!e.parentNode) return null;
      e = e.parentNode } return 5 === (e = e[I]).tag || 6 === e.tag ? e : null }

  function N(e) { return !(e = e[I]) || 5 !== e.tag && 6 !== e.tag ? null : e }

  function B(e) { if (5 === e.tag || 6 === e.tag) return e.stateNode;
    s("33") }

  function V(e) { return e[R] || null }

  function O(e) { do { e = e.return } while (e && 5 !== e.tag); return e || null }

  function L(e, t, n) {
    (t = A(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = S(n._dispatchListeners, t), n._dispatchInstances = S(n._dispatchInstances, e)) }

  function G(e) { if (e && e.dispatchConfig.phasedRegistrationNames) { for (var t = e._targetInst, n = []; t;) n.push(t), t = O(t); for (t = n.length; 0 < t--;) L(n[t], "captured", e); for (t = 0; t < n.length; t++) L(n[t], "bubbled", e) } }

  function j(e, t, n) { e && n && n.dispatchConfig.registrationName && (t = A(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = S(n._dispatchListeners, t), n._dispatchInstances = S(n._dispatchInstances, e)) }

  function H(e) { e && e.dispatchConfig.registrationName && j(e._targetInst, null, e) }

  function U(e) { C(e, G) } var W = !("undefined" == typeof window || !window.document || !window.document.createElement);

  function q(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n } var Y = { animationend: q("Animation", "AnimationEnd"), animationiteration: q("Animation", "AnimationIteration"), animationstart: q("Animation", "AnimationStart"), transitionend: q("Transition", "TransitionEnd") },
    $ = {},
    K = {};

  function X(e) { if ($[e]) return $[e]; if (!Y[e]) return e; var t, n = Y[e]; for (t in n)
      if (n.hasOwnProperty(t) && t in K) return $[e] = n[t]; return e } W && (K = document.createElement("div").style, "AnimationEvent" in window || (delete Y.animationend.animation, delete Y.animationiteration.animation, delete Y.animationstart.animation), "TransitionEvent" in window || delete Y.transitionend.transition); var Q = X("animationend"),
    J = X("animationiteration"),
    Z = X("animationstart"),
    ee = X("transitionend"),
    te = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    ne = null,
    re = null,
    ie = null;

  function ae() { if (ie) return ie; var e, t, n = re,
      r = n.length,
      i = "value" in ne ? ne.value : ne.textContent,
      a = i.length; for (e = 0; e < r && n[e] === i[e]; e++); var s = r - e; for (t = 1; t <= s && n[r - t] === i[a - t]; t++); return ie = i.slice(e, 1 < t ? 1 - t : void 0) }

  function se() { return !0 }

  function oe() { return !1 }

  function le(e, t, n, r) { for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]); return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? se : oe, this.isPropagationStopped = oe, this }

  function he(e, t, n, r) { if (this.eventPool.length) { var i = this.eventPool.pop(); return this.call(i, e, t, n, r), i } return new this(e, t, n, r) }

  function pe(e) { e instanceof this || s("279"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e) }

  function ce(e) { e.eventPool = [], e.getPooled = he, e.release = pe } i(le.prototype, { preventDefault: function() { this.defaultPrevented = !0; var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = se) }, stopPropagation: function() { var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = se) }, persist: function() { this.isPersistent = se }, isPersistent: oe, destructor: function() { var e, t = this.constructor.Interface; for (e in t) this[e] = null;
      this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = oe, this._dispatchInstances = this._dispatchListeners = null } }), le.Interface = { type: null, target: null, currentTarget: function() { return null }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: null, isTrusted: null }, le.extend = function(e) {
    function t() {}

    function n() { return r.apply(this, arguments) } var r = this;
    t.prototype = r.prototype; var a = new t; return i(a, n.prototype), n.prototype = a, n.prototype.constructor = n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, ce(n), n }, ce(le); var ue = le.extend({ data: null }),
    fe = le.extend({ data: null }),
    de = [9, 13, 27, 32],
    me = W && "CompositionEvent" in window,
    ge = null;
  W && "documentMode" in document && (ge = document.documentMode); var ye = W && "TextEvent" in window && !ge,
    ve = W && (!me || ge && 8 < ge && 11 >= ge),
    be = String.fromCharCode(32),
    xe = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } },
    Ee = !1;

  function ke(e, t) { switch (e) {
      case "keyup":
        return -1 !== de.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "blur":
        return !0;
      default:
        return !1 } }

  function _e(e) { return "object" == typeof(e = e.detail) && "data" in e ? e.data : null } var we = !1; var Se = { eventTypes: xe, extractEvents: function(e, t, n, r) { var i = void 0,
          a = void 0; if (me) e: { switch (e) {
            case "compositionstart":
              i = xe.compositionStart; break e;
            case "compositionend":
              i = xe.compositionEnd; break e;
            case "compositionupdate":
              i = xe.compositionUpdate; break e } i = void 0 }
        else we ? ke(e, n) && (i = xe.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = xe.compositionStart); return i ? (ve && "ko" !== n.locale && (we || i !== xe.compositionStart ? i === xe.compositionEnd && we && (a = ae()) : (re = "value" in (ne = r) ? ne.value : ne.textContent, we = !0)), i = ue.getPooled(i, t, n, r), a ? i.data = a : null !== (a = _e(n)) && (i.data = a), U(i), a = i) : a = null, (e = ye ? function(e, t) { switch (e) {
            case "compositionend":
              return _e(t);
            case "keypress":
              return 32 !== t.which ? null : (Ee = !0, be);
            case "textInput":
              return (e = t.data) === be && Ee ? null : e;
            default:
              return null } }(e, n) : function(e, t) { if (we) return "compositionend" === e || !me && ke(e, t) ? (e = ae(), ie = re = ne = null, we = !1, e) : null; switch (e) {
            case "paste":
              return null;
            case "keypress":
              if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null;
            case "compositionend":
              return ve && "ko" !== t.locale ? null : t.data;
            default:
              return null } }(e, n)) ? ((t = fe.getPooled(xe.beforeInput, t, n, r)).data = e, U(t)) : t = null, null === a ? t : null === t ? a : [a, t] } },
    Ce = null,
    Pe = null,
    Te = null;

  function De(e) { if (e = k(e)) { "function" != typeof Ce && s("280"); var t = E(e.stateNode);
      Ce(e.stateNode, e.type, t) } }

  function Ae(e) { Pe ? Te ? Te.push(e) : Te = [e] : Pe = e }

  function Fe() { if (Pe) { var e = Pe,
        t = Te; if (Te = Pe = null, De(e), t)
        for (e = 0; e < t.length; e++) De(t[e]) } }

  function Me(e, t) { return e(t) }

  function Ie(e, t, n) { return e(t, n) }

  function Re() {} var ze = !1;

  function Ne(e, t) { if (ze) return e(t);
    ze = !0; try { return Me(e, t) } finally { ze = !1, (null !== Pe || null !== Te) && (Re(), Fe()) } } var Be = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

  function Ve(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Be[e.type] : "textarea" === t }

  function Oe(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e }

  function Le(e) { if (!W) return !1; var t = (e = "on" + e) in document; return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t }

  function Ge(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t) }

  function je(e) { e._valueTracker || (e._valueTracker = function(e) { var t = Ge(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) { var i = n.get,
          a = n.set; return Object.defineProperty(e, t, { configurable: !0, get: function() { return i.call(this) }, set: function(e) { r = "" + e, a.call(this, e) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return r }, setValue: function(e) { r = "" + e }, stopTracking: function() { e._valueTracker = null, delete e[t] } } } }(e)) }

  function He(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var n = t.getValue(),
      r = ""; return e && (r = Ge(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0) } var Ue = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ue.hasOwnProperty("ReactCurrentDispatcher") || (Ue.ReactCurrentDispatcher = { current: null }); var We = /^(.*)[\\\/]/,
    qe = "function" == typeof Symbol && Symbol.for,
    Ye = qe ? Symbol.for("react.element") : 60103,
    $e = qe ? Symbol.for("react.portal") : 60106,
    Ke = qe ? Symbol.for("react.fragment") : 60107,
    Xe = qe ? Symbol.for("react.strict_mode") : 60108,
    Qe = qe ? Symbol.for("react.profiler") : 60114,
    Je = qe ? Symbol.for("react.provider") : 60109,
    Ze = qe ? Symbol.for("react.context") : 60110,
    et = qe ? Symbol.for("react.concurrent_mode") : 60111,
    tt = qe ? Symbol.for("react.forward_ref") : 60112,
    nt = qe ? Symbol.for("react.suspense") : 60113,
    rt = qe ? Symbol.for("react.memo") : 60115,
    it = qe ? Symbol.for("react.lazy") : 60116,
    at = "function" == typeof Symbol && Symbol.iterator;

  function st(e) { return null === e || "object" != typeof e ? null : "function" == typeof(e = at && e[at] || e["@@iterator"]) ? e : null }

  function ot(e) { if (null == e) return null; if ("function" == typeof e) return e.displayName || e.name || null; if ("string" == typeof e) return e; switch (e) {
      case et:
        return "ConcurrentMode";
      case Ke:
        return "Fragment";
      case $e:
        return "Portal";
      case Qe:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case nt:
        return "Suspense" } if ("object" == typeof e) switch (e.$$typeof) {
      case Ze:
        return "Context.Consumer";
      case Je:
        return "Context.Provider";
      case tt:
        var t = e.render; return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
      case rt:
        return ot(e.type);
      case it:
        if (e = 1 === e._status ? e._result : null) return ot(e) }
    return null }

  function lt(e) { var t = "";
    do { e: switch (e.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var n = ""; break e;
        default:
          var r = e._debugOwner,
            i = e._debugSource,
            a = ot(e.type);
          n = null, r && (n = ot(r.type)), r = a, a = "", i ? a = " (at " + i.fileName.replace(We, "") + ":" + i.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + a } t += n, e = e.return } while (e); return t } var ht = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    pt = Object.prototype.hasOwnProperty,
    ct = {},
    ut = {};

  function ft(e, t, n, r, i) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t } var dt = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { dt[e] = new ft(e, 0, !1, e, null) }), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
  ].forEach(function(e) { var t = e[0];
    dt[t] = new ft(t, 1, !1, e[1], null) }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { dt[e] = new ft(e, 2, !1, e.toLowerCase(), null) }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { dt[e] = new ft(e, 2, !1, e, null) }), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { dt[e] = new ft(e, 3, !1, e.toLowerCase(), null) }), ["checked", "multiple", "muted", "selected"].forEach(function(e) { dt[e] = new ft(e, 3, !0, e, null) }), ["capture", "download"].forEach(function(e) { dt[e] = new ft(e, 4, !1, e, null) }), ["cols", "rows", "size", "span"].forEach(function(e) { dt[e] = new ft(e, 6, !1, e, null) }), ["rowSpan", "start"].forEach(function(e) { dt[e] = new ft(e, 5, !1, e.toLowerCase(), null) }); var mt = /[\-:]([a-z])/g;

  function gt(e) { return e[1].toUpperCase() }

  function yt(e, t, n, r) { var i = dt.hasOwnProperty(t) ? dt[t] : null;
    (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) { if (null == t || function(e, t, n, r) { if (null !== n && 0 === n.type) return !1; switch (typeof t) {
            case "function":
            case "symbol":
              return !0;
            case "boolean":
              return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default:
              return !1 } }(e, t, n, r)) return !0; if (r) return !1; if (null !== n) switch (n.type) {
        case 3:
          return !t;
        case 4:
          return !1 === t;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t }
      return !1 }(t, n, i, r) && (n = null), r || null === i ? function(e) { return !!pt.call(ut, e) || !pt.call(ct, e) && (ht.test(e) ? ut[e] = !0 : (ct[e] = !0, !1)) }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))) }

  function vt(e) { switch (typeof e) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return e;
      default:
        return "" } }

  function bt(e, t) { var n = t.checked; return i({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }) }

  function xt(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    n = vt(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value } }

  function Et(e, t) { null != (t = t.checked) && yt(e, "checked", t, !1) }

  function kt(e, t) { Et(e, t); var n = vt(t.value),
      r = t.type; if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
    t.hasOwnProperty("value") ? wt(e, t.type, n) : t.hasOwnProperty("defaultValue") && wt(e, t.type, vt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked) }

  function _t(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) { var r = t.type; if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n) }

  function wt(e, t, n) { "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) { var t = e.replace(mt, gt);
    dt[t] = new ft(t, 1, !1, e, null) }), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) { var t = e.replace(mt, gt);
    dt[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink") }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) { var t = e.replace(mt, gt);
    dt[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace") }), ["tabIndex", "crossOrigin"].forEach(function(e) { dt[e] = new ft(e, 1, !1, e.toLowerCase(), null) }); var St = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };

  function Ct(e, t, n) { return (e = le.getPooled(St.change, e, t, n)).type = "change", Ae(n), U(e), e } var Pt = null,
    Tt = null;

  function Dt(e) { F(e) }

  function At(e) { if (He(B(e))) return e }

  function Ft(e, t) { if ("change" === e) return t } var Mt = !1;

  function It() { Pt && (Pt.detachEvent("onpropertychange", Rt), Tt = Pt = null) }

  function Rt(e) { "value" === e.propertyName && At(Tt) && Ne(Dt, e = Ct(Tt, e, Oe(e))) }

  function zt(e, t, n) { "focus" === e ? (It(), Tt = n, (Pt = t).attachEvent("onpropertychange", Rt)) : "blur" === e && It() }

  function Nt(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e) return At(Tt) }

  function Bt(e, t) { if ("click" === e) return At(t) }

  function Vt(e, t) { if ("input" === e || "change" === e) return At(t) } W && (Mt = Le("input") && (!document.documentMode || 9 < document.documentMode)); var Ot = { eventTypes: St, _isInputEventSupported: Mt, extractEvents: function(e, t, n, r) { var i = t ? B(t) : window,
          a = void 0,
          s = void 0,
          o = i.nodeName && i.nodeName.toLowerCase(); if ("select" === o || "input" === o && "file" === i.type ? a = Ft : Ve(i) ? Mt ? a = Vt : (a = Nt, s = zt) : (o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (a = Bt), a && (a = a(e, t))) return Ct(a, n, r);
        s && s(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && wt(i, "number", i.value) } },
    Lt = le.extend({ view: null, detail: null }),
    Gt = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

  function jt(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = Gt[e]) && !!t[e] }

  function Ht() { return jt } var Ut = 0,
    Wt = 0,
    qt = !1,
    Yt = !1,
    $t = Lt.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Ht, button: null, buttons: null, relatedTarget: function(e) { return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement) }, movementX: function(e) { if ("movementX" in e) return e.movementX; var t = Ut; return Ut = e.screenX, qt ? "mousemove" === e.type ? e.screenX - t : 0 : (qt = !0, 0) }, movementY: function(e) { if ("movementY" in e) return e.movementY; var t = Wt; return Wt = e.screenY, Yt ? "mousemove" === e.type ? e.screenY - t : 0 : (Yt = !0, 0) } }),
    Kt = $t.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }),
    Xt = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] } },
    Qt = { eventTypes: Xt, extractEvents: function(e, t, n, r) { var i = "mouseover" === e || "pointerover" === e,
          a = "mouseout" === e || "pointerout" === e; if (i && (n.relatedTarget || n.fromElement) || !a && !i) return null; if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, a ? (a = t, t = (t = n.relatedTarget || n.toElement) ? z(t) : null) : a = null, a === t) return null; var s = void 0,
          o = void 0,
          l = void 0,
          h = void 0; "mouseout" === e || "mouseover" === e ? (s = $t, o = Xt.mouseLeave, l = Xt.mouseEnter, h = "mouse") : "pointerout" !== e && "pointerover" !== e || (s = Kt, o = Xt.pointerLeave, l = Xt.pointerEnter, h = "pointer"); var p = null == a ? i : B(a); if (i = null == t ? i : B(t), (e = s.getPooled(o, a, n, r)).type = h + "leave", e.target = p, e.relatedTarget = i, (n = s.getPooled(l, t, n, r)).type = h + "enter", n.target = i, n.relatedTarget = p, r = t, a && r) e: { for (i = r, h = 0, s = t = a; s; s = O(s)) h++; for (s = 0, l = i; l; l = O(l)) s++; for (; 0 < h - s;) t = O(t), h--; for (; 0 < s - h;) i = O(i), s--; for (; h--;) { if (t === i || t === i.alternate) break e;
            t = O(t), i = O(i) } t = null }
        else t = null; for (i = t, t = []; a && a !== i && (null === (h = a.alternate) || h !== i);) t.push(a), a = O(a); for (a = []; r && r !== i && (null === (h = r.alternate) || h !== i);) a.push(r), r = O(r); for (r = 0; r < t.length; r++) j(t[r], "bubbled", e); for (r = a.length; 0 < r--;) j(a[r], "captured", n); return [e, n] } };

  function Jt(e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t } var Zt = Object.prototype.hasOwnProperty;

  function en(e, t) { if (Jt(e, t)) return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1; var n = Object.keys(e),
      r = Object.keys(t); if (n.length !== r.length) return !1; for (r = 0; r < n.length; r++)
      if (!Zt.call(t, n[r]) || !Jt(e[n[r]], t[n[r]])) return !1; return !0 }

  function tn(e) { var t = e; if (e.alternate)
      for (; t.return;) t = t.return;
    else { if (0 != (2 & t.effectTag)) return 1; for (; t.return;)
        if (0 != (2 & (t = t.return).effectTag)) return 1 } return 3 === t.tag ? 2 : 3 }

  function nn(e) { 2 !== tn(e) && s("188") }

  function rn(e) { if (!(e = function(e) { var t = e.alternate; if (!t) return 3 === (t = tn(e)) && s("188"), 1 === t ? null : e; for (var n = e, r = t;;) { var i = n.return,
            a = i ? i.alternate : null; if (!i || !a) break; if (i.child === a.child) { for (var o = i.child; o;) { if (o === n) return nn(i), e; if (o === r) return nn(i), t;
              o = o.sibling } s("188") } if (n.return !== r.return) n = i, r = a;
          else { o = !1; for (var l = i.child; l;) { if (l === n) { o = !0, n = i, r = a; break } if (l === r) { o = !0, r = i, n = a; break } l = l.sibling } if (!o) { for (l = a.child; l;) { if (l === n) { o = !0, n = a, r = i; break } if (l === r) { o = !0, r = a, n = i; break } l = l.sibling } o || s("189") } } n.alternate !== r && s("190") } return 3 !== n.tag && s("188"), n.stateNode.current === n ? e : t }(e))) return null; for (var t = e;;) { if (5 === t.tag || 6 === t.tag) return t; if (t.child) t.child.return = t, t = t.child;
      else { if (t === e) break; for (; !t.sibling;) { if (!t.return || t.return === e) return null;
          t = t.return } t.sibling.return = t.return, t = t.sibling } } return null } var an = le.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
    sn = le.extend({ clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    on = Lt.extend({ relatedTarget: null });

  function ln(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0 } var hn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    pn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    cn = Lt.extend({ key: function(e) { if (e.key) { var t = hn[e.key] || e.key; if ("Unidentified" !== t) return t } return "keypress" === e.type ? 13 === (e = ln(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? pn[e.keyCode] || "Unidentified" : "" }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Ht, charCode: function(e) { return "keypress" === e.type ? ln(e) : 0 }, keyCode: function(e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 }, which: function(e) { return "keypress" === e.type ? ln(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 } }),
    un = $t.extend({ dataTransfer: null }),
    fn = Lt.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Ht }),
    dn = le.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
    mn = $t.extend({ deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: null, deltaMode: null }),
    gn = [
      ["abort", "abort"],
      [Q, "animationEnd"],
      [J, "animationIteration"],
      [Z, "animationStart"],
      ["canplay", "canPlay"],
      ["canplaythrough", "canPlayThrough"],
      ["drag", "drag"],
      ["dragenter", "dragEnter"],
      ["dragexit", "dragExit"],
      ["dragleave", "dragLeave"],
      ["dragover", "dragOver"],
      ["durationchange", "durationChange"],
      ["emptied", "emptied"],
      ["encrypted", "encrypted"],
      ["ended", "ended"],
      ["error", "error"],
      ["gotpointercapture", "gotPointerCapture"],
      ["load", "load"],
      ["loadeddata", "loadedData"],
      ["loadedmetadata", "loadedMetadata"],
      ["loadstart", "loadStart"],
      ["lostpointercapture", "lostPointerCapture"],
      ["mousemove", "mouseMove"],
      ["mouseout", "mouseOut"],
      ["mouseover", "mouseOver"],
      ["playing", "playing"],
      ["pointermove", "pointerMove"],
      ["pointerout", "pointerOut"],
      ["pointerover", "pointerOver"],
      ["progress", "progress"],
      ["scroll", "scroll"],
      ["seeking", "seeking"],
      ["stalled", "stalled"],
      ["suspend", "suspend"],
      ["timeupdate", "timeUpdate"],
      ["toggle", "toggle"],
      ["touchmove", "touchMove"],
      [ee, "transitionEnd"],
      ["waiting", "waiting"],
      ["wheel", "wheel"]
    ],
    yn = {},
    vn = {};

  function bn(e, t) { var n = e[0],
      r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
    t = { phasedRegistrationNames: { bubbled: r, captured: r + "Capture" }, dependencies: [n], isInteractive: t }, yn[e] = t, vn[n] = t } [
    ["blur", "blur"],
    ["cancel", "cancel"],
    ["click", "click"],
    ["close", "close"],
    ["contextmenu", "contextMenu"],
    ["copy", "copy"],
    ["cut", "cut"],
    ["auxclick", "auxClick"],
    ["dblclick", "doubleClick"],
    ["dragend", "dragEnd"],
    ["dragstart", "dragStart"],
    ["drop", "drop"],
    ["focus", "focus"],
    ["input", "input"],
    ["invalid", "invalid"],
    ["keydown", "keyDown"],
    ["keypress", "keyPress"],
    ["keyup", "keyUp"],
    ["mousedown", "mouseDown"],
    ["mouseup", "mouseUp"],
    ["paste", "paste"],
    ["pause", "pause"],
    ["play", "play"],
    ["pointercancel", "pointerCancel"],
    ["pointerdown", "pointerDown"],
    ["pointerup", "pointerUp"],
    ["ratechange", "rateChange"],
    ["reset", "reset"],
    ["seeked", "seeked"],
    ["submit", "submit"],
    ["touchcancel", "touchCancel"],
    ["touchend", "touchEnd"],
    ["touchstart", "touchStart"],
    ["volumechange", "volumeChange"]
  ].forEach(function(e) { bn(e, !0) }), gn.forEach(function(e) { bn(e, !1) }); var xn = { eventTypes: yn, isInteractiveTopLevelEventType: function(e) { return void 0 !== (e = vn[e]) && !0 === e.isInteractive }, extractEvents: function(e, t, n, r) { var i = vn[e]; if (!i) return null; switch (e) {
          case "keypress":
            if (0 === ln(n)) return null;
          case "keydown":
          case "keyup":
            e = cn; break;
          case "blur":
          case "focus":
            e = on; break;
          case "click":
            if (2 === n.button) return null;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            e = $t; break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            e = un; break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            e = fn; break;
          case Q:
          case J:
          case Z:
            e = an; break;
          case ee:
            e = dn; break;
          case "scroll":
            e = Lt; break;
          case "wheel":
            e = mn; break;
          case "copy":
          case "cut":
          case "paste":
            e = sn; break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            e = Kt; break;
          default:
            e = le } return U(t = e.getPooled(i, t, n, r)), t } },
    En = xn.isInteractiveTopLevelEventType,
    kn = [];

  function _n(e) { var t = e.targetInst,
      n = t;
    do { if (!n) { e.ancestors.push(n); break } var r; for (r = n; r.return;) r = r.return; if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
      e.ancestors.push(n), n = z(r) } while (n); for (n = 0; n < e.ancestors.length; n++) { t = e.ancestors[n]; var i = Oe(e.nativeEvent);
      r = e.topLevelType; for (var a = e.nativeEvent, s = null, o = 0; o < y.length; o++) { var l = y[o];
        l && (l = l.extractEvents(r, t, a, i)) && (s = S(s, l)) } F(s) } } var wn = !0;

  function Sn(e, t) { if (!t) return null; var n = (En(e) ? Pn : Tn).bind(null, e);
    t.addEventListener(e, n, !1) }

  function Cn(e, t) { if (!t) return null; var n = (En(e) ? Pn : Tn).bind(null, e);
    t.addEventListener(e, n, !0) }

  function Pn(e, t) { Ie(Tn, e, t) }

  function Tn(e, t) { if (wn) { var n = Oe(t); if (null === (n = z(n)) || "number" != typeof n.tag || 2 === tn(n) || (n = null), kn.length) { var r = kn.pop();
        r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r } else e = { topLevelType: e, nativeEvent: t, targetInst: n, ancestors: [] }; try { Ne(_n, e) } finally { e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > kn.length && kn.push(e) } } } var Dn = {},
    An = 0,
    Fn = "_reactListenersID" + ("" + Math.random()).slice(2);

  function Mn(e) { return Object.prototype.hasOwnProperty.call(e, Fn) || (e[Fn] = An++, Dn[e[Fn]] = {}), Dn[e[Fn]] }

  function In(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null; try { return e.activeElement || e.body } catch (t) { return e.body } }

  function Rn(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

  function zn(e, t) { var n, r = Rn(e); for (e = 0; r;) { if (3 === r.nodeType) { if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
        e = n } e: { for (; r;) { if (r.nextSibling) { r = r.nextSibling; break e } r = r.parentNode } r = void 0 } r = Rn(r) } }

  function Nn() { for (var e = window, t = In(); t instanceof e.HTMLIFrameElement;) { try { var n = "string" == typeof t.contentWindow.location.href } catch (e) { n = !1 } if (!n) break;
      t = In((e = t.contentWindow).document) } return t }

  function Bn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable) }

  function Vn(e) { var t = Nn(),
      n = e.focusedElem,
      r = e.selectionRange; if (t !== n && n && n.ownerDocument && function e(t, n) { return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))) }(n.ownerDocument.documentElement, n)) { if (null !== r && Bn(n))
        if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) { e = e.getSelection(); var i = n.textContent.length,
          a = Math.min(r.start, i);
        r = void 0 === r.end ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = zn(n, a); var s = zn(n, r);
        i && s && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t))) } for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop }); for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top } } var On = W && "documentMode" in document && 11 >= document.documentMode,
    Ln = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
    Gn = null,
    jn = null,
    Hn = null,
    Un = !1;

  function Wn(e, t) { var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument; return Un || null == Gn || Gn !== In(n) ? null : ("selectionStart" in (n = Gn) && Bn(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : n = { anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }, Hn && en(Hn, n) ? null : (Hn = n, (e = le.getPooled(Ln.select, jn, e, t)).type = "select", e.target = Gn, U(e), e)) } var qn = { eventTypes: Ln, extractEvents: function(e, t, n, r) { var i, a = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument; if (!(i = !a)) { e: { a = Mn(a), i = x.onSelect; for (var s = 0; s < i.length; s++) { var o = i[s]; if (!a.hasOwnProperty(o) || !a[o]) { a = !1; break e } } a = !0 } i = !a } if (i) return null; switch (a = t ? B(t) : window, e) {
        case "focus":
          (Ve(a) || "true" === a.contentEditable) && (Gn = a, jn = t, Hn = null); break;
        case "blur":
          Hn = jn = Gn = null; break;
        case "mousedown":
          Un = !0; break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          return Un = !1, Wn(n, r);
        case "selectionchange":
          if (On) break;
        case "keydown":
        case "keyup":
          return Wn(n, r) } return null } };

  function Yn(e, t) { return e = i({ children: void 0 }, t), (t = function(e) { var t = ""; return r.Children.forEach(e, function(e) { null != e && (t += e) }), t }(t.children)) && (e.children = t), e }

  function $n(e, t, n, r) { if (e = e.options, t) { t = {}; for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0; for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0) } else { for (n = "" + vt(n), t = null, i = 0; i < e.length; i++) { if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
        null !== t || e[i].disabled || (t = e[i]) } null !== t && (t.selected = !0) } }

  function Kn(e, t) { return null != t.dangerouslySetInnerHTML && s("91"), i({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

  function Xn(e, t) { var n = t.value;
    null == n && (n = t.defaultValue, null != (t = t.children) && (null != n && s("92"), Array.isArray(t) && (1 >= t.length || s("93"), t = t[0]), n = t), null == n && (n = "")), e._wrapperState = { initialValue: vt(n) } }

  function Qn(e, t) { var n = vt(t.value),
      r = vt(t.defaultValue);
    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r) }

  function Jn(e) { var t = e.textContent;
    t === e._wrapperState.initialValue && (e.value = t) } D.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), E = V, k = N, _ = B, D.injectEventPluginsByName({ SimpleEventPlugin: xn, EnterLeaveEventPlugin: Qt, ChangeEventPlugin: Ot, SelectEventPlugin: qn, BeforeInputEventPlugin: Se }); var Zn = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };

  function er(e) { switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml" } }

  function tr(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? er(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e } var nr, rr = void 0,
    ir = (nr = function(e, t) { if (e.namespaceURI !== Zn.svg || "innerHTML" in e) e.innerHTML = t;
      else { for ((rr = rr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = rr.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) } }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) { MSApp.execUnsafeLocalFunction(function() { return nr(e, t) }) } : nr);

  function ar(e, t) { if (t) { var n = e.firstChild; if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t) } e.textContent = t } var sr = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    or = ["Webkit", "ms", "Moz", "O"];

  function lr(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || sr.hasOwnProperty(e) && sr[e] ? ("" + t).trim() : t + "px" }

  function hr(e, t) { for (var n in e = e.style, t)
      if (t.hasOwnProperty(n)) { var r = 0 === n.indexOf("--"),
          i = lr(n, t[n], r); "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i } } Object.keys(sr).forEach(function(e) { or.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), sr[t] = sr[e] }) }); var pr = i({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

  function cr(e, t) { t && (pr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && s("137", e, ""), null != t.dangerouslySetInnerHTML && (null != t.children && s("60"), "object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML || s("61")), null != t.style && "object" != typeof t.style && s("62", "")) }

  function ur(e, t) { if (-1 === e.indexOf("-")) return "string" == typeof t.is; switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0 } }

  function fr(e, t) { var n = Mn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
    t = x[t]; for (var r = 0; r < t.length; r++) { var i = t[r]; if (!n.hasOwnProperty(i) || !n[i]) { switch (i) {
          case "scroll":
            Cn("scroll", e); break;
          case "focus":
          case "blur":
            Cn("focus", e), Cn("blur", e), n.blur = !0, n.focus = !0; break;
          case "cancel":
          case "close":
            Le(i) && Cn(i, e); break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === te.indexOf(i) && Sn(i, e) } n[i] = !0 } } }

  function dr() {} var mr = null,
    gr = null;

  function yr(e, t) { switch (e) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!t.autoFocus } return !1 }

  function vr(e, t) { return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html } var br = "function" == typeof setTimeout ? setTimeout : void 0,
    xr = "function" == typeof clearTimeout ? clearTimeout : void 0,
    Er = a.unstable_scheduleCallback,
    kr = a.unstable_cancelCallback;

  function _r(e) { for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling; return e }

  function wr(e) { for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling; return e } new Set; var Sr = [],
    Cr = -1;

  function Pr(e) { 0 > Cr || (e.current = Sr[Cr], Sr[Cr] = null, Cr--) }

  function Tr(e, t) { Sr[++Cr] = e.current, e.current = t } var Dr = {},
    Ar = { current: Dr },
    Fr = { current: !1 },
    Mr = Dr;

  function Ir(e, t) { var n = e.type.contextTypes; if (!n) return Dr; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext; var i, a = {}; for (i in n) a[i] = t[i]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a }

  function Rr(e) { return null != (e = e.childContextTypes) }

  function zr(e) { Pr(Fr), Pr(Ar) }

  function Nr(e) { Pr(Fr), Pr(Ar) }

  function Br(e, t, n) { Ar.current !== Dr && s("168"), Tr(Ar, t), Tr(Fr, n) }

  function Vr(e, t, n) { var r = e.stateNode; if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n; for (var a in r = r.getChildContext()) a in e || s("108", ot(t) || "Unknown", a); return i({}, n, r) }

  function Or(e) { var t = e.stateNode; return t = t && t.__reactInternalMemoizedMergedChildContext || Dr, Mr = Ar.current, Tr(Ar, t), Tr(Fr, Fr.current), !0 }

  function Lr(e, t, n) { var r = e.stateNode;
    r || s("169"), n ? (t = Vr(e, t, Mr), r.__reactInternalMemoizedMergedChildContext = t, Pr(Fr), Pr(Ar), Tr(Ar, t)) : Pr(Fr), Tr(Fr, n) } var Gr = null,
    jr = null;

  function Hr(e) { return function(t) { try { return e(t) } catch (e) {} } }

  function Ur(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null }

  function Wr(e, t, n, r) { return new Ur(e, t, n, r) }

  function qr(e) { return !(!(e = e.prototype) || !e.isReactComponent) }

  function Yr(e, t) { var n = e.alternate; return null === n ? ((n = Wr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.contextDependencies = e.contextDependencies, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

  function $r(e, t, n, r, i, a) { var o = 2; if (r = e, "function" == typeof e) qr(e) && (o = 1);
    else if ("string" == typeof e) o = 5;
    else e: switch (e) {
      case Ke:
        return Kr(n.children, i, a, t);
      case et:
        return Xr(n, 3 | i, a, t);
      case Xe:
        return Xr(n, 2 | i, a, t);
      case Qe:
        return (e = Wr(12, n, t, 4 | i)).elementType = Qe, e.type = Qe, e.expirationTime = a, e;
      case nt:
        return (e = Wr(13, n, t, i)).elementType = nt, e.type = nt, e.expirationTime = a, e;
      default:
        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
          case Je:
            o = 10; break e;
          case Ze:
            o = 9; break e;
          case tt:
            o = 11; break e;
          case rt:
            o = 14; break e;
          case it:
            o = 16, r = null; break e } s("130", null == e ? e : typeof e, "") }
    return (t = Wr(o, n, t, i)).elementType = e, t.type = r, t.expirationTime = a, t }

  function Kr(e, t, n, r) { return (e = Wr(7, e, r, t)).expirationTime = n, e }

  function Xr(e, t, n, r) { return e = Wr(8, e, r, t), t = 0 == (1 & t) ? Xe : et, e.elementType = t, e.type = t, e.expirationTime = n, e }

  function Qr(e, t, n) { return (e = Wr(6, e, null, t)).expirationTime = n, e }

  function Jr(e, t, n) { return (t = Wr(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

  function Zr(e, t) { e.didError = !1; var n = e.earliestPendingTime;
    0 === n ? e.earliestPendingTime = e.latestPendingTime = t : n < t ? e.earliestPendingTime = t : e.latestPendingTime > t && (e.latestPendingTime = t), ni(t, e) }

  function ei(e, t) { e.didError = !1, e.latestPingedTime >= t && (e.latestPingedTime = 0); var n = e.earliestPendingTime,
      r = e.latestPendingTime;
    n === t ? e.earliestPendingTime = r === t ? e.latestPendingTime = 0 : r : r === t && (e.latestPendingTime = n), n = e.earliestSuspendedTime, r = e.latestSuspendedTime, 0 === n ? e.earliestSuspendedTime = e.latestSuspendedTime = t : n < t ? e.earliestSuspendedTime = t : r > t && (e.latestSuspendedTime = t), ni(t, e) }

  function ti(e, t) { var n = e.earliestPendingTime; return n > t && (t = n), (e = e.earliestSuspendedTime) > t && (t = e), t }

  function ni(e, t) { var n = t.earliestSuspendedTime,
      r = t.latestSuspendedTime,
      i = t.earliestPendingTime,
      a = t.latestPingedTime;
    0 === (i = 0 !== i ? i : a) && (0 === e || r < e) && (i = r), 0 !== (e = i) && n > e && (e = n), t.nextExpirationTimeToWorkOn = i, t.expirationTime = e }

  function ri(e, t) { if (e && e.defaultProps)
      for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]); return t } var ii = (new r.Component).refs;

  function ai(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n) } var si = { isMounted: function(e) { return !!(e = e._reactInternalFiber) && 2 === tn(e) }, enqueueSetState: function(e, t, n) { e = e._reactInternalFiber; var r = ko(),
        i = Ka(r = $s(r, e));
      i.payload = t, null != n && (i.callback = n), js(), Qa(e, i), Qs(e, r) }, enqueueReplaceState: function(e, t, n) { e = e._reactInternalFiber; var r = ko(),
        i = Ka(r = $s(r, e));
      i.tag = Ha, i.payload = t, null != n && (i.callback = n), js(), Qa(e, i), Qs(e, r) }, enqueueForceUpdate: function(e, t) { e = e._reactInternalFiber; var n = ko(),
        r = Ka(n = $s(n, e));
      r.tag = Ua, null != t && (r.callback = t), js(), Qa(e, r), Qs(e, n) } };

  function oi(e, t, n, r, i, a, s) { return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, s) : !t.prototype || !t.prototype.isPureReactComponent || (!en(n, r) || !en(i, a)) }

  function li(e, t, n) { var r = !1,
      i = Dr,
      a = t.contextType; return "object" == typeof a && null !== a ? a = Ga(a) : (i = Rr(t) ? Mr : Ar.current, a = (r = null != (r = t.contextTypes)) ? Ir(e, i) : Dr), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = si, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t }

  function hi(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && si.enqueueReplaceState(t, t.state, null) }

  function pi(e, t, n, r) { var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = ii; var a = t.contextType; "object" == typeof a && null !== a ? i.context = Ga(a) : (a = Rr(t) ? Mr : Ar.current, i.context = Ir(e, a)), null !== (a = e.updateQueue) && (ts(e, a, n, i, r), i.state = e.memoizedState), "function" == typeof(a = t.getDerivedStateFromProps) && (ai(e, t, a, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && si.enqueueReplaceState(i, i.state, null), null !== (a = e.updateQueue) && (ts(e, a, n, i, r), i.state = e.memoizedState)), "function" == typeof i.componentDidMount && (e.effectTag |= 4) } var ci = Array.isArray;

  function ui(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) { if (n._owner) { n = n._owner; var r = void 0;
        n && (1 !== n.tag && s("309"), r = n.stateNode), r || s("147", e); var i = "" + e; return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) { var t = r.refs;
          t === ii && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e })._stringRef = i, t) } "string" != typeof e && s("284"), n._owner || s("290", e) } return e }

  function fi(e, t) { "textarea" !== e.type && s("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "") }

  function di(e) {
    function t(t, n) { if (e) { var r = t.lastEffect;
        null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8 } }

    function n(n, r) { if (!e) return null; for (; null !== r;) t(n, r), r = r.sibling; return null }

    function r(e, t) { for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e }

    function i(e, t, n) { return (e = Yr(e, t)).index = 0, e.sibling = null, e }

    function a(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n }

    function o(t) { return e && null === t.alternate && (t.effectTag = 2), t }

    function l(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Qr(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t) }

    function h(e, t, n, r) { return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = ui(e, t, n), r.return = e, r) : ((r = $r(n.type, n.key, n.props, null, e.mode, r)).ref = ui(e, t, n), r.return = e, r) }

    function p(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Jr(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t) }

    function c(e, t, n, r, a) { return null === t || 7 !== t.tag ? ((t = Kr(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t) }

    function u(e, t, n) { if ("string" == typeof t || "number" == typeof t) return (t = Qr("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) { switch (t.$$typeof) {
          case Ye:
            return (n = $r(t.type, t.key, t.props, null, e.mode, n)).ref = ui(e, null, t), n.return = e, n;
          case $e:
            return (t = Jr(t, e.mode, n)).return = e, t } if (ci(t) || st(t)) return (t = Kr(t, e.mode, n, null)).return = e, t;
        fi(e, t) } return null }

    function f(e, t, n, r) { var i = null !== t ? t.key : null; if ("string" == typeof n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r); if ("object" == typeof n && null !== n) { switch (n.$$typeof) {
          case Ye:
            return n.key === i ? n.type === Ke ? c(e, t, n.props.children, r, i) : h(e, t, n, r) : null;
          case $e:
            return n.key === i ? p(e, t, n, r) : null } if (ci(n) || st(n)) return null !== i ? null : c(e, t, n, r, null);
        fi(e, n) } return null }

    function d(e, t, n, r, i) { if ("string" == typeof r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i); if ("object" == typeof r && null !== r) { switch (r.$$typeof) {
          case Ye:
            return e = e.get(null === r.key ? n : r.key) || null, r.type === Ke ? c(t, e, r.props.children, i, r.key) : h(t, e, r, i);
          case $e:
            return p(t, e = e.get(null === r.key ? n : r.key) || null, r, i) } if (ci(r) || st(r)) return c(t, e = e.get(n) || null, r, i, null);
        fi(t, r) } return null }

    function m(i, s, o, l) { for (var h = null, p = null, c = s, m = s = 0, g = null; null !== c && m < o.length; m++) { c.index > m ? (g = c, c = null) : g = c.sibling; var y = f(i, c, o[m], l); if (null === y) { null === c && (c = g); break } e && c && null === y.alternate && t(i, c), s = a(y, s, m), null === p ? h = y : p.sibling = y, p = y, c = g } if (m === o.length) return n(i, c), h; if (null === c) { for (; m < o.length; m++)(c = u(i, o[m], l)) && (s = a(c, s, m), null === p ? h = c : p.sibling = c, p = c); return h } for (c = r(i, c); m < o.length; m++)(g = d(c, i, m, o[m], l)) && (e && null !== g.alternate && c.delete(null === g.key ? m : g.key), s = a(g, s, m), null === p ? h = g : p.sibling = g, p = g); return e && c.forEach(function(e) { return t(i, e) }), h }

    function g(i, o, l, h) { var p = st(l); "function" != typeof p && s("150"), null == (l = p.call(l)) && s("151"); for (var c = p = null, m = o, g = o = 0, y = null, v = l.next(); null !== m && !v.done; g++, v = l.next()) { m.index > g ? (y = m, m = null) : y = m.sibling; var b = f(i, m, v.value, h); if (null === b) { m || (m = y); break } e && m && null === b.alternate && t(i, m), o = a(b, o, g), null === c ? p = b : c.sibling = b, c = b, m = y } if (v.done) return n(i, m), p; if (null === m) { for (; !v.done; g++, v = l.next()) null !== (v = u(i, v.value, h)) && (o = a(v, o, g), null === c ? p = v : c.sibling = v, c = v); return p } for (m = r(i, m); !v.done; g++, v = l.next()) null !== (v = d(m, i, g, v.value, h)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), o = a(v, o, g), null === c ? p = v : c.sibling = v, c = v); return e && m.forEach(function(e) { return t(i, e) }), p } return function(e, r, a, l) { var h = "object" == typeof a && null !== a && a.type === Ke && null === a.key;
      h && (a = a.props.children); var p = "object" == typeof a && null !== a; if (p) switch (a.$$typeof) {
        case Ye:
          e: { for (p = a.key, h = r; null !== h;) { if (h.key === p) { if (7 === h.tag ? a.type === Ke : h.elementType === a.type) { n(e, h.sibling), (r = i(h, a.type === Ke ? a.props.children : a.props)).ref = ui(e, h, a), r.return = e, e = r; break e } n(e, h); break } t(e, h), h = h.sibling } a.type === Ke ? ((r = Kr(a.props.children, e.mode, l, a.key)).return = e, e = r) : ((l = $r(a.type, a.key, a.props, null, e.mode, l)).ref = ui(e, r, a), l.return = e, e = l) }
          return o(e);
        case $e:
          e: { for (h = a.key; null !== r;) { if (r.key === h) { if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) { n(e, r.sibling), (r = i(r, a.children || [])).return = e, e = r; break e } n(e, r); break } t(e, r), r = r.sibling }(r = Jr(a, e.mode, l)).return = e, e = r }
          return o(e) }
      if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, a)).return = e, e = r) : (n(e, r), (r = Qr(a, e.mode, l)).return = e, e = r), o(e); if (ci(a)) return m(e, r, a, l); if (st(a)) return g(e, r, a, l); if (p && fi(e, a), void 0 === a && !h) switch (e.tag) {
        case 1:
        case 0:
          s("152", (l = e.type).displayName || l.name || "Component") }
      return n(e, r) } } var mi = di(!0),
    gi = di(!1),
    yi = {},
    vi = { current: yi },
    bi = { current: yi },
    xi = { current: yi };

  function Ei(e) { return e === yi && s("174"), e }

  function ki(e, t) { Tr(xi, t), Tr(bi, e), Tr(vi, yi); var n = t.nodeType; switch (n) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : tr(null, ""); break;
      default:
        t = tr(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName) } Pr(vi), Tr(vi, t) }

  function _i(e) { Pr(vi), Pr(bi), Pr(xi) }

  function wi(e) { Ei(xi.current); var t = Ei(vi.current),
      n = tr(t, e.type);
    t !== n && (Tr(bi, e), Tr(vi, n)) }

  function Si(e) { bi.current === e && (Pr(vi), Pr(bi)) } var Ci = 0,
    Pi = 2,
    Ti = 4,
    Di = 8,
    Ai = 16,
    Fi = 32,
    Mi = 64,
    Ii = 128,
    Ri = Ue.ReactCurrentDispatcher,
    zi = 0,
    Ni = null,
    Bi = null,
    Vi = null,
    Oi = null,
    Li = null,
    Gi = null,
    ji = 0,
    Hi = null,
    Ui = 0,
    Wi = !1,
    qi = null,
    Yi = 0;

  function $i() { s("321") }

  function Ki(e, t) { if (null === t) return !1; for (var n = 0; n < t.length && n < e.length; n++)
      if (!Jt(e[n], t[n])) return !1; return !0 }

  function Xi(e, t, n, r, i, a) { if (zi = a, Ni = t, Vi = null !== e ? e.memoizedState : null, Ri.current = null === Vi ? ha : pa, t = n(r, i), Wi) { do { Wi = !1, Yi += 1, Vi = null !== e ? e.memoizedState : null, Gi = Oi, Hi = Li = Bi = null, Ri.current = pa, t = n(r, i) } while (Wi);
      qi = null, Yi = 0 } return Ri.current = la, (e = Ni).memoizedState = Oi, e.expirationTime = ji, e.updateQueue = Hi, e.effectTag |= Ui, e = null !== Bi && null !== Bi.next, zi = 0, Gi = Li = Oi = Vi = Bi = Ni = null, ji = 0, Hi = null, Ui = 0, e && s("300"), t }

  function Qi() { Ri.current = la, zi = 0, Gi = Li = Oi = Vi = Bi = Ni = null, ji = 0, Hi = null, Ui = 0, Wi = !1, qi = null, Yi = 0 }

  function Ji() { var e = { memoizedState: null, baseState: null, queue: null, baseUpdate: null, next: null }; return null === Li ? Oi = Li = e : Li = Li.next = e, Li }

  function Zi() { if (null !== Gi) Gi = (Li = Gi).next, Vi = null !== (Bi = Vi) ? Bi.next : null;
    else { null === Vi && s("310"); var e = { memoizedState: (Bi = Vi).memoizedState, baseState: Bi.baseState, queue: Bi.queue, baseUpdate: Bi.baseUpdate, next: null };
      Li = null === Li ? Oi = e : Li.next = e, Vi = Bi.next } return Li }

  function ea(e, t) { return "function" == typeof t ? t(e) : t }

  function ta(e) { var t = Zi(),
      n = t.queue; if (null === n && s("311"), n.lastRenderedReducer = e, 0 < Yi) { var r = n.dispatch; if (null !== qi) { var i = qi.get(n); if (void 0 !== i) { qi.delete(n); var a = t.memoizedState;
          do { a = e(a, i.action), i = i.next } while (null !== i); return Jt(a, t.memoizedState) || (Ea = !0), t.memoizedState = a, t.baseUpdate === n.last && (t.baseState = a), n.lastRenderedState = a, [a, r] } } return [t.memoizedState, r] } r = n.last; var o = t.baseUpdate; if (a = t.baseState, null !== o ? (null !== r && (r.next = null), r = o.next) : r = null !== r ? r.next : null, null !== r) { var l = i = null,
        h = r,
        p = !1;
      do { var c = h.expirationTime;
        c < zi ? (p || (p = !0, l = o, i = a), c > ji && (ji = c)) : a = h.eagerReducer === e ? h.eagerState : e(a, h.action), o = h, h = h.next } while (null !== h && h !== r);
      p || (l = o, i = a), Jt(a, t.memoizedState) || (Ea = !0), t.memoizedState = a, t.baseUpdate = l, t.baseState = i, n.lastRenderedState = a } return [t.memoizedState, n.dispatch] }

  function na(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === Hi ? (Hi = { lastEffect: null }).lastEffect = e.next = e : null === (t = Hi.lastEffect) ? Hi.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, Hi.lastEffect = e), e }

  function ra(e, t, n, r) { var i = Ji();
    Ui |= e, i.memoizedState = na(t, n, void 0, void 0 === r ? null : r) }

  function ia(e, t, n, r) { var i = Zi();
    r = void 0 === r ? null : r; var a = void 0; if (null !== Bi) { var s = Bi.memoizedState; if (a = s.destroy, null !== r && Ki(r, s.deps)) return void na(Ci, n, a, r) } Ui |= e, i.memoizedState = na(t, n, a, r) }

  function aa(e, t) { return "function" == typeof t ? (e = e(), t(e), function() { t(null) }) : null != t ? (e = e(), t.current = e, function() { t.current = null }) : void 0 }

  function sa() {}

  function oa(e, t, n) { 25 > Yi || s("301"); var r = e.alternate; if (e === Ni || null !== r && r === Ni)
      if (Wi = !0, e = { expirationTime: zi, action: n, eagerReducer: null, eagerState: null, next: null }, null === qi && (qi = new Map), void 0 === (n = qi.get(t))) qi.set(t, e);
      else { for (t = n; null !== t.next;) t = t.next;
        t.next = e } else { js(); var i = ko(),
        a = { expirationTime: i = $s(i, e), action: n, eagerReducer: null, eagerState: null, next: null },
        o = t.last; if (null === o) a.next = a;
      else { var l = o.next;
        null !== l && (a.next = l), o.next = a } if (t.last = a, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)) try { var h = t.lastRenderedState,
          p = r(h, n); if (a.eagerReducer = r, a.eagerState = p, Jt(p, h)) return } catch (e) {} Qs(e, i) } } var la = { readContext: Ga, useCallback: $i, useContext: $i, useEffect: $i, useImperativeHandle: $i, useLayoutEffect: $i, useMemo: $i, useReducer: $i, useRef: $i, useState: $i, useDebugValue: $i },
    ha = { readContext: Ga, useCallback: function(e, t) { return Ji().memoizedState = [e, void 0 === t ? null : t], e }, useContext: Ga, useEffect: function(e, t) { return ra(516, Ii | Mi, e, t) }, useImperativeHandle: function(e, t, n) { return n = null != n ? n.concat([e]) : null, ra(4, Ti | Fi, aa.bind(null, t, e), n) }, useLayoutEffect: function(e, t) { return ra(4, Ti | Fi, e, t) }, useMemo: function(e, t) { var n = Ji(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e }, useReducer: function(e, t, n) { var r = Ji(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = { last: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch = oa.bind(null, Ni, e), [r.memoizedState, e] }, useRef: function(e) { return e = { current: e }, Ji().memoizedState = e }, useState: function(e) { var t = Ji(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = { last: null, dispatch: null, lastRenderedReducer: ea, lastRenderedState: e }).dispatch = oa.bind(null, Ni, e), [t.memoizedState, e] }, useDebugValue: sa },
    pa = { readContext: Ga, useCallback: function(e, t) { var n = Zi();
        t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e) }, useContext: Ga, useEffect: function(e, t) { return ia(516, Ii | Mi, e, t) }, useImperativeHandle: function(e, t, n) { return n = null != n ? n.concat([e]) : null, ia(4, Ti | Fi, aa.bind(null, t, e), n) }, useLayoutEffect: function(e, t) { return ia(4, Ti | Fi, e, t) }, useMemo: function(e, t) { var n = Zi();
        t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Ki(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e) }, useReducer: ta, useRef: function() { return Zi().memoizedState }, useState: function(e) { return ta(ea) }, useDebugValue: sa },
    ca = null,
    ua = null,
    fa = !1;

  function da(e, t) { var n = Wr(5, null, null, 0);
    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n }

  function ma(e, t) { switch (e.tag) {
      case 5:
        var n = e.type; return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
      case 6:
        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
      case 13:
      default:
        return !1 } }

  function ga(e) { if (fa) { var t = ua; if (t) { var n = t; if (!ma(e, t)) { if (!(t = _r(n)) || !ma(e, t)) return e.effectTag |= 2, fa = !1, void(ca = e);
          da(ca, n) } ca = e, ua = wr(t) } else e.effectTag |= 2, fa = !1, ca = e } }

  function ya(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;) e = e.return;
    ca = e }

  function va(e) { if (e !== ca) return !1; if (!fa) return ya(e), fa = !0, !1; var t = e.type; if (5 !== e.tag || "head" !== t && "body" !== t && !vr(t, e.memoizedProps))
      for (t = ua; t;) da(e, t), t = _r(t); return ya(e), ua = ca ? _r(e.stateNode) : null, !0 }

  function ba() { ua = ca = null, fa = !1 } var xa = Ue.ReactCurrentOwner,
    Ea = !1;

  function ka(e, t, n, r) { t.child = null === e ? gi(t, null, n, r) : mi(t, e.child, n, r) }

  function _a(e, t, n, r, i) { n = n.render; var a = t.ref; return La(t, i), r = Xi(e, t, n, r, a, i), null === e || Ea ? (t.effectTag |= 1, ka(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Ma(e, t, i)) }

  function wa(e, t, n, r, i, a) { if (null === e) { var s = n.type; return "function" != typeof s || qr(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = $r(n.type, null, r, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, Sa(e, t, s, r, i, a)) } return s = e.child, i < a && (i = s.memoizedProps, (n = null !== (n = n.compare) ? n : en)(i, r) && e.ref === t.ref) ? Ma(e, t, a) : (t.effectTag |= 1, (e = Yr(s, r)).ref = t.ref, e.return = t, t.child = e) }

  function Sa(e, t, n, r, i, a) { return null !== e && en(e.memoizedProps, r) && e.ref === t.ref && (Ea = !1, i < a) ? Ma(e, t, a) : Pa(e, t, n, r, a) }

  function Ca(e, t) { var n = t.ref;
    (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128) }

  function Pa(e, t, n, r, i) { var a = Rr(n) ? Mr : Ar.current; return a = Ir(t, a), La(t, i), n = Xi(e, t, n, r, a, i), null === e || Ea ? (t.effectTag |= 1, ka(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Ma(e, t, i)) }

  function Ta(e, t, n, r, i) { if (Rr(n)) { var a = !0;
      Or(t) } else a = !1; if (La(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), li(t, n, r), pi(t, n, r, i), r = !0;
    else if (null === e) { var s = t.stateNode,
        o = t.memoizedProps;
      s.props = o; var l = s.context,
        h = n.contextType; "object" == typeof h && null !== h ? h = Ga(h) : h = Ir(t, h = Rr(n) ? Mr : Ar.current); var p = n.getDerivedStateFromProps,
        c = "function" == typeof p || "function" == typeof s.getSnapshotBeforeUpdate;
      c || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (o !== r || l !== h) && hi(t, s, r, h), qa = !1; var u = t.memoizedState;
      l = s.state = u; var f = t.updateQueue;
      null !== f && (ts(t, f, r, s, i), l = t.memoizedState), o !== r || u !== l || Fr.current || qa ? ("function" == typeof p && (ai(t, n, p, r), l = t.memoizedState), (o = qa || oi(t, n, o, r, u, l, h)) ? (c || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = h, r = o) : ("function" == typeof s.componentDidMount && (t.effectTag |= 4), r = !1) } else s = t.stateNode, o = t.memoizedProps, s.props = t.type === t.elementType ? o : ri(t.type, o), l = s.context, "object" == typeof(h = n.contextType) && null !== h ? h = Ga(h) : h = Ir(t, h = Rr(n) ? Mr : Ar.current), (c = "function" == typeof(p = n.getDerivedStateFromProps) || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (o !== r || l !== h) && hi(t, s, r, h), qa = !1, l = t.memoizedState, u = s.state = l, null !== (f = t.updateQueue) && (ts(t, f, r, s, i), u = t.memoizedState), o !== r || l !== u || Fr.current || qa ? ("function" == typeof p && (ai(t, n, p, r), u = t.memoizedState), (p = qa || oi(t, n, o, r, l, u, h)) ? (c || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(r, u, h), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, u, h)), "function" == typeof s.componentDidUpdate && (t.effectTag |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof s.componentDidUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = h, r = p) : ("function" != typeof s.componentDidUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), r = !1); return Da(e, t, n, r, a, i) }

  function Da(e, t, n, r, i, a) { Ca(e, t); var s = 0 != (64 & t.effectTag); if (!r && !s) return i && Lr(t, n, !1), Ma(e, t, a);
    r = t.stateNode, xa.current = t; var o = s && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.effectTag |= 1, null !== e && s ? (t.child = mi(t, e.child, null, a), t.child = mi(t, null, o, a)) : ka(e, t, o, a), t.memoizedState = r.state, i && Lr(t, n, !0), t.child }

  function Aa(e) { var t = e.stateNode;
    t.pendingContext ? Br(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Br(0, t.context, !1), ki(e, t.containerInfo) }

  function Fa(e, t, n) { var r = t.mode,
      i = t.pendingProps,
      a = t.memoizedState; if (0 == (64 & t.effectTag)) { a = null; var s = !1 } else a = { timedOutAt: null !== a ? a.timedOutAt : 0 }, s = !0, t.effectTag &= -65; if (null === e)
      if (s) { var o = i.fallback;
        e = Kr(null, r, 0, null), 0 == (1 & t.mode) && (e.child = null !== t.memoizedState ? t.child.child : t.child), r = Kr(o, r, n, null), e.sibling = r, (n = e).return = r.return = t } else n = r = gi(t, null, i.children, n);
    else null !== e.memoizedState ? (o = (r = e.child).sibling, s ? (n = i.fallback, i = Yr(r, r.pendingProps), 0 == (1 & t.mode) && ((s = null !== t.memoizedState ? t.child.child : t.child) !== r.child && (i.child = s)), r = i.sibling = Yr(o, n, o.expirationTime), n = i, i.childExpirationTime = 0, n.return = r.return = t) : n = r = mi(t, r.child, i.children, n)) : (o = e.child, s ? (s = i.fallback, (i = Kr(null, r, 0, null)).child = o, 0 == (1 & t.mode) && (i.child = null !== t.memoizedState ? t.child.child : t.child), (r = i.sibling = Kr(s, r, n, null)).effectTag |= 2, n = i, i.childExpirationTime = 0, n.return = r.return = t) : r = n = mi(t, o, i.children, n)), t.stateNode = e.stateNode; return t.memoizedState = a, t.child = n, r }

  function Ma(e, t, n) { if (null !== e && (t.contextDependencies = e.contextDependencies), t.childExpirationTime < n) return null; if (null !== e && t.child !== e.child && s("153"), null !== t.child) { for (n = Yr(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Yr(e, e.pendingProps, e.expirationTime)).return = t;
      n.sibling = null } return t.child }

  function Ia(e, t, n) { var r = t.expirationTime; if (null !== e) { if (e.memoizedProps !== t.pendingProps || Fr.current) Ea = !0;
      else if (r < n) { switch (Ea = !1, t.tag) {
          case 3:
            Aa(t), ba(); break;
          case 5:
            wi(t); break;
          case 1:
            Rr(t.type) && Or(t); break;
          case 4:
            ki(t, t.stateNode.containerInfo); break;
          case 10:
            Va(t, t.memoizedProps.value); break;
          case 13:
            if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? Fa(e, t, n) : null !== (t = Ma(e, t, n)) ? t.sibling : null } return Ma(e, t, n) } } else Ea = !1; switch (t.expirationTime = 0, t.tag) {
      case 2:
        r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps; var i = Ir(t, Ar.current); if (La(t, n), i = Xi(null, t, r, e, i, n), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) { if (t.tag = 1, Qi(), Rr(r)) { var a = !0;
            Or(t) } else a = !1;
          t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null; var o = r.getDerivedStateFromProps; "function" == typeof o && ai(t, r, o, e), i.updater = si, t.stateNode = i, i._reactInternalFiber = t, pi(t, r, e, n), t = Da(null, t, r, !0, a, n) } else t.tag = 0, ka(null, t, i, n), t = t.child; return t;
      case 16:
        switch (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), a = t.pendingProps, e = function(e) { var t = e._result; switch (e._status) {
            case 1:
              return t;
            case 2:
            case 0:
              throw t;
            default:
              switch (e._status = 0, (t = (t = e._ctor)()).then(function(t) { 0 === e._status && (t = t.default, e._status = 1, e._result = t) }, function(t) { 0 === e._status && (e._status = 2, e._result = t) }), e._status) {
                case 1:
                  return e._result;
                case 2:
                  throw e._result } throw e._result = t, t } }(i), t.type = e, i = t.tag = function(e) { if ("function" == typeof e) return qr(e) ? 1 : 0; if (null != e) { if ((e = e.$$typeof) === tt) return 11; if (e === rt) return 14 } return 2 }(e), a = ri(e, a), o = void 0, i) {
          case 0:
            o = Pa(null, t, e, a, n); break;
          case 1:
            o = Ta(null, t, e, a, n); break;
          case 11:
            o = _a(null, t, e, a, n); break;
          case 14:
            o = wa(null, t, e, ri(e.type, a), r, n); break;
          default:
            s("306", e, "") } return o;
      case 0:
        return r = t.type, i = t.pendingProps, Pa(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
      case 1:
        return r = t.type, i = t.pendingProps, Ta(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
      case 3:
        return Aa(t), null === (r = t.updateQueue) && s("282"), i = null !== (i = t.memoizedState) ? i.element : null, ts(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === i ? (ba(), t = Ma(e, t, n)) : (i = t.stateNode, (i = (null === e || null === e.child) && i.hydrate) && (ua = wr(t.stateNode.containerInfo), ca = t, i = fa = !0), i ? (t.effectTag |= 2, t.child = gi(t, null, r, n)) : (ka(e, t, r, n), ba()), t = t.child), t;
      case 5:
        return wi(t), null === e && ga(t), r = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, o = i.children, vr(r, i) ? o = null : null !== a && vr(r, a) && (t.effectTag |= 16), Ca(e, t), 1 !== n && 1 & t.mode && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (ka(e, t, o, n), t = t.child), t;
      case 6:
        return null === e && ga(t), null;
      case 13:
        return Fa(e, t, n);
      case 4:
        return ki(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = mi(t, null, r, n) : ka(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, _a(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
      case 7:
        return ka(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
        return ka(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: { if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, Va(t, a = i.value), null !== o) { var l = o.value; if (0 === (a = Jt(l, a) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(l, a) : 1073741823))) { if (o.children === i.children && !Fr.current) { t = Ma(e, t, n); break e } } else
              for (null !== (l = t.child) && (l.return = t); null !== l;) { var h = l.contextDependencies; if (null !== h) { o = l.child; for (var p = h.first; null !== p;) { if (p.context === r && 0 != (p.observedBits & a)) { 1 === l.tag && ((p = Ka(n)).tag = Ua, Qa(l, p)), l.expirationTime < n && (l.expirationTime = n), null !== (p = l.alternate) && p.expirationTime < n && (p.expirationTime = n), p = n; for (var c = l.return; null !== c;) { var u = c.alternate; if (c.childExpirationTime < p) c.childExpirationTime = p, null !== u && u.childExpirationTime < p && (u.childExpirationTime = p);
                        else { if (!(null !== u && u.childExpirationTime < p)) break;
                          u.childExpirationTime = p } c = c.return } h.expirationTime < n && (h.expirationTime = n); break } p = p.next } } else o = 10 === l.tag && l.type === t.type ? null : l.child; if (null !== o) o.return = l;
                else
                  for (o = l; null !== o;) { if (o === t) { o = null; break } if (null !== (l = o.sibling)) { l.return = o.return, o = l; break } o = o.return } l = o } } ka(e, t, i.children, n), t = t.child }
        return t;
      case 9:
        return i = t.type, r = (a = t.pendingProps).children, La(t, n), r = r(i = Ga(i, a.unstable_observedBits)), t.effectTag |= 1, ka(e, t, r, n), t.child;
      case 14:
        return a = ri(i = t.type, t.pendingProps), wa(e, t, i, a = ri(i.type, a), r, n);
      case 15:
        return Sa(e, t, t.type, t.pendingProps, r, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ri(r, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, Rr(r) ? (e = !0, Or(t)) : e = !1, La(t, n), li(t, r, i), pi(t, r, i, n), Da(null, t, r, !0, e, n) } s("156") } var Ra = { current: null },
    za = null,
    Na = null,
    Ba = null;

  function Va(e, t) { var n = e.type._context;
    Tr(Ra, n._currentValue), n._currentValue = t }

  function Oa(e) { var t = Ra.current;
    Pr(Ra), e.type._context._currentValue = t }

  function La(e, t) { za = e, Ba = Na = null; var n = e.contextDependencies;
    null !== n && n.expirationTime >= t && (Ea = !0), e.contextDependencies = null }

  function Ga(e, t) { return Ba !== e && !1 !== t && 0 !== t && ("number" == typeof t && 1073741823 !== t || (Ba = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, null === Na ? (null === za && s("308"), Na = t, za.contextDependencies = { first: t, expirationTime: 0 }) : Na = Na.next = t), e._currentValue } var ja = 0,
    Ha = 1,
    Ua = 2,
    Wa = 3,
    qa = !1;

  function Ya(e) { return { baseState: e, firstUpdate: null, lastUpdate: null, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null } }

  function $a(e) { return { baseState: e.baseState, firstUpdate: e.firstUpdate, lastUpdate: e.lastUpdate, firstCapturedUpdate: null, lastCapturedUpdate: null, firstEffect: null, lastEffect: null, firstCapturedEffect: null, lastCapturedEffect: null } }

  function Ka(e) { return { expirationTime: e, tag: ja, payload: null, callback: null, next: null, nextEffect: null } }

  function Xa(e, t) { null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t) }

  function Qa(e, t) { var n = e.alternate; if (null === n) { var r = e.updateQueue,
        i = null;
      null === r && (r = e.updateQueue = Ya(e.memoizedState)) } else r = e.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = e.updateQueue = Ya(e.memoizedState), i = n.updateQueue = Ya(n.memoizedState)) : r = e.updateQueue = $a(i) : null === i && (i = n.updateQueue = $a(r));
    null === i || r === i ? Xa(r, t) : null === r.lastUpdate || null === i.lastUpdate ? (Xa(r, t), Xa(i, t)) : (Xa(r, t), i.lastUpdate = t) }

  function Ja(e, t) { var n = e.updateQueue;
    null === (n = null === n ? e.updateQueue = Ya(e.memoizedState) : Za(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t) }

  function Za(e, t) { var n = e.alternate; return null !== n && t === n.updateQueue && (t = e.updateQueue = $a(t)), t }

  function es(e, t, n, r, a, s) { switch (n.tag) {
      case Ha:
        return "function" == typeof(e = n.payload) ? e.call(s, r, a) : e;
      case Wa:
        e.effectTag = -2049 & e.effectTag | 64;
      case ja:
        if (null == (a = "function" == typeof(e = n.payload) ? e.call(s, r, a) : e)) break; return i({}, r, a);
      case Ua:
        qa = !0 } return r }

  function ts(e, t, n, r, i) { qa = !1; for (var a = (t = Za(e, t)).baseState, s = null, o = 0, l = t.firstUpdate, h = a; null !== l;) { var p = l.expirationTime;
      p < i ? (null === s && (s = l, a = h), o < p && (o = p)) : (h = es(e, 0, l, h, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next } for (p = null, l = t.firstCapturedUpdate; null !== l;) { var c = l.expirationTime;
      c < i ? (null === p && (p = l, null === s && (a = h)), o < c && (o = c)) : (h = es(e, 0, l, h, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next } null === s && (t.lastUpdate = null), null === p ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === s && null === p && (a = h), t.baseState = a, t.firstUpdate = s, t.firstCapturedUpdate = p, e.expirationTime = o, e.memoizedState = h }

  function ns(e, t, n) { null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), rs(t.firstEffect, n), t.firstEffect = t.lastEffect = null, rs(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null }

  function rs(e, t) { for (; null !== e;) { var n = e.callback; if (null !== n) { e.callback = null; var r = t; "function" != typeof n && s("191", n), n.call(r) } e = e.nextEffect } }

  function is(e, t) { return { value: e, source: t, stack: lt(t) } }

  function as(e) { e.effectTag |= 4 } var ss = void 0,
    os = void 0,
    ls = void 0,
    hs = void 0;
  ss = function(e, t) { for (var n = t.child; null !== n;) { if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) { n.child.return = n, n = n.child; continue } if (n === t) break; for (; null === n.sibling;) { if (null === n.return || n.return === t) return;
        n = n.return } n.sibling.return = n.return, n = n.sibling } }, os = function() {}, ls = function(e, t, n, r, a) { var s = e.memoizedProps; if (s !== r) { var o = t.stateNode; switch (Ei(vi.current), e = null, n) {
        case "input":
          s = bt(o, s), r = bt(o, r), e = []; break;
        case "option":
          s = Yn(o, s), r = Yn(o, r), e = []; break;
        case "select":
          s = i({}, s, { value: void 0 }), r = i({}, r, { value: void 0 }), e = []; break;
        case "textarea":
          s = Kn(o, s), r = Kn(o, r), e = []; break;
        default:
          "function" != typeof s.onClick && "function" == typeof r.onClick && (o.onclick = dr) } cr(n, r), o = n = void 0; var l = null; for (n in s)
        if (!r.hasOwnProperty(n) && s.hasOwnProperty(n) && null != s[n])
          if ("style" === n) { var h = s[n]; for (o in h) h.hasOwnProperty(o) && (l || (l = {}), l[o] = "") } else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (b.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null)); for (n in r) { var p = r[n]; if (h = null != s ? s[n] : void 0, r.hasOwnProperty(n) && p !== h && (null != p || null != h))
          if ("style" === n)
            if (h) { for (o in h) !h.hasOwnProperty(o) || p && p.hasOwnProperty(o) || (l || (l = {}), l[o] = ""); for (o in p) p.hasOwnProperty(o) && h[o] !== p[o] && (l || (l = {}), l[o] = p[o]) } else l || (e || (e = []), e.push(n, l)), l = p;
        else "dangerouslySetInnerHTML" === n ? (p = p ? p.__html : void 0, h = h ? h.__html : void 0, null != p && h !== p && (e = e || []).push(n, "" + p)) : "children" === n ? h === p || "string" != typeof p && "number" != typeof p || (e = e || []).push(n, "" + p) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (b.hasOwnProperty(n) ? (null != p && fr(a, n), e || h === p || (e = [])) : (e = e || []).push(n, p)) } l && (e = e || []).push("style", l), a = e, (t.updateQueue = a) && as(t) } }, hs = function(e, t, n, r) { n !== r && as(t) }; var ps = "function" == typeof WeakSet ? WeakSet : Set;

  function cs(e, t) { var n = t.source,
      r = t.stack;
    null === r && null !== n && (r = lt(n)), null !== n && ot(n.type), t = t.value, null !== e && 1 === e.tag && ot(e.type); try { console.error(t) } catch (e) { setTimeout(function() { throw e }) } }

  function us(e) { var t = e.ref; if (null !== t)
      if ("function" == typeof t) try { t(null) } catch (t) { Ys(e, t) } else t.current = null }

  function fs(e, t, n) { if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) { var r = n = n.next;
      do { if ((r.tag & e) !== Ci) { var i = r.destroy;
          r.destroy = void 0, void 0 !== i && i() }(r.tag & t) !== Ci && (i = r.create, r.destroy = i()), r = r.next } while (r !== n) } }

  function ds(e) { switch ("function" == typeof jr && jr(e), e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        var t = e.updateQueue; if (null !== t && null !== (t = t.lastEffect)) { var n = t = t.next;
          do { var r = n.destroy; if (void 0 !== r) { var i = e; try { r() } catch (e) { Ys(i, e) } } n = n.next } while (n !== t) } break;
      case 1:
        if (us(e), "function" == typeof(t = e.stateNode).componentWillUnmount) try { t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount() } catch (t) { Ys(e, t) }
        break;
      case 5:
        us(e); break;
      case 4:
        ys(e) } }

  function ms(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag }

  function gs(e) { e: { for (var t = e.return; null !== t;) { if (ms(t)) { var n = t; break e } t = t.return } s("160"), n = void 0 } var r = t = void 0; switch (n.tag) {
      case 5:
        t = n.stateNode, r = !1; break;
      case 3:
      case 4:
        t = n.stateNode.containerInfo, r = !0; break;
      default:
        s("161") } 16 & n.effectTag && (ar(t, ""), n.effectTag &= -17);e: t: for (n = e;;) { for (; null === n.sibling;) { if (null === n.return || ms(n.return)) { n = null; break e } n = n.return } for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) { if (2 & n.effectTag) continue t; if (null === n.child || 4 === n.tag) continue t;
        n.child.return = n, n = n.child } if (!(2 & n.effectTag)) { n = n.stateNode; break e } }
    for (var i = e;;) { if (5 === i.tag || 6 === i.tag)
        if (n)
          if (r) { var a = t,
              o = i.stateNode,
              l = n;
            8 === a.nodeType ? a.parentNode.insertBefore(o, l) : a.insertBefore(o, l) } else t.insertBefore(i.stateNode, n);
      else r ? (o = t, l = i.stateNode, 8 === o.nodeType ? (a = o.parentNode).insertBefore(l, o) : (a = o).appendChild(l), null != (o = o._reactRootContainer) || null !== a.onclick || (a.onclick = dr)) : t.appendChild(i.stateNode);
      else if (4 !== i.tag && null !== i.child) { i.child.return = i, i = i.child; continue } if (i === e) break; for (; null === i.sibling;) { if (null === i.return || i.return === e) return;
        i = i.return } i.sibling.return = i.return, i = i.sibling } }

  function ys(e) { for (var t = e, n = !1, r = void 0, i = void 0;;) { if (!n) { n = t.return;
        e: for (;;) { switch (null === n && s("160"), n.tag) {
            case 5:
              r = n.stateNode, i = !1; break e;
            case 3:
            case 4:
              r = n.stateNode.containerInfo, i = !0; break e } n = n.return } n = !0 } if (5 === t.tag || 6 === t.tag) { e: for (var a = t, o = a;;)
          if (ds(o), null !== o.child && 4 !== o.tag) o.child.return = o, o = o.child;
          else { if (o === a) break; for (; null === o.sibling;) { if (null === o.return || o.return === a) break e;
              o = o.return } o.sibling.return = o.return, o = o.sibling }i ? (a = r, o = t.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(o) : a.removeChild(o)) : r.removeChild(t.stateNode) } else if (4 === t.tag) { if (null !== t.child) { r = t.stateNode.containerInfo, i = !0, t.child.return = t, t = t.child; continue } } else if (ds(t), null !== t.child) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; null === t.sibling;) { if (null === t.return || t.return === e) return;
        4 === (t = t.return).tag && (n = !1) } t.sibling.return = t.return, t = t.sibling } }

  function vs(e, t) { switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fs(Ti, Di, t); break;
      case 1:
        break;
      case 5:
        var n = t.stateNode; if (null != n) { var r = t.memoizedProps;
          e = null !== e ? e.memoizedProps : r; var i = t.type,
            a = t.updateQueue;
          t.updateQueue = null, null !== a && function(e, t, n, r, i) { e[R] = i, "input" === n && "radio" === i.type && null != i.name && Et(e, i), ur(n, r), r = ur(n, i); for (var a = 0; a < t.length; a += 2) { var s = t[a],
                o = t[a + 1]; "style" === s ? hr(e, o) : "dangerouslySetInnerHTML" === s ? ir(e, o) : "children" === s ? ar(e, o) : yt(e, s, o, r) } switch (n) {
              case "input":
                kt(e, i); break;
              case "textarea":
                Qn(e, i); break;
              case "select":
                t = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!i.multiple, null != (n = i.value) ? $n(e, !!i.multiple, n, !1) : t !== !!i.multiple && (null != i.defaultValue ? $n(e, !!i.multiple, i.defaultValue, !0) : $n(e, !!i.multiple, i.multiple ? [] : "", !1)) } }(n, a, i, e, r) } break;
      case 6:
        null === t.stateNode && s("162"), t.stateNode.nodeValue = t.memoizedProps; break;
      case 3:
      case 12:
        break;
      case 13:
        if (n = t.memoizedState, r = void 0, e = t, null === n ? r = !1 : (r = !0, e = t.child, 0 === n.timedOutAt && (n.timedOutAt = ko())), null !== e && function(e, t) { for (var n = e;;) { if (5 === n.tag) { var r = n.stateNode; if (t) r.style.display = "none";
                else { r = n.stateNode; var i = n.memoizedProps.style;
                  i = null != i && i.hasOwnProperty("display") ? i.display : null, r.style.display = lr("display", i) } } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
              else { if (13 === n.tag && null !== n.memoizedState) {
                  (r = n.child.sibling).return = n, n = r; continue } if (null !== n.child) { n.child.return = n, n = n.child; continue } } if (n === e) break; for (; null === n.sibling;) { if (null === n.return || n.return === e) return;
                n = n.return } n.sibling.return = n.return, n = n.sibling } }(e, r), null !== (n = t.updateQueue)) { t.updateQueue = null; var o = t.stateNode;
          null === o && (o = t.stateNode = new ps), n.forEach(function(e) { var n = function(e, t) { var n = e.stateNode;
              null !== n && n.delete(t), t = $s(t = ko(), e), null !== (e = Xs(e, t)) && (Zr(e, t), 0 !== (t = e.expirationTime) && _o(e, t)) }.bind(null, t, e);
            o.has(e) || (o.add(e), e.then(n, n)) }) } break;
      case 17:
        break;
      default:
        s("163") } } var bs = "function" == typeof WeakMap ? WeakMap : Map;

  function xs(e, t, n) {
    (n = Ka(n)).tag = Wa, n.payload = { element: null }; var r = t.value; return n.callback = function() { Mo(r), cs(e, t) }, n }

  function Es(e, t, n) {
    (n = Ka(n)).tag = Wa; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) { var i = t.value;
      n.payload = function() { return r(i) } } var a = e.stateNode; return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() { "function" != typeof r && (null === Bs ? Bs = new Set([this]) : Bs.add(this)); var n = t.value,
        i = t.stack;
      cs(e, t), this.componentDidCatch(n, { componentStack: null !== i ? i : "" }) }), n }

  function ks(e) { switch (e.tag) {
      case 1:
        Rr(e.type) && zr(); var t = e.effectTag; return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
      case 3:
        return _i(), Nr(), 0 != (64 & (t = e.effectTag)) && s("285"), e.effectTag = -2049 & t | 64, e;
      case 5:
        return Si(e), null;
      case 13:
        return 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64, e) : null;
      case 18:
        return null;
      case 4:
        return _i(), null;
      case 10:
        return Oa(e), null;
      default:
        return null } } var _s = Ue.ReactCurrentDispatcher,
    ws = Ue.ReactCurrentOwner,
    Ss = 1073741822,
    Cs = !1,
    Ps = null,
    Ts = null,
    Ds = 0,
    As = -1,
    Fs = !1,
    Ms = null,
    Is = !1,
    Rs = null,
    zs = null,
    Ns = null,
    Bs = null;

  function Vs() { if (null !== Ps)
      for (var e = Ps.return; null !== e;) { var t = e; switch (t.tag) {
          case 1:
            var n = t.type.childContextTypes;
            null != n && zr(); break;
          case 3:
            _i(), Nr(); break;
          case 5:
            Si(t); break;
          case 4:
            _i(); break;
          case 10:
            Oa(t) } e = e.return } Ts = null, Ds = 0, As = -1, Fs = !1, Ps = null }

  function Os() { for (; null !== Ms;) { var e = Ms.effectTag; if (16 & e && ar(Ms.stateNode, ""), 128 & e) { var t = Ms.alternate;
        null !== t && (null !== (t = t.ref) && ("function" == typeof t ? t(null) : t.current = null)) } switch (14 & e) {
        case 2:
          gs(Ms), Ms.effectTag &= -3; break;
        case 6:
          gs(Ms), Ms.effectTag &= -3, vs(Ms.alternate, Ms); break;
        case 4:
          vs(Ms.alternate, Ms); break;
        case 8:
          ys(e = Ms), e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, null !== (e = e.alternate) && (e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null) } Ms = Ms.nextEffect } }

  function Ls() { for (; null !== Ms;) { if (256 & Ms.effectTag) e: { var e = Ms.alternate,
          t = Ms; switch (t.tag) {
          case 0:
          case 11:
          case 15:
            fs(Pi, Ci, t); break e;
          case 1:
            if (256 & t.effectTag && null !== e) { var n = e.memoizedProps,
                r = e.memoizedState;
              t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : ri(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t } break e;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            break e;
          default:
            s("163") } } Ms = Ms.nextEffect } }

  function Gs(e, t) { for (; null !== Ms;) { var n = Ms.effectTag; if (36 & n) { var r = Ms.alternate,
          i = Ms,
          a = t; switch (i.tag) {
          case 0:
          case 11:
          case 15:
            fs(Ai, Fi, i); break;
          case 1:
            var o = i.stateNode; if (4 & i.effectTag)
              if (null === r) o.componentDidMount();
              else { var l = i.elementType === i.type ? r.memoizedProps : ri(i.type, r.memoizedProps);
                o.componentDidUpdate(l, r.memoizedState, o.__reactInternalSnapshotBeforeUpdate) } null !== (r = i.updateQueue) && ns(0, r, o); break;
          case 3:
            if (null !== (r = i.updateQueue)) { if (o = null, null !== i.child) switch (i.child.tag) {
                case 5:
                  o = i.child.stateNode; break;
                case 1:
                  o = i.child.stateNode } ns(0, r, o) } break;
          case 5:
            a = i.stateNode, null === r && 4 & i.effectTag && yr(i.type, i.memoizedProps) && a.focus(); break;
          case 6:
          case 4:
          case 12:
          case 13:
          case 17:
            break;
          default:
            s("163") } } 128 & n && (null !== (i = Ms.ref) && (a = Ms.stateNode, "function" == typeof i ? i(a) : i.current = a)), 512 & n && (Rs = e), Ms = Ms.nextEffect } }

  function js() { null !== zs && kr(zs), null !== Ns && Ns() }

  function Hs(e, t) { Is = Cs = !0, e.current === t && s("177"); var n = e.pendingCommitExpirationTime;
    0 === n && s("261"), e.pendingCommitExpirationTime = 0; var r = t.expirationTime,
      i = t.childExpirationTime; for (function(e, t) { if (e.didError = !1, 0 === t) e.earliestPendingTime = 0, e.latestPendingTime = 0, e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0;
        else { t < e.latestPingedTime && (e.latestPingedTime = 0); var n = e.latestPendingTime;
          0 !== n && (n > t ? e.earliestPendingTime = e.latestPendingTime = 0 : e.earliestPendingTime > t && (e.earliestPendingTime = e.latestPendingTime)), 0 === (n = e.earliestSuspendedTime) ? Zr(e, t) : t < e.latestSuspendedTime ? (e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0, Zr(e, t)) : t > n && Zr(e, t) } ni(0, e) }(e, i > r ? i : r), ws.current = null, r = void 0, 1 < t.effectTag ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, mr = wn, gr = function() { var e = Nn(); if (Bn(e)) { if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
          else e: { var n = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection(); if (n && 0 !== n.rangeCount) { t = n.anchorNode; var r = n.anchorOffset,
                i = n.focusNode;
              n = n.focusOffset; try { t.nodeType, i.nodeType } catch (e) { t = null; break e } var a = 0,
                s = -1,
                o = -1,
                l = 0,
                h = 0,
                p = e,
                c = null;
              t: for (;;) { for (var u; p !== t || 0 !== r && 3 !== p.nodeType || (s = a + r), p !== i || 0 !== n && 3 !== p.nodeType || (o = a + n), 3 === p.nodeType && (a += p.nodeValue.length), null !== (u = p.firstChild);) c = p, p = u; for (;;) { if (p === e) break t; if (c === t && ++l === r && (s = a), c === i && ++h === n && (o = a), null !== (u = p.nextSibling)) break;
                  c = (p = c).parentNode } p = u } t = -1 === s || -1 === o ? null : { start: s, end: o } } else t = null } t = t || { start: 0, end: 0 } } else t = null; return { focusedElem: e, selectionRange: t } }(), wn = !1, Ms = r; null !== Ms;) { i = !1; var o = void 0; try { Ls() } catch (e) { i = !0, o = e } i && (null === Ms && s("178"), Ys(Ms, o), null !== Ms && (Ms = Ms.nextEffect)) } for (Ms = r; null !== Ms;) { i = !1, o = void 0; try { Os() } catch (e) { i = !0, o = e } i && (null === Ms && s("178"), Ys(Ms, o), null !== Ms && (Ms = Ms.nextEffect)) } for (Vn(gr), gr = null, wn = !!mr, mr = null, e.current = t, Ms = r; null !== Ms;) { i = !1, o = void 0; try { Gs(e, n) } catch (e) { i = !0, o = e } i && (null === Ms && s("178"), Ys(Ms, o), null !== Ms && (Ms = Ms.nextEffect)) } if (null !== r && null !== Rs) { var l = function(e, t) { Ns = zs = Rs = null; var n = ro;
        ro = !0;
        do { if (512 & t.effectTag) { var r = !1,
              i = void 0; try { var a = t;
              fs(Ii, Ci, a), fs(Ci, Mi, a) } catch (e) { r = !0, i = e } r && Ys(t, i) } t = t.nextEffect } while (null !== t);
        ro = n, 0 !== (n = e.expirationTime) && _o(e, n), ho || ro || To(1073741823, !1) }.bind(null, e, r);
      zs = a.unstable_runWithPriority(a.unstable_NormalPriority, function() { return Er(l) }), Ns = l } Cs = Is = !1, "function" == typeof Gr && Gr(t.stateNode), n = t.expirationTime, 0 === (t = (t = t.childExpirationTime) > n ? t : n) && (Bs = null),
      function(e, t) { e.expirationTime = t, e.finishedWork = null }(e, t) }

  function Us(e) { for (;;) { var t = e.alternate,
        n = e.return,
        r = e.sibling; if (0 == (1024 & e.effectTag)) { Ps = e;
        e: { var a = t,
            o = Ds,
            l = (t = e).pendingProps; switch (t.tag) {
            case 2:
            case 16:
              break;
            case 15:
            case 0:
              break;
            case 1:
              Rr(t.type) && zr(); break;
            case 3:
              _i(), Nr(), (l = t.stateNode).pendingContext && (l.context = l.pendingContext, l.pendingContext = null), null !== a && null !== a.child || (va(t), t.effectTag &= -3), os(t); break;
            case 5:
              Si(t); var h = Ei(xi.current); if (o = t.type, null !== a && null != t.stateNode) ls(a, t, o, l, h), a.ref !== t.ref && (t.effectTag |= 128);
              else if (l) { var p = Ei(vi.current); if (va(t)) { a = (l = t).stateNode; var c = l.type,
                    u = l.memoizedProps,
                    f = h; switch (a[I] = l, a[R] = u, o = void 0, h = c) {
                    case "iframe":
                    case "object":
                      Sn("load", a); break;
                    case "video":
                    case "audio":
                      for (c = 0; c < te.length; c++) Sn(te[c], a); break;
                    case "source":
                      Sn("error", a); break;
                    case "img":
                    case "image":
                    case "link":
                      Sn("error", a), Sn("load", a); break;
                    case "form":
                      Sn("reset", a), Sn("submit", a); break;
                    case "details":
                      Sn("toggle", a); break;
                    case "input":
                      xt(a, u), Sn("invalid", a), fr(f, "onChange"); break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!u.multiple }, Sn("invalid", a), fr(f, "onChange"); break;
                    case "textarea":
                      Xn(a, u), Sn("invalid", a), fr(f, "onChange") } for (o in cr(h, u), c = null, u) u.hasOwnProperty(o) && (p = u[o], "children" === o ? "string" == typeof p ? a.textContent !== p && (c = ["children", p]) : "number" == typeof p && a.textContent !== "" + p && (c = ["children", "" + p]) : b.hasOwnProperty(o) && null != p && fr(f, o)); switch (h) {
                    case "input":
                      je(a), _t(a, u, !0); break;
                    case "textarea":
                      je(a), Jn(a); break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof u.onClick && (a.onclick = dr) } o = c, l.updateQueue = o, (l = null !== o) && as(t) } else { u = t, f = o, a = l, c = 9 === h.nodeType ? h : h.ownerDocument, p === Zn.html && (p = er(f)), p === Zn.html ? "script" === f ? ((a = c.createElement("div")).innerHTML = "<script><\/script>", c = a.removeChild(a.firstChild)) : "string" == typeof a.is ? c = c.createElement(f, { is: a.is }) : (c = c.createElement(f), "select" === f && (f = c, a.multiple ? f.multiple = !0 : a.size && (f.size = a.size))) : c = c.createElementNS(p, f), (a = c)[I] = u, a[R] = l, ss(a, t, !1, !1), f = a; var d = h,
                    m = ur(c = o, u = l); switch (c) {
                    case "iframe":
                    case "object":
                      Sn("load", f), h = u; break;
                    case "video":
                    case "audio":
                      for (h = 0; h < te.length; h++) Sn(te[h], f);
                      h = u; break;
                    case "source":
                      Sn("error", f), h = u; break;
                    case "img":
                    case "image":
                    case "link":
                      Sn("error", f), Sn("load", f), h = u; break;
                    case "form":
                      Sn("reset", f), Sn("submit", f), h = u; break;
                    case "details":
                      Sn("toggle", f), h = u; break;
                    case "input":
                      xt(f, u), h = bt(f, u), Sn("invalid", f), fr(d, "onChange"); break;
                    case "option":
                      h = Yn(f, u); break;
                    case "select":
                      f._wrapperState = { wasMultiple: !!u.multiple }, h = i({}, u, { value: void 0 }), Sn("invalid", f), fr(d, "onChange"); break;
                    case "textarea":
                      Xn(f, u), h = Kn(f, u), Sn("invalid", f), fr(d, "onChange"); break;
                    default:
                      h = u } cr(c, h), p = void 0; var g = c,
                    y = f,
                    v = h; for (p in v)
                    if (v.hasOwnProperty(p)) { var x = v[p]; "style" === p ? hr(y, x) : "dangerouslySetInnerHTML" === p ? null != (x = x ? x.__html : void 0) && ir(y, x) : "children" === p ? "string" == typeof x ? ("textarea" !== g || "" !== x) && ar(y, x) : "number" == typeof x && ar(y, "" + x) : "suppressContentEditableWarning" !== p && "suppressHydrationWarning" !== p && "autoFocus" !== p && (b.hasOwnProperty(p) ? null != x && fr(d, p) : null != x && yt(y, p, x, m)) } switch (c) {
                    case "input":
                      je(f), _t(f, u, !1); break;
                    case "textarea":
                      je(f), Jn(f); break;
                    case "option":
                      null != u.value && f.setAttribute("value", "" + vt(u.value)); break;
                    case "select":
                      (h = f).multiple = !!u.multiple, null != (f = u.value) ? $n(h, !!u.multiple, f, !1) : null != u.defaultValue && $n(h, !!u.multiple, u.defaultValue, !0); break;
                    default:
                      "function" == typeof h.onClick && (f.onclick = dr) }(l = yr(o, l)) && as(t), t.stateNode = a } null !== t.ref && (t.effectTag |= 128) } else null === t.stateNode && s("166"); break;
            case 6:
              a && null != t.stateNode ? hs(a, t, a.memoizedProps, l) : ("string" != typeof l && (null === t.stateNode && s("166")), a = Ei(xi.current), Ei(vi.current), va(t) ? (o = (l = t).stateNode, a = l.memoizedProps, o[I] = l, (l = o.nodeValue !== a) && as(t)) : (o = t, (l = (9 === a.nodeType ? a : a.ownerDocument).createTextNode(l))[I] = t, o.stateNode = l)); break;
            case 11:
              break;
            case 13:
              if (l = t.memoizedState, 0 != (64 & t.effectTag)) { t.expirationTime = o, Ps = t; break e } l = null !== l, o = null !== a && null !== a.memoizedState, null !== a && !l && o && (null !== (a = a.child.sibling) && (null !== (h = t.firstEffect) ? (t.firstEffect = a, a.nextEffect = h) : (t.firstEffect = t.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), (l || o) && (t.effectTag |= 4); break;
            case 7:
            case 8:
            case 12:
              break;
            case 4:
              _i(), os(t); break;
            case 10:
              Oa(t); break;
            case 9:
            case 14:
              break;
            case 17:
              Rr(t.type) && zr(); break;
            case 18:
              break;
            default:
              s("156") } Ps = null }
        if (t = e, 1 === Ds || 1 !== t.childExpirationTime) { for (l = 0, o = t.child; null !== o;)(a = o.expirationTime) > l && (l = a), (h = o.childExpirationTime) > l && (l = h), o = o.sibling;
          t.childExpirationTime = l } if (null !== Ps) return Ps;
        null !== n && 0 == (1024 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e)) } else { if (null !== (e = ks(e))) return e.effectTag &= 1023, e;
        null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 1024) } if (null !== r) return r; if (null === n) break;
      e = n } return null }

  function Ws(e) { var t = Ia(e.alternate, e, Ds); return e.memoizedProps = e.pendingProps, null === t && (t = Us(e)), ws.current = null, t }

  function qs(e, t) { Cs && s("243"), js(), Cs = !0; var n = _s.current;
    _s.current = la; var r = e.nextExpirationTimeToWorkOn;
    r === Ds && e === Ts && null !== Ps || (Vs(), Ds = r, Ps = Yr((Ts = e).current, null), e.pendingCommitExpirationTime = 0); for (var i = !1;;) { try { if (t)
          for (; null !== Ps && !Co();) Ps = Ws(Ps);
        else
          for (; null !== Ps;) Ps = Ws(Ps) } catch (t) { if (Ba = Na = za = null, Qi(), null === Ps) i = !0, Mo(t);
        else { null === Ps && s("271"); var a = Ps,
            o = a.return; if (null !== o) { e: { var l = e,
                h = o,
                p = a,
                c = t; if (o = Ds, p.effectTag |= 1024, p.firstEffect = p.lastEffect = null, null !== c && "object" == typeof c && "function" == typeof c.then) { var u = c;
                c = h; var f = -1,
                  d = -1;
                do { if (13 === c.tag) { var m = c.alternate; if (null !== m && null !== (m = m.memoizedState)) { d = 10 * (1073741822 - m.timedOutAt); break } "number" == typeof(m = c.pendingProps.maxDuration) && (0 >= m ? f = 0 : (-1 === f || m < f) && (f = m)) } c = c.return } while (null !== c);
                c = h;
                do { if ((m = 13 === c.tag) && (m = void 0 !== c.memoizedProps.fallback && null === c.memoizedState), m) { if (null === (h = c.updateQueue) ? ((h = new Set).add(u), c.updateQueue = h) : h.add(u), 0 == (1 & c.mode)) { c.effectTag |= 64, p.effectTag &= -1957, 1 === p.tag && (null === p.alternate ? p.tag = 17 : ((o = Ka(1073741823)).tag = Ua, Qa(p, o))), p.expirationTime = 1073741823; break e } h = o; var g = (p = l).pingCache;
                    null === g ? (g = p.pingCache = new bs, m = new Set, g.set(u, m)) : void 0 === (m = g.get(u)) && (m = new Set, g.set(u, m)), m.has(h) || (m.add(h), p = Ks.bind(null, p, u, h), u.then(p, p)), -1 === f ? l = 1073741823 : (-1 === d && (d = 10 * (1073741822 - ti(l, o)) - 5e3), l = d + f), 0 <= l && As < l && (As = l), c.effectTag |= 2048, c.expirationTime = o; break e } c = c.return } while (null !== c);
                c = Error((ot(p.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + lt(p)) } Fs = !0, c = is(c, p), l = h;do { switch (l.tag) {
                  case 3:
                    l.effectTag |= 2048, l.expirationTime = o, Ja(l, o = xs(l, c, o)); break e;
                  case 1:
                    if (f = c, d = l.type, p = l.stateNode, 0 == (64 & l.effectTag) && ("function" == typeof d.getDerivedStateFromError || null !== p && "function" == typeof p.componentDidCatch && (null === Bs || !Bs.has(p)))) { l.effectTag |= 2048, l.expirationTime = o, Ja(l, o = Es(l, f, o)); break e } } l = l.return } while (null !== l) } Ps = Us(a); continue } i = !0, Mo(t) } } break } if (Cs = !1, _s.current = n, Ba = Na = za = null, Qi(), i) Ts = null, e.finishedWork = null;
    else if (null !== Ps) e.finishedWork = null;
    else { if (null === (n = e.current.alternate) && s("281"), Ts = null, Fs) { if (i = e.latestPendingTime, a = e.latestSuspendedTime, o = e.latestPingedTime, 0 !== i && i < r || 0 !== a && a < r || 0 !== o && o < r) return ei(e, r), void Eo(e, n, r, e.expirationTime, -1); if (!e.didError && t) return e.didError = !0, r = e.nextExpirationTimeToWorkOn = r, t = e.expirationTime = 1073741823, void Eo(e, n, r, t, -1) } t && -1 !== As ? (ei(e, r), (t = 10 * (1073741822 - ti(e, r))) < As && (As = t), t = 10 * (1073741822 - ko()), t = As - t, Eo(e, n, r, e.expirationTime, 0 > t ? 0 : t)) : (e.pendingCommitExpirationTime = r, e.finishedWork = n) } }

  function Ys(e, t) { for (var n = e.return; null !== n;) { switch (n.tag) {
        case 1:
          var r = n.stateNode; if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Bs || !Bs.has(r))) return Qa(n, e = Es(n, e = is(t, e), 1073741823)), void Qs(n, 1073741823); break;
        case 3:
          return Qa(n, e = xs(n, e = is(t, e), 1073741823)), void Qs(n, 1073741823) } n = n.return } 3 === e.tag && (Qa(e, n = xs(e, n = is(t, e), 1073741823)), Qs(e, 1073741823)) }

  function $s(e, t) { var n = a.unstable_getCurrentPriorityLevel(),
      r = void 0; if (0 == (1 & t.mode)) r = 1073741823;
    else if (Cs && !Is) r = Ds;
    else { switch (n) {
        case a.unstable_ImmediatePriority:
          r = 1073741823; break;
        case a.unstable_UserBlockingPriority:
          r = 1073741822 - 10 * (1 + ((1073741822 - e + 15) / 10 | 0)); break;
        case a.unstable_NormalPriority:
          r = 1073741822 - 25 * (1 + ((1073741822 - e + 500) / 25 | 0)); break;
        case a.unstable_LowPriority:
        case a.unstable_IdlePriority:
          r = 1; break;
        default:
          s("313") } null !== Ts && r === Ds && --r } return n === a.unstable_UserBlockingPriority && (0 === so || r < so) && (so = r), r }

  function Ks(e, t, n) { var r = e.pingCache;
    null !== r && r.delete(t), null !== Ts && Ds === n ? Ts = null : (t = e.earliestSuspendedTime, r = e.latestSuspendedTime, 0 !== t && n <= t && n >= r && (e.didError = !1, (0 === (t = e.latestPingedTime) || t > n) && (e.latestPingedTime = n), ni(n, e), 0 !== (n = e.expirationTime) && _o(e, n))) }

  function Xs(e, t) { e.expirationTime < t && (e.expirationTime = t); var n = e.alternate;
    null !== n && n.expirationTime < t && (n.expirationTime = t); var r = e.return,
      i = null; if (null === r && 3 === e.tag) i = e.stateNode;
    else
      for (; null !== r;) { if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) { i = r.stateNode; break } r = r.return }
    return i }

  function Qs(e, t) { null !== (e = Xs(e, t)) && (!Cs && 0 !== Ds && t > Ds && Vs(), Zr(e, t), Cs && !Is && Ts === e || _o(e, e.expirationTime), yo > go && (yo = 0, s("185"))) }

  function Js(e, t, n, r, i) { return a.unstable_runWithPriority(a.unstable_ImmediatePriority, function() { return e(t, n, r, i) }) } var Zs = null,
    eo = null,
    to = 0,
    no = void 0,
    ro = !1,
    io = null,
    ao = 0,
    so = 0,
    oo = !1,
    lo = null,
    ho = !1,
    po = !1,
    co = null,
    uo = a.unstable_now(),
    fo = 1073741822 - (uo / 10 | 0),
    mo = fo,
    go = 50,
    yo = 0,
    vo = null;

  function bo() { fo = 1073741822 - ((a.unstable_now() - uo) / 10 | 0) }

  function xo(e, t) { if (0 !== to) { if (t < to) return;
      null !== no && a.unstable_cancelCallback(no) } to = t, e = a.unstable_now() - uo, no = a.unstable_scheduleCallback(Po, { timeout: 10 * (1073741822 - t) - e }) }

  function Eo(e, t, n, r, i) { e.expirationTime = r, 0 !== i || Co() ? 0 < i && (e.timeoutHandle = br(function(e, t, n) { e.pendingCommitExpirationTime = n, e.finishedWork = t, bo(), mo = fo, Do(e, n) }.bind(null, e, t, n), i)) : (e.pendingCommitExpirationTime = n, e.finishedWork = t) }

  function ko() { return ro ? mo : (wo(), 0 !== ao && 1 !== ao || (bo(), mo = fo), mo) }

  function _o(e, t) { null === e.nextScheduledRoot ? (e.expirationTime = t, null === eo ? (Zs = eo = e, e.nextScheduledRoot = e) : (eo = eo.nextScheduledRoot = e).nextScheduledRoot = Zs) : t > e.expirationTime && (e.expirationTime = t), ro || (ho ? po && (io = e, ao = 1073741823, Ao(e, 1073741823, !1)) : 1073741823 === t ? To(1073741823, !1) : xo(e, t)) }

  function wo() { var e = 0,
      t = null; if (null !== eo)
      for (var n = eo, r = Zs; null !== r;) { var i = r.expirationTime; if (0 === i) { if ((null === n || null === eo) && s("244"), r === r.nextScheduledRoot) { Zs = eo = r.nextScheduledRoot = null; break } if (r === Zs) Zs = i = r.nextScheduledRoot, eo.nextScheduledRoot = i, r.nextScheduledRoot = null;
          else { if (r === eo) {
              (eo = n).nextScheduledRoot = Zs, r.nextScheduledRoot = null; break } n.nextScheduledRoot = r.nextScheduledRoot, r.nextScheduledRoot = null } r = n.nextScheduledRoot } else { if (i > e && (e = i, t = r), r === eo) break; if (1073741823 === e) break;
          n = r, r = r.nextScheduledRoot } } io = t, ao = e } var So = !1;

  function Co() { return !!So || !!a.unstable_shouldYield() && (So = !0) }

  function Po() { try { if (!Co() && null !== Zs) { bo(); var e = Zs;
        do { var t = e.expirationTime;
          0 !== t && fo <= t && (e.nextExpirationTimeToWorkOn = fo), e = e.nextScheduledRoot } while (e !== Zs) } To(0, !0) } finally { So = !1 } }

  function To(e, t) { if (wo(), t)
      for (bo(), mo = fo; null !== io && 0 !== ao && e <= ao && !(So && fo > ao);) Ao(io, ao, fo > ao), wo(), bo(), mo = fo;
    else
      for (; null !== io && 0 !== ao && e <= ao;) Ao(io, ao, !1), wo(); if (t && (to = 0, no = null), 0 !== ao && xo(io, ao), yo = 0, vo = null, null !== co)
      for (e = co, co = null, t = 0; t < e.length; t++) { var n = e[t]; try { n._onComplete() } catch (e) { oo || (oo = !0, lo = e) } }
    if (oo) throw e = lo, lo = null, oo = !1, e }

  function Do(e, t) { ro && s("253"), io = e, ao = t, Ao(e, t, !1), To(1073741823, !1) }

  function Ao(e, t, n) { if (ro && s("245"), ro = !0, n) { var r = e.finishedWork;
      null !== r ? Fo(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, xr(r)), qs(e, n), null !== (r = e.finishedWork) && (Co() ? e.finishedWork = r : Fo(e, r, t))) } else null !== (r = e.finishedWork) ? Fo(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, xr(r)), qs(e, n), null !== (r = e.finishedWork) && Fo(e, r, t));
    ro = !1 }

  function Fo(e, t, n) { var r = e.firstBatch; if (null !== r && r._expirationTime >= n && (null === co ? co = [r] : co.push(r), r._defer)) return e.finishedWork = t, void(e.expirationTime = 0);
    e.finishedWork = null, e === vo ? yo++ : (vo = e, yo = 0), a.unstable_runWithPriority(a.unstable_ImmediatePriority, function() { Hs(e, t) }) }

  function Mo(e) { null === io && s("246"), io.expirationTime = 0, oo || (oo = !0, lo = e) }

  function Io(e, t) { var n = ho;
    ho = !0; try { return e(t) } finally {
      (ho = n) || ro || To(1073741823, !1) } }

  function Ro(e, t) { if (ho && !po) { po = !0; try { return e(t) } finally { po = !1 } } return e(t) }

  function zo(e, t, n) { ho || ro || 0 === so || (To(so, !1), so = 0); var r = ho;
    ho = !0; try { return a.unstable_runWithPriority(a.unstable_UserBlockingPriority, function() { return e(t, n) }) } finally {
      (ho = r) || ro || To(1073741823, !1) } }

  function No(e, t, n, r, i) { var a = t.current;
    e: if (n) { t: { 2 === tn(n = n._reactInternalFiber) && 1 === n.tag || s("170"); var o = n;do { switch (o.tag) {
            case 3:
              o = o.stateNode.context; break t;
            case 1:
              if (Rr(o.type)) { o = o.stateNode.__reactInternalMemoizedMergedChildContext; break t } } o = o.return } while (null !== o);s("171"), o = void 0 } if (1 === n.tag) { var l = n.type; if (Rr(l)) { n = Vr(n, l, o); break e } } n = o }
    else n = Dr; return null === t.context ? t.context = n : t.pendingContext = n, t = i, (i = Ka(r)).payload = { element: e }, null !== (t = void 0 === t ? null : t) && (i.callback = t), js(), Qa(a, i), Qs(a, r), r }

  function Bo(e, t, n, r) { var i = t.current; return No(e, t, n, i = $s(ko(), i), r) }

  function Vo(e) { if (!(e = e.current).child) return null; switch (e.child.tag) {
      case 5:
      default:
        return e.child.stateNode } }

  function Oo(e) { var t = 1073741822 - 25 * (1 + ((1073741822 - ko() + 500) / 25 | 0));
    t >= Ss && (t = Ss - 1), this._expirationTime = Ss = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0 }

  function Lo() { this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this) }

  function Go(e, t, n) { e = { current: t = Wr(3, null, null, t ? 3 : 0), containerInfo: e, pendingChildren: null, pingCache: null, earliestPendingTime: 0, latestPendingTime: 0, earliestSuspendedTime: 0, latestSuspendedTime: 0, latestPingedTime: 0, didError: !1, pendingCommitExpirationTime: 0, finishedWork: null, timeoutHandle: -1, context: null, pendingContext: null, hydrate: n, nextExpirationTimeToWorkOn: 0, expirationTime: 0, firstBatch: null, nextScheduledRoot: null }, this._internalRoot = t.stateNode = e }

  function jo(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)) }

  function Ho(e, t, n, r, i) { var a = n._reactRootContainer; if (a) { if ("function" == typeof i) { var s = i;
        i = function() { var e = Vo(a._internalRoot);
          s.call(e) } } null != e ? a.legacy_renderSubtreeIntoContainer(e, t, i) : a.render(t, i) } else { if (a = n._reactRootContainer = function(e, t) { if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
            for (var n; n = e.lastChild;) e.removeChild(n); return new Go(e, !1, t) }(n, r), "function" == typeof i) { var o = i;
        i = function() { var e = Vo(a._internalRoot);
          o.call(e) } } Ro(function() { null != e ? a.legacy_renderSubtreeIntoContainer(e, t, i) : a.render(t, i) }) } return Vo(a._internalRoot) }

  function Uo(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; return jo(t) || s("200"),
      function(e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: $e, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n } }(e, t, null, n) } Ce = function(e, t, n) { switch (t) {
      case "input":
        if (kt(e, n), t = n.name, "radio" === n.type && null != t) { for (n = e; n.parentNode;) n = n.parentNode; for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) { var r = n[t]; if (r !== e && r.form === e.form) { var i = V(r);
              i || s("90"), He(r), kt(r, i) } } } break;
      case "textarea":
        Qn(e, n); break;
      case "select":
        null != (t = n.value) && $n(e, !!n.multiple, t, !1) } }, Oo.prototype.render = function(e) { this._defer || s("250"), this._hasChildren = !0, this._children = e; var t = this._root._internalRoot,
      n = this._expirationTime,
      r = new Lo; return No(e, t, null, n, r._onCommit), r }, Oo.prototype.then = function(e) { if (this._didComplete) e();
    else { var t = this._callbacks;
      null === t && (t = this._callbacks = []), t.push(e) } }, Oo.prototype.commit = function() { var e = this._root._internalRoot,
      t = e.firstBatch; if (this._defer && null !== t || s("251"), this._hasChildren) { var n = this._expirationTime; if (t !== this) { this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children)); for (var r = null, i = t; i !== this;) r = i, i = i._next;
        null === r && s("251"), r._next = i._next, this._next = t, e.firstBatch = this } this._defer = !1, Do(e, n), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children) } else this._next = null, this._defer = !1 }, Oo.prototype._onComplete = function() { if (!this._didComplete) { this._didComplete = !0; var e = this._callbacks; if (null !== e)
        for (var t = 0; t < e.length; t++)(0, e[t])() } }, Lo.prototype.then = function(e) { if (this._didCommit) e();
    else { var t = this._callbacks;
      null === t && (t = this._callbacks = []), t.push(e) } }, Lo.prototype._onCommit = function() { if (!this._didCommit) { this._didCommit = !0; var e = this._callbacks; if (null !== e)
        for (var t = 0; t < e.length; t++) { var n = e[t]; "function" != typeof n && s("191", n), n() } } }, Go.prototype.render = function(e, t) { var n = this._internalRoot,
      r = new Lo; return null !== (t = void 0 === t ? null : t) && r.then(t), Bo(e, n, null, r._onCommit), r }, Go.prototype.unmount = function(e) { var t = this._internalRoot,
      n = new Lo; return null !== (e = void 0 === e ? null : e) && n.then(e), Bo(null, t, null, n._onCommit), n }, Go.prototype.legacy_renderSubtreeIntoContainer = function(e, t, n) { var r = this._internalRoot,
      i = new Lo; return null !== (n = void 0 === n ? null : n) && i.then(n), Bo(t, r, e, i._onCommit), i }, Go.prototype.createBatch = function() { var e = new Oo(this),
      t = e._expirationTime,
      n = this._internalRoot,
      r = n.firstBatch; if (null === r) n.firstBatch = e, e._next = null;
    else { for (n = null; null !== r && r._expirationTime >= t;) n = r, r = r._next;
      e._next = r, null !== n && (n._next = e) } return e }, Me = Io, Ie = zo, Re = function() { ro || 0 === so || (To(so, !1), so = 0) }; var Wo = { createPortal: Uo, findDOMNode: function(e) { if (null == e) return null; if (1 === e.nodeType) return e; var t = e._reactInternalFiber; return void 0 === t && ("function" == typeof e.render ? s("188") : s("268", Object.keys(e))), e = null === (e = rn(t)) ? null : e.stateNode }, hydrate: function(e, t, n) { return jo(t) || s("200"), Ho(null, e, t, !0, n) }, render: function(e, t, n) { return jo(t) || s("200"), Ho(null, e, t, !1, n) }, unstable_renderSubtreeIntoContainer: function(e, t, n, r) { return jo(n) || s("200"), (null == e || void 0 === e._reactInternalFiber) && s("38"), Ho(e, t, n, !1, r) }, unmountComponentAtNode: function(e) { return jo(e) || s("40"), !!e._reactRootContainer && (Ro(function() { Ho(null, null, e, !1, function() { e._reactRootContainer = null }) }), !0) }, unstable_createPortal: function() { return Uo.apply(void 0, arguments) }, unstable_batchedUpdates: Io, unstable_interactiveUpdates: zo, flushSync: function(e, t) { ro && s("187"); var n = ho;
      ho = !0; try { return Js(e, t) } finally { ho = n, To(1073741823, !1) } }, unstable_createRoot: function(e, t) { return jo(e) || s("299", "unstable_createRoot"), new Go(e, !0, null != t && !0 === t.hydrate) }, unstable_flushControlled: function(e) { var t = ho;
      ho = !0; try { Js(e) } finally {
        (ho = t) || ro || To(1073741823, !1) } }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { Events: [N, B, V, D.injectEventPluginsByName, v, U, function(e) { C(e, H) }, Ae, Fe, Tn, F] } };! function(e) { var t = e.findFiberByHostInstance;
    (function(e) { if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1; var t = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (t.isDisabled || !t.supportsFiber) return !0; try { var n = t.inject(e);
        Gr = Hr(function(e) { return t.onCommitFiberRoot(n, e) }), jr = Hr(function(e) { return t.onCommitFiberUnmount(n, e) }) } catch (e) {} })(i({}, e, { overrideProps: null, currentDispatcherRef: Ue.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return null === (e = rn(e)) ? null : e.stateNode }, findFiberByHostInstance: function(e) { return t ? t(e) : null } })) }({ findFiberByHostInstance: z, bundleType: 0, version: "16.8.6", rendererPackageName: "react-dom" }); var qo = { default: Wo },
    Yo = qo && Wo || qo;
  e.exports = Yo.default || Yo }, function(e, t, n) { "use strict";
  e.exports = n(67) }, function(e, t, n) {
  "use strict";
  (function(e) {
    /** @license React v0.13.6
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = null,
      r = !1,
      i = 3,
      a = -1,
      s = -1,
      o = !1,
      l = !1;

    function h() { if (!o) { var e = n.expirationTime;
        l ? _() : l = !0, k(u, e) } }

    function p() { var e = n,
        t = n.next; if (n === t) n = null;
      else { var r = n.previous;
        n = r.next = t, t.previous = r } e.next = e.previous = null, r = e.callback, t = e.expirationTime, e = e.priorityLevel; var a = i,
        o = s;
      i = e, s = t; try { var l = r() } finally { i = a, s = o } if ("function" == typeof l)
        if (l = { callback: l, priorityLevel: e, expirationTime: t, next: null, previous: null }, null === n) n = l.next = l.previous = l;
        else { r = null, e = n;
          do { if (e.expirationTime >= t) { r = e; break } e = e.next } while (e !== n);
          null === r ? r = n : r === n && (n = l, h()), (t = r.previous).next = r.previous = l, l.next = r, l.previous = t } }

    function c() { if (-1 === a && null !== n && 1 === n.priorityLevel) { o = !0; try { do { p() } while (null !== n && 1 === n.priorityLevel) } finally { o = !1, null !== n ? h() : l = !1 } } }

    function u(e) { o = !0; var i = r;
      r = e; try { if (e)
          for (; null !== n;) { var a = t.unstable_now(); if (!(n.expirationTime <= a)) break;
            do { p() } while (null !== n && n.expirationTime <= a) } else if (null !== n)
            do { p() } while (null !== n && !w()) } finally { o = !1, r = i, null !== n ? h() : l = !1, c() } }
    var f, d, m = Date,
      g = "function" == typeof setTimeout ? setTimeout : void 0,
      y = "function" == typeof clearTimeout ? clearTimeout : void 0,
      v = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
      b = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

    function x(e) { f = v(function(t) { y(d), e(t) }), d = g(function() { b(f), e(t.unstable_now()) }, 100) }
    if ("object" == typeof performance && "function" == typeof performance.now) { var E = performance;
      t.unstable_now = function() { return E.now() } } else t.unstable_now = function() { return m.now() };
    var k, _, w, S = null;
    if ("undefined" != typeof window ? S = window : void 0 !== e && (S = e), S && S._schedMock) { var C = S._schedMock;
      k = C[0], _ = C[1], w = C[2], t.unstable_now = C[3] } else if ("undefined" == typeof window || "function" != typeof MessageChannel) { var P = null,
        T = function(e) { if (null !== P) try { P(e) } finally { P = null } };
      k = function(e) { null !== P ? setTimeout(k, 0, e) : (P = e, setTimeout(T, 0, !1)) }, _ = function() { P = null }, w = function() { return !1 } } else { "undefined" != typeof console && ("function" != typeof v && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof b && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")); var D = null,
        A = !1,
        F = -1,
        M = !1,
        I = !1,
        R = 0,
        z = 33,
        N = 33;
      w = function() { return R <= t.unstable_now() }; var B = new MessageChannel,
        V = B.port2;
      B.port1.onmessage = function() { A = !1; var e = D,
          n = F;
        D = null, F = -1; var r = t.unstable_now(),
          i = !1; if (0 >= R - r) { if (!(-1 !== n && n <= r)) return M || (M = !0, x(O)), D = e, void(F = n);
          i = !0 } if (null !== e) { I = !0; try { e(i) } finally { I = !1 } } }; var O = function(e) { if (null !== D) { x(O); var t = e - R + N;
          t < N && z < N ? (8 > t && (t = 8), N = t < z ? z : t) : z = t, R = e + N, A || (A = !0, V.postMessage(void 0)) } else M = !1 };
      k = function(e, t) { D = e, F = t, I || 0 > t ? V.postMessage(void 0) : M || (M = !0, x(O)) }, _ = function() { D = null, A = !1, F = -1 } } t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, n) { switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3 } var r = i,
        s = a;
      i = e, a = t.unstable_now(); try { return n() } finally { i = r, a = s, c() } }, t.unstable_next = function(e) { switch (i) {
        case 1:
        case 2:
        case 3:
          var n = 3; break;
        default:
          n = i } var r = i,
        s = a;
      i = n, a = t.unstable_now(); try { return e() } finally { i = r, a = s, c() } }, t.unstable_scheduleCallback = function(e, r) { var s = -1 !== a ? a : t.unstable_now(); if ("object" == typeof r && null !== r && "number" == typeof r.timeout) r = s + r.timeout;
      else switch (i) {
        case 1:
          r = s + -1; break;
        case 2:
          r = s + 250; break;
        case 5:
          r = s + 1073741823; break;
        case 4:
          r = s + 1e4; break;
        default:
          r = s + 5e3 }
      if (e = { callback: e, priorityLevel: i, expirationTime: r, next: null, previous: null }, null === n) n = e.next = e.previous = e, h();
      else { s = null; var o = n;
        do { if (o.expirationTime > r) { s = o; break } o = o.next } while (o !== n);
        null === s ? s = n : s === n && (n = e, h()), (r = s.previous).next = s.previous = e, e.next = s, e.previous = r } return e }, t.unstable_cancelCallback = function(e) { var t = e.next; if (null !== t) { if (t === e) n = null;
        else { e === n && (n = t); var r = e.previous;
          r.next = t, t.previous = r } e.next = e.previous = null } }, t.unstable_wrapCallback = function(e) { var n = i; return function() { var r = i,
          s = a;
        i = n, a = t.unstable_now(); try { return e.apply(this, arguments) } finally { i = r, a = s, c() } } }, t.unstable_getCurrentPriorityLevel = function() { return i }, t.unstable_shouldYield = function() { return !r && (null !== n && n.expirationTime < s || w()) }, t.unstable_continueExecution = function() { null !== n && h() }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() { return n }
  }).call(this, n(12))
}, function(e, t, n) { var r = n(69); "string" == typeof r && (r = [
    [e.i, r, ""]
  ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
  n(71)(r, i);
  r.locals && (e.exports = r.locals) }, function(e, t, n) {
  (e.exports = n(70)(!1)).push([e.i, '* {\n  box-sizing: border-box;\n  user-select: none; }\n\n/*  Typography */\n@font-face {\n  font-family: \'Inter\';\n  font-style: normal;\n  font-weight: 400;\n  src: url("https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.7") format("woff2"), url("https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.7") format("woff"); }\n\n@font-face {\n  font-family: \'Inter\';\n  font-style: normal;\n  font-weight: 500;\n  src: url("https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7") format("woff2"), url("https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7") format("woff"); }\n\n@font-face {\n  font-family: \'Inter\';\n  font-style: normal;\n  font-weight: 600;\n  src: url("https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7") format("woff2"), url("https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7") format("woff"); }\n\n.icon {\n  width: 32px;\n  height: 32px;\n  cursor: default;\n  color: #000000;\n  background-repeat: no-repeat;\n  background-position: 0 0; }\n  .icon--blue {\n    color: #18a0fb;\n    background-position: 0 -64px; }\n  .icon--black-3 {\n    color: rgba(0, 0, 0, 0.3);\n    background-position: 0 -32px; }\n  .icon--button {\n    border: 2px solid transparent;\n    border-radius: 2px;\n    outline: none;\n    background-position: -2px -2px; }\n    .icon--button:hover {\n      background-color: rgba(0, 0, 0, 0.06); }\n    .icon--button:active {\n      border: 2px solid #18a0fb;\n      background-color: rgba(0, 0, 0, 0.06); }\n    .icon--button:disabled {\n      opacity: .37; }\n  .icon--text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: "Inter", sans-serif;\n    font-size: 11px; }\n  .icon--adjust {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m12%2016.05v-7.05h1v7.05c1.1411.2316%202%201.2405%202%202.45s-.8589%202.2184-2%202.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184%202-2.45zm2%202.45c0%20.8284-.6716%201.5-1.5%201.5s-1.5-.6716-1.5-1.5.6716-1.5%201.5-1.5%201.5.6716%201.5%201.5zm5%204.5h1v-7.05c1.1411-.2316%202-1.2405%202-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2%201.2405-2%202.45s.8589%202.2184%202%202.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5%201.5.6716%201.5%201.5%201.5%201.5-.6716%201.5-1.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m12%2048.05v-7.05h1v7.05c1.1411.2316%202%201.2405%202%202.45s-.8589%202.2184-2%202.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184%202-2.45zm2%202.45c0%20.8284-.6716%201.5-1.5%201.5s-1.5-.6716-1.5-1.5.6716-1.5%201.5-1.5%201.5.6716%201.5%201.5zm5%204.5h1v-7.05c1.1411-.2316%202-1.2405%202-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2%201.2405-2%202.45s.8589%202.2184%202%202.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5%201.5.6716%201.5%201.5%201.5%201.5-.6716%201.5-1.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m12%2080.05v-7.05h1v7.05c1.1411.2316%202%201.2405%202%202.45s-.8589%202.2184-2%202.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184%202-2.45zm2%202.45c0%20.8284-.6716%201.5-1.5%201.5s-1.5-.6716-1.5-1.5.6716-1.5%201.5-1.5%201.5.6716%201.5%201.5zm5%204.5h1v-7.05c1.1411-.2316%202-1.2405%202-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2%201.2405-2%202.45s.8589%202.2184%202%202.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5%201.5.6716%201.5%201.5%201.5%201.5-.6716%201.5-1.5z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--angle {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m12%2012v7.5.5h.5%207.5v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1%204v3h3c0-1.6569-1.3431-3-3-3z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m12%2044v7.5.5h.5%207.5v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1%204v3h3c0-1.6569-1.3431-3-3-3z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m12%2076v7.5.5h.5%207.5v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1%204v3h3c0-1.6569-1.3431-3-3-3z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--break {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m13.0002%209v3h1v-3zm9.1031.89644c-1.1617-1.16176-3.0453-1.16176-4.2071.00002l-2.7499%202.74994.7071.7071%202.7499-2.7499c.7712-.77128%202.0217-.77129%202.7929%200%20.7712.7712.7713%202.0216%200%202.7928l-2.7499%202.75.7071.7071%202.7499-2.75c1.1618-1.1617%201.1618-3.0453%200-4.20706zm-12.20691%2012.20706c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75%202.75c-.77124.7713-.77124%202.0217%200%202.7929.7712.7713%202.0216.7713%202.7929%200l2.75-2.75.7071.7071-2.75%202.75c-1.1618%201.1618-3.0454%201.1618-4.20711%200zm13.10341-3.1035h-3v-1h3zm-3.9994%201v3h-1v-3zm-7.0006-7h-3.00004v1h3.00004z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22m13.0002%2041v3h1v-3zm9.1031.8964c-1.1617-1.1617-3.0453-1.1617-4.2071.0001l-2.7499%202.7499.7071.7071%202.7499-2.7499c.7712-.7713%202.0217-.7713%202.7929%200%20.7712.7712.7713%202.0216%200%202.7928l-2.7499%202.75.7071.7071%202.7499-2.75c1.1618-1.1617%201.1618-3.0453%200-4.2071zm-12.20691%2012.2071c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75%202.75c-.77124.7713-.77124%202.0217%200%202.7929.7712.7713%202.0216.7713%202.7929%200l2.75-2.75.7071.7071-2.75%202.75c-1.1618%201.1618-3.0454%201.1618-4.20711%200zm13.10341-3.1035h-3v-1h3zm-3.9994%201v3h-1v-3zm-7.0006-7h-3.00004v1h3.00004z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22m13.0002%2073v3h1v-3zm9.1031.8965c-1.1617-1.1618-3.0453-1.1618-4.2071%200l-2.7499%202.7499.7071.7071%202.7499-2.7499c.7712-.7713%202.0217-.7713%202.7929%200%20.7712.7712.7713%202.0216%200%202.7928l-2.7499%202.75.7071.7071%202.7499-2.7499c1.1618-1.1618%201.1618-3.0454%200-4.2071zm-12.20691%2012.207c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75%202.75c-.77124.7713-.77124%202.0217%200%202.7929.7712.7713%202.0216.7713%202.7929%200l2.75-2.75.7071.7071-2.75%202.75c-1.1618%201.1618-3.0454%201.1618-4.20711%200zm13.10341-3.1035h-3v-1h3zm-3.9994%201v3h-1v-3zm-7.0006-7h-3.00004v1h3.00004z%22%20fill%3D%22%2318a0fb%22%20opacity%3D%22.9%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--close {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m16%2015.293%204.6465-4.6464.7071.7071-4.6465%204.6464%204.6465%204.6465-.7071.7071-4.6465-4.6464-4.6464%204.6464-.7071-.7071%204.6464-4.6465-4.6464-4.6463.7071-.7071z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m16%2047.293%204.6465-4.6464.7071.7071-4.6465%204.6464%204.6465%204.6465-.7071.7071-4.6465-4.6464-4.6464%204.6464-.7071-.7071%204.6464-4.6465-4.6464-4.6463.7071-.7071z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m16%2079.293%204.6465-4.6464.7071.7071-4.6465%204.6464%204.6465%204.6465-.7071.7071-4.6465-4.6464-4.6464%204.6464-.7071-.7071%204.6464-4.6465-4.6464-4.6463.7071-.7071z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--ellipses {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m11.5%2016c0%20.8284-.6716%201.5-1.5%201.5-.82843%200-1.5-.6716-1.5-1.5s.67157-1.5%201.5-1.5c.8284%200%201.5.6716%201.5%201.5zm6%200c0%20.8284-.6716%201.5-1.5%201.5s-1.5-.6716-1.5-1.5.6716-1.5%201.5-1.5%201.5.6716%201.5%201.5zm4.5%201.5c.8284%200%201.5-.6716%201.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5%201.5.6716%201.5%201.5%201.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m11.5%2048c0%20.8284-.6716%201.5-1.5%201.5-.82843%200-1.5-.6716-1.5-1.5s.67157-1.5%201.5-1.5c.8284%200%201.5.6716%201.5%201.5zm6%200c0%20.8284-.6716%201.5-1.5%201.5s-1.5-.6716-1.5-1.5.6716-1.5%201.5-1.5%201.5.6716%201.5%201.5zm4.5%201.5c.8284%200%201.5-.6716%201.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5%201.5.6716%201.5%201.5%201.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m11.5%2080c0%20.8284-.6716%201.5-1.5%201.5-.82843%200-1.5-.6716-1.5-1.5s.67157-1.5%201.5-1.5c.8284%200%201.5.6716%201.5%201.5zm6%200c0%20.8284-.6716%201.5-1.5%201.5s-1.5-.6716-1.5-1.5.6716-1.5%201.5-1.5%201.5.6716%201.5%201.5zm4.5%201.5c.8284%200%201.5-.6716%201.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5%201.5.6716%201.5%201.5%201.5z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--eyedropper {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m22.4473%209.6c-.8-.8-2-.8-2.8%200l-2.8001%202.8-.8-.7c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l.7.7-5.79995%205.8c-.4.4-1%201.9%200%202.9.99995%201%202.49995.4%202.89995%200l5.8-5.8.7001.7c.4.4%201%20.4%201.4%200s.4-1%200-1.4l-.7-.7%202.8-2.8c.8-.9.8-2.1%200-2.9zm-10.9001%2011.9h-1v-1l5.8-5.8%201%201c-.1%200-5.8%205.8-5.8%205.8z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m22.4473%2041.6c-.8-.8-2-.8-2.8%200l-2.8001%202.8-.8-.7c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l.7.7-5.79995%205.8c-.4.4-1%201.9%200%202.9.99995%201%202.49995.4%202.89995%200l5.8-5.8.7001.7c.4.4%201%20.4%201.4%200s.4-1%200-1.4l-.7-.7%202.8-2.8c.8-.9.8-2.1%200-2.9zm-10.9001%2011.9h-1v-1l5.8-5.8%201%201c-.1%200-5.8%205.8-5.8%205.8z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m22.4473%2073.6c-.8-.8-2-.8-2.8%200l-2.8001%202.8-.8-.7c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l.7.7-5.79995%205.8c-.4.4-1%201.9%200%202.9.99995%201%202.49995.4%202.89995%200l5.8-5.8.7001.7c.4.4%201%20.4%201.4%200s.4-1%200-1.4l-.7-.7%202.8-2.8c.8-.9.8-2.1%200-2.9zm-10.9001%2011.9h-1v-1l5.8-5.8%201%201c-.1%200-5.8%205.8-5.8%205.8z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--hidden {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m21.5085%2015.8012c.5554-.5276%201.0351-1.134%201.421-1.8012h-1.1842c-1.2655%201.8142-3.3673%203-5.7454%203-2.3782%200-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567%201.2737%201.42108%201.8013l-1.59482%201.5949.70712.7071%201.6573-1.6574c.7108.5234%201.5112.9321%202.3742%201.1988l-.6171%202.2213.9636.2676.6262-2.2543c.452.0793.9172.1207%201.3921.1207.4748%200%20.9399-.0414%201.392-.1207l.6261%202.2543.9636-.2676-.617-2.2213c.863-.2666%201.6635-.6754%202.3743-1.1989l1.6576%201.6575.7071-.7071z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m21.5085%2047.8012c.5554-.5276%201.0351-1.134%201.421-1.8012h-1.1842c-1.2655%201.8142-3.3673%203-5.7454%203-2.3782%200-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567%201.2737%201.42108%201.8013l-1.59482%201.5949.70712.7071%201.6573-1.6574c.7108.5234%201.5112.9321%202.3742%201.1988l-.6171%202.2213.9636.2676.6262-2.2543c.452.0793.9172.1207%201.3921.1207.4748%200%20.9399-.0414%201.392-.1207l.6261%202.2543.9636-.2676-.617-2.2213c.863-.2666%201.6635-.6754%202.3743-1.1989l1.6576%201.6575.7071-.7071z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m21.5085%2079.8012c.5554-.5276%201.0351-1.134%201.421-1.8012h-1.1842c-1.2655%201.8142-3.3673%203-5.7454%203-2.3782%200-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567%201.2737%201.42108%201.8013l-1.59482%201.5949.70712.7071%201.6573-1.6574c.7108.5234%201.5112.9321%202.3742%201.1988l-.6171%202.2213.9636.2676.6262-2.2543c.452.0793.9172.1207%201.3921.1207.4748%200%20.9399-.0414%201.392-.1207l.6261%202.2543.9636-.2676-.617-2.2213c.863-.2666%201.6635-.6754%202.3743-1.1989l1.6576%201.6575.7071-.7071z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--hyperlink {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m13.5%2018c1.9593%200%203.6262-1.2522%204.2439-3h1.0491c-.653%202.3085-2.7754%204-5.293%204-3.0376%200-5.5-2.4624-5.5-5.5s2.4624-5.5%205.5-5.5c2.5176%200%204.64%201.6915%205.293%204h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853%200-4.5%202.0147-4.5%204.5s2.0147%204.5%204.5%204.5zm5%205c2.4853%200%204.5-2.0147%204.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593%200-3.6262%201.2522-4.2439%203h-1.0491c.653-2.3085%202.7754-4%205.293-4%203.0376%200%205.5%202.4624%205.5%205.5s-2.4624%205.5-5.5%205.5c-2.5176%200-4.64-1.6915-5.293-4h1.0491c.6177%201.7478%202.2846%203%204.2439%203z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m13.5%2050c1.9593%200%203.6262-1.2522%204.2439-3h1.0491c-.653%202.3085-2.7754%204-5.293%204-3.0376%200-5.5-2.4624-5.5-5.5s2.4624-5.5%205.5-5.5c2.5176%200%204.64%201.6915%205.293%204h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853%200-4.5%202.0147-4.5%204.5s2.0147%204.5%204.5%204.5zm5%205c2.4853%200%204.5-2.0147%204.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593%200-3.6262%201.2522-4.2439%203h-1.0491c.653-2.3085%202.7754-4%205.293-4%203.0376%200%205.5%202.4624%205.5%205.5s-2.4624%205.5-5.5%205.5c-2.5176%200-4.64-1.6915-5.293-4h1.0491c.6177%201.7478%202.2846%203%204.2439%203z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m13.5%2082c1.9593%200%203.6262-1.2522%204.2439-3h1.0491c-.653%202.3085-2.7754%204-5.293%204-3.0376%200-5.5-2.4624-5.5-5.5s2.4624-5.5%205.5-5.5c2.5176%200%204.64%201.6915%205.293%204h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853%200-4.5%202.0147-4.5%204.5s2.0147%204.5%204.5%204.5zm5%205c2.4853%200%204.5-2.0147%204.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593%200-3.6262%201.2522-4.2439%203h-1.0491c.653-2.3085%202.7754-4%205.293-4%203.0376%200%205.5%202.4624%205.5%205.5s-2.4624%205.5-5.5%205.5c-2.5176%200-4.64-1.6915-5.293-4h1.0491c.6177%201.7478%202.2846%203%204.2439%203z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--link-broken {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m18%2014v-2c0-1.1046-.8954-2-2-2s-2%20.8954-2%202v2h-1v-2c0-1.6569%201.3431-3%203-3s3%201.3431%203%203v2zm1%204h-1v2c0%201.1046-.8954%202-2%202s-2-.8954-2-2v-2h-1v2c0%201.6569%201.3431%203%203%203s3-1.3431%203-3z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m18%2046v-2c0-1.1046-.8954-2-2-2s-2%20.8954-2%202v2h-1v-2c0-1.6569%201.3431-3%203-3s3%201.3431%203%203v2zm1%204h-1v2c0%201.1046-.8954%202-2%202s-2-.8954-2-2v-2h-1v2c0%201.6569%201.3431%203%203%203s3-1.3431%203-3z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m18%2078v-2c0-1.1046-.8954-2-2-2s-2%20.8954-2%202v2h-1v-2c0-1.6569%201.3431-3%203-3s3%201.3431%203%203v2zm1%204h-1v2c0%201.1046-.8954%202-2%202s-2-.8954-2-2v-2h-1v2c0%201.6569%201.3431%203%203%203s3-1.3431%203-3z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--link {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m16%2010c1.1046%200%202%20.8954%202%202v2h1v-2c0-1.6569-1.3431-3-3-3s-3%201.3431-3%203v2h1v-2c0-1.1046.8954-2%202-2zm2%208h1v2c0%201.6569-1.3431%203-3%203s-3-1.3431-3-3v-2h1v2c0%201.1046.8954%202%202%202s2-.8954%202-2zm-2.5-5v6h1v-6z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m16%2042c1.1046%200%202%20.8954%202%202v2h1v-2c0-1.6569-1.3431-3-3-3s-3%201.3431-3%203v2h1v-2c0-1.1046.8954-2%202-2zm2%208h1v2c0%201.6569-1.3431%203-3%203s-3-1.3431-3-3v-2h1v2c0%201.1046.8954%202%202%202s2-.8954%202-2zm-2.5-5v6h1v-6z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m16%2074c1.1046%200%202%20.8954%202%202v2h1v-2c0-1.6569-1.3431-3-3-3s-3%201.3431-3%203v2h1v-2c0-1.1046.8954-2%202-2zm2%208h1v2c0%201.6569-1.3431%203-3%203s-3-1.3431-3-3v-2h1v2c0%201.1046.8954%202%202%202s2-.8954%202-2zm-2.5-5v6h1v-6z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--lock {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m17.5%2013.5v1.5h-3v-1.5c0-.8284.6716-1.5%201.5-1.5s1.5.6716%201.5%201.5zm-4%201.5v-1.5c0-1.3807%201.1193-2.5%202.5-2.5s2.5%201.1193%202.5%202.5v1.5h.5c.2761%200%20.5.2239.5.5v5c0%20.2761-.2239.5-.5.5h-6c-.2761%200-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m17.5%2045.5v1.5h-3v-1.5c0-.8284.6716-1.5%201.5-1.5s1.5.6716%201.5%201.5zm-4%201.5v-1.5c0-1.3807%201.1193-2.5%202.5-2.5s2.5%201.1193%202.5%202.5v1.5h.5c.2761%200%20.5.2239.5.5v5c0%20.2761-.2239.5-.5.5h-6c-.2761%200-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m17.5%2077.5v1.5h-3v-1.5c0-.8284.6716-1.5%201.5-1.5s1.5.6716%201.5%201.5zm-4%201.5v-1.5c0-1.3807%201.1193-2.5%202.5-2.5s2.5%201.1193%202.5%202.5v1.5h.5c.2761%200%20.5.2239.5.5v5c0%20.2761-.2239.5-.5.5h-6c-.2761%200-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--minus {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m21.5%2016.5h-11v-1h11z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m21.5%2048.5h-11v-1h11z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m21.5%2080.5h-11v-1h11z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--play {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m13%2010.0979.765.4781%208%205%20.6784.424-.6784.424-8%205-.765.4781v-.9021-10zm1%201.8042v8.1958l6.5566-4.0979z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m13%2042.0979.765.4781%208%205%20.6784.424-.6784.424-8%205-.765.4781v-.9021-10zm1%201.8042v8.1958l6.5566-4.0979z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m13%2074.0979.765.4781%208%205%20.6784.424-.6784.424-8%205-.765.4781v-.9021-10zm1%201.8042v8.1958l6.5566-4.0979z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--plus {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m15.5%2015.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m15.5%2047.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m15.5%2079.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--recent {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m23%2016c0%203.866-3.134%207-7%207s-7-3.134-7-7%203.134-7%207-7%207%203.134%207%207zm1%200c0%204.4183-3.5817%208-8%208s-8-3.5817-8-8%203.5817-8%208-8%208%203.5817%208%208zm-9-4v4.5.5h.5%204.5v-1h-4v-4z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m23%2048c0%203.866-3.134%207-7%207s-7-3.134-7-7%203.134-7%207-7%207%203.134%207%207zm1%200c0%204.4183-3.5817%208-8%208s-8-3.5817-8-8%203.5817-8%208-8%208%203.5817%208%208zm-9-4v4.5.5h.5%204.5v-1h-4v-4z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m23%2080c0%203.866-3.134%207-7%207s-7-3.134-7-7%203.134-7%207-7%207%203.134%207%207zm1%200c0%204.4183-3.5817%208-8%208s-8-3.5817-8-8%203.5817-8%208-8%208%203.5817%208%208zm-9-4v4.5.5h.5%204.5v-1h-4v-4z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--recent {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m16%2023.9999c4.4183%200%208-3.5817%208-8s-3.5817-8.00002-8-8.00002-8%203.58172-8%208.00002%203.5817%208%208%208zm-.0889-5.1346%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m16%2055.9999c4.4183%200%208-3.5817%208-8s-3.5817-8-8-8-8%203.5817-8%208%203.5817%208%208%208zm-.0889-5.1346%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m16%2087.9999c4.4183%200%208-3.5817%208-8s-3.5817-8-8-8-8%203.5817-8%208%203.5817%208%208%208zm-.0889-5.1346%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--resolve-filled {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m16%2023.9999c4.4183%200%208-3.5817%208-8s-3.5817-8.00002-8-8.00002-8%203.58172-8%208.00002%203.5817%208%208%208zm-.0889-5.1346%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m16%2055.9999c4.4183%200%208-3.5817%208-8s-3.5817-8-8-8-8%203.5817-8%208%203.5817%208%208%208zm-.0889-5.1346%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m16%2087.9999c4.4183%200%208-3.5817%208-8s-3.5817-8-8-8-8%203.5817-8%208%203.5817%208%208%208zm-.0889-5.1346%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--resolve {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m23%2015.9999c0%203.866-3.134%207-7%207s-7-3.134-7-7%203.134-7.00002%207-7.00002%207%203.13402%207%207.00002zm1%200c0%204.4183-3.5817%208-8%208s-8-3.5817-8-8%203.5817-8.00002%208-8.00002%208%203.58172%208%208.00002zm-8.0889%202.8654%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m23%2047.9999c0%203.866-3.134%207-7%207s-7-3.134-7-7%203.134-7%207-7%207%203.134%207%207zm1%200c0%204.4183-3.5817%208-8%208s-8-3.5817-8-8%203.5817-8%208-8%208%203.5817%208%208zm-8.0889%202.8654%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m23%2079.9999c0%203.866-3.134%207-7%207s-7-3.134-7-7%203.134-7%207-7%207%203.134%207%207zm1%200c0%204.4183-3.5817%208-8%208s-8-3.5817-8-8%203.5817-8%208-8%208%203.5817%208%208zm-8.0889%202.8654%204-4.4999-.8222-.7308-3.6125%204.0639-2.5875-2.5874-.7778.7778%203%202.9999.4125.4124z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--search {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m20%2015c0%202.7614-2.2386%205-5%205s-5-2.2386-5-5%202.2386-5%205-5%205%202.2386%205%205zm-1.1256%204.5815c-1.0453.8849-2.3975%201.4185-3.8744%201.4185-3.3137%200-6-2.6863-6-6s2.6863-6%206-6%206%202.6863%206%206c0%201.4769-.5336%202.8291-1.4185%203.8744l4.2721%204.272-.7072.7072z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m20%2047c0%202.7614-2.2386%205-5%205s-5-2.2386-5-5%202.2386-5%205-5%205%202.2386%205%205zm-1.1256%204.5815c-1.0453.8849-2.3975%201.4185-3.8744%201.4185-3.3137%200-6-2.6863-6-6s2.6863-6%206-6%206%202.6863%206%206c0%201.4769-.5336%202.8291-1.4185%203.8744l4.2721%204.272-.7072.7072z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m20%2079c0%202.7614-2.2386%205-5%205s-5-2.2386-5-5%202.2386-5%205-5%205%202.2386%205%205zm-1.1256%204.5815c-1.0453.8849-2.3975%201.4185-3.8744%201.4185-3.3137%200-6-2.6863-6-6s2.6863-6%206-6%206%202.6863%206%206c0%201.4769-.5336%202.8291-1.4185%203.8744l4.2721%204.272-.7072.7072z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--trash {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m15%209.5c-.5523%200-1%20.44772-1%201h4c0-.55228-.4477-1-1-1zm4%201c0-1.10457-.8954-2-2-2h-2c-1.1046%200-2%20.89543-2%202h-1.5-1.5v1h1v10c0%201.1046.8954%202%202%202h6c1.1046%200%202-.8954%202-2v-10h1v-1h-1.5zm1%201h-1.5-5-1.5v10c0%20.5523.4477%201%201%201h6c.5523%200%201-.4477%201-1zm-6%207v-4h1v4zm3%200v-4h1v4z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m15%2041.5c-.5523%200-1%20.4477-1%201h4c0-.5523-.4477-1-1-1zm4%201c0-1.1046-.8954-2-2-2h-2c-1.1046%200-2%20.8954-2%202h-1.5-1.5v1h1v10c0%201.1046.8954%202%202%202h6c1.1046%200%202-.8954%202-2v-10h1v-1h-1.5zm1%201h-1.5-5-1.5v10c0%20.5523.4477%201%201%201h6c.5523%200%201-.4477%201-1zm-6%207v-4h1v4zm3%200v-4h1v4z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m15%2073.5c-.5523%200-1%20.4477-1%201h4c0-.5523-.4477-1-1-1zm4%201c0-1.1046-.8954-2-2-2h-2c-1.1046%200-2%20.8954-2%202h-1.5-1.5v1h1v10c0%201.1046.8954%202%202%202h6c1.1046%200%202-.8954%202-2v-10h1v-1h-1.5zm1%201h-1.5-5-1.5v10c0%20.5523.4477%201%201%201h6c.5523%200%201-.4477%201-1zm-6%207v-4h1v4zm3%200v-4h1v4z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--unlock {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m18%2014v1h.5c.2761%200%20.5.2239.5.5v5c0%20.2761-.2239.5-.5.5h-6c-.2761%200-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807%201.1193-2.5%202.5-2.5s2.5%201.1193%202.5%202.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5%201.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m18%2046v1h.5c.2761%200%20.5.2239.5.5v5c0%20.2761-.2239.5-.5.5h-6c-.2761%200-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807%201.1193-2.5%202.5-2.5s2.5%201.1193%202.5%202.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5%201.5z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m18%2078v1h.5c.2761%200%20.5.2239.5.5v5c0%20.2761-.2239.5-.5.5h-6c-.2761%200-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807%201.1193-2.5%202.5-2.5s2.5%201.1193%202.5%202.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5%201.5z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n  .icon--visible {\n    background-image: url("data:image/svg+xml;utf8,\\a         %3Csvg%20fill%3D%22none%22%20height%3D%2296%22%20viewBox%3D%220%200%2032%2096%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m16.0001%2019c-2.2999%200-4.3222-1.1942-5.4784-3%201.1562-1.8058%203.1785-3%205.4784-3%202.2998%200%204.3221%201.1942%205.4783%203-1.1562%201.8058-3.1785%203-5.4783%203zm0-7c2.878%200%205.3774%201.6211%206.6349%204-1.2575%202.3789-3.7569%204-6.6349%204-2.8781%200-5.3775-1.6211-6.63499-4%201.25749-2.3789%203.75689-4%206.63499-4zm.0003%206c1.1045%200%202-.8954%202-2s-.8955-2-2-2c-1.1046%200-2%20.8954-2%202s.8954%202%202%202z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m16.0001%2051c-2.2999%200-4.3222-1.1942-5.4784-3%201.1562-1.8058%203.1785-3%205.4784-3%202.2998%200%204.3221%201.1942%205.4783%203-1.1562%201.8058-3.1785%203-5.4783%203zm0-7c2.878%200%205.3774%201.6211%206.6349%204-1.2575%202.3789-3.7569%204-6.6349%204-2.8781%200-5.3775-1.6211-6.63499-4%201.25749-2.3789%203.75689-4%206.63499-4zm.0003%206c1.1045%200%202-.8954%202-2s-.8955-2-2-2c-1.1046%200-2%20.8954-2%202s.8954%202%202%202z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22m16.0001%2083c-2.2999%200-4.3222-1.1942-5.4784-3%201.1562-1.8058%203.1785-3%205.4784-3%202.2998%200%204.3221%201.1942%205.4783%203-1.1562%201.8058-3.1785%203-5.4783%203zm0-7c2.878%200%205.3774%201.6211%206.6349%204-1.2575%202.3789-3.7569%204-6.6349%204-2.8781%200-5.3775-1.6211-6.63499-4%201.25749-2.3789%203.75689-4%206.63499-4zm.0003%206c1.1045%200%202-.8954%202-2s-.8955-2-2-2c-1.1046%200-2%20.8954-2%202s.8954%202%202%202z%22%20fill%3D%22%2318a0fb%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\\a         "); }\n\n.label {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 8px 4px 8px 8px;\n  color: rgba(0, 0, 0, 0.3);\n  background-color: #ffffff;\n  font-family: "Inter", sans-serif;\n  line-height: 16px;\n  font-weight: 400;\n  font-size: 11px;\n  letter-spacing: 0.005em; }\n\n.section-title {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 8px 4px 8px 8px;\n  color: rgba(0, 0, 0, 0.8);\n  background-color: #ffffff;\n  font-family: "Inter", sans-serif;\n  line-height: 16px;\n  font-weight: 600;\n  font-size: 11px;\n  letter-spacing: 0.005em; }\n\n.type {\n  margin: 0;\n  padding: 0; }\n  .type--11-pos {\n    color: rgba(0, 0, 0, 0.8);\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n  .type--11-pos-medium {\n    color: rgba(0, 0, 0, 0.8);\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 500;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n  .type--11-pos-bold {\n    color: rgba(0, 0, 0, 0.8);\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 600;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n  .type--12-pos {\n    color: rgba(0, 0, 0, 0.8);\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 12px;\n    letter-spacing: 0; }\n  .type--12-pos-medium {\n    color: rgba(0, 0, 0, 0.8);\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 500;\n    font-size: 12px;\n    letter-spacing: 0; }\n  .type--12-pos-bold {\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 600;\n    font-size: 12px;\n    letter-spacing: 0; }\n  .type--11-neg {\n    color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 11px;\n    letter-spacing: 0.01em; }\n  .type--11-neg-medium {\n    color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 500;\n    font-size: 11px;\n    letter-spacing: 0.01em; }\n  .type--11-neg-bold {\n    color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 600;\n    font-size: 11px;\n    letter-spacing: 0.01em; }\n  .type--12-neg {\n    color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 12px;\n    letter-spacing: 0.005em; }\n  .type--12-neg-medium {\n    color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 500;\n    font-size: 12px;\n    letter-spacing: 0.005em; }\n  .type--12-neg-bold {\n    color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 600;\n    font-size: 12px;\n    letter-spacing: 0.005em; }\n\n.button {\n  display: inline-block;\n  flex-shrink: 0;\n  margin: 1px 0 1px 0;\n  padding: 5px 16px 5px 16px;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  outline: none; }\n  .button--primary {\n    color: #ffffff;\n    background-color: #18a0fb;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 500;\n    font-size: 11px;\n    letter-spacing: 0.01em; }\n    .button--primary:active, .button--primary:focus {\n      border: 2px solid rgba(0, 0, 0, 0.3); }\n    .button--primary:disabled {\n      background-color: rgba(0, 0, 0, 0.3); }\n  .button--primary-destructive {\n    color: #ffffff;\n    background-color: #f24822; }\n    .button--primary-destructive:active, .button--primary-destructive:focus {\n      border: 2px solid rgba(0, 0, 0, 0.3); }\n    .button--primary-destructive:disabled {\n      opacity: .4; }\n  .button--secondary {\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(0, 0, 0, 0.8);\n    background-color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 500;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n    .button--secondary:active, .button--secondary:focus {\n      padding: 4px 15px;\n      border: 2px solid #18a0fb; }\n    .button--secondary:disabled {\n      color: rgba(0, 0, 0, 0.3);\n      border: 1px solid rgba(0, 0, 0, 0.3); }\n  .button--secondary-destructive {\n    color: #f24822;\n    border: 1px solid #f24822;\n    background-color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 500;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n    .button--secondary-destructive:active, .button--secondary-destructive:focus {\n      padding: 4px 23px 4px 23px;\n      border: 2px solid #f24822; }\n    .button--secondary-destructive:disabled {\n      opacity: .4; }\n\n.input {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  margin: 1px 0 1px 0;\n  padding: 8px 4px 8px 7px;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid transparent;\n  border-radius: 2px;\n  outline: none;\n  background-color: #ffffff;\n  font-family: "Inter", sans-serif;\n  line-height: 16px;\n  font-weight: 400;\n  font-size: 11px;\n  letter-spacing: 0.005em; }\n  .input:hover {\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(0, 0, 0, 0.1); }\n  .input:active, .input:focus {\n    padding: 8px 4px 8px 6px;\n    color: #000000;\n    border: 2px solid #18a0fb;\n    border-radius: 2px; }\n  .input::selection {\n    color: #000000;\n    background-color: rgba(24, 145, 251, 0.3); }\n  .input::placeholder {\n    color: rgba(0, 0, 0, 0.3); }\n  .input:disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.input-icon {\n  position: relative;\n  width: 100%; }\n  .input-icon__icon {\n    position: absolute;\n    top: -1px;\n    left: 0;\n    width: 32px;\n    height: 32px; }\n  .input-icon__input {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 30px;\n    margin: 1px 0 1px 0;\n    padding: 8px 4px 8px 0;\n    text-indent: 32px;\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid transparent;\n    border-radius: 2px;\n    outline: none;\n    background-color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n    .input-icon__input:hover {\n      color: rgba(0, 0, 0, 0.8);\n      border: 1px solid rgba(0, 0, 0, 0.1); }\n    .input-icon__input:active, .input-icon__input:focus {\n      margin-left: -1px;\n      padding: 8px 4px 8px 0;\n      color: #000000;\n      border: 2px solid #18a0fb;\n      border-radius: 2px; }\n    .input-icon__input::selection {\n      color: #000000;\n      background-color: rgba(24, 145, 251, 0.3); }\n    .input-icon__input::placeholder {\n      color: rgba(0, 0, 0, 0.3); }\n    .input-icon__input:disabled {\n      color: rgba(0, 0, 0, 0.3); }\n\n.textarea {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  min-height: 62px;\n  margin: 1px 8px 1px 8px;\n  padding: 7px 4px 7px 7px;\n  resize: none;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  outline: none;\n  background-color: #ffffff;\n  font-family: "Inter", sans-serif;\n  line-height: 16px;\n  font-weight: 400;\n  font-size: 11px;\n  letter-spacing: 0.005em; }\n  .textarea:active, .textarea:focus {\n    padding: 6px 4px 6px 6px;\n    color: #000000;\n    border: 2px solid #18a0fb;\n    border-radius: 2px; }\n  .textarea::selection {\n    color: #000000;\n    background-color: rgba(24, 145, 251, 0.3); }\n  .textarea::placeholder {\n    color: rgba(0, 0, 0, 0.3); }\n  .textarea:disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.select-dropdown {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 2;\n  flex-wrap: nowrap;\n  width: 100%;\n  font-family: "Inter", sans-serif;\n  line-height: 16px;\n  font-weight: 400;\n  font-size: 11px;\n  letter-spacing: 0.005em; }\n  .select-dropdown:last-child {\n    margin-right: 0; }\n  .select-dropdown__button {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 30px;\n    margin: 1px 0 1px 0 !important;\n    padding: 0 8px 0 8px;\n    text-align: left;\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid transparent;\n    border-radius: 2px;\n    background-color: #ffffff;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n    .select-dropdown__button span:after {\n      display: inline-block;\n      width: 7px;\n      height: 5px;\n      margin-top: 6px;\n      margin-left: 6px;\n      content: \'\';\n      background-color: transparent;\n      background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%225%22%20viewBox%3D%220%200%207%205%22%20width%3D%227%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m3%203.70711-3-3.000003.707107-.707107%202.646443%202.64645%202.64645-2.64645.70711.707107-3%203.000003-.35356.35355z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E"); }\n    .select-dropdown__button:hover {\n      padding: 0 8px 0 8px;\n      border: 1px solid rgba(0, 0, 0, 0.1); }\n      .select-dropdown__button:hover .chevron-down {\n        opacity: 1; }\n      .select-dropdown__button:hover span:after {\n        opacity: 0; }\n    .select-dropdown__button .chevron-down {\n      position: absolute;\n      top: 1px;\n      right: 0;\n      width: 30px;\n      height: 30px;\n      opacity: 0;\n      background-image: url("data:image/svg+xml;utf8,\\a             %3Csvg%20fill%3D%22none%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20width%3D%2230%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m15%2016.7071-3-3%20.7071-.7071%202.6465%202.6464%202.6464-2.6464.7071.7071-3%203-.3535.3536z%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\\a             ");\n      background-repeat: no-repeat;\n      background-position: 0 0; }\n    .select-dropdown__button:focus, .select-dropdown__button--active {\n      width: 100%;\n      padding: 0 7px 0 7px;\n      border: 2px solid #18a0fb;\n      outline: none; }\n      .select-dropdown__button:focus .chevron-down, .select-dropdown__button--active .chevron-down {\n        opacity: 1; }\n      .select-dropdown__button:focus span:after, .select-dropdown__button--active span:after {\n        opacity: 0; }\n  .select-dropdown__list {\n    position: absolute;\n    z-index: 2;\n    top: 31px;\n    right: 0;\n    left: 0;\n    display: block;\n    overflow: auto;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    pointer-events: none;\n    opacity: 0;\n    box-shadow: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15); }\n    .select-dropdown__list:before {\n      display: block;\n      height: 8px;\n      content: \'\';\n      border-top-left-radius: 2px;\n      border-top-right-radius: 2px;\n      background-color: #222222; }\n    .select-dropdown__list:after {\n      display: block;\n      height: 8px;\n      content: \'\';\n      border-bottom-right-radius: 2px;\n      border-bottom-left-radius: 2px;\n      background-color: #222222; }\n    .select-dropdown__list.active {\n      pointer-events: auto;\n      opacity: 1; }\n  .select-dropdown__list-item {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    padding: 0 16px 0 32px;\n    list-style-type: none;\n    text-align: left;\n    cursor: pointer;\n    color: #ffffff;\n    background-color: #222222;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 12px;\n    letter-spacing: 0.005em; }\n    .select-dropdown__list-item:hover {\n      color: #ffffff;\n      background-color: #18a0fb; }\n    .select-dropdown__list-item--selected {\n      background-image: url("data:image/svg+xml;utf8,\\a \t\t\t%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\\a \t\t\t");\n      background-repeat: no-repeat;\n      background-position: 8px 4px; }\n    .select-dropdown__list-item--initial {\n      background-color: #18a0fb; }\n  .select-dropdown__divider {\n    margin: 0;\n    padding: 8px 0 8px 0;\n    background-color: #222222; }\n  .select-dropdown__line {\n    display: block;\n    height: 1px;\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.switch {\n  position: relative;\n  display: flex;\n  align-items: center;\n  align-self: 1;\n  flex-direction: row;\n  cursor: default; }\n  .switch__container {\n    position: relative;\n    width: 24px;\n    height: 12px;\n    margin: 10px 16px 10px 8px; }\n  .switch__label {\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n  .switch__checkbox {\n    width: 0;\n    height: 0;\n    opacity: 0; }\n    .switch__checkbox:checked + .switch__slider {\n      background-color: #000000; }\n    .switch__checkbox:focus + .switch__slider {\n      box-shadow: 0 0 1px #2196f3; }\n    .switch__checkbox:checked + .switch__slider:before {\n      -webkit-transform: translateX(12px);\n      -ms-transform: translateX(12px);\n      transform: translateX(12px); }\n  .switch__slider {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transition: transform .2s;\n    transition: background-color 0 .2s;\n    border: 1px solid #000000;\n    border-radius: 12px;\n    background-color: #ffffff; }\n    .switch__slider::before {\n      position: absolute;\n      top: -1px;\n      left: -1px;\n      width: 10px;\n      height: 10px;\n      content: \'\';\n      transition: transform .2s;\n      transition: background-color 0 .2s;\n      border: 1px solid #000000;\n      border-radius: 50%;\n      background-color: white; }\n\n.checkbox {\n  display: flex;\n  flex-direction: row;\n  height: 28px;\n  cursor: default; }\n  .checkbox__container {\n    position: relative;\n    width: 32px;\n    height: 32px; }\n  .checkbox__label {\n    display: flex;\n    align-items: center;\n    padding-top: 4px;\n    font-family: "Inter", sans-serif;\n    line-height: 16px;\n    font-weight: 400;\n    font-size: 11px;\n    letter-spacing: 0.005em; }\n  .checkbox__box {\n    position: absolute;\n    width: 0;\n    height: 0;\n    opacity: 0; }\n    .checkbox__box:checked ~ .checkbox__mark {\n      border: 1px solid #18a0fb;\n      background-color: #18a0fb; }\n    .checkbox__box:checked ~ .checkbox__mark:after {\n      display: block; }\n  .checkbox__mark {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 12px;\n    height: 12px;\n    border: 1px solid #000000;\n    border-radius: 2px;\n    background-color: #ffffff; }\n    .checkbox__mark:after {\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      content: \'\';\n      background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");\n      background-repeat: no-repeat;\n      background-position: 1px 2px; }\n\n.divider {\n  display: block;\n  width: 100%;\n  height: 1px;\n  margin: 8px 0 8px 0;\n  padding: 0;\n  background-color: #e5e5e5; }\n\n/* body {\n  font: 12px sans-serif;\n  text-align: center;\n  margin: 20px;\n}\nbutton {\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 15px;\n  margin: 0 5px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n#create {\n  box-shadow: none;\n  background: #18A0FB;\n  color: white;\n}\ninput {\n  border: none;\n  outline: none;\n  padding: 8px;\n}\ninput:hover { box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1); }\nbutton:focus { box-shadow: inset 0 0 0 2px #18A0FB; }\n#create:focus { box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3); }\ninput:focus { box-shadow: inset 0 0 0 2px #18A0FB; } */\n/* .left {\n  float: left;\n  position: relative;\n  height: 150px;\n}\n\n.right {\n  width: 80%;\n  float: left;\n  position: relative;\n  padding: 16px;\n  margin-top: 32px;\n} */\n.input {\n  font-size: 16px; }\n\n.container {\n  /* display: flex; */ }\n\n.footer {\n  width: 100%;\n  padding: 16px; }\n\n.button {\n  margin: 8px;\n  float: right; }\n\n.error {\n  color: red; }\n\np.type {\n  padding-left: 8px; }\n', ""]) }, function(e, t, n) { "use strict";
  e.exports = function(e) { var t = []; return t.toString = function() { return this.map(function(t) { var n = function(e, t) { var n = e[1] || "",
            r = e[3]; if (!r) return n; if (t && "function" == typeof btoa) { var i = (s = r, o = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(l, " */")),
              a = r.sources.map(function(e) { return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */") }); return [n].concat(a).concat([i]).join("\n") } var s, o, l; return [n].join("\n") }(t, e); return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n }).join("") }, t.i = function(e, n) { "string" == typeof e && (e = [
        [null, e, ""]
      ]); for (var r = {}, i = 0; i < this.length; i++) { var a = this[i][0];
        null != a && (r[a] = !0) } for (var s = 0; s < e.length; s++) { var o = e[s];
        null != o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(".concat(o[2], ") and (").concat(n, ")")), t.push(o)) } }, t } }, function(e, t, n) { var r, i, a = {},
    s = (r = function() { return window && document && document.all && !window.atob }, function() { return void 0 === i && (i = r.apply(this, arguments)), i }),
    o = function(e) { var t = {}; return function(e, n) { if ("function" == typeof e) return e(); if (void 0 === t[e]) { var r = function(e, t) { return t ? t.querySelector(e) : document.querySelector(e) }.call(this, e, n); if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try { r = r.contentDocument.head } catch (e) { r = null } t[e] = r } return t[e] } }(),
    l = null,
    h = 0,
    p = [],
    c = n(72);

  function u(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n],
        i = a[r.id]; if (i) { i.refs++; for (var s = 0; s < i.parts.length; s++) i.parts[s](r.parts[s]); for (; s < r.parts.length; s++) i.parts.push(v(r.parts[s], t)) } else { var o = []; for (s = 0; s < r.parts.length; s++) o.push(v(r.parts[s], t));
        a[r.id] = { id: r.id, refs: 1, parts: o } } } }

  function f(e, t) { for (var n = [], r = {}, i = 0; i < e.length; i++) { var a = e[i],
        s = t.base ? a[0] + t.base : a[0],
        o = { css: a[1], media: a[2], sourceMap: a[3] };
      r[s] ? r[s].parts.push(o) : n.push(r[s] = { id: s, parts: [o] }) } return n }

  function d(e, t) { var n = o(e.insertInto); if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var r = p[p.length - 1]; if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), p.push(t);
    else if ("bottom" === e.insertAt) n.appendChild(t);
    else { if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var i = o(e.insertAt.before, n);
      n.insertBefore(t, i) } }

  function m(e) { if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e); var t = p.indexOf(e);
    t >= 0 && p.splice(t, 1) }

  function g(e) { var t = document.createElement("style"); if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) { var r = function() { 0; return n.nc }();
      r && (e.attrs.nonce = r) } return y(t, e.attrs), d(e, t), t }

  function y(e, t) { Object.keys(t).forEach(function(n) { e.setAttribute(n, t[n]) }) }

  function v(e, t) { var n, r, i, a; if (t.transform && e.css) { if (!(a = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
      e.css = a } if (t.singleton) { var s = h++;
      n = l || (l = g(t)), r = E.bind(null, n, s, !1), i = E.bind(null, n, s, !0) } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) { var t = document.createElement("link"); return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", y(t, e.attrs), d(e, t), t }(t), r = function(e, t, n) { var r = n.css,
        i = n.sourceMap,
        a = void 0 === t.convertToAbsoluteUrls && i;
      (t.convertToAbsoluteUrls || a) && (r = c(r));
      i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"); var s = new Blob([r], { type: "text/css" }),
        o = e.href;
      e.href = URL.createObjectURL(s), o && URL.revokeObjectURL(o) }.bind(null, n, t), i = function() { m(n), n.href && URL.revokeObjectURL(n.href) }) : (n = g(t), r = function(e, t) { var n = t.css,
        r = t.media;
      r && e.setAttribute("media", r); if (e.styleSheet) e.styleSheet.cssText = n;
      else { for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n)) } }.bind(null, n), i = function() { m(n) }); return r(e),
      function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t) } else i() } } e.exports = function(e, t) { if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom"); var n = f(e, t); return u(n, t),
      function(e) { for (var r = [], i = 0; i < n.length; i++) { var s = n[i];
          (o = a[s.id]).refs--, r.push(o) } e && u(f(e, t), t); for (i = 0; i < r.length; i++) { var o; if (0 === (o = r[i]).refs) { for (var l = 0; l < o.parts.length; l++) o.parts[l]();
            delete a[o.id] } } } }; var b, x = (b = [], function(e, t) { return b[e] = t, b.filter(Boolean).join("\n") });

  function E(e, t, n, r) { var i = n ? "" : r.css; if (e.styleSheet) e.styleSheet.cssText = x(t, i);
    else { var a = document.createTextNode(i),
        s = e.childNodes;
      s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(a, s[t]) : e.appendChild(a) } } }, function(e, t) { e.exports = function(e) { var t = "undefined" != typeof window && window.location; if (!t) throw new Error("fixUrls requires window.location"); if (!e || "string" != typeof e) return e; var n = t.protocol + "//" + t.host,
      r = n + t.pathname.replace(/\/[^\/]*$/, "/"); return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) { var i, a = t.trim().replace(/^"(.*)"$/, function(e, t) { return t }).replace(/^'(.*)'$/, function(e, t) { return t }); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")") }) } }, function(e, t) {
  function n(e) { let t = i(e.parentNode, "icon");
    t.classList.remove("icon--black-3"), t.classList.add("icon--blue") }

  function r(e) { let t = i(e.parentNode, "icon");
    t.classList.add("icon--black-3"), t.classList.remove("icon--blue") }

  function i(e, t) { let n = null; return function e(t, r, i) { for (let a = 0; a < t.childNodes.length && !i; a++) { let s = t.childNodes[a],
          o = null != s.className ? s.className.split(" ") : []; for (let e = 0, s = o.length; e < s; e++)
          if (o[e] == r) { i = !0, n = t.childNodes[a]; break } if (i) break;
        e(t.childNodes[a], r, i) } }(e, t, !1), n } document.addEventListener("DOMContentLoaded", e => {! function() { let e = document.getElementsByClassName("input-icon__input"); for (let t = 0; t < e.length; ++t) { let i = e[t];
        i.addEventListener("focus", e => { n(i) }), i.addEventListener("focusout", e => { r(i) }) } }(),
    function() { let e, t, n, r = document.getElementsByTagName("select"); for (let s = 0; s < r.length; s++) { n = r[s].value, t = r[s].options[r[s].selectedIndex].text, r[s].style.display = "none", a(document.getElementById(r[s].id), document.createElement("div"), s, r[s].getAttribute("placeholder-text")); let o = r[s].getElementsByTagName("optgroup"); if (0 != o.length)
          for (let t = 0; t < o.length; t++) { let n = o[t].getElementsByTagName("option"); for (let e = 0; e < n.length; e++) i(n[e]);
            t != o.length - 1 && (dividerElement = document.createElement("div"), lineElement = document.createElement("span"), dividerElement.className = "select-dropdown__divider", lineElement.className = "select-dropdown__line", e.appendChild(dividerElement), dividerElement.appendChild(lineElement), dividerElement.addEventListener("click", function(e) { e.stopPropagation() }, !1)) } else
            for (let e = 0; e < r[s].options.length; e++) i(r[s].options[e]) }

      function i(t) { if ("" != t.value) { let n = document.createElement("li"),
            r = t.value,
            i = document.createTextNode(t.text);
          n.className = "select-dropdown__list-item", n.setAttribute("data-value", r), n.appendChild(i), e.appendChild(n), n.addEventListener("click", function() { s(this, n.parentNode) }, !1) } }

      function a(n, r, i, a) { n.parentNode.insertBefore(r, n), r.appendChild(n), document.addEventListener("click", function(e) { let t = r.contains(e.target); if (!t) { let e = r.getElementsByClassName("select-dropdown__list");
            e[0].classList.remove("active"); let t = r.getElementsByTagName("button");
            t[0].classList.remove("select-dropdown__button--active") } }); let s = document.createElement("button"),
          o = document.createElement("span");
        spanText = t ? document.createTextNode(t) : document.createTextNode(a), iElement = document.createElement("i"), e = document.createElement("ul"), r.className = "select-dropdown select-dropdown--" + i, s.className = "select-dropdown__button select-dropdown__button--" + i, s.setAttribute("data-value", ""), iElement.className = "chevron-down", e.className = "select-dropdown__list select-dropdown__list--" + i, e.id = "select-dropdown__list-" + i, r.appendChild(s), o.appendChild(spanText), s.appendChild(o), s.appendChild(iElement), r.appendChild(e) }

      function s(e, t) { if ("BUTTON" == e.tagName) { e.classList.add("select-dropdown__button--active"), selectDropdown = e.parentNode.getElementsByTagName("ul"); for (let e = 0; e < selectDropdown.length; e++) selectDropdown[0].classList.toggle("active") } else if ("LI" == e.tagName) { let n = t.querySelectorAll("li"); for (let e = 0; e < n.length; e++) n[e].classList.remove("select-dropdown__list-item--selected"); let r = e.parentNode.parentNode.getElementsByTagName("button");
          r[0].classList.remove("select-dropdown__button--active"); let i = e.parentNode.parentNode.getElementsByTagName("select")[0];! function(e, t) { let n = document.getElementById(e);
            n.value = t, n.setAttribute("selected", "selected") }(i.id, e.getAttribute("data-value")), elementParentSpan = e.parentNode.parentNode.getElementsByTagName("span"), e.classList.add("select-dropdown__list-item--selected"), e.parentNode.classList.toggle("active"), elementParentSpan[0].textContent = e.textContent, elementParentSpan[0].parentNode.setAttribute("data-value", e.getAttribute("data-value")); let a = e.getAttribute("data-pos");
          e.parentNode.style.top = a + "px" } } let o = document.getElementsByClassName("select-dropdown__button"); for (let e = 0; e < o.length; e++) o[e].addEventListener("click", function() { s(this) }, !1) }() }) }, function(e, t, n) { "use strict";
  t.__esModule = !0; var r = function() {
    function e(e) { this.spreadsheetId = e } return e.prototype.fetchSpreadsheet = function(t) { var n = e.HOST + this.spreadsheetId + "?key=" + e.KEY + "&fields=" + ["spreadsheetId", "spreadsheetUrl", "properties", "sheets.properties", "sheets.data.rowData.values.formattedValue", "sheets.data.rowData.values.textFormatRuns", "sheets.data.rowData.values.effectiveFormat.textFormat", "sheets.data.rowData.values.userEnteredValue.formulaValue"].join(","); if (console.time("Fetch spreadsheet"), e.MOCK) t(e.mockResponse);
      else { var r = new Request(n, { method: "GET" });
        fetch(r).then(function(e) { if (e.ok) return e.json();
          t({ type: "BAD_RESPONSE", response: e }) }).then(function(e) { console.timeEnd("Fetch spreadsheet"), e && t({ type: "SUCCESS", object: e }) }).catch(function(e) { t({ type: "ERROR", error: e }) }) } }, e.HOST = "https://sheets.googleapis.com/v4/spreadsheets/", e.KEY = "AIzaSyAJ1wRrjHInwZmIoW_0SFyhYwTHY3yzCpQ", e.MOCK = !1, e.mockResponse = null, e }();
  t.default = r }, function(e, t, n) { "use strict";
  t.__esModule = !0; var r = function() { return function(e, t, n) { var r = this;
      this.nodeId = t, e = "https://cors-anywhere.herokuapp.com/" + e, fetch(e).then(function(e) { if (!e.ok) return parent.postMessage({ pluginMessage: { action: "received-image-data", data: {} } }, "*"), void n(!1);
        e.arrayBuffer().then(function(e) { var t = new Uint8Array(e);
          parent.postMessage({ pluginMessage: { action: "received-image-data", data: { imageData: t, nodeId: r.nodeId } } }, "*"), n(!0) }) }).catch(function(e) { parent.postMessage({ pluginMessage: { action: "received-image-data", data: {} } }, "*"), n(!1) }) } }();
  t.default = r }, function(e, t, n) { "use strict"; var r, i = this && this.__extends || (r = function(e, t) { return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
      function n() { this.constructor = e } r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }),
    a = this && this.__importStar || function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t };
  t.__esModule = !0; var s = a(n(13)),
    o = function(e) {
      function t(t) { var n = e.call(this, t) || this; return n.handleChange = n.handleChange.bind(n), n } return i(t, e), t.prototype.handleChange = function(e) { var t = e.target.checked;
        this.props.onChange && this.props.onChange(t) }, t.prototype.render = function() { return s.createElement("label", { className: "checkbox" }, s.createElement("div", { className: "checkbox__container" }, s.createElement("input", { type: "checkbox", className: "checkbox__box", onChange: this.handleChange, defaultChecked: this.props.defaultChecked }), s.createElement("span", { className: "checkbox__mark" })), s.createElement("div", { className: "checkbox__label" }, this.props.label)) }, t }(s.Component);
  t.default = o }, function(e, t, n) { "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }); var r = u(n(78)),
    i = u(n(87)),
    a = u(n(91)),
    s = u(n(92)),
    o = u(n(96)),
    l = u(n(118)),
    h = u(n(13)),
    p = u(n(126)),
    c = u(n(129));

  function u(e) { return e && e.__esModule ? e : { default: e } } var f = function(e) {
    function t() { var e, n, r, s;
      (0, a.default)(this, t); for (var l = arguments.length, h = Array(l), p = 0; p < l; p++) h[p] = arguments[p]; return n = r = (0, o.default)(this, (e = t.__proto__ || (0, i.default)(t)).call.apply(e, [this].concat(h))), r.handleClickToPause = function() { r.anim.isPaused ? r.anim.play() : r.anim.pause() }, s = n, (0, o.default)(r, s) } return (0, l.default)(t, e), (0, s.default)(t, [{ key: "componentDidMount", value: function() { var e = this.props,
          t = e.options,
          n = e.eventListeners,
          i = t.loop,
          a = t.autoplay,
          s = t.animationData,
          o = t.rendererSettings,
          l = t.segments;
        this.options = { container: this.el, renderer: "svg", loop: !1 !== i, autoplay: !1 !== a, segments: !1 !== l, animationData: s, rendererSettings: o }, this.options = (0, r.default)({}, this.options, t), this.anim = c.default.loadAnimation(this.options), this.registerEvents(n) } }, { key: "componentWillUpdate", value: function(e) { this.options.animationData !== e.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, r.default)({}, this.options, e.options), this.anim = c.default.loadAnimation(this.options), this.registerEvents(e.eventListeners)) } }, { key: "componentDidUpdate", value: function() { this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(), this.pause(), this.setSpeed(), this.setDirection() } }, { key: "componentWillUnmount", value: function() { this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options.animationData = null, this.anim = null } }, { key: "setSpeed", value: function() { this.anim.setSpeed(this.props.speed) } }, { key: "setDirection", value: function() { this.anim.setDirection(this.props.direction) } }, { key: "play", value: function() { this.anim.play() } }, { key: "playSegments", value: function() { this.anim.playSegments(this.props.segments) } }, { key: "stop", value: function() { this.anim.stop() } }, { key: "pause", value: function() { this.props.isPaused && !this.anim.isPaused ? this.anim.pause() : !this.props.isPaused && this.anim.isPaused && this.anim.pause() } }, { key: "destroy", value: function() { this.anim.destroy() } }, { key: "registerEvents", value: function(e) { var t = this;
        e.forEach(function(e) { t.anim.addEventListener(e.eventName, e.callback) }) } }, { key: "deRegisterEvents", value: function(e) { var t = this;
        e.forEach(function(e) { t.anim.removeEventListener(e.eventName, e.callback) }) } }, { key: "render", value: function() { var e = this,
          t = this.props,
          n = t.width,
          i = t.height,
          a = t.ariaRole,
          s = t.ariaLabel,
          o = t.isClickToPauseDisabled,
          l = t.title,
          p = function(e) { return "number" == typeof e ? e + "px" : e || "100%" },
          c = (0, r.default)({ width: p(n), height: p(i), overflow: "hidden", margin: "0 auto", outline: "none" }, this.props.style),
          u = o ? function() { return null } : this.handleClickToPause; return h.default.createElement("div", { ref: function(t) { e.el = t }, style: c, onClick: u, title: l, role: a, "aria-label": s, tabIndex: "0" }) } }]), t }(h.default.Component);
  t.default = f, f.propTypes = { eventListeners: p.default.arrayOf(p.default.object), options: p.default.object.isRequired, height: p.default.oneOfType([p.default.string, p.default.number]), width: p.default.oneOfType([p.default.string, p.default.number]), isStopped: p.default.bool, isPaused: p.default.bool, speed: p.default.number, segments: p.default.arrayOf(p.default.number), direction: p.default.number, ariaRole: p.default.string, ariaLabel: p.default.string, isClickToPauseDisabled: p.default.bool, title: p.default.string }, f.defaultProps = { eventListeners: [], isStopped: !1, isPaused: !1, speed: 1, ariaRole: "button", ariaLabel: "animation", isClickToPauseDisabled: !1, title: "" } }, function(e, t, n) { "use strict";
  t.__esModule = !0; var r, i = n(79),
    a = (r = i) && r.__esModule ? r : { default: r };
  t.default = a.default || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e } }, function(e, t, n) { e.exports = { default: n(80), __esModule: !0 } }, function(e, t, n) { n(81), e.exports = n(0).Object.assign }, function(e, t, n) { var r = n(3);
  r(r.S + r.F, "Object", { assign: n(83) }) }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t, n) { "use strict"; var r = n(2),
    i = n(15),
    a = n(26),
    s = n(18),
    o = n(19),
    l = n(40),
    h = Object.assign;
  e.exports = !h || n(8)(function() { var e = {},
      t = {},
      n = Symbol(),
      r = "abcdefghijklmnopqrst"; return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != h({}, e)[n] || Object.keys(h({}, t)).join("") != r }) ? function(e, t) { for (var n = o(e), h = arguments.length, p = 1, c = a.f, u = s.f; h > p;)
      for (var f, d = l(arguments[p++]), m = c ? i(d).concat(c(d)) : i(d), g = m.length, y = 0; g > y;) f = m[y++], r && !u.call(d, f) || (n[f] = d[f]); return n } : h }, function(e, t, n) { var r = n(9),
    i = n(85),
    a = n(86);
  e.exports = function(e) { return function(t, n, s) { var o, l = r(t),
        h = i(l.length),
        p = a(s, h); if (e && n != n) { for (; h > p;)
          if ((o = l[p++]) != o) return !0 } else
        for (; h > p; p++)
          if ((e || p in l) && l[p] === n) return e || p || 0; return !e && -1 } } }, function(e, t, n) { var r = n(22),
    i = Math.min;
  e.exports = function(e) { return e > 0 ? i(r(e), 9007199254740991) : 0 } }, function(e, t, n) { var r = n(22),
    i = Math.max,
    a = Math.min;
  e.exports = function(e, t) { return (e = r(e)) < 0 ? i(e + t, 0) : a(e, t) } }, function(e, t, n) { e.exports = { default: n(88), __esModule: !0 } }, function(e, t, n) { n(89), e.exports = n(0).Object.getPrototypeOf }, function(e, t, n) { var r = n(19),
    i = n(42);
  n(90)("getPrototypeOf", function() { return function(e) { return i(r(e)) } }) }, function(e, t, n) { var r = n(3),
    i = n(0),
    a = n(8);
  e.exports = function(e, t) { var n = (i.Object || {})[e] || Object[e],
      s = {};
    s[e] = t(n), r(r.S + r.F * a(function() { n(1) }), "Object", s) } }, function(e, t, n) { "use strict";
  t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t, n) { "use strict";
  t.__esModule = !0; var r, i = n(93),
    a = (r = i) && r.__esModule ? r : { default: r };
  t.default = function() {
    function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, a.default)(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }() }, function(e, t, n) { e.exports = { default: n(94), __esModule: !0 } }, function(e, t, n) { n(95); var r = n(0).Object;
  e.exports = function(e, t, n) { return r.defineProperty(e, t, n) } }, function(e, t, n) { var r = n(3);
  r(r.S + r.F * !n(2), "Object", { defineProperty: n(4).f }) }, function(e, t, n) { "use strict";
  t.__esModule = !0; var r, i = n(43),
    a = (r = i) && r.__esModule ? r : { default: r };
  t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, a.default)(t)) && "function" != typeof t ? e : t } }, function(e, t, n) { e.exports = { default: n(98), __esModule: !0 } }, function(e, t, n) { n(99), n(104), e.exports = n(30).f("iterator") }, function(e, t, n) { "use strict"; var r = n(100)(!0);
  n(44)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
      n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = r(t, n), this._i += e.length, { value: e, done: !1 }) }) }, function(e, t, n) { var r = n(22),
    i = n(21);
  e.exports = function(e) { return function(t, n) { var a, s, o = String(i(t)),
        l = r(n),
        h = o.length; return l < 0 || l >= h ? e ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === h || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : a : e ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536 } } }, function(e, t, n) { "use strict"; var r = n(28),
    i = n(14),
    a = n(29),
    s = {};
  n(6)(s, n(10)("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = r(s, { next: i(1, n) }), a(e, t + " Iterator") } }, function(e, t, n) { var r = n(4),
    i = n(11),
    a = n(15);
  e.exports = n(2) ? Object.defineProperties : function(e, t) { i(e); for (var n, s = a(t), o = s.length, l = 0; o > l;) r.f(e, n = s[l++], t[n]); return e } }, function(e, t, n) { var r = n(1).document;
  e.exports = r && r.documentElement }, function(e, t, n) { n(105); for (var r = n(1), i = n(6), a = n(27), s = n(10)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) { var h = o[l],
      p = r[h],
      c = p && p.prototype;
    c && !c[s] && i(c, s, h), a[h] = a.Array } }, function(e, t, n) { "use strict"; var r = n(106),
    i = n(107),
    a = n(27),
    s = n(9);
  e.exports = n(44)(Array, "Array", function(e, t) { this._t = s(e), this._i = 0, this._k = t }, function() { var e = this._t,
      t = this._k,
      n = this._i++; return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]) }, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries") }, function(e, t) { e.exports = function() {} }, function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } }, function(e, t, n) { e.exports = { default: n(109), __esModule: !0 } }, function(e, t, n) { n(110), n(115), n(116), n(117), e.exports = n(0).Symbol }, function(e, t, n) { "use strict"; var r = n(1),
    i = n(5),
    a = n(2),
    s = n(3),
    o = n(45),
    l = n(111).KEY,
    h = n(8),
    p = n(24),
    c = n(29),
    u = n(17),
    f = n(10),
    d = n(30),
    m = n(31),
    g = n(112),
    y = n(113),
    v = n(11),
    b = n(7),
    x = n(19),
    E = n(9),
    k = n(20),
    _ = n(14),
    w = n(28),
    S = n(114),
    C = n(47),
    P = n(26),
    T = n(4),
    D = n(15),
    A = C.f,
    F = T.f,
    M = S.f,
    I = r.Symbol,
    R = r.JSON,
    z = R && R.stringify,
    N = f("_hidden"),
    B = f("toPrimitive"),
    V = {}.propertyIsEnumerable,
    O = p("symbol-registry"),
    L = p("symbols"),
    G = p("op-symbols"),
    j = Object.prototype,
    H = "function" == typeof I && !!P.f,
    U = r.QObject,
    W = !U || !U.prototype || !U.prototype.findChild,
    q = a && h(function() { return 7 != w(F({}, "a", { get: function() { return F(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var r = A(j, t);
      r && delete j[t], F(e, t, n), r && e !== j && F(j, t, r) } : F,
    Y = function(e) { var t = L[e] = w(I.prototype); return t._k = e, t },
    $ = H && "symbol" == typeof I.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof I },
    K = function(e, t, n) { return e === j && K(G, t, n), v(e), t = k(t, !0), v(n), i(L, t) ? (n.enumerable ? (i(e, N) && e[N][t] && (e[N][t] = !1), n = w(n, { enumerable: _(0, !1) })) : (i(e, N) || F(e, N, _(1, {})), e[N][t] = !0), q(e, t, n)) : F(e, t, n) },
    X = function(e, t) { v(e); for (var n, r = g(t = E(t)), i = 0, a = r.length; a > i;) K(e, n = r[i++], t[n]); return e },
    Q = function(e) { var t = V.call(this, e = k(e, !0)); return !(this === j && i(L, e) && !i(G, e)) && (!(t || !i(this, e) || !i(L, e) || i(this, N) && this[N][e]) || t) },
    J = function(e, t) { if (e = E(e), t = k(t, !0), e !== j || !i(L, t) || i(G, t)) { var n = A(e, t); return !n || !i(L, t) || i(e, N) && e[N][t] || (n.enumerable = !0), n } },
    Z = function(e) { for (var t, n = M(E(e)), r = [], a = 0; n.length > a;) i(L, t = n[a++]) || t == N || t == l || r.push(t); return r },
    ee = function(e) { for (var t, n = e === j, r = M(n ? G : E(e)), a = [], s = 0; r.length > s;) !i(L, t = r[s++]) || n && !i(j, t) || a.push(L[t]); return a };
  H || (o((I = function() { if (this instanceof I) throw TypeError("Symbol is not a constructor!"); var e = u(arguments.length > 0 ? arguments[0] : void 0),
      t = function(n) { this === j && t.call(G, n), i(this, N) && i(this[N], e) && (this[N][e] = !1), q(this, e, _(1, n)) }; return a && W && q(j, e, { configurable: !0, set: t }), Y(e) }).prototype, "toString", function() { return this._k }), C.f = J, T.f = K, n(46).f = S.f = Z, n(18).f = Q, P.f = ee, a && !n(16) && o(j, "propertyIsEnumerable", Q, !0), d.f = function(e) { return Y(f(e)) }), s(s.G + s.W + s.F * !H, { Symbol: I }); for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) f(te[ne++]); for (var re = D(f.store), ie = 0; re.length > ie;) m(re[ie++]);
  s(s.S + s.F * !H, "Symbol", { for: function(e) { return i(O, e += "") ? O[e] : O[e] = I(e) }, keyFor: function(e) { if (!$(e)) throw TypeError(e + " is not a symbol!"); for (var t in O)
        if (O[t] === e) return t }, useSetter: function() { W = !0 }, useSimple: function() { W = !1 } }), s(s.S + s.F * !H, "Object", { create: function(e, t) { return void 0 === t ? w(e) : X(w(e), t) }, defineProperty: K, defineProperties: X, getOwnPropertyDescriptor: J, getOwnPropertyNames: Z, getOwnPropertySymbols: ee }); var ae = h(function() { P.f(1) });
  s(s.S + s.F * ae, "Object", { getOwnPropertySymbols: function(e) { return P.f(x(e)) } }), R && s(s.S + s.F * (!H || h(function() { var e = I(); return "[null]" != z([e]) || "{}" != z({ a: e }) || "{}" != z(Object(e)) })), "JSON", { stringify: function(e) { for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); if (n = t = r[1], (b(t) || void 0 !== e) && !$(e)) return y(t) || (t = function(e, t) { if ("function" == typeof n && (t = n.call(this, e, t)), !$(t)) return t }), r[1] = t, z.apply(R, r) } }), I.prototype[B] || n(6)(I.prototype, B, I.prototype.valueOf), c(I, "Symbol"), c(Math, "Math", !0), c(r.JSON, "JSON", !0) }, function(e, t, n) { var r = n(17)("meta"),
    i = n(7),
    a = n(5),
    s = n(4).f,
    o = 0,
    l = Object.isExtensible || function() { return !0 },
    h = !n(8)(function() { return l(Object.preventExtensions({})) }),
    p = function(e) { s(e, r, { value: { i: "O" + ++o, w: {} } }) },
    c = e.exports = { KEY: r, NEED: !1, fastKey: function(e, t) { if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!a(e, r)) { if (!l(e)) return "F"; if (!t) return "E";
          p(e) } return e[r].i }, getWeak: function(e, t) { if (!a(e, r)) { if (!l(e)) return !0; if (!t) return !1;
          p(e) } return e[r].w }, onFreeze: function(e) { return h && c.NEED && l(e) && !a(e, r) && p(e), e } } }, function(e, t, n) { var r = n(15),
    i = n(26),
    a = n(18);
  e.exports = function(e) { var t = r(e),
      n = i.f; if (n)
      for (var s, o = n(e), l = a.f, h = 0; o.length > h;) l.call(e, s = o[h++]) && t.push(s); return t } }, function(e, t, n) { var r = n(41);
  e.exports = Array.isArray || function(e) { return "Array" == r(e) } }, function(e, t, n) { var r = n(9),
    i = n(46).f,
    a = {}.toString,
    s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  e.exports.f = function(e) { return s && "[object Window]" == a.call(e) ? function(e) { try { return i(e) } catch (e) { return s.slice() } }(e) : i(r(e)) } }, function(e, t) {}, function(e, t, n) { n(31)("asyncIterator") }, function(e, t, n) { n(31)("observable") }, function(e, t, n) { "use strict";
  t.__esModule = !0; var r = s(n(119)),
    i = s(n(123)),
    a = s(n(43));

  function s(e) { return e && e.__esModule ? e : { default: e } } t.default = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
    e.prototype = (0, i.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t) } }, function(e, t, n) { e.exports = { default: n(120), __esModule: !0 } }, function(e, t, n) { n(121), e.exports = n(0).Object.setPrototypeOf }, function(e, t, n) { var r = n(3);
  r(r.S, "Object", { setPrototypeOf: n(122).set }) }, function(e, t, n) { var r = n(7),
    i = n(11),
    a = function(e, t) { if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
  e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) { try {
        (r = n(36)(Function.call, n(47).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array) } catch (e) { t = !0 } return function(e, n) { return a(e, n), t ? e.__proto__ = n : r(e, n), e } }({}, !1) : void 0), check: a } }, function(e, t, n) { e.exports = { default: n(124), __esModule: !0 } }, function(e, t, n) { n(125); var r = n(0).Object;
  e.exports = function(e, t) { return r.create(e, t) } }, function(e, t, n) { var r = n(3);
  r(r.S, "Object", { create: n(28) }) }, function(e, t, n) { e.exports = n(127)() }, function(e, t, n) { "use strict"; var r = n(128);

  function i() {}

  function a() {} a.resetWarningCache = i, e.exports = function() {
    function e(e, t, n, i, a, s) { if (s !== r) { var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw o.name = "Invariant Violation", o } }

    function t() { return e } e.isRequired = e; var n = { array: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: a, resetWarningCache: i }; return n.PropTypes = n, n } }, function(e, t, n) { "use strict";
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" }, function(module, exports, __webpack_require__) { var __WEBPACK_AMD_DEFINE_RESULT__, root, factory; "undefined" != typeof navigator && (root = window || {}, factory = function(window) { "use strict"; var svgNS = "http://www.w3.org/2000/svg",
      locationHref = "",
      initialDefaultFrame = -999999,
      subframeEnabled = !0,
      expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      cachedColors = {},
      bm_rounder = Math.round,
      bm_rnd, bm_pow = Math.pow,
      bm_sqrt = Math.sqrt,
      bm_abs = Math.abs,
      bm_floor = Math.floor,
      bm_max = Math.max,
      bm_min = Math.min,
      blitter = 10,
      BMMath = {};

    function ProjectInterface() { return {} }! function() { var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
        n = t.length; for (e = 0; e < n; e += 1) BMMath[t[e]] = Math[t[e]] }(), BMMath.random = Math.random, BMMath.abs = function(e) { if ("object" === typeof e && e.length) { var t, n = createSizedArray(e.length),
          r = e.length; for (t = 0; t < r; t += 1) n[t] = Math.abs(e[t]); return n } return Math.abs(e) }; var defaultCurveSegments = 150,
      degToRads = Math.PI / 180,
      roundCorner = .5519;

    function roundValues(e) { bm_rnd = e ? Math.round : function(e) { return e } }

    function styleDiv(e) { e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "preserve-3d" }

    function BMEnterFrameEvent(e, t, n, r) { this.type = e, this.currentTime = t, this.totalTime = n, this.direction = r < 0 ? -1 : 1 }

    function BMCompleteEvent(e, t) { this.type = e, this.direction = t < 0 ? -1 : 1 }

    function BMCompleteLoopEvent(e, t, n, r) { this.type = e, this.currentLoop = n, this.totalLoops = t, this.direction = r < 0 ? -1 : 1 }

    function BMSegmentStartEvent(e, t, n) { this.type = e, this.firstFrame = t, this.totalFrames = n }

    function BMDestroyEvent(e, t) { this.type = e, this.target = t } roundValues(!1); var createElementID = (_count = 0, function() { return "__lottie_element_" + ++_count }),
      _count;

    function HSVtoRGB(e, t, n) { var r, i, a, s, o, l, h, p; switch (l = n * (1 - t), h = n * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), p = n * (1 - (1 - o) * t), s % 6) {
        case 0:
          r = n, i = p, a = l; break;
        case 1:
          r = h, i = n, a = l; break;
        case 2:
          r = l, i = n, a = p; break;
        case 3:
          r = l, i = h, a = n; break;
        case 4:
          r = p, i = l, a = n; break;
        case 5:
          r = n, i = l, a = h } return [r, i, a] }

    function RGBtoHSV(e, t, n) { var r, i = Math.max(e, t, n),
        a = Math.min(e, t, n),
        s = i - a,
        o = 0 === i ? 0 : s / i,
        l = i / 255; switch (i) {
        case a:
          r = 0; break;
        case e:
          r = t - n + s * (t < n ? 6 : 0), r /= 6 * s; break;
        case t:
          r = n - e + 2 * s, r /= 6 * s; break;
        case n:
          r = e - t + 4 * s, r /= 6 * s } return [r, o, l] }

    function addSaturationToRGB(e, t) { var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]); return n[1] += t, n[1] > 1 ? n[1] = 1 : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2]) }

    function addBrightnessToRGB(e, t) { var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]); return n[2] += t, n[2] > 1 ? n[2] = 1 : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2]) }

    function addHueToRGB(e, t) { var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]); return n[0] += t / 360, n[0] > 1 ? n[0] -= 1 : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2]) } var rgbToHex = function() { var e, t, n = []; for (e = 0; e < 256; e += 1) t = e.toString(16), n[e] = 1 == t.length ? "0" + t : t; return function(e, t, r) { return e < 0 && (e = 0), t < 0 && (t = 0), r < 0 && (r = 0), "#" + n[e] + n[t] + n[r] } }();

    function BaseEvent() {} BaseEvent.prototype = { triggerEvent: function(e, t) { if (this._cbs[e])
          for (var n = this._cbs[e].length, r = 0; r < n; r++) this._cbs[e][r](t) }, addEventListener: function(e, t) { return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
          function() { this.removeEventListener(e, t) }.bind(this) }, removeEventListener: function(e, t) { if (t) { if (this._cbs[e]) { for (var n = 0, r = this._cbs[e].length; n < r;) this._cbs[e][n] === t && (this._cbs[e].splice(n, 1), n -= 1, r -= 1), n += 1;
            this._cbs[e].length || (this._cbs[e] = null) } } else this._cbs[e] = null } }; var createTypedArray = function() { return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, t) { return "float32" === e ? new Float32Array(t) : "int16" === e ? new Int16Array(t) : "uint8c" === e ? new Uint8ClampedArray(t) : void 0 } : function(e, t) { var n, r = 0,
          i = []; switch (e) {
          case "int16":
          case "uint8c":
            n = 1; break;
          default:
            n = 1.1 } for (r = 0; r < t; r += 1) i.push(n); return i } }();

    function createSizedArray(e) { return Array.apply(null, { length: e }) }

    function createNS(e) { return document.createElementNS(svgNS, e) }

    function createTag(e) { return document.createElement(e) }

    function DynamicPropertyContainer() {} DynamicPropertyContainer.prototype = { addDynamicProperty: function(e) {-1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0) }, iterateDynamicProperties: function() { this._mdf = !1; var e, t = this.dynamicProperties.length; for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0) }, initDynamicPropertyContainer: function(e) { this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1 } }; var getBlendMode = (blendModeEnums = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }
        /*!
         Transformation Matrix v2.0
         (c) Epistemex 2014-2015
         www.epistemex.com
         By Ken Fyrstenberg
         Contributions by leeoniya.
         License: MIT, header required.
         */
        ,
        function(e) { return blendModeEnums[e] || "" }),
      blendModeEnums, Matrix = function() { var e = Math.cos,
          t = Math.sin,
          n = Math.tan,
          r = Math.round;

        function i() { return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this }

        function a(n) { if (0 === n) return this; var r = e(n),
            i = t(n); return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

        function s(n) { if (0 === n) return this; var r = e(n),
            i = t(n); return this._t(1, 0, 0, 0, 0, r, -i, 0, 0, i, r, 0, 0, 0, 0, 1) }

        function o(n) { if (0 === n) return this; var r = e(n),
            i = t(n); return this._t(r, 0, i, 0, 0, 1, 0, 0, -i, 0, r, 0, 0, 0, 0, 1) }

        function l(n) { if (0 === n) return this; var r = e(n),
            i = t(n); return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

        function h(e, t) { return this._t(1, t, e, 1, 0, 0) }

        function p(e, t) { return this.shear(n(e), n(t)) }

        function c(r, i) { var a = e(i),
            s = t(i); return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

        function u(e, t, n) { return n || 0 === n || (n = 1), 1 === e && 1 === t && 1 === n ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1) }

        function f(e, t, n, r, i, a, s, o, l, h, p, c, u, f, d, m) { return this.props[0] = e, this.props[1] = t, this.props[2] = n, this.props[3] = r, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = u, this.props[13] = f, this.props[14] = d, this.props[15] = m, this }

        function d(e, t, n) { return n = n || 0, 0 !== e || 0 !== t || 0 !== n ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1) : this }

        function m(e, t, n, r, i, a, s, o, l, h, p, c, u, f, d, m) { var g = this.props; if (1 === e && 0 === t && 0 === n && 0 === r && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return g[12] = g[12] * e + g[15] * u, g[13] = g[13] * a + g[15] * f, g[14] = g[14] * p + g[15] * d, g[15] = g[15] * m, this._identityCalculated = !1, this; var y = g[0],
            v = g[1],
            b = g[2],
            x = g[3],
            E = g[4],
            k = g[5],
            _ = g[6],
            w = g[7],
            S = g[8],
            C = g[9],
            P = g[10],
            T = g[11],
            D = g[12],
            A = g[13],
            F = g[14],
            M = g[15]; return g[0] = y * e + v * i + b * l + x * u, g[1] = y * t + v * a + b * h + x * f, g[2] = y * n + v * s + b * p + x * d, g[3] = y * r + v * o + b * c + x * m, g[4] = E * e + k * i + _ * l + w * u, g[5] = E * t + k * a + _ * h + w * f, g[6] = E * n + k * s + _ * p + w * d, g[7] = E * r + k * o + _ * c + w * m, g[8] = S * e + C * i + P * l + T * u, g[9] = S * t + C * a + P * h + T * f, g[10] = S * n + C * s + P * p + T * d, g[11] = S * r + C * o + P * c + T * m, g[12] = D * e + A * i + F * l + M * u, g[13] = D * t + A * a + F * h + M * f, g[14] = D * n + A * s + F * p + M * d, g[15] = D * r + A * o + F * c + M * m, this._identityCalculated = !1, this }

        function g() { return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity }

        function y(e) { for (var t = 0; t < 16;) { if (e.props[t] !== this.props[t]) return !1;
            t += 1 } return !0 }

        function v(e) { var t; for (t = 0; t < 16; t += 1) e.props[t] = this.props[t] }

        function b(e) { var t; for (t = 0; t < 16; t += 1) this.props[t] = e[t] }

        function x(e, t, n) { return { x: e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12], y: e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13], z: e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14] } }

        function E(e, t, n) { return e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12] }

        function k(e, t, n) { return e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13] }

        function _(e, t, n) { return e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14] }

        function w(e) { var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            n = this.props[5] / t,
            r = -this.props[1] / t,
            i = -this.props[4] / t,
            a = this.props[0] / t,
            s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
            o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t; return [e[0] * n + e[1] * i + s, e[0] * r + e[1] * a + o, 0] }

        function S(e) { var t, n = e.length,
            r = []; for (t = 0; t < n; t += 1) r[t] = w(e[t]); return r }

        function C(e, t, n) { var r = createTypedArray("float32", 6); if (this.isIdentity()) r[0] = e[0], r[1] = e[1], r[2] = t[0], r[3] = t[1], r[4] = n[0], r[5] = n[1];
          else { var i = this.props[0],
              a = this.props[1],
              s = this.props[4],
              o = this.props[5],
              l = this.props[12],
              h = this.props[13];
            r[0] = e[0] * i + e[1] * s + l, r[1] = e[0] * a + e[1] * o + h, r[2] = t[0] * i + t[1] * s + l, r[3] = t[0] * a + t[1] * o + h, r[4] = n[0] * i + n[1] * s + l, r[5] = n[0] * a + n[1] * o + h } return r }

        function P(e, t, n) { return this.isIdentity() ? [e, t, n] : [e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]] }

        function T(e, t) { if (this.isIdentity()) return e + "," + t; var n = this.props; return Math.round(100 * (e * n[0] + t * n[4] + n[12])) / 100 + "," + Math.round(100 * (e * n[1] + t * n[5] + n[13])) / 100 }

        function D() { for (var e = 0, t = this.props, n = "matrix3d("; e < 16;) n += r(1e4 * t[e]) / 1e4, n += 15 === e ? ")" : ",", e += 1; return n }

        function A(e) { return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? r(1e4 * e) / 1e4 : e }

        function F() { var e = this.props; return "matrix(" + A(e[0]) + "," + A(e[1]) + "," + A(e[4]) + "," + A(e[5]) + "," + A(e[12]) + "," + A(e[13]) + ")" } return function() { this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = c, this.shear = h, this.scale = u, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = x, this.applyToX = E, this.applyToY = k, this.applyToZ = _, this.applyToPointArray = P, this.applyToTriplePoints = C, this.applyToPointStringified = T, this.toCSS = D, this.to2dCSS = F, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = S, this.inversePoint = w, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset() } }();! function(e, t) { var n, r = this,
        i = 256,
        a = 6,
        s = "random",
        o = t.pow(i, a),
        l = t.pow(2, 52),
        h = 2 * l,
        p = i - 1;

      function c(e) { var t, n = e.length,
          r = this,
          a = 0,
          s = r.i = r.j = 0,
          o = r.S = []; for (n || (e = [n++]); a < i;) o[a] = a++; for (a = 0; a < i; a++) o[a] = o[s = p & s + e[a % n] + (t = o[a])], o[s] = t;
        r.g = function(e) { for (var t, n = 0, a = r.i, s = r.j, o = r.S; e--;) t = o[a = p & a + 1], n = n * i + o[p & (o[a] = o[s = p & s + t]) + (o[s] = t)]; return r.i = a, r.j = s, n } }

      function u(e, t) { return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t }

      function f(e, t) { for (var n, r = e + "", i = 0; i < r.length;) t[p & i] = p & (n ^= 19 * t[p & i]) + r.charCodeAt(i++); return d(t) }

      function d(e) { return String.fromCharCode.apply(0, e) } t["seed" + s] = function(p, m, g) { var y = [],
          v = f(function e(t, n) { var r, i = [],
              a = typeof t; if (n && "object" == a)
              for (r in t) try { i.push(e(t[r], n - 1)) } catch (e) {}
            return i.length ? i : "string" == a ? t : t + "\0" }((m = !0 === m ? { entropy: !0 } : m || {}).entropy ? [p, d(e)] : null === p ? function() { try { if (n) return d(n.randomBytes(i)); var t = new Uint8Array(i); return (r.crypto || r.msCrypto).getRandomValues(t), d(t) } catch (t) { var a = r.navigator,
                s = a && a.plugins; return [+new Date, r, s, r.screen, d(e)] } }() : p, 3), y),
          b = new c(y),
          x = function() { for (var e = b.g(a), t = o, n = 0; e < l;) e = (e + n) * i, t *= i, n = b.g(1); for (; e >= h;) e /= 2, t /= 2, n >>>= 1; return (e + n) / t }; return x.int32 = function() { return 0 | b.g(4) }, x.quick = function() { return b.g(4) / 4294967296 }, x.double = x, f(d(b.S), e), (m.pass || g || function(e, n, r, i) { return i && (i.S && u(i, b), e.state = function() { return u(b, {}) }), r ? (t[s] = e, n) : e })(x, v, "global" in m ? m.global : this == t, m.state) }, f(t.random(), e) }([], BMMath); var BezierFactory = function() { var e = { getBezierEasing: function(e, n, r, i, a) { var s = a || ("bez_" + e + "_" + n + "_" + r + "_" + i).replace(/\./g, "p"); if (t[s]) return t[s]; var o = new f([e, n, r, i]); return t[s] = o, o } },
        t = {}; var n = 4,
        r = 1e-7,
        i = 10,
        a = 11,
        s = 1 / (a - 1),
        o = "function" == typeof Float32Array;

      function l(e, t) { return 1 - 3 * t + 3 * e }

      function h(e, t) { return 3 * t - 6 * e }

      function p(e) { return 3 * e }

      function c(e, t, n) { return ((l(t, n) * e + h(t, n)) * e + p(t)) * e }

      function u(e, t, n) { return 3 * l(t, n) * e * e + 2 * h(t, n) * e + p(t) }

      function f(e) { this._p = e, this._mSampleValues = o ? new Float32Array(a) : new Array(a), this._precomputed = !1, this.get = this.get.bind(this) } return f.prototype = { get: function(e) { var t = this._p[0],
            n = this._p[1],
            r = this._p[2],
            i = this._p[3]; return this._precomputed || this._precompute(), t === n && r === i ? e : 0 === e ? 0 : 1 === e ? 1 : c(this._getTForX(e), n, i) }, _precompute: function() { var e = this._p[0],
            t = this._p[1],
            n = this._p[2],
            r = this._p[3];
          this._precomputed = !0, e === t && n === r || this._calcSampleValues() }, _calcSampleValues: function() { for (var e = this._p[0], t = this._p[2], n = 0; n < a; ++n) this._mSampleValues[n] = c(n * s, e, t) }, _getTForX: function(e) { for (var t = this._p[0], o = this._p[2], l = this._mSampleValues, h = 0, p = 1, f = a - 1; p !== f && l[p] <= e; ++p) h += s; var d = h + (e - l[--p]) / (l[p + 1] - l[p]) * s,
            m = u(d, t, o); return m >= .001 ? function(e, t, r, i) { for (var a = 0; a < n; ++a) { var s = u(t, r, i); if (0 === s) return t;
              t -= (c(t, r, i) - e) / s } return t }(e, d, t, o) : 0 === m ? d : function(e, t, n, a, s) { var o, l, h = 0;
            do {
              (o = c(l = t + (n - t) / 2, a, s) - e) > 0 ? n = l : t = l } while (Math.abs(o) > r && ++h < i); return l }(e, h, h + s, t, o) } }, e }();

    function extendPrototype(e, t) { var n, r, i = e.length; for (n = 0; n < i; n += 1)
        for (var a in r = e[n].prototype) r.hasOwnProperty(a) && (t.prototype[a] = r[a]) }

    function getDescriptor(e, t) { return Object.getOwnPropertyDescriptor(e, t) }

    function createProxyFunction(e) {
      function t() {} return t.prototype = e, t }

    function bezFunction() { Math;

      function e(e, t, n, r, i, a) { var s = e * r + t * i + n * a - i * r - a * e - n * t; return s > -.001 && s < .001 } var t = function(e, t, n, r) { var i, a, s, o, l, h, p = defaultCurveSegments,
          c = 0,
          u = [],
          f = [],
          d = bezier_length_pool.newElement(); for (s = n.length, i = 0; i < p; i += 1) { for (l = i / (p - 1), h = 0, a = 0; a < s; a += 1) o = bm_pow(1 - l, 3) * e[a] + 3 * bm_pow(1 - l, 2) * l * n[a] + 3 * (1 - l) * bm_pow(l, 2) * r[a] + bm_pow(l, 3) * t[a], u[a] = o, null !== f[a] && (h += bm_pow(u[a] - f[a], 2)), f[a] = u[a];
          h && (c += h = bm_sqrt(h)), d.percents[i] = l, d.lengths[i] = c } return d.addedLength = c, d };

      function n(e) { this.segmentLength = 0, this.points = new Array(e) }

      function r(e, t) { this.partialLength = e, this.point = t } var i, a = (i = {}, function(t, a, s, o) { var l = (t[0] + "_" + t[1] + "_" + a[0] + "_" + a[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p"); if (!i[l]) { var h, p, c, u, f, d, m, g = defaultCurveSegments,
            y = 0,
            v = null;
          2 === t.length && (t[0] != a[0] || t[1] != a[1]) && e(t[0], t[1], a[0], a[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (g = 2); var b = new n(g); for (c = s.length, h = 0; h < g; h += 1) { for (m = createSizedArray(c), f = h / (g - 1), d = 0, p = 0; p < c; p += 1) u = bm_pow(1 - f, 3) * t[p] + 3 * bm_pow(1 - f, 2) * f * (t[p] + s[p]) + 3 * (1 - f) * bm_pow(f, 2) * (a[p] + o[p]) + bm_pow(f, 3) * a[p], m[p] = u, null !== v && (d += bm_pow(m[p] - v[p], 2));
            y += d = bm_sqrt(d), b.points[h] = new r(d, m), v = m } b.segmentLength = y, i[l] = b } return i[l] });

      function s(e, t) { var n = t.percents,
          r = t.lengths,
          i = n.length,
          a = bm_floor((i - 1) * e),
          s = e * t.addedLength,
          o = 0; if (a === i - 1 || 0 === a || s === r[a]) return n[a]; for (var l = r[a] > s ? -1 : 1, h = !0; h;)
          if (r[a] <= s && r[a + 1] > s ? (o = (s - r[a]) / (r[a + 1] - r[a]), h = !1) : a += l, a < 0 || a >= i - 1) { if (a === i - 1) return n[a];
            h = !1 } return n[a] + (n[a + 1] - n[a]) * o } var o = createTypedArray("float32", 8); return { getSegmentsLength: function(e) { var n, r = segments_length_pool.newElement(),
            i = e.c,
            a = e.v,
            s = e.o,
            o = e.i,
            l = e._length,
            h = r.lengths,
            p = 0; for (n = 0; n < l - 1; n += 1) h[n] = t(a[n], a[n + 1], s[n], o[n + 1]), p += h[n].addedLength; return i && l && (h[n] = t(a[n], a[0], s[n], o[0]), p += h[n].addedLength), r.totalLength = p, r }, getNewSegment: function(e, t, n, r, i, a, l) { var h, p = s(i = i < 0 ? 0 : i > 1 ? 1 : i, l),
            c = s(a = a > 1 ? 1 : a, l),
            u = e.length,
            f = 1 - p,
            d = 1 - c,
            m = f * f * f,
            g = p * f * f * 3,
            y = p * p * f * 3,
            v = p * p * p,
            b = f * f * d,
            x = p * f * d + f * p * d + f * f * c,
            E = p * p * d + f * p * c + p * f * c,
            k = p * p * c,
            _ = f * d * d,
            w = p * d * d + f * c * d + f * d * c,
            S = p * c * d + f * c * c + p * d * c,
            C = p * c * c,
            P = d * d * d,
            T = c * d * d + d * c * d + d * d * c,
            D = c * c * d + d * c * c + c * d * c,
            A = c * c * c; for (h = 0; h < u; h += 1) o[4 * h] = Math.round(1e3 * (m * e[h] + g * n[h] + y * r[h] + v * t[h])) / 1e3, o[4 * h + 1] = Math.round(1e3 * (b * e[h] + x * n[h] + E * r[h] + k * t[h])) / 1e3, o[4 * h + 2] = Math.round(1e3 * (_ * e[h] + w * n[h] + S * r[h] + C * t[h])) / 1e3, o[4 * h + 3] = Math.round(1e3 * (P * e[h] + T * n[h] + D * r[h] + A * t[h])) / 1e3; return o }, getPointInSegment: function(e, t, n, r, i, a) { var o = s(i, a),
            l = 1 - o; return [Math.round(1e3 * (l * l * l * e[0] + (o * l * l + l * o * l + l * l * o) * n[0] + (o * o * l + l * o * o + o * l * o) * r[0] + o * o * o * t[0])) / 1e3, Math.round(1e3 * (l * l * l * e[1] + (o * l * l + l * o * l + l * l * o) * n[1] + (o * o * l + l * o * o + o * l * o) * r[1] + o * o * o * t[1])) / 1e3] }, buildBezierData: a, pointOnLine2D: e, pointOnLine3D: function(t, n, r, i, a, s, o, l, h) { if (0 === r && 0 === s && 0 === h) return e(t, n, i, a, o, l); var p, c = Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - n, 2) + Math.pow(s - r, 2)),
            u = Math.sqrt(Math.pow(o - t, 2) + Math.pow(l - n, 2) + Math.pow(h - r, 2)),
            f = Math.sqrt(Math.pow(o - i, 2) + Math.pow(l - a, 2) + Math.pow(h - s, 2)); return (p = c > u ? c > f ? c - u - f : f - u - c : f > u ? f - u - c : u - c - f) > -1e-4 && p < 1e-4 } } }! function() { for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) { var r = (new Date).getTime(),
          i = Math.max(0, 16 - (r - e)),
          a = setTimeout(function() { t(r + i) }, i); return e = r + i, a }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) { clearTimeout(e) }) }(); var bez = bezFunction();

    function dataFunctionManager() {
      function e(e, t) { for (var n = 0, r = t.length; n < r;) { if (t[n].id === e) return t[n].layers.__used ? JSON.parse(JSON.stringify(t[n].layers)) : (t[n].layers.__used = !0, t[n].layers);
          n += 1 } }

      function t(e) { var r, i, a; for (r = e.length - 1; r >= 0; r -= 1)
          if ("sh" == e[r].ty) { if (e[r].ks.k.i) n(e[r].ks.k);
            else
              for (a = e[r].ks.k.length, i = 0; i < a; i += 1) e[r].ks.k[i].s && n(e[r].ks.k[i].s[0]), e[r].ks.k[i].e && n(e[r].ks.k[i].e[0]);!0 } else "gr" == e[r].ty && t(e[r].it) }

      function n(e) { var t, n = e.i.length; for (t = 0; t < n; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1] }

      function r(e, t) { var n = t ? t.split(".") : [100, 100, 100]; return e[0] > n[0] || !(n[0] > e[0]) && (e[1] > n[1] || !(n[1] > e[1]) && (e[2] > n[2] || !(n[2] > e[2]) && void 0)) } var i, a = function() { var e = [4, 4, 14];

          function t(e) { var t, n, r, i = e.length; for (t = 0; t < i; t += 1) 5 === e[t].ty && (n = e[t], r = void 0, r = n.t.d, n.t.d = { k: [{ s: r, t: 0 }] }) } return function(n) { if (r(e, n.v) && (t(n.layers), n.assets)) { var i, a = n.assets.length; for (i = 0; i < a; i += 1) n.assets[i].layers && t(n.assets[i].layers) } } }(),
        s = (i = [4, 7, 99], function(e) { if (e.chars && !r(i, e.v)) { var t, a, s, o, l, h = e.chars.length; for (t = 0; t < h; t += 1)
              if (e.chars[t].data && e.chars[t].data.shapes)
                for (s = (l = e.chars[t].data.shapes[0].it).length, a = 0; a < s; a += 1)(o = l[a].ks.k).__converted || (n(l[a].ks.k), o.__converted = !0) } }),
        o = function() { var e = [4, 1, 9];

          function t(e) { var n, r, i, a = e.length; for (n = 0; n < a; n += 1)
              if ("gr" === e[n].ty) t(e[n].it);
              else if ("fl" === e[n].ty || "st" === e[n].ty)
              if (e[n].c.k && e[n].c.k[0].i)
                for (i = e[n].c.k.length, r = 0; r < i; r += 1) e[n].c.k[r].s && (e[n].c.k[r].s[0] /= 255, e[n].c.k[r].s[1] /= 255, e[n].c.k[r].s[2] /= 255, e[n].c.k[r].s[3] /= 255), e[n].c.k[r].e && (e[n].c.k[r].e[0] /= 255, e[n].c.k[r].e[1] /= 255, e[n].c.k[r].e[2] /= 255, e[n].c.k[r].e[3] /= 255);
              else e[n].c.k[0] /= 255, e[n].c.k[1] /= 255, e[n].c.k[2] /= 255, e[n].c.k[3] /= 255 }

          function n(e) { var n, r = e.length; for (n = 0; n < r; n += 1) 4 === e[n].ty && t(e[n].shapes) } return function(t) { if (r(e, t.v) && (n(t.layers), t.assets)) { var i, a = t.assets.length; for (i = 0; i < a; i += 1) t.assets[i].layers && n(t.assets[i].layers) } } }(),
        l = function() { var e = [4, 4, 18];

          function t(e) { var n, r, i; for (n = e.length - 1; n >= 0; n -= 1)
              if ("sh" == e[n].ty) { if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
                else
                  for (i = e[n].ks.k.length, r = 0; r < i; r += 1) e[n].ks.k[r].s && (e[n].ks.k[r].s[0].c = e[n].closed), e[n].ks.k[r].e && (e[n].ks.k[r].e[0].c = e[n].closed);!0 } else "gr" == e[n].ty && t(e[n].it) }

          function n(e) { var n, r, i, a, s, o, l = e.length; for (r = 0; r < l; r += 1) { if ((n = e[r]).hasMask) { var h = n.masksProperties; for (a = h.length, i = 0; i < a; i += 1)
                  if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                  else
                    for (o = h[i].pt.k.length, s = 0; s < o; s += 1) h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl), h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl) } 4 === n.ty && t(n.shapes) } } return function(t) { if (r(e, t.v) && (n(t.layers), t.assets)) { var i, a = t.assets.length; for (i = 0; i < a; i += 1) t.assets[i].layers && n(t.assets[i].layers) } } }(); var h = {}; return h.completeData = function(r, i) { r.__complete || (o(r), a(r), s(r), l(r), function r(i, a, s) { var o, l, h, p, c, u, f, d = i.length; for (l = 0; l < d; l += 1)
            if ("ks" in (o = i[l]) && !o.completed) { if (o.completed = !0, o.tt && (i[l - 1].td = o.tt), o.hasMask) { var m = o.masksProperties; for (p = m.length, h = 0; h < p; h += 1)
                  if (m[h].pt.k.i) n(m[h].pt.k);
                  else
                    for (u = m[h].pt.k.length, c = 0; c < u; c += 1) m[h].pt.k[c].s && n(m[h].pt.k[c].s[0]), m[h].pt.k[c].e && n(m[h].pt.k[c].e[0]) } 0 === o.ty ? (o.layers = e(o.refId, a), r(o.layers, a, s)) : 4 === o.ty ? t(o.shapes) : 5 == o.ty && (0 !== (f = o).t.a.length || "m" in f.t.p || (f.singleShape = !0)) } }(r.layers, r.assets, i), r.__complete = !0) }, h } var dataManager = dataFunctionManager(),
      FontManager = function() { var e = 5e3,
          t = { w: 0, size: 0, shapes: [] },
          n = [];

        function r(e, t) { var n = createTag("span");
          n.style.fontFamily = t; var r = createTag("span");
          r.innerHTML = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(r), document.body.appendChild(n); var i = r.offsetWidth; return r.style.fontFamily = e + ", " + t, { node: r, w: i, parent: n } }

        function i(e, t) { var n = createNS("text"); return n.style.fontSize = "100px", n.setAttribute("font-family", t.fFamily), n.setAttribute("font-style", t.fStyle), n.setAttribute("font-weight", t.fWeight), n.textContent = "1", t.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", t.fClass)) : n.style.fontFamily = t.fFamily, e.appendChild(n), createTag("canvas").getContext("2d").font = t.fWeight + " " + t.fStyle + " 100px " + t.fFamily, n } n = n.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]); var a = function() { this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now() }; return a.getCombinedCharacterCodes = function() { return n }, a.prototype.addChars = function(e) { if (e) { this.chars || (this.chars = []); var t, n, r, i = e.length,
              a = this.chars.length; for (t = 0; t < i; t += 1) { for (n = 0, r = !1; n < a;) this.chars[n].style === e[t].style && this.chars[n].fFamily === e[t].fFamily && this.chars[n].ch === e[t].ch && (r = !0), n += 1;
              r || (this.chars.push(e[t]), a += 1) } } }, a.prototype.addFonts = function(e, t) { if (e) { if (this.chars) return this.isLoaded = !0, void(this.fonts = e.list); var n, a = e.list,
              s = a.length,
              o = s; for (n = 0; n < s; n += 1) { var l, h, p = !0; if (a[n].loaded = !1, a[n].monoCase = r(a[n].fFamily, "monospace"), a[n].sansCase = r(a[n].fFamily, "sans-serif"), a[n].fPath) { if ("p" === a[n].fOrigin || 3 === a[n].origin) { if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + a[n].fFamily + '"], style[f-origin="3"][f-family="' + a[n].fFamily + '"]')).length > 0 && (p = !1), p) { var c = createTag("style");
                    c.setAttribute("f-forigin", a[n].fOrigin), c.setAttribute("f-origin", a[n].origin), c.setAttribute("f-family", a[n].fFamily), c.type = "text/css", c.innerHTML = "@font-face {font-family: " + a[n].fFamily + "; font-style: normal; src: url('" + a[n].fPath + "');}", t.appendChild(c) } } else if ("g" === a[n].fOrigin || 1 === a[n].origin) { for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h++) - 1 !== l[h].href.indexOf(a[n].fPath) && (p = !1); if (p) { var u = createTag("link");
                    u.setAttribute("f-forigin", a[n].fOrigin), u.setAttribute("f-origin", a[n].origin), u.type = "text/css", u.rel = "stylesheet", u.href = a[n].fPath, document.body.appendChild(u) } } else if ("t" === a[n].fOrigin || 2 === a[n].origin) { for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h++) a[n].fPath === l[h].src && (p = !1); if (p) { var f = createTag("link");
                    f.setAttribute("f-forigin", a[n].fOrigin), f.setAttribute("f-origin", a[n].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", a[n].fPath), t.appendChild(f) } } } else a[n].loaded = !0, o -= 1;
              a[n].helper = i(t, a[n]), a[n].cache = {}, this.fonts.push(a[n]) } 0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100) } else this.isLoaded = !0 }, a.prototype.getCharData = function(e, n, r) { for (var i = 0, a = this.chars.length; i < a;) { if (this.chars[i].ch === e && this.chars[i].style === n && this.chars[i].fFamily === r) return this.chars[i];
            i += 1 } return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && console.warn("Missing character from exported characters list: ", e, n, r), t }, a.prototype.getFontByName = function(e) { for (var t = 0, n = this.fonts.length; t < n;) { if (this.fonts[t].fName === e) return this.fonts[t];
            t += 1 } return this.fonts[0] }, a.prototype.measureText = function(e, t, n) { var r = this.getFontByName(t),
            i = e.charCodeAt(0); if (!r.cache[i + 1]) { var a = r.helper; if (" " === e) { a.textContent = "|" + e + "|"; var s = a.getComputedTextLength();
              a.textContent = "||"; var o = a.getComputedTextLength();
              r.cache[i + 1] = (s - o) / 100 } else a.textContent = e, r.cache[i + 1] = a.getComputedTextLength() / 100 } return r.cache[i + 1] * n }, a.prototype.checkLoadedFonts = function() { var t, n, r, i = this.fonts.length,
            a = i; for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (n = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, n.offsetWidth !== r ? (a -= 1, this.fonts[t].loaded = !0) : (n = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, n.offsetWidth !== r && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
          0 !== a && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() { this.isLoaded = !0 }.bind(this), 0) }, a.prototype.loaded = function() { return this.isLoaded }, a }(),
      PropertyFactory = function() { var e = initialDefaultFrame,
          t = Math.abs;

        function n(e, t) { var n, i = this.offsetTime; "multidimensional" === this.propType && (n = createTypedArray("float32", this.pv.length)); for (var a, s, o, l, h, p, c, u, f = t.lastIndex, d = f, m = this.keyframes.length - 1, g = !0; g;) { if (a = this.keyframes[d], s = this.keyframes[d + 1], d === m - 1 && e >= s.t - i) { a.h && (a = s), f = 0; break } if (s.t - i > e) { f = d; break } d < m - 1 ? d += 1 : (f = 0, g = !1) } var y, v, b, x, E, k, _, w, S, C, P = s.t - i,
            T = a.t - i; if (a.to) { a.bezierData || (a.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti)); var D = a.bezierData; if (e >= P || e < T) { var A = e >= P ? D.points.length - 1 : 0; for (l = D.points[A].point.length, o = 0; o < l; o += 1) n[o] = D.points[A].point[o] } else { a.__fnct ? u = a.__fnct : (u = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = u), h = u((e - T) / (P - T)); var F, M = D.segmentLength * h,
                I = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastAddedLength : 0; for (c = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastPoint : 0, g = !0, p = D.points.length; g;) { if (I += D.points[c].partialLength, 0 === M || 0 === h || c === D.points.length - 1) { for (l = D.points[c].point.length, o = 0; o < l; o += 1) n[o] = D.points[c].point[o]; break } if (M >= I && M < I + D.points[c + 1].partialLength) { for (F = (M - I) / D.points[c + 1].partialLength, l = D.points[c].point.length, o = 0; o < l; o += 1) n[o] = D.points[c].point[o] + (D.points[c + 1].point[o] - D.points[c].point[o]) * F; break } c < p - 1 ? c += 1 : g = !1 } t._lastPoint = c, t._lastAddedLength = I - D.points[c].partialLength, t._lastKeyframeIndex = d } } else { var R, z, N, B, V; if (m = a.s.length, y = s.s || a.e, this.sh && 1 !== a.h)
              if (e >= P) n[0] = y[0], n[1] = y[1], n[2] = y[2];
              else if (e <= T) n[0] = a.s[0], n[1] = a.s[1], n[2] = a.s[2];
            else { var O = r(a.s),
                L = r(y);
              v = n, b = function(e, t, n) { var r, i, a, s, o, l = [],
                  h = e[0],
                  p = e[1],
                  c = e[2],
                  u = e[3],
                  f = t[0],
                  d = t[1],
                  m = t[2],
                  g = t[3];
                (i = h * f + p * d + c * m + u * g) < 0 && (i = -i, f = -f, d = -d, m = -m, g = -g);
                1 - i > 1e-6 ? (r = Math.acos(i), a = Math.sin(r), s = Math.sin((1 - n) * r) / a, o = Math.sin(n * r) / a) : (s = 1 - n, o = n); return l[0] = s * h + o * f, l[1] = s * p + o * d, l[2] = s * c + o * m, l[3] = s * u + o * g, l }(O, L, (e - T) / (P - T)), x = b[0], E = b[1], k = b[2], _ = b[3], w = Math.atan2(2 * E * _ - 2 * x * k, 1 - 2 * E * E - 2 * k * k), S = Math.asin(2 * x * E + 2 * k * _), C = Math.atan2(2 * x * _ - 2 * E * k, 1 - 2 * x * x - 2 * k * k), v[0] = w / degToRads, v[1] = S / degToRads, v[2] = C / degToRads } else
              for (d = 0; d < m; d += 1) 1 !== a.h && (e >= P ? h = 1 : e < T ? h = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? u = a.__fnct[d] : (R = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], z = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], N = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], B = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], u = BezierFactory.getBezierEasing(R, z, N, B).get, a.__fnct[d] = u)) : a.__fnct ? u = a.__fnct : (R = a.o.x, z = a.o.y, N = a.i.x, B = a.i.y, u = BezierFactory.getBezierEasing(R, z, N, B).get, a.__fnct = u), h = u((e - T) / (P - T)))), y = s.s || a.e, V = 1 === a.h ? a.s[d] : a.s[d] + (y[d] - a.s[d]) * h, 1 === m ? n = V : n[d] = V } return t.lastIndex = f, n }

        function r(e) { var t = e[0] * degToRads,
            n = e[1] * degToRads,
            r = e[2] * degToRads,
            i = Math.cos(t / 2),
            a = Math.cos(n / 2),
            s = Math.cos(r / 2),
            o = Math.sin(t / 2),
            l = Math.sin(n / 2),
            h = Math.sin(r / 2); return [o * l * s + i * a * h, o * a * s + i * l * h, i * l * s - o * a * h, i * a * s - o * l * h] }

        function i() { var t = this.comp.renderedFrame - this.offsetTime,
            n = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime; if (!(t === this._caching.lastFrame || this._caching.lastFrame !== e && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < n && t < n))) { this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0); var i = this.interpolateValue(t, this._caching);
            this.pv = i } return this._caching.lastFrame = t, this.pv }

        function a(e) { var n; if ("unidimensional" === this.propType) n = e * this.mult, t(this.v - n) > 1e-5 && (this.v = n, this._mdf = !0);
          else
            for (var r = 0, i = this.v.length; r < i;) n = e[r] * this.mult, t(this.v[r] - n) > 1e-5 && (this.v[r] = n, this._mdf = !0), r += 1 }

        function s() { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else { this.lock = !0, this._mdf = this._isFirstFrame; var e, t = this.effectsSequence.length,
                n = this.kf ? this.pv : this.data.k; for (e = 0; e < t; e += 1) n = this.effectsSequence[e](n);
              this.setVValue(n), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId } }

        function o(e) { this.effectsSequence.push(e), this.container.addDynamicProperty(this) }

        function l(e, t, n, r) { this.propType = "unidimensional", this.mult = n || 1, this.data = t, this.v = n ? t.k * n : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = r, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.addEffect = o }

        function h(e, t, n, r) { this.propType = "multidimensional", this.mult = n || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = r, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1; var i, l = t.k.length;
          this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l);
          createTypedArray("float32", l); for (this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s, this.setVValue = a, this.addEffect = o }

        function p(t, r, l, h) { this.propType = "unidimensional", this.keyframes = r.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: e, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = r, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.v = e, this.pv = e, this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.interpolateValue = n, this.effectsSequence = [i.bind(this)], this.addEffect = o }

        function c(t, r, l, h) { this.propType = "multidimensional"; var p, c, u, f, d, m = r.k.length; for (p = 0; p < m - 1; p += 1) r.k[p].to && r.k[p].s && r.k[p].e && (c = r.k[p].s, u = r.k[p].e, f = r.k[p].to, d = r.k[p].ti, (2 === c.length && (c[0] !== u[0] || c[1] !== u[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], c[0] + f[0], c[1] + f[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], u[0] + d[0], u[1] + d[1]) || 3 === c.length && (c[0] !== u[0] || c[1] !== u[1] || c[2] !== u[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], c[0] + f[0], c[1] + f[1], c[2] + f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], u[0] + d[0], u[1] + d[1], u[2] + d[2])) && (r.k[p].to = null, r.k[p].ti = null), c[0] === u[0] && c[1] === u[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === c.length || c[2] === u[2] && 0 === f[2] && 0 === d[2]) && (r.k[p].to = null, r.k[p].ti = null));
          this.effectsSequence = [i.bind(this)], this.keyframes = r.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = t, this.container = h, this.comp = t.comp, this.getValue = s, this.setVValue = a, this.interpolateValue = n, this.frameId = -1; var g = r.k[0].s.length; for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = e, this.pv[p] = e;
          this._caching = { lastFrame: e, lastIndex: 0, value: createTypedArray("float32", g) }, this.addEffect = o } return { getProp: function(e, t, n, r, i) { var a; if (t.k.length)
              if ("number" == typeof t.k[0]) a = new h(e, t, r, i);
              else switch (n) {
                case 0:
                  a = new p(e, t, r, i); break;
                case 1:
                  a = new c(e, t, r, i) } else a = new l(e, t, r, i); return a.effectsSequence.length && i.addDynamicProperty(a), a } } }(),
      TransformPropertyFactory = function() {
        function e(e, t, n) { if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || { k: [0, 0, 0] }, 1, 0, this), t.rx) { if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) { var r, i = t.or.k.length; for (r = 0; r < i; r += 1) t.or.k[r].to = t.or.k[r].ti = null } this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0 } else this.r = PropertyFactory.getProp(e, t.r || { k: 0 }, 0, degToRads, this);
          t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || { k: [100, 100, 100] }, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0) } return e.prototype = { applyToMatrix: function(e) { var t = this._mdf;
            this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) }, getValue: function(e) { if (this.elem.globalData.frameId !== this.frameId) { if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) { if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) { var t, n, r = this.elem.globalData.frameRate; if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (t = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (t = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / r, 0)) : (t = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) { t = [], n = []; var i = this.px,
                      a = this.py;
                    i._caching.lastFrame + i.offsetTime <= i.keyframes[0].t ? (t[0] = i.getValueAtTime((i.keyframes[0].t + .01) / r, 0), t[1] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), n[0] = i.getValueAtTime(i.keyframes[0].t / r, 0), n[1] = a.getValueAtTime(a.keyframes[0].t / r, 0)) : i._caching.lastFrame + i.offsetTime >= i.keyframes[i.keyframes.length - 1].t ? (t[0] = i.getValueAtTime(i.keyframes[i.keyframes.length - 1].t / r, 0), t[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), n[0] = i.getValueAtTime((i.keyframes[i.keyframes.length - 1].t - .01) / r, 0), n[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0)) : (t = [i.pv, a.pv], n[0] = i.getValueAtTime((i._caching.lastFrame + i.offsetTime - .01) / r, i.offsetTime), n[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime)) } this.v.rotate(-Math.atan2(t[1] - n[1], t[0] - n[0])) } this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) } this.frameId = this.elem.globalData.frameId } }, precalculateMatrix: function() { if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) { if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) { if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3 } if (this.r) { if (this.r.effectsSequence.length) return;
                this.pre.rotate(-this.r.v), this.appliedTransformations = 4 } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4) } }, autoOrient: function() {} }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(e) { this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0 }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t, n, r) { return new e(t, n, r) } } }();

    function ShapePath() { this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength) } ShapePath.prototype.setPathData = function(e, t) { this.c = e, this.setLength(t); for (var n = 0; n < t;) this.v[n] = point_pool.newElement(), this.o[n] = point_pool.newElement(), this.i[n] = point_pool.newElement(), n += 1 }, ShapePath.prototype.setLength = function(e) { for (; this._maxLength < e;) this.doubleArrayLength();
      this._length = e }, ShapePath.prototype.doubleArrayLength = function() { this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2 }, ShapePath.prototype.setXYAt = function(e, t, n, r, i) { var a; switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
        case "v":
          a = this.v; break;
        case "i":
          a = this.i; break;
        case "o":
          a = this.o }(!a[r] || a[r] && !i) && (a[r] = point_pool.newElement()), a[r][0] = e, a[r][1] = t }, ShapePath.prototype.setTripleAt = function(e, t, n, r, i, a, s, o) { this.setXYAt(e, t, "v", s, o), this.setXYAt(n, r, "o", s, o), this.setXYAt(i, a, "i", s, o) }, ShapePath.prototype.reverse = function() { var e = new ShapePath;
      e.setPathData(this.c, this._length); var t = this.v,
        n = this.o,
        r = this.i,
        i = 0;
      this.c && (e.setTripleAt(t[0][0], t[0][1], r[0][0], r[0][1], n[0][0], n[0][1], 0, !1), i = 1); var a, s = this._length - 1,
        o = this._length; for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], r[s][0], r[s][1], n[s][0], n[s][1], a, !1), s -= 1; return e }; var ShapePropertyFactory = function() { var e = -999999;

        function t(e, t, n) { var r, i, a, s, o, l, h, p, c, u = n.lastIndex,
            f = this.keyframes; if (e < f[0].t - this.offsetTime) r = f[0].s[0], a = !0, u = 0;
          else if (e >= f[f.length - 1].t - this.offsetTime) r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
          else { for (var d, m, g = u, y = f.length - 1, v = !0; v && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > e));) g < y - 1 ? g += 1 : v = !1; if (u = g, !(a = 1 === d.h)) { if (e >= m.t - this.offsetTime) p = 1;
              else if (e < d.t - this.offsetTime) p = 0;
              else { var b;
                d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), p = b((e - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime))) } i = m.s ? m.s[0] : d.e[0] } r = d.s[0] } for (l = t._length, h = r.i[0].length, n.lastIndex = u, s = 0; s < l; s += 1)
            for (o = 0; o < h; o += 1) c = a ? r.i[s][o] : r.i[s][o] + (i.i[s][o] - r.i[s][o]) * p, t.i[s][o] = c, c = a ? r.o[s][o] : r.o[s][o] + (i.o[s][o] - r.o[s][o]) * p, t.o[s][o] = c, c = a ? r.v[s][o] : r.v[s][o] + (i.v[s][o] - r.v[s][o]) * p, t.v[s][o] = c }

        function n() { var t = this.comp.renderedFrame - this.offsetTime,
            n = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
            i = this._caching.lastFrame; return i !== e && (i < n && t < n || i > r && t > r) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv }

        function r() { this.paths = this.localShapeCollection }

        function i(e) {
          (function(e, t) { if (e._length !== t._length || e.c !== t.c) return !1; var n, r = e._length; for (n = 0; n < r; n += 1)
              if (e.v[n][0] !== t.v[n][0] || e.v[n][1] !== t.v[n][1] || e.o[n][0] !== t.o[n][0] || e.o[n][1] !== t.o[n][1] || e.i[n][0] !== t.i[n][0] || e.i[n][1] !== t.i[n][1]) return !1; return !0 })(this.v, e) || (this.v = shape_pool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection) }

        function a() { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else { this.lock = !0, this._mdf = !1; var e, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                n = this.effectsSequence.length; for (e = 0; e < n; e += 1) t = this.effectsSequence[e](t);
              this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId } }

        function s(e, t, n) { this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1; var i = 3 === n ? t.pt.k : t.ks.k;
          this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [] }

        function o(e) { this.effectsSequence.push(e), this.container.addDynamicProperty(this) }

        function l(t, i, a) { this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.k = !0, this.kf = !0; var s = this.keyframes[0].s[0].i.length;
          this.keyframes[0].s[0].i[0].length;
          this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = r, this._caching = { lastFrame: e, lastIndex: 0 }, this.effectsSequence = [n.bind(this)] } s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = o; var h = function() { var e = roundCorner;

            function t(e, t) { this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath()) } return t.prototype = { reset: r, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath()) }, convertEllToPath: function() { var t = this.p.v[0],
                  n = this.p.v[1],
                  r = this.s.v[0] / 2,
                  i = this.s.v[1] / 2,
                  a = 3 !== this.d,
                  s = this.v;
                s.v[0][0] = t, s.v[0][1] = n - i, s.v[1][0] = a ? t + r : t - r, s.v[1][1] = n, s.v[2][0] = t, s.v[2][1] = n + i, s.v[3][0] = a ? t - r : t + r, s.v[3][1] = n, s.i[0][0] = a ? t - r * e : t + r * e, s.i[0][1] = n - i, s.i[1][0] = a ? t + r : t - r, s.i[1][1] = n - i * e, s.i[2][0] = a ? t + r * e : t - r * e, s.i[2][1] = n + i, s.i[3][0] = a ? t - r : t + r, s.i[3][1] = n + i * e, s.o[0][0] = a ? t + r * e : t - r * e, s.o[0][1] = n - i, s.o[1][0] = a ? t + r : t - r, s.o[1][1] = n + i * e, s.o[2][0] = a ? t - r * e : t + r * e, s.o[2][1] = n + i, s.o[3][0] = a ? t - r : t + r, s.o[3][1] = n - i * e } }, extendPrototype([DynamicPropertyContainer], t), t }(),
          p = function() {
            function e(e, t) { this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), 1 === t.sy ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath()) } return e.prototype = { reset: r, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath()) }, convertStarToPath: function() { var e, t, n, r, i = 2 * Math.floor(this.pt.v),
                  a = 2 * Math.PI / i,
                  s = !0,
                  o = this.or.v,
                  l = this.ir.v,
                  h = this.os.v,
                  p = this.is.v,
                  c = 2 * Math.PI * o / (2 * i),
                  u = 2 * Math.PI * l / (2 * i),
                  f = -Math.PI / 2;
                f += this.r.v; var d = 3 === this.data.d ? -1 : 1; for (this.v._length = 0, e = 0; e < i; e += 1) { n = s ? h : p, r = s ? c : u; var m = (t = s ? o : l) * Math.cos(f),
                    g = t * Math.sin(f),
                    y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                    v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                  m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * r * n * d, g - v * r * n * d, m + y * r * n * d, g + v * r * n * d, e, !0), s = !s, f += a * d } }, convertPolygonToPath: function() { var e, t = Math.floor(this.pt.v),
                  n = 2 * Math.PI / t,
                  r = this.or.v,
                  i = this.os.v,
                  a = 2 * Math.PI * r / (4 * t),
                  s = -Math.PI / 2,
                  o = 3 === this.data.d ? -1 : 1; for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) { var l = r * Math.cos(s),
                    h = r * Math.sin(s),
                    p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                    c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                  l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * a * i * o, h - c * a * i * o, l + p * a * i * o, h + c * a * i * o, e, !0), s += n * o } this.paths.length = 0, this.paths[0] = this.v } }, extendPrototype([DynamicPropertyContainer], e), e }(),
          c = function() {
            function e(e, t) { this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath()) } return e.prototype = { convertRectToPath: function() { var e = this.p.v[0],
                  t = this.p.v[1],
                  n = this.s.v[0] / 2,
                  r = this.s.v[1] / 2,
                  i = bm_min(n, r, this.r.v),
                  a = i * (1 - roundCorner);
                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + i, e + n, t - r + a, 0, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - a, e + n, t + r - i, 1, !0), 0 !== i ? (this.v.setTripleAt(e + n - i, t + r, e + n - i, t + r, e + n - a, t + r, 2, !0), this.v.setTripleAt(e - n + i, t + r, e - n + a, t + r, e - n + i, t + r, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - i, e - n, t + r - a, 4, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + a, e - n, t - r + i, 5, !0), this.v.setTripleAt(e - n + i, t - r, e - n + i, t - r, e - n + a, t - r, 6, !0), this.v.setTripleAt(e + n - i, t - r, e + n - a, t - r, e + n - i, t - r, 7, !0)) : (this.v.setTripleAt(e - n, t + r, e - n + a, t + r, e - n, t + r, 2), this.v.setTripleAt(e - n, t - r, e - n, t - r + a, e - n, t - r, 3))) : (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + a, e + n, t - r + i, 0, !0), 0 !== i ? (this.v.setTripleAt(e + n - i, t - r, e + n - i, t - r, e + n - a, t - r, 1, !0), this.v.setTripleAt(e - n + i, t - r, e - n + a, t - r, e - n + i, t - r, 2, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + i, e - n, t - r + a, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - a, e - n, t + r - i, 4, !0), this.v.setTripleAt(e - n + i, t + r, e - n + i, t + r, e - n + a, t + r, 5, !0), this.v.setTripleAt(e + n - i, t + r, e + n - a, t + r, e + n - i, t + r, 6, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - i, e + n, t + r - a, 7, !0)) : (this.v.setTripleAt(e - n, t - r, e - n + a, t - r, e - n, t - r, 1, !0), this.v.setTripleAt(e - n, t + r, e - n, t + r - a, e - n, t + r, 2, !0), this.v.setTripleAt(e + n, t + r, e + n - a, t + r, e + n, t + r, 3, !0))) }, getValue: function(e) { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath()) }, reset: r }, extendPrototype([DynamicPropertyContainer], e), e }(); var u = { getShapeProp: function(e, t, n) { var r; return 3 === n || 4 === n ? r = (3 === n ? t.pt : t.ks).k.length ? new l(e, t, n) : new s(e, t, n) : 5 === n ? r = new c(e, t) : 6 === n ? r = new h(e, t) : 7 === n && (r = new p(e, t)), r.k && e.addDynamicProperty(r), r }, getConstructorFunction: function() { return s }, getKeyframedConstructorFunction: function() { return l } }; return u }(),
      ShapeModifiers = function() { var e = {},
          t = {}; return e.registerModifier = function(e, n) { t[e] || (t[e] = n) }, e.getModifier = function(e, n, r) { return new t[e](n, r) }, e }();

    function ShapeModifier() {}

    function TrimModifier() {}

    function RoundCornersModifier() {}

    function RepeaterModifier() {}

    function ShapeCollection() { this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength) }

    function DashProperty(e, t, n, r) { this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = n, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r); var i, a, s = t.length || 0; for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = { n: t[i].n, p: a };
      this.k || this.getValue(!0), this._isAnimated = this.k }

    function GradientProperty(e, t, n) { this.data = t, this.c = createTypedArray("uint8c", 4 * t.p); var r = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
      this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(n), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0) } ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) { if (!this.closed) { var t = { shape: e.sh, data: e, localShapeCollection: shapeCollection_pool.newShapeCollection() };
        this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated() } }, ShapeModifier.prototype.init = function(e, t) { this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, ShapeModifier.prototype.processKeys = function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties()) }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) { this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length }, TrimModifier.prototype.addShapeToModifier = function(e) { e.pathsData = [] }, TrimModifier.prototype.calculateShapeEdges = function(e, t, n, r, i) { var a = [];
      t <= 1 ? a.push({ s: e, e: t }) : e >= 1 ? a.push({ s: e - 1, e: t - 1 }) : (a.push({ s: e, e: 1 }), a.push({ s: 0, e: t - 1 })); var s, o, l = [],
        h = a.length; for (s = 0; s < h; s += 1) { var p, c; if ((o = a[s]).e * i < r || o.s * i > r + n);
        else p = o.s * i <= r ? 0 : (o.s * i - r) / n, c = o.e * i >= r + n ? 1 : (o.e * i - r) / n, l.push([p, c]) } return l.length || l.push([0, 0]), l }, TrimModifier.prototype.releasePathsData = function(e) { var t, n = e.length; for (t = 0; t < n; t += 1) segments_length_pool.release(e[t]); return e.length = 0, e }, TrimModifier.prototype.processShapes = function(e) { var t, n, r; if (this._mdf || e) { var i = this.o.v % 360 / 360; if (i < 0 && (i += 1), (t = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + i) > (n = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + i)) { var a = t;
          t = n, n = a } t = 1e-4 * Math.round(1e4 * t), n = 1e-4 * Math.round(1e4 * n), this.sValue = t, this.eValue = n } else t = this.sValue, n = this.eValue; var s, o, l, h, p, c, u = this.shapes.length,
        f = 0; if (n === t)
        for (s = 0; s < u; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection;
      else if (1 === n && 0 === t || 0 === n && 1 === t) { if (this._mdf)
          for (s = 0; s < u; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0 } else { var d, m, g = []; for (s = 0; s < u; s += 1)
          if ((d = this.shapes[s]).shape._mdf || this._mdf || e || 2 === this.m) { if (l = (r = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
            else { for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(r.shapes[o]), h.push(p), c += p.totalLength;
              d.totalShapeLength = c, d.pathsData = h } f += c, d.shape._mdf = !0 } else d.shape.paths = d.localShapeCollection; var y, v = t,
          b = n,
          x = 0; for (s = u - 1; s >= 0; s -= 1)
          if ((d = this.shapes[s]).shape._mdf) { for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (y = this.calculateShapeEdges(t, n, d.totalShapeLength, x, f), x += d.totalShapeLength) : y = [
                [v, b]
              ], l = y.length, o = 0; o < l; o += 1) { v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * b }) : v >= 1 ? g.push({ s: d.totalShapeLength * (v - 1), e: d.totalShapeLength * (b - 1) }) : (g.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), g.push({ s: 0, e: d.totalShapeLength * (b - 1) })); var E = this.addShapes(d, g[0]); if (g[0].s !== g[0].e) { if (g.length > 1)
                  if (d.shape.paths.shapes[d.shape.paths._length - 1].c) { var k = E.pop();
                    this.addPaths(E, m), E = this.addShapes(d, g[1], k) } else this.addPaths(E, m), E = this.addShapes(d, g[1]);
                this.addPaths(E, m) } } d.shape.paths = m } } }, TrimModifier.prototype.addPaths = function(e, t) { var n, r = e.length; for (n = 0; n < r; n += 1) t.addShape(e[n]) }, TrimModifier.prototype.addSegment = function(e, t, n, r, i, a, s) { i.setXYAt(t[0], t[1], "o", a), i.setXYAt(n[0], n[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(r[0], r[1], "v", a + 1) }, TrimModifier.prototype.addSegmentFromArray = function(e, t, n, r) { t.setXYAt(e[1], e[5], "o", n), t.setXYAt(e[2], e[6], "i", n + 1), r && t.setXYAt(e[0], e[4], "v", n), t.setXYAt(e[3], e[7], "v", n + 1) }, TrimModifier.prototype.addShapes = function(e, t, n) { var r, i, a, s, o, l, h, p, c = e.pathsData,
        u = e.shape.paths.shapes,
        f = e.shape.paths._length,
        d = 0,
        m = [],
        g = !0; for (n ? (o = n._length, p = n._length) : (n = shape_pool.newElement(), o = 0, p = 0), m.push(n), r = 0; r < f; r += 1) { for (l = c[r].lengths, n.c = u[r].c, a = u[r].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
          if (d + (s = l[i - 1]).addedLength < t.s) d += s.addedLength, n.c = !1;
          else { if (d > t.e) { n.c = !1; break } t.s <= d && t.e >= d + s.addedLength ? (this.addSegment(u[r].v[i - 1], u[r].o[i - 1], u[r].i[i], u[r].v[i], n, o, g), g = !1) : (h = bez.getNewSegment(u[r].v[i - 1], u[r].v[i], u[r].o[i - 1], u[r].i[i], (t.s - d) / s.addedLength, (t.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(h, n, o, g), g = !1, n.c = !1), d += s.addedLength, o += 1 } if (u[r].c && l.length) { if (s = l[i - 1], d <= t.e) { var y = l[i - 1].addedLength;
            t.s <= d && t.e >= d + y ? (this.addSegment(u[r].v[i - 1], u[r].o[i - 1], u[r].i[0], u[r].v[0], n, o, g), g = !1) : (h = bez.getNewSegment(u[r].v[i - 1], u[r].v[0], u[r].o[i - 1], u[r].i[0], (t.s - d) / y, (t.e - d) / y, l[i - 1]), this.addSegmentFromArray(h, n, o, g), g = !1, n.c = !1) } else n.c = !1;
          d += s.addedLength, o += 1 } if (n._length && (n.setXYAt(n.v[p][0], n.v[p][1], "i", p), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), d > t.e) break;
        r < f - 1 && (n = shape_pool.newElement(), g = !0, m.push(n), o = 0) } return m }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) { this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length }, RoundCornersModifier.prototype.processPath = function(e, t) { var n = shape_pool.newElement();
      n.c = e.c; var r, i, a, s, o, l, h, p, c, u, f, d, m, g = e._length,
        y = 0; for (r = 0; r < g; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== g - 1 || e.c ? (o = 0 === r ? e.v[g - 1] : e.v[r - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, p = d = i[0] + (o[0] - i[0]) * h, c = m = i[1] - (i[1] - o[1]) * h, u = p - (p - i[0]) * roundCorner, f = c - (c - i[1]) * roundCorner, n.setTripleAt(p, c, u, f, d, m, y), y += 1, o = r === g - 1 ? e.v[0] : e.v[r + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, p = u = i[0] + (o[0] - i[0]) * h, c = f = i[1] + (o[1] - i[1]) * h, d = p - (p - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, n.setTripleAt(p, c, u, f, d, m, y), y += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], y), y += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], y), y += 1); return n }, RoundCornersModifier.prototype.processShapes = function(e) { var t, n, r, i, a, s, o = this.shapes.length,
        l = this.rd.v; if (0 !== l)
        for (n = 0; n < o; n += 1) { if ((a = this.shapes[n]).shape.paths, s = a.localShapeCollection, a.shape._mdf || this._mdf || e)
            for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) s.addShape(this.processPath(t[r], l));
          a.shape.paths = a.localShapeCollection } this.dynamicProperties.length || (this._mdf = !1) }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) { this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix }, RepeaterModifier.prototype.applyTransforms = function(e, t, n, r, i, a) { var s = a ? -1 : 1,
        o = r.s.v[0] + (1 - r.s.v[0]) * (1 - i),
        l = r.s.v[1] + (1 - r.s.v[1]) * (1 - i);
      e.translate(r.p.v[0] * s * i, r.p.v[1] * s * i, r.p.v[2]), t.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), t.rotate(-r.r.v * s * i), t.translate(r.a.v[0], r.a.v[1], r.a.v[2]), n.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), n.scale(a ? 1 / o : o, a ? 1 / l : l), n.translate(r.a.v[0], r.a.v[1], r.a.v[2]) }, RepeaterModifier.prototype.init = function(e, t, n, r) { this.elem = e, this.arr = t, this.pos = n, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[n]); for (; n > 0;) n -= 1, this._elements.unshift(t[n]), 1;
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, RepeaterModifier.prototype.resetElements = function(e) { var t, n = e.length; for (t = 0; t < n; t += 1) e[t]._processed = !1, "gr" === e[t].ty && this.resetElements(e[t].it) }, RepeaterModifier.prototype.cloneElements = function(e) { e.length; var t = JSON.parse(JSON.stringify(e)); return this.resetElements(t), t }, RepeaterModifier.prototype.changeGroupRender = function(e, t) { var n, r = e.length; for (n = 0; n < r; n += 1) e[n]._render = t, "gr" === e[n].ty && this.changeGroupRender(e[n].it, t) }, RepeaterModifier.prototype.processShapes = function(e) { var t, n, r, i, a; if (this._mdf || e) { var s, o = Math.ceil(this.c.v); if (this._groups.length < o) { for (; this._groups.length < o;) { var l = { it: this.cloneElements(this._elements), ty: "gr" };
            l.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1 } this.elem.reloadShapes() } for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) s = a < o, this._groups[r]._render = s, this.changeGroupRender(this._groups[r].it, s), a += 1;
        this._currentCopies = o; var h = this.o.v,
          p = h % 1,
          c = h > 0 ? Math.floor(h) : Math.ceil(h),
          u = (this.tr.v.props, this.pMatrix.props),
          f = this.rMatrix.props,
          d = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset(); var m, g, y = 0; if (h > 0) { for (; y < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
          p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), y += p) } else if (h < 0) { for (; y > c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
          p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), y -= p) } for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) { if (g = (n = (t = this.elemsData[r].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== y) { for ((0 !== r && 1 === i || r !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), m = 0; m < g; m += 1) n[m] = this.matrix.props[m];
            this.matrix.reset() } else
            for (this.matrix.reset(), m = 0; m < g; m += 1) n[m] = this.matrix.props[m];
          y += 1, a -= 1, r += i } } else
        for (a = this._currentCopies, r = 0, i = 1; a;) n = (t = this.elemsData[r].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, r += i }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(e) { this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1 }, ShapeCollection.prototype.releaseShapes = function() { var e; for (e = 0; e < this._length; e += 1) shape_pool.release(this.shapes[e]);
      this._length = 0 }, DashProperty.prototype.getValue = function(e) { if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) { var t = 0,
          n = this.dataProps.length; for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < n; t += 1) "o" != this.dataProps[t].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v } }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(e, t) { for (var n = 0, r = this.o.length / 2; n < r;) { if (Math.abs(e[4 * n] - e[4 * t + 2 * n]) > .01) return !1;
        n += 1 } return !0 }, GradientProperty.prototype.checkCollapsable = function() { if (this.o.length / 2 != this.c.length / 4) return !1; if (this.data.k.k[0].s)
        for (var e = 0, t = this.data.k.k.length; e < t;) { if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
          e += 1 } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1; return !0 }, GradientProperty.prototype.getValue = function(e) { if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) { var t, n, r, i = 4 * this.data.p; for (t = 0; t < i; t += 1) n = t % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[t] * n), this.c[t] !== r && (this.c[t] = r, this._cmdf = !e); if (this.o.length)
          for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) n = t % 2 == 0 ? 100 : 1, r = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== r && (this.o[t - 4 * this.data.p] = r, this._omdf = !e);
        this._mdf = !e } }, extendPrototype([DynamicPropertyContainer], GradientProperty); var buildShapeString = function(e, t, n, r) { if (0 === t) return ""; var i, a = e.o,
          s = e.i,
          o = e.v,
          l = " M" + r.applyToPointStringified(o[0][0], o[0][1]); for (i = 1; i < t; i += 1) l += " C" + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + r.applyToPointStringified(s[i][0], s[i][1]) + " " + r.applyToPointStringified(o[i][0], o[i][1]); return n && t && (l += " C" + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l },
      ImagePreloader = function() { var e = function() { var e = createTag("canvas");
          e.width = 1, e.height = 1; var t = e.getContext("2d"); return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e }();

        function t() { this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null) }

        function n(t) { var n = function(e, t, n) { var r = ""; if (e.e) r = e.p;
              else if (t) { var i = e.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), r = t + i } else r = n, r += e.u ? e.u : "", r += e.p; return r }(t, this.assetsPath, this.path),
            r = createTag("img");
          r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded.bind(this), !1), r.addEventListener("error", function() { i.img = e, this._imageLoaded() }.bind(this), !1), r.src = n; var i = { img: r, assetData: t }; return i }

        function r(e, t) { this.imagesLoadedCb = t; var n, r = e.length; for (n = 0; n < r; n += 1) e[n].layers || (this.totalImages += 1, this.images.push(this._createImageData(e[n]))) }

        function i(e) { this.path = e || "" }

        function a(e) { this.assetsPath = e || "" }

        function s(e) { for (var t = 0, n = this.images.length; t < n;) { if (this.images[t].assetData === e) return this.images[t].img;
            t += 1 } }

        function o() { this.imagesLoadedCb = null, this.images.length = 0 }

        function l() { return this.totalImages === this.loadedAssets } return function() { this.loadAssets = r, this.setAssetsPath = a, this.setPath = i, this.loaded = l, this.destroy = o, this.getImage = s, this._createImageData = n, this._imageLoaded = t, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = [] } }(),
      featureSupport = function() { var e = { maskType: !0 }; return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), e }(),
      filtersFactory = function() { var e = {}; return e.createFilter = function(e) { var t = createNS("filter"); return t.setAttribute("id", e), t.setAttribute("filterUnits", "objectBoundingBox"), t.setAttribute("x", "0%"), t.setAttribute("y", "0%"), t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t }, e.createAlphaToLuminanceFilter = function() { var e = createNS("feColorMatrix"); return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e }, e }(),
      assetLoader = function() {
        function e(e) { return e.response && "object" == typeof e.response ? e.response : e.response && "string" == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : void 0 } return { load: function(t, n, r) { var i, a = new XMLHttpRequest;
            a.open("GET", t, !0); try { a.responseType = "json" } catch (e) {} a.send(), a.onreadystatechange = function() { if (4 == a.readyState)
                if (200 == a.status) i = e(a), n(i);
                else try { i = e(a), n(i) } catch (e) { r && r(e) } } } } }();

    function TextAnimatorProperty(e, t, n) { this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = n, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(n) }

    function TextAnimatorDataProperty(e, t, n) { var r = { propType: !1 },
        i = PropertyFactory.getProp,
        a = t.a;
      this.a = { r: a.r ? i(e, a.r, 0, degToRads, n) : r, rx: a.rx ? i(e, a.rx, 0, degToRads, n) : r, ry: a.ry ? i(e, a.ry, 0, degToRads, n) : r, sk: a.sk ? i(e, a.sk, 0, degToRads, n) : r, sa: a.sa ? i(e, a.sa, 0, degToRads, n) : r, s: a.s ? i(e, a.s, 1, .01, n) : r, a: a.a ? i(e, a.a, 1, 0, n) : r, o: a.o ? i(e, a.o, 0, .01, n) : r, p: a.p ? i(e, a.p, 1, 0, n) : r, sw: a.sw ? i(e, a.sw, 0, 0, n) : r, sc: a.sc ? i(e, a.sc, 1, 0, n) : r, fc: a.fc ? i(e, a.fc, 1, 0, n) : r, fh: a.fh ? i(e, a.fh, 0, 0, n) : r, fs: a.fs ? i(e, a.fs, 0, .01, n) : r, fb: a.fb ? i(e, a.fb, 0, .01, n) : r, t: a.t ? i(e, a.t, 0, 0, n) : r }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, n), this.s.t = t.s.t }

    function LetterProps(e, t, n, r, i, a) { this.o = e, this.sw = t, this.sc = n, this.fc = r, this.m = i, this.p = a, this._mdf = { o: !0, sw: !!t, sc: !!n, fc: !!r, m: !0, p: !0 } }

    function TextProperty(e, t) { this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData) } TextAnimatorProperty.prototype.searchProperties = function() { var e, t, n = this._textData.a.length,
        r = PropertyFactory.getProp; for (e = 0; e < n; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { f: r(this._elem, this._textData.p.f, 0, 0, this), l: r(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this) }, TextAnimatorProperty.prototype.getMeasures = function(e, t) { if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) { this._isFirstFrame = !1; var n, r, i, a, s, o, l, h, p, c, u, f, d, m, g, y, v, b, x, E = this._moreOptions.alignment.v,
          k = this._animatorsData,
          _ = this._textData,
          w = this.mHelper,
          S = this._renderType,
          C = this.renderedLetters.length,
          P = (this.data, e.l); if (this._hasMaskedPath) { if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) { var T, D = x.v; for (this._pathData.r && (D = D.reverse()), s = { tLength: 0, segments: [] }, a = D._length - 1, y = 0, i = 0; i < a; i += 1) T = bez.buildBezierData(D.v[i], D.v[i + 1], [D.o[i][0] - D.v[i][0], D.o[i][1] - D.v[i][1]], [D.i[i + 1][0] - D.v[i + 1][0], D.i[i + 1][1] - D.v[i + 1][1]]), s.tLength += T.segmentLength, s.segments.push(T), y += T.segmentLength;
            i = a, x.v.c && (T = bez.buildBezierData(D.v[i], D.v[0], [D.o[i][0] - D.v[i][0], D.o[i][1] - D.v[i][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), s.tLength += T.segmentLength, s.segments.push(T), y += T.segmentLength), this._pathData.pi = s } if (s = this._pathData.pi, o = this._pathData.f.v, u = 0, c = 1, h = 0, p = !0, m = s.segments, o < 0 && x.v.c)
            for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[u = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[u -= 1].points).length - 1);
          f = (d = m[u].points)[c - 1], g = (l = d[c]).partialLength } a = P.length, n = 0, r = 0; var A, F, M, I, R = 1.2 * e.finalSize * .714,
          z = !0;
        M = k.length; var N, B, V, O, L, G, j, H, U, W, q, Y, $, K = -1,
          X = o,
          Q = u,
          J = c,
          Z = -1,
          ee = "",
          te = this.defaultPropsArray; if (2 === e.j || 1 === e.j) { var ne = 0,
            re = 0,
            ie = 2 === e.j ? -.5 : -1,
            ae = 0,
            se = !0; for (i = 0; i < a; i += 1)
            if (P[i].n) { for (ne && (ne += re); ae < i;) P[ae].animatorJustifyOffset = ne, ae += 1;
              ne = 0, se = !0 } else { for (F = 0; F < M; F += 1)(A = k[F].a).t.propType && (se && 2 === e.j && (re += A.t.v * ie), (N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars)).length ? ne += A.t.v * N[0] * ie : ne += A.t.v * N * ie);
              se = !1 } for (ne && (ne += re); ae < i;) P[ae].animatorJustifyOffset = ne, ae += 1 } for (i = 0; i < a; i += 1) { if (w.reset(), L = 1, P[i].n) n = 0, r += e.yOffset, r += z ? 1 : 0, o = X, z = !1, 0, this._hasMaskedPath && (c = J, f = (d = m[u = Q].points)[c - 1], g = (l = d[c]).partialLength, h = 0), $ = W = Y = ee = "", te = this.defaultPropsArray;
          else { if (this._hasMaskedPath) { if (Z !== P[i].line) { switch (e.j) {
                  case 1:
                    o += y - e.lineWidths[P[i].line]; break;
                  case 2:
                    o += (y - e.lineWidths[P[i].line]) / 2 } Z = P[i].line } K !== P[i].ind && (P[K] && (o += P[K].extra), o += P[i].an / 2, K = P[i].ind), o += E[0] * P[i].an / 200; var oe = 0; for (F = 0; F < M; F += 1)(A = k[F].a).p.propType && ((N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars)).length ? oe += A.p.v[0] * N[0] : oe += A.p.v[0] * N), A.a.propType && ((N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars)).length ? oe += A.a.v[0] * N[0] : oe += A.a.v[0] * N); for (p = !0; p;) h + g >= o + oe || !d ? (v = (o + oe - h) / l.partialLength, V = f.point[0] + (l.point[0] - f.point[0]) * v, O = f.point[1] + (l.point[1] - f.point[1]) * v, w.translate(-E[0] * P[i].an / 200, -E[1] * R / 100), p = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[u += 1] ? d = m[u].points : x.v.c ? (c = 0, d = m[u = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, g = (l = d[c]).partialLength));
              B = P[i].an / 2 - P[i].add, w.translate(-B, 0, 0) } else B = P[i].an / 2 - P[i].add, w.translate(-B, 0, 0), w.translate(-E[0] * P[i].an / 200, -E[1] * R / 100, 0); for (P[i].l / 2, F = 0; F < M; F += 1)(A = k[F].a).t.propType && (N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars), 0 === n && 0 === e.j || (this._hasMaskedPath ? N.length ? o += A.t.v * N[0] : o += A.t.v * N : N.length ? n += A.t.v * N[0] : n += A.t.v * N)); for (P[i].l / 2, e.strokeWidthAnim && (j = e.sw || 0), e.strokeColorAnim && (G = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (H = [e.fc[0], e.fc[1], e.fc[2]]), F = 0; F < M; F += 1)(A = k[F].a).a.propType && ((N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars)).length ? w.translate(-A.a.v[0] * N[0], -A.a.v[1] * N[1], A.a.v[2] * N[2]) : w.translate(-A.a.v[0] * N, -A.a.v[1] * N, A.a.v[2] * N)); for (F = 0; F < M; F += 1)(A = k[F].a).s.propType && ((N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars)).length ? w.scale(1 + (A.s.v[0] - 1) * N[0], 1 + (A.s.v[1] - 1) * N[1], 1) : w.scale(1 + (A.s.v[0] - 1) * N, 1 + (A.s.v[1] - 1) * N, 1)); for (F = 0; F < M; F += 1) { if (A = k[F].a, N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars), A.sk.propType && (N.length ? w.skewFromAxis(-A.sk.v * N[0], A.sa.v * N[1]) : w.skewFromAxis(-A.sk.v * N, A.sa.v * N)), A.r.propType && (N.length ? w.rotateZ(-A.r.v * N[2]) : w.rotateZ(-A.r.v * N)), A.ry.propType && (N.length ? w.rotateY(A.ry.v * N[1]) : w.rotateY(A.ry.v * N)), A.rx.propType && (N.length ? w.rotateX(A.rx.v * N[0]) : w.rotateX(A.rx.v * N)), A.o.propType && (N.length ? L += (A.o.v * N[0] - L) * N[0] : L += (A.o.v * N - L) * N), e.strokeWidthAnim && A.sw.propType && (N.length ? j += A.sw.v * N[0] : j += A.sw.v * N), e.strokeColorAnim && A.sc.propType)
                for (U = 0; U < 3; U += 1) N.length ? G[U] = G[U] + (A.sc.v[U] - G[U]) * N[0] : G[U] = G[U] + (A.sc.v[U] - G[U]) * N; if (e.fillColorAnim && e.fc) { if (A.fc.propType)
                  for (U = 0; U < 3; U += 1) N.length ? H[U] = H[U] + (A.fc.v[U] - H[U]) * N[0] : H[U] = H[U] + (A.fc.v[U] - H[U]) * N;
                A.fh.propType && (H = N.length ? addHueToRGB(H, A.fh.v * N[0]) : addHueToRGB(H, A.fh.v * N)), A.fs.propType && (H = N.length ? addSaturationToRGB(H, A.fs.v * N[0]) : addSaturationToRGB(H, A.fs.v * N)), A.fb.propType && (H = N.length ? addBrightnessToRGB(H, A.fb.v * N[0]) : addBrightnessToRGB(H, A.fb.v * N)) } } for (F = 0; F < M; F += 1)(A = k[F].a).p.propType && (N = k[F].s.getMult(P[i].anIndexes[F], _.a[F].s.totalChars), this._hasMaskedPath ? N.length ? w.translate(0, A.p.v[1] * N[0], -A.p.v[2] * N[1]) : w.translate(0, A.p.v[1] * N, -A.p.v[2] * N) : N.length ? w.translate(A.p.v[0] * N[0], A.p.v[1] * N[1], -A.p.v[2] * N[2]) : w.translate(A.p.v[0] * N, A.p.v[1] * N, -A.p.v[2] * N)); if (e.strokeWidthAnim && (W = j < 0 ? 0 : j), e.strokeColorAnim && (q = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), e.fillColorAnim && e.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) { if (w.translate(0, -e.ls), w.translate(0, E[1] * R / 100 + r, 0), _.p.p) { b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]); var le = 180 * Math.atan(b) / Math.PI;
                l.point[0] < f.point[0] && (le += 180), w.rotate(-le * Math.PI / 180) } w.translate(V, O, 0), o -= E[0] * P[i].an / 200, P[i + 1] && K !== P[i + 1].ind && (o += P[i].an / 2, o += e.tr / 1e3 * e.finalSize) } else { switch (w.translate(n, r, 0), e.ps && w.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                case 1:
                  w.translate(P[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[P[i].line]), 0, 0); break;
                case 2:
                  w.translate(P[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[P[i].line]) / 2, 0, 0) } w.translate(0, -e.ls), w.translate(B, 0, 0), w.translate(E[0] * P[i].an / 200, E[1] * R / 100, 0), n += P[i].l + e.tr / 1e3 * e.finalSize } "html" === S ? ee = w.toCSS() : "svg" === S ? ee = w.to2dCSS() : te = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], $ = L } C <= i ? (I = new LetterProps($, W, q, Y, ee, te), this.renderedLetters.push(I), C += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[i], this.lettersChangedFlag = I.update($, W, q, Y, ee, te) || this.lettersChangedFlag) } } }, TextAnimatorProperty.prototype.getValue = function() { this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties()) }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(e, t, n, r, i, a) { this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1; var s = !1; return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== n && (this.sc = n, this._mdf.sc = !0, s = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e }, TextProperty.prototype.setCurrentData = function(e) { e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0 }, TextProperty.prototype.searchProperty = function() { return this.searchKeyframes() }, TextProperty.prototype.searchKeyframes = function() { return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf }, TextProperty.prototype.addEffect = function(e) { this.effectsSequence.push(e), this.elem.addDynamicProperty(this) }, TextProperty.prototype.getValue = function(e) { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) { this.currentData.t = this.data.d.k[this.keysIndex].s.t; var t = this.currentData,
          n = this.keysIndex; if (this.lock) this.setCurrentData(this.currentData);
        else { this.lock = !0, this._mdf = !1; var r, i = this.effectsSequence.length,
            a = e || this.data.d.k[this.keysIndex].s; for (r = 0; r < i; r += 1) a = n !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
          t !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId } } }, TextProperty.prototype.getKeyframeValue = function() { for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, n = 0, r = e.length; n <= r - 1 && (e[n].s, !(n === r - 1 || e[n + 1].t > t));) n += 1; return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s }, TextProperty.prototype.buildFinalText = function(e) { for (var t, n = FontManager.getCombinedCharacterCodes(), r = [], i = 0, a = e.length; i < a;) t = e.charCodeAt(i), -1 !== n.indexOf(t) ? r[r.length - 1] += e.charAt(i) : t >= 55296 && t <= 56319 && (t = e.charCodeAt(i + 1)) >= 56320 && t <= 57343 ? (r.push(e.substr(i, 2)), ++i) : r.push(e.charAt(i)), i += 1; return r }, TextProperty.prototype.completeTextData = function(e) { e.__complete = !0; var t, n, r, i, a, s, o, l = this.elem.globalData.fontManager,
        h = this.data,
        p = [],
        c = 0,
        u = h.m.g,
        f = 0,
        d = 0,
        m = 0,
        g = [],
        y = 0,
        v = 0,
        b = l.getFontByName(e.f),
        x = 0,
        E = b.fStyle ? b.fStyle.split(" ") : [],
        k = "normal",
        _ = "normal"; for (n = E.length, t = 0; t < n; t += 1) switch (E[t].toLowerCase()) {
        case "italic":
          _ = "italic"; break;
        case "bold":
          k = "700"; break;
        case "black":
          k = "900"; break;
        case "medium":
          k = "500"; break;
        case "regular":
        case "normal":
          k = "400"; break;
        case "light":
        case "thin":
          k = "200" } e.fWeight = b.fWeight || k, e.fStyle = _, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), n = e.finalText.length, e.finalLineHeight = e.lh; var w, S = e.tr / 1e3 * e.finalSize; if (e.sz)
        for (var C, P, T = !0, D = e.sz[0], A = e.sz[1]; T;) { C = 0, y = 0, n = (P = this.buildFinalText(e.t)).length, S = e.tr / 1e3 * e.finalSize; var F = -1; for (t = 0; t < n; t += 1) w = P[t].charCodeAt(0), r = !1, " " === P[t] ? F = t : 13 !== w && 3 !== w || (y = 0, r = !0, C += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(P[t], b.fStyle, b.fFamily), x = r ? 0 : o.w * e.finalSize / 100) : x = l.measureText(P[t], e.f, e.finalSize), y + x > D && " " !== P[t] ? (-1 === F ? n += 1 : t = F, C += e.finalLineHeight || 1.2 * e.finalSize, P.splice(t, F === t ? 1 : 0, "\r"), F = -1, y = 0) : (y += x, y += S);
          C += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && A < C ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = P, n = e.finalText.length, T = !1) } y = -S, x = 0; var M, I = 0; for (t = 0; t < n; t += 1)
        if (r = !1, w = (M = e.finalText[t]).charCodeAt(0), " " === M ? i = " " : 13 === w || 3 === w ? (I = 0, g.push(y), v = y > v ? y : v, y = -2 * S, i = "", r = !0, m += 1) : i = e.finalText[t], l.chars ? (o = l.getCharData(M, b.fStyle, l.getFontByName(e.f).fFamily), x = r ? 0 : o.w * e.finalSize / 100) : x = l.measureText(i, e.f, e.finalSize), " " === M ? I += x + S : (y += x + S + I, I = 0), p.push({ l: x, an: x, add: f, n: r, anIndexes: [], val: i, line: m, animatorJustifyOffset: 0 }), 2 == u) { if (f += x, "" === i || " " === i || t === n - 1) { for ("" !== i && " " !== i || (f -= x); d <= t;) p[d].an = f, p[d].ind = c, p[d].extra = x, d += 1;
            c += 1, f = 0 } } else if (3 == u) { if (f += x, "" === i || t === n - 1) { for ("" === i && (f -= x); d <= t;) p[d].an = f, p[d].ind = c, p[d].extra = x, d += 1;
          f = 0, c += 1 } } else p[c].ind = c, p[c].extra = 0, c += 1; if (e.l = p, v = y > v ? y : v, g.push(y), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
      else switch (e.boxWidth = v, e.j) {
        case 1:
          e.justifyOffset = -e.boxWidth; break;
        case 2:
          e.justifyOffset = -e.boxWidth / 2; break;
        default:
          e.justifyOffset = 0 } e.lineWidths = g; var R, z, N = h.a;
      s = N.length; var B, V, O = []; for (a = 0; a < s; a += 1) { for ((R = N[a]).a.sc && (e.strokeColorAnim = !0), R.a.sw && (e.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (e.fillColorAnim = !0), V = 0, B = R.s.b, t = 0; t < n; t += 1)(z = p[t]).anIndexes[a] = V, (1 == B && "" !== z.val || 2 == B && "" !== z.val && " " !== z.val || 3 == B && (z.n || " " == z.val || t == n - 1) || 4 == B && (z.n || t == n - 1)) && (1 === R.s.rn && O.push(V), V += 1);
        h.a[a].s.totalChars = V; var L, G = -1; if (1 === R.s.rn)
          for (t = 0; t < n; t += 1) G != (z = p[t]).anIndexes[a] && (G = z.anIndexes[a], L = O.splice(Math.floor(Math.random() * O.length), 1)[0]), z.anIndexes[a] = L } e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100 }, TextProperty.prototype.updateDocumentData = function(e, t) { t = void 0 === t ? this.keysIndex : t; var n = this.copyData({}, this.data.d.k[t].s);
      n = this.copyData(n, e), this.data.d.k[t].s = n, this.recalculate(t), this.elem.addDynamicProperty(this) }, TextProperty.prototype.recalculate = function(e) { var t = this.data.d.k[e].s;
      t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t) }, TextProperty.prototype.canResizeFont = function(e) { this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }, TextProperty.prototype.setMinimumFontSize = function(e) { this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }; var TextSelectorProp = function() { var e = Math.max,
          t = Math.min,
          n = Math.floor;

        function r(e, t) { this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || { k: 0 }, 0, 0, this), this.e = "e" in t ? PropertyFactory.getProp(e, t.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(e, t.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue() } return r.prototype = { getMult: function(r) { this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue(); var i = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
              a = 0,
              s = this.finalS,
              o = this.finalE,
              l = this.data.sh; if (2 == l) a = i(a = o === s ? r >= o ? 1 : 0 : e(0, t(.5 / (o - s) + (r - s) / (o - s), 1)));
            else if (3 == l) a = i(a = o === s ? r >= o ? 0 : 1 : 1 - e(0, t(.5 / (o - s) + (r - s) / (o - s), 1)));
            else if (4 == l) o === s ? a = 0 : (a = e(0, t(.5 / (o - s) + (r - s) / (o - s), 1))) < .5 ? a *= 2 : a = 1 - 2 * (a - .5), a = i(a);
            else if (5 == l) { if (o === s) a = 0;
              else { var h = o - s,
                  p = -h / 2 + (r = t(e(0, r + .5 - s), o - s)),
                  c = h / 2;
                a = Math.sqrt(1 - p * p / (c * c)) } a = i(a) } else 6 == l ? (o === s ? a = 0 : (r = t(e(0, r + .5 - s), o - s), a = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (o - s))) / 2), a = i(a)) : (r >= n(s) && (a = r - s < 0 ? 1 - (s - r) : e(0, t(o - r, 1))), a = i(a)); return a * this.a.v }, getValue: function(e) { this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && 2 === this.data.r && (this.e.v = this._currentTextLength); var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
              n = this.o.v / t,
              r = this.s.v / t + n,
              i = this.e.v / t + n; if (r > i) { var a = r;
              r = i, i = a } this.finalS = r, this.finalE = i } }, extendPrototype([DynamicPropertyContainer], r), { getTextSelectorProp: function(e, t, n) { return new r(e, t, n) } } }(),
      pool_factory = function(e, t, n, r) { var i = 0,
          a = e,
          s = createSizedArray(a);

        function o() { return i ? s[i -= 1] : t() } return { newElement: o, release: function(e) { i === a && (s = pooling.double(s), a *= 2), n && n(e), s[i] = e, i += 1 } } },
      pooling = function() { return { double: function(e) { return e.concat(createSizedArray(e.length)) } } }(),
      point_pool = function() { return pool_factory(8, function() { return createTypedArray("float32", 2) }) }(),
      shape_pool = function() { var e = pool_factory(4, function() { return new ShapePath }, function(e) { var t, n = e._length; for (t = 0; t < n; t += 1) point_pool.release(e.v[t]), point_pool.release(e.i[t]), point_pool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
          e._length = 0, e.c = !1 }); return e.clone = function(t) { var n, r = e.newElement(),
            i = void 0 === t._length ? t.v.length : t._length; for (r.setLength(i), r.c = t.c, n = 0; n < i; n += 1) r.setTripleAt(t.v[n][0], t.v[n][1], t.o[n][0], t.o[n][1], t.i[n][0], t.i[n][1], n); return r }, e }(),
      shapeCollection_pool = function() { var e = { newShapeCollection: function() { var e;
              e = t ? r[t -= 1] : new ShapeCollection; return e }, release: function(e) { var i, a = e._length; for (i = 0; i < a; i += 1) shape_pool.release(e.shapes[i]);
              e._length = 0, t === n && (r = pooling.double(r), n *= 2);
              r[t] = e, t += 1 } },
          t = 0,
          n = 4,
          r = createSizedArray(n); return e }(),
      segments_length_pool = function() { return pool_factory(8, function() { return { lengths: [], totalLength: 0 } }, function(e) { var t, n = e.lengths.length; for (t = 0; t < n; t += 1) bezier_length_pool.release(e.lengths[t]);
          e.lengths.length = 0 }) }(),
      bezier_length_pool = function() { return pool_factory(8, function() { return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) } }) }();

    function BaseRenderer() {}

    function SVGRenderer(e, t) { this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg"); var n = ""; if (t && t.title) { var r = createNS("title"),
          i = createElementID();
        r.setAttribute("id", i), r.textContent = t.title, this.svgElement.appendChild(r), n += i } if (t && t.description) { var a = createNS("desc"),
          s = createElementID();
        a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), n += " " + s } n && this.svgElement.setAttribute("aria-labelledby", n); var o = createNS("defs");
      this.svgElement.appendChild(o); var l = createNS("g");
      this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = { preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: t && t.progressiveLoad || !1, hideOnTransparent: !t || !1 !== t.hideOnTransparent, viewBoxOnly: t && t.viewBoxOnly || !1, viewBoxSize: t && t.viewBoxSize || !1, className: t && t.className || "" }, this.globalData = { _mdf: !1, frameNum: -1, defs: o, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg" }

    function CanvasRenderer(e, t) { this.animationItem = e, this.renderConfig = { clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas, context: t && t.context || null, progressiveLoad: t && t.progressiveLoad || !1, preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice", className: t && t.className || "" }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas" }

    function HybridRenderer(e, t) { this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: t && t.className || "", imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !t || !1 !== t.hideOnTransparent }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html" }

    function MaskElement(e, t, n) { this.data = e, this.element = t, this.globalData = n, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null; var r, i = this.globalData.defs,
        a = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(a), this.solidPath = ""; var s, o, l, h, p, c, u, f = this.masksProperties,
        d = 0,
        m = [],
        g = createElementID(),
        y = "clipPath",
        v = "clip-path"; for (r = 0; r < a; r++)
        if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (y = "mask", v = "mask"), "s" != f[r].mode && "i" != f[r].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), s = createNS("path"), "n" != f[r].mode) { var b; if (d += 1, s.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (y = "mask", v = "mask", u = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), i.appendChild(p), s.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (c = null, u = null), this.storedData[r] = { elem: s, x: u, expan: c, lastPath: "", lastOperator: "", filterId: b, lastRadius: 0 }, "i" == f[r].mode) { l = m.length; var x = createNS("g"); for (o = 0; o < l; o += 1) x.appendChild(m[o]); var E = createNS("mask");
            E.setAttribute("mask-type", "alpha"), E.setAttribute("id", g + "_" + d), E.appendChild(s), i.appendChild(E), x.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + d + ")"), m.length = 0, m.push(x) } else m.push(s);
          f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = { elem: s, lastPath: "", op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3), invRect: h }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r]) } else this.viewData[r] = { op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3), elem: s, lastPath: "" }, i.appendChild(s); for (this.maskElement = createNS(y), a = m.length, r = 0; r < a; r += 1) this.maskElement.appendChild(m[r]);
      d > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this) }

    function HierarchyElement() {}

    function FrameElement() {}

    function TransformElement() {}

    function RenderableElement() {}

    function RenderableDOMElement() {}

    function ProcessedElement(e, t) { this.elem = e, this.pos = t }

    function SVGStyleData(e, t) { this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = !0 === e.hd, this.pElem = createNS("path"), this.msElem = null }

    function SVGShapeData(e, t, n) { this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = n, this.lvl = t, this._isAnimated = !!n.k; for (var r = 0, i = e.length; r < i;) { if (e[r].mProps.dynamicProperties.length) { this._isAnimated = !0; break } r += 1 } }

    function SVGTransformData(e, t, n) { this.transform = { mProps: e, op: t, container: n }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length }

    function SVGStrokeStyleData(e, t, n) { this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = n, this._isAnimated = !!this._isAnimated }

    function SVGFillStyleData(e, t, n) { this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = n }

    function SVGGradientFillStyleData(e, t, n) { this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, n) }

    function SVGGradientStrokeStyleData(e, t, n) { this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, n), this._isAnimated = !!this._isAnimated }

    function ShapeGroupData() { this.it = [], this.prevViewData = [], this.gr = createNS("g") } BaseRenderer.prototype.checkLayers = function(e) { var t, n, r = this.layers.length; for (this.completeLayers = !0, t = r - 1; t >= 0; t--) this.elements[t] || (n = this.layers[t]).ip - n.st <= e - this.layers[t].st && n.op - n.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
      this.checkPendingElements() }, BaseRenderer.prototype.createItem = function(e) { switch (e.ty) {
        case 2:
          return this.createImage(e);
        case 0:
          return this.createComp(e);
        case 1:
          return this.createSolid(e);
        case 3:
          return this.createNull(e);
        case 4:
          return this.createShape(e);
        case 5:
          return this.createText(e);
        case 13:
          return this.createCamera(e) } return this.createNull(e) }, BaseRenderer.prototype.createCamera = function() { throw new Error("You're using a 3d camera. Try the html renderer.") }, BaseRenderer.prototype.buildAllItems = function() { var e, t = this.layers.length; for (e = 0; e < t; e += 1) this.buildItem(e);
      this.checkPendingElements() }, BaseRenderer.prototype.includeLayers = function(e) { this.completeLayers = !1; var t, n, r = e.length,
        i = this.layers.length; for (t = 0; t < r; t += 1)
        for (n = 0; n < i;) { if (this.layers[n].id == e[t].id) { this.layers[n] = e[t]; break } n += 1 } }, BaseRenderer.prototype.setProjectInterface = function(e) { this.globalData.projectInterface = e }, BaseRenderer.prototype.initItems = function() { this.globalData.progressiveLoad || this.buildAllItems() }, BaseRenderer.prototype.buildElementParenting = function(e, t, n) { for (var r = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (r[a] && !0 !== r[a] ? (n.push(r[a]), r[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(e, i[a].parent, n) : e.setHierarchy(n)) : (this.buildItem(a), this.addPendingElement(e))), a += 1 }, BaseRenderer.prototype.addPendingElement = function(e) { this.pendingElements.push(e) }, BaseRenderer.prototype.searchExtraCompositions = function(e) { var t, n = e.length; for (t = 0; t < n; t += 1)
        if (e[t].xt) { var r = this.createComp(e[t]);
          r.initExpressions(), this.globalData.projectInterface.registerComposition(r) } }, BaseRenderer.prototype.setupGlobalData = function(e, t) { this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = { w: e.w, h: e.h } }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(e) { return new NullElement(e, this.globalData, this) }, SVGRenderer.prototype.createShape = function(e) { return new SVGShapeElement(e, this.globalData, this) }, SVGRenderer.prototype.createText = function(e) { return new SVGTextElement(e, this.globalData, this) }, SVGRenderer.prototype.createImage = function(e) { return new IImageElement(e, this.globalData, this) }, SVGRenderer.prototype.createComp = function(e) { return new SVGCompElement(e, this.globalData, this) }, SVGRenderer.prototype.createSolid = function(e) { return new ISolidElement(e, this.globalData, this) }, SVGRenderer.prototype.configAnimation = function(e) { this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement); var t = this.globalData.defs;
      this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e; var n = createNS("clipPath"),
        r = createNS("rect");
      r.setAttribute("width", e.w), r.setAttribute("height", e.h), r.setAttribute("x", 0), r.setAttribute("y", 0); var i = createElementID();
      n.setAttribute("id", i), n.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), t.appendChild(n), this.layers = e.layers, this.elements = createSizedArray(e.layers.length) }, SVGRenderer.prototype.destroy = function() { this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null; var e, t = this.layers ? this.layers.length : 0; for (e = 0; e < t; e++) this.elements[e] && this.elements[e].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(e) { var t = this.elements; if (!t[e] && 99 != this.layers[e].ty) { t[e] = !0; var n = this.createItem(this.layers[e]);
        t[e] = n, expressionsPlugin && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, e), this.layers[e].tt && (this.elements[e - 1] && !0 !== this.elements[e - 1] ? n.setMatte(t[e - 1].layerId) : (this.buildItem(e - 1), this.addPendingElement(n))) } }, SVGRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) { var e = this.pendingElements.pop(); if (e.checkParenting(), e.data.tt)
          for (var t = 0, n = this.elements.length; t < n;) { if (this.elements[t] === e) { e.setMatte(this.elements[t - 1].layerId); break } t += 1 } } }, SVGRenderer.prototype.renderFrame = function(e) { if (this.renderedFrame !== e && !this.destroyed) { null === e ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1; var t, n = this.layers.length; for (this.completeLayers || this.checkLayers(e), t = n - 1; t >= 0; t--)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st); if (this.globalData._mdf)
          for (t = 0; t < n; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame() } }, SVGRenderer.prototype.appendElementInPos = function(e, t) { var n = e.getBaseElement(); if (n) { for (var r, i = 0; i < t;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
        r ? this.layerElement.insertBefore(n, r) : this.layerElement.appendChild(n) } }, SVGRenderer.prototype.hide = function() { this.layerElement.style.display = "none" }, SVGRenderer.prototype.show = function() { this.layerElement.style.display = "block" }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(e) { return new CVShapeElement(e, this.globalData, this) }, CanvasRenderer.prototype.createText = function(e) { return new CVTextElement(e, this.globalData, this) }, CanvasRenderer.prototype.createImage = function(e) { return new CVImageElement(e, this.globalData, this) }, CanvasRenderer.prototype.createComp = function(e) { return new CVCompElement(e, this.globalData, this) }, CanvasRenderer.prototype.createSolid = function(e) { return new CVSolidElement(e, this.globalData, this) }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(e) { if (1 !== e[0] || 0 !== e[1] || 0 !== e[4] || 1 !== e[5] || 0 !== e[12] || 0 !== e[13])
        if (this.renderConfig.clearCanvas) { this.transformMat.cloneFromProps(e); var t = this.contextData.cTr.props;
          this.transformMat.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props); var n = this.contextData.cTr.props;
          this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]) } else this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13]) }, CanvasRenderer.prototype.ctxOpacity = function(e) { if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= e < 0 ? 0 : e, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
      this.contextData.cO *= e < 0 ? 0 : e, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO) }, CanvasRenderer.prototype.reset = function() { this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore() }, CanvasRenderer.prototype.save = function(e) { if (this.renderConfig.clearCanvas) { e && this.canvasContext.save(); var t = this.contextData.cTr.props;
        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate(); var n, r = this.contextData.saved[this.contextData.cArrPos]; for (n = 0; n < 16; n += 1) r[n] = t[n];
        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1 } else this.canvasContext.save() }, CanvasRenderer.prototype.restore = function(e) { if (this.renderConfig.clearCanvas) { e && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1; var t, n = this.contextData.saved[this.contextData.cArrPos],
          r = this.contextData.cTr.props; for (t = 0; t < 16; t += 1) r[t] = n[t];
        this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), n = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = n, this.globalData.currentGlobalAlpha !== n && (this.canvasContext.globalAlpha = n, this.globalData.currentGlobalAlpha = n) } else this.canvasContext.restore() }, CanvasRenderer.prototype.configAnimation = function(e) { this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = e, this.layers = e.layers, this.transformCanvas = { w: e.w, h: e.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize() }, CanvasRenderer.prototype.updateContainerSize = function() { var e, t, n, r; if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (e = this.animationItem.wrapper.offsetWidth, t = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", e * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", t * this.renderConfig.dpr)) : (e = this.canvasContext.canvas.width * this.renderConfig.dpr, t = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) { var i = this.renderConfig.preserveAspectRatio.split(" "),
          a = i[1] || "meet",
          s = i[0] || "xMidYMid",
          o = s.substr(0, 4),
          l = s.substr(4);
        n = e / t, (r = this.transformCanvas.w / this.transformCanvas.h) > n && "meet" === a || r < n && "slice" === a ? (this.transformCanvas.sx = e / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = t / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < n && "meet" === a || r > n && "slice" === a) ? (e - this.transformCanvas.w * (t / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < n && "meet" === a || r > n && "slice" === a) ? (e - this.transformCanvas.w * (t / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (r > n && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.h * (e / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (r > n && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.h * (e / this.transformCanvas.w)) * this.renderConfig.dpr : 0 } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = e / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0) }, CanvasRenderer.prototype.destroy = function() { var e; for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0 }, CanvasRenderer.prototype.renderFrame = function(e, t) { if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) { this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e; var n, r = this.layers.length; for (this.completeLayers || this.checkLayers(e), n = 0; n < r; n++)(this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(e - this.layers[n].st); if (this.globalData._mdf) { for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = r - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();!0 !== this.renderConfig.clearCanvas && this.restore() } } }, CanvasRenderer.prototype.buildItem = function(e) { var t = this.elements; if (!t[e] && 99 != this.layers[e].ty) { var n = this.createItem(this.layers[e], this, this.globalData);
        t[e] = n, n.initExpressions() } }, CanvasRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) { this.pendingElements.pop().checkParenting() } }, CanvasRenderer.prototype.hide = function() { this.animationItem.container.style.display = "none" }, CanvasRenderer.prototype.show = function() { this.animationItem.container.style.display = "block" }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) { this.pendingElements.pop().checkParenting() } }, HybridRenderer.prototype.appendElementInPos = function(e, t) { var n = e.getBaseElement(); if (n) { var r = this.layers[t]; if (r.ddd && this.supports3d) this.addTo3dContainer(n, t);
        else if (this.threeDElements) this.addTo3dContainer(n, t);
        else { for (var i, a, s = 0; s < t;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
          i ? r.ddd && this.supports3d || this.layerElement.insertBefore(n, i) : r.ddd && this.supports3d || this.layerElement.appendChild(n) } } }, HybridRenderer.prototype.createShape = function(e) { return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this) }, HybridRenderer.prototype.createText = function(e) { return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextElement(e, this.globalData, this) }, HybridRenderer.prototype.createCamera = function(e) { return this.camera = new HCameraElement(e, this.globalData, this), this.camera }, HybridRenderer.prototype.createImage = function(e) { return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this) }, HybridRenderer.prototype.createComp = function(e) { return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this) }, HybridRenderer.prototype.createSolid = function(e) { return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this) }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(e) { for (var t = 0, n = this.threeDElements.length; t < n;) { if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
        t += 1 } }, HybridRenderer.prototype.createThreeDContainer = function(e, t) { var n = createTag("div");
      styleDiv(n); var r = createTag("div");
      styleDiv(r), "3d" === t && (n.style.width = this.globalData.compSize.w + "px", n.style.height = this.globalData.compSize.h + "px", n.style.transformOrigin = n.style.mozTransformOrigin = n.style.webkitTransformOrigin = "50% 50%", r.style.transform = r.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), n.appendChild(r); var i = { container: r, perspectiveElem: n, startPos: e, endPos: e, type: t }; return this.threeDElements.push(i), i }, HybridRenderer.prototype.build3dContainers = function() { var e, t, n = this.layers.length,
        r = ""; for (e = 0; e < n; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? ("3d" !== r && (r = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : ("2d" !== r && (r = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e)); for (e = (n = this.threeDElements.length) - 1; e >= 0; e--) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem) }, HybridRenderer.prototype.addTo3dContainer = function(e, t) { for (var n = 0, r = this.threeDElements.length; n < r;) { if (t <= this.threeDElements[n].endPos) { for (var i, a = this.threeDElements[n].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
          i ? this.threeDElements[n].container.insertBefore(e, i) : this.threeDElements[n].container.appendChild(e); break } n += 1 } }, HybridRenderer.prototype.configAnimation = function(e) { var t = createTag("div"),
        n = this.animationItem.wrapper;
      t.style.width = e.w + "px", t.style.height = e.h + "px", this.resizerElem = t, styleDiv(t), t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), n.appendChild(t), t.style.overflow = "hidden"; var r = createNS("svg");
      r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r); var i = createNS("defs");
      r.appendChild(i), this.data = e, this.setupGlobalData(e, r), this.globalData.defs = i, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize() }, HybridRenderer.prototype.destroy = function() { this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null; var e, t = this.layers ? this.layers.length : 0; for (e = 0; e < t; e++) this.elements[e].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, HybridRenderer.prototype.updateContainerSize = function() { var e, t, n, r, i = this.animationItem.wrapper.offsetWidth,
        a = this.animationItem.wrapper.offsetHeight,
        s = i / a;
      this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, n = 0, r = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, n = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + n + "," + r + ",0,1)" }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() { this.resizerElem.style.display = "none" }, HybridRenderer.prototype.show = function() { this.resizerElem.style.display = "block" }, HybridRenderer.prototype.initItems = function() { if (this.buildAllItems(), this.camera) this.camera.setup();
      else { var e, t = this.globalData.compSize.w,
          n = this.globalData.compSize.h,
          r = this.threeDElements.length; for (e = 0; e < r; e += 1) this.threeDElements[e].perspectiveElem.style.perspective = this.threeDElements[e].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2)) + "px" } }, HybridRenderer.prototype.searchExtraCompositions = function(e) { var t, n = e.length,
        r = createTag("div"); for (t = 0; t < n; t += 1)
        if (e[t].xt) { var i = this.createComp(e[t], r, this.globalData.comp, null);
          i.initExpressions(), this.globalData.projectInterface.registerComposition(i) } }, MaskElement.prototype.getMaskProperty = function(e) { return this.viewData[e].prop }, MaskElement.prototype.renderFrame = function(e) { var t, n = this.element.finalTransform.mat,
        r = this.masksProperties.length; for (t = 0; t < r; t++)
        if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), "n" !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && (this.viewData[t].invRect.setAttribute("x", -n.props[12]), this.viewData[t].invRect.setAttribute("y", -n.props[13])), this.storedData[t].x && (this.storedData[t].x._mdf || e))) { var i = this.storedData[t].expan;
          this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v)) } }, MaskElement.prototype.getMaskelement = function() { return this.maskElement }, MaskElement.prototype.createLayerSolidPath = function() { var e = "M0,0 "; return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " " }, MaskElement.prototype.drawPath = function(e, t, n) { var r, i, a = " M" + t.v[0][0] + "," + t.v[0][1]; for (i = t._length, r = 1; r < i; r += 1) a += " C" + t.o[r - 1][0] + "," + t.o[r - 1][1] + " " + t.i[r][0] + "," + t.i[r][1] + " " + t.v[r][0] + "," + t.v[r][1]; if (t.c && i > 1 && (a += " C" + t.o[r - 1][0] + "," + t.o[r - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), n.lastPath !== a) { var s = "";
        n.elem && (t.c && (s = e.inv ? this.solidPath + a : a), n.elem.setAttribute("d", s)), n.lastPath = a } }, MaskElement.prototype.destroy = function() { this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null }, HierarchyElement.prototype = { initHierarchy: function() { this.hierarchy = [], this._isParent = !1, this.checkParenting() }, setHierarchy: function(e) { this.hierarchy = e }, setAsParent: function() { this._isParent = !0 }, checkParenting: function() { void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []) } }, FrameElement.prototype = { initFrame: function() { this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1 }, prepareProperties: function(e, t) { var n, r = this.dynamicProperties.length; for (n = 0; n < r; n += 1)(t || this._isParent && "transform" === this.dynamicProperties[n].propType) && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && (this.globalData._mdf = !0, this._mdf = !0)) }, addDynamicProperty: function(e) {-1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e) } }, TransformElement.prototype = { initTransform: function() { this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty }, renderTransform: function() { if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) { var e, t = this.finalTransform.mat,
            n = 0,
            r = this.hierarchy.length; if (!this.finalTransform._matMdf)
            for (; n < r;) { if (this.hierarchy[n].finalTransform.mProp._mdf) { this.finalTransform._matMdf = !0; break } n += 1 }
          if (this.finalTransform._matMdf)
            for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), n = 0; n < r; n += 1) e = this.hierarchy[n].finalTransform.mProp.v.props, t.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]) } }, globalToLocal: function(e) { var t = [];
        t.push(this.finalTransform); for (var n = !0, r = this.comp; n;) r.finalTransform ? (r.data.hasMask && t.splice(0, 0, r.finalTransform), r = r.comp) : n = !1; var i, a, s = t.length; for (i = 0; i < s; i += 1) a = t[i].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0]; return e }, mHelper: new Matrix }, RenderableElement.prototype = { initRenderable: function() { this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [] }, addRenderableComponent: function(e) {-1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e) }, removeRenderableComponent: function(e) {-1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1) }, prepareRenderableFrame: function(e) { this.checkLayerLimits(e) }, checkTransparency: function() { this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show()) }, checkLayerLimits: function(e) { this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide()) }, renderRenderable: function() { var e, t = this.renderableComponents.length; for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame) }, sourceRectAtTime: function() { return { top: 0, left: 0, width: 100, height: 100 } }, getLayerSize: function() { return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height } } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(e, t, n) { this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide() }, hide: function() { this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0) }, show: function() { this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, renderInnerContent: function() {}, prepareFrame: function(e) { this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency() }, destroy: function() { this.innerElem = null, this.destroyBaseElement() } })], RenderableDOMElement), SVGStyleData.prototype.reset = function() { this.d = "", this._mdf = !1 }, SVGShapeData.prototype.setAsAnimated = function() { this._isAnimated = !0 }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, n) { this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = n, this.stops = [], this.setGradientData(n.pElem, t), this.setGradientOpacity(t, n), this._isAnimated = !!this._isAnimated }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) { var n = createElementID(),
        r = createNS(1 === t.t ? "linearGradient" : "radialGradient");
      r.setAttribute("id", n), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse"); var i, a, s, o = []; for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), r.appendChild(i), o.push(i);
      e.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + n + ")"), this.gf = r, this.cst = o }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) { if (this.g._hasOpacity && !this.g._collapsable) { var n, r, i, a = createNS("mask"),
          s = createNS("path");
        a.appendChild(s); var o = createElementID(),
          l = createElementID();
        a.setAttribute("id", l); var h = createNS(1 === e.t ? "linearGradient" : "radialGradient");
        h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length; var p = this.stops; for (r = 4 * e.g.p; r < i; r += 2)(n = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(n), p.push(n);
        s.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = a, this.ost = p, this.maskId = l, t.msElem = s } }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData); var SVGElementsRenderer = function() { var e = new Matrix,
        t = new Matrix;

      function n(e, t, n) {
        (n || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v), (n || t.transform.mProps._mdf) && t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS()) }

      function r(n, r, i) { var a, s, o, l, h, p, c, u, f, d, m, g = r.styles.length,
          y = r.lvl; for (p = 0; p < g; p += 1) { if (l = r.sh._mdf || i, r.styles[p].lvl < y) { for (u = t.reset(), d = y - r.styles[p].lvl, m = r.transformers.length - 1; !l && d > 0;) l = r.transformers[m].mProps._mdf || l, d--, m--; if (l)
              for (d = y - r.styles[p].lvl, m = r.transformers.length - 1; d > 0;) f = r.transformers[m].mProps.v.props, u.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d--, m-- } else u = e; if (s = (c = r.sh.paths)._length, l) { for (o = "", a = 0; a < s; a += 1)(h = c.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, u));
            r.caches[p] = o } else o = r.caches[p];
          r.styles[p].d += !0 === n.hd ? "" : o, r.styles[p]._mdf = l || r.styles[p]._mdf } }

      function i(e, t, n) { var r = t.style;
        (t.c._mdf || n) && r.pElem.setAttribute("fill", "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || n) && r.pElem.setAttribute("fill-opacity", t.o.v) }

      function a(e, t, n) { s(e, t, n), o(e, t, n) }

      function s(e, t, n) { var r, i, a, s, o, l = t.gf,
          h = t.g._hasOpacity,
          p = t.s.v,
          c = t.e.v; if (t.o._mdf || n) { var u = "gf" === e.ty ? "fill-opacity" : "stroke-opacity";
          t.style.pElem.setAttribute(u, t.o.v) } if (t.s._mdf || n) { var f = 1 === e.t ? "x1" : "cx",
            d = "x1" === f ? "y1" : "cy";
          l.setAttribute(f, p[0]), l.setAttribute(d, p[1]), h && !t.g._collapsable && (t.of.setAttribute(f, p[0]), t.of.setAttribute(d, p[1])) } if (t.g._cmdf || n) { r = t.cst; var m = t.g.c; for (a = r.length, i = 0; i < a; i += 1)(s = r[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")") } if (h && (t.g._omdf || n)) { var g = t.g.o; for (a = (r = t.g._collapsable ? t.cst : t.ost).length, i = 0; i < a; i += 1) s = r[i], t.g._collapsable || s.setAttribute("offset", g[2 * i] + "%"), s.setAttribute("stop-opacity", g[2 * i + 1]) } if (1 === e.t)(t.e._mdf || n) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !t.g._collapsable && (t.of.setAttribute("x2", c[0]), t.of.setAttribute("y2", c[1])));
        else if ((t.s._mdf || t.e._mdf || n) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), l.setAttribute("r", o), h && !t.g._collapsable && t.of.setAttribute("r", o)), t.e._mdf || t.h._mdf || t.a._mdf || n) { o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2))); var y = Math.atan2(c[1] - p[1], c[0] - p[0]),
            v = o * (t.h.v >= 1 ? .99 : t.h.v <= -1 ? -.99 : t.h.v),
            b = Math.cos(y + t.a.v) * v + p[0],
            x = Math.sin(y + t.a.v) * v + p[1];
          l.setAttribute("fx", b), l.setAttribute("fy", x), h && !t.g._collapsable && (t.of.setAttribute("fx", b), t.of.setAttribute("fy", x)) } }

      function o(e, t, n) { var r = t.style,
          i = t.d;
        i && (i._mdf || n) && i.dashStr && (r.pElem.setAttribute("stroke-dasharray", i.dashStr), r.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), t.c && (t.c._mdf || n) && r.pElem.setAttribute("stroke", "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || n) && r.pElem.setAttribute("stroke-opacity", t.o.v), (t.w._mdf || n) && (r.pElem.setAttribute("stroke-width", t.w.v), r.msElem && r.msElem.setAttribute("stroke-width", t.w.v)) } return { createRenderFunction: function(e) { e.ty; switch (e.ty) {
            case "fl":
              return i;
            case "gf":
              return s;
            case "gs":
              return a;
            case "st":
              return o;
            case "sh":
            case "el":
            case "rc":
            case "sr":
              return r;
            case "tr":
              return n } } } }();

    function ShapeTransformManager() { this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0 }

    function CVShapeData(e, t, n, r) { this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0]; var i = 4; "rc" == t.ty ? i = 5 : "el" == t.ty ? i = 6 : "sr" == t.ty && (i = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, i, e); var a, s, o = n.length; for (a = 0; a < o; a += 1) n[a].closed || (s = { transforms: r.addTransformSequence(n[a].transforms), trNodes: [] }, this.styledShapes.push(s), n[a].elements.push(s)) }

    function BaseElement() {}

    function NullElement(e, t, n) { this.initFrame(), this.initBaseData(e, t, n), this.initFrame(), this.initTransform(e, t, n), this.initHierarchy() }

    function SVGBaseElement() {}

    function IShapeElement() {}

    function ITextElement() {}

    function ICompElement() {}

    function IImageElement(e, t, n) { this.assetData = t.getAssetData(e.refId), this.initElement(e, t, n), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h } }

    function ISolidElement(e, t, n) { this.initElement(e, t, n) }

    function SVGCompElement(e, t, n) { this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, n), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 } }

    function SVGTextElement(e, t, n) { this.textSpans = [], this.renderType = "svg", this.initElement(e, t, n) }

    function SVGShapeElement(e, t, n) { this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, n), this.prevViewData = [] }

    function SVGTintFilter(e, t) { this.filterManager = t; var n = createNS("feColorMatrix"); if (n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), n.setAttribute("result", "f1"), e.appendChild(n), (n = createNS("feColorMatrix")).setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", "f2"), e.appendChild(n), this.matrixFilter = n, 100 !== t.effectElements[2].p.v || t.effectElements[2].p.k) { var r, i = createNS("feMerge");
        e.appendChild(i), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), i.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), i.appendChild(r) } }

    function SVGFillFilter(e, t) { this.filterManager = t; var n = createNS("feColorMatrix");
      n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), e.appendChild(n), this.matrixFilter = n }

    function SVGGaussianBlurEffect(e, t) { e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t; var n = createNS("feGaussianBlur");
      e.appendChild(n), this.feGaussianBlur = n }

    function SVGStrokeEffect(e, t) { this.initialized = !1, this.filterManager = t, this.elem = e, this.paths = [] }

    function SVGTritoneFilter(e, t) { this.filterManager = t; var n = createNS("feColorMatrix");
      n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), n.setAttribute("result", "f1"), e.appendChild(n); var r = createNS("feComponentTransfer");
      r.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(r), this.matrixFilter = r; var i = createNS("feFuncR");
      i.setAttribute("type", "table"), r.appendChild(i), this.feFuncR = i; var a = createNS("feFuncG");
      a.setAttribute("type", "table"), r.appendChild(a), this.feFuncG = a; var s = createNS("feFuncB");
      s.setAttribute("type", "table"), r.appendChild(s), this.feFuncB = s }

    function SVGProLevelsFilter(e, t) { this.filterManager = t; var n = this.filterManager.effectElements,
        r = createNS("feComponentTransfer");
      (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(r), r = createNS("feComponentTransfer")), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r)) }

    function SVGDropShadowEffect(e, t) { e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "400%"), e.setAttribute("height", "400%"), this.filterManager = t; var n = createNS("feGaussianBlur");
      n.setAttribute("in", "SourceAlpha"), n.setAttribute("result", "drop_shadow_1"), n.setAttribute("stdDeviation", "0"), this.feGaussianBlur = n, e.appendChild(n); var r = createNS("feOffset");
      r.setAttribute("dx", "25"), r.setAttribute("dy", "0"), r.setAttribute("in", "drop_shadow_1"), r.setAttribute("result", "drop_shadow_2"), this.feOffset = r, e.appendChild(r); var i = createNS("feFlood");
      i.setAttribute("flood-color", "#00ff00"), i.setAttribute("flood-opacity", "1"), i.setAttribute("result", "drop_shadow_3"), this.feFlood = i, e.appendChild(i); var a = createNS("feComposite");
      a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), e.appendChild(a); var s, o = createNS("feMerge");
      e.appendChild(o), s = createNS("feMergeNode"), o.appendChild(s), (s = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = s, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(s) } ShapeTransformManager.prototype = { addTransformSequence: function(e) { var t, n = e.length,
          r = "_"; for (t = 0; t < n; t += 1) r += e[t].transform.key + "_"; var i = this.sequences[r]; return i || (i = { transforms: [].concat(e), finalTransform: new Matrix, _mdf: !1 }, this.sequences[r] = i, this.sequenceList.push(i)), i }, processSequence: function(e, t) { for (var n, r = 0, i = e.transforms.length, a = t; r < i && !t;) { if (e.transforms[r].transform.mProps._mdf) { a = !0; break } r += 1 } if (a)
          for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) n = e.transforms[r].transform.mProps.v.props, e.finalTransform.transform(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]);
        e._mdf = a }, processSequences: function(e) { var t, n = this.sequenceList.length; for (t = 0; t < n; t += 1) this.processSequence(this.sequenceList[t], e) }, getNewKey: function() { return "_" + this.transform_key_count++ } }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = { checkMasks: function() { if (!this.data.hasMask) return !1; for (var e = 0, t = this.data.masksProperties.length; e < t;) { if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
          e += 1 } return !1 }, initExpressions: function() { this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager); var e = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(e), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface) }, setBlendMode: function() { var e = getBlendMode(this.data.bm);
        (this.baseElement || this.layerElement).style["mix-blend-mode"] = e }, initBaseData: function(e, t, n) { this.globalData = t, this.comp = n, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties) }, getType: function() { return this.type }, sourceRectAtTime: function() {} }, NullElement.prototype.prepareFrame = function(e) { this.prepareProperties(e, !0) }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() { return null }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = { initRendererElement: function() { this.layerElement = createNS("g") }, createContainerElements: function() { this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1; var e, t, n, r = null; if (this.data.td) { if (3 == this.data.td || 1 == this.data.td) { var i = createNS("mask");
            i.setAttribute("id", this.layerId), i.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), i.appendChild(this.layerElement), r = i, this.globalData.defs.appendChild(i), featureSupport.maskType || 1 != this.data.td || (i.setAttribute("mask-type", "luminance"), e = createElementID(), t = filtersFactory.createFilter(e), this.globalData.defs.appendChild(t), t.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(this.layerElement), r = n, i.appendChild(n), n.setAttribute("filter", "url(" + locationHref + "#" + e + ")")) } else if (2 == this.data.td) { var a = createNS("mask");
            a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha"); var s = createNS("g");
            a.appendChild(s), e = createElementID(), t = filtersFactory.createFilter(e); var o = createNS("feComponentTransfer");
            o.setAttribute("in", "SourceGraphic"), t.appendChild(o); var l = createNS("feFuncA");
            l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(t); var h = createNS("rect");
            h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), s.setAttribute("filter", "url(" + locationHref + "#" + e + ")"), s.appendChild(h), s.appendChild(this.layerElement), r = s, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), t.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), s.appendChild(h), n.appendChild(this.layerElement), r = n, s.appendChild(n)), this.globalData.defs.appendChild(a) } } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement; if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) { var p = createNS("clipPath"),
            c = createNS("path");
          c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"); var u = createElementID(); if (p.setAttribute("id", u), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) { var f = createNS("g");
            f.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")"), f.appendChild(this.layerElement), this.transformedElement = f, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")") } 0 !== this.data.bm && this.setBlendMode() }, renderElement: function() { this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v) }, destroyBaseElement: function() { this.layerElement = null, this.matteElement = null, this.maskManager.destroy() }, getBaseElement: function() { return this.data.hd ? null : this.baseElement }, createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this) }, setMatte: function(e) { this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + e + ")") } }, IShapeElement.prototype = { addShapeToModifiers: function(e) { var t, n = this.shapeModifiers.length; for (t = 0; t < n; t += 1) this.shapeModifiers[t].addShape(e) }, isShapeInAnimatedModifiers: function(e) { for (var t = this.shapeModifiers.length; 0 < t;)
          if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0; return !1 }, renderModifiers: function() { if (this.shapeModifiers.length) { var e, t = this.shapes.length; for (e = 0; e < t; e += 1) this.shapes[e].sh.reset(); for (e = (t = this.shapeModifiers.length) - 1; e >= 0; e -= 1) this.shapeModifiers[e].processShapes(this._isFirstFrame) } }, lcEnum: { 1: "butt", 2: "round", 3: "square" }, ljEnum: { 1: "miter", 2: "round", 3: "bevel" }, searchProcessedElement: function(e) { for (var t = this.processedElements, n = 0, r = t.length; n < r;) { if (t[n].elem === e) return t[n].pos;
          n += 1 } return 0 }, addProcessedElement: function(e, t) { for (var n = this.processedElements, r = n.length; r;)
          if (n[r -= 1].elem === e) return void(n[r].pos = t);
        n.push(new ProcessedElement(e, t)) }, prepareFrame: function(e) { this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange) } }, ITextElement.prototype.initElement = function(e, t, n) { this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, n), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties) }, ITextElement.prototype.prepareFrame = function(e) { this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1) }, ITextElement.prototype.createPathShape = function(e, t) { var n, r, i = t.length,
        a = ""; for (n = 0; n < i; n += 1) r = t[n].ks.k, a += buildShapeString(r, r.i.length, !0, e); return a }, ITextElement.prototype.updateDocumentData = function(e, t) { this.textProperty.updateDocumentData(e, t) }, ITextElement.prototype.canResizeFont = function(e) { this.textProperty.canResizeFont(e) }, ITextElement.prototype.setMinimumFontSize = function(e) { this.textProperty.setMinimumFontSize(e) }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, n, r, i) { switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
        case 1:
          t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]), 0, 0); break;
        case 2:
          t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]) / 2, 0, 0) } t.translate(r, i, 0) }, ITextElement.prototype.buildColor = function(e) { return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")" }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, n) { this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide() }, ICompElement.prototype.prepareFrame = function(e) { if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) { if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
        else { var t = this.tm.v;
          t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t } var n, r = this.elements.length; for (this.completeLayers || this.checkLayers(this.renderedFrame), n = r - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st), this.elements[n]._mdf && (this._mdf = !0)) } }, ICompElement.prototype.renderInnerContent = function() { var e, t = this.layers.length; for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() }, ICompElement.prototype.setElements = function(e) { this.elements = e }, ICompElement.prototype.getElements = function() { return this.elements }, ICompElement.prototype.destroyElements = function() { var e, t = this.layers.length; for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy() }, ICompElement.prototype.destroy = function() { this.destroyElements(), this.destroyBaseElement() }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() { var e = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem) }, IImageElement.prototype.sourceRectAtTime = function() { return this.sourceRect }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() { var e = createNS("rect");
      e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e) }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function() { this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text")) }, SVGTextElement.prototype.buildTextContents = function(e) { for (var t = 0, n = e.length, r = [], i = ""; t < n;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (r.push(i), i = "") : i += e[t], t += 1; return r.push(i), r }, SVGTextElement.prototype.buildNewText = function() { var e, t, n = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(n ? n.l.length : 0), n.fc ? this.layerElement.setAttribute("fill", this.buildColor(n.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), n.sc && (this.layerElement.setAttribute("stroke", this.buildColor(n.sc)), this.layerElement.setAttribute("stroke-width", n.sw)), this.layerElement.setAttribute("font-size", n.finalSize); var r = this.globalData.fontManager.getFontByName(n.f); if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
      else { this.layerElement.setAttribute("font-family", r.fFamily); var i = n.fWeight,
          a = n.fStyle;
        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i) } this.layerElement.setAttribute("arial-label", n.t); var s, o = n.l || [],
        l = !!this.globalData.fontManager.chars;
      t = o.length; var h, p = this.mHelper,
        c = "",
        u = this.data.singleShape,
        f = 0,
        d = 0,
        m = !0,
        g = n.tr / 1e3 * n.finalSize; if (!u || l || n.sz) { var y, v, b = this.textSpans.length; for (e = 0; e < t; e += 1) l && u && 0 !== e || (s = b > e ? this.textSpans[e] : createNS(l ? "path" : "text"), b <= e && (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e] = s, this.layerElement.appendChild(s)), s.style.display = "inherit"), p.reset(), p.scale(n.finalSize / 100, n.finalSize / 100), u && (o[e].n && (f = -g, d += n.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(n, p, o[e].line, f, d), f += o[e].l || 0, f += g), l ? (h = (y = (v = this.globalData.fontManager.getCharData(n.finalText[e], r.fStyle, this.globalData.fontManager.getFontByName(n.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], u ? c += this.createPathShape(p, h) : s.setAttribute("d", this.createPathShape(p, h))) : (u && s.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
        u && s && s.setAttribute("d", c) } else { var x = this.textContainer,
          E = "start"; switch (n.j) {
          case 1:
            E = "end"; break;
          case 2:
            E = "middle" } x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", g); var k = this.buildTextContents(n.finalText); for (t = k.length, d = n.ps ? n.ps[1] + n.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e] || createNS("tspan")).textContent = k[e], s.setAttribute("x", 0), s.setAttribute("y", d), s.style.display = "inherit", x.appendChild(s), this.textSpans[e] = s, d += n.finalLineHeight;
        this.layerElement.appendChild(x) } for (; e < this.textSpans.length;) this.textSpans[e].style.display = "none", e += 1;
      this._sizeChanged = !0 }, SVGTextElement.prototype.sourceRectAtTime = function(e) { if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) { this._sizeChanged = !1; var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height } } return this.bbox }, SVGTextElement.prototype.renderInnerContent = function() { if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) { var e, t;
        this._sizeChanged = !0; var n, r, i = this.textAnimator.renderedLetters,
          a = this.textProperty.currentData.l; for (t = a.length, e = 0; e < t; e += 1) a[e].n || (n = i[e], r = this.textSpans[e], n._mdf.m && r.setAttribute("transform", n.m), n._mdf.o && r.setAttribute("opacity", n.o), n._mdf.sw && r.setAttribute("stroke-width", n.sw), n._mdf.sc && r.setAttribute("stroke", n.sc), n._mdf.fc && r.setAttribute("fill", n.fc)) } }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes() }, SVGShapeElement.prototype.filterUniqueShapes = function() { var e, t, n, r, i = this.shapes.length,
        a = this.stylesList.length,
        s = [],
        o = !1; for (n = 0; n < a; n += 1) { for (r = this.stylesList[n], o = !1, s.length = 0, e = 0; e < i; e += 1) - 1 !== (t = this.shapes[e]).styles.indexOf(r) && (s.push(t), o = t._isAnimated || o);
        s.length > 1 && o && this.setShapesAsAnimated(s) } }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) { var t, n = e.length; for (t = 0; t < n; t += 1) e[t].setAsAnimated() }, SVGShapeElement.prototype.createStyleElement = function(e, t) { var n, r = new SVGStyleData(e, t),
        i = r.pElem; if ("st" === e.ty) n = new SVGStrokeStyleData(this, e, r);
      else if ("fl" === e.ty) n = new SVGFillStyleData(this, e, r);
      else if ("gf" === e.ty || "gs" === e.ty) { n = new("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, r), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), i.setAttribute("mask", "url(" + locationHref + "#" + n.maskId + ")")) } return "st" !== e.ty && "gs" !== e.ty || (i.setAttribute("stroke-linecap", this.lcEnum[e.lc] || "round"), i.setAttribute("stroke-linejoin", this.ljEnum[e.lj] || "round"), i.setAttribute("fill-opacity", "0"), 1 === e.lj && i.setAttribute("stroke-miterlimit", e.ml)), 2 === e.r && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(r), this.addToAnimatedContents(e, n), n }, SVGShapeElement.prototype.createGroupElement = function(e) { var t = new ShapeGroupData; return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t }, SVGShapeElement.prototype.createTransformElement = function(e, t) { var n = TransformPropertyFactory.getTransformProperty(this, e, this),
        r = new SVGTransformData(n, n.o, t); return this.addToAnimatedContents(e, r), r }, SVGShapeElement.prototype.createShapeElement = function(e, t, n) { var r = 4; "rc" === e.ty ? r = 5 : "el" === e.ty ? r = 6 : "sr" === e.ty && (r = 7); var i = new SVGShapeData(t, n, ShapePropertyFactory.getShapeProp(this, e, r, this)); return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) { for (var n = 0, r = this.animatedContents.length; n < r;) { if (this.animatedContents[n].element === t) return;
        n += 1 } this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(e), element: t, data: e }) }, SVGShapeElement.prototype.setElementStyles = function(e) { var t, n = e.styles,
        r = this.stylesList.length; for (t = 0; t < r; t += 1) this.stylesList[t].closed || n.push(this.stylesList[t]) }, SVGShapeElement.prototype.reloadShapes = function() { this._isFirstFrame = !0; var e, t = this.itemsData.length; for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
      this.renderModifiers() }, SVGShapeElement.prototype.searchShapes = function(e, t, n, r, i, a, s) { var o, l, h, p, c, u, f = [].concat(a),
        d = e.length - 1,
        m = [],
        g = []; for (o = d; o >= 0; o -= 1) { if ((u = this.searchProcessedElement(e[o])) ? t[o] = n[u - 1] : e[o]._render = s, "fl" == e[o].ty || "st" == e[o].ty || "gf" == e[o].ty || "gs" == e[o].ty) u ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && r.appendChild(t[o].style.pElem), m.push(t[o].style);
        else if ("gr" == e[o].ty) { if (u)
            for (h = t[o].it.length, l = 0; l < h; l += 1) t[o].prevViewData[l] = t[o].it[l];
          else t[o] = this.createGroupElement(e[o]);
          this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, f, s), e[o]._render && r.appendChild(t[o].gr) } else "tr" == e[o].ty ? (u || (t[o] = this.createTransformElement(e[o], r)), p = t[o].transform, f.push(p)) : "sh" == e[o].ty || "rc" == e[o].ty || "el" == e[o].ty || "sr" == e[o].ty ? (u || (t[o] = this.createShapeElement(e[o], f, i)), this.setElementStyles(t[o])) : "tm" == e[o].ty || "rd" == e[o].ty || "ms" == e[o].ty ? (u ? (c = t[o]).closed = !1 : ((c = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = c, this.shapeModifiers.push(c)), g.push(c)) : "rp" == e[o].ty && (u ? (c = t[o]).closed = !0 : (c = ShapeModifiers.getModifier(e[o].ty), t[o] = c, c.init(this, e, o, t), this.shapeModifiers.push(c), s = !1), g.push(c));
        this.addProcessedElement(e[o], o + 1) } for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0; for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0 }, SVGShapeElement.prototype.renderInnerContent = function() { this.renderModifiers(); var e, t = this.stylesList.length; for (e = 0; e < t; e += 1) this.stylesList[e].reset(); for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0")) }, SVGShapeElement.prototype.renderShape = function() { var e, t, n = this.animatedContents.length; for (e = 0; e < n; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame) }, SVGShapeElement.prototype.destroy = function() { this.destroyBaseElement(), this.shapesData = null, this.itemsData = null }, SVGTintFilter.prototype.renderFrame = function(e) { if (e || this.filterManager._mdf) { var t = this.filterManager.effectElements[0].p.v,
          n = this.filterManager.effectElements[1].p.v,
          r = this.filterManager.effectElements[2].p.v / 100;
        this.matrixFilter.setAttribute("values", n[0] - t[0] + " 0 0 0 " + t[0] + " " + (n[1] - t[1]) + " 0 0 0 " + t[1] + " " + (n[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 " + r + " 0") } }, SVGFillFilter.prototype.renderFrame = function(e) { if (e || this.filterManager._mdf) { var t = this.filterManager.effectElements[2].p.v,
          n = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + n + " 0") } }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) { if (e || this.filterManager._mdf) { var t = .3 * this.filterManager.effectElements[0].p.v,
          n = this.filterManager.effectElements[1].p.v,
          r = 3 == n ? 0 : t,
          i = 2 == n ? 0 : t;
        this.feGaussianBlur.setAttribute("stdDeviation", r + " " + i); var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", a) } }, SVGStrokeEffect.prototype.initialize = function() { var e, t, n, r, i = this.elem.layerElement.children || this.elem.layerElement.childNodes; for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, n = 0) : r = (n = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); n < r; n += 1) e = createNS("path"), t.appendChild(e), this.paths.push({ p: e, m: n }); if (3 === this.filterManager.effectElements[10].p.v) { var a = createNS("mask"),
          s = createElementID();
        a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a); var o = createNS("g"); for (o.setAttribute("mask", "url(" + locationHref + "#" + s + ")"); i[0];) o.appendChild(i[0]);
        this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff") } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) { if (2 === this.filterManager.effectElements[10].p.v)
          for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
        this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff") } this.initialized = !0, this.pathMasker = t }, SVGStrokeEffect.prototype.renderFrame = function(e) { this.initialized || this.initialize(); var t, n, r, i = this.paths.length; for (t = 0; t < i; t += 1)
        if (-1 !== this.paths[t].m && (n = this.elem.maskManager.viewData[this.paths[t].m], r = this.paths[t].p, (e || this.filterManager._mdf || n.prop._mdf) && r.setAttribute("d", n.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || n.prop._mdf)) { var a; if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) { var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              l = r.getTotalLength();
            a = "0 0 0 " + l * s + " "; var h, p = l * (o - s),
              c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
              u = Math.floor(p / c); for (h = 0; h < u; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
            a += "0 " + 10 * l + " 0 0" } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
          r.setAttribute("stroke-dasharray", a) } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf)) { var f = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * f[0]) + "," + bm_floor(255 * f[1]) + "," + bm_floor(255 * f[2]) + ")") } }, SVGTritoneFilter.prototype.renderFrame = function(e) { if (e || this.filterManager._mdf) { var t = this.filterManager.effectElements[0].p.v,
          n = this.filterManager.effectElements[1].p.v,
          r = this.filterManager.effectElements[2].p.v,
          i = r[0] + " " + n[0] + " " + t[0],
          a = r[1] + " " + n[1] + " " + t[1],
          s = r[2] + " " + n[2] + " " + t[2];
        this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s) } }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) { var n = createNS(e); return n.setAttribute("type", "table"), t.appendChild(n), n }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, n, r, i) { for (var a, s, o = 0, l = Math.min(e, t), h = Math.max(e, t), p = Array.call(null, { length: 256 }), c = 0, u = i - r, f = t - e; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? i : r : a >= h ? f < 0 ? r : i : r + u * Math.pow((a - e) / f, 1 / n), p[c++] = s, o += 256 / 255; return p.join(" ") }, SVGProLevelsFilter.prototype.renderFrame = function(e) { if (e || this.filterManager._mdf) { var t, n = this.filterManager.effectElements;
        this.feFuncRComposed && (e || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) && (t = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) && (t = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) && (t = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) && (t = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) && (t = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v), this.feFuncA.setAttribute("tableValues", t)) } }, SVGDropShadowEffect.prototype.renderFrame = function(e) { if (e || this.filterManager._mdf) { if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) { var t = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2]))) } if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) { var n = this.filterManager.effectElements[3].p.v,
            r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
            i = n * Math.cos(r),
            a = n * Math.sin(r);
          this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a) } } }; var _svgMatteSymbols = [];

    function SVGMatte3Effect(e, t, n) { this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = n, n.matteElement = createNS("g"), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), n.baseElement = n.matteElement }

    function SVGEffects(e) { var t, n, r = e.data.ef ? e.data.ef.length : 0,
        i = createElementID(),
        a = filtersFactory.createFilter(i),
        s = 0; for (this.filters = [], t = 0; t < r; t += 1) n = null, 20 === e.data.ef[t].ty ? (s += 1, n = new SVGTintFilter(a, e.effectsManager.effectElements[t])) : 21 === e.data.ef[t].ty ? (s += 1, n = new SVGFillFilter(a, e.effectsManager.effectElements[t])) : 22 === e.data.ef[t].ty ? n = new SVGStrokeEffect(e, e.effectsManager.effectElements[t]) : 23 === e.data.ef[t].ty ? (s += 1, n = new SVGTritoneFilter(a, e.effectsManager.effectElements[t])) : 24 === e.data.ef[t].ty ? (s += 1, n = new SVGProLevelsFilter(a, e.effectsManager.effectElements[t])) : 25 === e.data.ef[t].ty ? (s += 1, n = new SVGDropShadowEffect(a, e.effectsManager.effectElements[t])) : 28 === e.data.ef[t].ty ? n = new SVGMatte3Effect(a, e.effectsManager.effectElements[t], e) : 29 === e.data.ef[t].ty && (s += 1, n = new SVGGaussianBlurEffect(a, e.effectsManager.effectElements[t])), n && this.filters.push(n);
      s && (e.globalData.defs.appendChild(a), e.layerElement.setAttribute("filter", "url(" + locationHref + "#" + i + ")")), this.filters.length && e.addRenderableComponent(this) }

    function CVContextData() { this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1; var e; for (this.savedOp = createTypedArray("float32", 15), e = 0; e < 15; e += 1) this.saved[e] = createTypedArray("float32", 16);
      this._length = 15 }

    function CVBaseElement() {}

    function CVImageElement(e, t, n) { this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getImage(this.assetData), this.initElement(e, t, n) }

    function CVCompElement(e, t, n) { this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, n), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 } }

    function CVMaskElement(e, t) { this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length); var n, r = this.masksProperties.length,
        i = !1; for (n = 0; n < r; n++) "n" !== this.masksProperties[n].mode && (i = !0), this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3);
      this.hasMasks = i, i && this.element.addRenderableComponent(this) }

    function CVShapeElement(e, t, n) { this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, n) }

    function CVSolidElement(e, t, n) { this.initElement(e, t, n) }

    function CVTextElement(e, t, n) { this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(e, t, n) }

    function CVEffects() {}

    function HBaseElement(e, t, n) {}

    function HSolidElement(e, t, n) { this.initElement(e, t, n) }

    function HCompElement(e, t, n) { this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, n), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 } }

    function HShapeElement(e, t, n) { this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, n), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 } }

    function HTextElement(e, t, n) { this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, n) }

    function HImageElement(e, t, n) { this.assetData = t.getAssetData(e.refId), this.initElement(e, t, n) }

    function HCameraElement(e, t, n) { this.initFrame(), this.initBaseData(e, t, n), this.initHierarchy(); var r = PropertyFactory.getProp; if (this.pe = r(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = r(this, e.ks.p.x, 1, 0, this), this.py = r(this, e.ks.p.y, 1, 0, this), this.pz = r(this, e.ks.p.z, 1, 0, this)) : this.p = r(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = r(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) { var i, a = e.ks.or.k.length; for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null } this.or = r(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, e.ks.rx, 0, degToRads, this), this.ry = r(this, e.ks.ry, 0, degToRads, this), this.rz = r(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = { mProp: this } }

    function HEffects() {} SVGMatte3Effect.prototype.findSymbol = function(e) { for (var t = 0, n = _svgMatteSymbols.length; t < n;) { if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
        t += 1 } return null }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) { var n = e.layerElement.parentNode; if (n) { for (var r, i = n.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
        a <= s - 2 && (r = i[a + 1]); var o = createNS("use");
        o.setAttribute("href", "#" + t), r ? n.insertBefore(o, r) : n.appendChild(o) } }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) { if (!this.findSymbol(t)) { var n = createElementID(),
          r = createNS("mask");
        r.setAttribute("id", t.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t); var i = e.globalData.defs;
        i.appendChild(r); var a = createNS("symbol");
        a.setAttribute("id", n), this.replaceInParent(t, n), a.appendChild(t.layerElement), i.appendChild(a); var s = createNS("use");
        s.setAttribute("href", "#" + n), r.appendChild(s), t.data.hd = !1, t.show() } e.setMatte(t.layerId) }, SVGMatte3Effect.prototype.initialize = function() { for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, n = 0, r = t.length; n < r;) t[n] && t[n].data.ind === e && this.setElementAsMask(this.elem, t[n]), n += 1;
      this.initialized = !0 }, SVGMatte3Effect.prototype.renderFrame = function() { this.initialized || this.initialize() }, SVGEffects.prototype.renderFrame = function(e) { var t, n = this.filters.length; for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e) }, CVContextData.prototype.duplicate = function() { var e = 2 * this._length,
        t = this.savedOp;
      this.savedOp = createTypedArray("float32", e), this.savedOp.set(t); var n = 0; for (n = this._length; n < e; n += 1) this.saved[n] = createTypedArray("float32", 16);
      this._length = e }, CVContextData.prototype.reset = function() { this.cArrPos = 0, this.cTr.reset(), this.cO = 1 }, CVBaseElement.prototype = { createElements: function() {}, initRendererElement: function() {}, createContainerElements: function() { this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this) }, createContent: function() {}, setBlendMode: function() { var e = this.globalData; if (e.blendMode !== this.data.bm) { e.blendMode = this.data.bm; var t = getBlendMode(this.data.bm);
          e.canvasContext.globalCompositeOperation = t } }, createRenderableComponents: function() { this.maskManager = new CVMaskElement(this.data, this) }, hideElement: function() { this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0) }, showElement: function() { this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0) }, renderFrame: function() { this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), this.setBlendMode(), this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function() { this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy() }, mHelper: new Matrix }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() { if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) { var e = createTag("canvas");
        e.width = this.assetData.w, e.height = this.assetData.h; var t, n, r = e.getContext("2d"),
          i = this.img.width,
          a = this.img.height,
          s = i / a,
          o = this.assetData.w / this.assetData.h,
          l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? t = (n = a) * o : n = (t = i) / o, r.drawImage(this.img, (i - t) / 2, (a - n) / 2, t, n, 0, 0, this.assetData.w, this.assetData.h), this.img = e } }, CVImageElement.prototype.renderInnerContent = function(e) { this.canvasContext.drawImage(this.img, 0, 0) }, CVImageElement.prototype.destroy = function() { this.img = null }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() { var e; for (e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() }, CVCompElement.prototype.destroy = function() { var e; for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
      this.layers = null, this.elements = null }, CVMaskElement.prototype.renderFrame = function() { if (this.hasMasks) { var e, t, n, r, i = this.element.finalTransform.mat,
          a = this.element.canvasContext,
          s = this.masksProperties.length; for (a.beginPath(), e = 0; e < s; e++)
          if ("n" !== this.masksProperties[e].mode) { this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[e].v, t = i.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(t[0], t[1]); var o, l = r._length; for (o = 1; o < l; o++) n = i.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            n = i.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]) } this.element.globalData.renderer.save(!0), a.clip() } }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() { this.element = null }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []) }, CVShapeElement.prototype.createStyleElement = function(e, t) { var n = { data: e, type: e.ty, preTransforms: this.transformsManager.addTransformSequence(t), transforms: [], elements: [], closed: !0 === e.hd },
        r = {}; if ("fl" == e.ty || "st" == e.ty ? (r.c = PropertyFactory.getProp(this, e.c, 1, 255, this), r.c.k || (n.co = "rgb(" + bm_floor(r.c.v[0]) + "," + bm_floor(r.c.v[1]) + "," + bm_floor(r.c.v[2]) + ")")) : "gf" !== e.ty && "gs" !== e.ty || (r.s = PropertyFactory.getProp(this, e.s, 1, null, this), r.e = PropertyFactory.getProp(this, e.e, 1, null, this), r.h = PropertyFactory.getProp(this, e.h || { k: 0 }, 0, .01, this), r.a = PropertyFactory.getProp(this, e.a || { k: 0 }, 0, degToRads, this), r.g = new GradientProperty(this, e.g, this)), r.o = PropertyFactory.getProp(this, e.o, 0, .01, this), "st" == e.ty || "gs" == e.ty) { if (n.lc = this.lcEnum[e.lc] || "round", n.lj = this.ljEnum[e.lj] || "round", 1 == e.lj && (n.ml = e.ml), r.w = PropertyFactory.getProp(this, e.w, 0, null, this), r.w.k || (n.wi = r.w.v), e.d) { var i = new DashProperty(this, e.d, "canvas", this);
          r.d = i, r.d.k || (n.da = r.d.dashArray, n.do = r.d.dashoffset[0]) } } else n.r = 2 === e.r ? "evenodd" : "nonzero"; return this.stylesList.push(n), r.style = n, r }, CVShapeElement.prototype.createGroupElement = function(e) { return { it: [], prevViewData: [] } }, CVShapeElement.prototype.createTransformElement = function(e) { return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, e.o, 0, .01, this), mProps: TransformPropertyFactory.getTransformProperty(this, e, this) } } }, CVShapeElement.prototype.createShapeElement = function(e) { var t = new CVShapeData(this, e, this.stylesList, this.transformsManager); return this.shapes.push(t), this.addShapeToModifiers(t), t }, CVShapeElement.prototype.reloadShapes = function() { this._isFirstFrame = !0; var e, t = this.itemsData.length; for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame) }, CVShapeElement.prototype.addTransformToStyleList = function(e) { var t, n = this.stylesList.length; for (t = 0; t < n; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e) }, CVShapeElement.prototype.removeTransformFromStyleList = function() { var e, t = this.stylesList.length; for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop() }, CVShapeElement.prototype.closeStyles = function(e) { var t, n = e.length; for (t = 0; t < n; t += 1) e[t].closed = !0 }, CVShapeElement.prototype.searchShapes = function(e, t, n, r, i) { var a, s, o, l, h, p, c = e.length - 1,
        u = [],
        f = [],
        d = [].concat(i); for (a = c; a >= 0; a -= 1) { if ((l = this.searchProcessedElement(e[a])) ? t[a] = n[l - 1] : e[a]._shouldRender = r, "fl" == e[a].ty || "st" == e[a].ty || "gf" == e[a].ty || "gs" == e[a].ty) l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], d), u.push(t[a].style);
        else if ("gr" == e[a].ty) { if (l)
            for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
          else t[a] = this.createGroupElement(e[a]);
          this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, r, d) } else "tr" == e[a].ty ? (l || (p = this.createTransformElement(e[a]), t[a] = p), d.push(t[a]), this.addTransformToStyleList(t[a])) : "sh" == e[a].ty || "rc" == e[a].ty || "el" == e[a].ty || "sr" == e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : "tm" == e[a].ty || "rd" == e[a].ty ? (l ? (h = t[a]).closed = !1 : ((h = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" == e[a].ty && (l ? (h = t[a]).closed = !0 : (h = ShapeModifiers.getModifier(e[a].ty), t[a] = h, h.init(this, e, a, t), this.shapeModifiers.push(h), r = !1), f.push(h));
        this.addProcessedElement(e[a], a + 1) } for (this.removeTransformFromStyleList(), this.closeStyles(u), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0 }, CVShapeElement.prototype.renderInnerContent = function() { this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0) }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
      (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0) }, CVShapeElement.prototype.drawLayer = function() { var e, t, n, r, i, a, s, o, l, h = this.stylesList.length,
        p = this.globalData.renderer,
        c = this.globalData.canvasContext; for (e = 0; e < h; e += 1)
        if (("st" !== (o = (l = this.stylesList[e]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) { for (p.save(), a = l.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? l.co : l.grd, c.lineWidth = l.wi, c.lineCap = l.lc, c.lineJoin = l.lj, c.miterLimit = l.ml || 0) : c.fillStyle = "fl" === o ? l.co : l.grd, p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), n = a.length, t = 0; t < n; t += 1) { for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, r = 0; r < i; r += 1) "m" == s[r].t ? c.moveTo(s[r].p[0], s[r].p[1]) : "c" == s[r].t ? c.bezierCurveTo(s[r].pts[0], s[r].pts[1], s[r].pts[2], s[r].pts[3], s[r].pts[4], s[r].pts[5]) : c.closePath(); "st" !== o && "gs" !== o || (c.stroke(), l.da && c.setLineDash(this.dashResetter)) } "st" !== o && "gs" !== o && c.fill(l.r), p.restore() } }, CVShapeElement.prototype.renderShape = function(e, t, n, r) { var i, a; for (a = e, i = t.length - 1; i >= 0; i -= 1) "tr" == t[i].ty ? (a = n[i].transform, this.renderShapeTransform(e, a)) : "sh" == t[i].ty || "el" == t[i].ty || "rc" == t[i].ty || "sr" == t[i].ty ? this.renderPath(t[i], n[i]) : "fl" == t[i].ty ? this.renderFill(t[i], n[i], a) : "st" == t[i].ty ? this.renderStroke(t[i], n[i], a) : "gf" == t[i].ty || "gs" == t[i].ty ? this.renderGradientFill(t[i], n[i], a) : "gr" == t[i].ty ? this.renderShape(a, t[i].it, n[i].it) : t[i].ty;
      r && this.drawLayer() }, CVShapeElement.prototype.renderStyledShape = function(e, t) { if (this._isFirstFrame || t._mdf || e.transforms._mdf) { var n, r, i, a = e.trNodes,
          s = t.paths,
          o = s._length;
        a.length = 0; var l = e.transforms.finalTransform; for (i = 0; i < o; i += 1) { var h = s.shapes[i]; if (h && h.v) { for (r = h._length, n = 1; n < r; n += 1) 1 === n && a.push({ t: "m", p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), a.push({ t: "c", pts: l.applyToTriplePoints(h.o[n - 1], h.i[n], h.v[n]) });
            1 === r && a.push({ t: "m", p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), h.c && r && (a.push({ t: "c", pts: l.applyToTriplePoints(h.o[n - 1], h.i[0], h.v[0]) }), a.push({ t: "z" })) } } e.trNodes = a } }, CVShapeElement.prototype.renderPath = function(e, t) { if (!0 !== e.hd && e._shouldRender) { var n, r = t.styledShapes.length; for (n = 0; n < r; n += 1) this.renderStyledShape(t.styledShapes[n], t.sh) } }, CVShapeElement.prototype.renderFill = function(e, t, n) { var r = t.style;
      (t.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity) }, CVShapeElement.prototype.renderGradientFill = function(e, t, n) { var r = t.style; if (!r.grd || t.g._mdf || t.s._mdf || t.e._mdf || 1 !== e.t && (t.h._mdf || t.a._mdf)) { var i = this.globalData.canvasContext,
          a = t.s.v,
          s = t.e.v; if (1 === e.t) u = i.createLinearGradient(a[0], a[1], s[0], s[1]);
        else var o = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2)),
          l = Math.atan2(s[1] - a[1], s[0] - a[0]),
          h = o * (t.h.v >= 1 ? .99 : t.h.v <= -1 ? -.99 : t.h.v),
          p = Math.cos(l + t.a.v) * h + a[0],
          c = Math.sin(l + t.a.v) * h + a[1],
          u = i.createRadialGradient(p, c, 0, a[0], a[1], o); var f, d = e.g.p,
          m = t.g.c,
          g = 1; for (f = 0; f < d; f += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * f + 1]), u.addColorStop(m[4 * f] / 100, "rgba(" + m[4 * f + 1] + "," + m[4 * f + 2] + "," + m[4 * f + 3] + "," + g + ")");
        r.grd = u } r.coOp = t.o.v * n.opacity }, CVShapeElement.prototype.renderStroke = function(e, t, n) { var r = t.style,
        i = t.d;
      i && (i._mdf || this._isFirstFrame) && (r.da = i.dashArray, r.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(t.c.v[0]) + "," + bm_floor(t.c.v[1]) + "," + bm_floor(t.c.v[2]) + ")"), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity), (t.w._mdf || this._isFirstFrame) && (r.wi = t.w.v) }, CVShapeElement.prototype.destroy = function() { this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0 }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() { var e = this.canvasContext;
      e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh) }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() { var e = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(e.l ? e.l.length : 0); var t = !1;
      e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t; var n = !1;
      e.sc && (n = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw); var r, i, a = this.globalData.fontManager.getFontByName(e.f),
        s = e.l,
        o = this.mHelper;
      this.stroke = n, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length; var l, h, p, c, u, f, d, m, g, y, v = this.data.singleShape,
        b = e.tr / 1e3 * e.finalSize,
        x = 0,
        E = 0,
        k = !0,
        _ = 0; for (r = 0; r < i; r += 1) { for (h = (l = this.globalData.fontManager.getCharData(e.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && l.data || {}, o.reset(), v && s[r].n && (x = -b, E += e.yOffset, E += k ? 1 : 0, k = !1), d = (u = h.shapes ? h.shapes[0].it : []).length, o.scale(e.finalSize / 100, e.finalSize / 100), v && this.applyTextPropertiesToMatrix(e, o, s[r].line, x, E), g = createSizedArray(d), f = 0; f < d; f += 1) { for (c = u[f].ks.k.i.length, m = u[f].ks.k, y = [], p = 1; p < c; p += 1) 1 == p && y.push(o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), y.push(o.applyToX(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToY(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToX(m.i[p][0], m.i[p][1], 0), o.applyToY(m.i[p][0], m.i[p][1], 0), o.applyToX(m.v[p][0], m.v[p][1], 0), o.applyToY(m.v[p][0], m.v[p][1], 0));
          y.push(o.applyToX(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToY(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToX(m.i[0][0], m.i[0][1], 0), o.applyToY(m.i[0][0], m.i[0][1], 0), o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), g[f] = y } v && (x += s[r].l, x += b), this.textSpans[_] ? this.textSpans[_].elem = g : this.textSpans[_] = { elem: g }, _ += 1 } }, CVTextElement.prototype.renderInnerContent = function() { var e, t, n, r, i, a, s = this.canvasContext;
      this.finalTransform.mat.props;
      s.font = this.values.fValue, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag); var o, l = this.textAnimator.renderedLetters,
        h = this.textProperty.currentData.l;
      t = h.length; var p, c, u = null,
        f = null,
        d = null; for (e = 0; e < t; e += 1)
        if (!h[e].n) { if ((o = l[e]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) { for (o && o.fc ? u !== o.fc && (u = o.fc, s.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, s.fillStyle = this.values.fill), r = (p = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1)
              for (a = (c = p[n]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill() } if (this.stroke) { for (o && o.sw ? d !== o.sw && (d = o.sw, s.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, s.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, s.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, s.strokeStyle = this.values.stroke), r = (p = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1)
              for (a = (c = p[n]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke() } o && this.globalData.renderer.restore() } }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = { checkBlendMode: function() {}, initRendererElement: function() { this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement) }, createContainerElements: function() { this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode() }, renderElement: function() { this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function() { this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null) }, createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData) }, addEffects: function() {}, setMatte: function() {} }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() { var e;
      this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e) }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() { this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement }, HCompElement.prototype.addTo3dContainer = function(e, t) { for (var n, r = 0; r < t;) this.elements[r] && this.elements[r].getBaseElement && (n = this.elements[r].getBaseElement()), r += 1;
      n ? this.layerElement.insertBefore(e, n) : this.layerElement.appendChild(e) }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() { var e; if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
      else { e = createNS("svg"); var t = this.comp.data ? this.comp.data : this.globalData.compSize;
        e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e) } this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e }, HShapeElement.prototype.getTransformedPoint = function(e, t) { var n, r = e.length; for (n = 0; n < r; n += 1) t = e[n].mProps.v.applyToPointArray(t[0], t[1], 0); return t }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) { var n, r, i, a, s, o = e.sh.v,
        l = e.transformers,
        h = o._length; if (!(h <= 1)) { for (n = 0; n < h - 1; n += 1) r = this.getTransformedPoint(l, o.v[n]), i = this.getTransformedPoint(l, o.o[n]), a = this.getTransformedPoint(l, o.i[n + 1]), s = this.getTransformedPoint(l, o.v[n + 1]), this.checkBounds(r, i, a, s, t);
        o.c && (r = this.getTransformedPoint(l, o.v[n]), i = this.getTransformedPoint(l, o.o[n]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(r, i, a, s, t)) } }, HShapeElement.prototype.checkBounds = function(e, t, n, r, i) { this.getBoundsOfCurve(e, t, n, r); var a = this.shapeBoundingBox;
      i.x = bm_min(a.left, i.x), i.xMax = bm_max(a.right, i.xMax), i.y = bm_min(a.top, i.y), i.yMax = bm_max(a.bottom, i.yMax) }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, n, r) { for (var i, a, s, o, l, h, p, c = [
          [e[0], r[0]],
          [e[1], r[1]]
        ], u = 0; u < 2; ++u)
        if (a = 6 * e[u] - 12 * t[u] + 6 * n[u], i = -3 * e[u] + 9 * t[u] - 9 * n[u] + 3 * r[u], s = 3 * t[u] - 3 * e[u], a |= 0, s |= 0, 0 !== (i |= 0))(l = a * a - 4 * s * i) < 0 || (0 < (h = (-a + bm_sqrt(l)) / (2 * i)) && h < 1 && c[u].push(this.calculateF(h, e, t, n, r, u)), 0 < (p = (-a - bm_sqrt(l)) / (2 * i)) && p < 1 && c[u].push(this.calculateF(p, e, t, n, r, u)));
        else { if (0 === a) continue;
          0 < (o = -s / a) && o < 1 && c[u].push(this.calculateF(o, e, t, n, r, u)) } this.shapeBoundingBox.left = bm_min.apply(null, c[0]), this.shapeBoundingBox.top = bm_min.apply(null, c[1]), this.shapeBoundingBox.right = bm_max.apply(null, c[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, c[1]) }, HShapeElement.prototype.calculateF = function(e, t, n, r, i, a) { return bm_pow(1 - e, 3) * t[a] + 3 * bm_pow(1 - e, 2) * e * n[a] + 3 * (1 - e) * bm_pow(e, 2) * r[a] + bm_pow(e, 3) * i[a] }, HShapeElement.prototype.calculateBoundingBox = function(e, t) { var n, r = e.length; for (n = 0; n < r; n += 1) e[n] && e[n].sh ? this.calculateShapeBoundingBox(e[n], t) : e[n] && e[n].it && this.calculateBoundingBox(e[n].it, t) }, HShapeElement.prototype.currentBoxContains = function(e) { return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height }, HShapeElement.prototype.renderInnerContent = function() { if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) { var e = this.tempBoundingBox,
          t = 999999; if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return; var n = !1;
        this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), n = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), n = !0), (n || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) && (this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)") } }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() { if (this.isMasked = this.checkMasks(), this.isMasked) { this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH); var e = createNS("g");
        this.maskedElement.appendChild(e), this.innerElem = e } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting() }, HTextElement.prototype.buildNewText = function() { var e = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(e.l ? e.l.length : 0); var t = this.innerElem.style;
      t.color = t.fill = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)", e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px"); var n, r, i = this.globalData.fontManager.getFontByName(e.f); if (!this.globalData.fontManager.chars)
        if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
        else { t.fontFamily = i.fFamily; var a = e.fWeight,
            s = e.fStyle;
          t.fontStyle = s, t.fontWeight = a } var o, l, h, p = e.l;
      r = p.length; var c, u = this.mHelper,
        f = "",
        d = 0; for (n = 0; n < r; n += 1) { if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? h = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(o), styleDiv(l)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(o = createTag("span")), l.appendChild(o)), this.globalData.fontManager.chars) { var m, g = this.globalData.fontManager.getCharData(e.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily); if (m = g ? g.data : null, u.reset(), m && m.shapes && (c = m.shapes[0].it, u.scale(e.finalSize / 100, e.finalSize / 100), f = this.createPathShape(u, c), o.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(o);
          else { if (this.innerElem.appendChild(l), m && m.shapes) { document.body.appendChild(h); var y = h.getBBox();
              h.setAttribute("width", y.width + 2), h.setAttribute("height", y.height + 2), h.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2)), h.style.transform = h.style.webkitTransform = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)", p[n].yOffset = y.y - 1 } else h.setAttribute("width", 1), h.setAttribute("height", 1);
            l.appendChild(h) } } else o.textContent = p[n].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(l), o.style.transform = o.style.webkitTransform = "translate3d(0," + -e.finalSize / 1.2 + "px,0)");
        this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1 } for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1 }, HTextElement.prototype.renderInnerContent = function() { if (this.data.singleShape) { if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)") } if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) { var e, t, n, r, i, a = 0,
          s = this.textAnimator.renderedLetters,
          o = this.textProperty.currentData.l; for (t = o.length, e = 0; e < t; e += 1) o[e].n ? a += 1 : (r = this.textSpans[e], i = this.textPaths[e], n = s[a], a += 1, n._mdf.m && (this.isMasked ? r.setAttribute("transform", n.m) : r.style.transform = r.style.webkitTransform = n.m), r.style.opacity = n.o, n.sw && n._mdf.sw && i.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && i.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (i.setAttribute("fill", n.fc), i.style.color = n.fc)); if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) { var l = this.innerElem.getBBox();
          this.currentBBox.w !== l.width && (this.currentBBox.w = l.width, this.svgElement.setAttribute("width", l.width)), this.currentBBox.h !== l.height && (this.currentBBox.h = l.height, this.svgElement.setAttribute("height", l.height));
          this.currentBBox.w === l.width + 2 && this.currentBBox.h === l.height + 2 && this.currentBBox.x === l.x - 1 && this.currentBBox.y === l.y - 1 || (this.currentBBox.w = l.width + 2, this.currentBBox.h = l.height + 2, this.currentBBox.x = l.x - 1, this.currentBBox.y = l.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)") } } }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() { var e = this.globalData.getAssetsPath(this.assetData),
        t = new Image;
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln) }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() { var e, t, n = this.comp.threeDElements.length; for (e = 0; e < n; e += 1) "3d" === (t = this.comp.threeDElements[e]).type && (t.perspectiveElem.style.perspective = t.perspectiveElem.style.webkitPerspective = this.pe.v + "px", t.container.style.transformOrigin = t.container.style.mozTransformOrigin = t.container.style.webkitTransformOrigin = "0px 0px 0px", t.perspectiveElem.style.transform = t.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)") }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() { var e, t, n = this._isFirstFrame; if (this.hierarchy)
        for (t = this.hierarchy.length, e = 0; e < t; e += 1) n = this.hierarchy[e].finalTransform.mProp._mdf || n; if (n || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) { if (this.mat.reset(), this.hierarchy)
          for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) { var r = this.hierarchy[e].finalTransform.mProp;
            this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]) }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) { var i = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
            a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
            s = [i[0] / a, i[1] / a, i[2] / a],
            o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
            l = Math.atan2(s[1], o),
            h = Math.atan2(s[0], -s[2]);
          this.mat.rotateY(h).rotateX(-l) } this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v); var p = !this._prevMat.equals(this.mat); if ((p || this.pe._mdf) && this.comp.threeDElements) { var c; for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1) "3d" === (c = this.comp.threeDElements[e]).type && (p && (c.container.style.transform = c.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (c.perspectiveElem.style.perspective = c.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
          this.mat.clone(this._prevMat) } } this._isFirstFrame = !1 }, HCameraElement.prototype.prepareFrame = function(e) { this.prepareProperties(e, !0) }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() { return null }, HEffects.prototype.renderFrame = function() {}; var animationManager = function() { var e = {},
          t = [],
          n = 0,
          r = 0,
          i = 0,
          a = !0,
          s = !1;

        function o(e) { for (var n = 0, i = e.target; n < r;) t[n].animation === i && (t.splice(n, 1), n -= 1, r -= 1, i.isPaused || p()), n += 1 }

        function l(e, n) { if (!e) return null; for (var i = 0; i < r;) { if (t[i].elem == e && null !== t[i].elem) return t[i].animation;
            i += 1 } var a = new AnimationItem; return c(a, e), a.setData(e, n), a }

        function h() { i += 1, d() }

        function p() { i -= 1 }

        function c(e, n) { e.addEventListener("destroy", o), e.addEventListener("_active", h), e.addEventListener("_idle", p), t.push({ elem: n, animation: e }), r += 1 }

        function u(e) { var o, l = e - n; for (o = 0; o < r; o += 1) t[o].animation.advanceTime(l);
          n = e, i && !s ? window.requestAnimationFrame(u) : a = !0 }

        function f(e) { n = e, window.requestAnimationFrame(u) }

        function d() {!s && i && a && (window.requestAnimationFrame(f), a = !1) } return e.registerAnimation = l, e.loadAnimation = function(e) { var t = new AnimationItem; return c(t, null), t.setParams(e), t }, e.setSpeed = function(e, n) { var i; for (i = 0; i < r; i += 1) t[i].animation.setSpeed(e, n) }, e.setDirection = function(e, n) { var i; for (i = 0; i < r; i += 1) t[i].animation.setDirection(e, n) }, e.play = function(e) { var n; for (n = 0; n < r; n += 1) t[n].animation.play(e) }, e.pause = function(e) { var n; for (n = 0; n < r; n += 1) t[n].animation.pause(e) }, e.stop = function(e) { var n; for (n = 0; n < r; n += 1) t[n].animation.stop(e) }, e.togglePause = function(e) { var n; for (n = 0; n < r; n += 1) t[n].animation.togglePause(e) }, e.searchAnimations = function(e, t, n) { var r, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
            a = i.length; for (r = 0; r < a; r += 1) n && i[r].setAttribute("data-bm-type", n), l(i[r], e); if (t && 0 === a) { n || (n = "svg"); var s = document.getElementsByTagName("body")[0];
            s.innerHTML = ""; var o = createTag("div");
            o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", n), s.appendChild(o), l(o, e) } }, e.resize = function() { var e; for (e = 0; e < r; e += 1) t[e].animation.resize() }, e.goToAndStop = function(e, n, i) { var a; for (a = 0; a < r; a += 1) t[a].animation.goToAndStop(e, n, i) }, e.destroy = function(e) { var n; for (n = r - 1; n >= 0; n -= 1) t[n].animation.destroy(e) }, e.freeze = function() { s = !0 }, e.unfreeze = function() { s = !1, d() }, e.getRegisteredAnimations = function() { var e, n = t.length,
            r = []; for (e = 0; e < n; e += 1) r.push(t[e].animation); return r }, e }(),
      AnimationItem = function() { this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) { e.context && (this.context = e.context), (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container); var t = e.animType ? e.animType : e.renderer ? e.renderer : "svg"; switch (t) {
        case "canvas":
          this.renderer = new CanvasRenderer(this, e.rendererSettings); break;
        case "svg":
          this.renderer = new SVGRenderer(this, e.rendererSettings); break;
        default:
          this.renderer = new HybridRenderer(this, e.rendererSettings) } this.renderer.setProjectInterface(this.projectInterface), this.animType = t, "" === e.loop || null === e.loop || (!1 === e.loop ? this.loop = !1 : !0 === e.loop ? this.loop = !0 : this.loop = parseInt(e.loop)), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !e.hasOwnProperty("autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, e.animationData ? this.configAnimation(e.animationData) : e.path && ("json" != e.path.substr(-4) && ("/" != e.path.substr(-1, 1) && (e.path += "/"), e.path += "data.json"), -1 != e.path.lastIndexOf("\\") ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(e.path, this.configAnimation.bind(this), function() { this.trigger("data_failed") }.bind(this))) }, AnimationItem.prototype.setData = function(e, t) { var n = { wrapper: e, animationData: t ? "object" == typeof t ? t : JSON.parse(t) : null },
        r = e.attributes;
      n.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", n.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas"; var i = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : ""; "" === i || (n.loop = "false" !== i && ("true" === i || parseInt(i))); var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
      n.autoplay = "false" !== a, n.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (n.prerender = !1), this.setParams(n) }, AnimationItem.prototype.includeLayers = function(e) { e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip)); var t, n, r = this.animationData.layers,
        i = r.length,
        a = e.layers,
        s = a.length; for (n = 0; n < s; n += 1)
        for (t = 0; t < i;) { if (r[t].id == a[n].id) { r[t] = a[n]; break } t += 1 }
      if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
        for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
      this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(e.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment() }, AnimationItem.prototype.loadNextSegment = function() { var e = this.animationData.segments; if (!e || 0 === e.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames); var t = e.shift();
      this.timeCompleted = t.time * this.frameRate; var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, assetLoader.load(n, this.includeLayers.bind(this), function() { this.trigger("data_failed") }.bind(this)) }, AnimationItem.prototype.loadSegments = function() { this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment() }, AnimationItem.prototype.imagesLoaded = function() { this.trigger("loaded_images"), this.checkLoaded() }, AnimationItem.prototype.preloadImages = function() { this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this)) }, AnimationItem.prototype.configAnimation = function(e) { this.renderer && (this.animationData = e, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.renderer.searchExtraCompositions(e.assets), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()) }, AnimationItem.prototype.waitForFontsLoaded = function() { this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20)) }, AnimationItem.prototype.checkLoaded = function() { this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() { this.trigger("DOMLoaded") }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()) }, AnimationItem.prototype.resize = function() { this.renderer.updateContainerSize() }, AnimationItem.prototype.setSubframe = function(e) { this.subframeEnabled = !!e }, AnimationItem.prototype.gotoFrame = function() { this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame() }, AnimationItem.prototype.renderFrame = function() {!1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame) }, AnimationItem.prototype.play = function(e) { e && this.name != e || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active"))) }, AnimationItem.prototype.pause = function(e) { e && this.name != e || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle")) }, AnimationItem.prototype.togglePause = function(e) { e && this.name != e || (!0 === this.isPaused ? this.play() : this.pause()) }, AnimationItem.prototype.stop = function(e) { e && this.name != e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0)) }, AnimationItem.prototype.goToAndStop = function(e, t, n) { n && this.name != n || (t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier), this.pause()) }, AnimationItem.prototype.goToAndPlay = function(e, t, n) { this.goToAndStop(e, t, n), this.play() }, AnimationItem.prototype.advanceTime = function(e) { if (!0 !== this.isPaused && !1 !== this.isLoaded) { var t = this.currentRawFrame + e * this.frameModifier,
          n = !1;
        t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (n = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (n = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), n && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete")) } }, AnimationItem.prototype.adjustSegment = function(e, t) { this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = e[0] - e[1], this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = e[1] - e[0], this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart") }, AnimationItem.prototype.setSegment = function(e, t) { var n = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < e ? n = e : this.currentRawFrame + this.firstFrame > t && (n = t - e)), this.firstFrame = e, this.timeCompleted = this.totalFrames = t - e, -1 !== n && this.goToAndStop(n, !0) }, AnimationItem.prototype.playSegments = function(e, t) { if (t && (this.segments.length = 0), "object" == typeof e[0]) { var n, r = e.length; for (n = 0; n < r; n += 1) this.segments.push(e[n]) } else this.segments.push(e);
      this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play() }, AnimationItem.prototype.resetSegments = function(e) { this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0) }, AnimationItem.prototype.checkSegments = function(e) { return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0) }, AnimationItem.prototype.destroy = function(e) { e && this.name != e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null) }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) { this.currentRawFrame = e, this.gotoFrame() }, AnimationItem.prototype.setSpeed = function(e) { this.playSpeed = e, this.updaFrameModifier() }, AnimationItem.prototype.setDirection = function(e) { this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier() }, AnimationItem.prototype.updaFrameModifier = function() { this.frameModifier = this.frameMult * this.playSpeed * this.playDirection }, AnimationItem.prototype.getPath = function() { return this.path }, AnimationItem.prototype.getAssetsPath = function(e) { var t = ""; if (e.e) t = e.p;
      else if (this.assetsPath) { var n = e.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), t = this.assetsPath + n } else t = this.path, t += e.u ? e.u : "", t += e.p; return t }, AnimationItem.prototype.getAssetData = function(e) { for (var t = 0, n = this.assets.length; t < n;) { if (e == this.assets[t].id) return this.assets[t];
        t += 1 } }, AnimationItem.prototype.hide = function() { this.renderer.hide() }, AnimationItem.prototype.show = function() { this.renderer.show() }, AnimationItem.prototype.getDuration = function(e) { return e ? this.totalFrames : this.totalFrames / this.frameRate }, AnimationItem.prototype.trigger = function(e) { if (this._cbs && this._cbs[e]) switch (e) {
        case "enterFrame":
          this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier)); break;
        case "loopComplete":
          this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)); break;
        case "complete":
          this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult)); break;
        case "segmentStart":
          this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)); break;
        case "destroy":
          this.triggerEvent(e, new BMDestroyEvent(e, this)); break;
        default:
          this.triggerEvent(e) }
      "enterFrame" === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), "complete" === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), "segmentStart" === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this)) }; var Expressions = function() { var e = {}; return e.initExpressions = function(e) { var t = 0,
          n = [];
        e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function() { t += 1 }, e.renderer.globalData.popExpression = function() { 0 == (t -= 1) && function() { var e, t = n.length; for (e = 0; e < t; e += 1) n[e].release();
            n.length = 0 }() }, e.renderer.globalData.registerExpressionProperty = function(e) {-1 === n.indexOf(e) && n.push(e) } }, e }();
    expressionsPlugin = Expressions; var ExpressionManager = function() { var ob = {},
          Math = BMMath,
          window = null,
          document = null;

        function $bm_isInstanceOfArray(e) { return e.constructor === Array || e.constructor === Float32Array }

        function isNumerable(e, t) { return "number" === e || "boolean" === e || "string" === e || t instanceof Number }

        function $bm_neg(e) { var t = typeof e; if ("number" === t || "boolean" === t || e instanceof Number) return -e; if ($bm_isInstanceOfArray(e)) { var n, r = e.length,
              i = []; for (n = 0; n < r; n += 1) i[n] = -e[n]; return i } return e.propType ? e.v : void 0 } var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
          easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
          easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

        function sum(e, t) { var n = typeof e,
            r = typeof t; if ("string" === n || "string" === r) return e + t; if (isNumerable(n, e) && isNumerable(r, t)) return e + t; if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0))[0] = e[0] + t, e; if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t; if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) { for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1; return o } return 0 } var add = sum;

        function sub(e, t) { var n = typeof e,
            r = typeof t; if (isNumerable(n, e) && isNumerable(r, t)) return "string" === n && (e = parseInt(e)), "string" === r && (t = parseInt(t)), e - t; if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0))[0] = e[0] - t, e; if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t; if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) { for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1; return o } return 0 }

        function mul(e, t) { var n, r, i, a = typeof e,
            s = typeof t; if (isNumerable(a, e) && isNumerable(s, t)) return e * t; if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) { for (i = e.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e[r] * t; return n } if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) { for (i = t.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e * t[r]; return n } return 0 }

        function div(e, t) { var n, r, i, a = typeof e,
            s = typeof t; if (isNumerable(a, e) && isNumerable(s, t)) return e / t; if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) { for (i = e.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e[r] / t; return n } if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) { for (i = t.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = e / t[r]; return n } return 0 }

        function mod(e, t) { return "string" == typeof e && (e = parseInt(e)), "string" == typeof t && (t = parseInt(t)), e % t } var $bm_sum = sum,
          $bm_sub = sub,
          $bm_mul = mul,
          $bm_div = div,
          $bm_mod = mod;

        function clamp(e, t, n) { if (t > n) { var r = n;
            n = t, t = r } return Math.min(Math.max(e, t), n) }

        function radiansToDegrees(e) { return e / degToRads } var radians_to_degrees = radiansToDegrees;

        function degreesToRadians(e) { return e * degToRads } var degrees_to_radians = radiansToDegrees,
          helperLengthArray = [0, 0, 0, 0, 0, 0];

        function length(e, t) { if ("number" == typeof e || e instanceof Number) return t = t || 0, Math.abs(e - t);
          t || (t = helperLengthArray); var n, r = Math.min(e.length, t.length),
            i = 0; for (n = 0; n < r; n += 1) i += Math.pow(t[n] - e[n], 2); return Math.sqrt(i) }

        function normalize(e) { return div(e, length(e)) }

        function rgbToHsl(e) { var t, n, r = e[0],
            i = e[1],
            a = e[2],
            s = Math.max(r, i, a),
            o = Math.min(r, i, a),
            l = (s + o) / 2; if (s == o) t = n = 0;
          else { var h = s - o; switch (n = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
              case r:
                t = (i - a) / h + (i < a ? 6 : 0); break;
              case i:
                t = (a - r) / h + 2; break;
              case a:
                t = (r - i) / h + 4 } t /= 6 } return [t, n, l, e[3]] }

        function hue2rgb(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e }

        function hslToRgb(e) { var t, n, r, i = e[0],
            a = e[1],
            s = e[2]; if (0 === a) t = n = r = s;
          else { var o = s < .5 ? s * (1 + a) : s + a - s * a,
              l = 2 * s - o;
            t = hue2rgb(l, o, i + 1 / 3), n = hue2rgb(l, o, i), r = hue2rgb(l, o, i - 1 / 3) } return [t, n, r, e[3]] }

        function linear(e, t, n, r, i) { if (void 0 !== r && void 0 !== i || (r = t, i = n, t = 0, n = 1), n < t) { var a = n;
            n = t, t = a } if (e <= t) return r; if (e >= n) return i; var s = n === t ? 0 : (e - t) / (n - t); if (!r.length) return r + (i - r) * s; var o, l = r.length,
            h = createTypedArray("float32", l); for (o = 0; o < l; o += 1) h[o] = r[o] + (i[o] - r[o]) * s; return h }

        function random(e, t) { if (void 0 === t && (void 0 === e ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) { var n, r = t.length;
            e || (e = createTypedArray("float32", r)); var i = createTypedArray("float32", r),
              a = BMMath.random(); for (n = 0; n < r; n += 1) i[n] = e[n] + a * (t[n] - e[n]); return i } return void 0 === e && (e = 0), e + BMMath.random() * (t - e) }

        function createPath(e, t, n, r) { var i, a = e.length,
            s = shape_pool.newElement();
          s.setPathData(!!r, a); var o, l, h = [0, 0]; for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : h, l = n && n[i] ? n[i] : h, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0); return s }

        function initiateExpression(elem, data, property) { var val = data.x,
            needsVelocity = /velocity(?![\w\d])/.test(val),
            _needsRandom = -1 !== val.indexOf("random"),
            elemType = elem.data.ty,
            transform, $bm_transform, content, effect, thisProperty = property;
          thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() { return thisProperty.v } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0; var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
            outPoint = elem.data.op / elem.comp.globalData.frameRate,
            width = elem.data.sw ? elem.data.sw : 0,
            height = elem.data.sh ? elem.data.sh : 0,
            name = elem.data.nm,
            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
            scoped_bm_rt; if (data.xf) { var i, len = data.xf.length; for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())") } var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
            numKeys = property.kf ? data.k.length : 0,
            active = !this.data || !0 !== this.data.hd,
            wiggle = function(e, t) { var n, r, i = this.pv.length ? this.pv.length : 1,
                a = createTypedArray("float32", i); var s = Math.floor(5 * time); for (n = 0, r = 0; n < s;) { for (r = 0; r < i; r += 1) a[r] += -t + 2 * t * BMMath.random();
                n += 1 } var o = 5 * time,
                l = o - Math.floor(o),
                h = createTypedArray("float32", i); if (i > 1) { for (r = 0; r < i; r += 1) h[r] = this.pv[r] + a[r] + (-t + 2 * t * BMMath.random()) * l; return h } return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l }.bind(this);

          function loopInDuration(e, t) { return loopIn(e, t, !0) }

          function loopOutDuration(e, t) { return loopOut(e, t, !0) } thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this)); var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
            time, velocity, value, text, textIndex, textTotal, selectorValue;

          function lookAt(e, t) { var n = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
              r = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads; return [-Math.atan2(n[1], n[2]) / degToRads, r, 0] }

          function easeOut(e, t, n, r, i) { return applyEase(easeOutBez, e, t, n, r, i) }

          function easeIn(e, t, n, r, i) { return applyEase(easeInBez, e, t, n, r, i) }

          function ease(e, t, n, r, i) { return applyEase(easeInOutBez, e, t, n, r, i) }

          function applyEase(e, t, n, r, i, a) { void 0 === i ? (i = n, a = r) : t = (t - n) / (r - n); var s = e(t = t > 1 ? 1 : t < 0 ? 0 : t); if ($bm_isInstanceOfArray(i)) { var o, l = i.length,
                h = createTypedArray("float32", l); for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o]; return h } return (a - i) * s + i }

          function nearestKey(e) { var t, n, r, i = data.k.length; if (data.k.length && "number" != typeof data.k[0])
              if (n = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) n = 1, r = data.k[0].t;
              else { for (t = 0; t < i - 1; t += 1) { if (e === data.k[t].t) { n = t + 1, r = data.k[t].t; break } if (e > data.k[t].t && e < data.k[t + 1].t) { e - data.k[t].t > data.k[t + 1].t - e ? (n = t + 2, r = data.k[t + 1].t) : (n = t + 1, r = data.k[t].t); break } } - 1 === n && (n = t + 1, r = data.k[t].t) } else n = 0, r = 0; var a = {}; return a.index = n, a.time = r / elem.comp.globalData.frameRate, a }

          function key(e) { var t, n, r; if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + e);
            e -= 1, t = { time: data.k[e].t / elem.comp.globalData.frameRate, value: [] }; var i = data.k[e].hasOwnProperty("s") ? data.k[e].s : data.k[e - 1].e; for (r = i.length, n = 0; n < r; n += 1) t[n] = i[n], t.value[n] = i[n]; return t }

          function framesToTime(e, t) { return t || (t = elem.comp.globalData.frameRate), e / t }

          function timeToFrames(e, t) { return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t }

          function seedRandom(e) { BMMath.seedrandom(randSeed + e) }

          function sourceRectAtTime() { return elem.sourceRectAtTime() }

          function substring(e, t) { return "string" == typeof value ? void 0 === t ? value.substring(e) : value.substring(e, t) : "" }

          function substr(e, t) { return "string" == typeof value ? void 0 === t ? value.substr(e) : value.substr(e, t) : "" } var index = elem.data.ind,
            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
            parent, randSeed = Math.floor(1e6 * Math.random()),
            globalData = elem.globalData;

          function executeExpression(e) { return value = e, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt) } return executeExpression } return ob.initiateExpression = initiateExpression, ob }(),
      expressionHelpers = function() { return { searchExpressions: function(e, t, n) { t.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(e, t, n).bind(n))) }, getSpeedAtTime: function(e) { var t = this.getValueAtTime(e),
              n = this.getValueAtTime(e + -.01),
              r = 0; if (t.length) { var i; for (i = 0; i < t.length; i += 1) r += Math.pow(n[i] - t[i], 2);
              r = 100 * Math.sqrt(r) } else r = 0; return r }, getVelocityAtTime: function(e) { if (void 0 !== this.vel) return this.vel; var t, n, r = this.getValueAtTime(e),
              i = this.getValueAtTime(e + -.001); if (r.length)
              for (t = createTypedArray("float32", r.length), n = 0; n < r.length; n += 1) t[n] = (i[n] - r[n]) / -.001;
            else t = (i - r) / -.001; return t }, getValueAtTime: function(e) { return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value }, getStaticValueAtTime: function() { return this.pv }, setGroupProperty: function(e) { this.propertyGroup = e } } }();! function() {
      function e(e, t, n) { if (!this.k || !this.keyframes) return this.pv;
        e = e ? e.toLowerCase() : ""; var r, i, a, s, o, l = this.comp.renderedFrame,
          h = this.keyframes,
          p = h[h.length - 1].t; if (l <= p) return this.pv; if (n ? i = p - (r = t ? Math.abs(p - elem.comp.globalData.frameRate * t) : Math.max(0, p - this.elem.data.ip)) : ((!t || t > h.length - 1) && (t = h.length - 1), r = p - (i = h[h.length - 1 - t].t)), "pingpong" === e) { if (Math.floor((l - i) / r) % 2 != 0) return this.getValueAtTime((r - (l - i) % r + i) / this.comp.globalData.frameRate, 0) } else { if ("offset" === e) { var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
              u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              f = this.getValueAtTime(((l - i) % r + i) / this.comp.globalData.frameRate, 0),
              d = Math.floor((l - i) / r); if (this.pv.length) { for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (u[a] - c[a]) * d + f[a]; return o } return (u - c) * d + f } if ("continue" === e) { var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * ((l - p) / this.comp.globalData.frameRate) / 5e-4; return o } return m + (l - p) / .001 * (m - g) } } return this.getValueAtTime(((l - i) % r + i) / this.comp.globalData.frameRate, 0) }

      function t(e, t, n) { if (!this.k) return this.pv;
        e = e ? e.toLowerCase() : ""; var r, i, a, s, o, l = this.comp.renderedFrame,
          h = this.keyframes,
          p = h[0].t; if (l >= p) return this.pv; if (n ? i = p + (r = t ? Math.abs(elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - p)) : ((!t || t > h.length - 1) && (t = h.length - 1), r = (i = h[t].t) - p), "pingpong" === e) { if (Math.floor((p - l) / r) % 2 == 0) return this.getValueAtTime(((p - l) % r + p) / this.comp.globalData.frameRate, 0) } else { if ("offset" === e) { var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              u = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
              f = this.getValueAtTime((r - (p - l) % r + p) / this.comp.globalData.frameRate, 0),
              d = Math.floor((p - l) / r) + 1; if (this.pv.length) { for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (u[a] - c[a]) * d; return o } return f - (u - c) * d } if ("continue" === e) { var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * (p - l) / .001; return o } return m + (m - g) * (p - l) / .001 } } return this.getValueAtTime((r - (p - l) % r + p) / this.comp.globalData.frameRate, 0) }

      function n(e, t) { if (!this.k) return this.pv; if (e = .5 * (e || .4), (t = Math.floor(t || 5)) <= 1) return this.pv; var n, r, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
          a = i - e,
          s = t > 1 ? (i + e - a) / (t - 1) : 1,
          o = 0,
          l = 0; for (n = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < t;) { if (r = this.getValueAtTime(a + o * s), this.pv.length)
            for (l = 0; l < this.pv.length; l += 1) n[l] += r[l];
          else n += r;
          o += 1 } if (this.pv.length)
          for (l = 0; l < this.pv.length; l += 1) n[l] /= t;
        else n /= t; return n } var r = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(e, t, n) { var i = r(e, t, n); return i.dynamicProperties.length ? i.getValueAtTime = function(e) { console.warn("Transform at time not supported") }.bind(i) : i.getValueAtTime = function(e) {}.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i }; var i = PropertyFactory.getProp;
      PropertyFactory.getProp = function(r, a, s, o, l) { var h = i(r, a, s, o, l);
        h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = n, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === a.a ? a.k.length : 0, h.propertyIndex = a.ix; var p = 0; return 0 !== s && (p = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), h._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: p }, expressionHelpers.searchExpressions(r, a, h), h.k && l.addDynamicProperty(h), h }; var a = ShapePropertyFactory.getConstructorFunction(),
        s = ShapePropertyFactory.getKeyframedConstructorFunction();

      function o() {} o.prototype = { vertices: function(e, t) { this.k && this.getValue(); var n = this.v;
          void 0 !== t && (n = this.getValueAtTime(t, 0)); var r, i = n._length,
            a = n[e],
            s = n.v,
            o = createSizedArray(i); for (r = 0; r < i; r += 1) o[r] = "i" === e || "o" === e ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]]; return o }, points: function(e) { return this.vertices("v", e) }, inTangents: function(e) { return this.vertices("i", e) }, outTangents: function(e) { return this.vertices("o", e) }, isClosed: function() { return this.v.c }, pointOnPath: function(e, t) { var n = this.v;
          void 0 !== t && (n = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(n)); for (var r, i = this._segmentsLength, a = i.lengths, s = i.totalLength * e, o = 0, l = a.length, h = 0; o < l;) { if (h + a[o].addedLength > s) { var p = o,
                c = n.c && o === l - 1 ? 0 : o + 1,
                u = (s - h) / a[o].addedLength;
              r = bez.getPointInSegment(n.v[p], n.v[c], n.o[p], n.i[c], u, a[o]); break } h += a[o].addedLength, o += 1 } return r || (r = n.c ? [n.v[0][0], n.v[0][1]] : [n.v[n._length - 1][0], n.v[n._length - 1][1]]), r }, vectorOnPath: function(e, t, n) { e = 1 == e ? this.v.c ? 0 : .999 : e; var r = this.pointOnPath(e, t),
            i = this.pointOnPath(e + .001, t),
            a = i[0] - r[0],
            s = i[1] - r[1],
            o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2)); return 0 === o ? [0, 0] : "tangent" === n ? [a / o, s / o] : [-s / o, a / o] }, tangentOnPath: function(e, t) { return this.vectorOnPath(e, t, "tangent") }, normalOnPath: function(e, t) { return this.vectorOnPath(e, t, "normal") }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([o], a), extendPrototype([o], s), s.prototype.getValueAtTime = function(e) { return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shape_pool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue }, s.prototype.initiateExpression = ExpressionManager.initiateExpression; var l = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(e, t, n, r, i) { var a = l(e, t, n, r, i); return a.propertyIndex = t.ix, a.lock = !1, 3 === n ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === n && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a } }(),
    function() { TextProperty.prototype.getExpressionValue = function(e, t) { var n = this.calculateExpression(t); if (e.t !== n) { var r = {}; return this.copyData(r, e), r.t = n.toString(), r.__complete = !1, r } return e }, TextProperty.prototype.searchProperty = function() { var e = this.searchKeyframes(),
          t = this.searchExpressions(); return this.kf = e || t, this.kf }, TextProperty.prototype.searchExpressions = function() { if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0 } }(); var ShapeExpressionInterface = function() {
        function e(e, c, u) { var f, d = [],
            m = e ? e.length : 0; for (f = 0; f < m; f += 1) "gr" == e[f].ty ? d.push(t(e[f], c[f], u)) : "fl" == e[f].ty ? d.push(n(e[f], c[f], u)) : "st" == e[f].ty ? d.push(r(e[f], c[f], u)) : "tm" == e[f].ty ? d.push(i(e[f], c[f], u)) : "tr" == e[f].ty || ("el" == e[f].ty ? d.push(a(e[f], c[f], u)) : "sr" == e[f].ty ? d.push(s(e[f], c[f], u)) : "sh" == e[f].ty ? d.push(p(e[f], c[f], u)) : "rc" == e[f].ty ? d.push(o(e[f], c[f], u)) : "rd" == e[f].ty ? d.push(l(e[f], c[f], u)) : "rp" == e[f].ty && d.push(h(e[f], c[f], u))); return d }

        function t(t, n, r) { var i = function(e) { switch (e) {
              case "ADBE Vectors Group":
              case "Contents":
              case 2:
                return i.content;
              default:
                return i.transform } };
          i.propertyGroup = function(e) { return 1 === e ? i : r(e - 1) }; var a = function(t, n, r) { var i, a = function(e) { for (var t = 0, n = i.length; t < n;) { if (i[t]._name === e || i[t].mn === e || i[t].propertyIndex === e || i[t].ix === e || i[t].ind === e) return i[t];
                  t += 1 } if ("number" == typeof e) return i[e - 1] }; return a.propertyGroup = function(e) { return 1 === e ? a : r(e - 1) }, i = e(t.it, n.it, a.propertyGroup), a.numProperties = i.length, a.propertyIndex = t.cix, a._name = t.nm, a }(t, n, i.propertyGroup),
            s = function(e, t, n) {
              function r(e) { return 1 == e ? i : n(--e) } t.transform.mProps.o.setGroupProperty(r), t.transform.mProps.p.setGroupProperty(r), t.transform.mProps.a.setGroupProperty(r), t.transform.mProps.s.setGroupProperty(r), t.transform.mProps.r.setGroupProperty(r), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(r), t.transform.mProps.sa.setGroupProperty(r));

              function i(t) { return e.a.ix === t || "Anchor Point" === t ? i.anchorPoint : e.o.ix === t || "Opacity" === t ? i.opacity : e.p.ix === t || "Position" === t ? i.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? i.rotation : e.s.ix === t || "Scale" === t ? i.scale : e.sk && e.sk.ix === t || "Skew" === t ? i.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? i.skewAxis : void 0 } return t.transform.op.setGroupProperty(r), Object.defineProperties(i, { opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(t.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) }, _name: { value: e.nm } }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = n, i }(t.it[t.it.length - 1], n.it[n.it.length - 1], i.propertyGroup); return i.content = a, i.transform = s, Object.defineProperty(i, "_name", { get: function() { return t.nm } }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i }

        function n(e, t, n) {
          function r(e) { return "Color" === e || "color" === e ? r.color : "Opacity" === e || "opacity" === e ? r.opacity : void 0 } return Object.defineProperties(r, { color: { get: ExpressionPropertyInterface(t.c) }, opacity: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm }, mn: { value: e.mn } }), t.c.setGroupProperty(n), t.o.setGroupProperty(n), r }

        function r(e, t, n) {
          function r(e) { return 1 === e ? ob : n(e - 1) }

          function i(e) { return 1 === e ? l : r(e - 1) }

          function a(n) { Object.defineProperty(l, e.d[n].nm, { get: ExpressionPropertyInterface(t.d.dataProps[n].p) }) } var s, o = e.d ? e.d.length : 0,
            l = {}; for (s = 0; s < o; s += 1) a(s), t.d.dataProps[s].p.setGroupProperty(i);

          function h(e) { return "Color" === e || "color" === e ? h.color : "Opacity" === e || "opacity" === e ? h.opacity : "Stroke Width" === e || "stroke width" === e ? h.strokeWidth : void 0 } return Object.defineProperties(h, { color: { get: ExpressionPropertyInterface(t.c) }, opacity: { get: ExpressionPropertyInterface(t.o) }, strokeWidth: { get: ExpressionPropertyInterface(t.w) }, dash: { get: function() { return l } }, _name: { value: e.nm }, mn: { value: e.mn } }), t.c.setGroupProperty(r), t.o.setGroupProperty(r), t.w.setGroupProperty(r), h }

        function i(e, t, n) {
          function r(e) { return 1 == e ? i : n(--e) }

          function i(t) { return t === e.e.ix || "End" === t || "end" === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : void 0 } return i.propertyIndex = e.ix, t.s.setGroupProperty(r), t.e.setGroupProperty(r), t.o.setGroupProperty(r), i.propertyIndex = e.ix, i.propertyGroup = n, Object.defineProperties(i, { start: { get: ExpressionPropertyInterface(t.s) }, end: { get: ExpressionPropertyInterface(t.e) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), i.mn = e.mn, i }

        function a(e, t, n) {
          function r(e) { return 1 == e ? a : n(--e) } a.propertyIndex = e.ix; var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

          function a(t) { return e.p.ix === t ? a.position : e.s.ix === t ? a.size : void 0 } return i.s.setGroupProperty(r), i.p.setGroupProperty(r), Object.defineProperties(a, { size: { get: ExpressionPropertyInterface(i.s) }, position: { get: ExpressionPropertyInterface(i.p) }, _name: { value: e.nm } }), a.mn = e.mn, a }

        function s(e, t, n) {
          function r(e) { return 1 == e ? a : n(--e) } var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

          function a(t) { return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : void 0 : a.innerRadius } return a.propertyIndex = e.ix, i.or.setGroupProperty(r), i.os.setGroupProperty(r), i.pt.setGroupProperty(r), i.p.setGroupProperty(r), i.r.setGroupProperty(r), e.ir && (i.ir.setGroupProperty(r), i.is.setGroupProperty(r)), Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(i.p) }, rotation: { get: ExpressionPropertyInterface(i.r) }, points: { get: ExpressionPropertyInterface(i.pt) }, outerRadius: { get: ExpressionPropertyInterface(i.or) }, outerRoundness: { get: ExpressionPropertyInterface(i.os) }, innerRadius: { get: ExpressionPropertyInterface(i.ir) }, innerRoundness: { get: ExpressionPropertyInterface(i.is) }, _name: { value: e.nm } }), a.mn = e.mn, a }

        function o(e, t, n) {
          function r(e) { return 1 == e ? a : n(--e) } var i = "tm" === t.sh.ty ? t.sh.prop : t.sh;

          function a(t) { return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : void 0 } return a.propertyIndex = e.ix, i.p.setGroupProperty(r), i.s.setGroupProperty(r), i.r.setGroupProperty(r), Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(i.p) }, roundness: { get: ExpressionPropertyInterface(i.r) }, size: { get: ExpressionPropertyInterface(i.s) }, _name: { value: e.nm } }), a.mn = e.mn, a }

        function l(e, t, n) { var r = t;

          function i(t) { if (e.r.ix === t || "Round Corners 1" === t) return i.radius } return i.propertyIndex = e.ix, r.rd.setGroupProperty(function(e) { return 1 == e ? i : n(--e) }), Object.defineProperties(i, { radius: { get: ExpressionPropertyInterface(r.rd) }, _name: { value: e.nm } }), i.mn = e.mn, i }

        function h(e, t, n) {
          function r(e) { return 1 == e ? a : n(--e) } var i = t;

          function a(t) { return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : void 0 } return a.propertyIndex = e.ix, i.c.setGroupProperty(r), i.o.setGroupProperty(r), Object.defineProperties(a, { copies: { get: ExpressionPropertyInterface(i.c) }, offset: { get: ExpressionPropertyInterface(i.o) }, _name: { value: e.nm } }), a.mn = e.mn, a }

        function p(e, t, n) { var r = t.sh;

          function i(e) { if ("Shape" === e || "shape" === e || "Path" === e || "path" === e || "ADBE Vector Shape" === e || 2 === e) return i.path } return r.setGroupProperty(function(e) { return 1 == e ? i : n(--e) }), Object.defineProperties(i, { path: { get: function() { return r.k && r.getValue(), r } }, shape: { get: function() { return r.k && r.getValue(), r } }, _name: { value: e.nm }, ix: { value: e.ix }, mn: { value: e.mn } }), i } return function(t, n, r) { var i;

          function a(e) { if ("number" == typeof e) return i[e - 1]; for (var t = 0, n = i.length; t < n;) { if (i[t]._name === e) return i[t];
              t += 1 } } return a.propertyGroup = r, i = e(t, n, a), a.numProperties = i.length, a } }(),
      TextExpressionInterface = function(e) { var t;

        function n() {} return Object.defineProperty(n, "sourceText", { get: function() { e.textProperty.getValue(); var n = e.textProperty.currentData.t; return void 0 !== n && (e.textProperty.currentData.t = void 0, (t = new String(n)).value = n || new String(n)), t } }), n },
      LayerExpressionInterface = function() {
        function e(e, t) { var n = new Matrix; if (n.reset(), this._elem.finalTransform.mProp.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) { var r, i = this._elem.hierarchy.length; for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(n); return n.applyToPointArray(e[0], e[1], e[2] || 0) } return n.applyToPointArray(e[0], e[1], e[2] || 0) }

        function t(e, t) { var n = new Matrix; if (n.reset(), this._elem.finalTransform.mProp.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) { var r, i = this._elem.hierarchy.length; for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(n); return n.inversePoint(e) } return n.inversePoint(e) }

        function n(e) { var t = new Matrix; if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) { var n, r = this._elem.hierarchy.length; for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t); return t.inversePoint(e) } return t.inversePoint(e) }

        function r() { return [1, 1, 1, 1] } return function(i) { var a;

          function s(e) { switch (e) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return s.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return a;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return s.effect } } s.toWorld = e, s.fromWorld = t, s.toComp = e, s.fromComp = n, s.sampleImage = r, s.sourceRectAtTime = i.sourceRectAtTime.bind(i), s._elem = i; var o = getDescriptor(a = TransformExpressionInterface(i.finalTransform.mProp), "anchorPoint"); return Object.defineProperties(s, { hasParent: { get: function() { return i.hierarchy.length } }, parent: { get: function() { return i.hierarchy[0].layerInterface } }, rotation: getDescriptor(a, "rotation"), scale: getDescriptor(a, "scale"), position: getDescriptor(a, "position"), opacity: getDescriptor(a, "opacity"), anchorPoint: o, anchor_point: o, transform: { get: function() { return a } }, active: { get: function() { return i.isInRange } } }), s.startTime = i.data.st, s.index = i.data.ind, s.source = i.data.refId, s.height = 0 === i.data.ty ? i.data.h : 100, s.width = 0 === i.data.ty ? i.data.w : 100, s.inPoint = i.data.ip / i.comp.globalData.frameRate, s.outPoint = i.data.op / i.comp.globalData.frameRate, s._name = i.data.nm, s.registerMaskInterface = function(e) { s.mask = new MaskManagerInterface(e, i) }, s.registerEffectsInterface = function(e) { s.effect = e }, s } }(),
      CompExpressionInterface = function(e) {
        function t(t) { for (var n = 0, r = e.layers.length; n < r;) { if (e.layers[n].nm === t || e.layers[n].ind === t) return e.elements[n].layerInterface;
            n += 1 } return null } return Object.defineProperty(t, "_name", { value: e.data.nm }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t },
      TransformExpressionInterface = function(e) {
        function t(e) { switch (e) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return t.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return t.rotation;
            case "ADBE Rotate X":
              return t.xRotation;
            case "ADBE Rotate Y":
              return t.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return t.position;
            case "ADBE Position_0":
              return t.xPosition;
            case "ADBE Position_1":
              return t.yPosition;
            case "ADBE Position_2":
              return t.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return t.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return t.opacity } } if (Object.defineProperty(t, "rotation", { get: ExpressionPropertyInterface(e.r || e.rz) }), Object.defineProperty(t, "zRotation", { get: ExpressionPropertyInterface(e.rz || e.r) }), Object.defineProperty(t, "xRotation", { get: ExpressionPropertyInterface(e.rx) }), Object.defineProperty(t, "yRotation", { get: ExpressionPropertyInterface(e.ry) }), Object.defineProperty(t, "scale", { get: ExpressionPropertyInterface(e.s) }), e.p) var n = ExpressionPropertyInterface(e.p); return Object.defineProperty(t, "position", { get: function() { return e.p ? n() : [e.px.v, e.py.v, e.pz ? e.pz.v : 0] } }), Object.defineProperty(t, "xPosition", { get: ExpressionPropertyInterface(e.px) }), Object.defineProperty(t, "yPosition", { get: ExpressionPropertyInterface(e.py) }), Object.defineProperty(t, "zPosition", { get: ExpressionPropertyInterface(e.pz) }), Object.defineProperty(t, "anchorPoint", { get: ExpressionPropertyInterface(e.a) }), Object.defineProperty(t, "opacity", { get: ExpressionPropertyInterface(e.o) }), Object.defineProperty(t, "skew", { get: ExpressionPropertyInterface(e.sk) }), Object.defineProperty(t, "skewAxis", { get: ExpressionPropertyInterface(e.sa) }), Object.defineProperty(t, "orientation", { get: ExpressionPropertyInterface(e.or) }), t },
      ProjectInterface = function() {
        function e(e) { this.compositions.push(e) } return function() {
          function t(e) { for (var t = 0, n = this.compositions.length; t < n;) { if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
              t += 1 } } return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t } }(),
      EffectsExpressionInterface = function() {
        function e(n, r, i, a) { var s, o = [],
            l = n.ef.length; for (s = 0; s < l; s += 1) 5 === n.ef[s].ty ? o.push(e(n.ef[s], r.effectElements[s], r.effectElements[s].propertyGroup, a)) : o.push(t(r.effectElements[s], n.ef[s].ty, a, h));

          function h(e) { return 1 === e ? p : i(e - 1) } var p = function(e) { for (var t = n.ef, r = 0, i = t.length; r < i;) { if (e === t[r].nm || e === t[r].mn || e === t[r].ix) return 5 === t[r].ty ? o[r] : o[r]();
              r += 1 } return o[0]() }; return p.propertyGroup = h, "ADBE Color Control" === n.mn && Object.defineProperty(p, "color", { get: function() { return o[0]() } }), Object.defineProperty(p, "numProperties", { get: function() { return n.np } }), p.active = p.enabled = 0 !== n.en, p }

        function t(e, t, n, r) { var i = ExpressionPropertyInterface(e.p); return e.p.setGroupProperty && e.p.setGroupProperty(r),
            function() { return 10 === t ? n.comp.compInterface(e.p.v) : i() } } return { createEffectsInterface: function(t, n) { if (t.effectsManager) { var r, i = [],
                a = t.data.ef,
                s = t.effectsManager.effectElements.length; for (r = 0; r < s; r += 1) i.push(e(a[r], t.effectsManager.effectElements[r], n, t)); return function(e) { for (var n = t.data.ef || [], r = 0, a = n.length; r < a;) { if (e === n[r].nm || e === n[r].mn || e === n[r].ix) return i[r];
                  r += 1 } } } } } }(),
      MaskManagerInterface = function() {
        function e(e, t) { this._mask = e, this._data = t } Object.defineProperty(e.prototype, "maskPath", { get: function() { return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop } }), Object.defineProperty(e.prototype, "maskOpacity", { get: function() { return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v } }); return function(t, n) { var r, i = createSizedArray(t.viewData.length),
            a = t.viewData.length; for (r = 0; r < a; r += 1) i[r] = new e(t.viewData[r], t.masksProperties[r]); return function(e) { for (r = 0; r < a;) { if (t.masksProperties[r].nm === e) return i[r];
              r += 1 } } } }(),
      ExpressionPropertyInterface = function() { var e = { pv: 0, v: 0, mult: 1 },
          t = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };

        function n(e, t, n) { Object.defineProperty(e, "velocity", { get: function() { return t.getVelocityAtTime(t.comp.currentFrame) } }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function(r) { if (e.numKeys) { var i = "";
              i = "s" in t.keyframes[r - 1] ? t.keyframes[r - 1].s : "e" in t.keyframes[r - 2] ? t.keyframes[r - 2].e : t.keyframes[r - 2].s; var a = "unidimensional" === n ? new Number(i) : Object.assign({}, i); return a.time = t.keyframes[r - 1].t / t.elem.comp.globalData.frameRate, a } return 0 }, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup }

        function r() { return e } return function(i) { return i ? "unidimensional" === i.propType ? function(t) { t && "pv" in t || (t = e); var r = 1 / t.mult,
              i = t.pv * r,
              a = new Number(i); return a.value = i, n(a, t, "unidimensional"),
              function() { return t.k && t.getValue(), i = t.v * r, a.value !== i && ((a = new Number(i)).value = i, n(a, t, "unidimensional")), a } }(i) : function(e) { e && "pv" in e || (e = t); var r = 1 / e.mult,
              i = e.pv.length,
              a = createTypedArray("float32", i),
              s = createTypedArray("float32", i); return a.value = s, n(a, e, "multidimensional"),
              function() { e.k && e.getValue(); for (var t = 0; t < i; t += 1) a[t] = s[t] = e.v[t] * r; return a } }(i) : r } }(),
      TextExpressionSelectorProp, propertyGetTextProp;

    function SliderEffect(e, t, n) { this.p = PropertyFactory.getProp(t, e.v, 0, 0, n) }

    function AngleEffect(e, t, n) { this.p = PropertyFactory.getProp(t, e.v, 0, 0, n) }

    function ColorEffect(e, t, n) { this.p = PropertyFactory.getProp(t, e.v, 1, 0, n) }

    function PointEffect(e, t, n) { this.p = PropertyFactory.getProp(t, e.v, 1, 0, n) }

    function LayerIndexEffect(e, t, n) { this.p = PropertyFactory.getProp(t, e.v, 0, 0, n) }

    function MaskIndexEffect(e, t, n) { this.p = PropertyFactory.getProp(t, e.v, 0, 0, n) }

    function CheckboxEffect(e, t, n) { this.p = PropertyFactory.getProp(t, e.v, 0, 0, n) }

    function NoValueEffect() { this.p = {} }

    function EffectsManager() {}

    function EffectsManager(e, t) { var n = e.ef || [];
      this.effectElements = []; var r, i, a = n.length; for (r = 0; r < a; r++) i = new GroupEffect(n[r], t), this.effectElements.push(i) }

    function GroupEffect(e, t) { this.init(e, t) } TextExpressionSelectorProp = function() {
      function e(e, t) { return this.textIndex = e + 1, this.textTotal = t, this.v = this.getValue() * this.mult, this.v } return function(t, n) { this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = n.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, n, this), this.getMult = e, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty } }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(e, t, n) { return 1 === t.t ? new TextExpressionSelectorProp(e, t, n) : propertyGetTextProp(e, t, n) }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) { this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t); var n, r, i = this.data.ef.length,
        a = this.data.ef; for (n = 0; n < i; n += 1) { switch (r = null, a[n].ty) {
          case 0:
            r = new SliderEffect(a[n], t, this); break;
          case 1:
            r = new AngleEffect(a[n], t, this); break;
          case 2:
            r = new ColorEffect(a[n], t, this); break;
          case 3:
            r = new PointEffect(a[n], t, this); break;
          case 4:
          case 7:
            r = new CheckboxEffect(a[n], t, this); break;
          case 10:
            r = new LayerIndexEffect(a[n], t, this); break;
          case 11:
            r = new MaskIndexEffect(a[n], t, this); break;
          case 5:
            r = new EffectsManager(a[n], t, this); break;
          default:
            r = new NoValueEffect(a[n], t, this) } r && this.effectElements.push(r) } }; var lottiejs = {},
      _isFrozen = !1;

    function setLocationHref(e) { locationHref = e }

    function searchAnimations() {!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations() }

    function setSubframeRendering(e) { subframeEnabled = e }

    function loadAnimation(e) { return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e) }

    function setQuality(e) { if ("string" == typeof e) switch (e) {
        case "high":
          defaultCurveSegments = 200; break;
        case "medium":
          defaultCurveSegments = 50; break;
        case "low":
          defaultCurveSegments = 10 } else !isNaN(e) && e > 1 && (defaultCurveSegments = e);
      roundValues(!(defaultCurveSegments >= 50)) }

    function inBrowser() { return "undefined" != typeof navigator }

    function installPlugin(e, t) { "expressions" === e && (expressionsPlugin = t) }

    function getFactory(e) { switch (e) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix } }

    function checkReady() { "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations()) }

    function getQueryVariable(e) { for (var t = queryString.split("&"), n = 0; n < t.length; n++) { var r = t[n].split("="); if (decodeURIComponent(r[0]) == e) return decodeURIComponent(r[1]) } } lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.6"; var standalone = "__[STANDALONE]__",
      animationData = "__[ANIMATIONDATA]__",
      renderer = ""; if (standalone) { var scripts = document.getElementsByTagName("script"),
        index = scripts.length - 1,
        myScript = scripts[index] || { src: "" },
        queryString = myScript.src.replace(/^[^\?]+\??/, "");
      renderer = getQueryVariable("renderer") } var readyStateCheckInterval = setInterval(checkReady, 100); return lottiejs }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() { return factory(root) }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) }, function(e) { e.exports = { v: "5.1.10", fr: 60, ip: 0, op: 371, w: 1e3, h: 1500, nm: "Download", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Cog", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [.25], y: [1] }, o: { x: [.75], y: [0] }, n: ["0p25_1_0p75_0"], t: 297, s: [-45], e: [0] }, { i: { x: [.25], y: [1] }, o: { x: [.75], y: [0] }, n: ["0p25_1_0p75_0"], t: 322, s: [0], e: [120] }, { t: 370 }], ix: 10 }, p: { a: 0, k: [484, 752, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [.25, .25, .25], y: [1, 1, 1] }, o: { x: [.75, .75, .75], y: [0, 0, 0] }, n: ["0p25_1_0p75_0", "0p25_1_0p75_0", "0p25_1_0p75_0"], t: 297, s: [0, 0, 100], e: [30.4, 30.4, 100] }, { t: 322 }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [
                [0, 0],
                [.06, -.36],
                [0, 0],
                [.68, -.26],
                [0, 0],
                [.32, -.19],
                [0, 0],
                [-.12, -.34],
                [0, 0],
                [.47, -.56],
                [0, 0],
                [.19, -.32],
                [0, 0],
                [-.28, -.23],
                [0, 0],
                [.13, -.73],
                [0, 0],
                [0, -.37],
                [0, 0],
                [-.36, -.06],
                [0, 0],
                [-.26, -.68],
                [0, 0],
                [-.18, -.32],
                [0, 0],
                [-.34, .12],
                [0, 0],
                [-.56, -.47],
                [0, 0],
                [-.31, -.19],
                [0, 0],
                [-.23, .28],
                [0, 0],
                [-.73, -.13],
                [0, 0],
                [-.37, 0],
                [0, 0],
                [-.06, .36],
                [0, 0],
                [-.68, .26],
                [0, 0],
                [-.32, .18],
                [0, 0],
                [.12, .34],
                [0, 0],
                [-.47, .56],
                [0, 0],
                [-.19, .31],
                [0, 0],
                [.28, .23],
                [0, 0],
                [-.13, .73],
                [0, 0],
                [0, .37],
                [0, 0],
                [.36, .06],
                [0, 0],
                [.26, .68],
                [0, 0],
                [.18, .32],
                [0, 0],
                [.34, -.12],
                [0, 0],
                [.56, .47],
                [0, 0],
                [.31, .19],
                [0, 0],
                [.23, -.28],
                [0, 0],
                [.73, .13],
                [0, 0],
                [.37, 0]
              ], o: [
                [-.37, 0],
                [0, 0],
                [-.73, .13],
                [0, 0],
                [-.23, -.28],
                [0, 0],
                [-.32, .19],
                [0, 0],
                [-.56, .47],
                [0, 0],
                [-.34, -.12],
                [0, 0],
                [-.19, .32],
                [0, 0],
                [-.26, .68],
                [0, 0],
                [-.36, .07],
                [0, 0],
                [0, .37],
                [0, 0],
                [.13, .73],
                [0, 0],
                [-.28, .23],
                [0, 0],
                [.19, .32],
                [0, 0],
                [.47, .56],
                [0, 0],
                [-.12, .34],
                [0, 0],
                [.32, .18],
                [0, 0],
                [.68, .26],
                [0, 0],
                [.07, .36],
                [0, 0],
                [.37, 0],
                [0, 0],
                [.73, -.13],
                [0, 0],
                [.23, .28],
                [0, 0],
                [.32, -.19],
                [0, 0],
                [.56, -.47],
                [0, 0],
                [.34, .12],
                [0, 0],
                [.18, -.32],
                [0, 0],
                [.26, -.68],
                [0, 0],
                [.36, -.07],
                [0, 0],
                [0, -.37],
                [0, 0],
                [-.13, -.73],
                [0, 0],
                [.28, -.23],
                [0, 0],
                [-.19, -.32],
                [0, 0],
                [-.47, -.56],
                [0, 0],
                [.12, -.34],
                [0, 0],
                [-.32, -.18],
                [0, 0],
                [-.68, -.26],
                [0, 0],
                [-.07, -.36],
                [0, 0]
              ], v: [
                [-.86, -15],
                [-1.61, -14.37],
                [-2.03, -11.82],
                [-4.15, -11.24],
                [-5.8, -13.25],
                [-6.75, -13.42],
                [-8.25, -12.56],
                [-8.58, -11.65],
                [-7.67, -9.22],
                [-9.22, -7.67],
                [-11.65, -8.58],
                [-12.56, -8.25],
                [-13.42, -6.75],
                [-13.25, -5.8],
                [-11.24, -4.15],
                [-11.82, -2.03],
                [-14.37, -1.61],
                [-15, -.86],
                [-15, .86],
                [-14.37, 1.61],
                [-11.82, 2.03],
                [-11.24, 4.15],
                [-13.25, 5.8],
                [-13.42, 6.75],
                [-12.56, 8.25],
                [-11.65, 8.58],
                [-9.22, 7.67],
                [-7.67, 9.22],
                [-8.58, 11.65],
                [-8.25, 12.56],
                [-6.75, 13.42],
                [-5.8, 13.25],
                [-4.15, 11.24],
                [-2.03, 11.82],
                [-1.61, 14.37],
                [-.86, 15],
                [.86, 15],
                [1.61, 14.37],
                [2.03, 11.82],
                [4.15, 11.24],
                [5.8, 13.25],
                [6.75, 13.42],
                [8.25, 12.56],
                [8.58, 11.65],
                [7.67, 9.22],
                [9.22, 7.67],
                [11.65, 8.58],
                [12.56, 8.25],
                [13.42, 6.75],
                [13.25, 5.8],
                [11.24, 4.15],
                [11.82, 2.03],
                [14.37, 1.61],
                [15, .86],
                [15, -.86],
                [14.37, -1.61],
                [11.82, -2.03],
                [11.24, -4.15],
                [13.25, -5.8],
                [13.42, -6.75],
                [12.56, -8.25],
                [11.65, -8.58],
                [9.22, -7.67],
                [7.67, -9.22],
                [8.58, -11.65],
                [8.25, -12.56],
                [6.75, -13.42],
                [5.8, -13.25],
                [4.15, -11.24],
                [2.03, -11.82],
                [1.61, -14.37],
                [.86, -15]
              ], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [
                [-4.27, .71],
                [0, 0],
                [0, -1.91],
                [-.05, -.27],
                [0, 0],
                [0, 1.1]
              ], o: [
                [0, 0],
                [-1.8, .63],
                [0, .27],
                [0, 0],
                [-.36, -.98],
                [0, -4.48]
              ], v: [
                [-1.5, -8.865],
                [-1.5, -4.235],
                [-4.5, .005],
                [-4.42, .825],
                [-8.43, 3.135],
                [-9, .005]
              ], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 2, ty: "sh", ix: 3, ks: { a: 0, k: { i: [
                [0, 0],
                [0, -4.48],
                [.36, -.97],
                [0, 0],
                [0, .27],
                [1.8, .63]
              ], o: [
                [4.27, .71],
                [0, 1.1],
                [0, 0],
                [.05, -.27],
                [0, -1.91],
                [0, 0]
              ], v: [
                [1.5, -8.865],
                [9, .005],
                [8.43, 3.135],
                [4.42, .825],
                [4.5, .005],
                [1.5, -4.235]
              ], c: !0 }, ix: 2 }, nm: "Path 3", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 3, ty: "sh", ix: 4, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [2.81, 0],
                [1.65, 2],
                [0, 0],
                [-1.07, 0],
                [-.81, .7]
              ], o: [
                [0, 0],
                [-1.65, 2],
                [-2.8, 0],
                [0, 0],
                [.81, .7],
                [1.08, 0],
                [0, 0]
              ], v: [
                [2.917, 3.416],
                [6.947, 5.736],
                [-.003, 8.996],
                [-6.943, 5.736],
                [-2.923, 3.416],
                [-.003, 4.496],
                [2.917, 3.416]
              ], c: !0 }, ix: 2 }, nm: "Path 4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [3333.333, 3333.333], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape", np: 6, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 1, nm: "White Solid 1", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [.667], y: [1] }, o: { x: [.167], y: [.167] }, n: ["0p667_1_0p167_0p167"], t: 224, s: [50], e: [0] }, { t: 267 }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [491, 743.5, 0], ix: 2 }, a: { a: 0, k: [1250, 1e3, 0], ix: 1 }, s: { a: 0, k: [581.635, 581.635, 100], ix: 6 } }, ao: 0, hasMask: !0, masksProperties: [{ inv: !1, mode: "a", pt: { a: 0, k: { i: [
              [4.42, .51],
              [0, .18],
              [7.25, 0],
              [2.2, -4.44],
              [1.39, 0],
              [.25, -3.65],
              [0, -4.08],
              [-5.33, 0],
              [0, 0],
              [0, 4.91]
            ], o: [
              [.01, -.19],
              [0, -7.25],
              [-5.01, 0],
              [-1.13, -.75],
              [-3.71, 0],
              [-3.78, 1.37],
              [0, 5.32],
              [0, 0],
              [4.91, 0],
              [0, -4.56]
            ], v: [
              [1267.13, 997.983],
              [1267.14, 997.423],
              [1253.99, 984.273],
              [1242.21, 991.603],
              [1238.36, 990.453],
              [1231.36, 996.983],
              [1225, 1006.063],
              [1234.67, 1015.723],
              [1266.1, 1015.723],
              [1275, 1006.823]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 1, k: [{ i: { x: [.667], y: [1] }, o: { x: [.167], y: [.167] }, n: ["0p667_1_0p167_0p167"], t: 224, s: [0], e: [20] }, { t: 267 }], ix: 4 }, nm: "Mask 1" }, { inv: !1, mode: "s", pt: { a: 0, k: { i: [
              [4.42, .51],
              [0, .18],
              [7.25, 0],
              [2.2, -4.44],
              [1.39, 0],
              [.25, -3.65],
              [0, -4.08],
              [-5.33, 0],
              [0, 0],
              [0, 4.91]
            ], o: [
              [.01, -.19],
              [0, -7.25],
              [-5.01, 0],
              [-1.13, -.75],
              [-3.71, 0],
              [-3.78, 1.37],
              [0, 5.32],
              [0, 0],
              [4.91, 0],
              [0, -4.56]
            ], v: [
              [1267.13, 997.983],
              [1267.14, 997.423],
              [1253.99, 984.273],
              [1242.21, 991.603],
              [1238.36, 990.453],
              [1231.36, 996.983],
              [1225, 1006.063],
              [1234.67, 1015.723],
              [1266.1, 1015.723],
              [1275, 1006.823]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 2" }], sw: 2500, sh: 2e3, sc: "#ffffff", ip: 59, op: 266, st: 59, bm: 0 }, { ddd: 0, ind: 3, ty: 1, nm: "White Solid 1", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [.667], y: [1] }, o: { x: [.167], y: [.167] }, n: ["0p667_1_0p167_0p167"], t: 160, s: [50], e: [0] }, { t: 203 }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [491, 743.5, 0], ix: 2 }, a: { a: 0, k: [1250, 1e3, 0], ix: 1 }, s: { a: 0, k: [581.635, 581.635, 100], ix: 6 } }, ao: 0, hasMask: !0, masksProperties: [{ inv: !1, mode: "a", pt: { a: 0, k: { i: [
              [4.42, .51],
              [0, .18],
              [7.25, 0],
              [2.2, -4.44],
              [1.39, 0],
              [.25, -3.65],
              [0, -4.08],
              [-5.33, 0],
              [0, 0],
              [0, 4.91]
            ], o: [
              [.01, -.19],
              [0, -7.25],
              [-5.01, 0],
              [-1.13, -.75],
              [-3.71, 0],
              [-3.78, 1.37],
              [0, 5.32],
              [0, 0],
              [4.91, 0],
              [0, -4.56]
            ], v: [
              [1267.13, 997.983],
              [1267.14, 997.423],
              [1253.99, 984.273],
              [1242.21, 991.603],
              [1238.36, 990.453],
              [1231.36, 996.983],
              [1225, 1006.063],
              [1234.67, 1015.723],
              [1266.1, 1015.723],
              [1275, 1006.823]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 1, k: [{ i: { x: [.667], y: [1] }, o: { x: [.167], y: [.167] }, n: ["0p667_1_0p167_0p167"], t: 160, s: [0], e: [20] }, { t: 203 }], ix: 4 }, nm: "Mask 1" }, { inv: !1, mode: "s", pt: { a: 0, k: { i: [
              [4.42, .51],
              [0, .18],
              [7.25, 0],
              [2.2, -4.44],
              [1.39, 0],
              [.25, -3.65],
              [0, -4.08],
              [-5.33, 0],
              [0, 0],
              [0, 4.91]
            ], o: [
              [.01, -.19],
              [0, -7.25],
              [-5.01, 0],
              [-1.13, -.75],
              [-3.71, 0],
              [-3.78, 1.37],
              [0, 5.32],
              [0, 0],
              [4.91, 0],
              [0, -4.56]
            ], v: [
              [1267.13, 997.983],
              [1267.14, 997.423],
              [1253.99, 984.273],
              [1242.21, 991.603],
              [1238.36, 990.453],
              [1231.36, 996.983],
              [1225, 1006.063],
              [1234.67, 1015.723],
              [1266.1, 1015.723],
              [1275, 1006.823]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 2" }], sw: 2500, sh: 2e3, sc: "#ffffff", ip: 9, op: 266, st: -5, bm: 0 }, { ddd: 0, ind: 4, ty: 1, nm: "Black Solid 1", parent: 12, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -45, ix: 10 }, p: { a: 0, k: [559.5, -583, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, sw: 1e3, sh: 1e3, sc: "#000000", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "Arrow 2", parent: 15, tt: 2, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: .3, y: 1 }, o: { x: .7, y: 0 }, n: "0p3_1_0p7_0", t: 107, s: [514.461, 267.586, 0], e: [514.461, 262.586, 0], to: [0, -.83333331346512, 0], ti: [0, -67.8333358764648, 0] }, { i: { x: .3, y: 1 }, o: { x: .7, y: 0 }, n: "0p3_1_0p7_0", t: 183, s: [514.461, 262.586, 0], e: [514.461, 674.586, 0], to: [0, 67.8333358764648, 0], ti: [0, -68.6666641235352, 0] }, { t: 256 }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [12.648, 12.648, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [
                [.2, -.4],
                [.2, -.1],
                [.2, 0],
                [.2, .1],
                [2.81, 4.1],
                [-.1, .4],
                [-.41, 0],
                [0, 0],
                [-.3, .4],
                [-1.11, 0],
                [-.4, -.5],
                [0, 0],
                [0, 0],
                [-.21, -.4]
              ], o: [
                [-2.8, 4.2],
                [-.1, .1],
                [-.2, 0],
                [-.2, -.1],
                [-.19, -.3],
                [.3, -.4],
                [0, 0],
                [0, 0],
                [.4, -.5],
                [1.1, 0],
                [.29, .4],
                [0, 0],
                [.4, 0],
                [.2, .3]
              ], v: [
                [8.032, 1.7],
                [.632, 9.8],
                [.032, 10],
                [-.668, 9.8],
                [-8.078, 1.7],
                [-8.168, .6],
                [-7.168, 0],
                [-3.468, 0],
                [-2.668, -9.1],
                [.032, -10],
                [2.632, -9.1],
                [3.532, 0],
                [7.232, 0],
                [8.132, .6]
              ], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [.556862745098, .819607902976, .694117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [5e3, 5e3], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path", np: 2, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 183, op: 266, st: 0, bm: 0 }, { ddd: 0, ind: 6, ty: 1, nm: "Black Solid 1", parent: 12, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -45, ix: 10 }, p: { a: 0, k: [559.5, -583, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, sw: 1e3, sh: 1e3, sc: "#000000", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 7, ty: 4, nm: "Arrow", parent: 15, tt: 2, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: .3, y: 1 }, o: { x: .7, y: 0 }, n: "0p3_1_0p7_0", t: 107, s: [514.461, 267.586, 0], e: [514.461, 674.586, 0], to: [0, 67.8333358764648, 0], ti: [0, .83333331346512, 0] }, { i: { x: .3, y: 1 }, o: { x: .7, y: 0 }, n: "0p3_1_0p7_0", t: 183, s: [514.461, 674.586, 0], e: [514.461, 262.586, 0], to: [0, -.83333331346512, 0], ti: [0, 0, 0] }, { i: { x: .3, y: 1 }, o: { x: .7, y: 0 }, n: "0p3_1_0p7_0", t: 184, s: [514.461, 262.586, 0], e: [514.461, 674.586, 0], to: [0, 0, 0], ti: [0, -68.6666641235352, 0] }, { t: 256 }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [12.648, 12.648, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [
                [.2, -.4],
                [.2, -.1],
                [.2, 0],
                [.2, .1],
                [2.81, 4.1],
                [-.1, .4],
                [-.41, 0],
                [0, 0],
                [-.3, .4],
                [-1.11, 0],
                [-.4, -.5],
                [0, 0],
                [0, 0],
                [-.21, -.4]
              ], o: [
                [-2.8, 4.2],
                [-.1, .1],
                [-.2, 0],
                [-.2, -.1],
                [-.19, -.3],
                [.3, -.4],
                [0, 0],
                [0, 0],
                [.4, -.5],
                [1.1, 0],
                [.29, .4],
                [0, 0],
                [.4, 0],
                [.2, .3]
              ], v: [
                [8.032, 1.7],
                [.632, 9.8],
                [.032, 10],
                [-.668, 9.8],
                [-8.078, 1.7],
                [-8.168, .6],
                [-7.168, 0],
                [-3.468, 0],
                [-2.668, -9.1],
                [.032, -10],
                [2.632, -9.1],
                [3.532, 0],
                [7.232, 0],
                [8.132, .6]
              ], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [.556862745098, .819607902976, .694117647059, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [5e3, 5e3], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path", np: 2, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 183, st: 0, bm: 0 }, { ddd: 0, ind: 8, ty: 1, nm: "Black Solid 1", parent: 12, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -45, ix: 10 }, p: { a: 0, k: [559.5, -583, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, sw: 1e3, sh: 1e3, sc: "#000000", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 9, ty: 4, nm: "Cloud", parent: 15, tt: 2, sr: 1, ks: { o: { a: 1, k: [{ i: { x: [.667], y: [1] }, o: { x: [.333], y: [0] }, n: ["0p667_1_0p333_0"], t: 98, s: [50], e: [100] }, { t: 117 }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [502.879, 471.258, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [.25, .25, .25], y: [1, 1, 1] }, o: { x: [.75, .75, .75], y: [0, 0, 0] }, n: ["0p25_1_0p75_0", "0p25_1_0p75_0", "0p25_1_0p75_0"], t: 277, s: [11.668, 11.668, 100], e: [0, 0, 100] }, { t: 297 }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [
                [4.42, .51],
                [0, .18],
                [7.25, 0],
                [2.2, -4.44],
                [1.39, 0],
                [.25, -3.65],
                [0, -4.08],
                [-5.33, 0],
                [0, 0],
                [0, 4.91]
              ], o: [
                [.01, -.19],
                [0, -7.25],
                [-5.01, 0],
                [-1.13, -.75],
                [-3.71, 0],
                [-3.78, 1.37],
                [0, 5.32],
                [0, 0],
                [4.91, 0],
                [0, -4.56]
              ], v: [
                [17.13, -2.017],
                [17.14, -2.577],
                [3.99, -15.727],
                [-7.79, -8.397],
                [-11.64, -9.547],
                [-18.64, -3.017],
                [-25, 6.063],
                [-15.33, 15.723],
                [16.1, 15.723],
                [25, 6.823]
              ], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [5e3, 5e3], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Path", np: 2, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 10, ty: 1, nm: "Pale Gray-Cyan Solid 1", parent: 13, sr: 1, ks: { o: { a: 1, k: [{ i: { x: [.833], y: [.833] }, o: { x: [.167], y: [.167] }, n: ["0p833_0p833_0p167_0p167"], t: 276, s: [0], e: [100] }, { t: 310 }], ix: 11 }, r: { a: 0, k: -90, ix: 10 }, p: { a: 0, k: [439, -440, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: !0, masksProperties: [{ inv: !1, mode: "a", pt: { a: 0, k: { i: [
              [17.673, 0],
              [0, 0],
              [0, -17.673],
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0]
            ], o: [
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0],
              [17.673, 0],
              [0, 0],
              [0, -17.673]
            ], v: [
              [735.484, 122],
              [258, 122],
              [226, 154],
              [226, 846.656],
              [258, 878.656],
              [735.484, 878.656],
              [767.484, 846.656],
              [767.484, 154]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], sw: 1e3, sh: 1e3, sc: "#727c7c", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 11, ty: 3, nm: "Null 5", sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 1, k: [{ i: { x: [.746], y: [1] }, o: { x: [.71], y: [0] }, n: ["0p746_1_0p71_0"], t: 61, s: [0], e: [90] }, { t: 117 }], ix: 10 }, p: { a: 1, k: [{ i: { x: .666, y: 1 }, o: { x: .71, y: 0 }, n: "0p666_1_0p71_0", t: 61, s: [-192, 1404, 0], e: [477.478, 392.334, 0], to: [56.0896263122559, -624.666076660156, 0], ti: [-166.344619750977, -14.0213651657104, 0] }, { i: { x: .629, y: 1 }, o: { x: .596, y: 0 }, n: "0p629_1_0p596_0", t: 117, s: [477.478, 392.334, 0], e: [484, 731, 0], to: [4.16429996490479, .35101327300072, 0], ti: [-2.1465175151825, -164.170059204102, 0] }, { t: 160 }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 12, ty: 3, nm: "Cut out", parent: 11, sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: .29, y: 1 }, o: { x: .71, y: 0 }, n: "0p29_1_0p71_0", t: 13, s: [770.5, -726.5, 0], e: [674, -632, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: .667, y: .971 }, o: { x: .71, y: 0 }, n: "0p667_0p971_0p71_0", t: 61, s: [674, -632, 0], e: [138.92, -97.914, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 117 }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 13, ty: 3, nm: "Flap", parent: 11, sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: .29, y: 1 }, o: { x: .71, y: 0 }, n: "0p29_1_0p71_0", t: 13, s: [864.5, -822.5, 0], e: [674, -632, 0], to: [-3.33333325386047, 0, 0], ti: [166.66667175293, -165.66667175293, 0] }, { i: { x: .667, y: .968 }, o: { x: .71, y: 0 }, n: "0p667_0p968_0p71_0", t: 61, s: [674, -632, 0], e: [-397.586, 435.879, 0], to: [-166.221054077148, 165.223724365234, 0], ti: [115.27074432373, -109.981842041016, 0] }, { t: 117 }], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 14, ty: 1, nm: "Black Solid 1", parent: 12, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -45, ix: 10 }, p: { a: 0, k: [559.5, -583, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, sw: 1e3, sh: 1e3, sc: "#000000", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 15, ty: 1, nm: "Medium Turquoise Solid 1", parent: 13, tt: 2, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -90, ix: 10 }, p: { a: 0, k: [439, -440, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: !0, masksProperties: [{ inv: !1, mode: "a", pt: { a: 0, k: { i: [
              [17.673, 0],
              [0, 0],
              [0, -17.673],
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0]
            ], o: [
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0],
              [17.673, 0],
              [0, 0],
              [0, -17.673]
            ], v: [
              [735.484, 122],
              [258, 122],
              [226, 154],
              [226, 846.656],
              [258, 878.656],
              [735.484, 878.656],
              [767.484, 846.656],
              [767.484, 154]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], sw: 1e3, sh: 1e3, sc: "#8ed1b1", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 16, ty: 1, nm: "Deep Turquoise Solid 1", parent: 11, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [674, -632, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: !0, masksProperties: [{ inv: !1, mode: "a", pt: { a: 0, k: { i: [
              [17.673, 0],
              [0, 0],
              [0, -17.673],
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0]
            ], o: [
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0],
              [17.673, 0],
              [0, 0],
              [0, -17.673]
            ], v: [
              [735.484, 122],
              [258, 122],
              [226, 154],
              [226, 846.656],
              [258, 878.656],
              [735.484, 878.656],
              [767.484, 846.656],
              [767.484, 154]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], sw: 1e3, sh: 1e3, sc: "#23a566", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 17, ty: 1, nm: "Black Solid 2", parent: 13, tt: 1, sr: 1, ks: { o: { a: 0, k: 10, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [312, 0, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: !0, masksProperties: [{ inv: !1, mode: "a", pt: { a: 0, k: { i: [
              [0, 0],
              [0, 0],
              [0, 0]
            ], o: [
              [0, 0],
              [0, 0],
              [0, 0]
            ], v: [
              [995, 335.924],
              [254.5, 331.924],
              [994, 1065.924]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], sw: 1e3, sh: 1e3, sc: "#000000", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 18, ty: 1, nm: "Black Solid 1", parent: 12, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -45, ix: 10 }, p: { a: 0, k: [559.5, -583, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, sw: 1e3, sh: 1e3, sc: "#000000", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 19, ty: 4, nm: "Fill 4", parent: 11, tt: 2, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [674, -516.815, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], v: [
                [-46.809, 40.534],
                [46.811, 40.534],
                [46.811, -40.536],
                [-46.809, -40.536]
              ], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], v: [
                [5.789, -14.474],
                [5.789, -28.954],
                [35.229, -28.954],
                [35.229, -14.474]
              ], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 2, ty: "sh", ix: 3, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], v: [
                [5.789, 7.719],
                [5.789, -5.791],
                [35.229, -5.791],
                [35.229, 7.719]
              ], c: !0 }, ix: 2 }, nm: "Path 3", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 3, ty: "sh", ix: 4, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], v: [
                [5.789, 28.958],
                [5.789, 16.408],
                [35.229, 16.408],
                [35.229, 28.958]
              ], c: !0 }, ix: 2 }, nm: "Path 4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 4, ty: "sh", ix: 5, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], v: [
                [-35.227, 28.958],
                [-35.227, 16.408],
                [-5.787, 16.408],
                [-5.787, 28.958]
              ], c: !0 }, ix: 2 }, nm: "Path 5", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 5, ty: "sh", ix: 6, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], v: [
                [-35.227, 7.719],
                [-35.227, -5.791],
                [-5.787, -5.791],
                [-5.787, 7.719]
              ], c: !0 }, ix: 2 }, nm: "Path 6", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 6, ty: "sh", ix: 7, ks: { a: 0, k: { i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ], v: [
                [-35.227, -14.474],
                [-35.227, -28.954],
                [-5.787, -28.954],
                [-5.787, -14.474]
              ], c: !0 }, ix: 2 }, nm: "Path 7", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [300, 300], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Fill 4", np: 8, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 20, ty: 1, nm: "Black Solid 1", parent: 12, td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -45, ix: 10 }, p: { a: 0, k: [559.5, -583, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, sw: 1e3, sh: 1e3, sc: "#000000", ip: 0, op: 3600, st: 0, bm: 0 }, { ddd: 0, ind: 21, ty: 1, nm: "Deep Turquoise Solid 1", parent: 11, tt: 2, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [674, -632, 0], ix: 2 }, a: { a: 0, k: [500, 500, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, hasMask: !0, masksProperties: [{ inv: !1, mode: "a", pt: { a: 0, k: { i: [
              [17.673, 0],
              [0, 0],
              [0, -17.673],
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0]
            ], o: [
              [0, 0],
              [-17.673, 0],
              [0, 0],
              [0, 17.673],
              [0, 0],
              [17.673, 0],
              [0, 0],
              [0, -17.673]
            ], v: [
              [735.484, 122],
              [258, 122],
              [226, 154],
              [226, 846.656],
              [258, 878.656],
              [735.484, 878.656],
              [767.484, 846.656],
              [767.484, 154]
            ], c: !0 }, ix: 1 }, o: { a: 0, k: 100, ix: 3 }, x: { a: 0, k: 0, ix: 4 }, nm: "Mask 1" }], sw: 1e3, sh: 1e3, sc: "#23a566", ip: 0, op: 512, st: 0, bm: 0 }], markers: [] } }]);