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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = ["language", "drugs", "violence", "nudity"],
    _v46 = ["preferences.videos.license", "preferences.videos.privacy.add", "preferences.videos.privacy.allowShareLink", "preferences.videos.privacy.clipEmbedAllowedDomains", "preferences.videos.privacy.comments", "preferences.videos.privacy.download", "preferences.videos.privacy.embed", "preferences.videos.privacy.password", "preferences.videos.privacy.view", "preferences.videos.password", "preferences.videos.hideStats", "preferences.videos.rating", "preferences.videos.autoccDisplayEnabledByDefault", "preferences.videos.sharingLinkDefaultExpiryDays"],
    _v47 = _v0 => 0 === _v0.length || _v0.includes("safe") && _v45.some(_v0 => _v0.includes(_v0)) ? ["unrated"] : _v0,
    _v48 = ({
      addDomainToWhitelist: _v0,
      domainWhitelist: _v1,
      removeDomainFromWhitelist: _v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)(""),
        [_v5, _v6] = (0, _v2.useState)(null),
        _v7 = (0, _v2.useMemo)(() => ({
          listEmpty: (0, _v28.translate)({
            singular: "At least 1 domain must be allowed",
            dictionary: {
              es: {
                singular: "Se debe permitir, al menos, 1 dominio"
              },
              "de-DE": {
                singular: "Mindestens eine Domain muss zugelassen werden."
              },
              "fr-FR": {
                singular: "Au moins un domaine doit être autorisé"
              },
              "ja-JP": {
                singular: "少なくとも1つのドメインを許可する必要があります"
              },
              "ko-KR": {
                singular: "최소 1개의 도메인이 허용되어야 합니다."
              },
              "pt-BR": {
                singular: "Pelo menos 1 domínio deve ser permitido"
              },
              "zh-CN": {
                singular: "必须至少允许 1 个域名"
              }
            }
          }),
          invalidUrl: (0, _v28.translate)({
            singular: "Enter a valid URL",
            dictionary: {
              es: {
                singular: "Ingresar un URL válido"
              },
              "de-DE": {
                singular: "Gib eine gültige URL ein"
              },
              "fr-FR": {
                singular: "Saisissez une URL valide"
              },
              "ja-JP": {
                singular: "正しいURLを入力してください"
              },
              "ko-KR": {
                singular: "유효한 URL을 입력하세요."
              },
              "pt-BR": {
                singular: "Digite um URL válido"
              },
              "zh-CN": {
                singular: "输入有效的 URL"
              }
            }
          }),
          alreadyAdded: (0, _v28.translate)({
            singular: "Domain already added",
            dictionary: {
              es: {
                singular: "El dominio ya se agregó"
              },
              "de-DE": {
                singular: "Domain wurde bereits hinzugefügt."
              },
              "fr-FR": {
                singular: "Le domaine a déjà été ajouté"
              },
              "ja-JP": {
                singular: "ドメインはすでに追加されています"
              },
              "ko-KR": {
                singular: "도메인이 이미 추가되었습니다."
              },
              "pt-BR": {
                singular: "Domínio já adicionado"
              },
              "zh-CN": {
                singular: "域名已被添加"
              }
            }
          })
        }), []),
        _v8 = _v5 ? _v7[_v5] : "",
        _v9 = "listEmpty" !== _v5 && _v1.length > 0,
        _v10 = () => {
          if ("" === _v3.trim()) return;
          _v4("");
          let _v0 = (_v0 => {
            try {
              let _v0;
              try {
                _v0 = new URL(_v0);
              } catch (_v0) {
                _v0 = new URL("http://" + _v0);
              }
              if ("http:" !== _v0.protocol && "https:" !== _v0.protocol) return null;
              let _v1 = _v0.hostname.startsWith("www.") ? _v0.hostname.substring(4) : _v0.hostname;
              if (_v1.includes(".")) return _v1;
              return null;
            } catch (_v0) {
              return null;
            }
          })(_v3);
          _v0 ? _v1.includes(_v0) ? _v6("alreadyAdded") : (_v6(null), _v0(_v0)) : _v6("invalidUrl");
        },
        _v11 = (0, _v2.useMemo)(() => _v1.map(_v0 => (0, _v1.jsxs)(_v41.Tag, {
          size: "sm",
          children: [(0, _v1.jsx)(_v41.TagLabel, {
            children: _v0
          }), (0, _v1.jsx)(_v41.TagCloseButton, {
            onClick: () => _v2(_v0)
          })]
        }, _v0)), [_v1, _v2]);
      return (0, _v1.jsxs)(_v43.VStack, {
        w: "100%",
        gap: "sm",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v22.Text, {
          variant: "heading-xs",
          children: (0, _v28.translate)({
            singular: "Allowed domains",
            dictionary: {
              es: {
                singular: "Dominios permitidos"
              },
              "de-DE": {
                singular: "Zulässige Domains"
              },
              "fr-FR": {
                singular: "Domaines autorisés"
              },
              "ja-JP": {
                singular: "許可ドメイン"
              },
              "ko-KR": {
                singular: "허용되는 도메인"
              },
              "pt-BR": {
                singular: "Domínios permitidos"
              },
              "zh-CN": {
                singular: "允许的域名"
              }
            }
          })
        }), (0, _v1.jsxs)(_v13.FormControl, {
          w: "100%",
          isInvalid: !!_v5,
          children: [(0, _v1.jsxs)(_v39.InputGroup, {
            size: "md",
            children: [(0, _v1.jsx)(_v38.Input, {
              autoFocus: !0,
              variant: "outlined",
              placeholder: "domain.com",
              value: _v3,
              size: "md",
              onChange: _v0 => {
                _v5 && _v6(null), _v4(_v0.target.value);
              },
              onKeyDown: _v0 => "Enter" === _v0.key && _v10(),
              onBlur: _v10
            }), (0, _v1.jsx)(_v40.InputRightElement, {
              children: (0, _v1.jsx)(_v42.Tooltip, {
                label: (0, _v28.translate)({
                  singular: "Add to list",
                  dictionary: {
                    es: {
                      singular: "Agregar a la lista"
                    },
                    "de-DE": {
                      singular: "Zur Liste hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter à la liste"
                    },
                    "ja-JP": {
                      singular: "リストに追加"
                    },
                    "ko-KR": {
                      singular: "목록에 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar à lista"
                    },
                    "zh-CN": {
                      singular: "添加到列表中"
                    }
                  }
                }),
                placement: "top",
                children: (0, _v1.jsx)(_v37.IconButton, {
                  "aria-label": (0, _v28.translate)({
                    singular: "Add domain",
                    dictionary: {
                      es: {
                        singular: "Agregar un dominio"
                      },
                      "de-DE": {
                        singular: "Domäne hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un domaine"
                      },
                      "ja-JP": {
                        singular: "ドメインを追加"
                      },
                      "ko-KR": {
                        singular: "도메인 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar domínio"
                      },
                      "zh-CN": {
                        singular: "添加域"
                      }
                    }
                  }),
                  size: "sm",
                  variant: "tertiary",
                  icon: (0, _v1.jsx)(_v44.PlusCircle, {
                    cursor: "pointer"
                  }),
                  onClick: _v10
                })
              })
            })]
          }), (0, _v1.jsx)(_v14.FormErrorMessage, {
            children: _v8
          })]
        }), _v9 && (0, _v1.jsx)(_v36.HStack, {
          flexWrap: "wrap",
          maxH: (0, _v21.rem)(120),
          overflowY: "auto",
          mt: "xs",
          children: _v11
        })]
      });
    };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = [{
      value: "keep-skip",
      label: () => (0, _v28.translate)({
        singular: "Keep folder defaults and skip their videos",
        dictionary: {
          es: {
            singular: "Conservar valores predeterminados de las carpetas y omitir sus videos"
          },
          "de-DE": {
            singular: "Standardeinstellungen der Ordner beibehalten und deren Videos überspringen"
          },
          "fr-FR": {
            singular: "Conserver les paramètres par défaut des dossiers et ne pas mettre à jour leurs vidéos"
          },
          "ja-JP": {
            singular: "フォルダのデフォルトを維持し、そのフォルダ内の動画は更新しない"
          },
          "ko-KR": {
            singular: "폴더 기본값을 유지하고 해당 폴더의 동영상은 건너뜁니다."
          },
          "pt-BR": {
            singular: "Manter os padrões de pasta e ignorar os vídeos dessas pastas"
          },
          "zh-CN": {
            singular: "保留文件夹默认设置并跳过其视频"
          }
        }
      }),
      description: () => (0, _v28.translate)({
        singular: "Folder defaults are preserved and existing videos in those folders are not updated. The new account default only applies to videos that are not part of folders with custom defaults.",
        dictionary: {
          es: {
            singular: "Se conservan los valores predeterminados de las carpetas y los videos existentes en esas carpetas no se actualizan. El nuevo valor predeterminado de la cuenta solo se aplica a los videos que no formen parte de carpetas con valores predeterminados personalizados."
          },
          "de-DE": {
            singular: "Die Standardeinstellungen der Ordner bleiben erhalten und vorhandene Videos in diesen Ordnern werden nicht aktualisiert. Der neue Kontostandard gilt nur für Videos, die nicht Teil von Ordnern mit benutzerdefinierten Standardeinstellungen sind."
          },
          "fr-FR": {
            singular: "Les paramètres par défaut des dossiers sont conservés et les vidéos existantes dans ces dossiers ne sont pas mises à jour. Le nouveau paramètre par défaut du compte ne s'applique qu'aux vidéos qui ne font pas partie de dossiers ayant des paramètres par défaut personnalisés."
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは保持され、これらのフォルダ内の既存の動画は更新されません。新しいアカウントのデフォルトは、カスタムデフォルトを持たないフォルダに属する動画にのみ適用されます。"
          },
          "ko-KR": {
            singular: "폴더 기본값은 유지되며, 해당 폴더에 있는 기존 동영상은 업데이트되지 않습니다. 새 계정 기본값은 사용자 지정 기본값이 설정된 폴더에 속하지 않은 동영상에만 적용됩니다."
          },
          "pt-BR": {
            singular: "Os padrões de pasta são preservados e os vídeos existentes nessas pastas não são atualizados. O novo padrão da conta aplica-se apenas aos vídeos que não fazem parte de pastas com padrões personalizados."
          },
          "zh-CN": {
            singular: "保留文件夹默认设置，已存在于这些文件夹中的视频不会更新。新的账户默认仅适用于不属于具有自定义默认设置的文件夹的视频。"
          }
        }
      })
    }, {
      value: "keep-update",
      label: () => (0, _v28.translate)({
        singular: "Keep folder defaults, but update their videos anyway",
        dictionary: {
          es: {
            singular: "Conservar valores predeterminados de las carpetas, pero actualizar sus videos de todos modos"
          },
          "de-DE": {
            singular: "Standardeinstellungen der Ordner beibehalten, deren Videos jedoch trotzdem aktualisieren"
          },
          "fr-FR": {
            singular: "Conserver les paramètres par défaut des dossiers, mais mettre à jour leurs vidéos quand même"
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは維持するが、それでもフォルダ内の動画は更新する"
          },
          "ko-KR": {
            singular: "폴더 기본값은 유지하되, 그럼에도 불구하고 해당 폴더의 동영상을 업데이트합니다."
          },
          "pt-BR": {
            singular: "Manter os padrões de pasta, mas atualizar os vídeos dessas pastas mesmo assim"
          },
          "zh-CN": {
            singular: "保留文件夹默认设置，但仍更新其视频"
          }
        }
      }),
      description: () => (0, _v28.translate)({
        singular: "Folder defaults are preserved, but all existing videos, including those in folders with custom defaults, are updated to the new account default.",
        dictionary: {
          es: {
            singular: "Se conservan los valores predeterminados de las carpetas, pero todos los videos existentes, incluidos los de carpetas con valores predeterminados personalizados, se actualizan al nuevo valor predeterminado de la cuenta."
          },
          "de-DE": {
            singular: "Die Standardeinstellungen der Ordner bleiben erhalten, aber alle vorhandenen Videos, einschließlich derjenigen in Ordnern mit benutzerdefinierten Standardeinstellungen, werden auf den neuen Kontostandard aktualisiert."
          },
          "fr-FR": {
            singular: "Les paramètres par défaut des dossiers sont conservés, mais toutes les vidéos existantes, y compris celles situées dans des dossiers avec des paramètres par défaut personnalisés, sont mises à jour vers le nouveau paramètre par défaut du compte."
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは保持されますが、カスタムデフォルトを持つフォルダ内の動画を含むすべての既存の動画が新しいアカウントのデフォルトに更新されます。"
          },
          "ko-KR": {
            singular: "폴더 기본값은 유지되지만, 사용자 지정 기본값이 있는 폴더에 있는 동영상을 포함한 모든 기존 동영상이 새 계정 기본값으로 업데이트됩니다."
          },
          "pt-BR": {
            singular: "Os padrões de pasta são preservados, mas todos os vídeos existentes, incluindo os em pastas com padrões personalizados, são atualizados para o novo padrão da conta."
          },
          "zh-CN": {
            singular: "保留文件夹默认设置，但所有现有视频（包括位于具有自定义默认设置的文件夹中的视频）都会更新为新的账户默认。"
          }
        }
      })
    }, {
      value: "reset",
      label: () => (0, _v28.translate)({
        singular: "Reset folder defaults to the new account default",
        dictionary: {
          es: {
            singular: "Restablecer los valores predeterminados de las carpetas al nuevo valor predeterminado de la cuenta"
          },
          "de-DE": {
            singular: "Standardeinstellungen der Ordner auf den neuen Kontostandard zurücksetzen"
          },
          "fr-FR": {
            singular: "Réinitialiser les paramètres par défaut des dossiers sur le nouveau paramètre par défaut du compte"
          },
          "ja-JP": {
            singular: "フォルダのデフォルトを新しいアカウントのデフォルトにリセットする"
          },
          "ko-KR": {
            singular: "폴더 기본값을 새 계정 기본값으로 재설정"
          },
          "pt-BR": {
            singular: "Redefinir os padrões de pasta para o novo padrão da conta"
          },
          "zh-CN": {
            singular: "将文件夹默认设置重置为新的账户默认值"
          }
        }
      }),
      description: () => (0, _v28.translate)({
        singular: "Folder defaults are replaced, and all existing videos, including those in folders with custom defaults, are updated to the new account default.",
        dictionary: {
          es: {
            singular: "Se reemplazan los valores predeterminados de las carpetas y todos los videos existentes, incluidos los de carpetas con valores predeterminados personalizados, se actualizan al nuevo valor predeterminado de la cuenta."
          },
          "de-DE": {
            singular: "Die Standardeinstellungen der Ordner werden ersetzt, und alle vorhandenen Videos, einschließlich derjenigen in Ordnern mit benutzerdefinierten Standardeinstellungen, werden auf den neuen Kontostandard aktualisiert."
          },
          "fr-FR": {
            singular: "Les paramètres par défaut des dossiers sont remplacés, et toutes les vidéos existantes, y compris celles dans des dossiers avec des paramètres par défaut personnalisés, sont mises à jour vers le nouveau paramètre par défaut du compte."
          },
          "ja-JP": {
            singular: "フォルダのデフォルトは置き換えられ、カスタムデフォルトを持つフォルダ内の動画を含むすべての既存の動画が新しいアカウントのデフォルトに更新されます。"
          },
          "ko-KR": {
            singular: "폴더 기본값이 대체되며, 사용자 지정 기본값이 있는 폴더에 있는 동영상을 포함한 모든 기존 동영상이 새 계정 기본값으로 업데이트됩니다."
          },
          "pt-BR": {
            singular: "Os padrões de pasta são substituídos, e todos os vídeos existentes, incluindo os em pastas com padrões personalizados, são atualizados para o novo padrão da conta."
          },
          "zh-CN": {
            singular: "文件夹默认设置将被替换，所有现有视频（包括位于具有自定义默认设置的文件夹中的视频）都会更新为新的账户默认。"
          }
        }
      })
    }],
    _v52 = ({
      isOpen: _v0,
      onCancel: _v1,
      onSave: _v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)("keep-skip");
      return (0, _v1.jsxs)(_v6.Modal, {
        isOpen: _v0,
        onClose: _v1,
        isCentered: !0,
        children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
          children: [(0, _v1.jsx)(_v10.ModalHeader, {
            children: (0, _v1.jsx)(_v22.Text, {
              variant: "heading-md",
              children: (0, _v28.translate)({
                singular: "Reset folder defaults",
                dictionary: {
                  es: {
                    singular: "Restablecer valores predeterminados de las carpetas"
                  },
                  "de-DE": {
                    singular: "Standardeinstellungen der Ordner zurücksetzen"
                  },
                  "fr-FR": {
                    singular: "Réinitialiser les paramètres par défaut des dossiers"
                  },
                  "ja-JP": {
                    singular: "フォルダのデフォルトをリセット"
                  },
                  "ko-KR": {
                    singular: "폴더 기본값 재설정"
                  },
                  "pt-BR": {
                    singular: "Redefinir padrões de pasta"
                  },
                  "zh-CN": {
                    singular: "重置文件夹默认设置"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v19.ModalBody, {
            children: (0, _v1.jsxs)(_v12.Flex, {
              direction: "column",
              gap: "md",
              children: [(0, _v1.jsx)(_v22.Text, {
                variant: "body-md",
                children: (0, _v28.translate)({
                  singular: "Some folders have their own custom privacy defaults. How do you want to manage them?",
                  dictionary: {
                    es: {
                      singular: "Algunas carpetas tienen sus propios valores predeterminados de privacidad personalizados. ¿Cómo desea administrarlos?"
                    },
                    "de-DE": {
                      singular: "Einige Ordner haben eigene, benutzerdefinierte Datenschutzeinstellungen. Wie möchten Sie damit verfahren?"
                    },
                    "fr-FR": {
                      singular: "Certains dossiers ont leurs propres paramètres de confidentialité par défaut personnalisés. Comment souhaitez-vous les gérer ?"
                    },
                    "ja-JP": {
                      singular: "一部のフォルダには独自のプライバシーデフォルトがあります。どのように管理しますか？"
                    },
                    "ko-KR": {
                      singular: "일부 폴더는 자체 사용자 지정 프라이버시 기본값을 가지고 있습니다. 어떻게 관리하시겠습니까?"
                    },
                    "pt-BR": {
                      singular: "Algumas pastas têm seus próprios padrões personalizados de privacidade. Como você deseja gerenciá‑las?"
                    },
                    "zh-CN": {
                      singular: "有些文件夹具有自己的自定义隐私默认设置。您想如何管理它们？"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v50.RadioGroup, {
                value: _v3,
                onChange: _v0 => _v4(_v0),
                children: (0, _v1.jsx)(_v12.Flex, {
                  direction: "column",
                  gap: "md",
                  children: _v51.map(_v0 => (0, _v1.jsx)(_v49.Radio, {
                    value: _v0.value,
                    alignItems: "flex-start",
                    children: (0, _v1.jsxs)(_v12.Flex, {
                      direction: "column",
                      gap: "xxs",
                      children: [(0, _v1.jsx)(_v22.Text, {
                        variant: "body-md",
                        children: _v0.label()
                      }), (0, _v1.jsx)(_v22.Text, {
                        variant: "body-sm",
                        color: "text-secondary",
                        children: _v0.description()
                      })]
                    })
                  }, _v0.value))
                })
              })]
            })
          }), (0, _v1.jsxs)(_v9.ModalFooter, {
            children: [(0, _v1.jsx)(_v3.Button, {
              variant: "secondary",
              onClick: _v1,
              children: (0, _v28.translate)({
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
            }), (0, _v1.jsx)(_v3.Button, {
              variant: "primary",
              onClick: () => _v2(_v3),
              children: (0, _v28.translate)({
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
              })
            })]
          })]
        })]
      });
    };
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = ({
      isOpen: _v0,
      ownerId: _v1,
      onCancel: _v2,
      onSave: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(""),
        [_v6, _v7] = (0, _v2.useState)("desc"),
        [_v8, _v9] = (0, _v2.useState)(new Set()),
        _v10 = (0, _v59.useDebouncedValue)(_v4, 400),
        {
          data: _v11,
          error: _v12,
          isValidating: _v13,
          setSize: _v14
        } = (0, _v27.useGetUserUploadPresetsInfinite)({
          where: {
            userId: _v1
          },
          select: ["uri", "name", "settings.color"],
          query: {
            sort: "modified_time",
            direction: _v6,
            perPage: 25,
            ...("" === _v10 ? {} : {
              query: _v10
            })
          }
        }, {
          revalidateOnFocus: !1
        }),
        _v15 = (0, _v2.useMemo)(() => (_v11 ?? []).flatMap(_v0 => _v0.data.map(_v0 => {
          let _v1;
          return {
            id: (_v1 = _v0.uri).substring(_v1.lastIndexOf("/") + 1),
            name: _v0.name,
            color: _v0.settings?.color == null || "" === _v0.settings.color ? void 0 : _v0.settings.color
          };
        })), [_v11]),
        _v16 = _v11?.[_v11.length - 1],
        _v17 = _v16?.paging.next != null && !_v13,
        _v18 = null == _v11 && null == _v12,
        [_v19, _v20, _v21] = (0, _v60.useInfiniteScroll)(_v17),
        _v22 = _v18 || _v13 && 1 === _v19;
      (0, _v2.useEffect)(() => {
        _v14(_v19);
      }, [_v19, _v14]);
      let _v23 = `${_v10}|${_v6}`,
        [_v24, _v25] = (0, _v2.useState)(_v23);
      _v23 !== _v24 && (_v25(_v23), _v21(1), _v9(new Set()));
      let _v26 = _v15.length > 0 && _v15.every(_v0 => _v8.has(_v0.id)),
        _v27 = () => {
          _v5(""), _v7("desc"), _v9(new Set()), _v21(1);
        },
        _v28 = () => {
          _v27(), _v2();
        };
      return (0, _v1.jsxs)(_v6.Modal, {
        isOpen: _v0,
        onClose: _v28,
        isCentered: !0,
        children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
          maxW: (0, _v21.rem)(700),
          h: (0, _v21.rem)(700),
          maxH: "calc(100vh - 4rem)",
          minH: (0, _v21.rem)(400),
          children: [(0, _v1.jsx)(_v10.ModalHeader, {
            children: (0, _v1.jsx)(_v22.Text, {
              variant: "heading-md",
              children: (0, _v28.translate)({
                singular: "Update folder defaults",
                dictionary: {
                  es: {
                    singular: "Actualizar valores predeterminados de las carpetas"
                  },
                  "de-DE": {
                    singular: "Standardeinstellungen der Ordner aktualisieren"
                  },
                  "fr-FR": {
                    singular: "Mettre à jour les paramètres par défaut des dossiers"
                  },
                  "ja-JP": {
                    singular: "フォルダのデフォルトを更新"
                  },
                  "ko-KR": {
                    singular: "폴더 기본값 업데이트"
                  },
                  "pt-BR": {
                    singular: "Atualizar padrões de pasta"
                  },
                  "zh-CN": {
                    singular: "更新文件夹默认设置"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v7.ModalCloseButton, {}), (0, _v1.jsxs)(_v19.ModalBody, {
            display: "flex",
            flexDirection: "column",
            gap: "lg",
            overflow: "hidden",
            minH: "0",
            children: [(0, _v1.jsx)(_v22.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v28.translate)({
                singular: "These folders have their own custom privacy defaults. Select a folder if you want to reset its current values to the new account default you just set. Unselected folders will keep their overrides.",
                dictionary: {
                  es: {
                    singular: "Estas carpetas tienen sus propios valores predeterminados de privacidad personalizados. Selecciona una carpeta si deseas restablecer sus valores actuales al nuevo valor predeterminado de la cuenta que acabas de establecer. Las carpetas no seleccionadas conservarán sus anulaciones."
                  },
                  "de-DE": {
                    singular: "Diese Ordner haben eigene Standardwerte für die Privatsphäre. Wählen Sie einen Ordner aus, wenn Sie dessen aktuelle Werte auf den soeben gesetzten neuen Konto-Standard zurücksetzen möchten. Nicht ausgewählte Ordner behalten ihre Überschreibungen."
                  },
                  "fr-FR": {
                    singular: "Ces dossiers ont leurs propres paramètres de confidentialité par défaut personnalisés. Sélectionnez un dossier si vous souhaitez réinitialiser ses valeurs actuelles sur la nouvelle valeur par défaut du compte que vous venez de définir. Les dossiers non sélectionnés conserveront leurs paramètres personnalisés."
                  },
                  "ja-JP": {
                    singular: "これらのフォルダには独自のプライバシーの既定値が設定されています。現在の値を先ほど設定したアカウントの新しい既定値にリセットするには、フォルダを選択してください。選択されていないフォルダは上書き設定を維持します。"
                  },
                  "ko-KR": {
                    singular: "이 폴더들은 자체 사용자 지정 프라이버시 기본값을 가지고 있습니다. 방금 설정한 새 계정 기본값으로 현재 값을 재설정하려면 폴더를 선택하세요. 선택되지 않은 폴더는 개별 오버라이드를 유지합니다."
                  },
                  "pt-BR": {
                    singular: "Essas pastas têm seus próprios padrões de privacidade personalizados. Selecione uma pasta se quiser redefinir seus valores atuais para o novo padrão da conta que você acabou de definir. As pastas não selecionadas manterão suas configurações personalizadas."
                  },
                  "zh-CN": {
                    singular: "这些文件夹有其自定义的隐私默认设置。如果您想将某个文件夹的当前值重置为刚刚设置的账户新默认值，请选择该文件夹。未选中文件夹将保留其覆盖设置。"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v12.Flex, {
              direction: "column",
              gap: "md",
              flex: "1",
              minH: "0",
              children: [(0, _v1.jsx)(_v54.Search, {
                value: _v4,
                onChange: _v0 => _v5(_v0.currentTarget.value),
                placeholder: (0, _v28.translate)({
                  singular: "Search folders",
                  dictionary: {
                    es: {
                      singular: "Buscar en carpetas"
                    },
                    "de-DE": {
                      singular: "Ordner durchsuchen"
                    },
                    "fr-FR": {
                      singular: "Recherche dans les dossiers"
                    },
                    "ja-JP": {
                      singular: "検索フォルダー"
                    },
                    "ko-KR": {
                      singular: "폴더 검색"
                    },
                    "pt-BR": {
                      singular: "Pesquisar Pastas"
                    },
                    "zh-CN": {
                      singular: "搜索文件夹"
                    }
                  }
                }),
                "data-lpignore": "true"
              }), (0, _v1.jsxs)(_v12.Flex, {
                align: "center",
                justify: "space-between",
                children: [(0, _v1.jsx)(_v4.Checkbox, {
                  size: "sm",
                  isChecked: _v26,
                  isIndeterminate: !_v26 && _v8.size > 0,
                  isDisabled: 0 === _v15.length,
                  onChange: () => {
                    _v9(_v0 => {
                      let _v1 = new Set(_v0);
                      return _v15.forEach(_v0 => {
                        _v26 ? _v1.delete(_v0.id) : _v1.add(_v0.id);
                      }), _v1;
                    });
                  },
                  children: (0, _v1.jsx)(_v22.Text, {
                    variant: "body-sm",
                    children: (0, _v28.translate)({
                      singular: "{COUNT} selected",
                      replacements: {
                        COUNT: _v8.size
                      },
                      dictionary: {
                        es: {
                          singular: "{COUNT} seleccionado(s)"
                        },
                        "de-DE": {
                          singular: "{COUNT} ausgewählt"
                        },
                        "fr-FR": {
                          singular: "{COUNT} sélectionné(s)"
                        },
                        "ja-JP": {
                          singular: "{COUNT} 選択済み"
                        },
                        "ko-KR": {
                          singular: "{COUNT}개 선택됨"
                        },
                        "pt-BR": {
                          singular: "{COUNT} selecionado(s)"
                        },
                        "zh-CN": {
                          singular: "{COUNT} 个已选择"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsxs)(_v15.Menu, {
                  children: [(0, _v1.jsx)(_v16.MenuButton, {
                    as: _v3.Button,
                    variant: "tertiary",
                    size: "sm",
                    rightIcon: (0, _v1.jsx)(_v57.SortSmall, {}),
                    children: (0, _v28.translate)({
                      singular: "Last added",
                      dictionary: {
                        es: {
                          singular: "Más recientemente añadidos"
                        },
                        "de-DE": {
                          singular: "Zuletzt hinzugefügt"
                        },
                        "fr-FR": {
                          singular: "Ajout le plus récent"
                        },
                        "ja-JP": {
                          singular: "最新追加"
                        },
                        "ko-KR": {
                          singular: "최근 추가"
                        },
                        "pt-BR": {
                          singular: "Últimos adicionados"
                        },
                        "zh-CN": {
                          singular: "最近添加"
                        }
                      }
                    })
                  }), (0, _v1.jsxs)(_v18.MenuList, {
                    children: [(0, _v1.jsx)(_v17.MenuItem, {
                      onClick: () => _v7("desc"),
                      children: (0, _v1.jsx)(_v22.Text, {
                        variant: "body-md",
                        children: (0, _v28.translate)({
                          singular: "Newest first",
                          dictionary: {
                            es: {
                              singular: "Más recientes primero"
                            },
                            "de-DE": {
                              singular: "Neueste zuerst"
                            },
                            "fr-FR": {
                              singular: "Les plus récents d'abord"
                            },
                            "ja-JP": {
                              singular: "新しい順"
                            },
                            "ko-KR": {
                              singular: "최신순"
                            },
                            "pt-BR": {
                              singular: "Mais recentes primeiro"
                            },
                            "zh-CN": {
                              singular: "最新在前"
                            }
                          }
                        })
                      })
                    }), (0, _v1.jsx)(_v17.MenuItem, {
                      onClick: () => _v7("asc"),
                      children: (0, _v1.jsx)(_v22.Text, {
                        variant: "body-md",
                        children: (0, _v28.translate)({
                          singular: "Oldest first",
                          dictionary: {
                            es: {
                              singular: "Más antiguos primero"
                            },
                            "de-DE": {
                              singular: "Älteste zuerst"
                            },
                            "fr-FR": {
                              singular: "Les plus anciens d'abord"
                            },
                            "ja-JP": {
                              singular: "古い順"
                            },
                            "ko-KR": {
                              singular: "오래된 순"
                            },
                            "pt-BR": {
                              singular: "Mais antigas primeiro"
                            },
                            "zh-CN": {
                              singular: "最早在前"
                            }
                          }
                        })
                      })
                    })]
                  })]
                })]
              }), (0, _v1.jsxs)(_v12.Flex, {
                direction: "column",
                flex: "1",
                minH: "0",
                overflowY: "auto",
                children: [!_v22 && _v15.map((_v0, _v1) => (0, _v1.jsxs)(_v58.ContentRow, {
                  dragDropRef: _v1 === _v15.length - 1 ? _v0 => {
                    _v0 instanceof HTMLDivElement && _v20(_v0);
                  } : void 0,
                  listGridColumns: `min-content ${(0, _v21.rem)(100)} minmax(0, 1fr)`,
                  gridColumnGap: "md",
                  isSelected: _v8.has(_v0.id),
                  flexShrink: 0,
                  width: "100%",
                  children: [(0, _v1.jsx)(_v4.Checkbox, {
                    size: "md",
                    isChecked: _v8.has(_v0.id),
                    onChange: _v0 => {
                      var _v1, _v2;
                      return _v1 = _v0.id, _v2 = _v0.target.checked, void _v9(_v0 => {
                        let _v1 = new Set(_v0);
                        return _v2 ? _v1.add(_v1) : _v1.delete(_v1), _v1;
                      });
                    },
                    "aria-label": _v0.name
                  }), (0, _v1.jsx)(_v58.ContentRow.DefaultThumbnail, {
                    background: _v0.color,
                    borderRadius: "sm",
                    minWidth: (0, _v21.rem)(100),
                    children: (0, _v1.jsx)(_v56.FolderFilled, {
                      color: void 0 === _v0.color ? "text-secondary" : (0, _v53.readableColor)(_v0.color),
                      opacity: "0.4",
                      boxSize: "md"
                    })
                  }), (0, _v1.jsx)(_v22.Text, {
                    variant: "heading-xs",
                    noOfLines: 1,
                    children: _v0.name
                  })]
                }, _v0.id)), !_v22 && null != _v12 && (0, _v1.jsx)(_v22.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v28.translate)({
                    singular: "Something went wrong. Please try again.",
                    dictionary: {
                      es: {
                        singular: "Algo salió mal. Inténtalo de nuevo."
                      },
                      "de-DE": {
                        singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
                      },
                      "fr-FR": {
                        singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
                      },
                      "ja-JP": {
                        singular: "エラーが発生しました。 再度お試しください。"
                      },
                      "ko-KR": {
                        singular: "문제가 발생했습니다. 다시 시도해주세요."
                      },
                      "pt-BR": {
                        singular: "Alguma coisa deu errado. Por favor, tente novamente."
                      },
                      "zh-CN": {
                        singular: "出错了。请重试。"
                      }
                    }
                  })
                }), !_v22 && 0 === _v15.length && null == _v12 && (0, _v1.jsx)(_v22.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v28.translate)({
                    singular: "No folders found",
                    dictionary: {
                      es: {
                        singular: "No se encontraron carpetas"
                      },
                      "de-DE": {
                        singular: "Keine Ordner gefunden"
                      },
                      "fr-FR": {
                        singular: "Aucun dossier trouvé"
                      },
                      "ja-JP": {
                        singular: "フォルダが見つかりません"
                      },
                      "ko-KR": {
                        singular: "폴더를 찾을 수 없습니다."
                      },
                      "pt-BR": {
                        singular: "Nenhuma pasta encontrada"
                      },
                      "zh-CN": {
                        singular: "未找到文件夹"
                      }
                    }
                  })
                }), (_v22 || _v13) && (0, _v1.jsx)(_v12.Flex, {
                  justify: "center",
                  py: "md",
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v55.Spinner, {
                    size: "md",
                    "aria-label": (0, _v28.translate)({
                      singular: "Loading folders",
                      dictionary: {
                        es: {
                          singular: "Cargando carpetas"
                        },
                        "de-DE": {
                          singular: "Ordner werden geladen"
                        },
                        "fr-FR": {
                          singular: "Chargement des dossiers"
                        },
                        "ja-JP": {
                          singular: "フォルダを読み込み中"
                        },
                        "ko-KR": {
                          singular: "폴더 불러오는 중"
                        },
                        "pt-BR": {
                          singular: "Carregando pastas"
                        },
                        "zh-CN": {
                          singular: "正在加载文件夹"
                        }
                      }
                    })
                  })
                })]
              })]
            })]
          }), (0, _v1.jsxs)(_v9.ModalFooter, {
            children: [(0, _v1.jsx)(_v3.Button, {
              variant: "tertiary",
              onClick: _v28,
              children: (0, _v28.translate)({
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
            }), (0, _v1.jsx)(_v3.Button, {
              variant: "primary",
              isLoading: _v18 || _v13,
              onClick: () => {
                let _v0 = [..._v8];
                _v27(), _v3(_v0);
              },
              children: (0, _v28.translate)({
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
              })
            })]
          })]
        })]
      });
    },
    _v62 = _v0 => {
      let [_v1, _v2] = (0, _v2.useState)(_v0),
        _v3 = (0, _v2.useRef)(_v0),
        _v4 = (0, _v2.useCallback)(function (_v0, _v1) {
          _v2(_v0 => ({
            ..._v0,
            [_v0]: _v1
          }));
        }, [_v2]),
        _v5 = (0, _v2.useCallback)(_v0 => {
          _v2(_v0 => ({
            ..._v0,
            ..._v0
          })), _v3.current = {
            ..._v3.current,
            ..._v0
          };
        }, [_v2]),
        _v6 = (0, _v2.useCallback)(() => {
          _v2(_v3.current);
        }, [_v2]),
        _v7 = JSON.stringify(_v3.current) !== JSON.stringify(_v1);
      return {
        state: _v1,
        hasChanges: _v7,
        updateState: _v4,
        initializeState: _v5,
        resetState: _v6
      };
    };
  var _v63 = _v0.i(0);
  let _v64 = () => {
    let _v0 = (0, _v35.useViewer)(),
      _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        data: _v2,
        mutate: _v3,
        isLoading: _v4
      } = (0, _v63.useGetUser)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: _v46,
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      [_v5, {
        loading: _v6,
        error: _v7,
        data: _v8,
        called: _v9
      }] = (0, _v63.usePatchUser)(),
      _v10 = async _v0 => {
        _v1 && (await _v5({
          select: _v46,
          variables: _v0,
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          },
          where: {
            userId: _v1
          }
        }), _v3());
      };
    return {
      patchError: _v7,
      patchData: _v8,
      patchCalled: _v9,
      patchLoading: _v6,
      defaults: _v2?.preferences?.videos,
      isLoading: _v6 || _v4,
      updateUploadDefaults: _v10
    };
  };
  var _v65 = _v0.i(0);
  let _v66 = "/manage/workspace/security-and-data/privacy-restrictions",
    _v67 = (_v0 = _v66) => ({
      videoPrivacyLabel: (0, _v28.translate)({
        singular: "Privacy",
        dictionary: {
          es: {
            singular: "Privacidad"
          },
          "de-DE": {
            singular: "Datenschutz"
          },
          "fr-FR": {
            singular: "Confidentialité "
          },
          "ja-JP": {
            singular: "プライバシー"
          },
          "ko-KR": {
            singular: "프라이버시"
          },
          "pt-BR": {
            singular: "Privacidade"
          },
          "zh-CN": {
            singular: "隐私"
          }
        }
      }),
      passwordPlaceholder: (0, _v28.translate)({
        singular: "Enter password",
        dictionary: {
          es: {
            singular: "Ingresar la contraseña"
          },
          "de-DE": {
            singular: "Bitte Kennwort eingeben"
          },
          "fr-FR": {
            singular: "Saisir mot de passe"
          },
          "ja-JP": {
            singular: "パスワードを入力"
          },
          "ko-KR": {
            singular: "비밀번호 입력"
          },
          "pt-BR": {
            singular: "Digite a senha"
          },
          "zh-CN": {
            singular: "输入密码"
          }
        }
      }),
      embedLocationLabel: (0, _v28.translate)({
        singular: "Where can content be embedded?",
        dictionary: {
          es: {
            singular: "¿Dónde se puede insertar el contenido?"
          },
          "de-DE": {
            singular: "Wo können Inhalte eingebettet werden?"
          },
          "fr-FR": {
            singular: "Où le contenu peut-il être intégré ?"
          },
          "ja-JP": {
            singular: "コンテンツはどこに埋め込むことができますか？"
          },
          "ko-KR": {
            singular: "콘텐츠 임베드 위치"
          },
          "pt-BR": {
            singular: "Onde o conteúdo pode ser incorporado?"
          },
          "zh-CN": {
            singular: "内容可以可以嵌入到哪里？"
          }
        }
      }),
      privacyDefaultsSettings: (0, _v28.translate)({
        singular: "Privacy defaults",
        dictionary: {
          es: {
            singular: "Valores predeterminados de privacidad"
          },
          "de-DE": {
            singular: "Datenschutz-Standardeinstellungen"
          },
          "fr-FR": {
            singular: "Confidentialité par défaut"
          },
          "ja-JP": {
            singular: "プライバシーのデフォルト"
          },
          "ko-KR": {
            singular: "프라이버시 기본값"
          },
          "pt-BR": {
            singular: "Padrões de privacidade"
          },
          "zh-CN": {
            singular: "隐私默认设置"
          }
        }
      }),
      passwordErrorMsg: (0, _v28.translate)({
        singular: "Required",
        dictionary: {
          es: {
            singular: "Requerido"
          },
          "de-DE": {
            singular: "Erforderlich"
          },
          "fr-FR": {
            singular: "Obligatoire"
          },
          "ja-JP": {
            singular: "必須"
          },
          "ko-KR": {
            singular: "필수"
          },
          "pt-BR": {
            singular: "Obrigatório"
          },
          "zh-CN": {
            singular: "必填"
          }
        }
      }),
      applyToAllExistingVideos: (0, _v28.translate)({
        singular: "Apply to all existing videos",
        dictionary: {
          es: {
            singular: "Aplicar a todos los videos existentes"
          },
          "de-DE": {
            singular: "Auf alle vorhandenen Videos anwenden"
          },
          "fr-FR": {
            singular: "Appliquer à toutes les vidéos existantes"
          },
          "ja-JP": {
            singular: "既存のすべての動画に適用"
          },
          "ko-KR": {
            singular: "기존 동영상 전체에 적용"
          },
          "pt-BR": {
            singular: "Aplicar a todos os vídeos existentes"
          },
          "zh-CN": {
            singular: "应用于所有现有视频"
          }
        }
      }),
      save: (0, _v28.translate)({
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
      description: (0, _v28.translate)({
        singular: "These settings apply to all new videos, showcases, and events. You can manage which privacies are available in {LINK}Security and data{/LINK}.",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v65.Link, {
            href: _v0,
            variant: "inline-primary",
            fontSize: "inherit",
            target: "_blank",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Esta configuración se aplica a todos los videos, las presentaciones y los eventos nuevos. Puede gestionar qué configuraciones de privacidad hay disponibles en {LINK}Seguridad y datos{/LINK}."
          },
          "de-DE": {
            singular: "Diese Einstellungen gelten für alle neuen Videos, Schaufenster und Veranstaltungen. Sie können unter {LINK}Sicherheit und Daten{/LINK} verwalten, welche Datenschutzeinstellungen verfügbar sind."
          },
          "fr-FR": {
            singular: "Ces paramètres s'appliquent à toutes les nouvelles vidéos, présentations et événements. Vous pouvez gérer les options de confidentialité disponibles dans {LINK}Sécurité et données{/LINK}."
          },
          "ja-JP": {
            singular: "これらの設定は、すべての新しい動画、ショーケース、イベントに適用されます。{LINK}セキュリティおよびデータ{/LINK}で利用できるプライバシーを管理できます。"
          },
          "ko-KR": {
            singular: "이러한 설정은 모든 새 동영상, 쇼케이스 및 이벤트에 적용됩니다. {LINK}보안 및 데이터{/LINK}에서 사용할 수 있는 프라이버시를 관리할 수 있습니다."
          },
          "pt-BR": {
            singular: "Essas configurações serão aplicadas a todos os novos vídeos, eventos e vitrines. Acesse {LINK}Segurança e dados{/LINK} para gerenciar as opções de privacidade disponíveis."
          },
          "zh-CN": {
            singular: "这些设置适用于所有新视频、展示和活动。您可以在{LINK}安全和数据{/LINK}中管理哪些隐私可用。"
          }
        }
      }),
      viewerPermissions: (0, _v28.translate)({
        singular: "Viewer permissions",
        dictionary: {
          es: {
            singular: "Permisos de los espectadores"
          },
          "de-DE": {
            singular: "Zuschauerberechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations du spectateur"
          },
          "ja-JP": {
            singular: "視聴者権限"
          },
          "ko-KR": {
            singular: "뷰어 권한"
          },
          "pt-BR": {
            singular: "Permissões do espectador"
          },
          "zh-CN": {
            singular: "观众权限"
          }
        }
      }),
      viewerPermissionsDescription: (0, _v28.translate)({
        singular: "These settings apply to all new videos and events",
        dictionary: {
          es: {
            singular: "Esta configuración se aplica a todos los videos y eventos nuevos"
          },
          "de-DE": {
            singular: "Diese Einstellungen gelten für alle neuen Videos und Veranstaltungen"
          },
          "fr-FR": {
            singular: "Ces paramètres s'appliquent à toutes les nouvelles vidéos et tous les nouveaux événements"
          },
          "ja-JP": {
            singular: "これらの設定は、すべての新しい動画とイベントに適用されます"
          },
          "ko-KR": {
            singular: "이 설정은 모든 새 동영상과 이벤트에 적용됩니다."
          },
          "pt-BR": {
            singular: "Essas configurações serão aplicadas a todos os novos vídeos e eventos"
          },
          "zh-CN": {
            singular: "这些设置适用于所有新视频和事件"
          }
        }
      }),
      ccLicenseLink: (0, _v28.translate)({
        singular: "{LINK}About Creative Commons licenses{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v65.Link, {
            target: "_blank",
            href: "https://help.vimeo.com/hc/en-us/articles/12427652203153-What-do-the-different-Creative-Commons-licenses-mean",
            fontSize: "inherit",
            textDecoration: "underline",
            children: _v0
          }, _v0)
        },
        dictionary: {
          es: {
            singular: "{LINK}Acerca de las licencias de Creative Commons{/LINK}"
          },
          "de-DE": {
            singular: "{LINK}Über Creative Commons-Lizenzen{/LINK}"
          },
          "fr-FR": {
            singular: "{LINK}À propos des licences Creative Commons{/LINK}"
          },
          "ja-JP": {
            singular: "{LINK}クリエイティブ・コモンズ・ライセンスについて{/LINK}"
          },
          "ko-KR": {
            singular: "{LINK}크리에이티브 커먼즈 라이선스 정보{/LINK}"
          },
          "pt-BR": {
            singular: "{LINK}Sobre as licenças Creative Commons{/LINK}"
          },
          "zh-CN": {
            singular: "{LINK}关于 Creative Commons 许可协议{/LINK}"
          }
        }
      }),
      contentRating: (0, _v28.translate)({
        singular: "Content rating",
        dictionary: {
          es: {
            singular: "Calificación del contenido"
          },
          "de-DE": {
            singular: "Inhaltsbewertung"
          },
          "fr-FR": {
            singular: "Classification des contenus"
          },
          "ja-JP": {
            singular: "コンテンツ レーティング"
          },
          "ko-KR": {
            singular: "콘텐츠 등급"
          },
          "pt-BR": {
            singular: "Classificação de conteúdo"
          },
          "zh-CN": {
            singular: "内容分级"
          }
        }
      }),
      applyToAllUnratedVideosWarning: (0, _v28.translate)({
        singular: "This only applies to unrated videos.",
        dictionary: {
          es: {
            singular: "Esto solo se aplica a los vídeos sin calificación."
          },
          "de-DE": {
            singular: "Dies gilt nur für nicht bewertete Videos."
          },
          "fr-FR": {
            singular: "Cela ne s'applique qu'aux vidéos non classées."
          },
          "ja-JP": {
            singular: "これは未評価の動画にのみ適用されます。"
          },
          "ko-KR": {
            singular: "이 항목은 등급이 지정되지 않은 동영상에만 적용됩니다."
          },
          "pt-BR": {
            singular: "Isso se aplica apenas a vídeos sem classificação."
          },
          "zh-CN": {
            singular: "这仅适用于未评级的视频。"
          }
        }
      }),
      contentRatingTooltip: (0, _v28.translate)({
        singular: "Labeling the contents of your video keeps Vimeo safe and accessible to as many audiences as possible",
        dictionary: {
          es: {
            singular: "Etiquetar el contenido de su video hace que Vimeo sea seguro y accesible para la mayor cantidad de audiencia posible"
          },
          "de-DE": {
            singular: "Die Kennzeichnung der Inhalte Ihres Videos sorgt dafür, dass Vimeo sicher und für möglichst viele Zielgruppen zugänglich ist."
          },
          "fr-FR": {
            singular: "L'étiquetage du contenu de votre vidéo contribue à assurer la sécurité de Vimeo et à le rendre accessible au plus grand nombre de publics possibles"
          },
          "ja-JP": {
            singular: "動画に含まれるコンテンツにラベル付けすると、Vimeoに安全にアクセス可能なオーディエンス数を最大化できます"
          },
          "ko-KR": {
            singular: "동영상 콘텐츠에 라벨을 추가하면 최대한 많은 시청자가 Vimeo를 안전하게 이용할 수 있습니다."
          },
          "pt-BR": {
            singular: "O rótulo com o conteúdo do seu vídeo mantém o Vimeo seguro e acessível para o maior público possível"
          },
          "zh-CN": {
            singular: "给您的视频内容贴上标签有助于保证 Vimeo 的安全，让尽可能多的观众可以访问"
          }
        }
      }),
      creativeCommonsTooltip: (0, _v28.translate)({
        singular: "Creative Commons licenses let viewers know how they're allowed to use your videos",
        dictionary: {
          es: {
            singular: "Las licencias de Creative Commons les permiten a los espectadores saber cómo pueden usar sus videos."
          },
          "de-DE": {
            singular: "Creative-Commons-Lizenzen teilen den Zuschauenden mit, wie sie Ihre Videos verwenden dürfen."
          },
          "fr-FR": {
            singular: "Les licences Creative Commons permettent aux spectateurs de savoir comment ils sont autorisés à utiliser vos vidéos"
          },
          "ja-JP": {
            singular: "クリエイティブ・コモンズ・ライセンスを使用すると、どのような動画の使用が許可されているかを視聴者に知らせることができます"
          },
          "ko-KR": {
            singular: "크리에이티브 커먼즈 라이선스(Creative Commons Licenses, CCL)를 통해 뷰어는 동영상을 어떻게 사용할 수 있는지 알 수 있습니다."
          },
          "pt-BR": {
            singular: "Com as licenças Creative Commons, os espectadores sabem como podem usar seus vídeos"
          },
          "zh-CN": {
            singular: "知识共享许可协议让观看者了解他们可以如何使用您的视频"
          }
        }
      }),
      copyright: (0, _v28.translate)({
        singular: "Copyright",
        dictionary: {
          es: {
            singular: "Derechos de autor"
          },
          "de-DE": {
            singular: "Urheberrecht"
          },
          "fr-FR": {
            singular: "Droit d'auteur"
          },
          "ja-JP": {
            singular: "著作権"
          },
          "ko-KR": {
            singular: "저작권"
          },
          "pt-BR": {
            singular: "Direitos Autorais"
          },
          "zh-CN": {
            singular: "版权"
          }
        }
      }),
      selectLicense: (0, _v28.translate)({
        singular: "Select a license...",
        dictionary: {
          es: {
            singular: "Seleccione una licencia..."
          },
          "de-DE": {
            singular: "Eine Lizenz auswählen..."
          },
          "fr-FR": {
            singular: "Sélectionnez une licence"
          },
          "ja-JP": {
            singular: "ライセンスを選択..."
          },
          "ko-KR": {
            singular: "라이선스 선택하기"
          },
          "pt-BR": {
            singular: "Selecione uma licença..."
          },
          "zh-CN": {
            singular: "选择许可..."
          }
        }
      }),
      selectRating: (0, _v28.translate)({
        singular: "Select a rating...",
        dictionary: {
          es: {
            singular: "Seleccione una calificación..."
          },
          "de-DE": {
            singular: "Wählen Sie eine Bewertung aus ..."
          },
          "fr-FR": {
            singular: "Sélectionner une classification..."
          },
          "ja-JP": {
            singular: "レーティングを選択してください..."
          },
          "ko-KR": {
            singular: "등급 선택..."
          },
          "pt-BR": {
            singular: "Selecione uma classificação..."
          },
          "zh-CN": {
            singular: "选择分级..."
          }
        }
      }),
      changesSaved: (0, _v28.translate)({
        singular: "Changes saved",
        dictionary: {
          es: {
            singular: "Guardamos los cambios"
          },
          "de-DE": {
            singular: "Änderungen wurden gespeichert"
          },
          "fr-FR": {
            singular: "Changements sauvegardés"
          },
          "ja-JP": {
            singular: "変更内容が保存されました"
          },
          "ko-KR": {
            singular: "변경 사항 저장 완료"
          },
          "pt-BR": {
            singular: "Alterações salvas"
          },
          "zh-CN": {
            singular: "已保存更改"
          }
        }
      }),
      changesWereNotSaved: (0, _v28.translate)({
        singular: "Changes were not saved. Please try again.",
        dictionary: {
          es: {
            singular: "Los cambios no se guardaron. Inténtelo de nuevo."
          },
          "de-DE": {
            singular: "Die Änderungen wurden nicht gespeichert. Bitte versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Les modifications n'ont pas été enregistrées. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "変更が保存されませんでした。もう一度お試しください。"
          },
          "ko-KR": {
            singular: "변경사항이 저장되지 않았습니다. 다시 시도해 주세요."
          },
          "pt-BR": {
            singular: "As alterações não foram salvas. Tente novamente."
          },
          "zh-CN": {
            singular: "更改未保存。请重试。"
          }
        }
      })
    }),
    _v68 = "uds-privacy-update",
    _v69 = {
      view: "anybody",
      embed: "public",
      password: "",
      domainAllowlist: [],
      error: !1,
      applyViewPrivacyToAll: !1,
      applyEmbedPrivacyToAll: !1,
      sharingLinkExpiryDays: 0
    },
    _v70 = [{
      value: 0,
      label: () => (0, _v28.translate)({
        singular: "No expiration",
        dictionary: {
          es: {
            singular: "Sin expiración"
          },
          "de-DE": {
            singular: "Kein Ablaufdatum"
          },
          "fr-FR": {
            singular: "Pas d'expiration"
          },
          "ja-JP": {
            singular: "期限なし"
          },
          "ko-KR": {
            singular: "만료 없음"
          },
          "pt-BR": {
            singular: "Sem expiração"
          },
          "zh-CN": {
            singular: "无限期"
          }
        }
      })
    }, {
      value: 1,
      label: () => (0, _v28.translate)({
        singular: "1 day",
        dictionary: {
          es: {
            singular: "1 día"
          },
          "de-DE": {
            singular: "1 Tag"
          },
          "fr-FR": {
            singular: "1 jour"
          },
          "ja-JP": {
            singular: "1日"
          },
          "ko-KR": {
            singular: "1일"
          },
          "pt-BR": {
            singular: "1 dia"
          },
          "zh-CN": {
            singular: "1 天"
          }
        }
      })
    }, {
      value: 7,
      label: () => (0, _v28.translate)({
        singular: "1 week",
        dictionary: {
          es: {
            singular: "1 semana"
          },
          "de-DE": {
            singular: "1 Woche"
          },
          "fr-FR": {
            singular: "1 semaine"
          },
          "ja-JP": {
            singular: "1週間"
          },
          "ko-KR": {
            singular: "1주일"
          },
          "pt-BR": {
            singular: "1 semana"
          },
          "zh-CN": {
            singular: "1 周"
          }
        }
      })
    }, {
      value: 30,
      label: () => (0, _v28.translate)({
        singular: "30 days",
        dictionary: {
          es: {
            singular: "30 días"
          },
          "de-DE": {
            singular: "30 Tage"
          },
          "fr-FR": {
            singular: "30 jours"
          },
          "ja-JP": {
            singular: "30日間"
          },
          "ko-KR": {
            singular: "30일"
          },
          "pt-BR": {
            singular: "30 dias"
          },
          "zh-CN": {
            singular: "30 天"
          }
        }
      })
    }];
  _v0.s(["PrivacyDefaultsModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSaveSuccess: _v2,
    privacyRestrictionsHref: _v3
  }) => {
    let {
        defaults: _v4,
        isLoading: _v5,
        patchCalled: _v6,
        patchError: _v7,
        patchLoading: _v8,
        updateUploadDefaults: _v9
      } = _v64(),
      {
        initializeState: _v10,
        resetState: _v11,
        updateState: _v12,
        state: _v13,
        hasChanges: _v14
      } = _v62(_v69),
      _v15 = (0, _v35.useViewer)(),
      _v16 = _v15?.teamUser?.ownerId ?? _v15?.user?.id,
      {
        allowedPrivacies: _v17
      } = (0, _v32.useUserAllowedPrivacies)(void 0, {
        includeFreeTierUnlisted: !1
      }),
      _v18 = (0, _v29.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "bi_expiring_links_default_expiry_days"]),
      {
        capabilities: _v19,
        ready: _v20,
        error: _v21
      } = (0, _v26.useCapability)(["folderUploadPresets"], _v16),
      _v22 = !0 === _v19.folderUploadPresets,
      {
        data: _v23,
        error: _v24,
        mutate: _v25
      } = (0, _v27.useGetUserUploadPresets)(() => _v22 && _v16 ? {
        where: {
          userId: _v16
        },
        select: ["uri"]
      } : null),
      [_v26, {
        loading: _v27,
        error: _v28,
        called: _v29
      }] = (0, _v27.useDeleteUserUploadPresets)(),
      [_v30, {
        loading: _v31,
        error: _v32,
        called: _v33
      }] = (0, _v27.usePutUserUploadPresets)(),
      [_v34, _v35] = (0, _v2.useState)(!1),
      [_v36, _v37] = (0, _v2.useState)(!1),
      _v38 = (0, _v2.useRef)(!1),
      _v39 = (0, _v2.useRef)(!1),
      _v40 = (0, _v2.useRef)(!1),
      _v41 = (0, _v2.useRef)(null),
      _v42 = (_v23?.total ?? 0) > 0,
      _v43 = !_v22 && !_v20 && null === _v21 || _v22 && void 0 === _v23 && null == _v24,
      _v44 = _v13.applyViewPrivacyToAll || _v13.applyEmbedPrivacyToAll,
      _v45 = _v4?.privacy,
      _v46 = _v13.view !== _v45?.view || _v13.embed !== _v45?.embed || _v13.password !== (_v4?.password ?? "") || (_v13.domainAllowlist ?? []).join(",") !== (_v45?.clipEmbedAllowedDomains ?? []).join(","),
      _v47 = _v18.bi_expiring_links_ux_enabled,
      _v48 = (0, _v23.useToast)(),
      _v49 = (0, _v2.useRef)(_v48),
      {
        trackPrivacyChanged: _v50
      } = (0, _v31.useViewPrivacyChangeTracking)(),
      {
        trackDefaultPrivacyChanged: _v51
      } = (0, _v30.useDefaultsTracking)(),
      _v52 = (0, _v2.useMemo)(() => _v67(_v3), [_v3]),
      _v53 = "password" === _v13.view,
      _v54 = "whitelist" === _v13.embed,
      _v55 = (0, _v34.useEmbedPrivacyOptions)(!0),
      _v56 = _v18?.bi_expiring_links_default_expiry_days ?? 0;
    (0, _v2.useEffect)(() => {
      if (!_v4) return;
      let _v0 = _v56 > 0 ? Math.min(_v56, 365) : 0,
        _v1 = null != _v4.sharingLinkDefaultExpiryDays ? _v4.sharingLinkDefaultExpiryDays : _v0;
      _v10({
        view: _v4.privacy?.view,
        embed: _v4.privacy?.embed,
        password: _v4.password || "",
        domainAllowlist: _v4.privacy?.clipEmbedAllowedDomains || [],
        sharingLinkExpiryDays: _v1
      });
    }, [_v4, _v10, _v56]);
    let _v57 = (0, _v2.useCallback)((_v0, _v1) => {
        _v49.current.isActive(_v68) || _v49.current({
          title: _v0,
          status: _v1,
          id: _v68
        });
      }, []),
      _v58 = () => {
        _v11(), _v1();
      },
      _v59 = async (_v0 = !1, _v1 = []) => {
        let {
          view: _v2,
          embed: _v3,
          password: _v4,
          domainAllowlist: _v5,
          applyViewPrivacyToAll: _v6,
          applyEmbedPrivacyToAll: _v7
        } = _v13;
        _v40.current = _v6 || _v7, _v41.current = {
          previousPrivacy: _v4?.privacy?.view ?? null,
          newPrivacy: _v2,
          applyViewPrivacyToAll: _v6,
          previousEmbedPrivacy: _v4?.privacy?.embed ?? null,
          newEmbedPrivacy: _v3,
          applyEmbedPrivacyToAll: _v7
        };
        try {
          if (await _v9({
            ...(_v6 ? {
              applyToAllViewPrivacy: !0
            } : {}),
            ...(_v7 ? {
              applyToAllEmbedPrivacy: !0
            } : {}),
            ...(_v0 ? {
              skipUploadPresetFolderVideos: !0
            } : {}),
            videos: {
              privacy: {
                view: _v2,
                embed: _v3,
                ...(_v5.length ? {
                  embedAllowedDomains: _v5
                } : {})
              },
              ...(_v47 ? {
                sharingLinkDefaultExpiryDays: _v13.sharingLinkExpiryDays
              } : {})
            },
            ...(_v4 ? {
              password: _v4
            } : {})
          }), _v1.length > 0 && _v16) {
            _v39.current = !0, _v30({
              where: {
                userId: _v16
              },
              variables: {
                folderIds: [..._v1]
              }
            });
            return;
          }
          _v2(_v40.current), _v58();
        } catch {
          _v57(_v52.changesWereNotSaved, "error");
        }
      },
      _v60 = async () => {
        _v42 && _v44 ? _v35(!0) : _v42 && _v46 ? _v37(!0) : await _v59();
      },
      _v61 = (0, _v2.useEffectEvent)(() => {
        let _v0 = _v41.current;
        null === _v0 || (_v41.current = null, _v7 || (_v0.previousPrivacy !== _v0.newPrivacy && (_v50({
          entityType: "workspace_default",
          previousPrivacy: _v0.previousPrivacy,
          newPrivacy: _v0.newPrivacy
        }), _v51({
          privacyType: "view",
          previousPrivacy: _v0.previousPrivacy,
          newPrivacy: _v0.newPrivacy,
          applyToAll: _v0.applyViewPrivacyToAll
        })), _v0.previousEmbedPrivacy !== _v0.newEmbedPrivacy && _v51({
          privacyType: "embed",
          previousPrivacy: _v0.previousEmbedPrivacy,
          newPrivacy: _v0.newEmbedPrivacy,
          applyToAll: _v0.applyEmbedPrivacyToAll
        })));
      });
    (0, _v2.useEffect)(() => {
      null !== _v41.current && _v6 && !_v8 && _v61();
    }, [_v6, _v7, _v8]);
    let _v62 = (0, _v2.useEffectEvent)(() => {
        _v38.current = !1, _v25(), _v59();
      }),
      _v63 = (0, _v2.useEffectEvent)(() => {
        _v38.current = !1, _v57(_v52.changesWereNotSaved, "error");
      });
    (0, _v2.useEffect)(() => {
      _v38.current && !_v27 && _v29 && (null === _v28 ? _v62() : _v63());
    }, [_v27, _v29, _v28]);
    let _v64 = (0, _v2.useEffectEvent)(() => {
        _v39.current = !1, _v25(), _v2(_v40.current), _v58();
      }),
      _v65 = (0, _v2.useEffectEvent)(() => {
        _v39.current = !1, _v57(_v52.changesWereNotSaved, "error");
      });
    (0, _v2.useEffect)(() => {
      _v39.current && !_v31 && _v33 && (null === _v32 ? _v64() : _v65());
    }, [_v31, _v33, _v32]);
    let _v66 = async _v0 => {
        _v37(!1), await _v59(!1, _v0);
      },
      _v67 = async _v0 => {
        if (_v35(!1), "reset" === _v0 && _v16) {
          _v38.current = !0, _v26({
            where: {
              userId: _v16
            }
          });
          return;
        }
        await _v59("keep-skip" === _v0);
      },
      _v68 = (0, _v33.useDefaultPrivacyOptions)(_v15, !0).map(_v0 => ({
        ..._v0,
        isDisabled: !_v17.includes(_v0.privacy)
      }));
    return (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: _v58,
      blockScrollOnMount: !_v36,
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
        children: [(0, _v1.jsx)(_v10.ModalHeader, {
          children: (0, _v1.jsx)(_v22.Text, {
            variant: "heading-md",
            children: _v52.privacyDefaultsSettings
          })
        }), (0, _v1.jsx)(_v7.ModalCloseButton, {}), (0, _v1.jsx)(_v19.ModalBody, {
          children: (0, _v1.jsxs)(_v12.Flex, {
            direction: "column",
            gap: "md",
            w: "100%",
            children: [(0, _v1.jsx)(_v22.Text, {
              variant: "body-md",
              children: _v52.description
            }), (0, _v1.jsxs)(_v12.Flex, {
              direction: "column",
              gap: "xs",
              children: [(0, _v1.jsx)(_v22.Text, {
                variant: "heading-xs",
                children: _v52.videoPrivacyLabel
              }), (0, _v1.jsx)(_v25.PrivacyDropdown, {
                isVideoPrivacy: !0,
                activePrivacy: _v13.view,
                onSelect: _v0 => _v12("view", _v0),
                privacyOptions: _v68,
                variant: "outlined"
              }), _v53 && (0, _v1.jsxs)(_v13.FormControl, {
                w: "100%",
                mt: "sm",
                isInvalid: _v13.error,
                children: [(0, _v1.jsx)(_v20.Password, {
                  minLength: 1,
                  maxLength: 32,
                  placeholder: _v52.passwordPlaceholder,
                  value: _v13.password,
                  autoComplete: "none",
                  w: "100%",
                  autoFocus: !1,
                  onChange: _v0 => {
                    _v12("password", _v0.target.value), _v13.error && _v12("error", !1);
                  },
                  onKeyDown: _v0 => {
                    "Enter" === _v0.key && 1 > (_v13.password?.trim().length || 0) && _v12("error", !0);
                  },
                  "aria-required": !0,
                  "data-lpignore": !0
                }), _v13.error ? (0, _v1.jsx)(_v14.FormErrorMessage, {
                  children: _v52.passwordErrorMsg
                }) : (0, _v1.jsxs)(_v13.FormHelperText, {
                  textAlign: "right",
                  children: [_v13.password?.length || 0, " / ", 32]
                })]
              })]
            }), (0, _v1.jsx)(_v4.Checkbox, {
              size: "md",
              isChecked: _v13.applyViewPrivacyToAll,
              onChange: _v0 => _v12("applyViewPrivacyToAll", _v0.target.checked),
              children: _v52.applyToAllExistingVideos
            }), (0, _v1.jsx)(_v5.Divider, {
              borderColor: "stroke",
              mx: (0, _v21.rem)(-24),
              width: `calc(100% + ${(0, _v21.rem)(48)})`
            }), (0, _v1.jsxs)(_v12.Flex, {
              direction: "column",
              gap: "xs",
              children: [(0, _v1.jsx)(_v22.Text, {
                variant: "heading-xs",
                children: _v52.embedLocationLabel
              }), (0, _v1.jsx)(_v25.PrivacyDropdown, {
                activePrivacy: _v13.embed,
                onSelect: _v0 => _v12("embed", _v0),
                privacyOptions: _v55,
                variant: "outlined"
              }), _v54 && (0, _v1.jsx)(_v48, {
                addDomainToWhitelist: _v0 => _v12("domainAllowlist", [..._v13.domainAllowlist, _v0]),
                domainWhitelist: _v13.domainAllowlist,
                removeDomainFromWhitelist: _v0 => _v12("domainAllowlist", _v13.domainAllowlist.filter(_v0 => _v0 !== _v0))
              })]
            }), (0, _v1.jsx)(_v4.Checkbox, {
              size: "md",
              isChecked: _v13.applyEmbedPrivacyToAll,
              onChange: _v0 => _v12("applyEmbedPrivacyToAll", _v0.target.checked),
              children: _v52.applyToAllExistingVideos
            }), _v47 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v5.Divider, {
                borderColor: "stroke",
                mx: (0, _v21.rem)(-24),
                width: `calc(100% + ${(0, _v21.rem)(48)})`
              }), (0, _v1.jsxs)(_v12.Flex, {
                direction: "column",
                gap: "xs",
                children: [(0, _v1.jsx)(_v22.Text, {
                  variant: "heading-xs",
                  children: (0, _v28.translate)({
                    singular: "Sharing link expiration",
                    dictionary: {
                      es: {
                        singular: "Caducidad del enlace para compartir"
                      },
                      "de-DE": {
                        singular: "Ablaufdatum für Freigabelinks"
                      },
                      "fr-FR": {
                        singular: "Expiration des liens de partage"
                      },
                      "ja-JP": {
                        singular: "共有リンクの有効期限"
                      },
                      "ko-KR": {
                        singular: "공유 링크 만료"
                      },
                      "pt-BR": {
                        singular: "Expiração do link de compartilhamento"
                      },
                      "zh-CN": {
                        singular: "共享链接过期时间"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v22.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: (0, _v28.translate)({
                    singular: "Set the default expiration for new sharing links",
                    dictionary: {
                      es: {
                        singular: "Establecer la caducidad predeterminada de los nuevos enlaces para compartir"
                      },
                      "de-DE": {
                        singular: "Standardablauf für neue Freigabelinks festlegen"
                      },
                      "fr-FR": {
                        singular: "Définir la durée d'expiration par défaut pour les nouveaux liens de partage"
                      },
                      "ja-JP": {
                        singular: "新しい共有リンクの既定の有効期限を設定する"
                      },
                      "ko-KR": {
                        singular: "새 공유 링크의 기본 만료 기간을 설정합니다"
                      },
                      "pt-BR": {
                        singular: "Defina a expiração padrão para novos links de compartilhamento"
                      },
                      "zh-CN": {
                        singular: "为新的共享链接设置默认过期时间"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v15.Menu, {
                  children: [(0, _v1.jsx)(_v16.MenuButton, {
                    as: _v3.Button,
                    size: "sm",
                    variant: "outlined",
                    rightIcon: (0, _v1.jsx)(_v24.ChevronDownSmall, {
                      boxSize: (0, _v21.rem)(16)
                    }),
                    w: "fit-content",
                    children: _v70.find(_v0 => _v0.value === _v13.sharingLinkExpiryDays)?.label() ?? (0, _v28.translate)({
                      singular: "1 week",
                      dictionary: {
                        es: {
                          singular: "1 semana"
                        },
                        "de-DE": {
                          singular: "1 Woche"
                        },
                        "fr-FR": {
                          singular: "1 semaine"
                        },
                        "ja-JP": {
                          singular: "1週間"
                        },
                        "ko-KR": {
                          singular: "1주일"
                        },
                        "pt-BR": {
                          singular: "1 semana"
                        },
                        "zh-CN": {
                          singular: "1 周"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v18.MenuList, {
                    children: _v70.map(_v0 => (0, _v1.jsx)(_v17.MenuItem, {
                      onClick: () => _v12("sharingLinkExpiryDays", _v0.value),
                      children: (0, _v1.jsx)(_v22.Text, {
                        variant: "body-md",
                        children: _v0.label()
                      })
                    }, _v0.value))
                  })]
                })]
              })]
            })]
          })
        }), (0, _v1.jsx)(_v9.ModalFooter, {
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v3.Button, {
            variant: "primary",
            isDisabled: !_v14,
            isLoading: _v5 || _v27 || _v31 || (_v44 || _v46) && _v43,
            onClick: () => void _v60(),
            children: _v52.save
          })
        })]
      }), _v36 && null != _v16 && (0, _v1.jsx)(_v61, {
        isOpen: !0,
        ownerId: _v16,
        onCancel: () => _v37(!1),
        onSave: _v0 => void _v66(_v0)
      }), _v34 && (0, _v1.jsx)(_v52, {
        isOpen: !0,
        onCancel: () => _v35(!1),
        onSave: _v0 => void _v67(_v0)
      })]
    });
  }], 0);
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = {
      violence: (0, _v28.translate)({
        singular: "Violence",
        dictionary: {
          es: {
            singular: "Violencia"
          },
          "de-DE": {
            singular: "Gewalt"
          },
          "ja-JP": {
            singular: "暴力"
          },
          "ko-KR": {
            singular: "폭력"
          },
          "pt-BR": {
            singular: "Violência"
          },
          "zh-CN": {
            singular: "暴力"
          }
        }
      }),
      language: (0, _v28.translate)({
        singular: "Profanity",
        dictionary: {
          es: {
            singular: "Lenguaje vulgar"
          },
          "de-DE": {
            singular: "Vulgäre Ausdrucksweise"
          },
          "fr-FR": {
            singular: "Contenu à caractère injurieux"
          },
          "ja-JP": {
            singular: "冒涜"
          },
          "ko-KR": {
            singular: "욕설"
          },
          "pt-BR": {
            singular: "Linguagem imprópria"
          },
          "zh-CN": {
            singular: "粗言秽语"
          }
        }
      }),
      nudity: (0, _v28.translate)({
        singular: "Nudity",
        dictionary: {
          es: {
            singular: "Desnudez"
          },
          "de-DE": {
            singular: "Nacktheit"
          },
          "fr-FR": {
            singular: "Nudité"
          },
          "ja-JP": {
            singular: "ヌード"
          },
          "ko-KR": {
            singular: "나체"
          },
          "pt-BR": {
            singular: "Nudez"
          },
          "zh-CN": {
            singular: "裸露"
          }
        }
      }),
      drugs: (0, _v28.translate)({
        singular: "Drug or alcohol use",
        dictionary: {
          es: {
            singular: "Consumo de drogas o alcohol"
          },
          "de-DE": {
            singular: "Drogen- oder Alkoholkonsum"
          },
          "fr-FR": {
            singular: "Consommation de drogues ou d'alcool"
          },
          "ja-JP": {
            singular: "ドラッグ、アルコールの使用"
          },
          "ko-KR": {
            singular: "약물 복용 또는 음주"
          },
          "pt-BR": {
            singular: "Uso de drogas ou álcool"
          },
          "zh-CN": {
            singular: "吸毒或酗酒"
          }
        }
      }),
      safe: (0, _v28.translate)({
        singular: "All audiences",
        dictionary: {
          es: {
            singular: "Para todos los públicos"
          },
          "de-DE": {
            singular: "Alle Zuschauergruppen"
          },
          "fr-FR": {
            singular: "Tout public"
          },
          "ja-JP": {
            singular: "すべての視聴者"
          },
          "ko-KR": {
            singular: "모든 시청자"
          },
          "pt-BR": {
            singular: "Para todas as idades"
          },
          "zh-CN": {
            singular: "所有观众"
          }
        }
      }),
      mature: (0, _v28.translate)({
        singular: "Mature",
        dictionary: {
          es: {
            singular: "Para adultos"
          },
          "de-DE": {
            singular: "Nicht jugendfrei"
          },
          "fr-FR": {
            singular: "Adulte"
          },
          "ja-JP": {
            singular: "成人向け"
          },
          "ko-KR": {
            singular: "성인"
          },
          "pt-BR": {
            singular: "Adulto"
          },
          "zh-CN": {
            singular: "成人"
          }
        }
      }),
      unrated: (0, _v28.translate)({
        singular: "Select rating",
        dictionary: {
          es: {
            singular: "Seleccionar clasificación"
          },
          "de-DE": {
            singular: "Bewertung auswählen"
          },
          "fr-FR": {
            singular: "Sélectionner la classification"
          },
          "ja-JP": {
            singular: "レーティングを選択"
          },
          "ko-KR": {
            singular: "등급 선택"
          },
          "pt-BR": {
            singular: "Selecionar classificação"
          },
          "zh-CN": {
            singular: "选择分级"
          }
        }
      })
    },
    _v78 = [{
      value: "safe",
      label: _v77.safe
    }, {
      value: "mature",
      label: _v77.mature
    }],
    _v79 = ({
      contentRating: _v0,
      isRatingModlocked: _v1,
      onRatingChange: _v2
    }) => {
      let _v3 = _v67(),
        _v4 = (0, _v2.useMemo)(() => _v0?.includes("safe") ? "safe" : _v0?.some(_v0 => _v45.includes(_v0)) ? "mature" : "unrated", [_v0]);
      return (0, _v1.jsxs)(_v12.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v1.jsx)(_v75.Select, {
          placeholder: _v3.selectRating,
          items: _v78,
          value: [_v4 ?? ""],
          disabled: _v1,
          onValueChange: _v0 => {
            _v2(_v0.value[0]);
          },
          children: _v0 => (0, _v1.jsx)(_v75.SelectItem, {
            display: "flex",
            "data-testid": `${_v0.value}-option`,
            children: (0, _v1.jsx)(_v75.SelectItemText, {
              children: _v0.label
            })
          })
        }), "mature" === _v4 && (0, _v1.jsx)(_v12.Flex, {
          direction: "column",
          gap: "xs",
          children: _v45.map(_v0 => (0, _v1.jsx)(_v4.Checkbox, {
            isChecked: _v0.includes(_v0),
            onChange: _v0 => _v2(_v0, _v0.target.checked),
            alignItems: "flex-start",
            name: _v0,
            "data-testid": `${_v0}-checkbox`,
            value: _v0,
            children: _v77[_v0]
          }, `${_v0}-checkbox`))
        })]
      });
    };
  var _v80 = _v0.i(0);
  let _v81 = [{
      label: (0, _v28.translate)({
        singular: "Downloads",
        dictionary: {
          es: {
            singular: "Descargas"
          },
          "fr-FR": {
            singular: "Téléchargements"
          },
          "ja-JP": {
            singular: "ダウンロード"
          },
          "ko-KR": {
            singular: "다운로드"
          },
          "zh-CN": {
            singular: "下载"
          }
        }
      }),
      key: "download",
      info: null
    }, {
      label: (0, _v28.translate)({
        singular: "Add to collections",
        dictionary: {
          es: {
            singular: "Agregar a las colecciones"
          },
          "de-DE": {
            singular: "Zu Sammlungen hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter aux collections"
          },
          "ja-JP": {
            singular: "コレクションに追加"
          },
          "ko-KR": {
            singular: "컬렉션에 추가"
          },
          "pt-BR": {
            singular: "Adicionar às coleções"
          },
          "zh-CN": {
            singular: "添加到合集中"
          }
        }
      }),
      key: "add",
      info: (0, _v28.translate)({
        singular: "Showcases, channels, or groups",
        dictionary: {
          es: {
            singular: "Presentaciones, canales o grupos"
          },
          "de-DE": {
            singular: "Präsentationen, Kanäle oder Gruppen"
          },
          "fr-FR": {
            singular: "Présentations, chaînes ou groupes"
          },
          "ja-JP": {
            singular: "ショーケース、チャンネル、またはグループ"
          },
          "ko-KR": {
            singular: "쇼케이스, 채널 또는 그룹"
          },
          "pt-BR": {
            singular: "Vitrines, canais ou grupos"
          },
          "zh-CN": {
            singular: "展示、频道或群组"
          }
        }
      })
    }, {
      label: (0, _v28.translate)({
        singular: "Auto-generated captions",
        dictionary: {
          es: {
            singular: "Leyendas generadas automáticamente"
          },
          "de-DE": {
            singular: "Automatisch generierte erweiterte Untertitel"
          },
          "fr-FR": {
            singular: "Sous-titres générés automatiquement"
          },
          "ja-JP": {
            singular: "自動生成キャプション"
          },
          "ko-KR": {
            singular: "자동 생성된 캡션"
          },
          "pt-BR": {
            singular: "Legendas geradas automaticamente"
          },
          "zh-CN": {
            singular: "自动生成的字幕"
          }
        }
      }),
      key: "cc",
      info: null
    }, {
      label: (0, _v28.translate)({
        singular: "Comments",
        dictionary: {
          es: {
            singular: "Comentarios"
          },
          "de-DE": {
            singular: "Kommentare"
          },
          "fr-FR": {
            singular: "Commentaires"
          },
          "ja-JP": {
            singular: "コメント"
          },
          "ko-KR": {
            singular: "소감"
          },
          "pt-BR": {
            singular: "Comentários"
          },
          "zh-CN": {
            singular: "评论"
          }
        }
      }),
      key: "comments",
      info: null
    }, {
      label: (0, _v28.translate)({
        singular: "Video stats and views",
        dictionary: {
          es: {
            singular: "Estadísticas de video y visualizaciones"
          },
          "de-DE": {
            singular: "Videostatistiken und Videoaufrufe"
          },
          "fr-FR": {
            singular: "Stats vidéo et vues"
          },
          "ja-JP": {
            singular: "動画の統計データと視聴回数"
          },
          "ko-KR": {
            singular: "동영상 통계 및 조회수"
          },
          "pt-BR": {
            singular: "Estatísticas de vídeo e visualizações"
          },
          "zh-CN": {
            singular: "视频统计数据和观看次数"
          }
        }
      }),
      key: "videoStats",
      info: null
    }],
    _v82 = (0, _v21.rem)(250),
    _v83 = {
      add: !0,
      cc: !1,
      comments: !1,
      download: !1,
      license: "none",
      rating: ["safe"],
      videoStats: !0,
      applyToAll: !1
    };
  _v0.s(["ViewerPermissionsModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSaveSuccess: _v2,
    onSaveFailure: _v3
  }) => {
    let {
        creativeCommonsLicenses: _v4
      } = (() => {
        let {
          data: _v0
        } = (0, _v80.useGetCreativecommons)({
          select: ["code", "name"]
        });
        return {
          creativeCommonsLicenses: _v0?.data
        };
      })(),
      {
        defaults: _v5,
        isLoading: _v6,
        updateUploadDefaults: _v7,
        patchCalled: _v8,
        patchError: _v9,
        patchData: _v10,
        patchLoading: _v11
      } = _v64(),
      {
        state: _v12,
        hasChanges: _v13,
        updateState: _v14,
        initializeState: _v15,
        resetState: _v16
      } = _v62(_v83),
      _v17 = (0, _v2.useRef)(!1),
      {
        trackViewerPermissionDefaultChanged: _v18
      } = (0, _v30.useDefaultsTracking)(),
      _v19 = _v67(),
      _v20 = (0, _v2.useMemo)(() => {
        let _v0 = _v4?.map(_v0 => ({
          label: _v0.name,
          value: _v0.code
        }));
        return _v0?.unshift({
          label: (0, _v28.translate)({
            singular: "Select a license...",
            dictionary: {
              es: {
                singular: "Seleccione una licencia..."
              },
              "de-DE": {
                singular: "Eine Lizenz auswählen..."
              },
              "fr-FR": {
                singular: "Sélectionnez une licence"
              },
              "ja-JP": {
                singular: "ライセンスを選択..."
              },
              "ko-KR": {
                singular: "라이선스 선택하기"
              },
              "pt-BR": {
                singular: "Selecione uma licença..."
              },
              "zh-CN": {
                singular: "选择许可..."
              }
            }
          }),
          value: "none"
        }), _v0 || [];
      }, [_v4]);
    (0, _v2.useEffect)(() => {
      _v5 && _v15({
        download: _v5.privacy?.download ?? !1,
        add: _v5.privacy?.add ?? !0,
        comments: _v5.privacy?.comments === "anybody",
        videoStats: !(_v5.hideStats ?? !0),
        cc: _v5.autoccDisplayEnabledByDefault ?? !1,
        license: _v5.license || "none",
        rating: _v47(_v5.rating),
        applyToAll: !1
      });
    }, [_v5, _v15]);
    let _v21 = (0, _v2.useMemo)(() => _v5 ? _v47(_v5.rating) : null, [_v5]),
      _v22 = (0, _v2.useMemo)(() => null !== _v21 && [..._v12.rating].sort().join(",") !== [..._v21].sort().join(","), [_v12.rating, _v21]),
      _v23 = _v12.applyToAll && _v22,
      _v24 = (0, _v2.useRef)(!1),
      _v25 = (0, _v2.useEffectEvent)(_v0 => {
        if (_v24.current = !1, _v0) {
          let {
            add: _v0,
            applyToAll: _v1,
            cc: _v2,
            comments: _v3,
            download: _v4,
            license: _v5,
            rating: _v6,
            videoStats: _v7
          } = _v12;
          _v18({
            download: _v4,
            add: _v0,
            comments: _v3,
            autoGeneratedCaptions: _v2,
            videoStats: _v7,
            license: "none" === _v5 ? null : _v5,
            contentRating: _v6,
            applyToAll: _v1
          }), _v2(_v17.current), _v1();
          return;
        }
        _v3();
      });
    return (0, _v2.useEffect)(() => {
      if (_v24.current && _v8 && !_v11) {
        if (_v9) return void _v25(!1);
        _v10 && _v25(!0);
      }
    }, [_v8, _v11, _v9, _v10]), (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: () => {
        _v16(), _v1();
      },
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v8.ModalContent, {
        children: [(0, _v1.jsxs)(_v10.ModalHeader, {
          children: [(0, _v1.jsx)(_v22.Text, {
            variant: "heading-md",
            children: _v19.viewerPermissions
          }), (0, _v1.jsx)(_v22.Text, {
            variant: "body-md",
            children: _v19.viewerPermissionsDescription
          })]
        }), (0, _v1.jsx)(_v7.ModalCloseButton, {
          onClick: _v1
        }), (0, _v1.jsxs)(_v19.ModalBody, {
          children: [(0, _v1.jsxs)(_v36.HStack, {
            mb: "xs",
            gap: "xs",
            children: [(0, _v1.jsx)(_v22.Text, {
              variant: "heading-xs",
              children: _v19.contentRating
            }), (0, _v1.jsx)(_v42.Tooltip, {
              label: _v19.contentRatingTooltip,
              maxW: _v82,
              placement: "top",
              shouldWrapChildren: !0,
              children: (0, _v1.jsx)(_v76.InfoCircle, {
                cursor: "pointer",
                display: "flex",
                boxSize: "2xs"
              })
            })]
          }), (0, _v1.jsx)(_v79, {
            onRatingChange: (_v0, _v1) => {
              let {
                rating: _v2
              } = _v12;
              switch (_v0) {
                case "mature":
                  _v14("rating", ["language", "drugs", "violence", "nudity"]);
                  return;
                case "safe":
                  _v14("rating", ["safe"]);
                  return;
                default:
                  if (_v1) return void _v14("rating", [..._v2, _v0]);
                  let _v0 = _v2.filter(_v0 => _v0 !== _v0);
                  _v0.length ? _v14("rating", _v0) : _v14("rating", ["safe"]);
              }
            },
            isRatingModlocked: !1,
            contentRating: _v12.rating
          }), _v23 && (0, _v1.jsx)(_v73.Alert, {
            status: "warning",
            mt: "sm",
            alignItems: "center",
            children: (0, _v1.jsx)(_v74.AlertDescription, {
              children: _v19.applyToAllUnratedVideosWarning
            })
          }), (0, _v1.jsx)(_v5.Divider, {
            borderColor: "stroke",
            my: "md"
          }), (0, _v1.jsx)(_v43.VStack, {
            gap: "md",
            children: _v81.map(({
              label: _v0,
              key: _v1,
              info: _v2
            }) => (0, _v1.jsx)(_v71.Toggle, {
              label: _v0,
              info: _v2,
              size: "md",
              fontSize: 14,
              isDisabled: !1,
              onChange: () => _v14(_v1, !_v12[_v1]),
              isChecked: _v12[_v1]
            }, _v1))
          }), (0, _v1.jsx)(_v5.Divider, {
            borderColor: "stroke",
            my: "md"
          }), (0, _v1.jsxs)(_v36.HStack, {
            gap: "xs",
            mb: "xs",
            children: [(0, _v1.jsx)(_v22.Text, {
              variant: "heading-xs",
              children: _v19.copyright
            }), (0, _v1.jsx)(_v42.Tooltip, {
              label: _v19.creativeCommonsTooltip,
              maxW: _v82,
              placement: "top",
              shouldWrapChildren: !0,
              children: (0, _v1.jsx)(_v76.InfoCircle, {
                cursor: "pointer",
                display: "flex",
                boxSize: "2xs"
              })
            })]
          }), (0, _v1.jsx)(_v75.Select, {
            variant: "withCheck",
            placeholder: _v19.selectLicense,
            items: _v20,
            onValueChange: ({
              value: _v0
            }) => _v14("license", _v0[0]),
            value: [_v12.license ?? "none"]
          }), (0, _v1.jsx)(_v22.Text, {
            variant: "body-md",
            color: "text-secondary",
            mt: "xs",
            children: _v19.ccLicenseLink
          })]
        }), (0, _v1.jsx)(_v9.ModalFooter, {
          justifyContent: "space-between",
          children: (0, _v1.jsx)(_v72.DefaultFooterContent, {
            isSaveDisabled: !_v13,
            isLoading: _v6,
            onSave: () => {
              let {
                add: _v0,
                applyToAll: _v1,
                cc: _v2,
                comments: _v3,
                download: _v4,
                license: _v5,
                rating: _v6,
                videoStats: _v7
              } = _v12;
              _v17.current = _v1, _v24.current = !0, _v7({
                applyToAll: _v1,
                videos: {
                  license: "none" === _v5 ? "" : _v5,
                  privacy: {
                    download: _v4,
                    add: _v0,
                    comments: _v3 ? "anybody" : "nobody"
                  },
                  hideStats: !_v7,
                  autoccDisplayEnabledByDefault: _v2,
                  rating: _v6
                }
              });
            },
            onApplyToAll: _v0 => _v14("applyToAll", _v0)
          })
        })]
      })]
    });
  }], 0);
}