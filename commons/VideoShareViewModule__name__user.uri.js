{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.default)(async () => {
      let {
        VideoShareView: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v8 = (0, _v2.default)(async () => {
      let {
        Groups: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v9 = (0, _v2.default)(async () => {
      let {
        Channels: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v10 = (0, _v2.default)(async () => {
      let {
        Portfolios: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["VideoShareViewModule", 0, ({
    clipId: _v0,
    isOpen: _v1,
    defaultPanel: _v2,
    editReviewLinkUri: _v3,
    onClose: _v4,
    onCreateReviewLinkSuccess: _v5,
    onPrivacyChange: _v6,
    onEmbedChange: _v7,
    transferInlineLinkSurface: _v8,
    reviewLinkSurface: _v9
  }) => {
    let _v10 = (0, _v3.useRouter)(),
      {
        openAddToShowcaseModal: _v11,
        closeAddToShowcaseModal: _v12
      } = (0, _v6.useAddToShowcaseModal)(),
      [_v13, _v14] = (0, _v4.useState)(null),
      {
        data: _v15
      } = (0, _v5.useGetVideo)(() => _v0 ? {
        where: {
          videoId: _v0
        },
        select: ["name", "user.uri"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      _v16 = (0, _v4.useMemo)(() => ({
        videoId: Number(_v0),
        ownerId: Number(_v15?.user.uri.split("/").pop()) || 0,
        videoName: _v15?.name || "",
        pageName: "library",
        pageUrl: _v10.pathname,
        onClose: () => _v14(null)
      }), [_v0, _v15, _v10]),
      _v17 = (0, _v4.useCallback)(({
        destination: _v0
      }) => {
        if (("channel" === _v0 || "group" === _v0 || "portfolio" === _v0 || "showcase" === _v0) && _v16.ownerId) {
          if ("showcase" === _v0) return void _v11({
            onClose: _v12,
            showcaseItems: [{
              id: _v16.videoId,
              name: _v16.videoName,
              type: "video"
            }],
            ownerId: _v16.ownerId,
            pageName: _v16.pageName,
            pageUrl: _v16.pageUrl
          });
          _v14(_v0);
        }
      }, [_v11, _v12, _v16]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7, {
        clipId: _v0,
        layoutType: "modal",
        trackingContextConfig: {
          pageName: "video_library",
          location: "modal"
        },
        defaultPanel: _v2,
        editReviewLinkUri: _v3,
        isOpen: _v1,
        onClose: _v4,
        onPublishToClick: _v17,
        onCreateReviewLinkSuccess: _v5,
        onPrivacyChange: _v6,
        onEmbedChange: _v7,
        transferInlineLinkSurface: _v8,
        reviewLinkSurface: _v9,
        expiryPickerEntryPoint: "library"
      }), "channel" === _v13 && (0, _v1.jsx)(_v9, {
        ..._v16
      }), "group" === _v13 && (0, _v1.jsx)(_v8, {
        ..._v16
      }), "portfolio" === _v13 && (0, _v1.jsx)(_v10, {
        ..._v16
      })]
    });
  }], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19({
    children: _v0,
    onClick: _v1
  }) {
    return (0, _v1.jsx)(_v15.Tooltip, {
      placement: "top",
      label: (0, _v1.jsx)(_v13.Paragraph, {
        size: "md",
        children: (0, _v16.translate)({
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
      children: (0, _v1.jsx)(_v11.Box, {
        onClick: _v1,
        cursor: "pointer",
        children: _v0
      })
    });
  }
  function _v20(_v0) {
    if (_v0?.manageLink) return _v0.manageLink;
    let _v1 = _v0?.uri ? (0, _v18.idFromUri)(_v0.uri) : 0;
    return _v1 ? `/manage/videos/${_v1}` : void 0;
  }
  let _v21 = "focus",
    _v22 = "custom-metadata";
  function _v23({
    toast: _v0,
    router: _v1,
    managePath: _v2
  }) {
    _v0({
      duration: 0,
      isClosable: !0,
      position: "bottom-right",
      render: _v0 => (0, _v1.jsxs)(_v14.ToastRoot, {
        ..._v0,
        variant: "warning",
        children: [(0, _v1.jsx)(_v14.ToastIcon, {}), (0, _v1.jsxs)(_v12.Center, {
          gap: "sm",
          children: [(0, _v1.jsx)(_v14.ToastTitle, {
            children: (0, _v16.translate)({
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
          }), _v2 && (0, _v1.jsx)(_v14.ToastButton, {
            onClick: () => {
              _v0.closeAll(), _v1.push(function (_v0) {
                if (_v0.includes(`${_v21}=${_v22}`)) return _v0;
                let [_v1, _v2] = _v0.split("#", 2),
                  _v3 = _v1.includes("?") ? "&" : "?",
                  _v4 = `${_v1}${_v3}${_v21}=${_v22}`;
                return _v2 ? `${_v4}#${_v2}` : _v4;
              }(_v2));
            },
            children: (0, _v16.translate)({
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
  _v0.s(["getVideoManagePath", 0, _v20, "showVideoMetadataLockedToast", 0, _v23, "useVideoMetadataLock", 0, function (_v0) {
    let _v1 = (0, _v14.useToast)(),
      _v2 = (0, _v3.useRouter)(),
      _v3 = (0, _v4.useMemo)(() => (0, _v17.isVideoMetadataLocked)(_v0), [_v0]),
      _v4 = (0, _v4.useMemo)(() => _v20(_v0), [_v0]),
      _v5 = (0, _v4.useCallback)(() => {
        _v23({
          toast: _v1,
          router: _v2,
          managePath: _v4
        });
      }, [_v4, _v2, _v1]),
      _v6 = (0, _v4.useCallback)(_v0 => _v3 ? (0, _v1.jsx)(_v19, {
        onClick: _v5,
        children: _v0
      }) : _v0, [_v3, _v5]);
    return {
      isLocked: _v3,
      showLockedToast: _v5,
      renderLocked: _v6
    };
  }], 0);
}