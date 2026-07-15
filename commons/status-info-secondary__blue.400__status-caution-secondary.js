{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = {
    info: {
      surface: "status-info-secondary",
      icon: "blue.400"
    },
    caution: {
      surface: "status-caution-secondary",
      icon: "orange.400"
    }
  };
  _v0.s(["LibraryMergeAlert", 0, ({
    tone: _v0,
    icon: _v1,
    lead: _v2,
    children: _v3,
    linkLabel: _v4
  }) => {
    let _v5 = _v9[_v0];
    return (0, _v1.jsxs)(_v4.AlertRoot, {
      size: "md",
      borderRadius: "md",
      w: "100%",
      bgColor: _v5.surface,
      children: [(0, _v1.jsx)(_v3.AlertIcon, {
        children: (0, _v1.jsx)(_v5.Box, {
          color: _v5.icon,
          display: "inline-flex",
          children: _v1
        })
      }), (0, _v1.jsxs)(_v2.AlertDescription, {
        color: "text-primary",
        children: [_v2 ? (0, _v1.jsx)(_v7.Text, {
          as: "strong",
          fontWeight: "bold",
          sx: {
            fontSynthesis: "weight"
          },
          children: `${_v2} `
        }) : null, _v3, _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [" ", (0, _v1.jsx)(_v6.Link, {
            href: _v8.LIBRARY_MERGE_HELP_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            sx: {
              textDecoration: "underline"
            },
            children: _v4
          })]
        }) : null]
      })]
    });
  }]);
}