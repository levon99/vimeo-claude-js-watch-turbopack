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
  _v0.s(["UploadButton", 0, ({
    folderId: _v0,
    paywallTrigger: _v1,
    targetUserId: _v2,
    testIdPrefix: _v3 = "header-upload-button",
    onClick: _v4,
    surface: _v5
  }) => {
    let _v6 = (0, _v2.useRef)(null),
      {
        fileInputAccept: _v7
      } = (0, _v8.useUploader)(),
      {
        uploadFiles: _v8,
        isLoading: _v9
      } = (0, _v9.useUploadFileList)({
        targetUserId: _v2,
        origin: _v5 ? {
          isDropzone: !1,
          surface: _v5
        } : void 0,
        paywallTracking: {
          paywallTrigger: _v1,
          paywallLocation: "video_library",
          paywallType: "popup",
          paywallFeature: "quota"
        }
      }),
      _v10 = () => {
        _v4?.(), _v6.current?.click();
      },
      _v11 = (0, _v7.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v4.FileInput, {
        multiple: !0,
        ref: _v6,
        onChange: _v0 => {
          let _v1 = _v0.target.files;
          _v1?.length && _v8({
            files: _v1,
            targetUserId: _v2,
            folderId: _v0,
            uploadClipProperties: void 0
          }), _v6.current && (_v6.current.value = "");
        },
        isDisabled: _v9,
        sx: {
          display: "none"
        },
        accept: _v7
      }), (0, _v1.jsx)(_v5.IconButton, {
        "aria-label": _v11,
        "data-testid": `${_v3}-mobile`,
        display: {
          base: "inline-flex",
          md: "none"
        },
        icon: (0, _v1.jsx)(_v6.Upload, {}),
        variant: "secondary",
        size: "md",
        onClick: _v10,
        isDisabled: _v9
      }), (0, _v1.jsx)(_v3.Button, {
        "data-testid": _v3,
        display: {
          base: "none",
          md: "inline-flex"
        },
        variant: "secondary",
        size: "md",
        onClick: _v10,
        isDisabled: _v9,
        children: _v11
      })]
    });
  }]);
}