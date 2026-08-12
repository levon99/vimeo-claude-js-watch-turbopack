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
  function _v12(_v0) {
    return null != _v0 && "object" == typeof _v0 && "files" in _v0;
  }
  _v0.s(["useDropFolder", 0, ({
    dropTargetType: _v0,
    dropTarget: _v1,
    allowedDropEffect: _v2,
    dropFileForUploadConfig: _v3
  }) => {
    let {
        settings: _v4
      } = (0, _v9.useOrionSettings)(),
      _v5 = (0, _v7.useToast)(),
      _v6 = _v4?.enable_new_library_drag_and_drop_upload ?? !1,
      _v7 = null != _v2,
      _v8 = void 0 !== _v3 && _v6,
      {
        uploadFiles: _v9
      } = (0, _v10.useUploadFileList)({
        targetUserId: _v3?.targetUserId,
        origin: _v3?.surface ? {
          isDropzone: !0,
          surface: _v3.surface
        } : void 0,
        paywallTracking: {
          paywallTrigger: "library_folder_drag_drop_quota_limit_button",
          paywallLocation: "video_library",
          paywallType: "popup",
          paywallFeature: "quota"
        }
      }),
      [{
        draggableItemIsHovering: _v10
      }, _v11] = (0, _v3.useDrop)(() => ({
        accept: [...(_v7 ? [_v11.ITEM_TYPES.ROOT_VIDEO, _v11.ITEM_TYPES.VIDEO, _v11.ITEM_TYPES.LIVE_EVENT] : []), ...(_v8 ? [_v4.NativeTypes.FILE] : [])],
        drop: (_v0, _v1) => {
          if (!_v1.didDrop()) {
            var _v2;
            if (!(_v12(_v2 = _v0) && Array.isArray(_v2.files) && _v2.files.length > 0) || null == _v3) return {
              allowedDropEffect: _v2,
              dropTarget: _v1,
              dropTargetType: _v0
            };else {
              _v9({
                files: _v0.files,
                targetUserId: _v3.targetUserId,
                folderId: _v3.folderId,
                uploadClipProperties: _v3.uploadClipProperties
              });
              let _v0 = null != _v3.folderId ? `/user/${_v3.targetUserId}/folder/${_v3.folderId}` : "/library";
              _v5({
                title: (0, _v8.translate)({
                  singular: "Uploading to {LINK}{FOLDER_NAME}{/LINK}",
                  replacements: {
                    FOLDER_NAME: _v3.folderName,
                    LINK: _v0 => (0, _v1.jsx)(_v2.default, {
                      href: _v0,
                      children: (0, _v1.jsx)(_v5.Link, {
                        cursor: "pointer",
                        fontSize: (0, _v6.rem)(14),
                        color: "currentColor",
                        textDecoration: "underline",
                        children: _v0
                      })
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "Subiendo a {LINK}{FOLDER_NAME}{/LINK}"
                    },
                    "de-DE": {
                      singular: "Wird in {LINK}{FOLDER_NAME}{/LINK} hochgeladen"
                    },
                    "fr-FR": {
                      singular: "Téléversement vers {LINK}{FOLDER_NAME}{/LINK}"
                    },
                    "ja-JP": {
                      singular: "{LINK}{FOLDER_NAME}{/LINK} にアップロードしています"
                    },
                    "ko-KR": {
                      singular: "{LINK}{FOLDER_NAME}{/LINK}에 업로드 중"
                    },
                    "pt-BR": {
                      singular: "Enviando para {LINK}{FOLDER_NAME}{/LINK}"
                    },
                    "zh-CN": {
                      singular: "正在上传到 {LINK}{FOLDER_NAME}{/LINK}"
                    }
                  }
                }),
                isClosable: !1
              });
              return;
            }
          }
        },
        canDrop: _v0 => {
          if (_v12(_v0)) return !0;
          if (!_v1?.metadata?.interactions?.moveVideo) return !1;
          let _v1 = Object.values(_v0);
          return !(_v1[0]?.parentFolderUri === _v1?.uri || _v1?.isPrivateToUser && !_v1[0]?.isPrivateToUser);
        },
        collect: _v0 => ({
          draggableItemIsHovering: _v0.isOver({
            shallow: !0
          }) && _v0.canDrop()
        })
      }), [_v7, _v8, _v9, _v3?.targetUserId, _v3?.folderId, _v3?.folderName, _v3?.surface, _v3?.uploadClipProperties, _v2, _v1, _v0]);
    return {
      draggableItemIsHovering: _v10,
      dropRef: _v11
    };
  }]);
}