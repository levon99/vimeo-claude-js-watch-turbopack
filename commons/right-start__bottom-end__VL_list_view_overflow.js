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
    _v30 = _v0.i(0);
  let _v31 = {
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
    _v32 = {
      side_nav: {
        shareEntryPoint: "VL_list_view_overflow",
        moveLocation: "side nav"
      },
      homepage: {
        shareEntryPoint: "VL_starred_carousel_overflow",
        moveLocation: "starred_carousel_menu"
      }
    },
    _v33 = {
      side_nav: {
        shareEntryPoint: "wayfinder_starred_widget",
        moveLocation: _v30.AnalyticsLocations.FOLDER_LIST,
        upsellLocation: "folder_actions_menu",
        upsellPage: "folder_library",
        upsellPaywallLocation: "folder_library"
      },
      homepage: {
        shareEntryPoint: "VL_starred_carousel_overflow",
        moveLocation: "starred_carousel_menu",
        upsellLocation: "starred_carousel_menu",
        upsellPage: "wayfinder_home",
        upsellPaywallLocation: "wayfinder_home"
      }
    };
  var _v34 = _v0.i(0),
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
    _v51 = _v0.i(0);
  let _v52 = ({
    item: _v0,
    surface: _v1
  }) => {
    let _v2 = (0, _v29.useViewer)(),
      _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
      {
        capabilities: _v4
      } = (0, _v27.useCapability)(["canSeeUpsellModalOnShare", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks", "canManageTeamCollections"], _v3),
      {
        getFolderMenuProps: _v5
      } = function (_v0, _v1) {
        let _v2 = (0, _v29.useViewer)(),
          {
            openShareFolderModal: _v3
          } = (0, _v48.useShareFolderModal)(),
          _v4 = (0, _v41.useCopyFolderLinkToast)(),
          {
            isEnabled: _v5,
            copyFolderShareLink: _v6
          } = (0, _v35.useCopyFolderShareLink)(),
          _v7 = (0, _v42.useManageShareActionBuilder)(),
          {
            openAddFolderToShowcaseModal: _v8,
            closeAddFolderToShowcaseModal: _v9
          } = (0, _v40.useAddFolderToShowcaseModal)(),
          {
            openMoveModal: _v10
          } = (0, _v43.useMoveModal)(),
          {
            notifyItemMoveSuccess: _v11,
            notifyItemMoveToWorkspaceSuccess: _v12,
            notifyItemMoveFailure: _v13
          } = (0, _v44.useNotifications)(),
          {
            revalidateTopLevelFolders: _v14,
            revalidateFolderItems: _v15,
            revalidateRootItems: _v16
          } = (0, _v46.useRevalidate)(),
          {
            contentSpaceEnabled: _v17
          } = (0, _v34.useContentSpaceEnabled)(_v2?.teamUser?.ownerId),
          _v18 = _v17 ? (0, _v12.translate)({
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
          _v19 = (0, _v45.usePageName)(),
          _v20 = (0, _v37.useCanUpSell)(),
          _v21 = (0, _v39.useReviewLinkCopiedToast)(),
          {
            open: _v22,
            close: _v23
          } = (0, _v49.useUpsellModal)(),
          _v24 = (_v0, _v1, _v2) => {
            if (_v1.hasShareUpsell) return void _v22({
              tracking: {
                params: {
                  feature: "review",
                  location: _v0.upsellLocation,
                  page: _v0.upsellPage,
                  upsell_name: "folder_share"
                },
                paywallTracking: {
                  paywallTrigger: "starred_folder_menu_folder_share_button",
                  paywallLocation: _v0.upsellPaywallLocation,
                  paywallType: "popup",
                  paywallFeature: "collaboration"
                }
              },
              onClose: _v23
            });
            _v3?.(_v0, _v0.shareEntryPoint, _v1, _v2);
          },
          _v25 = (0, _v38.useCreateAndCopyFolderReviewLink)((_v0, _v1) => {
            _v21(() => _v24(_v0, "CREATE_REVIEW_LINK_MODAL", _v1));
          });
        return {
          getFolderMenuProps: _v0 => {
            let _v1 = _v0?.folder,
              {
                name: _v2,
                metadata: _v3,
                uri: _v4,
                isPrivateToUser: _v5
              } = _v1,
              _v6 = parseInt(_v4.split("/").pop() ?? ""),
              _v7 = parseInt(_v4.split("/")?.[2]),
              _v8 = _v3?.connections?.parentFolder,
              _v9 = _v8?.uri,
              _v10 = !!_v3?.interactions?.edit?.uri,
              _v11 = !!_v3?.interactions?.editSettings?.uri,
              _v12 = !!_v3?.interactions?.delete?.uri,
              _v13 = !!_v3?.interactions?.invite?.uri,
              _v14 = _v2?.vimeoHttpsUrl + (0, _v22.getFolderPageUriFromApiUri)(_v4),
              _v15 = _v2?.vimeoHttpsUrl + (0, _v22.getFolderAnalyticsPageUriFromApiUri)(_v4),
              _v16 = _v1.hasMultipleReviewLinks && !_v1.hasProhibitMultipleReviewLinks,
              {
                canCreateReviewLink: _v17,
                canCopyReviewPageLink: _v18,
                canManageReviewLinks: _v19,
                reviewPageLink: _v20
              } = (0, _v47.getReviewLinkMenuState)({
                hasReviewLinkCapabilities: _v16,
                hasMultipleReviewLinks: _v1.hasMultipleReviewLinks,
                reviewLinks: _v1.reviewLinks,
                canUpsell: _v20,
                getReviewPageUrl: _v0 => (0, _v36.getFolderReviewPageUrl)(_v0, _v6, _v7)
              }),
              _v21 = Math.max(0, (_v3?.connections?.items?.total ?? 0) - (_v3?.connections?.folders?.total ?? 0)),
              _v22 = _v10 && _v1.canManageTeamCollections,
              _v23 = _v21 > 0 && _v22 && _v21 <= 100,
              _v24 = (_v0 = !0) => {
                _v4({
                  isSuccess: _v0,
                  onManage: _v7({
                    canEdit: _v11,
                    entityUri: _v4,
                    location: _v0.shareEntryPoint,
                    panel: "INVITE_PANEL"
                  })
                });
              };
            return {
              canShare: _v13 || _v1.hasShareUpsell,
              onShare: () => {
                _v24(_v4);
              },
              canDelete: !1,
              canEdit: _v10,
              analyticsPageLink: _v15,
              folderLink: _v14,
              onCopyLink: _v24,
              onCopyLinkAsync: _v5 ? () => _v6(_v6, _v14, _v24) : void 0,
              canCreateReviewLink: _v17,
              onCreateReviewLink: () => {
                _v24(_v4, "CREATE_REVIEW_LINK_MODAL");
              },
              canCopyReviewPageLink: _v18,
              reviewPageLink: _v20,
              onCopyReviewPageLink: () => {
                if (_v20) {
                  let _v0 = _v1.reviewLinks?.[0]?.uri;
                  _v21(_v0 ? () => _v24(_v4, "CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
                  return;
                }
                _v25(_v6, _v7, _v4);
              },
              canManageReviewLinks: _v19,
              hasProhibitMultipleReviewLinks: _v1.hasProhibitMultipleReviewLinks,
              onManageReviewLinks: () => {
                _v24(_v4, "REVIEW_LINKS_PANEL");
              },
              canMove: _v12,
              onMove: () => {
                _v10({
                  activeFolderURI: _v4,
                  feature: "starred",
                  location: _v0.moveLocation,
                  items: [{
                    name: _v2,
                    type: "folder",
                    parentFolder: _v9 ? {
                      uri: _v9,
                      isPrivateToUser: _v5
                    } : void 0,
                    uri: _v4
                  }],
                  onMoveSuccess: ({
                    selectedDestination: _v0,
                    items: _v1,
                    destinationWorkspaceId: _v2,
                    destinationWorkspaceName: _v3
                  }) => {
                    let _v4, _v5;
                    _v14(), _v1[0].parentFolder?.uri ? _v15(_v1[0]?.parentFolder?.uri ?? "") : _v16(), "root" !== _v0 && _v0?.uri && _v15(_v0.uri), _v4 = "root" === _v0 ? _v18 : _v0?.name || "", _v5 = "root" === _v0 ? "/library" : (0, _v22.getFolderPageUriFromApiUri)(_v0?.uri || ""), _v2 && _v3 ? _v12(_v1, {
                      label: _v4,
                      workspaceName: _v3
                    }, () => {
                      _v2 && (0, _v50.switchTeam)(_v2, _v2.xsrft).finally(() => {
                        window.location.href = _v5;
                      });
                    }) : _v11(_v1?.[0].name || "", {
                      label: _v4,
                      link: _v5
                    });
                  },
                  onMoveFailure: ({
                    selectedDestination: _v0,
                    items: _v1
                  }) => {
                    _v13(_v1?.[0]?.name || "", "root" === _v0 ? _v18 : _v0?.name || "");
                  },
                  teamOwnerId: _v7
                });
              },
              hasShareUpsell: _v1.hasShareUpsell,
              showAddToShowcase: _v22,
              canAddToShowcase: _v23,
              onAddToShowcase: () => {
                _v8({
                  ownerId: _v7,
                  onClose: _v9,
                  folderId: _v6,
                  pageName: _v19,
                  pageUrl: window.location.pathname,
                  itemCount: _v21
                });
              }
            };
          }
        };
      }(_v33[_v1], {
        hasShareUpsell: !!_v4.canSeeUpsellModalOnShare,
        hasMultipleReviewLinks: !!_v4.hasMultipleReviewLinks,
        hasProhibitMultipleReviewLinks: !!_v4.hasProhibitMultipleReviewLinks,
        canManageTeamCollections: !!_v4.canManageTeamCollections
      }),
      {
        removeItemAsStarred: _v6
      } = (0, _v51.useStarredItem)(),
      {
        trackStarredItemMenuToggled: _v7
      } = (0, _v20.useStarredTracking)(),
      _v8 = _v31[_v1],
      _v9 = _v0.folder?.uri,
      _v10 = _v9?.split("/").pop();
    return (0, _v1.jsx)(_v28.FolderMenu, {
      ..._v5(_v0),
      ..._v8,
      canStar: !1,
      canDelete: void 0 !== _v9,
      deleteIcon: (0, _v1.jsx)(_v26.StarFilled, {
        boxSize: (0, _v6.rem)(20)
      }),
      deleteOptionLabel: _v25.REMOVE_FROM_STARRED,
      onDelete: void 0 === _v9 ? void 0 : () => {
        _v6(_v9, _v0.uri, "folder", !0);
      },
      onOpenChange: _v0 => {
        void 0 !== _v10 && _v7({
          starredItemSurface: _v1,
          entityType: "folder",
          folderId: _v10,
          starredItemMenuAction: _v0 ? "open" : "close"
        });
      }
    });
  };
  _v0.s(["StarredFolderMenu", 0, _v52], 0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ({
    item: _v0,
    surface: _v1
  }) => {
    let _v2 = _v0.video,
      _v3 = (0, _v29.useViewer)(),
      _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
      {
        capabilities: _v5
      } = (0, _v27.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks", "canManageTeamCollections"], _v4),
      {
        getVideoMenuProps: _v6
      } = function (_v0, _v1) {
        let {
            open: _v2
          } = (0, _v55.useDownloadModal)(),
          {
            openShareFolderModal: _v3
          } = (0, _v48.useShareFolderModal)(),
          {
            openAddToShowcaseModal: _v4,
            closeAddToShowcaseModal: _v5
          } = (0, _v54.useAddToShowcaseModal)(),
          _v6 = (0, _v44.useNotification)(),
          {
            notifyItemMoveSuccess: _v7,
            notifyItemMoveToWorkspaceSuccess: _v8
          } = (0, _v44.useNotifications)(),
          _v9 = (0, _v29.useViewer)(),
          {
            contentSpaceEnabled: _v10
          } = (0, _v34.useContentSpaceEnabled)(),
          {
            pathname: _v11
          } = (0, _v14.useRouter)(),
          _v12 = (0, _v45.usePageName)(),
          _v13 = (0, _v37.useCanUpSell)(),
          _v14 = (0, _v39.useReviewLinkCopiedToast)(),
          _v15 = (_v0, _v1, _v2) => {
            _v3?.(_v0, _v0.shareEntryPoint, _v1, _v2, void 0, {
              pageSource: (0, _v57.getPrivacyChangePageSource)(_v11),
              entryPoint: "share_menu"
            });
          },
          _v16 = (0, _v38.useCreateAndCopyVideoReviewLink)((_v0, _v1) => {
            _v14(() => _v15(_v0, "CREATE_REVIEW_LINK_MODAL", _v1));
          }),
          {
            openMoveModal: _v17
          } = (0, _v43.useMoveModal)();
        return {
          getVideoMenuProps: _v0 => {
            let _v1 = _v0?.video,
              {
                uri: _v2,
                link: _v3,
                privacy: _v4,
                download: _v5,
                metadata: _v6,
                embed: _v7,
                manageLink: _v8,
                canMoveToProject: _v9
              } = _v1,
              _v10 = (0, _v23.idFromUri)(_v2),
              _v11 = (0, _v23.idFromUri)(_v1?.user?.uri),
              _v12 = !!_v6?.interactions?.edit?.uri,
              _v13 = !!_v6?.interactions?.invite?.uri,
              _v14 = _v8 && (0, _v58.getAnalyticsPageLinkForVideo)(_v8),
              _v15 = _v1.hasMultipleReviewLinks && !_v1.hasProhibitMultipleReviewLinks,
              {
                canCreateReviewLink: _v16,
                canCopyReviewPageLink: _v17,
                canManageReviewLinks: _v18,
                reviewPageLink: _v19
              } = (0, _v47.getReviewLinkMenuState)({
                hasReviewLinkCapabilities: _v15,
                hasMultipleReviewLinks: _v1.hasMultipleReviewLinks,
                reviewLinks: _v1.reviewLinks,
                canUpsell: _v13,
                getReviewPageUrl: _v0 => (0, _v36.getVideoReviewPageUrl)(_v0, _v10)
              }),
              _v20 = _v1.canManageTeamCollections && _v12 && !isNaN(_v10) && !isNaN(_v11);
            return {
              disabled: !1,
              canEdit: _v12,
              canDelete: !1,
              videoLink: _v3,
              videoEmbedCode: _v7?.html,
              reviewPageLink: _v19,
              onCopyLink: () => {
                _v6({
                  content: _v56.linkCopySuccess
                });
              },
              canCreateReviewLink: _v16,
              onCreateReviewLink: () => {
                _v15(_v2, "CREATE_REVIEW_LINK_MODAL");
              },
              canCopyReviewPageLink: _v17,
              onCopyReviewPageLink: () => {
                if (_v19) {
                  let _v0 = _v1.reviewLinks?.[0]?.uri;
                  _v14(_v0 ? () => _v15(_v2, "CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
                  return;
                }
                _v16(_v10, _v2);
              },
              canManageReviewLinks: _v18,
              onManageReviewLinks: () => {
                _v15(_v2, "REVIEW_LINKS_PANEL");
              },
              onCopyVideoEmbedCode: () => {
                _v6({
                  content: _v56.embedCodeCopySuccess
                });
              },
              analyticsPageLink: _v14,
              canMove: _v9,
              onMove: () => {
                _v17({
                  activeFolderURI: _v1?.parentProject?.uri,
                  feature: "starred",
                  location: _v0.moveLocation,
                  initialDestination: _v1?.parentProject?.uri ? {
                    isPrivateToUser: _v1.parentProject.isPrivateToUser,
                    name: "",
                    uri: _v1.parentProject.uri
                  } : void 0,
                  items: [{
                    name: _v1?.name,
                    type: "video",
                    uri: _v1?.uri
                  }],
                  onMoveSuccess: ({
                    selectedDestination: _v0,
                    destinationWorkspaceId: _v1,
                    destinationWorkspaceName: _v2
                  }) => {
                    if (_v1 && _v2) {
                      let _v0 = _v10 ? (0, _v12.translate)({
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
                      _v8(_v1?.name || "", {
                        label: _v1,
                        workspaceName: _v2
                      }, () => {
                        _v9 && (0, _v50.switchTeam)(_v1, _v9.xsrft).finally(() => {
                          window.location.href = _v2;
                        });
                      });
                    } else "root" !== _v0 && _v7(_v1?.name || "", {
                      label: _v0?.name || "",
                      link: (0, _v22.getFolderPageUriFromApiUri)(_v0?.uri || "")
                    });
                  },
                  teamOwnerId: (0, _v23.idFromUri)(_v1?.user?.uri)
                });
              },
              canDownload: !!((_v12 || _v4?.download) && _v5 && Array.isArray(_v5) && _v5.length),
              onDownload: _v5 ? () => {
                _v2({
                  files: _v5,
                  videoId: (0, _v23.idFromUri)(_v1?.uri)
                });
              } : void 0,
              canShare: _v13 || _v1.hasShareUpsell,
              onShare: () => {
                _v15(_v2);
              },
              hasReviewPageLinkUpsell: _v1.hasReviewPageLinkUpsell,
              hasMultipleReviewLinks: _v1.hasMultipleReviewLinks,
              canAddToShowcase: _v20,
              onAddToShowcase: () => {
                _v4({
                  onClose: _v5,
                  showcaseItems: [{
                    id: _v10,
                    name: _v1.name,
                    type: "video"
                  }],
                  ownerId: _v11,
                  pageName: _v12,
                  pageUrl: window.location.pathname
                });
              }
            };
          }
        };
      }(_v32[_v1], {
        hasReviewPageLinkUpsell: !!_v5.hasVideoReviewPageDemo,
        hasShareUpsell: !!_v5.canSeeUpsellModalOnShare,
        hasMultipleReviewLinks: !!_v5.hasMultipleReviewLinks,
        hasProhibitMultipleReviewLinks: !!_v5.hasProhibitMultipleReviewLinks,
        canManageTeamCollections: !!_v5.canManageTeamCollections
      }),
      {
        removeItemAsStarred: _v7
      } = (0, _v51.useStarredItem)(),
      {
        trackStarredItemMenuToggled: _v8
      } = (0, _v20.useStarredTracking)(),
      _v9 = _v31[_v1],
      _v10 = _v2?.uri,
      _v11 = _v10?.split("/").pop();
    return (0, _v1.jsx)(_v53.VideoMenu, {
      ..._v6(_v0),
      ..._v9,
      enableReorganizedOverflowMenu: !0,
      showOverflowMenuIntro: !1,
      canStar: !1,
      canDelete: void 0 !== _v10,
      deleteIcon: (0, _v1.jsx)(_v26.StarFilled, {
        boxSize: (0, _v6.rem)(20)
      }),
      deleteOptionLabel: _v25.REMOVE_FROM_STARRED,
      onDelete: void 0 === _v10 ? void 0 : () => {
        _v7(_v10, _v0.uri, "video", !0);
      },
      onOpenChange: _v0 => {
        void 0 !== _v11 && _v8({
          starredItemSurface: _v1,
          entityType: "video",
          clipId: _v11,
          starredItemMenuAction: _v0 ? "open" : "close"
        });
      }
    });
  };
  _v0.s(["StarredVideoMenu", 0, _v59], 0);
  let _v60 = ({
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
            children: _v0.type == _v25.ItemType.Video ? (0, _v1.jsx)(_v59, {
              item: _v0,
              surface: "side_nav"
            }) : (0, _v1.jsx)(_v52, {
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
  var _v61 = _v0.i(0);
  let _v62 = () => (0, _v1.jsxs)(_v3.Box, {
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
    _v63 = () => {
      let {
          removeItemAsStarred: _v0
        } = (0, _v51.useStarredItem)(),
        {
          starredItemsData: _v1,
          fetchNextPageItems: _v2,
          starredListError: _v3,
          isLoading: _v4,
          isDone: _v5,
          isLoadingMore: _v6
        } = (0, _v61.useStarredItemDataContext)(),
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
      return _v4 || void 0 === _v3 && 0 !== _v1.length && void 0 !== _v1 ? (void 0 === _v1 || 0 === _v1.length) && _v4 ? (0, _v1.jsx)(_v62, {}) : (0, _v1.jsx)(_v60, {
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
    _v64 = (0, _v6.rem)(12),
    _v65 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(40),
      margin: `${(0, _v6.rem)(1)} 0`,
      borderRadius: _v64,
      width: _v0
    }),
    _v66 = () => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(40),
      width: (0, _v6.rem)(40),
      borderRadius: _v64
    }),
    _v67 = () => (0, _v1.jsx)(_v3.Box, {
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
        }).map((_v0, _v1) => _v1 ? (0, _v1.jsx)(_v66, {}, _v1) : (0, _v1.jsx)(_v65, {
          width: "75%"
        }, _v1)) : _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v2.Fragment, {
          children: [_v1 > 0 && (_v1 ? (0, _v1.jsx)(_v67, {}) : (0, _v1.jsx)(_v7.ResizableSideNav.Divider, {
            my: (0, _v6.rem)(8)
          })), _v8(_v0)]
        }, _v1)), !_v1 && !_v6 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v7.ResizableSideNav.Divider, {
            my: (0, _v6.rem)(8)
          }), (0, _v1.jsx)(_v7.ResizableSideNav.Section, {
            children: (0, _v1.jsx)(_v63, {})
          })]
        })]
      }), _v5]
    });
  }], 0);
  var _v68 = _v0.i(0);
  _v0.s(["UpsellFeaturesList", 0, function ({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
        margin: `${(0, _v6.rem)(8)} 0`,
        color: "white",
        fontWeight: 500,
        children: [(0, _v1.jsx)(_v68.Checkmark, {
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