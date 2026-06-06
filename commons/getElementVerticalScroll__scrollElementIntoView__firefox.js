{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getElementVerticalScroll", 0, function (_v0) {
    return _v0.scrollHeight - (_v0.scrollTop + _v0.clientHeight);
  }, "scrollElementIntoView", 0, function (_v0, _v1 = {}) {
    let _v2 = (0, _v1.detectBrowser)(),
      _v3 = _v2?.name === "firefox",
      _v4 = {
        ..._v1,
        ...(_v3 && {
          behavior: "auto"
        })
      };
    _v0.scrollIntoView(_v4);
  }, "scrollToVerticalEnd", 0, function (_v0, _v1 = "smooth") {
    _v0.scrollTo({
      left: 0,
      top: _v0.scrollHeight,
      behavior: _v1
    });
  }, "transformHorizontalScrollsToVertical", 0, function (_v0) {
    let _v1 = _v0 => {
      let {
        deltaY: _v1
      } = _v0;
      0 !== _v1 && -0 !== _v1 && (_v0.scrollLeft = _v0.scrollLeft + _v1, _v0.stopPropagation(), _v0.preventDefault());
    };
    return _v0.addEventListener("mousewheel", _v1), () => _v0.removeEventListener("mousewheel", _v1);
  }]);
}