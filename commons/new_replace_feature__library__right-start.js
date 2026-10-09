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
    _v46 = _v0.i(0);
  let _v47 = ({
      starredObject: _v0,
      hasReviewPageLinkUpsell: _v1,
      hasFolderShareUpsell: _v2,
      hasMutipleReviewLinks: _v3,
      getVideoMenuProps: _v4,
      handleStarMenuState: _v5
    }) => {
      let _v6 = _v0.video,
        _v7 = !!_v6?.metadata?.interactions?.edit?.uri,
        _v8 = (0, _v27.idFromUri)(_v6?.uri),
        _v9 = (0, _v21.useOrionSetting)("new_replace_feature"),
        {
          triggerReplace: _v10,
          replaceInput: _v11,
          replaceModal: _v12
        } = (0, _v24.useReplaceWithModal)(_v8, !!_v9, _v6?.metadata?.connections?.versions?.hasInteractive, _v24.navigateToUpgrade, (0, _v27.idFromUri)(_v6?.user.uri), "library");
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v22.VideoMenu, {
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
    _v48 = ({
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
            } = (0, _v44.useDownloadModal)(),
            {
              openShareFolderModal: _v1
            } = (0, _v39.useShareFolderModal)(),
            _v2 = (0, _v37.useNotification)(),
            {
              notifyItemMoveSuccess: _v3,
              notifyItemMoveToWorkspaceSuccess: _v4
            } = (0, _v37.useNotifications)(),
            _v5 = (0, _v31.useViewer)(),
            {
              contentSpaceEnabled: _v6
            } = (0, _v30.useContentSpaceEnabled)(),
            {
              openMoveModal: _v7
            } = (0, _v36.useMoveModal)();
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
                _v16 = _v12 && (0, _v46.getAnalyticsPageLinkForVideo)(_v12);
              return {
                disabled: !1,
                canEdit: _v14,
                canDelete: !1,
                videoLink: _v6,
                videoEmbedCode: _v11?.html,
                reviewPageLink: _v10?.link,
                onCopyLink: () => {
                  _v2({
                    content: _v45.linkCopySuccess
                  });
                },
                onCopyReviewPageLink: () => {
                  _v2({
                    content: _v45.linkCopySuccess
                  });
                },
                onCopyVideoEmbedCode: () => {
                  _v2({
                    content: _v45.embedCodeCopySuccess
                  });
                },
                analyticsPageLink: _v16,
                canMove: _v13,
                onMove: () => {
                  _v7({
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
                          _v2 = "root" === _v0 ? "/library" : (0, _v26.getFolderPageUriFromApiUri)(_v0?.uri || "");
                        _v4(_v4?.name || "", {
                          label: _v1,
                          workspaceName: _v2
                        }, () => {
                          _v5 && (0, _v42.switchTeam)(_v1, _v5.xsrft).finally(() => {
                            window.location.href = _v2;
                          });
                        });
                      } else "root" !== _v0 && _v3(_v4?.name || "", {
                        label: _v0?.name || "",
                        link: (0, _v26.getFolderPageUriFromApiUri)(_v0?.uri || "")
                      });
                    },
                    teamOwnerId: (0, _v27.idFromUri)(_v4?.user?.uri)
                  });
                },
                canDownload: !!((_v14 || _v7?.download) && _v8 && Array.isArray(_v8) && _v8.length),
                onDownload: _v8 ? () => {
                  _v0({
                    files: _v8,
                    videoId: (0, _v27.idFromUri)(_v4?.uri)
                  });
                } : void 0,
                canShare: _v15 || _v2,
                onShare: () => {
                  _v1?.(_v5, "VL_list_view_overflow");
                },
                hasReviewPageLinkUpsell: _v1,
                hasMultipleReviewLinks: _v3,
                deleteOptionLabel: _v29.REMOVE_FROM_STARRED
              };
            }
          };
        }(),
        {
          getFolderMenuProps: _v9
        } = function () {
          let _v0 = (0, _v31.useViewer)(),
            {
              openShareFolderModal: _v1
            } = (0, _v39.useShareFolderModal)(),
            _v2 = (0, _v33.useCopyFolderLinkToast)(),
            _v3 = (0, _v35.useManageShareActionBuilder)(),
            {
              openSlackIntegrationModal: _v4
            } = (0, _v40.useSlackIntegrationModal)(),
            {
              openMoveModal: _v5
            } = (0, _v36.useMoveModal)(),
            {
              notifyItemMoveSuccess: _v6,
              notifyItemMoveToWorkspaceSuccess: _v7,
              notifyItemMoveFailure: _v8
            } = (0, _v37.useNotifications)(),
            {
              revalidateTopLevelFolders: _v9,
              revalidateFolder: _v10,
              revalidateFolderItems: _v11,
              revalidateSetOfFolderItems: _v12,
              revalidateRootItems: _v13
            } = (0, _v38.useRevalidate)(),
            {
              openFolderSettingsModal: _v14
            } = (0, _v34.useFolderSettingsModal)(),
            {
              contentSpaceEnabled: _v15
            } = (0, _v30.useContentSpaceEnabled)(_v0?.teamUser?.ownerId),
            _v16 = _v15 ? (0, _v12.translate)({
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
              open: _v17,
              close: _v18
            } = (0, _v41.useUpsellModal)();
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
                _v18 = _v0?.vimeoHttpsUrl + (0, _v26.getFolderPageUriFromApiUri)(_v5);
              return {
                canShare: _v17 || _v1,
                onShare: () => {
                  if (_v1) _v17({
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
                    onClose: _v18
                  });else _v1?.(_v5, "wayfinder_starred_widget");
                },
                canDelete: !1,
                canEditFolderSettings: _v15,
                onFolderSettings: () => {
                  _v14({
                    userId: _v11,
                    parentFolderUri: _v12?.uri ?? "",
                    currentFolderUri: _v5,
                    isEditingFolder: !0,
                    location: "starred",
                    initialColor: _v2?.settings?.color
                  });
                },
                canEdit: _v14,
                analyticsPageLink: _v0?.vimeoHttpsUrl + (0, _v26.getFolderAnalyticsPageUriFromApiUri)(_v5),
                folderLink: _v18,
                onCopyLink: () => {
                  _v2({
                    onManage: _v3({
                      canEdit: _v15,
                      entityUri: _v5,
                      location: "wayfinder_starred_widget",
                      panel: "INVITE_PANEL"
                    })
                  });
                },
                canMove: _v16,
                onMove: () => {
                  _v5({
                    activeFolderURI: _v5,
                    feature: "starred",
                    location: _v32.AnalyticsLocations.FOLDER_LIST,
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
                      _v9(), _v1[0].parentFolder?.uri ? _v11(_v1[0]?.parentFolder?.uri ?? "") : _v13(), "root" !== _v0 && _v0?.uri && _v11(_v0.uri), _v4 = "root" === _v0 ? _v16 : _v0?.name || "", _v5 = "root" === _v0 ? "/library" : (0, _v26.getFolderPageUriFromApiUri)(_v0?.uri || ""), _v2 && _v3 ? _v7(_v1, {
                        label: _v4,
                        workspaceName: _v3
                      }, () => {
                        _v0 && (0, _v42.switchTeam)(_v2, _v0.xsrft).finally(() => {
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
                      _v8(_v1?.[0]?.name || "", "root" === _v0 ? _v16 : _v0?.name || "");
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
                }
              };
            }
          };
        }(),
        {
          handleStarMenuState: _v10
        } = (0, _v43.useStarMenuItem)(),
        [_v11, _v12] = (0, _v2.useState)(!1),
        _v13 = () => _v12(_v0 => !_v0),
        _v14 = (0, _v16.useColorModeValue)("slate.800", "rgba(255, 255, 255, 0.87)"),
        _v15 = (0, _v15.useRouter)(),
        _v16 = (_v0, _v1) => {
          let _v2 = "";
          if (_v0.type == _v29.ItemType.Video && _v0?.video?.link) {
            let {
                video: _v0
              } = _v0,
              _v1 = !!_v0?.metadata?.interactions?.edit?.uri,
              _v2 = (0, _v27.idFromUri)(_v0?.uri);
            _v2 = _v1 && _v2 ? `/manage/videos/${_v2}` : _v0.link;
          }
          if (_v0.type == _v29.ItemType.Folder && _v0?.folder?.uri) {
            let {
              folder: _v0
            } = _v0;
            _v2 = (0, _v26.getFolderPageUriFromApiUri)(_v0.uri);
          }
          if (_v1) return _v2;
          _v15.push(_v2);
        };
      return (0, _v1.jsx)(_v14.StarredExpandableMenuItem, {
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
        dataId: _v29.EXPANDABLE_MENU_DATA_ID,
        hasToggle: !0,
        fontWeight: 400,
        icon: (0, _v1.jsx)(_v20.Star, {}),
        leadingIconSize: (0, _v6.rem)(24),
        iconMarginRight: (0, _v6.rem)(12),
        borderRadius: (0, _v6.rem)(12),
        paddingX: (0, _v6.rem)(8),
        letterSpacing: (0, _v6.rem)(-.2),
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
          children: [_v0 && _v0.length > 0 && _v0.map((_v0, _v1) => null != _v0[_v0.type] && (0, _v1.jsx)(_v25.MenuItem, {
            className: "starred-list-item",
            onClick: () => {
              _v16(_v0, !1);
            },
            iconMarginRight: (0, _v6.rem)(8),
            href: _v16(_v0, !0),
            label: _v0.name,
            dropRef: _v1 === _v0.length - 1 ? _v4 : null,
            icon: _v0.type === _v29.ItemType.Video ? (0, _v1.jsx)(_v18.VideoFilled, {
              color: "text-secondary"
            }) : (0, _v1.jsx)(_v19.FolderFilled, {
              color: "text-secondary"
            }),
            height: 32,
            iconSize: (0, _v6.rem)(20),
            showActionOnHover: !0,
            action: (0, _v1.jsx)(_v3.Box, {
              children: _v0.type == _v29.ItemType.Video ? (0, _v1.jsx)(_v47, {
                starredObject: _v0,
                hasReviewPageLinkUpsell: _v2,
                hasFolderShareUpsell: _v1,
                hasMutipleReviewLinks: _v3,
                getVideoMenuProps: _v8,
                handleStarMenuState: _v10
              }) : (0, _v1.jsx)(_v23.FolderMenu, {
                ..._v9(_v0, _v1),
                placement: "right-start",
                usePortal: !1,
                ..._v10("folder", _v0?.folder, !0),
                size: "sm"
              })
            }),
            menuItemColor: _v14,
            hoverColor: "text-primary"
          }, _v1))?.concat(!_v5 && !_v6 && _v7 ? (0, _v1.jsx)(_v28.InfiniteLoadingZone, {
            onVisible: _v7
          }, `starred-item-loading-zone-${_v0.length}`) : (0, _v1.jsx)(_v2.default.Fragment, {}, "starred-item-done-loading")), !!(!_v5 && _v6) && (0, _v1.jsx)(_v4.Flex, {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            children: (0, _v1.jsx)(_v17.Spinner, {})
          })]
        }, 1)]
      });
    };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = () => (0, _v1.jsxs)(_v3.Box, {
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
    _v52 = () => {
      let _v0 = (0, _v2.useContext)(_v13.ViewerContext),
        {
          removeItemAsStarred: _v1
        } = (0, _v49.useStarredItem)(),
        {
          starredItemsData: _v2,
          fetchNextPageItems: _v3,
          starredListError: _v4,
          isLoading: _v5,
          isDone: _v6,
          isLoadingMore: _v7
        } = (0, _v50.useStarredItemDataContext)(),
        _v8 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
        [_v9, _v10] = (0, _v2.useState)(!0),
        {
          capabilities: _v11
        } = (0, _v11.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks"], _v8),
        _v12 = (0, _v2.useRef)(null),
        _v13 = (0, _v12.translate)({
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
      return _v5 || void 0 === _v4 && 0 !== _v2.length && void 0 !== _v2 ? (void 0 === _v2 || 0 === _v2.length) && _v5 ? (0, _v1.jsx)(_v51, {}) : (0, _v1.jsx)(_v48, {
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
      }) : (0, _v1.jsx)(_v14.StarredExpandableMenuItem, {
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
        dataId: _v29.EXPANDABLE_MENU_DATA_ID,
        isOpen: _v9,
        letterSpacing: (0, _v6.rem)(-.2),
        onClick: () => _v10(_v0 => !_v0),
        onClickToggle: () => _v10(_v0 => !_v0),
        children: [(0, _v1.jsx)(_v10.Text, {
          variant: "body-xl",
          width: (0, _v6.rem)(188),
          fontSize: (0, _v6.rem)(14),
          fontWeight: 400,
          lineHeight: (0, _v6.rem)(20),
          marginLeft: (0, _v6.rem)(16),
          textColor: "text-secondary",
          children: _v13
        }, "starred")]
      });
    },
    _v53 = (0, _v6.rem)(12),
    _v54 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(40),
      margin: `${(0, _v6.rem)(1)} 0`,
      borderRadius: _v53,
      width: _v0
    }),
    _v55 = () => (0, _v1.jsx)(_v5.Skeleton, {
      height: (0, _v6.rem)(40),
      width: (0, _v6.rem)(40),
      borderRadius: _v53
    }),
    _v56 = () => (0, _v1.jsx)(_v3.Box, {
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
      } = (0, _v9.useHomePrimaryNavItems)(_v0),
      _v6 = _v2[0]?.[0]?.key,
      _v7 = (0, _v2.useCallback)(_v0 => _v1 ? _v0.map(_v0 => (0, _v1.jsx)(_v8.PrimaryNavItem, {
        item: _v0,
        variant: "icons",
        isFirst: _v0.key === _v6
      }, _v0.key)) : (0, _v1.jsx)(_v7.ResizableSideNav.MenuItems, {
        customStyles: {
          gap: (0, _v6.rem)(2)
        },
        children: _v0.map(_v0 => (0, _v1.jsx)(_v8.PrimaryNavItem, {
          item: _v0,
          variant: "full",
          isFirst: _v0.key === _v6
        }, _v0.key))
      }), [_v1, _v6]);
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
        }).map((_v0, _v1) => _v1 ? (0, _v1.jsx)(_v55, {}, _v1) : (0, _v1.jsx)(_v54, {
          width: "75%"
        }, _v1)) : _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v2.Fragment, {
          children: [_v1 > 0 && (_v1 ? (0, _v1.jsx)(_v56, {}) : (0, _v1.jsx)(_v7.ResizableSideNav.Divider, {
            my: (0, _v6.rem)(8)
          })), _v7(_v0)]
        }, _v1)), !_v1 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v7.ResizableSideNav.Divider, {
            my: (0, _v6.rem)(8)
          }), (0, _v1.jsx)(_v7.ResizableSideNav.Section, {
            children: (0, _v1.jsx)(_v52, {})
          })]
        })]
      }), _v5]
    });
  }], 0);
  var _v57 = _v0.i(0);
  _v0.s(["UpsellFeaturesList", 0, function ({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
        margin: `${(0, _v6.rem)(8)} 0`,
        color: "white",
        fontWeight: 500,
        children: [(0, _v1.jsx)(_v57.Checkmark, {
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