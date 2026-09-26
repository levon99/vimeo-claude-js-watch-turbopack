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
    let _v1 = (0, _v21.useViewer)(),
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
    _v57 = _v0.i(0);
  function _v58({
    overlayStyle: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v57.Box, {
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
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = "video-library:wayfinder-side-nav-open",
    _v63 = (_v0, _v1) => _v1 ? `${_v62}:${_v0}:${_v1}` : `${_v62}:${_v0}`,
    _v64 = (_v0, _v1) => {
      if (!_v0) return;
      let _v2 = window.localStorage.getItem(_v63(_v0, _v1));
      return "true" === _v2 || "false" !== _v2 && void 0;
    };
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = ({
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
      let _v14 = (0, _v70.useWayfinderPageName)(),
        _v15 = (0, _v69.useSideNavUpgradeClick)();
      return (0, _v1.jsx)(_v72, {
        type: _v67.PlayerType.BarebonePlayer,
        assetUrls: _v8,
        children: (0, _v1.jsx)(_v68.WayfinderSideNav, {
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
    _v72 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v66.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v73 = (0, _v2.default)(async () => ({
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
    bundlePromoAvailable: _v13 = !1
  }) => {
    let _v14,
      _v15 = (0, _v21.useViewer)(),
      _v16 = (0, _v3.useRouter)(),
      [_v17, _v18] = (0, _v11.useToken)("breakpoints", ["lg", "sm"]),
      [_v19] = (0, _v12.useMediaQuery)([`(max-width: ${_v17})`]),
      [_v20] = (0, _v12.useMediaQuery)([`(max-width: ${_v18})`]),
      {
        uploads: _v21
      } = (0, _v18.useUploader)(),
      _v22 = (0, _v54.useUpsellAnalyticsPage)(),
      {
        userId: _v23
      } = _v16.query,
      _v24 = _v23 && !Array.isArray(_v23) ? parseInt(_v23, 10) : _v15?.teamUser?.ownerId,
      _v25 = _v15?.user?.id,
      _v26 = _v15?.teamUser?.ownerId ?? _v25,
      {
        capabilities: _v27
      } = (0, _v15.useCapability)(["privateModeOff"], _v24),
      {
        capabilities: _v28
      } = (0, _v15.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v26),
      _v29 = !!_v28.canGenerateClipTextTranslation,
      _v30 = (!!_v28.canGenerateClipTranslation || _v29) && !!_v28.canPerformBulkTranslations,
      {
        isOpen: _v31,
        handleToggleState: _v32,
        collapsed: _v33
      } = ((_v0, _v1, _v2 = !0) => {
        let _v3 = (0, _v4.useContext)(_v59.ViewerContext),
          _v4 = (0, _v60.usePageName)() === _v61.PAGE.SEARCH,
          _v5 = !_v1,
          [_v6, _v7] = (0, _v4.useState)(!!_v5 && !_v4 && (!_v2 || (_v64(_v3?.user?.id, _v0) ?? !0)));
        (0, _v4.useEffect)(() => {
          (_v1 || _v4) && _v7(!1);
        }, [_v1, _v4]), (0, _v4.useEffect)(() => {
          !_v4 && _v3?.user?.id && _v0 && _v5 && _v7(!_v2 || (_v64(_v3.user.id, _v0) ?? !0));
        }, [_v3?.user?.id, _v0, _v5, _v4, _v2]);
        let _v8 = (0, _v4.useCallback)(() => {
            if (!_v3?.user?.id || !_v0) return;
            let _v0 = !_v6;
            if (_v2) try {
              window.localStorage.setItem(_v63(_v3.user.id, _v0), _v0 ? "true" : "false");
            } catch (_v0) {}
            _v7(_v0);
          }, [_v3, _v6, _v0, _v2]),
          _v9 = _v5 && !_v6;
        return {
          isOpen: _v6,
          handleToggleState: _v8,
          collapsed: _v9
        };
      })(_v4, _v19, "library" !== _v4),
      _v34 = _v13 && !_v33 && !_v19,
      _v35 = (0, _v50.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v36 = (0, _v50.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v37 = (0, _v50.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v38 = (0, _v50.useActivityCenterStore)(_v0 => _v0.hide),
      _v39 = (0, _v50.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v26 && _v30 && _v39(_v26);
    }, [_v39, _v26, _v30]);
    let [_v40, _v41] = (0, _v4.useState)(!0),
      [_v42, _v43] = (0, _v4.useState)(_v1),
      [_v44, _v45] = (0, _v4.useState)(!1),
      [_v46, _v47] = (0, _v4.useState)(new Set()),
      [_v48, _v49] = (0, _v4.useState)(""),
      [_v50, _v51] = (0, _v4.useState)(!1),
      [_v52, _v53] = (0, _v4.useState)(!1),
      [_v54, _v55] = (0, _v4.useState)(null),
      _v56 = (0, _v4.useRef)(null),
      _v57 = (0, _v4.useRef)(null);
    (0, _v19.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v49(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v21.length && (_v51(!0), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.embeddable_uploader_start", 1, {
        number_of_files: _v21.length,
        page: _v22
      })));
    }, [_v21.length, _v22]);
    let {
        data: _v58
      } = (0, _v16.useGetUserWorkspaces)(() => _v25 ? {
        where: {
          userId: _v25
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v59 = _v24 ?? _v25,
      _v60 = (_v14 = _v58?.data, _v14?.find(_v0 => _v0.teamOwnerId === _v59)),
      _v61 = !!_v60;
    (0, _v4.useEffect)(() => {
      _v60?.teamOwnerId && _v57.current?.addEventData && _v57.current.addEventData({
        team_owner_id: _v60.teamOwnerId,
        team_size: null,
        team_subscription_type: _v60?.tier,
        actor_team_role: _v60?.untranslatedUserRole
      });
    }, [_v60?.tier, _v60?.teamOwnerId, _v60?.untranslatedUserRole]), (0, _v4.useEffect)(() => {
      _v44 || _v6 ? _v43(!1) : _v43(_v1 || _v61);
    }, [_v1, _v61, _v44, _v6]), (0, _v4.useEffect)(() => {
      _v41(!_v19);
    }, [_v19]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v62), () => {
      window.removeEventListener("scroll", _v62);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v56.current?.scrollHeight;
      _v19 && _v31 && _v0 ? _v55({
        height: _v0
      }) : _v55(null);
    }, [_v19, _v31, _v52]);
    let _v62 = () => {
        _v56.current && (_v56.current.scrollTop >= 5 ? _v53(!0) : _v53(!1));
      },
      _v63 = window,
      _v64 = _v60?.teamOwnerId ?? 0,
      _v65 = null != _v25 && _v26 === _v25,
      _v66 = (0, _v14.useMigrationProgressWidget)(_v65 ? _v26 : void 0),
      _v67 = (0, _v23.useTrackSidebarToggled)(),
      _v68 = (0, _v4.useMemo)(() => ({
        active: !_v19,
        anchor: "library" !== _v4 || _v33 ? "active" : "first"
      }), [_v19, _v4, _v33]);
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v63,
      children: [(0, _v1.jsx)(_v52.default, {
        children: (0, _v1.jsx)(_v20.AnalyticsEventProvider, {
          ref: _v57,
          eventData: {
            product: "Video Library"
          },
          children: (0, _v1.jsx)(_v51, {
            children: (0, _v1.jsxs)(_v17.OmnisearchContextProvider, {
              children: [(0, _v1.jsx)(_v55.StarredItemsProvider, {
                children: (0, _v1.jsx)(_v53.TransferFileModalProvider, {
                  children: (0, _v1.jsx)(_v56.VideoLibraryLayoutContext.Provider, {
                    value: {
                      isSideNavOpen: !!_v31,
                      setIsSideNavOpen: _v32,
                      isPersonalTeamFolderAdminView: _v44,
                      setIsPersonalTeamFolderAdminView: _v45,
                      loadingSideNavFolderURIs: _v46,
                      setLoadingSideNavFolderURIs: _v47,
                      shouldShowSideNav: _v42,
                      isScrolling: _v52,
                      teamOwnerId: _v64
                    },
                    children: (0, _v1.jsxs)(_v10.Flex, {
                      overflow: "hidden",
                      height: "100vh",
                      width: "100vw",
                      children: [_v42 && (0, _v1.jsx)(_v22.NewSidebarIntroContext.Provider, {
                        value: _v68,
                        children: "library" === _v4 ? (0, _v1.jsx)(_v65.SecondarySideNav, {
                          isOpen: !!_v31,
                          isMobile: _v19,
                          collapsed: _v33,
                          onClose: _v32,
                          children: _v3
                        }) : (0, _v1.jsx)(_v71, {
                          isOpen: !!_v31,
                          isMobile: _v19,
                          collapsed: _v33,
                          onClose: _v32,
                          sideNavContent: _v3,
                          sideNavSurface: _v4,
                          showWatchMenuItemAtTheBottom: !!_v15?.isFromCopyrightRestrictedRegion,
                          teamOwnerId: _v64,
                          playerAssetUrls: _v5,
                          footerVariant: "full",
                          hideWhatsNewAnnouncementCount: _v11,
                          hideWhatsNew: _v34,
                          bundlePromo: _v12
                        })
                      }), (0, _v1.jsx)(_v10.Flex, {
                        flexDir: "column",
                        flex: "1 1 auto",
                        width: _v40 ? "50%" : "100%",
                        transition: "width 180ms ease-in-out 180ms",
                        sx: _v10 ? {
                          containerType: "inline-size"
                        } : void 0,
                        children: (0, _v1.jsxs)(_v10.Flex, {
                          ref: _v56,
                          onScroll: _v62,
                          flexDir: "column",
                          minHeight: "100vh",
                          position: "relative",
                          overflowY: _v54 ? "hidden" : "auto",
                          children: [(0, _v1.jsx)(_v73, {
                            hasSearch: _v2,
                            alwaysMinimiseSearch: _v9,
                            isSideNavActive: !!_v31,
                            setIsSideNavActive: _v42 && _v19 ? () => {
                              _v67("open", _v19), _v32();
                            } : void 0,
                            hasSideNavLayout: !_v19,
                            searchContentAlignment: _v10,
                            hasThemeSupport: _v7,
                            hasUploader: _v8
                          }), _v0, (0, _v1.jsx)(_v58, {
                            overlayStyle: _v54
                          }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                            isShowing: _v36 || _v50 || _v66.visible,
                            isMobile: _v20,
                            children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                              inProgressJobs: _v35,
                              onClose: _v38,
                              doneJobs: _v37
                            }), (_v50 || _v21.length > 0) && (0, _v1.jsx)(_v26.ProgressToastContainer, {
                              isShowing: _v50,
                              uploadClipId: _v48,
                              setShowProgressToast: _v51,
                              setUploadClipId: _v49,
                              isMobile: _v19,
                              teamOwnerId: String(_v64),
                              page: _v22,
                              isPrivateModeOn: !_v27.privateModeOff
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
              }), (0, _v1.jsx)(_v25.default, {})]
            })
          })
        })
      }), (0, _v1.jsx)(_v24.DragPreview, {})]
    });
  }], 0);
}