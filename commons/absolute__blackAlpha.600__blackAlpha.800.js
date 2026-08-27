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
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  function _v59({
    overlayStyle: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v58.Box, {
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
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = "video-library:wayfinder-side-nav-open",
    _v64 = (_v0, _v1) => _v1 ? `${_v63}:${_v0}:${_v1}` : `${_v63}:${_v0}`,
    _v65 = (_v0, _v1) => {
      if (!_v0) return;
      let _v2 = window.localStorage.getItem(_v64(_v0, _v1));
      return "true" === _v2 || "false" !== _v2 && void 0;
    };
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = ({
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
      let _v11 = (0, _v71.useWayfinderPageName)(),
        _v12 = (0, _v70.useSideNavUpgradeClick)();
      return (0, _v1.jsx)(_v73, {
        type: _v68.PlayerType.BarebonePlayer,
        assetUrls: _v8,
        children: (0, _v1.jsx)(_v69.WayfinderSideNav, {
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
    _v73 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v67.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v74 = (0, _v2.default)(async () => ({
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
    searchContentAlignment: _v10
  }) => {
    let _v11,
      _v12 = (0, _v21.useViewer)(),
      _v13 = (0, _v3.useRouter)(),
      [_v14, _v15] = (0, _v11.useToken)("breakpoints", ["lg", "sm"]),
      [_v16] = (0, _v12.useMediaQuery)([`(max-width: ${_v14})`]),
      [_v17] = (0, _v12.useMediaQuery)([`(max-width: ${_v15})`]),
      {
        uploads: _v18
      } = (0, _v18.useUploader)(),
      _v19 = (0, _v55.useUpsellAnalyticsPage)(),
      {
        userId: _v20
      } = _v13.query,
      _v21 = _v20 && !Array.isArray(_v20) ? parseInt(_v20, 10) : _v12?.teamUser?.ownerId,
      _v22 = _v12?.user?.id,
      _v23 = _v12?.teamUser?.ownerId ?? _v22,
      {
        capabilities: _v24
      } = (0, _v15.useCapability)(["privateModeOff"], _v21),
      {
        capabilities: _v25
      } = (0, _v15.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v23),
      _v26 = !!_v25.canGenerateClipTextTranslation,
      _v27 = (!!_v25.canGenerateClipTranslation || _v26) && !!_v25.canPerformBulkTranslations,
      {
        isOpen: _v28,
        handleToggleState: _v29,
        collapsed: _v30
      } = ((_v0, _v1, _v2 = !0) => {
        let _v3 = (0, _v4.useContext)(_v60.ViewerContext),
          _v4 = (0, _v61.usePageName)() === _v62.PAGE.SEARCH,
          _v5 = !_v1,
          [_v6, _v7] = (0, _v4.useState)(!!_v5 && !_v4 && (!_v2 || (_v65(_v3?.user?.id, _v0) ?? !0)));
        (0, _v4.useEffect)(() => {
          (_v1 || _v4) && _v7(!1);
        }, [_v1, _v4]), (0, _v4.useEffect)(() => {
          !_v4 && _v3?.user?.id && _v0 && _v5 && _v7(!_v2 || (_v65(_v3.user.id, _v0) ?? !0));
        }, [_v3?.user?.id, _v0, _v5, _v4, _v2]);
        let _v8 = (0, _v4.useCallback)(() => {
            if (!_v3?.user?.id || !_v0) return;
            let _v0 = !_v6;
            if (_v2) try {
              window.localStorage.setItem(_v64(_v3.user.id, _v0), _v0 ? "true" : "false");
            } catch (_v0) {}
            _v7(_v0);
          }, [_v3, _v6, _v0, _v2]),
          _v9 = _v5 && !_v6;
        return {
          isOpen: _v6,
          handleToggleState: _v8,
          collapsed: _v9
        };
      })(_v4, _v16, "library" !== _v4),
      _v31 = (0, _v50.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v32 = (0, _v50.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v33 = (0, _v50.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v34 = (0, _v50.useActivityCenterStore)(_v0 => _v0.hide),
      _v35 = (0, _v50.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v23 && _v27 && _v35(_v23);
    }, [_v35, _v23, _v27]);
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
    (0, _v19.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v45(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v18.length && (_v47(!0), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.embeddable_uploader_start", 1, {
        number_of_files: _v18.length,
        page: _v19
      })));
    }, [_v18.length, _v19]);
    let {
        data: _v54
      } = (0, _v16.useGetUserWorkspaces)(() => _v22 ? {
        where: {
          userId: _v22
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v55 = _v21 ?? _v22,
      _v56 = (_v11 = _v54?.data, _v11?.find(_v0 => _v0.teamOwnerId === _v55)),
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
      _v37(!_v16);
    }, [_v16]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v58), () => {
      window.removeEventListener("scroll", _v58);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v52.current?.scrollHeight;
      _v16 && _v28 && _v0 ? _v51({
        height: _v0
      }) : _v51(null);
    }, [_v16, _v28, _v48]);
    let _v58 = () => {
        _v52.current && (_v52.current.scrollTop >= 5 ? _v49(!0) : _v49(!1));
      },
      _v59 = window,
      _v60 = _v56?.teamOwnerId ?? 0,
      _v61 = null != _v22 && _v23 === _v22,
      _v62 = (0, _v14.useMigrationProgressWidget)(_v61 ? _v23 : void 0),
      _v63 = (0, _v23.useTrackSidebarToggled)(),
      _v64 = (0, _v4.useMemo)(() => ({
        active: !_v16,
        anchor: "library" !== _v4 || _v30 ? "active" : "first"
      }), [_v16, _v4, _v30]);
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v59,
      children: [(0, _v1.jsx)(_v52.default, {
        children: (0, _v1.jsx)(_v20.AnalyticsEventProvider, {
          ref: _v53,
          eventData: {
            product: "Video Library"
          },
          children: (0, _v1.jsx)(_v51, {
            children: (0, _v1.jsxs)(_v17.OmnisearchContextProvider, {
              children: [(0, _v1.jsx)(_v56.StarredItemsProvider, {
                children: (0, _v1.jsx)(_v54.TransferFileModalProvider, {
                  children: (0, _v1.jsx)(_v53.ReviewModalProvider, {
                    children: (0, _v1.jsx)(_v57.VideoLibraryLayoutContext.Provider, {
                      value: {
                        isSideNavOpen: !!_v28,
                        setIsSideNavOpen: _v29,
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
                        children: [_v38 && (0, _v1.jsx)(_v22.NewSidebarIntroContext.Provider, {
                          value: _v64,
                          children: "library" === _v4 ? (0, _v1.jsx)(_v66.SecondarySideNav, {
                            isOpen: !!_v28,
                            isMobile: _v16,
                            collapsed: _v30,
                            onClose: _v29,
                            children: _v3
                          }) : (0, _v1.jsx)(_v72, {
                            isOpen: !!_v28,
                            isMobile: _v16,
                            collapsed: _v30,
                            onClose: _v29,
                            sideNavContent: _v3,
                            sideNavSurface: _v4,
                            showWatchMenuItemAtTheBottom: !!_v12?.isFromCopyrightRestrictedRegion,
                            teamOwnerId: _v60,
                            playerAssetUrls: _v5,
                            footerVariant: "full"
                          })
                        }), (0, _v1.jsx)(_v10.Flex, {
                          flexDir: "column",
                          flex: "1 1 auto",
                          width: _v36 ? "50%" : "100%",
                          transition: "width 180ms ease-in-out 180ms",
                          sx: _v10 ? {
                            containerType: "inline-size"
                          } : void 0,
                          children: (0, _v1.jsxs)(_v10.Flex, {
                            ref: _v52,
                            onScroll: _v58,
                            flexDir: "column",
                            minHeight: "100vh",
                            position: "relative",
                            overflowY: _v50 ? "hidden" : "auto",
                            children: [(0, _v1.jsx)(_v74, {
                              hasSearch: _v2,
                              alwaysMinimiseSearch: _v9,
                              isSideNavActive: !!_v28,
                              setIsSideNavActive: _v38 && _v16 ? () => {
                                _v63("open", _v16), _v29();
                              } : void 0,
                              hasSideNavLayout: !_v16,
                              searchContentAlignment: _v10,
                              hasThemeSupport: _v7,
                              hasUploader: _v8
                            }), _v0, (0, _v1.jsx)(_v59, {
                              overlayStyle: _v50
                            }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                              isShowing: _v32 || _v46 || _v62.visible,
                              isMobile: _v17,
                              children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                                inProgressJobs: _v31,
                                onClose: _v34,
                                doneJobs: _v33
                              }), (_v46 || _v18.length > 0) && (0, _v1.jsx)(_v26.ProgressToastContainer, {
                                isShowing: _v46,
                                uploadClipId: _v44,
                                setShowProgressToast: _v47,
                                setUploadClipId: _v45,
                                isMobile: _v16,
                                teamOwnerId: String(_v60),
                                page: _v19,
                                isPrivateModeOn: !_v24.privateModeOff
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