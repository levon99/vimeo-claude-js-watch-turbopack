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
    onCopyLinkAsync: _v13,
    folderLink: _v14,
    canEditFolderSettings: _v15,
    onFolderSettings: _v16,
    onFolderDefaults: _v17,
    analyticsPageLink: _v18,
    onClickAnalyticsLink: _v19,
    hasFolderDefaultsUpsell: _v20,
    hasShareUpsell: _v21,
    hasSlackIntegration: _v22,
    isConnectedToSlack: _v23,
    onSlackIntegration: _v24,
    deleteIcon: _v25 = (0, _v1.jsx)(_v15.TrashBin, {
      boxSize: _v36
    }),
    canStar: _v26 = !0,
    onStarClick: _v27,
    starIcon: _v28 = (0, _v1.jsx)(_v14.Star, {
      boxSize: _v36
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
    let _v47 = (0, _v27.useOrionSettingsFields)(["enable_review_link_submenu", "enable_rename_folder", "enable_folder_defaults_intro_popover"]),
      _v48 = (0, _v24.useIsMobile)(),
      _v49 = !_v48,
      _v50 = (0, _v29.useViewer)(),
      {
        capabilities: _v51
      } = (0, _v23.useCapability)(["folderUploadPresets"], _v50?.teamUser?.ownerId ?? _v50?.user?.id),
      _v52 = !0 === _v51.folderUploadPresets,
      _v53 = _v52 && _v47.enable_folder_defaults_intro_popover && (0, _v1.jsx)(_v3.Badge, {
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
      _v54 = _v3 && !_v43 && (_v36 || _v38 || _v41),
      _v55 = {
        share: _v4 ? {
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
          onClick: _v5,
          badge: _v21 && (0, _v1.jsx)(_v26.UpgradeBadge, {
            noMargin: !0,
            name: "folder_menu_share_upgrade_button",
            location: "folder_menu"
          })
        } : void 0,
        copyLink: _v14 || _v13 ? {
          content: _v14 ?? "",
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
          onClick: _v12,
          onCopyAsync: _v13
        } : void 0,
        reviewLinkSubmenu: _v54 && _v47.enable_review_link_submenu ? {
          icon: (0, _v1.jsx)(_v32.REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v41 ? _v32.REVIEW_LINKS_COPY : _v32.REVIEW_LINK_COPY
        } : void 0,
        copyReviewLink: _v38 ? {
          content: _v39,
          icon: (0, _v1.jsx)(_v32.COPY_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v32.COPY_REVIEW_LINK_COPY,
          onClick: _v40
        } : void 0,
        manageReviewLinks: _v41 ? {
          icon: (0, _v1.jsx)(_v32.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v32.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v42
        } : void 0,
        createReviewLink: _v54 ? {
          icon: (0, _v1.jsx)(_v32.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v32.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v37,
          isDisabled: !_v36
        } : void 0,
        reviewPages: _v41 ? {
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
          onClick: _v42
        } : void 0,
        createReviewLinksLegacy: _v47.enable_review_link_submenu || !_v3 || _v43 ? void 0 : {
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
          onClick: _v42
        },
        analytics: _v3 && _v18 && !_v48 ? {
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
          href: _v18,
          onClick: _v19
        } : void 0,
        bulkPrivacy: _v10 ? {
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
          onClick: _v11
        } : void 0,
        addToShowcase: _v45 && _v46 ? {
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
          onClick: _v46,
          showTooltip: !_v44,
          tooltipCopy: _v44 ? void 0 : (0, _v25.translate)("Folders added to a Showcase must contain between 1 and 100 items.")
        } : void 0,
        move: _v8 ? {
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
          onClick: _v9
        } : void 0,
        rename: _v15 && _v33 && _v47.enable_rename_folder ? {
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
          onClick: _v33
        } : void 0,
        changeColor: _v15 ? {
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
          onClick: _v16
        } : void 0,
        folderDefaults: _v15 ? {
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
          onClick: _v17,
          badge: _v20 ? (0, _v1.jsx)(_v26.UpgradeBadge, {
            noMargin: !0,
            name: "folder_menu_defaults_upgrade_button",
            location: "folder_menu"
          }) : _v53
        } : void 0,
        folderStyle: _v15 ? {
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
          onClick: _v16
        } : void 0,
        slack: _v22 && !_v48 ? {
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
          label: _v23 ? (0, _v25.translate)({
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
          onClick: _v24
        } : void 0,
        folderSettings: _v15 ? {
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
          onClick: _v16
        } : void 0,
        translate: _v35 ? {
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
          onClick: _v34
        } : void 0,
        star: _v26 ? {
          icon: (0, _v2.cloneElement)(_v28, {
            style: {
              width: _v36,
              height: _v36
            }
          }),
          label: _v29 || "",
          onClick: _v27
        } : void 0,
        delete: _v6 ? {
          icon: _v25,
          label: (0, _v25.translate)({
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
          onClick: _v7
        } : void 0
      };
    if (!(_v4 || _v14 || _v13 || _v3 && _v18 || _v8 || _v22 || _v15 || _v26 || _v6 || _v45)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v56 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v55.copyReviewLink && (_v39 ? (0, _v1.jsx)(_v35.CopyAction, {
          ..._v55.copyReviewLink,
          content: _v39
        }) : (0, _v1.jsx)(_v33.Action, {
          ..._v55.copyReviewLink
        })), _v55.manageReviewLinks && (0, _v1.jsx)(_v33.Action, {
          ..._v55.manageReviewLinks
        }), _v55.createReviewLink && (0, _v1.jsx)(_v33.Action, {
          ..._v55.createReviewLink
        }), _v55.reviewPages && (0, _v1.jsx)(_v33.Action, {
          ..._v55.reviewPages
        })]
      }),
      _v57 = [_v55.share && (0, _v1.jsx)(_v33.Action, {
        ..._v55.share
      }, "share"), _v55.copyLink && (0, _v1.jsx)(_v35.CopyAction, {
        ..._v55.copyLink
      }, "copyLink"), _v55.reviewLinkSubmenu && (_v48 ? (0, _v1.jsx)(_v2.default.Fragment, {
        children: _v56
      }, "reviewLinkSubmenu") : (0, _v1.jsx)(_v33.MenuAction, {
        ..._v55.reviewLinkSubmenu,
        children: _v56
      }, "reviewLinkSubmenu")), _v55.createReviewLinksLegacy && (0, _v1.jsx)(_v33.Action, {
        ..._v55.createReviewLinksLegacy
      }, "createReviewLinksLegacy")],
      _v58 = _v49 ? [_v55.analytics && (0, _v1.jsx)(_v33.Action, {
        ..._v55.analytics
      }, "analytics"), _v55.translate && (0, _v1.jsx)(_v33.Action, {
        ..._v55.translate
      }, "translate")] : [_v55.analytics && (0, _v1.jsx)(_v33.Action, {
        ..._v55.analytics
      }, "analytics"), _v55.bulkPrivacy && (0, _v1.jsx)(_v33.Action, {
        ..._v55.bulkPrivacy
      }, "bulkPrivacy")],
      _v59 = _v55.folderDefaults && (_v52 ? (0, _v1.jsx)(_v33.Action, {
        ..._v55.folderDefaults
      }) : (0, _v1.jsx)(_v28.FeatureFlag, {
        feature: "folder_defaults",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v33.Action, {
          ..._v55.folderDefaults
        })
      })),
      _v60 = [[_v55.rename && (0, _v1.jsx)(_v33.Action, {
        ..._v55.rename
      }, "rename"), _v55.folderStyle && (0, _v1.jsx)(_v33.Action, {
        ..._v55.folderStyle
      }, "folderStyle")]].map(_v31.createSection).filter(_v0 => !!_v0.length),
      _v61 = [[_v55.move && (0, _v1.jsx)(_v33.Action, {
        ..._v55.move
      }, "move"), _v55.addToShowcase && (0, _v1.jsx)(_v34.ActionWithTooltip, {
        ..._v55.addToShowcase
      }, "addToShowcase"), _v55.star && (0, _v1.jsx)(_v33.Action, {
        ..._v55.star
      }, "star")]].map(_v31.createSection).filter(_v0 => !!_v0.length),
      _v62 = [[_v59, _v55.bulkPrivacy && (0, _v1.jsx)(_v33.Action, {
        ..._v55.bulkPrivacy
      }, "bulkPrivacy"), _v55.slack && (0, _v1.jsx)(_v33.Action, {
        ..._v55.slack
      }, "slack")]].map(_v31.createSection).filter(_v0 => !!_v0.length),
      _v63 = [_v57, _v58, _v49 ? [_v60.length > 0 && (0, _v1.jsx)(_v33.MenuAction, {
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
        children: _v60.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "editFolder"), _v61.length > 0 && (0, _v1.jsx)(_v33.MenuAction, {
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
        children: _v61.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "organize"), _v62.length > 0 && (0, _v1.jsx)(_v33.MenuAction, {
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
        badge: _v53,
        children: _v62.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "folderSettings")] : [_v55.addToShowcase && (0, _v1.jsx)(_v34.ActionWithTooltip, {
        ..._v55.addToShowcase
      }, "addToShowcase"), _v55.move && (0, _v1.jsx)(_v33.Action, {
        ..._v55.move
      }, "move"), _v55.rename && (0, _v1.jsx)(_v33.Action, {
        ..._v55.rename
      }, "rename"), _v55.changeColor && (0, _v1.jsx)(_v28.FeatureFlag, {
        feature: "change_color",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v33.Action, {
          ..._v55.changeColor
        })
      }, "changeColor"), _v59, _v55.slack && (0, _v1.jsx)(_v33.Action, {
        ..._v55.slack
      }, "slack"), _v55.folderSettings && (0, _v1.jsx)(_v33.Action, {
        ..._v55.folderSettings
      }, "folderSettings"), _v55.translate && (0, _v1.jsx)(_v33.Action, {
        ..._v55.translate
      }, "translate"), _v55.star && (0, _v1.jsx)(_v33.Action, {
        ..._v55.star
      }, "star")], [_v55.delete && (0, _v1.jsx)(_v33.Action, {
        ..._v55.delete
      }, "delete")]].map(_v31.createSection).filter(_v0 => !!_v0.length);
    return (0, _v1.jsx)(_v30.ActionsMenu, {
      placement: _v30,
      usePortal: _v31,
      onClick: _v2,
      disabled: _v1,
      size: _v0,
      zIndex: _v32,
      children: _v63.map((_v0, _v1) => (0, _v1.jsx)(_v31.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
  }]);
}