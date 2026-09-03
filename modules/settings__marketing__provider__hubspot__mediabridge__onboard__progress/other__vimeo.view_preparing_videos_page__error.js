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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  function _v20() {
    let _v0 = (0, _v6.useContext)(_v14.ViewerContext),
      _v1 = (0, _v4.useRouter)(),
      _v2 = _v1?.query?.import_uuid,
      _v3 = _v1?.query?.archive_uuid,
      _v4 = Array.isArray(_v1?.query?.flow) ? _v1.query.flow[0] : _v1?.query?.flow,
      [_v5, _v6] = (0, _v6.useState)(""),
      [_v7, _v8] = (0, _v6.useState)(""),
      {} = (0, _v19.useBpEvents)("other", "vimeo.view_preparing_videos_page");
    (0, _v13.usePoll)(() => {
      (0, _v15.getHubSpotMediaBridgeJob)(_v2, _v0?.xsrft || "").then(_v0 => _v6(_v0.job_status || ""));
    }, !!(_v2 && _v0?.xsrft && !_v18.DONE_STATUS.includes(_v5))), (0, _v13.usePoll)(() => {
      (0, _v15.getHubSpotMediaBridgeJob)(_v3, _v0?.xsrft || "").then(_v0 => _v8(_v0.job_status || ""));
    }, !!(_v3 && _v0?.xsrft && !_v18.DONE_STATUS.includes(_v7)));
    let _v9 = (0, _v6.useMemo)(() => {
      let _v0 = 0;
      return _v5 && _v18.STATUS_PERCENTAGE[_v5] && (_v0 += _v18.STATUS_PERCENTAGE[_v5]), _v7 && _v18.STATUS_PERCENTAGE[_v7] && (_v0 += _v18.STATUS_PERCENTAGE[_v7]), _v5 && _v7 && (_v0 /= 2), _v0;
    }, [_v7, _v5]);
    (0, _v6.useEffect)(() => {
      if (!_v5 && !_v7) return;
      let _v0 = !_v5 || _v18.DONE_STATUS.includes(_v5),
        _v1 = !_v7 || _v18.DONE_STATUS.includes(_v7);
      _v0 && _v1 && _v1.push({
        pathname: _v9 === _v18.STATUS_PERCENTAGE[_v18.STATUS_COMPLETED] ? _v18.ONBOARD_SUCCESS_URL : _v18.ONBOARD_ERROR_URL,
        query: {
          flow: _v4
        }
      });
    }, [_v7, _v4, _v5, _v9, _v1]);
    let _v10 = !_v2 && !_v3 || !_v0?.xsrft || _v18.ERROR_STATUS.includes(_v5) || _v18.ERROR_STATUS.includes(_v7);
    return (0, _v1.jsx)(_v16.Container, {
      children: (0, _v1.jsxs)(_v16.Wrapper, {
        children: [_v10 && (0, _v1.jsx)(_v9.Alert, {
          status: "error",
          children: (0, _v1.jsx)(_v10.AlertDescription, {
            children: (0, _v12.translate)({
              singular: "Something went wrong!",
              dictionary: {
                es: {
                  singular: "¡Se produjo un error!"
                },
                "de-DE": {
                  singular: "Hier ist etwas schiefgelaufen."
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite !"
                },
                "ja-JP": {
                  singular: "エラーが発生しました。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다!"
                },
                "pt-BR": {
                  singular: "Algo deu errado!"
                },
                "zh-CN": {
                  singular: "出了点问题！"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v17.ConnectingToVimeo, {}), (0, _v1.jsx)(_v21, {
          children: (0, _v1.jsx)(_v11.Progress, {
            value: _v9,
            variant: _v9 === _v18.STATUS_PERCENTAGE[_v18.STATUS_COMPLETED] ? "success" : "primary"
          })
        }), (0, _v1.jsx)(_v8.Header, {
          size: "xl",
          marginBottom: "24",
          children: (0, _v12.translate)({
            singular: "Preparing your video library...",
            dictionary: {
              es: {
                singular: "Preparando su videoteca..."
              },
              "de-DE": {
                singular: "Vorbereiten Ihrer Video Library …"
              },
              "fr-FR": {
                singular: "Préparation de votre vidéothèque…"
              },
              "ja-JP": {
                singular: "動画ライブラリを準備しています..."
              },
              "ko-KR": {
                singular: "동영상 라이브러리 준비 중..."
              },
              "pt-BR": {
                singular: "Preparando sua biblioteca de vídeos..."
              },
              "zh-CN": {
                singular: "正在准备您的视频库..."
              }
            }
          })
        }), (0, _v12.translate)({
          singular: "This may take a moment. Your videos will be ready soon.",
          dictionary: {
            es: {
              singular: "Esto puede llevar un momento. Sus vídeos estarán listos en breve."
            },
            "de-DE": {
              singular: "Dies kann einen Moment dauern. Ihre Videos sind gleich bereit."
            },
            "fr-FR": {
              singular: "Cela peut prendre quelques instants. Vos vidéos seront bientôt prêtes."
            },
            "ja-JP": {
              singular: "少々お待ちください。まもなく動画が視聴可能となります。"
            },
            "ko-KR": {
              singular: "잠시만 기다려주세요. 곧 동영상이 준비됩니다."
            },
            "pt-BR": {
              singular: "Isso pode levar algum tempo. Seus vídeos estarão prontos em breve."
            },
            "zh-CN": {
              singular: "这可能需要一些时间。您的视频即将准备就绪。"
            }
          }
        })]
      })
    });
  }
  let _v21 = _v7.default.div.withConfig({
      displayName: "ProgressScreen__ProgressWrapper",
      componentId: "sc-21600714-0"
    })`
  width: 30%;
  min-width: ${(0, _v5.rem)(240)};
  margin: ${(0, _v5.rem)(48)};
`,
    _v22 = () => (0, _v1.jsx)(_v20, {});
  _v22.getLayout = _v3.getLayout, (0, _v2.withPageSetup)({
    requireLogin: !0,
    capability: "canConnectToHubspotMediaBridge",
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v22], 0);
}