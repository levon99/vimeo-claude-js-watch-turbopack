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
    _v13 = _v0.i(0);
  _v0.s(["NameInputModal", 0, ({
    isLoading: _v0 = !1,
    isOpen: _v1,
    inputLabel: _v2 = (0, _v13.translate)({
      singular: "Title",
      dictionary: {
        es: {
          singular: "Título"
        },
        "de-DE": {
          singular: "Titel"
        },
        "fr-FR": {
          singular: "Titre"
        },
        "ja-JP": {
          singular: "タイトル"
        },
        "ko-KR": {
          singular: "제목"
        },
        "pt-BR": {
          singular: "Título"
        },
        "zh-CN": {
          singular: "标题"
        }
      }
    }),
    maxLength: _v3 = 128,
    name: _v4,
    onClose: _v5,
    onNameChange: _v6,
    onSubmit: _v7,
    saveButtonLabel: _v8 = (0, _v13.translate)({
      singular: "Save",
      dictionary: {
        es: {
          singular: "Guardar"
        },
        "de-DE": {
          singular: "Speichern"
        },
        "fr-FR": {
          singular: "Enregistrer"
        },
        "ja-JP": {
          singular: "保存"
        },
        "ko-KR": {
          singular: "저장"
        },
        "pt-BR": {
          singular: "Salvar"
        },
        "zh-CN": {
          singular: "保存"
        }
      }
    }),
    title: _v9
  }) => {
    let _v10 = _v4.trim(),
      _v11 = _v0 || 0 === _v10.length;
    return (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v1,
      onClose: _v5,
      size: "md",
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
        as: "form",
        borderRadius: "md",
        onSubmit: _v0 => {
          _v0.preventDefault(), _v11 || _v7(_v10);
        },
        children: [(0, _v1.jsx)(_v8.ModalCloseButton, {}), (0, _v1.jsx)(_v11.ModalHeader, {
          children: _v9
        }), (0, _v1.jsx)(_v7.ModalBody, {
          children: (0, _v1.jsxs)(_v3.FormControl, {
            children: [(0, _v1.jsx)(_v4.FormLabel, {
              children: _v2
            }), (0, _v1.jsx)(_v5.Input, {
              autoFocus: !0,
              isDisabled: _v0,
              maxLength: _v3,
              value: _v4,
              onChange: _v0 => {
                _v6(_v0.target.value);
              }
            })]
          })
        }), (0, _v1.jsxs)(_v10.ModalFooter, {
          children: [(0, _v1.jsx)(_v2.Button, {
            type: "button",
            onClick: _v5,
            variant: "secondary",
            children: (0, _v13.translate)({
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
            type: "submit",
            isDisabled: _v11,
            isLoading: _v0,
            variant: "primary",
            children: _v8
          })]
        })]
      })]
    });
  }], 0);
  let _v14 = 128;
  _v0.s(["buildCopyPrefilledTitle", 0, (_v0, _v1 = _v14) => {
    let _v2 = [..._v0].slice(0, Math.max(0, _v1 - [...(0, _v13.translate)({
      singular: "Copy of {NAME}",
      replacements: {
        NAME: ""
      },
      dictionary: {
        es: {
          singular: "Copia de {NAME}"
        },
        "de-DE": {
          singular: "Kopie von {NAME}"
        },
        "fr-FR": {
          singular: "Copie de {NAME}"
        },
        "ja-JP": {
          singular: "{NAME} のコピー"
        },
        "ko-KR": {
          singular: "{NAME}의 복사본"
        },
        "pt-BR": {
          singular: "Cópia de {NAME}"
        },
        "zh-CN": {
          singular: "{NAME} 的副本"
        }
      }
    })].length)).join("");
    return (0, _v13.translate)({
      singular: "Copy of {NAME}",
      replacements: {
        NAME: _v2
      },
      dictionary: {
        es: {
          singular: "Copia de {NAME}"
        },
        "de-DE": {
          singular: "Kopie von {NAME}"
        },
        "fr-FR": {
          singular: "Copie de {NAME}"
        },
        "ja-JP": {
          singular: "{NAME} のコピー"
        },
        "ko-KR": {
          singular: "{NAME}의 복사본"
        },
        "pt-BR": {
          singular: "Cópia de {NAME}"
        },
        "zh-CN": {
          singular: "{NAME} 的副本"
        }
      }
    });
  }], 0);
}