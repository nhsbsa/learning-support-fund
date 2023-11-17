function nodeListForEach(e, t) {
  if (window.NodeList.prototype.forEach)
      return e.forEach(t);
  for (var n = 0; n < e.length; n++)
      t.call(window, e[n], n, e)
}
!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
          throw new Error("jQuery requires a window with a document");
      return t(e)
  }
  : t(e)
}("undefined" != typeof window ? window : this, function(k, e) {
  function s(e) {
      var t = !!e && "length"in e && e.length
        , n = fe.type(e);
      return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  function t(e, n, o) {
      if (fe.isFunction(n))
          return fe.grep(e, function(e, t) {
              return !!n.call(e, t, e) !== o
          });
      if (n.nodeType)
          return fe.grep(e, function(e) {
              return e === n !== o
          });
      if ("string" == typeof n) {
          if (ke.test(n))
              return fe.filter(n, e, o);
          n = fe.filter(n, e)
      }
      return fe.grep(e, function(e) {
          return -1 < fe.inArray(e, n) !== o
      })
  }
  function n(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; )
          ;
      return e
  }
  function u(e) {
      var n = {};
      return fe.each(e.match(Oe) || [], function(e, t) {
          n[t] = !0
      }),
      n
  }
  function i() {
      oe.addEventListener ? (oe.removeEventListener("DOMContentLoaded", r),
      k.removeEventListener("load", r)) : (oe.detachEvent("onreadystatechange", r),
      k.detachEvent("onload", r))
  }
  function r() {
      (oe.addEventListener || "load" === k.event.type || "complete" === oe.readyState) && (i(),
      fe.ready())
  }
  function l(e, t, n) {
      if (n === undefined && 1 === e.nodeType) {
          var o = "data-" + t.replace(Me, "-$1").toLowerCase();
          if ("string" == typeof (n = e.getAttribute(o))) {
              try {
                  n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $e.test(n) ? fe.parseJSON(n) : n)
              } catch (i) {}
              fe.data(e, t, n)
          } else
              n = undefined
      }
      return n
  }
  function c(e) {
      var t;
      for (t in e)
          if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t)
              return !1;
      return !0
  }
  function o(e, t, n, o) {
      if (De(e)) {
          var i, r, a = fe.expando, s = e.nodeType, l = s ? fe.cache : e, c = s ? e[a] : e[a] && a;
          if (c && l[c] && (o || l[c].data) || n !== undefined || "string" != typeof t)
              return c || (c = s ? e[a] = ne.pop() || fe.guid++ : a),
              l[c] || (l[c] = s ? {} : {
                  toJSON: fe.noop
              }),
              "object" != typeof t && "function" != typeof t || (o ? l[c] = fe.extend(l[c], t) : l[c].data = fe.extend(l[c].data, t)),
              r = l[c],
              o || (r.data || (r.data = {}),
              r = r.data),
              n !== undefined && (r[fe.camelCase(t)] = n),
              "string" == typeof t ? null == (i = r[t]) && (i = r[fe.camelCase(t)]) : i = r,
              i
      }
  }
  function a(e, t, n) {
      if (De(e)) {
          var o, i, r = e.nodeType, a = r ? fe.cache : e, s = r ? e[fe.expando] : fe.expando;
          if (a[s]) {
              if (t && (o = n ? a[s] : a[s].data)) {
                  i = (t = fe.isArray(t) ? t.concat(fe.map(t, fe.camelCase)) : t in o ? [t] : (t = fe.camelCase(t))in o ? [t] : t.split(" ")).length;
                  for (; i--; )
                      delete o[t[i]];
                  if (n ? !c(o) : !fe.isEmptyObject(o))
                      return
              }
              (n || (delete a[s].data,
              c(a[s]))) && (r ? fe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
          }
      }
  }
  function d(e, t, n, o) {
      var i, r = 1, a = 20, s = o ? function() {
          return o.cur()
      }
      : function() {
          return fe.css(e, t, "")
      }
      , l = s(), c = n && n[3] || (fe.cssNumber[t] ? "" : "px"), u = (fe.cssNumber[t] || "px" !== c && +l) && Pe.exec(fe.css(e, t));
      if (u && u[3] !== c)
          for (c = c || u[3],
          n = n || [],
          u = +l || 1; u /= r = r || ".5",
          fe.style(e, t, u + c),
          r !== (r = s() / l) && 1 !== r && --a; )
              ;
      return n && (u = +u || +l || 0,
      i = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
      o && (o.unit = c,
      o.start = u,
      o.end = i)),
      i
  }
  function g(e) {
      var t = Re.split("|")
        , n = e.createDocumentFragment();
      if (n.createElement)
          for (; t.length; )
              n.createElement(t.pop());
      return n
  }
  function v(e, t) {
      var n, o, i = 0, r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
      if (!r)
          for (r = [],
          n = e.childNodes || e; null != (o = n[i]); i++)
              !t || fe.nodeName(o, t) ? r.push(o) : fe.merge(r, v(o, t));
      return t === undefined || t && fe.nodeName(e, t) ? fe.merge([e], r) : r
  }
  function y(e, t) {
      for (var n, o = 0; null != (n = e[o]); o++)
          fe._data(n, "globalEval", !t || fe._data(t[o], "globalEval"))
  }
  function b(e) {
      Ue.test(e.type) && (e.defaultChecked = e.checked)
  }
  function m(e, t, n, o, i) {
      for (var r, a, s, l, c, u, d, p = e.length, f = g(t), h = [], m = 0; m < p; m++)
          if ((a = e[m]) || 0 === a)
              if ("object" === fe.type(a))
                  fe.merge(h, a.nodeType ? [a] : a);
              else if (ze.test(a)) {
                  for (l = l || f.appendChild(t.createElement("div")),
                  c = (qe.exec(a) || ["", ""])[1].toLowerCase(),
                  d = Xe[c] || Xe._default,
                  l.innerHTML = d[1] + fe.htmlPrefilter(a) + d[2],
                  r = d[0]; r--; )
                      l = l.lastChild;
                  if (!de.leadingWhitespace && We.test(a) && h.push(t.createTextNode(We.exec(a)[0])),
                  !de.tbody)
                      for (r = (a = "table" !== c || Ye.test(a) ? "<table>" !== d[1] || Ye.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; r--; )
                          fe.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
                  for (fe.merge(h, l.childNodes),
                  l.textContent = ""; l.firstChild; )
                      l.removeChild(l.firstChild);
                  l = f.lastChild
              } else
                  h.push(t.createTextNode(a));
      for (l && f.removeChild(l),
      de.appendChecked || fe.grep(v(h, "input"), b),
      m = 0; a = h[m++]; )
          if (o && -1 < fe.inArray(a, o))
              i && i.push(a);
          else if (s = fe.contains(a.ownerDocument, a),
          l = v(f.appendChild(a), "script"),
          s && y(l),
          n)
              for (r = 0; a = l[r++]; )
                  Ke.test(a.type || "") && n.push(a);
      return l = null,
      f
  }
  function p() {
      return !0
  }
  function f() {
      return !1
  }
  function h() {
      try {
          return oe.activeElement
      } catch (e) {}
  }
  function w(e, t, n, o, i, r) {
      var a, s;
      if ("object" == typeof t) {
          for (s in "string" != typeof n && (o = o || n,
          n = undefined),
          t)
              w(e, s, n, o, t[s], r);
          return e
      }
      if (null == o && null == i ? (i = n,
      o = n = undefined) : null == i && ("string" == typeof n ? (i = o,
      o = undefined) : (i = o,
      o = n,
      n = undefined)),
      !1 === i)
          i = f;
      else if (!i)
          return e;
      return 1 === r && (a = i,
      (i = function(e) {
          return fe().off(e),
          a.apply(this, arguments)
      }
      ).guid = a.guid || (a.guid = fe.guid++)),
      e.each(function() {
          fe.event.add(this, t, i, o, n)
      })
  }
  function E(e, t) {
      return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }
  function x(e) {
      return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type,
      e
  }
  function T(e) {
      var t = st.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"),
      e
  }
  function S(e, t) {
      if (1 === t.nodeType && fe.hasData(e)) {
          var n, o, i, r = fe._data(e), a = fe._data(t, r), s = r.events;
          if (s)
              for (n in delete a.handle,
              a.events = {},
              s)
                  for (o = 0,
                  i = s[n].length; o < i; o++)
                      fe.event.add(t, n, s[n][o]);
          a.data && (a.data = fe.extend({}, a.data))
      }
  }
  function C(e, t) {
      var n, o, i;
      if (1 === t.nodeType) {
          if (n = t.nodeName.toLowerCase(),
          !de.noCloneEvent && t[fe.expando]) {
              for (o in (i = fe._data(t)).events)
                  fe.removeEvent(t, o, i.handle);
              t.removeAttribute(fe.expando)
          }
          "script" === n && t.text !== e.text ? (x(t).text = e.text,
          T(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
          de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ue.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
          t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }
  }
  function L(n, o, i, r) {
      o = re.apply([], o);
      var e, t, a, s, l, c, u = 0, d = n.length, p = d - 1, f = o[0], h = fe.isFunction(f);
      if (h || 1 < d && "string" == typeof f && !de.checkClone && at.test(f))
          return n.each(function(e) {
              var t = n.eq(e);
              h && (o[0] = f.call(this, e, t.html())),
              L(t, o, i, r)
          });
      if (d && (e = (c = m(o, n[0].ownerDocument, !1, n, r)).firstChild,
      1 === c.childNodes.length && (c = e),
      e || r)) {
          for (a = (s = fe.map(v(c, "script"), x)).length; u < d; u++)
              t = c,
              u !== p && (t = fe.clone(t, !0, !0),
              a && fe.merge(s, v(t, "script"))),
              i.call(n[u], t, u);
          if (a)
              for (l = s[s.length - 1].ownerDocument,
              fe.map(s, T),
              u = 0; u < a; u++)
                  t = s[u],
                  Ke.test(t.type || "") && !fe._data(t, "globalEval") && fe.contains(l, t) && (t.src ? fe._evalUrl && fe._evalUrl(t.src) : fe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(lt, "")));
          c = e = null
      }
      return n
  }
  function _(e, t, n) {
      for (var o, i = t ? fe.filter(t, e) : e, r = 0; null != (o = i[r]); r++)
          n || 1 !== o.nodeType || fe.cleanData(v(o)),
          o.parentNode && (n && fe.contains(o.ownerDocument, o) && y(v(o, "script")),
          o.parentNode.removeChild(o));
      return e
  }
  function A(e, t) {
      var n = fe(t.createElement(e)).appendTo(t.body)
        , o = fe.css(n[0], "display");
      return n.detach(),
      o
  }
  function O(e) {
      var t = oe
        , n = dt[e];
      return n || ("none" !== (n = A(e, t)) && n || ((t = ((ut = (ut || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ut[0].contentDocument).document).write(),
      t.close(),
      n = A(e, t),
      ut.detach()),
      dt[e] = n),
      n
  }
  function j(e, t) {
      return {
          get: function() {
              if (!e())
                  return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  function D(e) {
      if (e in Ct)
          return e;
      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--; )
          if ((e = St[n] + t)in Ct)
              return e
  }
  function $(e, t) {
      for (var n, o, i, r = [], a = 0, s = e.length; a < s; a++)
          (o = e[a]).style && (r[a] = fe._data(o, "olddisplay"),
          n = o.style.display,
          t ? (r[a] || "none" !== n || (o.style.display = ""),
          "" === o.style.display && Fe(o) && (r[a] = fe._data(o, "olddisplay", O(o.nodeName)))) : (i = Fe(o),
          (n && "none" !== n || !i) && fe._data(o, "olddisplay", i ? n : fe.css(o, "display"))));
      for (a = 0; a < s; a++)
          (o = e[a]).style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[a] || "" : "none"));
      return e
  }
  function M(e, t, n) {
      var o = xt.exec(t);
      return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
  }
  function N(e, t, n, o, i) {
      for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2)
          "margin" === n && (a += fe.css(e, n + Ve[r], !0, i)),
          o ? ("content" === n && (a -= fe.css(e, "padding" + Ve[r], !0, i)),
          "margin" !== n && (a -= fe.css(e, "border" + Ve[r] + "Width", !0, i))) : (a += fe.css(e, "padding" + Ve[r], !0, i),
          "padding" !== n && (a += fe.css(e, "border" + Ve[r] + "Width", !0, i)));
      return a
  }
  function H(e, t, n) {
      var o = !0
        , i = "width" === t ? e.offsetWidth : e.offsetHeight
        , r = gt(e)
        , a = de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r);
      if (i <= 0 || null == i) {
          if (((i = vt(e, t, r)) < 0 || null == i) && (i = e.style[t]),
          ft.test(i))
              return i;
          o = a && (de.boxSizingReliable() || i === e.style[t]),
          i = parseFloat(i) || 0
      }
      return i + N(e, t, n || (a ? "border" : "content"), o, r) + "px"
  }
  function G(e, t, n, o, i) {
      return new G.prototype.init(e,t,n,o,i)
  }
  function I() {
      return k.setTimeout(function() {
          Lt = undefined
      }),
      Lt = fe.now()
  }
  function P(e, t) {
      var n, o = {
          height: e
      }, i = 0;
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
          o["margin" + (n = Ve[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e),
      o
  }
  function V(e, t, n) {
      for (var o, i = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, a = i.length; r < a; r++)
          if (o = i[r].call(n, t, e))
              return o
  }
  function F(t, e, n) {
      var o, i, r, a, s, l, c, u = this, d = {}, p = t.style, f = t.nodeType && Fe(t), h = fe._data(t, "fxshow");
      for (o in n.queue || (null == (s = fe._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
      l = s.empty.fire,
      s.empty.fire = function() {
          s.unqueued || l()
      }
      ),
      s.unqueued++,
      u.always(function() {
          u.always(function() {
              s.unqueued--,
              fe.queue(t, "fx").length || s.empty.fire()
          })
      })),
      1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
      "inline" === ("none" === (c = fe.css(t, "display")) ? fe._data(t, "olddisplay") || O(t.nodeName) : c) && "none" === fe.css(t, "float") && (de.inlineBlockNeedsLayout && "inline" !== O(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
      n.overflow && (p.overflow = "hidden",
      de.shrinkWrapBlocks() || u.always(function() {
          p.overflow = n.overflow[0],
          p.overflowX = n.overflow[1],
          p.overflowY = n.overflow[2]
      })),
      e)
          if (i = e[o],
          Mt.exec(i)) {
              if (delete e[o],
              r = r || "toggle" === i,
              i === (f ? "hide" : "show")) {
                  if ("show" !== i || !h || h[o] === undefined)
                      continue;
                  f = !0
              }
              d[o] = h && h[o] || fe.style(t, o)
          } else
              c = undefined;
      if (fe.isEmptyObject(d))
          "inline" === ("none" === c ? O(t.nodeName) : c) && (p.display = c);
      else
          for (o in h ? "hidden"in h && (f = h.hidden) : h = fe._data(t, "fxshow", {}),
          r && (h.hidden = !f),
          f ? fe(t).show() : u.done(function() {
              fe(t).hide()
          }),
          u.done(function() {
              var e;
              for (e in fe._removeData(t, "fxshow"),
              d)
                  fe.style(t, e, d[e])
          }),
          d)
              a = V(f ? h[o] : 0, o, u),
              o in h || (h[o] = a.start,
              f && (a.end = a.start,
              a.start = "width" === o || "height" === o ? 1 : 0))
  }
  function B(e, t) {
      var n, o, i, r, a;
      for (n in e)
          if (i = t[o = fe.camelCase(n)],
          r = e[n],
          fe.isArray(r) && (i = r[1],
          r = e[n] = r[0]),
          n !== o && (e[o] = r,
          delete e[n]),
          (a = fe.cssHooks[o]) && "expand"in a)
              for (n in r = a.expand(r),
              delete e[o],
              r)
                  n in e || (e[n] = r[n],
                  t[n] = i);
          else
              t[o] = i
  }
  function U(r, e, t) {
      var n, a, o = 0, i = U.prefilters.length, s = fe.Deferred().always(function() {
          delete l.elem
      }), l = function() {
          if (a)
              return !1;
          for (var e = Lt || I(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), o = 0, i = c.tweens.length; o < i; o++)
              c.tweens[o].run(n);
          return s.notifyWith(r, [c, n, t]),
          n < 1 && i ? t : (s.resolveWith(r, [c]),
          !1)
      }, c = s.promise({
          elem: r,
          props: fe.extend({}, e),
          opts: fe.extend(!0, {
              specialEasing: {},
              easing: fe.easing._default
          }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: Lt || I(),
          duration: t.duration,
          tweens: [],
          createTween: function(e, t) {
              var n = fe.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
              return c.tweens.push(n),
              n
          },
          stop: function(e) {
              var t = 0
                , n = e ? c.tweens.length : 0;
              if (a)
                  return this;
              for (a = !0; t < n; t++)
                  c.tweens[t].run(1);
              return e ? (s.notifyWith(r, [c, 1, 0]),
              s.resolveWith(r, [c, e])) : s.rejectWith(r, [c, e]),
              this
          }
      }), u = c.props;
      for (B(u, c.opts.specialEasing); o < i; o++)
          if (n = U.prefilters[o].call(c, r, u, c.opts))
              return fe.isFunction(n.stop) && (fe._queueHooks(c.elem, c.opts.queue).stop = fe.proxy(n.stop, n)),
              n;
      return fe.map(u, V, c),
      fe.isFunction(c.opts.start) && c.opts.start.call(r, c),
      fe.fx.timer(fe.extend(l, {
          elem: r,
          anim: c,
          queue: c.opts.queue
      })),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  function q(e) {
      return fe.attr(e, "class") || ""
  }
  function K(r) {
      return function(e, t) {
          "string" != typeof e && (t = e,
          e = "*");
          var n, o = 0, i = e.toLowerCase().match(Oe) || [];
          if (fe.isFunction(t))
              for (; n = i[o++]; )
                  "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                  (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
      }
  }
  function W(t, i, r, a) {
      function s(e) {
          var o;
          return l[e] = !0,
          fe.each(t[e] || [], function(e, t) {
              var n = t(i, r, a);
              return "string" != typeof n || c || l[n] ? c ? !(o = n) : void 0 : (i.dataTypes.unshift(n),
              s(n),
              !1)
          }),
          o
      }
      var l = {}
        , c = t === an;
      return s(i.dataTypes[0]) || !l["*"] && s("*")
  }
  function R(e, t) {
      var n, o, i = fe.ajaxSettings.flatOptions || {};
      for (o in t)
          t[o] !== undefined && ((i[o] ? e : n || (n = {}))[o] = t[o]);
      return n && fe.extend(!0, e, n),
      e
  }
  function X(e, t, n) {
      for (var o, i, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
          i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
          for (a in s)
              if (s[a] && s[a].test(i)) {
                  l.unshift(a);
                  break
              }
      if (l[0]in n)
          r = l[0];
      else {
          for (a in n) {
              if (!l[0] || e.converters[a + " " + l[0]]) {
                  r = a;
                  break
              }
              o || (o = a)
          }
          r = r || o
      }
      if (r)
          return r !== l[0] && l.unshift(r),
          n[r]
  }
  function z(e, t, n, o) {
      var i, r, a, s, l, c = {}, u = e.dataTypes.slice();
      if (u[1])
          for (a in e.converters)
              c[a.toLowerCase()] = e.converters[a];
      for (r = u.shift(); r; )
          if (e.responseFields[r] && (n[e.responseFields[r]] = t),
          !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          l = r,
          r = u.shift())
              if ("*" === r)
                  r = l;
              else if ("*" !== l && l !== r) {
                  if (!(a = c[l + " " + r] || c["* " + r]))
                      for (i in c)
                          if ((s = i.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                              !0 === a ? a = c[i] : !0 !== c[i] && (r = s[0],
                              u.unshift(s[1]));
                              break
                          }
                  if (!0 !== a)
                      if (a && e["throws"])
                          t = a(t);
                      else
                          try {
                              t = a(t)
                          } catch (d) {
                              return {
                                  state: "parsererror",
                                  error: a ? d : "No conversion from " + l + " to " + r
                              }
                          }
              }
      return {
          state: "success",
          data: t
      }
  }
  function Y(e) {
      return e.style && e.style.display || fe.css(e, "display")
  }
  function J(e) {
      if (!fe.contains(e.ownerDocument || oe, e))
          return !0;
      for (; e && 1 === e.nodeType; ) {
          if ("none" === Y(e) || "hidden" === e.type)
              return !0;
          e = e.parentNode
      }
      return !1
  }
  function Q(n, e, o, i) {
      var t;
      if (fe.isArray(e))
          fe.each(e, function(e, t) {
              o || dn.test(n) ? i(n, t) : Q(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
          });
      else if (o || "object" !== fe.type(e))
          i(n, e);
      else
          for (t in e)
              Q(n + "[" + t + "]", e[t], o, i)
  }
  function Z() {
      try {
          return new k.XMLHttpRequest
      } catch (e) {}
  }
  function ee() {
      try {
          return new k.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
  }
  function te(e) {
      return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }
  var ne = []
    , oe = k.document
    , ie = ne.slice
    , re = ne.concat
    , ae = ne.push
    , se = ne.indexOf
    , le = {}
    , ce = le.toString
    , ue = le.hasOwnProperty
    , de = {}
    , pe = "1.12.4"
    , fe = function(e, t) {
      return new fe.fn.init(e,t)
  }
    , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , me = /^-ms-/
    , ge = /-([\da-z])/gi
    , ve = function(e, t) {
      return t.toUpperCase()
  };
  fe.fn = fe.prototype = {
      jquery: pe,
      constructor: fe,
      selector: "",
      length: 0,
      toArray: function() {
          return ie.call(this)
      },
      get: function(e) {
          return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
      },
      pushStack: function(e) {
          var t = fe.merge(this.constructor(), e);
          return t.prevObject = this,
          t.context = this.context,
          t
      },
      each: function(e) {
          return fe.each(this, e)
      },
      map: function(n) {
          return this.pushStack(fe.map(this, function(e, t) {
              return n.call(e, t, e)
          }))
      },
      slice: function() {
          return this.pushStack(ie.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length
            , n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: ae,
      sort: ne.sort,
      splice: ne.splice
  },
  fe.extend = fe.fn.extend = function(e) {
      var t, n, o, i, r, a, s = e || {}, l = 1, c = arguments.length, u = !1;
      for ("boolean" == typeof s && (u = s,
      s = arguments[l] || {},
      l++),
      "object" == typeof s || fe.isFunction(s) || (s = {}),
      l === c && (s = this,
      l--); l < c; l++)
          if (null != (r = arguments[l]))
              for (i in r)
                  t = s[i],
                  s !== (o = r[i]) && (u && o && (fe.isPlainObject(o) || (n = fe.isArray(o))) ? (n ? (n = !1,
                  a = t && fe.isArray(t) ? t : []) : a = t && fe.isPlainObject(t) ? t : {},
                  s[i] = fe.extend(u, a, o)) : o !== undefined && (s[i] = o));
      return s
  }
  ,
  fe.extend({
      expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
          return "function" === fe.type(e)
      },
      isArray: Array.isArray || function(e) {
          return "array" === fe.type(e)
      }
      ,
      isWindow: function(e) {
          return null != e && e == e.window
      },
      isNumeric: function(e) {
          var t = e && e.toString();
          return !fe.isArray(e) && 0 <= t - parseFloat(t) + 1
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e)
              return !1;
          return !0
      },
      isPlainObject: function(e) {
          var t;
          if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e))
              return !1;
          try {
              if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf"))
                  return !1
          } catch (n) {
              return !1
          }
          if (!de.ownFirst)
              for (t in e)
                  return ue.call(e, t);
          for (t in e)
              ;
          return t === undefined || ue.call(e, t)
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
          e && fe.trim(e) && (k.execScript || function(e) {
              k.eval.call(k, e)
          }
          )(e)
      },
      camelCase: function(e) {
          return e.replace(me, "ms-").replace(ge, ve)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
          var n, o = 0;
          if (s(e))
              for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++)
                  ;
          else
              for (o in e)
                  if (!1 === t.call(e[o], o, e[o]))
                      break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(he, "")
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (s(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)),
          n
      },
      inArray: function(e, t, n) {
          var o;
          if (t) {
              if (se)
                  return se.call(t, e, n);
              for (o = t.length,
              n = n ? n < 0 ? Math.max(0, o + n) : n : 0; n < o; n++)
                  if (n in t && t[n] === e)
                      return n
          }
          return -1
      },
      merge: function(e, t) {
          for (var n = +t.length, o = 0, i = e.length; o < n; )
              e[i++] = t[o++];
          if (n != n)
              for (; t[o] !== undefined; )
                  e[i++] = t[o++];
          return e.length = i,
          e
      },
      grep: function(e, t, n) {
          for (var o = [], i = 0, r = e.length, a = !n; i < r; i++)
              !t(e[i], i) !== a && o.push(e[i]);
          return o
      },
      map: function(e, t, n) {
          var o, i, r = 0, a = [];
          if (s(e))
              for (o = e.length; r < o; r++)
                  null != (i = t(e[r], r, n)) && a.push(i);
          else
              for (r in e)
                  null != (i = t(e[r], r, n)) && a.push(i);
          return re.apply([], a)
      },
      guid: 1,
      proxy: function(e, t) {
          var n, o, i;
          return "string" == typeof t && (i = e[t],
          t = e,
          e = i),
          fe.isFunction(e) ? (n = ie.call(arguments, 2),
          (o = function() {
              return e.apply(t || this, n.concat(ie.call(arguments)))
          }
          ).guid = e.guid = e.guid || fe.guid++,
          o) : undefined
      },
      now: function() {
          return +new Date
      },
      support: de
  }),
  "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]),
  fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      le["[object " + t + "]"] = t.toLowerCase()
  });
  var ye = function(n) {
      function w(e, t, n, o) {
          var i, r, a, s, l, c, u, d, p = t && t.ownerDocument, f = t ? t.nodeType : 9;
          if (n = n || [],
          "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
              return n;
          if (!o && ((t ? t.ownerDocument || t : V) !== D && j(t),
          t = t || D,
          M)) {
              if (11 !== f && (c = ve.exec(e)))
                  if (i = c[1]) {
                      if (9 === f) {
                          if (!(a = t.getElementById(i)))
                              return n;
                          if (a.id === i)
                              return n.push(a),
                              n
                      } else if (p && (a = p.getElementById(i)) && I(t, a) && a.id === i)
                          return n.push(a),
                          n
                  } else {
                      if (c[2])
                          return Q.apply(n, t.getElementsByTagName(e)),
                          n;
                      if ((i = c[3]) && v.getElementsByClassName && t.getElementsByClassName)
                          return Q.apply(n, t.getElementsByClassName(i)),
                          n
                  }
              if (v.qsa && !K[e + " "] && (!N || !N.test(e))) {
                  if (1 !== f)
                      p = t,
                      d = e;
                  else if ("object" !== t.nodeName.toLowerCase()) {
                      for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = P),
                      r = (u = S(e)).length,
                      l = pe.test(s) ? "#" + s : "[id='" + s + "']"; r--; )
                          u[r] = l + " " + g(u[r]);
                      d = u.join(","),
                      p = ye.test(e) && m(t.parentNode) || t
                  }
                  if (d)
                      try {
                          return Q.apply(n, p.querySelectorAll(d)),
                          n
                      } catch (h) {} finally {
                          s === P && t.removeAttribute("id")
                      }
              }
          }
          return L(e.replace(se, "$1"), t, n, o)
      }
      function e() {
          function n(e, t) {
              return o.push(e + " ") > x.cacheLength && delete n[o.shift()],
              n[e + " "] = t
          }
          var o = [];
          return n
      }
      function l(e) {
          return e[P] = !0,
          e
      }
      function i(e) {
          var t = D.createElement("div");
          try {
              return !!e(t)
          } catch (n) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t),
              t = null
          }
      }
      function t(e, t) {
          for (var n = e.split("|"), o = n.length; o--; )
              x.attrHandle[n[o]] = t
      }
      function c(e, t) {
          var n = t && e
            , o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || R) - (~e.sourceIndex || R);
          if (o)
              return o;
          if (n)
              for (; n = n.nextSibling; )
                  if (n === t)
                      return -1;
          return e ? 1 : -1
      }
      function o(t) {
          return function(e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
          }
      }
      function r(n) {
          return function(e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n
          }
      }
      function a(a) {
          return l(function(r) {
              return r = +r,
              l(function(e, t) {
                  for (var n, o = a([], e.length, r), i = o.length; i--; )
                      e[n = o[i]] && (e[n] = !(t[n] = e[n]))
              })
          })
      }
      function m(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      function s() {}
      function g(e) {
          for (var t = 0, n = e.length, o = ""; t < n; t++)
              o += e[t].value;
          return o
      }
      function d(s, e, t) {
          var l = e.dir
            , c = t && "parentNode" === l
            , u = B++;
          return e.first ? function(e, t, n) {
              for (; e = e[l]; )
                  if (1 === e.nodeType || c)
                      return s(e, t, n)
          }
          : function(e, t, n) {
              var o, i, r, a = [F, u];
              if (n) {
                  for (; e = e[l]; )
                      if ((1 === e.nodeType || c) && s(e, t, n))
                          return !0
              } else
                  for (; e = e[l]; )
                      if (1 === e.nodeType || c) {
                          if ((o = (i = (r = e[P] || (e[P] = {}))[e.uniqueID] || (r[e.uniqueID] = {}))[l]) && o[0] === F && o[1] === u)
                              return a[2] = o[2];
                          if ((i[l] = a)[2] = s(e, t, n))
                              return !0
                      }
          }
      }
      function p(i) {
          return 1 < i.length ? function(e, t, n) {
              for (var o = i.length; o--; )
                  if (!i[o](e, t, n))
                      return !1;
              return !0
          }
          : i[0]
      }
      function y(e, t, n) {
          for (var o = 0, i = t.length; o < i; o++)
              w(e, t[o], n);
          return n
      }
      function E(e, t, n, o, i) {
          for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
              (r = e[s]) && (n && !n(r, o, i) || (a.push(r),
              c && t.push(s)));
          return a
      }
      function b(f, h, m, g, v, e) {
          return g && !g[P] && (g = b(g)),
          v && !v[P] && (v = b(v, e)),
          l(function(e, t, n, o) {
              var i, r, a, s = [], l = [], c = t.length, u = e || y(h || "*", n.nodeType ? [n] : n, []), d = !f || !e && h ? u : E(u, s, f, n, o), p = m ? v || (e ? f : c || g) ? [] : t : d;
              if (m && m(d, p, n, o),
              g)
                  for (i = E(p, l),
                  g(i, [], n, o),
                  r = i.length; r--; )
                      (a = i[r]) && (p[l[r]] = !(d[l[r]] = a));
              if (e) {
                  if (v || f) {
                      if (v) {
                          for (i = [],
                          r = p.length; r--; )
                              (a = p[r]) && i.push(d[r] = a);
                          v(null, p = [], i, o)
                      }
                      for (r = p.length; r--; )
                          (a = p[r]) && -1 < (i = v ? ee(e, a) : s[r]) && (e[i] = !(t[i] = a))
                  }
              } else
                  p = E(p === t ? p.splice(c, p.length) : p),
                  v ? v(null, t, p, o) : Q.apply(t, p)
          })
      }
      function f(e) {
          for (var i, t, n, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = d(function(e) {
              return e === i
          }, a, !0), c = d(function(e) {
              return -1 < ee(i, e)
          }, a, !0), u = [function(e, t, n) {
              var o = !r && (n || t !== _) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n));
              return i = null,
              o
          }
          ]; s < o; s++)
              if (t = x.relative[e[s].type])
                  u = [d(p(u), t)];
              else {
                  if ((t = x.filter[e[s].type].apply(null, e[s].matches))[P]) {
                      for (n = ++s; n < o && !x.relative[e[n].type]; n++)
                          ;
                      return b(1 < s && p(u), 1 < s && g(e.slice(0, s - 1).concat({
                          value: " " === e[s - 2].type ? "*" : ""
                      })).replace(se, "$1"), t, s < n && f(e.slice(s, n)), n < o && f(e = e.slice(n)), n < o && g(e))
                  }
                  u.push(t)
              }
          return p(u)
      }
      function u(g, v) {
          var y = 0 < v.length
            , b = 0 < g.length
            , e = function(e, t, n, o, i) {
              var r, a, s, l = 0, c = "0", u = e && [], d = [], p = _, f = e || b && x.find.TAG("*", i), h = F += null == p ? 1 : Math.random() || .1, m = f.length;
              for (i && (_ = t === D || t || i); c !== m && null != (r = f[c]); c++) {
                  if (b && r) {
                      for (a = 0,
                      t || r.ownerDocument === D || (j(r),
                      n = !M); s = g[a++]; )
                          if (s(r, t || D, n)) {
                              o.push(r);
                              break
                          }
                      i && (F = h)
                  }
                  y && ((r = !s && r) && l--,
                  e && u.push(r))
              }
              if (l += c,
              y && c !== l) {
                  for (a = 0; s = v[a++]; )
                      s(u, d, t, n);
                  if (e) {
                      if (0 < l)
                          for (; c--; )
                              u[c] || d[c] || (d[c] = Y.call(o));
                      d = E(d)
                  }
                  Q.apply(o, d),
                  i && !e && 0 < d.length && 1 < l + v.length && w.uniqueSort(o)
              }
              return i && (F = h,
              _ = p),
              u
          };
          return y ? l(e) : e
      }
      var h, v, x, k, T, S, C, L, _, A, O, j, D, $, M, N, H, G, I, P = "sizzle" + 1 * new Date, V = n.document, F = 0, B = 0, U = e(), q = e(), K = e(), W = function(e, t) {
          return e === t && (O = !0),
          0
      }, R = 1 << 31, X = {}.hasOwnProperty, z = [], Y = z.pop, J = z.push, Q = z.push, Z = z.slice, ee = function(e, t) {
          for (var n = 0, o = e.length; n < o; n++)
              if (e[n] === t)
                  return n;
          return -1
      }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", re = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(re), pe = new RegExp("^" + oe + "$"), fe = {
          ID: new RegExp("^#(" + oe + ")"),
          CLASS: new RegExp("^\\.(" + oe + ")"),
          TAG: new RegExp("^(" + oe + "|[*])"),
          ATTR: new RegExp("^" + ie),
          PSEUDO: new RegExp("^" + re),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
          bool: new RegExp("^(?:" + te + ")$","i"),
          needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
      }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), Ee = function(e, t, n) {
          var o = "0x" + t - 65536;
          return o != o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
      }, xe = function() {
          j()
      };
      try {
          Q.apply(z = Z.call(V.childNodes), V.childNodes),
          z[V.childNodes.length].nodeType
      } catch (ke) {
          Q = {
              apply: z.length ? function(e, t) {
                  J.apply(e, Z.call(t))
              }
              : function(e, t) {
                  for (var n = e.length, o = 0; e[n++] = t[o++]; )
                      ;
                  e.length = n - 1
              }
          }
      }
      for (h in v = w.support = {},
      T = w.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }
      ,
      j = w.setDocument = function(e) {
          var t, n, o = e ? e.ownerDocument || e : V;
          return o !== D && 9 === o.nodeType && o.documentElement && ($ = (D = o).documentElement,
          M = !T(D),
          (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
          v.attributes = i(function(e) {
              return e.className = "i",
              !e.getAttribute("className")
          }),
          v.getElementsByTagName = i(function(e) {
              return e.appendChild(D.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          v.getElementsByClassName = ge.test(D.getElementsByClassName),
          v.getById = i(function(e) {
              return $.appendChild(e).id = P,
              !D.getElementsByName || !D.getElementsByName(P).length
          }),
          v.getById ? (x.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && M) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
              }
          }
          ,
          x.filter.ID = function(e) {
              var t = e.replace(we, Ee);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }
          ) : (delete x.find.ID,
          x.filter.ID = function(e) {
              var n = e.replace(we, Ee);
              return function(e) {
                  var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return t && t.value === n
              }
          }
          ),
          x.find.TAG = v.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
          }
          : function(e, t) {
              var n, o = [], i = 0, r = t.getElementsByTagName(e);
              if ("*" !== e)
                  return r;
              for (; n = r[i++]; )
                  1 === n.nodeType && o.push(n);
              return o
          }
          ,
          x.find.CLASS = v.getElementsByClassName && function(e, t) {
              if ("undefined" != typeof t.getElementsByClassName && M)
                  return t.getElementsByClassName(e)
          }
          ,
          H = [],
          N = [],
          (v.qsa = ge.test(D.querySelectorAll)) && (i(function(e) {
              $.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>",
              e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"),
              e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"),
              e.querySelectorAll("[id~=" + P + "-]").length || N.push("~="),
              e.querySelectorAll(":checked").length || N.push(":checked"),
              e.querySelectorAll("a#" + P + "+*").length || N.push(".#.+[+~]")
          }),
          i(function(e) {
              var t = D.createElement("input");
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="),
              e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              N.push(",.*:")
          })),
          (v.matchesSelector = ge.test(G = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function(e) {
              v.disconnectedMatch = G.call(e, "div"),
              G.call(e, "[s!='']:x"),
              H.push("!=", re)
          }),
          N = N.length && new RegExp(N.join("|")),
          H = H.length && new RegExp(H.join("|")),
          t = ge.test($.compareDocumentPosition),
          I = t || ge.test($.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e
                , o = t && t.parentNode;
              return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
          }
          : function(e, t) {
              if (t)
                  for (; t = t.parentNode; )
                      if (t === e)
                          return !0;
              return !1
          }
          ,
          W = t ? function(e, t) {
              if (e === t)
                  return O = !0,
                  0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === V && I(V, e) ? -1 : t === D || t.ownerDocument === V && I(V, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
          }
          : function(e, t) {
              if (e === t)
                  return O = !0,
                  0;
              var n, o = 0, i = e.parentNode, r = t.parentNode, a = [e], s = [t];
              if (!i || !r)
                  return e === D ? -1 : t === D ? 1 : i ? -1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
              if (i === r)
                  return c(e, t);
              for (n = e; n = n.parentNode; )
                  a.unshift(n);
              for (n = t; n = n.parentNode; )
                  s.unshift(n);
              for (; a[o] === s[o]; )
                  o++;
              return o ? c(a[o], s[o]) : a[o] === V ? -1 : s[o] === V ? 1 : 0
          }
          ),
          D
      }
      ,
      w.matches = function(e, t) {
          return w(e, null, null, t)
      }
      ,
      w.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== D && j(e),
          t = t.replace(ue, "='$1']"),
          v.matchesSelector && M && !K[t + " "] && (!H || !H.test(t)) && (!N || !N.test(t)))
              try {
                  var n = G.call(e, t);
                  if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                      return n
              } catch (ke) {}
          return 0 < w(t, D, null, [e]).length
      }
      ,
      w.contains = function(e, t) {
          return (e.ownerDocument || e) !== D && j(e),
          I(e, t)
      }
      ,
      w.attr = function(e, t) {
          (e.ownerDocument || e) !== D && j(e);
          var n = x.attrHandle[t.toLowerCase()]
            , o = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !M) : undefined;
          return o !== undefined ? o : v.attributes || !M ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }
      ,
      w.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      w.uniqueSort = function(e) {
          var t, n = [], o = 0, i = 0;
          if (O = !v.detectDuplicates,
          A = !v.sortStable && e.slice(0),
          e.sort(W),
          O) {
              for (; t = e[i++]; )
                  t === e[i] && (o = n.push(i));
              for (; o--; )
                  e.splice(n[o], 1)
          }
          return A = null,
          e
      }
      ,
      k = w.getText = function(e) {
          var t, n = "", o = 0, i = e.nodeType;
          if (i) {
              if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent)
                      return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                      n += k(e)
              } else if (3 === i || 4 === i)
                  return e.nodeValue
          } else
              for (; t = e[o++]; )
                  n += k(t);
          return n
      }
      ,
      (x = w.selectors = {
          cacheLength: 50,
          createPseudo: l,
          match: fe,
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
                  return e[1] = e[1].replace(we, Ee),
                  e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ee),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(),
                  "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]),
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]),
                  e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                  e[2] = n.slice(0, t)),
                  e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(we, Ee).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = U[e + " "];
                  return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(n, o, i) {
                  return function(e) {
                      var t = w.attr(e, n);
                      return null == t ? "!=" === o : !o || (t += "",
                      "=" === o ? t === i : "!=" === o ? t !== i : "^=" === o ? i && 0 === t.indexOf(i) : "*=" === o ? i && -1 < t.indexOf(i) : "$=" === o ? i && t.slice(-i.length) === i : "~=" === o ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(i) : "|=" === o && (t === i || t.slice(0, i.length + 1) === i + "-"))
                  }
              },
              CHILD: function(h, e, t, m, g) {
                  var v = "nth" !== h.slice(0, 3)
                    , y = "last" !== h.slice(-4)
                    , b = "of-type" === e;
                  return 1 === m && 0 === g ? function(e) {
                      return !!e.parentNode
                  }
                  : function(e, t, n) {
                      var o, i, r, a, s, l, c = v !== y ? "nextSibling" : "previousSibling", u = e.parentNode, d = b && e.nodeName.toLowerCase(), p = !n && !b, f = !1;
                      if (u) {
                          if (v) {
                              for (; c; ) {
                                  for (a = e; a = a[c]; )
                                      if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType)
                                          return !1;
                                  l = c = "only" === h && !l && "nextSibling"
                              }
                              return !0
                          }
                          if (l = [y ? u.firstChild : u.lastChild],
                          y && p) {
                              for (f = (s = (o = (i = (r = (a = u)[P] || (a[P] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === F && o[1]) && o[2],
                              a = s && u.childNodes[s]; a = ++s && a && a[c] || (f = s = 0) || l.pop(); )
                                  if (1 === a.nodeType && ++f && a === e) {
                                      i[h] = [F, s, f];
                                      break
                                  }
                          } else if (p && (f = s = (o = (i = (r = (a = e)[P] || (a[P] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === F && o[1]),
                          !1 === f)
                              for (; (a = ++s && a && a[c] || (f = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++f || (p && ((i = (r = a[P] || (a[P] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] = [F, f]),
                              a !== e)); )
                                  ;
                          return (f -= g) === m || f % m == 0 && 0 <= f / m
                      }
                  }
              },
              PSEUDO: function(e, r) {
                  var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                  return a[P] ? a(r) : 1 < a.length ? (t = [e, e, "", r],
                  x.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                      for (var n, o = a(e, r), i = o.length; i--; )
                          e[n = ee(e, o[i])] = !(t[n] = o[i])
                  }) : function(e) {
                      return a(e, 0, t)
                  }
                  ) : a
              }
          },
          pseudos: {
              not: l(function(e) {
                  var o = []
                    , i = []
                    , s = C(e.replace(se, "$1"));
                  return s[P] ? l(function(e, t, n, o) {
                      for (var i, r = s(e, null, o, []), a = e.length; a--; )
                          (i = r[a]) && (e[a] = !(t[a] = i))
                  }) : function(e, t, n) {
                      return o[0] = e,
                      s(o, null, n, i),
                      o[0] = null,
                      !i.pop()
                  }
              }),
              has: l(function(t) {
                  return function(e) {
                      return 0 < w(t, e).length
                  }
              }),
              contains: l(function(t) {
                  return t = t.replace(we, Ee),
                  function(e) {
                      return -1 < (e.textContent || e.innerText || k(e)).indexOf(t)
                  }
              }),
              lang: l(function(n) {
                  return pe.test(n || "") || w.error("unsupported lang: " + n),
                  n = n.replace(we, Ee).toLowerCase(),
                  function(e) {
                      var t;
                      do {
                          if (t = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                              return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1
                  }
              }),
              target: function(e) {
                  var t = n.location && n.location.hash;
                  return t && t.slice(1) === e.id
              },
              root: function(e) {
                  return e === $
              },
              focus: function(e) {
                  return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: function(e) {
                  return !1 === e.disabled
              },
              disabled: function(e) {
                  return !0 === e.disabled
              },
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                  !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(e) {
                  return !x.pseudos.empty(e)
              },
              header: function(e) {
                  return me.test(e.nodeName)
              },
              input: function(e) {
                  return he.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: a(function() {
                  return [0]
              }),
              last: a(function(e, t) {
                  return [t - 1]
              }),
              eq: a(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: a(function(e, t) {
                  for (var n = 0; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              odd: a(function(e, t) {
                  for (var n = 1; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              lt: a(function(e, t, n) {
                  for (var o = n < 0 ? n + t : n; 0 <= --o; )
                      e.push(o);
                  return e
              }),
              gt: a(function(e, t, n) {
                  for (var o = n < 0 ? n + t : n; ++o < t; )
                      e.push(o);
                  return e
              })
          }
      }).pseudos.nth = x.pseudos.eq,
      {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          x.pseudos[h] = o(h);
      for (h in {
          submit: !0,
          reset: !0
      })
          x.pseudos[h] = r(h);
      return s.prototype = x.filters = x.pseudos,
      x.setFilters = new s,
      S = w.tokenize = function(e, t) {
          var n, o, i, r, a, s, l, c = q[e + " "];
          if (c)
              return t ? 0 : c.slice(0);
          for (a = e,
          s = [],
          l = x.preFilter; a; ) {
              for (r in n && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a),
              s.push(i = [])),
              n = !1,
              (o = ce.exec(a)) && (n = o.shift(),
              i.push({
                  value: n,
                  type: o[0].replace(se, " ")
              }),
              a = a.slice(n.length)),
              x.filter)
                  !(o = fe[r].exec(a)) || l[r] && !(o = l[r](o)) || (n = o.shift(),
                  i.push({
                      value: n,
                      type: r,
                      matches: o
                  }),
                  a = a.slice(n.length));
              if (!n)
                  break
          }
          return t ? a.length : a ? w.error(e) : q(e, s).slice(0)
      }
      ,
      C = w.compile = function(e, t) {
          var n, o = [], i = [], r = K[e + " "];
          if (!r) {
              for (t || (t = S(e)),
              n = t.length; n--; )
                  (r = f(t[n]))[P] ? o.push(r) : i.push(r);
              (r = K(e, u(i, o))).selector = e
          }
          return r
      }
      ,
      L = w.select = function(e, t, n, o) {
          var i, r, a, s, l, c = "function" == typeof e && e, u = !o && S(e = c.selector || e);
          if (n = n || [],
          1 === u.length) {
              if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && v.getById && 9 === t.nodeType && M && x.relative[r[1].type]) {
                  if (!(t = (x.find.ID(a.matches[0].replace(we, Ee), t) || [])[0]))
                      return n;
                  c && (t = t.parentNode),
                  e = e.slice(r.shift().value.length)
              }
              for (i = fe.needsContext.test(e) ? 0 : r.length; i-- && (a = r[i],
              !x.relative[s = a.type]); )
                  if ((l = x.find[s]) && (o = l(a.matches[0].replace(we, Ee), ye.test(r[0].type) && m(t.parentNode) || t))) {
                      if (r.splice(i, 1),
                      !(e = o.length && g(r)))
                          return Q.apply(n, o),
                          n;
                      break
                  }
          }
          return (c || C(e, u))(o, t, !M, n, !t || ye.test(e) && m(t.parentNode) || t),
          n
      }
      ,
      v.sortStable = P.split("").sort(W).join("") === P,
      v.detectDuplicates = !!O,
      j(),
      v.sortDetached = i(function(e) {
          return 1 & e.compareDocumentPosition(D.createElement("div"))
      }),
      i(function(e) {
          return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || t("type|href|height|width", function(e, t, n) {
          if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      v.attributes && i(function(e) {
          return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || t("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue
      }),
      i(function(e) {
          return null == e.getAttribute("disabled")
      }) || t(te, function(e, t, n) {
          var o;
          if (!n)
              return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }),
      w
  }(k);
  fe.find = ye,
  fe.expr = ye.selectors,
  fe.expr[":"] = fe.expr.pseudos,
  fe.uniqueSort = fe.unique = ye.uniqueSort,
  fe.text = ye.getText,
  fe.isXMLDoc = ye.isXML,
  fe.contains = ye.contains;
  var be = function(e, t, n) {
      for (var o = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
              if (i && fe(e).is(n))
                  break;
              o.push(e)
          }
      return o
  }
    , we = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
      return n
  }
    , Ee = fe.expr.match.needsContext
    , xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
    , ke = /^.[^:#\[\.,]*$/;
  fe.filter = function(e, t, n) {
      var o = t[0];
      return n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === o.nodeType ? fe.find.matchesSelector(o, e) ? [o] : [] : fe.find.matches(e, fe.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }
  ,
  fe.fn.extend({
      find: function(e) {
          var t, n = [], o = this, i = o.length;
          if ("string" != typeof e)
              return this.pushStack(fe(e).filter(function() {
                  for (t = 0; t < i; t++)
                      if (fe.contains(o[t], this))
                          return !0
              }));
          for (t = 0; t < i; t++)
              fe.find(e, o[t], n);
          return (n = this.pushStack(1 < i ? fe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
          n
      },
      filter: function(e) {
          return this.pushStack(t(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(t(this, e || [], !0))
      },
      is: function(e) {
          return !!t(this, "string" == typeof e && Ee.test(e) ? fe(e) : e || [], !1).length
      }
  });
  var Te, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (fe.fn.init = function(e, t, n) {
      var o, i;
      if (!e)
          return this;
      if (n = n || Te,
      "string" != typeof e)
          return e.nodeType ? (this.context = this[0] = e,
          this.length = 1,
          this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (e.selector !== undefined && (this.selector = e.selector,
          this.context = e.context),
          fe.makeArray(e, this));
      if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Se.exec(e)) || !o[1] && t)
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (o[1]) {
          if (t = t instanceof fe ? t[0] : t,
          fe.merge(this, fe.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)),
          xe.test(o[1]) && fe.isPlainObject(t))
              for (o in t)
                  fe.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
          return this
      }
      if ((i = oe.getElementById(o[2])) && i.parentNode) {
          if (i.id !== o[2])
              return Te.find(e);
          this.length = 1,
          this[0] = i
      }
      return this.context = oe,
      this.selector = e,
      this
  }
  ).prototype = fe.fn,
  Te = fe(oe);
  var Ce = /^(?:parents|prev(?:Until|All))/
    , Le = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  fe.fn.extend({
      has: function(e) {
          var t, n = fe(e, this), o = n.length;
          return this.filter(function() {
              for (t = 0; t < o; t++)
                  if (fe.contains(this, n[t]))
                      return !0
          })
      },
      closest: function(e, t) {
          for (var n, o = 0, i = this.length, r = [], a = Ee.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; o < i; o++)
              for (n = this[o]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                      r.push(n);
                      break
                  }
          return this.pushStack(1 < r.length ? fe.uniqueSort(r) : r)
      },
      index: function(e) {
          return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }),
  fe.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return be(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return be(e, "parentNode", n)
      },
      next: function(e) {
          return n(e, "nextSibling")
      },
      prev: function(e) {
          return n(e, "previousSibling")
      },
      nextAll: function(e) {
          return be(e, "nextSibling")
      },
      prevAll: function(e) {
          return be(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return be(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return be(e, "previousSibling", n)
      },
      siblings: function(e) {
          return we((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return we(e.firstChild)
      },
      contents: function(e) {
          return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
      }
  }, function(o, i) {
      fe.fn[o] = function(e, t) {
          var n = fe.map(this, i, e);
          return "Until" !== o.slice(-5) && (t = e),
          t && "string" == typeof t && (n = fe.filter(t, n)),
          1 < this.length && (Le[o] || (n = fe.uniqueSort(n)),
          Ce.test(o) && (n = n.reverse())),
          this.pushStack(n)
      }
  });
  var _e, Ae, Oe = /\S+/g;
  for (Ae in fe.Callbacks = function(o) {
      o = "string" == typeof o ? u(o) : fe.extend({}, o);
      var i, e, t, n, r = [], a = [], s = -1, l = function() {
          for (n = o.once,
          t = i = !0; a.length; s = -1)
              for (e = a.shift(); ++s < r.length; )
                  !1 === r[s].apply(e[0], e[1]) && o.stopOnFalse && (s = r.length,
                  e = !1);
          o.memory || (e = !1),
          i = !1,
          n && (r = e ? [] : "")
      }, c = {
          add: function() {
              return r && (e && !i && (s = r.length - 1,
              a.push(e)),
              function n(e) {
                  fe.each(e, function(e, t) {
                      fe.isFunction(t) ? o.unique && c.has(t) || r.push(t) : t && t.length && "string" !== fe.type(t) && n(t)
                  })
              }(arguments),
              e && !i && l()),
              this
          },
          remove: function() {
              return fe.each(arguments, function(e, t) {
                  for (var n; -1 < (n = fe.inArray(t, r, n)); )
                      r.splice(n, 1),
                      n <= s && s--
              }),
              this
          },
          has: function(e) {
              return e ? -1 < fe.inArray(e, r) : 0 < r.length
          },
          empty: function() {
              return r && (r = []),
              this
          },
          disable: function() {
              return n = a = [],
              r = e = "",
              this
          },
          disabled: function() {
              return !r
          },
          lock: function() {
              return n = !0,
              e || c.disable(),
              this
          },
          locked: function() {
              return !!n
          },
          fireWith: function(e, t) {
              return n || (t = [e, (t = t || []).slice ? t.slice() : t],
              a.push(t),
              i || l()),
              this
          },
          fire: function() {
              return c.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!t
          }
      };
      return c
  }
  ,
  fe.extend({
      Deferred: function(e) {
          var r = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]]
            , i = "pending"
            , a = {
              state: function() {
                  return i
              },
              always: function() {
                  return s.done(arguments).fail(arguments),
                  this
              },
              then: function() {
                  var i = arguments;
                  return fe.Deferred(function(o) {
                      fe.each(r, function(e, t) {
                          var n = fe.isFunction(i[e]) && i[e];
                          s[t[1]](function() {
                              var e = n && n.apply(this, arguments);
                              e && fe.isFunction(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[t[0] + "With"](this === a ? o.promise() : this, n ? [e] : arguments)
                          })
                      }),
                      i = null
                  }).promise()
              },
              promise: function(e) {
                  return null != e ? fe.extend(e, a) : a
              }
          }
            , s = {};
          return a.pipe = a.then,
          fe.each(r, function(e, t) {
              var n = t[2]
                , o = t[3];
              a[t[1]] = n.add,
              o && n.add(function() {
                  i = o
              }, r[1 ^ e][2].disable, r[2][2].lock),
              s[t[0]] = function() {
                  return s[t[0] + "With"](this === s ? a : this, arguments),
                  this
              }
              ,
              s[t[0] + "With"] = n.fireWith
          }),
          a.promise(s),
          e && e.call(s, s),
          s
      },
      when: function(e) {
          var i, t, n, o = 0, r = ie.call(arguments), a = r.length, s = 1 !== a || e && fe.isFunction(e.promise) ? a : 0, l = 1 === s ? e : fe.Deferred(), c = function(t, n, o) {
              return function(e) {
                  n[t] = this,
                  o[t] = 1 < arguments.length ? ie.call(arguments) : e,
                  o === i ? l.notifyWith(n, o) : --s || l.resolveWith(n, o)
              }
          };
          if (1 < a)
              for (i = new Array(a),
              t = new Array(a),
              n = new Array(a); o < a; o++)
                  r[o] && fe.isFunction(r[o].promise) ? r[o].promise().progress(c(o, t, i)).done(c(o, n, r)).fail(l.reject) : --s;
          return s || l.resolveWith(n, r),
          l.promise()
      }
  }),
  fe.fn.ready = function(e) {
      return fe.ready.promise().done(e),
      this
  }
  ,
  fe.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? fe.readyWait++ : fe.ready(!0)
      },
      ready: function(e) {
          (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0) !== e && 0 < --fe.readyWait || (_e.resolveWith(oe, [fe]),
          fe.fn.triggerHandler && (fe(oe).triggerHandler("ready"),
          fe(oe).off("ready")))
      }
  }),
  fe.ready.promise = function(e) {
      if (!_e)
          if (_e = fe.Deferred(),
          "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll)
              k.setTimeout(fe.ready);
          else if (oe.addEventListener)
              oe.addEventListener("DOMContentLoaded", r),
              k.addEventListener("load", r);
          else {
              oe.attachEvent("onreadystatechange", r),
              k.attachEvent("onload", r);
              var t = !1;
              try {
                  t = null == k.frameElement && oe.documentElement
              } catch (n) {}
              t && t.doScroll && function o() {
                  if (!fe.isReady) {
                      try {
                          t.doScroll("left")
                      } catch (n) {
                          return k.setTimeout(o, 50)
                      }
                      i(),
                      fe.ready()
                  }
              }()
          }
      return _e.promise(e)
  }
  ,
  fe.ready.promise(),
  fe(de))
      break;
  de.ownFirst = "0" === Ae,
  de.inlineBlockNeedsLayout = !1,
  fe(function() {
      var e, t, n, o;
      (n = oe.getElementsByTagName("body")[0]) && n.style && (t = oe.createElement("div"),
      (o = oe.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
      n.appendChild(o).appendChild(t),
      "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
      de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
      e && (n.style.zoom = 1)),
      n.removeChild(o))
  }),
  function() {
      var e = oe.createElement("div");
      de.deleteExpando = !0;
      try {
          delete e.test
      } catch (t) {
          de.deleteExpando = !1
      }
      e = null
  }();
  var je, De = function(e) {
      var t = fe.noData[(e.nodeName + " ").toLowerCase()]
        , n = +e.nodeType || 1;
      return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
  }, $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Me = /([A-Z])/g;
  fe.extend({
      cache: {},
      noData: {
          "applet ": !0,
          "embed ": !0,
          "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(e) {
          return !!(e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando]) && !c(e)
      },
      data: function(e, t, n) {
          return o(e, t, n)
      },
      removeData: function(e, t) {
          return a(e, t)
      },
      _data: function(e, t, n) {
          return o(e, t, n, !0)
      },
      _removeData: function(e, t) {
          return a(e, t, !0)
      }
  }),
  fe.fn.extend({
      data: function(e, t) {
          var n, o, i, r = this[0], a = r && r.attributes;
          if (e !== undefined)
              return "object" == typeof e ? this.each(function() {
                  fe.data(this, e)
              }) : 1 < arguments.length ? this.each(function() {
                  fe.data(this, e, t)
              }) : r ? l(r, e, fe.data(r, e)) : undefined;
          if (this.length && (i = fe.data(r),
          1 === r.nodeType && !fe._data(r, "parsedAttrs"))) {
              for (n = a.length; n--; )
                  a[n] && 0 === (o = a[n].name).indexOf("data-") && l(r, o = fe.camelCase(o.slice(5)), i[o]);
              fe._data(r, "parsedAttrs", !0)
          }
          return i
      },
      removeData: function(e) {
          return this.each(function() {
              fe.removeData(this, e)
          })
      }
  }),
  fe.extend({
      queue: function(e, t, n) {
          var o;
          if (e)
              return t = (t || "fx") + "queue",
              o = fe._data(e, t),
              n && (!o || fe.isArray(n) ? o = fe._data(e, t, fe.makeArray(n)) : o.push(n)),
              o || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = fe.queue(e, t)
            , o = n.length
            , i = n.shift()
            , r = fe._queueHooks(e, t)
            , a = function() {
              fe.dequeue(e, t)
          };
          "inprogress" === i && (i = n.shift(),
          o--),
          i && ("fx" === t && n.unshift("inprogress"),
          delete r.stop,
          i.call(e, a, r)),
          !o && r && r.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return fe._data(e, n) || fe._data(e, n, {
              empty: fe.Callbacks("once memory").add(function() {
                  fe._removeData(e, t + "queue"),
                  fe._removeData(e, n)
              })
          })
      }
  }),
  fe.fn.extend({
      queue: function(t, n) {
          var e = 2;
          return "string" != typeof t && (n = t,
          t = "fx",
          e--),
          arguments.length < e ? fe.queue(this[0], t) : n === undefined ? this : this.each(function() {
              var e = fe.queue(this, t, n);
              fe._queueHooks(this, t),
              "fx" === t && "inprogress" !== e[0] && fe.dequeue(this, t)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              fe.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, o = 1, i = fe.Deferred(), r = this, a = this.length, s = function() {
              --o || i.resolveWith(r, [r])
          };
          for ("string" != typeof e && (t = e,
          e = undefined),
          e = e || "fx"; a--; )
              (n = fe._data(r[a], e + "queueHooks")) && n.empty && (o++,
              n.empty.add(s));
          return s(),
          i.promise(t)
      }
  }),
  de.shrinkWrapBlocks = function() {
      return null != je ? je : (je = !1,
      (t = oe.getElementsByTagName("body")[0]) && t.style ? (e = oe.createElement("div"),
      (n = oe.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
      t.appendChild(n).appendChild(e),
      "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
      e.appendChild(oe.createElement("div")).style.width = "5px",
      je = 3 !== e.offsetWidth),
      t.removeChild(n),
      je) : void 0);
      var e, t, n
  }
  ;
  var Ne, He, Ge, Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$","i"), Ve = ["Top", "Right", "Bottom", "Left"], Fe = function(e, t) {
      return e = t || e,
      "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
  }, Be = function(e, t, n, o, i, r, a) {
      var s = 0
        , l = e.length
        , c = null == n;
      if ("object" === fe.type(n))
          for (s in i = !0,
          n)
              Be(e, t, s, n[s], !0, r, a);
      else if (o !== undefined && (i = !0,
      fe.isFunction(o) || (a = !0),
      c && (a ? (t.call(e, o),
      t = null) : (c = t,
      t = function(e, t, n) {
          return c.call(fe(e), n)
      }
      )),
      t))
          for (; s < l; s++)
              t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
      return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
  }, Ue = /^(?:checkbox|radio)$/i, qe = /<([\w:-]+)/, Ke = /^$|\/(?:java|ecma)script/i, We = /^\s+/, Re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  Ne = oe.createElement("div"),
  He = oe.createDocumentFragment(),
  Ge = oe.createElement("input"),
  Ne.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
  de.leadingWhitespace = 3 === Ne.firstChild.nodeType,
  de.tbody = !Ne.getElementsByTagName("tbody").length,
  de.htmlSerialize = !!Ne.getElementsByTagName("link").length,
  de.html5Clone = "<:nav></:nav>" !== oe.createElement("nav").cloneNode(!0).outerHTML,
  Ge.type = "checkbox",
  Ge.checked = !0,
  He.appendChild(Ge),
  de.appendChecked = Ge.checked,
  Ne.innerHTML = "<textarea>x</textarea>",
  de.noCloneChecked = !!Ne.cloneNode(!0).lastChild.defaultValue,
  He.appendChild(Ne),
  (Ge = oe.createElement("input")).setAttribute("type", "radio"),
  Ge.setAttribute("checked", "checked"),
  Ge.setAttribute("name", "t"),
  Ne.appendChild(Ge),
  de.checkClone = Ne.cloneNode(!0).cloneNode(!0).lastChild.checked,
  de.noCloneEvent = !!Ne.addEventListener,
  Ne[fe.expando] = 1,
  de.attributes = !Ne.getAttribute(fe.expando);
  var Xe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  Xe.optgroup = Xe.option,
  Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead,
  Xe.th = Xe.td;
  var ze = /<|&#?\w+;/
    , Ye = /<tbody/i;
  !function() {
      var e, t, n = oe.createElement("div");
      for (e in {
          submit: !0,
          change: !0,
          focusin: !0
      })
          t = "on" + e,
          (de[e] = t in k) || (n.setAttribute(t, "t"),
          de[e] = !1 === n.attributes[t].expando);
      n = null
  }();
  var Je = /^(?:input|select|textarea)$/i
    , Qe = /^key/
    , Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , et = /^(?:focusinfocus|focusoutblur)$/
    , tt = /^([^.]*)(?:\.(.+)|)/;
  fe.event = {
      global: {},
      add: function(e, t, n, o, i) {
          var r, a, s, l, c, u, d, p, f, h, m, g = fe._data(e);
          if (g) {
              for (n.handler && (n = (l = n).handler,
              i = l.selector),
              n.guid || (n.guid = fe.guid++),
              (a = g.events) || (a = g.events = {}),
              (u = g.handle) || ((u = g.handle = function(e) {
                  return void 0 === fe || e && fe.event.triggered === e.type ? undefined : fe.event.dispatch.apply(u.elem, arguments)
              }
              ).elem = e),
              s = (t = (t || "").match(Oe) || [""]).length; s--; )
                  f = m = (r = tt.exec(t[s]) || [])[1],
                  h = (r[2] || "").split(".").sort(),
                  f && (c = fe.event.special[f] || {},
                  f = (i ? c.delegateType : c.bindType) || f,
                  c = fe.event.special[f] || {},
                  d = fe.extend({
                      type: f,
                      origType: m,
                      data: o,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && fe.expr.match.needsContext.test(i),
                      namespace: h.join(".")
                  }, l),
                  (p = a[f]) || ((p = a[f] = []).delegateCount = 0,
                  c.setup && !1 !== c.setup.call(e, o, h, u) || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))),
                  c.add && (c.add.call(e, d),
                  d.handler.guid || (d.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                  fe.event.global[f] = !0);
              e = null
          }
      },
      remove: function(e, t, n, o, i) {
          var r, a, s, l, c, u, d, p, f, h, m, g = fe.hasData(e) && fe._data(e);
          if (g && (u = g.events)) {
              for (c = (t = (t || "").match(Oe) || [""]).length; c--; )
                  if (f = m = (s = tt.exec(t[c]) || [])[1],
                  h = (s[2] || "").split(".").sort(),
                  f) {
                      for (d = fe.event.special[f] || {},
                      p = u[f = (o ? d.delegateType : d.bindType) || f] || [],
                      s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      l = r = p.length; r--; )
                          a = p[r],
                          !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || o && o !== a.selector && ("**" !== o || !a.selector) || (p.splice(r, 1),
                          a.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, a));
                      l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || fe.removeEvent(e, f, g.handle),
                      delete u[f])
                  } else
                      for (f in u)
                          fe.event.remove(e, f + t[c], n, o, !0);
              fe.isEmptyObject(u) && (delete g.handle,
              fe._removeData(e, "events"))
          }
      },
      trigger: function(e, t, n, o) {
          var i, r, a, s, l, c, u, d = [n || oe], p = ue.call(e, "type") ? e.type : e, f = ue.call(e, "namespace") ? e.namespace.split(".") : [];
          if (a = c = n = n || oe,
          3 !== n.nodeType && 8 !== n.nodeType && !et.test(p + fe.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(),
          f.sort()),
          r = p.indexOf(":") < 0 && "on" + p,
          (e = e[fe.expando] ? e : new fe.Event(p,"object" == typeof e && e)).isTrigger = o ? 2 : 3,
          e.namespace = f.join("."),
          e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          e.result = undefined,
          e.target || (e.target = n),
          t = null == t ? [e] : fe.makeArray(t, [e]),
          l = fe.event.special[p] || {},
          o || !l.trigger || !1 !== l.trigger.apply(n, t))) {
              if (!o && !l.noBubble && !fe.isWindow(n)) {
                  for (s = l.delegateType || p,
                  et.test(s + p) || (a = a.parentNode); a; a = a.parentNode)
                      d.push(a),
                      c = a;
                  c === (n.ownerDocument || oe) && d.push(c.defaultView || c.parentWindow || k)
              }
              for (u = 0; (a = d[u++]) && !e.isPropagationStopped(); )
                  e.type = 1 < u ? s : l.bindType || p,
                  (i = (fe._data(a, "events") || {})[e.type] && fe._data(a, "handle")) && i.apply(a, t),
                  (i = r && a[r]) && i.apply && De(a) && (e.result = i.apply(a, t),
                  !1 === e.result && e.preventDefault());
              if (e.type = p,
              !o && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && De(n) && r && n[p] && !fe.isWindow(n)) {
                  (c = n[r]) && (n[r] = null),
                  fe.event.triggered = p;
                  try {
                      n[p]()
                  } catch (h) {}
                  fe.event.triggered = undefined,
                  c && (n[r] = c)
              }
              return e.result
          }
      },
      dispatch: function(e) {
          e = fe.event.fix(e);
          var t, n, o, i, r, a = [], s = ie.call(arguments), l = (fe._data(this, "events") || {})[e.type] || [], c = fe.event.special[e.type] || {};
          if ((s[0] = e).delegateTarget = this,
          !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
              for (a = fe.event.handlers.call(this, e, l),
              t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                  for (e.currentTarget = i.elem,
                  n = 0; (r = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                      e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r,
                      e.data = r.data,
                      (o = ((fe.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = o) && (e.preventDefault(),
                      e.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, e),
              e.result
          }
      },
      handlers: function(e, t) {
          var n, o, i, r, a = [], s = t.delegateCount, l = e.target;
          if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
              for (; l != this; l = l.parentNode || this)
                  if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                      for (o = [],
                      n = 0; n < s; n++)
                          o[i = (r = t[n]).selector + " "] === undefined && (o[i] = r.needsContext ? -1 < fe(i, this).index(l) : fe.find(i, this, null, [l]).length),
                          o[i] && o.push(r);
                      o.length && a.push({
                          elem: l,
                          handlers: o
                      })
                  }
          return s < t.length && a.push({
              elem: this,
              handlers: t.slice(s)
          }),
          a
      },
      fix: function(e) {
          if (e[fe.expando])
              return e;
          var t, n, o, i = e.type, r = e, a = this.fixHooks[i];
          for (a || (this.fixHooks[i] = a = Ze.test(i) ? this.mouseHooks : Qe.test(i) ? this.keyHooks : {}),
          o = a.props ? this.props.concat(a.props) : this.props,
          e = new fe.Event(r),
          t = o.length; t--; )
              e[n = o[t]] = r[n];
          return e.target || (e.target = r.srcElement || oe),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          e.metaKey = !!e.metaKey,
          a.filter ? a.filter(e, r) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
              e
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(e, t) {
              var n, o, i, r = t.button, a = t.fromElement;
              return null == e.pageX && null != t.clientX && (i = (o = e.target.ownerDocument || oe).documentElement,
              n = o.body,
              e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
              e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
              !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
              e.which || r === undefined || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
              e
          }
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== h() && this.focus)
                      try {
                          return this.focus(),
                          !1
                      } catch (e) {}
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === h() && this.blur)
                      return this.blur(),
                      !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click)
                      return this.click(),
                      !1
              },
              _default: function(e) {
                  return fe.nodeName(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      },
      simulate: function(e, t, n) {
          var o = fe.extend(new fe.Event, n, {
              type: e,
              isSimulated: !0
          });
          fe.event.trigger(o, null, t),
          o.isDefaultPrevented() && n.preventDefault()
      }
  },
  fe.removeEvent = oe.removeEventListener ? function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }
  : function(e, t, n) {
      var o = "on" + t;
      e.detachEvent && ("undefined" == typeof e[o] && (e[o] = null),
      e.detachEvent(o, n))
  }
  ,
  fe.Event = function(e, t) {
      if (!(this instanceof fe.Event))
          return new fe.Event(e,t);
      e && e.type ? (this.originalEvent = e,
      this.type = e.type,
      this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? p : f) : this.type = e,
      t && fe.extend(this, t),
      this.timeStamp = e && e.timeStamp || fe.now(),
      this[fe.expando] = !0
  }
  ,
  fe.Event.prototype = {
      constructor: fe.Event,
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = p,
          e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = p,
          e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
          e.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = p,
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  fe.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, r) {
      fe.event.special[e] = {
          delegateType: r,
          bindType: r,
          handle: function(e) {
              var t, n = this, o = e.relatedTarget, i = e.handleObj;
              return o && (o === n || fe.contains(n, o)) || (e.type = i.origType,
              t = i.handler.apply(this, arguments),
              e.type = r),
              t
          }
      }
  }),
  de.submit || (fe.event.special.submit = {
      setup: function() {
          if (fe.nodeName(this, "form"))
              return !1;
          fe.event.add(this, "click._submit keypress._submit", function(e) {
              var t = e.target
                , n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : undefined;
              n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                  e._submitBubble = !0
              }),
              fe._data(n, "submit", !0))
          })
      },
      postDispatch: function(e) {
          e._submitBubble && (delete e._submitBubble,
          this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
      },
      teardown: function() {
          if (fe.nodeName(this, "form"))
              return !1;
          fe.event.remove(this, "._submit")
      }
  }),
  de.change || (fe.event.special.change = {
      setup: function() {
          if (Je.test(this.nodeName))
              return "checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) {
                  "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
              }),
              fe.event.add(this, "click._change", function(e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                  fe.event.simulate("change", this, e)
              })),
              !1;
          fe.event.add(this, "beforeactivate._change", function(e) {
              var t = e.target;
              Je.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                  !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
              }),
              fe._data(t, "change", !0))
          })
      },
      handle: function(e) {
          var t = e.target;
          if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
              return e.handleObj.handler.apply(this, arguments)
      },
      teardown: function() {
          return fe.event.remove(this, "._change"),
          !Je.test(this.nodeName)
      }
  }),
  de.focusin || fe.each({
      focus: "focusin",
      blur: "focusout"
  }, function(n, o) {
      var i = function(e) {
          fe.event.simulate(o, e.target, fe.event.fix(e))
      };
      fe.event.special[o] = {
          setup: function() {
              var e = this.ownerDocument || this
                , t = fe._data(e, o);
              t || e.addEventListener(n, i, !0),
              fe._data(e, o, (t || 0) + 1)
          },
          teardown: function() {
              var e = this.ownerDocument || this
                , t = fe._data(e, o) - 1;
              t ? fe._data(e, o, t) : (e.removeEventListener(n, i, !0),
              fe._removeData(e, o))
          }
      }
  }),
  fe.fn.extend({
      on: function(e, t, n, o) {
          return w(this, e, t, n, o)
      },
      one: function(e, t, n, o) {
          return w(this, e, t, n, o, 1)
      },
      off: function(e, t, n) {
          var o, i;
          if (e && e.preventDefault && e.handleObj)
              return o = e.handleObj,
              fe(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
              this;
          if ("object" != typeof e)
              return !1 !== t && "function" != typeof t || (n = t,
              t = undefined),
              !1 === n && (n = f),
              this.each(function() {
                  fe.event.remove(this, e, n, t)
              });
          for (i in e)
              this.off(i, t, e[i]);
          return this
      },
      trigger: function(e, t) {
          return this.each(function() {
              fe.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n)
              return fe.event.trigger(e, t, n, !0)
      }
  });
  var nt = / jQuery\d+="(?:null|\d+)"/g
    , ot = new RegExp("<(?:" + Re + ")[\\s/>]","i")
    , it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
    , rt = /<script|<style|<link/i
    , at = /checked\s*(?:[^=]|=\s*.checked.)/i
    , st = /^true\/(.*)/
    , lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
    , ct = g(oe).appendChild(oe.createElement("div"));
  fe.extend({
      htmlPrefilter: function(e) {
          return e.replace(it, "<$1></$2>")
      },
      clone: function(e, t, n) {
          var o, i, r, a, s, l = fe.contains(e.ownerDocument, e);
          if (de.html5Clone || fe.isXMLDoc(e) || !ot.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML,
          ct.removeChild(r = ct.firstChild)),
          !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
              for (o = v(r),
              s = v(e),
              a = 0; null != (i = s[a]); ++a)
                  o[a] && C(i, o[a]);
          if (t)
              if (n)
                  for (s = s || v(e),
                  o = o || v(r),
                  a = 0; null != (i = s[a]); a++)
                      S(i, o[a]);
              else
                  S(e, r);
          return 0 < (o = v(r, "script")).length && y(o, !l && v(e, "script")),
          o = s = i = null,
          r
      },
      cleanData: function(e, t) {
          for (var n, o, i, r, a = 0, s = fe.expando, l = fe.cache, c = de.attributes, u = fe.event.special; null != (n = e[a]); a++)
              if ((t || De(n)) && (r = (i = n[s]) && l[i])) {
                  if (r.events)
                      for (o in r.events)
                          u[o] ? fe.event.remove(n, o) : fe.removeEvent(n, o, r.handle);
                  l[i] && (delete l[i],
                  c || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s),
                  ne.push(i))
              }
      }
  }),
  fe.fn.extend({
      domManip: L,
      detach: function(e) {
          return _(this, e, !0)
      },
      remove: function(e) {
          return _(this, e)
      },
      text: function(e) {
          return Be(this, function(e) {
              return e === undefined ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oe).createTextNode(e))
          }, null, e, arguments.length)
      },
      append: function() {
          return L(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return L(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = E(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return L(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return L(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) {
              for (1 === e.nodeType && fe.cleanData(v(e, !1)); e.firstChild; )
                  e.removeChild(e.firstChild);
              e.options && fe.nodeName(e, "select") && (e.options.length = 0)
          }
          return this
      },
      clone: function(e, t) {
          return e = null != e && e,
          t = null == t ? e : t,
          this.map(function() {
              return fe.clone(this, e, t)
          })
      },
      html: function(e) {
          return Be(this, function(e) {
              var t = this[0] || {}
                , n = 0
                , o = this.length;
              if (e === undefined)
                  return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
              if ("string" == typeof e && !rt.test(e) && (de.htmlSerialize || !ot.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Xe[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = fe.htmlPrefilter(e);
                  try {
                      for (; n < o; n++)
                          1 === (t = this[n] || {}).nodeType && (fe.cleanData(v(t, !1)),
                          t.innerHTML = e);
                      t = 0
                  } catch (i) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var n = [];
          return L(this, arguments, function(e) {
              var t = this.parentNode;
              fe.inArray(this, n) < 0 && (fe.cleanData(v(this)),
              t && t.replaceChild(e, this))
          }, n)
      }
  }),
  fe.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, a) {
      fe.fn[e] = function(e) {
          for (var t, n = 0, o = [], i = fe(e), r = i.length - 1; n <= r; n++)
              t = n === r ? this : this.clone(!0),
              fe(i[n])[a](t),
              ae.apply(o, t.get());
          return this.pushStack(o)
      }
  });
  var ut, dt = {
      HTML: "block",
      BODY: "block"
  }, pt = /^margin/, ft = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$","i"), ht = function(e, t, n, o) {
      var i, r, a = {};
      for (r in t)
          a[r] = e.style[r],
          e.style[r] = t[r];
      for (r in i = n.apply(e, o || []),
      t)
          e.style[r] = a[r];
      return i
  }, mt = oe.documentElement;
  !function() {
      function e() {
          var e, t, n = oe.documentElement;
          n.appendChild(c),
          u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
          o = r = l = !1,
          i = s = !0,
          k.getComputedStyle && (t = k.getComputedStyle(u),
          o = "1%" !== (t || {}).top,
          l = "2px" === (t || {}).marginLeft,
          r = "4px" === (t || {
              width: "4px"
          }).width,
          u.style.marginRight = "50%",
          i = "4px" === (t || {
              marginRight: "4px"
          }).marginRight,
          (e = u.appendChild(oe.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
          e.style.marginRight = e.style.width = "0",
          u.style.width = "1px",
          s = !parseFloat((k.getComputedStyle(e) || {}).marginRight),
          u.removeChild(e)),
          u.style.display = "none",
          (a = 0 === u.getClientRects().length) && (u.style.display = "",
          u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
          u.childNodes[0].style.borderCollapse = "separate",
          (e = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
          (a = 0 === e[0].offsetHeight) && (e[0].style.display = "",
          e[1].style.display = "none",
          a = 0 === e[0].offsetHeight)),
          n.removeChild(c)
      }
      var o, i, r, a, s, l, c = oe.createElement("div"), u = oe.createElement("div");
      u.style && (u.style.cssText = "float:left;opacity:.5",
      de.opacity = "0.5" === u.style.opacity,
      de.cssFloat = !!u.style.cssFloat,
      u.style.backgroundClip = "content-box",
      u.cloneNode(!0).style.backgroundClip = "",
      de.clearCloneStyle = "content-box" === u.style.backgroundClip,
      (c = oe.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
      u.innerHTML = "",
      c.appendChild(u),
      de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
      fe.extend(de, {
          reliableHiddenOffsets: function() {
              return null == o && e(),
              a
          },
          boxSizingReliable: function() {
              return null == o && e(),
              r
          },
          pixelMarginRight: function() {
              return null == o && e(),
              i
          },
          pixelPosition: function() {
              return null == o && e(),
              o
          },
          reliableMarginRight: function() {
              return null == o && e(),
              s
          },
          reliableMarginLeft: function() {
              return null == o && e(),
              l
          }
      }))
  }();
  var gt, vt, yt = /^(top|right|bottom|left)$/;
  k.getComputedStyle ? (gt = function(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = k),
      t.getComputedStyle(e)
  }
  ,
  vt = function(e, t, n) {
      var o, i, r, a, s = e.style;
      return "" !== (a = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)),
      n && !de.pixelMarginRight() && ft.test(a) && pt.test(t) && (o = s.width,
      i = s.minWidth,
      r = s.maxWidth,
      s.minWidth = s.maxWidth = s.width = a,
      a = n.width,
      s.width = o,
      s.minWidth = i,
      s.maxWidth = r),
      a === undefined ? a : a + ""
  }
  ) : mt.currentStyle && (gt = function(e) {
      return e.currentStyle
  }
  ,
  vt = function(e, t, n) {
      var o, i, r, a, s = e.style;
      return null == (a = (n = n || gt(e)) ? n[t] : undefined) && s && s[t] && (a = s[t]),
      ft.test(a) && !yt.test(t) && (o = s.left,
      (r = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left),
      s.left = "fontSize" === t ? "1em" : a,
      a = s.pixelLeft + "px",
      s.left = o,
      r && (i.left = r)),
      a === undefined ? a : a + "" || "auto"
  }
  );
  var bt = /alpha\([^)]*\)/i
    , wt = /opacity\s*=\s*([^)]*)/i
    , Et = /^(none|table(?!-c[ea]).+)/
    , xt = new RegExp("^(" + Ie + ")(.*)$","i")
    , kt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , Tt = {
      letterSpacing: "0",
      fontWeight: "400"
  }
    , St = ["Webkit", "O", "Moz", "ms"]
    , Ct = oe.createElement("div").style;
  fe.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = vt(e, "opacity");
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
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": de.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(e, t, n, o) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, r, a, s = fe.camelCase(t), l = e.style;
              if (t = fe.cssProps[s] || (fe.cssProps[s] = D(s) || s),
              a = fe.cssHooks[t] || fe.cssHooks[s],
              n === undefined)
                  return a && "get"in a && (i = a.get(e, !1, o)) !== undefined ? i : l[t];
              if ("string" === (r = typeof n) && (i = Pe.exec(n)) && i[1] && (n = d(e, t, i),
              r = "number"),
              null != n && n == n && ("number" === r && (n += i && i[3] || (fe.cssNumber[s] ? "" : "px")),
              de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
              !(a && "set"in a && (n = a.set(e, n, o)) === undefined)))
                  try {
                      l[t] = n
                  } catch (c) {}
          }
      },
      css: function(e, t, n, o) {
          var i, r, a, s = fe.camelCase(t);
          return t = fe.cssProps[s] || (fe.cssProps[s] = D(s) || s),
          (a = fe.cssHooks[t] || fe.cssHooks[s]) && "get"in a && (r = a.get(e, !0, n)),
          r === undefined && (r = vt(e, t, o)),
          "normal" === r && t in Tt && (r = Tt[t]),
          "" === n || n ? (i = parseFloat(r),
          !0 === n || isFinite(i) ? i || 0 : r) : r
      }
  }),
  fe.each(["height", "width"], function(e, i) {
      fe.cssHooks[i] = {
          get: function(e, t, n) {
              if (t)
                  return Et.test(fe.css(e, "display")) && 0 === e.offsetWidth ? ht(e, kt, function() {
                      return H(e, i, n)
                  }) : H(e, i, n)
          },
          set: function(e, t, n) {
              var o = n && gt(e);
              return M(e, t, n ? N(e, i, n, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o), o) : 0)
          }
      }
  }),
  de.opacity || (fe.cssHooks.opacity = {
      get: function(e, t) {
          return wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(e, t) {
          var n = e.style
            , o = e.currentStyle
            , i = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
            , r = o && o.filter || n.filter || "";
          ((n.zoom = 1) <= t || "" === t) && "" === fe.trim(r.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
          "" === t || o && !o.filter) || (n.filter = bt.test(r) ? r.replace(bt, i) : r + " " + i)
      }
  }),
  fe.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
      if (t)
          return ht(e, {
              display: "inline-block"
          }, vt, [e, "marginRight"])
  }),
  fe.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
      if (t)
          return (parseFloat(vt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
              marginLeft: 0
          }, function() {
              return e.getBoundingClientRect().left
          }) : 0)) + "px"
  }),
  fe.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(i, r) {
      fe.cssHooks[i + r] = {
          expand: function(e) {
              for (var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                  n[i + Ve[t] + r] = o[t] || o[t - 2] || o[0];
              return n
          }
      },
      pt.test(i) || (fe.cssHooks[i + r].set = M)
  }),
  fe.fn.extend({
      css: function(e, t) {
          return Be(this, function(e, t, n) {
              var o, i, r = {}, a = 0;
              if (fe.isArray(t)) {
                  for (o = gt(e),
                  i = t.length; a < i; a++)
                      r[t[a]] = fe.css(e, t[a], !1, o);
                  return r
              }
              return n !== undefined ? fe.style(e, t, n) : fe.css(e, t)
          }, e, t, 1 < arguments.length)
      },
      show: function() {
          return $(this, !0)
      },
      hide: function() {
          return $(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              Fe(this) ? fe(this).show() : fe(this).hide()
          })
      }
  }),
  (fe.Tween = G).prototype = {
      constructor: G,
      init: function(e, t, n, o, i, r) {
          this.elem = e,
          this.prop = n,
          this.easing = i || fe.easing._default,
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = o,
          this.unit = r || (fe.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = G.propHooks[this.prop];
          return e && e.get ? e.get(this) : G.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = G.propHooks[this.prop];
          return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : G.propHooks._default.set(this),
          this
      }
  },
  G.prototype.init.prototype = G.prototype,
  G.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  },
  G.propHooks.scrollTop = G.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  },
  fe.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  },
  fe.fx = G.prototype.init,
  fe.fx.step = {};
  var Lt, _t, At, Ot, jt, Dt, $t, Mt = /^(?:toggle|show|hide)$/, Nt = /queueHooks$/;
  fe.Animation = fe.extend(U, {
      tweeners: {
          "*": [function(e, t) {
              var n = this.createTween(e, t);
              return d(n.elem, e, Pe.exec(t), n),
              n
          }
          ]
      },
      tweener: function(e, t) {
          fe.isFunction(e) ? (t = e,
          e = ["*"]) : e = e.match(Oe);
          for (var n, o = 0, i = e.length; o < i; o++)
              n = e[o],
              U.tweeners[n] = U.tweeners[n] || [],
              U.tweeners[n].unshift(t)
      },
      prefilters: [F],
      prefilter: function(e, t) {
          t ? U.prefilters.unshift(e) : U.prefilters.push(e)
      }
  }),
  fe.speed = function(e, t, n) {
      var o = e && "object" == typeof e ? fe.extend({}, e) : {
          complete: n || !n && t || fe.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !fe.isFunction(t) && t
      };
      return o.duration = fe.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in fe.fx.speeds ? fe.fx.speeds[o.duration] : fe.fx.speeds._default,
      null != o.queue && !0 !== o.queue || (o.queue = "fx"),
      o.old = o.complete,
      o.complete = function() {
          fe.isFunction(o.old) && o.old.call(this),
          o.queue && fe.dequeue(this, o.queue)
      }
      ,
      o
  }
  ,
  fe.fn.extend({
      fadeTo: function(e, t, n, o) {
          return this.filter(Fe).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, o)
      },
      animate: function(t, e, n, o) {
          var i = fe.isEmptyObject(t)
            , r = fe.speed(e, n, o)
            , a = function() {
              var e = U(this, fe.extend({}, t), r);
              (i || fe._data(this, "finish")) && e.stop(!0)
          };
          return a.finish = a,
          i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
      },
      stop: function(i, e, r) {
          var a = function(e) {
              var t = e.stop;
              delete e.stop,
              t(r)
          };
          return "string" != typeof i && (r = e,
          e = i,
          i = undefined),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function() {
              var e = !0
                , t = null != i && i + "queueHooks"
                , n = fe.timers
                , o = fe._data(this);
              if (t)
                  o[t] && o[t].stop && a(o[t]);
              else
                  for (t in o)
                      o[t] && o[t].stop && Nt.test(t) && a(o[t]);
              for (t = n.length; t--; )
                  n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(r),
                  e = !1,
                  n.splice(t, 1));
              !e && r || fe.dequeue(this, i)
          })
      },
      finish: function(a) {
          return !1 !== a && (a = a || "fx"),
          this.each(function() {
              var e, t = fe._data(this), n = t[a + "queue"], o = t[a + "queueHooks"], i = fe.timers, r = n ? n.length : 0;
              for (t.finish = !0,
              fe.queue(this, a, []),
              o && o.stop && o.stop.call(this, !0),
              e = i.length; e--; )
                  i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                  i.splice(e, 1));
              for (e = 0; e < r; e++)
                  n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish
          })
      }
  }),
  fe.each(["toggle", "show", "hide"], function(e, o) {
      var i = fe.fn[o];
      fe.fn[o] = function(e, t, n) {
          return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(P(o, !0), e, t, n)
      }
  }),
  fe.each({
      slideDown: P("show"),
      slideUp: P("hide"),
      slideToggle: P("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, o) {
      fe.fn[e] = function(e, t, n) {
          return this.animate(o, e, t, n)
      }
  }),
  fe.timers = [],
  fe.fx.tick = function() {
      var e, t = fe.timers, n = 0;
      for (Lt = fe.now(); n < t.length; n++)
          (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || fe.fx.stop(),
      Lt = undefined
  }
  ,
  fe.fx.timer = function(e) {
      fe.timers.push(e),
      e() ? fe.fx.start() : fe.timers.pop()
  }
  ,
  fe.fx.interval = 13,
  fe.fx.start = function() {
      _t || (_t = k.setInterval(fe.fx.tick, fe.fx.interval))
  }
  ,
  fe.fx.stop = function() {
      k.clearInterval(_t),
      _t = null
  }
  ,
  fe.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  fe.fn.delay = function(o, e) {
      return o = fe.fx && fe.fx.speeds[o] || o,
      e = e || "fx",
      this.queue(e, function(e, t) {
          var n = k.setTimeout(e, o);
          t.stop = function() {
              k.clearTimeout(n)
          }
      })
  }
  ,
  Ot = oe.createElement("input"),
  jt = oe.createElement("div"),
  Dt = oe.createElement("select"),
  $t = Dt.appendChild(oe.createElement("option")),
  (jt = oe.createElement("div")).setAttribute("className", "t"),
  jt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
  At = jt.getElementsByTagName("a")[0],
  Ot.setAttribute("type", "checkbox"),
  jt.appendChild(Ot),
  (At = jt.getElementsByTagName("a")[0]).style.cssText = "top:1px",
  de.getSetAttribute = "t" !== jt.className,
  de.style = /top/.test(At.getAttribute("style")),
  de.hrefNormalized = "/a" === At.getAttribute("href"),
  de.checkOn = !!Ot.value,
  de.optSelected = $t.selected,
  de.enctype = !!oe.createElement("form").enctype,
  Dt.disabled = !0,
  de.optDisabled = !$t.disabled,
  (Ot = oe.createElement("input")).setAttribute("value", ""),
  de.input = "" === Ot.getAttribute("value"),
  Ot.value = "t",
  Ot.setAttribute("type", "radio"),
  de.radioValue = "t" === Ot.value;
  var Ht = /\r/g
    , Gt = /[\x20\t\r\n\f]+/g;
  fe.fn.extend({
      val: function(n) {
          var o, e, i, t = this[0];
          return arguments.length ? (i = fe.isFunction(n),
          this.each(function(e) {
              var t;
              1 === this.nodeType && (null == (t = i ? n.call(this, e, fe(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : fe.isArray(t) && (t = fe.map(t, function(e) {
                  return null == e ? "" : e + ""
              })),
              (o = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set"in o && o.set(this, t, "value") !== undefined || (this.value = t))
          })) : t ? (o = fe.valHooks[t.type] || fe.valHooks[t.nodeName.toLowerCase()]) && "get"in o && (e = o.get(t, "value")) !== undefined ? e : "string" == typeof (e = t.value) ? e.replace(Ht, "") : null == e ? "" : e : void 0
      }
  }),
  fe.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = fe.find.attr(e, "value");
                  return null != t ? t : fe.trim(fe.text(e)).replace(Gt, " ")
              }
          },
          select: {
              get: function(e) {
                  for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || i < 0, a = r ? null : [], s = r ? i + 1 : o.length, l = i < 0 ? s : r ? i : 0; l < s; l++)
                      if (((n = o[l]).selected || l === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                          if (t = fe(n).val(),
                          r)
                              return t;
                          a.push(t)
                      }
                  return a
              },
              set: function(e, t) {
                  for (var n, o, i = e.options, r = fe.makeArray(t), a = i.length; a--; )
                      if (o = i[a],
                      -1 < fe.inArray(fe.valHooks.option.get(o), r))
                          try {
                              o.selected = n = !0
                          } catch (s) {
                              o.scrollHeight
                          }
                      else
                          o.selected = !1;
                  return n || (e.selectedIndex = -1),
                  i
              }
          }
      }
  }),
  fe.each(["radio", "checkbox"], function() {
      fe.valHooks[this] = {
          set: function(e, t) {
              if (fe.isArray(t))
                  return e.checked = -1 < fe.inArray(fe(e).val(), t)
          }
      },
      de.checkOn || (fe.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      }
      )
  });
  var It, Pt, Vt = fe.expr.attrHandle, Ft = /^(?:checked|selected)$/i, Bt = de.getSetAttribute, Ut = de.input;
  fe.fn.extend({
      attr: function(e, t) {
          return Be(this, fe.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
          return this.each(function() {
              fe.removeAttr(this, e)
          })
      }
  }),
  fe.extend({
      attr: function(e, t, n) {
          var o, i, r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
              return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === r && fe.isXMLDoc(e) || (t = t.toLowerCase(),
              i = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Pt : It)),
              n !== undefined ? null === n ? void fe.removeAttr(e, t) : i && "set"in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""),
              n) : i && "get"in i && null !== (o = i.get(e, t)) ? o : null == (o = fe.find.attr(e, t)) ? undefined : o)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t),
                      n && (e.value = n),
                      t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, o, i = 0, r = t && t.match(Oe);
          if (r && 1 === e.nodeType)
              for (; n = r[i++]; )
                  o = fe.propFix[n] || n,
                  fe.expr.match.bool.test(n) ? Ut && Bt || !Ft.test(n) ? e[o] = !1 : e[fe.camelCase("default-" + n)] = e[o] = !1 : fe.attr(e, n, ""),
                  e.removeAttribute(Bt ? n : o)
      }
  }),
  Pt = {
      set: function(e, t, n) {
          return !1 === t ? fe.removeAttr(e, n) : Ut && Bt || !Ft.test(n) ? e.setAttribute(!Bt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0,
          n
      }
  },
  fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var r = Vt[t] || fe.find.attr;
      Ut && Bt || !Ft.test(t) ? Vt[t] = function(e, t, n) {
          var o, i;
          return n || (i = Vt[t],
          Vt[t] = o,
          o = null != r(e, t, n) ? t.toLowerCase() : null,
          Vt[t] = i),
          o
      }
      : Vt[t] = function(e, t, n) {
          if (!n)
              return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
  }),
  Ut && Bt || (fe.attrHooks.value = {
      set: function(e, t, n) {
          if (!fe.nodeName(e, "input"))
              return It && It.set(e, t, n);
          e.defaultValue = t
      }
  }),
  Bt || (It = {
      set: function(e, t, n) {
          var o = e.getAttributeNode(n);
          if (o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)),
          o.value = t += "",
          "value" === n || t === e.getAttribute(n))
              return t
      }
  },
  Vt.id = Vt.name = Vt.coords = function(e, t, n) {
      var o;
      if (!n)
          return (o = e.getAttributeNode(t)) && "" !== o.value ? o.value : null
  }
  ,
  fe.valHooks.button = {
      get: function(e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified)
              return n.value
      },
      set: It.set
  },
  fe.attrHooks.contenteditable = {
      set: function(e, t, n) {
          It.set(e, "" !== t && t, n)
      }
  },
  fe.each(["width", "height"], function(e, n) {
      fe.attrHooks[n] = {
          set: function(e, t) {
              if ("" === t)
                  return e.setAttribute(n, "auto"),
                  t
          }
      }
  })),
  de.style || (fe.attrHooks.style = {
      get: function(e) {
          return e.style.cssText || undefined
      },
      set: function(e, t) {
          return e.style.cssText = t + ""
      }
  });
  var qt = /^(?:input|select|textarea|button|object)$/i
    , Kt = /^(?:a|area)$/i;
  fe.fn.extend({
      prop: function(e, t) {
          return Be(this, fe.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(t) {
          return t = fe.propFix[t] || t,
          this.each(function() {
              try {
                  this[t] = undefined,
                  delete this[t]
              } catch (e) {}
          })
      }
  }),
  fe.extend({
      prop: function(e, t, n) {
          var o, i, r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
              return 1 === r && fe.isXMLDoc(e) || (t = fe.propFix[t] || t,
              i = fe.propHooks[t]),
              n !== undefined ? i && "set"in i && (o = i.set(e, n, t)) !== undefined ? o : e[t] = n : i && "get"in i && null !== (o = i.get(e, t)) ? o : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = fe.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : qt.test(e.nodeName) || Kt.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  }),
  de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
      fe.propHooks[t] = {
          get: function(e) {
              return e.getAttribute(t, 4)
          }
      }
  }),
  de.optSelected || (fe.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && (t.selectedIndex,
          t.parentNode && t.parentNode.selectedIndex),
          null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex,
          t.parentNode && t.parentNode.selectedIndex)
      }
  }),
  fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      fe.propFix[this.toLowerCase()] = this
  }),
  de.enctype || (fe.propFix.enctype = "encoding");
  var Wt = /[\t\r\n\f]/g;
  fe.fn.extend({
      addClass: function(t) {
          var e, n, o, i, r, a, s, l = 0;
          if (fe.isFunction(t))
              return this.each(function(e) {
                  fe(this).addClass(t.call(this, e, q(this)))
              });
          if ("string" == typeof t && t)
              for (e = t.match(Oe) || []; n = this[l++]; )
                  if (i = q(n),
                  o = 1 === n.nodeType && (" " + i + " ").replace(Wt, " ")) {
                      for (a = 0; r = e[a++]; )
                          o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                      i !== (s = fe.trim(o)) && fe.attr(n, "class", s)
                  }
          return this
      },
      removeClass: function(t) {
          var e, n, o, i, r, a, s, l = 0;
          if (fe.isFunction(t))
              return this.each(function(e) {
                  fe(this).removeClass(t.call(this, e, q(this)))
              });
          if (!arguments.length)
              return this.attr("class", "");
          if ("string" == typeof t && t)
              for (e = t.match(Oe) || []; n = this[l++]; )
                  if (i = q(n),
                  o = 1 === n.nodeType && (" " + i + " ").replace(Wt, " ")) {
                      for (a = 0; r = e[a++]; )
                          for (; -1 < o.indexOf(" " + r + " "); )
                              o = o.replace(" " + r + " ", " ");
                      i !== (s = fe.trim(o)) && fe.attr(n, "class", s)
                  }
          return this
      },
      toggleClass: function(i, t) {
          var r = typeof i;
          return "boolean" == typeof t && "string" === r ? t ? this.addClass(i) : this.removeClass(i) : fe.isFunction(i) ? this.each(function(e) {
              fe(this).toggleClass(i.call(this, e, q(this), t), t)
          }) : this.each(function() {
              var e, t, n, o;
              if ("string" === r)
                  for (t = 0,
                  n = fe(this),
                  o = i.match(Oe) || []; e = o[t++]; )
                      n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                  i !== undefined && "boolean" !== r || ((e = q(this)) && fe._data(this, "__className__", e),
                  fe.attr(this, "class", e || !1 === i ? "" : fe._data(this, "__className__") || ""))
          })
      },
      hasClass: function(e) {
          var t, n, o = 0;
          for (t = " " + e + " "; n = this[o++]; )
              if (1 === n.nodeType && -1 < (" " + q(n) + " ").replace(Wt, " ").indexOf(t))
                  return !0;
          return !1
      }
  }),
  fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
      fe.fn[n] = function(e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
      }
  }),
  fe.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  });
  var Rt = k.location
    , Xt = fe.now()
    , zt = /\?/
    , Yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  fe.parseJSON = function(e) {
      if (k.JSON && k.JSON.parse)
          return k.JSON.parse(e + "");
      var i, r = null, t = fe.trim(e + "");
      return t && !fe.trim(t.replace(Yt, function(e, t, n, o) {
          return i && t && (r = 0),
          0 === r ? e : (i = n || t,
          r += !o - !n,
          "")
      })) ? Function("return " + t)() : fe.error("Invalid JSON: " + e)
  }
  ,
  fe.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e)
          return null;
      try {
          k.DOMParser ? t = (new k.DOMParser).parseFromString(e, "text/xml") : ((t = new k.ActiveXObject("Microsoft.XMLDOM")).async = "false",
          t.loadXML(e))
      } catch (n) {
          t = undefined
      }
      return t && t.documentElement && !t.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + e),
      t
  }
  ;
  var Jt = /#.*$/
    , Qt = /([?&])_=[^&]*/
    , Zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
    , en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , tn = /^(?:GET|HEAD)$/
    , nn = /^\/\//
    , on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
    , rn = {}
    , an = {}
    , sn = "*/".concat("*")
    , ln = Rt.href
    , cn = on.exec(ln.toLowerCase()) || [];
  fe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: ln,
          type: "GET",
          isLocal: en.test(cn[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": sn,
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
              "text json": fe.parseJSON,
              "text xml": fe.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? R(R(e, fe.ajaxSettings), t) : R(fe.ajaxSettings, e)
      },
      ajaxPrefilter: K(rn),
      ajaxTransport: K(an),
      ajax: function(e, t) {
          function n(e, t, n, o) {
              var i, r, a, s, l, c = t;
              2 !== E && (E = 2,
              p && k.clearTimeout(p),
              h = undefined,
              d = o || "",
              x.readyState = 0 < e ? 4 : 0,
              i = 200 <= e && e < 300 || 304 === e,
              n && (s = X(m, x, n)),
              s = z(m, s, x, i),
              i ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (fe.lastModified[u] = l),
              (l = x.getResponseHeader("etag")) && (fe.etag[u] = l)),
              204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state,
              r = s.data,
              i = !(a = s.error))) : (a = c,
              !e && c || (c = "error",
              e < 0 && (e = 0))),
              x.status = e,
              x.statusText = (t || c) + "",
              i ? y.resolveWith(g, [r, c, x]) : y.rejectWith(g, [x, c, a]),
              x.statusCode(w),
              w = undefined,
              f && v.trigger(i ? "ajaxSuccess" : "ajaxError", [x, m, i ? r : a]),
              b.fireWith(g, [x, c]),
              f && (v.trigger("ajaxComplete", [x, m]),
              --fe.active || fe.event.trigger("ajaxStop")))
          }
          "object" == typeof e && (t = e,
          e = undefined),
          t = t || {};
          var o, i, u, d, p, f, h, r, m = fe.ajaxSetup({}, t), g = m.context || m, v = m.context && (g.nodeType || g.jquery) ? fe(g) : fe.event, y = fe.Deferred(), b = fe.Callbacks("once memory"), w = m.statusCode || {}, a = {}, s = {}, E = 0, l = "canceled", x = {
              readyState: 0,
              getResponseHeader: function(e) {
                  var t;
                  if (2 === E) {
                      if (!r)
                          for (r = {}; t = Zt.exec(d); )
                              r[t[1].toLowerCase()] = t[2];
                      t = r[e.toLowerCase()]
                  }
                  return null == t ? null : t
              },
              getAllResponseHeaders: function() {
                  return 2 === E ? d : null
              },
              setRequestHeader: function(e, t) {
                  var n = e.toLowerCase();
                  return E || (e = s[n] = s[n] || e,
                  a[e] = t),
                  this
              },
              overrideMimeType: function(e) {
                  return E || (m.mimeType = e),
                  this
              },
              statusCode: function(e) {
                  var t;
                  if (e)
                      if (E < 2)
                          for (t in e)
                              w[t] = [w[t], e[t]];
                      else
                          x.always(e[x.status]);
                  return this
              },
              abort: function(e) {
                  var t = e || l;
                  return h && h.abort(t),
                  n(0, t),
                  this
              }
          };
          if (y.promise(x).complete = b.add,
          x.success = x.done,
          x.error = x.fail,
          m.url = ((e || m.url || ln) + "").replace(Jt, "").replace(nn, cn[1] + "//"),
          m.type = t.method || t.type || m.method || m.type,
          m.dataTypes = fe.trim(m.dataType || "*").toLowerCase().match(Oe) || [""],
          null == m.crossDomain && (o = on.exec(m.url.toLowerCase()),
          m.crossDomain = !(!o || o[1] === cn[1] && o[2] === cn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (cn[3] || ("http:" === cn[1] ? "80" : "443")))),
          m.data && m.processData && "string" != typeof m.data && (m.data = fe.param(m.data, m.traditional)),
          W(rn, m, t, x),
          2 === E)
              return x;
          for (i in (f = fe.event && m.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"),
          m.type = m.type.toUpperCase(),
          m.hasContent = !tn.test(m.type),
          u = m.url,
          m.hasContent || (m.data && (u = m.url += (zt.test(u) ? "&" : "?") + m.data,
          delete m.data),
          !1 === m.cache && (m.url = Qt.test(u) ? u.replace(Qt, "$1_=" + Xt++) : u + (zt.test(u) ? "&" : "?") + "_=" + Xt++)),
          m.ifModified && (fe.lastModified[u] && x.setRequestHeader("If-Modified-Since", fe.lastModified[u]),
          fe.etag[u] && x.setRequestHeader("If-None-Match", fe.etag[u])),
          (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType),
          x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : m.accepts["*"]),
          m.headers)
              x.setRequestHeader(i, m.headers[i]);
          if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || 2 === E))
              return x.abort();
          for (i in l = "abort",
          {
              success: 1,
              error: 1,
              complete: 1
          })
              x[i](m[i]);
          if (h = W(an, m, t, x)) {
              if (x.readyState = 1,
              f && v.trigger("ajaxSend", [x, m]),
              2 === E)
                  return x;
              m.async && 0 < m.timeout && (p = k.setTimeout(function() {
                  x.abort("timeout")
              }, m.timeout));
              try {
                  E = 1,
                  h.send(a, n)
              } catch (c) {
                  if (!(E < 2))
                      throw c;
                  n(-1, c)
              }
          } else
              n(-1, "No Transport");
          return x
      },
      getJSON: function(e, t, n) {
          return fe.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return fe.get(e, undefined, t, "script")
      }
  }),
  fe.each(["get", "post"], function(e, i) {
      fe[i] = function(e, t, n, o) {
          return fe.isFunction(t) && (o = o || n,
          n = t,
          t = undefined),
          fe.ajax(fe.extend({
              url: e,
              type: i,
              dataType: o,
              data: t,
              success: n
          }, fe.isPlainObject(e) && e))
      }
  }),
  fe._evalUrl = function(e) {
      return fe.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          "throws": !0
      })
  }
  ,
  fe.fn.extend({
      wrapAll: function(t) {
          if (fe.isFunction(t))
              return this.each(function(e) {
                  fe(this).wrapAll(t.call(this, e))
              });
          if (this[0]) {
              var e = fe(t, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && e.insertBefore(this[0]),
              e.map(function() {
                  for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                      e = e.firstChild;
                  return e
              }).append(this)
          }
          return this
      },
      wrapInner: function(n) {
          return fe.isFunction(n) ? this.each(function(e) {
              fe(this).wrapInner(n.call(this, e))
          }) : this.each(function() {
              var e = fe(this)
                , t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n)
          })
      },
      wrap: function(t) {
          var n = fe.isFunction(t);
          return this.each(function(e) {
              fe(this).wrapAll(n ? t.call(this, e) : t)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
          }).end()
      }
  }),
  fe.expr.filters.hidden = function(e) {
      return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
  }
  ,
  fe.expr.filters.visible = function(e) {
      return !fe.expr.filters.hidden(e)
  }
  ;
  var un = /%20/g
    , dn = /\[\]$/
    , pn = /\r?\n/g
    , fn = /^(?:submit|button|image|reset|file)$/i
    , hn = /^(?:input|select|textarea|keygen)/i;
  fe.param = function(e, t) {
      var n, o = [], i = function(e, t) {
          t = fe.isFunction(t) ? t() : null == t ? "" : t,
          o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (t === undefined && (t = fe.ajaxSettings && fe.ajaxSettings.traditional),
      fe.isArray(e) || e.jquery && !fe.isPlainObject(e))
          fe.each(e, function() {
              i(this.name, this.value)
          });
      else
          for (n in e)
              Q(n, e[n], t, i);
      return o.join("&").replace(un, "+")
  }
  ,
  fe.fn.extend({
      serialize: function() {
          return fe.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = fe.prop(this, "elements");
              return e ? fe.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !fe(this).is(":disabled") && hn.test(this.nodeName) && !fn.test(e) && (this.checked || !Ue.test(e))
          }).map(function(e, t) {
              var n = fe(this).val();
              return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(pn, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(pn, "\r\n")
              }
          }).get()
      }
  }),
  fe.ajaxSettings.xhr = k.ActiveXObject !== undefined ? function() {
      return this.isLocal ? ee() : 8 < oe.documentMode ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
  }
  : Z;
  var mn = 0
    , gn = {}
    , vn = fe.ajaxSettings.xhr();
  k.attachEvent && k.attachEvent("onunload", function() {
      for (var e in gn)
          gn[e](undefined, !0)
  }),
  de.cors = !!vn && "withCredentials"in vn,
  (vn = de.ajax = !!vn) && fe.ajaxTransport(function(c) {
      var u;
      if (!c.crossDomain || de.cors)
          return {
              send: function(e, a) {
                  var t, s = c.xhr(), l = ++mn;
                  if (s.open(c.type, c.url, c.async, c.username, c.password),
                  c.xhrFields)
                      for (t in c.xhrFields)
                          s[t] = c.xhrFields[t];
                  for (t in c.mimeType && s.overrideMimeType && s.overrideMimeType(c.mimeType),
                  c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                  e)
                      e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
                  s.send(c.hasContent && c.data || null),
                  u = function(e, t) {
                      var n, o, i;
                      if (u && (t || 4 === s.readyState))
                          if (delete gn[l],
                          u = undefined,
                          s.onreadystatechange = fe.noop,
                          t)
                              4 !== s.readyState && s.abort();
                          else {
                              i = {},
                              n = s.status,
                              "string" == typeof s.responseText && (i.text = s.responseText);
                              try {
                                  o = s.statusText
                              } catch (r) {
                                  o = ""
                              }
                              n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                          }
                      i && a(n, o, i, s.getAllResponseHeaders())
                  }
                  ,
                  c.async ? 4 === s.readyState ? k.setTimeout(u) : s.onreadystatechange = gn[l] = u : u()
              },
              abort: function() {
                  u && u(undefined, !0)
              }
          }
  }),
  fe.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return fe.globalEval(e),
              e
          }
      }
  }),
  fe.ajaxPrefilter("script", function(e) {
      e.cache === undefined && (e.cache = !1),
      e.crossDomain && (e.type = "GET",
      e.global = !1)
  }),
  fe.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
          var o, i = oe.head || fe("head")[0] || oe.documentElement;
          return {
              send: function(e, n) {
                  (o = oe.createElement("script")).async = !0,
                  t.scriptCharset && (o.charset = t.scriptCharset),
                  o.src = t.url,
                  o.onload = o.onreadystatechange = function(e, t) {
                      (t || !o.readyState || /loaded|complete/.test(o.readyState)) && (o.onload = o.onreadystatechange = null,
                      o.parentNode && o.parentNode.removeChild(o),
                      o = null,
                      t || n(200, "success"))
                  }
                  ,
                  i.insertBefore(o, i.firstChild)
              },
              abort: function() {
                  o && o.onload(undefined, !0)
              }
          }
      }
  });
  var yn = []
    , bn = /(=)\?(?=&|$)|\?\?/;
  fe.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = yn.pop() || fe.expando + "_" + Xt++;
          return this[e] = !0,
          e
      }
  }),
  fe.ajaxPrefilter("json jsonp", function(e, t, n) {
      var o, i, r, a = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0])
          return o = e.jsonpCallback = fe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
          a ? e[a] = e[a].replace(bn, "$1" + o) : !1 !== e.jsonp && (e.url += (zt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          e.converters["script json"] = function() {
              return r || fe.error(o + " was not called"),
              r[0]
          }
          ,
          e.dataTypes[0] = "json",
          i = k[o],
          k[o] = function() {
              r = arguments
          }
          ,
          n.always(function() {
              i === undefined ? fe(k).removeProp(o) : k[o] = i,
              e[o] && (e.jsonpCallback = t.jsonpCallback,
              yn.push(o)),
              r && fe.isFunction(i) && i(r[0]),
              r = i = undefined
          }),
          "script"
  }),
  fe.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e)
          return null;
      "boolean" == typeof t && (n = t,
      t = !1),
      t = t || oe;
      var o = xe.exec(e)
        , i = !n && [];
      return o ? [t.createElement(o[1])] : (o = m([e], t, i),
      i && i.length && fe(i).remove(),
      fe.merge([], o.childNodes))
  }
  ;
  var wn = fe.fn.load;
  fe.fn.load = function(e, t, n) {
      if ("string" != typeof e && wn)
          return wn.apply(this, arguments);
      var o, i, r, a = this, s = e.indexOf(" ");
      return -1 < s && (o = fe.trim(e.slice(s, e.length)),
      e = e.slice(0, s)),
      fe.isFunction(t) ? (n = t,
      t = undefined) : t && "object" == typeof t && (i = "POST"),
      0 < a.length && fe.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
      }).done(function(e) {
          r = arguments,
          a.html(o ? fe("<div>").append(fe.parseHTML(e)).find(o) : e)
      }).always(n && function(e, t) {
          a.each(function() {
              n.apply(this, r || [e.responseText, t, e])
          })
      }
      ),
      this
  }
  ,
  fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      fe.fn[t] = function(e) {
          return this.on(t, e)
      }
  }),
  fe.expr.filters.animated = function(t) {
      return fe.grep(fe.timers, function(e) {
          return t === e.elem
      }).length
  }
  ,
  fe.offset = {
      setOffset: function(e, t, n) {
          var o, i, r, a, s, l, c = fe.css(e, "position"), u = fe(e), d = {};
          "static" === c && (e.style.position = "relative"),
          s = u.offset(),
          r = fe.css(e, "top"),
          l = fe.css(e, "left"),
          ("absolute" === c || "fixed" === c) && -1 < fe.inArray("auto", [r, l]) ? (a = (o = u.position()).top,
          i = o.left) : (a = parseFloat(r) || 0,
          i = parseFloat(l) || 0),
          fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + i),
          "using"in t ? t.using.call(e, d) : u.css(d)
      }
  },
  fe.fn.extend({
      offset: function(t) {
          if (arguments.length)
              return t === undefined ? this : this.each(function(e) {
                  fe.offset.setOffset(this, t, e)
              });
          var e, n, o = {
              top: 0,
              left: 0
          }, i = this[0], r = i && i.ownerDocument;
          return r ? (e = r.documentElement,
          fe.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (o = i.getBoundingClientRect()),
          n = te(r),
          {
              top: o.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
              left: o.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
          }) : o) : void 0
      },
      position: function() {
          if (this[0]) {
              var e, t, n = {
                  top: 0,
                  left: 0
              }, o = this[0];
              return "fixed" === fe.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(),
              t = this.offset(),
              fe.nodeName(e[0], "html") || (n = e.offset()),
              n.top += fe.css(e[0], "borderTopWidth", !0),
              n.left += fe.css(e[0], "borderLeftWidth", !0)),
              {
                  top: t.top - n.top - fe.css(o, "marginTop", !0),
                  left: t.left - n.left - fe.css(o, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position"); )
                  e = e.offsetParent;
              return e || mt
          })
      }
  }),
  fe.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, i) {
      var r = /Y/.test(i);
      fe.fn[t] = function(e) {
          return Be(this, function(e, t, n) {
              var o = te(e);
              if (n === undefined)
                  return o ? i in o ? o[i] : o.document.documentElement[t] : e[t];
              o ? o.scrollTo(r ? fe(o).scrollLeft() : n, r ? n : fe(o).scrollTop()) : e[t] = n
          }, t, e, arguments.length, null)
      }
  }),
  fe.each(["top", "left"], function(e, n) {
      fe.cssHooks[n] = j(de.pixelPosition, function(e, t) {
          if (t)
              return t = vt(e, n),
              ft.test(t) ? fe(e).position()[n] + "px" : t
      })
  }),
  fe.each({
      Height: "height",
      Width: "width"
  }, function(r, a) {
      fe.each({
          padding: "inner" + r,
          content: a,
          "": "outer" + r
      }, function(o, e) {
          fe.fn[e] = function(e, t) {
              var n = arguments.length && (o || "boolean" != typeof e)
                , i = o || (!0 === e || !0 === t ? "margin" : "border");
              return Be(this, function(e, t, n) {
                  var o;
                  return fe.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (o = e.documentElement,
                  Math.max(e.body["scroll" + r], o["scroll" + r], e.body["offset" + r], o["offset" + r], o["client" + r])) : n === undefined ? fe.css(e, t, i) : fe.style(e, t, n, i)
              }, a, n ? e : undefined, n, null)
          }
      })
  }),
  fe.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, o) {
          return this.on(t, e, n, o)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  }),
  fe.fn.size = function() {
      return this.length
  }
  ,
  fe.fn.andSelf = fe.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return fe
  });
  var En = k.jQuery
    , xn = k.$;
  return fe.noConflict = function(e) {
      return k.$ === fe && (k.$ = xn),
      e && k.jQuery === fe && (k.jQuery = En),
      fe
  }
  ,
  e || (k.jQuery = k.$ = fe),
  fe
}),
function(e) {
  "use strict";
  var d = e.jQuery
    , p = e.GOVUK || {};
  p.Modules = p.Modules || {},
  p.modules = {
      find: function(e) {
          var t, n = "[data-module]";
          return t = (e = e || d(document)).find(n),
          e.is(n) && (t = t.add(e)),
          t
      },
      start: function(e) {
          function t(e) {
              return o(n(e))
          }
          function n(e) {
              return e.replace(/-([a-z])/g, function(e) {
                  return e.charAt(1).toUpperCase()
              })
          }
          function o(e) {
              return e.charAt(0).toUpperCase() + e.slice(1)
          }
          for (var i = this.find(e), r = 0, a = i.length; r < a; r++) {
              var s = d(i[r])
                , l = t(s.data("module"))
                , c = s.data("module-started")
                , u = l.replace("Govuk", "");
              "function" != typeof p.Modules[l] || p.Modules[l].prototype.init || c || ((new p.Modules[l]).start(s),
              s.data("module-started", !0)),
              "function" == typeof p.Modules[u] && p.Modules[u].prototype.init && !c && (new p.Modules[u](s[0]).init(),
              s.data("module-started", !0))
          }
      }
  },
  e.GOVUK = p
}(window),
$(document).ready(function() {
  "use strict";
  window.GOVUK.modules.start()
}),
function() {
  "use strict";
  window.GOVUK = window.GOVUK || {};
  var i = {
      essential: !0,
      settings: !1,
      usage: !1,
      campaigns: !1
  }
    , r = {
      cookies_policy: "essential",
      seen_cookie_message: "essential",
      cookie_preferences_set: "essential",
      cookies_preferences_set: "essential",
      "_email-alert-frontend_session": "essential",
      licensing_session: "essential",
      govuk_contact_referrer: "essential",
      multivariatetest_cohort_coronavirus_extremely_vulnerable_rate_limit: "essential",
      dgu_beta_banner_dismissed: "settings",
      global_bar_seen: "settings",
      govuk_browser_upgrade_dismisssed: "settings",
      govuk_not_first_visit: "settings",
      analytics_next_page_call: "usage",
      user_nation: "settings",
      _ga: "usage",
      _gid: "usage",
      _gat: "usage",
      "JS-Detection": "usage",
      TLSversion: "usage"
  };
  window.GOVUK.cookie = function(e, t, n) {
      return void 0 !== t ? !1 === t || null === t ? window.GOVUK.setCookie(e, "", {
          days: -1
      }) : (void 0 === n && (n = {
          days: 30
      }),
      window.GOVUK.setCookie(e, t, n)) : window.GOVUK.getCookie(e)
  }
  ,
  window.GOVUK.setDefaultConsentCookie = function() {
      window.GOVUK.setConsentCookie(i)
  }
  ,
  window.GOVUK.approveAllCookieTypes = function() {
      var e = {
          essential: !0,
          settings: !0,
          usage: !0,
          campaigns: !0
      };
      window.GOVUK.setCookie("cookies_policy", JSON.stringify(e), {
          days: 365
      })
  }
  ,
  window.GOVUK.getConsentCookie = function() {
      var e, t = window.GOVUK.cookie("cookies_policy");
      if (!t)
          return null;
      try {
          e = JSON.parse(t)
      } catch (n) {
          return null
      }
      return "object" != typeof e && null !== e && (e = JSON.parse(e)),
      e
  }
  ,
  window.GOVUK.setConsentCookie = function(e) {
      var t = window.GOVUK.getConsentCookie();
      for (var n in t || (t = JSON.parse(JSON.stringify(i))),
      e)
          if (t[n] = e[n],
          !e[n])
              for (var o in r)
                  r[o] === n && window.GOVUK.deleteCookie(o);
      window.GOVUK.setCookie("cookies_policy", JSON.stringify(t), {
          days: 365
      })
  }
  ,
  window.GOVUK.checkConsentCookieCategory = function(e, t) {
      var n = window.GOVUK.getConsentCookie();
      if (!n && r[e])
          return !0;
      n = window.GOVUK.getConsentCookie();
      try {
          return n[t]
      } catch (o) {
          return console.error(o),
          !1
      }
  }
  ,
  window.GOVUK.checkConsentCookie = function(e, t) {
      if ("cookies_policy" === e || null === t || !1 === t)
          return !0;
      if (e.match("^govuk_surveySeen") || e.match("^govuk_taken"))
          return window.GOVUK.checkConsentCookieCategory(e, "settings");
      if (r[e]) {
          var n = r[e];
          return window.GOVUK.checkConsentCookieCategory(e, n)
      }
      return !1
  }
  ,
  window.GOVUK.setCookie = function(e, t, n) {
      if (window.GOVUK.checkConsentCookie(e, t)) {
          void 0 === n && (n = {});
          var o = e + "=" + t + "; path=/";
          if (n.days) {
              var i = new Date;
              i.setTime(i.getTime() + 24 * n.days * 60 * 60 * 1e3),
              o = o + "; expires=" + i.toGMTString()
          }
          "https:" === document.location.protocol && (o += "; Secure"),
          document.cookie = o
      }
  }
  ,
  window.GOVUK.getCookie = function(e) {
      for (var t = e + "=", n = document.cookie.split(";"), o = 0, i = n.length; o < i; o++) {
          for (var r = n[o]; " " === r.charAt(0); )
              r = r.substring(1, r.length);
          if (0 === r.indexOf(t))
              return decodeURIComponent(r.substring(t.length))
      }
      return null
  }
  ,
  window.GOVUK.getCookieCategory = function(e) {
      return r[e]
  }
  ,
  window.GOVUK.deleteCookie = function(e) {
      window.GOVUK.cookie(e, null),
      window.GOVUK.cookie(e) && (document.cookie = e + "=;expires=" + new Date + ";",
      document.cookie = e + "=;expires=" + new Date + ";domain=" + window.location.hostname + ";path=/")
  }
  ,
  window.GOVUK.deleteUnconsentedCookies = function() {
      var e = window.GOVUK.getConsentCookie();
      for (var t in e)
          if (!e[t])
              for (var n in r)
                  r[n] === t && window.GOVUK.deleteCookie(n)
  }
}(window),
function(e) {
  "use strict";
  window.GOVUK = window.GOVUK || {},
  window.GOVUK.getCurrentLocation = function() {
      return e.location
  }
}(window),
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : t()
}(0, function() {
  "use strict";
  (function() {
      var s, l, c, u;
      "defineProperty"in Object && function() {
          try {
              var e = {};
              return Object.defineProperty(e, "test", {
                  value: 42
              }),
              !0
          } catch (t) {
              return !1
          }
      }() || (s = Object.defineProperty,
      l = Object.prototype.hasOwnProperty("__defineGetter__"),
      c = "Getters & setters cannot be defined on this javascript engine",
      u = "A property cannot both have accessors and be writable or have a value",
      Object.defineProperty = function d(e, t, n) {
          if (s && (e === window || e === document || e === Element.prototype || e instanceof Element))
              return s(e, t, n);
          if (null === e || !(e instanceof Object || "object" == typeof e))
              throw new TypeError("Object.defineProperty called on non-object");
          if (!(n instanceof Object))
              throw new TypeError("Property description must be an object");
          var o = String(t)
            , i = "value"in n || "writable"in n
            , r = "get"in n && typeof n.get
            , a = "set"in n && typeof n.set;
          if (r) {
              if ("function" !== r)
                  throw new TypeError("Getter must be a function");
              if (!l)
                  throw new TypeError(c);
              if (i)
                  throw new TypeError(u);
              Object.__defineGetter__.call(e, o, n.get)
          } else
              e[o] = n.value;
          if (a) {
              if ("function" !== a)
                  throw new TypeError("Setter must be a function");
              if (!l)
                  throw new TypeError(c);
              if (i)
                  throw new TypeError(u);
              Object.__defineSetter__.call(e, o, n.set)
          }
          return "value"in n && (e[o] = n.value),
          e
      }
      )
  }
  ).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function(p) {
      var e, t, n;
      "DOMTokenList"in this && (!("classList"in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList"in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
          var i = !0
            , n = function(e, t, n, o) {
              Object.defineProperty ? Object.defineProperty(e, t, {
                  configurable: !1 === i || !!o,
                  get: n
              }) : e.__defineGetter__(t, n)
          };
          try {
              n({}, "support")
          } catch (e) {
              i = !1
          }
          return function(i, r) {
              var a = this
                , s = []
                , l = {}
                , c = 0
                , e = 0
                , t = function(e) {
                  n(a, e, function() {
                      return d(),
                      s[e]
                  }, !1)
              }
                , u = function() {
                  if (e <= c)
                      for (; e < c; ++e)
                          t(e)
              }
                , d = function() {
                  var e, t, n = arguments, o = /\s+/;
                  if (n.length)
                      for (t = 0; t < n.length; ++t)
                          if (o.test(n[t]))
                              throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5,
                              e.name = "InvalidCharacterError",
                              e;
                  for ("" === (s = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (s = []),
                  l = {},
                  t = 0; t < s.length; ++t)
                      l[s[t]] = !0;
                  c = s.length,
                  u()
              };
              return d(),
              n(a, "length", function() {
                  return d(),
                  c
              }),
              a.toLocaleString = a.toString = function() {
                  return d(),
                  s.join(" ")
              }
              ,
              a.item = function(e) {
                  return d(),
                  s[e]
              }
              ,
              a.contains = function(e) {
                  return d(),
                  !!l[e]
              }
              ,
              a.add = function() {
                  d.apply(a, e = arguments);
                  for (var e, t, n = 0, o = e.length; n < o; ++n)
                      t = e[n],
                      l[t] || (s.push(t),
                      l[t] = !0);
                  c !== s.length && (c = s.length >>> 0,
                  "object" == typeof i[r] ? i[r].baseVal = s.join(" ") : i[r] = s.join(" "),
                  u())
              }
              ,
              a.remove = function() {
                  d.apply(a, e = arguments);
                  for (var e, t = {}, n = 0, o = []; n < e.length; ++n)
                      t[e[n]] = !0,
                      delete l[e[n]];
                  for (n = 0; n < s.length; ++n)
                      t[s[n]] || o.push(s[n]);
                  c = (s = o).length >>> 0,
                  "object" == typeof i[r] ? i[r].baseVal = s.join(" ") : i[r] = s.join(" "),
                  u()
              }
              ,
              a.toggle = function(e, t) {
                  return d.apply(a, [e]),
                  p !== t ? t ? (a.add(e),
                  !0) : (a.remove(e),
                  !1) : l[e] ? (a.remove(e),
                  !1) : (a.add(e),
                  !0)
              }
              ,
              a
          }
      }()),
      "classList"in (n = document.createElement("span")) && (n.classList.toggle("x", !1),
      n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
          var n = t;
          if (n !== p)
              return this[(n = !!n) ? "add" : "remove"](e),
              n;
          var o = !this.contains(e);
          return this[o ? "add" : "remove"](e),
          o
      }
      )),
      function() {
          var e = document.createElement("span");
          if ("classList"in e && (e.classList.add("a", "b"),
          !e.classList.contains("b"))) {
              var o = e.classList.constructor.prototype.add;
              e.classList.constructor.prototype.add = function() {
                  for (var e = arguments, t = arguments.length, n = 0; n < t; n++)
                      o.call(this, e[n])
              }
          }
      }(),
      function() {
          var e = document.createElement("span");
          if ("classList"in e && (e.classList.add("a"),
          e.classList.add("b"),
          e.classList.remove("a", "b"),
          e.classList.contains("b"))) {
              var o = e.classList.constructor.prototype.remove;
              e.classList.constructor.prototype.remove = function() {
                  for (var e = arguments, t = arguments.length, n = 0; n < t; n++)
                      o.call(this, e[n])
              }
          }
      }())
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "Document"in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(),
      this.Document.prototype = document))
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "Element"in this && "HTMLElement"in this || function() {
          function e() {
              return r-- || clearTimeout(t),
              !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0),
              t && document.body.prototype && clearTimeout(t),
              !!document.body.prototype)
          }
          if (!window.Element || window.HTMLElement) {
              window.Element = window.HTMLElement = new Function("return function Element() {}")();
              var t, n = document.appendChild(document.createElement("body")), o = n.appendChild(document.createElement("iframe")).contentWindow.document, s = Element.prototype = o.appendChild(o.createElement("*")), l = {}, c = function(e, t) {
                  var n, o, i, r = e.childNodes || [], a = -1;
                  if (1 === e.nodeType && e.constructor !== Element)
                      for (n in e.constructor = Element,
                      l)
                          o = l[n],
                          e[n] = o;
                  for (; i = t && r[++a]; )
                      c(i, t);
                  return e
              }, u = document.getElementsByTagName("*"), i = document.createElement, r = 100;
              s.attachEvent("onpropertychange", function(e) {
                  for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = s[n], r = l[n], a = -1; t = u[++a]; )
                      1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                  l[n] = i
              }),
              s.constructor = Element,
              s.hasAttribute || (s.hasAttribute = function a(e) {
                  return null !== this.getAttribute(e)
              }
              ),
              e() || (document.onreadystatechange = e,
              t = setInterval(e, 25)),
              document.createElement = function d(e) {
                  var t = i(String(e).toLowerCase());
                  return c(t)
              }
              ,
              document.removeChild(n)
          } else
              window.HTMLElement = window.Element
      }()
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      var e;
      "document"in this && "classList"in document.documentElement && "Element"in this && "classList"in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"),
      e.classList.contains("b")) || function(e) {
          var u = !0
            , d = function(e, t, n, o) {
              Object.defineProperty ? Object.defineProperty(e, t, {
                  configurable: !1 === u || !!o,
                  get: n
              }) : e.__defineGetter__(t, n)
          };
          try {
              d({}, "support")
          } catch (t) {
              u = !1
          }
          var p = function(e, l, c) {
              d(e.prototype, l, function() {
                  var e, t = this, n = "__defineGetter__DEFINE_PROPERTY" + l;
                  if (t[n])
                      return e;
                  if (!(t[n] = !0) === u) {
                      for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, a = r.length, s = 0; s < a; ++s)
                          if (r[s]._R === t) {
                              o = r[s];
                              break
                          }
                      o || (o = i.appendChild(document.createElement("div"))),
                      e = DOMTokenList.call(o, t, c)
                  } else
                      e = new DOMTokenList(t,c);
                  return d(t, l, function() {
                      return e
                  }),
                  delete t[n],
                  e
              }, !0)
          };
          p(e.Element, "classList", "className"),
          p(e.HTMLElement, "classList", "className"),
          p(e.HTMLLinkElement, "relList", "rel"),
          p(e.HTMLAnchorElement, "relList", "rel"),
          p(e.HTMLAreaElement, "relList", "rel")
      }(this)
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {})
}),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
function(e) {
  function t() {}
  t.prototype.start = function(e, t) {
      for (var n in this.$module = e[0],
      this.options = {
          outOf: 65,
          applyOnInit: !0,
          autoOutdent: !1,
          outdentAll: !1,
          chartVisibleText: "Change to table and accessible view",
          tableVisibleText: "Change to chart view",
          chartAlertText: "Chart visible",
          tableAlertText: "Table visible",
          toggleAfter: !1,
          returnReference: !1
      },
      t)
          this.options[n] = t[n];
      this.detectIEVersion(),
      this.ENABLED = !(this.ie && this.ie < 8),
      this.$table = e,
      this.$graphContainer = document.createElement("div"),
      this.$graphContainer.className = "mc-chart-container",
      this.$graph = document.createElement("div"),
      this.$graph.setAttribute("aria-hidden", "true"),
      this.$graph.setAttribute("class", this.$table.className),
      this.$graph.classList.add("mc-chart"),
      this.chartId = this.getChartId(e),
      this.options.stacked = this.$table.classList.contains("mc-stacked"),
      this.options.negative = this.$table.classList.contains("mc-negative");
      var o = 2 < this.$table.querySelectorAll("tbody tr")[0].querySelectorAll("th, td").length;
      if (this.options.multiple = !this.options.stacked && (this.$table.classList.contains("mc-multiple") || o),
      this.options.autoOutdent = this.options.autoOutdent || this.$table.classList.contains("mc-auto-outdent"),
      this.options.outdentAll = this.options.outdentAll || this.$table.classList.contains("mc-outdented"),
      this.options.multiple && this.$graph.classList.add("mc-multiple"),
      this.options.hasCaption = !!this.$table.querySelectorAll("caption").length,
      this.ENABLED && (this.apply(),
      this.options.applyOnInit || this.toggleLink.click()),
      this.options.returnReference)
          return this
  }
  ,
  t.prototype.detectIEVersion = function() {
      this.ie = function() {
          for (var e, t = 3, n = document.createElement("div"), o = n.getElementsByTagName("i"); n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->",
          t < 10 && o[0]; )
              ;
          return 4 < t ? t : e
      }()
  }
  ,
  t.prototype.apply = function() {
      this.ENABLED && (this.constructChart(),
      this.addClassesToHeader(),
      this.applyWidths(),
      this.insert(),
      this.$table.classList.add("mc-hidden"),
      this.applyOutdent())
  }
  ,
  t.prototype.construct = {},
  t.prototype.construct.thead = function() {
      var e = document.createElement("div");
      e.classList.add("mc-thead");
      var t = document.createElement("div");
      t.classList.add("mc-tr");
      for (var n = "", o = this.$table.querySelectorAll("thead th"), i = 0; i < o.length; i++)
          n += '<div class="mc-th">',
          n += o[i].innerHTML,
          n += "</div>";
      return t.innerHTML = n,
      e.appendChild(t),
      e
  }
  ,
  t.prototype.construct.tbody = function() {
      var e = document.createElement("div");
      e.classList.add("mc-tbody");
      for (var t = this.$table.querySelectorAll("tbody tr"), n = 0; n < t.length; n++) {
          var o = document.createElement("div");
          o.classList.add("mc-tr");
          for (var i = "", r = t[n].querySelectorAll("th, td"), a = 0; a < r.length; a++)
              i += '<div class="mc-td">',
              i += r[a].innerHTML,
              i += "</div>";
          o.innerHTML = i,
          e.appendChild(o)
      }
      return e
  }
  ,
  t.prototype.construct.caption = function() {
      return this.$table.querySelector("caption").cloneNode(!0)
  }
  ,
  t.prototype.construct.toggleLink = function(e) {
      var t = document.createElement("button")
        , n = document.createElement("span")
        , o = document.createElement("span");
      return n.classList.add("mc-toggle-text"),
      n.innerHTML = e,
      o.classList.add("govuk-visually-hidden", "mc-toggle-status"),
      o.setAttribute("role", "alert"),
      t.classList.add("govuk-body-s", "mc-toggle-button"),
      t.appendChild(n),
      t.appendChild(o),
      t
  }
  ,
  t.prototype.addToggleClick = function(o, i, r, a) {
      var s = this;
      this.toggleLink.addEventListener("click", function(e) {
          e.preventDefault();
          var t = s.toggleLink.querySelector(".mc-toggle-text")
            , n = s.toggleLink.querySelector(".mc-toggle-status");
          s.$graphContainer.classList.toggle("mc-hidden"),
          s.$table.classList.toggle("mc-hidden"),
          t.innerHTML = t.innerHTML === i ? o : i,
          n.innerHTML = n.innerHTML === a ? r : a
      })
  }
  ,
  t.prototype.constructChart = function() {
      var e = this.construct.thead.call(this)
        , t = this.construct.tbody.call(this);
      if (this.toggleLink = this.construct.toggleLink(this.options.chartVisibleText),
      this.addToggleClick(this.options.chartVisibleText, this.options.tableVisibleText, this.options.chartAlertText, this.options.tableAlertText),
      this.options.hasCaption) {
          var n = this.construct.caption.call(this);
          this.$graph.appendChild(n)
      }
      this.options.toggleAfter ? this.$table.insertAdjacentElement("afterend", this.toggleLink) : this.$table.insertAdjacentElement("beforebegin", this.toggleLink),
      this.$graph.appendChild(e),
      this.$graph.appendChild(t)
  }
  ,
  t.prototype.utils = {
      isFloat: function(e) {
          return !isNaN(parseFloat(e))
      },
      stripValue: function(e) {
          return e.replace(/,|\xa3|%|[a-z]/gi, "")
      },
      returnMax: function(e) {
          for (var t = 0, n = 0; n < e.length; n++)
              e[n] > t && (t = e[n]);
          return t
      },
      isNegative: function(e) {
          return e < 0
      }
  },
  t.prototype.addClassesToHeader = function() {
      var e = this.$graph.querySelectorAll(".mc-th")
        , t = e.length;
      this.options.stacked && (e[t - 1].classList.add("mc-stacked-header", "mc-header-total"),
      t -= 1);
      for (var n = 1; n < t; n++)
          e[n].classList.add("mc-key-header"),
          e[n].classList.contains("mc-stacked-header") || e[n].classList.add("mc-key-" + n)
  }
  ,
  t.prototype.calculateMaxWidth = function() {
      for (var e = [], t = 0, n = this.$graph.querySelectorAll(".mc-tr"), o = 0; o < n.length; o++) {
          for (var i = n[o], r = i.querySelectorAll(".mc-td"), a = [], s = 1; s < r.length; s++)
              a.push(r[s]);
          var l = a.length;
          if (l) {
              this.options.stacked && (a[l - 1].classList.add("mc-stacked-total"),
              l -= 1);
              var c = i.querySelector(".mc-td");
              c && c.classList.add("mc-key-cell");
              for (var u = 0, d = 0; d < l; d++) {
                  var p = a[d];
                  p.classList.add("mc-bar-cell"),
                  p.classList.add("mc-bar-" + (d + 1));
                  var f = this.utils.stripValue(p.innerText);
                  if (this.utils.isFloat(f)) {
                      var h = parseFloat(f, 10)
                        , m = Math.abs(h);
                      0 === h && p.classList.add("mc-bar-zero"),
                      this.options.negative && (this.utils.isNegative(h) ? (p.classList.add("mc-bar-negative"),
                      t < m && (t = m)) : p.classList.add("mc-bar-positive")),
                      h = m,
                      this.options.stacked ? u += h : (u = h,
                      e.push(h))
                  }
              }
          }
          this.options.stacked && e.push(u)
      }
      var g = {};
      return g.max = parseFloat(this.utils.returnMax(e), 10),
      g.single = parseFloat(this.options.outOf / g.max, 10),
      this.options.negative && (g.marginLeft = parseFloat(t, 10) * g.single,
      g.maxNegative = parseFloat(t, 10)),
      g
  }
  ,
  t.prototype.applyWidths = function() {
      this.dimensions = this.calculateMaxWidth();
      for (var e = this.$graph.querySelectorAll(".mc-tr"), t = 0; t < e.length; t++)
          for (var n = e[t].querySelectorAll(".mc-bar-cell"), o = 0; o < n.length; o++) {
              var i = n[o]
                , r = parseFloat(this.utils.stripValue(i.innerText), 10)
                , a = r * this.dimensions.single
                , s = Math.abs(r)
                , l = Math.abs(a);
              if (this.options.negative)
                  if (i.classList.contains("mc-bar-positive"))
                      i.style.marginLeft = this.dimensions.marginLeft + "%";
                  else if (s < this.dimensions.maxNegative) {
                      var c = (this.dimensions.maxNegative - s) * this.dimensions.single;
                      i.style.marginLeft = c + "%"
                  }
              i.innerHTML = "<span>" + i.innerHTML + "</span>",
              i.style.width = l + "%"
          }
  }
  ,
  t.prototype.insert = function() {
      var e = document.createElement("span")
        , t = "mc-chart-not-accessible-" + this.chartId;
      e.innerHTML = "This content is not accessible - switch to table",
      e.className = "mc-hidden",
      e.id = t,
      this.$graphContainer.setAttribute("aria-labelledby", t),
      this.$graphContainer.appendChild(this.$graph),
      this.$graphContainer.appendChild(e),
      this.$table.insertAdjacentElement("afterend", this.$graphContainer)
  }
  ,
  t.prototype.applyOutdent = function() {
      for (var e = this.$graph.querySelectorAll(".mc-bar-cell"), t = 0; t < e.length; t++) {
          var n = e[t]
            , o = parseFloat(this.utils.stripValue(n.innerText), 10)
            , i = n.querySelector("span")
            , r = n.querySelector("span").offsetWidth + 5
            , a = n.offsetWidth;
          this.options.stacked ? (a < r && 0 < o || o < 1) && n.classList.add("mc-value-overflow") : (0 === o && n.classList.add("mc-bar-outdented"),
          this.options.autoOutdent && a <= r || this.options.outdentAll ? (n.classList.add("mc-bar-outdented"),
          i.style.marginLeft = "100%",
          i.style.display = "inline-block") : n.classList.add("mc-bar-indented"))
      }
  }
  ,
  t.prototype.getChartId = function(n) {
      var e = document.querySelectorAll("table.js-barchart-table")
        , o = null;
      return e.forEach(function(e, t) {
          e === n && (o = t)
      }),
      o
  }
  ,
  e.MagnaCharta = t
}(window.GOVUK.Modules),
window.GOVUK = window.GOVUK || {},
function(a) {
  "use strict";
  var e = function(e) {
      this.$element = e
  };
  e.prototype.init = function() {
      for (var e = this.$element.querySelectorAll(".js-barchart-table"), t = [], n = 0; n < e.length; n++) {
          var o = e[n].className;
          -1 === o.indexOf("mc-chart") && -1 === o.indexOf("js-barchart-table-init") && t.push(e[n])
      }
      for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (new a.Modules.MagnaCharta).start(r, {
              toggleText: "Change between chart and table"
          }),
          r.className = r.className + " js-barchart-table-init"
      }
  }
  ,
  a.GovspeakBarchartEnhancement = e
}(window.GOVUK, window.jQuery),
function() {
  "use strict";
  window.GOVUK = window.GOVUK || {};
  var e = window.GOVUK || {}
    , l = function(e) {
      this.$element = e
  };
  l.prototype.init = function() {
      if (this.campaignCookiesAllowed()) {
          var e = this.$element.querySelectorAll('a[href*="youtube.com"], a[href*="youtu.be"]');
          0 < e.length && l.insertApiScript();
          for (var t = 0; t < e.length; ++t) {
              var n = e[t]
                , o = n.getAttribute("href")
                , i = n.hasAttribute("data-youtube-player-analytics")
                , r = {
                  link: n
              };
              if (i && (r.tracking = {
                  hasTracking: i,
                  category: n.getAttribute("data-youtube-player-analytics-category")
              }),
              0 <= o.indexOf("/live_stream")) {
                  var a = l.parseLivestream(o);
                  !this.hasDisabledEmbed(n) && a && (r.channel = a,
                  this.setupVideo(r))
              } else {
                  var s = l.parseVideoId(o);
                  !this.hasDisabledEmbed(n) && s && (r.videoId = s,
                  this.setupVideo(r))
              }
          }
      }
  }
  ,
  l.prototype.hasDisabledEmbed = function(e) {
      return "off" === e.getAttribute("data-youtube-player")
  }
  ,
  l.prototype.setupVideo = function(e) {
      var t = l.nextId()
        , n = e.link
        , o = e.videoId ? e.videoId : e.channel
        , i = n.parentNode
        , r = i.parentNode
        , a = document.createElement("div");
      a.className += "gem-c-govspeak__youtube-video",
      a.innerHTML = '<span id="' + t + '" data-video-id="' + o + '"></span>',
      e.title = n.textContent,
      r.replaceChild(a, i),
      this.insertVideo(t, e)
  }
  ,
  l.prototype.insertVideo = function(e, r) {
      var t = ""
        , n = "";
      r.channel ? (t = r.channel,
      n = "live_stream") : n = r.videoId;
      var o = function() {
          new window.YT.Player(e,{
              videoId: n,
              host: "https://www.youtube-nocookie.com",
              playerVars: {
                  enablejsapi: 1,
                  origin: window.location.origin,
                  rel: 0,
                  disablekb: 1,
                  modestbranding: 1,
                  channel: t
              },
              events: {
                  onReady: function(e) {
                      var t = r.title;
                      e.target.getIframe().title = t + " (video)"
                  },
                  onStateChange: function(e) {
                      var t = e.data
                        , n = e.target
                        , o = {
                          "-1": "VideoUnstarted",
                          0: "VideoEnded",
                          1: "VideoPlaying",
                          2: "VideoPaused",
                          3: "VideoBuffering",
                          5: "VideoCued"
                      };
                      if (o[t] && r.tracking && r.tracking.hasTracking && window.GOVUK.analytics && window.GOVUK.analytics.trackEvent) {
                          var i = {
                              category: r.tracking.category,
                              action: o[t],
                              label: {
                                  transport: "beacon",
                                  label: n.getVideoData && n.getVideoData().title
                              }
                          };
                          window.GOVUK.analytics.trackEvent(i.category, i.action, i.label)
                      }
                  }
              }
          })
      };
      o = o.bind(this),
      l.playerApiReady ? o.call() : l.queuedInserts.push(o)
  }
  ,
  l.prototype.campaignCookiesAllowed = function() {
      var e = window.GOVUK.getConsentCookie();
      return null === e || e.campaigns
  }
  ,
  l.nextId = function() {
      return this.embedCount = this.embedCount || 0,
      this.embedCount += 1,
      "youtube-" + this.embedCount
  }
  ,
  l.insertApiScript = function() {
      if (!this.apiScriptInserted) {
          var e = document.createElement("script");
          e.src = "https://www.youtube.com/player_api";
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t),
          this.apiScriptInserted = !0
      }
  }
  ,
  l.parseLivestream = function(e) {
      var t = e.match(/channel=([^&]*)/);
      if (t)
          return t[1]
  }
  ,
  l.parseVideoId = function(e) {
      var t;
      if (-1 < e.indexOf("youtube.com")) {
          var n = {};
          if (1 === (t = e.split("?")).length)
              return;
          t = t[1].split("&");
          for (var o = 0; o < t.length; o++) {
              var i = t[o].split("=");
              n[i[0]] = i[1]
          }
          return n.v
      }
      if (-1 < e.indexOf("youtu.be"))
          return (t = e.split("/")).pop()
  }
  ,
  l.apiScriptInserted = !1,
  l.playerApiReady = !1,
  l.queuedInserts = [],
  window.onYouTubePlayerAPIReady = function() {
      l.playerApiReady = !0;
      for (var e = 0; e < l.queuedInserts.length; e++)
          l.queuedInserts[e].call()
  }
  ,
  e.GovspeakYoutubeLinkEnhancement = l
}(),
function() {
  "use strict";
  if (document.querySelectorAll && document.addEventListener) {
      var e, t, n = document.querySelectorAll(".js-header-toggle");
      for (e = 0,
      t = n.length; e < t; e++)
          n[e].addEventListener("click", function(e) {
              e.preventDefault();
              var t = this.getAttribute("href") ? document.getElementById(this.getAttribute("href").substr(1)) : document.getElementById(this.getAttribute("data-search-toggle-for"))
                , n = t.getAttribute("class") || ""
                , o = this.getAttribute("class") || ""
                , i = o.match("search-toggle")
                , r = this.getAttribute("data-show-text") || "Show search"
                , a = this.getAttribute("data-hide-text") || "Hide search";
              -1 !== n.indexOf("js-visible") ? t.setAttribute("class", n.replace(/(^|\s)js-visible(\s|$)/, "")) : t.setAttribute("class", n + " js-visible"),
              -1 !== o.indexOf("js-visible") ? (this.setAttribute("class", o.replace(/(^|\s)js-visible(\s|$)/, "")),
              i && (this.innerText = r)) : (this.setAttribute("class", o + " js-visible"),
              i && (this.innerText = a)),
              this.setAttribute("aria-expanded", "true" !== this.getAttribute("aria-expanded")),
              t.setAttribute("aria-hidden", "false" === t.getAttribute("aria-hidden"))
          })
  }
}
.call(this),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
function(e) {
  function t() {}
  t.prototype.start = function(e) {
      this.$module = e[0],
      this.$module.focus()
  }
  ,
  e.InitialFocus = t
}(window.GOVUK.Modules),
function(e) {
  "use strict";
  var o = e.jQuery
    , i = e.GOVUK || {}
    , t = function(e, t) {
      this.$el = o(e),
      this.$extraLinks = this.$el.find("li:not(" + t + ")"),
      1 < this.$extraLinks.length && (this.addToggleLink(),
      this.hideExtraLinks())
  };
  t.prototype = {
      toggleText: function() {
          return 1 < this.$extraLinks.length ? "+" + this.$extraLinks.length + " others" : "+" + this.$extraLinks.length + " other"
      },
      addToggleLink: function() {
          this.$toggleLink = o('<a href="#">' + this.toggleText() + "</a>"),
          this.$toggleLink.click(o.proxy(this.toggleLinks, this)),
          this.$toggleLink.insertAfter(this.$el)
      },
      toggleLinks: function(e) {
          e.preventDefault(),
          this.$toggleLink.remove(),
          this.showExtraLinks()
      },
      hideExtraLinks: function() {
          this.$extraLinks.addClass("visuallyhidden"),
          o(window).trigger("govuk.pageSizeChanged")
      },
      showExtraLinks: function() {
          this.$extraLinks.removeClass("visuallyhidden"),
          o(window).trigger("govuk.pageSizeChanged")
      }
  },
  i.PrimaryList = t,
  i.primaryLinks = {
      init: function(n) {
          o(n).parent().each(function(e, t) {
              new i.PrimaryList(t,n)
          })
      }
  },
  e.GOVUK = i
}(window),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
function(e) {
  function t() {}
  t.prototype.start = function(e) {
      this.$module = e[0],
      this.$module.trackChange = this.trackChange.bind(this),
      this.$module.fireTrackingChange = this.fireTrackingChange.bind(this),
      this.$module.addEventListener("change", this.trackChange)
  }
  ,
  t.prototype.trackChange = function() {
      var e = this.options[this.selectedIndex];
      e.hasAttribute("data-track-category") && e.hasAttribute("data-track-action") && this.fireTrackingChange(e)
  }
  ,
  t.prototype.fireTrackingChange = function(e) {
      var t = {
          transport: "beacon"
      }
        , n = e.getAttribute("data-track-category")
        , o = e.getAttribute("data-track-action")
        , i = e.getAttribute("data-track-label")
        , r = e.getAttribute("data-track-value")
        , a = e.getAttribute("data-track-dimension")
        , s = e.getAttribute("data-track-dimension-index")
        , l = e.getAttribute("data-track-options");
      if (i && (t.label = i),
      r && (t.value = r),
      a && s && (t["dimension" + s] = a),
      l)
          for (var c in l = JSON.parse(l))
              t[c] = l[c];
      window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && window.GOVUK.analytics.trackEvent(n, o, t)
  }
  ,
  e.TrackSelectChange = t
}(window.GOVUK.Modules),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
function(e) {
  function t() {}
  t.prototype.start = function(e) {
      this.$module = e[0],
      this.toggleTarget = this.$module.querySelector(".js-class-toggle"),
      this.$module.addFocusClass = this.addFocusClass.bind(this),
      this.$module.removeFocusClassFromEmptyInput = this.removeFocusClassFromEmptyInput.bind(this),
      this.inputIsEmpty() || this.addFocusClass(),
      this.toggleTarget.addEventListener("focus", this.$module.addFocusClass),
      this.toggleTarget.addEventListener("blur", this.$module.removeFocusClassFromEmptyInput)
  }
  ,
  t.prototype.inputIsEmpty = function() {
      return "" === this.toggleTarget.value
  }
  ,
  t.prototype.addFocusClass = function() {
      this.toggleTarget.classList.add("focus")
  }
  ,
  t.prototype.removeFocusClassFromEmptyInput = function() {
      this.inputIsEmpty() && this.toggleTarget.classList.remove("focus")
  }
  ,
  e.GemToggleInputClassOnFocus = t
}(window.GOVUK.Modules),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
function(e) {
  function t() {}
  t.prototype.start = function(e) {
      this.$module = e[0],
      this.$module.toggleTrigger = this.$module.querySelector("[data-controls][data-expanded]"),
      this.$module.toggleTrigger && (this.$module.toggleClass = this.$module.getAttribute("data-toggle-class") || "js-hidden",
      this.$module.isTrackable = this.$module.toggleTrigger.hasAttribute("data-track-category") && this.$module.toggleTrigger.hasAttribute("data-track-action"),
      this.$module.isTrackable && (this.$module.trackCategory = this.$module.toggleTrigger.getAttribute("data-track-category"),
      this.$module.trackAction = this.$module.toggleTrigger.getAttribute("data-track-action")),
      this.addAriaAttrs(),
      this.toggleOnClick())
  }
  ,
  t.prototype.addAriaAttrs = function() {
      this.$module.toggleTrigger.setAttribute("role", "button"),
      this.$module.toggleTrigger.setAttribute("aria-controls", this.$module.toggleTrigger.getAttribute("data-controls")),
      this.$module.toggleTrigger.setAttribute("aria-expanded", this.$module.toggleTrigger.getAttribute("data-expanded")),
      this.$module.targets = this.getTargetElements();
      for (var e = 0; e < this.$module.targets.length; e++)
          this.$module.targets[e].setAttribute("aria-live", "polite"),
          this.$module.targets[e].setAttribute("role", "region")
  }
  ,
  t.prototype.getTargetElements = function() {
      var e = "#" + this.$module.toggleTrigger.getAttribute("aria-controls").split(" ").join(", #");
      return this.$module.querySelectorAll(e)
  }
  ,
  t.prototype.toggleOnClick = function() {
      var i = this;
      this.$module.toggleTrigger.addEventListener("click", function(e) {
          if (e.preventDefault(),
          "true" === this.getAttribute("aria-expanded")) {
              this.setAttribute("aria-expanded", !1);
              for (var t = 0; t < i.$module.targets.length; t++)
                  i.$module.targets[t].classList.add(i.$module.toggleClass)
          } else {
              this.setAttribute("aria-expanded", !0);
              for (var n = 0; n < i.$module.targets.length; n++)
                  i.$module.targets[n].classList.remove(i.$module.toggleClass)
          }
          var o = this.getAttribute("data-toggled-text");
          "string" == typeof o && (this.setAttribute("data-toggled-text", this.innerText),
          this.innerText = o),
          window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && i.$module.isTrackable && i.track()
      })
  }
  ,
  t.prototype.track = function() {
      var e = {
          label: this.$module.toggleTrigger.getAttribute("data-toggled-text") || this.$module.toggleTrigger.innerText
      };
      window.GOVUK.analytics.trackEvent(this.$module.trackCategory, this.$module.trackAction, e)
  }
  ,
  e.GemToggle = t
}(window.GOVUK.Modules),
this.Element && function(e) {
  e.matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.msMatchesSelector || function(e) {
      for (var t = this, n = (t.parentNode || t.document).querySelectorAll(e), o = -1; n[++o] && n[o] != t; )
          ;
      return !!n[o]
  }
}(Element.prototype),
this.Element && function(e) {
  e.closest = e.closest || function(e) {
      for (var t = this; t.matches && !t.matches(e); )
          t = t.parentNode;
      return t.matches ? t : null
  }
}(Element.prototype),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
function(e) {
  function t() {}
  t.prototype.start = function(e) {
      this.$module = e[0],
      this.$module.handleClick = this.handleClick.bind(this);
      var t = this;
      this.$module.addEventListener("click", function(e) {
          t.$module.handleClick(e.target)
      })
  }
  ,
  t.prototype.handleClick = function(e) {
      var t = {
          transport: "beacon"
      };
      if (e.hasAttribute("data-track-category") || e.hasAttribute("data-track-action") || (e = e.closest("[data-track-category][data-track-action]")),
      e) {
          var n = e.getAttribute("data-track-category")
            , o = e.getAttribute("data-track-action")
            , i = e.getAttribute("data-track-label")
            , r = e.getAttribute("data-track-value")
            , a = e.getAttribute("data-track-dimension")
            , s = e.getAttribute("data-track-dimension-index")
            , l = e.getAttribute("data-track-options");
          if (i && (t.label = i),
          r && (t.value = r),
          a && s && (t["dimension" + s] = a),
          l)
              for (var c in l = JSON.parse(l))
                  t[c] = l[c];
          window.GOVUK.analytics && window.GOVUK.analytics.trackEvent && window.GOVUK.analytics.trackEvent(n, o, t)
      }
  }
  ,
  e.GemTrackClick = t
}(window.GOVUK.Modules),
function() {
  "use strict";
  window.GOVUK = window.GOVUK || {},
  window.GOVUK.triggerEvent = function(e, t) {
      var n, o = {
          bubbles: !0,
          cancelable: !0
      };
      "function" == typeof window.CustomEvent ? n = new window.CustomEvent(t,o) : (n = document.createEvent("CustomEvent")).initCustomEvent(t, o.bubbles, o.cancelable, null),
      e.dispatchEvent(n)
  }
}(window),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
  for (var n = t || 0, o = this.length; n < o; n++)
      if (this[n] === e)
          return n;
  return -1
}
),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
function(e) {
  function t() {}
  t.prototype.start = function(e) {
      this.$module = e[0],
      this.sectionClass = "gem-c-accordion__section",
      this.moduleId = this.$module.getAttribute("id"),
      this.sections = this.$module.querySelectorAll("." + this.sectionClass),
      this.openAllButton = "",
      this.browserSupportsSessionStorage = n.checkForSessionStorage(),
      this.controlsClass = "gem-c-accordion__controls",
      this.openAllClass = "gem-c-accordion__open-all",
      this.openAllTextClass = "gem-c-accordion__open-all-text",
      this.sectionHeaderClass = "gem-c-accordion__section-header",
      this.sectionHeadingClass = "gem-c-accordion__section-heading",
      this.sectionSummaryClass = "gem-c-accordion__section-summary",
      this.sectionButtonClass = "gem-c-accordion__section-button",
      this.sectionExpandedClass = "gem-c-accordion__section--expanded",
      this.sectionInnerContent = "gem-c-accordion__section-content",
      this.toggleLinkClass = "js-toggle-link",
      this.sectionShowHideIconClass = "gem-c-accordion__toggle-link",
      this.sectionShowHideTextClass = "gem-c-accordion__toggle-text",
      this.upChevonIconClass = "gem-c-accordion-nav__chevron",
      this.downChevonIconClass = "gem-c-accordion-nav__chevron--down",
      this.$module.actions = {},
      this.$module.actions.locale = this.$module.getAttribute("data-locale"),
      this.$module.actions.showText = this.$module.getAttribute("data-show-text"),
      this.$module.actions.hideText = this.$module.getAttribute("data-hide-text"),
      this.$module.actions.showAllText = this.$module.getAttribute("data-show-all-text"),
      this.$module.actions.hideAllText = this.$module.getAttribute("data-hide-all-text"),
      this.$module.actions.thisSectionVisuallyHidden = this.$module.getAttribute("data-this-section-visually-hidden"),
      this.$module.classList.add("gem-c-accordion--active"),
      this.initControls(),
      this.initSectionHeaders(),
      "true" === this.$module.getAttribute("data-anchor-navigation") && (this.openByAnchorOnLoad(),
      this.addEventListenersForAnchors());
      var t = this.checkIfAllSectionsOpen();
      this.updateOpenAllButton(t)
  }
  ,
  t.prototype.initControls = function() {
      this.openAllButton = document.createElement("button"),
      this.openAllButton.setAttribute("class", this.openAllClass),
      this.openAllButton.setAttribute("aria-expanded", "false");
      var e = document.createElement("span");
      e.classList.add(this.upChevonIconClass),
      this.openAllButton.appendChild(e);
      var t = document.createElement("div");
      t.setAttribute("class", this.controlsClass),
      t.appendChild(this.openAllButton),
      this.$module.insertBefore(t, this.$module.firstChild);
      var n = document.createElement("span");
      n.classList.add(this.openAllTextClass),
      this.openAllButton.insertBefore(n, this.openAllButton.childNodes[0] || null),
      this.openAllButton.addEventListener("click", this.onOpenOrCloseAllToggle.bind(this))
  }
  ,
  t.prototype.initSectionHeaders = function() {
      nodeListForEach(this.sections, function(e, t) {
          var n = e.querySelector("." + this.sectionHeaderClass);
          this.initHeaderAttributes(n, t),
          this.setExpanded(this.isExpanded(e), e),
          n.addEventListener("click", this.onSectionToggle.bind(this, e)),
          this.setInitialState(e)
      }
      .bind(this))
  }
  ,
  t.prototype.initHeaderAttributes = function(e, t) {
      var n = e.querySelector("." + this.sectionButtonClass)
        , o = e.querySelector("." + this.sectionHeadingClass)
        , i = e.querySelector("." + this.sectionSummaryClass)
        , r = document.createElement("button");
      r.setAttribute("id", this.moduleId + "-heading-" + (t + 1)),
      r.setAttribute("aria-controls", this.moduleId + "-content-" + (t + 1));
      var a = document.createElement("span");
      a.classList.add(this.sectionShowHideIconClass, this.toggleLinkClass);
      var s = document.createElement("span");
      s.classList.add("govuk-visually-hidden"),
      s.innerHTML = ", ";
      var l = document.createElement("span");
      l.classList.add("govuk-visually-hidden"),
      l.innerHTML = this.$module.actions.thisSectionVisuallyHidden,
      this.$module.actions.locale && (l.lang = this.filterLocale("this_section_visually_hidden"));
      var c = document.createElement("span")
        , u = document.createElement("span");
      u.classList.add(this.upChevonIconClass),
      a.appendChild(u),
      c.classList.add(this.sectionShowHideTextClass),
      a.insertBefore(c, a.childNodes[0] || null);
      for (var d = 0; d < n.attributes.length; d++) {
          var p = n.attributes.item(d);
          r.setAttribute(p.nodeName, p.nodeValue)
      }
      r.innerHTML = n.innerHTML,
      o.removeChild(n),
      o.appendChild(r),
      r.appendChild(s),
      null != i && (r.setAttribute("aria-describedby", this.moduleId + "-summary-" + (t + 1)),
      r.appendChild(i)),
      r.appendChild(a),
      r.appendChild(l)
  }
  ,
  t.prototype.onSectionToggle = function(e) {
      var t = this.isExpanded(e);
      this.setExpanded(!t, e),
      this.storeState(e)
  }
  ,
  t.prototype.onOpenOrCloseAllToggle = function() {
      var t = this
        , e = this.sections
        , n = !this.checkIfAllSectionsOpen();
      nodeListForEach(e, function(e) {
          t.setExpanded(n, e),
          t.storeState(e)
      }),
      t.updateOpenAllButton(n)
  }
  ,
  t.prototype.setExpanded = function(e, t) {
      var n = t.querySelector("." + this.upChevonIconClass)
        , o = t.querySelector("." + this.sectionShowHideTextClass)
        , i = t.querySelector("." + this.sectionButtonClass)
        , r = e ? this.$module.actions.hideText : this.$module.actions.showText;
      o.innerHTML = r,
      i.setAttribute("aria-expanded", e),
      i.classList.add(this.toggleLinkClass),
      this.$module.actions.locale && (o.lang = this.filterLocale(e ? "hide_text" : "show_text")),
      e ? (t.classList.add(this.sectionExpandedClass),
      n.classList.remove(this.downChevonIconClass)) : (t.classList.remove(this.sectionExpandedClass),
      n.classList.add(this.downChevonIconClass));
      var a = this.checkIfAllSectionsOpen();
      this.updateOpenAllButton(a)
  }
  ,
  t.prototype.isExpanded = function(e) {
      return e.classList.contains(this.sectionExpandedClass)
  }
  ,
  t.prototype.checkIfAllSectionsOpen = function() {
      return this.sections.length === this.$module.querySelectorAll("." + this.sectionExpandedClass).length
  }
  ,
  t.prototype.updateOpenAllButton = function(e) {
      var t = this.openAllButton.querySelector("." + this.upChevonIconClass)
        , n = this.openAllButton.querySelector("." + this.openAllTextClass)
        , o = e ? this.$module.actions.hideAllText : this.$module.actions.showAllText;
      this.openAllButton.setAttribute("aria-expanded", e),
      n.innerHTML = o,
      this.$module.actions.locale && (n.lang = this.filterLocale(e ? "hide_all_text" : "show_all_text")),
      e ? t.classList.remove(this.downChevonIconClass) : t.classList.add(this.downChevonIconClass)
  }
  ;
  var n = {
      checkForSessionStorage: function() {
          var e, t = "this is the test string";
          try {
              return window.sessionStorage.setItem(t, t),
              e = window.sessionStorage.getItem(t) === t.toString(),
              window.sessionStorage.removeItem(t),
              e
          } catch (n) {
              "undefined" != typeof console && "undefined" != typeof console.log || console.log("Notice: sessionStorage not available.")
          }
      }
  };
  t.prototype.storeState = function(e) {
      if (this.browserSupportsSessionStorage) {
          var t = e.querySelector("." + this.sectionButtonClass);
          if (t) {
              var n = t.getAttribute("aria-controls")
                , o = t.getAttribute("aria-expanded");
              void 0 !== n || "undefined" != typeof console && "undefined" != typeof console.log || console.error(new Error("No aria controls present in accordion section heading.")),
              void 0 !== o || "undefined" != typeof console && "undefined" != typeof console.log || console.error(new Error("No aria expanded present in accordion section heading.")),
              n && o && window.sessionStorage.setItem(n, o)
          }
      }
  }
  ,
  t.prototype.setInitialState = function(e) {
      if (this.browserSupportsSessionStorage) {
          var t = e.querySelector("." + this.sectionButtonClass);
          if (t) {
              var n = t.getAttribute("aria-controls")
                , o = n ? window.sessionStorage.getItem(n) : null;
              null !== o && this.setExpanded("true" === o, e)
          }
      }
  }
  ,
  t.prototype.openByAnchorOnLoad = function() {
      var e = window.location.hash.split("#")[1];
      window.location.hash && document.getElementById(e) && this.openForAnchor(e)
  }
  ,
  t.prototype.addEventListenersForAnchors = function() {
      nodeListForEach(this.$module.querySelectorAll("." + this.sectionInnerContent + ' a[href*="#"]'), function(e) {
          e.pathname === window.location.pathname && e.addEventListener("click", this.openForAnchor.bind(this, e.hash.split("#")[1]))
      }
      .bind(this))
  }
  ,
  t.prototype.openForAnchor = function(e) {
      var t = document.getElementById(e)
        , n = this.getContainingSection(t);
      this.setExpanded(!0, n)
  }
  ,
  t.prototype.getContainingSection = function(e) {
      for (; !e.classList.contains(this.sectionClass); )
          e = e.parentElement;
      return e
  }
  ,
  t.prototype.filterLocale = function(e) {
      return this.$module.actions.locale && -1 !== this.$module.actions.locale.indexOf("{") ? JSON.parse(this.$module.actions.locale)[e] : this.$module.actions.locale ? this.$module.actions.locale : void 0
  }
  ,
  e.GemAccordion = t
}(window.GOVUK.Modules),
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
}(this, function() {
  "use strict";
  function e(e) {
      this.$module = e,
      this.debounceFormSubmitTimer = null
  }
  (function() {
      "Window"in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
          e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
      }(this)
  }
  ).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "Document"in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(),
      this.Document.prototype = document))
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "Element"in this && "HTMLElement"in this || function() {
          function e() {
              return r-- || clearTimeout(t),
              !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0),
              t && document.body.prototype && clearTimeout(t),
              !!document.body.prototype)
          }
          if (!window.Element || window.HTMLElement) {
              window.Element = window.HTMLElement = new Function("return function Element() {}")();
              var t, n = document.appendChild(document.createElement("body")), o = n.appendChild(document.createElement("iframe")).contentWindow.document, s = Element.prototype = o.appendChild(o.createElement("*")), l = {}, c = function(e, t) {
                  var n, o, i, r = e.childNodes || [], a = -1;
                  if (1 === e.nodeType && e.constructor !== Element)
                      for (n in e.constructor = Element,
                      l)
                          o = l[n],
                          e[n] = o;
                  for (; i = t && r[++a]; )
                      c(i, t);
                  return e
              }, u = document.getElementsByTagName("*"), i = document.createElement, r = 100;
              s.attachEvent("onpropertychange", function(e) {
                  for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = s[n], r = l[n], a = -1; t = u[++a]; )
                      1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                  l[n] = i
              }),
              s.constructor = Element,
              s.hasAttribute || (s.hasAttribute = function a(e) {
                  return null !== this.getAttribute(e)
              }
              ),
              e() || (document.onreadystatechange = e,
              t = setInterval(e, 25)),
              document.createElement = function d(e) {
                  var t = i(String(e).toLowerCase());
                  return c(t)
              }
              ,
              document.removeChild(n)
          } else
              window.HTMLElement = window.Element
      }()
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      var s, l, c, u;
      "defineProperty"in Object && function() {
          try {
              var e = {};
              return Object.defineProperty(e, "test", {
                  value: 42
              }),
              !0
          } catch (t) {
              return !1
          }
      }() || (s = Object.defineProperty,
      l = Object.prototype.hasOwnProperty("__defineGetter__"),
      c = "Getters & setters cannot be defined on this javascript engine",
      u = "A property cannot both have accessors and be writable or have a value",
      Object.defineProperty = function d(e, t, n) {
          if (s && (e === window || e === document || e === Element.prototype || e instanceof Element))
              return s(e, t, n);
          if (null === e || !(e instanceof Object || "object" == typeof e))
              throw new TypeError("Object.defineProperty called on non-object");
          if (!(n instanceof Object))
              throw new TypeError("Property description must be an object");
          var o = String(t)
            , i = "value"in n || "writable"in n
            , r = "get"in n && typeof n.get
            , a = "set"in n && typeof n.set;
          if (r) {
              if ("function" !== r)
                  throw new TypeError("Getter must be a function");
              if (!l)
                  throw new TypeError(c);
              if (i)
                  throw new TypeError(u);
              Object.__defineGetter__.call(e, o, n.get)
          } else
              e[o] = n.value;
          if (a) {
              if ("function" !== a)
                  throw new TypeError("Setter must be a function");
              if (!l)
                  throw new TypeError(c);
              if (i)
                  throw new TypeError(u);
              Object.__defineSetter__.call(e, o, n.set)
          }
          return "value"in n && (e[o] = n.value),
          e
      }
      )
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function(c) {
      (function(e) {
          if (!("Event"in e))
              return !1;
          if ("function" == typeof e.Event)
              return !0;
          try {
              return new Event("click"),
              !0
          } catch (t) {
              return !1
          }
      }
      )(this) || function() {
          function u(e, t) {
              for (var n = -1, o = e.length; ++n < o; )
                  if (n in e && e[n] === t)
                      return n;
              return -1
          }
          var i = {
              click: 1,
              dblclick: 1,
              keyup: 1,
              keypress: 1,
              keydown: 1,
              mousedown: 1,
              mouseup: 1,
              mousemove: 1,
              mouseover: 1,
              mouseenter: 1,
              mouseleave: 1,
              mouseout: 1,
              storage: 1,
              storagecommit: 1,
              textinput: 1
          };
          if ("undefined" != typeof document && "undefined" != typeof window) {
              var e = window.Event && window.Event.prototype || null;
              window.Event = Window.prototype.Event = function r(e, t) {
                  if (!e)
                      throw new Error("Not enough arguments");
                  var n;
                  if ("createEvent"in document) {
                      n = document.createEvent("Event");
                      var o = !(!t || t.bubbles === c) && t.bubbles
                        , i = !(!t || t.cancelable === c) && t.cancelable;
                      return n.initEvent(e, o, i),
                      n
                  }
                  return (n = document.createEventObject()).type = e,
                  n.bubbles = !(!t || t.bubbles === c) && t.bubbles,
                  n.cancelable = !(!t || t.cancelable === c) && t.cancelable,
                  n
              }
              ,
              e && Object.defineProperty(window.Event, "prototype", {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: e
              }),
              "createEvent"in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function a(e, t) {
                  var c = this
                    , n = e
                    , o = t;
                  if (c === window && n in i)
                      throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                  c._events || (c._events = {}),
                  c._events[n] || (c._events[n] = function(e) {
                      var t, n = c._events[e.type].list, o = n.slice(), i = -1, r = o.length;
                      for (e.preventDefault = function a() {
                          !1 !== e.cancelable && (e.returnValue = !1)
                      }
                      ,
                      e.stopPropagation = function s() {
                          e.cancelBubble = !0
                      }
                      ,
                      e.stopImmediatePropagation = function l() {
                          e.cancelBubble = !0,
                          e.cancelImmediate = !0
                      }
                      ,
                      e.currentTarget = c,
                      e.relatedTarget = e.fromElement || null,
                      e.target = e.target || e.srcElement || c,
                      e.timeStamp = (new Date).getTime(),
                      e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft,
                      e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate; )
                          i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                  }
                  ,
                  c._events[n].list = [],
                  c.attachEvent && c.attachEvent("on" + n, c._events[n])),
                  c._events[n].list.push(o)
              }
              ,
              window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function s(e, t) {
                  var n, o = this, i = e, r = t;
                  o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1),
                  o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]),
                  delete o._events[i]))
              }
              ,
              window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                  if (!arguments.length)
                      throw new Error("Not enough arguments");
                  if (!e || "string" != typeof e.type)
                      throw new Error("DOM Events Exception 0");
                  var t = this
                    , n = e.type;
                  try {
                      if (!e.bubbles) {
                          e.cancelBubble = !0;
                          var o = function(e) {
                              e.cancelBubble = !0,
                              (t || window).detachEvent("on" + n, o)
                          };
                          this.attachEvent("on" + n, o)
                      }
                      this.fireEvent("on" + n, e)
                  } catch (i) {
                      for (e.target = t; "_events"in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e),
                      "function" == typeof t["on" + n] && t["on" + n].call(t, e),
                      (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble; )
                          ;
                  }
                  return !0
              }
              ,
              document.attachEvent("onreadystatechange", function() {
                  "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded",{
                      bubbles: !0
                  }))
              }))
          }
      }()
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "bind"in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
          value: function T(t) {
              var n, e = Array, o = Object, i = o.prototype, r = e.prototype, a = function a() {}, s = i.toString, l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, c = Function.prototype.toString, u = function u(e) {
                  try {
                      return c.call(e),
                      !0
                  } catch (t) {
                      return !1
                  }
              }, d = "[object Function]", p = "[object GeneratorFunction]";
              n = function n(e) {
                  if ("function" != typeof e)
                      return !1;
                  if (l)
                      return u(e);
                  var t = s.call(e);
                  return t === d || t === p
              }
              ;
              var f = r.slice
                , h = r.concat
                , m = r.push
                , g = Math.max
                , v = this;
              if (!n(v))
                  throw new TypeError("Function.prototype.bind called on incompatible " + v);
              for (var y, b = f.call(arguments, 1), w = function() {
                  if (this instanceof y) {
                      var e = v.apply(this, h.call(b, f.call(arguments)));
                      return o(e) === e ? e : this
                  }
                  return v.apply(t, h.call(b, f.call(arguments)))
              }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++)
                  m.call(x, "$" + k);
              return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w),
              v.prototype && (a.prototype = v.prototype,
              y.prototype = new a,
              a.prototype = null),
              y
          }
      })
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {});
  var n = 32
    , t = 1;
  return e.prototype.handleKeyDown = function(e) {
      var t = e.target;
      "button" === t.getAttribute("role") && e.keyCode === n && (e.preventDefault(),
      t.click())
  }
  ,
  e.prototype.debounce = function(e) {
      if ("true" === e.target.getAttribute("data-prevent-double-click"))
          return this.debounceFormSubmitTimer ? (e.preventDefault(),
          !1) : void (this.debounceFormSubmitTimer = setTimeout(function() {
              this.debounceFormSubmitTimer = null
          }
          .bind(this), 1e3 * t))
  }
  ,
  e.prototype.init = function() {
      this.$module.addEventListener("keydown", this.handleKeyDown),
      this.$module.addEventListener("click", this.debounce)
  }
  ,
  e
}),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
window.GOVUK.Modules.Button = window.GOVUKFrontend,
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GOVUKFrontend", t) : e.GOVUKFrontend = t()
}(this, function() {
  "use strict";
  function e(e) {
      this.$module = e,
      this.$textarea = e.querySelector(".govuk-js-character-count"),
      this.$textarea && (this.$countMessage = e.querySelector('[id="' + this.$textarea.id + '-info"]'))
  }
  return function() {
      var s, l, c, u;
      "defineProperty"in Object && function() {
          try {
              var e = {};
              return Object.defineProperty(e, "test", {
                  value: 42
              }),
              !0
          } catch (t) {
              return !1
          }
      }() || (s = Object.defineProperty,
      l = Object.prototype.hasOwnProperty("__defineGetter__"),
      c = "Getters & setters cannot be defined on this javascript engine",
      u = "A property cannot both have accessors and be writable or have a value",
      Object.defineProperty = function d(e, t, n) {
          if (s && (e === window || e === document || e === Element.prototype || e instanceof Element))
              return s(e, t, n);
          if (null === e || !(e instanceof Object || "object" == typeof e))
              throw new TypeError("Object.defineProperty called on non-object");
          if (!(n instanceof Object))
              throw new TypeError("Property description must be an object");
          var o = String(t)
            , i = "value"in n || "writable"in n
            , r = "get"in n && typeof n.get
            , a = "set"in n && typeof n.set;
          if (r) {
              if ("function" !== r)
                  throw new TypeError("Getter must be a function");
              if (!l)
                  throw new TypeError(c);
              if (i)
                  throw new TypeError(u);
              Object.__defineGetter__.call(e, o, n.get)
          } else
              e[o] = n.value;
          if (a) {
              if ("function" !== a)
                  throw new TypeError("Setter must be a function");
              if (!l)
                  throw new TypeError(c);
              if (i)
                  throw new TypeError(u);
              Object.__defineSetter__.call(e, o, n.set)
          }
          return "value"in n && (e[o] = n.value),
          e
      }
      )
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "bind"in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
          value: function T(t) {
              var n, e = Array, o = Object, i = o.prototype, r = e.prototype, a = function a() {}, s = i.toString, l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, c = Function.prototype.toString, u = function u(e) {
                  try {
                      return c.call(e),
                      !0
                  } catch (t) {
                      return !1
                  }
              }, d = "[object Function]", p = "[object GeneratorFunction]";
              n = function n(e) {
                  if ("function" != typeof e)
                      return !1;
                  if (l)
                      return u(e);
                  var t = s.call(e);
                  return t === d || t === p
              }
              ;
              var f = r.slice
                , h = r.concat
                , m = r.push
                , g = Math.max
                , v = this;
              if (!n(v))
                  throw new TypeError("Function.prototype.bind called on incompatible " + v);
              for (var y, b = f.call(arguments, 1), w = function() {
                  if (this instanceof y) {
                      var e = v.apply(this, h.call(b, f.call(arguments)));
                      return o(e) === e ? e : this
                  }
                  return v.apply(t, h.call(b, f.call(arguments)))
              }, E = g(0, v.length - b.length), x = [], k = 0; k < E; k++)
                  m.call(x, "$" + k);
              return y = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(w),
              v.prototype && (a.prototype = v.prototype,
              y.prototype = new a,
              a.prototype = null),
              y
          }
      })
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "Window"in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
          e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
      }(this)
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "Document"in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(),
      this.Document.prototype = document))
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      "Element"in this && "HTMLElement"in this || function() {
          function e() {
              return r-- || clearTimeout(t),
              !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0),
              t && document.body.prototype && clearTimeout(t),
              !!document.body.prototype)
          }
          if (!window.Element || window.HTMLElement) {
              window.Element = window.HTMLElement = new Function("return function Element() {}")();
              var t, n = document.appendChild(document.createElement("body")), o = n.appendChild(document.createElement("iframe")).contentWindow.document, s = Element.prototype = o.appendChild(o.createElement("*")), l = {}, c = function(e, t) {
                  var n, o, i, r = e.childNodes || [], a = -1;
                  if (1 === e.nodeType && e.constructor !== Element)
                      for (n in e.constructor = Element,
                      l)
                          o = l[n],
                          e[n] = o;
                  for (; i = t && r[++a]; )
                      c(i, t);
                  return e
              }, u = document.getElementsByTagName("*"), i = document.createElement, r = 100;
              s.attachEvent("onpropertychange", function(e) {
                  for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = s[n], r = l[n], a = -1; t = u[++a]; )
                      1 === t.nodeType && (o || t[n] === r) && (t[n] = i);
                  l[n] = i
              }),
              s.constructor = Element,
              s.hasAttribute || (s.hasAttribute = function a(e) {
                  return null !== this.getAttribute(e)
              }
              ),
              e() || (document.onreadystatechange = e,
              t = setInterval(e, 25)),
              document.createElement = function d(e) {
                  var t = i(String(e).toLowerCase());
                  return c(t)
              }
              ,
              document.removeChild(n)
          } else
              window.HTMLElement = window.Element
      }()
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function(c) {
      (function(e) {
          if (!("Event"in e))
              return !1;
          if ("function" == typeof e.Event)
              return !0;
          try {
              return new Event("click"),
              !0
          } catch (t) {
              return !1
          }
      }
      )(this) || function() {
          function u(e, t) {
              for (var n = -1, o = e.length; ++n < o; )
                  if (n in e && e[n] === t)
                      return n;
              return -1
          }
          var i = {
              click: 1,
              dblclick: 1,
              keyup: 1,
              keypress: 1,
              keydown: 1,
              mousedown: 1,
              mouseup: 1,
              mousemove: 1,
              mouseover: 1,
              mouseenter: 1,
              mouseleave: 1,
              mouseout: 1,
              storage: 1,
              storagecommit: 1,
              textinput: 1
          };
          if ("undefined" != typeof document && "undefined" != typeof window) {
              var e = window.Event && window.Event.prototype || null;
              window.Event = Window.prototype.Event = function r(e, t) {
                  if (!e)
                      throw new Error("Not enough arguments");
                  var n;
                  if ("createEvent"in document) {
                      n = document.createEvent("Event");
                      var o = !(!t || t.bubbles === c) && t.bubbles
                        , i = !(!t || t.cancelable === c) && t.cancelable;
                      return n.initEvent(e, o, i),
                      n
                  }
                  return (n = document.createEventObject()).type = e,
                  n.bubbles = !(!t || t.bubbles === c) && t.bubbles,
                  n.cancelable = !(!t || t.cancelable === c) && t.cancelable,
                  n
              }
              ,
              e && Object.defineProperty(window.Event, "prototype", {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: e
              }),
              "createEvent"in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function a(e, t) {
                  var c = this
                    , n = e
                    , o = t;
                  if (c === window && n in i)
                      throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                  c._events || (c._events = {}),
                  c._events[n] || (c._events[n] = function(e) {
                      var t, n = c._events[e.type].list, o = n.slice(), i = -1, r = o.length;
                      for (e.preventDefault = function a() {
                          !1 !== e.cancelable && (e.returnValue = !1)
                      }
                      ,
                      e.stopPropagation = function s() {
                          e.cancelBubble = !0
                      }
                      ,
                      e.stopImmediatePropagation = function l() {
                          e.cancelBubble = !0,
                          e.cancelImmediate = !0
                      }
                      ,
                      e.currentTarget = c,
                      e.relatedTarget = e.fromElement || null,
                      e.target = e.target || e.srcElement || c,
                      e.timeStamp = (new Date).getTime(),
                      e.clientX && (e.pageX = e.clientX + document.documentElement.scrollLeft,
                      e.pageY = e.clientY + document.documentElement.scrollTop); ++i < r && !e.cancelImmediate; )
                          i in o && -1 !== u(n, t = o[i]) && "function" == typeof t && t.call(c, e)
                  }
                  ,
                  c._events[n].list = [],
                  c.attachEvent && c.attachEvent("on" + n, c._events[n])),
                  c._events[n].list.push(o)
              }
              ,
              window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function s(e, t) {
                  var n, o = this, i = e, r = t;
                  o._events && o._events[i] && o._events[i].list && -1 !== (n = u(o._events[i].list, r)) && (o._events[i].list.splice(n, 1),
                  o._events[i].list.length || (o.detachEvent && o.detachEvent("on" + i, o._events[i]),
                  delete o._events[i]))
              }
              ,
              window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function l(e) {
                  if (!arguments.length)
                      throw new Error("Not enough arguments");
                  if (!e || "string" != typeof e.type)
                      throw new Error("DOM Events Exception 0");
                  var t = this
                    , n = e.type;
                  try {
                      if (!e.bubbles) {
                          e.cancelBubble = !0;
                          var o = function(e) {
                              e.cancelBubble = !0,
                              (t || window).detachEvent("on" + n, o)
                          };
                          this.attachEvent("on" + n, o)
                      }
                      this.fireEvent("on" + n, e)
                  } catch (i) {
                      for (e.target = t; "_events"in (e.currentTarget = t) && "function" == typeof t._events[n] && t._events[n].call(t, e),
                      "function" == typeof t["on" + n] && t["on" + n].call(t, e),
                      (t = 9 === t.nodeType ? t.parentWindow : t.parentNode) && !e.cancelBubble; )
                          ;
                  }
                  return !0
              }
              ,
              document.attachEvent("onreadystatechange", function() {
                  "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded",{
                      bubbles: !0
                  }))
              }))
          }
      }()
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function(p) {
      var e, t, n;
      "DOMTokenList"in this && (!("classList"in (e = document.createElement("x"))) || !e.classList.toggle("x", !1) && !e.className) || ("DOMTokenList"in (t = this) && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
          var i = !0
            , n = function(e, t, n, o) {
              Object.defineProperty ? Object.defineProperty(e, t, {
                  configurable: !1 === i || !!o,
                  get: n
              }) : e.__defineGetter__(t, n)
          };
          try {
              n({}, "support")
          } catch (e) {
              i = !1
          }
          return function(i, r) {
              var a = this
                , s = []
                , l = {}
                , c = 0
                , e = 0
                , t = function(e) {
                  n(a, e, function() {
                      return d(),
                      s[e]
                  }, !1)
              }
                , u = function() {
                  if (e <= c)
                      for (; e < c; ++e)
                          t(e)
              }
                , d = function() {
                  var e, t, n = arguments, o = /\s+/;
                  if (n.length)
                      for (t = 0; t < n.length; ++t)
                          if (o.test(n[t]))
                              throw (e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5,
                              e.name = "InvalidCharacterError",
                              e;
                  for ("" === (s = "object" == typeof i[r] ? ("" + i[r].baseVal).replace(/^\s+|\s+$/g, "").split(o) : ("" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (s = []),
                  l = {},
                  t = 0; t < s.length; ++t)
                      l[s[t]] = !0;
                  c = s.length,
                  u()
              };
              return d(),
              n(a, "length", function() {
                  return d(),
                  c
              }),
              a.toLocaleString = a.toString = function() {
                  return d(),
                  s.join(" ")
              }
              ,
              a.item = function(e) {
                  return d(),
                  s[e]
              }
              ,
              a.contains = function(e) {
                  return d(),
                  !!l[e]
              }
              ,
              a.add = function() {
                  d.apply(a, e = arguments);
                  for (var e, t, n = 0, o = e.length; n < o; ++n)
                      t = e[n],
                      l[t] || (s.push(t),
                      l[t] = !0);
                  c !== s.length && (c = s.length >>> 0,
                  "object" == typeof i[r] ? i[r].baseVal = s.join(" ") : i[r] = s.join(" "),
                  u())
              }
              ,
              a.remove = function() {
                  d.apply(a, e = arguments);
                  for (var e, t = {}, n = 0, o = []; n < e.length; ++n)
                      t[e[n]] = !0,
                      delete l[e[n]];
                  for (n = 0; n < s.length; ++n)
                      t[s[n]] || o.push(s[n]);
                  c = (s = o).length >>> 0,
                  "object" == typeof i[r] ? i[r].baseVal = s.join(" ") : i[r] = s.join(" "),
                  u()
              }
              ,
              a.toggle = function(e, t) {
                  return d.apply(a, [e]),
                  p !== t ? t ? (a.add(e),
                  !0) : (a.remove(e),
                  !1) : l[e] ? (a.remove(e),
                  !1) : (a.add(e),
                  !0)
              }
              ,
              a
          }
      }()),
      "classList"in (n = document.createElement("span")) && (n.classList.toggle("x", !1),
      n.classList.contains("x") && (n.classList.constructor.prototype.toggle = function i(e, t) {
          var n = t;
          if (n !== p)
              return this[(n = !!n) ? "add" : "remove"](e),
              n;
          var o = !this.contains(e);
          return this[o ? "add" : "remove"](e),
          o
      }
      )),
      function() {
          var e = document.createElement("span");
          if ("classList"in e && (e.classList.add("a", "b"),
          !e.classList.contains("b"))) {
              var o = e.classList.constructor.prototype.add;
              e.classList.constructor.prototype.add = function() {
                  for (var e = arguments, t = arguments.length, n = 0; n < t; n++)
                      o.call(this, e[n])
              }
          }
      }(),
      function() {
          var e = document.createElement("span");
          if ("classList"in e && (e.classList.add("a"),
          e.classList.add("b"),
          e.classList.remove("a", "b"),
          e.classList.contains("b"))) {
              var o = e.classList.constructor.prototype.remove;
              e.classList.constructor.prototype.remove = function() {
                  for (var e = arguments, t = arguments.length, n = 0; n < t; n++)
                      o.call(this, e[n])
              }
          }
      }())
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  function() {
      var e;
      "document"in this && "classList"in document.documentElement && "Element"in this && "classList"in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"),
      e.classList.contains("b")) || function(e) {
          var u = !0
            , d = function(e, t, n, o) {
              Object.defineProperty ? Object.defineProperty(e, t, {
                  configurable: !1 === u || !!o,
                  get: n
              }) : e.__defineGetter__(t, n)
          };
          try {
              d({}, "support")
          } catch (t) {
              u = !1
          }
          var p = function(e, l, c) {
              d(e.prototype, l, function() {
                  var e, t = this, n = "__defineGetter__DEFINE_PROPERTY" + l;
                  if (t[n])
                      return e;
                  if (!(t[n] = !0) === u) {
                      for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, a = r.length, s = 0; s < a; ++s)
                          if (r[s]._R === t) {
                              o = r[s];
                              break
                          }
                      o || (o = i.appendChild(document.createElement("div"))),
                      e = DOMTokenList.call(o, t, c)
                  } else
                      e = new DOMTokenList(t,c);
                  return d(t, l, function() {
                      return e
                  }),
                  delete t[n],
                  e
              }, !0)
          };
          p(e.Element, "classList", "className"),
          p(e.HTMLElement, "classList", "className"),
          p(e.HTMLLinkElement, "relList", "rel"),
          p(e.HTMLAnchorElement, "relList", "rel"),
          p(e.HTMLAreaElement, "relList", "rel")
      }(this)
  }
  .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
  e.prototype.defaults = {
      characterCountAttribute: "data-maxlength",
      wordCountAttribute: "data-maxwords"
  },
  e.prototype.init = function() {
      var e = this.$module
        , t = this.$textarea
        , n = this.$countMessage;
      if (t && n) {
          t.insertAdjacentElement("afterend", n),
          this.options = this.getDataset(e);
          var o = this.defaults.characterCountAttribute;
          this.options.maxwords && (o = this.defaults.wordCountAttribute),
          this.maxLength = e.getAttribute(o),
          this.maxLength && (e.removeAttribute("maxlength"),
          "onpageshow"in window ? window.addEventListener("pageshow", this.sync.bind(this)) : window.addEventListener("DOMContentLoaded", this.sync.bind(this)),
          this.sync())
      }
  }
  ,
  e.prototype.sync = function() {
      this.bindChangeEvents(),
      this.updateCountMessage()
  }
  ,
  e.prototype.getDataset = function(e) {
      var t = {}
        , n = e.attributes;
      if (n)
          for (var o = 0; o < n.length; o++) {
              var i = n[o]
                , r = i.name.match(/^data-(.+)/);
              r && (t[r[1]] = i.value)
          }
      return t
  }
  ,
  e.prototype.count = function(e) {
      var t;
      this.options.maxwords ? t = (e.match(/\S+/g) || []).length : t = e.length;
      return t
  }
  ,
  e.prototype.bindChangeEvents = function() {
      var e = this.$textarea;
      e.addEventListener("keyup", this.checkIfValueChanged.bind(this)),
      e.addEventListener("focus", this.handleFocus.bind(this)),
      e.addEventListener("blur", this.handleBlur.bind(this))
  }
  ,
  e.prototype.checkIfValueChanged = function() {
      this.$textarea.oldValue || (this.$textarea.oldValue = ""),
      this.$textarea.value !== this.$textarea.oldValue && (this.$textarea.oldValue = this.$textarea.value,
      this.updateCountMessage())
  }
  ,
  e.prototype.updateCountMessage = function() {
      var e = this.$textarea
        , t = this.options
        , n = this.$countMessage
        , o = this.count(e.value)
        , i = this.maxLength
        , r = i - o;
      o < i * (t.threshold ? t.threshold : 0) / 100 ? (n.classList.add("govuk-character-count__message--disabled"),
      n.setAttribute("aria-hidden", !0)) : (n.classList.remove("govuk-character-count__message--disabled"),
      n.removeAttribute("aria-hidden")),
      r < 0 ? (e.classList.add("govuk-textarea--error"),
      n.classList.remove("govuk-hint"),
      n.classList.add("govuk-error-message")) : (e.classList.remove("govuk-textarea--error"),
      n.classList.remove("govuk-error-message"),
      n.classList.add("govuk-hint"));
      var a = "remaining"
        , s = "character"
        , l = r;
      t.maxwords && (s = "word"),
      s += -1 === r || 1 === r ? "" : "s",
      a = r < 0 ? "too many" : "remaining",
      l = Math.abs(r),
      n.innerHTML = "You have " + l + " " + s + " " + a
  }
  ,
  e.prototype.handleFocus = function() {
      this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1e3)
  }
  ,
  e.prototype.handleBlur = function() {
      clearInterval(this.valueChecker)
  }
  ,
  e
}),
function(e) {
  function t() {}
  t.prototype.start = function(e) {
      this.$module = e[0],
      this.$dialogBox = this.$module.querySelector(".gem-c-modal-dialogue__box"),
      this.$closeButton = this.$module.querySelector(".gem-c-modal-dialogue__close-button"),
      this.$html = document.querySelector("html"),
      this.$body = document.querySelector("body"),
      this.$module.resize = this.handleResize.bind(this),
      this.$module.open = this.handleOpen.bind(this),
      this.$module.close = this.handleClose.bind(this),
      this.$module.focusDialog = this.handleFocusDialog.bind(this),
      this.$module.boundKeyDown = this.handleKeyDown.bind(this);
      var t = document.querySelector('[data-toggle="modal"][data-target="' + this.$module.id + '"]');
      t && t.addEventListener("click", this.$module.open),
      this.$closeButton && this.$closeButton.addEventListener("click", this.$module.close)
  }
  ,
  t.prototype.handleResize = function(e) {
      "narrow" === e && this.$dialogBox.classList.remove("gem-c-modal-dialogue__box--wide"),
      "wide" === e && this.$dialogBox.classList.add("gem-c-modal-dialogue__box--wide")
  }
  ,
  t.prototype.handleOpen = function(e) {
      e && e.preventDefault(),
      this.$html.classList.add("gem-o-template--modal"),
      this.$body.classList.add("gem-o-template__body--modal"),
      this.$body.classList.add("gem-o-template__body--blur"),
      this.$focusedElementBeforeOpen = document.activeElement,
      this.$module.style.display = "block",
      this.$dialogBox.focus(),
      document.addEventListener("keydown", this.$module.boundKeyDown, !0)
  }
  ,
  t.prototype.handleClose = function(e) {
      e && e.preventDefault(),
      this.$html.classList.remove("gem-o-template--modal"),
      this.$body.classList.remove("gem-o-template__body--modal"),
      this.$body.classList.remove("gem-o-template__body--blur"),
      this.$module.style.display = "none",
      this.$focusedElementBeforeOpen.focus(),
      document.removeEventListener("keydown", this.$module.boundKeyDown, !0)
  }
  ,
  t.prototype.handleFocusDialog = function() {
      this.$dialogBox.focus()
  }
  ,
  t.prototype.handleKeyDown = function(e) {
      var t = 9
        , n = 27;
      switch (e.keyCode) {
      case t:
          e.shiftKey ? document.activeElement === this.$dialogBox && (e.preventDefault(),
          this.$closeButton.focus()) : document.activeElement === this.$closeButton && (e.preventDefault(),
          this.$dialogBox.focus());
          break;
      case n:
          this.$module.close()
      }
  }
  ,
  e.ModalDialogue = t
}(window.GOVUK.Modules),
window.GOVUK = window.GOVUK || {},
window.GOVUK.Modules = window.GOVUK.Modules || {},
window.GOVUK.Modules.Tabs = window.GOVUKFrontend,
window.GOVUKFrontend.initAll = function() {}
,
$(document).ready(function() {});