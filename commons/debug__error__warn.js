{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0) {
    _v0();
  }
  function _v5(_v0, _v1) {
    return _v0 => _v0(_v1(_v0));
  }
  function _v6(_v0) {
    return void 0 !== _v0;
  }
  function _v7() {}
  function _v8(_v0, _v1) {
    return _v1(_v0);
  }
  function _v9(..._v0) {
    return _v0;
  }
  function _v10(_v0) {
    _v0(2);
  }
  function _v11(_v0) {
    return _v0(4);
  }
  function _v12(_v0, _v1) {
    return _v0(1, _v0 => _v1(0, _v0));
  }
  function _v13(_v0, _v1) {
    let _v2 = _v0(1, _v0 => {
      _v2(), _v1(_v0);
    });
    return _v2;
  }
  function _v14(_v0) {
    let _v1, _v2;
    return _v0 => _v0 => {
      _v1 = _v0, _v2 && clearTimeout(_v2), _v2 = setTimeout(() => {
        _v0(_v1);
      }, _v0);
    };
  }
  function _v15(_v0, _v1) {
    return _v0 === _v1;
  }
  function _v16(_v0 = _v15) {
    let _v1;
    return _v0 => _v0 => {
      _v0(_v1, _v0) || (_v1 = _v0, _v0(_v0));
    };
  }
  function _v17(_v0) {
    return _v0 => _v0 => {
      _v0(_v0) && _v0(_v0);
    };
  }
  function _v18(_v0) {
    return _v0 => _v5(_v0, _v0);
  }
  function _v19(_v0) {
    return _v0 => () => {
      _v0(_v0);
    };
  }
  function _v20(_v0, ..._v1) {
    let _v2 = function (..._v0) {
      return _v0 => _v0.reduceRight(_v8, _v0);
    }(..._v1);
    return (_v0, _v1) => {
      switch (_v0) {
        case 2:
          _v10(_v0);
          return;
        case 1:
          return _v0(1, _v2(_v1));
      }
    };
  }
  function _v21(_v0, _v1) {
    return _v0 => _v0 => {
      _v0(_v1 = _v0(_v1, _v0));
    };
  }
  function _v22(_v0) {
    return _v0 => _v0 => {
      _v0 > 0 ? _v0-- : _v0(_v0);
    };
  }
  function _v23(_v0) {
    let _v1 = null,
      _v2;
    return _v0 => _v0 => {
      _v1 = _v0, _v2 || (_v2 = setTimeout(() => {
        _v2 = void 0, _v0(_v1);
      }, _v0));
    };
  }
  function _v24(..._v0) {
    let _v1 = Array(_v0.length),
      _v2 = 0,
      _v3 = null,
      _v4 = 2 ** _v0.length - 1;
    return _v0.forEach((_v0, _v1) => {
      let _v2 = 2 ** _v1;
      _v0(1, _v0 => {
        let _v1 = _v2;
        _v2 |= _v2, _v1[_v1] = _v0, _v1 !== _v4 && _v2 === _v4 && _v3 && (_v3(), _v3 = null);
      });
    }), _v0 => _v0 => {
      let _v1 = () => {
        _v0([_v0].concat(_v1));
      };
      _v2 === _v4 ? _v1() : _v3 = _v1;
    };
  }
  function _v25(_v0) {
    let _v1 = _v0,
      _v2 = _v27();
    return (_v0, _v1) => {
      switch (_v0) {
        case 0:
          _v1 = _v1;
          break;
        case 1:
          _v1(_v1);
          break;
        case 4:
          return _v1;
      }
      return _v2(_v0, _v1);
    };
  }
  function _v26(_v0, _v1) {
    var _v2;
    return _v2 = _v25(_v1), _v12(_v0, _v2), _v2;
  }
  function _v27() {
    let _v0 = [];
    return (_v0, _v1) => {
      switch (_v0) {
        case 0:
          _v0.slice().forEach(_v0 => {
            _v0(_v1);
          });
          return;
        case 2:
          _v0.splice(0, _v0.length);
          return;
        case 1:
          return _v0.push(_v1), () => {
            let _v0 = _v0.indexOf(_v1);
            _v0 > -1 && _v0.splice(_v0, 1);
          };
      }
    };
  }
  function _v28(_v0) {
    var _v1;
    return _v1 = _v27(), _v12(_v0, _v1), _v1;
  }
  function _v29(_v0, _v1 = [], {
    singleton: _v2
  } = {
    singleton: !0
  }) {
    return {
      constructor: _v0,
      dependencies: _v1,
      id: _v30(),
      singleton: _v2
    };
  }
  let _v30 = () => Symbol();
  function _v31(..._v0) {
    let _v1 = _v27(),
      _v2 = Array(_v0.length),
      _v3 = 0,
      _v4 = 2 ** _v0.length - 1;
    return _v0.forEach((_v0, _v1) => {
      let _v2 = 2 ** _v1;
      _v0(1, _v0 => {
        _v2[_v1] = _v0, (_v3 |= _v2) === _v4 && _v1(0, _v2);
      });
    }), function (_v0, _v1) {
      switch (_v0) {
        case 2:
          return void _v10(_v1);
        case 1:
          return _v3 === _v4 && _v1(_v2), _v1(1, _v1);
      }
    };
  }
  function _v32(_v0, _v1 = _v15) {
    return _v20(_v0, _v16(_v1));
  }
  function _v33(..._v0) {
    return function (_v0, _v1) {
      switch (_v0) {
        case 2:
          return;
        case 1:
          return function (..._v0) {
            return () => {
              _v0.map(_v4);
            };
          }(..._v0.map(_v0 => _v0(1, _v1)));
      }
    };
  }
  let _v34 = 1,
    _v35 = {
      0: "debug",
      3: "error",
      [_v34]: "log",
      2: "warn"
    },
    _v36 = _v29(() => {
      let _v0 = _v25(3);
      return {
        log: _v25((_v0, _v1, _v2 = _v34) => {
          _v2 >= ((typeof globalThis > "u" ? window : globalThis).VIRTUOSO_LOG_LEVEL ?? _v11(_v0)) && console[_v35[_v2]]("%creact-virtuoso: %c%s %o", "color: #0253b3; font-weight: bold", "color: initial", _v0, _v1);
        }),
        logLevel: _v0
      };
    }, [], {
      singleton: !0
    });
  function _v37(_v0, _v1, _v2) {
    return _v38(_v0, _v1, _v2).callbackRef;
  }
  function _v38(_v0, _v1, _v2) {
    let _v3 = _v2.default.useRef(null),
      _v4 = _v2.default.useMemo(() => "u" > typeof ResizeObserver ? new ResizeObserver(_v0 => {
        let _v1 = () => {
          let _v0 = _v0[0].target;
          null !== _v0.offsetParent && _v0(_v0);
        };
        _v2 ? _v1() : requestAnimationFrame(_v1);
      }) : null, [_v0, _v2]);
    return {
      callbackRef: _v0 => {
        _v0 && _v1 ? (_v4?.observe(_v0), _v3.current = _v0) : (_v3.current && _v4?.unobserve(_v3.current), _v3.current = null);
      },
      ref: _v3
    };
  }
  function _v39(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
    return _v38(_v2.default.useCallback(_v0 => {
      let _v1,
        _v2 = function (_v0, _v1, _v2, _v3) {
          let _v4 = _v0.length;
          if (0 === _v4) return null;
          let _v5 = [];
          for (let _v0 = 0; _v0 < _v4; _v0++) {
            let _v0 = _v0.item(_v0);
            if (void 0 === _v0.dataset.index) continue;
            let _v1 = parseInt(_v0.dataset.index),
              _v2 = parseFloat(_v0.dataset.knownSize),
              _v3 = _v1(_v0, _v2);
            if (0 === _v3 && _v3("Zero-sized element, this should not happen", {
              child: _v0
            }, 3), _v3 === _v2) continue;
            let _v4 = _v5[_v5.length - 1];
            0 === _v5.length || _v4.size !== _v3 || _v4.endIndex !== _v1 - 1 ? _v5.push({
              endIndex: _v1,
              size: _v3,
              startIndex: _v1
            }) : _v5[_v5.length - 1].endIndex++;
          }
          return _v5;
        }(_v0.children, _v1, _v7 ? "offsetWidth" : "offsetHeight", _v4),
        _v3 = _v0.parentElement;
      for (; void 0 === _v3.dataset.virtuosoScroller;) _v3 = _v3.parentElement;
      let _v4 = "window" === _v3.lastElementChild.dataset.viewportType;
      _v4 && (_v1 = _v3.ownerDocument.defaultView);
      let _v5 = _v6 ? _v7 ? _v6.scrollLeft : _v6.scrollTop : _v4 ? _v7 ? _v1.scrollX || _v1.document.documentElement.scrollLeft : _v1.scrollY || _v1.document.documentElement.scrollTop : _v7 ? _v3.scrollLeft : _v3.scrollTop;
      _v3({
        scrollHeight: _v6 ? _v7 ? _v6.scrollWidth : _v6.scrollHeight : _v4 ? _v7 ? _v1.document.documentElement.scrollWidth : _v1.document.documentElement.scrollHeight : _v7 ? _v3.scrollWidth : _v3.scrollHeight,
        scrollTop: Math.max(_v5, 0),
        viewportHeight: _v6 ? _v7 ? _v6.offsetWidth : _v6.offsetHeight : _v4 ? _v7 ? _v1.innerWidth : _v1.innerHeight : _v7 ? _v3.offsetWidth : _v3.offsetHeight
      }), _v5?.(_v7 ? _v40("column-gap", getComputedStyle(_v0).columnGap, _v4) : _v40("row-gap", getComputedStyle(_v0).rowGap, _v4)), null !== _v2 && _v0(_v2);
    }, [_v0, _v1, _v4, _v5, _v6, _v3, _v7]), _v2, _v8);
  }
  function _v40(_v0, _v1, _v2) {
    return "normal" !== _v1 && _v1?.endsWith("px") !== !0 && _v2(`${_v0} was not resolved to pixel value correctly`, _v1, 2), "normal" === _v1 ? 0 : parseInt(_v1 ?? "0", 10);
  }
  function _v41(_v0, _v1, _v2) {
    let _v3 = _v2.default.useRef(null),
      _v4 = _v2.default.useCallback(_v0 => {
        let _v1, _v2;
        if (!_v0?.offsetParent) return;
        let _v3 = _v0.getBoundingClientRect(),
          _v4 = _v3.width;
        if (_v1) {
          let _v0 = _v1.getBoundingClientRect(),
            _v1 = _v3.top - _v0.top;
          _v2 = _v0.height - Math.max(0, _v1), _v1 = _v1 + _v1.scrollTop;
        } else {
          let _v0 = _v6.current.ownerDocument.defaultView;
          _v2 = _v0.innerHeight - Math.max(0, _v3.top), _v1 = _v3.top + _v0.scrollY;
        }
        _v3.current = {
          listHeight: _v3.height,
          offsetTop: _v1,
          visibleHeight: _v2,
          visibleWidth: _v4
        }, _v0(_v3.current);
      }, [_v0, _v1]),
      {
        callbackRef: _v5,
        ref: _v6
      } = _v38(_v4, !0, _v2),
      _v7 = _v2.default.useCallback(() => {
        _v4(_v6.current);
      }, [_v4, _v6]);
    return _v2.default.useEffect(() => {
      if (_v1) {
        _v1.addEventListener("scroll", _v7);
        let _v0 = new ResizeObserver(() => {
          requestAnimationFrame(_v7);
        });
        return _v0.observe(_v1), () => {
          _v1.removeEventListener("scroll", _v7), _v0.unobserve(_v1);
        };
      }
      let _v0 = _v6.current?.ownerDocument.defaultView;
      return _v0?.addEventListener("scroll", _v7), _v0?.addEventListener("resize", _v7), () => {
        _v0?.removeEventListener("scroll", _v7), _v0?.removeEventListener("resize", _v7);
      };
    }, [_v7, _v1, _v6]), _v5;
  }
  let _v42 = _v29(() => {
      let _v0 = _v27(),
        _v1 = _v27(),
        _v2 = _v25(0),
        _v3 = _v27(),
        _v4 = _v25(0),
        _v5 = _v27(),
        _v6 = _v27(),
        _v7 = _v25(0),
        _v8 = _v25(0),
        _v9 = _v25(0),
        _v10 = _v25(0),
        _v11 = _v27(),
        _v12 = _v27(),
        _v13 = _v25(!1),
        _v14 = _v25(!1),
        _v15 = _v25(!1);
      return _v12(_v20(_v0, _v18(({
        scrollTop: _v0
      }) => _v0)), _v1), _v12(_v20(_v0, _v18(({
        scrollHeight: _v0
      }) => _v0)), _v6), _v12(_v1, _v4), {
        deviation: _v2,
        fixedFooterHeight: _v9,
        fixedHeaderHeight: _v8,
        footerHeight: _v10,
        headerHeight: _v7,
        horizontalDirection: _v14,
        scrollBy: _v12,
        scrollContainerState: _v0,
        scrollHeight: _v6,
        scrollingInProgress: _v13,
        scrollTo: _v11,
        scrollTop: _v1,
        skipAnimationFrameInResizeObserver: _v15,
        smoothScrollTargetReached: _v3,
        statefulScrollTop: _v4,
        viewportHeight: _v5
      };
    }, [], {
      singleton: !0
    }),
    _v43 = {
      lvl: 0
    };
  function _v44(_v0, _v1) {
    let _v2 = _v0.length;
    if (0 === _v2) return [];
    let {
        index: _v3,
        value: _v4
      } = _v1(_v0[0]),
      _v5 = [];
    for (let _v0 = 1; _v0 < _v2; _v0++) {
      let {
        index: _v0,
        value: _v1
      } = _v1(_v0[_v0]);
      _v5.push({
        end: _v0 - 1,
        start: _v3,
        value: _v4
      }), _v3 = _v0, _v4 = _v1;
    }
    return _v5.push({
      end: 1 / 0,
      start: _v3,
      value: _v4
    }), _v5;
  }
  function _v45(_v0) {
    return _v0 === _v43;
  }
  function _v46(_v0, _v1) {
    if (!_v45(_v0)) return _v1 === _v0.k ? _v0.v : _v1 < _v0.k ? _v46(_v0.l, _v1) : _v46(_v0.r, _v1);
  }
  function _v47(_v0, _v1, _v2 = "k") {
    if (_v45(_v0)) return [-1 / 0, void 0];
    if (Number(_v0[_v2]) === _v1) return [_v0.k, _v0.v];
    if (Number(_v0[_v2]) < _v1) {
      let _v0 = _v47(_v0.r, _v1, _v2);
      return _v0[0] === -1 / 0 ? [_v0.k, _v0.v] : _v0;
    }
    return _v47(_v0.l, _v1, _v2);
  }
  function _v48(_v0, _v1, _v2) {
    return _v45(_v0) ? _v54(_v1, _v2, 1) : _v1 === _v0.k ? _v52(_v0, {
      k: _v1,
      v: _v2
    }) : _v1 < _v0.k ? _v56(_v55(_v52(_v0, {
      l: _v48(_v0.l, _v1, _v2)
    }))) : _v56(_v55(_v52(_v0, {
      r: _v48(_v0.r, _v1, _v2)
    })));
  }
  function _v49(_v0, _v1, _v2) {
    if (_v45(_v0)) return [];
    let _v3 = _v47(_v0, _v1)[0];
    return _v44(function _v0(_v1, _v2, _v3) {
      if (_v45(_v1)) return [];
      let {
          k: _v4,
          l: _v5,
          r: _v6,
          v: _v7
        } = _v1,
        _v8 = [];
      return _v4 > _v2 && (_v8 = _v8.concat(_v0(_v5, _v2, _v3))), _v4 >= _v2 && _v4 <= _v3 && _v8.push({
        k: _v4,
        v: _v7
      }), _v4 <= _v3 && (_v8 = _v8.concat(_v0(_v6, _v2, _v3))), _v8;
    }(_v0, _v3, _v2), ({
      k: _v0,
      v: _v1
    }) => ({
      index: _v0,
      value: _v1
    }));
  }
  function _v50(_v0) {
    return _v45(_v0) ? [] : [..._v50(_v0.l), {
      k: _v0.k,
      v: _v0.v
    }, ..._v50(_v0.r)];
  }
  function _v51(_v0) {
    let {
      l: _v1,
      lvl: _v2,
      r: _v3
    } = _v0;
    if (_v3.lvl >= _v2 - 1 && _v1.lvl >= _v2 - 1) return _v0;
    if (_v2 > _v3.lvl + 1) {
      if (_v53(_v1)) return _v55(_v52(_v0, {
        lvl: _v2 - 1
      }));
      if (!_v45(_v1) && !_v45(_v1.r)) return _v52(_v1.r, {
        l: _v52(_v1, {
          r: _v1.r.l
        }),
        lvl: _v2,
        r: _v52(_v0, {
          l: _v1.r.r,
          lvl: _v2 - 1
        })
      });
      throw Error("Unexpected empty nodes");
    }
    if (_v53(_v0)) return _v56(_v52(_v0, {
      lvl: _v2 - 1
    }));
    if (!_v45(_v3) && !_v45(_v3.l)) {
      let _v0 = _v3.l,
        _v1 = _v53(_v0) ? _v3.lvl - 1 : _v3.lvl;
      return _v52(_v0, {
        l: _v52(_v0, {
          lvl: _v2 - 1,
          r: _v0.l
        }),
        lvl: _v0.lvl + 1,
        r: _v56(_v52(_v3, {
          l: _v0.r,
          lvl: _v1
        }))
      });
    }
    throw Error("Unexpected empty nodes");
  }
  function _v52(_v0, _v1) {
    return _v54(void 0 !== _v1.k ? _v1.k : _v0.k, void 0 !== _v1.v ? _v1.v : _v0.v, void 0 !== _v1.lvl ? _v1.lvl : _v0.lvl, void 0 !== _v1.l ? _v1.l : _v0.l, void 0 !== _v1.r ? _v1.r : _v0.r);
  }
  function _v53(_v0) {
    return _v45(_v0) || _v0.lvl > _v0.r.lvl;
  }
  function _v54(_v0, _v1, _v2, _v3 = _v43, _v4 = _v43) {
    return {
      k: _v0,
      l: _v3,
      lvl: _v2,
      r: _v4,
      v: _v1
    };
  }
  function _v55(_v0) {
    let {
      l: _v1
    } = _v0;
    return _v45(_v1) || _v1.lvl !== _v0.lvl ? _v0 : _v52(_v1, {
      r: _v52(_v0, {
        l: _v1.r
      })
    });
  }
  function _v56(_v0) {
    let {
      lvl: _v1,
      r: _v2
    } = _v0;
    return _v45(_v2) || _v45(_v2.r) || _v2.lvl !== _v1 || _v2.r.lvl !== _v1 ? _v0 : _v52(_v2, {
      l: _v52(_v0, {
        r: _v2.l
      }),
      lvl: _v1 + 1
    });
  }
  function _v57(_v0, _v1) {
    return !!(_v0 && _v0.startIndex === _v1.startIndex && _v0.endIndex === _v1.endIndex);
  }
  function _v58(_v0, _v1) {
    return !!(_v0 && _v0[0] === _v1[0] && _v0[1] === _v1[1]);
  }
  let _v59 = _v29(() => ({
    recalcInProgress: _v25(!1)
  }), [], {
    singleton: !0
  });
  function _v60(_v0, _v1, _v2, _v3 = 0) {
    let _v4 = _v0.length - 1;
    for (; _v3 <= _v4;) {
      let _v0 = Math.floor((_v3 + _v4) / 2),
        _v1 = _v2(_v0[_v0], _v1);
      if (0 === _v1) return _v0;
      if (-1 === _v1) {
        if (_v4 - _v3 < 2) return _v0 - 1;
        _v4 = _v0 - 1;
      } else {
        if (_v4 === _v3) return _v0;
        _v3 = _v0 + 1;
      }
    }
    throw Error(`Failed binary finding record in array - ${_v0.join(",")}, searched for ${_v1}`);
  }
  function _v61(_v0, _v1) {
    return Math.round(_v0.getBoundingClientRect()[_v1]);
  }
  function _v62(_v0) {
    return !_v45(_v0.groupOffsetTree);
  }
  function _v63({
    index: _v0
  }, _v1) {
    return _v1 === _v0 ? 0 : _v1 < _v0 ? -1 : 1;
  }
  function _v64({
    offset: _v0
  }, _v1) {
    return _v1 === _v0 ? 0 : _v1 < _v0 ? -1 : 1;
  }
  function _v65(_v0, _v1, _v2) {
    if (0 === _v1.length) return 0;
    let {
        index: _v3,
        offset: _v4,
        size: _v5
      } = _v1[_v60(_v1, _v0, _v63)],
      _v6 = _v0 - _v3,
      _v7 = _v5 * _v6 + (_v6 - 1) * _v2 + _v4;
    return _v7 > 0 ? _v7 + _v2 : _v7;
  }
  function _v66(_v0, _v1) {
    if (!_v62(_v1)) return _v0;
    let _v2 = 0;
    for (; _v1.groupIndices[_v2] <= _v0 + _v2;) _v2++;
    return _v0 + _v2;
  }
  function _v67(_v0, _v1, _v2) {
    if ("u" > typeof _v0.groupIndex) return _v1.groupIndices[_v0.groupIndex] + 1;
    let _v3 = _v66("LAST" === _v0.index ? _v2 : _v0.index, _v1);
    return Math.max(0, _v3, Math.min(_v2, _v3));
  }
  function _v68(_v0, [_v1, _v2, _v3, _v4]) {
    _v1.length > 0 && _v3("received item sizes", _v1, 0);
    let _v5 = _v0.sizeTree,
      _v6 = _v5,
      _v7 = 0;
    if (_v2.length > 0 && _v45(_v5) && 2 === _v1.length) {
      let _v0 = _v1[0].size,
        _v1 = _v1[1].size;
      _v6 = _v2.reduce((_v0, _v1) => _v48(_v48(_v0, _v1, _v0), _v1 + 1, _v1), _v6);
    } else [_v6, _v7] = function (_v0, _v1) {
      let _v2 = _v45(_v0) ? 0 : 1 / 0;
      for (let _v0 of _v1) {
        let {
          endIndex: _v0,
          size: _v1,
          startIndex: _v2
        } = _v0;
        if (_v2 = Math.min(_v2, _v2), _v45(_v0)) {
          _v0 = _v48(_v0, 0, _v1);
          continue;
        }
        let _v3 = _v49(_v0, _v2 - 1, _v0 + 1);
        if (_v3.some(function (_v0) {
          let {
            endIndex: _v1,
            size: _v2,
            startIndex: _v3
          } = _v0;
          return _v0 => _v0.start === _v3 && (_v0.end === _v1 || _v0.end === 1 / 0) && _v0.value === _v2;
        }(_v0))) continue;
        let _v4 = !1,
          _v5 = !1;
        for (let {
          end: _v0,
          start: _v1,
          value: _v2
        } of _v3) _v4 ? (_v0 >= _v1 || _v1 === _v2) && (_v0 = function _v0(_v1, _v2) {
          if (_v45(_v1)) return _v43;
          let {
            k: _v3,
            l: _v4,
            r: _v5
          } = _v1;
          if (_v2 === _v3) {
            if (_v45(_v4)) return _v5;
            if (_v45(_v5)) return _v4;
            let [_v0, _v1] = function _v0(_v1) {
              return _v45(_v1.r) ? [_v1.k, _v1.v] : _v0(_v1.r);
            }(_v4);
            return _v51(_v52(_v1, {
              k: _v0,
              l: function _v0(_v1) {
                return _v45(_v1.r) ? _v1.l : _v51(_v52(_v1, {
                  r: _v0(_v1.r)
                }));
              }(_v4),
              v: _v1
            }));
          }
          return _v2 < _v3 ? _v51(_v52(_v1, {
            l: _v0(_v4, _v2)
          })) : _v51(_v52(_v1, {
            r: _v0(_v5, _v2)
          }));
        }(_v0, _v1)) : (_v5 = _v2 !== _v1, _v4 = !0), _v0 > _v0 && _v0 >= _v1 && _v2 !== _v1 && (_v0 = _v48(_v0, _v0 + 1, _v2));
        _v5 && (_v0 = _v48(_v0, _v2, _v1));
      }
      return [_v0, _v2];
    }(_v6, _v1);
    if (_v6 === _v5) return _v0;
    let {
      lastIndex: _v8,
      lastOffset: _v9,
      lastSize: _v10,
      offsetTree: _v11
    } = _v70(_v0.offsetTree, _v7, _v6, _v4);
    return {
      groupIndices: _v2,
      groupOffsetTree: _v2.reduce((_v0, _v1) => _v48(_v0, _v1, _v65(_v1, _v11, _v4)), _v43),
      lastIndex: _v8,
      lastOffset: _v9,
      lastSize: _v10,
      offsetTree: _v11,
      sizeTree: _v6
    };
  }
  function _v69(_v0, _v1) {
    let _v2 = 0,
      _v3 = 0;
    for (; _v2 < _v0;) _v2 += _v1[_v3 + 1] - _v1[_v3] - 1, _v3++;
    return _v3 - (_v2 !== _v0);
  }
  function _v70(_v0, _v1, _v2, _v3) {
    let _v4 = _v0,
      _v5 = 0,
      _v6 = 0,
      _v7 = 0,
      _v8 = 0;
    if (0 !== _v1) {
      _v8 = _v60(_v4, _v1 - 1, _v63), _v7 = _v4[_v8].offset;
      let _v0 = _v47(_v2, _v1 - 1);
      _v5 = _v0[0], _v6 = _v0[1], _v4.length && _v4[_v8].size === _v47(_v2, _v1)[1] && (_v8 -= 1), _v4 = _v4.slice(0, _v8 + 1);
    } else _v4 = [];
    for (let {
      start: _v0,
      value: _v1
    } of _v49(_v2, _v1, 1 / 0)) {
      let _v0 = _v0 - _v5,
        _v1 = _v0 * _v6 + _v7 + _v0 * _v3;
      _v4.push({
        index: _v0,
        offset: _v1,
        size: _v1
      }), _v5 = _v0, _v7 = _v1, _v6 = _v1;
    }
    return {
      lastIndex: _v5,
      lastOffset: _v7,
      lastSize: _v6,
      offsetTree: _v4
    };
  }
  function _v71(_v0) {
    return {
      index: _v0.index,
      value: _v0
    };
  }
  let _v72 = {
      offsetHeight: "height",
      offsetWidth: "width"
    },
    _v73 = _v29(([{
      log: _v0
    }, {
      recalcInProgress: _v1
    }]) => {
      let _v2 = _v27(),
        _v3 = _v27(),
        _v4 = _v26(_v3, 0),
        _v5 = _v27(),
        _v6 = _v27(),
        _v7 = _v25(0),
        _v8 = _v25([]),
        _v9 = _v25(void 0),
        _v10 = _v25(void 0),
        _v11 = _v25(void 0),
        _v12 = _v25(void 0),
        _v13 = _v25((_v0, _v1) => _v61(_v0, _v72[_v1])),
        _v14 = _v25(void 0),
        _v15 = _v25(0),
        _v16 = {
          groupIndices: [],
          groupOffsetTree: _v43,
          lastIndex: 0,
          lastOffset: 0,
          lastSize: 0,
          offsetTree: [],
          sizeTree: _v43
        },
        _v17 = _v26(_v20(_v2, _v24(_v8, _v0, _v15), _v21(_v68, _v16), _v16()), _v16),
        _v18 = _v26(_v20(_v8, _v16(), _v21((_v0, _v1) => ({
          current: _v1,
          prev: _v0.current
        }), {
          current: [],
          prev: []
        }), _v18(({
          prev: _v0
        }) => _v0)), []);
      _v12(_v20(_v8, _v17(_v0 => _v0.length > 0), _v24(_v17, _v15), _v18(([_v0, _v1, _v2]) => {
        let _v3 = _v0.reduce((_v0, _v1, _v2) => _v48(_v0, _v1, _v65(_v1, _v1.offsetTree, _v2) || _v2), _v43);
        return {
          ..._v1,
          groupIndices: _v0,
          groupOffsetTree: _v3
        };
      })), _v17), _v12(_v20(_v3, _v24(_v17), _v17(([_v0, {
        lastIndex: _v1
      }]) => _v0 < _v1), _v18(([_v0, {
        lastIndex: _v1,
        lastSize: _v2
      }]) => [{
        endIndex: _v1,
        size: _v2,
        startIndex: _v0
      }])), _v2), _v12(_v9, _v10);
      let _v19 = _v26(_v20(_v9, _v18(_v0 => void 0 === _v0)), !0);
      _v12(_v20(_v10, _v17(_v0 => void 0 !== _v0 && _v45(_v11(_v17).sizeTree)), _v18(_v0 => {
        let _v1 = _v11(_v11),
          _v2 = _v11(_v8).length > 0;
        return void 0 !== _v1 && 0 !== _v1 ? _v2 ? [{
          endIndex: 0,
          size: _v1,
          startIndex: 0
        }, {
          endIndex: 1,
          size: _v0,
          startIndex: 1
        }] : [] : [{
          endIndex: 0,
          size: _v0,
          startIndex: 0
        }];
      })), _v2), _v12(_v20(_v12, _v17(_v0 => void 0 !== _v0 && _v0.length > 0 && _v45(_v11(_v17).sizeTree)), _v18(_v0 => {
        let _v1 = [],
          _v2 = _v0[0],
          _v3 = 0;
        for (let _v0 = 1; _v0 < _v0.length; _v0++) {
          let _v0 = _v0[_v0];
          _v0 !== _v2 && (_v1.push({
            endIndex: _v0 - 1,
            size: _v2,
            startIndex: _v3
          }), _v2 = _v0, _v3 = _v0);
        }
        return _v1.push({
          endIndex: _v0.length - 1,
          size: _v2,
          startIndex: _v3
        }), _v1;
      })), _v2), _v12(_v20(_v8, _v24(_v11, _v10), _v17(([, _v0, _v1]) => void 0 !== _v0 && void 0 !== _v1), _v18(([_v0, _v1, _v2]) => {
        let _v3 = [];
        for (let _v0 = 0; _v0 < _v0.length; _v0++) {
          let _v0 = _v0[_v0],
            _v1 = _v0[_v0 + 1];
          _v3.push({
            startIndex: _v0,
            endIndex: _v0,
            size: _v1
          }), void 0 !== _v1 && _v3.push({
            startIndex: _v0 + 1,
            endIndex: _v1 - 1,
            size: _v2
          });
        }
        return _v3;
      })), _v2);
      let _v20 = _v28(_v20(_v2, _v24(_v17), _v21(({
        sizes: _v0
      }, [_v1, _v2]) => ({
        changed: _v2 !== _v0,
        sizes: _v2
      }), {
        changed: !1,
        sizes: _v16
      }), _v18(_v0 => _v0.changed)));
      _v20(_v7, _v21((_v0, _v1) => ({
        diff: _v0.prev - _v1,
        prev: _v1
      }), {
        diff: 0,
        prev: 0
      }), _v18(_v0 => _v0.diff))(1, _v0 => {
        let {
          groupIndices: _v1
        } = _v11(_v17);
        if (_v0 > 0) _v1(0, !0), _v5(0, _v0 + _v69(_v0, _v1));else if (_v0 < 0) {
          let _v0 = _v11(_v18);
          _v0.length > 0 && (_v0 -= _v69(-_v0, _v0)), _v6(0, _v0);
        }
      }), _v20(_v7, _v24(_v0))(1, ([_v0, _v1]) => {
        _v0 < 0 && _v1("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value", {
          firstItemIndex: _v7
        }, 3);
      });
      let _v21 = _v28(_v5);
      _v12(_v20(_v5, _v24(_v17), _v18(([_v0, _v1]) => {
        let _v2 = _v1.groupIndices.length > 0,
          _v3 = [],
          _v4 = _v1.lastSize;
        if (_v2) {
          let _v0 = _v46(_v1.sizeTree, 0),
            _v1 = 0,
            _v2 = 0;
          for (; _v1 < _v0;) {
            let _v0 = _v1.groupIndices[_v2],
              _v1 = _v1.groupIndices.length === _v2 + 1 ? 1 / 0 : _v1.groupIndices[_v2 + 1] - _v0 - 1;
            _v3.push({
              endIndex: _v0,
              size: _v0,
              startIndex: _v0
            }), _v3.push({
              endIndex: _v0 + 1 + _v1 - 1,
              size: _v4,
              startIndex: _v0 + 1
            }), _v2++, _v1 += _v1 + 1;
          }
          let _v3 = _v50(_v1.sizeTree);
          return _v1 !== _v0 && _v3.shift(), _v3.reduce((_v0, {
            k: _v1,
            v: _v2
          }) => {
            let _v3 = _v0.ranges;
            return 0 !== _v0.prevSize && (_v3 = [..._v0.ranges, {
              endIndex: _v1 + _v0 - 1,
              size: _v0.prevSize,
              startIndex: _v0.prevIndex
            }]), {
              prevIndex: _v1 + _v0,
              prevSize: _v2,
              ranges: _v3
            };
          }, {
            prevIndex: _v0,
            prevSize: 0,
            ranges: _v3
          }).ranges;
        }
        return _v50(_v1.sizeTree).reduce((_v0, {
          k: _v1,
          v: _v2
        }) => ({
          prevIndex: _v1 + _v0,
          prevSize: _v2,
          ranges: [..._v0.ranges, {
            endIndex: _v1 + _v0 - 1,
            size: _v0.prevSize,
            startIndex: _v0.prevIndex
          }]
        }), {
          prevIndex: 0,
          prevSize: _v4,
          ranges: []
        }).ranges;
      })), _v2);
      let _v22 = _v28(_v20(_v6, _v24(_v17, _v15), _v18(([_v0, {
        offsetTree: _v1
      }, _v2]) => _v65(-_v0, _v1, _v2))));
      return _v12(_v20(_v6, _v24(_v17, _v15), _v18(([_v0, _v1, _v2]) => {
        if (_v1.groupIndices.length > 0) {
          if (_v45(_v1.sizeTree)) return _v1;
          let _v0 = _v43,
            _v1 = _v11(_v18),
            _v2 = 0,
            _v3 = 0,
            _v4 = 0;
          for (; _v2 < -_v0;) {
            _v4 = _v1[_v3];
            let _v0 = _v1[_v3 + 1] - _v4 - 1;
            _v3++, _v2 += _v0 + 1;
          }
          return _v0 = _v50(_v1.sizeTree).reduce((_v0, {
            k: _v1,
            v: _v2
          }) => _v48(_v0, Math.max(0, _v1 + _v0), _v2), _v0), _v2 !== -_v0 && (_v0 = _v48(_v0, 0, _v46(_v1.sizeTree, _v4)), _v0 = _v48(_v0, 1, _v47(_v1.sizeTree, -_v0 + 1)[1])), {
            ..._v1,
            sizeTree: _v0,
            ..._v70(_v1.offsetTree, 0, _v0, _v2)
          };
        }
        let _v3 = _v50(_v1.sizeTree).reduce((_v0, {
          k: _v1,
          v: _v2
        }) => _v48(_v0, Math.max(0, _v1 + _v0), _v2), _v43);
        return {
          ..._v1,
          sizeTree: _v3,
          ..._v70(_v1.offsetTree, 0, _v3, _v2)
        };
      })), _v17), {
        beforeUnshiftWith: _v21,
        data: _v14,
        defaultItemSize: _v10,
        firstItemIndex: _v7,
        fixedItemSize: _v9,
        fixedGroupSize: _v11,
        gap: _v15,
        groupIndices: _v8,
        heightEstimates: _v12,
        itemSize: _v13,
        listRefresh: _v20,
        shiftWith: _v6,
        shiftWithOffset: _v22,
        sizeRanges: _v2,
        sizes: _v17,
        statefulTotalCount: _v4,
        totalCount: _v3,
        trackItemSizes: _v19,
        unshiftWith: _v5
      };
    }, _v9(_v36, _v59), {
      singleton: !0
    });
  function _v74(_v0) {
    return _v0.reduce((_v0, _v1) => (_v0.groupIndices.push(_v0.totalCount), _v0.totalCount += _v1 + 1, _v0), {
      groupIndices: [],
      totalCount: 0
    });
  }
  let _v75 = _v29(([{
      groupIndices: _v0,
      sizes: _v1,
      totalCount: _v2
    }, {
      headerHeight: _v3,
      scrollTop: _v4
    }]) => {
      let _v5 = _v27(),
        _v6 = _v27(),
        _v7 = _v28(_v20(_v5, _v18(_v74)));
      return _v12(_v20(_v7, _v18(_v0 => _v0.totalCount)), _v2), _v12(_v20(_v7, _v18(_v0 => _v0.groupIndices)), _v0), _v12(_v20(_v31(_v4, _v1, _v3), _v17(([_v0, _v1]) => _v62(_v1)), _v18(([_v0, _v1, _v2]) => _v47(_v1.groupOffsetTree, Math.max(_v0 - _v2, 0), "v")[0]), _v16(), _v18(_v0 => [_v0])), _v6), {
        groupCounts: _v5,
        topItemsIndexes: _v6
      };
    }, _v9(_v73, _v42)),
    _v76 = _v29(([{
      log: _v0
    }]) => {
      let _v1 = _v25(!1),
        _v2 = _v28(_v20(_v1, _v17(_v0 => _v0), _v16()));
      return _v1(1, _v0 => {
        _v0 && _v11(_v0)("props updated", {}, 0);
      }), {
        didMount: _v2,
        propsReady: _v1
      };
    }, _v9(_v36), {
      singleton: !0
    }),
    _v77 = "u" > typeof document && "scrollBehavior" in document.documentElement.style;
  function _v78(_v0) {
    let _v1 = "number" == typeof _v0 ? {
      index: _v0
    } : _v0;
    return _v1.align || (_v1.align = "start"), _v1.behavior && _v77 || (_v1.behavior = "auto"), void 0 === _v1.offset && (_v1.offset = 0), _v1;
  }
  let _v79 = _v29(([{
    gap: _v0,
    listRefresh: _v1,
    sizes: _v2,
    totalCount: _v3
  }, {
    fixedFooterHeight: _v4,
    fixedHeaderHeight: _v5,
    footerHeight: _v6,
    headerHeight: _v7,
    scrollingInProgress: _v8,
    scrollTo: _v9,
    smoothScrollTargetReached: _v10,
    viewportHeight: _v11
  }, {
    log: _v12
  }]) => {
    let _v13 = _v27(),
      _v14 = _v27(),
      _v15 = _v25(0),
      _v16 = null,
      _v17 = null,
      _v18 = null;
    function _v19() {
      null !== _v16 && (_v16(), _v16 = null), null !== _v18 && (_v18(), _v18 = null), _v17 && (clearTimeout(_v17), _v17 = null), _v8(0, !1);
    }
    return _v12(_v20(_v13, _v24(_v2, _v11, _v3, _v15, _v7, _v6, _v12), _v24(_v0, _v5, _v4), _v18(([[_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7], _v8, _v9, _v10]) => {
      let _v11 = _v78(_v0),
        {
          align: _v12,
          behavior: _v13,
          offset: _v14
        } = _v11,
        _v15 = _v3 - 1,
        _v16 = _v67(_v11, _v1, _v15),
        _v17 = _v65(_v16, _v1.offsetTree, _v8) + _v5;
      "end" === _v12 ? (_v17 += _v9 + _v47(_v1.sizeTree, _v16)[1] - _v2 + _v10, _v16 === _v15 && (_v17 += _v6)) : "center" === _v12 ? _v17 += (_v9 + _v47(_v1.sizeTree, _v16)[1] - _v2 + _v10) / 2 : _v17 -= _v4, void 0 !== _v14 && 0 !== _v14 && (_v17 += _v14);
      let _v18 = _v0 => {
        _v19(), _v0 ? (_v7("retrying to scroll to", {
          location: _v0
        }, 0), _v13(0, _v0)) : (_v14(0, !0), _v7("list did not change, scroll successful", {}, 0));
      };
      if (_v19(), "smooth" === _v13) {
        let _v0 = !1;
        _v18 = _v1(1, _v0 => {
          _v0 = _v0 || _v0;
        }), _v16 = _v13(_v10, () => {
          _v18(_v0);
        });
      } else _v16 = _v13(_v20(_v1, _v0 => {
        let _v1 = setTimeout(() => {
          _v0(!1);
        }, 150);
        return _v0 => {
          _v0 && (_v0(!0), clearTimeout(_v1));
        };
      }), _v18);
      return _v17 = setTimeout(() => {
        _v19();
      }, 0), _v8(0, !0), _v7("scrolling from index to", {
        behavior: _v13,
        index: _v16,
        top: _v17
      }, 0), {
        behavior: _v13,
        top: _v17
      };
    })), _v9), {
      scrollTargetReached: _v14,
      scrollToIndex: _v13,
      topListHeight: _v15
    };
  }, _v9(_v73, _v42, _v36), {
    singleton: !0
  });
  function _v80(_v0, _v1) {
    0 === _v0 ? _v1() : requestAnimationFrame(() => {
      _v80(_v0 - 1, _v1);
    });
  }
  function _v81(_v0, _v1) {
    return "number" == typeof _v0 ? _v0 : "LAST" === _v0.index ? _v1 - 1 : _v0.index;
  }
  let _v82 = _v29(([{
    defaultItemSize: _v0,
    listRefresh: _v1,
    sizes: _v2
  }, {
    scrollTop: _v3
  }, {
    scrollTargetReached: _v4,
    scrollToIndex: _v5
  }, {
    didMount: _v6
  }]) => {
    let _v7 = _v25(!0),
      _v8 = _v25(0),
      _v9 = _v25(!0);
    return _v12(_v20(_v6, _v24(_v8), _v17(([_v0, _v1]) => 0 !== _v1), _v19(!1)), _v7), _v12(_v20(_v6, _v24(_v8), _v17(([_v0, _v1]) => 0 !== _v1), _v19(!1)), _v9), _v20(_v31(_v1, _v6), _v24(_v7, _v2, _v0, _v9), _v17(([[, _v0], _v1, {
      sizeTree: _v2
    }, _v3, _v4]) => _v0 && (!_v45(_v2) || _v6(_v3)) && !_v1 && !_v4), _v24(_v8))(1, ([, _v0]) => {
      _v13(_v4, () => {
        _v9(0, !0);
      }), _v80(4, () => {
        _v13(_v3, () => {
          _v7(0, !0);
        }), _v5(0, _v0);
      });
    }), {
      initialItemFinalLocationReached: _v9,
      initialTopMostItemIndex: _v8,
      scrolledToInitialItem: _v7
    };
  }, _v9(_v73, _v42, _v79, _v76), {
    singleton: !0
  });
  function _v83(_v0, _v1) {
    return 1.01 > Math.abs(_v0 - _v1);
  }
  let _v84 = "down",
    _v85 = {
      atBottom: !1,
      notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
      state: {
        offsetBottom: 0,
        scrollHeight: 0,
        scrollTop: 0,
        viewportHeight: 0
      }
    },
    _v86 = _v29(([{
      footerHeight: _v0,
      headerHeight: _v1,
      scrollBy: _v2,
      scrollContainerState: _v3,
      scrollTop: _v4,
      viewportHeight: _v5
    }]) => {
      let _v6 = _v25(!1),
        _v7 = _v25(!0),
        _v8 = _v27(),
        _v9 = _v27(),
        _v10 = _v25(4),
        _v11 = _v25(0),
        _v12 = _v26(_v20(_v33(_v20(_v32(_v4), _v22(1), _v19(!0)), _v20(_v32(_v4), _v22(1), _v19(!1), _v14(100))), _v16()), !1),
        _v13 = _v26(_v20(_v33(_v20(_v2, _v19(!0)), _v20(_v2, _v19(!1), _v14(200))), _v16()), !1);
      _v12(_v20(_v31(_v32(_v4), _v32(_v11)), _v18(([_v0, _v1]) => _v0 <= _v1), _v16()), _v7), _v12(_v20(_v7, _v23(50)), _v9);
      let _v14 = _v28(_v20(_v31(_v3, _v32(_v5), _v32(_v1), _v32(_v0), _v32(_v10)), _v21((_v0, [{
          scrollHeight: _v1,
          scrollTop: _v2
        }, _v3, _v4, _v5, _v6]) => {
          let _v7 = {
            scrollHeight: _v1,
            scrollTop: _v2,
            viewportHeight: _v3
          };
          if (_v2 + _v3 - _v1 > -_v6) {
            let _v0, _v1;
            return _v2 > _v0.state.scrollTop ? (_v0 = "SCROLLED_DOWN", _v1 = _v0.state.scrollTop - _v2) : (_v0 = "SIZE_DECREASED", _v1 = _v0.state.scrollTop - _v2 || _v0.scrollTopDelta), {
              atBottom: !0,
              atBottomBecause: _v0,
              scrollTopDelta: _v1,
              state: _v7
            };
          }
          return {
            atBottom: !1,
            notAtBottomBecause: _v7.scrollHeight > _v0.state.scrollHeight ? "SIZE_INCREASED" : _v3 < _v0.state.viewportHeight ? "VIEWPORT_HEIGHT_DECREASING" : _v2 < _v0.state.scrollTop ? "SCROLLING_UPWARDS" : "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",
            state: _v7
          };
        }, _v85), _v16((_v0, _v1) => void 0 !== _v0 && _v0.atBottom === _v1.atBottom))),
        _v15 = _v26(_v20(_v3, _v21((_v0, {
          scrollHeight: _v1,
          scrollTop: _v2,
          viewportHeight: _v3
        }) => {
          if (!_v83(_v0.scrollHeight, _v1)) {
            let _v0 = _v1 - (_v2 + _v3) < 1;
            return _v0.scrollTop !== _v2 && _v0 ? {
              changed: !0,
              jump: _v0.scrollTop - _v2,
              scrollHeight: _v1,
              scrollTop: _v2
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: _v1,
              scrollTop: _v2
            };
          }
          return {
            changed: !1,
            jump: 0,
            scrollHeight: _v1,
            scrollTop: _v2
          };
        }, {
          changed: !1,
          jump: 0,
          scrollHeight: 0,
          scrollTop: 0
        }), _v17(_v0 => _v0.changed), _v18(_v0 => _v0.jump)), 0);
      _v12(_v20(_v14, _v18(_v0 => _v0.atBottom)), _v6), _v12(_v20(_v6, _v23(50)), _v8);
      let _v16 = _v25(_v84);
      _v12(_v20(_v3, _v18(({
        scrollTop: _v0
      }) => _v0), _v16(), _v21((_v0, _v1) => _v11(_v13) ? {
        direction: _v0.direction,
        prevScrollTop: _v1
      } : {
        direction: _v1 < _v0.prevScrollTop ? "up" : _v84,
        prevScrollTop: _v1
      }, {
        direction: _v84,
        prevScrollTop: 0
      }), _v18(_v0 => _v0.direction)), _v16), _v12(_v20(_v3, _v23(50), _v19("none")), _v16);
      let _v17 = _v25(0);
      return _v12(_v20(_v12, _v17(_v0 => !_v0), _v19(0)), _v17), _v12(_v20(_v4, _v23(100), _v24(_v12), _v17(([_v0, _v1]) => _v1), _v21(([_v0, _v1], [_v2]) => [_v1, _v2], [0, 0]), _v18(([_v0, _v1]) => _v1 - _v0)), _v17), {
        atBottomState: _v14,
        atBottomStateChange: _v8,
        atBottomThreshold: _v10,
        atTopStateChange: _v9,
        atTopThreshold: _v11,
        isAtBottom: _v6,
        isAtTop: _v7,
        isScrolling: _v12,
        lastJumpDueToItemResize: _v15,
        scrollDirection: _v16,
        scrollVelocity: _v17
      };
    }, _v9(_v42)),
    _v87 = "bottom",
    _v88 = "none";
  function _v89(_v0, _v1, _v2) {
    return "number" == typeof _v0 ? "up" === _v2 && "top" === _v1 || _v2 === _v84 && _v1 === _v87 ? _v0 : 0 : "up" === _v2 ? "top" === _v1 ? _v0.main : _v0.reverse : _v1 === _v87 ? _v0.main : _v0.reverse;
  }
  function _v90(_v0, _v1) {
    return "number" == typeof _v0 ? _v0 : _v0[_v1] ?? 0;
  }
  let _v91 = _v29(([{
      deviation: _v0,
      fixedHeaderHeight: _v1,
      headerHeight: _v2,
      scrollTop: _v3,
      viewportHeight: _v4
    }]) => {
      let _v5 = _v27(),
        _v6 = _v25(0),
        _v7 = _v25(0),
        _v8 = _v25(0),
        _v9 = _v26(_v20(_v31(_v32(_v3), _v32(_v4), _v32(_v2), _v32(_v5, _v58), _v32(_v8), _v32(_v6), _v32(_v1), _v32(_v0), _v32(_v7)), _v18(([_v0, _v1, _v2, [_v3, _v4], _v5, _v6, _v7, _v8, _v9]) => {
          let _v10 = _v0 - _v8,
            _v11 = Math.max(_v2 - _v10, 0),
            _v12 = _v88,
            _v13 = _v90(_v9, "top"),
            _v14 = _v90(_v9, _v87);
          return _v3 -= _v8, _v3 += _v2 + _v7, _v4 += _v2 + _v7, _v3 > _v0 + (_v6 + _v7) - _v13 && (_v12 = "up"), (_v4 -= _v8) < _v0 - _v11 + _v1 + _v14 && (_v12 = _v84), _v12 !== _v88 ? [Math.max(_v10 - _v2 - _v89(_v5, "top", _v12) - _v13, 0), _v10 - _v11 - _v7 + _v1 + _v89(_v5, _v87, _v12) + _v14] : null;
        }), _v17(_v0 => null !== _v0), _v16(_v58)), [0, 0]);
      return {
        increaseViewportBy: _v7,
        listBoundary: _v5,
        overscan: _v8,
        topListHeight: _v6,
        visibleRange: _v9
      };
    }, _v9(_v42), {
      singleton: !0
    }),
    _v92 = {
      bottom: 0,
      firstItemIndex: 0,
      items: [],
      offsetBottom: 0,
      offsetTop: 0,
      top: 0,
      topItems: [],
      topListHeight: 0,
      totalCount: 0
    };
  function _v93(_v0, _v1, _v2, _v3, _v4, _v5) {
    let {
        lastIndex: _v6,
        lastOffset: _v7,
        lastSize: _v8
      } = _v4,
      _v9 = 0,
      _v10 = 0;
    if (_v0.length > 0) {
      _v9 = _v0[0].offset;
      let _v0 = _v0[_v0.length - 1];
      _v10 = _v0.offset + _v0.size;
    }
    let _v11 = _v2 - _v6,
      _v12 = _v9,
      _v13 = _v7 + _v11 * _v8 + (_v11 - 1) * _v3 - _v10;
    return {
      bottom: _v10,
      firstItemIndex: _v5,
      items: _v95(_v0, _v4, _v5),
      offsetBottom: _v13,
      offsetTop: _v9,
      top: _v12,
      topItems: _v95(_v1, _v4, _v5),
      topListHeight: _v1.reduce((_v0, _v1) => _v1.size + _v0, 0),
      totalCount: _v2
    };
  }
  function _v94(_v0, _v1, _v2, _v3, _v4, _v5) {
    let _v6 = 0;
    if (_v2.groupIndices.length > 0) for (let _v0 of _v2.groupIndices) {
      if (_v0 - _v6 >= _v0) break;
      _v6++;
    }
    let _v7 = _v0 + _v6,
      _v8 = _v81(_v1, _v7);
    return _v93(Array.from({
      length: _v7
    }).map((_v0, _v1) => ({
      data: _v5[_v1 + _v8],
      index: _v1 + _v8,
      offset: 0,
      size: 0
    })), [], _v7, _v4, _v2, _v3);
  }
  function _v95(_v0, _v1, _v2) {
    if (0 === _v0.length) return [];
    if (!_v62(_v1)) return _v0.map(_v0 => ({
      ..._v0,
      index: _v0.index + _v2,
      originalIndex: _v0.index
    }));
    let _v3 = _v0[0].index,
      _v4 = _v0[_v0.length - 1].index,
      _v5 = [],
      _v6 = _v49(_v1.groupOffsetTree, _v3, _v4),
      _v7,
      _v8 = 0;
    for (let _v0 of _v0) {
      let _v0;
      (!_v7 || _v7.end < _v0.index) && (_v7 = _v6.shift(), _v8 = _v1.groupIndices.indexOf(_v7.start)), _v0 = _v0.index === _v7.start ? {
        index: _v8,
        type: "group"
      } : {
        groupIndex: _v8,
        index: _v0.index - (_v8 + 1) + _v2
      }, _v5.push({
        ..._v0,
        data: _v0.data,
        offset: _v0.offset,
        originalIndex: _v0.index,
        size: _v0.size
      });
    }
    return _v5;
  }
  function _v96(_v0, _v1) {
    return void 0 === _v0 ? 0 : "number" == typeof _v0 ? _v0 : _v0[_v1] ?? 0;
  }
  let _v97 = _v29(([{
      data: _v0,
      firstItemIndex: _v1,
      gap: _v2,
      sizes: _v3,
      totalCount: _v4
    }, _v5, {
      listBoundary: _v6,
      topListHeight: _v7,
      visibleRange: _v8
    }, {
      initialTopMostItemIndex: _v9,
      scrolledToInitialItem: _v10
    }, {
      topListHeight: _v11
    }, _v12, {
      didMount: _v13
    }, {
      recalcInProgress: _v14
    }]) => {
      let _v15 = _v25([]),
        _v16 = _v25(0),
        _v17 = _v27(),
        _v18 = _v25(0);
      _v12(_v5.topItemsIndexes, _v15);
      let _v19 = _v26(_v20(_v31(_v13, _v14, _v32(_v8, _v58), _v32(_v4), _v32(_v3), _v32(_v9), _v10, _v32(_v15), _v32(_v1), _v32(_v2), _v32(_v18), _v0), _v17(([_v0, _v1,, _v2,,,,,,,, _v3]) => {
        let _v4 = void 0 !== _v3 && _v3.length !== _v2;
        return _v0 && !_v1 && !_v4;
      }), _v18(([,, [_v0, _v1], _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10]) => {
        var _v11;
        let {
            offsetTree: _v12,
            sizeTree: _v13
          } = _v3,
          _v14 = _v11(_v16);
        if (0 === _v2) return {
          ..._v92,
          totalCount: _v2
        };
        if (0 === _v0 && 0 === _v1) return 0 === _v14 ? {
          ..._v92,
          totalCount: _v2
        } : _v94(_v14, _v4, _v3, _v7, _v8, _v10 || []);
        if (_v45(_v13)) return _v14 > 0 ? null : _v93(function (_v0, _v1, _v2) {
          if (_v62(_v1)) {
            let _v0 = _v66(_v0, _v1);
            return [{
              index: _v47(_v1.groupOffsetTree, _v0)[0],
              offset: 0,
              size: 0
            }, {
              data: _v2?.[0],
              index: _v0,
              offset: 0,
              size: 0
            }];
          }
          return [{
            data: _v2?.[0],
            index: _v0,
            offset: 0,
            size: 0
          }];
        }(_v81(_v4, _v2), _v3, _v10), [], _v2, _v8, _v3, _v7);
        let _v15 = [];
        if (_v6.length > 0) {
          let _v0 = _v6[0],
            _v1 = _v6[_v6.length - 1],
            _v2 = 0;
          for (let _v0 of _v49(_v13, _v0, _v1)) {
            let _v0 = _v0.value,
              _v1 = Math.max(_v0.start, _v0),
              _v2 = Math.min(_v0.end, _v1);
            for (let _v0 = _v1; _v0 <= _v2; _v0++) _v15.push({
              data: _v10?.[_v0],
              index: _v0,
              offset: _v2,
              size: _v0
            }), _v2 += _v0;
          }
        }
        if (!_v5) return _v93([], _v15, _v2, _v8, _v3, _v7);
        let _v16 = _v6.length > 0 ? _v6[_v6.length - 1] + 1 : 0,
          _v17 = function (_v0, _v1, _v2, _v3 = 0) {
            let _v4, _v5;
            return _v3 > 0 && (_v1 = Math.max(_v1, _v0[_v60(_v0, _v3, _v63)].offset)), _v44((_v4 = _v60(_v0, _v1, _v64), _v5 = _v60(_v0, _v2, _v64, _v4), _v0.slice(_v4, _v5 + 1)), _v71);
          }(_v12, _v0, _v1, _v16);
        if (0 === _v17.length) return null;
        let _v18 = _v2 - 1,
          _v19 = ((_v0 => {
            for (let _v0 of _v17) {
              let _v0 = _v0.value,
                _v1 = _v0.offset,
                _v2 = _v0.start,
                _v3 = _v0.size;
              if (_v0.offset < _v0) {
                let _v0 = (_v2 += Math.floor((_v0 - _v0.offset + _v8) / (_v3 + _v8))) - _v0.start;
                _v1 += _v0 * _v3 + _v0 * _v8;
              }
              _v2 < _v16 && (_v1 += (_v16 - _v2) * _v3, _v2 = _v16);
              let _v4 = Math.min(_v0.end, _v18);
              for (let _v0 = _v2; _v0 <= _v4 && !(_v1 >= _v1); _v0++) _v0.push({
                data: _v10?.[_v0],
                index: _v0,
                offset: _v1,
                size: _v3
              }), _v1 += _v3 + _v8;
            }
          })(_v11 = []), _v11),
          _v20 = _v96(_v9, "top"),
          _v21 = _v96(_v9, _v87);
        if (_v19.length > 0 && (_v20 > 0 || _v21 > 0)) {
          let _v0 = _v19[0],
            _v1 = _v19[_v19.length - 1];
          if (_v20 > 0 && _v0.index > _v16) {
            let _v0 = Math.min(_v20, _v0.index - _v16),
              _v1 = [],
              _v2 = _v0.offset;
            for (let _v0 = _v0.index - 1; _v0 >= _v0.index - _v0; _v0--) {
              let _v0 = _v49(_v13, _v0, _v0)[0]?.value ?? _v0.size;
              _v2 -= _v0 + _v8, _v1.unshift({
                data: _v10?.[_v0],
                index: _v0,
                offset: _v2,
                size: _v0
              });
            }
            _v19.unshift(..._v1);
          }
          if (_v21 > 0 && _v1.index < _v18) {
            let _v0 = Math.min(_v21, _v18 - _v1.index),
              _v1 = _v1.offset + _v1.size + _v8;
            for (let _v0 = _v1.index + 1; _v0 <= _v1.index + _v0; _v0++) {
              let _v0 = _v49(_v13, _v0, _v0)[0]?.value ?? _v1.size;
              _v19.push({
                data: _v10?.[_v0],
                index: _v0,
                offset: _v1,
                size: _v0
              }), _v1 += _v0 + _v8;
            }
          }
        }
        return _v93(_v19, _v15, _v2, _v8, _v3, _v7);
      }), _v17(_v0 => null !== _v0), _v16()), _v92);
      _v12(_v20(_v0, _v17(_v6), _v18(_v0 => _v0?.length)), _v4), _v12(_v20(_v19, _v18(_v0 => _v0.topListHeight)), _v11), _v12(_v11, _v7), _v12(_v20(_v19, _v18(_v0 => [_v0.top, _v0.bottom])), _v6), _v12(_v20(_v19, _v18(_v0 => _v0.items)), _v17);
      let _v20 = _v28(_v20(_v19, _v17(({
          items: _v0
        }) => _v0.length > 0), _v24(_v4, _v0), _v17(([{
          items: _v0
        }, _v1]) => _v0[_v0.length - 1].originalIndex === _v1 - 1), _v18(([, _v0, _v1]) => [_v0 - 1, _v1]), _v16(_v58), _v18(([_v0]) => _v0))),
        _v21 = _v28(_v20(_v19, _v23(200), _v17(({
          items: _v0,
          topItems: _v1
        }) => _v0.length > 0 && _v0[0].originalIndex === _v1.length), _v18(({
          items: _v0
        }) => _v0[0].index), _v16())),
        _v22 = _v28(_v20(_v19, _v17(({
          items: _v0
        }) => _v0.length > 0), _v18(({
          items: _v0
        }) => {
          let _v1 = 0,
            _v2 = _v0.length - 1;
          for (; "group" === _v0[_v1].type && _v1 < _v2;) _v1++;
          for (; "group" === _v0[_v2].type && _v2 > _v1;) _v2--;
          return {
            endIndex: _v0[_v2].index,
            startIndex: _v0[_v1].index
          };
        }), _v16(_v57)));
      return {
        endReached: _v20,
        initialItemCount: _v16,
        itemsRendered: _v17,
        listState: _v19,
        minOverscanItemCount: _v18,
        rangeChanged: _v22,
        startReached: _v21,
        topItemsIndexes: _v15,
        ..._v12
      };
    }, _v9(_v73, _v75, _v91, _v82, _v79, _v86, _v76, _v59), {
      singleton: !0
    }),
    _v98 = _v29(([{
      fixedFooterHeight: _v0,
      fixedHeaderHeight: _v1,
      footerHeight: _v2,
      headerHeight: _v3
    }, {
      listState: _v4
    }]) => {
      let _v5 = _v27(),
        _v6 = _v26(_v20(_v31(_v2, _v0, _v3, _v1, _v4), _v18(([_v0, _v1, _v2, _v3, _v4]) => _v0 + _v1 + _v2 + _v3 + _v4.offsetBottom + _v4.bottom)), 0);
      return _v12(_v32(_v6), _v5), {
        totalListHeight: _v6,
        totalListHeightChanged: _v5
      };
    }, _v9(_v42, _v97), {
      singleton: !0
    }),
    _v99 = _v29(([{
      viewportHeight: _v0
    }, {
      totalListHeight: _v1
    }]) => {
      let _v2 = _v25(!1),
        _v3 = _v26(_v20(_v31(_v2, _v0, _v1), _v17(([_v0]) => _v0), _v18(([, _v0, _v1]) => Math.max(0, _v0 - _v1)), _v23(0), _v16()), 0);
      return {
        alignToBottom: _v2,
        paddingTopAddition: _v3
      };
    }, _v9(_v42, _v98), {
      singleton: !0
    }),
    _v100 = _v29(() => ({
      context: _v25(null)
    })),
    _v101 = ({
      itemBottom: _v0,
      itemTop: _v1,
      locationParams: {
        align: _v2,
        behavior: _v3,
        ..._v4
      },
      viewportBottom: _v5,
      viewportTop: _v6
    }) => _v1 < _v6 ? {
      ..._v4,
      align: _v2 ?? "start",
      ...(void 0 !== _v3 ? {
        behavior: _v3
      } : {})
    } : _v0 > _v5 ? {
      ..._v4,
      align: _v2 ?? "end",
      ...(void 0 !== _v3 ? {
        behavior: _v3
      } : {})
    } : null,
    _v102 = _v29(([{
      gap: _v0,
      sizes: _v1,
      totalCount: _v2
    }, {
      fixedFooterHeight: _v3,
      fixedHeaderHeight: _v4,
      headerHeight: _v5,
      scrollingInProgress: _v6,
      scrollTop: _v7,
      viewportHeight: _v8
    }, {
      scrollToIndex: _v9
    }]) => {
      let _v10 = _v27();
      return _v12(_v20(_v10, _v24(_v1, _v8, _v2, _v5, _v4, _v3, _v7), _v24(_v0), _v18(([[_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7], _v8]) => {
        let {
            calculateViewLocation: _v9 = _v101,
            done: _v10,
            ..._v11
          } = _v0,
          _v12 = _v67(_v0, _v1, _v3 - 1),
          _v13 = _v65(_v12, _v1.offsetTree, _v8) + _v4 + _v5,
          _v14 = _v9({
            itemBottom: _v13 + _v47(_v1.sizeTree, _v12)[1],
            itemTop: _v13,
            locationParams: _v11,
            viewportBottom: _v7 + _v2 - _v6,
            viewportTop: _v7 + _v5
          });
        return null !== _v14 ? _v10 && _v13(_v20(_v6, _v17(_v0 => !_v0), _v22(_v11(_v6) ? 1 : 2)), _v10) : _v10?.(), _v14;
      }), _v17(_v0 => null !== _v0)), _v9), {
        scrollIntoView: _v10
      };
    }, _v9(_v73, _v42, _v79, _v97, _v36), {
      singleton: !0
    });
  function _v103(_v0) {
    return !1 !== _v0 && ("smooth" === _v0 ? "smooth" : "auto");
  }
  let _v104 = _v29(([{
      listRefresh: _v0,
      totalCount: _v1,
      fixedItemSize: _v2,
      data: _v3
    }, {
      atBottomState: _v4,
      isAtBottom: _v5
    }, {
      scrollToIndex: _v6
    }, {
      scrolledToInitialItem: _v7
    }, {
      didMount: _v8,
      propsReady: _v9
    }, {
      log: _v10
    }, {
      scrollingInProgress: _v11
    }, {
      context: _v12
    }, {
      scrollIntoView: _v13
    }]) => {
      let _v14 = _v25(!1),
        _v15 = _v27(),
        _v16 = null;
      function _v17(_v0) {
        _v6(0, {
          align: "end",
          behavior: _v0,
          index: "LAST"
        });
      }
      function _v18(_v0) {
        setTimeout(_v13(_v4, _v0 => {
          _v0 && !_v0.atBottom && "SIZE_INCREASED" === _v0.notAtBottomBecause && null === _v16 && (_v11(_v10)("scrolling to bottom due to increased size", {}, 0), _v17("auto"));
        }), 100);
      }
      _v20(_v31(_v20(_v32(_v1), _v22(1)), _v8), _v24(_v32(_v14), _v5, _v7, _v11), _v18(([[_v0, _v1], _v2, _v3, _v4, _v5]) => {
        let _v6,
          _v7 = _v1 && _v4,
          _v8 = "auto";
        return _v7 && (_v6 = _v3 || _v5, _v8 = "function" == typeof _v2 ? _v103(_v2(_v6)) : _v6 && _v103(_v2), _v7 = _v7 && !1 !== _v8), {
          followOutputBehavior: _v8,
          shouldFollow: _v7,
          totalCount: _v0
        };
      }), _v17(({
        shouldFollow: _v0
      }) => _v0))(1, ({
        followOutputBehavior: _v0,
        totalCount: _v1
      }) => {
        null !== _v16 && (_v16(), _v16 = null), void 0 !== _v11(_v2) ? requestAnimationFrame(() => {
          _v11(_v10)("following output to ", {
            totalCount: _v1
          }, 0), _v17(_v0);
        }) : _v16 = _v13(_v0, () => {
          _v11(_v10)("following output to ", {
            totalCount: _v1
          }, 0), _v17(_v0), _v16 = null;
        });
      }), _v20(_v31(_v32(_v14), _v1, _v9), _v17(([_v0,, _v1]) => !1 !== _v0 && _v1), _v21(({
        value: _v0
      }, [, _v1]) => ({
        refreshed: _v0 === _v1,
        value: _v1
      }), {
        refreshed: !1,
        value: 0
      }), _v17(({
        refreshed: _v0
      }) => _v0), _v24(_v14, _v1))(1, ([, _v0]) => {
        _v11(_v7) && _v18(!1 !== _v0);
      }), _v15(1, () => {
        _v18(!1 !== _v11(_v14));
      }), _v31(_v32(_v14), _v4)(1, ([_v0, _v1]) => {
        !1 === _v0 || _v1.atBottom || "VIEWPORT_HEIGHT_DECREASING" !== _v1.notAtBottomBecause || _v17("auto");
      });
      let _v19 = _v25(null),
        _v20 = _v27();
      return _v12(_v33(_v20(_v32(_v3), _v18(_v0 => _v0?.length ?? 0)), _v20(_v32(_v1))), _v20), _v20(_v31(_v20(_v20, _v22(1)), _v8), _v24(_v32(_v19), _v7, _v11, _v12), _v18(([[_v0, _v1], _v2, _v3, _v4, _v5]) => _v1 && _v3 && _v2?.({
        context: _v5,
        totalCount: _v0,
        scrollingInProgress: _v4
      })), _v17(_v0 => !!_v0), _v23(0))(1, _v0 => {
        null !== _v16 && (_v16(), _v16 = null), void 0 !== _v11(_v2) ? requestAnimationFrame(() => {
          _v11(_v10)("scrolling into view", {}), _v13(0, _v0);
        }) : _v16 = _v13(_v0, () => {
          _v11(_v10)("scrolling into view", {}), _v13(0, _v0), _v16 = null;
        });
      }), {
        autoscrollToBottom: _v15,
        followOutput: _v14,
        scrollIntoViewOnChange: _v19
      };
    }, _v9(_v73, _v86, _v79, _v82, _v76, _v36, _v42, _v100, _v102)),
    _v105 = _v29(([{
      data: _v0,
      firstItemIndex: _v1,
      gap: _v2,
      sizes: _v3
    }, {
      initialTopMostItemIndex: _v4
    }, {
      initialItemCount: _v5,
      listState: _v6
    }, {
      didMount: _v7
    }]) => (_v12(_v20(_v7, _v24(_v5), _v17(([, _v0]) => 0 !== _v0), _v24(_v4, _v3, _v1, _v2, _v0), _v18(([[, _v0], _v1, _v2, _v3, _v4, _v5 = []]) => _v94(_v0, _v1, _v2, _v3, _v4, _v5))), _v6), {}), _v9(_v73, _v82, _v97, _v76), {
      singleton: !0
    }),
    _v106 = _v29(([{
      didMount: _v0
    }, {
      scrollTo: _v1
    }, {
      listState: _v2
    }]) => {
      let _v3 = _v25(0);
      return _v20(_v0, _v24(_v3), _v17(([, _v0]) => 0 !== _v0), _v18(([, _v0]) => ({
        top: _v0
      })))(1, _v0 => {
        _v13(_v20(_v2, _v22(1), _v17(_v0 => _v0.items.length > 1)), () => {
          requestAnimationFrame(() => {
            _v1(0, _v0);
          });
        });
      }), {
        initialScrollTop: _v3
      };
    }, _v9(_v76, _v42, _v97), {
      singleton: !0
    }),
    _v107 = _v29(([{
      scrollVelocity: _v0
    }]) => {
      let _v1 = _v25(!1),
        _v2 = _v27(),
        _v3 = _v25(!1);
      return _v12(_v20(_v0, _v24(_v3, _v1, _v2), _v17(([_v0, _v1]) => !1 !== _v1 && void 0 !== _v1), _v18(([_v0, _v1, _v2, _v3]) => {
        let {
          enter: _v4,
          exit: _v5
        } = _v1;
        if (_v2) {
          if (_v5(_v0, _v3)) return !1;
        } else if (_v4(_v0, _v3)) return !0;
        return _v2;
      }), _v16()), _v1), _v20(_v31(_v1, _v0, _v2), _v24(_v3))(1, ([[_v0, _v1, _v2], _v3]) => {
        _v0 && !1 !== _v3 && void 0 !== _v3 && _v3.change && _v3.change(_v1, _v2);
      }), {
        isSeeking: _v1,
        scrollSeekConfiguration: _v3,
        scrollSeekRangeChanged: _v2,
        scrollVelocity: _v0
      };
    }, _v9(_v86), {
      singleton: !0
    }),
    _v108 = _v29(([{
      scrollContainerState: _v0,
      scrollTo: _v1
    }]) => {
      let _v2 = _v27(),
        _v3 = _v27(),
        _v4 = _v27(),
        _v5 = _v25(!1),
        _v6 = _v25(void 0);
      return _v12(_v20(_v31(_v2, _v3), _v18(([{
        scrollTop: _v0,
        viewportHeight: _v1
      }, {
        offsetTop: _v2,
        listHeight: _v3
      }]) => ({
        scrollHeight: _v3,
        scrollTop: Math.max(0, _v0 - _v2),
        viewportHeight: _v1
      }))), _v0), _v12(_v20(_v1, _v24(_v3), _v18(([_v0, {
        offsetTop: _v1
      }]) => ({
        ..._v0,
        top: _v0.top + _v1
      }))), _v4), {
        customScrollParent: _v6,
        useWindowScroll: _v5,
        windowScrollContainerState: _v2,
        windowScrollTo: _v4,
        windowViewportRect: _v3
      };
    }, _v9(_v42)),
    _v109 = _v29(([{
      sizeRanges: _v0,
      sizes: _v1
    }, {
      headerHeight: _v2,
      scrollTop: _v3
    }, {
      initialTopMostItemIndex: _v4
    }, {
      didMount: _v5
    }, {
      useWindowScroll: _v6,
      windowScrollContainerState: _v7,
      windowViewportRect: _v8
    }]) => {
      let _v9 = _v27(),
        _v10 = _v25(void 0),
        _v11 = _v25(null),
        _v12 = _v25(null);
      return _v12(_v7, _v11), _v12(_v8, _v12), _v20(_v9, _v24(_v1, _v3, _v6, _v11, _v12, _v2))(1, ([_v0, _v1, _v2, _v3, _v4, _v5, _v6]) => {
        let _v7 = _v50(_v1.sizeTree).map(({
          k: _v0,
          v: _v1
        }, _v2, _v3) => {
          let _v4 = _v3[_v2 + 1];
          return {
            endIndex: void 0 !== _v4 ? _v4.k - 1 : 1 / 0,
            size: _v1,
            startIndex: _v0
          };
        });
        _v3 && null !== _v4 && null !== _v5 && (_v2 = _v4.scrollTop - _v5.offsetTop), _v0({
          ranges: _v7,
          scrollTop: _v2 -= _v6
        });
      }), _v12(_v20(_v10, _v17(_v6), _v18(_v110)), _v4), _v12(_v20(_v5, _v24(_v10), _v17(([, _v0]) => void 0 !== _v0), _v16(), _v18(([, _v0]) => _v0.ranges)), _v0), {
        getState: _v9,
        restoreStateFrom: _v10
      };
    }, _v9(_v73, _v42, _v82, _v76, _v108));
  function _v110(_v0) {
    return {
      align: "start",
      index: 0,
      offset: _v0.scrollTop
    };
  }
  let _v111 = _v29(([{
    topItemsIndexes: _v0
  }]) => {
    let _v1 = _v25(0);
    return _v12(_v20(_v1, _v17(_v0 => _v0 >= 0), _v18(_v0 => Array.from({
      length: _v0
    }).map((_v0, _v1) => _v1))), _v0), {
      topItemCount: _v1
    };
  }, _v9(_v97));
  function _v112(_v0) {
    let _v1 = !1,
      _v2;
    return () => (_v1 || (_v1 = !0, _v2 = _v0()), _v2);
  }
  let _v113 = _v112(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)),
    _v114 = _v29(([{
      deviation: _v0,
      scrollBy: _v1,
      scrollingInProgress: _v2,
      scrollTop: _v3
    }, {
      isAtBottom: _v4,
      isScrolling: _v5,
      lastJumpDueToItemResize: _v6,
      scrollDirection: _v7
    }, {
      listState: _v8
    }, {
      beforeUnshiftWith: _v9,
      gap: _v10,
      shiftWithOffset: _v11,
      sizes: _v12
    }, {
      log: _v13
    }, {
      recalcInProgress: _v14
    }]) => {
      let _v15 = _v28(_v20(_v8, _v24(_v6), _v21(([, _v0, _v1, _v2], [{
        bottom: _v3,
        items: _v4,
        offsetBottom: _v5,
        totalCount: _v6
      }, _v7]) => {
        let _v8 = _v3 + _v5,
          _v9 = 0;
        return _v1 === _v6 && _v0.length > 0 && _v4.length > 0 && (0 === _v4[0].originalIndex && 0 === _v0[0].originalIndex || 0 != (_v9 = _v8 - _v2) && (_v9 += _v7)), [_v9, _v4, _v6, _v8];
      }, [0, [], 0, 0]), _v17(([_v0]) => 0 !== _v0), _v24(_v3, _v7, _v2, _v4, _v13, _v14), _v17(([, _v0, _v1, _v2,,, _v3]) => !_v3 && !_v2 && 0 !== _v0 && "up" === _v1), _v18(([[_v0],,,,, _v1]) => (_v1("Upward scrolling compensation", {
        amount: _v0
      }, 0), _v0))));
      function _v16(_v0) {
        _v0 > 0 ? (_v1(0, {
          behavior: "auto",
          top: -_v0
        }), _v0(0, 0)) : (_v0(0, 0), _v1(0, {
          behavior: "auto",
          top: -_v0
        }));
      }
      return _v20(_v15, _v24(_v0, _v5))(1, ([_v0, _v1, _v2]) => {
        _v2 && _v113() ? _v0(0, _v1 - _v0) : _v16(-_v0);
      }), _v20(_v31(_v26(_v5, !1), _v0, _v14), _v17(([_v0, _v1, _v2]) => !_v0 && !_v2 && 0 !== _v1), _v18(([_v0, _v1]) => _v1), _v23(1))(1, _v16), _v12(_v20(_v11, _v18(_v0 => ({
        top: -_v0
      }))), _v1), _v20(_v9, _v24(_v12, _v10), _v18(([_v0, {
        groupIndices: _v1,
        lastSize: _v2,
        sizeTree: _v3
      }, _v4]) => {
        if (0 === _v1.length) return _v0 * (_v2 + _v4);
        let _v5 = 0,
          _v6 = _v46(_v3, 0),
          _v7 = 0,
          _v8 = 0;
        for (; _v7 < _v0;) {
          _v7++, _v5 += _v6;
          let _v0 = _v1.length === _v8 + 1 ? 1 / 0 : _v1[_v8 + 1] - _v1[_v8] - 1;
          _v7 + _v0 > _v0 && (_v5 -= _v6, _v0 = _v0 - _v7 + 1), _v7 += _v0, _v5 += _v0 * (_v2 + _v4), _v8++;
        }
        return _v5;
      }))(1, _v0 => {
        _v0(0, _v0), requestAnimationFrame(() => {
          _v1(0, {
            top: _v0
          }), requestAnimationFrame(() => {
            _v0(0, 0), _v14(0, !1);
          });
        });
      }), {
        deviation: _v0
      };
    }, _v9(_v42, _v86, _v97, _v73, _v36, _v59)),
    _v115 = _v29(([_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10]) => ({
      ..._v0,
      ..._v1,
      ..._v2,
      ..._v3,
      ..._v4,
      ..._v5,
      ..._v6,
      ..._v7,
      ..._v8,
      ..._v9,
      ..._v10
    }), _v9(_v91, _v105, _v76, _v107, _v98, _v106, _v99, _v108, _v102, _v36, _v100)),
    _v116 = _v29(([{
      data: _v0,
      defaultItemSize: _v1,
      firstItemIndex: _v2,
      fixedItemSize: _v3,
      fixedGroupSize: _v4,
      gap: _v5,
      groupIndices: _v6,
      heightEstimates: _v7,
      itemSize: _v8,
      sizeRanges: _v9,
      sizes: _v10,
      statefulTotalCount: _v11,
      totalCount: _v12,
      trackItemSizes: _v13
    }, {
      initialItemFinalLocationReached: _v14,
      initialTopMostItemIndex: _v15,
      scrolledToInitialItem: _v16
    }, _v17, _v18, _v19, _v20, {
      scrollToIndex: _v21
    }, _v22, {
      topItemCount: _v23
    }, {
      groupCounts: _v24
    }, _v25]) => {
      let {
        listState: _v26,
        minOverscanItemCount: _v27,
        topItemsIndexes: _v28,
        rangeChanged: _v29,
        ..._v30
      } = _v20;
      return _v12(_v29, _v25.scrollSeekRangeChanged), _v12(_v20(_v25.windowViewportRect, _v18(_v0 => _v0.visibleHeight)), _v17.viewportHeight), {
        data: _v0,
        defaultItemHeight: _v1,
        firstItemIndex: _v2,
        fixedItemHeight: _v3,
        fixedGroupHeight: _v4,
        gap: _v5,
        groupCounts: _v24,
        heightEstimates: _v7,
        initialItemFinalLocationReached: _v14,
        initialTopMostItemIndex: _v15,
        scrolledToInitialItem: _v16,
        sizeRanges: _v9,
        topItemCount: _v23,
        topItemsIndexes: _v28,
        totalCount: _v12,
        ..._v19,
        groupIndices: _v6,
        itemSize: _v8,
        listState: _v26,
        minOverscanItemCount: _v27,
        scrollToIndex: _v21,
        statefulTotalCount: _v11,
        trackItemSizes: _v13,
        rangeChanged: _v29,
        ..._v30,
        ..._v25,
        ..._v17,
        sizes: _v10,
        ..._v18
      };
    }, _v9(_v73, _v82, _v42, _v109, _v104, _v97, _v79, _v114, _v111, _v75, _v115)),
    _v117 = "u" > typeof document ? _v2.default.useLayoutEffect : _v2.default.useEffect;
  function _v118(_v0, _v1, _v2) {
    let _v3 = Object.keys(_v1.required || {}),
      _v4 = Object.keys(_v1.optional || {}),
      _v5 = Object.keys(_v1.methods || {}),
      _v6 = Object.keys(_v1.events || {}),
      _v7 = _v2.default.createContext({});
    function _v8(_v0, _v1) {
      for (let _v0 of (void 0 !== _v0.propsReady && (0, _v0.propsReady)(0, !1), _v3)) (0, _v0[_v1.required[_v0]])(0, _v1[_v0]);
      for (let _v0 of _v4) _v0 in _v1 && (0, _v0[_v1.optional[_v0]])(0, _v1[_v0]);
      void 0 !== _v0.propsReady && (0, _v0.propsReady)(0, !0);
    }
    function _v9(_v0) {
      return _v6.reduce((_v0, _v1) => {
        var _v2;
        let _v3, _v4, _v5;
        return _v0[_v1] = (_v2 = _v0[_v1.events[_v1]], _v5 = () => _v3?.(), function (_v0, _v1) {
          switch (_v0) {
            case 1:
              return _v1 ? _v4 === _v1 ? void 0 : (_v5(), _v4 = _v1, _v3 = _v2(1, _v1)) : (_v5(), _v7);
            case 2:
              _v5(), _v4 = null;
              return;
          }
        }), _v0;
      }, {});
    }
    return {
      Component: _v2.default.forwardRef(function (_v0, _v1) {
        var _v2;
        let {
            children: _v3,
            ..._v4
          } = _v0,
          [_v5] = _v2.default.useState(() => {
            var _v0;
            let _v1, _v2;
            return _v1 = new Map(), _v8(_v0 = (_v2 = ({
              constructor: _v0,
              dependencies: _v1,
              id: _v2,
              singleton: _v3
            }) => {
              if (_v3 && _v1.has(_v2)) return _v1.get(_v2);
              let _v4 = _v0(_v1.map(_v0 => _v2(_v0)));
              return _v3 && _v1.set(_v2, _v4), _v4;
            })(_v0), _v4), _v0;
          }),
          [_v6] = _v2.default.useState(() => _v9(_v5));
        return _v117(() => {
          for (let _v0 of _v6) _v0 in _v4 && (0, _v6[_v0])(1, _v4[_v0]);
          return () => {
            Object.values(_v6).map(_v10);
          };
        }, [_v4, _v6, _v5]), _v117(() => {
          _v8(_v5, _v4);
        }), _v2.default.useImperativeHandle(_v1, (_v2 = _v5.reduce((_v0, _v1) => (_v0[_v1] = _v0 => {
          (0, _v5[_v1.methods[_v1]])(0, _v0);
        }, _v0), {}), () => _v2)), (0, _v1.jsx)(_v7.Provider, {
          value: _v5,
          children: void 0 !== _v2 ? (0, _v1.jsx)(_v2, {
            ...function (_v0, _v1) {
              let _v2 = {},
                _v3 = {},
                _v4 = 0,
                _v5 = _v0.length;
              for (; _v4 < _v5;) _v3[_v0[_v4]] = 1, _v4 += 1;
              for (let _v0 in _v1) Object.hasOwn(_v3, _v0) || (_v2[_v0] = _v1[_v0]);
              return _v2;
            }([..._v3, ..._v4, ..._v6], _v4),
            children: _v3
          }) : _v3
        });
      }),
      useEmitter: (_v0, _v1) => {
        let _v2 = _v2.default.useContext(_v7)[_v0];
        _v117(() => _v2(1, _v1), [_v1, _v2]);
      },
      useEmitterValue: _v2.default.version.startsWith("18") ? _v0 => {
        let _v1 = _v2.default.useContext(_v7)[_v0],
          _v2 = _v2.default.useCallback(_v0 => _v1(1, _v0), [_v1]);
        return _v2.default.useSyncExternalStore(_v2, () => _v11(_v1), () => _v11(_v1));
      } : _v0 => {
        let _v1 = _v2.default.useContext(_v7)[_v0],
          [_v2, _v3] = _v2.default.useState(() => _v11(_v1));
        return _v117(() => _v1(1, _v0 => {
          _v0 !== _v2 && _v3(() => _v0);
        }), [_v1, _v2]), _v2;
      },
      usePublisher: _v0 => {
        let _v1 = _v2.default.useContext(_v7);
        return _v2.default.useCallback(_v0 => {
          (0, _v1[_v0])(0, _v0);
        }, [_v1, _v0]);
      }
    };
  }
  let _v119 = _v2.default.createContext(void 0),
    _v120 = _v2.default.createContext(void 0),
    _v121 = "-webkit-sticky",
    _v122 = "sticky",
    _v123 = _v112(() => {
      if (typeof document > "u") return _v122;
      let _v0 = document.createElement("div");
      return _v0.style.position = _v121, _v0.style.position === _v121 ? _v121 : _v122;
    }),
    _v124 = "u" > typeof document ? _v2.default.useLayoutEffect : _v2.default.useEffect;
  function _v125(_v0) {
    return "self" in _v0;
  }
  function _v126(_v0, _v1, _v2, _v3 = _v7, _v4, _v5) {
    let _v6 = _v2.default.useRef(null),
      _v7 = _v2.default.useRef(null),
      _v8 = _v2.default.useRef(null),
      _v9 = _v2.default.useCallback(_v0 => {
        let _v1,
          _v2,
          _v3,
          _v4 = _v0.target;
        if ("body" in _v4 || _v125(_v4)) {
          let _v0 = _v125(_v4) ? _v4 : _v4.defaultView;
          _v3 = !0 === _v5 ? _v0.scrollX : _v0.scrollY, _v1 = !0 === _v5 ? _v0.document.documentElement.scrollWidth : _v0.document.documentElement.scrollHeight, _v2 = !0 === _v5 ? _v0.innerWidth : _v0.innerHeight;
        } else _v3 = !0 === _v5 ? _v4.scrollLeft : _v4.scrollTop, _v1 = !0 === _v5 ? _v4.scrollWidth : _v4.scrollHeight, _v2 = !0 === _v5 ? _v4.offsetWidth : _v4.offsetHeight;
        let _v5 = () => {
          _v0({
            scrollHeight: _v1,
            scrollTop: Math.max(_v3, 0),
            viewportHeight: _v2
          });
        };
        !0 === _v0.suppressFlushSync ? _v5() : _v3.default.flushSync(_v5), null !== _v7.current && (_v3 === _v7.current || _v3 <= 0 || _v3 === _v1 - _v2) && (_v7.current = null, _v1(!0), _v8.current && (clearTimeout(_v8.current), _v8.current = null));
      }, [_v0, _v1, _v5]);
    return _v2.default.useEffect(() => {
      let _v0 = _v4 || _v6.current;
      return _v3(_v4 || _v6.current), _v9({
        suppressFlushSync: !0,
        target: _v0
      }), _v0.addEventListener("scroll", _v9, {
        passive: !0
      }), () => {
        _v3(null), _v0.removeEventListener("scroll", _v9);
      };
    }, [_v6, _v9, _v2, _v3, _v4]), {
      scrollByCallback: function (_v0) {
        !0 === _v5 && (_v0 = {
          ...(void 0 !== _v0.behavior ? {
            behavior: _v0.behavior
          } : {}),
          ...(void 0 !== _v0.top ? {
            left: _v0.top
          } : {})
        }), _v6.current.scrollBy(_v0);
      },
      scrollerRef: _v6,
      scrollToCallback: function (_v0) {
        let _v1,
          _v2,
          _v3,
          _v4 = _v6.current;
        if (!_v4 || (!0 === _v5 ? "offsetWidth" in _v4 && 0 === _v4.offsetWidth : "offsetHeight" in _v4 && 0 === _v4.offsetHeight)) return;
        let _v5 = "smooth" === _v0.behavior;
        _v125(_v4) ? (_v2 = Math.max(_v61(_v4.document.documentElement, !0 === _v5 ? "width" : "height"), !0 === _v5 ? _v4.document.documentElement.scrollWidth : _v4.document.documentElement.scrollHeight), _v1 = !0 === _v5 ? _v4.innerWidth : _v4.innerHeight, _v3 = !0 === _v5 ? window.scrollX : window.scrollY) : (_v2 = _v4[!0 === _v5 ? "scrollWidth" : "scrollHeight"], _v1 = _v61(_v4, !0 === _v5 ? "width" : "height"), _v3 = _v4[!0 === _v5 ? "scrollLeft" : "scrollTop"]);
        let _v6 = _v2 - _v1;
        if (_v0.top = Math.ceil(Math.max(Math.min(_v6, _v0.top), 0)), _v83(_v1, _v2) || _v0.top === _v3) {
          _v0({
            scrollHeight: _v2,
            scrollTop: _v3,
            viewportHeight: _v1
          }), _v5 && _v1(!0);
          return;
        }
        _v5 ? (_v7.current = _v0.top, _v8.current && clearTimeout(_v8.current), _v8.current = setTimeout(() => {
          _v8.current = null, _v7.current = null, _v1(!0);
        }, 0)) : _v7.current = null, !0 === _v5 && (_v0 = {
          ...(void 0 !== _v0.behavior ? {
            behavior: _v0.behavior
          } : {}),
          left: _v0.top
        }), _v4.scrollTo(_v0);
      }
    };
  }
  function _v127(_v0) {
    return _v0;
  }
  let _v128 = _v29(() => {
      let _v0 = _v25(_v0 => `Item ${_v0}`),
        _v1 = _v25(_v0 => `Group ${_v0}`),
        _v2 = _v25({}),
        _v3 = _v25(_v127),
        _v4 = _v25("div"),
        _v5 = _v25(_v7),
        _v6 = (_v0, _v1 = null) => _v26(_v20(_v2, _v18(_v0 => _v0[_v0]), _v16()), _v1);
      return {
        components: _v2,
        computeItemKey: _v3,
        EmptyPlaceholder: _v6("EmptyPlaceholder"),
        FooterComponent: _v6("Footer"),
        GroupComponent: _v6("Group", "div"),
        groupContent: _v1,
        HeaderComponent: _v6("Header"),
        HeaderFooterTag: _v4,
        ItemComponent: _v6("Item", "div"),
        itemContent: _v0,
        ListComponent: _v6("List", "div"),
        ScrollerComponent: _v6("Scroller", "div"),
        scrollerRef: _v5,
        ScrollSeekPlaceholder: _v6("ScrollSeekPlaceholder"),
        TopItemListComponent: _v6("TopItemList")
      };
    }),
    _v129 = _v29(([_v0, _v1]) => ({
      ..._v0,
      ..._v1
    }), _v9(_v116, _v128)),
    _v130 = ({
      height: _v0
    }) => (0, _v1.jsx)("div", {
      style: {
        height: _v0
      }
    }),
    _v131 = {
      overflowAnchor: "none",
      position: _v123(),
      zIndex: 1
    },
    _v132 = {
      overflowAnchor: "none"
    },
    _v133 = {
      ..._v132,
      display: "inline-block",
      height: "100%"
    },
    _v134 = _v2.default.memo(function ({
      showTopList: _v0 = !1
    }) {
      let _v1 = _v150("listState"),
        _v2 = _v151("sizeRanges"),
        _v3 = _v150("useWindowScroll"),
        _v4 = _v150("customScrollParent"),
        _v5 = _v151("windowScrollContainerState"),
        _v6 = _v151("scrollContainerState"),
        _v7 = _v150("itemContent"),
        _v8 = _v150("context"),
        _v9 = _v150("groupContent"),
        _v10 = _v150("trackItemSizes"),
        _v11 = _v150("itemSize"),
        _v12 = _v150("log"),
        _v13 = _v151("gap"),
        _v14 = _v150("horizontalDirection"),
        {
          callbackRef: _v15
        } = _v39(_v2, _v11, _v10, _v0 ? _v7 : _v4 || _v3 ? _v5 : _v6, _v12, _v13, _v4, _v14, _v150("skipAnimationFrameInResizeObserver")),
        [_v16, _v17] = _v2.default.useState(0);
      _v149("deviation", _v0 => {
        _v16 !== _v0 && _v17(_v0);
      });
      let _v18 = _v150("EmptyPlaceholder"),
        _v19 = _v150("ScrollSeekPlaceholder") ?? _v130,
        _v20 = _v150("ListComponent"),
        _v21 = _v150("ItemComponent"),
        _v22 = _v150("GroupComponent"),
        _v23 = _v150("computeItemKey"),
        _v24 = _v150("isSeeking"),
        _v25 = _v150("groupIndices").length > 0,
        _v26 = _v150("alignToBottom"),
        _v27 = _v150("initialItemFinalLocationReached"),
        _v28 = _v0 ? {} : {
          boxSizing: "border-box",
          ...(_v14 ? {
            display: "inline-block",
            height: "100%",
            marginLeft: 0 !== _v16 ? _v16 : _v26 ? "auto" : 0,
            paddingLeft: _v1.offsetTop,
            paddingRight: _v1.offsetBottom,
            whiteSpace: "nowrap"
          } : {
            marginTop: 0 !== _v16 ? _v16 : _v26 ? "auto" : 0,
            paddingBottom: _v1.offsetBottom,
            paddingTop: _v1.offsetTop
          }),
          ...(_v27 ? {} : {
            visibility: "hidden"
          })
        };
      return _v0 || 0 !== _v1.totalCount || null == _v18 ? (0, _v1.jsx)(_v20, {
        ..._v139(_v20, _v8),
        "data-testid": _v0 ? "virtuoso-top-item-list" : "virtuoso-item-list",
        ref: _v15,
        style: _v28,
        children: (_v0 ? _v1.topItems : _v1.items).map(_v0 => {
          let _v1 = _v0.originalIndex,
            _v2 = _v23(_v1 + _v1.firstItemIndex, _v0.data, _v8);
          return _v24 ? (0, _v2.createElement)(_v19, {
            ..._v139(_v19, _v8),
            height: _v0.size,
            index: _v0.index,
            key: _v2,
            type: _v0.type || "item",
            ...("group" === _v0.type ? {} : {
              groupIndex: _v0.groupIndex
            })
          }) : "group" === _v0.type ? (0, _v2.createElement)(_v22, {
            ..._v139(_v22, _v8),
            "data-index": _v1,
            "data-item-index": _v0.index,
            "data-known-size": _v0.size,
            key: _v2,
            style: _v131
          }, _v9(_v0.index, _v8)) : (0, _v2.createElement)(_v21, {
            ..._v139(_v21, _v8),
            ..._v140(_v21, _v0.data),
            "data-index": _v1,
            "data-item-group-index": _v0.groupIndex,
            "data-item-index": _v0.index,
            "data-known-size": _v0.size,
            key: _v2,
            style: _v14 ? _v133 : _v132
          }, _v25 ? _v7(_v0.index, _v0.groupIndex, _v0.data, _v8) : _v7(_v0.index, _v0.data, _v8));
        })
      }) : (0, _v1.jsx)(_v18, {
        ..._v139(_v18, _v8)
      });
    }),
    _v135 = {
      height: "100%",
      outline: "none",
      overflowY: "auto",
      position: "relative",
      WebkitOverflowScrolling: "touch"
    },
    _v136 = {
      outline: "none",
      overflowX: "auto",
      position: "relative"
    },
    _v137 = _v0 => ({
      height: "100%",
      position: "absolute",
      top: 0,
      width: "100%",
      ...(_v0 ? {
        display: "flex",
        flexDirection: "column"
      } : void 0)
    }),
    _v138 = {
      position: _v123(),
      top: 0,
      width: "100%",
      zIndex: 1
    };
  function _v139(_v0, _v1) {
    if ("string" != typeof _v0) return {
      context: _v1
    };
  }
  function _v140(_v0, _v1) {
    return {
      item: "string" == typeof _v0 ? void 0 : _v1
    };
  }
  let _v141 = _v2.default.memo(function () {
      let _v0 = _v150("HeaderComponent"),
        _v1 = _v151("headerHeight"),
        _v2 = _v150("HeaderFooterTag"),
        _v3 = _v37(_v2.default.useMemo(() => _v0 => {
          _v1(_v61(_v0, "height"));
        }, [_v1]), !0, _v150("skipAnimationFrameInResizeObserver")),
        _v4 = _v150("context");
      return null != _v0 ? (0, _v1.jsx)(_v2, {
        ref: _v3,
        children: (0, _v1.jsx)(_v0, {
          ..._v139(_v0, _v4)
        })
      }) : null;
    }),
    _v142 = _v2.default.memo(function () {
      let _v0 = _v150("FooterComponent"),
        _v1 = _v151("footerHeight"),
        _v2 = _v150("HeaderFooterTag"),
        _v3 = _v37(_v2.default.useMemo(() => _v0 => {
          _v1(_v61(_v0, "height"));
        }, [_v1]), !0, _v150("skipAnimationFrameInResizeObserver")),
        _v4 = _v150("context");
      return null != _v0 ? (0, _v1.jsx)(_v2, {
        ref: _v3,
        children: (0, _v1.jsx)(_v0, {
          ..._v139(_v0, _v4)
        })
      }) : null;
    });
  function _v143({
    useEmitter: _v0,
    useEmitterValue: _v1,
    usePublisher: _v2
  }) {
    return _v2.default.memo(function ({
      children: _v0,
      style: _v1,
      context: _v2,
      ..._v3
    }) {
      let _v4 = _v2("scrollContainerState"),
        _v5 = _v1("ScrollerComponent"),
        _v6 = _v2("smoothScrollTargetReached"),
        _v7 = _v1("scrollerRef"),
        _v8 = _v1("horizontalDirection") || !1,
        {
          scrollByCallback: _v9,
          scrollerRef: _v10,
          scrollToCallback: _v11
        } = _v126(_v4, _v6, _v5, _v7, void 0, _v8);
      return _v0("scrollTo", _v11), _v0("scrollBy", _v9), (0, _v1.jsx)(_v5, {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: _v10,
        style: {
          ...(_v8 ? _v136 : _v135),
          ..._v1
        },
        tabIndex: 0,
        ..._v3,
        ..._v139(_v5, _v2),
        children: _v0
      });
    });
  }
  function _v144({
    useEmitter: _v0,
    useEmitterValue: _v1,
    usePublisher: _v2
  }) {
    return _v2.default.memo(function ({
      children: _v0,
      style: _v1,
      context: _v2,
      ..._v3
    }) {
      let _v4 = _v2("windowScrollContainerState"),
        _v5 = _v1("ScrollerComponent"),
        _v6 = _v2("smoothScrollTargetReached"),
        _v7 = _v1("totalListHeight"),
        _v8 = _v1("deviation"),
        _v9 = _v1("customScrollParent"),
        _v10 = _v2.default.useRef(null),
        {
          scrollByCallback: _v11,
          scrollerRef: _v12,
          scrollToCallback: _v13
        } = _v126(_v4, _v6, _v5, _v1("scrollerRef"), _v9);
      return _v124(() => (_v12.current = _v9 || _v10.current?.ownerDocument.defaultView, () => {
        _v12.current = null;
      }), [_v12, _v9]), _v0("windowScrollTo", _v13), _v0("scrollBy", _v11), (0, _v1.jsx)(_v5, {
        ref: _v10,
        "data-virtuoso-scroller": !0,
        style: {
          position: "relative",
          ..._v1,
          ...(0 !== _v7 ? {
            height: _v7 + _v8
          } : void 0)
        },
        ..._v3,
        ..._v139(_v5, _v2),
        children: _v0
      });
    });
  }
  let _v145 = ({
      children: _v0
    }) => {
      let _v1 = _v2.default.useContext(_v119),
        _v2 = _v151("viewportHeight"),
        _v3 = _v151("fixedItemHeight"),
        _v4 = _v150("alignToBottom"),
        _v5 = _v150("horizontalDirection"),
        _v6 = _v37(_v2.default.useMemo(() => _v5(_v2, _v0 => _v61(_v0, _v5 ? "width" : "height")), [_v2, _v5]), !0, _v150("skipAnimationFrameInResizeObserver"));
      return _v2.default.useEffect(() => {
        _v1 && (_v2(_v1.viewportHeight), _v3(_v1.itemHeight));
      }, [_v1, _v2, _v3]), (0, _v1.jsx)("div", {
        "data-viewport-type": "element",
        ref: _v6,
        style: _v137(_v4),
        children: _v0
      });
    },
    _v146 = ({
      children: _v0
    }) => {
      let _v1 = _v2.default.useContext(_v119),
        _v2 = _v151("windowViewportRect"),
        _v3 = _v151("fixedItemHeight"),
        _v4 = _v41(_v2, _v150("customScrollParent"), _v150("skipAnimationFrameInResizeObserver")),
        _v5 = _v150("alignToBottom");
      return _v2.default.useEffect(() => {
        _v1 && (_v3(_v1.itemHeight), _v2({
          listHeight: 0,
          offsetTop: 0,
          visibleHeight: _v1.viewportHeight,
          visibleWidth: 100
        }));
      }, [_v1, _v2, _v3]), (0, _v1.jsx)("div", {
        "data-viewport-type": "window",
        ref: _v4,
        style: _v137(_v5),
        children: _v0
      });
    },
    _v147 = ({
      children: _v0
    }) => {
      let _v1 = _v150("TopItemListComponent") ?? "div",
        _v2 = _v150("headerHeight"),
        _v3 = {
          ..._v138,
          marginTop: `${_v2}px`
        },
        _v4 = _v150("context");
      return (0, _v1.jsx)(_v1, {
        style: _v3,
        ..._v139(_v1, _v4),
        children: _v0
      });
    },
    {
      Component: _v148,
      useEmitter: _v149,
      useEmitterValue: _v150,
      usePublisher: _v151
    } = _v118(_v129, {
      optional: {
        restoreStateFrom: "restoreStateFrom",
        context: "context",
        followOutput: "followOutput",
        scrollIntoViewOnChange: "scrollIntoViewOnChange",
        itemContent: "itemContent",
        groupContent: "groupContent",
        overscan: "overscan",
        increaseViewportBy: "increaseViewportBy",
        minOverscanItemCount: "minOverscanItemCount",
        totalCount: "totalCount",
        groupCounts: "groupCounts",
        topItemCount: "topItemCount",
        firstItemIndex: "firstItemIndex",
        initialTopMostItemIndex: "initialTopMostItemIndex",
        components: "components",
        atBottomThreshold: "atBottomThreshold",
        atTopThreshold: "atTopThreshold",
        computeItemKey: "computeItemKey",
        defaultItemHeight: "defaultItemHeight",
        fixedGroupHeight: "fixedGroupHeight",
        fixedItemHeight: "fixedItemHeight",
        heightEstimates: "heightEstimates",
        itemSize: "itemSize",
        scrollSeekConfiguration: "scrollSeekConfiguration",
        headerFooterTag: "HeaderFooterTag",
        data: "data",
        initialItemCount: "initialItemCount",
        initialScrollTop: "initialScrollTop",
        alignToBottom: "alignToBottom",
        useWindowScroll: "useWindowScroll",
        customScrollParent: "customScrollParent",
        scrollerRef: "scrollerRef",
        logLevel: "logLevel",
        horizontalDirection: "horizontalDirection",
        skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
      },
      methods: {
        scrollToIndex: "scrollToIndex",
        scrollIntoView: "scrollIntoView",
        scrollTo: "scrollTo",
        scrollBy: "scrollBy",
        autoscrollToBottom: "autoscrollToBottom",
        getState: "getState"
      },
      events: {
        isScrolling: "isScrolling",
        endReached: "endReached",
        startReached: "startReached",
        rangeChanged: "rangeChanged",
        atBottomStateChange: "atBottomStateChange",
        atTopStateChange: "atTopStateChange",
        totalListHeightChanged: "totalListHeightChanged",
        itemsRendered: "itemsRendered",
        groupIndices: "groupIndices"
      }
    }, _v2.default.memo(function (_v0) {
      let _v1 = _v150("useWindowScroll"),
        _v2 = _v150("topItemsIndexes").length > 0,
        _v3 = _v150("customScrollParent"),
        _v4 = _v150("context");
      return (0, _v1.jsxs)(_v3 || _v1 ? _v153 : _v152, {
        ..._v0,
        context: _v4,
        children: [_v2 && (0, _v1.jsx)(_v147, {
          children: (0, _v1.jsx)(_v134, {
            showTopList: !0
          })
        }), (0, _v1.jsxs)(_v3 || _v1 ? _v146 : _v145, {
          children: [(0, _v1.jsx)(_v141, {}), (0, _v1.jsx)(_v134, {}), (0, _v1.jsx)(_v142, {})]
        })]
      });
    })),
    _v152 = _v143({
      useEmitter: _v149,
      useEmitterValue: _v150,
      usePublisher: _v151
    }),
    _v153 = _v144({
      useEmitter: _v149,
      useEmitterValue: _v150,
      usePublisher: _v151
    }),
    _v154 = _v29(() => {
      let _v0 = _v25(_v0 => (0, _v1.jsxs)("td", {
          children: ["Item $", _v0]
        })),
        _v1 = _v25(null),
        _v2 = _v25(_v0 => (0, _v1.jsxs)("td", {
          colSpan: 0,
          children: ["Group ", _v0]
        })),
        _v3 = _v25(null),
        _v4 = _v25(null),
        _v5 = _v25({}),
        _v6 = _v25(_v127),
        _v7 = _v25(_v7),
        _v8 = (_v0, _v1 = null) => _v26(_v20(_v5, _v18(_v0 => _v0[_v0]), _v16()), _v1);
      return {
        components: _v5,
        computeItemKey: _v6,
        context: _v1,
        EmptyPlaceholder: _v8("EmptyPlaceholder"),
        FillerRow: _v8("FillerRow"),
        fixedFooterContent: _v4,
        fixedHeaderContent: _v3,
        itemContent: _v0,
        groupContent: _v2,
        ScrollerComponent: _v8("Scroller", "div"),
        scrollerRef: _v7,
        ScrollSeekPlaceholder: _v8("ScrollSeekPlaceholder"),
        TableBodyComponent: _v8("TableBody", "tbody"),
        TableComponent: _v8("Table", "table"),
        TableFooterComponent: _v8("TableFoot", "tfoot"),
        TableHeadComponent: _v8("TableHead", "thead"),
        TableRowComponent: _v8("TableRow", "tr"),
        GroupComponent: _v8("Group", "tr")
      };
    }),
    _v155 = _v29(([_v0, _v1]) => ({
      ..._v0,
      ..._v1
    }), _v9(_v116, _v154)),
    _v156 = ({
      height: _v0
    }) => (0, _v1.jsx)("tr", {
      children: (0, _v1.jsx)("td", {
        style: {
          height: _v0
        }
      })
    }),
    _v157 = ({
      height: _v0
    }) => (0, _v1.jsx)("tr", {
      children: (0, _v1.jsx)("td", {
        style: {
          border: 0,
          height: _v0,
          padding: 0
        }
      })
    }),
    _v158 = {
      overflowAnchor: "none"
    },
    _v159 = {
      position: _v123(),
      zIndex: 2,
      overflowAnchor: "none"
    },
    _v160 = _v2.default.memo(function ({
      showTopList: _v0 = !1
    }) {
      let _v1 = _v165("listState"),
        _v2 = _v165("computeItemKey"),
        _v3 = _v165("firstItemIndex"),
        _v4 = _v165("context"),
        _v5 = _v165("isSeeking"),
        _v6 = _v165("fixedHeaderHeight"),
        _v7 = _v165("groupIndices").length > 0,
        _v8 = _v165("itemContent"),
        _v9 = _v165("groupContent"),
        _v10 = _v165("ScrollSeekPlaceholder") ?? _v156,
        _v11 = _v165("GroupComponent"),
        _v12 = _v165("TableRowComponent"),
        _v13 = (_v0 ? _v1.topItems : []).reduce((_v0, _v1, _v2) => (0 === _v2 ? _v0.push(_v1.size) : _v0.push(_v0[_v2 - 1] + _v1.size), _v0), []);
      return (_v0 ? _v1.topItems : _v1.items).map(_v0 => {
        let _v1 = _v0.originalIndex,
          _v2 = _v2(_v1 + _v3, _v0.data, _v4),
          _v3 = _v0 ? 0 === _v1 ? 0 : _v13[_v1 - 1] : 0;
        return _v5 ? (0, _v2.createElement)(_v10, {
          ..._v139(_v10, _v4),
          height: _v0.size,
          index: _v0.index,
          key: _v2,
          type: _v0.type || "item"
        }) : "group" === _v0.type ? (0, _v2.createElement)(_v11, {
          ..._v139(_v11, _v4),
          "data-index": _v1,
          "data-item-index": _v0.index,
          "data-known-size": _v0.size,
          key: _v2,
          style: {
            ..._v159,
            top: _v6
          }
        }, _v9(_v0.index, _v4)) : (0, _v2.createElement)(_v12, {
          ..._v139(_v12, _v4),
          ..._v140(_v12, _v0.data),
          "data-index": _v1,
          "data-item-index": _v0.index,
          "data-known-size": _v0.size,
          "data-item-group-index": _v0.groupIndex,
          key: _v2,
          style: _v0 ? {
            ..._v159,
            top: _v6 + _v3
          } : _v158
        }, _v7 ? _v8(_v0.index, _v0.groupIndex, _v0.data, _v4) : _v8(_v0.index, _v0.data, _v4));
      });
    }),
    _v161 = _v2.default.memo(function () {
      let _v0 = _v165("listState"),
        _v1 = _v165("topItemsIndexes").length > 0,
        _v2 = _v166("sizeRanges"),
        _v3 = _v165("useWindowScroll"),
        _v4 = _v165("customScrollParent"),
        _v5 = _v166("windowScrollContainerState"),
        _v6 = _v166("scrollContainerState"),
        _v7 = _v165("trackItemSizes"),
        {
          callbackRef: _v8,
          ref: _v9
        } = _v39(_v2, _v165("itemSize"), _v7, _v4 || _v3 ? _v5 : _v6, _v165("log"), void 0, _v4, !1, _v165("skipAnimationFrameInResizeObserver")),
        [_v10, _v11] = _v2.default.useState(0);
      _v164("deviation", _v0 => {
        _v10 !== _v0 && (_v9.current.style.marginTop = `${_v0}px`, _v11(_v0));
      });
      let _v12 = _v165("EmptyPlaceholder"),
        _v13 = _v165("FillerRow") ?? _v157,
        _v14 = _v165("TableBodyComponent"),
        _v15 = _v165("paddingTopAddition"),
        _v16 = _v165("statefulTotalCount"),
        _v17 = _v165("context");
      if (0 === _v16 && null != _v12) return (0, _v1.jsx)(_v12, {
        ..._v139(_v12, _v17)
      });
      let _v18 = (_v1 ? _v0.topItems : []).reduce((_v0, _v1) => _v0 + _v1.size, 0),
        _v19 = _v0.offsetTop + _v15 + _v10 - _v18,
        _v20 = _v0.offsetBottom,
        _v21 = _v19 > 0 ? (0, _v1.jsx)(_v13, {
          context: _v17,
          height: _v19
        }, "padding-top") : null,
        _v22 = _v20 > 0 ? (0, _v1.jsx)(_v13, {
          context: _v17,
          height: _v20
        }, "padding-bottom") : null;
      return (0, _v1.jsxs)(_v14, {
        "data-testid": "virtuoso-item-list",
        ref: _v8,
        ..._v139(_v14, _v17),
        children: [_v21, _v1 && (0, _v1.jsx)(_v160, {
          showTopList: !0
        }), (0, _v1.jsx)(_v160, {}), _v22]
      });
    }),
    _v162 = ({
      children: _v0
    }) => {
      let _v1 = _v2.default.useContext(_v119),
        _v2 = _v166("viewportHeight"),
        _v3 = _v166("fixedItemHeight"),
        _v4 = _v37(_v2.default.useMemo(() => _v5(_v2, _v0 => _v61(_v0, "height")), [_v2]), !0, _v165("skipAnimationFrameInResizeObserver"));
      return _v2.default.useEffect(() => {
        _v1 && (_v2(_v1.viewportHeight), _v3(_v1.itemHeight));
      }, [_v1, _v2, _v3]), (0, _v1.jsx)("div", {
        "data-viewport-type": "element",
        ref: _v4,
        style: _v137(!1),
        children: _v0
      });
    },
    _v163 = ({
      children: _v0
    }) => {
      let _v1 = _v2.default.useContext(_v119),
        _v2 = _v166("windowViewportRect"),
        _v3 = _v166("fixedItemHeight"),
        _v4 = _v41(_v2, _v165("customScrollParent"), _v165("skipAnimationFrameInResizeObserver"));
      return _v2.default.useEffect(() => {
        _v1 && (_v3(_v1.itemHeight), _v2({
          listHeight: 0,
          offsetTop: 0,
          visibleHeight: _v1.viewportHeight,
          visibleWidth: 100
        }));
      }, [_v1, _v2, _v3]), (0, _v1.jsx)("div", {
        "data-viewport-type": "window",
        ref: _v4,
        style: _v137(!1),
        children: _v0
      });
    },
    {
      useEmitter: _v164,
      useEmitterValue: _v165,
      usePublisher: _v166
    } = _v118(_v155, {
      optional: {
        restoreStateFrom: "restoreStateFrom",
        context: "context",
        followOutput: "followOutput",
        firstItemIndex: "firstItemIndex",
        itemContent: "itemContent",
        groupContent: "groupContent",
        fixedHeaderContent: "fixedHeaderContent",
        fixedFooterContent: "fixedFooterContent",
        overscan: "overscan",
        increaseViewportBy: "increaseViewportBy",
        minOverscanItemCount: "minOverscanItemCount",
        totalCount: "totalCount",
        topItemCount: "topItemCount",
        initialTopMostItemIndex: "initialTopMostItemIndex",
        components: "components",
        groupCounts: "groupCounts",
        atBottomThreshold: "atBottomThreshold",
        atTopThreshold: "atTopThreshold",
        computeItemKey: "computeItemKey",
        defaultItemHeight: "defaultItemHeight",
        fixedGroupHeight: "fixedGroupHeight",
        fixedItemHeight: "fixedItemHeight",
        itemSize: "itemSize",
        scrollSeekConfiguration: "scrollSeekConfiguration",
        data: "data",
        initialItemCount: "initialItemCount",
        initialScrollTop: "initialScrollTop",
        alignToBottom: "alignToBottom",
        useWindowScroll: "useWindowScroll",
        customScrollParent: "customScrollParent",
        scrollerRef: "scrollerRef",
        logLevel: "logLevel"
      },
      methods: {
        scrollToIndex: "scrollToIndex",
        scrollIntoView: "scrollIntoView",
        scrollTo: "scrollTo",
        scrollBy: "scrollBy",
        getState: "getState"
      },
      events: {
        isScrolling: "isScrolling",
        endReached: "endReached",
        startReached: "startReached",
        rangeChanged: "rangeChanged",
        atBottomStateChange: "atBottomStateChange",
        atTopStateChange: "atTopStateChange",
        totalListHeightChanged: "totalListHeightChanged",
        itemsRendered: "itemsRendered",
        groupIndices: "groupIndices"
      }
    }, _v2.default.memo(function (_v0) {
      let _v1 = _v165("useWindowScroll"),
        _v2 = _v165("customScrollParent"),
        _v3 = _v166("fixedHeaderHeight"),
        _v4 = _v166("fixedFooterHeight"),
        _v5 = _v165("fixedHeaderContent"),
        _v6 = _v165("fixedFooterContent"),
        _v7 = _v165("context"),
        _v8 = _v37(_v2.default.useMemo(() => _v5(_v3, _v0 => _v61(_v0, "height")), [_v3]), !0, _v165("skipAnimationFrameInResizeObserver")),
        _v9 = _v37(_v2.default.useMemo(() => _v5(_v4, _v0 => _v61(_v0, "height")), [_v4]), !0, _v165("skipAnimationFrameInResizeObserver")),
        _v10 = _v2 || _v1 ? _v168 : _v167,
        _v11 = _v2 || _v1 ? _v163 : _v162,
        _v12 = _v165("TableComponent"),
        _v13 = _v165("TableHeadComponent"),
        _v14 = _v165("TableFooterComponent"),
        _v15 = _v5 ? (0, _v1.jsx)(_v13, {
          ref: _v8,
          style: {
            position: "sticky",
            top: 0,
            zIndex: 2
          },
          ..._v139(_v13, _v7),
          children: _v5()
        }, "TableHead") : null,
        _v16 = _v6 ? (0, _v1.jsx)(_v14, {
          ref: _v9,
          style: {
            bottom: 0,
            position: "sticky",
            zIndex: 1
          },
          ..._v139(_v14, _v7),
          children: _v6()
        }, "TableFoot") : null;
      return (0, _v1.jsx)(_v10, {
        ..._v0,
        ..._v139(_v10, _v7),
        children: (0, _v1.jsx)(_v11, {
          children: (0, _v1.jsxs)(_v12, {
            style: {
              borderSpacing: 0,
              overflowAnchor: "none"
            },
            ..._v139(_v12, _v7),
            children: [_v15, (0, _v1.jsx)(_v161, {}, "TableBody"), _v16]
          })
        })
      });
    })),
    _v167 = _v143({
      useEmitter: _v164,
      useEmitterValue: _v165,
      usePublisher: _v166
    }),
    _v168 = _v144({
      useEmitter: _v164,
      useEmitterValue: _v165,
      usePublisher: _v166
    }),
    _v169 = {
      bottom: 0,
      itemHeight: 0,
      items: [],
      itemWidth: 0,
      offsetBottom: 0,
      offsetTop: 0,
      top: 0
    },
    _v170 = {
      bottom: 0,
      itemHeight: 0,
      items: [{
        index: 0
      }],
      itemWidth: 0,
      offsetBottom: 0,
      offsetTop: 0,
      top: 0
    },
    {
      ceil: _v171,
      floor: _v172,
      max: _v173,
      min: _v174,
      round: _v175
    } = Math;
  function _v176(_v0, _v1, _v2) {
    return Array.from({
      length: _v1 - _v0 + 1
    }).map((_v0, _v1) => ({
      data: null === _v2 ? null : _v2[_v1 + _v0],
      index: _v1 + _v0
    }));
  }
  function _v177(_v0, _v1) {
    return void 0 !== _v0 && _v0.width === _v1.width && _v0.height === _v1.height;
  }
  function _v178(_v0, _v1) {
    return void 0 !== _v0 && _v0.column === _v1.column && _v0.row === _v1.row;
  }
  let _v179 = _v29(([{
    increaseViewportBy: _v0,
    listBoundary: _v1,
    overscan: _v2,
    visibleRange: _v3
  }, {
    footerHeight: _v4,
    headerHeight: _v5,
    scrollBy: _v6,
    scrollContainerState: _v7,
    scrollTo: _v8,
    scrollTop: _v9,
    smoothScrollTargetReached: _v10,
    viewportHeight: _v11
  }, _v12, _v13, {
    didMount: _v14,
    propsReady: _v15
  }, {
    customScrollParent: _v16,
    useWindowScroll: _v17,
    windowScrollContainerState: _v18,
    windowScrollTo: _v19,
    windowViewportRect: _v20
  }, _v21]) => {
    let _v22 = _v25(0),
      _v23 = _v25(0),
      _v24 = _v25(_v169),
      _v25 = _v25({
        height: 0,
        width: 0
      }),
      _v26 = _v25({
        height: 0,
        width: 0
      }),
      _v27 = _v27(),
      _v28 = _v27(),
      _v29 = _v25(0),
      _v30 = _v25(null),
      _v31 = _v25({
        column: 0,
        row: 0
      }),
      _v32 = _v27(),
      _v33 = _v27(),
      _v34 = _v25(!1),
      _v35 = _v25(0),
      _v36 = _v25(!0),
      _v37 = _v25(!1),
      _v38 = _v25(!1);
    _v20(_v14, _v24(_v35), _v17(([_v0, _v1]) => 0 !== _v1))(1, () => {
      _v36(0, !1);
    }), _v20(_v31(_v14, _v36, _v26, _v25, _v35, _v37), _v17(([_v0, _v1, _v2, _v3,, _v4]) => _v0 && !_v1 && 0 !== _v2.height && 0 !== _v3.height && !_v4))(1, ([,,,, _v0]) => {
      _v37(0, !0), _v80(1, () => {
        _v27(0, _v0);
      }), _v13(_v20(_v9), () => {
        _v1(0, [0, 0]), _v36(0, !0);
      });
    }), _v12(_v20(_v33, _v17(_v0 => null != _v0 && _v0.scrollTop > 0), _v19(0)), _v23), _v20(_v14, _v24(_v33), _v17(([, _v0]) => null != _v0))(1, ([, _v0]) => {
      _v0 && (_v25(0, _v0.viewport), _v26(0, _v0.item), _v31(0, _v0.gap), _v0.scrollTop > 0 && (_v34(0, !0), _v13(_v20(_v9, _v22(1)), _v0 => {
        _v34(0, !1);
      }), _v8(0, {
        top: _v0.scrollTop
      })));
    }), _v12(_v20(_v25, _v18(({
      height: _v0
    }) => _v0)), _v11), _v12(_v20(_v31(_v32(_v25, _v177), _v32(_v26, _v177), _v32(_v31, (_v0, _v1) => void 0 !== _v0 && _v0.column === _v1.column && _v0.row === _v1.row), _v32(_v9)), _v18(([_v0, _v1, _v2, _v3]) => ({
      gap: _v2,
      item: _v1,
      scrollTop: _v3,
      viewport: _v0
    }))), _v32), _v12(_v20(_v31(_v32(_v22), _v3, _v32(_v31, _v178), _v32(_v26, _v177), _v32(_v25, _v177), _v32(_v30), _v32(_v23), _v32(_v34), _v32(_v36), _v32(_v35)), _v17(([,,,,,,, _v0]) => !_v0), _v18(([_v0, [_v1, _v2], _v3, _v4, _v5, _v6, _v7,, _v8, _v9]) => {
      let _v10,
        _v11,
        {
          column: _v12,
          row: _v13
        } = _v3,
        {
          height: _v14,
          width: _v15
        } = _v4,
        {
          width: _v16
        } = _v5;
      if (0 === _v7 && (0 === _v0 || 0 === _v16)) return _v169;
      if (0 === _v15) {
        var _v17;
        let _v0 = _v81(_v9, _v0),
          _v1 = _v0 + Math.max(_v7 - 1, 0);
        return _v17 = _v176(_v0, _v1, _v6), {
          ..._v170,
          items: _v17
        };
      }
      let _v18 = _v180(_v16, _v15, _v12);
      _v8 ? 0 === _v1 && 0 === _v2 && _v7 > 0 ? (_v10 = 0, _v11 = _v7 - 1) : (_v10 = _v18 * _v172((_v1 + _v13) / (_v14 + _v13)), _v11 = _v174(_v0 - 1, _v173(_v11 = _v18 * _v171((_v2 + _v13) / (_v14 + _v13)) - 1, _v18 - 1)), _v10 = _v174(_v11, _v173(0, _v10))) : (_v10 = 0, _v11 = -1);
      let _v19 = _v176(_v10, _v11, _v6),
        {
          bottom: _v20,
          top: _v21
        } = _v181(_v5, _v3, _v4, _v19),
        _v22 = _v171(_v0 / _v18);
      return {
        bottom: _v20,
        itemHeight: _v14,
        items: _v19,
        itemWidth: _v15,
        offsetBottom: _v22 * _v14 + (_v22 - 1) * _v13 - _v20,
        offsetTop: _v21,
        top: _v21
      };
    })), _v24), _v12(_v20(_v30, _v17(_v0 => null !== _v0), _v18(_v0 => _v0.length)), _v22), _v12(_v20(_v31(_v25, _v26, _v24, _v31), _v17(([_v0, _v1, {
      items: _v2
    }]) => _v2.length > 0 && 0 !== _v1.height && 0 !== _v0.height), _v18(([_v0, _v1, {
      items: _v2
    }, _v3]) => {
      let {
        bottom: _v4,
        top: _v5
      } = _v181(_v0, _v3, _v1, _v2);
      return [_v5, _v4];
    }), _v16(_v58)), _v1);
    let _v39 = _v25(!1);
    _v12(_v20(_v9, _v24(_v39), _v18(([_v0, _v1]) => _v1 || 0 !== _v0)), _v39);
    let _v40 = _v28(_v20(_v31(_v24, _v22), _v17(([{
        items: _v0
      }]) => _v0.length > 0), _v24(_v39), _v17(([[_v0, _v1], _v2]) => {
        let _v3 = _v0.items[_v0.items.length - 1].index === _v1 - 1;
        return (_v2 || _v0.bottom > 0 && _v0.itemHeight > 0 && 0 === _v0.offsetBottom && _v0.items.length === _v1) && _v3;
      }), _v18(([[, _v0]]) => _v0 - 1), _v16())),
      _v41 = _v28(_v20(_v32(_v24), _v17(({
        items: _v0
      }) => _v0.length > 0 && 0 === _v0[0].index), _v19(0), _v16())),
      _v42 = _v28(_v20(_v32(_v24), _v24(_v34), _v17(([{
        items: _v0
      }, _v1]) => _v0.length > 0 && !_v1), _v18(([{
        items: _v0
      }]) => ({
        endIndex: _v0[_v0.length - 1].index,
        startIndex: _v0[0].index
      })), _v16(_v57), _v23(0)));
    _v12(_v42, _v13.scrollSeekRangeChanged), _v12(_v20(_v27, _v24(_v25, _v26, _v22, _v31), _v18(([_v0, _v1, _v2, _v3, _v4]) => {
      let _v5 = _v78(_v0),
        {
          align: _v6,
          behavior: _v7,
          offset: _v8
        } = _v5,
        _v9 = _v5.index;
      "LAST" === _v9 && (_v9 = _v3 - 1);
      let _v10 = _v182(_v1, _v4, _v2, _v9 = _v173(0, _v9, _v174(_v3 - 1, _v9)));
      return "end" === _v6 ? _v10 = _v175(_v10 - _v1.height + _v2.height) : "center" === _v6 && (_v10 = _v175(_v10 - _v1.height / 2 + _v2.height / 2)), void 0 !== _v8 && 0 !== _v8 && (_v10 += _v8), {
        behavior: _v7,
        top: _v10
      };
    })), _v8);
    let _v43 = _v26(_v20(_v24, _v18(_v0 => _v0.offsetBottom + _v0.bottom)), 0);
    return _v12(_v20(_v20, _v18(_v0 => ({
      height: _v0.visibleHeight,
      width: _v0.visibleWidth
    }))), _v25), {
      customScrollParent: _v16,
      data: _v30,
      deviation: _v29,
      footerHeight: _v4,
      gap: _v31,
      headerHeight: _v5,
      increaseViewportBy: _v0,
      initialItemCount: _v23,
      itemDimensions: _v26,
      overscan: _v2,
      restoreStateFrom: _v33,
      scrollBy: _v6,
      scrollContainerState: _v7,
      scrollHeight: _v28,
      scrollTo: _v8,
      scrollToIndex: _v27,
      scrollTop: _v9,
      smoothScrollTargetReached: _v10,
      totalCount: _v22,
      useWindowScroll: _v17,
      viewportDimensions: _v25,
      windowScrollContainerState: _v18,
      windowScrollTo: _v19,
      windowViewportRect: _v20,
      ..._v13,
      gridState: _v24,
      horizontalDirection: _v38,
      initialTopMostItemIndex: _v35,
      totalListHeight: _v43,
      ..._v12,
      endReached: _v40,
      propsReady: _v15,
      rangeChanged: _v42,
      startReached: _v41,
      stateChanged: _v32,
      stateRestoreInProgress: _v34,
      ..._v21
    };
  }, _v9(_v91, _v42, _v86, _v107, _v76, _v108, _v36));
  function _v180(_v0, _v1, _v2) {
    return _v173(1, _v172((_v0 + _v2) / (_v172(_v1) + _v2)));
  }
  function _v181(_v0, _v1, _v2, _v3) {
    let {
      height: _v4
    } = _v2;
    if (void 0 === _v4 || 0 === _v3.length) return {
      bottom: 0,
      top: 0
    };
    let _v5 = _v182(_v0, _v1, _v2, _v3[0].index);
    return {
      bottom: _v182(_v0, _v1, _v2, _v3[_v3.length - 1].index) + _v4,
      top: _v5
    };
  }
  function _v182(_v0, _v1, _v2, _v3) {
    let _v4 = _v172(_v3 / _v180(_v0.width, _v2.width, _v1.column)),
      _v5 = _v4 * _v2.height + _v173(0, _v4 - 1) * _v1.row;
    return _v5 > 0 ? _v5 + _v1.row : _v5;
  }
  let _v183 = _v29(() => {
      let _v0 = _v25(_v0 => `Item ${_v0}`),
        _v1 = _v25({}),
        _v2 = _v25(null),
        _v3 = _v25("virtuoso-grid-item"),
        _v4 = _v25("virtuoso-grid-list"),
        _v5 = _v25(_v127),
        _v6 = _v25("div"),
        _v7 = _v25(_v7),
        _v8 = (_v0, _v1 = null) => _v26(_v20(_v1, _v18(_v0 => _v0[_v0]), _v16()), _v1),
        _v9 = _v25(!1),
        _v10 = _v25(!1);
      return _v12(_v32(_v10), _v9), {
        components: _v1,
        computeItemKey: _v5,
        context: _v2,
        FooterComponent: _v8("Footer"),
        HeaderComponent: _v8("Header"),
        headerFooterTag: _v6,
        itemClassName: _v3,
        ItemComponent: _v8("Item", "div"),
        itemContent: _v0,
        listClassName: _v4,
        ListComponent: _v8("List", "div"),
        readyStateChanged: _v9,
        reportReadyState: _v10,
        ScrollerComponent: _v8("Scroller", "div"),
        scrollerRef: _v7,
        ScrollSeekPlaceholder: _v8("ScrollSeekPlaceholder", "div")
      };
    }),
    _v184 = _v29(([_v0, _v1]) => ({
      ..._v0,
      ..._v1
    }), _v9(_v179, _v183)),
    _v185 = _v2.default.memo(function () {
      let _v0 = _v191("gridState"),
        _v1 = _v191("listClassName"),
        _v2 = _v191("itemClassName"),
        _v3 = _v191("itemContent"),
        _v4 = _v191("computeItemKey"),
        _v5 = _v191("isSeeking"),
        _v6 = _v192("scrollHeight"),
        _v7 = _v191("ItemComponent"),
        _v8 = _v191("ListComponent"),
        _v9 = _v191("ScrollSeekPlaceholder"),
        _v10 = _v191("context"),
        _v11 = _v192("itemDimensions"),
        _v12 = _v192("gap"),
        _v13 = _v191("log"),
        _v14 = _v191("stateRestoreInProgress"),
        _v15 = _v192("reportReadyState"),
        _v16 = _v37(_v2.default.useMemo(() => _v0 => {
          _v6(_v0.parentElement.parentElement.scrollHeight);
          let _v1 = _v0.firstChild;
          if (null !== _v1) {
            let {
              height: _v0,
              width: _v1
            } = _v1.getBoundingClientRect();
            _v11({
              height: _v0,
              width: _v1
            });
          }
          _v12({
            column: _v195("column-gap", getComputedStyle(_v0).columnGap, _v13),
            row: _v195("row-gap", getComputedStyle(_v0).rowGap, _v13)
          });
        }, [_v6, _v11, _v12, _v13]), !0, !1);
      return _v124(() => {
        _v0.itemHeight > 0 && _v0.itemWidth > 0 && _v15(!0);
      }, [_v0]), _v14 ? null : (0, _v1.jsx)(_v8, {
        className: _v1,
        ref: _v16,
        ..._v139(_v8, _v10),
        "data-testid": "virtuoso-item-list",
        style: {
          paddingBottom: _v0.offsetBottom,
          paddingTop: _v0.offsetTop
        },
        children: _v0.items.map(_v0 => {
          let _v1 = _v4(_v0.index, _v0.data, _v10);
          return _v5 ? (0, _v1.jsx)(_v9, {
            ..._v139(_v9, _v10),
            height: _v0.itemHeight,
            index: _v0.index,
            width: _v0.itemWidth
          }, _v1) : (0, _v2.createElement)(_v7, {
            ..._v139(_v7, _v10),
            className: _v2,
            "data-index": _v0.index,
            key: _v1
          }, _v3(_v0.index, _v0.data, _v10));
        })
      });
    }),
    _v186 = _v2.default.memo(function () {
      let _v0 = _v191("HeaderComponent"),
        _v1 = _v192("headerHeight"),
        _v2 = _v191("headerFooterTag"),
        _v3 = _v37(_v2.default.useMemo(() => _v0 => {
          _v1(_v61(_v0, "height"));
        }, [_v1]), !0, !1),
        _v4 = _v191("context");
      return null != _v0 ? (0, _v1.jsx)(_v2, {
        ref: _v3,
        children: (0, _v1.jsx)(_v0, {
          ..._v139(_v0, _v4)
        })
      }) : null;
    }),
    _v187 = _v2.default.memo(function () {
      let _v0 = _v191("FooterComponent"),
        _v1 = _v192("footerHeight"),
        _v2 = _v191("headerFooterTag"),
        _v3 = _v37(_v2.default.useMemo(() => _v0 => {
          _v1(_v61(_v0, "height"));
        }, [_v1]), !0, !1),
        _v4 = _v191("context");
      return null != _v0 ? (0, _v1.jsx)(_v2, {
        ref: _v3,
        children: (0, _v1.jsx)(_v0, {
          ..._v139(_v0, _v4)
        })
      }) : null;
    }),
    _v188 = ({
      children: _v0
    }) => {
      let _v1 = _v2.default.useContext(_v120),
        _v2 = _v192("itemDimensions"),
        _v3 = _v192("viewportDimensions"),
        _v4 = _v37(_v2.default.useMemo(() => _v0 => {
          _v3(_v0.getBoundingClientRect());
        }, [_v3]), !0, !1);
      return _v2.default.useEffect(() => {
        _v1 && (_v3({
          height: _v1.viewportHeight,
          width: _v1.viewportWidth
        }), _v2({
          height: _v1.itemHeight,
          width: _v1.itemWidth
        }));
      }, [_v1, _v3, _v2]), (0, _v1.jsx)("div", {
        ref: _v4,
        style: _v137(!1),
        children: _v0
      });
    },
    _v189 = ({
      children: _v0
    }) => {
      let _v1 = _v2.default.useContext(_v120),
        _v2 = _v192("windowViewportRect"),
        _v3 = _v192("itemDimensions"),
        _v4 = _v41(_v2, _v191("customScrollParent"), !1);
      return _v2.default.useEffect(() => {
        _v1 && (_v3({
          height: _v1.itemHeight,
          width: _v1.itemWidth
        }), _v2({
          listHeight: 0,
          offsetTop: 0,
          visibleHeight: _v1.viewportHeight,
          visibleWidth: _v1.viewportWidth
        }));
      }, [_v1, _v2, _v3]), (0, _v1.jsx)("div", {
        ref: _v4,
        style: _v137(!1),
        children: _v0
      });
    },
    {
      useEmitter: _v190,
      useEmitterValue: _v191,
      usePublisher: _v192
    } = _v118(_v184, {
      optional: {
        context: "context",
        totalCount: "totalCount",
        overscan: "overscan",
        itemContent: "itemContent",
        components: "components",
        computeItemKey: "computeItemKey",
        data: "data",
        initialItemCount: "initialItemCount",
        scrollSeekConfiguration: "scrollSeekConfiguration",
        headerFooterTag: "headerFooterTag",
        listClassName: "listClassName",
        itemClassName: "itemClassName",
        useWindowScroll: "useWindowScroll",
        customScrollParent: "customScrollParent",
        scrollerRef: "scrollerRef",
        logLevel: "logLevel",
        restoreStateFrom: "restoreStateFrom",
        initialTopMostItemIndex: "initialTopMostItemIndex",
        increaseViewportBy: "increaseViewportBy"
      },
      methods: {
        scrollTo: "scrollTo",
        scrollBy: "scrollBy",
        scrollToIndex: "scrollToIndex"
      },
      events: {
        isScrolling: "isScrolling",
        endReached: "endReached",
        startReached: "startReached",
        rangeChanged: "rangeChanged",
        atBottomStateChange: "atBottomStateChange",
        atTopStateChange: "atTopStateChange",
        stateChanged: "stateChanged",
        readyStateChanged: "readyStateChanged"
      }
    }, _v2.default.memo(function ({
      ..._v0
    }) {
      let _v1 = _v191("useWindowScroll"),
        _v2 = _v191("customScrollParent"),
        _v3 = _v2 || _v1 ? _v194 : _v193,
        _v4 = _v2 || _v1 ? _v189 : _v188,
        _v5 = _v191("context");
      return (0, _v1.jsx)(_v3, {
        ..._v0,
        ..._v139(_v3, _v5),
        children: (0, _v1.jsxs)(_v4, {
          children: [(0, _v1.jsx)(_v186, {}), (0, _v1.jsx)(_v185, {}), (0, _v1.jsx)(_v187, {})]
        })
      });
    })),
    _v193 = _v143({
      useEmitter: _v190,
      useEmitterValue: _v191,
      usePublisher: _v192
    }),
    _v194 = _v144({
      useEmitter: _v190,
      useEmitterValue: _v191,
      usePublisher: _v192
    });
  function _v195(_v0, _v1, _v2) {
    return "normal" !== _v1 && _v1?.endsWith("px") !== !0 && _v2(`${_v0} was not resolved to pixel value correctly`, _v1, 2), "normal" === _v1 ? 0 : parseInt(_v1 ?? "0", 10);
  }
  _v0.s(["Virtuoso", 0, _v148]);
}