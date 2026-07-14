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
    let _v1 = (0, _v22.useViewer)(),
      _v2 = (0, _v49.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions),
      {
        isEnabled: _v3
      } = (0, _v28.useEnableFolderBulkPrivacy)();
    return (0, _v1.jsx)(_v36.DownloadModalProvider, {
      children: (0, _v1.jsx)(_v47.UpsellModalProvider, {
        children: (0, _v1.jsx)(_v35.DeleteVideoModalContextProvider, {
          children: (0, _v1.jsx)(_v39.LiveEventDeleteModalProvider, {
            children: (0, _v1.jsx)(_v31.AddToShowcaseModalContextProvider, {
              children: (0, _v1.jsx)(_v30.AddFolderToShowcaseModalContextProvider, {
                children: (0, _v1.jsx)(_v41.MoveModalContextProvider, {
                  children: (0, _v1.jsx)(_v38.FolderSettingsContextProvider, {
                    children: (0, _v1.jsx)(_v34.default, {
                      children: (0, _v1.jsx)(_v45.SlackIntegrationContextProvider, {
                        children: (0, _v1.jsx)(_v32.BulkPrivacyModalContextProvider, {
                          children: (0, _v1.jsx)(_v33.BulkShareInChinaModalContextProvider, {
                            children: (0, _v1.jsx)(_v40.ManageFeaturedFoldersModalContextProvider, {
                              children: (0, _v1.jsx)(_v42.ReorderFeaturedFOldersModalContextProvider, {
                                children: (0, _v1.jsx)(_v26.BulkAiModalProvider, {
                                  onJobActionComplete: _v0 => {
                                    let _v1 = _v1?.teamUser?.ownerId ?? _v1?.user?.id;
                                    _v1 && _v2(_v1, _v0);
                                  },
                                  children: (0, _v1.jsx)(_v43.default, {
                                    children: (0, _v1.jsx)(_v44.ShowcaseDeleteModalProvider, {
                                      children: (0, _v1.jsx)(_v37.FolderDefaultsModalContextProvider, {
                                        children: (0, _v1.jsx)(_v48.VideoPrivacyModalContextProvider, {
                                          children: (0, _v1.jsxs)(_v46.ThumbnailChangeModalContextProvider, {
                                            children: [_v0, (0, _v1.jsx)(_v29.BulkSentimentModalHost, {}), _v3 && (0, _v1.jsx)(_v27.BulkPrivacyModalHost, {})]
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
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = (0, _v4.createContext)({
      openTransferFileModal: () => {}
    }),
    _v59 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v22.useViewer)(),
        _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        _v3 = (0, _v53.useToast)(),
        [_v4, _v5] = (0, _v4.useState)(!1),
        [_v6, _v7] = (0, _v4.useState)(null),
        [_v8, _v9] = (0, _v4.useState)(null),
        {
          trackTransferEntryPointVideoConfirmed: _v10,
          trackTransferCtaDismissed: _v11
        } = (0, _v55.useFileTransferAdoptionTracking)(),
        {
          data: _v12,
          isLoading: _v13
        } = (0, _v56.useGetUnlockedVideo)(() => _v6 ? {
          where: {
            videoId: _v6
          },
          select: ["fileTransfer.link"]
        } : null),
        _v14 = !!_v6 && !_v13 && void 0 !== _v12,
        _v15 = (0, _v4.useRef)(!1);
      (0, _v4.useEffect)(() => {
        if (!_v14 || _v15.current) return;
        _v15.current = !0;
        let _v0 = _v12?.fileTransfer?.link;
        _v0 ? (_v8 && _v10({
          entryPoint: _v8
        }), window.open(_v0, "_blank")) : _v3({
          title: (0, _v54.translate)({
            singular: "File transfer is not available for this video.",
            dictionary: {
              es: {
                singular: "La transferencia de archivos no está disponible para este vídeo."
              },
              "de-DE": {
                singular: "Dateiübertragung ist für dieses Video nicht verfügbar."
              },
              "fr-FR": {
                singular: "Le transfert de fichier n’est pas disponible pour cette vidéo."
              },
              "ja-JP": {
                singular: "この動画ではファイル転送は利用できません。"
              },
              "ko-KR": {
                singular: "이 동영상에서는 파일 전송을 사용할 수 없습니다."
              },
              "pt-BR": {
                singular: "A transferência de arquivo não está disponível para este vídeo."
              },
              "zh-CN": {
                singular: "此视频不支持文件传输。"
              }
            }
          }),
          variant: "warning"
        }), _v7(null);
      }, [_v14, _v12, _v3, _v10, _v8]);
      let _v16 = (0, _v4.useCallback)(_v0 => {
        _v9(_v0), _v5(!0);
      }, []);
      return (0, _v1.jsxs)(_v58.Provider, {
        value: {
          openTransferFileModal: _v16
        },
        children: [_v0, _v4 && (0, _v1.jsx)(_v57.VideoListModal, {
          closeVideoModal: () => {
            _v8 && _v11({
              dismissalStage: "select_video_modal",
              entryPoint: _v8
            }), _v5(!1);
          },
          isVideoListModalOpen: _v4,
          resourceId: 0,
          resourceOwnerId: _v2,
          type: "video_file_transfer",
          selectedVideo: null,
          onSuccess: _v0 => {
            if (_v0) {
              let _v0 = Number(_v0.split("/").pop());
              _v0 && (_v15.current = !1, _v7(_v0), _v5(!1));
            }
          }
        })]
      });
    };
  _v0.s(["TransferFileModalProvider", 0, _v59, "useTransferFileModal", 0, () => (0, _v4.useContext)(_v58)], 0);
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v4.useContext)(_v63.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = _v1?.user?.id,
      {
        data: _v4,
        error: _v5,
        mutate: _v6,
        isLoading: _v7,
        size: _v8,
        setSize: _v9
      } = (0, _v61.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
        select: ["uri", "name", "status", ..._v64.LIST_QUERY_FIELDS],
        where: {
          userId: _v2,
          teamMemberId: _v3
        },
        query: {
          perPage: _v64.PER_PAGE_DATA,
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
      _v11 = _v4?.flatMap(_v0 => _v0.data).filter(_v0 => _v0.status === _v64.STARRED_ITEM_STATUS_ACTIVE),
      {
        isLoadingMore: _v12,
        isDone: _v13
      } = (0, _v62.getInfiniteRequestLoadingState)({
        data: _v4,
        itemsPerPage: _v64.PER_PAGE_DATA,
        size: _v8
      });
    return (0, _v1.jsx)(_v65.StarredItemsDataContext.Provider, {
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
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v4.useContext)(_v63.ViewerContext),
        _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        _v3 = _v1?.user?.id,
        {
          data: _v4,
          mutate: _v5
        } = (0, _v61.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
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
      return (0, _v1.jsx)(_v68.StarredItemUriContext.Provider, {
        value: {
          starredItemsUri: (0, _v67.organiseStarredItemData)(_v4 && _v4[0]?.data),
          mutateStarredItemsUri: _v5,
          starredItemsUriData: _v4
        },
        children: _v0
      });
    },
    _v70 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v69, {
      children: (0, _v1.jsx)(_v66, {
        children: _v0
      })
    });
  var _v71 = _v0.i(0);
  function _v72({
    overlayStyle: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v71.Box, {
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
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = "video-library:wayfinder-side-nav-open",
    _v79 = _v0 => {
      if (!_v0) return;
      let _v1 = window.localStorage.getItem(`${_v78}:${_v0}`);
      return "true" === _v1 || "false" !== _v1 && void 0;
    };
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  function _v86({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v10.Flex, {
      direction: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v10.Flex, {
        margin: `${(0, _v84.rem)(8)} 0`,
        color: "white",
        fontWeight: 500,
        children: [(0, _v1.jsx)(_v85.Checkmark, {
          position: "relative",
          top: (0, _v84.rem)(4),
          width: (0, _v84.rem)(20),
          height: (0, _v84.rem)(20),
          marginRight: (0, _v84.rem)(8),
          color: "white"
        }), _v0]
      }, `feature-${_v1}`))
    });
  }
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = ({
      isOpen: _v0,
      isMobile: _v1,
      onClose: _v2,
      onResize: _v3,
      sideNavContent: _v4,
      sideNavSurface: _v5,
      showWatchMenuItemAtTheBottom: _v6,
      teamOwnerId: _v7,
      playerAssetUrls: _v8,
      footerVariant: _v9
    }) => {
      let _v10 = (0, _v88.useWayfinderPageName)(),
        _v11 = (() => {
          let _v0 = (0, _v4.useContext)(_v63.ViewerContext),
            {
              open: _v1,
              close: _v2
            } = (0, _v87.useUpsellModal)(),
            _v3 = (0, _v88.useWayfinderPageName)();
          return (_v0, _v1 = 0) => {
            let _v2,
              _v3 = _v0?.user?.account === "enterprise",
              _v4 = null === _v1 || _v1 < 75 ? "default" : _v1 < 95 ? "reaching" : "reached",
              _v5 = null !== _v1 && _v1 >= 100,
              _v6 = "video_size" === _v0 && null !== _v1 && _v1 >= 95;
            _v0 = "ai_token" === (_v0 = "default" === _v4 ? "default" : _v0 || "default") ? "ai_token" : "storage", _v1({
              tracking: {
                params: {
                  feature: _v5 ? "Storage_at_limit" : "Storage_general",
                  location: "sidebar",
                  page: _v3,
                  upsell_name: "quota_meter"
                },
                paywallTracking: {
                  paywallTrigger: _v5 ? "sidenav_quota_meter_at_limit_button" : "sidenav_quota_meter_general_button",
                  paywallLocation: "sidenav_quota_meter",
                  paywallType: "popup",
                  paywallFeature: _v6 ? "storage_limit" : "quota"
                }
              },
              templateType: _v3 ? "enterprise" : "default",
              modalConfig: _v3 ? {
                mkcCode: "108877",
                enterpriseTitle: _v89.enterpriseHeader[_v4]?.[_v0] || "",
                enterpriseSubtitle: (_v2 = _v0, "default" === _v4 ? _v89.enterpriseDefaultDescription : "ai_token" === _v2 ? _v89.enterpriseAiDescription : _v89.enterpriseStorageDescription),
                customFeaturesList: "default" === _v4 ? (0, _v1.jsx)(_v86, {
                  featuresList: _v89.enterpriseDefaultFeaturesList
                }) : "ai_token" === _v0 ? (0, _v1.jsx)(_v86, {
                  featuresList: _v89.enterpriseAiFeaturesList
                }) : (0, _v1.jsx)(_v86, {
                  featuresList: _v89.enterpriseStorageFeaturesList
                })
              } : _v5 ? _v83.quotaModalAtLimitConfig : _v83.quotaModalConfig,
              onClose: _v2
            });
          };
        })();
      return (0, _v1.jsx)(_v91, {
        type: _v81.PlayerType.BarebonePlayer,
        assetUrls: _v8,
        children: (0, _v1.jsx)(_v82.WayfinderSideNav, {
          isOpen: _v0,
          isMobile: _v1,
          onClose: _v2,
          onResize: _v3,
          page: _v10,
          onUpgradeClick: _v11,
          showWatchMenuItem: _v6 && "library" !== _v5,
          teamOwnerId: _v7,
          footerVariant: _v9,
          children: _v4
        })
      });
    },
    _v91 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v80.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v92 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).DefaultNavigation
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v93 = (0, _v4.createContext)({
      isPersonalTeamFolderAdminView: !1,
      setIsPersonalTeamFolderAdminView: () => {},
      isSideNavOpen: !1,
      setIsSideNavOpen: () => {},
      loadingSideNavFolderURIs: new Set(""),
      setLoadingSideNavFolderURIs: () => {},
      shouldShowSideNav: !1,
      isScrolling: !1,
      teamOwnerId: 0
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
      _v18 = (0, _v60.useUpsellAnalyticsPage)(),
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
        handleToggleState: _v28
      } = (_v0 => {
        let _v1 = (0, _v74.useWindowSize)(),
          _v2 = (0, _v4.useContext)(_v63.ViewerContext),
          [_v3, _v4] = (0, _v73.useGetUserPreferencesLazy)(),
          _v5 = (0, _v76.usePageName)() !== _v77.PAGE.SEARCH,
          [_v6, _v7] = (0, _v4.useState)(_v1.width >= _v75.BreakPoints.lg && !!_v5 && (_v79(_v2?.user?.id) ?? !0)),
          [_v8] = (0, _v73.usePatchUserPreferences)(),
          _v9 = _v1.width >= _v75.BreakPoints.md;
        return (0, _v4.useEffect)(() => {
          _v1.width <= _v75.BreakPoints.sm && _v7(!1);
        }, [_v1]), (0, _v4.useEffect)(() => {
          if (_v9 && _v5 && !_v0) {
            let _v0 = _v4?.data?.wsns;
            if ("boolean" == typeof _v0 && (_v7(_v0), _v2?.user?.id)) try {
              window.localStorage.setItem(`${_v78}:${_v2.user.id}`, _v0 ? "true" : "false");
            } catch (_v0) {}
          }
        }, [_v4?.data, _v0]), (0, _v4.useEffect)(() => {
          if (!_v2?.user?.id) return;
          let _v0 = _v79(_v2.user.id);
          "boolean" == typeof _v0 && _v9 && _v5 && !_v0 && _v7(_v0), _v3({
            select: ["wsns"],
            where: {
              userId: _v2.user.id
            }
          });
        }, [_v2?.user?.id]), {
          isOpen: _v6,
          handleToggleState: () => {
            if (!_v2?.user?.id) return;
            let _v0 = !_v6;
            _v9 && _v8({
              select: [],
              where: {
                userId: _v2.user.id
              },
              variables: {
                wsns: +!_v6
              }
            });
            try {
              window.localStorage.setItem(`${_v78}:${_v2.user.id}`, _v0 ? "true" : "false");
            } catch (_v0) {}
            _v7(_v0);
          }
        };
      })(_v6),
      _v29 = (0, _v49.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v30 = (0, _v49.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v31 = (0, _v49.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v32 = (0, _v49.useActivityCenterStore)(_v0 => _v0.hide),
      _v33 = (0, _v49.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v22 && _v26 && _v33(_v22);
    }, [_v33, _v22, _v26]);
    let [_v34, _v35] = (0, _v4.useState)(!0),
      [_v36, _v37] = (0, _v4.useState)(_v1),
      [_v38, _v39] = (0, _v4.useState)(!1),
      [_v40, _v41] = (0, _v4.useState)(new Set()),
      [_v42, _v43] = (0, _v4.useState)(""),
      [_v44, _v45] = (0, _v4.useState)(!1),
      [_v46, _v47] = (0, _v4.useState)(!1),
      [_v48, _v49] = (0, _v4.useState)(null),
      _v50 = (0, _v4.useRef)(null),
      _v51 = (0, _v4.useRef)(null);
    (0, _v20.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v43(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v17.length && (_v45(!0), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.embeddable_uploader_start", 1, {
        number_of_files: _v17.length,
        page: _v18
      })));
    }, [_v17.length, _v18]);
    let {
        data: _v52
      } = (0, _v16.useGetUserWorkspaces)(() => _v21 ? {
        where: {
          userId: _v21
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v53 = _v20 ?? _v21,
      _v54 = (_v10 = _v52?.data, _v10?.find(_v0 => _v0.teamOwnerId === _v53)),
      _v55 = !!_v54;
    (0, _v4.useEffect)(() => {
      _v54?.teamOwnerId && _v51.current?.addEventData && _v51.current.addEventData({
        team_owner_id: _v54.teamOwnerId,
        team_size: null,
        team_subscription_type: _v54?.tier,
        actor_team_role: _v54?.untranslatedUserRole
      });
    }, [_v54?.tier, _v54?.teamOwnerId, _v54?.untranslatedUserRole]), (0, _v4.useEffect)(() => {
      _v38 || _v6 ? _v37(!1) : _v37(_v1 || _v55);
    }, [_v1, _v55, _v38, _v6]), (0, _v4.useEffect)(() => {
      _v35(!_v15);
    }, [_v15]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v56), () => {
      window.removeEventListener("scroll", _v56);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v50.current?.scrollHeight;
      _v15 && _v27 && _v0 ? _v49({
        height: _v0
      }) : _v49(null);
    }, [_v15, _v27, _v46]);
    let _v56 = () => {
        _v50.current && (_v50.current.scrollTop >= 5 ? _v47(!0) : _v47(!1));
      },
      _v57 = window,
      _v58 = _v54?.teamOwnerId ?? 0,
      _v59 = null != _v21 && _v22 === _v21,
      _v60 = (0, _v14.useMigrationProgressWidget)(_v59 ? _v22 : void 0),
      {
        settings: _v61
      } = (0, _v17.useOrionSettings)(),
      _v62 = _v61.enable_new_sidebar && "library" === _v4 ? "icons" : "full";
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v57,
      children: [(0, _v1.jsx)(_v51.default, {
        children: (0, _v1.jsx)(_v21.AnalyticsEventProvider, {
          ref: _v51,
          eventData: {
            product: "Video Library"
          },
          children: (0, _v1.jsx)(_v50, {
            children: (0, _v1.jsxs)(_v18.OmnisearchContextProvider, {
              children: [(0, _v1.jsx)(_v70, {
                children: (0, _v1.jsx)(_v59, {
                  children: (0, _v1.jsx)(_v52.ReviewModalProvider, {
                    children: (0, _v1.jsx)(_v93.Provider, {
                      value: {
                        isSideNavOpen: !!_v27,
                        setIsSideNavOpen: _v28,
                        isPersonalTeamFolderAdminView: _v38,
                        setIsPersonalTeamFolderAdminView: _v39,
                        loadingSideNavFolderURIs: _v40,
                        setLoadingSideNavFolderURIs: _v41,
                        shouldShowSideNav: _v36,
                        isScrolling: _v46,
                        teamOwnerId: _v58
                      },
                      children: (0, _v1.jsxs)(_v10.Flex, {
                        overflow: "hidden",
                        height: "100vh",
                        width: "100vw",
                        children: [_v36 && (0, _v1.jsx)(_v90, {
                          isOpen: !!_v27,
                          isMobile: _v15,
                          onClose: _v28,
                          sideNavContent: _v3,
                          sideNavSurface: _v4,
                          showWatchMenuItemAtTheBottom: !!_v11?.isFromCopyrightRestrictedRegion,
                          teamOwnerId: _v58,
                          playerAssetUrls: _v5,
                          footerVariant: _v62
                        }), (0, _v1.jsx)(_v10.Flex, {
                          flexDir: "column",
                          flex: "1 1 auto",
                          width: _v34 ? "50%" : "100%",
                          transition: "width 180ms ease-in-out 180ms",
                          children: (0, _v1.jsxs)(_v10.Flex, {
                            ref: _v50,
                            onScroll: _v56,
                            flexDir: "column",
                            minHeight: "100vh",
                            position: "relative",
                            overflowY: _v48 ? "hidden" : "auto",
                            children: [(0, _v1.jsx)(_v92, {
                              hasSearch: _v2,
                              alwaysMinimiseSearch: _v9,
                              isSideNavActive: !!_v27,
                              setIsSideNavActive: _v36 ? _v28 : void 0,
                              hasThemeSupport: _v7,
                              hasUploader: _v8
                            }), _v0, (0, _v1.jsx)(_v72, {
                              overlayStyle: _v48
                            }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                              isShowing: _v30 || _v44 || _v60.visible,
                              isMobile: _v16,
                              children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                                inProgressJobs: _v29,
                                onClose: _v32,
                                doneJobs: _v31
                              }), (_v44 || _v17.length > 0) && (0, _v1.jsx)(_v25.ProgressToastContainer, {
                                isShowing: _v44,
                                uploadClipId: _v42,
                                setShowProgressToast: _v45,
                                setUploadClipId: _v43,
                                isMobile: _v15,
                                teamOwnerId: String(_v58),
                                page: _v18,
                                isPrivateModeOn: !_v23.privateModeOff
                              }), _v60.visible && (0, _v1.jsx)(_v13.MigrationProgressWidget, {
                                phase: _v60.phase,
                                collapsed: _v60.collapsed,
                                onToggleCollapse: _v60.onToggleCollapse,
                                onRunInBackground: _v60.onRunInBackground,
                                onDismiss: _v60.onDismiss,
                                onOpenTeamLibrary: _v60.onOpenTeamLibrary
                              })]
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              }), (0, _v1.jsx)(_v24.default, {})]
            })
          })
        })
      }), (0, _v1.jsx)(_v23.DragPreview, {})]
    });
  }, "VideoLibraryLayoutContext", 0, _v93], 0);
}