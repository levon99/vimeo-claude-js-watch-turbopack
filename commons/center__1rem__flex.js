{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  class _v7 extends _v2.Component {
    state = {
      error: null
    };
    componentDidCatch(_v0, _v1) {
      this.setState({
        error: _v0
      }), (0, _v6.sendPlayerError)(_v0);
    }
    render() {
      let {
          viewer: _v0
        } = this.props,
        {
          error: _v1
        } = this.state;
      return _v1 ? (0, _v1.jsxs)(_v5.ResponsiveBox, {
        alignItems: "center",
        alignSelf: "center",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        p: "16px",
        children: [(0, _v1.jsx)(_v4.Box, {
          children: (0, _v3.translate)({
            singular: "Oops! Something went wrong. Please try again.",
            dictionary: {
              es: {
                singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
              },
              "fr-FR": {
                singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
              },
              "ja-JP": {
                singular: "エラーが発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "哎呀，出错了。请重试。"
              }
            }
          })
        }), _v0?.user?.badge?.type === "staff" ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v4.Box, {
            children: _v1?.name
          }), (0, _v1.jsx)(_v4.Box, {
            children: _v1?.message
          })]
        }) : null]
      }) : this.props.children;
    }
  }
  _v0.s(["ErrorBoundary", 0, _v7]);
}