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
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v22.useViewer)(),
      _v2 = (0, _v50.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions),
      {
        isEnabled: _v3
      } = (0, _v29.useEnableFolderBulkPrivacy)();
    return (0, _v1.jsx)(_v37.DownloadModalProvider, {
      children: (0, _v1.jsx)(_v48.UpsellModalProvider, {
        children: (0, _v1.jsx)(_v36.DeleteVideoModalContextProvider, {
          children: (0, _v1.jsx)(_v40.LiveEventDeleteModalProvider, {
            children: (0, _v1.jsx)(_v32.AddToShowcaseModalContextProvider, {
              children: (0, _v1.jsx)(_v31.AddFolderToShowcaseModalContextProvider, {
                children: (0, _v1.jsx)(_v42.MoveModalContextProvider, {
                  children: (0, _v1.jsx)(_v39.FolderSettingsContextProvider, {
                    children: (0, _v1.jsx)(_v35.default, {
                      children: (0, _v1.jsx)(_v46.SlackIntegrationContextProvider, {
                        children: (0, _v1.jsx)(_v33.BulkPrivacyModalContextProvider, {
                          children: (0, _v1.jsx)(_v34.BulkShareInChinaModalContextProvider, {
                            children: (0, _v1.jsx)(_v41.ManageFeaturedFoldersModalContextProvider, {
                              children: (0, _v1.jsx)(_v43.ReorderFeaturedFOldersModalContextProvider, {
                                children: (0, _v1.jsx)(_v27.BulkAiModalProvider, {
                                  onJobActionComplete: _v0 => {
                                    let _v1 = _v1?.teamUser?.ownerId ?? _v1?.user?.id;
                                    _v1 && _v2(_v1, _v0);
                                  },
                                  children: (0, _v1.jsx)(_v44.default, {
                                    children: (0, _v1.jsx)(_v45.ShowcaseDeleteModalProvider, {
                                      children: (0, _v1.jsx)(_v38.FolderDefaultsModalContextProvider, {
                                        children: (0, _v1.jsx)(_v49.VideoPrivacyModalContextProvider, {
                                          children: (0, _v1.jsxs)(_v47.ThumbnailChangeModalContextProvider, {
                                            children: [_v0, (0, _v1.jsx)(_v30.BulkSentimentModalHost, {}), _v3 && (0, _v1.jsx)(_v28.BulkPrivacyModalHost, {})]
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  _v0.s(["default", 0, _v51], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v4.useContext)(_v58.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = _v1?.user?.id,
      {
        data: _v4,
        error: _v5,
        mutate: _v6,
        isLoading: _v7,
        size: _v8,
        setSize: _v9
      } = (0, _v56.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
        select: ["uri", "name", "status", ..._v59.LIST_QUERY_FIELDS],
        where: {
          userId: _v2,
          teamMemberId: _v3
        },
        query: {
          perPage: _v59.PER_PAGE_DATA,
          sort: "created_on",
          direction: "desc"
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4"
        }
      } : null, {
        revalidateOnFocus: !1,
        errorRetryCount: 0
      }),
      _v10 = (0, _v4.useCallback)(() => {
        _v9(_v0 => _v0 + 1);
      }, [_v9]),
      _v11 = _v4?.flatMap(_v0 => _v0.data ?? []).filter(_v0 => _v0.status === _v59.STARRED_ITEM_STATUS_ACTIVE),
      {
        isLoadingMore: _v12,
        isDone: _v13
      } = (0, _v57.getInfiniteRequestLoadingState)({
        data: _v4,
        itemsPerPage: _v59.PER_PAGE_DATA,
        size: _v8
      });
    return (0, _v1.jsx)(_v60.StarredItemsDataContext.Provider, {
      value: {
        starredListData: _v11,
        mutateStarredItemsData: _v6,
        fetchNextPageItems: _v10,
        starredListError: _v5,
        isLoading: _v7,
        starredListResponse: _v4,
        isLoadingMore: _v12,
        isDone: _v13
      },
      children: _v0
    });
  };
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v4.useContext)(_v58.ViewerContext),
        _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        _v3 = _v1?.user?.id,
        {
          data: _v4,
          mutate: _v5
        } = (0, _v56.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
          select: ["video.uri", "folder.uri", "uri", "type"],
          where: {
            userId: _v2,
            teamMemberId: _v3
          },
          query: {
            perPage: 100
          }
        } : null, {
          revalidateOnFocus: !1,
          errorRetryCount: 0
        });
      return (0, _v1.jsx)(_v63.StarredItemUriContext.Provider, {
        value: {
          starredItemsUri: (0, _v62.organiseStarredItemData)(_v4 && _v4[0]?.data),
          mutateStarredItemsUri: _v5,
          starredItemsUriData: _v4
        },
        children: _v0
      });
    },
    _v65 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v64, {
      children: (0, _v1.jsx)(_v61, {
        children: _v0
      })
    });
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  function _v68({
    overlayStyle: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v67.Box, {
      position: "absolute",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      width: "100%",
      backgroundColor: "blackAlpha.600",
      _dark: {
        backgroundColor: "blackAlpha.800"
      },
      zIndex: 0,
      height: _v0.height
    }) : null;
  }
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = "video-library:wayfinder-side-nav-open",
    _v75 = (_v0, _v1) => _v1 ? `${_v74}:${_v0}:${_v1}` : `${_v74}:${_v0}`,
    _v76 = (_v0, _v1) => {
      if (!_v0) return;
      let _v2 = window.localStorage.getItem(_v75(_v0, _v1));
      return "true" === _v2 || "false" !== _v2 && void 0;
    };
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  let _v83 = ({
      isOpen: _v0,
      isMobile: _v1,
      onClose: _v2,
      onResize: _v3,
      sideNavContent: _v4,
      sideNavSurface: _v5,
      showWatchMenuItemAtTheBottom: _v6,
      teamOwnerId: _v7,
      playerAssetUrls: _v8,
      footerVariant: _v9,
      collapsed: _v10
    }) => {
      let _v11 = (0, _v82.useWayfinderPageName)(),
        _v12 = (0, _v81.useSideNavUpgradeClick)();
      return (0, _v1.jsx)(_v84, {
        type: _v79.PlayerType.BarebonePlayer,
        assetUrls: _v8,
        children: (0, _v1.jsx)(_v80.WayfinderSideNav, {
          isOpen: _v0,
          isMobile: _v1,
          onClose: _v2,
          onResize: _v3,
          page: _v11,
          onUpgradeClick: _v12,
          showWatchMenuItem: _v6 && "library" !== _v5,
          teamOwnerId: _v7,
          footerVariant: _v9,
          collapsed: _v10,
          children: _v4
        })
      });
    },
    _v84 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v78.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v85 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).DefaultNavigation
    }), {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["VideoLibraryLayout", 0, ({
    children: _v0,
    hasSideNav: _v1 = !1,
    hasGlobalSearch: _v2,
    sideNavContent: _v3,
    sideNavSurface: _v4,
    playerAssetUrls: _v5,
    isReviewPage: _v6,
    hasThemeSupport: _v7 = !0,
    hasUploader: _v8 = !1,
    alwaysMinimiseSearch: _v9 = !1
  }) => {
    let _v10,
      _v11 = (0, _v22.useViewer)(),
      _v12 = (0, _v3.useRouter)(),
      [_v13, _v14] = (0, _v11.useToken)("breakpoints", ["lg", "sm"]),
      [_v15] = (0, _v12.useMediaQuery)([`(max-width: ${_v13})`]),
      [_v16] = (0, _v12.useMediaQuery)([`(max-width: ${_v14})`]),
      {
        uploads: _v17
      } = (0, _v19.useUploader)(),
      _v18 = (0, _v55.useUpsellAnalyticsPage)(),
      {
        userId: _v19
      } = _v12.query,
      _v20 = _v19 && !Array.isArray(_v19) ? parseInt(_v19, 10) : _v11?.teamUser?.ownerId,
      _v21 = _v11?.user?.id,
      _v22 = _v11?.teamUser?.ownerId ?? _v21,
      {
        capabilities: _v23
      } = (0, _v15.useCapability)(["privateModeOff"], _v20),
      {
        capabilities: _v24
      } = (0, _v15.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v22),
      _v25 = !!_v24.canGenerateClipTextTranslation,
      _v26 = (!!_v24.canGenerateClipTranslation || _v25) && !!_v24.canPerformBulkTranslations,
      {
        isOpen: _v27,
        handleToggleState: _v28,
        collapsed: _v29,
        isNewDesktopSidebar: _v30
      } = ((_v0, _v1) => {
        let _v2 = (0, _v70.useWindowSize)(),
          _v3 = (0, _v4.useContext)(_v58.ViewerContext),
          {
            settings: _v4
          } = (0, _v17.useOrionSettings)(),
          _v5 = !!(_v4.enable_new_sidebar && _v1),
          _v6 = _v5 ? _v1 : void 0,
          [_v7, _v8] = (0, _v69.useGetUserPreferencesLazy)(),
          _v9 = (0, _v72.usePageName)() !== _v73.PAGE.SEARCH,
          [_v10, _v11] = (0, _v4.useState)(_v2.width >= _v71.BreakPoints.lg && !!_v9 && (_v76(_v3?.user?.id, _v6) ?? !0)),
          [_v12] = (0, _v69.usePatchUserPreferences)(),
          _v13 = _v2.width >= _v71.BreakPoints.md;
        (0, _v4.useEffect)(() => {
          _v2.width <= _v71.BreakPoints.sm && _v11(!1);
        }, [_v2]), (0, _v4.useEffect)(() => {
          if (!_v5 && _v13 && _v9 && !_v0) {
            let _v0 = _v8?.data?.wsns;
            if ("boolean" == typeof _v0 && (_v11(_v0), _v3?.user?.id)) try {
              window.localStorage.setItem(_v75(_v3.user.id), _v0 ? "true" : "false");
            } catch (_v0) {}
          }
        }, [_v8?.data, _v0, _v5]), (0, _v4.useEffect)(() => {
          if (!_v3?.user?.id) return;
          let _v0 = _v76(_v3.user.id, _v6);
          "boolean" == typeof _v0 && _v13 && _v9 && !_v0 && _v11(_v0), _v5 || _v7({
            select: ["wsns"],
            where: {
              userId: _v3.user.id
            }
          });
        }, [_v3?.user?.id, _v6]);
        let _v14 = (0, _v4.useCallback)(() => {
            if (!_v3?.user?.id) return;
            let _v0 = !_v10;
            _v13 && !_v5 && _v12({
              select: [],
              where: {
                userId: _v3.user.id
              },
              variables: {
                wsns: +!_v10
              }
            });
            try {
              window.localStorage.setItem(_v75(_v3.user.id, _v6), _v0 ? "true" : "false");
            } catch (_v0) {}
            _v11(_v0);
          }, [_v3, _v10, _v13, _v12, _v5, _v6]),
          _v15 = !!(_v4.enable_new_sidebar && _v2.width > _v71.BreakPoints.lg),
          _v16 = _v15 && !_v10;
        return {
          isOpen: _v10,
          handleToggleState: _v14,
          collapsed: _v16,
          isNewDesktopSidebar: _v15
        };
      })(_v6, _v4),
      _v31 = (0, _v50.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v32 = (0, _v50.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v33 = (0, _v50.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v34 = (0, _v50.useActivityCenterStore)(_v0 => _v0.hide),
      _v35 = (0, _v50.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v22 && _v26 && _v35(_v22);
    }, [_v35, _v22, _v26]);
    let [_v36, _v37] = (0, _v4.useState)(!0),
      [_v38, _v39] = (0, _v4.useState)(_v1),
      [_v40, _v41] = (0, _v4.useState)(!1),
      [_v42, _v43] = (0, _v4.useState)(new Set()),
      [_v44, _v45] = (0, _v4.useState)(""),
      [_v46, _v47] = (0, _v4.useState)(!1),
      [_v48, _v49] = (0, _v4.useState)(!1),
      [_v50, _v51] = (0, _v4.useState)(null),
      _v52 = (0, _v4.useRef)(null),
      _v53 = (0, _v4.useRef)(null);
    (0, _v20.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v45(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v17.length && (_v47(!0), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.embeddable_uploader_start", 1, {
        number_of_files: _v17.length,
        page: _v18
      })));
    }, [_v17.length, _v18]);
    let {
        data: _v54
      } = (0, _v16.useGetUserWorkspaces)(() => _v21 ? {
        where: {
          userId: _v21
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v55 = _v20 ?? _v21,
      _v56 = (_v10 = _v54?.data, _v10?.find(_v0 => _v0.teamOwnerId === _v55)),
      _v57 = !!_v56;
    (0, _v4.useEffect)(() => {
      _v56?.teamOwnerId && _v53.current?.addEventData && _v53.current.addEventData({
        team_owner_id: _v56.teamOwnerId,
        team_size: null,
        team_subscription_type: _v56?.tier,
        actor_team_role: _v56?.untranslatedUserRole
      });
    }, [_v56?.tier, _v56?.teamOwnerId, _v56?.untranslatedUserRole]), (0, _v4.useEffect)(() => {
      _v40 || _v6 ? _v39(!1) : _v39(_v1 || _v57);
    }, [_v1, _v57, _v40, _v6]), (0, _v4.useEffect)(() => {
      _v37(!_v15);
    }, [_v15]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v58), () => {
      window.removeEventListener("scroll", _v58);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v52.current?.scrollHeight;
      _v15 && _v27 && _v0 ? _v51({
        height: _v0
      }) : _v51(null);
    }, [_v15, _v27, _v48]);
    let _v58 = () => {
        _v52.current && (_v52.current.scrollTop >= 5 ? _v49(!0) : _v49(!1));
      },
      _v59 = window,
      _v60 = _v56?.teamOwnerId ?? 0,
      _v61 = null != _v21 && _v22 === _v21,
      _v62 = (0, _v14.useMigrationProgressWidget)(_v61 ? _v22 : void 0),
      {
        settings: _v63
      } = (0, _v17.useOrionSettings)(),
      _v64 = _v63.enable_new_sidebar && "library" === _v4 ? "icons" : "full",
      _v65 = (0, _v23.useTrackSidebarToggled)();
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v59,
      children: [(0, _v1.jsx)(_v52.default, {
        children: (0, _v1.jsx)(_v21.AnalyticsEventProvider, {
          ref: _v53,
          eventData: {
            product: "Video Library"
          },
          children: (0, _v1.jsx)(_v51, {
            children: (0, _v1.jsxs)(_v18.OmnisearchContextProvider, {
              children: [(0, _v1.jsx)(_v65, {
                children: (0, _v1.jsx)(_v54.TransferFileModalProvider, {
                  children: (0, _v1.jsx)(_v53.ReviewModalProvider, {
                    children: (0, _v1.jsx)(_v66.VideoLibraryLayoutContext.Provider, {
                      value: {
                        isSideNavOpen: !!_v27,
                        setIsSideNavOpen: _v28,
                        isPersonalTeamFolderAdminView: _v40,
                        setIsPersonalTeamFolderAdminView: _v41,
                        loadingSideNavFolderURIs: _v42,
                        setLoadingSideNavFolderURIs: _v43,
                        shouldShowSideNav: _v38,
                        isScrolling: _v48,
                        teamOwnerId: _v60
                      },
                      children: (0, _v1.jsxs)(_v10.Flex, {
                        overflow: "hidden",
                        height: "100vh",
                        width: "100vw",
                        children: [_v38 && (_v63.enable_new_sidebar && "library" === _v4 ? (0, _v1.jsx)(_v77.SecondarySideNav, {
                          isOpen: !!_v27,
                          isMobile: _v15,
                          collapsed: _v29,
                          onClose: _v28,
                          children: _v3
                        }) : (0, _v1.jsx)(_v83, {
                          isOpen: !!_v27,
                          isMobile: _v15,
                          collapsed: _v29,
                          onClose: _v28,
                          sideNavContent: _v3,
                          sideNavSurface: _v4,
                          showWatchMenuItemAtTheBottom: !!_v11?.isFromCopyrightRestrictedRegion,
                          teamOwnerId: _v60,
                          playerAssetUrls: _v5,
                          footerVariant: _v64
                        })), (0, _v1.jsx)(_v10.Flex, {
                          flexDir: "column",
                          flex: "1 1 auto",
                          width: _v36 ? "50%" : "100%",
                          transition: "width 180ms ease-in-out 180ms",
                          children: (0, _v1.jsxs)(_v10.Flex, {
                            ref: _v52,
                            onScroll: _v58,
                            flexDir: "column",
                            minHeight: "100vh",
                            position: "relative",
                            overflowY: _v50 ? "hidden" : "auto",
                            children: [(0, _v1.jsx)(_v85, {
                              hasSearch: _v2,
                              alwaysMinimiseSearch: _v9,
                              isSideNavActive: !!_v27,
                              setIsSideNavActive: _v38 && !_v30 ? () => {
                                _v65("open", _v63.enable_new_sidebar, _v15), _v28();
                              } : void 0,
                              isNewSidebar: _v30,
                              hasThemeSupport: _v7,
                              hasUploader: _v8
                            }), _v0, (0, _v1.jsx)(_v68, {
                              overlayStyle: _v50
                            }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                              isShowing: _v32 || _v46 || _v62.visible,
                              isMobile: _v16,
                              children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                                inProgressJobs: _v31,
                                onClose: _v34,
                                doneJobs: _v33
                              }), (_v46 || _v17.length > 0) && (0, _v1.jsx)(_v26.ProgressToastContainer, {
                                isShowing: _v46,
                                uploadClipId: _v44,
                                setShowProgressToast: _v47,
                                setUploadClipId: _v45,
                                isMobile: _v15,
                                teamOwnerId: String(_v60),
                                page: _v18,
                                isPrivateModeOn: !_v23.privateModeOff
                              }), _v62.visible && (0, _v1.jsx)(_v13.MigrationProgressWidget, {
                                phase: _v62.phase,
                                collapsed: _v62.collapsed,
                                onToggleCollapse: _v62.onToggleCollapse,
                                onRunInBackground: _v62.onRunInBackground,
                                onDismiss: _v62.onDismiss,
                                onOpenTeamLibrary: _v62.onOpenTeamLibrary
                              })]
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              }), (0, _v1.jsx)(_v25.default, {})]
            })
          })
        })
      }), (0, _v1.jsx)(_v24.DragPreview, {})]
    });
  }], 0);
}