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
  async function _v9(_v0, _v1) {
    let _v2 = {
        method: _v1.method || "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/vnd.vimeo.*;version=3.4.1",
          ..._v1.headers
        },
        body: _v1.body || void 0
      },
      _v3 = await fetch(_v0, _v2);
    if (!_v3.ok) throw Error(`Request failed: ${_v3.status} ${_v3.statusText}`);
    let _v4 = await _v3.json();
    return (0, _v8.standardizeResponseObject)(_v4);
  }
  let _v10 = (_v0, _v1) => "video_count" === _v1 ? _v0.length : _v0.reduce((_v0, _v1) => _v0 + Math.max("number" != typeof _v1.size || Number.isNaN(_v1.size) ? 0 : _v1.size, 0), 0),
    _v11 = ["Your account doesn't have enough free space to upload this video", "You have reached the storage limit for private or embeddable videos"],
    _v12 = ({
      targetUserId: _v0,
      onQuotaReached: _v1
    }) => {
      let {
          addShouldUploadStartCallback: _v2,
          uploads: _v3
        } = (0, _v7.useUploader)(),
        _v4 = (0, _v6.useViewer)(),
        _v5 = (0, _v2.useRef)(new Set()),
        {
          data: _v6,
          isLoading: _v7
        } = (0, _v4.useGetUser)(() => _v0 && "function" == typeof _v1 ? {
          where: {
            userId: _v0
          },
          select: ["uploadQuota"]
        } : null),
        _v8 = (0, _v2.useMemo)(() => _v6?.uploadQuota?.space?.unit ? (({
          uploads: _v0,
          targetUserId: _v1,
          unit: _v2
        }) => _v10(_v0.filter(_v0 => ("number" != typeof _v1 || _v0.targetUserId === _v1) && _v0.state !== _v5.STATES.CANCELED && _v0.state !== _v5.STATES.FAILED).map(({
          file: _v0
        }) => ({
          size: _v0.size
        })), _v2))({
          uploads: _v3,
          targetUserId: _v0,
          unit: _v6.uploadQuota.space.unit
        }) : 0, [_v3, _v0, _v6?.uploadQuota?.space?.unit]),
        _v9 = (0, _v2.useCallback)((_v0, _v1) => {
          if ("number" == typeof _v0 && _v1.targetUserId !== _v0) return !0;
          if (!_v6 || !_v6.uploadQuota?.space || !_v6.uploadQuota.space.unit || "number" != typeof _v6.uploadQuota.space.free || "function" != typeof _v1) return console.error("Missing quota prerequisites"), !1;
          let _v2 = Array.isArray(_v0) ? _v0 : Array.from(_v0),
            _v3 = _v10(_v2, _v6.uploadQuota.space.unit),
            _v4 = _v3 <= Math.max(_v6.uploadQuota.space.free - _v8, 0);
          return _v4 || ((({
            file: _v0,
            uploadAmount: _v1,
            fileCount: _v2,
            userId: _v3,
            jwt: _v4,
            token: _v5
          }) => {
            _v0 && "number" == typeof _v3 && _v4 && _v9("/upload_action?action=send_quota_email", {
              method: "POST",
              headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `jwt ${_v4}`
              },
              body: JSON.stringify({
                file_name: _v0.name ?? "",
                file_size: "number" == typeof _v0.size ? _v0.size : 0,
                total_size: _v1,
                file_count: _v2,
                user_id: _v3,
                token: _v5
              })
            }).catch(_v0 => {
              console.error("Failed to send quota email ", _v0);
            });
          })({
            file: _v2[0],
            uploadAmount: _v3,
            fileCount: _v2.length,
            userId: _v0,
            jwt: _v4?.jwt,
            token: _v4?.xsrft
          }), _v1(_v6.uploadQuota.space.unit, _v6.uploadQuota.space.showing)), _v4;
        }, [_v6, _v1, _v8, _v0, _v4?.jwt, _v4?.xsrft]);
      (0, _v2.useEffect)(() => {
        if ("function" == typeof _v1) return _v2(_v9);
      }, [_v2, _v1, _v9]);
      let _v10 = _v6?.uploadQuota?.space?.unit,
        _v11 = _v6?.uploadQuota?.space?.showing;
      return (0, _v2.useEffect)(() => {
        let _v0 = new Set(_v3.map(({
          id: _v0
        }) => _v0));
        _v5.current.forEach(_v0 => {
          _v0.has(_v0) || _v5.current.delete(_v0);
        }), _v3.some(_v0 => {
          let _v1,
            _v2 = _v0.state === _v5.STATES.FAILED && !_v5.current.has(_v0.id) && (_v1 = _v0.error, _v11.some(_v0 => _v1.includes(_v0)));
          return _v2 && _v5.current.add(_v0.id), _v2;
        }) && _v1?.(_v10 ?? void 0, _v11);
      }, [_v3, _v1, _v10, _v11]), {
        isLoading: _v7
      };
    };
  _v0.s(["useQuotaCheck", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = new Set();
  var _v16 = _v0.i(0);
  let _v17 = () => window.location.assign("/upgrade");
  _v0.s(["navigateToUpgrade", 0, _v17, "useReplaceWithModal", 0, function (_v0, _v1, _v2, _v3 = _v17, _v4, _v5 = "library", _v6) {
    let [_v7, _v8] = (0, _v2.useState)(null);
    _v12({
      targetUserId: _v4,
      onQuotaReached: _v1 ? _v3 : void 0
    });
    let {
      triggerReplace: _v9,
      replaceInput: _v10
    } = function (_v0, _v1, _v2, _v3, _v4 = "library") {
      let {
          upload: _v5
        } = (0, _v7.useUploader)(),
        _v6 = (0, _v2.useRef)(null),
        {
          trackReplaceVersion: _v7
        } = (0, _v13.useVideoManageTracking)();
      return (0, _v14.useUploadLifecycle)((_v0, _v1) => {
        if (!_v3 || "replace_clip" !== _v1.uploadType || _v1.clipId !== String(_v0) || _v15.has(_v1.id)) return;
        let _v2 = _v0 === _v5.STATES.COMPLETED ? "succeeded" : _v0 === _v5.STATES.FAILED ? "failed" : null;
        _v2 && (_v15.add(_v1.id), _v7({
          clipId: _v1.clipId,
          location: _v4,
          versionId: null,
          filename: _v1.file.name,
          filesize: _v1.file.size,
          uploadStatus: _v0,
          versionTranscodeStatus: null,
          status: _v2,
          error: "failed" === _v2 ? _v1.error ?? null : null
        }));
      }, [_v0, _v3, _v4, _v7]), {
        triggerReplace: (0, _v2.useCallback)(() => _v6.current?.click(), []),
        replaceInput: (0, _v1.jsx)("input", {
          ref: _v6,
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
            _v1 ? _v1(_v1[0], () => _v5(_v1, _v2)) : _v5(_v1, _v2);
          }
        })
      };
    }(_v0, _v1 ? (_v0, _v1) => _v8({
      file: _v0,
      proceed: _v1
    }) : void 0, _v4, _v1, _v5);
    return {
      triggerReplace: _v9,
      replaceInput: _v10,
      replaceModal: _v7 ? (0, _v1.jsx)(_v16.ReplaceModal, {
        onCancel: () => _v8(null),
        onConfirm: () => {
          _v7.proceed() && _v6?.(), _v8(null);
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
        fileToReplaceName: _v7.file.name,
        isInteractive: _v2
      }) : null
    };
  }], 0);
}