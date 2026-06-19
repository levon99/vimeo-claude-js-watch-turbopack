{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["p", "br", "a", "b", "i", "em", "strong", "u", "ul", "ol", "li", "span", "blockquote", "pre", "code", "h1", "h2", "h3", "h4", "h5", "h6", "div", "hr"],
    _v3 = ["href", "target", "rel", "class", "data-time"];
  _v0.s(["sanitizeDescriptionHtml", 0, function (_v0) {
    return _v0 ? _v1.default.sanitize(_v0, {
      ALLOWED_TAGS: _v2,
      ALLOWED_ATTR: _v3
    }) : "";
  }]);
}