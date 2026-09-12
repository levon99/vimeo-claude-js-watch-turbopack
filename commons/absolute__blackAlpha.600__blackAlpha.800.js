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
      hideWhatsNewAnnouncementCount: _v11
    }) => {
      let _v12 = (0, _v70.useWayfinderPageName)(),
        _v13 = (0, _v69.useSideNavUpgradeClick)();
      return (0, _v1.jsx)(_v72, {
        type: _v67.PlayerType.BarebonePlayer,
        assetUrls: _v8,
        children: (0, _v1.jsx)(_v68.WayfinderSideNav, {
          isOpen: _v0,
          isMobile: _v1,
          onClose: _v2,
          onResize: _v3,
          page: _v12,
          onUpgradeClick: _v13,
          showWatchMenuItem: _v6 && "library" !== _v5,
          teamOwnerId: _v7,
          footerVariant: _v9,
          collapsed: _v10,
          hideWhatsNewAnnouncementCount: _v11,
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
    hideWhatsNewAnnouncementCount: _v11 = !1
  }) => {
    let _v12,
      _v13 = (0, _v21.useViewer)(),
      _v14 = (0, _v3.useRouter)(),
      [_v15, _v16] = (0, _v11.useToken)("breakpoints", ["lg", "sm"]),
      [_v17] = (0, _v12.useMediaQuery)([`(max-width: ${_v15})`]),
      [_v18] = (0, _v12.useMediaQuery)([`(max-width: ${_v16})`]),
      {
        uploads: _v19
      } = (0, _v18.useUploader)(),
      _v20 = (0, _v54.useUpsellAnalyticsPage)(),
      {
        userId: _v21
      } = _v14.query,
      _v22 = _v21 && !Array.isArray(_v21) ? parseInt(_v21, 10) : _v13?.teamUser?.ownerId,
      _v23 = _v13?.user?.id,
      _v24 = _v13?.teamUser?.ownerId ?? _v23,
      {
        capabilities: _v25
      } = (0, _v15.useCapability)(["privateModeOff"], _v22),
      {
        capabilities: _v26
      } = (0, _v15.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v24),
      _v27 = !!_v26.canGenerateClipTextTranslation,
      _v28 = (!!_v26.canGenerateClipTranslation || _v27) && !!_v26.canPerformBulkTranslations,
      {
        isOpen: _v29,
        handleToggleState: _v30,
        collapsed: _v31
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
      })(_v4, _v17, "library" !== _v4),
      _v32 = (0, _v50.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v33 = (0, _v50.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v34 = (0, _v50.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v35 = (0, _v50.useActivityCenterStore)(_v0 => _v0.hide),
      _v36 = (0, _v50.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v24 && _v28 && _v36(_v24);
    }, [_v36, _v24, _v28]);
    let [_v37, _v38] = (0, _v4.useState)(!0),
      [_v39, _v40] = (0, _v4.useState)(_v1),
      [_v41, _v42] = (0, _v4.useState)(!1),
      [_v43, _v44] = (0, _v4.useState)(new Set()),
      [_v45, _v46] = (0, _v4.useState)(""),
      [_v47, _v48] = (0, _v4.useState)(!1),
      [_v49, _v50] = (0, _v4.useState)(!1),
      [_v51, _v52] = (0, _v4.useState)(null),
      _v53 = (0, _v4.useRef)(null),
      _v54 = (0, _v4.useRef)(null);
    (0, _v19.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v46(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v19.length && (_v48(!0), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.embeddable_uploader_start", 1, {
        number_of_files: _v19.length,
        page: _v20
      })));
    }, [_v19.length, _v20]);
    let {
        data: _v55
      } = (0, _v16.useGetUserWorkspaces)(() => _v23 ? {
        where: {
          userId: _v23
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v56 = _v22 ?? _v23,
      _v57 = (_v12 = _v55?.data, _v12?.find(_v0 => _v0.teamOwnerId === _v56)),
      _v58 = !!_v57;
    (0, _v4.useEffect)(() => {
      _v57?.teamOwnerId && _v54.current?.addEventData && _v54.current.addEventData({
        team_owner_id: _v57.teamOwnerId,
        team_size: null,
        team_subscription_type: _v57?.tier,
        actor_team_role: _v57?.untranslatedUserRole
      });
    }, [_v57?.tier, _v57?.teamOwnerId, _v57?.untranslatedUserRole]), (0, _v4.useEffect)(() => {
      _v41 || _v6 ? _v40(!1) : _v40(_v1 || _v58);
    }, [_v1, _v58, _v41, _v6]), (0, _v4.useEffect)(() => {
      _v38(!_v17);
    }, [_v17]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v59), () => {
      window.removeEventListener("scroll", _v59);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v53.current?.scrollHeight;
      _v17 && _v29 && _v0 ? _v52({
        height: _v0
      }) : _v52(null);
    }, [_v17, _v29, _v49]);
    let _v59 = () => {
        _v53.current && (_v53.current.scrollTop >= 5 ? _v50(!0) : _v50(!1));
      },
      _v60 = window,
      _v61 = _v57?.teamOwnerId ?? 0,
      _v62 = null != _v23 && _v24 === _v23,
      _v63 = (0, _v14.useMigrationProgressWidget)(_v62 ? _v24 : void 0),
      _v64 = (0, _v23.useTrackSidebarToggled)(),
      _v65 = (0, _v4.useMemo)(() => ({
        active: !_v17,
        anchor: "library" !== _v4 || _v31 ? "active" : "first"
      }), [_v17, _v4, _v31]);
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v60,
      children: [(0, _v1.jsx)(_v52.default, {
        children: (0, _v1.jsx)(_v20.AnalyticsEventProvider, {
          ref: _v54,
          eventData: {
            product: "Video Library"
          },
          children: (0, _v1.jsx)(_v51, {
            children: (0, _v1.jsxs)(_v17.OmnisearchContextProvider, {
              children: [(0, _v1.jsx)(_v55.StarredItemsProvider, {
                children: (0, _v1.jsx)(_v53.TransferFileModalProvider, {
                  children: (0, _v1.jsx)(_v56.VideoLibraryLayoutContext.Provider, {
                    value: {
                      isSideNavOpen: !!_v29,
                      setIsSideNavOpen: _v30,
                      isPersonalTeamFolderAdminView: _v41,
                      setIsPersonalTeamFolderAdminView: _v42,
                      loadingSideNavFolderURIs: _v43,
                      setLoadingSideNavFolderURIs: _v44,
                      shouldShowSideNav: _v39,
                      isScrolling: _v49,
                      teamOwnerId: _v61
                    },
                    children: (0, _v1.jsxs)(_v10.Flex, {
                      overflow: "hidden",
                      height: "100vh",
                      width: "100vw",
                      children: [_v39 && (0, _v1.jsx)(_v22.NewSidebarIntroContext.Provider, {
                        value: _v65,
                        children: "library" === _v4 ? (0, _v1.jsx)(_v65.SecondarySideNav, {
                          isOpen: !!_v29,
                          isMobile: _v17,
                          collapsed: _v31,
                          onClose: _v30,
                          children: _v3
                        }) : (0, _v1.jsx)(_v71, {
                          isOpen: !!_v29,
                          isMobile: _v17,
                          collapsed: _v31,
                          onClose: _v30,
                          sideNavContent: _v3,
                          sideNavSurface: _v4,
                          showWatchMenuItemAtTheBottom: !!_v13?.isFromCopyrightRestrictedRegion,
                          teamOwnerId: _v61,
                          playerAssetUrls: _v5,
                          footerVariant: "full",
                          hideWhatsNewAnnouncementCount: _v11
                        })
                      }), (0, _v1.jsx)(_v10.Flex, {
                        flexDir: "column",
                        flex: "1 1 auto",
                        width: _v37 ? "50%" : "100%",
                        transition: "width 180ms ease-in-out 180ms",
                        sx: _v10 ? {
                          containerType: "inline-size"
                        } : void 0,
                        children: (0, _v1.jsxs)(_v10.Flex, {
                          ref: _v53,
                          onScroll: _v59,
                          flexDir: "column",
                          minHeight: "100vh",
                          position: "relative",
                          overflowY: _v51 ? "hidden" : "auto",
                          children: [(0, _v1.jsx)(_v73, {
                            hasSearch: _v2,
                            alwaysMinimiseSearch: _v9,
                            isSideNavActive: !!_v29,
                            setIsSideNavActive: _v39 && _v17 ? () => {
                              _v64("open", _v17), _v30();
                            } : void 0,
                            hasSideNavLayout: !_v17,
                            searchContentAlignment: _v10,
                            hasThemeSupport: _v7,
                            hasUploader: _v8
                          }), _v0, (0, _v1.jsx)(_v58, {
                            overlayStyle: _v51
                          }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                            isShowing: _v33 || _v47 || _v63.visible,
                            isMobile: _v18,
                            children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                              inProgressJobs: _v32,
                              onClose: _v35,
                              doneJobs: _v34
                            }), (_v47 || _v19.length > 0) && (0, _v1.jsx)(_v26.ProgressToastContainer, {
                              isShowing: _v47,
                              uploadClipId: _v45,
                              setShowProgressToast: _v48,
                              setUploadClipId: _v46,
                              isMobile: _v17,
                              teamOwnerId: String(_v61),
                              page: _v20,
                              isPrivateModeOn: !_v25.privateModeOff
                            }), _v63.visible && (0, _v1.jsx)(_v13.MigrationProgressWidget, {
                              phase: _v63.phase,
                              collapsed: _v63.collapsed,
                              onToggleCollapse: _v63.onToggleCollapse,
                              onRunInBackground: _v63.onRunInBackground,
                              onDismiss: _v63.onDismiss,
                              onOpenTeamLibrary: _v63.onOpenTeamLibrary
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