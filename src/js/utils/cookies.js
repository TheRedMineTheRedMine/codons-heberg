!function (n, e) {
    "object" == typeof exports && "object" == typeof module
        ? module.exports = e() : "function" == typeof define && define.amd
            ? define([], e) : "object" == typeof exports
                ? exports.cookieHandler = e() : n.cookieHandler = e()
} (globalThis, (
    function () {
        return function (n) {
            var e = {};

            const t = (o) => {
                if (e[o]) return e[o].exports;

                var i = e[o] = {
                    i: o,
                    l: false,
                    exports: {}
                };

                return n[o].call(i.exports, i, i.exports, t),
                       i.l = true,
                       i.exports
            }

            return t.m = n,
                   t.c = e,
                   t.d = (n, e, o) => {
                       t.o(n, e) || Object.defineProperty(n, e, {
                           enumerable: true,
                           get: o
                       });
                   },

                   t.r = (n) => {
                       "undefined" != typeof Symbol
                       && Symbol.toStringTag
                       && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
                          Object.defineProperty(n, "__esModule", { value: true });
                   },

                   t.t = (n, e) => {
                       if (
                           (1 & e && (n = t(n)), 8 & e)
                           || (4 & e && "object" == typeof n && n && n.__esModule)
                       ) return n;
                       
                       var o = Object.create(null);

                       if (t.r(o), Object.defineProperty(o, "default", { enumerable: true, value: n }), 2 & e && "string" != typeof n)
                           for (var i in n)
                               t.d(o, i,
                                   function (e) {
                                       return n[e]
                                   }.bind(null, i)
                               );
                        
                       return o;
                   },

                   t.n = (n) => {
                       var e = n && n.__esModule ? n.default : n;
                       return t.d(e, "a", e), e;
                   },

                   t.o = (n, e) => {
                       return Object.prototype.hasOwnProperty.call(n, e);
                   },

                   t.p = "",
                   t(t.s = 0);
        } ([
            n => {
                var d = globalThis.document;
                
                const controller = {
                    setCookie: function (name, value, timeAlive = 3600) {
                        const date = new Date();
                                                
                        date.setTime(date.getTime() + (timeAlive * 1e3)),
                        r = `${name}=${value};${date.toUTCString()};path=/`,
                        d.cookie = r;
                        
                        return r;
                    },

                    getCookie: function (name) {
                        name += "=";

                        for (var c of decodeURIComponent(d.cookie).split(';')) {
                            if (c.charAt(0) === ' ') c = c.substring(1);
                            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                        }

                        return null;
                    },

                    getAllCookies: function () {
                        var r = Array(), b;

                        for (var c of decodeURIComponent(d.cookie).split(';')) {
                            if (c.charAt(0) === ' ') c = c.substring(1);
                            
                            b = c.split('='),
                            r.push({ name: b[0], content: b[1], });
                        }
                        
                        return r;
                    },
                    
                    deleteCookie: (name) => n.exports.getCookie(name) && (d.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`)
                };

                n.exports = controller;
            }
        ])
    }
));
