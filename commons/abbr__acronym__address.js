{
  "use strict";

  let {
      entries: _v1,
      setPrototypeOf: _v2,
      isFrozen: _v3,
      getPrototypeOf: _v4,
      getOwnPropertyDescriptor: _v5
    } = Object,
    {
      freeze: _v6,
      seal: _v7,
      create: _v8
    } = Object,
    {
      apply: _v9,
      construct: _v10
    } = "u" > typeof Reflect && Reflect;
  _v6 || (_v6 = function (_v0) {
    return _v0;
  }), _v7 || (_v7 = function (_v0) {
    return _v0;
  }), _v9 || (_v9 = function (_v0, _v1) {
    for (var _v2 = arguments.length, _v3 = Array(_v2 > 2 ? _v2 - 2 : 0), _v4 = 2; _v4 < _v2; _v4++) _v3[_v4 - 2] = arguments[_v4];
    return _v0.apply(_v1, _v3);
  }), _v10 || (_v10 = function (_v0) {
    for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
    return new _v0(..._v2);
  });
  let _v11 = _v25(Array.prototype.forEach),
    _v12 = _v25(Array.prototype.lastIndexOf),
    _v13 = _v25(Array.prototype.pop),
    _v14 = _v25(Array.prototype.push),
    _v15 = _v25(Array.prototype.splice),
    _v16 = _v25(String.prototype.toLowerCase),
    _v17 = _v25(String.prototype.toString),
    _v18 = _v25(String.prototype.match),
    _v19 = _v25(String.prototype.replace),
    _v20 = _v25(String.prototype.indexOf),
    _v21 = _v25(String.prototype.trim),
    _v22 = _v25(Object.prototype.hasOwnProperty),
    _v23 = _v25(RegExp.prototype.test),
    _v24 = (_v49 = TypeError, function () {
      for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
      return _v10(_v49, _v1);
    });
  function _v25(_v0) {
    return function (_v0) {
      _v0 instanceof RegExp && (_v0.lastIndex = 0);
      for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
      return _v9(_v0, _v0, _v2);
    };
  }
  function _v26(_v0, _v1) {
    let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _v16;
    _v2 && _v2(_v0, null);
    let _v3 = _v1.length;
    for (; _v3--;) {
      let _v0 = _v1[_v3];
      if ("string" == typeof _v0) {
        let _v0 = _v2(_v0);
        _v0 !== _v0 && (_v3(_v1) || (_v1[_v3] = _v0), _v0 = _v0);
      }
      _v0[_v0] = !0;
    }
    return _v0;
  }
  function _v27(_v0) {
    let _v1 = _v8(null);
    for (let [_v0, _v1] of _v1(_v0)) _v22(_v0, _v0) && (Array.isArray(_v1) ? _v1[_v0] = function (_v0) {
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v22(_v0, _v0) || (_v0[_v0] = null);
      return _v0;
    }(_v1) : _v1 && "object" == typeof _v1 && _v1.constructor === Object ? _v1[_v0] = _v27(_v1) : _v1[_v0] = _v1);
    return _v1;
  }
  function _v28(_v0, _v1) {
    for (; null !== _v0;) {
      let _v0 = _v5(_v0, _v1);
      if (_v0) {
        if (_v0.get) return _v25(_v0.get);
        if ("function" == typeof _v0.value) return _v25(_v0.value);
      }
      _v0 = _v4(_v0);
    }
    return function () {
      return null;
    };
  }
  let _v29 = _v6(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    _v30 = _v6(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    _v31 = _v6(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    _v32 = _v6(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    _v33 = _v6(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    _v34 = _v6(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    _v35 = _v6(["#text"]),
    _v36 = _v6(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
    _v37 = _v6(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    _v38 = _v6(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    _v39 = _v6(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    _v40 = _v7(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    _v41 = _v7(/<%[\w\W]*|[\w\W]*%>/gm),
    _v42 = _v7(/\$\{[\w\W]*/gm),
    _v43 = _v7(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    _v44 = _v7(/^aria-[\-\w]+$/),
    _v45 = _v7(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    _v46 = _v7(/^(?:\w+script|data):/i),
    _v47 = _v7(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    _v48 = _v7(/^html$/i);
  var _v49,
    _v50 = Object.freeze({
      __proto__: null,
      ARIA_ATTR: _v44,
      ATTR_WHITESPACE: _v47,
      CUSTOM_ELEMENT: _v7(/^[a-z][.\w]*(-[.\w]+)+$/i),
      DATA_ATTR: _v43,
      DOCTYPE_NAME: _v48,
      ERB_EXPR: _v41,
      IS_ALLOWED_URI: _v45,
      IS_SCRIPT_OR_DATA: _v46,
      MUSTACHE_EXPR: _v40,
      TMPLIT_EXPR: _v42
    });
  let _v51 = function (_v0, _v1) {
      if ("object" != typeof _v0 || "function" != typeof _v0.createPolicy) return null;
      let _v2 = null,
        _v3 = "data-tt-policy-suffix";
      _v1 && _v1.hasAttribute(_v3) && (_v2 = _v1.getAttribute(_v3));
      let _v4 = "dompurify" + (_v2 ? "#" + _v2 : "");
      try {
        return _v0.createPolicy(_v4, {
          createHTML: _v0 => _v0,
          createScriptURL: _v0 => _v0
        });
      } catch (_v0) {
        return console.warn("TrustedTypes policy " + _v4 + " could not be created."), null;
      }
    },
    _v52 = function () {
      return {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
      };
    };
  var _v53 = function _v0() {
    let _v1,
      _v2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "u" < typeof window ? null : window,
      _v3 = _v0 => _v0(_v0);
    if (_v3.version = "3.3.3", _v3.removed = [], !_v2 || !_v2.document || 9 !== _v2.document.nodeType || !_v2.Element) return _v3.isSupported = !1, _v3;
    let {
        document: _v4
      } = _v2,
      _v5 = _v4,
      _v6 = _v5.currentScript,
      {
        DocumentFragment: _v7,
        HTMLTemplateElement: _v8,
        Node: _v9,
        Element: _v10,
        NodeFilter: _v11,
        NamedNodeMap: _v12 = _v2.NamedNodeMap || _v2.MozNamedAttrMap,
        HTMLFormElement: _v13,
        DOMParser: _v14,
        trustedTypes: _v15
      } = _v2,
      _v16 = _v10.prototype,
      _v17 = _v28(_v16, "cloneNode"),
      _v18 = _v28(_v16, "remove"),
      _v19 = _v28(_v16, "nextSibling"),
      _v20 = _v28(_v16, "childNodes"),
      _v21 = _v28(_v16, "parentNode");
    if ("function" == typeof _v8) {
      let _v0 = _v4.createElement("template");
      _v0.content && _v0.content.ownerDocument && (_v4 = _v0.content.ownerDocument);
    }
    let _v22 = "",
      {
        implementation: _v23,
        createNodeIterator: _v24,
        createDocumentFragment: _v25,
        getElementsByTagName: _v26
      } = _v4,
      {
        importNode: _v27
      } = _v5,
      _v28 = _v52();
    _v3.isSupported = "function" == typeof _v1 && "function" == typeof _v21 && _v23 && void 0 !== _v23.createHTMLDocument;
    let {
        MUSTACHE_EXPR: _v29,
        ERB_EXPR: _v30,
        TMPLIT_EXPR: _v31,
        DATA_ATTR: _v32,
        ARIA_ATTR: _v33,
        IS_SCRIPT_OR_DATA: _v34,
        ATTR_WHITESPACE: _v35,
        CUSTOM_ELEMENT: _v36
      } = _v50,
      {
        IS_ALLOWED_URI: _v37
      } = _v50,
      _v38 = null,
      _v39 = _v26({}, [..._v29, ..._v30, ..._v31, ..._v33, ..._v35]),
      _v40 = null,
      _v41 = _v26({}, [..._v36, ..._v37, ..._v38, ..._v39]),
      _v42 = Object.seal(_v8(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1
        }
      })),
      _v43 = null,
      _v44 = null,
      _v45 = Object.seal(_v8(null, {
        tagCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        },
        attributeCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null
        }
      })),
      _v46 = !0,
      _v47 = !0,
      _v48 = !1,
      _v49 = !0,
      _v50 = !1,
      _v51 = !0,
      _v52 = !1,
      _v53 = !1,
      _v54 = !1,
      _v55 = !1,
      _v56 = !1,
      _v57 = !1,
      _v58 = !0,
      _v59 = !1,
      _v60 = !0,
      _v61 = !1,
      _v62 = {},
      _v63 = null,
      _v64 = _v26({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
      _v65 = null,
      _v66 = _v26({}, ["audio", "video", "img", "source", "image", "track"]),
      _v67 = null,
      _v68 = _v26({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
      _v69 = "http://www.w3.org/1998/Math/MathML",
      _v70 = "http://www.w3.org/2000/svg",
      _v71 = "http://www.w3.org/1999/xhtml",
      _v72 = _v71,
      _v73 = !1,
      _v74 = null,
      _v75 = _v26({}, [_v69, _v70, _v71], _v17),
      _v76 = _v26({}, ["mi", "mo", "mn", "ms", "mtext"]),
      _v77 = _v26({}, ["annotation-xml"]),
      _v78 = _v26({}, ["title", "style", "font", "a", "script"]),
      _v79 = null,
      _v80 = ["application/xhtml+xml", "text/html"],
      _v81 = null,
      _v82 = null,
      _v83 = _v4.createElement("form"),
      _v84 = function (_v0) {
        return _v0 instanceof RegExp || _v0 instanceof Function;
      },
      _v85 = function () {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!_v82 || _v82 !== _v0) {
          if (_v0 && "object" == typeof _v0 || (_v0 = {}), _v0 = _v27(_v0), _v81 = "application/xhtml+xml" === (_v79 = -1 === _v80.indexOf(_v0.PARSER_MEDIA_TYPE) ? "text/html" : _v0.PARSER_MEDIA_TYPE) ? _v17 : _v16, _v38 = _v22(_v0, "ALLOWED_TAGS") ? _v26({}, _v0.ALLOWED_TAGS, _v81) : _v39, _v40 = _v22(_v0, "ALLOWED_ATTR") ? _v26({}, _v0.ALLOWED_ATTR, _v81) : _v41, _v74 = _v22(_v0, "ALLOWED_NAMESPACES") ? _v26({}, _v0.ALLOWED_NAMESPACES, _v17) : _v75, _v67 = _v22(_v0, "ADD_URI_SAFE_ATTR") ? _v26(_v27(_v68), _v0.ADD_URI_SAFE_ATTR, _v81) : _v68, _v65 = _v22(_v0, "ADD_DATA_URI_TAGS") ? _v26(_v27(_v66), _v0.ADD_DATA_URI_TAGS, _v81) : _v66, _v63 = _v22(_v0, "FORBID_CONTENTS") ? _v26({}, _v0.FORBID_CONTENTS, _v81) : _v64, _v43 = _v22(_v0, "FORBID_TAGS") ? _v26({}, _v0.FORBID_TAGS, _v81) : _v27({}), _v44 = _v22(_v0, "FORBID_ATTR") ? _v26({}, _v0.FORBID_ATTR, _v81) : _v27({}), _v62 = !!_v22(_v0, "USE_PROFILES") && _v0.USE_PROFILES, _v46 = !1 !== _v0.ALLOW_ARIA_ATTR, _v47 = !1 !== _v0.ALLOW_DATA_ATTR, _v48 = _v0.ALLOW_UNKNOWN_PROTOCOLS || !1, _v49 = !1 !== _v0.ALLOW_SELF_CLOSE_IN_ATTR, _v50 = _v0.SAFE_FOR_TEMPLATES || !1, _v51 = !1 !== _v0.SAFE_FOR_XML, _v52 = _v0.WHOLE_DOCUMENT || !1, _v55 = _v0.RETURN_DOM || !1, _v56 = _v0.RETURN_DOM_FRAGMENT || !1, _v57 = _v0.RETURN_TRUSTED_TYPE || !1, _v54 = _v0.FORCE_BODY || !1, _v58 = !1 !== _v0.SANITIZE_DOM, _v59 = _v0.SANITIZE_NAMED_PROPS || !1, _v60 = !1 !== _v0.KEEP_CONTENT, _v61 = _v0.IN_PLACE || !1, _v37 = _v0.ALLOWED_URI_REGEXP || _v45, _v72 = _v0.NAMESPACE || _v71, _v76 = _v0.MATHML_TEXT_INTEGRATION_POINTS || _v76, _v77 = _v0.HTML_INTEGRATION_POINTS || _v77, _v42 = _v0.CUSTOM_ELEMENT_HANDLING || {}, _v0.CUSTOM_ELEMENT_HANDLING && _v84(_v0.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (_v42.tagNameCheck = _v0.CUSTOM_ELEMENT_HANDLING.tagNameCheck), _v0.CUSTOM_ELEMENT_HANDLING && _v84(_v0.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (_v42.attributeNameCheck = _v0.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), _v0.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof _v0.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (_v42.allowCustomizedBuiltInElements = _v0.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _v50 && (_v47 = !1), _v56 && (_v55 = !0), _v62 && (_v38 = _v26({}, _v35), _v40 = _v8(null), !0 === _v62.html && (_v26(_v38, _v29), _v26(_v40, _v36)), !0 === _v62.svg && (_v26(_v38, _v30), _v26(_v40, _v37), _v26(_v40, _v39)), !0 === _v62.svgFilters && (_v26(_v38, _v31), _v26(_v40, _v37), _v26(_v40, _v39)), !0 === _v62.mathMl && (_v26(_v38, _v33), _v26(_v40, _v38), _v26(_v40, _v39))), _v22(_v0, "ADD_TAGS") || (_v45.tagCheck = null), _v22(_v0, "ADD_ATTR") || (_v45.attributeCheck = null), _v0.ADD_TAGS && ("function" == typeof _v0.ADD_TAGS ? _v45.tagCheck = _v0.ADD_TAGS : (_v38 === _v39 && (_v38 = _v27(_v38)), _v26(_v38, _v0.ADD_TAGS, _v81))), _v0.ADD_ATTR && ("function" == typeof _v0.ADD_ATTR ? _v45.attributeCheck = _v0.ADD_ATTR : (_v40 === _v41 && (_v40 = _v27(_v40)), _v26(_v40, _v0.ADD_ATTR, _v81))), _v0.ADD_URI_SAFE_ATTR && _v26(_v67, _v0.ADD_URI_SAFE_ATTR, _v81), _v0.FORBID_CONTENTS && (_v63 === _v64 && (_v63 = _v27(_v63)), _v26(_v63, _v0.FORBID_CONTENTS, _v81)), _v0.ADD_FORBID_CONTENTS && (_v63 === _v64 && (_v63 = _v27(_v63)), _v26(_v63, _v0.ADD_FORBID_CONTENTS, _v81)), _v60 && (_v38["#text"] = !0), _v52 && _v26(_v38, ["html", "head", "body"]), _v38.table && (_v26(_v38, ["tbody"]), delete _v43.tbody), _v0.TRUSTED_TYPES_POLICY) {
            if ("function" != typeof _v0.TRUSTED_TYPES_POLICY.createHTML) throw _v24('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
            if ("function" != typeof _v0.TRUSTED_TYPES_POLICY.createScriptURL) throw _v24('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
            _v22 = (_v1 = _v0.TRUSTED_TYPES_POLICY).createHTML("");
          } else void 0 === _v1 && (_v1 = _v51(_v15, _v6)), null !== _v1 && "string" == typeof _v22 && (_v22 = _v1.createHTML(""));
          _v6 && _v6(_v0), _v82 = _v0;
        }
      },
      _v86 = _v26({}, [..._v30, ..._v31, ..._v32]),
      _v87 = _v26({}, [..._v33, ..._v34]),
      _v88 = function (_v0) {
        let _v1 = _v21(_v0);
        _v1 && _v1.tagName || (_v1 = {
          namespaceURI: _v72,
          tagName: "template"
        });
        let _v2 = _v16(_v0.tagName),
          _v3 = _v16(_v1.tagName);
        return !!_v74[_v0.namespaceURI] && (_v0.namespaceURI === _v70 ? _v1.namespaceURI === _v71 ? "svg" === _v2 : _v1.namespaceURI === _v69 ? "svg" === _v2 && ("annotation-xml" === _v3 || _v76[_v3]) : !!_v86[_v2] : _v0.namespaceURI === _v69 ? _v1.namespaceURI === _v71 ? "math" === _v2 : _v1.namespaceURI === _v70 ? "math" === _v2 && _v77[_v3] : !!_v87[_v2] : _v0.namespaceURI === _v71 ? (_v1.namespaceURI !== _v70 || !!_v77[_v3]) && (_v1.namespaceURI !== _v69 || !!_v76[_v3]) && !_v87[_v2] && (_v78[_v2] || !_v86[_v2]) : "application/xhtml+xml" === _v79 && !!_v74[_v0.namespaceURI]);
      },
      _v89 = function (_v0) {
        _v14(_v3.removed, {
          element: _v0
        });
        try {
          _v21(_v0).removeChild(_v0);
        } catch (_v0) {
          _v18(_v0);
        }
      },
      _v90 = function (_v0, _v1) {
        try {
          _v14(_v3.removed, {
            attribute: _v1.getAttributeNode(_v0),
            from: _v1
          });
        } catch (_v0) {
          _v14(_v3.removed, {
            attribute: null,
            from: _v1
          });
        }
        if (_v1.removeAttribute(_v0), "is" === _v0) if (_v55 || _v56) try {
          _v89(_v1);
        } catch (_v0) {} else try {
          _v1.setAttribute(_v0, "");
        } catch (_v0) {}
      },
      _v91 = function (_v0) {
        let _v1 = null,
          _v2 = null;
        if (_v54) _v0 = "<remove></remove>" + _v0;else {
          let _v0 = _v18(_v0, /^[\r\n\t ]+/);
          _v2 = _v0 && _v0[0];
        }
        "application/xhtml+xml" === _v79 && _v72 === _v71 && (_v0 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _v0 + "</body></html>");
        let _v3 = _v1 ? _v1.createHTML(_v0) : _v0;
        if (_v72 === _v71) try {
          _v1 = new _v14().parseFromString(_v3, _v79);
        } catch (_v0) {}
        if (!_v1 || !_v1.documentElement) {
          _v1 = _v23.createDocument(_v72, "template", null);
          try {
            _v1.documentElement.innerHTML = _v73 ? _v22 : _v3;
          } catch (_v0) {}
        }
        let _v4 = _v1.body || _v1.documentElement;
        return (_v0 && _v2 && _v4.insertBefore(_v4.createTextNode(_v2), _v4.childNodes[0] || null), _v72 === _v71) ? _v26.call(_v1, _v52 ? "html" : "body")[0] : _v52 ? _v1.documentElement : _v4;
      },
      _v92 = function (_v0) {
        return _v24.call(_v0.ownerDocument || _v0, _v0, _v11.SHOW_ELEMENT | _v11.SHOW_COMMENT | _v11.SHOW_TEXT | _v11.SHOW_PROCESSING_INSTRUCTION | _v11.SHOW_CDATA_SECTION, null);
      },
      _v93 = function (_v0) {
        return _v0 instanceof _v13 && ("string" != typeof _v0.nodeName || "string" != typeof _v0.textContent || "function" != typeof _v0.removeChild || !(_v0.attributes instanceof _v12) || "function" != typeof _v0.removeAttribute || "function" != typeof _v0.setAttribute || "string" != typeof _v0.namespaceURI || "function" != typeof _v0.insertBefore || "function" != typeof _v0.hasChildNodes);
      },
      _v94 = function (_v0) {
        return "function" == typeof _v9 && _v0 instanceof _v9;
      };
    function _v95(_v0, _v1, _v2) {
      _v11(_v0, _v0 => {
        _v0.call(_v3, _v1, _v2, _v82);
      });
    }
    let _v96 = function (_v0) {
        let _v1 = null;
        if (_v95(_v28.beforeSanitizeElements, _v0, null), _v93(_v0)) return _v89(_v0), !0;
        let _v2 = _v81(_v0.nodeName);
        if (_v95(_v28.uponSanitizeElement, _v0, {
          tagName: _v2,
          allowedTags: _v38
        }), _v51 && _v0.hasChildNodes() && !_v94(_v0.firstElementChild) && _v23(/<[/\w!]/g, _v0.innerHTML) && _v23(/<[/\w!]/g, _v0.textContent) || 7 === _v0.nodeType || _v51 && 8 === _v0.nodeType && _v23(/<[/\w]/g, _v0.data)) return _v89(_v0), !0;
        if (!(_v45.tagCheck instanceof Function && _v45.tagCheck(_v2)) && (!_v38[_v2] || _v43[_v2])) {
          if (!_v43[_v2] && _v98(_v2) && (_v42.tagNameCheck instanceof RegExp && _v23(_v42.tagNameCheck, _v2) || _v42.tagNameCheck instanceof Function && _v42.tagNameCheck(_v2))) return !1;
          if (_v60 && !_v63[_v2]) {
            let _v0 = _v21(_v0) || _v0.parentNode,
              _v1 = _v20(_v0) || _v0.childNodes;
            if (_v1 && _v0) {
              let _v0 = _v1.length;
              for (let _v0 = _v0 - 1; _v0 >= 0; --_v0) {
                let _v0 = _v17(_v1[_v0], !0);
                _v0.__removalCount = (_v0.__removalCount || 0) + 1, _v0.insertBefore(_v0, _v19(_v0));
              }
            }
          }
          return _v89(_v0), !0;
        }
        return _v0 instanceof _v10 && !_v88(_v0) || ("noscript" === _v2 || "noembed" === _v2 || "noframes" === _v2) && _v23(/<\/no(script|embed|frames)/i, _v0.innerHTML) ? (_v89(_v0), !0) : (_v50 && 3 === _v0.nodeType && (_v1 = _v0.textContent, _v11([_v29, _v30, _v31], _v0 => {
          _v1 = _v19(_v1, _v0, " ");
        }), _v0.textContent !== _v1 && (_v14(_v3.removed, {
          element: _v0.cloneNode()
        }), _v0.textContent = _v1)), _v95(_v28.afterSanitizeElements, _v0, null), !1);
      },
      _v97 = function (_v0, _v1, _v2) {
        if (_v44[_v1] || _v58 && ("id" === _v1 || "name" === _v1) && (_v2 in _v4 || _v2 in _v83)) return !1;
        if (_v47 && !_v44[_v1] && _v23(_v32, _v1)) ;else if (_v46 && _v23(_v33, _v1)) ;else if (_v45.attributeCheck instanceof Function && _v45.attributeCheck(_v1, _v0)) ;else if (!_v40[_v1] || _v44[_v1]) {
          if (!(_v98(_v0) && (_v42.tagNameCheck instanceof RegExp && _v23(_v42.tagNameCheck, _v0) || _v42.tagNameCheck instanceof Function && _v42.tagNameCheck(_v0)) && (_v42.attributeNameCheck instanceof RegExp && _v23(_v42.attributeNameCheck, _v1) || _v42.attributeNameCheck instanceof Function && _v42.attributeNameCheck(_v1, _v0)) || "is" === _v1 && _v42.allowCustomizedBuiltInElements && (_v42.tagNameCheck instanceof RegExp && _v23(_v42.tagNameCheck, _v2) || _v42.tagNameCheck instanceof Function && _v42.tagNameCheck(_v2)))) return !1;
        } else if (_v67[_v1]) ;else if (_v23(_v37, _v19(_v2, _v35, ""))) ;else if (("src" === _v1 || "xlink:href" === _v1 || "href" === _v1) && "script" !== _v0 && 0 === _v20(_v2, "data:") && _v65[_v0]) ;else if (_v48 && !_v23(_v34, _v19(_v2, _v35, ""))) ;else if (_v2) return !1;
        return !0;
      },
      _v98 = function (_v0) {
        return "annotation-xml" !== _v0 && _v18(_v0, _v36);
      },
      _v99 = function (_v0) {
        _v95(_v28.beforeSanitizeAttributes, _v0, null);
        let {
          attributes: _v1
        } = _v0;
        if (!_v1 || _v93(_v0)) return;
        let _v2 = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: _v40,
            forceKeepAttr: void 0
          },
          _v3 = _v1.length;
        for (; _v3--;) {
          let {
              name: _v0,
              namespaceURI: _v1,
              value: _v2
            } = _v1[_v3],
            _v3 = _v81(_v0),
            _v4 = "value" === _v0 ? _v2 : _v21(_v2);
          if (_v2.attrName = _v3, _v2.attrValue = _v4, _v2.keepAttr = !0, _v2.forceKeepAttr = void 0, _v95(_v28.uponSanitizeAttribute, _v0, _v2), _v4 = _v2.attrValue, _v59 && ("id" === _v3 || "name" === _v3) && (_v90(_v0, _v0), _v4 = "user-content-" + _v4), _v51 && _v23(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _v4) || "attributename" === _v3 && _v18(_v4, "href")) {
            _v90(_v0, _v0);
            continue;
          }
          if (_v2.forceKeepAttr) continue;
          if (!_v2.keepAttr || !_v49 && _v23(/\/>/i, _v4)) {
            _v90(_v0, _v0);
            continue;
          }
          _v50 && _v11([_v29, _v30, _v31], _v0 => {
            _v4 = _v19(_v4, _v0, " ");
          });
          let _v5 = _v81(_v0.nodeName);
          if (!_v97(_v5, _v3, _v4)) {
            _v90(_v0, _v0);
            continue;
          }
          if (_v1 && "object" == typeof _v15 && "function" == typeof _v15.getAttributeType) if (_v1) ;else switch (_v15.getAttributeType(_v5, _v3)) {
            case "TrustedHTML":
              _v4 = _v1.createHTML(_v4);
              break;
            case "TrustedScriptURL":
              _v4 = _v1.createScriptURL(_v4);
          }
          if (_v4 !== _v2) try {
            _v1 ? _v0.setAttributeNS(_v1, _v0, _v4) : _v0.setAttribute(_v0, _v4), _v93(_v0) ? _v89(_v0) : _v13(_v3.removed);
          } catch (_v0) {
            _v90(_v0, _v0);
          }
        }
        _v95(_v28.afterSanitizeAttributes, _v0, null);
      },
      _v100 = function _v0(_v1) {
        let _v2 = null,
          _v3 = _v92(_v1);
        for (_v95(_v28.beforeSanitizeShadowDOM, _v1, null); _v2 = _v3.nextNode();) _v95(_v28.uponSanitizeShadowNode, _v2, null), _v96(_v2), _v99(_v2), _v2.content instanceof _v7 && _v0(_v2.content);
        _v95(_v28.afterSanitizeShadowDOM, _v1, null);
      };
    return _v3.sanitize = function (_v0) {
      let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _v2 = null,
        _v3 = null,
        _v4 = null,
        _v5 = null;
      if ((_v73 = !_v0) && (_v0 = "<!-->"), "string" != typeof _v0 && !_v94(_v0)) if ("function" == typeof _v0.toString) {
        if ("string" != typeof (_v0 = _v0.toString())) throw _v24("dirty is not a string, aborting");
      } else throw _v24("toString is not a function");
      if (!_v3.isSupported) return _v0;
      if (_v53 || _v85(_v1), _v3.removed = [], "string" == typeof _v0 && (_v61 = !1), _v61) {
        if (_v0.nodeName) {
          let _v0 = _v81(_v0.nodeName);
          if (!_v38[_v0] || _v43[_v0]) throw _v24("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (_v0 instanceof _v9) 1 === (_v3 = (_v2 = _v91("<!---->")).ownerDocument.importNode(_v0, !0)).nodeType && "BODY" === _v3.nodeName || "HTML" === _v3.nodeName ? _v2 = _v3 : _v2.appendChild(_v3);else {
        if (!_v55 && !_v50 && !_v52 && -1 === _v0.indexOf("<")) return _v1 && _v57 ? _v1.createHTML(_v0) : _v0;
        if (!(_v2 = _v91(_v0))) return _v55 ? null : _v57 ? _v22 : "";
      }
      _v2 && _v54 && _v89(_v2.firstChild);
      let _v6 = _v92(_v61 ? _v0 : _v2);
      for (; _v4 = _v6.nextNode();) _v96(_v4), _v99(_v4), _v4.content instanceof _v7 && _v100(_v4.content);
      if (_v61) return _v0;
      if (_v55) {
        if (_v56) for (_v5 = _v25.call(_v2.ownerDocument); _v2.firstChild;) _v5.appendChild(_v2.firstChild);else _v5 = _v2;
        return (_v40.shadowroot || _v40.shadowrootmode) && (_v5 = _v27.call(_v5, _v5, !0)), _v5;
      }
      let _v7 = _v52 ? _v2.outerHTML : _v2.innerHTML;
      return _v52 && _v38["!doctype"] && _v2.ownerDocument && _v2.ownerDocument.doctype && _v2.ownerDocument.doctype.name && _v23(_v48, _v2.ownerDocument.doctype.name) && (_v7 = "<!DOCTYPE " + _v2.ownerDocument.doctype.name + ">\n" + _v7), _v50 && _v11([_v29, _v30, _v31], _v0 => {
        _v7 = _v19(_v7, _v0, " ");
      }), _v1 && _v57 ? _v1.createHTML(_v7) : _v7;
    }, _v3.setConfig = function () {
      let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      _v85(_v0), _v53 = !0;
    }, _v3.clearConfig = function () {
      _v82 = null, _v53 = !1;
    }, _v3.isValidAttribute = function (_v0, _v1, _v2) {
      return _v82 || _v85({}), _v97(_v81(_v0), _v81(_v1), _v2);
    }, _v3.addHook = function (_v0, _v1) {
      "function" == typeof _v1 && _v14(_v28[_v0], _v1);
    }, _v3.removeHook = function (_v0, _v1) {
      if (void 0 !== _v1) {
        let _v0 = _v12(_v28[_v0], _v1);
        return -1 === _v0 ? void 0 : _v15(_v28[_v0], _v0, 1)[0];
      }
      return _v13(_v28[_v0]);
    }, _v3.removeHooks = function (_v0) {
      _v28[_v0] = [];
    }, _v3.removeAllHooks = function () {
      _v28 = _v52();
    }, _v3;
  }();
  _v0.s(["default", 0, _v53]);
}