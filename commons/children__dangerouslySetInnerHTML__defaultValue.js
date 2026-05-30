{
  "use strict";

  function _v3(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    this.acceptsBooleans = 2 === _v1 || 3 === _v1 || 4 === _v1, this.attributeName = _v3, this.attributeNamespace = _v4, this.mustUseProperty = _v2, this.propertyName = _v0, this.type = _v1, this.sanitizeURL = _v5, this.removeEmptyString = _v6;
  }
  let _v4 = {};
  ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 0, !1, _v0, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(([_v0, _v1]) => {
    _v4[_v0] = new _v3(_v0, 1, !1, _v1, null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 2, !1, _v0.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 2, !1, _v0, null, !1, !1);
  }), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 3, !1, _v0.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 3, !0, _v0, null, !1, !1);
  }), ["capture", "download"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 4, !1, _v0, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 6, !1, _v0, null, !1, !1);
  }), ["rowSpan", "start"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 5, !1, _v0.toLowerCase(), null, !1, !1);
  });
  let _v5 = /[\-\:]([a-z])/g,
    _v6 = _v0 => _v0[1].toUpperCase();
  ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(_v0 => {
    let _v1 = _v0.replace(_v5, _v6);
    _v4[_v1] = new _v3(_v1, 1, !1, _v0, null, !1, !1);
  }), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(_v0 => {
    let _v1 = _v0.replace(_v5, _v6);
    _v4[_v1] = new _v3(_v1, 1, !1, _v0, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(_v0 => {
    let _v1 = _v0.replace(_v5, _v6);
    _v4[_v1] = new _v3(_v1, 1, !1, _v0, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 1, !1, _v0.toLowerCase(), null, !1, !1);
  }), _v4.xlinkHref = new _v3("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(_v0 => {
    _v4[_v0] = new _v3(_v0, 1, !1, _v0.toLowerCase(), null, !0, !0);
  });
  let {
      CAMELCASE: _v7,
      SAME: _v8,
      possibleStandardNames: _v9
    } = _v0.r(0),
    _v10 = RegExp.prototype.test.bind(RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),
    _v11 = Object.keys(_v9).reduce((_v0, _v1) => {
      let _v2 = _v9[_v1];
      return _v2 === _v8 ? _v0[_v1] = _v1 : _v2 === _v7 ? _v0[_v1.toLowerCase()] = _v1 : _v0[_v1] = _v2, _v0;
    }, {});
  _v2.BOOLEAN = 3, _v2.BOOLEANISH_STRING = 2, _v2.NUMERIC = 5, _v2.OVERLOADED_BOOLEAN = 4, _v2.POSITIVE_NUMERIC = 6, _v2.RESERVED = 0, _v2.STRING = 1, _v2.getPropertyInfo = function (_v0) {
    return _v4.hasOwnProperty(_v0) ? _v4[_v0] : null;
  }, _v2.isCustomAttribute = _v10, _v2.possibleStandardNames = _v11;
}