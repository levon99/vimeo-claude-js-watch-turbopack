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
  let _v17 = ({
      children: _v0,
      header: _v1,
      maxWidth: _v2
    }) => (0, _v1.jsxs)(_v6.VStack, {
      width: "100%",
      maxWidth: _v2,
      alignItems: "center",
      spacing: "lg",
      p: "lg",
      mx: "auto",
      children: [_v1 && (0, _v1.jsx)(_v4.Text, {
        alignSelf: "flex-start",
        variant: "heading-lg",
        children: _v1
      }), _v0]
    }),
    _v18 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v8.Box, {
      width: "100%",
      backgroundColor: "surface",
      padding: "lg",
      borderRadius: "lg",
      ..._v1,
      children: _v0
    }),
    _v19 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsxs)(_v6.VStack, {
      backgroundColor: "surface",
      align: "start",
      width: "100%",
      gap: 0,
      ..._v1,
      children: [(0, _v1.jsx)(_v16.Divider, {
        borderColor: "stroke",
        my: "md"
      }), _v0]
    }),
    _v20 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v4.Text, {
      variant: "heading-md",
      ..._v1,
      children: _v0
    }),
    _v21 = () => {
      let _v0 = (0, _v15.getTranslations)(),
        _v1 = (0, _v13.useViewer)(),
        _v2 = _v1?.user?.id || 0,
        _v3 = _v0 => {
          _v0.target.select();
        },
        [_v4, _v5] = (0, _v3.useState)(!1),
        [_v6, _v7] = (0, _v3.useState)(!1),
        {
          capabilities: {
            playerAnalytics: _v8
          }
        } = (0, _v12.useCapability)(["playerAnalytics"], _v1?.teamUser?.ownerId);
      return (0, _v1.jsx)(_v17, {
        maxWidth: (0, _v10.rem)(640),
        children: (0, _v1.jsxs)(_v18, {
          children: [(0, _v1.jsx)(_v20, {
            children: _v0.Analytics
          }), (0, _v1.jsx)(_v19, {
            children: (0, _v1.jsxs)(_v5.HStack, {
              alignItems: "flex-start",
              gap: "md",
              pt: "md",
              children: [(0, _v1.jsx)(_v11.Google, {
                boxSize: "lg"
              }), (0, _v1.jsxs)(_v6.VStack, {
                width: "100%",
                alignItems: "flex-start",
                children: [(0, _v1.jsx)(_v4.Text, {
                  variant: "heading-sm",
                  children: _v0.GoogleAnalytics
                }), (0, _v1.jsx)(_v4.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v0.GoogleAnalyticsDescription(_v14.ANALYTICS_LEARN_MORE_LINK)
                }), (0, _v1.jsxs)(_v7.InputGroup, {
                  width: "100%",
                  flexDirection: "column",
                  children: [(0, _v1.jsx)(_v8.Box, {
                    as: "label",
                    mb: "xs",
                    children: (0, _v1.jsx)(_v4.Text, {
                      variant: "heading-xs",
                      children: _v0.GoogleAnalyticsTrackingCode
                    })
                  }), (0, _v1.jsx)(_v9.Input, {
                    size: "sm",
                    onFocus: _v0 => {
                      _v5(!0), _v3(_v0);
                    },
                    onMouseUp: _v0 => {
                      _v5(!0), _v3(_v0);
                    },
                    onBlur: () => _v5(!1),
                    disabled: !_v8,
                    value: _v8 ? (0, _v14.GOOGLE_TEXT_4)(_v2) : "",
                    color: "text-secondary",
                    style: _v4 ? {
                      textOverflow: "unset",
                      overflow: "auto"
                    } : {
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden"
                    }
                  })]
                }), (0, _v1.jsxs)(_v7.InputGroup, {
                  width: "100%",
                  flexDirection: "column",
                  children: [(0, _v1.jsx)(_v8.Box, {
                    as: "label",
                    mb: "xs",
                    children: (0, _v1.jsx)(_v4.Text, {
                      variant: "heading-xs",
                      children: _v0.GoogleAnalyticsTrackingCodeLegacy
                    })
                  }), (0, _v1.jsx)(_v9.Input, {
                    size: "sm",
                    onFocus: _v0 => {
                      _v7(!0), _v3(_v0);
                    },
                    onMouseUp: _v0 => {
                      _v7(!0), _v3(_v0);
                    },
                    onBlur: () => _v7(!1),
                    disabled: !_v8,
                    value: _v8 ? (0, _v14.GOOGLE_TEXT_4_LEGACY)(_v2) : "",
                    color: "text-secondary",
                    style: _v6 ? {
                      textOverflow: "unset",
                      overflow: "auto"
                    } : {
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden"
                    }
                  })]
                })]
              })]
            })
          })]
        })
      });
    };
  var _v22 = _v0.i(0),
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
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = ["language", "drugs", "violence", "nudity"],
    _v57 = ["preferences.videos.license", "preferences.videos.privacy.add", "preferences.videos.privacy.allowShareLink", "preferences.videos.privacy.clipEmbedAllowedDomains", "preferences.videos.privacy.comments", "preferences.videos.privacy.download", "preferences.videos.privacy.embed", "preferences.videos.privacy.password", "preferences.videos.privacy.view", "preferences.videos.password", "preferences.videos.hideStats", "preferences.videos.rating", "preferences.videos.autoccDisplayEnabledByDefault", "preferences.videos.sharingLinkDefaultExpiryDays"],
    _v58 = ({
      addDomainToWhitelist: _v0,
      domainWhitelist: _v1,
      removeDomainFromWhitelist: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(""),
        [_v5, _v6] = (0, _v3.useState)(null),
        _v7 = (0, _v3.useMemo)(() => ({
          listEmpty: (0, _v45.translate)({
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
          invalidUrl: (0, _v45.translate)({
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
          alreadyAdded: (0, _v45.translate)({
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
        _v11 = (0, _v3.useMemo)(() => _v1.map(_v0 => (0, _v1.jsxs)(_v53.Tag, {
          size: "sm",
          children: [(0, _v1.jsx)(_v53.TagLabel, {
            children: _v0
          }), (0, _v1.jsx)(_v53.TagCloseButton, {
            onClick: () => _v2(_v0)
          })]
        }, _v0)), [_v1, _v2]);
      return (0, _v1.jsxs)(_v6.VStack, {
        w: "100%",
        gap: "sm",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v4.Text, {
          variant: "heading-xs",
          children: (0, _v45.translate)({
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
        }), (0, _v1.jsxs)(_v35.FormControl, {
          w: "100%",
          isInvalid: !!_v5,
          children: [(0, _v1.jsxs)(_v7.InputGroup, {
            size: "md",
            children: [(0, _v1.jsx)(_v9.Input, {
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
            }), (0, _v1.jsx)(_v52.InputRightElement, {
              children: (0, _v1.jsx)(_v54.Tooltip, {
                label: (0, _v45.translate)({
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
                children: (0, _v1.jsx)(_v51.IconButton, {
                  "aria-label": (0, _v45.translate)({
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
                  icon: (0, _v1.jsx)(_v55.PlusCircle, {
                    cursor: "pointer"
                  }),
                  onClick: _v10
                })
              })
            })]
          }), (0, _v1.jsx)(_v36.FormErrorMessage, {
            children: _v8
          })]
        }), _v9 && (0, _v1.jsx)(_v5.HStack, {
          flexWrap: "wrap",
          maxH: (0, _v10.rem)(120),
          overflowY: "auto",
          mt: "xs",
          children: _v11
        })]
      });
    },
    _v59 = _v0 => {
      let [_v1, _v2] = (0, _v3.useState)(_v0),
        _v3 = (0, _v3.useRef)(_v0),
        _v4 = (0, _v3.useCallback)(function (_v0, _v1) {
          _v2(_v0 => ({
            ..._v0,
            [_v0]: _v1
          }));
        }, [_v2]),
        _v5 = (0, _v3.useCallback)(_v0 => {
          _v2(_v0 => ({
            ..._v0,
            ..._v0
          })), _v3.current = {
            ..._v3.current,
            ..._v0
          };
        }, [_v2]),
        _v6 = (0, _v3.useCallback)(() => {
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
  var _v60 = _v0.i(0);
  let _v61 = () => {
    let _v0 = (0, _v13.useViewer)(),
      _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        data: _v2,
        mutate: _v3,
        isLoading: _v4
      } = (0, _v60.useGetUser)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: _v57,
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      [_v5, {
        loading: _v6,
        error: _v7,
        data: _v8
      }] = (0, _v60.usePatchUser)(),
      _v9 = async _v0 => {
        _v1 && (await _v5({
          select: _v57,
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
      defaults: _v2?.preferences?.videos,
      isLoading: _v6 || _v4,
      updateUploadDefaults: _v9
    };
  };
  var _v62 = _v0.i(0);
  let _v63 = () => ({
      videoPrivacyLabel: (0, _v45.translate)({
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
      passwordPlaceholder: (0, _v45.translate)({
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
      embedLocationLabel: (0, _v45.translate)({
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
      privacyDefaults: (0, _v45.translate)({
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
      passwordErrorMsg: (0, _v45.translate)({
        singular: "Required",
        dictionary: {
          es: {
            singular: "Obligatorio"
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
            singular: "필수 항목"
          },
          "pt-BR": {
            singular: "Obrigatório"
          },
          "zh-CN": {
            singular: "必填"
          }
        }
      }),
      applyToAllExistingVideos: (0, _v45.translate)({
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
      save: (0, _v45.translate)({
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
      description: (0, _v45.translate)({
        singular: "These settings apply to all new videos, showcases, and events. You can manage which privacies are available in {LINK}Security and data{/LINK}.",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v62.Link, {
            href: "https://vimeo.com/manage/workspace/security-and-data/privacy-restrictions",
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
      viewerPermissions: (0, _v45.translate)({
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
      viewerPermissionsDescription: (0, _v45.translate)({
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
      ccLicenseLink: (0, _v45.translate)({
        singular: "{LINK}About Creative Commons licenses{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v62.Link, {
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
      contentRating: (0, _v45.translate)({
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
      contentRatingTooltip: (0, _v45.translate)({
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
      creativeCommonsTooltip: (0, _v45.translate)({
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
      copyright: (0, _v45.translate)({
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
      selectLicense: (0, _v45.translate)({
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
      selectRating: (0, _v45.translate)({
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
      changesSaved: (0, _v45.translate)({
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
      changesWereNotSaved: (0, _v45.translate)({
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
    _v64 = "uds-privacy-update",
    _v65 = {
      view: "anybody",
      embed: "public",
      password: "",
      domainAllowlist: [],
      error: !1,
      applyViewPrivacyToAll: !1,
      applyEmbedPrivacyToAll: !1,
      sharingLinkExpiryDays: 7
    },
    _v66 = [{
      value: 0,
      label: () => (0, _v45.translate)({
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
      label: () => (0, _v45.translate)({
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
      label: () => (0, _v45.translate)({
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
      label: () => (0, _v45.translate)({
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
    }],
    _v67 = ({
      isOpen: _v0,
      onClose: _v1,
      onSaveSuccess: _v2
    }) => {
      let {
          defaults: _v3,
          isLoading: _v4,
          updateUploadDefaults: _v5
        } = _v61(),
        {
          initializeState: _v6,
          resetState: _v7,
          updateState: _v8,
          state: _v9,
          hasChanges: _v10
        } = _v59(_v65),
        _v11 = (0, _v13.useViewer)(),
        {
          allowedPrivacies: _v12
        } = (0, _v48.useUserAllowedPrivacies)(),
        {
          settings: _v13
        } = (0, _v46.useOrionSettings)(),
        _v14 = !!_v13?.bi_expiring_links_ux_enabled,
        _v15 = (0, _v26.useToast)(),
        _v16 = (0, _v3.useRef)(_v15),
        {
          trackPrivacyChanged: _v17
        } = (0, _v47.useViewPrivacyChangeTracking)(),
        _v18 = (0, _v3.useMemo)(() => _v63(), []),
        _v19 = "password" === _v9.view,
        _v20 = "whitelist" === _v9.embed,
        _v21 = (0, _v50.useEmbedPrivacyOptions)(!0);
      (0, _v3.useEffect)(() => {
        _v3 && _v6({
          view: _v3.privacy?.view,
          embed: _v3.privacy?.embed,
          password: _v3.password || "",
          domainAllowlist: _v3.privacy?.clipEmbedAllowedDomains || [],
          sharingLinkExpiryDays: _v3?.sharingLinkDefaultExpiryDays ?? 7
        });
      }, [_v3, _v6]);
      let _v22 = (0, _v3.useCallback)((_v0, _v1) => {
          _v16.current.isActive(_v64) || _v16.current({
            title: _v0,
            status: _v1,
            id: _v64
          });
        }, []),
        _v23 = () => {
          _v7(), _v1();
        },
        _v24 = async () => {
          let {
              view: _v0,
              embed: _v1,
              password: _v2,
              domainAllowlist: _v3,
              applyViewPrivacyToAll: _v4,
              applyEmbedPrivacyToAll: _v5
            } = _v9,
            _v6 = _v3?.privacy?.view ?? null;
          try {
            await _v5({
              ...(_v4 ? {
                applyToAllViewPrivacy: !0
              } : {}),
              ...(_v5 ? {
                applyToAllEmbedPrivacy: !0
              } : {}),
              videos: {
                privacy: {
                  view: _v0,
                  embed: _v1,
                  ...(_v3.length ? {
                    embedAllowedDomains: _v3
                  } : {})
                },
                ...(_v14 ? {
                  sharingLinkDefaultExpiryDays: _v9.sharingLinkExpiryDays
                } : {})
              },
              ...(_v2 ? {
                password: _v2
              } : {})
            }), _v6 !== _v0 && _v17({
              entityType: "workspace_default",
              previousPrivacy: _v6,
              newPrivacy: _v0
            }), _v2(), _v23();
          } catch {
            _v22(_v18.changesWereNotSaved, "error");
          }
        },
        _v25 = (0, _v49.useDefaultPrivacyOptions)(_v11, !0).map(_v0 => ({
          ..._v0,
          isDisabled: !_v12.includes(_v0.privacy)
        }));
      return (0, _v1.jsxs)(_v28.Modal, {
        isOpen: _v0,
        onClose: _v23,
        children: [(0, _v1.jsx)(_v33.ModalOverlay, {}), (0, _v1.jsxs)(_v30.ModalContent, {
          children: [(0, _v1.jsx)(_v32.ModalHeader, {
            children: (0, _v1.jsx)(_v4.Text, {
              variant: "heading-md",
              children: _v18.privacyDefaults
            })
          }), (0, _v1.jsx)(_v29.ModalCloseButton, {}), (0, _v1.jsx)(_v41.ModalBody, {
            children: (0, _v1.jsxs)(_v34.Flex, {
              direction: "column",
              gap: "md",
              w: "100%",
              children: [(0, _v1.jsx)(_v4.Text, {
                variant: "body-md",
                children: _v18.description
              }), (0, _v1.jsxs)(_v34.Flex, {
                direction: "column",
                gap: "xs",
                children: [(0, _v1.jsx)(_v4.Text, {
                  variant: "heading-xs",
                  children: _v18.videoPrivacyLabel
                }), (0, _v1.jsx)(_v44.PrivacyDropdown, {
                  isVideoPrivacy: !0,
                  activePrivacy: _v9.view,
                  onSelect: _v0 => _v8("view", _v0),
                  privacyOptions: _v25,
                  variant: "outlined"
                }), _v19 && (0, _v1.jsxs)(_v35.FormControl, {
                  w: "100%",
                  mt: "sm",
                  isInvalid: _v9.error,
                  children: [(0, _v1.jsx)(_v42.Password, {
                    minLength: 1,
                    maxLength: 32,
                    placeholder: _v18.passwordPlaceholder,
                    value: _v9.password,
                    autoComplete: "none",
                    w: "100%",
                    autoFocus: !1,
                    onChange: _v0 => {
                      _v8("password", _v0.target.value), _v9.error && _v8("error", !1);
                    },
                    onKeyDown: _v0 => {
                      "Enter" === _v0.key && 1 > (_v9.password?.trim().length || 0) && _v8("error", !0);
                    },
                    "aria-required": !0,
                    "data-lpignore": !0
                  }), _v9.error ? (0, _v1.jsx)(_v36.FormErrorMessage, {
                    children: _v18.passwordErrorMsg
                  }) : (0, _v1.jsxs)(_v35.FormHelperText, {
                    textAlign: "right",
                    children: [_v9.password?.length || 0, " / ", 32]
                  })]
                })]
              }), (0, _v1.jsx)(_v27.Checkbox, {
                size: "md",
                isChecked: _v9.applyViewPrivacyToAll,
                onChange: _v0 => _v8("applyViewPrivacyToAll", _v0.target.checked),
                children: _v18.applyToAllExistingVideos
              }), (0, _v1.jsx)(_v16.Divider, {
                borderColor: "stroke",
                mx: (0, _v10.rem)(-24),
                width: `calc(100% + ${(0, _v10.rem)(48)})`
              }), (0, _v1.jsxs)(_v34.Flex, {
                direction: "column",
                gap: "xs",
                children: [(0, _v1.jsx)(_v4.Text, {
                  variant: "heading-xs",
                  children: _v18.embedLocationLabel
                }), (0, _v1.jsx)(_v44.PrivacyDropdown, {
                  activePrivacy: _v9.embed,
                  onSelect: _v0 => _v8("embed", _v0),
                  privacyOptions: _v21,
                  variant: "outlined"
                }), _v20 && (0, _v1.jsx)(_v58, {
                  addDomainToWhitelist: _v0 => _v8("domainAllowlist", [..._v9.domainAllowlist, _v0]),
                  domainWhitelist: _v9.domainAllowlist,
                  removeDomainFromWhitelist: _v0 => _v8("domainAllowlist", _v9.domainAllowlist.filter(_v0 => _v0 !== _v0))
                })]
              }), (0, _v1.jsx)(_v27.Checkbox, {
                size: "md",
                isChecked: _v9.applyEmbedPrivacyToAll,
                onChange: _v0 => _v8("applyEmbedPrivacyToAll", _v0.target.checked),
                children: _v18.applyToAllExistingVideos
              }), _v14 && (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v16.Divider, {
                  borderColor: "stroke",
                  mx: (0, _v10.rem)(-24),
                  width: `calc(100% + ${(0, _v10.rem)(48)})`
                }), (0, _v1.jsxs)(_v34.Flex, {
                  direction: "column",
                  gap: "xs",
                  children: [(0, _v1.jsx)(_v4.Text, {
                    variant: "heading-xs",
                    children: (0, _v45.translate)({
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
                  }), (0, _v1.jsx)(_v4.Text, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: (0, _v45.translate)({
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
                  }), (0, _v1.jsxs)(_v37.Menu, {
                    children: [(0, _v1.jsx)(_v38.MenuButton, {
                      as: _v24.Button,
                      size: "sm",
                      variant: "outlined",
                      rightIcon: (0, _v1.jsx)(_v43.ChevronDownSmall, {
                        boxSize: (0, _v10.rem)(16)
                      }),
                      w: "fit-content",
                      children: _v66.find(_v0 => _v0.value === _v9.sharingLinkExpiryDays)?.label() ?? (0, _v45.translate)({
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
                    }), (0, _v1.jsx)(_v40.MenuList, {
                      children: _v66.map(_v0 => (0, _v1.jsx)(_v39.MenuItem, {
                        onClick: () => _v8("sharingLinkExpiryDays", _v0.value),
                        children: (0, _v1.jsx)(_v4.Text, {
                          variant: "body-md",
                          children: _v0.label()
                        })
                      }, _v0.value))
                    })]
                  })]
                })]
              })]
            })
          }), (0, _v1.jsx)(_v31.ModalFooter, {
            justifyContent: "flex-end",
            children: (0, _v1.jsx)(_v24.Button, {
              variant: "primary",
              isDisabled: !_v10,
              isLoading: _v4,
              onClick: _v24,
              children: _v18.save
            })
          })]
        })]
      });
    };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = {
      violence: (0, _v45.translate)({
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
      language: (0, _v45.translate)({
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
      nudity: (0, _v45.translate)({
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
      drugs: (0, _v45.translate)({
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
      safe: (0, _v45.translate)({
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
      mature: (0, _v45.translate)({
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
      unrated: (0, _v45.translate)({
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
    _v73 = [{
      value: "safe",
      label: _v72.safe
    }, {
      value: "mature",
      label: _v72.mature
    }],
    _v74 = ({
      contentRating: _v0,
      isRatingModlocked: _v1,
      onRatingChange: _v2
    }) => {
      let _v3 = _v63(),
        _v4 = (0, _v3.useMemo)(() => _v0?.includes("safe") ? "safe" : _v0?.some(_v0 => _v56.includes(_v0)) ? "mature" : "unrated", [_v0]);
      return (0, _v1.jsxs)(_v34.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v1.jsx)(_v70.Select, {
          placeholder: _v3.selectRating,
          items: _v73,
          value: [_v4 ?? ""],
          disabled: _v1,
          onValueChange: _v0 => {
            _v2(_v0.value[0]);
          },
          children: _v0 => (0, _v1.jsx)(_v70.SelectItem, {
            display: "flex",
            "data-testid": `${_v0.value}-option`,
            children: (0, _v1.jsx)(_v70.SelectItemText, {
              children: _v0.label
            })
          })
        }), "mature" === _v4 && (0, _v1.jsx)(_v34.Flex, {
          direction: "column",
          gap: "xs",
          children: _v56.map(_v0 => (0, _v1.jsx)(_v27.Checkbox, {
            isChecked: _v0.includes(_v0),
            onChange: _v0 => _v2(_v0, _v0.target.checked),
            alignItems: "flex-start",
            name: _v0,
            "data-testid": `${_v0}-checkbox`,
            value: _v0,
            children: _v72[_v0]
          }, `${_v0}-checkbox`))
        })]
      });
    };
  var _v75 = _v0.i(0);
  let _v76 = [{
      label: (0, _v45.translate)({
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
      label: (0, _v45.translate)({
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
      info: (0, _v45.translate)({
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
      label: (0, _v45.translate)({
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
      label: (0, _v45.translate)({
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
      label: (0, _v45.translate)({
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
    _v77 = (0, _v10.rem)(250),
    _v78 = {
      add: !0,
      cc: !1,
      comments: !1,
      download: !1,
      license: "none",
      rating: ["safe"],
      videoStats: !0,
      applyToAll: !1
    },
    _v79 = ({
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
          } = (0, _v75.useGetCreativecommons)({
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
          patchError: _v8,
          patchData: _v9
        } = _v61(),
        {
          state: _v10,
          hasChanges: _v11,
          updateState: _v12,
          initializeState: _v13,
          resetState: _v14
        } = _v59(_v78),
        _v15 = _v63(),
        _v16 = (0, _v3.useMemo)(() => {
          let _v0 = _v4?.map(_v0 => ({
            label: _v0.name,
            value: _v0.code
          }));
          return _v0?.unshift({
            label: (0, _v45.translate)({
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
      (0, _v3.useEffect)(() => {
        var _v0;
        _v5 && _v13({
          download: _v5.privacy?.download ?? !1,
          add: _v5.privacy?.add ?? !0,
          comments: _v5.privacy?.comments === "anybody",
          videoStats: !(_v5.hideStats ?? !0),
          cc: _v5.autoccDisplayEnabledByDefault ?? !1,
          license: _v5.license || "none",
          rating: 0 === (_v0 = _v5.rating).length || _v0.includes("safe") && _v56.some(_v0 => _v0.includes(_v0)) ? ["unrated"] : _v0,
          applyToAll: !1
        });
      }, [_v5, _v13]);
      let _v17 = async () => {
        let {
          add: _v0,
          applyToAll: _v1,
          cc: _v2,
          comments: _v3,
          download: _v4,
          license: _v5,
          rating: _v6,
          videoStats: _v7
        } = _v10;
        _v7({
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
      };
      return (0, _v3.useEffect)(() => {
        _v8 ? _v3() : _v9 && (_v2(), _v1());
      }, [_v8, _v9, _v3, _v2, _v1]), (0, _v1.jsxs)(_v28.Modal, {
        isOpen: _v0,
        onClose: () => {
          _v14(), _v1();
        },
        children: [(0, _v1.jsx)(_v33.ModalOverlay, {}), (0, _v1.jsxs)(_v30.ModalContent, {
          children: [(0, _v1.jsxs)(_v32.ModalHeader, {
            children: [(0, _v1.jsx)(_v4.Text, {
              variant: "heading-md",
              children: _v15.viewerPermissions
            }), (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              children: _v15.viewerPermissionsDescription
            })]
          }), (0, _v1.jsx)(_v29.ModalCloseButton, {
            onClick: _v1
          }), (0, _v1.jsxs)(_v41.ModalBody, {
            children: [(0, _v1.jsxs)(_v5.HStack, {
              mb: "xs",
              gap: "xs",
              children: [(0, _v1.jsx)(_v4.Text, {
                variant: "heading-xs",
                children: _v15.contentRating
              }), (0, _v1.jsx)(_v54.Tooltip, {
                label: _v15.contentRatingTooltip,
                maxW: _v77,
                placement: "top",
                shouldWrapChildren: !0,
                children: (0, _v1.jsx)(_v71.InfoCircle, {
                  cursor: "pointer",
                  display: "flex",
                  boxSize: "2xs"
                })
              })]
            }), (0, _v1.jsx)(_v74, {
              onRatingChange: (_v0, _v1) => {
                let {
                  rating: _v2
                } = _v10;
                switch (_v0) {
                  case "mature":
                    _v12("rating", ["language", "drugs", "violence", "nudity"]);
                    return;
                  case "safe":
                    _v12("rating", ["safe"]);
                    return;
                  default:
                    if (_v1) return void _v12("rating", [..._v2, _v0]);
                    let _v0 = _v2.filter(_v0 => _v0 !== _v0);
                    _v0.length ? _v12("rating", _v0) : _v12("rating", ["safe"]);
                }
              },
              isRatingModlocked: !1,
              contentRating: _v10.rating
            }), (0, _v1.jsx)(_v16.Divider, {
              borderColor: "stroke",
              my: "md"
            }), (0, _v1.jsx)(_v6.VStack, {
              gap: "md",
              children: _v76.map(({
                label: _v0,
                key: _v1,
                info: _v2
              }) => (0, _v1.jsx)(_v68.Toggle, {
                label: _v0,
                info: _v2,
                size: "md",
                fontSize: 14,
                isDisabled: !1,
                onChange: () => _v12(_v1, !_v10[_v1]),
                isChecked: _v10[_v1]
              }, _v1))
            }), (0, _v1.jsx)(_v16.Divider, {
              borderColor: "stroke",
              my: "md"
            }), (0, _v1.jsxs)(_v5.HStack, {
              gap: "xs",
              mb: "xs",
              children: [(0, _v1.jsx)(_v4.Text, {
                variant: "heading-xs",
                children: _v15.copyright
              }), (0, _v1.jsx)(_v54.Tooltip, {
                label: _v15.creativeCommonsTooltip,
                maxW: _v77,
                placement: "top",
                shouldWrapChildren: !0,
                children: (0, _v1.jsx)(_v71.InfoCircle, {
                  cursor: "pointer",
                  display: "flex",
                  boxSize: "2xs"
                })
              })]
            }), (0, _v1.jsx)(_v70.Select, {
              variant: "withCheck",
              placeholder: _v15.selectLicense,
              items: _v16,
              onValueChange: ({
                value: _v0
              }) => _v12("license", _v0[0]),
              value: [_v10.license ?? "none"]
            }), (0, _v1.jsx)(_v4.Text, {
              variant: "body-md",
              color: "text-secondary",
              mt: "xs",
              children: _v15.ccLicenseLink
            })]
          }), (0, _v1.jsx)(_v31.ModalFooter, {
            justifyContent: "space-between",
            children: (0, _v1.jsx)(_v69.DefaultFooterContent, {
              isSaveDisabled: !_v11,
              isLoading: _v6,
              onSave: _v17,
              onApplyToAll: _v0 => _v12("applyToAll", _v0)
            })
          })]
        })]
      });
    },
    _v80 = "application/vnd.vimeo.*+json;version=3.4.1",
    _v81 = ["preferences.videos.keepSourceFiles", "preferences.videos.autoGenerateReviewLink"],
    _v82 = "wsp-defaults-update",
    _v83 = () => {
      let {
          isOpen: _v0,
          onOpen: _v1,
          onClose: _v2
        } = (0, _v23.useDisclosure)(),
        {
          isOpen: _v3,
          onOpen: _v4,
          onClose: _v5
        } = (0, _v23.useDisclosure)(),
        _v6 = (0, _v26.useToast)(),
        _v7 = (0, _v15.getTranslations)(),
        {
          showReviewLinkToggle: _v8,
          isLoadingUploadDefaults: _v9,
          defaults: _v10,
          update: _v11
        } = (() => {
          let _v0 = (0, _v13.useViewer)(),
            _v1 = _v0?.team?.ownerId || _v0?.user?.id,
            {
              capabilities: {
                hasMultipleReviewLinks: _v2,
                hasProhibitMultipleReviewLinks: _v3
              },
              ready: _v4
            } = (0, _v12.useCapability)(_v1 ? ["hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks"] : []),
            {
              data: _v5,
              mutate: _v6
            } = (0, _v60.useGetUser)(() => _v1 ? {
              where: {
                userId: _v1
              },
              select: _v81,
              headers: {
                Accept: _v80
              }
            } : null),
            _v7 = _v5?.preferences?.videos?.keepSourceFiles,
            _v8 = _v5?.preferences?.videos?.autoGenerateReviewLink,
            [_v9, {
              loading: _v10
            }] = (0, _v60.usePatchUser)();
          return {
            defaults: {
              keepSourceFiles: _v7,
              autoGenerateReviewLink: _v8
            },
            showReviewLinkToggle: _v2 && !_v3 && _v4,
            isLoadingUploadDefaults: _v10,
            update: (0, _v3.useCallback)(async _v0 => {
              _v1 && (await _v9({
                select: _v81,
                variables: _v0,
                headers: {
                  Accept: _v80
                },
                where: {
                  userId: _v1
                }
              }), _v6());
            }, [_v6, _v9, _v1])
          };
        })(),
        _v12 = (0, _v3.useCallback)(_v0 => {
          _v6.isActive(_v82) || _v6({
            title: _v0 ? _v7.WorkspaceDefaultsUpdateSuccess : _v7.SomethingWentWrong,
            id: _v82
          });
        }, [_v7, _v6]),
        _v13 = async _v0 => {
          try {
            await _v11({
              videos: {
                [_v0]: !_v10[_v0]
              }
            }), _v12(!0);
          } catch (_v0) {
            _v12(!1);
          }
        },
        _v14 = [{
          title: _v7.SaveResolution,
          description: _v7.Storage,
          component: (0, _v1.jsx)(_v25.Switch, {
            disabled: _v9,
            isChecked: _v10.keepSourceFiles,
            onChange: () => _v13("keepSourceFiles")
          })
        }, ...(_v8 ? [{
          title: _v7.ReviewLinks,
          description: _v7.ReviewLinksDescription,
          component: (0, _v1.jsx)(_v25.Switch, {
            disabled: _v9,
            isChecked: _v10.autoGenerateReviewLink,
            onChange: () => _v13("autoGenerateReviewLink")
          })
        }] : []), {
          title: _v7.Privacy,
          description: _v7.ChoosePrivacyDefaults,
          component: (0, _v1.jsx)(_v24.Button, {
            size: "sm",
            variant: "secondary",
            onClick: _v4,
            children: _v7.ManageDefault
          })
        }, {
          title: _v7.ViewerPermissions,
          description: _v7.ChooseRatingAndControls,
          component: (0, _v1.jsx)(_v24.Button, {
            size: "sm",
            variant: "secondary",
            onClick: _v1,
            children: _v7.ManageDefault
          })
        }];
      return (0, _v1.jsxs)(_v17, {
        maxWidth: (0, _v10.rem)(640),
        children: [(0, _v1.jsxs)(_v18, {
          children: [(0, _v1.jsx)(_v20, {
            children: _v7.Defaults
          }), _v14.map(({
            title: _v0,
            description: _v1,
            component: _v2
          }) => (0, _v1.jsx)(_v19, {
            children: (0, _v1.jsxs)(_v5.HStack, {
              w: "100%",
              justify: "space-between",
              children: [(0, _v1.jsxs)(_v8.Box, {
                children: [(0, _v1.jsx)(_v4.Text, {
                  variant: "heading-xs",
                  children: _v0
                }), (0, _v1.jsx)(_v4.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v1
                })]
              }), _v2]
            })
          }, _v0))]
        }), (0, _v1.jsx)(_v79, {
          isOpen: _v0,
          onClose: _v2,
          onSaveSuccess: () => _v12(!0),
          onSaveFailure: () => _v12(!1)
        }), (0, _v1.jsx)(_v67, {
          isOpen: _v3,
          onClose: _v5,
          onSaveSuccess: () => _v12(!0)
        })]
      });
    };
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = ({
    workspaceInternalId: _v0
  }) => {
    let _v1 = (0, _v15.getTranslations)(),
      {
        onCopy: _v2
      } = (0, _v84.useClipboard)(_v0.toString()),
      _v3 = (0, _v26.useToast)();
    return (0, _v1.jsxs)(_v8.Box, {
      marginTop: "md",
      children: [(0, _v1.jsx)(_v4.Text, {
        variant: "heading-xs",
        id: "workspace-internal-id",
        children: _v1.WorkspaceInternalId
      }), (0, _v1.jsxs)(_v5.HStack, {
        role: "group",
        "aria-labelledby": "workspace-internal-id",
        gap: "xs",
        children: [(0, _v1.jsx)(_v4.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v0
        }), (0, _v1.jsx)(_v51.IconButton, {
          onClick: () => {
            _v2(), _v3({
              title: _v1.CopiedToClipboard,
              variant: "neutral"
            });
          },
          sx: {
            opacity: 0
          },
          _groupHover: {
            opacity: 1
          },
          "aria-label": "copy to clipboard",
          icon: (0, _v1.jsx)(_v85.CopyPortrait, {}),
          variant: "tertiary",
          size: "xs"
        })]
      })]
    });
  };
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  async function _v92({
    baseUrl: _v0,
    where: {
      workspaceUuid: _v1,
      pictureUid: _v2
    },
    ..._v3
  }) {
    return (0, _v90.measureLatency)("deleteWorkspacePicture", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v1}/pictures/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v91.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v91.deepCamelCase)(_v1);
    });
  }
  async function _v93({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      workspaceUuid: _v3
    },
    ..._v4
  }) {
    return (0, _v90.measureLatency)("postWorkspacePictures", "POST", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v3}/pictures?fields=${_v1.map(_v91.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v91.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v91.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v91.deepCamelCase)(_v1);
    });
  }
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  let _v97 = ({
      assetType: _v0,
      workspaceUuid: _v1,
      onError: _v2,
      onSuccess: _v3
    }) => {
      let _v4 = (0, _v94.useGctlConfig)(),
        [_v5, _v6] = (0, _v3.useState)(!1);
      return [(0, _v3.useCallback)(async _v0 => {
        if (_v1 && _v0) {
          if (!_v14.UPLOAD_FILE_VALID_TYPES.includes(_v0.type)) return void _v2?.(Error("InvalidFileType"));
          if (_v0.size > _v14.UPLOAD_FILE_SIZE_LIMIT_5MB) return void _v2?.(Error("FileSizeExceeded"));
          try {
            let {
              width: _v0,
              height: _v1
            } = await (0, _v96.getUploadedImageDimensions)(_v0);
            if (_v0 > _v96.IMAGE_DIMENSIONS_LIMIT_10K_RESOLUTION.width || _v1 > _v96.IMAGE_DIMENSIONS_LIMIT_10K_RESOLUTION.height) return void _v2?.(Error("ImageDimensionsExceeded"));
          } catch {
            _v2?.(Error(`${(0, _v95.titleCase)(_v0)}UploadFailed`));
            return;
          }
          try {
            _v6(!0);
            let _v0 = await _v93({
              ...(0, _v95.prepareGctlOptions)(_v4),
              where: {
                workspaceUuid: _v1
              },
              variables: {
                assetType: `workspace_${_v0}`
              },
              select: ["link", "uri"]
            });
            if (!_v0 || !_v0.link || !_v0.uri) throw Error(`${(0, _v95.titleCase)(_v0)}CreationFailed`);
            let {
              link: _v1,
              uri: _v2
            } = _v0;
            if (!(await fetch(_v1, {
              method: "PUT",
              headers: {
                "Content-Type": _v0.type
              },
              body: _v0
            })).ok) throw Error(`${(0, _v95.titleCase)(_v0)}UploadFailed`);
            let _v3 = await (0, _v89.patchWorkspace)({
              ...(0, _v95.prepareGctlOptions)(_v4),
              where: {
                workspaceUuid: _v1
              },
              variables: {
                [`${_v0}Uri`]: _v2
              },
              select: [_v0]
            });
            _v3?.(_v3);
          } catch (_v0) {
            _v2?.(_v0);
          } finally {
            _v6(!1);
          }
        }
      }, [_v1, _v2, _v3, _v4, _v0]), _v5];
    },
    _v98 = ({
      workspaceUuid: _v0,
      onError: _v1,
      onSuccess: _v2
    }) => {
      let _v3 = (0, _v94.useGctlConfig)(),
        [_v4, _v5] = (0, _v3.useState)(!1);
      return [(0, _v3.useCallback)(async _v0 => {
        if (_v0 && _v0) try {
          _v5(!0), await _v92({
            ...(0, _v95.prepareGctlOptions)(_v3),
            where: {
              workspaceUuid: _v0,
              pictureUid: _v0
            }
          }), _v2?.();
        } catch (_v0) {
          _v1?.(_v0);
        } finally {
          _v5(!1);
        }
      }, [_v0, _v1, _v2, _v3]), _v4];
    };
  var _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = _v0 => {
      if (!_v0) return null;
      try {
        let {
          pictureUuid: _v0
        } = (0, _v95.parseWorkspacePictureUri)(_v0);
        return _v0;
      } catch {
        return null;
      }
    },
    _v102 = (_v0, _v1) => {
      switch (_v0) {
        case "InvalidFileType":
        case "FileSizeExceeded":
        case "ImageDimensionsExceeded":
        case `${(0, _v95.titleCase)(_v1)}CreationFailed`:
        case `${(0, _v95.titleCase)(_v1)}UploadFailed`:
          return _v0;
        default:
          return `Default${(0, _v95.titleCase)(_v1)}UploadError`;
      }
    },
    _v103 = ({
      workspaceUuid: _v0
    }) => {
      let _v1,
        _v2,
        _v3 = (0, _v15.getTranslations)(),
        _v4 = (0, _v26.useToast)(),
        {
          mutate: _v5
        } = (0, _v87.useGetAllWorkspacesForUser)(),
        {
          sendChangeInAccountSettingsEvent: _v6
        } = (0, _v99.useTrackEvents)(),
        {
          data: _v7,
          isValidating: _v8,
          mutate: _v9
        } = (({
          workspaceUuid: _v0
        }) => (0, _v88.useGetWorkspace)(() => _v0 ? {
          select: ["icon", "logo"],
          where: {
            workspaceUuid: _v0
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        }))({
          workspaceUuid: _v0
        }),
        [_v10, _v11] = _v97({
          assetType: "logo",
          workspaceUuid: _v0,
          onSuccess: _v0 => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                logo: _v0.logo
              }),
              revalidate: !1
            }), _v4({
              title: _v3.LogoUploadSuccess
            }), _v6({
              location: "card",
              buttonText: null,
              entityType: "workspace",
              tabName: "basics",
              actionName: "workspace logo",
              actionValue: [_v0.logo.resourceKey]
            });
          },
          onError: _v0 => _v4({
            title: _v3[_v102(_v0.message, "logo")],
            variant: "warning"
          })
        }),
        [_v12, _v13] = _v97({
          assetType: "icon",
          workspaceUuid: _v0,
          onSuccess: _v0 => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                icon: _v0.icon
              }),
              revalidate: !1
            }), _v5(), _v4({
              title: _v3.IconUploadSuccess
            }), _v6({
              location: "card",
              buttonText: null,
              entityType: "workspace",
              tabName: "basics",
              actionName: "workspace logo",
              actionValue: [_v0.icon.resourceKey]
            });
          },
          onError: _v0 => _v4({
            title: _v3[_v102(_v0.message, "icon")],
            variant: "warning"
          })
        }),
        _v14 = !!(_v7?.logo && !_v8),
        _v15 = !!(_v7?.icon && !_v8),
        _v16 = (0, _v96.addQueryParam)((_v1 = _v7?.logo, _v1?.sizes?.at(-1)?.link)),
        _v17 = (0, _v96.addQueryParam)((_v2 = _v7?.icon, _v2?.sizes?.find(_v0 => 152 === _v0.width)?.link ?? _v2?.sizes?.at(-1)?.link)),
        [_v18, _v19] = _v98({
          workspaceUuid: _v0,
          onSuccess: () => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                logo: null
              }),
              revalidate: !1
            }), _v5(), _v4({
              title: _v3.LogoDeleteSuccess
            });
          },
          onError: _v0 => console.error("Failed to delete workspace logo:", _v0)
        }),
        [_v20, _v21] = _v98({
          workspaceUuid: _v0,
          onSuccess: () => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                icon: null
              }),
              revalidate: !1
            }), _v5(), _v4({
              title: _v3.IconDeleteSuccess
            });
          },
          onError: _v0 => console.error("Failed to delete workspace icon:", _v0)
        }),
        _v22 = (0, _v3.useCallback)(() => {
          let _v0 = _v101(_v7?.logo?.uri);
          _v0 && _v18(_v0);
        }, [_v7?.logo?.uri, _v18]),
        _v23 = (0, _v3.useCallback)(() => {
          let _v0 = _v101(_v7?.icon?.uri);
          _v0 && _v20(_v0);
        }, [_v7?.icon?.uri, _v20]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.Text, {
          variant: "heading-xs",
          mt: "md",
          children: _v3.Logo
        }), (0, _v1.jsxs)(_v5.HStack, {
          gap: "md",
          mt: "md",
          children: [(0, _v1.jsx)(_v100.UploadableImage, {
            header: _v3.FullLogo,
            tooltip: _v3.FullLogoUploadTooltip,
            tooltipProps: {
              maxWidth: (0, _v10.rem)(252)
            },
            isLoading: _v8 || _v11 || _v19,
            isImageUploaded: _v14,
            alt: "logo",
            src: _v16,
            px: "lg",
            background: "fill-component",
            objectFit: "contain",
            width: (0, _v10.rem)(200),
            height: (0, _v10.rem)(78),
            borderRadius: "md",
            onChange: _v0 => {
              let _v1 = _v0.target.files?.[0];
              _v1 && _v10(_v1);
            },
            onDelete: _v22
          }), (0, _v1.jsx)(_v100.UploadableImage, {
            header: _v3.Icon,
            tooltip: _v3.IconUploadTooltip,
            tooltipProps: {
              maxWidth: (0, _v10.rem)(252)
            },
            isLoading: _v8 || _v13 || _v21,
            isImageUploaded: _v15,
            alt: "icon",
            src: _v17,
            background: "fill-component",
            width: (0, _v10.rem)(78),
            height: (0, _v10.rem)(78),
            borderRadius: "md",
            onChange: _v0 => {
              let _v1 = _v0.target.files?.[0];
              _v1 && _v12(_v1);
            },
            onDelete: _v23
          })]
        }), (0, _v1.jsx)(_v4.Text, {
          variant: "body-sm",
          mt: "sm",
          color: "text-secondary",
          children: _v3.FileUploadSpecifications
        })]
      });
    };
  var _v104 = _v0.i(0);
  let _v105 = ({
      displayName: _v0,
      onSuccessfulUpdate: _v1,
      onUpdateFailed: _v2,
      workspaceUuid: _v3
    }) => {
      let _v4,
        [_v5, _v6] = (0, _v3.useState)(_v0),
        _v7 = (0, _v15.getTranslations)(),
        {
          mutate: _v8
        } = (0, _v87.useGetAllWorkspacesForUser)(),
        _v9 = (0, _v3.useRef)(!1),
        [_v10, {
          data: _v11,
          loading: _v12
        }] = (0, _v88.usePatchWorkspace)(),
        _v13 = (_v4 = _v5.trim()).length < _v14.MIN_LENGTH_OF_WORKSPACE_NAME ? _v7.WorkspaceNameTooShort : _v4.length > _v14.MAX_LENGTH_OF_WORKSPACE_NAME ? _v7.WorkspaceNameTooLong : "",
        _v14 = _v13.length > 0,
        _v15 = () => {
          if (!_v12 && _v5 !== _v0) {
            if (!_v5 || !_v5.trim() || _v14) return void _v6(_v11?.displayName ?? _v0);
            _v10({
              select: ["displayName"],
              where: {
                workspaceUuid: _v3
              },
              variables: {
                displayName: _v5
              }
            }), _v9.current = !0;
          }
        };
      return (0, _v3.useEffect)(() => {
        !_v12 && _v9.current && (_v11?.displayName ? (_v6(_v11.displayName), _v1(_v11.displayName), _v8()) : (_v6(_v0), _v2()), _v9.current = !1);
      }, [_v0, _v8, _v2, _v1, _v11, _v12]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.Text, {
          variant: "heading-xs",
          children: _v7.Name
        }), (0, _v1.jsxs)(_v5.HStack, {
          pt: "md",
          children: [(0, _v1.jsx)(_v9.Input, {
            isDisabled: _v12,
            isInvalid: _v14,
            onBlur: _v15,
            onChange: _v0 => _v6(_v0.target.value),
            onKeyDown: _v0 => {
              "Enter" === _v0.key && (_v0.preventDefault(), _v15());
            },
            size: "md",
            value: _v5,
            width: (0, _v10.rem)(305)
          }), _v12 && (0, _v1.jsx)(_v104.Spinner, {
            size: "sm"
          })]
        }), _v14 && (0, _v1.jsx)(_v4.Text, {
          color: "status-destructive-primary",
          mt: "xs",
          variant: "body-md",
          children: _v13
        })]
      });
    },
    _v106 = ({
      displayName: _v0,
      workspaceUuid: _v1,
      workspaceInternalId: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(_v0),
        _v5 = (0, _v26.useToast)(),
        _v6 = (0, _v15.getTranslations)(),
        {
          sendChangeInAccountSettingsEvent: _v7
        } = (0, _v99.useTrackEvents)(),
        _v8 = (0, _v3.useRef)(_v7),
        _v9 = (0, _v3.useCallback)(_v0 => {
          _v5.isActive("wsp-name-update-success") || _v5({
            title: _v6.WorkspaceNameUpdateSuccessful,
            variant: "neutral",
            id: "wsp-name-update-success"
          }), _v4(_v0), _v8.current?.({
            location: "card",
            buttonText: null,
            entityType: "workspace",
            tabName: "basics",
            actionName: "workspace name",
            actionValue: [_v0]
          });
        }, [_v6, _v5]),
        _v10 = (0, _v3.useCallback)(() => {
          _v5.isActive("wsp-name-update-failed") || _v5({
            title: _v6.WorkspaceNameUpdateFailed,
            variant: "warning",
            id: "wsp-name-update-failed"
          });
        }, [_v6, _v5]);
      return (0, _v1.jsx)(_v17, {
        header: _v6.BasicInfo,
        maxWidth: (0, _v10.rem)(640),
        children: (0, _v1.jsxs)(_v18, {
          children: [(0, _v1.jsx)(_v20, {
            children: _v6.WorkspaceDetails
          }), (0, _v1.jsxs)(_v19, {
            children: [(0, _v1.jsx)(_v105, {
              displayName: _v3 ?? "",
              onSuccessfulUpdate: _v9,
              onUpdateFailed: _v10,
              workspaceUuid: _v1
            }), (0, _v1.jsx)(_v103, {
              workspaceUuid: _v1
            }), (0, _v1.jsx)(_v86, {
              workspaceInternalId: _v2
            })]
          })]
        })
      });
    };
  var _v107 = _v0.i(0);
  let _v108 = ({
    displayName: _v0,
    workspaceUuid: _v1,
    workspaceInternalId: _v2
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v106, {
      displayName: _v0,
      workspaceUuid: _v1,
      workspaceInternalId: _v2
    }), (0, _v1.jsx)(_v83, {}), (0, _v1.jsx)(_v21, {})]
  });
  (0, _v2.withPageSetup)(_v107.getWspServerSideProps, {
    requireLogin: !0
  }), _v108.getLayout = (_v0, _v1) => (0, _v22.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v108], 0);
}