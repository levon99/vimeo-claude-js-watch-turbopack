{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function ({
    html: _v0,
    height: _v1 = null,
    width: _v2 = null,
    children: _v3,
    dataNtpc: _v4 = ""
  }) {
    return (0, _v4.useEffect)(() => {
      _v4 && performance.mark("mark_feature_usage", {
        detail: {
          feature: `next-third-parties-${_v4}`
        }
      });
    }, [_v4]), (0, _v3.jsxs)(_v3.Fragment, {
      children: [_v3, _v0 ? (0, _v3.jsx)("div", {
        style: {
          height: null != _v1 ? `${_v1}px` : "auto",
          width: null != _v2 ? `${_v2}px` : "auto"
        },
        "data-ntpc": _v4,
        dangerouslySetInnerHTML: {
          __html: _v0
        }
      }) : null]
    });
  };
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
}