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
    alwaysMinimiseSearch: _v9 = !1
  }) => {
    let _v10,
      _v11 = (0, _v21.useViewer)(),
      _v12 = (0, _v3.useRouter)(),
      [_v13, _v14] = (0, _v11.useToken)("breakpoints", ["lg", "sm"]),
      [_v15] = (0, _v12.useMediaQuery)([`(max-width: ${_v13})`]),
      [_v16] = (0, _v12.useMediaQuery)([`(max-width: ${_v14})`]),
      {
        uploads: _v17
      } = (0, _v18.useUploader)(),
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
        collapsed: _v29
      } = ((_v0, _v1) => {
        let _v2 = (0, _v4.useContext)(_v60.ViewerContext),
          _v3 = (0, _v61.usePageName)() === _v62.PAGE.SEARCH,
          _v4 = !_v1,
          [_v5, _v6] = (0, _v4.useState)(!!_v4 && !_v3 && (_v65(_v2?.user?.id, _v0) ?? !0));
        (0, _v4.useEffect)(() => {
          (_v1 || _v3) && _v6(!1);
        }, [_v1, _v3]), (0, _v4.useEffect)(() => {
          !_v3 && _v2?.user?.id && _v0 && _v4 && _v6(_v65(_v2.user.id, _v0) ?? !0);
        }, [_v2?.user?.id, _v0, _v4, _v3]);
        let _v7 = (0, _v4.useCallback)(() => {
            if (!_v2?.user?.id || !_v0) return;
            let _v0 = !_v5;
            try {
              window.localStorage.setItem(_v64(_v2.user.id, _v0), _v0 ? "true" : "false");
            } catch (_v0) {}
            _v6(_v0);
          }, [_v2, _v5, _v0]),
          _v8 = _v4 && !_v5;
        return {
          isOpen: _v5,
          handleToggleState: _v7,
          collapsed: _v8
        };
      })(_v4, _v15),
      _v30 = (0, _v50.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v31 = (0, _v50.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v32 = (0, _v50.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v33 = (0, _v50.useActivityCenterStore)(_v0 => _v0.hide),
      _v34 = (0, _v50.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v22 && _v26 && _v34(_v22);
    }, [_v34, _v22, _v26]);
    let [_v35, _v36] = (0, _v4.useState)(!0),
      [_v37, _v38] = (0, _v4.useState)(_v1),
      [_v39, _v40] = (0, _v4.useState)(!1),
      [_v41, _v42] = (0, _v4.useState)(new Set()),
      [_v43, _v44] = (0, _v4.useState)(""),
      [_v45, _v46] = (0, _v4.useState)(!1),
      [_v47, _v48] = (0, _v4.useState)(!1),
      [_v49, _v50] = (0, _v4.useState)(null),
      _v51 = (0, _v4.useRef)(null),
      _v52 = (0, _v4.useRef)(null);
    (0, _v19.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v44(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v17.length && (_v46(!0), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.embeddable_uploader_start", 1, {
        number_of_files: _v17.length,
        page: _v18
      })));
    }, [_v17.length, _v18]);
    let {
        data: _v53
      } = (0, _v16.useGetUserWorkspaces)(() => _v21 ? {
        where: {
          userId: _v21
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v54 = _v20 ?? _v21,
      _v55 = (_v10 = _v53?.data, _v10?.find(_v0 => _v0.teamOwnerId === _v54)),
      _v56 = !!_v55;
    (0, _v4.useEffect)(() => {
      _v55?.teamOwnerId && _v52.current?.addEventData && _v52.current.addEventData({
        team_owner_id: _v55.teamOwnerId,
        team_size: null,
        team_subscription_type: _v55?.tier,
        actor_team_role: _v55?.untranslatedUserRole
      });
    }, [_v55?.tier, _v55?.teamOwnerId, _v55?.untranslatedUserRole]), (0, _v4.useEffect)(() => {
      _v39 || _v6 ? _v38(!1) : _v38(_v1 || _v56);
    }, [_v1, _v56, _v39, _v6]), (0, _v4.useEffect)(() => {
      _v36(!_v15);
    }, [_v15]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v57), () => {
      window.removeEventListener("scroll", _v57);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v51.current?.scrollHeight;
      _v15 && _v27 && _v0 ? _v50({
        height: _v0
      }) : _v50(null);
    }, [_v15, _v27, _v47]);
    let _v57 = () => {
        _v51.current && (_v51.current.scrollTop >= 5 ? _v48(!0) : _v48(!1));
      },
      _v58 = window,
      _v59 = _v55?.teamOwnerId ?? 0,
      _v60 = null != _v21 && _v22 === _v21,
      _v61 = (0, _v14.useMigrationProgressWidget)(_v60 ? _v22 : void 0),
      _v62 = (0, _v23.useTrackSidebarToggled)(),
      _v63 = (0, _v4.useMemo)(() => ({
        active: !_v15,
        anchor: "library" !== _v4 || _v29 ? "active" : "first"
      }), [_v15, _v4, _v29]);
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v58,
      children: [(0, _v1.jsx)(_v52.default, {
        children: (0, _v1.jsx)(_v20.AnalyticsEventProvider, {
          ref: _v52,
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
                        isSideNavOpen: !!_v27,
                        setIsSideNavOpen: _v28,
                        isPersonalTeamFolderAdminView: _v39,
                        setIsPersonalTeamFolderAdminView: _v40,
                        loadingSideNavFolderURIs: _v41,
                        setLoadingSideNavFolderURIs: _v42,
                        shouldShowSideNav: _v37,
                        isScrolling: _v47,
                        teamOwnerId: _v59
                      },
                      children: (0, _v1.jsxs)(_v10.Flex, {
                        overflow: "hidden",
                        height: "100vh",
                        width: "100vw",
                        children: [_v37 && (0, _v1.jsx)(_v22.NewSidebarIntroContext.Provider, {
                          value: _v63,
                          children: "library" === _v4 ? (0, _v1.jsx)(_v66.SecondarySideNav, {
                            isOpen: !!_v27,
                            isMobile: _v15,
                            collapsed: _v29,
                            onClose: _v28,
                            children: _v3
                          }) : (0, _v1.jsx)(_v72, {
                            isOpen: !!_v27,
                            isMobile: _v15,
                            collapsed: _v29,
                            onClose: _v28,
                            sideNavContent: _v3,
                            sideNavSurface: _v4,
                            showWatchMenuItemAtTheBottom: !!_v11?.isFromCopyrightRestrictedRegion,
                            teamOwnerId: _v59,
                            playerAssetUrls: _v5,
                            footerVariant: "full"
                          })
                        }), (0, _v1.jsx)(_v10.Flex, {
                          flexDir: "column",
                          flex: "1 1 auto",
                          width: _v35 ? "50%" : "100%",
                          transition: "width 180ms ease-in-out 180ms",
                          children: (0, _v1.jsxs)(_v10.Flex, {
                            ref: _v51,
                            onScroll: _v57,
                            flexDir: "column",
                            minHeight: "100vh",
                            position: "relative",
                            overflowY: _v49 ? "hidden" : "auto",
                            children: [(0, _v1.jsx)(_v74, {
                              hasSearch: _v2,
                              alwaysMinimiseSearch: _v9,
                              isSideNavActive: !!_v27,
                              setIsSideNavActive: _v37 && _v15 ? () => {
                                _v62("open", _v15), _v28();
                              } : void 0,
                              hasSideNavLayout: !_v15,
                              hasThemeSupport: _v7,
                              hasUploader: _v8
                            }), _v0, (0, _v1.jsx)(_v59, {
                              overlayStyle: _v49
                            }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                              isShowing: _v31 || _v45 || _v61.visible,
                              isMobile: _v16,
                              children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                                inProgressJobs: _v30,
                                onClose: _v33,
                                doneJobs: _v32
                              }), (_v45 || _v17.length > 0) && (0, _v1.jsx)(_v26.ProgressToastContainer, {
                                isShowing: _v45,
                                uploadClipId: _v43,
                                setShowProgressToast: _v46,
                                setUploadClipId: _v44,
                                isMobile: _v15,
                                teamOwnerId: String(_v59),
                                page: _v18,
                                isPrivateModeOn: !_v23.privateModeOff
                              }), _v61.visible && (0, _v1.jsx)(_v13.MigrationProgressWidget, {
                                phase: _v61.phase,
                                collapsed: _v61.collapsed,
                                onToggleCollapse: _v61.onToggleCollapse,
                                onRunInBackground: _v61.onRunInBackground,
                                onDismiss: _v61.onDismiss,
                                onOpenTeamLibrary: _v61.onOpenTeamLibrary
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