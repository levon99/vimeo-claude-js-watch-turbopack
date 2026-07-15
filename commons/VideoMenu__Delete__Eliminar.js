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
    _v30 = _v0.i(0);
  let _v31 = ({
      onShare: _v0,
      privacy: _v1
    }) => (0, _v1.jsx)(_v30.AccessCopy, {
      title: _v29.DEFAULT_PRIVACY_OPTIONS.find(({
        privacy: _v0
      }) => _v0 === _v1)?.title ?? _v1,
      description: _v29.DEFAULT_PRIVACY_OPTIONS.find(({
        privacy: _v0
      }) => _v0 === _v1)?.description ?? "",
      onClick: _v0
    }),
    _v32 = (0, _v3.rem)(_v25.ACTION_ICON_BOX_SIZE);
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
    reviewPageLink: _v26,
    canCopyReviewPageLink: _v27,
    onCopyReviewPageLink: _v28,
    onClickReviewPage: _v29,
    analyticsPageLink: _v30,
    onClickAnalyticsPage: _v31,
    fileDownloadLink: _v32,
    onCopyFileDownloadLink: _v33,
    onClickChangeThumbnail: _v34,
    onMoreInfo: _v35,
    hasMoreInfo: _v36,
    hasMultipleReviewLinks: _v37 = !1,
    hasReviewPageLinkUpsell: _v38,
    hasShareUpsell: _v39,
    deleteOptionLabel: _v40 = (0, _v20.translate)({
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
    deleteIcon: _v41 = (0, _v1.jsx)(_v16.TrashBin, {
      boxSize: _v32
    }),
    canStar: _v42 = !0,
    onStarClick: _v43,
    starIcon: _v44 = (0, _v1.jsx)(_v15.Star, {
      boxSize: _v32
    }),
    starIconLabel: _v45,
    placement: _v46,
    usePortal: _v47,
    zIndex: _v48,
    canUseBulkTranslation: _v49,
    handleTranslateVideo: _v50,
    canAddVideoRating: _v51,
    onAddVideoRating: _v52,
    reviewId: _v53,
    viewPrivacy: _v54,
    title: _v55,
    onRename: _v56,
    onCopyVideo: _v57,
    isCopyVideoDisabled: _v58,
    copyVideoDisabledTooltip: _v59
  }) => {
    let _v60 = (0, _v19.useIsMobile)(),
      _v61 = (0, _v26.useIsV2)(),
      {
        settings: _v62
      } = (0, _v22.useOrionSettings)(),
      _v63 = {
        analytics: {
          icon: (0, _v1.jsx)(_v25.ANALYTICS_ICON, {
            boxSize: _v32
          }),
          label: _v25.ANALYTICS_COPY,
          shouldRender: _v30 && _v3 && !_v60
        },
        changeThumbnail: {
          icon: (0, _v1.jsx)(_v25.CHANGE_THUMBNAIL_ICON, {
            boxSize: _v32
          }),
          label: _v25.CHANGE_THUMBNAIL_COPY,
          onClick: _v34,
          shouldRender: !!_v34
        },
        copyLink: {
          content: _v23,
          icon: (0, _v1.jsx)(_v25.COPY_LINK_ICON, {
            boxSize: _v32
          }),
          label: _v25.COPY_LINK_COPY,
          onClick: _v17,
          onCopyAsync: _v18,
          shouldRender: !!_v23 || !!_v18
        },
        createReviewLinks: {
          icon: (0, _v1.jsx)(_v25.CREATE_REVIEW_LINKS_ICON, {
            boxSize: _v32
          }),
          label: _v25.CREATE_REVIEW_LINKS_COPY,
          onClick: _v20,
          shouldRender: _v3 && _v19
        },
        delete: {
          icon: (0, _v1.jsx)(_v25.DELETE_ICON, {
            boxSize: _v32
          }),
          label: _v25.DELETE_COPY,
          onClick: _v7,
          shouldRender: !!_v6
        },
        download: {
          icon: (0, _v1.jsx)(_v25.DOWNLOAD_ICON, {
            boxSize: _v32
          }),
          label: _v25.DOWNLOAD_COPY,
          onClick: _v10,
          isDisabled: _v9,
          shouldRender: !!_v8
        },
        editFile: {
          icon: (0, _v1.jsx)(_v25.EDIT_FILE_ICON, {
            boxSize: _v32
          }),
          label: _v25.EDIT_FILE_COPY,
          shouldRender: _v3 && !_v60
        },
        embed: {
          icon: (0, _v1.jsx)(_v25.EMBED_ICON, {
            boxSize: _v32
          }),
          label: _v25.EMBED_COPY,
          shouldRender: _v3 && !_v60
        },
        move: {
          icon: (0, _v1.jsx)(_v25.MOVE_ICON, {
            boxSize: _v32
          }),
          label: _v25.MOVE_COPY,
          onClick: _v14,
          shouldRender: !!_v13
        },
        addToShowcase: {
          icon: (0, _v1.jsx)(_v25.ADD_TO_SHOWCASE_ICON, {
            boxSize: _v32
          }),
          label: _v25.ADD_TO_SHOWCASE_COPY,
          onClick: _v16,
          shouldRender: !!_v15
        },
        addVideoRating: {
          icon: (0, _v1.jsx)(_v18.Feedback, {
            boxSize: _v32
          }),
          label: (0, _v20.translate)({
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
          onClick: _v52,
          shouldRender: !!_v51
        },
        rename: {
          icon: (0, _v1.jsx)(_v25.RENAME_ICON, {
            boxSize: _v32
          }),
          label: _v25.RENAME_COPY,
          onClick: _v56,
          shouldRender: _v3 && !!_v56
        },
        makeCopy: {
          icon: (0, _v1.jsx)(_v7.CopyPortrait, {
            boxSize: _v32
          }),
          label: (0, _v20.translate)({
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
          onClick: _v57,
          isDisabled: _v58,
          tooltip: _v58 ? _v59 : void 0,
          shouldRender: _v3 && !!_v57 && _v62.enable_copy_button_video
        },
        replace: {
          icon: (0, _v1.jsx)(_v25.REPLACE_ICON, {
            boxSize: _v32
          }),
          label: _v25.REPLACE_COPY,
          onClick: _v12,
          shouldRender: !!_v11 && !_v60
        },
        review: {
          icon: (0, _v1.jsx)(_v25.REVIEW_ICON, {
            boxSize: _v32
          }),
          label: _v25.REVIEW_COPY,
          shouldRender: _v26 && _v3 && !_v60 && !_v37
        },
        share: {
          badge: _v39 ? (0, _v1.jsx)(_v21.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_share_upgrade_button",
            location: "video_menu"
          }) : void 0,
          icon: (0, _v1.jsx)(_v25.SHARE_ICON, {
            boxSize: _v32
          }),
          label: _v25.SHARE_COPY,
          onClick: _v5,
          shouldRender: _v4
        },
        star: {
          icon: _v44,
          label: _v45 ?? "",
          onClick: _v43,
          shouldRender: _v42
        },
        tools: {
          icon: (0, _v1.jsx)(_v25.TOOLS_ICON, {
            boxSize: _v32
          }),
          label: _v25.TOOLS_COPY,
          shouldRender: _v3 && !_v60
        },
        translate: {
          icon: (0, _v1.jsx)(_v25.TRANSLATE_ICON, {
            boxSize: _v32
          }),
          label: _v25.TRANSLATE_COPY,
          onClick: _v50,
          shouldRender: _v49
        },
        videoEditor: {
          icon: (0, _v1.jsx)(_v25.VIDEO_EDITOR_ICON, {
            boxSize: _v32
          }),
          label: _v25.VIDEO_EDITOR_COPY,
          shouldRender: _v3 && !_v60
        },
        videoInfo: {
          icon: (0, _v1.jsx)(_v25.VIDEO_INFO_ICON, {
            boxSize: _v32
          }),
          label: _v25.VIDEO_INFO_COPY,
          onClick: _v35,
          shouldRender: _v36 && !_v60
        },
        viewVideoPage: {
          href: _v23,
          icon: (0, _v1.jsx)(_v25.VIEW_VIDEO_PAGE_ICON, {
            boxSize: _v32
          }),
          label: _v25.VIEW_VIDEO_PAGE_COPY,
          shouldRender: !!_v3
        }
      },
      _v64 = (0, _v24.createSection)([(0, _v1.jsx)(_v31, {
        onShare: _v5,
        privacy: _v54 ?? ""
      }, "video-access-copy")]),
      _v65 = (0, _v24.createSection)([_v63.share.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.share
      }), _v63.copyLink.shouldRender && (0, _v1.jsx)(_v28.CopyAction, {
        ..._v63.copyLink
      }), _v63.createReviewLinks.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.createReviewLinks
      }), _v63.embed.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.embed
      })]),
      _v66 = (0, _v24.createSection)([_v63.viewVideoPage.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.viewVideoPage
      }), _v63.download.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.download
      }), _v63.editFile.shouldRender ? (0, _v1.jsxs)(_v27.MenuAction, {
        ..._v63.editFile,
        children: [_v63.rename.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.rename
        }), _v63.makeCopy.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.makeCopy
        }), _v63.changeThumbnail.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.changeThumbnail
        }), _v63.replace.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.replace
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v63.rename.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.rename
        }), _v63.makeCopy.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.makeCopy
        }), _v63.changeThumbnail.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.changeThumbnail
        }), _v63.replace.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.replace
        })]
      }), _v63.move.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.move
      }), _v63.tools.shouldRender && (0, _v1.jsxs)(_v27.MenuAction, {
        ..._v63.tools,
        children: [_v63.videoEditor.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.videoEditor
        }), _v63.review.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.review
        }), _v63.analytics.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.analytics
        }), _v63.translate.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.translate
        }), _v63.addVideoRating.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.addVideoRating
        })]
      }), _v63.addToShowcase.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.addToShowcase
      }), _v63.star.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.star
      }), _v63.videoInfo.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.videoInfo
      })]),
      _v67 = (0, _v24.createSection)([_v63.delete.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.delete
      })]),
      _v68 = (0, _v24.createSection)([_v4 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v14.Share, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
        badge: _v39 && (0, _v1.jsx)(_v21.UpgradeBadge, {
          noMargin: !0,
          name: "video_menu_share_upgrade_button",
          location: "video_menu"
        })
      }), (_v23 || _v18) && (0, _v1.jsx)(_v28.CopyAction, {
        label: (0, _v20.translate)({
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
      }), ...(_v62.enable_review_link_submenu ? [!_v60 && _v3 && (_v19 || _v27 || _v21) && (0, _v1.jsxs)(_v27.MenuAction, {
        icon: (0, _v1.jsx)(_v25.REVIEW_LINK_ICON, {
          boxSize: _v32
        }),
        label: _v21 ? _v25.REVIEW_LINKS_COPY : _v25.REVIEW_LINK_COPY,
        children: [_v27 && (_v26 ? (0, _v1.jsx)(_v28.CopyAction, {
          label: _v25.COPY_REVIEW_LINK_COPY,
          content: _v26,
          onClick: _v28,
          badge: _v38 && !_v37 && (0, _v1.jsx)(_v21.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_review_link_upgrade_button",
            location: "video_menu"
          })
        }) : (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v25.COPY_REVIEW_LINK_ICON, {
            boxSize: _v32
          }),
          label: _v25.COPY_REVIEW_LINK_COPY,
          onClick: _v28
        })), _v21 && (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v25.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v32
          }),
          label: _v25.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v22
        }), (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v25.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v32
          }),
          label: _v25.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v20,
          isDisabled: !_v19
        }), _v26 && _v27 && (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v13.ReviewCheck, {
            boxSize: _v32
          }),
          label: (0, _v20.translate)({
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
            window.open(_v26, "_blank", "noopener,noreferrer"), _v29?.();
          }
        }), _v21 && (0, _v1.jsx)(_v27.Action, {
          icon: (0, _v1.jsx)(_v13.ReviewCheck, {
            boxSize: _v32
          }),
          label: (0, _v20.translate)({
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
      }), _v60 && _v3 && _v27 && (_v26 ? (0, _v1.jsx)(_v28.CopyAction, {
        label: _v25.COPY_REVIEW_LINK_COPY,
        content: _v26,
        onClick: _v28
      }) : (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v25.COPY_REVIEW_LINK_ICON, {
          boxSize: _v32
        }),
        label: _v25.COPY_REVIEW_LINK_COPY,
        onClick: _v28
      })), _v60 && _v3 && _v21 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v25.MANAGE_REVIEW_LINKS_ICON, {
          boxSize: _v32
        }),
        label: _v25.MANAGE_REVIEW_LINKS_COPY,
        onClick: _v22
      }), _v60 && _v3 && (_v19 || _v27 || _v21) && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v25.CREATE_NEW_REVIEW_LINK_ICON, {
          boxSize: _v32
        }),
        label: _v25.CREATE_NEW_REVIEW_LINK_COPY,
        onClick: _v20,
        isDisabled: !_v19
      }), _v60 && _v3 && _v26 && _v27 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v13.ReviewCheck, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
          window.open(_v26, "_blank", "noopener,noreferrer"), _v29?.();
        }
      }), _v60 && _v3 && _v21 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v13.ReviewCheck, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
      })] : [_v3 && _v19 && !_v26 && !_v21 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v12.LinkAdd, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
      }), _v3 && _v26 && _v27 && (0, _v1.jsx)(_v28.CopyAction, {
        label: (0, _v20.translate)({
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
              singular: "レビューリンクをコピー"
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
        content: _v26,
        onClick: _v28,
        badge: _v38 && !_v37 && (0, _v1.jsx)(_v21.UpgradeBadge, {
          noMargin: !0,
          name: "video_menu_review_link_upgrade_button",
          location: "video_menu"
        })
      }), _v3 && _v21 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v11.Link, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
      })]), _v32 && !_v60 && (0, _v1.jsx)(_v28.CopyAction, {
        label: (0, _v20.translate)({
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
        content: _v32,
        onClick: _v33
      }), _v3 && _v24 && !_v60 && (0, _v1.jsx)(_v28.CopyAction, {
        icon: (0, _v1.jsx)(_v6.Code, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
        content: _v24,
        onClick: _v25
      })]),
      _v69 = (0, _v24.createSection)([_v30 && _v3 && !_v60 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v5.Analytics, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
        href: _v30,
        onClick: _v31
      }), _v26 && _v3 && !_v60 && !_v37 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v13.ReviewCheck, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
          singular: "Review",
          dictionary: {
            es: {
              singular: "Revisar"
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
              singular: "리뷰"
            },
            "pt-BR": {
              singular: "Revisar"
            },
            "zh-CN": {
              singular: "审阅"
            }
          }
        }),
        href: _v26,
        onClick: _v29
      }), _v49 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v17.AiSparkles, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
        onClick: _v50
      }), _v51 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v18.Feedback, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
        onClick: _v52
      }, "add-video-rating")]),
      _v70 = _v63.rename.shouldRender || _v63.makeCopy.shouldRender || _v63.changeThumbnail.shouldRender || _v63.replace.shouldRender,
      _v71 = (0, _v24.createSection)([_v8 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v8.DownloadImport, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
      }), !_v60 && _v3 && _v70 && (0, _v1.jsxs)(_v27.MenuAction, {
        icon: _v63.editFile.icon,
        label: _v63.editFile.label,
        children: [_v63.rename.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.rename
        }), _v63.makeCopy.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.makeCopy
        }), _v63.changeThumbnail.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.changeThumbnail
        }), _v63.replace.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.replace
        })]
      }), _v60 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v63.rename.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.rename
        }), _v63.makeCopy.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.makeCopy
        }), _v63.changeThumbnail.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.changeThumbnail
        }), _v63.replace.shouldRender && (0, _v1.jsx)(_v27.Action, {
          ..._v63.replace
        })]
      }), !_v3 && _v63.replace.shouldRender && (0, _v1.jsx)(_v27.Action, {
        ..._v63.replace
      }), _v13 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v9.FolderOpen, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
      }), _v15 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v4._3GridLeftLayout, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
      }), _v42 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v2.cloneElement)(_v44, {
          style: {
            width: _v32,
            height: _v32
          }
        }),
        label: _v45 || "",
        onClick: () => {
          _v43?.();
        }
      }), _v36 && !_v60 && (0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v10.InfoCircle, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
        onClick: _v35
      })]),
      _v72 = (0, _v24.createSection)([_v6 && (0, _v1.jsx)(_v27.Action, {
        icon: _v41,
        label: _v40,
        onClick: _v7
      })]),
      _v73 = (0, _v24.createSection)([(0, _v1.jsx)(_v27.Action, {
        icon: (0, _v1.jsx)(_v8.DownloadImport, {
          boxSize: _v32
        }),
        label: (0, _v20.translate)({
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
      }, _v53)]),
      _v74 = _v53 ? [_v73] : _v61 ? [_v64, _v65, _v66, _v67].filter(_v0 => !!_v0.length) : [_v68, _v69, _v71, _v72].filter(_v0 => !!_v0.length);
    return (0, _v1.jsx)(_v23.ActionsMenu, {
      placement: _v46,
      usePortal: _v47,
      onClick: _v1,
      disabled: _v0,
      size: _v2,
      zIndex: _v48,
      isV2: _v61,
      title: _v55,
      children: _v74.map((_v0, _v1) => (0, _v1.jsx)(_v24.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
  }], 0);
}