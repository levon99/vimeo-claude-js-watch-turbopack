{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useIsPortraitScreenOrientation", 0, function () {
    let [_v0, _v1] = (0, _v2.useState)(!1);
    return (0, _v2.useLayoutEffect)(() => {
      if (_v3.browserConfig.BROWSER?.isMobile && "visualViewport" in window) {
        let _v0 = () => {
            switch (window.screen.orientation?.type) {
              case "portrait-primary":
              case "portrait-secondary":
                _v1(!0);
                break;
              case "landscape-primary":
              case "landscape-secondary":
                _v1(!1);
                break;
              default:
                let {
                  height: _v0,
                  width: _v1
                } = document.body.getBoundingClientRect();
                _v1(_v0 / _v1 >= 1);
            }
          },
          _v1 = (0, _v1.default)(_v0, 100);
        return _v0(), window.visualViewport.addEventListener("resize", _v1), () => {
          window.visualViewport.removeEventListener("resize", _v1);
        };
      }
    }), _v0;
  }]);
}