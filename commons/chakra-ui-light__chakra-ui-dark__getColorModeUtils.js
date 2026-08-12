{
  "use strict";

  var _v1 = "chakra-ui-light",
    _v2 = "chakra-ui-dark";
  _v0.s(["getColorModeUtils", 0, function (_v0 = {}) {
    let {
        preventTransition: _v1 = !0
      } = _v0,
      _v2 = {
        setDataset: _v0 => {
          let _v1 = _v1 ? _v2.preventTransition() : void 0;
          document.documentElement.dataset.theme = _v0, document.documentElement.style.colorScheme = _v0, null == _v1 || _v1();
        },
        setClassName(_v0) {
          document.body.classList.add(_v0 ? _v2 : _v1), document.body.classList.remove(_v0 ? _v1 : _v2);
        },
        query: () => window.matchMedia("(prefers-color-scheme: dark)"),
        getSystemTheme(_v0) {
          var _v1;
          return (null != (_v1 = _v2.query().matches) ? _v1 : "dark" === _v0) ? "dark" : "light";
        },
        addListener(_v0) {
          let _v1 = _v2.query(),
            _v2 = _v0 => {
              _v0(_v0.matches ? "dark" : "light");
            };
          return "function" == typeof _v1.addListener ? _v1.addListener(_v2) : _v1.addEventListener("change", _v2), () => {
            "function" == typeof _v1.removeListener ? _v1.removeListener(_v2) : _v1.removeEventListener("change", _v2);
          };
        },
        preventTransition() {
          let _v0 = document.createElement("style");
          return _v0.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(_v0), () => {
            window.getComputedStyle(document.body), requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                document.head.removeChild(_v0);
              });
            });
          };
        }
      };
    return _v2;
  }]);
}