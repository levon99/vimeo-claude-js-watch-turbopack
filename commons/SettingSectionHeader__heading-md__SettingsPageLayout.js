{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["SettingSectionHeader", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v4.Text, {
    variant: "heading-md",
    ..._v1,
    children: _v0
  }), "SettingsPageLayout", 0, ({
    children: _v0,
    header: _v1,
    maxWidth: _v2
  }) => (0, _v1.jsxs)(_v5.VStack, {
    width: "100%",
    maxWidth: _v2,
    alignItems: "center",
    spacing: "lg",
    p: "lg",
    mx: "auto",
    children: [_v1 && (0, _v1.jsx)(_v4.Text, {
      alignSelf: "flex-start",
      variant: "heading-lg",
      children: _v1
    }), _v0]
  }), "SettingsSection", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v2.Box, {
    width: "100%",
    backgroundColor: "surface",
    padding: "lg",
    borderRadius: "lg",
    ..._v1,
    children: _v0
  }), "SettingsSubSection", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsxs)(_v5.VStack, {
    backgroundColor: "surface",
    align: "start",
    width: "100%",
    gap: 0,
    ..._v1,
    children: [(0, _v1.jsx)(_v3.Divider, {
      borderColor: "stroke",
      my: "md"
    }), _v0]
  })]);
}