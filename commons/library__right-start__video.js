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
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ({
      starredObject: _v0,
      hasReviewPageLinkUpsell: _v1,
      hasFolderShareUpsell: _v2,
      hasMutipleReviewLinks: _v3,
      getVideoMenuProps: _v4,
      handleStarMenuState: _v5
    }) => {
      let _v6 = _v0.video,
        _v7 = !!_v6?.metadata?.interactions?.edit?.uri,
        _v8 = (0, _v32.idFromUri)(_v6?.uri),
        {
          settings: _v9
        } = (0, _v25.useOrionSettings)(),
        {
          triggerReplace: _v10,
          replaceInput: _v11,
          replaceModal: _v12
        } = (0, _v28.useReplaceWithModal)(_v8, !!_v9?.new_replace_feature, _v6?.metadata?.connections?.versions?.hasInteractive, _v28.navigateToUpgrade, (0, _v32.idFromUri)(_v6?.user.uri), "library");
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v26.VideoMenu, {
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
    _v60 = ({
      starredApiResponse: _v0,
      hasFolderShareUpsell: _v1,
      hasReviewPageLinkUpsell: _v2,
      hasMutipleReviewLinks: _v3,
      dropRef: _v4,
      isDone: _v5,
      isLoadingMore: _v6,
      fetchNextPageItems: _v7
    }) => {
      let {
          getVideoMenuProps: _v8
        } = function () {
          let {
              open: _v0
            } = (0, _v56.useDownloadModal)(),
            {
              openShareFolderModal: _v1
            } = (0, _v46.useShareFolderModal)(),
            _v2 = (0, _v43.useNotification)(),
            _v3 = (0, _v44.usePageName)(),
            {
              notifyItemMoveSuccess: _v4,
              notifyItemMoveToWorkspaceSuccess: _v5
            } = (0, _v43.useNotifications)(),
            _v6 = (0, _v29.useViewer)(),
            _v7 = (0, _v37.useAnalyticsEvent)(),
            {
              contentSpaceEnabled: _v8
            } = (0, _v36.useContentSpaceEnabled)(),
            _v9 = (0, _v53.usePage)(),
            {
              openMoveModal: _v10
            } = (0, _v42.useMoveModal)();
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
                _v16 = _v12 && (0, _v58.getAnalyticsPageLinkForVideo)(_v12),
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
                    content: _v57.linkCopySuccess
                  }), _v55.BPAnalyticsV2.copyVideoShareLink({
                    location: "card",
                    element: "ellipses",
                    teamUser: _v6?.teamUser,
                    folder: _v18,
                    video: _v4
                  });
                },
                onCopyReviewPageLink: () => {
                  _v2({
                    content: _v57.linkCopySuccess
                  }), _v55.BPAnalyticsV2.clickActionCopyReviewPageLink({
                    location: "card",
                    element: "ellipses",
                    teamUser: _v6?.teamUser,
                    folder: _v18,
                    video: _v4
                  });
                },
                onCopyVideoEmbedCode: () => {
                  _v2({
                    content: _v57.embedCodeCopySuccess
                  }), _v55.BPAnalyticsV2.clickCopyVideoEmbedCode({
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
                  _v38.VideoActionAnalytics.clickMoveVideo("mvv", "video_list", _v3), _v10({
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
                        let _v0 = _v8 ? (0, _v17.translate)({
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
                          }) : (0, _v17.translate)({
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
                          _v2 = "root" === _v0 ? "/library" : (0, _v31.getFolderPageUriFromApiUri)(_v0?.uri || "");
                        _v5(_v4?.name || "", {
                          label: _v1,
                          workspaceName: _v2
                        }, () => {
                          _v6 && (0, _v49.switchTeam)(_v1, _v6.xsrft).finally(() => {
                            window.location.href = _v2;
                          });
                        });
                      } else "root" !== _v0 && _v4(_v4?.name || "", {
                        label: _v0?.name || "",
                        link: (0, _v31.getFolderPageUriFromApiUri)(_v0?.uri || "")
                      });
                    },
                    teamOwnerId: (0, _v32.idFromUri)(_v4?.user?.uri)
                  });
                },
                canDownload: !!((_v14 || _v7?.download) && _v8 && Array.isArray(_v8) && _v8.length),
                onDownload: _v8 ? () => {
                  _v0({
                    files: _v8,
                    videoId: (0, _v32.idFromUri)(_v4?.uri)
                  }), _v7((0, _v38.openDownloadModal)({
                    is_owner: _v17,
                    number_of_files: _v8.length,
                    third_party_integration: null,
                    page: _v3,
                    is_my_videos: !!_v18?.isPrivateToUser && !!_v8
                  }));
                } : void 0,
                canShare: _v15 || _v2,
                onShare: () => {
                  _v1?.(_v5, "VL_list_view_overflow"), _v55.BPAnalyticsV2.openVideoShare({
                    location: "card",
                    element: "ellipses",
                    teamUser: _v6?.teamUser,
                    folder: _v18,
                    video: _v4
                  });
                },
                hasReviewPageLinkUpsell: _v1,
                hasMultipleReviewLinks: _v3,
                deleteOptionLabel: _v35.REMOVE_FROM_STARRED,
                onClick: () => {
                  _v7((0, _v38.clickVideoCardMenu)({
                    page: (0, _v54.getPageNameFromPath)(window.location.pathname),
                    target: _v38.AnalyticsTargets.ACTIONS_MENU,
                    product: _v38.AnalyticsProducts.VIDEO_LIBRARY
                  }));
                },
                onClickAnalyticsPage: () => {
                  _v52.BigPictureClient.sendEvent(new _v52.Event("vimeo.click", 146, {
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
                  _v52.BigPictureClient.sendEvent(new _v52.Event("vimeo.click", 147, {
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
          getFolderMenuProps: _v9
        } = function () {
          let _v0 = (0, _v29.useViewer)(),
            {
              openShareFolderModal: _v1
            } = (0, _v46.useShareFolderModal)(),
            _v2 = (0, _v39.useCopyFolderLinkToast)(),
            _v3 = (0, _v41.useManageShareActionBuilder)(),
            {
              openSlackIntegrationModal: _v4
            } = (0, _v47.useSlackIntegrationModal)(),
            {
              openMoveModal: _v5
            } = (0, _v42.useMoveModal)(),
            {
              notifyItemMoveSuccess: _v6,
              notifyItemMoveToWorkspaceSuccess: _v7,
              notifyItemMoveFailure: _v8
            } = (0, _v43.useNotifications)(),
            {
              revalidateTopLevelFolders: _v9,
              revalidateFolder: _v10,
              revalidateFolderItems: _v11,
              revalidateSetOfFolderItems: _v12,
              revalidateRootItems: _v13
            } = (0, _v45.useRevalidate)(),
            {
              openFolderSettingsModal: _v14
            } = (0, _v40.useFolderSettingsModal)(),
            _v15 = (0, _v37.useAnalyticsEvent)(),
            _v16 = (0, _v44.usePageName)(),
            {
              contentSpaceEnabled: _v17
            } = (0, _v36.useContentSpaceEnabled)(_v0?.teamUser?.ownerId),
            _v18 = _v17 ? (0, _v17.translate)({
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
            }) : (0, _v17.translate)({
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
            } = (0, _v48.useUpsellModal)(),
            _v21 = (_v0, _v1) => ({
              copy: _v0,
              feature: _v38.AnalyticsFeatures.VIDEO_LIBRARY,
              location: _v38.AnalyticsLocations.SIDE_NAV,
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
                _v18 = _v0?.vimeoHttpsUrl + (0, _v31.getFolderPageUriFromApiUri)(_v5);
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
                  _v15((0, _v38.genericClick)({
                    ..._v21("share", "select_folder_menu_item")
                  }));
                },
                canDelete: !1,
                canEditFolderSettings: _v15,
                onFolderSettings: () => {
                  _v15((0, _v38.genericClick)({
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
                analyticsPageLink: _v0?.vimeoHttpsUrl + (0, _v31.getFolderAnalyticsPageUriFromApiUri)(_v5),
                folderLink: _v18,
                onCopyLink: () => {
                  _v2({
                    onManage: _v3({
                      canEdit: _v15,
                      entityUri: _v5,
                      location: "wayfinder_starred_widget",
                      panel: "INVITE_PANEL"
                    })
                  }), _v15((0, _v38.genericClick)({
                    ..._v21("copy_link", "copy_folder_link")
                  }));
                },
                canMove: _v16,
                onMove: () => {
                  _v15((0, _v38.genericClick)({
                    ..._v21("move", "select_folder_menu_item")
                  })), _v5({
                    activeFolderURI: _v5,
                    feature: "starred",
                    location: _v38.AnalyticsLocations.FOLDER_LIST,
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
                      _v9(), _v1[0].parentFolder?.uri ? _v11(_v1[0]?.parentFolder?.uri ?? "") : _v13(), "root" !== _v0 && _v0?.uri && _v11(_v0.uri), _v4 = "root" === _v0 ? _v18 : _v0?.name || "", _v5 = "root" === _v0 ? "/library" : (0, _v31.getFolderPageUriFromApiUri)(_v0?.uri || ""), _v2 && _v3 ? _v7(_v1, {
                        label: _v4,
                        workspaceName: _v3
                      }, () => {
                        _v0 && (0, _v49.switchTeam)(_v2, _v0.xsrft).finally(() => {
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
                  _v15((0, _v38.openFolderOverflow)({
                    product: _v38.AnalyticsProducts.VIDEO_LIBRARY,
                    path: window.location.pathname,
                    location: _v50.ANALYTICS_LOCATIONS.FOLDER_CARD,
                    folder_id: parseInt(_v5?.split("/").pop()),
                    is_subfolder: !!_v13,
                    feature: _v50.ANALYTICS_FEATURES.VIDEO_LIBRARY,
                    page: _v16.toUpperCase(),
                    target_object_location_type: _v6 ? "private folder" : "team folder",
                    actor_team_role: null,
                    is_my_videos: _v6 && !!_v17
                  }));
                },
                onClickAnalyticsLink: () => {
                  let _v0 = _v0?.vimeoHttpsUrl || "",
                    _v1 = _v2?.uri && _v0 + (0, _v31.getFolderAnalyticsPageUriFromApiUri)(_v2.uri);
                  _v15((0, _v38.genericClick)({
                    ..._v21("analytics", "click_folder_analytics"),
                    target: _v1 ?? ""
                  }));
                }
              };
            }
          };
        }(),
        {
          handleStarMenuState: _v10
        } = (0, _v51.useStarMenuItem)(),
        [_v11, _v12] = (0, _v2.useState)(!1),
        _v13 = () => _v12(_v0 => !_v0),
        _v14 = (0, _v29.useViewer)(),
        _v15 = (0, _v20.useColorModeValue)("slate.800", "rgba(255, 255, 255, 0.87)"),
        _v16 = (0, _v19.useRouter)(),
        _v17 = (_v0, _v1) => {
          let _v2 = "";
          if (_v0.type == _v35.ItemType.Video && _v0?.video?.link) {
            let {
                video: _v0
              } = _v0,
              _v1 = !!_v0?.metadata?.interactions?.edit?.uri,
              _v2 = (0, _v32.idFromUri)(_v0?.uri);
            _v2 = _v1 && _v2 ? `/manage/videos/${_v2}` : _v0.link;
            let _v3 = (0, _v33.getVideoBpProps)(_v0);
            _v1 || (0, _v33.trackAddRemoveStarredEntity)("vimeo.open_video", "video", _v3, _v14);
          }
          if (_v0.type == _v35.ItemType.Folder && _v0?.folder?.uri) {
            let {
              folder: _v0
            } = _v0;
            _v2 = (0, _v31.getFolderPageUriFromApiUri)(_v0.uri);
            let _v1 = (0, _v33.getFolderBpProps)(_v0);
            _v1 || (0, _v33.trackAddRemoveStarredEntity)("vimeo.content_navigation", "folder", _v1, _v14);
          }
          if (_v1) return _v2;
          _v16.push(_v2);
        };
      return (0, _v1.jsx)(_v18.StarredExpandableMenuItem, {
        label: (0, _v17.translate)({
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
        dataId: _v35.EXPANDABLE_MENU_DATA_ID,
        hasToggle: !0,
        fontWeight: 400,
        icon: (0, _v1.jsx)(_v24.Star, {}),
        leadingIconSize: (0, _v5.rem)(24),
        iconMarginRight: (0, _v5.rem)(12),
        borderRadius: (0, _v5.rem)(12),
        paddingX: (0, _v5.rem)(8),
        letterSpacing: (0, _v5.rem)(-.2),
        tabIndex: -1,
        onClickToggle: _v13,
        onClick: _v13,
        iconSize: "s",
        isOpen: _v11,
        hoverBackgroundColor: "initial",
        onKeyPress: _v0 => {
          let _v1 = _v0.target;
          _v1.classList.contains("action-menu-button") || _v1.classList.contains("starred-list-item") || _v13();
        },
        paddingTop: (0, _v5.rem)(8),
        height: 24,
        iconTopMargin: 8,
        children: [(0, _v1.jsxs)(_v3.Box, {
          id: "expandable",
          overflow: "hidden",
          padding: `${(0, _v5.rem)(4)} ${(0, _v5.rem)(8)} ${(0, _v5.rem)(4)} ${(0, _v5.rem)(0)}`,
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          width: "100%",
          children: [_v0 && _v0.length > 0 && _v0.map((_v0, _v1) => null != _v0[_v0.type] && (0, _v1.jsx)(_v30.MenuItem, {
            className: "starred-list-item",
            onClick: () => {
              _v17(_v0, !1);
            },
            iconMarginRight: (0, _v5.rem)(8),
            href: _v17(_v0, !0),
            label: _v0.name,
            dropRef: _v1 === _v0.length - 1 ? _v4 : null,
            icon: _v0.type === _v35.ItemType.Video ? (0, _v1.jsx)(_v22.VideoFilled, {
              color: "text-secondary"
            }) : (0, _v1.jsx)(_v23.FolderFilled, {
              color: "text-secondary"
            }),
            height: 32,
            iconSize: (0, _v5.rem)(20),
            showActionOnHover: !0,
            action: (0, _v1.jsx)(_v3.Box, {
              children: _v0.type == _v35.ItemType.Video ? (0, _v1.jsx)(_v59, {
                starredObject: _v0,
                hasReviewPageLinkUpsell: _v2,
                hasFolderShareUpsell: _v1,
                hasMutipleReviewLinks: _v3,
                getVideoMenuProps: _v8,
                handleStarMenuState: _v10
              }) : (0, _v1.jsx)(_v27.FolderMenu, {
                ..._v9(_v0, _v1),
                placement: "right-start",
                usePortal: !1,
                ..._v10("folder", _v0?.folder, !0),
                size: "sm"
              })
            }),
            menuItemColor: _v15,
            hoverColor: "text-primary"
          }, _v1))?.concat(!_v5 && !_v6 && _v7 ? (0, _v1.jsx)(_v34.InfiniteLoadingZone, {
            onVisible: _v7
          }, `starred-item-loading-zone-${_v0.length}`) : (0, _v1.jsx)(_v2.default.Fragment, {}, "starred-item-done-loading")), !!(!_v5 && _v6) && (0, _v1.jsx)(_v4.Flex, {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            children: (0, _v1.jsx)(_v21.Spinner, {})
          })]
        }, 1)]
      });
    };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = () => (0, _v1.jsxs)(_v3.Box, {
      padding: `${(0, _v5.rem)(10)} ${(0, _v5.rem)(0)}`,
      children: [(0, _v1.jsx)(_v13.Skeleton, {
        height: (0, _v5.rem)(28),
        width: "100%"
      }), [,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v3.Box, {
        display: "grid",
        gridTemplateColumns: `${(0, _v5.rem)(32)} ${_v1 % 2 == 0 ? "50%" : "80%"}`,
        gridGap: (0, _v5.rem)(10),
        padding: `${(0, _v5.rem)(8)} ${(0, _v5.rem)(0)}`,
        color: "grey",
        children: [(0, _v1.jsx)(_v13.Skeleton, {
          height: (0, _v5.rem)(28),
          width: "100%"
        }), (0, _v1.jsx)(_v13.Skeleton, {
          height: (0, _v5.rem)(28),
          borderRadius: "sm"
        })]
      }, _v1))]
    }),
    _v64 = () => {
      let _v0 = (0, _v2.useContext)(_v9.ViewerContext),
        {
          removeItemAsStarred: _v1
        } = (0, _v61.useStarredItem)(),
        {
          starredItemsData: _v2,
          fetchNextPageItems: _v3,
          starredListError: _v4,
          isLoading: _v5,
          isDone: _v6,
          isLoadingMore: _v7
        } = (0, _v62.useStarredItemDataContext)(),
        _v8 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
        [_v9, _v10] = (0, _v2.useState)(!0),
        {
          capabilities: _v11
        } = (0, _v7.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks"], _v8),
        _v12 = (0, _v2.useRef)(null),
        _v13 = (0, _v17.translate)({
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
      return _v5 || void 0 === _v4 && 0 !== _v2.length && void 0 !== _v2 ? (void 0 === _v2 || 0 === _v2.length) && _v5 ? (0, _v1.jsx)(_v63, {}) : (0, _v1.jsx)(_v60, {
        starredApiResponse: _v2,
        onDeleteStarredItem: (_v0, _v1, _v2) => {
          _v1(_v0, _v1, _v2);
        },
        hasFolderShareUpsell: !!_v11.canSeeUpsellModalOnShare,
        hasReviewPageLinkUpsell: !!_v11.hasVideoReviewPageDemo,
        hasMutipleReviewLinks: !!_v11.hasMultipleReviewLinks,
        dropRef: _v12,
        isDone: _v6,
        isLoading: _v5,
        fetchNextPageItems: _v3,
        isLoadingMore: _v7
      }) : (0, _v1.jsx)(_v18.StarredExpandableMenuItem, {
        label: (0, _v17.translate)({
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
        dataId: _v35.EXPANDABLE_MENU_DATA_ID,
        isOpen: _v9,
        letterSpacing: (0, _v5.rem)(-.2),
        onClick: () => _v10(_v0 => !_v0),
        onClickToggle: () => _v10(_v0 => !_v0),
        children: [(0, _v1.jsx)(_v16.Text, {
          variant: "body-xl",
          width: (0, _v5.rem)(188),
          fontSize: (0, _v5.rem)(14),
          fontWeight: 400,
          lineHeight: (0, _v5.rem)(20),
          marginLeft: (0, _v5.rem)(16),
          textColor: "text-secondary",
          children: _v13
        }, "starred")]
      });
    },
    _v65 = (0, _v5.rem)(12),
    _v66 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v13.Skeleton, {
      height: (0, _v5.rem)(40),
      margin: `${(0, _v5.rem)(1)} 0`,
      borderRadius: _v65,
      width: _v0
    }),
    _v67 = () => (0, _v1.jsx)(_v13.Skeleton, {
      height: (0, _v5.rem)(40),
      width: (0, _v5.rem)(40),
      borderRadius: _v65
    }),
    _v68 = () => (0, _v1.jsx)(_v3.Box, {
      width: (0, _v5.rem)(40),
      height: "1px",
      bg: "lightBlueAlpha.300",
      marginY: (0, _v5.rem)(8)
    }),
    _v69 = ({
      variant: _v0
    }) => {
      let _v1 = "icons" === _v0,
        {
          appSections: _v2,
          hasStarredItems: _v3,
          isInitialLoading: _v4
        } = (0, _v15.useHomePrimaryNavItems)(),
        _v5 = _v2[0]?.[0]?.key,
        _v6 = (0, _v2.useCallback)(_v0 => _v1 ? _v0.map(_v0 => (0, _v1.jsx)(_v14.PrimaryNavItem, {
          item: _v0,
          variant: "icons",
          isFirst: _v0.key === _v5
        }, _v0.key)) : (0, _v1.jsx)(_v6.ResizableSideNav.MenuItems, {
          customStyles: {
            gap: (0, _v5.rem)(2)
          },
          children: _v0.map(_v0 => (0, _v1.jsx)(_v14.PrimaryNavItem, {
            item: _v0,
            variant: "full",
            isFirst: _v0.key === _v5
          }, _v0.key))
        }), [_v1, _v5]);
      return (0, _v1.jsx)(_v3.Box, {
        style: {
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        },
        ...(_v1 ? {
          alignItems: "center"
        } : {}),
        children: (0, _v1.jsxs)(_v4.Flex, {
          flexDirection: "column",
          gap: (0, _v5.rem)(2),
          paddingBottom: (0, _v5.rem)(8),
          alignItems: _v1 ? "center" : void 0,
          children: [_v4 ? Array.from({
            length: 6
          }).map((_v0, _v1) => _v1 ? (0, _v1.jsx)(_v67, {}, _v1) : (0, _v1.jsx)(_v66, {
            width: "75%"
          }, _v1)) : _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v2.Fragment, {
            children: [_v1 > 0 && (_v1 ? (0, _v1.jsx)(_v68, {}) : (0, _v1.jsx)(_v6.ResizableSideNav.Divider, {
              my: (0, _v5.rem)(8)
            })), _v6(_v0)]
          }, _v1)), !_v1 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v6.ResizableSideNav.Divider, {
              my: (0, _v5.rem)(8)
            }), (0, _v1.jsx)(_v6.ResizableSideNav.Section, {
              children: (0, _v1.jsx)(_v64, {})
            })]
          })]
        })
      });
    };
  _v0.s(["HomePrimaryNavbar", 0, _v69], 0);
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  function _v72({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
        margin: `${(0, _v5.rem)(8)} 0`,
        color: "white",
        fontWeight: 500,
        children: [(0, _v1.jsx)(_v71.Checkmark, {
          position: "relative",
          top: (0, _v5.rem)(4),
          width: (0, _v5.rem)(20),
          height: (0, _v5.rem)(20),
          marginRight: (0, _v5.rem)(8),
          color: "white"
        }), _v0]
      }, `feature-${_v1}`))
    });
  }
  var _v73 = _v0.i(0);
  let _v74 = () => {
    let _v0 = (0, _v2.useContext)(_v9.ViewerContext),
      {
        open: _v1,
        close: _v2
      } = (0, _v48.useUpsellModal)(),
      _v3 = (0, _v73.useWayfinderPageName)();
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
          enterpriseTitle: _v57.enterpriseHeader[_v4]?.[_v0] || "",
          enterpriseSubtitle: (_v2 = _v0, "default" === _v4 ? _v57.enterpriseDefaultDescription : "ai_token" === _v2 ? _v57.enterpriseAiDescription : _v57.enterpriseStorageDescription),
          customFeaturesList: "default" === _v4 ? (0, _v1.jsx)(_v72, {
            featuresList: _v57.enterpriseDefaultFeaturesList
          }) : "ai_token" === _v0 ? (0, _v1.jsx)(_v72, {
            featuresList: _v57.enterpriseAiFeaturesList
          }) : (0, _v1.jsx)(_v72, {
            featuresList: _v57.enterpriseStorageFeaturesList
          })
        } : _v5 ? _v70.quotaModalAtLimitConfig : _v70.quotaModalConfig,
        onClose: _v2
      });
    };
  };
  _v0.s(["useSideNavUpgradeClick", 0, _v74], 0);
  var _v75 = _v0.i(0);
  let _v76 = _v6.COLLAPSED_RAIL_WIDTH + 244;
  _v0.s(["SECONDARY_SIDE_NAV_WIDTH", 0, _v76, "SecondarySideNav", 0, ({
    isOpen: _v0,
    isMobile: _v1,
    onResize: _v2,
    onClose: _v3,
    collapsed: _v4 = !1,
    children: _v5,
    hideWhatsNew: _v6 = !1
  }) => {
    let _v7 = (0, _v2.useContext)(_v9.ViewerContext),
      _v8 = (0, _v2.useContext)(_v75.VideoLibraryLayoutContext),
      _v9 = _v74(),
      _v10 = (0, _v12.useTrackSidebarToggled)(),
      _v11 = (0, _v2.useCallback)(() => {
        _v10("open", _v1), _v3();
      }, [_v1, _v3, _v10]),
      _v12 = (0, _v2.useMemo)(() => ({
        ..._v8,
        setIsSideNavOpen: _v3
      }), [_v8, _v3]),
      _v13 = _v7?.teamUser?.ownerId ?? _v7?.user?.id,
      {
        capabilities: _v14
      } = (0, _v7.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v13),
      {
        uploadQuota: _v15,
        aiCreditsQuota: _v16,
        drmLicensesQuota: _v17,
        isLoading: _v18
      } = (0, _v8.useUserQuotaApi)(),
      _v19 = _v7?.user?.id != null && _v7?.user?.id === _v13,
      _v20 = _v7?.teamUser?.plainTextPermissionLevel === "Admin",
      _v21 = !!((_v19 || _v20) && _v15),
      _v22 = _v7?.isSimplifiedSite ?? !1;
    return (0, _v1.jsxs)(_v6.ResizableSideNav, {
      active: _v0 || _v4,
      collapsed: _v4,
      isFixed: !0,
      dragConstraint: {
        min: _v76,
        max: _v76
      },
      onResize: (_v0, {
        current: _v1
      }) => _v2?.(_v1),
      onCollapsedRailClick: _v11,
      role: "group",
      children: [(0, _v1.jsx)(_v11.SideNavHeader, {
        onClose: _v3,
        isMobile: _v1,
        bg: "fill-background",
        collapsed: _v4,
        paddingRight: _v1 ? (0, _v5.rem)(16) : (0, _v5.rem)(0)
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "row",
        flexGrow: 1,
        minHeight: 0,
        width: "100%",
        bg: "fill-background",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          flexShrink: 0,
          width: (0, _v5.rem)(_v6.COLLAPSED_RAIL_WIDTH),
          alignItems: "center",
          paddingTop: (0, _v5.rem)(12),
          paddingBottom: (0, _v5.rem)(16),
          paddingX: (0, _v5.rem)(8),
          bg: "fill-background",
          children: [(0, _v1.jsx)(_v3.Box, {
            flexGrow: 1,
            width: "100%",
            overflowY: "auto",
            children: (0, _v1.jsx)(_v75.VideoLibraryLayoutContext.Provider, {
              value: _v12,
              children: (0, _v1.jsx)(_v69, {
                variant: "icons"
              })
            })
          }), (0, _v1.jsx)(_v10.SideNavFooter, {
            variant: "icons",
            isMobile: _v1,
            showWatchMenuItem: !!_v7?.isFromCopyrightRestrictedRegion,
            showWhatsNew: !_v22 && !_v6,
            showQuota: _v21,
            isLoadingQuota: _v18,
            quota: {
              uploadQuota: _v15,
              aiCreditsQuota: _v16,
              drmLicensesQuota: _v17,
              showTotal: _v14.hasTotalStorageCap,
              showUpgrade: _v14.canUpgrade
            },
            onUpgradeClick: _v9
          })]
        }), !_v4 && (0, _v1.jsx)(_v3.Box, {
          flexGrow: 1,
          minWidth: 0,
          overflowY: "auto",
          bg: "fill-surface",
          marginBottom: (0, _v5.rem)(16),
          marginRight: _v1 ? (0, _v5.rem)(16) : void 0,
          padding: (0, _v5.rem)(12),
          borderRadius: (0, _v5.rem)(20),
          children: _v5
        })]
      })]
    });
  }], 0);
}