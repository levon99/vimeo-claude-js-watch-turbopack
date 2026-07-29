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
        uploadFiles: _v7,
        isLoading: _v8
      } = (0, _v8.useUploadFileList)({
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
      _v9 = () => {
        _v4?.(), _v6.current?.click();
      },
      _v10 = (0, _v7.translate)({
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
          _v1?.length && _v7({
            files: _v1,
            targetUserId: _v2,
            folderId: _v0,
            uploadClipProperties: void 0
          }), _v6.current && (_v6.current.value = "");
        },
        isDisabled: _v8,
        sx: {
          display: "none"
        },
        accept: "video/*,.mkv,.m2ts"
      }), (0, _v1.jsx)(_v5.IconButton, {
        "aria-label": _v10,
        "data-testid": `${_v3}-mobile`,
        display: {
          base: "inline-flex",
          md: "none"
        },
        icon: (0, _v1.jsx)(_v6.Upload, {}),
        variant: "secondary",
        size: "md",
        onClick: _v9,
        isDisabled: _v8
      }), (0, _v1.jsx)(_v3.Button, {
        "data-testid": _v3,
        display: {
          base: "none",
          md: "inline-flex"
        },
        variant: "secondary",
        size: "md",
        onClick: _v9,
        isDisabled: _v8,
        children: _v10
      })]
    });
  }]);
}