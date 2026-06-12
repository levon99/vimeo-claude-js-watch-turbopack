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
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = ({
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
      }] = (0, _v33.useDeleteVideo)(),
      _v11 = (0, _v2.useRef)(0);
    return (0, _v2.useEffect)(() => {
      if (!_v3) return;
      let {
        uri: _v0,
        ownerId: _v1
      } = _v3;
      _v0 && _v1 && _v5({
        where: {
          videoId: (0, _v34.idFromUri)(_v0)
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
  _v0.s(["useDeleteVideo", 0, _v35], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = () => {
    switch ((0, _v40.usePageName)()) {
      case _v41.PAGE.SVV:
        return "single_video_view";
      case _v41.PAGE.ELIHP:
        return "viewer_home";
      case _v41.PAGE.EVENTS:
      case _v41.PAGE.MVV:
      case _v41.PAGE.SHOWCASES:
      case _v41.PAGE.LIBRARY:
      case _v41.PAGE.SHARED_WITH_ME:
        return "video_library";
      case _v41.PAGE.VLS:
      case _v41.PAGE.SEARCH:
        return "search_result_page";
      default:
        return;
    }
  };
  _v0.s(["usePageNameForDownloadModal", 0, _v42], 0);
  var _v43 = _v0.i(0),
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
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
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
      _v19 = (0, _v29.useViewer)(),
      _v20 = (0, _v38.useNotification)(),
      _v21 = (0, _v40.usePageName)(),
      _v22 = (0, _v39.useColdStorageUpgradeLabel)(),
      _v23 = (0, _v54.useCopyVideoLinkToast)(),
      {
        trackVideoLinkCopied: _v24
      } = (0, _v16.useDistributionTracking)(),
      {
        getVideoShareLoopTrackingParams: _v25
      } = (0, _v46.useShareLoopTrackingParams)(),
      {
        reviewId: _v26,
        allowDownloads: _v27
      } = (0, _v2.useContext)(_v21.ReviewLinkContext),
      {
        download: _v28,
        embed: _v29,
        link: _v30,
        manageLink: _v31,
        metadata: _v32,
        privacy: _v33,
        reviewPage: _v34,
        status: _v35,
        uri: _v36
      } = _v0,
      _v37 = _v32?.connections?.versions?.currentUri?.split("/").pop(),
      {
        downloadConfig: _v38
      } = (0, _v22.useReviewLinkVideoDownloads)((0, _v34.idFromUri)(_v36), _v26, Number(_v37), !_v27, {
        Accept: "application/vnd.vimeo.*+json;version=3.4.1"
      }),
      _v39 = _v37 && _v27 ? _v38.files : _v28,
      {
        capabilities: _v40
      } = (0, _v12.useCapability)(["canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks", "canPerformBulkTranslations", "canManageTeamCollections", "canUseSentimentWidgets"], _v19?.teamUser?.ownerId),
      _v41 = !!_v40.canGenerateClipTextTranslation,
      _v42 = !!_v40.canGenerateClipTranslation,
      _v43 = !!_v32?.interactions?.legalHold?.uri,
      _v44 = !!_v32?.interactions?.edit?.uri,
      _v45 = (0, _v44.useManageShareAction)({
        canEdit: _v44,
        entityUri: _v36,
        location: "VL_grid_view_overflow",
        panel: "COPY_LINK_PANEL"
      }),
      _v46 = _v19?.teamUser?.ownerId ?? _v19?.user?.id,
      _v47 = !!_v40.hasMultipleReviewLinks && !_v40.hasProhibitMultipleReviewLinks,
      {
        canCreateReviewLink: _v48,
        canCopyReviewPageLink: _v49,
        canManageReviewLinks: _v50,
        reviewPageLink: _v51
      } = (0, _v50.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v47,
        hasMultipleReviewLinks: !!_v40.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v34.getVideoReviewPageUrl)(_v0, (0, _v34.idFromUri)(_v36)), [_v36])
      }),
      _v52 = _v44 && (_v42 || _v41) && !!_v40.canPerformBulkTranslations,
      _v53 = !!_v32?.interactions?.delete?.uri,
      _v54 = !!(_v32?.interactions?.invite?.uri || _v5),
      _v55 = parseInt(_v36.split("/")[2]),
      _v56 = _v40.canManageTeamCollections && _v44,
      _v57 = _v31 && (0, _v59.getAnalyticsPageLinkForVideo)(_v31),
      _v58 = _v25(_v21, !!_v0.parentProject?.isPrivateToUser),
      _v59 = _v26 ? `${_v19?.vimeoHttpsUrl}/reviews/${_v26}${_v36}${_v58}` : `${_v30}${_v58}`,
      {
        openMoveModal: _v60
      } = (0, _v32.useMoveModal)(),
      {
        openShareFolderModal: _v61
      } = (0, _v45.useShareFolderModal)(),
      {
        open: _v62
      } = (0, _v37.useDownloadModal)(),
      {
        openDeleteVideoModal: _v63,
        closeDeleteVideoModal: _v64
      } = (0, _v36.useDeleteVideoModal)(),
      {
        open: _v65,
        close: _v66
      } = (0, _v47.useUpsellModal)(),
      {
        trackColdStorageUxClicked: _v67,
        trackColdStorageUxDeletedVideo: _v68
      } = (0, _v15.useColdStorageTracking)(),
      {
        trackMyVideoMenuClicked: _v69
      } = (0, _v17.useVideoActionsTracking)(),
      _v70 = (0, _v15.deriveColdStorageRestrictions)({
        hasColdStorage: !!_v0.isColdStorage,
        hasColdPrivacy: !!_v0.isColdPrivacyRestricted
      }),
      _v71 = (0, _v2.useCallback)(_v0 => {
        _v21 !== _v41.PAGE.ELIHP && _v69({
          clipId: String((0, _v34.idFromUri)(_v36)),
          isPrivateToUser: _v0.parentProject?.isPrivateToUser,
          myVideoMenuAction: _v0
        });
      }, [_v21, _v69, _v36, _v0.parentProject?.isPrivateToUser]),
      {
        handleStarMenuState: _v72
      } = (0, _v60.useStarMenuItem)(),
      {
        isItemStarred: _v73,
        onStarClick: _v74,
        ..._v75
      } = _v72("video", _v0, !0),
      {
        openBulkAiModal: _v76
      } = (0, _v10.useBulkAiModal)(),
      {
        openBulkSentimentModal: _v77
      } = (0, _v11.useBulkSentimentModal)(),
      _v78 = !!_v40.canUseSentimentWidgets,
      _v79 = (0, _v58.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolderItems: _v80,
        revalidateRootItems: _v81
      } = (0, _v43.useRevalidate)(),
      {
        openAddToShowcaseModal: _v82,
        closeAddToShowcaseModal: _v83
      } = (0, _v53.useAddToShowcaseModal)(),
      {
        openThumbnailModal: _v84
      } = (() => {
        let {
          setModalState: _v0
        } = (0, _v2.useContext)(_v56.ThumbnailChangeModalDispatch);
        return {
          openThumbnailModal: _v0 => _v0({
            isOpen: !0,
            ..._v0
          })
        };
      })(),
      _v85 = (0, _v2.useCallback)(() => {
        _v61?.(_v36, "VL_grid_view_overflow"), _v31.BPAnalyticsV2.openVideoShare({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v61, _v36, _v1, _v0, _v19?.teamUser, _v13]),
      _v86 = (0, _v2.useCallback)(_v0 => {
        _v65({
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
          onClose: _v66
        });
      }, [_v66, _v65, _v21]),
      {
        isLocked: _v87,
        showLockedToast: _v88
      } = (0, _v51.useVideoMetadataLock)(_v0),
      _v89 = (0, _v2.useCallback)(() => {
        (_v71("share"), _v87) ? _v88() : _v4 ? _v86("video_share") : _v85();
      }, [_v85, _v4, _v87, _v86, _v88, _v71]),
      _v90 = () => {
        _v1 ? _v80(_v1.uri) : _v81();
      },
      _v91 = (0, _v2.useCallback)((_v0, _v1) => {
        _v61?.(_v36, "VL_grid_view_overflow", _v0, _v1, _v90);
      }, [_v61, _v36]),
      _v92 = _v35({
        onFailure: () => {
          _v63({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v57.deleteVideoFailed
          });
        },
        onSuccess: () => {
          _v63({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v57.deleteVideoSuccess
          }), _v64(), _v10?.();
        }
      }),
      _v93 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
        _v63({
          isLoading: _v92.loading,
          numItemsToDelete: 1,
          onClickDelete: () => {
            _v0.isColdStorage && _v68({
              restrictions: _v70
            }), _v92.setVideo({
              title: _v0,
              uri: _v1,
              ownerId: _v2
            }), _v4 && _v5?.(), _v63({
              isLoading: !0,
              numItemsToDelete: 1,
              name: _v0
            });
          },
          onClickCancel() {
            _v64();
          },
          isOnLegalHold: _v3,
          name: _v0
        });
      },
      _v94 = _v42(),
      _v95 = (0, _v49.useReviewLinkCopiedToast)(),
      _v96 = (0, _v48.useCreateAndCopyVideoReviewLink)((0, _v2.useCallback)((_v0, _v1) => _v95(() => _v91("CREATE_REVIEW_LINK_MODAL", _v1)), [_v95, _v91])),
      _v97 = (0, _v2.useCallback)(_v0 => {
        _v20({
          content: _v0
        });
      }, [_v20]),
      {
        settings: _v98
      } = (0, _v14.useOrionSettings)(),
      _v99 = !!_v98?.bi_expiring_links_ux_enabled,
      _v100 = (0, _v55.useCreateAndCopySharingLink)("context_menu", _v0, () => _v20({
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
      _v101 = (0, _v2.useCallback)(_v0 => {
        _v71("copy_link"), _v23({
          video: _v0,
          isSuccess: _v0,
          onManage: _v45
        }), _v0 && _v24({
          clipId: String((0, _v34.idFromUri)(_v0.uri)),
          source: "video_menu"
        }), _v31.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v23, _v0, _v1, _v19?.teamUser, _v13, _v71, _v24, _v45]),
      _v102 = (0, _v2.useCallback)(() => {
        _v71("copy_link");
        let _v0 = (0, _v34.idFromUri)(_v0?.uri),
          _v1 = _v25(_v21, !!_v0?.parentProject?.isPrivateToUser),
          _v2 = `${_v30}${_v1}`;
        _v100(_v0, _v1, _v2), _v31.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v71, _v0, _v30, _v25, _v21, _v100, _v13, _v19?.teamUser, _v1]),
      _v103 = (0, _v2.useCallback)(() => {
        if (_v71("copy_review_link"), _v31.BPAnalyticsV2.clickActionCopyReviewPageLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        }), _v2 && !_v40.hasMultipleReviewLinks) return void _v86("copy_review_link");
        let _v0 = (0, _v34.idFromUri)(_v36);
        if (_v51) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v95(_v0 ? () => _v91("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v96(_v0, _v36);
      }, [_v2, _v86, _v0, _v36, _v51, _v96, _v95, _v91, _v1, _v19?.teamUser, _v13, _v40.hasMultipleReviewLinks, _v71]),
      _v104 = (0, _v2.useCallback)(() => {
        _v71("copy_embed_code"), _v97(_v57.embedCodeCopySuccess), _v31.BPAnalyticsV2.clickCopyVideoEmbedCode({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v97, _v0, _v1, _v19?.teamUser, _v13, _v71]),
      _v105 = (0, _v2.useCallback)(() => {
        _v46 && (_v71("add_video_rating"), _v77({
          items: [{
            uri: _v36,
            name: _v0.name ?? "",
            duration: _v0.duration ?? 0,
            sentimentWidgets: _v0.embed?.sentimentWidgets
          }],
          userId: _v46,
          location: "video_card_menu",
          showUpgrade: !_v78,
          onSuccess: () => {
            _v1 ? _v80(_v1.uri) : _v81();
          }
        }));
      }, [_v71, _v77, _v36, _v0, _v46, _v1, _v78, _v80, _v81]),
      _v106 = (0, _v2.useCallback)(() => {
        _v71("add_to_showcase"), _v82({
          onClose: _v83,
          showcaseItems: [{
            id: (0, _v34.idFromUri)(_v36),
            name: _v0.name,
            type: "video"
          }],
          ownerId: (0, _v34.idFromUri)(_v0.user.uri),
          pageName: _v21,
          pageUrl: window.location.pathname
        });
      }, [_v82, _v83, _v36, _v0, _v21, _v71]);
    return isNaN((0, _v34.idFromUri)(_v36)) ? (0, _v1.jsx)(_v1.Fragment, {}) : _v0.isColdStorage ? (0, _v1.jsxs)(_v19.ActionsMenu, {
      placement: _v17.placement,
      usePortal: _v17.usePortal,
      onClick: _v7,
      disabled: _v17.disabled,
      size: _v17.size,
      title: _v0.name,
      zIndex: _v17.zIndex ?? _v41.ACTIONS_MENU_Z_INDEX,
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
        children: (0, _v1.jsx)(_v18.Action, {
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
            _v67({
              element: "locked_video_menu_upgrade",
              restrictions: _v70
            }), _v65({
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
              onClose: _v66
            });
          }
        })
      }), _v54 && (0, _v1.jsx)(_v3.Box, {
        px: "sm",
        children: (0, _v1.jsx)(_v18.Action, {
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
            _v71("share"), _v67({
              element: "locked_video_menu_share",
              restrictions: _v70
            }), _v85();
          }
        })
      }), _v53 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.MenuDivider, {
          mt: "sm",
          mb: "sm"
        }), (0, _v1.jsx)(_v3.Box, {
          px: "sm",
          children: (0, _v1.jsx)(_v18.Action, {
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
              _v71("delete"), _v67({
                element: "locked_video_menu_delete",
                restrictions: _v70
              }), _v93(_v0.name, _v0.uri, _v55, _v43, _v73, _v74);
            }
          })
        })]
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v20.VideoMenu, {
        ..._v17,
        onClick: _v7,
        videoLink: _v59,
        videoEmbedCode: _v29?.html,
        onCopyVideoEmbedCode: _v104,
        reviewPageLink: _v51,
        canCopyReviewPageLink: _v49,
        onCopyReviewPageLink: _v103,
        onClickReviewPage: () => {
          _v71("open_review_page"), (0, _v30.sendClickReviewLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v34?.link ?? ""
          }), _v9?.();
        },
        analyticsPageLink: _v57,
        onClickAnalyticsPage: () => {
          _v71("analytics"), (0, _v30.sendClickAnalyticsLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v57 ?? ""
          }), _v8?.();
        },
        onCopyLink: _v101,
        onClickChangeThumbnail: () => {
          _v71("change_thumbnail"), _v84({
            clipId: (0, _v34.idFromUri)(_v36),
            showChooseExisting: !0,
            onSaveSuccess: () => _v1 ? _v80(_v1.uri) : _v81()
          });
        },
        onCopyLinkAsync: _v99 && _v44 ? _v102 : void 0,
        canEdit: _v44,
        canShare: _v54,
        onShare: _v89,
        canDelete: _v53,
        onDelete: () => {
          _v71("delete"), _v93(_v0.name, _v0.uri, _v55, _v43, _v73, _v74);
        },
        canDownload: (_v44 || _v33?.download) && !!_v39,
        disableDownload: "uploading_error" === _v35,
        onDownload: _v39 ? () => {
          _v71("download"), _v62({
            files: _v39,
            pageName: _v94,
            videoId: (0, _v34.idFromUri)(_v36)
          });
        } : void 0,
        canUseBulkTranslation: _v52,
        handleTranslateVideo: () => {
          _v71("translate"), (0, _v26.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
            ...(0, _v28.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v24.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "sidebar",
              copy: "translate"
            }),
            ...(0, _v25.buildWebBpContext)({
              page_name: "video_library"
            }),
            ...(0, _v27.buildTeamBpContextFromTeamUser)(_v19?.teamUser)
          }, 1, {
            value: String(1),
            device_type: (0, _v23.default)()
          }), _v76({
            clipItems: [{
              videoId: String((0, _v34.idFromUri)(_v36)),
              duration: _v0.duration
            }],
            canTranslateText: _v41,
            canTranslateDubbing: _v42,
            onComplete: () => {
              let _v0 = _v19?.teamUser?.ownerId ?? _v19?.user?.id;
              _v0 && _v79(_v0);
            }
          });
        },
        canMove: _v53,
        onMove: () => {
          _v71("move"), _v60({
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
            teamOwnerId: (0, _v34.idFromUri)(_v0.user.uri)
          });
        },
        canAddToShowcase: _v56,
        onAddToShowcase: _v106,
        canAddVideoRating: _v44,
        onAddVideoRating: _v105,
        onMoreInfo: () => {
          _v71("video_info"), (0, _v30.sendOpenSidePanelEvent)({
            page: _v21,
            location: "video_card_menu"
          }), _v11?.();
        },
        canCreateReviewLink: _v48,
        onCreateReviewLink: () => {
          _v71("create_review_link"), _v91("CREATE_REVIEW_LINK_MODAL");
        },
        canManageReviewLinks: _v50,
        onManageReviewLinks: () => {
          _v71("manage_review_links"), _v91("REVIEW_LINKS_PANEL");
        },
        hasReviewPageLinkUpsell: !!_v2,
        hasShareUpsell: _v4,
        hasMultipleReviewLinks: _v3,
        onStarClick: _v74 ? () => {
          _v73 || _v71("add_to_starred"), _v74();
        } : void 0,
        ..._v75,
        zIndex: _v41.ACTIONS_MENU_Z_INDEX,
        canStar: !_v26,
        reviewId: _v26,
        viewPrivacy: _v33?.view,
        title: _v0.name,
        onRename: _v15 ? () => {
          _v71("rename"), _v15();
        } : void 0,
        onCopyVideo: _v16 && !_v0.disabledProperties?.duplicate && (0, _v52.isCopyableVideoContent)(_v0) ? () => {
          _v71("make_copy"), _v16();
        } : void 0,
        isCopyVideoDisabled: "available" !== _v35,
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