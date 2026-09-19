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
  let _v11 = _v4.default.div.withConfig({
      displayName: "CreatePageTeamMemberPrivilegesBanner__Wrapper",
      componentId: "sc-92efd24c-0"
    })`
  height: ${(0, _v2.rem)(56)};
  background: ${_v6.bokehTheme.colors.blue["600"]};
  display: flex;
  align-items: center;
  justify-content: center;
`,
    _v12 = _v4.default.div.withConfig({
      displayName: "CreatePageTeamMemberPrivilegesBanner__TextContent",
      componentId: "sc-92efd24c-1"
    })`
  color: ${_v6.bokehTheme.colors.white};
  font-size: ${(0, _v2.rem)(14)};
  font-weight: 400;
  line-height: ${(0, _v2.rem)(20)};
  letter-spacing: -${(0, _v2.rem)(.2)};
  text-align: left;
  max-width: ${({
      largeSize: _v0
    }) => _v0 ? (0, _v2.rem)(580) : (0, _v2.rem)(528)};
`,
    _v13 = _v4.default.a.withConfig({
      displayName: "CreatePageTeamMemberPrivilegesBanner__ButtonWrapper",
      componentId: "sc-92efd24c-2"
    })`
  text-decoration: none;
  outline: none;
`,
    _v14 = (0, _v4.default)(_v9.DismissX).withConfig({
      displayName: "CreatePageTeamMemberPrivilegesBanner__DismissIcon",
      componentId: "sc-92efd24c-3"
    })`
  width: ${(0, _v2.rem)(20)};
  height: ${(0, _v2.rem)(20)};
  position: absolute;
  right: ${(0, _v2.rem)(20)};
  top: ${(0, _v2.rem)(20)};
  cursor: pointer;
  path {
    fill: ${_v6.bokehTheme.colors.white};
  }
`;
  _v0.s(["default", 0, function ({
    teamUserRole: _v0,
    userId: _v1,
    locale: _v2,
    vuid: _v3
  }) {
    let _v4 = _v10.TeamUserPermissionLevel.Contributor === _v0 || _v10.TeamUserPermissionLevel.ContributorPlus === _v0 || _v10.TeamUserPermissionLevel.Admin === _v0,
      _v5 = (0, _v3.useRef)({
        notification_name: _v4 ? "teams_connected_to_teams_account" : "teams_no_create_permission",
        product: "Vimeo Create",
        location: "template_gallery",
        path: window.location.pathname,
        session_id: null,
        client_timestamp: null,
        platform: window.navigator.platform,
        user_id: `${_v1}`,
        vsid: null,
        user_package_type: null,
        third_party_integration: "none",
        flow: "create_homepage",
        device_id: _v3,
        clients_session_start_ts: null,
        client_ver: null,
        debug_mode: null,
        in_background: null,
        is_guest: null,
        lang: _v2
      }),
      [_v6, _v7] = (0, _v3.useState)(!0),
      _v8 = (0, _v3.useCallback)(() => {
        _v7(!1);
      }, []);
    (0, _v3.useEffect)(() => {
      _v6 && _v5.BigPictureClient.sendEvent(new _v5.Event("view_notification", 1, {
        ..._v5.current
      }));
    }, [_v6, _v5]);
    let _v9 = (0, _v3.useCallback)(() => {
      _v5.BigPictureClient.sendEvent(new _v5.Event("clicked_on_notification", 1, {
        cta: "teams_settings",
        ..._v5.current
      }));
    }, [_v5]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v6 ? (0, _v1.jsxs)(_v11, {
        children: [(0, _v1.jsx)(_v12, {
          largeSize: !_v4,
          children: _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)("div", {
              children: (0, _v7.translate)({
                singular: "You're creating videos under a team account.",
                dictionary: {
                  es: {
                    singular: "Estás creando videos en una cuenta de equipo."
                  },
                  "de-DE": {
                    singular: "Du erstellst Videos mit einem Teamkonto."
                  },
                  "fr-FR": {
                    singular: "Vous créez des vidéos avec un compte d'équipe."
                  },
                  "ja-JP": {
                    singular: "チームアカウントで動画を作成しています。"
                  },
                  "ko-KR": {
                    singular: "팀 계정으로 동영상을 만들고 있습니다."
                  },
                  "pt-BR": {
                    singular: "Você está criando vídeos em uma conta de equipe."
                  },
                  "zh-CN": {
                    singular: "您正在使用团队账户创建视频。"
                  }
                }
              })
            }), (0, _v1.jsx)("div", {
              children: (0, _v7.translate)({
                singular: "You can switch accounts if you want to create videos under your personal account.",
                dictionary: {
                  es: {
                    singular: "Puedes cambiar de cuenta si quieres crear videos con tu cuenta personal."
                  },
                  "de-DE": {
                    singular: "Du kannst das Konto wechseln, wenn du Videos mit deinem persönlichen Konto erstellen möchtest."
                  },
                  "fr-FR": {
                    singular: "Vous pouvez changer de compte si vous souhaitez créer des vidéos avec votre compte personnel."
                  },
                  "ja-JP": {
                    singular: "個人アカウントで動画を作成したい場合は、アカウントを切り替えることができます。"
                  },
                  "ko-KR": {
                    singular: "개인 계정으로 동영상을 만들려면 계정을 전환할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Troque de conta se quiser criar vídeos com sua conta pessoal."
                  },
                  "zh-CN": {
                    singular: "如果您想用个人帐户创建视频，可以切换帐户。"
                  }
                }
              })
            })]
          }) : (0, _v7.translate)({
            singular: "Videos you create will be saved to your personal account. To automatically share created videos with your team, contact the team owner.",
            dictionary: {
              es: {
                singular: "Los videos que crees se guardarán en tu cuenta personal. Para compartir automáticamente los videos creados con tu equipo, comunícate con el propietario del equipo."
              },
              "de-DE": {
                singular: "Videos, die du erstellst, werden in deinem persönlichen Konto gespeichert. Um deine erstellten Videos automatisch mit deinem Team zu teilen, wende dich am besten an den Team-Eigentümer."
              },
              "fr-FR": {
                singular: "Les vidéos que vous créez seront enregistrées dans votre compte personnel. Pour partager automatiquement les vidéos que vous avez créées avec votre équipe, contactez le propriétaire de l'équipe."
              },
              "ja-JP": {
                singular: "作成した動画は個人アカウントに保存されます。作成した動画をチームと自動的に共有するには、チームの所有者に連絡してください。"
              },
              "ko-KR": {
                singular: "제작한 동영상은 개인 계정에 저장됩니다. 제작한 동영상을 팀과 자동으로 공유하려면 팀 소유자에게 문의하세요."
              },
              "pt-BR": {
                singular: "Os vídeos que você criar serão salvos em sua conta pessoal. Para compartilhar automaticamente os vídeos criados com sua equipe, entre em contato com o proprietário da equipe."
              },
              "zh-CN": {
                singular: "您创建的视频将保存到您的个人帐户中。要自动与团队共享创建的视频，请联系团队所有者。"
              }
            }
          })
        }), _v4 && (0, _v1.jsx)(_v13, {
          href: "/manage/videos",
          onClick: _v9,
          children: (0, _v1.jsx)(_v8.Button, {
            size: "xs",
            style: {
              padding: `0 ${(0, _v2.rem)(14)}`,
              marginLeft: `${(0, _v2.rem)(16)}`
            },
            children: (0, _v7.translate)({
              singular: "Switch account",
              dictionary: {
                es: {
                  singular: "Cambiar de cuenta"
                },
                "de-DE": {
                  singular: "Konto wechseln"
                },
                "fr-FR": {
                  singular: "Changer de compte"
                },
                "ja-JP": {
                  singular: "アカウントを切り替える"
                },
                "ko-KR": {
                  singular: "계정 전환하기"
                },
                "pt-BR": {
                  singular: "Mude de conta"
                },
                "zh-CN": {
                  singular: "切换账户"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v14, {
          onClick: _v8
        })]
      }) : null
    });
  }]);
}