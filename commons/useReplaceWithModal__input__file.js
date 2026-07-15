{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useReplaceWithModal", 0, function (_v0, _v1, _v2) {
    let [_v3, _v4] = (0, _v2.useState)(null),
      {
        triggerReplace: _v5,
        replaceInput: _v6
      } = function (_v0, _v1) {
        let {
            upload: _v2
          } = (0, _v4.useUploader)(),
          _v3 = (0, _v2.useRef)(null);
        return {
          triggerReplace: (0, _v2.useCallback)(() => _v3.current?.click(), []),
          replaceInput: (0, _v1.jsx)("input", {
            ref: _v3,
            type: "file",
            accept: "video/*",
            style: {
              display: "none"
            },
            onChange: _v0 => {
              let _v1 = Array.from(_v0.target.files ?? []);
              _v0.target.value = "", _v1.length && (_v1 ? _v1(_v1[0], () => _v2(_v1, {
                uploadType: "replace_clip",
                clipId: _v0
              })) : _v2(_v1, {
                uploadType: "replace_clip",
                clipId: _v0
              }));
            }
          })
        };
      }(_v0, _v1 ? (_v0, _v1) => _v4({
        file: _v0,
        proceed: _v1
      }) : void 0);
    return {
      triggerReplace: _v5,
      replaceInput: _v6,
      replaceModal: _v3 ? (0, _v1.jsx)(_v5.ReplaceModal, {
        onCancel: () => _v4(null),
        onConfirm: () => {
          _v3.proceed(), _v4(null);
        },
        primaryCtaText: (0, _v3.translate)({
          singular: "Replace",
          dictionary: {
            es: {
              singular: "Reemplazar"
            },
            "de-DE": {
              singular: "Ersetzen"
            },
            "fr-FR": {
              singular: "Remplacer"
            },
            "ja-JP": {
              singular: "置き換え"
            },
            "ko-KR": {
              singular: "변경"
            },
            "pt-BR": {
              singular: "Substituir"
            },
            "zh-CN": {
              singular: "更换"
            }
          }
        }),
        fileToReplaceName: _v3.file.name,
        isInteractive: _v2
      }) : null
    };
  }], 0);
}