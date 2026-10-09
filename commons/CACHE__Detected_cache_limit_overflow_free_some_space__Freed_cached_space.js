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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = new _v9.Logger("🧊CACHE", _v3.graphicsConfig.CACHE.IS_CACHING_LOG_ENABLED),
    _v14 = (0, _v2.memo)(function () {
      let _v0 = (0, _v1.useScope)(),
        _v1 = (0, _v2.useRef)(!0),
        _v2 = (0, _v2.useRef)(0),
        _v3 = (0, _v2.useRef)(0),
        _v4 = (0, _v2.useRef)(0),
        [_v5] = (0, _v2.useState)(() => new Set()),
        [_v6] = (0, _v2.useState)(() => new Set()),
        [_v7] = (0, _v2.useState)(() => new Set()),
        _v8 = (0, _v2.useCallback)(() => {
          _v13.info("Detected cache limit overflow, free some space:", _v6.size);
          let _v0 = 0;
          for (let _v0 of _v6) if (_v6.delete(_v0), _v7.delete(_v0.src), ++_v0 >= _v3.graphicsConfig.CACHE.PRELOAD_CACHED_ITEMS_REMOVAL_STEP) break;
          _v13.info("Freed cached space:", _v6.size);
        }, [_v0]),
        _v9 = (0, _v2.useCallback)(() => {
          let _v0 = _v5.values().next()?.value;
          _v0 && (_v13.info("Flushing queue item:", _v0, _v5.size), _v5.delete(_v0), _v10(_v0).catch(_v0 => _v13.warn("Failed to cache:", _v0)));
        }, [_v0]),
        _v10 = (0, _v2.useCallback)(async (_v0, _v1) => {
          if (_v7.has(_v0)) return;
          if (_v2.current >= _v3.graphicsConfig.CACHE.PRELOAD_CONCURRENT_DOWNLOADS_LIMIT) {
            _v13.info("Image preload postponed", _v0, _v5.ECachedSceneReason[_v1 || 0]), _v5.add(_v0);
            return;
          }
          _v13.info("Image preload start", _v0, _v5.ECachedSceneReason[_v1 || 0]), _v6.size >= _v3.graphicsConfig.CACHE.PRELOAD_CACHED_ITEMS_LIMIT && _v8();
          let _v2 = new Image();
          _v4.current += 1, _v2.current += 1, _v6.add(_v2), _v7.add(_v0), await new Promise((_v0, _v1) => {
            _v2.onload = () => {
              let _v0 = performance?.getEntriesByName(_v2.src)[0];
              _v13.info("Image preload success:", _v0, `took ${_v0?.duration || 0}`), _v2.current -= 1, _v3.current += _v0?.duration || 0, _v0(), _v9();
            }, _v2.onerror = _v0 => {
              _v13.info("Image preload fail:", _v0, _v0), _v2.current -= 1, _v6.delete(_v2), _v7.delete(_v0), _v1(_v0), _v9();
            }, _v2.src = _v0;
          });
        }, [_v0]),
        _v11 = (0, _v2.useCallback)((_v0, _v1) => {
          let {
              sourceId: _v2,
              slideIndex: _v3 = 0
            } = _v0,
            _v4 = _v1[_v2];
          if (!_v4) return null;
          let {
            baseUrl: _v5,
            slides: _v6 = [],
            thumbnails: _v7 = []
          } = _v4;
          return _v6.length && _v7.length && _v5 ? [_v3 - 1, _v3, _v3 + 1, _v3 + 2].reduce((_v0, _v1) => (_v6[_v1] && _v7[_v1] && _v0.push(`${_v5}${_v6[_v1]}`, `${_v5}${_v7[_v1]}`), _v0), []) : null;
        }, []),
        _v12 = (0, _v2.useCallback)((_v0, _v1) => {
          if (_v3.graphicsConfig.CACHE.CACHEABLE_TYPES.includes(_v0.type)) try {
            let {
                lowerthirdList: _v0,
                fullscreenList: _v1,
                agoraMediaList: _v2,
                globalList: _v3,
                slidesList: _v4
              } = _v0.getContextOf(_v12.GraphicsManager),
              _v5 = (0, _v6.inline)(() => {
                switch (_v0.type) {
                  case _v5.EGraphicsDescriptorType.LOWER_THIRD:
                    return _v0[_v0.data.sourceId]?.imageSrc;
                  case _v5.EGraphicsDescriptorType.QNA:
                    return _v3[_v5.EGraphicsDescriptorType.QNA]?.imageSrc;
                  case _v5.EGraphicsDescriptorType.AGORA_MEDIA:
                    return _v2[_v0.data.sourceId]?.videoThumb;
                  case _v5.EGraphicsDescriptorType.IMAGE:
                    return _v1[_v0.data.sourceId]?.imageSrc;
                  case _v5.EGraphicsDescriptorType.SLIDES:
                    return _v11(_v0.data, _v4);
                  default:
                    return null;
                }
              });
            _v5 && (Array.isArray(_v5) ? _v5 : [_v5]).forEach(_v0 => {
              _v10(_v0, _v1).catch(_v0 => _v13.warn("Failed to cache:", _v0, _v0, _v1));
            });
          } catch (_v0) {
            _v13.error("Failed to cache item:", _v0), (0, _v8.trackLiveError)(_v0, {
              component: "LiveComposerCache",
              category: _v7.ELiveErrorCategory.GRAPHICS,
              data: _v0
            });
          }
        }, [_v0]),
        _v13 = (0, _v2.useCallback)((_v0, _v1) => {
          Object.values(_v0.graphics || {}).forEach(_v0 => _v12(_v0, _v1));
        }, [_v0]);
      return (0, _v2.useEffect)(() => (_v13.info("Caching state is:", _v3.graphicsConfig.CACHE.IS_PRELOAD_ENABLED), () => {
        _v1.current = !1;
      }), []), (0, _v2.useEffect)(() => _v0.registerQueryProvider(_v4.ELiveGraphicsQuery.COMPOSER_CACHE_STATE, () => ({
        inProcess: _v2.current,
        timeSpent: _v3.current,
        totalLoads: _v4.current,
        queue: _v5,
        cacheLinks: _v6,
        cacheUrls: _v7
      })), [_v0, _v6, _v7]), !function ({
        cacheScene: _v0
      }) {
        let {
          scenes: _v1,
          activeScene: _v2,
          sceneInProgram: _v3,
          scenesOrder: _v4,
          isHydrated: _v5
        } = (0, _v1.useManager)(_v11.SceneManager);
        (0, _v2.useEffect)(() => {
          _v5 && _v2 && _v0(_v2, _v5.ECachedSceneReason.ACTIVE);
        }, [_v5, _v0, _v2?.graphics]), (0, _v2.useEffect)(() => {
          let _v0 = _v3 ? _v1[_v3] : null;
          _v5 && _v0 && _v0(_v0, _v5.ECachedSceneReason.PROGRAM);
        }, [_v5, _v0, _v3 ? _v1[_v3]?.graphics : null]), (0, _v2.useEffect)(() => {
          if (_v5 && _v2?.id) {
            let _v0 = (0, _v10.pickSortedScenesList)(_v1, _v4),
              _v1 = _v0.findIndex(_v0 => _v0.id === _v2.id);
            if (-1 !== _v1) {
              let _v0 = _v0[_v1 - 1],
                _v1 = _v0[_v1 + 1];
              _v0 && _v0(_v0, _v5.ECachedSceneReason.PREVIOUS), _v1 && _v0(_v1, _v5.ECachedSceneReason.NEXT);
            }
          }
        }, [_v5, _v0, _v2?.id, _v1, _v4]), (0, _v2.useEffect)(() => {
          if (_v5 && _v1) {
            let _v0 = setTimeout(() => {
              Object.values(_v1).forEach(_v0 => _v0(_v0, _v5.ECachedSceneReason.SECONDARY));
            }, _v3.graphicsConfig.CACHE.SECONDARY_CACHING_DELAY);
            return () => clearTimeout(_v0);
          }
        }, [_v5, _v0]);
      }({
        cacheScene: _v13
      }), null;
    });
  _v0.s(["LiveComposerCache", 0, _v14], 0);
}