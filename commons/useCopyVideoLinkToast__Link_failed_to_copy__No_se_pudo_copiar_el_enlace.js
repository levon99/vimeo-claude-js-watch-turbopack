{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useCopyVideoLinkToast", 0, () => {
    let _v0 = (0, _v4.useToast)(),
      _v1 = (0, _v2.useRef)(_v0);
    return _v1.current = _v0, (0, _v2.useCallback)((_v0, _v1 = !0, _v2, _v3) => {
      if (!_v1) return _v0({
        title: (0, _v5.translate)({
          singular: "Link failed to copy",
          dictionary: {
            es: {
              singular: "No se pudo copiar el enlace"
            },
            "de-DE": {
              singular: "Link wurde nicht kopiert"
            },
            "fr-FR": {
              singular: "Impossible de copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピーできませんでした"
            },
            "ko-KR": {
              singular: "링크 복사를 실패했습니다"
            },
            "pt-BR": {
              singular: "Falha ao copiar o link"
            },
            "zh-CN": {
              singular: "链接复制失败"
            }
          }
        }),
        status: "error"
      });
      let _v4 = "unrated" === _v0.contentRatingClass,
        _v5 = (0, _v6.getCopyLinkToastTitle)(_v0.privacy?.view, _v4, _v2);
      _v3 ? _v0({
        id: "video-library-copy-link",
        duration: 0,
        isClosable: !0,
        render: _v0 => (0, _v1.jsx)(_v4.ToastRoot, {
          ..._v0,
          variant: "neutral",
          children: (0, _v1.jsxs)(_v3.Center, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v4.ToastTitle, {
              children: _v5
            }), (0, _v1.jsx)(_v4.ToastButton, {
              onClick: () => {
                _v1.current.closeAll(), _v3();
              },
              children: (0, _v5.translate)({
                singular: "Reset expiration",
                dictionary: {
                  es: {
                    singular: "Restablecer expiración"
                  },
                  "de-DE": {
                    singular: "Ablaufdatum zurücksetzen"
                  },
                  "fr-FR": {
                    singular: "Réinitialiser l'expiration"
                  },
                  "ja-JP": {
                    singular: "有効期限をリセット"
                  },
                  "ko-KR": {
                    singular: "만료 재설정"
                  },
                  "pt-BR": {
                    singular: "Redefinir expiração"
                  },
                  "zh-CN": {
                    singular: "重置到期时间"
                  }
                }
              })
            })]
          })
        })
      }) : _v0({
        title: _v5
      });
    }, [_v0]);
  }]);
}