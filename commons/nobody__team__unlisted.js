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
    _v24 = _v0.i(0);
  let _v25 = ["nobody", "team", "unlisted", "password"],
    _v26 = {
      panel: {
        name: "file_share_panel_allow_download_upgrade_button",
        location: "file_share_panel",
        modalTracking: {
          params: {
            feature: "privacy",
            upsell_name: "privacy_settings_allow_downloads",
            location: "file_share_panel"
          },
          paywallTracking: {
            paywallTrigger: "file_share_settings_allow_downloads_toggle_button",
            paywallLocation: "file_share",
            paywallType: "popup",
            paywallFeature: "privacy"
          }
        }
      },
      modal: {
        name: "file_share_modal_allow_download_upgrade_button",
        location: "file_share_modal",
        modalTracking: {
          params: {
            feature: "privacy",
            upsell_name: "privacy_settings_allow_downloads",
            location: "file_share_modal"
          },
          paywallTracking: {
            paywallTrigger: "file_share_settings_allow_downloads_toggle_button",
            paywallLocation: "file_share",
            paywallType: "popup",
            paywallFeature: "privacy"
          }
        }
      }
    };
  _v0.s(["FileShareSettings", 0, ({
    ownerId: _v0,
    file: _v1,
    onChanged: _v2,
    shareSurface: _v3,
    linkCopiedSource: _v4
  }) => {
    let _v5 = (0, _v22.useViewer)(),
      _v6 = (0, _v9.useToast)(),
      {
        trackPrivacyChanged: _v7
      } = (0, _v19.useViewPrivacyChangeTracking)(),
      {
        trackSharePrivacyDropdownOpened: _v8,
        trackFileLinkCopied: _v9
      } = (0, _v17.useDistributionTracking)(),
      {
        trackFileDownloadPermissionChanged: _v10
      } = (0, _v18.useFileManageTracking)(),
      {
        baseUrl: _v11,
        jwt: _v12,
        xVimeoPage: _v13,
        locale: _v14
      } = (0, _v14.useGctlConfig)(),
      {
        capabilities: _v15
      } = (0, _v12.useCapability)(["canAllowDownloads"], `/users/${_v0}`),
      _v16 = (0, _v2.useMemo)(() => _v25.map(_v0 => ({
        privacy: _v0,
        title: (0, _v24.getPrivacyLabel)(_v0, _v5?.teamUser),
        description: (0, _v20.getFilePrivacyDescription)(_v0),
        icon: (0, _v20.videoPrivacyIcons)("xs")[_v0]?.icon
      })), [_v5?.teamUser]),
      [_v17, _v18] = (0, _v2.useState)("password" === _v1.privacy),
      [_v19, _v20] = (0, _v2.useState)(!1),
      _v21 = (0, _v2.useRef)(null),
      _v22 = (0, _v23.getFileLink)(_v1.publicId),
      _v23 = _v15.canAllowDownloads,
      _v24 = async _v0 => {
        try {
          return await (0, _v13.patchUserFile)({
            where: {
              userId: _v0,
              fileId: _v1.publicId
            },
            select: ["privacy", "password", "allowDownloads"],
            variables: _v0,
            baseUrl: _v11,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v12 ? `jwt ${_v12}` : "",
              "Vimeo-Page": `${_v13}`,
              "Accept-Language": _v14 ?? "en"
            }
          }), _v6({
            title: (0, _v15.translate)({
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
            })
          }), _v2?.(), !0;
        } catch {
          return _v6({
            title: (0, _v15.translate)({
              singular: "Something went wrong",
              dictionary: {
                es: {
                  singular: "Se ha producido un error"
                },
                "de-DE": {
                  singular: "Hier ist etwas schief gelaufen"
                },
                "fr-FR": {
                  singular: "Quelque chose a planté"
                },
                "ja-JP": {
                  singular: "エラーが発生しました"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다"
                },
                "pt-BR": {
                  singular: "Alguma coisa deu errado"
                },
                "zh-CN": {
                  singular: "出错了"
                }
              }
            }),
            variant: "warning"
          }), !1;
        }
      },
      _v25 = _v0 => {
        _v0 !== _v1.privacy && _v7({
          entityType: "file",
          previousPrivacy: _v1.privacy,
          newPrivacy: _v0,
          fileId: _v1.publicId,
          fileOwnerId: String(_v0)
        });
      },
      _v26 = async _v0 => {
        (await _v24({
          privacy: "password",
          password: _v0
        })) && _v25("password");
      },
      _v27 = async _v0 => {
        (await _v24({
          allowDownloads: _v0
        })) && _v10({
          fileId: _v1.publicId,
          allowDownloads: _v0
        });
      };
    return (0, _v2.useEffect)(() => () => {
      null != _v21.current && clearTimeout(_v21.current);
    }, []), (0, _v1.jsxs)(_v4.Flex, {
      flexDirection: "column",
      gap: "2xl",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        flexDirection: "column",
        gap: "md",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          flexDirection: "column",
          gap: "xs",
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: (0, _v15.translate)({
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
            })
          }), (0, _v1.jsx)(_v11.PrivacyDropdown, {
            activePrivacy: _v1.privacy,
            onSelect: _v0 => {
              "password" === _v0 ? _v18(!0) : (_v18(!1), _v24({
                privacy: _v0
              }).then(_v0 => {
                _v0 && _v25(_v0), _v0 || "password" !== _v1.privacy || _v18(!0);
              }));
            },
            onMenuToggle: _v0 => {
              _v0 && _v8({
                clipId: null,
                fileId: _v1.publicId,
                shareSurface: _v3
              });
            },
            privacyOptions: _v16,
            isVideoPrivacy: !0,
            variant: "outlined"
          })]
        }), _v17 && (0, _v1.jsx)(_v10.PasswordInput, {
          initialValue: "password" === _v1.privacy ? _v1.password ?? "" : "",
          onSave: _v26
        }), (0, _v1.jsxs)(_v4.Flex, {
          flexDirection: "column",
          gap: "xs",
          children: [(0, _v1.jsx)(_v8.Text, {
            my: (0, _v6.rem)(6),
            variant: "heading-xs",
            children: (0, _v15.translate)({
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
            })
          }), (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            gap: "xs",
            h: (0, _v6.rem)(32),
            children: [(0, _v1.jsx)(_v8.Text, {
              flexGrow: 1,
              variant: "body-md",
              children: (0, _v15.translate)({
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
              })
            }), !0 !== _v23 && (0, _v1.jsx)(_v16.UpgradeBadge, {
              ..._v26[_v3],
              modalConfig: {
                headerText: (0, _v15.translate)({
                  singular: "Upgrade to allow downloads",
                  dictionary: {
                    es: {
                      singular: "Actualice para permitir descargas"
                    },
                    "de-DE": {
                      singular: "Upgrade vornehmen, um Downloads zu ermöglichen"
                    },
                    "fr-FR": {
                      singular: "Mettez à niveau pour autoriser les téléchargements"
                    },
                    "ja-JP": {
                      singular: "アップグレードしてダウンロード可能に"
                    },
                    "ko-KR": {
                      singular: "다운로드를 허용하려면 업그레이드하세요."
                    },
                    "pt-BR": {
                      singular: "Faça upgrade para permitir downloads"
                    },
                    "zh-CN": {
                      singular: "升级以允许下载功能"
                    }
                  }
                }),
                subHeaderText: (0, _v15.translate)({
                  singular: "Get full access to robust privacy and engagement tools",
                  dictionary: {
                    es: {
                      singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                    },
                    "de-DE": {
                      singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                    },
                    "fr-FR": {
                      singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                    },
                    "ja-JP": {
                      singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                    },
                    "ko-KR": {
                      singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                    },
                    "pt-BR": {
                      singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                    },
                    "zh-CN": {
                      singular: "获取对强大的隐私和参与工具的完整访问权限"
                    }
                  }
                })
              },
              children: (0, _v15.translate)({
                singular: "Upgrade",
                dictionary: {
                  es: {
                    singular: "Actualizar"
                  },
                  "de-DE": {
                    singular: "Upgraden"
                  },
                  "fr-FR": {
                    singular: "Mettre à niveau"
                  },
                  "ja-JP": {
                    singular: "アップグレード"
                  },
                  "ko-KR": {
                    singular: "업그레이드"
                  },
                  "zh-CN": {
                    singular: "升级"
                  }
                }
              })
            }), (0, _v1.jsx)(_v7.Switch, {
              isChecked: _v1.allowDownloads,
              isDisabled: !0 !== _v23,
              onChange: _v0 => void _v27(_v0.target.checked),
              size: "md"
            })]
          })]
        })]
      }), (0, _v1.jsxs)(_v4.Flex, {
        flexDirection: "column",
        gap: "sm",
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          children: (0, _v15.translate)({
            singular: "Link",
            dictionary: {
              es: {
                singular: "Vínculo"
              },
              "fr-FR": {
                singular: "Lien"
              },
              "ja-JP": {
                singular: "リンク"
              },
              "ko-KR": {
                singular: "링크"
              },
              "zh-CN": {
                singular: "链接"
              }
            }
          })
        }), (0, _v1.jsx)(_v5.Input, {
          id: "file-share-link",
          isReadOnly: !0,
          value: _v22,
          variant: "outlined"
        }), (0, _v1.jsx)(_v3.Button, {
          variant: "primary",
          onClick: () => {
            (0, _v21.default)(_v22) && (null != _v4 && _v9({
              fileId: _v1.publicId,
              source: _v4
            }), _v6({
              title: (0, _v15.translate)({
                singular: "Link copied",
                dictionary: {
                  es: {
                    singular: "Vínculo copiado"
                  },
                  "de-DE": {
                    singular: "Link kopiert"
                  },
                  "fr-FR": {
                    singular: "Lien copié"
                  },
                  "ja-JP": {
                    singular: "リンクがコピーされました"
                  },
                  "ko-KR": {
                    singular: "링크가 복사됐습니다"
                  },
                  "pt-BR": {
                    singular: "Link copiado"
                  },
                  "zh-CN": {
                    singular: "链接已复制"
                  }
                }
              })
            }), _v20(!0), null != _v21.current && clearTimeout(_v21.current), _v21.current = setTimeout(() => _v20(!1), 0));
          },
          children: _v19 ? (0, _v15.translate)({
            singular: "Copied!",
            dictionary: {
              es: {
                singular: "Copiado"
              },
              "de-DE": {
                singular: "Kopiert!"
              },
              "fr-FR": {
                singular: "Copié !"
              },
              "ja-JP": {
                singular: "コピー完了！"
              },
              "ko-KR": {
                singular: "복사 완료!"
              },
              "pt-BR": {
                singular: "Copiado!"
              },
              "zh-CN": {
                singular: "已复制！"
              }
            }
          }) : (0, _v15.translate)({
            singular: "Copy link",
            dictionary: {
              es: {
                singular: "Copiar vínculo"
              },
              "de-DE": {
                singular: "Link kopieren"
              },
              "fr-FR": {
                singular: "Copier le lien"
              },
              "ja-JP": {
                singular: "リンクをコピー"
              },
              "ko-KR": {
                singular: "링크 복사"
              },
              "pt-BR": {
                singular: "Copiar link"
              },
              "zh-CN": {
                singular: "复制链接"
              }
            }
          })
        })]
      })]
    });
  }]);
}