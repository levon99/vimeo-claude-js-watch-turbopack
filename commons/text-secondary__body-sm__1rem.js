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
    _v32 = _v0.i(0);
  let _v33 = ({
      title: _v0,
      description: _v1,
      onClick: _v2
    }) => (0, _v1.jsxs)(_v32.Text, {
      color: "text-secondary",
      variant: "body-sm",
      minHeight: "1rem",
      padding: ".5rem",
      children: [_v0 && (0, _v1.jsx)(_v34, {
        onClick: _v2,
        children: _v0
      }), _v0 && _v1 && " · ", _v1]
    }),
    _v34 = ({
      children: _v0,
      onClick: _v1
    }) => (0, _v1.jsx)(_v32.Text, {
      ...(_v1 ? {
        as: "button",
        background: "transparent",
        onClick: _v1,
        padding: "0",
        textDecoration: "underline"
      } : {
        as: "span"
      }),
      variant: "body-sm",
      color: "text-primary",
      children: _v0
    }),
    _v35 = ({
      onShare: _v0,
      privacy: _v1
    }) => (0, _v1.jsx)(_v33, {
      title: _v31.DEFAULT_PRIVACY_OPTIONS.find(({
        privacy: _v0
      }) => _v0 === _v1)?.title ?? _v1,
      description: _v31.DEFAULT_PRIVACY_OPTIONS.find(({
        privacy: _v0
      }) => _v0 === _v1)?.description ?? "",
      onClick: _v0
    }),
    _v36 = (0, _v4.rem)(_v27.ACTION_ICON_BOX_SIZE);
  _v0.s(["VideoMenu", 0, ({
    disabled: _v0,
    onClick: _v1,
    onOpenChange: _v2,
    size: _v3,
    canEdit: _v4 = !1,
    canShare: _v5,
    onShare: _v6,
    canDelete: _v7,
    onDelete: _v8,
    canDownload: _v9,
    disableDownload: _v10,
    onDownload: _v11,
    canReplace: _v12,
    onReplace: _v13,
    canMove: _v14,
    onMove: _v15,
    canAddToShowcase: _v16,
    onAddToShowcase: _v17,
    onCopyLink: _v18,
    onCopyLinkAsync: _v19,
    canCreateReviewLink: _v20,
    onCreateReviewLink: _v21,
    canManageReviewLinks: _v22,
    onManageReviewLinks: _v23,
    videoLink: _v24,
    videoEmbedCode: _v25,
    onCopyVideoEmbedCode: _v26,
    canCopyEmbedCode: _v27,
    onCopyEmbedCodeAsync: _v28,
    reviewPageLink: _v29,
    canCopyReviewPageLink: _v30,
    onCopyReviewPageLink: _v31,
    onClickReviewPage: _v32,
    analyticsPageLink: _v33,
    onClickAnalyticsPage: _v34,
    fileDownloadLink: _v35,
    onCopyFileDownloadLink: _v36,
    onClickChangeThumbnail: _v37,
    onMoreInfo: _v38,
    hasMoreInfo: _v39,
    hasMultipleReviewLinks: _v40 = !1,
    hasReviewPageLinkUpsell: _v41,
    hasShareUpsell: _v42,
    deleteOptionLabel: _v43 = (0, _v21.translate)({
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
    deleteIcon: _v44 = (0, _v1.jsx)(_v17.TrashBin, {
      boxSize: _v36
    }),
    canStar: _v45 = !0,
    onStarClick: _v46,
    starIcon: _v47 = (0, _v1.jsx)(_v16.Star, {
      boxSize: _v36
    }),
    starIconLabel: _v48,
    placement: _v49,
    usePortal: _v50,
    zIndex: _v51,
    canUseBulkTranslation: _v52,
    handleTranslateVideo: _v53,
    canAddVideoRating: _v54,
    onAddVideoRating: _v55,
    reviewId: _v56,
    viewPrivacy: _v57,
    title: _v58,
    onRename: _v59,
    onCopyVideo: _v60,
    isCopyVideoDisabled: _v61,
    copyVideoDisabledTooltip: _v62,
    enableReorganizedOverflowMenu: _v63 = !1,
    showOverflowMenuIntro: _v64 = !0,
    isEnterprise: _v65 = !1
  }) => {
    let _v66 = (0, _v20.useIsMobile)(),
      _v67 = (0, _v28.useIsV2)(),
      _v68 = (0, _v23.useOrionSettingsFields)(["enable_copy_button_video", "enable_review_link_submenu"]),
      [_v69, _v70] = (0, _v2.useState)(!1),
      _v71 = _v63 && !_v66,
      _v72 = _v4 && !_v66 && (!!_v25 || !0 === _v27 && null != _v28),
      _v73 = {
        analytics: {
          icon: (0, _v1.jsx)(_v27.ANALYTICS_ICON, {
            boxSize: _v36
          }),
          label: _v27.ANALYTICS_COPY,
          shouldRender: _v33 && _v4 && !_v66
        },
        changeThumbnail: {
          icon: (0, _v1.jsx)(_v27.CHANGE_THUMBNAIL_ICON, {
            boxSize: _v36
          }),
          label: _v27.CHANGE_THUMBNAIL_COPY,
          onClick: _v37,
          shouldRender: !!_v37
        },
        copyLink: {
          content: _v24,
          icon: (0, _v1.jsx)(_v27.COPY_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.COPY_LINK_COPY,
          onClick: _v18,
          onCopyAsync: _v19,
          shouldRender: !!_v24 || !!_v19
        },
        createReviewLinks: {
          icon: (0, _v1.jsx)(_v27.CREATE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v27.CREATE_REVIEW_LINKS_COPY,
          onClick: _v21,
          shouldRender: _v4 && _v20
        },
        delete: {
          icon: _v44,
          label: _v43,
          onClick: _v8,
          shouldRender: !!_v7
        },
        download: {
          icon: (0, _v1.jsx)(_v27.DOWNLOAD_ICON, {
            boxSize: _v36
          }),
          label: _v27.DOWNLOAD_COPY,
          onClick: _v11,
          isDisabled: _v10,
          shouldRender: !!_v9
        },
        editFile: {
          icon: (0, _v1.jsx)(_v27.EDIT_FILE_ICON, {
            boxSize: _v36
          }),
          label: _v27.EDIT_FILE_COPY,
          shouldRender: _v4 && !_v66
        },
        embed: {
          icon: (0, _v1.jsx)(_v27.EMBED_ICON, {
            boxSize: _v36
          }),
          label: _v27.EMBED_COPY,
          shouldRender: _v4 && !_v66
        },
        move: {
          icon: (0, _v1.jsx)(_v27.MOVE_ICON, {
            boxSize: _v36
          }),
          label: _v27.MOVE_COPY,
          onClick: _v15,
          shouldRender: !!_v14
        },
        addToShowcase: {
          icon: (0, _v1.jsx)(_v27.ADD_TO_SHOWCASE_ICON, {
            boxSize: _v36
          }),
          label: _v27.ADD_TO_SHOWCASE_COPY,
          onClick: _v17,
          shouldRender: !!_v16
        },
        addVideoRating: {
          icon: (0, _v1.jsx)(_v19.Feedback, {
            boxSize: _v36
          }),
          label: (0, _v21.translate)({
            singular: "Add video rating",
            dictionary: {
              es: {
                singular: "Agregar calificación de video"
              },
              "de-DE": {
                singular: "Videobewertung hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter un système d'évaluation à la vidéo"
              },
              "ja-JP": {
                singular: "動画の評価を追加"
              },
              "ko-KR": {
                singular: "동영상 평점 추가"
              },
              "pt-BR": {
                singular: "Adicionar avaliação do vídeo"
              },
              "zh-CN": {
                singular: "添加视频评分"
              }
            }
          }),
          onClick: _v55,
          shouldRender: !!_v54
        },
        rename: {
          icon: (0, _v1.jsx)(_v27.RENAME_ICON, {
            boxSize: _v36
          }),
          label: _v27.RENAME_COPY,
          onClick: _v59,
          shouldRender: _v4 && !!_v59
        },
        makeCopy: {
          icon: (0, _v1.jsx)(_v8.CopyPortrait, {
            boxSize: _v36
          }),
          label: (0, _v21.translate)({
            singular: "Create a copy",
            dictionary: {
              es: {
                singular: "Crear una copia"
              },
              "de-DE": {
                singular: "Kopie erstellen"
              },
              "fr-FR": {
                singular: "Créer une copie"
              },
              "ja-JP": {
                singular: "コピーを作成"
              },
              "ko-KR": {
                singular: "사본 만들기"
              },
              "pt-BR": {
                singular: "Criar uma cópia"
              },
              "zh-CN": {
                singular: "创建副本"
              }
            }
          }),
          onClick: _v60,
          isDisabled: _v61,
          tooltip: _v61 ? _v62 : void 0,
          shouldRender: _v4 && !!_v60 && _v68.enable_copy_button_video
        },
        replace: {
          icon: (0, _v1.jsx)(_v27.REPLACE_ICON, {
            boxSize: _v36
          }),
          label: _v27.REPLACE_COPY,
          onClick: _v13,
          shouldRender: !!_v12 && !_v66
        },
        review: {
          icon: (0, _v1.jsx)(_v27.REVIEW_ICON, {
            boxSize: _v36
          }),
          label: _v27.REVIEW_COPY,
          shouldRender: _v29 && _v4 && !_v66 && !_v40
        },
        share: {
          badge: _v42 ? (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_share_upgrade_button",
            location: "video_menu"
          }) : void 0,
          icon: (0, _v1.jsx)(_v27.SHARE_ICON, {
            boxSize: _v36
          }),
          label: _v27.SHARE_COPY,
          onClick: _v6,
          shouldRender: _v5
        },
        star: {
          icon: _v47,
          label: _v48 ?? "",
          onClick: _v46,
          shouldRender: _v45
        },
        tools: {
          icon: (0, _v1.jsx)(_v27.TOOLS_ICON, {
            boxSize: _v36
          }),
          label: _v27.TOOLS_COPY,
          shouldRender: _v4 && !_v66
        },
        translate: {
          icon: (0, _v1.jsx)(_v27.TRANSLATE_ICON, {
            boxSize: _v36
          }),
          label: _v27.TRANSLATE_COPY,
          onClick: _v53,
          shouldRender: _v52
        },
        videoEditor: {
          icon: (0, _v1.jsx)(_v27.VIDEO_EDITOR_ICON, {
            boxSize: _v36
          }),
          label: _v27.VIDEO_EDITOR_COPY,
          shouldRender: _v4 && !_v66
        },
        videoInfo: {
          icon: (0, _v1.jsx)(_v27.VIDEO_INFO_ICON, {
            boxSize: _v36
          }),
          label: _v27.VIDEO_INFO_COPY,
          onClick: _v38,
          shouldRender: _v39 && !_v66
        },
        viewVideoPage: {
          href: _v24,
          icon: (0, _v1.jsx)(_v27.VIEW_VIDEO_PAGE_ICON, {
            boxSize: _v36
          }),
          label: _v27.VIEW_VIDEO_PAGE_COPY,
          shouldRender: !!_v4
        }
      },
      _v74 = (0, _v25.createSection)([(0, _v1.jsx)(_v35, {
        onShare: _v6,
        privacy: _v57 ?? ""
      }, "video-access-copy")]),
      _v75 = [_v73.videoEditor.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.videoEditor
      }, "videoEditor"), _v73.review.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.review
      }, "review"), _v73.analytics.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.analytics
      }, "analytics"), _v73.translate.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.translate
      }, "translate"), _v73.addVideoRating.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.addVideoRating
      }, "addVideoRating")].filter(Boolean),
      _v76 = (0, _v25.createSection)([_v73.share.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.share
      }), _v73.copyLink.shouldRender && (0, _v1.jsx)(_v30.CopyAction, {
        ..._v73.copyLink
      }), _v73.createReviewLinks.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.createReviewLinks
      }), _v73.embed.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.embed
      })]),
      _v77 = (0, _v25.createSection)([_v73.viewVideoPage.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.viewVideoPage
      }), _v73.download.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.download
      }), _v73.editFile.shouldRender ? (0, _v1.jsxs)(_v29.MenuAction, {
        ..._v73.editFile,
        children: [_v73.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.rename
        }), _v73.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.makeCopy
        }), _v73.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.changeThumbnail
        }), _v73.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.replace
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v73.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.rename
        }), _v73.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.makeCopy
        }), _v73.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.changeThumbnail
        }), _v73.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.replace
        })]
      }), _v73.move.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.move
      }), _v73.tools.shouldRender && (_v75.length > 1 ? (0, _v1.jsx)(_v29.MenuAction, {
        ..._v73.tools,
        children: _v75
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: _v75
      })), _v73.addToShowcase.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.addToShowcase
      }), _v73.star.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.star
      }), _v73.videoInfo.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.videoInfo
      })]),
      _v78 = (0, _v25.createSection)([_v73.delete.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.delete
      })]),
      _v79 = (0, _v25.createSection)([_v5 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v15.Share, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
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
        badge: _v42 && (0, _v1.jsx)(_v22.UpgradeBadge, {
          noMargin: !0,
          name: "video_menu_share_upgrade_button",
          location: "video_menu"
        })
      }), (_v24 || _v19) && (0, _v1.jsx)(_v30.CopyAction, {
        label: (0, _v21.translate)({
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
        content: _v24 ?? "",
        onClick: _v18,
        onCopyAsync: _v19
      }), ...(_v68.enable_review_link_submenu ? [!_v66 && _v4 && (_v20 || _v30 || _v22) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v22 ? _v27.REVIEW_LINKS_COPY : _v27.REVIEW_LINK_COPY,
        children: [_v30 && (_v29 ? (0, _v1.jsx)(_v30.CopyAction, {
          label: _v27.COPY_REVIEW_LINK_COPY,
          content: _v29,
          onClick: _v31,
          badge: _v41 && !_v40 && (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_review_link_upgrade_button",
            location: "video_menu"
          })
        }) : (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.COPY_REVIEW_LINK_COPY,
          onClick: _v31
        })), _v22 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v27.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v23
        }), (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v21,
          isDisabled: !_v20
        }), _v29 && _v30 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v36
          }),
          label: (0, _v21.translate)({
            singular: "Review page",
            dictionary: {
              es: {
                singular: "Página de revisión"
              },
              "de-DE": {
                singular: "Überprüfungsseite"
              },
              "fr-FR": {
                singular: "Page de révision"
              },
              "ja-JP": {
                singular: "レビューページ"
              },
              "ko-KR": {
                singular: "검토 페이지"
              },
              "pt-BR": {
                singular: "Página de revisão"
              },
              "zh-CN": {
                singular: "审阅页面"
              }
            }
          }),
          onClick: () => {
            window.open(_v29, "_blank", "noopener,noreferrer"), _v32?.();
          }
        }), _v22 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v36
          }),
          label: (0, _v21.translate)({
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
          onClick: _v23
        })]
      }), _v66 && _v4 && _v30 && (_v29 ? (0, _v1.jsx)(_v30.CopyAction, {
        label: _v27.COPY_REVIEW_LINK_COPY,
        content: _v29,
        onClick: _v31
      }) : (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v27.COPY_REVIEW_LINK_COPY,
        onClick: _v31
      })), _v66 && _v4 && _v22 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
          boxSize: _v36
        }),
        label: _v27.MANAGE_REVIEW_LINKS_COPY,
        onClick: _v23
      }), _v66 && _v4 && (_v20 || _v30 || _v22) && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
        onClick: _v21,
        isDisabled: !_v20
      }), _v66 && _v4 && _v29 && _v30 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Review page",
          dictionary: {
            es: {
              singular: "Página de revisión"
            },
            "de-DE": {
              singular: "Überprüfungsseite"
            },
            "fr-FR": {
              singular: "Page de révision"
            },
            "ja-JP": {
              singular: "レビューページ"
            },
            "ko-KR": {
              singular: "검토 페이지"
            },
            "pt-BR": {
              singular: "Página de revisão"
            },
            "zh-CN": {
              singular: "审阅页面"
            }
          }
        }),
        onClick: () => {
          window.open(_v29, "_blank", "noopener,noreferrer"), _v32?.();
        }
      }), _v66 && _v4 && _v22 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
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
        onClick: _v23
      })] : [_v4 && _v20 && !_v29 && !_v22 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v13.LinkAdd, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Create review link",
          dictionary: {
            es: {
              singular: "Cree un enlace de revisión"
            },
            "de-DE": {
              singular: "Review-Link erstellen"
            },
            "fr-FR": {
              singular: "Créer un lien de révision"
            },
            "ja-JP": {
              singular: "レビューリンクを作成"
            },
            "ko-KR": {
              singular: "리뷰 링크 생성"
            },
            "pt-BR": {
              singular: "Criar link de revisão"
            },
            "zh-CN": {
              singular: "创建评论链接"
            }
          }
        }),
        onClick: _v21
      }), _v4 && _v29 && _v30 && (0, _v1.jsx)(_v30.CopyAction, {
        label: (0, _v21.translate)({
          singular: "Copy review link",
          dictionary: {
            es: {
              singular: "Copiar enlace de revisión"
            },
            "de-DE": {
              singular: "Review-Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien de révision"
            },
            "ja-JP": {
              singular: "レビュー用リンクをコピー"
            },
            "ko-KR": {
              singular: "검토 링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link de revisão"
            },
            "zh-CN": {
              singular: "复制审阅链接"
            }
          }
        }),
        content: _v29,
        onClick: _v31,
        badge: _v41 && !_v40 && (0, _v1.jsx)(_v22.UpgradeBadge, {
          noMargin: !0,
          name: "video_menu_review_link_upgrade_button",
          location: "video_menu"
        })
      }), _v4 && _v22 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v12.Link, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Copy review links",
          dictionary: {
            es: {
              singular: "Copiar enlaces de revisión"
            },
            "de-DE": {
              singular: "Review-Links kopieren"
            },
            "fr-FR": {
              singular: "Copier les liens de révision"
            },
            "ja-JP": {
              singular: "レビューリンクをコピー"
            },
            "ko-KR": {
              singular: "리뷰 링크 복사"
            },
            "pt-BR": {
              singular: "Copiar links de revisão"
            },
            "zh-CN": {
              singular: "复制审阅链接"
            }
          }
        }),
        onClick: _v23
      })]), _v35 && !_v66 && (0, _v1.jsx)(_v30.CopyAction, {
        label: (0, _v21.translate)({
          singular: "Copy file download link",
          dictionary: {
            es: {
              singular: "Copiar vínculo de descarga de archivos"
            },
            "de-DE": {
              singular: "Download-Link für die Datei kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien de téléchargement du fichier"
            },
            "ja-JP": {
              singular: "ファイルのダウンロードリンクをコピーする"
            },
            "ko-KR": {
              singular: "파일 다운로드 링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link para download do arquivo"
            },
            "zh-CN": {
              singular: "复制文件下载链接"
            }
          }
        }),
        content: _v35,
        onClick: _v36
      }), _v72 && (0, _v1.jsx)(_v30.CopyAction, {
        icon: (0, _v1.jsx)(_v7.Code, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Copy embed code",
          dictionary: {
            es: {
              singular: "Copiar el código de inserción"
            },
            "de-DE": {
              singular: "Einbettungscode kopieren"
            },
            "fr-FR": {
              singular: "Copier le code d’intégration"
            },
            "ja-JP": {
              singular: "埋め込みコードをコピー"
            },
            "ko-KR": {
              singular: "임베드 코드 복사하기"
            },
            "pt-BR": {
              singular: "Copiar código de incorporação"
            },
            "zh-CN": {
              singular: "复制嵌入代码"
            }
          }
        }),
        content: _v25 ?? "",
        onCopyAsync: _v28,
        onClick: _v26
      })]),
      _v80 = (0, _v25.createSection)([_v33 && _v4 && !_v66 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v6.Analytics, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
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
        href: _v33,
        onClick: _v34
      }), _v29 && _v4 && !_v66 && !_v40 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Review",
          dictionary: {
            es: {
              singular: "Revisión"
            },
            "de-DE": {
              singular: "Überprüfung"
            },
            "fr-FR": {
              singular: "Révision"
            },
            "ja-JP": {
              singular: "レビュー"
            },
            "ko-KR": {
              singular: "검토"
            },
            "pt-BR": {
              singular: "Revisar"
            },
            "zh-CN": {
              singular: "评论"
            }
          }
        }),
        href: _v29,
        onClick: _v32
      }), _v52 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v18.AiSparkles, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Translate",
          dictionary: {
            es: {
              singular: "Traducir"
            },
            "de-DE": {
              singular: "Übersetzen"
            },
            "fr-FR": {
              singular: "Traduire"
            },
            "ja-JP": {
              singular: "翻訳"
            },
            "ko-KR": {
              singular: "번역합니다."
            },
            "pt-BR": {
              singular: "Traduzir"
            },
            "zh-CN": {
              singular: "翻译"
            }
          }
        }),
        onClick: _v53
      }), _v54 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v19.Feedback, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Add video rating",
          dictionary: {
            es: {
              singular: "Agregar calificación de video"
            },
            "de-DE": {
              singular: "Videobewertung hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter un système d'évaluation à la vidéo"
            },
            "ja-JP": {
              singular: "動画の評価を追加"
            },
            "ko-KR": {
              singular: "동영상 평점 추가"
            },
            "pt-BR": {
              singular: "Adicionar avaliação do vídeo"
            },
            "zh-CN": {
              singular: "添加视频评分"
            }
          }
        }),
        onClick: _v55
      }, "add-video-rating")]),
      _v81 = _v73.rename.shouldRender || _v73.makeCopy.shouldRender || _v73.changeThumbnail.shouldRender || _v73.replace.shouldRender,
      _v82 = (0, _v25.createSection)([_v9 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v9.DownloadImport, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)("Download..."),
        onClick: _v11,
        isDisabled: _v10
      }), !_v66 && _v4 && _v81 && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: _v73.editFile.icon,
        label: _v73.editFile.label,
        children: [_v73.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.rename
        }), _v73.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.makeCopy
        }), _v73.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.changeThumbnail
        }), _v73.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.replace
        })]
      }), _v66 && _v4 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v73.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.rename
        }), _v73.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.makeCopy
        }), _v73.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.changeThumbnail
        }), _v73.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.replace
        })]
      }), !_v4 && _v73.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.replace
      }), _v14 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v10.FolderOpen, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Move...",
          dictionary: {
            es: {
              singular: "Mover..."
            },
            "de-DE": {
              singular: "Bewegen ..."
            },
            "fr-FR": {
              singular: "Déplacer..."
            },
            "ja-JP": {
              singular: "移動..."
            },
            "ko-KR": {
              singular: "이동..."
            },
            "pt-BR": {
              singular: "Mover..."
            },
            "zh-CN": {
              singular: "移动..."
            }
          }
        }),
        onClick: _v15
      }), _v16 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v5._3GridLeftLayout, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
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
        onClick: _v17
      }), _v45 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v2.cloneElement)(_v47, {
          style: {
            width: _v36,
            height: _v36
          }
        }),
        label: _v48 || "",
        onClick: () => {
          _v46?.();
        }
      }), _v39 && !_v66 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v11.InfoCircle, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Video info",
          dictionary: {
            es: {
              singular: "Información del video"
            },
            "de-DE": {
              singular: "Videoinfo"
            },
            "fr-FR": {
              singular: "Infos de la vidéo"
            },
            "ja-JP": {
              singular: "動画情報"
            },
            "ko-KR": {
              singular: "동영상 정보"
            },
            "pt-BR": {
              singular: "Informação do vídeo"
            }
          }
        }),
        onClick: _v38
      })]),
      _v83 = (0, _v25.createSection)([_v7 && (0, _v1.jsx)(_v29.Action, {
        icon: _v44,
        label: _v43,
        onClick: _v8
      })]),
      _v84 = (0, _v25.createSection)([(0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v9.DownloadImport, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)("Download..."),
        onClick: _v11,
        isDisabled: _v10
      }, _v56)]),
      _v85 = !_v66 && _v4 && (_v20 || _v30 || _v22) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v22 ? _v27.REVIEW_LINKS_COPY : _v27.REVIEW_LINK_COPY,
        children: [_v30 && (_v29 ? (0, _v1.jsx)(_v30.CopyAction, {
          label: _v27.COPY_REVIEW_LINK_COPY,
          content: _v29,
          onClick: _v31,
          badge: _v41 && !_v40 && (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_review_link_upgrade_button",
            location: "video_menu"
          })
        }) : (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.COPY_REVIEW_LINK_COPY,
          onClick: _v31
        })), _v22 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v27.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v23
        }), (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v21,
          isDisabled: !_v20
        }), _v29 && _v30 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v36
          }),
          label: (0, _v21.translate)({
            singular: "Review page",
            dictionary: {
              es: {
                singular: "Página de revisión"
              },
              "de-DE": {
                singular: "Überprüfungsseite"
              },
              "fr-FR": {
                singular: "Page de révision"
              },
              "ja-JP": {
                singular: "レビューページ"
              },
              "ko-KR": {
                singular: "검토 페이지"
              },
              "pt-BR": {
                singular: "Página de revisão"
              },
              "zh-CN": {
                singular: "审阅页面"
              }
            }
          }),
          onClick: () => {
            window.open(_v29, "_blank", "noopener,noreferrer"), _v32?.();
          }
        }), _v22 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v36
          }),
          label: (0, _v21.translate)({
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
          onClick: _v23
        })]
      }),
      _v86 = _v33 && _v4 && !_v66 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v6.Analytics, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
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
        href: _v33,
        onClick: _v34
      }, "analytics"),
      _v87 = _v72 && (0, _v1.jsx)(_v30.CopyAction, {
        icon: (0, _v1.jsx)(_v7.Code, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Copy embed code",
          dictionary: {
            es: {
              singular: "Copiar el código de inserción"
            },
            "de-DE": {
              singular: "Einbettungscode kopieren"
            },
            "fr-FR": {
              singular: "Copier le code d’intégration"
            },
            "ja-JP": {
              singular: "埋め込みコードをコピー"
            },
            "ko-KR": {
              singular: "임베드 코드 복사하기"
            },
            "pt-BR": {
              singular: "Copiar código de incorporação"
            },
            "zh-CN": {
              singular: "复制嵌入代码"
            }
          }
        }),
        content: _v25 ?? "",
        onCopyAsync: _v28,
        onClick: _v26
      }),
      _v88 = (0, _v25.createSection)([_v73.share.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.share
      }), _v73.copyLink.shouldRender && (0, _v1.jsx)(_v30.CopyAction, {
        ..._v73.copyLink
      }), _v85, _v29 && _v4 && !_v20 && !_v30 && !_v22 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Review page",
          dictionary: {
            es: {
              singular: "Página de revisión"
            },
            "de-DE": {
              singular: "Überprüfungsseite"
            },
            "fr-FR": {
              singular: "Page de révision"
            },
            "ja-JP": {
              singular: "レビューページ"
            },
            "ko-KR": {
              singular: "검토 페이지"
            },
            "pt-BR": {
              singular: "Página de revisão"
            },
            "zh-CN": {
              singular: "审阅页面"
            }
          }
        }),
        onClick: () => {
          window.open(_v29, "_blank", "noopener,noreferrer"), _v32?.();
        }
      }), _v87]),
      _v89 = _v4 && _v81 && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: _v73.editFile.icon,
        label: _v73.editFile.label,
        children: [_v73.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.rename
        }), _v73.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.makeCopy
        }), _v73.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.changeThumbnail
        }), _v73.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.replace
        })]
      }),
      _v90 = (_v73.move.shouldRender || _v73.addToShowcase.shouldRender || _v73.star.shouldRender) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.ORGANIZE_ICON, {
          boxSize: _v36
        }),
        label: _v27.ORGANIZE_COPY,
        children: [_v73.move.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.move
        }), _v73.addToShowcase.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.addToShowcase
        }), _v73.star.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v73.star,
          icon: (0, _v2.cloneElement)(_v47, {
            style: {
              width: _v36,
              height: _v36
            }
          })
        })]
      }),
      _v91 = (0, _v25.createSection)([_v86, _v65 && _v73.translate.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.translate
      }, "translate"), _v65 && _v73.addVideoRating.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.addVideoRating
      }, "addVideoRating")]),
      _v92 = [_v88, (0, _v25.createSection)([_v91.length > 1 ? (0, _v1.jsx)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.TOOLS_ICON, {
          boxSize: _v36
        }),
        label: _v27.TOOLS_COPY,
        children: _v91
      }) : _v91[0]]), (0, _v25.createSection)([_v89, _v90, _v73.download.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.download
      }), _v73.videoInfo.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.videoInfo
      })]), (0, _v25.createSection)([_v73.delete.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v73.delete
      })])],
      _v93 = _v56 ? [_v84] : _v71 ? _v92.filter(_v0 => !!_v0.length) : _v67 ? [_v74, _v76, _v77, _v78].filter(_v0 => !!_v0.length) : [_v79, _v80, _v82, _v83].filter(_v0 => !!_v0.length),
      _v94 = _v71 && !_v56 && _v64;
    !_v94 && _v69 && _v70(!1);
    let _v95 = (0, _v1.jsx)(_v24.ActionsMenu, {
      placement: _v49,
      usePortal: _v50,
      onClick: _v1,
      onOpenChange: _v0 => {
        _v94 && _v70(_v0), _v2?.(_v0);
      },
      renderContent: _v94 ? _v0 => (0, _v1.jsx)(_v3.PopoverAnchor, {
        children: _v0
      }) : void 0,
      disabled: _v0,
      size: _v3,
      zIndex: _v51,
      isV2: _v67,
      title: _v58,
      children: _v93.map((_v0, _v1) => (0, _v1.jsx)(_v25.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
    return _v94 ? (0, _v1.jsx)(_v26.VideoCardOverflowMenuIntroPopover, {
      isMenuOpen: _v69,
      children: (0, _v1.jsx)("div", {
        children: _v95
      })
    }, "intro") : (0, _v1.jsx)(_v2.default.Fragment, {
      children: _v95
    }, "plain");
  }], 0);
}