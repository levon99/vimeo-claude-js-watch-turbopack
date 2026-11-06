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
    _v35 = _v0.i(0);
  let _v36 = (0, _v5.rem)(_v32.ACTION_ICON_BOX_SIZE);
  _v0.s(["FolderMenu", 0, ({
    size: _v0,
    disabled: _v1,
    onClick: _v2,
    onOpenChange: _v3,
    canEdit: _v4,
    canShare: _v5,
    onShare: _v6,
    canDelete: _v7,
    onDelete: _v8,
    canMove: _v9,
    onMove: _v10,
    canBulkPrivacyChange: _v11,
    onBulkPrivacyChange: _v12,
    onCopyLink: _v13,
    onCopyLinkAsync: _v14,
    folderLink: _v15,
    canEditFolderSettings: _v16,
    onFolderSettings: _v17,
    onFolderDefaults: _v18,
    analyticsPageLink: _v19,
    onClickAnalyticsLink: _v20,
    hasFolderDefaultsUpsell: _v21,
    hasShareUpsell: _v22,
    hasSlackIntegration: _v23,
    isConnectedToSlack: _v24,
    onSlackIntegration: _v25,
    deleteIcon: _v26 = (0, _v1.jsx)(_v15.TrashBin, {
      boxSize: _v36
    }),
    deleteOptionLabel: _v27 = (0, _v25.translate)({
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
    canStar: _v28 = !0,
    onStarClick: _v29,
    starIcon: _v30 = (0, _v1.jsx)(_v14.Star, {
      boxSize: _v36
    }),
    starIconLabel: _v31,
    placement: _v32,
    usePortal: _v33,
    zIndex: _v34,
    onRename: _v35,
    handleTranslateVideo: _v36,
    canTranslateVideos: _v37,
    canCreateReviewLink: _v38,
    onCreateReviewLink: _v39,
    canCopyReviewPageLink: _v40,
    reviewPageLink: _v41,
    onCopyReviewPageLink: _v42,
    canManageReviewLinks: _v43,
    onManageReviewLinks: _v44,
    hasProhibitMultipleReviewLinks: _v45,
    canAddToShowcase: _v46,
    showAddToShowcase: _v47,
    onAddToShowcase: _v48
  }) => {
    let _v49 = (0, _v27.useOrionSettingsFields)(["enable_review_link_submenu", "enable_rename_folder", "enable_folder_defaults_intro_popover"]),
      _v50 = (0, _v24.useIsMobile)(),
      _v51 = !_v50,
      _v52 = (0, _v29.useViewer)(),
      {
        capabilities: _v53
      } = (0, _v23.useCapability)(["folderUploadPresets"], _v52?.teamUser?.ownerId ?? _v52?.user?.id),
      _v54 = !0 === _v53.folderUploadPresets,
      _v55 = _v54 && _v49.enable_folder_defaults_intro_popover && (0, _v1.jsx)(_v3.Badge, {
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v6.Text, {
          color: "text-primary",
          variant: "heading-2xs",
          children: (0, _v25.translate)({
            singular: "New",
            dictionary: {
              es: {
                singular: "Nuevo"
              },
              "de-DE": {
                singular: "Neu"
              },
              "fr-FR": {
                singular: "Nouveau"
              },
              "ja-JP": {
                singular: "新規作成"
              },
              "ko-KR": {
                singular: "신규"
              },
              "pt-BR": {
                singular: "Novo"
              },
              "zh-CN": {
                singular: "新"
              }
            }
          })
        })
      }),
      _v56 = _v4 && !_v45 && (_v38 || _v40 || _v43),
      _v57 = {
        share: _v5 ? {
          icon: (0, _v1.jsx)(_v13.Share, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v6,
          badge: _v22 && (0, _v1.jsx)(_v26.UpgradeBadge, {
            noMargin: !0,
            name: "folder_menu_share_upgrade_button",
            location: "folder_menu"
          })
        } : void 0,
        copyLink: _v15 || _v14 ? {
          content: _v15 ?? "",
          label: (0, _v25.translate)({
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
          onClick: _v13,
          onCopyAsync: _v14
        } : void 0,
        reviewLinkSubmenu: _v56 && _v49.enable_review_link_submenu ? {
          icon: (0, _v1.jsx)(_v32.REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v43 ? _v32.REVIEW_LINKS_COPY : _v32.REVIEW_LINK_COPY
        } : void 0,
        copyReviewLink: _v40 ? {
          content: _v41,
          icon: (0, _v1.jsx)(_v32.COPY_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v32.COPY_REVIEW_LINK_COPY,
          onClick: _v42
        } : void 0,
        manageReviewLinks: _v43 ? {
          icon: (0, _v1.jsx)(_v32.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v32.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v44
        } : void 0,
        createReviewLink: _v56 ? {
          icon: (0, _v1.jsx)(_v32.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v32.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v39,
          isDisabled: !_v38
        } : void 0,
        reviewPages: _v43 ? {
          icon: (0, _v1.jsx)(_v20.ReviewCheck, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v44
        } : void 0,
        createReviewLinksLegacy: _v49.enable_review_link_submenu || !_v4 || _v45 ? void 0 : {
          icon: (0, _v1.jsx)(_v17.Link, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v44
        },
        analytics: _v4 && _v19 && !_v50 ? {
          icon: (0, _v1.jsx)(_v7.Analytics, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          href: _v19,
          onClick: _v20
        } : void 0,
        bulkPrivacy: _v11 ? {
          icon: (0, _v1.jsx)(_v9.Eye, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v12
        } : void 0,
        addToShowcase: _v47 && _v48 ? {
          icon: (0, _v1.jsx)(_v21._3GridLeftLayout, {
            boxSize: _v36
          }),
          actionCopy: (0, _v25.translate)({
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
          onClick: _v48,
          showTooltip: !_v46,
          tooltipCopy: _v46 ? void 0 : (0, _v25.translate)("Folders added to a Showcase must contain between 1 and 100 items.")
        } : void 0,
        move: _v9 ? {
          icon: (0, _v1.jsx)(_v11.FolderOpen, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v10
        } : void 0,
        rename: _v16 && _v35 && _v49.enable_rename_folder ? {
          icon: (0, _v1.jsx)(_v10.RenamePencil, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v35
        } : void 0,
        changeColor: _v16 ? {
          icon: (0, _v1.jsx)(_v8.ColorPicker, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v17
        } : void 0,
        folderDefaults: _v16 ? {
          icon: (0, _v1.jsx)(_v12.SettingsGear, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v18,
          badge: _v21 ? (0, _v1.jsx)(_v26.UpgradeBadge, {
            noMargin: !0,
            name: "folder_menu_defaults_upgrade_button",
            location: "folder_menu"
          }) : _v55
        } : void 0,
        folderStyle: _v16 ? {
          icon: (0, _v1.jsx)(_v18.Palette, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
            singular: "Folder style",
            dictionary: {
              es: {
                singular: "Estilo de carpeta"
              },
              "de-DE": {
                singular: "Ordnerstil"
              },
              "fr-FR": {
                singular: "Style du dossier"
              },
              "ja-JP": {
                singular: "フォルダスタイル"
              },
              "ko-KR": {
                singular: "폴더 스타일"
              },
              "pt-BR": {
                singular: "Estilo da pasta"
              },
              "zh-CN": {
                singular: "文件夹样式"
              }
            }
          }),
          onClick: _v17
        } : void 0,
        slack: _v23 && !_v50 ? {
          icon: (0, _v1.jsx)(_v4.Box, {
            sx: {
              "*": {
                fill: "text-primary"
              }
            },
            boxSize: _v36,
            children: (0, _v1.jsx)(_v22.Slack, {
              style: {
                transform: "scale(0.9)"
              }
            })
          }),
          label: _v24 ? (0, _v25.translate)({
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
          }) : (0, _v25.translate)({
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
          onClick: _v25
        } : void 0,
        folderSettings: _v16 ? {
          icon: (0, _v1.jsx)(_v12.SettingsGear, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v17
        } : void 0,
        translate: _v37 ? {
          icon: (0, _v1.jsx)(_v16.AiSparkles, {
            boxSize: _v36
          }),
          label: (0, _v25.translate)({
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
          onClick: _v36
        } : void 0,
        star: _v28 ? {
          icon: (0, _v2.cloneElement)(_v30, {
            style: {
              width: _v36,
              height: _v36
            }
          }),
          label: _v31 || "",
          onClick: _v29
        } : void 0,
        delete: _v7 ? {
          icon: _v26,
          label: _v27,
          onClick: _v8
        } : void 0
      };
    if (!(_v5 || _v15 || _v14 || _v4 && _v19 || _v9 || _v23 || _v16 || _v28 || _v7 || _v47)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v58 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v57.copyReviewLink && (_v41 ? (0, _v1.jsx)(_v35.CopyAction, {
          ..._v57.copyReviewLink,
          content: _v41
        }) : (0, _v1.jsx)(_v33.Action, {
          ..._v57.copyReviewLink
        })), _v57.manageReviewLinks && (0, _v1.jsx)(_v33.Action, {
          ..._v57.manageReviewLinks
        }), _v57.createReviewLink && (0, _v1.jsx)(_v33.Action, {
          ..._v57.createReviewLink
        }), _v57.reviewPages && (0, _v1.jsx)(_v33.Action, {
          ..._v57.reviewPages
        })]
      }),
      _v59 = [_v57.share && (0, _v1.jsx)(_v33.Action, {
        ..._v57.share
      }, "share"), _v57.copyLink && (0, _v1.jsx)(_v35.CopyAction, {
        ..._v57.copyLink
      }, "copyLink"), _v57.reviewLinkSubmenu && (_v50 ? (0, _v1.jsx)(_v2.default.Fragment, {
        children: _v58
      }, "reviewLinkSubmenu") : (0, _v1.jsx)(_v33.MenuAction, {
        ..._v57.reviewLinkSubmenu,
        children: _v58
      }, "reviewLinkSubmenu")), _v57.createReviewLinksLegacy && (0, _v1.jsx)(_v33.Action, {
        ..._v57.createReviewLinksLegacy
      }, "createReviewLinksLegacy")],
      _v60 = _v51 ? [_v57.analytics && (0, _v1.jsx)(_v33.Action, {
        ..._v57.analytics
      }, "analytics"), _v57.translate && (0, _v1.jsx)(_v33.Action, {
        ..._v57.translate
      }, "translate")] : [_v57.analytics && (0, _v1.jsx)(_v33.Action, {
        ..._v57.analytics
      }, "analytics"), _v57.bulkPrivacy && (0, _v1.jsx)(_v33.Action, {
        ..._v57.bulkPrivacy
      }, "bulkPrivacy")],
      _v61 = _v57.folderDefaults && (_v54 ? (0, _v1.jsx)(_v33.Action, {
        ..._v57.folderDefaults
      }) : (0, _v1.jsx)(_v28.FeatureFlag, {
        feature: "folder_defaults",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v33.Action, {
          ..._v57.folderDefaults
        })
      })),
      _v62 = [[_v57.rename && (0, _v1.jsx)(_v33.Action, {
        ..._v57.rename
      }, "rename"), _v57.folderStyle && (0, _v1.jsx)(_v33.Action, {
        ..._v57.folderStyle
      }, "folderStyle")]].map(_v31.createSection).filter(_v0 => !!_v0.length),
      _v63 = [[_v57.move && (0, _v1.jsx)(_v33.Action, {
        ..._v57.move
      }, "move"), _v57.addToShowcase && (0, _v1.jsx)(_v34.ActionWithTooltip, {
        ..._v57.addToShowcase
      }, "addToShowcase"), _v57.star && (0, _v1.jsx)(_v33.Action, {
        ..._v57.star
      }, "star")]].map(_v31.createSection).filter(_v0 => !!_v0.length),
      _v64 = [[_v61, _v57.bulkPrivacy && (0, _v1.jsx)(_v33.Action, {
        ..._v57.bulkPrivacy
      }, "bulkPrivacy"), _v57.slack && (0, _v1.jsx)(_v33.Action, {
        ..._v57.slack
      }, "slack")]].map(_v31.createSection).filter(_v0 => !!_v0.length),
      _v65 = [_v59, _v60, _v51 ? [_v62.length > 0 && (0, _v1.jsx)(_v33.MenuAction, {
        icon: (0, _v1.jsx)(_v19.EditPencil, {
          boxSize: _v36
        }),
        label: (0, _v25.translate)({
          singular: "Edit folder",
          dictionary: {
            es: {
              singular: "Editar carpeta"
            },
            "de-DE": {
              singular: "Ordner bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier le dossier"
            },
            "ja-JP": {
              singular: "フォルダを編集"
            },
            "ko-KR": {
              singular: "폴더 편집"
            },
            "pt-BR": {
              singular: "Editar pasta"
            },
            "zh-CN": {
              singular: "编辑文件夹"
            }
          }
        }),
        children: _v62.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "editFolder"), _v63.length > 0 && (0, _v1.jsx)(_v33.MenuAction, {
        icon: (0, _v1.jsx)(_v11.FolderOpen, {
          boxSize: _v36
        }),
        label: (0, _v25.translate)({
          singular: "Organize",
          dictionary: {
            es: {
              singular: "Organizar"
            },
            "de-DE": {
              singular: "Organisieren"
            },
            "fr-FR": {
              singular: "Organiser"
            },
            "ja-JP": {
              singular: "整理する"
            },
            "ko-KR": {
              singular: "정리"
            },
            "pt-BR": {
              singular: "Organizar"
            },
            "zh-CN": {
              singular: "整理"
            }
          }
        }),
        children: _v63.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "organize"), _v64.length > 0 && (0, _v1.jsx)(_v33.MenuAction, {
        icon: (0, _v1.jsx)(_v12.SettingsGear, {
          boxSize: _v36
        }),
        label: (0, _v25.translate)({
          singular: "Settings",
          dictionary: {
            es: {
              singular: "Configuración"
            },
            "de-DE": {
              singular: "Einstellungen"
            },
            "fr-FR": {
              singular: "Paramètres"
            },
            "ja-JP": {
              singular: "設定"
            },
            "ko-KR": {
              singular: "설정"
            },
            "pt-BR": {
              singular: "Configurações"
            },
            "zh-CN": {
              singular: "设置"
            }
          }
        }),
        badge: _v55,
        children: _v64.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "folderSettings")] : [_v57.addToShowcase && (0, _v1.jsx)(_v34.ActionWithTooltip, {
        ..._v57.addToShowcase
      }, "addToShowcase"), _v57.move && (0, _v1.jsx)(_v33.Action, {
        ..._v57.move
      }, "move"), _v57.rename && (0, _v1.jsx)(_v33.Action, {
        ..._v57.rename
      }, "rename"), _v57.changeColor && (0, _v1.jsx)(_v28.FeatureFlag, {
        feature: "change_color",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v33.Action, {
          ..._v57.changeColor
        })
      }, "changeColor"), _v61, _v57.slack && (0, _v1.jsx)(_v33.Action, {
        ..._v57.slack
      }, "slack"), _v57.folderSettings && (0, _v1.jsx)(_v33.Action, {
        ..._v57.folderSettings
      }, "folderSettings"), _v57.translate && (0, _v1.jsx)(_v33.Action, {
        ..._v57.translate
      }, "translate"), _v57.star && (0, _v1.jsx)(_v33.Action, {
        ..._v57.star
      }, "star")], [_v57.delete && (0, _v1.jsx)(_v33.Action, {
        ..._v57.delete
      }, "delete")]].map(_v31.createSection).filter(_v0 => !!_v0.length);
    return (0, _v1.jsx)(_v30.ActionsMenu, {
      placement: _v32,
      usePortal: _v33,
      onClick: _v2,
      onOpenChange: _v3,
      disabled: _v1,
      size: _v0,
      zIndex: _v34,
      children: _v65.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
  }]);
}