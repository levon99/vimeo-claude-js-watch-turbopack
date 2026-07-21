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
    _v16 = _v0.i(0);
  let _v17 = ({
    active: _v0,
    children: _v1,
    dropRef: _v2,
    hasActiveColor: _v3 = !1,
    hasToggle: _v4,
    hoverColor: _v5,
    iconSize: _v6 = "xs",
    id: _v7,
    indentation: _v8 = 8,
    isLoading: _v9 = !1,
    isFetching: _v10 = !1,
    isOpen: _v11,
    onClickToggle: _v12,
    toggleId: _v13,
    fontWeight: _v14,
    onKeyPress: _v15,
    tabIndex: _v16,
    hoverBackgroundColor: _v17,
    paddingTop: _v18,
    height: _v19,
    iconTopMargin: _v20,
    leadingIconSize: _v21,
    isNewSidebar: _v22 = !1,
    ..._v23
  }) => {
    let [_v24, _v25] = (0, _v2.useState)(!1),
      _v26 = void 0 !== _v11,
      _v27 = _v26 ? _v11 : _v24,
      _v28 = (0, _v12.useColorModeValue)("slate.200", "grayscale.600"),
      _v29 = (0, _v12.useColorModeValue)("slate.700", "text-secondary"),
      _v30 = _v3 ? _v0 || _v27 ? "text-primary" : _v29 : "text-primary";
    return (0, _v1.jsxs)(_v8.Box, {
      onDragStart: _v0 => _v0.dataTransfer.effectAllowed = "none",
      id: _v7,
      width: "100%",
      position: "relative",
      onKeyDown: _v15,
      overflow: "hidden",
      userSelect: "none",
      _hover: {
        "div > button": {
          "> svg": {
            path: {
              fill: _v5
            }
          }
        }
      },
      children: [(0, _v1.jsx)(_v15.IrisOnly, {
        children: (0, _v1.jsxs)(_v8.Box, {
          ref: _v2 ?? void 0,
          position: "relative",
          overflow: "hidden",
          paddingTop: _v18,
          paddingBottom: _v4 || _v1 ? "2px" : 0,
          _after: {
            content: '" "',
            position: "absolute",
            inset: 0,
            border: `${(0, _v4.rem)(2)} solid`,
            borderColor: _v9 && !_v10 ? "blue.500" : "transparent",
            borderRadius: (0, _v4.rem)(8),
            transition: "border 400ms ease",
            zIndex: 10,
            pointerEvents: "none"
          },
          children: [(_v4 || _v1) && (0, _v1.jsx)(_v10.IconButton, {
            tabIndex: _v16,
            icon: (0, _v1.jsx)(_v13.ChevronRightSmall, {}),
            "aria-label": "Toggle menu items list",
            "aria-expanded": _v27 ? "true" : "false",
            onClick: _v26 ? _v12 : () => _v25(!_v24),
            id: _v13,
            variant: "tertiary",
            position: "absolute",
            size: _v6,
            left: (0, _v4.rem)(_v8),
            border: 0,
            transition: "background 200ms",
            top: (0, _v4.rem)(_v20 || 8),
            color: _v30,
            _hover: {
              background: _v28
            },
            sx: {
              "> svg": {
                transition: "120ms ease-in-out",
                transform: _v27 ? "rotate(90deg)" : "rotate(0deg)",
                path: {
                  fill: _v30
                }
              }
            }
          }), (0, _v1.jsx)(_v16.MenuItem, {
            active: _v0,
            fontWeight: _v14,
            hoverColor: _v5,
            indentation: _v8,
            menuItemColor: _v30,
            hoverBackgroundColor: _v17,
            height: _v19,
            ..._v23
          }), (0, _v1.jsx)(_v8.Box, {
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            children: _v9 && (0, _v1.jsx)(_v11.Spinner, {
              size: "sm"
            })
          })]
        })
      }), (0, _v1.jsx)(_v15.BokehOnly, {
        children: (0, _v1.jsxs)(_v9.Flex, {
          ref: _v2 ?? void 0,
          position: "relative",
          alignItems: "center",
          overflow: "hidden",
          ...(_v22 ? {
            width: "100%",
            justifyContent: "space-between"
          } : {}),
          _after: {
            content: '" "',
            position: "absolute",
            inset: 0,
            border: `${(0, _v4.rem)(2)} solid`,
            borderColor: _v9 && !_v10 ? "vimeoBlue.500" : "transparent",
            borderRadius: "sm",
            transition: "border 400ms ease",
            pointerEvents: "none"
          },
          children: [(0, _v1.jsx)(_v16.MenuItem, {
            active: _v0,
            fontWeight: _v14,
            hoverColor: _v5,
            menuItemColor: _v30,
            hoverBackgroundColor: _v17,
            height: _v19,
            ...(_v21 ? {
              iconSize: _v21
            } : {}),
            ..._v23
          }), (_v4 || _v1) && (0, _v1.jsx)(_v10.IconButton, {
            tabIndex: _v16,
            icon: (0, _v1.jsx)(_v14.ChevronDownSmall, {}),
            "aria-label": "Toggle menu items list",
            "aria-expanded": _v27 ? "true" : "false",
            onClick: _v26 ? _v12 : () => _v25(!_v24),
            id: _v13,
            variant: "tertiary",
            size: "s" === _v6 ? "sm" : _v6,
            color: _v30,
            sx: {
              "> svg": {
                transition: "120ms ease-in-out",
                transform: _v27 ? "rotate(-180deg)" : "rotate(0deg)",
                path: {
                  fill: _v30
                }
              },
              marginLeft: _v22 ? void 0 : `${(0, _v4.rem)(-10)} !important`
            }
          }), (0, _v1.jsx)(_v8.Box, {
            position: "absolute",
            right: "0.5rem",
            children: _v9 && (0, _v1.jsx)(_v11.Spinner, {
              size: "sm"
            })
          })]
        })
      }), _v1 && _v27 && (0, _v1.jsx)(_v9.Flex, {
        flexDirection: "column",
        gap: (0, _v4.rem)(2),
        children: _v1.map(_v0 => _v0 ? (0, _v2.cloneElement)(_v0, {
          indentation: _v8 + 8
        }) : null)
      })]
    });
  };
  var _v18 = _v0.i(0),
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
    onVisible: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v2.useRef)(null);
    return (0, _v2.useEffect)(() => {
      if (!window.IntersectionObserver) return;
      let _v0 = new IntersectionObserver(_v0 => {
        _v0.some(_v0 => _v0.isIntersecting) && (_v0(), _v0.disconnect());
      }, {
        rootMargin: "200px"
      });
      return _v2.current && _v0.observe(_v2.current), () => {
        _v0 && _v0.disconnect();
      };
    }, [_v0]), (0, _v1.jsx)(_v8.Box, {
      ref: _v2,
      width: "100%",
      height: (0, _v4.rem)(1),
      ..._v1
    });
  };
  _v0.s(["InfiniteLoadingZone", 0, _v30], 0);
  var _v31 = _v0.i(0),
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
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = ({
      starredObject: _v0,
      hasReviewPageLinkUpsell: _v1,
      hasFolderShareUpsell: _v2,
      hasMutipleReviewLinks: _v3,
      getVideoMenuProps: _v4,
      handleStarMenuState: _v5
    }) => {
      let _v6 = _v0.video,
        _v7 = !!_v6?.metadata?.interactions?.edit?.uri,
        _v8 = (0, _v28.idFromUri)(_v6?.uri),
        {
          settings: _v9
        } = (0, _v22.useOrionSettings)(),
        {
          triggerReplace: _v10,
          replaceInput: _v11,
          replaceModal: _v12
        } = (0, _v25.useReplaceWithModal)(_v8, !!_v9?.new_replace_feature, _v6?.metadata?.connections?.versions?.hasInteractive);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v23.VideoMenu, {
          ..._v4(_v0, _v1, _v2, _v3),
          placement: "right-start",
          usePortal: !1,
          ..._v5("video", _v6, !0),
          size: "sm",
          canReplace: !!_v6?.metadata?.canBeReplaced && _v7 && _v6?.status === "available",
          onReplace: _v10
        }), _v11, _v12]
      });
    },
    _v56 = ({
      starredApiResponse: _v0,
      hasFolderShareUpsell: _v1,
      hasReviewPageLinkUpsell: _v2,
      hasMutipleReviewLinks: _v3,
      dropRef: _v4,
      isExpanded: _v5,
      handleToggleState: _v6,
      isDone: _v7,
      isLoadingMore: _v8,
      fetchNextPageItems: _v9,
      isNewSidebar: _v10 = !1
    }) => {
      let {
          getVideoMenuProps: _v11
        } = function () {
          let {
              open: _v0
            } = (0, _v52.useDownloadModal)(),
            {
              openShareFolderModal: _v1
            } = (0, _v42.useShareFolderModal)(),
            _v2 = (0, _v39.useNotification)(),
            _v3 = (0, _v40.usePageName)(),
            {
              notifyItemMoveSuccess: _v4,
              notifyItemMoveToWorkspaceSuccess: _v5
            } = (0, _v39.useNotifications)(),
            _v6 = (0, _v26.useViewer)(),
            _v7 = (0, _v33.useAnalyticsEvent)(),
            {
              contentSpaceEnabled: _v8
            } = (0, _v32.useContentSpaceEnabled)(),
            _v9 = (0, _v49.usePage)(),
            {
              openMoveModal: _v10
            } = (0, _v38.useMoveModal)();
          return {
            getVideoMenuProps: (_v0, _v1, _v2, _v3) => {
              let _v4 = _v0?.video,
                {
                  uri: _v5,
                  link: _v6,
                  privacy: _v7,
                  download: _v8,
                  metadata: _v9,
                  reviewPage: _v10,
                  embed: _v11,
                  manageLink: _v12,
                  canMoveToProject: _v13
                } = _v4,
                _v14 = !!_v9?.interactions?.edit?.uri,
                _v15 = !!_v9?.interactions?.invite?.uri,
                _v16 = _v12 && (0, _v54.getAnalyticsPageLinkForVideo)(_v12),
                _v17 = _v6?.user?.uri === _v4?.user?.uri,
                {
                  parentProject: _v18
                } = _v4;
              return {
                disabled: !1,
                canEdit: _v14,
                canDelete: !1,
                videoLink: _v6,
                videoEmbedCode: _v11?.html,
                reviewPageLink: _v10?.link,
                onCopyLink: () => {
                  _v2({
                    content: _v53.linkCopySuccess
                  }), _v51.BPAnalyticsV2.copyVideoShareLink({
                    location: "card",
                    element: "ellipses",
                    teamUser: _v6?.teamUser,
                    folder: _v18,
                    video: _v4
                  });
                },
                onCopyReviewPageLink: () => {
                  _v2({
                    content: _v53.linkCopySuccess
                  }), _v51.BPAnalyticsV2.clickActionCopyReviewPageLink({
                    location: "card",
                    element: "ellipses",
                    teamUser: _v6?.teamUser,
                    folder: _v18,
                    video: _v4
                  });
                },
                onCopyVideoEmbedCode: () => {
                  _v2({
                    content: _v53.embedCodeCopySuccess
                  }), _v51.BPAnalyticsV2.clickCopyVideoEmbedCode({
                    location: "card",
                    element: "ellipses",
                    teamUser: _v6?.teamUser,
                    folder: _v18,
                    video: _v4
                  });
                },
                analyticsPageLink: _v16,
                canMove: _v13,
                onMove: () => {
                  _v34.VideoActionAnalytics.clickMoveVideo("mvv", "video_list", _v3), _v10({
                    feature: "starred",
                    location: "side nav",
                    items: [{
                      name: _v4?.name,
                      type: "video",
                      uri: _v4?.uri
                    }],
                    onMoveSuccess: ({
                      selectedDestination: _v0,
                      destinationWorkspaceId: _v1,
                      destinationWorkspaceName: _v2
                    }) => {
                      if (_v1 && _v2) {
                        let _v0 = _v8 ? (0, _v6.translate)({
                            singular: "Team library",
                            dictionary: {
                              es: {
                                singular: "Biblioteca del equipo"
                              },
                              "de-DE": {
                                singular: "Teambibliothek"
                              },
                              "fr-FR": {
                                singular: "Bibliothèque de l'équipe"
                              },
                              "ja-JP": {
                                singular: "チームライブラリ"
                              },
                              "ko-KR": {
                                singular: "팀 라이브러리"
                              },
                              "pt-BR": {
                                singular: "Biblioteca da equipe"
                              },
                              "zh-CN": {
                                singular: "团队视频库"
                              }
                            }
                          }) : (0, _v6.translate)({
                            singular: "Library",
                            dictionary: {
                              es: {
                                singular: "Biblioteca"
                              },
                              "de-DE": {
                                singular: "Bibliothek"
                              },
                              "fr-FR": {
                                singular: "Bibliothèque"
                              },
                              "ja-JP": {
                                singular: "ライブラリ"
                              },
                              "ko-KR": {
                                singular: "라이브러리"
                              },
                              "pt-BR": {
                                singular: "Biblioteca"
                              },
                              "zh-CN": {
                                singular: "视频库"
                              }
                            }
                          }),
                          _v1 = "root" === _v0 ? _v0 : _v0?.name,
                          _v2 = "root" === _v0 ? "/library" : (0, _v27.getFolderPageUriFromApiUri)(_v0?.uri || "");
                        _v5(_v4?.name || "", {
                          label: _v1,
                          workspaceName: _v2
                        }, () => {
                          _v6 && (0, _v45.switchTeam)(_v1, _v6.xsrft).finally(() => {
                            window.location.href = _v2;
                          });
                        });
                      } else "root" !== _v0 && _v4(_v4?.name || "", {
                        label: _v0?.name || "",
                        link: (0, _v27.getFolderPageUriFromApiUri)(_v0?.uri || "")
                      });
                    },
                    teamOwnerId: (0, _v28.idFromUri)(_v4?.user?.uri)
                  });
                },
                canDownload: !!((_v14 || _v7?.download) && _v8 && Array.isArray(_v8) && _v8.length),
                onDownload: _v8 ? () => {
                  _v0({
                    files: _v8,
                    videoId: (0, _v28.idFromUri)(_v4?.uri)
                  }), _v7((0, _v34.openDownloadModal)({
                    is_owner: _v17,
                    number_of_files: _v8.length,
                    third_party_integration: null,
                    page: _v3,
                    is_my_videos: !!_v18?.isPrivateToUser && !!_v8
                  }));
                } : void 0,
                canShare: _v15 || _v2,
                onShare: () => {
                  _v1?.(_v5, "VL_list_view_overflow"), _v51.BPAnalyticsV2.openVideoShare({
                    location: "card",
                    element: "ellipses",
                    teamUser: _v6?.teamUser,
                    folder: _v18,
                    video: _v4
                  });
                },
                hasReviewPageLinkUpsell: _v1,
                hasMultipleReviewLinks: _v3,
                deleteOptionLabel: _v31.REMOVE_FROM_STARRED,
                onClick: () => {
                  _v7((0, _v34.clickVideoCardMenu)({
                    page: (0, _v50.getPageNameFromPath)(window.location.pathname),
                    target: _v34.AnalyticsTargets.ACTIONS_MENU,
                    product: _v34.AnalyticsProducts.VIDEO_LIBRARY
                  }));
                },
                onClickAnalyticsPage: () => {
                  _v48.BigPictureClient.sendEvent(new _v48.Event("vimeo.click", 146, {
                    copy: "analytics",
                    feature: "analytics",
                    location: "video_card",
                    name: "click_action_analytics",
                    page: _v9.toUpperCase(),
                    target: "svv_analytics",
                    target_path: _v16 || "",
                    type: "general",
                    click_type: null,
                    device_type: null,
                    path: window.location.pathname,
                    third_party_integration: null
                  }));
                },
                onClickReviewPage: () => {
                  _v48.BigPictureClient.sendEvent(new _v48.Event("vimeo.click", 147, {
                    copy: "review",
                    feature: "review",
                    location: "video_list",
                    name: "open_review_page",
                    page: _v9,
                    target: "review_page",
                    target_path: _v4?.reviewPage?.link || "",
                    type: "general",
                    click_type: null,
                    device_type: null,
                    path: window.location.pathname,
                    third_party_integration: null
                  }));
                }
              };
            }
          };
        }(),
        {
          getFolderMenuProps: _v12
        } = function () {
          let _v0 = (0, _v26.useViewer)(),
            {
              openShareFolderModal: _v1
            } = (0, _v42.useShareFolderModal)(),
            _v2 = (0, _v35.useCopyFolderLinkToast)(),
            _v3 = (0, _v37.useManageShareActionBuilder)(),
            {
              openSlackIntegrationModal: _v4
            } = (0, _v43.useSlackIntegrationModal)(),
            {
              openMoveModal: _v5
            } = (0, _v38.useMoveModal)(),
            {
              notifyItemMoveSuccess: _v6,
              notifyItemMoveToWorkspaceSuccess: _v7,
              notifyItemMoveFailure: _v8
            } = (0, _v39.useNotifications)(),
            {
              revalidateTopLevelFolders: _v9,
              revalidateFolder: _v10,
              revalidateFolderItems: _v11,
              revalidateSetOfFolderItems: _v12,
              revalidateRootItems: _v13
            } = (0, _v41.useRevalidate)(),
            {
              openFolderSettingsModal: _v14
            } = (0, _v36.useFolderSettingsModal)(),
            _v15 = (0, _v33.useAnalyticsEvent)(),
            _v16 = (0, _v40.usePageName)(),
            {
              contentSpaceEnabled: _v17
            } = (0, _v32.useContentSpaceEnabled)(_v0?.teamUser?.ownerId),
            _v18 = _v17 ? (0, _v6.translate)({
              singular: "Team library",
              dictionary: {
                es: {
                  singular: "Biblioteca del equipo"
                },
                "de-DE": {
                  singular: "Teambibliothek"
                },
                "fr-FR": {
                  singular: "Bibliothèque de l'équipe"
                },
                "ja-JP": {
                  singular: "チームライブラリ"
                },
                "ko-KR": {
                  singular: "팀 라이브러리"
                },
                "pt-BR": {
                  singular: "Biblioteca da equipe"
                },
                "zh-CN": {
                  singular: "团队视频库"
                }
              }
            }) : (0, _v6.translate)({
              singular: "Library",
              dictionary: {
                es: {
                  singular: "Biblioteca"
                },
                "de-DE": {
                  singular: "Bibliothek"
                },
                "fr-FR": {
                  singular: "Bibliothèque"
                },
                "ja-JP": {
                  singular: "ライブラリ"
                },
                "ko-KR": {
                  singular: "라이브러리"
                },
                "pt-BR": {
                  singular: "Biblioteca"
                },
                "zh-CN": {
                  singular: "视频库"
                }
              }
            }),
            {
              open: _v19,
              close: _v20
            } = (0, _v44.useUpsellModal)(),
            _v21 = (_v0, _v1) => ({
              copy: _v0,
              feature: _v34.AnalyticsFeatures.VIDEO_LIBRARY,
              location: _v34.AnalyticsLocations.SIDE_NAV,
              name: _v1,
              page: _v16.toUpperCase(),
              target: null,
              type: "general",
              target_path: null
            });
          return {
            getFolderMenuProps: (_v0, _v1) => {
              let _v2 = _v0?.folder,
                {
                  name: _v3,
                  metadata: _v4,
                  uri: _v5,
                  isPrivateToUser: _v6,
                  slackIncomingWebhooksId: _v7,
                  useParentSlackSettings: _v8,
                  isSlackNotificationEnabled: _v9
                } = _v2,
                _v10 = parseInt(_v5.split("/").pop() ?? ""),
                _v11 = parseInt(_v5.split("/")?.[2]),
                _v12 = _v4?.connections?.parentFolder,
                _v13 = _v12?.uri,
                _v14 = !!_v4?.interactions?.edit?.uri,
                _v15 = !!_v4?.interactions?.editSettings?.uri,
                _v16 = !!_v4?.interactions?.delete?.uri,
                _v17 = !!_v4?.interactions?.invite?.uri,
                _v18 = _v0?.vimeoHttpsUrl + (0, _v27.getFolderPageUriFromApiUri)(_v5),
                _v19 = _v0?.vimeoHttpsUrl + (0, _v27.getFolderAnalyticsPageUriFromApiUri)(_v5);
              return {
                canShare: _v17 || _v1,
                onShare: () => {
                  if (_v1) _v19({
                    tracking: {
                      params: {
                        feature: "review",
                        location: "folder_actions_menu",
                        page: "folder_library",
                        upsell_name: "folder_share"
                      },
                      paywallTracking: {
                        paywallTrigger: "starred_folder_menu_folder_share_button",
                        paywallLocation: "folder_library",
                        paywallType: "popup",
                        paywallFeature: "collaboration"
                      }
                    },
                    onClose: _v20
                  });else _v1?.(_v5, "wayfinder_starred_widget");
                  _v15((0, _v34.genericClick)({
                    ..._v21("share", "select_folder_menu_item")
                  }));
                },
                canDelete: !1,
                deleteOptionLabel: _v31.REMOVE_FROM_STARRED,
                canEditFolderSettings: _v15,
                onFolderSettings: () => {
                  _v15((0, _v34.genericClick)({
                    ..._v21("folder_settings", "select_folder_menu_item")
                  })), _v14({
                    userId: _v11,
                    parentFolderUri: _v12?.uri ?? "",
                    currentFolderUri: _v5,
                    isEditingFolder: !0,
                    location: "starred",
                    initialColor: _v2?.settings?.color
                  });
                },
                canEdit: _v14,
                analyticsPageLink: _v19,
                folderLink: _v18,
                onCopyLink: () => {
                  _v2({
                    onManage: _v3({
                      canEdit: _v15,
                      entityUri: _v5,
                      location: "wayfinder_starred_widget",
                      panel: "INVITE_PANEL"
                    })
                  }), _v15((0, _v34.genericClick)({
                    ..._v21("copy_link", "copy_folder_link")
                  }));
                },
                canMove: _v16,
                onMove: () => {
                  _v15((0, _v34.genericClick)({
                    ..._v21("move", "select_folder_menu_item")
                  })), _v5({
                    activeFolderURI: _v5,
                    feature: "starred",
                    location: _v34.AnalyticsLocations.FOLDER_LIST,
                    items: [{
                      name: _v3,
                      type: "folder",
                      parentFolder: _v13 ? {
                        uri: _v13,
                        isPrivateToUser: _v6
                      } : void 0,
                      uri: _v5
                    }],
                    onMoveSuccess: ({
                      selectedDestination: _v0,
                      items: _v1,
                      destinationWorkspaceId: _v2,
                      destinationWorkspaceName: _v3
                    }) => {
                      let _v4, _v5;
                      _v9(), _v1[0].parentFolder?.uri ? _v11(_v1[0]?.parentFolder?.uri ?? "") : _v13(), "root" !== _v0 && _v0?.uri && _v11(_v0.uri), _v4 = "root" === _v0 ? _v18 : _v0?.name || "", _v5 = "root" === _v0 ? "/library" : (0, _v27.getFolderPageUriFromApiUri)(_v0?.uri || ""), _v2 && _v3 ? _v7(_v1, {
                        label: _v4,
                        workspaceName: _v3
                      }, () => {
                        _v0 && (0, _v45.switchTeam)(_v2, _v0.xsrft).finally(() => {
                          window.location.href = _v5;
                        });
                      }) : _v6(_v1?.[0].name || "", {
                        label: _v4,
                        link: _v5
                      });
                    },
                    onMoveFailure: ({
                      selectedDestination: _v0,
                      items: _v1
                    }) => {
                      _v8(_v1?.[0]?.name || "", "root" === _v0 ? _v18 : _v0?.name || "");
                    },
                    teamOwnerId: _v11
                  });
                },
                hasShareUpsell: _v1,
                hasSlackIntegration: !_v8,
                isConnectedToSlack: !!_v7,
                onSlackIntegration: () => {
                  _v4({
                    userId: _v11,
                    hasSlackIntegration: !!_v7,
                    isSlackNotificationEnabled: !!_v9,
                    folderId: _v10,
                    folderName: _v3,
                    currentFolderUri: _v5,
                    async updateSubFolderData(_v0) {
                      _v10(_v5), _v12(_v0), _v12?.uri ? _v11(_v12.uri) : _v9();
                    }
                  });
                },
                onClick: () => {
                  _v15((0, _v34.openFolderOverflow)({
                    product: _v34.AnalyticsProducts.VIDEO_LIBRARY,
                    path: window.location.pathname,
                    location: _v46.ANALYTICS_LOCATIONS.FOLDER_CARD,
                    folder_id: parseInt(_v5?.split("/").pop()),
                    is_subfolder: !!_v13,
                    feature: _v46.ANALYTICS_FEATURES.VIDEO_LIBRARY,
                    page: _v16.toUpperCase(),
                    target_object_location_type: _v6 ? "private folder" : "team folder",
                    actor_team_role: null,
                    is_my_videos: _v6 && !!_v17
                  }));
                },
                onClickAnalyticsLink: () => {
                  let _v0 = _v0?.vimeoHttpsUrl || "",
                    _v1 = _v2?.uri && _v0 + (0, _v27.getFolderAnalyticsPageUriFromApiUri)(_v2.uri);
                  _v15((0, _v34.genericClick)({
                    ..._v21("analytics", "click_folder_analytics"),
                    target: _v1 ?? ""
                  }));
                }
              };
            }
          };
        }(),
        {
          handleStarMenuState: _v13
        } = (0, _v47.useStarMenuItem)(),
        [_v14, _v15] = (0, _v2.useState)(!1),
        _v16 = _v10 ? () => _v15(_v0 => !_v0) : _v6,
        _v17 = (0, _v26.useViewer)(),
        _v18 = (0, _v12.useColorModeValue)("slate.800", "rgba(255, 255, 255, 0.87)"),
        _v19 = (0, _v18.useRouter)(),
        _v20 = (_v0, _v1) => {
          let _v2 = "";
          if (_v0.type == _v31.ItemType.Video && _v0?.video?.link) {
            let {
                video: _v0
              } = _v0,
              _v1 = !!_v0?.metadata?.interactions?.edit?.uri,
              _v2 = (0, _v28.idFromUri)(_v0?.uri);
            _v2 = _v1 && _v2 ? `/manage/videos/${_v2}` : _v0.link;
            let _v3 = (0, _v29.getVideoBpProps)(_v0);
            _v1 || (0, _v29.trackAddRemoveStarredEntity)("vimeo.open_video", "video", _v3, _v17);
          }
          if (_v0.type == _v31.ItemType.Folder && _v0?.folder?.uri) {
            let {
              folder: _v0
            } = _v0;
            _v2 = (0, _v27.getFolderPageUriFromApiUri)(_v0.uri);
            let _v1 = (0, _v29.getFolderBpProps)(_v0);
            _v1 || (0, _v29.trackAddRemoveStarredEntity)("vimeo.content_navigation", "folder", _v1, _v17);
          }
          if (_v1) return _v2;
          _v19.push(_v2);
        };
      return (0, _v1.jsx)(_v17, {
        label: (0, _v6.translate)({
          singular: "Starred",
          dictionary: {
            es: {
              singular: "Destacados"
            },
            "de-DE": {
              singular: "Favoriten"
            },
            "fr-FR": {
              singular: "Favoris"
            },
            "ja-JP": {
              singular: "スター付き"
            },
            "ko-KR": {
              singular: "별표 표시 항목"
            },
            "pt-BR": {
              singular: "Favorito"
            },
            "zh-CN": {
              singular: "加星标"
            }
          }
        }),
        dataId: _v31.EXPANDABLE_MENU_DATA_ID,
        hasToggle: !0,
        fontWeight: _v10 ? 400 : 700,
        isNewSidebar: _v10,
        ...(_v10 ? {
          icon: (0, _v1.jsx)(_v21.Star, {}),
          leadingIconSize: (0, _v4.rem)(24),
          iconMarginRight: (0, _v4.rem)(12),
          borderRadius: (0, _v4.rem)(12),
          paddingX: (0, _v4.rem)(8)
        } : {}),
        letterSpacing: (0, _v4.rem)(-.2),
        tabIndex: -1,
        onClickToggle: _v16,
        onClick: _v16,
        iconSize: "s",
        isOpen: _v10 ? _v14 : _v5,
        hoverBackgroundColor: "initial",
        onKeyPress: _v0 => {
          let _v1 = _v0.target;
          _v1.classList.contains("action-menu-button") || _v1.classList.contains("starred-list-item") || _v16();
        },
        paddingTop: (0, _v4.rem)(8),
        height: 24,
        iconTopMargin: 8,
        children: [(0, _v1.jsxs)(_v8.Box, {
          id: "expandable",
          overflow: "hidden",
          padding: `${(0, _v4.rem)(4)} ${(0, _v4.rem)(8)} ${(0, _v4.rem)(4)} ${(0, _v4.rem)(0)}`,
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          width: "100%",
          children: [_v0 && _v0.length > 0 && _v0.map((_v0, _v1) => null != _v0[_v0.type] && (0, _v1.jsx)(_v16.MenuItem, {
            className: "starred-list-item",
            onClick: () => {
              _v20(_v0, !1);
            },
            iconMarginRight: _v10 ? (0, _v4.rem)(8) : (0, _v4.rem)(12),
            href: _v20(_v0, !0),
            label: _v0.name,
            dropRef: _v1 === _v0.length - 1 ? _v4 : null,
            icon: _v0.type === _v31.ItemType.Video ? (0, _v1.jsx)(_v19.VideoFilled, {
              color: "text-secondary"
            }) : (0, _v1.jsx)(_v20.FolderFilled, {
              color: "text-secondary"
            }),
            height: 32,
            iconSize: _v10 ? (0, _v4.rem)(20) : (0, _v4.rem)(16.957),
            showActionOnHover: !0,
            action: (0, _v1.jsx)(_v8.Box, {
              children: _v0.type == _v31.ItemType.Video ? (0, _v1.jsx)(_v55, {
                starredObject: _v0,
                hasReviewPageLinkUpsell: _v2,
                hasFolderShareUpsell: _v1,
                hasMutipleReviewLinks: _v3,
                getVideoMenuProps: _v11,
                handleStarMenuState: _v13
              }) : (0, _v1.jsx)(_v24.FolderMenu, {
                ..._v12(_v0, _v1),
                placement: "right-start",
                usePortal: !1,
                ..._v13("folder", _v0?.folder, !0),
                size: "sm"
              })
            }),
            menuItemColor: _v18,
            hoverColor: "text-primary"
          }, _v1))?.concat(!_v7 && !_v8 && _v9 ? (0, _v1.jsx)(_v30, {
            onVisible: _v9
          }, `starred-item-loading-zone-${_v0.length}`) : (0, _v1.jsx)(_v2.default.Fragment, {}, "starred-item-done-loading")), !!(!_v7 && _v8) && (0, _v1.jsx)(_v9.Flex, {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            children: (0, _v1.jsx)(_v11.Spinner, {})
          })]
        }, 1)]
      });
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = () => (0, _v1.jsxs)(_v8.Box, {
    padding: `${(0, _v4.rem)(10)} ${(0, _v4.rem)(0)}`,
    children: [(0, _v1.jsx)(_v60.Skeleton, {
      height: (0, _v4.rem)(28),
      width: "100%"
    }), [,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v8.Box, {
      display: "grid",
      gridTemplateColumns: `${(0, _v4.rem)(32)} ${_v1 % 2 == 0 ? "50%" : "80%"}`,
      gridGap: (0, _v4.rem)(10),
      padding: `${(0, _v4.rem)(8)} ${(0, _v4.rem)(0)}`,
      color: "grey",
      children: [(0, _v1.jsx)(_v60.Skeleton, {
        height: (0, _v4.rem)(28),
        width: "100%"
      }), (0, _v1.jsx)(_v60.Skeleton, {
        height: (0, _v4.rem)(28),
        borderRadius: "sm"
      })]
    }, _v1))]
  });
  _v0.s(["StarredItemListContainer", 0, ({
    isNewSidebar: _v0 = !1
  } = {}) => {
    let _v1 = (0, _v2.useContext)(_v7.ViewerContext),
      {
        removeItemAsStarred: _v2
      } = (0, _v58.useStarredItem)(),
      {
        starredItemsData: _v3,
        fetchNextPageItems: _v4,
        starredListError: _v5,
        isLoading: _v6,
        isDone: _v7,
        isLoadingMore: _v8
      } = (0, _v59.useStarredItemDataContext)(),
      _v9 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      [_v10, _v11] = (0, _v2.useState)(!0),
      {
        capabilities: _v12
      } = (0, _v5.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks"], _v9),
      {
        isExpanded: _v13,
        handleToggleState: _v14
      } = function () {
        let [_v0, _v1] = (0, _v2.useState)(),
          _v2 = (0, _v2.useContext)(_v7.ViewerContext),
          [_v3] = (0, _v57.usePatchUserPreferences)(),
          [_v4, _v5] = (0, _v57.useGetUserPreferencesLazy)();
        return (0, _v2.useEffect)(() => {
          _v1(_v5?.data?.psms);
        }, [_v5?.data]), (0, _v2.useEffect)(() => {
          _v2?.user?.id && _v4({
            select: ["psms"],
            where: {
              userId: _v2?.user?.id
            }
          });
        }, [_v2?.user?.id]), {
          isExpanded: _v0,
          handleToggleState: () => {
            _v3({
              select: [],
              where: {
                userId: _v2?.user?.id
              },
              variables: {
                psms: +!_v0
              }
            }), _v1(_v0 => !_v0);
          }
        };
      }(),
      _v15 = (0, _v2.useRef)(null),
      _v16 = (0, _v6.translate)({
        singular: "Hover over a folder or video to add it to Starred",
        dictionary: {
          es: {
            singular: "Pase el cursor por encima de una carpeta o un video para agregarlo a Destacados"
          },
          "de-DE": {
            singular: "Bewegen Sie den Mauszeiger über einen Ordner oder ein Video, um diese zu den Favoriten hinzuzufügen."
          },
          "fr-FR": {
            singular: "Survolez un dossier ou une vidéo pour l'ajouter aux favoris"
          },
          "ja-JP": {
            singular: "フォルダー/動画にカーソルを合わせて[スター付き]に追加"
          },
          "ko-KR": {
            singular: "별표 표시 항목에 추가하려면 폴더나 동영상 위에 마우스를 갖다 대세요."
          },
          "pt-BR": {
            singular: "Passe o mouse sobre uma pasta ou vídeo para adicioná-lo aos favoritos"
          },
          "zh-CN": {
            singular: "将鼠标悬停在文件夹或视频上方，将其加星标"
          }
        }
      });
    return _v6 || void 0 === _v5 && 0 !== _v3.length && void 0 !== _v3 ? (void 0 === _v3 || 0 === _v3.length) && _v6 || void 0 === _v13 ? (0, _v1.jsx)(_v61, {}) : (0, _v1.jsx)(_v56, {
      starredApiResponse: _v3,
      onDeleteStarredItem: (_v0, _v1, _v2) => {
        _v2(_v0, _v1, _v2);
      },
      hasFolderShareUpsell: !!_v12.canSeeUpsellModalOnShare,
      hasReviewPageLinkUpsell: !!_v12.hasVideoReviewPageDemo,
      hasMutipleReviewLinks: !!_v12.hasMultipleReviewLinks,
      dropRef: _v15,
      isExpanded: _v13,
      handleToggleState: _v14,
      isDone: _v7,
      isLoading: _v6,
      fetchNextPageItems: _v4,
      isLoadingMore: _v8,
      isNewSidebar: _v0
    }) : (0, _v1.jsx)(_v17, {
      label: (0, _v6.translate)({
        singular: "Starred",
        dictionary: {
          es: {
            singular: "Destacados"
          },
          "de-DE": {
            singular: "Favoriten"
          },
          "fr-FR": {
            singular: "Favoris"
          },
          "ja-JP": {
            singular: "スター付き"
          },
          "ko-KR": {
            singular: "별표 표시 항목"
          },
          "pt-BR": {
            singular: "Favorito"
          },
          "zh-CN": {
            singular: "加星标"
          }
        }
      }),
      hasToggle: !0,
      fontWeight: 700,
      iconSize: "s",
      dataId: _v31.EXPANDABLE_MENU_DATA_ID,
      isOpen: _v10,
      letterSpacing: (0, _v4.rem)(-.2),
      onClick: () => _v11(_v0 => !_v0),
      onClickToggle: () => _v11(_v0 => !_v0),
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        width: (0, _v4.rem)(188),
        fontSize: (0, _v4.rem)(14),
        fontWeight: 400,
        lineHeight: (0, _v4.rem)(20),
        marginLeft: (0, _v4.rem)(16),
        textColor: "text-secondary",
        children: _v16
      }, "starred")]
    });
  }], 0);
}