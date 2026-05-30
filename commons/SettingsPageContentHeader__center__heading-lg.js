{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["SettingsPageContentHeader", 0, ({
    title: _v0,
    description: _v1,
    isBeta: _v2,
    notice: _v3,
    ..._v4
  }) => (0, _v1.jsxs)(_v5.Box, {
    paddingBottom: "400",
    ..._v4,
    children: [(0, _v1.jsxs)(_v6.Flex, {
      alignItems: "center",
      children: [(0, _v1.jsx)(_v7.Header, {
        variant: "heading-lg",
        size: "xl",
        children: _v0
      }), _v2 && (0, _v1.jsx)(_v4.Badge, {
        size: "lg",
        variant: "new",
        marginLeft: "75",
        marginTop: (0, _v9.rem)(6),
        children: (0, _v10.translate)({
          singular: "BETA",
          dictionary: {
            "ja-JP": {
              singular: "ベータ"
            },
            "ko-KR": {
              singular: "베타"
            },
            "zh-CN": {
              singular: "测试版"
            }
          }
        })
      })]
    }), _v1 && (0, _v1.jsx)(_v8.Paragraph, {
      variant: "body-md",
      color: "text-secondary",
      marginTop: "75",
      children: _v1
    }), _v3 && (0, _v1.jsx)(_v2.Alert, {
      marginTop: "200",
      status: _v3.status,
      marginBottom: "0",
      onClose: _v3.onClose,
      children: (0, _v1.jsx)(_v3.AlertDescription, {
        marginTop: "50",
        children: _v3.message
      })
    })]
  })]);
}