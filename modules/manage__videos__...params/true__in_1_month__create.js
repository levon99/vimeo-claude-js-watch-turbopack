{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
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
    _v28 = _v0.i(0);
  let _v29 = {
      allowComments: !0,
      allowDownloads: !1,
      allowStatusChange: !0,
      showResolvedComments: !0,
      isDark: !1,
      showAllVersions: !1,
      showMyLogo: !1,
      hideEndCards: !0,
      expiryEnabled: !0
    },
    _v30 = ({
      resourceId: _v0,
      resourceType: _v1,
      resourceName: _v2,
      onSubmit: _v3,
      onCancel: _v4,
      mode: _v5,
      data: _v6,
      resetReviewLinkData: _v7,
      defaultSettings: _v8,
      isRepackagedFree: _v9,
      inlineShareFlow: _v10
    }) => {
      let {
          settings: _v11
        } = (0, _v17.useOrionSettings)(),
        _v12 = (0, _v21.useCanUpSell)(),
        _v13 = _v9 || _v12 && _v11.should_have_permissive_review_links,
        _v14 = _v12 && !_v13,
        _v15 = (0, _v13.useIsMobile)(),
        _v16 = (0, _v19.useViewer)(),
        _v17 = _v11.enable_review_link_default_settings,
        _v18 = (0, _v12.useToast)(),
        _v19 = (0, _v4.useRef)(""),
        {
          pathname: _v20,
          query: _v21
        } = (0, _v3.useRouter)(),
        _v22 = "true" === _v21.isPrivate,
        [_v23, _v24] = (0, _v4.useState)({}),
        [_v25, _v26] = (0, _v4.useState)("in_1_month"),
        {
          upsellModalConfig: _v27,
          upsellTrackingProps: _v28,
          setUpsellAndTriggerEvent: _v29,
          bpTriggerUpsellImpression: _v30
        } = (0, _v24.useUpsellTrackingProps)(_v1),
        [_v31, _v32] = (0, _v4.useState)(!1),
        [_v33, _v34] = (0, _v4.useState)(!1),
        _v35 = (_v0, _v1) => {
          let _v2 = {
              ..._v23
            },
            _v3 = "string" == typeof _v0,
            _v4 = !1,
            _v5 = "";
          _v1.pastDateErrorMessage && _v3 && (_v5 = (_v4 = (0, _v28.checkIsPastDate)(_v0)) && _v1.pastDateErrorMessage ? _v1.pastDateErrorMessage : ""), _v1.maxLength && _v3 && _v0.length > _v1.maxLength && (_v4 = !0, _v5 = _v1.maxLengthErrorMessage || ""), _v4 ? _v2 = {
            ..._v2,
            [_v1.name]: _v5
          } : delete _v2[_v1.name], _v24(_v2);
        },
        [_v36, _v37] = (0, _v4.useState)(() => {
          let _v0;
          if ("create" !== _v5 && _v6) return _v35(_v6.expiresOn ?? "", {
            name: "expiresOn",
            type: "dateTime",
            showUpsell: !1,
            isDisabled: !1,
            pastDateErrorMessage: (0, _v16.translate)({
              singular: "Link expired. To use it again, set a new expiration date.",
              dictionary: {
                es: {
                  singular: "El enlace venció. Para volver a usarlo, establezca una nueva fecha de vencimiento."
                },
                "de-DE": {
                  singular: "Link abgelaufen. Um es erneut zu verwenden, legen Sie ein neues Ablaufdatum fest."
                },
                "fr-FR": {
                  singular: "Le lien a expiré. Pour l'utiliser à nouveau, définissez une nouvelle date d'expiration."
                },
                "ja-JP": {
                  singular: "リンクの有効期限が切れました。再度使用するには、新しい有効期限を設定してください。"
                },
                "ko-KR": {
                  singular: "링크가 만료되었습니다. 다시 사용하시려면 새 만료일을 설정하세요."
                },
                "pt-BR": {
                  singular: "O link expirou. Para usá-lo novamente, defina uma nova data de expiração."
                },
                "zh-CN": {
                  singular: "链接已过期。要再次使用，请设置新的到期日期。"
                }
              }
            })
          }), {
            allowComments: _v6.allowComments,
            allowDownloads: _v6.allowDownloads,
            allowStatusChange: _v6.allowStatusChange,
            expiresOn: _v6.expiresOn ?? "",
            showResolvedComments: _v6.showResolvedComments,
            isDark: _v6.isDark,
            name: _v6.name,
            showAllVersions: _v6.showAllVersions,
            showMyLogo: _v6.showMyLogo,
            hideEndCards: _v6.hideEndCards ?? !1,
            password: _v6.password ?? ""
          };
          return _v0 = _v11.use_resource_name_for_review_links ? _v2 : void 0, {
            allowComments: _v8.allowComments,
            allowDownloads: _v8.allowDownloads,
            allowStatusChange: _v8.allowStatusChange,
            expiresOn: _v8.expiryEnabled ? _v2.DateTime.local().plus({
              days: 30
            }).endOf("day").toISO() : "",
            showResolvedComments: _v8.showResolvedComments,
            isDark: _v8.isDark,
            name: (_v0 => {
              if (!_v0?.trim()) return (0, _v16.translate)({
                singular: "Created on {DATE}",
                replacements: {
                  DATE: (0, _v27.formatDate)(new Date().toISOString(), !0)
                },
                dictionary: {
                  es: {
                    singular: "Creado: {DATE}"
                  },
                  "de-DE": {
                    singular: "Erstellt am {DATE}"
                  },
                  "fr-FR": {
                    singular: "Créé le {DATE}"
                  },
                  "ja-JP": {
                    singular: "{DATE}に作成"
                  },
                  "ko-KR": {
                    singular: "{DATE}에 생성되었습니다."
                  },
                  "pt-BR": {
                    singular: "Criado em {DATE}"
                  },
                  "zh-CN": {
                    singular: "创建于 {DATE}"
                  }
                }
              });
              let _v1 = _v0.trim(),
                _v2 = 50 - (0, _v16.translate)({
                  singular: "{REVIEW_RESOURCE_NAME} - Review",
                  replacements: {
                    REVIEW_RESOURCE_NAME: ""
                  },
                  dictionary: {
                    es: {
                      singular: "{REVIEW_RESOURCE_NAME} - Revisión"
                    },
                    "de-DE": {
                      singular: "{REVIEW_RESOURCE_NAME} - Überprüfung"
                    },
                    "fr-FR": {
                      singular: "{REVIEW_RESOURCE_NAME} - Révision"
                    },
                    "ja-JP": {
                      singular: "{REVIEW_RESOURCE_NAME} - レビュー"
                    },
                    "ko-KR": {
                      singular: "{REVIEW_RESOURCE_NAME} - 검토"
                    },
                    "pt-BR": {
                      singular: "{REVIEW_RESOURCE_NAME} - Revisão"
                    },
                    "zh-CN": {
                      singular: "{REVIEW_RESOURCE_NAME} - 审阅"
                    }
                  }
                }).length;
              if (_v2 <= 3) return (0, _v16.translate)({
                singular: "Created on {DATE}",
                replacements: {
                  DATE: (0, _v27.formatDate)(new Date().toISOString(), !0)
                },
                dictionary: {
                  es: {
                    singular: "Creado: {DATE}"
                  },
                  "de-DE": {
                    singular: "Erstellt am {DATE}"
                  },
                  "fr-FR": {
                    singular: "Créé le {DATE}"
                  },
                  "ja-JP": {
                    singular: "{DATE}に作成"
                  },
                  "ko-KR": {
                    singular: "{DATE}에 생성되었습니다."
                  },
                  "pt-BR": {
                    singular: "Criado em {DATE}"
                  },
                  "zh-CN": {
                    singular: "创建于 {DATE}"
                  }
                }
              });
              let _v3 = Array.from(_v1),
                _v4 = _v3.length > _v2 ? `${_v3.slice(0, _v2 - 3).join("")}...` : _v1;
              return (0, _v16.translate)({
                singular: "{REVIEW_RESOURCE_NAME} - Review",
                replacements: {
                  REVIEW_RESOURCE_NAME: _v4
                },
                dictionary: {
                  es: {
                    singular: "{REVIEW_RESOURCE_NAME} - Revisión"
                  },
                  "de-DE": {
                    singular: "{REVIEW_RESOURCE_NAME} - Überprüfung"
                  },
                  "fr-FR": {
                    singular: "{REVIEW_RESOURCE_NAME} - Révision"
                  },
                  "ja-JP": {
                    singular: "{REVIEW_RESOURCE_NAME} - レビュー"
                  },
                  "ko-KR": {
                    singular: "{REVIEW_RESOURCE_NAME} - 검토"
                  },
                  "pt-BR": {
                    singular: "{REVIEW_RESOURCE_NAME} - Revisão"
                  },
                  "zh-CN": {
                    singular: "{REVIEW_RESOURCE_NAME} - 审阅"
                  }
                }
              });
            })(_v0),
            showAllVersions: _v8.showAllVersions,
            showMyLogo: _v8.showMyLogo,
            hideEndCards: _v8.hideEndCards,
            password: ""
          };
        }),
        {
          createReviewLink: _v38,
          isLoading: _v39,
          isCreateApiCalled: _v40
        } = (0, _v23.usePostReviewLink)({
          resourceId: _v0,
          resourceType: _v1
        }),
        {
          editReviewLink: _v41,
          isPatchApiCallInProgress: _v42,
          isPatchApiCalled: _v43,
          isPatchApiError: _v44
        } = (0, _v22.useEditReviewLink)(_v0, _v1),
        _v45 = _v42 || _v39,
        _v46 = _v40 || _v43,
        _v47 = Object.keys(_v23).length > 0 || !_v36.name?.trim(),
        _v48 = (0, _v4.useMemo)(() => [{
          fields: [{
            label: (0, _v16.translate)({
              singular: "Link name",
              dictionary: {
                es: {
                  singular: "Nombre del enlace"
                },
                "de-DE": {
                  singular: "Linkname"
                },
                "fr-FR": {
                  singular: "Nom du lien"
                },
                "ja-JP": {
                  singular: "リンク名"
                },
                "ko-KR": {
                  singular: "링크 이름"
                },
                "pt-BR": {
                  singular: "Nome do link"
                },
                "zh-CN": {
                  singular: "链接名称"
                }
              }
            }),
            name: "name",
            type: "text",
            helperText: (0, _v16.translate)({
              singular: "Not visible on review page",
              dictionary: {
                es: {
                  singular: "No está visible en la página de revisión"
                },
                "de-DE": {
                  singular: "Nicht sichtbar auf der Review-Seite"
                },
                "fr-FR": {
                  singular: "Non visible sur la page d'avis"
                },
                "ja-JP": {
                  singular: "レビューページでは非表示"
                },
                "ko-KR": {
                  singular: "리뷰 페이지에 표시되지 않습니다."
                },
                "pt-BR": {
                  singular: "Não aparece na página de revisão"
                },
                "zh-CN": {
                  singular: "在评论页面上不可见"
                }
              }
            }),
            showUpsell: !1,
            isDisabled: !1,
            maxLength: 50,
            maxLengthErrorMessage: (0, _v16.translate)({
              singular: "Enter {MAX_LENGTH} characters or less",
              replacements: {
                MAX_LENGTH: "50"
              },
              dictionary: {
                es: {
                  singular: "Introduzca {MAX_LENGTH} caracteres o menos"
                },
                "de-DE": {
                  singular: "Geben Sie {MAX_LENGTH} Zeichen oder weniger ein"
                },
                "fr-FR": {
                  singular: "Saisissez {MAX_LENGTH} caractères ou moins"
                },
                "ja-JP": {
                  singular: "最大 {MAX_LENGTH} 文字以内で入力してください"
                },
                "ko-KR": {
                  singular: "최대 {MAX_LENGTH}자 이하로 입력하세요"
                },
                "pt-BR": {
                  singular: "Digite {MAX_LENGTH} caracteres ou menos"
                },
                "zh-CN": {
                  singular: "输入不超过 {MAX_LENGTH} 个字符"
                }
              }
            })
          }]
        }, {
          fields: [{
            label: (0, _v16.translate)({
              singular: "Expiration",
              dictionary: {
                es: {
                  singular: "Expiración"
                },
                "de-DE": {
                  singular: "Ablaufdatum"
                },
                "ja-JP": {
                  singular: "有効期限"
                },
                "ko-KR": {
                  singular: "만료"
                },
                "pt-BR": {
                  singular: "Expiração"
                },
                "zh-CN": {
                  singular: "到期"
                }
              }
            }),
            name: "expiresOn",
            type: "dateTime",
            showUpsell: _v14,
            upsellName: "review_link_expiration",
            isDisabled: _v12,
            pastDateErrorMessage: (0, _v16.translate)({
              singular: "Link expired. To use it again, set a new expiration date.",
              dictionary: {
                es: {
                  singular: "El enlace venció. Para volver a usarlo, establezca una nueva fecha de vencimiento."
                },
                "de-DE": {
                  singular: "Link abgelaufen. Um es erneut zu verwenden, legen Sie ein neues Ablaufdatum fest."
                },
                "fr-FR": {
                  singular: "Le lien a expiré. Pour l'utiliser à nouveau, définissez une nouvelle date d'expiration."
                },
                "ja-JP": {
                  singular: "リンクの有効期限が切れました。再度使用するには、新しい有効期限を設定してください。"
                },
                "ko-KR": {
                  singular: "링크가 만료되었습니다. 다시 사용하시려면 새 만료일을 설정하세요."
                },
                "pt-BR": {
                  singular: "O link expirou. Para usá-lo novamente, defina uma nova data de expiração."
                },
                "zh-CN": {
                  singular: "链接已过期。要再次使用，请设置新的到期日期。"
                }
              }
            }),
            ...(_v13 ? {
              maxDateTime: ("edit" === _v5 && _v6?.createdOn ? _v2.DateTime.fromISO(_v6.createdOn) : _v2.DateTime.local()).plus({
                days: 31
              }).endOf("day").toISO(),
              isDatePickerEnabled: !0
            } : {})
          }, {
            label: (0, _v16.translate)({
              singular: "Password",
              dictionary: {
                es: {
                  singular: "Contraseña"
                },
                "de-DE": {
                  singular: "Kennwort"
                },
                "fr-FR": {
                  singular: "Mot de passe "
                },
                "ja-JP": {
                  singular: "パスワード"
                },
                "ko-KR": {
                  singular: "비밀번호"
                },
                "pt-BR": {
                  singular: "Senha"
                },
                "zh-CN": {
                  singular: "密码"
                }
              }
            }),
            name: "password",
            type: "password",
            showUpsell: _v12,
            upsellName: "review_link_password",
            isDisabled: _v12,
            maxLength: 32,
            maxLengthErrorMessage: (0, _v16.translate)({
              singular: "Enter {MAX_LENGTH} characters or less",
              replacements: {
                MAX_LENGTH: "32"
              },
              dictionary: {
                es: {
                  singular: "Introduzca {MAX_LENGTH} caracteres o menos"
                },
                "de-DE": {
                  singular: "Geben Sie {MAX_LENGTH} Zeichen oder weniger ein"
                },
                "fr-FR": {
                  singular: "Saisissez {MAX_LENGTH} caractères ou moins"
                },
                "ja-JP": {
                  singular: "最大 {MAX_LENGTH} 文字以内で入力してください"
                },
                "ko-KR": {
                  singular: "최대 {MAX_LENGTH}자 이하로 입력하세요"
                },
                "pt-BR": {
                  singular: "Digite {MAX_LENGTH} caracteres ou menos"
                },
                "zh-CN": {
                  singular: "输入不超过 {MAX_LENGTH} 个字符"
                }
              }
            })
          }]
        }, {
          title: (0, _v16.translate)({
            singular: "What can people with this link do?",
            dictionary: {
              es: {
                singular: "¿Qué pueden hacer las personas con este enlace?"
              },
              "de-DE": {
                singular: "Was können Leute mit diesem Link tun?"
              },
              "fr-FR": {
                singular: "Que peuvent faire les personnes disposant de ce lien ?"
              },
              "ja-JP": {
                singular: "このリンクを持っている人ができること："
              },
              "ko-KR": {
                singular: "이 링크로 할 수 있는 작업"
              },
              "pt-BR": {
                singular: "O que as pessoas com este link podem fazer?"
              },
              "zh-CN": {
                singular: "拥有此链接的人可以做什么？"
              }
            }
          }),
          fields: [{
            label: (0, _v16.translate)({
              singular: "Comment",
              dictionary: {
                es: {
                  singular: "Comentar"
                },
                "de-DE": {
                  singular: "Kommentar"
                },
                "fr-FR": {
                  singular: "Commenter"
                },
                "ja-JP": {
                  singular: "コメント"
                },
                "ko-KR": {
                  singular: "소감"
                },
                "pt-BR": {
                  singular: "Comentário"
                },
                "zh-CN": {
                  singular: "评论"
                }
              }
            }),
            name: "allowComments",
            type: "switch",
            showUpsell: _v14,
            upsellName: "review_link_comment",
            isDisabled: _v14
          }, {
            label: (0, _v16.translate)({
              singular: "Download",
              dictionary: {
                es: {
                  singular: "Descargar"
                },
                "de-DE": {
                  singular: "Herunterladen"
                },
                "fr-FR": {
                  singular: "Télécharger "
                },
                "ja-JP": {
                  singular: "ダウンロード"
                },
                "ko-KR": {
                  singular: "다운로드"
                },
                "pt-BR": {
                  singular: "Baixar"
                },
                "zh-CN": {
                  singular: "下载"
                }
              }
            }),
            name: "allowDownloads",
            type: "switch",
            showUpsell: _v14,
            upsellName: "review_link_download",
            isDisabled: _v14
          }, {
            label: (0, _v16.translate)({
              singular: "Change status",
              dictionary: {
                es: {
                  singular: "Cambiar el estado"
                },
                "de-DE": {
                  singular: "Status ändern"
                },
                "fr-FR": {
                  singular: "Modifier le statut"
                },
                "ja-JP": {
                  singular: "ステータスの変更"
                },
                "ko-KR": {
                  singular: "상태 변경"
                },
                "pt-BR": {
                  singular: "Alterar status"
                },
                "zh-CN": {
                  singular: "更改状态"
                }
              }
            }),
            name: "allowStatusChange",
            type: "switch",
            showUpsell: _v14,
            upsellName: "review_link_change_status",
            isDisabled: _v14
          }, {
            label: (0, _v16.translate)({
              singular: "View resolved comments",
              dictionary: {
                es: {
                  singular: "Ver los comentarios resueltos"
                },
                "de-DE": {
                  singular: "Aufgelöste Kommentare anzeigen"
                },
                "fr-FR": {
                  singular: "Voir les commentaires résolus"
                },
                "ja-JP": {
                  singular: "解決済みコメントの閲覧"
                },
                "ko-KR": {
                  singular: "해결된 댓글 보기"
                },
                "pt-BR": {
                  singular: "Ver comentários resolvidos"
                },
                "zh-CN": {
                  singular: "查看已解决的评论"
                }
              }
            }),
            name: "showResolvedComments",
            type: "switch",
            showUpsell: _v14,
            upsellName: "review_link_view_resolved_comments",
            isDisabled: _v14
          }, {
            label: (0, _v16.translate)({
              singular: "View previous versions",
              dictionary: {
                es: {
                  singular: "Ver las versiones anteriores"
                },
                "de-DE": {
                  singular: "Vorherige Versionen anzeigen"
                },
                "fr-FR": {
                  singular: "Voir les versions précédentes"
                },
                "ja-JP": {
                  singular: "過去バージョンの閲覧"
                },
                "ko-KR": {
                  singular: "이전 버전 보기"
                },
                "pt-BR": {
                  singular: "Ver versões anteriores"
                },
                "zh-CN": {
                  singular: "查看以前的版本"
                }
              }
            }),
            name: "showAllVersions",
            type: "switch",
            showUpsell: _v14,
            upsellName: "review_link_view_previous_versions",
            isDisabled: _v14
          }]
        }, {
          title: (0, _v16.translate)({
            singular: "Appearance",
            dictionary: {
              es: {
                singular: "Apariencia"
              },
              "de-DE": {
                singular: "Auftritt"
              },
              "fr-FR": {
                singular: "Apparence"
              },
              "ja-JP": {
                singular: "スタイル"
              },
              "ko-KR": {
                singular: "디자인"
              },
              "pt-BR": {
                singular: "Aparência"
              },
              "zh-CN": {
                singular: "外观"
              }
            }
          }),
          fields: [{
            label: (0, _v16.translate)({
              singular: "Logo",
              dictionary: {
                "ja-JP": {
                  singular: "ロゴ"
                },
                "ko-KR": {
                  singular: "로고"
                },
                "zh-CN": {
                  singular: "徽标"
                }
              }
            }),
            name: "showMyLogo",
            info: (0, _v16.translate)({
              singular: "Display your team logo in the corner of the review page",
              dictionary: {
                es: {
                  singular: "Muestre el logotipo de su equipo en la esquina de la página de revisión"
                },
                "de-DE": {
                  singular: "Zeigen Sie Ihr Team-Logo in der Ecke der Review-Seite an"
                },
                "fr-FR": {
                  singular: "Afficher le logo de votre équipe dans le coin de la page d'avis"
                },
                "ja-JP": {
                  singular: "レビューページの隅にチームのロゴを表示します"
                },
                "ko-KR": {
                  singular: "리뷰 페이지의 모서리에 팀 로고 표시"
                },
                "pt-BR": {
                  singular: "Exibir o logotipo da sua equipe no canto da página de revisão"
                },
                "zh-CN": {
                  singular: "在评论页面的角落显示您的队徽"
                }
              }
            }),
            type: "switch",
            showUpsell: _v12,
            upsellName: "review_link_logo",
            isDisabled: _v12
          }, {
            label: (0, _v16.translate)({
              singular: "Dark mode",
              dictionary: {
                es: {
                  singular: "Modo oscuro"
                },
                "de-DE": {
                  singular: "Dunkelmodus"
                },
                "fr-FR": {
                  singular: "Mode foncé"
                },
                "ja-JP": {
                  singular: "ダークモード"
                },
                "ko-KR": {
                  singular: "다크 모드"
                },
                "pt-BR": {
                  singular: "Modo escuro"
                },
                "zh-CN": {
                  singular: "深色模式"
                }
              }
            }),
            name: "isDark",
            type: "switch",
            info: (0, _v16.translate)({
              singular: "Display dark mode for everyone, regardless of system settings",
              dictionary: {
                es: {
                  singular: "Muestre el modo oscuro para todos, independientemente de la configuración del sistema."
                },
                "de-DE": {
                  singular: "Dunkelmodus für alle anzeigen, unabhängig von den Systemeinstellungen"
                },
                "fr-FR": {
                  singular: "Afficher le mode sombre pour tout le monde, indépendamment des paramètres du système"
                },
                "ja-JP": {
                  singular: "システム設定に関係なく全員にダークモードを表示"
                },
                "ko-KR": {
                  singular: "시스템 설정에 관계없이 모든 사용자에게 다크 모드 표시"
                },
                "pt-BR": {
                  singular: "Exibir modo escuro para todos, independentemente das configurações do sistema"
                },
                "zh-CN": {
                  singular: "为所有用户显示深色模式，无论系统设置如何"
                }
              }
            }),
            showUpsell: _v12,
            upsellName: "review_link_dark_mode",
            isDisabled: _v12
          }, {
            label: (0, _v16.translate)({
              singular: "Show other videos after playback",
              dictionary: {
                es: {
                  singular: "Mostrar otros videos después de la reproducción"
                },
                "de-DE": {
                  singular: "Weitere Videos nach der Wiedergabe anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher d'autres vidéos après la lecture"
                },
                "ja-JP": {
                  singular: "再生後に他の動画を表示"
                },
                "ko-KR": {
                  singular: "재생 후 다른 동영상 표시"
                },
                "pt-BR": {
                  singular: "Mostrar outros vídeos após a reprodução"
                },
                "zh-CN": {
                  singular: "在播放结束后显示其他视频"
                }
              }
            }),
            name: "hideEndCards",
            type: "switch",
            info: (0, _v16.translate)({
              singular: "Viewers will see additional videos from your account once the playback ends",
              dictionary: {
                es: {
                  singular: "Los espectadores verán videos adicionales de su cuenta una vez que finalice la reproducción"
                },
                "de-DE": {
                  singular: "Zuschauer sehen nach dem Ende der Wiedergabe zusätzliche Videos aus Ihrem Konto."
                },
                "fr-FR": {
                  singular: "Les spectateurs verront des vidéos supplémentaires provenant de votre compte une fois la lecture terminée"
                },
                "ja-JP": {
                  singular: "再生が終了すると、視聴者にはあなたのアカウントの追加動画が表示されます"
                },
                "ko-KR": {
                  singular: "재생이 끝나면 시청자는 귀하의 계정에 있는 추가 동영상을 보게 됩니다"
                },
                "pt-BR": {
                  singular: "Os espectadores verão vídeos adicionais da sua conta assim que a reprodução terminar"
                },
                "zh-CN": {
                  singular: "播放结束后，观众将看到来自您账户的其他视频"
                }
              }
            }),
            showUpsell: _v12,
            upsellName: "review_link_end_cards",
            isDisabled: _v12
          }]
        }], [_v12, _v14, _v13, _v5, _v6]);
      return (0, _v4.useEffect)(() => {
        _v48.forEach(_v0 => {
          _v0.fields.forEach(_v0 => {
            "name" !== _v0.name && _v0.upsellName && _v0.showUpsell && _v30(_v0.upsellName);
          });
        });
      }, []), (0, _v4.useEffect)(() => {
        _v46 && !_v45 && (_v3(), _v7?.());
      }, [_v46, _v45, _v3, _v7]), (0, _v4.useEffect)(() => {
        if (_v16 && _v0 && _v1) {
          let _v0 = (0, _v27.computeAnalyticsProps)({
            pathname: _v20,
            resourceId: _v0,
            resourceType: _v1,
            location: "Create_Review_Link",
            isPrivate: _v22
          });
          (0, _v25.bpReviewLinkActions)({
            eventName: "vimeo.open_review_link_form",
            analyticsProps: _v0,
            viewer: _v16
          });
        }
      }, [_v20, _v22, _v0, _v1, _v16]), (0, _v4.useEffect)(() => {
        _v43 && !_v42 && (_v18.close(_v19.current), _v44 ? _v19.current = _v18({
          title: (0, _v16.translate)({
            singular: "Unable to update. Try again.",
            dictionary: {
              es: {
                singular: "No se puede actualizar. Inténtelo de nuevo."
              },
              "de-DE": {
                singular: "Aktualisierung nicht möglich. Versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Mise à jour impossible. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "更新できませんでした。もう一度お試しください。"
              },
              "ko-KR": {
                singular: "업데이트할 수 없습니다. 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Não foi possível atualizar. Tente novamente."
              },
              "zh-CN": {
                singular: "无法更新。请重试。"
              }
            }
          }),
          duration: _v27.TOAST_DURATION,
          isClosable: !1,
          variant: "warning"
        }) : _v19.current = _v18({
          title: (0, _v16.translate)({
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
          duration: _v27.TOAST_DURATION,
          isClosable: !1
        }));
      }, [_v44, _v43, _v42]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v5.Box, {
          width: "100%",
          children: [(0, _v1.jsx)(_v8.Flex, {
            width: "100%",
            direction: "column",
            gap: "20px",
            padding: "lg",
            paddingTop: "0px",
            overflowY: "auto",
            maxHeight: _v15 ? (0, _v11.rem)(_v26.REVIEW_LINK_MAX_HEIGHT_FOR_MOBILE) : (0, _v11.rem)(_v26.REVIEW_LINK_MAX_HEIGHT_FOR_DEKSTOP),
            children: _v48.map(_v0 => (0, _v1.jsxs)(_v8.Flex, {
              direction: "column",
              gap: "sm",
              children: [_v0.title && (0, _v1.jsx)(_v10.Text, {
                variant: "heading-xs",
                children: _v0.title
              }), _v0.fields.map(_v0 => (0, _v1.jsx)(_v20.ReviewLinkFormField, {
                value: _v36[_v0.name],
                onChange: _v0 => {
                  _v37(_v0 => ({
                    ..._v0,
                    [_v0.name]: _v0
                  })), _v35(_v0, _v0);
                },
                field: _v0,
                isInvalid: !!_v23[_v0.name],
                errorMessage: _v23[_v0.name],
                maxLength: _v0.maxLength,
                openUpsellModal: () => {
                  _v29(_v0.upsellName || ""), _v32(!0);
                },
                onPresetChange: "expiresOn" === _v0.name ? _v26 : void 0
              }, `review-link-form-${_v0.name}`))]
            }, _v0.title))
          }), (0, _v1.jsx)(_v5.Box, {
            p: "4",
            borderTop: `${(0, _v11.rem)(1)} solid`,
            borderColor: "stroke",
            paddingBottom: "0px",
            children: (0, _v1.jsxs)(_v8.Flex, {
              gap: "3",
              justifyContent: _v17 ? "space-between" : "flex-end",
              alignItems: "center",
              children: [_v17 && (0, _v1.jsx)(_v7.Checkbox, {
                isChecked: _v33,
                isDisabled: _v14,
                onChange: _v0 => _v34(_v0.target.checked),
                children: _v15 ? (0, _v16.translate)({
                  singular: "Set as default",
                  dictionary: {
                    es: {
                      singular: "Usar por defecto"
                    },
                    "de-DE": {
                      singular: "Als Standard setzen"
                    },
                    "fr-FR": {
                      singular: "Mettre par défaut"
                    },
                    "ja-JP": {
                      singular: "既定にする"
                    },
                    "ko-KR": {
                      singular: "기본값 설정"
                    },
                    "pt-BR": {
                      singular: "Usar como padrão"
                    },
                    "zh-CN": {
                      singular: "设为默认"
                    }
                  }
                }) : (0, _v16.translate)({
                  singular: "Set as default settings",
                  dictionary: {
                    es: {
                      singular: "Guardar por defecto"
                    },
                    "de-DE": {
                      singular: "Als Standard festlegen"
                    },
                    "fr-FR": {
                      singular: "Définir par défaut"
                    },
                    "ja-JP": {
                      singular: "既定の設定にする"
                    },
                    "ko-KR": {
                      singular: "기본값으로 설정"
                    },
                    "pt-BR": {
                      singular: "Definir como padrão"
                    },
                    "zh-CN": {
                      singular: "设为默认设置"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v8.Flex, {
                gap: "3",
                children: [(0, _v1.jsx)(_v6.Button, {
                  size: "md",
                  variant: "tertiary",
                  onClick: () => {
                    _v4(), _v7?.();
                  },
                  children: (0, _v16.translate)({
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
                }), (0, _v1.jsx)(_v6.Button, {
                  size: "md",
                  variant: "primary",
                  onClick: () => {
                    let _v0 = {
                      ..._v36
                    };
                    Object.keys(_v0).forEach(_v0 => {
                      "" === _v0[_v0] && (_v0[_v0] = null);
                    }), _v12 && "edit" === _v5 && delete _v0.hideEndCards;
                    let _v1 = !!_v11.enable_review_link_default_settings && _v33;
                    "edit" === _v5 ? ((_v0, _v1) => {
                      if (_v6?.uri) {
                        let _v0 = (0, _v27.reviewIdFromUri)(_v6.uri);
                        _v41({
                          ..._v0,
                          saveAsDefault: _v1,
                          isPermissiveReviewLinks: _v13
                        }, _v0, {
                          ..._v0,
                          uri: _v6.uri
                        });
                      } else _v3();
                    })(_v0, _v1) : _v38({
                      ..._v0,
                      saveAsDefault: _v1,
                      isPermissiveReviewLinks: _v13,
                      openOnCreate: _v10,
                      expirationPreset: _v25
                    });
                  },
                  isDisabled: _v45 && _v46 || _v47,
                  isLoading: _v46 && _v45,
                  children: "edit" === _v5 ? (0, _v16.translate)({
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
                  }) : (0, _v16.translate)({
                    singular: "Create link",
                    dictionary: {
                      es: {
                        singular: "Crear un enlace"
                      },
                      "de-DE": {
                        singular: "Link erstellen"
                      },
                      "fr-FR": {
                        singular: "Créer un lien"
                      },
                      "ja-JP": {
                        singular: "リンクを作成"
                      },
                      "ko-KR": {
                        singular: "링크 생성"
                      },
                      "pt-BR": {
                        singular: "Criar link"
                      },
                      "zh-CN": {
                        singular: "创建链接"
                      }
                    }
                  })
                })]
              })]
            })
          })]
        }), _v31 && (0, _v1.jsx)(_v18.default, {
          apiUrl: _v16?.apiUrl,
          userConfig: {
            jwt: _v16?.jwt,
            userId: _v16?.user?.id
          },
          templateType: "default",
          modalConfig: _v27,
          onClose: () => _v32(!1),
          tracking: _v28
        })]
      });
    };
  _v0.s(["ReviewLinkForm", 0, _v0 => {
    let {
        mode: _v1,
        data: _v2
      } = _v0,
      {
        settings: _v3,
        isLoadingResponse: _v4
      } = (0, _v17.useOrionSettings)(),
      _v5 = _v3.enable_review_link_default_settings && ("create" === _v1 || !_v2),
      [_v6, {
        called: _v7,
        data: _v8,
        loading: _v9,
        error: _v10
      }] = (0, _v15.useGetMePreferencesLazy)();
    (0, _v4.useEffect)(() => {
      _v5 && !_v7 && _v6({
        select: ["reviewLinkDefaults"]
      });
    }, [_v6, _v7, _v5]);
    let _v11 = _v10 || !_v8?.reviewLinkDefaults ? _v29 : _v8.reviewLinkDefaults,
      {
        isRepackagedFree: _v12,
        isLoading: _v13
      } = (0, _v14.useIsRepackagedFree)();
    return _v4 || _v5 && _v9 && !_v10 || _v13 ? (0, _v1.jsx)(_v8.Flex, {
      justify: "center",
      align: "center",
      height: "400px",
      children: (0, _v1.jsx)(_v9.Spinner, {
        size: "lg"
      })
    }) : (0, _v1.jsx)(_v30, {
      ..._v0,
      defaultSettings: _v11,
      isRepackagedFree: _v12
    });
  }]);
}