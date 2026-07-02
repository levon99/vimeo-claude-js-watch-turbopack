{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v0 => (0, _v1.jsx)(_v7.Icon, {
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
  var _v9 = _v0.i(0),
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
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = ({
    onFailure: _v0,
    onSuccess: _v1
  }) => {
    let {
        settings: _v2
      } = (0, _v15.useOrionSettings)(),
      [_v3, _v4] = (0, _v2.useState)(null),
      [_v5, {
        called: _v6,
        callCount: _v7,
        data: _v8,
        error: _v9,
        loading: _v10
      }] = (0, _v42.useDeleteVideo)(),
      _v11 = (0, _v2.useRef)(0);
    return (0, _v2.useEffect)(() => {
      if (!_v3) return;
      let {
        uri: _v0,
        ownerId: _v1
      } = _v3;
      _v0 && _v1 && _v5({
        where: {
          videoId: (0, _v43.idFromUri)(_v0)
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
  _v0.s(["useDeleteVideo", 0, _v44], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = () => {
    switch ((0, _v49.usePageName)()) {
      case _v50.PAGE.SVV:
        return "single_video_view";
      case _v50.PAGE.ELIHP:
        return "viewer_home";
      case _v50.PAGE.EVENTS:
      case _v50.PAGE.MVV:
      case _v50.PAGE.SHOWCASES:
      case _v50.PAGE.LIBRARY:
      case _v50.PAGE.SHARED_WITH_ME:
        return "video_library";
      case _v50.PAGE.VLS:
      case _v50.PAGE.SEARCH:
        return "search_result_page";
      default:
        return;
    }
  };
  _v0.s(["usePageNameForDownloadModal", 0, _v51], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = _v0 => {
    let _v1 = _v0?.view;
    return "cold_storage" === _v1 || "purgatory" === _v1 ? _v0?.originalView ?? "nobody" : _v0?.view ?? "nobody";
  };
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
      _v19 = (0, _v38.useViewer)(),
      _v20 = (0, _v47.useNotification)(),
      _v21 = (0, _v49.usePageName)(),
      _v22 = (0, _v48.useColdStorageUpgradeLabel)(),
      _v23 = (0, _v65.useCopyVideoLinkToast)(),
      {
        trackVideoLinkCopied: _v24
      } = (0, _v17.useDistributionTracking)(),
      {
        getVideoShareLoopTrackingParams: _v25
      } = (0, _v55.useShareLoopTrackingParams)(),
      {
        reviewId: _v26,
        allowDownloads: _v27
      } = (0, _v2.useContext)(_v23.ReviewLinkContext),
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
      _v37 = (0, _v43.idFromUri)(_v36),
      _v38 = _v32?.connections?.versions?.currentUri?.split("/").pop(),
      {
        downloadConfig: _v39
      } = (0, _v26.useReviewLinkVideoDownloads)((0, _v43.idFromUri)(_v36), _v26, Number(_v38), !_v27, {
        Accept: "application/vnd.vimeo.*+json;version=3.4.1"
      }),
      _v40 = _v38 && _v27 ? _v39.files : _v28,
      {
        capabilities: _v41
      } = (0, _v13.useCapability)(["canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks", "canPerformBulkTranslations", "canManageTeamCollections", "canUseSentimentWidgets"], _v19?.teamUser?.ownerId),
      _v42 = !!_v41.canGenerateClipTextTranslation,
      _v43 = !!_v41.canGenerateClipTranslation,
      _v44 = !!_v32?.interactions?.legalHold?.uri,
      _v45 = !!_v32?.interactions?.edit?.uri,
      _v46 = (0, _v53.useManageShareAction)({
        canEdit: _v45,
        entityUri: _v36,
        location: "VL_grid_view_overflow",
        panel: "COPY_LINK_PANEL"
      }),
      _v47 = _v19?.teamUser?.ownerId ?? _v19?.user?.id,
      _v48 = !!_v41.hasMultipleReviewLinks && !_v41.hasProhibitMultipleReviewLinks,
      {
        canCreateReviewLink: _v49,
        canCopyReviewPageLink: _v50,
        canManageReviewLinks: _v51,
        reviewPageLink: _v52
      } = (0, _v59.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v48,
        hasMultipleReviewLinks: !!_v41.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v43.getVideoReviewPageUrl)(_v0, (0, _v43.idFromUri)(_v36)), [_v36])
      }),
      _v53 = _v45 && (_v43 || _v42) && !!_v41.canPerformBulkTranslations,
      _v54 = !!_v32?.interactions?.delete?.uri,
      _v55 = !!(_v32?.interactions?.invite?.uri || _v5),
      _v56 = !!_v32?.canBeReplaced && _v45 && "available" === _v35,
      _v57 = parseInt(_v36.split("/")[2]),
      _v58 = _v41.canManageTeamCollections && _v45,
      _v59 = _v31 && (0, _v70.getAnalyticsPageLinkForVideo)(_v31),
      _v60 = _v25(_v21, !!_v0.parentProject?.isPrivateToUser),
      _v61 = _v26 ? `${_v19?.vimeoHttpsUrl}/reviews/${_v26}${_v36}${_v60}` : `${_v30}${_v60}`,
      {
        openMoveModal: _v62
      } = (0, _v41.useMoveModal)(),
      {
        openShareFolderModal: _v63
      } = (0, _v54.useShareFolderModal)(),
      {
        openVideoPrivacyModal: _v64
      } = (0, _v61.useVideoPrivacyModal)(),
      _v65 = (0, _v62.useUpdateVideoPrivacyCache)(),
      {
        open: _v66
      } = (0, _v46.useDownloadModal)(),
      {
        openDeleteVideoModal: _v67,
        closeDeleteVideoModal: _v68
      } = (0, _v45.useDeleteVideoModal)(),
      {
        open: _v69,
        close: _v70
      } = (0, _v56.useUpsellModal)(),
      {
        trackColdStorageUxClicked: _v71,
        trackColdStorageUxDeletedVideo: _v72
      } = (0, _v16.useColdStorageTracking)(),
      {
        trackMyVideoMenuClicked: _v73
      } = (0, _v19.useVideoActionsTracking)(),
      _v74 = (0, _v16.deriveColdStorageRestrictions)({
        hasColdStorage: !!_v0.isColdStorage,
        hasColdPrivacy: !!_v0.isColdPrivacyRestricted
      }),
      _v75 = (0, _v2.useCallback)(_v0 => {
        _v21 !== _v50.PAGE.ELIHP && _v73({
          clipId: String((0, _v43.idFromUri)(_v36)),
          isPrivateToUser: _v0.parentProject?.isPrivateToUser,
          myVideoMenuAction: _v0
        });
      }, [_v21, _v73, _v36, _v0.parentProject?.isPrivateToUser]),
      {
        handleStarMenuState: _v76
      } = (0, _v71.useStarMenuItem)(),
      {
        isItemStarred: _v77,
        onStarClick: _v78,
        ..._v79
      } = _v76("video", _v0, !0),
      {
        openBulkAiModal: _v80
      } = (0, _v11.useBulkAiModal)(),
      {
        openBulkSentimentModal: _v81
      } = (0, _v12.useBulkSentimentModal)(),
      _v82 = !!_v41.canUseSentimentWidgets,
      _v83 = (0, _v69.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolderItems: _v84,
        revalidateRootItems: _v85
      } = (0, _v52.useRevalidate)(),
      {
        openAddToShowcaseModal: _v86,
        closeAddToShowcaseModal: _v87
      } = (0, _v64.useAddToShowcaseModal)(),
      {
        openThumbnailModal: _v88
      } = (() => {
        let {
          setModalState: _v0
        } = (0, _v2.useContext)(_v67.ThumbnailChangeModalDispatch);
        return {
          openThumbnailModal: _v0 => _v0({
            isOpen: !0,
            ..._v0
          })
        };
      })(),
      _v89 = (0, _v2.useCallback)(() => {
        _v63?.(_v36, "VL_grid_view_overflow"), _v40.BPAnalyticsV2.openVideoShare({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v63, _v36, _v1, _v0, _v19?.teamUser, _v13]),
      _v90 = (0, _v2.useCallback)(_v0 => {
        _v69({
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
          onClose: _v70
        });
      }, [_v70, _v69, _v21]),
      {
        isLocked: _v91,
        showLockedToast: _v92
      } = (0, _v60.useVideoMetadataLock)(_v0),
      _v93 = (0, _v2.useCallback)(() => {
        _v75("privacy"), _v71({
          element: "locked_video_menu_share",
          restrictions: _v74
        }), _v64({
          videoId: (0, _v43.idFromUri)(_v0.uri),
          videoName: _v0.name,
          currentPrivacy: _v72(_v0.privacy),
          currentPassword: _v0.password ?? "",
          currentEmbedPrivacy: _v0.privacy?.embed,
          filesSize: _v0.filesSize,
          onSuccess: ({
            privacy: _v0,
            password: _v1,
            embed: _v2
          }) => _v65({
            uri: _v0.uri,
            privacy: _v0,
            password: _v1,
            isColdStorage: !(0, _v62.shouldClearColdStorageLock)({
              isColdStorage: _v0.isColdStorage,
              privacy: _v0,
              embed: _v2 ?? _v0.privacy?.embed
            }) && void 0
          }),
          onEmbedSuccess: _v0 => {
            let _v1 = _v72(_v0.privacy),
              _v2 = (0, _v62.shouldClearColdStorageLock)({
                isColdStorage: _v0.isColdStorage,
                privacy: _v1,
                embed: _v0
              });
            return _v65({
              uri: _v0.uri,
              privacy: _v2 ? _v1 : void 0,
              embed: _v0,
              isColdStorage: !_v2 && void 0
            });
          }
        });
      }, [_v74, _v64, _v71, _v75, _v65, _v0.isColdStorage, _v0.name, _v0.password, _v0.filesSize, _v0.privacy, _v0.uri]),
      _v94 = (0, _v2.useCallback)(() => {
        (_v75("share"), _v91) ? _v92() : _v4 ? _v90("video_share") : _v89();
      }, [_v89, _v4, _v91, _v90, _v92, _v75]),
      _v95 = () => {
        _v1 ? _v84(_v1.uri) : _v85();
      },
      _v96 = (0, _v2.useCallback)((_v0, _v1) => {
        _v63?.(_v36, "VL_grid_view_overflow", _v0, _v1, _v95);
      }, [_v63, _v36]),
      _v97 = _v44({
        onFailure: () => {
          _v67({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v68.deleteVideoFailed
          });
        },
        onSuccess: () => {
          _v67({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v68.deleteVideoSuccess
          }), _v68(), _v10?.();
        }
      }),
      _v98 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
        _v67({
          isLoading: _v97.loading,
          numItemsToDelete: 1,
          onClickDelete: () => {
            _v0.isColdStorage && _v72({
              restrictions: _v74
            }), _v97.setVideo({
              title: _v0,
              uri: _v1,
              ownerId: _v2
            }), _v4 && _v5?.(), _v67({
              isLoading: !0,
              numItemsToDelete: 1,
              name: _v0
            });
          },
          onClickCancel() {
            _v68();
          },
          isOnLegalHold: _v3,
          name: _v0
        });
      },
      _v99 = _v51(),
      _v100 = (0, _v58.useReviewLinkCopiedToast)(),
      _v101 = (0, _v57.useCreateAndCopyVideoReviewLink)((0, _v2.useCallback)((_v0, _v1) => _v100(() => _v96("CREATE_REVIEW_LINK_MODAL", _v1)), [_v100, _v96])),
      _v102 = (0, _v2.useCallback)(_v0 => {
        _v20({
          content: _v0
        });
      }, [_v20]),
      {
        settings: _v103
      } = (0, _v15.useOrionSettings)(),
      _v104 = !!_v103?.bi_expiring_links_ux_enabled,
      {
        triggerReplace: _v105,
        replaceInput: _v106,
        replaceModal: _v107
      } = (0, _v34.useReplaceWithModal)(_v37, !!_v103?.new_replace_feature, _v0.metadata?.connections?.versions?.hasInteractive),
      _v108 = !!_v103?.enable_review_adoption_v2,
      _v109 = (0, _v66.useCreateAndCopySharingLink)("context_menu", _v0, () => _v20({
        content: (0, _v14.translate)({
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
      _v110 = (0, _v2.useCallback)(_v0 => {
        _v75("copy_link"), _v23({
          video: _v0,
          isSuccess: _v0,
          onManage: _v46
        }), _v0 && _v24({
          clipId: String((0, _v43.idFromUri)(_v0.uri)),
          source: "video_menu"
        }), _v40.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v23, _v0, _v1, _v19?.teamUser, _v13, _v75, _v24, _v46]),
      _v111 = (0, _v2.useCallback)(() => {
        _v75("copy_link");
        let _v0 = (0, _v43.idFromUri)(_v0?.uri),
          _v1 = _v25(_v21, !!_v0?.parentProject?.isPrivateToUser),
          _v2 = `${_v30}${_v1}`;
        _v109(_v0, _v1, _v2), _v40.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v75, _v0, _v30, _v25, _v21, _v109, _v13, _v19?.teamUser, _v1]),
      {
        isOpen: _v112,
        onOpen: _v113,
        onClose: _v114
      } = (0, _v6.useDisclosure)(),
      _v115 = (0, _v36.useCopyReviewLink)((0, _v43.idFromUri)(_v36), _v36),
      _v116 = (0, _v25.useCanUpSell)(),
      _v117 = (0, _v24.selectReviewLinkUriToCopy)(_v0.reviewLinks, _v116),
      {
        trackReviewLinkPromptDisplayed: _v118,
        trackReviewLinkPromptActionClicked: _v119
      } = (0, _v18.useMaximizeReviewAdoptionTracking)(),
      {
        hasSeenReviewLinkPrompt: _v120,
        markReviewLinkPromptSeen: _v121
      } = (0, _v37.useReviewLinkPromptSeen)(),
      _v122 = (0, _v2.useCallback)(() => {
        _v104 && _v45 ? _v111() : _v110((0, _v28.default)(_v61));
      }, [_v104, _v45, _v111, _v61, _v110]),
      _v123 = (0, _v2.useCallback)(() => {
        _v120 ? _v122() : (_v121(), _v118({
          surface: "video_menu",
          clipId: String((0, _v43.idFromUri)(_v36))
        }), _v113());
      }, [_v120, _v122, _v121, _v118, _v36, _v113]),
      _v124 = (0, _v2.useCallback)(() => {
        _v119({
          surface: "video_menu",
          reviewLinkPromptAction: "copy_regular_link",
          clipId: String((0, _v43.idFromUri)(_v36))
        }), _v114(), _v122();
      }, [_v119, _v36, _v114, _v122]),
      _v125 = (0, _v2.useCallback)(() => {
        _v119({
          surface: "video_menu",
          reviewLinkPromptAction: "copy_review_link",
          clipId: String((0, _v43.idFromUri)(_v36))
        }), _v114(), _v115(_v117);
      }, [_v119, _v36, _v114, _v115, _v117]),
      _v126 = (0, _v2.useCallback)(() => {
        if (_v75("copy_review_link"), _v40.BPAnalyticsV2.clickActionCopyReviewPageLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        }), _v2 && !_v41.hasMultipleReviewLinks) return void _v90("copy_review_link");
        let _v0 = (0, _v43.idFromUri)(_v36);
        _v52 ? _v100(_v117 ? () => _v96("CREATE_REVIEW_LINK_MODAL", _v117) : void 0) : _v101(_v0, _v36);
      }, [_v2, _v90, _v0, _v36, _v52, _v117, _v101, _v100, _v96, _v1, _v19?.teamUser, _v13, _v41.hasMultipleReviewLinks, _v75]),
      _v127 = (0, _v2.useCallback)(() => {
        _v75("copy_embed_code"), _v102(_v68.embedCodeCopySuccess), _v40.BPAnalyticsV2.clickCopyVideoEmbedCode({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v102, _v0, _v1, _v19?.teamUser, _v13, _v75]),
      _v128 = (0, _v2.useCallback)(() => {
        _v47 && (_v75("add_video_rating"), _v81({
          items: [{
            uri: _v36,
            name: _v0.name ?? "",
            duration: _v0.duration ?? 0,
            sentimentWidgets: _v0.embed?.sentimentWidgets
          }],
          userId: _v47,
          location: "video_card_menu",
          showUpgrade: !_v82,
          onSuccess: () => {
            _v1 ? _v84(_v1.uri) : _v85();
          }
        }));
      }, [_v75, _v81, _v36, _v0, _v47, _v1, _v82, _v84, _v85]),
      _v129 = (0, _v2.useCallback)(() => {
        _v75("add_to_showcase"), _v86({
          onClose: _v87,
          showcaseItems: [{
            id: (0, _v43.idFromUri)(_v36),
            name: _v0.name,
            type: "video"
          }],
          ownerId: (0, _v43.idFromUri)(_v0.user.uri),
          pageName: _v21,
          pageUrl: window.location.pathname
        });
      }, [_v86, _v87, _v36, _v0, _v21, _v75]);
    return isNaN((0, _v43.idFromUri)(_v36)) ? (0, _v1.jsx)(_v1.Fragment, {}) : _v0.isColdStorage ? (0, _v1.jsxs)(_v21.ActionsMenu, {
      placement: _v17.placement,
      usePortal: _v17.usePortal,
      onClick: _v7,
      disabled: _v17.disabled,
      size: _v17.size,
      title: _v0.name,
      zIndex: _v17.zIndex ?? _v50.ACTIONS_MENU_Z_INDEX,
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
        children: (0, _v1.jsx)(_v20.Action, {
          icon: (0, _v1.jsx)(_v8, {
            boxSize: _v18
          }),
          label: (0, _v14.translate)({
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
            _v71({
              element: "locked_video_menu_upgrade",
              restrictions: _v74
            }), _v69({
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
              onClose: _v70
            });
          }
        })
      }), _v55 && (0, _v1.jsx)(_v3.Box, {
        px: "sm",
        children: (0, _v1.jsx)(_v20.Action, {
          icon: (0, _v1.jsx)(_v9.Eye, {
            boxSize: _v18
          }),
          label: (0, _v14.translate)({
            singular: "Privacy",
            dictionary: {
              es: {
                singular: "Privacidad"
              },
              "de-DE": {
                singular: "Datenschutz"
              },
              "fr-FR": {
                singular: "Confidentialité "
              },
              "ja-JP": {
                singular: "プライバシー"
              },
              "ko-KR": {
                singular: "프라이버시"
              },
              "pt-BR": {
                singular: "Privacidade"
              },
              "zh-CN": {
                singular: "隐私"
              }
            }
          }),
          onClick: _v93
        })
      }), _v54 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.MenuDivider, {
          mt: "sm",
          mb: "sm"
        }), (0, _v1.jsx)(_v3.Box, {
          px: "sm",
          children: (0, _v1.jsx)(_v20.Action, {
            icon: (0, _v1.jsx)(_v10.TrashBin, {
              boxSize: _v18
            }),
            label: (0, _v14.translate)({
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
              _v75("delete"), _v71({
                element: "locked_video_menu_delete",
                restrictions: _v74
              }), _v98(_v0.name, _v0.uri, _v57, _v44, _v77, _v78);
            }
          })
        })]
      })]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v22.VideoMenu, {
        ..._v17,
        onClick: _v7,
        videoLink: _v61,
        videoEmbedCode: _v29?.html,
        onCopyVideoEmbedCode: _v127,
        reviewPageLink: _v52,
        canCopyReviewPageLink: _v50,
        onCopyReviewPageLink: _v126,
        onClickReviewPage: () => {
          _v75("open_review_page"), (0, _v39.sendClickReviewLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v34?.link ?? ""
          }), _v9?.();
        },
        analyticsPageLink: _v59,
        onClickAnalyticsPage: () => {
          _v75("analytics"), (0, _v39.sendClickAnalyticsLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v59 ?? ""
          }), _v8?.();
        },
        onCopyLink: _v110,
        onClickChangeThumbnail: () => {
          _v75("change_thumbnail"), _v88({
            clipId: (0, _v43.idFromUri)(_v36),
            showChooseExisting: !0,
            onSaveSuccess: () => _v1 ? _v84(_v1.uri) : _v85()
          });
        },
        onCopyLinkAsync: _v108 ? _v123 : _v104 && _v45 ? _v111 : void 0,
        canEdit: _v45,
        canReplace: _v56,
        onReplace: _v105,
        canShare: _v55,
        onShare: _v94,
        canDelete: _v54,
        onDelete: () => {
          _v75("delete"), _v98(_v0.name, _v0.uri, _v57, _v44, _v77, _v78);
        },
        canDownload: (_v45 || _v33?.download) && !!_v40,
        disableDownload: "uploading_error" === _v35,
        onDownload: _v40 ? () => {
          _v75("download"), _v66({
            files: _v40,
            pageName: _v99,
            videoId: (0, _v43.idFromUri)(_v36)
          });
        } : void 0,
        canUseBulkTranslation: _v53,
        handleTranslateVideo: () => {
          _v75("translate"), (0, _v31.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
            ...(0, _v33.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v29.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "sidebar",
              copy: "translate"
            }),
            ...(0, _v30.buildWebBpContext)({
              page_name: "video_library"
            }),
            ...(0, _v32.buildTeamBpContextFromTeamUser)(_v19?.teamUser)
          }, 1, {
            value: String(1),
            device_type: (0, _v27.default)()
          }), _v80({
            clipItems: [{
              videoId: String((0, _v43.idFromUri)(_v36)),
              duration: _v0.duration
            }],
            canTranslateText: _v42,
            canTranslateDubbing: _v43,
            onComplete: () => {
              let _v0 = _v19?.teamUser?.ownerId ?? _v19?.user?.id;
              _v0 && _v83(_v0);
            }
          });
        },
        canMove: _v54,
        onMove: () => {
          _v75("move"), _v62({
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
            teamOwnerId: (0, _v43.idFromUri)(_v0.user.uri)
          });
        },
        canAddToShowcase: _v58,
        onAddToShowcase: _v129,
        canAddVideoRating: _v45,
        onAddVideoRating: _v128,
        onMoreInfo: () => {
          _v75("video_info"), (0, _v39.sendOpenSidePanelEvent)({
            page: _v21,
            location: "video_card_menu"
          }), _v11?.();
        },
        canCreateReviewLink: _v49,
        onCreateReviewLink: () => {
          _v75("create_review_link"), _v96("CREATE_REVIEW_LINK_MODAL");
        },
        canManageReviewLinks: _v51,
        onManageReviewLinks: () => {
          _v75("manage_review_links"), _v96("REVIEW_LINKS_PANEL");
        },
        hasReviewPageLinkUpsell: !!_v2,
        hasShareUpsell: _v4,
        hasMultipleReviewLinks: _v3,
        onStarClick: _v78 ? () => {
          _v77 || _v75("add_to_starred"), _v78();
        } : void 0,
        ..._v79,
        zIndex: _v50.ACTIONS_MENU_Z_INDEX,
        canStar: !_v26,
        reviewId: _v26,
        viewPrivacy: _v33?.view,
        title: _v0.name,
        onRename: _v15 ? () => {
          _v75("rename"), _v15();
        } : void 0,
        onCopyVideo: _v16 && !_v0.disabledProperties?.duplicate && (0, _v63.isCopyableVideoContent)(_v0) ? () => {
          _v75("make_copy"), _v16();
        } : void 0,
        isCopyVideoDisabled: "available" !== _v35,
        copyVideoDisabledTooltip: (0, _v14.translate)({
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
      }), (0, _v1.jsx)(_v35.ShareForFeedbackModal, {
        isOpen: _v112,
        onClose: _v114,
        onCopyReviewLink: _v125,
        onCopyRegularLink: _v124,
        isCopyReviewLinkDisabled: !_v50 && !_v49
      }), _v106, _v107]
    });
  }], 0);
}