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
    _v9 = function (_v0) {
      return _v8.default.createElement("svg", (0, _v7.c)({
        viewBox: "0 0 160 138"
      }, _v0), _v8.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _v8.default.createElement("circle", {
        fillOpacity: ".069",
        fill: "#00ADEF",
        fillRule: "nonzero",
        cx: "80",
        cy: "69",
        r: "69"
      }), _v8.default.createElement("path", {
        fill: "#D6D6D6",
        d: "M153.522 36.084l-3.886 1.299 3.886 1.298 1.296 3.893 1.295-3.893L160 37.383l-3.886-1.299-1.295-3.893zM131.171 28.947c0-1.075.87-1.947 1.943-1.947 1.074 0 1.944.872 1.944 1.947 0 1.075-.87 1.947-1.944 1.947a1.945 1.945 0 0 1-1.943-1.947"
      }), _v8.default.createElement("path", {
        d: "M142.554 54.992c0-3.598-2.93-6.533-6.522-6.533 3.592 0 6.522-2.935 6.522-6.534 0 3.599 2.93 6.534 6.52 6.534-3.59 0-6.52 2.935-6.52 6.533z",
        stroke: "#1A2E3B",
        strokeWidth: "1.296"
      }), _v8.default.createElement("path", {
        fill: "#1A2E3B",
        d: "M115.105 30.368l.79 2.374 2.368.79-2.369.792-.79 2.373-.789-2.373-2.369-.791 2.37-.791zM137.763 69.18l.841 1.54 1.538.844-1.538.842-.841 1.54-.84-1.54-1.539-.842 1.538-.843zM138.402 75.171a.629.629 0 1 1-.89.894.629.629 0 0 1 .89-.894"
      }), _v8.default.createElement("path", {
        d: "M33.463 33.025a.63.63 0 1 1-.89.894.63.63 0 0 1 .89-.894",
        fill: "#E8EAEB"
      }), _v8.default.createElement("path", {
        fill: "#D6D6D6",
        d: "M3.886 47.116L0 48.415l3.886 1.298 1.296 3.893 1.296-3.893 3.886-1.298-3.886-1.299-1.296-3.893z"
      }), _v8.default.createElement("path", {
        d: "M22.024 40.628c0-1.075.87-1.947 1.944-1.947 1.073 0 1.943.872 1.943 1.947 0 1.075-.87 1.946-1.943 1.946a1.945 1.945 0 0 1-1.944-1.946",
        fill: "#1A2E3B"
      }), _v8.default.createElement("path", {
        d: "M24.011 66.672c0-3.597-2.93-6.532-6.521-6.532 3.592 0 6.521-2.935 6.521-6.534 0 3.599 2.93 6.534 6.521 6.534-3.591 0-6.521 2.935-6.521 6.532z",
        stroke: "#1A2E3B",
        strokeWidth: "1.296"
      }), _v8.default.createElement("path", {
        fill: "#E8EAEB",
        d: "M32.824 27l.841 1.54 1.538.843-1.538.842-.841 1.54-.84-1.54-1.539-.842 1.538-.843z"
      }), _v8.default.createElement("g", null, _v8.default.createElement("path", {
        stroke: "#1A2E3B",
        strokeWidth: "2.592",
        fill: "#EEF1F2",
        d: "M38.198 102.351h83.563V46.543H38.198z"
      }), _v8.default.createElement("path", {
        d: "M60.222 91.32h53.118-53.118z",
        fill: "#E8EAEB"
      }), _v8.default.createElement("path", {
        d: "M113.34 91.32H60.222",
        stroke: "#1A2E3B",
        strokeWidth: "2.592"
      }), _v8.default.createElement("path", {
        fill: "#1A2E3B",
        d: "M55.04 90.344l-8.42-4.865v9.734z"
      }))));
    },
    _v10 = _v0.i(0);
  let _v11 = _v3.default.div.withConfig({
      displayName: "no-content__EmptyStateWrapper",
      componentId: "sc-3543f25a-0"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`,
    _v12 = _v3.default.div.withConfig({
      displayName: "no-content__EmptyStateTextWrapper",
      componentId: "sc-3543f25a-1"
    })`
  margin-top: ${(0, _v2.rem)(50)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`,
    _v13 = () => (0, _v1.jsxs)(_v11, {
      children: [(0, _v1.jsx)(_v9, {
        width: "160",
        height: "138"
      }), (0, _v1.jsxs)(_v12, {
        children: [(0, _v1.jsx)(_v4.Header, {
          as: "h3",
          size: "lg",
          fontWeight: "regular",
          marginBottom: "21",
          children: (0, _v6.translate)({
            singular: "Nothing has been shared with you yet.",
            dictionary: {
              es: {
                singular: "No han compartido nada contigo todavía."
              },
              "de-DE": {
                singular: "Es wurde noch nichts mit dir geteilt."
              },
              "fr-FR": {
                singular: "Aucun contenu n'a été partagé avec vous pour le moment."
              },
              "ja-JP": {
                singular: "まだ何も共有されていません。"
              },
              "ko-KR": {
                singular: "공유된 콘텐츠가 없습니다."
              },
              "pt-BR": {
                singular: "Nada foi compartilhado com você ainda."
              },
              "zh-CN": {
                singular: "尚未与您分享任何内容。"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.Header, {
          as: "h3",
          size: "lg",
          fontWeight: "regular",
          children: (0, _v6.translate)({
            singular: "Contact the team owner to get access to content.",
            dictionary: {
              es: {
                singular: "Ponte en contacto con el propietario del equipo para obtener acceso al contenido."
              },
              "de-DE": {
                singular: "Wende dich an den Teambesitzer, um Zugriff zu Inhalten zu erhalten."
              },
              "fr-FR": {
                singular: "Contactez le propriétaire de l'équipe pour accéder au contenu."
              },
              "ja-JP": {
                singular: "チーム所有者に問い合わせ、コンテンツにアクセスしてください。"
              },
              "ko-KR": {
                singular: "콘텐츠에 액세스하려면 팀 소유자에게 문의하세요."
              },
              "pt-BR": {
                singular: "Entre em contato com o proprietário da equipe para obter acesso ao conteúdo."
              },
              "zh-CN": {
                singular: "请联系团队所有者获取内容访问权限。"
              }
            }
          })
        })]
      })]
    });
  _v13.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v5.DefaultNavigation, {}), _v0, (0, _v1.jsx)(_v10.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v13], 0);
}