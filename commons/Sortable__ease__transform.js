{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1, _v2) {
    let _v3 = _v0.slice();
    return _v3.splice(_v2 < 0 ? _v3.length + _v2 : _v2, 0, _v3.splice(_v1, 1)[0]), _v3;
  }
  function _v5(_v0) {
    return null !== _v0 && _v0 >= 0;
  }
  let _v6 = _v0 => {
      let {
          rects: _v1,
          activeIndex: _v2,
          overIndex: _v3,
          index: _v4
        } = _v0,
        _v5 = _v4(_v1, _v3, _v2),
        _v6 = _v1[_v4],
        _v7 = _v5[_v4];
      return _v7 && _v6 ? {
        x: _v7.left - _v6.left,
        y: _v7.top - _v6.top,
        scaleX: _v7.width / _v6.width,
        scaleY: _v7.height / _v6.height
      } : null;
    },
    _v7 = {
      scaleX: 1,
      scaleY: 1
    },
    _v8 = "Sortable",
    _v9 = _v1.default.createContext({
      activeIndex: -1,
      containerId: _v8,
      disableTransforms: !1,
      items: [],
      overIndex: -1,
      useDragOverlay: !1,
      sortedRects: [],
      strategy: _v6,
      disabled: {
        draggable: !1,
        droppable: !1
      }
    }),
    _v10 = _v0 => {
      let {
        id: _v1,
        items: _v2,
        activeIndex: _v3,
        overIndex: _v4
      } = _v0;
      return _v4(_v2, _v3, _v4).indexOf(_v1);
    },
    _v11 = _v0 => {
      let {
        containerId: _v1,
        isSorting: _v2,
        wasDragging: _v3,
        index: _v4,
        items: _v5,
        newIndex: _v6,
        previousItems: _v7,
        previousContainerId: _v8,
        transition: _v9
      } = _v0;
      return !!_v9 && !!_v3 && (_v7 === _v5 || _v4 !== _v6) && (!!_v2 || _v6 !== _v4 && _v1 === _v8);
    },
    _v12 = {
      duration: 200,
      easing: "ease"
    },
    _v13 = "transform",
    _v14 = _v3.CSS.Transition.toString({
      property: _v13,
      duration: 0,
      easing: "linear"
    }),
    _v15 = {
      roleDescription: "sortable"
    };
  function _v16(_v0) {
    if (!_v0) return !1;
    let _v1 = _v0.data.current;
    return !!_v1 && "sortable" in _v1 && "object" == typeof _v1.sortable && "containerId" in _v1.sortable && "items" in _v1.sortable && "index" in _v1.sortable;
  }
  let _v17 = [_v2.KeyboardCode.Down, _v2.KeyboardCode.Right, _v2.KeyboardCode.Up, _v2.KeyboardCode.Left];
  function _v18(_v0, _v1) {
    return !!_v16(_v0) && !!_v16(_v1) && _v0.data.current.sortable.containerId === _v1.data.current.sortable.containerId;
  }
  _v0.s(["SortableContext", 0, function (_v0) {
    let {
        children: _v1,
        id: _v2,
        items: _v3,
        strategy: _v4 = _v6,
        disabled: _v5 = !1
      } = _v0,
      {
        active: _v6,
        dragOverlay: _v7,
        droppableRects: _v8,
        over: _v9,
        measureDroppableContainers: _v10
      } = (0, _v2.useDndContext)(),
      _v11 = (0, _v3.useUniqueId)(_v8, _v2),
      _v12 = null !== _v7.rect,
      _v13 = (0, _v1.useMemo)(() => _v3.map(_v0 => "object" == typeof _v0 && "id" in _v0 ? _v0.id : _v0), [_v3]),
      _v14 = null != _v6,
      _v15 = _v6 ? _v13.indexOf(_v6.id) : -1,
      _v16 = _v9 ? _v13.indexOf(_v9.id) : -1,
      _v17 = (0, _v1.useRef)(_v13),
      _v18 = !function (_v0, _v1) {
        if (_v0 === _v1) return !0;
        if (_v0.length !== _v1.length) return !1;
        for (let _v0 = 0; _v0 < _v0.length; _v0++) if (_v0[_v0] !== _v1[_v0]) return !1;
        return !0;
      }(_v13, _v17.current),
      _v19 = -1 !== _v16 && -1 === _v15 || _v18,
      _v20 = "boolean" == typeof _v5 ? {
        draggable: _v5,
        droppable: _v5
      } : _v5;
    (0, _v3.useIsomorphicLayoutEffect)(() => {
      _v18 && _v14 && _v10(_v13);
    }, [_v18, _v13, _v14, _v10]), (0, _v1.useEffect)(() => {
      _v17.current = _v13;
    }, [_v13]);
    let _v21 = (0, _v1.useMemo)(() => ({
      activeIndex: _v15,
      containerId: _v11,
      disabled: _v20,
      disableTransforms: _v19,
      items: _v13,
      overIndex: _v16,
      useDragOverlay: _v12,
      sortedRects: _v13.reduce((_v0, _v1, _v2) => {
        let _v3 = _v8.get(_v1);
        return _v3 && (_v0[_v2] = _v3), _v0;
      }, Array(_v13.length)),
      strategy: _v4
    }), [_v15, _v11, _v20.draggable, _v20.droppable, _v19, _v13, _v16, _v8, _v12, _v4]);
    return _v1.default.createElement(_v9.Provider, {
      value: _v21
    }, _v1);
  }, "arrayMove", 0, _v4, "sortableKeyboardCoordinates", 0, (_v0, _v1) => {
    let {
      context: {
        active: _v2,
        collisionRect: _v3,
        droppableRects: _v4,
        droppableContainers: _v5,
        over: _v6,
        scrollableAncestors: _v7
      }
    } = _v1;
    if (_v17.includes(_v0.code)) {
      if (_v0.preventDefault(), !_v2 || !_v3) return;
      let _v0 = [];
      _v5.getEnabled().forEach(_v0 => {
        if (!_v0 || null != _v0 && _v0.disabled) return;
        let _v1 = _v4.get(_v0.id);
        if (_v1) switch (_v0.code) {
          case _v2.KeyboardCode.Down:
            _v3.top < _v1.top && _v0.push(_v0);
            break;
          case _v2.KeyboardCode.Up:
            _v3.top > _v1.top && _v0.push(_v0);
            break;
          case _v2.KeyboardCode.Left:
            _v3.left > _v1.left && _v0.push(_v0);
            break;
          case _v2.KeyboardCode.Right:
            _v3.left < _v1.left && _v0.push(_v0);
        }
      });
      let _v1 = (0, _v2.closestCorners)({
          active: _v2,
          collisionRect: _v3,
          droppableRects: _v4,
          droppableContainers: _v0,
          pointerCoordinates: null
        }),
        _v2 = (0, _v2.getFirstCollision)(_v1, "id");
      if (_v2 === (null == _v6 ? void 0 : _v6.id) && _v1.length > 1 && (_v2 = _v1[1].id), null != _v2) {
        let _v0 = _v5.get(_v2.id),
          _v1 = _v5.get(_v2),
          _v2 = _v1 ? _v4.get(_v1.id) : null,
          _v3 = null == _v1 ? void 0 : _v1.node.current;
        if (_v3 && _v2 && _v0 && _v1) {
          var _v8, _v9;
          let _v0 = (0, _v2.getScrollableAncestors)(_v3).some((_v0, _v1) => _v7[_v1] !== _v0),
            _v1 = _v18(_v0, _v1),
            _v2 = (_v8 = _v0, _v9 = _v1, !!_v16(_v8) && !!_v16(_v9) && !!_v18(_v8, _v9) && _v8.data.current.sortable.index < _v9.data.current.sortable.index),
            _v3 = _v0 || !_v1 ? {
              x: 0,
              y: 0
            } : {
              x: _v2 ? _v3.width - _v2.width : 0,
              y: _v2 ? _v3.height - _v2.height : 0
            },
            _v4 = {
              x: _v2.left,
              y: _v2.top
            };
          return _v3.x && _v3.y ? _v4 : (0, _v3.subtract)(_v4, _v3);
        }
      }
    }
  }, "useSortable", 0, function (_v0) {
    var _v1, _v2, _v3, _v4;
    let {
        animateLayoutChanges: _v5 = _v11,
        attributes: _v6,
        disabled: _v7,
        data: _v8,
        getNewIndex: _v9 = _v10,
        id: _v10,
        strategy: _v11,
        resizeObserverConfig: _v12,
        transition: _v13 = _v12
      } = _v0,
      {
        items: _v14,
        containerId: _v15,
        activeIndex: _v16,
        disabled: _v17,
        disableTransforms: _v18,
        sortedRects: _v19,
        overIndex: _v20,
        useDragOverlay: _v21,
        strategy: _v22
      } = (0, _v1.useContext)(_v9),
      _v23 = (_v1 = _v7, _v2 = _v17, "boolean" == typeof _v1 ? {
        draggable: _v1,
        droppable: !1
      } : {
        draggable: null != (_v3 = null == _v1 ? void 0 : _v1.draggable) ? _v3 : _v2.draggable,
        droppable: null != (_v4 = null == _v1 ? void 0 : _v1.droppable) ? _v4 : _v2.droppable
      }),
      _v24 = _v14.indexOf(_v10),
      _v25 = (0, _v1.useMemo)(() => ({
        sortable: {
          containerId: _v15,
          index: _v24,
          items: _v14
        },
        ..._v8
      }), [_v15, _v8, _v24, _v14]),
      _v26 = (0, _v1.useMemo)(() => _v14.slice(_v14.indexOf(_v10)), [_v14, _v10]),
      {
        rect: _v27,
        node: _v28,
        isOver: _v29,
        setNodeRef: _v30
      } = (0, _v2.useDroppable)({
        id: _v10,
        data: _v25,
        disabled: _v23.droppable,
        resizeObserverConfig: {
          updateMeasurementsFor: _v26,
          ..._v12
        }
      }),
      {
        active: _v31,
        activatorEvent: _v32,
        activeNodeRect: _v33,
        attributes: _v34,
        setNodeRef: _v35,
        listeners: _v36,
        isDragging: _v37,
        over: _v38,
        setActivatorNodeRef: _v39,
        transform: _v40
      } = (0, _v2.useDraggable)({
        id: _v10,
        data: _v25,
        attributes: {
          ..._v15,
          ..._v6
        },
        disabled: _v23.draggable
      }),
      _v41 = (0, _v3.useCombinedRefs)(_v30, _v35),
      _v42 = !!_v31,
      _v43 = _v42 && !_v18 && _v5(_v16) && _v5(_v20),
      _v44 = !_v21 && _v37,
      _v45 = _v44 && _v43 ? _v40 : null,
      _v46 = _v43 ? null != _v45 ? _v45 : (null != _v11 ? _v11 : _v22)({
        rects: _v19,
        activeNodeRect: _v33,
        activeIndex: _v16,
        overIndex: _v20,
        index: _v24
      }) : null,
      _v47 = _v5(_v16) && _v5(_v20) ? _v9({
        id: _v10,
        items: _v14,
        activeIndex: _v16,
        overIndex: _v20
      }) : _v24,
      _v48 = null == _v31 ? void 0 : _v31.id,
      _v49 = (0, _v1.useRef)({
        activeId: _v48,
        items: _v14,
        newIndex: _v47,
        containerId: _v15
      }),
      _v50 = _v14 !== _v49.current.items,
      _v51 = _v5({
        active: _v31,
        containerId: _v15,
        isDragging: _v37,
        isSorting: _v42,
        id: _v10,
        index: _v24,
        items: _v14,
        newIndex: _v49.current.newIndex,
        previousItems: _v49.current.items,
        previousContainerId: _v49.current.containerId,
        transition: _v13,
        wasDragging: null != _v49.current.activeId
      }),
      _v52 = function (_v0) {
        let {
            disabled: _v1,
            index: _v2,
            node: _v3,
            rect: _v4
          } = _v0,
          [_v5, _v6] = (0, _v1.useState)(null),
          _v7 = (0, _v1.useRef)(_v2);
        return (0, _v3.useIsomorphicLayoutEffect)(() => {
          if (!_v1 && _v2 !== _v7.current && _v3.current) {
            let _v0 = _v4.current;
            if (_v0) {
              let _v0 = (0, _v2.getClientRect)(_v3.current, {
                  ignoreTransform: !0
                }),
                _v1 = {
                  x: _v0.left - _v0.left,
                  y: _v0.top - _v0.top,
                  scaleX: _v0.width / _v0.width,
                  scaleY: _v0.height / _v0.height
                };
              (_v1.x || _v1.y) && _v6(_v1);
            }
          }
          _v2 !== _v7.current && (_v7.current = _v2);
        }, [_v1, _v2, _v3, _v4]), (0, _v1.useEffect)(() => {
          _v5 && _v6(null);
        }, [_v5]), _v5;
      }({
        disabled: !_v51,
        index: _v24,
        node: _v28,
        rect: _v27
      });
    return (0, _v1.useEffect)(() => {
      _v42 && _v49.current.newIndex !== _v47 && (_v49.current.newIndex = _v47), _v15 !== _v49.current.containerId && (_v49.current.containerId = _v15), _v14 !== _v49.current.items && (_v49.current.items = _v14);
    }, [_v42, _v47, _v15, _v14]), (0, _v1.useEffect)(() => {
      if (_v48 === _v49.current.activeId) return;
      if (null != _v48 && null == _v49.current.activeId) {
        _v49.current.activeId = _v48;
        return;
      }
      let _v0 = setTimeout(() => {
        _v49.current.activeId = _v48;
      }, 50);
      return () => clearTimeout(_v0);
    }, [_v48]), {
      active: _v31,
      activeIndex: _v16,
      attributes: _v34,
      data: _v25,
      rect: _v27,
      index: _v24,
      newIndex: _v47,
      items: _v14,
      isOver: _v29,
      isSorting: _v42,
      isDragging: _v37,
      listeners: _v36,
      node: _v28,
      overIndex: _v20,
      over: _v38,
      setNodeRef: _v41,
      setActivatorNodeRef: _v39,
      setDroppableNodeRef: _v30,
      setDraggableNodeRef: _v35,
      transform: null != _v52 ? _v52 : _v46,
      transition: _v52 || _v50 && _v49.current.newIndex === _v24 ? _v14 : (!_v44 || (0, _v3.isKeyboardEvent)(_v32)) && _v13 && (_v42 || _v51) ? _v3.CSS.Transition.toString({
        ..._v13,
        property: _v13
      }) : void 0
    };
  }, "verticalListSortingStrategy", 0, _v0 => {
    var _v1, _v2, _v3, _v4;
    let _v5,
      _v6,
      _v7,
      {
        activeIndex: _v8,
        activeNodeRect: _v9,
        index: _v10,
        rects: _v11,
        overIndex: _v12
      } = _v0,
      _v13 = null != (_v1 = _v11[_v8]) ? _v1 : _v9;
    if (!_v13) return null;
    if (_v10 === _v8) {
      let _v0 = _v11[_v12];
      return _v0 ? {
        x: 0,
        y: _v8 < _v12 ? _v0.top + _v0.height - (_v13.top + _v13.height) : _v0.top - _v13.top,
        ..._v7
      } : null;
    }
    let _v14 = (_v2 = _v11, _v3 = _v10, _v4 = _v8, _v5 = _v2[_v3], _v6 = _v2[_v3 - 1], _v7 = _v2[_v3 + 1], _v5 ? _v4 < _v3 ? _v6 ? _v5.top - (_v6.top + _v6.height) : _v7 ? _v7.top - (_v5.top + _v5.height) : 0 : _v7 ? _v7.top - (_v5.top + _v5.height) : _v6 ? _v5.top - (_v6.top + _v6.height) : 0 : 0);
    return _v10 > _v8 && _v10 <= _v12 ? {
      x: 0,
      y: -_v13.height - _v14,
      ..._v7
    } : _v10 < _v8 && _v10 >= _v12 ? {
      x: 0,
      y: _v13.height + _v14,
      ..._v7
    } : {
      x: 0,
      y: 0,
      ..._v7
    };
  }]);
}