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
  let _v11 = _v9.default.div.withConfig({
      displayName: "style__Actions",
      componentId: "sc-85792ffe-0"
    })`
  display: flex;
  justify-content: flex-end;
  > button {
    &:not(:last-child) {
      margin-right: ${(0, _v8.rem)(16)};
    }
  }
`,
    _v12 = (0, _v9.default)(_v10.Button).withConfig({
      displayName: "style__ActionButtonStyled",
      componentId: "sc-85792ffe-1"
    })`
  min-width: ${(0, _v8.rem)(96)};
`,
    _v13 = _v9.default.div.withConfig({
      displayName: "style__ConfirmContent",
      componentId: "sc-85792ffe-2"
    })`
  margin-top: ${(0, _v8.rem)(10)};
  margin-bottom: ${(0, _v8.rem)(32)};
`,
    _v14 = (0, _v9.default)(_v10.Button).withConfig({
      displayName: "style__DismissButton",
      componentId: "sc-85792ffe-3"
    })`
  margin: ${(0, _v8.rem)(-8)} ${(0, _v8.rem)(-8)} 0 0;
`,
    _v15 = _v9.default.div.withConfig({
      displayName: "style__ModalHeader",
      componentId: "sc-85792ffe-4"
    })`
  display: flex;
  justify-content: space-between;
`,
    _v16 = _v9.default.div.withConfig({
      displayName: "style__Wrapper",
      componentId: "sc-85792ffe-5"
    })`
  background-color: ${({
      theme: _v0
    }) => _v0.content.background};
  border-radius: ${(0, _v8.rem)(8)};
  width: ${(0, _v8.rem)(440)};
  padding: ${(0, _v8.rem)(16)};
  display: flex;
  flex-direction: column;
`;
  _v0.s(["MovePrivateVideoConfirmationModal", 0, ({
    dropTarget: _v0,
    items: _v1,
    isOpen: _v2,
    setIsOpen: _v3,
    onMoveConfirmation: _v4,
    isLoading: _v5
  }) => (0, _v1.jsx)(_v4.Modal, {
    "data-testid": "move-private-video-confirmation-modal",
    active: _v2,
    content: (0, _v1.jsxs)(_v16, {
      children: [(0, _v1.jsxs)(_v15, {
        children: [(0, _v1.jsx)(_v5.Header, {
          size: "4",
          style: {
            marginBottom: 0
          },
          children: (0, _v3.translate)({
            singular: "Are you sure?",
            dictionary: {
              es: {
                singular: "¿Estás seguro(a)?"
              },
              "de-DE": {
                singular: "Bist du dir sicher?"
              },
              "fr-FR": {
                singular: "Êtes-vous sûr ?"
              },
              "ja-JP": {
                singular: "よろしいですか？"
              },
              "ko-KR": {
                singular: "정말로 실행할까요?"
              },
              "pt-BR": {
                singular: "Você tem certeza?"
              },
              "zh-CN": {
                singular: "您确定吗？"
              }
            }
          })
        }), (0, _v1.jsx)(_v14, {
          id: "move-private-confirmation-modal-dismiss-button",
          "aria-label": (0, _v3.translate)({
            singular: "Close",
            dictionary: {
              es: {
                singular: "Cerrar"
              },
              "de-DE": {
                singular: "Schließen"
              },
              "fr-FR": {
                singular: "Fermer "
              },
              "ja-JP": {
                singular: "閉じる"
              },
              "ko-KR": {
                singular: "닫기"
              },
              "pt-BR": {
                singular: "Fechar"
              },
              "zh-CN": {
                singular: "关闭"
              }
            }
          }),
          format: "basic",
          icon: (0, _v1.jsx)(_v2.CloseX, {}),
          onClick: () => _v3(!1),
          size: "sm",
          variant: "hyperminimal"
        })]
      }), (0, _v1.jsx)(_v13, {
        children: (0, _v1.jsx)(_v6.Paragraph, {
          size: 2,
          children: _v7.confirmMovePrivateVideoToTeamFolderMsg
        })
      }), (0, _v1.jsxs)(_v11, {
        children: [(0, _v1.jsx)(_v12, {
          format: "secondary",
          onClick: () => _v3(!1),
          children: (0, _v3.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        }), (0, _v1.jsx)(_v12, {
          loading: _v5,
          onClick: () => _v4({
            dropTarget: _v0,
            items: _v1
          }),
          children: (0, _v3.translate)({
            singular: "Move",
            dictionary: {
              es: {
                singular: "Trasladar"
              },
              "de-DE": {
                singular: "Verschieben"
              },
              "fr-FR": {
                singular: "Déplacer"
              },
              "ja-JP": {
                singular: "移動"
              },
              "ko-KR": {
                singular: "이동"
              },
              "pt-BR": {
                singular: "Mover"
              },
              "zh-CN": {
                singular: "移动"
              }
            }
          })
        })]
      })]
    })
  })], 0);
}