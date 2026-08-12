{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useCreateAndCopyFolderReviewLink", 0, _v0 => {
    let [_v1, {
        data: _v2
      }] = (0, _v3.useCreateFolderReviewLink)(),
      _v3 = (0, _v1.useRef)(null),
      _v4 = (0, _v1.useRef)(!1),
      _v5 = (0, _v1.useEffectEvent)(_v0 => {
        if (!_v3.current) return;
        let {
          folderId: _v1,
          folderOwnerId: _v2,
          folderUri: _v3
        } = _v3.current;
        (0, _v2.default)((0, _v4.getFolderReviewPageUrl)(_v0, _v1, _v2)), _v0(_v3, _v0), _v3.current = null;
      });
    return (0, _v1.useEffect)(() => {
      _v2?.uri && _v5(_v2.uri);
    }, [_v2]), (0, _v1.useCallback)((_v0, _v1, _v2) => {
      _v4.current || (_v4.current = !0, _v3.current = {
        folderId: _v0,
        folderOwnerId: _v1,
        folderUri: _v2
      }, _v1({
        where: {
          projectId: _v0
        },
        select: ["uri"],
        variables: {}
      }).finally(() => {
        _v4.current = !1;
      }));
    }, [_v1]);
  }, "useCreateAndCopyVideoReviewLink", 0, _v0 => {
    let [_v1, {
        data: _v2
      }] = (0, _v3.useCreateVideoReviewLink)(),
      _v3 = (0, _v1.useRef)(null),
      _v4 = (0, _v1.useRef)(!1),
      _v5 = (0, _v1.useEffectEvent)(_v0 => {
        if (!_v3.current) return;
        let {
          videoId: _v1,
          videoUri: _v2
        } = _v3.current;
        (0, _v2.default)((0, _v4.getVideoReviewPageUrl)(_v0, _v1)), _v0(_v2, _v0), _v3.current = null;
      });
    return (0, _v1.useEffect)(() => {
      _v2?.uri && _v5(_v2.uri);
    }, [_v2]), (0, _v1.useCallback)((_v0, _v1) => {
      _v4.current || (_v4.current = !0, _v3.current = {
        videoId: _v0,
        videoUri: _v1
      }, _v1({
        where: {
          videoId: _v0
        },
        select: ["uri"],
        variables: {}
      }).finally(() => {
        _v4.current = !1;
      }));
    }, [_v1]);
  }], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useReviewLinkCopiedToast", 0, () => {
    let _v0 = (0, _v7.useToast)();
    return (0, _v1.useCallback)(_v0 => {
      _v0({
        duration: 0,
        isClosable: !0,
        render: _v0 => (0, _v5.jsx)(_v7.ToastRoot, {
          ..._v0,
          variant: "neutral",
          children: (0, _v5.jsxs)(_v6.Center, {
            gap: "sm",
            children: [(0, _v5.jsx)(_v7.ToastTitle, {
              children: (0, _v8.translate)({
                singular: "Review link copied!",
                dictionary: {
                  es: {
                    singular: "¡Enlace de revisión copiado!"
                  },
                  "de-DE": {
                    singular: "Link zur Überprüfung kopiert!"
                  },
                  "fr-FR": {
                    singular: "Lien de révision copié !"
                  },
                  "ja-JP": {
                    singular: "レビュー用リンクをコピーしました!"
                  },
                  "ko-KR": {
                    singular: "리뷰 링크가 복사되었습니다!"
                  },
                  "pt-BR": {
                    singular: "Link de revisão copiado!"
                  },
                  "zh-CN": {
                    singular: "审阅链接已复制！"
                  }
                }
              })
            }), _v0 && (0, _v5.jsx)(_v7.ToastButton, {
              bgColor: "text-secondary",
              color: "text-button-inverted",
              fontWeight: "medium",
              _hover: {
                bgColor: "text-primary"
              },
              onClick: () => {
                _v0.closeAll(), _v0();
              },
              children: (0, _v8.translate)({
                singular: "Manage",
                dictionary: {
                  es: {
                    singular: "Administrar"
                  },
                  "de-DE": {
                    singular: "Verwalten"
                  },
                  "fr-FR": {
                    singular: "Gérer"
                  },
                  "ja-JP": {
                    singular: "管理"
                  },
                  "ko-KR": {
                    singular: "관리"
                  },
                  "pt-BR": {
                    singular: "Gerenciar"
                  },
                  "zh-CN": {
                    singular: "管理"
                  }
                }
              })
            })]
          })
        })
      });
    }, [_v0]);
  }], 0);
}