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
  _v0.s(["UploadDropzone", 0, ({
    children: _v0,
    className: _v1,
    targetUserId: _v2,
    selectedFolderId: _v3,
    uploadClipProperties: _v4,
    onUploadDrop: _v5,
    onUploadFailure: _v6,
    disabled: _v7,
    destinationText: _v8,
    preserveWrapperWhenDisabled: _v9 = !1,
    surface: _v10
  }) => {
    let _v11 = _v7 ? void 0 : _v2,
      {
        uploadFiles: _v12,
        isLoading: _v13
      } = (0, _v9.useUploadFileList)({
        targetUserId: _v11,
        onUploadFailure: _v6,
        origin: _v10 ? {
          isDropzone: !0,
          surface: _v10
        } : void 0,
        paywallTracking: {
          paywallTrigger: "library_dropzone_quota_limit_button",
          paywallLocation: "video_library",
          paywallType: "popup",
          paywallFeature: "quota"
        }
      }),
      [_v14, _v15] = (0, _v2.useState)(!1),
      _v16 = () => {
        _v15(!1), document.body.style.overflow = "unset";
      },
      _v17 = (0, _v2.useCallback)(() => {
        _v16();
      }, []),
      _v18 = (0, _v2.useCallback)(_v0 => {
        (_v0 => {
          let {
            files: _v1
          } = _v0.dataTransfer;
          _v1 && _v2 && _v12({
            files: _v1 || new FileList(),
            targetUserId: _v2,
            folderId: _v3 || void 0,
            uploadClipProperties: _v4
          });
        })(_v0), "function" == typeof _v5 && _v5(_v0), _v16();
      }, [_v5, _v3, _v2, _v12, _v4]),
      _v19 = (0, _v2.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.currentTarget.contains(_v0.relatedTarget) || _v16();
      }, []),
      _v20 = (0, _v2.useCallback)(_v0 => {
        _v0.dataTransfer.types.includes("Files") && (_v15(!0), document.body.style.overflow = "hidden");
      }, []);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v14 && (0, _v1.jsx)(_v3.Flex, {
        direction: "column",
        position: "fixed",
        right: "0",
        top: "0",
        height: window.innerHeight,
        width: window.innerWidth,
        align: "center",
        justify: "center",
        margin: "0",
        bg: "color-mix(in srgb, var(--vimeo-colors-vimeoBlue-600) 50%, transparent)",
        backdropFilter: "blur(var(--vimeo-blur-md))",
        border: "4px solid",
        borderColor: "vimeoBlue.400",
        pointerEvents: "none",
        zIndex: "1001",
        sx: {
          "@keyframes fadeIn": {
            "0%": {
              opacity: 0
            },
            "100%": {
              opacity: 1
            }
          },
          animation: "fadeIn 300ms ease-in-out"
        },
        children: (0, _v1.jsxs)(_v3.Flex, {
          direction: "column",
          width: (0, _v4.rem)(250),
          textAlign: "center",
          align: "center",
          gap: "md",
          children: [(0, _v1.jsx)(_v6.Upload, {
            boxSize: (0, _v4.rem)(100)
          }), (0, _v1.jsx)(_v5.Text, {
            variant: "heading-md",
            children: _v8 ? (0, _v7.translate)({
              singular: "Drag and drop videos to upload to ‘{DESTINATION}’",
              replacements: {
                DESTINATION: _v8
              },
              dictionary: {
                es: {
                  singular: "Arrastre y suelte los videos para subirlos a “{DESTINATION}”."
                },
                "de-DE": {
                  singular: "Videos per Drag-and-Drop auf „{DESTINATION}“ hochladen"
                },
                "fr-FR": {
                  singular: "Faites glisser et déposez des vidéos pour les mettre en ligne sur « {DESTINATION} »"
                },
                "ja-JP": {
                  singular: "動画をドラッグアンドドロップして「{DESTINATION}」にアップロード"
                },
                "ko-KR": {
                  singular: "업로드할 동영상을 '{DESTINATION}'에 끌어다 놓으세요."
                },
                "pt-BR": {
                  singular: 'Arraste e solte vídeos para carregar em "{DESTINATION}"'
                },
                "zh-CN": {
                  singular: "将视频拖放以上传到“{DESTINATION}”"
                }
              }
            }) : (0, _v7.translate)({
              singular: "Drag and drop videos to upload",
              dictionary: {
                es: {
                  singular: "Arrastre y suelte los videos para subirlos"
                },
                "de-DE": {
                  singular: "Videos per Drag-and-Drop hochladen"
                },
                "fr-FR": {
                  singular: "Glissez-déposez des vidéos"
                },
                "ja-JP": {
                  singular: "動画をドラッグ＆ドロップしてアップロード"
                },
                "ko-KR": {
                  singular: "업로드할 동영상을\n드래그 앤 드롭하세요."
                },
                "pt-BR": {
                  singular: "Arraste e solte vídeos para carregar"
                },
                "zh-CN": {
                  singular: "拖放视频即可上传"
                }
              }
            })
          })]
        })
      }), (0, _v1.jsx)(_v8.UploadDropzone, {
        className: _v1,
        onDragOver: _v20,
        onDragEnd: _v17,
        onDrop: _v18,
        onDragLeave: _v19,
        folderId: _v3 ?? void 0,
        targetUserId: _v2 ?? void 0,
        disabled: _v7 || _v13,
        preserveWrapperWhenDisabled: _v9,
        style: {
          width: "100%",
          height: "100%",
          border: "none",
          background: "none",
          opacity: _v14 ? "0.25" : "1"
        },
        children: _v0
      })]
    });
  }]);
}