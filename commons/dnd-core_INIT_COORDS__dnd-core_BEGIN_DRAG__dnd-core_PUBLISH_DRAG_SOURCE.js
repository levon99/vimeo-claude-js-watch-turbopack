{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = "dnd-core/INIT_COORDS",
    _v8 = "dnd-core/BEGIN_DRAG",
    _v9 = "dnd-core/PUBLISH_DRAG_SOURCE",
    _v10 = "dnd-core/HOVER",
    _v11 = "dnd-core/DROP",
    _v12 = "dnd-core/END_DRAG";
  function _v13(_v0, _v1) {
    return {
      type: _v7,
      payload: {
        sourceClientOffset: _v1 || null,
        clientOffset: _v0 || null
      }
    };
  }
  function _v14(_v0) {
    return "object" == typeof _v0;
  }
  let _v15 = {
    type: _v7,
    payload: {
      clientOffset: null,
      sourceClientOffset: null
    }
  };
  function _v16(_v0, _v1) {
    return null === _v1 ? null === _v0 : Array.isArray(_v0) ? _v0.some(_v0 => _v0 === _v1) : _v0 === _v1;
  }
  class _v17 {
    receiveBackend(_v0) {
      this.backend = _v0;
    }
    getMonitor() {
      return this.monitor;
    }
    getBackend() {
      return this.backend;
    }
    getRegistry() {
      return this.monitor.registry;
    }
    getActions() {
      var _v0, _v1, _v2, _v3, _v4;
      let _v5 = this,
        {
          dispatch: _v6
        } = this.store,
        _v7 = {
          beginDrag: (_v0 = this, function (_v0 = [], _v1 = {
            publishSource: !0
          }) {
            var _v2, _v3, _v4, _v5, _v6;
            let {
                publishSource: _v7 = !0,
                clientOffset: _v8,
                getSourceClientOffset: _v9
              } = _v1,
              _v10 = _v0.getMonitor(),
              _v11 = _v0.getRegistry();
            _v0.dispatch(_v13(_v8)), _v2 = _v0, _v3 = _v10, _v4 = _v11, (0, _v6.invariant)(!_v3.isDragging(), "Cannot call beginDrag while dragging."), _v2.forEach(function (_v0) {
              (0, _v6.invariant)(_v4.getSource(_v0), "Expected sourceIds to be registered.");
            });
            let _v12 = function (_v0, _v1) {
              let _v2 = null;
              for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) if (_v1.canDragSource(_v0[_v0])) {
                _v2 = _v0[_v0];
                break;
              }
              return _v2;
            }(_v0, _v10);
            if (null == _v12) return void _v0.dispatch(_v15);
            let _v13 = null;
            if (_v8) {
              if (!_v9) throw Error("getSourceClientOffset must be defined");
              _v5 = _v9, (0, _v6.invariant)("function" == typeof _v5, "When clientOffset is provided, getSourceClientOffset must be a function."), _v13 = _v9(_v12);
            }
            _v0.dispatch(_v13(_v8, _v13));
            let _v14 = _v11.getSource(_v12).beginDrag(_v10, _v12);
            if (null != _v14) {
              return _v6 = _v14, (0, _v6.invariant)(_v14(_v6), "Item must be an object."), _v11.pinSource(_v12), {
                type: _v8,
                payload: {
                  itemType: _v11.getSourceType(_v12),
                  item: _v14,
                  sourceId: _v12,
                  clientOffset: _v8 || null,
                  sourceClientOffset: _v13 || null,
                  isSourcePublic: !!_v7
                }
              };
            }
          }),
          publishDragSource: (_v1 = this, function () {
            if (_v1.getMonitor().isDragging()) return {
              type: _v9
            };
          }),
          hover: (_v2 = this, function (_v0, {
            clientOffset: _v1
          } = {}) {
            var _v2, _v3, _v4, _v5;
            _v2 = _v0, (0, _v6.invariant)(Array.isArray(_v2), "Expected targetIds to be an array.");
            let _v6 = _v0.slice(0),
              _v7 = _v2.getMonitor(),
              _v8 = _v2.getRegistry();
            return function (_v0, _v1, _v2) {
              (0, _v6.invariant)(_v1.isDragging(), "Cannot call hover while not dragging."), (0, _v6.invariant)(!_v1.didDrop(), "Cannot call hover after drop.");
              for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                let _v0 = _v0[_v0];
                (0, _v6.invariant)(_v0.lastIndexOf(_v0) === _v0, "Expected targetIds to be unique in the passed array.");
                let _v1 = _v2.getTarget(_v0);
                (0, _v6.invariant)(_v1, "Expected targetIds to be registered.");
              }
            }(_v6, _v7, _v8), function (_v0, _v1, _v2) {
              for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) {
                let _v0 = _v0[_v0];
                _v16(_v1.getTargetType(_v0), _v2) || _v0.splice(_v0, 1);
              }
            }(_v6, _v8, _v7.getItemType()), _v3 = _v6, _v4 = _v7, _v5 = _v8, _v3.forEach(function (_v0) {
              _v5.getTarget(_v0).hover(_v4, _v0);
            }), {
              type: _v10,
              payload: {
                targetIds: _v6,
                clientOffset: _v1 || null
              }
            };
          }),
          drop: (_v3 = this, function (_v0 = {}) {
            var _v1, _v2;
            let _v3,
              _v4 = _v3.getMonitor(),
              _v5 = _v3.getRegistry();
            _v1 = _v4, (0, _v6.invariant)(_v1.isDragging(), "Cannot call drop while not dragging."), (0, _v6.invariant)(!_v1.didDrop(), "Cannot call drop twice during one drag operation."), ((_v3 = (_v2 = _v4).getTargetIds().filter(_v2.canDropOnTarget, _v2)).reverse(), _v3).forEach((_v0, _v1) => {
              var _v2, _v3, _v4, _v5, _v6;
              let _v7,
                _v8,
                _v9 = {
                  type: _v11,
                  payload: {
                    dropResult: function (_v0) {
                      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
                        var _v2 = null != arguments[_v1] ? arguments[_v1] : {},
                          _v3 = Object.keys(_v2);
                        "function" == typeof Object.getOwnPropertySymbols && (_v3 = _v3.concat(Object.getOwnPropertySymbols(_v2).filter(function (_v0) {
                          return Object.getOwnPropertyDescriptor(_v2, _v0).enumerable;
                        }))), _v3.forEach(function (_v0) {
                          var _v1;
                          _v1 = _v2[_v0], _v0 in _v0 ? Object.defineProperty(_v0, _v0, {
                            value: _v1,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                          }) : _v0[_v0] = _v1;
                        });
                      }
                      return _v0;
                    }({}, _v0, (_v2 = _v0, _v3 = _v1, _v4 = _v5, _v5 = _v4, _v6 = _v8 = (_v7 = _v4.getTarget(_v2)) ? _v7.drop(_v5, _v2) : void 0, (0, _v6.invariant)(void 0 === _v6 || _v14(_v6), "Drop result must either be an object or undefined."), void 0 === _v8 && (_v8 = 0 === _v3 ? {} : _v5.getDropResult()), _v8))
                  }
                };
              _v3.dispatch(_v9);
            });
          }),
          endDrag: (_v4 = this, function () {
            var _v0;
            let _v1 = _v4.getMonitor(),
              _v2 = _v4.getRegistry();
            _v0 = _v1, (0, _v6.invariant)(_v0.isDragging(), "Cannot call endDrag while not dragging.");
            let _v3 = _v1.getSourceId();
            return null != _v3 && (_v2.getSource(_v3, !0).endDrag(_v1, _v3), _v2.unpinSource()), {
              type: _v12
            };
          })
        };
      return Object.keys(_v7).reduce((_v0, _v1) => {
        let _v2 = _v7[_v1];
        return _v0[_v1] = (..._v0) => {
          let _v1 = _v2.apply(_v5, _v0);
          void 0 !== _v1 && _v6(_v1);
        }, _v0;
      }, {});
    }
    dispatch(_v0) {
      this.store.dispatch(_v0);
    }
    constructor(_v0, _v1) {
      this.isSetUp = !1, this.handleRefCountChange = () => {
        let _v0 = this.store.getState().refCount > 0;
        this.backend && (_v0 && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !_v0 && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
      }, this.store = _v0, this.monitor = _v1, _v0.subscribe(this.handleRefCountChange);
    }
  }
  var _v18 = _v0.i(0);
  let _v19 = {
      initialSourceClientOffset: null,
      initialClientOffset: null,
      clientOffset: null
    },
    _v20 = "dnd-core/ADD_SOURCE",
    _v21 = "dnd-core/ADD_TARGET",
    _v22 = "dnd-core/REMOVE_SOURCE",
    _v23 = "dnd-core/REMOVE_TARGET";
  function _v24(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {},
        _v3 = Object.keys(_v2);
      "function" == typeof Object.getOwnPropertySymbols && (_v3 = _v3.concat(Object.getOwnPropertySymbols(_v2).filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v2, _v0).enumerable;
      }))), _v3.forEach(function (_v0) {
        var _v1;
        _v1 = _v2[_v0], _v0 in _v0 ? Object.defineProperty(_v0, _v0, {
          value: _v1,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v0[_v0] = _v1;
      });
    }
    return _v0;
  }
  let _v25 = {
      itemType: null,
      item: null,
      sourceId: null,
      targetIds: [],
      dropResult: null,
      didDrop: !1,
      isSourcePublic: null
    },
    _v26 = [],
    _v27 = [];
  function _v28(_v0 = {}, _v1) {
    var _v2;
    return {
      dirtyHandlerIds: function (_v0 = _v26, _v1) {
        let _v2, _v3, _v4;
        switch (_v1.type) {
          case _v10:
            break;
          case _v20:
          case _v21:
          case _v23:
          case _v22:
            return _v26;
          default:
            return _v27;
        }
        let {
            targetIds: _v5 = [],
            prevTargetIds: _v6 = []
          } = _v1.payload,
          _v7 = (_v2 = new Map(), _v3 = _v0 => {
            _v2.set(_v0, _v2.has(_v0) ? _v2.get(_v0) + 1 : 1);
          }, _v5.forEach(_v3), _v6.forEach(_v3), _v4 = [], _v2.forEach((_v0, _v1) => {
            1 === _v0 && _v4.push(_v1);
          }), _v4);
        if (!(_v7.length > 0 || !function (_v0, _v1, _v2 = (_v0, _v1) => _v0 === _v1) {
          if (_v0.length !== _v1.length) return !1;
          for (let _v0 = 0; _v0 < _v0.length; ++_v0) if (!_v2(_v0[_v0], _v1[_v0])) return !1;
          return !0;
        }(_v5, _v6))) return _v26;
        let _v8 = _v6[_v6.length - 1],
          _v9 = _v5[_v5.length - 1];
        return _v8 !== _v9 && (_v8 && _v7.push(_v8), _v9 && _v7.push(_v9)), _v7;
      }(_v0.dirtyHandlerIds, {
        type: _v1.type,
        payload: function (_v0) {
          for (var _v1 = 1; _v1 < arguments.length; _v1++) {
            var _v2 = null != arguments[_v1] ? arguments[_v1] : {},
              _v3 = Object.keys(_v2);
            "function" == typeof Object.getOwnPropertySymbols && (_v3 = _v3.concat(Object.getOwnPropertySymbols(_v2).filter(function (_v0) {
              return Object.getOwnPropertyDescriptor(_v2, _v0).enumerable;
            }))), _v3.forEach(function (_v0) {
              var _v1;
              _v1 = _v2[_v0], _v0 in _v0 ? Object.defineProperty(_v0, _v0, {
                value: _v1,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : _v0[_v0] = _v1;
            });
          }
          return _v0;
        }({}, _v1.payload, {
          prevTargetIds: (_v2 = [], "dragOperation.targetIds".split(".").reduce((_v0, _v1) => _v0 && _v0[_v1] ? _v0[_v1] : _v2 || null, _v0))
        })
      }),
      dragOffset: function (_v0 = _v19, _v1) {
        let {
          payload: _v2
        } = _v1;
        switch (_v1.type) {
          case _v7:
          case _v8:
            return {
              initialSourceClientOffset: _v2.sourceClientOffset,
              initialClientOffset: _v2.clientOffset,
              clientOffset: _v2.clientOffset
            };
          case _v10:
            var _v3, _v4;
            if (_v3 = _v0.clientOffset, _v4 = _v2.clientOffset, !_v3 && !_v4 || _v3 && _v4 && _v3.x === _v4.x && _v3.y === _v4.y) return _v0;
            return function (_v0) {
              for (var _v1 = 1; _v1 < arguments.length; _v1++) {
                var _v2 = null != arguments[_v1] ? arguments[_v1] : {},
                  _v3 = Object.keys(_v2);
                "function" == typeof Object.getOwnPropertySymbols && (_v3 = _v3.concat(Object.getOwnPropertySymbols(_v2).filter(function (_v0) {
                  return Object.getOwnPropertyDescriptor(_v2, _v0).enumerable;
                }))), _v3.forEach(function (_v0) {
                  var _v1;
                  _v1 = _v2[_v0], _v0 in _v0 ? Object.defineProperty(_v0, _v0, {
                    value: _v1,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : _v0[_v0] = _v1;
                });
              }
              return _v0;
            }({}, _v0, {
              clientOffset: _v2.clientOffset
            });
          case _v12:
          case _v11:
            return _v19;
          default:
            return _v0;
        }
      }(_v0.dragOffset, _v1),
      refCount: function (_v0 = 0, _v1) {
        switch (_v1.type) {
          case _v20:
          case _v21:
            return _v0 + 1;
          case _v22:
          case _v23:
            return _v0 - 1;
          default:
            return _v0;
        }
      }(_v0.refCount, _v1),
      dragOperation: function (_v0 = _v25, _v1) {
        let {
          payload: _v2
        } = _v1;
        switch (_v1.type) {
          case _v8:
            return _v24({}, _v0, {
              itemType: _v2.itemType,
              item: _v2.item,
              sourceId: _v2.sourceId,
              isSourcePublic: _v2.isSourcePublic,
              dropResult: null,
              didDrop: !1
            });
          case _v9:
            return _v24({}, _v0, {
              isSourcePublic: !0
            });
          case _v10:
            return _v24({}, _v0, {
              targetIds: _v2.targetIds
            });
          case _v23:
            var _v3, _v4;
            if (-1 === _v0.targetIds.indexOf(_v2.targetId)) return _v0;
            return _v24({}, _v0, {
              targetIds: (_v3 = _v0.targetIds, _v4 = _v2.targetId, _v3.filter(_v0 => _v0 !== _v4))
            });
          case _v11:
            return _v24({}, _v0, {
              dropResult: _v2.dropResult,
              didDrop: !0,
              targetIds: []
            });
          case _v12:
            return _v24({}, _v0, {
              itemType: null,
              item: null,
              sourceId: null,
              dropResult: null,
              didDrop: !1,
              isSourcePublic: null,
              targetIds: []
            });
          default:
            return _v0;
        }
      }(_v0.dragOperation, _v1),
      stateId: function (_v0 = 0) {
        return _v0 + 1;
      }(_v0.stateId)
    };
  }
  function _v29(_v0, _v1) {
    return {
      x: _v0.x - _v1.x,
      y: _v0.y - _v1.y
    };
  }
  _v26.__IS_NONE__ = !0, _v27.__IS_ALL__ = !0;
  class _v30 {
    subscribeToStateChange(_v0, _v1 = {}) {
      let {
        handlerIds: _v2
      } = _v1;
      (0, _v6.invariant)("function" == typeof _v0, "listener must be a function."), (0, _v6.invariant)(void 0 === _v2 || Array.isArray(_v2), "handlerIds, when specified, must be an array of strings.");
      let _v3 = this.store.getState().stateId,
        _v4 = () => {
          let _v0 = this.store.getState(),
            _v1 = _v0.stateId;
          try {
            _v1 === _v3 || _v1 === _v3 + 1 && !function (_v0, _v1) {
              return _v0 !== _v26 && (_v0 === _v27 || void 0 === _v1 || _v1.filter(_v0 => _v0.indexOf(_v0) > -1).length > 0);
            }(_v0.dirtyHandlerIds, _v2) || _v0();
          } finally {
            _v3 = _v1;
          }
        };
      return this.store.subscribe(_v4);
    }
    subscribeToOffsetChange(_v0) {
      (0, _v6.invariant)("function" == typeof _v0, "listener must be a function.");
      let _v1 = this.store.getState().dragOffset,
        _v2 = () => {
          let _v0 = this.store.getState().dragOffset;
          _v0 !== _v1 && (_v1 = _v0, _v0());
        };
      return this.store.subscribe(_v2);
    }
    canDragSource(_v0) {
      if (!_v0) return !1;
      let _v1 = this.registry.getSource(_v0);
      return (0, _v6.invariant)(_v1, `Expected to find a valid source. sourceId=${_v0}`), !this.isDragging() && _v1.canDrag(this, _v0);
    }
    canDropOnTarget(_v0) {
      if (!_v0) return !1;
      let _v1 = this.registry.getTarget(_v0);
      return (0, _v6.invariant)(_v1, `Expected to find a valid target. targetId=${_v0}`), !(!this.isDragging() || this.didDrop()) && _v16(this.registry.getTargetType(_v0), this.getItemType()) && _v1.canDrop(this, _v0);
    }
    isDragging() {
      return !!this.getItemType();
    }
    isDraggingSource(_v0) {
      if (!_v0) return !1;
      let _v1 = this.registry.getSource(_v0, !0);
      return (0, _v6.invariant)(_v1, `Expected to find a valid source. sourceId=${_v0}`), !!this.isDragging() && !!this.isSourcePublic() && this.registry.getSourceType(_v0) === this.getItemType() && _v1.isDragging(this, _v0);
    }
    isOverTarget(_v0, _v1 = {
      shallow: !1
    }) {
      if (!_v0) return !1;
      let {
        shallow: _v2
      } = _v1;
      if (!this.isDragging()) return !1;
      let _v3 = this.registry.getTargetType(_v0),
        _v4 = this.getItemType();
      if (_v4 && !_v16(_v3, _v4)) return !1;
      let _v5 = this.getTargetIds();
      if (!_v5.length) return !1;
      let _v6 = _v5.indexOf(_v0);
      return _v2 ? _v6 === _v5.length - 1 : _v6 > -1;
    }
    getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
    getItem() {
      return this.store.getState().dragOperation.item;
    }
    getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
      return !!this.store.getState().dragOperation.isSourcePublic;
    }
    getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
      return function (_v0) {
        let {
          clientOffset: _v1,
          initialClientOffset: _v2,
          initialSourceClientOffset: _v3
        } = _v0;
        return _v1 && _v2 && _v3 ? _v29({
          x: _v1.x + _v3.x,
          y: _v1.y + _v3.y
        }, _v2) : null;
      }(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
      return function (_v0) {
        let {
          clientOffset: _v1,
          initialClientOffset: _v2
        } = _v0;
        return _v1 && _v2 ? _v29(_v1, _v2) : null;
      }(this.store.getState().dragOffset);
    }
    constructor(_v0, _v1) {
      this.store = _v0, this.registry = _v1;
    }
  }
  let _v31 = 0;
  function _v32(_v0, _v1) {
    _v1 && Array.isArray(_v0) ? _v0.forEach(_v0 => _v32(_v0, !1)) : (0, _v6.invariant)("string" == typeof _v0 || "symbol" == typeof _v0, _v1 ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
  }
  (_v1 = _v2 || (_v2 = {})).SOURCE = "SOURCE", _v1.TARGET = "TARGET";
  let _v33 = _v0.g,
    _v34 = _v33.MutationObserver || _v33.WebKitMutationObserver;
  function _v35(_v0) {
    return function () {
      let _v0 = setTimeout(_v2, 0),
        _v1 = setInterval(_v2, 50);
      function _v2() {
        clearTimeout(_v0), clearInterval(_v1), _v0();
      }
    };
  }
  let _v36 = "function" == typeof _v34 ? function (_v0) {
    let _v1 = 1,
      _v2 = new _v34(_v0),
      _v3 = document.createTextNode("");
    return _v2.observe(_v3, {
      characterData: !0
    }), function () {
      _v3.data = _v1 = -_v1;
    };
  } : _v35;
  class _v37 {
    call() {
      try {
        this.task && this.task();
      } catch (_v0) {
        this.onError(_v0);
      } finally {
        this.task = null, this.release(this);
      }
    }
    constructor(_v0, _v1) {
      this.onError = _v0, this.release = _v1, this.task = null;
    }
  }
  let _v38 = new class {
      enqueueTask(_v0) {
        let {
          queue: _v1,
          requestFlush: _v2
        } = this;
        _v1.length || (_v2(), this.flushing = !0), _v1[_v1.length] = _v0;
      }
      constructor() {
        this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 0, this.flush = () => {
          let {
            queue: _v0
          } = this;
          for (; this.index < _v0.length;) {
            let _v0 = this.index;
            if (this.index++, _v0[_v0].call(), this.index > this.capacity) {
              for (let _v0 = 0, _v1 = _v0.length - this.index; _v0 < _v1; _v0++) _v0[_v0] = _v0[_v0 + this.index];
              _v0.length -= this.index, this.index = 0;
            }
          }
          _v0.length = 0, this.index = 0, this.flushing = !1;
        }, this.registerPendingError = _v0 => {
          this.pendingErrors.push(_v0), this.requestErrorThrow();
        }, this.requestFlush = _v36(this.flush), this.requestErrorThrow = _v35(() => {
          if (this.pendingErrors.length) throw this.pendingErrors.shift();
        });
      }
    }(),
    _v39 = new class {
      create(_v0) {
        let _v1 = this.freeTasks,
          _v2 = _v1.length ? _v1.pop() : new _v37(this.onError, _v0 => _v1[_v1.length] = _v0);
        return _v2.task = _v0, _v2;
      }
      constructor(_v0) {
        this.onError = _v0, this.freeTasks = [];
      }
    }(_v38.registerPendingError);
  function _v40(_v0) {
    switch (_v0[0]) {
      case "S":
        return _v2.SOURCE;
      case "T":
        return _v2.TARGET;
      default:
        throw Error(`Cannot parse handler ID: ${_v0}`);
    }
  }
  function _v41(_v0, _v1) {
    let _v2 = _v0.entries(),
      _v3 = !1;
    do {
      let {
        done: _v0,
        value: [, _v1]
      } = _v2.next();
      if (_v1 === _v1) return !0;
      _v3 = !!_v0;
    } while (!_v3);
    return !1;
  }
  class _v42 {
    addSource(_v0, _v1) {
      _v32(_v0), (0, _v6.invariant)("function" == typeof _v1.canDrag, "Expected canDrag to be a function."), (0, _v6.invariant)("function" == typeof _v1.beginDrag, "Expected beginDrag to be a function."), (0, _v6.invariant)("function" == typeof _v1.endDrag, "Expected endDrag to be a function.");
      let _v2 = this.addHandler(_v2.SOURCE, _v0, _v1);
      return this.store.dispatch({
        type: _v20,
        payload: {
          sourceId: _v2
        }
      }), _v2;
    }
    addTarget(_v0, _v1) {
      _v32(_v0, !0), (0, _v6.invariant)("function" == typeof _v1.canDrop, "Expected canDrop to be a function."), (0, _v6.invariant)("function" == typeof _v1.hover, "Expected hover to be a function."), (0, _v6.invariant)("function" == typeof _v1.drop, "Expected beginDrag to be a function.");
      let _v2 = this.addHandler(_v2.TARGET, _v0, _v1);
      return this.store.dispatch({
        type: _v21,
        payload: {
          targetId: _v2
        }
      }), _v2;
    }
    containsHandler(_v0) {
      return _v41(this.dragSources, _v0) || _v41(this.dropTargets, _v0);
    }
    getSource(_v0, _v1 = !1) {
      return (0, _v6.invariant)(this.isSourceId(_v0), "Expected a valid source ID."), _v1 && _v0 === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(_v0);
    }
    getTarget(_v0) {
      return (0, _v6.invariant)(this.isTargetId(_v0), "Expected a valid target ID."), this.dropTargets.get(_v0);
    }
    getSourceType(_v0) {
      return (0, _v6.invariant)(this.isSourceId(_v0), "Expected a valid source ID."), this.types.get(_v0);
    }
    getTargetType(_v0) {
      return (0, _v6.invariant)(this.isTargetId(_v0), "Expected a valid target ID."), this.types.get(_v0);
    }
    isSourceId(_v0) {
      return _v40(_v0) === _v2.SOURCE;
    }
    isTargetId(_v0) {
      return _v40(_v0) === _v2.TARGET;
    }
    removeSource(_v0) {
      var _v1;
      (0, _v6.invariant)(this.getSource(_v0), "Expected an existing source."), this.store.dispatch({
        type: _v22,
        payload: {
          sourceId: _v0
        }
      }), _v1 = () => {
        this.dragSources.delete(_v0), this.types.delete(_v0);
      }, _v38.enqueueTask(_v39.create(_v1));
    }
    removeTarget(_v0) {
      (0, _v6.invariant)(this.getTarget(_v0), "Expected an existing target."), this.store.dispatch({
        type: _v23,
        payload: {
          targetId: _v0
        }
      }), this.dropTargets.delete(_v0), this.types.delete(_v0);
    }
    pinSource(_v0) {
      let _v1 = this.getSource(_v0);
      (0, _v6.invariant)(_v1, "Expected an existing source."), this.pinnedSourceId = _v0, this.pinnedSource = _v1;
    }
    unpinSource() {
      (0, _v6.invariant)(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
    addHandler(_v0, _v1, _v2) {
      let _v3 = function (_v0) {
        let _v1 = (_v31++).toString();
        switch (_v0) {
          case _v2.SOURCE:
            return `S${_v1}`;
          case _v2.TARGET:
            return `T${_v1}`;
          default:
            throw Error(`Unknown Handler Role: ${_v0}`);
        }
      }(_v0);
      return this.types.set(_v3, _v1), _v0 === _v2.SOURCE ? this.dragSources.set(_v3, _v2) : _v0 === _v2.TARGET && this.dropTargets.set(_v3, _v2), _v3;
    }
    constructor(_v0) {
      this.types = new Map(), this.dragSources = new Map(), this.dropTargets = new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = _v0;
    }
  }
  var _v43 = _v0.i(0);
  let _v44 = 0,
    _v45 = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
  var _v46 = (0, _v5.memo)(function (_v0) {
    var _v1,
      {
        children: _v2
      } = _v0;
    let [_v3, _v4] = "manager" in (_v1 = function (_v0, _v1) {
      if (null == _v0) return {};
      var _v2,
        _v3,
        _v4 = function (_v0, _v1) {
          if (null == _v0) return {};
          var _v2,
            _v3,
            _v4 = {},
            _v5 = Object.keys(_v0);
          for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.indexOf(_v2) >= 0 || (_v4[_v2] = _v0[_v2]);
          return _v4;
        }(_v0, _v1);
      if (Object.getOwnPropertySymbols) {
        var _v5 = Object.getOwnPropertySymbols(_v0);
        for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
      }
      return _v4;
    }(_v0, ["children"])) ? [{
      dragDropManager: _v1.manager
    }, !1] : [function (_v0, _v1 = function () {
      return _v0.g;
    }(), _v2, _v3) {
      return _v1[_v45] || (_v1[_v45] = {
        dragDropManager: function (_v0, _v1, _v2 = {}, _v3 = !1) {
          var _v4;
          let _v5,
            _v6 = (_v4 = _v3, _v5 = "u" > typeof window && window.__REDUX_DEVTOOLS_EXTENSION__, (0, _v18.createStore)(_v28, _v4 && _v5 && _v5({
              name: "dnd-core",
              instanceId: "dnd-core"
            }))),
            _v7 = new _v30(_v6, new _v42(_v6)),
            _v8 = new _v17(_v6, _v7),
            _v9 = _v0(_v8, _v1, _v2);
          return _v8.receiveBackend(_v9), _v8;
        }(_v0, _v1, _v2, _v3)
      }), _v1[_v45];
    }(_v1.backend, _v1.context, _v1.options, _v1.debugMode), !_v1.context];
    return (0, _v5.useEffect)(() => {
      if (_v4) {
        let _v0 = _v0.g;
        return ++_v44, () => {
          0 == --_v44 && (_v0[_v45] = null);
        };
      }
    }, []), (0, _v4.jsx)(_v43.DndContext.Provider, {
      value: _v3,
      children: _v2
    });
  });
  function _v47(_v0) {
    var _v1 = null;
    return function () {
      return null == _v1 && (_v1 = _v0()), _v1;
    };
  }
  _v0.s(["DndProvider", 0, _v46], 0);
  function _v48(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v49 = function () {
      var _v0;
      function _v1(_v0) {
        if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
        _v48(this, "entered", []), _v48(this, "isNodeInDocument", void 0), this.isNodeInDocument = _v0;
      }
      return _v0 = [{
        key: "enter",
        value: function (_v0) {
          var _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            _v6 = this,
            _v7 = this.entered.length;
          return this.entered = (_v1 = this.entered.filter(function (_v0) {
            return _v6.isNodeInDocument(_v0) && (!_v0.contains || _v0.contains(_v0));
          }), _v2 = [_v0], _v3 = new Set(), _v4 = function (_v0) {
            return _v3.add(_v0);
          }, _v1.forEach(_v4), _v2.forEach(_v4), _v5 = [], _v3.forEach(function (_v0) {
            return _v5.push(_v0);
          }), _v5), 0 === _v7 && this.entered.length > 0;
        }
      }, {
        key: "leave",
        value: function (_v0) {
          var _v1,
            _v2 = this.entered.length;
          return this.entered = (_v1 = this.entered.filter(this.isNodeInDocument), _v1.filter(function (_v0) {
            return _v0 !== _v0;
          })), _v2 > 0 && 0 === this.entered.length;
        }
      }, {
        key: "reset",
        value: function () {
          this.entered = [];
        }
      }], function (_v0, _v1) {
        for (var _v2 = 0; _v2 < _v1.length; _v2++) {
          var _v3 = _v1[_v2];
          _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
        }
      }(_v1.prototype, _v0), _v1;
    }(),
    _v50 = _v47(function () {
      return /firefox/i.test(navigator.userAgent);
    }),
    _v51 = _v47(function () {
      return !!window.safari;
    });
  function _v52(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v53 = function () {
    var _v0;
    function _v1(_v0, _v1) {
      if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
      _v52(this, "xs", void 0), _v52(this, "ys", void 0), _v52(this, "c1s", void 0), _v52(this, "c2s", void 0), _v52(this, "c3s", void 0);
      for (var _v2, _v3, _v4, _v5 = _v0.length, _v6 = [], _v7 = 0; _v7 < _v5; _v7++) _v6.push(_v7);
      _v6.sort(function (_v0, _v1) {
        return _v0[_v0] < _v0[_v1] ? -1 : 1;
      });
      for (var _v8 = [], _v9 = [], _v10 = [], _v11 = 0; _v11 < _v5 - 1; _v11++) _v2 = _v0[_v11 + 1] - _v0[_v11], _v3 = _v1[_v11 + 1] - _v1[_v11], _v9.push(_v2), _v8.push(_v3), _v10.push(_v3 / _v2);
      for (var _v12 = [_v10[0]], _v13 = 0; _v13 < _v9.length - 1; _v13++) {
        var _v14 = _v10[_v13],
          _v15 = _v10[_v13 + 1];
        if (_v14 * _v15 <= 0) _v12.push(0);else {
          _v2 = _v9[_v13];
          var _v16 = _v9[_v13 + 1],
            _v17 = _v2 + _v16;
          _v12.push(3 * _v17 / ((_v17 + _v16) / _v14 + (_v17 + _v2) / _v15));
        }
      }
      _v12.push(_v10[_v10.length - 1]);
      for (var _v18 = [], _v19 = [], _v20 = 0; _v20 < _v12.length - 1; _v20++) {
        _v4 = _v10[_v20];
        var _v21 = _v12[_v20],
          _v22 = 1 / _v9[_v20],
          _v23 = _v21 + _v12[_v20 + 1] - _v4 - _v4;
        _v18.push((_v4 - _v21 - _v23) * _v22), _v19.push(_v23 * _v22 * _v22);
      }
      this.xs = _v0, this.ys = _v1, this.c1s = _v12, this.c2s = _v18, this.c3s = _v19;
    }
    return _v0 = [{
      key: "interpolate",
      value: function (_v0) {
        var _v1,
          _v2 = this.xs,
          _v3 = this.ys,
          _v4 = this.c1s,
          _v5 = this.c2s,
          _v6 = this.c3s,
          _v7 = _v2.length - 1;
        if (_v0 === _v2[_v7]) return _v3[_v7];
        for (var _v8 = 0, _v9 = _v6.length - 1; _v8 <= _v9;) {
          var _v10 = _v2[_v1 = Math.floor(.5 * (_v8 + _v9))];
          if (_v10 < _v0) _v8 = _v1 + 1;else {
            if (!(_v10 > _v0)) return _v3[_v1];
            _v9 = _v1 - 1;
          }
        }
        var _v11 = _v0 - _v2[_v7 = Math.max(0, _v9)],
          _v12 = _v11 * _v11;
        return _v3[_v7] + _v4[_v7] * _v11 + _v5[_v7] * _v12 + _v6[_v7] * _v11 * _v12;
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v1.prototype, _v0), _v1;
  }();
  function _v54(_v0) {
    var _v1 = 1 === _v0.nodeType ? _v0 : _v0.parentElement;
    if (!_v1) return null;
    var _v2 = _v1.getBoundingClientRect(),
      _v3 = _v2.top;
    return {
      x: _v2.left,
      y: _v3
    };
  }
  function _v55(_v0) {
    return {
      x: _v0.clientX,
      y: _v0.clientY
    };
  }
  var _v56 = _v0.i(0);
  function _v57(_v0, _v1, _v2) {
    var _v3 = _v1.reduce(function (_v0, _v1) {
      return _v0 || _v0.getData(_v1);
    }, "");
    return null != _v3 ? _v3 : _v2;
  }
  function _v58(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v59 = (_v58(_v3 = {}, _v56.FILE, {
    exposeProperties: {
      files: function (_v0) {
        return Array.prototype.slice.call(_v0.files);
      },
      items: function (_v0) {
        return _v0.items;
      }
    },
    matchesTypes: ["Files"]
  }), _v58(_v3, _v56.HTML, {
    exposeProperties: {
      html: function (_v0, _v1) {
        return _v57(_v0, _v1, "");
      }
    },
    matchesTypes: ["Html", "text/html"]
  }), _v58(_v3, _v56.URL, {
    exposeProperties: {
      urls: function (_v0, _v1) {
        return _v57(_v0, _v1, "").split("\n");
      }
    },
    matchesTypes: ["Url", "text/uri-list"]
  }), _v58(_v3, _v56.TEXT, {
    exposeProperties: {
      text: function (_v0, _v1) {
        return _v57(_v0, _v1, "");
      }
    },
    matchesTypes: ["Text", "text/plain"]
  }), _v3);
  function _v60(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v61 = function () {
    var _v0;
    function _v1(_v0) {
      if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
      _v60(this, "item", void 0), _v60(this, "config", void 0), this.config = _v0, this.item = {}, this.initializeExposedProperties();
    }
    return _v0 = [{
      key: "initializeExposedProperties",
      value: function () {
        var _v0 = this;
        Object.keys(this.config.exposeProperties).forEach(function (_v0) {
          Object.defineProperty(_v0.item, _v0, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return console.warn("Browser doesn't allow reading \"".concat(_v0, '" until the drop event.')), null;
            }
          });
        });
      }
    }, {
      key: "loadDataTransfer",
      value: function (_v0) {
        var _v1 = this;
        if (_v0) {
          var _v2 = {};
          Object.keys(this.config.exposeProperties).forEach(function (_v0) {
            _v2[_v0] = {
              value: _v1.config.exposeProperties[_v0](_v0, _v1.config.matchesTypes),
              configurable: !0,
              enumerable: !0
            };
          }), Object.defineProperties(this.item, _v2);
        }
      }
    }, {
      key: "canDrag",
      value: function () {
        return !0;
      }
    }, {
      key: "beginDrag",
      value: function () {
        return this.item;
      }
    }, {
      key: "isDragging",
      value: function (_v0, _v1) {
        return _v1 === _v0.getSourceId();
      }
    }, {
      key: "endDrag",
      value: function () {}
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v1.prototype, _v0), _v1;
  }();
  function _v62(_v0) {
    if (!_v0) return null;
    var _v1 = Array.prototype.slice.call(_v0.types || []);
    return Object.keys(_v59).filter(function (_v0) {
      return _v59[_v0].matchesTypes.some(function (_v0) {
        return _v1.indexOf(_v0) > -1;
      });
    })[0] || null;
  }
  function _v63(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v64 = function () {
    var _v0;
    function _v1(_v0, _v1) {
      if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
      _v63(this, "ownerDocument", null), _v63(this, "globalContext", void 0), _v63(this, "optionsArgs", void 0), this.globalContext = _v0, this.optionsArgs = _v1;
    }
    return _v0 = [{
      key: "window",
      get: function () {
        return this.globalContext ? this.globalContext : "u" > typeof window ? window : void 0;
      }
    }, {
      key: "document",
      get: function () {
        var _v0;
        return null != (_v0 = this.globalContext) && _v0.document ? this.globalContext.document : this.window ? this.window.document : void 0;
      }
    }, {
      key: "rootElement",
      get: function () {
        var _v0;
        return (null == (_v0 = this.optionsArgs) ? void 0 : _v0.rootElement) || this.window;
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v1.prototype, _v0), _v1;
  }();
  function _v65(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v66(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v65(Object(_v2), !0).forEach(function (_v0) {
        _v67(_v0, _v0, _v2[_v0]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v65(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
  function _v67(_v0, _v1, _v2) {
    return _v1 in _v0 ? Object.defineProperty(_v0, _v1, {
      value: _v2,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : _v0[_v1] = _v2, _v0;
  }
  var _v68 = function () {
    var _v0;
    function _v1(_v0, _v1, _v2) {
      var _v3 = this;
      if (!(this instanceof _v1)) throw TypeError("Cannot call a class as a function");
      _v67(this, "options", void 0), _v67(this, "actions", void 0), _v67(this, "monitor", void 0), _v67(this, "registry", void 0), _v67(this, "enterLeaveCounter", void 0), _v67(this, "sourcePreviewNodes", new Map()), _v67(this, "sourcePreviewNodeOptions", new Map()), _v67(this, "sourceNodes", new Map()), _v67(this, "sourceNodeOptions", new Map()), _v67(this, "dragStartSourceIds", null), _v67(this, "dropTargetIds", []), _v67(this, "dragEnterTargetIds", []), _v67(this, "currentNativeSource", null), _v67(this, "currentNativeHandle", null), _v67(this, "currentDragSourceNode", null), _v67(this, "altKeyPressed", !1), _v67(this, "mouseMoveTimeoutTimer", null), _v67(this, "asyncEndDragFrameId", null), _v67(this, "dragOverTargetIds", null), _v67(this, "getSourceClientOffset", function (_v0) {
        var _v1 = _v3.sourceNodes.get(_v0);
        return _v1 && _v54(_v1) || null;
      }), _v67(this, "endDragNativeItem", function () {
        _v3.isDraggingNativeItem() && (_v3.actions.endDrag(), _v3.currentNativeHandle && _v3.registry.removeSource(_v3.currentNativeHandle), _v3.currentNativeHandle = null, _v3.currentNativeSource = null);
      }), _v67(this, "isNodeInDocument", function (_v0) {
        return !!(_v0 && _v3.document && _v3.document.body && _v3.document.body.contains(_v0));
      }), _v67(this, "endDragIfSourceWasRemovedFromDOM", function () {
        var _v0 = _v3.currentDragSourceNode;
        !(null == _v0 || _v3.isNodeInDocument(_v0)) && _v3.clearCurrentDragSourceNode() && _v3.monitor.isDragging() && _v3.actions.endDrag();
      }), _v67(this, "handleTopDragStartCapture", function () {
        _v3.clearCurrentDragSourceNode(), _v3.dragStartSourceIds = [];
      }), _v67(this, "handleTopDragStart", function (_v0) {
        if (!_v0.defaultPrevented) {
          var _v1 = _v3.dragStartSourceIds;
          _v3.dragStartSourceIds = null;
          var _v2 = _v55(_v0);
          _v3.monitor.isDragging() && _v3.actions.endDrag(), _v3.actions.beginDrag(_v1 || [], {
            publishSource: !1,
            getSourceClientOffset: _v3.getSourceClientOffset,
            clientOffset: _v2
          });
          var _v3 = _v0.dataTransfer,
            _v4 = _v62(_v3);
          if (_v3.monitor.isDragging()) {
            if (_v3 && "function" == typeof _v3.setDragImage) {
              var _v5 = _v3.monitor.getSourceId(),
                _v6 = _v3.sourceNodes.get(_v5),
                _v7 = _v3.sourcePreviewNodes.get(_v5) || _v6;
              if (_v7) {
                var _v8,
                  _v9,
                  _v10,
                  _v11,
                  _v12,
                  _v13,
                  _v14,
                  _v15,
                  _v16,
                  _v17,
                  _v18,
                  _v19,
                  _v20,
                  _v21,
                  _v22,
                  _v23,
                  _v24,
                  _v25,
                  _v26 = _v3.getCurrentSourcePreviewNodeOptions(),
                  _v27 = _v26.anchorX,
                  _v28 = _v26.anchorY,
                  _v29 = _v26.offsetX,
                  _v30 = _v26.offsetY,
                  _v31 = (_v8 = {
                    anchorX: _v27,
                    anchorY: _v28
                  }, _v9 = {
                    offsetX: _v29,
                    offsetY: _v30
                  }, _v12 = _v54((_v11 = "IMG" === _v7.nodeName && (_v50() || !(null != (_v10 = document.documentElement) && _v10.contains(_v7)))) ? _v6 : _v7), _v13 = {
                    x: _v2.x - _v12.x,
                    y: _v2.y - _v12.y
                  }, _v14 = _v6.offsetWidth, _v15 = _v6.offsetHeight, _v16 = _v8.anchorX, _v17 = _v8.anchorY, _v21 = (_v18 = _v11 ? _v7.width : _v14, _v19 = _v11 ? _v7.height : _v15, _v51() && _v11 && (_v19 /= window.devicePixelRatio, _v18 /= window.devicePixelRatio), _v20 = {
                    dragPreviewWidth: _v18,
                    dragPreviewHeight: _v19
                  }).dragPreviewWidth, _v22 = _v20.dragPreviewHeight, _v23 = _v9.offsetX, _v24 = _v9.offsetY, {
                    x: 0 === _v23 || _v23 ? _v23 : new _v53([0, .5, 1], [_v13.x, _v13.x / _v14 * _v21, _v13.x + _v21 - _v14]).interpolate(_v16),
                    y: 0 === _v24 || _v24 ? _v24 : (_v25 = new _v53([0, .5, 1], [_v13.y, _v13.y / _v15 * _v22, _v13.y + _v22 - _v15]).interpolate(_v17), _v51() && _v11 && (_v25 += (window.devicePixelRatio - 1) * _v22), _v25)
                  });
                _v3.setDragImage(_v7, _v31.x, _v31.y);
              }
            }
            try {
              null == _v3 || _v3.setData("application/json", {});
            } catch (_v0) {}
            _v3.setCurrentDragSourceNode(_v0.target), _v3.getCurrentSourcePreviewNodeOptions().captureDraggingState ? _v3.actions.publishDragSource() : setTimeout(function () {
              return _v3.actions.publishDragSource();
            }, 0);
          } else if (_v4) _v3.beginDragNativeItem(_v4);else {
            if (_v3 && !_v3.types && (_v0.target && !_v0.target.hasAttribute || !_v0.target.hasAttribute("draggable"))) return;
            _v0.preventDefault();
          }
        }
      }), _v67(this, "handleTopDragEndCapture", function () {
        _v3.clearCurrentDragSourceNode() && _v3.monitor.isDragging() && _v3.actions.endDrag();
      }), _v67(this, "handleTopDragEnterCapture", function (_v0) {
        if (_v3.dragEnterTargetIds = [], !(!_v3.enterLeaveCounter.enter(_v0.target) || _v3.monitor.isDragging())) {
          var _v1 = _v0.dataTransfer,
            _v2 = _v62(_v1);
          _v2 && _v3.beginDragNativeItem(_v2, _v1);
        }
      }), _v67(this, "handleTopDragEnter", function (_v0) {
        var _v1 = _v3.dragEnterTargetIds;
        _v3.dragEnterTargetIds = [], _v3.monitor.isDragging() && (_v3.altKeyPressed = _v0.altKey, _v1.length > 0 && _v3.actions.hover(_v1, {
          clientOffset: _v55(_v0)
        }), _v1.some(function (_v0) {
          return _v3.monitor.canDropOnTarget(_v0);
        }) && (_v0.preventDefault(), _v0.dataTransfer && (_v0.dataTransfer.dropEffect = _v3.getCurrentDropEffect())));
      }), _v67(this, "handleTopDragOverCapture", function () {
        _v3.dragOverTargetIds = [];
      }), _v67(this, "handleTopDragOver", function (_v0) {
        var _v1 = _v3.dragOverTargetIds;
        if (_v3.dragOverTargetIds = [], !_v3.monitor.isDragging()) {
          _v0.preventDefault(), _v0.dataTransfer && (_v0.dataTransfer.dropEffect = "none");
          return;
        }
        _v3.altKeyPressed = _v0.altKey, _v3.actions.hover(_v1 || [], {
          clientOffset: _v55(_v0)
        }), (_v1 || []).some(function (_v0) {
          return _v3.monitor.canDropOnTarget(_v0);
        }) ? (_v0.preventDefault(), _v0.dataTransfer && (_v0.dataTransfer.dropEffect = _v3.getCurrentDropEffect())) : _v3.isDraggingNativeItem() ? _v0.preventDefault() : (_v0.preventDefault(), _v0.dataTransfer && (_v0.dataTransfer.dropEffect = "none"));
      }), _v67(this, "handleTopDragLeaveCapture", function (_v0) {
        _v3.isDraggingNativeItem() && _v0.preventDefault(), _v3.enterLeaveCounter.leave(_v0.target) && _v3.isDraggingNativeItem() && setTimeout(function () {
          return _v3.endDragNativeItem();
        }, 0);
      }), _v67(this, "handleTopDropCapture", function (_v0) {
        if (_v3.dropTargetIds = [], _v3.isDraggingNativeItem()) {
          var _v1;
          _v0.preventDefault(), null == (_v1 = _v3.currentNativeSource) || _v1.loadDataTransfer(_v0.dataTransfer);
        } else _v62(_v0.dataTransfer) && _v0.preventDefault();
        _v3.enterLeaveCounter.reset();
      }), _v67(this, "handleTopDrop", function (_v0) {
        var _v1 = _v3.dropTargetIds;
        _v3.dropTargetIds = [], _v3.actions.hover(_v1, {
          clientOffset: _v55(_v0)
        }), _v3.actions.drop({
          dropEffect: _v3.getCurrentDropEffect()
        }), _v3.isDraggingNativeItem() ? _v3.endDragNativeItem() : _v3.monitor.isDragging() && _v3.actions.endDrag();
      }), _v67(this, "handleSelectStart", function (_v0) {
        var _v1 = _v0.target;
        "function" != typeof _v1.dragDrop || "INPUT" === _v1.tagName || "SELECT" === _v1.tagName || "TEXTAREA" === _v1.tagName || _v1.isContentEditable || (_v0.preventDefault(), _v1.dragDrop());
      }), this.options = new _v64(_v1, _v2), this.actions = _v0.getActions(), this.monitor = _v0.getMonitor(), this.registry = _v0.getRegistry(), this.enterLeaveCounter = new _v49(this.isNodeInDocument);
    }
    return _v0 = [{
      key: "profile",
      value: function () {
        var _v0, _v1;
        return {
          sourcePreviewNodes: this.sourcePreviewNodes.size,
          sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
          sourceNodeOptions: this.sourceNodeOptions.size,
          sourceNodes: this.sourceNodes.size,
          dragStartSourceIds: (null == (_v0 = this.dragStartSourceIds) ? void 0 : _v0.length) || 0,
          dropTargetIds: this.dropTargetIds.length,
          dragEnterTargetIds: this.dragEnterTargetIds.length,
          dragOverTargetIds: (null == (_v1 = this.dragOverTargetIds) ? void 0 : _v1.length) || 0
        };
      }
    }, {
      key: "window",
      get: function () {
        return this.options.window;
      }
    }, {
      key: "document",
      get: function () {
        return this.options.document;
      }
    }, {
      key: "rootElement",
      get: function () {
        return this.options.rootElement;
      }
    }, {
      key: "setup",
      value: function () {
        var _v0 = this.rootElement;
        if (void 0 !== _v0) {
          if (_v0.__isReactDndBackendSetUp) throw Error("Cannot have two HTML5 backends at the same time.");
          _v0.__isReactDndBackendSetUp = !0, this.addEventListeners(_v0);
        }
      }
    }, {
      key: "teardown",
      value: function () {
        var _v0,
          _v1 = this.rootElement;
        void 0 !== _v1 && (_v1.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null == (_v0 = this.window) || _v0.cancelAnimationFrame(this.asyncEndDragFrameId)));
      }
    }, {
      key: "connectDragPreview",
      value: function (_v0, _v1, _v2) {
        var _v3 = this;
        return this.sourcePreviewNodeOptions.set(_v0, _v2), this.sourcePreviewNodes.set(_v0, _v1), function () {
          _v3.sourcePreviewNodes.delete(_v0), _v3.sourcePreviewNodeOptions.delete(_v0);
        };
      }
    }, {
      key: "connectDragSource",
      value: function (_v0, _v1, _v2) {
        var _v3 = this;
        this.sourceNodes.set(_v0, _v1), this.sourceNodeOptions.set(_v0, _v2);
        var _v4 = function (_v0) {
            return _v3.handleDragStart(_v0, _v0);
          },
          _v5 = function (_v0) {
            return _v3.handleSelectStart(_v0);
          };
        return _v1.setAttribute("draggable", "true"), _v1.addEventListener("dragstart", _v4), _v1.addEventListener("selectstart", _v5), function () {
          _v3.sourceNodes.delete(_v0), _v3.sourceNodeOptions.delete(_v0), _v1.removeEventListener("dragstart", _v4), _v1.removeEventListener("selectstart", _v5), _v1.setAttribute("draggable", "false");
        };
      }
    }, {
      key: "connectDropTarget",
      value: function (_v0, _v1) {
        var _v2 = this,
          _v3 = function (_v0) {
            return _v2.handleDragEnter(_v0, _v0);
          },
          _v4 = function (_v0) {
            return _v2.handleDragOver(_v0, _v0);
          },
          _v5 = function (_v0) {
            return _v2.handleDrop(_v0, _v0);
          };
        return _v1.addEventListener("dragenter", _v3), _v1.addEventListener("dragover", _v4), _v1.addEventListener("drop", _v5), function () {
          _v1.removeEventListener("dragenter", _v3), _v1.removeEventListener("dragover", _v4), _v1.removeEventListener("drop", _v5);
        };
      }
    }, {
      key: "addEventListeners",
      value: function (_v0) {
        _v0.addEventListener && (_v0.addEventListener("dragstart", this.handleTopDragStart), _v0.addEventListener("dragstart", this.handleTopDragStartCapture, !0), _v0.addEventListener("dragend", this.handleTopDragEndCapture, !0), _v0.addEventListener("dragenter", this.handleTopDragEnter), _v0.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), _v0.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), _v0.addEventListener("dragover", this.handleTopDragOver), _v0.addEventListener("dragover", this.handleTopDragOverCapture, !0), _v0.addEventListener("drop", this.handleTopDrop), _v0.addEventListener("drop", this.handleTopDropCapture, !0));
      }
    }, {
      key: "removeEventListeners",
      value: function (_v0) {
        _v0.removeEventListener && (_v0.removeEventListener("dragstart", this.handleTopDragStart), _v0.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), _v0.removeEventListener("dragend", this.handleTopDragEndCapture, !0), _v0.removeEventListener("dragenter", this.handleTopDragEnter), _v0.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), _v0.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), _v0.removeEventListener("dragover", this.handleTopDragOver), _v0.removeEventListener("dragover", this.handleTopDragOverCapture, !0), _v0.removeEventListener("drop", this.handleTopDrop), _v0.removeEventListener("drop", this.handleTopDropCapture, !0));
      }
    }, {
      key: "getCurrentSourceNodeOptions",
      value: function () {
        var _v0 = this.monitor.getSourceId(),
          _v1 = this.sourceNodeOptions.get(_v0);
        return _v66({
          dropEffect: this.altKeyPressed ? "copy" : "move"
        }, _v1 || {});
      }
    }, {
      key: "getCurrentDropEffect",
      value: function () {
        return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
      }
    }, {
      key: "getCurrentSourcePreviewNodeOptions",
      value: function () {
        var _v0 = this.monitor.getSourceId();
        return _v66({
          anchorX: .5,
          anchorY: .5,
          captureDraggingState: !1
        }, this.sourcePreviewNodeOptions.get(_v0) || {});
      }
    }, {
      key: "isDraggingNativeItem",
      value: function () {
        var _v0 = this.monitor.getItemType();
        return Object.keys(_v56).some(function (_v0) {
          return _v56[_v0] === _v0;
        });
      }
    }, {
      key: "beginDragNativeItem",
      value: function (_v0, _v1) {
        var _v2;
        this.clearCurrentDragSourceNode(), this.currentNativeSource = ((_v2 = new _v61(_v59[_v0])).loadDataTransfer(_v1), _v2), this.currentNativeHandle = this.registry.addSource(_v0, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
      }
    }, {
      key: "setCurrentDragSourceNode",
      value: function (_v0) {
        var _v1 = this;
        this.clearCurrentDragSourceNode(), this.currentDragSourceNode = _v0, this.mouseMoveTimeoutTimer = setTimeout(function () {
          var _v0;
          return null == (_v0 = _v1.rootElement) ? void 0 : _v0.addEventListener("mousemove", _v1.endDragIfSourceWasRemovedFromDOM, !0);
        }, 0);
      }
    }, {
      key: "clearCurrentDragSourceNode",
      value: function () {
        if (this.currentDragSourceNode) {
          if (this.currentDragSourceNode = null, this.rootElement) {
            var _v0;
            null == (_v0 = this.window) || _v0.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
          }
          return this.mouseMoveTimeoutTimer = null, !0;
        }
        return !1;
      }
    }, {
      key: "handleDragStart",
      value: function (_v0, _v1) {
        _v0.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(_v1));
      }
    }, {
      key: "handleDragEnter",
      value: function (_v0, _v1) {
        this.dragEnterTargetIds.unshift(_v1);
      }
    }, {
      key: "handleDragOver",
      value: function (_v0, _v1) {
        null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(_v1);
      }
    }, {
      key: "handleDrop",
      value: function (_v0, _v1) {
        this.dropTargetIds.unshift(_v1);
      }
    }], function (_v0, _v1) {
      for (var _v2 = 0; _v2 < _v1.length; _v2++) {
        var _v3 = _v1[_v2];
        _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
      }
    }(_v1.prototype, _v0), _v1;
  }();
  _v0.s(["HTML5Backend", 0, function (_v0, _v1, _v2) {
    return new _v68(_v0, _v1, _v2);
  }], 0);
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = (0, _v0.i(0).create)(_v0 => ({
    config: {},
    userId: 0,
    setCredentials: _v0 => _v0({
      config: _v0
    }),
    setUserId: _v0 => _v0({
      userId: _v0
    })
  }));
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = ({
    title: _v0,
    subtitle: _v1,
    subtitleColor: _v2,
    isFolder: _v3,
    rightControl: _v4,
    rightControlHover: _v5
  }) => {
    let [_v6, _v7] = (0, _v5.useState)(!1),
      _v8 = !!_v5;
    return (0, _v4.jsx)(_v69.Box, {
      padding: "xs",
      marginBottom: "sm",
      ...(_v8 ? {
        onMouseEnter: () => _v7(!0),
        onMouseLeave: () => _v7(!1)
      } : {}),
      children: (0, _v4.jsxs)(_v83.Grid, {
        gridTemplateColumns: "72px 1fr auto",
        gap: "sm",
        alignItems: "center",
        children: [(0, _v4.jsx)(_v69.Box, {
          width: 72,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "button-secondary-default",
          borderRadius: "sm",
          children: _v3 ? (0, _v4.jsx)(_v85.FolderFilled, {
            boxSize: "xs",
            color: "text-secondary"
          }) : (0, _v4.jsx)(_v86.VideosStackFilled, {
            boxSize: "xs",
            color: "text-secondary"
          })
        }), (0, _v4.jsxs)(_v69.Box, {
          marginLeft: "xs",
          overflow: "hidden",
          width: "100%",
          children: [(0, _v4.jsx)(_v84.Text, {
            variant: "heading-xs",
            fontWeight: "bold",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            children: _v0
          }), (0, _v4.jsx)(_v84.Text, {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            variant: "body-sm",
            color: _v2,
            children: _v1
          })]
        }), _v8 && _v6 ? _v5 : _v4]
      })
    });
  };
  var _v88 = _v0.i(0);
  let _v89 = (0, _v88.translate)("CSV");
  (0, _v88.translate)({
    singular: "Download CSV Report",
    dictionary: {
      es: {
        singular: "Descargar informe CSV"
      },
      "de-DE": {
        singular: "CSV-Bericht herunterladen."
      },
      "fr-FR": {
        singular: "Télécharger le rapport CSV"
      },
      "ja-JP": {
        singular: "CSVレポートをダウンロード"
      },
      "ko-KR": {
        singular: "CSV 보고서 다운로드"
      },
      "pt-BR": {
        singular: "Baixar relatório CSV"
      },
      "zh-CN": {
        singular: "下载 CSV 报告"
      }
    }
  });
  let _v90 = (0, _v88.translate)({
      singular: "Translations complete",
      dictionary: {
        es: {
          singular: "Traducciones completadas"
        },
        "de-DE": {
          singular: "Übersetzungen fertiggestellt"
        },
        "fr-FR": {
          singular: "Traductions terminées"
        },
        "ja-JP": {
          singular: "翻訳が完了しました"
        },
        "ko-KR": {
          singular: "번역이 완료되었습니다."
        },
        "pt-BR": {
          singular: "Traduções concluídas"
        },
        "zh-CN": {
          singular: "翻译已完成"
        }
      }
    }),
    _v91 = (0, _v88.translate)({
      singular: "Errors occurred, open for details",
      dictionary: {
        es: {
          singular: "Se produjeron errores; abra para obtener más detalles."
        },
        "de-DE": {
          singular: "Es sind Fehler aufgetreten, Details anzeigen"
        },
        "fr-FR": {
          singular: "Des erreurs se sont produites ; ouvrez pour en savoir plus"
        },
        "ja-JP": {
          singular: "エラーが発生しました。詳細を見る"
        },
        "ko-KR": {
          singular: "오류가 발생했습니다. 자세한 내용을 확인하세요."
        },
        "pt-BR": {
          singular: "Ocorreram erros. Abra para mais detalhes"
        },
        "zh-CN": {
          singular: "发生错误，打开以查看详情"
        }
      }
    }),
    _v92 = (0, _v88.translate)({
      singular: "Done",
      dictionary: {
        es: {
          singular: "Hecho"
        },
        "de-DE": {
          singular: "Fertig"
        },
        "fr-FR": {
          singular: "Terminé"
        },
        "ja-JP": {
          singular: "完了"
        },
        "ko-KR": {
          singular: "완료"
        },
        "pt-BR": {
          singular: "Feito"
        },
        "zh-CN": {
          singular: "已存档"
        }
      }
    }),
    _v93 = (0, _v88.translate)({
      singular: "Done with errors",
      dictionary: {
        es: {
          singular: "Finalizado con errores"
        },
        "de-DE": {
          singular: "Mit Fehlern abgeschlossen"
        },
        "fr-FR": {
          singular: "Terminé avec des erreurs"
        },
        "ja-JP": {
          singular: "エラーを伴って完了"
        },
        "ko-KR": {
          singular: "오류가 있는 상태로 완료되었습니다."
        },
        "pt-BR": {
          singular: "Concluído com erros"
        },
        "zh-CN": {
          singular: "已完成，但有错误"
        }
      }
    }),
    _v94 = (0, _v88.translate)({
      singular: "Translation starting...",
      dictionary: {
        es: {
          singular: "La traducción está comenzando..."
        },
        "de-DE": {
          singular: "Übersetzung wird gestartet ..."
        },
        "fr-FR": {
          singular: "Démarrage de la traduction..."
        },
        "ja-JP": {
          singular: "翻訳を開始しています..."
        },
        "ko-KR": {
          singular: "번역 시작 중..."
        },
        "pt-BR": {
          singular: "Tradução iniciando..."
        },
        "zh-CN": {
          singular: "翻译即将开始…"
        }
      }
    }),
    _v95 = (0, _v88.translate)({
      singular: "Toggle AI Activity Center",
      dictionary: {
        es: {
          singular: "Habilitar/Deshabilitar el Centro de actividades de IA"
        },
        "de-DE": {
          singular: "AI-Aktivitätszentrum umschalten"
        },
        "fr-FR": {
          singular: "Activer/Désactiver le Centre d'activités d'IA"
        },
        "ja-JP": {
          singular: "AIアクティビティセンターを切り替える"
        },
        "ko-KR": {
          singular: "AI 활동 센터 토글"
        },
        "pt-BR": {
          singular: "Ativar/Desativar Centro de Atividades de IA"
        },
        "zh-CN": {
          singular: "切换 AI 活动中心"
        }
      }
    }),
    _v96 = (0, _v88.translate)({
      singular: "Close AI Activity Center",
      dictionary: {
        es: {
          singular: "Cerrar el Centro de actividades de IA"
        },
        "de-DE": {
          singular: "AI-Aktivitätszentrum schließen"
        },
        "fr-FR": {
          singular: "Fermer le centre d'activités d'IA"
        },
        "ja-JP": {
          singular: "AIアクティビティセンターを閉じる"
        },
        "ko-KR": {
          singular: "AI 활동 센터 닫기"
        },
        "pt-BR": {
          singular: "Fechar o Centro de Atividades de IA"
        },
        "zh-CN": {
          singular: "关闭 AI 活动中心"
        }
      }
    }),
    _v97 = (0, _v88.translate)({
      singular: "Canceling, finalizing in-progress translations",
      dictionary: {
        es: {
          singular: "Cancelación y finalización de traducciones en curso"
        },
        "de-DE": {
          singular: "Abbrechen, Abschließen laufender Übersetzungen"
        },
        "fr-FR": {
          singular: "Annulation, finalisation des traductions en cours"
        },
        "ja-JP": {
          singular: "進行中の翻訳のキャンセル、最終調整"
        },
        "ko-KR": {
          singular: "진행 중인 번역을 취소하고 마무리하는 중입니다."
        },
        "pt-BR": {
          singular: "Cancelando e finalizando traduções em andamento"
        },
        "zh-CN": {
          singular: "取消、完成正在进行的翻译"
        }
      }
    });
  function _v98(_v0) {
    let _v1 = !!_v0.folderName,
      _v2 = Number(_v0.stats?.totalVideos || 0),
      _v3 = "";
    if (_v1) {
      let _v0;
      _v0 = _v0.folderName || "", _v3 = (0, _v88.translate)({
        singular: "{NAME}",
        replacements: {
          NAME: _v0
        }
      });
    } else _v2 > 0 && (_v3 = (0, _v88.translate)({
      count: _v2,
      singular: "{totalVideos} video",
      plural: "{totalVideos} videos",
      replacements: {
        totalVideos: _v2.toLocaleString()
      },
      dictionary: {
        "de-DE": {
          singular: "{totalVideos} Video",
          plural: "{totalVideos} Videos"
        },
        "fr-FR": {
          singular: "{totalVideos} vidéo",
          plural: "{totalVideos} vidéos"
        },
        "ja-JP": {
          singular: "{totalVideos} 件の動画",
          plural: "{totalVideos}件の動画"
        },
        "ko-KR": {
          singular: "동영상 {totalVideos}개",
          plural: "동영상 {totalVideos}개"
        },
        "pt-BR": {
          singular: "{totalVideos} vídeo",
          plural: "{totalVideos} vídeos"
        },
        "zh-CN": {
          singular: "{totalVideos} 个视频",
          plural: "{totalVideos} 个视频"
        }
      }
    }));
    return {
      isFolder: _v1,
      totalVideos: _v2,
      title: _v3
    };
  }
  function _v99({
    inProgressJobs: _v0,
    doneJobs: _v1 = []
  }) {
    let {
      openCancelJobModal: _v2
    } = (0, _v82.useBulkAiModal)();
    return (0, _v4.jsxs)(_v69.Box, {
      padding: "md",
      flex: 1,
      overflow: "auto",
      children: [_v0.map(_v0 => {
        let {
            isFolder: _v1,
            totalVideos: _v2,
            title: _v3
          } = _v98(_v0),
          {
            subtitle: _v4,
            subtitleColor: _v5,
            progress: _v6
          } = function (_v0, _v1) {
            let _v2 = Number(_v0.stats?.done || 0) + Number(_v0.stats?.failed || 0) + Number(_v0.stats?.invalid || 0),
              _v3 = "PAUSING" === _v0.status,
              _v4 = Number(_v0.total || 0),
              _v5 = _v4 > 0 ? Math.round(_v2 / _v4 * 100) : 0,
              _v6 = "";
            if (_v3) _v6 = _v97;else if (_v1 > 0) _v6 = (0, _v88.translate)({
              singular: "{PROCESSED} of {TOTAL} videos processed",
              replacements: {
                PROCESSED: _v2.toLocaleString(),
                TOTAL: _v1.toLocaleString()
              },
              dictionary: {
                es: {
                  singular: "{PROCESSED} de {TOTAL} videos procesados"
                },
                "de-DE": {
                  singular: "{PROCESSED} von {TOTAL} Videos verarbeitet"
                },
                "fr-FR": {
                  singular: "{PROCESSED} vidéos traitées sur {TOTAL}"
                },
                "ja-JP": {
                  singular: "{TOTAL}件中{PROCESSED}件の動画が処理されました"
                },
                "ko-KR": {
                  singular: "총 {TOTAL}개 중 {PROCESSED}개의 동영상이 처리되었습니다."
                },
                "pt-BR": {
                  singular: "{PROCESSED} de {TOTAL} vídeos processados"
                },
                "zh-CN": {
                  singular: "已处理 {PROCESSED} 个视频，共 {TOTAL} 个"
                }
              }
            });else _v6 = _v94;
            return {
              subtitle: _v6,
              subtitleColor: "text-secondary",
              progress: _v5
            };
          }(_v0, _v2),
          _v7 = "PAUSING" === _v0.status,
          _v8 = (0, _v4.jsx)(_v75.CircularProgress, {
            value: _v6,
            size: "sm"
          }),
          _v9 = _v7 ? null : (0, _v4.jsx)(_v78.Tooltip, {
            label: "Cancel",
            placement: "top",
            children: (0, _v4.jsx)(_v77.IconButton, {
              "aria-label": "cancel",
              size: "sm",
              variant: "tertiary",
              onClick: () => _v2(_v0),
              icon: (0, _v4.jsx)(_v80.CloseXCircle, {})
            })
          });
        return (0, _v4.jsx)(_v87, {
          title: _v3,
          subtitle: _v4,
          subtitleColor: _v5,
          isFolder: _v1,
          rightControl: _v8,
          rightControlHover: _v9
        }, _v0.uri);
      }), _v1.map(_v0 => {
        let _v1,
          {
            isFolder: _v2,
            title: _v3
          } = _v98(_v0),
          {
            subtitle: _v4,
            subtitleColor: _v5
          } = {
            subtitle: (_v1 = Number(_v0.stats?.failed || 0) > 0) ? _v93 : _v92,
            subtitleColor: _v1 ? "red.400" : "text-secondary"
          },
          _v6 = _v0.csvUrl ? (0, _v4.jsx)(_v76.Link, {
            href: _v0.csvUrl,
            children: (0, _v4.jsx)(_v74.Button, {
              size: "sm",
              leftIcon: (0, _v4.jsx)(_v79.DownloadImport, {}),
              variant: "secondary",
              fontSize: "heading-xs",
              "aria-label": "CSV",
              children: _v89
            })
          }) : (0, _v4.jsx)(_v78.Tooltip, {
            label: "Unable to create a CSV output",
            placement: "top",
            children: (0, _v4.jsx)("span", {
              children: (0, _v4.jsx)(_v81.LinkBroken, {
                color: "red.400"
              })
            })
          });
        return (0, _v4.jsx)(_v87, {
          title: _v3,
          subtitle: _v4,
          subtitleColor: _v5,
          isFolder: _v2,
          rightControl: _v6
        }, _v0.uri);
      })]
    });
  }
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0);
  function _v107({
    inProgressJobs: _v0,
    doneJobs: _v1 = [],
    isExpanded: _v2,
    onToggleExpand: _v3,
    onClose: _v4
  }) {
    let _v5 = (0, _v5.useMemo)(() => {
      let _v0 = [..._v0, ..._v1];
      if (0 === _v0.length) return null;
      let _v1 = _v0.reduce((_v0, _v1) => _v0 + (_v1.total || 0), 0),
        {
          totalTasks: _v2,
          completedTasks: _v3
        } = _v0.reduce((_v0, _v1) => (_v0.totalTasks += _v1.total || 0, _v0.completedTasks += (_v1.stats?.done || 0) + (_v1.stats?.failed || 0) + (_v1.stats?.invalid || 0), _v0), {
          totalTasks: 0,
          completedTasks: 0
        }),
        _v4 = _v1.reduce((_v0, _v1) => _v0 + (_v1.stats?.failed || 0), 0) > 0,
        _v5 = _v2 > 0 ? Math.round(_v3 / _v2 * 100) : 0,
        _v6 = _v0.length > 0,
        _v7 = "",
        _v8 = null,
        _v9 = (0, _v4.jsx)(_v102.Checkmark, {
          justifySelf: "center"
        }),
        _v10 = {
          borderRadius: "0px",
          ...(_v4 && {
            "& > div": {
              backgroundColor: "red.400"
            }
          })
        },
        _v11 = "text-secondary";
      if (_v6) {
        if (0 === _v1) _v7 = _v94;else _v7 = (0, _v88.translate)({
          count: _v1,
          singular: "Translating {COUNT} video",
          plural: "Translating {COUNT} videos",
          replacements: {
            COUNT: _v1.toLocaleString()
          },
          dictionary: {
            es: {
              singular: "Traduciendo {COUNT} video",
              plural: "Traduciendo {COUNT} videos"
            },
            "de-DE": {
              singular: "{COUNT} Video wird übersetzt",
              plural: "{COUNT} Videos werden übersetzt"
            },
            "fr-FR": {
              singular: "{COUNT} vidéo en cours de traduction",
              plural: "{COUNT} vidéos en cours de traduction"
            },
            "ja-JP": {
              singular: "{COUNT}件の動画を翻訳中",
              plural: "{COUNT} 件の動画を翻訳中"
            },
            "ko-KR": {
              singular: "동영상 {COUNT}개 번역 중",
              plural: "동영상 {COUNT}개 번역 중"
            },
            "pt-BR": {
              singular: "Traduzindo {COUNT} vídeo",
              plural: "Traduzindo {COUNT} vídeos"
            },
            "zh-CN": {
              singular: "正在翻译 {COUNT} 个视频",
              plural: "正在翻译 {COUNT} 个视频"
            }
          }
        });
        _v9 = (0, _v4.jsx)(_v101.AiSparkles, {
          justifySelf: "center"
        });
      } else _v4 ? (_v11 = "red.400", _v7 = _v90, _v8 = _v91, _v9 = (0, _v4.jsx)(_v105.CircleExclamationFilled, {
        color: "icon-danger-default",
        justifySelf: "center"
      })) : (_v7 = _v90, _v9 = (0, _v4.jsx)(_v102.Checkmark, {
        justifySelf: "center"
      }));
      return {
        title: _v7,
        subtitle: _v8,
        statusIcon: _v9,
        progressValue: _v5,
        progressBarSx: _v10,
        hasInProgress: _v6,
        gridTemplateColumns: _v6 ? "var(--vimeo-space-xl) 1fr var(--vimeo-space-xl)" : "var(--vimeo-space-xl) 1fr var(--vimeo-space-md) var(--vimeo-space-md)",
        subTitleColor: _v11
      };
    }, [_v0, _v1]);
    return _v5 ? (0, _v4.jsxs)(_v4.Fragment, {
      children: [(0, _v4.jsxs)(_v83.Grid, {
        padding: "md",
        gridTemplateColumns: _v5.gridTemplateColumns,
        gap: "md",
        alignItems: "center",
        children: [_v5.statusIcon, (0, _v4.jsxs)(_v69.Box, {
          children: [(0, _v4.jsx)(_v84.Text, {
            variant: "heading-sm",
            color: "text-primary",
            children: _v5.title
          }), _v5.subtitle && (0, _v4.jsx)(_v84.Text, {
            variant: "body-sm",
            color: _v5.subTitleColor,
            children: _v5.subtitle
          })]
        }), (0, _v4.jsx)(_v77.IconButton, {
          "aria-label": _v95,
          size: "sm",
          variant: "tertiary",
          icon: _v2 ? (0, _v4.jsx)(_v103.ChevronDown, {}) : (0, _v4.jsx)(_v104.ChevronUp, {}),
          justifySelf: "end",
          onClick: _v3
        }), !_v5.hasInProgress && (0, _v4.jsx)(_v77.IconButton, {
          "aria-label": _v96,
          size: "sm",
          variant: "tertiary",
          icon: (0, _v4.jsx)(_v106.CloseX, {}),
          justifySelf: "end",
          onClick: _v4
        })]
      }), (0, _v4.jsx)(_v69.Box, {
        padding: "0 md md md",
        children: (0, _v4.jsx)(_v100.Progress, {
          size: "xs",
          value: _v5.progressValue,
          variant: "default",
          sx: _v5.progressBarSx
        })
      })]
    }) : null;
  }
  _v0.s(["AiActivityCenter", 0, function ({
    inProgressJobs: _v0,
    doneJobs: _v1,
    onClose: _v2
  }) {
    (() => {
      let {
          baseUrl: _v0,
          xVimeoPage: _v1,
          jwt: _v2,
          locale: _v3
        } = (0, _v71.useGctlConfig)(),
        _v4 = _v73.getState().userId,
        _v5 = _v73.getState().setCredentials,
        _v6 = _v73.getState().setUserId,
        _v7 = (0, _v72.useViewer)(),
        _v8 = _v7?.teamUser?.ownerId ?? _v7?.user?.id;
      (0, _v5.useLayoutEffect)(function () {
        _v5({
          baseUrl: _v0,
          xVimeoPage: _v1,
          jwt: _v2,
          locale: _v3
        }), _v4 !== _v8 && _v6(_v8);
      }, [_v0, _v4, _v2, _v3, _v5, _v6, _v8, _v1]);
    })();
    let [_v3, _v4] = (0, _v5.useState)(!1);
    return _v0.length > 0 || _v1 && _v1.length > 0 ? (0, _v4.jsxs)(_v69.Box, {
      width: (0, _v70.rem)(360),
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "fill-blur",
      backdropFilter: "blur(var(--vimeo-blur-lg))",
      borderRadius: "md",
      boxShadow: "var(--vimeo-shadows-md)",
      borderWidth: "0px",
      overflow: "hidden",
      children: [(0, _v4.jsx)(_v107, {
        onClose: _v2,
        inProgressJobs: _v0,
        doneJobs: _v1,
        isExpanded: _v3,
        onToggleExpand: () => _v4(_v0 => !_v0)
      }), _v3 && (0, _v4.jsx)(_v99, {
        inProgressJobs: _v0,
        doneJobs: _v1
      })]
    }) : null;
  }], 0), _v0.s(["ActivitiesContainer", 0, ({
    children: _v0,
    maxHeight: _v1,
    isShowing: _v2 = !1,
    isMobile: _v3
  }) => _v2 ? (0, _v4.jsx)(_v83.Grid, {
    pointerEvents: "none",
    templateColumns: "1fr",
    maxHeight: _v1,
    gridAutoFlow: "row",
    alignContent: "flex-end",
    zIndex: _v2 ? "10" : "0",
    position: "fixed",
    left: _v3 ? "50%" : "auto",
    top: _v1 ? "unset" : (0, _v70.rem)(64),
    transform: _v3 ? "translateX(-50%)" : "none",
    right: _v3 ? "auto" : (0, _v70.rem)(30),
    bottom: (0, _v70.rem)(52),
    gap: (0, _v70.rem)(8),
    sx: {
      "& > div": {
        height: "100%"
      },
      "& > *": {
        pointerEvents: "auto"
      }
    },
    children: _v0
  }) : null], 0);
  var _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0);
  let _v112 = ({
    thumbnail: _v0,
    count: _v1
  }) => {
    let _v2 = (0, _v111.useColorModeValue)("grayAlpha.400", "whiteAlpha.400");
    return (0, _v4.jsxs)(_v69.Box, {
      position: "relative",
      width: "300px",
      height: "110px",
      children: [(0, _v4.jsx)(_v69.Box, {
        width: "200px",
        height: "110px",
        borderRadius: "8px",
        boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
        backgroundImage: `url(${_v0})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "2"
      }), _v1 > 1 && (0, _v4.jsxs)(_v4.Fragment, {
        children: [(0, _v4.jsx)(_v110.Flex, {
          borderRadius: "6px",
          backgroundColor: "text-primary",
          color: "surface",
          fontWeight: "500",
          width: "26px",
          height: "26px",
          position: "absolute",
          bottom: "-12px",
          right: "88px",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "3",
          children: _v1
        }), Array(_v1 - 1).fill("").slice(0, 2).map((_v0, _v1) => (0, _v4.jsx)(_v69.Box, {
          width: "200px",
          height: "110px",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "stroke",
          backgroundColor: _v2,
          opacity: 0 === _v1 ? "0.7" : "0.3",
          position: "absolute",
          top: "-2px",
          left: `${(_v1 + 1) * 5}px`,
          transform: `rotate(${(_v1 + 1) * 3}deg)`,
          zIndex: 1 - _v1
        }, _v1))]
      })]
    });
  };
  _v0.s(["DragPreview", 0, () => {
    let {
      item: _v0,
      isDragging: _v1,
      initialOffset: _v2,
      currentOffset: _v3,
      clientOffset: _v4
    } = function (_v0) {
      let _v1 = (0, _v108.useDragDropManager)().getMonitor(),
        [_v2, _v3] = (0, _v109.useCollector)(_v1, _v0);
      return (0, _v5.useEffect)(() => _v1.subscribeToOffsetChange(_v3)), (0, _v5.useEffect)(() => _v1.subscribeToStateChange(_v3)), _v2;
    }(_v0 => ({
      item: _v0.getItem(),
      initialOffset: _v0.getInitialSourceClientOffset(),
      currentOffset: _v0.getSourceClientOffset(),
      clientOffset: _v0.getClientOffset(),
      isDragging: _v0.isDragging()
    }));
    if (!_v1 || _v0 && Object.values(_v0).some(_v0 => null === _v0)) return null;
    let _v5 = Object.values(_v0)[0].thumbnail;
    return (0, _v4.jsx)(_v69.Box, {
      position: "fixed",
      pointerEvents: "none",
      zIndex: "1101",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      children: (0, _v4.jsx)(_v69.Box, {
        visibility: _v2 && _v3 && _v4 ? "visible" : "hidden",
        transform: `translate(${_v4?.x}px, ${_v4?.y}px)`,
        children: (0, _v4.jsx)(_v112, {
          thumbnail: _v5,
          count: Object.keys(_v0).length
        })
      })
    });
  }], 0);
  var _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0);
  let _v127 = () => (0, _v5.useContext)(_v126.ViewerContext);
  _v0.s(["useViewer", 0, _v127], 0);
  var _v128 = _v0.i(0),
    _v129 = _v0.i(0);
  let _v130 = {
    view: void 0,
    password: void 0
  };
  _v0.s(["ProgressToastContainer", 0, ({
    isShowing: _v0,
    uploadClipId: _v1,
    setUploadClipId: _v2,
    setShowProgressToast: _v3,
    isMobile: _v4,
    teamOwnerId: _v5,
    page: _v6,
    isPrivateModeOn: _v7
  }) => {
    let _v8 = _v127(),
      _v9 = (0, _v113.useRouter)(),
      {
        settings: _v10
      } = (0, _v117.useOrionSettings)(),
      {
        mutate: _v11
      } = (0, _v118.useUserQuotaApi)(),
      _v12 = (0, _v129.getLinkPrivacyOptionsMap)(_v8?.teamUser?.teamName, _v8?.teamUser?.isWorkspace, _v10.privacy_settings_new_copy),
      {
        uploads: _v13,
        uploaderSummary: _v14
      } = (0, _v120.useUploader)(),
      [_v15] = (0, _v115.usePatchUserItems)(),
      {
        open: _v16,
        close: _v17
      } = (0, _v124.useUpsellModal)(),
      [_v18, _v19] = (0, _v5.useState)(_v130),
      [_v20, _v21] = (0, _v5.useState)(0),
      [_v22, _v23] = (0, _v5.useState)(null),
      [_v24, _v25] = (0, _v5.useState)({
        clipId: "",
        privacy: _v130.view
      }),
      {
        showEmbedToggle: _v26,
        isEmbeddable: _v27,
        onEmbedToggle: _v28,
        clearEmbeddable: _v29
      } = (0, _v121.useUploadEmbeddable)({
        userId: _v8?.teamUser?.ownerId ?? _v8?.user?.id ?? 0,
        hasRestrictedStorage: _v8?.user?.uploadQuota?.restricted != null,
        defaultEmbedPreference: _v8?.user?.preferences?.videos?.privacy?.embed,
        onQuotaRevalidate: () => _v11(void 0, {
          revalidate: !0
        })
      }),
      _v30 = (0, _v5.useCallback)(_v0 => {
        _v22 && _v122.embeddableStore.set(_v22, _v0);
      }, [_v22]),
      {
        data: _v31
      } = (0, _v116.useGetVideo)(() => _v1 ? {
        where: {
          videoId: _v1
        },
        select: ["allowedPrivacies", "app.uri", "customMetadata", "manageLink", "uri", "parentProject.isPrivateToUser", "password", "privacy", "metadata.interactions.hasRestrictedPrivacyOptions"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      {
        isLocked: _v32,
        showLockedToast: _v33
      } = (0, _v125.useVideoMetadataLock)(_v31),
      _v34 = _v8?.user?.capabilities?.hasEnterprise && _v8.team?.ownerId === _v8.user.id,
      _v35 = _v8?.teamUser?.accountType === "enterprise" || _v34,
      _v36 = (0, _v5.useMemo)(() => {
        if (!_v31) return [];
        let _v0 = _v31.metadata.interactions.hasRestrictedPrivacyOptions,
          _v1 = _v31.parentProject?.isPrivateToUser;
        return _v7 || _v0 || _v1 || _v35 ? Object.keys(_v12).filter(_v0 => _v31.allowedPrivacies?.find(_v0 => _v0 === _v0)).map(_v0 => ({
          value: _v0,
          label: _v12[_v0].title,
          showUpgradeBadge: !1
        })) : _v12.hasOwnProperty(_v31.privacy.view) ? Object.keys(_v12).map(_v0 => {
          let _v1 = _v31.allowedPrivacies?.find(_v0 => _v0 === _v0);
          return {
            value: _v0,
            label: _v12[_v0].title,
            showUpgradeBadge: !_v1
          };
        }) : [];
      }, [_v31, _v7, _v35, _v12]),
      _v37 = _v0 => {
        _v0 && _v114.BigPictureClient.sendEvent(new _v114.Event("vimeo.upgrade_action", 30, {
          copy: _v0,
          action_type: "click",
          location: "embeddable_uploader",
          page: _v6,
          target: null,
          plan_selected: null,
          purchase_type: null,
          duration: null,
          price: null,
          currency: null,
          is_discount: null,
          discount_offer: null,
          path: window.location.pathname,
          target_path: null,
          device_type: null,
          upsell_name: _v0,
          feature: "privacy",
          is_new_pricing: null,
          upgrade_flags: null,
          loading_time: null,
          promo_code_id: null
        }));
      },
      _v38 = (_v0, _v1) => {
        if (_v0 || _v1) {
          if (_v32) return void _v33();
          if (_v36.find(_v0 => _v0.value === _v0 && _v0.showUpgradeBadge)) {
            var _v2;
            (_v2 = `${_v0}_privacy`) && (_v16({
              tracking: {
                params: {
                  feature: "privacy",
                  location: "embeddable_uploader",
                  page: _v6,
                  upsell_name: _v2
                },
                paywallTracking: {
                  paywallTrigger: `upload_progress_toast_${_v2}_button`,
                  paywallLocation: "embeddable_uploader",
                  paywallType: "popup",
                  paywallFeature: "privacy"
                }
              },
              onClose: _v17
            }), _v37(_v2));
          } else {
            let _v0 = _v13.filter(_v0 => _v0.clipId).map(_v0 => _v0.clipId),
              _v1 = _v0.map(_v0 => `/videos/${_v0}`).join(),
              _v2 = {
                privacy: {}
              };
            _v0 && (_v2.privacy.view = _v0), _v1 && (_v2.password = _v1), _v15({
              where: {
                userId: _v8?.teamUser?.ownerId ?? _v8?.user?.id ?? 0
              },
              query: {
                uris: _v1
              },
              variables: _v2
            }).then(() => {
              _v19({
                view: _v0,
                password: _v1
              });
            }).then(() => {
              (_v0 !== _v18.view || _v1 !== _v18.password) && _v114.BigPictureClient.sendEvent(new _v114.Event("workflow.change_link_privacy", 2, {
                path: window.location.pathname,
                entry_page: null,
                page: _v6,
                location: "embeddable_uploader",
                video_id: _v0.join(", "),
                video_privacy: _v0 ?? null,
                video_embed_privacy: null,
                is_preset_applied: null,
                is_video_password_protected: !!_v1,
                video_app_id: (0, _v128.idFromUri)(_v31?.app?.uri) ? String((0, _v128.idFromUri)(_v31?.app?.uri)) : null,
                team_owner_id: _v5,
                team_size: null,
                team_subscription_type: null,
                actor_team_role: null,
                video_status: null,
                upload_id: null,
                product: "upload",
                old_video_privacy: _v31?.privacy.view ?? null,
                video_type: null,
                actor_resource_role: null
              }));
            });
          }
        }
      };
    return ((0, _v5.useEffect)(() => {
      _v14.completeCount > _v20 && (_v114.BigPictureClient.sendEvent(new _v114.Event("vimeo.embeddable_uploader_upload_complete", 1, {
        video_id: _v1,
        privacy: _v18.view ?? _v31?.privacy.view
      })), _v21(_v20 + 1));
    }, [_v14.completeCount]), (0, _v5.useEffect)(() => {
      _v14.isComplete && (_v38(_v18.view, _v18.password), _v21(0));
    }, [_v14.isComplete]), 0 === _v13.length) ? null : (0, _v4.jsxs)(_v69.Box, {
      width: "100%",
      height: "100%",
      children: [(0, _v4.jsx)(_v69.Box, {
        pointerEvents: "auto",
        left: _v4 ? "50%" : "auto",
        right: _v4 ? "none" : (0, _v70.rem)(30),
        bottom: (0, _v70.rem)(52),
        children: (0, _v4.jsx)(_v119.ProgressWidgetModule, {
          isShowing: _v0,
          page: _v6,
          revalidatePrivacy: _v24,
          showPrivacySettings: !_v32,
          getPrivacyState: () => ({
            view: _v18.view ?? _v31?.privacy.view,
            password: _v18.password ?? _v31?.password
          }),
          setPrivacy: _v0 => {
            _v38(_v0.view, _v0.password), _v25({
              clipId: "",
              privacy: _v130.view
            });
          },
          onClose: () => {
            _v3(!1), _v19(_v130), _v2(""), _v25({
              clipId: "",
              privacy: _v130.view
            }), _v29();
          },
          onPrivacyUpsellClick: _v37,
          onShareClick: _v0 => {
            _v0.clipId === _v1 && _v32 ? _v33() : _v23(_v0.clipId);
          },
          onUploadClick: _v0 => {
            _v0.clipId && _v9.push(`/manage/videos/${_v0.clipId}${_v4 ? "" : "/privacy"}`);
          },
          onEditClick: _v0 => {
            _v0.clipId && _v9.push(`/manage/videos/${_v0.clipId}`);
          },
          showEmbedToggle: _v26,
          isEmbeddable: _v27,
          onEmbedToggle: _v28
        })
      }), _v22 && (0, _v4.jsx)(_v123.VideoShareViewModule, {
        clipId: _v22,
        isOpen: !!_v22,
        onClose: () => _v23(null),
        onPrivacyChange: _v0 => _v25({
          clipId: _v22 || "",
          privacy: _v0.view
        }),
        onEmbedChange: _v30,
        transferInlineLinkSurface: "home_upload_completed",
        reviewLinkSurface: "home_upload_completed"
      })]
    });
  }], 0);
  let _v131 = (0, _v0.i(0).default)(() => _v0.A(0).then(_v0 => _v0.ReorderFeaturedFoldersModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v132 = (0, _v5.createContext)({
      setModalContextState: () => console.log("noop")
    });
  _v0.s(["ModalContextDispatch", 0, _v132, "ReorderFeaturedFOldersModalContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v5.useState)({
        isOpen: !1,
        state: null
      }),
      {
        isOpen: _v3,
        state: _v4
      } = _v1;
    return (0, _v4.jsxs)(_v132.Provider, {
      value: {
        setModalContextState: _v2
      },
      children: [_v0, _v3 && (0, _v4.jsx)(_v131, {
        ..._v4,
        isOpen: !0,
        setIsOpen: () => _v2({
          isOpen: !1,
          state: null
        })
      })]
    });
  }], 0);
}