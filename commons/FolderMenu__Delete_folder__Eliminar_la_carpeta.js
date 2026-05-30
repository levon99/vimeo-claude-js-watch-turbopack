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
    _v29 = _v0.i(0);
  let _v30 = (0, _v4.rem)(_v26.ACTION_ICON_BOX_SIZE);
  _v0.s(["FolderMenu", 0, ({
    size: _v0,
    disabled: _v1,
    onClick: _v2,
    canEdit: _v3,
    canShare: _v4,
    onShare: _v5,
    canDelete: _v6,
    onDelete: _v7,
    canMove: _v8,
    onMove: _v9,
    canBulkPrivacyChange: _v10,
    onBulkPrivacyChange: _v11,
    onCopyLink: _v12,
    folderLink: _v13,
    canEditFolderSettings: _v14,
    onFolderSettings: _v15,
    onFolderDefaults: _v16,
    analyticsPageLink: _v17,
    onClickAnalyticsLink: _v18,
    hasFolderDefaultsUpsell: _v19,
    hasShareUpsell: _v20,
    hasSlackIntegration: _v21,
    isConnectedToSlack: _v22,
    onSlackIntegration: _v23,
    deleteIcon: _v24 = (0, _v1.jsx)(_v13.TrashBin, {
      boxSize: _v30
    }),
    deleteOptionLabel: _v25 = (0, _v19.translate)({
      singular: "Delete folder",
      dictionary: {
        es: {
          singular: "Eliminar la carpeta"
        },
        "de-DE": {
          singular: "Ordner löschen"
        },
        "fr-FR": {
          singular: "Supprimer dossier"
        },
        "ja-JP": {
          singular: "フォルダーを削除"
        },
        "ko-KR": {
          singular: "폴더 삭제"
        },
        "pt-BR": {
          singular: "Excluir pasta"
        },
        "zh-CN": {
          singular: "删除文件夹"
        }
      }
    }),
    canStar: _v26 = !0,
    onStarClick: _v27,
    starIcon: _v28 = (0, _v1.jsx)(_v12.Star, {
      boxSize: _v30
    }),
    starIconLabel: _v29,
    placement: _v30,
    usePortal: _v31,
    zIndex: _v32,
    onRename: _v33,
    handleTranslateVideo: _v34,
    canTranslateVideos: _v35,
    canCreateReviewLink: _v36,
    onCreateReviewLink: _v37,
    canCopyReviewPageLink: _v38,
    reviewPageLink: _v39,
    onCopyReviewPageLink: _v40,
    canManageReviewLinks: _v41,
    onManageReviewLinks: _v42,
    hasProhibitMultipleReviewLinks: _v43,
    canAddToShowcase: _v44,
    showAddToShowcase: _v45,
    onAddToShowcase: _v46
  }) => {
    let {
        settings: _v47
      } = (0, _v22.useOrionSettings)(),
      _v48 = (0, _v18.useIsMobile)(),
      _v49 = _v22 ? (0, _v19.translate)({
        singular: "Slack settings",
        dictionary: {
          es: {
            singular: "Ajustes de Slack"
          },
          "de-DE": {
            singular: "Slack-Einstellungen"
          },
          "fr-FR": {
            singular: "Paramètres de Slack"
          },
          "ja-JP": {
            singular: "Slackの設定"
          },
          "ko-KR": {
            singular: "Slack 설정"
          },
          "pt-BR": {
            singular: "Configurações do Slack"
          },
          "zh-CN": {
            singular: "Slack 设置"
          }
        }
      }) : (0, _v19.translate)({
        singular: "Connect to Slack",
        dictionary: {
          es: {
            singular: "Conectar a Slack"
          },
          "de-DE": {
            singular: "Mit Slack verbinden"
          },
          "fr-FR": {
            singular: "Connectez-vous à Slack"
          },
          "ja-JP": {
            singular: "Slack に接続"
          },
          "ko-KR": {
            singular: "Slack에 연결"
          },
          "pt-BR": {
            singular: "Conectar ao Slack"
          },
          "zh-CN": {
            singular: "连接到 Slack"
          }
        }
      }),
      _v50 = _v4 || _v13 || _v3 && _v17 || _v8 || _v21 || _v14 || _v26 || _v6 || _v45,
      _v51 = [(0, _v25.createSection)([_v4 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v11.Share, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Share...",
          dictionary: {
            es: {
              singular: "Compartir..."
            },
            "de-DE": {
              singular: "Teilen …"
            },
            "fr-FR": {
              singular: "Partager..."
            },
            "ja-JP": {
              singular: "共有..."
            },
            "ko-KR": {
              singular: "공유..."
            },
            "pt-BR": {
              singular: "Compartilhar..."
            },
            "zh-CN": {
              singular: "分享..."
            }
          }
        }),
        onClick: _v5,
        badge: _v20 && (0, _v1.jsx)(_v21.UpgradeBadge, {
          noMargin: !0,
          name: "folder_menu_share_upgrade_button",
          location: "folder_menu"
        })
      }), _v13 && (0, _v1.jsx)(_v29.CopyAction, {
        label: (0, _v19.translate)({
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
        }),
        content: _v13,
        onClick: _v12
      }), ...(_v47.enable_review_link_submenu ? [!_v48 && _v3 && !_v43 && (_v36 || _v38 || _v41) && (0, _v1.jsxs)(_v27.MenuAction, {
        icon: (0, _v1.jsx)(_v26.REVIEW_LINK_ICON, {
          boxSize: _v30
        }),
        label: _v41 ? _v26.REVIEW_LINKS_COPY : _v26.REVIEW_LINK_COPY,
        children: [_v38 && (_v39 ? (0, _v1.jsx)(_v29.CopyAction, {
          label: _v26.COPY_REVIEW_LINK_COPY,
          content: _v39,
          onClick: _v40
        }) : (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v26.COPY_REVIEW_LINK_ICON, {
            boxSize: _v30
          }),
          label: _v26.COPY_REVIEW_LINK_COPY,
          onClick: _v40
        })), _v41 && (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v26.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v30
          }),
          label: _v26.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v42
        }), (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v26.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v30
          }),
          label: _v26.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v37,
          isDisabled: !_v36
        }), _v47.enable_review_page_shortcut_from_main && _v41 && (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v16.ReviewCheck, {
            boxSize: _v30
          }),
          label: (0, _v19.translate)({
            singular: "Review pages",
            dictionary: {
              es: {
                singular: "Páginas de revisión"
              },
              "de-DE": {
                singular: "Review-Seiten"
              },
              "fr-FR": {
                singular: "Pages de relecture"
              },
              "ja-JP": {
                singular: "レビューページ"
              },
              "ko-KR": {
                singular: "검토 페이지들"
              },
              "pt-BR": {
                singular: "Páginas de revisão"
              },
              "zh-CN": {
                singular: "审阅页面"
              }
            }
          }),
          onClick: _v42
        })]
      }), _v48 && _v3 && !_v43 && _v38 && (_v39 ? (0, _v1.jsx)(_v29.CopyAction, {
        label: _v26.COPY_REVIEW_LINK_COPY,
        content: _v39,
        onClick: _v40
      }) : (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v26.COPY_REVIEW_LINK_ICON, {
          boxSize: _v30
        }),
        label: _v26.COPY_REVIEW_LINK_COPY,
        onClick: _v40
      })), _v48 && _v3 && !_v43 && _v41 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v26.MANAGE_REVIEW_LINKS_ICON, {
          boxSize: _v30
        }),
        label: _v26.MANAGE_REVIEW_LINKS_COPY,
        onClick: _v42
      }), _v48 && _v3 && !_v43 && (_v36 || _v38 || _v41) && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v26.CREATE_NEW_REVIEW_LINK_ICON, {
          boxSize: _v30
        }),
        label: _v26.CREATE_NEW_REVIEW_LINK_COPY,
        onClick: _v37,
        isDisabled: !_v36
      }), _v48 && _v47.enable_review_page_shortcut_from_main && _v3 && !_v43 && _v41 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v16.ReviewCheck, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Review pages",
          dictionary: {
            es: {
              singular: "Páginas de revisión"
            },
            "de-DE": {
              singular: "Review-Seiten"
            },
            "fr-FR": {
              singular: "Pages de relecture"
            },
            "ja-JP": {
              singular: "レビューページ"
            },
            "ko-KR": {
              singular: "검토 페이지들"
            },
            "pt-BR": {
              singular: "Páginas de revisão"
            },
            "zh-CN": {
              singular: "审阅页面"
            }
          }
        }),
        onClick: _v42
      })] : [_v3 && !_v43 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v15.Link, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Create review links",
          dictionary: {
            es: {
              singular: "Crear enlaces de revisión"
            },
            "de-DE": {
              singular: "Review-Links erstellen"
            },
            "fr-FR": {
              singular: "Créez des liens de révision"
            },
            "ja-JP": {
              singular: "レビューリンクを作成"
            },
            "ko-KR": {
              singular: "리뷰 링크 생성하기"
            },
            "pt-BR": {
              singular: "Criar links de revisão"
            },
            "zh-CN": {
              singular: "创建评论链接"
            }
          }
        }),
        onClick: _v42
      })])]), (0, _v25.createSection)([_v3 && _v17 && !_v48 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v5.Analytics, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Analytics",
          dictionary: {
            es: {
              singular: "Análisis"
            },
            "de-DE": {
              singular: "Analytik"
            },
            "fr-FR": {
              singular: "Analyses"
            },
            "ja-JP": {
              singular: "分析"
            },
            "ko-KR": {
              singular: "애널리틱스"
            },
            "pt-BR": {
              singular: "Análises"
            },
            "zh-CN": {
              singular: "分析"
            }
          }
        }),
        href: _v17,
        onClick: _v18
      }), _v10 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v7.Eye, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Override privacy settings",
          dictionary: {
            es: {
              singular: "Anular la configuración de privacidad"
            },
            "de-DE": {
              singular: "Datenschutzeinstellungen überschreiben"
            },
            "fr-FR": {
              singular: "Remplacer les paramètres de confidentialité"
            },
            "ja-JP": {
              singular: "プライバシー設定を上書きする"
            },
            "ko-KR": {
              singular: "개인정보 설정 재정의"
            },
            "pt-BR": {
              singular: "Substituir configurações de privacidade"
            },
            "zh-CN": {
              singular: "覆盖隐私设置"
            }
          }
        }),
        onClick: _v11
      })]), (0, _v25.createSection)([_v45 && _v46 && (0, _v1.jsx)(_v28.ActionWithTooltip, {
        actionCopy: (0, _v19.translate)({
          singular: "Add to showcase",
          dictionary: {
            es: {
              singular: "Agregar a presentación"
            },
            "de-DE": {
              singular: "Zu Präsentation hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter à la présentation"
            },
            "ja-JP": {
              singular: "ショーケースに追加"
            },
            "ko-KR": {
              singular: "쇼케이스에 추가"
            },
            "pt-BR": {
              singular: "Adicionar à vitrine"
            },
            "zh-CN": {
              singular: "添加到橱窗"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v17._3GridLeftLayout, {
          boxSize: _v30
        }),
        onClick: _v46,
        showTooltip: !_v44,
        tooltipCopy: (0, _v19.translate)("Folders added to a Showcase must contain between 1 and 100 items.")
      }), _v8 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v9.FolderOpen, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Move folder...",
          dictionary: {
            es: {
              singular: "Mover carpeta..."
            },
            "de-DE": {
              singular: "Ordner verschieben …"
            },
            "fr-FR": {
              singular: "Déplacer le dossier..."
            },
            "ja-JP": {
              singular: "フォルダーを移動..."
            },
            "ko-KR": {
              singular: "폴더 이동..."
            },
            "pt-BR": {
              singular: "Mover pasta..."
            },
            "zh-CN": {
              singular: "移动文件夹..."
            }
          }
        }),
        onClick: _v9
      }), _v14 && !!_v33 && _v47.enable_rename_folder && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v8.RenamePencil, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Rename",
          dictionary: {
            es: {
              singular: "Cambiar de nombre"
            },
            "de-DE": {
              singular: "Neu benennen"
            },
            "fr-FR": {
              singular: "Renommer"
            },
            "ja-JP": {
              singular: "名前を変更"
            },
            "ko-KR": {
              singular: "이름 변경"
            },
            "pt-BR": {
              singular: "Renomear"
            },
            "zh-CN": {
              singular: "重新命名"
            }
          }
        }),
        onClick: _v33
      }), _v14 && (0, _v1.jsx)(_v23.FeatureFlag, {
        feature: "change_color",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v6.ColorPicker, {
            boxSize: _v30
          }),
          label: (0, _v19.translate)({
            singular: "Change color...",
            dictionary: {
              es: {
                singular: "Cambiar el color..."
              },
              "de-DE": {
                singular: "Farbe ändern."
              },
              "fr-FR": {
                singular: "Changez la couleur..."
              },
              "ja-JP": {
                singular: "色を変更する..."
              },
              "ko-KR": {
                singular: "색상 변경..."
              },
              "pt-BR": {
                singular: "Alterar cor..."
              },
              "zh-CN": {
                singular: "更改颜色…"
              }
            }
          }),
          onClick: _v15
        })
      }), _v14 && (0, _v1.jsx)(_v23.FeatureFlag, {
        feature: "folder_defaults",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v10.SettingsGear, {
            boxSize: _v30
          }),
          label: (0, _v19.translate)({
            singular: "Folder defaults",
            dictionary: {
              es: {
                singular: "Valores predeterminados de carpetas"
              },
              "de-DE": {
                singular: "Standardeinstellungen für Ordner"
              },
              "fr-FR": {
                singular: "Paramètres par défaut des dossiers"
              },
              "ja-JP": {
                singular: "フォルダーのデフォルト設定"
              },
              "ko-KR": {
                singular: "폴더 기본 설정"
              },
              "pt-BR": {
                singular: "Padrões da pasta"
              },
              "zh-CN": {
                singular: "文件夹默认设置"
              }
            }
          }),
          onClick: _v16,
          badge: _v19 && (0, _v1.jsx)(_v21.UpgradeBadge, {
            noMargin: !0,
            name: "folder_menu_defaults_upgrade_button",
            location: "folder_menu"
          })
        })
      }), _v21 && !_v48 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v3.Box, {
          sx: {
            "*": {
              fill: "text-primary"
            }
          },
          boxSize: _v30,
          children: (0, _v1.jsx)(_v20.SlackMark, {
            style: {
              transform: "scale(0.9)"
            }
          })
        }),
        label: _v49,
        onClick: _v23
      }), _v14 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v10.SettingsGear, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Folder settings",
          dictionary: {
            es: {
              singular: "Configuración de la carpeta"
            },
            "de-DE": {
              singular: "Ordnereinstellungen"
            },
            "fr-FR": {
              singular: "Paramètres du dossier"
            },
            "ja-JP": {
              singular: "フォルダー設定"
            },
            "ko-KR": {
              singular: "폴더 설정"
            },
            "pt-BR": {
              singular: "Configurações da pasta"
            },
            "zh-CN": {
              singular: "文件夹设置"
            }
          }
        }),
        onClick: _v15
      }), _v35 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v14.AiSparkles, {
          boxSize: _v30
        }),
        label: (0, _v19.translate)({
          singular: "Translate folder",
          dictionary: {
            es: {
              singular: "Traducir carpeta"
            },
            "de-DE": {
              singular: "Ordner übersetzen"
            },
            "fr-FR": {
              singular: "Traduire le dossier"
            },
            "ja-JP": {
              singular: "フォルダーを翻訳"
            },
            "ko-KR": {
              singular: "폴더 번역"
            },
            "pt-BR": {
              singular: "Traduzir pasta"
            },
            "zh-CN": {
              singular: "翻译文件夹"
            }
          }
        }),
        onClick: _v34
      }), _v26 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v2.cloneElement)(_v28, {
          style: {
            width: _v30,
            height: _v30
          }
        }),
        label: _v29 || "",
        onClick: _v27
      })]), (0, _v25.createSection)([_v6 && (0, _v1.jsx)(_v27.Action, {
        icon: _v24,
        label: _v25,
        onClick: _v7
      })])].filter(_v0 => !!_v0.length);
    return _v50 ? (0, _v1.jsx)(_v24.ActionsMenu, {
      placement: _v30,
      usePortal: _v31,
      onClick: _v2,
      disabled: _v1,
      size: _v0,
      zIndex: _v32,
      children: _v51.map((_v0, _v1) => (0, _v1.jsx)(_v25.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  }]);
}