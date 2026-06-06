{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v0 => (0, _v1.jsx)(_v6.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.049 4c.72 0 1.398.345 1.822.93l2.698 3.72a2.261 2.261 0 0 1-.229 2.923l-7.746 7.766a2.25 2.25 0 0 1-3.188 0L2.66 11.573a2.261 2.261 0 0 1-.23-2.924l2.7-3.72A2.252 2.252 0 0 1 6.95 4H17.05Zm.4 2.295a.563.563 0 0 0-.9 0L14.083 9.59a.564.564 0 0 0 .45.903h4.928c.465 0 .73-.531.451-.903L17.45 6.295Z",
      fill: "currentColor"
    })
  });
  var _v8 = _v0.i(0),
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
  let _v34 = ({
    onFailure: _v0,
    onSuccess: _v1
  }) => {
    let {
        settings: _v2
      } = (0, _v14.useOrionSettings)(),
      [_v3, _v4] = (0, _v2.useState)(null),
      [_v5, {
        called: _v6,
        callCount: _v7,
        data: _v8,
        error: _v9,
        loading: _v10
      }] = (0, _v32.useDeleteVideo)(),
      _v11 = (0, _v2.useRef)(0);
    return (0, _v2.useEffect)(() => {
      if (!_v3) return;
      let {
        uri: _v0,
        ownerId: _v1
      } = _v3;
      _v0 && _v1 && _v5({
        where: {
          videoId: (0, _v33.idFromUri)(_v0)
        },
        ...(_v2.has_recently_deleted ? {
          variables: {
            sendToRecentlyDeleted: !0
          }
        } : {})
      });
    }, [_v5, _v2.has_recently_deleted, _v3]), (0, _v2.useEffect)(() => {
      !_v3 || !_v6 || _v10 || _v11.current !== _v7 && (_v11.current++, _v9 && (_v0(), _v4(null)), _v9 || (_v1(_v3), _v4(null)));
    }, [_v7, _v6, _v8, _v9, _v10, _v0, _v1, _v3]), {
      setVideo: _v4,
      loading: _v10
    };
  };
  _v0.s(["useDeleteVideo", 0, _v34], 0);
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = () => {
    switch ((0, _v39.usePageName)()) {
      case _v40.PAGE.SVV:
        return "single_video_view";
      case _v40.PAGE.ELIHP:
        return "viewer_home";
      case _v40.PAGE.EVENTS:
      case _v40.PAGE.MVV:
      case _v40.PAGE.SHOWCASES:
      case _v40.PAGE.LIBRARY:
      case _v40.PAGE.SHARED_WITH_ME:
        return "video_library";
      case _v40.PAGE.VLS:
      case _v40.PAGE.SEARCH:
        return "search_result_page";
      default:
        return;
    }
  };
  _v0.s(["usePageNameForDownloadModal", 0, _v41], 0);
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  _v0.s(["VideoMenu", 0, function ({
    video: _v0,
    parentFolder: _v1,
    hasReviewPageLinkUpsell: _v2,
    hasMultipleReviewLinks: _v3,
    hasShareUpsell: _v4,
    hasUpsellInShareModal: _v5,
    feature: _v6,
    onClick: _v7,
    onClickAnalyticsPage: _v8,
    onClickReviewPage: _v9,
    onDelete: _v10,
    onMoreInfo: _v11,
    onMoveSuccess: _v12,
    analytics: _v13,
    vimeoClickAnalytics: _v14,
    onRename: _v15,
    onCopyVideo: _v16,
    ..._v17
  }) {
    let _v18 = (0, _v5.rem)(24),
      _v19 = (0, _v28.useViewer)(),
      _v20 = (0, _v37.useNotification)(),
      _v21 = (0, _v39.usePageName)(),
      _v22 = (0, _v38.useColdStorageUpgradeLabel)(),
      _v23 = (0, _v53.useCopyVideoLinkToast)(),
      {
        getVideoShareLoopTrackingParams: _v24
      } = (0, _v45.useShareLoopTrackingParams)(),
      {
        reviewId: _v25,
        allowDownloads: _v26
      } = (0, _v2.useContext)(_v20.ReviewLinkContext),
      {
        download: _v27,
        embed: _v28,
        link: _v29,
        manageLink: _v30,
        metadata: _v31,
        privacy: _v32,
        reviewPage: _v33,
        status: _v34,
        uri: _v35
      } = _v0,
      _v36 = _v31?.connections?.versions?.currentUri?.split("/").pop(),
      {
        downloadConfig: _v37
      } = (0, _v21.useReviewLinkVideoDownloads)((0, _v33.idFromUri)(_v35), _v25, Number(_v36), !_v26, {
        Accept: "application/vnd.vimeo.*+json;version=3.4.1"
      }),
      _v38 = _v36 && _v26 ? _v37.files : _v27,
      {
        capabilities: _v39
      } = (0, _v12.useCapability)(["canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks", "canPerformBulkTranslations", "canManageTeamCollections", "canUseSentimentWidgets"], _v19?.teamUser?.ownerId),
      _v40 = !!_v39.canGenerateClipTextTranslation,
      _v41 = !!_v39.canGenerateClipTranslation,
      _v42 = !!_v31?.interactions?.legalHold?.uri,
      _v43 = !!_v31?.interactions?.edit?.uri,
      _v44 = (0, _v43.useManageShareAction)({
        canEdit: _v43,
        entityUri: _v35,
        location: "VL_grid_view_overflow",
        panel: "COPY_LINK_PANEL"
      }),
      _v45 = _v19?.teamUser?.ownerId ?? _v19?.user?.id,
      _v46 = !!_v39.hasMultipleReviewLinks && !_v39.hasProhibitMultipleReviewLinks,
      {
        canCreateReviewLink: _v47,
        canCopyReviewPageLink: _v48,
        canManageReviewLinks: _v49,
        reviewPageLink: _v50
      } = (0, _v49.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v46,
        hasMultipleReviewLinks: !!_v39.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v33.getVideoReviewPageUrl)(_v0, (0, _v33.idFromUri)(_v35)), [_v35])
      }),
      _v51 = _v43 && (_v41 || _v40) && !!_v39.canPerformBulkTranslations,
      _v52 = !!_v31?.interactions?.delete?.uri,
      _v53 = !!(_v31?.interactions?.invite?.uri || _v5),
      _v54 = parseInt(_v35.split("/")[2]),
      _v55 = _v39.canManageTeamCollections && _v43,
      _v56 = _v30 && (0, _v58.getAnalyticsPageLinkForVideo)(_v30),
      _v57 = _v24(_v21, !!_v0.parentProject?.isPrivateToUser),
      _v58 = _v25 ? `${_v19?.vimeoHttpsUrl}/reviews/${_v25}${_v35}${_v57}` : `${_v29}${_v57}`,
      {
        openMoveModal: _v59
      } = (0, _v31.useMoveModal)(),
      {
        openShareFolderModal: _v60
      } = (0, _v44.useShareFolderModal)(),
      {
        open: _v61
      } = (0, _v36.useDownloadModal)(),
      {
        openDeleteVideoModal: _v62,
        closeDeleteVideoModal: _v63
      } = (0, _v35.useDeleteVideoModal)(),
      {
        open: _v64,
        close: _v65
      } = (0, _v46.useUpsellModal)(),
      {
        trackColdStorageUxClicked: _v66,
        trackColdStorageUxDeletedVideo: _v67
      } = (0, _v15.useColdStorageTracking)(),
      {
        trackMyVideoMenuClicked: _v68
      } = (0, _v16.useVideoActionsTracking)(),
      _v69 = (0, _v2.useCallback)(_v0 => {
        _v21 !== _v40.PAGE.ELIHP && _v68({
          clipId: String((0, _v33.idFromUri)(_v35)),
          isPrivateToUser: _v0.parentProject?.isPrivateToUser,
          myVideoMenuAction: _v0
        });
      }, [_v21, _v68, _v35, _v0.parentProject?.isPrivateToUser]),
      {
        handleStarMenuState: _v70
      } = (0, _v59.useStarMenuItem)(),
      {
        isItemStarred: _v71,
        onStarClick: _v72,
        ..._v73
      } = _v70("video", _v0, !0),
      {
        openBulkAiModal: _v74
      } = (0, _v10.useBulkAiModal)(),
      {
        openBulkSentimentModal: _v75
      } = (0, _v11.useBulkSentimentModal)(),
      _v76 = !!_v39.canUseSentimentWidgets,
      _v77 = (0, _v57.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolderItems: _v78,
        revalidateRootItems: _v79
      } = (0, _v42.useRevalidate)(),
      {
        openAddToShowcaseModal: _v80,
        closeAddToShowcaseModal: _v81
      } = (0, _v52.useAddToShowcaseModal)(),
      {
        openThumbnailModal: _v82
      } = (() => {
        let {
          setModalState: _v0
        } = (0, _v2.useContext)(_v55.ThumbnailChangeModalDispatch);
        return {
          openThumbnailModal: _v0 => _v0({
            isOpen: !0,
            ..._v0
          })
        };
      })(),
      _v83 = (0, _v2.useCallback)(() => {
        _v60?.(_v35, "VL_grid_view_overflow"), _v30.BPAnalyticsV2.openVideoShare({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v60, _v35, _v1, _v0, _v19?.teamUser, _v13]),
      _v84 = (0, _v2.useCallback)(_v0 => {
        _v64({
          tracking: {
            params: {
              feature: "video-card",
              location: "video_actions_menu",
              page: _v21,
              upsell_name: _v0
            },
            paywallTracking: {
              paywallTrigger: `video_actions_menu_${_v0}_button`,
              paywallLocation: "video_actions_menu",
              paywallType: "popup",
              paywallFeature: "collaboration"
            }
          },
          onClose: _v65
        });
      }, [_v65, _v64, _v21]),
      {
        isLocked: _v85,
        showLockedToast: _v86
      } = (0, _v50.useVideoMetadataLock)(_v0),
      _v87 = (0, _v2.useCallback)(() => {
        (_v69("share"), _v85) ? _v86() : _v4 ? _v84("video_share") : _v83();
      }, [_v83, _v4, _v85, _v84, _v86, _v69]),
      _v88 = () => {
        _v1 ? _v78(_v1.uri) : _v79();
      },
      _v89 = (0, _v2.useCallback)((_v0, _v1) => {
        _v60?.(_v35, "VL_grid_view_overflow", _v0, _v1, _v88);
      }, [_v60, _v35]),
      _v90 = _v34({
        onFailure: () => {
          _v62({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v56.deleteVideoFailed
          });
        },
        onSuccess: () => {
          _v62({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v56.deleteVideoSuccess
          }), _v63(), _v10?.();
        }
      }),
      _v91 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
        _v62({
          isLoading: _v90.loading,
          numItemsToDelete: 1,
          onClickDelete: () => {
            _v0.isColdStorage && _v67(), _v90.setVideo({
              title: _v0,
              uri: _v1,
              ownerId: _v2
            }), _v4 && _v5?.(), _v62({
              isLoading: !0,
              numItemsToDelete: 1,
              name: _v0
            });
          },
          onClickCancel() {
            _v63();
          },
          isOnLegalHold: _v3,
          name: _v0
        });
      },
      _v92 = _v41(),
      _v93 = (0, _v48.useReviewLinkCopiedToast)(),
      _v94 = (0, _v47.useCreateAndCopyVideoReviewLink)((0, _v2.useCallback)((_v0, _v1) => _v93(() => _v89("CREATE_REVIEW_LINK_MODAL", _v1)), [_v93, _v89])),
      _v95 = (0, _v2.useCallback)(_v0 => {
        _v20({
          content: _v0
        });
      }, [_v20]),
      {
        settings: _v96
      } = (0, _v14.useOrionSettings)(),
      _v97 = !!_v96?.bi_expiring_links_ux_enabled,
      _v98 = (0, _v54.useCreateAndCopySharingLink)("context_menu", _v0, () => _v20({
        content: (0, _v13.translate)({
          singular: "Link failed to copy",
          dictionary: {
            es: {
              singular: "No se pudo copiar el enlace"
            },
            "de-DE": {
              singular: "Link wurde nicht kopiert"
            },
            "fr-FR": {
              singular: "Impossible de copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピーできませんでした"
            },
            "ko-KR": {
              singular: "링크 복사를 실패했습니다"
            },
            "pt-BR": {
              singular: "Falha ao copiar o link"
            },
            "zh-CN": {
              singular: "链接复制失败"
            }
          }
        }),
        status: "error"
      })),
      _v99 = (0, _v2.useCallback)(() => {
        _v69("copy_link"), _v23({
          video: _v0,
          onManage: _v44
        }), _v30.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v23, _v0, _v1, _v19?.teamUser, _v13, _v69, _v44]),
      _v100 = (0, _v2.useCallback)(() => {
        _v69("copy_link");
        let _v0 = (0, _v33.idFromUri)(_v0?.uri),
          _v1 = _v24(_v21, !!_v0?.parentProject?.isPrivateToUser),
          _v2 = `${_v29}${_v1}`;
        _v98(_v0, _v1, _v2), _v30.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v69, _v0, _v29, _v24, _v21, _v98, _v13, _v19?.teamUser, _v1]),
      _v101 = (0, _v2.useCallback)(() => {
        if (_v69("copy_review_link"), _v30.BPAnalyticsV2.clickActionCopyReviewPageLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        }), _v2 && !_v39.hasMultipleReviewLinks) return void _v84("copy_review_link");
        let _v0 = (0, _v33.idFromUri)(_v35);
        if (_v50) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v93(_v0 ? () => _v89("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v94(_v0, _v35);
      }, [_v2, _v84, _v0, _v35, _v50, _v94, _v93, _v89, _v1, _v19?.teamUser, _v13, _v39.hasMultipleReviewLinks, _v69]),
      _v102 = (0, _v2.useCallback)(() => {
        _v69("copy_embed_code"), _v95(_v56.embedCodeCopySuccess), _v30.BPAnalyticsV2.clickCopyVideoEmbedCode({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v95, _v0, _v1, _v19?.teamUser, _v13, _v69]),
      _v103 = (0, _v2.useCallback)(() => {
        _v45 && (_v69("add_video_rating"), _v75({
          items: [{
            uri: _v35,
            name: _v0.name ?? "",
            duration: _v0.duration ?? 0,
            sentimentWidgets: _v0.embed?.sentimentWidgets
          }],
          userId: _v45,
          location: "video_card_menu",
          showUpgrade: !_v76,
          onSuccess: () => {
            _v1 ? _v78(_v1.uri) : _v79();
          }
        }));
      }, [_v69, _v75, _v35, _v0, _v45, _v1, _v76, _v78, _v79]),
      _v104 = (0, _v2.useCallback)(() => {
        _v69("add_to_showcase"), _v80({
          onClose: _v81,
          showcaseItems: [{
            id: (0, _v33.idFromUri)(_v35),
            name: _v0.name,
            type: "video"
          }],
          ownerId: (0, _v33.idFromUri)(_v0.user.uri),
          pageName: _v21,
          pageUrl: window.location.pathname
        });
      }, [_v80, _v81, _v35, _v0, _v21, _v69]);
    return isNaN((0, _v33.idFromUri)(_v35)) ? (0, _v1.jsx)(_v1.Fragment, {}) : _v0.isColdStorage ? (0, _v1.jsxs)(_v18.ActionsMenu, {
      placement: _v17.placement,
      usePortal: _v17.usePortal,
      onClick: _v7,
      disabled: _v17.disabled,
      size: _v17.size,
      title: _v0.name,
      zIndex: _v17.zIndex ?? _v40.ACTIONS_MENU_Z_INDEX,
      children: [(0, _v1.jsx)(_v3.Box, {
        mx: "sm",
        background: "purple.500",
        color: "white",
        borderRadius: "md",
        overflow: "hidden",
        sx: {
          '& [class*="MenuItem"], & [role="menuitem"]': {
            background: "transparent",
            color: "white",
            borderRadius: "md"
          },
          '& [class*="MenuItem"]:hover, & [role="menuitem"]:hover, & [class*="MenuItem"]:focus, & [role="menuitem"]:focus': {
            background: "purple.600",
            color: "white"
          },
          "& .chakra-icon": {
            color: "white"
          }
        },
        children: (0, _v1.jsx)(_v17.Action, {
          icon: (0, _v1.jsx)(_v7, {
            boxSize: _v18
          }),
          label: (0, _v13.translate)({
            singular: "Unlock with {PLAN}",
            replacements: {
              PLAN: _v22
            },
            dictionary: {
              es: {
                singular: "Desbloquear con {PLAN}"
              },
              "de-DE": {
                singular: "Mit {PLAN} freischalten"
              },
              "fr-FR": {
                singular: "Débloquer avec {PLAN}"
              },
              "ja-JP": {
                singular: "{PLAN}でロックを解除"
              },
              "ko-KR": {
                singular: "{PLAN}로 잠금 해제"
              },
              "pt-BR": {
                singular: "Desbloquear com {PLAN}"
              },
              "zh-CN": {
                singular: "使用 {PLAN} 解锁"
              }
            }
          }),
          onClick: () => {
            _v66({
              element: "locked_video_menu_upgrade"
            }), _v64({
              tracking: {
                params: {
                  feature: "cold_storage",
                  location: "video_actions_menu",
                  page: _v21,
                  upsell_name: "cold_storage_unlock_with_advanced"
                },
                paywallTracking: {
                  paywallTrigger: "cold_storage_video_actions_menu_unlock",
                  paywallLocation: "video_actions_menu",
                  paywallType: "popup",
                  paywallFeature: "storage_limit"
                }
              },
              onClose: _v65
            });
          }
        })
      }), _v53 && (0, _v1.jsx)(_v3.Box, {
        px: "sm",
        children: (0, _v1.jsx)(_v17.Action, {
          icon: (0, _v1.jsx)(_v8.Share, {
            boxSize: _v18
          }),
          label: (0, _v13.translate)({
            singular: "Share and privacy",
            dictionary: {
              es: {
                singular: "Compartir y privacidad"
              },
              "de-DE": {
                singular: "Freigabe und Datenschutz"
              },
              "fr-FR": {
                singular: "Partage et confidentialité"
              },
              "ja-JP": {
                singular: "共有とプライバシー"
              },
              "ko-KR": {
                singular: "공유 및 공개 설정"
              },
              "pt-BR": {
                singular: "Compartilhamento e privacidade"
              },
              "zh-CN": {
                singular: "共享与隐私"
              }
            }
          }),
          onClick: () => {
            _v69("share"), _v66({
              element: "locked_video_menu_share"
            }), _v83();
          }
        })
      }), _v52 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.MenuDivider, {
          mt: "sm",
          mb: "sm"
        }), (0, _v1.jsx)(_v3.Box, {
          px: "sm",
          children: (0, _v1.jsx)(_v17.Action, {
            icon: (0, _v1.jsx)(_v9.TrashBin, {
              boxSize: _v18
            }),
            label: (0, _v13.translate)({
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
            onClick: () => {
              _v69("delete"), _v66({
                element: "locked_video_menu_delete"
              }), _v91(_v0.name, _v0.uri, _v54, _v42, _v71, _v72);
            }
          })
        })]
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v19.VideoMenu, {
        ..._v17,
        onClick: _v7,
        videoLink: _v58,
        videoEmbedCode: _v28?.html,
        onCopyVideoEmbedCode: _v102,
        reviewPageLink: _v50,
        canCopyReviewPageLink: _v48,
        onCopyReviewPageLink: _v101,
        onClickReviewPage: () => {
          _v69("open_review_page"), (0, _v29.sendClickReviewLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v33?.link ?? ""
          }), _v9?.();
        },
        analyticsPageLink: _v56,
        onClickAnalyticsPage: () => {
          _v69("analytics"), (0, _v29.sendClickAnalyticsLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v56 ?? ""
          }), _v8?.();
        },
        onCopyLink: _v99,
        onClickChangeThumbnail: () => {
          _v69("change_thumbnail"), _v82({
            clipId: (0, _v33.idFromUri)(_v35),
            showChooseExisting: !0,
            onSaveSuccess: () => _v1 ? _v78(_v1.uri) : _v79()
          });
        },
        onCopyLinkAsync: _v97 && _v43 ? _v100 : void 0,
        canEdit: _v43,
        canShare: _v53,
        onShare: _v87,
        canDelete: _v52,
        onDelete: () => {
          _v69("delete"), _v91(_v0.name, _v0.uri, _v54, _v42, _v71, _v72);
        },
        canDownload: (_v43 || _v32?.download) && !!_v38,
        disableDownload: "uploading_error" === _v34,
        onDownload: _v38 ? () => {
          _v69("download"), _v61({
            files: _v38,
            pageName: _v92,
            videoId: (0, _v33.idFromUri)(_v35)
          });
        } : void 0,
        canUseBulkTranslation: _v51,
        handleTranslateVideo: () => {
          _v69("translate"), (0, _v25.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
            ...(0, _v27.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v23.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "sidebar",
              copy: "translate"
            }),
            ...(0, _v24.buildWebBpContext)({
              page_name: "video_library"
            }),
            ...(0, _v26.buildTeamBpContextFromTeamUser)(_v19?.teamUser)
          }, 1, {
            value: String(1),
            device_type: (0, _v22.default)()
          }), _v74({
            clipItems: [{
              videoId: String((0, _v33.idFromUri)(_v35)),
              duration: _v0.duration
            }],
            canTranslateText: _v40,
            canTranslateDubbing: _v41,
            onComplete: () => {
              let _v0 = _v19?.teamUser?.ownerId ?? _v19?.user?.id;
              _v0 && _v77(_v0);
            }
          });
        },
        canMove: _v52,
        onMove: () => {
          _v69("move"), _v59({
            activeFolderURI: _v1?.uri,
            feature: _v6,
            location: "video_card_menu",
            items: [{
              name: _v0.name,
              parentFolder: _v1,
              type: "video",
              uri: _v0.uri
            }],
            onMoveSuccess: ({
              selectedDestination: _v0,
              items: _v1,
              destinationWorkspaceId: _v2,
              destinationWorkspaceName: _v3
            }) => {
              _v12?.({
                selectedDestination: _v0,
                video: _v1[0],
                destinationWorkspaceId: _v2,
                destinationWorkspaceName: _v3
              });
            },
            teamOwnerId: (0, _v33.idFromUri)(_v0.user.uri)
          });
        },
        canAddToShowcase: _v55,
        onAddToShowcase: _v104,
        canAddVideoRating: _v43,
        onAddVideoRating: _v103,
        onMoreInfo: () => {
          _v69("video_info"), (0, _v29.sendOpenSidePanelEvent)({
            page: _v21,
            location: "video_card_menu"
          }), _v11?.();
        },
        canCreateReviewLink: _v47,
        onCreateReviewLink: () => {
          _v69("create_review_link"), _v89("CREATE_REVIEW_LINK_MODAL");
        },
        canManageReviewLinks: _v49,
        onManageReviewLinks: () => {
          _v69("manage_review_links"), _v89("REVIEW_LINKS_PANEL");
        },
        hasReviewPageLinkUpsell: !!_v2,
        hasShareUpsell: _v4,
        hasMultipleReviewLinks: _v3,
        onStarClick: _v72 ? () => {
          _v71 || _v69("add_to_starred"), _v72();
        } : void 0,
        ..._v73,
        zIndex: _v40.ACTIONS_MENU_Z_INDEX,
        canStar: !_v25,
        reviewId: _v25,
        viewPrivacy: _v32?.view,
        title: _v0.name,
        onRename: _v15 ? () => {
          _v69("rename"), _v15();
        } : void 0,
        onCopyVideo: _v16 && !_v0.disabledProperties?.duplicate && (0, _v51.isCopyableVideoContent)(_v0) ? () => {
          _v69("make_copy"), _v16();
        } : void 0,
        isCopyVideoDisabled: "available" !== _v34,
        copyVideoDisabledTooltip: (0, _v13.translate)({
          singular: "Available once this video finishes processing",
          dictionary: {
            es: {
              singular: "Disponible una vez que este vídeo termine de procesarse"
            },
            "de-DE": {
              singular: "Verfügbar, sobald die Verarbeitung dieses Videos abgeschlossen ist"
            },
            "fr-FR": {
              singular: "Disponible une fois que cette vidéo aura fini d'être traitée."
            },
            "ja-JP": {
              singular: "この動画の処理が完了次第、利用可能になります。"
            },
            "ko-KR": {
              singular: "이 비디오는 처리 완료 후 이용할 수 있습니다."
            },
            "pt-BR": {
              singular: "Disponível assim que o processamento deste vídeo for concluído."
            },
            "zh-CN": {
              singular: "该视频处理完成后可用"
            }
          }
        })
      })
    });
  }], 0);
}