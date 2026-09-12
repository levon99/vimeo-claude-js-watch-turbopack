{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.addClassName = _v10, _v2.addEvent = function (_v0, _v1, _v2, _v3) {
    if (!_v0) return;
    let _v4 = {
      capture: !0,
      ..._v3
    };
    _v0.addEventListener ? _v0.addEventListener(_v1, _v2, _v4) : _v0.attachEvent ? _v0.attachEvent("on" + _v1, _v2) : _v0["on" + _v1] = _v2;
  }, _v2.addUserSelectStyles = function (_v0) {
    if (!_v0) return;
    let _v1 = _v0.getElementById("react-draggable-style-el");
    _v1 || ((_v1 = _v0.createElement("style")).type = "text/css", _v1.id = "react-draggable-style-el", _v1.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", _v1.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", _v0.getElementsByTagName("head")[0].appendChild(_v1)), _v0.body && _v10(_v0.body, "react-draggable-transparent-selection");
  }, _v2.createCSSTransform = function (_v0, _v1) {
    let _v2 = _v8(_v0, _v1, "px");
    return {
      [(0, _v4.browserPrefixToKey)("transform", _v4.default)]: _v2
    };
  }, _v2.createSVGTransform = function (_v0, _v1) {
    return _v8(_v0, _v1, "");
  }, _v2.getTouch = function (_v0, _v1) {
    return _v0.targetTouches && (0, _v3.findInArray)(_v0.targetTouches, _v0 => _v1 === _v0.identifier) || _v0.changedTouches && (0, _v3.findInArray)(_v0.changedTouches, _v0 => _v1 === _v0.identifier);
  }, _v2.getTouchIdentifier = function (_v0) {
    return _v0.targetTouches && _v0.targetTouches[0] ? _v0.targetTouches[0].identifier : _v0.changedTouches && _v0.changedTouches[0] ? _v0.changedTouches[0].identifier : void 0;
  }, _v2.getTranslation = _v8, _v2.innerHeight = function (_v0) {
    let _v1 = _v0.clientHeight,
      _v2 = _v0.ownerDocument.defaultView.getComputedStyle(_v0);
    return _v1 -= (0, _v3.int)(_v2.paddingTop), _v1 -= (0, _v3.int)(_v2.paddingBottom);
  }, _v2.innerWidth = function (_v0) {
    let _v1 = _v0.clientWidth,
      _v2 = _v0.ownerDocument.defaultView.getComputedStyle(_v0);
    return _v1 -= (0, _v3.int)(_v2.paddingLeft), _v1 -= (0, _v3.int)(_v2.paddingRight);
  }, _v2.matchesSelector = _v7, _v2.matchesSelectorAndParentsTo = function (_v0, _v1, _v2) {
    let _v3 = _v0;
    do {
      if (_v7(_v3, _v1)) return !0;
      if (_v3 === _v2) break;
      _v3 = _v3.parentNode;
    } while (_v3);
    return !1;
  }, _v2.offsetXYFromParent = function (_v0, _v1, _v2) {
    let _v3 = _v1 === _v1.ownerDocument.body ? {
      left: 0,
      top: 0
    } : _v1.getBoundingClientRect();
    return {
      x: (_v0.clientX + _v1.scrollLeft - _v3.left) / _v2,
      y: (_v0.clientY + _v1.scrollTop - _v3.top) / _v2
    };
  }, _v2.outerHeight = function (_v0) {
    let _v1 = _v0.clientHeight,
      _v2 = _v0.ownerDocument.defaultView.getComputedStyle(_v0);
    return _v1 += (0, _v3.int)(_v2.borderTopWidth), _v1 += (0, _v3.int)(_v2.borderBottomWidth);
  }, _v2.outerWidth = function (_v0) {
    let _v1 = _v0.clientWidth,
      _v2 = _v0.ownerDocument.defaultView.getComputedStyle(_v0);
    return _v1 += (0, _v3.int)(_v2.borderLeftWidth), _v1 += (0, _v3.int)(_v2.borderRightWidth);
  }, _v2.removeClassName = _v11, _v2.removeEvent = function (_v0, _v1, _v2, _v3) {
    if (!_v0) return;
    let _v4 = {
      capture: !0,
      ..._v3
    };
    _v0.removeEventListener ? _v0.removeEventListener(_v1, _v2, _v4) : _v0.detachEvent ? _v0.detachEvent("on" + _v1, _v2) : _v0["on" + _v1] = null;
  }, _v2.scheduleRemoveUserSelectStyles = function (_v0) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      _v9(_v0);
    }) : _v9(_v0);
  };
  var _v3 = _v0.r(0),
    _v4 = _v5(_v0.r(0));
  function _v5(_v0, _v1) {
    if ("function" == typeof WeakMap) var _v2 = new WeakMap(),
      _v3 = new WeakMap();
    return (_v5 = function (_v0, _v1) {
      if (!_v1 && _v0 && _v0.__esModule) return _v0;
      var _v2,
        _v3,
        _v4 = {
          __proto__: null,
          default: _v0
        };
      if (null === _v0 || "object" != typeof _v0 && "function" != typeof _v0) return _v4;
      if (_v2 = _v1 ? _v3 : _v2) {
        if (_v2.has(_v0)) return _v2.get(_v0);
        _v2.set(_v0, _v4);
      }
      for (let _v0 in _v0) "default" !== _v0 && {}.hasOwnProperty.call(_v0, _v0) && ((_v3 = (_v2 = Object.defineProperty) && Object.getOwnPropertyDescriptor(_v0, _v0)) && (_v3.get || _v3.set) ? _v2(_v4, _v0, _v3) : _v4[_v0] = _v0[_v0]);
      return _v4;
    })(_v0, _v1);
  }
  let _v6 = "";
  function _v7(_v0, _v1) {
    return _v6 || (_v6 = (0, _v3.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (_v0) {
      return (0, _v3.isFunction)(_v0[_v0]);
    })), !!(0, _v3.isFunction)(_v0[_v6]) && _v0[_v6](_v1);
  }
  function _v8(_v0, _v1, _v2) {
    let {
        x: _v3,
        y: _v4
      } = _v0,
      _v5 = `translate(${_v3}${_v2},${_v4}${_v2})`;
    if (_v1) {
      let _v0 = `${"string" == typeof _v1.x ? _v1.x : _v1.x + _v2}`,
        _v1 = `${"string" == typeof _v1.y ? _v1.y : _v1.y + _v2}`;
      _v5 = `translate(${_v0}, ${_v1})` + _v5;
    }
    return _v5;
  }
  function _v9(_v0) {
    if (_v0) try {
      if (_v0.body && _v11(_v0.body, "react-draggable-transparent-selection"), _v0.selection) _v0.selection.empty();else {
        let _v0 = (_v0.defaultView || window).getSelection();
        _v0 && "Caret" !== _v0.type && _v0.removeAllRanges();
      }
    } catch (_v0) {}
  }
  function _v10(_v0, _v1) {
    _v0.classList ? _v0.classList.add(_v1) : _v0.className.match(RegExp(`(?:^|\\s)${_v1}(?!\\S)`)) || (_v0.className += ` ${_v1}`);
  }
  function _v11(_v0, _v1) {
    _v0.classList ? _v0.classList.remove(_v1) : _v0.className = _v0.className.replace(RegExp(`(?:^|\\s)${_v1}(?!\\S)`, "g"), "");
  }
}