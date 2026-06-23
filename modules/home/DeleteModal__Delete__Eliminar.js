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
  _v0.s(["DeleteModal", 0, ({
    bodyContent: _v0,
    confirmText: _v1 = (0, _v10.translate)({
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
    children: [(0, _v1.jsx)(_v9.ModalOverlay, {}), (0, _v1.jsxs)(_v6.ModalContent, {
      borderRadius: "md",
      children: [(0, _v1.jsx)(_v2.Box, {
        as: "span",
        whiteSpace: "nowrap",
        flexGrow: 1,
        position: "relative",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v8.ModalHeader, {
          padding: "lg",
          margin: "0px",
          fontSize: "heading-md",
          color: "text-primary",
          children: _v2
        })
      }), (0, _v1.jsx)(_v5.ModalBody, {
        padding: "0.5rem 1.5rem",
        fontSize: "body-md",
        color: "text-primary",
        children: _v0
      }), (0, _v1.jsxs)(_v7.ModalFooter, {
        border: "0",
        padding: "lg",
        children: [(0, _v1.jsx)(_v3.Button, {
          onClick: _v6,
          variant: "tertiary",
          children: _v3 ? (0, _v10.translate)({
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
          }) : (0, _v10.translate)({
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
          children: _v1
        })]
      })]
    })]
  })], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["TruncatedDeleteModalHeader", 0, ({
    name: _v0
  }) => (0, _v1.jsxs)(_v11.Flex, {
    children: [(0, _v1.jsxs)(_v2.Box, {
      children: [(0, _v10.translate)({
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
      }), " “"]
    }), (0, _v1.jsx)(_v12.OverflowToolTip, {
      labelToolTip: _v0,
      children: (0, _v1.jsx)(_v2.Box, {
        textOverflow: "ellipsis",
        overflow: "hidden",
        children: _v0
      })
    }), (0, _v1.jsx)(_v2.Box, {
      children: "”"
    })]
  })], 0);
}