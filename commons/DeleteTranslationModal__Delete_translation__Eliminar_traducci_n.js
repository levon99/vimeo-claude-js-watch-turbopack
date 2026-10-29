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
    _v14 = _v0.i(0);
  _v0.s(["DeleteTranslationModal", 0, ({
    targetLocale: _v0,
    isPublished: _v1,
    isDeleting: _v2,
    onCancel: _v3,
    onConfirm: _v4
  }) => {
    let _v5 = (0, _v13.useLocale)(),
      _v6 = (0, _v14.getLocaleLabel)(_v0, _v5);
    return (0, _v1.jsxs)(_v4.Modal, {
      closeOnEsc: !_v2,
      closeOnOverlayClick: !_v2,
      isOpen: !0,
      onClose: _v3,
      children: [(0, _v1.jsx)(_v9.ModalOverlay, {}), (0, _v1.jsxs)(_v6.ModalContent, {
        maxW: (0, _v11.rem)(480),
        children: [(0, _v1.jsx)(_v8.ModalHeader, {
          pb: "md",
          children: (0, _v12.translate)({
            singular: "Delete translation",
            dictionary: {
              es: {
                singular: "Eliminar traducción"
              },
              "de-DE": {
                singular: "Übersetzung löschen"
              },
              "fr-FR": {
                singular: "Supprimer la traduction"
              },
              "ja-JP": {
                singular: "翻訳を削除"
              },
              "ko-KR": {
                singular: "번역 삭제"
              },
              "pt-BR": {
                singular: "Excluir tradução"
              },
              "zh-CN": {
                singular: "删除翻译"
              }
            }
          })
        }), (0, _v1.jsx)(_v5.ModalBody, {
          p: "lg",
          children: (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: "lg",
            w: "100%",
            children: [(0, _v1.jsxs)(_v3.Flex, {
              direction: "column",
              gap: (0, _v11.rem)(20),
              children: [(0, _v1.jsx)(_v10.Text, {
                color: "text-primary",
                variant: "body-md",
                children: (0, _v12.translate)({
                  singular: "This permanently deletes the {LANGUAGE} translation, including saved drafts and manual edits.",
                  replacements: {
                    LANGUAGE: _v6
                  },
                  dictionary: {
                    es: {
                      singular: "Esto elimina permanentemente la traducción en {LANGUAGE}, incluidos los borradores guardados y las ediciones manuales."
                    },
                    "de-DE": {
                      singular: "Dadurch wird die {LANGUAGE}-Übersetzung dauerhaft gelöscht, einschließlich gespeicherter Entwürfe und manueller Änderungen."
                    },
                    "fr-FR": {
                      singular: "Cela supprime définitivement la traduction {LANGUAGE}, y compris les brouillons enregistrés et les modifications manuelles."
                    },
                    "ja-JP": {
                      singular: "これにより、保存された下書きや手動で行った編集を含め、{LANGUAGE} の翻訳が完全に削除されます。"
                    },
                    "ko-KR": {
                      singular: "저장된 초안 및 수동 편집을 포함한 {LANGUAGE} 번역을 영구적으로 삭제합니다."
                    },
                    "pt-BR": {
                      singular: "Isto exclui permanentemente a tradução em {LANGUAGE}, incluindo rascunhos salvos e edições manuais."
                    },
                    "zh-CN": {
                      singular: "这将永久删除{LANGUAGE}翻译，包括已保存的草稿和手动编辑。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v10.Text, {
                color: "text-primary",
                variant: "body-md",
                children: (0, _v12.translate)({
                  singular: "{LANGUAGE} will no longer be available to viewers. Your main language and other translations won’t change.",
                  replacements: {
                    LANGUAGE: _v6
                  },
                  dictionary: {
                    es: {
                      singular: "{LANGUAGE} ya no estará disponible para los espectadores. Tu idioma principal y las demás traducciones no cambiarán."
                    },
                    "de-DE": {
                      singular: "Die {LANGUAGE}-Übersetzung wird für Zuschauer nicht mehr verfügbar sein. Ihre Hauptsprache und andere Übersetzungen bleiben unverändert."
                    },
                    "fr-FR": {
                      singular: "{LANGUAGE} ne sera plus disponible pour les spectateurs. Votre langue principale et les autres traductions ne changeront pas."
                    },
                    "ja-JP": {
                      singular: "{LANGUAGE} は視聴者に表示されなくなります。メイン言語およびその他の翻訳は変更されません。"
                    },
                    "ko-KR": {
                      singular: "{LANGUAGE}은(는) 시청자에게 더 이상 제공되지 않습니다. 기본 언어 및 다른 번역은 변경되지 않습니다."
                    },
                    "pt-BR": {
                      singular: "{LANGUAGE} não estará mais disponível para os espectadores. Seu idioma principal e as outras traduções não serão alterados."
                    },
                    "zh-CN": {
                      singular: "{LANGUAGE}将不再对观众可用。您的主语言和其他翻译不会改变。"
                    }
                  }
                })
              })]
            }), _v1 ? (0, _v1.jsx)(_v10.Text, {
              color: "text-tertiary",
              variant: "body-md",
              children: (0, _v12.translate)({
                singular: "To hide {LANGUAGE} without losing your work, choose Unpublish instead.",
                replacements: {
                  LANGUAGE: _v6
                },
                dictionary: {
                  es: {
                    singular: "Para ocultar {LANGUAGE} sin perder tu trabajo, elige Despublicar en su lugar."
                  },
                  "de-DE": {
                    singular: "Um {LANGUAGE} zu verbergen, ohne Ihre Arbeit zu verlieren, wählen Sie stattdessen Unpublish."
                  },
                  "fr-FR": {
                    singular: "Pour masquer {LANGUAGE} sans perdre votre travail, choisissez Dépublier à la place."
                  },
                  "ja-JP": {
                    singular: "作業内容を失わずに {LANGUAGE} を非表示にするには、代わりに Unpublish を選択してください。"
                  },
                  "ko-KR": {
                    singular: "작업을 잃지 않고 {LANGUAGE}을(를) 숨기려면 대신 게시 취소를 선택하세요."
                  },
                  "pt-BR": {
                    singular: "Para ocultar {LANGUAGE} sem perder seu trabalho, escolha Despublicar."
                  },
                  "zh-CN": {
                    singular: "如果要隐藏{LANGUAGE}而不丢失您的工作，请选择“取消发布”。"
                  }
                }
              })
            }) : null]
          })
        }), (0, _v1.jsxs)(_v7.ModalFooter, {
          borderColor: "stroke",
          borderStyle: "solid",
          borderTopWidth: "1px",
          py: "md",
          children: [(0, _v1.jsx)(_v2.Button, {
            isDisabled: _v2,
            onClick: _v3,
            variant: "tertiary",
            children: (0, _v12.translate)({
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
          }), (0, _v1.jsx)(_v2.Button, {
            "data-testid": "confirm-delete-translation-button",
            isLoading: _v2,
            onClick: _v4,
            variant: "destructive",
            children: (0, _v12.translate)({
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
    });
  }]);
}