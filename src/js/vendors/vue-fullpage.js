/*!
 * vue-fullpage.js v0.1.7
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.VueFullpageJs = t())
    : (e.VueFullpageJs = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, n, o) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 4))
    );
  })([
    function (e, t, n) {
      var o;
      /*!
       * fullPage 3.1.0 - Extensions 0.2.2
       * https://github.com/alvarotrigo/fullPage.js
       * @license http://alvarotrigo.com/fullPage/extensions/#license
       *
       * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
       */
      !(function (r, i, l, a, s) {
        void 0 !==
          (o = function () {
            return (r.fullpage = a(i, l)), r.fullpage;
          }.call(t, n, t, e)) && (e.exports = o);
      })(this, window, document, function (e, t) {
        "use strict";
        function n(t, n) {
          e.console && e.console[t] && e.console[t]("fullPage: " + n);
        }
        function o(e, n) {
          return (n = 1 < arguments.length ? n : t)
            ? n.querySelectorAll(e)
            : null;
        }
        function r(e) {
          e = e || {};
          for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o)
              for (var i in o)
                o.hasOwnProperty(i) &&
                  ("[object Object]" !== Object.prototype.toString.call(o[i])
                    ? (e[i] = o[i])
                    : (e[i] = r(e[i], o[i])));
          }
          return e;
        }
        function i(e, t) {
          return (
            null != e &&
            (e.classList
              ? e.classList.contains(t)
              : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
          );
        }
        function l() {
          return "innerHeight" in e
            ? e.innerHeight
            : t.documentElement.offsetHeight;
        }
        function a() {
          return e.innerWidth;
        }
        function s(e, t) {
          var n;
          for (n in ((e = g(e)), t))
            if (t.hasOwnProperty(n) && null !== n)
              for (var o = 0; o < e.length; o++) e[o].style[n] = t[n];
          return e;
        }
        function c(e, t, n) {
          for (var o = e[n]; o && !_(o, t); ) o = o[n];
          return o;
        }
        function u(e, t) {
          return c(e, t, "previousElementSibling");
        }
        function f(e, t) {
          return c(e, t, "nextElementSibling");
        }
        function d(e, t) {
          if (null == t) return e.previousElementSibling;
          var n = d(e);
          return n && _(n, t) ? n : null;
        }
        function v(e, t) {
          if (null == t) return e.nextElementSibling;
          var n = v(e);
          return n && _(n, t) ? n : null;
        }
        function p(e) {
          return e[e.length - 1];
        }
        function h(e, t) {
          e = b(e) ? e[0] : e;
          for (
            var n = null != t ? o(t, e.parentNode) : e.parentNode.childNodes,
              r = 0,
              i = 0;
            i < n.length;
            i++
          ) {
            if (n[i] == e) return r;
            1 == n[i].nodeType && r++;
          }
          return -1;
        }
        function g(e) {
          return b(e) ? e : [e];
        }
        function m(e) {
          e = g(e);
          for (var t = 0; t < e.length; t++) e[t].style.display = "none";
          return e;
        }
        function S(e) {
          e = g(e);
          for (var t = 0; t < e.length; t++) e[t].style.display = "block";
          return e;
        }
        function b(e) {
          return (
            "[object Array]" === Object.prototype.toString.call(e) ||
            "[object NodeList]" === Object.prototype.toString.call(e)
          );
        }
        function y(e, t) {
          e = g(e);
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : (o.className += " " + t);
          }
          return e;
        }
        function w(e, t) {
          e = g(e);
          for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.classList
                ? i.classList.remove(t)
                : (i.className = i.className.replace(
                    new RegExp(
                      "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                      "gi"
                    ),
                    " "
                  ));
            }
          }
          return e;
        }
        function E(e, t) {
          t.appendChild(e);
        }
        function x(e, n, o) {
          var r;
          n = n || t.createElement("div");
          for (var i = 0; i < e.length; i++) {
            var l = e[i];
            ((o && !i) || !o) &&
              ((r = n.cloneNode(!0)), l.parentNode.insertBefore(r, l)),
              r.appendChild(l);
          }
          return e;
        }
        function A(e, t) {
          x(e, t, !0);
        }
        function L(e, t) {
          for (
            "string" == typeof t && (t = B(t)), e.appendChild(t);
            e.firstChild !== t;

          )
            t.appendChild(e.firstChild);
        }
        function M(e) {
          for (var n = t.createDocumentFragment(); e.firstChild; )
            n.appendChild(e.firstChild);
          e.parentNode.replaceChild(n, e);
        }
        function T(e, t) {
          return e && 1 === e.nodeType
            ? _(e, t)
              ? e
              : T(e.parentNode, t)
            : null;
        }
        function O(e, t) {
          k(e, e.nextSibling, t);
        }
        function C(e, t) {
          k(e, e, t);
        }
        function k(e, t, n) {
          b(n) || ("string" == typeof n && (n = B(n)), (n = [n]));
          for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t);
        }
        function R() {
          var n = t.documentElement;
          return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0);
        }
        function H(e) {
          return Array.prototype.filter.call(
            e.parentNode.children,
            function (t) {
              return t !== e;
            }
          );
        }
        function z(e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function I(e) {
          if ("function" == typeof e) return !0;
          var t = Object.prototype.toString(e);
          return (
            "[object Function]" === t || "[object GeneratorFunction]" === t
          );
        }
        function N(n, o, r) {
          var i;
          (r = void 0 === r ? {} : r),
            "function" == typeof e.CustomEvent
              ? (i = new CustomEvent(o, { detail: r }))
              : (i = t.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !0,
                  !0,
                  r
                ),
            n.dispatchEvent(i);
        }
        function _(e, t) {
          return (
            e.matches ||
            e.matchesSelector ||
            e.msMatchesSelector ||
            e.mozMatchesSelector ||
            e.webkitMatchesSelector ||
            e.oMatchesSelector
          ).call(e, t);
        }
        function j(e, t) {
          if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++)
              e[n].style.display = t ? "block" : "none";
          return e;
        }
        function B(e) {
          var n = t.createElement("div");
          return (n.innerHTML = e.trim()), n.firstChild;
        }
        function P(e) {
          e = g(e);
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n);
          }
        }
        function V(e, t, n) {
          for (var o = e[n], r = []; o; )
            (_(o, t) || null == t) && r.push(o), (o = o[n]);
          return r;
        }
        function Y(e, t) {
          return V(e, t, "nextElementSibling");
        }
        function D(e, t) {
          return V(e, t, "previousElementSibling");
        }
        function W(e, t) {
          e.insertBefore(t, e.firstChild);
        }
        var Z = "fullpage-wrapper",
          X = "." + Z,
          F = "fp-responsive",
          G = "fp-notransition",
          U = "fp-destroyed",
          $ = "fp-enabled",
          Q = "fp-viewing",
          J = "active",
          q = "." + J,
          K = "fp-completely",
          ee = "fp-section",
          te = "." + ee,
          ne = te + q,
          oe = "fp-tableCell",
          re = "." + oe,
          ie = "#fp-nav",
          le = "fp-slide",
          ae = "." + le,
          se = ae + q,
          ce = "fp-slides",
          ue = "." + ce,
          fe = "fp-slidesContainer",
          de = "." + fe,
          ve = "fp-table",
          pe = "fp-slidesNav",
          he = "." + pe,
          ge = he + " a",
          me = ".fp-controlArrow",
          Se = me + ".fp-prev",
          be = me + ".fp-next";
        return (
          e.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = function (t, n) {
              n = n || e;
              for (var o = 0; o < this.length; o++) t.call(n, this[o], o, this);
            }),
          (e.fp_utils = {
            $: o,
            deepExtend: r,
            hasClass: i,
            getWindowHeight: l,
            css: s,
            until: c,
            prevUntil: u,
            nextUntil: f,
            prev: d,
            next: v,
            last: p,
            index: h,
            getList: g,
            hide: m,
            show: S,
            isArrayOrList: b,
            addClass: y,
            removeClass: w,
            appendTo: E,
            wrap: x,
            wrapAll: A,
            wrapInner: L,
            unwrap: M,
            closest: T,
            after: O,
            before: C,
            insertBefore: k,
            getScrollTop: R,
            siblings: H,
            preventDefault: z,
            isFunction: I,
            trigger: N,
            matches: _,
            toggle: j,
            createElementFromHTML: B,
            remove: P,
            filter: function (e, t) {
              Array.prototype.filter.call(e, t);
            },
            untilAll: V,
            nextAll: Y,
            prevAll: D,
            showError: n,
            prependTo: W,
            toggleClass: function (e, t, n) {
              if (e.classList && null == n) e.classList.toggle(t);
              else {
                var o = i(e, t);
                (o && null == n) || !n
                  ? w(e, t)
                  : ((!o && null == n) || n) && y(e, t);
              }
            },
          }),
          function (c, g) {
            function x(e, t) {
              e || rn(0), vn("autoScrolling", e, t);
              var n = o(ne)[0];
              if (g.autoScrolling && !g.scrollBar)
                s(wn, { overflow: "hidden", height: "100%" }),
                  k(lo.recordHistory, "internal"),
                  s(Hn, { "-ms-touch-action": "none", "touch-action": "none" }),
                  null != n && rn(n.offsetTop);
              else if (
                (s(wn, { overflow: "visible", height: "initial" }),
                k(!!g.autoScrolling && lo.recordHistory, "internal"),
                s(Hn, { "-ms-touch-action": "", "touch-action": "" }),
                sn(Hn),
                null != n)
              ) {
                var r = lt(n.offsetTop);
                r.element.scrollTo(0, r.options);
              }
              N(Hn, "setAutoScrolling", e);
            }
            function k(e, t) {
              vn("recordHistory", e, t);
            }
            function V(e, t) {
              "internal" !== t &&
                cn("fadingEffect") &&
                An.fadingEffect.update(e),
                cn("cards") && An.cards.update(e),
                vn("scrollingSpeed", e, t);
            }
            function ye(e, t) {
              vn("fitToSection", e, t);
            }
            function we(n) {
              n
                ? ((function () {
                    var n,
                      o = "";
                    e.addEventListener
                      ? (n = "addEventListener")
                      : ((n = "attachEvent"), (o = "on"));
                    var r =
                        "onwheel" in t.createElement("div")
                          ? "wheel"
                          : void 0 !== t.onmousewheel
                          ? "mousewheel"
                          : "DOMMouseScroll",
                      i = !!to && { passive: !1 };
                    "DOMMouseScroll" == r
                      ? t[n](o + "MozMousePixelScroll", qe, i)
                      : t[n](o + r, qe, i);
                  })(),
                  Hn.addEventListener("mousedown", Tt),
                  Hn.addEventListener("mouseup", Ot))
                : (t.addEventListener
                    ? (t.removeEventListener("mousewheel", qe, !1),
                      t.removeEventListener("wheel", qe, !1),
                      t.removeEventListener("MozMousePixelScroll", qe, !1))
                    : t.detachEvent("onmousewheel", qe),
                  Hn.removeEventListener("mousedown", Tt),
                  Hn.removeEventListener("mouseup", Ot));
            }
            function Ee(e, t) {
              void 0 !== t
                ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                    an(e, t, "m");
                  })
                : an(e, "all", "m"),
                N(Hn, "setAllowScrolling", { value: e, directions: t });
            }
            function xe(e) {
              e
                ? (we(!0),
                  (function () {
                    if (
                      (kn || Rn) &&
                      (!cn("dragAndMove") || "mouseonly" === g.dragAndMove)
                    ) {
                      g.autoScrolling &&
                        (xn.removeEventListener(Jn.touchmove, Ge, {
                          passive: !1,
                        }),
                        xn.addEventListener(Jn.touchmove, Ge, { passive: !1 }));
                      var e = g.touchWrapper;
                      e.removeEventListener(Jn.touchstart, Qe),
                        e.removeEventListener(Jn.touchmove, Ue, {
                          passive: !1,
                        }),
                        e.addEventListener(Jn.touchstart, Qe),
                        e.addEventListener(Jn.touchmove, Ue, { passive: !1 });
                    }
                  })())
                : (we(!1),
                  (function () {
                    if (kn || Rn) {
                      g.autoScrolling &&
                        (xn.removeEventListener(Jn.touchmove, Ue, {
                          passive: !1,
                        }),
                        xn.removeEventListener(Jn.touchmove, Ge, {
                          passive: !1,
                        }));
                      var e = g.touchWrapper;
                      e.removeEventListener(Jn.touchstart, Qe),
                        e.removeEventListener(Jn.touchmove, Ue, {
                          passive: !1,
                        });
                    }
                  })());
            }
            function Ae(e, t) {
              void 0 !== t
                ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                    an(e, t, "k");
                  })
                : (an(e, "all", "k"), (g.keyboardScrolling = e));
            }
            function Le() {
              var e = u(o(ne)[0], te);
              e || (!g.loopTop && !g.continuousVertical) || (e = p(o(te))),
                null != e && nt(e, null, !0);
            }
            function Me() {
              var e = f(o(ne)[0], te);
              e || (!g.loopBottom && !g.continuousVertical) || (e = o(te)[0]),
                null != e && nt(e, null, !1);
            }
            function Te(e, t) {
              V(0, "internal"), Oe(e, t), V(lo.scrollingSpeed, "internal");
            }
            function Oe(e, t) {
              var n = Ut(e);
              void 0 !== t ? $t(e, t) : null != n && nt(n);
            }
            function Ce(e) {
              Ke("right", e);
            }
            function ke(e) {
              Ke("left", e);
            }
            function Re(t) {
              if (!i(Hn, U)) {
                (Nn = !0), (zn = l()), (In = a());
                for (var n = o(te), r = 0; r < n.length; ++r) {
                  var c = n[r],
                    u = o(ue, c)[0],
                    f = o(ae, c);
                  g.verticalCentered && s(o(re, c), { height: Ft(c) + "px" }),
                    s(c, { height: Ve(c) + "px" }),
                    1 < f.length && zt(u, o(se, u)[0]);
                }
                g.scrollOverflow && Vn.createScrollBarForAll();
                var d = h(o(ne)[0], te);
                !d || cn("fadingEffect") || cn("dropEffect") || Te(d + 1),
                  (Nn = !1),
                  I(g.afterResize) &&
                    t &&
                    g.afterResize.call(Hn, e.innerWidth, e.innerHeight),
                  I(g.afterReBuild) && !t && g.afterReBuild.call(Hn),
                  N(Hn, "afterRebuild");
              }
            }
            function He() {
              return i(xn, F);
            }
            function ze(e) {
              var t = He();
              e
                ? t ||
                  (x(!1, "internal"),
                  ye(!1, "internal"),
                  m(o(ie)),
                  y(xn, F),
                  I(g.afterResponsive) && g.afterResponsive.call(Hn, e),
                  un("responsiveSlides", "toSections"),
                  N(Hn, "afterResponsive", e),
                  g.scrollOverflow && Vn.createScrollBarForAll())
                : t &&
                  (x(lo.autoScrolling, "internal"),
                  ye(lo.autoScrolling, "internal"),
                  S(o(ie)),
                  w(xn, F),
                  I(g.afterResponsive) && g.afterResponsive.call(Hn, e),
                  un("responsiveSlides", "toSlides"),
                  N(Hn, "afterResponsive", e));
            }
            function Ie(e) {
              var t = e.target;
              t && T(t, ie + " a")
                ? function (e) {
                    z(e);
                    var t = h(T(this, ie + " li"));
                    nt(o(te)[t]);
                  }.call(t, e)
                : _(t, ".fp-tooltip")
                ? function () {
                    N(d(this), "click");
                  }.call(t)
                : _(t, me)
                ? function () {
                    var e = T(this, te);
                    i(this, "fp-prev")
                      ? Pn.m.left && ke(e)
                      : Pn.m.right && Ce(e);
                  }.call(t, e)
                : _(t, ge) || null != T(t, ge)
                ? function (e) {
                    z(e);
                    var t = o(ue, T(this, te))[0];
                    zt(t, o(ae, t)[h(T(this, "li"))]);
                  }.call(t, e)
                : T(t, g.menu + " [data-menuanchor]") &&
                  function (e) {
                    !o(g.menu)[0] ||
                      (!g.lockAnchors && g.anchors.length) ||
                      (z(e), Oe(this.getAttribute("data-menuanchor")));
                  }.call(t, e);
            }
            function Ne(e, n) {
              (t["fp_" + e] = n), t.addEventListener(e, _e, !0);
            }
            function _e(e) {
              var n = e.type,
                o = !1,
                r = g.scrollOverflow,
                i =
                  "mouseleave" === n
                    ? e.toElement || e.relatedTarget
                    : e.target;
              if (i == t || !i)
                return (
                  xe(!0), void (r && g.scrollOverflowHandler.setIscroll(i, !0))
                );
              "touchend" === n &&
                ((so = !1),
                setTimeout(function () {
                  so = !0;
                }, 800)),
                ("mouseenter" !== n || so) &&
                  (g.normalScrollElements.split(",").forEach(function (e) {
                    if (!o) {
                      var t = _(i, e),
                        n = T(i, e);
                      (t || n) &&
                        (An.shared.isNormalScrollElement ||
                          (xe(!1),
                          r && g.scrollOverflowHandler.setIscroll(i, !1)),
                        (An.shared.isNormalScrollElement = !0),
                        (o = !0));
                    }
                  }),
                  !o &&
                    An.shared.isNormalScrollElement &&
                    (xe(!0),
                    r && g.scrollOverflowHandler.setIscroll(i, !0),
                    (An.shared.isNormalScrollElement = !1)));
            }
            function je() {
              var e = l(),
                t = a();
              (zn === e && In === t) || ((zn = e), (In = t), Re(!0));
            }
            function Be(t) {
              var n = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"],
                o = gt(n[0]),
                r = gt(n[1]),
                i = void 0 !== g[o + r],
                l = "fp_" + t + "Extension";
              (co[t] = i ? g[o + r] : g[t + r]),
                (An[t] = void 0 !== e[l] ? new e[l]() : null),
                An[t] && An[t].c(t);
            }
            function Pe(e, n, r) {
              var i = 100 * r,
                l = 100 / r,
                a = t.createElement("div");
              (a.className = ce), A(n, a);
              var c,
                u,
                f = t.createElement("div");
              (f.className = fe),
                A(n, f),
                s(o(de, e), { width: i + "%" }),
                1 < r &&
                  (g.controlArrows &&
                    ((c = e),
                    (u = [
                      B('<div class="fp-controlArrow fp-prev"></div>'),
                      B('<div class="fp-controlArrow fp-next"></div>'),
                    ]),
                    O(o(ue, c)[0], u),
                    "#fff" !== g.controlArrowColor &&
                      (s(o(be, c), {
                        "border-color":
                          "transparent transparent transparent " +
                          g.controlArrowColor,
                      }),
                      s(o(Se, c), {
                        "border-color":
                          "transparent " +
                          g.controlArrowColor +
                          " transparent transparent",
                      })),
                    g.loopHorizontal || m(o(Se, c))),
                  g.slidesNavigation &&
                    (function (e, t) {
                      E(B('<div class="' + pe + '"><ul></ul></div>'), e);
                      var n = o(he, e)[0];
                      y(n, "fp-" + g.slidesNavPosition);
                      for (var r = 0; r < t; r++)
                        E(
                          B(
                            '<li><a href="#"><span class="fp-sr-only">' +
                              De(r, "Slide", o(ae, e)[r]) +
                              "</span><span></span></a></li>"
                          ),
                          o("ul", n)[0]
                        );
                      s(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }),
                        y(o("a", o("li", n)[0]), J);
                    })(e, r)),
                n.forEach(function (e) {
                  s(e, { width: l + "%" }), g.verticalCentered && Xt(e);
                });
              var d = o(se, e)[0];
              null != d &&
              (0 !== h(o(ne), te) || (0 === h(o(ne), te) && 0 !== h(d)))
                ? (on(d, "internal"), y(d, "fp-initial"))
                : y(n[0], J);
            }
            function Ve(e) {
              return g.offsetSections && An.offsetSections
                ? Math.round(An.offsetSections.getWindowHeight(e))
                : l();
            }
            function Ye(e, t) {
              t || null != o(ne)[0] || y(e, J),
                (On = o(ne)[0]),
                s(e, { height: Ve(e) + "px" }),
                g.paddingTop && s(e, { "padding-top": g.paddingTop }),
                g.paddingBottom && s(e, { "padding-bottom": g.paddingBottom }),
                void 0 !== g.sectionsColor[t] &&
                  s(e, { "background-color": g.sectionsColor[t] }),
                void 0 !== g.anchors[t] &&
                  e.setAttribute("data-anchor", g.anchors[t]);
            }
            function De(e, t, n) {
              var o =
                "Section" === t ? g.anchors[e] : n.getAttribute("data-anchor");
              return g.navigationTooltips[e] || o || t + " " + (e + 1);
            }
            function We() {
              var e,
                t,
                n = o(ne)[0];
              y(n, K),
                ut(n),
                ct(),
                dt(n),
                g.scrollOverflow && g.scrollOverflowHandler.afterLoad(),
                (e = At()),
                (t = Ut(e.section)),
                (e.section && t && (void 0 === t || h(t) !== h(On))) ||
                  !I(g.afterLoad) ||
                  ot("afterLoad", {
                    activeSection: n,
                    element: n,
                    direction: null,
                    anchorLink: n.getAttribute("data-anchor"),
                    sectionIndex: h(n, te),
                  }),
                I(g.afterRender) && ot("afterRender"),
                N(Hn, "afterRender");
            }
            function Ze() {
              var e;
              if (
                (N(Hn, "onScroll"),
                !Nn &&
                  (!g.autoScrolling || g.scrollBar || cn("dragAndMove")) &&
                  !dn())
              ) {
                var t = cn("dragAndMove")
                    ? Math.abs(An.dragAndMove.getCurrentScroll())
                    : R(),
                  n = 0,
                  r = t + l() / 2,
                  a =
                    (cn("dragAndMove")
                      ? An.dragAndMove.getDocumentHeight()
                      : xn.offsetHeight - l()) === t,
                  s = o(te);
                if (a) n = s.length - 1;
                else if (t)
                  for (var c = 0; c < s.length; ++c)
                    s[c].offsetTop <= r && (n = c);
                else n = 0;
                if (!i((e = s[n]), J)) {
                  po = !0;
                  var u,
                    f,
                    d = o(ne)[0],
                    v = h(d, te) + 1,
                    p = Wt(e),
                    m = e.getAttribute("data-anchor"),
                    S = h(e, te) + 1,
                    b = o(se, e)[0],
                    E = {
                      activeSection: d,
                      sectionIndex: S - 1,
                      anchorLink: m,
                      element: e,
                      leavingSection: v,
                      direction: p,
                    };
                  b && ((f = b.getAttribute("data-anchor")), (u = h(b))),
                    jn &&
                      (y(e, J),
                      w(H(e), J),
                      un("parallax", "afterLoad"),
                      I(g.onLeave) && ot("onLeave", E),
                      I(g.afterLoad) && ot("afterLoad", E),
                      cn("resetSliders") &&
                        An.resetSliders.apply({
                          localIsResizing: Nn,
                          leavingSection: v,
                        }),
                      pt(d),
                      ut(e),
                      dt(e),
                      Dt(m, S - 1),
                      g.anchors.length && (Ln = m),
                      Jt(u, f, m)),
                    clearTimeout(Xn),
                    (Xn = setTimeout(function () {
                      po = !1;
                    }, 100));
                }
                g.fitToSection &&
                  (clearTimeout(Fn),
                  (Fn = setTimeout(function () {
                    g.fitToSection && o(ne)[0].offsetHeight <= zn && Xe();
                  }, g.fitToSectionDelay)));
              }
            }
            function Xe() {
              jn && ((Nn = !0), nt(o(ne)[0]), (Nn = !1));
            }
            function Fe(e) {
              if (Pn.m[e]) {
                var t = "down" === e ? Me : Le;
                if (
                  (cn("scrollHorizontally") &&
                    (t = An.scrollHorizontally.getScrollSection(e, t)),
                  g.scrollOverflow)
                ) {
                  var n = g.scrollOverflowHandler.scrollable(o(ne)[0]),
                    r = "down" === e ? "bottom" : "top";
                  if (null != n) {
                    if (!g.scrollOverflowHandler.isScrolled(r, n)) return !0;
                    t();
                  } else t();
                } else t();
              }
            }
            function Ge(e) {
              g.autoScrolling && $e(e) && Pn.m.up && z(e);
            }
            function Ue(t) {
              var n = T(t.target, te) || o(ne)[0];
              if ($e(t)) {
                g.autoScrolling && z(t);
                var r = nn(t);
                (mo = r.y),
                  (So = r.x),
                  o(ue, n).length && Math.abs(go - So) > Math.abs(ho - mo)
                    ? !Cn &&
                      Math.abs(go - So) > (a() / 100) * g.touchSensitivity &&
                      (So < go ? Pn.m.right && Ce(n) : Pn.m.left && ke(n))
                    : g.autoScrolling &&
                      jn &&
                      Math.abs(ho - mo) >
                        (e.innerHeight / 100) * g.touchSensitivity &&
                      (mo < ho ? Fe("down") : ho < mo && Fe("up"));
              }
            }
            function $e(e) {
              return void 0 === e.pointerType || "mouse" != e.pointerType;
            }
            function Qe(e) {
              if ((g.fitToSection && (oo = !1), $e(e))) {
                var t = nn(e);
                (ho = t.y), (go = t.x);
              }
            }
            function Je(e, t) {
              for (
                var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0;
                r < o.length;
                r++
              )
                n += o[r];
              return Math.ceil(n / t);
            }
            function qe(t) {
              var n = new Date().getTime(),
                r = i(o(".fp-completely")[0], "fp-normal-scroll");
              if (!Pn.m.down && !Pn.m.up) return z(t), !1;
              if (g.autoScrolling && !Tn && !r) {
                var l = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
                  a = Math.max(-1, Math.min(1, l)),
                  s = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                  c =
                    Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) ||
                    Math.abs(t.deltaX) < Math.abs(t.deltaY) ||
                    !s;
                149 < Bn.length && Bn.shift(),
                  Bn.push(Math.abs(l)),
                  g.scrollBar && z(t);
                var u = n - bo;
                if (((bo = n), 200 < u && (Bn = []), jn && !fn())) {
                  var f = Je(Bn, 10);
                  Je(Bn, 70) <= f && c && Fe(a < 0 ? "down" : "up");
                }
                return !1;
              }
              g.fitToSection && (oo = !1);
            }
            function Ke(e, t) {
              var n = null == t ? o(ne)[0] : t,
                r = o(ue, n)[0];
              if (!(null == r || fn() || Cn || o(ae, r).length < 2)) {
                var i = o(se, r)[0],
                  l = null;
                if (null == (l = "left" === e ? u(i, ae) : f(i, ae))) {
                  if (!g.loopHorizontal) return;
                  var a = H(i);
                  l = "left" === e ? a[a.length - 1] : a[0];
                }
                (Cn = !An.test.isTesting), zt(r, l, e);
              }
            }
            function et() {
              for (var e = o(se), t = 0; t < e.length; t++)
                on(e[t], "internal");
            }
            function tt(e) {
              var t = e.offsetHeight,
                n = e.offsetTop,
                o = n,
                r =
                  cn("dragAndMove") && An.dragAndMove.isGrabbing
                    ? An.dragAndMove.isScrollingDown()
                    : yo < n,
                i = o - zn + t,
                l = g.bigSectionsDestination;
              return (
                zn < t
                  ? ((r || l) && "bottom" !== l) || (o = i)
                  : (r || (Nn && null == v(e))) && (o = i),
                g.offsetSections &&
                  An.offsetSections &&
                  (o = An.offsetSections.getSectionPosition(r, o, e)),
                (yo = o)
              );
            }
            function nt(t, n, r) {
              if (null != t) {
                var l,
                  a,
                  c = {
                    element: t,
                    callback: n,
                    isMovementUp: r,
                    dtop: tt(t),
                    yMovement: Wt(t),
                    anchorLink: t.getAttribute("data-anchor"),
                    sectionIndex: h(t, te),
                    activeSlide: o(se, t)[0],
                    activeSection: o(ne)[0],
                    leavingSection: h(o(ne), te) + 1,
                    localIsResizing: Nn,
                  };
                if (
                  !(
                    (c.activeSection == t && !Nn) ||
                    (g.scrollBar && R() === c.dtop && !i(t, "fp-auto-height"))
                  )
                ) {
                  if (
                    (null != c.activeSlide &&
                      ((l = c.activeSlide.getAttribute("data-anchor")),
                      (a = h(c.activeSlide))),
                    !c.localIsResizing)
                  ) {
                    var u = c.yMovement;
                    if (
                      (void 0 !== r && (u = r ? "up" : "down"),
                      (c.direction = u),
                      void 0 !== e.fp_dropEffectExtension &&
                        An.dropEffect.onLeave(c),
                      I(g.onLeave) && !1 === ot("onLeave", c))
                    )
                      return;
                  }
                  var f;
                  un("parallax", "apply", c),
                    un("cards", "apply", c),
                    un("dropEffect", "apply", c),
                    g.autoScrolling &&
                      g.continuousVertical &&
                      void 0 !== c.isMovementUp &&
                      ((!c.isMovementUp && "up" == c.yMovement) ||
                        (c.isMovementUp && "down" == c.yMovement)) &&
                      ((d = c).isMovementUp
                        ? C(o(ne)[0], Y(d.activeSection, te))
                        : O(o(ne)[0], D(d.activeSection, te).reverse()),
                      rn(o(ne)[0].offsetTop),
                      et(),
                      (d.wrapAroundElements = d.activeSection),
                      (d.dtop = d.element.offsetTop),
                      (d.yMovement = Wt(d.element)),
                      (d.leavingSection = h(d.activeSection, te) + 1),
                      (d.sectionIndex = h(d.element, te)),
                      N(o(X)[0], "onContinuousVertical", d),
                      (c = d)),
                    cn("scrollOverflowReset") &&
                      An.scrollOverflowReset.setPrevious(c.activeSection),
                    c.localIsResizing || pt(c.activeSection),
                    g.scrollOverflow && g.scrollOverflowHandler.beforeLeave(),
                    (cn("dropEffect") && g.dropEffect) || (y(t, J), w(H(t), J)),
                    ut(t),
                    g.scrollOverflow && g.scrollOverflowHandler.onLeave(),
                    (jn = An.test.isTesting),
                    Jt(a, l, c.anchorLink, c.sectionIndex),
                    (function (e) {
                      var t = g.scrollingSpeed < 700,
                        n = t ? 700 : g.scrollingSpeed;
                      if (g.css3 && g.autoScrolling && !g.scrollBar)
                        Gt(
                          "translate3d(0px, -" +
                            Math.round(e.dtop) +
                            "px, 0px)",
                          !0
                        ),
                          g.scrollingSpeed
                            ? (clearTimeout(Wn),
                              (Wn = setTimeout(function () {
                                at(e), (jn = !t);
                              }, g.scrollingSpeed)))
                            : at(e);
                      else {
                        var o = lt(e.dtop);
                        (An.test.top = -e.dtop + "px"),
                          s(wn, { "scroll-behavior": "unset" }),
                          hn(
                            o.element,
                            o.options,
                            g.scrollingSpeed,
                            function () {
                              g.scrollBar
                                ? setTimeout(function () {
                                    at(e);
                                  }, 30)
                                : (at(e), (jn = !t));
                            }
                          );
                      }
                      t &&
                        (clearTimeout(io),
                        (io = setTimeout(function () {
                          jn = !0;
                        }, n)));
                    })(c),
                    (Ln = c.anchorLink),
                    Dt(
                      c.anchorLink,
                      null == (f = c).wrapAroundElements
                        ? f.sectionIndex
                        : f.isMovementUp
                        ? o(te).length - 1
                        : 0
                    );
                }
              }
              var d;
            }
            function ot(e, t) {
              var n,
                r,
                i,
                l,
                a =
                  ((r = e),
                  (i = t),
                  (l = g.v2compatible
                    ? {
                        afterRender: function () {
                          return [Hn];
                        },
                        onLeave: function () {
                          return [
                            i.activeSection,
                            i.leavingSection,
                            i.sectionIndex + 1,
                            i.direction,
                          ];
                        },
                        afterLoad: function () {
                          return [i.element, i.anchorLink, i.sectionIndex + 1];
                        },
                        afterSlideLoad: function () {
                          return [
                            i.destiny,
                            i.anchorLink,
                            i.sectionIndex + 1,
                            i.slideAnchor,
                            i.slideIndex,
                          ];
                        },
                        onSlideLeave: function () {
                          return [
                            i.prevSlide,
                            i.anchorLink,
                            i.sectionIndex + 1,
                            i.prevSlideIndex,
                            i.direction,
                            i.slideIndex,
                          ];
                        },
                      }
                    : {
                        afterRender: function () {
                          return {
                            section: rt(o(ne)[0]),
                            slide: it(o(se, o(ne)[0])[0]),
                          };
                        },
                        onLeave: function () {
                          return {
                            origin: rt(i.activeSection),
                            destination: rt(i.element),
                            direction: i.direction,
                          };
                        },
                        afterLoad: function () {
                          return l.onLeave();
                        },
                        afterSlideLoad: function () {
                          return {
                            section: rt(i.section),
                            origin: it(i.prevSlide),
                            destination: it(i.destiny),
                            direction: i.direction,
                          };
                        },
                        onSlideLeave: function () {
                          return l.afterSlideLoad();
                        },
                      })[r]());
              if (g.v2compatible) {
                if (!1 === g[e].apply(a[0], a.slice(1))) return !1;
              } else if (
                (N(Hn, e, a),
                !1 ===
                  g[e].apply(
                    a[Object.keys(a)[0]],
                    ((n = a),
                    Object.keys(n).map(function (e) {
                      return n[e];
                    }))
                  ))
              )
                return !1;
              return !0;
            }
            function rt(e) {
              return e ? new Sn(e) : null;
            }
            function it(e) {
              return e ? new bn(e) : null;
            }
            function lt(t) {
              var n = {};
              return (
                g.autoScrolling && !g.scrollBar
                  ? ((n.options = -t), (n.element = o(X)[0]))
                  : ((n.options = t), (n.element = e)),
                n
              );
            }
            function at(e) {
              var t;
              null != (t = e).wrapAroundElements &&
                (t.isMovementUp
                  ? C(o(te)[0], t.wrapAroundElements)
                  : O(o(te)[o(te).length - 1], t.wrapAroundElements),
                rn(o(ne)[0].offsetTop),
                et(),
                (t.sectionIndex = h(t.element, te)),
                (t.leavingSection = h(t.activeSection, te) + 1)),
                I(g.afterLoad) && !e.localIsResizing && ot("afterLoad", e),
                g.scrollOverflow && g.scrollOverflowHandler.afterLoad(),
                un("parallax", "afterLoad"),
                un("dropEffect", "afterLoad"),
                un("scrollOverflowReset", "reset"),
                cn("resetSliders") && An.resetSliders.apply(e),
                e.localIsResizing || dt(e.element),
                y(e.element, K),
                w(H(e.element), K),
                ct(),
                (jn = !0),
                I(e.callback) && e.callback();
            }
            function st(e, t) {
              e.setAttribute(t, e.getAttribute("data-" + t)),
                e.removeAttribute("data-" + t);
            }
            function ct() {
              var e =
                o(".fp-auto-height")[0] ||
                (He() && o(".fp-auto-height-responsive")[0]);
              g.lazyLoading &&
                e &&
                o(te + ":not(" + q + ")").forEach(function (e) {
                  var t, n, o;
                  (t = e.getBoundingClientRect()),
                    (n = t.top),
                    (o = t.bottom),
                    ((n + 2 < zn && 0 < n) || (2 < o && o < zn)) && ut(e);
                });
            }
            function ut(e) {
              g.lazyLoading &&
                o(
                  "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",
                  ht(e)
                ).forEach(function (t) {
                  if (
                    (["src", "srcset"].forEach(function (n) {
                      var o = t.getAttribute("data-" + n);
                      null != o &&
                        o &&
                        (st(t, n),
                        t.addEventListener("load", function () {
                          ft(e);
                        }));
                    }),
                    _(t, "source"))
                  ) {
                    var n = T(t, "video, audio");
                    n &&
                      (n.load(),
                      (n.onloadeddata = function () {
                        ft(e);
                      }));
                  }
                });
            }
            function ft(e) {
              g.scrollOverflow &&
                (clearTimeout(ro),
                (ro = setTimeout(function () {
                  i(xn, F) || Vn.createScrollBar(e);
                }, 200)));
            }
            function dt(e) {
              var t = ht(e);
              o("video, audio", t).forEach(function (e) {
                e.hasAttribute("data-autoplay") &&
                  "function" == typeof e.play &&
                  e.play();
              }),
                o('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                  e.hasAttribute("data-autoplay") && vt(e),
                    (e.onload = function () {
                      e.hasAttribute("data-autoplay") && vt(e);
                    });
                });
            }
            function vt(e) {
              e.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*"
              );
            }
            function pt(e) {
              var t = ht(e);
              o("video, audio", t).forEach(function (e) {
                e.hasAttribute("data-keepplaying") ||
                  "function" != typeof e.pause ||
                  e.pause();
              }),
                o('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                  /youtube\.com\/embed\//.test(e.getAttribute("src")) &&
                    !e.hasAttribute("data-keepplaying") &&
                    e.contentWindow.postMessage(
                      '{"event":"command","func":"pauseVideo","args":""}',
                      "*"
                    );
                });
            }
            function ht(e) {
              var t = o(se, e);
              return t.length && (e = t[0]), e;
            }
            function gt(e) {
              function t(e) {
                var t,
                  n,
                  r,
                  i,
                  l,
                  a,
                  s = "",
                  c = 0;
                for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); c < e.length; )
                  (t =
                    (o.indexOf(e.charAt(c++)) << 2) |
                    ((i = o.indexOf(e.charAt(c++))) >> 4)),
                    (n =
                      ((15 & i) << 4) | ((l = o.indexOf(e.charAt(c++))) >> 2)),
                    (r = ((3 & l) << 6) | (a = o.indexOf(e.charAt(c++)))),
                    (s += String.fromCharCode(t)),
                    64 != l && (s += String.fromCharCode(n)),
                    64 != a && (s += String.fromCharCode(r));
                return (s = (function (e) {
                  for (var t, n = "", o = 0, r = 0, i = 0; o < e.length; )
                    (r = e.charCodeAt(o)) < 128
                      ? ((n += String.fromCharCode(r)), o++)
                      : 191 < r && r < 224
                      ? ((i = e.charCodeAt(o + 1)),
                        (n += String.fromCharCode(((31 & r) << 6) | (63 & i))),
                        (o += 2))
                      : ((i = e.charCodeAt(o + 1)),
                        (t = e.charCodeAt(o + 2)),
                        (n += String.fromCharCode(
                          ((15 & r) << 12) | ((63 & i) << 6) | (63 & t)
                        )),
                        (o += 3));
                  return n;
                })(s));
              }
              function n(e) {
                return e.slice(3).slice(0, -3);
              }
              var o =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              return (function (e) {
                var o = e.split("_");
                if (1 < o.length) {
                  var r = o[1];
                  return (
                    e.replace(n(o[1]), "").split("_")[0] +
                    "_" +
                    t(r.slice(3).slice(0, -3))
                  );
                }
                return n(e);
              })(t(e));
            }
            function mt(e) {
              var n = void 0 !== co[e] && co[e].length,
                o = [],
                r = !1;
              return (
                b(co[e]) ? (o = co[e]) : o.push(co[e]),
                o.forEach(function (o) {
                  var i = (function () {
                      if (t.domain.length) {
                        for (
                          var e = t.domain.replace(/^(www\.)/, "").split(".");
                          2 < e.length;

                        )
                          e.shift();
                        return e.join(".").replace(/(^\.*)|(\.*$)/g, "");
                      }
                      return "";
                    })(),
                    l = [
                      "MTM0bG9jYWxob3N0MjM0",
                      "MTM0MC4xMjM0",
                      "MTM0anNoZWxsLm5ldDIzNA==",
                      "UDdDQU5ZNlNN",
                      "NTY3YnVuZGxlNzg5",
                      "NTU1S2V5Nzc3",
                    ],
                    a = gt(l[0]),
                    s = gt(l[1]),
                    c = gt(l[2]),
                    u = gt(l[3]),
                    f = gt(l[4]),
                    d = gt(l[5]),
                    v = void 0 !== g[f + d];
                  n = n || v;
                  var p = [a, s, c].indexOf(i) < 0 && 0 !== i.length;
                  if (!n && !v && p) return !1;
                  var h = n ? gt(o) : "",
                    m =
                      1 < (h = h.split("_")).length &&
                      -1 < h[1].indexOf(e, h[1].length - e.length),
                    S = 1 < h.length && -1 < h[1].toLowerCase().indexOf(f),
                    b = h[0].indexOf(i, h[0].length - i.length) < 0,
                    y = m || S;
                  r = r || (!(b && p && u != h[0]) && y) || !p;
                }),
                r
              );
            }
            function St(t) {
              t.forEach(function (t) {
                if (t.removedNodes[0] && t.removedNodes[0].isEqualNode(fo)) {
                  clearTimeout(vo);
                  var n = gt("bDIwc2V0VGltZW91dDAzbA==");
                  vo = e[n](bt, 900);
                }
              });
            }
            function bt() {
              qn = !1;
            }
            function yt(n) {
              if (
                ((fo = t.createElement("div")),
                (uo = gt(
                  "MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="
                )),
                Kn ||
                  (uo = uo.replace("extensions/", "").replace("Extension", "")),
                (fo.innerHTML = uo),
                (fo = fo.firstChild),
                "MutationObserver" in e &&
                  new MutationObserver(St).observe(t.body, {
                    childList: !0,
                    subtree: !1,
                  }),
                (!Kn || (cn(n) && An[n])) && (!mt(n) || !Kn))
              ) {
                wt();
                var o = gt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                e[o](wt, 2e3);
              }
            }
            function wt() {
              fo &&
                (qn || (Math.random() < 0.5 ? W(xn, fo) : E(fo, xn), (qn = !0)),
                fo.setAttribute(
                  "style",
                  gt(
                    "MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz"
                  ).replace(/;/g, gt("MTIzICFpbXBvcnRhbnQ7MzQ1"))
                ));
            }
            function Et() {
              var e = At(),
                t = e.section,
                n = e.slide;
              t && (g.animateAnchor ? $t(t, n) : Te(t, n));
            }
            function xt(e) {
              if (!po && !g.lockAnchors) {
                var t = At(),
                  n = t.section,
                  o = t.slide,
                  r = void 0 === Ln,
                  i = void 0 === Ln && void 0 === o && !Cn;
                n &&
                  n.length &&
                  ((n && n !== Ln && !r) ||
                    (i && !fn()) ||
                    (!Cn && Mn != o && !fn())) &&
                  $t(n, o);
              }
            }
            function At() {
              var t,
                n,
                o = e.location.hash;
              if (o.length) {
                var r = o.replace("#", "").split("/"),
                  i = -1 < o.indexOf("#/");
                t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                var l = i ? r[2] : r[1];
                l && l.length && (n = decodeURIComponent(l));
              }
              return { section: t, slide: n };
            }
            function Lt(e) {
              clearTimeout(Gn);
              var n = t.activeElement,
                r = e.keyCode;
              9 === r
                ? (function (e) {
                    function n(e) {
                      return z(e), v[0] ? v[0].focus() : null;
                    }
                    var r,
                      i,
                      l,
                      a,
                      s,
                      c,
                      u,
                      f = e.shiftKey,
                      d = t.activeElement,
                      v = Ct(ht(o(ne)[0]));
                    (r = e),
                      (i = Ct(t)),
                      (l = i.indexOf(t.activeElement)),
                      (a = r.shiftKey ? l - 1 : l + 1),
                      (s = i[a]),
                      (c = it(T(s, ae))),
                      (u = rt(T(s, te))),
                      (c || u) &&
                        (d
                          ? null == T(d, ne + "," + ne + " " + se) && (d = n(e))
                          : n(e),
                        ((!f && d == v[v.length - 1]) || (f && d == v[0])) &&
                          z(e));
                  })(e)
                : _(n, "textarea") ||
                  _(n, "input") ||
                  _(n, "select") ||
                  "true" === n.getAttribute("contentEditable") ||
                  "" === n.getAttribute("contentEditable") ||
                  !g.keyboardScrolling ||
                  !g.autoScrolling ||
                  (-1 < [40, 38, 32, 33, 34].indexOf(r) && z(e),
                  (Tn = e.ctrlKey),
                  (Gn = setTimeout(function () {
                    !(function (e) {
                      var n = e.shiftKey,
                        r = t.activeElement,
                        i = _(r, "video") || _(r, "audio");
                      if (jn || !([37, 39].indexOf(e.keyCode) < 0))
                        switch (e.keyCode) {
                          case 38:
                          case 33:
                            Pn.k.up && Le();
                            break;
                          case 32:
                            if (n && Pn.k.up && !i) {
                              Le();
                              break;
                            }
                          case 40:
                          case 34:
                            Pn.k.down && ((32 === e.keyCode && i) || Me());
                            break;
                          case 36:
                            Pn.k.up && Oe(1);
                            break;
                          case 35:
                            Pn.k.down && Oe(o(te).length);
                            break;
                          case 37:
                            Pn.k.left && ke();
                            break;
                          case 39:
                            Pn.k.right && Ce();
                        }
                    })(e);
                  }, 150)));
            }
            function Mt(e) {
              _n && (Tn = e.ctrlKey);
            }
            function Tt(e) {
              2 == e.which &&
                ((wo = e.pageY), Hn.addEventListener("mousemove", Ht));
            }
            function Ot(e) {
              2 == e.which && Hn.removeEventListener("mousemove", Ht);
            }
            function Ct(e) {
              return [].slice.call(o(eo, e)).filter(function (e) {
                return (
                  "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                );
              });
            }
            function kt() {
              _n = !0;
            }
            function Rt() {
              Tn = _n = !1;
            }
            function Ht(e) {
              g.autoScrolling &&
                (jn &&
                  (e.pageY < wo && Pn.m.up
                    ? Le()
                    : e.pageY > wo && Pn.m.down && Me()),
                (wo = e.pageY));
            }
            function zt(e, t, n) {
              var r = T(e, te),
                l = {
                  slides: e,
                  destiny: t,
                  direction: n,
                  destinyPos: { left: t.offsetLeft },
                  slideIndex: h(t),
                  section: r,
                  sectionIndex: h(r, te),
                  anchorLink: r.getAttribute("data-anchor"),
                  slidesNav: o(he, r)[0],
                  slideAnchor: Kt(t),
                  prevSlide: o(se, r)[0],
                  prevSlideIndex: h(o(se, r)[0]),
                  localIsResizing: Nn,
                };
              (l.xMovement = Zt(l.prevSlideIndex, l.slideIndex)),
                (l.direction = l.direction ? l.direction : l.xMovement),
                l.localIsResizing || (jn = !1),
                un("parallax", "applyHorizontal", l),
                un("cards", "apply", l),
                un("dropEffect", "apply", l),
                g.onSlideLeave &&
                !l.localIsResizing &&
                "none" !== l.xMovement &&
                I(g.onSlideLeave) &&
                !1 === ot("onSlideLeave", l)
                  ? (Cn = !1)
                  : ((cn("dropEffect") && g.dropEffect) ||
                      (y(t, J), w(H(t), J)),
                    l.localIsResizing || (pt(l.prevSlide), ut(t)),
                    It(l),
                    i(r, J) &&
                      !l.localIsResizing &&
                      Jt(
                        l.slideIndex,
                        l.slideAnchor,
                        l.anchorLink,
                        l.sectionIndex
                      ),
                    An.continuousHorizontal && An.continuousHorizontal.apply(l),
                    dn() ? Nt(l) : _t(e, l, !0),
                    g.interlockedSlides &&
                      An.interlockedSlides &&
                      ((cn("continuousHorizontal") &&
                        void 0 !== n &&
                        n !== l.xMovement) ||
                        An.interlockedSlides.apply(l)));
            }
            function It(e) {
              !g.loopHorizontal &&
                g.controlArrows &&
                (j(o(Se, e.section), 0 !== e.slideIndex),
                j(o(be, e.section), null != v(e.destiny)));
            }
            function Nt(e) {
              var t, n;
              An.continuousHorizontal &&
                An.continuousHorizontal.afterSlideLoads(e),
                (t = e.slidesNav),
                (n = e.slideIndex),
                g.slidesNavigation &&
                  null != t &&
                  (w(o(q, t), J), y(o("a", o("li", t)[n]), J)),
                e.localIsResizing ||
                  (un("parallax", "afterSlideLoads"),
                  un("scrollOverflowReset", "setPrevious", e.prevSlide),
                  un("scrollOverflowReset", "reset"),
                  I(g.afterSlideLoad) && ot("afterSlideLoad", e),
                  (jn = !0),
                  dt(e.destiny)),
                (Cn = !1),
                cn("interlockedSlides") && An.interlockedSlides.apply(e);
            }
            function _t(e, t, n) {
              var r = t.destinyPos;
              if (g.css3) {
                var i = "translate3d(-" + Math.round(r.left) + "px, 0px, 0px)";
                (An.test.translate3dH[t.sectionIndex] = i),
                  (cn("dragAndMove") && void 0 !== t.isInterlockedSlide) ||
                    Vt(o(de, e)),
                  s(o(de, e), ln(i)),
                  (Zn = setTimeout(function () {
                    n && Nt(t);
                  }, g.scrollingSpeed));
              } else
                (An.test.left[t.sectionIndex] = Math.round(r.left)),
                  hn(e, Math.round(r.left), g.scrollingSpeed, function () {
                    n && Nt(t);
                  });
            }
            function jt() {
              clearTimeout(Yn),
                (Yn = setTimeout(function () {
                  for (var e = 0; e < 4; e++) Dn = setTimeout(Bt, 200 * e);
                }, 200));
            }
            function Bt() {
              if (((Nn = !0), N(Hn, "onResize"), Pt(), kn)) {
                var e = t.activeElement;
                if (!_(e, "textarea") && !_(e, "input") && !_(e, "select")) {
                  var n = l();
                  Math.abs(n - Eo) > (20 * Math.max(Eo, n)) / 100 &&
                    (Re(!0), (Eo = n));
                }
              } else je();
              Nn = !1;
            }
            function Pt() {
              var t = g.responsive || g.responsiveWidth,
                n = g.responsiveHeight,
                o = t && e.innerWidth < t,
                r = n && e.innerHeight < n;
              t && n ? ze(o || r) : t ? ze(o) : n && ze(r);
            }
            function Vt(e) {
              var t = "all " + g.scrollingSpeed + "ms " + g.easingcss3;
              return w(e, G), s(e, { "-webkit-transition": t, transition: t });
            }
            function Yt(e) {
              return y(e, G);
            }
            function Dt(e, t) {
              var n, r, i, l;
              (n = e),
                o(g.menu).forEach(function (e) {
                  g.menu &&
                    null != e &&
                    (w(o(q, e), J),
                    y(o('[data-menuanchor="' + n + '"]', e), J));
                }),
                (r = e),
                (i = t),
                (l = o(ie)[0]),
                g.navigation &&
                  null != l &&
                  "none" !== l.style.display &&
                  (w(o(q, o(ie)[0]), J),
                  y(
                    r
                      ? o('a[href="#' + r + '"]', o(ie)[0])
                      : o("a", o("li", o(ie)[0])[i]),
                    J
                  ));
            }
            function Wt(e) {
              var t = h(o(ne)[0], te),
                n = h(e, te);
              return t == n ? "none" : n < t ? "up" : "down";
            }
            function Zt(e, t) {
              return e == t ? "none" : t < e ? "left" : "right";
            }
            function Xt(e) {
              if (!i(e, ve)) {
                var n = t.createElement("div");
                (n.className = oe),
                  (n.style.height = Ft(e) + "px"),
                  y(e, ve),
                  L(e, n);
              }
            }
            function Ft(e) {
              var t = Ve(e);
              if (g.paddingTop || g.paddingBottom) {
                var n = e;
                i(n, ee) || (n = T(e, te)),
                  (t -=
                    parseInt(getComputedStyle(n)["padding-top"]) +
                    parseInt(getComputedStyle(n)["padding-bottom"]));
              }
              return t;
            }
            function Gt(e, t) {
              t ? Vt(Hn) : Yt(Hn),
                clearTimeout($n),
                s(Hn, ln(e)),
                (An.test.translate3d = e),
                ($n = setTimeout(function () {
                  w(Hn, G);
                }, 10));
            }
            function Ut(e) {
              var t = o(te + '[data-anchor="' + e + '"]', Hn)[0];
              if (!t) {
                var n = void 0 !== e ? e - 1 : 0;
                t = o(te)[n];
              }
              return t;
            }
            function $t(e, t) {
              var n = Ut(e);
              if (null != n) {
                var r,
                  l,
                  a,
                  s =
                    (null ==
                      (a = o(
                        ae + '[data-anchor="' + (r = t) + '"]',
                        (l = n)
                      )[0]) && ((r = void 0 !== r ? r : 0), (a = o(ae, l)[r])),
                    a);
                Kt(n) === Ln || i(n, J)
                  ? Qt(s)
                  : nt(n, function () {
                      Qt(s);
                    });
              }
            }
            function Qt(e) {
              null != e && zt(T(e, ue), e);
            }
            function Jt(e, t, n, o) {
              var r = "";
              g.anchors.length &&
                !g.lockAnchors &&
                (e
                  ? (null != n && (r = n),
                    null == t && (t = e),
                    qt(r + "/" + (Mn = t)))
                  : (null != e && (Mn = t), qt(n))),
                en();
            }
            function qt(t) {
              if (g.recordHistory) location.hash = t;
              else if (kn || Rn)
                e.history.replaceState(void 0, void 0, "#" + t);
              else {
                var n = e.location.href.split("#")[0];
                e.location.replace(n + "#" + t);
              }
            }
            function Kt(e) {
              if (!e) return null;
              var t = e.getAttribute("data-anchor"),
                n = h(e);
              return null == t && (t = n), t;
            }
            function en() {
              var e = o(ne)[0],
                t = o(se, e)[0],
                n = Kt(e),
                r = Kt(t),
                i = String(n);
              t && (i = i + "-" + r),
                (i = i.replace("/", "-").replace("#", ""));
              var l = new RegExp("\\b\\s?" + Q + "-[^\\s]+\\b", "g");
              (xn.className = xn.className.replace(l, "")), y(xn, Q + "-" + i);
            }
            function tn() {
              return e.PointerEvent
                ? { down: "pointerdown", move: "pointermove" }
                : { down: "MSPointerDown", move: "MSPointerMove" };
            }
            function nn(e) {
              var t = [];
              return (
                (t.y =
                  void 0 !== e.pageY && (e.pageY || e.pageX)
                    ? e.pageY
                    : e.touches[0].pageY),
                (t.x =
                  void 0 !== e.pageX && (e.pageY || e.pageX)
                    ? e.pageX
                    : e.touches[0].pageX),
                Rn &&
                  $e(e) &&
                  g.scrollBar &&
                  void 0 !== e.touches &&
                  ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                t
              );
            }
            function on(e, t) {
              V(0, "internal"),
                void 0 !== t && (Nn = !0),
                zt(T(e, ue), e),
                void 0 !== t && (Nn = !1),
                V(lo.scrollingSpeed, "internal");
            }
            function rn(e) {
              var t = Math.round(e);
              if (g.css3 && g.autoScrolling && !g.scrollBar)
                Gt("translate3d(0px, -" + t + "px, 0px)", !1);
              else if (g.autoScrolling && !g.scrollBar)
                s(Hn, { top: -t + "px" }), (An.test.top = -t + "px");
              else {
                var n = lt(t);
                gn(n.element, n.options);
              }
            }
            function ln(e) {
              return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e,
              };
            }
            function an(e, t, n) {
              "all" !== t
                ? (Pn[n][t] = e)
                : Object.keys(Pn[n]).forEach(function (t) {
                    Pn[n][t] = e;
                  });
            }
            function sn(e) {
              return s(e, { "-webkit-transition": "none", transition: "none" });
            }
            function cn(e) {
              return null !== g[e] &&
                "[object Array]" === Object.prototype.toString.call(g[e])
                ? g[e].length && An[e]
                : g[e] && An[e];
            }
            function un(e, t, n) {
              if (cn(e)) return An[e][t](n);
            }
            function fn() {
              return cn("dragAndMove") && An.dragAndMove.isAnimating;
            }
            function dn() {
              return cn("dragAndMove") && An.dragAndMove.isGrabbing;
            }
            function vn(e, t, n) {
              (g[e] = t), "internal" !== n && (lo[e] = t);
            }
            function pn() {
              var e = g.licenseKey,
                t = "font-size: 15px;background:yellow;";
              yn
                ? e &&
                  e.length < 20 &&
                  (console.warn(
                    "%c This website was made using fullPage.js slider. More info on the following website:",
                    t
                  ),
                  console.warn("%c https://alvarotrigo.com/fullPage/", t))
                : (n(
                    
                  ),
                  n(
                    
                  )),
                i(En, $)
                  ? n(
                      "error",
                      "Fullpage.js can only be initialized once and you are doing it multiple times!"
                    )
                  : (g.continuousVertical &&
                      (g.loopTop || g.loopBottom) &&
                      ((g.continuousVertical = !1),
                      n(
                        "warn",
                        "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                      )),
                    !g.scrollOverflow ||
                      (!g.scrollBar && g.autoScrolling) ||
                      n(
                        "warn",
                        "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"
                      ),
                    !g.continuousVertical ||
                      (!g.scrollBar && g.autoScrolling) ||
                      ((g.continuousVertical = !1),
                      n(
                        "warn",
                        "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                      )),
                    g.scrollOverflow &&
                      null == g.scrollOverflowHandler &&
                      ((g.scrollOverflow = !1),
                      n(
                        "error",
                        "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
                      )),
                    g.anchors.forEach(function (e) {
                      var t = [].slice.call(o("[name]")).filter(function (t) {
                          return (
                            t.getAttribute("name") &&
                            t.getAttribute("name").toLowerCase() ==
                              e.toLowerCase()
                          );
                        }),
                        r = [].slice.call(o("[id]")).filter(function (t) {
                          return (
                            t.getAttribute("id") &&
                            t.getAttribute("id").toLowerCase() ==
                              e.toLowerCase()
                          );
                        });
                      if (r.length || t.length) {
                        n(
                          "error",
                          "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                        );
                        var i = r.length ? "id" : "name";
                        (r.length || t.length) &&
                          n(
                            "error",
                            '"' +
                              e +
                              '" is is being used by another element `' +
                              i +
                              "` property"
                          );
                      }
                    }));
            }
            function hn(t, n, o, r) {
              var l,
                a =
                  (l = t).self != e && i(l, ce)
                    ? l.scrollLeft
                    : !g.autoScrolling || g.scrollBar
                    ? R()
                    : l.offsetTop,
                s = n - a,
                c = 0;
              oo = !0;
              var u = function () {
                if (oo) {
                  var i = n;
                  (c += 20),
                    o && (i = e.fp_easings[g.easing](c, a, s, o)),
                    gn(t, i),
                    c < o ? setTimeout(u, 20) : void 0 !== r && r();
                } else c < o && r();
              };
              u();
            }
            function gn(t, n) {
              !g.autoScrolling || g.scrollBar || (t.self != e && i(t, ce))
                ? t.self != e && i(t, ce)
                  ? (t.scrollLeft = n)
                  : t.scrollTo(0, n)
                : (t.style.top = n + "px");
            }
            function mn(e, t) {
              (this.anchor = e.getAttribute("data-anchor")),
                (this.item = e),
                (this.index = h(e, t)),
                (this.isLast =
                  this.index ===
                  e.parentElement.querySelectorAll(t).length - 1),
                (this.isFirst = !this.index);
            }
            function Sn(e) {
              mn.call(this, e, te);
            }
            function bn(e) {
              mn.call(this, e, ae);
            }
            var yn =
                (g &&
                  new RegExp(
                    "([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$"
                  ).test(g.licenseKey)) ||
                -1 < t.domain.indexOf("alvarotrigo.com"),
              wn = o("html, body"),
              En = o("html")[0],
              xn = o("body")[0];
            if (!i(En, $)) {
              var An = {};
              g = r(
                {
                  menu: !1,
                  anchors: [],
                  lockAnchors: !1,
                  navigation: !1,
                  navigationPosition: "right",
                  navigationTooltips: [],
                  showActiveTooltip: !1,
                  slidesNavigation: !1,
                  slidesNavPosition: "bottom",
                  scrollBar: !1,
                  hybrid: !1,
                  css3: !0,
                  scrollingSpeed: 700,
                  autoScrolling: !0,
                  fitToSection: !0,
                  fitToSectionDelay: 1e3,
                  easing: "easeInOutCubic",
                  easingcss3: "ease",
                  loopBottom: !1,
                  loopTop: !1,
                  loopHorizontal: !0,
                  continuousVertical: !1,
                  continuousHorizontal: !1,
                  scrollHorizontally: !1,
                  interlockedSlides: !1,
                  dragAndMove: !1,
                  offsetSections: !1,
                  resetSliders: !1,
                  fadingEffect: !1,
                  normalScrollElements: null,
                  scrollOverflow: !1,
                  scrollOverflowReset: !1,
                  scrollOverflowHandler: e.fp_scrolloverflow
                    ? e.fp_scrolloverflow.iscrollHandler
                    : null,
                  scrollOverflowOptions: null,
                  touchSensitivity: 5,
                  touchWrapper: "string" == typeof c ? o(c)[0] : c,
                  bigSectionsDestination: null,
                  keyboardScrolling: !0,
                  animateAnchor: !0,
                  recordHistory: !0,
                  controlArrows: !0,
                  controlArrowColor: "#fff",
                  verticalCentered: !0,
                  sectionsColor: [],
                  paddingTop: 0,
                  paddingBottom: 0,
                  fixedElements: null,
                  responsive: 0,
                  responsiveWidth: 0,
                  responsiveHeight: 0,
                  responsiveSlides: !1,
                  parallax: !1,
                  parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate",
                  },
                  cards: !1,
                  cardsOptions: {
                    perspective: 100,
                    fadeContent: !0,
                    fadeBackground: !0,
                  },
                  sectionSelector: ".section",
                  slideSelector: ".slide",
                  v2compatible: !1,
                  afterLoad: null,
                  onLeave: null,
                  afterRender: null,
                  afterResize: null,
                  afterReBuild: null,
                  afterSlideLoad: null,
                  onSlideLeave: null,
                  afterResponsive: null,
                  lazyLoading: !0,
                },
                g
              );
              var Ln,
                Mn,
                Tn,
                On,
                Cn = !1,
                kn = navigator.userAgent.match(
                  /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
                ),
                Rn =
                  "ontouchstart" in e ||
                  0 < navigator.msMaxTouchPoints ||
                  navigator.maxTouchPoints,
                Hn = "string" == typeof c ? o(c)[0] : c,
                zn = l(),
                In = a(),
                Nn = !1,
                _n = !0,
                jn = !0,
                Bn = [],
                Pn = { m: { up: !0, down: !0, left: !0, right: !0 } };
              Pn.k = r({}, Pn.m);
              var Vn,
                Yn,
                Dn,
                Wn,
                Zn,
                Xn,
                Fn,
                Gn,
                Un,
                $n,
                Qn = tn(),
                Jn = {
                  touchmove: "ontouchmove" in e ? "touchmove" : Qn.move,
                  touchstart: "ontouchstart" in e ? "touchstart" : Qn.down,
                },
                qn = !1,
                Kn = !i(xn, gt("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),
                eo =
                  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                to = !1;
              try {
                var no = Object.defineProperty({}, "passive", {
                  get: function () {
                    to = !0;
                  },
                });
                e.addEventListener("testPassive", null, no),
                  e.removeEventListener("testPassive", null, no);
              } catch (c) {}
              var oo,
                ro,
                io,
                lo = r({}, g),
                ao = !1,
                so = !0,
                co = {};
              pn(),
                (e.fp_easings = r(e.fp_easings, {
                  easeInOutCubic: function (e, t, n, o) {
                    return (e /= o / 2) < 1
                      ? (n / 2) * e * e * e + t
                      : (n / 2) * ((e -= 2) * e * e + 2) + t;
                  },
                })),
                Hn &&
                  ((An.version = "3.1.0"),
                  (An.setAutoScrolling = x),
                  (An.setRecordHistory = k),
                  (An.setScrollingSpeed = V),
                  (An.setFitToSection = ye),
                  (An.setLockAnchors = function (e) {
                    g.lockAnchors = e;
                  }),
                  (An.setMouseWheelScrolling = we),
                  (An.setAllowScrolling = Ee),
                  (An.setKeyboardScrolling = Ae),
                  (An.moveSectionUp = Le),
                  (An.moveSectionDown = Me),
                  (An.silentMoveTo = Te),
                  (An.moveTo = Oe),
                  (An.moveSlideRight = Ce),
                  (An.moveSlideLeft = ke),
                  (An.fitToSection = Xe),
                  (An.reBuild = Re),
                  (An.setResponsive = ze),
                  (An.getFullpageData = function () {
                    return {
                      options: g,
                      internals: {
                        container: Hn,
                        canScroll: jn,
                        isScrollAllowed: Pn,
                        getDestinationPosition: tt,
                        isTouch: Rn,
                        c: yt,
                        getXmovement: Zt,
                        removeAnimation: Yt,
                        getTransforms: ln,
                        lazyLoad: ut,
                        addAnimation: Vt,
                        performHorizontalMove: _t,
                        landscapeScroll: zt,
                        silentLandscapeScroll: on,
                        keepSlidesPosition: et,
                        silentScroll: rn,
                        styleSlides: Pe,
                        styleSection: Ye,
                        scrollHandler: Ze,
                        getEventsPage: nn,
                        getMSPointer: tn,
                        isReallyTouch: $e,
                        usingExtension: cn,
                        toggleControlArrows: It,
                        touchStartHandler: Qe,
                        touchMoveHandler: Ue,
                      },
                    };
                  }),
                  (An.destroy = function (n) {
                    N(Hn, "destroy", n),
                      x(!1, "internal"),
                      Ee(!0),
                      xe(!1),
                      Ae(!1),
                      y(Hn, U),
                      [Zn, Wn, Yn, Xn, Fn, Un, Dn, io].forEach(function (e) {
                        clearTimeout(e);
                      }),
                      e.removeEventListener("scroll", Ze),
                      e.removeEventListener("hashchange", xt),
                      e.removeEventListener("resize", jt),
                      t.removeEventListener("keydown", Lt),
                      t.removeEventListener("keyup", Mt),
                      ["click", "touchstart"].forEach(function (e) {
                        t.removeEventListener(e, Ie);
                      }),
                      [
                        "mouseenter",
                        "touchstart",
                        "mouseleave",
                        "touchend",
                      ].forEach(function (e) {
                        t.removeEventListener(e, _e, !0);
                      }),
                      un("dragAndMove", "destroy"),
                      n &&
                        (rn(0),
                        o(
                          "img[data-src], source[data-src], audio[data-src], iframe[data-src]",
                          Hn
                        ).forEach(function (e) {
                          st(e, "src");
                        }),
                        o("img[data-srcset]").forEach(function (e) {
                          st(e, "srcset");
                        }),
                        P(o(ie + ", " + he + ", " + me)),
                        s(o(te), {
                          height: "",
                          "background-color": "",
                          padding: "",
                        }),
                        s(o(ae), { width: "" }),
                        s(Hn, {
                          height: "",
                          position: "",
                          "-ms-touch-action": "",
                          "touch-action": "",
                        }),
                        s(wn, { overflow: "", height: "" }),
                        w(En, $),
                        w(xn, F),
                        xn.className.split(/\s+/).forEach(function (e) {
                          0 === e.indexOf(Q) && w(xn, e);
                        }),
                        o(te + ", " + ae).forEach(function (e) {
                          g.scrollOverflowHandler &&
                            g.scrollOverflow &&
                            g.scrollOverflowHandler.remove(e),
                            w(e, ve + " " + J + " " + K),
                            e.getAttribute("data-fp-styles") &&
                              e.setAttribute(
                                "style",
                                e.getAttribute("data-fp-styles")
                              ),
                            i(e, ee) && !ao && e.removeAttribute("data-anchor");
                        }),
                        sn(Hn),
                        [re, de, ue].forEach(function (e) {
                          o(e, Hn).forEach(function (e) {
                            M(e);
                          });
                        }),
                        e.scrollTo(0, 0),
                        [ee, le, fe].forEach(function (e) {
                          w(o("." + e), e);
                        }));
                  }),
                  (An.getActiveSection = function () {
                    return new Sn(o(ne)[0]);
                  }),
                  (An.getActiveSlide = function () {
                    return it(o(se, o(ne)[0])[0]);
                  }),
                  (An.landscapeScroll = zt),
                  (An.test = {
                    top: "0px",
                    translate3d: "translate3d(0px, 0px, 0px)",
                    translate3dH: (function () {
                      for (
                        var e = [], t = 0;
                        t < o(g.sectionSelector, Hn).length;
                        t++
                      )
                        e.push("translate3d(0px, 0px, 0px)");
                      return e;
                    })(),
                    left: (function () {
                      for (
                        var e = [], t = 0;
                        t < o(g.sectionSelector, Hn).length;
                        t++
                      )
                        e.push(0);
                      return e;
                    })(),
                    options: g,
                    setAutoScrolling: x,
                  }),
                  (An.shared = {
                    afterRenderActions: We,
                    isNormalScrollElement: !1,
                  }),
                  (e.fullpage_api = An),
                  (e.fullpage_extensions = !0),
                  g.$ &&
                    Object.keys(An).forEach(function (e) {
                      g.$.fn.fullpage[e] = An[e];
                    }),
                  Be("continuousHorizontal"),
                  Be("scrollHorizontally"),
                  Be("resetSliders"),
                  Be("interlockedSlides"),
                  Be("responsiveSlides"),
                  Be("fadingEffect"),
                  Be("dragAndMove"),
                  Be("offsetSections"),
                  Be("scrollOverflowReset"),
                  Be("parallax"),
                  Be("cards"),
                  Be("dropEffect"),
                  un("dragAndMove", "init"),
                  g.css3 &&
                    (g.css3 = (function () {
                      var n,
                        o = t.createElement("p"),
                        r = {
                          webkitTransform: "-webkit-transform",
                          OTransform: "-o-transform",
                          msTransform: "-ms-transform",
                          MozTransform: "-moz-transform",
                          transform: "transform",
                        };
                      for (var i in ((o.style.display = "block"),
                      t.body.insertBefore(o, null),
                      r))
                        void 0 !== o.style[i] &&
                          ((o.style[i] = "translate3d(1px,1px,1px)"),
                          (n = e.getComputedStyle(o).getPropertyValue(r[i])));
                      return (
                        t.body.removeChild(o),
                        void 0 !== n && 0 < n.length && "none" !== n
                      );
                    })()),
                  (g.scrollBar = g.scrollBar || g.hybrid),
                  (function () {
                    if (!g.anchors.length) {
                      var e = "[data-anchor]",
                        t = o(
                          g.sectionSelector.split(",").join(e + ",") + e,
                          Hn
                        );
                      t.length &&
                        t.length === o(g.sectionSelector, Hn).length &&
                        ((ao = !0),
                        t.forEach(function (e) {
                          g.anchors.push(
                            e.getAttribute("data-anchor").toString()
                          );
                        }));
                    }
                    if (!g.navigationTooltips.length) {
                      var n = "[data-tooltip]",
                        r = o(
                          g.sectionSelector.split(",").join(n + ",") + n,
                          Hn
                        );
                      r.length &&
                        r.forEach(function (e) {
                          g.navigationTooltips.push(
                            e.getAttribute("data-tooltip").toString()
                          );
                        });
                    }
                  })(),
                  (function () {
                    s(Hn, { height: "100%", position: "relative" }),
                      y(Hn, Z),
                      y(En, $),
                      (zn = l()),
                      w(Hn, U),
                      y(o(g.sectionSelector, Hn), ee),
                      y(o(g.slideSelector, Hn), le),
                      un("parallax", "init");
                    for (var e = o(te), n = 0; n < e.length; n++) {
                      var r = n,
                        a = e[n],
                        c = o(ae, a),
                        u = c.length;
                      a.setAttribute("data-fp-styles", a.getAttribute("style")),
                        Ye(a, r),
                        (f = a),
                        (d = r),
                        void 0 !== g.anchors[d] &&
                          i(f, J) &&
                          Dt(g.anchors[d], d),
                        g.menu &&
                          g.css3 &&
                          null != T(o(g.menu)[0], X) &&
                          o(g.menu).forEach(function (e) {
                            xn.appendChild(e);
                          }),
                        0 < u ? Pe(a, c, u) : g.verticalCentered && Xt(a);
                    }
                    var f, d;
                    g.fixedElements &&
                      g.css3 &&
                      o(g.fixedElements).forEach(function (e) {
                        xn.appendChild(e);
                      }),
                      g.navigation &&
                        (function () {
                          var e = t.createElement("div");
                          e.setAttribute("id", "fp-nav");
                          var n = t.createElement("ul");
                          e.appendChild(n), E(e, xn);
                          var r = o(ie)[0];
                          y(r, "fp-" + g.navigationPosition),
                            g.showActiveTooltip && y(r, "fp-show-active");
                          for (var i = "", l = 0; l < o(te).length; l++) {
                            var a = "";
                            g.anchors.length && (a = g.anchors[l]),
                              (i +=
                                '<li><a href="#' +
                                a +
                                '"><span class="fp-sr-only">' +
                                De(l, "Section") +
                                "</span><span></span></a>");
                            var s = g.navigationTooltips[l];
                            void 0 !== s &&
                              "" !== s &&
                              (i +=
                                '<div class="fp-tooltip fp-' +
                                g.navigationPosition +
                                '">' +
                                s +
                                "</div>"),
                              (i += "</li>");
                          }
                          (o("ul", r)[0].innerHTML = i),
                            y(o("a", o("li", o(ie)[0])[h(o(ne)[0], te)]), J);
                        })(),
                      o('iframe[src*="youtube.com/embed/"]', Hn).forEach(
                        function (e) {
                          var t, n, o;
                          (n = "enablejsapi=1"),
                            (o = (t = e).getAttribute("src")),
                            t.setAttribute(
                              "src",
                              o + (/\?/.test(o) ? "&" : "?") + n
                            );
                        }
                      ),
                      un("fadingEffect", "apply"),
                      un("dropEffect", "init"),
                      un("cards", "init"),
                      g.scrollOverflow &&
                        (Vn = g.scrollOverflowHandler.init(g));
                  })(),
                  Ee(!0),
                  xe(!0),
                  x(g.autoScrolling, "internal"),
                  Pt(),
                  en(),
                  "complete" === t.readyState && Et(),
                  e.addEventListener("load", Et),
                  g.scrollOverflow || We(),
                  (function () {
                    for (var e = 1; e < 4; e++) Un = setTimeout(je, 350 * e);
                  })(),
                  Kn || yt("l"),
                  e.addEventListener("scroll", Ze),
                  e.addEventListener("hashchange", xt),
                  e.addEventListener("focus", kt),
                  e.addEventListener("blur", Rt),
                  e.addEventListener("resize", jt),
                  t.addEventListener("keydown", Lt),
                  t.addEventListener("keyup", Mt),
                  ["click", "touchstart"].forEach(function (e) {
                    t.addEventListener(e, Ie);
                  }),
                  g.normalScrollElements &&
                    (["mouseenter", "touchstart"].forEach(function (e) {
                      Ne(e, !1);
                    }),
                    ["mouseleave", "touchend"].forEach(function (e) {
                      Ne(e, !0);
                    })),
                  un("dragAndMove", "turnOffTouch"));
              var uo,
                fo,
                vo,
                po = !1,
                ho = 0,
                go = 0,
                mo = 0,
                So = 0,
                bo = new Date().getTime(),
                yo = 0,
                wo = 0,
                Eo = zn;
              return An;
            }
            pn();
          }
        );
      }),
        window.jQuery &&
          window.fullpage &&
          (function (e, t) {
            "use strict";
            e && t
              ? (e.fn.fullpage = function (n) {
                  (n = e.extend({}, n, { $: e })), new t(this[0], n);
                })
              : window.fp_utils.showError(
                  "error",
                  "jQuery is required to use the jQuery fullpage adapter!"
                );
          })(window.jQuery, window.fullpage);
    },
    function (e, t, n) {
      var o = n(5)(n(2), n(6), null, null, null);
      e.exports = o.exports;
    },
    function (e, t, n) {
      "use strict";
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      function i(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        a = n(0),
        s = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a),
        c = n(3),
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(c);
      t.default = {
        methods: {
          build: function () {
            var e = this.options.slideSelector || ".slide",
              t = this.options.sectionSelector || ".section",
              n = fp_utils.index(document.querySelector(t + ".active")),
              o = document.querySelector(t + ".active " + e + ".active"),
              r = o ? fp_utils.index(o) : -1;
            this.destroy(),
              n > -1 &&
                fp_utils.addClass(document.querySelectorAll(t)[n], "active"),
              r > -1 && fp_utils.addClass(o, "active"),
              this.init();
          },
          destroy: function () {
            "undefined" != typeof fullpage_api &&
              void 0 !== fullpage_api.destroy &&
              fullpage_api.destroy("all");
          },
          emitEvent: function (e, t) {
            this.$emit.apply(this, [i(e)].concat(r(t))),
              this.options.hasOwnProperty(e) && this.options[e].apply(this, t);
          },
          init: function () {
            this.api = new s.default(this.$refs.fullpage, this.options);
          },
        },
        mounted: function () {
          !this.skipInit && this.init();
        },
        beforeDestroy: function () {
          void 0 !== this.api && this.destroy();
        },
        data: function () {
          var e = this;
          return {
            events: u.EVENTS.reduce(function (t, n) {
              return l(
                {},
                t,
                o({}, n, function () {
                  for (
                    var t = arguments.length, o = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    o[r] = arguments[r];
                  e.emitEvent(n, o);
                })
              );
            }, {}),
            api: void 0,
          };
        },
        props: {
          options: { type: Object, required: !0 },
          skipInit: { type: Boolean, default: !1 },
        },
        watch: {
          options: {
            deep: !0,
            handler: function () {
              this.build();
            },
          },
        },
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.EVENTS = [
        "afterLoad",
        "onLeave",
        "afterRender",
        "afterResize",
        "afterResponsive",
        "afterSlideLoad",
        "onSlideLeave",
      ]),
        (t.METHODS = [
          "moveSectionUp",
          "moveSectionDown",
          "moveTo",
          "silentMoveTo",
          "moveSlideRight",
          "moveSlideLeft",
          "setAutoScrolling",
          "setFitToSection",
          "fitToSection",
          "setLockAnchors",
          "setAllowScrolling",
          "setKeyboardScrolling",
          "setRecordHistory",
          "setScrollingSpeed",
          "destroy",
          "reBuild",
          "setResponsive",
          "responsiveSlidesToSections",
          "responsiveSlidesToSlides",
        ]);
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
        e.component("full-page", l.default);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = t.FullPage = void 0);
      var i = n(1),
        l = o(i),
        a = n(0),
        s = o(a);
      "undefined" != typeof window && window.Vue && window.Vue.use(r),
        window.fullpage_api || (window.fullpage = s.default),
        (t.default = r);
      (t.FullPage = l.default), (t.version = "__VERSION__");
    },
    function (e, t) {
      e.exports = function (e, t, n, o, r) {
        var i,
          l = (e = e || {}),
          a = typeof e.default;
        ("object" !== a && "function" !== a) || ((i = e), (l = e.default));
        var s = "function" == typeof l ? l.options : l;
        t && ((s.render = t.render), (s.staticRenderFns = t.staticRenderFns)),
          o && (s._scopeId = o);
        var c;
        if (
          (r
            ? ((c = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  e ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                  n && n.call(this, e),
                  e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(r);
              }),
              (s._ssrRegister = c))
            : n && (c = n),
          c)
        ) {
          var u = s.functional,
            f = u ? s.render : s.beforeCreate;
          u
            ? (s.render = function (e, t) {
                return c.call(t), f(e, t);
              })
            : (s.beforeCreate = f ? [].concat(f, c) : [c]);
        }
        return { esModule: i, exports: l, options: s };
      };
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement;
          return (e._self._c || t)(
            "div",
            { ref: "fullpage" },
            [e._t("default")],
            2
          );
        },
        staticRenderFns: [],
      };
    },
  ]);
});
