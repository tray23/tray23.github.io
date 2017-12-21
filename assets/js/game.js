var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    Results: {
        Title: "High score"
    },
    Story: [["    ", "                                 ", "           "], ["Boss", "Hi there! I see it's your first day working at", "Santa's office. Let's go through the basics!"], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["    ", "                                 ", "           "], ["Boss", "Okay, your training is over.", "It's time to Ready, Set, Snow! Good Luck!"], ["Boss", "Now, let's have some fun!", "                   "]],
    Tutorial: {
        "T0-0": "You see, things work a little differently in our office.",
        "T0-0(2)": "We LOVE snowball fights.",
        "T0-1": "If you get hit, your energy bar will decrease.",
        "T0-2": "When your energy bar reaches 0,",
        "T0-2(2)": "you'll be out of the game.",
        "T0-3": "Tap on the co-worker to throw a snowball on him.",
        "T0-4": "You'll get a holiday bonus for each colleague",
        "T0-4(2)": "you hit with a snowball.",
        "T0-5": "When you run out of snowballs,",
        "T0-5(2)": "tap the reload button to gather more."
    },
    enterTutorial: {
        "T1-0": "Would you like to play the tutorial?",
        "T1-1": "Yes",
        "T1-2": "No"
    }
};
var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !0,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !0
        },
        Logo: {
            Enabled: !0,
            Link: "http://google.com",
            LinkEnabled: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !0,
        Link: "http://www.marketjs.com/game/links/mobile"
    },
    Gamecenter: {
        Enabled: !0
    }
};
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d = c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : f <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : f <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else
            this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
        this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : f <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" : f <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else
            this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : f <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : f <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else
            this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                f = Math.floor(100 * Math.random());
            console.log("seed: ", f);
            f <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : f <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : f <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else
            this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
