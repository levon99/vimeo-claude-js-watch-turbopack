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
  let _v9 = ({
    onClick: _v0,
    children: _v1
  }) => (0, _v1.jsx)(_v6.LightMode, {
    children: (0, _v1.jsx)(_v7.Button, {
      cursor: "pointer",
      fontFamily: "body",
      fontSize: (0, _v8.rem)(14),
      height: "xs",
      onClick: _v0,
      padding: "0",
      textDecoration: "underline",
      variant: "tertiary",
      _hover: {
        color: "blackAlpha.800",
        bgColor: "transparent !important"
      },
      children: _v1
    })
  });
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = ({
    href: _v0,
    children: _v1
  }) => (0, _v1.jsx)(_v10.default, {
    href: _v0,
    children: (0, _v1.jsx)(_v6.LightMode, {
      children: (0, _v1.jsx)(_v11.Link, {
        cursor: "pointer",
        variant: "inline-primary",
        fontSize: (0, _v8.rem)(14),
        children: _v1
      })
    })
  });
  _v0.s(["LinkComponent", 0, _v12], 0), _v0.s(["useNotification", 0, () => {
    let _v0 = (0, _v2.useToast)();
    return ({
      content: _v0,
      status: _v1
    }) => {
      "success" === _v1 ? _v0({
        title: _v0,
        variant: _v1,
        icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
          color: "status-positive-primary"
        }),
        isClosable: !1
      }) : "error" === _v1 ? _v0({
        title: _v0,
        variant: "warning",
        icon: (0, _v1.jsx)(_v4.CircleExclamationFilled, {
          color: "status-destructive-primary"
        }),
        isClosable: !1
      }) : "info" === _v1 ? _v0({
        title: _v0,
        variant: "info",
        isClosable: !1
      }) : _v0({
        title: _v0,
        isClosable: !1
      });
    };
  }, "useNotifications", 0, () => {
    let _v0 = (0, _v2.useToast)();
    return {
      notifyItemMoveFailure: (_v0, _v1) => _v0({
        title: (0, _v5.translate)({
          singular: "Error: {ITEM} was not moved to {DESTINATION}.",
          replacements: {
            ITEM: _v0,
            DESTINATION: _v1
          },
          dictionary: {
            es: {
              singular: "Error: {ITEM} no se movió a {DESTINATION}."
            },
            "de-DE": {
              singular: "Fehler: {ITEM} wurde nicht nach {DESTINATION} verschoben."
            },
            "fr-FR": {
              singular: "Erreur : l'élément {ITEM} n'a pas été déplacé vers {DESTINATION}."
            },
            "ja-JP": {
              singular: "エラー：{ITEM} は {DESTINATION}に移動されませんでした。"
            },
            "ko-KR": {
              singular: "오류: {ITEM}이(가) {DESTINATION}(으)로 이동되지 않았습니다."
            },
            "pt-BR": {
              singular: "Erro: {ITEM} não foi transferido para {DESTINATION}."
            },
            "zh-CN": {
              singular: "错误：没有将 {ITEM} 移至 {DESTINATION}。"
            }
          }
        }),
        variant: "warning",
        icon: (0, _v1.jsx)(_v4.CircleExclamationFilled, {
          color: "status-destructive-primary"
        }),
        isClosable: !1
      }),
      notifyItemMoveSuccess: (_v0, _v1) => Array.isArray(_v0) ? _v0({
        title: (0, _v5.translate)({
          count: _v0.length,
          singular: "{ITEM} moved to {LINK}{DESTINATION}{/LINK} ",
          plural: "{NUM} items were moved to {LINK}{DESTINATION}{/LINK}",
          replacements: {
            ITEM: _v0[0].name,
            DESTINATION: _v1.label,
            LINK: _v0 => (0, _v1.jsx)(_v12, {
              href: _v1.link,
              children: _v0
            }),
            NUM: _v0.length
          },
          dictionary: {
            es: {
              singular: "Se movió {ITEM} a {LINK}{DESTINATION}{/LINK} "
            },
            "de-DE": {
              singular: "{ITEM} nach {LINK}{DESTINATION}{/LINK} verschoben "
            },
            "fr-FR": {
              singular: "La vidéo {ITEM} a été déplacée vers {LINK}{DESTINATION}{/LINK} "
            },
            "ja-JP": {
              singular: "{ITEM}が{LINK}{DESTINATION}{/LINK}へ移動されました "
            },
            "ko-KR": {
              singular: "{ITEM}이(가) {LINK}{DESTINATION}{/LINK}(으)로 이동했습니다. "
            },
            "pt-BR": {
              singular: "{ITEM} movido para {LINK}{DESTINATION}{/LINK} "
            },
            "zh-CN": {
              singular: "{ITEM} 移至 {LINK}{DESTINATION}{/LINK} "
            }
          }
        }),
        variant: "success",
        icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
          color: "status-positive-primary"
        }),
        isClosable: !1
      }) : "string" == typeof _v0 ? _v0({
        title: (0, _v5.translate)({
          singular: "{ITEM} moved to {LINK}{DESTINATION}{/LINK} ",
          replacements: {
            ITEM: _v0,
            DESTINATION: _v1.label,
            LINK: _v0 => (0, _v1.jsx)(_v12, {
              href: _v1.link,
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Se movió {ITEM} a {LINK}{DESTINATION}{/LINK} "
            },
            "de-DE": {
              singular: "{ITEM} nach {LINK}{DESTINATION}{/LINK} verschoben "
            },
            "fr-FR": {
              singular: "La vidéo {ITEM} a été déplacée vers {LINK}{DESTINATION}{/LINK} "
            },
            "ja-JP": {
              singular: "{ITEM}が{LINK}{DESTINATION}{/LINK}へ移動されました "
            },
            "ko-KR": {
              singular: "{ITEM}이(가) {LINK}{DESTINATION}{/LINK}(으)로 이동했습니다. "
            },
            "pt-BR": {
              singular: "{ITEM} movido para {LINK}{DESTINATION}{/LINK} "
            },
            "zh-CN": {
              singular: "{ITEM} 移至 {LINK}{DESTINATION}{/LINK} "
            }
          }
        }),
        variant: "success",
        icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
          color: "status-positive-primary"
        }),
        isClosable: !1
      }) : _v0({
        title: (0, _v5.translate)({
          singular: "Moved to {LINK}{DESTINATION}{/LINK}",
          replacements: {
            DESTINATION: _v1.label,
            LINK: _v0 => (0, _v1.jsx)(_v12, {
              href: _v1.link,
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Se movió a {LINK}{DESTINATION}{/LINK}"
            },
            "de-DE": {
              singular: "nach {LINK}{DESTINATION}{/LINK} verschoben"
            },
            "fr-FR": {
              singular: "Déplacé vers {LINK}{DESTINATION}{/LINK}"
            },
            "ja-JP": {
              singular: "は {LINK}{DESTINATION}{/LINK} へ移動されました"
            },
            "ko-KR": {
              singular: "{LINK}{DESTINATION}{/LINK}(으)로 이동되었습니다."
            },
            "pt-BR": {
              singular: "Movido para {LINK}{DESTINATION}{/LINK}"
            },
            "zh-CN": {
              singular: "已移至 {LINK}{DESTINATION}{/LINK}"
            }
          }
        }),
        variant: "success",
        icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
          color: "status-positive-primary"
        }),
        isClosable: !1
      }),
      notifyItemMoveToWorkspaceSuccess: (_v0, _v1, _v2) => {
        let _v3 = _v1.label.toUpperCase().includes("LIBRARY");
        if (Array.isArray(_v0)) if (_v3) return _v0({
          title: (0, _v5.translate)({
            count: _v0.length,
            singular: "{ITEM} moved to {LINK}{DESTINATION} in {WORKSPACE_NAME}{/LINK}",
            plural: "{NUM} items were moved to {LINK}{DESTINATION} in {WORKSPACE_NAME}{/LINK}",
            replacements: {
              ITEM: _v0[0].name,
              DESTINATION: _v1.label,
              LINK: _v0 => (0, _v1.jsx)(_v9, {
                onClick: _v2,
                children: _v0
              }),
              NUM: _v0.length,
              WORKSPACE_NAME: _v1.workspaceName
            },
            dictionary: {
              es: {
                singular: "{ITEM} se trasladó a {LINK}{DESTINATION} en {WORKSPACE_NAME}{/LINK}"
              },
              "de-DE": {
                singular: "{ITEM} wurde nach {LINK}„{DESTINATION}“ in „{WORKSPACE_NAME}“{/LINK} verschoben"
              },
              "fr-FR": {
                singular: "{ITEM} a été déplacé vers {LINK}{DESTINATION} dans {WORKSPACE_NAME}{/LINK}"
              },
              "ja-JP": {
                singular: "{ITEM}が{LINK}{WORKSPACE_NAME}内の{DESTINATION}{/LINK}に移動されました"
              },
              "ko-KR": {
                singular: "{ITEM}이(가) {LINK}{WORKSPACE_NAME}의 {DESTINATION}{/LINK}(으)로 이동했습니다."
              },
              "pt-BR": {
                singular: "{ITEM} foi movido para {LINK}{DESTINATION} em {WORKSPACE_NAME}{/LINK}"
              },
              "zh-CN": {
                singular: "{ITEM} 已移至 {WORKSPACE_NAME}{/LINK} 的 {LINK}{DESTINATION}"
              }
            }
          }),
          variant: "success",
          icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
            color: "status-positive-primary"
          }),
          isClosable: !1
        });else return _v0({
          title: (0, _v5.translate)({
            count: _v0.length,
            singular: '{ITEM} moved to {LINK}"{DESTINATION}" in {WORKSPACE_NAME}{/LINK}',
            plural: '{NUM} items were moved to {LINK}"{DESTINATION}" in {WORKSPACE_NAME}{/LINK}',
            replacements: {
              ITEM: _v0[0].name,
              DESTINATION: _v1.label,
              LINK: _v0 => (0, _v1.jsx)(_v9, {
                onClick: _v2,
                children: _v0
              }),
              NUM: _v0.length,
              WORKSPACE_NAME: _v1.workspaceName
            },
            dictionary: {
              es: {
                singular: '{ITEM} se trasladó a {LINK}"{DESTINATION}" en {WORKSPACE_NAME}{/LINK}'
              },
              "de-DE": {
                singular: "{ITEM} wurde nach {LINK}„{DESTINATION}“ in „{WORKSPACE_NAME}“{/LINK}verschoben."
              },
              "fr-FR": {
                singular: "{ITEM} a été déplacé vers {LINK}« {DESTINATION} » dans {WORKSPACE_NAME}{/LINK}"
              },
              "ja-JP": {
                singular: "{ITEM}が{LINK}{WORKSPACE_NAME}内の「{DESTINATION}」{/LINK}に移動されました"
              },
              "ko-KR": {
                singular: '{ITEM}이(가) {LINK}{WORKSPACE_NAME}{/LINK}의 "{DESTINATION}"(으)로 이동했습니다.'
              },
              "pt-BR": {
                singular: '{ITEM} foi movido para {LINK}"{DESTINATION}" em {WORKSPACE_NAME}{/LINK}'
              },
              "zh-CN": {
                singular: '{ITEM} 在 {WORKSPACE_NAME} {/LINK} 中移至 {LINK} " {DESTINATION} "'
              }
            }
          }),
          variant: "success",
          icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
            color: "status-positive-primary"
          }),
          isClosable: !1
        });
        if ("string" == typeof _v0) if (_v3) return _v0({
          title: (0, _v5.translate)({
            singular: "{ITEM} moved to {LINK}{DESTINATION} in {WORKSPACE_NAME}{/LINK}",
            replacements: {
              ITEM: _v0,
              DESTINATION: _v1.label,
              LINK: _v0 => (0, _v1.jsx)(_v9, {
                onClick: _v2,
                children: _v0
              }),
              WORKSPACE_NAME: _v1.workspaceName
            },
            dictionary: {
              es: {
                singular: "{ITEM} se trasladó a {LINK}{DESTINATION} en {WORKSPACE_NAME}{/LINK}"
              },
              "de-DE": {
                singular: "{ITEM} wurde nach {LINK}„{DESTINATION}“ in „{WORKSPACE_NAME}“{/LINK} verschoben"
              },
              "fr-FR": {
                singular: "{ITEM} a été déplacé vers {LINK}{DESTINATION} dans {WORKSPACE_NAME}{/LINK}"
              },
              "ja-JP": {
                singular: "{ITEM}が{LINK}{WORKSPACE_NAME}内の{DESTINATION}{/LINK}に移動されました"
              },
              "ko-KR": {
                singular: "{ITEM}이(가) {LINK}{WORKSPACE_NAME}의 {DESTINATION}{/LINK}(으)로 이동했습니다."
              },
              "pt-BR": {
                singular: "{ITEM} foi movido para {LINK}{DESTINATION} em {WORKSPACE_NAME}{/LINK}"
              },
              "zh-CN": {
                singular: "{ITEM} 已移至 {WORKSPACE_NAME}{/LINK} 的 {LINK}{DESTINATION}"
              }
            }
          }),
          variant: "success",
          icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
            color: "status-positive-primary"
          }),
          isClosable: !1
        });else return _v0({
          title: (0, _v5.translate)({
            singular: '{ITEM} moved to {LINK}"{DESTINATION}" in {WORKSPACE_NAME}{/LINK}',
            replacements: {
              ITEM: _v0,
              DESTINATION: _v1.label,
              LINK: _v0 => (0, _v1.jsx)(_v9, {
                onClick: _v2,
                children: _v0
              }),
              WORKSPACE_NAME: _v1.workspaceName
            },
            dictionary: {
              es: {
                singular: '{ITEM} se trasladó a {LINK}"{DESTINATION}" en {WORKSPACE_NAME}{/LINK}'
              },
              "de-DE": {
                singular: "{ITEM} wurde nach {LINK}„{DESTINATION}“ in „{WORKSPACE_NAME}“{/LINK}verschoben."
              },
              "fr-FR": {
                singular: "{ITEM} a été déplacé vers {LINK}« {DESTINATION} » dans {WORKSPACE_NAME}{/LINK}"
              },
              "ja-JP": {
                singular: "{ITEM}が{LINK}{WORKSPACE_NAME}内の「{DESTINATION}」{/LINK}に移動されました"
              },
              "ko-KR": {
                singular: '{ITEM}이(가) {LINK}{WORKSPACE_NAME}{/LINK}의 "{DESTINATION}"(으)로 이동했습니다.'
              },
              "pt-BR": {
                singular: '{ITEM} foi movido para {LINK}"{DESTINATION}" em {WORKSPACE_NAME}{/LINK}'
              },
              "zh-CN": {
                singular: '{ITEM} 在 {WORKSPACE_NAME} {/LINK} 中移至 {LINK} " {DESTINATION} "'
              }
            }
          }),
          variant: "success",
          icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
            color: "status-positive-primary"
          }),
          isClosable: !1
        });
        return _v0({
          title: (0, _v5.translate)({
            singular: 'Moved to {LINK}"{DESTINATION}" in {WORKSPACE_NAME}{/LINK}',
            replacements: {
              DESTINATION: _v1.label,
              LINK: _v0 => (0, _v1.jsx)(_v9, {
                onClick: _v2,
                children: _v0
              }),
              WORKSPACE_NAME: _v1.workspaceName
            },
            dictionary: {
              es: {
                singular: 'Trasladado a {LINK}"{DESTINATION}" en {WORKSPACE_NAME}{/LINK}'
              },
              "de-DE": {
                singular: "Verschoben nach {LINK}„{DESTINATION}“ in „{WORKSPACE_NAME}“{/LINK}"
              },
              "fr-FR": {
                singular: "Déplacé vers {LINK}« {DESTINATION} » dans {WORKSPACE_NAME}{/LINK}"
              },
              "ja-JP": {
                singular: "{LINK}{WORKSPACE_NAME}内の「{DESTINATION}」{/LINK}に移動されました"
              },
              "ko-KR": {
                singular: '{LINK}{WORKSPACE_NAME}의 "{DESTINATION}"{/LINK}(으)로 이동했습니다.'
              },
              "pt-BR": {
                singular: 'Movido para {LINK}"{DESTINATION}" em {WORKSPACE_NAME}{/LINK}'
              },
              "zh-CN": {
                singular: '在 {WORKSPACE_NAME} {/LINK} 中移至 {LINK} " {DESTINATION} "'
              }
            }
          }),
          variant: "success",
          icon: (0, _v1.jsx)(_v3.CircleCheckFilled, {
            color: "status-positive-primary"
          }),
          isClosable: !1
        });
      }
    };
  }], 0);
}