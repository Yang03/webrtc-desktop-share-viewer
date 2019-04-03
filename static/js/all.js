/*!
 * Socket.IO v2.1.0
 * (c) 2014-2018 Guillermo Rauch
 * Released under the MIT License.
 */
! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e()
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
  }([function (t, e, n) {
    "use strict";

    function r(t, e) {
      "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {};
      var n, r = i(t),
        s = r.source,
        p = r.id,
        h = r.path,
        f = u[p] && h in u[p].nsps,
        l = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;
      return l ? (c("ignoring socket cache for %s", s), n = a(s, e)) : (u[p] || (c("new io instance for %s", s), u[p] = a(s, e)), n = u[p]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e)
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      i = n(1),
      s = n(7),
      a = n(12),
      c = n(3)("socket.io-client");
    t.exports = e = r;
    var u = e.managers = {};
    e.protocol = s.protocol, e.connect = r, e.Manager = n(12), e.Socket = n(37)
  }, function (t, e, n) {
    (function (e) {
      "use strict";

      function r(t, n) {
        var r = t;
        n = n || e.location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof n ? n.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
        var s = r.host.indexOf(":") !== -1,
          a = s ? "[" + r.host + "]" : r.host;
        return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (n && n.port === r.port ? "" : ":" + r.port), r
      }
      var o = n(2),
        i = n(3)("socket.io-client:url");
      t.exports = r
    }).call(e, function () {
      return this
    }())
  }, function (t, e) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    t.exports = function (t) {
      var e = t,
        o = t.indexOf("["),
        i = t.indexOf("]");
      o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
      for (var s = n.exec(t || ""), a = {}, c = 14; c--;) a[r[c]] = s[c] || "";
      return o != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
    }
  }, function (t, e, n) {
    (function (r) {
      function o() {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      }

      function i(t) {
        var n = this.useColors;
        if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
          var r = "color: " + this.color;
          t.splice(1, 0, r, "color: inherit");
          var o = 0,
            i = 0;
          t[0].replace(/%[a-zA-Z%]/g, function (t) {
            "%%" !== t && (o++, "%c" === t && (i = o))
          }), t.splice(i, 0, r)
        }
      }

      function s() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
      }

      function a(t) {
        try {
          null == t ? e.storage.removeItem("debug") : e.storage.debug = t
        } catch (n) {}
      }

      function c() {
        var t;
        try {
          t = e.storage.debug
        } catch (n) {}
        return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t
      }

      function u() {
        try {
          return window.localStorage
        } catch (t) {}
      }
      e = t.exports = n(5), e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) {
        try {
          return JSON.stringify(t)
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message
        }
      }, e.enable(c())
    }).call(e, n(4))
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function r() {
      throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
      if (p === setTimeout) return setTimeout(t, 0);
      if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(t, 0);
      try {
        return p(t, 0)
      } catch (e) {
        try {
          return p.call(null, t, 0)
        } catch (e) {
          return p.call(this, t, 0)
        }
      }
    }

    function i(t) {
      if (h === clearTimeout) return clearTimeout(t);
      if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
      try {
        return h(t)
      } catch (e) {
        try {
          return h.call(null, t)
        } catch (e) {
          return h.call(this, t)
        }
      }
    }

    function s() {
      y && l && (y = !1, l.length ? d = l.concat(d) : m = -1, d.length && a())
    }

    function a() {
      if (!y) {
        var t = o(s);
        y = !0;
        for (var e = d.length; e;) {
          for (l = d, d = []; ++m < e;) l && l[m].run();
          m = -1, e = d.length
        }
        l = null, y = !1, i(t)
      }
    }

    function c(t, e) {
      this.fun = t, this.array = e
    }

    function u() {}
    var p, h, f = t.exports = {};
    ! function () {
      try {
        p = "function" == typeof setTimeout ? setTimeout : n
      } catch (t) {
        p = n
      }
      try {
        h = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (t) {
        h = r
      }
    }();
    var l, d = [],
      y = !1,
      m = -1;
    f.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      d.push(new c(t, e)), 1 !== d.length || y || o(a)
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (t) {
      return []
    }, f.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, f.cwd = function () {
      return "/"
    }, f.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, f.umask = function () {
      return 0
    }
  }, function (t, e, n) {
    function r(t) {
      var n, r = 0;
      for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
      return e.colors[Math.abs(r) % e.colors.length]
    }

    function o(t) {
      function n() {
        if (n.enabled) {
          var t = n,
            r = +new Date,
            i = r - (o || r);
          t.diff = i, t.prev = o, t.curr = r, o = r;
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
          s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var c = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n) return n;
            c++;
            var o = e.formatters[r];
            if ("function" == typeof o) {
              var i = s[c];
              n = o.call(t, i), s.splice(c, 1), c--
            }
            return n
          }), e.formatArgs.call(t, s);
          var u = n.log || e.log || console.log.bind(console);
          u.apply(t, s)
        }
      }
      var o;
      return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), n.destroy = i, "function" == typeof e.init && e.init(n), e.instances.push(n), n
    }

    function i() {
      var t = e.instances.indexOf(this);
      return t !== -1 && (e.instances.splice(t, 1), !0)
    }

    function s(t) {
      e.save(t), e.names = [], e.skips = [];
      var n, r = ("string" == typeof t ? t : "").split(/[\s,]+/),
        o = r.length;
      for (n = 0; n < o; n++) r[n] && (t = r[n].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
      for (n = 0; n < e.instances.length; n++) {
        var i = e.instances[n];
        i.enabled = e.enabled(i.namespace)
      }
    }

    function a() {
      e.enable("")
    }

    function c(t) {
      if ("*" === t[t.length - 1]) return !0;
      var n, r;
      for (n = 0, r = e.skips.length; n < r; n++)
        if (e.skips[n].test(t)) return !1;
      for (n = 0, r = e.names.length; n < r; n++)
        if (e.names[n].test(t)) return !0;
      return !1
    }

    function u(t) {
      return t instanceof Error ? t.stack || t.message : t
    }
    e = t.exports = o.debug = o["default"] = o, e.coerce = u, e.disable = a, e.enable = s, e.enabled = c, e.humanize = n(6), e.instances = [], e.names = [], e.skips = [], e.formatters = {}
  }, function (t, e) {
    function n(t) {
      if (t = String(t), !(t.length > 100)) {
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
        if (e) {
          var n = parseFloat(e[1]),
            r = (e[2] || "ms").toLowerCase();
          switch (r) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * p;
            case "days":
            case "day":
            case "d":
              return n * u;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * c;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * a;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return
          }
        }
      }
    }

    function r(t) {
      return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
    }

    function o(t) {
      return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
    }

    function i(t, e, n) {
      if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }
    var s = 1e3,
      a = 60 * s,
      c = 60 * a,
      u = 24 * c,
      p = 365.25 * u;
    t.exports = function (t, e) {
      e = e || {};
      var i = typeof t;
      if ("string" === i && t.length > 0) return n(t);
      if ("number" === i && isNaN(t) === !1) return e["long"] ? o(t) : r(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    }
  }, function (t, e, n) {
    function r() {}

    function o(t) {
      var n = "" + t.type;
      if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
        var r = i(t.data);
        if (r === !1) return g;
        n += r
      }
      return f("encoded %j as %s", t, n), n
    }

    function i(t) {
      try {
        return JSON.stringify(t)
      } catch (e) {
        return !1
      }
    }

    function s(t, e) {
      function n(t) {
        var n = d.deconstructPacket(t),
          r = o(n.packet),
          i = n.buffers;
        i.unshift(r), e(i)
      }
      d.removeBlobs(t, n)
    }

    function a() {
      this.reconstructor = null
    }

    function c(t) {
      var n = 0,
        r = {
          type: Number(t.charAt(0))
        };
      if (null == e.types[r.type]) return h("unknown packet type " + r.type);
      if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
        for (var o = "";
          "-" !== t.charAt(++n) && (o += t.charAt(n), n != t.length););
        if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
        r.attachments = Number(o)
      }
      if ("/" === t.charAt(n + 1))
        for (r.nsp = ""; ++n;) {
          var i = t.charAt(n);
          if ("," === i) break;
          if (r.nsp += i, n === t.length) break
        } else r.nsp = "/";
      var s = t.charAt(n + 1);
      if ("" !== s && Number(s) == s) {
        for (r.id = ""; ++n;) {
          var i = t.charAt(n);
          if (null == i || Number(i) != i) {
            --n;
            break
          }
          if (r.id += t.charAt(n), n === t.length) break
        }
        r.id = Number(r.id)
      }
      if (t.charAt(++n)) {
        var a = u(t.substr(n)),
          c = a !== !1 && (r.type === e.ERROR || y(a));
        if (!c) return h("invalid payload");
        r.data = a
      }
      return f("decoded %s as %j", t, r), r
    }

    function u(t) {
      try {
        return JSON.parse(t)
      } catch (e) {
        return !1
      }
    }

    function p(t) {
      this.reconPack = t, this.buffers = []
    }

    function h(t) {
      return {
        type: e.ERROR,
        data: "parser error: " + t
      }
    }
    var f = n(3)("socket.io-parser"),
      l = n(8),
      d = n(9),
      y = n(10),
      m = n(11);
    e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = a;
    var g = e.ERROR + '"encode error"';
    r.prototype.encode = function (t, n) {
      if (f("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) s(t, n);
      else {
        var r = o(t);
        n([r])
      }
    }, l(a.prototype), a.prototype.add = function (t) {
      var n;
      if ("string" == typeof t) n = c(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
      else {
        if (!m(t) && !t.base64) throw new Error("Unknown type: " + t);
        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n))
      }
    }, a.prototype.destroy = function () {
      this.reconstructor && this.reconstructor.finishedReconstruction()
    }, p.prototype.takeBinaryData = function (t) {
      if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
        var e = d.reconstructPacket(this.reconPack, this.buffers);
        return this.finishedReconstruction(), e
      }
      return null
    }, p.prototype.finishedReconstruction = function () {
      this.reconPack = null, this.buffers = []
    }
  }, function (t, e, n) {
    function r(t) {
      if (t) return o(t)
    }

    function o(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];
      return t
    }
    t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, r.prototype.once = function (t, e) {
      function n() {
        this.off(t, n), e.apply(this, arguments)
      }
      return n.fn = e, this.on(t, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks["$" + t];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + t], this;
      for (var r, o = 0; o < n.length; o++)
        if (r = n[o], r === e || r.fn === e) {
          n.splice(o, 1);
          break
        } return this
    }, r.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      var e = [].slice.call(arguments, 1),
        n = this._callbacks["$" + t];
      if (n) {
        n = n.slice(0);
        for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e)
      }
      return this
    }, r.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, r.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length
    }
  }, function (t, e, n) {
    (function (t) {
      function r(t, e) {
        if (!t) return t;
        if (s(t)) {
          var n = {
            _placeholder: !0,
            num: e.length
          };
          return e.push(t), n
        }
        if (i(t)) {
          for (var o = new Array(t.length), a = 0; a < t.length; a++) o[a] = r(t[a], e);
          return o
        }
        if ("object" == typeof t && !(t instanceof Date)) {
          var o = {};
          for (var c in t) o[c] = r(t[c], e);
          return o
        }
        return t
      }

      function o(t, e) {
        if (!t) return t;
        if (t && t._placeholder) return e[t.num];
        if (i(t))
          for (var n = 0; n < t.length; n++) t[n] = o(t[n], e);
        else if ("object" == typeof t)
          for (var r in t) t[r] = o(t[r], e);
        return t
      }
      var i = n(10),
        s = n(11),
        a = Object.prototype.toString,
        c = "function" == typeof t.Blob || "[object BlobConstructor]" === a.call(t.Blob),
        u = "function" == typeof t.File || "[object FileConstructor]" === a.call(t.File);
      e.deconstructPacket = function (t) {
        var e = [],
          n = t.data,
          o = t;
        return o.data = r(n, e), o.attachments = e.length, {
          packet: o,
          buffers: e
        }
      }, e.reconstructPacket = function (t, e) {
        return t.data = o(t.data, e), t.attachments = void 0, t
      }, e.removeBlobs = function (t, e) {
        function n(t, a, p) {
          if (!t) return t;
          if (c && t instanceof Blob || u && t instanceof File) {
            r++;
            var h = new FileReader;
            h.onload = function () {
              p ? p[a] = this.result : o = this.result, --r || e(o)
            }, h.readAsArrayBuffer(t)
          } else if (i(t))
            for (var f = 0; f < t.length; f++) n(t[f], f, t);
          else if ("object" == typeof t && !s(t))
            for (var l in t) n(t[l], l, t)
        }
        var r = 0,
          o = t;
        n(o), r || e(o)
      }
    }).call(e, function () {
      return this
    }())
  }, function (t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function (t) {
      return "[object Array]" == n.call(t)
    }
  }, function (t, e) {
    (function (e) {
      function n(t) {
        return r && e.Buffer.isBuffer(t) || o && (t instanceof e.ArrayBuffer || i(t))
      }
      t.exports = n;
      var r = "function" == typeof e.Buffer && "function" == typeof e.Buffer.isBuffer,
        o = "function" == typeof e.ArrayBuffer,
        i = function () {
          return o && "function" == typeof e.ArrayBuffer.isView ? e.ArrayBuffer.isView : function (t) {
            return t.buffer instanceof e.ArrayBuffer
          }
        }()
    }).call(e, function () {
      return this
    }())
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      if (!(this instanceof r)) return new r(t, e);
      t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
      var n = e.parser || c;
      this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = e.autoConnect !== !1, this.autoConnect && this.open()
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      i = n(13),
      s = n(37),
      a = n(8),
      c = n(7),
      u = n(39),
      p = n(40),
      h = n(3)("socket.io-client:manager"),
      f = n(36),
      l = n(41),
      d = Object.prototype.hasOwnProperty;
    t.exports = r, r.prototype.emitAll = function () {
      this.emit.apply(this, arguments);
      for (var t in this.nsps) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
    }, r.prototype.updateSocketIds = function () {
      for (var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
    }, r.prototype.generateId = function (t) {
      return ("/" === t ? "" : t + "#") + this.engine.id
    }, a(r.prototype), r.prototype.reconnection = function (t) {
      return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
    }, r.prototype.reconnectionAttempts = function (t) {
      return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
    }, r.prototype.reconnectionDelay = function (t) {
      return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
    }, r.prototype.randomizationFactor = function (t) {
      return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
    }, r.prototype.reconnectionDelayMax = function (t) {
      return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
    }, r.prototype.timeout = function (t) {
      return arguments.length ? (this._timeout = t, this) : this._timeout
    }, r.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }, r.prototype.open = r.prototype.connect = function (t, e) {
      if (h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
      h("opening %s", this.uri), this.engine = i(this.uri, this.opts);
      var n = this.engine,
        r = this;
      this.readyState = "opening", this.skipReconnect = !1;
      var o = u(n, "open", function () {
          r.onopen(), t && t()
        }),
        s = u(n, "error", function (e) {
          if (h("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) {
            var n = new Error("Connection error");
            n.data = e, t(n)
          } else r.maybeReconnectOnOpen()
        });
      if (!1 !== this._timeout) {
        var a = this._timeout;
        h("connect attempt will timeout after %d", a);
        var c = setTimeout(function () {
          h("connect attempt timed out after %d", a), o.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a)
        }, a);
        this.subs.push({
          destroy: function () {
            clearTimeout(c)
          }
        })
      }
      return this.subs.push(o), this.subs.push(s), this
    }, r.prototype.onopen = function () {
      h("open"), this.cleanup(), this.readyState = "open", this.emit("open");
      var t = this.engine;
      this.subs.push(u(t, "data", p(this, "ondata"))), this.subs.push(u(t, "ping", p(this, "onping"))), this.subs.push(u(t, "pong", p(this, "onpong"))), this.subs.push(u(t, "error", p(this, "onerror"))), this.subs.push(u(t, "close", p(this, "onclose"))), this.subs.push(u(this.decoder, "decoded", p(this, "ondecoded")))
    }, r.prototype.onping = function () {
      this.lastPing = new Date, this.emitAll("ping")
    }, r.prototype.onpong = function () {
      this.emitAll("pong", new Date - this.lastPing)
    }, r.prototype.ondata = function (t) {
      this.decoder.add(t)
    }, r.prototype.ondecoded = function (t) {
      this.emit("packet", t)
    }, r.prototype.onerror = function (t) {
      h("error", t), this.emitAll("error", t)
    }, r.prototype.socket = function (t, e) {
      function n() {
        ~f(o.connecting, r) || o.connecting.push(r)
      }
      var r = this.nsps[t];
      if (!r) {
        r = new s(this, t, e), this.nsps[t] = r;
        var o = this;
        r.on("connecting", n), r.on("connect", function () {
          r.id = o.generateId(t)
        }), this.autoConnect && n()
      }
      return r
    }, r.prototype.destroy = function (t) {
      var e = f(this.connecting, t);
      ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
    }, r.prototype.packet = function (t) {
      h("writing packet %j", t);
      var e = this;
      t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {
        for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
        e.encoding = !1, e.processPacketQueue()
      }))
    }, r.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var t = this.packetBuffer.shift();
        this.packet(t)
      }
    }, r.prototype.cleanup = function () {
      h("cleanup");
      for (var t = this.subs.length, e = 0; e < t; e++) {
        var n = this.subs.shift();
        n.destroy()
      }
      this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, r.prototype.close = r.prototype.disconnect = function () {
      h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, r.prototype.onclose = function (t) {
      h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
    }, r.prototype.reconnect = function () {
      if (this.reconnecting || this.skipReconnect) return this;
      var t = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
      else {
        var e = this.backoff.duration();
        h("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
        var n = setTimeout(function () {
          t.skipReconnect || (h("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
            e ? (h("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (h("reconnect success"), t.onreconnect())
          }))
        }, e);
        this.subs.push({
          destroy: function () {
            clearTimeout(n)
          }
        })
      }
    }, r.prototype.onreconnect = function () {
      var t = this.backoff.attempts;
      this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
    }
  }, function (t, e, n) {
    t.exports = n(14), t.exports.parser = n(21)
  }, function (t, e, n) {
    (function (e) {
      function r(t, n) {
        if (!(this instanceof r)) return new r(t, n);
        n = n || {}, t && "object" == typeof t && (n = t, t = null), t ? (t = p(t), n.hostname = t.host, n.secure = "https" === t.protocol || "wss" === t.protocol, n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = p(n.host).host), this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (e.location ? location.hostname : "localhost"), this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.transportOptions = n.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized, this.forceNode = !!n.forceNode;
        var o = "object" == typeof e && e;
        o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
      }

      function o(t) {
        var e = {};
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
      }
      var i = n(15),
        s = n(8),
        a = n(3)("engine.io-client:socket"),
        c = n(36),
        u = n(21),
        p = n(2),
        h = n(30);
      t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = u.protocol, r.Socket = r, r.Transport = n(20), r.transports = n(15), r.parser = n(21), r.prototype.createTransport = function (t) {
        a('creating transport "%s"', t);
        var e = o(this.query);
        e.EIO = u.protocol, e.transport = t;
        var n = this.transportOptions[t] || {};
        this.id && (e.sid = this.id);
        var r = new i[t]({
          query: e,
          socket: this,
          agent: n.agent || this.agent,
          hostname: n.hostname || this.hostname,
          port: n.port || this.port,
          secure: n.secure || this.secure,
          path: n.path || this.path,
          forceJSONP: n.forceJSONP || this.forceJSONP,
          jsonp: n.jsonp || this.jsonp,
          forceBase64: n.forceBase64 || this.forceBase64,
          enablesXDR: n.enablesXDR || this.enablesXDR,
          timestampRequests: n.timestampRequests || this.timestampRequests,
          timestampParam: n.timestampParam || this.timestampParam,
          policyPort: n.policyPort || this.policyPort,
          pfx: n.pfx || this.pfx,
          key: n.key || this.key,
          passphrase: n.passphrase || this.passphrase,
          cert: n.cert || this.cert,
          ca: n.ca || this.ca,
          ciphers: n.ciphers || this.ciphers,
          rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
          perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
          extraHeaders: n.extraHeaders || this.extraHeaders,
          forceNode: n.forceNode || this.forceNode,
          localAddress: n.localAddress || this.localAddress,
          requestTimeout: n.requestTimeout || this.requestTimeout,
          protocols: n.protocols || void 0
        });
        return r
      }, r.prototype.open = function () {
        var t;
        if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
        else {
          if (0 === this.transports.length) {
            var e = this;
            return void setTimeout(function () {
              e.emit("error", "No transports available")
            }, 0)
          }
          t = this.transports[0]
        }
        this.readyState = "opening";
        try {
          t = this.createTransport(t)
        } catch (n) {
          return this.transports.shift(), void this.open()
        }
        t.open(), this.setTransport(t)
      }, r.prototype.setTransport = function (t) {
        a("setting transport %s", t.name);
        var e = this;
        this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
          e.onDrain()
        }).on("packet", function (t) {
          e.onPacket(t)
        }).on("error", function (t) {
          e.onError(t)
        }).on("close", function () {
          e.onClose("transport close")
        })
      }, r.prototype.probe = function (t) {
        function e() {
          if (f.onlyBinaryUpgrades) {
            var e = !this.supportsBinary && f.transport.supportsBinary;
            h = h || e
          }
          h || (a('probe transport "%s" opened', t), p.send([{
            type: "ping",
            data: "probe"
          }]), p.once("packet", function (e) {
            if (!h)
              if ("pong" === e.type && "probe" === e.data) {
                if (a('probe transport "%s" pong', t), f.upgrading = !0, f.emit("upgrading", p), !p) return;
                r.priorWebsocketSuccess = "websocket" === p.name, a('pausing current transport "%s"', f.transport.name), f.transport.pause(function () {
                  h || "closed" !== f.readyState && (a("changing transport and sending upgrade packet"), u(), f.setTransport(p), p.send([{
                    type: "upgrade"
                  }]), f.emit("upgrade", p), p = null, f.upgrading = !1, f.flush())
                })
              } else {
                a('probe transport "%s" failed', t);
                var n = new Error("probe error");
                n.transport = p.name, f.emit("upgradeError", n)
              }
          }))
        }

        function n() {
          h || (h = !0, u(), p.close(), p = null)
        }

        function o(e) {
          var r = new Error("probe error: " + e);
          r.transport = p.name, n(), a('probe transport "%s" failed because of error: %s', t, e), f.emit("upgradeError", r)
        }

        function i() {
          o("transport closed")
        }

        function s() {
          o("socket closed")
        }

        function c(t) {
          p && t.name !== p.name && (a('"%s" works - aborting "%s"', t.name, p.name), n())
        }

        function u() {
          p.removeListener("open", e), p.removeListener("error", o), p.removeListener("close", i), f.removeListener("close", s), f.removeListener("upgrading", c)
        }
        a('probing transport "%s"', t);
        var p = this.createTransport(t, {
            probe: 1
          }),
          h = !1,
          f = this;
        r.priorWebsocketSuccess = !1, p.once("open", e), p.once("error", o), p.once("close", i), this.once("close", s), this.once("upgrading", c), p.open()
      }, r.prototype.onOpen = function () {
        if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
          a("starting upgrade probes");
          for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
        }
      }, r.prototype.onPacket = function (t) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
          case "open":
            this.onHandshake(JSON.parse(t.data));
            break;
          case "pong":
            this.setPing(), this.emit("pong");
            break;
          case "error":
            var e = new Error("server error");
            e.code = t.data, this.onError(e);
            break;
          case "message":
            this.emit("data", t.data), this.emit("message", t.data)
        } else a('packet received with socket readyState "%s"', this.readyState)
      }, r.prototype.onHandshake = function (t) {
        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
      }, r.prototype.onHeartbeat = function (t) {
        clearTimeout(this.pingTimeoutTimer);
        var e = this;
        e.pingTimeoutTimer = setTimeout(function () {
          "closed" !== e.readyState && e.onClose("ping timeout")
        }, t || e.pingInterval + e.pingTimeout)
      }, r.prototype.setPing = function () {
        var t = this;
        clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
          a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
        }, t.pingInterval)
      }, r.prototype.ping = function () {
        var t = this;
        this.sendPacket("ping", function () {
          t.emit("ping")
        })
      }, r.prototype.onDrain = function () {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
      }, r.prototype.flush = function () {
        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
      }, r.prototype.write = r.prototype.send = function (t, e, n) {
        return this.sendPacket("message", t, e, n), this
      }, r.prototype.sendPacket = function (t, e, n, r) {
        if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
          n = n || {}, n.compress = !1 !== n.compress;
          var o = {
            type: t,
            data: e,
            options: n
          };
          this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
        }
      }, r.prototype.close = function () {
        function t() {
          r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close()
        }

        function e() {
          r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
        }

        function n() {
          r.once("upgrade", e), r.once("upgradeError", e)
        }
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          var r = this;
          this.writeBuffer.length ? this.once("drain", function () {
            this.upgrading ? n() : t()
          }) : this.upgrading ? n() : t()
        }
        return this
      }, r.prototype.onError = function (t) {
        a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
      }, r.prototype.onClose = function (t, e) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          a('socket close with reason: "%s"', t);
          var n = this;
          clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0
        }
      }, r.prototype.filterUpgrades = function (t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) ~c(this.transports, t[n]) && e.push(t[n]);
        return e
      }
    }).call(e, function () {
      return this
    }())
  }, function (t, e, n) {
    (function (t) {
      function r(e) {
        var n, r = !1,
          a = !1,
          c = !1 !== e.jsonp;
        if (t.location) {
          var u = "https:" === location.protocol,
            p = location.port;
          p || (p = u ? 443 : 80), r = e.hostname !== location.hostname || p !== e.port, a = e.secure !== u
        }
        if (e.xdomain = r, e.xscheme = a, n = new o(e), "open" in n && !e.forceJSONP) return new i(e);
        if (!c) throw new Error("JSONP disabled");
        return new s(e)
      }
      var o = n(16),
        i = n(18),
        s = n(33),
        a = n(34);
      e.polling = r, e.websocket = a
    }).call(e, function () {
      return this
    }())
  }, function (t, e, n) {
    (function (e) {
      var r = n(17);
      t.exports = function (t) {
        var n = t.xdomain,
          o = t.xscheme,
          i = t.enablesXDR;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!n || r)) return new XMLHttpRequest
        } catch (s) {}
        try {
          if ("undefined" != typeof XDomainRequest && !o && i) return new XDomainRequest
        } catch (s) {}
        if (!n) try {
          return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
        } catch (s) {}
      }
    }).call(e, function () {
      return this
    }())
  }, function (t, e) {
    try {
      t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (n) {
      t.exports = !1
    }
  }, function (t, e, n) {
    (function (e) {
      function r() {}

      function o(t) {
        if (c.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, e.location) {
          var n = "https:" === location.protocol,
            r = location.port;
          r || (r = n ? 443 : 80), this.xd = t.hostname !== e.location.hostname || r !== t.port, this.xs = t.secure !== n
        }
      }

      function i(t) {
        this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
      }

      function s() {
        for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort()
      }
      var a = n(16),
        c = n(19),
        u = n(8),
        p = n(31),
        h = n(3)("engine.io-client:polling-xhr");
      t.exports = o, t.exports.Request = i, p(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function (t) {
        return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t)
      }, o.prototype.doWrite = function (t, e) {
        var n = "string" != typeof t && void 0 !== t,
          r = this.request({
            method: "POST",
            data: t,
            isBinary: n
          }),
          o = this;
        r.on("success", e), r.on("error", function (t) {
          o.onError("xhr post error", t)
        }), this.sendXhr = r
      }, o.prototype.doPoll = function () {
        h("xhr poll");
        var t = this.request(),
          e = this;
        t.on("data", function (t) {
          e.onData(t)
        }), t.on("error", function (t) {
          e.onError("xhr poll error", t)
        }), this.pollXhr = t
      }, u(i.prototype), i.prototype.create = function () {
        var t = {
          agent: this.agent,
          xdomain: this.xd,
          xscheme: this.xs,
          enablesXDR: this.enablesXDR
        };
        t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
        var n = this.xhr = new a(t),
          r = this;
        try {
          h("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async);
          try {
            if (this.extraHeaders) {
              n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
              for (var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o])
            }
          } catch (s) {}
          if ("POST" === this.method) try {
            this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
          } catch (s) {}
          try {
            n.setRequestHeader("Accept", "*/*")
          } catch (s) {}
          "withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function () {
            r.onLoad()
          }, n.onerror = function () {
            r.onError(n.responseText)
          }) : n.onreadystatechange = function () {
            if (2 === n.readyState) try {
              var t = n.getResponseHeader("Content-Type");
              r.supportsBinary && "application/octet-stream" === t && (n.responseType = "arraybuffer")
            } catch (e) {}
            4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function () {
              r.onError(n.status)
            }, 0))
          }, h("xhr data %s", this.data), n.send(this.data)
        } catch (s) {
          return void setTimeout(function () {
            r.onError(s)
          }, 0)
        }
        e.document && (this.index = i.requestsCount++, i.requests[this.index] = this)
      }, i.prototype.onSuccess = function () {
        this.emit("success"), this.cleanup()
      }, i.prototype.onData = function (t) {
        this.emit("data", t), this.onSuccess()
      }, i.prototype.onError = function (t) {
        this.emit("error", t), this.cleanup(!0)
      }, i.prototype.cleanup = function (t) {
        if ("undefined" != typeof this.xhr && null !== this.xhr) {
          if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
            this.xhr.abort()
          } catch (n) {}
          e.document && delete i.requests[this.index], this.xhr = null
        }
      }, i.prototype.onLoad = function () {
        var t;
        try {
          var e;
          try {
            e = this.xhr.getResponseHeader("Content-Type")
          } catch (n) {}
          t = "application/octet-stream" === e ? this.xhr.response || this.xhr.responseText : this.xhr.responseText
        } catch (n) {
          this.onError(n)
        }
        null != t && this.onData(t)
      }, i.prototype.hasXDR = function () {
        return "undefined" != typeof e.XDomainRequest && !this.xs && this.enablesXDR
      }, i.prototype.abort = function () {
        this.cleanup()
      }, i.requestsCount = 0, i.requests = {}, e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1))
    }).call(e, function () {
      return this
    }())
  }, function (t, e, n) {
    function r(t) {
      var e = t && t.forceBase64;
      p && !e || (this.supportsBinary = !1), o.call(this, t)
    }
    var o = n(20),
      i = n(30),
      s = n(21),
      a = n(31),
      c = n(32),
      u = n(3)("engine.io-client:polling");
    t.exports = r;
    var p = function () {
      var t = n(16),
        e = new t({
          xdomain: !1
        });
      return null != e.responseType
    }();
    a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function () {
      this.poll()
    }, r.prototype.pause = function (t) {
      function e() {
        u("paused"), n.readyState = "paused", t()
      }
      var n = this;
      if (this.readyState = "pausing", this.polling || !this.writable) {
        var r = 0;
        this.polling && (u("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function () {
          u("pre-pause polling complete"), --r || e()
        })), this.writable || (u("we are currently writing - waiting to pause"), r++, this.once("drain", function () {
          u("pre-pause writing complete"), --r || e()
        }))
      } else e()
    }, r.prototype.poll = function () {
      u("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, r.prototype.onData = function (t) {
      var e = this;
      u("polling got data %s", t);
      var n = function (t, n, r) {
        return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t)
      };
      s.decodePayload(t, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
    }, r.prototype.doClose = function () {
      function t() {
        u("writing close packet"), e.write([{
          type: "close"
        }])
      }
      var e = this;
      "open" === this.readyState ? (u("transport open - closing"), t()) : (u("transport not open - deferring close"), this.once("open", t))
    }, r.prototype.write = function (t) {
      var e = this;
      this.writable = !1;
      var n = function () {
        e.writable = !0, e.emit("drain")
      };
      s.encodePayload(t, this.supportsBinary, function (t) {
        e.doWrite(t, n)
      })
    }, r.prototype.uri = function () {
      var t = this.query || {},
        e = this.secure ? "https" : "http",
        n = "";
      !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t);
      var r = this.hostname.indexOf(":") !== -1;
      return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
    }
  }, function (t, e, n) {
    function r(t) {
      this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
    }
    var o = n(21),
      i = n(8);
    t.exports = r, i(r.prototype), r.prototype.onError = function (t, e) {
      var n = new Error(t);
      return n.type = "TransportError", n.description = e, this.emit("error", n), this
    }, r.prototype.open = function () {
      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
    }, r.prototype.close = function () {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
    }, r.prototype.send = function (t) {
      if ("open" !== this.readyState) throw new Error("Transport not open");
      this.write(t)
    }, r.prototype.onOpen = function () {
      this.readyState = "open", this.writable = !0, this.emit("open")
    }, r.prototype.onData = function (t) {
      var e = o.decodePacket(t, this.socket.binaryType);
      this.onPacket(e)
    }, r.prototype.onPacket = function (t) {
      this.emit("packet", t)
    }, r.prototype.onClose = function () {
      this.readyState = "closed", this.emit("close")
    }
  }, function (t, e, n) {
    (function (t) {
      function r(t, n) {
        var r = "b" + e.packets[t.type] + t.data.data;
        return n(r)
      }

      function o(t, n, r) {
        if (!n) return e.encodeBase64Packet(t, r);
        var o = t.data,
          i = new Uint8Array(o),
          s = new Uint8Array(1 + o.byteLength);
        s[0] = v[t.type];
        for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
        return r(s.buffer)
      }

      function i(t, n, r) {
        if (!n) return e.encodeBase64Packet(t, r);
        var o = new FileReader;
        return o.onload = function () {
          t.data = o.result, e.encodePacket(t, n, !0, r)
        }, o.readAsArrayBuffer(t.data)
      }

      function s(t, n, r) {
        if (!n) return e.encodeBase64Packet(t, r);
        if (g) return i(t, n, r);
        var o = new Uint8Array(1);
        o[0] = v[t.type];
        var s = new k([o.buffer, t.data]);
        return r(s)
      }

      function a(t) {
        try {
          t = d.decode(t, {
            strict: !1
          })
        } catch (e) {
          return !1
        }
        return t
      }

      function c(t, e, n) {
        for (var r = new Array(t.length), o = l(t.length, n), i = function (t, n, o) {
            e(n, function (e, n) {
              r[t] = n, o(e, r)
            })
          }, s = 0; s < t.length; s++) i(s, t[s], o)
      }
      var u, p = n(22),
        h = n(23),
        f = n(24),
        l = n(25),
        d = n(26);
      t && t.ArrayBuffer && (u = n(28));
      var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
        m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        g = y || m;
      e.protocol = 3;
      var v = e.packets = {
          open: 0,
          close: 1,
          ping: 2,
          pong: 3,
          message: 4,
          upgrade: 5,
          noop: 6
        },
        b = p(v),
        w = {
          type: "error",
          data: "parser error"
        },
        k = n(29);
      e.encodePacket = function (e, n, i, a) {
        "function" == typeof n && (a = n, n = !1), "function" == typeof i && (a = i, i = null);
        var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
        if (t.ArrayBuffer && c instanceof ArrayBuffer) return o(e, n, a);
        if (k && c instanceof t.Blob) return s(e, n, a);
        if (c && c.base64) return r(e, a);
        var u = v[e.type];
        return void 0 !== e.data && (u += i ? d.encode(String(e.data), {
          strict: !1
        }) : String(e.data)), a("" + u)
      }, e.encodeBase64Packet = function (n, r) {
        var o = "b" + e.packets[n.type];
        if (k && n.data instanceof t.Blob) {
          var i = new FileReader;
          return i.onload = function () {
            var t = i.result.split(",")[1];
            r(o + t)
          }, i.readAsDataURL(n.data)
        }
        var s;
        try {
          s = String.fromCharCode.apply(null, new Uint8Array(n.data))
        } catch (a) {
          for (var c = new Uint8Array(n.data), u = new Array(c.length), p = 0; p < c.length; p++) u[p] = c[p];
          s = String.fromCharCode.apply(null, u)
        }
        return o += t.btoa(s), r(o)
      }, e.decodePacket = function (t, n, r) {
        if (void 0 === t) return w;
        if ("string" == typeof t) {
          if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
          if (r && (t = a(t), t === !1)) return w;
          var o = t.charAt(0);
          return Number(o) == o && b[o] ? t.length > 1 ? {
            type: b[o],
            data: t.substring(1)
          } : {
            type: b[o]
          } : w
        }
        var i = new Uint8Array(t),
          o = i[0],
          s = f(t, 1);
        return k && "blob" === n && (s = new k([s])), {
          type: b[o],
          data: s
        }
      }, e.decodeBase64Packet = function (t, e) {
        var n = b[t.charAt(0)];
        if (!u) return {
          type: n,
          data: {
            base64: !0,
            data: t.substr(1)
          }
        };
        var r = u.decode(t.substr(1));
        return "blob" === e && k && (r = new k([r])), {
          type: n,
          data: r
        }
      }, e.encodePayload = function (t, n, r) {
        function o(t) {
          return t.length + ":" + t
        }

        function i(t, r) {
          e.encodePacket(t, !!s && n, !1, function (t) {
            r(null, o(t))
          })
        }
        "function" == typeof n && (r = n, n = null);
        var s = h(t);
        return n && s ? k && !g ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, function (t, e) {
          return r(e.join(""))
        }) : r("0:")
      }, e.decodePayload = function (t, n, r) {
        if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
        "function" == typeof n && (r = n, n = null);
        var o;
        if ("" === t) return r(w, 0, 1);
        for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
          var p = t.charAt(c);
          if (":" === p) {
            if ("" === a || a != (i = Number(a))) return r(w, 0, 1);
            if (s = t.substr(c + 1, i), a != s.length) return r(w, 0, 1);
            if (s.length) {
              if (o = e.decodePacket(s, n, !1), w.type === o.type && w.data === o.data) return r(w, 0, 1);
              var h = r(o, c + i, u);
              if (!1 === h) return
            }
            c += i, a = ""
          } else a += p
        }
        return "" !== a ? r(w, 0, 1) : void 0
      }, e.encodePayloadAsArrayBuffer = function (t, n) {
        function r(t, n) {
          e.encodePacket(t, !0, !0, function (t) {
            return n(null, t)
          })
        }
        return t.length ? void c(t, r, function (t, e) {
          var r = e.reduce(function (t, e) {
              var n;
              return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2
            }, 0),
            o = new Uint8Array(r),
            i = 0;
          return e.forEach(function (t) {
            var e = "string" == typeof t,
              n = t;
            if (e) {
              for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
              n = r.buffer
            }
            e ? o[i++] = 0 : o[i++] = 1;
            for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
            o[i++] = 255;
            for (var r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s]
          }), n(o.buffer)
        }) : n(new ArrayBuffer(0))
      }, e.encodePayloadAsBlob = function (t, n) {
        function r(t, n) {
          e.encodePacket(t, !0, !0, function (t) {
            var e = new Uint8Array(1);
            if (e[0] = 1, "string" == typeof t) {
              for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
              t = r.buffer, e[0] = 0
            }
            for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) a[o] = parseInt(s[o]);
            if (a[s.length] = 255, k) {
              var c = new k([e.buffer, a.buffer, t]);
              n(null, c)
            }
          })
        }
        c(t, r, function (t, e) {
          return n(new k(e))
        })
      }, e.decodePayloadAsBinary = function (t, n, r) {
        "function" == typeof n && (r = n, n = null);
        for (var o = t, i = []; o.byteLength > 0;) {
          for (var s = new Uint8Array(o), a = 0 === s[0], c = "", u = 1; 255 !== s[u]; u++) {
            if (c.length > 310) return r(w, 0, 1);
            c += s[u]
          }
          o = f(o, 2 + c.length), c = parseInt(c);
          var p = f(o, 0, c);
          if (a) try {
            p = String.fromCharCode.apply(null, new Uint8Array(p))
          } catch (h) {
            var l = new Uint8Array(p);
            p = "";
            for (var u = 0; u < l.length; u++) p += String.fromCharCode(l[u])
          }
          i.push(p), o = f(o, c)
        }
        var d = i.length;
        i.forEach(function (t, o) {
          r(e.decodePacket(t, n, !0), o, d)
        })
      }
    }).call(e, function () {
      return this
    }())
  }, function (t, e) {
    t.exports = Object.keys || function (t) {
      var e = [],
        n = Object.prototype.hasOwnProperty;
      for (var r in t) n.call(t, r) && e.push(r);
      return e
    }
  }, function (t, e, n) {
    (function (e) {
      function r(t) {
        if (!t || "object" != typeof t) return !1;
        if (o(t)) {
          for (var n = 0, i = t.length; n < i; n++)
            if (r(t[n])) return !0;
          return !1
        }
        if ("function" == typeof e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || "function" == typeof e.ArrayBuffer && t instanceof ArrayBuffer || s && t instanceof Blob || a && t instanceof File) return !0;
        if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return r(t.toJSON(), !0);
        for (var c in t)
          if (Object.prototype.hasOwnProperty.call(t, c) && r(t[c])) return !0;
        return !1
      }
      var o = n(10),
        i = Object.prototype.toString,
        s = "function" == typeof e.Blob || "[object BlobConstructor]" === i.call(e.Blob),
        a = "function" == typeof e.File || "[object FileConstructor]" === i.call(e.File);
      t.exports = r
    }).call(e, function () {
      return this
    }())
  }, function (t, e) {
    t.exports = function (t, e, n) {
      var r = t.byteLength;
      if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
      if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
      for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s];
      return i.buffer
    }
  }, function (t, e) {
    function n(t, e, n) {
      function o(t, r) {
        if (o.count <= 0) throw new Error("after called too many times");
        --o.count, t ? (i = !0, e(t), e = n) : 0 !== o.count || i || e(null, r)
      }
      var i = !1;
      return n = n || r, o.count = t, 0 === t ? e() : o
    }

    function r() {}
    t.exports = n
  }, function (t, e, n) {
    var r;
    (function (t, o) {
      ! function (i) {
        function s(t) {
          for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
          return r
        }

        function a(t) {
          for (var e, n = t.length, r = -1, o = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e);
          return o
        }

        function c(t, e) {
          if (t >= 55296 && t <= 57343) {
            if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
            return !1
          }
          return !0
        }

        function u(t, e) {
          return w(t >> e & 63 | 128)
        }

        function p(t, e) {
          if (0 == (4294967168 & t)) return w(t);
          var n = "";
          return 0 == (4294965248 & t) ? n = w(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (c(t, e) || (t = 65533), n = w(t >> 12 & 15 | 224), n += u(t, 6)) : 0 == (4292870144 & t) && (n = w(t >> 18 & 7 | 240), n += u(t, 12), n += u(t, 6)), n += w(63 & t | 128)
        }

        function h(t, e) {
          e = e || {};
          for (var n, r = !1 !== e.strict, o = s(t), i = o.length, a = -1, c = ""; ++a < i;) n = o[a], c += p(n, r);
          return c
        }

        function f() {
          if (b >= v) throw Error("Invalid byte index");
          var t = 255 & g[b];
          if (b++, 128 == (192 & t)) return 63 & t;
          throw Error("Invalid continuation byte")
        }

        function l(t) {
          var e, n, r, o, i;
          if (b > v) throw Error("Invalid byte index");
          if (b == v) return !1;
          if (e = 255 & g[b], b++, 0 == (128 & e)) return e;
          if (192 == (224 & e)) {
            if (n = f(), i = (31 & e) << 6 | n, i >= 128) return i;
            throw Error("Invalid continuation byte")
          }
          if (224 == (240 & e)) {
            if (n = f(), r = f(), i = (15 & e) << 12 | n << 6 | r, i >= 2048) return c(i, t) ? i : 65533;
            throw Error("Invalid continuation byte")
          }
          if (240 == (248 & e) && (n = f(), r = f(), o = f(), i = (7 & e) << 18 | n << 12 | r << 6 | o, i >= 65536 && i <= 1114111)) return i;
          throw Error("Invalid UTF-8 detected")
        }

        function d(t, e) {
          e = e || {};
          var n = !1 !== e.strict;
          g = s(t), v = g.length, b = 0;
          for (var r, o = [];
            (r = l(n)) !== !1;) o.push(r);
          return a(o)
        }
        var y = "object" == typeof e && e,
          m = ("object" == typeof t && t && t.exports == y && t, "object" == typeof o && o);
        m.global !== m && m.window !== m || (i = m);
        var g, v, b, w = String.fromCharCode,
          k = {
            version: "2.1.2",
            encode: h,
            decode: d
          };
        r = function () {
          return k
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
      }(this)
    }).call(e, n(27)(t), function () {
      return this
    }())
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
  }, function (t, e) {
    ! function () {
      "use strict";
      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
      e.encode = function (e) {
        var n, r = new Uint8Array(e),
          o = r.length,
          i = "";
        for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
        return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
      }, e.decode = function (t) {
        var e, r, o, i, s, a = .75 * t.length,
          c = t.length,
          u = 0;
        "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
        var p = new ArrayBuffer(a),
          h = new Uint8Array(p);
        for (e = 0; e < c; e += 4) r = n[t.charCodeAt(e)], o = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], s = n[t.charCodeAt(e + 3)], h[u++] = r << 2 | o >> 4, h[u++] = (15 & o) << 4 | i >> 2, h[u++] = (3 & i) << 6 | 63 & s;
        return p
      }
    }()
  }, function (t, e) {
    (function (e) {
      function n(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if (n.buffer instanceof ArrayBuffer) {
            var r = n.buffer;
            if (n.byteLength !== r.byteLength) {
              var o = new Uint8Array(n.byteLength);
              o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer
            }
            t[e] = r
          }
        }
      }

      function r(t, e) {
        e = e || {};
        var r = new i;
        n(t);
        for (var o = 0; o < t.length; o++) r.append(t[o]);
        return e.type ? r.getBlob(e.type) : r.getBlob()
      }

      function o(t, e) {
        return n(t), new Blob(t, e || {})
      }
      var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
        s = function () {
          try {
            var t = new Blob(["hi"]);
            return 2 === t.size
          } catch (e) {
            return !1
          }
        }(),
        a = s && function () {
          try {
            var t = new Blob([new Uint8Array([1, 2])]);
            return 2 === t.size
          } catch (e) {
            return !1
          }
        }(),
        c = i && i.prototype.append && i.prototype.getBlob;
      t.exports = function () {
        return s ? a ? e.Blob : o : c ? r : void 0
      }()
    }).call(e, function () {
      return this
    }())
  }, function (t, e) {
    e.encode = function (t) {
      var e = "";
      for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
      return e
    }, e.decode = function (t) {
      for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
        var i = n[r].split("=");
        e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
      }
      return e
    }
  }, function (t, e) {
    t.exports = function (t, e) {
      var n = function () {};
      n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
  }, function (t, e) {
    "use strict";

    function n(t) {
      var e = "";
      do e = s[t % a] + e, t = Math.floor(t / a); while (t > 0);
      return e
    }

    function r(t) {
      var e = 0;
      for (p = 0; p < t.length; p++) e = e * a + c[t.charAt(p)];
      return e
    }

    function o() {
      var t = n(+new Date);
      return t !== i ? (u = 0, i = t) : t + "." + n(u++)
    }
    for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, u = 0, p = 0; p < a; p++) c[s[p]] = p;
    o.encode = n, o.decode = r, t.exports = o
  }, function (t, e, n) {
    (function (e) {
      function r() {}

      function o(t) {
        i.call(this, t), this.query = this.query || {}, a || (e.___eio || (e.___eio = []), a = e.___eio), this.index = a.length;
        var n = this;
        a.push(function (t) {
          n.onData(t)
        }), this.query.j = this.index, e.document && e.addEventListener && e.addEventListener("beforeunload", function () {
          n.script && (n.script.onerror = r)
        }, !1)
      }
      var i = n(19),
        s = n(31);
      t.exports = o;
      var a, c = /\n/g,
        u = /\\n/g;
      s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function () {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this)
      }, o.prototype.doPoll = function () {
        var t = this,
          e = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {
          t.onError("jsonp poll error", e)
        };
        var n = document.getElementsByTagName("script")[0];
        n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;
        var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
        r && setTimeout(function () {
          var t = document.createElement("iframe");
          document.body.appendChild(t), document.body.removeChild(t)
        }, 100)
      }, o.prototype.doWrite = function (t, e) {
        function n() {
          r(), e()
        }

        function r() {
          if (o.iframe) try {
            o.form.removeChild(o.iframe)
          } catch (t) {
            o.onError("jsonp polling iframe removal error", t)
          }
          try {
            var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
            i = document.createElement(e)
          } catch (t) {
            i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0"
          }
          i.id = o.iframeId, o.form.appendChild(i), o.iframe = i
        }
        var o = this;
        if (!this.form) {
          var i, s = document.createElement("form"),
            a = document.createElement("textarea"),
            p = this.iframeId = "eio_iframe_" + this.index;
          s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = p, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
        }
        this.form.action = this.uri(), r(), t = t.replace(u, "\\\n"), this.area.value = t.replace(c, "\\n");
        try {
          this.form.submit()
        } catch (h) {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
          "complete" === o.iframe.readyState && n()
        } : this.iframe.onload = n
      }
    }).call(e, function () {
      return this
    }())
  }, function (t, e, n) {
    (function (e) {
      function r(t) {
        var e = t && t.forceBase64;
        e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (l = o), i.call(this, t)
      }
      var o, i = n(20),
        s = n(21),
        a = n(30),
        c = n(31),
        u = n(32),
        p = n(3)("engine.io-client:websocket"),
        h = e.WebSocket || e.MozWebSocket;
      if ("undefined" == typeof window) try {
        o = n(35)
      } catch (f) {}
      var l = h;
      l || "undefined" != typeof window || (l = o), t.exports = r, c(r, i), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function () {
        if (this.check()) {
          var t = this.uri(),
            e = this.protocols,
            n = {
              agent: this.agent,
              perMessageDeflate: this.perMessageDeflate
            };
          n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
          try {
            this.ws = this.usingBrowserWebSocket ? e ? new l(t, e) : new l(t) : new l(t, e, n)
          } catch (r) {
            return this.emit("error", r)
          }
          void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
        }
      }, r.prototype.addEventListeners = function () {
        var t = this;
        this.ws.onopen = function () {
          t.onOpen()
        }, this.ws.onclose = function () {
          t.onClose()
        }, this.ws.onmessage = function (e) {
          t.onData(e.data)
        }, this.ws.onerror = function (e) {
          t.onError("websocket error", e)
        }
      }, r.prototype.write = function (t) {
        function n() {
          r.emit("flush"), setTimeout(function () {
            r.writable = !0, r.emit("drain")
          }, 0)
        }
        var r = this;
        this.writable = !1;
        for (var o = t.length, i = 0, a = o; i < a; i++) ! function (t) {
          s.encodePacket(t, r.supportsBinary, function (i) {
            if (!r.usingBrowserWebSocket) {
              var s = {};
              if (t.options && (s.compress = t.options.compress), r.perMessageDeflate) {
                var a = "string" == typeof i ? e.Buffer.byteLength(i) : i.length;
                a < r.perMessageDeflate.threshold && (s.compress = !1)
              }
            }
            try {
              r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, s)
            } catch (c) {
              p("websocket closed before onclose event")
            }--o || n()
          })
        }(t[i])
      }, r.prototype.onClose = function () {
        i.prototype.onClose.call(this)
      }, r.prototype.doClose = function () {
        "undefined" != typeof this.ws && this.ws.close()
      }, r.prototype.uri = function () {
        var t = this.query || {},
          e = this.secure ? "wss" : "ws",
          n = "";
        this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = u()), this.supportsBinary || (t.b64 = 1), t = a.encode(t), t.length && (t = "?" + t);
        var r = this.hostname.indexOf(":") !== -1;
        return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
      }, r.prototype.check = function () {
        return !(!l || "__initialize" in l && this.name === r.prototype.name)
      }
    }).call(e, function () {
      return this
    }())
  }, function (t, e) {}, function (t, e) {
    var n = [].indexOf;
    t.exports = function (t, e) {
      if (n) return t.indexOf(e);
      for (var r = 0; r < t.length; ++r)
        if (t[r] === e) return r;
      return -1
    }
  }, function (t, e, n) {
    "use strict";

    function r(t, e, n) {
      this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      },
      i = n(7),
      s = n(8),
      a = n(38),
      c = n(39),
      u = n(40),
      p = n(3)("socket.io-client:socket"),
      h = n(30),
      f = n(23);
    t.exports = e = r;
    var l = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
      },
      d = s.prototype.emit;
    s(r.prototype), r.prototype.subEvents = function () {
      if (!this.subs) {
        var t = this.io;
        this.subs = [c(t, "open", u(this, "onopen")), c(t, "packet", u(this, "onpacket")), c(t, "close", u(this, "onclose"))]
      }
    }, r.prototype.open = r.prototype.connect = function () {
      return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
    }, r.prototype.send = function () {
      var t = a(arguments);
      return t.unshift("message"), this.emit.apply(this, t), this
    }, r.prototype.emit = function (t) {
      if (l.hasOwnProperty(t)) return d.apply(this, arguments), this;
      var e = a(arguments),
        n = {
          type: (void 0 !== this.flags.binary ? this.flags.binary : f(e)) ? i.BINARY_EVENT : i.EVENT,
          data: e
        };
      return n.options = {}, n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
    }, r.prototype.packet = function (t) {
      t.nsp = this.nsp, this.io.packet(t)
    }, r.prototype.onopen = function () {
      if (p("transport is open - connecting"), "/" !== this.nsp)
        if (this.query) {
          var t = "object" === o(this.query) ? h.encode(this.query) : this.query;
          p("sending connect packet with query %s", t), this.packet({
            type: i.CONNECT,
            query: t
          })
        } else this.packet({
          type: i.CONNECT
        })
    }, r.prototype.onclose = function (t) {
      p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
    }, r.prototype.onpacket = function (t) {
      if (t.nsp === this.nsp) switch (t.type) {
        case i.CONNECT:
          this.onconnect();
          break;
        case i.EVENT:
          this.onevent(t);
          break;
        case i.BINARY_EVENT:
          this.onevent(t);
          break;
        case i.ACK:
          this.onack(t);
          break;
        case i.BINARY_ACK:
          this.onack(t);
          break;
        case i.DISCONNECT:
          this.ondisconnect();
          break;
        case i.ERROR:
          this.emit("error", t.data)
      }
    }, r.prototype.onevent = function (t) {
      var e = t.data || [];
      p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? d.apply(this, e) : this.receiveBuffer.push(e)
    }, r.prototype.ack = function (t) {
      var e = this,
        n = !1;
      return function () {
        if (!n) {
          n = !0;
          var r = a(arguments);
          p("sending ack %j", r), e.packet({
            type: f(r) ? i.BINARY_ACK : i.ACK,
            id: t,
            data: r
          })
        }
      }
    }, r.prototype.onack = function (t) {
      var e = this.acks[t.id];
      "function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id)
    }, r.prototype.onconnect = function () {
      this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, r.prototype.emitBuffered = function () {
      var t;
      for (t = 0; t < this.receiveBuffer.length; t++) d.apply(this, this.receiveBuffer[t]);
      for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
      this.sendBuffer = []
    }, r.prototype.ondisconnect = function () {
      p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, r.prototype.destroy = function () {
      if (this.subs) {
        for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
        this.subs = null
      }
      this.io.destroy(this)
    }, r.prototype.close = r.prototype.disconnect = function () {
      return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({
        type: i.DISCONNECT
      })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, r.prototype.compress = function (t) {
      return this.flags.compress = t, this
    }, r.prototype.binary = function (t) {
      return this.flags.binary = t, this
    }
  }, function (t, e) {
    function n(t, e) {
      var n = [];
      e = e || 0;
      for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];
      return n
    }
    t.exports = n
  }, function (t, e) {
    "use strict";

    function n(t, e, n) {
      return t.on(e, n), {
        destroy: function () {
          t.removeListener(e, n)
        }
      }
    }
    t.exports = n
  }, function (t, e) {
    var n = [].slice;
    t.exports = function (t, e) {
      if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
      var r = n.call(arguments, 2);
      return function () {
        return e.apply(t, r.concat(n.call(arguments)))
      }
    }
  }, function (t, e) {
    function n(t) {
      t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
    }
    t.exports = n, n.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var e = Math.random(),
          n = Math.floor(e * this.jitter * t);
        t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
      }
      return 0 | Math.min(t, this.max)
    }, n.prototype.reset = function () {
      this.attempts = 0
    }, n.prototype.setMin = function (t) {
      this.ms = t
    }, n.prototype.setMax = function (t) {
      this.max = t
    }, n.prototype.setJitter = function (t) {
      this.jitter = t
    }
  }])
});
//# sourceMappingURL=socket.io.js.map

(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f()
  } else if (typeof define === "function" && define.amd) {
    define([], f)
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window
    } else if (typeof global !== "undefined") {
      g = global
    } else if (typeof self !== "undefined") {
      g = self
    } else {
      g = this
    }
    g.adapter = f()
  }
})(function () {
  var define, module, exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f
        }
        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e)
        }, l, l.exports, e, t, n, r)
      }
      return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
  })({
    1: [function (require, module, exports) {
      /*
       *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var SDPUtils = require('sdp');

      function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
        var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

        // Map ICE parameters (ufrag, pwd) to SDP.
        sdp += SDPUtils.writeIceParameters(
          transceiver.iceGatherer.getLocalParameters());

        // Map DTLS parameters to SDP.
        sdp += SDPUtils.writeDtlsParameters(
          transceiver.dtlsTransport.getLocalParameters(),
          type === 'offer' ? 'actpass' : dtlsRole || 'active');

        sdp += 'a=mid:' + transceiver.mid + '\r\n';

        if (transceiver.rtpSender && transceiver.rtpReceiver) {
          sdp += 'a=sendrecv\r\n';
        } else if (transceiver.rtpSender) {
          sdp += 'a=sendonly\r\n';
        } else if (transceiver.rtpReceiver) {
          sdp += 'a=recvonly\r\n';
        } else {
          sdp += 'a=inactive\r\n';
        }

        if (transceiver.rtpSender) {
          var trackId = transceiver.rtpSender._initialTrackId ||
            transceiver.rtpSender.track.id;
          transceiver.rtpSender._initialTrackId = trackId;
          // spec.
          var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
            trackId + '\r\n';
          sdp += 'a=' + msid;
          // for Chrome. Legacy should no longer be required.
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
            ' ' + msid;

          // RTX
          if (transceiver.sendEncodingParameters[0].rtx) {
            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
              ' ' + msid;
            sdp += 'a=ssrc-group:FID ' +
              transceiver.sendEncodingParameters[0].ssrc + ' ' +
              transceiver.sendEncodingParameters[0].rtx.ssrc +
              '\r\n';
          }
        }
        // FIXME: this should be written by writeRtpDescription.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
          ' cname:' + SDPUtils.localCName + '\r\n';
        if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
            ' cname:' + SDPUtils.localCName + '\r\n';
        }
        return sdp;
      }

      // Edge does not like
      // 1) stun: filtered after 14393 unless ?transport=udp is present
      // 2) turn: that does not have all of turn:host:port?transport=udp
      // 3) turn: with ipv6 addresses
      // 4) turn: occurring muliple times
      function filterIceServers(iceServers, edgeVersion) {
        var hasTurn = false;
        iceServers = JSON.parse(JSON.stringify(iceServers));
        return iceServers.filter(function (server) {
          if (server && (server.urls || server.url)) {
            var urls = server.urls || server.url;
            if (server.url && !server.urls) {
              console.warn('RTCIceServer.url is deprecated! Use urls instead.');
            }
            var isString = typeof urls === 'string';
            if (isString) {
              urls = [urls];
            }
            urls = urls.filter(function (url) {
              var validTurn = url.indexOf('turn:') === 0 &&
                url.indexOf('transport=udp') !== -1 &&
                url.indexOf('turn:[') === -1 &&
                !hasTurn;

              if (validTurn) {
                hasTurn = true;
                return true;
              }
              return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
                url.indexOf('?transport=udp') === -1;
            });

            delete server.url;
            server.urls = isString ? urls[0] : urls;
            return !!urls.length;
          }
        });
      }

      // Determines the intersection of local and remote capabilities.
      function getCommonCapabilities(localCapabilities, remoteCapabilities) {
        var commonCapabilities = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: []
        };

        var findCodecByPayloadType = function (pt, codecs) {
          pt = parseInt(pt, 10);
          for (var i = 0; i < codecs.length; i++) {
            if (codecs[i].payloadType === pt ||
              codecs[i].preferredPayloadType === pt) {
              return codecs[i];
            }
          }
        };

        var rtxCapabilityMatches = function (lRtx, rRtx, lCodecs, rCodecs) {
          var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
          var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
          return lCodec && rCodec &&
            lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
        };

        localCapabilities.codecs.forEach(function (lCodec) {
          for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
            var rCodec = remoteCapabilities.codecs[i];
            if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
              lCodec.clockRate === rCodec.clockRate) {
              if (lCodec.name.toLowerCase() === 'rtx' &&
                lCodec.parameters && rCodec.parameters.apt) {
                // for RTX we need to find the local rtx that has a apt
                // which points to the same local codec as the remote one.
                if (!rtxCapabilityMatches(lCodec, rCodec,
                    localCapabilities.codecs, remoteCapabilities.codecs)) {
                  continue;
                }
              }
              rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
              // number of channels is the highest common number of channels
              rCodec.numChannels = Math.min(lCodec.numChannels,
                rCodec.numChannels);
              // push rCodec so we reply with offerer payload type
              commonCapabilities.codecs.push(rCodec);

              // determine common feedback mechanisms
              rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
                for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                  if (lCodec.rtcpFeedback[j].type === fb.type &&
                    lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                    return true;
                  }
                }
                return false;
              });
              // FIXME: also need to determine .parameters
              //  see https://github.com/openpeer/ortc/issues/569
              break;
            }
          }
        });

        localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
          for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
            var rHeaderExtension = remoteCapabilities.headerExtensions[i];
            if (lHeaderExtension.uri === rHeaderExtension.uri) {
              commonCapabilities.headerExtensions.push(rHeaderExtension);
              break;
            }
          }
        });

        // FIXME: fecMechanisms
        return commonCapabilities;
      }

      // is action=setLocalDescription with type allowed in signalingState
      function isActionAllowedInSignalingState(action, type, signalingState) {
        return {
          offer: {
            setLocalDescription: ['stable', 'have-local-offer'],
            setRemoteDescription: ['stable', 'have-remote-offer']
          },
          answer: {
            setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
            setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
          }
        } [type][action].indexOf(signalingState) !== -1;
      }

      function maybeAddCandidate(iceTransport, candidate) {
        // Edge's internal representation adds some fields therefore
        // not all fieldѕ are taken into account.
        var alreadyAdded = iceTransport.getRemoteCandidates()
          .find(function (remoteCandidate) {
            return candidate.foundation === remoteCandidate.foundation &&
              candidate.ip === remoteCandidate.ip &&
              candidate.port === remoteCandidate.port &&
              candidate.priority === remoteCandidate.priority &&
              candidate.protocol === remoteCandidate.protocol &&
              candidate.type === remoteCandidate.type;
          });
        if (!alreadyAdded) {
          iceTransport.addRemoteCandidate(candidate);
        }
        return !alreadyAdded;
      }


      function makeError(name, description) {
        var e = new Error(description);
        e.name = name;
        // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
        e.code = {
          NotSupportedError: 9,
          InvalidStateError: 11,
          InvalidAccessError: 15,
          TypeError: undefined,
          OperationError: undefined
        } [name];
        return e;
      }

      module.exports = function (window, edgeVersion) {
        // https://w3c.github.io/mediacapture-main/#mediastream
        // Helper function to add the track to the stream and
        // dispatch the event ourselves.
        function addTrackToStreamAndFireEvent(track, stream) {
          stream.addTrack(track);
          stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack', {
            track: track
          }));
        }

        function removeTrackFromStreamAndFireEvent(track, stream) {
          stream.removeTrack(track);
          stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack', {
            track: track
          }));
        }

        function fireAddTrack(pc, track, receiver, streams) {
          var trackEvent = new Event('track');
          trackEvent.track = track;
          trackEvent.receiver = receiver;
          trackEvent.transceiver = {
            receiver: receiver
          };
          trackEvent.streams = streams;
          window.setTimeout(function () {
            pc._dispatchEvent('track', trackEvent);
          });
        }

        var RTCPeerConnection = function (config) {
          var pc = this;

          var _eventTarget = document.createDocumentFragment();
          ['addEventListener', 'removeEventListener', 'dispatchEvent']
          .forEach(function (method) {
            pc[method] = _eventTarget[method].bind(_eventTarget);
          });

          this.canTrickleIceCandidates = null;

          this.needNegotiation = false;

          this.localStreams = [];
          this.remoteStreams = [];

          this.localDescription = null;
          this.remoteDescription = null;

          this.signalingState = 'stable';
          this.iceConnectionState = 'new';
          this.connectionState = 'new';
          this.iceGatheringState = 'new';

          config = JSON.parse(JSON.stringify(config || {}));

          this.usingBundle = config.bundlePolicy === 'max-bundle';
          if (config.rtcpMuxPolicy === 'negotiate') {
            throw (makeError('NotSupportedError',
              'rtcpMuxPolicy \'negotiate\' is not supported'));
          } else if (!config.rtcpMuxPolicy) {
            config.rtcpMuxPolicy = 'require';
          }

          switch (config.iceTransportPolicy) {
            case 'all':
            case 'relay':
              break;
            default:
              config.iceTransportPolicy = 'all';
              break;
          }

          switch (config.bundlePolicy) {
            case 'balanced':
            case 'max-compat':
            case 'max-bundle':
              break;
            default:
              config.bundlePolicy = 'balanced';
              break;
          }

          config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

          this._iceGatherers = [];
          if (config.iceCandidatePoolSize) {
            for (var i = config.iceCandidatePoolSize; i > 0; i--) {
              this._iceGatherers.push(new window.RTCIceGatherer({
                iceServers: config.iceServers,
                gatherPolicy: config.iceTransportPolicy
              }));
            }
          } else {
            config.iceCandidatePoolSize = 0;
          }

          this._config = config;

          // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
          // everything that is needed to describe a SDP m-line.
          this.transceivers = [];

          this._sdpSessionId = SDPUtils.generateSessionId();
          this._sdpSessionVersion = 0;

          this._dtlsRole = undefined; // role for a=setup to use in answers.

          this._isClosed = false;
        };

        // set up event handlers on prototype
        RTCPeerConnection.prototype.onicecandidate = null;
        RTCPeerConnection.prototype.onaddstream = null;
        RTCPeerConnection.prototype.ontrack = null;
        RTCPeerConnection.prototype.onremovestream = null;
        RTCPeerConnection.prototype.onsignalingstatechange = null;
        RTCPeerConnection.prototype.oniceconnectionstatechange = null;
        RTCPeerConnection.prototype.onconnectionstatechange = null;
        RTCPeerConnection.prototype.onicegatheringstatechange = null;
        RTCPeerConnection.prototype.onnegotiationneeded = null;
        RTCPeerConnection.prototype.ondatachannel = null;

        RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
          if (this._isClosed) {
            return;
          }
          this.dispatchEvent(event);
          if (typeof this['on' + name] === 'function') {
            this['on' + name](event);
          }
        };

        RTCPeerConnection.prototype._emitGatheringStateChange = function () {
          var event = new Event('icegatheringstatechange');
          this._dispatchEvent('icegatheringstatechange', event);
        };

        RTCPeerConnection.prototype.getConfiguration = function () {
          return this._config;
        };

        RTCPeerConnection.prototype.getLocalStreams = function () {
          return this.localStreams;
        };

        RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this.remoteStreams;
        };

        // internal helper to create a transceiver object.
        // (which is not yet the same as the WebRTC 1.0 transceiver)
        RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
          var hasBundleTransport = this.transceivers.length > 0;
          var transceiver = {
            track: null,
            iceGatherer: null,
            iceTransport: null,
            dtlsTransport: null,
            localCapabilities: null,
            remoteCapabilities: null,
            rtpSender: null,
            rtpReceiver: null,
            kind: kind,
            mid: null,
            sendEncodingParameters: null,
            recvEncodingParameters: null,
            stream: null,
            associatedRemoteMediaStreams: [],
            wantReceive: true
          };
          if (this.usingBundle && hasBundleTransport) {
            transceiver.iceTransport = this.transceivers[0].iceTransport;
            transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
          } else {
            var transports = this._createIceAndDtlsTransports();
            transceiver.iceTransport = transports.iceTransport;
            transceiver.dtlsTransport = transports.dtlsTransport;
          }
          if (!doNotAdd) {
            this.transceivers.push(transceiver);
          }
          return transceiver;
        };

        RTCPeerConnection.prototype.addTrack = function (track, stream) {
          if (this._isClosed) {
            throw makeError('InvalidStateError',
              'Attempted to call addTrack on a closed peerconnection.');
          }

          var alreadyExists = this.transceivers.find(function (s) {
            return s.track === track;
          });

          if (alreadyExists) {
            throw makeError('InvalidAccessError', 'Track already exists.');
          }

          var transceiver;
          for (var i = 0; i < this.transceivers.length; i++) {
            if (!this.transceivers[i].track &&
              this.transceivers[i].kind === track.kind) {
              transceiver = this.transceivers[i];
            }
          }
          if (!transceiver) {
            transceiver = this._createTransceiver(track.kind);
          }

          this._maybeFireNegotiationNeeded();

          if (this.localStreams.indexOf(stream) === -1) {
            this.localStreams.push(stream);
          }

          transceiver.track = track;
          transceiver.stream = stream;
          transceiver.rtpSender = new window.RTCRtpSender(track,
            transceiver.dtlsTransport);
          return transceiver.rtpSender;
        };

        RTCPeerConnection.prototype.addStream = function (stream) {
          var pc = this;
          if (edgeVersion >= 15025) {
            stream.getTracks().forEach(function (track) {
              pc.addTrack(track, stream);
            });
          } else {
            // Clone is necessary for local demos mostly, attaching directly
            // to two different senders does not work (build 10547).
            // Fixed in 15025 (or earlier)
            var clonedStream = stream.clone();
            stream.getTracks().forEach(function (track, idx) {
              var clonedTrack = clonedStream.getTracks()[idx];
              track.addEventListener('enabled', function (event) {
                clonedTrack.enabled = event.enabled;
              });
            });
            clonedStream.getTracks().forEach(function (track) {
              pc.addTrack(track, clonedStream);
            });
          }
        };

        RTCPeerConnection.prototype.removeTrack = function (sender) {
          if (this._isClosed) {
            throw makeError('InvalidStateError',
              'Attempted to call removeTrack on a closed peerconnection.');
          }

          if (!(sender instanceof window.RTCRtpSender)) {
            throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
              'does not implement interface RTCRtpSender.');
          }

          var transceiver = this.transceivers.find(function (t) {
            return t.rtpSender === sender;
          });

          if (!transceiver) {
            throw makeError('InvalidAccessError',
              'Sender was not created by this connection.');
          }
          var stream = transceiver.stream;

          transceiver.rtpSender.stop();
          transceiver.rtpSender = null;
          transceiver.track = null;
          transceiver.stream = null;

          // remove the stream from the set of local streams
          var localStreams = this.transceivers.map(function (t) {
            return t.stream;
          });
          if (localStreams.indexOf(stream) === -1 &&
            this.localStreams.indexOf(stream) > -1) {
            this.localStreams.splice(this.localStreams.indexOf(stream), 1);
          }

          this._maybeFireNegotiationNeeded();
        };

        RTCPeerConnection.prototype.removeStream = function (stream) {
          var pc = this;
          stream.getTracks().forEach(function (track) {
            var sender = pc.getSenders().find(function (s) {
              return s.track === track;
            });
            if (sender) {
              pc.removeTrack(sender);
            }
          });
        };

        RTCPeerConnection.prototype.getSenders = function () {
          return this.transceivers.filter(function (transceiver) {
              return !!transceiver.rtpSender;
            })
            .map(function (transceiver) {
              return transceiver.rtpSender;
            });
        };

        RTCPeerConnection.prototype.getReceivers = function () {
          return this.transceivers.filter(function (transceiver) {
              return !!transceiver.rtpReceiver;
            })
            .map(function (transceiver) {
              return transceiver.rtpReceiver;
            });
        };


        RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex,
          usingBundle) {
          var pc = this;
          if (usingBundle && sdpMLineIndex > 0) {
            return this.transceivers[0].iceGatherer;
          } else if (this._iceGatherers.length) {
            return this._iceGatherers.shift();
          }
          var iceGatherer = new window.RTCIceGatherer({
            iceServers: this._config.iceServers,
            gatherPolicy: this._config.iceTransportPolicy
          });
          Object.defineProperty(iceGatherer, 'state', {
            value: 'new',
            writable: true
          });

          this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
          this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
            var end = !event.candidate || Object.keys(event.candidate).length === 0;
            // polyfill since RTCIceGatherer.state is not implemented in
            // Edge 10547 yet.
            iceGatherer.state = end ? 'completed' : 'gathering';
            if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
              pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
            }
          };
          iceGatherer.addEventListener('localcandidate',
            this.transceivers[sdpMLineIndex].bufferCandidates);
          return iceGatherer;
        };

        // start gathering from an RTCIceGatherer.
        RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
          var pc = this;
          var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
          if (iceGatherer.onlocalcandidate) {
            return;
          }
          var bufferedCandidateEvents =
            this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
          this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
          iceGatherer.removeEventListener('localcandidate',
            this.transceivers[sdpMLineIndex].bufferCandidates);
          iceGatherer.onlocalcandidate = function (evt) {
            if (pc.usingBundle && sdpMLineIndex > 0) {
              // if we know that we use bundle we can drop candidates with
              // ѕdpMLineIndex > 0. If we don't do this then our state gets
              // confused since we dispose the extra ice gatherer.
              return;
            }
            var event = new Event('icecandidate');
            event.candidate = {
              sdpMid: mid,
              sdpMLineIndex: sdpMLineIndex
            };

            var cand = evt.candidate;
            // Edge emits an empty object for RTCIceCandidateComplete‥
            var end = !cand || Object.keys(cand).length === 0;
            if (end) {
              // polyfill since RTCIceGatherer.state is not implemented in
              // Edge 10547 yet.
              if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
                iceGatherer.state = 'completed';
              }
            } else {
              if (iceGatherer.state === 'new') {
                iceGatherer.state = 'gathering';
              }
              // RTCIceCandidate doesn't have a component, needs to be added
              cand.component = 1;
              // also the usernameFragment. TODO: update SDP to take both variants.
              cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

              var serializedCandidate = SDPUtils.writeCandidate(cand);
              event.candidate = Object.assign(event.candidate,
                SDPUtils.parseCandidate(serializedCandidate));

              event.candidate.candidate = serializedCandidate;
              event.candidate.toJSON = function () {
                return {
                  candidate: event.candidate.candidate,
                  sdpMid: event.candidate.sdpMid,
                  sdpMLineIndex: event.candidate.sdpMLineIndex,
                  usernameFragment: event.candidate.usernameFragment
                };
              };
            }

            // update local description.
            var sections = SDPUtils.getMediaSections(pc.localDescription.sdp);
            if (!end) {
              sections[event.candidate.sdpMLineIndex] +=
                'a=' + event.candidate.candidate + '\r\n';
            } else {
              sections[event.candidate.sdpMLineIndex] +=
                'a=end-of-candidates\r\n';
            }
            pc.localDescription.sdp =
              SDPUtils.getDescription(pc.localDescription.sdp) +
              sections.join('');
            var complete = pc.transceivers.every(function (transceiver) {
              return transceiver.iceGatherer &&
                transceiver.iceGatherer.state === 'completed';
            });

            if (pc.iceGatheringState !== 'gathering') {
              pc.iceGatheringState = 'gathering';
              pc._emitGatheringStateChange();
            }

            // Emit candidate. Also emit null candidate when all gatherers are
            // complete.
            if (!end) {
              pc._dispatchEvent('icecandidate', event);
            }
            if (complete) {
              pc._dispatchEvent('icecandidate', new Event('icecandidate'));
              pc.iceGatheringState = 'complete';
              pc._emitGatheringStateChange();
            }
          };

          // emit already gathered candidates.
          window.setTimeout(function () {
            bufferedCandidateEvents.forEach(function (e) {
              iceGatherer.onlocalcandidate(e);
            });
          }, 0);
        };

        // Create ICE transport and DTLS transport.
        RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
          var pc = this;
          var iceTransport = new window.RTCIceTransport(null);
          iceTransport.onicestatechange = function () {
            pc._updateIceConnectionState();
            pc._updateConnectionState();
          };

          var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
          dtlsTransport.ondtlsstatechange = function () {
            pc._updateConnectionState();
          };
          dtlsTransport.onerror = function () {
            // onerror does not set state to failed by itself.
            Object.defineProperty(dtlsTransport, 'state', {
              value: 'failed',
              writable: true
            });
            pc._updateConnectionState();
          };

          return {
            iceTransport: iceTransport,
            dtlsTransport: dtlsTransport
          };
        };

        // Destroy ICE gatherer, ICE transport and DTLS transport.
        // Without triggering the callbacks.
        RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (
          sdpMLineIndex) {
          var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
          if (iceGatherer) {
            delete iceGatherer.onlocalcandidate;
            delete this.transceivers[sdpMLineIndex].iceGatherer;
          }
          var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
          if (iceTransport) {
            delete iceTransport.onicestatechange;
            delete this.transceivers[sdpMLineIndex].iceTransport;
          }
          var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
          if (dtlsTransport) {
            delete dtlsTransport.ondtlsstatechange;
            delete dtlsTransport.onerror;
            delete this.transceivers[sdpMLineIndex].dtlsTransport;
          }
        };

        // Start the RTP Sender and Receiver for a transceiver.
        RTCPeerConnection.prototype._transceive = function (transceiver,
          send, recv) {
          var params = getCommonCapabilities(transceiver.localCapabilities,
            transceiver.remoteCapabilities);
          if (send && transceiver.rtpSender) {
            params.encodings = transceiver.sendEncodingParameters;
            params.rtcp = {
              cname: SDPUtils.localCName,
              compound: transceiver.rtcpParameters.compound
            };
            if (transceiver.recvEncodingParameters.length) {
              params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
            }
            transceiver.rtpSender.send(params);
          }
          if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
            // remove RTX field in Edge 14942
            if (transceiver.kind === 'video' &&
              transceiver.recvEncodingParameters &&
              edgeVersion < 15019) {
              transceiver.recvEncodingParameters.forEach(function (p) {
                delete p.rtx;
              });
            }
            if (transceiver.recvEncodingParameters.length) {
              params.encodings = transceiver.recvEncodingParameters;
            } else {
              params.encodings = [{}];
            }
            params.rtcp = {
              compound: transceiver.rtcpParameters.compound
            };
            if (transceiver.rtcpParameters.cname) {
              params.rtcp.cname = transceiver.rtcpParameters.cname;
            }
            if (transceiver.sendEncodingParameters.length) {
              params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
            }
            transceiver.rtpReceiver.receive(params);
          }
        };

        RTCPeerConnection.prototype.setLocalDescription = function (description) {
          var pc = this;

          // Note: pranswer is not supported.
          if (['offer', 'answer'].indexOf(description.type) === -1) {
            return Promise.reject(makeError('TypeError',
              'Unsupported type "' + description.type + '"'));
          }

          if (!isActionAllowedInSignalingState('setLocalDescription',
              description.type, pc.signalingState) || pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError',
              'Can not set local ' + description.type +
              ' in state ' + pc.signalingState));
          }

          var sections;
          var sessionpart;
          if (description.type === 'offer') {
            // VERY limited support for SDP munging. Limited to:
            // * changing the order of codecs
            sections = SDPUtils.splitSections(description.sdp);
            sessionpart = sections.shift();
            sections.forEach(function (mediaSection, sdpMLineIndex) {
              var caps = SDPUtils.parseRtpParameters(mediaSection);
              pc.transceivers[sdpMLineIndex].localCapabilities = caps;
            });

            pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
              pc._gather(transceiver.mid, sdpMLineIndex);
            });
          } else if (description.type === 'answer') {
            sections = SDPUtils.splitSections(pc.remoteDescription.sdp);
            sessionpart = sections.shift();
            var isIceLite = SDPUtils.matchPrefix(sessionpart,
              'a=ice-lite').length > 0;
            sections.forEach(function (mediaSection, sdpMLineIndex) {
              var transceiver = pc.transceivers[sdpMLineIndex];
              var iceGatherer = transceiver.iceGatherer;
              var iceTransport = transceiver.iceTransport;
              var dtlsTransport = transceiver.dtlsTransport;
              var localCapabilities = transceiver.localCapabilities;
              var remoteCapabilities = transceiver.remoteCapabilities;

              // treat bundle-only as not-rejected.
              var rejected = SDPUtils.isRejected(mediaSection) &&
                SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

              if (!rejected && !transceiver.rejected) {
                var remoteIceParameters = SDPUtils.getIceParameters(
                  mediaSection, sessionpart);
                var remoteDtlsParameters = SDPUtils.getDtlsParameters(
                  mediaSection, sessionpart);
                if (isIceLite) {
                  remoteDtlsParameters.role = 'server';
                }

                if (!pc.usingBundle || sdpMLineIndex === 0) {
                  pc._gather(transceiver.mid, sdpMLineIndex);
                  if (iceTransport.state === 'new') {
                    iceTransport.start(iceGatherer, remoteIceParameters,
                      isIceLite ? 'controlling' : 'controlled');
                  }
                  if (dtlsTransport.state === 'new') {
                    dtlsTransport.start(remoteDtlsParameters);
                  }
                }

                // Calculate intersection of capabilities.
                var params = getCommonCapabilities(localCapabilities,
                  remoteCapabilities);

                // Start the RTCRtpSender. The RTCRtpReceiver for this
                // transceiver has already been started in setRemoteDescription.
                pc._transceive(transceiver,
                  params.codecs.length > 0,
                  false);
              }
            });
          }

          pc.localDescription = {
            type: description.type,
            sdp: description.sdp
          };
          if (description.type === 'offer') {
            pc._updateSignalingState('have-local-offer');
          } else {
            pc._updateSignalingState('stable');
          }

          return Promise.resolve();
        };

        RTCPeerConnection.prototype.setRemoteDescription = function (description) {
          var pc = this;

          // Note: pranswer is not supported.
          if (['offer', 'answer'].indexOf(description.type) === -1) {
            return Promise.reject(makeError('TypeError',
              'Unsupported type "' + description.type + '"'));
          }

          if (!isActionAllowedInSignalingState('setRemoteDescription',
              description.type, pc.signalingState) || pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError',
              'Can not set remote ' + description.type +
              ' in state ' + pc.signalingState));
          }

          var streams = {};
          pc.remoteStreams.forEach(function (stream) {
            streams[stream.id] = stream;
          });
          var receiverList = [];
          var sections = SDPUtils.splitSections(description.sdp);
          var sessionpart = sections.shift();
          var isIceLite = SDPUtils.matchPrefix(sessionpart,
            'a=ice-lite').length > 0;
          var usingBundle = SDPUtils.matchPrefix(sessionpart,
            'a=group:BUNDLE ').length > 0;
          pc.usingBundle = usingBundle;
          var iceOptions = SDPUtils.matchPrefix(sessionpart,
            'a=ice-options:')[0];
          if (iceOptions) {
            pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
              .indexOf('trickle') >= 0;
          } else {
            pc.canTrickleIceCandidates = false;
          }

          sections.forEach(function (mediaSection, sdpMLineIndex) {
            var lines = SDPUtils.splitLines(mediaSection);
            var kind = SDPUtils.getKind(mediaSection);
            // treat bundle-only as not-rejected.
            var rejected = SDPUtils.isRejected(mediaSection) &&
              SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
            var protocol = lines[0].substr(2).split(' ')[2];

            var direction = SDPUtils.getDirection(mediaSection, sessionpart);
            var remoteMsid = SDPUtils.parseMsid(mediaSection);

            var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

            // Reject datachannels which are not implemented yet.
            if ((kind === 'application' && protocol === 'DTLS/SCTP') || rejected) {
              // TODO: this is dangerous in the case where a non-rejected m-line
              //     becomes rejected.
              pc.transceivers[sdpMLineIndex] = {
                mid: mid,
                kind: kind,
                rejected: true
              };
              return;
            }

            if (!rejected && pc.transceivers[sdpMLineIndex] &&
              pc.transceivers[sdpMLineIndex].rejected) {
              // recycle a rejected transceiver.
              pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
            }

            var transceiver;
            var iceGatherer;
            var iceTransport;
            var dtlsTransport;
            var rtpReceiver;
            var sendEncodingParameters;
            var recvEncodingParameters;
            var localCapabilities;

            var track;
            // FIXME: ensure the mediaSection has rtcp-mux set.
            var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
            var remoteIceParameters;
            var remoteDtlsParameters;
            if (!rejected) {
              remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                sessionpart);
              remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
                sessionpart);
              remoteDtlsParameters.role = 'client';
            }
            recvEncodingParameters =
              SDPUtils.parseRtpEncodingParameters(mediaSection);

            var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

            var isComplete = SDPUtils.matchPrefix(mediaSection,
              'a=end-of-candidates', sessionpart).length > 0;
            var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
              .map(function (cand) {
                return SDPUtils.parseCandidate(cand);
              })
              .filter(function (cand) {
                return cand.component === 1;
              });

            // Check if we can use BUNDLE and dispose transports.
            if ((description.type === 'offer' || description.type === 'answer') &&
              !rejected && usingBundle && sdpMLineIndex > 0 &&
              pc.transceivers[sdpMLineIndex]) {
              pc._disposeIceAndDtlsTransports(sdpMLineIndex);
              pc.transceivers[sdpMLineIndex].iceGatherer =
                pc.transceivers[0].iceGatherer;
              pc.transceivers[sdpMLineIndex].iceTransport =
                pc.transceivers[0].iceTransport;
              pc.transceivers[sdpMLineIndex].dtlsTransport =
                pc.transceivers[0].dtlsTransport;
              if (pc.transceivers[sdpMLineIndex].rtpSender) {
                pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
                  pc.transceivers[0].dtlsTransport);
              }
              if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
                pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
                  pc.transceivers[0].dtlsTransport);
              }
            }
            if (description.type === 'offer' && !rejected) {
              transceiver = pc.transceivers[sdpMLineIndex] ||
                pc._createTransceiver(kind);
              transceiver.mid = mid;

              if (!transceiver.iceGatherer) {
                transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
                  usingBundle);
              }

              if (cands.length && transceiver.iceTransport.state === 'new') {
                if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
                  transceiver.iceTransport.setRemoteCandidates(cands);
                } else {
                  cands.forEach(function (candidate) {
                    maybeAddCandidate(transceiver.iceTransport, candidate);
                  });
                }
              }

              localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

              // filter RTX until additional stuff needed for RTX is implemented
              // in adapter.js
              if (edgeVersion < 15019) {
                localCapabilities.codecs = localCapabilities.codecs.filter(
                  function (codec) {
                    return codec.name !== 'rtx';
                  });
              }

              sendEncodingParameters = transceiver.sendEncodingParameters || [{
                ssrc: (2 * sdpMLineIndex + 2) * 1001
              }];

              // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
              var isNewTrack = false;
              if (direction === 'sendrecv' || direction === 'sendonly') {
                isNewTrack = !transceiver.rtpReceiver;
                rtpReceiver = transceiver.rtpReceiver ||
                  new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

                if (isNewTrack) {
                  var stream;
                  track = rtpReceiver.track;
                  // FIXME: does not work with Plan B.
                  if (remoteMsid && remoteMsid.stream === '-') {
                    // no-op. a stream id of '-' means: no associated stream.
                  } else if (remoteMsid) {
                    if (!streams[remoteMsid.stream]) {
                      streams[remoteMsid.stream] = new window.MediaStream();
                      Object.defineProperty(streams[remoteMsid.stream], 'id', {
                        get: function () {
                          return remoteMsid.stream;
                        }
                      });
                    }
                    Object.defineProperty(track, 'id', {
                      get: function () {
                        return remoteMsid.track;
                      }
                    });
                    stream = streams[remoteMsid.stream];
                  } else {
                    if (!streams.default) {
                      streams.default = new window.MediaStream();
                    }
                    stream = streams.default;
                  }
                  if (stream) {
                    addTrackToStreamAndFireEvent(track, stream);
                    transceiver.associatedRemoteMediaStreams.push(stream);
                  }
                  receiverList.push([track, rtpReceiver, stream]);
                }
              } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
                transceiver.associatedRemoteMediaStreams.forEach(function (s) {
                  var nativeTrack = s.getTracks().find(function (t) {
                    return t.id === transceiver.rtpReceiver.track.id;
                  });
                  if (nativeTrack) {
                    removeTrackFromStreamAndFireEvent(nativeTrack, s);
                  }
                });
                transceiver.associatedRemoteMediaStreams = [];
              }

              transceiver.localCapabilities = localCapabilities;
              transceiver.remoteCapabilities = remoteCapabilities;
              transceiver.rtpReceiver = rtpReceiver;
              transceiver.rtcpParameters = rtcpParameters;
              transceiver.sendEncodingParameters = sendEncodingParameters;
              transceiver.recvEncodingParameters = recvEncodingParameters;

              // Start the RTCRtpReceiver now. The RTPSender is started in
              // setLocalDescription.
              pc._transceive(pc.transceivers[sdpMLineIndex],
                false,
                isNewTrack);
            } else if (description.type === 'answer' && !rejected) {
              transceiver = pc.transceivers[sdpMLineIndex];
              iceGatherer = transceiver.iceGatherer;
              iceTransport = transceiver.iceTransport;
              dtlsTransport = transceiver.dtlsTransport;
              rtpReceiver = transceiver.rtpReceiver;
              sendEncodingParameters = transceiver.sendEncodingParameters;
              localCapabilities = transceiver.localCapabilities;

              pc.transceivers[sdpMLineIndex].recvEncodingParameters =
                recvEncodingParameters;
              pc.transceivers[sdpMLineIndex].remoteCapabilities =
                remoteCapabilities;
              pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

              if (cands.length && iceTransport.state === 'new') {
                if ((isIceLite || isComplete) &&
                  (!usingBundle || sdpMLineIndex === 0)) {
                  iceTransport.setRemoteCandidates(cands);
                } else {
                  cands.forEach(function (candidate) {
                    maybeAddCandidate(transceiver.iceTransport, candidate);
                  });
                }
              }

              if (!usingBundle || sdpMLineIndex === 0) {
                if (iceTransport.state === 'new') {
                  iceTransport.start(iceGatherer, remoteIceParameters,
                    'controlling');
                }
                if (dtlsTransport.state === 'new') {
                  dtlsTransport.start(remoteDtlsParameters);
                }
              }

              pc._transceive(transceiver,
                direction === 'sendrecv' || direction === 'recvonly',
                direction === 'sendrecv' || direction === 'sendonly');

              // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
              if (rtpReceiver &&
                (direction === 'sendrecv' || direction === 'sendonly')) {
                track = rtpReceiver.track;
                if (remoteMsid) {
                  if (!streams[remoteMsid.stream]) {
                    streams[remoteMsid.stream] = new window.MediaStream();
                  }
                  addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
                  receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
                } else {
                  if (!streams.default) {
                    streams.default = new window.MediaStream();
                  }
                  addTrackToStreamAndFireEvent(track, streams.default);
                  receiverList.push([track, rtpReceiver, streams.default]);
                }
              } else {
                // FIXME: actually the receiver should be created later.
                delete transceiver.rtpReceiver;
              }
            }
          });

          if (pc._dtlsRole === undefined) {
            pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
          }

          pc.remoteDescription = {
            type: description.type,
            sdp: description.sdp
          };
          if (description.type === 'offer') {
            pc._updateSignalingState('have-remote-offer');
          } else {
            pc._updateSignalingState('stable');
          }
          Object.keys(streams).forEach(function (sid) {
            var stream = streams[sid];
            if (stream.getTracks().length) {
              if (pc.remoteStreams.indexOf(stream) === -1) {
                pc.remoteStreams.push(stream);
                var event = new Event('addstream');
                event.stream = stream;
                window.setTimeout(function () {
                  pc._dispatchEvent('addstream', event);
                });
              }

              receiverList.forEach(function (item) {
                var track = item[0];
                var receiver = item[1];
                if (stream.id !== item[2].id) {
                  return;
                }
                fireAddTrack(pc, track, receiver, [stream]);
              });
            }
          });
          receiverList.forEach(function (item) {
            if (item[2]) {
              return;
            }
            fireAddTrack(pc, item[0], item[1], []);
          });

          // check whether addIceCandidate({}) was called within four seconds after
          // setRemoteDescription.
          window.setTimeout(function () {
            if (!(pc && pc.transceivers)) {
              return;
            }
            pc.transceivers.forEach(function (transceiver) {
              if (transceiver.iceTransport &&
                transceiver.iceTransport.state === 'new' &&
                transceiver.iceTransport.getRemoteCandidates().length > 0) {
                console.warn('Timeout for addRemoteCandidate. Consider sending ' +
                  'an end-of-candidates notification');
                transceiver.iceTransport.addRemoteCandidate({});
              }
            });
          }, 4000);

          return Promise.resolve();
        };

        RTCPeerConnection.prototype.close = function () {
          this.transceivers.forEach(function (transceiver) {
            /* not yet
            if (transceiver.iceGatherer) {
              transceiver.iceGatherer.close();
            }
            */
            if (transceiver.iceTransport) {
              transceiver.iceTransport.stop();
            }
            if (transceiver.dtlsTransport) {
              transceiver.dtlsTransport.stop();
            }
            if (transceiver.rtpSender) {
              transceiver.rtpSender.stop();
            }
            if (transceiver.rtpReceiver) {
              transceiver.rtpReceiver.stop();
            }
          });
          // FIXME: clean up tracks, local streams, remote streams, etc
          this._isClosed = true;
          this._updateSignalingState('closed');
        };

        // Update the signaling state.
        RTCPeerConnection.prototype._updateSignalingState = function (newState) {
          this.signalingState = newState;
          var event = new Event('signalingstatechange');
          this._dispatchEvent('signalingstatechange', event);
        };

        // Determine whether to fire the negotiationneeded event.
        RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
          var pc = this;
          if (this.signalingState !== 'stable' || this.needNegotiation === true) {
            return;
          }
          this.needNegotiation = true;
          window.setTimeout(function () {
            if (pc.needNegotiation) {
              pc.needNegotiation = false;
              var event = new Event('negotiationneeded');
              pc._dispatchEvent('negotiationneeded', event);
            }
          }, 0);
        };

        // Update the ice connection state.
        RTCPeerConnection.prototype._updateIceConnectionState = function () {
          var newState;
          var states = {
            'new': 0,
            closed: 0,
            checking: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
          };
          this.transceivers.forEach(function (transceiver) {
            states[transceiver.iceTransport.state]++;
          });

          newState = 'new';
          if (states.failed > 0) {
            newState = 'failed';
          } else if (states.checking > 0) {
            newState = 'checking';
          } else if (states.disconnected > 0) {
            newState = 'disconnected';
          } else if (states.new > 0) {
            newState = 'new';
          } else if (states.connected > 0) {
            newState = 'connected';
          } else if (states.completed > 0) {
            newState = 'completed';
          }

          if (newState !== this.iceConnectionState) {
            this.iceConnectionState = newState;
            var event = new Event('iceconnectionstatechange');
            this._dispatchEvent('iceconnectionstatechange', event);
          }
        };

        // Update the connection state.
        RTCPeerConnection.prototype._updateConnectionState = function () {
          var newState;
          var states = {
            'new': 0,
            closed: 0,
            connecting: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
          };
          this.transceivers.forEach(function (transceiver) {
            states[transceiver.iceTransport.state]++;
            states[transceiver.dtlsTransport.state]++;
          });
          // ICETransport.completed and connected are the same for this purpose.
          states.connected += states.completed;

          newState = 'new';
          if (states.failed > 0) {
            newState = 'failed';
          } else if (states.connecting > 0) {
            newState = 'connecting';
          } else if (states.disconnected > 0) {
            newState = 'disconnected';
          } else if (states.new > 0) {
            newState = 'new';
          } else if (states.connected > 0) {
            newState = 'connected';
          }

          if (newState !== this.connectionState) {
            this.connectionState = newState;
            var event = new Event('connectionstatechange');
            this._dispatchEvent('connectionstatechange', event);
          }
        };

        RTCPeerConnection.prototype.createOffer = function () {
          var pc = this;

          if (pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError',
              'Can not call createOffer after close'));
          }

          var numAudioTracks = pc.transceivers.filter(function (t) {
            return t.kind === 'audio';
          }).length;
          var numVideoTracks = pc.transceivers.filter(function (t) {
            return t.kind === 'video';
          }).length;

          // Determine number of audio and video tracks we need to send/recv.
          var offerOptions = arguments[0];
          if (offerOptions) {
            // Reject Chrome legacy constraints.
            if (offerOptions.mandatory || offerOptions.optional) {
              throw new TypeError(
                'Legacy mandatory/optional constraints not supported.');
            }
            if (offerOptions.offerToReceiveAudio !== undefined) {
              if (offerOptions.offerToReceiveAudio === true) {
                numAudioTracks = 1;
              } else if (offerOptions.offerToReceiveAudio === false) {
                numAudioTracks = 0;
              } else {
                numAudioTracks = offerOptions.offerToReceiveAudio;
              }
            }
            if (offerOptions.offerToReceiveVideo !== undefined) {
              if (offerOptions.offerToReceiveVideo === true) {
                numVideoTracks = 1;
              } else if (offerOptions.offerToReceiveVideo === false) {
                numVideoTracks = 0;
              } else {
                numVideoTracks = offerOptions.offerToReceiveVideo;
              }
            }
          }

          pc.transceivers.forEach(function (transceiver) {
            if (transceiver.kind === 'audio') {
              numAudioTracks--;
              if (numAudioTracks < 0) {
                transceiver.wantReceive = false;
              }
            } else if (transceiver.kind === 'video') {
              numVideoTracks--;
              if (numVideoTracks < 0) {
                transceiver.wantReceive = false;
              }
            }
          });

          // Create M-lines for recvonly streams.
          while (numAudioTracks > 0 || numVideoTracks > 0) {
            if (numAudioTracks > 0) {
              pc._createTransceiver('audio');
              numAudioTracks--;
            }
            if (numVideoTracks > 0) {
              pc._createTransceiver('video');
              numVideoTracks--;
            }
          }

          var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
            pc._sdpSessionVersion++);
          pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
            // For each track, create an ice gatherer, ice transport,
            // dtls transport, potentially rtpsender and rtpreceiver.
            var track = transceiver.track;
            var kind = transceiver.kind;
            var mid = transceiver.mid || SDPUtils.generateIdentifier();
            transceiver.mid = mid;

            if (!transceiver.iceGatherer) {
              transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
                pc.usingBundle);
            }

            var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
            // filter RTX until additional stuff needed for RTX is implemented
            // in adapter.js
            if (edgeVersion < 15019) {
              localCapabilities.codecs = localCapabilities.codecs.filter(
                function (codec) {
                  return codec.name !== 'rtx';
                });
            }
            localCapabilities.codecs.forEach(function (codec) {
              // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
              // by adding level-asymmetry-allowed=1
              if (codec.name === 'H264' &&
                codec.parameters['level-asymmetry-allowed'] === undefined) {
                codec.parameters['level-asymmetry-allowed'] = '1';
              }

              // for subsequent offers, we might have to re-use the payload
              // type of the last offer.
              if (transceiver.remoteCapabilities &&
                transceiver.remoteCapabilities.codecs) {
                transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
                  if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                    codec.clockRate === remoteCodec.clockRate) {
                    codec.preferredPayloadType = remoteCodec.payloadType;
                  }
                });
              }
            });
            localCapabilities.headerExtensions.forEach(function (hdrExt) {
              var remoteExtensions = transceiver.remoteCapabilities &&
                transceiver.remoteCapabilities.headerExtensions || [];
              remoteExtensions.forEach(function (rHdrExt) {
                if (hdrExt.uri === rHdrExt.uri) {
                  hdrExt.id = rHdrExt.id;
                }
              });
            });

            // generate an ssrc now, to be used later in rtpSender.send
            var sendEncodingParameters = transceiver.sendEncodingParameters || [{
              ssrc: (2 * sdpMLineIndex + 1) * 1001
            }];
            if (track) {
              // add RTX
              if (edgeVersion >= 15019 && kind === 'video' &&
                !sendEncodingParameters[0].rtx) {
                sendEncodingParameters[0].rtx = {
                  ssrc: sendEncodingParameters[0].ssrc + 1
                };
              }
            }

            if (transceiver.wantReceive) {
              transceiver.rtpReceiver = new window.RTCRtpReceiver(
                transceiver.dtlsTransport, kind);
            }

            transceiver.localCapabilities = localCapabilities;
            transceiver.sendEncodingParameters = sendEncodingParameters;
          });

          // always offer BUNDLE and dispose on return if not supported.
          if (pc._config.bundlePolicy !== 'max-compat') {
            sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
              return t.mid;
            }).join(' ') + '\r\n';
          }
          sdp += 'a=ice-options:trickle\r\n';

          pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
            sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
              'offer', transceiver.stream, pc._dtlsRole);
            sdp += 'a=rtcp-rsize\r\n';

            if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
              (sdpMLineIndex === 0 || !pc.usingBundle)) {
              transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
                cand.component = 1;
                sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
              });

              if (transceiver.iceGatherer.state === 'completed') {
                sdp += 'a=end-of-candidates\r\n';
              }
            }
          });

          var desc = new window.RTCSessionDescription({
            type: 'offer',
            sdp: sdp
          });
          return Promise.resolve(desc);
        };

        RTCPeerConnection.prototype.createAnswer = function () {
          var pc = this;

          if (pc._isClosed) {
            return Promise.reject(makeError('InvalidStateError',
              'Can not call createAnswer after close'));
          }

          if (!(pc.signalingState === 'have-remote-offer' ||
              pc.signalingState === 'have-local-pranswer')) {
            return Promise.reject(makeError('InvalidStateError',
              'Can not call createAnswer in signalingState ' + pc.signalingState));
          }

          var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
            pc._sdpSessionVersion++);
          if (pc.usingBundle) {
            sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
              return t.mid;
            }).join(' ') + '\r\n';
          }
          var mediaSectionsInOffer = SDPUtils.getMediaSections(
            pc.remoteDescription.sdp).length;
          pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
            if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
              return;
            }
            if (transceiver.rejected) {
              if (transceiver.kind === 'application') {
                sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
              } else if (transceiver.kind === 'audio') {
                sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
                  'a=rtpmap:0 PCMU/8000\r\n';
              } else if (transceiver.kind === 'video') {
                sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
                  'a=rtpmap:120 VP8/90000\r\n';
              }
              sdp += 'c=IN IP4 0.0.0.0\r\n' +
                'a=inactive\r\n' +
                'a=mid:' + transceiver.mid + '\r\n';
              return;
            }

            // FIXME: look at direction.
            if (transceiver.stream) {
              var localTrack;
              if (transceiver.kind === 'audio') {
                localTrack = transceiver.stream.getAudioTracks()[0];
              } else if (transceiver.kind === 'video') {
                localTrack = transceiver.stream.getVideoTracks()[0];
              }
              if (localTrack) {
                // add RTX
                if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
                  !transceiver.sendEncodingParameters[0].rtx) {
                  transceiver.sendEncodingParameters[0].rtx = {
                    ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
                  };
                }
              }
            }

            // Calculate intersection of capabilities.
            var commonCapabilities = getCommonCapabilities(
              transceiver.localCapabilities,
              transceiver.remoteCapabilities);

            var hasRtx = commonCapabilities.codecs.filter(function (c) {
              return c.name.toLowerCase() === 'rtx';
            }).length;
            if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
              delete transceiver.sendEncodingParameters[0].rtx;
            }

            sdp += writeMediaSection(transceiver, commonCapabilities,
              'answer', transceiver.stream, pc._dtlsRole);
            if (transceiver.rtcpParameters &&
              transceiver.rtcpParameters.reducedSize) {
              sdp += 'a=rtcp-rsize\r\n';
            }
          });

          var desc = new window.RTCSessionDescription({
            type: 'answer',
            sdp: sdp
          });
          return Promise.resolve(desc);
        };

        RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
          var pc = this;
          var sections;
          if (candidate && !(candidate.sdpMLineIndex !== undefined ||
              candidate.sdpMid)) {
            return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
          }

          // TODO: needs to go into ops queue.
          return new Promise(function (resolve, reject) {
            if (!pc.remoteDescription) {
              return reject(makeError('InvalidStateError',
                'Can not add ICE candidate without a remote description'));
            } else if (!candidate || candidate.candidate === '') {
              for (var j = 0; j < pc.transceivers.length; j++) {
                if (pc.transceivers[j].rejected) {
                  continue;
                }
                pc.transceivers[j].iceTransport.addRemoteCandidate({});
                sections = SDPUtils.getMediaSections(pc.remoteDescription.sdp);
                sections[j] += 'a=end-of-candidates\r\n';
                pc.remoteDescription.sdp =
                  SDPUtils.getDescription(pc.remoteDescription.sdp) +
                  sections.join('');
                if (pc.usingBundle) {
                  break;
                }
              }
            } else {
              var sdpMLineIndex = candidate.sdpMLineIndex;
              if (candidate.sdpMid) {
                for (var i = 0; i < pc.transceivers.length; i++) {
                  if (pc.transceivers[i].mid === candidate.sdpMid) {
                    sdpMLineIndex = i;
                    break;
                  }
                }
              }
              var transceiver = pc.transceivers[sdpMLineIndex];
              if (transceiver) {
                if (transceiver.rejected) {
                  return resolve();
                }
                var cand = Object.keys(candidate.candidate).length > 0 ?
                  SDPUtils.parseCandidate(candidate.candidate) : {};
                // Ignore Chrome's invalid candidates since Edge does not like them.
                if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
                  return resolve();
                }
                // Ignore RTCP candidates, we assume RTCP-MUX.
                if (cand.component && cand.component !== 1) {
                  return resolve();
                }
                // when using bundle, avoid adding candidates to the wrong
                // ice transport. And avoid adding candidates added in the SDP.
                if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
                    transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
                  if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
                    return reject(makeError('OperationError',
                      'Can not add ICE candidate'));
                  }
                }

                // update the remoteDescription.
                var candidateString = candidate.candidate.trim();
                if (candidateString.indexOf('a=') === 0) {
                  candidateString = candidateString.substr(2);
                }
                sections = SDPUtils.getMediaSections(pc.remoteDescription.sdp);
                sections[sdpMLineIndex] += 'a=' +
                  (cand.type ? candidateString : 'end-of-candidates') +
                  '\r\n';
                pc.remoteDescription.sdp =
                  SDPUtils.getDescription(pc.remoteDescription.sdp) +
                  sections.join('');
              } else {
                return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
              }
            }
            resolve();
          });
        };

        RTCPeerConnection.prototype.getStats = function () {
          var promises = [];
          this.transceivers.forEach(function (transceiver) {
            ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
              'dtlsTransport'
            ].forEach(function (method) {
              if (transceiver[method]) {
                promises.push(transceiver[method].getStats());
              }
            });
          });
          var fixStatsType = function (stat) {
            return {
              inboundrtp: 'inbound-rtp',
              outboundrtp: 'outbound-rtp',
              candidatepair: 'candidate-pair',
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            } [stat.type] || stat.type;
          };
          return new Promise(function (resolve) {
            // shim getStats with maplike support
            var results = new Map();
            Promise.all(promises).then(function (res) {
              res.forEach(function (result) {
                Object.keys(result).forEach(function (id) {
                  result[id].type = fixStatsType(result[id]);
                  results.set(id, result[id]);
                });
              });
              resolve(results);
            });
          });
        };

        // legacy callback shims. Should be moved to adapter.js some days.
        var methods = ['createOffer', 'createAnswer'];
        methods.forEach(function (method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function () {
            var args = arguments;
            if (typeof args[0] === 'function' ||
              typeof args[1] === 'function') { // legacy
              return nativeMethod.apply(this, [arguments[2]])
                .then(function (description) {
                  if (typeof args[0] === 'function') {
                    args[0].apply(null, [description]);
                  }
                }, function (error) {
                  if (typeof args[1] === 'function') {
                    args[1].apply(null, [error]);
                  }
                });
            }
            return nativeMethod.apply(this, arguments);
          };
        });

        methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
        methods.forEach(function (method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function () {
            var args = arguments;
            if (typeof args[1] === 'function' ||
              typeof args[2] === 'function') { // legacy
              return nativeMethod.apply(this, arguments)
                .then(function () {
                  if (typeof args[1] === 'function') {
                    args[1].apply(null);
                  }
                }, function (error) {
                  if (typeof args[2] === 'function') {
                    args[2].apply(null, [error]);
                  }
                });
            }
            return nativeMethod.apply(this, arguments);
          };
        });

        // getStats is special. It doesn't have a spec legacy method yet we support
        // getStats(something, cb) without error callbacks.
        ['getStats'].forEach(function (method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function () {
            var args = arguments;
            if (typeof args[1] === 'function') {
              return nativeMethod.apply(this, arguments)
                .then(function () {
                  if (typeof args[1] === 'function') {
                    args[1].apply(null);
                  }
                });
            }
            return nativeMethod.apply(this, arguments);
          };
        });

        return RTCPeerConnection;
      };

    }, {
      "sdp": 2
    }],
    2: [function (require, module, exports) {
      /* eslint-env node */
      'use strict';

      // SDP helpers.
      var SDPUtils = {};

      // Generate an alphanumeric identifier for cname or mids.
      // TODO: use UUIDs instead? https://gist.github.com/jed/982883
      SDPUtils.generateIdentifier = function () {
        return Math.random().toString(36).substr(2, 10);
      };

      // The RTCP CNAME used by all peerconnections from the same JS.
      SDPUtils.localCName = SDPUtils.generateIdentifier();

      // Splits SDP into lines, dealing with both CRLF and LF.
      SDPUtils.splitLines = function (blob) {
        return blob.trim().split('\n').map(function (line) {
          return line.trim();
        });
      };
      // Splits SDP into sessionpart and mediasections. Ensures CRLF.
      SDPUtils.splitSections = function (blob) {
        var parts = blob.split('\nm=');
        return parts.map(function (part, index) {
          return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
        });
      };

      // returns the session description.
      SDPUtils.getDescription = function (blob) {
        var sections = SDPUtils.splitSections(blob);
        return sections && sections[0];
      };

      // returns the individual media sections.
      SDPUtils.getMediaSections = function (blob) {
        var sections = SDPUtils.splitSections(blob);
        sections.shift();
        return sections;
      };

      // Returns lines that start with a certain prefix.
      SDPUtils.matchPrefix = function (blob, prefix) {
        return SDPUtils.splitLines(blob).filter(function (line) {
          return line.indexOf(prefix) === 0;
        });
      };

      // Parses an ICE candidate line. Sample input:
      // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
      // rport 55996"
      SDPUtils.parseCandidate = function (line) {
        var parts;
        // Parse both variants.
        if (line.indexOf('a=candidate:') === 0) {
          parts = line.substring(12).split(' ');
        } else {
          parts = line.substring(10).split(' ');
        }

        var candidate = {
          foundation: parts[0],
          component: parseInt(parts[1], 10),
          protocol: parts[2].toLowerCase(),
          priority: parseInt(parts[3], 10),
          ip: parts[4],
          port: parseInt(parts[5], 10),
          // skip parts[6] == 'typ'
          type: parts[7]
        };

        for (var i = 8; i < parts.length; i += 2) {
          switch (parts[i]) {
            case 'raddr':
              candidate.relatedAddress = parts[i + 1];
              break;
            case 'rport':
              candidate.relatedPort = parseInt(parts[i + 1], 10);
              break;
            case 'tcptype':
              candidate.tcpType = parts[i + 1];
              break;
            case 'ufrag':
              candidate.ufrag = parts[i + 1]; // for backward compability.
              candidate.usernameFragment = parts[i + 1];
              break;
            default: // extension handling, in particular ufrag
              candidate[parts[i]] = parts[i + 1];
              break;
          }
        }
        return candidate;
      };

      // Translates a candidate object into SDP candidate attribute.
      SDPUtils.writeCandidate = function (candidate) {
        var sdp = [];
        sdp.push(candidate.foundation);
        sdp.push(candidate.component);
        sdp.push(candidate.protocol.toUpperCase());
        sdp.push(candidate.priority);
        sdp.push(candidate.ip);
        sdp.push(candidate.port);

        var type = candidate.type;
        sdp.push('typ');
        sdp.push(type);
        if (type !== 'host' && candidate.relatedAddress &&
          candidate.relatedPort) {
          sdp.push('raddr');
          sdp.push(candidate.relatedAddress); // was: relAddr
          sdp.push('rport');
          sdp.push(candidate.relatedPort); // was: relPort
        }
        if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
          sdp.push('tcptype');
          sdp.push(candidate.tcpType);
        }
        if (candidate.usernameFragment || candidate.ufrag) {
          sdp.push('ufrag');
          sdp.push(candidate.usernameFragment || candidate.ufrag);
        }
        return 'candidate:' + sdp.join(' ');
      };

      // Parses an ice-options line, returns an array of option tags.
      // a=ice-options:foo bar
      SDPUtils.parseIceOptions = function (line) {
        return line.substr(14).split(' ');
      }

      // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
      // a=rtpmap:111 opus/48000/2
      SDPUtils.parseRtpMap = function (line) {
        var parts = line.substr(9).split(' ');
        var parsed = {
          payloadType: parseInt(parts.shift(), 10) // was: id
        };

        parts = parts[0].split('/');

        parsed.name = parts[0];
        parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
        // was: channels
        parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
        return parsed;
      };

      // Generate an a=rtpmap line from RTCRtpCodecCapability or
      // RTCRtpCodecParameters.
      SDPUtils.writeRtpMap = function (codec) {
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
          (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
      };

      // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
      // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
      SDPUtils.parseExtmap = function (line) {
        var parts = line.substr(9).split(' ');
        return {
          id: parseInt(parts[0], 10),
          direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
          uri: parts[1]
        };
      };

      // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
      // RTCRtpHeaderExtension.
      SDPUtils.writeExtmap = function (headerExtension) {
        return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
          (headerExtension.direction && headerExtension.direction !== 'sendrecv' ?
            '/' + headerExtension.direction :
            '') +
          ' ' + headerExtension.uri + '\r\n';
      };

      // Parses an ftmp line, returns dictionary. Sample input:
      // a=fmtp:96 vbr=on;cng=on
      // Also deals with vbr=on; cng=on
      SDPUtils.parseFmtp = function (line) {
        var parsed = {};
        var kv;
        var parts = line.substr(line.indexOf(' ') + 1).split(';');
        for (var j = 0; j < parts.length; j++) {
          kv = parts[j].trim().split('=');
          parsed[kv[0].trim()] = kv[1];
        }
        return parsed;
      };

      // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
      SDPUtils.writeFmtp = function (codec) {
        var line = '';
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        if (codec.parameters && Object.keys(codec.parameters).length) {
          var params = [];
          Object.keys(codec.parameters).forEach(function (param) {
            params.push(param + '=' + codec.parameters[param]);
          });
          line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
        }
        return line;
      };

      // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
      // a=rtcp-fb:98 nack rpsi
      SDPUtils.parseRtcpFb = function (line) {
        var parts = line.substr(line.indexOf(' ') + 1).split(' ');
        return {
          type: parts.shift(),
          parameter: parts.join(' ')
        };
      };
      // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
      SDPUtils.writeRtcpFb = function (codec) {
        var lines = '';
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
          // FIXME: special handling for trr-int?
          codec.rtcpFeedback.forEach(function (fb) {
            lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
              (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
              '\r\n';
          });
        }
        return lines;
      };

      // Parses an RFC 5576 ssrc media attribute. Sample input:
      // a=ssrc:3735928559 cname:something
      SDPUtils.parseSsrcMedia = function (line) {
        var sp = line.indexOf(' ');
        var parts = {
          ssrc: parseInt(line.substr(7, sp - 7), 10)
        };
        var colon = line.indexOf(':', sp);
        if (colon > -1) {
          parts.attribute = line.substr(sp + 1, colon - sp - 1);
          parts.value = line.substr(colon + 1);
        } else {
          parts.attribute = line.substr(sp + 1);
        }
        return parts;
      };

      // Extracts the MID (RFC 5888) from a media section.
      // returns the MID or undefined if no mid line was found.
      SDPUtils.getMid = function (mediaSection) {
        var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
        if (mid) {
          return mid.substr(6);
        }
      }

      SDPUtils.parseFingerprint = function (line) {
        var parts = line.substr(14).split(' ');
        return {
          algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
          value: parts[1]
        };
      };

      // Extracts DTLS parameters from SDP media section or sessionpart.
      // FIXME: for consistency with other functions this should only
      //   get the fingerprint line as input. See also getIceParameters.
      SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
        var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
          'a=fingerprint:');
        // Note: a=setup line is ignored since we use the 'auto' role.
        // Note2: 'algorithm' is not case sensitive except in Edge.
        return {
          role: 'auto',
          fingerprints: lines.map(SDPUtils.parseFingerprint)
        };
      };

      // Serializes DTLS parameters to SDP.
      SDPUtils.writeDtlsParameters = function (params, setupType) {
        var sdp = 'a=setup:' + setupType + '\r\n';
        params.fingerprints.forEach(function (fp) {
          sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
        });
        return sdp;
      };
      // Parses ICE information from SDP media section or sessionpart.
      // FIXME: for consistency with other functions this should only
      //   get the ice-ufrag and ice-pwd lines as input.
      SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
        var lines = SDPUtils.splitLines(mediaSection);
        // Search in session part, too.
        lines = lines.concat(SDPUtils.splitLines(sessionpart));
        var iceParameters = {
          usernameFragment: lines.filter(function (line) {
            return line.indexOf('a=ice-ufrag:') === 0;
          })[0].substr(12),
          password: lines.filter(function (line) {
            return line.indexOf('a=ice-pwd:') === 0;
          })[0].substr(10)
        };
        return iceParameters;
      };

      // Serializes ICE parameters to SDP.
      SDPUtils.writeIceParameters = function (params) {
        return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
          'a=ice-pwd:' + params.password + '\r\n';
      };

      // Parses the SDP media section and returns RTCRtpParameters.
      SDPUtils.parseRtpParameters = function (mediaSection) {
        var description = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: [],
          rtcp: []
        };
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].split(' ');
        for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
          var pt = mline[i];
          var rtpmapline = SDPUtils.matchPrefix(
            mediaSection, 'a=rtpmap:' + pt + ' ')[0];
          if (rtpmapline) {
            var codec = SDPUtils.parseRtpMap(rtpmapline);
            var fmtps = SDPUtils.matchPrefix(
              mediaSection, 'a=fmtp:' + pt + ' ');
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(
                mediaSection, 'a=rtcp-fb:' + pt + ' ')
              .map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch (codec.name.toUpperCase()) {
              case 'RED':
              case 'ULPFEC':
                description.fecMechanisms.push(codec.name.toUpperCase());
                break;
              default: // only RED and ULPFEC are recognized as FEC mechanisms.
                break;
            }
          }
        }
        SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
          description.headerExtensions.push(SDPUtils.parseExtmap(line));
        });
        // FIXME: parse rtcp.
        return description;
      };

      // Generates parts of the SDP media section describing the capabilities /
      // parameters.
      SDPUtils.writeRtpDescription = function (kind, caps) {
        var sdp = '';

        // Build the mline.
        sdp += 'm=' + kind + ' ';
        sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
        sdp += ' UDP/TLS/RTP/SAVPF ';
        sdp += caps.codecs.map(function (codec) {
          if (codec.preferredPayloadType !== undefined) {
            return codec.preferredPayloadType;
          }
          return codec.payloadType;
        }).join(' ') + '\r\n';

        sdp += 'c=IN IP4 0.0.0.0\r\n';
        sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

        // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
        caps.codecs.forEach(function (codec) {
          sdp += SDPUtils.writeRtpMap(codec);
          sdp += SDPUtils.writeFmtp(codec);
          sdp += SDPUtils.writeRtcpFb(codec);
        });
        var maxptime = 0;
        caps.codecs.forEach(function (codec) {
          if (codec.maxptime > maxptime) {
            maxptime = codec.maxptime;
          }
        });
        if (maxptime > 0) {
          sdp += 'a=maxptime:' + maxptime + '\r\n';
        }
        sdp += 'a=rtcp-mux\r\n';

        caps.headerExtensions.forEach(function (extension) {
          sdp += SDPUtils.writeExtmap(extension);
        });
        // FIXME: write fecMechanisms.
        return sdp;
      };

      // Parses the SDP media section and returns an array of
      // RTCRtpEncodingParameters.
      SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
        var encodingParameters = [];
        var description = SDPUtils.parseRtpParameters(mediaSection);
        var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
        var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

        // filter a=ssrc:... cname:, ignore PlanB-msid
        var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
          .map(function (line) {
            return SDPUtils.parseSsrcMedia(line);
          })
          .filter(function (parts) {
            return parts.attribute === 'cname';
          });
        var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
        var secondarySsrc;

        var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
          .map(function (line) {
            var parts = line.split(' ');
            parts.shift();
            return parts.map(function (part) {
              return parseInt(part, 10);
            });
          });
        if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
          secondarySsrc = flows[0][1];
        }

        description.codecs.forEach(function (codec) {
          if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
            var encParam = {
              ssrc: primarySsrc,
              codecPayloadType: parseInt(codec.parameters.apt, 10),
              rtx: {
                ssrc: secondarySsrc
              }
            };
            encodingParameters.push(encParam);
            if (hasRed) {
              encParam = JSON.parse(JSON.stringify(encParam));
              encParam.fec = {
                ssrc: secondarySsrc,
                mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
              };
              encodingParameters.push(encParam);
            }
          }
        });
        if (encodingParameters.length === 0 && primarySsrc) {
          encodingParameters.push({
            ssrc: primarySsrc
          });
        }

        // we support both b=AS and b=TIAS but interpret AS as TIAS.
        var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
        if (bandwidth.length) {
          if (bandwidth[0].indexOf('b=TIAS:') === 0) {
            bandwidth = parseInt(bandwidth[0].substr(7), 10);
          } else if (bandwidth[0].indexOf('b=AS:') === 0) {
            // use formula from JSEP to convert b=AS to TIAS value.
            bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 -
              (50 * 40 * 8);
          } else {
            bandwidth = undefined;
          }
          encodingParameters.forEach(function (params) {
            params.maxBitrate = bandwidth;
          });
        }
        return encodingParameters;
      };

      // parses http://draft.ortc.org/#rtcrtcpparameters*
      SDPUtils.parseRtcpParameters = function (mediaSection) {
        var rtcpParameters = {};

        var cname;
        // Gets the first SSRC. Note that with RTX there might be multiple
        // SSRCs.
        var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
          .map(function (line) {
            return SDPUtils.parseSsrcMedia(line);
          })
          .filter(function (obj) {
            return obj.attribute === 'cname';
          })[0];
        if (remoteSsrc) {
          rtcpParameters.cname = remoteSsrc.value;
          rtcpParameters.ssrc = remoteSsrc.ssrc;
        }

        // Edge uses the compound attribute instead of reducedSize
        // compound is !reducedSize
        var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
        rtcpParameters.reducedSize = rsize.length > 0;
        rtcpParameters.compound = rsize.length === 0;

        // parses the rtcp-mux attrіbute.
        // Note that Edge does not support unmuxed RTCP.
        var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
        rtcpParameters.mux = mux.length > 0;

        return rtcpParameters;
      };

      // parses either a=msid: or a=ssrc:... msid lines and returns
      // the id of the MediaStream and MediaStreamTrack.
      SDPUtils.parseMsid = function (mediaSection) {
        var parts;
        var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
        if (spec.length === 1) {
          parts = spec[0].substr(7).split(' ');
          return {
            stream: parts[0],
            track: parts[1]
          };
        }
        var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
          .map(function (line) {
            return SDPUtils.parseSsrcMedia(line);
          })
          .filter(function (parts) {
            return parts.attribute === 'msid';
          });
        if (planB.length > 0) {
          parts = planB[0].value.split(' ');
          return {
            stream: parts[0],
            track: parts[1]
          };
        }
      };

      // Generate a session ID for SDP.
      // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
      // recommends using a cryptographically random +ve 64-bit value
      // but right now this should be acceptable and within the right range
      SDPUtils.generateSessionId = function () {
        return Math.random().toString().substr(2, 21);
      };

      // Write boilder plate for start of SDP
      // sessId argument is optional - if not supplied it will
      // be generated randomly
      // sessVersion is optional and defaults to 2
      SDPUtils.writeSessionBoilerplate = function (sessId, sessVer) {
        var sessionId;
        var version = sessVer !== undefined ? sessVer : 2;
        if (sessId) {
          sessionId = sessId;
        } else {
          sessionId = SDPUtils.generateSessionId();
        }
        // FIXME: sess-id should be an NTP timestamp.
        return 'v=0\r\n' +
          'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' +
          's=-\r\n' +
          't=0 0\r\n';
      };

      SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
        var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

        // Map ICE parameters (ufrag, pwd) to SDP.
        sdp += SDPUtils.writeIceParameters(
          transceiver.iceGatherer.getLocalParameters());

        // Map DTLS parameters to SDP.
        sdp += SDPUtils.writeDtlsParameters(
          transceiver.dtlsTransport.getLocalParameters(),
          type === 'offer' ? 'actpass' : 'active');

        sdp += 'a=mid:' + transceiver.mid + '\r\n';

        if (transceiver.direction) {
          sdp += 'a=' + transceiver.direction + '\r\n';
        } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
          sdp += 'a=sendrecv\r\n';
        } else if (transceiver.rtpSender) {
          sdp += 'a=sendonly\r\n';
        } else if (transceiver.rtpReceiver) {
          sdp += 'a=recvonly\r\n';
        } else {
          sdp += 'a=inactive\r\n';
        }

        if (transceiver.rtpSender) {
          // spec.
          var msid = 'msid:' + stream.id + ' ' +
            transceiver.rtpSender.track.id + '\r\n';
          sdp += 'a=' + msid;

          // for Chrome.
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
            ' ' + msid;
          if (transceiver.sendEncodingParameters[0].rtx) {
            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
              ' ' + msid;
            sdp += 'a=ssrc-group:FID ' +
              transceiver.sendEncodingParameters[0].ssrc + ' ' +
              transceiver.sendEncodingParameters[0].rtx.ssrc +
              '\r\n';
          }
        }
        // FIXME: this should be written by writeRtpDescription.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
          ' cname:' + SDPUtils.localCName + '\r\n';
        if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
            ' cname:' + SDPUtils.localCName + '\r\n';
        }
        return sdp;
      };

      // Gets the direction from the mediaSection or the sessionpart.
      SDPUtils.getDirection = function (mediaSection, sessionpart) {
        // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
        var lines = SDPUtils.splitLines(mediaSection);
        for (var i = 0; i < lines.length; i++) {
          switch (lines[i]) {
            case 'a=sendrecv':
            case 'a=sendonly':
            case 'a=recvonly':
            case 'a=inactive':
              return lines[i].substr(2);
            default:
              // FIXME: What should happen here?
          }
        }
        if (sessionpart) {
          return SDPUtils.getDirection(sessionpart);
        }
        return 'sendrecv';
      };

      SDPUtils.getKind = function (mediaSection) {
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].split(' ');
        return mline[0].substr(2);
      };

      SDPUtils.isRejected = function (mediaSection) {
        return mediaSection.split(' ', 2)[1] === '0';
      };

      SDPUtils.parseMLine = function (mediaSection) {
        var lines = SDPUtils.splitLines(mediaSection);
        var parts = lines[0].substr(2).split(' ');
        return {
          kind: parts[0],
          port: parseInt(parts[1], 10),
          protocol: parts[2],
          fmt: parts.slice(3).join(' ')
        };
      };

      SDPUtils.parseOLine = function (mediaSection) {
        var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
        var parts = line.substr(2).split(' ');
        return {
          username: parts[0],
          sessionId: parts[1],
          sessionVersion: parseInt(parts[2], 10),
          netType: parts[3],
          addressType: parts[4],
          address: parts[5],
        };
      }

      // Expose public methods.
      if (typeof module === 'object') {
        module.exports = SDPUtils;
      }

    }, {}],
    3: [function (require, module, exports) {
      (function (global) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */
        /* eslint-env node */

        'use strict';

        var adapterFactory = require('./adapter_factory.js');
        module.exports = adapterFactory({
          window: global.window
        });

      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {
      "./adapter_factory.js": 4
    }],
    4: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */

      'use strict';

      var utils = require('./utils');
      // Shimming starts here.
      module.exports = function (dependencies, opts) {
        var window = dependencies && dependencies.window;

        var options = {
          shimChrome: true,
          shimFirefox: true,
          shimEdge: true,
          shimSafari: true,
        };

        for (var key in opts) {
          if (hasOwnProperty.call(opts, key)) {
            options[key] = opts[key];
          }
        }

        // Utils.
        var logging = utils.log;
        var browserDetails = utils.detectBrowser(window);

        // Uncomment the line below if you want logging to occur, including logging
        // for the switch statement below. Can also be turned on in the browser via
        // adapter.disableLog(false), but then logging from the switch statement below
        // will not appear.
        // require('./utils').disableLog(false);

        // Browser shims.
        var chromeShim = require('./chrome/chrome_shim') || null;
        var edgeShim = require('./edge/edge_shim') || null;
        var firefoxShim = require('./firefox/firefox_shim') || null;
        var safariShim = require('./safari/safari_shim') || null;
        var commonShim = require('./common_shim') || null;

        // Export to the adapter global object visible in the browser.
        var adapter = {
          browserDetails: browserDetails,
          commonShim: commonShim,
          extractVersion: utils.extractVersion,
          disableLog: utils.disableLog,
          disableWarnings: utils.disableWarnings
        };

        // Shim browser if found.
        switch (browserDetails.browser) {
          case 'chrome':
            if (!chromeShim || !chromeShim.shimPeerConnection ||
              !options.shimChrome) {
              logging('Chrome shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming chrome.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = chromeShim;
            commonShim.shimCreateObjectURL(window);

            chromeShim.shimGetUserMedia(window);
            chromeShim.shimMediaStream(window);
            chromeShim.shimSourceObject(window);
            chromeShim.shimPeerConnection(window);
            chromeShim.shimOnTrack(window);
            chromeShim.shimAddTrackRemoveTrack(window);
            chromeShim.shimGetSendersWithDtmf(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'firefox':
            if (!firefoxShim || !firefoxShim.shimPeerConnection ||
              !options.shimFirefox) {
              logging('Firefox shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming firefox.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = firefoxShim;
            commonShim.shimCreateObjectURL(window);

            firefoxShim.shimGetUserMedia(window);
            firefoxShim.shimSourceObject(window);
            firefoxShim.shimPeerConnection(window);
            firefoxShim.shimOnTrack(window);
            firefoxShim.shimRemoveStream(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'edge':
            if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
              logging('MS edge shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming edge.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = edgeShim;
            commonShim.shimCreateObjectURL(window);

            edgeShim.shimGetUserMedia(window);
            edgeShim.shimPeerConnection(window);
            edgeShim.shimReplaceTrack(window);

            // the edge shim implements the full RTCIceCandidate object.

            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'safari':
            if (!safariShim || !options.shimSafari) {
              logging('Safari shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming safari.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = safariShim;
            commonShim.shimCreateObjectURL(window);

            safariShim.shimRTCIceServerUrls(window);
            safariShim.shimCallbacksAPI(window);
            safariShim.shimLocalStreamsAPI(window);
            safariShim.shimRemoteStreamsAPI(window);
            safariShim.shimTrackEventTransceiver(window);
            safariShim.shimGetUserMedia(window);
            safariShim.shimCreateOfferLegacy(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          default:
            logging('Unsupported browser!');
            break;
        }

        return adapter;
      };

    }, {
      "./chrome/chrome_shim": 5,
      "./common_shim": 7,
      "./edge/edge_shim": 8,
      "./firefox/firefox_shim": 10,
      "./safari/safari_shim": 12,
      "./utils": 13
    }],
    5: [function (require, module, exports) {

      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';
      var utils = require('../utils.js');
      var logging = utils.log;

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimMediaStream: function (window) {
          window.MediaStream = window.MediaStream || window.webkitMediaStream;
        },

        shimOnTrack: function (window) {
          if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
              window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
              get: function () {
                return this._ontrack;
              },
              set: function (f) {
                if (this._ontrack) {
                  this.removeEventListener('track', this._ontrack);
                }
                this.addEventListener('track', this._ontrack = f);
              }
            });
            var origSetRemoteDescription =
              window.RTCPeerConnection.prototype.setRemoteDescription;
            window.RTCPeerConnection.prototype.setRemoteDescription = function () {
              var pc = this;
              if (!pc._ontrackpoly) {
                pc._ontrackpoly = function (e) {
                  // onaddstream does not fire when a track is added to an existing
                  // stream. But stream.onaddtrack is implemented so we use that.
                  e.stream.addEventListener('addtrack', function (te) {
                    var receiver;
                    if (window.RTCPeerConnection.prototype.getReceivers) {
                      receiver = pc.getReceivers().find(function (r) {
                        return r.track && r.track.id === te.track.id;
                      });
                    } else {
                      receiver = {
                        track: te.track
                      };
                    }

                    var event = new Event('track');
                    event.track = te.track;
                    event.receiver = receiver;
                    event.transceiver = {
                      receiver: receiver
                    };
                    event.streams = [e.stream];
                    pc.dispatchEvent(event);
                  });
                  e.stream.getTracks().forEach(function (track) {
                    var receiver;
                    if (window.RTCPeerConnection.prototype.getReceivers) {
                      receiver = pc.getReceivers().find(function (r) {
                        return r.track && r.track.id === track.id;
                      });
                    } else {
                      receiver = {
                        track: track
                      };
                    }
                    var event = new Event('track');
                    event.track = track;
                    event.receiver = receiver;
                    event.transceiver = {
                      receiver: receiver
                    };
                    event.streams = [e.stream];
                    pc.dispatchEvent(event);
                  });
                };
                pc.addEventListener('addstream', pc._ontrackpoly);
              }
              return origSetRemoteDescription.apply(pc, arguments);
            };
          } else if (!('RTCRtpTransceiver' in window)) {
            utils.wrapPeerConnectionEvent(window, 'track', function (e) {
              if (!e.transceiver) {
                e.transceiver = {
                  receiver: e.receiver
                };
              }
              return e;
            });
          }
        },

        shimGetSendersWithDtmf: function (window) {
          // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
          if (typeof window === 'object' && window.RTCPeerConnection &&
            !('getSenders' in window.RTCPeerConnection.prototype) &&
            'createDTMFSender' in window.RTCPeerConnection.prototype) {
            var shimSenderWithDtmf = function (pc, track) {
              return {
                track: track,
                get dtmf() {
                  if (this._dtmf === undefined) {
                    if (track.kind === 'audio') {
                      this._dtmf = pc.createDTMFSender(track);
                    } else {
                      this._dtmf = null;
                    }
                  }
                  return this._dtmf;
                },
                _pc: pc
              };
            };

            // augment addTrack when getSenders is not available.
            if (!window.RTCPeerConnection.prototype.getSenders) {
              window.RTCPeerConnection.prototype.getSenders = function () {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
              };
              var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
              window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
                var pc = this;
                var sender = origAddTrack.apply(pc, arguments);
                if (!sender) {
                  sender = shimSenderWithDtmf(pc, track);
                  pc._senders.push(sender);
                }
                return sender;
              };

              var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
              window.RTCPeerConnection.prototype.removeTrack = function (sender) {
                var pc = this;
                origRemoveTrack.apply(pc, arguments);
                var idx = pc._senders.indexOf(sender);
                if (idx !== -1) {
                  pc._senders.splice(idx, 1);
                }
              };
            }
            var origAddStream = window.RTCPeerConnection.prototype.addStream;
            window.RTCPeerConnection.prototype.addStream = function (stream) {
              var pc = this;
              pc._senders = pc._senders || [];
              origAddStream.apply(pc, [stream]);
              stream.getTracks().forEach(function (track) {
                pc._senders.push(shimSenderWithDtmf(pc, track));
              });
            };

            var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              var pc = this;
              pc._senders = pc._senders || [];
              origRemoveStream.apply(pc, [stream]);

              stream.getTracks().forEach(function (track) {
                var sender = pc._senders.find(function (s) {
                  return s.track === track;
                });
                if (sender) {
                  pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
                }
              });
            };
          } else if (typeof window === 'object' && window.RTCPeerConnection &&
            'getSenders' in window.RTCPeerConnection.prototype &&
            'createDTMFSender' in window.RTCPeerConnection.prototype &&
            window.RTCRtpSender &&
            !('dtmf' in window.RTCRtpSender.prototype)) {
            var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
            window.RTCPeerConnection.prototype.getSenders = function () {
              var pc = this;
              var senders = origGetSenders.apply(pc, []);
              senders.forEach(function (sender) {
                sender._pc = pc;
              });
              return senders;
            };

            Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
              get: function () {
                if (this._dtmf === undefined) {
                  if (this.track.kind === 'audio') {
                    this._dtmf = this._pc.createDTMFSender(this.track);
                  } else {
                    this._dtmf = null;
                  }
                }
                return this._dtmf;
              }
            });
          }
        },

        shimSourceObject: function (window) {
          var URL = window && window.URL;

          if (typeof window === 'object') {
            if (window.HTMLMediaElement &&
              !('srcObject' in window.HTMLMediaElement.prototype)) {
              // Shim the srcObject property, once, when HTMLMediaElement is found.
              Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                get: function () {
                  return this._srcObject;
                },
                set: function (stream) {
                  var self = this;
                  // Use _srcObject as a private property for this shim
                  this._srcObject = stream;
                  if (this.src) {
                    URL.revokeObjectURL(this.src);
                  }

                  if (!stream) {
                    this.src = '';
                    return undefined;
                  }
                  this.src = URL.createObjectURL(stream);
                  // We need to recreate the blob url when a track is added or
                  // removed. Doing it manually since we want to avoid a recursion.
                  stream.addEventListener('addtrack', function () {
                    if (self.src) {
                      URL.revokeObjectURL(self.src);
                    }
                    self.src = URL.createObjectURL(stream);
                  });
                  stream.addEventListener('removetrack', function () {
                    if (self.src) {
                      URL.revokeObjectURL(self.src);
                    }
                    self.src = URL.createObjectURL(stream);
                  });
                }
              });
            }
          }
        },

        shimAddTrackRemoveTrackWithNative: function (window) {
          // shim addTrack/removeTrack with native variants in order to make
          // the interactions with legacy getLocalStreams behave as in other browsers.
          // Keeps a mapping stream.id => [stream, rtpsenders...]
          window.RTCPeerConnection.prototype.getLocalStreams = function () {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
              return pc._shimmedLocalStreams[streamId][0];
            });
          };

          var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
          window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
            if (!stream) {
              return origAddTrack.apply(this, arguments);
            }
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};

            var sender = origAddTrack.apply(this, arguments);
            if (!this._shimmedLocalStreams[stream.id]) {
              this._shimmedLocalStreams[stream.id] = [stream, sender];
            } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
              this._shimmedLocalStreams[stream.id].push(sender);
            }
            return sender;
          };

          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};

            stream.getTracks().forEach(function (track) {
              var alreadyExists = pc.getSenders().find(function (s) {
                return s.track === track;
              });
              if (alreadyExists) {
                throw new DOMException('Track already exists.',
                  'InvalidAccessError');
              }
            });
            var existingSenders = pc.getSenders();
            origAddStream.apply(this, arguments);
            var newSenders = pc.getSenders().filter(function (newSender) {
              return existingSenders.indexOf(newSender) === -1;
            });
            this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
          };

          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            delete this._shimmedLocalStreams[stream.id];
            return origRemoveStream.apply(this, arguments);
          };

          var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
          window.RTCPeerConnection.prototype.removeTrack = function (sender) {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            if (sender) {
              Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
                var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
                if (idx !== -1) {
                  pc._shimmedLocalStreams[streamId].splice(idx, 1);
                }
                if (pc._shimmedLocalStreams[streamId].length === 1) {
                  delete pc._shimmedLocalStreams[streamId];
                }
              });
            }
            return origRemoveTrack.apply(this, arguments);
          };
        },

        shimAddTrackRemoveTrack: function (window) {
          var browserDetails = utils.detectBrowser(window);
          // shim addTrack and removeTrack.
          if (window.RTCPeerConnection.prototype.addTrack &&
            browserDetails.version >= 65) {
            return this.shimAddTrackRemoveTrackWithNative(window);
          }

          // also shim pc.getLocalStreams when addTrack is shimmed
          // to return the original streams.
          var origGetLocalStreams = window.RTCPeerConnection.prototype
            .getLocalStreams;
          window.RTCPeerConnection.prototype.getLocalStreams = function () {
            var pc = this;
            var nativeStreams = origGetLocalStreams.apply(this);
            pc._reverseStreams = pc._reverseStreams || {};
            return nativeStreams.map(function (stream) {
              return pc._reverseStreams[stream.id];
            });
          };

          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;
            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};

            stream.getTracks().forEach(function (track) {
              var alreadyExists = pc.getSenders().find(function (s) {
                return s.track === track;
              });
              if (alreadyExists) {
                throw new DOMException('Track already exists.',
                  'InvalidAccessError');
              }
            });
            // Add identity mapping for consistency with addTrack.
            // Unless this is being used with a stream from addTrack.
            if (!pc._reverseStreams[stream.id]) {
              var newStream = new window.MediaStream(stream.getTracks());
              pc._streams[stream.id] = newStream;
              pc._reverseStreams[newStream.id] = stream;
              stream = newStream;
            }
            origAddStream.apply(pc, [stream]);
          };

          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};

            origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);
            delete pc._reverseStreams[(pc._streams[stream.id] ?
              pc._streams[stream.id].id : stream.id)];
            delete pc._streams[stream.id];
          };

          window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
            var pc = this;
            if (pc.signalingState === 'closed') {
              throw new DOMException(
                'The RTCPeerConnection\'s signalingState is \'closed\'.',
                'InvalidStateError');
            }
            var streams = [].slice.call(arguments, 1);
            if (streams.length !== 1 ||
              !streams[0].getTracks().find(function (t) {
                return t === track;
              })) {
              // this is not fully correct but all we can manage without
              // [[associated MediaStreams]] internal slot.
              throw new DOMException(
                'The adapter.js addTrack polyfill only supports a single ' +
                ' stream which is associated with the specified track.',
                'NotSupportedError');
            }

            var alreadyExists = pc.getSenders().find(function (s) {
              return s.track === track;
            });
            if (alreadyExists) {
              throw new DOMException('Track already exists.',
                'InvalidAccessError');
            }

            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};
            var oldStream = pc._streams[stream.id];
            if (oldStream) {
              // this is using odd Chrome behaviour, use with caution:
              // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
              // Note: we rely on the high-level addTrack/dtmf shim to
              // create the sender with a dtmf sender.
              oldStream.addTrack(track);

              // Trigger ONN async.
              Promise.resolve().then(function () {
                pc.dispatchEvent(new Event('negotiationneeded'));
              });
            } else {
              var newStream = new window.MediaStream([track]);
              pc._streams[stream.id] = newStream;
              pc._reverseStreams[newStream.id] = stream;
              pc.addStream(newStream);
            }
            return pc.getSenders().find(function (s) {
              return s.track === track;
            });
          };

          // replace the internal stream id with the external one and
          // vice versa.
          function replaceInternalStreamId(pc, description) {
            var sdp = description.sdp;
            Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
              var externalStream = pc._reverseStreams[internalId];
              var internalStream = pc._streams[externalStream.id];
              sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
                externalStream.id);
            });
            return new RTCSessionDescription({
              type: description.type,
              sdp: sdp
            });
          }

          function replaceExternalStreamId(pc, description) {
            var sdp = description.sdp;
            Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
              var externalStream = pc._reverseStreams[internalId];
              var internalStream = pc._streams[externalStream.id];
              sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
                internalStream.id);
            });
            return new RTCSessionDescription({
              type: description.type,
              sdp: sdp
            });
          }
          ['createOffer', 'createAnswer'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              var pc = this;
              var args = arguments;
              var isLegacyCall = arguments.length &&
                typeof arguments[0] === 'function';
              if (isLegacyCall) {
                return nativeMethod.apply(pc, [
                  function (description) {
                    var desc = replaceInternalStreamId(pc, description);
                    args[0].apply(null, [desc]);
                  },
                  function (err) {
                    if (args[1]) {
                      args[1].apply(null, err);
                    }
                  },
                  arguments[2]
                ]);
              }
              return nativeMethod.apply(pc, arguments)
                .then(function (description) {
                  return replaceInternalStreamId(pc, description);
                });
            };
          });

          var origSetLocalDescription =
            window.RTCPeerConnection.prototype.setLocalDescription;
          window.RTCPeerConnection.prototype.setLocalDescription = function () {
            var pc = this;
            if (!arguments.length || !arguments[0].type) {
              return origSetLocalDescription.apply(pc, arguments);
            }
            arguments[0] = replaceExternalStreamId(pc, arguments[0]);
            return origSetLocalDescription.apply(pc, arguments);
          };

          // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

          var origLocalDescription = Object.getOwnPropertyDescriptor(
            window.RTCPeerConnection.prototype, 'localDescription');
          Object.defineProperty(window.RTCPeerConnection.prototype,
            'localDescription', {
              get: function () {
                var pc = this;
                var description = origLocalDescription.get.apply(this);
                if (description.type === '') {
                  return description;
                }
                return replaceInternalStreamId(pc, description);
              }
            });

          window.RTCPeerConnection.prototype.removeTrack = function (sender) {
            var pc = this;
            if (pc.signalingState === 'closed') {
              throw new DOMException(
                'The RTCPeerConnection\'s signalingState is \'closed\'.',
                'InvalidStateError');
            }
            // We can not yet check for sender instanceof RTCRtpSender
            // since we shim RTPSender. So we check if sender._pc is set.
            if (!sender._pc) {
              throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
                'does not implement interface RTCRtpSender.', 'TypeError');
            }
            var isLocal = sender._pc === pc;
            if (!isLocal) {
              throw new DOMException('Sender was not created by this connection.',
                'InvalidAccessError');
            }

            // Search for the native stream the senders track belongs to.
            pc._streams = pc._streams || {};
            var stream;
            Object.keys(pc._streams).forEach(function (streamid) {
              var hasTrack = pc._streams[streamid].getTracks().find(function (track) {
                return sender.track === track;
              });
              if (hasTrack) {
                stream = pc._streams[streamid];
              }
            });

            if (stream) {
              if (stream.getTracks().length === 1) {
                // if this is the last track of the stream, remove the stream. This
                // takes care of any shimmed _senders.
                pc.removeStream(pc._reverseStreams[stream.id]);
              } else {
                // relying on the same odd chrome behaviour as above.
                stream.removeTrack(sender.track);
              }
              pc.dispatchEvent(new Event('negotiationneeded'));
            }
          };
        },

        shimPeerConnection: function (window) {
          var browserDetails = utils.detectBrowser(window);

          // The RTCPeerConnection object.
          if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              // Translate iceTransportPolicy to iceTransports,
              // see https://code.google.com/p/webrtc/issues/detail?id=4869
              // this was fixed in M56 along with unprefixing RTCPeerConnection.
              logging('PeerConnection');
              if (pcConfig && pcConfig.iceTransportPolicy) {
                pcConfig.iceTransports = pcConfig.iceTransportPolicy;
              }

              return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype =
              window.webkitRTCPeerConnection.prototype;
            // wrap static methods. Currently just generateCertificate.
            if (window.webkitRTCPeerConnection.generateCertificate) {
              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function () {
                  return window.webkitRTCPeerConnection.generateCertificate;
                }
              });
            }
          } else {
            // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
            var OrigPeerConnection = window.RTCPeerConnection;
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              if (pcConfig && pcConfig.iceServers) {
                var newIceServers = [];
                for (var i = 0; i < pcConfig.iceServers.length; i++) {
                  var server = pcConfig.iceServers[i];
                  if (!server.hasOwnProperty('urls') &&
                    server.hasOwnProperty('url')) {
                    utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    newIceServers.push(server);
                  } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                  }
                }
                pcConfig.iceServers = newIceServers;
              }
              return new OrigPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
            // wrap static methods. Currently just generateCertificate.
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function () {
                return OrigPeerConnection.generateCertificate;
              }
            });
          }

          var origGetStats = window.RTCPeerConnection.prototype.getStats;
          window.RTCPeerConnection.prototype.getStats = function (selector,
            successCallback, errorCallback) {
            var pc = this;
            var args = arguments;

            // If selector is a function then we are in the old style stats so just
            // pass back the original getStats format to avoid breaking old users.
            if (arguments.length > 0 && typeof selector === 'function') {
              return origGetStats.apply(this, arguments);
            }

            // When spec-style getStats is supported, return those when called with
            // either no arguments or the selector argument is null.
            if (origGetStats.length === 0 && (arguments.length === 0 ||
                typeof arguments[0] !== 'function')) {
              return origGetStats.apply(this, []);
            }

            var fixChromeStats_ = function (response) {
              var standardReport = {};
              var reports = response.result();
              reports.forEach(function (report) {
                var standardStats = {
                  id: report.id,
                  timestamp: report.timestamp,
                  type: {
                    localcandidate: 'local-candidate',
                    remotecandidate: 'remote-candidate'
                  } [report.type] || report.type
                };
                report.names().forEach(function (name) {
                  standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
              });

              return standardReport;
            };

            // shim getStats with maplike support
            var makeMapStats = function (stats) {
              return new Map(Object.keys(stats).map(function (key) {
                return [key, stats[key]];
              }));
            };

            if (arguments.length >= 2) {
              var successCallbackWrapper_ = function (response) {
                args[1](makeMapStats(fixChromeStats_(response)));
              };

              return origGetStats.apply(this, [successCallbackWrapper_,
                arguments[0]
              ]);
            }

            // promise-support
            return new Promise(function (resolve, reject) {
              origGetStats.apply(pc, [
                function (response) {
                  resolve(makeMapStats(fixChromeStats_(response)));
                },
                reject
              ]);
            }).then(successCallback, errorCallback);
          };

          // add promise support -- natively available in Chrome 51
          if (browserDetails.version < 51) {
            ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
            .forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function () {
                var args = arguments;
                var pc = this;
                var promise = new Promise(function (resolve, reject) {
                  nativeMethod.apply(pc, [args[0], resolve, reject]);
                });
                if (args.length < 2) {
                  return promise;
                }
                return promise.then(function () {
                    args[1].apply(null, []);
                  },
                  function (err) {
                    if (args.length >= 3) {
                      args[2].apply(null, [err]);
                    }
                  });
              };
            });
          }

          // promise support for createOffer and createAnswer. Available (without
          // bugs) since M52: crbug/619289
          if (browserDetails.version < 52) {
            ['createOffer', 'createAnswer'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function () {
                var pc = this;
                if (arguments.length < 1 || (arguments.length === 1 &&
                    typeof arguments[0] === 'object')) {
                  var opts = arguments.length === 1 ? arguments[0] : undefined;
                  return new Promise(function (resolve, reject) {
                    nativeMethod.apply(pc, [resolve, reject, opts]);
                  });
                }
                return nativeMethod.apply(this, arguments);
              };
            });
          }

          // shim implicit creation of RTCSessionDescription/RTCIceCandidate
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              arguments[0] = new((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
              return nativeMethod.apply(this, arguments);
            };
          });

          // support for addIceCandidate(null or undefined)
          var nativeAddIceCandidate =
            window.RTCPeerConnection.prototype.addIceCandidate;
          window.RTCPeerConnection.prototype.addIceCandidate = function () {
            if (!arguments[0]) {
              if (arguments[1]) {
                arguments[1].apply(null);
              }
              return Promise.resolve();
            }
            return nativeAddIceCandidate.apply(this, arguments);
          };
        }
      };

    }, {
      "../utils.js": 13,
      "./getusermedia": 6
    }],
    6: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';
      var utils = require('../utils.js');
      var logging = utils.log;

      // Expose public methods.
      module.exports = function (window) {
        var browserDetails = utils.detectBrowser(window);
        var navigator = window && window.navigator;

        var constraintsToChrome_ = function (c) {
          if (typeof c !== 'object' || c.mandatory || c.optional) {
            return c;
          }
          var cc = {};
          Object.keys(c).forEach(function (key) {
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
              return;
            }
            var r = (typeof c[key] === 'object') ? c[key] : {
              ideal: c[key]
            };
            if (r.exact !== undefined && typeof r.exact === 'number') {
              r.min = r.max = r.exact;
            }
            var oldname_ = function (prefix, name) {
              if (prefix) {
                return prefix + name.charAt(0).toUpperCase() + name.slice(1);
              }
              return (name === 'deviceId') ? 'sourceId' : name;
            };
            if (r.ideal !== undefined) {
              cc.optional = cc.optional || [];
              var oc = {};
              if (typeof r.ideal === 'number') {
                oc[oldname_('min', key)] = r.ideal;
                cc.optional.push(oc);
                oc = {};
                oc[oldname_('max', key)] = r.ideal;
                cc.optional.push(oc);
              } else {
                oc[oldname_('', key)] = r.ideal;
                cc.optional.push(oc);
              }
            }
            if (r.exact !== undefined && typeof r.exact !== 'number') {
              cc.mandatory = cc.mandatory || {};
              cc.mandatory[oldname_('', key)] = r.exact;
            } else {
              ['min', 'max'].forEach(function (mix) {
                if (r[mix] !== undefined) {
                  cc.mandatory = cc.mandatory || {};
                  cc.mandatory[oldname_(mix, key)] = r[mix];
                }
              });
            }
          });
          if (c.advanced) {
            cc.optional = (cc.optional || []).concat(c.advanced);
          }
          return cc;
        };

        var shimConstraints_ = function (constraints, func) {
          if (browserDetails.version >= 61) {
            return func(constraints);
          }
          constraints = JSON.parse(JSON.stringify(constraints));
          if (constraints && typeof constraints.audio === 'object') {
            var remap = function (obj, a, b) {
              if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
              }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
            remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
            constraints.audio = constraintsToChrome_(constraints.audio);
          }
          if (constraints && typeof constraints.video === 'object') {
            // Shim facingMode for mobile & surface pro.
            var face = constraints.video.facingMode;
            face = face && ((typeof face === 'object') ? face : {
              ideal: face
            });
            var getSupportedFacingModeLies = browserDetails.version < 66;

            if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                face.ideal === 'user' || face.ideal === 'environment')) &&
              !(navigator.mediaDevices.getSupportedConstraints &&
                navigator.mediaDevices.getSupportedConstraints().facingMode &&
                !getSupportedFacingModeLies)) {
              delete constraints.video.facingMode;
              var matches;
              if (face.exact === 'environment' || face.ideal === 'environment') {
                matches = ['back', 'rear'];
              } else if (face.exact === 'user' || face.ideal === 'user') {
                matches = ['front'];
              }
              if (matches) {
                // Look for matches in label, or use last cam for back (typical).
                return navigator.mediaDevices.enumerateDevices()
                  .then(function (devices) {
                    devices = devices.filter(function (d) {
                      return d.kind === 'videoinput';
                    });
                    var dev = devices.find(function (d) {
                      return matches.some(function (match) {
                        return d.label.toLowerCase().indexOf(match) !== -1;
                      });
                    });
                    if (!dev && devices.length && matches.indexOf('back') !== -1) {
                      dev = devices[devices.length - 1]; // more likely the back cam
                    }
                    if (dev) {
                      constraints.video.deviceId = face.exact ? {
                        exact: dev.deviceId
                      } : {
                        ideal: dev.deviceId
                      };
                    }
                    constraints.video = constraintsToChrome_(constraints.video);
                    logging('chrome: ' + JSON.stringify(constraints));
                    return func(constraints);
                  });
              }
            }
            constraints.video = constraintsToChrome_(constraints.video);
          }
          logging('chrome: ' + JSON.stringify(constraints));
          return func(constraints);
        };

        var shimError_ = function (e) {
          return {
            name: {
              PermissionDeniedError: 'NotAllowedError',
              PermissionDismissedError: 'NotAllowedError',
              InvalidStateError: 'NotAllowedError',
              DevicesNotFoundError: 'NotFoundError',
              ConstraintNotSatisfiedError: 'OverconstrainedError',
              TrackStartError: 'NotReadableError',
              MediaDeviceFailedDueToShutdown: 'NotAllowedError',
              MediaDeviceKillSwitchOn: 'NotAllowedError',
              TabCaptureError: 'AbortError',
              ScreenCaptureError: 'AbortError',
              DeviceCaptureError: 'AbortError'
            } [e.name] || e.name,
            message: e.message,
            constraint: e.constraintName,
            toString: function () {
              return this.name + (this.message && ': ') + this.message;
            }
          };
        };

        var getUserMedia_ = function (constraints, onSuccess, onError) {
          shimConstraints_(constraints, function (c) {
            navigator.webkitGetUserMedia(c, onSuccess, function (e) {
              if (onError) {
                onError(shimError_(e));
              }
            });
          });
        };

        navigator.getUserMedia = getUserMedia_;

        // Returns the result of getUserMedia as a Promise.
        var getUserMediaPromise_ = function (constraints) {
          return new Promise(function (resolve, reject) {
            navigator.getUserMedia(constraints, resolve, reject);
          });
        };

        if (!navigator.mediaDevices) {
          navigator.mediaDevices = {
            getUserMedia: getUserMediaPromise_,
            enumerateDevices: function () {
              return new Promise(function (resolve) {
                var kinds = {
                  audio: 'audioinput',
                  video: 'videoinput'
                };
                return window.MediaStreamTrack.getSources(function (devices) {
                  resolve(devices.map(function (device) {
                    return {
                      label: device.label,
                      kind: kinds[device.kind],
                      deviceId: device.id,
                      groupId: ''
                    };
                  }));
                });
              });
            },
            getSupportedConstraints: function () {
              return {
                deviceId: true,
                echoCancellation: true,
                facingMode: true,
                frameRate: true,
                height: true,
                width: true
              };
            }
          };
        }

        // A shim for getUserMedia method on the mediaDevices object.
        // TODO(KaptenJansson) remove once implemented in Chrome stable.
        if (!navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            return getUserMediaPromise_(constraints);
          };
        } else {
          // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
          // function which returns a Promise, it does not accept spec-style
          // constraints.
          var origGetUserMedia = navigator.mediaDevices.getUserMedia.
          bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (cs) {
            return shimConstraints_(cs, function (c) {
              return origGetUserMedia(c).then(function (stream) {
                if (c.audio && !stream.getAudioTracks().length ||
                  c.video && !stream.getVideoTracks().length) {
                  stream.getTracks().forEach(function (track) {
                    track.stop();
                  });
                  throw new DOMException('', 'NotFoundError');
                }
                return stream;
              }, function (e) {
                return Promise.reject(shimError_(e));
              });
            });
          };
        }

        // Dummy devicechange event methods.
        // TODO(KaptenJansson) remove once implemented in Chrome stable.
        if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
          navigator.mediaDevices.addEventListener = function () {
            logging('Dummy mediaDevices.addEventListener called.');
          };
        }
        if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
          navigator.mediaDevices.removeEventListener = function () {
            logging('Dummy mediaDevices.removeEventListener called.');
          };
        }
      };

    }, {
      "../utils.js": 13
    }],
    7: [function (require, module, exports) {
      /*
       *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var SDPUtils = require('sdp');
      var utils = require('./utils');

      module.exports = {
        shimRTCIceCandidate: function (window) {
          // foundation is arbitrarily chosen as an indicator for full support for
          // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
          if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
              window.RTCIceCandidate.prototype)) {
            return;
          }

          var NativeRTCIceCandidate = window.RTCIceCandidate;
          window.RTCIceCandidate = function (args) {
            // Remove the a= which shouldn't be part of the candidate string.
            if (typeof args === 'object' && args.candidate &&
              args.candidate.indexOf('a=') === 0) {
              args = JSON.parse(JSON.stringify(args));
              args.candidate = args.candidate.substr(2);
            }

            if (args.candidate && args.candidate.length) {
              // Augment the native candidate with the parsed fields.
              var nativeCandidate = new NativeRTCIceCandidate(args);
              var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
              var augmentedCandidate = Object.assign(nativeCandidate,
                parsedCandidate);

              // Add a serializer that does not serialize the extra attributes.
              augmentedCandidate.toJSON = function () {
                return {
                  candidate: augmentedCandidate.candidate,
                  sdpMid: augmentedCandidate.sdpMid,
                  sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                  usernameFragment: augmentedCandidate.usernameFragment,
                };
              };
              return augmentedCandidate;
            }
            return new NativeRTCIceCandidate(args);
          };
          window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

          // Hook up the augmented candidate in onicecandidate and
          // addEventListener('icecandidate', ...)
          utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
            if (e.candidate) {
              Object.defineProperty(e, 'candidate', {
                value: new window.RTCIceCandidate(e.candidate),
                writable: 'false'
              });
            }
            return e;
          });
        },

        // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

        shimCreateObjectURL: function (window) {
          var URL = window && window.URL;

          if (!(typeof window === 'object' && window.HTMLMediaElement &&
              'srcObject' in window.HTMLMediaElement.prototype &&
              URL.createObjectURL && URL.revokeObjectURL)) {
            // Only shim CreateObjectURL using srcObject if srcObject exists.
            return undefined;
          }

          var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
          var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
          var streams = new Map(),
            newId = 0;

          URL.createObjectURL = function (stream) {
            if ('getTracks' in stream) {
              var url = 'polyblob:' + (++newId);
              streams.set(url, stream);
              utils.deprecated('URL.createObjectURL(stream)',
                'elem.srcObject = stream');
              return url;
            }
            return nativeCreateObjectURL(stream);
          };
          URL.revokeObjectURL = function (url) {
            nativeRevokeObjectURL(url);
            streams.delete(url);
          };

          var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
            'src');
          Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
            get: function () {
              return dsc.get.apply(this);
            },
            set: function (url) {
              this.srcObject = streams.get(url) || null;
              return dsc.set.apply(this, [url]);
            }
          });

          var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
          window.HTMLMediaElement.prototype.setAttribute = function () {
            if (arguments.length === 2 &&
              ('' + arguments[0]).toLowerCase() === 'src') {
              this.srcObject = streams.get(arguments[1]) || null;
            }
            return nativeSetAttribute.apply(this, arguments);
          };
        },

        shimMaxMessageSize: function (window) {
          if (window.RTCSctpTransport || !window.RTCPeerConnection) {
            return;
          }
          var browserDetails = utils.detectBrowser(window);

          if (!('sctp' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
              get: function () {
                return typeof this._sctp === 'undefined' ? null : this._sctp;
              }
            });
          }

          var sctpInDescription = function (description) {
            var sections = SDPUtils.splitSections(description.sdp);
            sections.shift();
            return sections.some(function (mediaSection) {
              var mLine = SDPUtils.parseMLine(mediaSection);
              return mLine && mLine.kind === 'application' &&
                mLine.protocol.indexOf('SCTP') !== -1;
            });
          };

          var getRemoteFirefoxVersion = function (description) {
            // TODO: Is there a better solution for detecting Firefox?
            var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (match === null || match.length < 2) {
              return -1;
            }
            var version = parseInt(match[1], 10);
            // Test for NaN (yes, this is ugly)
            return version !== version ? -1 : version;
          };

          var getCanSendMaxMessageSize = function (remoteIsFirefox) {
            // Every implementation we know can send at least 64 KiB.
            // Note: Although Chrome is technically able to send up to 256 KiB, the
            //       data does not reach the other peer reliably.
            //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
            var canSendMaxMessageSize = 65536;
            if (browserDetails.browser === 'firefox') {
              if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) {
                  // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                  // fragmentation.
                  canSendMaxMessageSize = 16384;
                } else {
                  // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                  // messages. Thus, supporting ~2 GiB when sending.
                  canSendMaxMessageSize = 2147483637;
                }
              } else {
                // Currently, all FF >= 57 will reset the remote maximum message size
                // to the default value when a data channel is created at a later
                // stage. :(
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
                canSendMaxMessageSize =
                  browserDetails.version === 57 ? 65535 : 65536;
              }
            }
            return canSendMaxMessageSize;
          };

          var getMaxMessageSize = function (description, remoteIsFirefox) {
            // Note: 65536 bytes is the default value from the SDP spec. Also,
            //       every implementation we know supports receiving 65536 bytes.
            var maxMessageSize = 65536;

            // FF 57 has a slightly incorrect default remote max message size, so
            // we need to adjust it here to avoid a failure when sending.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
            if (browserDetails.browser === 'firefox' &&
              browserDetails.version === 57) {
              maxMessageSize = 65535;
            }

            var match = SDPUtils.matchPrefix(description.sdp, 'a=max-message-size:');
            if (match.length > 0) {
              maxMessageSize = parseInt(match[0].substr(19), 10);
            } else if (browserDetails.browser === 'firefox' &&
              remoteIsFirefox !== -1) {
              // If the maximum message size is not present in the remote SDP and
              // both local and remote are Firefox, the remote peer can receive
              // ~2 GiB.
              maxMessageSize = 2147483637;
            }
            return maxMessageSize;
          };

          var origSetRemoteDescription =
            window.RTCPeerConnection.prototype.setRemoteDescription;
          window.RTCPeerConnection.prototype.setRemoteDescription = function () {
            var pc = this;
            pc._sctp = null;

            if (sctpInDescription(arguments[0])) {
              // Check if the remote is FF.
              var isFirefox = getRemoteFirefoxVersion(arguments[0]);

              // Get the maximum message size the local peer is capable of sending
              var canSendMMS = getCanSendMaxMessageSize(isFirefox);

              // Get the maximum message size of the remote peer.
              var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

              // Determine final maximum message size
              var maxMessageSize;
              if (canSendMMS === 0 && remoteMMS === 0) {
                maxMessageSize = Number.POSITIVE_INFINITY;
              } else if (canSendMMS === 0 || remoteMMS === 0) {
                maxMessageSize = Math.max(canSendMMS, remoteMMS);
              } else {
                maxMessageSize = Math.min(canSendMMS, remoteMMS);
              }

              // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
              // attribute.
              var sctp = {};
              Object.defineProperty(sctp, 'maxMessageSize', {
                get: function () {
                  return maxMessageSize;
                }
              });
              pc._sctp = sctp;
            }

            return origSetRemoteDescription.apply(pc, arguments);
          };
        },

        shimSendThrowTypeError: function (window) {
          if (!(window.RTCPeerConnection &&
              'createDataChannel' in window.RTCPeerConnection.prototype)) {
            return;
          }

          // Note: Although Firefox >= 57 has a native implementation, the maximum
          //       message size can be reset for all data channels at a later stage.
          //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

          var origCreateDataChannel =
            window.RTCPeerConnection.prototype.createDataChannel;
          window.RTCPeerConnection.prototype.createDataChannel = function () {
            var pc = this;
            var dataChannel = origCreateDataChannel.apply(pc, arguments);
            var origDataChannelSend = dataChannel.send;

            // Patch 'send' method
            dataChannel.send = function () {
              var dc = this;
              var data = arguments[0];
              var length = data.length || data.size || data.byteLength;
              if (length > pc.sctp.maxMessageSize) {
                throw new DOMException('Message too large (can send a maximum of ' +
                  pc.sctp.maxMessageSize + ' bytes)', 'TypeError');
              }
              return origDataChannelSend.apply(dc, arguments);
            };

            return dataChannel;
          };
        }
      };

    }, {
      "./utils": 13,
      "sdp": 2
    }],
    8: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');
      var shimRTCPeerConnection = require('rtcpeerconnection-shim');

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimPeerConnection: function (window) {
          var browserDetails = utils.detectBrowser(window);

          if (window.RTCIceGatherer) {
            if (!window.RTCIceCandidate) {
              window.RTCIceCandidate = function (args) {
                return args;
              };
            }
            if (!window.RTCSessionDescription) {
              window.RTCSessionDescription = function (args) {
                return args;
              };
            }
            // this adds an additional event listener to MediaStrackTrack that signals
            // when a tracks enabled property was changed. Workaround for a bug in
            // addStream, see below. No longer required in 15025+
            if (browserDetails.version < 15025) {
              var origMSTEnabled = Object.getOwnPropertyDescriptor(
                window.MediaStreamTrack.prototype, 'enabled');
              Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
                set: function (value) {
                  origMSTEnabled.set.call(this, value);
                  var ev = new Event('enabled');
                  ev.enabled = value;
                  this.dispatchEvent(ev);
                }
              });
            }
          }

          // ORTC defines the DTMF sender a bit different.
          // https://github.com/w3c/ortc/issues/714
          if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
            Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
              get: function () {
                if (this._dtmf === undefined) {
                  if (this.track.kind === 'audio') {
                    this._dtmf = new window.RTCDtmfSender(this);
                  } else if (this.track.kind === 'video') {
                    this._dtmf = null;
                  }
                }
                return this._dtmf;
              }
            });
          }
          // Edge currently only implements the RTCDtmfSender, not the
          // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
          if (window.RTCDtmfSender && !window.RTCDTMFSender) {
            window.RTCDTMFSender = window.RTCDtmfSender;
          }

          window.RTCPeerConnection =
            shimRTCPeerConnection(window, browserDetails.version);
        },
        shimReplaceTrack: function (window) {
          // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
          if (window.RTCRtpSender &&
            !('replaceTrack' in window.RTCRtpSender.prototype)) {
            window.RTCRtpSender.prototype.replaceTrack =
              window.RTCRtpSender.prototype.setTrack;
          }
        }
      };

    }, {
      "../utils": 13,
      "./getusermedia": 9,
      "rtcpeerconnection-shim": 1
    }],
    9: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      // Expose public methods.
      module.exports = function (window) {
        var navigator = window && window.navigator;

        var shimError_ = function (e) {
          return {
            name: {
              PermissionDeniedError: 'NotAllowedError'
            } [e.name] || e.name,
            message: e.message,
            constraint: e.constraint,
            toString: function () {
              return this.name;
            }
          };
        };

        // getUserMedia error shim.
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function (c) {
          return origGetUserMedia(c).catch(function (e) {
            return Promise.reject(shimError_(e));
          });
        };
      };

    }, {}],
    10: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimOnTrack: function (window) {
          if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
              window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
              get: function () {
                return this._ontrack;
              },
              set: function (f) {
                if (this._ontrack) {
                  this.removeEventListener('track', this._ontrack);
                  this.removeEventListener('addstream', this._ontrackpoly);
                }
                this.addEventListener('track', this._ontrack = f);
                this.addEventListener('addstream', this._ontrackpoly = function (e) {
                  e.stream.getTracks().forEach(function (track) {
                    var event = new Event('track');
                    event.track = track;
                    event.receiver = {
                      track: track
                    };
                    event.transceiver = {
                      receiver: event.receiver
                    };
                    event.streams = [e.stream];
                    this.dispatchEvent(event);
                  }.bind(this));
                }.bind(this));
              }
            });
          }
          if (typeof window === 'object' && window.RTCTrackEvent &&
            ('receiver' in window.RTCTrackEvent.prototype) &&
            !('transceiver' in window.RTCTrackEvent.prototype)) {
            Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
              get: function () {
                return {
                  receiver: this.receiver
                };
              }
            });
          }
        },

        shimSourceObject: function (window) {
          // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
          if (typeof window === 'object') {
            if (window.HTMLMediaElement &&
              !('srcObject' in window.HTMLMediaElement.prototype)) {
              // Shim the srcObject property, once, when HTMLMediaElement is found.
              Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                get: function () {
                  return this.mozSrcObject;
                },
                set: function (stream) {
                  this.mozSrcObject = stream;
                }
              });
            }
          }
        },

        shimPeerConnection: function (window) {
          var browserDetails = utils.detectBrowser(window);

          if (typeof window !== 'object' || !(window.RTCPeerConnection ||
              window.mozRTCPeerConnection)) {
            return; // probably media.peerconnection.enabled=false in about:config
          }
          // The RTCPeerConnection object.
          if (!window.RTCPeerConnection) {
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              if (browserDetails.version < 38) {
                // .urls is not supported in FF < 38.
                // create RTCIceServers with a single url.
                if (pcConfig && pcConfig.iceServers) {
                  var newIceServers = [];
                  for (var i = 0; i < pcConfig.iceServers.length; i++) {
                    var server = pcConfig.iceServers[i];
                    if (server.hasOwnProperty('urls')) {
                      for (var j = 0; j < server.urls.length; j++) {
                        var newServer = {
                          url: server.urls[j]
                        };
                        if (server.urls[j].indexOf('turn') === 0) {
                          newServer.username = server.username;
                          newServer.credential = server.credential;
                        }
                        newIceServers.push(newServer);
                      }
                    } else {
                      newIceServers.push(pcConfig.iceServers[i]);
                    }
                  }
                  pcConfig.iceServers = newIceServers;
                }
              }
              return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype =
              window.mozRTCPeerConnection.prototype;

            // wrap static methods. Currently just generateCertificate.
            if (window.mozRTCPeerConnection.generateCertificate) {
              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function () {
                  return window.mozRTCPeerConnection.generateCertificate;
                }
              });
            }

            window.RTCSessionDescription = window.mozRTCSessionDescription;
            window.RTCIceCandidate = window.mozRTCIceCandidate;
          }

          // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              arguments[0] = new((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
              return nativeMethod.apply(this, arguments);
            };
          });

          // support for addIceCandidate(null or undefined)
          var nativeAddIceCandidate =
            window.RTCPeerConnection.prototype.addIceCandidate;
          window.RTCPeerConnection.prototype.addIceCandidate = function () {
            if (!arguments[0]) {
              if (arguments[1]) {
                arguments[1].apply(null);
              }
              return Promise.resolve();
            }
            return nativeAddIceCandidate.apply(this, arguments);
          };

          // shim getStats with maplike support
          var makeMapStats = function (stats) {
            var map = new Map();
            Object.keys(stats).forEach(function (key) {
              map.set(key, stats[key]);
              map[key] = stats[key];
            });
            return map;
          };

          var modernStatsTypes = {
            inboundrtp: 'inbound-rtp',
            outboundrtp: 'outbound-rtp',
            candidatepair: 'candidate-pair',
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          };

          var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
          window.RTCPeerConnection.prototype.getStats = function (
            selector,
            onSucc,
            onErr
          ) {
            return nativeGetStats.apply(this, [selector || null])
              .then(function (stats) {
                if (browserDetails.version < 48) {
                  stats = makeMapStats(stats);
                }
                if (browserDetails.version < 53 && !onSucc) {
                  // Shim only promise getStats with spec-hyphens in type names
                  // Leave callback version alone; misc old uses of forEach before Map
                  try {
                    stats.forEach(function (stat) {
                      stat.type = modernStatsTypes[stat.type] || stat.type;
                    });
                  } catch (e) {
                    if (e.name !== 'TypeError') {
                      throw e;
                    }
                    // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                    stats.forEach(function (stat, i) {
                      stats.set(i, Object.assign({}, stat, {
                        type: modernStatsTypes[stat.type] || stat.type
                      }));
                    });
                  }
                }
                return stats;
              })
              .then(onSucc, onErr);
          };
        },

        shimRemoveStream: function (window) {
          if (!window.RTCPeerConnection ||
            'removeStream' in window.RTCPeerConnection.prototype) {
            return;
          }
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            utils.deprecated('removeStream', 'removeTrack');
            this.getSenders().forEach(function (sender) {
              if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
                pc.removeTrack(sender);
              }
            });
          };
        }
      };

    }, {
      "../utils": 13,
      "./getusermedia": 11
    }],
    11: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');
      var logging = utils.log;

      // Expose public methods.
      module.exports = function (window) {
        var browserDetails = utils.detectBrowser(window);
        var navigator = window && window.navigator;
        var MediaStreamTrack = window && window.MediaStreamTrack;

        var shimError_ = function (e) {
          return {
            name: {
              InternalError: 'NotReadableError',
              NotSupportedError: 'TypeError',
              PermissionDeniedError: 'NotAllowedError',
              SecurityError: 'NotAllowedError'
            } [e.name] || e.name,
            message: {
              'The operation is insecure.': 'The request is not allowed by the ' +
                'user agent or the platform in the current context.'
            } [e.message] || e.message,
            constraint: e.constraint,
            toString: function () {
              return this.name + (this.message && ': ') + this.message;
            }
          };
        };

        // getUserMedia constraints shim.
        var getUserMedia_ = function (constraints, onSuccess, onError) {
          var constraintsToFF37_ = function (c) {
            if (typeof c !== 'object' || c.require) {
              return c;
            }
            var require = [];
            Object.keys(c).forEach(function (key) {
              if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                return;
              }
              var r = c[key] = (typeof c[key] === 'object') ?
                c[key] : {
                  ideal: c[key]
                };
              if (r.min !== undefined ||
                r.max !== undefined || r.exact !== undefined) {
                require.push(key);
              }
              if (r.exact !== undefined) {
                if (typeof r.exact === 'number') {
                  r.min = r.max = r.exact;
                } else {
                  c[key] = r.exact;
                }
                delete r.exact;
              }
              if (r.ideal !== undefined) {
                c.advanced = c.advanced || [];
                var oc = {};
                if (typeof r.ideal === 'number') {
                  oc[key] = {
                    min: r.ideal,
                    max: r.ideal
                  };
                } else {
                  oc[key] = r.ideal;
                }
                c.advanced.push(oc);
                delete r.ideal;
                if (!Object.keys(r).length) {
                  delete c[key];
                }
              }
            });
            if (require.length) {
              c.require = require;
            }
            return c;
          };
          constraints = JSON.parse(JSON.stringify(constraints));
          if (browserDetails.version < 38) {
            logging('spec: ' + JSON.stringify(constraints));
            if (constraints.audio) {
              constraints.audio = constraintsToFF37_(constraints.audio);
            }
            if (constraints.video) {
              constraints.video = constraintsToFF37_(constraints.video);
            }
            logging('ff37: ' + JSON.stringify(constraints));
          }
          return navigator.mozGetUserMedia(constraints, onSuccess, function (e) {
            onError(shimError_(e));
          });
        };

        // Returns the result of getUserMedia as a Promise.
        var getUserMediaPromise_ = function (constraints) {
          return new Promise(function (resolve, reject) {
            getUserMedia_(constraints, resolve, reject);
          });
        };

        // Shim for mediaDevices on older versions.
        if (!navigator.mediaDevices) {
          navigator.mediaDevices = {
            getUserMedia: getUserMediaPromise_,
            addEventListener: function () {},
            removeEventListener: function () {}
          };
        }
        navigator.mediaDevices.enumerateDevices =
          navigator.mediaDevices.enumerateDevices || function () {
            return new Promise(function (resolve) {
              var infos = [{
                  kind: 'audioinput',
                  deviceId: 'default',
                  label: '',
                  groupId: ''
                },
                {
                  kind: 'videoinput',
                  deviceId: 'default',
                  label: '',
                  groupId: ''
                }
              ];
              resolve(infos);
            });
          };

        if (browserDetails.version < 41) {
          // Work around http://bugzil.la/1169665
          var orgEnumerateDevices =
            navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
          navigator.mediaDevices.enumerateDevices = function () {
            return orgEnumerateDevices().then(undefined, function (e) {
              if (e.name === 'NotFoundError') {
                return [];
              }
              throw e;
            });
          };
        }
        if (browserDetails.version < 49) {
          var origGetUserMedia = navigator.mediaDevices.getUserMedia.
          bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (c) {
            return origGetUserMedia(c).then(function (stream) {
              // Work around https://bugzil.la/802326
              if (c.audio && !stream.getAudioTracks().length ||
                c.video && !stream.getVideoTracks().length) {
                stream.getTracks().forEach(function (track) {
                  track.stop();
                });
                throw new DOMException('The object can not be found here.',
                  'NotFoundError');
              }
              return stream;
            }, function (e) {
              return Promise.reject(shimError_(e));
            });
          };
        }
        if (!(browserDetails.version > 55 &&
            'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
          var remap = function (obj, a, b) {
            if (a in obj && !(b in obj)) {
              obj[b] = obj[a];
              delete obj[a];
            }
          };

          var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
          bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (c) {
            if (typeof c === 'object' && typeof c.audio === 'object') {
              c = JSON.parse(JSON.stringify(c));
              remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
              remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeGetUserMedia(c);
          };

          if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function () {
              var obj = nativeGetSettings.apply(this, arguments);
              remap(obj, 'mozAutoGainControl', 'autoGainControl');
              remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
              return obj;
            };
          }

          if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function (c) {
              if (this.kind === 'audio' && typeof c === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c, 'autoGainControl', 'mozAutoGainControl');
                remap(c, 'noiseSuppression', 'mozNoiseSuppression');
              }
              return nativeApplyConstraints.apply(this, [c]);
            };
          }
        }
        navigator.getUserMedia = function (constraints, onSuccess, onError) {
          if (browserDetails.version < 44) {
            return getUserMedia_(constraints, onSuccess, onError);
          }
          // Replace Firefox 44+'s deprecation warning with unprefixed version.
          utils.deprecated('navigator.getUserMedia',
            'navigator.mediaDevices.getUserMedia');
          navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
        };
      };

    }, {
      "../utils": 13
    }],
    12: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      'use strict';
      var utils = require('../utils');

      module.exports = {
        shimLocalStreamsAPI: function (window) {
          if (typeof window !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getLocalStreams = function () {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              return this._localStreams;
            };
          }
          if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getStreamById = function (id) {
              var result = null;
              if (this._localStreams) {
                this._localStreams.forEach(function (stream) {
                  if (stream.id === id) {
                    result = stream;
                  }
                });
              }
              if (this._remoteStreams) {
                this._remoteStreams.forEach(function (stream) {
                  if (stream.id === id) {
                    result = stream;
                  }
                });
              }
              return result;
            };
          }
          if (!('addStream' in window.RTCPeerConnection.prototype)) {
            var _addTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addStream = function (stream) {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              if (this._localStreams.indexOf(stream) === -1) {
                this._localStreams.push(stream);
              }
              var pc = this;
              stream.getTracks().forEach(function (track) {
                _addTrack.call(pc, track, stream);
              });
            };

            window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
              if (stream) {
                if (!this._localStreams) {
                  this._localStreams = [stream];
                } else if (this._localStreams.indexOf(stream) === -1) {
                  this._localStreams.push(stream);
                }
              }
              return _addTrack.call(this, track, stream);
            };
          }
          if (!('removeStream' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              var index = this._localStreams.indexOf(stream);
              if (index === -1) {
                return;
              }
              this._localStreams.splice(index, 1);
              var pc = this;
              var tracks = stream.getTracks();
              this.getSenders().forEach(function (sender) {
                if (tracks.indexOf(sender.track) !== -1) {
                  pc.removeTrack(sender);
                }
              });
            };
          }
        },
        shimRemoteStreamsAPI: function (window) {
          if (typeof window !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getRemoteStreams = function () {
              return this._remoteStreams ? this._remoteStreams : [];
            };
          }
          if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
              get: function () {
                return this._onaddstream;
              },
              set: function (f) {
                var pc = this;
                if (this._onaddstream) {
                  this.removeEventListener('addstream', this._onaddstream);
                  this.removeEventListener('track', this._onaddstreampoly);
                }
                this.addEventListener('addstream', this._onaddstream = f);
                this.addEventListener('track', this._onaddstreampoly = function (e) {
                  e.streams.forEach(function (stream) {
                    if (!pc._remoteStreams) {
                      pc._remoteStreams = [];
                    }
                    if (pc._remoteStreams.indexOf(stream) >= 0) {
                      return;
                    }
                    pc._remoteStreams.push(stream);
                    var event = new Event('addstream');
                    event.stream = stream;
                    pc.dispatchEvent(event);
                  });
                });
              }
            });
          }
        },
        shimCallbacksAPI: function (window) {
          if (typeof window !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          var prototype = window.RTCPeerConnection.prototype;
          var createOffer = prototype.createOffer;
          var createAnswer = prototype.createAnswer;
          var setLocalDescription = prototype.setLocalDescription;
          var setRemoteDescription = prototype.setRemoteDescription;
          var addIceCandidate = prototype.addIceCandidate;

          prototype.createOffer = function (successCallback, failureCallback) {
            var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
            var promise = createOffer.apply(this, [options]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };

          prototype.createAnswer = function (successCallback, failureCallback) {
            var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
            var promise = createAnswer.apply(this, [options]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };

          var withCallback = function (description, successCallback, failureCallback) {
            var promise = setLocalDescription.apply(this, [description]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.setLocalDescription = withCallback;

          withCallback = function (description, successCallback, failureCallback) {
            var promise = setRemoteDescription.apply(this, [description]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.setRemoteDescription = withCallback;

          withCallback = function (candidate, successCallback, failureCallback) {
            var promise = addIceCandidate.apply(this, [candidate]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.addIceCandidate = withCallback;
        },
        shimGetUserMedia: function (window) {
          var navigator = window && window.navigator;

          if (!navigator.getUserMedia) {
            if (navigator.webkitGetUserMedia) {
              navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
            } else if (navigator.mediaDevices &&
              navigator.mediaDevices.getUserMedia) {
              navigator.getUserMedia = function (constraints, cb, errcb) {
                navigator.mediaDevices.getUserMedia(constraints)
                  .then(cb, errcb);
              }.bind(navigator);
            }
          }
        },
        shimRTCIceServerUrls: function (window) {
          // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
          var OrigPeerConnection = window.RTCPeerConnection;
          window.RTCPeerConnection = function (pcConfig, pcConstraints) {
            if (pcConfig && pcConfig.iceServers) {
              var newIceServers = [];
              for (var i = 0; i < pcConfig.iceServers.length; i++) {
                var server = pcConfig.iceServers[i];
                if (!server.hasOwnProperty('urls') &&
                  server.hasOwnProperty('url')) {
                  utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                  server = JSON.parse(JSON.stringify(server));
                  server.urls = server.url;
                  delete server.url;
                  newIceServers.push(server);
                } else {
                  newIceServers.push(pcConfig.iceServers[i]);
                }
              }
              pcConfig.iceServers = newIceServers;
            }
            return new OrigPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
          // wrap static methods. Currently just generateCertificate.
          if ('generateCertificate' in window.RTCPeerConnection) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function () {
                return OrigPeerConnection.generateCertificate;
              }
            });
          }
        },
        shimTrackEventTransceiver: function (window) {
          // Add event.transceiver member over deprecated event.receiver
          if (typeof window === 'object' && window.RTCPeerConnection &&
            ('receiver' in window.RTCTrackEvent.prototype) &&
            // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
            // defined for some reason even when window.RTCTransceiver is not.
            !window.RTCTransceiver) {
            Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
              get: function () {
                return {
                  receiver: this.receiver
                };
              }
            });
          }
        },

        shimCreateOfferLegacy: function (window) {
          var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
          window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
            var pc = this;
            if (offerOptions) {
              if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
              }
              var audioTransceiver = pc.getTransceivers().find(function (transceiver) {
                return transceiver.sender.track &&
                  transceiver.sender.track.kind === 'audio';
              });
              if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === 'sendrecv') {
                  if (audioTransceiver.setDirection) {
                    audioTransceiver.setDirection('sendonly');
                  } else {
                    audioTransceiver.direction = 'sendonly';
                  }
                } else if (audioTransceiver.direction === 'recvonly') {
                  if (audioTransceiver.setDirection) {
                    audioTransceiver.setDirection('inactive');
                  } else {
                    audioTransceiver.direction = 'inactive';
                  }
                }
              } else if (offerOptions.offerToReceiveAudio === true &&
                !audioTransceiver) {
                pc.addTransceiver('audio');
              }


              if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
              }
              var videoTransceiver = pc.getTransceivers().find(function (transceiver) {
                return transceiver.sender.track &&
                  transceiver.sender.track.kind === 'video';
              });
              if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === 'sendrecv') {
                  videoTransceiver.setDirection('sendonly');
                } else if (videoTransceiver.direction === 'recvonly') {
                  videoTransceiver.setDirection('inactive');
                }
              } else if (offerOptions.offerToReceiveVideo === true &&
                !videoTransceiver) {
                pc.addTransceiver('video');
              }
            }
            return origCreateOffer.apply(pc, arguments);
          };
        }
      };

    }, {
      "../utils": 13
    }],
    13: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var logDisabled_ = true;
      var deprecationWarnings_ = true;

      /**
       * Extract browser version out of the provided user agent string.
       *
       * @param {!string} uastring userAgent string.
       * @param {!string} expr Regular expression used as match criteria.
       * @param {!number} pos position in the version string to be returned.
       * @return {!number} browser version.
       */
      function extractVersion(uastring, expr, pos) {
        var match = uastring.match(expr);
        return match && match.length >= pos && parseInt(match[pos], 10);
      }

      // Wraps the peerconnection event eventNameToWrap in a function
      // which returns the modified event object.
      function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
        if (!window.RTCPeerConnection) {
          return;
        }
        var proto = window.RTCPeerConnection.prototype;
        var nativeAddEventListener = proto.addEventListener;
        proto.addEventListener = function (nativeEventName, cb) {
          if (nativeEventName !== eventNameToWrap) {
            return nativeAddEventListener.apply(this, arguments);
          }
          var wrappedCallback = function (e) {
            cb(wrapper(e));
          };
          this._eventMap = this._eventMap || {};
          this._eventMap[cb] = wrappedCallback;
          return nativeAddEventListener.apply(this, [nativeEventName,
            wrappedCallback
          ]);
        };

        var nativeRemoveEventListener = proto.removeEventListener;
        proto.removeEventListener = function (nativeEventName, cb) {
          if (nativeEventName !== eventNameToWrap || !this._eventMap ||
            !this._eventMap[cb]) {
            return nativeRemoveEventListener.apply(this, arguments);
          }
          var unwrappedCb = this._eventMap[cb];
          delete this._eventMap[cb];
          return nativeRemoveEventListener.apply(this, [nativeEventName,
            unwrappedCb
          ]);
        };

        Object.defineProperty(proto, 'on' + eventNameToWrap, {
          get: function () {
            return this['_on' + eventNameToWrap];
          },
          set: function (cb) {
            if (this['_on' + eventNameToWrap]) {
              this.removeEventListener(eventNameToWrap,
                this['_on' + eventNameToWrap]);
              delete this['_on' + eventNameToWrap];
            }
            if (cb) {
              this.addEventListener(eventNameToWrap,
                this['_on' + eventNameToWrap] = cb);
            }
          }
        });
      }

      // Utility methods.
      module.exports = {
        extractVersion: extractVersion,
        wrapPeerConnectionEvent: wrapPeerConnectionEvent,
        disableLog: function (bool) {
          if (typeof bool !== 'boolean') {
            return new Error('Argument type: ' + typeof bool +
              '. Please use a boolean.');
          }
          logDisabled_ = bool;
          return (bool) ? 'adapter.js logging disabled' :
            'adapter.js logging enabled';
        },

        /**
         * Disable or enable deprecation warnings
         * @param {!boolean} bool set to true to disable warnings.
         */
        disableWarnings: function (bool) {
          if (typeof bool !== 'boolean') {
            return new Error('Argument type: ' + typeof bool +
              '. Please use a boolean.');
          }
          deprecationWarnings_ = !bool;
          return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
        },

        log: function () {
          if (typeof window === 'object') {
            if (logDisabled_) {
              return;
            }
            if (typeof console !== 'undefined' && typeof console.log === 'function') {
              console.log.apply(console, arguments);
            }
          }
        },

        /**
         * Shows a deprecation warning suggesting the modern and spec-compatible API.
         */
        deprecated: function (oldMethod, newMethod) {
          if (!deprecationWarnings_) {
            return;
          }
          console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
            ' instead.');
        },

        /**
         * Browser detector.
         *
         * @return {object} result containing browser and version
         *     properties.
         */
        detectBrowser: function (window) {
          var navigator = window && window.navigator;

          // Returned result object.
          var result = {};
          result.browser = null;
          result.version = null;

          // Fail early if it's not a browser
          if (typeof window === 'undefined' || !window.navigator) {
            result.browser = 'Not a browser.';
            return result;
          }

          if (navigator.mozGetUserMedia) { // Firefox.
            result.browser = 'firefox';
            result.version = extractVersion(navigator.userAgent,
              /Firefox\/(\d+)\./, 1);
          } else if (navigator.webkitGetUserMedia) {
            // Chrome, Chromium, Webview, Opera.
            // Version matches Chrome/WebRTC version.
            result.browser = 'chrome';
            result.version = extractVersion(navigator.userAgent,
              /Chrom(e|ium)\/(\d+)\./, 2);
          } else if (navigator.mediaDevices &&
            navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
            result.browser = 'edge';
            result.version = extractVersion(navigator.userAgent,
              /Edge\/(\d+).(\d+)$/, 2);
          } else if (window.RTCPeerConnection &&
            navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
            result.browser = 'safari';
            result.version = extractVersion(navigator.userAgent,
              /AppleWebKit\/(\d+)\./, 1);
          } else { // Default fallthrough: not supported.
            result.browser = 'Not a supported browser.';
            return result;
          }

          return result;
        }
      };

    }, {}]
  }, {}, [3])(3)
});
'use strict';

// Last time updated: 2019-01-11 7:48:53 AM UTC

// _________________________
// RTCMultiConnection v3.6.6

// Open-Sourced: https://github.com/muaz-khan/RTCMultiConnection

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------


"use strict";
var RTCMultiConnection = function (roomid, forceOptions) {
  var that;

  function SocketConnection(connection, connectCallback) {
    function isData(session) {
      return !session.audio && !session.video && !session.screen && session.data
    }
    var parameters = "";
    parameters += "?userid=" + connection.userid, parameters += "&sessionid=" + connection.sessionid, parameters += "&msgEvent=" + connection.socketMessageEvent, parameters += "&socketCustomEvent=" + connection.socketCustomEvent, parameters += "&autoCloseEntireSession=" + !!connection.autoCloseEntireSession, !0 === connection.session.broadcast && (parameters += "&oneToMany=true"), parameters += "&maxParticipantsAllowed=" + connection.maxParticipantsAllowed, connection.enableScalableBroadcast && (parameters += "&enableScalableBroadcast=true", parameters += "&maxRelayLimitPerUser=" + (connection.maxRelayLimitPerUser || 2)), parameters += "&extra=" + JSON.stringify(connection.extra || {}), connection.socketCustomParameters && (parameters += connection.socketCustomParameters);
    try {
      io.sockets = {}
    } catch (e) {}
    if (connection.socketURL || (connection.socketURL = "/"), "/" != connection.socketURL.substr(connection.socketURL.length - 1, 1)) throw '"socketURL" MUST end with a slash.';
    connection.enableLogs && ("/" == connection.socketURL ? console.info("socket.io url is: ", location.origin + "/") : console.info("socket.io url is: ", connection.socketURL));
    try {
      connection.socket = io(connection.socketURL + parameters)
    } catch (e) {
      connection.socket = io.connect(connection.socketURL + parameters, connection.socketOptions)
    }
    var mPeer = connection.multiPeersHandler;

    function updateExtraBackup(remoteUserId, extra) {
      connection.peersBackup[remoteUserId] || (connection.peersBackup[remoteUserId] = {
        userid: remoteUserId,
        extra: {}
      }), connection.peersBackup[remoteUserId].extra = extra
    }
    connection.socket.on("extra-data-updated", function (remoteUserId, extra) {
      connection.peers[remoteUserId] && (connection.peers[remoteUserId].extra = extra, connection.onExtraDataUpdated({
        userid: remoteUserId,
        extra: extra
      }), updateExtraBackup(remoteUserId, extra))
    }), connection.socket.on(connection.socketMessageEvent, function onMessageEvent(message) {
      if (message.remoteUserId == connection.userid)
        if (connection.peers[message.sender] && connection.peers[message.sender].extra != message.message.extra && (connection.peers[message.sender].extra = message.extra, connection.onExtraDataUpdated({
            userid: message.sender,
            extra: message.extra
          }), updateExtraBackup(message.sender, message.extra)), message.message.streamSyncNeeded && connection.peers[message.sender]) {
          var stream = connection.streamEvents[message.message.streamid];
          if (!stream || !stream.stream) return;
          var action = message.message.action;
          if ("ended" === action || "inactive" === action || "stream-removed" === action) return connection.peersBackup[stream.userid] && (stream.extra = connection.peersBackup[stream.userid].extra), void connection.onstreamended(stream);
          var type = "both" != message.message.type ? message.message.type : null;
          "function" == typeof stream.stream[action] && stream.stream[action](type)
        } else if ("dropPeerConnection" !== message.message) {
        if (message.message.allParticipants) return -1 === message.message.allParticipants.indexOf(message.sender) && message.message.allParticipants.push(message.sender), void message.message.allParticipants.forEach(function (participant) {
          mPeer[connection.peers[participant] ? "renegotiatePeer" : "createNewPeer"](participant, {
            localPeerSdpConstraints: {
              OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
              OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
            },
            remotePeerSdpConstraints: {
              OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
              OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
            },
            isOneWay: !!connection.session.oneway || "one-way" === connection.direction,
            isDataOnly: isData(connection.session)
          })
        });
        if (message.message.newParticipant) {
          if (message.message.newParticipant == connection.userid) return;
          if (connection.peers[message.message.newParticipant]) return;
          mPeer.createNewPeer(message.message.newParticipant, message.message.userPreferences || {
            localPeerSdpConstraints: {
              OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
              OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
            },
            remotePeerSdpConstraints: {
              OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
              OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
            },
            isOneWay: !!connection.session.oneway || "one-way" === connection.direction,
            isDataOnly: isData(connection.session)
          })
        } else if (message.message.readyForOffer && (connection.attachStreams.length && (connection.waitingForLocalMedia = !1), connection.waitingForLocalMedia)) setTimeout(function () {
          onMessageEvent(message)
        }, 1);
        else if (message.message.newParticipationRequest && message.sender !== connection.userid) {
          connection.peers[message.sender] && connection.deletePeer(message.sender);
          var userPreferences = {
            extra: message.extra || {},
            localPeerSdpConstraints: message.message.remotePeerSdpConstraints || {
              OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
              OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
            },
            remotePeerSdpConstraints: message.message.localPeerSdpConstraints || {
              OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
              OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
            },
            isOneWay: void 0 !== message.message.isOneWay ? message.message.isOneWay : !!connection.session.oneway || "one-way" === connection.direction,
            isDataOnly: void 0 !== message.message.isDataOnly ? message.message.isDataOnly : isData(connection.session),
            dontGetRemoteStream: void 0 !== message.message.isOneWay ? message.message.isOneWay : !!connection.session.oneway || "one-way" === connection.direction,
            dontAttachLocalStream: !!message.message.dontGetRemoteStream,
            connectionDescription: message,
            successCallback: function () {}
          };
          connection.onNewParticipant(message.sender, userPreferences)
        } else {
          if (message.message.changedUUID && connection.peers[message.message.oldUUID] && (connection.peers[message.message.newUUID] = connection.peers[message.message.oldUUID], delete connection.peers[message.message.oldUUID]), message.message.userLeft) return mPeer.onUserLeft(message.sender), void(message.message.autoCloseEntireSession && connection.leave());
          mPeer.addNegotiatedMessage(message.message, message.sender)
        }
      } else connection.deletePeer(message.sender)
    });
    var alreadyConnected = !1;
    connection.socket.resetProps = function () {
      alreadyConnected = !1
    }, connection.socket.on("connect", function () {
      alreadyConnected || (alreadyConnected = !0, connection.enableLogs && console.info("socket.io connection is opened."), setTimeout(function () {
        connection.socket.emit("extra-data-updated", connection.extra)
      }, 1e3), connectCallback && connectCallback(connection.socket))
    }), connection.socket.on("disconnect", function (event) {
      connection.onSocketDisconnect(event)
    }), connection.socket.on("error", function (event) {
      connection.onSocketError(event)
    }), connection.socket.on("user-disconnected", function (remoteUserId) {
      remoteUserId !== connection.userid && (connection.onUserStatusChanged({
        userid: remoteUserId,
        status: "offline",
        extra: connection.peers[remoteUserId] && connection.peers[remoteUserId].extra || {}
      }), connection.deletePeer(remoteUserId))
    }), connection.socket.on("user-connected", function (userid) {
      userid !== connection.userid && connection.onUserStatusChanged({
        userid: userid,
        status: "online",
        extra: connection.peers[userid] && connection.peers[userid].extra || {}
      })
    }), connection.socket.on("closed-entire-session", function (sessionid, extra) {
      connection.leave(), connection.onEntireSessionClosed({
        sessionid: sessionid,
        userid: sessionid,
        extra: extra
      })
    }), connection.socket.on("userid-already-taken", function (useridAlreadyTaken, yourNewUserId) {
      connection.onUserIdAlreadyTaken(useridAlreadyTaken, yourNewUserId)
    }), connection.socket.on("logs", function (log) {
      connection.enableLogs && console.debug("server-logs", log)
    }), connection.socket.on("number-of-broadcast-viewers-updated", function (data) {
      connection.onNumberOfBroadcastViewersUpdated(data)
    }), connection.socket.on("set-isInitiator-true", function (sessionid) {
      sessionid == connection.sessionid && (connection.isInitiator = !0)
    })
  }

  function MultiPeers(connection) {
    var self = this,
      skipPeers = ["getAllParticipants", "getLength", "selectFirst", "streams", "send", "forEach"];

    function initFileBufferReader() {
      connection.fbr = new FileBufferReader, connection.fbr.onProgress = function (chunk) {
        connection.onFileProgress(chunk)
      }, connection.fbr.onBegin = function (file) {
        connection.onFileStart(file)
      }, connection.fbr.onEnd = function (file) {
        connection.onFileEnd(file)
      }
    }
    connection.peers = {
      getLength: function () {
        var numberOfPeers = 0;
        for (var peer in this) - 1 == skipPeers.indexOf(peer) && numberOfPeers++;
        return numberOfPeers
      },
      selectFirst: function () {
        var firstPeer;
        for (var peer in this) - 1 == skipPeers.indexOf(peer) && (firstPeer = this[peer]);
        return firstPeer
      },
      getAllParticipants: function (sender) {
        var allPeers = [];
        for (var peer in this) - 1 == skipPeers.indexOf(peer) && peer != sender && allPeers.push(peer);
        return allPeers
      },
      forEach: function (callbcak) {
        this.getAllParticipants().forEach(function (participant) {
          callbcak(connection.peers[participant])
        })
      },
      send: function (data, remoteUserId) {
        var that = this;
        if (!isNull(data.size) && !isNull(data.type)) {
          if (connection.enableFileSharing) return void self.shareFile(data, remoteUserId);
          "string" != typeof data && (data = JSON.stringify(data))
        }
        if ("text" === data.type || data instanceof ArrayBuffer || data instanceof DataView) {
          if ("text" === data.type && (data = JSON.stringify(data)), remoteUserId) {
            var remoteUser = connection.peers[remoteUserId];
            if (remoteUser) return remoteUser.channels.length ? void remoteUser.channels.forEach(function (channel) {
              channel.send(data)
            }) : (connection.peers[remoteUserId].createDataChannel(), connection.renegotiate(remoteUserId), void setTimeout(function () {
              that.send(data, remoteUserId)
            }, 3e3))
          }
          this.getAllParticipants().forEach(function (participant) {
            if (!that[participant].channels.length) return connection.peers[participant].createDataChannel(), connection.renegotiate(participant), void setTimeout(function () {
              that[participant].channels.forEach(function (channel) {
                channel.send(data)
              })
            }, 3e3);
            that[participant].channels.forEach(function (channel) {
              channel.send(data)
            })
          })
        } else TextSender.send({
          text: data,
          channel: this,
          connection: connection,
          remoteUserId: remoteUserId
        })
      }
    }, this.uuid = connection.userid, this.getLocalConfig = function (remoteSdp, remoteUserId, userPreferences) {
      return userPreferences || (userPreferences = {}), {
        streamsToShare: userPreferences.streamsToShare || {},
        rtcMultiConnection: connection,
        connectionDescription: userPreferences.connectionDescription,
        userid: remoteUserId,
        localPeerSdpConstraints: userPreferences.localPeerSdpConstraints,
        remotePeerSdpConstraints: userPreferences.remotePeerSdpConstraints,
        dontGetRemoteStream: !!userPreferences.dontGetRemoteStream,
        dontAttachLocalStream: !!userPreferences.dontAttachLocalStream,
        renegotiatingPeer: !!userPreferences.renegotiatingPeer,
        peerRef: userPreferences.peerRef,
        channels: userPreferences.channels || [],
        onLocalSdp: function (localSdp) {
          self.onNegotiationNeeded(localSdp, remoteUserId)
        },
        onLocalCandidate: function (localCandidate) {
          (localCandidate = OnIceCandidateHandler.processCandidates(connection, localCandidate)) && self.onNegotiationNeeded(localCandidate, remoteUserId)
        },
        remoteSdp: remoteSdp,
        onDataChannelMessage: function (message) {
          if (!connection.fbr && connection.enableFileSharing && initFileBufferReader(), "string" != typeof message && connection.enableFileSharing) {
            var that = this;
            message instanceof ArrayBuffer || message instanceof DataView ? connection.fbr.convertToObject(message, function (object) {
              that.onDataChannelMessage(object)
            }) : message.readyForNextChunk ? connection.fbr.getNextChunk(message, function (nextChunk, isLastChunk) {
              connection.peers[remoteUserId].channels.forEach(function (channel) {
                channel.send(nextChunk)
              })
            }, remoteUserId) : message.chunkMissing ? connection.fbr.chunkMissing(message) : connection.fbr.addChunk(message, function (promptNextChunk) {
              connection.peers[remoteUserId].peer.channel.send(promptNextChunk)
            })
          } else self.onDataChannelMessage(message, remoteUserId)
        },
        onDataChannelError: function (error) {
          self.onDataChannelError(error, remoteUserId)
        },
        onDataChannelOpened: function (channel) {
          self.onDataChannelOpened(channel, remoteUserId)
        },
        onDataChannelClosed: function (event) {
          self.onDataChannelClosed(event, remoteUserId)
        },
        onRemoteStream: function (stream) {
          connection.peers[remoteUserId] && connection.peers[remoteUserId].streams.push(stream), self.onGettingRemoteMedia(stream, remoteUserId)
        },
        onRemoteStreamRemoved: function (stream) {
          self.onRemovingRemoteMedia(stream, remoteUserId)
        },
        onPeerStateChanged: function (states) {
          self.onPeerStateChanged(states), "new" === states.iceConnectionState && self.onNegotiationStarted(remoteUserId, states), "connected" === states.iceConnectionState && self.onNegotiationCompleted(remoteUserId, states), -1 !== states.iceConnectionState.search(/closed|failed/gi) && (self.onUserLeft(remoteUserId), self.disconnectWith(remoteUserId))
        }
      }
    }, this.createNewPeer = function (remoteUserId, userPreferences) {
      if (!(connection.maxParticipantsAllowed <= connection.getAllParticipants().length)) {
        if (userPreferences = userPreferences || {}, connection.isInitiator && connection.session.audio && "two-way" === connection.session.audio && !userPreferences.streamsToShare && (userPreferences.isOneWay = !1, userPreferences.isDataOnly = !1, userPreferences.session = connection.session), !userPreferences.isOneWay && !userPreferences.isDataOnly) return userPreferences.isOneWay = !0, void this.onNegotiationNeeded({
          enableMedia: !0,
          userPreferences: userPreferences
        }, remoteUserId);
        userPreferences = connection.setUserPreferences(userPreferences, remoteUserId);
        var localConfig = this.getLocalConfig(null, remoteUserId, userPreferences);
        connection.peers[remoteUserId] = new PeerInitiator(localConfig)
      }
    }, this.createAnsweringPeer = function (remoteSdp, remoteUserId, userPreferences) {
      userPreferences = connection.setUserPreferences(userPreferences || {}, remoteUserId);
      var localConfig = this.getLocalConfig(remoteSdp, remoteUserId, userPreferences);
      connection.peers[remoteUserId] = new PeerInitiator(localConfig)
    }, this.renegotiatePeer = function (remoteUserId, userPreferences, remoteSdp) {
      if (connection.peers[remoteUserId]) {
        userPreferences || (userPreferences = {}), userPreferences.renegotiatingPeer = !0, userPreferences.peerRef = connection.peers[remoteUserId].peer, userPreferences.channels = connection.peers[remoteUserId].channels;
        var localConfig = this.getLocalConfig(remoteSdp, remoteUserId, userPreferences);
        connection.peers[remoteUserId] = new PeerInitiator(localConfig)
      } else connection.enableLogs && console.error("Peer (" + remoteUserId + ") does not exist. Renegotiation skipped.")
    }, this.replaceTrack = function (track, remoteUserId, isVideoTrack) {
      if (!connection.peers[remoteUserId]) throw "This peer (" + remoteUserId + ") does not exist.";
      var peer = connection.peers[remoteUserId].peer;
      peer.getSenders && "function" == typeof peer.getSenders && peer.getSenders().length ? peer.getSenders().forEach(function (rtpSender) {
        isVideoTrack && "video" === rtpSender.track.kind && (connection.peers[remoteUserId].peer.lastVideoTrack = rtpSender.track, rtpSender.replaceTrack(track)), isVideoTrack || "audio" !== rtpSender.track.kind || (connection.peers[remoteUserId].peer.lastAudioTrack = rtpSender.track, rtpSender.replaceTrack(track))
      }) : (console.warn("RTPSender.replaceTrack is NOT supported."), this.renegotiatePeer(remoteUserId))
    }, this.onNegotiationNeeded = function (message, remoteUserId) {}, this.addNegotiatedMessage = function (message, remoteUserId) {
      if (message.type && message.sdp) return "answer" == message.type && connection.peers[remoteUserId] && connection.peers[remoteUserId].addRemoteSdp(message), "offer" == message.type && (message.renegotiatingPeer ? this.renegotiatePeer(remoteUserId, null, message) : this.createAnsweringPeer(message, remoteUserId)), void(connection.enableLogs && console.log("Remote peer's sdp:", message.sdp));
      if (message.candidate) return connection.peers[remoteUserId] && connection.peers[remoteUserId].addRemoteCandidate(message), void(connection.enableLogs && console.log("Remote peer's candidate pairs:", message.candidate));
      if (message.enableMedia) {
        connection.session = message.userPreferences.session || connection.session, connection.session.oneway && connection.attachStreams.length && (connection.attachStreams = []), message.userPreferences.isDataOnly && connection.attachStreams.length && (connection.attachStreams.length = []);
        var streamsToShare = {};
        connection.attachStreams.forEach(function (stream) {
          streamsToShare[stream.streamid] = {
            isAudio: !!stream.isAudio,
            isVideo: !!stream.isVideo,
            isScreen: !!stream.isScreen
          }
        }), message.userPreferences.streamsToShare = streamsToShare, self.onNegotiationNeeded({
          readyForOffer: !0,
          userPreferences: message.userPreferences
        }, remoteUserId)
      }
      message.readyForOffer && connection.onReadyForOffer(remoteUserId, message.userPreferences)
    }, this.onGettingRemoteMedia = function (stream, remoteUserId) {}, this.onRemovingRemoteMedia = function (stream, remoteUserId) {}, this.onGettingLocalMedia = function (localStream) {}, this.onLocalMediaError = function (error, constraints) {
      connection.onMediaError(error, constraints)
    }, this.shareFile = function (file, remoteUserId) {
      initFileBufferReader(), connection.fbr.readAsArrayBuffer(file, function (uuid) {
        var arrayOfUsers = connection.getAllParticipants();
        remoteUserId && (arrayOfUsers = [remoteUserId]), arrayOfUsers.forEach(function (participant) {
          connection.fbr.getNextChunk(uuid, function (nextChunk) {
            connection.peers[participant].channels.forEach(function (channel) {
              channel.send(nextChunk)
            })
          }, participant)
        })
      }, {
        userid: connection.userid,
        chunkSize: "Firefox" === DetectRTC.browser.name ? 15e3 : connection.chunkSize || 0
      })
    };
    var textReceiver = new TextReceiver(connection);
    this.onDataChannelMessage = function (message, remoteUserId) {
      textReceiver.receive(JSON.parse(message), remoteUserId, connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {})
    }, this.onDataChannelClosed = function (event, remoteUserId) {
      event.userid = remoteUserId, event.extra = connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {}, connection.onclose(event)
    }, this.onDataChannelError = function (error, remoteUserId) {
      error.userid = remoteUserId, event.extra = connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {}, connection.onerror(error)
    }, this.onDataChannelOpened = function (channel, remoteUserId) {
      connection.peers[remoteUserId].channels.length ? connection.peers[remoteUserId].channels = [channel] : (connection.peers[remoteUserId].channels.push(channel), connection.onopen({
        userid: remoteUserId,
        extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
        channel: channel
      }))
    }, this.onPeerStateChanged = function (state) {
      connection.onPeerStateChanged(state)
    }, this.onNegotiationStarted = function (remoteUserId, states) {}, this.onNegotiationCompleted = function (remoteUserId, states) {}, this.getRemoteStreams = function (remoteUserId) {
      return remoteUserId = remoteUserId || connection.peers.getAllParticipants()[0], connection.peers[remoteUserId] ? connection.peers[remoteUserId].streams : []
    }
  }

  function fireEvent(obj, eventName, args) {
    if ("undefined" != typeof CustomEvent) {
      var event = new CustomEvent(eventName, {
        arguments: args,
        __exposedProps__: args
      });
      obj.dispatchEvent(event)
    }
  }

  function setMuteHandlers(connection, streamEvent) {
    streamEvent.stream && streamEvent.stream && streamEvent.stream.addEventListener && (streamEvent.stream.addEventListener("mute", function (event) {
      (event = connection.streamEvents[streamEvent.streamid]).session = {
        audio: "audio" === event.muteType,
        video: "video" === event.muteType
      }, connection.onmute(event)
    }, !1), streamEvent.stream.addEventListener("unmute", function (event) {
      (event = connection.streamEvents[streamEvent.streamid]).session = {
        audio: "audio" === event.unmuteType,
        video: "video" === event.unmuteType
      }, connection.onunmute(event)
    }, !1))
  }

  function getRandomString() {
    if (window.crypto && window.crypto.getRandomValues && -1 === navigator.userAgent.indexOf("Safari")) {
      for (var a = window.crypto.getRandomValues(new Uint32Array(3)), token = "", i = 0, l = a.length; i < l; i++) token += a[i].toString(36);
      return token
    }
    return (Math.random() * (new Date).getTime()).toString(36).replace(/\./g, "")
  }

  function getRMCMediaElement(stream, callback, connection) {
    if (connection.autoCreateMediaElement) {
      var isAudioOnly = !1;
      getTracks(stream, "video").length || stream.isVideo || stream.isScreen || (isAudioOnly = !0), "Firefox" === DetectRTC.browser.name && (connection.session.video || connection.session.screen) && (isAudioOnly = !1);
      var mediaElement = document.createElement(isAudioOnly ? "audio" : "video");
      mediaElement.srcObject = stream;
      try {
        mediaElement.setAttributeNode(document.createAttribute("autoplay")), mediaElement.setAttributeNode(document.createAttribute("playsinline")), mediaElement.setAttributeNode(document.createAttribute("controls"))
      } catch (e) {
        mediaElement.setAttribute("autoplay", !0), mediaElement.setAttribute("playsinline", !0), mediaElement.setAttribute("controls", !0)
      }
      if ("Firefox" === DetectRTC.browser.name) {
        var streamEndedEvent = "ended";
        "oninactive" in mediaElement && (streamEndedEvent = "inactive"), mediaElement.addEventListener(streamEndedEvent, function () {
          if (currentUserMediaRequest.remove(stream.idInstance), "local" === stream.type) {
            streamEndedEvent = "ended", "oninactive" in stream && (streamEndedEvent = "inactive"), StreamsHandler.onSyncNeeded(stream.streamid, streamEndedEvent), connection.attachStreams.forEach(function (aStream, idx) {
              stream.streamid === aStream.streamid && delete connection.attachStreams[idx]
            });
            var newStreamsArray = [];
            connection.attachStreams.forEach(function (aStream) {
              aStream && newStreamsArray.push(aStream)
            }), connection.attachStreams = newStreamsArray;
            var streamEvent = connection.streamEvents[stream.streamid];
            if (streamEvent) return void connection.onstreamended(streamEvent);
            this.parentNode && this.parentNode.removeChild(this)
          }
        }, !1)
      }
      var played = mediaElement.play();
      if (void 0 !== played) {
        var cbFired = !1;
        setTimeout(function () {
          cbFired || (cbFired = !0, callback(mediaElement))
        }, 1e3), played.then(function () {
          cbFired || (cbFired = !0, callback(mediaElement))
        }).catch(function (error) {
          cbFired || (cbFired = !0, callback(mediaElement))
        })
      } else callback(mediaElement)
    } else callback({})
  }

  function listenEventHandler(eventName, eventHandler) {
    window.removeEventListener(eventName, eventHandler), window.addEventListener(eventName, eventHandler, !1)
  }

  function removeNullEntries(array) {
    var newArray = [];
    return array.forEach(function (item) {
      item && newArray.push(item)
    }), newArray
  }

  function isData(session) {
    return !session.audio && !session.video && !session.screen && session.data
  }

  function isNull(obj) {
    return void 0 === obj
  }(that = "undefined" != typeof global ? global : null) && "undefined" == typeof window && "undefined" != typeof global && (global.navigator = {
      userAgent: "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",
      getUserMedia: function () {}
    }, global.console || (global.console = {}), void 0 === global.console.debug && (global.console.debug = global.console.info = global.console.error = global.console.log = global.console.log || function () {
      console.log(arguments)
    }), "undefined" == typeof document && (that.document = {}, document.createElement = document.captureStream = document.mozCaptureStream = function () {
      var obj = {
        getContext: function () {
          return obj
        },
        play: function () {},
        pause: function () {},
        drawImage: function () {},
        toDataURL: function () {
          return ""
        }
      };
      return obj
    }, document.addEventListener = document.removeEventListener = that.addEventListener = that.removeEventListener = function () {}, that.HTMLVideoElement = that.HTMLMediaElement = function () {}), "undefined" == typeof io && (that.io = function () {
      return {
        on: function (eventName, callback) {
          callback = callback || function () {}, "connect" === eventName && callback()
        },
        emit: function (eventName, data, callback) {
          callback = callback || function () {}, "open-room" !== eventName && "join-room" !== eventName || callback(!0, data.sessionid, null)
        }
      }
    }), "undefined" == typeof location && (that.location = {
      protocol: "file:",
      href: "",
      hash: "",
      origin: "self"
    }), "undefined" == typeof screen && (that.screen = {
      width: 0,
      height: 0
    }), "undefined" == typeof URL && (that.URL = {
      createObjectURL: function () {
        return ""
      },
      revokeObjectURL: function () {
        return ""
      }
    }), that.window = global),
    function () {
      var that, browserFakeUserAgent = "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45";
      if (isNodejs = "object" == typeof process && "object" == typeof process.versions && process.versions.node && !process.browser) {
        var version = process.versions.node.toString().replace("v", "");
        browserFakeUserAgent = "Nodejs/" + version + " (NodeOS) AppleWebKit/" + version + " (KHTML, like Gecko) Nodejs/" + version + " Nodejs/" + version
      }
      that = "undefined" != typeof global ? global : window, "undefined" == typeof window && ("undefined" == typeof window && "undefined" != typeof global && (global.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function () {}
      }, that.window = global), "undefined" == typeof location && (that.location = {
        protocol: "file:",
        href: "",
        hash: ""
      }), "undefined" == typeof screen && (that.screen = {
        width: 0,
        height: 0
      }));
      var navigator = window.navigator;
      void 0 !== navigator ? (void 0 !== navigator.webkitGetUserMedia && (navigator.getUserMedia = navigator.webkitGetUserMedia), void 0 !== navigator.mozGetUserMedia && (navigator.getUserMedia = navigator.mozGetUserMedia)) : navigator = {
        getUserMedia: function () {},
        userAgent: browserFakeUserAgent
      };
      var isMobileDevice = !!/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent || ""),
        isEdge = !(-1 === navigator.userAgent.indexOf("Edge") || !navigator.msSaveOrOpenBlob && !navigator.msSaveBlob),
        isOpera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"),
        isFirefox = void 0 !== window.InstallTrigger,
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        isChrome = !!window.chrome && !isOpera,
        isIE = "undefined" != typeof document && !!document.documentMode && !isEdge;

      function retry(isDone, next) {
        var currentTrial = 0,
          isTimeout = !1,
          id = window.setInterval(function () {
            isDone() && (window.clearInterval(id), next(isTimeout)), 50 < currentTrial++ && (window.clearInterval(id), next(isTimeout = !0))
          }, 10)
      }
      var isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry|BB10/i)
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
          return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
        },
        getOsName: function () {
          var osName = "Unknown OS";
          return isMobile.Android() && (osName = "Android"), isMobile.BlackBerry() && (osName = "BlackBerry"), isMobile.iOS() && (osName = "iOS"), isMobile.Opera() && (osName = "Opera Mini"), isMobile.Windows() && (osName = "Windows"), osName
        }
      };
      var osName = "Unknown OS",
        osVersion = "Unknown OS Version";
      var ua, match, osInfo = function () {
        for (var cs, nVer = navigator.appVersion, nAgt = navigator.userAgent, os = "-", clientStrings = [{
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0)/
          }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
          }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
          }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
          }, {
            s: "Windows Vista",
            r: /Windows NT 6.0/
          }, {
            s: "Windows Server 2003",
            r: /Windows NT 5.2/
          }, {
            s: "Windows XP",
            r: /(Windows NT 5.1|Windows XP)/
          }, {
            s: "Windows 2000",
            r: /(Windows NT 5.0|Windows 2000)/
          }, {
            s: "Windows ME",
            r: /(Win 9x 4.90|Windows ME)/
          }, {
            s: "Windows 98",
            r: /(Windows 98|Win98)/
          }, {
            s: "Windows 95",
            r: /(Windows 95|Win95|Windows_95)/
          }, {
            s: "Windows NT 4.0",
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
          }, {
            s: "Windows CE",
            r: /Windows CE/
          }, {
            s: "Windows 3.11",
            r: /Win16/
          }, {
            s: "Android",
            r: /Android/
          }, {
            s: "Open BSD",
            r: /OpenBSD/
          }, {
            s: "Sun OS",
            r: /SunOS/
          }, {
            s: "Linux",
            r: /(Linux|X11)/
          }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
          }, {
            s: "Mac OS X",
            r: /Mac OS X/
          }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
          }, {
            s: "QNX",
            r: /QNX/
          }, {
            s: "UNIX",
            r: /UNIX/
          }, {
            s: "BeOS",
            r: /BeOS/
          }, {
            s: "OS/2",
            r: /OS\/2/
          }, {
            s: "Search Bot",
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
          }], i = 0; cs = clientStrings[i]; i++)
          if (cs.r.test(nAgt)) {
            os = cs.s;
            break
          } var osVersion = "-";
        switch (/Windows/.test(os) && (/Windows (.*)/.test(os) && (osVersion = /Windows (.*)/.exec(os)[1]), os = "Windows"), os) {
          case "Mac OS X":
            /Mac OS X (10[\.\_\d]+)/.test(nAgt) && (osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]);
            break;
          case "Android":
            /Android ([\.\_\d]+)/.test(nAgt) && (osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1]);
            break;
          case "iOS":
            /OS (\d+)_(\d+)_?(\d+)?/.test(nAgt) && (osVersion = (osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer))[1] + "." + osVersion[2] + "." + (0 | osVersion[3]))
        }
        return {
          osName: os,
          osVersion: osVersion
        }
      }();
      osInfo && osInfo.osName && "-" != osInfo.osName ? (osName = osInfo.osName, osVersion = osInfo.osVersion) : isMobile.any() && "Android" == (osName = isMobile.getOsName()) && (osVersion = !!(match = (ua = (ua || navigator.userAgent).toLowerCase()).match(/android\s([0-9\.]*)/)) && match[1]);
      var isNodejs = "object" == typeof process && "object" == typeof process.versions && process.versions.node;
      "Unknown OS" === osName && isNodejs && (osName = "Nodejs", osVersion = process.versions.node.toString().replace("v", ""));
      var isCanvasSupportsStreamCapturing = !1,
        isVideoSupportsStreamCapturing = !1;
      ["captureStream", "mozCaptureStream", "webkitCaptureStream"].forEach(function (item) {
        "undefined" != typeof document && "function" == typeof document.createElement && (!isCanvasSupportsStreamCapturing && item in document.createElement("canvas") && (isCanvasSupportsStreamCapturing = !0), !isVideoSupportsStreamCapturing && item in document.createElement("video") && (isVideoSupportsStreamCapturing = !0))
      });
      var regexIpv4Local = /^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/,
        regexIpv4 = /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
        regexIpv6 = /[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}/;
      var MediaDevices = [],
        audioInputDevices = [],
        audioOutputDevices = [],
        videoInputDevices = [];
      navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && (navigator.enumerateDevices = function (callback) {
        var enumerateDevices = navigator.mediaDevices.enumerateDevices();
        enumerateDevices && enumerateDevices.then ? navigator.mediaDevices.enumerateDevices().then(callback).catch(function () {
          callback([])
        }) : callback([])
      });
      var canEnumerate = !1;
      void 0 !== MediaStreamTrack && "getSources" in MediaStreamTrack ? canEnumerate = !0 : navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && (canEnumerate = !0);
      var hasMicrophone = !1,
        hasSpeakers = !1,
        hasWebcam = !1,
        isWebsiteHasMicrophonePermissions = !1,
        isWebsiteHasWebcamPermissions = !1;

      function checkDeviceSupport(callback) {
        if (canEnumerate)
          if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources && (navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)), !navigator.enumerateDevices && navigator.enumerateDevices && (navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator)), navigator.enumerateDevices) {
            MediaDevices = [], audioInputDevices = [], audioOutputDevices = [], isWebsiteHasWebcamPermissions = isWebsiteHasMicrophonePermissions = hasWebcam = hasSpeakers = hasMicrophone = !(videoInputDevices = []);
            var alreadyUsedDevices = {};
            navigator.enumerateDevices(function (devices) {
              devices.forEach(function (_device) {
                var device = {};
                for (var d in _device) try {
                  "function" != typeof _device[d] && (device[d] = _device[d])
                } catch (e) {}
                alreadyUsedDevices[device.deviceId + device.label + device.kind] || ("audio" === device.kind && (device.kind = "audioinput"), "video" === device.kind && (device.kind = "videoinput"), device.deviceId || (device.deviceId = device.id), device.id || (device.id = device.deviceId), device.label ? ("videoinput" !== device.kind || isWebsiteHasWebcamPermissions || (isWebsiteHasWebcamPermissions = !0), "audioinput" !== device.kind || isWebsiteHasMicrophonePermissions || (isWebsiteHasMicrophonePermissions = !0)) : (device.isCustomLabel = !0, "videoinput" === device.kind ? device.label = "Camera " + (videoInputDevices.length + 1) : "audioinput" === device.kind ? device.label = "Microphone " + (audioInputDevices.length + 1) : "audiooutput" === device.kind ? device.label = "Speaker " + (audioOutputDevices.length + 1) : device.label = "Please invoke getUserMedia once.", void 0 !== DetectRTC && DetectRTC.browser.isChrome && 46 <= DetectRTC.browser.version && !/^(https:|chrome-extension:)$/g.test(location.protocol || "") && "undefined" != typeof document && "string" == typeof document.domain && document.domain.search && -1 === document.domain.search(/localhost|127.0./g) && (device.label = "HTTPs is required to get label of this " + device.kind + " device.")), "audioinput" === device.kind && (hasMicrophone = !0, -1 === audioInputDevices.indexOf(device) && audioInputDevices.push(device)), "audiooutput" === device.kind && (hasSpeakers = !0, -1 === audioOutputDevices.indexOf(device) && audioOutputDevices.push(device)), "videoinput" === device.kind && (hasWebcam = !0, -1 === videoInputDevices.indexOf(device) && videoInputDevices.push(device)), MediaDevices.push(device), alreadyUsedDevices[device.deviceId + device.label + device.kind] = device)
              }), void 0 !== DetectRTC && (DetectRTC.MediaDevices = MediaDevices, DetectRTC.hasMicrophone = hasMicrophone, DetectRTC.hasSpeakers = hasSpeakers, DetectRTC.hasWebcam = hasWebcam, DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions, DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions, DetectRTC.audioInputDevices = audioInputDevices, DetectRTC.audioOutputDevices = audioOutputDevices, DetectRTC.videoInputDevices = videoInputDevices), callback && callback()
            })
          } else callback && callback();
        else callback && callback()
      }
      var DetectRTC = window.DetectRTC || {};
      DetectRTC.browser = function () {
          navigator.appVersion;
          var nameOffset, verOffset, ix, nAgt = navigator.userAgent,
            browserName = navigator.appName,
            fullVersion = "" + parseFloat(navigator.appVersion),
            majorVersion = parseInt(navigator.appVersion, 10);
          if (isSafari && !isChrome && -1 !== nAgt.indexOf("CriOS") && (isChrome = !(isSafari = !1)), isOpera) {
            browserName = "Opera";
            try {
              majorVersion = (fullVersion = navigator.userAgent.split("OPR/")[1].split(" ")[0]).split(".")[0]
            } catch (e) {
              fullVersion = "0.0.0.0", majorVersion = 0
            }
          } else isIE ? (fullVersion = 0 < (verOffset = nAgt.indexOf("rv:")) ? nAgt.substring(verOffset + 3) : (verOffset = nAgt.indexOf("MSIE"), nAgt.substring(verOffset + 5)), browserName = "IE") : isChrome ? (verOffset = nAgt.indexOf("Chrome"), browserName = "Chrome", fullVersion = nAgt.substring(verOffset + 7)) : isSafari ? (verOffset = nAgt.indexOf("Safari"), browserName = "Safari", fullVersion = nAgt.substring(verOffset + 7), -1 !== (verOffset = nAgt.indexOf("Version")) && (fullVersion = nAgt.substring(verOffset + 8)), -1 !== navigator.userAgent.indexOf("Version/") && (fullVersion = navigator.userAgent.split("Version/")[1].split(" ")[0])) : isFirefox ? (verOffset = nAgt.indexOf("Firefox"), browserName = "Firefox", fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (browserName = nAgt.substring(nameOffset, verOffset), fullVersion = nAgt.substring(verOffset + 1), browserName.toLowerCase() === browserName.toUpperCase() && (browserName = navigator.appName));
          return isEdge && (browserName = "Edge", fullVersion = navigator.userAgent.split("Edge/")[1]), -1 !== (ix = fullVersion.search(/[; \)]/)) && (fullVersion = fullVersion.substring(0, ix)), majorVersion = parseInt("" + fullVersion, 10), isNaN(majorVersion) && (fullVersion = "" + parseFloat(navigator.appVersion), majorVersion = parseInt(navigator.appVersion, 10)), {
            fullVersion: fullVersion,
            version: majorVersion,
            name: browserName,
            isPrivateBrowsing: !1
          }
        }(),
        function (callback) {
          var isPrivate;
          try {
            if (window.webkitRequestFileSystem) window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
              isPrivate = !1
            }, function (e) {
              isPrivate = !0
            });
            else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
              var db;
              try {
                (db = window.indexedDB.open("test")).onerror = function () {
                  return !0
                }
              } catch (e) {
                isPrivate = !0
              }
              void 0 === isPrivate && retry(function () {
                return "done" === db.readyState
              }, function (isTimeout) {
                isTimeout || (isPrivate = !db.result)
              })
            } else if (function (userAgent) {
                var ua = userAgent.toLowerCase();
                if (0 === ua.indexOf("msie") && 0 === ua.indexOf("trident")) return !1;
                var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
                return !!(match && 10 <= parseInt(match[1], 10))
              }(window.navigator.userAgent)) {
              isPrivate = !1;
              try {
                window.indexedDB || (isPrivate = !0)
              } catch (e) {
                isPrivate = !0
              }
            } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
              try {
                window.localStorage.setItem("test", 1)
              } catch (e) {
                isPrivate = !0
              }
              void 0 === isPrivate && (isPrivate = !1, window.localStorage.removeItem("test"))
            }
          } catch (e) {
            isPrivate = !1
          }
          retry(function () {
            return void 0 !== isPrivate
          }, function (isTimeout) {
            callback(isPrivate)
          })
        }(function (isPrivateBrowsing) {
          DetectRTC.browser.isPrivateBrowsing = !!isPrivateBrowsing
        }), DetectRTC.browser["is" + DetectRTC.browser.name] = !0, DetectRTC.osName = osName, DetectRTC.osVersion = osVersion;
      "object" == typeof process && "object" == typeof process.versions && process.versions["node-webkit"];
      var isWebRTCSupported = !1;
      ["RTCPeerConnection", "webkitRTCPeerConnection", "mozRTCPeerConnection", "RTCIceGatherer"].forEach(function (item) {
        isWebRTCSupported || item in window && (isWebRTCSupported = !0)
      }), DetectRTC.isWebRTCSupported = isWebRTCSupported, DetectRTC.isORTCSupported = "undefined" != typeof RTCIceGatherer;
      var isScreenCapturingSupported = !1;
      (DetectRTC.browser.isChrome && 35 <= DetectRTC.browser.version ? isScreenCapturingSupported = !0 : DetectRTC.browser.isFirefox && 34 <= DetectRTC.browser.version ? isScreenCapturingSupported = !0 : DetectRTC.browser.isEdge && 17 <= DetectRTC.browser.version ? isScreenCapturingSupported = !0 : "Android" === DetectRTC.osName && DetectRTC.browser.isChrome && (isScreenCapturingSupported = !0), /^(https:|chrome-extension:)$/g.test(location.protocol || "")) || ("undefined" != typeof document && "string" == typeof document.domain && document.domain.search && -1 === document.domain.search(/localhost|127.0./g) && (DetectRTC.browser.isChrome || DetectRTC.browser.isEdge || DetectRTC.browser.isOpera) ? isScreenCapturingSupported = !1 : DetectRTC.browser.isFirefox && (isScreenCapturingSupported = !1));
      DetectRTC.isScreenCapturingSupported = isScreenCapturingSupported;
      var webAudio = {
        isSupported: !1,
        isCreateMediaStreamSourceSupported: !1
      };
      ["AudioContext", "webkitAudioContext", "mozAudioContext", "msAudioContext"].forEach(function (item) {
        webAudio.isSupported || item in window && (webAudio.isSupported = !0, window[item] && "createMediaStreamSource" in window[item].prototype && (webAudio.isCreateMediaStreamSourceSupported = !0))
      }), DetectRTC.isAudioContextSupported = webAudio.isSupported, DetectRTC.isCreateMediaStreamSourceSupported = webAudio.isCreateMediaStreamSourceSupported;
      var isRtpDataChannelsSupported = !1;
      DetectRTC.browser.isChrome && 31 < DetectRTC.browser.version && (isRtpDataChannelsSupported = !0), DetectRTC.isRtpDataChannelsSupported = isRtpDataChannelsSupported;
      var isSCTPSupportd = !1;
      DetectRTC.browser.isFirefox && 28 < DetectRTC.browser.version ? isSCTPSupportd = !0 : DetectRTC.browser.isChrome && 25 < DetectRTC.browser.version ? isSCTPSupportd = !0 : DetectRTC.browser.isOpera && 11 <= DetectRTC.browser.version && (isSCTPSupportd = !0), DetectRTC.isSctpDataChannelsSupported = isSCTPSupportd, DetectRTC.isMobileDevice = isMobileDevice;
      var isGetUserMediaSupported = !1;
      navigator.getUserMedia ? isGetUserMediaSupported = !0 : navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (isGetUserMediaSupported = !0), DetectRTC.browser.isChrome && 46 <= DetectRTC.browser.version && !/^(https:|chrome-extension:)$/g.test(location.protocol || "") && "undefined" != typeof document && "string" == typeof document.domain && document.domain.search && -1 === document.domain.search(/localhost|127.0./g) && (isGetUserMediaSupported = "Requires HTTPs"), "Nodejs" === DetectRTC.osName && (isGetUserMediaSupported = !1), DetectRTC.isGetUserMediaSupported = isGetUserMediaSupported;
      var w, h, r, displayResolution = "";
      screen.width && (displayResolution += (screen.width ? screen.width : "") + " x " + (screen.height ? screen.height : ""));
      DetectRTC.displayResolution = displayResolution, DetectRTC.displayAspectRatio = (w = screen.width, h = screen.height, r = function gcd(a, b) {
        return 0 == b ? a : gcd(b, a % b)
      }(w, h), w / r / (h / r)).toFixed(2), DetectRTC.isCanvasSupportsStreamCapturing = isCanvasSupportsStreamCapturing, DetectRTC.isVideoSupportsStreamCapturing = isVideoSupportsStreamCapturing, "Chrome" == DetectRTC.browser.name && 53 <= DetectRTC.browser.version && (DetectRTC.isCanvasSupportsStreamCapturing || (DetectRTC.isCanvasSupportsStreamCapturing = "Requires chrome flag: enable-experimental-web-platform-features"), DetectRTC.isVideoSupportsStreamCapturing || (DetectRTC.isVideoSupportsStreamCapturing = "Requires chrome flag: enable-experimental-web-platform-features")), DetectRTC.DetectLocalIPAddress = function (callback, stream) {
        if (DetectRTC.isWebRTCSupported) {
          var isPublic = !0,
            isIpv4 = !0;
          ! function (callback, stream) {
            if ("undefined" != typeof document && "function" == typeof document.getElementById) {
              var ipDuplicates = {},
                RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
              if (!RTCPeerConnection) {
                var iframe = document.getElementById("iframe");
                if (!iframe) return;
                var win = iframe.contentWindow;
                RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection
              }
              if (RTCPeerConnection) {
                var peerConfig = null;
                "Chrome" === DetectRTC.browser && DetectRTC.browser.version < 58 && (peerConfig = {
                  optional: [{
                    RtpDataChannels: !0
                  }]
                });
                var pc = new RTCPeerConnection({
                  iceServers: [{
                    urls: "stun:stun.l.google.com:19302"
                  }]
                }, peerConfig);
                if (stream && (pc.addStream ? pc.addStream(stream) : pc.addTrack && stream.getTracks()[0] && pc.addTrack(stream.getTracks()[0], stream)), pc.onicecandidate = function (event) {
                    event.candidate && event.candidate.candidate ? handleCandidate(event.candidate.candidate) : handleCandidate()
                  }, !stream) try {
                  pc.createDataChannel("sctp", {})
                } catch (e) {}
                DetectRTC.isPromisesSupported ? pc.createOffer().then(function (result) {
                  pc.setLocalDescription(result).then(afterCreateOffer)
                }) : pc.createOffer(function (result) {
                  pc.setLocalDescription(result, afterCreateOffer, function () {})
                }, function () {})
              }
            }

            function handleCandidate(candidate) {
              if (candidate) {
                var match = regexIpv4.exec(candidate);
                if (match) {
                  var ipAddress = match[1],
                    isPublic = candidate.match(regexIpv4Local);
                  void 0 === ipDuplicates[ipAddress] && callback(ipAddress, isPublic, !0), ipDuplicates[ipAddress] = !0
                }
              } else callback()
            }

            function afterCreateOffer() {
              var lines = pc.localDescription.sdp.split("\n");
              lines.forEach(function (line) {
                line && 0 === line.indexOf("a=candidate:") && handleCandidate(line)
              })
            }
          }(function (ip) {
            ip ? ip.match(regexIpv4Local) ? callback("Local: " + ip, isPublic = !1, isIpv4) : ip.match(regexIpv6) ? callback("Public: " + ip, isPublic, isIpv4 = !1) : callback("Public: " + ip, isPublic, isIpv4) : callback()
          }, stream)
        }
      }, DetectRTC.isWebSocketsSupported = "WebSocket" in window && 2 === window.WebSocket.CLOSING, DetectRTC.isWebSocketsBlocked = !DetectRTC.isWebSocketsSupported, "Nodejs" === DetectRTC.osName && (DetectRTC.isWebSocketsSupported = !0, DetectRTC.isWebSocketsBlocked = !1), DetectRTC.checkWebSocketsSupport = function (callback) {
        callback = callback || function () {};
        try {
          var starttime, websocket = new WebSocket("wss://echo.websocket.org:443/");
          websocket.onopen = function () {
            DetectRTC.isWebSocketsBlocked = !1, starttime = (new Date).getTime(), websocket.send("ping")
          }, websocket.onmessage = function () {
            DetectRTC.WebsocketLatency = (new Date).getTime() - starttime + "ms", callback(), websocket.close(), websocket = null
          }, websocket.onerror = function () {
            DetectRTC.isWebSocketsBlocked = !0, callback()
          }
        } catch (e) {
          DetectRTC.isWebSocketsBlocked = !0, callback()
        }
      }, DetectRTC.load = function (callback) {
        checkDeviceSupport(callback = callback || function () {})
      }, DetectRTC.MediaDevices = void 0 !== MediaDevices ? MediaDevices : [], DetectRTC.hasMicrophone = hasMicrophone, DetectRTC.hasSpeakers = hasSpeakers, DetectRTC.hasWebcam = hasWebcam, DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions, DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions, DetectRTC.audioInputDevices = audioInputDevices, DetectRTC.audioOutputDevices = audioOutputDevices, DetectRTC.videoInputDevices = videoInputDevices;
      var isSetSinkIdSupported = !1;
      "undefined" != typeof document && "function" == typeof document.createElement && "setSinkId" in document.createElement("video") && (isSetSinkIdSupported = !0), DetectRTC.isSetSinkIdSupported = isSetSinkIdSupported;
      var isRTPSenderReplaceTracksSupported = !1;
      DetectRTC.browser.isFirefox && "undefined" != typeof mozRTCPeerConnection ? "getSenders" in mozRTCPeerConnection.prototype && (isRTPSenderReplaceTracksSupported = !0) : DetectRTC.browser.isChrome && "undefined" != typeof webkitRTCPeerConnection && "getSenders" in webkitRTCPeerConnection.prototype && (isRTPSenderReplaceTracksSupported = !0), DetectRTC.isRTPSenderReplaceTracksSupported = isRTPSenderReplaceTracksSupported;
      var isRemoteStreamProcessingSupported = !1;
      DetectRTC.browser.isFirefox && 38 < DetectRTC.browser.version && (isRemoteStreamProcessingSupported = !0), DetectRTC.isRemoteStreamProcessingSupported = isRemoteStreamProcessingSupported;
      var isApplyConstraintsSupported = !1;
      void 0 !== MediaStreamTrack && "applyConstraints" in MediaStreamTrack.prototype && (isApplyConstraintsSupported = !0), DetectRTC.isApplyConstraintsSupported = isApplyConstraintsSupported;
      var isMultiMonitorScreenCapturingSupported = !1;
      DetectRTC.browser.isFirefox && 43 <= DetectRTC.browser.version && (isMultiMonitorScreenCapturingSupported = !0), DetectRTC.isMultiMonitorScreenCapturingSupported = isMultiMonitorScreenCapturingSupported, DetectRTC.isPromisesSupported = !!("Promise" in window), DetectRTC.version = "1.3.9", void 0 === DetectRTC && (window.DetectRTC = {});
      var MediaStream = window.MediaStream;
      void 0 === MediaStream && "undefined" != typeof webkitMediaStream && (MediaStream = webkitMediaStream), DetectRTC.MediaStream = void 0 !== MediaStream && "function" == typeof MediaStream && Object.keys(MediaStream.prototype), DetectRTC.MediaStreamTrack = void 0 !== MediaStreamTrack && Object.keys(MediaStreamTrack.prototype);
      var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
      DetectRTC.RTCPeerConnection = void 0 !== RTCPeerConnection && Object.keys(RTCPeerConnection.prototype), window.DetectRTC = DetectRTC, "undefined" != typeof module && (module.exports = DetectRTC), "function" == typeof define && define.amd && define("DetectRTC", [], function () {
        return DetectRTC
      })
    }(), "undefined" != typeof cordova && (DetectRTC.isMobileDevice = !0, DetectRTC.browser.name = "Chrome"), navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Crosswalk") && (DetectRTC.isMobileDevice = !0, DetectRTC.browser.name = "Chrome"), window.addEventListener || (window.addEventListener = function (el, eventName, eventHandler) {
      el.attachEvent && el.attachEvent("on" + eventName, eventHandler)
    }), window.attachEventListener = function (video, type, listener, useCapture) {
      video.addEventListener(type, listener, useCapture)
    };
  var MediaStream = window.MediaStream;

  function isAudioPlusTab(connection, audioPlusTab) {
    return (!connection.session.audio || "two-way" !== connection.session.audio) && ("Firefox" === DetectRTC.browser.name && !1 !== audioPlusTab || !("Chrome" !== DetectRTC.browser.name || DetectRTC.browser.version < 50) && (!0 === typeof audioPlusTab || !(void 0 !== audioPlusTab || !connection.session.audio || !connection.session.screen || connection.session.video) && (audioPlusTab = !0)))
  }

  function getAudioScreenConstraints(screen_constraints) {
    return "Firefox" === DetectRTC.browser.name || "Chrome" === DetectRTC.browser.name && {
      mandatory: {
        chromeMediaSource: screen_constraints.mandatory.chromeMediaSource,
        chromeMediaSourceId: screen_constraints.mandatory.chromeMediaSourceId
      }
    }
  }

  function getTracks(stream, kind) {
    return stream && stream.getTracks ? stream.getTracks().filter(function (t) {
      return t.kind === (kind || "audio")
    }) : []
  }

  function isUnifiedPlanSupportedDefault() {
    var canAddTransceiver = !1;
    try {
      if ("undefined" == typeof RTCRtpTransceiver) return !1;
      if (!("currentDirection" in RTCRtpTransceiver.prototype)) return !1;
      var tempPc = new RTCPeerConnection;
      try {
        tempPc.addTransceiver("audio"), canAddTransceiver = !0
      } catch (e) {}
      tempPc.close()
    } catch (e) {
      canAddTransceiver = !1
    }
    return canAddTransceiver && function () {
      var isUnifiedPlanSupported = !1;
      try {
        var pc = new RTCPeerConnection({
          sdpSemantics: "unified-plan"
        });
        try {
          var config = pc.getConfiguration();
          isUnifiedPlanSupported = "unified-plan" == config.sdpSemantics || (config.sdpSemantics, !1)
        } catch (e) {
          isUnifiedPlanSupported = !1
        }
      } catch (e) {
        isUnifiedPlanSupported = !1
      }
      return isUnifiedPlanSupported
    }()
  }

  function setCordovaAPIs() {
    if ("undefined" != typeof cordova && void 0 !== cordova.plugins && void 0 !== cordova.plugins.iosrtc) {
      var iosrtc = cordova.plugins.iosrtc;
      window.webkitRTCPeerConnection = iosrtc.RTCPeerConnection, window.RTCSessionDescription = iosrtc.RTCSessionDescription, window.RTCIceCandidate = iosrtc.RTCIceCandidate, window.MediaStream = iosrtc.MediaStream, window.MediaStreamTrack = iosrtc.MediaStreamTrack, navigator.getUserMedia = navigator.webkitGetUserMedia = iosrtc.getUserMedia, iosrtc.debug.enable("iosrtc*"), "function" == typeof iosrtc.selectAudioOutput && iosrtc.selectAudioOutput(window.iOSDefaultAudioOutputDevice || "speaker"), iosrtc.registerGlobals()
    }
  }
  void 0 === MediaStream && "undefined" != typeof webkitMediaStream && (MediaStream = webkitMediaStream), void 0 !== MediaStream && ("stop" in MediaStream.prototype || (MediaStream.prototype.stop = function () {
    this.getTracks().forEach(function (track) {
      track.stop()
    })
  })), window.iOSDefaultAudioOutputDevice = window.iOSDefaultAudioOutputDevice || "speaker", document.addEventListener("deviceready", setCordovaAPIs, !1), setCordovaAPIs();
  var RTCPeerConnection, defaults = {};

  function setSdpConstraints(config) {
    return {
      OfferToReceiveAudio: !!config.OfferToReceiveAudio,
      OfferToReceiveVideo: !!config.OfferToReceiveVideo
    }
  }
  void 0 !== window.RTCPeerConnection ? RTCPeerConnection = window.RTCPeerConnection : "undefined" != typeof mozRTCPeerConnection ? RTCPeerConnection = mozRTCPeerConnection : "undefined" != typeof webkitRTCPeerConnection && (RTCPeerConnection = webkitRTCPeerConnection);
  var RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription,
    RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate,
    MediaStreamTrack = window.MediaStreamTrack;

  function PeerInitiator(config) {
    if (void 0 !== window.RTCPeerConnection ? RTCPeerConnection = window.RTCPeerConnection : "undefined" != typeof mozRTCPeerConnection ? RTCPeerConnection = mozRTCPeerConnection : "undefined" != typeof webkitRTCPeerConnection && (RTCPeerConnection = webkitRTCPeerConnection), RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription, RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate, MediaStreamTrack = window.MediaStreamTrack, !RTCPeerConnection) throw "WebRTC 1.0 (RTCPeerConnection) API are NOT available in this browser.";
    var connection = config.rtcMultiConnection;
    this.extra = config.remoteSdp ? config.remoteSdp.extra : connection.extra, this.userid = config.userid, this.streams = [], this.channels = config.channels || [], this.connectionDescription = config.connectionDescription, this.addStream = function (session) {
      connection.addStream(session, self.userid)
    }, this.removeStream = function (streamid) {
      connection.removeStream(streamid, self.userid)
    };
    var self = this;
    config.remoteSdp && (this.connectionDescription = config.remoteSdp.connectionDescription);
    var peer, allRemoteStreams = {};
    defaults.sdpConstraints = setSdpConstraints({
      OfferToReceiveAudio: !0,
      OfferToReceiveVideo: !0
    });
    var renegotiatingPeer = !!config.renegotiatingPeer;
    config.remoteSdp && (renegotiatingPeer = !!config.remoteSdp.renegotiatingPeer);
    var localStreams = [];
    if (connection.attachStreams.forEach(function (stream) {
        stream && localStreams.push(stream)
      }), renegotiatingPeer) peer = config.peerRef;
    else {
      var iceTransports = "all";
      (connection.candidates.turn || connection.candidates.relay) && (connection.candidates.stun || connection.candidates.reflexive || connection.candidates.host || (iceTransports = "relay"));
      try {
        var params = {
          iceServers: connection.iceServers,
          iceTransportPolicy: connection.iceTransportPolicy || iceTransports
        };
        void 0 !== connection.iceCandidatePoolSize && (params.iceCandidatePoolSize = connection.iceCandidatePoolSize), void 0 !== connection.bundlePolicy && (params.bundlePolicy = connection.bundlePolicy), void 0 !== connection.rtcpMuxPolicy && (params.rtcpMuxPolicy = connection.rtcpMuxPolicy), "Chrome" === DetectRTC.browser.name && (params.sdpSemantics = connection.sdpSemantics || "unified-plan"), connection.iceServers && connection.iceServers.length || (params = null, connection.optionalArgument = null), peer = new RTCPeerConnection(params, connection.optionalArgument)
      } catch (e) {
        try {
          params = {
            iceServers: connection.iceServers
          };
          peer = new RTCPeerConnection(params)
        } catch (e) {
          peer = new RTCPeerConnection
        }
      }
    }!peer.getRemoteStreams && peer.getReceivers && (peer.getRemoteStreams = function () {
      var stream = new MediaStream;
      return peer.getReceivers().forEach(function (receiver) {
        stream.addTrack(receiver.track)
      }), [stream]
    }), !peer.getLocalStreams && peer.getSenders && (peer.getLocalStreams = function () {
      var stream = new MediaStream;
      return peer.getSenders().forEach(function (sender) {
        stream.addTrack(sender.track)
      }), [stream]
    }), peer.onicecandidate = function (event) {
      if (event.candidate) connection.trickleIce && config.onLocalCandidate({
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      });
      else if (!connection.trickleIce) {
        var localSdp = peer.localDescription;
        config.onLocalSdp({
          type: localSdp.type,
          sdp: localSdp.sdp,
          remotePeerSdpConstraints: config.remotePeerSdpConstraints || !1,
          renegotiatingPeer: !!config.renegotiatingPeer || !1,
          connectionDescription: self.connectionDescription,
          dontGetRemoteStream: !!config.dontGetRemoteStream,
          extra: connection ? connection.extra : {},
          streamsToShare: streamsToShare
        })
      }
    }, localStreams.forEach(function (localStream) {
      config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.dontGetRemoteStream || config.dontAttachLocalStream || (localStream = connection.beforeAddingStream(localStream, self)) && (peer.getLocalStreams().forEach(function (stream) {
        localStream && stream.id == localStream.id && (localStream = null)
      }), localStream && localStream.getTracks && localStream.getTracks().forEach(function (track) {
        try {
          peer.addTrack(track, localStream)
        } catch (e) {}
      }))
    }), peer.oniceconnectionstatechange = peer.onsignalingstatechange = function () {
      var extra = self.extra;
      connection.peers[self.userid] && (extra = connection.peers[self.userid].extra || extra), peer && (config.onPeerStateChanged({
        iceConnectionState: peer.iceConnectionState,
        iceGatheringState: peer.iceGatheringState,
        signalingState: peer.signalingState,
        extra: extra,
        userid: self.userid
      }), peer && peer.iceConnectionState && -1 !== peer.iceConnectionState.search(/closed|failed/gi) && self.streams instanceof Array && self.streams.forEach(function (stream) {
        var streamEvent = connection.streamEvents[stream.id] || {
          streamid: stream.id,
          stream: stream,
          type: "remote"
        };
        connection.onstreamended(streamEvent)
      }))
    };
    var sdpConstraints = {
      OfferToReceiveAudio: !!localStreams.length,
      OfferToReceiveVideo: !!localStreams.length
    };
    config.localPeerSdpConstraints && (sdpConstraints = config.localPeerSdpConstraints), defaults.sdpConstraints = setSdpConstraints(sdpConstraints);
    var dontDuplicate = {};
    peer.ontrack = function (event) {
      if (event && "track" === event.type)
        if (event.stream = event.streams[event.streams.length - 1], event.stream.id || (event.stream.id = event.track.id), dontDuplicate[event.stream.id] && "Safari" !== DetectRTC.browser.name) event.track && (event.track.onended = function () {
          peer && peer.onremovestream(event)
        });
        else {
          dontDuplicate[event.stream.id] = event.stream.id;
          var streamsToShare = {};
          config.remoteSdp && config.remoteSdp.streamsToShare ? streamsToShare = config.remoteSdp.streamsToShare : config.streamsToShare && (streamsToShare = config.streamsToShare);
          var streamToShare = streamsToShare[event.stream.id];
          event.stream.isScreen = streamToShare ? (event.stream.isAudio = streamToShare.isAudio, event.stream.isVideo = streamToShare.isVideo, streamToShare.isScreen) : (event.stream.isVideo = !!getTracks(event.stream, "video").length, event.stream.isAudio = !event.stream.isVideo, !1), event.stream.streamid = event.stream.id, allRemoteStreams[event.stream.id] = event.stream, config.onRemoteStream(event.stream), event.stream.getTracks().forEach(function (track) {
            track.onended = function () {
              peer && peer.onremovestream(event)
            }
          }), event.stream.onremovetrack = function () {
            peer && peer.onremovestream(event)
          }
        }
    }, peer.onremovestream = function (event) {
      event.stream.streamid = event.stream.id, allRemoteStreams[event.stream.id] && delete allRemoteStreams[event.stream.id], config.onRemoteStreamRemoved(event.stream)
    }, "function" != typeof peer.removeStream && (peer.removeStream = function (stream) {
      stream.getTracks().forEach(function (track) {
        peer.removeTrack(track, stream)
      })
    }), this.addRemoteCandidate = function (remoteCandidate) {
      peer.addIceCandidate(new RTCIceCandidate(remoteCandidate))
    }, this.addRemoteSdp = function (remoteSdp, cb) {
      cb = cb || function () {}, "Safari" !== DetectRTC.browser.name && (remoteSdp.sdp = connection.processSdp(remoteSdp.sdp)), peer.setRemoteDescription(new RTCSessionDescription(remoteSdp)).then(cb, function (error) {
        connection.enableLogs && console.error("setRemoteDescription failed", "\n", error, "\n", remoteSdp.sdp), cb()
      }).catch(function (error) {
        connection.enableLogs && console.error("setRemoteDescription failed", "\n", error, "\n", remoteSdp.sdp), cb()
      })
    };
    var isOfferer = !0;

    function setChannelEvents(channel) {
      channel.binaryType = "arraybuffer", channel.onmessage = function (event) {
        config.onDataChannelMessage(event.data)
      }, channel.onopen = function () {
        config.onDataChannelOpened(channel)
      }, channel.onerror = function (error) {
        config.onDataChannelError(error)
      }, channel.onclose = function (event) {
        config.onDataChannelClosed(event)
      }, channel.internalSend = channel.send, channel.send = function (data) {
        "open" === channel.readyState && channel.internalSend(data)
      }, peer.channel = channel
    }
    config.remoteSdp && (isOfferer = !1), this.createDataChannel = function () {
      setChannelEvents(peer.createDataChannel("sctp", {}))
    }, !0 !== connection.session.data || renegotiatingPeer || (isOfferer ? this.createDataChannel() : peer.ondatachannel = function (event) {
      setChannelEvents(event.channel)
    }), this.enableDisableVideoEncoding = function (enable) {
      var rtcp;
      if (peer.getSenders().forEach(function (sender) {
          rtcp || "video" !== sender.track.kind || (rtcp = sender)
        }), rtcp && rtcp.getParameters) {
        var parameters = rtcp.getParameters();
        parameters.encodings[1] && (parameters.encodings[1].active = !!enable), parameters.encodings[2] && (parameters.encodings[2].active = !!enable), rtcp.setParameters(parameters)
      }
    }, config.remoteSdp && (config.remoteSdp.remotePeerSdpConstraints && (sdpConstraints = config.remoteSdp.remotePeerSdpConstraints), defaults.sdpConstraints = setSdpConstraints(sdpConstraints), this.addRemoteSdp(config.remoteSdp, function () {
      createOfferOrAnswer("createAnswer")
    })), "two-way" != connection.session.audio && "two-way" != connection.session.video && "two-way" != connection.session.screen || (defaults.sdpConstraints = setSdpConstraints({
      OfferToReceiveAudio: "two-way" == connection.session.audio || config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.OfferToReceiveAudio,
      OfferToReceiveVideo: "two-way" == connection.session.video || "two-way" == connection.session.screen || config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.OfferToReceiveAudio
    }));
    var streamsToShare = {};

    function createOfferOrAnswer(_method) {
      peer[_method](defaults.sdpConstraints).then(function (localSdp) {
        "Safari" !== DetectRTC.browser.name && (localSdp.sdp = connection.processSdp(localSdp.sdp)), peer.setLocalDescription(localSdp).then(function () {
          connection.trickleIce && (config.onLocalSdp({
            type: localSdp.type,
            sdp: localSdp.sdp,
            remotePeerSdpConstraints: config.remotePeerSdpConstraints || !1,
            renegotiatingPeer: !!config.renegotiatingPeer || !1,
            connectionDescription: self.connectionDescription,
            dontGetRemoteStream: !!config.dontGetRemoteStream,
            extra: connection ? connection.extra : {},
            streamsToShare: streamsToShare
          }), connection.onSettingLocalDescription(self))
        }, function (error) {
          connection.enableLogs && console.error("setLocalDescription error", error)
        })
      }, function (error) {
        connection.enableLogs && console.error("sdp-error", error)
      })
    }
    peer.getLocalStreams().forEach(function (stream) {
      streamsToShare[stream.streamid] = {
        isAudio: !!stream.isAudio,
        isVideo: !!stream.isVideo,
        isScreen: !!stream.isScreen
      }
    }), isOfferer && createOfferOrAnswer("createOffer"), peer.nativeClose = peer.close, peer.close = function () {
      if (peer) {
        try {
          peer.nativeClose !== peer.close && peer.nativeClose()
        } catch (e) {}
        peer = null, self.peer = null
      }
    }, this.peer = peer
  }
  var CodecsHandler = function () {
    function preferCodec(sdp, codecName) {
      var info = splitLines(sdp);
      return info.videoCodecNumbers ? "vp8" === codecName && info.vp8LineNumber === info.videoCodecNumbers[0] ? sdp : "vp9" === codecName && info.vp9LineNumber === info.videoCodecNumbers[0] ? sdp : "h264" === codecName && info.h264LineNumber === info.videoCodecNumbers[0] ? sdp : sdp = preferCodecHelper(sdp, codecName, info) : sdp
    }

    function preferCodecHelper(sdp, codec, info, ignore) {
      var preferCodecNumber = "";
      if ("vp8" === codec) {
        if (!info.vp8LineNumber) return sdp;
        preferCodecNumber = info.vp8LineNumber
      }
      if ("vp9" === codec) {
        if (!info.vp9LineNumber) return sdp;
        preferCodecNumber = info.vp9LineNumber
      }
      if ("h264" === codec) {
        if (!info.h264LineNumber) return sdp;
        preferCodecNumber = info.h264LineNumber
      }
      var newLine = info.videoCodecNumbersOriginal.split("SAVPF")[0] + "SAVPF ",
        newOrder = [preferCodecNumber];
      return ignore && (newOrder = []), info.videoCodecNumbers.forEach(function (codecNumber) {
        codecNumber !== preferCodecNumber && newOrder.push(codecNumber)
      }), newLine += newOrder.join(" "), sdp = sdp.replace(info.videoCodecNumbersOriginal, newLine)
    }

    function splitLines(sdp) {
      var info = {};
      return sdp.split("\n").forEach(function (line) {
        0 === line.indexOf("m=video") && (info.videoCodecNumbers = [], line.split("SAVPF")[1].split(" ").forEach(function (codecNumber) {
          (codecNumber = codecNumber.trim()) && codecNumber.length && (info.videoCodecNumbers.push(codecNumber), info.videoCodecNumbersOriginal = line)
        })), -1 === line.indexOf("VP8/90000") || info.vp8LineNumber || (info.vp8LineNumber = line.replace("a=rtpmap:", "").split(" ")[0]), -1 === line.indexOf("VP9/90000") || info.vp9LineNumber || (info.vp9LineNumber = line.replace("a=rtpmap:", "").split(" ")[0]), -1 === line.indexOf("H264/90000") || info.h264LineNumber || (info.h264LineNumber = line.replace("a=rtpmap:", "").split(" ")[0])
      }), info
    }

    function findLine(sdpLines, prefix, substr) {
      return function (sdpLines, startLine, endLine, prefix, substr) {
        for (var realEndLine = -1 !== endLine ? endLine : sdpLines.length, i = startLine; i < realEndLine; ++i)
          if (0 === sdpLines[i].indexOf(prefix) && (!substr || -1 !== sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()))) return i;
        return null
      }(sdpLines, 0, -1, prefix, substr)
    }

    function getCodecPayloadType(sdpLine) {
      var pattern = new RegExp("a=rtpmap:(\\d+) \\w+\\/\\d+"),
        result = sdpLine.match(pattern);
      return result && 2 === result.length ? result[1] : null
    }
    return {
      removeVPX: function (sdp) {
        var info = splitLines(sdp);
        return sdp = preferCodecHelper(sdp = preferCodecHelper(sdp, "vp9", info, !0), "vp8", info, !0)
      },
      disableNACK: function (sdp) {
        if (!sdp || "string" != typeof sdp) throw "Invalid arguments.";
        return sdp = (sdp = (sdp = (sdp = sdp.replace("a=rtcp-fb:126 nack\r\n", "")).replace("a=rtcp-fb:126 nack pli\r\n", "a=rtcp-fb:126 pli\r\n")).replace("a=rtcp-fb:97 nack\r\n", "")).replace("a=rtcp-fb:97 nack pli\r\n", "a=rtcp-fb:97 pli\r\n")
      },
      prioritize: function (codecMimeType, peer) {
        if (peer && peer.getSenders && peer.getSenders().length) {
          if (!codecMimeType || "string" != typeof codecMimeType) throw "Invalid arguments.";
          peer.getSenders().forEach(function (sender) {
            for (var params = sender.getParameters(), i = 0; i < params.codecs.length; i++)
              if (params.codecs[i].mimeType == codecMimeType) {
                params.codecs.unshift(params.codecs.splice(i, 1));
                break
              } sender.setParameters(params)
          })
        }
      },
      removeNonG722: function (sdp) {
        return sdp.replace(/m=audio ([0-9]+) RTP\/SAVPF ([0-9 ]*)/g, "m=audio $1 RTP/SAVPF 9")
      },
      setApplicationSpecificBandwidth: function (sdp, bandwidth, isScreen) {
        return function (sdp, bandwidth, isScreen) {
          return bandwidth && (void 0 !== isFirefox && isFirefox || (isScreen && (bandwidth.screen ? bandwidth.screen < 300 && console.warn("It seems that you are using wrong bandwidth value for screen. Screen sharing is expected to fail.") : console.warn("It seems that you are not using bandwidth for screen. Screen sharing is expected to fail.")), bandwidth.screen && isScreen && (sdp = (sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, "")).replace(/a=mid:video\r\n/g, "a=mid:video\r\nb=AS:" + bandwidth.screen + "\r\n")), (bandwidth.audio || bandwidth.video) && (sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, "")), bandwidth.audio && (sdp = sdp.replace(/a=mid:audio\r\n/g, "a=mid:audio\r\nb=AS:" + bandwidth.audio + "\r\n")), bandwidth.screen ? sdp = sdp.replace(/a=mid:video\r\n/g, "a=mid:video\r\nb=AS:" + bandwidth.screen + "\r\n") : bandwidth.video && (sdp = sdp.replace(/a=mid:video\r\n/g, "a=mid:video\r\nb=AS:" + bandwidth.video + "\r\n")))), sdp
        }(sdp, bandwidth, isScreen)
      },
      setVideoBitrates: function (sdp, params) {
        return function (sdp, params) {
          var vp8Payload, xgoogle_min_bitrate = (params = params || {}).min,
            xgoogle_max_bitrate = params.max,
            sdpLines = sdp.split("\r\n"),
            vp8Index = findLine(sdpLines, "a=rtpmap", "VP8/90000");
          if (vp8Index && (vp8Payload = getCodecPayloadType(sdpLines[vp8Index])), !vp8Payload) return sdp;
          var rtxPayload, rtxIndex = findLine(sdpLines, "a=rtpmap", "rtx/90000");
          if (rtxIndex && (rtxPayload = getCodecPayloadType(sdpLines[rtxIndex])), !rtxIndex) return sdp;
          var rtxFmtpLineIndex = findLine(sdpLines, "a=fmtp:" + rtxPayload.toString());
          if (null !== rtxFmtpLineIndex) {
            var appendrtxNext = "\r\n";
            appendrtxNext += "a=fmtp:" + vp8Payload + " x-google-min-bitrate=" + (xgoogle_min_bitrate || "228") + "; x-google-max-bitrate=" + (xgoogle_max_bitrate || "228"), sdpLines[rtxFmtpLineIndex] = sdpLines[rtxFmtpLineIndex].concat(appendrtxNext), sdp = sdpLines.join("\r\n")
          }
          return sdp
        }(sdp, params)
      },
      setOpusAttributes: function (sdp, params) {
        return function (sdp, params) {
          params = params || {};
          var opusPayload, sdpLines = sdp.split("\r\n"),
            opusIndex = findLine(sdpLines, "a=rtpmap", "opus/48000");
          if (opusIndex && (opusPayload = getCodecPayloadType(sdpLines[opusIndex])), !opusPayload) return sdp;
          var opusFmtpLineIndex = findLine(sdpLines, "a=fmtp:" + opusPayload.toString());
          if (null === opusFmtpLineIndex) return sdp;
          var appendOpusNext = "";
          return appendOpusNext += "; stereo=" + (void 0 !== params.stereo ? params.stereo : "1"), appendOpusNext += "; sprop-stereo=" + (void 0 !== params["sprop-stereo"] ? params["sprop-stereo"] : "1"), void 0 !== params.maxaveragebitrate && (appendOpusNext += "; maxaveragebitrate=" + (params.maxaveragebitrate || 1048576)), void 0 !== params.maxplaybackrate && (appendOpusNext += "; maxplaybackrate=" + (params.maxplaybackrate || 1048576)), void 0 !== params.cbr && (appendOpusNext += "; cbr=" + (void 0 !== params.cbr ? params.cbr : "1")), void 0 !== params.useinbandfec && (appendOpusNext += "; useinbandfec=" + params.useinbandfec), void 0 !== params.usedtx && (appendOpusNext += "; usedtx=" + params.usedtx), void 0 !== params.maxptime && (appendOpusNext += "\r\na=maxptime:" + params.maxptime), sdpLines[opusFmtpLineIndex] = sdpLines[opusFmtpLineIndex].concat(appendOpusNext), sdp = sdpLines.join("\r\n")
        }(sdp, params)
      },
      preferVP9: function (sdp) {
        return preferCodec(sdp, "vp9")
      },
      preferCodec: preferCodec,
      forceStereoAudio: function (sdp) {
        for (var sdpLines = sdp.split("\r\n"), fmtpLineIndex = null, i = 0; i < sdpLines.length; i++)
          if (-1 !== sdpLines[i].search("opus/48000")) {
            var opusPayload = extractSdp(sdpLines[i], /:(\d+) opus\/48000/i);
            break
          } for (i = 0; i < sdpLines.length; i++)
          if (-1 !== sdpLines[i].search("a=fmtp") && extractSdp(sdpLines[i], /a=fmtp:(\d+)/) === opusPayload) {
            fmtpLineIndex = i;
            break
          } return null === fmtpLineIndex ? sdp : (sdpLines[fmtpLineIndex] = sdpLines[fmtpLineIndex].concat("; stereo=1; sprop-stereo=1"), sdp = sdpLines.join("\r\n"))
      }
    }
  }();
  window.BandwidthHandler = CodecsHandler;
  var OnIceCandidateHandler = {
      processCandidates: function (connection, icePair) {
        var candidate = icePair.candidate,
          iceRestrictions = connection.candidates,
          stun = iceRestrictions.stun,
          turn = iceRestrictions.turn;
        if (isNull(iceRestrictions.reflexive) || (stun = iceRestrictions.reflexive), isNull(iceRestrictions.relay) || (turn = iceRestrictions.relay), (iceRestrictions.host || !candidate.match(/typ host/g)) && (turn || !candidate.match(/typ relay/g)) && (stun || !candidate.match(/typ srflx/g))) {
          var protocol = connection.iceProtocols;
          if ((protocol.udp || !candidate.match(/ udp /g)) && (protocol.tcp || !candidate.match(/ tcp /g))) return connection.enableLogs && console.debug("Your candidate pairs:", candidate), {
            candidate: candidate,
            sdpMid: icePair.sdpMid,
            sdpMLineIndex: icePair.sdpMLineIndex
          }
        }
      }
    },
    IceServersHandler = {
      getIceServers: function (connection) {
        return [{
          urls: ["stun:webrtcweb.com:7788"],
          username: "muazkh",
          credential: "muazkh"
        }, {
          urls: ["turn:webrtcweb.com:7788", "turn:webrtcweb.com:8877", "turn:webrtcweb.com:4455"],
          username: "muazkh",
          credential: "muazkh"
        }, {
          urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun.l.google.com:19302?transport=udp"]
        }]
      }
    };

  function getUserMediaHandler(options) {
    if (!0 !== currentUserMediaRequest.mutex) {
      currentUserMediaRequest.mutex = !0;
      var idInstance = JSON.stringify(options.localMediaConstraints);
      if (currentUserMediaRequest.streams[idInstance]) streaming(currentUserMediaRequest.streams[idInstance].stream, !0);
      else {
        if (!!/BB10|BlackBerry/i.test(navigator.userAgent || "") || void 0 === navigator.mediaDevices || "function" != typeof navigator.mediaDevices.getUserMedia) return navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia, void navigator.getUserMedia(options.localMediaConstraints, function (stream) {
          stream.streamid = stream.streamid || stream.id || getRandomString(), stream.idInstance = idInstance, streaming(stream)
        }, function (error) {
          options.onLocalMediaError(error, options.localMediaConstraints)
        });
        if (void 0 === navigator.mediaDevices) {
          navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
          var getUserMediaStream, getUserMediaError, getUserMediaFailure = function () {};
          navigator.mediaDevices = {
            getUserMedia: function (hints) {
              return navigator.getUserMedia(hints, function (getUserMediaSuccess) {
                getUserMediaSuccess(stream), getUserMediaStream = stream
              }, function (error) {
                getUserMediaFailure(error), getUserMediaError = error
              }), {
                then: function (successCB) {
                  if (!getUserMediaStream) return successCB, {
                    then: function (failureCB) {
                      getUserMediaError ? failureCB(getUserMediaError) : getUserMediaFailure = failureCB
                    }
                  };
                  successCB(getUserMediaStream)
                }
              }
            }
          }
        }
        navigator.mediaDevices.getUserMedia(options.localMediaConstraints).then(function (stream) {
          stream.streamid = stream.streamid || stream.id || getRandomString(), stream.idInstance = idInstance, streaming(stream)
        }).catch(function (error) {
          options.onLocalMediaError(error, options.localMediaConstraints)
        })
      }
    } else currentUserMediaRequest.queueRequests.push(options);

    function streaming(stream, returnBack) {
      ! function (constraints, stream) {
        constraints.mandatory && constraints.mandatory.chromeMediaSource ? stream.isScreen = !0 : constraints.mozMediaSource || constraints.mediaSource ? stream.isScreen = !0 : constraints.video ? stream.isVideo = !0 : constraints.audio && (stream.isAudio = !0)
      }(options.localMediaConstraints, stream);
      var streamEndedEvent = "ended";
      "oninactive" in stream && (streamEndedEvent = "inactive"), stream.addEventListener(streamEndedEvent, function () {
        delete currentUserMediaRequest.streams[idInstance], currentUserMediaRequest.mutex = !1, currentUserMediaRequest.queueRequests.indexOf(options) && (delete currentUserMediaRequest.queueRequests[currentUserMediaRequest.queueRequests.indexOf(options)], currentUserMediaRequest.queueRequests = removeNullEntries(currentUserMediaRequest.queueRequests))
      }, !1), currentUserMediaRequest.streams[idInstance] = {
        stream: stream
      }, currentUserMediaRequest.mutex = !1, currentUserMediaRequest.queueRequests.length && getUserMediaHandler(currentUserMediaRequest.queueRequests.shift()), options.onGettingLocalMedia(stream, returnBack)
    }
  }
  window.currentUserMediaRequest = {
    streams: [],
    mutex: !1,
    queueRequests: [],
    remove: function (idInstance) {
      this.mutex = !1;
      var stream = this.streams[idInstance];
      if (stream) {
        var options = (stream = stream.stream).currentUserMediaRequestOptions;
        this.queueRequests.indexOf(options) && (delete this.queueRequests[this.queueRequests.indexOf(options)], this.queueRequests = removeNullEntries(this.queueRequests)), this.streams[idInstance].stream = null, delete this.streams[idInstance]
      }
    }
  };
  var StreamsHandler = function () {
    function handleType(type) {
      if (type) return "string" == typeof type || void 0 === type ? type : type.audio && type.video ? null : type.audio ? "audio" : type.video ? "video" : void 0
    }
    return {
      setHandlers: function (stream, syncAction, connection) {
        if (stream && stream.addEventListener) {
          if (void 0 === syncAction || 1 == syncAction) {
            var streamEndedEvent = "ended";
            "oninactive" in stream && (streamEndedEvent = "inactive"), stream.addEventListener(streamEndedEvent, function () {
              StreamsHandler.onSyncNeeded(this.streamid, streamEndedEvent)
            }, !1)
          }
          stream.mute = function (type, isSyncAction) {
            type = handleType(type), void 0 !== isSyncAction && (syncAction = isSyncAction), void 0 !== type && "audio" != type || getTracks(stream, "audio").forEach(function (track) {
              track.enabled = !1, connection.streamEvents[stream.streamid].isAudioMuted = !0
            }), void 0 !== type && "video" != type || getTracks(stream, "video").forEach(function (track) {
              track.enabled = !1
            }), void 0 !== syncAction && 1 != syncAction || StreamsHandler.onSyncNeeded(stream.streamid, "mute", type), connection.streamEvents[stream.streamid].muteType = type || "both", fireEvent(stream, "mute", type)
          }, stream.unmute = function (type, isSyncAction) {
            type = handleType(type), void 0 !== isSyncAction && (syncAction = isSyncAction),
              function () {
                if (connection.streamEvents[stream.streamid].mediaElement) {
                  var mediaElement = connection.streamEvents[stream.streamid].mediaElement;
                  mediaElement.volume = 0,
                    function afterEach(setTimeoutInteval, numberOfTimes, callback, startedTimes) {
                      numberOfTimes <= (startedTimes = (startedTimes || 0) + 1) || setTimeout(function () {
                        callback(), afterEach(setTimeoutInteval, numberOfTimes, callback, startedTimes)
                      }, setTimeoutInteval)
                    }(200, 5, function () {
                      try {
                        mediaElement.volume += .2
                      } catch (e) {
                        mediaElement.volume = 1
                      }
                    })
                }
              }(), void 0 !== type && "audio" != type || getTracks(stream, "audio").forEach(function (track) {
                track.enabled = !0, connection.streamEvents[stream.streamid].isAudioMuted = !1
              }), void 0 !== type && "video" != type || (getTracks(stream, "video").forEach(function (track) {
                track.enabled = !0
              }), void 0 !== type && "video" == type && connection.streamEvents[stream.streamid].isAudioMuted && function looper(times) {
                times || (times = 0), ++times < 100 && connection.streamEvents[stream.streamid].isAudioMuted && (stream.mute("audio"), setTimeout(function () {
                  looper(times)
                }, 50))
              }()), void 0 !== syncAction && 1 != syncAction || StreamsHandler.onSyncNeeded(stream.streamid, "unmute", type), connection.streamEvents[stream.streamid].unmuteType = type || "both", fireEvent(stream, "unmute", type)
          }
        }
      },
      onSyncNeeded: function (streamid, action, type) {}
    }
  }();
  window.addEventListener("message", function (event) {
    event.origin == window.location.origin && function (data) {
      if ("PermissionDeniedError" == data) {
        if (chromeMediaSource = "PermissionDeniedError", screenCallback) return screenCallback("PermissionDeniedError");
        throw new Error("PermissionDeniedError")
      }
      "rtcmulticonnection-extension-loaded" == data && (chromeMediaSource = "desktop");
      data.sourceId && screenCallback && screenCallback(sourceId = data.sourceId, !0 === data.canRequestAudioTrack)
    }(event.data)
  });
  var sourceId, screenCallback, chromeMediaSource = "screen";

  function isChromeExtensionAvailable(callback) {
    if (callback) {
      if ("desktop" == chromeMediaSource) return callback(!0);
      window.postMessage("are-you-there", "*"), setTimeout(function () {
        callback("screen" != chromeMediaSource)
      }, 2e3)
    }
  }
  var isFirefox = void 0 !== window.InstallTrigger,
    isOpera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
  window.chrome;

  function getChromeExtensionStatus(extensionid, callback) {
    if (isFirefox) return callback("not-chrome");
    2 != arguments.length && (callback = extensionid, extensionid = "ajhifddimkapgcifgcodmmfdlknahffk");
    var image = document.createElement("img");
    image.src = "chrome-extension://" + extensionid + "/icon.png", image.onload = function () {
      chromeMediaSource = "screen", window.postMessage("are-you-there", "*"), setTimeout(function () {
        callback("screen" == chromeMediaSource ? "installed-disabled" : "installed-enabled")
      }, 2e3)
    }, image.onerror = function () {
      callback("not-installed")
    }
  }

  function getScreenConstraints(callback, captureSourceIdWithAudio) {
    if (isFirefox) return callback(null, {
      mozMediaSource: "window",
      mediaSource: "window"
    });
    var screen_constraints = {
      mandatory: {
        chromeMediaSource: chromeMediaSource,
        maxWidth: 1920 < screen.width ? screen.width : 1920,
        maxHeight: 1080 < screen.height ? screen.height : 1080
      },
      optional: []
    };
    "desktop" != chromeMediaSource || sourceId ? ("desktop" == chromeMediaSource && (screen_constraints.mandatory.chromeMediaSourceId = sourceId), callback(null, screen_constraints)) : captureSourceIdWithAudio ? function (callback) {
      if (!callback) throw '"callback" parameter is mandatory.';
      if (sourceId) return callback(sourceId);
      screenCallback = callback, window.postMessage("audio-plus-tab", "*")
    }(function (sourceId, canRequestAudioTrack) {
      screen_constraints.mandatory.chromeMediaSourceId = sourceId, canRequestAudioTrack && (screen_constraints.canRequestAudioTrack = !0), callback("PermissionDeniedError" == sourceId ? sourceId : null, screen_constraints)
    }) : function (callback) {
      if (!callback) throw '"callback" parameter is mandatory.';
      if (sourceId) return callback(sourceId);
      screenCallback = callback, window.postMessage("get-sourceId", "*")
    }(function (sourceId) {
      screen_constraints.mandatory.chromeMediaSourceId = sourceId, callback("PermissionDeniedError" == sourceId ? sourceId : null, screen_constraints)
    })
  }

  function TextReceiver(connection) {
    var content = {};
    return {
      receive: function (data, userid, extra) {
        var uuid = data.uuid;
        if (content[uuid] || (content[uuid] = []), content[uuid].push(data.message), data.last) {
          var message = content[uuid].join("");
          data.isobject && (message = JSON.parse(message));
          var e = {
            data: message,
            userid: userid,
            extra: extra,
            latency: (new Date).getTime() - data.sendingTime
          };
          connection.autoTranslateText ? (e.original = e.data, connection.Translator.TranslateText(e.data, function (translatedText) {
            e.data = translatedText, connection.onmessage(e)
          })) : connection.onmessage(e), delete content[uuid]
        }
      }
    }
  }
  var TextSender = {
      send: function (config) {
        var connection = config.connection,
          channel = config.channel,
          remoteUserId = config.remoteUserId,
          initialText = config.text,
          packetSize = connection.chunkSize || 1e3,
          textToTransfer = "",
          isobject = !1;
        "string" != typeof initialText && (isobject = !0, initialText = JSON.stringify(initialText));
        var uuid = getRandomString(),
          sendingTime = (new Date).getTime();
        ! function sendText(textMessage, text) {
          var data = {
            type: "text",
            uuid: uuid,
            sendingTime: sendingTime
          };
          textMessage && (text = textMessage, data.packets = parseInt(text.length / packetSize));
          text.length > packetSize ? data.message = text.slice(0, packetSize) : (data.message = text, data.last = !0, data.isobject = isobject);
          channel.send(data, remoteUserId);
          textToTransfer = text.slice(data.message.length);
          textToTransfer.length && setTimeout(function () {
            sendText(null, textToTransfer)
          }, connection.chunkInterval || 100)
        }(initialText)
      }
    },
    FileProgressBarHandler = {
      handle: function (connection) {
        var progressHelper = {};
        connection.onFileStart = function (file) {
          var div = document.createElement("div");
          if (div.title = file.name, div.innerHTML = "<label>0%</label> <progress></progress>", file.remoteUserId && (div.innerHTML += " (Sharing with:" + file.remoteUserId + ")"), connection.filesContainer || (connection.filesContainer = document.body || document.documentElement), connection.filesContainer.insertBefore(div, connection.filesContainer.firstChild), !file.remoteUserId) return progressHelper[file.uuid] = {
            div: div,
            progress: div.querySelector("progress"),
            label: div.querySelector("label")
          }, void(progressHelper[file.uuid].progress.max = file.maxChunks);
          progressHelper[file.uuid] || (progressHelper[file.uuid] = {}), progressHelper[file.uuid][file.remoteUserId] = {
            div: div,
            progress: div.querySelector("progress"),
            label: div.querySelector("label")
          }, progressHelper[file.uuid][file.remoteUserId].progress.max = file.maxChunks
        }, connection.onFileProgress = function (chunk) {
          var helper = progressHelper[chunk.uuid];
          helper && (chunk.remoteUserId && !(helper = progressHelper[chunk.uuid][chunk.remoteUserId]) || (helper.progress.value = chunk.currentPosition || chunk.maxChunks || helper.progress.max, function (progress, label) {
            if (-1 !== progress.position) {
              var position = +progress.position.toFixed(2).split(".")[1] || 100;
              label.innerHTML = position + "%"
            }
          }(helper.progress, helper.label)))
        }, connection.onFileEnd = function (file) {
          var helper = progressHelper[file.uuid];
          if (helper) {
            if (!file.remoteUserId || (helper = progressHelper[file.uuid][file.remoteUserId])) {
              var div = helper.div; - 1 != file.type.indexOf("image") ? div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download <strong style="color:red;">' + file.name + '</strong> </a><br /><img src="' + file.url + '" title="' + file.name + '" style="max-width: 80%;">' : div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download <strong style="color:red;">' + file.name + '</strong> </a><br /><iframe src="' + file.url + '" title="' + file.name + '" style="width: 80%;border: 0;height: inherit;margin-top:1em;"></iframe>'
            }
          } else console.error("No such progress-helper element exist.", file)
        }
      }
    },
    TranslationHandler = {
      handle: function (connection) {
        connection.autoTranslateText = !1, connection.language = "en", connection.googKey = "AIzaSyCgB5hmFY74WYB-EoWkhr9cAGr6TiTHrEE", connection.Translator = {
          TranslateText: function (text, callback) {
            var newScript = document.createElement("script");
            newScript.type = "text/javascript";
            var sourceText = encodeURIComponent(text),
              randomNumber = "method" + connection.token();
            window[randomNumber] = function (response) {
              response.data && response.data.translations[0] && callback ? callback(response.data.translations[0].translatedText) : response.error && "Daily Limit Exceeded" === response.error.message ? console.error('Text translation failed. Error message: "Daily Limit Exceeded."') : response.error ? console.error(response.error.message) : console.error(response)
            };
            var source = "https://www.googleapis.com/language/translate/v2?key=" + connection.googKey + "&target=" + (connection.language || "en-US") + "&callback=window." + randomNumber + "&q=" + sourceText;
            newScript.src = source, document.getElementsByTagName("head")[0].appendChild(newScript)
          },
          getListOfLanguages: function (callback) {
            var xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function () {
              if (xhr.readyState == XMLHttpRequest.DONE) {
                var response = JSON.parse(xhr.responseText);
                if (response && response.data && response.data.languages) return void callback(response.data.languages);
                if (response.error && "Daily Limit Exceeded" === response.error.message) return void console.error('Text translation failed. Error message: "Daily Limit Exceeded."');
                if (response.error) return void console.error(response.error.message);
                console.error(response)
              }
            };
            var url = "https://www.googleapis.com/language/translate/v2/languages?key=" + connection.googKey + "&target=en";
            xhr.open("GET", url, !0), xhr.send(null)
          }
        }
      }
    };
  ! function (connection) {
    forceOptions = forceOptions || {
      useDefaultDevices: !0
    }, connection.channel = connection.sessionid = (roomid || location.href.replace(/\/|:|#|\?|\$|\^|%|\.|`|~|!|\+|@|\[|\||]|\|*. /g, "").split("\n").join("").split("\r").join("")) + "";
    var mPeer = new MultiPeers(connection),
      preventDuplicateOnStreamEvents = {};

    function connectSocket(connectCallback) {
      if (connection.socketAutoReConnect = !0, connection.socket) connectCallback && connectCallback(connection.socket);
      else {
        if (void 0 === SocketConnection)
          if ("undefined" != typeof FirebaseConnection) window.SocketConnection = FirebaseConnection;
          else {
            if ("undefined" == typeof PubNubConnection) throw "SocketConnection.js seems missed.";
            window.SocketConnection = PubNubConnection
          } new SocketConnection(connection, function (s) {
          connectCallback && connectCallback(connection.socket)
        })
      }
    }

    function joinRoom(connectionDescription, cb) {
      connection.socket.emit("join-room", {
        sessionid: connection.sessionid,
        session: connection.session,
        mediaConstraints: connection.mediaConstraints,
        sdpConstraints: connection.sdpConstraints,
        streams: getStreamInfoForAdmin(),
        extra: connection.extra,
        password: void 0 !== connection.password && "object" != typeof connection.password ? connection.password : ""
      }, function (isRoomJoined, error) {
        if (!0 === isRoomJoined) {
          if (connection.enableLogs && console.log("isRoomJoined: ", isRoomJoined, " roomid: ", connection.sessionid), connection.peers[connection.sessionid]) return;
          mPeer.onNegotiationNeeded(connectionDescription)
        }!1 === isRoomJoined && connection.enableLogs && console.warn("isRoomJoined: ", error, " roomid: ", connection.sessionid), cb(isRoomJoined, connection.sessionid, error)
      })
    }

    function openRoom(callback) {
      connection.enableLogs && console.log("Sending open-room signal to socket.io"), connection.waitingForLocalMedia = !1, connection.socket.emit("open-room", {
        sessionid: connection.sessionid,
        session: connection.session,
        mediaConstraints: connection.mediaConstraints,
        sdpConstraints: connection.sdpConstraints,
        streams: getStreamInfoForAdmin(),
        extra: connection.extra,
        identifier: connection.publicRoomIdentifier,
        password: void 0 !== connection.password && "object" != typeof connection.password ? connection.password : ""
      }, function (isRoomOpened, error) {
        !0 === isRoomOpened && (connection.enableLogs && console.log("isRoomOpened: ", isRoomOpened, " roomid: ", connection.sessionid), callback(isRoomOpened, connection.sessionid)), !1 === isRoomOpened && (connection.enableLogs && console.warn("isRoomOpened: ", error, " roomid: ", connection.sessionid), callback(isRoomOpened, connection.sessionid, error))
      })
    }

    function getStreamInfoForAdmin() {
      try {
        return connection.streamEvents.selectAll("local").map(function (event) {
          return {
            streamid: event.streamid,
            tracks: event.stream.getTracks().length
          }
        })
      } catch (e) {
        return []
      }
    }

    function beforeJoin(userPreferences, callback) {
      if (connection.dontCaptureUserMedia || userPreferences.isDataOnly) callback();
      else {
        var localMediaConstraints = {};
        userPreferences.localPeerSdpConstraints.OfferToReceiveAudio && (localMediaConstraints.audio = connection.mediaConstraints.audio), userPreferences.localPeerSdpConstraints.OfferToReceiveVideo && (localMediaConstraints.video = connection.mediaConstraints.video);
        var session = userPreferences.session || connection.session;
        session.oneway && "two-way" !== session.audio && "two-way" !== session.video && "two-way" !== session.screen ? callback() : (session.oneway && session.audio && "two-way" === session.audio && (session = {
          audio: !0
        }), (session.audio || session.video || session.screen) && (session.screen ? "Edge" === DetectRTC.browser.name ? navigator.getDisplayMedia({
          video: !0,
          audio: isAudioPlusTab(connection)
        }).then(function (screen) {
          screen.isScreen = !0, mPeer.onGettingLocalMedia(screen), !session.audio && !session.video || isAudioPlusTab(connection) ? callback(screen) : connection.invokeGetUserMedia(null, callback)
        }, function (error) {
          console.error("Unable to capture screen on Edge. HTTPs and version 17+ is required.")
        }) : connection.getScreenConstraints(function (error, screen_constraints) {
          connection.invokeGetUserMedia({
            audio: !!isAudioPlusTab(connection) && getAudioScreenConstraints(screen_constraints),
            video: screen_constraints,
            isScreen: !0
          }, !session.audio && !session.video || isAudioPlusTab(connection) ? callback : connection.invokeGetUserMedia(null, callback))
        }) : (session.audio || session.video) && connection.invokeGetUserMedia(null, callback, session)))
      }
    }

    function applyConstraints(stream, mediaConstraints) {
      stream ? (mediaConstraints.audio && getTracks(stream, "audio").forEach(function (track) {
        track.applyConstraints(mediaConstraints.audio)
      }), mediaConstraints.video && getTracks(stream, "video").forEach(function (track) {
        track.applyConstraints(mediaConstraints.video)
      })) : connection.enableLogs && console.error("No stream to applyConstraints.")
    }

    function replaceTrack(track, remoteUserId, isVideoTrack) {
      remoteUserId ? mPeer.replaceTrack(track, remoteUserId, isVideoTrack) : connection.peers.getAllParticipants().forEach(function (participant) {
        mPeer.replaceTrack(track, participant, isVideoTrack)
      })
    }
    mPeer.onGettingLocalMedia = function (stream, callback) {
      if (callback = callback || function () {}, preventDuplicateOnStreamEvents[stream.streamid]) callback();
      else {
        preventDuplicateOnStreamEvents[stream.streamid] = !0;
        try {
          stream.type = "local"
        } catch (e) {}
        connection.setStreamEndHandler(stream), getRMCMediaElement(stream, function (mediaElement) {
          mediaElement.id = stream.streamid, mediaElement.muted = !0, mediaElement.volume = 0, -1 === connection.attachStreams.indexOf(stream) && connection.attachStreams.push(stream), void 0 !== StreamsHandler && StreamsHandler.setHandlers(stream, !0, connection), connection.streamEvents[stream.streamid] = {
            stream: stream,
            type: "local",
            mediaElement: mediaElement,
            userid: connection.userid,
            extra: connection.extra,
            streamid: stream.streamid,
            isAudioMuted: !0
          };
          try {
            ! function (connection, streamEvent) {
              if (streamEvent.stream && getTracks(streamEvent.stream, "audio").length) {
                if (!connection || !streamEvent) throw "Both arguments are required.";
                if (connection.onspeaking && connection.onsilence) {
                  if ("undefined" == typeof hark) throw "hark.js not found.";
                  hark(streamEvent.stream, {
                    onspeaking: function () {
                      connection.onspeaking(streamEvent)
                    },
                    onsilence: function () {
                      connection.onsilence(streamEvent)
                    },
                    onvolumechange: function (volume, threshold) {
                      connection.onvolumechange && connection.onvolumechange(merge({
                        volume: volume,
                        threshold: threshold
                      }, streamEvent))
                    }
                  })
                }
              }
            }(connection, connection.streamEvents[stream.streamid]), setMuteHandlers(connection, connection.streamEvents[stream.streamid]), connection.onstream(connection.streamEvents[stream.streamid])
          } catch (e) {}
          callback()
        }, connection)
      }
    }, mPeer.onGettingRemoteMedia = function (stream, remoteUserId) {
      try {
        stream.type = "remote"
      } catch (e) {}
      connection.setStreamEndHandler(stream, "remote-stream"), getRMCMediaElement(stream, function (mediaElement) {
        mediaElement.id = stream.streamid, void 0 !== StreamsHandler && StreamsHandler.setHandlers(stream, !1, connection), connection.streamEvents[stream.streamid] = {
          stream: stream,
          type: "remote",
          userid: remoteUserId,
          extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
          mediaElement: mediaElement,
          streamid: stream.streamid
        }, setMuteHandlers(connection, connection.streamEvents[stream.streamid]), connection.onstream(connection.streamEvents[stream.streamid])
      }, connection)
    }, mPeer.onRemovingRemoteMedia = function (stream, remoteUserId) {
      var streamEvent = connection.streamEvents[stream.streamid];
      streamEvent || (streamEvent = {
        stream: stream,
        type: "remote",
        userid: remoteUserId,
        extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
        streamid: stream.streamid,
        mediaElement: connection.streamEvents[stream.streamid] ? connection.streamEvents[stream.streamid].mediaElement : null
      }), connection.peersBackup[streamEvent.userid] && (streamEvent.extra = connection.peersBackup[streamEvent.userid].extra), connection.onstreamended(streamEvent), delete connection.streamEvents[stream.streamid]
    }, mPeer.onNegotiationNeeded = function (message, remoteUserId, callback) {
      callback = callback || function () {};
      var messageToDeliver = {
        remoteUserId: remoteUserId = remoteUserId || message.remoteUserId,
        message: message = message || "",
        sender: connection.userid
      };
      message.remoteUserId && message.message && message.sender && (messageToDeliver = message), connectSocket(function () {
        connection.socket.emit(connection.socketMessageEvent, messageToDeliver, callback)
      })
    }, mPeer.onUserLeft = function (remoteUserId) {
      connection.deletePeer(remoteUserId)
    }, mPeer.disconnectWith = function (remoteUserId, callback) {
      connection.socket && connection.socket.emit("disconnect-with", remoteUserId, callback || function () {}), connection.deletePeer(remoteUserId)
    }, connection.socketOptions = {
      transport: "polling"
    }, connection.openOrJoin = function (roomid, callback) {
      callback = callback || function () {}, connection.checkPresence(roomid, function (isRoomExist, roomid) {
        if (isRoomExist) {
          connection.sessionid = roomid;
          var localPeerSdpConstraints, remotePeerSdpConstraints, isOneWay = !!connection.session.oneway,
            isDataOnly = isData(connection.session);
          remotePeerSdpConstraints = {
            OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
            OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
          }, localPeerSdpConstraints = {
            OfferToReceiveAudio: isOneWay ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
            OfferToReceiveVideo: isOneWay ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
          };
          var connectionDescription = {
            remoteUserId: connection.sessionid,
            message: {
              newParticipationRequest: !0,
              isOneWay: isOneWay,
              isDataOnly: isDataOnly,
              localPeerSdpConstraints: localPeerSdpConstraints,
              remotePeerSdpConstraints: remotePeerSdpConstraints
            },
            sender: connection.userid
          };
          beforeJoin(connectionDescription.message, function () {
            joinRoom(connectionDescription, callback)
          })
        } else connection.waitingForLocalMedia = !0, connection.isInitiator = !0, connection.sessionid = roomid || connection.sessionid, isData(connection.session) ? openRoom(callback) : connection.captureUserMedia(function () {
          openRoom(callback)
        })
      })
    }, connection.waitingForLocalMedia = !1, connection.open = function (roomid, callback) {
      callback = callback || function () {}, connection.waitingForLocalMedia = !0, connection.isInitiator = !0, connection.sessionid = roomid || connection.sessionid, connectSocket(function () {
        isData(connection.session) ? openRoom(callback) : connection.captureUserMedia(function () {
          openRoom(callback)
        })
      })
    }, connection.peersBackup = {}, connection.deletePeer = function (remoteUserId) {
      if (remoteUserId && connection.peers[remoteUserId]) {
        var eventObject = {
          userid: remoteUserId,
          extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {}
        };
        if (connection.peersBackup[eventObject.userid] && (eventObject.extra = connection.peersBackup[eventObject.userid].extra), connection.onleave(eventObject), connection.peers[remoteUserId]) {
          connection.peers[remoteUserId].streams.forEach(function (stream) {
            stream.stop()
          });
          var peer = connection.peers[remoteUserId].peer;
          if (peer && "closed" !== peer.iceConnectionState) try {
            peer.close()
          } catch (e) {}
          connection.peers[remoteUserId] && (connection.peers[remoteUserId].peer = null, delete connection.peers[remoteUserId])
        }
      }
    }, connection.rejoin = function (connectionDescription) {
      if (!connection.isInitiator && connectionDescription && Object.keys(connectionDescription).length) {
        var extra = {};
        connection.peers[connectionDescription.remoteUserId] && (extra = connection.peers[connectionDescription.remoteUserId].extra, connection.deletePeer(connectionDescription.remoteUserId)), connectionDescription && connectionDescription.remoteUserId && (connection.join(connectionDescription.remoteUserId), connection.onReConnecting({
          userid: connectionDescription.remoteUserId,
          extra: extra
        }))
      }
    }, connection.join = function (remoteUserId, options) {
      connection.sessionid = !!remoteUserId && (remoteUserId.sessionid || remoteUserId.remoteUserId || remoteUserId) || connection.sessionid, connection.sessionid += "";
      var localPeerSdpConstraints = !1,
        remotePeerSdpConstraints = !1,
        isOneWay = !1,
        isDataOnly = !1;
      if (remoteUserId && remoteUserId.session || !remoteUserId || "string" == typeof remoteUserId) {
        var session = remoteUserId && remoteUserId.session || connection.session;
        isOneWay = !!session.oneway, isDataOnly = isData(session), remotePeerSdpConstraints = {
          OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
          OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
        }, localPeerSdpConstraints = {
          OfferToReceiveAudio: isOneWay ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
          OfferToReceiveVideo: isOneWay ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
        }
      }
      var cb = function () {};
      "function" == typeof (options = options || {}) && (cb = options, options = {}), void 0 !== options.localPeerSdpConstraints && (localPeerSdpConstraints = options.localPeerSdpConstraints), void 0 !== options.remotePeerSdpConstraints && (remotePeerSdpConstraints = options.remotePeerSdpConstraints), void 0 !== options.isOneWay && (isOneWay = options.isOneWay), void 0 !== options.isDataOnly && (isDataOnly = options.isDataOnly);
      var connectionDescription = {
        remoteUserId: connection.sessionid,
        message: {
          newParticipationRequest: !0,
          isOneWay: isOneWay,
          isDataOnly: isDataOnly,
          localPeerSdpConstraints: localPeerSdpConstraints,
          remotePeerSdpConstraints: remotePeerSdpConstraints
        },
        sender: connection.userid
      };
      return beforeJoin(connectionDescription.message, function () {
        connectSocket(function () {
          joinRoom(connectionDescription, cb)
        })
      }), connectionDescription
    }, connection.publicRoomIdentifier = "", connection.getUserMedia = connection.captureUserMedia = function (callback, sessionForced) {
      callback = callback || function () {};
      var session = sessionForced || connection.session;
      connection.dontCaptureUserMedia || isData(session) ? callback() : (session.audio || session.video || session.screen) && (session.screen ? "Edge" === DetectRTC.browser.name ? navigator.getDisplayMedia({
        video: !0,
        audio: isAudioPlusTab(connection)
      }).then(function (screen) {
        if (screen.isScreen = !0, mPeer.onGettingLocalMedia(screen), !session.audio && !session.video || isAudioPlusTab(connection)) callback(screen);
        else {
          var nonScreenSession = {};
          for (var s in session) "screen" !== s && (nonScreenSession[s] = session[s]);
          connection.invokeGetUserMedia(sessionForced, callback, nonScreenSession)
        }
      }, function (error) {
        console.error("Unable to capture screen on Edge. HTTPs and version 17+ is required.")
      }) : connection.getScreenConstraints(function (error, screen_constraints) {
        if (error) throw error;
        connection.invokeGetUserMedia({
          audio: !!isAudioPlusTab(connection) && getAudioScreenConstraints(screen_constraints),
          video: screen_constraints,
          isScreen: !0
        }, function (stream) {
          if (!session.audio && !session.video || isAudioPlusTab(connection)) callback(stream);
          else {
            var nonScreenSession = {};
            for (var s in session) "screen" !== s && (nonScreenSession[s] = session[s]);
            connection.invokeGetUserMedia(sessionForced, callback, nonScreenSession)
          }
        })
      }) : (session.audio || session.video) && connection.invokeGetUserMedia(sessionForced, callback, session))
    }, connection.onbeforeunload = function (arg1, dontCloseSocket) {
      connection.closeBeforeUnload && (connection.peers.getAllParticipants().forEach(function (participant) {
        mPeer.onNegotiationNeeded({
          userLeft: !0
        }, participant), connection.peers[participant] && connection.peers[participant].peer && connection.peers[participant].peer.close(), delete connection.peers[participant]
      }), dontCloseSocket || connection.closeSocket(), connection.isInitiator = !1)
    }, window.ignoreBeforeUnload ? connection.closeBeforeUnload = !1 : (connection.closeBeforeUnload = !0, window.addEventListener("beforeunload", connection.onbeforeunload, !1)), connection.userid = getRandomString(), connection.changeUserId = function (newUserId, callback) {
      callback = callback || function () {}, connection.userid = newUserId || getRandomString(), connection.socket.emit("changed-uuid", connection.userid, callback)
    }, connection.extra = {}, connection.attachStreams = [], connection.session = {
      audio: !0,
      video: !0
    }, connection.enableFileSharing = !1, connection.bandwidth = {
      screen: !1,
      audio: !1,
      video: !1
    }, connection.codecs = {
      audio: "opus",
      video: "VP9"
    }, connection.processSdp = function (sdp) {
      return isUnifiedPlanSupportedDefault() ? sdp : "Safari" === DetectRTC.browser.name ? sdp : ("VP8" === connection.codecs.video.toUpperCase() && (sdp = CodecsHandler.preferCodec(sdp, "vp8")), "VP9" === connection.codecs.video.toUpperCase() && (sdp = CodecsHandler.preferCodec(sdp, "vp9")), "H264" === connection.codecs.video.toUpperCase() && (sdp = CodecsHandler.preferCodec(sdp, "h264")), "G722" === connection.codecs.audio && (sdp = CodecsHandler.removeNonG722(sdp)), "Firefox" === DetectRTC.browser.name || ((connection.bandwidth.video || connection.bandwidth.screen) && (sdp = CodecsHandler.setApplicationSpecificBandwidth(sdp, connection.bandwidth, !!connection.session.screen)), connection.bandwidth.video && (sdp = CodecsHandler.setVideoBitrates(sdp, {
        min: 8 * connection.bandwidth.video * 1024,
        max: 8 * connection.bandwidth.video * 1024
      })), connection.bandwidth.audio && (sdp = CodecsHandler.setOpusAttributes(sdp, {
        maxaveragebitrate: 8 * connection.bandwidth.audio * 1024,
        maxplaybackrate: 8 * connection.bandwidth.audio * 1024,
        stereo: 1,
        maxptime: 3
      }))), sdp)
    }, void 0 !== CodecsHandler && (connection.BandwidthHandler = connection.CodecsHandler = CodecsHandler), connection.mediaConstraints = {
      audio: {
        mandatory: {},
        optional: connection.bandwidth.audio ? [{
          bandwidth: 8 * connection.bandwidth.audio * 1024 || 1048576
        }] : []
      },
      video: {
        mandatory: {},
        optional: connection.bandwidth.video ? [{
          bandwidth: 8 * connection.bandwidth.video * 1024 || 1048576
        }, {
          facingMode: "user"
        }] : [{
          facingMode: "user"
        }]
      }
    }, "Firefox" === DetectRTC.browser.name && (connection.mediaConstraints = {
      audio: !0,
      video: !0
    }), forceOptions.useDefaultDevices || DetectRTC.isMobileDevice || DetectRTC.load(function () {
      var lastAudioDevice, lastVideoDevice;
      if (DetectRTC.MediaDevices.forEach(function (device) {
          "audioinput" === device.kind && !1 !== connection.mediaConstraints.audio && (lastAudioDevice = device), "videoinput" === device.kind && !1 !== connection.mediaConstraints.video && (lastVideoDevice = device)
        }), lastAudioDevice) {
        if ("Firefox" === DetectRTC.browser.name) return void(!0 !== connection.mediaConstraints.audio ? connection.mediaConstraints.audio.deviceId = lastAudioDevice.id : connection.mediaConstraints.audio = {
          deviceId: lastAudioDevice.id
        });
        1 == connection.mediaConstraints.audio && (connection.mediaConstraints.audio = {
          mandatory: {},
          optional: []
        }), connection.mediaConstraints.audio.optional || (connection.mediaConstraints.audio.optional = []);
        var optional = [{
          sourceId: lastAudioDevice.id
        }];
        connection.mediaConstraints.audio.optional = optional.concat(connection.mediaConstraints.audio.optional)
      }
      if (lastVideoDevice) {
        if ("Firefox" === DetectRTC.browser.name) return void(!0 !== connection.mediaConstraints.video ? connection.mediaConstraints.video.deviceId = lastVideoDevice.id : connection.mediaConstraints.video = {
          deviceId: lastVideoDevice.id
        });
        1 == connection.mediaConstraints.video && (connection.mediaConstraints.video = {
          mandatory: {},
          optional: []
        }), connection.mediaConstraints.video.optional || (connection.mediaConstraints.video.optional = []);
        optional = [{
          sourceId: lastVideoDevice.id
        }];
        connection.mediaConstraints.video.optional = optional.concat(connection.mediaConstraints.video.optional)
      }
    }), connection.sdpConstraints = {
      mandatory: {
        OfferToReceiveAudio: !0,
        OfferToReceiveVideo: !0
      },
      optional: [{
        VoiceActivityDetection: !1
      }]
    }, connection.sdpSemantics = null, connection.iceCandidatePoolSize = null, connection.bundlePolicy = null, connection.rtcpMuxPolicy = null, connection.iceTransportPolicy = null, connection.optionalArgument = {
      optional: [{
        DtlsSrtpKeyAgreement: !0
      }, {
        googImprovedWifiBwe: !0
      }, {
        googScreencastMinBitrate: 300
      }, {
        googIPv6: !0
      }, {
        googDscp: !0
      }, {
        googCpuUnderuseThreshold: 55
      }, {
        googCpuOveruseThreshold: 85
      }, {
        googSuspendBelowMinBitrate: !0
      }, {
        googCpuOveruseDetection: !0
      }],
      mandatory: {}
    }, connection.iceServers = IceServersHandler.getIceServers(connection), connection.candidates = {
      host: !0,
      stun: !0,
      turn: !0
    }, connection.iceProtocols = {
      tcp: !0,
      udp: !0
    }, connection.onopen = function (event) {
      connection.enableLogs && console.info("Data connection has been opened between you & ", event.userid)
    }, connection.onclose = function (event) {
      connection.enableLogs && console.warn("Data connection has been closed between you & ", event.userid)
    }, connection.onerror = function (error) {
      connection.enableLogs && console.error(error.userid, "data-error", error)
    }, connection.onmessage = function (event) {
      connection.enableLogs && console.debug("data-message", event.userid, event.data)
    }, connection.send = function (data, remoteUserId) {
      connection.peers.send(data, remoteUserId)
    }, connection.close = connection.disconnect = connection.leave = function () {
      connection.onbeforeunload(!1, !0)
    }, connection.closeEntireSession = function (callback) {
      callback = callback || function () {}, connection.socket.emit("close-entire-session", function looper() {
        connection.getAllParticipants().length ? setTimeout(looper, 100) : (connection.onEntireSessionClosed({
          sessionid: connection.sessionid,
          userid: connection.userid,
          extra: connection.extra
        }), connection.changeUserId(null, function () {
          connection.close(), callback()
        }))
      })
    }, connection.onEntireSessionClosed = function (event) {
      connection.enableLogs && console.info("Entire session is closed: ", event.sessionid, event.extra)
    }, connection.onstream = function (e) {
      var parentNode = connection.videosContainer;
      parentNode.insertBefore(e.mediaElement, parentNode.firstChild);
      var played = e.mediaElement.play();
      void 0 === played ? setTimeout(function () {
        e.mediaElement.play()
      }, 2e3) : played.catch(function () {}).then(function () {
        setTimeout(function () {
          e.mediaElement.play()
        }, 2e3)
      })
    }, connection.onstreamended = function (e) {
      e.mediaElement || (e.mediaElement = document.getElementById(e.streamid)), e.mediaElement && e.mediaElement.parentNode && e.mediaElement.parentNode.removeChild(e.mediaElement)
    }, connection.direction = "many-to-many", connection.removeStream = function (streamid, remoteUserId) {
      var stream;
      connection.attachStreams.forEach(function (localStream) {
        localStream.id === streamid && (stream = localStream)
      }), stream ? (connection.peers.getAllParticipants().forEach(function (participant) {
        if (!remoteUserId || participant === remoteUserId) {
          var user = connection.peers[participant];
          try {
            user.peer.removeStream(stream)
          } catch (e) {}
        }
      }), connection.renegotiate()) : console.warn("No such stream exist.", streamid)
    }, connection.addStream = function (session, remoteUserId) {
      if (session.getTracks) return -1 === connection.attachStreams.indexOf(session) && (session.streamid || (session.streamid = session.id), connection.attachStreams.push(session)), void connection.renegotiate(remoteUserId);

      function gumCallback(stream) {
        session.streamCallback && session.streamCallback(stream), connection.renegotiate(remoteUserId)
      }
      isData(session) ? connection.renegotiate(remoteUserId) : (session.audio || session.video || session.screen) && (session.screen ? "Edge" === DetectRTC.browser.name ? navigator.getDisplayMedia({
        video: !0,
        audio: isAudioPlusTab(connection)
      }).then(function (screen) {
        screen.isScreen = !0, mPeer.onGettingLocalMedia(screen), !session.audio && !session.video || isAudioPlusTab(connection) ? gumCallback(screen) : connection.invokeGetUserMedia(null, function (stream) {
          gumCallback(stream)
        })
      }, function (error) {
        console.error("Unable to capture screen on Edge. HTTPs and version 17+ is required.")
      }) : connection.getScreenConstraints(function (error, screen_constraints) {
        if (error) return "PermissionDeniedError" === error ? (session.streamCallback && session.streamCallback(null), void(connection.enableLogs && console.error("User rejected to share his screen."))) : alert(error);
        connection.invokeGetUserMedia({
          audio: !!isAudioPlusTab(connection) && getAudioScreenConstraints(screen_constraints),
          video: screen_constraints,
          isScreen: !0
        }, function (stream) {
          !session.audio && !session.video || isAudioPlusTab(connection) ? gumCallback(stream) : connection.invokeGetUserMedia(null, function (stream) {
            gumCallback(stream)
          })
        })
      }) : (session.audio || session.video) && connection.invokeGetUserMedia(null, gumCallback))
    }, connection.invokeGetUserMedia = function (localMediaConstraints, callback, session) {
      session || (session = connection.session), localMediaConstraints || (localMediaConstraints = connection.mediaConstraints), getUserMediaHandler({
        onGettingLocalMedia: function (stream) {
          var videoConstraints = localMediaConstraints.video;
          videoConstraints && (videoConstraints.mediaSource || videoConstraints.mozMediaSource ? stream.isScreen = !0 : videoConstraints.mandatory && videoConstraints.mandatory.chromeMediaSource && (stream.isScreen = !0)), stream.isScreen || (stream.isVideo = !!getTracks(stream, "video").length, stream.isAudio = !stream.isVideo && getTracks(stream, "audio").length), mPeer.onGettingLocalMedia(stream, function () {
            "function" == typeof callback && callback(stream)
          })
        },
        onLocalMediaError: function (error, constraints) {
          mPeer.onLocalMediaError(error, constraints)
        },
        localMediaConstraints: localMediaConstraints || {
          audio: !!session.audio && localMediaConstraints.audio,
          video: !!session.video && localMediaConstraints.video
        }
      })
    }, connection.applyConstraints = function (mediaConstraints, streamid) {
      if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
        var stream;
        if (streamid) return connection.streamEvents[streamid] && (stream = connection.streamEvents[streamid].stream), void applyConstraints(stream, mediaConstraints);
        connection.attachStreams.forEach(function (stream) {
          applyConstraints(stream, mediaConstraints)
        })
      } else alert("track.applyConstraints is NOT supported in your browser.")
    }, connection.replaceTrack = function (session, remoteUserId, isVideoTrack) {
      if (session = session || {}, RTCPeerConnection.prototype.getSenders)
        if (session instanceof MediaStreamTrack) replaceTrack(session, remoteUserId, isVideoTrack);
        else {
          if (session instanceof MediaStream) return getTracks(session, "video").length && replaceTrack(getTracks(session, "video")[0], remoteUserId, !0), void(getTracks(session, "audio").length && replaceTrack(getTracks(session, "audio")[0], remoteUserId, !1));
          if (isData(session)) throw "connection.replaceTrack requires audio and/or video and/or screen.";
          (session.audio || session.video || session.screen) && (session.screen ? "Edge" === DetectRTC.browser.name ? navigator.getDisplayMedia({
            video: !0,
            audio: isAudioPlusTab(connection)
          }).then(function (screen) {
            screen.isScreen = !0, mPeer.onGettingLocalMedia(screen), !session.audio && !session.video || isAudioPlusTab(connection) ? gumCallback(screen) : connection.invokeGetUserMedia(null, gumCallback)
          }, function (error) {
            console.error("Unable to capture screen on Edge. HTTPs and version 17+ is required.")
          }) : connection.getScreenConstraints(function (error, screen_constraints) {
            if (error) return alert(error);
            connection.invokeGetUserMedia({
              audio: !!isAudioPlusTab(connection) && getAudioScreenConstraints(screen_constraints),
              video: screen_constraints,
              isScreen: !0
            }, !session.audio && !session.video || isAudioPlusTab(connection) ? gumCallback : connection.invokeGetUserMedia(null, gumCallback))
          }) : (session.audio || session.video) && connection.invokeGetUserMedia(null, gumCallback))
        }
      else connection.addStream(session);

      function gumCallback(stream) {
        connection.replaceTrack(stream, remoteUserId, isVideoTrack || session.video || session.screen)
      }
    }, connection.resetTrack = function (remoteUsersIds, isVideoTrack) {
      remoteUsersIds || (remoteUsersIds = connection.getAllParticipants()), "string" == typeof remoteUsersIds && (remoteUsersIds = [remoteUsersIds]), remoteUsersIds.forEach(function (participant) {
        var peer = connection.peers[participant].peer;
        void 0 !== isVideoTrack && !0 !== isVideoTrack || !peer.lastVideoTrack || connection.replaceTrack(peer.lastVideoTrack, participant, !0), void 0 !== isVideoTrack && !1 !== isVideoTrack || !peer.lastAudioTrack || connection.replaceTrack(peer.lastAudioTrack, participant, !1)
      })
    }, connection.renegotiate = function (remoteUserId) {
      remoteUserId ? mPeer.renegotiatePeer(remoteUserId) : connection.peers.getAllParticipants().forEach(function (participant) {
        mPeer.renegotiatePeer(participant)
      })
    }, connection.setStreamEndHandler = function (stream, isRemote) {
      if (stream && stream.addEventListener && (isRemote = !!isRemote, !stream.alreadySetEndHandler)) {
        stream.alreadySetEndHandler = !0;
        var streamEndedEvent = "ended";
        "oninactive" in stream && (streamEndedEvent = "inactive"), stream.addEventListener(streamEndedEvent, function () {
          if (stream.idInstance && currentUserMediaRequest.remove(stream.idInstance), !isRemote) {
            var streams = [];
            connection.attachStreams.forEach(function (s) {
              s.id != stream.id && streams.push(s)
            }), connection.attachStreams = streams
          }
          var streamEvent = connection.streamEvents[stream.streamid];
          if (streamEvent || (streamEvent = {
              stream: stream,
              streamid: stream.streamid,
              type: isRemote ? "remote" : "local",
              userid: connection.userid,
              extra: connection.extra,
              mediaElement: connection.streamEvents[stream.streamid] ? connection.streamEvents[stream.streamid].mediaElement : null
            }), isRemote && connection.peers[streamEvent.userid]) {
            var peer = connection.peers[streamEvent.userid].peer;
            streams = [];
            peer.getRemoteStreams().forEach(function (s) {
              s.id != stream.id && streams.push(s)
            }), connection.peers[streamEvent.userid].streams = streams
          }
          streamEvent.userid === connection.userid && "remote" === streamEvent.type || (connection.peersBackup[streamEvent.userid] && (streamEvent.extra = connection.peersBackup[streamEvent.userid].extra), connection.onstreamended(streamEvent), delete connection.streamEvents[stream.streamid])
        }, !1)
      }
    }, connection.onMediaError = function (error, constraints) {
      connection.enableLogs && console.error(error, constraints)
    }, connection.autoCloseEntireSession = !1, connection.filesContainer = connection.videosContainer = document.body || document.documentElement, connection.isInitiator = !1, connection.shareFile = mPeer.shareFile, void 0 !== FileProgressBarHandler && FileProgressBarHandler.handle(connection), void 0 !== TranslationHandler && TranslationHandler.handle(connection), connection.token = getRandomString, connection.onNewParticipant = function (participantId, userPreferences) {
      connection.acceptParticipationRequest(participantId, userPreferences)
    }, connection.acceptParticipationRequest = function (participantId, userPreferences) {
      userPreferences.successCallback && (userPreferences.successCallback(), delete userPreferences.successCallback), mPeer.createNewPeer(participantId, userPreferences)
    }, void 0 !== StreamsHandler && (connection.StreamsHandler = StreamsHandler), connection.onleave = function (userid) {}, connection.invokeSelectFileDialog = function (callback) {
      var selector = new FileSelector;
      selector.accept = "*.*", selector.selectSingleFile(callback)
    }, connection.onmute = function (e) {
      if (e && e.mediaElement)
        if ("both" === e.muteType || "video" === e.muteType) {
          e.mediaElement.src = null;
          var paused = e.mediaElement.pause();
          void 0 !== paused ? paused.then(function () {
            e.mediaElement.poster = e.snapshot || "https://cdn.webrtc-experiment.com/images/muted.png"
          }) : e.mediaElement.poster = e.snapshot || "https://cdn.webrtc-experiment.com/images/muted.png"
        } else "audio" === e.muteType && (e.mediaElement.muted = !0)
    }, connection.onunmute = function (e) {
      e && e.mediaElement && e.stream && ("both" === e.unmuteType || "video" === e.unmuteType ? (e.mediaElement.poster = null, e.mediaElement.srcObject = e.stream, e.mediaElement.play()) : "audio" === e.unmuteType && (e.mediaElement.muted = !1))
    }, connection.onExtraDataUpdated = function (event) {
      event.status = "online", connection.onUserStatusChanged(event, !0)
    }, connection.getAllParticipants = function (sender) {
      return connection.peers.getAllParticipants(sender)
    }, void 0 !== StreamsHandler && (StreamsHandler.onSyncNeeded = function (streamid, action, type) {
      connection.peers.getAllParticipants().forEach(function (participant) {
        mPeer.onNegotiationNeeded({
          streamid: streamid,
          action: action,
          streamSyncNeeded: !0,
          type: type || "both"
        }, participant)
      })
    }), connection.connectSocket = function (callback) {
      connectSocket(callback)
    }, connection.closeSocket = function () {
      try {
        io.sockets = {}
      } catch (e) {}
      connection.socket && ("function" == typeof connection.socket.disconnect && connection.socket.disconnect(), "function" == typeof connection.socket.resetProps && connection.socket.resetProps(), connection.socket = null)
    }, connection.getSocket = function (callback) {
      return !callback && connection.enableLogs && console.warn("getSocket.callback paramter is required."), callback = callback || function () {}, connection.socket ? callback(connection.socket) : connectSocket(function () {
        callback(connection.socket)
      }), connection.socket
    }, connection.getRemoteStreams = mPeer.getRemoteStreams;
    var skipStreams = ["selectFirst", "selectAll", "forEach"];
    if (connection.streamEvents = {
        selectFirst: function (options) {
          return connection.streamEvents.selectAll(options)[0]
        },
        selectAll: function (options) {
          options || (options = {
            local: !0,
            remote: !0,
            isScreen: !0,
            isAudio: !0,
            isVideo: !0
          }), "local" == options && (options = {
            local: !0
          }), "remote" == options && (options = {
            remote: !0
          }), "screen" == options && (options = {
            isScreen: !0
          }), "audio" == options && (options = {
            isAudio: !0
          }), "video" == options && (options = {
            isVideo: !0
          });
          var streams = [];
          return Object.keys(connection.streamEvents).forEach(function (key) {
            var event = connection.streamEvents[key];
            if (-1 === skipStreams.indexOf(key)) {
              var ignore = !0;
              options.local && "local" === event.type && (ignore = !1), options.remote && "remote" === event.type && (ignore = !1), options.isScreen && event.stream.isScreen && (ignore = !1), options.isVideo && event.stream.isVideo && (ignore = !1), options.isAudio && event.stream.isAudio && (ignore = !1), options.userid && event.userid === options.userid && (ignore = !1), !1 === ignore && streams.push(event)
            }
          }), streams
        }
      }, connection.socketURL = "/", connection.socketMessageEvent = "RTCMultiConnection-Message", connection.socketCustomEvent = "RTCMultiConnection-Custom-Message", connection.DetectRTC = DetectRTC, connection.setCustomSocketEvent = function (customEvent) {
        customEvent && (connection.socketCustomEvent = customEvent), connection.socket && connection.socket.emit("set-custom-socket-event-listener", connection.socketCustomEvent)
      }, connection.getNumberOfBroadcastViewers = function (broadcastId, callback) {
        connection.socket && broadcastId && callback && connection.socket.emit("get-number-of-users-in-specific-broadcast", broadcastId, callback)
      }, connection.onNumberOfBroadcastViewersUpdated = function (event) {
        connection.enableLogs && connection.isInitiator && console.info("Number of broadcast (", event.broadcastId, ") viewers", event.numberOfBroadcastViewers)
      }, connection.onUserStatusChanged = function (event, dontWriteLogs) {
        connection.enableLogs && !dontWriteLogs && console.info(event.userid, event.status)
      }, connection.getUserMediaHandler = getUserMediaHandler, connection.multiPeersHandler = mPeer, connection.enableLogs = !0, connection.setCustomSocketHandler = function (customSocketHandler) {
        void 0 !== SocketConnection && (SocketConnection = customSocketHandler)
      }, connection.chunkSize = 4e4, connection.maxParticipantsAllowed = 1e3, connection.disconnectWith = mPeer.disconnectWith, connection.checkPresence = function (roomid, callback) {
        roomid = roomid || connection.sessionid, "SSEConnection" !== SocketConnection.name ? connection.socket ? connection.socket.emit("check-presence", roomid + "", function (isRoomExist, _roomid, extra) {
          connection.enableLogs && console.log("checkPresence.isRoomExist: ", isRoomExist, " roomid: ", _roomid), callback(isRoomExist, _roomid, extra)
        }) : connection.connectSocket(function () {
          connection.checkPresence(roomid, callback)
        }) : SSEConnection.checkPresence(roomid, function (isRoomExist, _roomid, extra) {
          if (!connection.socket) return isRoomExist || (connection.userid = _roomid), void connection.connectSocket(function () {
            callback(isRoomExist, _roomid, extra)
          });
          callback(isRoomExist, _roomid)
        })
      }, connection.onReadyForOffer = function (remoteUserId, userPreferences) {
        connection.multiPeersHandler.createNewPeer(remoteUserId, userPreferences)
      }, connection.setUserPreferences = function (userPreferences) {
        return connection.dontAttachStream && (userPreferences.dontAttachLocalStream = !0), connection.dontGetRemoteStream && (userPreferences.dontGetRemoteStream = !0), userPreferences
      }, connection.updateExtraData = function () {
        connection.socket.emit("extra-data-updated", connection.extra)
      }, connection.enableScalableBroadcast = !1, connection.maxRelayLimitPerUser = 3, connection.dontCaptureUserMedia = !1, connection.dontAttachStream = !1, connection.dontGetRemoteStream = !1, connection.onReConnecting = function (event) {
        connection.enableLogs && console.info("ReConnecting with", event.userid, "...")
      }, connection.beforeAddingStream = function (stream) {
        return stream
      }, connection.beforeRemovingStream = function (stream) {
        return stream
      }, connection.checkIfChromeExtensionAvailable = isChromeExtensionAvailable, "undefined" != typeof isFirefoxExtensionAvailable && (connection.checkIfChromeExtensionAvailable = isFirefoxExtensionAvailable), connection.getChromeExtensionStatus = getChromeExtensionStatus, connection.getScreenConstraints = function (callback, audioPlusTab) {
        isAudioPlusTab(connection, audioPlusTab) && (audioPlusTab = !0), getScreenConstraints(function (error, screen_constraints) {
          error || (screen_constraints = connection.modifyScreenConstraints(screen_constraints), callback(error, screen_constraints))
        }, audioPlusTab)
      }, connection.modifyScreenConstraints = function (screen_constraints) {
        return screen_constraints
      }, connection.onPeerStateChanged = function (state) {
        connection.enableLogs && -1 !== state.iceConnectionState.search(/closed|failed/gi) && console.error("Peer connection is closed between you & ", state.userid, state.extra, "state:", state.iceConnectionState)
      }, connection.isOnline = !0, listenEventHandler("online", function () {
        connection.isOnline = !0
      }), listenEventHandler("offline", function () {
        connection.isOnline = !1
      }), connection.isLowBandwidth = !1, navigator && navigator.connection && navigator.connection.type && (connection.isLowBandwidth = -1 !== navigator.connection.type.toString().toLowerCase().search(/wifi|cell/g), connection.isLowBandwidth)) {
      if (connection.bandwidth = {
          audio: !1,
          video: !1,
          screen: !1
        }, connection.mediaConstraints.audio && connection.mediaConstraints.audio.optional && connection.mediaConstraints.audio.optional.length) {
        var newArray = [];
        connection.mediaConstraints.audio.optional.forEach(function (opt) {
          void 0 === opt.bandwidth && newArray.push(opt)
        }), connection.mediaConstraints.audio.optional = newArray
      }
      if (connection.mediaConstraints.video && connection.mediaConstraints.video.optional && connection.mediaConstraints.video.optional.length) {
        newArray = [];
        connection.mediaConstraints.video.optional.forEach(function (opt) {
          void 0 === opt.bandwidth && newArray.push(opt)
        }), connection.mediaConstraints.video.optional = newArray
      }
    }
    connection.getExtraData = function (remoteUserId, callback) {
      if (!remoteUserId) throw "remoteUserId is required.";
      if ("function" != typeof callback) return connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : connection.peersBackup[remoteUserId] ? connection.peersBackup[remoteUserId].extra : {};
      connection.socket.emit("get-remote-user-extra-data", remoteUserId, function (extra, remoteUserId, error) {
        callback(extra, remoteUserId, error)
      })
    }, forceOptions.autoOpenOrJoin && connection.openOrJoin(connection.sessionid), connection.onUserIdAlreadyTaken = function (useridAlreadyTaken, yourNewUserId) {
      connection.close(), connection.closeSocket(), connection.isInitiator = !1, connection.userid = connection.token(), connection.join(connection.sessionid), connection.enableLogs && console.warn("Userid already taken.", useridAlreadyTaken, "Your new userid:", connection.userid)
    }, connection.trickleIce = !0, connection.version = "3.6.6", connection.onSettingLocalDescription = function (event) {
      connection.enableLogs && console.info("Set local description for remote user", event.userid)
    }, connection.resetScreen = function () {
      sourceId = null, DetectRTC && DetectRTC.screen && delete DetectRTC.screen.sourceId, currentUserMediaRequest = {
        streams: [],
        mutex: !1,
        queueRequests: []
      }
    }, connection.autoCreateMediaElement = !0, connection.password = null, connection.setPassword = function (password, callback) {
      callback = callback || function () {}, connection.socket ? connection.socket.emit("set-password", password, callback) : (connection.password = password, callback(!0, connection.sessionid, null))
    }, connection.onSocketDisconnect = function (event) {
      connection.enableLogs && console.warn("socket.io connection is closed")
    }, connection.onSocketError = function (event) {
      connection.enableLogs && console.warn("socket.io connection is failed")
    }, connection.errors = {
      ROOM_NOT_AVAILABLE: "Room not available",
      INVALID_PASSWORD: "Invalid password",
      USERID_NOT_AVAILABLE: "User ID does not exist",
      ROOM_PERMISSION_DENIED: "Room permission denied",
      ROOM_FULL: "Room full",
      DID_NOT_JOIN_ANY_ROOM: "Did not join any room yet",
      INVALID_SOCKET: "Invalid socket",
      PUBLIC_IDENTIFIER_MISSING: "publicRoomIdentifier is required",
      INVALID_ADMIN_CREDENTIAL: "Invalid username or password attempted"
    }
  }(this)
};
"undefined" != typeof module && (module.exports = exports = RTCMultiConnection), "function" == typeof define && define.amd && define("RTCMultiConnection", [], function () {
  return RTCMultiConnection
});
// CodecsHandler.js

var CodecsHandler = (function () {
  function preferCodec(sdp, codecName) {
    var info = splitLines(sdp);

    if (!info.videoCodecNumbers) {
      return sdp;
    }

    if (codecName === 'vp8' && info.vp8LineNumber === info.videoCodecNumbers[0]) {
      return sdp;
    }

    if (codecName === 'vp9' && info.vp9LineNumber === info.videoCodecNumbers[0]) {
      return sdp;
    }

    if (codecName === 'h264' && info.h264LineNumber === info.videoCodecNumbers[0]) {
      return sdp;
    }

    sdp = preferCodecHelper(sdp, codecName, info);

    return sdp;
  }

  function preferCodecHelper(sdp, codec, info, ignore) {
    var preferCodecNumber = '';

    if (codec === 'vp8') {
      if (!info.vp8LineNumber) {
        return sdp;
      }
      preferCodecNumber = info.vp8LineNumber;
    }

    if (codec === 'vp9') {
      if (!info.vp9LineNumber) {
        return sdp;
      }
      preferCodecNumber = info.vp9LineNumber;
    }

    if (codec === 'h264') {
      if (!info.h264LineNumber) {
        return sdp;
      }

      preferCodecNumber = info.h264LineNumber;
    }

    var newLine = info.videoCodecNumbersOriginal.split('SAVPF')[0] + 'SAVPF ';

    var newOrder = [preferCodecNumber];

    if (ignore) {
      newOrder = [];
    }

    info.videoCodecNumbers.forEach(function (codecNumber) {
      if (codecNumber === preferCodecNumber) return;
      newOrder.push(codecNumber);
    });

    newLine += newOrder.join(' ');

    sdp = sdp.replace(info.videoCodecNumbersOriginal, newLine);
    return sdp;
  }

  function splitLines(sdp) {
    var info = {};
    sdp.split('\n').forEach(function (line) {
      if (line.indexOf('m=video') === 0) {
        info.videoCodecNumbers = [];
        line.split('SAVPF')[1].split(' ').forEach(function (codecNumber) {
          codecNumber = codecNumber.trim();
          if (!codecNumber || !codecNumber.length) return;
          info.videoCodecNumbers.push(codecNumber);
          info.videoCodecNumbersOriginal = line;
        });
      }

      if (line.indexOf('VP8/90000') !== -1 && !info.vp8LineNumber) {
        info.vp8LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
      }

      if (line.indexOf('VP9/90000') !== -1 && !info.vp9LineNumber) {
        info.vp9LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
      }

      if (line.indexOf('H264/90000') !== -1 && !info.h264LineNumber) {
        info.h264LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
      }
    });

    return info;
  }

  function removeVPX(sdp) {
    var info = splitLines(sdp);

    // last parameter below means: ignore these codecs
    sdp = preferCodecHelper(sdp, 'vp9', info, true);
    sdp = preferCodecHelper(sdp, 'vp8', info, true);

    return sdp;
  }

  function disableNACK(sdp) {
    if (!sdp || typeof sdp !== 'string') {
      throw 'Invalid arguments.';
    }

    sdp = sdp.replace('a=rtcp-fb:126 nack\r\n', '');
    sdp = sdp.replace('a=rtcp-fb:126 nack pli\r\n', 'a=rtcp-fb:126 pli\r\n');
    sdp = sdp.replace('a=rtcp-fb:97 nack\r\n', '');
    sdp = sdp.replace('a=rtcp-fb:97 nack pli\r\n', 'a=rtcp-fb:97 pli\r\n');

    return sdp;
  }

  function prioritize(codecMimeType, peer) {
    if (!peer || !peer.getSenders || !peer.getSenders().length) {
      return;
    }

    if (!codecMimeType || typeof codecMimeType !== 'string') {
      throw 'Invalid arguments.';
    }

    peer.getSenders().forEach(function (sender) {
      var params = sender.getParameters();
      for (var i = 0; i < params.codecs.length; i++) {
        if (params.codecs[i].mimeType == codecMimeType) {
          params.codecs.unshift(params.codecs.splice(i, 1));
          break;
        }
      }
      sender.setParameters(params);
    });
  }

  function removeNonG722(sdp) {
    return sdp.replace(/m=audio ([0-9]+) RTP\/SAVPF ([0-9 ]*)/g, 'm=audio $1 RTP\/SAVPF 9');
  }

  function setBAS(sdp, bandwidth, isScreen) {
    if (!bandwidth) {
      return sdp;
    }

    if (typeof isFirefox !== 'undefined' && isFirefox) {
      return sdp;
    }

    if (isScreen) {
      if (!bandwidth.screen) {
        console.warn('It seems that you are not using bandwidth for screen. Screen sharing is expected to fail.');
      } else if (bandwidth.screen < 300) {
        console.warn('It seems that you are using wrong bandwidth value for screen. Screen sharing is expected to fail.');
      }
    }

    // if screen; must use at least 300kbs
    if (bandwidth.screen && isScreen) {
      sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
      sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.screen + '\r\n');
    }

    // remove existing bandwidth lines
    if (bandwidth.audio || bandwidth.video) {
      sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
    }

    if (bandwidth.audio) {
      sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + bandwidth.audio + '\r\n');
    }

    if (bandwidth.screen) {
      sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.screen + '\r\n');
    } else if (bandwidth.video) {
      sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.video + '\r\n');
    }

    return sdp;
  }

  // Find the line in sdpLines that starts with |prefix|, and, if specified,
  // contains |substr| (case-insensitive search).
  function findLine(sdpLines, prefix, substr) {
    return findLineInRange(sdpLines, 0, -1, prefix, substr);
  }

  // Find the line in sdpLines[startLine...endLine - 1] that starts with |prefix|
  // and, if specified, contains |substr| (case-insensitive search).
  function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
    var realEndLine = endLine !== -1 ? endLine : sdpLines.length;
    for (var i = startLine; i < realEndLine; ++i) {
      if (sdpLines[i].indexOf(prefix) === 0) {
        if (!substr ||
          sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
          return i;
        }
      }
    }
    return null;
  }

  // Gets the codec payload type from an a=rtpmap:X line.
  function getCodecPayloadType(sdpLine) {
    var pattern = new RegExp('a=rtpmap:(\\d+) \\w+\\/\\d+');
    var result = sdpLine.match(pattern);
    return (result && result.length === 2) ? result[1] : null;
  }

  function setVideoBitrates(sdp, params) {
    params = params || {};
    var xgoogle_min_bitrate = params.min;
    var xgoogle_max_bitrate = params.max;

    var sdpLines = sdp.split('\r\n');

    // VP8
    var vp8Index = findLine(sdpLines, 'a=rtpmap', 'VP8/90000');
    var vp8Payload;
    if (vp8Index) {
      vp8Payload = getCodecPayloadType(sdpLines[vp8Index]);
    }

    if (!vp8Payload) {
      return sdp;
    }

    var rtxIndex = findLine(sdpLines, 'a=rtpmap', 'rtx/90000');
    var rtxPayload;
    if (rtxIndex) {
      rtxPayload = getCodecPayloadType(sdpLines[rtxIndex]);
    }

    if (!rtxIndex) {
      return sdp;
    }

    var rtxFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + rtxPayload.toString());
    if (rtxFmtpLineIndex !== null) {
      var appendrtxNext = '\r\n';
      appendrtxNext += 'a=fmtp:' + vp8Payload + ' x-google-min-bitrate=' + (xgoogle_min_bitrate || '228') + '; x-google-max-bitrate=' + (xgoogle_max_bitrate || '228');
      sdpLines[rtxFmtpLineIndex] = sdpLines[rtxFmtpLineIndex].concat(appendrtxNext);
      sdp = sdpLines.join('\r\n');
    }

    return sdp;
  }

  function setOpusAttributes(sdp, params) {
    params = params || {};

    var sdpLines = sdp.split('\r\n');

    // Opus
    var opusIndex = findLine(sdpLines, 'a=rtpmap', 'opus/48000');
    var opusPayload;
    if (opusIndex) {
      opusPayload = getCodecPayloadType(sdpLines[opusIndex]);
    }

    if (!opusPayload) {
      return sdp;
    }

    var opusFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + opusPayload.toString());
    if (opusFmtpLineIndex === null) {
      return sdp;
    }

    var appendOpusNext = '';
    appendOpusNext += '; stereo=' + (typeof params.stereo != 'undefined' ? params.stereo : '1');
    appendOpusNext += '; sprop-stereo=' + (typeof params['sprop-stereo'] != 'undefined' ? params['sprop-stereo'] : '1');

    if (typeof params.maxaveragebitrate != 'undefined') {
      appendOpusNext += '; maxaveragebitrate=' + (params.maxaveragebitrate || 128 * 1024 * 8);
    }

    if (typeof params.maxplaybackrate != 'undefined') {
      appendOpusNext += '; maxplaybackrate=' + (params.maxplaybackrate || 128 * 1024 * 8);
    }

    if (typeof params.cbr != 'undefined') {
      appendOpusNext += '; cbr=' + (typeof params.cbr != 'undefined' ? params.cbr : '1');
    }

    if (typeof params.useinbandfec != 'undefined') {
      appendOpusNext += '; useinbandfec=' + params.useinbandfec;
    }

    if (typeof params.usedtx != 'undefined') {
      appendOpusNext += '; usedtx=' + params.usedtx;
    }

    if (typeof params.maxptime != 'undefined') {
      appendOpusNext += '\r\na=maxptime:' + params.maxptime;
    }

    sdpLines[opusFmtpLineIndex] = sdpLines[opusFmtpLineIndex].concat(appendOpusNext);

    sdp = sdpLines.join('\r\n');
    return sdp;
  }

  // forceStereoAudio => via webrtcexample.com
  // requires getUserMedia => echoCancellation:false
  function forceStereoAudio(sdp) {
    var sdpLines = sdp.split('\r\n');
    var fmtpLineIndex = null;
    for (var i = 0; i < sdpLines.length; i++) {
      if (sdpLines[i].search('opus/48000') !== -1) {
        var opusPayload = extractSdp(sdpLines[i], /:(\d+) opus\/48000/i);
        break;
      }
    }
    for (var i = 0; i < sdpLines.length; i++) {
      if (sdpLines[i].search('a=fmtp') !== -1) {
        var payload = extractSdp(sdpLines[i], /a=fmtp:(\d+)/);
        if (payload === opusPayload) {
          fmtpLineIndex = i;
          break;
        }
      }
    }
    if (fmtpLineIndex === null) return sdp;
    sdpLines[fmtpLineIndex] = sdpLines[fmtpLineIndex].concat('; stereo=1; sprop-stereo=1');
    sdp = sdpLines.join('\r\n');
    return sdp;
  }

  return {
    removeVPX: removeVPX,
    disableNACK: disableNACK,
    prioritize: prioritize,
    removeNonG722: removeNonG722,
    setApplicationSpecificBandwidth: function (sdp, bandwidth, isScreen) {
      return setBAS(sdp, bandwidth, isScreen);
    },
    setVideoBitrates: function (sdp, params) {
      return setVideoBitrates(sdp, params);
    },
    setOpusAttributes: function (sdp, params) {
      return setOpusAttributes(sdp, params);
    },
    preferVP9: function (sdp) {
      return preferCodec(sdp, 'vp9');
    },
    preferCodec: preferCodec,
    forceStereoAudio: forceStereoAudio
  };
})();

// backward compatibility
window.BandwidthHandler = CodecsHandler;

// IceServersHandler.js

var IceServersHandler = (function () {
  function getIceServers(connection) {
    // resiprocate: 3344+4433
    // pions: 7575
    var iceServers = [
      {
        'urls': [
          '112.49.23.113:3478'
        ],
        // 'username': 'valley',
        // 'credential': '1234567890'
      },
      // {
      //     'urls': [
      //         'stun:webrtcweb.com:7788'
      //     ],
      //     'username': 'muazkh',
      //     'credential': 'muazkh'
      // },
      // {
      //     'urls': [
      //         'turn:webrtcweb.com:7788', // coTURN 7788+8877
      //         'turn:webrtcweb.com:8877',
      //         'turn:webrtcweb.com:4455', // restund udp
      //     ],
      //     'username': 'muazkh',
      //     'credential': 'muazkh'
      // },
      // {
      //     'urls': [
      //         'stun:stun.l.google.com:19302',
      //         'stun:stun1.l.google.com:19302',
      //         'stun:stun2.l.google.com:19302',
      //         'stun:stun.l.google.com:19302?transport=udp',
      //     ]
      // }
    ];

    return iceServers;
  }

  return {
    getIceServers: getIceServers
  };
})();


'use strict';

// Last time updated: 2017-11-19 4:49:44 AM UTC

// _______________
// getStats v1.0.6

// Open-Sourced: https://github.com/muaz-khan/getStats

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

window.getStats = function (mediaStreamTrack, callback, interval) {

  var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

  if (typeof MediaStreamTrack === 'undefined') {
    MediaStreamTrack = {}; // todo?
  }

  var systemNetworkType = ((navigator.connection || {}).type || 'unknown').toString().toLowerCase();

  var getStatsResult = {
    encryption: 'sha-256',
    audio: {
      send: {
        tracks: [],
        codecs: [],
        availableBandwidth: 0,
        streams: 0
      },
      recv: {
        tracks: [],
        codecs: [],
        availableBandwidth: 0,
        streams: 0
      },
      bytesSent: 0,
      bytesReceived: 0
    },
    video: {
      send: {
        tracks: [],
        codecs: [],
        availableBandwidth: 0,
        streams: 0
      },
      recv: {
        tracks: [],
        codecs: [],
        availableBandwidth: 0,
        streams: 0
      },
      bytesSent: 0,
      bytesReceived: 0
    },
    bandwidth: {
      systemBandwidth: 0,
      sentPerSecond: 0,
      encodedPerSecond: 0,
      helper: {
        audioBytesSent: 0,
        videoBytestSent: 0
      },
      speed: 0
    },
    results: {},
    connectionType: {
      systemNetworkType: systemNetworkType,
      systemIpAddress: '192.168.1.2',
      local: {
        candidateType: [],
        transport: [],
        ipAddress: [],
        networkType: []
      },
      remote: {
        candidateType: [],
        transport: [],
        ipAddress: [],
        networkType: []
      }
    },
    resolutions: {
      send: {
        width: 0,
        height: 0
      },
      recv: {
        width: 0,
        height: 0
      }
    },
    internal: {
      audio: {
        send: {},
        recv: {}
      },
      video: {
        send: {},
        recv: {}
      },
      candidates: {}
    },
    nomore: function () {
      nomore = true;
    }
  };

  var getStatsParser = {
    checkIfOfferer: function (result) {
      if (result.type === 'googLibjingleSession') {
        getStatsResult.isOfferer = result.googInitiator;
      }
    }
  };

  var peer = this;

  if (arguments[0] instanceof RTCPeerConnection) {
    peer = arguments[0];

    if (!!navigator.mozGetUserMedia) {
      mediaStreamTrack = arguments[1];
      callback = arguments[2];
      interval = arguments[3];
    }

    if (!(mediaStreamTrack instanceof MediaStreamTrack) && !!navigator.mozGetUserMedia) {
      throw '2nd argument is not instance of MediaStreamTrack.';
    }
  } else if (!(mediaStreamTrack instanceof MediaStreamTrack) && !!navigator.mozGetUserMedia) {
    throw '1st argument is not instance of MediaStreamTrack.';
  }

  var nomore = false;

  function getStatsLooper() {
    getStatsWrapper(function (results) {
      results.forEach(function (result) {
        Object.keys(getStatsParser).forEach(function (key) {
          if (typeof getStatsParser[key] === 'function') {
            getStatsParser[key](result);
          }
        });

        if (result.type !== 'local-candidate' && result.type !== 'remote-candidate' && result.type !== 'candidate-pair') {
          // console.error('result', result);
        }
      });

      try {
        // failed|closed
        if (peer.iceConnectionState.search(/failed/gi) !== -1) {
          nomore = true;
        }
      } catch (e) {
        nomore = true;
      }

      if (nomore === true) {
        if (getStatsResult.datachannel) {
          getStatsResult.datachannel.state = 'close';
        }
        getStatsResult.ended = true;
      }

      // allow users to access native results
      getStatsResult.results = results;

      if (getStatsResult.audio && getStatsResult.video) {
        getStatsResult.bandwidth.speed = (getStatsResult.audio.bytesSent - getStatsResult.bandwidth.helper.audioBytesSent) + (getStatsResult.video.bytesSent - getStatsResult.bandwidth.helper.videoBytesSent);
        getStatsResult.bandwidth.helper.audioBytesSent = getStatsResult.audio.bytesSent;
        getStatsResult.bandwidth.helper.videoBytesSent = getStatsResult.video.bytesSent;
      }

      callback(getStatsResult);

      // second argument checks to see, if target-user is still connected.
      if (!nomore) {
        typeof interval != undefined && interval && setTimeout(getStatsLooper, interval || 1000);
      }
    });
  }

  // a wrapper around getStats which hides the differences (where possible)
  // following code-snippet is taken from somewhere on the github
  function getStatsWrapper(cb) {
    // if !peer or peer.signalingState == 'closed' then return;

    if (typeof window.InstallTrigger !== 'undefined') {
      peer.getStats(
        mediaStreamTrack,
        function (res) {
          var items = [];
          res.forEach(function (r) {
            items.push(r);
          });
          cb(items);
        },
        cb
      );
    } else {
      peer.getStats(function (res) {
        var items = [];
        res.result().forEach(function (res) {
          var item = {};
          res.names().forEach(function (name) {
            item[name] = res.stat(name);
          });
          item.id = res.id;
          item.type = res.type;
          item.timestamp = res.timestamp;
          items.push(item);
        });
        cb(items);
      });
    }
  };

  getStatsParser.datachannel = function (result) {
    if (result.type !== 'datachannel') return;

    getStatsResult.datachannel = {
      state: result.state // open or connecting
    }
  };

  getStatsParser.googCertificate = function (result) {
    if (result.type == 'googCertificate') {
      getStatsResult.encryption = result.googFingerprintAlgorithm;
    }
  };

  var AUDIO_codecs = ['opus', 'isac', 'ilbc'];

  getStatsParser.checkAudioTracks = function (result) {
    if (!result.googCodecName || result.mediaType !== 'audio') return;

    if (AUDIO_codecs.indexOf(result.googCodecName.toLowerCase()) === -1) return;

    var sendrecvType = result.id.split('_').pop();

    if (getStatsResult.audio[sendrecvType].codecs.indexOf(result.googCodecName) === -1) {
      getStatsResult.audio[sendrecvType].codecs.push(result.googCodecName);
    }

    if (result.bytesSent) {
      var kilobytes = 0;
      if (!!result.bytesSent) {
        if (!getStatsResult.internal.audio[sendrecvType].prevBytesSent) {
          getStatsResult.internal.audio[sendrecvType].prevBytesSent = result.bytesSent;
        }

        var bytes = result.bytesSent - getStatsResult.internal.audio[sendrecvType].prevBytesSent;
        getStatsResult.internal.audio[sendrecvType].prevBytesSent = result.bytesSent;

        kilobytes = bytes / 1024;
      }

      getStatsResult.audio[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
    }

    if (result.bytesReceived) {
      var kilobytes = 0;
      if (!!result.bytesReceived) {
        if (!getStatsResult.internal.audio[sendrecvType].prevBytesReceived) {
          getStatsResult.internal.audio[sendrecvType].prevBytesReceived = result.bytesReceived;
        }

        var bytes = result.bytesReceived - getStatsResult.internal.audio[sendrecvType].prevBytesReceived;
        getStatsResult.internal.audio[sendrecvType].prevBytesReceived = result.bytesReceived;

        kilobytes = bytes / 1024;
      }

      getStatsResult.audio[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
    }

    if (getStatsResult.audio[sendrecvType].tracks.indexOf(result.googTrackId) === -1) {
      getStatsResult.audio[sendrecvType].tracks.push(result.googTrackId);
    }
  };

  var VIDEO_codecs = ['vp9', 'vp8', 'h264'];

  getStatsParser.checkVideoTracks = function (result) {
    if (!result.googCodecName || result.mediaType !== 'video') return;

    if (VIDEO_codecs.indexOf(result.googCodecName.toLowerCase()) === -1) return;

    // googCurrentDelayMs, googRenderDelayMs, googTargetDelayMs
    // transportId === 'Channel-audio-1'
    var sendrecvType = result.id.split('_').pop();

    if (getStatsResult.video[sendrecvType].codecs.indexOf(result.googCodecName) === -1) {
      getStatsResult.video[sendrecvType].codecs.push(result.googCodecName);
    }

    if (!!result.bytesSent) {
      var kilobytes = 0;
      if (!getStatsResult.internal.video[sendrecvType].prevBytesSent) {
        getStatsResult.internal.video[sendrecvType].prevBytesSent = result.bytesSent;
      }

      var bytes = result.bytesSent - getStatsResult.internal.video[sendrecvType].prevBytesSent;
      getStatsResult.internal.video[sendrecvType].prevBytesSent = result.bytesSent;

      kilobytes = bytes / 1024;
    }

    if (!!result.bytesReceived) {
      var kilobytes = 0;
      if (!getStatsResult.internal.video[sendrecvType].prevBytesReceived) {
        getStatsResult.internal.video[sendrecvType].prevBytesReceived = result.bytesReceived;
      }

      var bytes = result.bytesReceived - getStatsResult.internal.video[sendrecvType].prevBytesReceived;
      getStatsResult.internal.video[sendrecvType].prevBytesReceived = result.bytesReceived;

      kilobytes = bytes / 1024;
    }

    getStatsResult.video[sendrecvType].availableBandwidth = kilobytes.toFixed(1);

    if (result.googFrameHeightReceived && result.googFrameWidthReceived) {
      getStatsResult.resolutions[sendrecvType].width = result.googFrameWidthReceived;
      getStatsResult.resolutions[sendrecvType].height = result.googFrameHeightReceived;
    }

    if (result.googFrameHeightSent && result.googFrameWidthSent) {
      getStatsResult.resolutions[sendrecvType].width = result.googFrameWidthSent;
      getStatsResult.resolutions[sendrecvType].height = result.googFrameHeightSent;
    }

    if (getStatsResult.video[sendrecvType].tracks.indexOf(result.googTrackId) === -1) {
      getStatsResult.video[sendrecvType].tracks.push(result.googTrackId);
    }
  };

  getStatsParser.bweforvideo = function (result) {
    if (result.type !== 'VideoBwe') return;

    getStatsResult.bandwidth.availableSendBandwidth = result.googAvailableSendBandwidth;

    getStatsResult.bandwidth.googActualEncBitrate = result.googActualEncBitrate;
    getStatsResult.bandwidth.googAvailableSendBandwidth = result.googAvailableSendBandwidth;
    getStatsResult.bandwidth.googAvailableReceiveBandwidth = result.googAvailableReceiveBandwidth;
    getStatsResult.bandwidth.googRetransmitBitrate = result.googRetransmitBitrate;
    getStatsResult.bandwidth.googTargetEncBitrate = result.googTargetEncBitrate;
    getStatsResult.bandwidth.googBucketDelay = result.googBucketDelay;
    getStatsResult.bandwidth.googTransmitBitrate = result.googTransmitBitrate;
  };

  getStatsParser.candidatePair = function (result) {
    if (result.type !== 'googCandidatePair' && result.type !== 'candidate-pair') return;

    // result.googActiveConnection means either STUN or TURN is used.

    if (result.googActiveConnection == 'true') {
      // id === 'Conn-audio-1-0'
      // localCandidateId, remoteCandidateId

      // bytesSent, bytesReceived

      Object.keys(getStatsResult.internal.candidates).forEach(function (cid) {
        var candidate = getStatsResult.internal.candidates[cid];
        if (candidate.ipAddress.indexOf(result.googLocalAddress) !== -1) {
          getStatsResult.connectionType.local.candidateType = candidate.candidateType;
          getStatsResult.connectionType.local.ipAddress = candidate.ipAddress;
          getStatsResult.connectionType.local.networkType = candidate.networkType;
          getStatsResult.connectionType.local.transport = candidate.transport;
        }
        if (candidate.ipAddress.indexOf(result.googRemoteAddress) !== -1) {
          getStatsResult.connectionType.remote.candidateType = candidate.candidateType;
          getStatsResult.connectionType.remote.ipAddress = candidate.ipAddress;
          getStatsResult.connectionType.remote.networkType = candidate.networkType;
          getStatsResult.connectionType.remote.transport = candidate.transport;
        }
      });

      getStatsResult.connectionType.transport = result.googTransportType;

      var localCandidate = getStatsResult.internal.candidates[result.localCandidateId];
      if (localCandidate) {
        if (localCandidate.ipAddress) {
          getStatsResult.connectionType.systemIpAddress = localCandidate.ipAddress;
        }
      }

      var remoteCandidate = getStatsResult.internal.candidates[result.remoteCandidateId];
      if (remoteCandidate) {
        if (remoteCandidate.ipAddress) {
          getStatsResult.connectionType.systemIpAddress = remoteCandidate.ipAddress;
        }
      }
    }

    if (result.type === 'candidate-pair') {
      if (result.selected === true && result.nominated === true && result.state === 'succeeded') {
        // remoteCandidateId, localCandidateId, componentId
        var localCandidate = getStatsResult.internal.candidates[result.remoteCandidateId];
        var remoteCandidate = getStatsResult.internal.candidates[result.remoteCandidateId];

        // Firefox used above two pairs for connection
      }
    }
  };

  var LOCAL_candidateType = {};
  var LOCAL_transport = {};
  var LOCAL_ipAddress = {};
  var LOCAL_networkType = {};

  getStatsParser.localcandidate = function (result) {
    if (result.type !== 'localcandidate' && result.type !== 'local-candidate') return;
    if (!result.id) return;

    if (!LOCAL_candidateType[result.id]) {
      LOCAL_candidateType[result.id] = [];
    }

    if (!LOCAL_transport[result.id]) {
      LOCAL_transport[result.id] = [];
    }

    if (!LOCAL_ipAddress[result.id]) {
      LOCAL_ipAddress[result.id] = [];
    }

    if (!LOCAL_networkType[result.id]) {
      LOCAL_networkType[result.id] = [];
    }

    if (result.candidateType && LOCAL_candidateType[result.id].indexOf(result.candidateType) === -1) {
      LOCAL_candidateType[result.id].push(result.candidateType);
    }

    if (result.transport && LOCAL_transport[result.id].indexOf(result.transport) === -1) {
      LOCAL_transport[result.id].push(result.transport);
    }

    if (result.ipAddress && LOCAL_ipAddress[result.id].indexOf(result.ipAddress + ':' + result.portNumber) === -1) {
      LOCAL_ipAddress[result.id].push(result.ipAddress + ':' + result.portNumber);
    }

    if (result.networkType && LOCAL_networkType[result.id].indexOf(result.networkType) === -1) {
      LOCAL_networkType[result.id].push(result.networkType);
    }

    getStatsResult.internal.candidates[result.id] = {
      candidateType: LOCAL_candidateType[result.id],
      ipAddress: LOCAL_ipAddress[result.id],
      portNumber: result.portNumber,
      networkType: LOCAL_networkType[result.id],
      priority: result.priority,
      transport: LOCAL_transport[result.id],
      timestamp: result.timestamp,
      id: result.id,
      type: result.type
    };

    getStatsResult.connectionType.local.candidateType = LOCAL_candidateType[result.id];
    getStatsResult.connectionType.local.ipAddress = LOCAL_ipAddress[result.id];
    getStatsResult.connectionType.local.networkType = LOCAL_networkType[result.id];
    getStatsResult.connectionType.local.transport = LOCAL_transport[result.id];
  };

  var REMOTE_candidateType = {};
  var REMOTE_transport = {};
  var REMOTE_ipAddress = {};
  var REMOTE_networkType = {};

  getStatsParser.remotecandidate = function (result) {
    if (result.type !== 'remotecandidate' && result.type !== 'remote-candidate') return;
    if (!result.id) return;

    if (!REMOTE_candidateType[result.id]) {
      REMOTE_candidateType[result.id] = [];
    }

    if (!REMOTE_transport[result.id]) {
      REMOTE_transport[result.id] = [];
    }

    if (!REMOTE_ipAddress[result.id]) {
      REMOTE_ipAddress[result.id] = [];
    }

    if (!REMOTE_networkType[result.id]) {
      REMOTE_networkType[result.id] = [];
    }

    if (result.candidateType && REMOTE_candidateType[result.id].indexOf(result.candidateType) === -1) {
      REMOTE_candidateType[result.id].push(result.candidateType);
    }

    if (result.transport && REMOTE_transport[result.id].indexOf(result.transport) === -1) {
      REMOTE_transport[result.id].push(result.transport);
    }

    if (result.ipAddress && REMOTE_ipAddress[result.id].indexOf(result.ipAddress + ':' + result.portNumber) === -1) {
      REMOTE_ipAddress[result.id].push(result.ipAddress + ':' + result.portNumber);
    }

    if (result.networkType && REMOTE_networkType[result.id].indexOf(result.networkType) === -1) {
      REMOTE_networkType[result.id].push(result.networkType);
    }

    getStatsResult.internal.candidates[result.id] = {
      candidateType: REMOTE_candidateType[result.id],
      ipAddress: REMOTE_ipAddress[result.id],
      portNumber: result.portNumber,
      networkType: REMOTE_networkType[result.id],
      priority: result.priority,
      transport: REMOTE_transport[result.id],
      timestamp: result.timestamp,
      id: result.id,
      type: result.type
    };

    getStatsResult.connectionType.remote.candidateType = REMOTE_candidateType[result.id];
    getStatsResult.connectionType.remote.ipAddress = REMOTE_ipAddress[result.id];
    getStatsResult.connectionType.remote.networkType = REMOTE_networkType[result.id];
    getStatsResult.connectionType.remote.transport = REMOTE_transport[result.id];
  };

  getStatsParser.dataSentReceived = function (result) {
    if (!result.googCodecName || (result.mediaType !== 'video' && result.mediaType !== 'audio')) return;

    if (!!result.bytesSent) {
      getStatsResult[result.mediaType].bytesSent = parseInt(result.bytesSent);
    }

    if (!!result.bytesReceived) {
      getStatsResult[result.mediaType].bytesReceived = parseInt(result.bytesReceived);
    }
  };

  var SSRC = {
    audio: {
      send: [],
      recv: []
    },
    video: {
      send: [],
      recv: []
    }
  };

  getStatsParser.ssrc = function (result) {
    if (!result.googCodecName || (result.mediaType !== 'video' && result.mediaType !== 'audio')) return;
    if (result.type !== 'ssrc') return;
    var sendrecvType = result.id.split('_').pop();

    if (SSRC[result.mediaType][sendrecvType].indexOf(result.ssrc) === -1) {
      SSRC[result.mediaType][sendrecvType].push(result.ssrc)
    }

    getStatsResult[result.mediaType][sendrecvType].streams = SSRC[result.mediaType][sendrecvType].length;
  };

  getStatsLooper();

};


