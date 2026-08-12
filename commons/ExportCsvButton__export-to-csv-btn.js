{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["ExportCsvButton", 0, ({
    disabled: _v0 = !1,
    uri: _v1,
    onClick: _v2,
    ..._v3
  }) => (0, _v1.jsx)(_v2.Button, {
    id: "export-to-csv-btn",
    as: "a",
    isDisabled: _v0,
    onClick: _v0 => {
      _v0 ? _v0.preventDefault() : _v2 && _v2();
    },
    href: _v1,
    ..._v3,
    children: _v3.T.ExportToCsv
  })]);
}