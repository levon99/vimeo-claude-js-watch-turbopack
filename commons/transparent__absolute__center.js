{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ({
    backgroundColor: _v0 = "transparent",
    backdropFilter: _v1,
    icon: _v2,
    dataTestId: _v3
  }) => (0, _v1.jsx)(_v4.Flex, {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "8px",
    backgroundColor: _v0,
    "data-testid": _v3,
    ...(_v1 && {
      backdropFilter: _v1
    }),
    children: _v2
  });
  _v0.s(["Overlay", 0, _v5], 0), _v0.s(["Loader", 0, ({
    backgroundColor: _v0,
    color: _v1,
    size: _v2,
    backdropFilter: _v3
  }) => (0, _v1.jsx)(_v5, {
    backgroundColor: _v0,
    dataTestId: _v3.testIds.loader,
    backdropFilter: _v3,
    icon: (0, _v1.jsx)(_v2.Spinner, {
      size: _v2,
      color: _v1
    })
  })], 0);
}