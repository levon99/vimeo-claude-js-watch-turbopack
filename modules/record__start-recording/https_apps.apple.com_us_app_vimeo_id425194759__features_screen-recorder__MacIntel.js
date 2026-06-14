{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "https://apps.apple.com/us/app/vimeo/id425194759",
    _v6 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRef)(/iphone|ipod|android|webos|blackberry|windows phone/i.test(window.navigator.userAgent.toLowerCase()));
      return ((0, _v2.useEffect)(() => {
        if (_v1.current) {
          let _v0 = "/features/screen-recorder",
            _v1 = "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1 ? "ipad" : navigator.userAgent.toLowerCase().match(/iphone|ipad|android/i)?.[0];
          _v1 && (_v0 = {
            android: "https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp",
            iphone: _v5,
            ipad: _v5
          }[_v1]), window.location.assign(_v0), setTimeout(() => window.location.assign("/"), 0);
        }
      }, []), _v1.current) ? null : (0, _v1.jsx)(_v1.Fragment, {
        children: _v0
      });
    },
    _v7 = () => {
      let _v0 = !(0, _v3.isFirefox)();
      return (0, _v2.useEffect)(() => {
        _v0 || window.location.replace("/record/download");
      }, [_v0]), (0, _v1.jsx)(_v6, {
        children: _v0 ? (0, _v1.jsx)(_v4.RecordStudioPage, {}) : null
      });
    };
  _v7.getLayout = _v0 => _v0, _v0.s(["__N_SSG", 0, !0, "default", 0, _v7], 0);
}