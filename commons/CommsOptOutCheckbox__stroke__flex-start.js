{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["CommsOptOutCheckbox", 0, ({
    isChecked: _v0,
    onChange: _v1
  }) => (0, _v1.jsxs)(_v2.Box, {
    children: [(0, _v1.jsx)(_v4.Divider, {
      mb: "300",
      borderColor: "stroke"
    }), (0, _v1.jsx)(_v3.Checkbox, {
      alignItems: "flex-start",
      px: "200",
      isChecked: _v0,
      onChange: _v0 => _v1(_v0.target.checked),
      children: (0, _v1.jsxs)(_v2.Box, {
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          fontWeight: "medium",
          children: (0, _v6.commsOptOutLabel)()
        }), (0, _v1.jsx)(_v5.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: (0, _v6.commsOptOutDescription)()
        })]
      })
    })]
  })]);
}