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
    size: _v2,
    canEdit: _v3 = !1,
    canShare: _v4,
    onShare: _v5,
    canDelete: _v6,
    onDelete: _v7,
    canDownload: _v8,
    disableDownload: _v9,
    onDownload: _v10,
    canReplace: _v11,
    onReplace: _v12,
    canMove: _v13,
    onMove: _v14,
    canAddToShowcase: _v15,
    onAddToShowcase: _v16,
    onCopyLink: _v17,
    onCopyLinkAsync: _v18,
    canCreateReviewLink: _v19,
    onCreateReviewLink: _v20,
    canManageReviewLinks: _v21,
    onManageReviewLinks: _v22,
    videoLink: _v23,
    videoEmbedCode: _v24,
    onCopyVideoEmbedCode: _v25,
    canCopyEmbedCode: _v26,
    onCopyEmbedCodeAsync: _v27,
    reviewPageLink: _v28,
    canCopyReviewPageLink: _v29,
    onCopyReviewPageLink: _v30,
    onClickReviewPage: _v31,
    analyticsPageLink: _v32,
    onClickAnalyticsPage: _v33,
    fileDownloadLink: _v34,
    onCopyFileDownloadLink: _v35,
    onClickChangeThumbnail: _v36,
    onMoreInfo: _v37,
    hasMoreInfo: _v38,
    hasMultipleReviewLinks: _v39 = !1,
    hasReviewPageLinkUpsell: _v40,
    hasShareUpsell: _v41,
    deleteOptionLabel: _v42 = (0, _v21.translate)({
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
    deleteIcon: _v43 = (0, _v1.jsx)(_v17.TrashBin, {
      boxSize: _v36
    }),
    canStar: _v44 = !0,
    onStarClick: _v45,
    starIcon: _v46 = (0, _v1.jsx)(_v16.Star, {
      boxSize: _v36
    }),
    starIconLabel: _v47,
    placement: _v48,
    usePortal: _v49,
    zIndex: _v50,
    canUseBulkTranslation: _v51,
    handleTranslateVideo: _v52,
    canAddVideoRating: _v53,
    onAddVideoRating: _v54,
    reviewId: _v55,
    viewPrivacy: _v56,
    title: _v57,
    onRename: _v58,
    onCopyVideo: _v59,
    isCopyVideoDisabled: _v60,
    copyVideoDisabledTooltip: _v61,
    enableReorganizedOverflowMenu: _v62 = !1,
    isEnterprise: _v63 = !1
  }) => {
    let _v64 = (0, _v20.useIsMobile)(),
      _v65 = (0, _v28.useIsV2)(),
      _v66 = (0, _v23.useOrionSettingsFields)(["enable_copy_button_video", "enable_review_link_submenu"]),
      [_v67, _v68] = (0, _v2.useState)(!1),
      _v69 = _v62 && !_v64,
      _v70 = _v3 && !_v64 && (!!_v24 || !0 === _v26 && null != _v27),
      _v71 = {
        analytics: {
          icon: (0, _v1.jsx)(_v27.ANALYTICS_ICON, {
            boxSize: _v36
          }),
          label: _v27.ANALYTICS_COPY,
          shouldRender: _v32 && _v3 && !_v64
        },
        changeThumbnail: {
          icon: (0, _v1.jsx)(_v27.CHANGE_THUMBNAIL_ICON, {
            boxSize: _v36
          }),
          label: _v27.CHANGE_THUMBNAIL_COPY,
          onClick: _v36,
          shouldRender: !!_v36
        },
        copyLink: {
          content: _v23,
          icon: (0, _v1.jsx)(_v27.COPY_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.COPY_LINK_COPY,
          onClick: _v17,
          onCopyAsync: _v18,
          shouldRender: !!_v23 || !!_v18
        },
        createReviewLinks: {
          icon: (0, _v1.jsx)(_v27.CREATE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v27.CREATE_REVIEW_LINKS_COPY,
          onClick: _v20,
          shouldRender: _v3 && _v19
        },
        delete: {
          icon: (0, _v1.jsx)(_v27.DELETE_ICON, {
            boxSize: _v36
          }),
          label: _v27.DELETE_COPY,
          onClick: _v7,
          shouldRender: !!_v6
        },
        download: {
          icon: (0, _v1.jsx)(_v27.DOWNLOAD_ICON, {
            boxSize: _v36
          }),
          label: _v27.DOWNLOAD_COPY,
          onClick: _v10,
          isDisabled: _v9,
          shouldRender: !!_v8
        },
        editFile: {
          icon: (0, _v1.jsx)(_v27.EDIT_FILE_ICON, {
            boxSize: _v36
          }),
          label: _v27.EDIT_FILE_COPY,
          shouldRender: _v3 && !_v64
        },
        embed: {
          icon: (0, _v1.jsx)(_v27.EMBED_ICON, {
            boxSize: _v36
          }),
          label: _v27.EMBED_COPY,
          shouldRender: _v3 && !_v64
        },
        move: {
          icon: (0, _v1.jsx)(_v27.MOVE_ICON, {
            boxSize: _v36
          }),
          label: _v27.MOVE_COPY,
          onClick: _v14,
          shouldRender: !!_v13
        },
        addToShowcase: {
          icon: (0, _v1.jsx)(_v27.ADD_TO_SHOWCASE_ICON, {
            boxSize: _v36
          }),
          label: _v27.ADD_TO_SHOWCASE_COPY,
          onClick: _v16,
          shouldRender: !!_v15
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
          onClick: _v54,
          shouldRender: !!_v53
        },
        rename: {
          icon: (0, _v1.jsx)(_v27.RENAME_ICON, {
            boxSize: _v36
          }),
          label: _v27.RENAME_COPY,
          onClick: _v58,
          shouldRender: _v3 && !!_v58
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
          onClick: _v59,
          isDisabled: _v60,
          tooltip: _v60 ? _v61 : void 0,
          shouldRender: _v3 && !!_v59 && _v66.enable_copy_button_video
        },
        replace: {
          icon: (0, _v1.jsx)(_v27.REPLACE_ICON, {
            boxSize: _v36
          }),
          label: _v27.REPLACE_COPY,
          onClick: _v12,
          shouldRender: !!_v11 && !_v64
        },
        review: {
          icon: (0, _v1.jsx)(_v27.REVIEW_ICON, {
            boxSize: _v36
          }),
          label: _v27.REVIEW_COPY,
          shouldRender: _v28 && _v3 && !_v64 && !_v39
        },
        share: {
          badge: _v41 ? (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_share_upgrade_button",
            location: "video_menu"
          }) : void 0,
          icon: (0, _v1.jsx)(_v27.SHARE_ICON, {
            boxSize: _v36
          }),
          label: _v27.SHARE_COPY,
          onClick: _v5,
          shouldRender: _v4
        },
        star: {
          icon: _v46,
          label: _v47 ?? "",
          onClick: _v45,
          shouldRender: _v44
        },
        tools: {
          icon: (0, _v1.jsx)(_v27.TOOLS_ICON, {
            boxSize: _v36
          }),
          label: _v27.TOOLS_COPY,
          shouldRender: _v3 && !_v64
        },
        translate: {
          icon: (0, _v1.jsx)(_v27.TRANSLATE_ICON, {
            boxSize: _v36
          }),
          label: _v27.TRANSLATE_COPY,
          onClick: _v52,
          shouldRender: _v51
        },
        videoEditor: {
          icon: (0, _v1.jsx)(_v27.VIDEO_EDITOR_ICON, {
            boxSize: _v36
          }),
          label: _v27.VIDEO_EDITOR_COPY,
          shouldRender: _v3 && !_v64
        },
        videoInfo: {
          icon: (0, _v1.jsx)(_v27.VIDEO_INFO_ICON, {
            boxSize: _v36
          }),
          label: _v27.VIDEO_INFO_COPY,
          onClick: _v37,
          shouldRender: _v38 && !_v64
        },
        viewVideoPage: {
          href: _v23,
          icon: (0, _v1.jsx)(_v27.VIEW_VIDEO_PAGE_ICON, {
            boxSize: _v36
          }),
          label: _v27.VIEW_VIDEO_PAGE_COPY,
          shouldRender: !!_v3
        }
      },
      _v72 = (0, _v25.createSection)([(0, _v1.jsx)(_v35, {
        onShare: _v5,
        privacy: _v56 ?? ""
      }, "video-access-copy")]),
      _v73 = [_v71.videoEditor.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.videoEditor
      }, "videoEditor"), _v71.review.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.review
      }, "review"), _v71.analytics.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.analytics
      }, "analytics"), _v71.translate.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.translate
      }, "translate"), _v71.addVideoRating.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.addVideoRating
      }, "addVideoRating")].filter(Boolean),
      _v74 = (0, _v25.createSection)([_v71.share.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.share
      }), _v71.copyLink.shouldRender && (0, _v1.jsx)(_v30.CopyAction, {
        ..._v71.copyLink
      }), _v71.createReviewLinks.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.createReviewLinks
      }), _v71.embed.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.embed
      })]),
      _v75 = (0, _v25.createSection)([_v71.viewVideoPage.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.viewVideoPage
      }), _v71.download.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.download
      }), _v71.editFile.shouldRender ? (0, _v1.jsxs)(_v29.MenuAction, {
        ..._v71.editFile,
        children: [_v71.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.rename
        }), _v71.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.makeCopy
        }), _v71.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.changeThumbnail
        }), _v71.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.replace
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v71.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.rename
        }), _v71.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.makeCopy
        }), _v71.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.changeThumbnail
        }), _v71.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.replace
        })]
      }), _v71.move.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.move
      }), _v71.tools.shouldRender && (_v73.length > 1 ? (0, _v1.jsx)(_v29.MenuAction, {
        ..._v71.tools,
        children: _v73
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: _v73
      })), _v71.addToShowcase.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.addToShowcase
      }), _v71.star.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.star
      }), _v71.videoInfo.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.videoInfo
      })]),
      _v76 = (0, _v25.createSection)([_v71.delete.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.delete
      })]),
      _v77 = (0, _v25.createSection)([_v4 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v5,
        badge: _v41 && (0, _v1.jsx)(_v22.UpgradeBadge, {
          noMargin: !0,
          name: "video_menu_share_upgrade_button",
          location: "video_menu"
        })
      }), (_v23 || _v18) && (0, _v1.jsx)(_v30.CopyAction, {
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
        content: _v23 ?? "",
        onClick: _v17,
        onCopyAsync: _v18
      }), ...(_v66.enable_review_link_submenu ? [!_v64 && _v3 && (_v19 || _v29 || _v21) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v21 ? _v27.REVIEW_LINKS_COPY : _v27.REVIEW_LINK_COPY,
        children: [_v29 && (_v28 ? (0, _v1.jsx)(_v30.CopyAction, {
          label: _v27.COPY_REVIEW_LINK_COPY,
          content: _v28,
          onClick: _v30,
          badge: _v40 && !_v39 && (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_review_link_upgrade_button",
            location: "video_menu"
          })
        }) : (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.COPY_REVIEW_LINK_COPY,
          onClick: _v30
        })), _v21 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v27.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v22
        }), (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v20,
          isDisabled: !_v19
        }), _v28 && _v29 && (0, _v1.jsx)(_v29.Action, {
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
            window.open(_v28, "_blank", "noopener,noreferrer"), _v31?.();
          }
        }), _v21 && (0, _v1.jsx)(_v29.Action, {
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
          onClick: _v22
        })]
      }), _v64 && _v3 && _v29 && (_v28 ? (0, _v1.jsx)(_v30.CopyAction, {
        label: _v27.COPY_REVIEW_LINK_COPY,
        content: _v28,
        onClick: _v30
      }) : (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v27.COPY_REVIEW_LINK_COPY,
        onClick: _v30
      })), _v64 && _v3 && _v21 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
          boxSize: _v36
        }),
        label: _v27.MANAGE_REVIEW_LINKS_COPY,
        onClick: _v22
      }), _v64 && _v3 && (_v19 || _v29 || _v21) && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
        onClick: _v20,
        isDisabled: !_v19
      }), _v64 && _v3 && _v28 && _v29 && (0, _v1.jsx)(_v29.Action, {
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
          window.open(_v28, "_blank", "noopener,noreferrer"), _v31?.();
        }
      }), _v64 && _v3 && _v21 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v22
      })] : [_v3 && _v19 && !_v28 && !_v21 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v20
      }), _v3 && _v28 && _v29 && (0, _v1.jsx)(_v30.CopyAction, {
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
        content: _v28,
        onClick: _v30,
        badge: _v40 && !_v39 && (0, _v1.jsx)(_v22.UpgradeBadge, {
          noMargin: !0,
          name: "video_menu_review_link_upgrade_button",
          location: "video_menu"
        })
      }), _v3 && _v21 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v22
      })]), _v34 && !_v64 && (0, _v1.jsx)(_v30.CopyAction, {
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
        content: _v34,
        onClick: _v35
      }), _v70 && (0, _v1.jsx)(_v30.CopyAction, {
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
        content: _v24 ?? "",
        onCopyAsync: _v27,
        onClick: _v25
      })]),
      _v78 = (0, _v25.createSection)([_v32 && _v3 && !_v64 && (0, _v1.jsx)(_v29.Action, {
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
        href: _v32,
        onClick: _v33
      }), _v28 && _v3 && !_v64 && !_v39 && (0, _v1.jsx)(_v29.Action, {
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
        href: _v28,
        onClick: _v31
      }), _v51 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v52
      }), _v53 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v54
      }, "add-video-rating")]),
      _v79 = _v71.rename.shouldRender || _v71.makeCopy.shouldRender || _v71.changeThumbnail.shouldRender || _v71.replace.shouldRender,
      _v80 = (0, _v25.createSection)([_v8 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v9.DownloadImport, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Download...",
          dictionary: {
            es: {
              singular: "Descargar..."
            },
            "de-DE": {
              singular: "Herunterladen ..."
            },
            "fr-FR": {
              singular: "Télécharger..."
            },
            "ja-JP": {
              singular: "ダウンロード..."
            },
            "ko-KR": {
              singular: "다운로드..."
            },
            "pt-BR": {
              singular: "Baixar..."
            },
            "zh-CN": {
              singular: "下载..."
            }
          }
        }),
        onClick: _v10,
        isDisabled: _v9
      }), !_v64 && _v3 && _v79 && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: _v71.editFile.icon,
        label: _v71.editFile.label,
        children: [_v71.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.rename
        }), _v71.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.makeCopy
        }), _v71.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.changeThumbnail
        }), _v71.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.replace
        })]
      }), _v64 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v71.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.rename
        }), _v71.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.makeCopy
        }), _v71.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.changeThumbnail
        }), _v71.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.replace
        })]
      }), !_v3 && _v71.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.replace
      }), _v13 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v14
      }), _v15 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v16
      }), _v44 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v2.cloneElement)(_v46, {
          style: {
            width: _v36,
            height: _v36
          }
        }),
        label: _v47 || "",
        onClick: () => {
          _v45?.();
        }
      }), _v38 && !_v64 && (0, _v1.jsx)(_v29.Action, {
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
        onClick: _v37
      })]),
      _v81 = (0, _v25.createSection)([_v6 && (0, _v1.jsx)(_v29.Action, {
        icon: _v43,
        label: _v42,
        onClick: _v7
      })]),
      _v82 = (0, _v25.createSection)([(0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v9.DownloadImport, {
          boxSize: _v36
        }),
        label: (0, _v21.translate)({
          singular: "Download...",
          dictionary: {
            es: {
              singular: "Descargar..."
            },
            "de-DE": {
              singular: "Herunterladen ..."
            },
            "fr-FR": {
              singular: "Télécharger..."
            },
            "ja-JP": {
              singular: "ダウンロード..."
            },
            "ko-KR": {
              singular: "다운로드..."
            },
            "pt-BR": {
              singular: "Baixar..."
            },
            "zh-CN": {
              singular: "下载..."
            }
          }
        }),
        onClick: _v10,
        isDisabled: _v9
      }, _v55)]),
      _v83 = !_v64 && _v3 && (_v19 || _v29 || _v21) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.REVIEW_LINK_ICON, {
          boxSize: _v36
        }),
        label: _v21 ? _v27.REVIEW_LINKS_COPY : _v27.REVIEW_LINK_COPY,
        children: [_v29 && (_v28 ? (0, _v1.jsx)(_v30.CopyAction, {
          label: _v27.COPY_REVIEW_LINK_COPY,
          content: _v28,
          onClick: _v30,
          badge: _v40 && !_v39 && (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_review_link_upgrade_button",
            location: "video_menu"
          })
        }) : (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.COPY_REVIEW_LINK_COPY,
          onClick: _v30
        })), _v21 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v36
          }),
          label: _v27.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v22
        }), (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v36
          }),
          label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v20,
          isDisabled: !_v19
        }), _v28 && _v29 && (0, _v1.jsx)(_v29.Action, {
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
            window.open(_v28, "_blank", "noopener,noreferrer"), _v31?.();
          }
        }), _v21 && (0, _v1.jsx)(_v29.Action, {
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
          onClick: _v22
        })]
      }),
      _v84 = _v32 && _v3 && !_v64 && (0, _v1.jsx)(_v29.Action, {
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
        href: _v32,
        onClick: _v33
      }, "analytics"),
      _v85 = _v70 && (0, _v1.jsx)(_v30.CopyAction, {
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
        content: _v24 ?? "",
        onCopyAsync: _v27,
        onClick: _v25
      }),
      _v86 = (0, _v25.createSection)([_v71.share.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.share
      }), _v71.copyLink.shouldRender && (0, _v1.jsx)(_v30.CopyAction, {
        ..._v71.copyLink
      }), _v83, _v28 && _v3 && !_v19 && !_v29 && !_v21 && (0, _v1.jsx)(_v29.Action, {
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
          window.open(_v28, "_blank", "noopener,noreferrer"), _v31?.();
        }
      }), _v85]),
      _v87 = _v3 && _v79 && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: _v71.editFile.icon,
        label: _v71.editFile.label,
        children: [_v71.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.rename
        }), _v71.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.makeCopy
        }), _v71.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.changeThumbnail
        }), _v71.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.replace
        })]
      }),
      _v88 = (_v71.move.shouldRender || _v71.addToShowcase.shouldRender || _v71.star.shouldRender) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.ORGANIZE_ICON, {
          boxSize: _v36
        }),
        label: _v27.ORGANIZE_COPY,
        children: [_v71.move.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.move
        }), _v71.addToShowcase.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.addToShowcase
        }), _v71.star.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v71.star,
          icon: (0, _v2.cloneElement)(_v46, {
            style: {
              width: _v36,
              height: _v36
            }
          })
        })]
      }),
      _v89 = (0, _v25.createSection)([_v84, _v63 && _v71.translate.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.translate
      }, "translate"), _v63 && _v71.addVideoRating.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.addVideoRating
      }, "addVideoRating")]),
      _v90 = [_v86, (0, _v25.createSection)([_v89.length > 1 ? (0, _v1.jsx)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.TOOLS_ICON, {
          boxSize: _v36
        }),
        label: _v27.TOOLS_COPY,
        children: _v89
      }) : _v89[0]]), (0, _v25.createSection)([_v87, _v88, _v71.download.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.download
      }), _v71.videoInfo.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.videoInfo
      })]), (0, _v25.createSection)([_v71.delete.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v71.delete
      })])],
      _v91 = _v55 ? [_v82] : _v69 ? _v90.filter(_v0 => !!_v0.length) : _v65 ? [_v72, _v74, _v75, _v76].filter(_v0 => !!_v0.length) : [_v77, _v78, _v80, _v81].filter(_v0 => !!_v0.length),
      _v92 = _v69 && !_v55;
    !_v92 && _v67 && _v68(!1);
    let _v93 = (0, _v1.jsx)(_v24.ActionsMenu, {
      placement: _v48,
      usePortal: _v49,
      onClick: _v1,
      onOpenChange: _v68,
      renderContent: _v92 ? _v0 => (0, _v1.jsx)(_v3.PopoverAnchor, {
        children: _v0
      }) : void 0,
      disabled: _v0,
      size: _v2,
      zIndex: _v50,
      isV2: _v65,
      title: _v57,
      children: _v91.map((_v0, _v1) => (0, _v1.jsx)(_v25.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
    return _v92 ? (0, _v1.jsx)(_v26.VideoCardOverflowMenuIntroPopover, {
      isMenuOpen: _v67,
      children: (0, _v1.jsx)("div", {
        children: _v93
      })
    }, "intro") : (0, _v1.jsx)(_v2.default.Fragment, {
      children: _v93
    }, "plain");
  }], 0);
}