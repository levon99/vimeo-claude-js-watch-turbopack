{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useSceneHighQualityStreams", 0, function ({
    scene: _v0,
    roomMedia: _v1,
    canUseHQ: _v2,
    previewRef: _v3,
    changeQuality: _v4
  }) {
    let [_v5, _v6] = (0, _v2.useState)(!0),
      _v7 = (0, _v2.useRef)(null);
    (0, _v2.useEffect)(() => {
      _v7.current = _v0;
    }, [_v0]), (0, _v2.useEffect)(() => {
      let _v0 = _v3.current,
        _v1 = (0, _v1.default)(_v0 => {
          let {
            contentRect: {
              width: _v1
            }
          } = _v0[0];
          _v6(_v1 > _v4.liveMediaConfig.DUAL_STREAM.PREVIEW_SCALE_HQ_TOGGLE_THRESHOLD);
        }, _v4.liveMediaConfig.DUAL_STREAM.PREVIEW_SCALE_HQ_TOGGLE_THROTTLE);
      if (_v0) {
        let _v0 = new _v3.default(_v1);
        return _v0.observe(_v0), () => _v0.unobserve(_v0);
      }
    }, [_v3.current]), (0, _v2.useEffect)(() => {
      let _v0 = !!(_v5 && _v2),
        _v1 = _v0?.graphics || {},
        _v2 = (0, _v8.findFirstOfTypeGraphics)(_v6.EGraphicsDescriptorType.AGORA_MEDIA, _v0);
      _v4(_v1.reduce((_v0, _v1) => {
        let _v2 = _v1.uid;
        (0, _v7.isAgoraConnectionType)(_v1.uid, _v5.EAgoraConnectionType.BROADCASTER) ? _v2 = _v5.EAgoraConnectionType.BROADCASTER : (0, _v7.isAgoraConnectionType)(_v1.uid, _v5.EAgoraConnectionType.MEDIA) && (_v2 = _v2?.data.sourceId || _v5.EAgoraConnectionType.MEDIA);
        let _v3 = _v1[_v2],
          _v4 = !!(_v0 && _v3 && _v3.position.width >= _v4.liveMediaConfig.DUAL_STREAM.GFX_ELEMENT_WIDTH_HQ_TOGGLE_THRESHOLD) || (0, _v7.isAgoraConnectionType)(_v1.uid, _v5.EAgoraConnectionType.MEDIA);
        return _v0[_v1.uid] = _v4 ? _v5.EStreamQuality.HIGH : _v5.EStreamQuality.LOW, _v0;
      }, {}));
    }, [_v2, _v5, _v4, _v1, _v0?.graphics]), (0, _v2.useEffect)(() => () => {
      _v4(Object.values(_v7.current?.graphics || {}).filter(_v0 => _v0.data?.sourceId && (_v0.type === _v6.EGraphicsDescriptorType.AGORA_STREAM || _v0.type === _v6.EGraphicsDescriptorType.AGORA_MEDIA)).reduce((_v0, _v1) => (_v0[_v1.data.sourceId] = _v5.EStreamQuality.LOW, _v0), {}));
    }, []);
  }], 0), _v0.s(["useGraphicsResizeObserver", 0, function (_v0) {
    let {
      zoomElement: _v1,
      isEnabled: _v2 = !0
    } = _v0;
    (0, _v2.useLayoutEffect)(() => {
      if (_v2) {
        let _v0 = function ({
          zoomElement: _v0,
          maxWidth: _v1,
          relativeCoefficient: _v2 = 1,
          defaultRescaleThrottle: _v3
        }) {
          let _v4 = (0, _v1.default)(_v0 => {
            let {
              contentRect: {
                width: _v1
              }
            } = _v0[0];
            _v0.current && (_v0.current.style.transform = `scale(${_v1 / _v1 * _v2})`);
          }, _v3);
          return new _v3.default(_v4);
        }(_v0);
        return _v0.observe(_v1.current.parentElement), () => _v0.unobserve(_v1.current);
      }
    }, [_v2, _v1]);
  }], 0);
}