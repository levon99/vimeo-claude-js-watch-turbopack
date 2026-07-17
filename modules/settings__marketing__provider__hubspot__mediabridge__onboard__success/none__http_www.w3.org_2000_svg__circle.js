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
    _v12 = _v0.i(0);
  let _v13 = () => (0, _v1.jsxs)("svg", {
    width: "128",
    height: "128",
    viewBox: "0 0 128 128",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, _v1.jsx)("circle", {
      cx: "64",
      cy: "64",
      r: "64",
      fill: "#EEF1F4"
    }), (0, _v1.jsx)("path", {
      d: "M54.8343 45.3766L55.2726 46.0965H56.1155H91.5244C93.4574 46.0965 95.0244 47.6636 95.0244 49.5965V89.3321C95.0244 91.2651 93.4574 92.8321 91.5244 92.8321H35C33.067 92.8321 31.5 91.2651 31.5 89.3321V42C31.5 40.067 33.067 38.5 35 38.5H49.2425C50.1148 38.5 50.9241 38.9547 51.3778 39.6998L52.659 38.9197L51.3778 39.6998L54.8343 45.3766Z",
      fill: "white",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M64.7832 70.7962C64.7832 71.105 64.6268 71.3906 64.3723 71.5462L54.4342 77.6234C54.1781 77.78 53.8616 77.7811 53.6044 77.6263C53.3473 77.4715 53.1888 77.1843 53.1888 76.8735V64.719C53.1888 64.4081 53.3473 64.121 53.6044 63.9662C53.8616 63.8113 54.1781 63.8125 54.4342 63.9691L64.3723 70.0463C64.6268 70.2019 64.7832 70.4875 64.7832 70.7962Z",
      fill: "#496073"
    }), (0, _v1.jsx)("path", {
      d: "M61.1572 20.0353C59.7738 21.2096 57.803 24.5833 60.9864 28.6836C64.1698 32.7839 62.1894 36.638 60.8014 38.0525",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M28 31.4565C28 31.4565 43.6652 34.1281 49.8662 52.5958",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M78 41C78 41 63 49.6329 63 72",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M92.9436 92.5H36.2417C34.0007 92.5 32.337 90.4232 32.8261 88.2361L38.6407 62.2361C38.9984 60.637 40.4177 59.5 42.0564 59.5H98.7583C100.999 59.5 102.663 61.5768 102.174 63.7639L96.3593 89.7639C96.0016 91.363 94.5823 92.5 92.9436 92.5Z",
      fill: "white",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M87.0869 36.3479C87.0869 36.3479 95.4813 31.9226 99.8412 37.3575C102.661 40.8724 98.6803 45.2319 96.1249 42.3742C91.6527 37.3731 102.21 29.8003 102.21 29.8003",
      stroke: "#496073",
      strokeWidth: "3",
      strokeLinecap: "square"
    })]
  });
  function _v14() {
    let _v0 = (0, _v4.useRouter)(),
      {
        sendActionEvent: _v1
      } = (0, _v12.useBpEvents)("integration_onboard_success", "vimeo.view_upload_success_screen");
    return (0, _v1.jsx)(_v9.Container, {
      children: (0, _v1.jsxs)(_v9.Wrapper, {
        children: [(0, _v1.jsx)(_v10.ConnectingToVimeo, {}), (0, _v1.jsx)(_v13, {}), (0, _v1.jsx)(_v6.Header, {
          size: "xl",
          marginBottom: "24",
          children: (0, _v7.translate)({
            singular: "Your video library is now available on HubSpot",
            dictionary: {
              es: {
                singular: "Su videoteca ya está disponible en HubSpot"
              },
              "de-DE": {
                singular: "Ihre Video Library ist jetzt auf HubSpot verfügbar"
              },
              "fr-FR": {
                singular: "Votre vidéothèque est maintenant disponible sur HubSpot"
              },
              "ja-JP": {
                singular: "動画ライブラリがHubSpotで利用できるようになりました"
              },
              "ko-KR": {
                singular: "이제 HubSpot에서 동영상 라이브러리를 사용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Sua biblioteca de Vídeos agora está disponível no HubSpot"
              },
              "zh-CN": {
                singular: "您的视频库现可在 HubSpot 上查看"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Link, {
          onClick: () => {
            _v1("vimeo.select_help_center", "learn how to", "learn how to"), _v0.push(_v11.HELP_ARTICLE);
          },
          children: (0, _v7.translate)({
            singular: "Learn how to use HubSpot with Vimeo",
            dictionary: {
              es: {
                singular: "Aprenda a utilizar HubSpot con Vimeo"
              },
              "de-DE": {
                singular: "Erfahren Sie, wie Sie HubSpot mit Vimeo nutzen können"
              },
              "fr-FR": {
                singular: "Apprenez à utiliser HubSpot avec Vimeo"
              },
              "ja-JP": {
                singular: "VimeoでHubSpotを使用する方法を学びましょう"
              },
              "ko-KR": {
                singular: "Vimeo와 함께 HubSpot을 사용하는 방법 알아보기"
              },
              "pt-BR": {
                singular: "Aprenda a usar o HubSpot com o Vimeo"
              },
              "zh-CN": {
                singular: "了解如何将 HubSpot 与 Vimeo 结合使用"
              }
            }
          })
        }), (0, _v1.jsxs)(_v9.ButtonWrapper, {
          children: [(0, _v1.jsx)(_v5.Button, {
            variant: "secondary",
            onClick: () => {
              _v1("vimeo.close_page", "close", "close"), window.close();
            },
            children: (0, _v7.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            })
          }), (0, _v1.jsx)(_v5.Button, {
            onClick: () => {
              _v1("vimeo.select_go_to_hubspot", "go to hubspot", "go to hubspot"), _v0.push(_v11.HUBSPOT_URL);
            },
            children: (0, _v7.translate)({
              singular: "Go to HubSpot",
              dictionary: {
                es: {
                  singular: "Ir a HubSpot"
                },
                "de-DE": {
                  singular: "Zu HubSpot"
                },
                "fr-FR": {
                  singular: "Accéder à HubSpot"
                },
                "ja-JP": {
                  singular: "HubSpotに移動"
                },
                "ko-KR": {
                  singular: "HubSpot으로 이동"
                },
                "pt-BR": {
                  singular: "Ir para o HubSpot"
                },
                "zh-CN": {
                  singular: "前往 HubSpot"
                }
              }
            })
          })]
        })]
      })
    });
  }
  let _v15 = () => (0, _v1.jsx)(_v14, {});
  _v15.getLayout = _v3.getLayout, (0, _v2.withPageSetup)({
    requireLogin: !0,
    capability: "hasMarketingSettings",
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v15], 0);
}