{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.createContext)({}),
    _v5 = (0, _v2.createContext)((0, _v3.makeInitialRefState)());
  _v0.s(["RefsDispatch", 0, _v4, "RefsProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)((0, _v3.makeInitialRefState)());
    return (0, _v1.jsx)(_v4.Provider, {
      value: _v2,
      children: (0, _v1.jsx)(_v5.Provider, {
        value: _v1,
        children: _v0
      })
    });
  }, "RefsState", 0, _v5]);
}