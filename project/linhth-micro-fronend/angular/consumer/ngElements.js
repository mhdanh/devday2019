!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})({
  0: function(e, t, n) {
    e.exports = n("zUnb");
  },
  crnd: function(e, t) {
    function n(e) {
      return Promise.resolve().then(function() {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      });
    }
    (n.keys = function() {
      return [];
    }),
      (n.resolve = n),
      (e.exports = n),
      (n.id = "crnd");
  },
  zUnb: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function(e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function o(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var i = function() {
      return (i =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function s(e, t, n, r) {
      var o,
        i = arguments.length,
        s =
          i < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
      else
        for (var a = e.length - 1; a >= 0; a--)
          (o = e[a]) &&
            (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
      return i > 3 && s && Object.defineProperty(t, n, s), s;
    }
    function a(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    }
    function u(e) {
      var t = "function" == typeof Symbol && e[Symbol.iterator],
        n = 0;
      return t
        ? t.call(e)
        : {
            next: function() {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            }
          };
    }
    function c(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
          s.push(r.value);
      } catch (a) {
        o = { error: a };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    }
    function l() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(c(arguments[t]));
      return e;
    }
    var d =
      Array.isArray ||
      function(e) {
        return e && "number" == typeof e.length;
      };
    function f(e) {
      return null != e && "object" == typeof e;
    }
    function p(e) {
      return "function" == typeof e;
    }
    var h,
      v = { e: {} };
    function y() {
      try {
        return h.apply(this, arguments);
      } catch (e) {
        return (v.e = e), v;
      }
    }
    function g(e) {
      return (h = e), y;
    }
    function m(e) {
      return (
        Error.call(this),
        (this.message = e
          ? e.length +
            " errors occurred during unsubscription:\n" +
            e
              .map(function(e, t) {
                return t + 1 + ") " + e.toString();
              })
              .join("\n  ")
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = e),
        this
      );
    }
    m.prototype = Object.create(Error.prototype);
    var b = m,
      _ = (function() {
        function e(e) {
          (this.closed = !1),
            (this._parent = null),
            (this._parents = null),
            (this._subscriptions = null),
            e && (this._unsubscribe = e);
        }
        var t;
        return (
          (e.prototype.unsubscribe = function() {
            var e,
              t = !1;
            if (!this.closed) {
              var n = this._parent,
                r = this._parents,
                o = this._unsubscribe,
                i = this._subscriptions;
              (this.closed = !0),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null);
              for (var s = -1, a = r ? r.length : 0; n; )
                n.remove(this), (n = (++s < a && r[s]) || null);
              if (
                (p(o) &&
                  g(o).call(this) === v &&
                  ((t = !0),
                  (e = e || (v.e instanceof b ? w(v.e.errors) : [v.e]))),
                d(i))
              )
                for (s = -1, a = i.length; ++s < a; ) {
                  var u = i[s];
                  if (f(u) && g(u.unsubscribe).call(u) === v) {
                    (t = !0), (e = e || []);
                    var c = v.e;
                    c instanceof b ? (e = e.concat(w(c.errors))) : e.push(c);
                  }
                }
              if (t) throw new b(e);
            }
          }),
          (e.prototype.add = function(t) {
            if (!t || t === e.EMPTY) return e.EMPTY;
            if (t === this) return this;
            var n = t;
            switch (typeof t) {
              case "function":
                n = new e(t);
              case "object":
                if (n.closed || "function" != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if ("function" != typeof n._addParent) {
                  var r = n;
                  (n = new e())._subscriptions = [r];
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + t + " added to Subscription."
                );
            }
            return (
              (this._subscriptions || (this._subscriptions = [])).push(n),
              n._addParent(this),
              n
            );
          }),
          (e.prototype.remove = function(e) {
            var t = this._subscriptions;
            if (t) {
              var n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }),
          (e.prototype._addParent = function(e) {
            var t = this._parent,
              n = this._parents;
            t && t !== e
              ? n
                ? -1 === n.indexOf(e) && n.push(e)
                : (this._parents = [e])
              : (this._parent = e);
          }),
          (e.EMPTY = (((t = new e()).closed = !0), t)),
          e
        );
      })();
    function w(e) {
      return e.reduce(function(e, t) {
        return e.concat(t instanceof b ? t.errors : t);
      }, []);
    }
    var E = !1,
      C = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          E = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return E;
        }
      };
    function x(e) {
      setTimeout(function() {
        throw e;
      });
    }
    var T = {
        closed: !0,
        next: function(e) {},
        error: function(e) {
          if (C.useDeprecatedSynchronousErrorHandling) throw e;
          x(e);
        },
        complete: function() {}
      },
      S =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random(),
      k = (function(e) {
        function t(n, r, o) {
          var i = e.call(this) || this;
          switch (
            ((i.syncErrorValue = null),
            (i.syncErrorThrown = !1),
            (i.syncErrorThrowable = !1),
            (i.isStopped = !1),
            (i._parentSubscription = null),
            arguments.length)
          ) {
            case 0:
              i.destination = T;
              break;
            case 1:
              if (!n) {
                i.destination = T;
                break;
              }
              if ("object" == typeof n) {
                n instanceof t
                  ? ((i.syncErrorThrowable = n.syncErrorThrowable),
                    (i.destination = n),
                    n.add(i))
                  : ((i.syncErrorThrowable = !0),
                    (i.destination = new I(i, n)));
                break;
              }
            default:
              (i.syncErrorThrowable = !0), (i.destination = new I(i, n, r, o));
          }
          return i;
        }
        return (
          o(t, e),
          (t.prototype[S] = function() {
            return this;
          }),
          (t.create = function(e, n, r) {
            var o = new t(e, n, r);
            return (o.syncErrorThrowable = !1), o;
          }),
          (t.prototype.next = function(e) {
            this.isStopped || this._next(e);
          }),
          (t.prototype.error = function(e) {
            this.isStopped || ((this.isStopped = !0), this._error(e));
          }),
          (t.prototype.complete = function() {
            this.isStopped || ((this.isStopped = !0), this._complete());
          }),
          (t.prototype.unsubscribe = function() {
            this.closed ||
              ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
          }),
          (t.prototype._next = function(e) {
            this.destination.next(e);
          }),
          (t.prototype._error = function(e) {
            this.destination.error(e), this.unsubscribe();
          }),
          (t.prototype._complete = function() {
            this.destination.complete(), this.unsubscribe();
          }),
          (t.prototype._unsubscribeAndRecycle = function() {
            var e = this._parent,
              t = this._parents;
            return (
              (this._parent = null),
              (this._parents = null),
              this.unsubscribe(),
              (this.closed = !1),
              (this.isStopped = !1),
              (this._parent = e),
              (this._parents = t),
              (this._parentSubscription = null),
              this
            );
          }),
          t
        );
      })(_),
      I = (function(e) {
        function t(t, n, r, o) {
          var i,
            s = e.call(this) || this;
          s._parentSubscriber = t;
          var a = s;
          return (
            p(n)
              ? (i = n)
              : n &&
                ((i = n.next),
                (r = n.error),
                (o = n.complete),
                n !== T &&
                  (p((a = Object.create(n)).unsubscribe) &&
                    s.add(a.unsubscribe.bind(a)),
                  (a.unsubscribe = s.unsubscribe.bind(s)))),
            (s._context = a),
            (s._next = i),
            (s._error = r),
            (s._complete = o),
            s
          );
        }
        return (
          o(t, e),
          (t.prototype.next = function(e) {
            if (!this.isStopped && this._next) {
              var t = this._parentSubscriber;
              C.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, e);
            }
          }),
          (t.prototype.error = function(e) {
            if (!this.isStopped) {
              var t = this._parentSubscriber,
                n = C.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                n && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, this._error, e),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
              else if (t.syncErrorThrowable)
                n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : x(e),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), n)) throw e;
                x(e);
              }
            }
          }),
          (t.prototype.complete = function() {
            var e = this;
            if (!this.isStopped) {
              var t = this._parentSubscriber;
              if (this._complete) {
                var n = function() {
                  return e._complete.call(e._context);
                };
                C.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (t.prototype.__tryOrUnsub = function(e, t) {
            try {
              e.call(this._context, t);
            } catch (n) {
              if ((this.unsubscribe(), C.useDeprecatedSynchronousErrorHandling))
                throw n;
              x(n);
            }
          }),
          (t.prototype.__tryOrSetError = function(e, t, n) {
            if (!C.useDeprecatedSynchronousErrorHandling)
              throw new Error("bad call");
            try {
              t.call(this._context, n);
            } catch (r) {
              return C.useDeprecatedSynchronousErrorHandling
                ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                : (x(r), !0);
            }
            return !1;
          }),
          (t.prototype._unsubscribe = function() {
            var e = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              e.unsubscribe();
          }),
          t
        );
      })(k),
      N = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    var A = (function() {
      function e(e) {
        (this._isScalar = !1), e && (this._subscribe = e);
      }
      return (
        (e.prototype.lift = function(t) {
          var n = new e();
          return (n.source = this), (n.operator = t), n;
        }),
        (e.prototype.subscribe = function(e, t, n) {
          var r = this.operator,
            o = (function(e, t, n) {
              if (e) {
                if (e instanceof k) return e;
                if (e[S]) return e[S]();
              }
              return e || t || n ? new k(e, t, n) : new k(T);
            })(e, t, n);
          if (
            (r
              ? r.call(o, this.source)
              : o.add(
                  this.source ||
                    (C.useDeprecatedSynchronousErrorHandling &&
                      !o.syncErrorThrowable)
                    ? this._subscribe(o)
                    : this._trySubscribe(o)
                ),
            C.useDeprecatedSynchronousErrorHandling &&
              o.syncErrorThrowable &&
              ((o.syncErrorThrowable = !1), o.syncErrorThrown))
          )
            throw o.syncErrorValue;
          return o;
        }),
        (e.prototype._trySubscribe = function(e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            C.useDeprecatedSynchronousErrorHandling &&
              ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              (function(e) {
                for (; e; ) {
                  var t = e.destination;
                  if (e.closed || e.isStopped) return !1;
                  e = t && t instanceof k ? t : null;
                }
                return !0;
              })(e)
                ? e.error(t)
                : console.warn(t);
          }
        }),
        (e.prototype.forEach = function(e, t) {
          var n = this;
          return new (t = O(t))(function(t, r) {
            var o;
            o = n.subscribe(
              function(t) {
                try {
                  e(t);
                } catch (n) {
                  r(n), o && o.unsubscribe();
                }
              },
              r,
              t
            );
          });
        }),
        (e.prototype._subscribe = function(e) {
          var t = this.source;
          return t && t.subscribe(e);
        }),
        (e.prototype[N] = function() {
          return this;
        }),
        (e.prototype.pipe = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return 0 === e.length
            ? this
            : ((n = e)
                ? 1 === n.length
                  ? n[0]
                  : function(e) {
                      return n.reduce(function(e, t) {
                        return t(e);
                      }, e);
                    }
                : function() {})(this);
          var n;
        }),
        (e.prototype.toPromise = function(e) {
          var t = this;
          return new (e = O(e))(function(e, n) {
            var r;
            t.subscribe(
              function(e) {
                return (r = e);
              },
              function(e) {
                return n(e);
              },
              function() {
                return e(r);
              }
            );
          });
        }),
        (e.create = function(t) {
          return new e(t);
        }),
        e
      );
    })();
    function O(e) {
      if ((e || (e = C.Promise || Promise), !e))
        throw new Error("no Promise impl found");
      return e;
    }
    function D() {
      return (
        Error.call(this),
        (this.message = "object unsubscribed"),
        (this.name = "ObjectUnsubscribedError"),
        this
      );
    }
    D.prototype = Object.create(Error.prototype);
    var R = D,
      P = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r.subject = t), (r.subscriber = n), (r.closed = !1), r;
        }
        return (
          o(t, e),
          (t.prototype.unsubscribe = function() {
            if (!this.closed) {
              this.closed = !0;
              var e = this.subject,
                t = e.observers;
              if (
                ((this.subject = null),
                t && 0 !== t.length && !e.isStopped && !e.closed)
              ) {
                var n = t.indexOf(this.subscriber);
                -1 !== n && t.splice(n, 1);
              }
            }
          }),
          t
        );
      })(_),
      M = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.destination = t), n;
        }
        return o(t, e), t;
      })(k),
      V = (function(e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.observers = []),
            (t.closed = !1),
            (t.isStopped = !1),
            (t.hasError = !1),
            (t.thrownError = null),
            t
          );
        }
        return (
          o(t, e),
          (t.prototype[S] = function() {
            return new M(this);
          }),
          (t.prototype.lift = function(e) {
            var t = new j(this, this);
            return (t.operator = e), t;
          }),
          (t.prototype.next = function(e) {
            if (this.closed) throw new R();
            if (!this.isStopped)
              for (
                var t = this.observers, n = t.length, r = t.slice(), o = 0;
                o < n;
                o++
              )
                r[o].next(e);
          }),
          (t.prototype.error = function(e) {
            if (this.closed) throw new R();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            for (
              var t = this.observers, n = t.length, r = t.slice(), o = 0;
              o < n;
              o++
            )
              r[o].error(e);
            this.observers.length = 0;
          }),
          (t.prototype.complete = function() {
            if (this.closed) throw new R();
            this.isStopped = !0;
            for (
              var e = this.observers, t = e.length, n = e.slice(), r = 0;
              r < t;
              r++
            )
              n[r].complete();
            this.observers.length = 0;
          }),
          (t.prototype.unsubscribe = function() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }),
          (t.prototype._trySubscribe = function(t) {
            if (this.closed) throw new R();
            return e.prototype._trySubscribe.call(this, t);
          }),
          (t.prototype._subscribe = function(e) {
            if (this.closed) throw new R();
            return this.hasError
              ? (e.error(this.thrownError), _.EMPTY)
              : this.isStopped
              ? (e.complete(), _.EMPTY)
              : (this.observers.push(e), new P(this, e));
          }),
          (t.prototype.asObservable = function() {
            var e = new A();
            return (e.source = this), e;
          }),
          (t.create = function(e, t) {
            return new j(e, t);
          }),
          t
        );
      })(A),
      j = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r.destination = t), (r.source = n), r;
        }
        return (
          o(t, e),
          (t.prototype.next = function(e) {
            var t = this.destination;
            t && t.next && t.next(e);
          }),
          (t.prototype.error = function(e) {
            var t = this.destination;
            t && t.error && this.destination.error(e);
          }),
          (t.prototype.complete = function() {
            var e = this.destination;
            e && e.complete && this.destination.complete();
          }),
          (t.prototype._subscribe = function(e) {
            return this.source ? this.source.subscribe(e) : _.EMPTY;
          }),
          t
        );
      })(V),
      H = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o.parent = t),
            (o.outerValue = n),
            (o.outerIndex = r),
            (o.index = 0),
            o
          );
        }
        return (
          o(t, e),
          (t.prototype._next = function(e) {
            this.parent.notifyNext(
              this.outerValue,
              e,
              this.outerIndex,
              this.index++,
              this
            );
          }),
          (t.prototype._error = function(e) {
            this.parent.notifyError(e, this), this.unsubscribe();
          }),
          (t.prototype._complete = function() {
            this.parent.notifyComplete(this), this.unsubscribe();
          }),
          t
        );
      })(k),
      F = function(e) {
        return function(t) {
          for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.closed || t.complete();
        };
      },
      L = function(e) {
        return function(t) {
          return (
            e
              .then(
                function(e) {
                  t.closed || (t.next(e), t.complete());
                },
                function(e) {
                  return t.error(e);
                }
              )
              .then(null, x),
            t
          );
        };
      };
    function B() {
      return "function" == typeof Symbol && Symbol.iterator
        ? Symbol.iterator
        : "@@iterator";
    }
    var z = B(),
      U = function(e) {
        return function(t) {
          for (var n = e[z](); ; ) {
            var r = n.next();
            if (r.done) {
              t.complete();
              break;
            }
            if ((t.next(r.value), t.closed)) break;
          }
          return (
            "function" == typeof n.return &&
              t.add(function() {
                n.return && n.return();
              }),
            t
          );
        };
      },
      Z = function(e) {
        return function(t) {
          var n = e[N]();
          if ("function" != typeof n.subscribe)
            throw new TypeError(
              "Provided object does not correctly implement Symbol.observable"
            );
          return n.subscribe(t);
        };
      },
      Q = function(e) {
        return e && "number" == typeof e.length && "function" != typeof e;
      };
    function q(e) {
      return (
        e && "function" != typeof e.subscribe && "function" == typeof e.then
      );
    }
    var W = function(e) {
        if (e instanceof A)
          return function(t) {
            return e._isScalar
              ? (t.next(e.value), void t.complete())
              : e.subscribe(t);
          };
        if (e && "function" == typeof e[N]) return Z(e);
        if (Q(e)) return F(e);
        if (q(e)) return L(e);
        if (e && "function" == typeof e[z]) return U(e);
        var t = f(e) ? "an invalid object" : "'" + e + "'";
        throw new TypeError(
          "You provided " +
            t +
            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
        );
      },
      G = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
          }),
          (t.prototype.notifyError = function(e, t) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function(e) {
            this.destination.complete();
          }),
          t
        );
      })(k);
    function K(e, t) {
      return function(n) {
        if ("function" != typeof e)
          throw new TypeError(
            "argument is not a function. Are you looking for `mapTo()`?"
          );
        return n.lift(new Y(e, t));
      };
    }
    var Y = (function() {
        function e(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new J(e, this.project, this.thisArg));
          }),
          e
        );
      })(),
      J = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
        }
        return (
          o(t, e),
          (t.prototype._next = function(e) {
            var t;
            try {
              t = this.project.call(this.thisArg, e, this.count++);
            } catch (n) {
              return void this.destination.error(n);
            }
            this.destination.next(t);
          }),
          t
        );
      })(k);
    function $(e, t) {
      return new A(
        t
          ? function(n) {
              var r = new _(),
                o = 0;
              return (
                r.add(
                  t.schedule(function() {
                    o !== e.length
                      ? (n.next(e[o++]), n.closed || r.add(this.schedule()))
                      : n.complete();
                  })
                ),
                r
              );
            }
          : F(e)
      );
    }
    var X = (function() {
        function e(e, t) {
          void 0 === t && (t = Number.POSITIVE_INFINITY),
            (this.project = e),
            (this.concurrent = t);
        }
        return (
          (e.prototype.call = function(e, t) {
            return t.subscribe(new ee(e, this.project, this.concurrent));
          }),
          e
        );
      })(),
      ee = (function(e) {
        function t(t, n, r) {
          void 0 === r && (r = Number.POSITIVE_INFINITY);
          var o = e.call(this, t) || this;
          return (
            (o.project = n),
            (o.concurrent = r),
            (o.hasCompleted = !1),
            (o.buffer = []),
            (o.active = 0),
            (o.index = 0),
            o
          );
        }
        return (
          o(t, e),
          (t.prototype._next = function(e) {
            this.active < this.concurrent
              ? this._tryNext(e)
              : this.buffer.push(e);
          }),
          (t.prototype._tryNext = function(e) {
            var t,
              n = this.index++;
            try {
              t = this.project(e, n);
            } catch (r) {
              return void this.destination.error(r);
            }
            this.active++, this._innerSub(t, e, n);
          }),
          (t.prototype._innerSub = function(e, t, n) {
            var r,
              o,
              i = new H(this, void 0, void 0);
            this.destination.add(i),
              (r = e),
              void 0 === (o = i) && (o = new H(this, t, n)),
              o.closed || W(r)(o);
          }),
          (t.prototype._complete = function() {
            (this.hasCompleted = !0),
              0 === this.active &&
                0 === this.buffer.length &&
                this.destination.complete(),
              this.unsubscribe();
          }),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
          }),
          (t.prototype.notifyComplete = function(e) {
            var t = this.buffer;
            this.remove(e),
              this.active--,
              t.length > 0
                ? this._next(t.shift())
                : 0 === this.active &&
                  this.hasCompleted &&
                  this.destination.complete();
          }),
          t
        );
      })(G);
    function te(e) {
      return e;
    }
    function ne() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n,
        r = Number.POSITIVE_INFINITY,
        o = null,
        i = e[e.length - 1];
      return (
        (n = i) && "function" == typeof n.schedule
          ? ((o = e.pop()),
            e.length > 1 && "number" == typeof e[e.length - 1] && (r = e.pop()))
          : "number" == typeof i && (r = e.pop()),
        null === o && 1 === e.length && e[0] instanceof A
          ? e[0]
          : (function(e) {
              return (
                void 0 === e && (e = Number.POSITIVE_INFINITY),
                (function e(t, n, r) {
                  return (
                    void 0 === r && (r = Number.POSITIVE_INFINITY),
                    "function" == typeof n
                      ? function(o) {
                          return o.pipe(
                            e(function(e, r) {
                              return ((o = t(e, r)),
                              o instanceof A ? o : new A(W(o))).pipe(
                                K(function(t, o) {
                                  return n(e, t, r, o);
                                })
                              );
                              var o;
                            }, r)
                          );
                        }
                      : ("number" == typeof n && (r = n),
                        function(e) {
                          return e.lift(new X(t, r));
                        })
                  );
                })(te, e)
              );
            })(r)($(e, o))
      );
    }
    function re() {
      return function(e) {
        return e.lift(new oe(e));
      };
    }
    var oe = (function() {
        function e(e) {
          this.connectable = e;
        }
        return (
          (e.prototype.call = function(e, t) {
            var n = this.connectable;
            n._refCount++;
            var r = new ie(e, n),
              o = t.subscribe(r);
            return r.closed || (r.connection = n.connect()), o;
          }),
          e
        );
      })(),
      ie = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.connectable = n), r;
        }
        return (
          o(t, e),
          (t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
              this.connectable = null;
              var t = e._refCount;
              if (t <= 0) this.connection = null;
              else if (((e._refCount = t - 1), t > 1)) this.connection = null;
              else {
                var n = this.connection,
                  r = e._connection;
                (this.connection = null),
                  !r || (n && r !== n) || r.unsubscribe();
              }
            } else this.connection = null;
          }),
          t
        );
      })(k),
      se = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            (r.source = t),
            (r.subjectFactory = n),
            (r._refCount = 0),
            (r._isComplete = !1),
            r
          );
        }
        return (
          o(t, e),
          (t.prototype._subscribe = function(e) {
            return this.getSubject().subscribe(e);
          }),
          (t.prototype.getSubject = function() {
            var e = this._subject;
            return (
              (e && !e.isStopped) || (this._subject = this.subjectFactory()),
              this._subject
            );
          }),
          (t.prototype.connect = function() {
            var e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new _()).add(
                  this.source.subscribe(new ue(this.getSubject(), this))
                ),
                e.closed
                  ? ((this._connection = null), (e = _.EMPTY))
                  : (this._connection = e)),
              e
            );
          }),
          (t.prototype.refCount = function() {
            return re()(this);
          }),
          t
        );
      })(A).prototype,
      ae = {
        operator: { value: null },
        _refCount: { value: 0, writable: !0 },
        _subject: { value: null, writable: !0 },
        _connection: { value: null, writable: !0 },
        _subscribe: { value: se._subscribe },
        _isComplete: { value: se._isComplete, writable: !0 },
        getSubject: { value: se.getSubject },
        connect: { value: se.connect },
        refCount: { value: se.refCount }
      },
      ue = (function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.connectable = n), r;
        }
        return (
          o(t, e),
          (t.prototype._error = function(t) {
            this._unsubscribe(), e.prototype._error.call(this, t);
          }),
          (t.prototype._complete = function() {
            (this.connectable._isComplete = !0),
              this._unsubscribe(),
              e.prototype._complete.call(this);
          }),
          (t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
              this.connectable = null;
              var t = e._connection;
              (e._refCount = 0),
                (e._subject = null),
                (e._connection = null),
                t && t.unsubscribe();
            }
          }),
          t
        );
      })(M);
    function ce() {
      return new V();
    }
    function le(e) {
      for (var t in e) if (e[t] === le) return t;
      throw Error("Could not find renamed property on target object.");
    }
    var de = le({ ngInjectableDef: le });
    function fe(e) {
      return {
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
      };
    }
    function pe(e) {
      return e && e.hasOwnProperty(de) ? e[de] : null;
    }
    var he = (function() {
        function e(e, t) {
          (this._desc = e),
            (this.ngMetadataName = "InjectionToken"),
            (this.ngInjectableDef =
              void 0 !== t
                ? fe({ providedIn: t.providedIn || "root", factory: t.factory })
                : void 0);
        }
        return (
          (e.prototype.toString = function() {
            return "InjectionToken " + this._desc;
          }),
          e
        );
      })(),
      ve = "__parameters__";
    function ye(e, t, n) {
      var r = (function(e) {
        return function() {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          if (e) {
            var r = e.apply(void 0, l(t));
            for (var o in r) this[o] = r[o];
          }
        };
      })(t);
      function o() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        if (this instanceof o) return r.apply(this, t), this;
        var i = new ((e = o).bind.apply(e, l([void 0], t)))();
        return (s.annotation = i), s;
        function s(e, t, n) {
          for (
            var r = e.hasOwnProperty(ve)
              ? e[ve]
              : Object.defineProperty(e, ve, { value: [] })[ve];
            r.length <= n;

          )
            r.push(null);
          return (r[n] = r[n] || []).push(i), e;
        }
      }
      return (
        n && (o.prototype = Object.create(n.prototype)),
        (o.prototype.ngMetadataName = e),
        (o.annotationCls = o),
        o
      );
    }
    var ge = "undefined" != typeof window && window,
      me =
        "undefined" != typeof self &&
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        self,
      be = ("undefined" != typeof global && global) || ge || me,
      _e = Promise.resolve(0),
      we = null;
    function Ee() {
      if (!we) {
        var e = be.Symbol;
        if (e && e.iterator) we = e.iterator;
        else
          for (
            var t = Object.getOwnPropertyNames(Map.prototype), n = 0;
            n < t.length;
            ++n
          ) {
            var r = t[n];
            "entries" !== r &&
              "size" !== r &&
              Map.prototype[r] === Map.prototype.entries &&
              (we = r);
          }
      }
      return we;
    }
    function Ce(e) {
      "undefined" == typeof Zone
        ? _e.then(function() {
            e && e.apply(null, null);
          })
        : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
    }
    function xe(e, t) {
      return (
        e === t ||
        ("number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t))
      );
    }
    function Te(e) {
      if ("string" == typeof e) return e;
      if (e instanceof Array) return "[" + e.map(Te).join(", ") + "]";
      if (null == e) return "" + e;
      if (e.overriddenName) return "" + e.overriddenName;
      if (e.name) return "" + e.name;
      var t = e.toString();
      if (null == t) return "" + t;
      var n = t.indexOf("\n");
      return -1 === n ? t : t.substring(0, n);
    }
    var Se = le({ __forward_ref__: le });
    function ke(e) {
      return (
        (e.__forward_ref__ = ke),
        (e.toString = function() {
          return Te(this());
        }),
        e
      );
    }
    function Ie(e) {
      var t = e;
      return "function" == typeof t &&
        t.hasOwnProperty(Se) &&
        t.__forward_ref__ === ke
        ? t()
        : e;
    }
    var Ne,
      Ae = (function(e) {
        return (
          (e[(e.Emulated = 0)] = "Emulated"),
          (e[(e.Native = 1)] = "Native"),
          (e[(e.None = 2)] = "None"),
          (e[(e.ShadowDom = 3)] = "ShadowDom"),
          e
        );
      })({}),
      Oe = ye("Inject", function(e) {
        return { token: e };
      }),
      De = ye("Optional"),
      Re = ye("Self"),
      Pe = ye("SkipSelf"),
      Me = (function(e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })({}),
      Ve = void 0;
    function je(e) {
      var t = Ve;
      return (Ve = e), t;
    }
    var He = /([A-Z])/g;
    function Fe(e) {
      try {
        return null != e ? e.toString().slice(0, 30) : e;
      } catch (t) {
        return "[ERROR] Exception while trying to serialize the value";
      }
    }
    function Le(e, t) {
      var n = Ue(e),
        r = Ue(t);
      return n && r
        ? (function(e, t, n) {
            for (var r = e[Ee()](), o = t[Ee()](); ; ) {
              var i = r.next(),
                s = o.next();
              if (i.done && s.done) return !0;
              if (i.done || s.done) return !1;
              if (!n(i.value, s.value)) return !1;
            }
          })(e, t, Le)
        : !(
            n ||
            !e ||
            ("object" != typeof e && "function" != typeof e) ||
            r ||
            !t ||
            ("object" != typeof t && "function" != typeof t)
          ) || xe(e, t);
    }
    var Be = (function() {
        function e(e) {
          this.wrapped = e;
        }
        return (
          (e.wrap = function(t) {
            return new e(t);
          }),
          (e.unwrap = function(t) {
            return e.isWrapped(t) ? t.wrapped : t;
          }),
          (e.isWrapped = function(t) {
            return t instanceof e;
          }),
          e
        );
      })(),
      ze = (function() {
        function e(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        return (
          (e.prototype.isFirstChange = function() {
            return this.firstChange;
          }),
          e
        );
      })();
    function Ue(e) {
      return (
        !!Ze(e) && (Array.isArray(e) || (!(e instanceof Map) && Ee() in e))
      );
    }
    function Ze(e) {
      return null !== e && ("function" == typeof e || "object" == typeof e);
    }
    function Qe() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }
    var qe = "__source",
      We = new Object(),
      Ge = new he("INJECTOR"),
      Ke = (function() {
        function e() {}
        return (
          (e.prototype.get = function(e, t) {
            if ((void 0 === t && (t = We), t === We))
              throw new Error(
                "NullInjectorError: No provider for " + Te(e) + "!"
              );
            return t;
          }),
          e
        );
      })(),
      Ye = (function() {
        function e() {}
        return (
          (e.create = function(e, t) {
            return Array.isArray(e)
              ? new st(e, t)
              : new st(e.providers, e.parent, e.name || null);
          }),
          (e.THROW_IF_NOT_FOUND = We),
          (e.NULL = new Ke()),
          (e.ngInjectableDef = fe({
            providedIn: "any",
            factory: function() {
              return (
                void 0 === e && (e = Me.Default),
                (Ne ||
                  function(e, t) {
                    if ((void 0 === t && (t = Me.Default), void 0 === Ve))
                      throw new Error(
                        "inject() must be called from an injection context"
                      );
                    return null === Ve
                      ? (function(e, t, n) {
                          var r = pe(e);
                          if (r && "root" == r.providedIn)
                            return void 0 === r.value
                              ? (r.value = r.factory())
                              : r.value;
                          if (n & Me.Optional) return null;
                          throw new Error(
                            "Injector: NOT_FOUND [" + Te(e) + "]"
                          );
                        })(e, 0, t)
                      : Ve.get(e, t & Me.Optional ? null : void 0, t);
                  })(Ge, e)
              );
              var e;
            }
          })),
          (e.__NG_ELEMENT_ID__ = function() {
            return Je();
          }),
          e
        );
      })(),
      Je = Qe,
      $e = function(e) {
        return e;
      },
      Xe = [],
      et = $e,
      tt = function() {
        return Array.prototype.slice.call(arguments);
      },
      nt = le({ provide: String, useValue: le }),
      rt = Ye.NULL,
      ot = /\n/gm,
      it = "\u0275",
      st = (function() {
        function e(e, t, n) {
          void 0 === t && (t = rt),
            void 0 === n && (n = null),
            (this.parent = t),
            (this.source = n);
          var r = (this._records = new Map());
          r.set(Ye, { token: Ye, fn: $e, deps: Xe, value: this, useNew: !1 }),
            r.set(Ge, { token: Ge, fn: $e, deps: Xe, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = Ie(n)) instanceof Array)
                  for (var r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ("function" == typeof n)
                    throw ct("Function/Class not supported", n);
                  if (!n || "object" != typeof n || !n.provide)
                    throw ct("Unexpected provider", n);
                  var o = Ie(n.provide),
                    i = (function(e) {
                      var t = (function(e) {
                          var t = Xe,
                            n = e.deps;
                          if (n && n.length) {
                            t = [];
                            for (var r = 0; r < n.length; r++) {
                              var o = 6;
                              if ((u = Ie(n[r])) instanceof Array)
                                for (var i = 0, s = u; i < s.length; i++) {
                                  var a = s[i];
                                  a instanceof De || a == De
                                    ? (o |= 1)
                                    : a instanceof Pe || a == Pe
                                    ? (o &= -3)
                                    : a instanceof Re || a == Re
                                    ? (o &= -5)
                                    : (u = a instanceof Oe ? a.token : Ie(a));
                                }
                              t.push({ token: u, options: o });
                            }
                          } else if (e.useExisting) {
                            var u;
                            t = [
                              { token: (u = Ie(e.useExisting)), options: 6 }
                            ];
                          } else if (!(n || nt in e))
                            throw ct("'deps' required", e);
                          return t;
                        })(e),
                        n = $e,
                        r = Xe,
                        o = !1,
                        i = Ie(e.provide);
                      if (nt in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (o = !0), (n = Ie(e.useClass));
                      else {
                        if ("function" != typeof i)
                          throw ct(
                            "StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",
                            e
                          );
                        (o = !0), (n = i);
                      }
                      return { deps: t, fn: n, useNew: o, value: r };
                    })(n);
                  if (!0 === n.multi) {
                    var s = t.get(o);
                    if (s) {
                      if (s.fn !== tt) throw at(o);
                    } else
                      t.set(
                        o,
                        (s = {
                          token: n.provide,
                          deps: [],
                          useNew: !1,
                          fn: tt,
                          value: Xe
                        })
                      );
                    s.deps.push({ token: (o = n), options: 6 });
                  }
                  var a = t.get(o);
                  if (a && a.fn == tt) throw at(o);
                  t.set(o, i);
                }
            })(r, e);
        }
        return (
          (e.prototype.get = function(e, t, n) {
            void 0 === n && (n = Me.Default);
            var r = this._records.get(e);
            try {
              return (function e(t, n, r, o, i, s) {
                try {
                  return (function(t, n, r, o, i, s) {
                    var a, u;
                    if (!n || s & Me.SkipSelf)
                      s & Me.Self || (u = o.get(t, i, Me.Default));
                    else {
                      if ((u = n.value) == et)
                        throw Error(it + "Circular dependency");
                      if (u === Xe) {
                        n.value = et;
                        var c = n.useNew,
                          d = n.fn,
                          f = n.deps,
                          p = Xe;
                        if (f.length) {
                          p = [];
                          for (var h = 0; h < f.length; h++) {
                            var v = f[h],
                              y = v.options,
                              g = 2 & y ? r.get(v.token) : void 0;
                            p.push(
                              e(
                                v.token,
                                g,
                                r,
                                g || 4 & y ? o : rt,
                                1 & y ? null : Ye.THROW_IF_NOT_FOUND,
                                Me.Default
                              )
                            );
                          }
                        }
                        n.value = u = c
                          ? new ((a = d).bind.apply(a, l([void 0], p)))()
                          : d.apply(void 0, p);
                      }
                    }
                    return u;
                  })(t, n, r, o, i, s);
                } catch (a) {
                  throw (a instanceof Error || (a = new Error(a)),
                  (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(t),
                  n && n.value == et && (n.value = Xe),
                  a);
                }
              })(e, r, this._records, this.parent, t, n);
            } catch (i) {
              var o = i.ngTempTokenPath;
              throw (e[qe] && o.unshift(e[qe]),
              (i.message = ut("\n" + i.message, o, this.source)),
              (i.ngTokenPath = o),
              (i.ngTempTokenPath = null),
              i);
            }
          }),
          (e.prototype.toString = function() {
            var e = [];
            return (
              this._records.forEach(function(t, n) {
                return e.push(Te(n));
              }),
              "StaticInjector[" + e.join(", ") + "]"
            );
          }),
          e
        );
      })();
    function at(e) {
      return ct("Cannot mix multi providers and regular providers", e);
    }
    function ut(e, t, n) {
      void 0 === n && (n = null),
        (e = e && "\n" === e.charAt(0) && e.charAt(1) == it ? e.substr(2) : e);
      var r = Te(t);
      if (t instanceof Array) r = t.map(Te).join(" -> ");
      else if ("object" == typeof t) {
        var o = [];
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            var s = t[i];
            o.push(
              i + ":" + ("string" == typeof s ? JSON.stringify(s) : Te(s))
            );
          }
        r = "{" + o.join(", ") + "}";
      }
      return (
        "StaticInjectorError" +
        (n ? "(" + n + ")" : "") +
        "[" +
        r +
        "]: " +
        e.replace(ot, "\n  ")
      );
    }
    function ct(e, t) {
      return new Error(ut(e, t));
    }
    var lt = new he(
        "The presence of this token marks an injector as being the root injector."
      ),
      dt = (function() {
        return function() {};
      })(),
      ft = (function() {
        return function() {};
      })();
    function pt(e) {
      var t = Error(
        "No component factory found for " +
          Te(e) +
          ". Did you add it to @NgModule.entryComponents?"
      );
      return (t[ht] = e), t;
    }
    var ht = "ngComponent",
      vt = (function() {
        function e() {}
        return (
          (e.prototype.resolveComponentFactory = function(e) {
            throw pt(e);
          }),
          e
        );
      })(),
      yt = (function() {
        function e() {}
        return (e.NULL = new vt()), e;
      })(),
      gt = (function() {
        function e(e, t, n) {
          (this._parent = t),
            (this._ngModule = n),
            (this._factories = new Map());
          for (var r = 0; r < e.length; r++) {
            var o = e[r];
            this._factories.set(o.componentType, o);
          }
        }
        return (
          (e.prototype.resolveComponentFactory = function(e) {
            var t = this._factories.get(e);
            if (
              (!t &&
                this._parent &&
                (t = this._parent.resolveComponentFactory(e)),
              !t)
            )
              throw pt(e);
            return new mt(t, this._ngModule);
          }),
          e
        );
      })(),
      mt = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            (r.factory = t),
            (r.ngModule = n),
            (r.selector = t.selector),
            (r.componentType = t.componentType),
            (r.ngContentSelectors = t.ngContentSelectors),
            (r.inputs = t.inputs),
            (r.outputs = t.outputs),
            r
          );
        }
        return (
          o(t, e),
          (t.prototype.create = function(e, t, n, r) {
            return this.factory.create(e, t, n, r || this.ngModule);
          }),
          t
        );
      })(ft),
      bt = (function() {
        return function() {};
      })(),
      _t = (function() {
        return function() {};
      })(),
      wt = (function() {
        function e(e) {
          this.nativeElement = e;
        }
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return Et(e);
          }),
          e
        );
      })(),
      Et = Qe,
      Ct = (function() {
        return function() {};
      })(),
      xt = (function() {
        return function() {};
      })(),
      Tt = (function(e) {
        return (
          (e[(e.Important = 1)] = "Important"),
          (e[(e.DashCase = 2)] = "DashCase"),
          e
        );
      })({}),
      St = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return kt();
          }),
          e
        );
      })(),
      kt = Qe,
      It = (function(e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.HTML = 1)] = "HTML"),
          (e[(e.STYLE = 2)] = "STYLE"),
          (e[(e.SCRIPT = 3)] = "SCRIPT"),
          (e[(e.URL = 4)] = "URL"),
          (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          e
        );
      })({}),
      Nt = (function() {
        return function() {};
      })(),
      At = new ((function() {
        return function(e) {
          (this.full = e),
            (this.major = e.split(".")[0]),
            (this.minor = e.split(".")[1]),
            (this.patch = e
              .split(".")
              .slice(2)
              .join("."));
        };
      })())("7.2.15"),
      Ot = !0,
      Dt = !1;
    function Rt() {
      return (Dt = !0), Ot;
    }
    var Pt = (function() {
        function e(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              "sanitization-inert"
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            var t = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(t),
              (this.inertBodyElement = this.inertDocument.createElement(
                "body"
              )),
              t.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector("svg")
              ? ((this.inertBodyElement.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector("svg img") &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        return (
          (e.prototype.getInertBodyElement_XHR = function(e) {
            e = "<body><remove></remove>" + e + "</body>";
            try {
              e = encodeURI(e);
            } catch (r) {
              return null;
            }
            var t = new XMLHttpRequest();
            (t.responseType = "document"),
              t.open("GET", "data:text/html;charset=utf-8," + e, !1),
              t.send(void 0);
            var n = t.response.body;
            return n.removeChild(n.firstChild), n;
          }),
          (e.prototype.getInertBodyElement_DOMParser = function(e) {
            e = "<body><remove></remove>" + e + "</body>";
            try {
              var t = new window.DOMParser().parseFromString(e, "text/html")
                .body;
              return t.removeChild(t.firstChild), t;
            } catch (n) {
              return null;
            }
          }),
          (e.prototype.getInertBodyElement_InertDocument = function(e) {
            var t = this.inertDocument.createElement("template");
            return "content" in t
              ? ((t.innerHTML = e), t)
              : ((this.inertBodyElement.innerHTML = e),
                this.defaultDoc.documentMode &&
                  this.stripCustomNsAttrs(this.inertBodyElement),
                this.inertBodyElement);
          }),
          (e.prototype.stripCustomNsAttrs = function(e) {
            for (var t = e.attributes, n = t.length - 1; 0 < n; n--) {
              var r = t.item(n).name;
              ("xmlns:ns1" !== r && 0 !== r.indexOf("ns1:")) ||
                e.removeAttribute(r);
            }
            for (var o = e.firstChild; o; )
              o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o),
                (o = o.nextSibling);
          }),
          e
        );
      })(),
      Mt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
      Vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function jt(e) {
      return (e = String(e)).match(Mt) || e.match(Vt)
        ? e
        : (Rt() &&
            console.warn(
              "WARNING: sanitizing unsafe URL value " +
                e +
                " (see http://g.co/ng/security#xss)"
            ),
          "unsafe:" + e);
    }
    function Ht(e) {
      var t,
        n,
        r = {};
      try {
        for (var o = u(e.split(",")), i = o.next(); !i.done; i = o.next())
          r[i.value] = !0;
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          i && !i.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return r;
    }
    function Ft() {
      for (var e, t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      var o = {};
      try {
        for (var i = u(n), s = i.next(); !s.done; s = i.next()) {
          var a = s.value;
          for (var c in a) a.hasOwnProperty(c) && (o[c] = !0);
        }
      } catch (l) {
        e = { error: l };
      } finally {
        try {
          s && !s.done && (t = i.return) && t.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return o;
    }
    var Lt,
      Bt = Ht("area,br,col,hr,img,wbr"),
      zt = Ht("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      Ut = Ht("rp,rt"),
      Zt = Ft(Ut, zt),
      Qt = Ft(
        Bt,
        Ft(
          zt,
          Ht(
            "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
          )
        ),
        Ft(
          Ut,
          Ht(
            "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
          )
        ),
        Zt
      ),
      qt = Ht("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
      Wt = Ht("srcset"),
      Gt = Ft(
        qt,
        Wt,
        Ht(
          "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
        )
      ),
      Kt = Ht("script,style,template"),
      Yt = (function() {
        function e() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        return (
          (e.prototype.sanitizeChildren = function(e) {
            for (var t = e.firstChild, n = !0; t; )
              if (
                (t.nodeType === Node.ELEMENT_NODE
                  ? (n = this.startElement(t))
                  : t.nodeType === Node.TEXT_NODE
                  ? this.chars(t.nodeValue)
                  : (this.sanitizedSomething = !0),
                n && t.firstChild)
              )
                t = t.firstChild;
              else
                for (; t; ) {
                  t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                  var r = this.checkClobberedElement(t, t.nextSibling);
                  if (r) {
                    t = r;
                    break;
                  }
                  t = this.checkClobberedElement(t, t.parentNode);
                }
            return this.buf.join("");
          }),
          (e.prototype.startElement = function(e) {
            var t,
              n = e.nodeName.toLowerCase();
            if (!Qt.hasOwnProperty(n))
              return (this.sanitizedSomething = !0), !Kt.hasOwnProperty(n);
            this.buf.push("<"), this.buf.push(n);
            for (var r = e.attributes, o = 0; o < r.length; o++) {
              var i = r.item(o),
                s = i.name,
                a = s.toLowerCase();
              if (Gt.hasOwnProperty(a)) {
                var u = i.value;
                qt[a] && (u = jt(u)),
                  Wt[a] &&
                    ((t = u),
                    (u = (t = String(t))
                      .split(",")
                      .map(function(e) {
                        return jt(e.trim());
                      })
                      .join(", "))),
                  this.buf.push(" ", s, '="', Xt(u), '"');
              } else this.sanitizedSomething = !0;
            }
            return this.buf.push(">"), !0;
          }),
          (e.prototype.endElement = function(e) {
            var t = e.nodeName.toLowerCase();
            Qt.hasOwnProperty(t) &&
              !Bt.hasOwnProperty(t) &&
              (this.buf.push("</"), this.buf.push(t), this.buf.push(">"));
          }),
          (e.prototype.chars = function(e) {
            this.buf.push(Xt(e));
          }),
          (e.prototype.checkClobberedElement = function(e, t) {
            if (
              t &&
              (e.compareDocumentPosition(t) &
                Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                Node.DOCUMENT_POSITION_CONTAINED_BY
            )
              throw new Error(
                "Failed to sanitize html because the element is clobbered: " +
                  e.outerHTML
              );
            return t;
          }),
          e
        );
      })(),
      Jt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      $t = /([^\#-~ |!])/g;
    function Xt(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(Jt, function(e) {
          return (
            "&#" +
            (1024 * (e.charCodeAt(0) - 55296) +
              (e.charCodeAt(1) - 56320) +
              65536) +
            ";"
          );
        })
        .replace($t, function(e) {
          return "&#" + e.charCodeAt(0) + ";";
        })
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    function en(e) {
      return "content" in e &&
        (function(e) {
          return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName;
        })(e)
        ? e.content
        : null;
    }
    var tn = (function(e) {
        function t(t) {
          void 0 === t && (t = !1);
          var n = e.call(this) || this;
          return (n.__isAsync = t), n;
        }
        return (
          o(t, e),
          (t.prototype.emit = function(t) {
            e.prototype.next.call(this, t);
          }),
          (t.prototype.subscribe = function(t, n, r) {
            var o,
              i = function(e) {
                return null;
              },
              s = function() {
                return null;
              };
            t && "object" == typeof t
              ? ((o = this.__isAsync
                  ? function(e) {
                      setTimeout(function() {
                        return t.next(e);
                      });
                    }
                  : function(e) {
                      t.next(e);
                    }),
                t.error &&
                  (i = this.__isAsync
                    ? function(e) {
                        setTimeout(function() {
                          return t.error(e);
                        });
                      }
                    : function(e) {
                        t.error(e);
                      }),
                t.complete &&
                  (s = this.__isAsync
                    ? function() {
                        setTimeout(function() {
                          return t.complete();
                        });
                      }
                    : function() {
                        t.complete();
                      }))
              : ((o = this.__isAsync
                  ? function(e) {
                      setTimeout(function() {
                        return t(e);
                      });
                    }
                  : function(e) {
                      t(e);
                    }),
                n &&
                  (i = this.__isAsync
                    ? function(e) {
                        setTimeout(function() {
                          return n(e);
                        });
                      }
                    : function(e) {
                        n(e);
                      }),
                r &&
                  (s = this.__isAsync
                    ? function() {
                        setTimeout(function() {
                          return r();
                        });
                      }
                    : function() {
                        r();
                      }));
            var a = e.prototype.subscribe.call(this, o, i, s);
            return t instanceof _ && t.add(a), a;
          }),
          t
        );
      })(V),
      nn = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return rn(e, wt);
          }),
          e
        );
      })(),
      rn = Qe,
      on = new RegExp(
        "^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$",
        "g"
      ),
      sn = /^url\(([^)]+)\)$/,
      an = "ngDebugContext",
      un = "ngOriginalError",
      cn = "ngErrorLogger";
    function ln(e) {
      return e[an];
    }
    function dn(e) {
      return e[un];
    }
    function fn(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      e.error.apply(e, l(t));
    }
    var pn = (function() {
      function e() {
        this._console = console;
      }
      return (
        (e.prototype.handleError = function(e) {
          var t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function(e) {
              return e[cn] || fn;
            })(e);
          r(this._console, "ERROR", e),
            t && r(this._console, "ORIGINAL ERROR", t),
            n && r(this._console, "ERROR CONTEXT", n);
        }),
        (e.prototype._findContext = function(e) {
          return e ? (ln(e) ? ln(e) : this._findContext(dn(e))) : null;
        }),
        (e.prototype._findOriginalError = function(e) {
          for (var t = dn(e); t && dn(t); ) t = dn(t);
          return t;
        }),
        e
      );
    })();
    function hn(e) {
      return !!e && "function" == typeof e.then;
    }
    var vn = new he("Application Initializer"),
      yn = (function() {
        function e(e) {
          var t = this;
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise(function(e, n) {
              (t.resolve = e), (t.reject = n);
            }));
        }
        return (
          (e.prototype.runInitializers = function() {
            var e = this;
            if (!this.initialized) {
              var t = [],
                n = function() {
                  (e.done = !0), e.resolve();
                };
              if (this.appInits)
                for (var r = 0; r < this.appInits.length; r++) {
                  var o = this.appInits[r]();
                  hn(o) && t.push(o);
                }
              Promise.all(t)
                .then(function() {
                  n();
                })
                .catch(function(t) {
                  e.reject(t);
                }),
                0 === t.length && n(),
                (this.initialized = !0);
            }
          }),
          e
        );
      })(),
      gn = new he("AppId");
    function mn() {
      return "" + bn() + bn() + bn();
    }
    function bn() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()));
    }
    var _n = new he("Platform Initializer"),
      wn = new he("Platform ID"),
      En = new he("appBootstrapListener"),
      Cn = (function() {
        function e() {}
        return (
          (e.prototype.log = function(e) {
            console.log(e);
          }),
          (e.prototype.warn = function(e) {
            console.warn(e);
          }),
          e
        );
      })();
    function xn() {
      throw new Error("Runtime compiler is not loaded");
    }
    var Tn,
      Sn,
      kn = xn,
      In = xn,
      Nn = xn,
      An = xn,
      On = (function() {
        function e() {
          (this.compileModuleSync = kn),
            (this.compileModuleAsync = In),
            (this.compileModuleAndAllComponentsSync = Nn),
            (this.compileModuleAndAllComponentsAsync = An);
        }
        return (
          (e.prototype.clearCache = function() {}),
          (e.prototype.clearCacheFor = function(e) {}),
          (e.prototype.getModuleId = function(e) {}),
          e
        );
      })(),
      Dn = (function() {
        return function() {};
      })();
    function Rn() {
      var e = be.wtf;
      return !(!e || !(Tn = e.trace) || ((Sn = Tn.events), 0));
    }
    var Pn = Rn();
    function Mn(e, t) {
      return null;
    }
    var Vn = Pn
        ? function(e, t) {
            return void 0 === t && (t = null), Sn.createScope(e, t);
          }
        : function(e, t) {
            return Mn;
          },
      jn = Pn
        ? function(e, t) {
            return Tn.leaveScope(e, t), t;
          }
        : function(e, t) {
            return t;
          },
      Hn = (function() {
        function e(e) {
          var t,
            n = e.enableLongStackTrace,
            r = void 0 !== n && n;
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new tn(!1)),
            (this.onMicrotaskEmpty = new tn(!1)),
            (this.onStable = new tn(!1)),
            (this.onError = new tn(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            r &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: "angular",
              properties: { isAngularZone: !0 },
              onInvokeTask: function(e, n, r, o, i, s) {
                try {
                  return zn(t), e.invokeTask(r, o, i, s);
                } finally {
                  Un(t);
                }
              },
              onInvoke: function(e, n, r, o, i, s, a) {
                try {
                  return zn(t), e.invoke(r, o, i, s, a);
                } finally {
                  Un(t);
                }
              },
              onHasTask: function(e, n, r, o) {
                e.hasTask(r, o),
                  n === r &&
                    ("microTask" == o.change
                      ? ((t.hasPendingMicrotasks = o.microTask), Bn(t))
                      : "macroTask" == o.change &&
                        (t.hasPendingMacrotasks = o.macroTask));
              },
              onHandleError: function(e, n, r, o) {
                return (
                  e.handleError(r, o),
                  t.runOutsideAngular(function() {
                    return t.onError.emit(o);
                  }),
                  !1
                );
              }
            }));
        }
        return (
          (e.isInAngularZone = function() {
            return !0 === Zone.current.get("isAngularZone");
          }),
          (e.assertInAngularZone = function() {
            if (!e.isInAngularZone())
              throw new Error("Expected to be in Angular Zone, but it is not!");
          }),
          (e.assertNotInAngularZone = function() {
            if (e.isInAngularZone())
              throw new Error("Expected to not be in Angular Zone, but it is!");
          }),
          (e.prototype.run = function(e, t, n) {
            return this._inner.run(e, t, n);
          }),
          (e.prototype.runTask = function(e, t, n, r) {
            var o = this._inner,
              i = o.scheduleEventTask("NgZoneEvent: " + r, e, Ln, Fn, Fn);
            try {
              return o.runTask(i, t, n);
            } finally {
              o.cancelTask(i);
            }
          }),
          (e.prototype.runGuarded = function(e, t, n) {
            return this._inner.runGuarded(e, t, n);
          }),
          (e.prototype.runOutsideAngular = function(e) {
            return this._outer.run(e);
          }),
          e
        );
      })();
    function Fn() {}
    var Ln = {};
    function Bn(e) {
      if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
        try {
          e._nesting++, e.onMicrotaskEmpty.emit(null);
        } finally {
          if ((e._nesting--, !e.hasPendingMicrotasks))
            try {
              e.runOutsideAngular(function() {
                return e.onStable.emit(null);
              });
            } finally {
              e.isStable = !0;
            }
        }
    }
    function zn(e) {
      e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
    }
    function Un(e) {
      e._nesting--, Bn(e);
    }
    var Zn,
      Qn = (function() {
        function e() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new tn()),
            (this.onMicrotaskEmpty = new tn()),
            (this.onStable = new tn()),
            (this.onError = new tn());
        }
        return (
          (e.prototype.run = function(e) {
            return e();
          }),
          (e.prototype.runGuarded = function(e) {
            return e();
          }),
          (e.prototype.runOutsideAngular = function(e) {
            return e();
          }),
          (e.prototype.runTask = function(e) {
            return e();
          }),
          e
        );
      })(),
      qn = (function() {
        function e(e) {
          var t = this;
          (this._ngZone = e),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            e.run(function() {
              t.taskTrackingZone =
                "undefined" == typeof Zone
                  ? null
                  : Zone.current.get("TaskTrackingZone");
            });
        }
        return (
          (e.prototype._watchAngularEvents = function() {
            var e = this;
            this._ngZone.onUnstable.subscribe({
              next: function() {
                (e._didWork = !0), (e._isZoneStable = !1);
              }
            }),
              this._ngZone.runOutsideAngular(function() {
                e._ngZone.onStable.subscribe({
                  next: function() {
                    Hn.assertNotInAngularZone(),
                      Ce(function() {
                        (e._isZoneStable = !0), e._runCallbacksIfReady();
                      });
                  }
                });
              });
          }),
          (e.prototype.increasePendingRequestCount = function() {
            return (
              (this._pendingCount += 1),
              (this._didWork = !0),
              this._pendingCount
            );
          }),
          (e.prototype.decreasePendingRequestCount = function() {
            if (((this._pendingCount -= 1), this._pendingCount < 0))
              throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount;
          }),
          (e.prototype.isStable = function() {
            return (
              this._isZoneStable &&
              0 === this._pendingCount &&
              !this._ngZone.hasPendingMacrotasks
            );
          }),
          (e.prototype._runCallbacksIfReady = function() {
            var e = this;
            if (this.isStable())
              Ce(function() {
                for (; 0 !== e._callbacks.length; ) {
                  var t = e._callbacks.pop();
                  clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                }
                e._didWork = !1;
              });
            else {
              var t = this.getPendingTasks();
              (this._callbacks = this._callbacks.filter(function(e) {
                return (
                  !e.updateCb ||
                  !e.updateCb(t) ||
                  (clearTimeout(e.timeoutId), !1)
                );
              })),
                (this._didWork = !0);
            }
          }),
          (e.prototype.getPendingTasks = function() {
            return this.taskTrackingZone
              ? this.taskTrackingZone.macroTasks.map(function(e) {
                  return {
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data
                  };
                })
              : [];
          }),
          (e.prototype.addCallback = function(e, t, n) {
            var r = this,
              o = -1;
            t &&
              t > 0 &&
              (o = setTimeout(function() {
                (r._callbacks = r._callbacks.filter(function(e) {
                  return e.timeoutId !== o;
                })),
                  e(r._didWork, r.getPendingTasks());
              }, t)),
              this._callbacks.push({ doneCb: e, timeoutId: o, updateCb: n });
          }),
          (e.prototype.whenStable = function(e, t, n) {
            if (n && !this.taskTrackingZone)
              throw new Error(
                'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
              );
            this.addCallback(e, t, n), this._runCallbacksIfReady();
          }),
          (e.prototype.getPendingRequestCount = function() {
            return this._pendingCount;
          }),
          (e.prototype.findProviders = function(e, t, n) {
            return [];
          }),
          e
        );
      })(),
      Wn = (function() {
        function e() {
          (this._applications = new Map()), Gn.addToWindow(this);
        }
        return (
          (e.prototype.registerApplication = function(e, t) {
            this._applications.set(e, t);
          }),
          (e.prototype.unregisterApplication = function(e) {
            this._applications.delete(e);
          }),
          (e.prototype.unregisterAllApplications = function() {
            this._applications.clear();
          }),
          (e.prototype.getTestability = function(e) {
            return this._applications.get(e) || null;
          }),
          (e.prototype.getAllTestabilities = function() {
            return Array.from(this._applications.values());
          }),
          (e.prototype.getAllRootElements = function() {
            return Array.from(this._applications.keys());
          }),
          (e.prototype.findTestabilityInTree = function(e, t) {
            return (
              void 0 === t && (t = !0), Gn.findTestabilityInTree(this, e, t)
            );
          }),
          s([a("design:paramtypes", [])], e)
        );
      })(),
      Gn = new ((function() {
        function e() {}
        return (
          (e.prototype.addToWindow = function(e) {}),
          (e.prototype.findTestabilityInTree = function(e, t, n) {
            return null;
          }),
          e
        );
      })())(),
      Kn = new he("AllowMultipleToken"),
      Yn = (function() {
        return function(e, t) {
          (this.name = e), (this.token = t);
        };
      })();
    function Jn(e, t, n) {
      void 0 === n && (n = []);
      var r = "Platform: " + t,
        o = new he(r);
      return function(t) {
        void 0 === t && (t = []);
        var i = $n();
        if (!i || i.injector.get(Kn, !1))
          if (e) e(n.concat(t).concat({ provide: o, useValue: !0 }));
          else {
            var s = n.concat(t).concat({ provide: o, useValue: !0 });
            !(function(e) {
              if (Zn && !Zn.destroyed && !Zn.injector.get(Kn, !1))
                throw new Error(
                  "There can be only one platform. Destroy the previous one to create a new one."
                );
              Zn = e.get(Xn);
              var t = e.get(_n, null);
              t &&
                t.forEach(function(e) {
                  return e();
                });
            })(Ye.create({ providers: s, name: r }));
          }
        return (function(e) {
          var t = $n();
          if (!t) throw new Error("No platform exists!");
          if (!t.injector.get(e, null))
            throw new Error(
              "A platform with a different configuration has been created. Please destroy it first."
            );
          return t;
        })(o);
      };
    }
    function $n() {
      return Zn && !Zn.destroyed ? Zn : null;
    }
    var Xn = (function() {
      function e(e) {
        (this._injector = e),
          (this._modules = []),
          (this._destroyListeners = []),
          (this._destroyed = !1);
      }
      return (
        (e.prototype.bootstrapModuleFactory = function(e, t) {
          var n,
            r = this,
            o =
              "noop" === (n = t ? t.ngZone : void 0)
                ? new Qn()
                : ("zone.js" === n ? void 0 : n) ||
                  new Hn({ enableLongStackTrace: Rt() }),
            i = [{ provide: Hn, useValue: o }];
          return o.run(function() {
            var t = Ye.create({
                providers: i,
                parent: r.injector,
                name: e.moduleType.name
              }),
              n = e.create(t),
              s = n.injector.get(pn, null);
            if (!s)
              throw new Error(
                "No ErrorHandler. Is platform module (BrowserModule) included?"
              );
            return (
              n.onDestroy(function() {
                return nr(r._modules, n);
              }),
              o.runOutsideAngular(function() {
                return o.onError.subscribe({
                  next: function(e) {
                    s.handleError(e);
                  }
                });
              }),
              (function(e, t, o) {
                try {
                  var i =
                    ((s = n.injector.get(yn)).runInitializers(),
                    s.donePromise.then(function() {
                      return r._moduleDoBootstrap(n), n;
                    }));
                  return hn(i)
                    ? i.catch(function(n) {
                        throw (t.runOutsideAngular(function() {
                          return e.handleError(n);
                        }),
                        n);
                      })
                    : i;
                } catch (a) {
                  throw (t.runOutsideAngular(function() {
                    return e.handleError(a);
                  }),
                  a);
                }
                var s;
              })(s, o)
            );
          });
        }),
        (e.prototype.bootstrapModule = function(e, t) {
          var n = this;
          void 0 === t && (t = []);
          var r = er({}, t);
          return (function(e, t, n) {
            return e
              .get(Dn)
              .createCompiler([t])
              .compileModuleAsync(n);
          })(this.injector, r, e).then(function(e) {
            return n.bootstrapModuleFactory(e, r);
          });
        }),
        (e.prototype._moduleDoBootstrap = function(e) {
          var t = e.injector.get(tr);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach(function(e) {
              return t.bootstrap(e);
            });
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                "The module " +
                  Te(e.instance.constructor) +
                  ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }),
        (e.prototype.onDestroy = function(e) {
          this._destroyListeners.push(e);
        }),
        Object.defineProperty(e.prototype, "injector", {
          get: function() {
            return this._injector;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.destroy = function() {
          if (this._destroyed)
            throw new Error("The platform has already been destroyed!");
          this._modules.slice().forEach(function(e) {
            return e.destroy();
          }),
            this._destroyListeners.forEach(function(e) {
              return e();
            }),
            (this._destroyed = !0);
        }),
        Object.defineProperty(e.prototype, "destroyed", {
          get: function() {
            return this._destroyed;
          },
          enumerable: !0,
          configurable: !0
        }),
        e
      );
    })();
    function er(e, t) {
      return Array.isArray(t) ? t.reduce(er, e) : i({}, e, t);
    }
    var tr = (function() {
      function e(e, t, n, r, o, i) {
        var s = this;
        (this._zone = e),
          (this._console = t),
          (this._injector = n),
          (this._exceptionHandler = r),
          (this._componentFactoryResolver = o),
          (this._initStatus = i),
          (this._bootstrapListeners = []),
          (this._views = []),
          (this._runningTick = !1),
          (this._enforceNoNewChanges = !1),
          (this._stable = !0),
          (this.componentTypes = []),
          (this.components = []),
          (this._enforceNoNewChanges = Rt()),
          this._zone.onMicrotaskEmpty.subscribe({
            next: function() {
              s._zone.run(function() {
                s.tick();
              });
            }
          });
        var a = new A(function(e) {
            (s._stable =
              s._zone.isStable &&
              !s._zone.hasPendingMacrotasks &&
              !s._zone.hasPendingMicrotasks),
              s._zone.runOutsideAngular(function() {
                e.next(s._stable), e.complete();
              });
          }),
          u = new A(function(e) {
            var t;
            s._zone.runOutsideAngular(function() {
              t = s._zone.onStable.subscribe(function() {
                Hn.assertNotInAngularZone(),
                  Ce(function() {
                    s._stable ||
                      s._zone.hasPendingMacrotasks ||
                      s._zone.hasPendingMicrotasks ||
                      ((s._stable = !0), e.next(!0));
                  });
              });
            });
            var n = s._zone.onUnstable.subscribe(function() {
              Hn.assertInAngularZone(),
                s._stable &&
                  ((s._stable = !1),
                  s._zone.runOutsideAngular(function() {
                    e.next(!1);
                  }));
            });
            return function() {
              t.unsubscribe(), n.unsubscribe();
            };
          });
        this.isStable = ne(
          a,
          u.pipe(function(e) {
            return re()(
              ((t = ce),
              function(e) {
                var n;
                n =
                  "function" == typeof t
                    ? t
                    : function() {
                        return t;
                      };
                var r = Object.create(e, ae);
                return (r.source = e), (r.subjectFactory = n), r;
              })(e)
            );
            var t;
          })
        );
      }
      var t;
      return (
        (t = e),
        (e.prototype.bootstrap = function(e, t) {
          var n,
            r = this;
          if (!this._initStatus.done)
            throw new Error(
              "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
            );
          (n =
            e instanceof ft
              ? e
              : this._componentFactoryResolver.resolveComponentFactory(e)),
            this.componentTypes.push(n.componentType);
          var o = n instanceof mt ? null : this._injector.get(bt),
            i = n.create(Ye.NULL, [], t || n.selector, o);
          i.onDestroy(function() {
            r._unloadComponent(i);
          });
          var s = i.injector.get(qn, null);
          return (
            s &&
              i.injector
                .get(Wn)
                .registerApplication(i.location.nativeElement, s),
            this._loadComponent(i),
            Rt() &&
              this._console.log(
                "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
              ),
            i
          );
        }),
        (e.prototype.tick = function() {
          var e = this;
          if (this._runningTick)
            throw new Error("ApplicationRef.tick is called recursively");
          var n = t._tickScope();
          try {
            (this._runningTick = !0),
              this._views.forEach(function(e) {
                return e.detectChanges();
              }),
              this._enforceNoNewChanges &&
                this._views.forEach(function(e) {
                  return e.checkNoChanges();
                });
          } catch (r) {
            this._zone.runOutsideAngular(function() {
              return e._exceptionHandler.handleError(r);
            });
          } finally {
            (this._runningTick = !1), jn(n);
          }
        }),
        (e.prototype.attachView = function(e) {
          var t = e;
          this._views.push(t), t.attachToAppRef(this);
        }),
        (e.prototype.detachView = function(e) {
          var t = e;
          nr(this._views, t), t.detachFromAppRef();
        }),
        (e.prototype._loadComponent = function(e) {
          this.attachView(e.hostView),
            this.tick(),
            this.components.push(e),
            this._injector
              .get(En, [])
              .concat(this._bootstrapListeners)
              .forEach(function(t) {
                return t(e);
              });
        }),
        (e.prototype._unloadComponent = function(e) {
          this.detachView(e.hostView), nr(this.components, e);
        }),
        (e.prototype.ngOnDestroy = function() {
          this._views.slice().forEach(function(e) {
            return e.destroy();
          });
        }),
        Object.defineProperty(e.prototype, "viewCount", {
          get: function() {
            return this._views.length;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e._tickScope = Vn("ApplicationRef#tick()")),
        e
      );
    })();
    function nr(e, t) {
      var n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    var rr = (function() {
        function e() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new tn()),
            (this.length = 0);
        }
        return (
          (e.prototype.map = function(e) {
            return this._results.map(e);
          }),
          (e.prototype.filter = function(e) {
            return this._results.filter(e);
          }),
          (e.prototype.find = function(e) {
            return this._results.find(e);
          }),
          (e.prototype.reduce = function(e, t) {
            return this._results.reduce(e, t);
          }),
          (e.prototype.forEach = function(e) {
            this._results.forEach(e);
          }),
          (e.prototype.some = function(e) {
            return this._results.some(e);
          }),
          (e.prototype.toArray = function() {
            return this._results.slice();
          }),
          (e.prototype[Ee()] = function() {
            return this._results[Ee()]();
          }),
          (e.prototype.toString = function() {
            return this._results.toString();
          }),
          (e.prototype.reset = function(e) {
            (this._results = (function e(t) {
              return t.reduce(function(t, n) {
                var r = Array.isArray(n) ? e(n) : n;
                return t.concat(r);
              }, []);
            })(e)),
              (this.dirty = !1),
              (this.length = this._results.length),
              (this.last = this._results[this.length - 1]),
              (this.first = this._results[0]);
          }),
          (e.prototype.notifyOnChanges = function() {
            this.changes.emit(this);
          }),
          (e.prototype.setDirty = function() {
            this.dirty = !0;
          }),
          (e.prototype.destroy = function() {
            this.changes.complete(), this.changes.unsubscribe();
          }),
          e
        );
      })(),
      or = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return ir(e, wt);
          }),
          e
        );
      })(),
      ir = Qe,
      sr = (function() {
        function e() {}
        return (
          (e.__NG_ELEMENT_ID__ = function() {
            return ar();
          }),
          e
        );
      })(),
      ar = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      },
      ur = (function() {
        return function(e, t) {
          (this.name = e), (this.callback = t);
        };
      })(),
      cr = (function() {
        function e(e, t, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = e),
            t && t instanceof lr && t.addChild(this);
        }
        return (
          Object.defineProperty(e.prototype, "injector", {
            get: function() {
              return this._debugContext.injector;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "componentInstance", {
            get: function() {
              return this._debugContext.component;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "context", {
            get: function() {
              return this._debugContext.context;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "references", {
            get: function() {
              return this._debugContext.references;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "providerTokens", {
            get: function() {
              return this._debugContext.providerTokens;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      lr = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t, n, r) || this;
          return (
            (o.properties = {}),
            (o.attributes = {}),
            (o.classes = {}),
            (o.styles = {}),
            (o.childNodes = []),
            (o.nativeElement = t),
            o
          );
        }
        return (
          o(t, e),
          (t.prototype.addChild = function(e) {
            e && (this.childNodes.push(e), (e.parent = this));
          }),
          (t.prototype.removeChild = function(e) {
            var t = this.childNodes.indexOf(e);
            -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
          }),
          (t.prototype.insertChildrenAfter = function(e, t) {
            var n,
              r = this,
              o = this.childNodes.indexOf(e);
            -1 !== o &&
              ((n = this.childNodes).splice.apply(n, l([o + 1, 0], t)),
              t.forEach(function(t) {
                t.parent && t.parent.removeChild(t), (e.parent = r);
              }));
          }),
          (t.prototype.insertBefore = function(e, t) {
            var n = this.childNodes.indexOf(e);
            -1 === n
              ? this.addChild(t)
              : (t.parent && t.parent.removeChild(t),
                (t.parent = this),
                this.childNodes.splice(n, 0, t));
          }),
          (t.prototype.query = function(e) {
            return this.queryAll(e)[0] || null;
          }),
          (t.prototype.queryAll = function(e) {
            var t = [];
            return (
              (function e(t, n, r) {
                t.childNodes.forEach(function(t) {
                  t instanceof lr && (n(t) && r.push(t), e(t, n, r));
                });
              })(this, e, t),
              t
            );
          }),
          (t.prototype.queryAllNodes = function(e) {
            var t = [];
            return (
              (function e(t, n, r) {
                t instanceof lr &&
                  t.childNodes.forEach(function(t) {
                    n(t) && r.push(t), t instanceof lr && e(t, n, r);
                  });
              })(this, e, t),
              t
            );
          }),
          Object.defineProperty(t.prototype, "children", {
            get: function() {
              return this.childNodes.filter(function(e) {
                return e instanceof t;
              });
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.triggerEventHandler = function(e, t) {
            this.listeners.forEach(function(n) {
              n.name == e && n.callback(t);
            });
          }),
          t
        );
      })(cr),
      dr = new Map(),
      fr = function(e) {
        return dr.get(e) || null;
      };
    function pr(e) {
      dr.set(e.nativeNode, e);
    }
    var hr = (function() {
        function e() {}
        return (
          (e.prototype.supports = function(e) {
            return Ue(e);
          }),
          (e.prototype.create = function(e) {
            return new yr(e);
          }),
          e
        );
      })(),
      vr = function(e, t) {
        return t;
      },
      yr = (function() {
        function e(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || vr);
        }
        return (
          (e.prototype.forEachItem = function(e) {
            var t;
            for (t = this._itHead; null !== t; t = t._next) e(t);
          }),
          (e.prototype.forEachOperation = function(e) {
            for (
              var t = this._itHead, n = this._removalsHead, r = 0, o = null;
              t || n;

            ) {
              var i = !n || (t && t.currentIndex < _r(n, r, o)) ? t : n,
                s = _r(i, r, o),
                a = i.currentIndex;
              if (i === n) r--, (n = n._nextRemoved);
              else if (((t = t._next), null == i.previousIndex)) r++;
              else {
                o || (o = []);
                var u = s - r,
                  c = a - r;
                if (u != c) {
                  for (var l = 0; l < u; l++) {
                    var d = l < o.length ? o[l] : (o[l] = 0),
                      f = d + l;
                    c <= f && f < u && (o[l] = d + 1);
                  }
                  o[i.previousIndex] = c - u;
                }
              }
              s !== a && e(i, s, a);
            }
          }),
          (e.prototype.forEachPreviousItem = function(e) {
            var t;
            for (t = this._previousItHead; null !== t; t = t._nextPrevious)
              e(t);
          }),
          (e.prototype.forEachAddedItem = function(e) {
            var t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
          }),
          (e.prototype.forEachMovedItem = function(e) {
            var t;
            for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
          }),
          (e.prototype.forEachRemovedItem = function(e) {
            var t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
          }),
          (e.prototype.forEachIdentityChange = function(e) {
            var t;
            for (
              t = this._identityChangesHead;
              null !== t;
              t = t._nextIdentityChange
            )
              e(t);
          }),
          (e.prototype.diff = function(e) {
            if ((null == e && (e = []), !Ue(e)))
              throw new Error(
                "Error trying to diff '" +
                  Te(e) +
                  "'. Only arrays and iterables are allowed"
              );
            return this.check(e) ? this : null;
          }),
          (e.prototype.onDestroy = function() {}),
          (e.prototype.check = function(e) {
            var t = this;
            this._reset();
            var n,
              r,
              o,
              i = this._itHead,
              s = !1;
            if (Array.isArray(e)) {
              this.length = e.length;
              for (var a = 0; a < this.length; a++)
                (o = this._trackByFn(a, (r = e[a]))),
                  null !== i && xe(i.trackById, o)
                    ? (s && (i = this._verifyReinsertion(i, r, o, a)),
                      xe(i.item, r) || this._addIdentityChange(i, r))
                    : ((i = this._mismatch(i, r, o, a)), (s = !0)),
                  (i = i._next);
            } else
              (n = 0),
                (function(e, t) {
                  if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++) t(e[n]);
                  else
                    for (var r = e[Ee()](), o = void 0; !(o = r.next()).done; )
                      t(o.value);
                })(e, function(e) {
                  (o = t._trackByFn(n, e)),
                    null !== i && xe(i.trackById, o)
                      ? (s && (i = t._verifyReinsertion(i, e, o, n)),
                        xe(i.item, e) || t._addIdentityChange(i, e))
                      : ((i = t._mismatch(i, e, o, n)), (s = !0)),
                    (i = i._next),
                    n++;
                }),
                (this.length = n);
            return this._truncate(i), (this.collection = e), this.isDirty;
          }),
          Object.defineProperty(e.prototype, "isDirty", {
            get: function() {
              return (
                null !== this._additionsHead ||
                null !== this._movesHead ||
                null !== this._removalsHead ||
                null !== this._identityChangesHead
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype._reset = function() {
            if (this.isDirty) {
              var e = void 0,
                t = void 0;
              for (
                e = this._previousItHead = this._itHead;
                null !== e;
                e = e._next
              )
                e._nextPrevious = e._next;
              for (e = this._additionsHead; null !== e; e = e._nextAdded)
                e.previousIndex = e.currentIndex;
              for (
                this._additionsHead = this._additionsTail = null,
                  e = this._movesHead;
                null !== e;
                e = t
              )
                (e.previousIndex = e.currentIndex), (t = e._nextMoved);
              (this._movesHead = this._movesTail = null),
                (this._removalsHead = this._removalsTail = null),
                (this._identityChangesHead = this._identityChangesTail = null);
            }
          }),
          (e.prototype._mismatch = function(e, t, n, r) {
            var o;
            return (
              null === e
                ? (o = this._itTail)
                : ((o = e._prev), this._remove(e)),
              null !==
              (e =
                null === this._linkedRecords
                  ? null
                  : this._linkedRecords.get(n, r))
                ? (xe(e.item, t) || this._addIdentityChange(e, t),
                  this._moveAfter(e, o, r))
                : null !==
                  (e =
                    null === this._unlinkedRecords
                      ? null
                      : this._unlinkedRecords.get(n, null))
                ? (xe(e.item, t) || this._addIdentityChange(e, t),
                  this._reinsertAfter(e, o, r))
                : (e = this._addAfter(new gr(t, n), o, r)),
              e
            );
          }),
          (e.prototype._verifyReinsertion = function(e, t, n, r) {
            var o =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null);
            return (
              null !== o
                ? (e = this._reinsertAfter(o, e._prev, r))
                : e.currentIndex != r &&
                  ((e.currentIndex = r), this._addToMoves(e, r)),
              e
            );
          }),
          (e.prototype._truncate = function(e) {
            for (; null !== e; ) {
              var t = e._next;
              this._addToRemovals(this._unlink(e)), (e = t);
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
              null !== this._additionsTail &&
                (this._additionsTail._nextAdded = null),
              null !== this._movesTail && (this._movesTail._nextMoved = null),
              null !== this._itTail && (this._itTail._next = null),
              null !== this._removalsTail &&
                (this._removalsTail._nextRemoved = null),
              null !== this._identityChangesTail &&
                (this._identityChangesTail._nextIdentityChange = null);
          }),
          (e.prototype._reinsertAfter = function(e, t, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
            var r = e._prevRemoved,
              o = e._nextRemoved;
            return (
              null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
              null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
              this._insertAfter(e, t, n),
              this._addToMoves(e, n),
              e
            );
          }),
          (e.prototype._moveAfter = function(e, t, n) {
            return (
              this._unlink(e),
              this._insertAfter(e, t, n),
              this._addToMoves(e, n),
              e
            );
          }),
          (e.prototype._addAfter = function(e, t, n) {
            return (
              this._insertAfter(e, t, n),
              (this._additionsTail =
                null === this._additionsTail
                  ? (this._additionsHead = e)
                  : (this._additionsTail._nextAdded = e)),
              e
            );
          }),
          (e.prototype._insertAfter = function(e, t, n) {
            var r = null === t ? this._itHead : t._next;
            return (
              (e._next = r),
              (e._prev = t),
              null === r ? (this._itTail = e) : (r._prev = e),
              null === t ? (this._itHead = e) : (t._next = e),
              null === this._linkedRecords && (this._linkedRecords = new br()),
              this._linkedRecords.put(e),
              (e.currentIndex = n),
              e
            );
          }),
          (e.prototype._remove = function(e) {
            return this._addToRemovals(this._unlink(e));
          }),
          (e.prototype._unlink = function(e) {
            null !== this._linkedRecords && this._linkedRecords.remove(e);
            var t = e._prev,
              n = e._next;
            return (
              null === t ? (this._itHead = n) : (t._next = n),
              null === n ? (this._itTail = t) : (n._prev = t),
              e
            );
          }),
          (e.prototype._addToMoves = function(e, t) {
            return e.previousIndex === t
              ? e
              : ((this._movesTail =
                  null === this._movesTail
                    ? (this._movesHead = e)
                    : (this._movesTail._nextMoved = e)),
                e);
          }),
          (e.prototype._addToRemovals = function(e) {
            return (
              null === this._unlinkedRecords &&
                (this._unlinkedRecords = new br()),
              this._unlinkedRecords.put(e),
              (e.currentIndex = null),
              (e._nextRemoved = null),
              null === this._removalsTail
                ? ((this._removalsTail = this._removalsHead = e),
                  (e._prevRemoved = null))
                : ((e._prevRemoved = this._removalsTail),
                  (this._removalsTail = this._removalsTail._nextRemoved = e)),
              e
            );
          }),
          (e.prototype._addIdentityChange = function(e, t) {
            return (
              (e.item = t),
              (this._identityChangesTail =
                null === this._identityChangesTail
                  ? (this._identityChangesHead = e)
                  : (this._identityChangesTail._nextIdentityChange = e)),
              e
            );
          }),
          e
        );
      })(),
      gr = (function() {
        return function(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        };
      })(),
      mr = (function() {
        function e() {
          (this._head = null), (this._tail = null);
        }
        return (
          (e.prototype.add = function(e) {
            null === this._head
              ? ((this._head = this._tail = e),
                (e._nextDup = null),
                (e._prevDup = null))
              : ((this._tail._nextDup = e),
                (e._prevDup = this._tail),
                (e._nextDup = null),
                (this._tail = e));
          }),
          (e.prototype.get = function(e, t) {
            var n;
            for (n = this._head; null !== n; n = n._nextDup)
              if ((null === t || t <= n.currentIndex) && xe(n.trackById, e))
                return n;
            return null;
          }),
          (e.prototype.remove = function(e) {
            var t = e._prevDup,
              n = e._nextDup;
            return (
              null === t ? (this._head = n) : (t._nextDup = n),
              null === n ? (this._tail = t) : (n._prevDup = t),
              null === this._head
            );
          }),
          e
        );
      })(),
      br = (function() {
        function e() {
          this.map = new Map();
        }
        return (
          (e.prototype.put = function(e) {
            var t = e.trackById,
              n = this.map.get(t);
            n || ((n = new mr()), this.map.set(t, n)), n.add(e);
          }),
          (e.prototype.get = function(e, t) {
            var n = this.map.get(e);
            return n ? n.get(e, t) : null;
          }),
          (e.prototype.remove = function(e) {
            var t = e.trackById;
            return this.map.get(t).remove(e) && this.map.delete(t), e;
          }),
          Object.defineProperty(e.prototype, "isEmpty", {
            get: function() {
              return 0 === this.map.size;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.clear = function() {
            this.map.clear();
          }),
          e
        );
      })();
    function _r(e, t, n) {
      var r = e.previousIndex;
      if (null === r) return r;
      var o = 0;
      return n && r < n.length && (o = n[r]), r + t + o;
    }
    var wr = (function() {
        function e() {}
        return (
          (e.prototype.supports = function(e) {
            return e instanceof Map || Ze(e);
          }),
          (e.prototype.create = function() {
            return new Er();
          }),
          e
        );
      })(),
      Er = (function() {
        function e() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        return (
          Object.defineProperty(e.prototype, "isDirty", {
            get: function() {
              return (
                null !== this._additionsHead ||
                null !== this._changesHead ||
                null !== this._removalsHead
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.forEachItem = function(e) {
            var t;
            for (t = this._mapHead; null !== t; t = t._next) e(t);
          }),
          (e.prototype.forEachPreviousItem = function(e) {
            var t;
            for (t = this._previousMapHead; null !== t; t = t._nextPrevious)
              e(t);
          }),
          (e.prototype.forEachChangedItem = function(e) {
            var t;
            for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
          }),
          (e.prototype.forEachAddedItem = function(e) {
            var t;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
          }),
          (e.prototype.forEachRemovedItem = function(e) {
            var t;
            for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
          }),
          (e.prototype.diff = function(e) {
            if (e) {
              if (!(e instanceof Map || Ze(e)))
                throw new Error(
                  "Error trying to diff '" +
                    Te(e) +
                    "'. Only maps and objects are allowed"
                );
            } else e = new Map();
            return this.check(e) ? this : null;
          }),
          (e.prototype.onDestroy = function() {}),
          (e.prototype.check = function(e) {
            var t = this;
            this._reset();
            var n = this._mapHead;
            if (
              ((this._appendAfter = null),
              this._forEach(e, function(e, r) {
                if (n && n.key === r)
                  t._maybeAddToChanges(n, e),
                    (t._appendAfter = n),
                    (n = n._next);
                else {
                  var o = t._getOrCreateRecordForKey(r, e);
                  n = t._insertBeforeOrAppend(n, o);
                }
              }),
              n)
            ) {
              n._prev && (n._prev._next = null), (this._removalsHead = n);
              for (var r = n; null !== r; r = r._nextRemoved)
                r === this._mapHead && (this._mapHead = null),
                  this._records.delete(r.key),
                  (r._nextRemoved = r._next),
                  (r.previousValue = r.currentValue),
                  (r.currentValue = null),
                  (r._prev = null),
                  (r._next = null);
            }
            return (
              this._changesTail && (this._changesTail._nextChanged = null),
              this._additionsTail && (this._additionsTail._nextAdded = null),
              this.isDirty
            );
          }),
          (e.prototype._insertBeforeOrAppend = function(e, t) {
            if (e) {
              var n = e._prev;
              return (
                (t._next = e),
                (t._prev = n),
                (e._prev = t),
                n && (n._next = t),
                e === this._mapHead && (this._mapHead = t),
                (this._appendAfter = e),
                e
              );
            }
            return (
              this._appendAfter
                ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
                : (this._mapHead = t),
              (this._appendAfter = t),
              null
            );
          }),
          (e.prototype._getOrCreateRecordForKey = function(e, t) {
            if (this._records.has(e)) {
              var n = this._records.get(e);
              this._maybeAddToChanges(n, t);
              var r = n._prev,
                o = n._next;
              return (
                r && (r._next = o),
                o && (o._prev = r),
                (n._next = null),
                (n._prev = null),
                n
              );
            }
            var i = new Cr(e);
            return (
              this._records.set(e, i),
              (i.currentValue = t),
              this._addToAdditions(i),
              i
            );
          }),
          (e.prototype._reset = function() {
            if (this.isDirty) {
              var e = void 0;
              for (
                this._previousMapHead = this._mapHead,
                  e = this._previousMapHead;
                null !== e;
                e = e._next
              )
                e._nextPrevious = e._next;
              for (e = this._changesHead; null !== e; e = e._nextChanged)
                e.previousValue = e.currentValue;
              for (e = this._additionsHead; null != e; e = e._nextAdded)
                e.previousValue = e.currentValue;
              (this._changesHead = this._changesTail = null),
                (this._additionsHead = this._additionsTail = null),
                (this._removalsHead = null);
            }
          }),
          (e.prototype._maybeAddToChanges = function(e, t) {
            xe(t, e.currentValue) ||
              ((e.previousValue = e.currentValue),
              (e.currentValue = t),
              this._addToChanges(e));
          }),
          (e.prototype._addToAdditions = function(e) {
            null === this._additionsHead
              ? (this._additionsHead = this._additionsTail = e)
              : ((this._additionsTail._nextAdded = e),
                (this._additionsTail = e));
          }),
          (e.prototype._addToChanges = function(e) {
            null === this._changesHead
              ? (this._changesHead = this._changesTail = e)
              : ((this._changesTail._nextChanged = e), (this._changesTail = e));
          }),
          (e.prototype._forEach = function(e, t) {
            e instanceof Map
              ? e.forEach(t)
              : Object.keys(e).forEach(function(n) {
                  return t(e[n], n);
                });
          }),
          e
        );
      })(),
      Cr = (function() {
        return function(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        };
      })(),
      xr = (function() {
        function e(e) {
          this.factories = e;
        }
        return (
          (e.create = function(t, n) {
            if (null != n) {
              var r = n.factories.slice();
              t = t.concat(r);
            }
            return new e(t);
          }),
          (e.extend = function(t) {
            return {
              provide: e,
              useFactory: function(n) {
                if (!n)
                  throw new Error(
                    "Cannot extend IterableDiffers without a parent injector"
                  );
                return e.create(t, n);
              },
              deps: [[e, new Pe(), new De()]]
            };
          }),
          (e.prototype.find = function(e) {
            var t,
              n = this.factories.find(function(t) {
                return t.supports(e);
              });
            if (null != n) return n;
            throw new Error(
              "Cannot find a differ supporting object '" +
                e +
                "' of type '" +
                ((t = e).name || typeof t) +
                "'"
            );
          }),
          (e.ngInjectableDef = fe({
            providedIn: "root",
            factory: function() {
              return new e([new hr()]);
            }
          })),
          e
        );
      })(),
      Tr = (function() {
        function e(e) {
          this.factories = e;
        }
        return (
          (e.create = function(t, n) {
            if (n) {
              var r = n.factories.slice();
              t = t.concat(r);
            }
            return new e(t);
          }),
          (e.extend = function(t) {
            return {
              provide: e,
              useFactory: function(n) {
                if (!n)
                  throw new Error(
                    "Cannot extend KeyValueDiffers without a parent injector"
                  );
                return e.create(t, n);
              },
              deps: [[e, new Pe(), new De()]]
            };
          }),
          (e.prototype.find = function(e) {
            var t = this.factories.find(function(t) {
              return t.supports(e);
            });
            if (t) return t;
            throw new Error(
              "Cannot find a differ supporting object '" + e + "'"
            );
          }),
          (e.ngInjectableDef = fe({
            providedIn: "root",
            factory: function() {
              return new e([new wr()]);
            }
          })),
          e
        );
      })(),
      Sr = [new wr()],
      kr = new xr([new hr()]),
      Ir = new Tr(Sr),
      Nr = Jn(null, "core", [
        { provide: wn, useValue: "unknown" },
        { provide: Xn, deps: [Ye] },
        { provide: Wn, deps: [] },
        { provide: Cn, deps: [] }
      ]),
      Ar = new he("LocaleId");
    function Or() {
      return kr;
    }
    function Dr() {
      return Ir;
    }
    function Rr(e) {
      return e || "en-US";
    }
    var Pr = (function() {
      return function(e) {};
    })();
    function Mr(e, t, n) {
      var r = e.state,
        o = 1792 & r;
      return o === t
        ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
        : o === n;
    }
    function Vr(e, t, n) {
      return (
        (1792 & e.state) === t &&
        e.initIndex <= n &&
        ((e.initIndex = n + 1), !0)
      );
    }
    function jr(e, t) {
      return e.nodes[t];
    }
    function Hr(e, t) {
      return e.nodes[t];
    }
    function Fr(e, t) {
      return e.nodes[t];
    }
    function Lr(e, t) {
      return e.nodes[t];
    }
    function Br(e, t) {
      return e.nodes[t];
    }
    var zr = {
      setCurrentNode: void 0,
      createRootView: void 0,
      createEmbeddedView: void 0,
      createComponentView: void 0,
      createNgModuleRef: void 0,
      overrideProvider: void 0,
      overrideComponentView: void 0,
      clearOverrides: void 0,
      checkAndUpdateView: void 0,
      checkNoChangesView: void 0,
      destroyView: void 0,
      resolveDep: void 0,
      createDebugContext: void 0,
      handleEvent: void 0,
      updateDirectives: void 0,
      updateRenderer: void 0,
      dirtyParentQueries: void 0
    };
    function Ur(e, t, n, r) {
      var o =
        "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
        t +
        "'. Current value: '" +
        n +
        "'.";
      return (
        r &&
          (o +=
            " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
        (function(e, t) {
          var n = new Error(e);
          return Zr(n, t), n;
        })(o, e)
      );
    }
    function Zr(e, t) {
      (e[an] = t), (e[cn] = t.logError.bind(t));
    }
    function Qr(e) {
      return new Error(
        "ViewDestroyedError: Attempt to use a destroyed view: " + e
      );
    }
    var qr = function() {},
      Wr = new Map();
    function Gr(e) {
      var t = Wr.get(e);
      return t || ((t = Te(e) + "_" + Wr.size), Wr.set(e, t)), t;
    }
    var Kr = "$$undefined",
      Yr = "$$empty";
    function Jr(e) {
      return {
        id: Kr,
        styles: e.styles,
        encapsulation: e.encapsulation,
        data: e.data
      };
    }
    var $r = 0;
    function Xr(e, t, n, r) {
      return !(!(2 & e.state) && xe(e.oldValues[t.bindingIndex + n], r));
    }
    function eo(e, t, n, r) {
      return !!Xr(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
    }
    function to(e, t, n, r) {
      var o = e.oldValues[t.bindingIndex + n];
      if (1 & e.state || !Le(o, r)) {
        var i = t.bindings[n].name;
        throw Ur(
          zr.createDebugContext(e, t.nodeIndex),
          i + ": " + o,
          i + ": " + r,
          0 != (1 & e.state)
        );
      }
    }
    function no(e) {
      for (var t = e; t; )
        2 & t.def.flags && (t.state |= 8),
          (t = t.viewContainerParent || t.parent);
    }
    function ro(e, t) {
      for (var n = e; n && n !== t; )
        (n.state |= 64), (n = n.viewContainerParent || n.parent);
    }
    function oo(e, t, n, r) {
      try {
        return (
          no(33554432 & e.def.nodes[t].flags ? Hr(e, t).componentView : e),
          zr.handleEvent(e, t, n, r)
        );
      } catch (o) {
        e.root.errorHandler.handleError(o);
      }
    }
    function io(e) {
      return e.parent ? Hr(e.parent, e.parentNodeDef.nodeIndex) : null;
    }
    function so(e) {
      return e.parent ? e.parentNodeDef.parent : null;
    }
    function ao(e, t) {
      switch (201347067 & t.flags) {
        case 1:
          return Hr(e, t.nodeIndex).renderElement;
        case 2:
          return jr(e, t.nodeIndex).renderText;
      }
    }
    function uo(e) {
      return !!e.parent && !!(32768 & e.parentNodeDef.flags);
    }
    function co(e) {
      return !(!e.parent || 32768 & e.parentNodeDef.flags);
    }
    function lo(e) {
      var t = {},
        n = 0,
        r = {};
      return (
        e &&
          e.forEach(function(e) {
            var o = c(e, 2),
              i = o[0],
              s = o[1];
            "number" == typeof i
              ? ((t[i] = s),
                (n |= (function(e) {
                  return 1 << e % 32;
                })(i)))
              : (r[i] = s);
          }),
        { matchedQueries: t, references: r, matchedQueryIds: n }
      );
    }
    function fo(e, t) {
      return e.map(function(e) {
        var n, r, o;
        return (
          Array.isArray(e)
            ? ((o = (n = c(e, 2))[0]), (r = n[1]))
            : ((o = 0), (r = e)),
          r &&
            ("function" == typeof r || "object" == typeof r) &&
            t &&
            Object.defineProperty(r, qe, { value: t, configurable: !0 }),
          { flags: o, token: r, tokenKey: Gr(r) }
        );
      });
    }
    function po(e, t, n) {
      var r = n.renderParent;
      return r
        ? 0 == (1 & r.flags) ||
          0 == (33554432 & r.flags) ||
          (r.element.componentRendererType &&
            r.element.componentRendererType.encapsulation === Ae.Native)
          ? Hr(e, n.renderParent.nodeIndex).renderElement
          : void 0
        : t;
    }
    var ho = new WeakMap();
    function vo(e) {
      var t = ho.get(e);
      return (
        t ||
          (((t = e(function() {
            return qr;
          })).factory = e),
          ho.set(e, t)),
        t
      );
    }
    function yo(e, t, n, r, o) {
      3 === t && (n = e.renderer.parentNode(ao(e, e.def.lastRenderRootNode))),
        go(e, t, 0, e.def.nodes.length - 1, n, r, o);
    }
    function go(e, t, n, r, o, i, s) {
      for (var a = n; a <= r; a++) {
        var u = e.def.nodes[a];
        11 & u.flags && bo(e, u, t, o, i, s), (a += u.childCount);
      }
    }
    function mo(e, t, n, r, o, i) {
      for (var s = e; s && !uo(s); ) s = s.parent;
      for (
        var a = s.parent,
          u = so(s),
          c = u.nodeIndex + u.childCount,
          l = u.nodeIndex + 1;
        l <= c;
        l++
      ) {
        var d = a.def.nodes[l];
        d.ngContentIndex === t && bo(a, d, n, r, o, i), (l += d.childCount);
      }
      if (!a.parent) {
        var f = e.root.projectableNodes[t];
        if (f) for (l = 0; l < f.length; l++) _o(e, f[l], n, r, o, i);
      }
    }
    function bo(e, t, n, r, o, i) {
      if (8 & t.flags) mo(e, t.ngContent.index, n, r, o, i);
      else {
        var s = ao(e, t);
        if (
          (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
            ? (16 & t.bindingFlags && _o(e, s, n, r, o, i),
              32 & t.bindingFlags &&
                _o(Hr(e, t.nodeIndex).componentView, s, n, r, o, i))
            : _o(e, s, n, r, o, i),
          16777216 & t.flags)
        )
          for (
            var a = Hr(e, t.nodeIndex).viewContainer._embeddedViews, u = 0;
            u < a.length;
            u++
          )
            yo(a[u], n, r, o, i);
        1 & t.flags &&
          !t.element.name &&
          go(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i);
      }
    }
    function _o(e, t, n, r, o, i) {
      var s = e.renderer;
      switch (n) {
        case 1:
          s.appendChild(r, t);
          break;
        case 2:
          s.insertBefore(r, t, o);
          break;
        case 3:
          s.removeChild(r, t);
          break;
        case 0:
          i.push(t);
      }
    }
    var wo = /^:([^:]+):(.+)$/;
    function Eo(e) {
      if (":" === e[0]) {
        var t = e.match(wo);
        return [t[1], t[2]];
      }
      return ["", e];
    }
    function Co(e) {
      for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags;
      return t;
    }
    function xo(e, t, n, r, o, i, s, a, u, l, d, f) {
      var p;
      void 0 === s && (s = []), l || (l = qr);
      var h = lo(n),
        v = h.matchedQueries,
        y = h.references,
        g = h.matchedQueryIds,
        m = null,
        b = null;
      i && ((m = (p = c(Eo(i), 2))[0]), (b = p[1])), (a = a || []);
      for (var _ = new Array(a.length), w = 0; w < a.length; w++) {
        var E = c(a[w], 3),
          C = E[0],
          x = E[2],
          T = c(Eo(E[1]), 2),
          S = T[0],
          k = T[1],
          I = void 0,
          N = void 0;
        switch (15 & C) {
          case 4:
            N = x;
            break;
          case 1:
          case 8:
            I = x;
        }
        _[w] = {
          flags: C,
          ns: S,
          name: k,
          nonMinifiedName: k,
          securityContext: I,
          suffix: N
        };
      }
      u = u || [];
      var A = new Array(u.length);
      for (w = 0; w < u.length; w++) {
        var O = c(u[w], 2);
        A[w] = { type: 0, target: O[0], eventName: O[1], propName: null };
      }
      var D = (s = s || []).map(function(e) {
        var t = c(e, 2),
          n = t[1],
          r = c(Eo(t[0]), 2);
        return [r[0], r[1], n];
      });
      return (
        (f = (function(e) {
          if (e && e.id === Kr) {
            var t =
              (null != e.encapsulation && e.encapsulation !== Ae.None) ||
              e.styles.length ||
              Object.keys(e.data).length;
            e.id = t ? "c" + $r++ : Yr;
          }
          return e && e.id === Yr && (e = null), e || null;
        })(f)),
        d && (t |= 33554432),
        {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: (t |= 1),
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: v,
          matchedQueryIds: g,
          references: y,
          ngContentIndex: r,
          childCount: o,
          bindings: _,
          bindingFlags: Co(_),
          outputs: A,
          element: {
            ns: m,
            name: b,
            attrs: D,
            template: null,
            componentProvider: null,
            componentView: d || null,
            componentRendererType: f,
            publicProviders: null,
            allProviders: null,
            handleEvent: l || qr
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        }
      );
    }
    function To(e, t, n) {
      var r,
        o = n.element,
        i = e.root.selectorOrNode,
        s = e.renderer;
      if (e.parent || !i) {
        r = o.name ? s.createElement(o.name, o.ns) : s.createComment("");
        var a = po(e, t, n);
        a && s.appendChild(a, r);
      } else
        r = s.selectRootElement(
          i,
          !!o.componentRendererType &&
            o.componentRendererType.encapsulation === Ae.ShadowDom
        );
      if (o.attrs)
        for (var u = 0; u < o.attrs.length; u++) {
          var l = c(o.attrs[u], 3);
          s.setAttribute(r, l[1], l[2], l[0]);
        }
      return r;
    }
    function So(e, t, n, r) {
      for (var o = 0; o < n.outputs.length; o++) {
        var i = n.outputs[o],
          s = ko(
            e,
            n.nodeIndex,
            ((d = i.eventName), (l = i.target) ? l + ":" + d : d)
          ),
          a = i.target,
          u = e;
        "component" === i.target && ((a = null), (u = t));
        var c = u.renderer.listen(a || r, i.eventName, s);
        e.disposables[n.outputIndex + o] = c;
      }
      var l, d;
    }
    function ko(e, t, n) {
      return function(r) {
        return oo(e, t, n, r);
      };
    }
    function Io(e, t, n, r) {
      if (!eo(e, t, n, r)) return !1;
      var o = t.bindings[n],
        i = Hr(e, t.nodeIndex),
        s = i.renderElement,
        a = o.name;
      switch (15 & o.flags) {
        case 1:
          !(function(e, t, n, r, o, i) {
            var s = t.securityContext,
              a = s ? e.root.sanitizer.sanitize(s, i) : i;
            a = null != a ? a.toString() : null;
            var u = e.renderer;
            null != i ? u.setAttribute(n, o, a, r) : u.removeAttribute(n, o, r);
          })(e, o, s, o.ns, a, r);
          break;
        case 2:
          !(function(e, t, n, r) {
            var o = e.renderer;
            r ? o.addClass(t, n) : o.removeClass(t, n);
          })(e, s, a, r);
          break;
        case 4:
          !(function(e, t, n, r, o) {
            var i = e.root.sanitizer.sanitize(It.STYLE, o);
            if (null != i) {
              i = i.toString();
              var s = t.suffix;
              null != s && (i += s);
            } else i = null;
            var a = e.renderer;
            null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r);
          })(e, o, s, a, r);
          break;
        case 8:
          !(function(e, t, n, r, o) {
            var i = t.securityContext,
              s = i ? e.root.sanitizer.sanitize(i, o) : o;
            e.renderer.setProperty(n, r, s);
          })(
            33554432 & t.flags && 32 & o.flags ? i.componentView : e,
            o,
            s,
            a,
            r
          );
      }
      return !0;
    }
    var No = new Object(),
      Ao = Gr(Ye),
      Oo = Gr(Ge),
      Do = Gr(bt);
    function Ro(e, t, n, r) {
      return (
        (n = Ie(n)),
        { index: -1, deps: fo(r, Te(t)), flags: e, token: t, value: n }
      );
    }
    function Po(e, t, n) {
      void 0 === n && (n = Ye.THROW_IF_NOT_FOUND);
      var r,
        o,
        i = je(e);
      try {
        if (8 & t.flags) return t.token;
        if ((2 & t.flags && (n = null), 1 & t.flags))
          return e._parent.get(t.token, n);
        var s = t.tokenKey;
        switch (s) {
          case Ao:
          case Oo:
          case Do:
            return e;
        }
        var a,
          u = e._def.providersByKey[s];
        if (u) {
          var c = e._providers[u.index];
          return (
            void 0 === c && (c = e._providers[u.index] = Mo(e, u)),
            c === No ? void 0 : c
          );
        }
        if (
          (a = pe(t.token)) &&
          ((r = e),
          null != (o = a).providedIn &&
            ((function(e, t) {
              return e._def.modules.indexOf(o.providedIn) > -1;
            })(r) ||
              ("root" === o.providedIn && r._def.isRoot)))
        ) {
          var l = e._providers.length;
          return (
            (e._def.providersByKey[t.tokenKey] = {
              flags: 5120,
              value: a.factory,
              deps: [],
              index: l,
              token: t.token
            }),
            (e._providers[l] = No),
            (e._providers[l] = Mo(e, e._def.providersByKey[t.tokenKey]))
          );
        }
        return 4 & t.flags ? n : e._parent.get(t.token, n);
      } finally {
        je(i);
      }
    }
    function Mo(e, t) {
      var n;
      switch (201347067 & t.flags) {
        case 512:
          n = (function(e, t, n) {
            var r = n.length;
            switch (r) {
              case 0:
                return new t();
              case 1:
                return new t(Po(e, n[0]));
              case 2:
                return new t(Po(e, n[0]), Po(e, n[1]));
              case 3:
                return new t(Po(e, n[0]), Po(e, n[1]), Po(e, n[2]));
              default:
                for (var o = new Array(r), i = 0; i < r; i++)
                  o[i] = Po(e, n[i]);
                return new (t.bind.apply(t, l([void 0], o)))();
            }
          })(e, t.value, t.deps);
          break;
        case 1024:
          n = (function(e, t, n) {
            var r = n.length;
            switch (r) {
              case 0:
                return t();
              case 1:
                return t(Po(e, n[0]));
              case 2:
                return t(Po(e, n[0]), Po(e, n[1]));
              case 3:
                return t(Po(e, n[0]), Po(e, n[1]), Po(e, n[2]));
              default:
                for (var o = Array(r), i = 0; i < r; i++) o[i] = Po(e, n[i]);
                return t.apply(void 0, l(o));
            }
          })(e, t.value, t.deps);
          break;
        case 2048:
          n = Po(e, t.deps[0]);
          break;
        case 256:
          n = t.value;
      }
      return (
        n === No ||
          null == n ||
          "object" != typeof n ||
          131072 & t.flags ||
          "function" != typeof n.ngOnDestroy ||
          (t.flags |= 131072),
        void 0 === n ? No : n
      );
    }
    function Vo(e, t) {
      var n = e.viewContainer._embeddedViews;
      if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
        return null;
      var r = n[t];
      return (
        (r.viewContainerParent = null),
        Lo(n, t),
        zr.dirtyParentQueries(r),
        Ho(r),
        r
      );
    }
    function jo(e, t, n) {
      var r = t ? ao(t, t.def.lastRenderRootNode) : e.renderElement,
        o = n.renderer.parentNode(r),
        i = n.renderer.nextSibling(r);
      yo(n, 2, o, i, void 0);
    }
    function Ho(e) {
      yo(e, 3, null, null, void 0);
    }
    function Fo(e, t, n) {
      t >= e.length ? e.push(n) : e.splice(t, 0, n);
    }
    function Lo(e, t) {
      t >= e.length - 1 ? e.pop() : e.splice(t, 1);
    }
    var Bo = new Object();
    function zo(e, t, n, r, o, i) {
      return new Uo(e, t, n, r, o, i);
    }
    var Uo = (function(e) {
        function t(t, n, r, o, i, s) {
          var a = e.call(this) || this;
          return (
            (a.selector = t),
            (a.componentType = n),
            (a._inputs = o),
            (a._outputs = i),
            (a.ngContentSelectors = s),
            (a.viewDefFactory = r),
            a
          );
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "inputs", {
            get: function() {
              var e = [],
                t = this._inputs;
              for (var n in t) e.push({ propName: n, templateName: t[n] });
              return e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "outputs", {
            get: function() {
              var e = [];
              for (var t in this._outputs)
                e.push({ propName: t, templateName: this._outputs[t] });
              return e;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.create = function(e, t, n, r) {
            if (!r) throw new Error("ngModule should be provided");
            var o = vo(this.viewDefFactory),
              i = o.nodes[0].element.componentProvider.nodeIndex,
              s = zr.createRootView(e, t || [], n, o, r, Bo),
              a = Fr(s, i).instance;
            return (
              n &&
                s.renderer.setAttribute(
                  Hr(s, 0).renderElement,
                  "ng-version",
                  At.full
                ),
              new Zo(s, new Go(s), a)
            );
          }),
          t
        );
      })(ft),
      Zo = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o._view = t),
            (o._viewRef = n),
            (o._component = r),
            (o._elDef = o._view.def.nodes[0]),
            (o.hostView = n),
            (o.changeDetectorRef = n),
            (o.instance = r),
            o
          );
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "location", {
            get: function() {
              return new wt(
                Hr(this._view, this._elDef.nodeIndex).renderElement
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "injector", {
            get: function() {
              return new $o(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "componentType", {
            get: function() {
              return this._component.constructor;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.destroy = function() {
            this._viewRef.destroy();
          }),
          (t.prototype.onDestroy = function(e) {
            this._viewRef.onDestroy(e);
          }),
          t
        );
      })(dt);
    function Qo(e, t, n) {
      return new qo(e, t, n);
    }
    var qo = (function() {
      function e(e, t, n) {
        (this._view = e),
          (this._elDef = t),
          (this._data = n),
          (this._embeddedViews = []);
      }
      return (
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return new wt(this._data.renderElement);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "injector", {
          get: function() {
            return new $o(this._view, this._elDef);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "parentInjector", {
          get: function() {
            for (var e = this._view, t = this._elDef.parent; !t && e; )
              (t = so(e)), (e = e.parent);
            return e ? new $o(e, t) : new $o(this._view, null);
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.clear = function() {
          for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
            var t = Vo(this._data, e);
            zr.destroyView(t);
          }
        }),
        (e.prototype.get = function(e) {
          var t = this._embeddedViews[e];
          if (t) {
            var n = new Go(t);
            return n.attachToViewContainerRef(this), n;
          }
          return null;
        }),
        Object.defineProperty(e.prototype, "length", {
          get: function() {
            return this._embeddedViews.length;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.createEmbeddedView = function(e, t, n) {
          var r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }),
        (e.prototype.createComponent = function(e, t, n, r, o) {
          var i = n || this.parentInjector;
          o || e instanceof mt || (o = i.get(bt));
          var s = e.create(i, r, void 0, o);
          return this.insert(s.hostView, t), s;
        }),
        (e.prototype.insert = function(e, t) {
          if (e.destroyed)
            throw new Error(
              "Cannot insert a destroyed View in a ViewContainer!"
            );
          var n,
            r,
            o,
            i,
            s = e;
          return (
            (i = (n = this._data).viewContainer._embeddedViews),
            null == (r = t) && (r = i.length),
            ((o = s._view).viewContainerParent = this._view),
            Fo(i, r, o),
            (function(e, t) {
              var n = io(t);
              if (n && n !== e && !(16 & t.state)) {
                t.state |= 16;
                var r = n.template._projectedViews;
                r || (r = n.template._projectedViews = []),
                  r.push(t),
                  (function(e, n) {
                    if (!(4 & n.flags)) {
                      (t.parent.def.nodeFlags |= 4), (n.flags |= 4);
                      for (var r = n.parent; r; )
                        (r.childFlags |= 4), (r = r.parent);
                    }
                  })(0, t.parentNodeDef);
              }
            })(n, o),
            zr.dirtyParentQueries(o),
            jo(n, r > 0 ? i[r - 1] : null, o),
            s.attachToViewContainerRef(this),
            e
          );
        }),
        (e.prototype.move = function(e, t) {
          if (e.destroyed)
            throw new Error("Cannot move a destroyed View in a ViewContainer!");
          var n,
            r,
            o,
            i,
            s,
            a = this._embeddedViews.indexOf(e._view);
          return (
            (o = t),
            (s = (i = (n = this._data).viewContainer._embeddedViews)[(r = a)]),
            Lo(i, r),
            null == o && (o = i.length),
            Fo(i, o, s),
            zr.dirtyParentQueries(s),
            Ho(s),
            jo(n, o > 0 ? i[o - 1] : null, s),
            e
          );
        }),
        (e.prototype.indexOf = function(e) {
          return this._embeddedViews.indexOf(e._view);
        }),
        (e.prototype.remove = function(e) {
          var t = Vo(this._data, e);
          t && zr.destroyView(t);
        }),
        (e.prototype.detach = function(e) {
          var t = Vo(this._data, e);
          return t ? new Go(t) : null;
        }),
        e
      );
    })();
    function Wo(e) {
      return new Go(e);
    }
    var Go = (function() {
      function e(e) {
        (this._view = e),
          (this._viewContainerRef = null),
          (this._appRef = null);
      }
      return (
        Object.defineProperty(e.prototype, "rootNodes", {
          get: function() {
            return yo(this._view, 0, void 0, void 0, (e = [])), e;
            var e;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "context", {
          get: function() {
            return this._view.context;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "destroyed", {
          get: function() {
            return 0 != (128 & this._view.state);
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.markForCheck = function() {
          no(this._view);
        }),
        (e.prototype.detach = function() {
          this._view.state &= -5;
        }),
        (e.prototype.detectChanges = function() {
          var e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            zr.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }),
        (e.prototype.checkNoChanges = function() {
          zr.checkNoChangesView(this._view);
        }),
        (e.prototype.reattach = function() {
          this._view.state |= 4;
        }),
        (e.prototype.onDestroy = function(e) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(e);
        }),
        (e.prototype.destroy = function() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            zr.destroyView(this._view);
        }),
        (e.prototype.detachFromAppRef = function() {
          (this._appRef = null),
            Ho(this._view),
            zr.dirtyParentQueries(this._view);
        }),
        (e.prototype.attachToAppRef = function(e) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = e;
        }),
        (e.prototype.attachToViewContainerRef = function(e) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = e;
        }),
        e
      );
    })();
    function Ko(e, t) {
      return new Yo(e, t);
    }
    var Yo = (function(e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return (r._parentView = t), (r._def = n), r;
      }
      return (
        o(t, e),
        (t.prototype.createEmbeddedView = function(e) {
          return new Go(
            zr.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }),
        Object.defineProperty(t.prototype, "elementRef", {
          get: function() {
            return new wt(
              Hr(this._parentView, this._def.nodeIndex).renderElement
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        t
      );
    })(nn);
    function Jo(e, t) {
      return new $o(e, t);
    }
    var $o = (function() {
      function e(e, t) {
        (this.view = e), (this.elDef = t);
      }
      return (
        (e.prototype.get = function(e, t) {
          return (
            void 0 === t && (t = Ye.THROW_IF_NOT_FOUND),
            zr.resolveDep(
              this.view,
              this.elDef,
              !!this.elDef && 0 != (33554432 & this.elDef.flags),
              { flags: 0, token: e, tokenKey: Gr(e) },
              t
            )
          );
        }),
        e
      );
    })();
    function Xo(e) {
      return new ei(e.renderer);
    }
    var ei = (function() {
      function e(e) {
        this.delegate = e;
      }
      return (
        (e.prototype.selectRootElement = function(e) {
          return this.delegate.selectRootElement(e);
        }),
        (e.prototype.createElement = function(e, t) {
          var n = c(Eo(t), 2),
            r = this.delegate.createElement(n[1], n[0]);
          return e && this.delegate.appendChild(e, r), r;
        }),
        (e.prototype.createViewRoot = function(e) {
          return e;
        }),
        (e.prototype.createTemplateAnchor = function(e) {
          var t = this.delegate.createComment("");
          return e && this.delegate.appendChild(e, t), t;
        }),
        (e.prototype.createText = function(e, t) {
          var n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }),
        (e.prototype.projectNodes = function(e, t) {
          for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }),
        (e.prototype.attachViewAfter = function(e, t) {
          for (
            var n = this.delegate.parentNode(e),
              r = this.delegate.nextSibling(e),
              o = 0;
            o < t.length;
            o++
          )
            this.delegate.insertBefore(n, t[o], r);
        }),
        (e.prototype.detachView = function(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }),
        (e.prototype.destroyView = function(e, t) {
          for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }),
        (e.prototype.listen = function(e, t, n) {
          return this.delegate.listen(e, t, n);
        }),
        (e.prototype.listenGlobal = function(e, t, n) {
          return this.delegate.listen(e, t, n);
        }),
        (e.prototype.setElementProperty = function(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }),
        (e.prototype.setElementAttribute = function(e, t, n) {
          var r = c(Eo(t), 2),
            o = r[0],
            i = r[1];
          null != n
            ? this.delegate.setAttribute(e, i, n, o)
            : this.delegate.removeAttribute(e, i, o);
        }),
        (e.prototype.setBindingDebugInfo = function(e, t, n) {}),
        (e.prototype.setElementClass = function(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }),
        (e.prototype.setElementStyle = function(e, t, n) {
          null != n
            ? this.delegate.setStyle(e, t, n)
            : this.delegate.removeStyle(e, t);
        }),
        (e.prototype.invokeElementMethod = function(e, t, n) {
          e[t].apply(e, n);
        }),
        (e.prototype.setText = function(e, t) {
          this.delegate.setValue(e, t);
        }),
        (e.prototype.animate = function() {
          throw new Error("Renderer.animate is no longer supported!");
        }),
        e
      );
    })();
    function ti(e, t, n, r) {
      return new ni(e, t, n, r);
    }
    var ni = (function() {
        function e(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(e) {
              for (
                var t = e._def,
                  n = (e._providers = new Array(t.providers.length)),
                  r = 0;
                r < t.providers.length;
                r++
              ) {
                var o = t.providers[r];
                4096 & o.flags || (void 0 === n[r] && (n[r] = Mo(e, o)));
              }
            })(this);
        }
        return (
          (e.prototype.get = function(e, t, n) {
            void 0 === t && (t = Ye.THROW_IF_NOT_FOUND),
              void 0 === n && (n = Me.Default);
            var r = 0;
            return (
              n & Me.SkipSelf ? (r |= 1) : n & Me.Self && (r |= 4),
              Po(this, { token: e, tokenKey: Gr(e), flags: r }, t)
            );
          }),
          Object.defineProperty(e.prototype, "instance", {
            get: function() {
              return this.get(this._moduleType);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "componentFactoryResolver", {
            get: function() {
              return this.get(yt);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.destroy = function() {
            if (this._destroyed)
              throw new Error(
                "The ng module " +
                  Te(this.instance.constructor) +
                  " has already been destroyed."
              );
            (this._destroyed = !0),
              (function(e, t) {
                for (
                  var n = e._def, r = new Set(), o = 0;
                  o < n.providers.length;
                  o++
                )
                  if (131072 & n.providers[o].flags) {
                    var i = e._providers[o];
                    if (i && i !== No) {
                      var s = i.ngOnDestroy;
                      "function" != typeof s ||
                        r.has(i) ||
                        (s.apply(i), r.add(i));
                    }
                  }
              })(this),
              this._destroyListeners.forEach(function(e) {
                return e();
              });
          }),
          (e.prototype.onDestroy = function(e) {
            this._destroyListeners.push(e);
          }),
          e
        );
      })(),
      ri = Gr(Ct),
      oi = Gr(St),
      ii = Gr(wt),
      si = Gr(or),
      ai = Gr(nn),
      ui = Gr(sr),
      ci = Gr(Ye),
      li = Gr(Ge);
    function di(e, t, n, r, o, i, s, a) {
      var u = [];
      if (s)
        for (var l in s) {
          var d = c(s[l], 2);
          u[d[0]] = {
            flags: 8,
            name: l,
            nonMinifiedName: d[1],
            ns: null,
            securityContext: null,
            suffix: null
          };
        }
      var f = [];
      if (a)
        for (var p in a)
          f.push({ type: 1, propName: p, target: null, eventName: a[p] });
      return (function(e, t, n, r, o, i, s, a, u) {
        var c = lo(n),
          l = c.matchedQueries,
          d = c.references,
          f = c.matchedQueryIds;
        u || (u = []), a || (a = []), (i = Ie(i));
        var p = fo(s, Te(o));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: l,
          matchedQueryIds: f,
          references: d,
          ngContentIndex: -1,
          childCount: r,
          bindings: a,
          bindingFlags: Co(a),
          outputs: u,
          element: null,
          provider: { token: o, value: i, deps: p },
          text: null,
          query: null,
          ngContent: null
        };
      })(e, (t |= 16384), n, r, o, o, i, u, f);
    }
    function fi(e, t) {
      return yi(e, t);
    }
    function pi(e, t) {
      for (var n = e; n.parent && !uo(n); ) n = n.parent;
      return gi(n.parent, so(n), !0, t.provider.value, t.provider.deps);
    }
    function hi(e, t) {
      var n,
        r = gi(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
      if (t.outputs.length)
        for (var o = 0; o < t.outputs.length; o++) {
          var i = t.outputs[o],
            s = r[i.propName];
          if (!(n = s) || "function" != typeof n.subscribe)
            throw new Error(
              "@Output " +
                i.propName +
                " not initialized in '" +
                r.constructor.name +
                "'."
            );
          var a = s.subscribe(vi(e, t.parent.nodeIndex, i.eventName));
          e.disposables[t.outputIndex + o] = a.unsubscribe.bind(a);
        }
      return r;
    }
    function vi(e, t, n) {
      return function(r) {
        return oo(e, t, n, r);
      };
    }
    function yi(e, t) {
      var n = (8192 & t.flags) > 0,
        r = t.provider;
      switch (201347067 & t.flags) {
        case 512:
          return gi(e, t.parent, n, r.value, r.deps);
        case 1024:
          return (function(e, t, n, r, o) {
            var i = o.length;
            switch (i) {
              case 0:
                return r();
              case 1:
                return r(bi(e, t, n, o[0]));
              case 2:
                return r(bi(e, t, n, o[0]), bi(e, t, n, o[1]));
              case 3:
                return r(
                  bi(e, t, n, o[0]),
                  bi(e, t, n, o[1]),
                  bi(e, t, n, o[2])
                );
              default:
                for (var s = Array(i), a = 0; a < i; a++)
                  s[a] = bi(e, t, n, o[a]);
                return r.apply(void 0, l(s));
            }
          })(e, t.parent, n, r.value, r.deps);
        case 2048:
          return bi(e, t.parent, n, r.deps[0]);
        case 256:
          return r.value;
      }
    }
    function gi(e, t, n, r, o) {
      var i = o.length;
      switch (i) {
        case 0:
          return new r();
        case 1:
          return new r(bi(e, t, n, o[0]));
        case 2:
          return new r(bi(e, t, n, o[0]), bi(e, t, n, o[1]));
        case 3:
          return new r(bi(e, t, n, o[0]), bi(e, t, n, o[1]), bi(e, t, n, o[2]));
        default:
          for (var s = new Array(i), a = 0; a < i; a++)
            s[a] = bi(e, t, n, o[a]);
          return new (r.bind.apply(r, l([void 0], s)))();
      }
    }
    var mi = {};
    function bi(e, t, n, r, o) {
      if ((void 0 === o && (o = Ye.THROW_IF_NOT_FOUND), 8 & r.flags))
        return r.token;
      var i = e;
      2 & r.flags && (o = null);
      var s = r.tokenKey;
      s === ui && (n = !(!t || !t.element.componentView)),
        t && 1 & r.flags && ((n = !1), (t = t.parent));
      for (var a = e; a; ) {
        if (t)
          switch (s) {
            case ri:
              return Xo(_i(a, t, n));
            case oi:
              return _i(a, t, n).renderer;
            case ii:
              return new wt(Hr(a, t.nodeIndex).renderElement);
            case si:
              return Hr(a, t.nodeIndex).viewContainer;
            case ai:
              if (t.element.template) return Hr(a, t.nodeIndex).template;
              break;
            case ui:
              return Wo(_i(a, t, n));
            case ci:
            case li:
              return Jo(a, t);
            default:
              var u = (n ? t.element.allProviders : t.element.publicProviders)[
                s
              ];
              if (u) {
                var c = Fr(a, u.nodeIndex);
                return (
                  c ||
                    ((c = { instance: yi(a, u) }), (a.nodes[u.nodeIndex] = c)),
                  c.instance
                );
              }
          }
        (n = uo(a)), (t = so(a)), (a = a.parent), 4 & r.flags && (a = null);
      }
      var l = i.root.injector.get(r.token, mi);
      return l !== mi || o === mi
        ? l
        : i.root.ngModule.injector.get(r.token, o);
    }
    function _i(e, t, n) {
      var r;
      if (n) r = Hr(e, t.nodeIndex).componentView;
      else for (r = e; r.parent && !uo(r); ) r = r.parent;
      return r;
    }
    function wi(e, t, n, r, o, i) {
      if (32768 & n.flags) {
        var s = Hr(e, n.parent.nodeIndex).componentView;
        2 & s.def.flags && (s.state |= 8);
      }
      if (((t.instance[n.bindings[r].name] = o), 524288 & n.flags)) {
        i = i || {};
        var a = Be.unwrap(e.oldValues[n.bindingIndex + r]);
        i[n.bindings[r].nonMinifiedName] = new ze(a, o, 0 != (2 & e.state));
      }
      return (e.oldValues[n.bindingIndex + r] = o), i;
    }
    function Ei(e, t) {
      if (e.def.nodeFlags & t)
        for (var n = e.def.nodes, r = 0, o = 0; o < n.length; o++) {
          var i = n[o],
            s = i.parent;
          for (
            !s && i.flags & t && xi(e, o, i.flags & t, r++),
              0 == (i.childFlags & t) && (o += i.childCount);
            s && 1 & s.flags && o === s.nodeIndex + s.childCount;

          )
            s.directChildFlags & t && (r = Ci(e, s, t, r)), (s = s.parent);
        }
    }
    function Ci(e, t, n, r) {
      for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
        var i = e.def.nodes[o];
        i.flags & n && xi(e, o, i.flags & n, r++), (o += i.childCount);
      }
      return r;
    }
    function xi(e, t, n, r) {
      var o = Fr(e, t);
      if (o) {
        var i = o.instance;
        i &&
          (zr.setCurrentNode(e, t),
          1048576 & n && Vr(e, 512, r) && i.ngAfterContentInit(),
          2097152 & n && i.ngAfterContentChecked(),
          4194304 & n && Vr(e, 768, r) && i.ngAfterViewInit(),
          8388608 & n && i.ngAfterViewChecked(),
          131072 & n && i.ngOnDestroy());
      }
    }
    function Ti(e) {
      for (var t = e.def.nodeMatchedQueries; e.parent && co(e); ) {
        var n = e.parentNodeDef;
        e = e.parent;
        for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++)
          67108864 & (i = e.def.nodes[o]).flags &&
            536870912 & i.flags &&
            (i.query.filterId & t) === i.query.filterId &&
            Br(e, o).setDirty(),
            (!(1 & i.flags && o + i.childCount < n.nodeIndex) &&
              67108864 & i.childFlags &&
              536870912 & i.childFlags) ||
              (o += i.childCount);
      }
      if (134217728 & e.def.nodeFlags)
        for (o = 0; o < e.def.nodes.length; o++) {
          var i;
          134217728 & (i = e.def.nodes[o]).flags &&
            536870912 & i.flags &&
            Br(e, o).setDirty(),
            (o += i.childCount);
        }
    }
    function Si(e, t) {
      var n = Br(e, t.nodeIndex);
      if (n.dirty) {
        var r,
          o = void 0;
        if (67108864 & t.flags) {
          var i = t.parent.parent;
          (o = ki(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, [])),
            (r = Fr(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((o = ki(e, 0, e.def.nodes.length - 1, t.query, [])),
            (r = e.component));
        n.reset(o);
        for (var s = t.query.bindings, a = !1, u = 0; u < s.length; u++) {
          var c = s[u],
            l = void 0;
          switch (c.bindingType) {
            case 0:
              l = n.first;
              break;
            case 1:
              (l = n), (a = !0);
          }
          r[c.propName] = l;
        }
        a && n.notifyOnChanges();
      }
    }
    function ki(e, t, n, r, o) {
      for (var i = t; i <= n; i++) {
        var s = e.def.nodes[i],
          a = s.matchedQueries[r.id];
        if (
          (null != a && o.push(Ii(e, s, a)),
          1 & s.flags &&
            s.element.template &&
            (s.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
        ) {
          var u = Hr(e, i);
          if (
            ((s.childMatchedQueries & r.filterId) === r.filterId &&
              (ki(e, i + 1, i + s.childCount, r, o), (i += s.childCount)),
            16777216 & s.flags)
          )
            for (
              var c = u.viewContainer._embeddedViews, l = 0;
              l < c.length;
              l++
            ) {
              var d = c[l],
                f = io(d);
              f && f === u && ki(d, 0, d.def.nodes.length - 1, r, o);
            }
          var p = u.template._projectedViews;
          if (p)
            for (l = 0; l < p.length; l++) {
              var h = p[l];
              ki(h, 0, h.def.nodes.length - 1, r, o);
            }
        }
        (s.childMatchedQueries & r.filterId) !== r.filterId &&
          (i += s.childCount);
      }
      return o;
    }
    function Ii(e, t, n) {
      if (null != n)
        switch (n) {
          case 1:
            return Hr(e, t.nodeIndex).renderElement;
          case 0:
            return new wt(Hr(e, t.nodeIndex).renderElement);
          case 2:
            return Hr(e, t.nodeIndex).template;
          case 3:
            return Hr(e, t.nodeIndex).viewContainer;
          case 4:
            return Fr(e, t.nodeIndex).instance;
        }
    }
    function Ni(e, t, n) {
      var r = po(e, t, n);
      r && mo(e, n.ngContent.index, 1, r, null, void 0);
    }
    function Ai(e, t, n) {
      for (var r = new Array(n.length - 1), o = 1; o < n.length; o++)
        r[o - 1] = {
          flags: 8,
          name: null,
          ns: null,
          nonMinifiedName: null,
          securityContext: null,
          suffix: n[o]
        };
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: 2,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: t,
        childCount: 0,
        bindings: r,
        bindingFlags: 8,
        outputs: [],
        element: null,
        provider: null,
        text: { prefix: n[0] },
        query: null,
        ngContent: null
      };
    }
    function Oi(e, t, n) {
      var r,
        o = e.renderer;
      r = o.createText(n.text.prefix);
      var i = po(e, t, n);
      return i && o.appendChild(i, r), { renderText: r };
    }
    function Di(e, t) {
      return (null != e ? e.toString() : "") + t.suffix;
    }
    function Ri(e, t, n, r) {
      for (
        var o = 0,
          i = 0,
          s = 0,
          a = 0,
          u = 0,
          c = null,
          l = null,
          d = !1,
          f = !1,
          p = null,
          h = 0;
        h < t.length;
        h++
      ) {
        var v = t[h];
        if (
          ((v.nodeIndex = h),
          (v.parent = c),
          (v.bindingIndex = o),
          (v.outputIndex = i),
          (v.renderParent = l),
          (s |= v.flags),
          (u |= v.matchedQueryIds),
          v.element)
        ) {
          var y = v.element;
          (y.publicProviders = c
            ? c.element.publicProviders
            : Object.create(null)),
            (y.allProviders = y.publicProviders),
            (d = !1),
            (f = !1),
            v.element.template && (u |= v.element.template.nodeMatchedQueries);
        }
        if (
          (Mi(c, v, t.length),
          (o += v.bindings.length),
          (i += v.outputs.length),
          !l && 3 & v.flags && (p = v),
          20224 & v.flags)
        ) {
          d ||
            ((d = !0),
            (c.element.publicProviders = Object.create(
              c.element.publicProviders
            )),
            (c.element.allProviders = c.element.publicProviders));
          var g = 0 != (32768 & v.flags);
          0 == (8192 & v.flags) || g
            ? (c.element.publicProviders[Gr(v.provider.token)] = v)
            : (f ||
                ((f = !0),
                (c.element.allProviders = Object.create(
                  c.element.publicProviders
                ))),
              (c.element.allProviders[Gr(v.provider.token)] = v)),
            g && (c.element.componentProvider = v);
        }
        if (
          (c
            ? ((c.childFlags |= v.flags),
              (c.directChildFlags |= v.flags),
              (c.childMatchedQueries |= v.matchedQueryIds),
              v.element &&
                v.element.template &&
                (c.childMatchedQueries |=
                  v.element.template.nodeMatchedQueries))
            : (a |= v.flags),
          v.childCount > 0)
        )
          (c = v), Pi(v) || (l = v);
        else
          for (; c && h === c.nodeIndex + c.childCount; ) {
            var m = c.parent;
            m &&
              ((m.childFlags |= c.childFlags),
              (m.childMatchedQueries |= c.childMatchedQueries)),
              (l = (c = m) && Pi(c) ? c.renderParent : c);
          }
      }
      return {
        factory: null,
        nodeFlags: s,
        rootNodeFlags: a,
        nodeMatchedQueries: u,
        flags: e,
        nodes: t,
        updateDirectives: n || qr,
        updateRenderer: r || qr,
        handleEvent: function(e, n, r, o) {
          return t[n].element.handleEvent(e, r, o);
        },
        bindingCount: o,
        outputCount: i,
        lastRenderRootNode: p
      };
    }
    function Pi(e) {
      return 0 != (1 & e.flags) && null === e.element.name;
    }
    function Mi(e, t, n) {
      var r = t.element && t.element.template;
      if (r) {
        if (!r.lastRenderRootNode)
          throw new Error(
            "Illegal State: Embedded templates without nodes are not allowed!"
          );
        if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
          throw new Error(
            "Illegal State: Last root node of a template can't have embedded views, at index " +
              t.nodeIndex +
              "!"
          );
      }
      if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
        throw new Error(
          "Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " +
            t.nodeIndex +
            "!"
        );
      if (t.query) {
        if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
          throw new Error(
            "Illegal State: Content Query nodes need to be children of directives, at index " +
              t.nodeIndex +
              "!"
          );
        if (134217728 & t.flags && e)
          throw new Error(
            "Illegal State: View Query nodes have to be top level nodes, at index " +
              t.nodeIndex +
              "!"
          );
      }
      if (t.childCount) {
        var o = e ? e.nodeIndex + e.childCount : n - 1;
        if (t.nodeIndex <= o && t.nodeIndex + t.childCount > o)
          throw new Error(
            "Illegal State: childCount of node leads outside of parent, at index " +
              t.nodeIndex +
              "!"
          );
      }
    }
    function Vi(e, t, n, r) {
      var o = Fi(e.root, e.renderer, e, t, n);
      return Li(o, e.component, r), Bi(o), o;
    }
    function ji(e, t, n) {
      var r = Fi(e, e.renderer, null, null, t);
      return Li(r, n, n), Bi(r), r;
    }
    function Hi(e, t, n, r) {
      var o,
        i = t.element.componentRendererType;
      return (
        (o = i ? e.root.rendererFactory.createRenderer(r, i) : e.root.renderer),
        Fi(e.root, o, e, t.element.componentProvider, n)
      );
    }
    function Fi(e, t, n, r, o) {
      var i = new Array(o.nodes.length),
        s = o.outputCount ? new Array(o.outputCount) : null;
      return {
        def: o,
        parent: n,
        viewContainerParent: null,
        parentNodeDef: r,
        context: null,
        component: null,
        nodes: i,
        state: 13,
        root: e,
        renderer: t,
        oldValues: new Array(o.bindingCount),
        disposables: s,
        initIndex: -1
      };
    }
    function Li(e, t, n) {
      (e.component = t), (e.context = n);
    }
    function Bi(e) {
      var t;
      uo(e) &&
        (t = Hr(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
      for (var n = e.def, r = e.nodes, o = 0; o < n.nodes.length; o++) {
        var i = n.nodes[o];
        zr.setCurrentNode(e, o);
        var s = void 0;
        switch (201347067 & i.flags) {
          case 1:
            var a = To(e, t, i),
              u = void 0;
            if (33554432 & i.flags) {
              var c = vo(i.element.componentView);
              u = zr.createComponentView(e, i, c, a);
            }
            So(e, u, i, a),
              (s = {
                renderElement: a,
                componentView: u,
                viewContainer: null,
                template: i.element.template ? Ko(e, i) : void 0
              }),
              16777216 & i.flags && (s.viewContainer = Qo(e, i, s));
            break;
          case 2:
            s = Oi(e, t, i);
            break;
          case 512:
          case 1024:
          case 2048:
          case 256:
            (s = r[o]) || 4096 & i.flags || (s = { instance: fi(e, i) });
            break;
          case 16:
            s = { instance: pi(e, i) };
            break;
          case 16384:
            (s = r[o]) || (s = { instance: hi(e, i) }),
              32768 & i.flags &&
                Li(
                  Hr(e, i.parent.nodeIndex).componentView,
                  s.instance,
                  s.instance
                );
            break;
          case 32:
          case 64:
          case 128:
            s = { value: void 0 };
            break;
          case 67108864:
          case 134217728:
            s = new rr();
            break;
          case 8:
            Ni(e, t, i), (s = void 0);
        }
        r[o] = s;
      }
      Yi(e, Ki.CreateViewNodes), es(e, 201326592, 268435456, 0);
    }
    function zi(e) {
      Qi(e),
        zr.updateDirectives(e, 1),
        Ji(e, Ki.CheckNoChanges),
        zr.updateRenderer(e, 1),
        Yi(e, Ki.CheckNoChanges),
        (e.state &= -97);
    }
    function Ui(e) {
      1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
        Mr(e, 0, 256),
        Qi(e),
        zr.updateDirectives(e, 0),
        Ji(e, Ki.CheckAndUpdate),
        es(e, 67108864, 536870912, 0);
      var t = Mr(e, 256, 512);
      Ei(e, 2097152 | (t ? 1048576 : 0)),
        zr.updateRenderer(e, 0),
        Yi(e, Ki.CheckAndUpdate),
        es(e, 134217728, 536870912, 0),
        Ei(e, 8388608 | ((t = Mr(e, 512, 768)) ? 4194304 : 0)),
        2 & e.def.flags && (e.state &= -9),
        (e.state &= -97),
        Mr(e, 768, 1024);
    }
    function Zi(e, t, n, r, o, i, s, a, u, c, d, f, p) {
      return 0 === n
        ? (function(e, t, n, r, o, i, s, a, u, c, l, d) {
            switch (201347067 & t.flags) {
              case 1:
                return (function(e, t, n, r, o, i, s, a, u, c, l, d) {
                  var f = t.bindings.length,
                    p = !1;
                  return (
                    f > 0 && Io(e, t, 0, n) && (p = !0),
                    f > 1 && Io(e, t, 1, r) && (p = !0),
                    f > 2 && Io(e, t, 2, o) && (p = !0),
                    f > 3 && Io(e, t, 3, i) && (p = !0),
                    f > 4 && Io(e, t, 4, s) && (p = !0),
                    f > 5 && Io(e, t, 5, a) && (p = !0),
                    f > 6 && Io(e, t, 6, u) && (p = !0),
                    f > 7 && Io(e, t, 7, c) && (p = !0),
                    f > 8 && Io(e, t, 8, l) && (p = !0),
                    f > 9 && Io(e, t, 9, d) && (p = !0),
                    p
                  );
                })(e, t, n, r, o, i, s, a, u, c, l, d);
              case 2:
                return (function(e, t, n, r, o, i, s, a, u, c, l, d) {
                  var f = !1,
                    p = t.bindings,
                    h = p.length;
                  if (
                    (h > 0 && eo(e, t, 0, n) && (f = !0),
                    h > 1 && eo(e, t, 1, r) && (f = !0),
                    h > 2 && eo(e, t, 2, o) && (f = !0),
                    h > 3 && eo(e, t, 3, i) && (f = !0),
                    h > 4 && eo(e, t, 4, s) && (f = !0),
                    h > 5 && eo(e, t, 5, a) && (f = !0),
                    h > 6 && eo(e, t, 6, u) && (f = !0),
                    h > 7 && eo(e, t, 7, c) && (f = !0),
                    h > 8 && eo(e, t, 8, l) && (f = !0),
                    h > 9 && eo(e, t, 9, d) && (f = !0),
                    f)
                  ) {
                    var v = t.text.prefix;
                    h > 0 && (v += Di(n, p[0])),
                      h > 1 && (v += Di(r, p[1])),
                      h > 2 && (v += Di(o, p[2])),
                      h > 3 && (v += Di(i, p[3])),
                      h > 4 && (v += Di(s, p[4])),
                      h > 5 && (v += Di(a, p[5])),
                      h > 6 && (v += Di(u, p[6])),
                      h > 7 && (v += Di(c, p[7])),
                      h > 8 && (v += Di(l, p[8])),
                      h > 9 && (v += Di(d, p[9]));
                    var y = jr(e, t.nodeIndex).renderText;
                    e.renderer.setValue(y, v);
                  }
                  return f;
                })(e, t, n, r, o, i, s, a, u, c, l, d);
              case 16384:
                return (function(e, t, n, r, o, i, s, a, u, c, l, d) {
                  var f = Fr(e, t.nodeIndex),
                    p = f.instance,
                    h = !1,
                    v = void 0,
                    y = t.bindings.length;
                  return (
                    y > 0 &&
                      Xr(e, t, 0, n) &&
                      ((h = !0), (v = wi(e, f, t, 0, n, v))),
                    y > 1 &&
                      Xr(e, t, 1, r) &&
                      ((h = !0), (v = wi(e, f, t, 1, r, v))),
                    y > 2 &&
                      Xr(e, t, 2, o) &&
                      ((h = !0), (v = wi(e, f, t, 2, o, v))),
                    y > 3 &&
                      Xr(e, t, 3, i) &&
                      ((h = !0), (v = wi(e, f, t, 3, i, v))),
                    y > 4 &&
                      Xr(e, t, 4, s) &&
                      ((h = !0), (v = wi(e, f, t, 4, s, v))),
                    y > 5 &&
                      Xr(e, t, 5, a) &&
                      ((h = !0), (v = wi(e, f, t, 5, a, v))),
                    y > 6 &&
                      Xr(e, t, 6, u) &&
                      ((h = !0), (v = wi(e, f, t, 6, u, v))),
                    y > 7 &&
                      Xr(e, t, 7, c) &&
                      ((h = !0), (v = wi(e, f, t, 7, c, v))),
                    y > 8 &&
                      Xr(e, t, 8, l) &&
                      ((h = !0), (v = wi(e, f, t, 8, l, v))),
                    y > 9 &&
                      Xr(e, t, 9, d) &&
                      ((h = !0), (v = wi(e, f, t, 9, d, v))),
                    v && p.ngOnChanges(v),
                    65536 & t.flags && Vr(e, 256, t.nodeIndex) && p.ngOnInit(),
                    262144 & t.flags && p.ngDoCheck(),
                    h
                  );
                })(e, t, n, r, o, i, s, a, u, c, l, d);
              case 32:
              case 64:
              case 128:
                return (function(e, t, n, r, o, i, s, a, u, c, l, d) {
                  var f = t.bindings,
                    p = !1,
                    h = f.length;
                  if (
                    (h > 0 && eo(e, t, 0, n) && (p = !0),
                    h > 1 && eo(e, t, 1, r) && (p = !0),
                    h > 2 && eo(e, t, 2, o) && (p = !0),
                    h > 3 && eo(e, t, 3, i) && (p = !0),
                    h > 4 && eo(e, t, 4, s) && (p = !0),
                    h > 5 && eo(e, t, 5, a) && (p = !0),
                    h > 6 && eo(e, t, 6, u) && (p = !0),
                    h > 7 && eo(e, t, 7, c) && (p = !0),
                    h > 8 && eo(e, t, 8, l) && (p = !0),
                    h > 9 && eo(e, t, 9, d) && (p = !0),
                    p)
                  ) {
                    var v = Lr(e, t.nodeIndex),
                      y = void 0;
                    switch (201347067 & t.flags) {
                      case 32:
                        (y = new Array(f.length)),
                          h > 0 && (y[0] = n),
                          h > 1 && (y[1] = r),
                          h > 2 && (y[2] = o),
                          h > 3 && (y[3] = i),
                          h > 4 && (y[4] = s),
                          h > 5 && (y[5] = a),
                          h > 6 && (y[6] = u),
                          h > 7 && (y[7] = c),
                          h > 8 && (y[8] = l),
                          h > 9 && (y[9] = d);
                        break;
                      case 64:
                        (y = {}),
                          h > 0 && (y[f[0].name] = n),
                          h > 1 && (y[f[1].name] = r),
                          h > 2 && (y[f[2].name] = o),
                          h > 3 && (y[f[3].name] = i),
                          h > 4 && (y[f[4].name] = s),
                          h > 5 && (y[f[5].name] = a),
                          h > 6 && (y[f[6].name] = u),
                          h > 7 && (y[f[7].name] = c),
                          h > 8 && (y[f[8].name] = l),
                          h > 9 && (y[f[9].name] = d);
                        break;
                      case 128:
                        var g = n;
                        switch (h) {
                          case 1:
                            y = g.transform(n);
                            break;
                          case 2:
                            y = g.transform(r);
                            break;
                          case 3:
                            y = g.transform(r, o);
                            break;
                          case 4:
                            y = g.transform(r, o, i);
                            break;
                          case 5:
                            y = g.transform(r, o, i, s);
                            break;
                          case 6:
                            y = g.transform(r, o, i, s, a);
                            break;
                          case 7:
                            y = g.transform(r, o, i, s, a, u);
                            break;
                          case 8:
                            y = g.transform(r, o, i, s, a, u, c);
                            break;
                          case 9:
                            y = g.transform(r, o, i, s, a, u, c, l);
                            break;
                          case 10:
                            y = g.transform(r, o, i, s, a, u, c, l, d);
                        }
                    }
                    v.value = y;
                  }
                  return p;
                })(e, t, n, r, o, i, s, a, u, c, l, d);
              default:
                throw "unreachable";
            }
          })(e, t, r, o, i, s, a, u, c, d, f, p)
        : (function(e, t, n) {
            switch (201347067 & t.flags) {
              case 1:
                return (function(e, t, n) {
                  for (var r = !1, o = 0; o < n.length; o++)
                    Io(e, t, o, n[o]) && (r = !0);
                  return r;
                })(e, t, n);
              case 2:
                return (function(e, t, n) {
                  for (var r = t.bindings, o = !1, i = 0; i < n.length; i++)
                    eo(e, t, i, n[i]) && (o = !0);
                  if (o) {
                    var s = "";
                    for (i = 0; i < n.length; i++) s += Di(n[i], r[i]);
                    s = t.text.prefix + s;
                    var a = jr(e, t.nodeIndex).renderText;
                    e.renderer.setValue(a, s);
                  }
                  return o;
                })(e, t, n);
              case 16384:
                return (function(e, t, n) {
                  for (
                    var r = Fr(e, t.nodeIndex),
                      o = r.instance,
                      i = !1,
                      s = void 0,
                      a = 0;
                    a < n.length;
                    a++
                  )
                    Xr(e, t, a, n[a]) &&
                      ((i = !0), (s = wi(e, r, t, a, n[a], s)));
                  return (
                    s && o.ngOnChanges(s),
                    65536 & t.flags && Vr(e, 256, t.nodeIndex) && o.ngOnInit(),
                    262144 & t.flags && o.ngDoCheck(),
                    i
                  );
                })(e, t, n);
              case 32:
              case 64:
              case 128:
                return (function(e, t, n) {
                  for (var r = t.bindings, o = !1, i = 0; i < n.length; i++)
                    eo(e, t, i, n[i]) && (o = !0);
                  if (o) {
                    var s = Lr(e, t.nodeIndex),
                      a = void 0;
                    switch (201347067 & t.flags) {
                      case 32:
                        a = n;
                        break;
                      case 64:
                        for (a = {}, i = 0; i < n.length; i++)
                          a[r[i].name] = n[i];
                        break;
                      case 128:
                        var u = n[0],
                          c = n.slice(1);
                        a = u.transform.apply(u, l(c));
                    }
                    s.value = a;
                  }
                  return o;
                })(e, t, n);
              default:
                throw "unreachable";
            }
          })(e, t, r);
    }
    function Qi(e) {
      var t = e.def;
      if (4 & t.nodeFlags)
        for (var n = 0; n < t.nodes.length; n++) {
          var r = t.nodes[n];
          if (4 & r.flags) {
            var o = Hr(e, n).template._projectedViews;
            if (o)
              for (var i = 0; i < o.length; i++) {
                var s = o[i];
                (s.state |= 32), ro(s, e);
              }
          } else 0 == (4 & r.childFlags) && (n += r.childCount);
        }
    }
    function qi(e, t, n, r, o, i, s, a, u, c, l, d, f) {
      return (
        0 === n
          ? (function(e, t, n, r, o, i, s, a, u, c, l, d) {
              var f = t.bindings.length;
              f > 0 && to(e, t, 0, n),
                f > 1 && to(e, t, 1, r),
                f > 2 && to(e, t, 2, o),
                f > 3 && to(e, t, 3, i),
                f > 4 && to(e, t, 4, s),
                f > 5 && to(e, t, 5, a),
                f > 6 && to(e, t, 6, u),
                f > 7 && to(e, t, 7, c),
                f > 8 && to(e, t, 8, l),
                f > 9 && to(e, t, 9, d);
            })(e, t, r, o, i, s, a, u, c, l, d, f)
          : (function(e, t, n) {
              for (var r = 0; r < n.length; r++) to(e, t, r, n[r]);
            })(e, t, r),
        !1
      );
    }
    function Wi(e, t) {
      if (Br(e, t.nodeIndex).dirty)
        throw Ur(
          zr.createDebugContext(e, t.nodeIndex),
          "Query " + t.query.id + " not dirty",
          "Query " + t.query.id + " dirty",
          0 != (1 & e.state)
        );
    }
    function Gi(e) {
      if (!(128 & e.state)) {
        if (
          (Ji(e, Ki.Destroy), Yi(e, Ki.Destroy), Ei(e, 131072), e.disposables)
        )
          for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
        !(function(e) {
          if (16 & e.state) {
            var t = io(e);
            if (t) {
              var n = t.template._projectedViews;
              n && (Lo(n, n.indexOf(e)), zr.dirtyParentQueries(e));
            }
          }
        })(e),
          e.renderer.destroyNode &&
            (function(e) {
              for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                var r = e.def.nodes[n];
                1 & r.flags
                  ? e.renderer.destroyNode(Hr(e, n).renderElement)
                  : 2 & r.flags
                  ? e.renderer.destroyNode(jr(e, n).renderText)
                  : (67108864 & r.flags || 134217728 & r.flags) &&
                    Br(e, n).destroy();
              }
            })(e),
          uo(e) && e.renderer.destroy(),
          (e.state |= 128);
      }
    }
    var Ki = (function(e) {
      return (
        (e[(e.CreateViewNodes = 0)] = "CreateViewNodes"),
        (e[(e.CheckNoChanges = 1)] = "CheckNoChanges"),
        (e[(e.CheckNoChangesProjectedViews = 2)] =
          "CheckNoChangesProjectedViews"),
        (e[(e.CheckAndUpdate = 3)] = "CheckAndUpdate"),
        (e[(e.CheckAndUpdateProjectedViews = 4)] =
          "CheckAndUpdateProjectedViews"),
        (e[(e.Destroy = 5)] = "Destroy"),
        e
      );
    })({});
    function Yi(e, t) {
      var n = e.def;
      if (33554432 & n.nodeFlags)
        for (var r = 0; r < n.nodes.length; r++) {
          var o = n.nodes[r];
          33554432 & o.flags
            ? $i(Hr(e, r).componentView, t)
            : 0 == (33554432 & o.childFlags) && (r += o.childCount);
        }
    }
    function Ji(e, t) {
      var n = e.def;
      if (16777216 & n.nodeFlags)
        for (var r = 0; r < n.nodes.length; r++) {
          var o = n.nodes[r];
          if (16777216 & o.flags)
            for (
              var i = Hr(e, r).viewContainer._embeddedViews, s = 0;
              s < i.length;
              s++
            )
              $i(i[s], t);
          else 0 == (16777216 & o.childFlags) && (r += o.childCount);
        }
    }
    function $i(e, t) {
      var n = e.state;
      switch (t) {
        case Ki.CheckNoChanges:
          0 == (128 & n) &&
            (12 == (12 & n)
              ? zi(e)
              : 64 & n && Xi(e, Ki.CheckNoChangesProjectedViews));
          break;
        case Ki.CheckNoChangesProjectedViews:
          0 == (128 & n) && (32 & n ? zi(e) : 64 & n && Xi(e, t));
          break;
        case Ki.CheckAndUpdate:
          0 == (128 & n) &&
            (12 == (12 & n)
              ? Ui(e)
              : 64 & n && Xi(e, Ki.CheckAndUpdateProjectedViews));
          break;
        case Ki.CheckAndUpdateProjectedViews:
          0 == (128 & n) && (32 & n ? Ui(e) : 64 & n && Xi(e, t));
          break;
        case Ki.Destroy:
          Gi(e);
          break;
        case Ki.CreateViewNodes:
          Bi(e);
      }
    }
    function Xi(e, t) {
      Ji(e, t), Yi(e, t);
    }
    function es(e, t, n, r) {
      if (e.def.nodeFlags & t && e.def.nodeFlags & n)
        for (var o = e.def.nodes.length, i = 0; i < o; i++) {
          var s = e.def.nodes[i];
          if (s.flags & t && s.flags & n)
            switch ((zr.setCurrentNode(e, s.nodeIndex), r)) {
              case 0:
                Si(e, s);
                break;
              case 1:
                Wi(e, s);
            }
          (s.childFlags & t && s.childFlags & n) || (i += s.childCount);
        }
    }
    var ts = !1;
    function ns(e, t, n, r, o, i) {
      var s = o.injector.get(xt);
      return ji(os(e, o, s, t, n), r, i);
    }
    function rs(e, t, n, r, o, i) {
      var s = o.injector.get(xt),
        a = os(e, o, new Vs(s), t, n),
        u = hs(r);
      return Ps(Cs.create, ji, null, [a, u, i]);
    }
    function os(e, t, n, r, o) {
      var i = t.injector.get(Nt),
        s = t.injector.get(pn),
        a = n.createRenderer(null, null);
      return {
        ngModule: t,
        injector: e,
        projectableNodes: r,
        selectorOrNode: o,
        sanitizer: i,
        rendererFactory: n,
        renderer: a,
        errorHandler: s
      };
    }
    function is(e, t, n, r) {
      var o = hs(n);
      return Ps(Cs.create, Vi, null, [e, t, o, r]);
    }
    function ss(e, t, n, r) {
      return (
        (n = ls.get(t.element.componentProvider.provider.token) || hs(n)),
        Ps(Cs.create, Hi, null, [e, t, n, r])
      );
    }
    function as(e, t, n, r) {
      return ti(
        e,
        t,
        n,
        (function(e) {
          var t = (function(e) {
              var t = !1,
                n = !1;
              return 0 === us.size
                ? { hasOverrides: t, hasDeprecatedOverrides: n }
                : (e.providers.forEach(function(e) {
                    var r = us.get(e.token);
                    3840 & e.flags &&
                      r &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach(function(e) {
                    cs.forEach(function(r, o) {
                      pe(o).providedIn === e &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: t, hasDeprecatedOverrides: n });
            })(e),
            n = t.hasDeprecatedOverrides;
          return t.hasOverrides
            ? ((function(e) {
                for (var t = 0; t < e.providers.length; t++) {
                  var r = e.providers[t];
                  n && (r.flags |= 4096);
                  var o = us.get(r.token);
                  o &&
                    ((r.flags = (-3841 & r.flags) | o.flags),
                    (r.deps = fo(o.deps)),
                    (r.value = o.value));
                }
                if (cs.size > 0) {
                  var i = new Set(e.modules);
                  cs.forEach(function(t, r) {
                    if (i.has(pe(r).providedIn)) {
                      var o = {
                        token: r,
                        flags: t.flags | (n ? 4096 : 0),
                        deps: fo(t.deps),
                        value: t.value,
                        index: e.providers.length
                      };
                      e.providers.push(o), (e.providersByKey[Gr(r)] = o);
                    }
                  });
                }
              })(
                (e = e.factory(function() {
                  return qr;
                }))
              ),
              e)
            : e;
        })(r)
      );
    }
    var us = new Map(),
      cs = new Map(),
      ls = new Map();
    function ds(e) {
      var t;
      us.set(e.token, e),
        "function" == typeof e.token &&
          (t = pe(e.token)) &&
          "function" == typeof t.providedIn &&
          cs.set(e.token, e);
    }
    function fs(e, t) {
      var n = vo(t.viewDefFactory),
        r = vo(n.nodes[0].element.componentView);
      ls.set(e, r);
    }
    function ps() {
      us.clear(), cs.clear(), ls.clear();
    }
    function hs(e) {
      if (0 === us.size) return e;
      var t = (function(e) {
        for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
          var o = e.nodes[r];
          1 & o.flags && (n = o),
            n &&
              3840 & o.flags &&
              us.has(o.provider.token) &&
              (t.push(n.nodeIndex), (n = null));
        }
        return t;
      })(e);
      if (0 === t.length) return e;
      e = e.factory(function() {
        return qr;
      });
      for (var n = 0; n < t.length; n++) r(e, t[n]);
      return e;
      function r(e, t) {
        for (var n = t + 1; n < e.nodes.length; n++) {
          var r = e.nodes[n];
          if (1 & r.flags) return;
          if (3840 & r.flags) {
            var o = r.provider,
              i = us.get(o.token);
            i &&
              ((r.flags = (-3841 & r.flags) | i.flags),
              (o.deps = fo(i.deps)),
              (o.value = i.value));
          }
        }
      }
    }
    function vs(e, t, n, r, o, i, s, a, u, c, l, d, f) {
      var p = e.def.nodes[t];
      return (
        Zi(e, p, n, r, o, i, s, a, u, c, l, d, f),
        224 & p.flags ? Lr(e, t).value : void 0
      );
    }
    function ys(e, t, n, r, o, i, s, a, u, c, l, d, f) {
      var p = e.def.nodes[t];
      return (
        qi(e, p, n, r, o, i, s, a, u, c, l, d, f),
        224 & p.flags ? Lr(e, t).value : void 0
      );
    }
    function gs(e) {
      return Ps(Cs.detectChanges, Ui, null, [e]);
    }
    function ms(e) {
      return Ps(Cs.checkNoChanges, zi, null, [e]);
    }
    function bs(e) {
      return Ps(Cs.destroy, Gi, null, [e]);
    }
    var _s,
      ws,
      Es,
      Cs = (function(e) {
        return (
          (e[(e.create = 0)] = "create"),
          (e[(e.detectChanges = 1)] = "detectChanges"),
          (e[(e.checkNoChanges = 2)] = "checkNoChanges"),
          (e[(e.destroy = 3)] = "destroy"),
          (e[(e.handleEvent = 4)] = "handleEvent"),
          e
        );
      })({});
    function xs(e, t) {
      (ws = e), (Es = t);
    }
    function Ts(e, t, n, r) {
      return (
        xs(e, t), Ps(Cs.handleEvent, e.def.handleEvent, null, [e, t, n, r])
      );
    }
    function Ss(e, t) {
      if (128 & e.state) throw Qr(Cs[_s]);
      return (
        xs(e, As(e, 0)),
        e.def.updateDirectives(function(e, n, r) {
          for (var o = [], i = 3; i < arguments.length; i++)
            o[i - 3] = arguments[i];
          var s = e.def.nodes[n];
          return (
            0 === t ? Is(e, s, r, o) : Ns(e, s, r, o),
            16384 & s.flags && xs(e, As(e, n)),
            224 & s.flags ? Lr(e, s.nodeIndex).value : void 0
          );
        }, e)
      );
    }
    function ks(e, t) {
      if (128 & e.state) throw Qr(Cs[_s]);
      return (
        xs(e, Os(e, 0)),
        e.def.updateRenderer(function(e, n, r) {
          for (var o = [], i = 3; i < arguments.length; i++)
            o[i - 3] = arguments[i];
          var s = e.def.nodes[n];
          return (
            0 === t ? Is(e, s, r, o) : Ns(e, s, r, o),
            3 & s.flags && xs(e, Os(e, n)),
            224 & s.flags ? Lr(e, s.nodeIndex).value : void 0
          );
        }, e)
      );
    }
    function Is(e, t, n, r) {
      if (Zi.apply(void 0, l([e, t, n], r))) {
        var o = 1 === n ? r[0] : r;
        if (16384 & t.flags) {
          for (var i = {}, s = 0; s < t.bindings.length; s++) {
            var a = t.bindings[s],
              u = o[s];
            8 & a.flags &&
              (i[
                ((p = a.nonMinifiedName),
                "ng-reflect-" +
                  p.replace(/[$@]/g, "_").replace(He, function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    return "-" + e[1].toLowerCase();
                  }))
              ] = Fe(u));
          }
          var c = t.parent,
            d = Hr(e, c.nodeIndex).renderElement;
          if (c.element.name)
            for (var f in i)
              null != (u = i[f])
                ? e.renderer.setAttribute(d, f, u)
                : e.renderer.removeAttribute(d, f);
          else e.renderer.setValue(d, "bindings=" + JSON.stringify(i, null, 2));
        }
      }
      var p;
    }
    function Ns(e, t, n, r) {
      qi.apply(void 0, l([e, t, n], r));
    }
    function As(e, t) {
      for (var n = t; n < e.def.nodes.length; n++) {
        var r = e.def.nodes[n];
        if (16384 & r.flags && r.bindings && r.bindings.length) return n;
      }
      return null;
    }
    function Os(e, t) {
      for (var n = t; n < e.def.nodes.length; n++) {
        var r = e.def.nodes[n];
        if (3 & r.flags && r.bindings && r.bindings.length) return n;
      }
      return null;
    }
    var Ds = (function() {
      function e(e, t) {
        (this.view = e),
          (this.nodeIndex = t),
          null == t && (this.nodeIndex = t = 0),
          (this.nodeDef = e.def.nodes[t]);
        for (var n = this.nodeDef, r = e; n && 0 == (1 & n.flags); )
          n = n.parent;
        if (!n) for (; !n && r; ) (n = so(r)), (r = r.parent);
        (this.elDef = n), (this.elView = r);
      }
      return (
        Object.defineProperty(e.prototype, "elOrCompView", {
          get: function() {
            return (
              Hr(this.elView, this.elDef.nodeIndex).componentView || this.view
            );
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "injector", {
          get: function() {
            return Jo(this.elView, this.elDef);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "component", {
          get: function() {
            return this.elOrCompView.component;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "context", {
          get: function() {
            return this.elOrCompView.context;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "providerTokens", {
          get: function() {
            var e = [];
            if (this.elDef)
              for (
                var t = this.elDef.nodeIndex + 1;
                t <= this.elDef.nodeIndex + this.elDef.childCount;
                t++
              ) {
                var n = this.elView.def.nodes[t];
                20224 & n.flags && e.push(n.provider.token),
                  (t += n.childCount);
              }
            return e;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "references", {
          get: function() {
            var e = {};
            if (this.elDef) {
              Rs(this.elView, this.elDef, e);
              for (
                var t = this.elDef.nodeIndex + 1;
                t <= this.elDef.nodeIndex + this.elDef.childCount;
                t++
              ) {
                var n = this.elView.def.nodes[t];
                20224 & n.flags && Rs(this.elView, n, e), (t += n.childCount);
              }
            }
            return e;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "componentRenderElement", {
          get: function() {
            var e = (function(e) {
              for (; e && !uo(e); ) e = e.parent;
              return e.parent ? Hr(e.parent, so(e).nodeIndex) : null;
            })(this.elOrCompView);
            return e ? e.renderElement : void 0;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(e.prototype, "renderNode", {
          get: function() {
            return 2 & this.nodeDef.flags
              ? ao(this.view, this.nodeDef)
              : ao(this.elView, this.elDef);
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.logError = function(e) {
          for (var t, n, r = [], o = 1; o < arguments.length; o++)
            r[o - 1] = arguments[o];
          2 & this.nodeDef.flags
            ? ((t = this.view.def), (n = this.nodeDef.nodeIndex))
            : ((t = this.elView.def), (n = this.elDef.nodeIndex));
          var i = (function(e, t) {
              for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
              return n;
            })(t, n),
            s = -1;
          t.factory(function() {
            var t;
            return ++s === i ? (t = e.error).bind.apply(t, l([e], r)) : qr;
          }),
            s < i &&
              (e.error(
                "Illegal state: the ViewDefinitionFactory did not call the logger!"
              ),
              e.error.apply(e, l(r)));
        }),
        e
      );
    })();
    function Rs(e, t, n) {
      for (var r in t.references) n[r] = Ii(e, t, t.references[r]);
    }
    function Ps(e, t, n, r) {
      var o = _s,
        i = ws,
        s = Es;
      try {
        _s = e;
        var a = t.apply(n, r);
        return (ws = i), (Es = s), (_s = o), a;
      } catch (u) {
        if (ln(u) || !ws) throw u;
        throw (function(e, t) {
          return (
            e instanceof Error || (e = new Error(e.toString())), Zr(e, t), e
          );
        })(u, Ms());
      }
    }
    function Ms() {
      return ws ? new Ds(ws, Es) : null;
    }
    var Vs = (function() {
        function e(e) {
          this.delegate = e;
        }
        return (
          (e.prototype.createRenderer = function(e, t) {
            return new js(this.delegate.createRenderer(e, t));
          }),
          (e.prototype.begin = function() {
            this.delegate.begin && this.delegate.begin();
          }),
          (e.prototype.end = function() {
            this.delegate.end && this.delegate.end();
          }),
          (e.prototype.whenRenderingDone = function() {
            return this.delegate.whenRenderingDone
              ? this.delegate.whenRenderingDone()
              : Promise.resolve(null);
          }),
          e
        );
      })(),
      js = (function() {
        function e(e) {
          (this.delegate = e),
            (this.debugContextFactory = Ms),
            (this.data = this.delegate.data);
        }
        return (
          (e.prototype.createDebugContext = function(e) {
            return this.debugContextFactory(e);
          }),
          (e.prototype.destroyNode = function(e) {
            !(function(e) {
              dr.delete(e.nativeNode);
            })(fr(e)),
              this.delegate.destroyNode && this.delegate.destroyNode(e);
          }),
          (e.prototype.destroy = function() {
            this.delegate.destroy();
          }),
          (e.prototype.createElement = function(e, t) {
            var n = this.delegate.createElement(e, t),
              r = this.createDebugContext(n);
            if (r) {
              var o = new lr(n, null, r);
              (o.name = e), pr(o);
            }
            return n;
          }),
          (e.prototype.createComment = function(e) {
            var t = this.delegate.createComment(e),
              n = this.createDebugContext(t);
            return n && pr(new cr(t, null, n)), t;
          }),
          (e.prototype.createText = function(e) {
            var t = this.delegate.createText(e),
              n = this.createDebugContext(t);
            return n && pr(new cr(t, null, n)), t;
          }),
          (e.prototype.appendChild = function(e, t) {
            var n = fr(e),
              r = fr(t);
            n && r && n instanceof lr && n.addChild(r),
              this.delegate.appendChild(e, t);
          }),
          (e.prototype.insertBefore = function(e, t, n) {
            var r = fr(e),
              o = fr(t),
              i = fr(n);
            r && o && r instanceof lr && r.insertBefore(i, o),
              this.delegate.insertBefore(e, t, n);
          }),
          (e.prototype.removeChild = function(e, t) {
            var n = fr(e),
              r = fr(t);
            n && r && n instanceof lr && n.removeChild(r),
              this.delegate.removeChild(e, t);
          }),
          (e.prototype.selectRootElement = function(e, t) {
            var n = this.delegate.selectRootElement(e, t),
              r = Ms();
            return r && pr(new lr(n, null, r)), n;
          }),
          (e.prototype.setAttribute = function(e, t, n, r) {
            var o = fr(e);
            o && o instanceof lr && (o.attributes[r ? r + ":" + t : t] = n),
              this.delegate.setAttribute(e, t, n, r);
          }),
          (e.prototype.removeAttribute = function(e, t, n) {
            var r = fr(e);
            r && r instanceof lr && (r.attributes[n ? n + ":" + t : t] = null),
              this.delegate.removeAttribute(e, t, n);
          }),
          (e.prototype.addClass = function(e, t) {
            var n = fr(e);
            n && n instanceof lr && (n.classes[t] = !0),
              this.delegate.addClass(e, t);
          }),
          (e.prototype.removeClass = function(e, t) {
            var n = fr(e);
            n && n instanceof lr && (n.classes[t] = !1),
              this.delegate.removeClass(e, t);
          }),
          (e.prototype.setStyle = function(e, t, n, r) {
            var o = fr(e);
            o && o instanceof lr && (o.styles[t] = n),
              this.delegate.setStyle(e, t, n, r);
          }),
          (e.prototype.removeStyle = function(e, t, n) {
            var r = fr(e);
            r && r instanceof lr && (r.styles[t] = null),
              this.delegate.removeStyle(e, t, n);
          }),
          (e.prototype.setProperty = function(e, t, n) {
            var r = fr(e);
            r && r instanceof lr && (r.properties[t] = n),
              this.delegate.setProperty(e, t, n);
          }),
          (e.prototype.listen = function(e, t, n) {
            if ("string" != typeof e) {
              var r = fr(e);
              r && r.listeners.push(new ur(t, n));
            }
            return this.delegate.listen(e, t, n);
          }),
          (e.prototype.parentNode = function(e) {
            return this.delegate.parentNode(e);
          }),
          (e.prototype.nextSibling = function(e) {
            return this.delegate.nextSibling(e);
          }),
          (e.prototype.setValue = function(e, t) {
            return this.delegate.setValue(e, t);
          }),
          e
        );
      })();
    function Hs(e, t, n) {
      return new Fs(e, t, n);
    }
    var Fs = (function(e) {
        function t(t, n, r) {
          var o = e.call(this) || this;
          return (
            (o.moduleType = t),
            (o._bootstrapComponents = n),
            (o._ngModuleDefFactory = r),
            o
          );
        }
        return (
          o(t, e),
          (t.prototype.create = function(e) {
            !(function() {
              if (!ts) {
                ts = !0;
                var e = Rt()
                  ? {
                      setCurrentNode: xs,
                      createRootView: rs,
                      createEmbeddedView: is,
                      createComponentView: ss,
                      createNgModuleRef: as,
                      overrideProvider: ds,
                      overrideComponentView: fs,
                      clearOverrides: ps,
                      checkAndUpdateView: gs,
                      checkNoChangesView: ms,
                      destroyView: bs,
                      createDebugContext: function(e, t) {
                        return new Ds(e, t);
                      },
                      handleEvent: Ts,
                      updateDirectives: Ss,
                      updateRenderer: ks
                    }
                  : {
                      setCurrentNode: function() {},
                      createRootView: ns,
                      createEmbeddedView: Vi,
                      createComponentView: Hi,
                      createNgModuleRef: ti,
                      overrideProvider: qr,
                      overrideComponentView: qr,
                      clearOverrides: qr,
                      checkAndUpdateView: Ui,
                      checkNoChangesView: zi,
                      destroyView: Gi,
                      createDebugContext: function(e, t) {
                        return new Ds(e, t);
                      },
                      handleEvent: function(e, t, n, r) {
                        return e.def.handleEvent(e, t, n, r);
                      },
                      updateDirectives: function(e, t) {
                        return e.def.updateDirectives(0 === t ? vs : ys, e);
                      },
                      updateRenderer: function(e, t) {
                        return e.def.updateRenderer(0 === t ? vs : ys, e);
                      }
                    };
                (zr.setCurrentNode = e.setCurrentNode),
                  (zr.createRootView = e.createRootView),
                  (zr.createEmbeddedView = e.createEmbeddedView),
                  (zr.createComponentView = e.createComponentView),
                  (zr.createNgModuleRef = e.createNgModuleRef),
                  (zr.overrideProvider = e.overrideProvider),
                  (zr.overrideComponentView = e.overrideComponentView),
                  (zr.clearOverrides = e.clearOverrides),
                  (zr.checkAndUpdateView = e.checkAndUpdateView),
                  (zr.checkNoChangesView = e.checkNoChangesView),
                  (zr.destroyView = e.destroyView),
                  (zr.resolveDep = bi),
                  (zr.createDebugContext = e.createDebugContext),
                  (zr.handleEvent = e.handleEvent),
                  (zr.updateDirectives = e.updateDirectives),
                  (zr.updateRenderer = e.updateRenderer),
                  (zr.dirtyParentQueries = Ti);
              }
            })();
            var t = (function(e) {
              var t = Array.from(e.providers),
                n = Array.from(e.modules),
                r = {};
              for (var o in e.providersByKey) r[o] = e.providersByKey[o];
              return {
                factory: e.factory,
                isRoot: e.isRoot,
                providers: t,
                modules: n,
                providersByKey: r
              };
            })(vo(this._ngModuleDefFactory));
            return zr.createNgModuleRef(
              this.moduleType,
              e || Ye.NULL,
              this._bootstrapComponents,
              t
            );
          }),
          t
        );
      })(_t),
      Ls = Element.prototype,
      Bs =
        Ls.matches ||
        Ls.matchesSelector ||
        Ls.mozMatchesSelector ||
        Ls.msMatchesSelector ||
        Ls.oMatchesSelector ||
        Ls.webkitMatchesSelector,
      zs = {
        schedule: function(e, t) {
          var n = setTimeout(e, t);
          return function() {
            return clearTimeout(n);
          };
        },
        scheduleBeforeRender: function(e) {
          if ("undefined" == typeof window) return zs.schedule(e, 0);
          if (void 0 === window.requestAnimationFrame)
            return zs.schedule(e, 16);
          var t = window.requestAnimationFrame(e);
          return function() {
            return window.cancelAnimationFrame(t);
          };
        }
      };
    function Us(e, t, n) {
      var r = n;
      return (
        (function(e) {
          return !!e && e.nodeType === Node.ELEMENT_NODE;
        })(e) &&
          t.some(function(t, n) {
            return !(
              "*" === t ||
              !(function(t, n) {
                return Bs.call(e, n);
              })(0, t) ||
              ((r = n), 0)
            );
          }),
        r
      );
    }
    var Zs = (function() {
        function e(e, t) {
          (this.component = e),
            (this.injector = t),
            (this.componentFactory = t.get(yt).resolveComponentFactory(e));
        }
        return (
          (e.prototype.create = function(e) {
            return new Qs(this.componentFactory, e);
          }),
          e
        );
      })(),
      Qs = (function() {
        function e(e, t) {
          (this.componentFactory = e),
            (this.injector = t),
            (this.inputChanges = null),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.uninitializedInputs = new Set());
        }
        return (
          (e.prototype.connect = function(e) {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            this.componentRef || this.initializeComponent(e);
          }),
          (e.prototype.disconnect = function() {
            var e = this;
            this.componentRef &&
              null === this.scheduledDestroyFn &&
              (this.scheduledDestroyFn = zs.schedule(function() {
                e.componentRef &&
                  (e.componentRef.destroy(), (e.componentRef = null));
              }, 10));
          }),
          (e.prototype.getInputValue = function(e) {
            return this.componentRef
              ? this.componentRef.instance[e]
              : this.initialInputValues.get(e);
          }),
          (e.prototype.setInputValue = function(e, t) {
            var n, r;
            (n = t) === (r = this.getInputValue(e)) ||
              (n != n && r != r) ||
              (this.componentRef
                ? (this.recordInputChange(e, t),
                  (this.componentRef.instance[e] = t),
                  this.scheduleDetectChanges())
                : this.initialInputValues.set(e, t));
          }),
          (e.prototype.initializeComponent = function(e) {
            var t = Ye.create({ providers: [], parent: this.injector }),
              n = (function(t, n) {
                var r = e.childNodes,
                  o = n.map(function() {
                    return [];
                  }),
                  i = -1;
                n.some(function(e, t) {
                  return "*" === e && ((i = t), !0);
                });
                for (var s = 0, a = r.length; s < a; ++s) {
                  var u = r[s],
                    c = Us(u, n, i);
                  -1 !== c && o[c].push(u);
                }
                return o;
              })(0, this.componentFactory.ngContentSelectors);
            (this.componentRef = this.componentFactory.create(t, n, e)),
              (this.implementsOnChanges =
                "function" == typeof this.componentRef.instance.ngOnChanges),
              this.initializeInputs(),
              this.initializeOutputs(),
              this.detectChanges(),
              this.injector.get(tr).attachView(this.componentRef.hostView);
          }),
          (e.prototype.initializeInputs = function() {
            var e = this;
            this.componentFactory.inputs.forEach(function(t) {
              var n = t.propName,
                r = e.initialInputValues.get(n);
              r ? e.setInputValue(n, r) : e.uninitializedInputs.add(n);
            }),
              this.initialInputValues.clear();
          }),
          (e.prototype.initializeOutputs = function() {
            var e = this,
              t = this.componentFactory.outputs.map(function(t) {
                var n = t.templateName;
                return e.componentRef.instance[t.propName].pipe(
                  K(function(e) {
                    return { name: n, value: e };
                  })
                );
              });
            this.events = ne.apply(void 0, l(t));
          }),
          (e.prototype.callNgOnChanges = function() {
            if (this.implementsOnChanges && null !== this.inputChanges) {
              var e = this.inputChanges;
              (this.inputChanges = null),
                this.componentRef.instance.ngOnChanges(e);
            }
          }),
          (e.prototype.scheduleDetectChanges = function() {
            var e = this;
            this.scheduledChangeDetectionFn ||
              (this.scheduledChangeDetectionFn = zs.scheduleBeforeRender(
                function() {
                  (e.scheduledChangeDetectionFn = null), e.detectChanges();
                }
              ));
          }),
          (e.prototype.recordInputChange = function(e, t) {
            if (!this.componentRef || this.implementsOnChanges) {
              null === this.inputChanges && (this.inputChanges = {});
              var n = this.inputChanges[e];
              if (n) n.currentValue = t;
              else {
                var r = this.uninitializedInputs.has(e);
                this.uninitializedInputs.delete(e);
                var o = r ? void 0 : this.getInputValue(e);
                this.inputChanges[e] = new ze(o, t, r);
              }
            }
          }),
          (e.prototype.detectChanges = function() {
            this.componentRef &&
              (this.callNgOnChanges(),
              this.componentRef.changeDetectorRef.detectChanges());
          }),
          e
        );
      })(),
      qs = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.ngElementEventsSubscription = null), t;
        }
        return o(t, e), t;
      })(HTMLElement),
      Ws = (function() {
        function e() {}
        return (e.prototype.ngOnInit = function() {}), e;
      })(),
      Gs = (function() {
        function e(e) {
          var t,
            n,
            r,
            i,
            s,
            a,
            u =
              ((n = { injector: e }),
              (r = (function(e, t) {
                return n.injector.get(yt).resolveComponentFactory(e).inputs;
              })((t = Ws))),
              (i = n.strategyFactory || new Zs(t, n.injector)),
              (s = (function(e) {
                var t = {};
                return (
                  e.forEach(function(e) {
                    var n,
                      r = e.propName;
                    t[
                      ((n = e.templateName),
                      n.replace(/[A-Z]/g, function(e) {
                        return "-" + e.toLowerCase();
                      }))
                    ] = r;
                  }),
                  t
                );
              })(r)),
              (a = (function(e) {
                function t(t) {
                  var r = e.call(this) || this;
                  return (r.ngElementStrategy = i.create(t || n.injector)), r;
                }
                return (
                  o(t, e),
                  (t.prototype.attributeChangedCallback = function(e, t, r, o) {
                    this.ngElementStrategy ||
                      (this.ngElementStrategy = i.create(n.injector)),
                      this.ngElementStrategy.setInputValue(s[e], r);
                  }),
                  (t.prototype.connectedCallback = function() {
                    var e = this;
                    this.ngElementStrategy ||
                      (this.ngElementStrategy = i.create(n.injector)),
                      this.ngElementStrategy.connect(this),
                      (this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(
                        function(t) {
                          var n = (function(t, n, r) {
                            if ("function" != typeof CustomEvent) {
                              var o = e.ownerDocument.createEvent(
                                "CustomEvent"
                              );
                              return o.initCustomEvent(n, !1, !1, r), o;
                            }
                            return new CustomEvent(n, {
                              bubbles: !1,
                              cancelable: !1,
                              detail: r
                            });
                          })(0, t.name, t.value);
                          e.dispatchEvent(n);
                        }
                      ));
                  }),
                  (t.prototype.disconnectedCallback = function() {
                    this.ngElementStrategy &&
                      this.ngElementStrategy.disconnect(),
                      this.ngElementEventsSubscription &&
                        (this.ngElementEventsSubscription.unsubscribe(),
                        (this.ngElementEventsSubscription = null));
                  }),
                  (t.observedAttributes = Object.keys(s)),
                  t
                );
              })(qs)),
              r
                .map(function(e) {
                  return e.propName;
                })
                .forEach(function(e) {
                  Object.defineProperty(a.prototype, e, {
                    get: function() {
                      return this.ngElementStrategy.getInputValue(e);
                    },
                    set: function(t) {
                      this.ngElementStrategy.setInputValue(e, t);
                    },
                    configurable: !0,
                    enumerable: !0
                  });
                }),
              a);
          customElements.define("app-greet", u);
        }
        return (e.prototype.ngDoBootstap = function() {}), e;
      })(),
      Ks = Jr({ encapsulation: 2, styles: [], data: {} });
    function Ys(e) {
      return Ri(
        0,
        [
          (e()(),
          xo(0, 0, null, null, 1, "div", [], null, null, null, null, null)),
          (e()(), Ai(1, null, ["Hello + ", ""])),
          (e()(), Ai(-1, null, [" ZOZOZO"]))
        ],
        null,
        function(e, t) {
          e(t, 1, 0, t.component.name);
        }
      );
    }
    function Js(e) {
      return Ri(
        0,
        [
          (e()(),
          xo(0, 0, null, null, 1, "app-greet", [], null, null, null, Ys, Ks)),
          di(1, 114688, null, 0, Ws, [], null, null)
        ],
        function(e, t) {
          e(t, 1, 0);
        },
        null
      );
    }
    var $s = zo("app-greet", Ws, Js, { name: "name" }, {}, []),
      Xs = (function() {
        return function() {};
      })(),
      ea = void 0,
      ta = [
        "en",
        [["a", "p"], ["AM", "PM"], ea],
        [["AM", "PM"], ea, ea],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        ],
        ea,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        ],
        ea,
        [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", ea, "{1} 'at' {0}", ea],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":"
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "$",
        "US Dollar",
        {},
        function(e) {
          var t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        }
      ],
      na = {},
      ra = (function(e) {
        return (
          (e[(e.Zero = 0)] = "Zero"),
          (e[(e.One = 1)] = "One"),
          (e[(e.Two = 2)] = "Two"),
          (e[(e.Few = 3)] = "Few"),
          (e[(e.Many = 4)] = "Many"),
          (e[(e.Other = 5)] = "Other"),
          e
        );
      })({}),
      oa = new he("UseV4Plurals"),
      ia = (function() {
        return function() {};
      })(),
      sa = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r.locale = t), (r.deprecatedPluralFn = n), r;
        }
        return (
          o(t, e),
          (t.prototype.getPluralCategory = function(e, t) {
            switch (
              this.deprecatedPluralFn
                ? this.deprecatedPluralFn(t || this.locale, e)
                : (function(e) {
                    return (function(e) {
                      var t = e.toLowerCase().replace(/_/g, "-"),
                        n = na[t];
                      if (n) return n;
                      var r = t.split("-")[0];
                      if ((n = na[r])) return n;
                      if ("en" === r) return ta;
                      throw new Error(
                        'Missing locale data for the locale "' + e + '".'
                      );
                    })(e)[18];
                  })(t || this.locale)(e)
            ) {
              case ra.Zero:
                return "zero";
              case ra.One:
                return "one";
              case ra.Two:
                return "two";
              case ra.Few:
                return "few";
              case ra.Many:
                return "many";
              default:
                return "other";
            }
          }),
          t
        );
      })(ia),
      aa = (function() {
        return function() {};
      })(),
      ua = new he("DocumentToken"),
      ca = "server",
      la = null;
    function da() {
      return la;
    }
    var fa,
      pa = {
        class: "className",
        innerHtml: "innerHTML",
        readonly: "readOnly",
        tabindex: "tabIndex"
      },
      ha = {
        "\b": "Backspace",
        "\t": "Tab",
        "\x7f": "Delete",
        "\x1b": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS"
      },
      va = {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        F: "6",
        G: "7",
        H: "8",
        I: "9",
        J: "*",
        K: "+",
        M: "-",
        N: ".",
        O: "/",
        "`": "0",
        "\x90": "NumLock"
      };
    be.Node &&
      (fa =
        be.Node.prototype.contains ||
        function(e) {
          return !!(16 & this.compareDocumentPosition(e));
        });
    var ya,
      ga = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.parse = function(e) {
            throw new Error("parse not implemented");
          }),
          (t.makeCurrent = function() {
            var e;
            (e = new t()), la || (la = e);
          }),
          (t.prototype.hasProperty = function(e, t) {
            return t in e;
          }),
          (t.prototype.setProperty = function(e, t, n) {
            e[t] = n;
          }),
          (t.prototype.getProperty = function(e, t) {
            return e[t];
          }),
          (t.prototype.invoke = function(e, t, n) {
            var r;
            (r = e)[t].apply(r, l(n));
          }),
          (t.prototype.logError = function(e) {
            window.console &&
              (console.error ? console.error(e) : console.log(e));
          }),
          (t.prototype.log = function(e) {
            window.console && window.console.log && window.console.log(e);
          }),
          (t.prototype.logGroup = function(e) {
            window.console && window.console.group && window.console.group(e);
          }),
          (t.prototype.logGroupEnd = function() {
            window.console &&
              window.console.groupEnd &&
              window.console.groupEnd();
          }),
          Object.defineProperty(t.prototype, "attrToPropMap", {
            get: function() {
              return pa;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.contains = function(e, t) {
            return fa.call(e, t);
          }),
          (t.prototype.querySelector = function(e, t) {
            return e.querySelector(t);
          }),
          (t.prototype.querySelectorAll = function(e, t) {
            return e.querySelectorAll(t);
          }),
          (t.prototype.on = function(e, t, n) {
            e.addEventListener(t, n, !1);
          }),
          (t.prototype.onAndCancel = function(e, t, n) {
            return (
              e.addEventListener(t, n, !1),
              function() {
                e.removeEventListener(t, n, !1);
              }
            );
          }),
          (t.prototype.dispatchEvent = function(e, t) {
            e.dispatchEvent(t);
          }),
          (t.prototype.createMouseEvent = function(e) {
            var t = this.getDefaultDocument().createEvent("MouseEvent");
            return t.initEvent(e, !0, !0), t;
          }),
          (t.prototype.createEvent = function(e) {
            var t = this.getDefaultDocument().createEvent("Event");
            return t.initEvent(e, !0, !0), t;
          }),
          (t.prototype.preventDefault = function(e) {
            e.preventDefault(), (e.returnValue = !1);
          }),
          (t.prototype.isPrevented = function(e) {
            return (
              e.defaultPrevented || (null != e.returnValue && !e.returnValue)
            );
          }),
          (t.prototype.getInnerHTML = function(e) {
            return e.innerHTML;
          }),
          (t.prototype.getTemplateContent = function(e) {
            return "content" in e && this.isTemplateElement(e)
              ? e.content
              : null;
          }),
          (t.prototype.getOuterHTML = function(e) {
            return e.outerHTML;
          }),
          (t.prototype.nodeName = function(e) {
            return e.nodeName;
          }),
          (t.prototype.nodeValue = function(e) {
            return e.nodeValue;
          }),
          (t.prototype.type = function(e) {
            return e.type;
          }),
          (t.prototype.content = function(e) {
            return this.hasProperty(e, "content") ? e.content : e;
          }),
          (t.prototype.firstChild = function(e) {
            return e.firstChild;
          }),
          (t.prototype.nextSibling = function(e) {
            return e.nextSibling;
          }),
          (t.prototype.parentElement = function(e) {
            return e.parentNode;
          }),
          (t.prototype.childNodes = function(e) {
            return e.childNodes;
          }),
          (t.prototype.childNodesAsList = function(e) {
            for (
              var t = e.childNodes, n = new Array(t.length), r = 0;
              r < t.length;
              r++
            )
              n[r] = t[r];
            return n;
          }),
          (t.prototype.clearNodes = function(e) {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          }),
          (t.prototype.appendChild = function(e, t) {
            e.appendChild(t);
          }),
          (t.prototype.removeChild = function(e, t) {
            e.removeChild(t);
          }),
          (t.prototype.replaceChild = function(e, t, n) {
            e.replaceChild(t, n);
          }),
          (t.prototype.remove = function(e) {
            return e.parentNode && e.parentNode.removeChild(e), e;
          }),
          (t.prototype.insertBefore = function(e, t, n) {
            e.insertBefore(n, t);
          }),
          (t.prototype.insertAllBefore = function(e, t, n) {
            n.forEach(function(n) {
              return e.insertBefore(n, t);
            });
          }),
          (t.prototype.insertAfter = function(e, t, n) {
            e.insertBefore(n, t.nextSibling);
          }),
          (t.prototype.setInnerHTML = function(e, t) {
            e.innerHTML = t;
          }),
          (t.prototype.getText = function(e) {
            return e.textContent;
          }),
          (t.prototype.setText = function(e, t) {
            e.textContent = t;
          }),
          (t.prototype.getValue = function(e) {
            return e.value;
          }),
          (t.prototype.setValue = function(e, t) {
            e.value = t;
          }),
          (t.prototype.getChecked = function(e) {
            return e.checked;
          }),
          (t.prototype.setChecked = function(e, t) {
            e.checked = t;
          }),
          (t.prototype.createComment = function(e) {
            return this.getDefaultDocument().createComment(e);
          }),
          (t.prototype.createTemplate = function(e) {
            var t = this.getDefaultDocument().createElement("template");
            return (t.innerHTML = e), t;
          }),
          (t.prototype.createElement = function(e, t) {
            return (t = t || this.getDefaultDocument()).createElement(e);
          }),
          (t.prototype.createElementNS = function(e, t, n) {
            return (n = n || this.getDefaultDocument()).createElementNS(e, t);
          }),
          (t.prototype.createTextNode = function(e, t) {
            return (t = t || this.getDefaultDocument()).createTextNode(e);
          }),
          (t.prototype.createScriptTag = function(e, t, n) {
            var r = (n = n || this.getDefaultDocument()).createElement(
              "SCRIPT"
            );
            return r.setAttribute(e, t), r;
          }),
          (t.prototype.createStyleElement = function(e, t) {
            var n = (t = t || this.getDefaultDocument()).createElement("style");
            return this.appendChild(n, this.createTextNode(e, t)), n;
          }),
          (t.prototype.createShadowRoot = function(e) {
            return e.createShadowRoot();
          }),
          (t.prototype.getShadowRoot = function(e) {
            return e.shadowRoot;
          }),
          (t.prototype.getHost = function(e) {
            return e.host;
          }),
          (t.prototype.clone = function(e) {
            return e.cloneNode(!0);
          }),
          (t.prototype.getElementsByClassName = function(e, t) {
            return e.getElementsByClassName(t);
          }),
          (t.prototype.getElementsByTagName = function(e, t) {
            return e.getElementsByTagName(t);
          }),
          (t.prototype.classList = function(e) {
            return Array.prototype.slice.call(e.classList, 0);
          }),
          (t.prototype.addClass = function(e, t) {
            e.classList.add(t);
          }),
          (t.prototype.removeClass = function(e, t) {
            e.classList.remove(t);
          }),
          (t.prototype.hasClass = function(e, t) {
            return e.classList.contains(t);
          }),
          (t.prototype.setStyle = function(e, t, n) {
            e.style[t] = n;
          }),
          (t.prototype.removeStyle = function(e, t) {
            e.style[t] = "";
          }),
          (t.prototype.getStyle = function(e, t) {
            return e.style[t];
          }),
          (t.prototype.hasStyle = function(e, t, n) {
            var r = this.getStyle(e, t) || "";
            return n ? r == n : r.length > 0;
          }),
          (t.prototype.tagName = function(e) {
            return e.tagName;
          }),
          (t.prototype.attributeMap = function(e) {
            for (
              var t = new Map(), n = e.attributes, r = 0;
              r < n.length;
              r++
            ) {
              var o = n.item(r);
              t.set(o.name, o.value);
            }
            return t;
          }),
          (t.prototype.hasAttribute = function(e, t) {
            return e.hasAttribute(t);
          }),
          (t.prototype.hasAttributeNS = function(e, t, n) {
            return e.hasAttributeNS(t, n);
          }),
          (t.prototype.getAttribute = function(e, t) {
            return e.getAttribute(t);
          }),
          (t.prototype.getAttributeNS = function(e, t, n) {
            return e.getAttributeNS(t, n);
          }),
          (t.prototype.setAttribute = function(e, t, n) {
            e.setAttribute(t, n);
          }),
          (t.prototype.setAttributeNS = function(e, t, n, r) {
            e.setAttributeNS(t, n, r);
          }),
          (t.prototype.removeAttribute = function(e, t) {
            e.removeAttribute(t);
          }),
          (t.prototype.removeAttributeNS = function(e, t, n) {
            e.removeAttributeNS(t, n);
          }),
          (t.prototype.templateAwareRoot = function(e) {
            return this.isTemplateElement(e) ? this.content(e) : e;
          }),
          (t.prototype.createHtmlDocument = function() {
            return document.implementation.createHTMLDocument("fakeTitle");
          }),
          (t.prototype.getDefaultDocument = function() {
            return document;
          }),
          (t.prototype.getBoundingClientRect = function(e) {
            try {
              return e.getBoundingClientRect();
            } catch (t) {
              return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
              };
            }
          }),
          (t.prototype.getTitle = function(e) {
            return e.title;
          }),
          (t.prototype.setTitle = function(e, t) {
            e.title = t || "";
          }),
          (t.prototype.elementMatches = function(e, t) {
            return (
              !!this.isElementNode(e) &&
              ((e.matches && e.matches(t)) ||
                (e.msMatchesSelector && e.msMatchesSelector(t)) ||
                (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
            );
          }),
          (t.prototype.isTemplateElement = function(e) {
            return this.isElementNode(e) && "TEMPLATE" === e.nodeName;
          }),
          (t.prototype.isTextNode = function(e) {
            return e.nodeType === Node.TEXT_NODE;
          }),
          (t.prototype.isCommentNode = function(e) {
            return e.nodeType === Node.COMMENT_NODE;
          }),
          (t.prototype.isElementNode = function(e) {
            return e.nodeType === Node.ELEMENT_NODE;
          }),
          (t.prototype.hasShadowRoot = function(e) {
            return null != e.shadowRoot && e instanceof HTMLElement;
          }),
          (t.prototype.isShadowRoot = function(e) {
            return e instanceof DocumentFragment;
          }),
          (t.prototype.importIntoDoc = function(e) {
            return document.importNode(this.templateAwareRoot(e), !0);
          }),
          (t.prototype.adoptNode = function(e) {
            return document.adoptNode(e);
          }),
          (t.prototype.getHref = function(e) {
            return e.getAttribute("href");
          }),
          (t.prototype.getEventKey = function(e) {
            var t = e.key;
            if (null == t) {
              if (null == (t = e.keyIdentifier)) return "Unidentified";
              t.startsWith("U+") &&
                ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                3 === e.location && va.hasOwnProperty(t) && (t = va[t]));
            }
            return ha[t] || t;
          }),
          (t.prototype.getGlobalEventTarget = function(e, t) {
            return "window" === t
              ? window
              : "document" === t
              ? e
              : "body" === t
              ? e.body
              : null;
          }),
          (t.prototype.getHistory = function() {
            return window.history;
          }),
          (t.prototype.getLocation = function() {
            return window.location;
          }),
          (t.prototype.getBaseHref = function(e) {
            var t,
              n =
                ma || (ma = document.querySelector("base"))
                  ? ma.getAttribute("href")
                  : null;
            return null == n
              ? null
              : ((t = n),
                ya || (ya = document.createElement("a")),
                ya.setAttribute("href", t),
                "/" === ya.pathname.charAt(0)
                  ? ya.pathname
                  : "/" + ya.pathname);
          }),
          (t.prototype.resetBaseElement = function() {
            ma = null;
          }),
          (t.prototype.getUserAgent = function() {
            return window.navigator.userAgent;
          }),
          (t.prototype.setData = function(e, t, n) {
            this.setAttribute(e, "data-" + t, n);
          }),
          (t.prototype.getData = function(e, t) {
            return this.getAttribute(e, "data-" + t);
          }),
          (t.prototype.getComputedStyle = function(e) {
            return getComputedStyle(e);
          }),
          (t.prototype.supportsWebAnimation = function() {
            return "function" == typeof Element.prototype.animate;
          }),
          (t.prototype.performanceNow = function() {
            return window.performance && window.performance.now
              ? window.performance.now()
              : new Date().getTime();
          }),
          (t.prototype.supportsCookies = function() {
            return !0;
          }),
          (t.prototype.getCookie = function(e) {
            return (function(e, t) {
              var n, r;
              t = encodeURIComponent(t);
              try {
                for (
                  var o = u(e.split(";")), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var s = i.value,
                    a = s.indexOf("="),
                    l = c(
                      -1 == a ? [s, ""] : [s.slice(0, a), s.slice(a + 1)],
                      2
                    ),
                    d = l[1];
                  if (l[0].trim() === t) return decodeURIComponent(d);
                }
              } catch (f) {
                n = { error: f };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              return null;
            })(document.cookie, e);
          }),
          (t.prototype.setCookie = function(e, t) {
            document.cookie =
              encodeURIComponent(e) + "=" + encodeURIComponent(t);
          }),
          t
        );
      })(
        (function(e) {
          function t() {
            var t = e.call(this) || this;
            (t._animationPrefix = null), (t._transitionEnd = null);
            try {
              var n = t.createElement("div", document);
              if (null != t.getStyle(n, "animationName"))
                t._animationPrefix = "";
              else
                for (
                  var r = ["Webkit", "Moz", "O", "ms"], o = 0;
                  o < r.length;
                  o++
                )
                  if (null != t.getStyle(n, r[o] + "AnimationName")) {
                    t._animationPrefix = "-" + r[o].toLowerCase() + "-";
                    break;
                  }
              var i = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
              };
              Object.keys(i).forEach(function(e) {
                null != t.getStyle(n, e) && (t._transitionEnd = i[e]);
              });
            } catch (s) {
              (t._animationPrefix = null), (t._transitionEnd = null);
            }
            return t;
          }
          return (
            o(t, e),
            (t.prototype.getDistributedNodes = function(e) {
              return e.getDistributedNodes();
            }),
            (t.prototype.resolveAndSetHref = function(e, t, n) {
              e.href = null == n ? t : t + "/../" + n;
            }),
            (t.prototype.supportsDOMEvents = function() {
              return !0;
            }),
            (t.prototype.supportsNativeShadowDOM = function() {
              return "function" == typeof document.body.createShadowRoot;
            }),
            (t.prototype.getAnimationPrefix = function() {
              return this._animationPrefix ? this._animationPrefix : "";
            }),
            (t.prototype.getTransitionEnd = function() {
              return this._transitionEnd ? this._transitionEnd : "";
            }),
            (t.prototype.supportsAnimation = function() {
              return (
                null != this._animationPrefix && null != this._transitionEnd
              );
            }),
            t
          );
        })(
          (function() {
            function e() {
              this.resourceLoaderType = null;
            }
            return (
              Object.defineProperty(e.prototype, "attrToPropMap", {
                get: function() {
                  return this._attrToPropMap;
                },
                set: function(e) {
                  this._attrToPropMap = e;
                },
                enumerable: !0,
                configurable: !0
              }),
              e
            );
          })()
        )
      ),
      ma = null,
      ba = ua;
    function _a() {
      return !!window.history.pushState;
    }
    var wa = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._doc = t), n._init(), n;
        }
        var n;
        return (
          o(t, e),
          (t.prototype._init = function() {
            (this.location = da().getLocation()),
              (this._history = da().getHistory());
          }),
          (t.prototype.getBaseHrefFromDOM = function() {
            return da().getBaseHref(this._doc);
          }),
          (t.prototype.onPopState = function(e) {
            da()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", e, !1);
          }),
          (t.prototype.onHashChange = function(e) {
            da()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", e, !1);
          }),
          Object.defineProperty(t.prototype, "pathname", {
            get: function() {
              return this.location.pathname;
            },
            set: function(e) {
              this.location.pathname = e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "search", {
            get: function() {
              return this.location.search;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "hash", {
            get: function() {
              return this.location.hash;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.pushState = function(e, t, n) {
            _a() ? this._history.pushState(e, t, n) : (this.location.hash = n);
          }),
          (t.prototype.replaceState = function(e, t, n) {
            _a()
              ? this._history.replaceState(e, t, n)
              : (this.location.hash = n);
          }),
          (t.prototype.forward = function() {
            this._history.forward();
          }),
          (t.prototype.back = function() {
            this._history.back();
          }),
          s(
            [
              ((n = Oe(ba)),
              function(e, t) {
                n(e, t, 0);
              }),
              a("design:paramtypes", [Object])
            ],
            t
          )
        );
      })(Xs),
      Ea = new he("TRANSITION_ID"),
      Ca = [
        {
          provide: vn,
          useFactory: function(e, t, n) {
            return function() {
              n.get(yn).donePromise.then(function() {
                var n = da();
                Array.prototype.slice
                  .apply(n.querySelectorAll(t, "style[ng-transition]"))
                  .filter(function(t) {
                    return n.getAttribute(t, "ng-transition") === e;
                  })
                  .forEach(function(e) {
                    return n.remove(e);
                  });
              });
            };
          },
          deps: [Ea, ba, Ye],
          multi: !0
        }
      ],
      xa = (function() {
        function e() {}
        return (
          (e.init = function() {
            var t;
            (t = new e()), (Gn = t);
          }),
          (e.prototype.addToWindow = function(e) {
            (be.getAngularTestability = function(t, n) {
              void 0 === n && (n = !0);
              var r = e.findTestabilityInTree(t, n);
              if (null == r)
                throw new Error("Could not find testability for element.");
              return r;
            }),
              (be.getAllAngularTestabilities = function() {
                return e.getAllTestabilities();
              }),
              (be.getAllAngularRootElements = function() {
                return e.getAllRootElements();
              }),
              be.frameworkStabilizers || (be.frameworkStabilizers = []),
              be.frameworkStabilizers.push(function(e) {
                var t = be.getAllAngularTestabilities(),
                  n = t.length,
                  r = !1,
                  o = function(t) {
                    (r = r || t), 0 == --n && e(r);
                  };
                t.forEach(function(e) {
                  e.whenStable(o);
                });
              });
          }),
          (e.prototype.findTestabilityInTree = function(e, t, n) {
            if (null == t) return null;
            var r = e.getTestability(t);
            return null != r
              ? r
              : n
              ? da().isShadowRoot(t)
                ? this.findTestabilityInTree(e, da().getHost(t), !0)
                : this.findTestabilityInTree(e, da().parentElement(t), !0)
              : null;
          }),
          e
        );
      })();
    function Ta(e, t) {
      ("undefined" != typeof COMPILED && COMPILED) ||
        ((be.ng = be.ng || {})[e] = t);
    }
    var Sa = { ApplicationRef: tr, NgZone: Hn };
    function ka(e) {
      return fr(e);
    }
    var Ia = new he("EventManagerPlugins"),
      Na = (function() {
        function e(e, t) {
          var n = this;
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach(function(e) {
              return (e.manager = n);
            }),
            (this._plugins = e.slice().reverse());
        }
        return (
          (e.prototype.addEventListener = function(e, t, n) {
            return this._findPluginFor(t).addEventListener(e, t, n);
          }),
          (e.prototype.addGlobalEventListener = function(e, t, n) {
            return this._findPluginFor(t).addGlobalEventListener(e, t, n);
          }),
          (e.prototype.getZone = function() {
            return this._zone;
          }),
          (e.prototype._findPluginFor = function(e) {
            var t = this._eventNameToPlugin.get(e);
            if (t) return t;
            for (var n = this._plugins, r = 0; r < n.length; r++) {
              var o = n[r];
              if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o;
            }
            throw new Error("No event manager plugin found for event " + e);
          }),
          e
        );
      })(),
      Aa = (function() {
        function e(e) {
          this._doc = e;
        }
        return (
          (e.prototype.addGlobalEventListener = function(e, t, n) {
            var r = da().getGlobalEventTarget(this._doc, e);
            if (!r)
              throw new Error(
                "Unsupported event target " + r + " for event " + t
              );
            return this.addEventListener(r, t, n);
          }),
          e
        );
      })(),
      Oa = (function() {
        function e() {
          this._stylesSet = new Set();
        }
        return (
          (e.prototype.addStyles = function(e) {
            var t = this,
              n = new Set();
            e.forEach(function(e) {
              t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
            }),
              this.onStylesAdded(n);
          }),
          (e.prototype.onStylesAdded = function(e) {}),
          (e.prototype.getAllStyles = function() {
            return Array.from(this._stylesSet);
          }),
          e
        );
      })(),
      Da = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            (n._doc = t),
            (n._hostNodes = new Set()),
            (n._styleNodes = new Set()),
            n._hostNodes.add(t.head),
            n
          );
        }
        return (
          o(t, e),
          (t.prototype._addStylesToHost = function(e, t) {
            var n = this;
            e.forEach(function(e) {
              var r = n._doc.createElement("style");
              (r.textContent = e), n._styleNodes.add(t.appendChild(r));
            });
          }),
          (t.prototype.addHost = function(e) {
            this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
          }),
          (t.prototype.removeHost = function(e) {
            this._hostNodes.delete(e);
          }),
          (t.prototype.onStylesAdded = function(e) {
            var t = this;
            this._hostNodes.forEach(function(n) {
              return t._addStylesToHost(e, n);
            });
          }),
          (t.prototype.ngOnDestroy = function() {
            this._styleNodes.forEach(function(e) {
              return da().remove(e);
            });
          }),
          t
        );
      })(Oa),
      Ra = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      Pa = /%COMP%/g,
      Ma = "_nghost-%COMP%",
      Va = "_ngcontent-%COMP%";
    function ja(e, t, n) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        Array.isArray(o) ? ja(e, o, n) : ((o = o.replace(Pa, e)), n.push(o));
      }
      return n;
    }
    function Ha(e) {
      return function(t) {
        !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
      };
    }
    var Fa = (function() {
        function e(e, t, n) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new La(e));
        }
        return (
          (e.prototype.createRenderer = function(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case Ae.Emulated:
                var n = this.rendererByCompId.get(t.id);
                return (
                  n ||
                    ((n = new Za(
                      this.eventManager,
                      this.sharedStylesHost,
                      t,
                      this.appId
                    )),
                    this.rendererByCompId.set(t.id, n)),
                  n.applyToHost(e),
                  n
                );
              case Ae.Native:
              case Ae.ShadowDom:
                return new Qa(this.eventManager, this.sharedStylesHost, e, t);
              default:
                if (!this.rendererByCompId.has(t.id)) {
                  var r = ja(t.id, t.styles, []);
                  this.sharedStylesHost.addStyles(r),
                    this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }),
          (e.prototype.begin = function() {}),
          (e.prototype.end = function() {}),
          e
        );
      })(),
      La = (function() {
        function e(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        return (
          (e.prototype.destroy = function() {}),
          (e.prototype.createElement = function(e, t) {
            return t
              ? document.createElementNS(Ra[t], e)
              : document.createElement(e);
          }),
          (e.prototype.createComment = function(e) {
            return document.createComment(e);
          }),
          (e.prototype.createText = function(e) {
            return document.createTextNode(e);
          }),
          (e.prototype.appendChild = function(e, t) {
            e.appendChild(t);
          }),
          (e.prototype.insertBefore = function(e, t, n) {
            e && e.insertBefore(t, n);
          }),
          (e.prototype.removeChild = function(e, t) {
            e && e.removeChild(t);
          }),
          (e.prototype.selectRootElement = function(e, t) {
            var n = "string" == typeof e ? document.querySelector(e) : e;
            if (!n)
              throw new Error(
                'The selector "' + e + '" did not match any elements'
              );
            return t || (n.textContent = ""), n;
          }),
          (e.prototype.parentNode = function(e) {
            return e.parentNode;
          }),
          (e.prototype.nextSibling = function(e) {
            return e.nextSibling;
          }),
          (e.prototype.setAttribute = function(e, t, n, r) {
            if (r) {
              t = r + ":" + t;
              var o = Ra[r];
              o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n);
            } else e.setAttribute(t, n);
          }),
          (e.prototype.removeAttribute = function(e, t, n) {
            if (n) {
              var r = Ra[n];
              r ? e.removeAttributeNS(r, t) : e.removeAttribute(n + ":" + t);
            } else e.removeAttribute(t);
          }),
          (e.prototype.addClass = function(e, t) {
            e.classList.add(t);
          }),
          (e.prototype.removeClass = function(e, t) {
            e.classList.remove(t);
          }),
          (e.prototype.setStyle = function(e, t, n, r) {
            r & Tt.DashCase
              ? e.style.setProperty(t, n, r & Tt.Important ? "important" : "")
              : (e.style[t] = n);
          }),
          (e.prototype.removeStyle = function(e, t, n) {
            n & Tt.DashCase ? e.style.removeProperty(t) : (e.style[t] = "");
          }),
          (e.prototype.setProperty = function(e, t, n) {
            za(t, "property"), (e[t] = n);
          }),
          (e.prototype.setValue = function(e, t) {
            e.nodeValue = t;
          }),
          (e.prototype.listen = function(e, t, n) {
            return (
              za(t, "listener"),
              "string" == typeof e
                ? this.eventManager.addGlobalEventListener(e, t, Ha(n))
                : this.eventManager.addEventListener(e, t, Ha(n))
            );
          }),
          e
        );
      })(),
      Ba = "@".charCodeAt(0);
    function za(e, t) {
      if (e.charCodeAt(0) === Ba)
        throw new Error(
          "Found the synthetic " +
            t +
            " " +
            e +
            '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
        );
    }
    var Ua,
      Za = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t) || this;
          i.component = r;
          var s = ja(o + "-" + r.id, r.styles, []);
          return (
            n.addStyles(s),
            (i.contentAttr = Va.replace(Pa, o + "-" + r.id)),
            (i.hostAttr = Ma.replace(Pa, o + "-" + r.id)),
            i
          );
        }
        return (
          o(t, e),
          (t.prototype.applyToHost = function(t) {
            e.prototype.setAttribute.call(this, t, this.hostAttr, "");
          }),
          (t.prototype.createElement = function(t, n) {
            var r = e.prototype.createElement.call(this, t, n);
            return (
              e.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
            );
          }),
          t
        );
      })(La),
      Qa = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t) || this;
          (i.sharedStylesHost = n),
            (i.hostEl = r),
            (i.component = o),
            (i.shadowRoot =
              o.encapsulation === Ae.ShadowDom
                ? r.attachShadow({ mode: "open" })
                : r.createShadowRoot()),
            i.sharedStylesHost.addHost(i.shadowRoot);
          for (var s = ja(o.id, o.styles, []), a = 0; a < s.length; a++) {
            var u = document.createElement("style");
            (u.textContent = s[a]), i.shadowRoot.appendChild(u);
          }
          return i;
        }
        return (
          o(t, e),
          (t.prototype.nodeOrShadowRoot = function(e) {
            return e === this.hostEl ? this.shadowRoot : e;
          }),
          (t.prototype.destroy = function() {
            this.sharedStylesHost.removeHost(this.shadowRoot);
          }),
          (t.prototype.appendChild = function(t, n) {
            return e.prototype.appendChild.call(
              this,
              this.nodeOrShadowRoot(t),
              n
            );
          }),
          (t.prototype.insertBefore = function(t, n, r) {
            return e.prototype.insertBefore.call(
              this,
              this.nodeOrShadowRoot(t),
              n,
              r
            );
          }),
          (t.prototype.removeChild = function(t, n) {
            return e.prototype.removeChild.call(
              this,
              this.nodeOrShadowRoot(t),
              n
            );
          }),
          (t.prototype.parentNode = function(t) {
            return this.nodeOrShadowRoot(
              e.prototype.parentNode.call(this, this.nodeOrShadowRoot(t))
            );
          }),
          t
        );
      })(La),
      qa =
        ("undefined" != typeof Zone && Zone.__symbol__) ||
        function(e) {
          return "__zone_symbol__" + e;
        },
      Wa = qa("addEventListener"),
      Ga = qa("removeEventListener"),
      Ka = {},
      Ya = "__zone_symbol__propagationStopped";
    "undefined" != typeof Zone && Zone[qa("BLACK_LISTED_EVENTS")] && (Ua = {});
    var Ja = function(e) {
        return !!Ua && Ua.hasOwnProperty(e);
      },
      $a = function(e) {
        var t = Ka[e.type];
        if (t) {
          var n = this[t];
          if (n) {
            var r = [e];
            if (1 === n.length)
              return (s = n[0]).zone !== Zone.current
                ? s.zone.run(s.handler, this, r)
                : s.handler.apply(this, r);
            for (var o = n.slice(), i = 0; i < o.length && !0 !== e[Ya]; i++) {
              var s;
              (s = o[i]).zone !== Zone.current
                ? s.zone.run(s.handler, this, r)
                : s.handler.apply(this, r);
            }
          }
        }
      },
      Xa = (function(e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return (
            (o.ngZone = n),
            (r &&
              (function(e) {
                return e === ca;
              })(r)) ||
              o.patchEvent(),
            o
          );
        }
        return (
          o(t, e),
          (t.prototype.patchEvent = function() {
            if (
              "undefined" != typeof Event &&
              Event &&
              Event.prototype &&
              !Event.prototype.__zone_symbol__stopImmediatePropagation
            ) {
              var e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
                Event.prototype.stopImmediatePropagation);
              Event.prototype.stopImmediatePropagation = function() {
                this && (this[Ya] = !0), e && e.apply(this, arguments);
              };
            }
          }),
          (t.prototype.supports = function(e) {
            return !0;
          }),
          (t.prototype.addEventListener = function(e, t, n) {
            var r = this,
              o = n;
            if (!e[Wa] || (Hn.isInAngularZone() && !Ja(t)))
              e.addEventListener(t, o, !1);
            else {
              var i = Ka[t];
              i || (i = Ka[t] = qa("ANGULAR" + t + "FALSE"));
              var s = e[i],
                a = s && s.length > 0;
              s || (s = e[i] = []);
              var u = Ja(t) ? Zone.root : Zone.current;
              if (0 === s.length) s.push({ zone: u, handler: o });
              else {
                for (var c = !1, l = 0; l < s.length; l++)
                  if (s[l].handler === o) {
                    c = !0;
                    break;
                  }
                c || s.push({ zone: u, handler: o });
              }
              a || e[Wa](t, $a, !1);
            }
            return function() {
              return r.removeEventListener(e, t, o);
            };
          }),
          (t.prototype.removeEventListener = function(e, t, n) {
            var r = e[Ga];
            if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
            var o = Ka[t],
              i = o && e[o];
            if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
            for (var s = !1, a = 0; a < i.length; a++)
              if (i[a].handler === n) {
                (s = !0), i.splice(a, 1);
                break;
              }
            s
              ? 0 === i.length && r.apply(e, [t, $a, !1])
              : e.removeEventListener.apply(e, [t, n, !1]);
          }),
          t
        );
      })(Aa),
      eu = {
        pan: !0,
        panstart: !0,
        panmove: !0,
        panend: !0,
        pancancel: !0,
        panleft: !0,
        panright: !0,
        panup: !0,
        pandown: !0,
        pinch: !0,
        pinchstart: !0,
        pinchmove: !0,
        pinchend: !0,
        pinchcancel: !0,
        pinchin: !0,
        pinchout: !0,
        press: !0,
        pressup: !0,
        rotate: !0,
        rotatestart: !0,
        rotatemove: !0,
        rotateend: !0,
        rotatecancel: !0,
        swipe: !0,
        swipeleft: !0,
        swiperight: !0,
        swipeup: !0,
        swipedown: !0,
        tap: !0
      },
      tu = new he("HammerGestureConfig"),
      nu = new he("HammerLoader"),
      ru = (function() {
        function e() {
          (this.events = []), (this.overrides = {});
        }
        return (
          (e.prototype.buildHammer = function(e) {
            var t = new Hammer(e, this.options);
            for (var n in (t.get("pinch").set({ enable: !0 }),
            t.get("rotate").set({ enable: !0 }),
            this.overrides))
              t.get(n).set(this.overrides[n]);
            return t;
          }),
          e
        );
      })(),
      ou = (function(e) {
        function t(t, n, r, o) {
          var i = e.call(this, t) || this;
          return (i._config = n), (i.console = r), (i.loader = o), i;
        }
        return (
          o(t, e),
          (t.prototype.supports = function(e) {
            return !(
              (!eu.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
              (!window.Hammer &&
                !this.loader &&
                (this.console.warn(
                  'The "' +
                    e +
                    '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'
                ),
                1))
            );
          }),
          (t.prototype.addEventListener = function(e, t, n) {
            var r = this,
              o = this.manager.getZone();
            if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
              var i = !1,
                s = function() {
                  i = !0;
                };
              return (
                this.loader()
                  .then(function() {
                    if (!window.Hammer)
                      return (
                        r.console.warn(
                          "The custom HAMMER_LOADER completed, but Hammer.JS is not present."
                        ),
                        void (s = function() {})
                      );
                    i || (s = r.addEventListener(e, t, n));
                  })
                  .catch(function() {
                    r.console.warn(
                      'The "' +
                        t +
                        '" event cannot be bound because the custom Hammer.JS loader failed.'
                    ),
                      (s = function() {});
                  }),
                function() {
                  s();
                }
              );
            }
            return o.runOutsideAngular(function() {
              var i = r._config.buildHammer(e),
                s = function(e) {
                  o.runGuarded(function() {
                    n(e);
                  });
                };
              return (
                i.on(t, s),
                function() {
                  i.off(t, s), "function" == typeof i.destroy && i.destroy();
                }
              );
            });
          }),
          (t.prototype.isCustomEvent = function(e) {
            return this._config.events.indexOf(e) > -1;
          }),
          t
        );
      })(Aa),
      iu = ["alt", "control", "meta", "shift"],
      su = {
        alt: function(e) {
          return e.altKey;
        },
        control: function(e) {
          return e.ctrlKey;
        },
        meta: function(e) {
          return e.metaKey;
        },
        shift: function(e) {
          return e.shiftKey;
        }
      },
      au = (function(e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        var n;
        return (
          o(t, e),
          (n = t),
          (t.prototype.supports = function(e) {
            return null != n.parseEventName(e);
          }),
          (t.prototype.addEventListener = function(e, t, r) {
            var o = n.parseEventName(t),
              i = n.eventCallback(o.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function() {
              return da().onAndCancel(e, o.domEventName, i);
            });
          }),
          (t.parseEventName = function(e) {
            var t = e.toLowerCase().split("."),
              r = t.shift();
            if (0 === t.length || ("keydown" !== r && "keyup" !== r))
              return null;
            var o = n._normalizeKey(t.pop()),
              i = "";
            if (
              (iu.forEach(function(e) {
                var n = t.indexOf(e);
                n > -1 && (t.splice(n, 1), (i += e + "."));
              }),
              (i += o),
              0 != t.length || 0 === o.length)
            )
              return null;
            var s = {};
            return (s.domEventName = r), (s.fullKey = i), s;
          }),
          (t.getEventFullKey = function(e) {
            var t = "",
              n = da().getEventKey(e);
            return (
              " " === (n = n.toLowerCase())
                ? (n = "space")
                : "." === n && (n = "dot"),
              iu.forEach(function(r) {
                r != n && (0, su[r])(e) && (t += r + ".");
              }),
              (t += n)
            );
          }),
          (t.eventCallback = function(e, t, r) {
            return function(o) {
              n.getEventFullKey(o) === e &&
                r.runGuarded(function() {
                  return t(o);
                });
            };
          }),
          (t._normalizeKey = function(e) {
            switch (e) {
              case "esc":
                return "escape";
              default:
                return e;
            }
          }),
          t
        );
      })(Aa),
      uu = (function() {
        return function() {};
      })(),
      cu = (function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._doc = t), n;
        }
        return (
          o(t, e),
          (t.prototype.sanitize = function(e, t) {
            if (null == t) return null;
            switch (e) {
              case It.NONE:
                return t;
              case It.HTML:
                return t instanceof du
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, "HTML"),
                    (function(e, t) {
                      var n = null;
                      try {
                        Lt = Lt || new Pt(e);
                        var r = t ? String(t) : "";
                        n = Lt.getInertBodyElement(r);
                        var o = 5,
                          i = r;
                        do {
                          if (0 === o)
                            throw new Error(
                              "Failed to sanitize html because the input is unstable"
                            );
                          o--,
                            (r = i),
                            (i = n.innerHTML),
                            (n = Lt.getInertBodyElement(r));
                        } while (r !== i);
                        var s = new Yt(),
                          a = s.sanitizeChildren(en(n) || n);
                        return (
                          Rt() &&
                            s.sanitizedSomething &&
                            console.warn(
                              "WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"
                            ),
                          a
                        );
                      } finally {
                        if (n)
                          for (var u = en(n) || n; u.firstChild; )
                            u.removeChild(u.firstChild);
                      }
                    })(this._doc, String(t)));
              case It.STYLE:
                return t instanceof fu
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, "Style"),
                    (function(e) {
                      if (!(e = String(e).trim())) return "";
                      var t = e.match(sn);
                      return (t && jt(t[1]) === t[1]) ||
                        (e.match(on) &&
                          (function(e) {
                            for (var t = !0, n = !0, r = 0; r < e.length; r++) {
                              var o = e.charAt(r);
                              "'" === o && n
                                ? (t = !t)
                                : '"' === o && t && (n = !n);
                            }
                            return t && n;
                          })(e))
                        ? e
                        : (Rt() &&
                            console.warn(
                              "WARNING: sanitizing unsafe style value " +
                                e +
                                " (see http://g.co/ng/security#xss)."
                            ),
                          "unsafe");
                    })(t));
              case It.SCRIPT:
                if (t instanceof pu)
                  return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, "Script"),
                new Error("unsafe value used in a script context"));
              case It.URL:
                return t instanceof vu || t instanceof hu
                  ? t.changingThisBreaksApplicationSecurity
                  : (this.checkNotSafeValue(t, "URL"), jt(String(t)));
              case It.RESOURCE_URL:
                if (t instanceof vu)
                  return t.changingThisBreaksApplicationSecurity;
                throw (this.checkNotSafeValue(t, "ResourceURL"),
                new Error(
                  "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
                ));
              default:
                throw new Error(
                  "Unexpected SecurityContext " +
                    e +
                    " (see http://g.co/ng/security#xss)"
                );
            }
          }),
          (t.prototype.checkNotSafeValue = function(e, t) {
            if (e instanceof lu)
              throw new Error(
                "Required a safe " +
                  t +
                  ", got a " +
                  e.getTypeName() +
                  " (see http://g.co/ng/security#xss)"
              );
          }),
          (t.prototype.bypassSecurityTrustHtml = function(e) {
            return new du(e);
          }),
          (t.prototype.bypassSecurityTrustStyle = function(e) {
            return new fu(e);
          }),
          (t.prototype.bypassSecurityTrustScript = function(e) {
            return new pu(e);
          }),
          (t.prototype.bypassSecurityTrustUrl = function(e) {
            return new hu(e);
          }),
          (t.prototype.bypassSecurityTrustResourceUrl = function(e) {
            return new vu(e);
          }),
          t
        );
      })(uu),
      lu = (function() {
        function e(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        return (
          (e.prototype.toString = function() {
            return (
              "SafeValue must use [property]=binding: " +
              this.changingThisBreaksApplicationSecurity +
              " (see http://g.co/ng/security#xss)"
            );
          }),
          e
        );
      })(),
      du = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.getTypeName = function() {
            return "HTML";
          }),
          t
        );
      })(lu),
      fu = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.getTypeName = function() {
            return "Style";
          }),
          t
        );
      })(lu),
      pu = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.getTypeName = function() {
            return "Script";
          }),
          t
        );
      })(lu),
      hu = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.getTypeName = function() {
            return "URL";
          }),
          t
        );
      })(lu),
      vu = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.getTypeName = function() {
            return "ResourceURL";
          }),
          t
        );
      })(lu),
      yu = Jn(Nr, "browser", [
        { provide: wn, useValue: "browser" },
        {
          provide: _n,
          useValue: function() {
            ga.makeCurrent(), xa.init();
          },
          multi: !0
        },
        { provide: Xs, useClass: wa, deps: [ba] },
        {
          provide: ba,
          useFactory: function() {
            return document;
          },
          deps: []
        }
      ]);
    function gu() {
      return new pn();
    }
    var mu = (function() {
      function e(e) {
        if (e)
          throw new Error(
            "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
          );
      }
      var t;
      return (
        (t = e),
        (e.withServerTransition = function(e) {
          return {
            ngModule: t,
            providers: [
              { provide: gn, useValue: e.appId },
              { provide: Ea, useExisting: gn },
              Ca
            ]
          };
        }),
        e
      );
    })();
    "undefined" != typeof window && window;
    var bu = Hs(Gs, [], function(e) {
      return (function(e) {
        for (var t = {}, n = [], r = !1, o = 0; o < e.length; o++) {
          var i = e[o];
          i.token === lt && !0 === i.value && (r = !0),
            1073741824 & i.flags && n.push(i.token),
            (i.index = o),
            (t[Gr(i.token)] = i);
        }
        return {
          factory: null,
          providersByKey: t,
          providers: e,
          modules: n,
          isRoot: r
        };
      })([
        Ro(512, yt, gt, [[8, [$s]], [3, yt], bt]),
        Ro(5120, Ar, Rr, [[3, Ar]]),
        Ro(4608, ia, sa, [Ar, [2, oa]]),
        Ro(4608, On, On, []),
        Ro(5120, gn, mn, []),
        Ro(5120, xr, Or, []),
        Ro(5120, Tr, Dr, []),
        Ro(4608, uu, cu, [ua]),
        Ro(6144, Nt, null, [uu]),
        Ro(4608, tu, ru, []),
        Ro(
          5120,
          Ia,
          function(e, t, n, r, o, i, s, a) {
            return [new Xa(e, t, n), new au(r), new ou(o, i, s, a)];
          },
          [ua, Hn, wn, ua, ua, tu, Cn, [2, nu]]
        ),
        Ro(4608, Na, Na, [Ia, Hn]),
        Ro(135680, Da, Da, [ua]),
        Ro(4608, Fa, Fa, [Na, Da, gn]),
        Ro(6144, xt, null, [Fa]),
        Ro(6144, Oa, null, [Da]),
        Ro(4608, qn, qn, [Hn]),
        Ro(1073742336, aa, aa, []),
        Ro(1024, pn, gu, []),
        Ro(
          1024,
          vn,
          function(e) {
            return [
              ((t = e),
              Ta("probe", ka),
              Ta(
                "coreTokens",
                i(
                  {},
                  Sa,
                  (t || []).reduce(function(e, t) {
                    return (e[t.name] = t.token), e;
                  }, {})
                )
              ),
              function() {
                return ka;
              })
            ];
            var t;
          },
          [[2, Yn]]
        ),
        Ro(512, yn, yn, [[2, vn]]),
        Ro(131584, tr, tr, [Hn, Cn, Ye, pn, yt, yn]),
        Ro(1073742336, Pr, Pr, [tr]),
        Ro(1073742336, mu, mu, [[3, mu]]),
        Ro(1073742336, Gs, Gs, [Ye]),
        Ro(256, lt, !0, [])
      ]);
    });
    (function() {
      if (Dt) throw new Error("Cannot enable prod mode after platform setup.");
      Ot = !1;
    })(),
      yu()
        .bootstrapModuleFactory(bu)
        .catch(function(e) {
          return console.error(e);
        });
  }
});
