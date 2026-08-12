{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["RecordFooter", 0, () => {
    let _v0 = (0, _v3.useViewer)(),
      _v1 = !!_v0?.impressumQualifies,
      _v2 = !!_v0?.terminateContractQualifies;
    return (0, _v1.jsx)(_v2.Footer, {
      children: (0, _v1.jsx)(_v2.Footer.Legal, {
        impressumQualifies: _v1,
        terminateContractQualifies: _v2
      })
    });
  }], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["RecordNavBar", 0, () => (0, _v1.jsxs)(_v4.Navigation, {
    children: [(0, _v1.jsx)(_v4.Navigation.LeftContent, {
      children: (0, _v1.jsx)(_v5.default, {})
    }), (0, _v1.jsx)(_v4.Navigation.RightContent, {})]
  })], 0);
}