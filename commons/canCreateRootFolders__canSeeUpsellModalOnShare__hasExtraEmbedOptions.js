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
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = ({
    closeSideNav: _v0,
    isMobile: _v1,
    isNewSidebar: _v2 = !1,
    loadingSideNavFolderURIs: _v3 = new Set(),
    pathname: _v4,
    teamOwnerId: _v5
  }) => {
    let _v6 = (0, _v19.useWayfinderPageName)(),
      _v7 = (0, _v6.useContext)(_v35.ViewerContext),
      _v8 = (0, _v49.useNotification)(),
      {
        notifyItemMoveFailure: _v9,
        notifyItemMoveSuccess: _v10,
        notifyItemMoveToWorkspaceSuccess: _v11
      } = (0, _v49.useNotifications)(),
      {
        revalidateTopLevelFolders: _v12,
        revalidateFolder: _v13,
        revalidateFolderItems: _v14,
        revalidateSetOfFolderItems: _v15,
        revalidateRootItems: _v16
      } = (0, _v50.useRevalidate)(),
      {
        capabilities: _v17,
        ready: _v18
      } = (0, _v12.useCapability)(["canCreateRootFolders", "canSeeUpsellModalOnShare", "hasExtraEmbedOptions", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canPerformBulkTranslations"], _v5),
      _v19 = !!_v17.canGenerateClipTextTranslation,
      _v20 = !!_v17.canGenerateClipTranslation,
      _v21 = (_v20 || _v19) && !!_v17.canPerformBulkTranslations,
      {
        loading: _v22,
        contentSpaceEnabled: _v23
      } = (0, _v11.useContentSpaceEnabled)(_v5),
      {
        listingParams: _v24
      } = (0, _v28.usePrivateToMeFolderListingParams)(_v5),
      _v25 = (0, _v54.useTeamUploadClipProperties)(_v5),
      _v26 = !_v18 || _v22 ? "" : _v23 ? (0, _v14.translate)({
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
      }) : (0, _v14.translate)({
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
        openFolderSettingsModal: _v27
      } = (0, _v45.useFolderSettingsModal)(),
      {
        openFolderDefaultsModal: _v28
      } = (0, _v46.useFolderDefaultsModal)(),
      {
        open: _v29,
        close: _v30
      } = (0, _v58.useUpsellModal)(),
      {
        openShareFolderModal: _v31
      } = (0, _v52.useShareFolderModal)(),
      _v32 = (0, _v43.useCopyFolderLinkToast)(),
      _v33 = (0, _v47.useManageShareActionBuilder)(),
      {
        openDeleteFolderModal: _v34
      } = (0, _v44.useDeleteFolderModal)(),
      {
        openMoveModal: _v35
      } = (0, _v48.useMoveModal)(),
      {
        openSlackIntegrationModal: _v36
      } = (0, _v53.useSlackIntegrationModal)(),
      {
        handleStarMenuState: _v37
      } = (0, _v62.useStarMenuItem)(),
      {
        sendEvent: _v38
      } = (0, _v42.useAnalyticsEvents)(),
      {
        openBulkAiModal: _v39
      } = (0, _v25.useBulkAiModal)(),
      {
        isEnabled: _v40,
        variant: _v41
      } = (0, _v27.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v42
      } = (0, _v26.useBulkPrivacyModal)(),
      _v43 = (0, _v51.useRevalidateVideoListCaches)(),
      _v44 = (0, _v33.useCanUpSell)(),
      _v45 = (0, _v56.useReviewLinkCopiedToast)(),
      _v46 = (0, _v55.useCreateAndCopyFolderReviewLink)((0, _v6.useCallback)((_v0, _v1) => {
        _v45(() => _v31?.(_v0, "sidebar", "CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v45, _v31])),
      _v47 = (0, _v59.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        trackLibraryFolderContextMenuActionClicked: _v48,
        trackLibraryFolderOpened: _v49
      } = (0, _v30.useLibraryTracking)(),
      {
        data: _v50,
        size: _v51,
        setSize: _v52,
        error: _v53
      } = (0, _v29.useGetUserProjectsInfinite)(() => !_v5 || _v22 ? null : {
        where: {
          userId: _v5
        },
        select: ["isPinned", "isPrivateToUser", "hasSubfolder", "metadata.connections.folders.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.delete", "metadata.interactions.invite", "metadata.interactions.edit", "metadata.interactions.editSettings", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "name", "privacy.view", "isSlackNotificationEnabled", "reviewLinks.uri", "settings.color", "settings.embedPresetId", "settings.isEmbedPresetInheritanceEnabled", "slackIncomingWebhooksId", "uri", "useParentSlackSettings", "user.uri"],
        query: {
          ..._v24,
          perPage: 100,
          topLevelOnly: !0
        }
      }, {
        revalidateOnFocus: !1
      }),
      {
        isLoadingMore: _v54,
        isDone: _v55
      } = (0, _v34.getInfiniteRequestLoadingState)({
        data: _v50,
        error: _v53,
        size: _v51,
        itemsPerPage: 100
      }),
      _v56 = _v50?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data)?.filter(_v0 => !!_v0),
      _v57 = () => {
        _v12(), _v16();
      },
      _v58 = (0, _v6.useCallback)(({
        uri: _v0,
        folder: _v1,
        defaultPanel: _v2,
        editReviewLinkUri: _v3
      }) => {
        if (_v17.canSeeUpsellModalOnShare) _v29({
          tracking: {
            params: {
              feature: "review",
              location: "folder_actions_menu",
              page: "folder_library",
              upsell_name: "folder_share"
            },
            paywallTracking: {
              paywallTrigger: "folder_sidenav_menu_folder_share_button",
              paywallLocation: "folder_library",
              paywallType: "popup",
              paywallFeature: "collaboration"
            }
          },
          onClose: _v30
        });else _v31?.(_v0, "sidebar", _v2, _v3);
        _v41.BPAnalyticsV2.openFolderShare({
          location: "sidebar",
          element: "ellipses",
          teamUser: _v7?.teamUser,
          folder: _v1,
          webCtx: {
            path: window.location.pathname,
            page_name: _v1.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v30, _v31, _v29, _v17.canSeeUpsellModalOnShare, _v7?.teamUser]),
      _v59 = (0, _v6.useCallback)(({
        folder: _v0,
        canEditSettings: _v1
      }) => {
        _v32({
          onManage: _v33({
            canEdit: _v1,
            entityUri: _v0.uri,
            location: "sidebar",
            panel: "INVITE_PANEL"
          })
        }), _v41.BPAnalyticsV2.copyFolderLink({
          location: "sidebar",
          element: "ellipses",
          teamUser: _v7?.teamUser,
          folder: _v0,
          webCtx: {
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v32, _v33, _v7?.teamUser]),
      _v60 = (0, _v6.useCallback)(() => {
        _v52(_v0 => _v0 + 1);
      }, [_v52]);
    return (0, _v1.jsxs)(_v8.Flex, {
      flexDirection: "column",
      gap: "2px",
      children: [(0, _v1.jsx)(_v17.MenuItem, {
        icon: _v2 ? void 0 : _v23 ? (0, _v1.jsx)(_v24.TeamLibraryFilled, {}) : (0, _v1.jsx)(_v23.VideosStack, {}),
        label: _v26,
        href: `${_v20.Path.TeamLibrary}?library_referrer=sidebar`,
        active: _v4 === _v20.Path.TeamLibrary,
        action: !!_v17.canCreateRootFolders && (0, _v1.jsx)(_v39.NewFolderButton, {
          onClick: () => {
            _v27({
              userId: _v5,
              parentFolderUri: null,
              currentFolderUri: null,
              location: "sidebar"
            }), _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 148, {
              copy: "library_plus",
              feature: "video_library",
              location: "sidebar",
              name: "click_plus_button",
              page: _v6,
              target: "folder_settings_modal",
              type: "general",
              click_type: null,
              device_type: null,
              path: window.location.pathname,
              third_party_integration: null,
              target_path: null
            }));
          }
        }),
        onClick: () => {
          _v1 && _v0?.();
        }
      }), (0, _v1.jsx)(_v8.Flex, {
        flexDirection: "column",
        gap: "2px",
        "data-id": "library_side_nav_folder_container",
        children: _v56 ? _v56.map(_v0 => {
          let {
              canDelete: _v1,
              canEdit: _v2,
              canEditSettings: _v3,
              canInvite: _v4
            } = (0, _v60.getFolderPermissions)(_v0),
            {
              name: _v5,
              uri: _v6,
              metadata: _v7,
              isPrivateToUser: _v8
            } = _v0,
            _v9 = _v7?.connections?.parentFolder,
            _v10 = parseInt(_v6.split("/")?.[2]),
            _v11 = parseInt(_v6.split("/").pop() ?? ""),
            _v12 = _v0 => _v48({
              isPrivateToUser: _v8,
              libraryFolderId: String(_v11),
              libraryFolderContextMenuAction: _v0
            }),
            _v13 = _v17.hasExtraEmbedOptions && _v3,
            _v14 = _v7?.vimeoHttpsUrl + (0, _v21.getFolderPageUriFromApiUri)(_v6),
            _v15 = _v7?.vimeoHttpsUrl + (0, _v21.getFolderAnalyticsPageUriFromApiUri)(_v6),
            _v16 = !_v17.hasProhibitMultipleReviewLinks && !!_v17.hasMultipleReviewLinks,
            {
              canCreateReviewLink: _v17,
              canCopyReviewPageLink: _v18,
              canManageReviewLinks: _v19,
              reviewPageLink: _v20
            } = (0, _v57.getReviewLinkMenuState)({
              hasReviewLinkCapabilities: _v16,
              hasMultipleReviewLinks: !!_v17.hasMultipleReviewLinks,
              reviewLinks: _v0.reviewLinks,
              canUpsell: _v44,
              getReviewPageUrl: _v0 => (0, _v32.getFolderReviewPageUrl)(_v0, _v11, _v10)
            }),
            _v21 = _v0 ? _v37("folder", _v0) : {
              isItemStarred: !1,
              onStarClick: void 0
            },
            {
              isItemStarred: _v22,
              onStarClick: _v23
            } = _v21,
            _v24 = () => {
              _v22 && _v23?.();
            },
            _v25 = (_v0, _v1, _v2, _v3) => {
              _v12(), _v1[0].parentFolder?.uri ? _v14(_v1[0]?.parentFolder?.uri ?? "") : _v16(), "root" !== _v0 && _v14(_v0.uri);
              let _v4 = "root" === _v0 ? _v26 : _v0.name,
                _v5 = "root" === _v0 ? "/library" : (0, _v21.getFolderPageUriFromApiUri)(_v0.uri);
              _v2 && _v3 ? _v11(_v1, {
                label: _v4,
                workspaceName: _v3
              }, () => {
                _v7 && (0, _v61.switchTeam)(_v2, _v7.xsrft).finally(() => {
                  window.location.href = _v5;
                });
              }) : _v10(_v1[0].name, {
                label: _v4,
                link: _v5
              });
            },
            _v26 = (_v0, _v1) => {
              _v9(_v1[0].name, "root" === _v0 ? _v26 : _v0.name);
            };
          return (0, _v1.jsx)(_v36.FolderMenuItem, {
            action: (0, _v1.jsx)(_v31.FolderMenu, {
              canTranslateVideos: _v2 && _v21,
              handleTranslateVideo: () => {
                _v12("translate_videos"), _v39({
                  folderId: _v11,
                  isFolder: !0,
                  folderName: _v5,
                  canTranslateText: _v19,
                  canTranslateDubbing: _v20,
                  onComplete: () => {
                    let _v0 = _v7?.teamUser?.ownerId ?? _v7?.user?.id;
                    _v0 && _v47(_v0);
                  }
                });
              },
              placement: "right-start",
              usePortal: !1,
              size: "sm",
              onClick: () => {
                _v7.BigPictureClient.sendEvent(new _v7.Event("open_folder_overflow", 8, {
                  product: "video_library",
                  path: window.location.pathname,
                  location: "sidebar",
                  folder_id: _v11,
                  is_subfolder: !!_v9,
                  feature: _v40.AnalyticsFeatures.VIDEO_LIBRARY,
                  page: _v6,
                  target_object_location_type: _v0.isPrivateToUser ? "private_folder" : "team_folder",
                  actor_team_role: _v7?.teamUser?.plainTextPermissionLevel ?? null,
                  is_my_videos: _v0.isPrivateToUser && !!_v23,
                  entry_page: "video_library"
                }));
              },
              canShare: _v4 || _v17.canSeeUpsellModalOnShare,
              onShare: () => {
                _v12("share"), _v58({
                  uri: _v6,
                  folder: _v0
                });
              },
              canDelete: _v1,
              onDelete: () => {
                _v12("delete"), _v34?.(_v5, _v11, "sidebar", _v9?.uri, _v10, _v8, !!_v23, _v24), _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 148, {
                  copy: "delete",
                  feature: "video_library",
                  location: "sidebar",
                  name: "select_folder_menu_item",
                  page: _v6,
                  target: null,
                  type: "general",
                  click_type: null,
                  device_type: null,
                  path: window.location.pathname,
                  third_party_integration: null,
                  target_path: null
                }));
              },
              canEditFolderSettings: _v3,
              onFolderSettings: () => {
                _v12("folder_setting"), _v27({
                  userId: _v10,
                  parentFolderUri: _v9?.uri,
                  currentFolderUri: _v6,
                  location: "sidebar",
                  onSettingsChange: _v57,
                  isEditingFolder: !0,
                  initialColor: _v0?.settings?.color
                }), _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 148, {
                  copy: "folder_settings",
                  feature: "video_library",
                  location: "sidebar",
                  name: "select_folder_menu_item",
                  page: _v6,
                  target: null,
                  type: "general",
                  click_type: null,
                  device_type: null,
                  path: window.location.pathname,
                  third_party_integration: null,
                  target_path: null
                }));
              },
              onFolderDefaults: () => {
                _v12("folder_setting"), _v28({
                  folderId: _v11,
                  ownerId: _v10,
                  isFolderOwner: _v7?.user?.uri === _v0?.user?.uri,
                  presetId: _v0?.settings?.embedPresetId ?? null,
                  isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
                  displayUpsell: !_v13,
                  location: "sidebar",
                  feature: _v40.AnalyticsFeatures.VIDEO_LIBRARY,
                  page: _v6,
                  onSave: () => {
                    _v8({
                      content: (0, _v14.translate)({
                        singular: "Folder defaults saved",
                        dictionary: {
                          es: {
                            singular: "Se guardaron los valores predeterminados de la carpeta."
                          },
                          "de-DE": {
                            singular: "Ordner-Standardeinstellungen gespeichert"
                          },
                          "fr-FR": {
                            singular: "Paramètres par défaut des dossiers enregistrés"
                          },
                          "ja-JP": {
                            singular: "フォルダーのデフォルトが保存されました"
                          },
                          "ko-KR": {
                            singular: "폴더 기본 설정이 저장되었습니다."
                          },
                          "pt-BR": {
                            singular: "Padrões da pasta salvos"
                          },
                          "zh-CN": {
                            singular: "文件夹默认设置已保存"
                          }
                        }
                      }),
                      status: ""
                    });
                  }
                });
              },
              canMove: _v1,
              onMove: () => {
                _v12("move"), _v35({
                  activeFolderURI: _v6,
                  feature: _v40.AnalyticsFeatures.VIDEO_LIBRARY,
                  location: "sidebar",
                  items: [{
                    name: _v5,
                    type: "folder",
                    parentFolder: _v9?.uri ? {
                      uri: _v9.uri,
                      isPrivateToUser: _v8
                    } : void 0,
                    uri: _v0.uri
                  }],
                  onMoveSuccess: ({
                    selectedDestination: _v0,
                    items: _v1,
                    destinationWorkspaceId: _v2,
                    destinationWorkspaceName: _v3
                  }) => {
                    _v25(_v0, _v1, _v2, _v3);
                  },
                  onMoveFailure: ({
                    selectedDestination: _v0,
                    items: _v1
                  }) => {
                    _v26(_v0, _v1);
                  },
                  teamOwnerId: _v10
                }), _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 148, {
                  copy: "move",
                  feature: "video_library",
                  location: "sidebar",
                  name: "select_folder_menu_item",
                  page: _v6,
                  target: null,
                  type: "general",
                  click_type: null,
                  device_type: null,
                  path: window.location.pathname,
                  third_party_integration: null,
                  target_path: null
                }));
              },
              canBulkPrivacyChange: _v2 && _v40,
              onBulkPrivacyChange: () => {
                _v42({
                  userId: _v10,
                  folderUris: [_v6],
                  folderName: _v5,
                  location: "side_nav_folder_menu",
                  variant: _v41,
                  onSuccess: () => {
                    _v43();
                  }
                });
              },
              canEdit: _v2,
              analyticsPageLink: _v15,
              folderLink: _v14,
              onCopyLink: () => {
                _v12("copy_link"), _v59({
                  folder: _v0,
                  canEditSettings: _v3
                });
              },
              onClickAnalyticsLink: () => {
                _v12("analytics"), _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 148, {
                  copy: "analytics",
                  feature: "video_library",
                  location: "sidebar",
                  name: "click_folder_analytics",
                  page: _v6,
                  target: _v15 ?? "",
                  type: "general",
                  click_type: null,
                  device_type: null,
                  path: window.location.pathname,
                  third_party_integration: null,
                  target_path: null
                }));
              },
              hasShareUpsell: _v17.canSeeUpsellModalOnShare,
              hasSlackIntegration: !_v0.useParentSlackSettings,
              isConnectedToSlack: !!_v0.slackIncomingWebhooksId,
              onSlackIntegration: () => {
                _v12("connect_to_slack"), _v36({
                  userId: _v10,
                  hasSlackIntegration: !!_v0.slackIncomingWebhooksId,
                  isSlackNotificationEnabled: !!_v0.isSlackNotificationEnabled,
                  folderId: _v11,
                  folderName: _v5,
                  currentFolderUri: _v6,
                  async updateSubFolderData(_v0) {
                    _v13(_v6), _v15(_v0), _v9?.uri ? _v14(_v9.uri) : _v12();
                  }
                }), _v0?.slackIncomingWebhooksId ? _v38("vimeo.open_connection_settings", -1, {
                  includeActionContext: !0,
                  element: "dropdown",
                  feature: "integrations_settings",
                  location: "sidebar",
                  folderId: _v11,
                  integrationType: "folder_base_connect",
                  parentFolderId: null,
                  isPrivateToMe: _v0.isPrivateToUser,
                  isPinned: _v0.isPinned
                }) : _v38("vimeo.connect_folder", -1, {
                  includeActionContext: !0,
                  element: "dropdown",
                  feature: "integrations_connections",
                  location: "sidebar",
                  folderId: _v11,
                  integrationType: "folder_base_connect",
                  parentFolderId: null,
                  isPrivateToMe: _v0?.isPrivateToUser,
                  isPinned: _v0?.isPinned
                });
              },
              onStarClick: _v23 ? () => {
                _v22 || _v12("add_to_starred"), _v23();
              } : void 0,
              canCreateReviewLink: _v17,
              onCreateReviewLink: () => {
                _v12("create_review_link"), _v58({
                  uri: _v6,
                  folder: _v0,
                  defaultPanel: "CREATE_REVIEW_LINK_MODAL"
                });
              },
              canCopyReviewPageLink: _v18,
              reviewPageLink: _v20,
              onCopyReviewPageLink: () => {
                if (_v12("copy_review_link"), _v20) {
                  let _v0 = _v0.reviewLinks?.[0]?.uri;
                  _v45(_v0 ? () => _v58({
                    uri: _v6,
                    folder: _v0,
                    defaultPanel: "CREATE_REVIEW_LINK_MODAL",
                    editReviewLinkUri: _v0
                  }) : void 0);
                } else _v46(_v11, _v10, _v6);
              },
              canManageReviewLinks: _v19,
              onManageReviewLinks: () => {
                _v12("manage_review_links"), _v58({
                  uri: _v6,
                  folder: _v0,
                  defaultPanel: "REVIEW_LINKS_PANEL"
                });
              },
              hasProhibitMultipleReviewLinks: _v17.hasProhibitMultipleReviewLinks,
              ..._v21
            }),
            closeSideNav: _v0,
            folderId: _v11,
            folderOwnerId: _v10,
            hasActiveColor: !0,
            hasSubfolders: _v0.hasSubfolder,
            isMobile: _v1,
            label: _v0?.name ?? "",
            uri: _v0.uri,
            hasContentSpaceEnabled: !!_v23,
            hasShareUpsell: !!_v17.canSeeUpsellModalOnShare,
            dropTarget: _v0,
            loadingSideNavFolderURIs: _v3,
            onClick: () => {
              _v1 && _v0?.(), _v49({
                isPrivateToUser: _v8,
                folderUri: _v6
              }), _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click_folder_title", 2, {
                path: window.location.pathname,
                entry_page: "video_library",
                page: _v6,
                location: "sidebar",
                team_owner_id: _v5.toString(),
                team_size: _v7?.teamUser?.currentTeamSize ?? null,
                team_subscription_type: _v7?.teamUser?.accountType ?? null,
                actor_team_role: _v7?.teamUser?.plainTextPermissionLevel ?? null,
                product: "video_library",
                actor_resource_role: null,
                folder_id: _v0.uri.split("/").pop() ?? null,
                is_subfolder: !!_v9,
                folder_share_status: _v0.privacy?.view === "nobody" ? "not_shared" : "shared",
                is_private_to_me: _v0.isPrivateToUser,
                parent_folder_id: _v9?.uri.split("/").pop() ?? null,
                position_row: null,
                is_pinned: _v0.isPinned
              }));
            },
            baseUrl: _v7?.vimeoHttpsUrl,
            onMoveFolderSuccess: _v25,
            onMoveFolderFailure: _v26,
            teamOwnerId: _v5,
            uploadClipProperties: _v25
          }, _v0.uri);
        }) : (0, _v1.jsx)(_v38.LoadingFolders, {})
      }), !!_v50 && !_v55 && !_v54 && (0, _v1.jsx)(_v37.InfiniteLoadingZone, {
        onVisible: _v60,
        "data-testid": "infinite-loading-zone"
      }, `folders-loading-zone-${_v56?.length}`), !!(_v50 && _v54) && (0, _v1.jsx)(_v22.Spinner, {
        size: "sm",
        marginTop: "1rem",
        marginLeft: "2.75rem"
      })]
    });
  };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ({
      closeSideNav: _v0,
      hasContentSpaceEnabled: _v1,
      isMobile: _v2,
      isNewSidebar: _v3 = !1,
      label: _v4,
      loadingSideNavFolderURIs: _v5 = new Set(),
      teamOwnerId: _v6
    }) => {
      let _v7 = (0, _v19.useWayfinderPageName)(),
        _v8 = (0, _v6.useContext)(_v35.ViewerContext),
        [_v9, _v10] = (0, _v6.useState)(!0),
        {
          openFolderSettingsModal: _v11
        } = (0, _v45.useFolderSettingsModal)(),
        {
          trackLibraryFolderOpened: _v12
        } = (0, _v30.useLibraryTracking)(),
        {
          data: _v13
        } = (0, _v66.useGetUserFoldersPrivateToMe)({
          where: {
            ownerId: _v6
          },
          select: ["name", "isPinned", "hasSubfolder", "isPrivateToUser", "metadata.connections.folders.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "metadata.interactions.addSubfolder.canAddSubfolders", "privacy.view", "uri"]
        }),
        _v14 = _v13?.metadata.interactions.addSubfolder.canAddSubfolders;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v13 ? (0, _v1.jsx)(_v36.FolderMenuItem, {
          hasSubfolders: _v13.hasSubfolder,
          action: _v14 && (0, _v1.jsx)(_v39.NewFolderButton, {
            onClick: () => {
              _v11({
                userId: _v6,
                parentFolderUri: null,
                currentFolderUri: _v13.uri,
                location: "sidebar"
              });
            },
            isPrivateToMe: !0
          }),
          closeSideNav: _v0,
          label: _v4,
          icon: _v3 ? void 0 : _v1 ? (0, _v1.jsx)(_v65.MyLibraryFilled, {}) : (0, _v1.jsx)(_v64.PersonUser, {}),
          isMobile: _v2,
          isOpen: _v9,
          onClick: () => {
            _v9 || _v10(!0), _v2 && _v0?.(), _v12({
              folderUri: _v13?.uri,
              isPrivateToUser: !0
            });
            let _v0 = _v13?.metadata?.connections?.parentFolder;
            _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click_folder_title", 2, {
              path: window.location.pathname,
              entry_page: "video_library",
              page: _v7,
              location: "sidebar",
              team_owner_id: _v6.toString(),
              team_size: _v8?.teamUser?.currentTeamSize ?? null,
              team_subscription_type: _v8?.teamUser?.accountType ?? null,
              actor_team_role: _v8?.teamUser?.plainTextPermissionLevel ?? null,
              product: "video_library",
              actor_resource_role: null,
              folder_id: _v13.uri.split("/").pop() || null,
              is_subfolder: !!_v0,
              folder_share_status: _v13?.privacy?.view === "nobody" ? "not_shared" : "shared",
              is_private_to_me: !0,
              parent_folder_id: _v0?.uri.split("/").pop() ?? null,
              position_row: null,
              is_pinned: _v13?.isPinned ?? null
            }));
          },
          onClickToggle: () => {
            _v10(!_v9);
          },
          hasContentSpaceEnabled: _v1,
          uri: _v13.uri,
          dropTarget: _v13,
          loadingSideNavFolderURIs: _v5
        }, "private_to_me") : (0, _v1.jsx)(_v38.LoadingFolders, {})
      });
    },
    _v68 = ({
      hideBackToHome: _v0 = !1
    }) => {
      let _v1,
        _v2,
        {
          loadingSideNavFolderURIs: _v3,
          setIsSideNavOpen: _v4,
          teamOwnerId: _v5
        } = (0, _v6.useContext)(_v18.VideoLibraryLayoutContext),
        _v6 = () => _v4(!1),
        {
          capabilities: _v7
        } = (0, _v12.useCapability)(["hasSharedWithMe"], _v5),
        {
          contentSpaceEnabled: _v8
        } = (0, _v11.useContentSpaceEnabled)(_v5),
        {
          settings: _v9
        } = (0, _v2.useOrionSettings)(),
        _v10 = _v9.enable_new_sidebar,
        _v11 = (0, _v5.useRouter)(),
        _v12 = (0, _v19.useWayfinderPageName)(),
        {
          isPrivate: _v13
        } = _v11.query,
        [_v14, _v15] = (0, _v6.useState)("true" === _v13),
        [_v16, _v17] = (0, _v6.useState)("false" === _v13),
        _v18 = (0, _v15.useWindowSize)().width <= _v16.BreakPoints.sm,
        _v19 = (_v1 = _v20.Path.SharedWithMe, _v11.pathname === _v1),
        _v20 = window.location.pathname,
        _v21 = (_v2 = _v20.Path.MVV, _v11.pathname === _v2) ? (0, _v21.getFolderIdFromFolderUri)(_v20) : 0,
        {
          data: _v22,
          isLoading: _v23,
          error: _v24
        } = (0, _v13.useGetUserProject)(() => _v5 && _v21 ? {
          where: {
            userId: _v5,
            projectId: _v21
          },
          select: _v20.GET_USER_PROJECT_API_FIELDS
        } : null),
        _v25 = _v22?.metadata?.connections?.ancestorPath ?? [],
        _v26 = _v25.length > 0 ? _v25[_v25.length - 1] : null,
        _v27 = !_v23 && !_v24 && _v26?.name === _v20.SHARED_WITH_ME_DIR_NAME,
        _v28 = _v7.hasSharedWithMe && (_v19 || _v27);
      (0, _v6.useEffect)(() => {
        (void 0 !== _v13 || _v11.pathname === _v20.Path.TeamLibrary) && ("true" === _v13 ? (_v15(!0), _v17(!1)) : (_v17(!0), _v15(!1)));
      }, [_v13, _v11.pathname]);
      let _v29 = _v14 || _v16 || _v11.pathname === _v20.Path.TeamLibrary;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v8.Flex, {
          flexDirection: "column",
          paddingBottom: "8px",
          gap: "2px",
          children: [!_v0 && (0, _v1.jsx)(_v17.MenuItem, {
            label: (0, _v14.translate)({
              singular: "Back to home",
              dictionary: {
                es: {
                  singular: "Volver al inicio"
                },
                "de-DE": {
                  singular: "Zurück zur Startseite"
                },
                "fr-FR": {
                  singular: "Retour à l'accueil"
                },
                "ja-JP": {
                  singular: "ホームに戻る"
                },
                "ko-KR": {
                  singular: "홈으로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar à página inicial"
                },
                "zh-CN": {
                  singular: "返回主页"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v9.ArrowLeft, {
              width: 25,
              height: 25
            }),
            href: _v20.Path.Home
          }), _v28 ? (0, _v1.jsx)(_v17.MenuItem, {
            icon: (0, _v1.jsx)(_v10.UsersFilled, {}),
            iconSize: "xs",
            label: _v20.SHARED_WITH_ME_DIR_NAME,
            href: _v20.Path.SharedWithMe,
            active: !0,
            dataId: "side_nav_shared_with_me",
            onClick: () => {
              _v7.BigPictureClient.sendEvent(new _v7.Event("vimeo.click", 150, {
                copy: "shared with me",
                feature: "shared_with_me",
                location: "sidebar",
                name: "click_shared_with_me",
                page: _v12,
                target: "shared_with_me",
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: "/shared_with_me"
              }));
            }
          }) : (0, _v1.jsx)(_v1.Fragment, {
            children: _v29 ? _v14 ? (0, _v1.jsx)(_v67, {
              closeSideNav: _v6,
              hasContentSpaceEnabled: _v8,
              isMobile: _v18,
              isNewSidebar: _v10,
              label: (0, _v14.translate)({
                singular: "My library",
                dictionary: {
                  es: {
                    singular: "Mi biblioteca"
                  },
                  "de-DE": {
                    singular: "Meine Bibliothek"
                  },
                  "fr-FR": {
                    singular: "Ma bibliothèque"
                  },
                  "ja-JP": {
                    singular: "マイ ライブラリ"
                  },
                  "ko-KR": {
                    singular: "내 라이브러리"
                  },
                  "pt-BR": {
                    singular: "Minha Biblioteca"
                  },
                  "zh-CN": {
                    singular: "我的视频库"
                  }
                }
              }),
              loadingSideNavFolderURIs: _v3,
              teamOwnerId: _v5 ?? 0
            }) : (0, _v1.jsx)(_v63, {
              closeSideNav: _v6,
              isMobile: _v18,
              isNewSidebar: _v10,
              loadingSideNavFolderURIs: _v3,
              pathname: _v11.pathname,
              teamOwnerId: _v5
            }) : (0, _v1.jsx)(_v38.LoadingFolders, {})
          })]
        })
      });
    };
  _v0.s(["LibrarySideNavContent", 0, _v68], 0);
  var _v69 = _v0.i(0);
  _v0.s(["SideNavContent", 0, ({
    surface: _v0
  }) => {
    let {
        settings: _v1
      } = (0, _v2.useOrionSettings)(),
      _v2 = (0, _v3.useSideNavCollapsed)();
    return "home" === _v0 ? _v1.enable_new_sidebar ? (0, _v1.jsx)(_v69.HomePrimaryNavbar, {
      variant: _v2 ? "icons" : "full"
    }) : (0, _v1.jsx)(_v4.HomeSideNavContent, {}) : (0, _v1.jsx)(_v68, {
      hideBackToHome: _v1.enable_new_sidebar
    });
  }], 0);
}