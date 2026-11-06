{
  "use strict";

  let _v1, _v2;
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v0 => {
    let _v1 = Array.from(_v0.children),
      _v2 = _v0.scrollLeft,
      _v3 = _v0.offsetLeft,
      _v4 = _v0.clientWidth,
      _v5 = _v3 + _v2,
      _v6 = _v5 + _v4,
      _v7 = window.devicePixelRatio,
      _v8 = _v2 + _v4 >= _v0.scrollWidth - (1 + 1 / _v7),
      _v9 = _v1.reduce((_v0, _v1, _v2) => {
        let _v3 = _v1.offsetLeft,
          _v4 = _v3 + _v1.offsetWidth;
        return _v5 <= _v3 && _v4 <= _v6 && (_v0.portSlides.push(_v1), _v0.portSlideIndexes.push(_v2)), _v3 < _v5 && _v5 < _v4 && (_v0.leftEdgeSlide = _v1, _v0.leftEdgeSlideIndex = _v2, _v0.leftEdgeSlideVisibleWidth = _v4 - _v5), _v3 < _v6 && _v6 < _v4 && (_v0.rightEdgeSlide = _v1, _v0.rightEdgeSlideIndex = _v2, _v0.rightEdgeSlideVisibleWidth = _v6 - _v3), _v0;
      }, {
        portSlides: [],
        portSlideIndexes: [],
        leftEdgeSlide: null,
        leftEdgeSlideIndex: null,
        leftEdgeSlideVisibleWidth: 0,
        rightEdgeSlide: null,
        rightEdgeSlideIndex: null,
        rightEdgeSlideVisibleWidth: 0
      }),
      {
        leftEdgeSlide: _v10,
        leftEdgeSlideIndex: _v11,
        leftEdgeSlideVisibleWidth: _v12,
        rightEdgeSlideVisibleWidth: _v13,
        rightEdgeSlide: _v14,
        portSlideIndexes: _v15
      } = _v9,
      _v16 = _v15.length;
    if (_v10 && _v14) {
      let _v0 = _v12 + _v13;
      _v0 >= _v10.offsetWidth && _v0 >= _v14.offsetWidth && (_v16 += 1);
    }
    let _v17 = _v15[0];
    return !_v8 && _v10 && null !== _v11 && _v12 > _v10?.offsetWidth / 2 && (_v17 = _v11), {
      ..._v9,
      portSlideCounts: _v16,
      activeSlideIndex: _v17,
      isScrollToEnd: _v8
    };
  };
  var _v9 = _v0.i(0);
  _v0.s(["Carousel", 0, ({
    enableDragToScroll: _v0,
    enableStrictSnap: _v1,
    enableHorizontalWheelScroll: _v2 = !0,
    contentInset: _v3 = 0,
    ..._v4
  }) => {
    let _v5 = (({
        enableDragToScroll: _v0 = !0,
        enableStrictSnap: _v1 = !1,
        enableHorizontalWheelScroll: _v2 = !1
      }) => {
        let _v3,
          _v4,
          _v5,
          _v6 = (0, _v6.useRef)(null),
          {
            state: {
              pageSize: _v7,
              isScrolling: _v8,
              activeIndex: _v9
            },
            dispatch: _v10
          } = (0, _v9.usePlaylist)(),
          _v11 = _v6.current,
          _v12 = _v11?.children.length || 0;
        (0, _v6.useEffect)(() => {
          _v10({
            type: "STATE_UPDATE",
            payload: {
              totalItems: _v12
            }
          });
        }, [_v10, _v12]), (0, _v6.useEffect)(() => {
          if (!_v11) return;
          let _v0 = new _v7.default(_v0 => {
            let _v1 = _v0[0].target;
            if (!_v1) return;
            let {
              portSlideCounts: _v2,
              activeSlideIndex: _v3
            } = _v8(_v1);
            _v2 !== _v7 && _v2 > 0 && _v10({
              type: "STATE_UPDATE",
              payload: {
                pageSize: _v2
              }
            }), void 0 !== _v3 && _v10({
              type: "ACTIVE_ITEM_CHANGE",
              payload: {
                activeIndex: _v3
              }
            });
          });
          return _v0.observe(_v11), () => _v0.disconnect();
        }, [_v10, _v7, _v11]);
        let _v13 = (0, _v6.useCallback)(_v0 => {
            _v11 && _v11.children[_v0]?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start"
            });
          }, [_v11]),
          _v14 = (0, _v6.useCallback)(_v0 => {
            _v10({
              type: "ACTIVE_ITEM_CHANGE",
              payload: {
                activeIndex: _v0,
                isScrolling: _v1
              }
            });
          }, [_v10, _v1]);
        _v3 = (0, _v6.useRef)(0), _v4 = (0, _v6.useRef)(!1), _v5 = (0, _v6.useRef)(!1), (0, _v6.useEffect)(() => {
          let _v0 = _v6.current;
          if (!_v0 || !_v0) return;
          let _v1 = _v0 => {
              _v3.current = "touches" in _v0 ? _v0.touches[0].pageX : _v0.pageX, _v1 = setTimeout(() => {
                _v5.current = !0, _v4.current = !0;
              }, 200);
            },
            _v2 = _v0 => {
              if (_v0.preventDefault(), !_v4.current) return;
              _v0.classList.add("dragging");
              let _v1 = "touches" in _v0 ? _v0.touches[0].pageX : _v0.pageX,
                _v2 = _v3.current - _v1;
              _v0.scrollLeft += _v2, _v3.current = _v1;
            },
            _v3 = () => {
              if (clearTimeout(_v1), !_v5.current) return;
              _v4.current = !1, _v5.current = !1, _v0.classList.remove("dragging");
              let {
                activeSlideIndex: _v0
              } = _v8(_v0);
              void 0 !== _v0 && _v14?.(_v0);
            },
            _v4 = new AbortController(),
            {
              signal: _v5
            } = _v4;
          return _v0.addEventListener("mousedown", _v1, {
            signal: _v5
          }), _v0.addEventListener("mousemove", _v2, {
            signal: _v5
          }), _v0.addEventListener("mouseup", _v3, {
            signal: _v5
          }), _v0.addEventListener("mouseleave", _v3, {
            signal: _v5
          }), _v0.addEventListener("touchstart", _v1, {
            signal: _v5
          }), _v0.addEventListener("touchmove", _v2, {
            signal: _v5
          }), _v0.addEventListener("touchend", _v3, {
            signal: _v5
          }), _v0.addEventListener("touchcancel", _v3, {
            signal: _v5
          }), () => {
            _v4.abort();
          };
        }, [_v6, _v0, _v14]);
        let _v15 = (0, _v6.useCallback)(() => {
          if (!_v11) return;
          let {
            activeSlideIndex: _v0
          } = _v8(_v11);
          void 0 !== _v0 && _v10({
            type: "ACTIVE_ITEM_CHANGE",
            payload: {
              activeIndex: _v0
            }
          });
        }, [_v10, _v11]);
        return (0, _v6.useEffect)(() => {
          if (!_v2) return;
          let _v0 = _v6.current;
          if (!_v0) return;
          let _v1 = _v0 => {
            if (0 !== _v0.deltaX) {
              _v2 = setTimeout(_v15, 500);
              return;
            }
          };
          return _v0.addEventListener("wheel", _v1), () => {
            clearTimeout(_v2), _v0.removeEventListener("wheel", _v1);
          };
        }, [_v6, _v2, _v15]), (0, _v6.useEffect)(() => {
          _v8 && (_v13(_v9), _v10({
            type: "SCROLLED_INTO_VIEW"
          }));
        }, [_v10, _v8, _v13, _v9]), _v6;
      })({
        enableDragToScroll: _v0,
        enableStrictSnap: _v1,
        enableHorizontalWheelScroll: _v2
      }),
      {
        outerSpacing: _v6,
        gap: _v7,
        isFullbleed: _v8
      } = (0, _v9.usePlaylistStyles)(),
      _v9 = "11px",
      _v10 = _v8 ? 0 : 0 === _v3 ? -11 : `calc(-${_v9} - ${(0, _v5.rem)(_v3)})`;
    return (0, _v3.jsx)(_v4.Box, {
      ref: _v5,
      display: "flex",
      gap: _v7,
      px: _v8 ? _v6 : 11,
      ml: _v10,
      pt: 11,
      mt: -11,
      pb: "md",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      overscrollBehavior: "contain auto",
      ...(!_v8 && {
        scrollPaddingLeft: _v9,
        scrollPaddingRight: _v9
      }),
      sx: {
        "-webkit-overflow-scrolling": "touch",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        "& > *": {
          scrollMargin: _v8 ? _v7 : 0,
          scrollSnapAlign: "start"
        },
        "&.dragging > *": {
          pointerEvents: "none"
        }
      },
      ..._v4
    });
  }], 0);
  var _v10 = _v0.i(0);
  _v0.s(["PlaylistCarouselNavigation", 0, _v0 => (0, _v3.jsx)(_v10.NavigationButtons, {
    ...(({
      onNextClick: _v0,
      onPrevClick: _v1,
      disablePrevButton: _v2,
      disableNextButton: _v3,
      ..._v4
    }) => {
      let {
        state: {
          totalItems: _v5,
          isFirstPage: _v6,
          isLastPage: _v7
        },
        dispatch: _v8
      } = (0, _v9.usePlaylist)();
      return {
        onNextClick: _v0 => {
          _v0?.(_v0), _v8({
            type: "NEXT_PAGE"
          });
        },
        onPrevClick: _v0 => {
          _v1?.(_v0), _v8({
            type: "PREV_PAGE"
          });
        },
        disablePrevButton: _v2 || _v6 || 0 === _v5,
        disableNextButton: _v3 || _v7 || 0 === _v5,
        ..._v4
      };
    })(_v0)
  })], 0);
}