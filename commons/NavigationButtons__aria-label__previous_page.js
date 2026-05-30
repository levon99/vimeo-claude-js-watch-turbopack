{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["NavigationButtons", 0, ({
    onPrevClick: _v0,
    onNextClick: _v1,
    disablePrevButton: _v2,
    disableNextButton: _v3,
    nextDataId: _v4,
    prevDataId: _v5,
    marginLeft: _v6,
    ..._v7
  }) => (0, _v1.jsxs)(_v2.HStack, {
    spacing: "50",
    marginLeft: _v6,
    children: [(0, _v1.jsx)(_v3.IconButton, {
      "aria-label": "previous page",
      size: "sm",
      "data-id": _v5,
      variant: "secondary",
      icon: (0, _v1.jsx)(_v4.ChevronLeftSmall, {}),
      isDisabled: _v2,
      onClick: _v0,
      borderRadius: "8px !important",
      sx: {
        svg: {
          width: "20px",
          height: "20px"
        }
      },
      ..._v7
    }), (0, _v1.jsx)(_v3.IconButton, {
      "aria-label": "next page",
      size: "sm",
      "data-id": _v4,
      variant: "secondary",
      icon: (0, _v1.jsx)(_v5.ChevronRightSmall, {}),
      isDisabled: _v3,
      onClick: _v1,
      borderRadius: "8px !important",
      sx: {
        svg: {
          width: "20px",
          height: "20px"
        }
      },
      ..._v7
    })]
  })]);
}