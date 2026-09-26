{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useOttRedirect", 0, function (_v0 = {}) {
    let {
        toast: _v1,
        config: _v2 = {},
        waitForRouter: _v3 = !0
      } = _v0,
      _v4 = (0, _v1.useRouter)(),
      [_v5, _v6] = (0, _v2.useState)(!1);
    return (0, _v2.useEffect)(() => {
      if (_v3 && !_v4.isReady) return;
      let _v0 = _v4.query && Object.keys(_v4.query).length > 0 && _v4.query.redirected_from ? "ott_admin" === String(_v4.query.redirected_from) : "ott_admin" === new URLSearchParams(window.location.search).get("redirected_from");
      if (_v6(_v0), _v0 && _v1) {
        let _v0 = "ott-redirect-toast";
        if (!_v1.isActive(_v0)) {
          let _v0 = (0, _v3.translate)({
            singular: "You have been redirected to the new Vimeo experience",
            dictionary: {
              es: {
                singular: "Se le ha redirigido a la nueva experiencia de Vimeo"
              },
              "de-DE": {
                singular: "Sie wurden zum neuen Vimeo-Erlebnis weitergeleitet."
              },
              "fr-FR": {
                singular: "Vous avez été redirigé vers la nouvelle expérience Vimeo"
              },
              "ja-JP": {
                singular: "新しいVimeoエクスペリエンスにリダイレクトされました"
              },
              "ko-KR": {
                singular: "새로운 Vimeo 환경으로 리디렉션되었습니다."
              },
              "pt-BR": {
                singular: "Passamos você para a nova experiência do Vimeo"
              },
              "zh-CN": {
                singular: "您已被重定向到新的 Vimeo 体验"
              }
            }
          });
          if (_v1(_v2.toastConfig || {
            id: _v0,
            title: _v2.message || _v0,
            variant: _v2.variant || "info",
            isClosable: _v2.isClosable ?? !1,
            duration: _v2.duration ?? 0
          }), _v4.query.redirected_from) {
            let {
              redirected_from: _v0,
              ..._v1
            } = _v4.query;
            _v4.replace({
              pathname: _v4.pathname,
              query: _v1
            }, void 0, {
              shallow: !0
            });
          } else if (1) {
            let _v0 = new URL(window.location.href);
            _v0.searchParams.delete("redirected_from"), window.history.replaceState({}, "", _v0.toString());
          }
        }
      }
    }, [_v4, _v1, _v2, _v3]), {
      isRedirectedFromOtt: _v5
    };
  }]);
}