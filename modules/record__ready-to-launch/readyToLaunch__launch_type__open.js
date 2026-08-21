{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = () => {
    let _v0 = (0, _v2.useRef)(!1);
    return (0, _v2.useEffect)(() => {
      _v0.current || (_v5(), _v0.current = !0);
    }, []), (0, _v1.jsx)(_v3.RecordPageBase, {
      pageType: "readyToLaunch",
      handleButtonClick: _v5
    });
  };
  function _v5() {
    let _v0 = new URLSearchParams(window.location.search).get("launch_type");
    window.location.href = `vimeo-record://${_v0 ?? "open"}`;
  }
  _v4.getLayout = _v0 => (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v4], 0);
}