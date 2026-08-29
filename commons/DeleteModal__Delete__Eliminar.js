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
  _v0.s(["DeleteModal", 0, ({
    bodyContent: _v0,
    confirmText: _v1 = (0, _v11.translate)({
      singular: "Delete",
      dictionary: {
        es: {
          singular: "Eliminar"
        },
        "de-DE": {
          singular: "Löschen"
        },
        "fr-FR": {
          singular: "Supprimer"
        },
        "ja-JP": {
          singular: "削除"
        },
        "ko-KR": {
          singular: "삭제"
        },
        "pt-BR": {
          singular: "Excluir"
        },
        "zh-CN": {
          singular: "删除"
        }
      }
    }),
    headerContent: _v2,
    isDisabled: _v3,
    isLoading: _v4,
    isOpen: _v5,
    onClose: _v6,
    onConfirm: _v7
  }) => (0, _v1.jsxs)(_v4.Modal, {
    isOpen: _v5,
    onClose: _v6,
    children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
      borderRadius: "xl",
      children: [(0, _v1.jsx)(_v6.ModalCloseButton, {
        zIndex: 1
      }), (0, _v1.jsx)(_v2.Box, {
        as: "span",
        whiteSpace: "nowrap",
        flexGrow: 1,
        position: "relative",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v9.ModalHeader, {
          px: "lg",
          pt: "lg",
          pb: "sm",
          margin: "0px",
          fontSize: "heading-md",
          letterSpacing: "-0.03em",
          color: "text-primary",
          children: _v2
        })
      }), (0, _v1.jsx)(_v5.ModalBody, {
        px: "lg",
        py: "sm",
        fontSize: "body-md",
        letterSpacing: "-0.03em",
        color: "text-primary",
        children: _v0
      }), (0, _v1.jsxs)(_v8.ModalFooter, {
        border: "0",
        px: "lg",
        pt: "sm",
        pb: "lg",
        children: [(0, _v1.jsx)(_v3.Button, {
          onClick: _v6,
          variant: "tertiary",
          borderRadius: "md",
          children: _v3 ? (0, _v11.translate)({
            singular: "OK",
            dictionary: {
              es: {
                singular: "Aceptar"
              },
              "ko-KR": {
                singular: "확인"
              },
              "zh-CN": {
                singular: "确定"
              }
            }
          }) : (0, _v11.translate)({
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
        }), !_v3 && (0, _v1.jsx)(_v3.Button, {
          onClick: _v7,
          isLoading: _v4,
          variant: "destructive",
          borderRadius: "md",
          children: _v1
        })]
      })]
    })]
  })]);
}