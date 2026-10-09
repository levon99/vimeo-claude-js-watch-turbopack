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
    _v29 = _v0.i(0);
  let _v30 = ({
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
      }] = (0, _v28.useDeleteVideo)(),
      _v10 = (0, _v2.useRef)(0);
    return (0, _v2.useEffect)(() => {
      if (!_v2) return;
      let {
        uri: _v0,
        ownerId: _v1
      } = _v2;
      _v0 && _v1 && _v4({
        where: {
          videoId: (0, _v29.idFromUri)(_v0)
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
  _v0.s(["useDeleteVideo", 0, _v30], 0);
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = () => {
    switch ((0, _v35.usePageName)()) {
      case _v36.PAGE.SVV:
        return "single_video_view";
      case _v36.PAGE.ELIHP:
        return "viewer_home";
      case _v36.PAGE.EVENTS:
      case _v36.PAGE.MVV:
      case _v36.PAGE.SHOWCASES:
      case _v36.PAGE.LIBRARY:
      case _v36.PAGE.SHARED_WITH_ME:
        return "video_library";
      case _v36.PAGE.VLS:
      case _v36.PAGE.SEARCH:
        return "search_result_page";
      default:
        return;
    }
  };
  _v0.s(["usePageNameForDownloadModal", 0, _v37], 0);
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
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
    _v58 = _v0.i(0);
  let _v59 = _v0 => {
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
      _v19 = (0, _v26.useViewer)(),
      _v20 = (0, _v33.useNotification)(),
      _v21 = (0, _v35.usePageName)(),
      _v22 = (0, _v34.useColdStorageUpgradeLabel)(),
      _v23 = (0, _v51.useCopyVideoLinkToast)(),
      _v24 = (0, _v53.useRegistrationRequiredToast)(),
      {
        trackVideoLinkCopied: _v25
      } = (0, _v15.useDistributionTracking)(),
      {
        getVideoShareLoopTrackingParams: _v26
      } = (0, _v41.useShareLoopTrackingParams)(),
      {
        reviewId: _v27,
        allowDownloads: _v28
      } = (0, _v2.useContext)(_v20.ReviewLinkContext),
      {
        download: _v29,
        embed: _v30,
        link: _v31,
        manageLink: _v32,
        metadata: _v33,
        privacy: _v34,
        status: _v35,
        uri: _v36
      } = _v0,
      _v37 = (0, _v29.idFromUri)(_v36),
      _v38 = _v33?.connections?.versions?.currentUri?.split("/").pop(),
      {
        downloadConfig: _v39
      } = (0, _v23.useReviewLinkVideoDownloads)((0, _v29.idFromUri)(_v36), _v27, Number(_v38), !_v28, {
        Accept: "application/vnd.vimeo.*+json;version=3.4.1"
      }),
      _v40 = _v38 && _v28 ? _v39.files : _v29,
      {
        capabilities: _v41
      } = (0, _v11.useCapability)(["canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks", "canPerformBulkTranslations", "canManageTeamCollections", "canUseSentimentWidgets", "hasEnterprise"], _v19?.teamUser?.ownerId),
      _v42 = !!_v41.canGenerateClipTextTranslation,
      _v43 = !!_v41.canGenerateClipTranslation,
      _v44 = !!_v33?.interactions?.legalHold?.uri,
      _v45 = !!_v33?.interactions?.edit?.uri,
      _v46 = (0, _v39.useManageShareAction)({
        canEdit: _v45,
        entityUri: _v36,
        location: "VL_grid_view_overflow",
        panel: "COPY_LINK_PANEL"
      }),
      _v47 = _v19?.teamUser?.ownerId ?? _v19?.user?.id,
      _v48 = !!_v41.hasMultipleReviewLinks && !_v41.hasProhibitMultipleReviewLinks,
      _v49 = (0, _v22.useCanUpSell)(),
      _v50 = (0, _v2.useMemo)(() => (0, _v21.selectReviewLinkUriToCopy)(_v0.reviewLinks, _v49), [_v0.reviewLinks, _v49]),
      {
        canCreateReviewLink: _v51,
        canCopyReviewPageLink: _v52,
        canManageReviewLinks: _v53,
        reviewPageLink: _v54
      } = (0, _v45.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v48,
        hasMultipleReviewLinks: !!_v41.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v29.getVideoReviewPageUrl)(_v0, (0, _v29.idFromUri)(_v36)), [_v36])
      }),
      _v55 = _v45 && (_v43 || _v42) && !!_v41.canPerformBulkTranslations,
      _v56 = !!_v33?.interactions?.delete?.uri,
      _v57 = !!(_v33?.interactions?.invite?.uri || _v5),
      _v58 = !!_v33?.canBeReplaced && _v45 && "available" === _v35,
      _v59 = parseInt(_v36.split("/")[2]),
      _v60 = _v41.canManageTeamCollections && _v45,
      _v61 = _v32 && (0, _v57.getAnalyticsPageLinkForVideo)(_v32),
      _v62 = _v26(_v21, !!_v0.parentProject?.isPrivateToUser),
      _v63 = _v27 ? `${_v19?.vimeoHttpsUrl}/reviews/${_v27}${_v36}${_v62}` : `${_v31}${_v62}`,
      {
        openMoveModal: _v64
      } = (0, _v27.useMoveModal)(),
      {
        openShareFolderModal: _v65
      } = (0, _v40.useShareFolderModal)(),
      {
        openVideoPrivacyModal: _v66
      } = (0, _v47.useVideoPrivacyModal)(),
      _v67 = (0, _v48.useUpdateVideoPrivacyCache)(),
      {
        open: _v68
      } = (0, _v32.useDownloadModal)(),
      {
        openDeleteVideoModal: _v69,
        closeDeleteVideoModal: _v70
      } = (0, _v31.useDeleteVideoModal)(),
      {
        open: _v71,
        close: _v72
      } = (0, _v42.useUpsellModal)(),
      {
        trackColdStorageUxClicked: _v73,
        trackColdStorageUxDeletedVideo: _v74
      } = (0, _v14.useColdStorageTracking)(),
      {
        trackMyVideoMenuClicked: _v75
      } = (0, _v16.useVideoActionsTracking)(),
      _v76 = (0, _v14.deriveColdStorageRestrictions)({
        hasColdStorage: !!_v0.isColdStorage,
        hasColdPrivacy: !!_v0.isColdPrivacyRestricted
      }),
      _v77 = (0, _v2.useCallback)(_v0 => {
        _v21 !== _v36.PAGE.ELIHP && _v75({
          clipId: String((0, _v29.idFromUri)(_v36)),
          isPrivateToUser: _v0.parentProject?.isPrivateToUser,
          myVideoMenuAction: _v0
        });
      }, [_v21, _v75, _v36, _v0.parentProject?.isPrivateToUser]),
      {
        handleStarMenuState: _v78
      } = (0, _v58.useStarMenuItem)(),
      {
        isItemStarred: _v79,
        onStarClick: _v80,
        ..._v81
      } = _v78("video", _v0, !0),
      {
        openBulkAiModal: _v82
      } = (0, _v9.useBulkAiModal)(),
      {
        openBulkSentimentModal: _v83
      } = (0, _v10.useBulkSentimentModal)(),
      _v84 = !!_v41.canUseSentimentWidgets,
      _v85 = (0, _v56.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolderItems: _v86,
        revalidateRootItems: _v87
      } = (0, _v38.useRevalidate)(),
      {
        openAddToShowcaseModal: _v88,
        closeAddToShowcaseModal: _v89
      } = (0, _v50.useAddToShowcaseModal)(),
      {
        openThumbnailModal: _v90
      } = (() => {
        let {
          setModalState: _v0
        } = (0, _v2.useContext)(_v54.ThumbnailChangeModalDispatch);
        return {
          openThumbnailModal: _v0 => _v0({
            isOpen: !0,
            ..._v0
          })
        };
      })(),
      _v91 = (0, _v2.useCallback)(() => {
        _v65?.(_v36, "VL_grid_view_overflow", void 0, void 0, void 0, {
          pageSource: "library",
          entryPoint: "share_menu"
        });
      }, [_v65, _v36]),
      _v92 = (0, _v2.useCallback)(_v0 => {
        _v71({
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
          onClose: _v72
        });
      }, [_v72, _v71, _v21]),
      {
        isLocked: _v93,
        showLockedToast: _v94
      } = (0, _v46.useVideoMetadataLock)(_v0),
      _v95 = (0, _v2.useCallback)(() => {
        _v77("privacy"), _v73({
          element: "locked_video_menu_share",
          restrictions: _v76
        }), _v66({
          videoId: (0, _v29.idFromUri)(_v0.uri),
          videoName: _v0.name,
          currentPrivacy: _v59(_v0.privacy),
          currentPassword: _v0.password ?? "",
          currentEmbedPrivacy: _v0.privacy?.embed,
          filesSize: _v0.filesSize,
          onSuccess: ({
            privacy: _v0,
            password: _v1,
            embed: _v2,
            link: _v3
          }) => _v67({
            uri: _v0.uri,
            privacy: _v0,
            password: _v1,
            link: _v3,
            isColdStorage: !(0, _v48.shouldClearColdStorageLock)({
              isColdStorage: _v0.isColdStorage,
              privacy: _v0,
              embed: _v2 ?? _v0.privacy?.embed
            }) && void 0
          }),
          onEmbedSuccess: _v0 => {
            let _v1 = _v59(_v0.privacy),
              _v2 = (0, _v48.shouldClearColdStorageLock)({
                isColdStorage: _v0.isColdStorage,
                privacy: _v1,
                embed: _v0
              });
            return _v67({
              uri: _v0.uri,
              privacy: _v2 ? _v1 : void 0,
              embed: _v0,
              isColdStorage: !_v2 && void 0
            });
          }
        });
      }, [_v76, _v66, _v73, _v77, _v67, _v0.isColdStorage, _v0.name, _v0.password, _v0.filesSize, _v0.privacy, _v0.uri]),
      _v96 = (0, _v2.useCallback)(() => {
        (_v77("share"), _v93) ? _v94() : _v0.metadata?.hasMandatoryEmailCapture ? _v24(_v0) : _v4 ? _v92("video_share") : _v91();
      }, [_v91, _v4, _v93, _v92, _v94, _v24, _v77, _v0]),
      _v97 = () => {
        _v1 ? _v86(_v1.uri) : _v87();
      },
      _v98 = (0, _v2.useCallback)((_v0, _v1) => {
        _v65?.(_v36, "VL_grid_view_overflow", _v0, _v1, _v97);
      }, [_v65, _v36]),
      _v99 = _v30({
        onFailure: () => {
          _v69({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name,
            isColdStorage: _v0.isColdStorage,
            numColdStorageItems: +!!_v0.isColdStorage,
            coldStorageName: _v0.name
          }), _v20({
            content: _v55.deleteVideoFailed
          });
        },
        onSuccess: () => {
          _v69({
            isLoading: !1,
            numItemsToDelete: 1,
            name: _v0.name
          }), _v20({
            content: _v55.deleteVideoSuccess
          }), _v70(), _v10?.();
        }
      }),
      _v100 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
        _v69({
          isLoading: _v99.loading,
          numItemsToDelete: 1,
          onClickDelete: () => {
            _v0.isColdStorage && _v74({
              restrictions: _v76
            }), _v99.setVideo({
              title: _v0,
              uri: _v1,
              ownerId: _v2
            }), _v4 && _v5?.(), _v69({
              isLoading: !0,
              numItemsToDelete: 1,
              name: _v0,
              isColdStorage: _v0.isColdStorage,
              numColdStorageItems: +!!_v0.isColdStorage,
              coldStorageName: _v0
            });
          },
          onClickCancel() {
            _v70();
          },
          isOnLegalHold: _v3,
          name: _v0,
          isColdStorage: _v0.isColdStorage,
          numColdStorageItems: +!!_v0.isColdStorage,
          coldStorageName: _v0
        });
      },
      _v101 = _v37(),
      _v102 = (0, _v44.useReviewLinkCopiedToast)(),
      _v103 = (0, _v43.useCreateAndCopyVideoReviewLink)((0, _v2.useCallback)((_v0, _v1) => _v102(() => _v98("CREATE_REVIEW_LINK_MODAL", _v1)), [_v102, _v98])),
      _v104 = (0, _v2.useCallback)(_v0 => {
        _v20({
          content: _v0
        });
      }, [_v20]),
      {
        bi_expiring_links_ux_enabled: _v105,
        new_replace_feature: _v106,
        bi_expiring_links_default_expiry_days: _v107
      } = (0, _v13.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "new_replace_feature", "bi_expiring_links_default_expiry_days"]),
      {
        triggerReplace: _v108,
        replaceInput: _v109,
        replaceModal: _v110
      } = (0, _v24.useReplaceWithModal)(_v37, !!_v106, _v0.metadata?.connections?.versions?.hasInteractive, _v24.navigateToUpgrade, (0, _v29.idFromUri)(_v0.user.uri), "library"),
      _v111 = (0, _v52.useCreateAndCopySharingLink)("context_menu", _v0, () => _v20({
        content: (0, _v12.translate)({
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
      _v112 = Math.min(Math.max(_v107 ?? 0, 0), _v25.MAX_EXPIRY_DAYS),
      _v113 = (0, _v2.useCallback)(_v0 => {
        _v77("copy_link"), _v23({
          video: _v0,
          isSuccess: _v0,
          onManage: _v46
        }), _v0 && _v25({
          clipId: String((0, _v29.idFromUri)(_v0.uri)),
          source: "video_menu"
        });
      }, [_v23, _v0, _v77, _v25, _v46]),
      _v114 = (0, _v2.useCallback)(() => {
        _v77("copy_link");
        let _v0 = (0, _v29.idFromUri)(_v0?.uri),
          _v1 = _v26(_v21, !!_v0?.parentProject?.isPrivateToUser),
          _v2 = `${_v31}${_v1}`;
        _v111(_v0, _v1, _v2, _v112);
      }, [_v77, _v0, _v31, _v26, _v21, _v111, _v112]),
      _v115 = (0, _v2.useCallback)(() => {
        if (_v77("copy_review_link"), _v2 && !_v41.hasMultipleReviewLinks) return void _v92("copy_review_link");
        let _v0 = (0, _v29.idFromUri)(_v36);
        _v54 ? _v102(_v50 ? () => _v98("CREATE_REVIEW_LINK_MODAL", _v50) : void 0) : _v103(_v0, _v36);
      }, [_v2, _v92, _v36, _v54, _v50, _v103, _v102, _v98, _v41.hasMultipleReviewLinks, _v77]),
      _v116 = (0, _v2.useCallback)(() => {
        _v77("copy_embed_code"), _v104(_v55.embedCodeCopySuccess);
      }, [_v104, _v77]),
      _v117 = (0, _v2.useCallback)(() => {
        _v47 && (_v77("add_video_rating"), _v83({
          items: [{
            uri: _v36,
            name: _v0.name ?? "",
            duration: _v0.duration ?? 0,
            sentimentWidgets: _v0.embed?.sentimentWidgets
          }],
          userId: _v47,
          location: "video_card_menu",
          showUpgrade: !_v84,
          onSuccess: () => {
            _v1 ? _v86(_v1.uri) : _v87();
          }
        }));
      }, [_v77, _v83, _v36, _v0, _v47, _v1, _v84, _v86, _v87]),
      _v118 = (0, _v2.useCallback)(() => {
        _v77("add_to_showcase"), _v88({
          onClose: _v89,
          showcaseItems: [{
            id: (0, _v29.idFromUri)(_v36),
            name: _v0.name,
            type: "video"
          }],
          ownerId: (0, _v29.idFromUri)(_v0.user.uri),
          pageName: _v21,
          pageUrl: window.location.pathname
        });
      }, [_v88, _v89, _v36, _v0, _v21, _v77]);
    return isNaN((0, _v29.idFromUri)(_v36)) ? (0, _v1.jsx)(_v1.Fragment, {}) : _v0.isColdStorage ? (0, _v1.jsxs)(_v18.ActionsMenu, {
      placement: _v17.placement,
      usePortal: _v17.usePortal,
      onClick: _v7,
      disabled: _v17.disabled,
      size: _v17.size,
      title: _v0.name,
      zIndex: _v17.zIndex ?? _v36.ACTIONS_MENU_Z_INDEX,
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
          icon: (0, _v1.jsx)(_v6.DiamondFilled, {
            boxSize: _v18
          }),
          label: (0, _v12.translate)({
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
            _v73({
              element: "locked_video_menu_upgrade",
              restrictions: _v76
            }), _v71({
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
              onClose: _v72
            });
          }
        })
      }), _v57 && (0, _v1.jsx)(_v3.Box, {
        px: "sm",
        children: (0, _v1.jsx)(_v17.Action, {
          icon: (0, _v1.jsx)(_v7.Eye, {
            boxSize: _v18
          }),
          label: (0, _v12.translate)({
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
          onClick: _v95
        })
      }), _v56 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.MenuDivider, {
          mt: "sm",
          mb: "sm"
        }), (0, _v1.jsx)(_v3.Box, {
          px: "sm",
          children: (0, _v1.jsx)(_v17.Action, {
            icon: (0, _v1.jsx)(_v8.TrashBin, {
              boxSize: _v18
            }),
            label: (0, _v12.translate)({
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
              _v77("delete"), _v73({
                element: "locked_video_menu_delete",
                restrictions: _v76
              }), _v100(_v0.name, _v0.uri, _v59, _v44, _v79, _v80);
            }
          })
        })]
      })]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v19.VideoMenu, {
        ..._v17,
        isEnterprise: !!_v41.hasEnterprise,
        onClick: _v7,
        videoLink: _v63,
        videoEmbedCode: _v30?.html,
        onCopyVideoEmbedCode: _v116,
        reviewPageLink: _v54,
        canCopyReviewPageLink: _v52,
        onCopyReviewPageLink: _v115,
        onClickReviewPage: () => {
          _v77("open_review_page"), _v9?.();
        },
        analyticsPageLink: _v61,
        onClickAnalyticsPage: () => {
          _v77("analytics"), _v8?.();
        },
        onCopyLink: _v113,
        onClickChangeThumbnail: () => {
          _v77("change_thumbnail"), _v90({
            clipId: (0, _v29.idFromUri)(_v36),
            showChooseExisting: !0,
            onSaveSuccess: () => _v1 ? _v86(_v1.uri) : _v87()
          });
        },
        onCopyLinkAsync: _v0.metadata?.hasMandatoryEmailCapture ? () => _v24(_v0) : _v105 && _v45 ? _v114 : void 0,
        canEdit: _v45,
        canReplace: _v58,
        onReplace: _v108,
        canShare: _v57,
        onShare: _v96,
        canDelete: _v56,
        onDelete: () => {
          _v77("delete"), _v100(_v0.name, _v0.uri, _v59, _v44, _v79, _v80);
        },
        canDownload: (_v45 || _v34?.download) && !!_v40,
        disableDownload: "uploading_error" === _v35,
        onDownload: _v40 ? () => {
          _v77("download"), _v68({
            files: _v40,
            pageName: _v101,
            videoId: (0, _v29.idFromUri)(_v36)
          });
        } : void 0,
        canUseBulkTranslation: _v55 && !!_v41.hasEnterprise,
        handleTranslateVideo: () => {
          _v77("translate"), _v82({
            clipItems: [{
              videoId: String((0, _v29.idFromUri)(_v36)),
              duration: _v0.duration
            }],
            canTranslateText: _v42,
            canTranslateDubbing: _v43,
            onComplete: () => {
              let _v0 = _v19?.teamUser?.ownerId ?? _v19?.user?.id;
              _v0 && _v85(_v0);
            }
          });
        },
        canMove: _v56,
        onMove: () => {
          _v77("move"), _v64({
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
            teamOwnerId: (0, _v29.idFromUri)(_v0.user.uri)
          });
        },
        canAddToShowcase: _v60,
        onAddToShowcase: _v118,
        canAddVideoRating: _v45 && !!_v41.hasEnterprise,
        onAddVideoRating: _v117,
        onMoreInfo: () => {
          _v77("video_info"), _v11?.();
        },
        canCreateReviewLink: _v51,
        onCreateReviewLink: () => {
          _v77("create_review_link"), _v98("CREATE_REVIEW_LINK_MODAL");
        },
        canManageReviewLinks: _v53,
        onManageReviewLinks: () => {
          _v77("manage_review_links"), _v98("REVIEW_LINKS_PANEL");
        },
        hasReviewPageLinkUpsell: !!_v2,
        hasShareUpsell: _v4,
        hasMultipleReviewLinks: _v3,
        onStarClick: _v80 ? () => {
          _v79 || _v77("add_to_starred"), _v80();
        } : void 0,
        ..._v81,
        zIndex: _v36.ACTIONS_MENU_Z_INDEX,
        canStar: !_v27,
        reviewId: _v27,
        viewPrivacy: _v34?.view,
        title: _v0.name,
        onRename: _v15 ? () => {
          _v77("rename"), _v15();
        } : void 0,
        onCopyVideo: _v16 && !_v0.disabledProperties?.duplicate && (0, _v49.isCopyableVideoContent)(_v0) ? () => {
          _v77("make_copy"), _v16();
        } : void 0,
        isCopyVideoDisabled: "available" !== _v35,
        copyVideoDisabledTooltip: (0, _v12.translate)({
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