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
    _v33 = _v0.i(0);
  let _v34 = (0, _v4.rem)(_v30.ACTION_ICON_BOX_SIZE);
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
      boxSize: _v34
    }),
    canStar: _v25 = !0,
    onStarClick: _v26,
    starIcon: _v27 = (0, _v1.jsx)(_v12.Star, {
      boxSize: _v34
    }),
    starIconLabel: _v28,
    placement: _v29,
    usePortal: _v30,
    zIndex: _v31,
    onRename: _v32,
    handleTranslateVideo: _v33,
    canTranslateVideos: _v34,
    canCreateReviewLink: _v35,
    onCreateReviewLink: _v36,
    canCopyReviewPageLink: _v37,
    reviewPageLink: _v38,
    onCopyReviewPageLink: _v39,
    canManageReviewLinks: _v40,
    onManageReviewLinks: _v41,
    hasProhibitMultipleReviewLinks: _v42,
    canAddToShowcase: _v43,
    showAddToShowcase: _v44,
    onAddToShowcase: _v45
  }) => {
    let {
        settings: _v46
      } = (0, _v25.useOrionSettings)(),
      _v47 = (0, _v21.useIsMobile)(),
      _v48 = _v46.enable_compact_folder_menu && !_v47,
      _v49 = (0, _v27.useViewer)(),
      {
        capabilities: _v50
      } = (0, _v20.useCapability)(["folderUploadPresets"], _v49?.teamUser?.ownerId ?? _v49?.user?.id),
      _v51 = _v46.enable_folder_upload_presets || !0 === _v50.folderUploadPresets,
      _v52 = _v3 && !_v42 && (_v35 || _v37 || _v40),
      _v53 = {
        share: _v4 ? {
          icon: (0, _v1.jsx)(_v11.Share, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
          badge: _v20 && (0, _v1.jsx)(_v24.UpgradeBadge, {
            noMargin: !0,
            name: "folder_menu_share_upgrade_button",
            location: "folder_menu"
          })
        } : void 0,
        copyLink: _v13 ? {
          content: _v13,
          label: (0, _v22.translate)({
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
          onClick: _v12
        } : void 0,
        reviewLinkSubmenu: _v52 && _v46.enable_review_link_submenu ? {
          icon: (0, _v1.jsx)(_v30.REVIEW_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v40 ? _v30.REVIEW_LINKS_COPY : _v30.REVIEW_LINK_COPY
        } : void 0,
        copyReviewLink: _v37 ? {
          content: _v38,
          icon: (0, _v1.jsx)(_v30.COPY_REVIEW_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v30.COPY_REVIEW_LINK_COPY,
          onClick: _v39
        } : void 0,
        manageReviewLinks: _v40 ? {
          icon: (0, _v1.jsx)(_v30.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v34
          }),
          label: _v30.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v41
        } : void 0,
        createReviewLink: _v52 ? {
          icon: (0, _v1.jsx)(_v30.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v30.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v36,
          isDisabled: !_v35
        } : void 0,
        reviewPages: _v40 ? {
          icon: (0, _v1.jsx)(_v18.ReviewCheck, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
          onClick: _v41
        } : void 0,
        createReviewLinksLegacy: _v46.enable_review_link_submenu || !_v3 || _v42 ? void 0 : {
          icon: (0, _v1.jsx)(_v15.Link, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
          onClick: _v41
        },
        analytics: _v3 && _v17 && !_v47 ? {
          icon: (0, _v1.jsx)(_v5.Analytics, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
        } : void 0,
        bulkPrivacy: _v10 ? {
          icon: (0, _v1.jsx)(_v7.Eye, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
        addToShowcase: _v44 && _v45 ? {
          icon: (0, _v1.jsx)(_v19._3GridLeftLayout, {
            boxSize: _v34
          }),
          actionCopy: (0, _v22.translate)({
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
          onClick: _v45,
          showTooltip: !_v43,
          tooltipCopy: _v43 ? void 0 : (0, _v22.translate)("Folders added to a Showcase must contain between 1 and 100 items.")
        } : void 0,
        move: _v8 ? {
          icon: (0, _v1.jsx)(_v9.FolderOpen, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
        rename: _v14 && _v32 && _v46.enable_rename_folder ? {
          icon: (0, _v1.jsx)(_v8.RenamePencil, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
          onClick: _v32
        } : void 0,
        changeColor: _v14 ? {
          icon: (0, _v1.jsx)(_v6.ColorPicker, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
        } : void 0,
        folderDefaults: _v14 ? {
          icon: (0, _v1.jsx)(_v10.SettingsGear, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
          badge: _v19 && (0, _v1.jsx)(_v24.UpgradeBadge, {
            noMargin: !0,
            name: "folder_menu_defaults_upgrade_button",
            location: "folder_menu"
          })
        } : void 0,
        folderStyle: _v14 ? {
          icon: (0, _v1.jsx)(_v16.Palette, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
          onClick: _v15
        } : void 0,
        slack: _v21 && !_v47 ? {
          icon: (0, _v1.jsx)(_v3.Box, {
            sx: {
              "*": {
                fill: "text-primary"
              }
            },
            boxSize: _v34,
            children: (0, _v1.jsx)(_v23.SlackMark, {
              style: {
                transform: "scale(0.9)"
              }
            })
          }),
          label: _v22 ? (0, _v22.translate)({
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
          }) : (0, _v22.translate)({
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
          onClick: _v23
        } : void 0,
        folderSettings: _v14 ? {
          icon: (0, _v1.jsx)(_v10.SettingsGear, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
        } : void 0,
        translate: _v34 ? {
          icon: (0, _v1.jsx)(_v14.AiSparkles, {
            boxSize: _v34
          }),
          label: (0, _v22.translate)({
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
          onClick: _v33
        } : void 0,
        star: _v25 ? {
          icon: (0, _v2.cloneElement)(_v27, {
            style: {
              width: _v34,
              height: _v34
            }
          }),
          label: _v28 || "",
          onClick: _v26
        } : void 0,
        delete: _v6 ? {
          icon: _v24,
          label: _v46.enable_compact_folder_menu ? (0, _v22.translate)({
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
          }) : (0, _v22.translate)({
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
          onClick: _v7
        } : void 0
      };
    if (!(_v4 || _v13 || _v3 && _v17 || _v8 || _v21 || _v14 || _v25 || _v6 || _v44)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v54 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v53.copyReviewLink && (_v38 ? (0, _v1.jsx)(_v33.CopyAction, {
          ..._v53.copyReviewLink,
          content: _v38
        }) : (0, _v1.jsx)(_v31.Action, {
          ..._v53.copyReviewLink
        })), _v53.manageReviewLinks && (0, _v1.jsx)(_v31.Action, {
          ..._v53.manageReviewLinks
        }), _v53.createReviewLink && (0, _v1.jsx)(_v31.Action, {
          ..._v53.createReviewLink
        }), _v53.reviewPages && (0, _v1.jsx)(_v31.Action, {
          ..._v53.reviewPages
        })]
      }),
      _v55 = [_v53.share && (0, _v1.jsx)(_v31.Action, {
        ..._v53.share
      }, "share"), _v53.copyLink && (0, _v1.jsx)(_v33.CopyAction, {
        ..._v53.copyLink
      }, "copyLink"), _v53.reviewLinkSubmenu && (_v47 ? (0, _v1.jsx)(_v2.default.Fragment, {
        children: _v54
      }, "reviewLinkSubmenu") : (0, _v1.jsx)(_v31.MenuAction, {
        ..._v53.reviewLinkSubmenu,
        children: _v54
      }, "reviewLinkSubmenu")), _v53.createReviewLinksLegacy && (0, _v1.jsx)(_v31.Action, {
        ..._v53.createReviewLinksLegacy
      }, "createReviewLinksLegacy")],
      _v56 = _v48 ? [_v53.analytics && (0, _v1.jsx)(_v31.Action, {
        ..._v53.analytics
      }, "analytics"), _v53.translate && (0, _v1.jsx)(_v31.Action, {
        ..._v53.translate
      }, "translate")] : [_v53.analytics && (0, _v1.jsx)(_v31.Action, {
        ..._v53.analytics
      }, "analytics"), _v53.bulkPrivacy && (0, _v1.jsx)(_v31.Action, {
        ..._v53.bulkPrivacy
      }, "bulkPrivacy")],
      _v57 = _v53.folderDefaults && (_v51 ? (0, _v1.jsx)(_v31.Action, {
        ..._v53.folderDefaults
      }) : (0, _v1.jsx)(_v26.FeatureFlag, {
        feature: "folder_defaults",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v31.Action, {
          ..._v53.folderDefaults
        })
      })),
      _v58 = [[_v53.rename && (0, _v1.jsx)(_v31.Action, {
        ..._v53.rename
      }, "rename"), _v53.folderStyle && (0, _v1.jsx)(_v31.Action, {
        ..._v53.folderStyle
      }, "folderStyle"), _v57]].map(_v29.createSection).filter(_v0 => !!_v0.length),
      _v59 = [[_v53.move && (0, _v1.jsx)(_v31.Action, {
        ..._v53.move
      }, "move"), _v53.addToShowcase && (0, _v1.jsx)(_v32.ActionWithTooltip, {
        ..._v53.addToShowcase
      }, "addToShowcase"), _v53.star && (0, _v1.jsx)(_v31.Action, {
        ..._v53.star
      }, "star")]].map(_v29.createSection).filter(_v0 => !!_v0.length),
      _v60 = [[_v53.bulkPrivacy && (0, _v1.jsx)(_v31.Action, {
        ..._v53.bulkPrivacy
      }, "bulkPrivacy"), _v53.slack && (0, _v1.jsx)(_v31.Action, {
        ..._v53.slack
      }, "slack")]].map(_v29.createSection).filter(_v0 => !!_v0.length),
      _v61 = [_v55, _v56, _v48 ? [_v58.length > 0 && (0, _v1.jsx)(_v31.MenuAction, {
        icon: (0, _v1.jsx)(_v17.EditPencil, {
          boxSize: _v34
        }),
        label: (0, _v22.translate)({
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
        children: _v58.map((_v0, _v1) => (0, _v1.jsx)(_v29.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "editFolder"), _v59.length > 0 && (0, _v1.jsx)(_v31.MenuAction, {
        icon: (0, _v1.jsx)(_v9.FolderOpen, {
          boxSize: _v34
        }),
        label: (0, _v22.translate)({
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
        children: _v59.map((_v0, _v1) => (0, _v1.jsx)(_v29.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "organize"), _v60.length > 0 && (0, _v1.jsx)(_v31.MenuAction, {
        icon: (0, _v1.jsx)(_v10.SettingsGear, {
          boxSize: _v34
        }),
        label: (0, _v22.translate)({
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
        children: _v60.map((_v0, _v1) => (0, _v1.jsx)(_v29.SectionRenderer, {
          section: _v0,
          index: _v1,
          px: "0"
        }, _v1))
      }, "folderSettings")] : [_v53.addToShowcase && (0, _v1.jsx)(_v32.ActionWithTooltip, {
        ..._v53.addToShowcase
      }, "addToShowcase"), _v53.move && (0, _v1.jsx)(_v31.Action, {
        ..._v53.move
      }, "move"), _v53.rename && (0, _v1.jsx)(_v31.Action, {
        ..._v53.rename
      }, "rename"), _v53.changeColor && (0, _v1.jsx)(_v26.FeatureFlag, {
        feature: "change_color",
        checkLocalStorage: !0,
        children: (0, _v1.jsx)(_v31.Action, {
          ..._v53.changeColor
        })
      }, "changeColor"), _v57, _v53.slack && (0, _v1.jsx)(_v31.Action, {
        ..._v53.slack
      }, "slack"), _v53.folderSettings && (0, _v1.jsx)(_v31.Action, {
        ..._v53.folderSettings
      }, "folderSettings"), _v53.translate && (0, _v1.jsx)(_v31.Action, {
        ..._v53.translate
      }, "translate"), _v53.star && (0, _v1.jsx)(_v31.Action, {
        ..._v53.star
      }, "star")], [_v53.delete && (0, _v1.jsx)(_v31.Action, {
        ..._v53.delete
      }, "delete")]].map(_v29.createSection).filter(_v0 => !!_v0.length);
    return (0, _v1.jsx)(_v28.ActionsMenu, {
      placement: _v29,
      usePortal: _v30,
      onClick: _v2,
      disabled: _v1,
      size: _v0,
      zIndex: _v31,
      children: _v61.map((_v0, _v1) => (0, _v1.jsx)(_v29.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
  }]);
}