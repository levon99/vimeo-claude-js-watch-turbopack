{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["CopyAction", 0, ({
    badge: _v0,
    content: _v1,
    icon: _v2,
    label: _v3,
    onClick: _v4,
    onCopyAsync: _v5
  }) => (0, _v1.jsx)(_v5.Action, {
    badge: _v0,
    icon: _v2 || (0, _v1.jsx)(_v3.Link, {
      boxSize: (0, _v2.rem)(_v6.ACTION_ICON_BOX_SIZE)
    }),
    label: _v3,
    onClick: () => {
      _v5 ? _v5() : ((0, _v4.default)(_v1), _v4?.());
    }
  })]);
}