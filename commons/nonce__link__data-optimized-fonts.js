{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    default: function () {
      return _v7;
    },
    isEqualNode: function () {
      return _v6;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0);
  function _v6(_v0, _v1) {
    if (_v0 instanceof HTMLElement && _v1 instanceof HTMLElement) {
      let _v0 = _v1.getAttribute("nonce");
      if (_v0 && !_v0.getAttribute("nonce")) {
        let _v0 = _v1.cloneNode(!0);
        return _v0.setAttribute("nonce", ""), _v0.nonce = _v0, _v0 === _v0.nonce && _v0.isEqualNode(_v0);
      }
    }
    return _v0.isEqualNode(_v1);
  }
  function _v7() {
    return {
      mountedInstances: new Set(),
      updateHead: _v0 => {
        let _v1 = {};
        _v0.forEach(_v0 => {
          if ("link" === _v0.type && _v0.props["data-optimized-fonts"]) if (document.querySelector(`style[data-href="${_v0.props["data-href"]}"]`)) return;else _v0.props.href = _v0.props["data-href"], _v0.props["data-href"] = void 0;
          let _v1 = _v1[_v0.type] || [];
          _v1.push(_v0), _v1[_v0.type] = _v1;
        });
        let _v2 = _v1.title ? _v1.title[0] : null,
          _v3 = "";
        if (_v2) {
          let {
            children: _v0
          } = _v2.props;
          _v3 = "string" == typeof _v0 ? _v0 : Array.isArray(_v0) ? _v0.join("") : "";
        }
        _v3 !== document.title && (document.title = _v3), ["meta", "base", "link", "style", "script"].forEach(_v0 => {
          !function (_v0, _v1) {
            let _v2 = document.querySelector("head");
            if (!_v2) return;
            let _v3 = new Set(_v2.querySelectorAll(`${_v0}[data-next-head]`));
            if ("meta" === _v0) {
              let _v0 = _v2.querySelector("meta[charset]");
              null !== _v0 && _v3.add(_v0);
            }
            let _v4 = [];
            for (let _v0 = 0; _v0 < _v1.length; _v0++) {
              let _v0 = function ({
                type: _v0,
                props: _v1
              }) {
                let _v2 = document.createElement(_v0);
                (0, _v5.setAttributesFromProps)(_v2, _v1);
                let {
                  children: _v3,
                  dangerouslySetInnerHTML: _v4
                } = _v1;
                return _v4 ? _v2.innerHTML = _v4.__html || "" : _v3 && (_v2.textContent = "string" == typeof _v3 ? _v3 : Array.isArray(_v3) ? _v3.join("") : ""), _v2;
              }(_v1[_v0]);
              _v0.setAttribute("data-next-head", "");
              let _v1 = !0;
              for (let _v0 of _v3) if (_v6(_v0, _v0)) {
                _v3.delete(_v0), _v1 = !1;
                break;
              }
              _v1 && _v4.push(_v0);
            }
            for (let _v0 of _v3) _v0.parentNode?.removeChild(_v0);
            for (let _v0 of _v4) "meta" === _v0.tagName.toLowerCase() && null !== _v0.getAttribute("charset") && _v2.prepend(_v0), _v2.appendChild(_v0);
          }(_v0, _v1[_v0] || []);
        });
      }
    };
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}