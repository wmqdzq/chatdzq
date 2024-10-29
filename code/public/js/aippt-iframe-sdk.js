(function(ne, Y) {
	typeof exports == "object" && typeof module < "u" ? module.exports = Y() : typeof define == "function" && define
		.amd ? define(Y) : (ne = typeof globalThis < "u" ? globalThis : ne || self, ne.AipptIframe = Y())
})(this, function() {
	"use strict";
	var fu = Object.defineProperty;
	var hu = (ne, Y, Se) => Y in ne ? fu(ne, Y, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: Se
	}) : ne[Y] = Se;
	var Re = (ne, Y, Se) => (hu(ne, typeof Y != "symbol" ? Y + "" : Y, Se), Se);

	function ne(e) {
		if (e && e instanceof HTMLElement)
			for (; e.firstChild;) e.removeChild(e.firstChild)
	}

	function Y(e) {
		let t = e.url;
		if (e.query) {
			const r = new URLSearchParams(e.query).toString();
			t = `${t}?${r}`
		}
		const n = document.createElement("iframe");
		return n.src = t, n.style.width = e.width ? e.width + "px" : "100%", n.style.height = "100%", n.style
			.border = "none", n.allowFullscreen = !0, n.allow = "fullscreen", e.id && (n.id = e.id), n
	}

	function Se(e, t) {
		const n = document.createElement("style");
		n.innerHTML = `
#${e}-modal {position: fixed;width:100vw;height:100vh;top:0;left:0;background:rgba(0,0,0,.3);overflow:hidden;display:flex;flex-direction:column;}
#${e}-top {height:36px;display: flex;justify-content: space-between;align-items: center;padding: 0 20px;color: #eee;font-size: 16px;}
#${e}-top p {background:rgba(0,0,0,.8);padding:0 4px;}
#${e}-wrap {flex:1;background:#fff;}
#${e}-btn {cursor:pointer;color:#fff;}
#${e}-btn:hover {color:blue;}
`;
		const r = document.createElement("div");
		r.id = `${e}-modal`;
		const i = document.createElement("div");
		i.id = `${e}-top`;
		const s = document.createElement("div");
		s.id = `${e}-btn`, s.innerHTML = "关闭";
		const o = document.createElement("p");
		o.innerText = "", i.appendChild(o), i.appendChild(s);
		const u = document.createElement("div");
		return u.id = `${e}-wrap`, r.appendChild(i), r.appendChild(u), r.appendChild(n), s.addEventListener("click",
			t), {
			modal: r,
			container: u,
			style: n
		}
	}
	var Nt = (e => (e[e.INPUT_GENERATION = 1001] = "INPUT_GENERATION", e[e.PRE_SET_GENERATION = 1002] =
		"PRE_SET_GENERATION", e[e.UPLOAD_WORD = 1003] = "UPLOAD_WORD", e[e.UPLOAD_MIND = 1004] =
		"UPLOAD_MIND", e[e.UPLOAD_FREEMIND = 1005] = "UPLOAD_FREEMIND", e[e.UPLOAD_MARKDOWN = 1006] =
		"UPLOAD_MARKDOWN", e[e.CREATE_OUTLINE = 1007] = "CREATE_OUTLINE", e[e.TOGGLE_OUTLINE = 1021] =
		"TOGGLE_OUTLINE", e[e.DOWNLOAD_OUTLINE = 1022] = "DOWNLOAD_OUTLINE", e[e.DOWNLOAD_PNG = 1023] =
		"DOWNLOAD_PNG", e[e.SELECT_TEMPLATE = 1024] = "SELECT_TEMPLATE", e[e.GENERATE_PPT = 1025] =
		"GENERATE_PPT", e[e.GO_EDITOR = 1026] = "GO_EDITOR", e[e.DOWNLOAD = 1027] = "DOWNLOAD", e[e
			.DOWNLOAD_PPT = 1028] = "DOWNLOAD_PPT", e[e.DOWNLOAD_PUZZLE = 1029] = "DOWNLOAD_PUZZLE", e))(Nt ||
		{});

	function jt(e) {
		if (e) throw e
	}

	function Mt(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
	}
	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	var gr = function(t) {
		return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t
			.constructor.isBuffer(t)
	};
	const Ut = Mt(gr);
	var Ve = Object.prototype.hasOwnProperty,
		Ht = Object.prototype.toString,
		qt = Object.defineProperty,
		Vt = Object.getOwnPropertyDescriptor,
		$t = function(t) {
			return typeof Array.isArray == "function" ? Array.isArray(t) : Ht.call(t) === "[object Array]"
		},
		Wt = function(t) {
			if (!t || Ht.call(t) !== "[object Object]") return !1;
			var n = Ve.call(t, "constructor"),
				r = t.constructor && t.constructor.prototype && Ve.call(t.constructor.prototype, "isPrototypeOf");
			if (t.constructor && !n && !r) return !1;
			var i;
			for (i in t);
			return typeof i > "u" || Ve.call(t, i)
		},
		Jt = function(t, n) {
			qt && n.name === "__proto__" ? qt(t, n.name, {
				enumerable: !0,
				configurable: !0,
				value: n.newValue,
				writable: !0
			}) : t[n.name] = n.newValue
		},
		Qt = function(t, n) {
			if (n === "__proto__")
				if (Ve.call(t, n)) {
					if (Vt) return Vt(t, n).value
				} else return;
			return t[n]
		},
		yr = function e() {
			var t, n, r, i, s, o, u = arguments[0],
				c = 1,
				a = arguments.length,
				f = !1;
			for (typeof u == "boolean" && (f = u, u = arguments[1] || {}, c = 2), (u == null || typeof u !=
					"object" && typeof u != "function") && (u = {}); c < a; ++c)
				if (t = arguments[c], t != null)
					for (n in t) r = Qt(u, n), i = Qt(t, n), u !== i && (f && i && (Wt(i) || (s = $t(i))) ? (s ? (
						s = !1, o = r && $t(r) ? r : []) : o = r && Wt(r) ? r : {}, Jt(u, {
						name: n,
						newValue: e(f, o, i)
					})) : typeof i < "u" && Jt(u, {
						name: n,
						newValue: i
					}));
			return u
		};
	const Gt = Mt(yr);

	function tt(e) {
		if (typeof e != "object" || e === null) return !1;
		const t = Object.getPrototypeOf(e);
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol
			.toStringTag in e) && !(Symbol.iterator in e)
	}

	function xr() {
		const e = [],
			t = {
				run: n,
				use: r
			};
		return t;

		function n(...i) {
			let s = -1;
			const o = i.pop();
			if (typeof o != "function") throw new TypeError("Expected function as last argument, not " + o);
			u(null, ...i);

			function u(c, ...a) {
				const f = e[++s];
				let l = -1;
				if (c) {
					o(c);
					return
				}
				for (; ++l < i.length;)(a[l] === null || a[l] === void 0) && (a[l] = i[l]);
				i = a, f ? br(f, u)(...a) : o(null, ...a)
			}
		}

		function r(i) {
			if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
			return e.push(i), t
		}
	}

	function br(e, t) {
		let n;
		return r;

		function r(...o) {
			const u = e.length > o.length;
			let c;
			u && o.push(i);
			try {
				c = e.apply(this, o)
			} catch (a) {
				const f = a;
				if (u && n) throw f;
				return i(f)
			}
			u || (c && c.then && typeof c.then == "function" ? c.then(s, i) : c instanceof Error ? i(c) : s(c))
		}

		function i(o, ...u) {
			n || (n = !0, t(o, ...u))
		}

		function s(o) {
			i(null, o)
		}
	}

	function Le(e) {
		return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Kt(e.position) : "start" in e ||
			"end" in e ? Kt(e) : "line" in e || "column" in e ? nt(e) : ""
	}

	function nt(e) {
		return Xt(e && e.line) + ":" + Xt(e && e.column)
	}

	function Kt(e) {
		return nt(e && e.start) + "-" + nt(e && e.end)
	}

	function Xt(e) {
		return e && typeof e == "number" ? e : 1
	}
	class v extends Error {
		constructor(t, n, r) {
			const i = [null, null];
			let s = {
				start: {
					line: null,
					column: null
				},
				end: {
					line: null,
					column: null
				}
			};
			if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
				const o = r.indexOf(":");
				o === -1 ? i[1] = r : (i[0] = r.slice(0, o), i[1] = r.slice(o + 1))
			}
			n && ("type" in n || "position" in n ? n.position && (s = n.position) : "start" in n || "end" in n ?
					s = n : ("line" in n || "column" in n) && (s.start = n)), this.name = Le(n) || "1:1", this
				.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t
				.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = s.start
				.line, this.column = s.start.column, this.position = s, this.source = i[0], this.ruleId = i[1],
				this.file, this.actual, this.expected, this.url, this.note
		}
	}
	v.prototype.file = "", v.prototype.name = "", v.prototype.reason = "", v.prototype.message = "", v.prototype
		.stack = "", v.prototype.fatal = null, v.prototype.column = null, v.prototype.line = null, v.prototype
		.source = null, v.prototype.ruleId = null, v.prototype.position = null;
	const ae = {
		basename: wr,
		dirname: kr,
		extname: Er,
		join: Sr,
		sep: "/"
	};

	function wr(e, t) {
		if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
		De(e);
		let n = 0,
			r = -1,
			i = e.length,
			s;
		if (t === void 0 || t.length === 0 || t.length > e.length) {
			for (; i--;)
				if (e.charCodeAt(i) === 47) {
					if (s) {
						n = i + 1;
						break
					}
				} else r < 0 && (s = !0, r = i + 1);
			return r < 0 ? "" : e.slice(n, r)
		}
		if (t === e) return "";
		let o = -1,
			u = t.length - 1;
		for (; i--;)
			if (e.charCodeAt(i) === 47) {
				if (s) {
					n = i + 1;
					break
				}
			} else o < 0 && (s = !0, o = i + 1), u > -1 && (e.charCodeAt(i) === t.charCodeAt(u--) ? u < 0 && (r =
				i) : (u = -1, r = o));
		return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r)
	}

	function kr(e) {
		if (De(e), e.length === 0) return ".";
		let t = -1,
			n = e.length,
			r;
		for (; --n;)
			if (e.charCodeAt(n) === 47) {
				if (r) {
					t = n;
					break
				}
			} else r || (r = !0);
		return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t)
	}

	function Er(e) {
		De(e);
		let t = e.length,
			n = -1,
			r = 0,
			i = -1,
			s = 0,
			o;
		for (; t--;) {
			const u = e.charCodeAt(t);
			if (u === 47) {
				if (o) {
					r = t + 1;
					break
				}
				continue
			}
			n < 0 && (o = !0, n = t + 1), u === 46 ? i < 0 ? i = t : s !== 1 && (s = 1) : i > -1 && (s = -1)
		}
		return i < 0 || n < 0 || s === 0 || s === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
	}

	function Sr(...e) {
		let t = -1,
			n;
		for (; ++t < e.length;) De(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
		return n === void 0 ? "." : Ar(n)
	}

	function Ar(e) {
		De(e);
		const t = e.charCodeAt(0) === 47;
		let n = Or(e, !t);
		return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"),
			t ? "/" + n : n
	}

	function Or(e, t) {
		let n = "",
			r = 0,
			i = -1,
			s = 0,
			o = -1,
			u, c;
		for (; ++o <= e.length;) {
			if (o < e.length) u = e.charCodeAt(o);
			else {
				if (u === 47) break;
				u = 47
			}
			if (u === 47) {
				if (!(i === o - 1 || s === 1))
					if (i !== o - 1 && s === 2) {
						if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length -
								2) !== 46) {
							if (n.length > 2) {
								if (c = n.lastIndexOf("/"), c !== n.length - 1) {
									c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf(
										"/")), i = o, s = 0;
									continue
								}
							} else if (n.length > 0) {
								n = "", r = 0, i = o, s = 0;
								continue
							}
						}
						t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
					} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
				i = o, s = 0
			} else u === 46 && s > -1 ? s++ : s = -1
		}
		return n
	}

	function De(e) {
		if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
	}
	const Cr = {
		cwd: Fr
	};

	function Fr() {
		return "/"
	}

	function rt(e) {
		return e !== null && typeof e == "object" && e.href && e.origin
	}

	function Tr(e) {
		if (typeof e == "string") e = new URL(e);
		else if (!rt(e)) {
			const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' +
				e + "`");
			throw t.code = "ERR_INVALID_ARG_TYPE", t
		}
		if (e.protocol !== "file:") {
			const t = new TypeError("The URL must be of scheme file");
			throw t.code = "ERR_INVALID_URL_SCHEME", t
		}
		return Ir(e)
	}

	function Ir(e) {
		if (e.hostname !== "") {
			const r = new TypeError('File URL host must be "localhost" or empty on darwin');
			throw r.code = "ERR_INVALID_FILE_URL_HOST", r
		}
		const t = e.pathname;
		let n = -1;
		for (; ++n < t.length;)
			if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
				const r = t.charCodeAt(n + 2);
				if (r === 70 || r === 102) {
					const i = new TypeError("File URL path must not include encoded / characters");
					throw i.code = "ERR_INVALID_FILE_URL_PATH", i
				}
			} return decodeURIComponent(t)
	}
	const it = ["history", "path", "basename", "stem", "extname", "dirname"];
	class Pr {
		constructor(t) {
			let n;
			t ? typeof t == "string" || Rr(t) ? n = {
					value: t
				} : rt(t) ? n = {
					path: t
				} : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = Cr.cwd(),
				this.value, this.stored, this.result, this.map;
			let r = -1;
			for (; ++r < it.length;) {
				const s = it[r];
				s in n && n[s] !== void 0 && n[s] !== null && (this[s] = s === "history" ? [...n[s]] : n[s])
			}
			let i;
			for (i in n) it.includes(i) || (this[i] = n[i])
		}
		get path() {
			return this.history[this.history.length - 1]
		}
		set path(t) {
			rt(t) && (t = Tr(t)), ot(t, "path"), this.path !== t && this.history.push(t)
		}
		get dirname() {
			return typeof this.path == "string" ? ae.dirname(this.path) : void 0
		}
		set dirname(t) {
			Zt(this.basename, "dirname"), this.path = ae.join(t || "", this.basename)
		}
		get basename() {
			return typeof this.path == "string" ? ae.basename(this.path) : void 0
		}
		set basename(t) {
			ot(t, "basename"), st(t, "basename"), this.path = ae.join(this.dirname || "", t)
		}
		get extname() {
			return typeof this.path == "string" ? ae.extname(this.path) : void 0
		}
		set extname(t) {
			if (st(t, "extname"), Zt(this.dirname, "extname"), t) {
				if (t.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
				if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
			}
			this.path = ae.join(this.dirname, this.stem + (t || ""))
		}
		get stem() {
			return typeof this.path == "string" ? ae.basename(this.path, this.extname) : void 0
		}
		set stem(t) {
			ot(t, "stem"), st(t, "stem"), this.path = ae.join(this.dirname || "", t + (this.extname || ""))
		}
		toString(t) {
			return (this.value || "").toString(t || void 0)
		}
		message(t, n, r) {
			const i = new v(t, n, r);
			return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this
				.messages.push(i), i
		}
		info(t, n, r) {
			const i = this.message(t, n, r);
			return i.fatal = null, i
		}
		fail(t, n, r) {
			const i = this.message(t, n, r);
			throw i.fatal = !0, i
		}
	}

	function st(e, t) {
		if (e && e.includes(ae.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + ae.sep +
			"`")
	}

	function ot(e, t) {
		if (!e) throw new Error("`" + t + "` cannot be empty")
	}

	function Zt(e, t) {
		if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
	}

	function Rr(e) {
		return Ut(e)
	}
	const Lr = vt().freeze(),
		Yt = {}.hasOwnProperty;

	function vt() {
		const e = xr(),
			t = [];
		let n = {},
			r, i = -1;
		return s.data = o, s.Parser = void 0, s.Compiler = void 0, s.freeze = u, s.attachers = t, s.use = c, s
			.parse = a, s.stringify = f, s.run = l, s.runSync = m, s.process = h, s.processSync = k, s;

		function s() {
			const b = vt();
			let A = -1;
			for (; ++A < t.length;) b.use(...t[A]);
			return b.data(Gt(!0, {}, n)), b
		}

		function o(b, A) {
			return typeof b == "string" ? arguments.length === 2 ? (lt("data", r), n[b] = A, s) : Yt.call(n, b) &&
				n[b] || null : b ? (lt("data", r), n = b, s) : n
		}

		function u() {
			if (r) return s;
			for (; ++i < t.length;) {
				const [b, ...A] = t[i];
				if (A[0] === !1) continue;
				A[0] === !0 && (A[0] = void 0);
				const x = b.call(s, ...A);
				typeof x == "function" && e.use(x)
			}
			return r = !0, i = Number.POSITIVE_INFINITY, s
		}

		function c(b, ...A) {
			let x;
			if (lt("use", r), b != null)
				if (typeof b == "function") z(b, ...A);
				else if (typeof b == "object") Array.isArray(b) ? L(b) : S(b);
			else throw new TypeError("Expected usable value, not `" + b + "`");
			return x && (n.settings = Object.assign(n.settings || {}, x)), s;

			function T(g) {
				if (typeof g == "function") z(g);
				else if (typeof g == "object")
					if (Array.isArray(g)) {
						const [F, ...D] = g;
						z(F, ...D)
					} else S(g);
				else throw new TypeError("Expected usable value, not `" + g + "`")
			}

			function S(g) {
				L(g.plugins), g.settings && (x = Object.assign(x || {}, g.settings))
			}

			function L(g) {
				let F = -1;
				if (g != null)
					if (Array.isArray(g))
						for (; ++F < g.length;) {
							const D = g[F];
							T(D)
						} else throw new TypeError("Expected a list of plugins, not `" + g + "`")
			}

			function z(g, F) {
				let D = -1,
					j;
				for (; ++D < t.length;)
					if (t[D][0] === g) {
						j = t[D];
						break
					} j ? (tt(j[1]) && tt(F) && (F = Gt(!0, j[1], F)), j[1] = F) : t.push([...arguments])
			}
		}

		function a(b) {
			s.freeze();
			const A = _e(b),
				x = s.Parser;
			return ut("parse", x), en(x, "parse") ? new x(String(A), A).parse() : x(String(A), A)
		}

		function f(b, A) {
			s.freeze();
			const x = _e(A),
				T = s.Compiler;
			return at("stringify", T), tn(b), en(T, "compile") ? new T(b, x).compile() : T(b, x)
		}

		function l(b, A, x) {
			if (tn(b), s.freeze(), !x && typeof A == "function" && (x = A, A = void 0), !x) return new Promise(T);
			T(null, x);

			function T(S, L) {
				e.run(b, _e(A), z);

				function z(g, F, D) {
					F = F || b, g ? L(g) : S ? S(F) : x(null, F, D)
				}
			}
		}

		function m(b, A) {
			let x, T;
			return s.run(b, A, S), nn("runSync", "run", T), x;

			function S(L, z) {
				jt(L), x = z, T = !0
			}
		}

		function h(b, A) {
			if (s.freeze(), ut("process", s.Parser), at("process", s.Compiler), !A) return new Promise(x);
			x(null, A);

			function x(T, S) {
				const L = _e(b);
				s.run(s.parse(L), L, (g, F, D) => {
					if (g || !F || !D) z(g);
					else {
						const j = s.stringify(F, D);
						j == null || (zr(j) ? D.value = j : D.result = j), z(g, D)
					}
				});

				function z(g, F) {
					g || !F ? S(g) : T ? T(F) : A(null, F)
				}
			}
		}

		function k(b) {
			let A;
			s.freeze(), ut("processSync", s.Parser), at("processSync", s.Compiler);
			const x = _e(b);
			return s.process(x, T), nn("processSync", "process", A), x;

			function T(S) {
				A = !0, jt(S)
			}
		}
	}

	function en(e, t) {
		return typeof e == "function" && e.prototype && (Dr(e.prototype) || t in e.prototype)
	}

	function Dr(e) {
		let t;
		for (t in e)
			if (Yt.call(e, t)) return !0;
		return !1
	}

	function ut(e, t) {
		if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Parser`")
	}

	function at(e, t) {
		if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Compiler`")
	}

	function lt(e, t) {
		if (t) throw new Error("Cannot call `" + e +
			"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
			)
	}

	function tn(e) {
		if (!tt(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
	}

	function nn(e, t, n) {
		if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
	}

	function _e(e) {
		return _r(e) ? e : new Pr(e)
	}

	function _r(e) {
		return !!(e && typeof e == "object" && "message" in e && "messages" in e)
	}

	function zr(e) {
		return typeof e == "string" || Ut(e)
	}
	const Br = {};

	function Nr(e, t) {
		const n = t || Br,
			r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
			i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
		return rn(e, r, i)
	}

	function rn(e, t, n) {
		if (jr(e)) {
			if ("value" in e) return e.type === "html" && !n ? "" : e.value;
			if (t && "alt" in e && e.alt) return e.alt;
			if ("children" in e) return sn(e.children, t, n)
		}
		return Array.isArray(e) ? sn(e, t, n) : ""
	}

	function sn(e, t, n) {
		const r = [];
		let i = -1;
		for (; ++i < e.length;) r[i] = rn(e[i], t, n);
		return r.join("")
	}

	function jr(e) {
		return !!(e && typeof e == "object")
	}

	function le(e, t, n, r) {
		const i = e.length;
		let s = 0,
			o;
		if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(
			r), o.unshift(t, n), e.splice(...o);
		else
			for (n && e.splice(t, n); s < r.length;) o = r.slice(s, s + 1e4), o.unshift(t, 0), e.splice(...o), s +=
				1e4, t += 1e4
	}

	function ee(e, t) {
		return e.length > 0 ? (le(e, e.length, 0, t), e) : t
	}
	const on = {}.hasOwnProperty;

	function Mr(e) {
		const t = {};
		let n = -1;
		for (; ++n < e.length;) Ur(t, e[n]);
		return t
	}

	function Ur(e, t) {
		let n;
		for (n in t) {
			const i = (on.call(e, n) ? e[n] : void 0) || (e[n] = {}),
				s = t[n];
			let o;
			if (s)
				for (o in s) {
					on.call(i, o) || (i[o] = []);
					const u = s[o];
					Hr(i[o], Array.isArray(u) ? u : u ? [u] : [])
				}
		}
	}

	function Hr(e, t) {
		let n = -1;
		const r = [];
		for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
		le(e, 0, 0, r)
	}
	const qr =
		/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
		ce = xe(/[A-Za-z]/),
		re = xe(/[\dA-Za-z]/),
		Vr = xe(/[#-'*+\--9=?A-Z^-~]/);

	function ct(e) {
		return e !== null && (e < 32 || e === 127)
	}
	const ft = xe(/\d/),
		$r = xe(/[\dA-Fa-f]/),
		Wr = xe(/[!-/:-@[-`{-~]/);

	function I(e) {
		return e !== null && e < -2
	}

	function X(e) {
		return e !== null && (e < 0 || e === 32)
	}

	function N(e) {
		return e === -2 || e === -1 || e === 32
	}
	const Jr = xe(qr),
		Qr = xe(/\s/);

	function xe(e) {
		return t;

		function t(n) {
			return n !== null && e.test(String.fromCharCode(n))
		}
	}

	function H(e, t, n, r) {
		const i = r ? r - 1 : Number.POSITIVE_INFINITY;
		let s = 0;
		return o;

		function o(c) {
			return N(c) ? (e.enter(n), u(c)) : t(c)
		}

		function u(c) {
			return N(c) && s++ < i ? (e.consume(c), u) : (e.exit(n), t(c))
		}
	}
	const Gr = {
		tokenize: Kr
	};

	function Kr(e) {
		const t = e.attempt(this.parser.constructs.contentInitial, r, i);
		let n;
		return t;

		function r(u) {
			if (u === null) {
				e.consume(u);
				return
			}
			return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), H(e, t, "linePrefix")
		}

		function i(u) {
			return e.enter("paragraph"), s(u)
		}

		function s(u) {
			const c = e.enter("chunkText", {
				contentType: "text",
				previous: n
			});
			return n && (n.next = c), n = c, o(u)
		}

		function o(u) {
			if (u === null) {
				e.exit("chunkText"), e.exit("paragraph"), e.consume(u);
				return
			}
			return I(u) ? (e.consume(u), e.exit("chunkText"), s) : (e.consume(u), o)
		}
	}
	const Xr = {
			tokenize: Zr
		},
		un = {
			tokenize: Yr
		};

	function Zr(e) {
		const t = this,
			n = [];
		let r = 0,
			i, s, o;
		return u;

		function u(S) {
			if (r < n.length) {
				const L = n[r];
				return t.containerState = L[1], e.attempt(L[0].continuation, c, a)(S)
			}
			return a(S)
		}

		function c(S) {
			if (r++, t.containerState._closeFlow) {
				t.containerState._closeFlow = void 0, i && T();
				const L = t.events.length;
				let z = L,
					g;
				for (; z--;)
					if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
						g = t.events[z][1].end;
						break
					} x(r);
				let F = L;
				for (; F < t.events.length;) t.events[F][1].end = Object.assign({}, g), F++;
				return le(t.events, z + 1, 0, t.events.slice(L)), t.events.length = F, a(S)
			}
			return u(S)
		}

		function a(S) {
			if (r === n.length) {
				if (!i) return m(S);
				if (i.currentConstruct && i.currentConstruct.concrete) return k(S);
				t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
			}
			return t.containerState = {}, e.check(un, f, l)(S)
		}

		function f(S) {
			return i && T(), x(r), m(S)
		}

		function l(S) {
			return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, k(S)
		}

		function m(S) {
			return t.containerState = {}, e.attempt(un, h, k)(S)
		}

		function h(S) {
			return r++, n.push([t.currentConstruct, t.containerState]), m(S)
		}

		function k(S) {
			if (S === null) {
				i && T(), x(0), e.consume(S);
				return
			}
			return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
				contentType: "flow",
				previous: s,
				_tokenizer: i
			}), b(S)
		}

		function b(S) {
			if (S === null) {
				A(e.exit("chunkFlow"), !0), x(0), e.consume(S);
				return
			}
			return I(S) ? (e.consume(S), A(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, u) : (e.consume(S), b)
		}

		function A(S, L) {
			const z = t.sliceStream(S);
			if (L && z.push(null), S.previous = s, s && (s.next = S), s = S, i.defineSkip(S.start), i.write(z), t
				.parser.lazy[S.start.line]) {
				let g = i.events.length;
				for (; g--;)
					if (i.events[g][1].start.offset < o && (!i.events[g][1].end || i.events[g][1].end.offset > o))
						return;
				const F = t.events.length;
				let D = F,
					j, J;
				for (; D--;)
					if (t.events[D][0] === "exit" && t.events[D][1].type === "chunkFlow") {
						if (j) {
							J = t.events[D][1].end;
							break
						}
						j = !0
					} for (x(r), g = F; g < t.events.length;) t.events[g][1].end = Object.assign({}, J), g++;
				le(t.events, D + 1, 0, t.events.slice(F)), t.events.length = g
			}
		}

		function x(S) {
			let L = n.length;
			for (; L-- > S;) {
				const z = n[L];
				t.containerState = z[1], z[0].exit.call(t, e)
			}
			n.length = S
		}

		function T() {
			i.write([null]), s = void 0, i = void 0, t.containerState._closeFlow = void 0
		}
	}

	function Yr(e, t, n) {
		return H(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable
			.null.includes("codeIndented") ? void 0 : 4)
	}

	function an(e) {
		if (e === null || X(e) || Qr(e)) return 1;
		if (Jr(e)) return 2
	}

	function ht(e, t, n) {
		const r = [];
		let i = -1;
		for (; ++i < e.length;) {
			const s = e[i].resolveAll;
			s && !r.includes(s) && (t = s(t, n), r.push(s))
		}
		return t
	}
	const pt = {
		name: "attention",
		tokenize: ei,
		resolveAll: vr
	};

	function vr(e, t) {
		let n = -1,
			r, i, s, o, u, c, a, f;
		for (; ++n < e.length;)
			if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
				for (r = n; r--;)
					if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t
						.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
						if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
							!((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start
								.offset) % 3)) continue;
						c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start
							.offset > 1 ? 2 : 1;
						const l = Object.assign({}, e[r][1].end),
							m = Object.assign({}, e[n][1].start);
						ln(l, -c), ln(m, c), o = {
								type: c > 1 ? "strongSequence" : "emphasisSequence",
								start: l,
								end: Object.assign({}, e[r][1].end)
							}, u = {
								type: c > 1 ? "strongSequence" : "emphasisSequence",
								start: Object.assign({}, e[n][1].start),
								end: m
							}, s = {
								type: c > 1 ? "strongText" : "emphasisText",
								start: Object.assign({}, e[r][1].end),
								end: Object.assign({}, e[n][1].start)
							}, i = {
								type: c > 1 ? "strong" : "emphasis",
								start: Object.assign({}, o.start),
								end: Object.assign({}, u.end)
							}, e[r][1].end = Object.assign({}, o.start), e[n][1].start = Object.assign({}, u.end),
							a = [], e[r][1].end.offset - e[r][1].start.offset && (a = ee(a, [
								["enter", e[r][1], t],
								["exit", e[r][1], t]
							])), a = ee(a, [
								["enter", i, t],
								["enter", o, t],
								["exit", o, t],
								["enter", s, t]
							]), a = ee(a, ht(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), a = ee(a,
								[
									["exit", s, t],
									["enter", u, t],
									["exit", u, t],
									["exit", i, t]
								]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, a = ee(a, [
								["enter", e[n][1], t],
								["exit", e[n][1], t]
							])) : f = 0, le(e, r - 1, n - r + 3, a), n = r + a.length - f - 2;
						break
					}
			} for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
		return e
	}

	function ei(e, t) {
		const n = this.parser.constructs.attentionMarkers.null,
			r = this.previous,
			i = an(r);
		let s;
		return o;

		function o(c) {
			return s = c, e.enter("attentionSequence"), u(c)
		}

		function u(c) {
			if (c === s) return e.consume(c), u;
			const a = e.exit("attentionSequence"),
				f = an(c),
				l = !f || f === 2 && i || n.includes(c),
				m = !i || i === 2 && f || n.includes(r);
			return a._open = !!(s === 42 ? l : l && (i || !m)), a._close = !!(s === 42 ? m : m && (f || !l)), t(c)
		}
	}

	function ln(e, t) {
		e.column += t, e.offset += t, e._bufferIndex += t
	}
	const ti = {
		name: "autolink",
		tokenize: ni
	};

	function ni(e, t, n) {
		let r = 0;
		return i;

		function i(h) {
			return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter(
				"autolinkProtocol"), s
		}

		function s(h) {
			return ce(h) ? (e.consume(h), o) : a(h)
		}

		function o(h) {
			return h === 43 || h === 45 || h === 46 || re(h) ? (r = 1, u(h)) : a(h)
		}

		function u(h) {
			return h === 58 ? (e.consume(h), r = 0, c) : (h === 43 || h === 45 || h === 46 || re(h)) && r++ < 32 ? (
				e.consume(h), u) : (r = 0, a(h))
		}

		function c(h) {
			return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit(
					"autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || ct(h) ? n(h) :
				(e.consume(h), c)
		}

		function a(h) {
			return h === 64 ? (e.consume(h), f) : Vr(h) ? (e.consume(h), a) : n(h)
		}

		function f(h) {
			return re(h) ? l(h) : n(h)
		}

		function l(h) {
			return h === 46 ? (e.consume(h), r = 0, f) : h === 62 ? (e.exit("autolinkProtocol").type =
				"autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit(
					"autolink"), t) : m(h)
		}

		function m(h) {
			if ((h === 45 || re(h)) && r++ < 63) {
				const k = h === 45 ? m : l;
				return e.consume(h), k
			}
			return n(h)
		}
	}
	const $e = {
		tokenize: ri,
		partial: !0
	};

	function ri(e, t, n) {
		return r;

		function r(s) {
			return N(s) ? H(e, i, "linePrefix")(s) : i(s)
		}

		function i(s) {
			return s === null || I(s) ? t(s) : n(s)
		}
	}
	const cn = {
		name: "blockQuote",
		tokenize: ii,
		continuation: {
			tokenize: si
		},
		exit: oi
	};

	function ii(e, t, n) {
		const r = this;
		return i;

		function i(o) {
			if (o === 62) {
				const u = r.containerState;
				return u.open || (e.enter("blockQuote", {
						_container: !0
					}), u.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e
					.exit("blockQuoteMarker"), s
			}
			return n(o)
		}

		function s(o) {
			return N(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit(
				"blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(
				o))
		}
	}

	function si(e, t, n) {
		const r = this;
		return i;

		function i(o) {
			return N(o) ? H(e, s, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 :
				4)(o) : s(o)
		}

		function s(o) {
			return e.attempt(cn, t, n)(o)
		}
	}

	function oi(e) {
		e.exit("blockQuote")
	}
	const fn = {
		name: "characterEscape",
		tokenize: ui
	};

	function ui(e, t, n) {
		return r;

		function r(s) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(s), e.exit("escapeMarker"), i
		}

		function i(s) {
			return Wr(s) ? (e.enter("characterEscapeValue"), e.consume(s), e.exit("characterEscapeValue"), e.exit(
				"characterEscape"), t) : n(s)
		}
	}
	const hn = document.createElement("i");

	function dt(e) {
		const t = "&" + e + ";";
		hn.innerHTML = t;
		const n = hn.textContent;
		return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
	}
	const pn = {
		name: "characterReference",
		tokenize: ai
	};

	function ai(e, t, n) {
		const r = this;
		let i = 0,
			s, o;
		return u;

		function u(l) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(l), e.exit(
				"characterReferenceMarker"), c
		}

		function c(l) {
			return l === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(l), e.exit(
				"characterReferenceMarkerNumeric"), a) : (e.enter("characterReferenceValue"), s = 31, o = re, f(
				l))
		}

		function a(l) {
			return l === 88 || l === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(l), e.exit(
					"characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), s = 6, o = $r,
				f) : (e.enter("characterReferenceValue"), s = 7, o = ft, f(l))
		}

		function f(l) {
			if (l === 59 && i) {
				const m = e.exit("characterReferenceValue");
				return o === re && !dt(r.sliceSerialize(m)) ? n(l) : (e.enter("characterReferenceMarker"), e
					.consume(l), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
			}
			return o(l) && i++ < s ? (e.consume(l), f) : n(l)
		}
	}
	const dn = {
			tokenize: ci,
			partial: !0
		},
		mn = {
			name: "codeFenced",
			tokenize: li,
			concrete: !0
		};

	function li(e, t, n) {
		const r = this,
			i = {
				tokenize: z,
				partial: !0
			};
		let s = 0,
			o = 0,
			u;
		return c;

		function c(g) {
			return a(g)
		}

		function a(g) {
			const F = r.events[r.events.length - 1];
			return s = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0, u = g, e.enter(
				"codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(g)
		}

		function f(g) {
			return g === u ? (o++, e.consume(g), f) : o < 3 ? n(g) : (e.exit("codeFencedFenceSequence"), N(g) ? H(e,
				l, "whitespace")(g) : l(g))
		}

		function l(g) {
			return g === null || I(g) ? (e.exit("codeFencedFence"), r.interrupt ? t(g) : e.check(dn, b, L)(g)) : (e
				.enter("codeFencedFenceInfo"), e.enter("chunkString", {
					contentType: "string"
				}), m(g))
		}

		function m(g) {
			return g === null || I(g) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), l(g)) : N(g) ? (e
					.exit("chunkString"), e.exit("codeFencedFenceInfo"), H(e, h, "whitespace")(g)) : g === 96 &&
				g === u ? n(g) : (e.consume(g), m)
		}

		function h(g) {
			return g === null || I(g) ? l(g) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
				contentType: "string"
			}), k(g))
		}

		function k(g) {
			return g === null || I(g) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), l(g)) : g === 96 &&
				g === u ? n(g) : (e.consume(g), k)
		}

		function b(g) {
			return e.attempt(i, L, A)(g)
		}

		function A(g) {
			return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), x
		}

		function x(g) {
			return s > 0 && N(g) ? H(e, T, "linePrefix", s + 1)(g) : T(g)
		}

		function T(g) {
			return g === null || I(g) ? e.check(dn, b, L)(g) : (e.enter("codeFlowValue"), S(g))
		}

		function S(g) {
			return g === null || I(g) ? (e.exit("codeFlowValue"), T(g)) : (e.consume(g), S)
		}

		function L(g) {
			return e.exit("codeFenced"), t(g)
		}

		function z(g, F, D) {
			let j = 0;
			return J;

			function J(B) {
				return g.enter("lineEnding"), g.consume(B), g.exit("lineEnding"), O
			}

			function O(B) {
				return g.enter("codeFencedFence"), N(B) ? H(g, C, "linePrefix", r.parser.constructs.disable.null
					.includes("codeIndented") ? void 0 : 4)(B) : C(B)
			}

			function C(B) {
				return B === u ? (g.enter("codeFencedFenceSequence"), q(B)) : D(B)
			}

			function q(B) {
				return B === u ? (j++, g.consume(B), q) : j >= o ? (g.exit("codeFencedFenceSequence"), N(B) ? H(g,
					V, "whitespace")(B) : V(B)) : D(B)
			}

			function V(B) {
				return B === null || I(B) ? (g.exit("codeFencedFence"), F(B)) : D(B)
			}
		}
	}

	function ci(e, t, n) {
		const r = this;
		return i;

		function i(o) {
			return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), s)
		}

		function s(o) {
			return r.parser.lazy[r.now().line] ? n(o) : t(o)
		}
	}
	const mt = {
			name: "codeIndented",
			tokenize: hi
		},
		fi = {
			tokenize: pi,
			partial: !0
		};

	function hi(e, t, n) {
		const r = this;
		return i;

		function i(a) {
			return e.enter("codeIndented"), H(e, s, "linePrefix", 4 + 1)(a)
		}

		function s(a) {
			const f = r.events[r.events.length - 1];
			return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? o(a) : n(a)
		}

		function o(a) {
			return a === null ? c(a) : I(a) ? e.attempt(fi, o, c)(a) : (e.enter("codeFlowValue"), u(a))
		}

		function u(a) {
			return a === null || I(a) ? (e.exit("codeFlowValue"), o(a)) : (e.consume(a), u)
		}

		function c(a) {
			return e.exit("codeIndented"), t(a)
		}
	}

	function pi(e, t, n) {
		const r = this;
		return i;

		function i(o) {
			return r.parser.lazy[r.now().line] ? n(o) : I(o) ? (e.enter("lineEnding"), e.consume(o), e.exit(
				"lineEnding"), i) : H(e, s, "linePrefix", 4 + 1)(o)
		}

		function s(o) {
			const u = r.events[r.events.length - 1];
			return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? t(o) : I(o) ? i(
				o) : n(o)
		}
	}
	const di = {
		name: "codeText",
		tokenize: yi,
		resolve: mi,
		previous: gi
	};

	function mi(e) {
		let t = e.length - 4,
			n = 3,
			r, i;
		if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1]
				.type === "space")) {
			for (r = n; ++r < t;)
				if (e[r][1].type === "codeTextData") {
					e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
					break
				}
		}
		for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r ===
			t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end =
			e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
		return e
	}

	function gi(e) {
		return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
	}

	function yi(e, t, n) {
		let r = 0,
			i, s;
		return o;

		function o(l) {
			return e.enter("codeText"), e.enter("codeTextSequence"), u(l)
		}

		function u(l) {
			return l === 96 ? (e.consume(l), r++, u) : (e.exit("codeTextSequence"), c(l))
		}

		function c(l) {
			return l === null ? n(l) : l === 32 ? (e.enter("space"), e.consume(l), e.exit("space"), c) : l === 96 ?
				(s = e.enter("codeTextSequence"), i = 0, f(l)) : I(l) ? (e.enter("lineEnding"), e.consume(l), e
					.exit("lineEnding"), c) : (e.enter("codeTextData"), a(l))
		}

		function a(l) {
			return l === null || l === 32 || l === 96 || I(l) ? (e.exit("codeTextData"), c(l)) : (e.consume(l), a)
		}

		function f(l) {
			return l === 96 ? (e.consume(l), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(
				l)) : (s.type = "codeTextData", a(l))
		}
	}

	function gn(e) {
		const t = {};
		let n = -1,
			r, i, s, o, u, c, a;
		for (; ++n < e.length;) {
			for (; n in t;) n = t[n];
			if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (c = r[1]
					._tokenizer.events, s = 0, s < c.length && c[s][1].type === "lineEndingBlank" && (s += 2), s < c
					.length && c[s][1].type === "content"))
				for (; ++s < c.length && c[s][1].type !== "content";) c[s][1].type === "chunkText" && (c[s][1]
					._isInFirstContentOfListItem = !0, s++);
			if (r[0] === "enter") r[1].contentType && (Object.assign(t, xi(e, n)), n = t[n], a = !0);
			else if (r[1]._container) {
				for (s = n, i = void 0; s-- && (o = e[s], o[1].type === "lineEnding" || o[1].type ===
						"lineEndingBlank");) o[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), o[1]
					.type = "lineEnding", i = s);
				i && (r[1].end = Object.assign({}, e[i][1].start), u = e.slice(i, n), u.unshift(r), le(e, i, n - i +
					1, u))
			}
		}
		return !a
	}

	function xi(e, t) {
		const n = e[t][1],
			r = e[t][2];
		let i = t - 1;
		const s = [],
			o = n._tokenizer || r.parser[n.contentType](n.start),
			u = o.events,
			c = [],
			a = {};
		let f, l, m = -1,
			h = n,
			k = 0,
			b = 0;
		const A = [b];
		for (; h;) {
			for (; e[++i][1] !== h;);
			s.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), l && o.defineSkip(h.start), h
					._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(f), h
					._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), l = h, h = h
				.next
		}
		for (h = n; ++m < u.length;) u[m][0] === "exit" && u[m - 1][0] === "enter" && u[m][1].type === u[m - 1][1]
			.type && u[m][1].start.line !== u[m][1].end.line && (b = m + 1, A.push(b), h._tokenizer = void 0, h
				.previous = void 0, h = h.next);
		for (o.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : A.pop(), m = A.length; m--;) {
			const x = u.slice(A[m], A[m + 1]),
				T = s.pop();
			c.unshift([T, T + x.length - 1]), le(e, T, 2, x)
		}
		for (m = -1; ++m < c.length;) a[k + c[m][0]] = k + c[m][1], k += c[m][1] - c[m][0] - 1;
		return a
	}
	const bi = {
			tokenize: Ei,
			resolve: ki
		},
		wi = {
			tokenize: Si,
			partial: !0
		};

	function ki(e) {
		return gn(e), e
	}

	function Ei(e, t) {
		let n;
		return r;

		function r(u) {
			return e.enter("content"), n = e.enter("chunkContent", {
				contentType: "content"
			}), i(u)
		}

		function i(u) {
			return u === null ? s(u) : I(u) ? e.check(wi, o, s)(u) : (e.consume(u), i)
		}

		function s(u) {
			return e.exit("chunkContent"), e.exit("content"), t(u)
		}

		function o(u) {
			return e.consume(u), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
				contentType: "content",
				previous: n
			}), n = n.next, i
		}
	}

	function Si(e, t, n) {
		const r = this;
		return i;

		function i(o) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), H(e, s,
				"linePrefix")
		}

		function s(o) {
			if (o === null || I(o)) return n(o);
			const u = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && u && u[1].type === "linePrefix" &&
				u[2].sliceSerialize(u[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o)
		}
	}

	function yn(e, t, n, r, i, s, o, u, c) {
		const a = c || Number.POSITIVE_INFINITY;
		let f = 0;
		return l;

		function l(x) {
			return x === 60 ? (e.enter(r), e.enter(i), e.enter(s), e.consume(x), e.exit(s), m) : x === null || x ===
				32 || x === 41 || ct(x) ? n(x) : (e.enter(r), e.enter(o), e.enter(u), e.enter("chunkString", {
					contentType: "string"
				}), b(x))
		}

		function m(x) {
			return x === 62 ? (e.enter(s), e.consume(x), e.exit(s), e.exit(i), e.exit(r), t) : (e.enter(u), e.enter(
				"chunkString", {
					contentType: "string"
				}), h(x))
		}

		function h(x) {
			return x === 62 ? (e.exit("chunkString"), e.exit(u), m(x)) : x === null || x === 60 || I(x) ? n(x) : (e
				.consume(x), x === 92 ? k : h)
		}

		function k(x) {
			return x === 60 || x === 62 || x === 92 ? (e.consume(x), h) : h(x)
		}

		function b(x) {
			return !f && (x === null || x === 41 || X(x)) ? (e.exit("chunkString"), e.exit(u), e.exit(o), e.exit(r),
					t(x)) : f < a && x === 40 ? (e.consume(x), f++, b) : x === 41 ? (e.consume(x), f--, b) : x ===
				null || x === 32 || x === 40 || ct(x) ? n(x) : (e.consume(x), x === 92 ? A : b)
		}

		function A(x) {
			return x === 40 || x === 41 || x === 92 ? (e.consume(x), b) : b(x)
		}
	}

	function xn(e, t, n, r, i, s) {
		const o = this;
		let u = 0,
			c;
		return a;

		function a(h) {
			return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(s), f
		}

		function f(h) {
			return u > 999 || h === null || h === 91 || h === 93 && !c || h === 94 && !u &&
				"_hiddenFootnoteSupport" in o.parser.constructs ? n(h) : h === 93 ? (e.exit(s), e.enter(i), e
					.consume(h), e.exit(i), e.exit(r), t) : I(h) ? (e.enter("lineEnding"), e.consume(h), e.exit(
					"lineEnding"), f) : (e.enter("chunkString", {
					contentType: "string"
				}), l(h))
		}

		function l(h) {
			return h === null || h === 91 || h === 93 || I(h) || u++ > 999 ? (e.exit("chunkString"), f(h)) : (e
				.consume(h), c || (c = !N(h)), h === 92 ? m : l)
		}

		function m(h) {
			return h === 91 || h === 92 || h === 93 ? (e.consume(h), u++, l) : l(h)
		}
	}

	function bn(e, t, n, r, i, s) {
		let o;
		return u;

		function u(m) {
			return m === 34 || m === 39 || m === 40 ? (e.enter(r), e.enter(i), e.consume(m), e.exit(i), o = m ===
				40 ? 41 : m, c) : n(m)
		}

		function c(m) {
			return m === o ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), t) : (e.enter(s), a(m))
		}

		function a(m) {
			return m === o ? (e.exit(s), c(o)) : m === null ? n(m) : I(m) ? (e.enter("lineEnding"), e.consume(m), e
				.exit("lineEnding"), H(e, a, "linePrefix")) : (e.enter("chunkString", {
				contentType: "string"
			}), f(m))
		}

		function f(m) {
			return m === o || m === null || I(m) ? (e.exit("chunkString"), a(m)) : (e.consume(m), m === 92 ? l : f)
		}

		function l(m) {
			return m === o || m === 92 ? (e.consume(m), f) : f(m)
		}
	}

	function ze(e, t) {
		let n;
		return r;

		function r(i) {
			return I(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : N(i) ? H(e, r,
				n ? "linePrefix" : "lineSuffix")(i) : t(i)
		}
	}

	function Ae(e) {
		return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
	}
	const Ai = {
			name: "definition",
			tokenize: Ci
		},
		Oi = {
			tokenize: Fi,
			partial: !0
		};

	function Ci(e, t, n) {
		const r = this;
		let i;
		return s;

		function s(h) {
			return e.enter("definition"), o(h)
		}

		function o(h) {
			return xn.call(r, e, u, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(h)
		}

		function u(h) {
			return i = Ae(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter(
				"definitionMarker"), e.consume(h), e.exit("definitionMarker"), c) : n(h)
		}

		function c(h) {
			return X(h) ? ze(e, a)(h) : a(h)
		}

		function a(h) {
			return yn(e, f, n, "definitionDestination", "definitionDestinationLiteral",
					"definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")
				(h)
		}

		function f(h) {
			return e.attempt(Oi, l, l)(h)
		}

		function l(h) {
			return N(h) ? H(e, m, "whitespace")(h) : m(h)
		}

		function m(h) {
			return h === null || I(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h)
		}
	}

	function Fi(e, t, n) {
		return r;

		function r(u) {
			return X(u) ? ze(e, i)(u) : n(u)
		}

		function i(u) {
			return bn(e, s, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(u)
		}

		function s(u) {
			return N(u) ? H(e, o, "whitespace")(u) : o(u)
		}

		function o(u) {
			return u === null || I(u) ? t(u) : n(u)
		}
	}
	const Ti = {
		name: "hardBreakEscape",
		tokenize: Ii
	};

	function Ii(e, t, n) {
		return r;

		function r(s) {
			return e.enter("hardBreakEscape"), e.consume(s), i
		}

		function i(s) {
			return I(s) ? (e.exit("hardBreakEscape"), t(s)) : n(s)
		}
	}
	const Pi = {
		name: "headingAtx",
		tokenize: Li,
		resolve: Ri
	};

	function Ri(e, t) {
		let n = e.length - 2,
			r = 3,
			i, s;
		return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[
			n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type ===
			"whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
			type: "atxHeadingText",
			start: e[r][1].start,
			end: e[n][1].end
		}, s = {
			type: "chunkText",
			start: e[r][1].start,
			end: e[n][1].end,
			contentType: "text"
		}, le(e, r, n - r + 1, [
			["enter", i, t],
			["enter", s, t],
			["exit", s, t],
			["exit", i, t]
		])), e
	}

	function Li(e, t, n) {
		let r = 0;
		return i;

		function i(f) {
			return e.enter("atxHeading"), s(f)
		}

		function s(f) {
			return e.enter("atxHeadingSequence"), o(f)
		}

		function o(f) {
			return f === 35 && r++ < 6 ? (e.consume(f), o) : f === null || X(f) ? (e.exit("atxHeadingSequence"), u(
				f)) : n(f)
		}

		function u(f) {
			return f === 35 ? (e.enter("atxHeadingSequence"), c(f)) : f === null || I(f) ? (e.exit("atxHeading"), t(
				f)) : N(f) ? H(e, u, "whitespace")(f) : (e.enter("atxHeadingText"), a(f))
		}

		function c(f) {
			return f === 35 ? (e.consume(f), c) : (e.exit("atxHeadingSequence"), u(f))
		}

		function a(f) {
			return f === null || f === 35 || X(f) ? (e.exit("atxHeadingText"), u(f)) : (e.consume(f), a)
		}
	}
	const Di = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col",
			"colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure",
			"footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr",
			"html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol",
			"optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot",
			"th", "thead", "title", "tr", "track", "ul"
		],
		wn = ["pre", "script", "style", "textarea"],
		_i = {
			name: "htmlFlow",
			tokenize: ji,
			resolveTo: Ni,
			concrete: !0
		},
		zi = {
			tokenize: Ui,
			partial: !0
		},
		Bi = {
			tokenize: Mi,
			partial: !0
		};

	function Ni(e) {
		let t = e.length;
		for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
		return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start =
			e[t - 2][1].start, e.splice(t - 2, 2)), e
	}

	function ji(e, t, n) {
		const r = this;
		let i, s, o, u, c;
		return a;

		function a(d) {
			return f(d)
		}

		function f(d) {
			return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(d), l
		}

		function l(d) {
			return d === 33 ? (e.consume(d), m) : d === 47 ? (e.consume(d), s = !0, b) : d === 63 ? (e.consume(d),
				i = 3, r.interrupt ? t : p) : ce(d) ? (e.consume(d), o = String.fromCharCode(d), A) : n(d)
		}

		function m(d) {
			return d === 45 ? (e.consume(d), i = 2, h) : d === 91 ? (e.consume(d), i = 5, u = 0, k) : ce(d) ? (e
				.consume(d), i = 4, r.interrupt ? t : p) : n(d)
		}

		function h(d) {
			return d === 45 ? (e.consume(d), r.interrupt ? t : p) : n(d)
		}

		function k(d) {
			const oe = "CDATA[";
			return d === oe.charCodeAt(u++) ? (e.consume(d), u === oe.length ? r.interrupt ? t : C : k) : n(d)
		}

		function b(d) {
			return ce(d) ? (e.consume(d), o = String.fromCharCode(d), A) : n(d)
		}

		function A(d) {
			if (d === null || d === 47 || d === 62 || X(d)) {
				const oe = d === 47,
					Fe = o.toLowerCase();
				return !oe && !s && wn.includes(Fe) ? (i = 1, r.interrupt ? t(d) : C(d)) : Di.includes(o
					.toLowerCase()) ? (i = 6, oe ? (e.consume(d), x) : r.interrupt ? t(d) : C(d)) : (i = 7, r
					.interrupt && !r.parser.lazy[r.now().line] ? n(d) : s ? T(d) : S(d))
			}
			return d === 45 || re(d) ? (e.consume(d), o += String.fromCharCode(d), A) : n(d)
		}

		function x(d) {
			return d === 62 ? (e.consume(d), r.interrupt ? t : C) : n(d)
		}

		function T(d) {
			return N(d) ? (e.consume(d), T) : J(d)
		}

		function S(d) {
			return d === 47 ? (e.consume(d), J) : d === 58 || d === 95 || ce(d) ? (e.consume(d), L) : N(d) ? (e
				.consume(d), S) : J(d)
		}

		function L(d) {
			return d === 45 || d === 46 || d === 58 || d === 95 || re(d) ? (e.consume(d), L) : z(d)
		}

		function z(d) {
			return d === 61 ? (e.consume(d), g) : N(d) ? (e.consume(d), z) : S(d)
		}

		function g(d) {
			return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? n(d) : d === 34 || d === 39 ? (e
				.consume(d), c = d, F) : N(d) ? (e.consume(d), g) : D(d)
		}

		function F(d) {
			return d === c ? (e.consume(d), c = null, j) : d === null || I(d) ? n(d) : (e.consume(d), F)
		}

		function D(d) {
			return d === null || d === 34 || d === 39 || d === 47 || d === 60 || d === 61 || d === 62 || d === 96 ||
				X(d) ? z(d) : (e.consume(d), D)
		}

		function j(d) {
			return d === 47 || d === 62 || N(d) ? S(d) : n(d)
		}

		function J(d) {
			return d === 62 ? (e.consume(d), O) : n(d)
		}

		function O(d) {
			return d === null || I(d) ? C(d) : N(d) ? (e.consume(d), O) : n(d)
		}

		function C(d) {
			return d === 45 && i === 2 ? (e.consume(d), K) : d === 60 && i === 1 ? (e.consume(d), Q) : d === 62 &&
				i === 4 ? (e.consume(d), se) : d === 63 && i === 3 ? (e.consume(d), p) : d === 93 && i === 5 ? (e
					.consume(d), de) : I(d) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(zi, me, q)(
					d)) : d === null || I(d) ? (e.exit("htmlFlowData"), q(d)) : (e.consume(d), C)
		}

		function q(d) {
			return e.check(Bi, V, me)(d)
		}

		function V(d) {
			return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), B
		}

		function B(d) {
			return d === null || I(d) ? q(d) : (e.enter("htmlFlowData"), C(d))
		}

		function K(d) {
			return d === 45 ? (e.consume(d), p) : C(d)
		}

		function Q(d) {
			return d === 47 ? (e.consume(d), o = "", ie) : C(d)
		}

		function ie(d) {
			if (d === 62) {
				const oe = o.toLowerCase();
				return wn.includes(oe) ? (e.consume(d), se) : C(d)
			}
			return ce(d) && o.length < 8 ? (e.consume(d), o += String.fromCharCode(d), ie) : C(d)
		}

		function de(d) {
			return d === 93 ? (e.consume(d), p) : C(d)
		}

		function p(d) {
			return d === 62 ? (e.consume(d), se) : d === 45 && i === 2 ? (e.consume(d), p) : C(d)
		}

		function se(d) {
			return d === null || I(d) ? (e.exit("htmlFlowData"), me(d)) : (e.consume(d), se)
		}

		function me(d) {
			return e.exit("htmlFlow"), t(d)
		}
	}

	function Mi(e, t, n) {
		const r = this;
		return i;

		function i(o) {
			return I(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), s) : n(o)
		}

		function s(o) {
			return r.parser.lazy[r.now().line] ? n(o) : t(o)
		}
	}

	function Ui(e, t, n) {
		return r;

		function r(i) {
			return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt($e, t, n)
		}
	}
	const Hi = {
		name: "htmlText",
		tokenize: qi
	};

	function qi(e, t, n) {
		const r = this;
		let i, s, o;
		return u;

		function u(p) {
			return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(p), c
		}

		function c(p) {
			return p === 33 ? (e.consume(p), a) : p === 47 ? (e.consume(p), z) : p === 63 ? (e.consume(p), S) : ce(
				p) ? (e.consume(p), D) : n(p)
		}

		function a(p) {
			return p === 45 ? (e.consume(p), f) : p === 91 ? (e.consume(p), s = 0, k) : ce(p) ? (e.consume(p), T) :
				n(p)
		}

		function f(p) {
			return p === 45 ? (e.consume(p), h) : n(p)
		}

		function l(p) {
			return p === null ? n(p) : p === 45 ? (e.consume(p), m) : I(p) ? (o = l, Q(p)) : (e.consume(p), l)
		}

		function m(p) {
			return p === 45 ? (e.consume(p), h) : l(p)
		}

		function h(p) {
			return p === 62 ? K(p) : p === 45 ? m(p) : l(p)
		}

		function k(p) {
			const se = "CDATA[";
			return p === se.charCodeAt(s++) ? (e.consume(p), s === se.length ? b : k) : n(p)
		}

		function b(p) {
			return p === null ? n(p) : p === 93 ? (e.consume(p), A) : I(p) ? (o = b, Q(p)) : (e.consume(p), b)
		}

		function A(p) {
			return p === 93 ? (e.consume(p), x) : b(p)
		}

		function x(p) {
			return p === 62 ? K(p) : p === 93 ? (e.consume(p), x) : b(p)
		}

		function T(p) {
			return p === null || p === 62 ? K(p) : I(p) ? (o = T, Q(p)) : (e.consume(p), T)
		}

		function S(p) {
			return p === null ? n(p) : p === 63 ? (e.consume(p), L) : I(p) ? (o = S, Q(p)) : (e.consume(p), S)
		}

		function L(p) {
			return p === 62 ? K(p) : S(p)
		}

		function z(p) {
			return ce(p) ? (e.consume(p), g) : n(p)
		}

		function g(p) {
			return p === 45 || re(p) ? (e.consume(p), g) : F(p)
		}

		function F(p) {
			return I(p) ? (o = F, Q(p)) : N(p) ? (e.consume(p), F) : K(p)
		}

		function D(p) {
			return p === 45 || re(p) ? (e.consume(p), D) : p === 47 || p === 62 || X(p) ? j(p) : n(p)
		}

		function j(p) {
			return p === 47 ? (e.consume(p), K) : p === 58 || p === 95 || ce(p) ? (e.consume(p), J) : I(p) ? (o = j,
				Q(p)) : N(p) ? (e.consume(p), j) : K(p)
		}

		function J(p) {
			return p === 45 || p === 46 || p === 58 || p === 95 || re(p) ? (e.consume(p), J) : O(p)
		}

		function O(p) {
			return p === 61 ? (e.consume(p), C) : I(p) ? (o = O, Q(p)) : N(p) ? (e.consume(p), O) : j(p)
		}

		function C(p) {
			return p === null || p === 60 || p === 61 || p === 62 || p === 96 ? n(p) : p === 34 || p === 39 ? (e
				.consume(p), i = p, q) : I(p) ? (o = C, Q(p)) : N(p) ? (e.consume(p), C) : (e.consume(p), V)
		}

		function q(p) {
			return p === i ? (e.consume(p), i = void 0, B) : p === null ? n(p) : I(p) ? (o = q, Q(p)) : (e.consume(
				p), q)
		}

		function V(p) {
			return p === null || p === 34 || p === 39 || p === 60 || p === 61 || p === 96 ? n(p) : p === 47 || p ===
				62 || X(p) ? j(p) : (e.consume(p), V)
		}

		function B(p) {
			return p === 47 || p === 62 || X(p) ? j(p) : n(p)
		}

		function K(p) {
			return p === 62 ? (e.consume(p), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(p)
		}

		function Q(p) {
			return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), ie
		}

		function ie(p) {
			return N(p) ? H(e, de, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ?
				void 0 : 4)(p) : de(p)
		}

		function de(p) {
			return e.enter("htmlTextData"), o(p)
		}
	}
	const gt = {
			name: "labelEnd",
			tokenize: Gi,
			resolveTo: Qi,
			resolveAll: Ji
		},
		Vi = {
			tokenize: Ki
		},
		$i = {
			tokenize: Xi
		},
		Wi = {
			tokenize: Zi
		};

	function Ji(e) {
		let t = -1;
		for (; ++t < e.length;) {
			const n = e[t][1];
			(n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n
				.type === "labelImage" ? 4 : 2), n.type = "data", t++)
		}
		return e
	}

	function Qi(e, t) {
		let n = e.length,
			r = 0,
			i, s, o, u;
		for (; n--;)
			if (i = e[n][1], s) {
				if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
				e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
			} else if (o) {
			if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (s =
					n, i.type !== "labelLink")) {
				r = 2;
				break
			}
		} else i.type === "labelEnd" && (o = n);
		const c = {
				type: e[s][1].type === "labelLink" ? "link" : "image",
				start: Object.assign({}, e[s][1].start),
				end: Object.assign({}, e[e.length - 1][1].end)
			},
			a = {
				type: "label",
				start: Object.assign({}, e[s][1].start),
				end: Object.assign({}, e[o][1].end)
			},
			f = {
				type: "labelText",
				start: Object.assign({}, e[s + r + 2][1].end),
				end: Object.assign({}, e[o - 2][1].start)
			};
		return u = [
			["enter", c, t],
			["enter", a, t]
		], u = ee(u, e.slice(s + 1, s + r + 3)), u = ee(u, [
			["enter", f, t]
		]), u = ee(u, ht(t.parser.constructs.insideSpan.null, e.slice(s + r + 4, o - 3), t)), u = ee(u, [
			["exit", f, t], e[o - 2], e[o - 1],
			["exit", a, t]
		]), u = ee(u, e.slice(o + 1)), u = ee(u, [
			["exit", c, t]
		]), le(e, s, e.length, u), e
	}

	function Gi(e, t, n) {
		const r = this;
		let i = r.events.length,
			s, o;
		for (; i--;)
			if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]
				._balanced) {
				s = r.events[i][1];
				break
			} return u;

		function u(m) {
			return s ? s._inactive ? l(m) : (o = r.parser.defined.includes(Ae(r.sliceSerialize({
				start: s.end,
				end: r.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(m), e.exit("labelMarker"), e.exit(
				"labelEnd"), c) : n(m)
		}

		function c(m) {
			return m === 40 ? e.attempt(Vi, f, o ? f : l)(m) : m === 91 ? e.attempt($i, f, o ? a : l)(m) : o ? f(
				m) : l(m)
		}

		function a(m) {
			return e.attempt(Wi, f, l)(m)
		}

		function f(m) {
			return t(m)
		}

		function l(m) {
			return s._balanced = !0, n(m)
		}
	}

	function Ki(e, t, n) {
		return r;

		function r(l) {
			return e.enter("resource"), e.enter("resourceMarker"), e.consume(l), e.exit("resourceMarker"), i
		}

		function i(l) {
			return X(l) ? ze(e, s)(l) : s(l)
		}

		function s(l) {
			return l === 41 ? f(l) : yn(e, o, u, "resourceDestination", "resourceDestinationLiteral",
				"resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(
				l)
		}

		function o(l) {
			return X(l) ? ze(e, c)(l) : f(l)
		}

		function u(l) {
			return n(l)
		}

		function c(l) {
			return l === 34 || l === 39 || l === 40 ? bn(e, a, n, "resourceTitle", "resourceTitleMarker",
				"resourceTitleString")(l) : f(l)
		}

		function a(l) {
			return X(l) ? ze(e, f)(l) : f(l)
		}

		function f(l) {
			return l === 41 ? (e.enter("resourceMarker"), e.consume(l), e.exit("resourceMarker"), e.exit(
				"resource"), t) : n(l)
		}
	}

	function Xi(e, t, n) {
		const r = this;
		return i;

		function i(u) {
			return xn.call(r, e, s, o, "reference", "referenceMarker", "referenceString")(u)
		}

		function s(u) {
			return r.parser.defined.includes(Ae(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ?
				t(u) : n(u)
		}

		function o(u) {
			return n(u)
		}
	}

	function Zi(e, t, n) {
		return r;

		function r(s) {
			return e.enter("reference"), e.enter("referenceMarker"), e.consume(s), e.exit("referenceMarker"), i
		}

		function i(s) {
			return s === 93 ? (e.enter("referenceMarker"), e.consume(s), e.exit("referenceMarker"), e.exit(
				"reference"), t) : n(s)
		}
	}
	const Yi = {
		name: "labelStartImage",
		tokenize: vi,
		resolveAll: gt.resolveAll
	};

	function vi(e, t, n) {
		const r = this;
		return i;

		function i(u) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(u), e.exit("labelImageMarker"), s
		}

		function s(u) {
			return u === 91 ? (e.enter("labelMarker"), e.consume(u), e.exit("labelMarker"), e.exit("labelImage"),
				o) : n(u)
		}

		function o(u) {
			return u === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(u) : t(u)
		}
	}
	const es = {
		name: "labelStartLink",
		tokenize: ts,
		resolveAll: gt.resolveAll
	};

	function ts(e, t, n) {
		const r = this;
		return i;

		function i(o) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit(
				"labelLink"), s
		}

		function s(o) {
			return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o)
		}
	}
	const yt = {
		name: "lineEnding",
		tokenize: ns
	};

	function ns(e, t) {
		return n;

		function n(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), H(e, t, "linePrefix")
		}
	}
	const We = {
		name: "thematicBreak",
		tokenize: rs
	};

	function rs(e, t, n) {
		let r = 0,
			i;
		return s;

		function s(a) {
			return e.enter("thematicBreak"), o(a)
		}

		function o(a) {
			return i = a, u(a)
		}

		function u(a) {
			return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || I(a)) ? (e.exit(
				"thematicBreak"), t(a)) : n(a)
		}

		function c(a) {
			return a === i ? (e.consume(a), r++, c) : (e.exit("thematicBreakSequence"), N(a) ? H(e, u, "whitespace")
				(a) : u(a))
		}
	}
	const Z = {
			name: "list",
			tokenize: os,
			continuation: {
				tokenize: us
			},
			exit: ls
		},
		is = {
			tokenize: cs,
			partial: !0
		},
		ss = {
			tokenize: as,
			partial: !0
		};

	function os(e, t, n) {
		const r = this,
			i = r.events[r.events.length - 1];
		let s = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
			o = 0;
		return u;

		function u(h) {
			const k = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
			if (k === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : ft(h)) {
				if (r.containerState.type || (r.containerState.type = k, e.enter(k, {
						_container: !0
					})), k === "listUnordered") return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(We,
					n, a)(h) : a(h);
				if (!r.interrupt || h === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(h)
			}
			return n(h)
		}

		function c(h) {
			return ft(h) && ++o < 10 ? (e.consume(h), c) : (!r.interrupt || o < 2) && (r.containerState.marker ?
				h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), a(h)) : n(h)
		}

		function a(h) {
			return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r
				.containerState.marker || h, e.check($e, r.interrupt ? n : f, e.attempt(is, m, l))
		}

		function f(h) {
			return r.containerState.initialBlankLine = !0, s++, m(h)
		}

		function l(h) {
			return N(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"),
				m) : n(h)
		}

		function m(h) {
			return r.containerState.size = s + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h)
		}
	}

	function us(e, t, n) {
		const r = this;
		return r.containerState._closeFlow = void 0, e.check($e, i, s);

		function i(u) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState
				.initialBlankLine, H(e, t, "listItemIndent", r.containerState.size + 1)(u)
		}

		function s(u) {
			return r.containerState.furtherBlankLines || !N(u) ? (r.containerState.furtherBlankLines = void 0, r
				.containerState.initialBlankLine = void 0, o(u)) : (r.containerState.furtherBlankLines = void 0,
				r.containerState.initialBlankLine = void 0, e.attempt(ss, t, o)(u))
		}

		function o(u) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, H(e, e.attempt(Z, t, n), "linePrefix", r
				.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(u)
		}
	}

	function as(e, t, n) {
		const r = this;
		return H(e, i, "listItemIndent", r.containerState.size + 1);

		function i(s) {
			const o = r.events[r.events.length - 1];
			return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState
				.size ? t(s) : n(s)
		}
	}

	function ls(e) {
		e.exit(this.containerState.type)
	}

	function cs(e, t, n) {
		const r = this;
		return H(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ?
			void 0 : 4 + 1);

		function i(s) {
			const o = r.events[r.events.length - 1];
			return !N(s) && o && o[1].type === "listItemPrefixWhitespace" ? t(s) : n(s)
		}
	}
	const kn = {
		name: "setextUnderline",
		tokenize: hs,
		resolveTo: fs
	};

	function fs(e, t) {
		let n = e.length,
			r, i, s;
		for (; n--;)
			if (e[n][0] === "enter") {
				if (e[n][1].type === "content") {
					r = n;
					break
				}
				e[n][1].type === "paragraph" && (i = n)
			} else e[n][1].type === "content" && e.splice(n, 1), !s && e[n][1].type === "definition" && (s = n);
		const o = {
			type: "setextHeading",
			start: Object.assign({}, e[i][1].start),
			end: Object.assign({}, e[e.length - 1][1].end)
		};
		return e[i][1].type = "setextHeadingText", s ? (e.splice(i, 0, ["enter", o, t]), e.splice(s + 1, 0, ["exit",
			e[r][1], t
		]), e[r][1].end = Object.assign({}, e[s][1].end)) : e[r][1] = o, e.push(["exit", o, t]), e
	}

	function hs(e, t, n) {
		const r = this;
		let i;
		return s;

		function s(a) {
			let f = r.events.length,
				l;
			for (; f--;)
				if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1]
					.type !== "content") {
					l = r.events[f][1].type === "paragraph";
					break
				} return !r.parser.lazy[r.now().line] && (r.interrupt || l) ? (e.enter("setextHeadingLine"), i = a,
				o(a)) : n(a)
		}

		function o(a) {
			return e.enter("setextHeadingLineSequence"), u(a)
		}

		function u(a) {
			return a === i ? (e.consume(a), u) : (e.exit("setextHeadingLineSequence"), N(a) ? H(e, c, "lineSuffix")(
				a) : c(a))
		}

		function c(a) {
			return a === null || I(a) ? (e.exit("setextHeadingLine"), t(a)) : n(a)
		}
	}
	const ps = {
		tokenize: ds
	};

	function ds(e) {
		const t = this,
			n = e.attempt($e, r, e.attempt(this.parser.constructs.flowInitial, i, H(e, e.attempt(this.parser
				.constructs.flow, i, e.attempt(bi, i)), "linePrefix")));
		return n;

		function r(s) {
			if (s === null) {
				e.consume(s);
				return
			}
			return e.enter("lineEndingBlank"), e.consume(s), e.exit("lineEndingBlank"), t.currentConstruct = void 0,
				n
		}

		function i(s) {
			if (s === null) {
				e.consume(s);
				return
			}
			return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), t.currentConstruct = void 0, n
		}
	}
	const ms = {
			resolveAll: Sn()
		},
		gs = En("string"),
		ys = En("text");

	function En(e) {
		return {
			tokenize: t,
			resolveAll: Sn(e === "text" ? xs : void 0)
		};

		function t(n) {
			const r = this,
				i = this.parser.constructs[e],
				s = n.attempt(i, o, u);
			return o;

			function o(f) {
				return a(f) ? s(f) : u(f)
			}

			function u(f) {
				if (f === null) {
					n.consume(f);
					return
				}
				return n.enter("data"), n.consume(f), c
			}

			function c(f) {
				return a(f) ? (n.exit("data"), s(f)) : (n.consume(f), c)
			}

			function a(f) {
				if (f === null) return !0;
				const l = i[f];
				let m = -1;
				if (l)
					for (; ++m < l.length;) {
						const h = l[m];
						if (!h.previous || h.previous.call(r, r.previous)) return !0
					}
				return !1
			}
		}
	}

	function Sn(e) {
		return t;

		function t(n, r) {
			let i = -1,
				s;
			for (; ++i <= n.length;) s === void 0 ? n[i] && n[i][1].type === "data" && (s = i, i++) : (!n[i] || n[i]
				[1].type !== "data") && (i !== s + 2 && (n[s][1].end = n[i - 1][1].end, n.splice(s + 2, i - s -
				2), i = s + 2), s = void 0);
			return e ? e(n, r) : n
		}
	}

	function xs(e, t) {
		let n = 0;
		for (; ++n <= e.length;)
			if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
				const r = e[n - 1][1],
					i = t.sliceStream(r);
				let s = i.length,
					o = -1,
					u = 0,
					c;
				for (; s--;) {
					const a = i[s];
					if (typeof a == "string") {
						for (o = a.length; a.charCodeAt(o - 1) === 32;) u++, o--;
						if (o) break;
						o = -1
					} else if (a === -2) c = !0, u++;
					else if (a !== -1) {
						s++;
						break
					}
				}
				if (u) {
					const a = {
						type: n === e.length || c || u < 2 ? "lineSuffix" : "hardBreakTrailing",
						start: {
							line: r.end.line,
							column: r.end.column - u,
							offset: r.end.offset - u,
							_index: r.start._index + s,
							_bufferIndex: s ? o : r.start._bufferIndex + o
						},
						end: Object.assign({}, r.end)
					};
					r.end = Object.assign({}, a.start), r.start.offset === r.end.offset ? Object.assign(r, a) : (e
						.splice(n, 0, ["enter", a, t], ["exit", a, t]), n += 2)
				}
				n++
			} return e
	}

	function bs(e, t, n) {
		let r = Object.assign(n ? Object.assign({}, n) : {
			line: 1,
			column: 1,
			offset: 0
		}, {
			_index: 0,
			_bufferIndex: -1
		});
		const i = {},
			s = [];
		let o = [],
			u = [];
		const c = {
				consume: T,
				enter: S,
				exit: L,
				attempt: F(z),
				check: F(g),
				interrupt: F(g, {
					interrupt: !0
				})
			},
			a = {
				previous: null,
				code: null,
				containerState: {},
				events: [],
				parser: e,
				sliceStream: h,
				sliceSerialize: m,
				now: k,
				defineSkip: b,
				write: l
			};
		let f = t.tokenize.call(a, c);
		return t.resolveAll && s.push(t), a;

		function l(O) {
			return o = ee(o, O), A(), o[o.length - 1] !== null ? [] : (D(t, 0), a.events = ht(s, a.events, a), a
				.events)
		}

		function m(O, C) {
			return ks(h(O), C)
		}

		function h(O) {
			return ws(o, O)
		}

		function k() {
			const {
				line: O,
				column: C,
				offset: q,
				_index: V,
				_bufferIndex: B
			} = r;
			return {
				line: O,
				column: C,
				offset: q,
				_index: V,
				_bufferIndex: B
			}
		}

		function b(O) {
			i[O.line] = O.column, J()
		}

		function A() {
			let O;
			for (; r._index < o.length;) {
				const C = o[r._index];
				if (typeof C == "string")
					for (O = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === O && r
						._bufferIndex < C.length;) x(C.charCodeAt(r._bufferIndex));
				else x(C)
			}
		}

		function x(O) {
			f = f(O)
		}

		function T(O) {
			I(O) ? (r.line++, r.column = 1, r.offset += O === -3 ? 2 : 1, J()) : O !== -1 && (r.column++, r
				.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index]
				.length && (r._bufferIndex = -1, r._index++)), a.previous = O
		}

		function S(O, C) {
			const q = C || {};
			return q.type = O, q.start = k(), a.events.push(["enter", q, a]), u.push(q), q
		}

		function L(O) {
			const C = u.pop();
			return C.end = k(), a.events.push(["exit", C, a]), C
		}

		function z(O, C) {
			D(O, C.from)
		}

		function g(O, C) {
			C.restore()
		}

		function F(O, C) {
			return q;

			function q(V, B, K) {
				let Q, ie, de, p;
				return Array.isArray(V) ? me(V) : "tokenize" in V ? me([V]) : se(V);

				function se(G) {
					return Te;

					function Te(ke) {
						const Ie = ke !== null && G[ke],
							Pe = ke !== null && G.null,
							zt = [...Array.isArray(Ie) ? Ie : Ie ? [Ie] : [], ...Array.isArray(Pe) ? Pe : Pe ? [
								Pe] : []
							];
						return me(zt)(ke)
					}
				}

				function me(G) {
					return Q = G, ie = 0, G.length === 0 ? K : d(G[ie])
				}

				function d(G) {
					return Te;

					function Te(ke) {
						return p = j(), de = G, G.partial || (a.currentConstruct = G), G.name && a.parser.constructs
							.disable.null.includes(G.name) ? Fe() : G.tokenize.call(C ? Object.assign(Object.create(
								a), C) : a, c, oe, Fe)(ke)
					}
				}

				function oe(G) {
					return O(de, p), B
				}

				function Fe(G) {
					return p.restore(), ++ie < Q.length ? d(Q[ie]) : K
				}
			}
		}

		function D(O, C) {
			O.resolveAll && !s.includes(O) && s.push(O), O.resolve && le(a.events, C, a.events.length - C, O
				.resolve(a.events.slice(C), a)), O.resolveTo && (a.events = O.resolveTo(a.events, a))
		}

		function j() {
			const O = k(),
				C = a.previous,
				q = a.currentConstruct,
				V = a.events.length,
				B = Array.from(u);
			return {
				restore: K,
				from: V
			};

			function K() {
				r = O, a.previous = C, a.currentConstruct = q, a.events.length = V, u = B, J()
			}
		}

		function J() {
			r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
		}
	}

	function ws(e, t) {
		const n = t.start._index,
			r = t.start._bufferIndex,
			i = t.end._index,
			s = t.end._bufferIndex;
		let o;
		if (n === i) o = [e[n].slice(r, s)];
		else {
			if (o = e.slice(n, i), r > -1) {
				const u = o[0];
				typeof u == "string" ? o[0] = u.slice(r) : o.shift()
			}
			s > 0 && o.push(e[i].slice(0, s))
		}
		return o
	}

	function ks(e, t) {
		let n = -1;
		const r = [];
		let i;
		for (; ++n < e.length;) {
			const s = e[n];
			let o;
			if (typeof s == "string") o = s;
			else switch (s) {
				case -5: {
					o = "\r";
					break
				}
				case -4: {
					o = `
`;
					break
				}
				case -3: {
					o = `\r
`;
					break
				}
				case -2: {
					o = t ? " " : "	";
					break
				}
				case -1: {
					if (!t && i) continue;
					o = " ";
					break
				}
				default:
					o = String.fromCharCode(s)
			}
			i = s === -2, r.push(o)
		}
		return r.join("")
	}
	const Es = Object.freeze(Object.defineProperty({
		__proto__: null,
		attentionMarkers: {
			null: [42, 95]
		},
		contentInitial: {
			91: Ai
		},
		disable: {
			null: []
		},
		document: {
			42: Z,
			43: Z,
			45: Z,
			48: Z,
			49: Z,
			50: Z,
			51: Z,
			52: Z,
			53: Z,
			54: Z,
			55: Z,
			56: Z,
			57: Z,
			62: cn
		},
		flow: {
			35: Pi,
			42: We,
			45: [kn, We],
			60: _i,
			61: kn,
			95: We,
			96: mn,
			126: mn
		},
		flowInitial: {
			[-2]: mt,
			[-1]: mt,
			32: mt
		},
		insideSpan: {
			null: [pt, ms]
		},
		string: {
			38: pn,
			92: fn
		},
		text: {
			[-5]: yt,
			[-4]: yt,
			[-3]: yt,
			33: Yi,
			38: pn,
			42: pt,
			60: [ti, Hi],
			91: es,
			92: [Ti, fn],
			93: gt,
			95: pt,
			96: di
		}
	}, Symbol.toStringTag, {
		value: "Module"
	}));

	function Ss(e) {
		const n = Mr([Es, ...(e || {}).extensions || []]),
			r = {
				defined: [],
				lazy: {},
				constructs: n,
				content: i(Gr),
				document: i(Xr),
				flow: i(ps),
				string: i(gs),
				text: i(ys)
			};
		return r;

		function i(s) {
			return o;

			function o(u) {
				return bs(r, s, u)
			}
		}
	}
	const An = /[\0\t\n\r]/g;

	function As() {
		let e = 1,
			t = "",
			n = !0,
			r;
		return i;

		function i(s, o, u) {
			const c = [];
			let a, f, l, m, h;
			for (s = t + s.toString(o), l = 0, t = "", n && (s.charCodeAt(0) === 65279 && l++, n = void 0); l < s
				.length;) {
				if (An.lastIndex = l, a = An.exec(s), m = a && a.index !== void 0 ? a.index : s.length, h = s
					.charCodeAt(m), !a) {
					t = s.slice(l);
					break
				}
				if (h === 10 && l === m && r) c.push(-3), r = void 0;
				else switch (r && (c.push(-5), r = void 0), l < m && (c.push(s.slice(l, m)), e += m - l), h) {
					case 0: {
						c.push(65533), e++;
						break
					}
					case 9: {
						for (f = Math.ceil(e / 4) * 4, c.push(-2); e++ < f;) c.push(-1);
						break
					}
					case 10: {
						c.push(-4), e = 1;
						break
					}
					default:
						r = !0, e = 1
				}
				l = m + 1
			}
			return u && (r && c.push(-5), t && c.push(t), c.push(null)), c
		}
	}

	function Os(e) {
		for (; !gn(e););
		return e
	}

	function On(e, t) {
		const n = Number.parseInt(e, t);
		return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 &&
			n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "�" : String.fromCharCode(
				n)
	}
	const Cs = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

	function Fs(e) {
		return e.replace(Cs, Ts)
	}

	function Ts(e, t, n) {
		if (t) return t;
		if (n.charCodeAt(0) === 35) {
			const i = n.charCodeAt(1),
				s = i === 120 || i === 88;
			return On(n.slice(s ? 2 : 1), s ? 16 : 10)
		}
		return dt(n) || e
	}
	const Cn = {}.hasOwnProperty,
		Is = function(e, t, n) {
			return typeof t != "string" && (n = t, t = void 0), Ps(n)(Os(Ss(n).document().write(As()(e, t, !0))))
		};

	function Ps(e) {
		const t = {
			transforms: [],
			canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
			enter: {
				autolink: u(dr),
				autolinkProtocol: O,
				autolinkEmail: O,
				atxHeading: u(fr),
				blockQuote: u(zt),
				characterEscape: O,
				characterReference: O,
				codeFenced: u(cr),
				codeFencedFenceInfo: c,
				codeFencedFenceMeta: c,
				codeIndented: u(cr, c),
				codeText: u(nu, c),
				codeTextData: O,
				data: O,
				codeFlowValue: O,
				definition: u(ru),
				definitionDestinationString: c,
				definitionLabelString: c,
				definitionTitleString: c,
				emphasis: u(iu),
				hardBreakEscape: u(hr),
				hardBreakTrailing: u(hr),
				htmlFlow: u(pr, c),
				htmlFlowData: O,
				htmlText: u(pr, c),
				htmlTextData: O,
				image: u(su),
				label: c,
				link: u(dr),
				listItem: u(ou),
				listItemValue: k,
				listOrdered: u(mr, h),
				listUnordered: u(mr),
				paragraph: u(uu),
				reference: Fe,
				referenceString: c,
				resourceDestinationString: c,
				resourceTitleString: c,
				setextHeading: u(fr),
				strong: u(au),
				thematicBreak: u(cu)
			},
			exit: {
				atxHeading: f(),
				atxHeadingSequence: F,
				autolink: f(),
				autolinkEmail: Pe,
				autolinkProtocol: Ie,
				blockQuote: f(),
				characterEscapeValue: C,
				characterReferenceMarkerHexadecimal: Te,
				characterReferenceMarkerNumeric: Te,
				characterReferenceValue: ke,
				codeFenced: f(T),
				codeFencedFence: x,
				codeFencedFenceInfo: b,
				codeFencedFenceMeta: A,
				codeFlowValue: C,
				codeIndented: f(S),
				codeText: f(Q),
				codeTextData: C,
				data: C,
				definition: f(),
				definitionDestinationString: g,
				definitionLabelString: L,
				definitionTitleString: z,
				emphasis: f(),
				hardBreakEscape: f(V),
				hardBreakTrailing: f(V),
				htmlFlow: f(B),
				htmlFlowData: C,
				htmlText: f(K),
				htmlTextData: C,
				image: f(de),
				label: se,
				labelText: p,
				lineEnding: q,
				link: f(ie),
				listItem: f(),
				listOrdered: f(),
				listUnordered: f(),
				paragraph: f(),
				referenceString: G,
				resourceDestinationString: me,
				resourceTitleString: d,
				resource: oe,
				setextHeading: f(J),
				setextHeadingLineSequence: j,
				setextHeadingText: D,
				strong: f(),
				thematicBreak: f()
			}
		};
		Fn(t, (e || {}).mdastExtensions || []);
		const n = {};
		return r;

		function r(y) {
			let E = {
				type: "root",
				children: []
			};
			const P = {
					stack: [E],
					tokenStack: [],
					config: t,
					enter: a,
					exit: l,
					buffer: c,
					resume: m,
					setData: s,
					getData: o
				},
				M = [];
			let U = -1;
			for (; ++U < y.length;)
				if (y[U][1].type === "listOrdered" || y[U][1].type === "listUnordered")
					if (y[U][0] === "enter") M.push(U);
					else {
						const ue = M.pop();
						U = i(y, ue, U)
					} for (U = -1; ++U < y.length;) {
				const ue = t[y[U][0]];
				Cn.call(ue, y[U][1].type) && ue[y[U][1].type].call(Object.assign({
					sliceSerialize: y[U][2].sliceSerialize
				}, P), y[U][1])
			}
			if (P.tokenStack.length > 0) {
				const ue = P.tokenStack[P.tokenStack.length - 1];
				(ue[1] || Tn).call(P, void 0, ue[0])
			}
			for (E.position = {
					start: be(y.length > 0 ? y[0][1].start : {
						line: 1,
						column: 1,
						offset: 0
					}),
					end: be(y.length > 0 ? y[y.length - 2][1].end : {
						line: 1,
						column: 1,
						offset: 0
					})
				}, U = -1; ++U < t.transforms.length;) E = t.transforms[U](E) || E;
			return E
		}

		function i(y, E, P) {
			let M = E - 1,
				U = -1,
				ue = !1,
				Ee, ge, He, qe;
			for (; ++M <= P;) {
				const $ = y[M];
				if ($[1].type === "listUnordered" || $[1].type === "listOrdered" || $[1].type === "blockQuote" ? ($[
						0] === "enter" ? U++ : U--, qe = void 0) : $[1].type === "lineEndingBlank" ? $[0] ===
					"enter" && (Ee && !qe && !U && !He && (He = M), qe = void 0) : $[1].type === "linePrefix" || $[
						1].type === "listItemValue" || $[1].type === "listItemMarker" || $[1].type ===
					"listItemPrefix" || $[1].type === "listItemPrefixWhitespace" || (qe = void 0), !U && $[0] ===
					"enter" && $[1].type === "listItemPrefix" || U === -1 && $[0] === "exit" && ($[1].type ===
						"listUnordered" || $[1].type === "listOrdered")) {
					if (Ee) {
						let Bt = M;
						for (ge = void 0; Bt--;) {
							const ye = y[Bt];
							if (ye[1].type === "lineEnding" || ye[1].type === "lineEndingBlank") {
								if (ye[0] === "exit") continue;
								ge && (y[ge][1].type = "lineEndingBlank", ue = !0), ye[1].type = "lineEnding", ge =
									Bt
							} else if (!(ye[1].type === "linePrefix" || ye[1].type === "blockQuotePrefix" || ye[1]
									.type === "blockQuotePrefixWhitespace" || ye[1].type === "blockQuoteMarker" ||
									ye[1].type === "listItemIndent")) break
						}
						He && (!ge || He < ge) && (Ee._spread = !0), Ee.end = Object.assign({}, ge ? y[ge][1]
							.start : $[1].end), y.splice(ge || M, 0, ["exit", Ee, $[2]]), M++, P++
					}
					$[1].type === "listItemPrefix" && (Ee = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, $[1].start),
						end: void 0
					}, y.splice(M, 0, ["enter", Ee, $[2]]), M++, P++, He = void 0, qe = !0)
				}
			}
			return y[E][1]._spread = ue, P
		}

		function s(y, E) {
			n[y] = E
		}

		function o(y) {
			return n[y]
		}

		function u(y, E) {
			return P;

			function P(M) {
				a.call(this, y(M), M), E && E.call(this, M)
			}
		}

		function c() {
			this.stack.push({
				type: "fragment",
				children: []
			})
		}

		function a(y, E, P) {
			return this.stack[this.stack.length - 1].children.push(y), this.stack.push(y), this.tokenStack.push([E,
				P
			]), y.position = {
				start: be(E.start)
			}, y
		}

		function f(y) {
			return E;

			function E(P) {
				y && y.call(this, P), l.call(this, P)
			}
		}

		function l(y, E) {
			const P = this.stack.pop(),
				M = this.tokenStack.pop();
			if (M) M[0].type !== y.type && (E ? E.call(this, y, M[0]) : (M[1] || Tn).call(this, y, M[0]));
			else throw new Error("Cannot close `" + y.type + "` (" + Le({
				start: y.start,
				end: y.end
			}) + "): it’s not open");
			return P.position.end = be(y.end), P
		}

		function m() {
			return Nr(this.stack.pop())
		}

		function h() {
			s("expectingFirstListItemValue", !0)
		}

		function k(y) {
			if (o("expectingFirstListItemValue")) {
				const E = this.stack[this.stack.length - 2];
				E.start = Number.parseInt(this.sliceSerialize(y), 10), s("expectingFirstListItemValue")
			}
		}

		function b() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.lang = y
		}

		function A() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.meta = y
		}

		function x() {
			o("flowCodeInside") || (this.buffer(), s("flowCodeInside", !0))
		}

		function T() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.value = y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), s("flowCodeInside")
		}

		function S() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.value = y.replace(/(\r?\n|\r)$/g, "")
		}

		function L(y) {
			const E = this.resume(),
				P = this.stack[this.stack.length - 1];
			P.label = E, P.identifier = Ae(this.sliceSerialize(y)).toLowerCase()
		}

		function z() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.title = y
		}

		function g() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.url = y
		}

		function F(y) {
			const E = this.stack[this.stack.length - 1];
			if (!E.depth) {
				const P = this.sliceSerialize(y).length;
				E.depth = P
			}
		}

		function D() {
			s("setextHeadingSlurpLineEnding", !0)
		}

		function j(y) {
			const E = this.stack[this.stack.length - 1];
			E.depth = this.sliceSerialize(y).charCodeAt(0) === 61 ? 1 : 2
		}

		function J() {
			s("setextHeadingSlurpLineEnding")
		}

		function O(y) {
			const E = this.stack[this.stack.length - 1];
			let P = E.children[E.children.length - 1];
			(!P || P.type !== "text") && (P = lu(), P.position = {
				start: be(y.start)
			}, E.children.push(P)), this.stack.push(P)
		}

		function C(y) {
			const E = this.stack.pop();
			E.value += this.sliceSerialize(y), E.position.end = be(y.end)
		}

		function q(y) {
			const E = this.stack[this.stack.length - 1];
			if (o("atHardBreak")) {
				const P = E.children[E.children.length - 1];
				P.position.end = be(y.end), s("atHardBreak");
				return
			}!o("setextHeadingSlurpLineEnding") && t.canContainEols.includes(E.type) && (O.call(this, y), C.call(
				this, y))
		}

		function V() {
			s("atHardBreak", !0)
		}

		function B() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.value = y
		}

		function K() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.value = y
		}

		function Q() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.value = y
		}

		function ie() {
			const y = this.stack[this.stack.length - 1];
			if (o("inReference")) {
				const E = o("referenceType") || "shortcut";
				y.type += "Reference", y.referenceType = E, delete y.url, delete y.title
			} else delete y.identifier, delete y.label;
			s("referenceType")
		}

		function de() {
			const y = this.stack[this.stack.length - 1];
			if (o("inReference")) {
				const E = o("referenceType") || "shortcut";
				y.type += "Reference", y.referenceType = E, delete y.url, delete y.title
			} else delete y.identifier, delete y.label;
			s("referenceType")
		}

		function p(y) {
			const E = this.sliceSerialize(y),
				P = this.stack[this.stack.length - 2];
			P.label = Fs(E), P.identifier = Ae(E).toLowerCase()
		}

		function se() {
			const y = this.stack[this.stack.length - 1],
				E = this.resume(),
				P = this.stack[this.stack.length - 1];
			if (s("inReference", !0), P.type === "link") {
				const M = y.children;
				P.children = M
			} else P.alt = E
		}

		function me() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.url = y
		}

		function d() {
			const y = this.resume(),
				E = this.stack[this.stack.length - 1];
			E.title = y
		}

		function oe() {
			s("inReference")
		}

		function Fe() {
			s("referenceType", "collapsed")
		}

		function G(y) {
			const E = this.resume(),
				P = this.stack[this.stack.length - 1];
			P.label = E, P.identifier = Ae(this.sliceSerialize(y)).toLowerCase(), s("referenceType", "full")
		}

		function Te(y) {
			s("characterReferenceType", y.type)
		}

		function ke(y) {
			const E = this.sliceSerialize(y),
				P = o("characterReferenceType");
			let M;
			P ? (M = On(E, P === "characterReferenceMarkerNumeric" ? 10 : 16), s("characterReferenceType")) : M =
				dt(E);
			const U = this.stack.pop();
			U.value += M, U.position.end = be(y.end)
		}

		function Ie(y) {
			C.call(this, y);
			const E = this.stack[this.stack.length - 1];
			E.url = this.sliceSerialize(y)
		}

		function Pe(y) {
			C.call(this, y);
			const E = this.stack[this.stack.length - 1];
			E.url = "mailto:" + this.sliceSerialize(y)
		}

		function zt() {
			return {
				type: "blockquote",
				children: []
			}
		}

		function cr() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			}
		}

		function nu() {
			return {
				type: "inlineCode",
				value: ""
			}
		}

		function ru() {
			return {
				type: "definition",
				identifier: "",
				label: null,
				title: null,
				url: ""
			}
		}

		function iu() {
			return {
				type: "emphasis",
				children: []
			}
		}

		function fr() {
			return {
				type: "heading",
				depth: void 0,
				children: []
			}
		}

		function hr() {
			return {
				type: "break"
			}
		}

		function pr() {
			return {
				type: "html",
				value: ""
			}
		}

		function su() {
			return {
				type: "image",
				title: null,
				url: "",
				alt: null
			}
		}

		function dr() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			}
		}

		function mr(y) {
			return {
				type: "list",
				ordered: y.type === "listOrdered",
				start: null,
				spread: y._spread,
				children: []
			}
		}

		function ou(y) {
			return {
				type: "listItem",
				spread: y._spread,
				checked: null,
				children: []
			}
		}

		function uu() {
			return {
				type: "paragraph",
				children: []
			}
		}

		function au() {
			return {
				type: "strong",
				children: []
			}
		}

		function lu() {
			return {
				type: "text",
				value: ""
			}
		}

		function cu() {
			return {
				type: "thematicBreak"
			}
		}
	}

	function be(e) {
		return {
			line: e.line,
			column: e.column,
			offset: e.offset
		}
	}

	function Fn(e, t) {
		let n = -1;
		for (; ++n < t.length;) {
			const r = t[n];
			Array.isArray(r) ? Fn(e, r) : Rs(e, r)
		}
	}

	function Rs(e, t) {
		let n;
		for (n in t)
			if (Cn.call(t, n)) {
				if (n === "canContainEols") {
					const r = t[n];
					r && e[n].push(...r)
				} else if (n === "transforms") {
					const r = t[n];
					r && e[n].push(...r)
				} else if (n === "enter" || n === "exit") {
					const r = t[n];
					r && Object.assign(e[n], r)
				}
			}
	}

	function Tn(e, t) {
		throw e ? new Error("Cannot close `" + e.type + "` (" + Le({
			start: e.start,
			end: e.end
		}) + "): a different token (`" + t.type + "`, " + Le({
			start: t.start,
			end: t.end
		}) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Le({
			start: t.start,
			end: t.end
		}) + ") is still open")
	}

	function Ls(e) {
		Object.assign(this, {
			Parser: n => {
				const r = this.data("settings");
				return Is(n, Object.assign({}, r, e, {
					extensions: this.data("micromarkExtensions") || [],
					mdastExtensions: this.data("fromMarkdownExtensions") || []
				}))
			}
		})
	}

	function Ds(e, t = "zh") {
		const n = e[0].children,
			r = n.findIndex(c => c.type == "catalog");
		r > -1 && n.splice(r, 1);
		const i = n.findIndex(c => c.type == "ending");
		i > -1 && n.splice(i, 1);
		const s = {
				zh: {
					catalog: "目录",
					ending: "结语"
				},
				en: {
					catalog: "catalog",
					ending: "ending"
				}
			},
			o = {
				type: "catalog",
				value: s[t].catalog,
				depth: 2,
				children: []
			},
			u = {
				type: "ending",
				value: s[t].ending,
				depth: 2,
				children: []
			};
		for (const c of n) o.children.push({
			type: "title",
			value: c.value,
			depth: 3,
			children: [],
			parentId: 1,
			id: 100
		});
		n.unshift(o), n.push(u)
	}

	function xt(e, t = e[0], n = 0, r = 0, i = 0, s = 0) {
		n++;
		for (let o = 0; o < e.length; o++) {
			const u = e[o];
			if (r++, u.depth = n, u.sort = o, u.parent = t, u.direction = 1, u.expanded = !0, u.id = r, u
				.showTip = !1, u.parentId = i, u.value = _s(u.value), n < 4 && u.parent.type != "catalog" && (s++, u
					.pageIndex = s), u.type != "catalog" && u.type != "ending" && (u.depth < 5 ? u.type = "title" :
					u.type = "text"), u.children && u.children.length) {
				const {
					id: c,
					pageIndex: a
				} = xt(u.children, u, n, r, u.id, s);
				r = c, s = a
			} else u.children = []
		}
		return {
			id: r,
			pageIndex: s
		}
	}

	function _s(e) {
		return e != null && e != "" ? e.replace(/\v/g, "") : ""
	}
	const zs = /\n?(#\s+.*)/,
		Bs = /(#[^#].*)|(-\S)/g;

	function Ns(e) {
		let t = (e || "").trim().replace(/\xa0/g, " ").replace("```", "").replace(`
n`, `
`);
		const n = t.match(zs);
		if (n != null && n[1] != null) {
			const r = t.indexOf(n[1]);
			t = t.slice(r)
		}
		return t = t.replace(Bs, r => {
			const i = r.slice(0, 1),
				s = r.slice(1);
			return i + " " + s
		}), t
	}

	function js(e) {
		const t = Lr().use(Ls).parse(e);
		return Hs(t.children)
	}

	function Ms(e, t) {
		const n = e.filter(r => r.depth == t - 1);
		return n.length > 0 ? n[n.length - 1] : null
	}

	function Us(e, t = []) {
		for (const n of e) n.value ? t.push(n.value) : n.children && n.children.length > 0 && t.push(...n.children
			.map(r => r.value));
		return t.join("")
	}

	function In(e, t = [], n) {
		for (const r of e)
			if (r.type == "paragraph" && t.push({
					type: n == 5 ? "text" : "title",
					value: Us(r.children),
					originType: "paragraph"
				}), r.type == "list") {
				const i = [];
				for (const s of r.children) {
					let o = In(s.children, [], n + 1);
					o = o.map(u => ({
						...u,
						originType: "list"
					})), i.push(...o)
				}
				if (t.length > 0) {
					const s = t[t.length - 1];
					s.children = i
				} else t.push(...i)
			} return t
	}

	function Hs(e) {
		var s, o;
		const t = e.filter(u => u.type == "heading" || u.type == "paragraph" || u.type == "list"),
			n = [];
		let r = 0;
		for (let u = 0; u < t.length; u++) {
			const c = t[u];
			c.id = u + 1;
			const a = {
				type: "",
				depth: 0,
				id: c.id,
				parentId: 0,
				value: "",
				children: [],
				index: 0
			};
			if (c.type == "heading") {
				if (c.depth == 1) {
					if (r > 0) continue;
					r++
				}
				a.type = "title", a.depth = c.depth, a.value = (s = c.children[0]) == null ? void 0 : s.value, a
					.parentId = ((o = Ms(n, c.depth)) == null ? void 0 : o.id) || 0
			} else {
				const f = n.filter(h => h.type == "title"),
					l = f[f.length - 1];
				if (a.id == 2) {
					l.value += c.children[0].value;
					continue
				}
				a.depth = l.depth + 1, a.parentId = l.id, a.type = c.type, a.depth = l.depth + 1;
				const m = In([c], [], a.depth);
				a.children = m
			}
			n.push(a)
		}
		const i = qs(n);
		return Pn(i), xt(i), Rn(i), Ds(i), xt(i), i
	}

	function qs(e) {
		if (!Array.isArray(e) || !e.length) return;
		const t = {};
		e.forEach(r => t[r.id] = r);
		const n = [];
		return e.forEach(r => {
			r.id == 0 && (r.root = !0);
			const i = t[r.parentId];
			i ? r.type == "paragraph" || r.type == "list" ? (i.children || (i.children = [])).push(...r
					.children) : (i.children || (i.children = [])).push(r) : r.type == "paragraph" || r
				.type == "list" ? n.push(...r.children) : n.push(r)
		}), n
	}

	function Pn(e) {
		for (const t of e) t.type == "title" && (!t.children || t.children.length == 0) ? t.lastLevel = !0 : t
			.children && t.children.length > 0 && Pn(t.children)
	}

	function Rn(e) {
		for (let t = e.length - 1; t >= 0; t--) {
			const n = e[t];
			n.del && e.splice(t, 1), n.children && n.children.length > 0 && Rn(n.children)
		}
	}

	function Vs(e) {
		return js(Ns(e))
	}

	function Ln(e, t) {
		return function() {
			return e.apply(t, arguments)
		}
	}
	const {
		toString: $s
	} = Object.prototype, {
		getPrototypeOf: bt
	} = Object, Je = (e => t => {
		const n = $s.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
	})(Object.create(null)), fe = e => (e = e.toLowerCase(), t => Je(t) === e), Qe = e => t => typeof t === e, {
		isArray: Oe
	} = Array, Be = Qe("undefined");

	function Ws(e) {
		return e !== null && !Be(e) && e.constructor !== null && !Be(e.constructor) && te(e.constructor.isBuffer) &&
			e.constructor.isBuffer(e)
	}
	const Dn = fe("ArrayBuffer");

	function Js(e) {
		let t;
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Dn(
			e.buffer), t
	}
	const Qs = Qe("string"),
		te = Qe("function"),
		_n = Qe("number"),
		Ge = e => e !== null && typeof e == "object",
		Gs = e => e === !0 || e === !1,
		Ke = e => {
			if (Je(e) !== "object") return !1;
			const t = bt(e);
			return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol
				.toStringTag in e) && !(Symbol.iterator in e)
		},
		Ks = fe("Date"),
		Xs = fe("File"),
		Zs = fe("Blob"),
		Ys = fe("FileList"),
		vs = e => Ge(e) && te(e.pipe),
		eo = e => {
			let t;
			return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((t = Je(e)) ===
				"formdata" || t === "object" && te(e.toString) && e.toString() === "[object FormData]"))
		},
		to = fe("URLSearchParams"),
		no = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

	function Ne(e, t, {
		allOwnKeys: n = !1
	} = {}) {
		if (e === null || typeof e > "u") return;
		let r, i;
		if (typeof e != "object" && (e = [e]), Oe(e))
			for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
		else {
			const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
				o = s.length;
			let u;
			for (r = 0; r < o; r++) u = s[r], t.call(null, e[u], u, e)
		}
	}

	function zn(e, t) {
		t = t.toLowerCase();
		const n = Object.keys(e);
		let r = n.length,
			i;
		for (; r-- > 0;)
			if (i = n[r], t === i.toLowerCase()) return i;
		return null
	}
	const Bn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ?
			window : global)(),
		Nn = e => !Be(e) && e !== Bn;

	function wt() {
		const {
			caseless: e
		} = Nn(this) && this || {}, t = {}, n = (r, i) => {
			const s = e && zn(t, i) || i;
			Ke(t[s]) && Ke(r) ? t[s] = wt(t[s], r) : Ke(r) ? t[s] = wt({}, r) : Oe(r) ? t[s] = r.slice() : t[
				s] = r
		};
		for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Ne(arguments[r], n);
		return t
	}
	const ro = (e, t, n, {
			allOwnKeys: r
		} = {}) => (Ne(t, (i, s) => {
			n && te(i) ? e[s] = Ln(i, n) : e[s] = i
		}, {
			allOwnKeys: r
		}), e),
		io = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
		so = (e, t, n, r) => {
			e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e,
				"super", {
					value: t.prototype
				}), n && Object.assign(e.prototype, n)
		},
		oo = (e, t, n, r) => {
			let i, s, o;
			const u = {};
			if (t = t || {}, e == null) return t;
			do {
				for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0;) o = i[s], (!r || r(o, e, t)) && !u[
					o] && (t[o] = e[o], u[o] = !0);
				e = n !== !1 && bt(e)
			} while (e && (!n || n(e, t)) && e !== Object.prototype);
			return t
		},
		uo = (e, t, n) => {
			e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
			const r = e.indexOf(t, n);
			return r !== -1 && r === n
		},
		ao = e => {
			if (!e) return null;
			if (Oe(e)) return e;
			let t = e.length;
			if (!_n(t)) return null;
			const n = new Array(t);
			for (; t-- > 0;) n[t] = e[t];
			return n
		},
		lo = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && bt(Uint8Array)),
		co = (e, t) => {
			const r = (e && e[Symbol.iterator]).call(e);
			let i;
			for (;
				(i = r.next()) && !i.done;) {
				const s = i.value;
				t.call(e, s[0], s[1])
			}
		},
		fo = (e, t) => {
			let n;
			const r = [];
			for (;
				(n = e.exec(t)) !== null;) r.push(n);
			return r
		},
		ho = fe("HTMLFormElement"),
		po = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
			return r.toUpperCase() + i
		}),
		jn = (({
			hasOwnProperty: e
		}) => (t, n) => e.call(t, n))(Object.prototype),
		mo = fe("RegExp"),
		Mn = (e, t) => {
			const n = Object.getOwnPropertyDescriptors(e),
				r = {};
			Ne(n, (i, s) => {
				let o;
				(o = t(i, s, e)) !== !1 && (r[s] = o || i)
			}), Object.defineProperties(e, r)
		},
		go = e => {
			Mn(e, (t, n) => {
				if (te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
				const r = e[n];
				if (te(r)) {
					if (t.enumerable = !1, "writable" in t) {
						t.writable = !1;
						return
					}
					t.set || (t.set = () => {
						throw Error("Can not rewrite read-only method '" + n + "'")
					})
				}
			})
		},
		yo = (e, t) => {
			const n = {},
				r = i => {
					i.forEach(s => {
						n[s] = !0
					})
				};
			return Oe(e) ? r(e) : r(String(e).split(t)), n
		},
		xo = () => {},
		bo = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
		kt = "abcdefghijklmnopqrstuvwxyz",
		Un = "0123456789",
		Hn = {
			DIGIT: Un,
			ALPHA: kt,
			ALPHA_DIGIT: kt + kt.toUpperCase() + Un
		},
		wo = (e = 16, t = Hn.ALPHA_DIGIT) => {
			let n = "";
			const {
				length: r
			} = t;
			for (; e--;) n += t[Math.random() * r | 0];
			return n
		};

	function ko(e) {
		return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
	}
	const Eo = e => {
			const t = new Array(10),
				n = (r, i) => {
					if (Ge(r)) {
						if (t.indexOf(r) >= 0) return;
						if (!("toJSON" in r)) {
							t[i] = r;
							const s = Oe(r) ? [] : {};
							return Ne(r, (o, u) => {
								const c = n(o, i + 1);
								!Be(c) && (s[u] = c)
							}), t[i] = void 0, s
						}
					}
					return r
				};
			return n(e, 0)
		},
		So = fe("AsyncFunction"),
		w = {
			isArray: Oe,
			isArrayBuffer: Dn,
			isBuffer: Ws,
			isFormData: eo,
			isArrayBufferView: Js,
			isString: Qs,
			isNumber: _n,
			isBoolean: Gs,
			isObject: Ge,
			isPlainObject: Ke,
			isUndefined: Be,
			isDate: Ks,
			isFile: Xs,
			isBlob: Zs,
			isRegExp: mo,
			isFunction: te,
			isStream: vs,
			isURLSearchParams: to,
			isTypedArray: lo,
			isFileList: Ys,
			forEach: Ne,
			merge: wt,
			extend: ro,
			trim: no,
			stripBOM: io,
			inherits: so,
			toFlatObject: oo,
			kindOf: Je,
			kindOfTest: fe,
			endsWith: uo,
			toArray: ao,
			forEachEntry: co,
			matchAll: fo,
			isHTMLForm: ho,
			hasOwnProperty: jn,
			hasOwnProp: jn,
			reduceDescriptors: Mn,
			freezeMethods: go,
			toObjectSet: yo,
			toCamelCase: po,
			noop: xo,
			toFiniteNumber: bo,
			findKey: zn,
			global: Bn,
			isContextDefined: Nn,
			ALPHABET: Hn,
			generateString: wo,
			isSpecCompliantForm: ko,
			toJSONObject: Eo,
			isAsyncFn: So,
			isThenable: e => e && (Ge(e) || te(e)) && te(e.then) && te(e.catch)
		};

	function _(e, t, n, r, i) {
		Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack =
			new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config =
				n), r && (this.request = r), i && (this.response = i)
	}
	w.inherits(_, Error, {
		toJSON: function() {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: w.toJSONObject(this.config),
				code: this.code,
				status: this.response && this.response.status ? this.response.status : null
			}
		}
	});
	const qn = _.prototype,
		Vn = {};
	["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK",
		"ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED",
		"ERR_NOT_SUPPORT", "ERR_INVALID_URL"
	].forEach(e => {
		Vn[e] = {
			value: e
		}
	}), Object.defineProperties(_, Vn), Object.defineProperty(qn, "isAxiosError", {
		value: !0
	}), _.from = (e, t, n, r, i, s) => {
		const o = Object.create(qn);
		return w.toFlatObject(e, o, function(c) {
				return c !== Error.prototype
			}, u => u !== "isAxiosError"), _.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, s &&
			Object.assign(o, s), o
	};
	const Ao = null;

	function Et(e) {
		return w.isPlainObject(e) || w.isArray(e)
	}

	function $n(e) {
		return w.endsWith(e, "[]") ? e.slice(0, -2) : e
	}

	function Wn(e, t, n) {
		return e ? e.concat(t).map(function(i, s) {
			return i = $n(i), !n && s ? "[" + i + "]" : i
		}).join(n ? "." : "") : t
	}

	function Oo(e) {
		return w.isArray(e) && !e.some(Et)
	}
	const Co = w.toFlatObject(w, {}, null, function(t) {
		return /^is[A-Z]/.test(t)
	});

	function Xe(e, t, n) {
		if (!w.isObject(e)) throw new TypeError("target must be an object");
		t = t || new FormData, n = w.toFlatObject(n, {
			metaTokens: !0,
			dots: !1,
			indexes: !1
		}, !1, function(b, A) {
			return !w.isUndefined(A[b])
		});
		const r = n.metaTokens,
			i = n.visitor || f,
			s = n.dots,
			o = n.indexes,
			c = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
		if (!w.isFunction(i)) throw new TypeError("visitor must be a function");

		function a(k) {
			if (k === null) return "";
			if (w.isDate(k)) return k.toISOString();
			if (!c && w.isBlob(k)) throw new _("Blob is not supported. Use a Buffer instead.");
			return w.isArrayBuffer(k) || w.isTypedArray(k) ? c && typeof Blob == "function" ? new Blob([k]) : Buffer
				.from(k) : k
		}

		function f(k, b, A) {
			let x = k;
			if (k && !A && typeof k == "object") {
				if (w.endsWith(b, "{}")) b = r ? b : b.slice(0, -2), k = JSON.stringify(k);
				else if (w.isArray(k) && Oo(k) || (w.isFileList(k) || w.endsWith(b, "[]")) && (x = w.toArray(k)))
					return b = $n(b), x.forEach(function(S, L) {
						!(w.isUndefined(S) || S === null) && t.append(o === !0 ? Wn([b], L, s) : o ===
							null ? b : b + "[]", a(S))
					}), !1
			}
			return Et(k) ? !0 : (t.append(Wn(A, b, s), a(k)), !1)
		}
		const l = [],
			m = Object.assign(Co, {
				defaultVisitor: f,
				convertValue: a,
				isVisitable: Et
			});

		function h(k, b) {
			if (!w.isUndefined(k)) {
				if (l.indexOf(k) !== -1) throw Error("Circular reference detected in " + b.join("."));
				l.push(k), w.forEach(k, function(x, T) {
					(!(w.isUndefined(x) || x === null) && i.call(t, x, w.isString(T) ? T.trim() : T, b,
					m)) === !0 && h(x, b ? b.concat(T) : [T])
				}), l.pop()
			}
		}
		if (!w.isObject(e)) throw new TypeError("data must be an object");
		return h(e), t
	}

	function Jn(e) {
		const t = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+",
			"%00": "\0"
		};
		return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
			return t[r]
		})
	}

	function St(e, t) {
		this._pairs = [], e && Xe(e, this, t)
	}
	const Qn = St.prototype;
	Qn.append = function(t, n) {
		this._pairs.push([t, n])
	}, Qn.toString = function(t) {
		const n = t ? function(r) {
			return t.call(this, r, Jn)
		} : Jn;
		return this._pairs.map(function(i) {
			return n(i[0]) + "=" + n(i[1])
		}, "").join("&")
	};

	function Fo(e) {
		return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(
			/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
	}

	function Gn(e, t, n) {
		if (!t) return e;
		const r = n && n.encode || Fo,
			i = n && n.serialize;
		let s;
		if (i ? s = i(t, n) : s = w.isURLSearchParams(t) ? t.toString() : new St(t, n).toString(r), s) {
			const o = e.indexOf("#");
			o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
		}
		return e
	}
	class To {
		constructor() {
			this.handlers = []
		}
		use(t, n, r) {
			return this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null
			}), this.handlers.length - 1
		}
		eject(t) {
			this.handlers[t] && (this.handlers[t] = null)
		}
		clear() {
			this.handlers && (this.handlers = [])
		}
		forEach(t) {
			w.forEach(this.handlers, function(r) {
				r !== null && t(r)
			})
		}
	}
	const Kn = To,
		Xn = {
			silentJSONParsing: !0,
			forcedJSONParsing: !0,
			clarifyTimeoutError: !1
		},
		Io = {
			isBrowser: !0,
			classes: {
				URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : St,
				FormData: typeof FormData < "u" ? FormData : null,
				Blob: typeof Blob < "u" ? Blob : null
			},
			protocols: ["http", "https", "file", "blob", "url", "data"]
		},
		Zn = typeof window < "u" && typeof document < "u",
		Po = (e => Zn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator
			.product),
		Ro = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self
			.importScripts == "function")(),
		he = {
			...Object.freeze(Object.defineProperty({
				__proto__: null,
				hasBrowserEnv: Zn,
				hasStandardBrowserEnv: Po,
				hasStandardBrowserWebWorkerEnv: Ro
			}, Symbol.toStringTag, {
				value: "Module"
			})),
			...Io
		};

	function Lo(e, t) {
		return Xe(e, new he.classes.URLSearchParams, Object.assign({
			visitor: function(n, r, i, s) {
				return he.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s
					.defaultVisitor.apply(this, arguments)
			}
		}, t))
	}

	function Do(e) {
		return w.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
	}

	function _o(e) {
		const t = {},
			n = Object.keys(e);
		let r;
		const i = n.length;
		let s;
		for (r = 0; r < i; r++) s = n[r], t[s] = e[s];
		return t
	}

	function Yn(e) {
		function t(n, r, i, s) {
			let o = n[s++];
			if (o === "__proto__") return !0;
			const u = Number.isFinite(+o),
				c = s >= n.length;
			return o = !o && w.isArray(i) ? i.length : o, c ? (w.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !
				u) : ((!i[o] || !w.isObject(i[o])) && (i[o] = []), t(n, r, i[o], s) && w.isArray(i[o]) && (i[o] =
					_o(i[o])), !u)
		}
		if (w.isFormData(e) && w.isFunction(e.entries)) {
			const n = {};
			return w.forEachEntry(e, (r, i) => {
				t(Do(r), i, n, 0)
			}), n
		}
		return null
	}

	function zo(e, t, n) {
		if (w.isString(e)) try {
			return (t || JSON.parse)(e), w.trim(e)
		} catch (r) {
			if (r.name !== "SyntaxError") throw r
		}
		return (n || JSON.stringify)(e)
	}
	const At = {
		transitional: Xn,
		adapter: ["xhr", "http"],
		transformRequest: [function(t, n) {
			const r = n.getContentType() || "",
				i = r.indexOf("application/json") > -1,
				s = w.isObject(t);
			if (s && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t)) return i ? JSON
				.stringify(Yn(t)) : t;
			if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t))
				return t;
			if (w.isArrayBufferView(t)) return t.buffer;
			if (w.isURLSearchParams(t)) return n.setContentType(
				"application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
			let u;
			if (s) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1) return Lo(t, this
					.formSerializer).toString();
				if ((u = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
					const c = this.env && this.env.FormData;
					return Xe(u ? {
						"files[]": t
					} : t, c && new c, this.formSerializer)
				}
			}
			return s || i ? (n.setContentType("application/json", !1), zo(t)) : t
		}],
		transformResponse: [function(t) {
			const n = this.transitional || At.transitional,
				r = n && n.forcedJSONParsing,
				i = this.responseType === "json";
			if (t && w.isString(t) && (r && !this.responseType || i)) {
				const o = !(n && n.silentJSONParsing) && i;
				try {
					return JSON.parse(t)
				} catch (u) {
					if (o) throw u.name === "SyntaxError" ? _.from(u, _.ERR_BAD_RESPONSE, this, null,
						this.response) : u
				}
			}
			return t
		}],
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		maxBodyLength: -1,
		env: {
			FormData: he.classes.FormData,
			Blob: he.classes.Blob
		},
		validateStatus: function(t) {
			return t >= 200 && t < 300
		},
		headers: {
			common: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": void 0
			}
		}
	};
	w.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
		At.headers[e] = {}
	});
	const Ot = At,
		Bo = w.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from",
			"host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards",
			"proxy-authorization", "referer", "retry-after", "user-agent"
		]),
		No = e => {
			const t = {};
			let n, r, i;
			return e && e.split(`
`).forEach(function(o) {
				i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1)
				.trim(), !(!n || t[n] && Bo[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [
					r] : t[n] = t[n] ? t[n] + ", " + r : r)
			}), t
		},
		vn = Symbol("internals");

	function je(e) {
		return e && String(e).trim().toLowerCase()
	}

	function Ze(e) {
		return e === !1 || e == null ? e : w.isArray(e) ? e.map(Ze) : String(e)
	}

	function jo(e) {
		const t = Object.create(null),
			n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
		let r;
		for (; r = n.exec(e);) t[r[1]] = r[2];
		return t
	}
	const Mo = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

	function Ct(e, t, n, r, i) {
		if (w.isFunction(r)) return r.call(this, t, n);
		if (i && (t = n), !!w.isString(t)) {
			if (w.isString(r)) return t.indexOf(r) !== -1;
			if (w.isRegExp(r)) return r.test(t)
		}
	}

	function Uo(e) {
		return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
	}

	function Ho(e, t) {
		const n = w.toCamelCase(" " + t);
		["get", "set", "has"].forEach(r => {
			Object.defineProperty(e, r + n, {
				value: function(i, s, o) {
					return this[r].call(this, t, i, s, o)
				},
				configurable: !0
			})
		})
	}
	class Ye {
		constructor(t) {
			t && this.set(t)
		}
		set(t, n, r) {
			const i = this;

			function s(u, c, a) {
				const f = je(c);
				if (!f) throw new Error("header name must be a non-empty string");
				const l = w.findKey(i, f);
				(!l || i[l] === void 0 || a === !0 || a === void 0 && i[l] !== !1) && (i[l || c] = Ze(u))
			}
			const o = (u, c) => w.forEach(u, (a, f) => s(a, f, c));
			return w.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : w.isString(t) && (t = t
			.trim()) && !Mo(t) ? o(No(t), n) : t != null && s(n, t, r), this
		}
		get(t, n) {
			if (t = je(t), t) {
				const r = w.findKey(this, t);
				if (r) {
					const i = this[r];
					if (!n) return i;
					if (n === !0) return jo(i);
					if (w.isFunction(n)) return n.call(this, i, r);
					if (w.isRegExp(n)) return n.exec(i);
					throw new TypeError("parser must be boolean|regexp|function")
				}
			}
		}
		has(t, n) {
			if (t = je(t), t) {
				const r = w.findKey(this, t);
				return !!(r && this[r] !== void 0 && (!n || Ct(this, this[r], r, n)))
			}
			return !1
		}
		delete(t, n) {
			const r = this;
			let i = !1;

			function s(o) {
				if (o = je(o), o) {
					const u = w.findKey(r, o);
					u && (!n || Ct(r, r[u], u, n)) && (delete r[u], i = !0)
				}
			}
			return w.isArray(t) ? t.forEach(s) : s(t), i
		}
		clear(t) {
			const n = Object.keys(this);
			let r = n.length,
				i = !1;
			for (; r--;) {
				const s = n[r];
				(!t || Ct(this, this[s], s, t, !0)) && (delete this[s], i = !0)
			}
			return i
		}
		normalize(t) {
			const n = this,
				r = {};
			return w.forEach(this, (i, s) => {
				const o = w.findKey(r, s);
				if (o) {
					n[o] = Ze(i), delete n[s];
					return
				}
				const u = t ? Uo(s) : String(s).trim();
				u !== s && delete n[s], n[u] = Ze(i), r[u] = !0
			}), this
		}
		concat(...t) {
			return this.constructor.concat(this, ...t)
		}
		toJSON(t) {
			const n = Object.create(null);
			return w.forEach(this, (r, i) => {
				r != null && r !== !1 && (n[i] = t && w.isArray(r) ? r.join(", ") : r)
			}), n
		} [Symbol.iterator]() {
			return Object.entries(this.toJSON())[Symbol.iterator]()
		}
		toString() {
			return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
		}
		get[Symbol.toStringTag]() {
			return "AxiosHeaders"
		}
		static from(t) {
			return t instanceof this ? t : new this(t)
		}
		static concat(t, ...n) {
			const r = new this(t);
			return n.forEach(i => r.set(i)), r
		}
		static accessor(t) {
			const r = (this[vn] = this[vn] = {
					accessors: {}
				}).accessors,
				i = this.prototype;

			function s(o) {
				const u = je(o);
				r[u] || (Ho(i, o), r[u] = !0)
			}
			return w.isArray(t) ? t.forEach(s) : s(t), this
		}
	}
	Ye.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), w
		.reduceDescriptors(Ye.prototype, ({
			value: e
		}, t) => {
			let n = t[0].toUpperCase() + t.slice(1);
			return {
				get: () => e,
				set(r) {
					this[n] = r
				}
			}
		}), w.freezeMethods(Ye);
	const pe = Ye;

	function Ft(e, t) {
		const n = this || Ot,
			r = t || n,
			i = pe.from(r.headers);
		let s = r.data;
		return w.forEach(e, function(u) {
			s = u.call(n, s, i.normalize(), t ? t.status : void 0)
		}), i.normalize(), s
	}

	function er(e) {
		return !!(e && e.__CANCEL__)
	}

	function Me(e, t, n) {
		_.call(this, e ?? "canceled", _.ERR_CANCELED, t, n), this.name = "CanceledError"
	}
	w.inherits(Me, _, {
		__CANCEL__: !0
	});

	function qo(e, t, n) {
		const r = n.config.validateStatus;
		!n.status || !r || r(n.status) ? e(n) : t(new _("Request failed with status code " + n.status, [_
			.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE
		][Math.floor(n.status / 100) - 4], n.config, n.request, n))
	}
	const Vo = he.hasStandardBrowserEnv ? {
		write(e, t, n, r, i, s) {
			const o = [e + "=" + encodeURIComponent(t)];
			w.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), w.isString(r) && o.push("path=" +
					r), w.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie =
				o.join("; ")
		},
		read(e) {
			const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
			return t ? decodeURIComponent(t[3]) : null
		},
		remove(e) {
			this.write(e, "", Date.now() - 864e5)
		}
	} : {
		write() {},
		read() {
			return null
		},
		remove() {}
	};

	function $o(e) {
		return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
	}

	function Wo(e, t) {
		return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
	}

	function tr(e, t) {
		return e && !$o(t) ? Wo(e, t) : t
	}
	const Jo = he.hasStandardBrowserEnv ? function() {
		const t = /(msie|trident)/i.test(navigator.userAgent),
			n = document.createElement("a");
		let r;

		function i(s) {
			let o = s;
			return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
				href: n.href,
				protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
				host: n.host,
				search: n.search ? n.search.replace(/^\?/, "") : "",
				hash: n.hash ? n.hash.replace(/^#/, "") : "",
				hostname: n.hostname,
				port: n.port,
				pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
			}
		}
		return r = i(window.location.href),
			function(o) {
				const u = w.isString(o) ? i(o) : o;
				return u.protocol === r.protocol && u.host === r.host
			}
	}() : function() {
		return function() {
			return !0
		}
	}();

	function Qo(e) {
		const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
		return t && t[1] || ""
	}

	function Go(e, t) {
		e = e || 10;
		const n = new Array(e),
			r = new Array(e);
		let i = 0,
			s = 0,
			o;
		return t = t !== void 0 ? t : 1e3,
			function(c) {
				const a = Date.now(),
					f = r[s];
				o || (o = a), n[i] = c, r[i] = a;
				let l = s,
					m = 0;
				for (; l !== i;) m += n[l++], l = l % e;
				if (i = (i + 1) % e, i === s && (s = (s + 1) % e), a - o < t) return;
				const h = f && a - f;
				return h ? Math.round(m * 1e3 / h) : void 0
			}
	}

	function nr(e, t) {
		let n = 0;
		const r = Go(50, 250);
		return i => {
			const s = i.loaded,
				o = i.lengthComputable ? i.total : void 0,
				u = s - n,
				c = r(u),
				a = s <= o;
			n = s;
			const f = {
				loaded: s,
				total: o,
				progress: o ? s / o : void 0,
				bytes: u,
				rate: c || void 0,
				estimated: c && o && a ? (o - s) / c : void 0,
				event: i
			};
			f[t ? "download" : "upload"] = !0, e(f)
		}
	}
	const Tt = {
		http: Ao,
		xhr: typeof XMLHttpRequest < "u" && function(e) {
			return new Promise(function(n, r) {
				let i = e.data;
				const s = pe.from(e.headers).normalize();
				let {
					responseType: o,
					withXSRFToken: u
				} = e, c;

				function a() {
					e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal
						.removeEventListener("abort", c)
				}
				let f;
				if (w.isFormData(i)) {
					if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv) s
						.setContentType(!1);
					else if ((f = s.getContentType()) !== !1) {
						const [b, ...A] = f ? f.split(";").map(x => x.trim()).filter(Boolean) : [];
						s.setContentType([b || "multipart/form-data", ...A].join("; "))
					}
				}
				let l = new XMLHttpRequest;
				if (e.auth) {
					const b = e.auth.username || "",
						A = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
					s.set("Authorization", "Basic " + btoa(b + ":" + A))
				}
				const m = tr(e.baseURL, e.url);
				l.open(e.method.toUpperCase(), Gn(m, e.params, e.paramsSerializer), !0), l.timeout =
					e.timeout;

				function h() {
					if (!l) return;
					const b = pe.from("getAllResponseHeaders" in l && l.getAllResponseHeaders()),
						x = {
							data: !o || o === "text" || o === "json" ? l.responseText : l.response,
							status: l.status,
							statusText: l.statusText,
							headers: b,
							config: e,
							request: l
						};
					qo(function(S) {
						n(S), a()
					}, function(S) {
						r(S), a()
					}, x), l = null
				}
				if ("onloadend" in l ? l.onloadend = h : l.onreadystatechange = function() {
						!l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l
							.responseURL.indexOf("file:") === 0) || setTimeout(h)
					}, l.onabort = function() {
						l && (r(new _("Request aborted", _.ECONNABORTED, e, l)), l = null)
					}, l.onerror = function() {
						r(new _("Network Error", _.ERR_NETWORK, e, l)), l = null
					}, l.ontimeout = function() {
						let A = e.timeout ? "timeout of " + e.timeout + "ms exceeded" :
							"timeout exceeded";
						const x = e.transitional || Xn;
						e.timeoutErrorMessage && (A = e.timeoutErrorMessage), r(new _(A, x
								.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED, e, l)), l =
							null
					}, he.hasStandardBrowserEnv && (u && w.isFunction(u) && (u = u(e)), u || u !== !
						1 && Jo(m))) {
					const b = e.xsrfHeaderName && e.xsrfCookieName && Vo.read(e.xsrfCookieName);
					b && s.set(e.xsrfHeaderName, b)
				}
				i === void 0 && s.setContentType(null), "setRequestHeader" in l && w.forEach(s
						.toJSON(),
						function(A, x) {
							l.setRequestHeader(x, A)
						}), w.isUndefined(e.withCredentials) || (l.withCredentials = !!e
						.withCredentials), o && o !== "json" && (l.responseType = e.responseType),
					typeof e.onDownloadProgress == "function" && l.addEventListener("progress", nr(e
						.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l
					.upload && l.upload.addEventListener("progress", nr(e.onUploadProgress)), (e
						.cancelToken || e.signal) && (c = b => {
						l && (r(!b || b.type ? new Me(null, e, l) : b), l.abort(), l = null)
					}, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal
						.aborted ? c() : e.signal.addEventListener("abort", c)));
				const k = Qo(m);
				if (k && he.protocols.indexOf(k) === -1) {
					r(new _("Unsupported protocol " + k + ":", _.ERR_BAD_REQUEST, e));
					return
				}
				l.send(i || null)
			})
		}
	};
	w.forEach(Tt, (e, t) => {
		if (e) {
			try {
				Object.defineProperty(e, "name", {
					value: t
				})
			} catch {}
			Object.defineProperty(e, "adapterName", {
				value: t
			})
		}
	});
	const rr = e => `- ${e}`,
		Ko = e => w.isFunction(e) || e === null || e === !1,
		ir = {
			getAdapter: e => {
				e = w.isArray(e) ? e : [e];
				const {
					length: t
				} = e;
				let n, r;
				const i = {};
				for (let s = 0; s < t; s++) {
					n = e[s];
					let o;
					if (r = n, !Ko(n) && (r = Tt[(o = String(n)).toLowerCase()], r === void 0)) throw new _(
						`Unknown adapter '${o}'`);
					if (r) break;
					i[o || "#" + s] = r
				}
				if (!r) {
					const s = Object.entries(i).map(([u, c]) => `adapter ${u} ` + (c === !1 ?
						"is not supported by the environment" : "is not available in the build"));
					let o = t ? s.length > 1 ? `since :
` + s.map(rr).join(`
`) : " " + rr(s[0]) : "as no adapter specified";
					throw new _("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
				}
				return r
			},
			adapters: Tt
		};

	function It(e) {
		if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Me(null, e)
	}

	function sr(e) {
		return It(e), e.headers = pe.from(e.headers), e.data = Ft.call(e, e.transformRequest), ["post", "put",
				"patch"
			].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ir
			.getAdapter(e.adapter || Ot.adapter)(e).then(function(r) {
				return It(e), r.data = Ft.call(e, e.transformResponse, r), r.headers = pe.from(r.headers), r
			}, function(r) {
				return er(r) || (It(e), r && r.response && (r.response.data = Ft.call(e, e.transformResponse, r
					.response), r.response.headers = pe.from(r.response.headers))), Promise.reject(r)
			})
	}
	const or = e => e instanceof pe ? {
		...e
	} : e;

	function Ce(e, t) {
		t = t || {};
		const n = {};

		function r(a, f, l) {
			return w.isPlainObject(a) && w.isPlainObject(f) ? w.merge.call({
				caseless: l
			}, a, f) : w.isPlainObject(f) ? w.merge({}, f) : w.isArray(f) ? f.slice() : f
		}

		function i(a, f, l) {
			if (w.isUndefined(f)) {
				if (!w.isUndefined(a)) return r(void 0, a, l)
			} else return r(a, f, l)
		}

		function s(a, f) {
			if (!w.isUndefined(f)) return r(void 0, f)
		}

		function o(a, f) {
			if (w.isUndefined(f)) {
				if (!w.isUndefined(a)) return r(void 0, a)
			} else return r(void 0, f)
		}

		function u(a, f, l) {
			if (l in t) return r(a, f);
			if (l in e) return r(void 0, a)
		}
		const c = {
			url: s,
			method: s,
			data: s,
			baseURL: o,
			transformRequest: o,
			transformResponse: o,
			paramsSerializer: o,
			timeout: o,
			timeoutMessage: o,
			withCredentials: o,
			withXSRFToken: o,
			adapter: o,
			responseType: o,
			xsrfCookieName: o,
			xsrfHeaderName: o,
			onUploadProgress: o,
			onDownloadProgress: o,
			decompress: o,
			maxContentLength: o,
			maxBodyLength: o,
			beforeRedirect: o,
			transport: o,
			httpAgent: o,
			httpsAgent: o,
			cancelToken: o,
			socketPath: o,
			responseEncoding: o,
			validateStatus: u,
			headers: (a, f) => i(or(a), or(f), !0)
		};
		return w.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
			const l = c[f] || i,
				m = l(e[f], t[f], f);
			w.isUndefined(m) && l !== u || (n[f] = m)
		}), n
	}
	const ur = "1.6.8",
		Pt = {};
	["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
		Pt[e] = function(r) {
			return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
		}
	});
	const ar = {};
	Pt.transitional = function(t, n, r) {
		function i(s, o) {
			return "[Axios v" + ur + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "")
		}
		return (s, o, u) => {
			if (t === !1) throw new _(i(o, " has been removed" + (n ? " in " + n : "")), _.ERR_DEPRECATED);
			return n && !ar[o] && (ar[o] = !0, console.warn(i(o, " has been deprecated since v" + n +
				" and will be removed in the near future"))), t ? t(s, o, u) : !0
		}
	};

	function Xo(e, t, n) {
		if (typeof e != "object") throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
		const r = Object.keys(e);
		let i = r.length;
		for (; i-- > 0;) {
			const s = r[i],
				o = t[s];
			if (o) {
				const u = e[s],
					c = u === void 0 || o(u, s, e);
				if (c !== !0) throw new _("option " + s + " must be " + c, _.ERR_BAD_OPTION_VALUE);
				continue
			}
			if (n !== !0) throw new _("Unknown option " + s, _.ERR_BAD_OPTION)
		}
	}
	const Rt = {
			assertOptions: Xo,
			validators: Pt
		},
		we = Rt.validators;
	class ve {
		constructor(t) {
			this.defaults = t, this.interceptors = {
				request: new Kn,
				response: new Kn
			}
		}
		async request(t, n) {
			try {
				return await this._request(t, n)
			} catch (r) {
				if (r instanceof Error) {
					let i;
					Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
					const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
					r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s
				}
				throw r
			}
		}
		_request(t, n) {
			typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ce(this.defaults, n);
			const {
				transitional: r,
				paramsSerializer: i,
				headers: s
			} = n;
			r !== void 0 && Rt.assertOptions(r, {
				silentJSONParsing: we.transitional(we.boolean),
				forcedJSONParsing: we.transitional(we.boolean),
				clarifyTimeoutError: we.transitional(we.boolean)
			}, !1), i != null && (w.isFunction(i) ? n.paramsSerializer = {
				serialize: i
			} : Rt.assertOptions(i, {
				encode: we.function,
				serialize: we.function
			}, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
			let o = s && w.merge(s.common, s[n.method]);
			s && w.forEach(["delete", "get", "head", "post", "put", "patch", "common"], k => {
				delete s[k]
			}), n.headers = pe.concat(o, s);
			const u = [];
			let c = !0;
			this.interceptors.request.forEach(function(b) {
				typeof b.runWhen == "function" && b.runWhen(n) === !1 || (c = c && b.synchronous, u
					.unshift(b.fulfilled, b.rejected))
			});
			const a = [];
			this.interceptors.response.forEach(function(b) {
				a.push(b.fulfilled, b.rejected)
			});
			let f, l = 0,
				m;
			if (!c) {
				const k = [sr.bind(this), void 0];
				for (k.unshift.apply(k, u), k.push.apply(k, a), m = k.length, f = Promise.resolve(n); l < m;)
					f = f.then(k[l++], k[l++]);
				return f
			}
			m = u.length;
			let h = n;
			for (l = 0; l < m;) {
				const k = u[l++],
					b = u[l++];
				try {
					h = k(h)
				} catch (A) {
					b.call(this, A);
					break
				}
			}
			try {
				f = sr.call(this, h)
			} catch (k) {
				return Promise.reject(k)
			}
			for (l = 0, m = a.length; l < m;) f = f.then(a[l++], a[l++]);
			return f
		}
		getUri(t) {
			t = Ce(this.defaults, t);
			const n = tr(t.baseURL, t.url);
			return Gn(n, t.params, t.paramsSerializer)
		}
	}
	w.forEach(["delete", "get", "head", "options"], function(t) {
		ve.prototype[t] = function(n, r) {
			return this.request(Ce(r || {}, {
				method: t,
				url: n,
				data: (r || {}).data
			}))
		}
	}), w.forEach(["post", "put", "patch"], function(t) {
		function n(r) {
			return function(s, o, u) {
				return this.request(Ce(u || {}, {
					method: t,
					headers: r ? {
						"Content-Type": "multipart/form-data"
					} : {},
					url: s,
					data: o
				}))
			}
		}
		ve.prototype[t] = n(), ve.prototype[t + "Form"] = n(!0)
	});
	const et = ve;
	class Lt {
		constructor(t) {
			if (typeof t != "function") throw new TypeError("executor must be a function.");
			let n;
			this.promise = new Promise(function(s) {
				n = s
			});
			const r = this;
			this.promise.then(i => {
				if (!r._listeners) return;
				let s = r._listeners.length;
				for (; s-- > 0;) r._listeners[s](i);
				r._listeners = null
			}), this.promise.then = i => {
				let s;
				const o = new Promise(u => {
					r.subscribe(u), s = u
				}).then(i);
				return o.cancel = function() {
					r.unsubscribe(s)
				}, o
			}, t(function(s, o, u) {
				r.reason || (r.reason = new Me(s, o, u), n(r.reason))
			})
		}
		throwIfRequested() {
			if (this.reason) throw this.reason
		}
		subscribe(t) {
			if (this.reason) {
				t(this.reason);
				return
			}
			this._listeners ? this._listeners.push(t) : this._listeners = [t]
		}
		unsubscribe(t) {
			if (!this._listeners) return;
			const n = this._listeners.indexOf(t);
			n !== -1 && this._listeners.splice(n, 1)
		}
		static source() {
			let t;
			return {
				token: new Lt(function(i) {
					t = i
				}),
				cancel: t
			}
		}
	}
	const Zo = Lt;

	function Yo(e) {
		return function(n) {
			return e.apply(null, n)
		}
	}

	function vo(e) {
		return w.isObject(e) && e.isAxiosError === !0
	}
	const Dt = {
		Continue: 100,
		SwitchingProtocols: 101,
		Processing: 102,
		EarlyHints: 103,
		Ok: 200,
		Created: 201,
		Accepted: 202,
		NonAuthoritativeInformation: 203,
		NoContent: 204,
		ResetContent: 205,
		PartialContent: 206,
		MultiStatus: 207,
		AlreadyReported: 208,
		ImUsed: 226,
		MultipleChoices: 300,
		MovedPermanently: 301,
		Found: 302,
		SeeOther: 303,
		NotModified: 304,
		UseProxy: 305,
		Unused: 306,
		TemporaryRedirect: 307,
		PermanentRedirect: 308,
		BadRequest: 400,
		Unauthorized: 401,
		PaymentRequired: 402,
		Forbidden: 403,
		NotFound: 404,
		MethodNotAllowed: 405,
		NotAcceptable: 406,
		ProxyAuthenticationRequired: 407,
		RequestTimeout: 408,
		Conflict: 409,
		Gone: 410,
		LengthRequired: 411,
		PreconditionFailed: 412,
		PayloadTooLarge: 413,
		UriTooLong: 414,
		UnsupportedMediaType: 415,
		RangeNotSatisfiable: 416,
		ExpectationFailed: 417,
		ImATeapot: 418,
		MisdirectedRequest: 421,
		UnprocessableEntity: 422,
		Locked: 423,
		FailedDependency: 424,
		TooEarly: 425,
		UpgradeRequired: 426,
		PreconditionRequired: 428,
		TooManyRequests: 429,
		RequestHeaderFieldsTooLarge: 431,
		UnavailableForLegalReasons: 451,
		InternalServerError: 500,
		NotImplemented: 501,
		BadGateway: 502,
		ServiceUnavailable: 503,
		GatewayTimeout: 504,
		HttpVersionNotSupported: 505,
		VariantAlsoNegotiates: 506,
		InsufficientStorage: 507,
		LoopDetected: 508,
		NotExtended: 510,
		NetworkAuthenticationRequired: 511
	};
	Object.entries(Dt).forEach(([e, t]) => {
		Dt[t] = e
	});
	const eu = Dt;

	function lr(e) {
		const t = new et(e),
			n = Ln(et.prototype.request, t);
		return w.extend(n, et.prototype, t, {
			allOwnKeys: !0
		}), w.extend(n, t, null, {
			allOwnKeys: !0
		}), n.create = function(i) {
			return lr(Ce(e, i))
		}, n
	}
	const W = lr(Ot);
	W.Axios = et, W.CanceledError = Me, W.CancelToken = Zo, W.isCancel = er, W.VERSION = ur, W.toFormData = Xe, W
		.AxiosError = _, W.Cancel = W.CanceledError, W.all = function(t) {
			return Promise.all(t)
		}, W.spread = Yo, W.isAxiosError = vo, W.mergeConfig = Ce, W.AxiosHeaders = pe, W.formToJSON = e => Yn(w
			.isHTMLForm(e) ? new FormData(e) : e), W.getAdapter = ir.getAdapter, W.HttpStatusCode = eu, W.default =
		W;
	const tu = W,
		Ue = "aippt-iframe",
		R = class R {
			constructor() {}
			static async show(t) {
				R.instance === null && (R.instance = new R);
				const {
					appkey: n,
					channel: r,
					code: i,
					editorModel: s,
					routerOptions: o
				} = t;
				R.opt = t, R.setSceneValue(t.options && t.options.scene_auth || !1), R.setFcPlateSwitch(t
					.options && t.options.fc_plate || !1);
				let u = "https://co.aippt.cn";
				t.options && t.options.h && (u = t.options.h);
				const c = await R.validate();
				if (c.code !== 1) return Promise.reject(c);
				if (o && o.list && o.list.length && !o.list.includes("generate") && !o.list.includes(
						"workspace")) return Promise.reject({
					code: -1,
					type: "routerOptions",
					msg: "工作台和生成页必须存在一个"
				});
				const a = {
						appkey: n,
						channel: r || "",
						code: i,
						"x-editor-mode": s ? "" : "view"
					},
					f = await tu.get(`${u}/jsapi/user/info`, {
						headers: {
							"x-api-key": a.appkey,
							"x-channel": a.channel,
							"x-code": a.code
						}
					});
				return f.data.code !== 0 ? Promise.reject(f.data) : (R.create(t), R.instance)
			}
			static create(t) {
				var f;
				const {
					container: n,
					options: r,
					iframeOptions: i,
					routerOptions: s
				} = t, o = r == null ? void 0 : r.custom_generate;
				let u = "https://co.aippt.cn";
				o && (u = `${u}/generate`);
				let c = !1;
				s !== void 0 && (!s.list || !s.list.length || s.list.length && s.list.includes("editor")) && (
					c = !0), s && ((f = s.editor) != null && f.id) && c && (u =
					`${u}/editor?id=${s.editor.id}&source=workspace`);
				const a = Y({
					url: u,
					id: Ue,
					width: i && i.width || ""
				});
				if (n) ne(n), n.appendChild(a), a.addEventListener("load", () => {
					console.log("iframe已加载完毕"), R.initInfo()
					setTimeout(()=>{
						console.log(document.getElementById('aippt-iframe').getElementsByClassName('buttons'))
					},3000)
				});
				else {
					const {
						modal: l,
						container: m,
						style: h
					} = Se(Ue, () => {
						l.remove(), h.remove()
					});
					m.appendChild(a), a.addEventListener("load", () => {
						setTimeout(() => {
							R.initInfo()
						}, 50)
					}), document.head.appendChild(h), document.body.appendChild(l)
				}
				typeof t.onMessage == "function" && R.initEventListener(t.onMessage), R.setIframe(a.src)
			}
			static initEventListener(t) {
				const r = window.document.getElementById(Ue).contentWindow;
				window.addEventListener("message", i => {
					if (i.source === r) {
						let s = null;
						i.data && i.data.data && (s = JSON.parse(i.data.data)), i.data.type ===
							"INIT" || t && t(i.data.type, s)
					}
				})
			}
			static setMessage(t) {
				console.log("开始设置信息"), document.getElementById(Ue).contentWindow.postMessage(t, "*")
			}
			static asyncSetMessage(t) {
				console.log("开始设置信息"), document.getElementById(Ue).contentWindow.postMessage(t, "*")
			}
			static initInfo() {
				var s, o;
				const t = [0, 1, 2];
				let n = 2;
				const r = R.opt.options;
				r && r.download_mode !== void 0 && t.includes(r.download_mode) && (n = r.download_mode), console
					.log("开始初始化AIPPT信息");
				const i = {
					type: "INIT",
					appkey: R.opt.appkey,
					channel: R.opt.channel || "",
					code: R.opt.code,
					"x-editor-mode": R.opt.editorModel ? "" : "view",
					downloadMode: n,
					sceneAuth: R.scene_auth,
					fcPlateList: R.fc_plate,
					routerOptions: R.opt.routerOptions
				};
				r != null && r.custom_generate && (r != null && r.custom_generate.type) && (r != null && r
					.custom_generate.content) && (i.generate = {
					type: (s = r == null ? void 0 : r.custom_generate) == null ? void 0 : s.type,
					content: (o = r == null ? void 0 : r.custom_generate) == null ? void 0 : o.content
				}), R.setMessage(i)
			}
			static setIframe(t) {
				R.iframeSrc = t
			}
			static getIframe() {
				return R.iframeSrc
			}
			static sceneAuthContinue(t) {
				R.setMessage({
					type: "SCENE_AUTH",
					isNext: t
				})
			}
			static setSceneValue(t) {
				if (typeof t == "boolean")
					if (t === !0) {
						const n = Object.values(Nt).filter(r => typeof r == "number");
						R.scene_auth = n
					} else R.scene_auth = [];
				else if (typeof t == "string") {
					const n = t.split(",");
					R.scene_auth = n.map(r => Number(r)).filter(r => !Number.isNaN(r))
				} else Array.isArray(t) && (R.scene_auth = t.map(n => Number(n)).filter(n => !Number.isNaN(n)))
			}
			static setFcPlateSwitch(t) {
				var r, i;
				const n = (i = (r = R.opt) == null ? void 0 : r.options) == null ? void 0 : i.hasOwnProperty(
					"fc_plate");
				if (typeof t == "boolean") R.fc_plate = t === !0 || !n ? !0 : [];
				else if (typeof t == "string") {
					const s = t.split(",");
					R.fc_plate = s.map(o => Number(o)).filter(o => !Number.isNaN(o))
				} else Array.isArray(t) && (R.fc_plate = t.map(s => Number(s)).filter(s => !Number.isNaN(s)))
			}
			static async validate() {
				const {
					options: t
				} = R.opt, n = t == null ? void 0 : t.custom_generate;
				if (n) {
					const {
						type: r,
						content: i
					} = n;
					if ([1, 3, 4, 5, 6, 7, 11].includes(r)) {
						if (r === 1 || r === 7 || r === 11) {
							const s = i.trim().length;
							if (r === 1) {
								if (s > 100 || !s) return {
									code: -1,
									message: "AI标题不符合要求",
									type: "custom_generate"
								}
							} else if (r === 7) {
								if (!s) return {
									type: "custom_generate",
									code: -1,
									message: "markdown文本内容不符合要求"
								};
								try {
									Vs(i.trim())
								} catch {
									return {
										type: "custom_generate",
										code: -1,
										message: "markdown文本内容不符合要求"
									}
								}
							} else if (!s) return {
								type: "custom_generate",
								code: -1,
								message: "文本内容不允许为空"
							}
						} else {
							const s = i.name.split(".").pop() || "";
							if (r === 3 && s !== "docx" || r === 4 && s !== "xmind" || r === 5 && s !== "mm" ||
								r === 6 && s !== "md") return {
								code: -1,
								message: "上传文件不符合要求",
								type: "custom_generate"
							};
							if (i.size > 1024 * 1024 * 5) return {
								code: -1,
								message: "文件大小不能超过5M",
								type: "custom_generate"
							}
						}
						return Promise.resolve({
							code: 1
						})
					} else return {
						code: -1,
						message: "自定义生成数据类型错误",
						type: "custom_generate"
					}
				} else return Promise.resolve({
					code: 1
				})
			}
		};
	Re(R, "instance", null), Re(R, "iframeSrc"), Re(R, "scene_auth"), Re(R, "fc_plate"), Re(R, "opt");
	let _t = R;
	return _t
});