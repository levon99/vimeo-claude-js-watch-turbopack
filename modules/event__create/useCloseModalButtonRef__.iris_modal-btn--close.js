{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useCloseModalButtonRef", 0, function () {
    let _v0 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      _v0.current = window.parent.document.querySelector(".iris_modal-btn--close");
    }), _v0;
  }]);
}