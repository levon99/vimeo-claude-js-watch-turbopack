{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1, _v2) {
    let _v3,
      _v4 = _v2.initialDeps ?? [],
      _v5 = !0;
    function _v6() {
      var _v0, _v1, _v2;
      let _v3, _v4;
      _v2.key && (null == (_v0 = _v2.debug) ? void 0 : _v0.call(_v2)) && (_v3 = Date.now());
      let _v5 = _v0();
      if (!(_v5.length !== _v4.length || _v5.some((_v0, _v1) => _v4[_v1] !== _v0))) return _v3;
      if (_v4 = _v5, _v2.key && (null == (_v1 = _v2.debug) ? void 0 : _v1.call(_v2)) && (_v4 = Date.now()), _v3 = _v1(..._v5), _v2.key && (null == (_v2 = _v2.debug) ? void 0 : _v2.call(_v2))) {
        let _v0 = Math.round((Date.now() - _v3) * 100) / 100,
          _v1 = Math.round((Date.now() - _v4) * 100) / 100,
          _v2 = _v1 / 16,
          _v3 = (_v0, _v1) => {
            for (_v0 = String(_v0); _v0.length < _v1;) _v0 = " " + _v0;
            return _v0;
          };
        console.info(`%c⏱ ${_v3(_v1, 5)} /${_v3(_v0, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _v2, 120))}deg 100% 31%);`, null == _v2 ? void 0 : _v2.key);
      }
      return (null == _v2 ? void 0 : _v2.onChange) && !(_v5 && _v2.skipInitialOnChange) && _v2.onChange(_v3), _v5 = !1, _v3;
    }
    return _v6.updateDeps = _v0 => {
      _v4 = _v0;
    }, _v6;
  }
  function _v5(_v0, _v1) {
    if (void 0 !== _v0) return _v0;
    throw Error(`Unexpected undefined${_v1 ? `: ${_v1}` : ""}`);
  }
  let _v6 = _v0 => {
      let {
        offsetWidth: _v1,
        offsetHeight: _v2
      } = _v0;
      return {
        width: _v1,
        height: _v2
      };
    },
    _v7 = _v0 => _v0,
    _v8 = _v0 => {
      let _v1 = Math.max(_v0.startIndex - _v0.overscan, 0),
        _v2 = Math.min(_v0.endIndex + _v0.overscan, _v0.count - 1),
        _v3 = [];
      for (let _v0 = _v1; _v0 <= _v2; _v0++) _v3.push(_v0);
      return _v3;
    },
    _v9 = (_v0, _v1) => {
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
      if (_v4(_v6(_v2)), !_v3.ResizeObserver) return () => {};
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
          _v4(_v6(_v2));
        };
        _v0.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(_v1) : _v1();
      });
      return _v5.observe(_v2, {
        box: "border-box"
      }), () => {
        _v5.unobserve(_v2);
      };
    },
    _v10 = {
      passive: !0
    },
    _v11 = "u" < typeof window || "onscrollend" in window,
    _v12 = (_v0, _v1) => {
      var _v2, _v3;
      let _v4,
        _v5 = _v0.scrollElement;
      if (!_v5) return;
      let _v6 = _v0.targetWindow;
      if (!_v6) return;
      let _v7 = 0,
        _v8 = _v0.options.useScrollendEvent && _v11 ? () => void 0 : (_v2 = () => {
          _v1(_v7, !1);
        }, _v3 = _v0.options.isScrollingResetDelay, function (..._v0) {
          _v6.clearTimeout(_v4), _v4 = _v6.setTimeout(() => _v2.apply(this, _v0), _v3);
        }),
        _v9 = _v0 => () => {
          let {
            horizontal: _v0,
            isRtl: _v1
          } = _v0.options;
          _v7 = _v0 ? _v5.scrollLeft * (_v1 && -1 || 1) : _v5.scrollTop, _v8(), _v1(_v7, _v0);
        },
        _v10 = _v9(!0),
        _v11 = _v9(!1);
      _v5.addEventListener("scroll", _v10, _v10);
      let _v12 = _v0.options.useScrollendEvent && _v11;
      return _v12 && _v5.addEventListener("scrollend", _v11, _v10), () => {
        _v5.removeEventListener("scroll", _v10), _v12 && _v5.removeEventListener("scrollend", _v11);
      };
    },
    _v13 = (_v0, _v1, _v2) => {
      if (null == _v1 ? void 0 : _v1.borderBoxSize) {
        let _v0 = _v1.borderBoxSize[0];
        if (_v0) return Math.round(_v0[_v2.options.horizontal ? "inlineSize" : "blockSize"]);
      }
      return _v0[_v2.options.horizontal ? "offsetWidth" : "offsetHeight"];
    },
    _v14 = (_v0, {
      adjustments: _v1 = 0,
      behavior: _v2
    }, _v3) => {
      var _v4, _v5;
      null == (_v5 = null == (_v4 = _v3.scrollElement) ? void 0 : _v4.scrollTo) || _v5.call(_v4, {
        [_v3.options.horizontal ? "left" : "top"]: _v0 + _v1,
        behavior: _v2
      });
    };
  class _v15 {
    constructor(_v0) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = new Map(), this.laneAssignments = new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map(), this.now = () => {
        var _v0, _v1, _v2;
        return (null == (_v2 = null == (_v1 = null == (_v0 = this.targetWindow) ? void 0 : _v0.performance) ? void 0 : _v1.now) ? void 0 : _v2.call(_v1)) ?? Date.now();
      }, this.observer = (() => {
        let _v0 = null,
          _v1 = () => _v0 || (this.targetWindow && this.targetWindow.ResizeObserver ? _v0 = new this.targetWindow.ResizeObserver(_v0 => {
            _v0.forEach(_v0 => {
              let _v1 = () => {
                let _v0 = _v0.target,
                  _v1 = this.indexFromElement(_v0);
                _v0.isConnected ? this.shouldMeasureDuringScroll(_v1) && this.resizeItem(_v1, this.options.measureElement(_v0, _v0, this)) : this.observer.unobserve(_v0);
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
        Object.entries(_v0).forEach(([_v0, _v1]) => {
          void 0 === _v1 && delete _v0[_v0];
        }), this.options = {
          debug: !1,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: !1,
          getItemKey: _v7,
          rangeExtractor: _v8,
          onChange: () => {},
          measureElement: _v13,
          initialRect: {
            width: 0,
            height: 0
          },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          isScrollingResetDelay: 150,
          enabled: !0,
          isRtl: !1,
          useScrollendEvent: !1,
          useAnimationFrameWithResizeObserver: !1,
          ..._v0
        };
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
        this.unsubs.filter(Boolean).forEach(_v0 => _v0()), this.unsubs = [], this.observer.disconnect(), null != this.rafId && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
      }, this._didMount = () => () => {
        this.cleanup();
      }, this._willUpdate = () => {
        var _v0;
        let _v1 = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== _v1) {
          if (this.cleanup(), !_v1) return void this.maybeNotify();
          this.scrollElement = _v1, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (null == (_v0 = this.scrollElement) ? void 0 : _v0.window) ?? null, this.elementsCache.forEach(_v0 => {
            this.observer.observe(_v0);
          }), this.unsubs.push(this.options.observeElementRect(this, _v0 => {
            this.scrollRect = _v0, this.maybeNotify();
          })), this.unsubs.push(this.options.observeElementOffset(this, (_v0, _v1) => {
            this.scrollAdjustments = 0, this.scrollDirection = _v1 ? this.getScrollOffset() < _v0 ? "forward" : "backward" : null, this.scrollOffset = _v0, this.isScrolling = _v1, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })), this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? ("function" == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (_v0, _v1) => {
        let _v2 = new Map(),
          _v3 = new Map();
        for (let _v0 = _v1 - 1; _v0 >= 0; _v0--) {
          let _v0 = _v0[_v0];
          if (_v2.has(_v0.lane)) continue;
          let _v1 = _v3.get(_v0.lane);
          if (null == _v1 || _v0.end > _v1.end ? _v3.set(_v0.lane, _v0) : _v0.end < _v1.end && _v2.set(_v0.lane, !0), _v2.size === this.options.lanes) break;
        }
        return _v3.size === this.options.lanes ? Array.from(_v3.values()).sort((_v0, _v1) => _v0.end === _v1.end ? _v0.index - _v1.index : _v0.end - _v1.end)[0] : void 0;
      }, this.getMeasurementOptions = _v4(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes], (_v0, _v1, _v2, _v3, _v4, _v5) => (void 0 !== this.prevLanes && this.prevLanes !== _v5 && (this.lanesChangedFlag = !0), this.prevLanes = _v5, this.pendingMeasuredCacheIndexes = [], {
        count: _v0,
        paddingStart: _v1,
        scrollMargin: _v2,
        getItemKey: _v3,
        enabled: _v4,
        lanes: _v5
      }), {
        key: !1
      }), this.getMeasurements = _v4(() => [this.getMeasurementOptions(), this.itemSizeCache], ({
        count: _v0,
        paddingStart: _v1,
        scrollMargin: _v2,
        getItemKey: _v3,
        enabled: _v4,
        lanes: _v5
      }, _v6) => {
        if (!_v4) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > _v0) for (let _v0 of this.laneAssignments.keys()) _v0 >= _v0 && this.laneAssignments.delete(_v0);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), 0 !== this.measurementsCache.length || this.lanesSettling || (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(_v0 => {
          this.itemSizeCache.set(_v0.key, _v0.size);
        }));
        let _v7 = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === _v0 && (this.lanesSettling = !1);
        let _v8 = this.measurementsCache.slice(0, _v7),
          _v9 = Array(_v5).fill(void 0);
        for (let _v0 = 0; _v0 < _v7; _v0++) {
          let _v0 = _v8[_v0];
          _v0 && (_v9[_v0.lane] = _v0);
        }
        for (let _v0 = _v7; _v0 < _v0; _v0++) {
          let _v0,
            _v1,
            _v2 = _v3(_v0),
            _v3 = this.laneAssignments.get(_v0);
          if (void 0 !== _v3 && this.options.lanes > 1) {
            let _v0 = _v9[_v0 = _v3],
              _v1 = void 0 !== _v0 ? _v8[_v0] : void 0;
            _v1 = _v1 ? _v1.end + this.options.gap : _v1 + _v2;
          } else {
            let _v0 = 1 === this.options.lanes ? _v8[_v0 - 1] : this.getFurthestMeasurement(_v8, _v0);
            _v1 = _v0 ? _v0.end + this.options.gap : _v1 + _v2, _v0 = _v0 ? _v0.lane : _v0 % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(_v0, _v0);
          }
          let _v4 = _v6.get(_v2),
            _v5 = "number" == typeof _v4 ? _v4 : this.options.estimateSize(_v0),
            _v6 = _v1 + _v5;
          _v8[_v0] = {
            index: _v0,
            start: _v1,
            size: _v5,
            end: _v6,
            key: _v2,
            lane: _v0
          }, _v9[_v0] = _v0;
        }
        return this.measurementsCache = _v8, _v8;
      }, {
        key: !1,
        debug: () => this.options.debug
      }), this.calculateRange = _v4(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (_v0, _v1, _v2, _v3) => this.range = _v0.length > 0 && _v1 > 0 ? function ({
        measurements: _v0,
        outerSize: _v1,
        scrollOffset: _v2,
        lanes: _v3
      }) {
        let _v4 = _v0.length - 1;
        if (_v0.length <= _v3) return {
          startIndex: 0,
          endIndex: _v4
        };
        let _v5 = _v16(0, _v4, _v0 => _v0[_v0].start, _v2),
          _v6 = _v5;
        if (1 === _v3) for (; _v6 < _v4 && _v0[_v6].end < _v2 + _v1;) _v6++;else if (_v3 > 1) {
          let _v0 = Array(_v3).fill(0);
          for (; _v6 < _v4 && _v0.some(_v0 => _v0 < _v2 + _v1);) {
            let _v0 = _v0[_v6];
            _v0[_v0.lane] = _v0.end, _v6++;
          }
          let _v1 = Array(_v3).fill(_v2 + _v1);
          for (; _v5 >= 0 && _v1.some(_v0 => _v0 >= _v2);) {
            let _v0 = _v0[_v5];
            _v1[_v0.lane] = _v0.start, _v5--;
          }
          _v5 = Math.max(0, _v5 - _v5 % _v3), _v6 = Math.min(_v4, _v6 + (_v3 - 1 - _v6 % _v3));
        }
        return {
          startIndex: _v5,
          endIndex: _v6
        };
      }({
        measurements: _v0,
        outerSize: _v1,
        scrollOffset: _v2,
        lanes: _v3
      }) : null, {
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
        let _v1 = this.indexFromElement(_v0),
          _v2 = this.options.getItemKey(_v1),
          _v3 = this.elementsCache.get(_v2);
        _v3 !== _v0 && (_v3 && this.observer.unobserve(_v3), this.observer.observe(_v0), this.elementsCache.set(_v2, _v0)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(_v1) && this.resizeItem(_v1, this.options.measureElement(_v0, void 0, this));
      }, this.resizeItem = (_v0, _v1) => {
        var _v2;
        let _v3 = this.measurementsCache[_v0];
        if (!_v3) return;
        let _v4 = _v1 - (this.itemSizeCache.get(_v3.key) ?? _v3.size);
        0 !== _v4 && ((null == (_v2 = this.scrollState) ? void 0 : _v2.behavior) !== "smooth" && (void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange ? this.shouldAdjustScrollPositionOnItemSizeChange(_v3, _v4, this) : _v3.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += _v4,
          behavior: void 0
        }), this.pendingMeasuredCacheIndexes.push(_v3.index), this.itemSizeCache = new Map(this.itemSizeCache.set(_v3.key, _v1)), this.notify(!1));
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
        let _v1 = this.getMeasurements();
        if (0 !== _v1.length) return _v5(_v1[_v16(0, _v1.length - 1, _v0 => _v5(_v1[_v0]).start, _v0)]);
      }, this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        {
          let _v0 = this.scrollElement.document.documentElement;
          return this.options.horizontal ? _v0.scrollWidth - this.scrollElement.innerWidth : _v0.scrollHeight - this.scrollElement.innerHeight;
        }
      }, this.getOffsetForAlignment = (_v0, _v1, _v2 = 0) => {
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
        _v0 = Math.max(0, Math.min(_v0, this.options.count - 1));
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
      }, this.getTotalSize = () => {
        var _v0;
        let _v1,
          _v2 = this.getMeasurements();
        if (0 === _v2.length) _v1 = this.options.paddingStart;else if (1 === this.options.lanes) _v1 = (null == (_v0 = _v2[_v2.length - 1]) ? void 0 : _v0.end) ?? 0;else {
          let _v0 = Array(this.options.lanes).fill(null),
            _v1 = _v2.length - 1;
          for (; _v1 >= 0 && _v0.some(_v0 => null === _v0);) {
            let _v0 = _v2[_v1];
            null === _v0[_v0.lane] && (_v0[_v0.lane] = _v0.end), _v1--;
          }
          _v1 = Math.max(..._v0.filter(_v0 => null !== _v0));
        }
        return Math.max(_v1 - this.options.scrollMargin + this.options.paddingEnd, 0);
      }, this._scrollToOffset = (_v0, {
        adjustments: _v1,
        behavior: _v2
      }) => {
        this.options.scrollToFn(_v0, {
          behavior: _v2,
          adjustments: _v1
        }, this);
      }, this.measure = () => {
        this.itemSizeCache = new Map(), this.laneAssignments = new Map(), this.notify(!1);
      }, this.setOptions(_v0);
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
      if (!_v2 && 1.01 > Math.abs(_v1 - this.getScrollOffset())) {
        if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
          this.scrollState = null;
          return;
        }
      } else this.scrollState.stableFrames = 0, _v2 && (this.scrollState.lastTargetOffset = _v1, this.scrollState.behavior = "auto", this._scrollToOffset(_v1, {
        adjustments: void 0,
        behavior: "auto"
      }));
      this.scheduleScrollReconcile();
    }
  }
  let _v16 = (_v0, _v1, _v2, _v3) => {
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
    _v17 = "u" > typeof document ? _v2.useLayoutEffect : _v2.useEffect;
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = (0, _v2.memo)(({
    listItems: _v0,
    wrapperOverrides: _v1,
    canLoadMore: _v2,
    isFetchingMore: _v3,
    loadMore: _v4,
    virtualizerOptions: _v5
  }) => {
    let _v6 = (0, _v2.useRef)(null),
      _v7 = function ({
        useFlushSync: _v0 = !0,
        ..._v1
      }) {
        let _v2 = _v2.useReducer(() => ({}), {})[1],
          _v3 = {
            ..._v1,
            onChange: (_v0, _v1) => {
              var _v2;
              _v0 && _v1 ? (0, _v3.flushSync)(_v2) : _v2(), null == (_v2 = _v1.onChange) || _v2.call(_v1, _v0, _v1);
            }
          },
          [_v4] = _v2.useState(() => new _v15(_v3));
        return _v4.setOptions(_v3), _v17(() => _v4._didMount(), []), _v17(() => _v4._willUpdate()), _v4;
      }({
        observeElementRect: _v9,
        observeElementOffset: _v12,
        scrollToFn: _v14,
        ...{
          count: _v0.length,
          getScrollElement: () => _v6.current,
          estimateSize: () => 50,
          measureElement: _v0 => _v0.getBoundingClientRect().height,
          overscan: 5,
          gap: 16,
          ..._v5
        }
      }),
      _v8 = _v7.getVirtualItems();
    return (0, _v2.useEffect)(() => {
      let _v0 = _v8.at(-1);
      _v0 && _v0.index >= _v0.length - 1 && _v2 && !_v3 && _v4 && _v4();
    }, [_v0.length, _v4, _v2, _v3, _v8]), (0, _v1.jsx)(_v20.Flex, {
      ref: _v6,
      overflowX: "hidden",
      overflowY: "auto",
      ..._v1,
      "data-testid": "virtualized-list-parent",
      children: (0, _v1.jsx)(_v19.VStack, {
        position: "relative",
        w: "100%",
        h: _v7.getTotalSize(),
        gap: 0,
        "data-testid": "virtualized-list",
        children: _v8.map(_v0 => {
          let _v1 = _v0[_v0.index];
          return _v1 ? (0, _v1.jsx)(_v18.Box, {
            ref: _v0 => _v7.measureElement(_v0),
            position: "absolute",
            top: 0,
            left: 0,
            w: "100%",
            "data-index": _v0.index,
            transform: _v0 ? `translateY(${_v0.start}px)` : void 0,
            "data-testid": `virtualized-list-item-${_v0.index}`,
            children: _v1
          }, _v0.key) : null;
        })
      })
    });
  });
  _v0.s(["VirtualizedList", 0, _v21], 0);
}