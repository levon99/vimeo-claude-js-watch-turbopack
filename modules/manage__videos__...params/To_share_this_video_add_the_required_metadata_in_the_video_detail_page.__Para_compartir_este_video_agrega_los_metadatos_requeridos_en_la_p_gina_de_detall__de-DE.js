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
    _v11 = _v0.i(0);
  function _v12({
    children: _v0,
    onClick: _v1
  }) {
    return (0, _v1.jsx)(_v8.Tooltip, {
      placement: "top",
      label: (0, _v1.jsx)(_v6.Paragraph, {
        size: "md",
        children: (0, _v9.translate)({
          singular: "To share this video add the required metadata in the video detail page.",
          dictionary: {
            es: {
              singular: "Para compartir este video, agrega los metadatos requeridos en la página de detalles del video."
            },
            "de-DE": {
              singular: "Um dieses Video zu teilen, fügen Sie die erforderlichen Metadaten auf der Seite mit den Videodetails hinzu."
            },
            "fr-FR": {
              singular: "Pour partager cette vidéo, ajoutez les métadonnées requises dans la page de détails de la vidéo."
            },
            "ja-JP": {
              singular: "この動画を共有するには、動画の詳細ページに必要なメタデータを追加してください。"
            },
            "ko-KR": {
              singular: "이 비디오를 공유하려면 비디오 상세 페이지에서 필수 메타데이터를 추가하세요."
            },
            "pt-BR": {
              singular: "Para compartilhar este vídeo, adicione os metadados necessários na página de detalhes do vídeo."
            },
            "zh-CN": {
              singular: "要共享此视频，请在视频详情页中添加所需的元数据。"
            }
          }
        })
      }),
      children: (0, _v1.jsx)(_v4.Box, {
        onClick: _v1,
        cursor: "pointer",
        children: _v0
      })
    });
  }
  function _v13(_v0) {
    if (_v0?.manageLink) return _v0.manageLink;
    let _v1 = _v0?.uri ? (0, _v11.idFromUri)(_v0.uri) : 0;
    return _v1 ? `/manage/videos/${_v1}` : void 0;
  }
  let _v14 = "focus",
    _v15 = "custom-metadata";
  function _v16({
    toast: _v0,
    router: _v1,
    managePath: _v2
  }) {
    _v0({
      duration: 0,
      isClosable: !0,
      position: "bottom-right",
      render: _v0 => (0, _v1.jsxs)(_v7.ToastRoot, {
        ..._v0,
        variant: "warning",
        children: [(0, _v1.jsx)(_v7.ToastIcon, {}), (0, _v1.jsxs)(_v5.Center, {
          gap: "sm",
          children: [(0, _v1.jsx)(_v7.ToastTitle, {
            children: (0, _v9.translate)({
              singular: "This video has missing mandatory custom metadata.",
              dictionary: {
                es: {
                  singular: "A este video le faltan metadatos personalizados obligatorios."
                },
                "de-DE": {
                  singular: "Bei diesem Video fehlen erforderliche benutzerdefinierte Metadaten."
                },
                "fr-FR": {
                  singular: "Il manque à cette vidéo des métadonnées personnalisées obligatoires."
                },
                "ja-JP": {
                  singular: "この動画には必須のカスタムメタデータが欠落しています。"
                },
                "ko-KR": {
                  singular: "이 비디오에는 필수 사용자 지정 메타데이터가 누락되어 있습니다."
                },
                "pt-BR": {
                  singular: "Este vídeo está sem metadados personalizados obrigatórios."
                },
                "zh-CN": {
                  singular: "该视频缺少必填的自定义元数据。"
                }
              }
            })
          }), _v2 && (0, _v1.jsx)(_v7.ToastButton, {
            onClick: () => {
              _v0.closeAll(), _v1.push(function (_v0) {
                if (_v0.includes(`${_v14}=${_v15}`)) return _v0;
                let [_v1, _v2] = _v0.split("#", 2),
                  _v3 = _v1.includes("?") ? "&" : "?",
                  _v4 = `${_v1}${_v3}${_v14}=${_v15}`;
                return _v2 ? `${_v4}#${_v2}` : _v4;
              }(_v2));
            },
            children: (0, _v9.translate)({
              singular: "Add metadata",
              dictionary: {
                es: {
                  singular: "Agregar metadatos"
                },
                "de-DE": {
                  singular: "Metadaten hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter des métadonnées"
                },
                "ja-JP": {
                  singular: "メタデータを追加"
                },
                "ko-KR": {
                  singular: "메타데이터 추가"
                },
                "pt-BR": {
                  singular: "Adicionar metadados"
                },
                "zh-CN": {
                  singular: "添加元数据"
                }
              }
            })
          })]
        })]
      })
    });
  }
  _v0.s(["getVideoManagePath", 0, _v13, "showVideoMetadataLockedToast", 0, _v16, "useVideoMetadataLock", 0, function (_v0) {
    let _v1 = (0, _v7.useToast)(),
      _v2 = (0, _v2.useRouter)(),
      _v3 = (0, _v3.useMemo)(() => (0, _v10.isVideoMetadataLocked)(_v0), [_v0]),
      _v4 = (0, _v3.useMemo)(() => _v13(_v0), [_v0]),
      _v5 = (0, _v3.useCallback)(() => {
        _v16({
          toast: _v1,
          router: _v2,
          managePath: _v4
        });
      }, [_v4, _v2, _v1]),
      _v6 = (0, _v3.useCallback)(_v0 => _v3 ? (0, _v1.jsx)(_v12, {
        onClick: _v5,
        children: _v0
      }) : _v0, [_v3, _v5]);
    return {
      isLocked: _v3,
      showLockedToast: _v5,
      renderLocked: _v6
    };
  }]);
}