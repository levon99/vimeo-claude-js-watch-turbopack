{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["ReviewLinksEmptyState", 0, ({
    onCreateReviewLinkClick: _v0
  }) => (0, _v1.jsx)(_v2.Flex, {
    sx: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      px: "lg"
    },
    children: (0, _v1.jsxs)(_v2.Flex, {
      gap: "md",
      direction: "column",
      alignItems: "center",
      width: "232px",
      children: [(0, _v1.jsxs)(_v2.Flex, {
        gap: "sm",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        direction: "column",
        children: [(0, _v1.jsx)(_v5.LinkAdd, {
          boxSize: "sm"
        }), (0, _v1.jsx)(_v3.Text, {
          variant: "heading-sm",
          color: "text-primary",
          textAlign: "center",
          children: (0, _v6.translate)({
            singular: "Create a link for external feedback or collaboration",
            dictionary: {
              es: {
                singular: "Cree un enlace para recibir comentarios o colaboración"
              },
              "de-DE": {
                singular: "Erstellen Sie einen Link für externes Feedback oder Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Créez un lien pour les commentaires externes ou la collaboration"
              },
              "ja-JP": {
                singular: "外部からのフィードバックやコラボレーション用のリンクを作成"
              },
              "ko-KR": {
                singular: "외부 피드백이나 협업을 위한 링크를 만드세요."
              },
              "pt-BR": {
                singular: "Crie um link para feedback externo ou colaboração"
              },
              "zh-CN": {
                singular: "创建用于外部反馈或协作的链接"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v4.Button, {
        variant: "primary",
        onClick: () => _v0?.(),
        children: (0, _v1.jsx)(_v3.Text, {
          variant: "heading-xs",
          children: (0, _v6.translate)({
            singular: "New review link",
            dictionary: {
              es: {
                singular: "Nuevo vínculo de revisión"
              },
              "de-DE": {
                singular: "Neuer Review-Link"
              },
              "fr-FR": {
                singular: "Nouveau lien de révision"
              },
              "ja-JP": {
                singular: "新しいレビューリンク"
              },
              "ko-KR": {
                singular: "새 리뷰 링크"
              },
              "pt-BR": {
                singular: "Novo link de revisão"
              },
              "zh-CN": {
                singular: "新的审核链接"
              }
            }
          })
        })
      })]
    })
  })], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["ReviewLinkDeleteConfirmationModal", 0, ({
    isOpen: _v0,
    onCancel: _v1,
    onDelete: _v2,
    reviewLinkName: _v3,
    isDeleteApiInProgress: _v4
  }) => (0, _v1.jsxs)(_v7.Modal, {
    isOpen: _v0,
    onClose: () => _v1(),
    children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
      children: [(0, _v1.jsx)(_v11.ModalHeader, {
        pb: "0px",
        children: (0, _v6.translate)({
          singular: 'Delete "{reviewLinkName}"',
          replacements: {
            reviewLinkName: _v3
          },
          dictionary: {
            es: {
              singular: 'Eliminar "{reviewLinkName}"'
            },
            "de-DE": {
              singular: "„{reviewLinkName}“ löschen"
            },
            "fr-FR": {
              singular: "Supprimer « {reviewLinkName} »"
            },
            "ja-JP": {
              singular: "「{reviewLinkName}」を削除"
            },
            "ko-KR": {
              singular: '"{reviewLinkName}" 삭제'
            },
            "pt-BR": {
              singular: 'Excluir "{reviewLinkName}"'
            },
            "zh-CN": {
              singular: "删除“{reviewLinkName}”"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.ModalBody, {
        children: (0, _v1.jsx)(_v3.Text, {
          variant: "body-md",
          children: (0, _v6.translate)({
            singular: "Permanently delete this review link. Anyone the link was shared with will no longer be able to access it.",
            dictionary: {
              es: {
                singular: "Elimine este enlace de revisión de forma permanente. Cualquier persona con la que se haya compartido el enlace ya no podrá acceder a él."
              },
              "de-DE": {
                singular: "Diesen Review-Link dauerhaft löschen. Alle Personen, an die der Link weitergegeben wurde, können nicht mehr darauf zugreifen."
              },
              "fr-FR": {
                singular: "Supprimez définitivement ce lien de révision. Les personnes avec qui le lien a été partagé ne pourront plus y accéder."
              },
              "ja-JP": {
                singular: "このレビューリンクを完全に削除します。このリンクが共有された人はアクセスできなくなります。"
              },
              "ko-KR": {
                singular: "이 리뷰 링크를 영구적으로 삭제합니다. 링크를 공유받은 사람이 더 이상 액세스할 수 없게 됩니다."
              },
              "pt-BR": {
                singular: "Excluir permanentemente este link de revisão. Qualquer pessoa com quem o link foi compartilhado não poderá mais acessá-lo."
              },
              "zh-CN": {
                singular: "永久删除此评论链接。所有曾收到该链接的人将无法再访问相关内容。"
              }
            }
          })
        })
      }), (0, _v1.jsxs)(_v10.ModalFooter, {
        children: [(0, _v1.jsx)(_v4.Button, {
          variant: "tertiary",
          onClick: () => _v1(),
          disabled: _v4,
          children: (0, _v6.translate)({
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
        }), (0, _v1.jsx)(_v4.Button, {
          variant: "destructive",
          onClick: () => _v2(),
          isLoading: _v4,
          children: (0, _v6.translate)({
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
          })
        })]
      })]
    })]
  })], 0);
}