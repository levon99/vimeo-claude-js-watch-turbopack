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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = _v0 => _v0 ? parseInt(_v0.split("/")[2], 10) : null,
    _v20 = _v0 => _v0.teamData?.teamName ?? _v0.owner.name;
  _v0.s(["default", 0, () => {
    let [_v0, _v1] = (0, _v3.useState)(""),
      _v2 = (0, _v3.useContext)(_v15.ViewerContext),
      _v3 = _v2?.teamUser?.ownerId || _v2?.user?.id,
      _v4 = _v17.default.teams,
      _v5 = _v4?.find(_v0 => _v0?.owner?.uri === `/users/${_v3}`),
      _v6 = async _v0 => {
        await fetch("/manage/videos?action=SWITCH_TEAMS", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: JSON.stringify({
            team_owner_id: _v0,
            token: _v2?.xsrft
          })
        }), window.location.reload();
      },
      _v7 = async (_v0, _v1) => {
        _v1(_v1), _v6(_v0), (0, _v18.sendTrackSelectEditorNotificationOption)({
          notificationName: _v16.notificationName.noPermissionsToEdit,
          mainCta: null,
          errorCode: null,
          errorName: null,
          cta: "Switch Team",
          via: null,
          isCheckbox: !1,
          isMarkedCheckbox: null,
          checkboxName: "dont_show_this_massage_again"
        });
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5 && (0, _v1.jsx)(_v10.Select, {
        items: _v4.map(_v0 => ({
          label: _v20(_v0),
          value: _v0
        })),
        placeholder: _v20(_v5),
        children: _v0 => (0, _v1.jsxs)(_v10.SelectItem, {
          onClick: () => _v7(_v19(_v0.value.owner?.uri), _v0.label),
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsxs)("div", {
            children: [(0, _v1.jsx)(_v12.Text, {
              variant: "body-md",
              children: _v20(_v0.value)
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "body-sm",
              children: _v0.value.userRole
            })]
          }), _v19(_v0.value.owner?.uri) === _v19(_v5.owner?.uri) ? (0, _v1.jsx)(_v13.CheckSmall, {
            boxSize: (0, _v9.rem)(20)
          }) : null]
        })
      }), _v0 ? (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v6.Modal, {
          isOpen: !0,
          onClose: _v2.default,
          children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsx)(_v7.ModalContent, {
            height: (0, _v9.rem)(300),
            pt: (0, _v9.rem)(104),
            children: (0, _v1.jsxs)(_v4.Center, {
              flexDir: "column",
              gap: (0, _v9.rem)(10),
              children: [(0, _v1.jsx)(_v11.Spinner, {
                size: "sm"
              }), (0, _v1.jsx)(_v5.Header, {
                size: "md",
                children: (0, _v14.translate)({
                  singular: "Switching to {TEAM_NAME}",
                  replacements: {
                    TEAM_NAME: _v0
                  },
                  dictionary: {
                    es: {
                      singular: "Cambiando a {TEAM_NAME}"
                    },
                    "de-DE": {
                      singular: "Wechseln zu {TEAM_NAME}"
                    },
                    "fr-FR": {
                      singular: "Passage à {TEAM_NAME}"
                    },
                    "ja-JP": {
                      singular: "{TEAM_NAME}への切り替え"
                    },
                    "ko-KR": {
                      singular: "{TEAM_NAME}(으)로 전환합니다."
                    },
                    "pt-BR": {
                      singular: "Mudando para {TEAM_NAME}"
                    },
                    "zh-CN": {
                      singular: "切换到 {TEAM_NAME}"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v12.Text, {
                variant: "body-md",
                children: (0, _v14.translate)({
                  singular: "This will take a few seconds",
                  dictionary: {
                    es: {
                      singular: "Esto tardará unos segundos"
                    },
                    "de-DE": {
                      singular: "Das dauert ein paar Sekunden."
                    },
                    "fr-FR": {
                      singular: "Cela prendra quelques secondes."
                    },
                    "ja-JP": {
                      singular: "少々お待ちください"
                    },
                    "ko-KR": {
                      singular: "몇 초 정도 걸릴 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Isso levará alguns segundos"
                    },
                    "zh-CN": {
                      singular: "这将需要几秒钟时间"
                    }
                  }
                })
              })]
            })
          })]
        })
      }) : (0, _v1.jsx)(_v1.Fragment, {})]
    });
  }]);
}