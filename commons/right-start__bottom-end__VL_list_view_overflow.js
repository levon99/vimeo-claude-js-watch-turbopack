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
  let _v30 = {
      side_nav: {
        usePortal: !1,
        size: "sm",
        placement: "right-start"
      },
      homepage: {
        usePortal: !0,
        size: "md",
        placement: "bottom-end"
      }
    },
    _v31 = {
      side_nav: {
        shareEntryPoint: "VL_list_view_overflow",
        moveLocation: "side nav"
      },
      homepage: {
        shareEntryPoint: "VL_starred_carousel_overflow",
        moveLocation: "starred_carousel_menu"
      }
    },
    _v32 = {
      side_nav: {
        shareEntryPoint: "wayfinder_starred_widget",
        moveLocation: _v29.AnalyticsLocations.FOLDER_LIST,
        folderSettingsLocation: "starred",
        upsellLocation: "folder_actions_menu",
        upsellPage: "folder_library",
        upsellPaywallLocation: "folder_library"
      },
      homepage: {
        shareEntryPoint: "VL_starred_carousel_overflow",
        moveLocation: "starred_carousel_menu",
        folderSettingsLocation: "starred_carousel",
        upsellLocation: "starred_carousel_menu",
        upsellPage: "wayfinder_home",
        upsellPaywallLocation: "wayfinder_home"
      }
    };
  var _v33 = _v0.i(0),
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
    _v46 = _v0.i(0);
  let _v47 = ({
    item: _v0,
    surface: _v1
  }) => {
    let _v2 = (0, _v28.useViewer)(),
      _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
      {
        capabilities: _v4
      } = (0, _v26.useCapability)(["canSeeUpsellModalOnShare"], _v3),
      {
        getFolderMenuProps: _v5
      } = function () {
        let _v0 = (0, _v28.useViewer)(),
          {
            openShareFolderModal: _v1
          } = (0, _v42.useShareFolderModal)(),
          _v2 = (0, _v36.useCopyFolderLinkToast)(),
          {
            isEnabled: _v3,
            copyFolderShareLink: _v4
          } = (0, _v34.useCopyFolderShareLink)(),
          _v5 = (0, _v38.useManageShareActionBuilder)(),
          {
            openSlackIntegrationModal: _v6
          } = (0, _v43.useSlackIntegrationModal)(),
          {
            openMoveModal: _v7
          } = (0, _v39.useMoveModal)(),
          {
            notifyItemMoveSuccess: _v8,
            notifyItemMoveToWorkspaceSuccess: _v9,
            notifyItemMoveFailure: _v10
          } = (0, _v40.useNotifications)(),
          {
            revalidateTopLevelFolders: _v11,
            revalidateFolder: _v12,
            revalidateFolderItems: _v13,
            revalidateSetOfFolderItems: _v14,
            revalidateRootItems: _v15
          } = (0, _v41.useRevalidate)(),
          {
            openFolderSettingsModal: _v16
          } = (0, _v37.useFolderSettingsModal)(),
          {
            mutateStarredItemsData: _v17
          } = (0, _v35.useStarredItemDataContext)(),
          {
            contentSpaceEnabled: _v18
          } = (0, _v33.useContentSpaceEnabled)(_v0?.teamUser?.ownerId),
          _v19 = _v18 ? (0, _v12.translate)({
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
          }) : (0, _v12.translate)({
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
            open: _v20,
            close: _v21
          } = (0, _v44.useUpsellModal)();
        return {
          getFolderMenuProps: (_v0, _v1, _v2) => {
            let _v3 = _v0?.folder,
              {
                name: _v4,
                metadata: _v5,
                uri: _v6,
                isPrivateToUser: _v7,
                slackIncomingWebhooksId: _v8,
                useParentSlackSettings: _v9,
                isSlackNotificationEnabled: _v10
              } = _v3,
              _v11 = parseInt(_v6.split("/").pop() ?? ""),
              _v12 = parseInt(_v6.split("/")?.[2]),
              _v13 = _v5?.connections?.parentFolder,
              _v14 = _v13?.uri,
              _v15 = !!_v5?.interactions?.edit?.uri,
              _v16 = !!_v5?.interactions?.editSettings?.uri,
              _v17 = !!_v5?.interactions?.delete?.uri,
              _v18 = !!_v5?.interactions?.invite?.uri,
              _v19 = _v0?.vimeoHttpsUrl + (0, _v22.getFolderPageUriFromApiUri)(_v6),
              _v20 = _v0?.vimeoHttpsUrl + (0, _v22.getFolderAnalyticsPageUriFromApiUri)(_v6),
              _v21 = (_v0 = !0) => {
                _v2({
                  isSuccess: _v0,
                  onManage: _v5({
                    canEdit: _v16,
                    entityUri: _v6,
                    location: _v2.shareEntryPoint,
                    panel: "INVITE_PANEL"
                  })
                });
              };
            return {
              canShare: _v18 || _v1,
              onShare: () => {
                if (_v1) _v20({
                  tracking: {
                    params: {
                      feature: "review",
                      location: _v2.upsellLocation,
                      page: _v2.upsellPage,
                      upsell_name: "folder_share"
                    },
                    paywallTracking: {
                      paywallTrigger: "starred_folder_menu_folder_share_button",
                      paywallLocation: _v2.upsellPaywallLocation,
                      paywallType: "popup",
                      paywallFeature: "collaboration"
                    }
                  },
                  onClose: _v21
                });else _v1?.(_v6, _v2.shareEntryPoint);
              },
              canDelete: !1,
              canEditFolderSettings: _v16,
              onFolderSettings: () => {
                _v16({
                  userId: _v12,
                  parentFolderUri: _v13?.uri ?? "",
                  currentFolderUri: _v6,
                  isEditingFolder: !0,
                  location: _v2.folderSettingsLocation,
                  initialColor: _v3?.settings?.color,
                  onSettingsChange: () => {
                    _v17?.();
                  }
                });
              },
              canEdit: _v15,
              analyticsPageLink: _v20,
              folderLink: _v19,
              onCopyLink: _v21,
              onCopyLinkAsync: _v3 ? () => _v4(_v11, _v19, _v21) : void 0,
              canMove: _v17,
              onMove: () => {
                _v7({
                  activeFolderURI: _v6,
                  feature: "starred",
                  location: _v2.moveLocation,
                  items: [{
                    name: _v4,
                    type: "folder",
                    parentFolder: _v14 ? {
                      uri: _v14,
                      isPrivateToUser: _v7
                    } : void 0,
                    uri: _v6
                  }],
                  onMoveSuccess: ({
                    selectedDestination: _v0,
                    items: _v1,
                    destinationWorkspaceId: _v2,
                    destinationWorkspaceName: _v3
                  }) => {
                    let _v4, _v5;
                    _v11(), _v1[0].parentFolder?.uri ? _v13(_v1[0]?.parentFolder?.uri ?? "") : _v15(), "root" !== _v0 && _v0?.uri && _v13(_v0.uri), _v4 = "root" === _v0 ? _v19 : _v0?.name || "", _v5 = "root" === _v0 ? "/library" : (0, _v22.getFolderPageUriFromApiUri)(_v0?.uri || ""), _v2 && _v3 ? _v9(_v1, {
                      label: _v4,
                      workspaceName: _v3
                    }, () => {
                      _v0 && (0, _v45.switchTeam)(_v2, _v0.xsrft).finally(() => {
                        window.location.href = _v5;
                      });
                    }) : _v8(_v1?.[0].name || "", {
                      label: _v4,
                      link: _v5
                    });
                  },
                  onMoveFailure: ({
                    selectedDestination: _v0,
                    items: _v1
                  }) => {
                    _v10(_v1?.[0]?.name || "", "root" === _v0 ? _v19 : _v0?.name || "");
                  },
                  teamOwnerId: _v12
                });
              },
              hasShareUpsell: _v1,
              hasSlackIntegration: !_v9,
              isConnectedToSlack: !!_v8,
              onSlackIntegration: () => {
                _v6({
                  userId: _v12,
                  hasSlackIntegration: !!_v8,
                  isSlackNotificationEnabled: !!_v10,
                  folderId: _v11,
                  folderName: _v4,
                  currentFolderUri: _v6,
                  async updateSubFolderData(_v0) {
                    _v12(_v6), _v14(_v0), _v13?.uri ? _v13(_v13.uri) : _v11();
                  }
                });
              }
            };
          }
        };
      }(),
      {
        handleStarMenuState: _v6
      } = (0, _v46.useStarMenuItem)(),
      {
        trackStarredItemMenuToggled: _v7
      } = (0, _v20.useStarredTracking)(),
      _v8 = _v30[_v1],
      _v9 = _v0.folder?.uri.split("/").pop();
    return (0, _v1.jsx)(_v27.FolderMenu, {
      ..._v5(_v0, !!_v4.canSeeUpsellModalOnShare, _v32[_v1]),
      ..._v8,
      ..._v6("folder", _v0.folder, !0),
      onOpenChange: _v0 => {
        void 0 !== _v9 && _v7({
          starredItemSurface: _v1,
          entityType: "folder",
          folderId: _v9,
          starredItemMenuAction: _v0 ? "open" : "close"
        });
      }
    });
  };
  _v0.s(["StarredFolderMenu", 0, _v47], 0);
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = ({
    item: _v0,
    surface: _v1
  }) => {
    let _v2 = _v0.video,
      _v3 = (0, _v28.useViewer)(),
      _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
      {
        capabilities: _v5
      } = (0, _v26.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks"], _v4),
      {
        getVideoMenuProps: _v6
      } = function () {
        let {
            open: _v0
          } = (0, _v50.useDownloadModal)(),
          {
            openShareFolderModal: _v1
          } = (0, _v42.useShareFolderModal)(),
          _v2 = (0, _v40.useNotification)(),
          {
            notifyItemMoveSuccess: _v3,
            notifyItemMoveToWorkspaceSuccess: _v4
          } = (0, _v40.useNotifications)(),
          _v5 = (0, _v28.useViewer)(),
          {
            contentSpaceEnabled: _v6
          } = (0, _v33.useContentSpaceEnabled)(),
          {
            pathname: _v7
          } = (0, _v14.useRouter)(),
          {
            openMoveModal: _v8
          } = (0, _v39.useMoveModal)();
        return {
          getVideoMenuProps: (_v0, _v1, _v2, _v3, _v4) => {
            let _v5 = _v0?.video,
              {
                uri: _v6,
                link: _v7,
                privacy: _v8,
                download: _v9,
                metadata: _v10,
                reviewPage: _v11,
                embed: _v12,
                manageLink: _v13,
                canMoveToProject: _v14
              } = _v5,
              _v15 = !!_v10?.interactions?.edit?.uri,
              _v16 = !!_v10?.interactions?.invite?.uri,
              _v17 = _v13 && (0, _v53.getAnalyticsPageLinkForVideo)(_v13);
            return {
              disabled: !1,
              canEdit: _v15,
              canDelete: !1,
              videoLink: _v7,
              videoEmbedCode: _v12?.html,
              reviewPageLink: _v11?.link,
              onCopyLink: () => {
                _v2({
                  content: _v51.linkCopySuccess
                });
              },
              onCopyReviewPageLink: () => {
                _v2({
                  content: _v51.linkCopySuccess
                });
              },
              onCopyVideoEmbedCode: () => {
                _v2({
                  content: _v51.embedCodeCopySuccess
                });
              },
              analyticsPageLink: _v17,
              canMove: _v14,
              onMove: () => {
                _v8({
                  activeFolderURI: _v5?.parentProject?.uri,
                  feature: "starred",
                  location: _v4.moveLocation,
                  initialDestination: _v5?.parentProject?.uri ? {
                    isPrivateToUser: _v5.parentProject.isPrivateToUser,
                    name: "",
                    uri: _v5.parentProject.uri
                  } : void 0,
                  items: [{
                    name: _v5?.name,
                    type: "video",
                    uri: _v5?.uri
                  }],
                  onMoveSuccess: ({
                    selectedDestination: _v0,
                    destinationWorkspaceId: _v1,
                    destinationWorkspaceName: _v2
                  }) => {
                    if (_v1 && _v2) {
                      let _v0 = _v6 ? (0, _v12.translate)({
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
                        }) : (0, _v12.translate)({
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
                        _v2 = "root" === _v0 ? "/library" : (0, _v22.getFolderPageUriFromApiUri)(_v0?.uri || "");
                      _v4(_v5?.name || "", {
                        label: _v1,
                        workspaceName: _v2
                      }, () => {
                        _v5 && (0, _v45.switchTeam)(_v1, _v5.xsrft).finally(() => {
                          window.location.href = _v2;
                        });
                      });
                    } else "root" !== _v0 && _v3(_v5?.name || "", {
                      label: _v0?.name || "",
                      link: (0, _v22.getFolderPageUriFromApiUri)(_v0?.uri || "")
                    });
                  },
                  teamOwnerId: (0, _v23.idFromUri)(_v5?.user?.uri)
                });
              },
              canDownload: !!((_v15 || _v8?.download) && _v9 && Array.isArray(_v9) && _v9.length),
              onDownload: _v9 ? () => {
                _v0({
                  files: _v9,
                  videoId: (0, _v23.idFromUri)(_v5?.uri)
                });
              } : void 0,
              canShare: _v16 || _v2,
              onShare: () => {
                _v1?.(_v6, _v4.shareEntryPoint, void 0, void 0, void 0, {
                  pageSource: (0, _v52.getPrivacyChangePageSource)(_v7),
                  entryPoint: "share_menu"
                });
              },
              hasReviewPageLinkUpsell: _v1,
              hasMultipleReviewLinks: _v3,
              deleteOptionLabel: _v25.REMOVE_FROM_STARRED
            };
          }
        };
      }(),
      {
        handleStarMenuState: _v7
      } = (0, _v46.useStarMenuItem)(),
      {
        trackStarredItemMenuToggled: _v8
      } = (0, _v20.useStarredTracking)(),
      _v9 = (0, _v8.useOrionSetting)("new_replace_feature"),
      _v10 = !!_v2?.metadata?.interactions?.edit?.uri,
      {
        triggerReplace: _v11,
        replaceInput: _v12,
        replaceModal: _v13
      } = (0, _v49.useReplaceWithModal)((0, _v23.idFromUri)(_v2?.uri), _v9, _v2?.metadata?.connections?.versions?.hasInteractive, _v49.navigateToUpgrade, (0, _v23.idFromUri)(_v2?.user.uri), "library"),
      _v14 = _v30[_v1],
      _v15 = _v2?.uri.split("/").pop();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v48.VideoMenu, {
        ..._v6(_v0, !!_v5.hasVideoReviewPageDemo, !!_v5.canSeeUpsellModalOnShare, !!_v5.hasMultipleReviewLinks, _v31[_v1]),
        ..._v14,
        ..._v7("video", _v2, !0),
        onOpenChange: _v0 => {
          void 0 !== _v15 && _v8({
            starredItemSurface: _v1,
            entityType: "video",
            clipId: _v15,
            starredItemMenuAction: _v0 ? "open" : "close"
          });
        },
        canReplace: !!_v2?.metadata?.canBeReplaced && _v10 && _v2?.status === "available",
        onReplace: _v11
      }), _v12, _v13]
    });
  };
  _v0.s(["StarredVideoMenu", 0, _v54], 0);
  let _v55 = ({
    starredApiResponse: _v0,
    dropRef: _v1,
    isDone: _v2,
    isLoadingMore: _v3,
    fetchNextPageItems: _v4
  }) => {
    let [_v5, _v6] = (0, _v2.useState)(!1),
      {
        trackStarredItemClicked: _v7,
        trackStarredSectionToggled: _v8
      } = (0, _v20.useStarredTracking)(),
      _v9 = () => {
        _v8({
          starredSectionAction: _v5 ? "close" : "open"
        }), _v6(_v0 => !_v0);
      },
      _v10 = (0, _v15.useColorModeValue)("slate.800", "rgba(255, 255, 255, 0.87)"),
      _v11 = (0, _v14.useRouter)(),
      _v12 = (_v0, _v1) => {
        let _v2 = "";
        if (_v0.type == _v25.ItemType.Video && _v0?.video?.link) {
          let {
              video: _v0
            } = _v0,
            _v1 = !!_v0?.metadata?.interactions?.edit?.uri,
            _v2 = (0, _v23.idFromUri)(_v0?.uri);
          _v2 = _v1 && _v2 ? `/manage/videos/${_v2}` : _v0.link;
        }
        if (_v0.type == _v25.ItemType.Folder && _v0?.folder?.uri) {
          let {
            folder: _v0
          } = _v0;
          _v2 = (0, _v22.getFolderPageUriFromApiUri)(_v0.uri);
        }
        if (_v1) return _v2;
        _v11.push(_v2);
      };
    return (0, _v1.jsx)(_v13.StarredExpandableMenuItem, {
      label: (0, _v12.translate)({
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
      dataId: _v25.EXPANDABLE_MENU_DATA_ID,
      hasToggle: !0,
      fontWeight: 400,
      icon: (0, _v1.jsx)(_v19.Star, {}),
      leadingIconSize: (0, _v6.rem)(24),
      iconMarginRight: (0, _v6.rem)(12),
      borderRadius: (0, _v6.rem)(12),
      paddingX: (0, _v6.rem)(8),
      letterSpacing: (0, _v6.rem)(-.2),
      tabIndex: -1,
      onClickToggle: _v9,
      onClick: _v9,
      iconSize: "s",
      isOpen: _v5,
      hoverBackgroundColor: "initial",
      onKeyPress: _v0 => {
        let _v1 = _v0.target;
        null !== _v1.closest("button") || _v1.classList.contains("action-menu-button") || _v1.classList.contains("starred-list-item") || _v9();
      },
      paddingTop: (0, _v6.rem)(8),
      height: 24,
      iconTopMargin: 8,
      children: [(0, _v1.jsxs)(_v3.Box, {
        id: "expandable",
        overflow: "hidden",
        padding: `${(0, _v6.rem)(4)} ${(0, _v6.rem)(8)} ${(0, _v6.rem)(4)} ${(0, _v6.rem)(0)}`,
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        width: "100%",
        children: [_v0 && _v0.length > 0 && _v0.map((_v0, _v1) => null != _v0[_v0.type] && (0, _v1.jsx)(_v21.MenuItem, {
          className: "starred-list-item",
          onClick: () => {
            (_v0 => {
              if (_v0.type === _v25.ItemType.Video) {
                let _v0 = _v0.video?.uri.split("/").pop();
                if (void 0 === _v0) return;
                _v7({
                  starredItemSurface: "side_nav",
                  entityType: "video",
                  clipId: _v0
                });
                return;
              }
              let _v1 = _v0.folder?.uri.split("/").pop();
              void 0 !== _v1 && _v7({
                starredItemSurface: "side_nav",
                entityType: "folder",
                folderId: _v1
              });
            })(_v0), _v12(_v0, !1);
          },
          iconMarginRight: (0, _v6.rem)(8),
          href: _v12(_v0, !0),
          label: _v0.name,
          dropRef: _v1 === _v0.length - 1 ? _v1 : null,
          icon: _v0.type === _v25.ItemType.Video ? (0, _v1.jsx)(_v17.VideoFilled, {
            color: "text-secondary"
          }) : (0, _v1.jsx)(_v18.FolderFilled, {
            color: "text-secondary"
          }),
          height: 32,
          iconSize: (0, _v6.rem)(20),
          showActionOnHover: !0,
          action: (0, _v1.jsx)(_v3.Box, {
            children: _v0.type == _v25.ItemType.Video ? (0, _v1.jsx)(_v54, {
              item: _v0,
              surface: "side_nav"
            }) : (0, _v1.jsx)(_v47, {
              item: _v0,
              surface: "side_nav"
            })
          }),
          menuItemColor: _v10,
          hoverColor: "text-primary"
        }, _v1))?.concat(!_v2 && !_v3 && _v4 ? (0, _v1.jsx)(_v24.InfiniteLoadingZone, {
          onVisible: _v4
        }, `starred-item-loading-zone-${_v0.length}`) : (0, _v1.jsx)(_v2.default.Fragment, {}, "starred-item-done-loading")), !!(!_v2 && _v3) && (0, _v1.jsx)(_v4.Flex, {
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          children: (0, _v1.jsx)(_v16.Spinner, {})
        })]
      }, 1)]
    });
  };
  var _v56 = _v0.i(0);
  let _v57 = () => (0, _v1.jsxs)(_v3.Box, {
      padding: `${(0, _v6.rem)(10)} ${(0, _v6.rem)(0)}`,
      children: [(0, _v1.jsx)(_v5.Skeleton, {
        height: (0, _v6.rem)(28),
        width: "100%"
      }), [,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v3.Box, {
        display: "grid",
        gridTemplateColumns: `${(0, _v6.rem)(32)} ${_v1 % 2 == 0 ? "50%" : "80%"}`,
        gridGap: (0, _v6.rem)(10),
        padding: `${(0, _v6.rem)(8)} ${(0, _v6.rem)(0)}`,
        color: "grey",
        children: [(0, _v1.jsx)(_v5.Skeleton, {
          height: (0, _v6.rem)(28),
          width: "100%"
        }), (0, _v1.jsx)(_v5.Skeleton, {
          height: (0, _v6.rem)(28),
          borderRadius: "sm"
        })]
      }, _v1))]
    }),
    _v58 = () => {
      let {
          removeItemAsStarred: _v0
        } = (0, _v56.useStarredItem)(),
        {
          starredItemsData: _v1,
          fetchNextPageItems: _v2,
          starredListError: _v3,
          isLoading: _v4,
          isDone: _v5,
          isLoadingMore: _v6
        } = (0, _v35.useStarredItemDataContext)(),
        [_v7, _v8] = (0, _v2.useState)(!0),
        _v9 = (0, _v2.useRef)(null),
        _v10 = (0, _v12.translate)({
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
      return _v4 || void 0 === _v3 && 0 !== _v1.length && void 0 !== _v1 ? (void 0 === _v1 || 0 === _v1.length) && _v4 ? (0, _v1.jsx)(_v57, {}) : (0, _v1.jsx)(_v55, {
        starredApiResponse: _v1,
        onDeleteStarredItem: (_v0, _v1, _v2) => {
          _v0(_v0, _v1, _v2);
        },
        dropRef: _v9,
        isDone: _v5,
        isLoading: _v4,
        fetchNextPageItems: _v2,
        isLoadingMore: _v6
      }) : (0, _v1.jsx)(_v13.StarredExpandableMenuItem, {
        label: (0, _v12.translate)({
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
        dataId: _v25.EXPANDABLE_MENU_DATA_ID,
        isOpen: _v7,
        letterSpacing: (0, _v6.rem)(-.2),
        onClick: () => _v8(_v0 => !_v0),
        onClickToggle: () => _v8(_v0 => !_v0),
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: "body-xl",
          width: (0, _v6.rem)(188),
          fontSize: (0, _v6.rem)(14),
          fontWeight: 400,
          lineHeight: (0, _v6.rem)(20),
          marginLeft: (0, _v6.rem)(16),
          textColor: "text-secondary",
          children: _v10
        }, "starred")]
      });
    },
    _v59 = (0, _v6.rem)(12),
    _v60 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(40),
      margin: `${(0, _v6.rem)(1)} 0`,
      borderRadius: _v59,
      width: _v0
    }),
    _v61 = () => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(40),
      width: (0, _v6.rem)(40),
      borderRadius: _v59
    }),
    _v62 = () => (0, _v1.jsx)(_v3.Box, {
      width: (0, _v6.rem)(40),
      height: "1px",
      bg: "lightBlueAlpha.300",
      marginY: (0, _v6.rem)(8)
    });
  _v0.s(["HomePrimaryNavbar", 0, ({
    variant: _v0
  }) => {
    let _v1 = "icons" === _v0,
      {
        appSections: _v2,
        hasStarredItems: _v3,
        isInitialLoading: _v4,
        modals: _v5
      } = (0, _v10.useHomePrimaryNavItems)(_v0),
      _v6 = (0, _v8.useOrionSetting)("disable_starred_sidebar_list"),
      _v7 = _v2[0]?.[0]?.key,
      _v8 = (0, _v2.useCallback)(_v0 => _v1 ? _v0.map(_v0 => (0, _v1.jsx)(_v9.PrimaryNavItem, {
        item: _v0,
        variant: "icons",
        isFirst: _v0.key === _v7
      }, _v0.key)) : (0, _v1.jsx)(_v7.ResizableSideNav.MenuItems, {
        customStyles: {
          gap: (0, _v6.rem)(2)
        },
        children: _v0.map(_v0 => (0, _v1.jsx)(_v9.PrimaryNavItem, {
          item: _v0,
          variant: "full",
          isFirst: _v0.key === _v7
        }, _v0.key))
      }), [_v1, _v7]);
    return (0, _v1.jsxs)(_v3.Box, {
      style: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
      },
      ...(_v1 ? {
        alignItems: "center"
      } : {}),
      children: [(0, _v1.jsxs)(_v4.Flex, {
        flexDirection: "column",
        gap: (0, _v6.rem)(2),
        paddingBottom: (0, _v6.rem)(8),
        alignItems: _v1 ? "center" : void 0,
        children: [_v4 ? Array.from({
          length: 6
        }).map((_v0, _v1) => _v1 ? (0, _v1.jsx)(_v61, {}, _v1) : (0, _v1.jsx)(_v60, {
          width: "75%"
        }, _v1)) : _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v2.Fragment, {
          children: [_v1 > 0 && (_v1 ? (0, _v1.jsx)(_v62, {}) : (0, _v1.jsx)(_v7.ResizableSideNav.Divider, {
            my: (0, _v6.rem)(8)
          })), _v8(_v0)]
        }, _v1)), !_v1 && !_v6 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v7.ResizableSideNav.Divider, {
            my: (0, _v6.rem)(8)
          }), (0, _v1.jsx)(_v7.ResizableSideNav.Section, {
            children: (0, _v1.jsx)(_v58, {})
          })]
        })]
      }), _v5]
    });
  }], 0);
  var _v63 = _v0.i(0);
  _v0.s(["UpsellFeaturesList", 0, function ({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
        margin: `${(0, _v6.rem)(8)} 0`,
        color: "white",
        fontWeight: 500,
        children: [(0, _v1.jsx)(_v63.Checkmark, {
          position: "relative",
          top: (0, _v6.rem)(4),
          width: (0, _v6.rem)(20),
          height: (0, _v6.rem)(20),
          marginRight: (0, _v6.rem)(8),
          color: "white"
        }), _v0]
      }, `feature-${_v1}`))
    });
  }], 0);
}