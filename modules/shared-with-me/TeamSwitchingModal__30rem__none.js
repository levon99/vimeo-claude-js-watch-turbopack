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
    _v9 = _v0.i(0);
  _v0.s(["TeamSwitchingModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    teamName: _v2
  }) => (0, _v1.jsxs)(_v3.Modal, {
    closeOnOverlayClick: !1,
    isOpen: _v0,
    onClose: _v1,
    children: [(0, _v1.jsx)(_v6.ModalOverlay, {}), (0, _v1.jsx)(_v5.ModalContent, {
      maxWidth: "30rem",
      children: (0, _v1.jsx)(_v4.ModalBody, {
        background: "none",
        padding: "4.5rem",
        children: (0, _v1.jsxs)(_v2.Flex, {
          direction: "column",
          gap: "1.5rem",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v7.Spinner, {
            size: "md"
          }), (0, _v1.jsx)(_v8.Text, {
            textAlign: "center",
            variant: "heading-lg",
            children: (0, _v9.translate)({
              singular: "Switching to team {TEAM_NAME}",
              replacements: {
                TEAM_NAME: _v2
              },
              dictionary: {
                es: {
                  singular: "Cambiando al equipo {TEAM_NAME}"
                },
                "de-DE": {
                  singular: "Zum Team {TEAM_NAME} wechseln"
                },
                "fr-FR": {
                  singular: "Passage à l'équipe {TEAM_NAME}"
                },
                "ja-JP": {
                  singular: "チーム{TEAM_NAME}に切り替え"
                },
                "ko-KR": {
                  singular: "팀 {TEAM_NAME}(으)로 전환합니다."
                },
                "pt-BR": {
                  singular: "Mudando para a equipe {TEAM_NAME}"
                },
                "zh-CN": {
                  singular: "切换到{TEAM_NAME}团队"
                }
              }
            })
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-lg",
            children: (0, _v9.translate)({
              singular: "This may take a few seconds",
              dictionary: {
                es: {
                  singular: "Esto puede tardar unos segundos."
                },
                "de-DE": {
                  singular: "Das kann ein paar Sekunden dauern"
                },
                "fr-FR": {
                  singular: "Cela peut prendre quelques secondes"
                },
                "ja-JP": {
                  singular: "これには数秒かかる場合があります"
                },
                "ko-KR": {
                  singular: "몇 초 정도 걸릴 수 있습니다."
                },
                "pt-BR": {
                  singular: "Isso pode levar alguns segundos"
                },
                "zh-CN": {
                  singular: "这可能需要几秒钟"
                }
              }
            })
          })]
        })
      })
    })]
  })]);
}