{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.CARRIAGE_RETURN_PLACEHOLDER_REGEX = _v2.CARRIAGE_RETURN_PLACEHOLDER = _v2.CARRIAGE_RETURN_REGEX = _v2.CARRIAGE_RETURN = _v2.CASE_SENSITIVE_TAG_NAMES_MAP = _v2.CASE_SENSITIVE_TAG_NAMES = void 0, _v2.CASE_SENSITIVE_TAG_NAMES = ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"], _v2.CASE_SENSITIVE_TAG_NAMES_MAP = _v2.CASE_SENSITIVE_TAG_NAMES.reduce(function (_v0, _v1) {
    return _v0[_v1.toLowerCase()] = _v1, _v0;
  }, {}), _v2.CARRIAGE_RETURN = "\r", _v2.CARRIAGE_RETURN_REGEX = RegExp(_v2.CARRIAGE_RETURN, "g"), _v2.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now().toString(), "__"), _v2.CARRIAGE_RETURN_PLACEHOLDER_REGEX = RegExp(_v2.CARRIAGE_RETURN_PLACEHOLDER, "g");
}