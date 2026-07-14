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
    _v10 = _v0.i(0);
  let _v11 = () => (0, _v1.jsxs)("svg", {
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
      d: "M72.4204 39.2649L72.7249 39.8516L73.3634 40.0227L97.9065 46.599C99.7737 47.0993 100.882 49.0185 100.381 50.8856L91.9843 82.2241C91.484 84.0912 89.5648 85.1993 87.6977 84.699L40.8267 72.1399C38.9596 71.6396 37.8516 69.7204 38.3519 67.8533L48.6245 29.5152C49.1248 27.6481 51.044 26.54 52.9111 27.0403L67.1367 30.8521C67.8147 31.0337 68.385 31.492 68.7085 32.115L72.4204 39.2649Z",
      fill: "white",
      stroke: "#496073",
      strokeWidth: "3"
    }), (0, _v1.jsx)("path", {
      d: "M57.0084 52.9003L57.4545 53.3881H58.1155H83.5244C85.4574 53.3881 87.0244 54.9551 87.0244 56.8881V89.3321C87.0244 91.2651 85.4574 92.8321 83.5244 92.8321H35C33.067 92.8321 31.5 91.2651 31.5 89.3321V49.6416C31.5 47.7086 33.067 46.1416 35 46.1416H49.7274C50.4293 46.1416 51.0988 46.4367 51.5725 46.9547L57.0084 52.9003Z",
      fill: "white",
      stroke: "#496073",
      strokeWidth: "3"
    })]
  });
  function _v12() {
    let _v0 = (0, _v3.useRouter)(),
      {
        sendActionEvent: _v1
      } = (0, _v10.useBpEvents)("integration_onboard_fail", "vimeo.view_upload_failure_screen");
    return (0, _v1.jsx)(_v7.Container, {
      children: (0, _v1.jsxs)(_v7.Wrapper, {
        children: [(0, _v1.jsx)(_v8.ConnectingToVimeo, {}), (0, _v1.jsx)(_v11, {}), (0, _v1.jsx)(_v5.Header, {
          size: "xl",
          marginBottom: "24",
          children: (0, _v6.translate)({
            singular: "We identified an issue",
            dictionary: {
              es: {
                singular: "Identificamos un problema"
              },
              "de-DE": {
                singular: "Hoppla, hierbei gab es ein Problem."
              },
              "fr-FR": {
                singular: "Nous avons identifié un problème"
              },
              "ja-JP": {
                singular: "問題が特定されました"
              },
              "ko-KR": {
                singular: "문제가 발견되었습니다."
              },
              "pt-BR": {
                singular: "Identificamos um problema"
              },
              "zh-CN": {
                singular: "我们发现了一个问题"
              }
            }
          })
        }), (0, _v1.jsx)(_v5.Header, {
          size: "xl",
          marginBottom: "24",
          children: (0, _v6.translate)({
            singular: "Please try again.",
            dictionary: {
              es: {
                singular: "Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Bitte versuche es nochmal."
              },
              "fr-FR": {
                singular: "Veuillez essayer à nouveau."
              },
              "ja-JP": {
                singular: "再度お試しください。"
              },
              "ko-KR": {
                singular: "다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "请重试。"
              }
            }
          })
        }), (0, _v1.jsxs)(_v7.ButtonWrapper, {
          children: [(0, _v1.jsx)(_v4.Button, {
            onClick: () => {
              _v1("vimeo.close_page", "close", "close", 2), window.close();
            },
            variant: "secondary",
            children: (0, _v6.translate)({
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
          }), (0, _v1.jsx)(_v4.Button, {
            onClick: () => {
              _v1("vimeo.select_retry_onboarding", "retry", "retry", 2), _v0.push({
                pathname: _v9.ONBOARD_URL,
                query: {
                  flow: "retry_connecting"
                }
              });
            },
            children: (0, _v6.translate)({
              singular: "Retry",
              dictionary: {
                es: {
                  singular: "Reintentar"
                },
                "de-DE": {
                  singular: "Neuer Versuch"
                },
                "fr-FR": {
                  singular: "Réessayer"
                },
                "ja-JP": {
                  singular: "再試行"
                },
                "ko-KR": {
                  singular: "재시도"
                },
                "pt-BR": {
                  singular: "TENTAR NOVAMENTE"
                },
                "zh-CN": {
                  singular: "重试"
                }
              }
            })
          })]
        })]
      })
    });
  }
  var _v13 = _v0.i(0);
  let _v14 = () => (0, _v1.jsx)(_v12, {});
  _v14.getLayout = _v13.getLayout, (0, _v2.withPageSetup)({
    requireLogin: !0,
    capability: "hasMarketingSettings"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v14], 0);
}