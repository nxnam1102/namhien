/*! UIkit 3.17.11 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */ (function (
  we,
  $e
) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = $e())
    : typeof define == "function" && define.amd
    ? define("uikit", $e)
    : ((we = typeof globalThis < "u" ? globalThis : we || self),
      (we.UIkit = $e()));
})(this, function () {
  "use strict";
  const { hasOwnProperty: we, toString: $e } = Object.prototype;
  function dt(t, e) {
    return we.call(t, e);
  }
  const Xo = /\B([A-Z])/g,
    Mt = rt((t) => t.replace(Xo, "-$1").toLowerCase()),
    Jo = /-(\w)/g,
    xe = rt((t) =>
      (t.charAt(0).toLowerCase() + t.slice(1)).replace(Jo, (e, i) =>
        i.toUpperCase()
      )
    ),
    Ct = rt((t) => t.charAt(0).toUpperCase() + t.slice(1));
  function ut(t, e) {
    var i;
    return (i = t == null ? void 0 : t.startsWith) == null
      ? void 0
      : i.call(t, e);
  }
  function Qt(t, e) {
    var i;
    return (i = t == null ? void 0 : t.endsWith) == null
      ? void 0
      : i.call(t, e);
  }
  function m(t, e) {
    var i;
    return (i = t == null ? void 0 : t.includes) == null
      ? void 0
      : i.call(t, e);
  }
  function $t(t, e) {
    var i;
    return (i = t == null ? void 0 : t.findIndex) == null
      ? void 0
      : i.call(t, e);
  }
  const { isArray: K, from: Tt } = Array,
    { assign: pt } = Object;
  function et(t) {
    return typeof t == "function";
  }
  function Et(t) {
    return t !== null && typeof t == "object";
  }
  function xt(t) {
    return $e.call(t) === "[object Object]";
  }
  function te(t) {
    return Et(t) && t === t.window;
  }
  function Ze(t) {
    return Bi(t) === 9;
  }
  function Qe(t) {
    return Bi(t) >= 1;
  }
  function ye(t) {
    return Bi(t) === 1;
  }
  function Bi(t) {
    return !te(t) && Et(t) && t.nodeType;
  }
  function ee(t) {
    return typeof t == "boolean";
  }
  function N(t) {
    return typeof t == "string";
  }
  function ke(t) {
    return typeof t == "number";
  }
  function vt(t) {
    return ke(t) || (N(t) && !isNaN(t - parseFloat(t)));
  }
  function Se(t) {
    return !(K(t) ? t.length : Et(t) && Object.keys(t).length);
  }
  function G(t) {
    return t === void 0;
  }
  function Ni(t) {
    return ee(t)
      ? t
      : t === "true" || t === "1" || t === ""
      ? !0
      : t === "false" || t === "0"
      ? !1
      : t;
  }
  function yt(t) {
    const e = Number(t);
    return isNaN(e) ? !1 : e;
  }
  function k(t) {
    return parseFloat(t) || 0;
  }
  function F(t) {
    return T(t)[0];
  }
  function T(t) {
    return Qe(t) ? [t] : Array.from(t || []).filter(Qe);
  }
  function ie(t) {
    if (te(t)) return t;
    t = F(t);
    const e = Ze(t) ? t : t == null ? void 0 : t.ownerDocument;
    return (e == null ? void 0 : e.defaultView) || window;
  }
  function ti(t, e) {
    return (
      t === e ||
      (Et(t) &&
        Et(e) &&
        Object.keys(t).length === Object.keys(e).length &&
        Pt(t, (i, s) => i === e[s]))
    );
  }
  function zi(t, e, i) {
    return t.replace(new RegExp(`${e}|${i}`, "g"), (s) => (s === e ? i : e));
  }
  function se(t) {
    return t[t.length - 1];
  }
  function Pt(t, e) {
    for (const i in t) if (e(t[i], i) === !1) return !1;
    return !0;
  }
  function Ns(t, e) {
    return t
      .slice()
      .sort(({ [e]: i = 0 }, { [e]: s = 0 }) => (i > s ? 1 : s > i ? -1 : 0));
  }
  function Dt(t, e) {
    return t.reduce((i, s) => i + k(et(e) ? e(s) : s[e]), 0);
  }
  function zs(t, e) {
    const i = new Set();
    return t.filter(({ [e]: s }) => (i.has(s) ? !1 : i.add(s)));
  }
  function Fi(t, e) {
    return e.reduce((i, s) => ({ ...i, [s]: t[s] }), {});
  }
  function Z(t, e = 0, i = 1) {
    return Math.min(Math.max(yt(t) || 0, e), i);
  }
  function _() {}
  function Hi(...t) {
    return [
      ["bottom", "top"],
      ["right", "left"],
    ].every(
      ([e, i]) =>
        Math.min(...t.map(({ [e]: s }) => s)) -
          Math.max(...t.map(({ [i]: s }) => s)) >
        0
    );
  }
  function Ie(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  function Li(t, e, i) {
    const s = e === "width" ? "height" : "width";
    return { [s]: t[e] ? Math.round((i * t[s]) / t[e]) : t[s], [e]: i };
  }
  function Fs(t, e) {
    t = { ...t };
    for (const i in t) t = t[i] > e[i] ? Li(t, i, e[i]) : t;
    return t;
  }
  function Ko(t, e) {
    t = Fs(t, e);
    for (const i in t) t = t[i] < e[i] ? Li(t, i, e[i]) : t;
    return t;
  }
  const ei = { ratio: Li, contain: Fs, cover: Ko };
  function ot(t, e, i = 0, s = !1) {
    e = T(e);
    const { length: n } = e;
    return n
      ? ((t = vt(t)
          ? yt(t)
          : t === "next"
          ? i + 1
          : t === "previous"
          ? i - 1
          : t === "last"
          ? n - 1
          : e.indexOf(F(t))),
        s ? Z(t, 0, n - 1) : ((t %= n), t < 0 ? t + n : t))
      : -1;
  }
  function rt(t) {
    const e = Object.create(null);
    return (i, ...s) => e[i] || (e[i] = t(i, ...s));
  }
  function p(t, e, i) {
    var s;
    if (Et(e)) {
      for (const n in e) p(t, n, e[n]);
      return;
    }
    if (G(i)) return (s = F(t)) == null ? void 0 : s.getAttribute(e);
    for (const n of T(t))
      et(i) && (i = i.call(n, p(n, e))),
        i === null ? Ce(n, e) : n.setAttribute(e, i);
  }
  function kt(t, e) {
    return T(t).some((i) => i.hasAttribute(e));
  }
  function Ce(t, e) {
    T(t).forEach((i) => i.removeAttribute(e));
  }
  function Y(t, e) {
    for (const i of [e, `data-${e}`]) if (kt(t, i)) return p(t, i);
  }
  function b(t, ...e) {
    for (const i of T(t)) {
      const s = Bt(e).filter((n) => !I(i, n));
      s.length && i.classList.add(...s);
    }
  }
  function O(t, ...e) {
    for (const i of T(t)) {
      const s = Bt(e).filter((n) => I(i, n));
      s.length && i.classList.remove(...s);
    }
  }
  function Wi(t, e) {
    e = new RegExp(e);
    for (const i of T(t))
      i.classList.remove(...Tt(i.classList).filter((s) => s.match(e)));
  }
  function ii(t, e, i) {
    (i = Bt(i)), (e = Bt(e).filter((s) => !m(i, s))), O(t, e), b(t, i);
  }
  function I(t, e) {
    return ([e] = Bt(e)), T(t).some((i) => i.classList.contains(e));
  }
  function j(t, e, i) {
    const s = Bt(e);
    G(i) || (i = !!i);
    for (const n of T(t)) for (const o of s) n.classList.toggle(o, i);
  }
  function Bt(t) {
    return t
      ? K(t)
        ? t.map(Bt).flat()
        : String(t).split(/[ ,]/).filter(Boolean)
      : [];
  }
  const Zo = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  function Ri(t) {
    return T(t).some((e) => Zo[e.tagName.toLowerCase()]);
  }
  function W(t) {
    return T(t).some(
      (e) => e.offsetWidth || e.offsetHeight || e.getClientRects().length
    );
  }
  const Te = "input,select,textarea,button";
  function ji(t) {
    return T(t).some((e) => A(e, Te));
  }
  const Ee = `${Te},a[href],[tabindex]`;
  function si(t) {
    return A(t, Ee);
  }
  function E(t) {
    var e;
    return (e = F(t)) == null ? void 0 : e.parentElement;
  }
  function Pe(t, e) {
    return T(t).filter((i) => A(i, e));
  }
  function A(t, e) {
    return T(t).some((i) => i.matches(e));
  }
  function Hs(t, e) {
    var i;
    return (i = F(t)) == null ? void 0 : i.closest(ut(e, ">") ? e.slice(1) : e);
  }
  function Ls(t, e) {
    return N(e) ? !!Hs(t, e) : F(e).contains(F(t));
  }
  function Nt(t, e) {
    const i = [];
    for (; (t = E(t)); ) (!e || A(t, e)) && i.push(t);
    return i;
  }
  function B(t, e) {
    t = F(t);
    const i = t ? Tt(t.children) : [];
    return e ? Pe(i, e) : i;
  }
  function ne(t, e) {
    return e ? T(t).indexOf(F(e)) : B(E(t)).indexOf(t);
  }
  function oe(t) {
    return (
      (t = F(t)),
      t && ["origin", "pathname", "search"].every((e) => t[e] === location[e])
    );
  }
  function qi(t) {
    if (oe(t)) {
      t = F(t);
      const e = decodeURIComponent(t.hash).substring(1);
      return document.getElementById(e) || document.getElementsByName(e)[0];
    }
  }
  function it(t, e) {
    return Ui(t, Rs(t, e));
  }
  function _e(t, e) {
    return Oe(t, Rs(t, e));
  }
  function Ui(t, e) {
    return F(js(t, F(e), "querySelector"));
  }
  function Oe(t, e) {
    return T(js(t, F(e), "querySelectorAll"));
  }
  const Qo = /(^|[^\\],)\s*[!>+~-]/,
    Ws = rt((t) => t.match(Qo));
  function Rs(t, e = document) {
    return (N(t) && Ws(t)) || Ze(e) ? e : e.ownerDocument;
  }
  const tr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
    er = rt((t) => t.replace(tr, "$1 *"));
  function js(t, e = document, i) {
    if (!t || !N(t)) return t;
    if (((t = er(t)), Ws(t))) {
      const s = sr(t);
      t = "";
      for (let n of s) {
        let o = e;
        if (n[0] === "!") {
          const r = n.substr(1).trim().split(" ");
          if (
            ((o = E(e).closest(r[0])),
            (n = r.slice(1).join(" ").trim()),
            !n.length && s.length === 1)
          )
            return o;
        }
        if (n[0] === "-") {
          const r = n.substr(1).trim().split(" "),
            a = (o || e).previousElementSibling;
          (o = A(a, n.substr(1)) ? a : null), (n = r.slice(1).join(" "));
        }
        o && (t += `${t ? "," : ""}${nr(o)} ${n}`);
      }
      e = document;
    }
    try {
      return e[i](t);
    } catch {
      return null;
    }
  }
  const ir = /.*?[^\\](?:,|$)/g,
    sr = rt((t) => t.match(ir).map((e) => e.replace(/,$/, "").trim()));
  function nr(t) {
    const e = [];
    for (; t.parentNode; ) {
      const i = p(t, "id");
      if (i) {
        e.unshift(`#${Vi(i)}`);
        break;
      } else {
        let { tagName: s } = t;
        s !== "HTML" && (s += `:nth-child(${ne(t) + 1})`),
          e.unshift(s),
          (t = t.parentNode);
      }
    }
    return e.join(" > ");
  }
  function Vi(t) {
    return N(t) ? CSS.escape(t) : "";
  }
  function $(...t) {
    let [e, i, s, n, o = !1] = Gi(t);
    n.length > 1 && (n = rr(n)),
      o != null && o.self && (n = ar(n)),
      s && (n = or(s, n));
    for (const r of i) for (const a of e) a.addEventListener(r, n, o);
    return () => zt(e, i, n, o);
  }
  function zt(...t) {
    let [e, i, , s, n = !1] = Gi(t);
    for (const o of i) for (const r of e) r.removeEventListener(o, s, n);
  }
  function R(...t) {
    const [e, i, s, n, o = !1, r] = Gi(t),
      a = $(
        e,
        i,
        s,
        (l) => {
          const h = !r || r(l);
          h && (a(), n(l, h));
        },
        o
      );
    return a;
  }
  function v(t, e, i) {
    return Yi(t).every((s) => s.dispatchEvent(Ft(e, !0, !0, i)));
  }
  function Ft(t, e = !0, i = !1, s) {
    return (
      N(t) &&
        (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })),
      t
    );
  }
  function Gi(t) {
    return (
      (t[0] = Yi(t[0])),
      N(t[1]) && (t[1] = t[1].split(" ")),
      et(t[2]) && t.splice(2, 0, !1),
      t
    );
  }
  function or(t, e) {
    return (i) => {
      const s =
        t[0] === ">"
          ? Oe(t, i.currentTarget)
              .reverse()
              .find((n) => n.contains(i.target))
          : i.target.closest(t);
      s && ((i.current = s), e.call(this, i), delete i.current);
    };
  }
  function rr(t) {
    return (e) => (K(e.detail) ? t(e, ...e.detail) : t(e));
  }
  function ar(t) {
    return function (e) {
      if (e.target === e.currentTarget || e.target === e.current)
        return t.call(null, e);
    };
  }
  function qs(t) {
    return t && "addEventListener" in t;
  }
  function lr(t) {
    return qs(t) ? t : F(t);
  }
  function Yi(t) {
    return K(t) ? t.map(lr).filter(Boolean) : N(t) ? Oe(t) : qs(t) ? [t] : T(t);
  }
  function St(t) {
    return t.pointerType === "touch" || !!t.touches;
  }
  function re(t) {
    var e, i;
    const { clientX: s, clientY: n } =
      ((e = t.touches) == null ? void 0 : e[0]) ||
      ((i = t.changedTouches) == null ? void 0 : i[0]) ||
      t;
    return { x: s, y: n };
  }
  const hr = {
    "animation-iteration-count": !0,
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    "stroke-dasharray": !0,
    "stroke-dashoffset": !0,
    widows: !0,
    "z-index": !0,
    zoom: !0,
  };
  function c(t, e, i, s) {
    const n = T(t);
    for (const o of n)
      if (N(e)) {
        if (((e = ni(e)), G(i))) return getComputedStyle(o).getPropertyValue(e);
        o.style.setProperty(
          e,
          vt(i) && !hr[e] ? `${i}px` : i || ke(i) ? i : "",
          s
        );
      } else if (K(e)) {
        const r = {};
        for (const a of e) r[a] = c(o, a);
        return r;
      } else Et(e) && ((s = i), Pt(e, (r, a) => c(o, a, r, s)));
    return n[0];
  }
  const ni = rt((t) => cr(t));
  function cr(t) {
    if (ut(t, "--")) return t;
    t = Mt(t);
    const { style: e } = document.documentElement;
    if (t in e) return t;
    for (const i of ["webkit", "moz"]) {
      const s = `-${i}-${t}`;
      if (s in e) return s;
    }
  }
  const Xi = "uk-transition",
    Ji = "transitionend",
    Ki = "transitioncanceled";
  function ur(t, e, i = 400, s = "linear") {
    return (
      (i = Math.round(i)),
      Promise.all(
        T(t).map(
          (n) =>
            new Promise((o, r) => {
              for (const l in e) {
                const h = c(n, l);
                h === "" && c(n, l, h);
              }
              const a = setTimeout(() => v(n, Ji), i);
              R(
                n,
                [Ji, Ki],
                ({ type: l }) => {
                  clearTimeout(a),
                    O(n, Xi),
                    c(n, {
                      transitionProperty: "",
                      transitionDuration: "",
                      transitionTimingFunction: "",
                    }),
                    l === Ki ? r() : o(n);
                },
                { self: !0 }
              ),
                b(n, Xi),
                c(n, {
                  transitionProperty: Object.keys(e).map(ni).join(","),
                  transitionDuration: `${i}ms`,
                  transitionTimingFunction: s,
                  ...e,
                });
            })
        )
      )
    );
  }
  const M = {
      start: ur,
      async stop(t) {
        v(t, Ji), await Promise.resolve();
      },
      async cancel(t) {
        v(t, Ki), await Promise.resolve();
      },
      inProgress(t) {
        return I(t, Xi);
      },
    },
    Ae = "uk-animation-",
    Us = "animationend",
    oi = "animationcanceled";
  function Vs(t, e, i = 200, s, n) {
    return Promise.all(
      T(t).map(
        (o) =>
          new Promise((r, a) => {
            v(o, oi);
            const l = setTimeout(() => v(o, Us), i);
            R(
              o,
              [Us, oi],
              ({ type: h }) => {
                clearTimeout(l),
                  h === oi ? a() : r(o),
                  c(o, "animationDuration", ""),
                  Wi(o, `${Ae}\\S*`);
              },
              { self: !0 }
            ),
              c(o, "animationDuration", `${i}ms`),
              b(o, e, Ae + (n ? "leave" : "enter")),
              ut(e, Ae) &&
                (s && b(o, `uk-transform-origin-${s}`),
                n && b(o, `${Ae}reverse`));
          })
      )
    );
  }
  const fr = new RegExp(`${Ae}(enter|leave)`),
    _t = {
      in: Vs,
      out(t, e, i, s) {
        return Vs(t, e, i, s, !0);
      },
      inProgress(t) {
        return fr.test(p(t, "class"));
      },
      cancel(t) {
        v(t, oi);
      },
    };
  function dr(t) {
    if (document.readyState !== "loading") {
      t();
      return;
    }
    R(document, "DOMContentLoaded", t);
  }
  function q(t, ...e) {
    return e.some((i) => {
      var s;
      return (
        ((s = t == null ? void 0 : t.tagName) == null
          ? void 0
          : s.toLowerCase()) === i.toLowerCase()
      );
    });
  }
  function Zi(t) {
    return (t = w(t)), (t.innerHTML = ""), t;
  }
  function Ht(t, e) {
    return G(e) ? w(t).innerHTML : H(Zi(t), e);
  }
  const pr = li("prepend"),
    H = li("append"),
    ri = li("before"),
    ai = li("after");
  function li(t) {
    return function (e, i) {
      var s;
      const n = T(N(i) ? Lt(i) : i);
      return (s = w(e)) == null || s[t](...n), Gs(n);
    };
  }
  function at(t) {
    T(t).forEach((e) => e.remove());
  }
  function hi(t, e) {
    for (e = F(ri(t, e)); e.firstChild; ) e = e.firstChild;
    return H(e, t), e;
  }
  function Qi(t, e) {
    return T(
      T(t).map((i) => (i.hasChildNodes() ? hi(Tt(i.childNodes), e) : H(i, e)))
    );
  }
  function Me(t) {
    T(t)
      .map(E)
      .filter((e, i, s) => s.indexOf(e) === i)
      .forEach((e) => e.replaceWith(...e.childNodes));
  }
  const gr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function Lt(t) {
    const e = gr.exec(t);
    if (e) return document.createElement(e[1]);
    const i = document.createElement("template");
    return (i.innerHTML = t.trim()), Gs(i.content.childNodes);
  }
  function Gs(t) {
    return t.length > 1 ? t : t[0];
  }
  function It(t, e) {
    if (ye(t))
      for (e(t), t = t.firstElementChild; t; ) {
        const i = t.nextElementSibling;
        It(t, e), (t = i);
      }
  }
  function w(t, e) {
    return Ys(t) ? F(Lt(t)) : Ui(t, e);
  }
  function z(t, e) {
    return Ys(t) ? T(Lt(t)) : Oe(t, e);
  }
  function Ys(t) {
    return N(t) && ut(t.trim(), "<");
  }
  const Wt = { width: ["left", "right"], height: ["top", "bottom"] };
  function x(t) {
    const e = ye(t)
      ? F(t).getBoundingClientRect()
      : { height: tt(t), width: De(t), top: 0, left: 0 };
    return {
      height: e.height,
      width: e.width,
      top: e.top,
      left: e.left,
      bottom: e.top + e.height,
      right: e.left + e.width,
    };
  }
  function S(t, e) {
    e && c(t, { left: 0, top: 0 });
    const i = x(t);
    if (t) {
      const { scrollY: s, scrollX: n } = ie(t),
        o = { height: s, width: n };
      for (const r in Wt) for (const a of Wt[r]) i[a] += o[r];
    }
    if (!e) return i;
    for (const s of ["left", "top"]) c(t, s, e[s] - i[s]);
  }
  function ts(t) {
    let { top: e, left: i } = S(t);
    const {
      ownerDocument: { body: s, documentElement: n },
      offsetParent: o,
    } = F(t);
    let r = o || n;
    for (; r && (r === s || r === n) && c(r, "position") === "static"; )
      r = r.parentNode;
    if (ye(r)) {
      const a = S(r);
      (e -= a.top + k(c(r, "borderTopWidth"))),
        (i -= a.left + k(c(r, "borderLeftWidth")));
    }
    return { top: e - k(c(t, "marginTop")), left: i - k(c(t, "marginLeft")) };
  }
  function Rt(t) {
    t = F(t);
    const e = [t.offsetTop, t.offsetLeft];
    for (; (t = t.offsetParent); )
      if (
        ((e[0] += t.offsetTop + k(c(t, "borderTopWidth"))),
        (e[1] += t.offsetLeft + k(c(t, "borderLeftWidth"))),
        c(t, "position") === "fixed")
      ) {
        const i = ie(t);
        return (e[0] += i.scrollY), (e[1] += i.scrollX), e;
      }
    return e;
  }
  const tt = Xs("height"),
    De = Xs("width");
  function Xs(t) {
    const e = Ct(t);
    return (i, s) => {
      if (G(s)) {
        if (te(i)) return i[`inner${e}`];
        if (Ze(i)) {
          const n = i.documentElement;
          return Math.max(n[`offset${e}`], n[`scroll${e}`]);
        }
        return (
          (i = F(i)),
          (s = c(i, t)),
          (s = s === "auto" ? i[`offset${e}`] : k(s) || 0),
          s - ae(i, t)
        );
      } else return c(i, t, !s && s !== 0 ? "" : +s + ae(i, t) + "px");
    };
  }
  function ae(t, e, i = "border-box") {
    return c(t, "boxSizing") === i
      ? Dt(
          Wt[e].map(Ct),
          (s) => k(c(t, `padding${s}`)) + k(c(t, `border${s}Width`))
        )
      : 0;
  }
  function ci(t) {
    for (const e in Wt)
      for (const i in Wt[e]) if (Wt[e][i] === t) return Wt[e][1 - i];
    return t;
  }
  function Q(t, e = "width", i = window, s = !1) {
    return N(t)
      ? Dt(vr(t), (n) => {
          const o = wr(n);
          return o
            ? $r(
                o === "vh"
                  ? xr()
                  : o === "vw"
                  ? De(ie(i))
                  : s
                  ? i[`offset${Ct(e)}`]
                  : x(i)[e],
                n
              )
            : n;
        })
      : k(t);
  }
  const mr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
    vr = rt((t) => t.toString().replace(/\s/g, "").match(mr) || []),
    br = /(?:v[hw]|%)$/,
    wr = rt((t) => (t.match(br) || [])[0]);
  function $r(t, e) {
    return (t * k(e)) / 100;
  }
  let Be, le;
  function xr() {
    return (
      Be ||
      (le ||
        ((le = w("<div>")),
        c(le, { height: "100vh", position: "fixed" }),
        $(window, "resize", () => (Be = null))),
      H(document.body, le),
      (Be = le.clientHeight),
      at(le),
      Be)
    );
  }
  const Ot = typeof window < "u",
    U = Ot && document.dir === "rtl",
    jt = Ot && "ontouchstart" in window,
    he = Ot && window.PointerEvent,
    gt = he ? "pointerdown" : jt ? "touchstart" : "mousedown",
    ui = he ? "pointermove" : jt ? "touchmove" : "mousemove",
    At = he ? "pointerup" : jt ? "touchend" : "mouseup",
    ce = he ? "pointerenter" : jt ? "" : "mouseenter",
    Ne = he ? "pointerleave" : jt ? "" : "mouseleave",
    fi = he ? "pointercancel" : "touchcancel",
    X = {
      reads: [],
      writes: [],
      read(t) {
        return this.reads.push(t), is(), t;
      },
      write(t) {
        return this.writes.push(t), is(), t;
      },
      clear(t) {
        Ks(this.reads, t), Ks(this.writes, t);
      },
      flush: es,
    };
  function es(t) {
    Js(X.reads),
      Js(X.writes.splice(0)),
      (X.scheduled = !1),
      (X.reads.length || X.writes.length) && is(t + 1);
  }
  const yr = 4;
  function is(t) {
    X.scheduled ||
      ((X.scheduled = !0),
      t && t < yr
        ? Promise.resolve().then(() => es(t))
        : requestAnimationFrame(() => es(1)));
  }
  function Js(t) {
    let e;
    for (; (e = t.shift()); )
      try {
        e();
      } catch (i) {
        console.error(i);
      }
  }
  function Ks(t, e) {
    const i = t.indexOf(e);
    return ~i && t.splice(i, 1);
  }
  function ss() {}
  ss.prototype = {
    positions: [],
    init() {
      this.positions = [];
      let t;
      (this.unbind = $(document, "mousemove", (e) => (t = re(e)))),
        (this.interval = setInterval(() => {
          t &&
            (this.positions.push(t),
            this.positions.length > 5 && this.positions.shift());
        }, 50));
    },
    cancel() {
      var t;
      (t = this.unbind) == null || t.call(this), clearInterval(this.interval);
    },
    movesTo(t) {
      if (this.positions.length < 2) return !1;
      const e = t.getBoundingClientRect(),
        { left: i, right: s, top: n, bottom: o } = e,
        [r] = this.positions,
        a = se(this.positions),
        l = [r, a];
      return Ie(a, e)
        ? !1
        : [
            [
              { x: i, y: n },
              { x: s, y: o },
            ],
            [
              { x: i, y: o },
              { x: s, y: n },
            ],
          ].some((u) => {
            const f = kr(l, u);
            return f && Ie(f, e);
          });
    },
  };
  function kr(
    [{ x: t, y: e }, { x: i, y: s }],
    [{ x: n, y: o }, { x: r, y: a }]
  ) {
    const l = (a - o) * (i - t) - (r - n) * (s - e);
    if (l === 0) return !1;
    const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
    return h < 0 ? !1 : { x: t + h * (i - t), y: e + h * (s - e) };
  }
  function Zs(t, e, i = {}, { intersecting: s = !0 } = {}) {
    const n = new IntersectionObserver(
      s
        ? (o, r) => {
            o.some((a) => a.isIntersecting) && e(o, r);
          }
        : e,
      i
    );
    for (const o of T(t)) n.observe(o);
    return n;
  }
  const Sr = Ot && window.ResizeObserver;
  function ze(t, e, i = { box: "border-box" }) {
    if (Sr) return tn(ResizeObserver, t, e, i);
    const s = [
      $(window, "load resize", e),
      $(document, "loadedmetadata load", e, !0),
    ];
    return { disconnect: () => s.map((n) => n()) };
  }
  function ns(t) {
    return { disconnect: $([window, window.visualViewport], "resize", t) };
  }
  function Qs(t, e, i) {
    return tn(MutationObserver, t, e, i);
  }
  function tn(t, e, i, s) {
    const n = new t(i);
    for (const o of T(e)) n.observe(o, s);
    return n;
  }
  function en(t) {
    pi(t) && os(t, { func: "playVideo", method: "play" }), di(t) && t.play();
  }
  function sn(t) {
    pi(t) && os(t, { func: "pauseVideo", method: "pause" }), di(t) && t.pause();
  }
  function nn(t) {
    pi(t) && os(t, { func: "mute", method: "setVolume", value: 0 }),
      di(t) && (t.muted = !0);
  }
  function on(t) {
    return di(t) || pi(t);
  }
  function di(t) {
    return q(t, "video");
  }
  function pi(t) {
    return q(t, "iframe") && (rn(t) || an(t));
  }
  function rn(t) {
    return !!t.src.match(
      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
    );
  }
  function an(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }
  async function os(t, e) {
    await Cr(t), ln(t, e);
  }
  function ln(t, e) {
    t.contentWindow.postMessage(
      JSON.stringify({ event: "command", ...e }),
      "*"
    );
  }
  const rs = "_ukPlayer";
  let Ir = 0;
  function Cr(t) {
    if (t[rs]) return t[rs];
    const e = rn(t),
      i = an(t),
      s = ++Ir;
    let n;
    return (t[rs] = new Promise((o) => {
      e &&
        R(t, "load", () => {
          const r = () => ln(t, { event: "listening", id: s });
          (n = setInterval(r, 100)), r();
        }),
        R(window, "message", o, !1, ({ data: r }) => {
          try {
            return (
              (r = JSON.parse(r)),
              (e &&
                (r == null ? void 0 : r.id) === s &&
                r.event === "onReady") ||
                (i && Number(r == null ? void 0 : r.player_id) === s)
            );
          } catch {}
        }),
        (t.src = `${t.src}${m(t.src, "?") ? "&" : "?"}${
          e ? "enablejsapi=1" : `api=1&player_id=${s}`
        }`);
    }).then(() => clearInterval(n)));
  }
  function Tr(t, e = 0, i = 0) {
    return W(t)
      ? Hi(
          ...qt(t)
            .map((s) => {
              const { top: n, left: o, bottom: r, right: a } = lt(s);
              return { top: n - e, left: o - i, bottom: r + e, right: a + i };
            })
            .concat(S(t))
        )
      : !1;
  }
  function hn(t, { offset: e = 0 } = {}) {
    const i = W(t) ? ue(t, !1, ["hidden"]) : [];
    return i.reduce(
      (r, a, l) => {
        const { scrollTop: h, scrollHeight: u, offsetHeight: f } = a,
          d = lt(a),
          g = u - d.height,
          { height: y, top: C } = i[l - 1] ? lt(i[l - 1]) : S(t);
        let D = Math.ceil(C - d.top - e + h);
        return (
          e > 0 && f < y + e ? (D += e) : (e = 0),
          D > g ? ((e -= D - g), (D = g)) : D < 0 && ((e -= D), (D = 0)),
          () => s(a, D - h, t, g).then(r)
        );
      },
      () => Promise.resolve()
    )();
    function s(r, a, l, h) {
      return new Promise((u) => {
        const f = r.scrollTop,
          d = n(Math.abs(a)),
          g = Date.now(),
          y = cs(r) === r,
          C = S(l).top + (y ? 0 : f);
        let D = 0,
          wt = 15;
        (function Ke() {
          const Mi = o(Z((Date.now() - g) / d));
          let ft = 0;
          if (i[0] === r && f + a < h) {
            ft = S(l).top + (y ? 0 : r.scrollTop) - C;
            const be = ls(l);
            ft -= be ? S(be).height : 0;
          }
          (r.scrollTop = Math[a + ft > 0 ? "max" : "min"](
            r.scrollTop,
            f + (a + ft) * Mi
          )),
            Mi === 1 && (D === ft || !wt--)
              ? u()
              : ((D = ft), requestAnimationFrame(Ke));
        })();
      });
    }
    function n(r) {
      return 40 * Math.pow(r, 0.375);
    }
    function o(r) {
      return 0.5 * (1 - Math.cos(Math.PI * r));
    }
  }
  function as(t, e = 0, i = 0) {
    if (!W(t)) return 0;
    const s = bt(t, !0),
      { scrollHeight: n, scrollTop: o } = s,
      { height: r } = lt(s),
      a = n - r,
      l = Rt(t)[0] - Rt(s)[0],
      h = Math.max(0, l - r + e),
      u = Math.min(a, l + t.offsetHeight - i);
    return Z((o - h) / (u - h));
  }
  function ue(t, e = !1, i = []) {
    const s = cs(t);
    let n = Nt(t).reverse();
    n = n.slice(n.indexOf(s) + 1);
    const o = $t(n, (r) => c(r, "position") === "fixed");
    return (
      ~o && (n = n.slice(o)),
      [s]
        .concat(
          n.filter(
            (r) =>
              c(r, "overflow")
                .split(" ")
                .some((a) => m(["auto", "scroll", ...i], a)) &&
              (!e || r.scrollHeight > lt(r).height)
          )
        )
        .reverse()
    );
  }
  function bt(...t) {
    return ue(...t)[0];
  }
  function qt(t) {
    return ue(t, !1, ["hidden", "clip"]);
  }
  function lt(t) {
    const e = ie(t),
      {
        visualViewport: i,
        document: { documentElement: s },
      } = e;
    let n = t === cs(t) ? e : t;
    if (te(n) && i) {
      let { height: r, width: a, scale: l, pageTop: h, pageLeft: u } = i;
      return (
        (r = Math.round(r * l)),
        (a = Math.round(a * l)),
        { height: r, width: a, top: h, left: u, bottom: h + r, right: u + a }
      );
    }
    let o = S(n);
    if (c(n, "display") === "inline") return o;
    for (let [r, a, l, h] of [
      ["width", "x", "left", "right"],
      ["height", "y", "top", "bottom"],
    ]) {
      te(n) ? (n = s) : (o[l] += k(c(n, `border-${l}-width`)));
      const u = o[r] % 1;
      (o[r] = o[a] = n[`client${Ct(r)}`] - (u ? (u < 0.5 ? -u : 1 - u) : 0)),
        (o[h] = o[r] + o[l]);
    }
    return o;
  }
  function ls(t) {
    return t.ownerDocument.elementsFromPoint(S(t).left, 0).find(
      (e) =>
        !e.contains(t) &&
        ((hs(e, "fixed") &&
          cn(
            Nt(t)
              .reverse()
              .find((i) => !i.contains(e) && !hs(i, "static"))
          ) < cn(e)) ||
          (hs(e, "sticky") && E(e).contains(t)))
    );
  }
  function cn(t) {
    return k(c(t, "zIndex"));
  }
  function hs(t, e) {
    return c(t, "position") === e;
  }
  function cs(t) {
    return ie(t).document.scrollingElement;
  }
  const ht = [
    ["width", "x", "left", "right"],
    ["height", "y", "top", "bottom"],
  ];
  function un(t, e, i) {
    (i = {
      attach: {
        element: ["left", "top"],
        target: ["left", "top"],
        ...i.attach,
      },
      offset: [0, 0],
      placement: [],
      ...i,
    }),
      K(e) || (e = [e, e]),
      S(t, fn(t, e, i));
  }
  function fn(t, e, i) {
    const s = dn(t, e, i),
      { boundary: n, viewportOffset: o = 0, placement: r } = i;
    let a = s;
    for (const [l, [h, , u, f]] of Object.entries(ht)) {
      const d = Er(t, e[l], o, n, l);
      if (gi(s, d, l)) continue;
      let g = 0;
      if (r[l] === "flip") {
        const y = i.attach.target[l];
        if ((y === f && s[f] <= d[f]) || (y === u && s[u] >= d[u])) continue;
        g = _r(t, e, i, l)[u] - s[u];
        const C = Pr(t, e[l], o, l);
        if (!gi(us(s, g, l), C, l)) {
          if (gi(s, C, l)) continue;
          if (i.recursion) return !1;
          const D = Or(t, e, i);
          if (D && gi(D, C, 1 - l)) return D;
          continue;
        }
      } else if (r[l] === "shift") {
        const y = S(e[l]),
          { offset: C } = i;
        g =
          Z(Z(s[u], d[u], d[f] - s[h]), y[u] - s[h] + C[l], y[f] - C[l]) - s[u];
      }
      a = us(a, g, l);
    }
    return a;
  }
  function dn(t, e, i) {
    let { attach: s, offset: n } = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach,
        },
        offset: [0, 0],
        ...i,
      },
      o = S(t);
    for (const [r, [a, , l, h]] of Object.entries(ht)) {
      const u = s.target[r] === s.element[r] ? lt(e[r]) : S(e[r]);
      o = us(
        o,
        u[l] -
          o[l] +
          pn(s.target[r], h, u[a]) -
          pn(s.element[r], h, o[a]) +
          +n[r],
        r
      );
    }
    return o;
  }
  function us(t, e, i) {
    const [, s, n, o] = ht[i],
      r = { ...t };
    return (r[n] = t[s] = t[n] + e), (r[o] += e), r;
  }
  function pn(t, e, i) {
    return t === "center" ? i / 2 : t === e ? i : 0;
  }
  function Er(t, e, i, s, n) {
    let o = mn(...gn(t, e).map(lt));
    return (
      i && ((o[ht[n][2]] += i), (o[ht[n][3]] -= i)),
      s && (o = mn(o, S(K(s) ? s[n] : s))),
      o
    );
  }
  function Pr(t, e, i, s) {
    const [n, o, r, a] = ht[s],
      [l] = gn(t, e),
      h = lt(l);
    return (
      ["auto", "scroll"].includes(c(l, `overflow-${o}`)) &&
        ((h[r] -= l[`scroll${Ct(r)}`]), (h[a] = h[r] + l[`scroll${Ct(n)}`])),
      (h[r] += i),
      (h[a] -= i),
      h
    );
  }
  function gn(t, e) {
    return qt(e).filter((i) => i.contains(t));
  }
  function mn(...t) {
    let e = {};
    for (const i of t)
      for (const [, , s, n] of ht)
        (e[s] = Math.max(e[s] || 0, i[s])),
          (e[n] = Math.min(...[e[n], i[n]].filter(Boolean)));
    return e;
  }
  function gi(t, e, i) {
    const [, , s, n] = ht[i];
    return t[s] >= e[s] && t[n] <= e[n];
  }
  function _r(t, e, { offset: i, attach: s }, n) {
    return dn(t, e, {
      attach: { element: vn(s.element, n), target: vn(s.target, n) },
      offset: Ar(i, n),
    });
  }
  function Or(t, e, i) {
    return fn(t, e, {
      ...i,
      attach: {
        element: i.attach.element.map(bn).reverse(),
        target: i.attach.target.map(bn).reverse(),
      },
      offset: i.offset.reverse(),
      placement: i.placement.reverse(),
      recursion: !0,
    });
  }
  function vn(t, e) {
    const i = [...t],
      s = ht[e].indexOf(t[e]);
    return ~s && (i[e] = ht[e][1 - (s % 2) + 2]), i;
  }
  function bn(t) {
    for (let e = 0; e < ht.length; e++) {
      const i = ht[e].indexOf(t);
      if (~i) return ht[1 - e][(i % 2) + 2];
    }
  }
  function Ar(t, e) {
    return (t = [...t]), (t[e] *= -1), t;
  }
  var Mr = Object.freeze({
      __proto__: null,
      $: w,
      $$: z,
      Animation: _t,
      Dimensions: ei,
      MouseTracker: ss,
      Transition: M,
      addClass: b,
      after: ai,
      append: H,
      apply: It,
      assign: pt,
      attr: p,
      before: ri,
      boxModelAdjust: ae,
      camelize: xe,
      children: B,
      clamp: Z,
      closest: Hs,
      createEvent: Ft,
      css: c,
      data: Y,
      dimensions: x,
      each: Pt,
      empty: Zi,
      endsWith: Qt,
      escape: Vi,
      fastdom: X,
      filter: Pe,
      find: Ui,
      findAll: Oe,
      findIndex: $t,
      flipPosition: ci,
      fragment: Lt,
      getCoveringElement: ls,
      getEventPos: re,
      getIndex: ot,
      getTargetedElement: qi,
      hasAttr: kt,
      hasClass: I,
      hasOwn: dt,
      hasTouch: jt,
      height: tt,
      html: Ht,
      hyphenate: Mt,
      inBrowser: Ot,
      includes: m,
      index: ne,
      intersectRect: Hi,
      isArray: K,
      isBoolean: ee,
      isDocument: Ze,
      isElement: ye,
      isEmpty: Se,
      isEqual: ti,
      isFocusable: si,
      isFunction: et,
      isInView: Tr,
      isInput: ji,
      isNode: Qe,
      isNumber: ke,
      isNumeric: vt,
      isObject: Et,
      isPlainObject: xt,
      isRtl: U,
      isSameSiteAnchor: oe,
      isString: N,
      isTag: q,
      isTouch: St,
      isUndefined: G,
      isVideo: on,
      isVisible: W,
      isVoidElement: Ri,
      isWindow: te,
      last: se,
      matches: A,
      memoize: rt,
      mute: nn,
      noop: _,
      observeIntersection: Zs,
      observeMutation: Qs,
      observeResize: ze,
      observeViewportResize: ns,
      off: zt,
      offset: S,
      offsetPosition: Rt,
      offsetViewport: lt,
      on: $,
      once: R,
      overflowParents: qt,
      parent: E,
      parents: Nt,
      pause: sn,
      pick: Fi,
      play: en,
      pointInRect: Ie,
      pointerCancel: fi,
      pointerDown: gt,
      pointerEnter: ce,
      pointerLeave: Ne,
      pointerMove: ui,
      pointerUp: At,
      position: ts,
      positionAt: un,
      prepend: pr,
      propName: ni,
      query: it,
      queryAll: _e,
      ready: dr,
      remove: at,
      removeAttr: Ce,
      removeClass: O,
      removeClasses: Wi,
      replaceClass: ii,
      scrollIntoView: hn,
      scrollParent: bt,
      scrollParents: ue,
      scrolledOver: as,
      selFocusable: Ee,
      selInput: Te,
      sortBy: Ns,
      startsWith: ut,
      sumBy: Dt,
      swap: zi,
      toArray: Tt,
      toBoolean: Ni,
      toEventTargets: Yi,
      toFloat: k,
      toNode: F,
      toNodes: T,
      toNumber: yt,
      toPx: Q,
      toWindow: ie,
      toggleClass: j,
      trigger: v,
      ucfirst: Ct,
      uniqueBy: zs,
      unwrap: Me,
      width: De,
      within: Ls,
      wrapAll: hi,
      wrapInner: Qi,
    }),
    st = {
      connected() {
        b(this.$el, this.$options.id);
      },
    };
  const Dr = ["days", "hours", "minutes", "seconds"];
  var Br = {
    mixins: [st],
    props: { date: String, clsWrapper: String, role: String },
    data: { date: "", clsWrapper: ".uk-countdown-%unit%", role: "timer" },
    connected() {
      p(this.$el, "role", this.role),
        (this.date = k(Date.parse("2024-12-25"))),
        (this.end = !1),
        this.start();
    },
    disconnected() {
      this.stop();
    },
    events: {
      name: "visibilitychange",
      el() {
        return document;
      },
      handler() {
        document.hidden ? this.stop() : this.start();
      },
    },
    methods: {
      start() {
        this.stop(),
          this.update(),
          this.timer ||
            (v(this.$el, "countdownstart"),
            (this.timer = setInterval(this.update, 1e3)));
      },
      stop() {
        this.timer &&
          (clearInterval(this.timer),
          v(this.$el, "countdownstop"),
          (this.timer = null));
      },
      update() {
        const t = Nr(this.date);
        t.total ||
          (this.stop(),
          this.end || (v(this.$el, "countdownend"), (this.end = !0)));
        for (const e of Dr) {
          const i = w(this.clsWrapper.replace("%unit%", e), this.$el);
          if (!i) continue;
          let s = String(Math.trunc(t[e]));
          (s = s.length < 2 ? `0${s}` : s),
            i.textContent !== s &&
              ((s = s.split("")),
              s.length !== i.children.length &&
                Ht(i, s.map(() => "<span></span>").join("")),
              s.forEach((n, o) => (i.children[o].textContent = n)));
        }
      },
    },
  };
  function Nr(t) {
    const e = Math.max(0, t - Date.now()) / 1e3;
    return {
      total: e,
      seconds: e % 60,
      minutes: (e / 60) % 60,
      hours: (e / 60 / 60) % 24,
      days: e / 60 / 60 / 24,
    };
  }
  const V = {};
  (V.events =
    V.watch =
    V.observe =
    V.created =
    V.beforeConnect =
    V.connected =
    V.beforeDisconnect =
    V.disconnected =
    V.destroy =
      fs),
    (V.args = function (t, e) {
      return e !== !1 && fs(e || t);
    }),
    (V.update = function (t, e) {
      return Ns(fs(t, et(e) ? { read: e } : e), "order");
    }),
    (V.props = function (t, e) {
      if (K(e)) {
        const i = {};
        for (const s of e) i[s] = String;
        e = i;
      }
      return V.methods(t, e);
    }),
    (V.computed = V.methods =
      function (t, e) {
        return e ? (t ? { ...t, ...e } : e) : t;
      }),
    (V.i18n = V.data =
      function (t, e, i) {
        return i
          ? wn(t, e, i)
          : e
          ? t
            ? function (s) {
                return wn(t, e, s);
              }
            : e
          : t;
      });
  function wn(t, e, i) {
    return V.computed(et(t) ? t.call(i, i) : t, et(e) ? e.call(i, i) : e);
  }
  function fs(t, e) {
    return (
      (t = t && !K(t) ? [t] : t), e ? (t ? t.concat(e) : K(e) ? e : [e]) : t
    );
  }
  function zr(t, e) {
    return G(e) ? t : e;
  }
  function Fe(t, e, i) {
    const s = {};
    if (
      (et(e) && (e = e.options),
      e.extends && (t = Fe(t, e.extends, i)),
      e.mixins)
    )
      for (const o of e.mixins) t = Fe(t, o, i);
    for (const o in t) n(o);
    for (const o in e) dt(t, o) || n(o);
    function n(o) {
      s[o] = (V[o] || zr)(t[o], e[o], i);
    }
    return s;
  }
  function fe(t, e = []) {
    try {
      return t
        ? ut(t, "{")
          ? JSON.parse(t)
          : e.length && !m(t, ":")
          ? { [e[0]]: t }
          : t.split(";").reduce((i, s) => {
              const [n, o] = s.split(/:(.*)/);
              return n && !G(o) && (i[n.trim()] = o.trim()), i;
            }, {})
        : {};
    } catch {
      return {};
    }
  }
  function ds(t, e) {
    return t === Boolean
      ? Ni(e)
      : t === Number
      ? yt(e)
      : t === "list"
      ? Hr(e)
      : t === Object && N(e)
      ? fe(e)
      : t
      ? t(e)
      : e;
  }
  const Fr = /,(?![^(]*\))/;
  function Hr(t) {
    return K(t)
      ? t
      : N(t)
      ? t.split(Fr).map((e) => (vt(e) ? yt(e) : Ni(e.trim())))
      : [t];
  }
  function Lr(t) {
    (t._data = {}), (t._updates = [...(t.$options.update || [])]);
  }
  function Wr(t, e) {
    t._updates.unshift(e);
  }
  function Rr(t) {
    delete t._data;
  }
  function He(t, e = "update") {
    t._connected &&
      t._updates.length &&
      (t._queued ||
        ((t._queued = new Set()),
        X.read(() => {
          t._connected && jr(t, t._queued), delete t._queued;
        })),
      t._queued.add(e.type || e));
  }
  function jr(t, e) {
    for (const { read: i, write: s, events: n = [] } of t._updates) {
      if (!e.has("update") && !n.some((r) => e.has(r))) continue;
      let o;
      i && ((o = i.call(t, t._data, e)), o && xt(o) && pt(t._data, o)),
        s &&
          o !== !1 &&
          X.write(() => {
            t._connected && s.call(t, t._data, e);
          });
    }
  }
  function mt(t) {
    return We(ze, t, "resize");
  }
  function de(t) {
    return We(Zs, t);
  }
  function ps(t) {
    return We(Qs, t);
  }
  function Le(t = {}) {
    return de({
      handler: function (e, i) {
        const { targets: s = this.$el, preload: n = 5 } = t;
        for (const o of T(et(s) ? s(this) : s))
          z('[loading="lazy"]', o)
            .slice(0, n - 1)
            .forEach((r) => Ce(r, "loading"));
        for (const o of e
          .filter(({ isIntersecting: r }) => r)
          .map(({ target: r }) => r))
          i.unobserve(o);
      },
      ...t,
    });
  }
  function gs(t) {
    return We((e, i) => ns(i), t);
  }
  function mi(t) {
    return We(
      (e, i) => ({ disconnect: $(Ur(e), "scroll", i, { passive: !0 }) }),
      t,
      "scroll"
    );
  }
  function $n(t) {
    return {
      observe(e, i) {
        return {
          observe: _,
          unobserve: _,
          disconnect: $(e, gt, i, { passive: !0 }),
        };
      },
      handler(e) {
        if (!St(e)) return;
        const i = re(e),
          s = "tagName" in e.target ? e.target : E(e.target);
        R(document, `${At} ${fi} scroll`, (n) => {
          const { x: o, y: r } = re(n);
          ((n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100) ||
            (r && Math.abs(i.y - r) > 100)) &&
            setTimeout(() => {
              v(s, "swipe"), v(s, `swipe${qr(i.x, i.y, o, r)}`);
            });
        });
      },
      ...t,
    };
  }
  function We(t, e, i) {
    return {
      observe: t,
      handler() {
        He(this, i);
      },
      ...e,
    };
  }
  function qr(t, e, i, s) {
    return Math.abs(t - i) >= Math.abs(e - s)
      ? t - i > 0
        ? "Left"
        : "Right"
      : e - s > 0
      ? "Up"
      : "Down";
  }
  function Ur(t) {
    return T(t).map((e) => {
      const { ownerDocument: i } = e,
        s = bt(e, !0);
      return s === i.scrollingElement ? i : s;
    });
  }
  var xn = {
    props: { margin: String, firstColumn: Boolean },
    data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
    observe: [
      ps({
        options: { childList: !0, attributes: !0, attributeFilter: ["style"] },
      }),
      mt({ target: ({ $el: t }) => [t, ...B(t)] }),
    ],
    update: {
      read() {
        return { rows: ms(Tt(this.$el.children)) };
      },
      write({ rows: t }) {
        for (const e of t)
          for (const i of e)
            j(i, this.margin, t[0] !== e),
              j(i, this.firstColumn, e[U ? e.length - 1 : 0] === i);
      },
      events: ["resize"],
    },
  };
  function ms(t) {
    const e = [[]],
      i = t.some((s, n) => n && t[n - 1].offsetParent !== s.offsetParent);
    for (const s of t) {
      if (!W(s)) continue;
      const n = vs(s, i);
      for (let o = e.length - 1; o >= 0; o--) {
        const r = e[o];
        if (!r[0]) {
          r.push(s);
          break;
        }
        const a = vs(r[0], i);
        if (n.top >= a.bottom - 1 && n.top !== a.top) {
          e.push([s]);
          break;
        }
        if (n.bottom - 1 > a.top || n.top === a.top) {
          let l = r.length - 1;
          for (; l >= 0; l--) {
            const h = vs(r[l], i);
            if (n.left >= h.left) break;
          }
          r.splice(l + 1, 0, s);
          break;
        }
        if (o === 0) {
          e.unshift([s]);
          break;
        }
      }
    }
    return e;
  }
  function vs(t, e = !1) {
    let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o } = t;
    return (
      e && ([i, s] = Rt(t)), { top: i, left: s, bottom: i + n, right: s + o }
    );
  }
  const bs = "uk-transition-leave",
    ws = "uk-transition-enter";
  function yn(t, e, i, s = 0) {
    const n = vi(e, !0),
      o = { opacity: 1 },
      r = { opacity: 0 },
      a = (u) => () => n === vi(e) ? u() : Promise.reject(),
      l = a(async () => {
        b(e, bs),
          await Promise.all(
            Sn(e).map(
              (u, f) =>
                new Promise((d) =>
                  setTimeout(() => M.start(u, r, i / 2, "ease").then(d), f * s)
                )
            )
          ),
          O(e, bs);
      }),
      h = a(async () => {
        const u = tt(e);
        b(e, ws), t(), c(B(e), { opacity: 0 }), await Vr();
        const f = B(e),
          d = tt(e);
        c(e, "alignContent", "flex-start"), tt(e, u);
        const g = Sn(e);
        c(f, r);
        const y = g.map(async (C, D) => {
          await Gr(D * s), await M.start(C, o, i / 2, "ease");
        });
        u !== d &&
          y.push(M.start(e, { height: d }, i / 2 + g.length * s, "ease")),
          await Promise.all(y).then(() => {
            O(e, ws),
              n === vi(e) &&
                (c(e, { height: "", alignContent: "" }),
                c(f, { opacity: "" }),
                delete e.dataset.transition);
          });
      });
    return I(e, bs)
      ? kn(e).then(h)
      : I(e, ws)
      ? kn(e).then(l).then(h)
      : l().then(h);
  }
  function vi(t, e) {
    return (
      e && (t.dataset.transition = 1 + vi(t)), yt(t.dataset.transition) || 0
    );
  }
  function kn(t) {
    return Promise.all(
      B(t)
        .filter(M.inProgress)
        .map(
          (e) => new Promise((i) => R(e, "transitionend transitioncanceled", i))
        )
    );
  }
  function Sn(t) {
    return ms(B(t))
      .flat()
      .filter((e) => W(e));
  }
  function Vr() {
    return new Promise((t) => requestAnimationFrame(t));
  }
  function Gr(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  async function Yr(t, e, i) {
    await Tn();
    let s = B(e);
    const n = s.map((d) => In(d, !0)),
      o = { ...c(e, ["height", "padding"]), display: "block" };
    await Promise.all(s.concat(e).map(M.cancel)),
      t(),
      (s = s.concat(B(e).filter((d) => !m(s, d)))),
      await Promise.resolve(),
      X.flush();
    const r = p(e, "style"),
      a = c(e, ["height", "padding"]),
      [l, h] = Xr(e, s, n),
      u = s.map((d) => ({ style: p(d, "style") }));
    s.forEach((d, g) => h[g] && c(d, h[g])),
      c(e, o),
      v(e, "scroll"),
      X.flush(),
      await Tn();
    const f = s
      .map((d, g) => E(d) === e && M.start(d, l[g], i, "ease"))
      .concat(M.start(e, a, i, "ease"));
    try {
      await Promise.all(f),
        s.forEach((d, g) => {
          p(d, u[g]),
            E(d) === e && c(d, "display", l[g].opacity === 0 ? "none" : "");
        }),
        p(e, "style", r);
    } catch {
      p(s, "style", ""), Jr(e, o);
    }
  }
  function In(t, e) {
    const i = c(t, "zIndex");
    return W(t)
      ? {
          display: "",
          opacity: e ? c(t, "opacity") : "0",
          pointerEvents: "none",
          position: "absolute",
          zIndex: i === "auto" ? ne(t) : i,
          ...Cn(t),
        }
      : !1;
  }
  function Xr(t, e, i) {
    const s = e.map((o, r) =>
        E(o) && r in i
          ? i[r]
            ? W(o)
              ? Cn(o)
              : { opacity: 0 }
            : { opacity: W(o) ? 1 : 0 }
          : !1
      ),
      n = s.map((o, r) => {
        const a = E(e[r]) === t && (i[r] || In(e[r]));
        if (!a) return !1;
        if (!o) delete a.opacity;
        else if (!("opacity" in o)) {
          const { opacity: l } = a;
          l % 1 ? (o.opacity = 1) : delete a.opacity;
        }
        return a;
      });
    return [s, n];
  }
  function Jr(t, e) {
    for (const i in e) c(t, i, "");
  }
  function Cn(t) {
    const { height: e, width: i } = S(t);
    return {
      height: e,
      width: i,
      transform: "",
      ...ts(t),
      ...c(t, ["marginTop", "marginLeft"]),
    };
  }
  function Tn() {
    return new Promise((t) => requestAnimationFrame(t));
  }
  var En = {
    props: { duration: Number, animation: Boolean },
    data: { duration: 150, animation: "slide" },
    methods: {
      animate(t, e = this.$el) {
        const i = this.animation;
        return (
          i === "fade"
            ? yn
            : i === "delayed-fade"
            ? (...n) => yn(...n, 40)
            : i
            ? Yr
            : () => (t(), Promise.resolve())
        )(t, e, this.duration).catch(_);
      },
    },
  };
  const P = {
    TAB: 9,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };
  var Kr = {
    mixins: [En],
    args: "target",
    props: { target: String, selActive: Boolean },
    data: {
      target: "",
      selActive: !1,
      attrItem: "uk-filter-control",
      cls: "uk-active",
      duration: 250,
    },
    computed: {
      children: ({ target: t }, e) => z(`${t} > *`, e),
      toggles: ({ attrItem: t }, e) => z(`[${t}],[data-${t}]`, e),
    },
    watch: {
      toggles(t) {
        this.updateState();
        const e = z(this.selActive, this.$el);
        for (const i of t) {
          this.selActive !== !1 && j(i, this.cls, m(e, i));
          const s = sa(i);
          q(s, "a") && p(s, "role", "button");
        }
      },
      children(t, e) {
        e && this.updateState();
      },
    },
    events: {
      name: "click keydown",
      delegate() {
        return `[${this.attrItem}],[data-${this.attrItem}]`;
      },
      handler(t) {
        (t.type === "keydown" && t.keyCode !== P.SPACE) ||
          (t.target.closest("a,button") &&
            (t.preventDefault(), this.apply(t.current)));
      },
    },
    methods: {
      apply(t) {
        const e = this.getState(),
          i = _n(t, this.attrItem, this.getState());
        Zr(e, i) || this.setState(i);
      },
      getState() {
        return this.toggles
          .filter((t) => I(t, this.cls))
          .reduce((t, e) => _n(e, this.attrItem, t), {
            filter: { "": "" },
            sort: [],
          });
      },
      async setState(t, e = !0) {
        (t = { filter: { "": "" }, sort: [], ...t }),
          v(this.$el, "beforeFilter", [this, t]);
        for (const i of this.toggles) j(i, this.cls, ta(i, this.attrItem, t));
        await Promise.all(
          z(this.target, this.$el).map((i) => {
            const s = () => {
              Qr(t, i, B(i)), this.$update(this.$el);
            };
            return e ? this.animate(s, i) : s();
          })
        ),
          v(this.$el, "afterFilter", [this]);
      },
      updateState() {
        X.write(() => this.setState(this.getState(), !1));
      },
    },
  };
  function Pn(t, e) {
    return fe(Y(t, e), ["filter"]);
  }
  function Zr(t, e) {
    return ["filter", "sort"].every((i) => ti(t[i], e[i]));
  }
  function Qr(t, e, i) {
    const s = ea(t);
    i.forEach((r) => c(r, "display", s && !A(r, s) ? "none" : ""));
    const [n, o] = t.sort;
    if (n) {
      const r = ia(i, n, o);
      ti(r, i) || H(e, r);
    }
  }
  function _n(t, e, i) {
    const { filter: s, group: n, sort: o, order: r = "asc" } = Pn(t, e);
    return (
      (s || G(o)) &&
        (n
          ? s
            ? (delete i.filter[""], (i.filter[n] = s))
            : (delete i.filter[n],
              (Se(i.filter) || "" in i.filter) && (i.filter = { "": s || "" }))
          : (i.filter = { "": s || "" })),
      G(o) || (i.sort = [o, r]),
      i
    );
  }
  function ta(t, e, { filter: i = { "": "" }, sort: [s, n] }) {
    const {
      filter: o = "",
      group: r = "",
      sort: a,
      order: l = "asc",
    } = Pn(t, e);
    return G(a)
      ? (r in i && o === i[r]) || (!o && r && !(r in i) && !i[""])
      : s === a && n === l;
  }
  function ea({ filter: t }) {
    let e = "";
    return Pt(t, (i) => (e += i || "")), e;
  }
  function ia(t, e, i) {
    return [...t].sort(
      (s, n) =>
        Y(s, e).localeCompare(Y(n, e), void 0, { numeric: !0 }) *
        (i === "asc" || -1)
    );
  }
  function sa(t) {
    return w("a,button", t) || t;
  }
  var Re = {
    props: { container: Boolean },
    data: { container: !0 },
    computed: {
      container({ container: t }) {
        return (t === !0 && this.$container) || (t && w(t));
      },
    },
  };
  let $s;
  function On(t) {
    const e = $(
      t,
      "touchmove",
      (s) => {
        if (s.targetTouches.length !== 1 || A(s.target, 'input[type="range"'))
          return;
        let { scrollHeight: n, clientHeight: o } = bt(s.target);
        o >= n && s.cancelable && s.preventDefault();
      },
      { passive: !1 }
    );
    if ($s) return e;
    $s = !0;
    const { scrollingElement: i } = document;
    return (
      c(i, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: De(window) - i.clientWidth || "",
      }),
      () => {
        ($s = !1),
          e(),
          c(i, { overflowY: "", touchAction: "", paddingRight: "" });
      }
    );
  }
  var Ut = {
    props: {
      cls: Boolean,
      animation: "list",
      duration: Number,
      velocity: Number,
      origin: String,
      transition: String,
    },
    data: {
      cls: !1,
      animation: [!1],
      duration: 200,
      velocity: 0.2,
      origin: !1,
      transition: "ease",
      clsEnter: "uk-togglabe-enter",
      clsLeave: "uk-togglabe-leave",
    },
    computed: {
      hasAnimation: ({ animation: t }) => !!t[0],
      hasTransition: ({ animation: t }) =>
        ["slide", "reveal"].some((e) => ut(t[0], e)),
    },
    methods: {
      async toggleElement(t, e, i) {
        try {
          return (
            await Promise.all(
              T(t).map((s) => {
                const n = ee(e) ? e : !this.isToggled(s);
                if (!v(s, `before${n ? "show" : "hide"}`, [this]))
                  return Promise.reject();
                const o = (
                    et(i)
                      ? i
                      : i === !1 || !this.hasAnimation
                      ? na
                      : this.hasTransition
                      ? oa
                      : ra
                  )(s, n, this),
                  r = n ? this.clsEnter : this.clsLeave;
                b(s, r), v(s, n ? "show" : "hide", [this]);
                const a = () => {
                  O(s, r), v(s, n ? "shown" : "hidden", [this]);
                };
                return o ? o.then(a, () => (O(s, r), Promise.reject())) : a();
              })
            ),
            !0
          );
        } catch {
          return !1;
        }
      },
      isToggled(t = this.$el) {
        return (
          (t = F(t)),
          I(t, this.clsEnter)
            ? !0
            : I(t, this.clsLeave)
            ? !1
            : this.cls
            ? I(t, this.cls.split(" ")[0])
            : W(t)
        );
      },
      _toggle(t, e) {
        if (!t) return;
        e = !!e;
        let i;
        this.cls
          ? ((i = m(this.cls, " ") || e !== I(t, this.cls)),
            i && j(t, this.cls, m(this.cls, " ") ? void 0 : e))
          : ((i = e === t.hidden), i && (t.hidden = !e)),
          z("[autofocus]", t).some((s) => (W(s) ? s.focus() || !0 : s.blur())),
          i && v(t, "toggled", [e, this]);
      },
    },
  };
  function na(t, e, { _toggle: i }) {
    return _t.cancel(t), M.cancel(t), i(t, e);
  }
  async function oa(
    t,
    e,
    { animation: i, duration: s, velocity: n, transition: o, _toggle: r }
  ) {
    var a;
    const [l = "reveal", h = "top"] =
        ((a = i[0]) == null ? void 0 : a.split("-")) || [],
      u = [
        ["left", "right"],
        ["top", "bottom"],
      ],
      f = u[m(u[0], h) ? 0 : 1],
      d = f[1] === h,
      y = ["width", "height"][u.indexOf(f)],
      C = `margin-${f[0]}`,
      D = `margin-${h}`;
    let wt = x(t)[y];
    const Ke = M.inProgress(t);
    await M.cancel(t), e && r(t, !0);
    const Mi = Object.fromEntries(
        [
          "padding",
          "border",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "overflowY",
          "overflowX",
          C,
          D,
        ].map((Yo) => [Yo, t.style[Yo]])
      ),
      ft = x(t),
      be = k(c(t, C)),
      Uo = k(c(t, D)),
      Zt = ft[y] + Uo;
    !Ke && !e && (wt += Uo);
    const [Di] = Qi(t, "<div>");
    c(Di, {
      boxSizing: "border-box",
      height: ft.height,
      width: ft.width,
      ...c(t, [
        "overflow",
        "padding",
        "borderTop",
        "borderRight",
        "borderBottom",
        "borderLeft",
        "borderImage",
        D,
      ]),
    }),
      c(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [D]: 0,
        width: ft.width,
        height: ft.height,
        overflow: "hidden",
        [y]: wt,
      });
    const Vo = wt / Zt;
    s = (n * Zt + s) * (e ? 1 - Vo : Vo);
    const Go = { [y]: e ? Zt : 0 };
    d && (c(t, C, Zt - wt + be), (Go[C] = e ? be : Zt + be)),
      !d ^ (l === "reveal") &&
        (c(Di, C, -Zt + wt), M.start(Di, { [C]: e ? 0 : -Zt }, s, o));
    try {
      await M.start(t, Go, s, o);
    } finally {
      c(t, Mi), Me(Di.firstChild), e || r(t, !1);
    }
  }
  function ra(t, e, i) {
    const { animation: s, duration: n, _toggle: o } = i;
    return e
      ? (o(t, !0), _t.in(t, s[0], n, i.origin))
      : _t.out(t, s[1] || s[0], n, i.origin).then(() => o(t, !1));
  }
  const nt = [];
  var xs = {
    mixins: [st, Re, Ut],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean,
      role: String,
    },
    data: {
      cls: "uk-open",
      escClose: !0,
      bgClose: !0,
      overlay: !0,
      stack: !1,
      role: "dialog",
    },
    computed: {
      panel: ({ selPanel: t }, e) => w(t, e),
      transitionElement() {
        return this.panel;
      },
      bgClose({ bgClose: t }) {
        return t && this.panel;
      },
    },
    connected() {
      p(this.panel || this.$el, "role", this.role),
        this.overlay && p(this.panel || this.$el, "aria-modal", !0);
    },
    beforeDisconnect() {
      m(nt, this) && this.toggleElement(this.$el, !1, !1);
    },
    events: [
      {
        name: "click",
        delegate() {
          return `${this.selClose},a[href*="#"]`;
        },
        handler(t) {
          const { current: e, defaultPrevented: i } = t,
            { hash: s } = e;
          !i && s && oe(e) && !this.$el.contains(w(s))
            ? this.hide()
            : A(e, this.selClose) && (t.preventDefault(), this.hide());
        },
      },
      {
        name: "toggle",
        self: !0,
        handler(t) {
          t.defaultPrevented ||
            (t.preventDefault(),
            this.isToggled() === m(nt, this) && this.toggle());
        },
      },
      {
        name: "beforeshow",
        self: !0,
        handler(t) {
          if (m(nt, this)) return !1;
          !this.stack && nt.length
            ? (Promise.all(nt.map((e) => e.hide())).then(this.show),
              t.preventDefault())
            : nt.push(this);
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          this.stack &&
            c(this.$el, "zIndex", k(c(this.$el, "zIndex")) + nt.length);
          const t = [
            this.overlay && la(this),
            this.overlay && On(this.$el),
            this.bgClose && ha(this),
            this.escClose && ca(this),
          ];
          R(this.$el, "hidden", () => t.forEach((e) => e && e()), { self: !0 }),
            b(document.documentElement, this.clsPage);
        },
      },
      {
        name: "shown",
        self: !0,
        handler() {
          si(this.$el) || p(this.$el, "tabindex", "-1"),
            A(this.$el, ":focus-within") || this.$el.focus();
        },
      },
      {
        name: "hidden",
        self: !0,
        handler() {
          m(nt, this) && nt.splice(nt.indexOf(this), 1),
            c(this.$el, "zIndex", ""),
            nt.some((t) => t.clsPage === this.clsPage) ||
              O(document.documentElement, this.clsPage);
        },
      },
    ],
    methods: {
      toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show() {
        return this.container && E(this.$el) !== this.container
          ? (H(this.container, this.$el),
            new Promise((t) =>
              requestAnimationFrame(() => this.show().then(t))
            ))
          : this.toggleElement(this.$el, !0, An);
      },
      hide() {
        return this.toggleElement(this.$el, !1, An);
      },
    },
  };
  function An(t, e, { transitionElement: i, _toggle: s }) {
    return new Promise((n, o) =>
      R(t, "show hide", () => {
        var r;
        (r = t._reject) == null || r.call(t), (t._reject = o), s(t, e);
        const a = R(
            i,
            "transitionstart",
            () => {
              R(i, "transitionend transitioncancel", n, { self: !0 }),
                clearTimeout(l);
            },
            { self: !0 }
          ),
          l = setTimeout(() => {
            a(), n();
          }, aa(c(i, "transitionDuration")));
      })
    ).then(() => delete t._reject);
  }
  function aa(t) {
    return t ? (Qt(t, "ms") ? k(t) : k(t) * 1e3) : 0;
  }
  function la(t) {
    return $(document, "focusin", (e) => {
      se(nt) === t && !t.$el.contains(e.target) && t.$el.focus();
    });
  }
  function ha(t) {
    return $(document, gt, ({ target: e }) => {
      se(nt) !== t ||
        (t.overlay && !t.$el.contains(e)) ||
        t.panel.contains(e) ||
        R(
          document,
          `${At} ${fi} scroll`,
          ({ defaultPrevented: i, type: s, target: n }) => {
            !i && s === At && e === n && t.hide();
          },
          !0
        );
    });
  }
  function ca(t) {
    return $(document, "keydown", (e) => {
      e.keyCode === 27 && se(nt) === t && t.hide();
    });
  }
  var ys = {
    slide: {
      show(t) {
        return [{ transform: L(t * -100) }, { transform: L() }];
      },
      percent(t) {
        return je(t);
      },
      translate(t, e) {
        return [
          { transform: L(e * -100 * t) },
          { transform: L(e * 100 * (1 - t)) },
        ];
      },
    },
  };
  function je(t) {
    return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth);
  }
  function L(t = 0, e = "%") {
    return (t += t ? e : ""), `translate3d(${t}, 0, 0)`;
  }
  function pe(t) {
    return `scale3d(${t}, ${t}, 1)`;
  }
  function ua(t, e, i, { animation: s, easing: n }) {
    const { percent: o, translate: r, show: a = _ } = s,
      l = a(i);
    let h;
    return {
      dir: i,
      show(u, f = 0, d) {
        const g = d ? "linear" : n;
        return (
          (u -= Math.round(u * Z(f, -1, 1))),
          this.translate(f),
          bi(e, "itemin", { percent: f, duration: u, timing: g, dir: i }),
          bi(t, "itemout", { percent: 1 - f, duration: u, timing: g, dir: i }),
          new Promise((y) => {
            h || (h = y),
              Promise.all([
                M.start(e, l[1], u, g),
                M.start(t, l[0], u, g),
              ]).then(() => {
                this.reset(), h();
              }, _);
          })
        );
      },
      cancel() {
        return M.cancel([e, t]);
      },
      reset() {
        for (const u in l[0]) c([e, t], u, "");
      },
      async forward(u, f = this.percent()) {
        return await this.cancel(), this.show(u, f, !0);
      },
      translate(u) {
        this.reset();
        const f = r(u, i);
        c(e, f[1]),
          c(t, f[0]),
          bi(e, "itemtranslatein", { percent: u, dir: i }),
          bi(t, "itemtranslateout", { percent: 1 - u, dir: i });
      },
      percent() {
        return o(t || e, e, i);
      },
      getDistance() {
        return t == null ? void 0 : t.offsetWidth;
      },
    };
  }
  function bi(t, e, i) {
    v(t, Ft(e, !1, !1, i));
  }
  var wi = {
      props: { i18n: Object },
      data: { i18n: null },
      methods: {
        t(t, ...e) {
          var i, s, n;
          let o = 0;
          return (
            ((n =
              ((i = this.i18n) == null ? void 0 : i[t]) ||
              ((s = this.$options.i18n) == null ? void 0 : s[t])) == null
              ? void 0
              : n.replace(/%s/g, () => e[o++] || "")) || ""
          );
        },
      },
    },
    fa = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean,
      },
      data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
      connected() {
        p(this.list, "aria-live", this.autoplay ? "off" : "polite"),
          this.autoplay && this.startAutoplay();
      },
      disconnected() {
        this.stopAutoplay();
      },
      update() {
        p(this.slides, "tabindex", "-1");
      },
      events: [
        {
          name: "visibilitychange",
          el() {
            return document;
          },
          filter() {
            return this.autoplay;
          },
          handler() {
            document.hidden ? this.stopAutoplay() : this.startAutoplay();
          },
        },
      ],
      methods: {
        startAutoplay() {
          this.stopAutoplay(),
            (this.interval = setInterval(() => {
              this.stack.length ||
                (this.draggable && A(this.$el, ":focus-within")) ||
                (this.pauseOnHover && A(this.$el, ":hover")) ||
                this.show("next");
            }, this.autoplayInterval));
        },
        stopAutoplay() {
          clearInterval(this.interval);
        },
      },
    };
  const ks = { passive: !1, capture: !0 },
    Mn = { passive: !0, capture: !0 },
    da = "touchstart mousedown",
    Ss = "touchmove mousemove",
    Dn = "touchend touchcancel mouseup click input scroll";
  var pa = {
    props: { draggable: Boolean },
    data: { draggable: !0, threshold: 10 },
    created() {
      for (const t of ["start", "move", "end"]) {
        const e = this[t];
        this[t] = (i) => {
          const s = re(i).x * (U ? -1 : 1);
          (this.prevPos = s === this.pos ? this.prevPos : this.pos),
            (this.pos = s),
            e(i);
        };
      }
    },
    events: [
      {
        name: da,
        passive: !0,
        delegate() {
          return `${this.selList} > *`;
        },
        handler(t) {
          !this.draggable ||
            (!St(t) && ga(t.target)) ||
            t.target.closest(Te) ||
            t.button > 0 ||
            this.length < 2 ||
            this.start(t);
        },
      },
      {
        name: "dragstart",
        handler(t) {
          t.preventDefault();
        },
      },
      {
        name: Ss,
        el() {
          return this.list;
        },
        handler: _,
        ...ks,
      },
    ],
    methods: {
      start() {
        (this.drag = this.pos),
          this._transitioner
            ? ((this.percent = this._transitioner.percent()),
              (this.drag +=
                this._transitioner.getDistance() * this.percent * this.dir),
              this._transitioner.cancel(),
              this._transitioner.translate(this.percent),
              (this.dragging = !0),
              (this.stack = []))
            : (this.prevIndex = this.index),
          $(document, Ss, this.move, ks),
          $(document, Dn, this.end, Mn),
          c(this.list, "userSelect", "none");
      },
      move(t) {
        const e = this.pos - this.drag;
        if (
          e === 0 ||
          this.prevPos === this.pos ||
          (!this.dragging && Math.abs(e) < this.threshold)
        )
          return;
        c(this.list, "pointerEvents", "none"),
          t.cancelable && t.preventDefault(),
          (this.dragging = !0),
          (this.dir = e < 0 ? 1 : -1);
        let { slides: i, prevIndex: s } = this,
          n = Math.abs(e),
          o = this.getIndex(s + this.dir),
          r = this._getDistance(s, o);
        for (; o !== s && n > r; )
          (this.drag -= r * this.dir),
            (s = o),
            (n -= r),
            (o = this.getIndex(s + this.dir)),
            (r = this._getDistance(s, o));
        this.percent = n / r;
        const a = i[s],
          l = i[o],
          h = this.index !== o,
          u = s === o;
        let f;
        for (const d of [this.index, this.prevIndex])
          m([o, s], d) ||
            (v(i[d], "itemhidden", [this]),
            u && ((f = !0), (this.prevIndex = s)));
        ((this.index === s && this.prevIndex !== s) || f) &&
          v(i[this.index], "itemshown", [this]),
          h &&
            ((this.prevIndex = s),
            (this.index = o),
            !u && v(a, "beforeitemhide", [this]),
            v(l, "beforeitemshow", [this])),
          (this._transitioner = this._translate(
            Math.abs(this.percent),
            a,
            !u && l
          )),
          h && (!u && v(a, "itemhide", [this]), v(l, "itemshow", [this]));
      },
      end() {
        if (
          (zt(document, Ss, this.move, ks),
          zt(document, Dn, this.end, Mn),
          this.dragging)
        )
          if (((this.dragging = null), this.index === this.prevIndex))
            (this.percent = 1 - this.percent),
              (this.dir *= -1),
              this._show(!1, this.index, !0),
              (this._transitioner = null);
          else {
            const t =
              (U ? this.dir * (U ? 1 : -1) : this.dir) < 0 ==
              this.prevPos > this.pos;
            (this.index = t ? this.index : this.prevIndex),
              t && (this.percent = 1 - this.percent),
              this.show(
                (this.dir > 0 && !t) || (this.dir < 0 && t)
                  ? "next"
                  : "previous",
                !0
              );
          }
        c(this.list, { userSelect: "", pointerEvents: "" }),
          (this.drag = this.percent = null);
      },
      _getDistance(t, e) {
        return (
          this._getTransitioner(t, t !== e && e).getDistance() ||
          this.slides[t].offsetWidth
        );
      },
    },
  };
  function ga(t) {
    return (
      c(t, "userSelect") !== "none" &&
      Tt(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim())
    );
  }
  function ma(t) {
    t._watches = [];
    for (const e of t.$options.watch || [])
      for (const [i, s] of Object.entries(e)) Bn(t, s, i);
    t._initial = !0;
  }
  function Bn(t, e, i) {
    t._watches.push({ name: i, ...(xt(e) ? e : { handler: e }) });
  }
  function va(t, e) {
    for (const { name: i, handler: s, immediate: n = !0 } of t._watches)
      ((t._initial && n) || (dt(e, i) && !ti(e[i], t[i]))) &&
        s.call(t, t[i], e[i]);
    t._initial = !1;
  }
  function ba(t) {
    const { computed: e } = t.$options;
    if (((t._computed = {}), e)) for (const i in e) Nn(t, i, e[i]);
  }
  function Nn(t, e, i) {
    (t._hasComputed = !0),
      Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const { _computed: s, $props: n, $el: o } = t;
          return dt(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e];
        },
        set(s) {
          const { _computed: n } = t;
          (n[e] = i.set ? i.set.call(t, s) : s), G(n[e]) && delete n[e];
        },
      });
  }
  function wa(t) {
    t._hasComputed &&
      (Wr(t, { read: () => va(t, zn(t)), events: ["resize", "computed"] }),
      xa(),
      qe.add(t));
  }
  function $a(t) {
    qe == null || qe.delete(t), zn(t);
  }
  function zn(t) {
    const e = { ...t._computed };
    return (t._computed = {}), e;
  }
  let Is, qe;
  function xa() {
    Is ||
      ((qe = new Set()),
      (Is = new MutationObserver(() => {
        for (const t of qe) He(t, "computed");
      })),
      Is.observe(document, { subtree: !0, childList: !0 }));
  }
  function ya(t) {
    t._events = [];
    for (const e of t.$options.events || [])
      if (dt(e, "handler")) Fn(t, e);
      else for (const i in e) Fn(t, e[i], i);
  }
  function ka(t) {
    t._events.forEach((e) => e()), delete t._events;
  }
  function Fn(t, e, i) {
    let {
      name: s,
      el: n,
      handler: o,
      capture: r,
      passive: a,
      delegate: l,
      filter: h,
      self: u,
    } = xt(e) ? e : { name: i, handler: e };
    (n = et(n) ? n.call(t, t) : n || t.$el),
      !(!n || (K(n) && !n.length) || (h && !h.call(t))) &&
        t._events.push(
          $(
            n,
            s,
            l ? (N(l) ? l : l.call(t, t)) : null,
            N(o) ? t[o] : o.bind(t),
            { passive: a, capture: r, self: u }
          )
        );
  }
  function Sa(t) {
    t._observers = [];
    for (const e of t.$options.observe || [])
      if (dt(e, "handler")) Ln(t, e);
      else for (const i of e) Ln(t, i);
  }
  function Hn(t, ...e) {
    t._observers.push(...e);
  }
  function Ia(t) {
    for (const e of t._observers) e.disconnect();
  }
  function Ln(t, e) {
    let {
      observe: i,
      target: s = t.$el,
      handler: n,
      options: o,
      filter: r,
      args: a,
    } = e;
    if (r && !r.call(t, t)) return;
    const l = `_observe${t._observers.length}`;
    et(s) && !dt(t, l) && Nn(t, l, () => s.call(t, t)),
      (n = N(n) ? t[n] : n.bind(t)),
      et(o) && (o = o.call(t, t));
    const h = dt(t, l) ? t[l] : s,
      u = i(h, n, o, a);
    et(s) &&
      K(t[l]) &&
      u.unobserve &&
      Bn(t, { handler: Ca(u), immediate: !1 }, l),
      Hn(t, u);
  }
  function Ca(t) {
    return (e, i) => {
      for (const s of i) !m(e, s) && t.unobserve(s);
      for (const s of e) !m(i, s) && t.observe(s);
    };
  }
  function Ta(t) {
    const { $options: e, $props: i } = t,
      s = Wn(e);
    pt(i, s);
    const { computed: n, methods: o } = e;
    for (let r in i)
      r in s && (!n || !dt(n, r)) && (!o || !dt(o, r)) && (t[r] = i[r]);
  }
  function Wn(t) {
    const e = {},
      { args: i = [], props: s = {}, el: n, id: o } = t;
    if (!s) return e;
    for (const a in s) {
      const l = Mt(a);
      let h = Y(n, l);
      G(h) ||
        ((h = s[a] === Boolean && h === "" ? !0 : ds(s[a], h)),
        !(l === "target" && ut(h, "_")) && (e[a] = h));
    }
    const r = fe(Y(n, o), i);
    for (const a in r) {
      const l = xe(a);
      G(s[l]) || (e[l] = ds(s[l], r[a]));
    }
    return e;
  }
  const Ea = rt((t, e) => {
    const i = Object.keys(e),
      s = i
        .concat(t)
        .map((n) => [Mt(n), `data-${Mt(n)}`])
        .flat();
    return { attributes: i, filter: s };
  });
  function Pa(t) {
    const { $options: e, $props: i } = t,
      { id: s, props: n, el: o } = e;
    if (!n) return;
    const { attributes: r, filter: a } = Ea(s, n),
      l = new MutationObserver((h) => {
        const u = Wn(e);
        h.some(({ attributeName: f }) => {
          const d = f.replace("data-", "");
          return (d === s ? r : [xe(d), xe(f)]).some(
            (g) => !G(u[g]) && u[g] !== i[g]
          );
        }) && t.$reset();
      });
    l.observe(o, { attributes: !0, attributeFilter: a }), Hn(t, l);
  }
  function ge(t, e) {
    var i;
    (i = t.$options[e]) == null || i.forEach((s) => s.call(t));
  }
  function Cs(t) {
    t._connected ||
      (Ta(t),
      ge(t, "beforeConnect"),
      (t._connected = !0),
      ya(t),
      Lr(t),
      ma(t),
      Sa(t),
      Pa(t),
      wa(t),
      ge(t, "connected"),
      He(t));
  }
  function Ts(t) {
    t._connected &&
      (ge(t, "beforeDisconnect"),
      ka(t),
      Rr(t),
      Ia(t),
      $a(t),
      ge(t, "disconnected"),
      (t._connected = !1));
  }
  let _a = 0;
  function Rn(t, e = {}) {
    (e.data = Ma(e, t.constructor.options)),
      (t.$options = Fe(t.constructor.options, e, t)),
      (t.$props = {}),
      (t._uid = _a++),
      Oa(t),
      Aa(t),
      ba(t),
      ge(t, "created"),
      e.el && t.$mount(e.el);
  }
  function Oa(t) {
    const { data: e = {} } = t.$options;
    for (const i in e) t.$props[i] = t[i] = e[i];
  }
  function Aa(t) {
    const { methods: e } = t.$options;
    if (e) for (const i in e) t[i] = e[i].bind(t);
  }
  function Ma({ data: t = {} }, { args: e = [], props: i = {} }) {
    K(t) &&
      (t = t
        .slice(0, e.length)
        .reduce((s, n, o) => (xt(n) ? pt(s, n) : (s[e[o]] = n), s), {}));
    for (const s in t) G(t[s]) ? delete t[s] : i[s] && (t[s] = ds(i[s], t[s]));
    return t;
  }
  const ct = function (t) {
    Rn(this, t);
  };
  (ct.util = Mr), (ct.options = {}), (ct.version = "3.17.11");
  const Da = "uk-",
    Vt = "__uikit__",
    me = {};
  function jn(t, e) {
    var i;
    const s = Da + Mt(t);
    if (!e) return xt(me[s]) && (me[s] = ct.extend(me[s])), me[s];
    (t = xe(t)), (ct[t] = (o, r) => Ue(t, o, r));
    const n = xt(e) ? { ...e } : e.options;
    return (
      (n.id = s),
      (n.name = t),
      (i = n.install) == null || i.call(n, ct, n, t),
      ct._initialized &&
        !n.functional &&
        requestAnimationFrame(() => Ue(t, `[${s}],[data-${s}]`)),
      (me[s] = n)
    );
  }
  function Ue(t, e, i, ...s) {
    const n = jn(t);
    return n.options.functional
      ? new n({ data: xt(e) ? e : [e, i, ...s] })
      : e
      ? z(e).map(o)[0]
      : o();
    function o(r) {
      const a = $i(r, t);
      if (a)
        if (i) a.$destroy();
        else return a;
      return new n({ el: r, data: i });
    }
  }
  function Gt(t) {
    return (t == null ? void 0 : t[Vt]) || {};
  }
  function $i(t, e) {
    return Gt(t)[e];
  }
  function Ba(t, e) {
    t[Vt] || (t[Vt] = {}), (t[Vt][e.$options.name] = e);
  }
  function Na(t, e) {
    var i;
    (i = t[Vt]) == null || delete i[e.$options.name], Se(t[Vt]) || delete t[Vt];
  }
  function za(t) {
    (t.component = jn),
      (t.getComponents = Gt),
      (t.getComponent = $i),
      (t.update = qn),
      (t.use = function (i) {
        if (!i.installed) return i.call(null, this), (i.installed = !0), this;
      }),
      (t.mixin = function (i, s) {
        (s = (N(s) ? this.component(s) : s) || this),
          (s.options = Fe(s.options, i));
      }),
      (t.extend = function (i) {
        i || (i = {});
        const s = this,
          n = function (r) {
            Rn(this, r);
          };
        return (
          (n.prototype = Object.create(s.prototype)),
          (n.prototype.constructor = n),
          (n.options = Fe(s.options, i)),
          (n.super = s),
          (n.extend = s.extend),
          n
        );
      });
    let e;
    Object.defineProperty(t, "container", {
      get() {
        return e || document.body;
      },
      set(i) {
        e = w(i);
      },
    });
  }
  function qn(t, e) {
    t = t ? F(t) : document.body;
    for (const i of Nt(t).reverse()) Un(i, e);
    It(t, (i) => Un(i, e));
  }
  function Un(t, e) {
    const i = Gt(t);
    for (const s in i) He(i[s], e);
  }
  function Fa(t) {
    (t.prototype.$mount = function (e) {
      const i = this;
      Ba(e, i), (i.$options.el = e), document.contains(e) && Cs(i);
    }),
      (t.prototype.$destroy = function (e = !1) {
        const i = this,
          { el: s } = i.$options;
        s && Ts(i), ge(i, "destroy"), Na(s, i), e && at(i.$el);
      }),
      (t.prototype.$create = Ue),
      (t.prototype.$emit = function (e) {
        He(this, e);
      }),
      (t.prototype.$update = function (e = this.$el, i) {
        qn(e, i);
      }),
      (t.prototype.$reset = function () {
        Ts(this), Cs(this);
      }),
      (t.prototype.$getComponent = $i),
      Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          },
        },
        $container: Object.getOwnPropertyDescriptor(t, "container"),
      });
  }
  let Ha = 1;
  function Yt(t, e = null) {
    return (e == null ? void 0 : e.id) || `${t.$options.id}-${Ha++}`;
  }
  var La = {
      i18n: {
        next: "Next slide",
        previous: "Previous slide",
        slideX: "Slide %s",
        slideLabel: "%s of %s",
        role: "String",
      },
      data: { selNav: !1, role: "region" },
      computed: {
        nav: ({ selNav: t }, e) => w(t, e),
        navChildren() {
          return B(this.nav);
        },
        selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`,
        navItems(t, e) {
          return z(this.selNavItem, e);
        },
      },
      watch: {
        nav(t, e) {
          p(t, "role", "tablist"), e && this.$emit();
        },
        list(t) {
          p(t, "role", "presentation");
        },
        navChildren(t) {
          p(t, "role", "presentation");
        },
        navItems(t) {
          for (const e of t) {
            const i = Y(e, this.attrItem),
              s = w("a,button", e) || e;
            let n,
              o = null;
            if (vt(i)) {
              const r = yt(i),
                a = this.slides[r];
              a && (a.id || (a.id = Yt(this, a)), (o = a.id)),
                (n = this.t("slideX", k(i) + 1)),
                p(s, "role", "tab");
            } else
              this.list &&
                (this.list.id || (this.list.id = Yt(this, this.list)),
                (o = this.list.id)),
                (n = this.t(i));
            p(s, { "aria-controls": o, "aria-label": p(s, "aria-label") || n });
          }
        },
        slides(t) {
          t.forEach((e, i) =>
            p(e, {
              role: this.nav ? "tabpanel" : "group",
              "aria-label": this.t("slideLabel", i + 1, this.length),
              "aria-roledescription": this.nav ? null : "slide",
            })
          );
        },
        length(t) {
          const e = this.navChildren.length;
          if (this.nav && t !== e) {
            Zi(this.nav);
            for (let i = 0; i < t; i++)
              H(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`);
          }
        },
      },
      connected() {
        p(this.$el, { role: this.role, "aria-roledescription": "carousel" });
      },
      update: [
        {
          write() {
            this.navItems
              .concat(this.nav)
              .forEach((t) => t && (t.hidden = !this.maxIndex)),
              this.updateNav();
          },
          events: ["resize"],
        },
      ],
      events: [
        {
          name: "click keydown",
          delegate() {
            return this.selNavItem;
          },
          handler(t) {
            t.target.closest("a,button") &&
              (t.type === "click" || t.keyCode === P.SPACE) &&
              (t.preventDefault(), this.show(Y(t.current, this.attrItem)));
          },
        },
        { name: "itemshow", handler: "updateNav" },
        {
          name: "keydown",
          delegate() {
            return this.selNavItem;
          },
          handler(t) {
            const { current: e, keyCode: i } = t,
              s = Y(e, this.attrItem);
            if (!vt(s)) return;
            let n =
              i === P.HOME
                ? 0
                : i === P.END
                ? "last"
                : i === P.LEFT
                ? "previous"
                : i === P.RIGHT
                ? "next"
                : -1;
            ~n && (t.preventDefault(), this.show(n));
          },
        },
      ],
      methods: {
        updateNav() {
          const t = this.getValidIndex();
          for (const e of this.navItems) {
            const i = Y(e, this.attrItem),
              s = w("a,button", e) || e;
            if (vt(i)) {
              const o = yt(i) === t;
              j(e, this.clsActive, o),
                p(s, { "aria-selected": o, tabindex: o ? null : -1 }),
                o && s && A(E(e), ":focus-within") && s.focus();
            } else
              j(
                e,
                "uk-invisible",
                this.finite &&
                  ((i === "previous" && t === 0) ||
                    (i === "next" && t >= this.maxIndex))
              );
          }
        },
      },
    },
    Vn = {
      mixins: [fa, pa, La, wi],
      props: {
        clsActivated: Boolean,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number,
      },
      data: () => ({
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {},
      }),
      connected() {
        (this.prevIndex = -1),
          (this.index = this.getValidIndex(this.$props.index)),
          (this.stack = []);
      },
      disconnected() {
        O(this.slides, this.clsActive);
      },
      computed: {
        duration: ({ velocity: t }, e) => Gn(e.offsetWidth / t),
        list: ({ selList: t }, e) => w(t, e),
        maxIndex() {
          return this.length - 1;
        },
        slides() {
          return B(this.list);
        },
        length() {
          return this.slides.length;
        },
      },
      watch: {
        slides(t, e) {
          e && this.$emit();
        },
      },
      observe: mt(),
      methods: {
        show(t, e = !1) {
          var i;
          if (this.dragging || !this.length) return;
          const { stack: s } = this,
            n = e ? 0 : s.length,
            o = () => {
              s.splice(n, 1), s.length && this.show(s.shift(), !0);
            };
          if ((s[e ? "unshift" : "push"](t), !e && s.length > 1)) {
            s.length === 2 &&
              ((i = this._transitioner) == null ||
                i.forward(Math.min(this.duration, 200)));
            return;
          }
          const r = this.getIndex(this.index),
            a = I(this.slides, this.clsActive) && this.slides[r],
            l = this.getIndex(t, this.index),
            h = this.slides[l];
          if (a === h) {
            o();
            return;
          }
          if (
            ((this.dir = Wa(t, r)),
            (this.prevIndex = r),
            (this.index = l),
            (a && !v(a, "beforeitemhide", [this])) ||
              !v(h, "beforeitemshow", [this, a]))
          ) {
            (this.index = this.prevIndex), o();
            return;
          }
          const u = this._show(a, h, e).then(() => {
            a && v(a, "itemhidden", [this]),
              v(h, "itemshown", [this]),
              s.shift(),
              (this._transitioner = null),
              requestAnimationFrame(() => s.length && this.show(s.shift(), !0));
          });
          return a && v(a, "itemhide", [this]), v(h, "itemshow", [this]), u;
        },
        getIndex(t = this.index, e = this.index) {
          return Z(
            ot(t, this.slides, e, this.finite),
            0,
            Math.max(0, this.maxIndex)
          );
        },
        getValidIndex(t = this.index, e = this.prevIndex) {
          return this.getIndex(t, e);
        },
        _show(t, e, i) {
          if (
            ((this._transitioner = this._getTransitioner(t, e, this.dir, {
              easing: i
                ? e.offsetWidth < 600
                  ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                : this.easing,
              ...this.transitionOptions,
            })),
            !i && !t)
          )
            return this._translate(1), Promise.resolve();
          const { length: s } = this.stack;
          return this._transitioner[s > 1 ? "forward" : "show"](
            s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration,
            this.percent
          );
        },
        _translate(t, e = this.prevIndex, i = this.index) {
          const s = this._getTransitioner(e === i ? !1 : e, i);
          return s.translate(t), s;
        },
        _getTransitioner(
          t = this.prevIndex,
          e = this.index,
          i = this.dir || 1,
          s = this.transitionOptions
        ) {
          return new this.Transitioner(
            ke(t) ? this.slides[t] : t,
            ke(e) ? this.slides[e] : e,
            i * (U ? -1 : 1),
            s
          );
        },
      },
    };
  function Wa(t, e) {
    return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
  }
  function Gn(t) {
    return 0.5 * t + 300;
  }
  var Yn = {
      mixins: [Vn],
      props: { animation: String },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: ys,
        Transitioner: ua,
      },
      computed: {
        animation({ animation: t, Animations: e }) {
          return { ...(e[t] || e.slide), name: t };
        },
        transitionOptions() {
          return { animation: this.animation };
        },
      },
      events: {
        beforeitemshow({ target: t }) {
          b(t, this.clsActive);
        },
        itemshown({ target: t }) {
          b(t, this.clsActivated);
        },
        itemhidden({ target: t }) {
          O(t, this.clsActive, this.clsActivated);
        },
      },
    },
    Xn = {
      ...ys,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [{ opacity: 1 - t }, { opacity: t }];
        },
      },
      scale: {
        show() {
          return [
            { opacity: 0, transform: pe(1 - 0.2) },
            { opacity: 1, transform: pe(1) },
          ];
        },
        percent(t) {
          return 1 - c(t, "opacity");
        },
        translate(t) {
          return [
            { opacity: 1 - t, transform: pe(1 - 0.2 * t) },
            { opacity: t, transform: pe(1 - 0.2 + 0.2 * t) },
          ];
        },
      },
    },
    Jn = {
      mixins: [xs, Yn],
      functional: !0,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String,
      },
      data: () => ({
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        selCaption: ".uk-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: Xn,
        template:
          '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
      }),
      created() {
        const t = w(this.template),
          e = w(this.selList, t);
        this.items.forEach(() => H(e, "<li>"));
        const i = w("[uk-close]", t),
          s = this.t("close");
        i && s && (i.dataset.i18n = JSON.stringify({ label: s })),
          this.$mount(H(this.container, t));
      },
      computed: { caption: ({ selCaption: t }, e) => w(t, e) },
      events: [
        { name: `${ui} ${gt} keydown`, handler: "showControls" },
        {
          name: "click",
          self: !0,
          delegate() {
            return `${this.selList} > *`;
          },
          handler(t) {
            t.defaultPrevented || this.hide();
          },
        },
        {
          name: "shown",
          self: !0,
          handler() {
            this.showControls();
          },
        },
        {
          name: "hide",
          self: !0,
          handler() {
            this.hideControls(),
              O(this.slides, this.clsActive),
              M.stop(this.slides);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            this.$destroy(!0);
          },
        },
        {
          name: "keyup",
          el() {
            return document;
          },
          handler({ keyCode: t }) {
            if (!this.isToggled(this.$el) || !this.draggable) return;
            let e = -1;
            t === P.LEFT
              ? (e = "previous")
              : t === P.RIGHT
              ? (e = "next")
              : t === P.HOME
              ? (e = 0)
              : t === P.END && (e = "last"),
              ~e && this.show(e);
          },
        },
        {
          name: "beforeitemshow",
          handler(t) {
            this.isToggled() ||
              ((this.draggable = !1),
              t.preventDefault(),
              this.toggleElement(this.$el, !0, !1),
              (this.animation = Xn.scale),
              O(t.target, this.clsActive),
              this.stack.splice(1, 0, this.index));
          },
        },
        {
          name: "itemshow",
          handler() {
            Ht(this.caption, this.getItem().caption || "");
            for (let t = -this.preload; t <= this.preload; t++)
              this.loadItem(this.index + t);
          },
        },
        {
          name: "itemshown",
          handler() {
            this.draggable = this.$props.draggable;
          },
        },
        {
          name: "itemload",
          async handler(t, e) {
            const {
              source: i,
              type: s,
              alt: n = "",
              poster: o,
              attrs: r = {},
            } = e;
            if ((this.setItem(e, "<span uk-spinner></span>"), !i)) return;
            let a;
            const l = {
              allowfullscreen: "",
              style: "max-width: 100%; box-sizing: border-box;",
              "uk-responsive": "",
              "uk-video": `${this.videoAutoplay}`,
            };
            if (
              s === "image" ||
              i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)
            ) {
              const h = Ve("img", { src: i, alt: n, ...r });
              $(h, "load", () => this.setItem(e, h)),
                $(h, "error", () => this.setError(e));
            } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
              const h = Ve("video", {
                src: i,
                poster: o,
                controls: "",
                playsinline: "",
                "uk-video": `${this.videoAutoplay}`,
                ...r,
              });
              $(h, "loadedmetadata", () => this.setItem(e, h)),
                $(h, "error", () => this.setError(e));
            } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
              this.setItem(
                e,
                Ve("iframe", {
                  src: i,
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...r,
                })
              );
            else if (
              (a = i.match(
                /\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
              ))
            )
              this.setItem(
                e,
                Ve("iframe", {
                  src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${
                    a[3] ? `?${a[3]}` : ""
                  }`,
                  width: 1920,
                  height: 1080,
                  ...l,
                  ...r,
                })
              );
            else if ((a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)))
              try {
                const { height: h, width: u } = await (
                  await fetch(
                    `https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(
                      i
                    )}`,
                    { credentials: "omit" }
                  )
                ).json();
                this.setItem(
                  e,
                  Ve("iframe", {
                    src: `https://player.vimeo.com/video/${a[1]}${
                      a[2] ? `?${a[2]}` : ""
                    }`,
                    width: u,
                    height: h,
                    ...l,
                    ...r,
                  })
                );
              } catch {
                this.setError(e);
              }
          },
        },
      ],
      methods: {
        loadItem(t = this.index) {
          const e = this.getItem(t);
          this.getSlide(e).childElementCount || v(this.$el, "itemload", [e]);
        },
        getItem(t = this.index) {
          return this.items[ot(t, this.slides)];
        },
        setItem(t, e) {
          v(this.$el, "itemloaded", [this, Ht(this.getSlide(t), e)]);
        },
        getSlide(t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError(t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls() {
          clearTimeout(this.controlsTimer),
            (this.controlsTimer = setTimeout(
              this.hideControls,
              this.delayControls
            )),
            b(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls() {
          O(this.$el, "uk-active", "uk-transition-active");
        },
      },
    };
  function Ve(t, e) {
    const i = Lt(`<${t}>`);
    return p(i, e), i;
  }
  var Ra = {
    install: ja,
    props: { toggle: String },
    data: { toggle: "a" },
    computed: { toggles: ({ toggle: t }, e) => z(t, e) },
    watch: {
      toggles(t) {
        this.hide();
        for (const e of t) q(e, "a") && p(e, "role", "button");
      },
    },
    disconnected() {
      this.hide();
    },
    events: {
      name: "click",
      delegate() {
        return `${this.toggle}:not(.uk-disabled)`;
      },
      handler(t) {
        t.preventDefault(), this.show(t.current);
      },
    },
    methods: {
      show(t) {
        const e = zs(this.toggles.map(Kn), "source");
        if (ye(t)) {
          const { source: i } = Kn(t);
          t = $t(e, ({ source: s }) => i === s);
        }
        return (
          (this.panel =
            this.panel ||
            this.$create("lightboxPanel", { ...this.$props, items: e })),
          $(this.panel.$el, "hidden", () => (this.panel = null)),
          this.panel.show(t)
        );
      },
      hide() {
        var t;
        return (t = this.panel) == null ? void 0 : t.hide();
      },
    },
  };
  function ja(t, e) {
    t.lightboxPanel || t.component("lightboxPanel", Jn),
      pt(e.props, t.component("lightboxPanel").options.props);
  }
  function Kn(t) {
    const e = {};
    for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
      e[i === "href" ? "source" : i] = Y(t, i);
    return (e.attrs = fe(e.attrs)), e;
  }
  var qa = {
    mixins: [Re],
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: "",
      pos: "top-center",
      clsContainer: "uk-notification",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message",
    },
    install: Ua,
    computed: {
      marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`,
      startProps() {
        return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
      },
    },
    created() {
      const t = `${this.clsContainer}-${this.pos}`;
      let e = w(`.${t}`, this.container);
      (!e || !W(e)) &&
        (e = H(
          this.container,
          `<div class="${this.clsContainer} ${t}"></div>`
        )),
        this.$mount(
          H(
            e,
            `<div class="${this.clsMsg}${
              this.status ? ` ${this.clsMsg}-${this.status}` : ""
            }" role="alert"> <a href class="${
              this.clsClose
            }" data-uk-close></a> <div>${this.message}</div> </div>`
          )
        );
    },
    async connected() {
      const t = k(c(this.$el, this.marginProp));
      await M.start(c(this.$el, this.startProps), {
        opacity: 1,
        [this.marginProp]: t,
      }),
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    },
    events: {
      click(t) {
        t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(),
          this.close();
      },
      [ce]() {
        this.timer && clearTimeout(this.timer);
      },
      [Ne]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      },
    },
    methods: {
      async close(t) {
        const e = (i) => {
          const s = E(i);
          v(i, "close", [this]),
            at(i),
            (s != null && s.hasChildNodes()) || at(s);
        };
        this.timer && clearTimeout(this.timer),
          t || (await M.start(this.$el, this.startProps)),
          e(this.$el);
      },
    },
  };
  function Ua(t) {
    t.notification.closeAll = function (e, i) {
      It(document.body, (s) => {
        const n = t.getComponent(s, "notification");
        n && (!e || e === n.group) && n.close(i);
      });
    };
  }
  var xi = {
    props: { media: Boolean },
    data: { media: !1 },
    connected() {
      const t = Va(this.media, this.$el);
      if (((this.matchMedia = !0), t)) {
        this.mediaObj = window.matchMedia(t);
        const e = () => {
          (this.matchMedia = this.mediaObj.matches),
            v(this.$el, Ft("mediachange", !1, !0, [this.mediaObj]));
        };
        (this.offMediaObj = $(this.mediaObj, "change", () => {
          e(), this.$emit("resize");
        })),
          e();
      }
    },
    disconnected() {
      var t;
      (t = this.offMediaObj) == null || t.call(this);
    },
  };
  function Va(t, e) {
    if (N(t)) {
      if (ut(t, "@")) t = k(c(e, `--uk-breakpoint-${t.substr(1)}`));
      else if (isNaN(t)) return t;
    }
    return t && vt(t) ? `(min-width: ${t}px)` : "";
  }
  function Zn(t) {
    return Math.ceil(
      Math.max(
        0,
        ...z("[stroke]", t).map((e) => {
          try {
            return e.getTotalLength();
          } catch {
            return 0;
          }
        })
      )
    );
  }
  const yi = {
      x: ki,
      y: ki,
      rotate: ki,
      scale: ki,
      color: Es,
      backgroundColor: Es,
      borderColor: Es,
      blur: Xt,
      hue: Xt,
      fopacity: Xt,
      grayscale: Xt,
      invert: Xt,
      saturate: Xt,
      sepia: Xt,
      opacity: Ya,
      stroke: Xa,
      bgx: eo,
      bgy: eo,
    },
    { keys: Qn } = Object;
  var to = {
    mixins: [xi],
    props: oo(Qn(yi), "list"),
    data: oo(Qn(yi), void 0),
    computed: {
      props(t, e) {
        const i = {};
        for (const n in t) n in yi && !G(t[n]) && (i[n] = t[n].slice());
        const s = {};
        for (const n in i) s[n] = yi[n](n, e, i[n], i);
        return s;
      },
    },
    events: {
      load() {
        this.$emit();
      },
    },
    methods: {
      reset() {
        for (const t in this.getCss(0)) c(this.$el, t, "");
      },
      getCss(t) {
        const e = {};
        for (const i in this.props) this.props[i](e, Z(t));
        return (e.willChange = Object.keys(e).map(ni).join(",")), e;
      },
    },
  };
  function ki(t, e, i) {
    let s = Ii(i) || { x: "px", y: "px", rotate: "deg" }[t] || "",
      n;
    return (
      t === "x" || t === "y"
        ? ((t = `translate${Ct(t)}`),
          (n = (o) => k(k(o).toFixed(s === "px" ? 0 : 6))))
        : t === "scale" &&
          ((s = ""),
          (n = (o) => {
            var r;
            return Ii([o])
              ? Q(o, "width", e, !0) /
                  e[
                    `offset${
                      (r = o.endsWith) != null && r.call(o, "vh")
                        ? "Height"
                        : "Width"
                    }`
                  ]
              : k(o);
          })),
      i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
      (i = ve(i, n)),
      (o, r) => {
        o.transform = `${o.transform || ""} ${t}(${Ge(i, r)}${s})`;
      }
    );
  }
  function Es(t, e, i) {
    return (
      i.length === 1 && i.unshift(Ye(e, t, "")),
      (i = ve(i, (s) => Ga(e, s))),
      (s, n) => {
        const [o, r, a] = no(i, n),
          l = o
            .map(
              (h, u) => (
                (h += a * (r[u] - h)), u === 3 ? k(h) : parseInt(h, 10)
              )
            )
            .join(",");
        s[t] = `rgba(${l})`;
      }
    );
  }
  function Ga(t, e) {
    return Ye(t, "color", e)
      .split(/[(),]/g)
      .slice(1, -1)
      .concat(1)
      .slice(0, 4)
      .map(k);
  }
  function Xt(t, e, i) {
    i.length === 1 && i.unshift(0);
    const s = Ii(i) || { blur: "px", hue: "deg" }[t] || "%";
    return (
      (t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t),
      (i = ve(i)),
      (n, o) => {
        const r = Ge(i, o);
        n.filter = `${n.filter || ""} ${t}(${r + s})`;
      }
    );
  }
  function Ya(t, e, i) {
    return (
      i.length === 1 && i.unshift(Ye(e, t, "")),
      (i = ve(i)),
      (s, n) => {
        s[t] = Ge(i, n);
      }
    );
  }
  function Xa(t, e, i) {
    i.length === 1 && i.unshift(0);
    const s = Ii(i),
      n = Zn(e);
    return (
      (i = ve(i.reverse(), (o) => ((o = k(o)), s === "%" ? (o * n) / 100 : o))),
      i.some(([o]) => o)
        ? (c(e, "strokeDasharray", n),
          (o, r) => {
            o.strokeDashoffset = Ge(i, r);
          })
        : _
    );
  }
  function eo(t, e, i, s) {
    i.length === 1 && i.unshift(0);
    const n = t === "bgy" ? "height" : "width";
    s[t] = ve(i, (a) => Q(a, n, e));
    const o = ["bgx", "bgy"].filter((a) => a in s);
    if (o.length === 2 && t === "bgx") return _;
    if (Ye(e, "backgroundSize", "") === "cover") return Ja(t, e, i, s);
    const r = {};
    for (const a of o) r[a] = io(e, a);
    return so(o, r, s);
  }
  function Ja(t, e, i, s) {
    const n = Ka(e);
    if (!n.width) return _;
    const o = { width: e.offsetWidth, height: e.offsetHeight },
      r = ["bgx", "bgy"].filter((u) => u in s),
      a = {};
    for (const u of r) {
      const f = s[u].map(([D]) => D),
        d = Math.min(...f),
        g = Math.max(...f),
        y = f.indexOf(d) < f.indexOf(g),
        C = g - d;
      (a[u] = `${(y ? -C : 0) - (y ? d : g)}px`),
        (o[u === "bgy" ? "height" : "width"] += C);
    }
    const l = ei.cover(n, o);
    for (const u of r) {
      const f = u === "bgy" ? "height" : "width",
        d = l[f] - o[f];
      a[u] = `max(${io(e, u)},-${d}px) + ${a[u]}`;
    }
    const h = so(r, a, s);
    return (u, f) => {
      h(u, f),
        (u.backgroundSize = `${l.width}px ${l.height}px`),
        (u.backgroundRepeat = "no-repeat");
    };
  }
  function io(t, e) {
    return Ye(t, `background-position-${e.substr(-1)}`, "");
  }
  function so(t, e, i) {
    return function (s, n) {
      for (const o of t) {
        const r = Ge(i[o], n);
        s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`;
      }
    };
  }
  const Si = {};
  function Ka(t) {
    const e = c(t, "backgroundImage").replace(
      /^none|url\(["']?(.+?)["']?\)$/,
      "$1"
    );
    if (Si[e]) return Si[e];
    const i = new Image();
    return e && ((i.src = e), !i.naturalWidth)
      ? ((i.onload = () => {
          (Si[e] = Ps(i)), v(t, Ft("load", !1));
        }),
        Ps(i))
      : (Si[e] = Ps(i));
  }
  function Ps(t) {
    return { width: t.naturalWidth, height: t.naturalHeight };
  }
  function ve(t, e = k) {
    const i = [],
      { length: s } = t;
    let n = 0;
    for (let o = 0; o < s; o++) {
      let [r, a] = N(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [t[o]];
      if (
        ((r = e(r)),
        (a = a ? k(a) / 100 : null),
        o === 0
          ? a === null
            ? (a = 0)
            : a && i.push([r, 0])
          : o === s - 1 &&
            (a === null ? (a = 1) : a !== 1 && (i.push([r, a]), (a = 1))),
        i.push([r, a]),
        a === null)
      )
        n++;
      else if (n) {
        const l = i[o - n - 1][1],
          h = (a - l) / (n + 1);
        for (let u = n; u > 0; u--) i[o - u][1] = l + h * (n - u + 1);
        n = 0;
      }
    }
    return i;
  }
  function no(t, e) {
    const i = $t(t.slice(1), ([, s]) => e <= s) + 1;
    return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
  }
  function Ge(t, e) {
    const [i, s, n] = no(t, e);
    return i + Math.abs(i - s) * n * (i < s ? 1 : -1);
  }
  const Za = /^-?\d+(?:\.\d+)?(\S+)?/;
  function Ii(t, e) {
    var i;
    for (const s of t) {
      const n = (i = s.match) == null ? void 0 : i.call(s, Za);
      if (n) return n[1];
    }
    return e;
  }
  function Ye(t, e, i) {
    const s = t.style[e],
      n = c(c(t, e, i), e);
    return (t.style[e] = s), n;
  }
  function oo(t, e) {
    return t.reduce((i, s) => ((i[s] = e), i), {});
  }
  var Qa = {
    mixins: [to],
    props: {
      target: String,
      viewport: Number,
      easing: Number,
      start: String,
      end: String,
    },
    data: { target: !1, viewport: 1, easing: 1, start: 0, end: 0 },
    computed: {
      target: ({ target: t }, e) => ro((t && it(t, e)) || e),
      start({ start: t }) {
        return Q(t, "height", this.target, !0);
      },
      end({ end: t, viewport: e }) {
        return Q(
          t || ((e = (1 - e) * 100) && `${e}vh+${e}%`),
          "height",
          this.target,
          !0
        );
      },
    },
    observe: [
      gs(),
      mi({ target: ({ target: t }) => t }),
      mt({ target: ({ $el: t, target: e }) => [t, e, bt(e, !0)] }),
    ],
    update: {
      read({ percent: t }, e) {
        if ((e.has("scroll") || (t = !1), !W(this.$el))) return !1;
        if (!this.matchMedia) return;
        const i = t;
        return (
          (t = tl(as(this.target, this.start, this.end), this.easing)),
          { percent: t, style: i === t ? !1 : this.getCss(t) }
        );
      },
      write({ style: t }) {
        if (!this.matchMedia) {
          this.reset();
          return;
        }
        t && c(this.$el, t);
      },
      events: ["scroll", "resize"],
    },
  };
  function tl(t, e) {
    return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
  }
  function ro(t) {
    return t ? ("offsetTop" in t ? t : ro(E(t))) : document.documentElement;
  }
  var ao = {
      update: {
        write() {
          if (this.stack.length || this.dragging) return;
          const t = this.getValidIndex();
          !~this.prevIndex || this.index !== t
            ? this.show(t)
            : this._translate(1, this.prevIndex, this.index);
        },
        events: ["resize"],
      },
    },
    lo = {
      observe: Le({
        target: ({ slides: t }) => t,
        targets: (t) => t.getAdjacentSlides(),
      }),
    };
  function el(t, e, i, { center: s, easing: n, list: o }) {
    const r = t ? Xe(t, o, s) : Xe(e, o, s) + x(e).width * i,
      a = e ? Xe(e, o, s) : r + x(t).width * i * (U ? -1 : 1);
    let l;
    return {
      dir: i,
      show(h, u = 0, f) {
        const d = f ? "linear" : n;
        return (
          (h -= Math.round(h * Z(u, -1, 1))),
          this.translate(u),
          (u = t ? u : Z(u, 0, 1)),
          _s(this.getItemIn(), "itemin", {
            percent: u,
            duration: h,
            timing: d,
            dir: i,
          }),
          t &&
            _s(this.getItemIn(!0), "itemout", {
              percent: 1 - u,
              duration: h,
              timing: d,
              dir: i,
            }),
          new Promise((g) => {
            l || (l = g),
              M.start(o, { transform: L(-a * (U ? -1 : 1), "px") }, h, d).then(
                l,
                _
              );
          })
        );
      },
      cancel() {
        return M.cancel(o);
      },
      reset() {
        c(o, "transform", "");
      },
      async forward(h, u = this.percent()) {
        return await this.cancel(), this.show(h, u, !0);
      },
      translate(h) {
        const u = this.getDistance() * i * (U ? -1 : 1);
        c(
          o,
          "transform",
          L(Z(-a + (u - u * h), -Ci(o), x(o).width) * (U ? -1 : 1), "px")
        );
        const f = this.getActives(),
          d = this.getItemIn(),
          g = this.getItemIn(!0);
        h = t ? Z(h, -1, 1) : 0;
        for (const y of B(o)) {
          const C = m(f, y),
            D = y === d,
            wt = y === g,
            Ke =
              D ||
              (!wt &&
                (C || (i * (U ? -1 : 1) === -1) ^ (Ti(y, o) > Ti(t || e))));
          _s(y, `itemtranslate${Ke ? "in" : "out"}`, {
            dir: i,
            percent: wt ? 1 - h : D ? h : C ? 1 : 0,
          });
        }
      },
      percent() {
        return Math.abs(
          (c(o, "transform").split(",")[4] * (U ? -1 : 1) + r) / (a - r)
        );
      },
      getDistance() {
        return Math.abs(a - r);
      },
      getItemIn(h = !1) {
        let u = this.getActives(),
          f = co(o, Xe(e || t, o, s));
        if (h) {
          const d = u;
          (u = f), (f = d);
        }
        return f[$t(f, (d) => !m(u, d))];
      },
      getActives() {
        return co(o, Xe(t || e, o, s));
      },
    };
  }
  function Xe(t, e, i) {
    const s = Ti(t, e);
    return i ? s - il(t, e) : Math.min(s, ho(e));
  }
  function ho(t) {
    return Math.max(0, Ci(t) - x(t).width);
  }
  function Ci(t) {
    return Dt(B(t), (e) => x(e).width);
  }
  function il(t, e) {
    return x(e).width / 2 - x(t).width / 2;
  }
  function Ti(t, e) {
    return (
      (t && (ts(t).left + (U ? x(t).width - x(e).width : 0)) * (U ? -1 : 1)) ||
      0
    );
  }
  function co(t, e) {
    e -= 1;
    const i = x(t).width,
      s = e + i + 2;
    return B(t).filter((n) => {
      const o = Ti(n, t),
        r = o + Math.min(x(n).width, i);
      return o >= e && r <= s;
    });
  }
  function _s(t, e, i) {
    v(t, Ft(e, !1, !1, i));
  }
  var sl = {
    mixins: [st, Vn, ao, lo],
    props: { center: Boolean, sets: Boolean },
    data: {
      center: !1,
      sets: !1,
      attrItem: "uk-slider-item",
      selList: ".uk-slider-items",
      selNav: ".uk-slider-nav",
      clsContainer: "uk-slider-container",
      Transitioner: el,
    },
    computed: {
      avgWidth() {
        return Ci(this.list) / this.length;
      },
      finite({ finite: t }) {
        return t || nl(this.list, this.center);
      },
      maxIndex() {
        if (!this.finite || (this.center && !this.sets)) return this.length - 1;
        if (this.center) return se(this.sets);
        let t = 0;
        const e = ho(this.list),
          i = $t(this.slides, (s) => {
            if (t >= e) return !0;
            t += x(s).width;
          });
        return ~i ? i : this.length - 1;
      },
      sets({ sets: t }) {
        if (!t) return;
        let e = 0;
        const i = [],
          s = x(this.list).width;
        for (let n = 0; n < this.length; n++) {
          const o = x(this.slides[n]).width;
          e + o > s && (e = 0),
            this.center
              ? e < s / 2 &&
                e + o + x(ot(+n + 1, this.slides)).width / 2 > s / 2 &&
                (i.push(+n), (e = s / 2 - o / 2))
              : e === 0 && i.push(Math.min(+n, this.maxIndex)),
            (e += o);
        }
        if (i.length) return i;
      },
      transitionOptions() {
        return { center: this.center, list: this.list };
      },
      slides() {
        return B(this.list).filter(W);
      },
    },
    connected() {
      j(this.$el, this.clsContainer, !w(`.${this.clsContainer}`, this.$el));
    },
    observe: mt({ target: ({ slides: t }) => t }),
    update: {
      write() {
        for (const t of this.navItems) {
          const e = yt(Y(t, this.attrItem));
          e !== !1 &&
            (t.hidden =
              !this.maxIndex ||
              e > this.maxIndex ||
              (this.sets && !m(this.sets, e)));
        }
        this.length &&
          !this.dragging &&
          !this.stack.length &&
          (this.reorder(), this._translate(1)),
          this.updateActiveClasses();
      },
      events: ["resize"],
    },
    events: {
      beforeitemshow(t) {
        !this.dragging &&
          this.sets &&
          this.stack.length < 2 &&
          !m(this.sets, this.index) &&
          (this.index = this.getValidIndex());
        const e = Math.abs(
          this.index -
            this.prevIndex +
            ((this.dir > 0 && this.index < this.prevIndex) ||
            (this.dir < 0 && this.index > this.prevIndex)
              ? (this.maxIndex + 1) * this.dir
              : 0)
        );
        if (!this.dragging && e > 1) {
          for (let s = 0; s < e; s++)
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
          return;
        }
        const i =
          this.dir < 0 || !this.slides[this.prevIndex]
            ? this.index
            : this.prevIndex;
        (this.duration =
          Gn(this.avgWidth / this.velocity) *
          (x(this.slides[i]).width / this.avgWidth)),
          this.reorder();
      },
      itemshow() {
        ~this.prevIndex &&
          b(this._getTransitioner().getItemIn(), this.clsActive);
      },
      itemshown() {
        this.updateActiveClasses();
      },
    },
    methods: {
      reorder() {
        if (this.finite) {
          c(this.slides, "order", "");
          return;
        }
        const t =
          this.dir > 0 && this.slides[this.prevIndex]
            ? this.prevIndex
            : this.index;
        if (
          (this.slides.forEach((n, o) =>
            c(
              n,
              "order",
              this.dir > 0 && o < t
                ? 1
                : this.dir < 0 && o >= this.index
                ? -1
                : ""
            )
          ),
          !this.center)
        )
          return;
        const e = this.slides[t];
        let i = x(this.list).width / 2 - x(e).width / 2,
          s = 0;
        for (; i > 0; ) {
          const n = this.getIndex(--s + t, t),
            o = this.slides[n];
          c(o, "order", n > t ? -2 : -1), (i -= x(o).width);
        }
      },
      updateActiveClasses() {
        const t = this._getTransitioner(this.index).getActives(),
          e = [
            this.clsActive,
            ((!this.sets || m(this.sets, k(this.index))) &&
              this.clsActivated) ||
              "",
          ];
        for (const i of this.slides) {
          const s = m(t, i);
          j(i, e, s), p(i, "aria-hidden", !s);
          for (const n of z(Ee, i))
            dt(n, "_tabindex") || (n._tabindex = p(n, "tabindex")),
              p(n, "tabindex", s ? n._tabindex : -1);
        }
      },
      getValidIndex(t = this.index, e = this.prevIndex) {
        if (((t = this.getIndex(t, e)), !this.sets)) return t;
        let i;
        do {
          if (m(this.sets, t)) return t;
          (i = t), (t = this.getIndex(t + this.dir, e));
        } while (t !== i);
        return t;
      },
      getAdjacentSlides() {
        const { width: t } = x(this.list),
          e = -t,
          i = t * 2,
          s = x(this.slides[this.index]).width,
          n = this.center ? t / 2 - s / 2 : 0,
          o = new Set();
        for (const r of [-1, 1]) {
          let a = n + (r > 0 ? s : 0),
            l = 0;
          do {
            const h = this.slides[this.getIndex(this.index + r + l++ * r)];
            (a += x(h).width * r), o.add(h);
          } while (this.length > l && a > e && a < i);
        }
        return Array.from(o);
      },
    },
  };
  function nl(t, e) {
    if (!t || t.length < 2) return !0;
    const { width: i } = x(t);
    if (!e) return Math.ceil(Ci(t)) < Math.trunc(i + ol(t));
    const s = B(t),
      n = Math.trunc(i / 2);
    for (const o in s) {
      const r = s[o],
        a = x(r).width,
        l = new Set([r]);
      let h = 0;
      for (const u of [-1, 1]) {
        let f = a / 2,
          d = 0;
        for (; f < n; ) {
          const g = s[ot(+o + u + d++ * u, s)];
          if (l.has(g)) return !0;
          (f += x(g).width), l.add(g);
        }
        h = Math.max(h, a / 2 + x(s[ot(+o + u, s)]).width / 2 - (f - n));
      }
      if (
        h >
        Dt(
          s.filter((u) => !l.has(u)),
          (u) => x(u).width
        )
      )
        return !0;
    }
    return !1;
  }
  function ol(t) {
    return Math.max(0, ...B(t).map((e) => x(e).width));
  }
  var uo = {
    mixins: [to],
    data: { selItem: "!li" },
    beforeConnect() {
      this.item = it(this.selItem, this.$el);
    },
    disconnected() {
      this.item = null;
    },
    events: [
      {
        name: "itemin itemout",
        self: !0,
        el() {
          return this.item;
        },
        handler({
          type: t,
          detail: { percent: e, duration: i, timing: s, dir: n },
        }) {
          X.read(() => {
            if (!this.matchMedia) return;
            const o = this.getCss(po(t, n, e)),
              r = this.getCss(fo(t) ? 0.5 : n > 0 ? 1 : 0);
            X.write(() => {
              c(this.$el, o), M.start(this.$el, r, i, s).catch(_);
            });
          });
        },
      },
      {
        name: "transitioncanceled transitionend",
        self: !0,
        el() {
          return this.item;
        },
        handler() {
          M.cancel(this.$el);
        },
      },
      {
        name: "itemtranslatein itemtranslateout",
        self: !0,
        el() {
          return this.item;
        },
        handler({ type: t, detail: { percent: e, dir: i } }) {
          X.read(() => {
            if (!this.matchMedia) {
              this.reset();
              return;
            }
            const s = this.getCss(po(t, i, e));
            X.write(() => c(this.$el, s));
          });
        },
      },
    ],
  };
  function fo(t) {
    return Qt(t, "in");
  }
  function po(t, e, i) {
    return (i /= 2), fo(t) ^ (e < 0) ? i : 1 - i;
  }
  var rl = {
    ...ys,
    fade: {
      show() {
        return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
      },
      percent(t) {
        return 1 - c(t, "opacity");
      },
      translate(t) {
        return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
      },
    },
    scale: {
      show() {
        return [
          { opacity: 0, transform: pe(1 + 0.5), zIndex: 0 },
          { zIndex: -1 },
        ];
      },
      percent(t) {
        return 1 - c(t, "opacity");
      },
      translate(t) {
        return [
          { opacity: 1 - t, transform: pe(1 + 0.5 * t), zIndex: 0 },
          { zIndex: -1 },
        ];
      },
    },
    pull: {
      show(t) {
        return t < 0
          ? [
              { transform: L(30), zIndex: -1 },
              { transform: L(), zIndex: 0 },
            ]
          : [
              { transform: L(-100), zIndex: 0 },
              { transform: L(), zIndex: -1 },
            ];
      },
      percent(t, e, i) {
        return i < 0 ? 1 - je(e) : je(t);
      },
      translate(t, e) {
        return e < 0
          ? [
              { transform: L(30 * t), zIndex: -1 },
              { transform: L(-100 * (1 - t)), zIndex: 0 },
            ]
          : [
              { transform: L(-t * 100), zIndex: 0 },
              { transform: L(30 * (1 - t)), zIndex: -1 },
            ];
      },
    },
    push: {
      show(t) {
        return t < 0
          ? [
              { transform: L(100), zIndex: 0 },
              { transform: L(), zIndex: -1 },
            ]
          : [
              { transform: L(-30), zIndex: -1 },
              { transform: L(), zIndex: 0 },
            ];
      },
      percent(t, e, i) {
        return i > 0 ? 1 - je(e) : je(t);
      },
      translate(t, e) {
        return e < 0
          ? [
              { transform: L(t * 100), zIndex: 0 },
              { transform: L(-30 * (1 - t)), zIndex: -1 },
            ]
          : [
              { transform: L(-30 * t), zIndex: -1 },
              { transform: L(100 * (1 - t)), zIndex: 0 },
            ];
      },
    },
  };
  const go = Ot && CSS.supports("aspect-ratio", "1/1");
  var al = {
      mixins: [st, Yn, ao, lo],
      props: { ratio: String, minHeight: Number, maxHeight: Number },
      data: {
        ratio: "16:9",
        minHeight: !1,
        maxHeight: !1,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations: rl,
      },
      watch: {
        list(t) {
          t &&
            go &&
            c(t, {
              aspectRatio: this.ratio.replace(":", "/"),
              minHeight: this.minHeight || "",
              maxHeight: this.maxHeight || "",
              minWidth: "100%",
              maxWidth: "100%",
            });
        },
      },
      update: {
        read() {
          if (!this.list || go) return !1;
          let [t, e] = this.ratio.split(":").map(Number);
          return (
            (e = (e * this.list.offsetWidth) / t || 0),
            this.minHeight && (e = Math.max(this.minHeight, e)),
            this.maxHeight && (e = Math.min(this.maxHeight, e)),
            { height: e - ae(this.list, "height", "content-box") }
          );
        },
        write({ height: t }) {
          t > 0 && c(this.list, "minHeight", t);
        },
        events: ["resize"],
      },
      methods: {
        getAdjacentSlides() {
          return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
        },
      },
    },
    ll = {
      mixins: [st, En],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String,
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {},
      },
      created() {
        for (const t of ["init", "start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            pt(this.pos, re(i)), e(i);
          };
        }
      },
      events: { name: gt, passive: !1, handler: "init" },
      computed: {
        target: (t, e) => (e.tBodies || [e])[0],
        items() {
          return B(this.target);
        },
        isEmpty() {
          return Se(this.items);
        },
        handles({ handle: t }, e) {
          return t ? z(t, e) : this.items;
        },
      },
      watch: {
        isEmpty(t) {
          j(this.target, this.clsEmpty, t);
        },
        handles(t, e) {
          c(e, { touchAction: "", userSelect: "" }),
            c(t, { touchAction: jt ? "none" : "", userSelect: "none" });
        },
      },
      update: {
        write(t) {
          if (!this.drag || !E(this.placeholder)) return;
          const {
            pos: { x: e, y: i },
            origin: { offsetTop: s, offsetLeft: n },
            placeholder: o,
          } = this;
          c(this.drag, { top: i - s, left: e - n });
          const r = this.getSortable(document.elementFromPoint(e, i));
          if (!r) return;
          const { items: a } = r;
          if (a.some(M.inProgress)) return;
          const l = fl(a, { x: e, y: i });
          if (a.length && (!l || l === o)) return;
          const h = this.getSortable(o),
            u = dl(r.target, l, o, e, i, r === h && t.moved !== l);
          u !== !1 &&
            ((u && o === u) ||
              (r !== h ? (h.remove(o), (t.moved = l)) : delete t.moved,
              r.insert(o, u),
              this.touched.add(r)));
        },
        events: ["move"],
      },
      methods: {
        init(t) {
          const { target: e, button: i, defaultPrevented: s } = t,
            [n] = this.items.filter((o) => o.contains(e));
          !n ||
            s ||
            i > 0 ||
            ji(e) ||
            e.closest(`.${this.clsNoDrag}`) ||
            (this.handle && !e.closest(this.handle)) ||
            (t.preventDefault(),
            (this.touched = new Set([this])),
            (this.placeholder = n),
            (this.origin = { target: e, index: ne(n), ...this.pos }),
            $(document, ui, this.move),
            $(document, At, this.end),
            this.threshold || this.start(t));
        },
        start(t) {
          this.drag = ul(this.$container, this.placeholder);
          const { left: e, top: i } = this.placeholder.getBoundingClientRect();
          pt(this.origin, {
            offsetLeft: this.pos.x - e,
            offsetTop: this.pos.y - i,
          }),
            b(this.drag, this.clsDrag, this.clsCustom),
            b(this.placeholder, this.clsPlaceholder),
            b(this.items, this.clsItem),
            b(document.documentElement, this.clsDragState),
            v(this.$el, "start", [this, this.placeholder]),
            hl(this.pos),
            this.move(t);
        },
        move(t) {
          this.drag
            ? this.$emit("move")
            : (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
              this.start(t);
        },
        end() {
          if (
            (zt(document, ui, this.move),
            zt(document, At, this.end),
            !this.drag)
          )
            return;
          cl();
          const t = this.getSortable(this.placeholder);
          this === t
            ? this.origin.index !== ne(this.placeholder) &&
              v(this.$el, "moved", [this, this.placeholder])
            : (v(t.$el, "added", [t, this.placeholder]),
              v(this.$el, "removed", [this, this.placeholder])),
            v(this.$el, "stop", [this, this.placeholder]),
            at(this.drag),
            (this.drag = null);
          for (const { clsPlaceholder: e, clsItem: i } of this.touched)
            for (const s of this.touched) O(s.items, e, i);
          (this.touched = null), O(document.documentElement, this.clsDragState);
        },
        insert(t, e) {
          b(this.items, this.clsItem);
          const i = () => (e ? ri(e, t) : H(this.target, t));
          this.animate(i);
        },
        remove(t) {
          this.target.contains(t) && this.animate(() => at(t));
        },
        getSortable(t) {
          do {
            const e = this.$getComponent(t, "sortable");
            if (
              e &&
              (e === this || (this.group !== !1 && e.group === this.group))
            )
              return e;
          } while ((t = E(t)));
        },
      },
    };
  let mo;
  function hl(t) {
    let e = Date.now();
    mo = setInterval(() => {
      let { x: i, y: s } = t;
      s += document.scrollingElement.scrollTop;
      const n = (Date.now() - e) * 0.3;
      (e = Date.now()),
        ue(document.elementFromPoint(i, t.y))
          .reverse()
          .some((o) => {
            let { scrollTop: r, scrollHeight: a } = o;
            const { top: l, bottom: h, height: u } = lt(o);
            if (l < s && l + 35 > s) r -= n;
            else if (h > s && h - 35 < s) r += n;
            else return;
            if (r > 0 && r < a - u) return (o.scrollTop = r), !0;
          });
    }, 15);
  }
  function cl() {
    clearInterval(mo);
  }
  function ul(t, e) {
    let i;
    if (q(e, "li", "tr")) {
      (i = w("<div>")), H(i, e.cloneNode(!0).children);
      for (const s of e.getAttributeNames()) p(i, s, e.getAttribute(s));
    } else i = e.cloneNode(!0);
    return (
      H(t, i),
      c(i, "margin", "0", "important"),
      c(i, {
        boxSizing: "border-box",
        width: e.offsetWidth,
        height: e.offsetHeight,
        padding: c(e, "padding"),
      }),
      tt(i.firstElementChild, tt(e.firstElementChild)),
      i
    );
  }
  function fl(t, e) {
    return t[$t(t, (i) => Ie(e, i.getBoundingClientRect()))];
  }
  function dl(t, e, i, s, n, o) {
    if (!B(t).length) return;
    const r = e.getBoundingClientRect();
    if (!o)
      return pl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
    const a = i.getBoundingClientRect(),
      l = vo([r.top, r.bottom], [a.top, a.bottom]),
      [h, u, f, d] = l
        ? [s, "width", "left", "right"]
        : [n, "height", "top", "bottom"],
      g = a[u] < r[u] ? r[u] - a[u] : 0;
    return a[f] < r[f]
      ? g && h < r[f] + g
        ? !1
        : e.nextElementSibling
      : g && h > r[d] - g
      ? !1
      : e;
  }
  function pl(t, e) {
    const i = B(t).length === 1;
    i && H(t, e);
    const s = B(t),
      n = s.some((o, r) => {
        const a = o.getBoundingClientRect();
        return s.slice(r + 1).some((l) => {
          const h = l.getBoundingClientRect();
          return !vo([a.left, a.right], [h.left, h.right]);
        });
      });
    return i && at(e), n;
  }
  function vo(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }
  var bo = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      shift: Boolean,
      inset: Boolean,
    },
    data: {
      pos: `bottom-${U ? "right" : "left"}`,
      offset: !1,
      flip: !0,
      shift: !0,
      inset: !1,
    },
    connected() {
      (this.pos = this.$props.pos.split("-").concat("center").slice(0, 2)),
        ([this.dir, this.align] = this.pos),
        (this.axis = m(["top", "bottom"], this.dir) ? "y" : "x");
    },
    methods: {
      positionAt(t, e, i) {
        let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
        const n = [this.flip && "flip", this.shift && "shift"],
          o = {
            element: [this.inset ? this.dir : ci(this.dir), this.align],
            target: [this.dir, this.align],
          };
        if (this.axis === "y") {
          for (const l in o) o[l].reverse();
          s.reverse(), n.reverse();
        }
        const r = gl(t),
          a = x(t);
        c(t, { top: -a.height, left: -a.width }),
          un(t, e, {
            attach: o,
            offset: s,
            boundary: i,
            placement: n,
            viewportOffset: this.getViewportOffset(t),
          }),
          r();
      },
      getPositionOffset(t) {
        return (
          Q(
            this.offset === !1 ? c(t, "--uk-position-offset") : this.offset,
            this.axis === "x" ? "width" : "height",
            t
          ) *
          (m(["left", "top"], this.dir) ? -1 : 1) *
          (this.inset ? -1 : 1)
        );
      },
      getShiftOffset(t) {
        return this.align === "center"
          ? 0
          : Q(
              c(t, "--uk-position-shift-offset"),
              this.axis === "y" ? "width" : "height",
              t
            ) * (m(["left", "top"], this.align) ? 1 : -1);
      },
      getViewportOffset(t) {
        return Q(c(t, "--uk-position-viewport-offset"));
      },
    },
  };
  function gl(t) {
    const e = bt(t),
      { scrollTop: i } = e;
    return () => {
      i !== e.scrollTop && (e.scrollTop = i);
    };
  }
  var ml = {
    mixins: [Re, Ut, bo],
    data: {
      pos: "top",
      animation: ["uk-animation-scale-up"],
      duration: 100,
      cls: "uk-active",
    },
    connected() {
      vl(this.$el);
    },
    disconnected() {
      this.hide();
    },
    methods: {
      show() {
        if (this.isToggled(this.tooltip || null)) return;
        const { delay: t = 0, title: e } = wl(this.$options);
        if (!e) return;
        const i = p(this.$el, "title"),
          s = $(this.$el, ["blur", Ne], (o) => !St(o) && this.hide());
        this.reset = () => {
          p(this.$el, { title: i, "aria-describedby": null }), s();
        };
        const n = Yt(this);
        p(this.$el, { title: null, "aria-describedby": n }),
          clearTimeout(this.showTimer),
          (this.showTimer = setTimeout(() => this._show(e, n), t));
      },
      async hide() {
        var t;
        A(this.$el, "input:focus") ||
          (clearTimeout(this.showTimer),
          this.isToggled(this.tooltip || null) &&
            (await this.toggleElement(this.tooltip, !1, !1)),
          (t = this.reset) == null || t.call(this),
          at(this.tooltip),
          (this.tooltip = null));
      },
      async _show(t, e) {
        (this.tooltip = H(
          this.container,
          `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`
        )),
          $(this.tooltip, "toggled", (i, s) => {
            if (!s) return;
            const n = () => this.positionAt(this.tooltip, this.$el);
            n();
            const [o, r] = bl(this.tooltip, this.$el, this.pos);
            this.origin = this.axis === "y" ? `${ci(o)}-${r}` : `${r}-${ci(o)}`;
            const a = [
              R(
                document,
                `keydown ${gt}`,
                this.hide,
                !1,
                (l) =>
                  (l.type === gt && !this.$el.contains(l.target)) ||
                  (l.type === "keydown" && l.keyCode === P.ESC)
              ),
              $([document, ...qt(this.$el)], "scroll", n, { passive: !0 }),
            ];
            R(this.tooltip, "hide", () => a.forEach((l) => l()), { self: !0 });
          }),
          (await this.toggleElement(this.tooltip, !0)) || this.hide();
      },
    },
    events: {
      [`focus ${ce} ${gt}`](t) {
        St(t) || this.show();
      },
    },
  };
  function vl(t) {
    si(t) || p(t, "tabindex", "0");
  }
  function bl(t, e, [i, s]) {
    const n = S(t),
      o = S(e),
      r = [
        ["left", "right"],
        ["top", "bottom"],
      ];
    for (const l of r) {
      if (n[l[0]] >= o[l[1]]) {
        i = l[1];
        break;
      }
      if (n[l[1]] <= o[l[0]]) {
        i = l[0];
        break;
      }
    }
    const a = m(r[0], i) ? r[1] : r[0];
    return (
      n[a[0]] === o[a[0]]
        ? (s = a[0])
        : n[a[1]] === o[a[1]]
        ? (s = a[1])
        : (s = "center"),
      [i, s]
    );
  }
  function wl(t) {
    const { el: e, id: i, data: s } = t;
    return ["delay", "title"].reduce((n, o) => ({ [o]: Y(e, o), ...n }), {
      ...fe(Y(e, i), ["title"]),
      ...s,
    });
  }
  var $l = {
    mixins: [wi],
    i18n: {
      invalidMime: "Invalid File Type: %s",
      invalidName: "Invalid File Name: %s",
      invalidSize: "Invalid File Size: %s Kilobytes Max",
    },
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String,
    },
    data: {
      allow: !1,
      clsDragover: "uk-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: _,
      beforeAll: _,
      beforeSend: _,
      complete: _,
      completeAll: _,
      error: _,
      fail: _,
      load: _,
      loadEnd: _,
      loadStart: _,
      progress: _,
    },
    events: {
      change(t) {
        A(t.target, 'input[type="file"]') &&
          (t.preventDefault(),
          t.target.files && this.upload(t.target.files),
          (t.target.value = ""));
      },
      drop(t) {
        Ei(t);
        const e = t.dataTransfer;
        e != null &&
          e.files &&
          (O(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter(t) {
        Ei(t);
      },
      dragover(t) {
        Ei(t), b(this.$el, this.clsDragover);
      },
      dragleave(t) {
        Ei(t), O(this.$el, this.clsDragover);
      },
    },
    methods: {
      async upload(t) {
        if (((t = Tt(t)), !t.length)) return;
        v(this.$el, "upload", [t]);
        for (const s of t) {
          if (this.maxSize && this.maxSize * 1e3 < s.size) {
            this.fail(this.t("invalidSize", this.maxSize));
            return;
          }
          if (this.allow && !wo(this.allow, s.name)) {
            this.fail(this.t("invalidName", this.allow));
            return;
          }
          if (this.mime && !wo(this.mime, s.type)) {
            this.fail(this.t("invalidMime", this.mime));
            return;
          }
        }
        this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
        const e = xl(t, this.concurrent),
          i = async (s) => {
            const n = new FormData();
            s.forEach((o) => n.append(this.name, o));
            for (const o in this.params) n.append(o, this.params[o]);
            try {
              const o = await yl(this.url, {
                data: n,
                method: this.method,
                responseType: this.type,
                beforeSend: (r) => {
                  const { xhr: a } = r;
                  $(a.upload, "progress", this.progress);
                  for (const l of ["loadStart", "load", "loadEnd", "abort"])
                    $(a, l.toLowerCase(), this[l]);
                  return this.beforeSend(r);
                },
              });
              this.complete(o),
                e.length ? await i(e.shift()) : this.completeAll(o);
            } catch (o) {
              this.error(o);
            }
          };
        await i(e.shift());
      },
    },
  };
  function wo(t, e) {
    return e.match(
      new RegExp(
        `^${t
          .replace(/\//g, "\\/")
          .replace(/\*\*/g, "(\\/[^\\/]+)*")
          .replace(/\*/g, "[^\\/]+")
          .replace(/((?!\\))\?/g, "$1.")}$`,
        "i"
      )
    );
  }
  function xl(t, e) {
    const i = [];
    for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
    return i;
  }
  function Ei(t) {
    t.preventDefault(), t.stopPropagation();
  }
  function yl(t, e) {
    const i = {
      data: null,
      method: "GET",
      headers: {},
      xhr: new XMLHttpRequest(),
      beforeSend: _,
      responseType: "",
      ...e,
    };
    return Promise.resolve()
      .then(() => i.beforeSend(i))
      .then(() => kl(t, i));
  }
  function kl(t, e) {
    return new Promise((i, s) => {
      const { xhr: n } = e;
      for (const o in e)
        if (o in n)
          try {
            n[o] = e[o];
          } catch {}
      n.open(e.method.toUpperCase(), t);
      for (const o in e.headers) n.setRequestHeader(o, e.headers[o]);
      $(n, "load", () => {
        n.status === 0 ||
        (n.status >= 200 && n.status < 300) ||
        n.status === 304
          ? i(n)
          : s(pt(Error(n.statusText), { xhr: n, status: n.status }));
      }),
        $(n, "error", () => s(pt(Error("Network Error"), { xhr: n }))),
        $(n, "timeout", () => s(pt(Error("Network Timeout"), { xhr: n }))),
        n.send(e.data);
    });
  }
  var Sl = Object.freeze({
    __proto__: null,
    Countdown: Br,
    Filter: Kr,
    Lightbox: Ra,
    LightboxPanel: Jn,
    Notification: qa,
    Parallax: Qa,
    Slider: sl,
    SliderParallax: uo,
    Slideshow: al,
    SlideshowParallax: uo,
    Sortable: ll,
    Tooltip: ml,
    Upload: $l,
  });
  function Il(t) {
    Ot &&
      window.MutationObserver &&
      (document.body
        ? requestAnimationFrame(() => $o(t))
        : new MutationObserver((e, i) => {
            document.body && ($o(t), i.disconnect());
          }).observe(document.documentElement, { childList: !0 }));
  }
  function $o(t) {
    v(document, "uikit:init", t),
      document.body && It(document.body, xo),
      new MutationObserver((e) => e.forEach(Cl)).observe(document, {
        subtree: !0,
        childList: !0,
      }),
      new MutationObserver((e) => e.forEach(Tl)).observe(document, {
        subtree: !0,
        attributes: !0,
      }),
      (t._initialized = !0);
  }
  function Cl({ addedNodes: t, removedNodes: e }) {
    for (const i of t) It(i, xo);
    for (const i of e) It(i, El);
  }
  function Tl({ target: t, attributeName: e }) {
    var i;
    const s = yo(e);
    if (s) {
      if (kt(t, e)) {
        Ue(s, t);
        return;
      }
      (i = $i(t, s)) == null || i.$destroy();
    }
  }
  function xo(t) {
    const e = Gt(t);
    for (const i in Gt(t)) Cs(e[i]);
    for (const i of t.getAttributeNames()) {
      const s = yo(i);
      s && Ue(s, t);
    }
  }
  function El(t) {
    const e = Gt(t);
    for (const i in Gt(t)) Ts(e[i]);
  }
  function yo(t) {
    ut(t, "data-") && (t = t.slice(5));
    const e = me[t];
    return e && (xt(e) ? e : e.options).name;
  }
  za(ct), Fa(ct);
  var ko = {
    mixins: [st, Ut],
    props: {
      animation: Boolean,
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      offset: Number,
    },
    data: {
      targets: "> *",
      active: !1,
      animation: !0,
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      offset: 0,
    },
    computed: {
      items: ({ targets: t }, e) => z(t, e),
      toggles({ toggle: t }) {
        return this.items.map((e) => w(t, e));
      },
      contents({ content: t }) {
        return this.items.map((e) => {
          var i;
          return (
            ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || w(t, e)
          );
        });
      },
    },
    watch: {
      items(t, e) {
        if (e || I(t, this.clsOpen)) return;
        const i =
          (this.active !== !1 && t[Number(this.active)]) ||
          (!this.collapsible && t[0]);
        i && this.toggle(i, !1);
      },
      toggles() {
        this.$emit();
      },
      contents(t) {
        for (const e of t) {
          const i = I(
            this.items.find((s) => s.contains(e)),
            this.clsOpen
          );
          Pi(e, !i);
        }
        this.$emit();
      },
    },
    observe: Le(),
    events: [
      {
        name: "click keydown",
        delegate() {
          return `${this.targets} ${this.$props.toggle}`;
        },
        async handler(t) {
          var e;
          (t.type === "keydown" && t.keyCode !== P.SPACE) ||
            (t.preventDefault(),
            (e = this._off) == null || e.call(this),
            (this._off = _l(t.target)),
            await this.toggle(ne(this.toggles, t.current)),
            this._off());
        },
      },
      {
        name: "shown hidden",
        self: !0,
        delegate() {
          return this.targets;
        },
        handler() {
          this.$emit();
        },
      },
    ],
    update() {
      const t = Pe(this.items, `.${this.clsOpen}`);
      for (const e in this.items) {
        const i = this.toggles[e],
          s = this.contents[e];
        if (!i || !s) continue;
        (i.id = Yt(this, i)), (s.id = Yt(this, s));
        const n = m(t, this.items[e]);
        p(i, {
          role: q(i, "a") ? "button" : null,
          "aria-controls": s.id,
          "aria-expanded": n,
          "aria-disabled": !this.collapsible && t.length < 2 && n,
        }),
          p(s, { role: "region", "aria-labelledby": i.id }),
          q(s, "ul") && p(B(s), "role", "presentation");
      }
    },
    methods: {
      toggle(t, e) {
        t = this.items[ot(t, this.items)];
        let i = [t];
        const s = Pe(this.items, `.${this.clsOpen}`);
        if (
          (!this.multiple && !m(s, i[0]) && (i = i.concat(s)),
          !(!this.collapsible && s.length < 2 && m(s, t)))
        )
          return Promise.all(
            i.map((n) =>
              this.toggleElement(n, !m(s, n), (o, r) => {
                if ((j(o, this.clsOpen, r), e === !1 || !this.animation)) {
                  Pi(w(this.content, o), !r);
                  return;
                }
                return Pl(o, r, this);
              })
            )
          );
      },
    },
  };
  function Pi(t, e) {
    t && (t.hidden = e);
  }
  async function Pl(
    t,
    e,
    { content: i, duration: s, velocity: n, transition: o }
  ) {
    var r;
    (i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || w(i, t)),
      t._wrapper || (t._wrapper = hi(i, "<div>"));
    const a = t._wrapper;
    c(a, "overflow", "hidden");
    const l = k(c(a, "height"));
    await M.cancel(a), Pi(i, !1);
    const h = Dt(["marginTop", "marginBottom"], (f) => c(i, f)) + x(i).height,
      u = l / h;
    (s = (n * h + s) * (e ? 1 - u : u)),
      c(a, "height", l),
      await M.start(a, { height: e ? h : 0 }, s, o),
      Me(i),
      delete t._wrapper,
      e || Pi(i, !0);
  }
  function _l(t) {
    const e = bt(t, !0);
    let i;
    return (
      (function s() {
        i = requestAnimationFrame(() => {
          const { top: n } = t.getBoundingClientRect();
          n < 0 && (e.scrollTop += n), s();
        });
      })(),
      () => requestAnimationFrame(() => cancelAnimationFrame(i))
    );
  }
  var Ol = {
    mixins: [st, Ut],
    args: "animation",
    props: { animation: Boolean, close: String },
    data: { animation: !0, selClose: ".uk-alert-close", duration: 150 },
    events: {
      name: "click",
      delegate() {
        return this.selClose;
      },
      handler(t) {
        t.preventDefault(), this.close();
      },
    },
    methods: {
      async close() {
        await this.toggleElement(this.$el, !1, Al), this.$destroy(!0);
      },
    },
  };
  function Al(t, e, { duration: i, transition: s, velocity: n }) {
    const o = k(c(t, "height"));
    return (
      c(t, "height", o),
      M.start(
        t,
        {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0,
        },
        n * o + i,
        s
      )
    );
  }
  var So = {
      args: "autoplay",
      props: { automute: Boolean, autoplay: Boolean },
      data: { automute: !1, autoplay: !0 },
      connected() {
        this.autoplay === "inview" &&
          !kt(this.$el, "preload") &&
          (this.$el.preload = "none"),
          q(this.$el, "iframe") &&
            !kt(this.$el, "allow") &&
            (this.$el.allow = "autoplay"),
          this.automute && nn(this.$el);
      },
      observe: [
        de({
          filter: ({ $el: t, autoplay: e }) => e && on(t),
          handler([{ isIntersecting: t }]) {
            t ? en(this.$el) : sn(this.$el);
          },
          args: { intersecting: !1 },
          options: ({ $el: t, autoplay: e }) => ({
            root: e === "inview" ? null : E(t),
          }),
        }),
      ],
    },
    Ml = {
      mixins: [So],
      props: { width: Number, height: Number },
      data: { automute: !0 },
      events: {
        "load loadedmetadata"() {
          this.$emit("resize");
        },
      },
      observe: mt({
        target: ({ $el: t }) => [Io(t) || E(t)],
        filter: ({ $el: t }) => !Co(t),
      }),
      update: {
        read() {
          if (Co(this.$el)) return;
          const { ratio: t, cover: e } = ei,
            { $el: i, width: s, height: n } = this;
          let o = { width: s, height: n };
          if (!s || !n) {
            const h = {
              width: i.naturalWidth || i.videoWidth || i.clientWidth,
              height: i.naturalHeight || i.videoHeight || i.clientHeight,
            };
            s ? (o = t(h, "width", s)) : n ? (o = t(h, "height", n)) : (o = h);
          }
          const { offsetHeight: r, offsetWidth: a } = Io(i) || E(i),
            l = e(o, {
              width: a + (a % 2 ? 1 : 0),
              height: r + (r % 2 ? 1 : 0),
            });
          return !l.width || !l.height ? !1 : l;
        },
        write({ height: t, width: e }) {
          c(this.$el, { height: t, width: e });
        },
        events: ["resize"],
      },
    };
  function Io(t) {
    for (; (t = E(t)); ) if (c(t, "position") !== "static") return t;
  }
  function Co(t) {
    return q(t, "img", "video");
  }
  let J;
  var To = {
    mixins: [Re, bo, Ut],
    args: "pos",
    props: {
      mode: "list",
      toggle: Boolean,
      boundary: Boolean,
      boundaryX: Boolean,
      boundaryY: Boolean,
      target: Boolean,
      targetX: Boolean,
      targetY: Boolean,
      stretch: Boolean,
      delayShow: Number,
      delayHide: Number,
      autoUpdate: Boolean,
      clsDrop: String,
      animateOut: Boolean,
      bgScroll: Boolean,
      closeOnScroll: Boolean,
    },
    data: {
      mode: ["click", "hover"],
      toggle: "- *",
      boundary: !1,
      boundaryX: !1,
      boundaryY: !1,
      target: !1,
      targetX: !1,
      targetY: !1,
      stretch: !1,
      delayShow: 0,
      delayHide: 800,
      autoUpdate: !0,
      clsDrop: !1,
      animateOut: !1,
      bgScroll: !0,
      animation: ["uk-animation-fade"],
      cls: "uk-open",
      container: !1,
      closeOnScroll: !1,
    },
    computed: {
      boundary({ boundary: t, boundaryX: e, boundaryY: i }, s) {
        return [it(e || t, s) || window, it(i || t, s) || window];
      },
      target({ target: t, targetX: e, targetY: i }, s) {
        return (
          e || (e = t || this.targetEl),
          i || (i = t || this.targetEl),
          [e === !0 ? window : it(e, s), i === !0 ? window : it(i, s)]
        );
      },
    },
    created() {
      this.tracker = new ss();
    },
    beforeConnect() {
      this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
    },
    connected() {
      b(this.$el, "uk-drop", this.clsDrop),
        this.toggle && !this.targetEl && (this.targetEl = Nl(this)),
        (this._style = Fi(this.$el.style, ["width", "height"]));
    },
    disconnected() {
      this.isActive() && (this.hide(!1), (J = null)), c(this.$el, this._style);
    },
    observe: Le({
      target: ({ toggle: t, $el: e }) => it(t, e),
      targets: ({ $el: t }) => t,
    }),
    events: [
      {
        name: "click",
        delegate() {
          return ".uk-drop-close";
        },
        handler(t) {
          t.preventDefault(), this.hide(!1);
        },
      },
      {
        name: "click",
        delegate() {
          return 'a[href*="#"]';
        },
        handler({ defaultPrevented: t, current: e }) {
          const { hash: i } = e;
          !t && i && oe(e) && !this.$el.contains(w(i)) && this.hide(!1);
        },
      },
      {
        name: "beforescroll",
        handler() {
          this.hide(!1);
        },
      },
      {
        name: "toggle",
        self: !0,
        handler(t, e) {
          t.preventDefault(),
            this.isToggled()
              ? this.hide(!1)
              : this.show(e == null ? void 0 : e.$el, !1);
        },
      },
      {
        name: "toggleshow",
        self: !0,
        handler(t, e) {
          t.preventDefault(), this.show(e == null ? void 0 : e.$el);
        },
      },
      {
        name: "togglehide",
        self: !0,
        handler(t) {
          t.preventDefault(), A(this.$el, ":focus,:hover") || this.hide();
        },
      },
      {
        name: `${ce} focusin`,
        filter() {
          return m(this.mode, "hover");
        },
        handler(t) {
          St(t) || this.clearTimers();
        },
      },
      {
        name: `${Ne} focusout`,
        filter() {
          return m(this.mode, "hover");
        },
        handler(t) {
          !St(t) && t.relatedTarget && this.hide();
        },
      },
      {
        name: "toggled",
        self: !0,
        handler(t, e) {
          e && (this.clearTimers(), this.position());
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          (J = this),
            this.tracker.init(),
            p(this.targetEl, "aria-expanded", !0);
          const t = [
            zl(this),
            Fl(this),
            Ll(this),
            this.autoUpdate && Eo(this),
            this.closeOnScroll && Hl(this),
            !this.bgScroll && On(this.$el),
          ];
          R(this.$el, "hide", () => t.forEach((e) => e && e()), { self: !0 });
        },
      },
      {
        name: "beforehide",
        self: !0,
        handler() {
          this.clearTimers();
        },
      },
      {
        name: "hide",
        handler({ target: t }) {
          if (this.$el !== t) {
            J =
              J === null && this.$el.contains(t) && this.isToggled() ? this : J;
            return;
          }
          (J = this.isActive() ? null : J),
            this.tracker.cancel(),
            p(this.targetEl, "aria-expanded", null);
        },
      },
    ],
    update: {
      write() {
        this.isToggled() && !I(this.$el, this.clsEnter) && this.position();
      },
    },
    methods: {
      show(t = this.targetEl, e = !0) {
        if (
          (this.isToggled() &&
            t &&
            this.targetEl &&
            t !== this.targetEl &&
            this.hide(!1, !1),
          (this.targetEl = t),
          this.clearTimers(),
          !this.isActive())
        ) {
          if (J) {
            if (e && J.isDelaying) {
              this.showTimer = setTimeout(
                () => A(t, ":hover") && this.show(),
                10
              );
              return;
            }
            let i;
            for (; J && i !== J && !J.$el.contains(this.$el); )
              (i = J), J.hide(!1, !1);
          }
          this.container &&
            E(this.$el) !== this.container &&
            H(this.container, this.$el),
            (this.showTimer = setTimeout(
              () => this.toggleElement(this.$el, !0),
              (e && this.delayShow) || 0
            ));
        }
      },
      hide(t = !0, e = !0) {
        const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
        this.clearTimers(),
          (this.isDelayedHide = t),
          (this.isDelaying = Dl(this.$el).some((s) => this.tracker.movesTo(s))),
          t && this.isDelaying
            ? (this.hideTimer = setTimeout(this.hide, 50))
            : t && this.delayHide
            ? (this.hideTimer = setTimeout(i, this.delayHide))
            : i();
      },
      clearTimers() {
        clearTimeout(this.showTimer),
          clearTimeout(this.hideTimer),
          (this.showTimer = null),
          (this.hideTimer = null),
          (this.isDelaying = !1);
      },
      isActive() {
        return J === this;
      },
      position() {
        O(this.$el, "uk-drop-stack"),
          c(this.$el, this._style),
          (this.$el.hidden = !0);
        const t = this.target.map((n) => Bl(this.$el, n)),
          e = this.getViewportOffset(this.$el),
          i = [
            [0, ["x", "width", "left", "right"]],
            [1, ["y", "height", "top", "bottom"]],
          ];
        for (const [n, [o, r]] of i)
          this.axis !== o &&
            m([o, !0], this.stretch) &&
            c(this.$el, {
              [r]: Math.min(S(this.boundary[n])[r], t[n][r] - 2 * e),
              [`overflow-${o}`]: "auto",
            });
        const s = t[0].width - 2 * e;
        (this.$el.hidden = !1),
          c(this.$el, "maxWidth", ""),
          this.$el.offsetWidth > s && b(this.$el, "uk-drop-stack"),
          c(this.$el, "maxWidth", s),
          this.positionAt(this.$el, this.target, this.boundary);
        for (const [n, [o, r, a, l]] of i)
          if (this.axis === o && m([o, !0], this.stretch)) {
            const h = Math.abs(this.getPositionOffset(this.$el)),
              u = S(this.target[n]),
              f = S(this.$el);
            c(this.$el, {
              [r]:
                (u[a] > f[a]
                  ? u[this.inset ? l : a] -
                    Math.max(S(this.boundary[n])[a], t[n][a] + e)
                  : Math.min(S(this.boundary[n])[l], t[n][l] - e) -
                    u[this.inset ? a : l]) - h,
              [`overflow-${o}`]: "auto",
            }),
              this.positionAt(this.$el, this.target, this.boundary);
          }
      },
    },
  };
  function Dl(t) {
    const e = [];
    return It(t, (i) => c(i, "position") !== "static" && e.push(i)), e;
  }
  function Bl(t, e) {
    return lt(qt(e).find((i) => i.contains(t)));
  }
  function Nl(t) {
    const { $el: e } = t.$create("toggle", it(t.toggle, t.$el), {
      target: t.$el,
      mode: t.mode,
    });
    return p(e, "aria-haspopup", !0), e;
  }
  function zl(t) {
    const e = () => t.$emit(),
      i = [ns(e), ze(qt(t.$el).concat(t.target), e)];
    return () => i.map((s) => s.disconnect());
  }
  function Eo(t, e = () => t.$emit()) {
    return $([document, ...qt(t.$el)], "scroll", e, { passive: !0 });
  }
  function Fl(t) {
    return $(document, "keydown", (e) => {
      e.keyCode === P.ESC && t.hide(!1);
    });
  }
  function Hl(t) {
    return Eo(t, () => t.hide(!1));
  }
  function Ll(t) {
    return $(document, gt, ({ target: e }) => {
      t.$el.contains(e) ||
        R(
          document,
          `${At} ${fi} scroll`,
          ({ defaultPrevented: i, type: s, target: n }) => {
            !i &&
              s === At &&
              e === n &&
              !(t.targetEl && Ls(e, t.targetEl)) &&
              t.hide(!1);
          },
          !0
        );
    });
  }
  var Po = {
    mixins: [st, Re],
    props: {
      align: String,
      clsDrop: String,
      boundary: Boolean,
      dropbar: Boolean,
      dropbarAnchor: Boolean,
      duration: Number,
      mode: Boolean,
      offset: Boolean,
      stretch: Boolean,
      delayShow: Boolean,
      delayHide: Boolean,
      target: Boolean,
      targetX: Boolean,
      targetY: Boolean,
      animation: Boolean,
      animateOut: Boolean,
      closeOnScroll: Boolean,
    },
    data: {
      align: U ? "right" : "left",
      clsDrop: "uk-dropdown",
      clsDropbar: "uk-dropnav-dropbar",
      boundary: !0,
      dropbar: !1,
      dropbarAnchor: !1,
      duration: 200,
      container: !1,
      selNavItem: "> li > a, > ul > li > a",
    },
    computed: {
      dropbarAnchor: ({ dropbarAnchor: t }, e) => it(t, e) || e,
      dropbar({ dropbar: t }) {
        return t
          ? ((t =
              this._dropbar ||
              it(t, this.$el) ||
              w(`+ .${this.clsDropbar}`, this.$el)),
            t || (this._dropbar = w("<div></div>")))
          : null;
      },
      dropbarOffset() {
        return 0;
      },
      dropContainer(t, e) {
        return this.container || e;
      },
      dropdowns({ clsDrop: t }, e) {
        var i;
        const s = z(`.${t}`, e);
        if (this.dropContainer !== e)
          for (const n of z(`.${t}`, this.dropContainer)) {
            const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
            !m(s, n) && o && this.$el.contains(o) && s.push(n);
          }
        return s;
      },
      items({ selNavItem: t }, e) {
        return z(t, e);
      },
    },
    watch: {
      dropbar(t) {
        b(
          t,
          "uk-dropbar",
          "uk-dropbar-top",
          this.clsDropbar,
          `uk-${this.$options.name}-dropbar`
        );
      },
      dropdowns() {
        this.initializeDropdowns();
      },
    },
    connected() {
      this.initializeDropdowns();
    },
    disconnected() {
      at(this._dropbar), delete this._dropbar;
    },
    events: [
      {
        name: "mouseover focusin",
        delegate() {
          return this.selNavItem;
        },
        handler({ current: t }) {
          const e = this.getActive();
          e &&
            m(e.mode, "hover") &&
            e.targetEl &&
            !t.contains(e.targetEl) &&
            !e.isDelaying &&
            e.hide(!1);
        },
      },
      {
        name: "keydown",
        self: !0,
        delegate() {
          return this.selNavItem;
        },
        handler(t) {
          var e;
          const { current: i, keyCode: s } = t,
            n = this.getActive();
          s === P.DOWN &&
            (n == null ? void 0 : n.targetEl) === i &&
            (t.preventDefault(), (e = w(Ee, n.$el)) == null || e.focus()),
            _o(t, this.items, n);
        },
      },
      {
        name: "keydown",
        el() {
          return this.dropContainer;
        },
        delegate() {
          return `.${this.clsDrop}`;
        },
        handler(t) {
          var e;
          const { current: i, keyCode: s } = t;
          if (!m(this.dropdowns, i)) return;
          const n = this.getActive();
          let o = -1;
          if (
            (s === P.HOME
              ? (o = 0)
              : s === P.END
              ? (o = "last")
              : s === P.UP
              ? (o = "previous")
              : s === P.DOWN
              ? (o = "next")
              : s === P.ESC && ((e = n.targetEl) == null || e.focus()),
            ~o)
          ) {
            t.preventDefault();
            const r = z(Ee, i);
            r[
              ot(
                o,
                r,
                $t(r, (a) => A(a, ":focus"))
              )
            ].focus();
          }
          _o(t, this.items, n);
        },
      },
      {
        name: "mouseleave",
        el() {
          return this.dropbar;
        },
        filter() {
          return this.dropbar;
        },
        handler() {
          const t = this.getActive();
          t &&
            m(t.mode, "hover") &&
            !this.dropdowns.some((e) => A(e, ":hover")) &&
            t.hide();
        },
      },
      {
        name: "beforeshow",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({ target: t }) {
          this.isDropbarDrop(t) &&
            (this.dropbar.previousElementSibling !== this.dropbarAnchor &&
              ai(this.dropbarAnchor, this.dropbar),
            b(t, `${this.clsDrop}-dropbar`));
        },
      },
      {
        name: "show",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({ target: t }) {
          if (!this.isDropbarDrop(t)) return;
          const e = this.getDropdown(t),
            i = () => {
              const s = Nt(t, `.${this.clsDrop}`)
                  .concat(t)
                  .map((a) => S(a)),
                n = Math.min(...s.map(({ top: a }) => a)),
                o = Math.max(...s.map(({ bottom: a }) => a)),
                r = S(this.dropbar);
              c(
                this.dropbar,
                "top",
                this.dropbar.offsetTop - (r.top - n) - this.dropbarOffset
              ),
                this.transitionTo(
                  o - n + k(c(t, "marginBottom")) + this.dropbarOffset,
                  t
                );
            };
          (this._observer = ze([e.$el, ...e.target], i)), i();
        },
      },
      {
        name: "beforehide",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler(t) {
          const e = this.getActive();
          A(this.dropbar, ":hover") &&
            e.$el === t.target &&
            m(e.mode, "hover") &&
            e.isDelayedHide &&
            !this.items.some((i) => e.targetEl !== i && A(i, ":focus")) &&
            t.preventDefault();
        },
      },
      {
        name: "hide",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({ target: t }) {
          var e;
          if (!this.isDropbarDrop(t)) return;
          (e = this._observer) == null || e.disconnect();
          const i = this.getActive();
          (!i || i.$el === t) && this.transitionTo(0);
        },
      },
    ],
    methods: {
      getActive() {
        var t;
        return m(this.dropdowns, (t = J) == null ? void 0 : t.$el) && J;
      },
      async transitionTo(t, e) {
        const { dropbar: i } = this,
          s = tt(i);
        (e = s < t && e),
          await M.cancel([e, i]),
          c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`),
          tt(i, s),
          await Promise.all([
            M.start(i, { height: t }, this.duration),
            M.start(
              e,
              { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` },
              this.duration
            ).finally(() => c(e, { clipPath: "" })),
          ]).catch(_);
      },
      getDropdown(t) {
        return (
          this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
        );
      },
      isDropbarDrop(t) {
        return this.getDropdown(t) && I(t, this.clsDrop);
      },
      initializeDropdowns() {
        this.$create(
          "drop",
          this.dropdowns.filter((t) => !this.getDropdown(t)),
          {
            ...this.$props,
            flip: !1,
            shift: !0,
            pos: `bottom-${this.align}`,
            boundary: this.boundary === !0 ? this.$el : this.boundary,
          }
        );
      },
    },
  };
  function _o(t, e, i) {
    var s, n, o;
    const { current: r, keyCode: a } = t;
    let l = -1;
    a === P.HOME
      ? (l = 0)
      : a === P.END
      ? (l = "last")
      : a === P.LEFT
      ? (l = "previous")
      : a === P.RIGHT
      ? (l = "next")
      : a === P.TAB &&
        ((s = i.targetEl) == null || s.focus(),
        (n = i.hide) == null || n.call(i, !1)),
      ~l &&
        (t.preventDefault(),
        (o = i.hide) == null || o.call(i, !1),
        e[ot(l, e, e.indexOf(i.targetEl || r))].focus());
  }
  var Wl = {
      mixins: [st],
      args: "target",
      props: { target: Boolean },
      data: { target: !1 },
      computed: {
        input: (t, e) => w(Te, e),
        state() {
          return this.input.nextElementSibling;
        },
        target({ target: t }, e) {
          return (
            t &&
            ((t === !0 &&
              E(this.input) === e &&
              this.input.nextElementSibling) ||
              w(t, e))
          );
        },
      },
      update() {
        var t;
        const { target: e, input: i } = this;
        if (!e) return;
        let s;
        const n = ji(e) ? "value" : "textContent",
          o = e[n],
          r =
            (t = i.files) != null && t[0]
              ? i.files[0].name
              : A(i, "select") &&
                (s = z("option", i).filter((a) => a.selected)[0])
              ? s.textContent
              : i.value;
        o !== r && (e[n] = r);
      },
      events: [
        {
          name: "change",
          handler() {
            this.$emit();
          },
        },
        {
          name: "reset",
          el() {
            return this.$el.closest("form");
          },
          handler() {
            this.$emit();
          },
        },
      ],
    },
    Rl = {
      extends: xn,
      mixins: [st],
      name: "grid",
      props: {
        masonry: Boolean,
        parallax: String,
        parallaxStart: String,
        parallaxEnd: String,
        parallaxJustify: Boolean,
      },
      data: {
        margin: "uk-grid-margin",
        clsStack: "uk-grid-stack",
        masonry: !1,
        parallax: 0,
        parallaxStart: 0,
        parallaxEnd: 0,
        parallaxJustify: !1,
      },
      connected() {
        this.masonry && b(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      },
      observe: mi({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }),
      update: [
        {
          write({ rows: t }) {
            j(this.$el, this.clsStack, !t.some((e) => e.length > 1));
          },
          events: ["resize"],
        },
        {
          read(t) {
            const { rows: e } = t;
            let {
              masonry: i,
              parallax: s,
              parallaxJustify: n,
              margin: o,
            } = this;
            if (
              ((s = Math.max(0, Q(s))),
              !(i || s || n) ||
                Oo(e) ||
                e[0].some((y, C) =>
                  e.some((D) => D[C] && D[C].offsetWidth !== y.offsetWidth)
                ))
            )
              return (t.translates = t.scrollColumns = !1);
            let r = ql(e, o),
              a,
              l;
            i ? ([a, l] = jl(e, r, i === "next")) : (a = Ul(e));
            const h = a.map((y) => Dt(y, "offsetHeight") + r * (y.length - 1)),
              u = Math.max(0, ...h);
            let f, d, g;
            return (
              (s || n) &&
                ((f = h.map((y, C) => (n ? u - y + s : s / (C % 2 || 8)))),
                n || (s = Math.max(...h.map((y, C) => y + f[C] - u))),
                (d = Q(this.parallaxStart, "height", this.$el, !0)),
                (g = Q(this.parallaxEnd, "height", this.$el, !0))),
              {
                columns: a,
                translates: l,
                scrollColumns: f,
                parallaxStart: d,
                parallaxEnd: g,
                padding: s,
                height: l ? u : "",
              }
            );
          },
          write({ height: t, padding: e }) {
            c(this.$el, "paddingBottom", e || ""),
              t !== !1 && c(this.$el, "height", t);
          },
          events: ["resize"],
        },
        {
          read({
            rows: t,
            scrollColumns: e,
            parallaxStart: i,
            parallaxEnd: s,
          }) {
            return e && Oo(t) ? !1 : { scrolled: e ? as(this.$el, i, s) : !1 };
          },
          write({ columns: t, scrolled: e, scrollColumns: i, translates: s }) {
            (!e && !s) ||
              t.forEach((n, o) =>
                n.forEach((r, a) => {
                  let [l, h] = (s && s[o][a]) || [0, 0];
                  e && (h += e * i[o]),
                    c(r, "transform", `translate(${l}px, ${h}px)`);
                })
              );
          },
          events: ["scroll", "resize"],
        },
      ],
    };
  function Oo(t) {
    return t.flat().some((e) => c(e, "position") === "absolute");
  }
  function jl(t, e, i) {
    const s = [],
      n = [],
      o = Array(t[0].length).fill(0);
    let r = 0;
    for (let a of t) {
      U && (a = a.reverse());
      let l = 0;
      for (const h in a) {
        const { offsetWidth: u, offsetHeight: f } = a[h],
          d = i ? h : o.indexOf(Math.min(...o));
        Os(s, d, a[h]),
          Os(n, d, [(d - h) * u * (U ? -1 : 1), o[d] - r]),
          (o[d] += f + e),
          (l = Math.max(l, f));
      }
      r += l + e;
    }
    return [s, n];
  }
  function ql(t, e) {
    const i = t.flat().find((s) => I(s, e));
    return k(i ? c(i, "marginTop") : c(t[0][0], "paddingLeft"));
  }
  function Ul(t) {
    const e = [];
    for (const i of t) for (const s in i) Os(e, s, i[s]);
    return e;
  }
  function Os(t, e, i) {
    t[e] || (t[e] = []), t[e].push(i);
  }
  var Vl = {
    args: "target",
    props: { target: String, row: Boolean },
    data: { target: "> *", row: !0 },
    computed: { elements: ({ target: t }, e) => z(t, e) },
    observe: mt({
      target: ({ $el: t, elements: e }) =>
        e.reduce((i, s) => i.concat(s, ...s.children), [t]),
    }),
    update: {
      read() {
        return {
          rows: (this.row ? ms(this.elements) : [this.elements]).map(Gl),
        };
      },
      write({ rows: t }) {
        for (const { heights: e, elements: i } of t)
          i.forEach((s, n) => c(s, "minHeight", e[n]));
      },
      events: ["resize"],
    },
  };
  function Gl(t) {
    if (t.length < 2) return { heights: [""], elements: t };
    let e = t.map(Yl);
    const i = Math.max(...e);
    return {
      heights: t.map((s, n) => (e[n].toFixed(2) === i.toFixed(2) ? "" : i)),
      elements: t,
    };
  }
  function Yl(t) {
    const e = Fi(t.style, ["display", "minHeight"]);
    W(t) || c(t, "display", "block", "important"), c(t, "minHeight", "");
    const i = x(t).height - ae(t, "height", "content-box");
    return c(t, e), i;
  }
  var Xl = {
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number,
      },
      data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
      observe: [
        gs({ filter: ({ expand: t }) => t }),
        mt({ target: ({ $el: t }) => ue(t) }),
      ],
      update: {
        read() {
          if (!W(this.$el)) return !1;
          let t = "";
          const e = ae(this.$el, "height", "content-box"),
            { body: i, scrollingElement: s } = document,
            n = bt(this.$el),
            { height: o } = lt(n === i ? s : n),
            r = s === n || i === n;
          if (((t = `calc(${r ? "100vh" : `${o}px`}`), this.expand)) {
            const a = x(n).height - x(this.$el).height;
            t += ` - ${a}px`;
          } else {
            if (this.offsetTop)
              if (r) {
                const a =
                    this.offsetTop === !0
                      ? this.$el
                      : it(this.offsetTop, this.$el),
                  l = Rt(a)[0] - Rt(n)[0];
                t += l > 0 && l < o / 2 ? ` - ${l}px` : "";
              } else t += ` - ${c(n, "paddingTop")}`;
            this.offsetBottom === !0
              ? (t += ` - ${x(this.$el.nextElementSibling).height}px`)
              : vt(this.offsetBottom)
              ? (t += ` - ${this.offsetBottom}vh`)
              : this.offsetBottom && Qt(this.offsetBottom, "px")
              ? (t += ` - ${k(this.offsetBottom)}px`)
              : N(this.offsetBottom) &&
                (t += ` - ${x(it(this.offsetBottom, this.$el)).height}px`);
          }
          return (t += `${e ? ` - ${e}px` : ""})`), { minHeight: t };
        },
        write({ minHeight: t }) {
          c(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
        },
        events: ["resize"],
      },
    },
    Jl =
      '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
    Kl =
      '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
    Zl =
      '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    Ql =
      '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
    th =
      '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
    eh =
      '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    ih =
      '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
    sh =
      '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',
    nh =
      '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
    oh =
      '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
    rh =
      '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
    ah =
      '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
    lh =
      '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
    hh =
      '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    ch =
      '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>',
    uh =
      '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>',
    fh =
      '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>',
    dh =
      '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>',
    ph =
      '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
    gh =
      '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>',
    Ao = {
      args: "src",
      props: { width: Number, height: Number, ratio: Number },
      data: { ratio: 1 },
      connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected) return;
          const e = mh(t, this.$el);
          return (
            this.svgEl && e !== this.svgEl && at(this.svgEl),
            vh.call(this, e, t),
            (this.svgEl = e)
          );
        }, _);
      },
      disconnected() {
        this.svg.then((t) => {
          this._connected ||
            (Ri(this.$el) && (this.$el.hidden = !1),
            at(t),
            (this.svgEl = null));
        }),
          (this.svg = null);
      },
      methods: { async getSvg() {} },
    };
  function mh(t, e) {
    if (Ri(e) || q(e, "canvas")) {
      e.hidden = !0;
      const s = e.nextElementSibling;
      return Mo(t, s) ? s : ai(e, t);
    }
    const i = e.lastElementChild;
    return Mo(t, i) ? i : H(e, t);
  }
  function Mo(t, e) {
    return q(t, "svg") && q(e, "svg") && t.innerHTML === e.innerHTML;
  }
  function vh(t, e) {
    const i = ["width", "height"];
    let s = i.map((o) => this[o]);
    s.some((o) => o) || (s = i.map((o) => p(e, o)));
    const n = p(e, "viewBox");
    n && !s.some((o) => o) && (s = n.split(" ").slice(2)),
      s.forEach((o, r) => p(t, i[r], k(o) * this.ratio || null));
  }
  const _i = {
      spinner: ph,
      totop: gh,
      marker: Ql,
      "close-icon": Jl,
      "close-large": Kl,
      "drop-parent-icon": Zl,
      "nav-parent-icon": eh,
      "nav-parent-icon-large": th,
      "navbar-parent-icon": ih,
      "navbar-toggle-icon": sh,
      "overlay-icon": nh,
      "pagination-next": oh,
      "pagination-previous": rh,
      "search-icon": ah,
      "search-large": lh,
      "search-navbar": hh,
      "slidenav-next": uh,
      "slidenav-next-large": ch,
      "slidenav-previous": dh,
      "slidenav-previous-large": fh,
    },
    As = {
      install: Th,
      mixins: [Ao],
      args: "icon",
      props: { icon: String },
      isIcon: !0,
      beforeConnect() {
        b(this.$el, "uk-icon");
      },
      methods: {
        async getSvg() {
          const t = Eh(this.icon);
          if (!t) throw "Icon not found.";
          return t;
        },
      },
    },
    Jt = {
      args: !1,
      extends: As,
      data: (t) => ({ icon: Mt(t.constructor.options.name) }),
      beforeConnect() {
        b(this.$el, this.$options.id);
      },
    },
    bh = {
      extends: Jt,
      beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      },
    },
    wh = {
      extends: Jt,
      mixins: [wi],
      i18n: { toggle: "Open Search", submit: "Submit Search" },
      beforeConnect() {
        if (
          ((this.icon =
            I(this.$el, "uk-search-icon") &&
            Nt(this.$el, ".uk-search-large").length
              ? "search-large"
              : Nt(this.$el, ".uk-search-navbar").length
              ? "search-navbar"
              : this.$props.icon),
          !kt(this.$el, "aria-label"))
        )
          if (
            I(this.$el, "uk-search-toggle") ||
            I(this.$el, "uk-navbar-toggle")
          ) {
            const t = this.t("toggle");
            p(this.$el, "aria-label", t);
          } else {
            const t = this.$el.closest("a,button");
            if (t) {
              const e = this.t("submit");
              p(t, "aria-label", e);
            }
          }
      },
    },
    $h = {
      extends: Jt,
      beforeConnect() {
        p(this.$el, "role", "status");
      },
      methods: {
        async getSvg() {
          const t = await As.methods.getSvg.call(this);
          return (
            this.ratio !== 1 &&
              c(w("circle", t), "strokeWidth", 1 / this.ratio),
            t
          );
        },
      },
    },
    Kt = {
      extends: Jt,
      mixins: [wi],
      beforeConnect() {
        const t = this.$el.closest("a,button");
        p(t, "role", this.role !== null && q(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !kt(t, "aria-label") && p(t, "aria-label", e);
      },
    },
    Do = {
      extends: Kt,
      beforeConnect() {
        b(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = I(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      },
    },
    xh = { extends: Kt, i18n: { label: "Open menu" } },
    yh = {
      extends: Kt,
      i18n: { label: "Close" },
      beforeConnect() {
        this.icon = `close-${I(this.$el, "uk-close-large") ? "large" : "icon"}`;
      },
    },
    kh = { extends: Kt, i18n: { label: "Open" } },
    Sh = { extends: Kt, i18n: { label: "Back to top" } },
    Ih = { extends: Kt, i18n: { label: "Next page" }, data: { role: null } },
    Ch = {
      extends: Kt,
      i18n: { label: "Previous page" },
      data: { role: null },
    },
    Oi = {};
  function Th(t) {
    t.icon.add = (e, i) => {
      const s = N(e) ? { [e]: i } : e;
      Pt(s, (n, o) => {
        (_i[o] = n), delete Oi[o];
      }),
        t._initialized &&
          It(document.body, (n) =>
            Pt(t.getComponents(n), (o) => {
              o.$options.isIcon && o.icon in s && o.$reset();
            })
          );
    };
  }
  function Eh(t) {
    return _i[t]
      ? (Oi[t] || (Oi[t] = w((_i[Ph(t)] || _i[t]).trim())), Oi[t].cloneNode(!0))
      : null;
  }
  function Ph(t) {
    return U ? zi(zi(t, "left", "right"), "previous", "next") : t;
  }
  const _h = Ot && "loading" in HTMLImageElement.prototype;
  var Oh = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      sources: String,
      margin: String,
      target: String,
      loading: String,
    },
    data: {
      dataSrc: "",
      sources: !1,
      margin: "50%",
      target: !1,
      loading: "lazy",
    },
    connected() {
      if (this.loading !== "lazy") {
        this.load();
        return;
      }
      _h && Ai(this.$el) && ((this.$el.loading = "lazy"), Ms(this.$el)),
        Nh(this.$el);
    },
    disconnected() {
      this.img && (this.img.onload = ""), delete this.img;
    },
    observe: de({
      target: ({ $el: t, $props: e }) => [t, ..._e(e.target, t)],
      handler(t, e) {
        this.load(), e.disconnect();
      },
      options: ({ margin: t }) => ({ rootMargin: t }),
      filter: ({ loading: t }) => t === "lazy",
    }),
    methods: {
      load() {
        if (this.img) return this.img;
        const t = Ai(this.$el)
          ? this.$el
          : Mh(this.$el, this.dataSrc, this.sources);
        return Ce(t, "loading"), Ms(this.$el, t.currentSrc), (this.img = t);
      },
    },
  };
  function Ms(t, e) {
    if (Ai(t)) {
      const i = E(t);
      (q(i, "picture") ? B(i) : [t]).forEach((n) => Bo(n, n));
    } else e && !m(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${Vi(e)})`), v(t, Ft("load", !1)));
  }
  const Ah = ["data-src", "data-srcset", "sizes"];
  function Bo(t, e) {
    for (const i of Ah) {
      const s = Y(t, i);
      s && p(e, i.replace(/^(data-)+/, ""), s);
    }
  }
  function Mh(t, e, i) {
    const s = new Image();
    return (
      Dh(s, i),
      Bo(t, s),
      (s.onload = () => {
        Ms(t, s.currentSrc);
      }),
      p(s, "src", e),
      s
    );
  }
  function Dh(t, e) {
    if (((e = Bh(e)), e.length)) {
      const i = Lt("<picture>");
      for (const s of e) {
        const n = Lt("<source>");
        p(n, s), H(i, n);
      }
      H(i, t);
    }
  }
  function Bh(t) {
    if (!t) return [];
    if (ut(t, "["))
      try {
        t = JSON.parse(t);
      } catch {
        t = [];
      }
    else t = fe(t);
    return K(t) || (t = [t]), t.filter((e) => !Se(e));
  }
  function Nh(t) {
    Ai(t) &&
      !kt(t, "src") &&
      p(
        t,
        "src",
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'
      );
  }
  function Ai(t) {
    return q(t, "img");
  }
  var zh = {
      mixins: [st, xi],
      props: { fill: String },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill",
      },
      computed: {
        fill: ({ fill: t }, e) => t || c(e, "--uk-leader-fill-content"),
      },
      connected() {
        [this.wrapper] = Qi(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        Me(this.wrapper.childNodes);
      },
      observe: mt(),
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia,
          };
        },
        write({ width: t, fill: e, hide: i }) {
          j(this.wrapper, this.clsHide, i),
            p(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"],
      },
    },
    Fh = {
      install: Hh,
      mixins: [xs],
      data: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose:
          ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
      },
      events: [
        {
          name: "show",
          self: !0,
          handler() {
            I(this.panel, "uk-margin-auto-vertical")
              ? b(this.$el, "uk-flex")
              : c(this.$el, "display", "block"),
              tt(this.$el);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler() {
            c(this.$el, "display", ""), O(this.$el, "uk-flex");
          },
        },
      ],
    };
  function Hh({ modal: t }) {
    (t.dialog = function (i, s) {
      const n = t(
        `<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`,
        { stack: !0, role: "alertdialog", ...s }
      );
      return (
        n.show(),
        $(
          n.$el,
          "hidden",
          async () => {
            await Promise.resolve(), n.$destroy(!0);
          },
          { self: !0 }
        ),
        n
      );
    }),
      (t.alert = function (i, s) {
        return e(
          ({ i18n: n }) =>
            `<div class="uk-modal-body">${
              N(i) ? i : Ht(i)
            }</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${
              n.ok
            }</button> </div>`,
          s
        );
      }),
      (t.confirm = function (i, s) {
        return e(
          ({ i18n: n }) =>
            `<form> <div class="uk-modal-body">${
              N(i) ? i : Ht(i)
            }</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${
              n.cancel
            }</button> <button class="uk-button uk-button-primary" autofocus>${
              n.ok
            }</button> </div> </form>`,
          s,
          () => Promise.reject()
        );
      }),
      (t.prompt = function (i, s, n) {
        const o = e(
            ({ i18n: l }) =>
              `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${
                N(i) ? i : Ht(i)
              }</label> <input class="uk-input" value="${
                s || ""
              }" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${
                l.cancel
              }</button> <button class="uk-button uk-button-primary">${
                l.ok
              }</button> </div> </form>`,
            n,
            () => null,
            () => a.value
          ),
          { $el: r } = o.dialog,
          a = w("input", r);
        return $(r, "show", () => a.select()), o;
      }),
      (t.i18n = { ok: "Ok", cancel: "Cancel" });
    function e(i, s, n = _, o = _) {
      s = {
        bgClose: !1,
        escClose: !0,
        ...s,
        i18n: { ...t.i18n, ...(s == null ? void 0 : s.i18n) },
      };
      const r = t.dialog(i(s), s);
      return pt(
        new Promise((a) => {
          const l = $(r.$el, "hide", () => a(n()));
          $(r.$el, "submit", "form", (h) => {
            h.preventDefault(), a(o(r)), l(), r.hide();
          });
        }),
        { dialog: r }
      );
    }
  }
  var Lh = {
      extends: ko,
      data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
    },
    Wh = {
      extends: Po,
      props: { dropbarTransparentMode: Boolean },
      data: {
        clsDrop: "uk-navbar-dropdown",
        selNavItem:
          ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle",
        selTransparentTarget: '[class*="uk-section"]',
        dropbarTransparentMode: !1,
      },
      computed: {
        navbarContainer: (t, e) => e.closest(".uk-navbar-container"),
        dropbarOffset: ({ dropbarTransparentMode: t }, e) =>
          t === "behind" ? e.offsetHeight : 0,
      },
      watch: {
        items() {
          const t = I(this.$el, "uk-navbar-justify");
          for (const e of z(
            ".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right",
            this.$el
          ))
            c(
              e,
              "flexGrow",
              t
                ? z(
                    ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
                    e
                  ).length
                : ""
            );
        },
      },
      disconnect() {
        var t;
        (t = this._colorListener) == null || t.call(this);
      },
      observe: [
        ps({
          target: ({ navbarContainer: t }) => t,
          handler: "registerColorListener",
          options: {
            attributes: !0,
            attributeFilter: ["class"],
            attributeOldValue: !0,
          },
        }),
        de({
          handler(t) {
            (this._isIntersecting = t[0].isIntersecting),
              this.registerColorListener();
          },
          args: { intersecting: !1 },
        }),
      ],
      events: [
        {
          name: "show",
          el() {
            return this.dropContainer;
          },
          handler({ target: t }) {
            const e = this.getTransparentMode(t);
            if (!e || this._mode) return;
            const i = () =>
              (this._mode = Rh(this.navbarContainer, "uk-light", "uk-dark"));
            if (e === "behind") {
              const s = No(this.$el);
              s && (i(), b(this.navbarContainer, `uk-${s}`));
            }
            e === "remove" &&
              (i(), O(this.navbarContainer, "uk-navbar-transparent"));
          },
        },
        {
          name: "hide",
          el() {
            return this.dropContainer;
          },
          async handler({ target: t }) {
            const e = this.getTransparentMode(t);
            if (!(!e || !this._mode) && (await jh(), !this.getActive())) {
              if (e === "behind") {
                const i = No(this.$el);
                i && O(this.navbarContainer, `uk-${i}`);
              }
              b(this.navbarContainer, this._mode),
                e === "remove" &&
                  b(this.navbarContainer, "uk-navbar-transparent"),
                (this._mode = null);
            }
          },
        },
      ],
      methods: {
        getTransparentMode(t) {
          if (!this.navbarContainer) return;
          if (this.dropbar && this.isDropbarDrop(t))
            return this.dropbarTransparentMode;
          const e = this.getDropdown(t);
          if (!(!e || !I(t, "uk-dropbar")))
            return e.inset ? "behind" : "remove";
        },
        registerColorListener() {
          const t =
            this._isIntersecting &&
            I(this.navbarContainer, "uk-navbar-transparent") &&
            !Uh(this.navbarContainer) &&
            !z(".uk-drop", this.dropContainer)
              .map(this.getDropdown)
              .some(
                (e) =>
                  e.isToggled() &&
                  (e.inset || this.getTransparentMode(e.$el) === "behind")
              );
          if (this._colorListener) {
            t || (this._colorListener(), (this._colorListener = null));
            return;
          }
          t &&
            (this._colorListener = qh(this.navbarContainer, () => {
              const { left: e, top: i, height: s } = S(this.navbarContainer),
                n = { x: e, y: Math.max(0, i) + s / 2 },
                o = z(this.selTransparentTarget).find((a) => Ie(n, S(a))),
                r = c(o, "--uk-navbar-color");
              r && ii(this.navbarContainer, "uk-light,uk-dark", `uk-${r}`);
            }));
        },
      },
    };
  function Rh(t, ...e) {
    for (const i of e) if (I(t, i)) return O(t, i), i;
  }
  async function jh() {
    return new Promise((t) => setTimeout(t));
  }
  function No(t) {
    return c(t, "--uk-navbar-dropbar-behind-color");
  }
  function qh(t, e) {
    const i = bt(t, !0),
      s = i === document.documentElement ? document : i,
      n = $(s, "scroll", e, { passive: !0 }),
      o = ze([t, i], e);
    return () => {
      n(), o.disconnect();
    };
  }
  function Uh(t) {
    do if (c(t, "mixBlendMode") !== "normal") return !0;
    while ((t = E(t)));
  }
  var Vh = {
    mixins: [xs],
    args: "mode",
    props: { mode: String, flip: Boolean, overlay: Boolean, swiping: Boolean },
    data: {
      mode: "slide",
      flip: !1,
      overlay: !1,
      clsPage: "uk-offcanvas-page",
      clsContainer: "uk-offcanvas-container",
      selPanel: ".uk-offcanvas-bar",
      clsFlip: "uk-offcanvas-flip",
      clsContainerAnimation: "uk-offcanvas-container-animation",
      clsSidebarAnimation: "uk-offcanvas-bar-animation",
      clsMode: "uk-offcanvas",
      clsOverlay: "uk-offcanvas-overlay",
      selClose: ".uk-offcanvas-close",
      container: !1,
      swiping: !0,
    },
    computed: {
      clsFlip: ({ flip: t, clsFlip: e }) => (t ? e : ""),
      clsOverlay: ({ overlay: t, clsOverlay: e }) => (t ? e : ""),
      clsMode: ({ mode: t, clsMode: e }) => `${e}-${t}`,
      clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e }) =>
        t === "none" || t === "reveal" ? "" : e,
      clsContainerAnimation: ({ mode: t, clsContainerAnimation: e }) =>
        t !== "push" && t !== "reveal" ? "" : e,
      transitionElement({ mode: t }) {
        return t === "reveal" ? E(this.panel) : this.panel;
      },
    },
    observe: $n({ filter: ({ swiping: t }) => t }),
    update: {
      read() {
        this.isToggled() && !W(this.$el) && this.hide();
      },
      events: ["resize"],
    },
    events: [
      {
        name: "touchmove",
        self: !0,
        passive: !1,
        filter() {
          return this.overlay;
        },
        handler(t) {
          t.cancelable && t.preventDefault();
        },
      },
      {
        name: "show",
        self: !0,
        handler() {
          this.mode === "reveal" &&
            !I(E(this.panel), this.clsMode) &&
            (hi(this.panel, "<div>"), b(E(this.panel), this.clsMode));
          const { body: t, scrollingElement: e } = document;
          b(t, this.clsContainer, this.clsFlip),
            c(t, "touch-action", "pan-y pinch-zoom"),
            c(this.$el, "display", "block"),
            c(this.panel, "maxWidth", e.clientWidth),
            b(this.$el, this.clsOverlay),
            b(
              this.panel,
              this.clsSidebarAnimation,
              this.mode === "reveal" ? "" : this.clsMode
            ),
            tt(t),
            b(t, this.clsContainerAnimation),
            this.clsContainerAnimation && Gh();
        },
      },
      {
        name: "hide",
        self: !0,
        handler() {
          O(document.body, this.clsContainerAnimation),
            c(document.body, "touch-action", "");
        },
      },
      {
        name: "hidden",
        self: !0,
        handler() {
          this.clsContainerAnimation && Yh(),
            this.mode === "reveal" && Me(this.panel),
            O(this.panel, this.clsSidebarAnimation, this.clsMode),
            O(this.$el, this.clsOverlay),
            c(this.$el, "display", ""),
            c(this.panel, "maxWidth", ""),
            O(document.body, this.clsContainer, this.clsFlip);
        },
      },
      {
        name: "swipeLeft swipeRight",
        handler(t) {
          this.isToggled() && Qt(t.type, "Left") ^ this.flip && this.hide();
        },
      },
    ],
  };
  function Gh() {
    zo().content += ",user-scalable=0";
  }
  function Yh() {
    const t = zo();
    t.content = t.content.replace(/,user-scalable=0$/, "");
  }
  function zo() {
    return (
      w('meta[name="viewport"]', document.head) ||
      H(document.head, '<meta name="viewport">')
    );
  }
  var Xh = {
      mixins: [st],
      props: { selContainer: String, selContent: String, minHeight: Number },
      data: {
        selContainer: ".uk-modal",
        selContent: ".uk-modal-dialog",
        minHeight: 150,
      },
      computed: {
        container: ({ selContainer: t }, e) => e.closest(t),
        content: ({ selContent: t }, e) => e.closest(t),
      },
      observe: mt({ target: ({ container: t, content: e }) => [t, e] }),
      update: {
        read() {
          return !this.content || !this.container || !W(this.$el)
            ? !1
            : {
                max: Math.max(
                  this.minHeight,
                  tt(this.container) - (x(this.content).height - tt(this.$el))
                ),
              };
        },
        write({ max: t }) {
          c(this.$el, { minHeight: this.minHeight, maxHeight: t });
        },
        events: ["resize"],
      },
    },
    Jh = {
      props: ["width", "height"],
      connected() {
        b(this.$el, "uk-responsive-width");
      },
      observe: mt({ target: ({ $el: t }) => [t, E(t)] }),
      update: {
        read() {
          return W(this.$el) && this.width && this.height
            ? { width: De(E(this.$el)), height: this.height }
            : !1;
        },
        write(t) {
          tt(
            this.$el,
            ei.contain({ height: this.height, width: this.width }, t).height
          );
        },
        events: ["resize"],
      },
    },
    Kh = {
      props: { offset: Number },
      data: { offset: 0 },
      connected() {
        Zh(this);
      },
      disconnected() {
        Qh(this);
      },
      methods: {
        async scrollTo(t) {
          (t = (t && w(t)) || document.body),
            v(this.$el, "beforescroll", [this, t]) &&
              (await hn(t, { offset: this.offset }),
              v(this.$el, "scrolled", [this, t]));
        },
      },
    };
  const Je = new Set();
  function Zh(t) {
    Je.size || $(document, "click", Fo), Je.add(t);
  }
  function Qh(t) {
    Je.delete(t), Je.size || zt(document, "click", Fo);
  }
  function Fo(t) {
    if (!t.defaultPrevented)
      for (const e of Je)
        e.$el.contains(t.target) &&
          oe(e.$el) &&
          (t.preventDefault(),
          window.location.href !== e.$el.href &&
            window.history.pushState({}, "", e.$el.href),
          e.scrollTo(qi(e.$el)));
  }
  var tc = {
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        margin: String,
        repeat: Boolean,
        delay: Number,
      },
      data: () => ({
        cls: "",
        target: !1,
        hidden: !0,
        margin: "-1px",
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview",
      }),
      computed: { elements: ({ target: t }, e) => (t ? z(t, e) : [e]) },
      watch: {
        elements(t) {
          this.hidden && c(Pe(t, `:not(.${this.inViewClass})`), "opacity", 0);
        },
      },
      connected() {
        this.elementData = new Map();
      },
      disconnected() {
        for (const [t, e] of this.elementData.entries())
          O(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
        delete this.elementData;
      },
      observe: de({
        target: ({ elements: t }) => t,
        handler(t) {
          const e = this.elementData;
          for (const { target: i, isIntersecting: s } of t) {
            e.has(i) ||
              e.set(i, { cls: Y(i, "uk-scrollspy-class") || this.cls });
            const n = e.get(i);
            (!this.repeat && n.show) || (n.show = s);
          }
          this.$emit();
        },
        options: ({ margin: t }) => ({ rootMargin: t }),
        args: { intersecting: !1 },
      }),
      update: [
        {
          write(t) {
            for (const [e, i] of this.elementData.entries())
              i.show && !i.inview && !i.queued
                ? ((i.queued = !0),
                  (t.promise = (t.promise || Promise.resolve())
                    .then(() => new Promise((s) => setTimeout(s, this.delay)))
                    .then(() => {
                      this.toggle(e, !0),
                        setTimeout(() => {
                          (i.queued = !1), this.$emit();
                        }, 300);
                    })))
                : !i.show &&
                  i.inview &&
                  !i.queued &&
                  this.repeat &&
                  this.toggle(e, !1);
          },
        },
      ],
      methods: {
        toggle(t, e) {
          var i;
          const s = this.elementData.get(t);
          if (s) {
            if (
              ((i = s.off) == null || i.call(s),
              c(t, "opacity", !e && this.hidden ? 0 : ""),
              j(t, this.inViewClass, e),
              j(t, s.cls),
              /\buk-animation-/.test(s.cls))
            ) {
              const n = () => Wi(t, "uk-animation-[\\w-]+");
              e ? (s.off = R(t, "animationcancel animationend", n)) : n();
            }
            v(t, e ? "inview" : "outview"), (s.inview = e), this.$update(t);
          }
        },
      },
    },
    ec = {
      props: {
        cls: String,
        closest: Boolean,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number,
      },
      data: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0,
      },
      computed: {
        links: (t, e) => z('a[href*="#"]', e).filter((i) => i.hash && oe(i)),
        elements({ closest: t }) {
          return this.links.map((e) => e.closest(t || "*"));
        },
      },
      watch: {
        links(t) {
          this.scroll && this.$create("scroll", t, { offset: this.offset });
        },
      },
      observe: [de(), mi()],
      update: [
        {
          read() {
            const t = this.links.map(qi).filter(Boolean),
              { length: e } = t;
            if (!e || !W(this.$el)) return !1;
            const i = bt(t, !0),
              { scrollTop: s, scrollHeight: n } = i,
              o = lt(i),
              r = n - o.height;
            let a = !1;
            if (s === r) a = e - 1;
            else {
              for (let l = 0; l < t.length; l++) {
                const h = ls(t[l]),
                  u = this.offset + (h ? S(h).height : 0);
                if (S(t[l]).top - o.top - u > 0) break;
                a = +l;
              }
              a === !1 && this.overflow && (a = 0);
            }
            return { active: a };
          },
          write({ active: t }) {
            const e = t !== !1 && !I(this.elements[t], this.cls);
            this.links.forEach((i) => i.blur());
            for (let i = 0; i < this.elements.length; i++)
              j(this.elements[i], this.cls, +i === t);
            e && v(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"],
        },
      ],
    },
    ic = {
      mixins: [st, xi],
      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number,
      },
      data: {
        position: "top",
        top: !1,
        bottom: !1,
        start: !1,
        end: !1,
        offset: 0,
        overflowFlip: !1,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        showOnUp: !1,
        targetOffset: !1,
      },
      computed: { selTarget: ({ selTarget: t }, e) => (t && w(t, e)) || e },
      connected() {
        (this.start = Ho(this.start || this.top)),
          (this.end = Ho(this.end || this.bottom)),
          (this.placeholder =
            w("+ .uk-sticky-placeholder", this.$el) ||
            w('<div class="uk-sticky-placeholder"></div>')),
          (this.isFixed = !1),
          this.setActive(!1);
      },
      beforeDisconnect() {
        this.isFixed && (this.hide(), O(this.selTarget, this.clsInactive)),
          Lo(this.$el),
          at(this.placeholder),
          (this.placeholder = null);
      },
      observe: [
        gs(),
        mi({ target: () => document.scrollingElement }),
        mt({ target: ({ $el: t }) => [t, document.scrollingElement] }),
      ],
      events: [
        {
          name: "load hashchange popstate",
          el() {
            return window;
          },
          filter() {
            return this.targetOffset !== !1;
          },
          handler() {
            const { scrollingElement: t } = document;
            !location.hash ||
              t.scrollTop === 0 ||
              setTimeout(() => {
                const e = S(w(location.hash)),
                  i = S(this.$el);
                this.isFixed &&
                  Hi(e, i) &&
                  (t.scrollTop =
                    e.top -
                    i.height -
                    Q(this.targetOffset, "height", this.placeholder) -
                    Q(this.offset, "height", this.placeholder));
              });
          },
        },
        {
          name: "transitionstart",
          handler() {
            this.transitionInProgress = R(
              this.$el,
              "transitionend transitioncancel",
              () => (this.transitionInProgress = null)
            );
          },
        },
      ],
      update: [
        {
          read({ height: t, width: e, margin: i, sticky: s }) {
            if (
              ((this.inactive = !this.matchMedia || !W(this.$el)),
              this.inactive)
            )
              return;
            const n = this.isFixed && !this.transitionInProgress;
            n && (Wo(this.$el), this.hide()),
              this.active ||
                (({ height: t, width: e } = S(this.$el)),
                (i = c(this.$el, "margin"))),
              n && this.show();
            const o = Q("100vh", "height"),
              r = tt(window),
              a = Math.max(0, document.scrollingElement.scrollHeight - o);
            let l = this.position;
            this.overflowFlip && t > o && (l = l === "top" ? "bottom" : "top");
            const h = this.isFixed ? this.placeholder : this.$el;
            let u = Q(this.offset, "height", s ? this.$el : h);
            l === "bottom" && (t < r || this.overflowFlip) && (u += r - t);
            const f = this.overflowFlip ? 0 : Math.max(0, t + u - o),
              d = S(h).top,
              g = S(this.$el).height,
              y = (this.start === !1 ? d : Ds(this.start, this.$el, d)) - u,
              C =
                this.end === !1
                  ? a
                  : Math.min(a, Ds(this.end, this.$el, d + t, !0) - g - u + f);
            return (
              (s =
                a &&
                !this.showOnUp &&
                y + u === d &&
                C === Math.min(a, Ds("!*", this.$el, 0, !0) - g - u + f) &&
                c(E(this.$el), "overflowY") === "visible"),
              {
                start: y,
                end: C,
                offset: u,
                overflow: f,
                topOffset: d,
                height: t,
                elHeight: g,
                width: e,
                margin: i,
                top: Rt(h)[0],
                sticky: s,
              }
            );
          },
          write({ height: t, width: e, margin: i, offset: s, sticky: n }) {
            if (
              ((this.inactive || n || !this.isFixed) && Lo(this.$el),
              this.inactive)
            )
              return;
            n && ((t = e = i = 0), c(this.$el, { position: "sticky", top: s }));
            const { placeholder: o } = this;
            c(o, { height: t, width: e, margin: i }),
              document.contains(o) || (o.hidden = !0),
              (n ? ri : ai)(this.$el, o);
          },
          events: ["resize"],
        },
        {
          read({
            scroll: t = 0,
            dir: e = "down",
            overflow: i,
            overflowScroll: s = 0,
            start: n,
            end: o,
          }) {
            const r = document.scrollingElement.scrollTop;
            return {
              dir: t <= r ? "down" : "up",
              prevDir: e,
              scroll: r,
              prevScroll: t,
              offsetParentTop: S(
                (this.isFixed ? this.placeholder : this.$el).offsetParent
              ).top,
              overflowScroll: Z(s + Z(r, n, o) - Z(t, n, o), 0, i),
            };
          },
          write(t, e) {
            const i = e.has("scroll"),
              {
                initTimestamp: s = 0,
                dir: n,
                prevDir: o,
                scroll: r,
                prevScroll: a = 0,
                top: l,
                start: h,
                topOffset: u,
                height: f,
              } = t;
            if (
              r < 0 ||
              (r === a && i) ||
              (this.showOnUp && !i && !this.isFixed)
            )
              return;
            const d = Date.now();
            if (
              ((d - s > 300 || n !== o) &&
                ((t.initScroll = r), (t.initTimestamp = d)),
              !(
                this.showOnUp &&
                !this.isFixed &&
                Math.abs(t.initScroll - r) <= 30 &&
                Math.abs(a - r) <= 10
              ))
            )
              if (
                this.inactive ||
                r < h ||
                (this.showOnUp &&
                  (r <= h ||
                    (n === "down" && i) ||
                    (n === "up" && !this.isFixed && r <= u + f)))
              ) {
                if (!this.isFixed) {
                  _t.inProgress(this.$el) &&
                    l > r &&
                    (_t.cancel(this.$el), this.hide());
                  return;
                }
                if (this.animation && r > u) {
                  if (I(this.$el, "uk-animation-leave")) return;
                  _t.out(this.$el, this.animation).then(() => this.hide(), _);
                } else this.hide();
              } else
                this.isFixed
                  ? this.update()
                  : this.animation && r > u
                  ? (this.show(), _t.in(this.$el, this.animation).catch(_))
                  : (Wo(this.selTarget), this.show());
          },
          events: ["resize", "resizeViewport", "scroll"],
        },
      ],
      methods: {
        show() {
          (this.isFixed = !0), this.update(), (this.placeholder.hidden = !1);
        },
        hide() {
          const { offset: t, sticky: e } = this._data;
          this.setActive(!1),
            O(this.$el, this.clsFixed, this.clsBelow),
            e
              ? c(this.$el, "top", t)
              : c(this.$el, {
                  position: "",
                  top: "",
                  width: "",
                  marginTop: "",
                }),
            (this.placeholder.hidden = !0),
            (this.isFixed = !1);
        },
        update() {
          let {
            width: t,
            scroll: e = 0,
            overflow: i,
            overflowScroll: s = 0,
            start: n,
            end: o,
            offset: r,
            topOffset: a,
            height: l,
            elHeight: h,
            offsetParentTop: u,
            sticky: f,
          } = this._data;
          const d = n !== 0 || e > n;
          if (!f) {
            let g = "fixed";
            e > o && ((r += o - u + s - i), (g = "absolute")),
              c(this.$el, { position: g, width: t, marginTop: 0 }, "important");
          }
          c(this.$el, "top", r - s),
            this.setActive(d),
            j(this.$el, this.clsBelow, e > a + (f ? Math.min(l, h) : l)),
            b(this.$el, this.clsFixed);
        },
        setActive(t) {
          const e = this.active;
          (this.active = t),
            t
              ? (ii(this.selTarget, this.clsInactive, this.clsActive),
                e !== t && v(this.$el, "active"))
              : (ii(this.selTarget, this.clsActive, this.clsInactive),
                e !== t && v(this.$el, "inactive"));
        },
      },
    };
  function Ds(t, e, i, s) {
    if (!t) return 0;
    if (vt(t) || (N(t) && t.match(/^-?\d/))) return i + Q(t, "height", e, !0);
    {
      const n = t === !0 ? E(e) : it(t, e);
      return (
        S(n).bottom -
        (s && n != null && n.contains(e) ? k(c(n, "paddingBottom")) : 0)
      );
    }
  }
  function Ho(t) {
    return t === "true" ? !0 : t === "false" ? !1 : t;
  }
  function Lo(t) {
    c(t, { position: "", top: "", marginTop: "", width: "" });
  }
  function Wo(t) {
    b(t, "uk-transition-disable"),
      requestAnimationFrame(() => O(t, "uk-transition-disable"));
  }
  var sc = {
    mixins: [Ao],
    args: "src",
    props: {
      src: String,
      icon: String,
      attributes: "list",
      strokeAnimation: Boolean,
    },
    data: { strokeAnimation: !1 },
    observe: [
      ps({
        async handler() {
          const t = await this.svg;
          t && Ro.call(this, t);
        },
        options: { attributes: !0, attributeFilter: ["id", "class", "style"] },
      }),
    ],
    async connected() {
      m(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
      const t = await this.svg;
      t && (Ro.call(this, t), this.strokeAnimation && ac(t));
    },
    methods: {
      async getSvg() {
        return q(this.$el, "img") &&
          !this.$el.complete &&
          this.$el.loading === "lazy"
          ? new Promise((t) => R(this.$el, "load", () => t(this.getSvg())))
          : oc(await nc(this.src), this.icon) ||
              Promise.reject("SVG not found.");
      },
    },
  };
  function Ro(t) {
    const { $el: e } = this;
    b(t, p(e, "class"), "uk-svg");
    for (let i = 0; i < e.style.length; i++) {
      const s = e.style[i];
      c(t, s, c(e, s));
    }
    for (const i in this.attributes) {
      const [s, n] = this.attributes[i].split(":", 2);
      p(t, s, n);
    }
    this.$el.id || Ce(t, "id");
  }
  const nc = rt(async (t) =>
    t
      ? ut(t, "data:")
        ? decodeURIComponent(t.split(",")[1])
        : (await fetch(t)).text()
      : Promise.reject()
  );
  function oc(t, e) {
    return (
      e && m(t, "<symbol") && (t = rc(t)[e] || t),
      (t = w(t.substr(t.indexOf("<svg")))),
      (t == null ? void 0 : t.hasChildNodes()) && t
    );
  }
  const jo = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
    rc = rt(function (t) {
      const e = {};
      jo.lastIndex = 0;
      let i;
      for (; (i = jo.exec(t)); ) e[i[3]] = `<svg ${i[1]}svg>`;
      return e;
    });
  function ac(t) {
    const e = Zn(t);
    e && c(t, "--uk-animation-stroke", e);
  }
  const Bs = ".uk-disabled *, .uk-disabled, [disabled]";
  var qo = {
      mixins: [Ut],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number,
        followFocus: Boolean,
        swiping: Boolean,
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        itemNav: !1,
        active: 0,
        cls: "uk-active",
        attrItem: "uk-switcher-item",
        selVertical: ".uk-nav",
        followFocus: !1,
        swiping: !0,
      },
      computed: {
        connects: ({ connect: t }, e) => _e(t, e),
        connectChildren() {
          return this.connects.map((t) => B(t)).flat();
        },
        toggles: ({ toggle: t }, e) => z(t, e),
        children(t, e) {
          return B(e).filter((i) => this.toggles.some((s) => i.contains(s)));
        },
      },
      watch: {
        connects(t) {
          this.swiping && c(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
        },
        connectChildren() {
          let t = Math.max(0, this.index());
          for (const e of this.connects)
            B(e).forEach((i, s) => j(i, this.cls, s === t));
          this.$emit();
        },
        toggles(t) {
          this.$emit();
          const e = this.index();
          this.show(~e ? e : t[this.active] || t[0]);
        },
      },
      connected() {
        p(this.$el, "role", "tablist");
      },
      observe: [
        Le({ targets: ({ connectChildren: t }) => t }),
        $n({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t }),
      ],
      events: [
        {
          name: "click keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            !A(t.current, Bs) &&
              (t.type === "click" || t.keyCode === P.SPACE) &&
              (t.preventDefault(), this.show(t.current));
          },
        },
        {
          name: "keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            const { current: e, keyCode: i } = t,
              s = A(this.$el, this.selVertical);
            let n =
              i === P.HOME
                ? 0
                : i === P.END
                ? "last"
                : (i === P.LEFT && !s) || (i === P.UP && s)
                ? "previous"
                : (i === P.RIGHT && !s) || (i === P.DOWN && s)
                ? "next"
                : -1;
            if (~n) {
              t.preventDefault();
              const o = this.toggles.filter((a) => !A(a, Bs)),
                r = o[ot(n, o, o.indexOf(e))];
              r.focus(), this.followFocus && this.show(r);
            }
          },
        },
        {
          name: "click",
          el() {
            return this.connects.concat(
              this.itemNav ? _e(this.itemNav, this.$el) : []
            );
          },
          delegate() {
            return `[${this.attrItem}],[data-${this.attrItem}]`;
          },
          handler(t) {
            t.target.closest("a,button") &&
              (t.preventDefault(), this.show(Y(t.current, this.attrItem)));
          },
        },
        {
          name: "swipeRight swipeLeft",
          filter() {
            return this.swiping;
          },
          el() {
            return this.connects;
          },
          handler({ type: t }) {
            this.show(Qt(t, "Left") ? "next" : "previous");
          },
        },
      ],
      update() {
        var t;
        p(this.connects, "role", "presentation"),
          p(B(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e],
            s = (t = this.connects[0]) == null ? void 0 : t.children[e];
          p(i, "role", "tab"),
            s &&
              ((i.id = Yt(this, i)),
              (s.id = Yt(this, s)),
              p(i, "aria-controls", s.id),
              p(s, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        p(
          this.$el,
          "aria-orientation",
          A(this.$el, this.selVertical) ? "vertical" : null
        );
      },
      methods: {
        index() {
          return $t(this.children, (t) => I(t, this.cls));
        },
        show(t) {
          const e = this.toggles.filter((r) => !A(r, Bs)),
            i = this.index(),
            s = ot(!Qe(t) || m(e, t) ? t : 0, e, ot(this.toggles[i], e)),
            n = ot(e[s], this.toggles);
          this.children.forEach((r, a) => {
            j(r, this.cls, n === a),
              p(this.toggles[a], {
                "aria-selected": n === a,
                tabindex: n === a ? null : -1,
              });
          });
          const o = i >= 0 && i !== s;
          this.connects.forEach(async ({ children: r }) => {
            const a = Tt(r).filter((l, h) => h !== n && I(l, this.cls));
            await this.toggleElement(a, !1, o),
              await this.toggleElement(r[n], !0, o);
          });
        },
      },
    },
    lc = {
      mixins: [st],
      extends: qo,
      props: { media: Boolean },
      data: {
        media: 960,
        attrItem: "uk-tab-item",
        selVertical: ".uk-tab-left,.uk-tab-right",
      },
      connected() {
        const t = I(this.$el, "uk-tab-left")
          ? "uk-tab-left"
          : I(this.$el, "uk-tab-right")
          ? "uk-tab-right"
          : !1;
        t &&
          this.$create("toggle", this.$el, {
            cls: t,
            mode: "media",
            media: this.media,
          });
      },
    };
  const hc = 32;
  var cc = {
      mixins: [xi, Ut],
      args: "target",
      props: { href: String, target: null, mode: "list", queued: Boolean },
      data: { href: !1, target: !1, mode: "click", queued: !0 },
      computed: {
        target({ target: t }, e) {
          return (t = _e(t || e.hash, e)), t.length ? t : [e];
        },
      },
      connected() {
        m(this.mode, "media") ||
          (si(this.$el) || p(this.$el, "tabindex", "0"),
          !this.cls && q(this.$el, "a") && p(this.$el, "role", "button"));
      },
      observe: Le({ target: ({ target: t }) => t }),
      events: [
        {
          name: gt,
          filter() {
            return m(this.mode, "hover");
          },
          handler(t) {
            (this._preventClick = null),
              !(!St(t) || ee(this._showState) || this.$el.disabled) &&
                (v(this.$el, "focus"),
                R(
                  document,
                  gt,
                  () => v(this.$el, "blur"),
                  !0,
                  (e) => !this.$el.contains(e.target)
                ),
                m(this.mode, "click") && (this._preventClick = !0));
          },
        },
        {
          name: `mouseenter mouseleave ${ce} ${Ne} focus blur`,
          filter() {
            return m(this.mode, "hover");
          },
          handler(t) {
            if (St(t) || this.$el.disabled) return;
            const e = m(["mouseenter", ce, "focus"], t.type),
              i = this.isToggled(this.target);
            if (
              !e &&
              (!ee(this._showState) ||
                (t.type !== "blur" && A(this.$el, ":focus")) ||
                (t.type === "blur" && A(this.$el, ":hover")))
            ) {
              i === this._showState && (this._showState = null);
              return;
            }
            (e && ee(this._showState) && i !== this._showState) ||
              ((this._showState = e ? i : null),
              this.toggle(`toggle${e ? "show" : "hide"}`));
          },
        },
        {
          name: "keydown",
          filter() {
            return m(this.mode, "click") && !q(this.$el, "input");
          },
          handler(t) {
            t.keyCode === hc && (t.preventDefault(), this.$el.click());
          },
        },
        {
          name: "click",
          filter() {
            return ["click", "hover"].some((t) => m(this.mode, t));
          },
          handler(t) {
            let e;
            (this._preventClick ||
              t.target.closest('a[href="#"], a[href=""]') ||
              ((e = t.target.closest("a[href]")) &&
                (!this.isToggled(this.target) ||
                  (e.hash && A(this.target, e.hash))))) &&
              t.preventDefault(),
              !this._preventClick && m(this.mode, "click") && this.toggle();
          },
        },
        {
          name: "mediachange",
          filter() {
            return m(this.mode, "media");
          },
          el() {
            return this.target;
          },
          handler(t, e) {
            e.matches ^ this.isToggled(this.target) && this.toggle();
          },
        },
      ],
      methods: {
        async toggle(t) {
          if (!v(this.target, t || "toggle", [this])) return;
          if (
            (kt(this.$el, "aria-expanded") &&
              p(this.$el, "aria-expanded", !this.isToggled(this.target)),
            !this.queued)
          )
            return this.toggleElement(this.target);
          const e = this.target.filter((s) => I(s, this.clsLeave));
          if (e.length) {
            for (const s of this.target) {
              const n = m(e, s);
              this.toggleElement(s, n, n);
            }
            return;
          }
          const i = this.target.filter(this.isToggled);
          (await this.toggleElement(i, !1)) &&
            (await this.toggleElement(
              this.target.filter((s) => !m(i, s)),
              !0
            ));
        },
      },
    },
    uc = Object.freeze({
      __proto__: null,
      Accordion: ko,
      Alert: Ol,
      Close: yh,
      Cover: Ml,
      Drop: To,
      DropParentIcon: Jt,
      Dropdown: To,
      Dropnav: Po,
      FormCustom: Wl,
      Grid: Rl,
      HeightMatch: Vl,
      HeightViewport: Xl,
      Icon: As,
      Img: Oh,
      Leader: zh,
      Margin: xn,
      Marker: kh,
      Modal: Fh,
      Nav: Lh,
      NavParentIcon: bh,
      Navbar: Wh,
      NavbarParentIcon: Jt,
      NavbarToggleIcon: xh,
      Offcanvas: Vh,
      OverflowAuto: Xh,
      OverlayIcon: Jt,
      PaginationNext: Ih,
      PaginationPrevious: Ch,
      Responsive: Jh,
      Scroll: Kh,
      Scrollspy: tc,
      ScrollspyNav: ec,
      SearchIcon: wh,
      SlidenavNext: Do,
      SlidenavPrevious: Do,
      Spinner: $h,
      Sticky: ic,
      Svg: sc,
      Switcher: qo,
      Tab: lc,
      Toggle: cc,
      Totop: Sh,
      Video: So,
    });
  return (
    Pt(uc, (t, e) => ct.component(e, t)),
    Il(ct),
    Pt(Sl, (t, e) => ct.component(e, t)),
    ct
  );
});
