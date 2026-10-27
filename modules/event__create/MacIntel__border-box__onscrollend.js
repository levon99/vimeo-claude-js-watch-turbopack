{
  "use strict";

  let _v1;
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1, _v2) {
    let _v3,
      _v4 = _v2.initialDeps ?? [],
      _v5 = !0;
    function _v6() {
      let _v0 = _v0();
      return (_v0.length !== _v4.length || _v0.some((_v0, _v1) => _v4[_v1] !== _v0)) && (_v4 = _v0, _v3 = _v1(..._v0), (null == _v2 ? void 0 : _v2.onChange) && !(_v5 && _v2.skipInitialOnChange) && _v2.onChange(_v3), _v5 = !1), _v3;
    }
    return _v6.updateDeps = _v0 => {
      _v4 = _v0;
    }, _v6;
  }
  function _v5(_v0, _v1) {
    if (void 0 !== _v0) return _v0;
    throw Error(`Unexpected undefined${_v1 ? `: ${_v1}` : ""}`);
  }
  let _v6 = (_v0, _v1) => 1.01 > Math.abs(_v0 - _v1),
    _v7 = () => {
      if (void 0 !== _v1) return _v1;
      if ("u" < typeof navigator) return _v1 = !1;
      if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _v1 = !0;
      let _v0 = navigator.maxTouchPoints;
      return _v1 = "MacIntel" === navigator.platform && void 0 !== _v0 && _v0 > 0;
    },
    _v8 = _v0 => {
      let {
        offsetWidth: _v1,
        offsetHeight: _v2
      } = _v0;
      return {
        width: _v1,
        height: _v2
      };
    },
    _v9 = _v0 => _v0,
    _v10 = _v0 => {
      let _v1 = Math.max(_v0.startIndex - _v0.overscan, 0),
        _v2 = Math.min(_v0.endIndex + _v0.overscan, _v0.count - 1) - _v1 + 1,
        _v3 = Array(_v2);
      for (let _v0 = 0; _v0 < _v2; _v0++) _v3[_v0] = _v1 + _v0;
      return _v3;
    },
    _v11 = (_v0, _v1) => {
      let _v2 = _v0.scrollElement;
      if (!_v2) return;
      let _v3 = _v0.targetWindow;
      if (!_v3) return;
      let _v4 = _v0 => {
        let {
          width: _v1,
          height: _v2
        } = _v0;
        _v1({
          width: Math.round(_v1),
          height: Math.round(_v2)
        });
      };
      if (_v4(_v8(_v2)), !_v3.ResizeObserver) return () => {};
      let _v5 = new _v3.ResizeObserver(_v0 => {
        let _v1 = () => {
          let _v0 = _v0[0];
          if (null == _v0 ? void 0 : _v0.borderBoxSize) {
            let _v0 = _v0.borderBoxSize[0];
            if (_v0) return void _v4({
              width: _v0.inlineSize,
              height: _v0.blockSize
            });
          }
          _v4(_v8(_v2));
        };
        _v0.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(_v1) : _v1();
      });
      return _v5.observe(_v2, {
        box: "border-box"
      }), () => {
        _v5.unobserve(_v2);
      };
    },
    _v12 = {
      passive: !0
    },
    _v13 = "u" < typeof window || "onscrollend" in window,
    _v14 = (_v0, _v1) => ((_v0, _v1, _v2) => {
      var _v3, _v4;
      let _v5,
        _v6 = _v0.scrollElement;
      if (!_v6) return;
      let _v7 = _v0.targetWindow;
      if (!_v7) return;
      let _v8 = _v0.options.useScrollendEvent && _v13,
        _v9 = 0,
        _v10 = _v8 ? null : (_v3 = () => _v1(_v2(_v6), !1), _v4 = _v0.options.isScrollingResetDelay, Object.assign(function (..._v0) {
          _v7.clearTimeout(_v5), _v5 = _v7.setTimeout(() => _v3.apply(this, _v0), _v4);
        }, {
          cancel: () => {
            _v7.clearTimeout(_v5);
          }
        })),
        _v11 = _v0 => () => {
          _v9 = _v2(_v6), null == _v10 || _v10(), _v1(_v9, _v0);
        },
        _v12 = _v11(!0),
        _v13 = _v11(!1);
      return _v6.addEventListener("scroll", _v12, _v12), _v8 && _v6.addEventListener("scrollend", _v13, _v12), () => {
        _v6.removeEventListener("scroll", _v12), _v8 && _v6.removeEventListener("scrollend", _v13), null == _v10 || _v10.cancel();
      };
    })(_v0, _v1, _v0 => {
      let {
        horizontal: _v1,
        isRtl: _v2
      } = _v0.options;
      return _v1 ? _v0.scrollLeft * (_v2 && -1 || 1) : _v0.scrollTop;
    }),
    _v15 = (_v0, _v1, _v2) => {
      if (_v2.options.useCachedMeasurements) {
        let _v0 = _v2.indexFromElement(_v0),
          _v1 = _v2.options.getItemKey(_v0);
        return _v2.itemSizeCache.get(_v1) ?? _v2.options.estimateSize(_v0);
      }
      if (null == _v1 ? void 0 : _v1.borderBoxSize) {
        let _v0 = _v1.borderBoxSize[0];
        if (_v0) return Math.round(_v0[_v2.options.horizontal ? "inlineSize" : "blockSize"]);
      }
      if (!_v1) {
        let _v0 = _v2.indexFromElement(_v0),
          _v1 = _v2.options.getItemKey(_v0),
          _v2 = _v2.itemSizeCache.get(_v1);
        if (void 0 !== _v2) return _v2;
      }
      return _v0[_v2.options.horizontal ? "offsetWidth" : "offsetHeight"];
    },
    _v16 = (_v0, {
      adjustments: _v1 = 0,
      behavior: _v2
    }, _v3) => {
      var _v4, _v5;
      null == (_v5 = null == (_v4 = _v3.scrollElement) ? void 0 : _v4.scrollTo) || _v5.call(_v4, {
        [_v3.options.horizontal ? "left" : "top"]: _v0 + _v1,
        behavior: _v2
      });
    };
  class _v17 {
    constructor(_v0) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache = new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this._clampedAdjustment = null, this.elementsCache = new Map(), this.now = () => {
        var _v0, _v1, _v2;
        return (null == (_v2 = null == (_v1 = null == (_v0 = this.targetWindow) ? void 0 : _v0.performance) ? void 0 : _v1.now) ? void 0 : _v2.call(_v1)) ?? Date.now();
      }, this.observer = (() => {
        let _v0 = null,
          _v1 = () => _v0 || (this.targetWindow && this.targetWindow.ResizeObserver ? _v0 = new this.targetWindow.ResizeObserver(_v0 => {
            _v0.forEach(_v0 => {
              let _v1 = () => {
                let _v0 = _v0.target,
                  _v1 = this.indexFromElement(_v0);
                if (!_v0.isConnected) {
                  for (let [_v0, _v1] of (this.observer.unobserve(_v0), this.elementsCache)) if (_v1 === _v0) {
                    this.elementsCache.delete(_v0);
                    break;
                  }
                  return;
                }
                this.isIndexInRange(_v1) && this.shouldMeasureDuringScroll(_v1) && this.resizeItem(_v1, this.options.measureElement(_v0, _v0, this));
              };
              this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(_v1) : _v1();
            });
          }) : null);
        return {
          disconnect: () => {
            var _v0;
            null == (_v0 = _v1()) || _v0.disconnect(), _v0 = null;
          },
          observe: _v0 => {
            var _v1;
            return null == (_v1 = _v1()) ? void 0 : _v1.observe(_v0, {
              box: "border-box"
            });
          },
          unobserve: _v0 => {
            var _v1;
            return null == (_v1 = _v1()) ? void 0 : _v1.unobserve(_v0);
          }
        };
      })(), this.range = null, this.setOptions = _v0 => {
        var _v1;
        let _v2 = {
          debug: !1,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: !1,
          getItemKey: _v9,
          rangeExtractor: _v10,
          onChange: () => {},
          measureElement: _v15,
          initialRect: {
            width: 0,
            height: 0
          },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          anchorTo: "start",
          followOnAppend: !1,
          scrollEndThreshold: 1,
          isScrollingResetDelay: 150,
          enabled: !0,
          isRtl: !1,
          useScrollendEvent: !1,
          useAnimationFrameWithResizeObserver: !1,
          laneAssignmentMode: "estimate",
          useCachedMeasurements: !1
        };
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          void 0 !== _v0 && (_v2[_v0] = _v0);
        }
        let _v3 = this.options,
          _v4 = null,
          _v5 = null,
          _v6 = !1;
        if (void 0 !== _v3 && _v3.enabled && _v2.enabled && "end" === _v2.anchorTo && null !== this.scrollElement) {
          let _v0 = _v3.count,
            _v1 = _v2.count,
            _v2 = this.getMeasurements(),
            _v3 = (null == (_v1 = this._singleLaneMeasurements) ? void 0 : _v1.items) ?? _v2,
            _v4 = _v0 => {
              var _v1;
              return "object" == typeof (_v1 = _v3[_v0]) ? _v1.key : _v1;
            },
            _v5 = _v0 > 0 ? _v4(0) : null,
            _v6 = _v0 > 0 ? _v4(_v0 - 1) : null;
          if (_v1 !== _v0 || _v0 > 0 && _v1 > 0 && (_v2.getItemKey(0) !== _v5 || _v2.getItemKey(_v1 - 1) !== _v6)) {
            _v6 = !0;
            let _v0 = _v0 > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? _v2[0] : null;
            _v0 && (_v4 = [_v0.key, this.getScrollOffset() - _v0.start]);
            let _v1 = !0 === _v2.followOnAppend ? "auto" : _v2.followOnAppend || null;
            _v1 && _v1 > 0 && this.isAtEnd(_v3.scrollEndThreshold) && (0 === _v0 || _v2.getItemKey(_v1 - 1) !== _v6) && (_v1 > _v0 || function (_v0, _v1, _v2, _v3) {
              if (0 === _v1) return !1;
              let _v4 = _v3(0),
                _v5 = new Set(),
                _v6 = 0;
              for (; _v6 < _v0;) {
                let _v0 = _v2(_v6);
                if (_v0 === _v4) break;
                _v5.add(_v0), _v6++;
              }
              let _v7 = _v0 - _v6;
              if (0 === _v7 || _v7 >= _v1) return !1;
              for (let _v0 = 0; _v0 < _v7; _v0++) if (_v3(_v0) !== _v2(_v6 + _v0)) return !1;
              for (let _v0 = _v7; _v0 < _v1; _v0++) if (_v5.has(_v3(_v0))) return !1;
              return !0;
            }(_v0, _v1, _v4, _v2.getItemKey)) && (_v5 = _v1);
          }
        }
        this.options = _v2, _v6 && (this.pendingMin = 0, this.itemSizeCacheVersion++);
        let _v7 = !1,
          _v8 = 0;
        if (_v4 && null !== this.scrollOffset) {
          let [_v0, _v1] = _v4,
            _v2 = this.getMeasurements(),
            {
              count: _v3,
              getItemKey: _v4
            } = this.options,
            _v5 = 0;
          for (; _v5 < _v3 && _v4(_v5) !== _v0;) _v5++;
          if (_v5 < _v3) {
            let _v0 = _v2[_v5];
            if (_v0) {
              let _v0 = Math.max(0, _v0.start + _v1);
              _v5 || _v0 === this.scrollOffset || (_v8 = _v0 - this.scrollOffset, this.scrollOffset = _v0, _v7 = !0);
            }
          }
        }
        (_v7 || _v5) && (this.pendingScrollAnchor = [_v7 ? _v4[0] : null, _v7 ? _v4[1] : 0, _v5, _v8]);
      }, this.notify = _v0 => {
        var _v1, _v2;
        null == (_v2 = (_v1 = this.options).onChange) || _v2.call(_v1, this, _v0);
      }, this.maybeNotify = _v4(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), _v0 => {
        this.notify(_v0);
      }, {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
      }), this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach(_v0 => _v0()), this.unsubs = [], this.observer.disconnect(), null != this.rafId && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.isScrolling = !1, this.scrollDirection = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._clampedAdjustment = null, this.scrollElement = null, this.targetWindow = null;
      }, this._didMount = () => () => {
        this.cleanup();
      }, this._willUpdate = () => {
        var _v0, _v1;
        let _v2 = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== _v2) {
          if (this.cleanup(), !_v2) return void this.maybeNotify();
          if (this.scrollElement = _v2, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (null == (_v0 = this.scrollElement) ? void 0 : _v0.window) ?? null, this.elementsCache.forEach(_v0 => {
            this.observer.observe(_v0);
          }), this.unsubs.push(this.options.observeElementRect(this, _v0 => {
            this.scrollRect = _v0, this.maybeNotify();
          })), this.unsubs.push(this.options.observeElementOffset(this, (_v0, _v1) => {
            if (_v1 && null === this._intendedScrollOffset && _v0 === this.scrollOffset) return;
            null !== this._intendedScrollOffset && 1.5 > Math.abs(_v0 - this._intendedScrollOffset) && (_v0 = this._intendedScrollOffset), this._intendedScrollOffset = null, null !== this._clampedAdjustment && Math.abs(_v0 - this._clampedAdjustment.maxAtWrite) >= 1.5 && (this._clampedAdjustment = null), this.scrollAdjustments = 0;
            let _v2 = this.getScrollOffset();
            this.scrollDirection = _v1 ? _v2 === _v0 ? this.scrollDirection : _v2 < _v0 ? "forward" : "backward" : null, this.scrollOffset = _v0, this.isScrolling = _v1, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })), "addEventListener" in this.scrollElement) {
            let _v0 = this.scrollElement,
              _v1 = () => {
                this._iosTouching = !0, this._iosJustTouchEnded = !1, null !== this._iosTouchEndTimerId && null != this.targetWindow && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
              },
              _v2 = () => {
                this._iosTouching = !1, _v7() && null != this.targetWindow && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
                  this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
                }, 150));
              };
            _v0.addEventListener("touchstart", _v1, _v12), _v0.addEventListener("touchend", _v2, _v12), this.unsubs.push(() => {
              _v0.removeEventListener("touchstart", _v1), _v0.removeEventListener("touchend", _v2), null !== this._iosTouchEndTimerId && null != this.targetWindow && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
            });
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
        let _v3 = this.pendingScrollAnchor;
        if (this.pendingScrollAnchor = null, _v3 && this.scrollElement && this.options.enabled) {
          let [_v0, _v1, _v2, _v3] = _v3;
          null !== _v0 && !_v2 && (_v7() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? 0 !== _v3 && (this._iosDeferredAdjustment += _v3) : ((null == (_v1 = this.scrollState) ? void 0 : _v1.behavior) !== "smooth" || _v6(this.getScrollOffset() - _v3, this.scrollState.lastTargetOffset)) && this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          })), _v2 && this.scrollToEnd({
            behavior: _v2
          });
        }
        this._retryClampedAdjustment();
      }, this._retryClampedAdjustment = () => {
        if (null === this._clampedAdjustment || !this.scrollElement || !this.options.enabled) return;
        let {
            target: _v0,
            maxAtWrite: _v1
          } = this._clampedAdjustment,
          _v2 = this.getMaxScrollOffset();
        _v2 > _v1 + .5 && (this._clampedAdjustment = _v0 > _v2 + .5 ? {
          target: _v0,
          maxAtWrite: _v2
        } : null, this._scrollToOffset(_v0, {
          adjustments: void 0,
          behavior: void 0
        }));
      }, this._flushIosDeferredIfReady = () => {
        if (0 === this._iosDeferredAdjustment || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
        let _v0 = this.getScrollOffset(),
          _v1 = this.getMaxScrollOffset();
        if (_v0 < 0 || _v0 > _v1) return;
        if (this._iosDeferredAdjustment < 0 && _v0 >= _v1 - 1) {
          this._iosDeferredAdjustment = 0;
          return;
        }
        let _v2 = this._iosDeferredAdjustment;
        this._iosDeferredAdjustment = 0, this._scrollToOffset(_v0, {
          adjustments: this.scrollAdjustments += _v2,
          behavior: void 0
        });
      }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? ("function" == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = _v4(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes, this.options.laneAssignmentMode, this.options.gap], (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => (void 0 !== this.prevLanes && this.prevLanes !== _v5 && (this.lanesChangedFlag = !0), this.prevLanes = _v5, this.pendingMin = null, {
        count: _v0,
        paddingStart: _v1,
        scrollMargin: _v2,
        getItemKey: _v3,
        enabled: _v4,
        lanes: _v5,
        laneAssignmentMode: _v6,
        gap: _v7
      }), {
        key: !1
      }), this.isIndexInRange = _v0 => _v0 >= 0 && _v0 < this.options.count, this.getMeasurements = _v4(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({
        count: _v0,
        paddingStart: _v1,
        scrollMargin: _v2,
        getItemKey: _v3,
        enabled: _v4,
        lanes: _v5,
        laneAssignmentMode: _v6,
        gap: _v7
      }, _v8) => {
        var _v9, _v10;
        let _v11 = this.itemSizeCache;
        if (!_v4) return this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > _v0) for (let _v0 of this.laneAssignments.keys()) _v0 >= _v0 && this.laneAssignments.delete(_v0);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), 0 !== this.measurementsCache.length || this.lanesSettling || (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(_v0 => {
          this.itemSizeCache.set(_v0.key, _v0.size);
        }));
        let _v12 = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === _v0 && (this.lanesSettling = !1), 1 === _v5) {
          let _v0,
            _v1,
            _v2 = 2 * _v0,
            _v3 = null == (_v9 = this._singleLaneMeasurements) ? void 0 : _v9.flat;
          if (!_v3 || _v3.length < _v2) {
            let _v0 = new Float64Array(_v2);
            _v3 && _v12 > 0 && _v0.set(_v3.subarray(0, 2 * _v12)), _v3 = _v0;
          }
          let _v4 = 0 === _v12 ? Array(_v0) : this._singleLaneMeasurements.items.slice();
          if (0 === _v12) _v0 = _v1 + _v2;else {
            let _v0 = _v12 - 1;
            _v0 = _v3[2 * _v0] + _v3[2 * _v0 + 1] + _v7;
          }
          for (let _v0 = _v12; _v0 < _v0; _v0++) {
            let _v0 = _v3(_v0);
            _v4[_v0] = _v0;
            let _v1 = _v11.get(_v0),
              _v2 = "number" == typeof _v1 ? _v1 : this.options.estimateSize(_v0);
            _v3[2 * _v0] = _v0, _v3[2 * _v0 + 1] = _v2, _v0 += _v2 + _v7;
          }
          this._singleLaneMeasurements = {
            flat: _v3,
            items: _v4
          };
          let _v5 = (_v10 = _v3, _v1 = _v4.length, new Proxy(_v4, {
            get(_v0, _v1, _v2) {
              if ("string" == typeof _v1) {
                let _v0 = _v1.charCodeAt(0);
                if (_v0 >= 48 && _v0 <= 57) {
                  let _v0 = +_v1;
                  if (Number.isInteger(_v0) && _v0 >= 0 && _v0 < _v1) {
                    let _v0 = _v0[_v0];
                    if ("object" != typeof _v0) {
                      let _v0 = _v10[2 * _v0];
                      _v0 = _v0[_v0] = {
                        index: _v0,
                        key: _v0,
                        start: _v0,
                        size: _v10[2 * _v0 + 1],
                        end: _v0 + _v10[2 * _v0 + 1],
                        lane: 0
                      };
                    }
                    return _v0;
                  }
                }
                if ("length" === _v1) return _v1;
              }
              return Reflect.get(_v0, _v1, _v2);
            }
          }));
          return this.measurementsCache = _v5, _v5;
        }
        let _v13 = this.measurementsCache.slice(0, _v12),
          _v14 = Array(_v5).fill(void 0),
          _v15 = new Float64Array(_v5),
          _v16 = 0;
        for (let _v0 = 0; _v0 < _v12; _v0++) {
          let _v0 = _v13[_v0];
          _v0 && (void 0 === _v14[_v0.lane] && _v16++, _v14[_v0.lane] = _v0, _v15[_v0.lane] = _v0.end);
        }
        for (let _v0 = _v12; _v0 < _v0; _v0++) {
          let _v0,
            _v1,
            _v2 = _v3(_v0),
            _v3 = this.laneAssignments.get(_v0),
            _v4 = "estimate" === _v6 || _v11.has(_v2);
          if (void 0 !== _v3 && this.options.lanes > 1) {
            let _v0 = _v14[_v0 = _v3],
              _v1 = void 0 !== _v0 ? _v13[_v0] : void 0;
            _v1 = _v1 ? _v1.end + _v7 : _v1 + _v2;
          } else if (_v16 === _v5) {
            let _v0 = 0,
              _v1 = _v15[0],
              _v2 = _v14[0];
            for (let _v0 = 1; _v0 < _v5; _v0++) {
              let _v0 = _v15[_v0];
              (_v0 < _v1 || _v0 === _v1 && _v14[_v0] < _v2) && (_v0 = _v0, _v1 = _v0, _v2 = _v14[_v0]);
            }
            _v0 = _v0, _v1 = _v1 + _v7, _v4 && this.laneAssignments.set(_v0, _v0);
          } else _v0 = _v0 % this.options.lanes, _v1 = _v1 + _v2, _v4 && this.laneAssignments.set(_v0, _v0);
          let _v5 = _v11.get(_v2),
            _v6 = "number" == typeof _v5 ? _v5 : this.options.estimateSize(_v0),
            _v7 = _v1 + _v6;
          _v13[_v0] = {
            index: _v0,
            start: _v1,
            size: _v6,
            end: _v7,
            key: _v2,
            lane: _v0
          }, void 0 === _v14[_v0] && _v16++, _v14[_v0] = _v0, _v15[_v0] = _v7;
        }
        return this.measurementsCache = _v13, _v13;
      }, {
        key: !1,
        debug: () => this.options.debug
      }), this.calculateRange = _v4(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (_v0, _v1, _v2, _v3) => 0 === _v0.length || 0 === _v1 ? (this.range = null, null) : (this.range = function (_v0, _v1, _v2, _v3, _v4) {
        let _v5 = _v0.length - 1;
        if (_v0.length <= _v3) return {
          startIndex: 0,
          endIndex: _v5
        };
        if (1 === _v3 && null !== _v4) {
          let _v0 = function (_v0, _v1, _v2) {
              let _v3 = 0;
              for (; _v3 <= _v1;) {
                let _v0 = (_v3 + _v1) / 2 | 0,
                  _v1 = _v0[2 * _v0];
                if (_v1 < _v2) _v3 = _v0 + 1;else {
                  if (!(_v1 > _v2)) return _v0;
                  _v1 = _v0 - 1;
                }
              }
              return _v3 > 0 ? _v3 - 1 : 0;
            }(_v4, _v5, _v2),
            _v1 = _v0,
            _v2 = _v2 + _v1;
          for (; _v1 < _v5 && _v4[2 * _v1] + _v4[2 * _v1 + 1] < _v2;) _v1++;
          return {
            startIndex: _v0,
            endIndex: _v1
          };
        }
        let _v6 = _v18(0, _v5, _v0 => _v0[_v0].start, _v2),
          _v7 = _v6;
        if (1 === _v3) for (; _v7 < _v5 && _v0[_v7].end < _v2 + _v1;) _v7++;else if (_v3 > 1) {
          let _v0 = Array(_v3).fill(0);
          for (; _v7 < _v5 && _v0.some(_v0 => _v0 < _v2 + _v1);) {
            let _v0 = _v0[_v7];
            _v0[_v0.lane] = _v0.end, _v7++;
          }
          let _v1 = Array(_v3).fill(_v2 + _v1);
          for (; _v6 >= 0 && _v1.some(_v0 => _v0 >= _v2);) {
            let _v0 = _v0[_v6];
            _v1[_v0.lane] = _v0.start, _v6--;
          }
          _v6 = Math.max(0, _v6 - _v6 % _v3), _v7 = Math.min(_v5, _v7 + (_v3 - 1 - _v7 % _v3));
        }
        return {
          startIndex: _v6,
          endIndex: _v7
        };
      }(_v0, _v1, _v2, _v3, 1 === _v3 && null !== this._singleLaneMeasurements ? this._singleLaneMeasurements.flat : null), this.range), {
        key: !1,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = _v4(() => {
        let _v0 = null,
          _v1 = null,
          _v2 = this.calculateRange();
        return _v2 && (_v0 = _v2.startIndex, _v1 = _v2.endIndex), this.maybeNotify.updateDeps([this.isScrolling, _v0, _v1]), [this.options.rangeExtractor, this.options.overscan, this.options.count, _v0, _v1];
      }, (_v0, _v1, _v2, _v3, _v4) => null === _v3 || null === _v4 ? [] : _v0({
        startIndex: _v3,
        endIndex: _v4,
        overscan: _v1,
        count: _v2
      }), {
        key: !1,
        debug: () => this.options.debug
      }), this.indexFromElement = _v0 => {
        let _v1 = this.options.indexAttribute,
          _v2 = _v0.getAttribute(_v1);
        return _v2 ? parseInt(_v2, 10) : (console.warn(`Missing attribute name '${_v1}={index}' on measured element.`), -1);
      }, this.shouldMeasureDuringScroll = _v0 => {
        var _v1;
        if (!this.scrollState || "smooth" !== this.scrollState.behavior) return !0;
        let _v2 = this.scrollState.index ?? (null == (_v1 = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) ? void 0 : _v1.index);
        if (void 0 !== _v2 && this.range) {
          let _v0 = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)),
            _v1 = Math.max(0, _v2 - _v0),
            _v2 = Math.min(this.options.count - 1, _v2 + _v0);
          return _v0 >= _v1 && _v0 <= _v2;
        }
        return !0;
      }, this.measureElement = _v0 => {
        if (!_v0) return void this.elementsCache.forEach((_v0, _v1) => {
          _v0.isConnected || (this.observer.unobserve(_v0), this.elementsCache.delete(_v1));
        });
        let _v1 = this.indexFromElement(_v0);
        if (!this.isIndexInRange(_v1)) return;
        let _v2 = this.options.getItemKey(_v1),
          _v3 = this.elementsCache.get(_v2);
        _v3 !== _v0 && (_v3 && this.observer.unobserve(_v3), this.observer.observe(_v0), this.elementsCache.set(_v2, _v0)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(_v1) && this.resizeItem(_v1, this.options.measureElement(_v0, void 0, this));
      }, this.resizeItem = (_v0, _v1) => {
        var _v2, _v3, _v4;
        let _v5, _v6, _v7;
        if (!this.isIndexInRange(_v0)) return;
        let _v8 = null == (_v2 = this._singleLaneMeasurements) ? void 0 : _v2.flat;
        if (1 === this.options.lanes && null != _v8) _v7 = this.options.getItemKey(_v0), _v6 = _v8[2 * _v0], _v5 = _v8[2 * _v0 + 1];else {
          let _v0 = this.measurementsCache[_v0];
          if (!_v0) return;
          _v7 = _v0.key, _v6 = _v0.start, _v5 = _v0.size;
        }
        let _v9 = this.itemSizeCache.get(_v7) ?? _v5,
          _v10 = _v1 - _v9;
        if (0 !== _v10) {
          let _v0 = "end" === this.options.anchorTo && (null == (_v3 = this.scrollState) ? void 0 : _v3.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold,
            _v1 = _v0 ? this.getTotalSize() : 0,
            _v2 = this.getScrollOffset() + this.scrollAdjustments,
            _v3 = this.itemSizeCache.has(_v7) ? _v6 + _v9 <= _v2 && "backward" !== this.scrollDirection : _v6 < _v2,
            _v4 = (null == (_v4 = this.scrollState) ? void 0 : _v4.behavior) !== "smooth" && (void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange ? this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[_v0] ?? {
              index: _v0,
              key: _v7,
              start: _v6,
              size: _v5,
              end: _v6 + _v5,
              lane: 0
            }, _v10, this) : _v3);
          (null === this.pendingMin || _v0 < this.pendingMin) && (this.pendingMin = _v0), this.itemSizeCache.set(_v7, _v1), this.itemSizeCacheVersion++;
          let _v5 = !1;
          _v0 ? _v5 = this.applyScrollAdjustment(this.getTotalSize() - _v1) : _v4 && (_v5 = this.applyScrollAdjustment(_v10)), this.notify(_v5), this._retryClampedAdjustment();
        }
      }, this.getVirtualItems = _v4(() => [this.getVirtualIndexes(), this.getMeasurements()], (_v0, _v1) => {
        let _v2 = [];
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v1[_v0[_v0]];
          _v2.push(_v0);
        }
        return _v2;
      }, {
        key: !1,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = _v0 => {
        var _v1;
        let _v2 = this.getMeasurements();
        if (0 === _v2.length) return;
        let _v3 = null == (_v1 = this._singleLaneMeasurements) ? void 0 : _v1.flat,
          _v4 = 1 === this.options.lanes && null != _v3,
          _v5 = _v18(0, _v2.length - 1, _v4 ? _v0 => _v3[2 * _v0] : _v0 => _v5(_v2[_v0]).start, _v0);
        return _v5(_v2[_v5]);
      }, this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        {
          let _v0 = this.scrollElement.document.documentElement;
          return this.options.horizontal ? _v0.scrollWidth - this.scrollElement.innerWidth : _v0.scrollHeight - this.scrollElement.innerHeight;
        }
      }, this.getVirtualDistanceFromEnd = () => Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (_v0 = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= _v0, this.getOffsetForAlignment = (_v0, _v1, _v2 = 0) => {
        if (!this.scrollElement) return 0;
        let _v3 = this.getSize(),
          _v4 = this.getScrollOffset();
        return "auto" === _v1 && (_v1 = _v0 >= _v4 + _v3 ? "end" : "start"), "center" === _v1 ? _v0 += (_v2 - _v3) / 2 : "end" === _v1 && (_v0 -= _v3), Math.max(Math.min(this.getMaxScrollOffset(), _v0), 0);
      }, this.getOffsetForIndex = (_v0, _v1 = "auto") => {
        _v0 = Math.max(0, Math.min(_v0, this.options.count - 1));
        let _v2 = this.getSize(),
          _v3 = this.getScrollOffset(),
          _v4 = this.measurementsCache[_v0];
        if (!_v4) return;
        if ("auto" === _v1) if (_v4.end >= _v3 + _v2 - this.options.scrollPaddingEnd) _v1 = "end";else {
          if (!(_v4.start <= _v3 + this.options.scrollPaddingStart)) return [_v3, _v1];
          _v1 = "start";
        }
        if ("end" === _v1 && _v0 === this.options.count - 1) return [this.getMaxScrollOffset(), _v1];
        let _v5 = "end" === _v1 ? _v4.end + this.options.scrollPaddingEnd : _v4.start - this.options.scrollPaddingStart;
        return [this.getOffsetForAlignment(_v5, _v1, _v4.size), _v1];
      }, this.scrollToOffset = (_v0, {
        align: _v1 = "start",
        behavior: _v2 = "auto"
      } = {}) => {
        this._iosDeferredAdjustment = 0;
        let _v3 = this.getOffsetForAlignment(_v0, _v1),
          _v4 = this.now();
        this.scrollState = {
          index: null,
          align: _v1,
          behavior: _v2,
          startedAt: _v4,
          lastTargetOffset: _v3,
          stableFrames: 0
        }, this._scrollToOffset(_v3, {
          adjustments: void 0,
          behavior: _v2
        }), this.scheduleScrollReconcile();
      }, this.scrollToIndex = (_v0, {
        align: _v1 = "auto",
        behavior: _v2 = "auto"
      } = {}) => {
        this._iosDeferredAdjustment = 0, _v0 = Math.max(0, Math.min(_v0, this.options.count - 1));
        let _v3 = this.getOffsetForIndex(_v0, _v1);
        if (!_v3) return;
        let [_v4, _v5] = _v3,
          _v6 = this.now();
        this.scrollState = {
          index: _v0,
          align: _v5,
          behavior: _v2,
          startedAt: _v6,
          lastTargetOffset: _v4,
          stableFrames: 0
        }, this._scrollToOffset(_v4, {
          adjustments: void 0,
          behavior: _v2
        }), this.scheduleScrollReconcile();
      }, this.scrollBy = (_v0, {
        behavior: _v1 = "auto"
      } = {}) => {
        let _v2 = this.getScrollOffset() + _v0,
          _v3 = this.now();
        this.scrollState = {
          index: null,
          align: "start",
          behavior: _v1,
          startedAt: _v3,
          lastTargetOffset: _v2,
          stableFrames: 0
        }, this._scrollToOffset(_v2, {
          adjustments: void 0,
          behavior: _v1
        }), this.scheduleScrollReconcile();
      }, this.scrollToEnd = ({
        behavior: _v0 = "auto"
      } = {}) => {
        this.options.count > 0 ? this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: _v0
        }) : this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
          behavior: _v0
        });
      }, this.getTotalSize = () => {
        var _v0, _v1;
        let _v2,
          _v3 = this.getMeasurements();
        if (0 === _v3.length) _v2 = this.options.paddingStart;else if (1 === this.options.lanes) {
          let _v0 = _v3.length - 1,
            _v1 = null == (_v0 = this._singleLaneMeasurements) ? void 0 : _v0.flat;
          _v2 = null != _v1 ? _v1[2 * _v0] + _v1[2 * _v0 + 1] : (null == (_v1 = _v3[_v0]) ? void 0 : _v1.end) ?? 0;
        } else {
          let _v0 = Array(this.options.lanes).fill(null),
            _v1 = _v3.length - 1;
          for (; _v1 >= 0 && _v0.some(_v0 => null === _v0);) {
            let _v0 = _v3[_v1];
            null === _v0[_v0.lane] && (_v0[_v0.lane] = _v0.end), _v1--;
          }
          _v2 = Math.max(..._v0.filter(_v0 => null !== _v0));
        }
        return Math.max(_v2 - this.options.scrollMargin + this.options.paddingEnd, 0);
      }, this.takeSnapshot = () => {
        let _v0 = [];
        if (0 === this.itemSizeCache.size) return _v0;
        for (let _v0 of this.getMeasurements()) _v0 && this.itemSizeCache.has(_v0.key) && _v0.push({
          index: _v0.index,
          key: _v0.key,
          start: _v0.start,
          size: _v0.size,
          end: _v0.end,
          lane: _v0.lane
        });
        return _v0;
      }, this._scrollToOffset = (_v0, {
        adjustments: _v1,
        behavior: _v2
      }) => {
        this._intendedScrollOffset = _v0 + (_v1 ?? 0), this.options.scrollToFn(_v0, {
          behavior: _v2,
          adjustments: _v1
        }, this);
      }, this.measure = () => {
        this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
      }, this.setOptions(_v0);
    }
    applyScrollAdjustment(_v0, _v1) {
      if (0 === _v0) return !1;
      if (_v7() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded)) return this._iosDeferredAdjustment += _v0, !1;
      {
        let _v0 = this.getScrollOffset() + this.scrollAdjustments + _v0,
          _v1 = this.scrollElement,
          _v2 = null !== _v1 && ("scrollHeight" in _v1 || "document" in _v1) ? this.getMaxScrollOffset() : null;
        return this._clampedAdjustment = null !== _v2 && _v0 > _v2 + .5 ? {
          target: _v0,
          maxAtWrite: _v2
        } : null, this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += _v0,
          behavior: _v1
        }), null !== this.scrollOffset && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0), !0;
      }
    }
    scheduleScrollReconcile() {
      if (!this.targetWindow) {
        this.scrollState = null;
        return;
      }
      null == this.rafId && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
        this.rafId = null, this.reconcileScroll();
      }));
    }
    reconcileScroll() {
      if (!this.scrollState || !this.scrollElement) return;
      if (this.now() - this.scrollState.startedAt > 0) {
        this.scrollState = null;
        return;
      }
      let _v0 = null != this.scrollState.index ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0,
        _v1 = _v0 ? _v0[0] : this.scrollState.lastTargetOffset,
        _v2 = _v1 !== this.scrollState.lastTargetOffset;
      if (!_v2 && _v6(_v1, this.getScrollOffset())) {
        if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
          this.getScrollOffset() !== _v1 && this._scrollToOffset(_v1, {
            adjustments: void 0,
            behavior: "auto"
          }), this.scrollState = null;
          return;
        }
      } else if (this.scrollState.stableFrames = 0, _v2) {
        let _v0 = this.getSize() || 600,
          _v1 = Math.abs(_v1 - this.getScrollOffset()),
          _v2 = "smooth" === this.scrollState.behavior && _v1 > _v0;
        this.scrollState.lastTargetOffset = _v1, _v2 || (this.scrollState.behavior = "auto"), this._scrollToOffset(_v1, {
          adjustments: void 0,
          behavior: _v2 ? "smooth" : "auto"
        });
      }
      this.scheduleScrollReconcile();
    }
  }
  let _v18 = (_v0, _v1, _v2, _v3) => {
      for (; _v0 <= _v1;) {
        let _v0 = (_v0 + _v1) / 2 | 0,
          _v1 = _v2(_v0);
        if (_v1 < _v3) _v0 = _v0 + 1;else {
          if (!(_v1 > _v3)) return _v0;
          _v1 = _v0 - 1;
        }
      }
      return _v0 > 0 ? _v0 - 1 : 0;
    },
    _v19 = "u" > typeof document ? _v2.useLayoutEffect : _v2.useEffect;
  _v0.s(["useVirtualizer", 0, function (_v0) {
    return function ({
      useFlushSync: _v0 = !0,
      directDomUpdates: _v1 = !1,
      directDomUpdatesMode: _v2 = "transform",
      ..._v3
    }) {
      let _v4 = _v2.useReducer(_v0 => _v0 + 1, 0)[1],
        _v5 = _v2.useRef({
          enabled: _v1,
          mode: _v2,
          container: null,
          lastSize: null,
          lastPositions: new WeakMap(),
          prevRange: null
        });
      _v5.current.enabled = _v1, _v5.current.mode = _v2;
      let _v6 = _v2.useRef(!1),
        _v7 = _v0 => {
          let _v1 = _v5.current;
          if (!_v1.enabled || !_v1.container) return;
          let _v2 = _v0.getTotalSize();
          if (_v2 !== _v1.lastSize) {
            _v1.lastSize = _v2;
            let _v0 = _v0.options.horizontal ? "width" : "height";
            _v1.container.style[_v0] = `${_v2}px`;
          }
        },
        _v8 = _v0 => {
          let _v1 = _v5.current;
          if (!_v1.enabled || !_v1.container) return;
          _v7(_v0);
          let _v2 = !!_v0.options.horizontal,
            _v3 = "transform" === _v1.mode,
            _v4 = _v2 ? "left" : "top",
            _v5 = _v0.options.scrollMargin;
          for (let _v0 of _v0.getVirtualItems()) {
            let _v0 = _v0.start - _v5,
              _v1 = _v0.elementsCache.get(_v0.key);
            _v1 && _v1.lastPositions.get(_v1) !== _v0 && (_v1.lastPositions.set(_v1, _v0), _v3 ? _v1.style.transform = _v2 ? `translate3d(${_v0}px, 0, 0)` : `translate3d(0, ${_v0}px, 0)` : _v1.style[_v4] = `${_v0}px`);
          }
        },
        _v9 = {
          ..._v3,
          onChange: (_v0, _v1) => {
            var _v2;
            let _v3 = _v5.current,
              _v4 = !0;
            if (_v3.enabled) {
              _v8(_v0);
              let _v0 = _v0.range,
                _v1 = _v3.prevRange;
              (_v4 = !_v1 || _v1.isScrolling !== _v0.isScrolling || _v1.startIndex !== (null == _v0 ? void 0 : _v0.startIndex) || _v1.endIndex !== (null == _v0 ? void 0 : _v0.endIndex)) && (_v3.prevRange = _v0 ? {
                startIndex: _v0.startIndex,
                endIndex: _v0.endIndex,
                isScrolling: _v0.isScrolling
              } : null);
            }
            _v4 && (_v0 && _v1 && !_v6.current ? (0, _v3.flushSync)(_v4) : _v4()), null == (_v2 = _v3.onChange) || _v2.call(_v3, _v0, _v1);
          }
        },
        [_v10] = _v2.useState(() => {
          let _v0 = new _v17(_v9),
            _v1 = _v0.measureElement;
          return _v0.measureElement = _v0 => {
            _v6.current = !0;
            try {
              _v1(_v0);
            } finally {
              _v6.current = !1;
            }
          }, Object.assign(_v0, {
            containerRef: _v0 => {
              let _v1 = _v5.current;
              if (_v1.container = _v0, _v1.lastSize = null, _v0 && _v1.enabled) {
                let _v0 = _v0.getTotalSize();
                _v1.lastSize = _v0;
                let _v1 = _v0.options.horizontal ? "width" : "height";
                _v0.style[_v1] = `${_v0}px`;
              }
            }
          });
        });
      return _v10.setOptions(_v9), _v19(() => _v10._didMount(), []), _v19(() => (_v7(_v10), _v10._willUpdate())), _v19(() => {
        _v8(_v10);
      }), _v10;
    }({
      observeElementRect: _v11,
      observeElementOffset: _v14,
      scrollToFn: _v16,
      ..._v0
    });
  }], 0);
}