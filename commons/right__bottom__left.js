{
  "use strict";

  let _v1,
    _v2 = ["top", "right", "bottom", "left"],
    _v3 = Math.min,
    _v4 = Math.max,
    _v5 = Math.round,
    _v6 = Math.floor,
    _v7 = _v0 => ({
      x: _v0,
      y: _v0
    }),
    _v8 = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
  function _v9(_v0, _v1) {
    return "function" == typeof _v0 ? _v0(_v1) : _v0;
  }
  function _v10(_v0) {
    return _v0.split("-")[0];
  }
  function _v11(_v0) {
    return _v0.split("-")[1];
  }
  function _v12(_v0) {
    return "x" === _v0 ? "y" : "x";
  }
  function _v13(_v0) {
    return "y" === _v0 ? "height" : "width";
  }
  function _v14(_v0) {
    let _v1 = _v0[0];
    return "t" === _v1 || "b" === _v1 ? "y" : "x";
  }
  function _v15(_v0) {
    return _v0.includes("start") ? _v0.replace("start", "end") : _v0.replace("end", "start");
  }
  let _v16 = ["left", "right"],
    _v17 = ["right", "left"],
    _v18 = ["top", "bottom"],
    _v19 = ["bottom", "top"];
  function _v20(_v0) {
    let _v1 = _v10(_v0);
    return _v8[_v1] + _v0.slice(_v1.length);
  }
  function _v21(_v0) {
    return "number" != typeof _v0 ? {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ..._v0
    } : {
      top: _v0,
      right: _v0,
      bottom: _v0,
      left: _v0
    };
  }
  function _v22(_v0) {
    let {
      x: _v1,
      y: _v2,
      width: _v3,
      height: _v4
    } = _v0;
    return {
      width: _v3,
      height: _v4,
      top: _v2,
      left: _v1,
      right: _v1 + _v3,
      bottom: _v2 + _v4,
      x: _v1,
      y: _v2
    };
  }
  function _v23(_v0, _v1, _v2) {
    let _v3,
      {
        reference: _v4,
        floating: _v5
      } = _v0,
      _v6 = _v14(_v1),
      _v7 = _v12(_v14(_v1)),
      _v8 = _v13(_v7),
      _v9 = _v10(_v1),
      _v10 = "y" === _v6,
      _v11 = _v4.x + _v4.width / 2 - _v5.width / 2,
      _v12 = _v4.y + _v4.height / 2 - _v5.height / 2,
      _v13 = _v4[_v8] / 2 - _v5[_v8] / 2;
    switch (_v9) {
      case "top":
        _v3 = {
          x: _v11,
          y: _v4.y - _v5.height
        };
        break;
      case "bottom":
        _v3 = {
          x: _v11,
          y: _v4.y + _v4.height
        };
        break;
      case "right":
        _v3 = {
          x: _v4.x + _v4.width,
          y: _v12
        };
        break;
      case "left":
        _v3 = {
          x: _v4.x - _v5.width,
          y: _v12
        };
        break;
      default:
        _v3 = {
          x: _v4.x,
          y: _v4.y
        };
    }
    switch (_v11(_v1)) {
      case "start":
        _v3[_v7] -= _v13 * (_v2 && _v10 ? -1 : 1);
        break;
      case "end":
        _v3[_v7] += _v13 * (_v2 && _v10 ? -1 : 1);
    }
    return _v3;
  }
  async function _v24(_v0, _v1) {
    var _v2;
    void 0 === _v1 && (_v1 = {});
    let {
        x: _v3,
        y: _v4,
        platform: _v5,
        rects: _v6,
        elements: _v7,
        strategy: _v8
      } = _v0,
      {
        boundary: _v9 = "clippingAncestors",
        rootBoundary: _v10 = "viewport",
        elementContext: _v11 = "floating",
        altBoundary: _v12 = !1,
        padding: _v13 = 0
      } = _v9(_v1, _v0),
      _v14 = _v21(_v13),
      _v15 = _v7[_v12 ? "floating" === _v11 ? "reference" : "floating" : _v11],
      _v16 = _v22(await _v5.getClippingRect({
        element: null == (_v2 = await (null == _v5.isElement ? void 0 : _v5.isElement(_v15))) || _v2 ? _v15 : _v15.contextElement || (await (null == _v5.getDocumentElement ? void 0 : _v5.getDocumentElement(_v7.floating))),
        boundary: _v9,
        rootBoundary: _v10,
        strategy: _v8
      })),
      _v17 = "floating" === _v11 ? {
        x: _v3,
        y: _v4,
        width: _v6.floating.width,
        height: _v6.floating.height
      } : _v6.reference,
      _v18 = await (null == _v5.getOffsetParent ? void 0 : _v5.getOffsetParent(_v7.floating)),
      _v19 = (await (null == _v5.isElement ? void 0 : _v5.isElement(_v18))) && (await (null == _v5.getScale ? void 0 : _v5.getScale(_v18))) || {
        x: 1,
        y: 1
      },
      _v20 = _v22(_v5.convertOffsetParentRelativeRectToViewportRelativeRect ? await _v5.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: _v7,
        rect: _v17,
        offsetParent: _v18,
        strategy: _v8
      }) : _v17);
    return {
      top: (_v16.top - _v20.top + _v14.top) / _v19.y,
      bottom: (_v20.bottom - _v16.bottom + _v14.bottom) / _v19.y,
      left: (_v16.left - _v20.left + _v14.left) / _v19.x,
      right: (_v20.right - _v16.right + _v14.right) / _v19.x
    };
  }
  let _v25 = async (_v0, _v1, _v2) => {
    let {
        placement: _v3 = "bottom",
        strategy: _v4 = "absolute",
        middleware: _v5 = [],
        platform: _v6
      } = _v2,
      _v7 = _v6.detectOverflow ? _v6 : {
        ..._v6,
        detectOverflow: _v24
      },
      _v8 = await (null == _v6.isRTL ? void 0 : _v6.isRTL(_v1)),
      _v9 = await _v6.getElementRects({
        reference: _v0,
        floating: _v1,
        strategy: _v4
      }),
      {
        x: _v10,
        y: _v11
      } = _v23(_v9, _v3, _v8),
      _v12 = _v3,
      _v13 = 0,
      _v14 = {};
    for (let _v0 = 0; _v0 < _v5.length; _v0++) {
      let _v0 = _v5[_v0];
      if (!_v0) continue;
      let {
          name: _v1,
          fn: _v2
        } = _v0,
        {
          x: _v3,
          y: _v4,
          data: _v5,
          reset: _v6
        } = await _v2({
          x: _v10,
          y: _v11,
          initialPlacement: _v3,
          placement: _v12,
          strategy: _v4,
          middlewareData: _v14,
          rects: _v9,
          platform: _v7,
          elements: {
            reference: _v0,
            floating: _v1
          }
        });
      _v10 = null != _v3 ? _v3 : _v10, _v11 = null != _v4 ? _v4 : _v11, _v14[_v1] = {
        ..._v14[_v1],
        ..._v5
      }, _v6 && _v13 < 50 && (_v13++, "object" == typeof _v6 && (_v6.placement && (_v12 = _v6.placement), _v6.rects && (_v9 = !0 === _v6.rects ? await _v6.getElementRects({
        reference: _v0,
        floating: _v1,
        strategy: _v4
      }) : _v6.rects), ({
        x: _v10,
        y: _v11
      } = _v23(_v9, _v12, _v8))), _v0 = -1);
    }
    return {
      x: _v10,
      y: _v11,
      placement: _v12,
      strategy: _v4,
      middlewareData: _v14
    };
  };
  function _v26(_v0, _v1) {
    return {
      top: _v0.top - _v1.height,
      right: _v0.right - _v1.width,
      bottom: _v0.bottom - _v1.height,
      left: _v0.left - _v1.width
    };
  }
  function _v27(_v0) {
    return _v2.some(_v0 => _v0[_v0] >= 0);
  }
  let _v28 = new Set(["left", "top"]);
  async function _v29(_v0, _v1) {
    let {
        placement: _v2,
        platform: _v3,
        elements: _v4
      } = _v0,
      _v5 = await (null == _v3.isRTL ? void 0 : _v3.isRTL(_v4.floating)),
      _v6 = _v10(_v2),
      _v7 = _v11(_v2),
      _v8 = "y" === _v14(_v2),
      _v9 = _v28.has(_v6) ? -1 : 1,
      _v10 = _v5 && _v8 ? -1 : 1,
      _v11 = _v9(_v1, _v0),
      {
        mainAxis: _v12,
        crossAxis: _v13,
        alignmentAxis: _v14
      } = "number" == typeof _v11 ? {
        mainAxis: _v11,
        crossAxis: 0,
        alignmentAxis: null
      } : {
        mainAxis: _v11.mainAxis || 0,
        crossAxis: _v11.crossAxis || 0,
        alignmentAxis: _v11.alignmentAxis
      };
    return _v7 && "number" == typeof _v14 && (_v13 = "end" === _v7 ? -1 * _v14 : _v14), _v8 ? {
      x: _v13 * _v10,
      y: _v12 * _v9
    } : {
      x: _v12 * _v9,
      y: _v13 * _v10
    };
  }
  function _v30() {
    return "u" > typeof window;
  }
  function _v31(_v0) {
    return _v34(_v0) ? (_v0.nodeName || "").toLowerCase() : "#document";
  }
  function _v32(_v0) {
    var _v1;
    return (null == _v0 || null == (_v1 = _v0.ownerDocument) ? void 0 : _v1.defaultView) || window;
  }
  function _v33(_v0) {
    var _v1;
    return null == (_v1 = (_v34(_v0) ? _v0.ownerDocument : _v0.document) || window.document) ? void 0 : _v1.documentElement;
  }
  function _v34(_v0) {
    return !!_v30() && (_v0 instanceof Node || _v0 instanceof _v32(_v0).Node);
  }
  function _v35(_v0) {
    return !!_v30() && (_v0 instanceof Element || _v0 instanceof _v32(_v0).Element);
  }
  function _v36(_v0) {
    return !!_v30() && (_v0 instanceof HTMLElement || _v0 instanceof _v32(_v0).HTMLElement);
  }
  function _v37(_v0) {
    return !(!_v30() || "u" < typeof ShadowRoot) && (_v0 instanceof ShadowRoot || _v0 instanceof _v32(_v0).ShadowRoot);
  }
  function _v38(_v0) {
    let {
      overflow: _v1,
      overflowX: _v2,
      overflowY: _v3,
      display: _v4
    } = _v46(_v0);
    return /auto|scroll|overlay|hidden|clip/.test(_v1 + _v3 + _v2) && "inline" !== _v4 && "contents" !== _v4;
  }
  function _v39(_v0) {
    try {
      if (_v0.matches(":popover-open")) return !0;
    } catch (_v0) {}
    try {
      return _v0.matches(":modal");
    } catch (_v0) {
      return !1;
    }
  }
  let _v40 = /transform|translate|scale|rotate|perspective|filter/,
    _v41 = /paint|layout|strict|content/,
    _v42 = _v0 => !!_v0 && "none" !== _v0;
  function _v43(_v0) {
    let _v1 = _v35(_v0) ? _v46(_v0) : _v0;
    return _v42(_v1.transform) || _v42(_v1.translate) || _v42(_v1.scale) || _v42(_v1.rotate) || _v42(_v1.perspective) || !_v44() && (_v42(_v1.backdropFilter) || _v42(_v1.filter)) || _v40.test(_v1.willChange || "") || _v41.test(_v1.contain || "");
  }
  function _v44() {
    return null == _v1 && (_v1 = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), _v1;
  }
  function _v45(_v0) {
    return /^(html|body|#document)$/.test(_v31(_v0));
  }
  function _v46(_v0) {
    return _v32(_v0).getComputedStyle(_v0);
  }
  function _v47(_v0) {
    return _v35(_v0) ? {
      scrollLeft: _v0.scrollLeft,
      scrollTop: _v0.scrollTop
    } : {
      scrollLeft: _v0.scrollX,
      scrollTop: _v0.scrollY
    };
  }
  function _v48(_v0) {
    if ("html" === _v31(_v0)) return _v0;
    let _v1 = _v0.assignedSlot || _v0.parentNode || _v37(_v0) && _v0.host || _v33(_v0);
    return _v37(_v1) ? _v1.host : _v1;
  }
  function _v49(_v0, _v1, _v2) {
    var _v3;
    void 0 === _v1 && (_v1 = []), void 0 === _v2 && (_v2 = !0);
    let _v4 = function _v0(_v1) {
        let _v2 = _v48(_v1);
        return _v45(_v2) ? _v1.ownerDocument ? _v1.ownerDocument.body : _v1.body : _v36(_v2) && _v38(_v2) ? _v2 : _v0(_v2);
      }(_v0),
      _v5 = _v4 === (null == (_v3 = _v0.ownerDocument) ? void 0 : _v3.body),
      _v6 = _v32(_v4);
    if (!_v5) return _v1.concat(_v4, _v49(_v4, [], _v2));
    {
      let _v0 = _v50(_v6);
      return _v1.concat(_v6, _v6.visualViewport || [], _v38(_v4) ? _v4 : [], _v0 && _v2 ? _v49(_v0) : []);
    }
  }
  function _v50(_v0) {
    return _v0.parent && Object.getPrototypeOf(_v0.parent) ? _v0.frameElement : null;
  }
  function _v51(_v0) {
    let _v1 = _v46(_v0),
      _v2 = parseFloat(_v1.width) || 0,
      _v3 = parseFloat(_v1.height) || 0,
      _v4 = _v36(_v0),
      _v5 = _v4 ? _v0.offsetWidth : _v2,
      _v6 = _v4 ? _v0.offsetHeight : _v3,
      _v7 = _v5(_v2) !== _v5 || _v5(_v3) !== _v6;
    return _v7 && (_v2 = _v5, _v3 = _v6), {
      width: _v2,
      height: _v3,
      $: _v7
    };
  }
  function _v52(_v0) {
    return _v35(_v0) ? _v0 : _v0.contextElement;
  }
  function _v53(_v0) {
    let _v1 = _v52(_v0);
    if (!_v36(_v1)) return _v7(1);
    let _v2 = _v1.getBoundingClientRect(),
      {
        width: _v3,
        height: _v4,
        $: _v5
      } = _v51(_v1),
      _v6 = (_v5 ? _v5(_v2.width) : _v2.width) / _v3,
      _v7 = (_v5 ? _v5(_v2.height) : _v2.height) / _v4;
    return _v6 && Number.isFinite(_v6) || (_v6 = 1), _v7 && Number.isFinite(_v7) || (_v7 = 1), {
      x: _v6,
      y: _v7
    };
  }
  let _v54 = _v7(0);
  function _v55(_v0) {
    let _v1 = _v32(_v0);
    return _v44() && _v1.visualViewport ? {
      x: _v1.visualViewport.offsetLeft,
      y: _v1.visualViewport.offsetTop
    } : _v54;
  }
  function _v56(_v0, _v1, _v2, _v3) {
    var _v4;
    void 0 === _v1 && (_v1 = !1), void 0 === _v2 && (_v2 = !1);
    let _v5 = _v0.getBoundingClientRect(),
      _v6 = _v52(_v0),
      _v7 = _v7(1);
    _v1 && (_v3 ? _v35(_v3) && (_v7 = _v53(_v3)) : _v7 = _v53(_v0));
    let _v8 = (void 0 === (_v4 = _v2) && (_v4 = !1), _v3 && (!_v4 || _v3 === _v32(_v6)) && _v4) ? _v55(_v6) : _v7(0),
      _v9 = (_v5.left + _v8.x) / _v7.x,
      _v10 = (_v5.top + _v8.y) / _v7.y,
      _v11 = _v5.width / _v7.x,
      _v12 = _v5.height / _v7.y;
    if (_v6) {
      let _v0 = _v32(_v6),
        _v1 = _v3 && _v35(_v3) ? _v32(_v3) : _v3,
        _v2 = _v0,
        _v3 = _v50(_v2);
      for (; _v3 && _v3 && _v1 !== _v2;) {
        let _v0 = _v53(_v3),
          _v1 = _v3.getBoundingClientRect(),
          _v2 = _v46(_v3),
          _v3 = _v1.left + (_v3.clientLeft + parseFloat(_v2.paddingLeft)) * _v0.x,
          _v4 = _v1.top + (_v3.clientTop + parseFloat(_v2.paddingTop)) * _v0.y;
        _v9 *= _v0.x, _v10 *= _v0.y, _v11 *= _v0.x, _v12 *= _v0.y, _v9 += _v3, _v10 += _v4, _v3 = _v50(_v2 = _v32(_v3));
      }
    }
    return _v22({
      width: _v11,
      height: _v12,
      x: _v9,
      y: _v10
    });
  }
  function _v57(_v0, _v1) {
    let _v2 = _v47(_v0).scrollLeft;
    return _v1 ? _v1.left + _v2 : _v56(_v33(_v0)).left + _v2;
  }
  function _v58(_v0, _v1, _v2) {
    void 0 === _v2 && (_v2 = !1);
    let _v3 = _v0.getBoundingClientRect();
    return {
      x: _v3.left + _v1.scrollLeft - (_v2 ? 0 : _v57(_v0, _v3)),
      y: _v3.top + _v1.scrollTop
    };
  }
  function _v59(_v0, _v1, _v2) {
    var _v3;
    let _v4;
    if ("viewport" === _v1) _v4 = function (_v0, _v1) {
      let _v2 = _v32(_v0),
        _v3 = _v33(_v0),
        _v4 = _v2.visualViewport,
        _v5 = _v3.clientWidth,
        _v6 = _v3.clientHeight,
        _v7 = 0,
        _v8 = 0;
      if (_v4) {
        _v5 = _v4.width, _v6 = _v4.height;
        let _v0 = _v44();
        (!_v0 || _v0 && "fixed" === _v1) && (_v7 = _v4.offsetLeft, _v8 = _v4.offsetTop);
      }
      return {
        width: _v5,
        height: _v6,
        x: _v7,
        y: _v8
      };
    }(_v0, _v2);else if ("document" === _v1) {
      let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
      _v3 = _v33(_v0), _v0 = _v33(_v3), _v1 = _v47(_v3), _v2 = _v3.ownerDocument.body, _v3 = _v4(_v0.scrollWidth, _v0.clientWidth, _v2.scrollWidth, _v2.clientWidth), _v4 = _v4(_v0.scrollHeight, _v0.clientHeight, _v2.scrollHeight, _v2.clientHeight), _v5 = -_v1.scrollLeft + _v57(_v3), _v6 = -_v1.scrollTop, "rtl" === _v46(_v2).direction && (_v5 += _v4(_v0.clientWidth, _v2.clientWidth) - _v3), _v4 = {
        width: _v3,
        height: _v4,
        x: _v5,
        y: _v6
      };
    } else if (_v35(_v1)) {
      let _v0, _v1, _v2, _v3, _v4, _v5;
      _v1 = (_v0 = _v56(_v1, !0, "fixed" === _v2)).top + _v1.clientTop, _v2 = _v0.left + _v1.clientLeft, _v3 = _v36(_v1) ? _v53(_v1) : _v7(1), _v4 = _v1.clientWidth * _v3.x, _v5 = _v1.clientHeight * _v3.y, _v4 = {
        width: _v4,
        height: _v5,
        x: _v2 * _v3.x,
        y: _v1 * _v3.y
      };
    } else {
      let _v0 = _v55(_v0);
      _v4 = {
        x: _v1.x - _v0.x,
        y: _v1.y - _v0.y,
        width: _v1.width,
        height: _v1.height
      };
    }
    return _v22(_v4);
  }
  function _v60(_v0) {
    return "static" === _v46(_v0).position;
  }
  function _v61(_v0, _v1) {
    if (!_v36(_v0) || "fixed" === _v46(_v0).position) return null;
    if (_v1) return _v1(_v0);
    let _v2 = _v0.offsetParent;
    return _v33(_v0) === _v2 && (_v2 = _v2.ownerDocument.body), _v2;
  }
  function _v62(_v0, _v1) {
    var _v2;
    let _v3 = _v32(_v0);
    if (_v39(_v0)) return _v3;
    if (!_v36(_v0)) {
      let _v0 = _v48(_v0);
      for (; _v0 && !_v45(_v0);) {
        if (_v35(_v0) && !_v60(_v0)) return _v0;
        _v0 = _v48(_v0);
      }
      return _v3;
    }
    let _v4 = _v61(_v0, _v1);
    for (; _v4 && (_v2 = _v4, /^(table|td|th)$/.test(_v31(_v2))) && _v60(_v4);) _v4 = _v61(_v4, _v1);
    return _v4 && _v45(_v4) && _v60(_v4) && !_v43(_v4) ? _v3 : _v4 || function (_v0) {
      let _v1 = _v48(_v0);
      for (; _v36(_v1) && !_v45(_v1);) {
        if (_v43(_v1)) return _v1;
        if (_v39(_v1)) break;
        _v1 = _v48(_v1);
      }
      return null;
    }(_v0) || _v3;
  }
  let _v63 = async function (_v0) {
      let _v1 = this.getOffsetParent || _v62,
        _v2 = this.getDimensions,
        _v3 = await _v2(_v0.floating);
      return {
        reference: function (_v0, _v1, _v2) {
          let _v3 = _v36(_v1),
            _v4 = _v33(_v1),
            _v5 = "fixed" === _v2,
            _v6 = _v56(_v0, !0, _v5, _v1),
            _v7 = {
              scrollLeft: 0,
              scrollTop: 0
            },
            _v8 = _v7(0);
          if (_v3 || !_v3 && !_v5) if (("body" !== _v31(_v1) || _v38(_v4)) && (_v7 = _v47(_v1)), _v3) {
            let _v0 = _v56(_v1, !0, _v5, _v1);
            _v8.x = _v0.x + _v1.clientLeft, _v8.y = _v0.y + _v1.clientTop;
          } else _v4 && (_v8.x = _v57(_v4));
          _v5 && !_v3 && _v4 && (_v8.x = _v57(_v4));
          let _v9 = !_v4 || _v3 || _v5 ? _v7(0) : _v58(_v4, _v7);
          return {
            x: _v6.left + _v7.scrollLeft - _v8.x - _v9.x,
            y: _v6.top + _v7.scrollTop - _v8.y - _v9.y,
            width: _v6.width,
            height: _v6.height
          };
        }(_v0.reference, await _v1(_v0.floating), _v0.strategy),
        floating: {
          x: 0,
          y: 0,
          width: _v3.width,
          height: _v3.height
        }
      };
    },
    _v64 = {
      convertOffsetParentRelativeRectToViewportRelativeRect: function (_v0) {
        let {
            elements: _v1,
            rect: _v2,
            offsetParent: _v3,
            strategy: _v4
          } = _v0,
          _v5 = "fixed" === _v4,
          _v6 = _v33(_v3),
          _v7 = !!_v1 && _v39(_v1.floating);
        if (_v3 === _v6 || _v7 && _v5) return _v2;
        let _v8 = {
            scrollLeft: 0,
            scrollTop: 0
          },
          _v9 = _v7(1),
          _v10 = _v7(0),
          _v11 = _v36(_v3);
        if ((_v11 || !_v11 && !_v5) && (("body" !== _v31(_v3) || _v38(_v6)) && (_v8 = _v47(_v3)), _v36(_v3))) {
          let _v0 = _v56(_v3);
          _v9 = _v53(_v3), _v10.x = _v0.x + _v3.clientLeft, _v10.y = _v0.y + _v3.clientTop;
        }
        let _v12 = !_v6 || _v11 || _v5 ? _v7(0) : _v58(_v6, _v8, !0);
        return {
          width: _v2.width * _v9.x,
          height: _v2.height * _v9.y,
          x: _v2.x * _v9.x - _v8.scrollLeft * _v9.x + _v10.x + _v12.x,
          y: _v2.y * _v9.y - _v8.scrollTop * _v9.y + _v10.y + _v12.y
        };
      },
      getDocumentElement: _v33,
      getClippingRect: function (_v0) {
        let {
            element: _v1,
            boundary: _v2,
            rootBoundary: _v3,
            strategy: _v4
          } = _v0,
          _v5 = [...("clippingAncestors" === _v2 ? _v39(_v1) ? [] : function (_v0, _v1) {
            let _v2 = _v1.get(_v0);
            if (_v2) return _v2;
            let _v3 = _v49(_v0, [], !1).filter(_v0 => _v35(_v0) && "body" !== _v31(_v0)),
              _v4 = null,
              _v5 = "fixed" === _v46(_v0).position,
              _v6 = _v5 ? _v48(_v0) : _v0;
            for (; _v35(_v6) && !_v45(_v6);) {
              let _v0 = _v46(_v6),
                _v1 = _v43(_v6);
              _v1 || "fixed" !== _v0.position || (_v4 = null), (_v5 ? !_v1 && !_v4 : !_v1 && "static" === _v0.position && !!_v4 && ["absolute", "fixed"].includes(_v4.position) || _v38(_v6) && !_v1 && function _v0(_v1, _v2) {
                let _v3 = _v48(_v1);
                return !(_v3 === _v2 || !_v35(_v3) || _v45(_v3)) && ("fixed" === _v46(_v3).position || _v0(_v3, _v2));
              }(_v0, _v6)) ? _v3 = _v3.filter(_v0 => _v0 !== _v6) : _v4 = _v0, _v6 = _v48(_v6);
            }
            return _v1.set(_v0, _v3), _v3;
          }(_v1, this._c) : [].concat(_v2)), _v3],
          _v6 = _v5[0],
          _v7 = _v5.reduce((_v0, _v1) => {
            let _v2 = _v59(_v1, _v1, _v4);
            return _v0.top = _v4(_v2.top, _v0.top), _v0.right = _v3(_v2.right, _v0.right), _v0.bottom = _v3(_v2.bottom, _v0.bottom), _v0.left = _v4(_v2.left, _v0.left), _v0;
          }, _v59(_v1, _v6, _v4));
        return {
          width: _v7.right - _v7.left,
          height: _v7.bottom - _v7.top,
          x: _v7.left,
          y: _v7.top
        };
      },
      getOffsetParent: _v62,
      getElementRects: _v63,
      getClientRects: function (_v0) {
        return Array.from(_v0.getClientRects());
      },
      getDimensions: function (_v0) {
        let {
          width: _v1,
          height: _v2
        } = _v51(_v0);
        return {
          width: _v1,
          height: _v2
        };
      },
      getScale: _v53,
      isElement: _v35,
      isRTL: function (_v0) {
        return "rtl" === _v46(_v0).direction;
      }
    };
  function _v65(_v0, _v1) {
    return _v0.x === _v1.x && _v0.y === _v1.y && _v0.width === _v1.width && _v0.height === _v1.height;
  }
  var _v66,
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  function _v69(_v0 = 0, _v1 = 0, _v2 = 0, _v3 = 0) {
    if ("function" == typeof DOMRect) return new DOMRect(_v0, _v1, _v2, _v3);
    let _v4 = {
      x: _v0,
      y: _v1,
      width: _v2,
      height: _v3,
      top: _v1,
      right: _v0 + _v2,
      bottom: _v1 + _v3,
      left: _v0
    };
    return {
      ..._v4,
      toJSON: () => _v4
    };
  }
  var _v70 = _v0 => ({
      variable: _v0,
      reference: `var(${_v0})`
    }),
    _v71 = {
      arrowSize: _v70("--arrow-size"),
      arrowSizeHalf: _v70("--arrow-size-half"),
      arrowBg: _v70("--arrow-background"),
      transformOrigin: _v70("--transform-origin"),
      arrowOffset: _v70("--arrow-offset")
    },
    _v72 = {
      name: "transformOrigin",
      fn({
        placement: _v0,
        elements: _v1,
        middlewareData: _v2
      }) {
        let {
            arrow: _v3
          } = _v2,
          _v4 = {
            top: "bottom center",
            "top-start": _v3 ? `${_v3.x}px bottom` : "left bottom",
            "top-end": _v3 ? `${_v3.x}px bottom` : "right bottom",
            bottom: "top center",
            "bottom-start": _v3 ? `${_v3.x}px top` : "top left",
            "bottom-end": _v3 ? `${_v3.x}px top` : "top right",
            left: "right center",
            "left-start": _v3 ? `right ${_v3.y}px` : "right top",
            "left-end": _v3 ? `right ${_v3.y}px` : "right bottom",
            right: "left center",
            "right-start": _v3 ? `left ${_v3.y}px` : "left top",
            "right-end": _v3 ? `left ${_v3.y}px` : "left bottom"
          }[_v0],
          {
            floating: _v5
          } = _v1;
        return _v5.style.setProperty(_v71.transformOrigin.variable, _v4), {
          data: {
            transformOrigin: _v4
          }
        };
      }
    },
    _v73 = {
      name: "rects",
      fn: ({
        rects: _v0
      }) => ({
        data: _v0
      })
    },
    _v74 = {
      strategy: "absolute",
      placement: "bottom",
      listeners: !0,
      gutter: 8,
      flip: !0,
      slide: !0,
      overlap: !1,
      sameWidth: !1,
      fitViewport: !1,
      overflowPadding: 8,
      arrowPadding: 4
    };
  function _v75(_v0, _v1) {
    let _v2 = _v0.devicePixelRatio || 1;
    return Math.round(_v1 * _v2) / _v2;
  }
  function _v76(_v0) {
    return (0, _v68.runIfFn)(_v0.boundary);
  }
  var _v77 = {
    bottom: "rotate(45deg)",
    left: "rotate(135deg)",
    top: "rotate(225deg)",
    right: "rotate(315deg)"
  };
  _v0.s(["getPlacement", 0, function (_v0, _v1, _v2 = {}) {
    let {
        defer: _v3,
        ..._v4
      } = _v2,
      _v5 = _v3 ? _v67.raf : _v0 => _v0(),
      _v6 = [];
    return _v6.push(_v5(() => {
      let _v0 = "function" == typeof _v0 ? _v0() : _v0,
        _v1 = "function" == typeof _v1 ? _v1() : _v1;
      _v6.push(function (_v0, _v1, _v2 = {}) {
        var _v3, _v4, _v5;
        let _v6 = (_v3 = _v2.getAnchorRect, {
          contextElement: (0, _v67.isHTMLElement)(_v0) ? _v0 : void 0,
          getBoundingClientRect: () => {
            let _v0 = _v3?.(_v0);
            return _v0 || !_v0 ? function (_v0) {
              if (!_v0) return _v69();
              let {
                x: _v1,
                y: _v2,
                width: _v3,
                height: _v4
              } = _v0;
              return _v69(_v1, _v2, _v3, _v4);
            }(_v0) : _v0.getBoundingClientRect();
          }
        });
        if (!_v1 || !_v6) return;
        let _v7 = Object.assign({}, _v74, _v2),
          _v8 = _v1.querySelector("[data-part=arrow]"),
          _v9 = [function (_v0, _v1) {
            if (!(0, _v68.isNull)(_v1.offset ?? _v1.gutter)) {
              var _v2;
              return void 0 === (_v2 = ({
                placement: _v0
              }) => {
                let _v1 = (_v0?.clientHeight || 0) / 2,
                  _v2 = _v1.offset?.mainAxis ?? _v1.gutter,
                  {
                    hasAlign: _v3
                  } = function (_v0) {
                    let [_v1, _v2] = _v0.split("-");
                    return {
                      side: _v1,
                      align: _v2,
                      hasAlign: null != _v2
                    };
                  }(_v0),
                  _v4 = _v3 ? void 0 : _v1.shift,
                  _v5 = _v1.offset?.crossAxis ?? _v4;
                return (0, _v68.compact)({
                  crossAxis: _v5,
                  mainAxis: "number" == typeof _v2 ? _v2 + _v1 : _v2 ?? _v1,
                  alignmentAxis: _v1.shift
                });
              }) && (_v2 = 0), {
                name: "offset",
                options: _v2,
                async fn(_v0) {
                  var _v1, _v2;
                  let {
                      x: _v3,
                      y: _v4,
                      placement: _v5,
                      middlewareData: _v6
                    } = _v0,
                    _v7 = await _v29(_v0, _v2);
                  return _v5 === (null == (_v1 = _v6.offset) ? void 0 : _v1.placement) && null != (_v2 = _v6.arrow) && _v2.alignmentOffset ? {} : {
                    x: _v3 + _v7.x,
                    y: _v4 + _v7.y,
                    data: {
                      ..._v7,
                      placement: _v5
                    }
                  };
                }
              };
            }
          }(_v8, _v7), function (_v0) {
            if (_v0.flip) {
              var _v1;
              return {
                name: "flip",
                options: _v1 = {
                  boundary: _v76(_v0),
                  padding: _v0.overflowPadding,
                  fallbackPlacements: !0 === _v0.flip ? void 0 : _v0.flip
                },
                async fn(_v0) {
                  var _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8;
                  let _v9,
                    _v10,
                    _v11,
                    {
                      placement: _v12,
                      middlewareData: _v13,
                      rects: _v14,
                      initialPlacement: _v15,
                      platform: _v16,
                      elements: _v17
                    } = _v0,
                    {
                      mainAxis: _v18 = !0,
                      crossAxis: _v19 = !0,
                      fallbackPlacements: _v20,
                      fallbackStrategy: _v21 = "bestFit",
                      fallbackAxisSideDirection: _v22 = "none",
                      flipAlignment: _v23 = !0,
                      ..._v24
                    } = _v9(_v1, _v0);
                  if (null != (_v1 = _v13.arrow) && _v1.alignmentOffset) return {};
                  let _v25 = _v10(_v12),
                    _v26 = _v14(_v15),
                    _v27 = _v10(_v15) === _v15,
                    _v28 = await (null == _v16.isRTL ? void 0 : _v16.isRTL(_v17.floating)),
                    _v29 = _v20 || (_v27 || !_v23 ? [_v20(_v15)] : (_v9 = _v20(_v15), [_v15(_v15), _v9, _v15(_v9)])),
                    _v30 = "none" !== _v22;
                  !_v20 && _v30 && _v29.push(...(_v10 = _v11(_v15), _v11 = function (_v0, _v1, _v2) {
                    switch (_v0) {
                      case "top":
                      case "bottom":
                        if (_v2) return _v1 ? _v17 : _v16;
                        return _v1 ? _v16 : _v17;
                      case "left":
                      case "right":
                        return _v1 ? _v18 : _v19;
                      default:
                        return [];
                    }
                  }(_v10(_v15), "start" === _v22, _v28), _v10 && (_v11 = _v11.map(_v0 => _v0 + "-" + _v10), _v23 && (_v11 = _v11.concat(_v11.map(_v15)))), _v11));
                  let _v31 = [_v15, ..._v29],
                    _v32 = await _v16.detectOverflow(_v0, _v24),
                    _v33 = [],
                    _v34 = (null == (_v2 = _v13.flip) ? void 0 : _v2.overflows) || [];
                  if (_v18 && _v33.push(_v32[_v25]), _v19) {
                    let _v0,
                      _v1,
                      _v2,
                      _v3,
                      _v4 = (_v6 = _v12, _v7 = _v14, void 0 === (_v8 = _v28) && (_v8 = !1), _v0 = _v11(_v6), _v2 = _v13(_v1 = _v12(_v14(_v6))), _v3 = "x" === _v1 ? _v0 === (_v8 ? "end" : "start") ? "right" : "left" : "start" === _v0 ? "bottom" : "top", _v7.reference[_v2] > _v7.floating[_v2] && (_v3 = _v20(_v3)), [_v3, _v20(_v3)]);
                    _v33.push(_v32[_v4[0]], _v32[_v4[1]]);
                  }
                  if (_v34 = [..._v34, {
                    placement: _v12,
                    overflows: _v33
                  }], !_v33.every(_v0 => _v0 <= 0)) {
                    let _v0 = ((null == (_v3 = _v13.flip) ? void 0 : _v3.index) || 0) + 1,
                      _v1 = _v31[_v0];
                    if (_v1 && ("alignment" !== _v19 || _v26 === _v14(_v1) || _v34.every(_v0 => _v14(_v0.placement) !== _v26 || _v0.overflows[0] > 0))) return {
                      data: {
                        index: _v0,
                        overflows: _v34
                      },
                      reset: {
                        placement: _v1
                      }
                    };
                    let _v2 = null == (_v4 = _v34.filter(_v0 => _v0.overflows[0] <= 0).sort((_v0, _v1) => _v0.overflows[1] - _v1.overflows[1])[0]) ? void 0 : _v4.placement;
                    if (!_v2) switch (_v21) {
                      case "bestFit":
                        {
                          let _v0 = null == (_v5 = _v34.filter(_v0 => {
                            if (_v30) {
                              let _v0 = _v14(_v0.placement);
                              return _v0 === _v26 || "y" === _v0;
                            }
                            return !0;
                          }).map(_v0 => [_v0.placement, _v0.overflows.filter(_v0 => _v0 > 0).reduce((_v0, _v1) => _v0 + _v1, 0)]).sort((_v0, _v1) => _v0[1] - _v1[1])[0]) ? void 0 : _v5[0];
                          _v0 && (_v2 = _v0);
                          break;
                        }
                      case "initialPlacement":
                        _v2 = _v15;
                    }
                    if (_v12 !== _v2) return {
                      reset: {
                        placement: _v2
                      }
                    };
                  }
                  return {};
                }
              };
            }
          }(_v7), function (_v0) {
            if (_v0.slide || _v0.overlap) {
              var _v1, _v2;
              return {
                name: "shift",
                options: _v2 = {
                  boundary: _v76(_v0),
                  mainAxis: _v0.slide,
                  crossAxis: _v0.overlap,
                  padding: _v0.overflowPadding,
                  limiter: (void 0 === _v1 && (_v1 = {}), {
                    options: _v1,
                    fn(_v0) {
                      let {
                          x: _v1,
                          y: _v2,
                          placement: _v3,
                          rects: _v4,
                          middlewareData: _v5
                        } = _v0,
                        {
                          offset: _v6 = 0,
                          mainAxis: _v7 = !0,
                          crossAxis: _v8 = !0
                        } = _v9(_v1, _v0),
                        _v9 = {
                          x: _v1,
                          y: _v2
                        },
                        _v10 = _v14(_v3),
                        _v11 = _v12(_v10),
                        _v12 = _v9[_v11],
                        _v13 = _v9[_v10],
                        _v14 = _v9(_v6, _v0),
                        _v15 = "number" == typeof _v14 ? {
                          mainAxis: _v14,
                          crossAxis: 0
                        } : {
                          mainAxis: 0,
                          crossAxis: 0,
                          ..._v14
                        };
                      if (_v7) {
                        let _v0 = "y" === _v11 ? "height" : "width",
                          _v1 = _v4.reference[_v11] - _v4.floating[_v0] + _v15.mainAxis,
                          _v2 = _v4.reference[_v11] + _v4.reference[_v0] - _v15.mainAxis;
                        _v12 < _v1 ? _v12 = _v1 : _v12 > _v2 && (_v12 = _v2);
                      }
                      if (_v8) {
                        var _v16, _v17;
                        let _v0 = "y" === _v11 ? "width" : "height",
                          _v1 = _v28.has(_v10(_v3)),
                          _v2 = _v4.reference[_v10] - _v4.floating[_v0] + (_v1 && (null == (_v16 = _v5.offset) ? void 0 : _v16[_v10]) || 0) + (_v1 ? 0 : _v15.crossAxis),
                          _v3 = _v4.reference[_v10] + _v4.reference[_v0] + (_v1 ? 0 : (null == (_v17 = _v5.offset) ? void 0 : _v17[_v10]) || 0) - (_v1 ? _v15.crossAxis : 0);
                        _v13 < _v2 ? _v13 = _v2 : _v13 > _v3 && (_v13 = _v3);
                      }
                      return {
                        [_v11]: _v12,
                        [_v10]: _v13
                      };
                    }
                  })
                },
                async fn(_v0) {
                  let {
                      x: _v1,
                      y: _v2,
                      placement: _v3,
                      platform: _v4
                    } = _v0,
                    {
                      mainAxis: _v5 = !0,
                      crossAxis: _v6 = !1,
                      limiter: _v7 = {
                        fn: _v0 => {
                          let {
                            x: _v1,
                            y: _v2
                          } = _v0;
                          return {
                            x: _v1,
                            y: _v2
                          };
                        }
                      },
                      ..._v8
                    } = _v9(_v2, _v0),
                    _v9 = {
                      x: _v1,
                      y: _v2
                    },
                    _v10 = await _v4.detectOverflow(_v0, _v8),
                    _v11 = _v14(_v10(_v3)),
                    _v12 = _v12(_v11),
                    _v13 = _v9[_v12],
                    _v14 = _v9[_v11];
                  if (_v5) {
                    let _v0 = "y" === _v12 ? "top" : "left",
                      _v1 = "y" === _v12 ? "bottom" : "right",
                      _v2 = _v13 + _v10[_v0],
                      _v3 = _v13 - _v10[_v1];
                    _v13 = _v4(_v2, _v3(_v13, _v3));
                  }
                  if (_v6) {
                    let _v0 = "y" === _v11 ? "top" : "left",
                      _v1 = "y" === _v11 ? "bottom" : "right",
                      _v2 = _v14 + _v10[_v0],
                      _v3 = _v14 - _v10[_v1];
                    _v14 = _v4(_v2, _v3(_v14, _v3));
                  }
                  let _v15 = _v7.fn({
                    ..._v0,
                    [_v12]: _v13,
                    [_v11]: _v14
                  });
                  return {
                    ..._v15,
                    data: {
                      x: _v15.x - _v1,
                      y: _v15.y - _v2,
                      enabled: {
                        [_v12]: _v5,
                        [_v11]: _v6
                      }
                    }
                  };
                }
              };
            }
          }(_v7), function (_v0, _v1) {
            if (_v0) {
              let _v0;
              return {
                name: "arrow",
                options: _v0 = {
                  element: _v0,
                  padding: _v1.arrowPadding
                },
                async fn(_v0) {
                  let {
                      x: _v1,
                      y: _v2,
                      placement: _v3,
                      rects: _v4,
                      platform: _v5,
                      elements: _v6,
                      middlewareData: _v7
                    } = _v0,
                    {
                      element: _v8,
                      padding: _v9 = 0
                    } = _v9(_v0, _v0) || {};
                  if (null == _v8) return {};
                  let _v10 = _v21(_v9),
                    _v11 = {
                      x: _v1,
                      y: _v2
                    },
                    _v12 = _v12(_v14(_v3)),
                    _v13 = _v13(_v12),
                    _v14 = await _v5.getDimensions(_v8),
                    _v15 = "y" === _v12,
                    _v16 = _v15 ? "clientHeight" : "clientWidth",
                    _v17 = _v4.reference[_v13] + _v4.reference[_v12] - _v11[_v12] - _v4.floating[_v13],
                    _v18 = _v11[_v12] - _v4.reference[_v12],
                    _v19 = await (null == _v5.getOffsetParent ? void 0 : _v5.getOffsetParent(_v8)),
                    _v20 = _v19 ? _v19[_v16] : 0;
                  _v20 && (await (null == _v5.isElement ? void 0 : _v5.isElement(_v19))) || (_v20 = _v6.floating[_v16] || _v4.floating[_v13]);
                  let _v21 = _v20 / 2 - _v14[_v13] / 2 - 1,
                    _v22 = _v3(_v10[_v15 ? "top" : "left"], _v21),
                    _v23 = _v3(_v10[_v15 ? "bottom" : "right"], _v21),
                    _v24 = _v20 - _v14[_v13] - _v23,
                    _v25 = _v20 / 2 - _v14[_v13] / 2 + (_v17 / 2 - _v18 / 2),
                    _v26 = _v4(_v22, _v3(_v25, _v24)),
                    _v27 = !_v7.arrow && null != _v11(_v3) && _v25 !== _v26 && _v4.reference[_v13] / 2 - (_v25 < _v22 ? _v22 : _v23) - _v14[_v13] / 2 < 0,
                    _v28 = _v27 ? _v25 < _v22 ? _v25 - _v22 : _v25 - _v24 : 0;
                  return {
                    [_v12]: _v11[_v12] + _v28,
                    data: {
                      [_v12]: _v26,
                      centerOffset: _v25 - _v26 - _v28,
                      ...(_v27 && {
                        alignmentOffset: _v28
                      })
                    },
                    reset: _v27
                  };
                }
              };
            }
          }(_v8, _v7), (_v0 => {
            if (_v0) return {
              name: "shiftArrow",
              fn({
                placement: _v0,
                middlewareData: _v1
              }) {
                if (!_v1.arrow) return {};
                let {
                    x: _v2,
                    y: _v3
                  } = _v1.arrow,
                  _v4 = _v0.split("-")[0];
                return Object.assign(_v0.style, {
                  left: null != _v2 ? `${_v2}px` : "",
                  top: null != _v3 ? `${_v3}px` : "",
                  [_v4]: `calc(100% + ${_v71.arrowOffset.reference})`
                }), {};
              }
            };
          })(_v8), _v72, {
            name: "size",
            options: _v4 = {
              padding: _v7.overflowPadding,
              apply({
                elements: _v0,
                rects: _v1,
                availableHeight: _v2,
                availableWidth: _v3
              }) {
                let _v4 = _v0.floating,
                  _v5 = Math.round(_v1.reference.width);
                _v3 = Math.floor(_v3), _v2 = Math.floor(_v2), _v4.style.setProperty("--reference-width", `${_v5}px`), _v4.style.setProperty("--available-width", `${_v3}px`), _v4.style.setProperty("--available-height", `${_v2}px`);
              }
            },
            async fn(_v0) {
              var _v1, _v2;
              let _v3,
                _v4,
                {
                  placement: _v5,
                  rects: _v6,
                  platform: _v7,
                  elements: _v8
                } = _v0,
                {
                  apply: _v9 = () => {},
                  ..._v10
                } = _v9(_v4, _v0),
                _v11 = await _v7.detectOverflow(_v0, _v10),
                _v12 = _v10(_v5),
                _v13 = _v11(_v5),
                _v14 = "y" === _v14(_v5),
                {
                  width: _v15,
                  height: _v16
                } = _v6.floating;
              "top" === _v12 || "bottom" === _v12 ? (_v3 = _v12, _v4 = _v13 === ((await (null == _v7.isRTL ? void 0 : _v7.isRTL(_v8.floating))) ? "start" : "end") ? "left" : "right") : (_v4 = _v12, _v3 = "end" === _v13 ? "top" : "bottom");
              let _v17 = _v16 - _v11.top - _v11.bottom,
                _v18 = _v15 - _v11.left - _v11.right,
                _v19 = _v3(_v16 - _v11[_v3], _v17),
                _v20 = _v3(_v15 - _v11[_v4], _v18),
                _v21 = !_v0.middlewareData.shift,
                _v22 = _v19,
                _v23 = _v20;
              if (null != (_v1 = _v0.middlewareData.shift) && _v1.enabled.x && (_v23 = _v18), null != (_v2 = _v0.middlewareData.shift) && _v2.enabled.y && (_v22 = _v17), _v21 && !_v13) {
                let _v0 = _v4(_v11.left, 0),
                  _v1 = _v4(_v11.right, 0),
                  _v2 = _v4(_v11.top, 0),
                  _v3 = _v4(_v11.bottom, 0);
                _v14 ? _v23 = _v15 - 2 * (0 !== _v0 || 0 !== _v1 ? _v0 + _v1 : _v4(_v11.left, _v11.right)) : _v22 = _v16 - 2 * (0 !== _v2 || 0 !== _v3 ? _v2 + _v3 : _v4(_v11.top, _v11.bottom));
              }
              await _v9({
                ..._v0,
                availableWidth: _v23,
                availableHeight: _v22
              });
              let _v24 = await _v7.getDimensions(_v8.floating);
              return _v15 !== _v24.width || _v16 !== _v24.height ? {
                reset: {
                  rects: !0
                }
              } : {};
            }
          }, function (_v0) {
            if (_v0.hideWhenDetached) {
              var _v1;
              return {
                name: "hide",
                options: _v1 = {
                  strategy: "referenceHidden",
                  boundary: _v0.boundary?.() ?? "clippingAncestors"
                },
                async fn(_v0) {
                  let {
                      rects: _v1,
                      platform: _v2
                    } = _v0,
                    {
                      strategy: _v3 = "referenceHidden",
                      ..._v4
                    } = _v9(_v1, _v0);
                  switch (_v3) {
                    case "referenceHidden":
                      {
                        let _v0 = _v26(await _v2.detectOverflow(_v0, {
                          ..._v4,
                          elementContext: "reference"
                        }), _v1.reference);
                        return {
                          data: {
                            referenceHiddenOffsets: _v0,
                            referenceHidden: _v27(_v0)
                          }
                        };
                      }
                    case "escaped":
                      {
                        let _v0 = _v26(await _v2.detectOverflow(_v0, {
                          ..._v4,
                          altBoundary: !0
                        }), _v1.floating);
                        return {
                          data: {
                            escapedOffsets: _v0,
                            escaped: _v27(_v0)
                          }
                        };
                      }
                    default:
                      return {};
                  }
                }
              };
            }
          }(_v7), _v73],
          {
            placement: _v10,
            strategy: _v11,
            onComplete: _v12,
            onPositioned: _v13
          } = _v7,
          _v14 = async () => {
            var _v0;
            let _v1, _v2, _v3;
            if (!_v6 || !_v1) return;
            let _v4 = await (_v0 = {
              placement: _v10,
              middleware: _v9,
              strategy: _v11
            }, _v1 = new Map(), _v3 = {
              ...(_v2 = {
                platform: _v64,
                ..._v0
              }).platform,
              _c: _v1
            }, _v25(_v6, _v1, {
              ..._v2,
              platform: _v3
            }));
            _v12?.(_v4), _v13?.({
              placed: !0
            });
            let _v5 = (0, _v67.getWindow)(_v1),
              _v6 = _v75(_v5, _v4.x),
              _v7 = _v75(_v5, _v4.y);
            _v1.style.setProperty("--x", `${_v6}px`), _v1.style.setProperty("--y", `${_v7}px`), _v7.hideWhenDetached && (_v4.middlewareData.hide?.referenceHidden ? (_v1.style.setProperty("visibility", "hidden"), _v1.style.setProperty("pointer-events", "none")) : (_v1.style.removeProperty("visibility"), _v1.style.removeProperty("pointer-events")));
            let _v8 = _v1.firstElementChild;
            if (_v8) {
              let _v0 = (0, _v67.getComputedStyle)(_v8);
              _v1.style.setProperty("--z-index", _v0.zIndex);
            }
          },
          _v15 = async () => {
            _v2.updatePosition ? (await _v2.updatePosition({
              updatePosition: _v14
            }), _v13?.({
              placed: !0
            })) : await _v14();
          },
          _v16 = (_v5 = _v7.listeners) ? !0 === _v5 ? {
            ancestorResize: !0,
            ancestorScroll: !0,
            elementResize: !0,
            layoutShift: !0
          } : _v5 : {},
          _v17 = _v7.listeners ? function (_v0, _v1, _v2, _v3) {
            let _v4;
            void 0 === _v3 && (_v3 = {});
            let {
                ancestorScroll: _v5 = !0,
                ancestorResize: _v6 = !0,
                elementResize: _v7 = "function" == typeof ResizeObserver,
                layoutShift: _v8 = "function" == typeof IntersectionObserver,
                animationFrame: _v9 = !1
              } = _v3,
              _v10 = _v52(_v0),
              _v11 = _v5 || _v6 ? [...(_v10 ? _v49(_v10) : []), ..._v49(_v1)] : [];
            _v11.forEach(_v0 => {
              _v5 && _v0.addEventListener("scroll", _v2, {
                passive: !0
              }), _v6 && _v0.addEventListener("resize", _v2);
            });
            let _v12 = _v10 && _v8 ? function (_v0, _v1) {
                let _v2,
                  _v3 = null,
                  _v4 = _v33(_v0);
                function _v5() {
                  var _v0;
                  clearTimeout(_v2), null == (_v0 = _v3) || _v0.disconnect(), _v3 = null;
                }
                return !function _v0(_v1, _v2) {
                  void 0 === _v1 && (_v1 = !1), void 0 === _v2 && (_v2 = 1), _v5();
                  let _v3 = _v0.getBoundingClientRect(),
                    {
                      left: _v4,
                      top: _v5,
                      width: _v6,
                      height: _v7
                    } = _v3;
                  if (_v1 || _v1(), !_v6 || !_v7) return;
                  let _v8 = {
                      rootMargin: -_v6(_v5) + "px " + -_v6(_v4.clientWidth - (_v4 + _v6)) + "px " + -_v6(_v4.clientHeight - (_v5 + _v7)) + "px " + -_v6(_v4) + "px",
                      threshold: _v4(0, _v3(1, _v2)) || 1
                    },
                    _v9 = !0;
                  function _v10(_v0) {
                    let _v1 = _v0[0].intersectionRatio;
                    if (_v1 !== _v2) {
                      if (!_v9) return _v0();
                      _v1 ? _v0(!1, _v1) : _v2 = setTimeout(() => {
                        _v0(!1, 1e-7);
                      }, 0);
                    }
                    1 !== _v1 || _v65(_v3, _v0.getBoundingClientRect()) || _v0(), _v9 = !1;
                  }
                  try {
                    _v3 = new IntersectionObserver(_v10, {
                      ..._v8,
                      root: _v4.ownerDocument
                    });
                  } catch (_v0) {
                    _v3 = new IntersectionObserver(_v10, _v8);
                  }
                  _v3.observe(_v0);
                }(!0), _v5;
              }(_v10, _v2) : null,
              _v13 = -1,
              _v14 = null;
            _v7 && (_v14 = new ResizeObserver(_v0 => {
              let [_v1] = _v0;
              _v1 && _v1.target === _v10 && _v14 && (_v14.unobserve(_v1), cancelAnimationFrame(_v13), _v13 = requestAnimationFrame(() => {
                var _v0;
                null == (_v0 = _v14) || _v0.observe(_v1);
              })), _v2();
            }), _v10 && !_v9 && _v14.observe(_v10), _v14.observe(_v1));
            let _v15 = _v9 ? _v56(_v0) : null;
            return _v9 && function _v0() {
              let _v1 = _v56(_v0);
              _v15 && !_v65(_v15, _v1) && _v2(), _v15 = _v1, _v4 = requestAnimationFrame(_v0);
            }(), _v2(), () => {
              var _v0;
              _v11.forEach(_v0 => {
                _v5 && _v0.removeEventListener("scroll", _v2), _v6 && _v0.removeEventListener("resize", _v2);
              }), null == _v12 || _v12(), null == (_v0 = _v14) || _v0.disconnect(), _v14 = null, _v9 && cancelAnimationFrame(_v4);
            };
          }(_v6, _v1, _v15, _v16) : _v68.noop;
        return _v15(), () => {
          _v17?.(), _v13?.({
            placed: !1
          });
        };
      }(_v0, _v1, _v4));
    })), () => {
      _v6.forEach(_v0 => _v0?.());
    };
  }, "getPlacementSide", 0, function (_v0) {
    return _v0.split("-")[0];
  }, "getPlacementStyles", 0, function (_v0 = {}) {
    let {
      placement: _v1,
      sameWidth: _v2,
      fitViewport: _v3,
      strategy: _v4 = "absolute"
    } = _v0;
    return {
      arrow: {
        position: "absolute",
        width: _v71.arrowSize.reference,
        height: _v71.arrowSize.reference,
        [_v71.arrowSizeHalf.variable]: `calc(${_v71.arrowSize.reference} / 2)`,
        [_v71.arrowOffset.variable]: `calc(${_v71.arrowSizeHalf.reference} * -1)`
      },
      arrowTip: {
        transform: _v1 ? _v77[_v1.split("-")[0]] : void 0,
        background: _v71.arrowBg.reference,
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "inherit"
      },
      floating: {
        position: _v4,
        isolation: "isolate",
        minWidth: _v2 ? void 0 : "max-content",
        width: _v2 ? "var(--reference-width)" : void 0,
        maxWidth: _v3 ? "var(--available-width)" : void 0,
        maxHeight: _v3 ? "var(--available-height)" : void 0,
        pointerEvents: _v1 ? void 0 : "none",
        top: "0px",
        left: "0px",
        transform: _v1 ? "translate3d(var(--x), var(--y), 0)" : "translate3d(0, -100vh, 0)",
        zIndex: "var(--z-index)"
      }
    };
  }], 0);
  var _v78 = "pointerdown.outside",
    _v79 = "focus.outside";
  function _v80(_v0, _v1) {
    if (!_v1 || !("clientY" in _v0)) return !1;
    let _v2 = _v1.scrollHeight > _v1.clientHeight,
      _v3 = _v2 && _v0.clientX > _v1.offsetLeft + _v1.clientWidth,
      _v4 = _v1.scrollWidth > _v1.clientWidth,
      _v5 = _v4 && _v0.clientY > _v1.offsetTop + _v1.clientHeight,
      _v6 = {
        x: _v1.offsetLeft,
        y: _v1.offsetTop,
        width: _v1.clientWidth + 16 * !!_v2,
        height: _v1.clientHeight + 16 * !!_v4
      },
      _v7 = {
        x: _v0.clientX,
        y: _v0.clientY
      };
    return _v6.y <= _v7.y && _v7.y <= _v6.y + _v6.height && _v6.x <= _v7.x && _v7.x <= _v6.x + _v6.width && (_v3 || _v5);
  }
  function _v81(_v0, _v1) {
    let {
        defer: _v2
      } = _v1,
      _v3 = _v2 ? _v67.raf : _v0 => _v0(),
      _v4 = [];
    return _v4.push(_v3(() => {
      let _v0 = "function" == typeof _v0 ? _v0() : _v0;
      _v4.push(function (_v0, _v1) {
        let _v2,
          _v3,
          {
            exclude: _v4,
            onFocusOutside: _v5,
            onPointerDownOutside: _v6,
            onInteractOutside: _v7,
            defer: _v8
          } = _v1;
        if (!_v0) return;
        let _v9 = (0, _v67.getDocument)(_v0),
          _v10 = (0, _v67.getWindow)(_v0),
          _v11 = _v2 = {
            each(_v0) {
              for (let _v0 = 0; _v0 < _v10.frames?.length; _v0 += 1) {
                let _v0 = _v10.frames[_v0];
                _v0 && _v0(_v0);
              }
            },
            addEventListener: (_v0, _v1, _v2) => (_v2.each(_v0 => {
              try {
                _v0.document.addEventListener(_v0, _v1, _v2);
              } catch {}
            }), () => {
              try {
                _v2.removeEventListener(_v0, _v1, _v2);
              } catch {}
            }),
            removeEventListener(_v0, _v1, _v2) {
              _v2.each(_v0 => {
                try {
                  _v0.document.removeEventListener(_v0, _v1, _v2);
                } catch {}
              });
            }
          },
          _v12 = (_v3 = null != _v10.frameElement ? _v10.parent : null, {
            addEventListener: (_v0, _v1, _v2) => {
              try {
                _v3?.addEventListener(_v0, _v1, _v2);
              } catch {}
              return () => {
                try {
                  _v3?.removeEventListener(_v0, _v1, _v2);
                } catch {}
              };
            },
            removeEventListener: (_v0, _v1, _v2) => {
              try {
                _v3?.removeEventListener(_v0, _v1, _v2);
              } catch {}
            }
          });
        function _v13(_v0, _v1) {
          if (!(0, _v67.isHTMLElement)(_v1) || !_v1.isConnected || (0, _v67.contains)(_v0, _v1) || function (_v0, _v1) {
            if (!("clientY" in _v1) || !_v0) return !1;
            let _v2 = _v0.getBoundingClientRect();
            return 0 !== _v2.width && 0 !== _v2.height && _v2.top <= _v1.clientY && _v1.clientY <= _v2.top + _v2.height && _v2.left <= _v1.clientX && _v1.clientX <= _v2.left + _v2.width;
          }(_v0, _v0)) return !1;
          let _v2 = _v9.querySelector(`[aria-controls="${_v0.id}"]`);
          return !(_v2 && _v80(_v0, (0, _v67.getNearestOverflowAncestor)(_v2))) && !_v80(_v0, (0, _v67.getNearestOverflowAncestor)(_v0)) && !_v4?.(_v1);
        }
        let _v14 = new Set(),
          _v15 = (0, _v67.isShadowRoot)(_v0?.getRootNode());
        function _v16(_v0) {
          function _v1(_v0) {
            let _v1 = _v8 && !(0, _v67.isTouchDevice)() ? _v67.raf : _v0 => _v0(),
              _v2 = _v0 ?? _v0,
              _v3 = _v2?.composedPath?.() ?? [_v2?.target];
            _v1(() => {
              let _v0 = _v15 ? _v3[0] : (0, _v67.getEventTarget)(_v0);
              if (_v0 && _v13(_v0, _v0)) {
                if (_v6 || _v7) {
                  let _v0 = (0, _v68.callAll)(_v6, _v7);
                  _v0.addEventListener(_v78, _v0, {
                    once: !0
                  });
                }
                _v82(_v0, _v78, {
                  bubbles: !1,
                  cancelable: !0,
                  detail: {
                    originalEvent: _v2,
                    contextmenu: (0, _v67.isContextMenuEvent)(_v2),
                    focusable: function (_v0) {
                      for (let _v0 of _v0) if ((0, _v67.isHTMLElement)(_v0) && (0, _v67.isFocusable)(_v0)) return !0;
                      return !1;
                    }(_v3),
                    target: _v0
                  }
                });
              }
            });
          }
          "touch" === _v0.pointerType ? (_v14.forEach(_v0 => _v0()), _v14.add((0, _v67.addDomEvent)(_v9, "click", _v1, {
            once: !0
          })), _v14.add(_v12.addEventListener("click", _v1, {
            once: !0
          })), _v14.add(_v11.addEventListener("click", _v1, {
            once: !0
          }))) : _v1();
        }
        let _v17 = new Set(),
          _v18 = setTimeout(() => {
            _v17.add((0, _v67.addDomEvent)(_v9, "pointerdown", _v16, !0)), _v17.add(_v12.addEventListener("pointerdown", _v16, !0)), _v17.add(_v11.addEventListener("pointerdown", _v16, !0));
          }, 0);
        function _v19(_v0) {
          (_v8 ? _v67.raf : _v0 => _v0())(() => {
            let _v0 = (0, _v67.getEventTarget)(_v0);
            if (_v0 && _v13(_v0, _v0)) {
              if (_v5 || _v7) {
                let _v0 = (0, _v68.callAll)(_v5, _v7);
                _v0.addEventListener(_v79, _v0, {
                  once: !0
                });
              }
              _v82(_v0, _v79, {
                bubbles: !1,
                cancelable: !0,
                detail: {
                  originalEvent: _v0,
                  contextmenu: !1,
                  focusable: (0, _v67.isFocusable)(_v0),
                  target: _v0
                }
              });
            }
          });
        }
        return (0, _v67.isTouchDevice)() || (_v17.add((0, _v67.addDomEvent)(_v9, "focusin", _v19, !0)), _v17.add(_v12.addEventListener("focusin", _v19, !0)), _v17.add(_v11.addEventListener("focusin", _v19, !0))), () => {
          clearTimeout(_v18), _v14.forEach(_v0 => _v0()), _v17.forEach(_v0 => _v0());
        };
      }(_v0, _v1));
    })), () => {
      _v4.forEach(_v0 => _v0?.());
    };
  }
  function _v82(_v0, _v1, _v2) {
    let _v3 = new (_v0.ownerDocument.defaultView || window).CustomEvent(_v1, _v2);
    return _v0.dispatchEvent(_v3);
  }
  _v0.s(["trackInteractOutside", 0, _v81], 0);
  var _v83 = {
    layers: [],
    branches: [],
    count() {
      return this.layers.length;
    },
    pointerBlockingLayers() {
      return this.layers.filter(_v0 => _v0.pointerBlocking);
    },
    topMostPointerBlockingLayer() {
      return [...this.pointerBlockingLayers()].slice(-1)[0];
    },
    hasPointerBlockingLayer() {
      return this.pointerBlockingLayers().length > 0;
    },
    isBelowPointerBlockingLayer(_v0) {
      return this.indexOf(_v0) < (this.topMostPointerBlockingLayer() ? this.indexOf(this.topMostPointerBlockingLayer()?.node) : -1);
    },
    isTopMost(_v0) {
      let _v1 = this.layers[this.count() - 1];
      return _v1?.node === _v0;
    },
    getNestedLayers(_v0) {
      return Array.from(this.layers).slice(this.indexOf(_v0) + 1);
    },
    isInNestedLayer(_v0, _v1) {
      return this.getNestedLayers(_v0).some(_v0 => (0, _v67.contains)(_v0.node, _v1));
    },
    isInBranch(_v0) {
      return Array.from(this.branches).some(_v0 => (0, _v67.contains)(_v0, _v0));
    },
    add(_v0) {
      let _v1 = this.layers.push(_v0);
      _v0.node.style.setProperty("--layer-index", `${_v1}`);
    },
    addBranch(_v0) {
      this.branches.push(_v0);
    },
    remove(_v0) {
      let _v1 = this.indexOf(_v0);
      _v1 < 0 || (_v1 < this.count() - 1 && this.getNestedLayers(_v0).forEach(_v0 => _v0.dismiss()), this.layers.splice(_v1, 1), _v0.style.removeProperty("--layer-index"));
    },
    removeBranch(_v0) {
      let _v1 = this.branches.indexOf(_v0);
      _v1 >= 0 && this.branches.splice(_v1, 1);
    },
    indexOf(_v0) {
      return this.layers.findIndex(_v0 => _v0.node === _v0);
    },
    dismiss(_v0) {
      this.layers[this.indexOf(_v0)]?.dismiss();
    },
    clear() {
      this.remove(this.layers[0].node);
    }
  };
  function _v84() {
    _v83.layers.forEach(({
      node: _v0
    }) => {
      _v0.style.pointerEvents = _v83.isBelowPointerBlockingLayer(_v0) ? "none" : "auto";
    });
  }
  _v0.s(["trackDismissableElement", 0, function (_v0, _v1) {
    let {
        defer: _v2
      } = _v1,
      _v3 = _v2 ? _v67.raf : _v0 => _v0(),
      _v4 = [];
    return _v4.push(_v3(() => {
      let _v0 = (0, _v68.isFunction)(_v0) ? _v0() : _v0;
      _v4.push(function (_v0, _v1) {
        var _v2;
        let {
          warnOnMissingNode: _v3 = !0
        } = _v1;
        if (_v3 && !_v0) return void (0, _v68.warn)("[@zag-js/dismissable] node is `null` or `undefined`");
        if (!_v0) return;
        let {
          onDismiss: _v4,
          pointerBlocking: _v5,
          exclude: _v6,
          debug: _v7
        } = _v1;
        _v83.add({
          dismiss: _v4,
          node: _v0,
          pointerBlocking: _v5
        }), _v84();
        let _v8 = [_v5 ? function (_v0, _v1) {
          let _v2 = (0, _v67.getDocument)(_v0),
            _v3 = [];
          if (_v83.hasPointerBlockingLayer() && !_v2.body.hasAttribute("data-inert") && (_v66 = document.body.style.pointerEvents, queueMicrotask(() => {
            _v2.body.style.pointerEvents = "none", _v2.body.setAttribute("data-inert", "");
          })), _v1) {
            let _v0 = (0, _v67.waitForElements)(_v1, _v0 => {
              _v3.push((0, _v67.setStyle)(_v0, {
                pointerEvents: "auto"
              }));
            });
            _v3.push(_v0);
          }
          return () => {
            _v83.hasPointerBlockingLayer() || (queueMicrotask(() => {
              _v2.body.style.pointerEvents = _v66, _v2.body.removeAttribute("data-inert"), 0 === _v2.body.style.length && _v2.body.removeAttribute("style");
            }), _v3.forEach(_v0 => _v0()));
          };
        }(_v0, _v1.persistentElements) : void 0, (_v2 = function (_v0) {
          _v83.isTopMost(_v0) && (_v1.onEscapeKeyDown?.(_v0), !_v0.defaultPrevented && _v4 && (_v0.preventDefault(), _v4()));
        }, (0, _v67.addDomEvent)((0, _v67.getDocument)(_v0), "keydown", _v0 => {
          "Escape" !== _v0.key || _v0.isComposing || _v2?.(_v0);
        }, {
          capture: !0
        })), _v81(_v0, {
          exclude: function (_v0) {
            if (!_v0) return !1;
            let _v1 = "function" == typeof _v6 ? _v6() : _v6,
              _v2 = Array.isArray(_v1) ? _v1 : [_v1],
              _v3 = _v1.persistentElements?.map(_v0 => _v0()).filter(_v67.isHTMLElement);
            return _v3 && _v2.push(..._v3), _v2.some(_v0 => (0, _v67.contains)(_v0, _v0)) || _v83.isInNestedLayer(_v0, _v0);
          },
          onFocusOutside: function (_v0) {
            let _v1 = (0, _v67.getEventTarget)(_v0.detail.originalEvent);
            _v83.isInBranch(_v1) || (_v1.onFocusOutside?.(_v0), _v1.onInteractOutside?.(_v0), _v0.defaultPrevented || (_v7 && console.log("onFocusOutside:", _v0.detail.originalEvent), _v4?.()));
          },
          onPointerDownOutside: function (_v0) {
            let _v1 = (0, _v67.getEventTarget)(_v0.detail.originalEvent);
            _v83.isBelowPointerBlockingLayer(_v0) || _v83.isInBranch(_v1) || (_v1.onPointerDownOutside?.(_v0), _v1.onInteractOutside?.(_v0), _v0.defaultPrevented || (_v7 && console.log("onPointerDownOutside:", _v0.detail.originalEvent), _v4?.()));
          },
          defer: _v1.defer
        })];
        return () => {
          _v83.remove(_v0), _v84(), _v0.style.pointerEvents = "", _v8.forEach(_v0 => _v0?.());
        };
      }(_v0, _v1));
    })), () => {
      _v4.forEach(_v0 => _v0?.());
    };
  }], 0);
}