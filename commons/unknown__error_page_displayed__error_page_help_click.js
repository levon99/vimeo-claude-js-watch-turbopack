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
  let _v9 = () => {
    let _v0 = (0, _v6.usePico)(),
      _v1 = function () {
        let _v0 = (0, _v7.useViewer)();
        try {
          return (0, _v8.deriveCanonicalPage)(new URL(window.location.href), {
            is_team_user: _v0?.user?.isTeamUser ?? !1
          });
        } catch {
          return "unknown";
        }
      }();
    return {
      trackErrorPageDisplayed: (0, _v5.useCallback)(_v0 => {
        null !== _v0 && _v0.track("error_page_displayed", {
          error_page_type: _v0.errorPageType,
          error_page_error_code: _v0.errorPageErrorCode,
          error_page_location: _v1,
          error_type: _v0.errorType
        });
      }, [_v0, _v1]),
      trackErrorPageHelpClick: (0, _v5.useCallback)(_v0 => {
        null !== _v0 && _v0.track("error_page_help_click", {
          error_page_type: _v0.errorPageType,
          error_page_error_code: _v0.errorPageErrorCode,
          error_page_location: _v1,
          error_type: _v0.errorType
        });
      }, [_v0, _v1])
    };
  };
  _v0.s(["useErrorPageTracking", 0, _v9], 0);
  let _v10 = "https://help.vimeo.com/hc/en-us/articles/49270441889425-Troubleshooting-Sorry-we-couldn-t-find-that-page";
  _v0.s(["PAGE_NOT_FOUND_HELP_URL", 0, _v10, "PageNotFoundHelpButton", 0, ({
    shouldTrack: _v0 = !0,
    ..._v1
  }) => {
    let {
      trackErrorPageHelpClick: _v2
    } = _v9();
    return (0, _v1.jsx)(_v2.Box, {
      display: "flex",
      justifyContent: "center",
      mb: "lg",
      children: (0, _v1.jsx)(_v3.Button, {
        as: "a",
        variant: "brand",
        size: "md",
        href: _v10,
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: () => {
          _v0 && _v2(_v1);
        },
        children: (0, _v4.translate)({
          singular: "Why am I seeing this?",
          dictionary: {
            es: {
              singular: "¿Por qué estoy viendo esto?"
            },
            "de-DE": {
              singular: "Warum sehe ich das?"
            },
            "fr-FR": {
              singular: "Pourquoi est-ce que je vois ceci ?"
            },
            "ja-JP": {
              singular: "なぜこれが表示されているのですか？"
            },
            "ko-KR": {
              singular: "왜 이 메시지가 표시되나요?"
            },
            "pt-BR": {
              singular: "Por que estou vendo isso?"
            },
            "zh-CN": {
              singular: "为什么我会看到这个?"
            }
          }
        })
      })
    });
  }], 0);
}