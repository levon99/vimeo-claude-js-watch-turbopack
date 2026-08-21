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
    _v16 = _v0.i(0);
  _v0.s(["NameInputModal", 0, ({
    error: _v0,
    isLoading: _v1 = !1,
    isOpen: _v2,
    inputLabel: _v3 = (0, _v15.translate)({
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
    maxLength: _v4 = _v16.VIDEO_TITLE_MAX_LENGTH,
    name: _v5,
    onClose: _v6,
    onNameChange: _v7,
    onSubmit: _v8,
    saveButtonLabel: _v9 = (0, _v15.translate)({
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
    title: _v10
  }) => {
    let _v11 = _v5.trim(),
      _v12 = _v1 || 0 === _v11.length,
      _v13 = `${_v5.length}/${_v4}`;
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v2,
      onClose: _v6,
      size: "md",
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
        as: "form",
        borderRadius: "md",
        onSubmit: _v0 => {
          _v0.preventDefault(), _v12 || _v8(_v11);
        },
        children: [(0, _v1.jsx)(_v10.ModalCloseButton, {}), (0, _v1.jsx)(_v13.ModalHeader, {
          children: _v10
        }), (0, _v1.jsx)(_v9.ModalBody, {
          children: (0, _v1.jsxs)(_v4.FormControl, {
            isInvalid: void 0 !== _v0,
            children: [(0, _v1.jsx)(_v6.FormLabel, {
              children: _v3
            }), (0, _v1.jsx)(_v7.Input, {
              autoFocus: !0,
              isDisabled: _v1,
              maxLength: _v4,
              value: _v5,
              onChange: _v0 => {
                _v7(_v0.target.value);
              }
            }), (0, _v1.jsxs)(_v3.Flex, {
              justify: void 0 === _v0 ? "flex-end" : "space-between",
              gap: "xs",
              children: [(0, _v1.jsx)(_v5.FormErrorMessage, {
                fontSize: "body-xs",
                children: _v0
              }), (0, _v1.jsx)(_v4.FormHelperText, {
                fontSize: "body-xs",
                color: "text-tertiary",
                children: _v13
              })]
            })]
          })
        }), (0, _v1.jsxs)(_v12.ModalFooter, {
          children: [(0, _v1.jsx)(_v2.Button, {
            type: "button",
            onClick: _v6,
            variant: "secondary",
            children: (0, _v15.translate)({
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
            isDisabled: _v12,
            isLoading: _v1,
            variant: "primary",
            children: _v9
          })]
        })]
      })]
    });
  }], 0);
  var _v17 = _v16;
  _v0.s(["buildCopyPrefilledTitle", 0, (_v0, _v1 = _v17.VIDEO_TITLE_MAX_LENGTH) => {
    let _v2 = [..._v0].slice(0, Math.max(0, _v1 - [...(0, _v15.translate)({
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
    return (0, _v15.translate)({
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