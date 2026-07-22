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
      onShare: _v0,
      privacy: _v1
    }) => (0, _v1.jsx)(_v32.AccessCopy, {
      title: _v31.DEFAULT_PRIVACY_OPTIONS.find(({
        privacy: _v0
      }) => _v0 === _v1)?.title ?? _v1,
      description: _v31.DEFAULT_PRIVACY_OPTIONS.find(({
        privacy: _v0
      }) => _v0 === _v1)?.description ?? "",
      onClick: _v0
    }),
    _v34 = (0, _v4.rem)(_v27.ACTION_ICON_BOX_SIZE);
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
    deleteOptionLabel: _v40 = (0, _v21.translate)({
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
    deleteIcon: _v41 = (0, _v1.jsx)(_v17.TrashBin, {
      boxSize: _v34
    }),
    canStar: _v42 = !0,
    onStarClick: _v43,
    starIcon: _v44 = (0, _v1.jsx)(_v16.Star, {
      boxSize: _v34
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
    copyVideoDisabledTooltip: _v59,
    enableOverflowMenuExperiment: _v60 = !1,
    isEnterprise: _v61 = !1
  }) => {
    let _v62 = (0, _v20.useIsMobile)(),
      _v63 = (0, _v28.useIsV2)(),
      {
        settings: _v64,
        isLoadingResponse: _v65
      } = (0, _v23.useOrionSettings)(),
      [_v66, _v67] = (0, _v2.useState)(!1),
      _v68 = _v60 && !_v65 ? _v64.videocard_overflow_menu_arm : "control",
      _v69 = !_v62 && ("treatment1" === _v68 || "treatment2" === _v68),
      _v70 = {
        analytics: {
          icon: (0, _v1.jsx)(_v27.ANALYTICS_ICON, {
            boxSize: _v34
          }),
          label: _v27.ANALYTICS_COPY,
          shouldRender: _v30 && _v3 && !_v62
        },
        changeThumbnail: {
          icon: (0, _v1.jsx)(_v27.CHANGE_THUMBNAIL_ICON, {
            boxSize: _v34
          }),
          label: _v27.CHANGE_THUMBNAIL_COPY,
          onClick: _v34,
          shouldRender: !!_v34
        },
        copyLink: {
          content: _v23,
          icon: (0, _v1.jsx)(_v27.COPY_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v27.COPY_LINK_COPY,
          onClick: _v17,
          onCopyAsync: _v18,
          shouldRender: !!_v23 || !!_v18
        },
        createReviewLinks: {
          icon: (0, _v1.jsx)(_v27.CREATE_REVIEW_LINKS_ICON, {
            boxSize: _v34
          }),
          label: _v27.CREATE_REVIEW_LINKS_COPY,
          onClick: _v20,
          shouldRender: _v3 && _v19
        },
        delete: {
          icon: (0, _v1.jsx)(_v27.DELETE_ICON, {
            boxSize: _v34
          }),
          label: _v27.DELETE_COPY,
          onClick: _v7,
          shouldRender: !!_v6
        },
        download: {
          icon: (0, _v1.jsx)(_v27.DOWNLOAD_ICON, {
            boxSize: _v34
          }),
          label: _v27.DOWNLOAD_COPY,
          onClick: _v10,
          isDisabled: _v9,
          shouldRender: !!_v8
        },
        editFile: {
          icon: (0, _v1.jsx)(_v27.EDIT_FILE_ICON, {
            boxSize: _v34
          }),
          label: _v27.EDIT_FILE_COPY,
          shouldRender: _v3 && !_v62
        },
        embed: {
          icon: (0, _v1.jsx)(_v27.EMBED_ICON, {
            boxSize: _v34
          }),
          label: _v27.EMBED_COPY,
          shouldRender: _v3 && !_v62
        },
        move: {
          icon: (0, _v1.jsx)(_v27.MOVE_ICON, {
            boxSize: _v34
          }),
          label: _v27.MOVE_COPY,
          onClick: _v14,
          shouldRender: !!_v13
        },
        addToShowcase: {
          icon: (0, _v1.jsx)(_v27.ADD_TO_SHOWCASE_ICON, {
            boxSize: _v34
          }),
          label: _v27.ADD_TO_SHOWCASE_COPY,
          onClick: _v16,
          shouldRender: !!_v15
        },
        addVideoRating: {
          icon: (0, _v1.jsx)(_v19.Feedback, {
            boxSize: _v34
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
          onClick: _v52,
          shouldRender: !!_v51
        },
        rename: {
          icon: (0, _v1.jsx)(_v27.RENAME_ICON, {
            boxSize: _v34
          }),
          label: _v27.RENAME_COPY,
          onClick: _v56,
          shouldRender: _v3 && !!_v56
        },
        makeCopy: {
          icon: (0, _v1.jsx)(_v8.CopyPortrait, {
            boxSize: _v34
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
          onClick: _v57,
          isDisabled: _v58,
          tooltip: _v58 ? _v59 : void 0,
          shouldRender: _v3 && !!_v57 && _v64.enable_copy_button_video
        },
        replace: {
          icon: (0, _v1.jsx)(_v27.REPLACE_ICON, {
            boxSize: _v34
          }),
          label: _v27.REPLACE_COPY,
          onClick: _v12,
          shouldRender: !!_v11 && !_v62
        },
        review: {
          icon: (0, _v1.jsx)(_v27.REVIEW_ICON, {
            boxSize: _v34
          }),
          label: _v27.REVIEW_COPY,
          shouldRender: _v26 && _v3 && !_v62 && !_v37
        },
        share: {
          badge: _v39 ? (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_share_upgrade_button",
            location: "video_menu"
          }) : void 0,
          icon: (0, _v1.jsx)(_v27.SHARE_ICON, {
            boxSize: _v34
          }),
          label: _v27.SHARE_COPY,
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
          icon: (0, _v1.jsx)(_v27.TOOLS_ICON, {
            boxSize: _v34
          }),
          label: _v27.TOOLS_COPY,
          shouldRender: _v3 && !_v62
        },
        translate: {
          icon: (0, _v1.jsx)(_v27.TRANSLATE_ICON, {
            boxSize: _v34
          }),
          label: _v27.TRANSLATE_COPY,
          onClick: _v50,
          shouldRender: _v49
        },
        videoEditor: {
          icon: (0, _v1.jsx)(_v27.VIDEO_EDITOR_ICON, {
            boxSize: _v34
          }),
          label: _v27.VIDEO_EDITOR_COPY,
          shouldRender: _v3 && !_v62
        },
        videoInfo: {
          icon: (0, _v1.jsx)(_v27.VIDEO_INFO_ICON, {
            boxSize: _v34
          }),
          label: _v27.VIDEO_INFO_COPY,
          onClick: _v35,
          shouldRender: _v36 && !_v62
        },
        viewVideoPage: {
          href: _v23,
          icon: (0, _v1.jsx)(_v27.VIEW_VIDEO_PAGE_ICON, {
            boxSize: _v34
          }),
          label: _v27.VIEW_VIDEO_PAGE_COPY,
          shouldRender: !!_v3
        }
      },
      _v71 = (0, _v25.createSection)([(0, _v1.jsx)(_v33, {
        onShare: _v5,
        privacy: _v54 ?? ""
      }, "video-access-copy")]),
      _v72 = [_v70.videoEditor.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.videoEditor
      }, "videoEditor"), _v70.review.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.review
      }, "review"), _v70.analytics.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.analytics
      }, "analytics"), _v70.translate.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.translate
      }, "translate"), _v70.addVideoRating.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.addVideoRating
      }, "addVideoRating")].filter(Boolean),
      _v73 = (0, _v25.createSection)([_v70.share.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.share
      }), _v70.copyLink.shouldRender && (0, _v1.jsx)(_v30.CopyAction, {
        ..._v70.copyLink
      }), _v70.createReviewLinks.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.createReviewLinks
      }), _v70.embed.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.embed
      })]),
      _v74 = (0, _v25.createSection)([_v70.viewVideoPage.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.viewVideoPage
      }), _v70.download.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.download
      }), _v70.editFile.shouldRender ? (0, _v1.jsxs)(_v29.MenuAction, {
        ..._v70.editFile,
        children: [_v70.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.rename
        }), _v70.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.makeCopy
        }), _v70.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.changeThumbnail
        }), _v70.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.replace
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v70.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.rename
        }), _v70.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.makeCopy
        }), _v70.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.changeThumbnail
        }), _v70.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.replace
        })]
      }), _v70.move.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.move
      }), _v70.tools.shouldRender && (_v72.length > 1 ? (0, _v1.jsx)(_v29.MenuAction, {
        ..._v70.tools,
        children: _v72
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: _v72
      })), _v70.addToShowcase.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.addToShowcase
      }), _v70.star.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.star
      }), _v70.videoInfo.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.videoInfo
      })]),
      _v75 = (0, _v25.createSection)([_v70.delete.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.delete
      })]),
      _v76 = (0, _v25.createSection)([_v4 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v15.Share, {
          boxSize: _v34
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
        badge: _v39 && (0, _v1.jsx)(_v22.UpgradeBadge, {
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
      }), ...(_v64.enable_review_link_submenu ? [!_v62 && _v3 && (_v19 || _v27 || _v21) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.REVIEW_LINK_ICON, {
          boxSize: _v34
        }),
        label: _v21 ? _v27.REVIEW_LINKS_COPY : _v27.REVIEW_LINK_COPY,
        children: [_v27 && (_v26 ? (0, _v1.jsx)(_v30.CopyAction, {
          label: _v27.COPY_REVIEW_LINK_COPY,
          content: _v26,
          onClick: _v28,
          badge: _v38 && !_v37 && (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_review_link_upgrade_button",
            location: "video_menu"
          })
        }) : (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v27.COPY_REVIEW_LINK_COPY,
          onClick: _v28
        })), _v21 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v34
          }),
          label: _v27.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v22
        }), (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v20,
          isDisabled: !_v19
        }), _v26 && _v27 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v34
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
            window.open(_v26, "_blank", "noopener,noreferrer"), _v29?.();
          }
        }), _v21 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v34
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
      }), _v62 && _v3 && _v27 && (_v26 ? (0, _v1.jsx)(_v30.CopyAction, {
        label: _v27.COPY_REVIEW_LINK_COPY,
        content: _v26,
        onClick: _v28
      }) : (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
          boxSize: _v34
        }),
        label: _v27.COPY_REVIEW_LINK_COPY,
        onClick: _v28
      })), _v62 && _v3 && _v21 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
          boxSize: _v34
        }),
        label: _v27.MANAGE_REVIEW_LINKS_COPY,
        onClick: _v22
      }), _v62 && _v3 && (_v19 || _v27 || _v21) && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
          boxSize: _v34
        }),
        label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
        onClick: _v20,
        isDisabled: !_v19
      }), _v62 && _v3 && _v26 && _v27 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v34
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
          window.open(_v26, "_blank", "noopener,noreferrer"), _v29?.();
        }
      }), _v62 && _v3 && _v21 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v34
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
      })] : [_v3 && _v19 && !_v26 && !_v21 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v13.LinkAdd, {
          boxSize: _v34
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
      }), _v3 && _v26 && _v27 && (0, _v1.jsx)(_v30.CopyAction, {
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
        badge: _v38 && !_v37 && (0, _v1.jsx)(_v22.UpgradeBadge, {
          noMargin: !0,
          name: "video_menu_review_link_upgrade_button",
          location: "video_menu"
        })
      }), _v3 && _v21 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v12.Link, {
          boxSize: _v34
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
      })]), _v32 && !_v62 && (0, _v1.jsx)(_v30.CopyAction, {
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
        content: _v32,
        onClick: _v33
      }), _v3 && _v24 && !_v62 && (0, _v1.jsx)(_v30.CopyAction, {
        icon: (0, _v1.jsx)(_v7.Code, {
          boxSize: _v34
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
        content: _v24,
        onClick: _v25
      })]),
      _v77 = (0, _v25.createSection)([_v30 && _v3 && !_v62 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v6.Analytics, {
          boxSize: _v34
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
        href: _v30,
        onClick: _v31
      }), _v26 && _v3 && !_v62 && !_v37 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v34
        }),
        label: (0, _v21.translate)({
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
      }), _v49 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v18.AiSparkles, {
          boxSize: _v34
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
        onClick: _v50
      }), _v51 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v19.Feedback, {
          boxSize: _v34
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
        onClick: _v52
      }, "add-video-rating")]),
      _v78 = _v70.rename.shouldRender || _v70.makeCopy.shouldRender || _v70.changeThumbnail.shouldRender || _v70.replace.shouldRender,
      _v79 = (0, _v25.createSection)([_v8 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v9.DownloadImport, {
          boxSize: _v34
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
      }), !_v62 && _v3 && _v78 && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: _v70.editFile.icon,
        label: _v70.editFile.label,
        children: [_v70.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.rename
        }), _v70.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.makeCopy
        }), _v70.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.changeThumbnail
        }), _v70.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.replace
        })]
      }), _v62 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v70.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.rename
        }), _v70.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.makeCopy
        }), _v70.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.changeThumbnail
        }), _v70.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.replace
        })]
      }), !_v3 && _v70.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.replace
      }), _v13 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v10.FolderOpen, {
          boxSize: _v34
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
          boxSize: _v34
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
      }), _v42 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v2.cloneElement)(_v44, {
          style: {
            width: _v34,
            height: _v34
          }
        }),
        label: _v45 || "",
        onClick: () => {
          _v43?.();
        }
      }), _v36 && !_v62 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v11.InfoCircle, {
          boxSize: _v34
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
        onClick: _v35
      })]),
      _v80 = (0, _v25.createSection)([_v6 && (0, _v1.jsx)(_v29.Action, {
        icon: _v41,
        label: _v40,
        onClick: _v7
      })]),
      _v81 = (0, _v25.createSection)([(0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v9.DownloadImport, {
          boxSize: _v34
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
      }, _v53)]),
      _v82 = !_v62 && _v3 && (_v19 || _v27 || _v21) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.REVIEW_LINK_ICON, {
          boxSize: _v34
        }),
        label: _v21 ? _v27.REVIEW_LINKS_COPY : _v27.REVIEW_LINK_COPY,
        children: [_v27 && (_v26 ? (0, _v1.jsx)(_v30.CopyAction, {
          label: _v27.COPY_REVIEW_LINK_COPY,
          content: _v26,
          onClick: _v28,
          badge: _v38 && !_v37 && (0, _v1.jsx)(_v22.UpgradeBadge, {
            noMargin: !0,
            name: "video_menu_review_link_upgrade_button",
            location: "video_menu"
          })
        }) : (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.COPY_REVIEW_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v27.COPY_REVIEW_LINK_COPY,
          onClick: _v28
        })), _v21 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.MANAGE_REVIEW_LINKS_ICON, {
            boxSize: _v34
          }),
          label: _v27.MANAGE_REVIEW_LINKS_COPY,
          onClick: _v22
        }), (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v27.CREATE_NEW_REVIEW_LINK_ICON, {
            boxSize: _v34
          }),
          label: _v27.CREATE_NEW_REVIEW_LINK_COPY,
          onClick: _v20,
          isDisabled: !_v19
        }), _v26 && _v27 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v34
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
            window.open(_v26, "_blank", "noopener,noreferrer"), _v29?.();
          }
        }), _v21 && (0, _v1.jsx)(_v29.Action, {
          icon: (0, _v1.jsx)(_v14.ReviewCheck, {
            boxSize: _v34
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
      _v83 = _v30 && _v3 && !_v62 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v6.Analytics, {
          boxSize: _v34
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
        href: _v30,
        onClick: _v31
      }),
      _v84 = _v3 && _v24 && !_v62 && (0, _v1.jsx)(_v30.CopyAction, {
        icon: (0, _v1.jsx)(_v7.Code, {
          boxSize: _v34
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
        content: _v24,
        onClick: _v25
      }),
      _v85 = (0, _v25.createSection)([_v70.share.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.share
      }), _v70.copyLink.shouldRender && (0, _v1.jsx)(_v30.CopyAction, {
        ..._v70.copyLink
      }), _v82, _v26 && _v3 && !_v19 && !_v27 && !_v21 && (0, _v1.jsx)(_v29.Action, {
        icon: (0, _v1.jsx)(_v14.ReviewCheck, {
          boxSize: _v34
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
          window.open(_v26, "_blank", "noopener,noreferrer"), _v29?.();
        }
      }), _v84]),
      _v86 = _v3 && _v78 && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: _v70.editFile.icon,
        label: _v70.editFile.label,
        children: [_v70.rename.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.rename
        }), _v70.makeCopy.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.makeCopy
        }), _v70.changeThumbnail.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.changeThumbnail
        }), _v70.replace.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.replace
        })]
      }),
      _v87 = (_v70.move.shouldRender || _v70.addToShowcase.shouldRender || _v70.star.shouldRender) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.ORGANIZE_ICON, {
          boxSize: _v34
        }),
        label: _v27.ORGANIZE_COPY,
        children: [_v70.move.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.move
        }), _v70.addToShowcase.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.addToShowcase
        }), _v70.star.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.star,
          icon: (0, _v2.cloneElement)(_v44, {
            style: {
              width: _v34,
              height: _v34
            }
          })
        })]
      }),
      _v88 = (!!_v83 || _v70.translate.shouldRender || _v70.addVideoRating.shouldRender) && (0, _v1.jsxs)(_v29.MenuAction, {
        icon: (0, _v1.jsx)(_v27.TOOLS_ICON, {
          boxSize: _v34
        }),
        label: _v27.TOOLS_COPY,
        children: [_v83, _v70.translate.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.translate
        }), _v70.addVideoRating.shouldRender && (0, _v1.jsx)(_v29.Action, {
          ..._v70.addVideoRating
        })]
      }),
      _v89 = _v61 ? (0, _v25.createSection)([_v88]) : (0, _v25.createSection)([_v83]),
      _v90 = [_v85, _v70.translate.shouldRender || _v70.addVideoRating.shouldRender ? (0, _v25.createSection)([_v88]) : (0, _v25.createSection)([_v83]), (0, _v25.createSection)([_v70.download.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.download
      }), _v86, _v87, _v70.videoInfo.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.videoInfo
      })]), (0, _v25.createSection)([_v70.delete.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.delete
      })])],
      _v91 = [_v85, _v89, (0, _v25.createSection)([_v86, _v87, _v70.download.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.download
      }), _v70.videoInfo.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.videoInfo
      })]), (0, _v25.createSection)([_v70.delete.shouldRender && (0, _v1.jsx)(_v29.Action, {
        ..._v70.delete
      })])],
      _v92 = _v53 ? [_v81] : _v69 ? ("treatment1" === _v68 ? _v90 : _v91).filter(_v0 => !!_v0.length) : _v63 ? [_v71, _v73, _v74, _v75].filter(_v0 => !!_v0.length) : [_v76, _v77, _v79, _v80].filter(_v0 => !!_v0.length),
      _v93 = _v60 && !_v62 && !_v53;
    !_v93 && _v66 && _v67(!1);
    let _v94 = (0, _v1.jsx)(_v24.ActionsMenu, {
      placement: _v46,
      usePortal: _v47,
      onClick: _v1,
      onOpenChange: _v67,
      renderContent: _v93 ? _v0 => (0, _v1.jsx)(_v3.PopoverAnchor, {
        children: _v0
      }) : void 0,
      disabled: _v0,
      size: _v2,
      zIndex: _v48,
      isV2: _v63,
      title: _v55,
      children: _v92.map((_v0, _v1) => (0, _v1.jsx)(_v25.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
    return _v93 ? (0, _v1.jsx)(_v26.VideoCardOverflowMenuIntroPopover, {
      isMenuOpen: _v66,
      enabled: _v69,
      children: (0, _v1.jsx)("div", {
        children: _v94
      })
    }) : _v94;
  }], 0);
}