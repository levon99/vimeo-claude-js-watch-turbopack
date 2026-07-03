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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  _v0.s(["RemoveWatermarkProcessingModal", 0, ({
    isActive: _v0,
    onWatermarkRemoveSuccess: _v1,
    setIsRemovingWatermark: _v2,
    videoId: _v3
  }) => {
    let _v4 = (0, _v2.useContext)(_v12.ViewerContext),
      {
        magistoSessionId: _v5
      } = (0, _v2.useContext)(_v13.MagistoSessionContext),
      _v6 = (0, _v2.useCallback)(() => {
        _v2 && _v2(!1);
      }, [_v2]);
    (0, _v2.useEffect)(() => {
      _v0 && _v9();
    }, []);
    let _v7 = (0, _v2.useCallback)(() => {
        _v1 && _v1(), _v2 && _v2(!1);
      }, [_v1, _v2]),
      _v8 = (0, _v2.useCallback)((_v0, _v1) => {
        _v4 && _v1 && _v11.default.checkWatermarkRemovingJobStatus({
          magistoApiHost: _v4.magistoApiHost,
          sessionId: _v0,
          jobId: _v1,
          errorCallback: _v6,
          successCallback: _v7
        });
      }, [_v4, _v6, _v7]),
      _v9 = (0, _v2.useCallback)(() => {
        if (!_v3 || !_v4) return;
        let {
          magistoApiHost: _v0
        } = _v4;
        _v3 && _v2 && _v5 && _v11.default.removeWatermark({
          sessionId: _v5,
          magistoApiHost: _v0,
          videoId: _v3
        }).then(_v0 => {
          _v8(_v5, _v0);
        }).catch(() => {
          _v2(!1);
        });
      }, [_v3, _v4, _v2, _v5, _v8]);
    return (0, _v1.jsxs)(_v5.Modal, {
      isOpen: _v0,
      onClose: () => null,
      children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsx)(_v7.ModalContent, {
        children: (0, _v1.jsx)(_v6.ModalBody, {
          children: (0, _v1.jsxs)(_v3.Flex, {
            flexDirection: "column",
            gap: 200,
            alignItems: "center",
            pt: 400,
            children: [(0, _v1.jsx)(_v4.Header, {
              size: "md",
              mb: 6,
              children: (0, _v10.translate)({
                singular: "Removing watermark...",
                dictionary: {
                  es: {
                    singular: "Eliminando marca de agua..."
                  },
                  "de-DE": {
                    singular: "Wasserzeichen wird entfernt ..."
                  },
                  "fr-FR": {
                    singular: "Suppression du filigrane..."
                  },
                  "ja-JP": {
                    singular: "ウォーターマークを削除しています..."
                  },
                  "ko-KR": {
                    singular: "워터마크 제거 중..."
                  },
                  "pt-BR": {
                    singular: "Removendo marca d'água..."
                  },
                  "zh-CN": {
                    singular: "正在去除水印..."
                  }
                }
              })
            }), (0, _v1.jsx)(_v9.Spinner, {
              size: "xl"
            })]
          })
        })
      })]
    });
  }]);
}