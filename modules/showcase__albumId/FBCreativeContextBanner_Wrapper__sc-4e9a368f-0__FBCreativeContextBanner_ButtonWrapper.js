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
  let _v9 = _v4.default.div.withConfig({
      displayName: "FBCreativeContextBanner__Wrapper",
      componentId: "sc-4e9a368f-0"
    })`
  height: ${(0, _v2.rem)(64)};
  font-size: ${(0, _v2.rem)(14)};
  background: ${_v6.bokehTheme.colors.blue["600"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  @media (min-width: ${(0, _v2.rem)(768)}) {
    height: ${(0, _v2.rem)(32)};
  }
`,
    _v10 = _v4.default.div.withConfig({
      displayName: "FBCreativeContextBanner__ButtonWrapper",
      componentId: "sc-4e9a368f-1"
    })`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (min-width: ${(0, _v2.rem)(768)}) {
    width: unset;
  }
`,
    _v11 = (0, _v4.default)(_v8.Button).withConfig({
      displayName: "FBCreativeContextBanner__StyledButton",
      componentId: "sc-4e9a368f-2"
    })`
  margin: 0 ${(0, _v2.rem)(12)};
  background: ${_v6.bokehTheme.colors.blue["400"]};

  &:hover {
    background: ${_v6.bokehTheme.colors.blue["500"]};
  }
`,
    _v12 = (0, _v4.default)(_v8.Button).withConfig({
      displayName: "FBCreativeContextBanner__DoneWrapper",
      componentId: "sc-4e9a368f-3"
    })`
  color: ${_v6.bokehTheme.colors.white};

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
  _v0.s(["default", 0, function () {
    return (0, _v3.useEffect)(() => {
      _v5.BigPictureClient.sendEvent(new _v5.Event("view_blue_notification_for_fb_users", 1, {
        product: "Vimeo Create",
        location: "vimeo_website",
        path: window.location.pathname,
        type: "impression"
      }));
    }, []), (0, _v1.jsxs)(_v9, {
      children: [(0, _v7.translate)({
        singular: "Resume creating videos for your Facebook Business account?",
        dictionary: {
          es: {
            singular: "¿Deseas seguir creando videos para tu cuenta de Facebook Business?"
          },
          "de-DE": {
            singular: "Mit dem Erstellen von Videos für dein Facebook-Business-Konto fortfahren?"
          },
          "fr-FR": {
            singular: "Reprendre la création de vidéos pour votre compte Facebook Business ?"
          },
          "ja-JP": {
            singular: "Facebook Businessアカウントの動画作成を再開しますか？"
          },
          "ko-KR": {
            singular: "Facebook 비즈니스 계정을 위한 동영상 제작을 계속할까요?"
          },
          "pt-BR": {
            singular: "Retomar a criação de vídeos para sua conta do Facebook Business?"
          },
          "zh-CN": {
            singular: "继续为您的 Facebook Business 账户创建视频？"
          }
        }
      }), " ", (0, _v1.jsxs)(_v10, {
        children: [(0, _v1.jsx)(_v11, {
          size: "xs",
          onClick: () => {
            _v5.BigPictureClient.sendEvent(new _v5.Event("click_on_blue_notification_for_fb_users", 1, {
              product: "Vimeo Create",
              location: "vimeo_website",
              cta: "create_new_video",
              path: window.location.pathname,
              type: "click"
            })).then(() => {
              window.location.href = "/create/templates";
            });
          },
          children: (0, _v7.translate)({
            singular: "Create new video",
            dictionary: {
              es: {
                singular: "Crear un video nuevo"
              },
              "de-DE": {
                singular: "Neues Video erstellen"
              },
              "fr-FR": {
                singular: "Créer une nouvelle vidéo"
              },
              "ja-JP": {
                singular: "新しい動画を作成"
              },
              "ko-KR": {
                singular: "새 동영상 만들기"
              },
              "pt-BR": {
                singular: "Criar um novo vídeo"
              },
              "zh-CN": {
                singular: "创建新视频"
              }
            }
          })
        }), (0, _v1.jsx)(_v12, {
          size: "xs",
          variant: "hyperminimal",
          onClick: () => {
            document.cookie = "create_fb_context=1;path=/;Max-Age=-99999999;", _v5.BigPictureClient.sendEvent(new _v5.Event("click_on_blue_notification_for_fb_users", 1, {
              product: "Vimeo Create",
              location: "vimeo_website",
              cta: "im_done",
              path: window.location.pathname,
              type: "click"
            })).then(() => {
              window.location.reload();
            });
          },
          children: (0, _v7.translate)({
            singular: "I'm done",
            dictionary: {
              es: {
                singular: "Terminé"
              },
              "de-DE": {
                singular: "Ich bin fertig"
              },
              "fr-FR": {
                singular: "J'ai fini"
              },
              "zh-CN": {
                singular: "我完成了"
              }
            }
          })
        })]
      })]
    });
  }]);
}