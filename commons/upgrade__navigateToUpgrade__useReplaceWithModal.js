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
  let _v9 = new Set();
  var _v10 = _v0.i(0);
  let _v11 = () => window.location.assign("/upgrade");
  _v0.s(["navigateToUpgrade", 0, _v11, "useReplaceWithModal", 0, function (_v0, _v1, _v2, _v3 = _v11, _v4) {
    let [_v5, _v6] = (0, _v2.useState)(null);
    (0, _v4.useQuotaCheck)({
      targetUserId: _v4,
      onQuotaReached: _v1 ? _v3 : void 0
    });
    let {
      triggerReplace: _v7,
      replaceInput: _v8
    } = function (_v0, _v1, _v2, _v3) {
      let {
          upload: _v4
        } = (0, _v7.useUploader)(),
        _v5 = (0, _v2.useRef)(null),
        {
          trackReplaceVersion: _v6
        } = (0, _v5.useVideoManageTracking)();
      return (0, _v8.useUploadLifecycle)((_v0, _v1) => {
        if (!_v3 || "replace_clip" !== _v1.uploadType || _v1.clipId !== String(_v0) || _v9.has(_v1.id)) return;
        let _v2 = _v0 === _v6.STATES.COMPLETED ? "succeeded" : _v0 === _v6.STATES.FAILED ? "failed" : null;
        _v2 && (_v9.add(_v1.id), _v6({
          clipId: _v1.clipId,
          versionId: null,
          filename: _v1.file.name,
          filesize: _v1.file.size,
          uploadStatus: _v0,
          versionTranscodeStatus: null,
          status: _v2,
          error: "failed" === _v2 ? _v1.error ?? null : null
        }));
      }, [_v0, _v3, _v6]), {
        triggerReplace: (0, _v2.useCallback)(() => _v5.current?.click(), []),
        replaceInput: (0, _v1.jsx)("input", {
          ref: _v5,
          type: "file",
          accept: "video/*",
          style: {
            display: "none"
          },
          onChange: _v0 => {
            let _v1 = Array.from(_v0.target.files ?? []);
            if (_v0.target.value = "", !_v1.length) return;
            let _v2 = {
              uploadType: "replace_clip",
              clipId: _v0,
              ...(_v2 && {
                targetUserId: _v2
              })
            };
            _v1 ? _v1(_v1[0], () => _v4(_v1, _v2)) : _v4(_v1, _v2);
          }
        })
      };
    }(_v0, _v1 ? (_v0, _v1) => _v6({
      file: _v0,
      proceed: _v1
    }) : void 0, _v4, _v1);
    return {
      triggerReplace: _v7,
      replaceInput: _v8,
      replaceModal: _v5 ? (0, _v1.jsx)(_v10.ReplaceModal, {
        onCancel: () => _v6(null),
        onConfirm: () => {
          _v5.proceed(), _v6(null);
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
        fileToReplaceName: _v5.file.name,
        isInteractive: _v2
      }) : null
    };
  }], 0);
}