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
    _v11 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      [_v1, _v2] = (0, _v3.useState)(!0),
      {
        clipId: _v3,
        folderId: _v4,
        userId: _v5
      } = _v0.query,
      _v6 = (({
        userId: _v0,
        clipId: _v1,
        folderId: _v2
      }) => {
        let {
            data: _v3
          } = (0, _v11.useGetVideo)(() => _v1 ? {
            where: {
              videoId: _v1
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.10"
            },
            select: ["metadata.interactions.edit.uri"]
          } : null),
          {
            data: _v4
          } = (0, _v10.useGetUserProject)(() => _v2 && _v0 ? {
            where: {
              userId: _v0,
              projectId: _v2
            },
            select: ["metadata.interactions.edit.uri"]
          } : null),
          _v5 = !1;
        return _v3 ? _v5 = !!_v3.metadata?.interactions?.edit?.uri : _v4 && (_v5 = !!_v4.metadata?.interactions?.edit?.uri), _v5;
      })({
        clipId: _v3 ? Number(_v3) : void 0,
        folderId: _v4 ? Number(_v4) : void 0,
        userId: _v5 ? Number(_v5) : void 0
      });
    if (!_v1 || !_v6) return null;
    let _v7 = "";
    return _v7 = _v3 ? `/manage/videos/${_v3}` : `/user/${_v5}/folder/${_v4}`, (0, _v1.jsxs)(_v4.AlertRoot, {
      backgroundColor: "status-info-secondary",
      marginBottom: "0",
      gap: "sm",
      justifyContent: "center",
      p: "sm",
      borderRadius: "none",
      alignItems: "center",
      children: [(0, _v1.jsxs)(_v5.AlertDescription, {
        color: "text-primary",
        display: "flex",
        gap: "sm",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v6.Text, {
          variant: "body-sm",
          children: (0, _v9.translate)({
            singular: "You’re viewing this review link as it appears to recipients",
            dictionary: {
              es: {
                singular: "Usted está viendo este enlace de revisión tal como lo ven los destinatarios."
              },
              "de-DE": {
                singular: "Sie sehen diesen Bewertungslink so, wie er den Empfängern angezeigt wird."
              },
              "fr-FR": {
                singular: "Vous consultez ce lien de révision tel qu'il apparaît pour les destinataires"
              },
              "ja-JP": {
                singular: "このレビューリンクは受信者から見た画面を忠実に再現したものです"
              },
              "ko-KR": {
                singular: "수신자에게 표시되는 리뷰 링크를 보고 계십니다."
              },
              "pt-BR": {
                singular: "Você está visualizando este link de revisão como ele aparece para os destinatários"
              },
              "zh-CN": {
                singular: "您正在查看的此评论链接与收件人看到的相同"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Button, {
          size: "xs",
          variant: "primary",
          onClick: () => {
            window.location.pathname = _v7;
          },
          children: (0, _v1.jsx)(_v6.Text, {
            variant: "heading-2xs",
            children: (0, _v9.translate)({
              singular: "Manage settings",
              dictionary: {
                es: {
                  singular: "Gestionar la configuración"
                },
                "de-DE": {
                  singular: "Einstellungen verwalten"
                },
                "fr-FR": {
                  singular: "Gérer les paramètres"
                },
                "ja-JP": {
                  singular: "設定を管理"
                },
                "ko-KR": {
                  singular: "설정 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar configurações"
                },
                "zh-CN": {
                  singular: "管理设置"
                }
              }
            })
          })
        })]
      }), (0, _v1.jsx)(_v7.CloseButton, {
        size: "xs",
        variant: "tertiary",
        "aria-label": (0, _v9.translate)({
          singular: "close",
          dictionary: {
            es: {
              singular: "Cerrar"
            },
            "de-DE": {
              singular: "Schließen"
            },
            "fr-FR": {
              singular: "fermer"
            },
            "ja-JP": {
              singular: "閉じる"
            },
            "ko-KR": {
              singular: "닫기"
            },
            "pt-BR": {
              singular: "fechar"
            },
            "zh-CN": {
              singular: "关闭"
            }
          }
        }),
        onClick: () => _v2(!1)
      })]
    });
  }], 0);
}