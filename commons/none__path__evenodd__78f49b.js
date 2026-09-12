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
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = ({
    onFailure: _v0,
    onSuccess: _v1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)(null),
      [_v4, {
        called: _v5,
        callCount: _v6,
        data: _v7,
        error: _v8,
        loading: _v9
      }] = (0, _v37.useDeleteVideo)(),
      _v10 = (0, _v2.useRef)(0);
    return (0, _v2.useEffect)(() => {
      if (!_v2) return;
      let {
        uri: _v0,
        ownerId: _v1
      } = _v2;
      _v0 && _v1 && _v4({
        where: {
          videoId: (0, _v38.idFromUri)(_v0)
        },
        ...{
          variables: {
            sendToRecentlyDeleted: !0
          }
        }
      });
    }, [_v4, _v2]), (0, _v2.useEffect)(() => {
      !_v2 || !_v5 || _v9 || _v10.current !== _v6 && (_v10.current++, _v8 && (_v0(), _v3(null)), _v8 || (_v1(_v2), _v3(null)));
    }, [_v6, _v5, _v7, _v8, _v9, _v0, _v1, _v2]), {
      setVideo: _v3,
      loading: _v9
    };
  };
  _v0.s(["useDeleteVideo", 0, _v39], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = () => {
    switch ((0, _v44.usePageName)()) {
      case _v45.PAGE.SVV:
        return "single_video_view";
      case _v45.PAGE.ELIHP:
        return "viewer_home";
      case _v45.PAGE.EVENTS:
      case _v45.PAGE.MVV:
      case _v45.PAGE.SHOWCASES:
      case _v45.PAGE.LIBRARY:
      case _v45.PAGE.SHARED_WITH_ME:
        return "video_library";
      case _v45.PAGE.VLS:
      case _v45.PAGE.SEARCH:
        return "search_result_page";
      default:
        return;
    }
  };
  _v0.s(["usePageNameForDownloadModal", 0, _v46], 0);
  var _v47 = _v0.i(0),
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
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  let _v68 = _v0 => {
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
      _v19 = (0, _v33.useViewer)(),
      _v20 = (0, _v42.useNotification)(),
      _v21 = (0, _v44.usePageName)(),
      _v22 = (0, _v43.useColdStorageUpgradeLabel)(),
      _v23 = (0, _v60.useCopyVideoLinkToast)(),
      _v24 = (0, _v62.useRegistrationRequiredToast)(),
      {
        trackVideoLinkCopied: _v25
      } = (0, _v16.useDistributionTracking)(),
      {
        getVideoShareLoopTrackingParams: _v26
      } = (0, _v50.useShareLoopTrackingParams)(),
      {
        reviewId: _v27,
        allowDownloads: _v28
      } = (0, _v2.useContext)(_v21.ReviewLinkContext),
      {
        download: _v29,
        embed: _v30,
        link: _v31,
        manageLink: _v32,
        metadata: _v33,
        privacy: _v34,
        reviewPage: _v35,
        status: _v36,
        uri: _v37
      } = _v0,
      _v38 = (0, _v38.idFromUri)(_v37),
      _v39 = _v33?.connections?.versions?.currentUri?.split("/").pop(),
      {
        downloadConfig: _v40
      } = (0, _v24.useReviewLinkVideoDownloads)((0, _v38.idFromUri)(_v37), _v27, Number(_v39), !_v28, {
        Accept: "application/vnd.vimeo.*+json;version=3.4.1"
      }),
      _v41 = _v39 && _v28 ? _v40.files : _v29,
      {
        capabilities: _v42
      } = (0, _v12.useCapability)(["canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks", "canPerformBulkTranslations", "canManageTeamCollections", "canUseSentimentWidgets", "hasEnterprise"], _v19?.teamUser?.ownerId),
      _v43 = !!_v42.canGenerateClipTextTranslation,
      _v44 = !!_v42.canGenerateClipTranslation,
      _v45 = !!_v33?.interactions?.legalHold?.uri,
      _v46 = !!_v33?.interactions?.edit?.uri,
      _v47 = (0, _v48.useManageShareAction)({
        canEdit: _v46,
        entityUri: _v37,
        location: "VL_grid_view_overflow",
        panel: "COPY_LINK_PANEL"
      }),
      _v48 = _v19?.teamUser?.ownerId ?? _v19?.user?.id,
      _v49 = !!_v42.hasMultipleReviewLinks && !_v42.hasProhibitMultipleReviewLinks,
      _v50 = (0, _v23.useCanUpSell)(),
      _v51 = (0, _v2.useMemo)(() => (0, _v22.selectReviewLinkUriToCopy)(_v0.reviewLinks, _v50), [_v0.reviewLinks, _v50]),
      {
        canCreateReviewLink: _v52,
        canCopyReviewPageLink: _v53,
        canManageReviewLinks: _v54,
        reviewPageLink: _v55
      } = (0, _v54.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v49,
        hasMultipleReviewLinks: !!_v42.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v38.getVideoReviewPageUrl)(_v0, (0, _v38.idFromUri)(_v37)), [_v37])
      }),
      _v56 = _v46 && (_v44 || _v43) && !!_v42.canPerformBulkTranslations,
      _v57 = !!_v33?.interactions?.delete?.uri,
      _v58 = !!(_v33?.interactions?.invite?.uri || _v5),
      _v59 = !!_v33?.canBeReplaced && _v46 && "available" === _v36,
      _v60 = parseInt(_v37.split("/")[2]),
      _v61 = _v42.canManageTeamCollections && _v46,
      _v62 = _v32 && (0, _v66.getAnalyticsPageLinkForVideo)(_v32),
      _v63 = _v26(_v21, !!_v0.parentProject?.isPrivateToUser),
      _v64 = _v27 ? `${_v19?.vimeoHttpsUrl}/reviews/${_v27}${_v37}${_v63}` : `${_v31}${_v63}`,
      {
        openMoveModal: _v65
      } = (0, _v36.useMoveModal)(),
      {
        openShareFolderModal: _v66
      } = (0, _v49.useShareFolderModal)(),
      {
        openVideoPrivacyModal: _v67
      } = (0, _v56.useVideoPrivacyModal)(),
      _v68 = (0, _v57.useUpdateVideoPrivacyCache)(),
      {
        open: _v69
      } = (0, _v41.useDownloadModal)(),
      {
        openDeleteVideoModal: _v70,
        closeDeleteVideoModal: _v71
      } = (0, _v40.useDeleteVideoModal)(),
      {
        open: _v72,
        close: _v73
      } = (0, _v51.useUpsellModal)(),
      {
        trackColdStorageUxClicked: _v74,
        trackColdStorageUxDeletedVideo: _v75
      } = (0, _v15.useColdStorageTracking)(),
      {
        trackMyVideoMenuClicked: _v76
      } = (0, _v17.useVideoActionsTracking)(),
      _v77 = (0, _v15.deriveColdStorageRestrictions)({
        hasColdStorage: !!_v0.isColdStorage,
        hasColdPrivacy: !!_v0.isColdPrivacyRestricted
      }),
      _v78 = (0, _v2.useCallback)(_v0 => {
        _v21 !== _v45.PAGE.ELIHP && _v76({
          clipId: String((0, _v38.idFromUri)(_v37)),
          isPrivateToUser: _v0.parentProject?.isPrivateToUser,
          myVideoMenuAction: _v0
        });
      }, [_v21, _v76, _v37, _v0.parentProject?.isPrivateToUser]),
      {
        handleStarMenuState: _v79
      } = (0, _v67.useStarMenuItem)(),
      {
        isItemStarred: _v80,
        onStarClick: _v81,
        ..._v82
      } = _v79("video", _v0, !0),
      {
        openBulkAiModal: _v83
      } = (0, _v10.useBulkAiModal)(),
      {
        openBulkSentimentModal: _v84
      } = (0, _v11.useBulkSentimentModal)(),
      _v85 = !!_v42.canUseSentimentWidgets,
      _v86 = (0, _v65.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolderItems: _v87,
        revalidateRootItems: _v88
      } = (0, _v47.useRevalidate)(),
      {
        openAddToShowcaseModal: _v89,
        closeAddToShowcaseModal: _v90
      } = (0, _v59.useAddToShowcaseModal)(),
      {
        openThumbnailModal: _v91
      } = (() => {
        let {
          setModalState: _v0
        } = (0, _v2.useContext)(_v63.ThumbnailChangeModalDispatch);
        return {
          openThumbnailModal: _v0 => _v0({
            isOpen: !0,
            ..._v0
          })
        };
      })(),
      _v92 = (0, _v2.useCallback)(() => {
        _v66?.(_v37, "VL_grid_view_overflow", void 0, void 0, void 0, {
          pageSource: "library",
          entryPoint: "share_menu"
        }), _v35.BPAnalyticsV2.openVideoShare({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v66, _v37, _v1, _v0, _v19?.teamUser, _v13]),
      _v93 = (0, _v2.useCallback)(_v0 => {
        _v72({
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
          onClose: _v73
        });
      }, [_v73, _v72, _v21]),
      {
        isLocked: _v94,
        showLockedToast: _v95
      } = (0, _v55.useVideoMetadataLock)(_v0),
      _v96 = (0, _v2.useCallback)(() => {
        _v78("privacy"), _v74({
          element: "locked_video_menu_share",
          restrictions: _v77
        }), _v67({
          videoId: (0, _v38.idFromUri)(_v0.uri),
          videoName: _v0.name,
          currentPrivacy: _v68(_v0.privacy),
          currentPassword: _v0.password ?? "",
          currentEmbedPrivacy: _v0.privacy?.embed,
          filesSize: _v0.filesSize,
          onSuccess: ({
            privacy: _v0,
            password: _v1,
            embed: _v2,
            link: _v3
          }) => _v68({
            uri: _v0.uri,
            privacy: _v0,
            password: _v1,
            link: _v3,
            isColdStorage: !(0, _v57.shouldClearColdStorageLock)({
              isColdStorage: _v0.isColdStorage,
              privacy: _v0,
              embed: _v2 ?? _v0.privacy?.embed
            }) && void 0
          }),
          onEmbedSuccess: _v0 => {
            let _v1 = _v68(_v0.privacy),
              _v2 = (0, _v57.shouldClearColdStorageLock)({
                isColdStorage: _v0.isColdStorage,
                privacy: _v1,
                embed: _v0
              });
            return _v68({
              uri: _v0.uri,
              privacy: _v2 ? _v1 : void 0,
              embed: _v0,
              isColdStorage: !_v2 && void 0
            });
          }
        });
      }, [_v77, _v67, _v74, _v78, _v68, _v0.isColdStorage, _v0.name, _v0.password, _v0.filesSize, _v0.privacy, _v0.uri]),
      _v97 = (0, _v2.useCallback)(() => {
        (_v78("share"), _v94) ? _v95() : _v0.metadata?.hasMandatoryEmailCapture ? _v24(_v0) : _v4 ? _v93("video_share") : _v92();
      }, [_v92, _v4, _v94, _v93, _v95, _v24, _v78, _v0]),
      _v98 = () => {
        _v1 ? _v87(_v1.uri) : _v88();
      },
      _v99 = (0, _v2.useCallback)((_v0, _v1) => {
        _v66?.(_v37, "VL_grid_view_overflow", _v0, _v1, _v98);
      }, [_v66, _v37]),
      _v100 = _v39({
        onFailure: () => {
          _v70({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name,
            isColdStorage: _v0.isColdStorage,
            numColdStorageItems: +!!_v0.isColdStorage,
            coldStorageName: _v0.name
          }), _v20({
            content: _v64.deleteVideoFailed
          });
        },
        onSuccess: () => {
          _v70({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v64.deleteVideoSuccess
          }), _v71(), _v10?.();
        }
      }),
      _v101 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
        _v70({
          isLoading: _v100.loading,
          numItemsToDelete: 1,
          onClickDelete: () => {
            _v0.isColdStorage && _v75({
              restrictions: _v77
            }), _v100.setVideo({
              title: _v0,
              uri: _v1,
              ownerId: _v2
            }), _v4 && _v5?.(), _v70({
              isLoading: !0,
              numItemsToDelete: 1,
              name: _v0,
              isColdStorage: _v0.isColdStorage,
              numColdStorageItems: +!!_v0.isColdStorage,
              coldStorageName: _v0
            });
          },
          onClickCancel() {
            _v71();
          },
          isOnLegalHold: _v3,
          name: _v0,
          isColdStorage: _v0.isColdStorage,
          numColdStorageItems: +!!_v0.isColdStorage,
          coldStorageName: _v0
        });
      },
      _v102 = _v46(),
      _v103 = (0, _v53.useReviewLinkCopiedToast)(),
      _v104 = (0, _v52.useCreateAndCopyVideoReviewLink)((0, _v2.useCallback)((_v0, _v1) => _v103(() => _v99("CREATE_REVIEW_LINK_MODAL", _v1)), [_v103, _v99])),
      _v105 = (0, _v2.useCallback)(_v0 => {
        _v20({
          content: _v0
        });
      }, [_v20]),
      {
        settings: _v106
      } = (0, _v14.useOrionSettings)(),
      _v107 = !!_v106?.bi_expiring_links_ux_enabled,
      {
        triggerReplace: _v108,
        replaceInput: _v109,
        replaceModal: _v110
      } = (0, _v31.useReplaceWithModal)(_v38, !!_v106?.new_replace_feature, _v0.metadata?.connections?.versions?.hasInteractive, _v31.navigateToUpgrade, (0, _v38.idFromUri)(_v0.user.uri), "library"),
      _v111 = (0, _v61.useCreateAndCopySharingLink)("context_menu", _v0, () => _v20({
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
      _v112 = Math.min(Math.max(_v106?.bi_expiring_links_default_expiry_days ?? 0, 0), _v32.MAX_EXPIRY_DAYS),
      _v113 = (0, _v2.useCallback)(_v0 => {
        _v78("copy_link"), _v23({
          video: _v0,
          isSuccess: _v0,
          onManage: _v47
        }), _v0 && _v25({
          clipId: String((0, _v38.idFromUri)(_v0.uri)),
          source: "video_menu"
        }), _v35.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v23, _v0, _v1, _v19?.teamUser, _v13, _v78, _v25, _v47]),
      _v114 = (0, _v2.useCallback)(() => {
        _v78("copy_link");
        let _v0 = (0, _v38.idFromUri)(_v0?.uri),
          _v1 = _v26(_v21, !!_v0?.parentProject?.isPrivateToUser),
          _v2 = `${_v31}${_v1}`;
        _v111(_v0, _v1, _v2, _v112), _v35.BPAnalyticsV2.copyVideoShareLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v78, _v0, _v31, _v26, _v21, _v111, _v112, _v13, _v19?.teamUser, _v1]),
      _v115 = (0, _v2.useCallback)(() => {
        if (_v78("copy_review_link"), _v35.BPAnalyticsV2.clickActionCopyReviewPageLink({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        }), _v2 && !_v42.hasMultipleReviewLinks) return void _v93("copy_review_link");
        let _v0 = (0, _v38.idFromUri)(_v37);
        _v55 ? _v103(_v51 ? () => _v99("CREATE_REVIEW_LINK_MODAL", _v51) : void 0) : _v104(_v0, _v37);
      }, [_v2, _v93, _v0, _v37, _v55, _v51, _v104, _v103, _v99, _v1, _v19?.teamUser, _v13, _v42.hasMultipleReviewLinks, _v78]),
      _v116 = (0, _v2.useCallback)(() => {
        _v78("copy_embed_code"), _v105(_v64.embedCodeCopySuccess), _v35.BPAnalyticsV2.clickCopyVideoEmbedCode({
          location: _v13.location,
          element: _v13.element,
          teamUser: _v19?.teamUser,
          folder: _v1,
          video: _v0
        });
      }, [_v105, _v0, _v1, _v19?.teamUser, _v13, _v78]),
      _v117 = (0, _v2.useCallback)(() => {
        _v48 && (_v78("add_video_rating"), _v84({
          items: [{
            uri: _v37,
            name: _v0.name ?? "",
            duration: _v0.duration ?? 0,
            sentimentWidgets: _v0.embed?.sentimentWidgets
          }],
          userId: _v48,
          location: "video_card_menu",
          showUpgrade: !_v85,
          onSuccess: () => {
            _v1 ? _v87(_v1.uri) : _v88();
          }
        }));
      }, [_v78, _v84, _v37, _v0, _v48, _v1, _v85, _v87, _v88]),
      _v118 = (0, _v2.useCallback)(() => {
        _v78("add_to_showcase"), _v89({
          onClose: _v90,
          showcaseItems: [{
            id: (0, _v38.idFromUri)(_v37),
            name: _v0.name,
            type: "video"
          }],
          ownerId: (0, _v38.idFromUri)(_v0.user.uri),
          pageName: _v21,
          pageUrl: window.location.pathname
        });
      }, [_v89, _v90, _v37, _v0, _v21, _v78]);
    return isNaN((0, _v38.idFromUri)(_v37)) ? (0, _v1.jsx)(_v1.Fragment, {}) : _v0.isColdStorage ? (0, _v1.jsxs)(_v19.ActionsMenu, {
      placement: _v17.placement,
      usePortal: _v17.usePortal,
      onClick: _v7,
      disabled: _v17.disabled,
      size: _v17.size,
      title: _v0.name,
      zIndex: _v17.zIndex ?? _v45.ACTIONS_MENU_Z_INDEX,
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
            _v74({
              element: "locked_video_menu_upgrade",
              restrictions: _v77
            }), _v72({
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
              onClose: _v73
            });
          }
        })
      }), _v58 && (0, _v1.jsx)(_v3.Box, {
        px: "sm",
        children: (0, _v1.jsx)(_v18.Action, {
          icon: (0, _v1.jsx)(_v8.Eye, {
            boxSize: _v18
          }),
          label: (0, _v13.translate)({
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
          onClick: _v96
        })
      }), _v57 && (0, _v1.jsxs)(_v1.Fragment, {
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
              _v78("delete"), _v74({
                element: "locked_video_menu_delete",
                restrictions: _v77
              }), _v101(_v0.name, _v0.uri, _v60, _v45, _v80, _v81);
            }
          })
        })]
      })]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v20.VideoMenu, {
        ..._v17,
        isEnterprise: !!_v42.hasEnterprise,
        onClick: _v7,
        videoLink: _v64,
        videoEmbedCode: _v30?.html,
        onCopyVideoEmbedCode: _v116,
        reviewPageLink: _v55,
        canCopyReviewPageLink: _v53,
        onCopyReviewPageLink: _v115,
        onClickReviewPage: () => {
          _v78("open_review_page"), (0, _v34.sendClickReviewLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v35?.link ?? ""
          }), _v9?.();
        },
        analyticsPageLink: _v62,
        onClickAnalyticsPage: () => {
          _v78("analytics"), (0, _v34.sendClickAnalyticsLinkEvent)({
            location: _v14.location,
            page: _v21,
            target_path: _v62 ?? ""
          }), _v8?.();
        },
        onCopyLink: _v113,
        onClickChangeThumbnail: () => {
          _v78("change_thumbnail"), _v91({
            clipId: (0, _v38.idFromUri)(_v37),
            showChooseExisting: !0,
            onSaveSuccess: () => _v1 ? _v87(_v1.uri) : _v88()
          });
        },
        onCopyLinkAsync: _v0.metadata?.hasMandatoryEmailCapture ? () => _v24(_v0) : _v107 && _v46 ? _v114 : void 0,
        canEdit: _v46,
        canReplace: _v59,
        onReplace: _v108,
        canShare: _v58,
        onShare: _v97,
        canDelete: _v57,
        onDelete: () => {
          _v78("delete"), _v101(_v0.name, _v0.uri, _v60, _v45, _v80, _v81);
        },
        canDownload: (_v46 || _v34?.download) && !!_v41,
        disableDownload: "uploading_error" === _v36,
        onDownload: _v41 ? () => {
          _v78("download"), _v69({
            files: _v41,
            pageName: _v102,
            videoId: (0, _v38.idFromUri)(_v37)
          });
        } : void 0,
        canUseBulkTranslation: _v56 && !!_v42.hasEnterprise,
        handleTranslateVideo: () => {
          _v78("translate"), (0, _v28.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
            ...(0, _v30.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v26.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "ai_bulk_translate",
              location: "sidebar",
              copy: "translate"
            }),
            ...(0, _v27.buildWebBpContext)({
              page_name: "video_library"
            }),
            ...(0, _v29.buildTeamBpContextFromTeamUser)(_v19?.teamUser)
          }, 1, {
            value: String(1),
            device_type: (0, _v25.default)()
          }), _v83({
            clipItems: [{
              videoId: String((0, _v38.idFromUri)(_v37)),
              duration: _v0.duration
            }],
            canTranslateText: _v43,
            canTranslateDubbing: _v44,
            onComplete: () => {
              let _v0 = _v19?.teamUser?.ownerId ?? _v19?.user?.id;
              _v0 && _v86(_v0);
            }
          });
        },
        canMove: _v57,
        onMove: () => {
          _v78("move"), _v65({
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
            teamOwnerId: (0, _v38.idFromUri)(_v0.user.uri)
          });
        },
        canAddToShowcase: _v61,
        onAddToShowcase: _v118,
        canAddVideoRating: _v46 && !!_v42.hasEnterprise,
        onAddVideoRating: _v117,
        onMoreInfo: () => {
          _v78("video_info"), (0, _v34.sendOpenSidePanelEvent)({
            page: _v21,
            location: "video_card_menu"
          }), _v11?.();
        },
        canCreateReviewLink: _v52,
        onCreateReviewLink: () => {
          _v78("create_review_link"), _v99("CREATE_REVIEW_LINK_MODAL");
        },
        canManageReviewLinks: _v54,
        onManageReviewLinks: () => {
          _v78("manage_review_links"), _v99("REVIEW_LINKS_PANEL");
        },
        hasReviewPageLinkUpsell: !!_v2,
        hasShareUpsell: _v4,
        hasMultipleReviewLinks: _v3,
        onStarClick: _v81 ? () => {
          _v80 || _v78("add_to_starred"), _v81();
        } : void 0,
        ..._v82,
        zIndex: _v45.ACTIONS_MENU_Z_INDEX,
        canStar: !_v27,
        reviewId: _v27,
        viewPrivacy: _v34?.view,
        title: _v0.name,
        onRename: _v15 ? () => {
          _v78("rename"), _v15();
        } : void 0,
        onCopyVideo: _v16 && !_v0.disabledProperties?.duplicate && (0, _v58.isCopyableVideoContent)(_v0) ? () => {
          _v78("make_copy"), _v16();
        } : void 0,
        isCopyVideoDisabled: "available" !== _v36,
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
      }), _v109, _v110]
    });
  }], 0);
}