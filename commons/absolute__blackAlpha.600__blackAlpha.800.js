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
    _v49 = _v0.i(0);
  let _v50 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v20.useViewer)(),
      _v2 = (0, _v49.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    return (0, _v1.jsx)(_v34.DownloadModalProvider, {
      children: (0, _v1.jsx)(_v47.UpsellModalProvider, {
        children: (0, _v1.jsx)(_v33.DeleteVideoModalContextProvider, {
          children: (0, _v1.jsx)(_v39.LiveEventDeleteModalProvider, {
            children: (0, _v1.jsx)(_v30.AddToShowcaseModalContextProvider, {
              children: (0, _v1.jsx)(_v29.AddFolderToShowcaseModalContextProvider, {
                children: (0, _v1.jsx)(_v41.MoveModalContextProvider, {
                  children: (0, _v1.jsx)(_v38.FolderSettingsContextProvider, {
                    children: (0, _v1.jsx)(_v32.default, {
                      children: (0, _v1.jsx)(_v45.SlackIntegrationContextProvider, {
                        children: (0, _v1.jsx)(_v31.BulkShareInChinaModalContextProvider, {
                          children: (0, _v1.jsx)(_v40.ManageFeaturedFoldersModalContextProvider, {
                            children: (0, _v1.jsx)(_v42.ReorderFeaturedFOldersModalContextProvider, {
                              children: (0, _v1.jsx)(_v26.BulkAiModalProvider, {
                                onJobActionComplete: _v0 => {
                                  let _v1 = _v1?.teamUser?.ownerId ?? _v1?.user?.id;
                                  _v1 && _v2(_v1, _v0);
                                },
                                children: (0, _v1.jsx)(_v43.default, {
                                  children: (0, _v1.jsx)(_v44.ShowcaseDeleteModalProvider, {
                                    children: (0, _v1.jsx)(_v36.FolderDefaultsModalContextProvider, {
                                      children: (0, _v1.jsx)(_v48.VideoPrivacyModalContextProvider, {
                                        children: (0, _v1.jsx)(_v35.FilePrivacyModalContextProvider, {
                                          children: (0, _v1.jsx)(_v37.FolderPrivacyModalContextProvider, {
                                            children: (0, _v1.jsxs)(_v46.ThumbnailChangeModalContextProvider, {
                                              children: [_v0, (0, _v1.jsx)(_v28.BulkSentimentModalHost, {}), (0, _v1.jsx)(_v27.BulkPrivacyModalHost, {})]
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
      })
    });
  };
  _v0.s(["default", 0, _v50], 0);
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  function _v57({
    overlayStyle: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v56.Box, {
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
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = "video-library:wayfinder-side-nav-open",
    _v62 = (_v0, _v1) => _v1 ? `${_v61}:${_v0}:${_v1}` : `${_v61}:${_v0}`,
    _v63 = (_v0, _v1) => {
      if (!_v0) return;
      let _v2 = window.localStorage.getItem(_v62(_v0, _v1));
      return "true" === _v2 || "false" !== _v2 && void 0;
    };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = ({
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
      collapsed: _v10,
      hideWhatsNewAnnouncementCount: _v11,
      hideWhatsNew: _v12,
      bundlePromo: _v13
    }) => {
      let _v14 = (0, _v69.useWayfinderPageName)(),
        _v15 = (0, _v68.useSideNavUpgradeClick)();
      return (0, _v1.jsx)(_v71, {
        type: _v66.PlayerType.BarebonePlayer,
        assetUrls: _v8,
        children: (0, _v1.jsx)(_v67.WayfinderSideNav, {
          isOpen: _v0,
          isMobile: _v1,
          onClose: _v2,
          onResize: _v3,
          page: _v14,
          onUpgradeClick: _v15,
          showWatchMenuItem: _v6 && "library" !== _v5,
          teamOwnerId: _v7,
          footerVariant: _v9,
          collapsed: _v10,
          hideWhatsNewAnnouncementCount: _v11,
          hideWhatsNew: _v12,
          bundlePromo: _v13,
          children: _v4
        })
      });
    },
    _v71 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v65.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v72 = (0, _v2.default)(async () => ({
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
    alwaysMinimiseSearch: _v9 = !1,
    searchContentAlignment: _v10,
    hideWhatsNewAnnouncementCount: _v11 = !1,
    bundlePromo: _v12,
    bundlePromoAvailable: _v13 = !1,
    isPrivateToUser: _v14
  }) => {
    let _v15,
      _v16 = (0, _v20.useViewer)(),
      _v17 = (0, _v3.useRouter)(),
      [_v18, _v19] = (0, _v11.useToken)("breakpoints", ["lg", "sm"]),
      [_v20] = (0, _v12.useMediaQuery)([`(max-width: ${_v18})`]),
      [_v21] = (0, _v12.useMediaQuery)([`(max-width: ${_v19})`]),
      {
        uploads: _v22
      } = (0, _v18.useUploader)(),
      _v23 = (0, _v53.useUpsellAnalyticsPage)(),
      {
        userId: _v24
      } = _v17.query,
      _v25 = _v24 && !Array.isArray(_v24) ? parseInt(_v24, 10) : _v16?.teamUser?.ownerId,
      _v26 = _v16?.user?.id,
      _v27 = _v16?.teamUser?.ownerId ?? _v26,
      {
        capabilities: _v28
      } = (0, _v15.useCapability)(["privateModeOff"], _v25),
      {
        capabilities: _v29
      } = (0, _v15.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v27),
      _v30 = !!_v29.canGenerateClipTextTranslation,
      _v31 = (!!_v29.canGenerateClipTranslation || _v30) && !!_v29.canPerformBulkTranslations,
      {
        isOpen: _v32,
        handleToggleState: _v33,
        collapsed: _v34
      } = ((_v0, _v1, _v2 = !0) => {
        let _v3 = (0, _v4.useContext)(_v58.ViewerContext),
          _v4 = (0, _v59.usePageName)() === _v60.PAGE.SEARCH,
          _v5 = !_v1,
          [_v6, _v7] = (0, _v4.useState)(!!_v5 && !_v4 && (!_v2 || (_v63(_v3?.user?.id, _v0) ?? !0)));
        (0, _v4.useEffect)(() => {
          (_v1 || _v4) && _v7(!1);
        }, [_v1, _v4]), (0, _v4.useEffect)(() => {
          !_v4 && _v3?.user?.id && _v0 && _v5 && _v7(!_v2 || (_v63(_v3.user.id, _v0) ?? !0));
        }, [_v3?.user?.id, _v0, _v5, _v4, _v2]);
        let _v8 = (0, _v4.useCallback)(() => {
            if (!_v3?.user?.id || !_v0) return;
            let _v0 = !_v6;
            if (_v2) try {
              window.localStorage.setItem(_v62(_v3.user.id, _v0), _v0 ? "true" : "false");
            } catch (_v0) {}
            _v7(_v0);
          }, [_v3, _v6, _v0, _v2]),
          _v9 = _v5 && !_v6;
        return {
          isOpen: _v6,
          handleToggleState: _v8,
          collapsed: _v9
        };
      })(_v4, _v20, "library" !== _v4),
      _v35 = _v13 && !_v34 && !_v20,
      _v36 = (0, _v49.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v37 = (0, _v49.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v38 = (0, _v49.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v39 = (0, _v49.useActivityCenterStore)(_v0 => _v0.hide),
      _v40 = (0, _v49.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v27 && _v31 && _v40(_v27);
    }, [_v40, _v27, _v31]);
    let [_v41, _v42] = (0, _v4.useState)(!0),
      [_v43, _v44] = (0, _v4.useState)(_v1),
      [_v45, _v46] = (0, _v4.useState)(!1),
      [_v47, _v48] = (0, _v4.useState)(new Set()),
      [_v49, _v50] = (0, _v4.useState)(""),
      [_v51, _v52] = (0, _v4.useState)(!1),
      [_v53, _v54] = (0, _v4.useState)(!1),
      [_v55, _v56] = (0, _v4.useState)(null),
      _v57 = (0, _v4.useRef)(null);
    (0, _v19.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v50(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v52(_v22.length > 0);
    }, [_v22.length]);
    let {
        data: _v58
      } = (0, _v16.useGetUserWorkspaces)(() => _v26 ? {
        where: {
          userId: _v26
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v59 = _v25 ?? _v26,
      _v60 = (_v15 = _v58?.data, _v15?.find(_v0 => _v0.teamOwnerId === _v59)),
      _v61 = !!_v60;
    (0, _v4.useEffect)(() => {
      _v45 || _v6 ? _v44(!1) : _v44(_v1 || _v61);
    }, [_v1, _v61, _v45, _v6]), (0, _v4.useEffect)(() => {
      _v42(!_v20);
    }, [_v20]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v62), () => {
      window.removeEventListener("scroll", _v62);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v57.current?.scrollHeight;
      _v20 && _v32 && _v0 ? _v56({
        height: _v0
      }) : _v56(null);
    }, [_v20, _v32, _v53]);
    let _v62 = () => {
        _v57.current && (_v57.current.scrollTop >= 5 ? _v54(!0) : _v54(!1));
      },
      _v63 = window,
      _v64 = _v60?.teamOwnerId ?? 0,
      _v65 = null != _v26 && _v27 === _v26,
      _v66 = (0, _v14.useMigrationProgressWidget)(_v65 ? _v27 : void 0),
      _v67 = _v37 || _v51 || _v66.visible,
      _v68 = (0, _v9.useBottomRightDockStore)(_v0 => _v0.setVisible);
    (0, _v4.useLayoutEffect)(() => (_v68(_v67), () => _v68(!1)), [_v67, _v68]);
    let _v69 = (0, _v22.useTrackSidebarToggled)(),
      _v70 = (0, _v4.useMemo)(() => ({
        active: !_v20,
        anchor: "library" !== _v4 || _v34 ? "active" : "first"
      }), [_v20, _v4, _v34]),
      _v71 = (0, _v4.useMemo)(() => ({
        isSideNavOpen: !!_v32,
        setIsSideNavOpen: _v33,
        isPersonalTeamFolderAdminView: _v45,
        setIsPersonalTeamFolderAdminView: _v46,
        loadingSideNavFolderURIs: _v47,
        setLoadingSideNavFolderURIs: _v48,
        shouldShowSideNav: _v43,
        isScrolling: _v53,
        teamOwnerId: _v64,
        isPrivateToUser: _v14
      }), [_v32, _v33, _v45, _v46, _v47, _v48, _v43, _v53, _v64, _v14]);
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v63,
      children: [(0, _v1.jsx)(_v51.default, {
        children: (0, _v1.jsx)(_v50, {
          children: (0, _v1.jsxs)(_v17.OmnisearchContextProvider, {
            children: [(0, _v1.jsx)(_v54.StarredItemsProvider, {
              children: (0, _v1.jsx)(_v52.TransferFileModalProvider, {
                children: (0, _v1.jsx)(_v55.VideoLibraryLayoutContext.Provider, {
                  value: _v71,
                  children: (0, _v1.jsxs)(_v10.Flex, {
                    overflow: "hidden",
                    height: "100vh",
                    width: "100vw",
                    children: [_v43 && (0, _v1.jsx)(_v21.NewSidebarIntroContext.Provider, {
                      value: _v70,
                      children: "library" === _v4 ? (0, _v1.jsx)(_v64.SecondarySideNav, {
                        isOpen: !!_v32,
                        isMobile: _v20,
                        collapsed: _v34,
                        onClose: _v33,
                        children: _v3
                      }) : (0, _v1.jsx)(_v70, {
                        isOpen: !!_v32,
                        isMobile: _v20,
                        collapsed: _v34,
                        onClose: _v33,
                        sideNavContent: _v3,
                        sideNavSurface: _v4,
                        showWatchMenuItemAtTheBottom: !!_v16?.isFromCopyrightRestrictedRegion,
                        teamOwnerId: _v64,
                        playerAssetUrls: _v5,
                        footerVariant: "full",
                        hideWhatsNewAnnouncementCount: _v11,
                        hideWhatsNew: _v35,
                        bundlePromo: _v12
                      })
                    }), (0, _v1.jsx)(_v10.Flex, {
                      flexDir: "column",
                      flex: "1 1 auto",
                      width: _v41 ? "50%" : "100%",
                      transition: "width 180ms ease-in-out 180ms",
                      sx: _v10 ? {
                        containerType: "inline-size"
                      } : void 0,
                      children: (0, _v1.jsxs)(_v10.Flex, {
                        ref: _v57,
                        onScroll: _v62,
                        flexDir: "column",
                        minHeight: "100vh",
                        position: "relative",
                        overflowY: _v55 ? "hidden" : "auto",
                        children: [(0, _v1.jsx)(_v72, {
                          hasSearch: _v2,
                          alwaysMinimiseSearch: _v9,
                          isSideNavActive: !!_v32,
                          setIsSideNavActive: _v43 && _v20 ? () => {
                            _v69("open", _v20), _v33();
                          } : void 0,
                          hasSideNavLayout: !_v20,
                          searchContentAlignment: _v10,
                          hasThemeSupport: _v7,
                          hasUploader: _v8
                        }), _v0, (0, _v1.jsx)(_v57, {
                          overlayStyle: _v55
                        }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                          isShowing: _v67,
                          isMobile: _v21,
                          children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                            inProgressJobs: _v36,
                            onClose: _v39,
                            doneJobs: _v38
                          }), (_v51 || _v22.length > 0) && (0, _v1.jsx)(_v25.ProgressToastContainer, {
                            isShowing: _v51,
                            uploadClipId: _v49,
                            setShowProgressToast: _v52,
                            setUploadClipId: _v50,
                            isMobile: _v20,
                            teamOwnerId: String(_v64),
                            page: _v23,
                            isPrivateModeOn: !_v28.privateModeOff
                          }), _v66.visible && (0, _v1.jsx)(_v13.MigrationProgressWidget, {
                            phase: _v66.phase,
                            collapsed: _v66.collapsed,
                            onToggleCollapse: _v66.onToggleCollapse,
                            onRunInBackground: _v66.onRunInBackground,
                            onDismiss: _v66.onDismiss,
                            onOpenTeamLibrary: _v66.onOpenTeamLibrary
                          })]
                        })]
                      })
                    })]
                  })
                })
              })
            }), (0, _v1.jsx)(_v24.default, {})]
          })
        })
      }), (0, _v1.jsx)(_v23.DragPreview, {})]
    });
  }], 0);
}