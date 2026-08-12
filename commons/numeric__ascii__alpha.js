{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "numeric",
    _v3 = "ascii",
    _v4 = "alpha",
    _v5 = "asciinumeric",
    _v6 = "alphanumeric",
    _v7 = "domain",
    _v8 = "emoji",
    _v9 = "whitespace";
  function _v10(_v0, _v1, _v2) {
    for (let _v0 in _v1[_v2] && (_v1[_v5] = !0, _v1[_v6] = !0), _v1[_v3] && (_v1[_v5] = !0, _v1[_v4] = !0), _v1[_v5] && (_v1[_v6] = !0), _v1[_v4] && (_v1[_v6] = !0), _v1[_v6] && (_v1[_v7] = !0), _v1[_v8] && (_v1[_v7] = !0), _v1) {
      let _v0 = (_v0 in _v2 || (_v2[_v0] = []), _v2[_v0]);
      0 > _v0.indexOf(_v0) && _v0.push(_v0);
    }
  }
  function _v11(_v0 = null) {
    this.j = {}, this.jr = [], this.jd = null, this.t = _v0;
  }
  _v11.groups = {}, _v11.prototype = {
    accepts() {
      return !!this.t;
    },
    go(_v0) {
      let _v1 = this.j[_v0];
      if (_v1) return _v1;
      for (let _v0 = 0; _v0 < this.jr.length; _v0++) {
        let _v0 = this.jr[_v0][0],
          _v1 = this.jr[_v0][1];
        if (_v1 && _v0.test(_v0)) return _v1;
      }
      return this.jd;
    },
    has(_v0, _v1 = !1) {
      return _v1 ? _v0 in this.j : !!this.go(_v0);
    },
    ta(_v0, _v1, _v2, _v3) {
      for (let _v0 = 0; _v0 < _v0.length; _v0++) this.tt(_v0[_v0], _v1, _v2, _v3);
    },
    tr(_v0, _v1, _v2, _v3) {
      let _v4;
      return _v3 = _v3 || _v11.groups, _v1 && _v1.j ? _v4 = _v1 : (_v4 = new _v11(_v1), _v2 && _v3 && _v10(_v1, _v2, _v3)), this.jr.push([_v0, _v4]), _v4;
    },
    ts(_v0, _v1, _v2, _v3) {
      let _v4 = this,
        _v5 = _v0.length;
      if (!_v5) return _v4;
      for (let _v0 = 0; _v0 < _v5 - 1; _v0++) _v4 = _v4.tt(_v0[_v0]);
      return _v4.tt(_v0[_v5 - 1], _v1, _v2, _v3);
    },
    tt(_v0, _v1, _v2, _v3) {
      if (_v3 = _v3 || _v11.groups, _v1 && _v1.j) return this.j[_v0] = _v1, _v1;
      let _v4,
        _v5 = this.go(_v0);
      return _v5 ? (Object.assign((_v4 = new _v11()).j, _v5.j), _v4.jr.push.apply(_v4.jr, _v5.jr), _v4.jd = _v5.jd, _v4.t = _v5.t) : _v4 = new _v11(), _v1 && (_v3 && (_v4.t && "string" == typeof _v4.t ? _v10(_v1, Object.assign(function (_v0, _v1) {
        let _v2 = {};
        for (let _v0 in _v1) _v1[_v0].indexOf(_v0) >= 0 && (_v2[_v0] = !0);
        return _v2;
      }(_v4.t, _v3), _v2), _v3) : _v2 && _v10(_v1, _v2, _v3)), _v4.t = _v1), this.j[_v0] = _v4, _v4;
    }
  };
  let _v12 = (_v0, _v1, _v2, _v3, _v4) => _v0.ta(_v1, _v2, _v3, _v4),
    _v13 = (_v0, _v1, _v2, _v3, _v4) => _v0.tr(_v1, _v2, _v3, _v4),
    _v14 = (_v0, _v1, _v2, _v3, _v4) => _v0.ts(_v1, _v2, _v3, _v4),
    _v15 = (_v0, _v1, _v2, _v3, _v4) => _v0.tt(_v1, _v2, _v3, _v4),
    _v16 = "WORD",
    _v17 = "UWORD",
    _v18 = "ASCIINUMERICAL",
    _v19 = "ALPHANUMERICAL",
    _v20 = "LOCALHOST",
    _v21 = "UTLD",
    _v22 = "SCHEME",
    _v23 = "SLASH_SCHEME",
    _v24 = "OPENBRACE",
    _v25 = "CLOSEBRACE",
    _v26 = "OPENBRACKET",
    _v27 = "CLOSEBRACKET",
    _v28 = "OPENPAREN",
    _v29 = "CLOSEPAREN",
    _v30 = "OPENANGLEBRACKET",
    _v31 = "CLOSEANGLEBRACKET",
    _v32 = "FULLWIDTHLEFTPAREN",
    _v33 = "FULLWIDTHRIGHTPAREN",
    _v34 = "LEFTCORNERBRACKET",
    _v35 = "RIGHTCORNERBRACKET",
    _v36 = "LEFTWHITECORNERBRACKET",
    _v37 = "RIGHTWHITECORNERBRACKET",
    _v38 = "FULLWIDTHLESSTHAN",
    _v39 = "FULLWIDTHGREATERTHAN",
    _v40 = "AMPERSAND",
    _v41 = "APOSTROPHE",
    _v42 = "ASTERISK",
    _v43 = "BACKSLASH",
    _v44 = "BACKTICK",
    _v45 = "CARET",
    _v46 = "COLON",
    _v47 = "COMMA",
    _v48 = "DOLLAR",
    _v49 = "EQUALS",
    _v50 = "EXCLAMATION",
    _v51 = "HYPHEN",
    _v52 = "PERCENT",
    _v53 = "PIPE",
    _v54 = "PLUS",
    _v55 = "POUND",
    _v56 = "QUERY",
    _v57 = "QUOTE",
    _v58 = "FULLWIDTHMIDDLEDOT",
    _v59 = "SEMI",
    _v60 = "SLASH",
    _v61 = "TILDE",
    _v62 = "UNDERSCORE",
    _v63 = "EMOJI";
  var _v64 = Object.freeze({
    __proto__: null,
    ALPHANUMERICAL: _v19,
    AMPERSAND: _v40,
    APOSTROPHE: _v41,
    ASCIINUMERICAL: _v18,
    ASTERISK: _v42,
    AT: "AT",
    BACKSLASH: _v43,
    BACKTICK: _v44,
    CARET: _v45,
    CLOSEANGLEBRACKET: _v31,
    CLOSEBRACE: _v25,
    CLOSEBRACKET: _v27,
    CLOSEPAREN: _v29,
    COLON: _v46,
    COMMA: _v47,
    DOLLAR: _v48,
    DOT: "DOT",
    EMOJI: _v63,
    EQUALS: _v49,
    EXCLAMATION: _v50,
    FULLWIDTHGREATERTHAN: _v39,
    FULLWIDTHLEFTPAREN: _v32,
    FULLWIDTHLESSTHAN: _v38,
    FULLWIDTHMIDDLEDOT: _v58,
    FULLWIDTHRIGHTPAREN: _v33,
    HYPHEN: _v51,
    LEFTCORNERBRACKET: _v34,
    LEFTWHITECORNERBRACKET: _v36,
    LOCALHOST: _v20,
    NL: "NL",
    NUM: "NUM",
    OPENANGLEBRACKET: _v30,
    OPENBRACE: _v24,
    OPENBRACKET: _v26,
    OPENPAREN: _v28,
    PERCENT: _v52,
    PIPE: _v53,
    PLUS: _v54,
    POUND: _v55,
    QUERY: _v56,
    QUOTE: _v57,
    RIGHTCORNERBRACKET: _v35,
    RIGHTWHITECORNERBRACKET: _v37,
    SCHEME: _v22,
    SEMI: _v59,
    SLASH: _v60,
    SLASH_SCHEME: _v23,
    SYM: "SYM",
    TILDE: _v61,
    TLD: "TLD",
    UNDERSCORE: _v62,
    UTLD: _v21,
    UWORD: _v17,
    WORD: _v16,
    WS: "WS"
  });
  let _v65 = /[a-z]/,
    _v66 = /\p{L}/u,
    _v67 = /\p{Emoji}/u,
    _v68 = /\d/,
    _v69 = /\s/,
    _v70 = null,
    _v71 = null;
  function _v72(_v0, _v1) {
    let _v2 = function (_v0) {
        let _v1 = [],
          _v2 = _v0.length,
          _v3 = 0;
        for (; _v3 < _v2;) {
          let _v0,
            _v1 = _v0.charCodeAt(_v3),
            _v2 = _v1 < 0 || _v1 > 0 || _v3 + 1 === _v2 || (_v0 = _v0.charCodeAt(_v3 + 1)) < 0 || _v0 > 0 ? _v0[_v3] : _v0.slice(_v3, _v3 + 2);
          _v1.push(_v2), _v3 += _v2.length;
        }
        return _v1;
      }(_v1.replace(/[A-Z]/g, _v0 => _v0.toLowerCase())),
      _v3 = _v2.length,
      _v4 = [],
      _v5 = 0,
      _v6 = 0;
    for (; _v6 < _v3;) {
      let _v0 = _v0,
        _v1 = null,
        _v2 = 0,
        _v3 = null,
        _v4 = -1,
        _v5 = -1;
      for (; _v6 < _v3 && (_v1 = _v0.go(_v2[_v6]));) (_v0 = _v1).accepts() ? (_v4 = 0, _v5 = 0, _v3 = _v0) : _v4 >= 0 && (_v4 += _v2[_v6].length, _v5++), _v2 += _v2[_v6].length, _v5 += _v2[_v6].length, _v6++;
      _v5 -= _v4, _v6 -= _v5, _v2 -= _v4, _v4.push({
        t: _v3.t,
        v: _v1.slice(_v5 - _v2, _v5),
        s: _v5 - _v2,
        e: _v5
      });
    }
    return _v4;
  }
  function _v73(_v0, _v1, _v2, _v3, _v4) {
    let _v5,
      _v6 = _v1.length;
    for (let _v0 = 0; _v0 < _v6 - 1; _v0++) {
      let _v0 = _v1[_v0];
      _v0.j[_v0] ? _v5 = _v0.j[_v0] : ((_v5 = new _v11(_v3)).jr = _v4.slice(), _v0.j[_v0] = _v5), _v0 = _v5;
    }
    return (_v5 = new _v11(_v2)).jr = _v4.slice(), _v0.j[_v1[_v6 - 1]] = _v5, _v5;
  }
  function _v74(_v0) {
    let _v1 = [],
      _v2 = [],
      _v3 = 0;
    for (; _v3 < _v0.length;) {
      let _v0 = 0;
      for (; "0123456789".indexOf(_v0[_v3 + _v0]) >= 0;) _v0++;
      if (_v0 > 0) {
        _v1.push(_v2.join(""));
        for (let _v0 = parseInt(_v0.substring(_v3, _v3 + _v0), 10); _v0 > 0; _v0--) _v2.pop();
        _v3 += _v0;
      } else _v2.push(_v0[_v3]), _v3++;
    }
    return _v1;
  }
  let _v75 = {
    defaultProtocol: "http",
    events: null,
    format: _v77,
    formatHref: _v77,
    nl2br: !1,
    tagName: "a",
    target: null,
    rel: null,
    validate: !0,
    truncate: 1 / 0,
    className: null,
    attributes: null,
    ignoreTags: [],
    render: null
  };
  function _v76(_v0, _v1 = null) {
    let _v2 = Object.assign({}, _v75);
    _v0 && (_v2 = Object.assign(_v2, _v0 instanceof _v76 ? _v0.o : _v0));
    let _v3 = _v2.ignoreTags,
      _v4 = [];
    for (let _v0 = 0; _v0 < _v3.length; _v0++) _v4.push(_v3[_v0].toUpperCase());
    this.o = _v2, _v1 && (this.defaultRender = _v1), this.ignoreTags = _v4;
  }
  function _v77(_v0) {
    return _v0;
  }
  function _v78(_v0, _v1) {
    this.t = "token", this.v = _v0, this.tk = _v1;
  }
  function _v79(_v0, _v1) {
    class _v2 extends _v78 {
      constructor(_v0, _v1) {
        super(_v0, _v1), this.t = _v0;
      }
    }
    for (let _v0 in _v1) _v2.prototype[_v0] = _v1[_v0];
    return _v2.t = _v0, _v2;
  }
  _v76.prototype = {
    o: _v75,
    ignoreTags: [],
    defaultRender: _v0 => _v0,
    check(_v0) {
      return this.get("validate", _v0.toString(), _v0);
    },
    get(_v0, _v1, _v2) {
      let _v3 = null != _v1,
        _v4 = this.o[_v0];
      return _v4 && ("object" == typeof _v4 ? "function" == typeof (_v4 = _v2.t in _v4 ? _v4[_v2.t] : _v75[_v0]) && _v3 && (_v4 = _v4(_v1, _v2)) : "function" == typeof _v4 && _v3 && (_v4 = _v4(_v1, _v2.t, _v2))), _v4;
    },
    getObj(_v0, _v1, _v2) {
      let _v3 = this.o[_v0];
      return "function" == typeof _v3 && null != _v1 && (_v3 = _v3(_v1, _v2.t, _v2)), _v3;
    },
    render(_v0) {
      let _v1 = _v0.render(this);
      return (this.get("render", null, _v0) || this.defaultRender)(_v1, _v0.t, _v0);
    }
  }, _v78.prototype = {
    isLink: !1,
    toString() {
      return this.v;
    },
    toHref(_v0) {
      return this.toString();
    },
    toFormattedString(_v0) {
      let _v1 = this.toString(),
        _v2 = _v0.get("truncate", _v1, this),
        _v3 = _v0.get("format", _v1, this);
      return _v2 && _v3.length > _v2 ? _v3.substring(0, _v2) + "…" : _v3;
    },
    toFormattedHref(_v0) {
      return _v0.get("formatHref", this.toHref(_v0.get("defaultProtocol")), this);
    },
    startIndex() {
      return this.tk[0].s;
    },
    endIndex() {
      return this.tk[this.tk.length - 1].e;
    },
    toObject(_v0 = _v75.defaultProtocol) {
      return {
        type: this.t,
        value: this.toString(),
        isLink: this.isLink,
        href: this.toHref(_v0),
        start: this.startIndex(),
        end: this.endIndex()
      };
    },
    toFormattedObject(_v0) {
      return {
        type: this.t,
        value: this.toFormattedString(_v0),
        isLink: this.isLink,
        href: this.toFormattedHref(_v0),
        start: this.startIndex(),
        end: this.endIndex()
      };
    },
    validate(_v0) {
      return _v0.get("validate", this.toString(), this);
    },
    render(_v0) {
      let _v1 = this.toHref(_v0.get("defaultProtocol")),
        _v2 = _v0.get("formatHref", _v1, this),
        _v3 = _v0.get("tagName", _v1, this),
        _v4 = this.toFormattedString(_v0),
        _v5 = {},
        _v6 = _v0.get("className", _v1, this),
        _v7 = _v0.get("target", _v1, this),
        _v8 = _v0.get("rel", _v1, this),
        _v9 = _v0.getObj("attributes", _v1, this),
        _v10 = _v0.getObj("events", _v1, this);
      return _v5.href = _v2, _v6 && (_v5.class = _v6), _v7 && (_v5.target = _v7), _v8 && (_v5.rel = _v8), _v9 && Object.assign(_v5, _v9), {
        tagName: _v3,
        attributes: _v5,
        content: _v4,
        eventListeners: _v10
      };
    }
  };
  let _v80 = _v79("email", {
      isLink: !0,
      toHref() {
        return "mailto:" + this.toString();
      }
    }),
    _v81 = _v79("text"),
    _v82 = _v79("nl"),
    _v83 = _v79("url", {
      isLink: !0,
      toHref(_v0 = _v75.defaultProtocol) {
        return this.hasProtocol() ? this.v : `${_v0}://${this.v}`;
      },
      hasProtocol() {
        let _v0 = this.tk;
        return _v0.length >= 2 && _v0[0].t !== _v20 && _v0[1].t === _v46;
      }
    }),
    _v84 = _v0 => new _v11(_v0);
  function _v85(_v0, _v1, _v2) {
    let _v3 = _v2[0].s,
      _v4 = _v2[_v2.length - 1].e;
    return new _v0(_v1.slice(_v3, _v4), _v2);
  }
  let _v86 = "u" > typeof console && console && console.warn || (() => {}),
    _v87 = {
      scanner: null,
      parser: null,
      tokenQueue: [],
      pluginQueue: [],
      customSchemes: [],
      initialized: !1
    };
  function _v88(_v0, _v1 = !1) {
    if (_v87.initialized && _v86(`linkifyjs: already initialized - will not register custom scheme "${_v0}" until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(_v0)) throw Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
    _v87.customSchemes.push([_v0, _v1]);
  }
  function _v89(_v0) {
    return _v87.initialized || function () {
      _v87.scanner = function (_v0 = []) {
        let _v1 = {};
        _v11.groups = _v1;
        let _v2 = new _v11();
        null == _v70 && (_v70 = _v74("aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2")), null == _v71 && (_v71 = _v74("ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2")), _v15(_v2, "'", _v41), _v15(_v2, "{", _v24), _v15(_v2, "}", _v25), _v15(_v2, "[", _v26), _v15(_v2, "]", _v27), _v15(_v2, "(", _v28), _v15(_v2, ")", _v29), _v15(_v2, "<", _v30), _v15(_v2, ">", _v31), _v15(_v2, "（", _v32), _v15(_v2, "）", _v33), _v15(_v2, "「", _v34), _v15(_v2, "」", _v35), _v15(_v2, "『", _v36), _v15(_v2, "』", _v37), _v15(_v2, "＜", _v38), _v15(_v2, "＞", _v39), _v15(_v2, "&", _v40), _v15(_v2, "*", _v42), _v15(_v2, "@", "AT"), _v15(_v2, "`", _v44), _v15(_v2, "^", _v45), _v15(_v2, ":", _v46), _v15(_v2, ",", _v47), _v15(_v2, "$", _v48), _v15(_v2, ".", "DOT"), _v15(_v2, "=", _v49), _v15(_v2, "!", _v50), _v15(_v2, "-", _v51), _v15(_v2, "%", _v52), _v15(_v2, "|", _v53), _v15(_v2, "+", _v54), _v15(_v2, "#", _v55), _v15(_v2, "?", _v56), _v15(_v2, '"', _v57), _v15(_v2, "/", _v60), _v15(_v2, ";", _v59), _v15(_v2, "~", _v61), _v15(_v2, "_", _v62), _v15(_v2, "\\", _v43), _v15(_v2, "・", _v58);
        let _v3 = _v13(_v2, _v68, "NUM", {
          [_v2]: !0
        });
        _v13(_v3, _v68, _v3);
        let _v4 = _v13(_v3, _v65, _v18, {
            [_v5]: !0
          }),
          _v5 = _v13(_v3, _v66, _v19, {
            [_v6]: !0
          }),
          _v6 = _v13(_v2, _v65, _v16, {
            [_v3]: !0
          });
        _v13(_v6, _v68, _v4), _v13(_v6, _v65, _v6), _v13(_v4, _v68, _v4), _v13(_v4, _v65, _v4);
        let _v7 = _v13(_v2, _v66, _v17, {
          [_v4]: !0
        });
        _v13(_v7, _v65), _v13(_v7, _v68, _v5), _v13(_v7, _v66, _v7), _v13(_v5, _v68, _v5), _v13(_v5, _v65), _v13(_v5, _v66, _v5);
        let _v8 = _v15(_v2, "\n", "NL", {
            [_v9]: !0
          }),
          _v9 = _v15(_v2, "\r", "WS", {
            [_v9]: !0
          }),
          _v10 = _v13(_v2, _v69, "WS", {
            [_v9]: !0
          });
        _v15(_v2, "￼", _v10), _v15(_v9, "\n", _v8), _v15(_v9, "￼", _v10), _v13(_v9, _v69, _v10), _v15(_v10, "\r"), _v15(_v10, "\n"), _v13(_v10, _v69, _v10), _v15(_v10, "￼", _v10);
        let _v11 = _v13(_v2, _v67, _v63, {
          [_v8]: !0
        });
        _v15(_v11, "#"), _v13(_v11, _v67, _v11), _v15(_v11, "️", _v11);
        let _v12 = _v15(_v11, "‍");
        _v15(_v12, "#"), _v13(_v12, _v67, _v11);
        let _v13 = [[_v65, _v6], [_v68, _v4]],
          _v14 = [[_v65, null], [_v66, _v7], [_v68, _v5]];
        for (let _v0 = 0; _v0 < _v70.length; _v0++) _v73(_v2, _v70[_v0], "TLD", _v16, _v13);
        for (let _v0 = 0; _v0 < _v71.length; _v0++) _v73(_v2, _v71[_v0], _v21, _v17, _v14);
        _v10("TLD", {
          tld: !0,
          ascii: !0
        }, _v1), _v10(_v21, {
          utld: !0,
          alpha: !0
        }, _v1), _v73(_v2, "file", _v22, _v16, _v13), _v73(_v2, "mailto", _v22, _v16, _v13), _v73(_v2, "http", _v23, _v16, _v13), _v73(_v2, "https", _v23, _v16, _v13), _v73(_v2, "ftp", _v23, _v16, _v13), _v73(_v2, "ftps", _v23, _v16, _v13), _v10(_v22, {
          scheme: !0,
          ascii: !0
        }, _v1), _v10(_v23, {
          slashscheme: !0,
          ascii: !0
        }, _v1), _v0 = _v0.sort((_v0, _v1) => _v0[0] > _v1[0] ? 1 : -1);
        for (let _v0 = 0; _v0 < _v0.length; _v0++) {
          let _v0 = _v0[_v0][0],
            _v1 = _v0[_v0][1] ? {
              scheme: !0
            } : {
              slashscheme: !0
            };
          _v0.indexOf("-") >= 0 ? _v1[_v7] = !0 : _v65.test(_v0) ? _v68.test(_v0) ? _v1[_v5] = !0 : _v1[_v3] = !0 : _v1[_v2] = !0, _v14(_v2, _v0, _v0, _v1);
        }
        return _v14(_v2, "localhost", _v20, {
          ascii: !0
        }), _v2.jd = new _v11("SYM"), {
          start: _v2,
          tokens: Object.assign({
            groups: _v1
          }, _v64)
        };
      }(_v87.customSchemes);
      for (let _v0 = 0; _v0 < _v87.tokenQueue.length; _v0++) _v87.tokenQueue[_v0][1]({
        scanner: _v87.scanner
      });
      _v87.parser = function ({
        groups: _v0
      }) {
        let _v1 = _v0.domain.concat([_v40, _v42, "AT", _v43, _v44, _v45, _v48, _v49, _v51, "NUM", _v52, _v53, _v54, _v55, _v60, "SYM", _v61, _v62]),
          _v2 = [_v41, _v46, _v47, "DOT", _v50, _v52, _v56, _v57, _v59, _v30, _v31, _v24, _v25, _v27, _v26, _v28, _v29, _v32, _v33, _v34, _v35, _v36, _v37, _v38, _v39],
          _v3 = [_v40, _v41, _v42, _v43, _v44, _v45, _v48, _v49, _v51, _v24, _v25, _v52, _v53, _v54, _v55, _v56, _v60, "SYM", _v61, _v62],
          _v4 = _v84(),
          _v5 = _v15(_v4, _v61);
        _v12(_v5, _v3, _v5), _v12(_v5, _v0.domain, _v5);
        let _v6 = _v84(),
          _v7 = _v84(),
          _v8 = _v84();
        _v12(_v4, _v0.domain, _v6), _v12(_v4, _v0.scheme, _v7), _v12(_v4, _v0.slashscheme, _v8), _v12(_v6, _v3, _v5), _v12(_v6, _v0.domain, _v6);
        let _v9 = _v15(_v6, "AT");
        _v15(_v5, "AT", _v9), _v15(_v7, "AT", _v9), _v15(_v8, "AT", _v9);
        let _v10 = _v15(_v5, "DOT");
        _v12(_v10, _v3, _v5), _v12(_v10, _v0.domain, _v5);
        let _v11 = _v84();
        _v12(_v9, _v0.domain, _v11), _v12(_v11, _v0.domain, _v11);
        let _v12 = _v15(_v11, "DOT");
        _v12(_v12, _v0.domain, _v11);
        let _v13 = _v84(_v80);
        _v12(_v12, _v0.tld, _v13), _v12(_v12, _v0.utld, _v13), _v15(_v9, _v20, _v13);
        let _v14 = _v15(_v11, _v51);
        _v15(_v14, _v51, _v14), _v12(_v14, _v0.domain, _v11), _v12(_v13, _v0.domain, _v11), _v15(_v13, "DOT", _v12), _v15(_v13, _v51, _v14), _v12(_v15(_v13, _v46), _v0.numeric, _v80);
        let _v15 = _v15(_v6, _v51),
          _v16 = _v15(_v6, "DOT");
        _v15(_v15, _v51, _v15), _v12(_v15, _v0.domain, _v6), _v12(_v16, _v3, _v5), _v12(_v16, _v0.domain, _v6);
        let _v17 = _v84(_v83);
        _v12(_v16, _v0.tld, _v17), _v12(_v16, _v0.utld, _v17), _v12(_v17, _v0.domain, _v6), _v12(_v17, _v3, _v5), _v15(_v17, "DOT", _v16), _v15(_v17, _v51, _v15), _v15(_v17, "AT", _v9);
        let _v18 = _v15(_v17, _v46),
          _v19 = _v84(_v83);
        _v12(_v18, _v0.numeric, _v19);
        let _v20 = _v84(_v83),
          _v21 = _v84();
        _v12(_v20, _v1, _v20), _v12(_v20, _v2, _v21), _v12(_v21, _v1, _v20), _v12(_v21, _v2, _v21), _v15(_v17, _v60, _v20), _v15(_v19, _v60, _v20);
        let _v22 = _v15(_v7, _v46),
          _v23 = _v15(_v8, _v46),
          _v24 = _v15(_v23, _v60),
          _v25 = _v15(_v24, _v60);
        _v12(_v7, _v0.domain, _v6), _v15(_v7, "DOT", _v16), _v15(_v7, _v51, _v15), _v12(_v8, _v0.domain, _v6), _v15(_v8, "DOT", _v16), _v15(_v8, _v51, _v15), _v12(_v22, _v0.domain, _v20), _v15(_v22, _v60, _v20), _v15(_v22, _v56, _v20), _v12(_v25, _v0.domain, _v20), _v12(_v25, _v1, _v20), _v15(_v25, _v60, _v20);
        let _v26 = [[_v24, _v25], [_v26, _v27], [_v28, _v29], [_v30, _v31], [_v32, _v33], [_v34, _v35], [_v36, _v37], [_v38, _v39]];
        for (let _v0 = 0; _v0 < _v26.length; _v0++) {
          let [_v0, _v1] = _v26[_v0],
            _v2 = _v15(_v20, _v0);
          _v15(_v21, _v0, _v2), _v15(_v2, _v1, _v20);
          let _v3 = _v84(_v83);
          _v12(_v2, _v1, _v3);
          let _v4 = _v84();
          _v12(_v2, _v2), _v12(_v3, _v1, _v3), _v12(_v3, _v2, _v4), _v12(_v4, _v1, _v3), _v12(_v4, _v2, _v4), _v15(_v3, _v1, _v20), _v15(_v4, _v1, _v20);
        }
        return _v15(_v4, _v20, _v17), _v15(_v4, "NL", _v82), {
          start: _v4,
          tokens: _v64
        };
      }(_v87.scanner.tokens);
      for (let _v0 = 0; _v0 < _v87.pluginQueue.length; _v0++) _v87.pluginQueue[_v0][1]({
        scanner: _v87.scanner,
        parser: _v87.parser
      });
      _v87.initialized = !0;
    }(), function (_v0, _v1, _v2) {
      let _v3 = _v2.length,
        _v4 = 0,
        _v5 = [],
        _v6 = [];
      for (; _v4 < _v3;) {
        let _v0 = _v0,
          _v1 = null,
          _v2 = null,
          _v3 = 0,
          _v4 = null,
          _v5 = -1;
        for (; _v4 < _v3 && !(_v1 = _v0.go(_v2[_v4].t));) _v6.push(_v2[_v4++]);
        for (; _v4 < _v3 && (_v2 = _v1 || _v0.go(_v2[_v4].t));) _v1 = null, (_v0 = _v2).accepts() ? (_v5 = 0, _v4 = _v0) : _v5 >= 0 && _v5++, _v4++, _v3++;
        if (_v5 < 0) (_v4 -= _v3) < _v3 && (_v6.push(_v2[_v4]), _v4++);else {
          _v6.length > 0 && (_v5.push(_v85(_v81, _v1, _v6)), _v6 = []), _v4 -= _v5, _v3 -= _v5;
          let _v0 = _v4.t,
            _v1 = _v2.slice(_v4 - _v3, _v4);
          _v5.push(_v85(_v0, _v1, _v1));
        }
      }
      return _v6.length > 0 && _v5.push(_v85(_v81, _v1, _v6)), _v5;
    }(_v87.parser.start, _v0, _v72(_v87.scanner.start, _v0));
  }
  function _v90(_v0, _v1 = null, _v2 = null) {
    if (_v1 && "object" == typeof _v1) {
      if (_v2) throw Error(`linkifyjs: Invalid link type ${_v1}; must be a string`);
      _v2 = _v1, _v1 = null;
    }
    let _v3 = new _v76(_v2),
      _v4 = _v89(_v0),
      _v5 = [];
    for (let _v0 = 0; _v0 < _v4.length; _v0++) {
      let _v0 = _v4[_v0];
      _v0.isLink && (!_v1 || _v0.t === _v1) && _v3.check(_v0) && _v5.push(_v0.toFormattedObject(_v3));
    }
    return _v5;
  }
  _v89.scan = _v72;
  var _v91 = _v0.i(0);
  let _v92 = "[\0-   ᠎ -\u2029 　]",
    _v93 = new RegExp(_v92),
    _v94 = RegExp(`${_v92}$`),
    _v95 = RegExp(_v92, "g");
  function _v96(_v0, _v1) {
    let _v2 = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
    return _v1 && _v1.forEach(_v0 => {
      let _v1 = "string" == typeof _v0 ? _v0 : _v0.scheme;
      _v1 && _v2.push(_v1);
    }), !_v0 || _v0.replace(_v95, "").match(RegExp(`^(?:(?:${_v2.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
  }
  let _v97 = _v1.Mark.create({
    name: "link",
    priority: 0,
    keepOnSplit: !1,
    exitable: !0,
    onCreate() {
      this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach(_v0 => {
        "string" == typeof _v0 ? _v88(_v0) : _v88(_v0.scheme, _v0.optionalSlashes);
      });
    },
    onDestroy() {
      _v11.groups = {}, _v87.scanner = null, _v87.parser = null, _v87.tokenQueue = [], _v87.pluginQueue = [], _v87.customSchemes = [], _v87.initialized = !1;
    },
    inclusive() {
      return this.options.autolink;
    },
    addOptions: () => ({
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (_v0, _v1) => !!_v96(_v0, _v1.protocols),
      validate: _v0 => !!_v0,
      shouldAutoLink: _v0 => !!_v0
    }),
    addAttributes() {
      return {
        href: {
          default: null,
          parseHTML: _v0 => _v0.getAttribute("href")
        },
        target: {
          default: this.options.HTMLAttributes.target
        },
        rel: {
          default: this.options.HTMLAttributes.rel
        },
        class: {
          default: this.options.HTMLAttributes.class
        }
      };
    },
    parseHTML() {
      return [{
        tag: "a[href]",
        getAttrs: _v0 => {
          let _v1 = _v0.getAttribute("href");
          return !!_v1 && !!this.options.isAllowedUri(_v1, {
            defaultValidate: _v0 => !!_v96(_v0, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) && null;
        }
      }];
    },
    renderHTML({
      HTMLAttributes: _v0
    }) {
      return this.options.isAllowedUri(_v0.href, {
        defaultValidate: _v0 => !!_v96(_v0, this.options.protocols),
        protocols: this.options.protocols,
        defaultProtocol: this.options.defaultProtocol
      }) ? ["a", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0] : ["a", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, {
        ..._v0,
        href: ""
      }), 0];
    },
    addCommands() {
      return {
        setLink: _v0 => ({
          chain: _v0
        }) => {
          let {
            href: _v1
          } = _v0;
          return !!this.options.isAllowedUri(_v1, {
            defaultValidate: _v0 => !!_v96(_v0, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) && _v0().setMark(this.name, _v0).setMeta("preventAutolink", !0).run();
        },
        toggleLink: _v0 => ({
          chain: _v0
        }) => {
          let {
            href: _v1
          } = _v0;
          return !!this.options.isAllowedUri(_v1, {
            defaultValidate: _v0 => !!_v96(_v0, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) && _v0().toggleMark(this.name, _v0, {
            extendEmptyMarkRange: !0
          }).setMeta("preventAutolink", !0).run();
        },
        unsetLink: () => ({
          chain: _v0
        }) => _v0().unsetMark(this.name, {
          extendEmptyMarkRange: !0
        }).setMeta("preventAutolink", !0).run()
      };
    },
    addPasteRules() {
      return [(0, _v1.markPasteRule)({
        find: _v0 => {
          let _v1 = [];
          if (_v0) {
            let {
                protocols: _v0,
                defaultProtocol: _v1
              } = this.options,
              _v2 = _v90(_v0).filter(_v0 => _v0.isLink && this.options.isAllowedUri(_v0.value, {
                defaultValidate: _v0 => !!_v96(_v0, _v0),
                protocols: _v0,
                defaultProtocol: _v1
              }));
            _v2.length && _v2.forEach(_v0 => _v1.push({
              text: _v0.value,
              data: {
                href: _v0.href
              },
              index: _v0.start
            }));
          }
          return _v1;
        },
        type: this.type,
        getAttributes: _v0 => {
          var _v1;
          return {
            href: null == (_v1 = _v0.data) ? void 0 : _v1.href
          };
        }
      })];
    },
    addProseMirrorPlugins() {
      var _v0, _v1, _v2;
      let _v3 = [],
        {
          protocols: _v4,
          defaultProtocol: _v5
        } = this.options;
      return this.options.autolink && _v3.push((_v0 = {
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: _v0 => this.options.isAllowedUri(_v0, {
          defaultValidate: _v0 => !!_v96(_v0, _v4),
          protocols: _v4,
          defaultProtocol: _v5
        }),
        shouldAutoLink: this.options.shouldAutoLink
      }, new _v91.Plugin({
        key: new _v91.PluginKey("autolink"),
        appendTransaction: (_v0, _v1, _v2) => {
          let _v3 = _v0.some(_v0 => _v0.docChanged) && !_v1.doc.eq(_v2.doc),
            _v4 = _v0.some(_v0 => _v0.getMeta("preventAutolink"));
          if (!_v3 || _v4) return;
          let {
              tr: _v5
            } = _v2,
            _v6 = (0, _v1.combineTransactionSteps)(_v1.doc, [..._v0]);
          if ((0, _v1.getChangedRanges)(_v6).forEach(({
            newRange: _v0
          }) => {
            let _v1,
              _v2,
              _v3 = (0, _v1.findChildrenInRange)(_v2.doc, _v0, _v0 => _v0.isTextblock);
            if (_v3.length > 1) _v1 = _v3[0], _v2 = _v2.doc.textBetween(_v1.pos, _v1.pos + _v1.node.nodeSize, void 0, " ");else if (_v3.length) {
              let _v0 = _v2.doc.textBetween(_v0.from, _v0.to, " ", " ");
              if (!_v94.test(_v0)) return;
              _v1 = _v3[0], _v2 = _v2.doc.textBetween(_v1.pos, _v0.to, void 0, " ");
            }
            if (_v1 && _v2) {
              let _v0 = _v2.split(_v93).filter(Boolean);
              if (_v0.length <= 0) return !1;
              let _v1 = _v0[_v0.length - 1],
                _v2 = _v1.pos + _v2.lastIndexOf(_v1);
              if (!_v1) return !1;
              let _v3 = _v89(_v1).map(_v0 => _v0.toObject(_v0.defaultProtocol));
              if (!(1 === _v3.length ? _v3[0].isLink : 3 === _v3.length && !!_v3[1].isLink && ["()", "[]"].includes(_v3[0].value + _v3[2].value))) return !1;
              _v3.filter(_v0 => _v0.isLink).map(_v0 => ({
                ..._v0,
                from: _v2 + _v0.start + 1,
                to: _v2 + _v0.end + 1
              })).filter(_v0 => !_v2.schema.marks.code || !_v2.doc.rangeHasMark(_v0.from, _v0.to, _v2.schema.marks.code)).filter(_v0 => _v0.validate(_v0.value)).filter(_v0 => _v0.shouldAutoLink(_v0.value)).forEach(_v0 => {
                (0, _v1.getMarksBetween)(_v0.from, _v0.to, _v2.doc).some(_v0 => _v0.mark.type === _v0.type) || _v5.addMark(_v0.from, _v0.to, _v0.type.create({
                  href: _v0.href
                }));
              });
            }
          }), _v5.steps.length) return _v5;
        }
      }))), !0 === this.options.openOnClick && _v3.push((_v1 = {
        type: this.type
      }, new _v91.Plugin({
        key: new _v91.PluginKey("handleClickLink"),
        props: {
          handleClick: (_v0, _v1, _v2) => {
            var _v3, _v4;
            if (0 !== _v2.button || !_v0.editable) return !1;
            let _v5 = _v2.target,
              _v6 = [];
            for (; "DIV" !== _v5.nodeName;) _v6.push(_v5), _v5 = _v5.parentNode;
            if (!_v6.find(_v0 => "A" === _v0.nodeName)) return !1;
            let _v7 = (0, _v1.getAttributes)(_v0.state, _v1.type.name),
              _v8 = _v2.target,
              _v9 = null != (_v3 = null == _v8 ? void 0 : _v8.href) ? _v3 : _v7.href,
              _v10 = null != (_v4 = null == _v8 ? void 0 : _v8.target) ? _v4 : _v7.target;
            return !!_v8 && !!_v9 && (window.open(_v9, _v10), !0);
          }
        }
      }))), this.options.linkOnPaste && _v3.push((_v2 = {
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      }, new _v91.Plugin({
        key: new _v91.PluginKey("handlePasteLink"),
        props: {
          handlePaste: (_v0, _v1, _v2) => {
            let {
                state: _v3
              } = _v0,
              {
                selection: _v4
              } = _v3,
              {
                empty: _v5
              } = _v4;
            if (_v5) return !1;
            let _v6 = "";
            _v2.content.forEach(_v0 => {
              _v6 += _v0.textContent;
            });
            let _v7 = _v90(_v6, {
              defaultProtocol: _v2.defaultProtocol
            }).find(_v0 => _v0.isLink && _v0.value === _v6);
            return !!_v6 && !!_v7 && _v2.editor.commands.setMark(_v2.type, {
              href: _v7.href
            });
          }
        }
      }))), _v3;
    }
  });
  _v0.s(["Link", 0, _v97, "default", 0, _v97], 0);
}