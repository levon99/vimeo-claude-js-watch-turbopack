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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = {
      pageTitle: {
        preRecording: (0, _v13.translate)({
          singular: "Vimeo | Ready to record",
          dictionary: {
            es: {
              singular: "Vimeo | Listo para grabar"
            },
            "de-DE": {
              singular: "Vimeo | Bereit für die Aufnahme"
            },
            "fr-FR": {
              singular: "Vimeo | Paré à l'enregistrement"
            },
            "ja-JP": {
              singular: "Vimeo | 録画準備完了"
            },
            "ko-KR": {
              singular: "Vimeo | 녹화 준비 완료"
            },
            "pt-BR": {
              singular: "Vimeo | Pronto para gravar"
            },
            "zh-CN": {
              singular: "Vimeo | 准备录制"
            }
          }
        }),
        recording: (0, _v13.translate)({
          singular: "Vimeo | Recording...",
          dictionary: {
            es: {
              singular: "Vimeo | Grabando..."
            },
            "de-DE": {
              singular: "Vimeo | Aufzeichnung läuft ..."
            },
            "fr-FR": {
              singular: "Vimeo | Enregistrement…"
            },
            "ja-JP": {
              singular: "Vimeo | 録画中..."
            },
            "ko-KR": {
              singular: "Vimeo | 녹화 중..."
            },
            "pt-BR": {
              singular: "Vimeo | Gravando..."
            },
            "zh-CN": {
              singular: "Vimeo | 正在录制..."
            }
          }
        }),
        paused: (0, _v13.translate)({
          singular: "Vimeo | Paused",
          dictionary: {
            es: {
              singular: "Vimeo | En pausa"
            },
            "de-DE": {
              singular: "Vimeo | Pausiert"
            },
            "fr-FR": {
              singular: "Vimeo | En pause"
            },
            "ja-JP": {
              singular: "Vimeo | 一時停止中"
            },
            "ko-KR": {
              singular: "Vimeo | 일시 중지"
            },
            "pt-BR": {
              singular: "Vimeo | Pausado"
            },
            "zh-CN": {
              singular: "Vimeo | 已暂停"
            }
          }
        }),
        uploading: (0, _v13.translate)({
          singular: "Vimeo | Uploading",
          dictionary: {
            es: {
              singular: "Vimeo | Subiendo"
            },
            "de-DE": {
              singular: "Vimeo | Upload läuft"
            },
            "fr-FR": {
              singular: "Vimeo | Mise en ligne"
            },
            "ja-JP": {
              singular: "Vimeo | アップロード中"
            },
            "ko-KR": {
              singular: "Vimeo | 업로드 중"
            },
            "pt-BR": {
              singular: "Vimeo | Carregando"
            },
            "zh-CN": {
              singular: "Vimeo | 正在上传"
            }
          }
        })
      }
    },
    _v15 = "record_session_id",
    _v16 = () => {
      let [_v0, _v1] = (0, _v4.useState)(null),
        [_v2, _v3] = (0, _v4.useState)(null),
        _v4 = (0, _v3.useRouter)(),
        _v5 = (0, _v4.useContext)(_v12.ViewerContext),
        {
          trackRecordingPageDisplayed: _v6
        } = (0, _v9.useRecordingTracking)(),
        _v7 = window.location.pathname;
      return (0, _v4.useEffect)(() => {
        if (_v4.isReady) if ("string" == typeof _v4.query[_v15]) _v1(_v4.query[_v15]);else {
          let _v0 = (0, _v6.v4)();
          _v4.replace({
            pathname: _v4.route,
            query: {
              ..._v4.query,
              [_v15]: _v0
            }
          });
        }
      }, [_v4]), (0, _v8.usePicoEffect)(() => {
        _v6();
      }, [], {
        once: !0
      }), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v2.default, {
          children: (0, _v1.jsx)("title", {
            children: (_v0 => {
              switch (_v0) {
                case "pre-recording":
                default:
                  return _v14.pageTitle.preRecording;
                case "recording":
                  return _v14.pageTitle.recording;
                case "paused":
                  return _v14.pageTitle.paused;
                case "uploading":
                  return _v14.pageTitle.uploading;
              }
            })(_v2)
          })
        }), _v5 && _v5.user && _v0 && (0, _v1.jsx)(_v10.RecordStudio, {
          mode: "standalone",
          sessionId: _v0,
          onStateChange: _v3
        }), _v5 && !_v5.user && (0, _v1.jsx)(_v5.ThemeProvider, {
          theme: _v7.themes.light,
          children: (0, _v1.jsx)(_v11.LoginJoinModal, {
            type: "join",
            xsrft: _v5.xsrft,
            redirectUrl: _v7,
            redirectUrlAfterSocialLogin: _v7,
            onSuccess: () => {
              _v7 && (window.location.href = _v7);
            },
            disableDismiss: !0,
            isShowing: !_v5.user
          })
        })]
      });
    };
  _v16.getLayout = _v0 => _v0, _v0.s(["RecordStudioPage", 0, _v16, "SESSION_ID", 0, _v15], 0);
}