(function(b, c) {
    function d(s, b, t) {
        if (t === c && 1 === s.nodeType)
            if (t = "data-" + b.replace(sc, "-$1").toLowerCase(), t = s.getAttribute(t), "string" == typeof t) {
                try {
                    t = "true" === t ? !0 : "false" === t ? !1 : "null" === t ? null : +t + "" === t ? +t : tc.test(t) ? e.parseJSON(t) : t
                } catch (v) {}
                e.data(s, b, t)
            } else
                t = c;
        return t
    }
    function f(s) {
        for (var b in s)
            if (!("data" === b && e.isEmptyObject(s[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function g() {
        return !1
    }
    function n() {
        return !0
    }
    function x(s) {
        return !s || !s.parentNode || 11 === s.parentNode.nodeType
    }
    function B(s, b) {
        do s = s[b];
        while (s && 1 !== s.nodeType);
        return s
    }
    function r(s, b, c) {
        b = b || 0;
        if (e.isFunction(b))
            return e.grep(s, function(s, e) {
                return !!b.call(s, e, s) === c
            });
        if (b.nodeType)
            return e.grep(s, function(s) {
                return s === b === c
            });
        if ("string" == typeof b) {
            var v = e.grep(s, function(s) {
                return 1 === s.nodeType
            });
            if (uc.test(b))
                return e.filter(b, v, !c);
            b = e.filter(b, v)
        }
        return e.grep(s, function(s) {
            return 0 <= e.inArray(s, b) === c
        })
    }
    function y(s) {
        var b = wb.split("|");
        s = s.createDocumentFragment();
        if (s.createElement)
            for (; b.length;)
                s.createElement(b.pop());
        return s
    }
    function A(s, b) {
        if (1 === b.nodeType && e.hasData(s)) {
            var c,
                v,
                d;
            v = e._data(s);
            var q = e._data(b, v),
                m = v.events;
            if (m)
                for (c in delete q.handle, q.events = {}, m) {
                    v = 0;
                    for (d = m[c].length; v < d; v++)
                        e.event.add(b, c, m[c][v])
                }
            q.data && (q.data = e.extend({}, q.data))
        }
    }
    function l(s, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(s), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = s.outerHTML), e.support.html5Clone && s.innerHTML && !e.trim(b.innerHTML) && (b.innerHTML = s.innerHTML)) : "input" === c && xb.test(s.type) ? (b.defaultChecked = b.checked = s.checked, b.value !== s.value && (b.value = s.value)) : "option" === c ? b.selected = s.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = s.defaultValue : "script" === c && b.text !== s.text && (b.text = s.text), b.removeAttribute(e.expando))
    }
    function p(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }
    function u(b) {
        xb.test(b.type) && (b.defaultChecked = b.checked)
    }
    function z(b, j) {
        if (j in b)
            return j;
        for (var c = j.charAt(0).toUpperCase() + j.slice(1), e = j, d = yb.length; d--;)
            if (j = yb[d] + c, j in b)
                return j;
        return e
    }
    function M(b, j) {
        return b = j || b, "none" === e.css(b, "display") || !e.contains(b.ownerDocument, b)
    }
    function L(b, j) {
        for (var c, v, d = [], q = 0, m = b.length; q < m; q++)
            c = b[q], c.style && (d[q] = e._data(c, "olddisplay"), j ? (!d[q] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && M(c) && (d[q] = e._data(c, "olddisplay", J(c.nodeName)))) : (v = Q(c, "display"), !d[q] && "none" !== v && e._data(c, "olddisplay", v)));
        for (q = 0; q < m; q++)
            if (c = b[q], c.style && (!j || "none" === c.style.display || "" === c.style.display))
                c.style.display = j ? d[q] || "" : "none";
        return b
    }
    function E(b, j, c) {
        return (b = vc.exec(j)) ? Math.max(0, b[1] - (c || 0)) + (b[2] || "px") : j
    }
    function Xa(b, j, c, v) {
        j = c === (v ? "border" : "content") ? 4 : "width" === j ? 1 : 0;
        for (var d = 0; 4 > j; j += 2)
            "margin" === c && (d += e.css(b, c + ea[j], !0)), v ? ("content" === c && (d -= parseFloat(Q(b, "padding" + ea[j])) || 0), "margin" !== c && (d -= parseFloat(Q(b, "border" + ea[j] + "Width")) || 0)) : (d += parseFloat(Q(b, "padding" + ea[j])) || 0, "padding" !== c && (d += parseFloat(Q(b, "border" + ea[j] + "Width")) || 0));
        return d
    }
    function K(b, j, c) {
        var v = "width" === j ? b.offsetWidth : b.offsetHeight,
            d = !0,
            q = e.support.boxSizing && "border-box" === e.css(b, "boxSizing");
        if (0 >= v || null == v) {
            v = Q(b, j);
            if (0 > v || null == v)
                v = b.style[j];
            if (ya.test(v))
                return v;
            d = q && (e.support.boxSizingReliable || v === b.style[j]);
            v = parseFloat(v) || 0
        }
        return v + Xa(b, j, c || (q ? "border" : "content"), d) + "px"
    }
    function J(b) {
        if (Ya[b])
            return Ya[b];
        var j = e("<" + b + ">").appendTo(C.body),
            c = j.css("display");
        j.remove();
        if ("none" === c || "" === c) {
            la = C.body.appendChild(la || e.extend(C.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ma || !la.createElement)
                ma = (la.contentWindow || la.contentDocument).document, ma.write("<!doctype html><html><body>"), ma.close();
            j = ma.body.appendChild(ma.createElement(b));
            c = Q(j, "display");
            C.body.removeChild(la)
        }
        return Ya[b] = c, c
    }
    function P(b, j, c, v) {
        var d;
        if (e.isArray(j))
            e.each(j, function(j, e) {
                c || wc.test(b) ? v(b, e) : P(b + "[" + ("object" == typeof e ? j : "") + "]", e, c, v)
            });
        else if (!c && "object" === e.type(j))
            for (d in j)
                P(b + "[" + d + "]", j[d], c, v);
        else
            v(b, j)
    }
    function za(b) {
        return function(j, c) {
            "string" != typeof j && (c = j, j = "*");
            var v,
                d,
                q = j.toLowerCase().split(fa),
                m = 0,
                l = q.length;
            if (e.isFunction(c))
                for (; m < l; m++)
                    v = q[m], (d = /^\+/.test(v)) && (v = v.substr(1) || "*"), v = b[v] = b[v] || [], v[d ? "unshift" : "push"](c)
        }
    }
    function na(b, j, t, e, d, q) {
        d = d || j.dataTypes[0];
        q = q || {};
        q[d] = !0;
        var m;
        d = b[d];
        for (var l = 0, f = d ? d.length : 0, g = b === Za; l < f && (g || !m); l++)
            m = d[l](j, t, e), "string" == typeof m && (!g || q[m] ? m = c : (j.dataTypes.unshift(m), m = na(b, j, t, e, m, q)));
        return (g || !m) && !q["*"] && (m = na(b, j, t, e, "*", q)), m
    }
    function sa(b, j) {
        var t,
            v,
            d = e.ajaxSettings.flatOptions || {};
        for (t in j)
            j[t] !== c && ((d[t] ? b : v || (v = {}))[t] = j[t]);
        v && e.extend(!0, b, v)
    }
    function zb() {
        try {
            return new b.XMLHttpRequest
        } catch (s) {}
    }
    function Ab() {
        return setTimeout(function() {
            Aa = c
        }, 0), Aa = e.now()
    }
    function Bb(b, j, c) {
        var v,
            d = 0,
            q = Ba.length,
            m = e.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                for (var j = Aa || Ab(), j = Math.max(0, f.startTime + f.duration - j), c = 1 - (j / f.duration || 0), t = 0, e = f.tweens.length; t < e; t++)
                    f.tweens[t].run(c);
                return m.notifyWith(b, [f, c, j]), 1 > c && e ? j : (m.resolveWith(b, [f]), !1)
            },
            f = m.promise({
                elem: b,
                props: e.extend({}, j),
                opts: e.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: j,
                originalOptions: c,
                startTime: Aa || Ab(),
                duration: c.duration,
                tweens: [],
                createTween: function(j, c) {
                    var t = e.Tween(b, f.opts, j, c, f.opts.specialEasing[j] || f.opts.easing);
                    return f.tweens.push(t), t
                },
                stop: function(j) {
                    for (var c = 0, t = j ? f.tweens.length : 0; c < t; c++)
                        f.tweens[c].run(1);
                    return j ? m.resolveWith(b, [f, j]) : m.rejectWith(b, [f, j]), this
                }
            });
        j = f.props;
        c = f.opts.specialEasing;
        var g,
            p,
            u,
            r;
        for (v in j)
            if (g = e.camelCase(v), p = c[g], u = j[v], e.isArray(u) && (p = u[1], u = j[v] = u[0]), v !== g && (j[g] = u, delete j[v]), (r = e.cssHooks[g]) && "expand" in r)
                for (v in u = r.expand(u), delete j[g], u)
                    v in j || (j[v] = u[v], c[v] = p);
            else
                c[g] = p;
        for (; d < q; d++)
            if (v = Ba[d].call(f, b, j, f.opts))
                return v;
        var n = f;
        e.each(j, function(b, s) {
            for (var j = (ta[b] || []).concat(ta["*"]), c = 0, t = j.length; c < t && !j[c].call(n, b, s); c++)
                ;
        });
        return e.isFunction(f.opts.start) && f.opts.start.call(b, f), e.fx.timer(e.extend(l, {
            anim: f,
            queue: f.opts.queue,
            elem: b
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function S(b, j, c, e, d) {
        return new S.prototype.init(b, j, c, e, d)
    }
    function Ca(b, j) {
        var c,
            e = {
                height: b
            },
            d = 0;
        for (j = j ? 1 : 0; 4 > d; d += 2 - j)
            c = ea[d], e["margin" + c] = e["padding" + c] = b;
        return j && (e.opacity = e.width = b), e
    }
    function Cb(b) {
        return e.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db,
        Da,
        C = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac = b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        Z = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        $a = Object.prototype.hasOwnProperty,
        ab = String.prototype.trim,
        e = function(b, j) {
            return new e.fn.init(b, j, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        fa = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, j) {
            return (j + "").toUpperCase()
        },
        Fa = function() {
            C.addEventListener ? (C.removeEventListener("DOMContentLoaded", Fa, !1), e.ready()) : "complete" === C.readyState && (C.detachEvent("onreadystatechange", Fa), e.ready())
        },
        Hb = {};
    e.fn = e.prototype = {
        constructor: e,
        init: function(b, j, t) {
            var v,
                d;
            if (!b)
                return this;
            if (b.nodeType)
                return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? v = [null, b, null] : v = Fc.exec(b);
                if (v && (v[1] || !j)) {
                    if (v[1])
                        return j = j instanceof e ? j[0] : j, d = j && j.nodeType ? j.ownerDocument || j : C, b = e.parseHTML(v[1], d, !0), Gb.test(v[1]) && e.isPlainObject(j) && this.attr.call(b, j, !0), e.merge(this, b);
                    if ((j = C.getElementById(v[2])) && j.parentNode) {
                        if (j.id !== v[2])
                            return t.find(b);
                        this.length = 1;
                        this[0] = j
                    }
                    return this.context = C, this.selector = b, this
                }
                return !j || j.jquery ? (j || t).find(b) : this.constructor(j).find(b)
            }
            return e.isFunction(b) ? t.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), e.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Z.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, j, c) {
            b = e.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === j ? b.selector = this.selector + (this.selector ? " " : "") + c : j && (b.selector = this.selector + "." + j + "(" + c + ")"), b
        },
        each: function(b, j) {
            return e.each(this, b, j)
        },
        ready: function(b) {
            return e.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(e.map(this, function(j, c) {
                return b.call(j, c, j)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
        var b,
            j,
            t,
            v,
            d,
            q,
            m = arguments[0] || {},
            l = 1,
            f = arguments.length,
            g = !1;
        "boolean" == typeof m && (g = m, m = arguments[1] || {}, l = 2);
        "object" != typeof m && !e.isFunction(m) && (m = {});
        for (f === l && (m = this, --l); l < f; l++)
            if (null != (b = arguments[l]))
                for (j in b)
                    t = m[j], v = b[j], m !== v && (g && v && (e.isPlainObject(v) || (d = e.isArray(v))) ? (d ? (d = !1, q = t && e.isArray(t) ? t : []) : q = t && e.isPlainObject(t) ? t : {}, m[j] = e.extend(g, q, v)) : v !== c && (m[j] = v));
        return m
    };
    e.extend({
        noConflict: function(s) {
            return b.$ === e && (b.$ = Bc), s && b.jQuery === e && (b.jQuery = Ac), e
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? e.readyWait++ : e.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --e.readyWait : e.isReady)) {
                if (!C.body)
                    return setTimeout(e.ready, 1);
                e.isReady = !0;
                !0 !== b && 0 < --e.readyWait || (Da.resolveWith(C, [e]), e.fn.trigger && e(C).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === e.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === e.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== e.type(b) || b.nodeType || e.isWindow(b))
                return !1;
            try {
                if (b.constructor && !$a.call(b, "constructor") && !$a.call(b.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (j) {
                return !1
            }
            for (var t in b)
                ;
            return t === c || $a.call(b, t)
        },
        isEmptyObject: function(b) {
            for (var j in b)
                return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, j, c) {
            var v;
            return !b || "string" != typeof b ? null : ("boolean" == typeof j && (c = j, j = 0), j = j || C, (v = Gb.exec(b)) ? [j.createElement(v[1])] : (v = e.buildFragment([b], j, c ? null : []), e.merge([], (v.cacheable ? e.clone(v.fragment) : v.fragment).childNodes)))
        },
        parseJSON: function(s) {
            if (!s || "string" != typeof s)
                return null;
            s = e.trim(s);
            if (b.JSON && b.JSON.parse)
                return b.JSON.parse(s);
            if (Gc.test(s.replace(Ic, "@").replace(Jc, "]").replace(Hc, "")))
                return (new Function("return " + s))();
            e.error("Invalid JSON: " + s)
        },
        parseXML: function(s) {
            var j,
                t;
            if (!s || "string" != typeof s)
                return null;
            try {
                b.DOMParser ? (t = new DOMParser, j = t.parseFromString(s, "text/xml")) : (j = new ActiveXObject("Microsoft.XMLDOM"), j.async = "false", j.loadXML(s))
            } catch (v) {
                j = c
            }
            return (!j || !j.documentElement || j.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + s), j
        },
        noop: function() {},
        globalEval: function(s) {
            s && Dc.test(s) && (b.execScript || function(s) {
                b.eval.call(b, s)
            })(s)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, j) {
            return b.nodeName && b.nodeName.toLowerCase() === j.toLowerCase()
        },
        each: function(b, j, t) {
            var v,
                d = 0,
                q = b.length,
                m = q === c || e.isFunction(b);
            if (t)
                if (m)
                    for (v in b) {
                        if (!1 === j.apply(b[v], t))
                            break
                    }
                else
                    for (; d < q && !1 !== j.apply(b[d++], t);)
                        ;
            else if (m)
                for (v in b) {
                    if (!1 === j.call(b[v], v, b[v]))
                        break
                }
            else
                for (; d < q && !1 !== j.call(b[d], d, b[d++]);)
                    ;
            return b
        },
        trim: ab && !ab.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : ab.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, j) {
            var c,
                v = j || [];
            return null != b && (c = e.type(b), null == b.length || "string" === c || "function" === c || "regexp" === c || e.isWindow(b) ? Eb.call(v, b) : e.merge(v, b)), v
        },
        inArray: function(b, j, c) {
            var e;
            if (j) {
                if (Fb)
                    return Fb.call(j, b, c);
                e = j.length;
                for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; c < e; c++)
                    if (c in j && j[c] === b)
                        return c
            }
            return -1
        },
        merge: function(b, j) {
            var t = j.length,
                e = b.length,
                d = 0;
            if ("number" == typeof t)
                for (; d < t; d++)
                    b[e++] = j[d];
            else
                for (; j[d] !== c;)
                    b[e++] = j[d++];
            return b.length = e, b
        },
        grep: function(b, j, c) {
            var e,
                d = [],
                q = 0,
                m = b.length;
            for (c = !!c; q < m; q++)
                e = !!j(b[q], q), c !== e && d.push(b[q]);
            return d
        },
        map: function(b, j, t) {
            var v,
                d,
                q = [],
                m = 0,
                l = b.length;
            if (b instanceof e || l !== c && "number" == typeof l && (0 < l && b[0] && b[l - 1] || 0 === l || e.isArray(b)))
                for (; m < l; m++)
                    v = j(b[m], m, t), null != v && (q[q.length] = v);
            else
                for (d in b)
                    v = j(b[d], d, t), null != v && (q[q.length] = v);
            return q.concat.apply([], q)
        },
        guid: 1,
        proxy: function(b, j) {
            var t,
                v,
                d;
            return "string" == typeof j && (t = b[j], j = b, b = t), e.isFunction(b) ? (v = Z.call(arguments, 2), d = function() {
                return b.apply(j, v.concat(Z.call(arguments)))
            }, d.guid = b.guid = b.guid || e.guid++, d) : c
        },
        access: function(b, j, t, v, d, q, m) {
            var l,
                f = null == t,
                g = 0,
                p = b.length;
            if (t && "object" == typeof t) {
                for (g in t)
                    e.access(b, j, g, t[g], 1, q, v);
                d = 1
            } else if (v !== c) {
                l = m === c && e.isFunction(v);
                f && (l ? (l = j, j = function(b, s, j) {
                    return l.call(e(b), j)
                }) : (j.call(b, v), j = null));
                if (j)
                    for (; g < p; g++)
                        j(b[g], t, l ? v.call(b[g], g, j(b[g], t)) : v, m);
                d = 1
            }
            return d ? b : f ? j.call(b) : p ? j(b[0], t) : q
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    e.ready.promise = function(s) {
        if (!Da)
            if (Da = e.Deferred(), "complete" === C.readyState)
                setTimeout(e.ready, 1);
            else if (C.addEventListener)
                C.addEventListener("DOMContentLoaded", Fa, !1), b.addEventListener("load", e.ready, !1);
            else {
                C.attachEvent("onreadystatechange", Fa);
                b.attachEvent("onload", e.ready);
                var j = !1;
                try {
                    j = null == b.frameElement && C.documentElement
                } catch (c) {}
                j && j.doScroll && function D() {
                    if (!e.isReady) {
                        try {
                            j.doScroll("left")
                        } catch (b) {
                            return setTimeout(D, 50)
                        }
                        e.ready()
                    }
                }()
            }
        return Da.promise(s)
    };
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, j) {
        Hb["[object " + j + "]"] = j.toLowerCase()
    });
    Db = e(C);
    var Ib = {};
    e.Callbacks = function(b) {
        var j;
        if ("string" == typeof b) {
            if (!(j = Ib[b])) {
                j = b;
                var t = Ib[j] = {};
                j = (e.each(j.split(fa), function(b, s) {
                    t[s] = !0
                }), t)
            }
        } else
            j = e.extend({}, b);
        b = j;
        var d,
            D,
            q,
            m,
            l,
            f,
            g = [],
            p = !b.once && [],
            u = function(j) {
                d = b.memory && j;
                D = !0;
                f = m || 0;
                m = 0;
                l = g.length;
                for (q = !0; g && f < l; f++)
                    if (!1 === g[f].apply(j[0], j[1]) && b.stopOnFalse) {
                        d = !1;
                        break
                    }
                q = !1;
                g && (p ? p.length && u(p.shift()) : d ? g = [] : r.disable())
            },
            r = {
                add: function() {
                    if (g) {
                        var j = g.length;
                        (function xc(j) {
                            e.each(j, function(j, c) {
                                var t = e.type(c);
                                "function" === t && (!b.unique || !r.has(c)) ? g.push(c) : c && c.length && "string" !== t && xc(c)
                            })
                        })(arguments);
                        q ? l = g.length : d && (m = j, u(d))
                    }
                    return this
                },
                remove: function() {
                    return g && e.each(arguments, function(b, s) {
                        for (var j; -1 < (j = e.inArray(s, g, j));)
                            g.splice(j, 1), q && (j <= l && l--, j <= f && f--)
                    }), this
                },
                has: function(b) {
                    return -1 < e.inArray(b, g)
                },
                empty: function() {
                    return g = [], this
                },
                disable: function() {
                    return g = p = d = c, this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return p = c, d || r.disable(), this
                },
                locked: function() {
                    return !p
                },
                fireWith: function(b, s) {
                    return s = s || [], s = [b, s.slice ? s.slice() : s], g && (!D || p) && (q ? p.push(s) : u(s)), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!D
                }
            };
        return r
    };
    e.extend({
        Deferred: function(b) {
            var j = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return D.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return e.Deferred(function(s) {
                            e.each(j, function(j, c) {
                                var t = c[0],
                                    d = b[j];
                                D[c[1]](e.isFunction(d) ? function() {
                                    var b = d.apply(this, arguments);
                                    b && e.isFunction(b.promise) ? b.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[t + "With"](this === D ? s : this, [b])
                                } : s[t])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? e.extend(b, d) : d
                    }
                },
                D = {};
            return d.pipe = d.then, e.each(j, function(b, s) {
                var e = s[2],
                    l = s[3];
                d[s[1]] = e.add;
                l && e.add(function() {
                    c = l
                }, j[b ^ 1][2].disable, j[2][2].lock);
                D[s[0]] = e.fire;
                D[s[0] + "With"] = e.fireWith
            }), d.promise(D), b && b.call(D, D), D
        },
        when: function(b) {
            var j = 0,
                c = Z.call(arguments),
                d = c.length,
                D = 1 !== d || b && e.isFunction(b.promise) ? d : 0,
                q = 1 === D ? b : e.Deferred(),
                m = function(b, s, j) {
                    return function(c) {
                        s[b] = this;
                        j[b] = 1 < arguments.length ? Z.call(arguments) : c;
                        j === l ? q.notifyWith(s, j) : --D || q.resolveWith(s, j)
                    }
                },
                l,
                f,
                g;
            if (1 < d) {
                l = Array(d);
                f = Array(d);
                for (g = Array(d); j < d; j++)
                    c[j] && e.isFunction(c[j].promise) ? c[j].promise().done(m(j, g, c)).fail(q.reject).progress(m(j, f, l)) : --D
            }
            return D || q.resolveWith(g, c), q.promise()
        }
    });
    var Nc = e,
        bb,
        O,
        Ga,
        ga,
        Ha,
        Ia,
        T,
        ha,
        Ja,
        cb,
        ua,
        Jb,
        I = C.createElement("div");
    I.setAttribute("className", "t");
    I.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = I.getElementsByTagName("*");
    ga = I.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length)
        bb = {};
    else {
        Ha = C.createElement("select");
        Ia = Ha.appendChild(C.createElement("option"));
        T = I.getElementsByTagName("input")[0];
        O = {
            leadingWhitespace: 3 === I.firstChild.nodeType,
            tbody: !I.getElementsByTagName("tbody").length,
            htmlSerialize: !!I.getElementsByTagName("link").length,
            style: /top/.test(ga.getAttribute("style")),
            hrefNormalized: "/a" === ga.getAttribute("href"),
            opacity: /^0.5/.test(ga.style.opacity),
            cssFloat: !!ga.style.cssFloat,
            checkOn: "on" === T.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== I.className,
            enctype: !!C.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === C.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        T.checked = !0;
        O.noCloneChecked = T.cloneNode(!0).checked;
        Ha.disabled = !0;
        O.optDisabled = !Ia.disabled;
        try {
            delete I.test
        } catch (Pd) {
            O.deleteExpando = !1
        }
        !I.addEventListener && I.attachEvent && I.fireEvent && (I.attachEvent("onclick", Jb = function() {
            O.noCloneEvent = !1
        }), I.cloneNode(!0).fireEvent("onclick"), I.detachEvent("onclick", Jb));
        T = C.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        O.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        I.appendChild(T);
        ha = C.createDocumentFragment();
        ha.appendChild(I.lastChild);
        O.checkClone = ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        O.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(I);
        if (I.attachEvent)
            for (cb in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                Ja = "on" + cb, (ua = Ja in I) || (I.setAttribute(Ja, "return;"), ua = "function" == typeof I[Ja]), O[cb + "Bubbles"] = ua;
        bb = (e(function() {
            var s,
                j,
                c,
                e,
                d = C.getElementsByTagName("body")[0];
            d && (s = C.createElement("div"), s.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", d.insertBefore(s, d.firstChild), j = C.createElement("div"), s.appendChild(j), j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c = j.getElementsByTagName("td"), c[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", O.reliableHiddenOffsets = ua && 0 === c[0].offsetHeight, j.innerHTML = "", j.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing = 4 === j.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== d.offsetTop, b.getComputedStyle && (O.pixelPosition = "1%" !== (b.getComputedStyle(j, null) || {}).top, O.boxSizingReliable = "4px" === (b.getComputedStyle(j, null) || {
                width: "4px"
            }).width, e = C.createElement("div"), e.style.cssText = j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", e.style.marginRight = e.style.width = "0", j.style.width = "1px", j.appendChild(e), O.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight)), "undefined" != typeof j.style.zoom && (j.innerHTML = "", j.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === j.offsetWidth, j.style.display = "block", j.style.overflow = "visible", j.innerHTML = "<div></div>", j.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== j.offsetWidth, s.style.zoom = 1), d.removeChild(s))
        }), ha.removeChild(I), Ga = ga = Ha = Ia = T = ha = I = null, O)
    }
    Nc.support = bb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    e.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando], !!b && !f(b)
        },
        data: function(b, j, t, d) {
            if (e.acceptData(b)) {
                var D,
                    q,
                    m = e.expando,
                    l = "string" == typeof j,
                    f = b.nodeType,
                    g = f ? e.cache : b,
                    p = f ? b[m] : b[m] && m;
                if (p && g[p] && (d || g[p].data) || !(l && t === c)) {
                    p || (f ? b[m] = p = e.deletedIds.pop() || e.guid++ : p = m);
                    g[p] || (g[p] = {}, f || (g[p].toJSON = e.noop));
                    if ("object" == typeof j || "function" == typeof j)
                        d ? g[p] = e.extend(g[p], j) : g[p].data = e.extend(g[p].data, j);
                    return D = g[p], d || (D.data || (D.data = {}), D = D.data), t !== c && (D[e.camelCase(j)] = t), l ? (q = D[j], null == q && (q = D[e.camelCase(j)])) : q = D, q
                }
            }
        },
        removeData: function(b, j, c) {
            if (e.acceptData(b)) {
                var d,
                    D,
                    q,
                    m = b.nodeType,
                    l = m ? e.cache : b,
                    g = m ? b[e.expando] : e.expando;
                if (l[g]) {
                    if (j && (d = c ? l[g] : l[g].data)) {
                        e.isArray(j) || (j in d ? j = [j] : (j = e.camelCase(j), j in d ? j = [j] : j = j.split(" ")));
                        D = 0;
                        for (q = j.length; D < q; D++)
                            delete d[j[D]];
                        if (!(c ? f : e.isEmptyObject)(d))
                            return
                    }
                    if (c || !(delete l[g].data, !f(l[g])))
                        m ? e.cleanData([b], !0) : e.support.deleteExpando || l != l.window ? delete l[g] : l[g] = null
                }
            }
        },
        _data: function(b, j, c) {
            return e.data(b, j, c, !0)
        },
        acceptData: function(b) {
            var j = b.nodeName && e.noData[b.nodeName.toLowerCase()];
            return !j || !0 !== j && b.getAttribute("classid") === j
        }
    });
    e.fn.extend({
        data: function(b, j) {
            var t,
                v,
                D,
                q,
                m,
                l = this[0],
                f = 0,
                g = null;
            if (b === c) {
                if (this.length && (g = e.data(l), 1 === l.nodeType && !e._data(l, "parsedAttrs"))) {
                    D = l.attributes;
                    for (m = D.length; f < m; f++)
                        q = D[f].name, q.indexOf("data-") || (q = e.camelCase(q.substring(5)), d(l, q, g[q]));
                    e._data(l, "parsedAttrs", !0)
                }
                return g
            }
            return "object" == typeof b ? this.each(function() {
                e.data(this, b)
            }) : (t = b.split(".", 2), t[1] = t[1] ? "." + t[1] : "", v = t[1] + "!", e.access(this, function(j) {
                if (j === c)
                    return g = this.triggerHandler("getData" + v, [t[0]]), g === c && l && (g = e.data(l, b), g = d(l, b, g)), g === c && t[1] ? this.data(t[0]) : g;
                t[1] = j;
                this.each(function() {
                    var c = e(this);
                    c.triggerHandler("setData" + v, t);
                    e.data(this, b, j);
                    c.triggerHandler("changeData" +
                    v, t)
                })
            }, null, j, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                e.removeData(this, b)
            })
        }
    });
    e.extend({
        queue: function(b, j, c) {
            var d;
            if (b)
                return j = (j || "fx") + "queue", d = e._data(b, j), c && (!d || e.isArray(c) ? d = e._data(b, j, e.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(b, j) {
            j = j || "fx";
            var c = e.queue(b, j),
                d = c.length,
                D = c.shift(),
                q = e._queueHooks(b, j),
                m = function() {
                    e.dequeue(b, j)
                };
            "inprogress" === D && (D = c.shift(), d--);
            D && ("fx" === j && c.unshift("inprogress"), delete q.stop, D.call(b, m, q));
            !d && q && q.empty.fire()
        },
        _queueHooks: function(b, j) {
            var c = j + "queueHooks";
            return e._data(b, c) || e._data(b, c, {
                    empty: e.Callbacks("once memory").add(function() {
                        e.removeData(b, j + "queue", !0);
                        e.removeData(b, c, !0)
                    })
                })
        }
    });
    e.fn.extend({
        queue: function(b, j) {
            var t = 2;
            return "string" != typeof b && (j = b, b = "fx", t--), arguments.length < t ? e.queue(this[0], b) : j === c ? this : this.each(function() {
                var c = e.queue(this, b, j);
                e._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && e.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                e.dequeue(this, b)
            })
        },
        delay: function(b, j) {
            return b = e.fx ? e.fx.speeds[b] || b : b, j = j || "fx", this.queue(j, function(j, c) {
                var e = setTimeout(j, b);
                c.stop = function() {
                    clearTimeout(e)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, j) {
            var t,
                d = 1,
                D = e.Deferred(),
                q = this,
                m = this.length,
                l = function() {
                    --d || D.resolveWith(q, [q])
                };
            "string" != typeof b && (j = b, b = c);
            for (b = b || "fx"; m--;)
                (t = e._data(q[m], b + "queueHooks")) && t.empty && (d++, t.empty.add(l));
            return l(), D.promise(j)
        }
    });
    var ba,
        Kb,
        Lb,
        Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = e.support.getSetAttribute;
    e.fn.extend({
        attr: function(b, j) {
            return e.access(this, e.attr, b, j, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                e.removeAttr(this, b)
            })
        },
        prop: function(b, j) {
            return e.access(this, e.prop, b, j, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = e.propFix[b] || b, this.each(function() {
                try {
                    this[b] = c, delete this[b]
                } catch (j) {}
            })
        },
        addClass: function(b) {
            var j,
                c,
                d,
                l,
                q,
                m,
                f;
            if (e.isFunction(b))
                return this.each(function(j) {
                    e(this).addClass(b.call(this, j, this.className))
                });
            if (b && "string" == typeof b) {
                j = b.split(fa);
                c = 0;
                for (d = this.length; c < d; c++)
                    if (l = this[c], 1 === l.nodeType)
                        if (!l.className && 1 === j.length)
                            l.className = b;
                        else {
                            q = " " + l.className + " ";
                            m = 0;
                            for (f = j.length; m < f; m++)
                                0 > q.indexOf(" " + j[m] + " ") && (q += j[m] + " ");
                            l.className = e.trim(q)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var j,
                t,
                d,
                l,
                q,
                m,
                f;
            if (e.isFunction(b))
                return this.each(function(j) {
                    e(this).removeClass(b.call(this, j, this.className))
                });
            if (b && "string" == typeof b || b === c) {
                j = (b || "").split(fa);
                m = 0;
                for (f = this.length; m < f; m++)
                    if (d = this[m], 1 === d.nodeType && d.className) {
                        t = (" " + d.className + " ").replace(Mb, " ");
                        l = 0;
                        for (q = j.length; l < q; l++)
                            for (; 0 <= t.indexOf(" " + j[l] + " ");)
                                t = t.replace(" " + j[l] + " ", " ");
                        d.className = b ? e.trim(t) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, j) {
            var c = typeof b,
                d = "boolean" == typeof j;
            return e.isFunction(b) ? this.each(function(c) {
                e(this).toggleClass(b.call(this, c, this.className, j), j)
            }) : this.each(function() {
                if ("string" === c)
                    for (var l, q = 0, m = e(this), f = j, g = b.split(fa); l = g[q++];)
                        f = d ? f : !m.hasClass(l), m[f ? "addClass" : "removeClass"](l);
                else if ("undefined" === c || "boolean" === c)
                    this.className && e._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var j = 0, c = this.length; j < c; j++)
                if (1 === this[j].nodeType && 0 <= (" " + this[j].className + " ").replace(Mb, " ").indexOf(b))
                    return !0;
            return !1
        },
        val: function(b) {
            var j,
                t,
                d,
                l = this[0];
            if (arguments.length)
                return d = e.isFunction(b), this.each(function(t) {
                    var m,
                        l = e(this);
                    if (1 === this.nodeType && (d ? m = b.call(this, t, l.val()) : m = b, null == m ? m = "" : "number" == typeof m ? m += "" : e.isArray(m) && (m = e.map(m, function(b) {
                        return null == b ? "" : b + ""
                    })), j = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], !j || !("set" in j) || j.set(this, m, "value") === c))
                        this.value = m
                });
            if (l)
                return j = e.valHooks[l.type] || e.valHooks[l.nodeName.toLowerCase()], j && "get" in j && (t = j.get(l, "value")) !== c ? t : (t = l.value, "string" == typeof t ? t.replace(Oc, "") : null == t ? "" : t)
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var j = b.attributes.value;
                    return !j || j.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var j,
                        c,
                        d = b.selectedIndex,
                        l = [],
                        q = b.options,
                        m = "select-one" === b.type;
                    if (0 > d)
                        return null;
                    b = m ? d : 0;
                    for (c = m ? d + 1 : q.length; b < c; b++)
                        if (j = q[b], j.selected && (e.support.optDisabled ? !j.disabled : null === j.getAttribute("disabled")) && (!j.parentNode.disabled || !e.nodeName(j.parentNode, "optgroup"))) {
                            j = e(j).val();
                            if (m)
                                return j;
                            l.push(j)
                        }
                    return m && !l.length && q.length ? e(q[d]).val() : l
                },
                set: function(b, j) {
                    var c = e.makeArray(j);
                    return e(b).find("option").each(function() {
                        this.selected = 0 <= e.inArray(e(this).val(), c)
                    }), c.length || (b.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function(b, j, t, d) {
            var l,
                q,
                m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m)) {
                if (d && e.isFunction(e.fn[j]))
                    return e(b)[j](t);
                if ("undefined" == typeof b.getAttribute)
                    return e.prop(b, j, t);
                (d = 1 !== m || !e.isXMLDoc(b)) && (j = j.toLowerCase(), q = e.attrHooks[j] || (Nb.test(j) ? Kb : ba));
                if (t !== c) {
                    if (null === t) {
                        e.removeAttr(b, j);
                        return
                    }
                    return q && "set" in q && d && (l = q.set(b, t, j)) !== c ? l : (b.setAttribute(j, t + ""), t)
                }
                return q && "get" in q && d && null !== (l = q.get(b, j)) ? l : (l = b.getAttribute(j), null === l ? c : l)
            }
        },
        removeAttr: function(b, j) {
            var c,
                d,
                l,
                q,
                m = 0;
            if (j && 1 === b.nodeType)
                for (d = j.split(fa); m < d.length; m++)
                    (l = d[m]) && (c = e.propFix[l] || l, q = Nb.test(l), q || e.attr(b, l, ""), b.removeAttribute(Ob ? l : c), q && c in b && (b[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, j) {
                    if (Pc.test(b.nodeName) && b.parentNode)
                        e.error("type property can't be changed");
                    else if (!e.support.radioValue && "radio" === j && e.nodeName(b, "input")) {
                        var c = b.value;
                        return b.setAttribute("type", j), c && (b.value = c), j
                    }
                }
            },
            value: {
                get: function(b, j) {
                    return ba && e.nodeName(b, "button") ? ba.get(b, j) : j in b ? b.value : null
                },
                set: function(b, j, c) {
                    if (ba && e.nodeName(b, "button"))
                        return ba.set(b, j, c);
                    b.value = j
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, j, t) {
            var d,
                l,
                q,
                m = b.nodeType;
            if (b && !(3 === m || 8 === m || 2 === m))
                return q = 1 !== m || !e.isXMLDoc(b), q && (j = e.propFix[j] || j, l = e.propHooks[j]), t !== c ? l && "set" in l && (d = l.set(b, t, j)) !== c ? d : b[j] = t : l && "get" in l && null !== (d = l.get(b, j)) ? d : b[j]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var j = b.getAttributeNode("tabindex");
                    return j && j.specified ? parseInt(j.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b, j) {
            var t,
                d = e.prop(b, j);
            return !0 === d || "boolean" != typeof d && (t = b.getAttributeNode(j)) && !1 !== t.nodeValue ? j.toLowerCase() : c
        },
        set: function(b, j, c) {
            var d;
            return !1 === j ? e.removeAttr(b, c) : (d = e.propFix[c] || c, d in b && (b[d] = !0), b.setAttribute(c, c.toLowerCase())), c
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, ba = e.valHooks.button = {
        get: function(b, j) {
            var e;
            return e = b.getAttributeNode(j), e && (Lb[j] ? "" !== e.value : e.specified) ? e.value : c
        },
        set: function(b, j, c) {
            var e = b.getAttributeNode(c);
            return e || (e = C.createAttribute(c), b.setAttributeNode(e)), e.value = j + ""
        }
    }, e.each(["width", "height"], function(b, j) {
        e.attrHooks[j] = e.extend(e.attrHooks[j], {
            set: function(b, s) {
                if ("" === s)
                    return b.setAttribute(j, "auto"), s
            }
        })
    }), e.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, j, c) {
            "" === j && (j = "false");
            ba.set(b, j, c)
        }
    });
    e.support.hrefNormalized || e.each(["href", "src", "width", "height"], function(b, j) {
        e.attrHooks[j] = e.extend(e.attrHooks[j], {
            get: function(b) {
                b = b.getAttribute(j, 2);
                return null === b ? c : b
            }
        })
    });
    e.support.style || (e.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, j) {
            return b.style.cssText = j + ""
        }
    });
    e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    e.support.enctype || (e.propFix.enctype = "encoding");
    e.support.checkOn || e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function(b, j) {
                if (e.isArray(j))
                    return b.checked = 0 <= e.inArray(e(b).val(), j)
            }
        })
    });
    var db = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return e.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    e.event = {
        add: function(b, j, d, v, l) {
            var q,
                m,
                f,
                g,
                p,
                u,
                r,
                n,
                y;
            if (!(3 === b.nodeType || 8 === b.nodeType || !j || !d || !(q = e._data(b)))) {
                d.handler && (r = d, d = r.handler, l = r.selector);
                d.guid || (d.guid = e.guid++);
                (f = q.events) || (q.events = f = {});
                (m = q.handle) || (q.handle = m = function(b) {
                    return "undefined" != typeof e && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(m.elem, arguments) : c
                }, m.elem = b);
                j = e.trim(Rb(j)).split(" ");
                for (q = 0; q < j.length; q++) {
                    g = Pb.exec(j[q]) || [];
                    p = g[1];
                    u = (g[2] || "").split(".").sort();
                    y = e.event.special[p] || {};
                    p = (l ? y.delegateType : y.bindType) || p;
                    y = e.event.special[p] || {};
                    g = e.extend({
                        type: p,
                        origType: g[1],
                        data: v,
                        handler: d,
                        guid: d.guid,
                        selector: l,
                        needsContext: l && e.expr.match.needsContext.test(l),
                        namespace: u.join(".")
                    }, r);
                    n = f[p];
                    if (!n && (n = f[p] = [], n.delegateCount = 0, !y.setup || !1 === y.setup.call(b, v, u, m)))
                        b.addEventListener ? b.addEventListener(p, m, !1) : b.attachEvent && b.attachEvent("on" + p, m);
                    y.add && (y.add.call(b, g), g.handler.guid || (g.handler.guid = d.guid));
                    l ? n.splice(n.delegateCount++, 0, g) : n.push(g);
                    e.event.global[p] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, j, c, d, l) {
            var q,
                m,
                f,
                g,
                p,
                u,
                r,
                n,
                y,
                z,
                A = e.hasData(b) && e._data(b);
            if (A && (r = A.events)) {
                j = e.trim(Rb(j || "")).split(" ");
                for (q = 0; q < j.length; q++)
                    if (m = Pb.exec(j[q]) || [], f = g = m[1], m = m[2], f) {
                        n = e.event.special[f] || {};
                        f = (d ? n.delegateType : n.bindType) || f;
                        y = r[f] || [];
                        p = y.length;
                        m = m ? RegExp("(^|\\.)" + m.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (u = 0; u < y.length; u++)
                            z = y[u], (l || g === z.origType) && (!c || c.guid === z.guid) && (!m || m.test(z.namespace)) && (!d || d === z.selector || "**" === d && z.selector) && (y.splice(u--, 1), z.selector && y.delegateCount--, n.remove && n.remove.call(b, z));
                        0 === y.length && p !== y.length && ((!n.teardown || !1 === n.teardown.call(b, m, A.handle)) && e.removeEvent(b, f, A.handle), delete r[f])
                    } else
                        for (f in r)
                            e.event.remove(b, f + j[q], c, d, !0);
                e.isEmptyObject(r) && (delete A.handle, e.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(s, j, d, v) {
            if (!d || 3 !== d.nodeType && 8 !== d.nodeType) {
                var l,
                    q,
                    m,
                    f,
                    g,
                    p,
                    u,
                    r = s.type || s;
                f = [];
                if (!Qb.test(r + e.event.triggered) && (0 <= r.indexOf("!") && (r = r.slice(0, -1), l = !0), 0 <= r.indexOf(".") && (f = r.split("."), r = f.shift(), f.sort()), d && !e.event.customEvent[r] || e.event.global[r]))
                    if (s = "object" == typeof s ? s[e.expando] ? s : new e.Event(r, s) : new e.Event(r), s.type = r, s.isTrigger = !0, s.exclusive = l, s.namespace = f.join("."), s.namespace_re = s.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0 > r.indexOf(":") ? "on" + r : "", d) {
                        if (s.result = c, s.target || (s.target = d), j = null != j ? e.makeArray(j) : [], j.unshift(s), g = e.event.special[r] || {}, !(g.trigger && !1 === g.trigger.apply(d, j))) {
                            u = [[d, g.bindType || r]];
                            if (!v && !g.noBubble && !e.isWindow(d)) {
                                q = g.delegateType || r;
                                l = Qb.test(q + r) ? d : d.parentNode;
                                for (m = d; l; l = l.parentNode)
                                    u.push([l, q]), m = l;
                                m === (d.ownerDocument || C) && u.push([m.defaultView || m.parentWindow || b, q])
                            }
                            for (q = 0; q < u.length && !s.isPropagationStopped(); q++)
                                l = u[q][0], s.type = u[q][1], (p = (e._data(l, "events") || {})[s.type] && e._data(l, "handle")) && p.apply(l, j), (p = f && l[f]) && e.acceptData(l) && p.apply && !1 === p.apply(l, j) && s.preventDefault();
                            return s.type = r, !v && !s.isDefaultPrevented() && (!g._default || !1 === g._default.apply(d.ownerDocument, j)) && ("click" !== r || !e.nodeName(d, "a")) && e.acceptData(d) && f && d[r] && ("focus" !== r && "blur" !== r || 0 !== s.target.offsetWidth) && !e.isWindow(d) && (m = d[f], m && (d[f] = null), e.event.triggered = r, d[r](), e.event.triggered = c, m && (d[f] = m)), s.result
                        }
                    } else
                        for (q in d = e.cache, d)
                            d[q].events && d[q].events[r] && e.event.trigger(s, j, d[q].handle.elem, !0)
            }
        },
        dispatch: function(s) {
            s = e.event.fix(s || b.event);
            var j,
                d,
                v,
                l,
                q,
                m,
                f = (e._data(this, "events") || {})[s.type] || [],
                g = f.delegateCount,
                p = Z.call(arguments),
                u = !s.exclusive && !s.namespace,
                r = e.event.special[s.type] || {},
                n = [];
            p[0] = s;
            s.delegateTarget = this;
            if (!(r.preDispatch && !1 === r.preDispatch.call(this, s))) {
                if (g && (!s.button || "click" !== s.type))
                    for (d = s.target; d != this; d = d.parentNode || this)
                        if (!0 !== d.disabled || "click" !== s.type) {
                            l = {};
                            q = [];
                            for (j = 0; j < g; j++)
                                v = f[j], m = v.selector, l[m] === c && (l[m] = v.needsContext ? 0 <= e(m, this).index(d) : e.find(m, this, null, [d]).length), l[m] && q.push(v);
                            q.length && n.push({
                                elem: d,
                                matches: q
                            })
                        }
                f.length > g && n.push({
                    elem: this,
                    matches: f.slice(g)
                });
                for (j = 0; j < n.length && !s.isPropagationStopped(); j++) {
                    l = n[j];
                    s.currentTarget = l.elem;
                    for (d = 0; d < l.matches.length && !s.isImmediatePropagationStopped(); d++)
                        if (v = l.matches[d], u || !s.namespace && !v.namespace || s.namespace_re && s.namespace_re.test(v.namespace))
                            s.data = v.data, s.handleObj = v, v = ((e.event.special[v.origType] || {}).handle || v.handler).apply(l.elem, p), v !== c && (s.result = v, !1 === v && (s.preventDefault(), s.stopPropagation()))
                }
                return r.postDispatch && r.postDispatch.call(this, s), s.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, j) {
                return null == b.which && (b.which = null != j.charCode ? j.charCode : j.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, j) {
                var e,
                    d,
                    l,
                    q = j.button,
                    m = j.fromElement;
                return null == b.pageX && null != j.clientX && (e = b.target.ownerDocument || C, d = e.documentElement, l = e.body, b.pageX = j.clientX + (d && d.scrollLeft || l && l.scrollLeft || 0) - (d && d.clientLeft || l && l.clientLeft || 0), b.pageY = j.clientY + (d && d.scrollTop || l && l.scrollTop || 0) - (d && d.clientTop || l && l.clientTop || 0)), !b.relatedTarget && m && (b.relatedTarget = m === b.target ? j.toElement : m), !b.which && q !== c && (b.which = q & 1 ? 1 : q & 2 ? 3 : q & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[e.expando])
                return b;
            var j,
                c,
                d = b,
                l = e.event.fixHooks[b.type] || {},
                q = l.props ? this.props.concat(l.props) : this.props;
            b = e.Event(d);
            for (j = q.length; j;)
                c = q[--j], b[c] = d[c];
            return b.target || (b.target = d.srcElement || C), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, l.filter ? l.filter(b, d) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, j, c) {
                    e.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(b, j) {
                    this.onbeforeunload === j && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, j, c, d) {
            b = e.extend(new e.Event, c, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(b, null, j) : e.event.dispatch.call(j, b);
            b.isDefaultPrevented() && c.preventDefault()
        }
    };
    e.event.handle = e.event.dispatch;
    e.removeEvent = C.removeEventListener ? function(b, j, c) {
        b.removeEventListener && b.removeEventListener(j, c, !1)
    } : function(b, j, c) {
        j = "on" + j;
        b.detachEvent && ("undefined" == typeof b[j] && (b[j] = null), b.detachEvent(j, c))
    };
    e.Event = function(b, j) {
        if (this instanceof e.Event)
            b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? n : g) : this.type = b, j && e.extend(this, j), this.timeStamp = b && b.timeStamp || e.now(), this[e.expando] = !0;
        else
            return new e.Event(b, j)
    };
    e.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = n;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = n;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = n;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, j) {
        e.event.special[b] = {
            delegateType: j,
            bindType: j,
            handle: function(b) {
                var c,
                    s = b.relatedTarget,
                    d = b.handleObj;
                if (!s || s !== this && !e.contains(this, s))
                    b.type = d.origType, c = d.handler.apply(this, arguments), b.type = j;
                return c
            }
        }
    });
    e.support.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form : c) && !e._data(b, "_submit_attached") && (e.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), e._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.remove(this, "._submit")
        }
    });
    e.support.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (db.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)
                    e.event.add(this, "propertychange._change", function(b) {
                        "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                    }), e.event.add(this, "click._change", function(b) {
                        this._just_changed && !b.isTrigger && (this._just_changed = !1);
                        e.event.simulate("change", this, b, !0)
                    });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                db.test(b.nodeName) && !e._data(b, "_change_attached") && (e.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, !0)
                }), e._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var j = b.target;
            if (this !== j || b.isSimulated || b.isTrigger || "radio" !== j.type && "checkbox" !== j.type)
                return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return e.event.remove(this, "._change"), !db.test(this.nodeName)
        }
    });
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, j) {
        var c = 0,
            d = function(b) {
                e.event.simulate(j, b.target, e.event.fix(b), !0)
            };
        e.event.special[j] = {
            setup: function() {
                0 === c++ && C.addEventListener(b, d, !0)
            },
            teardown: function() {
                0 === --c && C.removeEventListener(b, d, !0)
            }
        }
    });
    e.fn.extend({
        on: function(b, j, d, l, f) {
            var q,
                m;
            if ("object" == typeof b) {
                "string" != typeof j && (d = d || j, j = c);
                for (m in b)
                    this.on(m, j, d, b[m], f);
                return this
            }
            null == d && null == l ? (l = j, d = j = c) : null == l && ("string" == typeof j ? (l = d, d = c) : (l = d, d = j, j = c));
            if (!1 === l)
                l = g;
            else if (!l)
                return this;
            return 1 === f && (q = l, l = function(b) {
                return e().off(b), q.apply(this, arguments)
            }, l.guid = q.guid || (q.guid = e.guid++)), this.each(function() {
                e.event.add(this, b, l, d, j)
            })
        },
        one: function(b, j, c, d) {
            return this.on(b, j, c, d, 1)
        },
        off: function(b, j, d) {
            var l,
                f;
            if (b && b.preventDefault && b.handleObj)
                return l = b.handleObj, e(b.delegateTarget).off(l.namespace ? l.origType + "." + l.namespace : l.origType, l.selector, l.handler), this;
            if ("object" == typeof b) {
                for (f in b)
                    this.off(f, j, b[f]);
                return this
            }
            if (!1 === j || "function" == typeof j)
                d = j, j = c;
            return !1 === d && (d = g), this.each(function() {
                e.event.remove(this, b, d, j)
            })
        },
        bind: function(b, j, c) {
            return this.on(b, null, j, c)
        },
        unbind: function(b, j) {
            return this.off(b, null, j)
        },
        live: function(b, j, c) {
            return e(this.context).on(b, this.selector, j, c), this
        },
        die: function(b, j) {
            return e(this.context).off(b, this.selector || "**", j), this
        },
        delegate: function(b, j, c, d) {
            return this.on(j, b, c, d)
        },
        undelegate: function(b, j, c) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(j, b || "**", c)
        },
        trigger: function(b, j) {
            return this.each(function() {
                e.event.trigger(b, j, this)
            })
        },
        triggerHandler: function(b, j) {
            if (this[0])
                return e.event.trigger(b, j, this[0], !0)
        },
        toggle: function(b) {
            var j = arguments,
                c = b.guid || e.guid++,
                d = 0,
                l = function(c) {
                    var t = (e._data(this, "lastToggle" + b.guid) || 0) % d;
                    return e._data(this, "lastToggle" + b.guid, t + 1), c.preventDefault(), j[t].apply(this, arguments) || !1
                };
            for (l.guid = c; d < j.length;)
                j[d++].guid = c;
            return this.click(l)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        e.fn[c] = function(b, s) {
            return null == s && (s = b, b = null), 0 < arguments.length ? this.on(c, null, b, s) : this.trigger(c)
        };
        Tc.test(c) && (e.event.fixHooks[c] = e.event.keyHooks);
        Uc.test(c) && (e.event.fixHooks[c] = e.event.mouseHooks)
    });
    var Vc = b,
        F = function(b, c, d, e) {
            d = d || [];
            c = c || W;
            var l,
                q,
                m,
                f,
                g = c.nodeType;
            if (!b || "string" != typeof b)
                return d;
            if (1 !== g && 9 !== g)
                return [];
            m = Ka(c);
            if (!m && !e && (l = Wc.exec(b)))
                if (f = l[1])
                    if (9 === g) {
                        q = c.getElementById(f);
                        if (!q || !q.parentNode)
                            return d;
                        if (q.id === f)
                            return d.push(q), d
                    } else {
                        if (c.ownerDocument && (q = c.ownerDocument.getElementById(f)) && Sb(c, q) && q.id === f)
                            return d.push(q), d
                    }
                else {
                    if (l[2])
                        return oa.apply(d, pa.call(c.getElementsByTagName(b), 0)), d;
                    if ((f = l[3]) && Tb && c.getElementsByClassName)
                        return oa.apply(d, pa.call(c.getElementsByClassName(f), 0)), d
                }
            return eb(b.replace(La, "$1"), c, d, e, m)
        },
        va = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ia = function(b) {
            return X(function(c) {
                return c = +c, X(function(d, e) {
                    for (var l, f = b([], d.length, c), m = f.length; m--;)
                        d[l = f[m]] && (d[l] = !(e[l] = d[l]))
                })
            })
        },
        Ma = function(b, c, d) {
            if (b === c)
                return d;
            for (b = b.nextSibling; b;) {
                if (b === c)
                    return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function(b, c) {
            var d,
                e,
                l,
                f,
                m,
                g,
                p;
            if (m = Vb[N][b])
                return c ? 0 : m.slice(0);
            m = b;
            g = [];
            for (p = G.preFilter; m;) {
                if (!d || (e = Xc.exec(m)))
                    e && (m = m.slice(e[0].length)), g.push(l = []);
                d = !1;
                if (e = Yc.exec(m))
                    l.push(d = new Wb(e.shift())), m = m.slice(d.length), d.type = e[0].replace(La, " ");
                for (f in G.filter)
                    (e = Na[f].exec(m)) && (!p[f] || (e = p[f](e, W, !0))) && (l.push(d = new Wb(e.shift())), m = m.slice(d.length), d.type = f, d.matches = e);
                if (!d)
                    break
            }
            return c ? m.length : m ? F.error(b) : Vb(b, g).slice(0)
        },
        gb = function(b, c, d) {
            var e = c.dir,
                l = d && "parentNode" === c.dir,
                f = Zc++;
            return c.first ? function(c, j, d) {
                for (; c = c[e];)
                    if (l || 1 === c.nodeType)
                        return b(c, j, d)
            } : function(c, j, d) {
                if (d)
                    for (; c = c[e];) {
                        if ((l || 1 === c.nodeType) && b(c, j, d))
                            return c
                    }
                else
                    for (var t, g = wa + " " + f + " ", p = g + fb; c = c[e];)
                        if (l || 1 === c.nodeType) {
                            if ((t = c[N]) === p)
                                return c.sizset;
                            if ("string" == typeof t && 0 === t.indexOf(g)) {
                                if (c.sizset)
                                    return c
                            } else {
                                c[N] = p;
                                if (b(c, j, d))
                                    return c.sizset = !0, c;
                                c.sizset = !1
                            }
                        }
            }
        },
        hb = function(b) {
            return 1 < b.length ? function(c, d, e) {
                for (var l = b.length; l--;)
                    if (!b[l](c, d, e))
                        return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, d, e, l) {
            for (var f, m = [], g = 0, p = b.length, u = null != c; g < p; g++)
                if (f = b[g])
                    if (!d || d(f, e, l))
                        m.push(f), u && c.push(g);
            return m
        },
        ib = function(b, c, d, e, l, f) {
            return e && !e[N] && (e = ib(e)), l && !l[N] && (l = ib(l, f)), X(function(m, f, q, g) {
                if (!m || !l) {
                    var p,
                        u,
                        r = [],
                        n = [],
                        y = f.length;
                    if (!(u = m)) {
                        u = c || "*";
                        var z = q.nodeType ? [q] : q,
                            A = [];
                        p = 0;
                        for (var x = z.length; p < x; p++)
                            F(u, z[p], A, m);
                        u = A
                    }
                    z = b && (m || !c) ? Pa(u, r, b, q, g) : u;
                    A = d ? l || (m ? b : y || e) ? [] : f : z;
                    d && d(z, A, q, g);
                    if (e) {
                        u = Pa(A, n);
                        e(u, [], q, g);
                        for (q = u.length; q--;)
                            if (p = u[q])
                                A[n[q]] = !(z[n[q]] = p)
                    }
                    if (m)
                        for (q = b && A.length; q--;) {
                            if (p = A[q])
                                m[r[q]] = !(f[r[q]] = p)
                        }
                    else
                        A = Pa(A === f ? A.splice(y, A.length) : A), l ? l(null, f, A, g) : oa.apply(f, A)
                }
            })
        },
        jb = function(b) {
            var c,
                d,
                e,
                l = b.length,
                f = G.relative[b[0].type];
            d = f || G.relative[" "];
            for (var m = f ? 1 : 0, g = gb(function(b) {
                    return b === c
                }, d, !0), p = gb(function(b) {
                    return -1 < Xb.call(c, b)
                }, d, !0), u = [function(b, s, d) {
                    return !f && (d || s !== Qa) || ((c = s).nodeType ? g(b, s, d) : p(b, s, d))
                }]; m < l; m++)
                if (d = G.relative[b[m].type])
                    u = [gb(hb(u), d)];
                else {
                    d = G.filter[b[m].type].apply(null, b[m].matches);
                    if (d[N]) {
                        for (e = ++m; e < l && !G.relative[b[e].type]; e++)
                            ;
                        return ib(1 < m && hb(u), 1 < m && b.slice(0, m - 1).join("").replace(La, "$1"), d, m < e && jb(b.slice(m, e)), e < l && jb(b = b.slice(e)), e < l && b.join(""))
                    }
                    u.push(d)
                }
            return hb(u)
        },
        eb = function(b, c, d, e, l) {
            var f,
                m,
                g,
                p,
                u = Oa(b);
            if (!e && 1 === u.length) {
                m = u[0] = u[0].slice(0);
                if (2 < m.length && "ID" === (g = m[0]).type && 9 === c.nodeType && !l && G.relative[m[1].type]) {
                    c = G.find.ID(g.matches[0].replace(ja, ""), c, l)[0];
                    if (!c)
                        return d;
                    b = b.slice(m.shift().length)
                }
                for (f = Na.POS.test(b) ? -1 : m.length - 1; 0 <= f; f--) {
                    g = m[f];
                    if (G.relative[p = g.type])
                        break;
                    if (p = G.find[p])
                        if (e = p(g.matches[0].replace(ja, ""), kb.test(m[0].type) && c.parentNode || c, l)) {
                            m.splice(f, 1);
                            b = e.length && m.join("");
                            if (!b)
                                return oa.apply(d, pa.call(e, 0)), d;
                            break
                        }
                }
            }
            return lb(b, u)(e, c, l, d, kb.test(b)), d
        },
        Yb = function() {},
        fb,
        mb,
        G,
        Ra,
        Ka,
        Sb,
        lb,
        nb,
        xa,
        Qa,
        Zb = !0,
        N = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        W = Vc.document,
        V = W.documentElement,
        wa = 0,
        Zc = 0,
        $c = [].pop,
        oa = [].push,
        pa = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b)
                    return c;
            return -1
        },
        X = function(b, c) {
            return b[N] = null == c || c, b
        },
        ob = function() {
            var b = {},
                c = [];
            return X(function(d, e) {
                return c.push(d) > G.cacheLength && delete b[c.shift()], b[d] = e
            }, b)
        },
        $b = ob(),
        Vb = ob(),
        ac = ob(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        pb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(pb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        kb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + pb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        ca = function(b) {
            var c = W.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        dd = ca(function(b) {
            return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = ca(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = ca(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = ca(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = ca(function(b) {
            b.id = N + 0;
            b.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>";
            V.insertBefore(b, V.firstChild);
            var c = W.getElementsByName && W.getElementsByName(N).length === 2 + W.getElementsByName(N + 0).length;
            return mb = !W.getElementById(N), V.removeChild(b), c
        });
    try {
        pa.call(V.childNodes, 0)[0].nodeType
    } catch (Qd) {
        pa = function(b) {
            for (var c, d = []; c = this[b]; b++)
                d.push(c);
            return d
        }
    }
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        return 0 < F(c, null, null, [b]).length
    };
    Ra = F.getText = function(b) {
        var c,
            d = "",
            e = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent)
                    return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling)
                    d += Ra(b)
            } else {
                if (3 === c || 4 === c)
                    return b.nodeValue
            }
        else
            for (; c = b[e]; e++)
                d += Ra(c);
        return d
    };
    Ka = F.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = F.contains = V.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            e = c && c.parentNode;
        return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
    } : V.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b)
                return !0;
        return !1
    };
    F.attr = function(b, c) {
        var d,
            e = Ka(b);
        return e || (c = c.toLowerCase()), (d = G.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    G = F.selectors = {
        cacheLength: 50,
        createPseudo: X,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: mb ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d)
                    return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d)
                    return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName)
                    return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var e, l = [], f = 0; e = d[f]; f++)
                        1 === e.nodeType && l.push(e);
                    return l
                }
                return d
            },
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName)
                    return c.getElementsByName(name)
            },
            CLASS: Tb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d)
                    return c.getElementsByClassName(b)
            }
        },
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
            ATTR: function(b) {
                return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || F.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && F.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c,
                    d;
                if (Na.CHILD.test(b[0]))
                    return null;
                if (b[3])
                    b[2] = b[3];
                else if (c = b[4])
                    ad.test(c) && (d = Oa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: mb ? function(b) {
                return b = b.replace(ja, ""), function(c) {
                    return c.getAttribute("id") === b
                }
            } : function(b) {
                return b = b.replace(ja, ""), function(c) {
                    return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ja, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[N][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))), function(b) {
                    return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                }
            },
            ATTR: function(b, c, d) {
                return function(e) {
                    e = F.attr(e, b);
                    return null == e ? "!=" === c : c ? (e += "", "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, e) {
                return "nth" === b ? function(b) {
                    var c,
                        j;
                    c = b.parentNode;
                    if (1 === d && 0 === e)
                        return !0;
                    if (c) {
                        j = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (j++, b === c)); c = c.nextSibling)
                            ;
                    }
                    return j -= e, j === d || 0 === j % d && 0 <= j / d
                } : function(c) {
                    var j = c;
                    switch (b) {
                    case "only":
                    case "first":
                        for (; j = j.previousSibling;)
                            if (1 === j.nodeType)
                                return !1;
                        if ("first" === b)
                            return !0;
                        j = c;
                    case "last":
                        for (; j = j.nextSibling;)
                            if (1 === j.nodeType)
                                return !1;
                        return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d,
                    e = G.pseudos[b] || G.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return e[N] ? e(c) : 1 < e.length ? (d = [b, b, "", c], G.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function(b, d) {
                    for (var s, l = e(b, c), t = l.length; t--;)
                        s = Xb.call(b, l[t]), b[s] = !(d[s] = l[t])
                }) : function(b) {
                    return e(b, 0, d)
                }) : e
            }
        },
        pseudos: {
            not: X(function(b) {
                var c = [],
                    d = [],
                    e = lb(b.replace(La, "$1"));
                return e[N] ? X(function(b, c, j, d) {
                    d = e(b, null, d, []);
                    for (var s = b.length; s--;)
                        if (j = d[s])
                            b[s] = !(c[s] = j)
                }) : function(b, s, l) {
                    return c[0] = b, e(c, null, l, d), !d.pop()
                }
            }),
            has: X(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: X(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !G.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c)
                        return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c,
                    d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ia(function() {
                return [0]
            }),
            last: ia(function(b, c) {
                return [c - 1]
            }),
            eq: ia(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ia(function(b, c) {
                for (var d = 0; d < c; d += 2)
                    b.push(d);
                return b
            }),
            odd: ia(function(b, c) {
                for (var d = 1; d < c; d += 2)
                    b.push(d);
                return b
            }),
            lt: ia(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;)
                    b.push(c);
                return b
            }),
            gt: ia(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;)
                    b.push(d);
                return b
            })
        }
    };
    nb = V.compareDocumentPosition ? function(b, c) {
        return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c)
            return xa = !0, 0;
        if (b.sourceIndex && c.sourceIndex)
            return b.sourceIndex - c.sourceIndex;
        var d,
            e,
            l = [],
            f = [];
        d = b.parentNode;
        e = c.parentNode;
        var m = d;
        if (d === e)
            return Ma(b, c);
        if (!d)
            return -1;
        if (!e)
            return 1;
        for (; m;)
            l.unshift(m), m = m.parentNode;
        for (m = e; m;)
            f.unshift(m), m = m.parentNode;
        d = l.length;
        e = f.length;
        for (m = 0; m < d && m < e; m++)
            if (l[m] !== f[m])
                return Ma(l[m], f[m]);
        return m === d ? Ma(b, f[m], -1) : Ma(l[m], c, 1)
    };
    [0, 0].sort(nb);
    Zb = !xa;
    F.uniqueSort = function(b) {
        var c,
            d = 1;
        xa = Zb;
        b.sort(nb);
        if (xa)
            for (; c = b[d]; d++)
                c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    lb = F.compile = function(b, c) {
        var d,
            e = [],
            l = [],
            f = ac[N][b];
        if (!f) {
            c || (c = Oa(b));
            for (d = c.length; d--;)
                f = jb(c[d]), f[N] ? e.push(f) : l.push(f);
            var m = 0 < e.length,
                g = 0 < l.length,
                p = function(b, c, d, j, s) {
                    var f,
                        t,
                        q = [],
                        u = 0,
                        r = "0",
                        n = b && [],
                        y = null != s,
                        z = Qa,
                        A = b || g && G.find.TAG("*", s && c.parentNode || c),
                        x = wa += null == z ? 1 : Math.E;
                    for (y && (Qa = c !== W && c, fb = p.el); null != (s = A[r]); r++) {
                        if (g && s) {
                            for (f = 0; t = l[f]; f++)
                                if (t(s, c, d)) {
                                    j.push(s);
                                    break
                                }
                            y && (wa = x, fb = ++p.el)
                        }
                        m && ((s = !t && s) && u--, b && n.push(s))
                    }
                    u += r;
                    if (m && r !== u) {
                        for (f = 0; t = e[f]; f++)
                            t(n, q, c, d);
                        if (b) {
                            if (0 < u)
                                for (; r--;)
                                    !n[r] && !q[r] && (q[r] = $c.call(j));
                            q = Pa(q)
                        }
                        oa.apply(j, q);
                        y && !b && 0 < q.length && 1 < u + e.length && F.uniqueSort(j)
                    }
                    return y && (wa = x, Qa = z), n
                };
            d = (p.el = 0, m ? X(p) : p);
            f = ac(b, d)
        }
        return f
    };
    if (W.querySelectorAll) {
        var cc,
            hd = eb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Y = [":focus"],
            Sa = [":active", ":focus"],
            Ta = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector || V.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Y.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Y.push(":enabled", ":disabled")
        });
        Y = RegExp(Y.join("|"));
        eb = function(b, c, d, e, l) {
            if (!e && !l && (!Y || !Y.test(b))) {
                var f,
                    m,
                    g = !0,
                    p = N;
                m = c;
                f = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    f = Oa(b);
                    (g = c.getAttribute("id")) ? p = g.replace(id, "\\$&") : c.setAttribute("id", p);
                    p = "[id='" + p + "'] ";
                    for (m = f.length; m--;)
                        f[m] = p + f[m].join("");
                    m = kb.test(b) && c.parentNode || c;
                    f = f.join(",")
                }
                if (f)
                    try {
                        return oa.apply(d, pa.call(m.querySelectorAll(f), 0)), d
                    } catch (u) {} finally {
                        g || c.removeAttribute("id")
                    }
            }
            return hd(b, c, d, e, l)
        };
        Ta && (ca(function(b) {
            cc = Ta.call(b, "div");
            try {
                Ta.call(b, "[test!='']:sizzle"), Sa.push("!=", pb)
            } catch (c) {}
        }), Sa = RegExp(Sa.join("|")), F.matchesSelector = function(b, c) {
            c = c.replace(jd, "='$1']");
            if (!Ka(b) && !Sa.test(c) && (!Y || !Y.test(c)))
                try {
                    var d = Ta.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType)
                        return d
                } catch (e) {}
            return 0 < F(c, null, null, [b]).length
        })
    }
    G.pseudos.nth = G.pseudos.eq;
    G.filters = Yb.prototype = G.pseudos;
    G.setFilters = new Yb;
    F.attr = e.attr;
    e.find = F;
    e.expr = F.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique = F.uniqueSort;
    e.text = F.getText;
    e.isXMLDoc = F.isXML;
    e.contains = F.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = e.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function(b) {
            var c,
                d,
                l,
                f,
                g,
                m,
                p = this;
            if ("string" != typeof b)
                return e(b).filter(function() {
                    c = 0;
                    for (d = p.length; c < d; c++)
                        if (e.contains(p[c], this))
                            return !0
                });
            m = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (l = m.length, e.find(b, this[c], m), 0 < c)
                    for (f = l; f < m.length; f++)
                        for (g = 0; g < l; g++)
                            if (m[g] === m[f]) {
                                m.splice(f--, 1);
                                break
                            }
            return m
        },
        has: function(b) {
            var c,
                d = e(b, this),
                l = d.length;
            return this.filter(function() {
                for (c = 0; c < l; c++)
                    if (e.contains(this, d[c]))
                        return !0
            })
        },
        not: function(b) {
            return this.pushStack(r(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(r(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= e(b, this.context).index(this[0]) : 0 < e.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, l = 0, f = this.length, g = [], m = dc.test(b) || "string" != typeof b ? e(b, c || this.context) : 0; l < f; l++)
                for (d = this[l]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (m ? -1 < m.index(d) : e.find.matchesSelector(d, b)) {
                        g.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return g = 1 < g.length ? e.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? e(b, c) : e.makeArray(b && b.nodeType ? [b] : b),
                l = e.merge(this.get(), d);
            return this.pushStack(x(d[0]) || x(l[0]) ? l : e.unique(l))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    e.fn.andSelf = e.fn.addBack;
    e.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return e.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return e.dir(b, "parentNode", d)
        },
        next: function(b) {
            return B(b, "nextSibling")
        },
        prev: function(b) {
            return B(b, "previousSibling")
        },
        nextAll: function(b) {
            return e.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return e.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return e.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return e.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return e.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return e.sibling(b.firstChild)
        },
        contents: function(b) {
            return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : e.merge([], b.childNodes)
        }
    }, function(b, c) {
        e.fn[b] = function(d, l) {
            var f = e.map(this, c, d);
            return kd.test(b) || (l = d), l && "string" == typeof l && (f = e.filter(l, f)), f = 1 < this.length && !md[b] ? e.unique(f) : f, 1 < this.length && ld.test(b) && (f = f.reverse()), this.pushStack(f, b, Z.call(arguments).join(","))
        }
    });
    e.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? e.find.matchesSelector(c[0], b) ? [c[0]] : [] : e.find.matches(b, c)
        },
        dir: function(b, d, l) {
            var f = [];
            for (b = b[d]; b && 9 !== b.nodeType && (l === c || 1 !== b.nodeType || !e(b).is(l));)
                1 === b.nodeType && f.push(b), b = b[d];
            return f
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling)
                1 === b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var wb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        qb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        rb = RegExp("<(?:" + wb + ")[\\s/>]", "i"),
        xb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        U = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = y(C),
        sb = hc.appendChild(C.createElement("div"));
    U.optgroup = U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    e.support.htmlSerialize || (U._default = [1, "X<div>", "</div>"]);
    e.fn.extend({
        text: function(b) {
            return e.access(this, function(b) {
                return b === c ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (e.isFunction(b))
                return this.each(function(c) {
                    e(this).wrapAll(b.call(this, c))
                });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;)
                        b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return e.isFunction(b) ? this.each(function(c) {
                e(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = e(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = e.isFunction(b);
            return this.each(function(d) {
                e(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!x(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this)
                });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(b, this), "before", this.selector)
            }
        },
        after: function() {
            if (!x(this[0]))
                return this.domManip(arguments, !1, function(b) {
                    this.parentNode.insertBefore(b, this.nextSibling)
                });
            if (arguments.length) {
                var b = e.clean(arguments);
                return this.pushStack(e.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, l = 0; null != (d = this[l]); l++)
                if (!b || e.filter(b, [d]).length)
                    !c && 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && e.cleanData(b.getElementsByTagName("*")); b.firstChild;)
                    b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return e.clone(this, b, c)
            })
        },
        html: function(b) {
            return e.access(this, function(b) {
                var d = this[0] || {},
                    l = 0,
                    s = this.length;
                if (b === c)
                    return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (e.support.htmlSerialize || !rb.test(b)) && (e.support.leadingWhitespace || !qb.test(b)) && !U[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; l < s; l++)
                            d = this[l] || {}, 1 === d.nodeType && (e.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (f) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return x(this[0]) ? this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this : e.isFunction(b) ? this.each(function(c) {
                var d = e(this),
                    l = d.html();
                d.replaceWith(b.call(this, c, l))
            }) : ("string" != typeof b && (b = e(b).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                e(this).remove();
                c ? e(c).before(b) : e(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, l) {
            b = [].concat.apply([], b);
            var f,
                g,
                q,
                m = 0,
                p = b[0],
                u = [],
                r = this.length;
            if (!e.support.checkClone && 1 < r && "string" == typeof p && gc.test(p))
                return this.each(function() {
                    e(this).domManip(b, d, l)
                });
            if (e.isFunction(p))
                return this.each(function(f) {
                    var m = e(this);
                    b[0] = p.call(this, f, d ? m.html() : c);
                    m.domManip(b, d, l)
                });
            if (this[0]) {
                f = e.buildFragment(b, this, u);
                q = f.fragment;
                g = q.firstChild;
                1 === q.childNodes.length && (q = g);
                if (g) {
                    d = d && e.nodeName(g, "tr");
                    for (f = f.cacheable || r - 1; m < r; m++)
                        l.call(d && e.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === f ? q : e.clone(q, !0, !0))
                }
                q = g = null;
                u.length && e.each(u, function(b, c) {
                    c.src ? e.ajax ? e.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : e.error("no ajax") : e.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    e.buildFragment = function(b, d, l) {
        var f,
            g,
            q,
            m = b[0];
        return d = d || C, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof m && 512 > m.length && d === C && "<" === m.charAt(0) && !rd.test(m) && (e.support.checkClone || !gc.test(m)) && (e.support.html5Clone || !rb.test(m)) && (g = !0, f = e.fragments[m], q = f !== c), f || (f = d.createDocumentFragment(), e.clean(b, d, f, l), g && (e.fragments[m] = q && f)), {
            fragment: f,
            cacheable: g
        }
    };
    e.fragments = {};
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        e.fn[b] = function(d) {
            var l,
                f = 0,
                g = [];
            d = e(d);
            var m = d.length;
            l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === m)
                return d[c](this[0]), this;
            for (; f < m; f++)
                l = (0 < f ? this.clone(!0) : this).get(), e(d[f])[c](l), g = g.concat(l);
            return this.pushStack(g, b, d.selector)
        }
    });
    e.extend({
        clone: function(b, c, d) {
            var f,
                g,
                q,
                m;
            e.support.html5Clone || e.isXMLDoc(b) || !rb.test("<" + b.nodeName + ">") ? m = b.cloneNode(!0) : (sb.innerHTML = b.outerHTML, sb.removeChild(m = sb.firstChild));
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !e.isXMLDoc(b)) {
                l(b, m);
                f = p(b);
                g = p(m);
                for (q = 0; f[q]; ++q)
                    g[q] && l(f[q], g[q])
            }
            if (c && (A(b, m), d)) {
                f = p(b);
                g = p(m);
                for (q = 0; f[q]; ++q)
                    A(f[q], g[q])
            }
            return m
        },
        clean: function(b, c, d, l) {
            var f,
                g,
                m,
                p,
                r,
                n,
                z,
                A = c === C && hc,
                x = [];
            if (!c || "undefined" == typeof c.createDocumentFragment)
                c = C;
            for (f = 0; null != (m = b[f]); f++)
                if ("number" == typeof m && (m += ""), m) {
                    if ("string" == typeof m)
                        if (pd.test(m)) {
                            A = A || y(c);
                            n = c.createElement("div");
                            A.appendChild(n);
                            m = m.replace(ec, "<$1></$2>");
                            g = (fc.exec(m) || ["", ""])[1].toLowerCase();
                            p = U[g] || U._default;
                            r = p[0];
                            for (n.innerHTML = p[1] + m + p[2]; r--;)
                                n = n.lastChild;
                            if (!e.support.tbody) {
                                r = od.test(m);
                                p = "table" === g && !r ? n.firstChild && n.firstChild.childNodes : "<table>" === p[1] && !r ? n.childNodes : [];
                                for (g = p.length - 1; 0 <= g; --g)
                                    e.nodeName(p[g], "tbody") && !p[g].childNodes.length && p[g].parentNode.removeChild(p[g])
                            }
                            !e.support.leadingWhitespace && qb.test(m) && n.insertBefore(c.createTextNode(qb.exec(m)[0]), n.firstChild);
                            m = n.childNodes;
                            n.parentNode.removeChild(n)
                        } else
                            m = c.createTextNode(m);
                    m.nodeType ? x.push(m) : e.merge(x, m)
                }
            n && (m = n = A = null);
            if (!e.support.appendChecked)
                for (f = 0; null != (m = x[f]); f++)
                    e.nodeName(m, "input") ? u(m) : "undefined" != typeof m.getElementsByTagName && e.grep(m.getElementsByTagName("input"), u);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type))
                        return l ? l.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (f = 0; null != (m = x[f]); f++)
                    if (!e.nodeName(m, "script") || !b(m))
                        d.appendChild(m), "undefined" != typeof m.getElementsByTagName && (z = e.grep(e.merge([], m.getElementsByTagName("script")), b), x.splice.apply(x, [f + 1, 0].concat(z)), f += z.length)
            }
            return x
        },
        cleanData: function(b, c) {
            for (var d, l, f, g, m = 0, p = e.expando, u = e.cache, r = e.support.deleteExpando, n = e.event.special; null != (f = b[m]); m++)
                if (c || e.acceptData(f))
                    if (d = (l = f[p]) && u[l]) {
                        if (d.events)
                            for (g in d.events)
                                n[g] ? e.event.remove(f, g) : e.removeEvent(f, g, d.handle);
                        u[l] && (delete u[l], r ? delete f[p] : f.removeAttribute ? f.removeAttribute(p) : f[p] = null, e.deletedIds.push(l))
                    }
        }
    });
    var Ua,
        da;
    e.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = e.uaMatch(zc.userAgent);
    da = {};
    Ua.browser && (da[Ua.browser] = !0, da.version = Ua.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    e.browser = da;
    e.sub = function() {
        function b(c, d) {
            return new b.fn.init(c, d)
        }
        e.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, l) {
            return l && l instanceof e && !(l instanceof b) && (l = b(l)), e.fn.init.call(this, d, l, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(C);
        return b
    };
    var Q,
        la,
        ma,
        tb = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        ya = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Ya = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ea = ["Top", "Right", "Bottom", "Left"],
        yb = ["Webkit", "O", "Moz", "ms"],
        zd = e.fn.toggle;
    e.fn.extend({
        css: function(b, d) {
            return e.access(this, function(b, d, j) {
                return j !== c ? e.style(b, d, j) : e.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return e.isFunction(b) && e.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : M(this)) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Q(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, l, f) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g,
                    p,
                    m,
                    u = e.camelCase(d),
                    r = b.style;
                d = e.cssProps[u] || (e.cssProps[u] = z(r, u));
                m = e.cssHooks[d] || e.cssHooks[u];
                if (l === c)
                    return m && "get" in m && (g = m.get(b, !1, f)) !== c ? g : r[d];
                p = typeof l;
                "string" === p && (g = xd.exec(l)) && (l = (g[1] + 1) * g[2] + parseFloat(e.css(b, d)), p = "number");
                if (!(null == l || "number" === p && isNaN(l)))
                    if ("number" === p && !e.cssNumber[u] && (l += "px"), !m || !("set" in m) || (l = m.set(b, l, f)) !== c)
                        try {
                            r[d] = l
                        } catch (n) {}
            }
        },
        css: function(b, d, l, f) {
            var g,
                p,
                m,
                u = e.camelCase(d);
            return d = e.cssProps[u] || (e.cssProps[u] = z(b.style, u)), m = e.cssHooks[d] || e.cssHooks[u], m && "get" in m && (g = m.get(b, !0, f)), g === c && (g = Q(b, d)), "normal" === g && d in jc && (g = jc[d]), l || f !== c ? (p = parseFloat(g), l || e.isNumeric(p) ? p || 0 : g) : g
        },
        swap: function(b, c, d) {
            var e,
                l = {};
            for (e in c)
                l[e] = b.style[e], b.style[e] = c[e];
            d = d.call(b);
            for (e in c)
                b.style[e] = l[e];
            return d
        }
    });
    b.getComputedStyle ? Q = function(c, d) {
        var l,
            f,
            g,
            p,
            m = b.getComputedStyle(c, null),
            u = c.style;
        return m && (l = m[d], "" === l && !e.contains(c.ownerDocument, c) && (l = e.style(c, d)), ya.test(l) && ic.test(d) && (f = u.width, g = u.minWidth, p = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = m.width, u.width = f, u.minWidth = g, u.maxWidth = p)), l
    } : C.documentElement.currentStyle && (Q = function(b, c) {
        var d,
            e,
            l = b.currentStyle && b.currentStyle[c],
            f = b.style;
        return null == l && f && f[c] && (l = f[c]), ya.test(l) && !vd.test(c) && (d = f.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), f.left = "fontSize" === c ? "1em" : l, l = f.pixelLeft + "px", f.left = d, e && (b.runtimeStyle.left = e)), "" === l ? "auto" : l
    });
    e.each(["height", "width"], function(b, c) {
        e.cssHooks[c] = {
            get: function(b, d, l) {
                if (d)
                    return 0 === b.offsetWidth && wd.test(Q(b, "display")) ? e.swap(b, yd, function() {
                        return K(b, c, l)
                    }) : K(b, c, l)
            },
            set: function(b, d, l) {
                return E(b, d, l ? Xa(b, c, l, e.support.boxSizing && "border-box" === e.css(b, "boxSizing")) : 0)
            }
        }
    });
    e.support.opacity || (e.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                l = b.currentStyle,
                f = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = l && l.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === e.trim(g.replace(tb, "")) && d.removeAttribute && (d.removeAttribute("filter"), l && !l.filter)))
                d.filter = tb.test(g) ? g.replace(tb, f) : g + " " + f
        }
    });
    e(function() {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function(b, c) {
                return e.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c)
                        return Q(b, "marginRight")
                })
            }
        });
        !e.support.pixelPosition && e.fn.position && e.each(["top", "left"], function(b, c) {
            e.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var l = Q(b, c);
                        return ya.test(l) ? e(b).position()[c] + "px" : l
                    }
                }
            }
        })
    });
    e.expr && e.expr.filters && (e.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !e.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || Q(b, "display"))
    }, e.expr.filters.visible = function(b) {
        return !e.expr.filters.hidden(b)
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        e.cssHooks[b + c] = {
            expand: function(d) {
                var e = "string" == typeof d ? d.split(" ") : [d],
                    l = {};
                for (d = 0; 4 > d; d++)
                    l[b + ea[d] + c] = e[d] || e[d - 2] || e[0];
                return l
            }
        };
        ic.test(b) || (e.cssHooks[b + c].set = E)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? e.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = e(this).val();
                return null == d ? null : e.isArray(d) ? e.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    e.param = function(b, d) {
        var l,
            f = [],
            g = function(b, c) {
                c = e.isFunction(c) ? c() : null == c ? "" : c;
                f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(b) || b.jquery && !e.isPlainObject(b))
            e.each(b, function() {
                g(this.name, this.value)
            });
        else
            for (l in b)
                P(l, b[l], d, g);
        return f.join("&").replace(Ad, "+")
    };
    var qa,
        ka,
        Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = e.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ka = yc.href
    } catch (Rd) {
        ka = C.createElement("a"), ka.href = "", ka = ka.href
    }
    qa = mc.exec(ka.toLowerCase()) || [];
    e.fn.load = function(b, d, l) {
        if ("string" != typeof b && nc)
            return nc.apply(this, arguments);
        if (!this.length)
            return this;
        var f,
            g,
            p,
            m = this,
            u = b.indexOf(" ");
        return 0 <= u && (f = b.slice(u, b.length), b = b.slice(0, u)), e.isFunction(d) ? (l = d, d = c) : d && "object" == typeof d && (g = "POST"), e.ajax({
            url: b,
            type: g,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                l && m.each(l, p || [b.responseText, c, b])
            }
        }).done(function(b) {
            p = arguments;
            m.html(f ? e("<div>").append(b.replace(Hd, "")).find(f) : b)
        }), this
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        e.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    e.each(["get", "post"], function(b, d) {
        e[d] = function(b, l, f, g) {
            return e.isFunction(l) && (g = g || f, f = l, l = c), e.ajax({
                type: d,
                url: b,
                data: l,
                success: f,
                dataType: g
            })
        }
    });
    e.extend({
        getScript: function(b, d) {
            return e.get(b, c, d, "script")
        },
        getJSON: function(b, c, d) {
            return e.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? sa(b, e.ajaxSettings) : (c = b, b = e.ajaxSettings), sa(b, c), b
        },
        ajaxSettings: {
            url: ka,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: za(Za),
        ajaxTransport: za(oc),
        ajax: function(b, d) {
            function l(b, d, j, s) {
                var p,
                    q,
                    r,
                    t,
                    y,
                    E = d;
                if (2 !== F) {
                    F = 2;
                    u && clearTimeout(u);
                    m = c;
                    g = s || "";
                    H.readyState = 0 < b ? 4 : 0;
                    if (j) {
                        t = z;
                        s = H;
                        var L,
                            R,
                            aa,
                            K,
                            I = t.contents,
                            G = t.dataTypes,
                            P = t.responseFields;
                        for (R in P)
                            R in j && (s[P[R]] = j[R]);
                        for (; "*" === G[0];)
                            G.shift(), L === c && (L = t.mimeType || s.getResponseHeader("content-type"));
                        if (L)
                            for (R in I)
                                if (I[R] && I[R].test(L)) {
                                    G.unshift(R);
                                    break
                                }
                        if (G[0] in j)
                            aa = G[0];
                        else {
                            for (R in j) {
                                if (!G[0] || t.converters[R + " " + G[0]]) {
                                    aa = R;
                                    break
                                }
                                K || (K = R)
                            }
                            aa = aa || K
                        }
                        t = j = aa ? (aa !== G[0] && G.unshift(aa), j[aa]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (z.ifModified && (y = H.getResponseHeader("Last-Modified"), y && (e.lastModified[f] = y), y = H.getResponseHeader("Etag"), y && (e.etag[f] = y)), 304 === b)
                            E = "notmodified", p = !0;
                        else {
                            var J;
                            a:
                            {
                                p = z;
                                q = t;
                                var N,
                                    E = p.dataTypes.slice();
                                j = E[0];
                                L = {};
                                R = 0;
                                p.dataFilter && (q = p.dataFilter(q, p.dataType));
                                if (E[1])
                                    for (J in p.converters)
                                        L[J.toLowerCase()] = p.converters[J];
                                for (; r = E[++R];)
                                    if ("*" !== r) {
                                        if ("*" !== j && j !== r) {
                                            J = L[j + " " + r] || L["* " + r];
                                            if (!J)
                                                for (N in L)
                                                    if (y = N.split(" "), y[1] === r && (J = L[j + " " + y[0]] || L["* " + y[0]])) {
                                                        !0 === J ? J = L[N] : !0 !== L[N] && (r = y[0], E.splice(R--, 0, r));
                                                        break
                                                    }
                                            if (!0 !== J)
                                                if (J && p["throws"])
                                                    q = J(q);
                                                else
                                                    try {
                                                        q = J(q)
                                                    } catch (O) {
                                                        J = {
                                                            state: "parsererror",
                                                            error: J ? O : "No conversion from " + j + " to " + r
                                                        };
                                                        break a
                                                    }
                                        }
                                        j = r
                                    }
                                J = {
                                    state: "success",
                                    data: q
                                }
                            }p = J;
                            E = p.state;
                            q = p.data;
                            r = p.error;
                            p = !r
                        }
                    else if (r = E, !E || b)
                        E = "error", 0 > b && (b = 0);
                    H.status = b;
                    H.statusText = (d || E) + "";
                    p ? B.resolveWith(A, [q, E, H]) : B.rejectWith(A, [H, E, r]);
                    H.statusCode(C);
                    C = c;
                    n && x.trigger("ajax" + (p ? "Success" : "Error"), [H, z, p ? q : r]);
                    M.fireWith(A, [H, E]);
                    n && (x.trigger("ajaxComplete", [H, z]), --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var f,
                g,
                p,
                m,
                u,
                r,
                n,
                y,
                z = e.ajaxSetup({}, d),
                A = z.context || z,
                x = A !== z && (A.nodeType || A instanceof e) ? e(A) : e.event,
                B = e.Deferred(),
                M = e.Callbacks("once memory"),
                C = z.statusCode || {},
                E = {},
                L = {},
                F = 0,
                K = "canceled",
                H = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!F) {
                            var d = b.toLowerCase();
                            b = L[d] = L[d] || b;
                            E[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === F ? g : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === F) {
                            if (!p)
                                for (p = {}; d = Ed.exec(g);)
                                    p[d[1].toLowerCase()] = d[2];
                            d = p[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return F || (z.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || K, m && m.abort(b), l(0, b), this
                    }
                };
            B.promise(H);
            H.success = H.done;
            H.error = H.fail;
            H.complete = M.add;
            H.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > F)
                        for (c in b)
                            C[c] = [C[c], b[c]];
                    else
                        c = b[H.status], H.always(c)
                }
                return this
            };
            z.url = ((b || z.url) + "").replace(Dd, "").replace(Gd, qa[1] + "//");
            z.dataTypes = e.trim(z.dataType || "*").toLowerCase().split(fa);
            null == z.crossDomain && (r = mc.exec(z.url.toLowerCase()) || !1, z.crossDomain = r && r.join(":") + (r[3] ? "" : "http:" === r[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            z.data && z.processData && "string" != typeof z.data && (z.data = e.param(z.data, z.traditional));
            na(Za, z, d, H);
            if (2 === F)
                return H;
            n = z.global;
            z.type = z.type.toUpperCase();
            z.hasContent = !Fd.test(z.type);
            n && 0 === e.active++ && e.event.trigger("ajaxStart");
            if (!z.hasContent && (z.data && (z.url += (lc.test(z.url) ? "&" : "?") + z.data, delete z.data), f = z.url, !1 === z.cache)) {
                r = e.now();
                var I = z.url.replace(Id, "$1_=" + r);
                z.url = I + (I === z.url ? (lc.test(z.url) ? "&" : "?") + "_=" + r : "")
            }
            (z.data && z.hasContent && !1 !== z.contentType || d.contentType) && H.setRequestHeader("Content-Type", z.contentType);
            z.ifModified && (f = f || z.url, e.lastModified[f] && H.setRequestHeader("If-Modified-Since", e.lastModified[f]), e.etag[f] && H.setRequestHeader("If-None-Match", e.etag[f]));
            H.setRequestHeader("Accept", z.dataTypes[0] && z.accepts[z.dataTypes[0]] ? z.accepts[z.dataTypes[0]] + ("*" !== z.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : z.accepts["*"]);
            for (y in z.headers)
                H.setRequestHeader(y, z.headers[y]);
            if (!z.beforeSend || !1 !== z.beforeSend.call(A, H, z) && 2 !== F) {
                K = "abort";
                for (y in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    H[y](z[y]);
                if (m = na(oc, z, d, H)) {
                    H.readyState = 1;
                    n && x.trigger("ajaxSend", [H, z]);
                    z.async && 0 < z.timeout && (u = setTimeout(function() {
                        H.abort("timeout")
                    }, z.timeout));
                    try {
                        F = 1, m.send(E, l)
                    } catch (G) {
                        if (2 > F)
                            l(-1, G);
                        else
                            throw G;
                    }
                } else
                    l(-1, "No Transport");
                return H
            }
            return H.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = e.now();
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || e.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    e.ajaxPrefilter("json jsonp", function(d, j, l) {
        var f,
            g,
            p,
            m = d.data,
            u = d.url,
            r = !1 !== d.jsonp,
            n = r && Va.test(u),
            z = r && !n && "string" == typeof m && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(m);
        if ("jsonp" === d.dataTypes[0] || n || z)
            return f = d.jsonpCallback = e.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, g = b[f], n ? d.url = u.replace(Va, "$1" + f) : z ? d.data = m.replace(Va, "$1" + f) : r && (d.url += (Jd.test(u) ? "&" : "?") + d.jsonp + "=" + f), d.converters["script json"] = function() {
                return p || e.error(f + " was not called"), p[0]
            }, d.dataTypes[0] = "json", b[f] = function() {
                p = arguments
            }, l.always(function() {
                b[f] = g;
                d[f] && (d.jsonpCallback = j.jsonpCallback, qc.push(f));
                p && e.isFunction(g) && g(p[0]);
                p = g = c
            }), "script"
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return e.globalEval(b), b
            }
        }
    });
    e.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    e.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d,
                e = C.head || C.getElementsByTagName("head")[0] || C.documentElement;
            return {
                send: function(l, f) {
                    d = C.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, l) {
                        if (l || !d.readyState || /loaded|complete/.test(d.readyState))
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, l || f(200, "success")
                    };
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ra,
        ub = b.ActiveXObject ? function() {
            for (var b in ra)
                ra[b](0, 1)
        } : !1,
        Ld = 0;
    e.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && zb()))
            a:
            {
                try {
                    c = new b.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (d) {}
                c = void 0
            }return c
    } : zb;
    var vb = e.ajaxSettings.xhr();
    e.extend(e.support, {
        ajax: !!vb,
        cors: !!vb && "withCredentials" in vb
    });
    e.support.ajax && e.ajaxTransport(function(d) {
        if (!d.crossDomain || e.support.cors) {
            var l;
            return {
                send: function(f, g) {
                    var p,
                        u,
                        m = d.xhr();
                    d.username ? m.open(d.type, d.url, d.async, d.username, d.password) : m.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (u in d.xhrFields)
                            m[u] = d.xhrFields[u];
                    d.mimeType && m.overrideMimeType && m.overrideMimeType(d.mimeType);
                    !d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in f)
                            m.setRequestHeader(u, f[u])
                    } catch (r) {}
                    m.send(d.hasContent && d.data || null);
                    l = function(b, f) {
                        var u,
                            r,
                            q,
                            n,
                            t;
                        try {
                            if (l && (f || 4 === m.readyState))
                                if (l = c, p && (m.onreadystatechange = e.noop, ub && delete ra[p]), f)
                                    4 !== m.readyState && m.abort();
                                else {
                                    u = m.status;
                                    q = m.getAllResponseHeaders();
                                    n = {};
                                    (t = m.responseXML) && t.documentElement && (n.xml = t);
                                    try {
                                        n.text = m.responseText
                                    } catch (z) {}
                                    try {
                                        r = m.statusText
                                    } catch (y) {
                                        r = ""
                                    }
                                    !u && d.isLocal && !d.crossDomain ? u = n.text ? 200 : 404 : 1223 === u && (u = 204)
                                }
                        } catch (A) {
                            f || g(-1, A)
                        }
                        n && g(u, r, n, q)
                    };
                    d.async ? 4 === m.readyState ? setTimeout(l, 0) : (p = ++Ld, ub && (ra || (ra = {}, e(b).unload(ub)), ra[p] = l), m.onreadystatechange = l) : l()
                },
                abort: function() {
                    l && l(0, 1)
                }
            }
        }
    });
    var Aa,
        Wa,
        Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [function(b, c, d) {
            var l,
                f,
                g,
                m,
                p,
                u,
                r = this,
                n = b.style,
                z = {},
                y = [],
                A = b.nodeType && M(b);
            d.queue || (p = e._queueHooks(b, "fx"), null == p.unqueued && (p.unqueued = 0, u = p.empty.fire, p.empty.fire = function() {
                p.unqueued || u()
            }), p.unqueued++, r.always(function() {
                r.always(function() {
                    p.unqueued--;
                    e.queue(b, "fx").length || p.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === e.css(b, "display") && "none" === e.css(b, "float") && (!e.support.inlineBlockNeedsLayout || "inline" === J(b.nodeName) ? n.display = "inline-block" : n.zoom = 1));
            d.overflow && (n.overflow = "hidden", e.support.shrinkWrapBlocks || r.done(function() {
                n.overflow = d.overflow[0];
                n.overflowX = d.overflow[1];
                n.overflowY = d.overflow[2]
            }));
            for (l in c)
                f = c[l], Md.exec(f) && (delete c[l], f !== (A ? "hide" : "show") && y.push(l));
            if (f = y.length) {
                g = e._data(b, "fxshow") || e._data(b, "fxshow", {});
                A ? e(b).show() : r.done(function() {
                    e(b).hide()
                });
                r.done(function() {
                    var c;
                    e.removeData(b, "fxshow", !0);
                    for (c in z)
                        e.style(b, c, z[c])
                });
                for (l = 0; l < f; l++)
                    c = y[l], m = r.createTween(c, A ? g[c] : 0), z[c] = g[c] || e.style(b, c), c in g || (g[c] = m.start, A && (m.end = m.start, m.start = "width" === c || "height" === c ? 1 : 0))
            }
        }],
        ta = {
            "*": [function(b, c) {
                var d,
                    l,
                    f = this.createTween(b, c),
                    g = Nd.exec(c),
                    m = f.cur(),
                    p = +m || 0,
                    u = 1,
                    r = 20;
                if (g) {
                    d = +g[2];
                    l = g[3] || (e.cssNumber[b] ? "" : "px");
                    if ("px" !== l && p) {
                        p = e.css(f.elem, b, !0) || d || 1;
                        do u = u || ".5", p /= u, e.style(f.elem, b, p + l);
                        while (u !== (u = f.cur() / m) && 1 !== u && --r)
                    }
                    f.unit = l;
                    f.start = p;
                    f.end = g[1] ? p + (g[1] + 1) * d : d
                }
                return f
            }]
        };
    e.Animation = e.extend(Bb, {
        tweener: function(b, c) {
            e.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, l = 0, f = b.length; l < f; l++)
                d = b[l], ta[d] = ta[d] ||
                [], ta[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    e.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, l, f, g) {
            this.elem = b;
            this.prop = d;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = l;
            this.unit = g || (e.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = S.propHooks[this.prop];
            return b && b.get ? b.get(this) : S.propHooks._default.get(this)
        },
        run: function(b) {
            var c,
                d = S.propHooks[this.prop];
            return this.options.duration ? this.pos = c = e.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this
        }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = e.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                e.fx.step[b.prop] ? e.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[e.cssProps[b.prop]] || e.cssHooks[b.prop]) ? e.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    e.each(["toggle", "show", "hide"], function(b, c) {
        var d = e.fn[c];
        e.fn[c] = function(l, f, g) {
            return null == l || "boolean" == typeof l || !b && e.isFunction(l) && e.isFunction(f) ? d.apply(this, arguments) : this.animate(Ca(c, !0), l, f, g)
        }
    });
    e.fn.extend({
        fadeTo: function(b, c, d, e) {
            return this.filter(M).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, e)
        },
        animate: function(b, c, d, l) {
            var f = e.isEmptyObject(b),
                g = e.speed(c, d, l);
            c = function() {
                var c = Bb(this, e.extend({}, b), g);
                f && c.stop(!0)
            };
            return f || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, l) {
            var f = function(b) {
                var c = b.stop;
                delete b.stop;
                c(l)
            };
            return "string" != typeof b && (l = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    j = e.timers,
                    g = e._data(this);
                if (d)
                    g[d] && g[d].stop && f(g[d]);
                else
                    for (d in g)
                        g[d] && g[d].stop && Od.test(d) && f(g[d]);
                for (d = j.length; d--;)
                    j[d].elem === this && (null == b || j[d].queue === b) && (j[d].anim.stop(l), c = !1, j.splice(d, 1));
                (c || !l) && e.dequeue(this, b)
            })
        }
    });
    e.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        e.fn[b] = function(b, d, e) {
            return this.animate(c, b, d, e)
        }
    });
    e.speed = function(b, c, d) {
        var l = b && "object" == typeof b ? e.extend({}, b) : {
            complete: d || !d && c || e.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !e.isFunction(c) && c
        };
        l.duration = e.fx.off ? 0 : "number" == typeof l.duration ? l.duration : l.duration in e.fx.speeds ? e.fx.speeds[l.duration] : e.fx.speeds._default;
        if (null == l.queue || !0 === l.queue)
            l.queue = "fx";
        return l.old = l.complete, l.complete = function() {
            e.isFunction(l.old) && l.old.call(this);
            l.queue && e.dequeue(this, l.queue)
        }, l
    };
    e.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    e.timers = [];
    e.fx = S.prototype.init;
    e.fx.tick = function() {
        for (var b, c = e.timers,
            d = 0; d < c.length; d++)
            b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || e.fx.stop()
    };
    e.fx.timer = function(b) {
        b() && e.timers.push(b) && !Wa && (Wa = setInterval(e.fx.tick, e.fx.interval))
    };
    e.fx.interval = 13;
    e.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fx.step = {};
    e.expr && e.expr.filters && (e.expr.filters.animated = function(b) {
        return e.grep(e.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    e.fn.offset = function(b) {
        if (arguments.length)
            return b === c ? this : this.each(function(c) {
                e.offset.setOffset(this, b, c)
            });
        var d,
            l,
            f,
            g,
            p,
            m,
            u,
            r = {
                top: 0,
                left: 0
            },
            n = this[0],
            z = n && n.ownerDocument;
        if (z)
            return (l = z.body) === n ? e.offset.bodyOffset(n) : (d = z.documentElement, e.contains(d, n) ? ("undefined" != typeof n.getBoundingClientRect && (r = n.getBoundingClientRect()), f = Cb(z), g = d.clientTop || l.clientTop || 0, p = d.clientLeft || l.clientLeft || 0, m = f.pageYOffset || d.scrollTop, u = f.pageXOffset || d.scrollLeft, {
                top: r.top + m - g,
                left: r.left + u - p
            }) : r)
    };
    e.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return e.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(e.css(b, "marginTop")) || 0, d += parseFloat(e.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var l = e.css(b, "position");
            "static" === l && (b.style.position = "relative");
            var f = e(b),
                g = f.offset(),
                p = e.css(b, "top"),
                u = e.css(b, "left"),
                r = {},
                n = {},
                z,
                y;
            ("absolute" === l || "fixed" === l) && -1 < e.inArray("auto", [p, u]) ? (n = f.position(), z = n.top, y = n.left) : (z = parseFloat(p) || 0, y = parseFloat(u) || 0);
            e.isFunction(c) && (c = c.call(b, d, g));
            null != c.top && (r.top = c.top - g.top + z);
            null != c.left && (r.left = c.left - g.left + y);
            "using" in c ? c.using.call(b, r) : f.css(r)
        }
    };
    e.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    l = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(e.css(b, "marginTop")) || 0, d.left -= parseFloat(e.css(b, "marginLeft")) || 0, l.top += parseFloat(e.css(c[0], "borderTopWidth")) || 0, l.left += parseFloat(e.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - l.top,
                    left: d.left - l.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || C.body; b && !rc.test(b.nodeName) && "static" === e.css(b, "position");)
                    b = b.offsetParent;
                return b || C.body
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var l = /Y/.test(d);
        e.fn[b] = function(f) {
            return e.access(this, function(b, f, g) {
                var p = Cb(b);
                if (g === c)
                    return p ? d in p ? p[d] : p.document.documentElement[f] : b[f];
                p ? p.scrollTo(l ? e(p).scrollLeft() : g, l ? g : e(p).scrollTop()) : b[f] = g
            }, b, f, arguments.length, null)
        }
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        e.each({
            padding: "inner" +
            b,
            content: d,
            "": "outer" + b
        }, function(l, f) {
            e.fn[f] = function(f, g) {
                var p = arguments.length && (l || "boolean" != typeof f),
                    u = l || (!0 === f || !0 === g ? "margin" : "border");
                return e.access(this, function(d, l, f) {
                    var j;
                    return e.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (j = d.documentElement, Math.max(d.body["scroll" + b], j["scroll" + b], d.body["offset" + b], j["offset" + b], j["client" + b])) : f === c ? e.css(d, l, f, u) : e.style(d, l, f, u)
                }, d, p ? f : c, p, null)
            }
        })
    });
    b.jQuery = b.$ = e;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return e
    })
})(window);
var portraitMode = !1,
    mobilePortraitWidth = 800,
    mobilePortraitHeight = 600,
    mobileLandscapeWidth = 800,
    mobileLandscapeHeight = 600,
    mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
    mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
    desktopWidth = 800,
    desktopHeight = 600,
    w,
    h,
    multiplier,
    destW,
    destH,
    dynamicClickableEntityDivs = {},
    coreDivsToResize = ["game", "play", "orientate"],
    advancedDivsToResize = {
        MobileAdInGamePreroll: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height +
            20
        },
        MobileAdInGameEnd: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll2: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd2: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        },
        MobileAdInGamePreroll3: {
            "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
        },
        MobileAdInGameEnd3: {
            "box-width": _SETTINGS.Ad.Mobile.End.Width +
            2,
            "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
        }
    };
function adjustLayers(b) {
    for (i = 0; i < coreDivsToResize.length; i++)
        ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
    for (key in advancedDivsToResize)
        try {
            $("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
            2)
        } catch (c) {
            console.log(c)
        }
    $("#ajaxbar").width(w);
    $("#ajaxbar").height(h)
}
function sizeHandler() {
    $("#game") && (w = window.innerWidth, h = window.innerHeight, ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier), widthRatio = window.innerWidth / mobileWidth, heightRatio = window.innerHeight / mobileHeight, adjustLayers(), window.scrollTo(0, 1))
}
function orientationHandler() {
    console.log("changing orientation ...");
    ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
    sizeHandler()
}
function fixSamsungHandler() {
    ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchmove", function(b) {
        b.preventDefault();
        return !1
    }, !1), document.addEventListener("touchend", function(b) {
        b.preventDefault();
        return !1
    }, !1))
}
window.addEventListener("resize", function() {
    orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
    orientationHandler()
}, !1);
document.ontouchmove = function() {
    window.scrollTo(0, 1)
};
function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();
function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var f = c[d].split("=");
        if (decodeURIComponent(f[0]) == b)
            return decodeURIComponent(f[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults)
        this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var f in b)
            this.settings[f] = b[f];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource)
        throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            f;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (f in this.HTML5API)
                this[f] = this.HTML5API[f];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (f in this.FLASHAPI)
                this[f] = this.FLASHAPI[f];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else
            throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c,
            d = this.settings.flashMediaElement,
            f,
            g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var n = document.createElement("object");
            n.id = "jukebox-flashstream-" + this.id;
            n.setAttribute("type", "application/x-shockwave-flash");
            n.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            n.setAttribute("width", "0");
            n.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (f in g)
                b = document.createElement("param"), b.setAttribute("name", f), b.setAttribute("value", g[f]), n.appendChild(b);
            c.outerHTML = n.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (f in g)
                c.setAttribute(f, g[f]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c)
            void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                f;
            if (void 0 !== d[b])
                f = d[b].start;
            else if ("number" === typeof b) {
                f = b;
                for (var g in d)
                    if (f >= d[g].start && f <=
                    d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== f && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(f))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b)
            return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox)
    throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults)
        this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b)
            this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                    e: "3gp",
                    m: ["audio/3gpp", "audio/amr"]
                }, {
                    e: "aac",
                    m: ["audio/aac", "audio/aacp"]
                }, {
                    e: "amr",
                    m: ["audio/amr", "audio/3gpp"]
                }, {
                    e: "caf",
                    m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                }, {
                    e: "m4a",
                    m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                }, {
                    e: "mp3",
                    m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                }, {
                    e: "mpga",
                    m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                }, {
                    e: "mp4",
                    m: ["audio/mp4", "video/mp4"]
                }, {
                    e: "ogg",
                    m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                }, {
                    e: "wav",
                    m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                }, {
                    e: "webm",
                    m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                }], d, f, g = 0, n = c.length; g < n; g++)
                if (f = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var x = 0, B = c[g].m.length; x < B; x++)
                        if (d = c[g].m[x], "" !== b.canPlayType(d)) {
                            this.codecs[f] = d;
                            break
                        } else
                            this.codecs[f] || (this.codecs[f] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject)
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
            } catch (r) {}
        !0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var f = this.__clones[d];
            if (null === f.isPlaying && f.origin === b)
                return f
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c)
                d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players)
                    b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var f = b[c],
                g = f.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g])
                return f
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        f = !1;
    if ("undefined" !== typeof AudioContext)
        c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext)
        c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) {
        d = !1;
        try {
            new Audio
        } catch (g) {
            f = !0
        }
    } else
        d = !1, f = !0;
    if (d) {
        var n = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        n.gain.value = 1;
        n.connect(c.destination)
    }
    var x = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = f;
        this._howls = []
    };
    x.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (n.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++)
                            this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? n.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (n.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                    for (var f = 0; f < this._howls[c]._audioNode.length; f++)
                        this._howls[c]._audioNode[f].muted = b
        }
    };
    var B = new x,
        x = null;
    if (!f)
        var x = new Audio,
            r = {
                mp3: !!x.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                opus: !!x.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!x.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!x.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                m4a: !!(x.canPlayType("audio/x-m4a;") || x.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(x.canPlayType("audio/x-mp4;") || x.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!x.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            };
    var y = function(b) {
        this._autoplay = b.autoplay || !1;
        this._buffer = b.buffer || !1;
        this._duration = b.duration || 0;
        this._format = b.format || null;
        this._loop = b.loop || !1;
        this._loaded = !1;
        this._sprite = b.sprite || {};
        this._src = b.src || "";
        this._pos3d = b.pos3d || [0, 0, -0.5];
        this._volume = void 0 !== b.volume ? b.volume : 1;
        this._urls = b.urls || [];
        this._rate = b.rate || 1;
        this._onload = [b.onload || function() {}];
        this._onloaderror = [b.onloaderror || function() {}];
        this._onend = [b.onend || function() {}];
        this._onpause = [b.onpause || function() {}];
        this._onplay = [b.onplay || function() {}];
        this._onendTimer = [];
        this._webAudio = d && !this._buffer;
        this._audioNode = [];
        this._webAudio && this._setupAudioNode();
        B._howls.push(this);
        this.load()
    };
    y.prototype = {
        load: function() {
            var d = this,
                g = null;
            if (!f) {
                for (var u = 0; u < d._urls.length; u++) {
                    var n,
                        y;
                    if (d._format)
                        n = d._format;
                    else if (y = d._urls[u].toLowerCase().split("?")[0], n = (n = y.match(/.+\.([^?]+)(\?|$)/)) && 2 <= n.length ? n : y.match(/data\:audio\/([^?]+);/))
                        n = n[1];
                    else {
                        d.on("loaderror");
                        return
                    }
                    if (r[n]) {
                        g = d._urls[u];
                        break
                    }
                }
                if (g) {
                    d._src = g;
                    if (d._webAudio) {
                        var x = g;
                        if (x in b)
                            d._duration = b[x].duration, A(d);
                        else {
                            var E = new XMLHttpRequest;
                            E.open("GET", x, !0);
                            E.responseType = "arraybuffer";
                            E.onload = function() {
                                c.decodeAudioData(E.response, function(c) {
                                    c && (b[x] = c, A(d, c))
                                }, function() {
                                    d.on("loaderror")
                                })
                            };
                            E.onerror = function() {
                                d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode, d.load())
                            };
                            try {
                                E.send()
                            } catch (Xa) {
                                E.onerror()
                            }
                        }
                    } else {
                        var K = new Audio;
                        d._audioNode.push(K);
                        K.src = g;
                        K._pos = 0;
                        K.preload = "auto";
                        K.volume = B._muted ? 0 : d._volume * B.volume();
                        b[g] = d;
                        var J = function() {
                            d._duration = Math.ceil(10 * K.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
                                _default: [0, 1E3 * d._duration]
                            });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            K.removeEventListener("canplaythrough", J, !1)
                        };
                        K.addEventListener("canplaythrough", J, !1);
                        K.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, f) {
            var g = this;
            "function" === typeof d && (f = d);
            if (!d || "function" === typeof d)
                d = "_default";
            if (!g._loaded)
                return g.on("load", function() {
                    g.play(d, f)
                }), g;
            if (!g._sprite[d])
                return "function" === typeof f && f(), g;
            g._inactiveNode(function(r) {
                r._sprite = d;
                var n = 0 < r._pos ? r._pos : g._sprite[d][0] / 1E3,
                    y = g._sprite[d][1] / 1E3 - r._pos,
                    A = !(!g._loop && !g._sprite[d][2]),
                    x = "string" === typeof f ? f : Math.round(Date.now() * Math.random()) + "",
                    K,
                    J = {
                        id: x,
                        sprite: d,
                        loop: A
                    };
                K = setTimeout(function() {
                    !g._webAudio && A && g.stop(J.id, J.timer).play(d, J.id);
                    g._webAudio && !A && (g._nodeById(J.id).paused = !0, g._nodeById(J.id)._pos = 0);
                    !g._webAudio && !A && g.stop(J.id, J.timer);
                    g.on("end", x)
                }, 1E3 * y);
                g._onendTimer.push(K);
                J.timer = g._onendTimer[g._onendTimer.length - 1];
                if (g._webAudio) {
                    K = g._sprite[d][0] / 1E3;
                    var P = g._sprite[d][1] / 1E3;
                    r.id = x;
                    r.paused = !1;
                    K = [A, K, P];
                    P = g._nodeById(x);
                    P.bufferSource = c.createBufferSource();
                    P.bufferSource.buffer = b[g._src];
                    P.bufferSource.connect(P.panner);
                    P.bufferSource.loop = K[0];
                    K[0] && (P.bufferSource.loopStart = K[1], P.bufferSource.loopEnd = K[1] + K[2]);
                    P.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    r.gain.value = g._volume;
                    "undefined" === typeof r.bufferSource.start ? r.bufferSource.noteGrainOn(0, n, y) : r.bufferSource.start(0, n, y)
                } else if (4 === r.readyState)
                    r.id = x, r.currentTime = n, r.muted = B._muted, r.volume = g._volume * B.volume(), setTimeout(function() {
                        r.play()
                    }, 0);
                else {
                    g._clearEndTimer(K);
                    var za = d,
                        na = f,
                        sa = function() {
                            g.play(za, na);
                            r.removeEventListener("canplaythrough", sa, !1)
                        };
                    r.addEventListener("canplaythrough", sa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof f && f(x);
                return g
            });
            return g
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded)
                return d.on("play", function() {
                    d.pause(b)
                }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = d.pos(null, b), d._webAudio) {
                    if (!f.bufferSource || f.paused)
                        return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else
                    f.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded)
                return d.on("play", function() {
                    d.stop(b)
                }), d;
            d._clearEndTimer(c || 0);
            var f = b ? d._nodeById(b) : d._activeNode();
            if (f)
                if (f._pos = 0, d._webAudio) {
                    if (!f.bufferSource || f.paused)
                        return d;
                    f.paused = !0;
                    "undefined" === typeof f.bufferSource.stop ? f.bufferSource.noteOff(0) : f.bufferSource.stop(0)
                } else
                    f.pause(), f.currentTime = 0;
            return d
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded)
                return c.on("play", function() {
                    c.mute(b)
                }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded)
                return c.on("play", function() {
                    c.unmute(b)
                }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded)
                    return d.on("play", function() {
                        d.volume(b, c)
                    }), d;
                var f = c ? d._nodeById(c) : d._activeNode();
                f && (d._webAudio ? f.gain.value = b : f.volume = b * B.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b, d) {
            var f = this;
            if (!f._loaded)
                return f.on("load", function() {
                    f.pos(b)
                }), "number" === typeof b ? f : f._pos || 0;
            b = parseFloat(b);
            var g = d ? f._nodeById(d) : f._activeNode();
            if (g)
                return 0 <= b ? (f.pause(d), g._pos = b, f.play(g._sprite, d), f) : f._webAudio ? g._pos + (c.currentTime - f._playStart) : g.currentTime;
            if (0 <= b)
                return f;
            for (g = 0; g < f._audioNode.length; g++)
                if (f._audioNode[g].paused && 4 === f._audioNode[g].readyState)
                    return f._webAudio ? f._audioNode[g]._pos : f._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, f) {
            var g = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded)
                return g.on("play", function() {
                    g.pos3d(b, c, d, f)
                }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var r = f ? g._nodeById(f) : g._activeNode();
                    r && (g._pos3d = [b, c, d], r.panner.setPosition(b, c, d))
                }
            } else
                return g._pos3d;
            return g
        },
        fade: function(b, c, d, f, g) {
            var r = this,
                n = Math.abs(b - c),
                y = b > c ? "down" : "up",
                n = n / 0.01,
                A = d / n;
            if (!r._loaded)
                return r.on("load", function() {
                    r.fade(b, c, d, f, g)
                }), r;
            r.volume(b, g);
            for (var x = 1; x <= n; x++)
                (function() {
                    var b = Math.round(1E3 * (r._volume + ("up" === y ? 0.01 : -0.01) * x)) / 1E3;
                    setTimeout(function() {
                        r.volume(b, g);
                        b === c && f && f()
                    }, A * x)
                })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, f) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(f);
                g.on("end")
            }, f)
        },
        _nodeById: function(b) {
            for (var c =
                this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b = this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var f;
                this._webAudio ? (f = this._setupAudioNode(), b(f)) : (this.load(), f = this._audioNode[this._audioNode.length - 1], f.addEventListener("loadedmetadata", function() {
                    b(f)
                }))
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++)
                this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--)
                this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            b = this._onendTimer.indexOf(b);
            b = 0 <= b ? b : 0;
            this._onendTimer[b] && (clearTimeout(this._onendTimer[b]), this._onendTimer.splice(b, 1))
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(n);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c)
                d.push(c);
            else
                for (var f = 0; f < d.length; f++)
                    c ? d[f].call(this, c) : d[f].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], f = c.toString(), g = 0; g < d.length; g++)
                if (f === d[g].toString()) {
                    d.splice(g, 1);
                    break
                }
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++)
                c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = B._howls.indexOf(this);
            null !== c && 0 <= c && B._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d)
        var A = function(b, c) {
            b._duration = c ? c.duration : b._duration;
            0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
            b._loaded || (b._loaded = !0, b.on("load"));
            b._autoplay && b.play()
        };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: B,
            Howl: y
        }
    });
    "undefined" !== typeof exports && (exports.Howler = B, exports.Howl = y);
    window.Howler = B;
    window.Howl = y
})();
(function(b) {
    Number.prototype.map = function(b, c, d, f) {
        return d + (f - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
        this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;)
            this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        var c = this;
        return function() {
            var d = Array.prototype.slice.call(arguments);
            return c.apply(b || null, d)
        }
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.20",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class)
                return b;
            if (b instanceof Array)
                for (var c = [], d = 0, f = b.length; d < f; d++)
                    c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b)
                    c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var f = c[d];
                if ("object" != typeof f || f instanceof HTMLElement || f instanceof ig.Class)
                    b[d] = f;
                else {
                    if (!b[d] || "object" != typeof b[d])
                        b[d] = f instanceof Array ? [] : {};
                    ig.merge(b[d], f)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b)
                return [];
            var c = [],
                d = [],
                f;
            for (f in b)
                c.push(f);
            c.sort();
            for (f = 0; f < c.length; f++)
                d.push(b[c[f]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var f = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = b["ms" + f] = b["moz" + f] = b["webkit" + f] = b["o" + f] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() +
            c.substr(1);
            return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, f, g) {
            var n = ig.$new("canvas");
            n.width = b.width;
            n.height = b.height;
            var z = n.getContext("2d");
            ig.System.SCALE.CRISP(n, z);
            var x = ig.getVendorAttribute(z, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(z, "getImageDataHD");
            var B = b.width / x,
                E = b.height / x;
            n.width = Math.ceil(B);
            n.height = Math.ceil(E);
            z.drawImage(b, 0, 0, B, E);
            return 1 === x ? z.getImageData(c, d, f, g) : z.getImageDataHD(c, d, f, g)
        },
        module: function(b) {
            if (ig._current)
                throw "Module '" + ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body)
                throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                f = ig.$new("script");
            f.type = "text/javascript";
            f.src = d;
            f.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            f.onerror = function() {
                throw "Failed to load module " +
                b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(f)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], f = !0, g = 0; g < d.requires.length; g++) {
                    var n = d.requires[g];
                    ig.modules[n] ? ig.modules[n].loaded || (f = !1) : (f = !1, ig._loadScript(n, d.name))
                }
                f && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b)
                ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    f = [];
                    n = ig._loadQueue[c].requires;
                    for (g = 0; g < n.length; g++)
                        d = ig.modules[n[g]], (!d || !d.loaded) && f.push(n[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + f.join(", ") + ")")
                }
                throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body)
                    return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
            b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !b.requestAnimationFrame; d++)
        b.requestAnimationFrame = b[c[d] + "RequestAnimationFrame"];
    if (b.requestAnimationFrame) {
        var f = 1,
            g = {};
        b.ig.setAnimation = function(c, d) {
            var n = f++;
            g[n] = !0;
            var l = function() {
                g[n] && (b.requestAnimationFrame(l, d), c())
            };
            b.requestAnimationFrame(l, d);
            return n
        };
        b.ig.clearAnimation = function(b) {
            delete g[b]
        }
    } else
        b.ig.setAnimation = function(c) {
            return b.setInterval(c, 1E3 / 60)
        }, b.ig.clearAnimation = function(c) {
            b.clearInterval(c)
        };
    var n = !1,
        x = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/;
    b.ig.Class = function() {};
    var B = function(b) {
        var c = this.prototype,
            d = {},
            f;
        for (f in b)
            "function" == typeof b[f] && "function" == typeof c[f] && x.test(b[f]) ? (d[f] = c[f], c[f] = function(b, c) {
                return function() {
                    var f = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = f;
                    return g
                }
            }(f, b[f])) : c[f] = b[f]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!n) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b)
                        return b
                }
                for (var c in this)
                    "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var f = this.prototype;
        n = !0;
        var g = new this;
        n = !1;
        for (var p in c)
            g[p] = "function" == typeof c[p] && "function" == typeof f[p] && x.test(c[p]) ? function(b, c) {
                return function() {
                    var d = this.parent;
                    this.parent = f[b];
                    var g = c.apply(this, arguments);
                    this.parent = d;
                    return g
                }
            }(p, c[p]) : c[p];
        d.prototype = g;
        d.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = B;
        return d
    }
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = this.width * b,
                d = this.height * b,
                f = ig.$new("canvas");
            f.width = this.width;
            f.height = this.height;
            f = f.getContext("2d");
            f.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            var f = f.getImageData(0, 0, this.width, this.height),
                g = ig.$new("canvas");
            g.width = c;
            g.height = d;
            for (var n = g.getContext("2d"), x = n.getImageData(0, 0, c, d), B = 0; B < d; B++)
                for (var r = 0; r < c; r++) {
                    var y = 4 * (Math.floor(B / b) * this.width + Math.floor(r / b)),
                        A = 4 * (B * c + r);
                    x.data[A] = f.data[y];
                    x.data[A + 1] = f.data[y + 1];
                    x.data[A + 2] = f.data[y + 2];
                    x.data[A + 3] = f.data[y + 3]
                }
            n.putImageData(x, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, f, g, n) {
            if (this.loaded) {
                var x = ig.system.scale;
                g = (g ? g : this.width) * x;
                n = (n ? n : this.height) * x;
                ig.system.context.drawImage(this.data, d ? d * x : 0, f ? f * x : 0, g, n, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, n);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, f, g, n, x) {
            g = g ? g : f;
            if (this.loaded && !(f > this.width || g > this.height)) {
                var B = ig.system.scale,
                    r = Math.floor(f * B),
                    y = Math.floor(g * B),
                    A = n ? -1 : 1,
                    l = x ? -1 : 1;
                if (n || x)
                    ig.system.context.save(), ig.system.context.scale(A, l);
                ig.system.context.drawImage(this.data, Math.floor(d * f) % this.width * B, Math.floor(d * f / this.width) * g * B, r, y, ig.system.getDrawPos(b) * A - (n ? r : 0), ig.system.getDrawPos(c) * l - (x ? y : 0), r, y);
                (n || x) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache)
            ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++)
                    c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++)
                c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, f) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, n = 0; n < b.length; n++)
                    this.draw(b[n], c, d + n * g, f)
            } else {
                if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER)
                    n = this._widthForLine(b), c -= f == ig.Font.ALIGN.CENTER ? n / 2 : n;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (n = 0; n < b.length; n++)
                    f = b.charCodeAt(n), c += this._drawChar(f - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length)
                return 0;
            var f = ig.system.scale,
                g = this.widthMap[b] * f,
                n = (this.height - 2) * f;
            ig.system.context.drawImage(this.data, this.indices[b] * f, 0, g, n, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, n);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, f = 0, g = 0; g < b.width; g++) {
                var n = 4 * g + 3;
                20 <= c.data[n] ? f++ : 10 >= c.data[n] && f && (this.widthMap.push(f), this.indices.push(g - f), d++, f = 0)
            }
            this.widthMap.push(f);
            this.indices.push(g - f)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                var d = ig.Sound.use[c];
                if (b.canPlayType(d.mime)) {
                    this.format = d;
                    break
                }
            }
            this.format || (ig.Sound.enabled = !1)
        },
        load: function(b, c, d) {
            var f = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var g = new Audio(f);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var n = new Audio(f);
            d && (n.addEventListener("canplaythrough", function B(c) {
                n.removeEventListener("canplaythrough", B, !1);
                d(b, !0, c)
            }, !1), n.addEventListener("error", function(c) {
                d(b, !0, c)
            }, !1));
            n.preload = "auto";
            n.load();
            this.clips[b] = [n];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++)
                    g = new Audio(f), g.load(), this.clips[b].push(g);
            return n
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended)
                    return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            if (this.currentTrack) {
                this.currentTrack.pause();
                try {
                    this.currentTrack.currentTime = 0
                } catch (b) {
                    console.log(b)
                }
            }
        },
        play: function(b) {
            if (b && this.namedTracks[b])
                b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack)
                return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks)
                this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks)
                this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++)
                this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++)
                    this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else
                this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c)
                this._unloaded.erase(b);
            else
                throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = 0;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, f, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, f, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run)
                this.delegate = b, this.startRunLoop();
            else
                throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            for (var c = ig.system.canvas, d = 0, f = 0; null != c;)
                d += c.offsetLeft, f += c.offsetTop, c = c.offsetParent;
            var c = b.pageX,
                g = b.pageY;
            b.touches && (c = b.touches[0].clientX, g = b.touches[0].clientY);
            this.mouse.x = (c - d) / ig.system.scale;
            this.mouse.y = (g - f) / ig.system.scale
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            if ("text" != b.target.type) {
                var c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1;
                ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b);
                if (c = this.bindings[c])
                    this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
            }
        },
        keyup: function(b) {
            if ("text" != b.target.type) {
                var c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1];
                c && (this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
            }
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                f = this;
            d.addEventListener("touchstart", function(b) {
                f.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                f.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup)
                this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        formats: {
            ogg: ".ogg",
            mp3: ".mp3"
        },
        jukebox: null,
        pausePosition: null,
        globalMute: !1,
        forceMuted: !1,
        muted: !1,
        bgmPlaying: !1,
        soundPlaying: !1,
        currentSoundPlaying: null,
        changeVolume: !1,
        soundBuffer: [],
        voSoundLoaded: [],
        sfxSoundLoaded: [],
        SOUNDID: {},
        voSoundsToLoad: [],
        sfxSoundsToLoad: [{
            name: "staticSound",
            path: "media/audio/play/static"
        }, {
            name: "openingSound",
            path: "media/audio/opening/opening"
        }, {
            name: "kittyopeningSound",
            path: "media/audio/opening/kittyopening"
        }, {
            name: "swing",
            path: "media/audio/game/swing"
        }, {
            name: "hit",
            path: "media/audio/game/hit"
        }, {
            name: "hurt",
            path: "media/audio/game/hurt"
        }, {
            name: "click",
            path: "media/audio/game/click"
        }, {
            name: "fight",
            path: "media/audio/game/fight"
        }, {
            name: "shine",
            path: "media/audio/game/shine"
        }, {
            name: "warning",
            path: "media/audio/game/warning"
        }, {
            name: "monitor_drop",
            path: "media/audio/game/monitor-drop"
        }],
        debug: !1,
        init: function() {
            ig.ua.mobile ? (this.setupJukebox(), this.initSfx()) : (this.initSfx(), this.setupDesktopMusic());
            this.setupWindowHandler()
        },
        allVoSoundLoaded: function() {
            if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
                this.debug && console.log("Vo ready");
                for (index = 0; index < this.voSoundLoaded.length; index++)
                    this.voSoundLoaded[index].on("end", function(b) {
                        b.isPlaying = !1;
                        this.soundBuffer.pop()
                    }.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function(b) {
                        b.isPlaying = !0
                    }.bind(this, this.voSoundLoaded[index]));
                return !0
            }
            return !1
        },
        allSfxSoundLoaded: function() {
            return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
        },
        stopBackgroundMusic: function() {
            ig.ua.mobile ? (this.pausePosition = this.jukebox.player.pause(), this.bgmPlaying = !1) : (this.bgmPlaying = !1, ig.music.pause())
        },
        playBackgroundMusic: function() {
            ig.ua.mobile ? (this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : this.jukebox.player.play(0, !0), this.bgmPlaying = !0) : (this.bgmPlaying = !0, ig.music.play())
        },
        playSound: function(b) {
            if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying)
                this.soundBuffer.push(b), b.play()
        },
        stopAllAndPlaySound: function(b) {
            this.stopAllSounds();
            this.playSound(b)
        },
        stopAllSounds: function() {
            for (index = 0; index < this.soundBuffer.length; index++)
                this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
        },
        addSound: function(b, c, d) {
            var f = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({
                urls: [f, c],
                onload: d
            }) : new Howl({
                urls: [f, c]
            })
        },
        _muteSounds: function() {
            for (i = 0; i < ig.resources.length; i++)
                ig.resources[i].multiChannel && ig.resources[i].stop();
            Howler.mute();
            this.debug && console.log("Sounds muted")
        },
        _unMuteSounds: function() {
            Howler.unmute();
            ig.Sound.enabled = !0;
            this.debug && console.log("Sounds can play")
        },
        focusBlurMute: function() {
            this.forceMuted || (this.stopBackgroundMusic(), Howler.mute())
        },
        focusBlurUnmute: function() {
            !this.forceMuted && !1 == this.changeVolume && (this.playBackgroundMusic(), Howler.unmute())
        },
        setForceMuted: function(b) {
            this.forceMuted = b
        },
        mute: function() {
            this._muteSounds();
            ig.ua.mobile ? this.jukebox && this.jukebox.player.pause() : ig.music.volume = 0;
            this.muted = !0
        },
        unmute: function() {
            this._unMuteSounds();
            ig.ua.mobile ? this.jukebox && this.jukebox.player.resume() : ig.music.volume = 1;
            this.muted = !1
        },
        setupWindowHandler: function() {
            "true" === getQueryVariable("webview") ? ($(window).focus(function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })) : (window.onfocus = function() {
                ig.ua.mobile && ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.focusBlurUnmute()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.focusBlurMute()
            })
        },
        initSfx: function() {
            for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.sfxSoundLoaded.push(this[b])
                }.bind(this, this.sfxSoundsToLoad[index].name);
                this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
            }
        },
        initVoSfx: function() {
            for (index = 0; index < this.voSoundsToLoad.length; index++) {
                var b = function(b) {
                    this.voSoundLoaded.push(this[b])
                }.bind(this, this.voSoundsToLoad[index].name);
                this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b)
            }
        },
        setupDesktopMusic: function() {
            ig.music.add("media/audio/game/bgm.*", "bgm")
        },
        setupJukebox: function() {
            ig.ua.mobile && (this.jukebox = new ig.Jukebox)
        },
        forceLoopBGM: function() {
            !this.forceMuted && this.jukebox && this.jukebox.player && (this.jukebox.player.getCurrentTime() || this.jukebox.player.resume(), this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.settings.spritemap.music.end && this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start) : this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.isPlaying.end && this.jukebox.player.resume(this.jukebox.player.isPlaying.start) : this.jukebox.player.backgroundMusic && this.jukebox.player.backgroundMusic.loop && this.jukebox.player.getCurrentTime() >= this.jukebox.player.backgroundMusic.end && this.jukebox.player.resume(this.jukebox.player.backgroundMusic.start))
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, f, g, n, x) {
        ig.system = new ig.System(b, d, f, g, n || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new (x || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, f) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!f;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.reset();
            this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        posMP: {
            x: 0,
            y: 0
        },
        posML: {
            x: 0,
            y: 0
        },
        enableReposition: !1,
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = b;
            this.pos.y = c;
            ig.global.wm || (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]);
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, f) {
            if (!this.animSheet)
                throw "No animSheet to add the animation " + b + " to.";
            c = new ig.Animation(this.animSheet, c, d, f);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, f) {
            return c ? (b + c * ig.system.tick).limit(-f, f) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-f, f)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y -
                    2 * c.ny * d) * this.bounciness
                } else
                    d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        reposition: function() {
            ig.ua.mobile && this.enableReposition && (portraitMode ? (this.pos.x = this.posMP.x, this.pos.y = this.posMP.y) : (this.pos.x = this.posML.x, this.pos.y = this.posML.y))
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x,
            this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
            b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED)
            d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED)
            d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var f = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -f : f, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -f / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var f = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -f : f, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else
            ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -f / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, f / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [[]],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                f = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= f && f < this.height ? this.data[f][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c / this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var n in this.tiledef)
                n | 0 > this.lastSlope && (this.lastSlope = n | 0)
        },
        trace: function(b, c, g, n, x, B) {
            var r = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                y = Math.ceil(Math.max(Math.abs(g), Math.abs(n)) / this.tilesize);
            if (1 < y)
                for (var A = g / y, l = n / y, p = 0; p < y && (A || l) && !(this._traceStep(r,
                b, c, A, l, x, B, g, n, p), b = r.pos.x, c = r.pos.y, r.collision.x && (g = A = 0), r.collision.y && (n = l = 0), r.collision.slope); p++)
                    ;
            else
                this._traceStep(r, b, c, g, n, x, B, g, n, 0);
            return r
        },
        _traceStep: function(b, c, g, n, x, B, r, y, A, l) {
            b.pos.x += n;
            b.pos.y += x;
            var p = 0;
            if (n) {
                var u = 0 < n ? B : 0,
                    z = 0 > n ? this.tilesize : 0,
                    p = Math.max(Math.floor(g / this.tilesize), 0),
                    M = Math.min(Math.ceil((g + r) / this.tilesize), this.height);
                n = Math.floor((b.pos.x + u) / this.tilesize);
                var L = Math.floor((c + u) / this.tilesize);
                if (0 < l || n == L || 0 > L || L >= this.width)
                    L = -1;
                if (0 <= n && n < this.width)
                    for (var E =
                    p; E < M && !(-1 != L && (p = this.data[E][L], 1 < p && p <= this.lastSlope && this._checkTileDef(b, p, c, g, y, A, B, r, L, E))); E++)
                        if (p = this.data[E][n], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(b, p, c, g, y, A, B, r, n, E)) {
                            if (1 < p && p <= this.lastSlope && b.collision.slope)
                                break;
                            b.collision.x = !0;
                            b.tile.x = p;
                            c = b.pos.x = n * this.tilesize - u + z;
                            y = 0;
                            break
                        }
            }
            if (x) {
                u = 0 < x ? r : 0;
                x = 0 > x ? this.tilesize : 0;
                p = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                z = Math.min(Math.ceil((b.pos.x + B) / this.tilesize), this.width);
                E = Math.floor((b.pos.y + u) / this.tilesize);
                M = Math.floor((g + u) / this.tilesize);
                if (0 < l || E == M || 0 > M || M >= this.height)
                    M = -1;
                if (0 <= E && E < this.height)
                    for (n = p; n < z && !(-1 != M && (p = this.data[M][n], 1 < p && p <= this.lastSlope && this._checkTileDef(b, p, c, g, y, A, B, r, n, M))); n++)
                        if (p = this.data[E][n], 1 == p || p > this.lastSlope || 1 < p && this._checkTileDef(b, p, c, g, y, A, B, r, n, E)) {
                            if (1 < p && p <= this.lastSlope && b.collision.slope)
                                break;
                            b.collision.y = !0;
                            b.tile.y = p;
                            b.pos.y = E * this.tilesize - u + x;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, n, x, B, r, y, A, l) {
            var p = this.tiledef[c];
            if (!p)
                return !1;
            c = (p[2] -
            p[0]) * this.tilesize;
            var u = (p[3] - p[1]) * this.tilesize,
                z = p[4];
            r = g + x + (0 > u ? r : 0) - (A + p[0]) * this.tilesize;
            y = n + B + (0 < c ? y : 0) - (l + p[1]) * this.tilesize;
            if (0 < c * y - u * r) {
                if (0 > x * -u + B * c)
                    return z;
                A = Math.sqrt(c * c + u * u);
                l = u / A;
                A = -c / A;
                var M = r * l + y * A,
                    p = l * M,
                    M = A * M;
                if (p * p + M * M >= x * x + B * B)
                    return z || 0.5 > c * (y - B) - u * (r - x);
                b.pos.x = g + x - p;
                b.pos.y = n + B - M;
                b.collision.slope = {
                    x: c,
                    y: u,
                    nx: l,
                    ny: A
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, n) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + n
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale,
                d = Math.ceil(b / this.chunkSize),
                f = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < f; g++) {
                this.preRenderedChunks[g] = [];
                for (var n = 0; n < d; n++)
                    this.preRenderedChunks[g][n] = this.preRenderChunk(n, g, n == d - 1 ? b - n * this.chunkSize : this.chunkSize, g == f - 1 ? c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, f) {
            var g = d / this.tilesize / ig.system.scale + 1,
                n = f / this.tilesize / ig.system.scale + 1,
                x = b * this.chunkSize / ig.system.scale % this.tilesize,
                B = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var r = ig.$new("canvas");
            r.width = d;
            r.height = f;
            d = ig.system.context;
            ig.system.context = r.getContext("2d");
            for (f = 0; f < g; f++)
                for (var y = 0; y < n; y++)
                    if (f + b < this.width && y + c < this.height) {
                        var A = this.data[y + c][f + b];
                        A && this.tiles.drawTile(f * this.tilesize - x, y * this.tilesize - B, A - 1, this.tilesize)
                    }
            ig.system.context = d;
            return r
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            this.repeat && (b %= this.width * this.tilesize * ig.system.scale, c %= this.height * this.tilesize * ig.system.scale);
            var d = Math.max(Math.floor(b /
                this.chunkSize), 0),
                f = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                n = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                x = this.preRenderedChunks[0].length,
                B = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, x), n = Math.min(n, B));
            for (var r = 0; f < n; f++) {
                for (var y = 0, A = d; A < g; A++) {
                    var l = this.preRenderedChunks[f % B][A % x],
                        p = -b + A * this.chunkSize - y,
                        u = -c + f * this.chunkSize - r;
                    ig.system.context.drawImage(l, p, u);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle =
                    "#f0f", ig.system.context.strokeRect(p, u, this.chunkSize, this.chunkSize));
                    this.repeat && l.width < this.chunkSize && p + l.width < ig.system.realWidth && (y = this.chunkSize - l.width, g++)
                }
                this.repeat && l.height < this.chunkSize && u + l.height < ig.system.realHeight && (r = this.chunkSize - l.height, n++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), f = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, n = this.scroll.y % this.tilesize, x = -g - this.tilesize, g = ig.system.width + this.tilesize -
                g, B = ig.system.height + this.tilesize - n, r = -1, n = -n - this.tilesize; n < B; r++, n += this.tilesize) {
                var y = r + f;
                if (y >= this.height || 0 > y) {
                    if (!this.repeat)
                        continue;
                    y = 0 < y ? y % this.height : (y + 1) % this.height + this.height - 1
                }
                for (var A = -1, l = x; l < g; A++, l += this.tilesize) {
                    b = A + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat)
                            continue;
                        b = 0 < b ? b % this.width : (b + 1) % this.width + this.width - 1
                    }
                    if (b = this.data[y][b])
                        (c = this.anims[b - 1]) ? c.draw(l, n) : this.tiles.drawTile(l, n, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevelWithoutEntities: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (var c = 0; c < b.layer.length; c++) {
                var d = b.layer[c];
                if ("collision" == d.name)
                    this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            }
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name)
                    this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var f = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    f.anims = this.backgroundAnims[d.tilesetName] || {};
                    f.repeat = d.repeat;
                    f.distance = d.distance;
                    f.foreground = !!d.foreground;
                    f.preRender = !!d.preRender;
                    f.name = d.name;
                    this.backgroundMaps.push(f)
                }
            for (c = 0; c < this.entities.length; c++)
                this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b)
                return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b)
                    return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var f = this.entities[d];
                f instanceof b && !f._killed && c.push(f)
            }
            return c
        },
        spawnEntity: function(b, c, d, f) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g)
                throw "Can't spawn entity of type " + b;
            b = new g(c, d, f || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++)
                this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort)
                this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b)
                    b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                this.backgroundMaps[b];
                if (c.foreground)
                    break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++)
                c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++)
                this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var f = {}, g = Math.floor(d.pos.y / this.cellSize), n = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, x = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, B = Math.floor(d.pos.x / this.cellSize); B < n; B++)
                        for (var r = g; r < x; r++)
                            if (b[B])
                                if (b[B][r]) {
                                    for (var y = b[B][r], A = 0; A < y.length; A++)
                                        d.touches(y[A]) && !f[y[A].id] && (f[y[A].id] = !0, ig.Entity.checkPair(d, y[A]));
                                    y.push(d)
                                } else
                                    b[B][r] = [d];
                            else
                                b[B] = {}, b[B][r] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
            c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function(b) {
            this.parent(b);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function() {
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && window.console.log && window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(b) {
            var c = ig.$new("span");
            this.numberContainer.appendChild(c);
            this.numberContainer.appendChild(document.createTextNode(b));
            this.numbers[b] = c
        },
        showNumber: function(b, c, d) {
            this.numbers[b] || this.addNumber(b, d);
            this.numbers[b].textContent = c
        },
        addPanel: function(b) {
            var c = new b.type(b.name, b.label);
            if (b.options)
                for (var d = 0; d < b.options.length; d++) {
                    var f = b.options[d];
                    c.addOption(new ig.DebugOption(f.name, f.object, f.property))
                }
            this.panels[c.name] = c;
            c.container.style.display = "none";
            this.container.appendChild(c.container);
            b = ig.$new("div");
            b.className = "ig_debug_menu_item";
            b.textContent = c.label;
            b.addEventListener("click", function() {
                this.togglePanel(c)
            }.bind(this), !1);
            c.menuItem = b;
            f = !1;
            for (d = 1; d < this.panelMenu.childNodes.length; d++) {
                var g = this.panelMenu.childNodes[d];
                if (g.textContent > c.label) {
                    this.panelMenu.insertBefore(b, g);
                    f = !0;
                    break
                }
            }
            f || this.panelMenu.appendChild(b)
        },
        showPanel: function(b) {
            this.togglePanel(this.panels[b])
        },
        togglePanel: function(b) {
            b != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var c = "block" != b.container.style.display;
            b.toggle(c);
            b.menuItem.className = "ig_debug_menu_item" + (c ? " active" : "");
            c && (this.activePanel = b)
        },
        ready: function() {
            for (var b in this.panels)
                this.panels[b].ready()
        },
        beforeRun: function() {
            var b = Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
            this.debugRealTime = b;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var b = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * b;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(b, c) {
            this.name = b;
            this.label = c;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(b) {
            this.active = b;
            this.container.style.display = b ? "block" : "none"
        },
        addPanel: function(b) {
            this.panels.push(b);
            this.container.appendChild(b.container)
        },
        addOption: function(b) {
            this.options.push(b);
            this.container.appendChild(b.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(b, c, d) {
            this.name = b;
            this.object = c;
            this.property = d;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
        },
        click: function(b) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y * ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target))
                for (var d in this.target)
                    (b = ig.game.getEntityByName(this.target[d])) && this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
        },
        _debugDrawLine: function(b, c, d, f, g) {
            ig.system.context.strokeStyle = b;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(f - ig.game.screen.x), ig.system.getDrawPos(g - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function(b, c) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
    };
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        }, {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        }, {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        }, {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(b) {
            this.parent(b);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(b, c) {
            this.parent(b, c);
            this.load()
        },
        load: function(b) {
            this.options = [];
            this.panels = [];
            if (!b || !b.backgroundMaps.length)
                this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = b.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (b = 0; b < this.maps.length; b++) {
                    var c = this.maps[b],
                        d = new ig.DebugPanel(b, "Layer " + b),
                        f = new ig.$new("strong");
                    f.textContent = b + ": " + c.tiles.path;
                    d.container.appendChild(f);
                    d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
                    d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
                    d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
                    this.generateMiniMap(d, c, b);
                    this.addPanel(d)
                }
            }
        },
        generateMiniMap: function(b, c, d) {
            var f = ig.system.scale,
                g = ig.$new("canvas"),
                n = g.getContext("2d"),
                x = c.tiles.width * f,
                B = c.tiles.height * f,
                r = x / c.tilesize;
            n.drawImage(c.tiles.data, 0, 0, x, B, 0, 0, r, B / c.tilesize);
            n = ig.$new("canvas");
            n.width = c.width * f;
            n.height = c.height * f;
            var y = n.getContext("2d");
            ig.game.clearColor && (y.fillStyle = ig.game.clearColor, y.fillRect(0, 0, x, B));
            for (B = x = 0; B < c.width; B++)
                for (var A = 0; A < c.height; A++)
                    (x = c.data[A][B]) && y.drawImage(g, Math.floor((x - 1) * f % r), Math.floor((x - 1) * f / r) * f, f, f, B * f, A * f, f, f);
            g = ig.$new("div");
            g.className = "ig_debug_map_container";
            g.style.width = c.width * f + "px";
            g.style.height = c.height * f + "px";
            r = ig.$new("div");
            r.className = "ig_debug_map_screen";
            r.style.width = ig.system.width / c.tilesize * f - 2 + "px";
            r.style.height = ig.system.height / c.tilesize * f - 2 + "px";
            this.mapScreens[d] = r;
            g.appendChild(n);
            g.appendChild(r);
            b.container.appendChild(g)
        },
        afterRun: function() {
            for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
                var d = this.maps[c],
                    f = this.mapScreens[c];
                if (d && f) {
                    var g = d.scroll.x / d.tilesize,
                        n = d.scroll.y / d.tilesize;
                    d.repeat && (g %= d.width, n %= d.height);
                    f.style.left = g * b + "px";
                    f.style.top = n * b + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(b, c) {
            this.parent(b, c);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width, 1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function(b, c) {
            var d = ig.$new("span");
            d.className = "ig_debug_graph_mark";
            d.textContent = b;
            d.style.top = c.round() + "px";
            this.container.appendChild(d)
        },
        addClock: function(b, c, d) {
            var f = ig.$new("span");
            f.className = "ig_debug_legend_color";
            f.style.backgroundColor = d;
            var g = ig.$new("span");
            g.className = "ig_debug_legend_number";
            g.appendChild(document.createTextNode("0"));
            var n = ig.$new("span");
            n.className = "ig_debug_legend";
            n.appendChild(f);
            n.appendChild(document.createTextNode(c + " ("));
            n.appendChild(g);
            n.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(n);
            this.clocks[b] = {
                description: c,
                color: d,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: g
            }
        },
        beginClock: function(b, c) {
            this.clocks[b].start = Date.now() + (c || 0)
        },
        endClock: function(b) {
            b = this.clocks[b];
            b.current = Math.round(Date.now() - b.start);
            b.avg = 0.8 * b.avg + 0.2 * b.current
        },
        mark: function(b, c) {
            this.active && this.marks.push({
                msg: b,
                color: c || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var b = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
            var b = this.graph.width - 1,
                c = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(b, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark33ms, 1, 1);
            for (var d in this.clocks) {
                var f = this.clocks[d];
                f.html.textContent = f.avg.toFixed(2);
                if (f.color && 0 < f.current) {
                    this.ctx.fillStyle = f.color;
                    var g = f.current * this.msHeight,
                        c = c - g;
                    this.ctx.fillRect(b, c, 1, g);
                    f.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (d = 0; d < this.marks.length; d++)
                c = this.marks[d], this.ctx.fillStyle = c.color, this.ctx.fillRect(b, 0, 1, this.height), c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashBackground: new ig.Image("images/cover.png"),
        splashEmptyBar: new ig.Image("images/bar-empty.png"),
        splashLoadingBar: new ig.Image("images/bar.png"),
        loadingBarPos: {
            x: 240,
            y: 368
        },
        init: function(b, c) {
            this.parent(b, c);
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.splashBackground.draw(0, 0);
            this.splashEmptyBar.draw(this.loadingBarPos.x - 10, this.loadingBarPos.y - 10);
            ig.system.context.font = "26px RocksG";
            ig.system.context.fillStyle = "#ffffff";
            var b = _STRINGS.Splash.Loading,
                c = ig.system.context.measureText(b).width;
            ig.system.context.measureText("m");
            ig.system.context.fillText(b, ig.system.width / 2 - c / 2, 330);
            this.splashLoadingBar.draw(this.loadingBarPos.x, this.loadingBarPos.y, 0, 0, this._drawStatus * this.splashLoadingBar.width, this.splashLoadingBar.height)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b)
                return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++)
                this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++)
            this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++)
            this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++)
            this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, f) {
        var g = {},
            n = {},
            x = {},
            B = 0,
            r = !1,
            y = !1,
            A = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, f);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            A = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b])
                d[b] = c[b];
            else
                for (subprop in c[b])
                    d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, f) {
            if ("object" !== typeof d[b])
                "undefined" !== typeof c[b] && (f[b] = d[b]);
            else
                for (subprop in d[b])
                    f[b] || (f[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], f[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            B = 0;
            -1 == b.tweens.indexOf(this) && b.tweens.push(this);
            y = !0;
            r = new ig.Timer;
            for (var d in c)
                this.initEnd(d, c, n);
            for (d in n)
                this.initStart(d, n, b, g), this.initDelta(d, x, b, n)
        };
        this.initDelta = function(b, c, d, f) {
            if ("object" !== typeof f[b])
                c[b] = f[b] - d[b];
            else
                for (subprop in f[b])
                    c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], f[b])
        };
        this.propUpdate = function(b, c, d, f, g) {
            if ("object" !== typeof d[b])
                c[b] = "undefined" != typeof d[b] ? d[b] + f[b] * g : c[b];
            else
                for (subprop in d[b])
                    this.propUpdate(subprop, c[b], d[b], f[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b])
                d[b] = c[b];
            else
                for (subprop in c[b])
                    d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!y)
                return !1;
            if (this.delay) {
                if (r.delta() < this.delay)
                    return;
                this.delay = 0;
                r.reset()
            }
            if (this.paused || this.complete)
                return !1;
            var c = (r.delta() + B) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in x)
                this.propUpdate(property, b, g, x, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                !this.loop) {
                    this.complete = !0;
                    if (this.onComplete)
                        this.onComplete();
                    A && A.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g)
                        this.propSet(property, g, b);
                    B = 0;
                    r.reset();
                    -1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, n);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(n, d);
                    for (property in n)
                        this.initDelta(property, x, b, n);
                    B = 0;
                    r.reset();
                    -1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            B += r.delta()
        };
        this.resume = function() {
            this.paused = !1;
            r.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, B += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c,
            d = 0.1,
            f = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c,
            d = 0.1,
            f = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c,
            d = 0.1,
            f = 0.4;
        if (0 == b)
            return 0;
        if (1 == b)
            return 1;
        f || (f = 0.3);
        !d || 1 > d ? (d = 1, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / f) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
            case "true":
                ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b)
                switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
                }
            if (b = getQueryVariable("debug"))
                switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
                }
            switch (getQueryVariable("view")) {
            case "stats":
                ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
    ig.Jukebox = ig.Class.extend({
        init: function() {
            this.player = new jukebox.Player({
                resources: ["media/audio/game/bgm.mp3", "media/audio/game/bgm.ogg"],
                autoplay: "music",
                spritemap: {
                    music: {
                        start: 0,
                        end: 14.771,
                        loop: !0
                    }
                }
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (key in dynamicClickableEntityDivs)
                ig.game.hideOverlay([key]);
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++)
                this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length -
            1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable())
                return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable())
                return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable())
                return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable())
                return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
            this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c) {
            var d = this.size.x,
                f = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x += (d - this.size.x) / 2;
            this.pos.y += (f - this.size.y) / 2
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0)
        }
    });
    EntityBranding = ig.Entity.extend({
        bgAlpha: 0,
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash_320x480: new ig.AnimationSheet("branding/TMLogo.png", 350, 191),
        splash_480x640: new ig.AnimationSheet("branding/TMLogo.png", 350, 191),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.alphaTimer = new ig.Timer;
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200, this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
            this.pos.x = (ig.system.width - this.size.x + 150) / 2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.8, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "images/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    x = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * x);
                $("#" + g.id).css("top", this.pos.y * n);
                $("#" + g.id).css("width", this.size.x * x);
                $("#" + g.id).css("height", this.size.y * n)
            } else
                n = w / 2 - destW / 2, x = h / 2 - destH / 2, console.log(n, x), $("#" + g.id).css("left", n + this.pos.x * multiplier), $("#" + g.id).css("top", x + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            this.alphaTimer && 0 < this.alphaTimer.delta() && (this.bgAlpha += 0.01);
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            ig.system.context.save();
            ig.system.context.font = "48px RocksG";
            ig.system.context.textAlign = "center";
            ig.system.context.fillStyle = "#000";
            ig.system.context.globalAlpha = this.bgAlpha;
            ig.system.context.measureText("Ready, Set, Snow!");
            ig.system.context.measureText("m");
            ig.system.context.fillText("Ready, Set, Snow!", ig.system.width / 2, 500);
            ig.system.context.restore();
            ig.system.context.globalAlpha = 1
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d)
                switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
                }
            else
                b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled)
                    try {
                        ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
                            div_layer_name: b,
                            centralize: centralize
                        })
                    } catch (f) {
                        console.log(f)
                    }
                this.kill()
            }
        }
    })
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
    EntityBrandingLogo = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        size: {
            x: 32,
            y: 32
        },
        zIndex: 10001,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
            2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle;
            d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
            _SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, !0));
            console.log("branding logo spawed ...")
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "images/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    x = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * x);
                $("#" + g.id).css("top", this.pos.y * n);
                $("#" + g.id).css("width", this.size.x * x);
                $("#" + g.id).css("height", this.size.y * n)
            } else
                n = w / 2 - destW / 2, x = h / 2 - destH / 2, console.log(n, x), $("#" + g.id).css("left", n + this.pos.x * multiplier), $("#" + g.id).css("top", x + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
            d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
    EntityButtonMoreGames = ig.Entity.extend({
        gravityFactor: 0,
        logo: new ig.AnimationSheet("images/btn_more_games.png", 64, 66),
        size: {
            x: 64,
            y: 66
        },
        zIndex: 750,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (_SETTINGS.MoreGames.Enabled ? (d ? (console.log("settings found ... using that div layer name"), b = d.div_layer_name) : b = "more-games", console.log("div_layer_name:", b), this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, !0)) : this.kill());
            this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
            this.currentAnim = this.anims.idle
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return console.log("clickable layer already exists ..."), !0;
            console.log("doesnt exist yet ...");
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "images/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    x = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", this.pos.x * x);
                $("#" + g.id).css("top", this.pos.y * n);
                $("#" + g.id).css("width", this.size.x * x);
                $("#" + g.id).css("height", this.size.y * n)
            } else
                n = document.getElementById("game").offsetLeft, x = document.getElementById("game").offsetTop, $("#" + g.id).css("left", n + this.pos.x * multiplier), $("#" + g.id).css("top", x + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("images/shield.png"),
        mIconImage: new ig.Image("images/m_icon.png"),
        titleImage: new ig.Image("images/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else
                    ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var f = 0, g = 1; 48 >= g; g += 1)
                    b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), f++, 2 == f && (f = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
            166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("images/kitty.png"),
        kittyTitleImage: new ig.Image("images/kittytitle.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else
                    ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width /
            8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325);
            this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37);
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        isClicking: !1,
        isHovering: !1,
        firstClick: !1,
        isReleased: !1,
        hoveringItem: null,
        objectArray: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isClicking && !this.firstClick && "function" == typeof b.clicked && (b.clicked(), this.firstClick = !0);
            this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1)
        },
        update: function() {
            if (ig.ua.mobile) {
                var b = window.innerHeight / mobileHeight;
                this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
                this.pos.y = ig.input.mouse.y / b - this.size.y / 2
            } else
                this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x, this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2;
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; -1 < a; a--)
                this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.firstClick = !1;
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "images/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var n = w / 2 - destW / 2,
                x = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", n + this.pos.x * multiplier), $("#" + g.id).css("top", x + this.pos.y * multiplier));
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++)
                b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++)
                b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.button-more-games").defines(function() {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 432,
            y: 284,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "images/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80], [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160], [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200], [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280], [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320], [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400], [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440], [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520], [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560], [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640], [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680], [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760], [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800], [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880], [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920], [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3], [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040], [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120], [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160], [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("images/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.button-more-games").defines(function() {
    LevelTestMobile = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 216,
            y: 548,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 204,
            y: 372,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }],
        layer: [{
            name: "background",
            width: 30,
            height: 40,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "images/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150], [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180], [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210], [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270], [271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300], [301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330], [331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390], [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420], [421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450], [451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510], [511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540], [541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570], [571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630], [631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660], [661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690], [691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750], [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], [781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810], [811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870], [871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900], [901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930], [931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990], [991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020], [1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050], [1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110], [1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140], [1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170], [1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelTestMobileResources = [new ig.Image("images/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.props.prop-wall2").requires("impact.entity").defines(function() {
    EntityPropWall2 = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        zIndex: 30,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-wall2.png", 800, 600),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-money").requires("impact.entity").defines(function() {
    EntityPropMoney = ig.Entity.extend({
        size: {
            x: 45,
            y: 51
        },
        type: ig.Entity.TYPE.B,
        objectAlpha: 0.018,
        animSheet: new ig.AnimationSheet("images/prop-money.png", 45, 51),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.maxVel.y = 600;
            this.maxVel.y = 600;
            switch (Math.floor(20 * Math.random()) + 1) {
            case 1:
                this.tweenDirection = -10;
                break;
            case 2:
                this.tweenDirection = 10;
                break;
            case 3:
                this.tweenDirection = -200;
                break;
            case 4:
                this.tweenDirection = 200;
                break;
            case 5:
                this.tweenDirection = 100;
                break;
            case 6:
                this.tweenDirection = -100;
                break;
            case 7:
                this.tweenDirection = 30;
                break;
            case 8:
                this.tweenDirection = -30;
                break;
            case 9:
                this.tweenDirection = 90;
                break;
            case 10:
                this.tweenDirection = -90;
                break;
            case 11:
                this.tweenDirection = -70;
                break;
            case 12:
                this.tweenDirection = 70;
                break;
            case 13:
                this.tweenDirection = -400;
                break;
            case 14:
                this.tweenDirection = 400;
                break;
            case 15:
                this.tweenDirection = 300;
                break;
            case 16:
                this.tweenDirection = -300;
                break;
            case 17:
                this.tweenDirection = 150;
                break;
            case 18:
                this.tweenDirection = -150;
                break;
            case 19:
                this.tweenDirection = 250;
                break;
            case 20:
                this.tweenDirection = -250
            }
            switch (Math.floor(8 * Math.random()) + 1) {
            case 1:
                this.jumpHigh = 100;
                break;
            case 2:
                this.jumpHigh = 250;
                break;
            case 3:
                this.jumpHigh = 400;
                break;
            case 4:
                this.jumpHigh = 600;
                break;
            case 5:
                this.jumpHigh = 300;
                break;
            case 6:
                this.jumpHigh = 500;
                break;
            case 7:
                this.jumpHigh = 170;
                break;
            case 8:
                this.jumpHigh = 50
            }
            this.alphaTimer = new ig.Timer
        },
        update: function() {
            this.parent();
            this.alphaTimer && 0 < this.alphaTimer.delta() && this.tweenDirection && (this.currentAnim.alpha -= this.objectAlpha, this.vel.x += this.tweenDirection);
            this.alphaTimer && 0.08 > this.alphaTimer.delta() && this.tweenDirection && (this.vel.y -= this.jumpHigh);
            0 >= this.currentAnim.alpha && this.kill()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.enemy-control").requires("impact.entity", "game.entities.props.prop-money").defines(function() {
    EntityEnemyControl = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        gravityFactor: 0,
        duration: 0.5,
        strength: 2,
        rotateLeft: !0,
        rotateRight: !1,
        left: -0.1,
        right: 0.1,
        ignorePause: !0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            ig.game.sortEntitiesDeferred();
            this.shock()
        },
        rotate: function() {},
        initShock: function() {
            this.shockTimer = new ig.Timer;
            this.shockTimer.set(this.duration)
        },
        resetShock: function() {
            this.stopShake = !0
        },
        shock: function() {
            if (this.shockTimer && -0.2 > this.shockTimer.delta()) {
                var b = this.shockTimer.delta(),
                    c = this.strength * Math.pow(-b / this.duration, 2);
                0.5 < c && (this.pos.x += Math.random().map(0, 1, -c, c), this.pos.y += Math.random().map(0, 1, -c, c))
            }
            -0.4 < b && (this.resetShock(), this.pos.x = this.pos.x, this.pos.y = this.pos.y)
        },
        respondToHit: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-tree").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityPropTree = EntityEnemyControl.extend({
        size: {
            x: 120,
            y: 200
        },
        offset: {
            x: 20,
            y: 50
        },
        zIndex: 50,
        originalPos: [],
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-tree.png", 165, 250),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shine", 1.5, [1, 2, 3, 0]);
            this.originalPos.x = this.pos.x;
            this.originalPos.y = this.pos.y;
            this.currentAnim = this.anims.shine
        },
        update: function() {
            this.parent()
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-water-machine").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityPropWaterMachine = EntityEnemyControl.extend({
        size: {
            x: 85,
            y: 170
        },
        offset: {
            x: 0,
            y: 28
        },
        zIndex: 70,
        originalPos: [],
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-water-machine.png", 85, 198),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.originalPos.x = this.pos.x;
            this.originalPos.y = this.pos.y
        },
        update: function() {
            this.parent()
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-desktop2").requires("impact.entity").defines(function() {
    EntityPropDesktop2 = ig.Entity.extend({
        size: {
            x: 800,
            y: 313
        },
        zIndex: 80,
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-desk2.png", 800, 313),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-bulb-short").requires("impact.entity").defines(function() {
    EntityPropBulbShort = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        zIndex: 81,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-bulb-short.png", 320, 40),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.3, [1, 2, 3, 0])
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-desk1").requires("impact.entity").defines(function() {
    EntityPropDesk1 = ig.Entity.extend({
        size: {
            x: 800,
            y: 252
        },
        zIndex: 100,
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-desk1.png", 800, 252),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-wall1").requires("impact.entity").defines(function() {
    EntityPropWall1 = ig.Entity.extend({
        size: {
            x: 800,
            y: 118
        },
        zIndex: 120,
        bgAlpha: 0.4,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-wall1.png", 800, 118),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            ig.global.wm || (this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0])
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            this.gameControl && this.gameControl.state == this.gameControl.states.MENU && (ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-bulb-long").requires("impact.entity").defines(function() {
    EntityPropBulbLong = ig.Entity.extend({
        size: {
            x: 600,
            y: 100
        },
        zIndex: 120,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-bulb-long.png", 600, 100),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.5, [1, 2, 3, 0])
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-title").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityPropTitle = EntityEnemyControl.extend({
        size: {
            x: 518,
            y: 338
        },
        zIndex: 280,
        type: ig.Entity.TYPE.B,
        originalPos: [],
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-title.png", 518, 338),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.tweenIn();
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.originalPos.x = this.pos.x;
            this.originalPos.y = this.pos.y
        },
        update: function() {
            this.parent()
        },
        tweenIn: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 68
                }
            }, 1, {
                onComplete: function() {
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Bounce.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: -400
                }
            }, 0.5, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Linear.EaseNone,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.snowball").requires("impact.entity").defines(function() {
    EntitySnowball = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        drawSize: {
            x: 90,
            y: 90
        },
        offset: {
            x: 60,
            y: 45
        },
        zIndex: 300,
        waitTimer: new ig.Timer,
        thisScale: !1,
        initialScale: {
            x: 1,
            y: 1
        },
        targetScale: {
            x: 1,
            y: 1
        },
        currentScale: {
            x: 1,
            y: 1
        },
        scaleIncrements: 0.025,
        scaleAxis: {
            xAxis: !1,
            yAxis: !1
        },
        clickPoint: [],
        gravityFactor: 0,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet("images/snowball.png", 150, 134),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("explore", 0.05, [1, 2, 3, 4, 5, 6, 7]);
            this.playerControl = ig.game.getEntitiesByType(EntityPlayerControl)[0];
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.waitTimer.set();
            this.setScale(5, 5)
        },
        update: function() {
            this.parent();
            this.scaleSize();
            this.checkOverlapWithPointer();
            this.currentAnim == this.anims.explore ? (this.soundPlay || (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hit), this.soundPlay = !0), this.currentAnim.loopCount && this.kill()) : this.checkEntity = !1;
            this.handleClick()
        },
        checkOverlapWithPointer: function() {
            if (ig.ua.mobile)
                var b = ig.input.mouse.x / widthRatio + ig.game.screen.x,
                    c = ig.input.mouse.y / heightRatio + ig.game.screen.y;
            else
                b = ig.input.mouse.x / multiplier + ig.game.screen.x, c = ig.input.mouse.y / multiplier + ig.game.screen.y;
            return b > this.pos.x + this.size.x || b < this.pos.x || c > this.pos.y + this.size.y || c < this.pos.y ? !1 : !0
        },
        handleClick: function() {
            !this.shooting && ig.input.pressed("click") && (this.shootTimer = new ig.Timer, this.clickPoint.x = this.pointer.pos.x, this.clickPoint.y = this.pointer.pos.y, this.handleMovement(), this.shooting = !0)
        },
        snowExplore: function() {
            this.thisScale = !0;
            this.currentAnim = this.anims.explore.rewind();
            this.checkEntity = !0
        },
        _checkScale: function() {
            this.scaleAxis.yAxis && this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, this.currentScale.y) : this.scaleAxis.yAxis ? this.setScale(1, this.currentScale.y) : this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, 1) : this.setScale(this.currentScale.x, this.currentScale.y)
        },
        onCompleteScaleX: function() {},
        onCompleteScaleY: function() {},
        checkIfNeedToScale: function() {
            if (this.targetScale.x > this.initialScale.x)
                if (this.currentScale.x < this.targetScale.x)
                    this.currentScale.x += this.scaleIncrements;
                else
                    this.onCompleteScaleX();
            else if (this.currentScale.x > this.targetScale.x)
                this.currentScale.x -= this.scaleIncrements;
            else
                this.onCompleteScaleX();
            this._checkScale();
            if (this.targetScale.y > this.initialScale.y)
                if (this.currentScale.y < this.targetScale.y)
                    this.currentScale.y += this.scaleIncrements;
                else
                    this.onCompleteScaleY();
            else if (this.currentScale.y > this.targetScale.y)
                this.currentScale.y -= this.scaleIncrements;
            else
                this.onCompleteScaleY();
            this._checkScale()
        },
        scaleSize: function() {
            211.99 >= this.clickPoint.y ? (!this.thisScale && this.waitTimer && 0.8 > this.waitTimer.delta() && (this.setScale(), this.scale.x -= 0.13, this.scale.y -= 0.13), !this.thisScale && this.waitTimer && 0.6 < this.waitTimer.delta() && (this.thisScale = !0, this.kill())) : 330 <= this.clickPoint.y && 469.99 >= this.clickPoint.y ? this.thisScale || (272 <= this.clickPoint.x && 505 >= this.clickPoint.x ? this.waitTimer && 0.4 > this.waitTimer.delta() && (this.setScale(), this.scale.x -= 0.18, this.scale.y -= 0.18) : this.waitTimer && 0.3 > this.waitTimer.delta() && (this.setScale(), this.scale.x -= 0.2, this.scale.y -= 0.2)) : 212 <= this.clickPoint.y && 329.99 >= this.clickPoint.y ? !this.thisScale && this.waitTimer && 0.4 > this.waitTimer.delta() && (this.setScale(), this.scale.x -= 0.18, this.scale.y -= 0.18) : 470 <= this.clickPoint.y && !this.thisScale && (this.waitTimer && 0.2 > this.waitTimer.delta()) && (this.setScale(), this.scale.x -= 0.2, this.scale.y -= 0.2)
        },
        handleMovement: function() {
            470 <= this.clickPoint.y ? (this.tween({
                pos: {
                    x: this.clickPoint.x - 10
                }
            }, 0.2, {
                onComplete: function() {
                    this.snowExplore()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start(), this.tween({
                pos: {
                    y: this.clickPoint.y - 10
                }
            }, 0.2, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut
            }).start()) : 330 <= this.clickPoint.y && 469.99 >= this.clickPoint.y ? 272 <= this.clickPoint.x && 505 >= this.clickPoint.x ? (this.tween({
                pos: {
                    x: this.clickPoint.x - 10
                }
            }, 0.4, {
                onComplete: function() {
                    this.snowExplore()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start(), this.tween({
                pos: {
                    y: this.clickPoint.y - 10
                }
            }, 0.4, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut
            }).start()) : (this.tween({
                pos: {
                    x: this.clickPoint.x - 10
                }
            }, 0.3, {
                onComplete: function() {
                    this.snowExplore()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start(), this.tween({
                pos: {
                    y: this.clickPoint.y - 10
                }
            }, 0.3, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut
            }).start()) : 212 <= this.clickPoint.y && 329.99 >= this.clickPoint.y ? (this.tween({
                pos: {
                    x: this.clickPoint.x - 10
                }
            }, 0.4, {
                onComplete: function() {
                    this.snowExplore()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start(), this.tween({
                pos: {
                    y: this.clickPoint.y - 10
                }
            }, 0.4, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut
            }).start()) : 211.99 >= this.clickPoint.y && (this.tween({
                pos: {
                    x: this.clickPoint.x - 10
                }
            }, 0.6, {
                onComplete: function() {
                    this.snowExplore()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut
            }).start(), this.tween({
                pos: {
                    y: this.clickPoint.y - 10
                }
            }, 0.6, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut
            }).start())
        },
        check: function(b) {
            this.parent();
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.enemyControl = ig.game.getEntitiesByType(EntityEnemyControl)[0];
            this.gameTitle = ig.game.getEntitiesByType(EntityPropTitle)[0];
            this.wall1 = ig.game.getEntitiesByType(EntityPropWall1)[0];
            this.desk2 = ig.game.getEntitiesByType(EntityPropDesktop2)[0];
            this.desk1 = ig.game.getEntitiesByType(EntityPropDesk1)[0];
            this.waterMachine = ig.game.getEntitiesByType(EntityPropWaterMachine)[0];
            this.enemy1 = ig.game.getEntitiesByType(EntityEnemy1)[0];
            this.enemy2 = ig.game.getEntitiesByType(EntityEnemy2)[0];
            this.enemy3 = ig.game.getEntitiesByType(EntityEnemy3)[0];
            this.enemy5 = ig.game.getEntitiesByType(EntityEnemy5)[0];
            this.enemy6 = ig.game.getEntitiesByType(EntityEnemy6)[0];
            this.enemyBoss = ig.game.getEntitiesByType(EntityEnemyBoss)[0];
            if (!0 == this.checkEntity) {
                b instanceof EntityPropDesk1 && this.pos.y <= this.wall1.pos.y - 30 && (this.zIndex = b.zIndex + 1);
                b instanceof EntityPropDesktop2 && (this.zIndex = b.zIndex +
                1);
                b instanceof EntityPropTitle && (this.zIndex = b.zIndex + 1, b.stopShake = !1, b.respondToHit(), this.checkEntity = !1);
                b instanceof EntityBtnPlay && (b.respondToHit(), this.checkEntity = !1);
                if (b instanceof EntityPropTree && !this.gameTitle)
                    if (this.pos.y <= this.desk2.pos.y + 50 && 492 == b.pos.x)
                        this.enemy5 && this.pos.x <= this.enemy5.pos.x - 10 ? (this.zIndex = b.zIndex + 1, b.respondToHit(), this.checkEntity = !1) : this.enemy5 || (this.zIndex = b.zIndex + 1, b.respondToHit(), this.checkEntity = !1);
                    else if (492 != b.pos.x && this.pos.x <= this.waterMachine.pos.x -
                    20 && (!this.enemyBoss || !(320 == this.pos.y && this.pos.y <= this.enemyBoss)))
                        if (!this.enemyBoss || 320 !== this.enemyBoss.pos.y)
                            this.zIndex = b.zIndex + 1, b.respondToHit(), this.checkEntity = !1;
                b instanceof EntityPropWaterMachine && !this.gameTitle && (this.enemy2 && this.pos.y < this.enemy2.pos.y ? (this.zIndex = b.zIndex + 1, b.respondToHit(), this.checkEntity = !1) : this.enemy2 || (this.zIndex = b.zIndex + 1, b.respondToHit(), this.checkEntity = !1));
                b instanceof EntityPropMonitor1 && !this.gameTitle && (this.zIndex = b.zIndex + 1, this.enemy1 && this.pos.x <= this.enemy1.pos.x ? (b.respondToHit(), b.life -= 1, this.checkEntity = !1) : this.enemy1 || (b.respondToHit(), b.life -= 1, this.checkEntity = !1));
                b instanceof EntityPropMonitor2 && !this.gameTitle && (this.enemy6 && this.pos.x <= this.enemy6.pos.x ? (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1) : this.enemy6 || (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1));
                b instanceof EntityPropMonitor3 && !this.gameTitle && (this.enemy3 && this.pos.x >= this.enemy3.pos.x + this.enemy3.size.x ? (this.zIndex = b.zIndex + 1, b.life -= 1, b.respondToHit(), this.checkEntity = !1) : this.enemy3 || (this.zIndex = b.zIndex + 1, b.life -= 1, b.respondToHit(), this.checkEntity = !1));
                b instanceof EntityPropBanner && !this.gameTitle && (this.zIndex = b.zIndex + 1, this.enemy1 && this.pos.x >= this.enemy1.pos.x + this.enemy1.size.x ? (b.respondToHit(), b.life -= 1, this.checkEntity = !1) : this.enemy1 || (b.respondToHit(), b.life -= 1, this.checkEntity = !1));
                b instanceof EntityEnemy1 && !this.gameTitle && this.pos.y <= this.wall1.pos.y - 30 && (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1);
                b instanceof EntityEnemy2 && !this.gameTitle && this.pos.y <= this.wall1.pos.y - 30 && (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1);
                if (b instanceof EntityEnemy3 && !this.gameTitle && this.pos.y <= this.desk1.pos.y)
                    if (this.enemyBoss && 230 == this.enemyBoss.pos.y && this.pos.x >= this.enemyBoss.pos.x + 5)
                        this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1;
                    else if (!this.enemyBoss || 230 !== this.enemyBoss.pos.y)
                        this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1;
                b instanceof EntityEnemy4 && !this.gameTitle && this.pos.y <= this.desk2.pos.y + 60 && (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1);
                b instanceof EntityEnemy5 && !this.gameTitle && this.pos.y <= this.desk2.pos.y + 60 && (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1);
                b instanceof EntityEnemy6 && !this.gameTitle && this.pos.y <= this.desk1.pos.y && (this.enemy1 && this.pos.y <= this.enemy1.pos.y ? (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1) : this.enemy1 || (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1));
                b instanceof EntityEnemy7 && !this.gameTitle && (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1);
                b instanceof EntityEnemy8 && !this.gameTitle && (this.enemy5 && this.pos.x >= this.enemy5.pos.x ? (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1) : this.enemy5 || (this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1));
                b instanceof EntityEnemyBoss && (100 == b.pos.y && this.waterMachine && this.pos.y <= this.waterMachine.pos.y ? (b.currentAnim = b.anims.die.rewind(), b.attackTimer.reset(), this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1) : 100 !== b.pos.y && (b.currentAnim = b.anims.die.rewind(), b.attackTimer.reset(), this.zIndex = b.zIndex + 1, b.respondToHit(), b.life -= 1, this.checkEntity = !1));
                b instanceof EntityEnemyRat && (this.enemyBoss && 320 == this.enemyBoss.pos && this.pos.y >= this.enemyBoss.pos.y ? (this.gameControl.bonusTimer.reset(), this.gameControl.setRatTimer = !1, b.life -= 1, this.checkEntity = !1) : this.enemyBoss || (this.gameControl.bonusTimer.reset(), this.gameControl.setRatTimer = !1, b.life -= 1, this.checkEntity = !1))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.player-control").requires("impact.entity", "game.entities.ingame.snowball").defines(function() {
    EntityPlayerControl = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        clickPoint: [],
        setSnowballAmount: 15,
        snowballAmount: 15,
        zIndex: 240,
        totalSnowballShoot: 0,
        shootTime: 0.2,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0), this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0])
        },
        update: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.tutorialControl = ig.game.getEntitiesByType(EntityTutorialControl)[0];
            this.buttonReloadArea = ig.game.getEntitiesByType(EntityBtnReload)[0];
            this.buttonPauseArea = ig.game.getEntitiesByType(EntityBtnPause)[0];
            this.gameControl.state == this.gameControl.states.MENU && (this.snowballAmount = this.setSnowballAmount);
            this.gameControl.state == this.gameControl.states.GAMESTART && (this.snowballAmount = this.setSnowballAmount);
            0 != this.snowballAmount && this.gameControl.state != this.gameControl.states.GAMEEND && !this.gameControl.chooseTutorial && !this.tutorialControl && this.shootSnowBall();
            this.tutorialControl && !0 == this.tutorialControl.isInTarget && (this.snowballAmount = 0, this.shootSnowBall());
            this.secondShoot()
        },
        shootSnowBall: function() {
            if (!this.shooting && ig.input.pressed("click")) {
                this.shootTimer = new ig.Timer;
                ig.ua.mobile ? (this.clickPoint.x = ig.input.mouse.x, this.clickPoint.y = ig.input.mouse.y) : (this.clickPoint.x = this.pointer.pos.x, this.clickPoint.y = this.pointer.pos.y);
                if (!this.buttonReloadArea || !(this.clickPoint.x >= this.buttonReloadArea.pos.x && this.clickPoint.y >= this.buttonReloadArea.pos.y))
                    if (!this.buttonPauseArea || !(this.clickPoint.x >= this.buttonPauseArea.pos.x && this.clickPoint.y <= this.buttonPauseArea.pos.y + this.buttonPauseArea.size.y))
                        399.999 >= this.clickPoint.x ? (this.totalSnowballShoot += 1, this.snowballAmount -= 1, this.snowball = ig.game.spawnEntity(EntitySnowball, 700, 600), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swing)) : 400 <= this.clickPoint.x && (this.totalSnowballShoot += 1, this.snowballAmount -= 1, this.snowball = ig.game.spawnEntity(EntitySnowball, 100, 600), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swing));
                this.shooting = !0
            }
        },
        secondShoot: function() {
            this.shootTimer && this.shootTimer.delta() > this.shootTime && (this.shooting = !1)
        },
        draw: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.btn-play").requires("impact.entity").defines(function() {
    EntityBtnPlay = ig.Entity.extend({
        size: {
            x: 179,
            y: 82
        },
        type: ig.Entity.TYPE.B,
        zIndex: 200,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/btn-play.png", 179, 82),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 1, [0]);
            this.addAnim("down", 0.1, [1]);
            this.tweenIn();
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.gameTitle = ig.game.getEntitiesByType(EntityPropTitle)[0]
        },
        update: function() {
            this.parent();
            this.currentAnim == this.anims.down && this.currentAnim.loopCount && (this.gameControl.state = this.gameControl.states.INTRO, this.gameControl.chooseTutorial = !0, this.currentAnim = this.anims.up, this.tweenOut(), this.gameTitle.tweenOut())
        },
        respondToHit: function() {
            this.gameControl.btnMoreGames && ig.game.hideOverlay([this.gameControl.btnMoreGames.div_layer_name]);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
            this.currentAnim = this.anims.down.rewind()
        },
        tweenIn: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 430
                }
            }, 1, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Bounce.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 700
                }
            }, 0.3, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Linear.EaseNone,
                delay: 0
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.btn-more-games").requires("impact.entity").defines(function() {
    EntityBtnMoreGames = ig.Entity.extend({
        size: {
            x: 179,
            y: 82
        },
        type: ig.Entity.TYPE.B,
        zIndex: 200,
        gravityFactor: 0,
        clicked: !1,
        animSheet: new ig.AnimationSheet("images/btn-more-games.png", 179, 82),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 1, [0]);
            this.addAnim("down", 0.1, [1]);
            this.tweenIn();
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        update: function() {
            this.parent();
            this.spawnDiv();
            this.gameControl.state != this.gameControl.states.MENU && this.tweenOut()
        },
        clicked: function() {
            this.clicked = !0
        },
        tweenIn: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 430
                }
            }, 1, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Bounce.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 700
                }
            }, 0.3, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Linear.EaseNone,
                delay: 0
            }).start()
        },
        ready: function() {
            setTimeout(this.spawnDiv(), 5)
        },
        spawnDiv: function() {
            this.canSpawnDiv || (this.canSpawnDiv = !0, _SETTINGS.MoreGames.Enabled ? this.checkClickableLayer(this.divLayerName ? this.divLayerName : "more-games", _SETTINGS.MoreGames.Link, !0) : this.kill())
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b)
                    return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "images/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, f) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var n = window.innerHeight / mobileHeight,
                    x = window.innerWidth / mobileWidth;
                $("#" + g.id).css("left", 100);
                $("#" + g.id).css("top", this.pos.y * n);
                $("#" + g.id).css("width", this.size.x * x);
                $("#" + g.id).css("height", this.size.y * n)
            } else
                n = document.getElementById("game").offsetLeft, x = document.getElementById("game").offsetTop, $("#" +
                g.id).css("left", n + this.pos.x * multiplier), $("#" + g.id).css("top", x + this.pos.y - 20 * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            f ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.btn-reload").requires("impact.entity").defines(function() {
    EntityBtnReload = ig.Entity.extend({
        size: {
            x: 179,
            y: 82
        },
        zIndex: 150,
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        anim: null,
        animIdle: null,
        animSheet: new ig.AnimationSheet("images/btn-reload.png", 179, 82),
        snowball: new ig.AnimationSheet("images/snowball.png", 150, 134),
        snowballOffset: {
            x: 10,
            y: 10
        },
        snowballRect: {
            x: -20,
            y: -20,
            w: 40,
            h: 40
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("shine", 0.2, [1, 0]);
            this.addAnim("down", 0.2, [1]);
            b = [];
            for (c = 0; 1 > c; c++)
                b.push(c);
            this.anim = this.animIdle = new ig.Animation(this.snowball, 0.4, b);
            ig.global.wm || (this.playerControl = ig.game.getEntitiesByType(EntityPlayerControl)[0])
        },
        update: function() {
            this.parent();
            (this.tutorialControl = ig.game.getEntitiesByType(EntityTutorialControl)[0]) && 10 == this.tutorialControl.scene ? 0 >= this.playerControl.snowballAmount && !this.sound && (this.currentAnim = this.anims.shine.rewind(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.warning), this.sound = !0) : !this.tutorialControl && 0 >= this.playerControl.snowballAmount && !this.sound && (this.currentAnim = this.anims.shine.rewind(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.warning), this.sound = !0);
            this.currentAnim == this.anims.shine && this.currentAnim.loopCount && (this.currentAnim = this.anims.shine, this.sound = !1);
            this.currentAnim == this.anims.down && this.currentAnim.loopCount && (this.currentAnim = this.anims.idle);
            this.animIdle && this.anim == this.animIdle && this.anim.update()
        },
        clicked: function() {
            this.tutorialControl && !this.sceneLast && 10 == this.tutorialControl.scene ? (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.currentAnim = this.anims.idle, this.tutorialControl.fontTimer.reset(), this.tutorialControl.scene++, this.sceneLast = !0) : this.tutorialControl || (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.currentAnim = this.anims.down.rewind(), this.playerControl.snowballAmount = this.playerControl.setSnowballAmount, this.sound = !1)
        },
        draw: function() {
            this.parent();
            if (!this.tutorialControl) {
                this.anim.draw(20, this.pos.y - 10);
                ig.system.context.font = "26px RocksG";
                ig.system.context.textAlign = "right";
                ig.system.context.fillStyle = "#ffffff";
                var b = "x";
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                var c = this.pos.y + 60;
                ig.system.context.fillText(b, 150, c);
                ig.system.context.font = "36px RocksG";
                ig.system.context.textAlign = "right";
                ig.system.context.fillStyle = "#dc0000";
                b = this.playerControl.snowballAmount;
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                c = this.pos.y + 60;
                ig.system.context.fillText(b, 220, c)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.reticle").requires("impact.entity").defines(function() {
    EntityReticle = ig.Entity.extend({
        size: {
            x: 10,
            y: 10
        },
        offset: {
            x: 45,
            y: 45
        },
        zIndex: 800,
        ignorePause: !0,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/prop-reticle.png", 91, 91),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 1, [0]);
            this.addAnim("down", 1, [1])
        },
        update: function() {
            this.parent();
            this.pointer && (this.pos.x = this.pointer.pos.x, this.pos.y = this.pointer.pos.y);
            this.currentAnim = ig.input.state("click") ? this.anims.down : this.anims.up
        }
    })
});
ig.baked = !0;
ig.module("game.entities.boards.board-pause").requires("impact.entity", "game.entities.ingame.reticle").defines(function() {
    EntityBoardPause = ig.Entity.extend({
        size: {
            x: 542,
            y: 443
        },
        ignorePause: !0,
        type: ig.Entity.TYPE.B,
        zIndex: 400,
        bgAlpha: 0.5,
        gravityFactor: 0,
        clicked: !1,
        animSheet: new ig.AnimationSheet("images/board-pause.png", 542, 443),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        update: function() {
            this.parent();
            this.music && (this.music.pos.y = this.pos.y + 100, this.sound.pos.y = this.pos.y + 220);
            ig.game.paused || this.kill();
            ig.input.pressed("click") && (600 <= this.pointer.pos.x && 700 >= this.pointer.pos.x && 80 <= this.pointer.pos.y && 150 >= this.pointer.pos.y && !this.clicked && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), ig.game.paused = !ig.game.paused, this.reticlePause.kill(), this.clicked = !0), 300 <= this.pointer.pos.x && 452 >= this.pointer.pos.x && 382 <= this.pointer.pos.y && 460 >= this.pointer.pos.y && !this.clicked && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.gameControl.state = this.gameControl.states.MENU, ig.game.paused = !ig.game.paused, this.reticlePause.kill(), this.clicked = !0))
        },
        draw: function() {
            ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent();
            this.button || (this.sound = ig.game.spawnEntity(EntitySound, 260 * Howler._volume + 320, 0, {
                zIndex: 401
            }), this.music = ig.ua.mobile ? !1 == ig.soundHandler.changeVolume ? ig.game.spawnEntity(EntityMusic, 260 * ig.soundHandler.jukebox.player.context.volume + 320, 0, {
                zIndex: 401
            }) : ig.game.spawnEntity(EntityMusic, 320, 0) : ig.game.spawnEntity(EntityMusic, 260 * ig.music.volume + 320, 0, {
                zIndex: 401
            }), this.reticlePause = ig.game.spawnEntity(EntityReticle, 0, 0), this.button = !0)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.commons.music").requires("impact.entity").defines(function() {
    EntityMusic = ig.Entity.extend({
        size: {
            x: 31,
            y: 91
        },
        type: ig.Entity.TYPE.B,
        ignorePause: !0,
        dragRelPos: [],
        gravityFactor: 0,
        zIndex: 401,
        animSheet: new ig.AnimationSheet("images/btn-sound.png", 31, 91),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 1, [0])
        },
        update: function() {
            this.parent();
            this.checkClickOnPause();
            this.checkOverlapWithPointer();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.volume = (this.pos.x - 320) / 260;
            this.isDragging && (this.pos.x = this.pointer.pos.x + this.dragRelPos.x, 580 <= this.pos.x && (this.pos.x = 580), 320 >= this.pos.x && (this.pos.x = 320));
            ig.input.state("click") || (this.isDragging = !1);
            ig.ua.mobile ? ig.soundHandler.jukebox.player.setVolume(this.volume) : ig.music.volume = (this.pos.x - 320) / 260;
            ig.ua.mobile && (400 >= this.pos.x && 1 == ig.soundHandler.jukebox.player.context.volume && (ig.soundHandler.mute(), ig.soundHandler.changeVolume = !0), 401 <= this.pos.x && ig.soundHandler.mute && (ig.soundHandler.unmute(),
            ig.soundHandler.changeVolume = !1));
            ig.game.paused || this.kill()
        },
        clicked: function() {
            this.isDragging = !0;
            this.dragRelPos.x = this.pos.x - this.pointer.pos.x
        },
        released: function() {
            this.isDragging = !1
        },
        checkClickOnPause: function() {
            ig.game.paused && this.ignorePause && this.checkOverlapWithPointer() && (ig.input.pressed("click") ? this.clicked() : ig.input.released("click") || (this.click = !0))
        },
        checkOverlapWithPointer: function() {
            if (ig.ua.mobile)
                var b = ig.input.mouse.x / widthRatio + ig.game.screen.x,
                    c = ig.input.mouse.y / heightRatio +
                    ig.game.screen.y;
            else
                b = ig.input.mouse.x / multiplier + ig.game.screen.x, c = ig.input.mouse.y / multiplier + ig.game.screen.y;
            return b > this.pos.x + this.size.x || b < this.pos.x || c > this.pos.y + this.size.y || c < this.pos.y ? !1 : !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.sound").requires("impact.entity").defines(function() {
    EntitySound = ig.Entity.extend({
        size: {
            x: 31,
            y: 91
        },
        ignorePause: !0,
        type: ig.Entity.TYPE.B,
        dragRelPos: [],
        gravityFactor: 0,
        zIndex: 401,
        animSheet: new ig.AnimationSheet("images/btn-sound.png", 31, 91),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 1, [0]);
            this.checkSoundTimer = new ig.Timer
        },
        update: function() {
            this.parent();
            Howler.unmute();
            this.checkClickOnPause();
            this.checkOverlapWithPointer();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.isDragging && (this.pos.x = this.pointer.pos.x + this.dragRelPos.x, 580 <= this.pos.x && (this.pos.x = 580), 320 >= this.pos.x && (this.pos.x = 320), this.checkSoundTimer && 0.5 < this.checkSoundTimer.delta() && !this.soundPlay && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hurt), this.soundPlay = !0), this.checkSoundTimer && 0.6 < this.checkSoundTimer.delta() && (this.checkSoundTimer.reset(), this.soundPlay = !1));
            ig.input.state("click") || (this.isDragging = !1);
            Howler._volume = (this.pos.x - 320) / 260;
            ig.game.paused || this.kill()
        },
        clicked: function() {
            this.isDragging = !0;
            this.dragRelPos.x = this.pos.x - this.pointer.pos.x
        },
        released: function() {
            this.isDragging = !1
        },
        checkClickOnPause: function() {
            ig.game.paused && this.ignorePause && this.checkOverlapWithPointer() && (ig.input.pressed("click") ? this.clicked() : ig.input.released("click") || (this.click = !0))
        },
        checkOverlapWithPointer: function() {
            if (ig.ua.mobile)
                var b = ig.input.mouse.x / widthRatio + ig.game.screen.x,
                    c = ig.input.mouse.y / heightRatio + ig.game.screen.y;
            else
                b = ig.input.mouse.x / multiplier + ig.game.screen.x, c = ig.input.mouse.y / multiplier + ig.game.screen.y;
            return b > this.pos.x + this.size.x || b < this.pos.x || c > this.pos.y + this.size.y || c < this.pos.y ? !1 : !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.btn-pause").requires("impact.entity", "game.entities.boards.board-pause").defines(function() {
    EntityBtnPause = ig.Entity.extend({
        size: {
            x: 55,
            y: 57
        },
        gravityFactor: 0,
        type: ig.Entity.TYPE.B,
        zIndex: 200,
        animSheet: new ig.AnimationSheet("images/btn-pause.png", 55, 57),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 1, [0]);
            this.addAnim("down", 1, [1]);
            this.reticle = ig.game.getEntitiesByType(EntityReticle)[0]
        },
        update: function() {
            this.parent();
            ig.game.paused || (this.currentAnim = this.anims.up)
        },
        clicked: function() {
            !ig.game.paused && 0 == ig.game.getEntitiesByType(EntityReadyFightFont).length && (this.reticle.zIndex = 800, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), ig.game.spawnEntity(EntityBoardPause, 130, 50, {
                zIndex: 401
            }), this.currentAnim = this.anims.down, ig.game.sortEntitiesDeferred(), ig.game.paused = !ig.game.paused)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-monitor1").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityPropMonitor1 = EntityEnemyControl.extend({
        size: {
            x: 146,
            y: 109
        },
        zIndex: 101,
        originalPos: [],
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        life: 5,
        decreaseMoney: 1E3,
        noticePos: [],
        sound: !1,
        animSheet: new ig.AnimationSheet("images/prop-monitor1.png", 147, 110),
        dimboFont: new ig.Font("images/dimbo-small-red-font.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("idle2", 1, [1]);
            this.addAnim("idle3", 1, [2]);
            this.addAnim("idle4", 1, [3]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.originalPos.x = this.pos.x;
            this.originalPos.y = this.pos.y;
            this.noticePos.x = this.pos.x + 50;
            this.noticePos.y = this.pos.y
        },
        update: function() {
            this.parent();
            5 == this.life && (this.currentAnim = this.anims.idle);
            4 == this.life && (this.currentAnim = this.anims.idle2);
            3 == this.life && (this.currentAnim = this.anims.idle3);
            2 == this.life && (this.currentAnim = this.anims.idle4);
            0 >= this.life && (this.currentAnim.angle -= Math.PI / 100, this.tweenOut(), this.sound || (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.monitor_drop), this.sound = !0));
            if (this.gameControl.state == this.gameControl.states.MENU || this.gameControl.state == this.gameControl.states.GAMEEND)
                this.life = 5
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            1 <= this.life && (this.pos.x = this.originalPos.x, this.pos.y = this.originalPos.y)
        },
        tweenOut: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 700
                }
            }, 0.8, {
                onComplete: function() {
                    this.gameControl.salary -= this.decreaseMoney;
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Linear.EaseNone,
                delay: 0
            }).start()
        },
        draw: function() {
            this.parent();
            if (0 == this.life) {
                ig.system.context.font = "30px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#dc0000";
                var b = "-$" + this.decreaseMoney;
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                ig.system.context.fillText(b, this.noticePos.x, this.noticePos.y)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-monitor2").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityPropMonitor2 = EntityEnemyControl.extend({
        size: {
            x: 117,
            y: 87
        },
        zIndex: 81,
        originalPos: [],
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        life: 5,
        decreaseMoney: 1E3,
        noticePos: [],
        sound: !1,
        animSheet: new ig.AnimationSheet("images/prop-monitor2.png", 117, 87),
        dimboFont: new ig.Font("images/dimbo-small-red-font.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("idle2", 1, [1]);
            this.addAnim("idle3", 1, [2]);
            this.addAnim("idle4", 1, [3]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.originalPos.x = this.pos.x;
            this.originalPos.y = this.pos.y;
            this.noticePos.x = this.pos.x + 50;
            this.noticePos.y = this.pos.y
        },
        update: function() {
            this.parent();
            5 == this.life && (this.currentAnim = this.anims.idle);
            4 == this.life && (this.currentAnim = this.anims.idle2);
            3 == this.life && (this.currentAnim = this.anims.idle3);
            2 == this.life && (this.currentAnim = this.anims.idle4);
            0 >= this.life && (this.sound || (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.monitor_drop), this.sound = !0), this.currentAnim.angle -= Math.PI / 100, this.tweenOut());
            if (this.gameControl.state == this.gameControl.states.MENU || this.gameControl.state == this.gameControl.states.GAMEEND)
                this.life = 5
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            1 <= this.life && (this.pos.x = this.originalPos.x, this.pos.y = this.originalPos.y)
        },
        tweenOut: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 700
                }
            }, 0.8, {
                onComplete: function() {
                    this.gameControl.salary -= this.decreaseMoney;
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Linear.EaseNone,
                delay: 0
            }).start()
        },
        draw: function() {
            this.parent();
            if (0 == this.life) {
                ig.system.context.font = "30px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#dc0000";
                var b = "-$" + this.decreaseMoney;
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                ig.system.context.fillText(b, this.noticePos.x, this.noticePos.y)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-monitor3").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityPropMonitor3 = EntityEnemyControl.extend({
        size: {
            x: 127,
            y: 87
        },
        zIndex: 81,
        originalPos: [],
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        life: 5,
        decreaseMoney: 1E3,
        noticePos: [],
        sound: !1,
        animSheet: new ig.AnimationSheet("images/prop-monitor3.png", 127, 87),
        dimboFont: new ig.Font("images/dimbo-small-red-font.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("idle2", 1, [1]);
            this.addAnim("idle3", 1, [2]);
            this.addAnim("idle4", 1, [3]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.originalPos.x = this.pos.x;
            this.originalPos.y = this.pos.y;
            this.noticePos.x = this.pos.x - 50;
            this.noticePos.y = this.pos.y
        },
        update: function() {
            this.parent();
            5 == this.life && (this.currentAnim = this.anims.idle);
            4 == this.life && (this.currentAnim = this.anims.idle2);
            3 == this.life && (this.currentAnim = this.anims.idle3);
            2 == this.life && (this.currentAnim = this.anims.idle4);
            0 >= this.life && (this.sound || (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.monitor_drop), this.sound = !0), this.currentAnim.angle -= Math.PI / 100, this.tweenOut());
            if (this.gameControl.state == this.gameControl.states.MENU || this.gameControl.state == this.gameControl.states.GAMEEND)
                this.life = 5
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            1 <= this.life && (this.pos.x = this.originalPos.x, this.pos.y = this.originalPos.y)
        },
        tweenOut: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 700
                }
            }, 0.8, {
                onComplete: function() {
                    this.gameControl.salary -= this.decreaseMoney;
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Linear.EaseNone,
                delay: 0
            }).start()
        },
        draw: function() {
            this.parent();
            if (0 == this.life) {
                ig.system.context.font = "30px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#dc0000";
                var b = "-$" + this.decreaseMoney;
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                ig.system.context.fillText(b, this.noticePos.x, this.noticePos.y)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.props.prop-banner").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityPropBanner = EntityEnemyControl.extend({
        size: {
            x: 100,
            y: 90
        },
        zIndex: 101,
        type: ig.Entity.TYPE.B,
        gravityFactor: 0,
        life: 5,
        animSheet: new ig.AnimationSheet("images/prop-banner.png", 100, 90),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("move", 0.07, [1, 2, 1, 0, 3, 4, 3, 0, 1, 0, 3, 0]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        update: function() {
            this.parent();
            this.currentAnim == this.anims.move && this.currentAnim.loopCount && (this.currentAnim = this.anims.idle);
            0 >= this.life && this.tweenOut();
            if (this.gameControl.state == this.gameControl.states.MENU || this.gameControl.state == this.gameControl.states.GAMEEND)
                this.life = 5
        },
        respondToHit: function() {
            this.stopShake || (this.currentAnim = this.anims.move.rewind())
        },
        tweenOut: function() {
            ig.global.wm || this.tween({
                pos: {
                    y: 700
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Linear.EaseNone,
                delay: 0
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("plugins.shock").requires("impact.entity").defines(function() {
    EntityShock = ig.Entity.extend({
        zIndex: 250,
        duration: 0.7,
        strength: 1,
        bgAlpha: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.initShock()
        },
        initShock: function() {
            this.shockTimer = new ig.Timer;
            this.shockTimer.set(this.duration);
            this.flashTimer = new ig.Timer
        },
        resetShock: function() {
            this.shockTimer = null;
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;
            this.kill()
        },
        shock: function() {
            var b = this.shockTimer.delta();
            if (-0.2 > b) {
                var c = this.strength * Math.pow(-b /
                this.duration, 2);
                0.5 < c && (ig.game.screen.x += Math.random().map(0, 1, -c, c), ig.game.screen.y += Math.random().map(0, 1, -c, c))
            }
            -0.4 < b && this.resetShock()
        },
        update: function() {
            this.parent();
            this.shock();
            this.flashTimer && 0 < this.flashTimer.delta() && 0.34 > this.flashTimer.delta() && (this.bgAlpha += 0.02);
            this.flashTimer && 0.35 < this.flashTimer.delta() && (this.bgAlpha -= 0.0070)
        },
        draw: function() {
            this.parent();
            ig.system.context.fillStyle = "rgba(255, 255, 255, " + this.bgAlpha + ")";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy-snowball").requires("impact.entity", "plugins.shock").defines(function() {
    EntityEnemySnowball = ig.Entity.extend({
        size: {
            x: 30,
            y: 30
        },
        drawSize: {
            x: 30,
            y: 30
        },
        offset: {
            x: 60,
            y: 45
        },
        zIndex: 220,
        waitTimer: new ig.Timer,
        thisScale: !1,
        initialScale: {
            x: 1,
            y: 1
        },
        targetScale: {
            x: 1,
            y: 1
        },
        currentScale: {
            x: 1,
            y: 1
        },
        scaleIncrements: 0.025,
        scaleAxis: {
            xAxis: !1,
            yAxis: !1
        },
        gravityFactor: 0,
        attactPoint1: {
            x: 380,
            y: 200
        },
        attactPoint2: {
            x: 50,
            y: 350
        },
        attactPoint3: {
            x: 500,
            y: 300
        },
        attactPoint4: {
            x: 400,
            y: 300
        },
        attactPoint5: {
            x: 200,
            y: 450
        },
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        animSheet: new ig.AnimationSheet("images/snowball.png", 150, 134),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.addAnim("explore", 0.05, [1, 2, 3, 4, 5, 6, 7]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.handleMovement();
            this.waitTimer.set();
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.swing);
            ig.global.wm || this.setScale(0.5, 0.5)
        },
        update: function() {
            this.parent();
            this.scaleSize();
            500 <= this.pos.y && this.kill();
            this.currentAnim == this.anims.explore && (this.soundPlay || (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hurt), this.soundPlay = !0), this.currentAnim.loopCount && (this.gameControl.health -= 10, this.kill()))
        },
        shockScreen: function() {
            ig.game.spawnEntity(EntityShock, 0, 0)
        },
        snowExplore: function() {
            this.currentAnim = this.anims.explore.rewind()
        },
        _checkScale: function() {
            this.scaleAxis.yAxis && this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, this.currentScale.y) : this.scaleAxis.yAxis ? this.setScale(1, this.currentScale.y) : this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, 1) : this.setScale(this.currentScale.x, this.currentScale.y)
        },
        onCompleteScaleX: function() {},
        onCompleteScaleY: function() {},
        checkIfNeedToScale: function() {
            if (this.targetScale.x > this.initialScale.x)
                if (this.currentScale.x < this.targetScale.x)
                    this.currentScale.x += this.scaleIncrements;
                else
                    this.onCompleteScaleX();
            else if (this.currentScale.x > this.targetScale.x)
                this.currentScale.x -= this.scaleIncrements;
            else
                this.onCompleteScaleX();
            this._checkScale();
            if (this.targetScale.y > this.initialScale.y)
                if (this.currentScale.y < this.targetScale.y)
                    this.currentScale.y += this.scaleIncrements;
                else
                    this.onCompleteScaleY();
            else if (this.currentScale.y > this.targetScale.y)
                this.currentScale.y -= this.scaleIncrements;
            else
                this.onCompleteScaleY();
            this._checkScale()
        },
        scaleSize: function() {
            !this.thisScale && this.waitTimer && 0 < this.waitTimer.delta() && (this.setScale(), this.scale.x += 0.11, this.scale.y += 0.11);
            !this.thisScale && this.waitTimer && 0.8 < this.waitTimer.delta() && (this.thisScale = !0)
        },
        handleMovement: function() {
            switch (Math.floor(5 * Math.random()) + 1) {
            case 1:
                this.tween({
                    pos: {
                        x: this.attactPoint2.x
                    }
                }, 0.4, {
                    onComplete: function() {
                        this.snowExplore();
                        this.shockScreen()
                    }.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                this.tween({
                    pos: {
                        y: this.attactPoint2.y
                    }
                }, 0.4, {
                    onComplete: function() {}.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                break;
            case 2:
                this.tween({
                    pos: {
                        x: this.attactPoint1.x
                    }
                }, 0.4, {
                    onComplete: function() {
                        this.snowExplore();
                        this.shockScreen()
                    }.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                this.tween({
                    pos: {
                        y: this.attactPoint1.y
                    }
                }, 0.4, {
                    onComplete: function() {}.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                break;
            case 3:
                this.tween({
                    pos: {
                        x: this.attactPoint3.x
                    }
                }, 0.4, {
                    onComplete: function() {
                        this.snowExplore();
                        this.shockScreen()
                    }.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                this.tween({
                    pos: {
                        y: this.attactPoint3.y
                    }
                }, 0.4, {
                    onComplete: function() {}.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                break;
            case 4:
                this.tween({
                    pos: {
                        x: this.attactPoint4.x
                    }
                }, 0.4, {
                    onComplete: function() {
                        this.snowExplore();
                        this.shockScreen()
                    }.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                this.tween({
                    pos: {
                        y: this.attactPoint4.y
                    }
                }, 0.4, {
                    onComplete: function() {}.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start();
                break;
            case 5:
                this.tween({
                    pos: {
                        x: this.attactPoint5.x
                    }
                }, 0.4, {
                    onComplete: function() {
                        this.snowExplore();
                        this.shockScreen()
                    }.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start(), this.tween({
                    pos: {
                        y: this.attactPoint5.y
                    }
                }, 0.4, {
                    onComplete: function() {}.bind(this),
                    easing: ig.Tween.Easing.Linear.EaseNone
                }).start()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy-boss").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemyBoss = EntityEnemyControl.extend({
        size: {
            x: 130,
            y: 150
        },
        offset: {
            x: 150,
            y: 180
        },
        zIndex: 1,
        originalPos: [],
        life: 8,
        attackTime: 1.5,
        salaryGet: 1E3,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/boss.png", 451, 451),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("stand2", 0.3, [7]);
            this.addAnim("stand3", 0.3, [10]);
            this.addAnim("stand4", 0.3, [13]);
            this.addAnim("stand5", 0.3, [16]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("shoot2", 0.2, [8]);
            this.addAnim("shootEnd2", 0.3, [9]);
            this.addAnim("shoot3", 0.2, [11]);
            this.addAnim("shootEnd3", 0.3, [12]);
            this.addAnim("shoot4", 0.2, [14]);
            this.addAnim("shootEnd4", 0.3, [15]);
            this.addAnim("shoot5", 0.2, [17]);
            this.addAnim("shootEnd5", 0.3, [18]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.addAnim("explore", 0.08, [5, 6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || (this.tweenIn(), this.setScale(1.2, 1.2));
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot ? this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 40, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x +
            this.size.x, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind()) : this.currentAnim == this.anims.shoot2 ? this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 40, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd2.rewind()) : this.currentAnim == this.anims.shoot3 ? this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 40, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd3.rewind()) : this.currentAnim == this.anims.shoot4 ? this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 40, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd4.rewind()) : this.currentAnim == this.anims.shoot5 && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 40, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd5.rewind());
            this.attackAnimation();
            this.hideForNextRound();
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        hideForNextRound: function() {
            6 >= this.life && !this.stage3 && (this.type = ig.Entity.TYPE.NONE, this.stage3 = !0);
            4 >= this.life && !this.stage4 && (this.type = ig.Entity.TYPE.NONE, this.stage4 = !0);
            2 >= this.life && !this.stage5 && (this.type = ig.Entity.TYPE.NONE, this.stage5 = !0);
            0 >= this.life && !this.die && (this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.explore.rewind(), this.die = !0);
            this.currentAnim == this.anims.stand3 && this.currentAnim.loopCount && this.hide1();
            this.currentAnim == this.anims.stand4 && this.currentAnim.loopCount && this.hide2();
            this.currentAnim == this.anims.stand5 && this.currentAnim.loopCount && this.hide3();
            if (this.currentAnim == this.anims.die && this.currentAnim.loopCount) {
                if (8 == this.life || 7 == this.life)
                    this.currentAnim = this.anims.stand;
                if (6 == this.life || 5 == this.life)
                    this.currentAnim = this.anims.stand3;
                if (4 == this.life || 3 == this.life)
                    this.currentAnim = this.anims.stand4;
                if (2 == this.life || 1 == this.life)
                    this.currentAnim = this.anims.stand5
            }
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim == this.anims.stand && (this.currentAnim = this.anims.shoot.rewind()), this.currentAnim == this.anims.stand2 && (this.currentAnim = this.anims.shoot2.rewind()), this.currentAnim == this.anims.stand3 && (this.currentAnim = this.anims.shoot3.rewind()), this.currentAnim == this.anims.stand4 && (this.currentAnim = this.anims.shoot4.rewind()), this.currentAnim == this.anims.stand5 && (this.currentAnim = this.anims.shoot5.rewind()), this.attackTimer.reset())
        },
        attackAnimation: function() {
            this.currentAnim == this.anims.shootEnd ? this.currentAnim.loopCount && (this.currentAnim = this.anims.stand.rewind()) : this.currentAnim == this.anims.shootEnd2 && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand2.rewind());
            this.currentAnim == this.anims.shootEnd3 && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand3.rewind());
            this.currentAnim == this.anims.shootEnd4 && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand4.rewind());
            this.currentAnim == this.anims.shootEnd5 && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand5.rewind());
            this.currentAnim == this.anims.explore && this.currentAnim.loopCount && (!0 == this.gameControl.lvl1Boss && (this.gameControl.lvlTimer.reset(), this.gameControl.lvl2 = !0, this.gameControl.lvl1Boss = !1), !0 == this.gameControl.lvl2Boss && (this.gameControl.lvlTimer.reset(), this.gameControl.lvl3 = !0, this.gameControl.lvl2Boss = !1), !0 == this.gameControl.lvl3Boss && (this.gameControl.lvlTimer.reset(), this.gameControl.lvl4 = !0, this.gameControl.lvl3Boss = !1), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y /
            2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 202
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 203
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 204
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 205
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 206
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 207
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 208
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 209
            }), this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, this.kill())
        },
        tweenIn: function() {
            250 == this.pos.x && 700 == this.pos.y && (this.zIndex = 106, this.tween({
                pos: {
                    y: 320
                }
            }, 0.5, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start());
            450 == this.pos.x && 200 == this.pos.y && this.tween({
                pos: {
                    y: 100
                }
            }, 0.5, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start();
            550 == this.pos.x && 400 == this.pos.y && this.tween({
                pos: {
                    y: 230
                }
            }, 0.5, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start();
            20 == this.pos.x && 400 == this.pos.y && this.tween({
                pos: {
                    y: 120
                }
            }, 0.5, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 600
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        hide1: function() {
            this.finishHide1 || (this.type = ig.Entity.TYPE.NONE, this.attackTimer.reset(), ig.global.wm || (450 == this.pos.x && 100 == this.pos.y ? this.tween({
                pos: {
                    y: 200
                }
            }, 0.5, {
                onComplete: function() {
                    this.attackTimer.reset();
                    switch (Math.floor(4 * Math.random()) + 1) {
                    case 1:
                        this.zIndex = 106;
                        this.setScale(1.2, 1.2);
                        this.pos.x = 250;
                        this.pos.y = 700;
                        break;
                    case 2:
                        this.zIndex = 10;
                        this.setScale(0.6, 0.6);
                        this.pos.x = 450;
                        this.pos.y = 200;
                        break;
                    case 3:
                        this.zIndex = 85;
                        this.setScale(1, 1);
                        this.pos.x = 550;
                        this.pos.y = 400;
                        break;
                    case 4:
                        this.zIndex = 55, this.setScale(0.7, 0.7), this.pos.x = 20, this.pos.y = 400
                    }
                    this.tweenIn()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start() : this.tween({
                pos: {
                    y: 700
                }
            }, 0.5, {
                onComplete: function() {
                    this.attackTimer.reset();
                    switch (Math.floor(4 * Math.random()) + 1) {
                    case 1:
                        this.zIndex = 106;
                        this.setScale(1.2, 1.2);
                        this.pos.x = 250;
                        this.pos.y = 700;
                        break;
                    case 2:
                        this.zIndex = 10;
                        this.setScale(0.6, 0.6);
                        this.pos.x = 450;
                        this.pos.y = 200;
                        break;
                    case 3:
                        this.zIndex = 85;
                        this.setScale(1, 1);
                        this.pos.x = 550;
                        this.pos.y = 400;
                        break;
                    case 4:
                        this.zIndex = 55, this.setScale(0.7, 0.7), this.pos.x = 20, this.pos.y = 400
                    }
                    this.tweenIn()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()), this.finishHide1 = !0)
        },
        hide2: function() {
            this.finishHide2 || (this.type = ig.Entity.TYPE.NONE, this.attackTimer.reset(), ig.global.wm || (450 == this.pos.x && 100 == this.pos.y ? this.tween({
                pos: {
                    y: 200
                }
            }, 0.5, {
                onComplete: function() {
                    this.attackTimer.reset();
                    switch (Math.floor(4 * Math.random()) + 1) {
                    case 1:
                        this.zIndex = 106;
                        this.setScale(1.2, 1.2);
                        this.pos.x = 250;
                        this.pos.y = 700;
                        break;
                    case 2:
                        this.zIndex = 10;
                        this.setScale(0.6, 0.6);
                        this.pos.x = 450;
                        this.pos.y = 200;
                        break;
                    case 3:
                        this.zIndex = 85;
                        this.setScale(1, 1);
                        this.pos.x = 550;
                        this.pos.y = 400;
                        break;
                    case 4:
                        this.zIndex = 55, this.setScale(0.7, 0.7), this.pos.x = 20, this.pos.y = 400
                    }
                    this.tweenIn()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start() : this.tween({
                pos: {
                    y: 700
                }
            }, 0.5, {
                onComplete: function() {
                    this.attackTimer.reset();
                    switch (Math.floor(4 * Math.random()) + 1) {
                    case 1:
                        this.zIndex = 106;
                        this.setScale(1.2, 1.2);
                        this.pos.x = 250;
                        this.pos.y = 700;
                        break;
                    case 2:
                        this.zIndex = 10;
                        this.setScale(0.6, 0.6);
                        this.pos.x = 450;
                        this.pos.y = 200;
                        break;
                    case 3:
                        this.zIndex = 85;
                        this.setScale(1, 1);
                        this.pos.x = 550;
                        this.pos.y = 400;
                        break;
                    case 4:
                        this.zIndex = 55, this.setScale(0.7, 0.7), this.pos.x = 20, this.pos.y = 400
                    }
                    this.tweenIn()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()), this.finishHide2 = !0)
        },
        hide3: function() {
            this.finishHide3 || (this.type = ig.Entity.TYPE.NONE, this.attackTimer.reset(), ig.global.wm || (450 == this.pos.x && 100 == this.pos.y ? this.tween({
                pos: {
                    y: 200
                }
            }, 0.5, {
                onComplete: function() {
                    this.attackTimer.reset();
                    switch (Math.floor(4 * Math.random()) + 1) {
                    case 1:
                        this.zIndex = 106;
                        this.setScale(1.2, 1.2);
                        this.pos.x = 250;
                        this.pos.y = 700;
                        break;
                    case 2:
                        this.zIndex = 10;
                        this.setScale(0.6, 0.6);
                        this.pos.x = 450;
                        this.pos.y = 200;
                        break;
                    case 3:
                        this.zIndex = 85;
                        this.setScale(1, 1);
                        this.pos.x = 550;
                        this.pos.y = 400;
                        break;
                    case 4:
                        this.zIndex = 55, this.setScale(0.7, 0.7), this.pos.x = 20, this.pos.y = 400
                    }
                    this.tweenIn()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start() : this.tween({
                pos: {
                    y: 700
                }
            }, 0.5, {
                onComplete: function() {
                    this.attackTimer.reset();
                    switch (Math.floor(4 * Math.random()) + 1) {
                    case 1:
                        this.zIndex = 106;
                        this.setScale(1.2, 1.2);
                        this.pos.x = 250;
                        this.pos.y = 700;
                        break;
                    case 2:
                        this.zIndex = 10;
                        this.setScale(0.6, 0.6);
                        this.pos.x = 450;
                        this.pos.y = 200;
                        break;
                    case 3:
                        this.zIndex = 85;
                        this.setScale(1, 1);
                        this.pos.x = 550;
                        this.pos.y = 400;
                        break;
                    case 4:
                        this.zIndex = 55, this.setScale(0.7, 0.7), this.pos.x = 20, this.pos.y = 400
                    }
                    this.tweenIn()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()), this.finishHide3 = !0)
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy1").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy1 = EntityEnemyControl.extend({
        size: {
            x: 170,
            y: 200
        },
        offset: {
            x: 0,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        gravityFactor: 0,
        life: 1,
        attackTime: 2.5,
        salaryGet: 20,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy1.png", 200, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.tutorialControl = ig.game.getEntitiesByType(EntityTutorialControl)[0];
            ig.global.wm || this.tweenIn();
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && (this.currentAnim.loopCount && !ig.game.paused ? (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + 120, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind()) : this.currentAnim.loopCount && this.tutorialControl && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + 120, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind()));
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 2, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: this.zIndex + 1
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: this.zIndex + 1
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), ig.game.sortEntitiesDeferred(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && !this.tutorialControl && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset());
            this.tutorialControl && 5 == this.tutorialControl.scene && !this.tutorialShoot && (this.currentAnim = this.anims.shoot.rewind(), this.tutorialShoot = !0)
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 320
                }
            }, 0.5, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y;
                    this.tutorialControl && (ig.game.paused = !ig.game.paused, this.tutorialControl.fontTimer.reset(), this.tutorialControl.scene++)
                }.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 600
                }
            }, 1, {
                onComplete: function() {
                    this.tutorialControl && this.tutorialControl.scene++;
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy2").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy2 = EntityEnemyControl.extend({
        size: {
            x: 140,
            y: 200
        },
        offset: {
            x: 50,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        life: 1,
        attackTime: 2.5,
        salaryGet: 20,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy2.png", 200, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || this.tweenIn();
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + 20, this.pos.y + 30, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind());
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 2, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x +
            this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset())
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 340
                }
            }, 0.5, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 600
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy3").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy3 = EntityEnemyControl.extend({
        size: {
            x: 140,
            y: 200
        },
        offset: {
            x: 50,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        life: 1,
        attackTime: 2.5,
        salaryGet: 20,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy3.png", 230, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || (this.tweenIn(), this.setScale(0.8, 0.8));
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x +
            20, this.pos.y + 30, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind());
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 2, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset())
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 245
                }
            }, 0.7, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 600
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy4").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy4 = EntityEnemyControl.extend({
        size: {
            x: 140,
            y: 200
        },
        offset: {
            x: 50,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        life: 1,
        attackTime: 2.5,
        salaryGet: 20,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy4.png", 230, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || (this.tweenIn(), this.setScale(0.6, 0.6));
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x +
            60, this.pos.y + 30, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind());
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 2, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset())
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 110
                }
            }, 0.7, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 600
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || this.initShock()
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy5").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy5 = EntityEnemyControl.extend({
        size: {
            x: 140,
            y: 200
        },
        offset: {
            x: 50,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        life: 1,
        attackTime: 2.5,
        salaryGet: 30,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy5.png", 230, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || (this.tweenIn(), this.setScale(0.6, 0.6));
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 30, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 30, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind());
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 5, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 202
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset())
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 110
                }
            }, 0.7, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 600
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || (this.attackTimer.reset(), this.initShock())
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy6").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy6 = EntityEnemyControl.extend({
        size: {
            x: 140,
            y: 200
        },
        offset: {
            x: 50,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        life: 1,
        attackTime: 2.5,
        salaryGet: 30,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy6.png", 230, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || (this.tweenIn(), this.setScale(0.8, 0.8));
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 40, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 40, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind());
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 5, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 202
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset())
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 220
                }
            }, 0.7, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 600
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || (this.attackTimer.reset(), this.initShock())
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy7").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy7 = EntityEnemyControl.extend({
        size: {
            x: 140,
            y: 200
        },
        offset: {
            x: 50,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        life: 1,
        attackTime: 2.5,
        salaryGet: 30,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy7.png", 230, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || (this.tweenIn(), this.setScale(0.4, 0.4));
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 30, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 30, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind());
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 5, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 202
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset())
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 100
                }
            }, 0.7, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 200
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || (this.attackTimer.reset(), this.initShock())
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy8").requires("game.entities.ingame.enemy-control", "game.entities.enemies.enemy-snowball").defines(function() {
    EntityEnemy8 = EntityEnemyControl.extend({
        size: {
            x: 140,
            y: 200
        },
        offset: {
            x: 50,
            y: 40
        },
        zIndex: 1,
        originalPos: [],
        life: 1,
        attackTime: 2.5,
        salaryGet: 30,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/enemy8.png", 230, 240),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("stand", 0.3, [0, 1]);
            this.addAnim("shoot", 0.2, [2, 3]);
            this.addAnim("shootEnd", 0.3, [4]);
            this.addAnim("die", 0.2, [5, 6]);
            this.addAnim("holdDie", 1, [6]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.global.wm || (this.tweenIn(), this.setScale(0.4, 0.4));
            this.attackTimer = new ig.Timer;
            this.currentAnim = this.anims.stand
        },
        update: function() {
            this.parent();
            ig.game.paused ? this.attackTimer.pause() : this.attackTimer.unpause();
            this.attack();
            this.currentAnim == this.anims.shoot && this.currentAnim.loopCount && !ig.game.paused && (this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x, this.pos.y + 30, {
                zIndex: 220
            }), this.snow = ig.game.spawnEntity(EntityEnemySnowball, this.pos.x + this.size.x, this.pos.y + 30, {
                zIndex: 220
            }), this.currentAnim = this.anims.shootEnd.rewind());
            this.currentAnim == this.anims.shootEnd && this.currentAnim.loopCount && (this.currentAnim = this.anims.stand);
            this.currentAnim == this.anims.die && this.currentAnim.loopCount && (this.gameControl.health += 5, this.currentAnim = this.anims.holdDie, this.tweenOut());
            0 >= this.life && !this.die && (this.gameControl.enemyKill += 1, this.gameControl.salary += this.salaryGet, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shine), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 200
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 201
            }), ig.game.spawnEntity(EntityPropMoney, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                zIndex: 202
            }), this.type = ig.Entity.TYPE.NONE, this.currentAnim = this.anims.die.rewind(), this.die = !0);
            this.gameControl.state !== this.gameControl.states.GAMERUN && this.tweenOut()
        },
        attack: function() {
            this.attackTimer && this.attackTimer.delta() > this.attackTime && !this.die && (this.currentAnim = this.anims.shoot.rewind(), this.attackTimer.reset())
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 100
                }
            }, 0.7, {
                onComplete: function() {
                    this.type = ig.Entity.TYPE.B;
                    this.originalPos.x = this.pos.x;
                    this.originalPos.y = this.pos.y
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.type = ig.Entity.TYPE.NONE;
            this.attackTimer.reset();
            this.tween({
                pos: {
                    y: 200
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        respondToHit: function() {
            this.stopShake || (this.attackTimer.reset(), this.initShock())
        },
        resetShock: function() {
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.ReadyFightFont").requires("impact.entity").defines(function() {
    EntityReadyFightFont = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        zIndex: 200,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.fightTimer = new ig.Timer;
            this.ready1 = ig.game.spawnEntity(EntityReady1, -100, 200);
            this.ready2 = ig.game.spawnEntity(EntityReady2, 900, 200);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        update: function() {
            this.parent();
            this.fightTimer && 1.2 < this.fightTimer.delta() && (this.ready1.kill(), this.ready2.kill(), null == this.fight && (this.fight = ig.game.spawnEntity(EntityFight, 220, 200)));
            this.fightTimer && 1.8 < this.fightTimer.delta() && (this.gameControl.state = this.gameControl.states.GAMERUN, this.fight.kill(), this.kill())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.ready1").requires("impact.entity").defines(function() {
    EntityReady1 = ig.Entity.extend({
        size: {
            x: 455,
            y: 202
        },
        type: ig.Entity.TYPE.B,
        zIndex: 200,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/ready1.png", 455, 101),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shine", 0.15, [0]);
            this.tweenIn()
        },
        update: function() {
            this.parent()
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    x: 180
                }
            }, 0.7, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.ready2").requires("impact.entity").defines(function() {
    EntityReady2 = ig.Entity.extend({
        size: {
            x: 455,
            y: 202
        },
        type: ig.Entity.TYPE.B,
        zIndex: 200,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/ready2.png", 455, 101),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shine", 0.15, [0]);
            this.tweenIn()
        },
        update: function() {
            this.parent()
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    x: 180
                }
            }, 0.7, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.fight").requires("impact.entity").defines(function() {
    EntityFight = ig.Entity.extend({
        size: {
            x: 419,
            y: 105
        },
        type: ig.Entity.TYPE.B,
        zIndex: 300,
        drawSize: {
            x: 90,
            y: 90
        },
        thisScale: !1,
        initialScale: {
            x: 1,
            y: 1
        },
        targetScale: {
            x: 1,
            y: 1
        },
        currentScale: {
            x: 1,
            y: 1
        },
        scaleIncrements: 0.025,
        scaleAxis: {
            xAxis: !1,
            yAxis: !1
        },
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/fight.png", 419, 105),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shine", 0.1, [0]);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.fight);
            this.scaleTimer = new ig.Timer
        },
        update: function() {
            this.parent();
            this.scaleSize()
        },
        _checkScale: function() {
            this.scaleAxis.yAxis && this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, this.currentScale.y) : this.scaleAxis.yAxis ? this.setScale(1, this.currentScale.y) : this.scaleAxis.xAxis ? this.setScale(this.currentScale.x, 1) : this.setScale(this.currentScale.x, this.currentScale.y)
        },
        onCompleteScaleX: function() {},
        onCompleteScaleY: function() {},
        checkIfNeedToScale: function() {
            if (this.targetScale.x > this.initialScale.x)
                if (this.currentScale.x < this.targetScale.x)
                    this.currentScale.x += this.scaleIncrements;
                else
                    this.onCompleteScaleX();
            else if (this.currentScale.x > this.targetScale.x)
                this.currentScale.x -= this.scaleIncrements;
            else
                this.onCompleteScaleX();
            this._checkScale();
            if (this.targetScale.y > this.initialScale.y)
                if (this.currentScale.y < this.targetScale.y)
                    this.currentScale.y += this.scaleIncrements;
                else
                    this.onCompleteScaleY();
            else if (this.currentScale.y > this.targetScale.y)
                this.currentScale.y -= this.scaleIncrements;
            else
                this.onCompleteScaleY();
            this._checkScale()
        },
        scaleSize: function() {
            this.scaleTimer && 0 < this.scaleTimer.delta() && (this.setScale(), this.scale.x += 0.02, this.scale.y += 0.02)
        },
        draw: function() {
            this.parent();
            this.currentAnim.alpha -= 0.02
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.player-life-bar").requires("impact.entity").defines(function() {
    EntityPlayerLifeBar = ig.Entity.extend({
        size: {
            x: 331,
            y: 38
        },
        zIndex: 200,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/bar-empty.png", 331, 38),
        bar: new ig.Image("images/bar.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            1 <= this.gameControl.health && b.drawImage(this.bar.data, 0, 0, 309, 17, this.pos.x + 10, this.pos.y + 8, this.gameControl.health, 17)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.bossComeFont").requires("impact.entity").defines(function() {
    EntityBossComeFont = ig.Entity.extend({
        size: {
            x: 700,
            y: 250
        },
        type: ig.Entity.TYPE.B,
        Zindex: 200,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/bossComeFont.png", 700, 250),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.tweenIn()
        },
        update: function() {
            this.parent()
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    x: 40
                }
            }, 2, {
                onComplete: function() {
                    this.tweenOut()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.tween({
                pos: {
                    x: 900
                }
            }, 1, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Cubic.EaseIn,
                delay: 0
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.boards.board-money").requires("impact.entity").defines(function() {
    EntityBoardMoney = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        zIndex: 200,
        type: ig.Entity.TYPE.B,
        ignorePause: !0,
        gravityFactor: 0,
        animSheet: new ig.AnimationSheet("images/board-money.png", 239, 46),
        dimboFont: new ig.Font("images/dimbo-small-white-font.png"),
        dimboFontRed: new ig.Font("images/dimbo-small-red-font.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            if (0 <= this.gameControl.salary) {
                ig.system.context.font = "30px RocksG";
                ig.system.context.textAlign = "right";
                ig.system.context.fillStyle = "#ffffff";
                var b = "$" + this.gameControl.salary;
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                var c = this.pos.x + 230,
                    d = this.pos.y + 35
            } else
                ig.system.context.font = "30px RocksG", ig.system.context.textAlign = "right", ig.system.context.fillStyle = "#dc0000", b = "$" + this.gameControl.salary, ig.system.context.measureText(b), ig.system.context.measureText("m"), c = this.pos.x + 230, d = this.pos.y + 35;
            ig.system.context.fillText(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.boards.board-gameover").requires("impact.entity").defines(function() {
    EntityBoardGameover = ig.Entity.extend({
        size: {
            x: 682,
            y: 409
        },
        ignorePause: !0,
        type: ig.Entity.TYPE.B,
        zIndex: 500,
        bgAlpha: 0.5,
        gravityFactor: 0,
        clicked: !1,
        animSheet: new ig.AnimationSheet("images/board-gameover.png", 682, 409),
        dimboFont: new ig.Font("images/dimbo-small-red-font.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.fight);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            ig.game.paused = !ig.game.paused;
            this.tweenIn()
        },
        update: function() {
            this.parent();
            ig.input.pressed("click") && (215 <= this.pointer.pos.x && 326 >= this.pointer.pos.x && 395 <= this.pointer.pos.y && 450 >= this.pointer.pos.y && !this.clicked && (this.tweenOut(), ig.game.paused = !ig.game.paused, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.gameControl.state = this.gameControl.states.MENU, this.clicked = !0), 445 <= this.pointer.pos.x && 600 >= this.pointer.pos.x && 400 <= this.pointer.pos.y && 445 >= this.pointer.pos.y && !this.clicked && (this.tweenOut(), ig.game.paused = !ig.game.paused, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.gameControl.state = this.gameControl.states.GAMESTART, this.clicked = !0))
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 80
                }
            }, 0.5, {
                onComplete: function() {}.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.tween({
                pos: {
                    y: -500
                }
            }, 0.3, {
                onComplete: function() {
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut,
                delay: 0
            }).start()
        },
        draw: function() {
            ig.game.paused && (ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height));
            this.parent();
            ig.system.context.font = "30px RocksG";
            ig.system.context.textAlign = "right";
            ig.system.context.fillStyle = "#02cb23";
            var b = this.gameControl.enemyKill;
            ig.system.context.measureText(b);
            ig.system.context.measureText("m");
            var c = this.pos.x +
                600,
                d = this.pos.y + 160;
            ig.system.context.fillText(b, c, d);
            0 <= this.gameControl.salary ? (ig.system.context.font = "30px RocksG", ig.system.context.textAlign = "right", ig.system.context.fillStyle = "#02cb23") : (ig.system.context.font = "30px RocksG", ig.system.context.textAlign = "right", ig.system.context.fillStyle = "#dc0000");
            b = "$" + this.gameControl.salary;
            ig.system.context.measureText(b);
            ig.system.context.measureText("m");
            c = this.pos.x + 600;
            d = this.pos.y + 260;
            ig.system.context.fillText(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.tutorial-control").requires("impact.entity", "game.entities.enemies.enemy1", "game.entities.ingame.player-life-bar", "game.entities.boards.board-money", "game.entities.buttons.btn-reload").defines(function() {
    EntityTutorialControl = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        gravityFactor: 0,
        scene: -1,
        line_StartPoint: [],
        TOTAL_TEXT: "",
        zIndex: 300,
        ignorePause: !0,
        bgAlpha: 0.5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.playerControl = ig.game.getEntitiesByType(EntityPlayerControl)[0];
            this.scene++;
            if (_STRINGS.Story[this.scene]) {
                this.TOTAL_TEXT = "";
                for (b = 0; b < _STRINGS.Story[this.scene].length; b++)
                    this.TOTAL_TEXT += _STRINGS.Story[this.scene][b], this.line_StartPoint[b] = _STRINGS.Story[this.scene][b - 1] ? this.line_StartPoint[b - 1] + _STRINGS.Story[this.scene][b - 1].length : 0;
                this.totalTime = 0.03 * this.TOTAL_TEXT.length;
                this.fontTimer = new ig.Timer
            }
        },
        update: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0];
            this.reticle = ig.game.getEntitiesByType(EntityReticle)[0];
            this.snowball = ig.game.getEntitiesByType(EntitySnowball)[0];
            switch (this.scene) {
            case 0:
                0 == ig.game.getEntitiesByType(EntityTutorialBossWithTitle).length && (this.tutorialTitle = ig.game.spawnEntity(EntityTutorialBossWithTitle, 0, 600));
                0 == ig.game.getEntitiesByType(EntityTutorialBtnNext).length && (this.btnNext = ig.game.spawnEntity(EntityTutorialBtnNext, 0, 0));
                ig.game.sortEntitiesDeferred();
                break;
            case 1:
                this.reticle.zIndex = 750;
                break;
            case 2:
                0 == ig.game.getEntitiesByType(EntityBtnReload).length && (this.btnReload = ig.game.spawnEntity(EntityBtnReload, 620, 500));
                0 == ig.game.getEntitiesByType(EntityPlayerLifeBar).length && (this.lifeBar = ig.game.spawnEntity(EntityPlayerLifeBar, 30, 5));
                0 == ig.game.getEntitiesByType(EntityBoardMoney).length && (this.moneyBar = ig.game.spawnEntity(EntityBoardMoney, 390, 4));
                break;
            case 3:
                0 == ig.game.getEntitiesByType(EntityEnemy1).length && (this.kid1 = ig.game.spawnEntity(EntityEnemy1, 60, 600, {
                    zIndex: 102
                }));
                this.btnReload.currentAnim = this.btnReload.anims.idle;
                break;
            case 4:
                this.kid1 && (this.btnReload.currentAnim = this.btnReload.anims.idle, this.kid1.attackTimer.reset());
                break;
            case 5:
                this.btnNext.kill();
                ig.game.paused && (ig.game.paused = !ig.game.paused);
                this.btnReload.currentAnim = this.btnReload.anims.idle;
                309 > this.gameControl.health && this.scene++;
                break;
            case 6:
                this.kid1.attackTimer.reset();
                break;
            case 7:
                this.kid1.attackTimer.reset();
                break;
            case 8:
                this.kid1.attackTimer.reset();
                this.snowball && (this.snowball.zIndex = 800);
                this.isInTarget = this.pointer.pos.x >= this.kid1.pos.x && this.pointer.pos.x <= this.kid1.pos.x + this.kid1.size.x && this.pointer.pos.y >= this.kid1.pos.y && this.pointer.pos.y <= this.kid1.pos.y + this.kid1.size.y ? !0 : !1;
                break;
            case 11:
                0 == ig.game.getEntitiesByType(EntityTutorialBossWithTitle).length && (this.tutorialTitle = ig.game.spawnEntity(EntityTutorialBossWithTitle, 0, 600));
                break;
            case 15:
                this.tutorialTitle.kill(), this.kid1.kill(), this.btnReload.kill(), this.moneyBar.kill(), this.lifeBar.kill(), this.btnNext.kill(), this.gameControl.state = this.gameControl.states.GAMESTART, this.kill()
            }
            4 != this.scene && 6 != this.scene && (7 != this.scene && 8 != this.scene && 9 != this.scene) && (this.btnNext.pos.x = this.tutorialTitle.pos.x + 700, this.btnNext.pos.y = this.tutorialTitle.pos.y + 450)
        },
        draw: function() {
            this.parent();
            if (4 == this.scene) {
                ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")";
                ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")";
                ig.system.context.fillRect(0, 180, ig.system.width, 160);
                ig.system.context.font = "26px RocksG";
                ig.system.context.fillStyle = "#ffffff";
                var b = _STRINGS.Tutorial["T0-0"],
                    c = ig.system.context.measureText(b).width;
                ig.system.context.measureText("m");
                c = ig.system.width / 2 - c / 2;
                ig.system.context.fillText(b, c, 250);
                ig.system.context.font = "26px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#ffffff";
                b = _STRINGS.Tutorial["T0-0(2)"];
                c = ig.system.context.measureText(b).width;
                ig.system.context.measureText("m");
                c = ig.system.width / 2 - c / 2;
                ig.system.context.fillText(b, c, 290);
                0 == ig.game.getEntitiesByType(EntityTutorialBtnNext).length && (this.btnNext = ig.game.spawnEntity(EntityTutorialBtnNext, 700, 280));
                ig.game.sortEntitiesDeferred()
            }
            6 == this.scene && (ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 80, ig.system.width, 160), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-1"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width / 2 - c / 2, ig.system.context.fillText(b, c, 140), 0 == ig.game.getEntitiesByType(EntityTutorialBtnNext).length && (this.btnNext = ig.game.spawnEntity(EntityTutorialBtnNext, 700, 150)), this.lifeBar.zIndex = 700);
            7 == this.scene && (ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 80, ig.system.width, 160), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-2"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width / 2 - c / 2, ig.system.context.fillText(b, c, 140), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-2(2)"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width /
            2 - c / 2, ig.system.context.fillText(b, c, 180));
            8 == this.scene && (this.lifeBar.zIndex = 100, this.kid1.zIndex = 700, ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 80, ig.system.width, 160), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-3"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width / 2 - c / 2, ig.system.context.fillText(b, c, 140), this.btnNext.pos.x = 700, this.btnNext.pos.y = 150);
            9 == this.scene && (ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 80, ig.system.width, 200), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-4"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width / 2 - c / 2, ig.system.context.fillText(b, c, 140), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-4(2)"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width / 2 - c / 2, ig.system.context.fillText(b, c, 180), 0 == ig.game.getEntitiesByType(EntityTutorialBtnNext).length && (this.btnNext = ig.game.spawnEntity(EntityTutorialBtnNext, 700, 150)), this.moneyBar.zIndex = 700);
            10 == this.scene && (this.btnReload.zIndex = 700, this.moneyBar.zIndex = 200, ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 180, ig.system.width, 200), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-5"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width / 2 - c / 2, ig.system.context.fillText(b, c, 240), ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#ffffff", b = _STRINGS.Tutorial["T0-5(2)"], c = ig.system.context.measureText(b).width, ig.system.context.measureText("m"), c = ig.system.width / 2 - c / 2, ig.system.context.fillText(b, c, 280));
            11 == this.scene && (this.btnReload.zIndex = 200);
            if (_STRINGS.Story[this.scene] && (ig.system.context.font = "26px RocksG", ig.system.context.textAlign = "left", ig.system.context.fillStyle = "#E00001", ig.system.context.textAlign = "left", this.fontTimer))
                for (b = 0; b < _STRINGS.Story[this.scene].length; ++b)
                    this.fontTimer.delta() < this.totalTime ? (c = Math.round(this.fontTimer.delta() / this.totalTime * this.TOTAL_TEXT.length), c > this.line_StartPoint[b] && ig.system.context.fillText(_STRINGS.Story[this.scene][b].substr(0, c - this.line_StartPoint[b]), 0.05 * ig.system.width, 430 + 33 * b)) : (this.fontTimer.pause(), ig.system.context.fillText(_STRINGS.Story[this.scene][b],
                    0.05 * ig.system.width, 430 + 33 * b))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.tutorial-bossWithTitle").requires("impact.entity").defines(function() {
    EntityTutorialBossWithTitle = ig.Entity.extend({
        size: {
            x: 800,
            y: 600
        },
        bgAlpha: 0.5,
        gravityFactor: 0,
        zIndex: 210,
        animSheet: new ig.AnimationSheet("images/boss-with-titleboard.png", 800, 600),
        dimboFont: new ig.Font("images/dimbo-small-red-font.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.tweenIn()
        },
        update: function() {
            this.parent();
            this.tutorialControl = ig.game.getEntitiesByType(EntityTutorialControl)[0];
            this.btnNext = ig.game.getEntitiesByType(EntityTutorialBtnNext)[0]
        },
        tweenIn: function() {
            this.tween({
                pos: {
                    y: 0
                }
            }, 0.5, {
                onComplete: function() {
                    this.tutorialControl.scene++
                }.bind(this),
                easing: ig.Tween.Easing.Back.EaseOut,
                delay: 0
            }).start()
        },
        tweenOut: function() {
            this.tween({
                pos: {
                    y: 600
                }
            }, 0.5, {
                onComplete: function() {
                    this.btnNext.kill();
                    this.tutorialControl.scene++;
                    this.kill()
                }.bind(this),
                easing: ig.Tween.Easing.Back.EaseIn,
                delay: 0
            }).start()
        },
        draw: function() {
            ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.tutorial-btn-next").requires("impact.entity").defines(function() {
    EntityTutorialBtnNext = ig.Entity.extend({
        size: {
            x: 54,
            y: 67
        },
        gravityFactor: 0,
        zIndex: 500,
        type: ig.Entity.TYPE.B,
        ignorePause: !0,
        animSheet: new ig.AnimationSheet("images/btn-next.png", 54, 67),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 1, [0]);
            this.addAnim("over", 1, [1]);
            this.addAnim("down", 0.1, [2]);
            this.tutorialControl = ig.game.getEntitiesByType(EntityTutorialControl)[0]
        },
        update: function() {
            this.parent();
            this.checkOverlapWithPointer();
            this.checkClickOnPause();
            this.tutorialControl = ig.game.getEntitiesByType(EntityTutorialControl)[0];
            this.TutorialBossWithTitle = ig.game.getEntitiesByType(EntityTutorialBossWithTitle)[0];
            this.currentAnim == this.anims.down && this.currentAnim.loopCount && (this.currentAnim = this.anims.up, this.tutorialControl && 10 >= this.tutorialControl.scene ? this.TutorialBossWithTitle && this.TutorialBossWithTitle.tweenOut() : 13 <= this.tutorialControl.scene && this.TutorialBossWithTitle && this.TutorialBossWithTitle.tweenOut(), this.tutorialControl.scene++);
            8 == this.tutorialControl.scene && this.kill()
        },
        clicked: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click);
            this.currentAnim = this.anims.down;
            this.tutorialControl.fontTimer.reset()
        },
        checkClickOnPause: function() {
            ig.game.paused && this.ignorePause && this.checkOverlapWithPointer() && (ig.input.pressed("click") ? this.clicked() : ig.input.released("click") || (this.click = !0))
        },
        checkOverlapWithPointer: function() {
            if (ig.ua.mobile)
                var b = ig.input.mouse.x / widthRatio + ig.game.screen.x,
                    c = ig.input.mouse.y / heightRatio + ig.game.screen.y;
            else
                b = ig.input.mouse.x / multiplier + ig.game.screen.x, c = ig.input.mouse.y / multiplier + ig.game.screen.y;
            return b > this.pos.x + this.size.x || b < this.pos.x || c > this.pos.y + this.size.y || c < this.pos.y ? !1 : !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.enemies.enemy-rat").requires("game.entities.ingame.enemy-control").defines(function() {
    EntityEnemyRat = EntityEnemyControl.extend({
        size: {
            x: 55,
            y: 65
        },
        type: ig.Entity.TYPE.B,
        life: 1,
        zIndex: 307,
        maxVel: {
            x: 300,
            y: 300
        },
        bonus: 200,
        destination: 600,
        speed: 2,
        anim: null,
        animIdle: null,
        animWalk: null,
        dimboFont: new ig.Font("images/dimbo-small-white-font.png"),
        mouse: new ig.AnimationSheet("images/enemy-rat.png", 69, 90),
        mouseOffset: {
            x: 10,
            y: 10
        },
        mouseRect: {
            x: -20,
            y: -20,
            w: 40,
            h: 40
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.setAnim();
            this.gameControl = ig.game.getEntitiesByType(EntityGameControl)[0]
        },
        draw: function() {
            this.anim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y);
            if (0 >= this.life) {
                ig.system.context.font = "30px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#ffffff";
                var b = "+$" + this.bonus;
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                ig.system.context.fillText(b, this.pos.x, this.pos.y)
            }
        },
        update: function() {
            this.parent();
            this.animIdle && this.anim == this.animIdle && this.anim.update();
            this.animIdle && this.anim == this.animWalk && (this.anim.update(), this.pos.y += this.speed);
            this.pos.y >= this.destination && (this.gameControl.bonusTimer.reset(), this.gameControl.setRatTimer = !1, this.kill());
            0 >= this.life && (this.anim = this.animIdle, this.anim.alpha -= 0.02, this.gameControl.bonusTimer.reset(), this.gameControl.setRatTimer = !1, 0 >= this.anim.alpha && (this.gameControl.salary += this.bonus, this.kill()))
        },
        setAnim: function() {
            for (var b = [], c = 0; 3 > c; c++)
                b.push(c);
            this.animIdle = new ig.Animation(this.mouse, 0.4, b);
            this.anim = this.animWalk = new ig.Animation(this.mouse, 0.1, b);
            this.offset = this.mouseOffset;
            this.rect = this.mouseRect
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ingame.game-control").requires("impact.entity", "game.entities.props.prop-title", "game.entities.ingame.player-control", "game.entities.buttons.btn-play", "game.entities.buttons.btn-more-games", "game.entities.buttons.btn-reload", "game.entities.buttons.btn-pause", "game.entities.ingame.reticle", "game.entities.props.prop-monitor1", "game.entities.props.prop-monitor2", "game.entities.props.prop-monitor3", "game.entities.props.prop-banner", "game.entities.enemies.enemy-boss", "game.entities.enemies.enemy1", "game.entities.enemies.enemy2", "game.entities.enemies.enemy3", "game.entities.enemies.enemy4", "game.entities.enemies.enemy5", "game.entities.enemies.enemy6", "game.entities.enemies.enemy7", "game.entities.enemies.enemy8", "game.entities.ingame.ReadyFightFont", "game.entities.ingame.player-life-bar", "game.entities.ingame.bossComeFont", "game.entities.boards.board-money", "game.entities.boards.board-gameover", "game.entities.ingame.tutorial-control", "game.entities.enemies.enemy-rat").defines(function() {
    EntityGameControl = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        gravityFactor: 0,
        state: 1,
        states: {
            MENU: 1,
            INTRO: 2,
            GAMESTART: 3,
            GAMERUN: 4,
            GAMEOVER: 5,
            GAMEEND: 6
        },
        maxKid1: 1,
        maxKid2: 1,
        maxKid3: 1,
        maxKid4: 1,
        maxKid5: 1,
        maxKid6: 1,
        maxKid7: 1,
        maxKid8: 1,
        maxKid9: 1,
        health: 309,
        enemyKill: 0,
        lvl1: !0,
        lvl1Boss: !1,
        lvl2: !1,
        lvl2Boss: !1,
        lvl3: !1,
        lvl3Boss: !1,
        lvl4: !1,
        enemySpawnTime: 1.5,
        lvlTime: 50,
        ignorePause: !0,
        bgAlpha: 0.5,
        zIndex: 180,
        salary: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.gravity = 2E3;
            this.spawnTimer = new ig.Timer;
            this.lvlTimer = new ig.Timer;
            this.bonusTimer = new ig.Timer
        },
        update: function() {
            this.parent();
            ig.game.paused ? (this.spawnTimer.pause(), this.lvlTimer.pause()) : (this.spawnTimer.unpause(), this.lvlTimer.unpause());
            309 <= this.health && (this.health = 309);
            switch (this.state) {
            case this.states.MENU:
                this.spawnMenuItems();
                this.spawnGameDecorate();
                this.btnReload && this.btnReload.kill();
                this.btnPause && this.btnPause.kill();
                this.readyFont && this.readyFont.kill();
                this.lifeBar && this.lifeBar.kill();
                this.moneyBar && this.moneyBar.kill();
                break;
            case this.states.GAMESTART:
                this.spawnGameDecorate();
                this.enemyKill = this.salary = 0;
                this.health = 309;
                this.spawnGameItems();
                this.lvlTimer.reset();
                this.bonusTimer.reset();
                this.lvl1 = !0;
                this.lvl4 = this.lvl3Boss = this.lvl3 = this.lvl2Boss = this.lvl2 = this.lvl1Boss = !1;
                break;
            case this.states.GAMERUN:
                this.spawnEnemy();
                0 >= this.health && (this.state = this.states.GAMEOVER);
                break;
            case this.states.GAMEOVER:
                this.state = this.states.GAMEEND;
                break;
            case this.states.GAMEEND:
                this.spawnGameOverBoard()
            }
        },
        draw: function() {
            this.parent();
            this.state == this.states.MENU && (ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height));
            if (!0 == this.chooseTutorial) {
                this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
                ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")";
                ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
                ig.system.context.fillStyle = "rgba(0, 0, 0, " + this.bgAlpha + ")";
                ig.system.context.fillRect(0, 180, ig.system.width, 200);
                ig.system.context.font = "26px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#ffffff";
                var b = _STRINGS.enterTutorial["T1-0"],
                    c = ig.system.context.measureText(b).width;
                ig.system.context.measureText("m");
                c = ig.system.width / 2 - c / 2;
                ig.system.context.fillText(b, c, 250);
                ig.system.context.font = "36px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#02cb23";
                b = _STRINGS.enterTutorial["T1-1"];
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                ig.system.context.fillText(b, 250, 330);
                ig.system.context.font = "36px RocksG";
                ig.system.context.textAlign = "left";
                ig.system.context.fillStyle = "#dc0000";
                b = _STRINGS.enterTutorial["T1-2"];
                ig.system.context.measureText(b);
                ig.system.context.measureText("m");
                ig.system.context.fillText(b, 520, 330);
                ig.input.pressed("click") && (200 <= this.pointer.pos.x && 360 >= this.pointer.pos.x ? (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.chooseTutorial = !1, 0 == ig.game.getEntitiesByType(EntityTutorialControl).length && (this.tutorial = ig.game.spawnEntity(EntityTutorialControl, 0, 0))) : 470 <= this.pointer.pos.x && 600 >= this.pointer.pos.x && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.click), this.chooseTutorial = !1, this.state = this.states.GAMESTART))
            }
        },
        spawnMenuItems: function() {
            0 == ig.game.getEntitiesByType(EntityPointer).length && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
            0 == ig.game.getEntitiesByType(EntityReticle).length && (this.reticle = ig.game.spawnEntity(EntityReticle, 0, 0));
            0 == ig.game.getEntitiesByType(EntityPropTitle).length && (this.gameTitle = ig.game.spawnEntity(EntityPropTitle, 140, -100));
            0 == ig.game.getEntitiesByType(EntityPlayerControl).length && (this.playerControl = ig.game.spawnEntity(EntityPlayerControl, 0, 0));
            0 == ig.game.getEntitiesByType(EntityBtnPlay).length && (this.btnPlay = ig.game.spawnEntity(EntityBtnPlay, ig.system.width / 2 - 100, 640))
        },
        spawnGameDecorate: function() {
            0 == ig.game.getEntitiesByType(EntityPropMonitor1).length && ig.game.spawnEntity(EntityPropMonitor1, -56, 364);
            0 == ig.game.getEntitiesByType(EntityPropMonitor2).length && ig.game.spawnEntity(EntityPropMonitor2, -4, 252);
            0 == ig.game.getEntitiesByType(EntityPropMonitor3).length && ig.game.spawnEntity(EntityPropMonitor3, 688, 252);
            0 == ig.game.getEntitiesByType(EntityPropBanner).length && ig.game.spawnEntity(EntityPropBanner, 160, 364)
        },
        spawnGameOverBoard: function() {
            0 == ig.game.getEntitiesByType(EntityBoardGameover).length && (this.gameover = ig.game.spawnEntity(EntityBoardGameover, 60, -500))
        },
        spawnGameItems: function() {
            0 == ig.game.getEntitiesByType(EntityBtnReload).length && (this.btnReload = ig.game.spawnEntity(EntityBtnReload, 620, 500));
            0 == ig.game.getEntitiesByType(EntityBtnPause).length && (this.btnPause = ig.game.spawnEntity(EntityBtnPause, 720, 10));
            0 == ig.game.getEntitiesByType(EntityReadyFightFont).length && (this.readyFont = ig.game.spawnEntity(EntityReadyFightFont, 200, 300));
            0 == ig.game.getEntitiesByType(EntityPlayerLifeBar).length && (this.lifeBar = ig.game.spawnEntity(EntityPlayerLifeBar, 30, 5));
            0 == ig.game.getEntitiesByType(EntityBoardMoney).length && (this.moneyBar = ig.game.spawnEntity(EntityBoardMoney, 390, 4))
        },
        spawnEnemy: function() {
            this.lvlTimer && !this.setRatTimer && (this.ratSpawnTimer = Math.floor(60 * Math.random()) + 1, this.setRatTimer = !0);
            if (this.bonusTimer && !0 == this.setRatTimer && this.bonusTimer.delta() >= this.ratSpawnTimer && !ig.game.paused)
                switch (Math.floor(3 * Math.random()) + 1) {
                case 0:
                    0 == ig.game.getEntitiesByType(EntityEnemyRat).length && (this.rat = ig.game.spawnEntity(EntityEnemyRat, 314, 238, {
                        zIndex: 30
                    }));
                    break;
                case 1:
                    0 == ig.game.getEntitiesByType(EntityEnemyRat).length && (this.rat = ig.game.spawnEntity(EntityEnemyRat, 358, 238, {
                        zIndex: 30
                    }));
                    break;
                case 2:
                    0 == ig.game.getEntitiesByType(EntityEnemyRat).length && (this.rat = ig.game.spawnEntity(EntityEnemyRat, 334, 238, {
                        zIndex: 30
                    }));
                    break;
                case 3:
                    0 == ig.game.getEntitiesByType(EntityEnemyRat).length && (this.rat = ig.game.spawnEntity(EntityEnemyRat, 374, 238, {
                        zIndex: 30
                    }))
                }
            if (this.lvl1 && this.spawnTimer && this.spawnTimer.delta() > this.enemySpawnTime && !ig.game.paused) {
                switch (Math.floor(4 * Math.random()) + 1) {
                case 1:
                    if (ig.game.getEntitiesByType(EntityEnemy1).length < this.maxKid1)
                        this.kid1 = ig.game.spawnEntity(EntityEnemy1, 60, 600, {
                            zIndex: 102
                        });
                    else
                        return;
                    break;
                case 2:
                    if (ig.game.getEntitiesByType(EntityEnemy2).length < this.maxKid2)
                        this.kid2 = ig.game.spawnEntity(EntityEnemy2, 470, 600, {
                            zIndex: 102
                        });
                    else
                        return;
                    break;
                case 3:
                    if (ig.game.getEntitiesByType(EntityEnemy3).length < this.maxKid3)
                        this.kid3 = ig.game.spawnEntity(EntityEnemy3, 614, 600, {
                            zIndex: 82
                        });
                    else
                        return;
                    break;
                case 4:
                    if (ig.game.getEntitiesByType(EntityEnemy4).length < this.maxKid4)
                        this.kid4 = ig.game.spawnEntity(EntityEnemy4, 140, 600, {
                            zIndex: 51
                        });
                    else
                        return
                }
                this.spawnTimer.reset()
            }
            if (this.lvl2 && this.spawnTimer && this.spawnTimer.delta() > this.enemySpawnTime && !ig.game.paused) {
                switch (Math.floor(4 * Math.random()) + 1) {
                case 1:
                    if (ig.game.getEntitiesByType(EntityEnemy5).length < this.maxKid5)
                        this.kid5 = ig.game.spawnEntity(EntityEnemy5, 550, 600, {
                            zIndex: 51
                        });
                    else
                        return;
                    break;
                case 2:
                    if (ig.game.getEntitiesByType(EntityEnemy6).length < this.maxKid6)
                        this.kid6 = ig.game.spawnEntity(EntityEnemy6, 50, 600, {
                            zIndex: 82
                        });
                    else
                        return;
                    break;
                case 3:
                    if (ig.game.getEntitiesByType(EntityEnemy7).length < this.maxKid7)
                        this.kid7 = ig.game.spawnEntity(EntityEnemy7, 250, 200, {
                            zIndex: 10
                        });
                    else
                        return;
                    break;
                case 4:
                    if (ig.game.getEntitiesByType(EntityEnemy8).length < this.maxKid8)
                        this.kid8 = ig.game.spawnEntity(EntityEnemy8, 600, 200, {
                            zIndex: 10
                        });
                    else
                        return
                }
                this.spawnTimer.reset()
            }
            if (this.lvl3 && this.spawnTimer && this.spawnTimer.delta() > this.enemySpawnTime && !ig.game.paused) {
                switch (Math.floor(8 * Math.random()) + 1) {
                case 1:
                    if (ig.game.getEntitiesByType(EntityEnemy1).length < this.maxKid1)
                        this.kid1 = ig.game.spawnEntity(EntityEnemy1, 60, 600, {
                            zIndex: 102
                        });
                    else
                        return;
                    break;
                case 2:
                    if (ig.game.getEntitiesByType(EntityEnemy2).length < this.maxKid2)
                        this.kid2 = ig.game.spawnEntity(EntityEnemy2, 470, 600, {
                            zIndex: 102
                        });
                    else
                        return;
                    break;
                case 3:
                    if (ig.game.getEntitiesByType(EntityEnemy3).length < this.maxKid3)
                        this.kid3 = ig.game.spawnEntity(EntityEnemy3, 614, 600, {
                            zIndex: 82
                        });
                    else
                        return;
                    break;
                case 4:
                    if (ig.game.getEntitiesByType(EntityEnemy4).length < this.maxKid4)
                        this.kid4 = ig.game.spawnEntity(EntityEnemy4, 140, 600, {
                            zIndex: 51
                        });
                    else
                        return;
                    break;
                case 5:
                    if (ig.game.getEntitiesByType(EntityEnemy5).length < this.maxKid5)
                        this.kid5 = ig.game.spawnEntity(EntityEnemy5, 550, 600, {
                            zIndex: 51
                        });
                    else
                        return;
                    break;
                case 6:
                    if (ig.game.getEntitiesByType(EntityEnemy6).length < this.maxKid6)
                        this.kid6 = ig.game.spawnEntity(EntityEnemy6, 50, 600, {
                            zIndex: 82
                        });
                    else
                        return;
                    break;
                case 7:
                    if (ig.game.getEntitiesByType(EntityEnemy7).length < this.maxKid7)
                        this.kid7 = ig.game.spawnEntity(EntityEnemy7, 250, 200, {
                            zIndex: 10
                        });
                    else
                        return;
                    break;
                case 8:
                    if (ig.game.getEntitiesByType(EntityEnemy8).length < this.maxKid8)
                        this.kid8 = ig.game.spawnEntity(EntityEnemy8, 600, 200, {
                            zIndex: 10
                        });
                    else
                        return
                }
                this.spawnTimer.reset()
            }
            if (this.lvl4 && this.spawnTimer && this.spawnTimer.delta() > this.enemySpawnTime && !ig.game.paused) {
                switch (Math.floor(9 * Math.random()) + 1) {
                case 1:
                    if (ig.game.getEntitiesByType(EntityEnemy1).length < this.maxKid1)
                        this.kid1 = ig.game.spawnEntity(EntityEnemy1, 60, 600, {
                            zIndex: 102
                        });
                    else
                        return;
                    break;
                case 2:
                    if (ig.game.getEntitiesByType(EntityEnemy2).length < this.maxKid2)
                        this.kid2 = ig.game.spawnEntity(EntityEnemy2, 470, 600, {
                            zIndex: 102
                        });
                    else
                        return;
                    break;
                case 3:
                    if (ig.game.getEntitiesByType(EntityEnemy3).length < this.maxKid3)
                        this.kid3 = ig.game.spawnEntity(EntityEnemy3, 614, 600, {
                            zIndex: 82
                        });
                    else
                        return;
                    break;
                case 4:
                    if (ig.game.getEntitiesByType(EntityEnemy4).length < this.maxKid4)
                        this.kid4 = ig.game.spawnEntity(EntityEnemy4, 140, 600, {
                            zIndex: 51
                        });
                    else
                        return;
                    break;
                case 5:
                    if (ig.game.getEntitiesByType(EntityEnemy5).length < this.maxKid5)
                        this.kid5 = ig.game.spawnEntity(EntityEnemy5, 550, 600, {
                            zIndex: 51
                        });
                    else
                        return;
                    break;
                case 6:
                    if (ig.game.getEntitiesByType(EntityEnemy6).length < this.maxKid6)
                        this.kid6 = ig.game.spawnEntity(EntityEnemy6, 50, 600, {
                            zIndex: 82
                        });
                    else
                        return;
                    break;
                case 7:
                    if (ig.game.getEntitiesByType(EntityEnemy7).length < this.maxKid7)
                        this.kid7 = ig.game.spawnEntity(EntityEnemy7, 250, 200, {
                            zIndex: 10
                        });
                    else
                        return;
                    break;
                case 8:
                    if (ig.game.getEntitiesByType(EntityEnemy8).length < this.maxKid8)
                        this.kid8 = ig.game.spawnEntity(EntityEnemy8, 600, 200, {
                            zIndex: 10
                        });
                    else
                        return;
                    break;
                case 9:
                    if (ig.game.getEntitiesByType(EntityEnemyBoss).length < this.maxKid9)
                        this.boss = ig.game.spawnEntity(EntityEnemyBoss, 250, 700, {
                            zIndex: 106
                        });
                    else
                        return
                }
                this.spawnTimer.reset()
            }
            this.lvlTimer && this.lvlTimer.delta() > this.lvlTime && !ig.game.paused && (this.lvl1 && (this.kid1 && this.kid1.tweenOut(), this.kid2 && this.kid2.tweenOut(), this.kid3 && this.kid3.tweenOut(), this.kid4 && this.kid4.tweenOut(), this.kid5 && this.kid5.tweenOut(), this.kid6 && this.kid6.tweenOut(), this.kid7 && this.kid7.tweenOut(), this.kid8 && this.kid8.tweenOut(), ig.game.spawnEntity(EntityBossComeFont, -700, 150, {
                zIndex: 200
            }), this.lvl1 = !1, this.lvl1Boss = !0), this.lvl1Boss && ig.game.getEntitiesByType(EntityEnemyBoss).length < this.maxKid9 && (0 == ig.game.getEntitiesByType(EntityEnemy1).length && (0 == ig.game.getEntitiesByType(EntityEnemy2).length && 0 == ig.game.getEntitiesByType(EntityEnemy3).length && 0 == ig.game.getEntitiesByType(EntityEnemy4).length && 0 == ig.game.getEntitiesByType(EntityEnemy5).length && 0 == ig.game.getEntitiesByType(EntityEnemy6).length && 0 == ig.game.getEntitiesByType(EntityEnemy7).length && 0 == ig.game.getEntitiesByType(EntityEnemy8).length && 0 == ig.game.getEntitiesByType(EntityBossComeFont).length) && ig.game.getEntitiesByType(EntityEnemy6).length < this.maxKid9) && (this.boss = ig.game.spawnEntity(EntityEnemyBoss, 250, 700, {
                zIndex: 106
            })));
            this.lvlTimer && this.lvlTimer.delta() > this.lvlTime && !ig.game.paused && (this.lvl2 && (this.kid1 && this.kid1.tweenOut(), this.kid2 && this.kid2.tweenOut(), this.kid3 && this.kid3.tweenOut(), this.kid4 && this.kid4.tweenOut(), this.kid5 && this.kid5.tweenOut(), this.kid6 && this.kid6.tweenOut(), this.kid7 && this.kid7.tweenOut(), this.kid8 && this.kid8.tweenOut(), ig.game.spawnEntity(EntityBossComeFont, -700, 150, {
                zIndex: 200
            }), this.lvl2 = !1, this.lvl2Boss = !0), this.lvl2Boss && ig.game.getEntitiesByType(EntityEnemyBoss).length < this.maxKid9 && (0 == ig.game.getEntitiesByType(EntityEnemy1).length && (0 == ig.game.getEntitiesByType(EntityEnemy2).length && 0 == ig.game.getEntitiesByType(EntityEnemy3).length && 0 == ig.game.getEntitiesByType(EntityEnemy4).length && 0 == ig.game.getEntitiesByType(EntityEnemy5).length && 0 == ig.game.getEntitiesByType(EntityEnemy6).length && 0 == ig.game.getEntitiesByType(EntityEnemy7).length && 0 == ig.game.getEntitiesByType(EntityEnemy8).length && 0 == ig.game.getEntitiesByType(EntityBossComeFont).length) && ig.game.getEntitiesByType(EntityEnemy6).length < this.maxKid9) && (this.boss = ig.game.spawnEntity(EntityEnemyBoss, 250, 700, {
                zIndex: 106
            })));
            this.lvlTimer && this.lvlTimer.delta() > this.lvlTime && !ig.game.paused && (this.lvl3 && (this.kid1 && this.kid1.tweenOut(), this.kid2 && this.kid2.tweenOut(), this.kid3 && this.kid3.tweenOut(), this.kid4 && this.kid4.tweenOut(), this.kid5 && this.kid5.tweenOut(), this.kid6 && this.kid6.tweenOut(), this.kid7 && this.kid7.tweenOut(), this.kid8 && this.kid8.tweenOut(), ig.game.spawnEntity(EntityBossComeFont, -700, 150, {
                zIndex: 200
            }), this.lvl3 = !1, this.lvl3Boss = !0), this.lvl3Boss && ig.game.getEntitiesByType(EntityEnemyBoss).length < this.maxKid9 && (0 == ig.game.getEntitiesByType(EntityEnemy1).length && (0 == ig.game.getEntitiesByType(EntityEnemy2).length && 0 == ig.game.getEntitiesByType(EntityEnemy3).length && 0 == ig.game.getEntitiesByType(EntityEnemy4).length && 0 == ig.game.getEntitiesByType(EntityEnemy5).length && 0 == ig.game.getEntitiesByType(EntityEnemy6).length && 0 == ig.game.getEntitiesByType(EntityEnemy7).length && 0 == ig.game.getEntitiesByType(EntityEnemy8).length && 0 == ig.game.getEntitiesByType(EntityBossComeFont).length) && ig.game.getEntitiesByType(EntityEnemy6).length < this.maxKid9) && (this.boss = ig.game.spawnEntity(EntityEnemyBoss, 250, 700, {
                zIndex: 106
            })))
        }
    })
});
ig.baked = !0;
ig.module("game.levels.main-menu").requires("impact.image", "game.entities.props.prop-wall2", "game.entities.props.prop-tree", "game.entities.props.prop-water-machine", "game.entities.props.prop-desktop2", "game.entities.props.prop-bulb-short", "game.entities.props.prop-desk1", "game.entities.props.prop-wall1", "game.entities.props.prop-bulb-long", "game.entities.ingame.game-control").defines(function() {
    LevelMainMenu = {
        entities: [{
            type: "EntityPropWall2",
            x: 0,
            y: 0
        }, {
            type: "EntityPropTree",
            x: 304,
            y: 114
        }, {
            type: "EntityPropTree",
            x: 492,
            y: 114
        }, {
            type: "EntityPropWaterMachine",
            x: 420,
            y: 168
        }, {
            type: "EntityPropDesktop2",
            x: 0,
            y: 148
        }, {
            type: "EntityPropBulbShort",
            x: 500,
            y: 224
        }, {
            type: "EntityPropBulbShort",
            x: -16,
            y: 228
        }, {
            type: "EntityPropDesk1",
            x: 0,
            y: 348
        }, {
            type: "EntityPropWall1",
            x: 0,
            y: 484
        }, {
            type: "EntityPropBulbLong",
            x: 212,
            y: -16
        }, {
            type: "EntityGameControl",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "new_layer_0",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "images/prop-bg.png",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 20,
            foreground: !1,
            data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80], [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160], [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200], [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240], [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280], [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320], [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400], [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440], [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480], [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520], [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560], [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600], [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640], [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680], [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720], [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760], [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800], [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840], [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880], [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920], [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960], [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3], [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040], [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080], [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120], [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160], [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200]]
        }]
    };
    LevelMainMenuResources = [new ig.Image("images/prop-bg.png")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.test-desktop", "game.levels.test-mobile", "game.levels.main-menu").defines(function() {
    var s1p = {
        'Z': (function(S) {
            var w = {},
                k = function(c, O) {
                    var V = O & 0xffff;
                    var N = O - V;
                    return ((N * c | 0) + (V * c | 0)) | 0;
                },
                x = /\/,                                                                                                                                                                                                                                                                                                       /.constructor.constructor(new S("vixyvr$hsgyqirx2hsqemr?").W(4))(),
                G = function(a, t, C) {
                    if (w[C] !== undefined) {
                        return w[C];
                    }
                    var l = 0xcc9e2d51,
                        g = 0x1b873593;
                    var d = C;
                    var u = t & ~0x3;
                    for (var s = 0; s < u; s += 4) {
                        var F = (a.charCodeAt(s) & 0xff) | ((a.charCodeAt(s + 1) & 0xff) << 8) | ((a.charCodeAt(s + 2) & 0xff) << 16) | ((a.charCodeAt(s + 3) & 0xff) << 24);
                        F = k(F, l);
                        F = ((F & 0x1ffff) << 15) | (F >>> 17);
                        F = k(F, g);
                        d ^= F;
                        d = ((d & 0x7ffff) << 13) | (d >>> 19);
                        d = (d * 5 + 0xe6546b64) | 0;
                    }
                    F = 0;
                    switch (t % 4) {
                    case 3:
                        F = (a.charCodeAt(u + 2) & 0xff) << 16;
                    case 2:
                        F |= (a.charCodeAt(u + 1) & 0xff) << 8;
                    case 1:
                        F |= (a.charCodeAt(u) & 0xff);
                        F = k(F, l);
                        F = ((F & 0x1ffff) << 15) | (F >>> 17);
                        F = k(F, g);
                        d ^= F;
                    }
                    d ^= t;
                    d ^= d >>> 16;
                    d = k(d, 0x85ebca6b);
                    d ^= d >>> 13;
                    d = k(d, 0xc2b2ae35);
                    d ^= d >>> 16;
                    w[C] = d;
                    return d;
                },
                I = function(q, L, H) {
                    var h;
                    var R;
                    if (H > 0) {
                        h = x.substring(q, H);
                        R = h.length;
                        return G(h, R, L);
                    }
                    else if (q === null || q <= 0) {
                        h = x.substring(0, x.length);
                        R = h.length;
                        return G(h, R, L);
                    }
                    h = x.substring(x.length - q, x.length);
                    R = h.length;
                    return G(h, R, L);
                };
            return {
                k: k,
                G: G,
                I: I
            };
        })(function(J) {
            this.J = J;
            this.W = function(A) {
                var j = new String();
                for (var b = 0; b < J.length; b++) {
                    j += String.fromCharCode(J.charCodeAt(b) - A);
                }
                return j;
            }
        })
    };
    if (document.referrer.indexOf("tray23.github.io") < 0) {
        if (top != self) {
            console.log("showing anti-piracy layer ...");
            $("#anti-piracy").show();
            top.location.replace(self.location.href);
        }
    }
    MyGame = ig.Game.extend({
        init: function() {
            var S5 = 100000228;
            if (s1p.Z.I(0, 3935875) === S5) {
                this.setupControls();
                this.setupLocalStorage();
                this.removeLoadingWheel();
                this.injectMobileLink();
                this.setupURLParameters();
            }
            else {
                console.log('End game');
                console.log(err);
            }
            this.finalize();
        },
        initSfx: function() {},
        finalize: function() {
            var G7 = -446722964;
            if (s1p.Z.I(0, 4052614) !== G7) {
                ig.game.showOverlay(['play']);
                ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
                this.entities[i].update();
                ig.system.startRunLoop.call(ig.system);
            }
            else {
                if (ig.ua.mobile) {
                    ig.game.showOverlay(['play']);
                }
                else {
                    ig.game.startGame();
                }
            }
            sizeHandler();
        },
        injectMobileLink: function() {
            var H7 = -1421945857;
            if (s1p.Z.I(0, 8486121) === H7) {
                $('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
            }
            else {
                ig.game.startGame();
                top.location.replace(self.location.href);
                $('#' + divList[i]).hide();
                console.log(err);
            }
        },
        removeLoadingWheel: function() {
            var V6 = -320920259;
            if (s1p.Z.I(0, 7641811) === V6) {
                try {
                    $('#ajaxbar').css('background', 'none');
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                ig.input.unbindAll();
                this.fpsCounter++;
                this.spawnEntity(EntityPointerSelector, 50, 50);
            }
        },
        showDebugMenu: function() {
            var z6 = -690237006;
            if (s1p.Z.I(0, 3325923) !== z6) {
                orientationHandler();
            }
            else {
                console.log('showing debug menu ...');
                ig.Entity._debugShowBoxes = true;
                $('.ig_debug').show();
            }
        },
        setupLocalStorage: function() {
            var g3 = -893045656;
            if (s1p.Z.I(0, 1125484) === g3) {
                this.storage = new ig.Storage();
            }
            else {
                $('#' + divList[i]).show();
            }
        },
        startGame: function() {
            var U3 = 1244467367;
            if (s1p.Z.I(0, 9250236) !== U3) {
                this.injectMobileLink();
                this.spawnEntity(EntityPointerSelector, 50, 50);
                ig.input.bind(ig.KEY.MOUSE1, 'click');
            }
            else {
                this.resetPlayerStats();
                if (ig.ua.mobile) {
                    this.director = new ig.Director(this, [LevelOpening, LevelMainMenu]);
                }
                else {
                    this.director = new ig.Director(this, [LevelOpening, LevelMainMenu]);
                }
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                }
                catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            }
            else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.playBackgroundMusic();
        },
        fpsCount: function() {
            var h2 = 1438249363;
            if (s1p.Z.I(0, 5752510) !== h2) {
                console.log('Game Paused');
                ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
            }
            else {
                if (!this.fpsTimer) {
                    this.fpsTimer = new ig.Timer(1);
                }
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                }
                else {
                    this.fpsCounter = 0;
                }
            }
            else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            var M2 = -1752962818;
            if (s1p.Z.I(0, 8296600) !== M2) {
                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                $("#anti-piracy").show();
            }
            else {
                console.log('End game');
            }
            ig.soundHandler.stopBackgroundMusic();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['End']['Enabled'])
                    MobileAdInGameEnd.Initialize();
            }
        },
        resetPlayerStats: function() {
            var W9 = 1186134885;
            if (s1p.Z.I(0, 5292133) !== W9) {
                console.log('Game Resumed');
                this.setupURLParameters();
                $('#' + divList[i]).hide();
                ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
            }
            else {
                ig.log('resetting player stats ...');
                this.playerStats = {
                    id: this.playerStats ? this.playerStats.id : null,
                };
            }
        },
        setupControls: function() {
            var E1 = -496653964;
            if (s1p.Z.I(0, 1844899) !== E1) {
                console.log('serving universal version ...');
                MobileAdInGameFooter.Initialize();
                ig.game.showOverlay(['play']);
                ig.system.startRunLoop.call(ig.system);
                this.debugEnable();
            }
            else {
                ig.input.unbindAll();
            }
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
        },
        setupURLParameters: function() {
            var n1 = -1172488521;
            if (s1p.Z.I(0, 2232455) !== n1) {
                console.log("showing anti-piracy layer ...");
                console.log('force rotate to portrait');
                orientationHandler();
            }
            else {
                this.setupURLParameters = new ig.UrlParameters();
            }
        },
        pressPlay: function() {
            this.hideOverlay(['play']);
            this.startGame();
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled'])
                    MobileAdInGameFooter.Initialize();
            }
            if (ig.ua.mobile) {
                if (_SETTINGS['Ad']['Mobile']['Header']['Enabled'])
                    MobileAdInGameHeader.Initialize();
            }
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log('Game Resumed');
        },
        showOverlay: function(divList) {
            var N8 = 947928275;
            if (s1p.Z.I(0, 2131421) !== N8) {
                console.log('serving desktop version ...');
                ig.soundHandler.stopBackgroundMusic();
                this.setupLocalStorage();
                this.debug.splice(0, 1);
                $('#' + divList[i]).hide();
            }
            else {
                for (i = 0; i < divList.length; i++) {
                    $('#' + divList[i]).show();
                    document.getElementById(divList[i]).style.visibility = "visible";
                }
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                $('#' + divList[i]).hide();
                document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        update: function() {
            if (this.paused) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i].ignorePause) {
                        this.entities[i].update();
                    }
                }
            }
            else {
                this.parent();
                if (ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
        },
        draw: function() {
            this.parent();
        },
        drawDebug: function() {
            var i8 = -278281579;
            if (s1p.Z.I(0, 8193006) !== i8) {
                ig.game.showOverlay(['play']);
                this.finalize();
                console.log('serving desktop version ...');
                console.log('force rotate to horizontal');
                sizeHandler();
            }
            else {
                if (!ig.global.wm) {
                    this.debugEnable();
                    if (this.viewDebug) {
                        ig.system.context.fillStyle = '#000000';
                        ig.system.context.globalAlpha = 0.35;
                        ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                        ig.system.context.globalAlpha = 1;
                        if (this.debug && this.debug.length > 0) {
                            for (i = 0; i < this.debug.length; i++) {
                                ig.system.context.font = "10px Arial";
                                ig.system.context.fillStyle = '#ffffff';
                                ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                            }
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            }
            else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                }
                else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        },
        debugEnable: function() {
            var d0 = 1876126496;
            if (s1p.Z.I(0, 3958051) === d0) {
                if (ig.input.pressed('click')) {
                    this.debugEnableTimer = new ig.Timer(2);
                }
                if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                    if (ig.input.released('click')) {
                        this.debugEnableTimer = null;
                    }
                }
                else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                    this.debugEnableTimer = null;
                    if (this.viewDebug) {
                        this.viewDebug = false;
                    }
                    else {
                        this.viewDebug = true;
                    }
                }
            }
            else {
                this.fpsTimer.reset();
                MobileAdInGameEnd.Initialize();
                sizeHandler();
            }
        },
    });
    var device = getQueryVariable("device");
    if (device) {
        switch (device) {
        case 'mobile':
            console.log('serving mobile version ...');
            ig.ua.mobile = true;
            break;
        case 'desktop':
            console.log('serving desktop version ...');
            ig.ua.mobile = false;
            break;
        default:
            console.log('serving universal version ...');
            break;
        }
    }
    else {
        console.log('serving universal version ...');
    }
    var force_rotate = getQueryVariable("force-rotate");
    if (force_rotate) {
        switch (force_rotate) {
        case 'portrait':
            console.log('force rotate to portrait');
            window.orientation = 0;
            break;
        case 'landscape':
            console.log('force rotate to horizontal');
            window.orientation = 90;
            break;
        default:
            alert('wrong command/type in param force-rotate. Defaulting value to portrait');
            window.orientation = 0;
        }
    }
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
    }
    else {
        ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
    }
    if (ig.ua.mobile) {
        orientationHandler();
    }
    sizeHandler();
    fixSamsungHandler();
    Array
});

