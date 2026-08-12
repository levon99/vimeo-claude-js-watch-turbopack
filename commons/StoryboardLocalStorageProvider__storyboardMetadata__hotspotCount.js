{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = (0, _v2.createContext)(null),
    _v11 = _v0 => {
      if (!_v0) throw Error(`Invalid storyboard ID: "${_v0}"`);
      let [_v1, _v2] = _v0.split("_");
      return `${_v1}_${_v2}`;
    },
    _v12 = (_v0, _v1, _v2) => {
      _v0[_v2]++;
      let _v3 = (0, _v9.extractNumberFromString)(_v1);
      _v3 && _v3 > _v0[_v2] && (_v0[_v2] = _v3);
    };
  _v0.s(["StoryboardLocalStorageProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v7.useAppSelector)(_v5.storyboardIdSelector),
      _v2 = (0, _v7.useAppSelector)(_v5.interactiveOverlaysSelector),
      _v3 = (0, _v2.useRef)(!1),
      [_v4, _v5] = (0, _v3.default)("storyboardMetadata", {}),
      _v6 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v11(_v1);
        _v5({
          ..._v4,
          [_v1]: _v0
        });
      }, [_v5, _v4, _v1]);
    (0, _v2.useEffect)(() => {
      if (_v3.current || !_v1) return;
      let _v0 = _v6.default.getState().storyboard;
      _v4[_v11(_v1)] || _v6(((_v0, _v1) => {
        let _v2 = {
          hotspotCount: 0,
          timeTriggerCount: 0,
          overlayCount: 0
        };
        for (let _v0 of _v0) for (let _v0 of _v0.composition) {
          if ((0, _v8.isImageHotspot)(_v0)) {
            _v12(_v2, _v0.interactiveHotspot.name, "hotspotCount");
            continue;
          }
          if ((0, _v8.isTimeTriggerElement)(_v0)) {
            _v12(_v2, _v0.name, "timeTriggerCount");
            continue;
          }
        }
        return _v1.forEach(_v0 => {
          _v0.name && _v12(_v2, _v0.name, "overlayCount");
        }), {
          ..._v2,
          userBgAlphaSelection: [],
          userTransitionDurationSelection: [],
          userTransitionDirectionSelection: [],
          userTransitionColorSelection: {},
          userTransitionGlobalSelection: {
            id: void 0,
            duration: void 0,
            primaryColor: void 0,
            secondaryColor: void 0
          }
        };
      })([..._v0.layers, ..._v0.interactiveLayers], _v2)), _v3.current = !0;
    }, [_v1, _v4, _v5, _v2, _v6]);
    let _v7 = (0, _v2.useCallback)(() => {
        if (!_v1) return _v4.DEFAULT_METADATA;
        let _v0 = _v4[_v11(_v1)];
        return {
          ..._v4.DEFAULT_METADATA,
          ..._v0,
          userTransitionGlobalSelection: {
            ..._v4.DEFAULT_METADATA.userTransitionGlobalSelection,
            ..._v0?.userTransitionGlobalSelection
          }
        };
      }, [_v1, _v4]),
      _v8 = (0, _v2.useCallback)(() => {
        _v6(_v4.DEFAULT_METADATA);
      }, [_v6]),
      _v9 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v7(),
          _v3 = {
            ..._v2.userTransitionColorSelection
          };
        void 0 === _v0.primaryColor && void 0 === _v0.secondaryColor || _v3[_v1] || (_v3[_v1] = {
          primaryColor: "",
          secondaryColor: ""
        }), void 0 !== _v0.primaryColor && (_v3[_v1].primaryColor = _v0.primaryColor), void 0 !== _v0.secondaryColor && (_v3[_v1].secondaryColor = _v0.secondaryColor), _v6({
          ..._v2,
          userTransitionGlobalSelection: {
            ..._v2.userTransitionGlobalSelection,
            ..._v0
          },
          userTransitionDurationSelection: void 0 !== _v0.duration ? Array.from(new Set([..._v2.userTransitionDurationSelection, _v1])) : _v2.userTransitionDurationSelection,
          userTransitionColorSelection: _v3,
          userTransitionDirectionSelection: void 0 !== _v0.slideDirection ? Array.from(new Set([..._v2.userTransitionDirectionSelection, _v1])) : _v2.userTransitionDirectionSelection
        });
      }, [_v7, _v6]),
      _v10 = (0, _v2.useCallback)(_v0 => {
        _v6({
          ..._v7(),
          hotspotCount: _v0
        });
      }, [_v7, _v6]),
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v6({
          ..._v7(),
          timeTriggerCount: _v0
        });
      }, [_v7, _v6]),
      _v12 = (0, _v2.useCallback)(_v0 => {
        _v6({
          ..._v7(),
          overlayCount: _v0
        });
      }, [_v7, _v6]),
      _v13 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v7(),
          _v2 = Array.from(new Set([..._v1.userBgAlphaSelection, _v0]));
        _v6({
          ..._v1,
          userBgAlphaSelection: _v2
        });
      }, [_v7, _v6]),
      _v14 = (0, _v2.useCallback)(_v0 => {
        _v6({
          ..._v7(),
          userTransitionDurationSelection: _v0
        });
      }, [_v7, _v6]),
      _v15 = (0, _v2.useCallback)(_v0 => {
        _v6({
          ..._v7(),
          userTransitionDirectionSelection: _v0
        });
      }, [_v7, _v6]),
      _v16 = (0, _v2.useCallback)(_v0 => {
        _v6({
          ..._v7(),
          userTransitionColorSelection: _v0
        });
      }, [_v7, _v6]),
      _v17 = (0, _v2.useCallback)(_v0 => {
        _v6({
          ..._v7(),
          userTransitionGlobalSelection: _v0
        });
      }, [_v7, _v6]);
    return (0, _v1.jsx)(_v10.Provider, {
      value: {
        getStoryboardMetadata: _v7,
        updateLastUsedTransitionData: _v9,
        saveHotspotCount: _v10,
        saveTimeTriggerCount: _v11,
        saveOverlayCount: _v12,
        saveUserBgAlphaSelection: _v13,
        saveUserTransitionDurationSelection: _v14,
        saveUserTransitionDirectionSelection: _v15,
        saveUserTransitionColorSelection: _v16,
        saveUserTransitionGlobalSelection: _v17,
        resetMetadata: _v8
      },
      children: _v0
    });
  }, "useStoryboardMetadata", 0, () => {
    let _v0 = (0, _v2.useContext)(_v10);
    if (!_v0) throw Error("useStoryboardMetadata must be used within a StoryboardLocalStorageProvider");
    return _v0;
  }]);
}