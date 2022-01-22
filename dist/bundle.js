(() => {
  var S = Object.create;
  var t = Object.defineProperty;
  var c = Object.getOwnPropertyDescriptor;
  var d = Object.getOwnPropertyNames;
  var f = Object.getPrototypeOf,
    g = Object.prototype.hasOwnProperty;
  var h = (r) => t(r, "__esModule", { value: !0 });
  var i = ((r) =>
    typeof require != "undefined"
      ? require
      : typeof Proxy != "undefined"
      ? new Proxy(r, {
          get: (e, l) => (typeof require != "undefined" ? require : e)[l],
        })
      : r)(function (r) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + r + '" is not supported');
  });
  var p = (r, e, l, a) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let o of d(e))
          !g.call(r, o) &&
            (l || o !== "default") &&
            t(r, o, {
              get: () => e[o],
              enumerable: !(a = c(e, o)) || a.enumerable,
            });
      return r;
    },
    n = (r, e) =>
      p(
        h(
          t(
            r != null ? S(f(r)) : {},
            "default",
            !e && r && r.__esModule
              ? { get: () => r.default, enumerable: !0 }
              : { value: r, enumerable: !0 }
          )
        ),
        r
      );
  var m = n(i("react"), 1),
    s = n(i("react-dom/server"), 1),
    v = () => m.createElement("h1", null, "Hello, world!");
  console.log(s.renderToString(m.createElement(v, null)));
})();
