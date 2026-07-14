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
    _v61 = _v0.i(0);
  let _v62 = ({
    closeSideNav: _v0,
    isMobile: _v1,
    loadingSideNavFolderURIs: _v2 = new Set(),
    pathname: _v3,
    teamOwnerId: _v4
  }) => {
    let _v5 = (0, _v18.useWayfinderPageName)(),
      _v6 = (0, _v5.useContext)(_v34.ViewerContext),
      _v7 = (0, _v48.useNotification)(),
      {
        notifyItemMoveFailure: _v8,
        notifyItemMoveSuccess: _v9,
        notifyItemMoveToWorkspaceSuccess: _v10
      } = (0, _v48.useNotifications)(),
      {
        revalidateTopLevelFolders: _v11,
        revalidateFolder: _v12,
        revalidateFolderItems: _v13,
        revalidateSetOfFolderItems: _v14,
        revalidateRootItems: _v15
      } = (0, _v49.useRevalidate)(),
      {
        capabilities: _v16,
        ready: _v17
      } = (0, _v11.useCapability)(["canCreateRootFolders", "canSeeUpsellModalOnShare", "hasExtraEmbedOptions", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canPerformBulkTranslations"], _v4),
      _v18 = !!_v16.canGenerateClipTextTranslation,
      _v19 = !!_v16.canGenerateClipTranslation,
      _v20 = (_v19 || _v18) && !!_v16.canPerformBulkTranslations,
      {
        loading: _v21,
        contentSpaceEnabled: _v22
      } = (0, _v10.useContentSpaceEnabled)(_v4),
      {
        listingParams: _v23
      } = (0, _v27.usePrivateToMeFolderListingParams)(_v4),
      _v24 = (0, _v53.useTeamUploadClipProperties)(_v4),
      _v25 = !_v17 || _v21 ? "" : _v22 ? (0, _v13.translate)({
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
      }) : (0, _v13.translate)({
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
        openFolderSettingsModal: _v26
      } = (0, _v44.useFolderSettingsModal)(),
      {
        openFolderDefaultsModal: _v27
      } = (0, _v45.useFolderDefaultsModal)(),
      {
        open: _v28,
        close: _v29
      } = (0, _v57.useUpsellModal)(),
      {
        openShareFolderModal: _v30
      } = (0, _v51.useShareFolderModal)(),
      _v31 = (0, _v42.useCopyFolderLinkToast)(),
      _v32 = (0, _v46.useManageShareActionBuilder)(),
      {
        openDeleteFolderModal: _v33
      } = (0, _v43.useDeleteFolderModal)(),
      {
        openMoveModal: _v34
      } = (0, _v47.useMoveModal)(),
      {
        openSlackIntegrationModal: _v35
      } = (0, _v52.useSlackIntegrationModal)(),
      {
        handleStarMenuState: _v36
      } = (0, _v61.useStarMenuItem)(),
      {
        sendEvent: _v37
      } = (0, _v41.useAnalyticsEvents)(),
      {
        openBulkAiModal: _v38
      } = (0, _v24.useBulkAiModal)(),
      {
        isEnabled: _v39,
        variant: _v40
      } = (0, _v26.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v41
      } = (0, _v25.useBulkPrivacyModal)(),
      _v42 = (0, _v50.useRevalidateVideoListCaches)(),
      _v43 = (0, _v32.useCanUpSell)(),
      _v44 = (0, _v55.useReviewLinkCopiedToast)(),
      _v45 = (0, _v54.useCreateAndCopyFolderReviewLink)((0, _v5.useCallback)((_v0, _v1) => {
        _v44(() => _v30?.(_v0, "sidebar", "CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v44, _v30])),
      _v46 = (0, _v58.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        trackLibraryFolderContextMenuActionClicked: _v47,
        trackLibraryFolderOpened: _v48
      } = (0, _v29.useLibraryTracking)(),
      {
        data: _v49,
        size: _v50,
        setSize: _v51,
        error: _v52
      } = (0, _v28.useGetUserProjectsInfinite)(() => !_v4 || _v21 ? null : {
        where: {
          userId: _v4
        },
        select: ["isPinned", "isPrivateToUser", "hasSubfolder", "metadata.connections.folders.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.delete", "metadata.interactions.invite", "metadata.interactions.edit", "metadata.interactions.editSettings", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "name", "privacy.view", "isSlackNotificationEnabled", "reviewLinks.uri", "settings.color", "settings.embedPresetId", "settings.isEmbedPresetInheritanceEnabled", "slackIncomingWebhooksId", "uri", "useParentSlackSettings", "user.uri"],
        query: {
          ..._v23,
          perPage: 100,
          topLevelOnly: !0
        }
      }, {
        revalidateOnFocus: !1
      }),
      {
        isLoadingMore: _v53,
        isDone: _v54
      } = (0, _v33.getInfiniteRequestLoadingState)({
        data: _v49,
        error: _v52,
        size: _v50,
        itemsPerPage: 100
      }),
      _v55 = _v49?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data)?.filter(_v0 => !!_v0),
      _v56 = () => {
        _v11(), _v15();
      },
      _v57 = (0, _v5.useCallback)(({
        uri: _v0,
        folder: _v1,
        defaultPanel: _v2,
        editReviewLinkUri: _v3
      }) => {
        if (_v16.canSeeUpsellModalOnShare) _v28({
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
          onClose: _v29
        });else _v30?.(_v0, "sidebar", _v2, _v3);
        _v40.BPAnalyticsV2.openFolderShare({
          location: "sidebar",
          element: "ellipses",
          teamUser: _v6?.teamUser,
          folder: _v1,
          webCtx: {
            path: window.location.pathname,
            page_name: _v1.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v29, _v30, _v28, _v16.canSeeUpsellModalOnShare, _v6?.teamUser]),
      _v58 = (0, _v5.useCallback)(({
        folder: _v0,
        canEditSettings: _v1
      }) => {
        _v31({
          onManage: _v32({
            canEdit: _v1,
            entityUri: _v0.uri,
            location: "sidebar",
            panel: "INVITE_PANEL"
          })
        }), _v40.BPAnalyticsV2.copyFolderLink({
          location: "sidebar",
          element: "ellipses",
          teamUser: _v6?.teamUser,
          folder: _v0,
          webCtx: {
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v31, _v32, _v6?.teamUser]),
      _v59 = (0, _v5.useCallback)(() => {
        _v51(_v0 => _v0 + 1);
      }, [_v51]);
    return (0, _v1.jsxs)(_v7.Flex, {
      flexDirection: "column",
      gap: "2px",
      children: [(0, _v1.jsx)(_v16.MenuItem, {
        icon: _v22 ? (0, _v1.jsx)(_v23.TeamLibraryFilled, {}) : (0, _v1.jsx)(_v22.VideosStack, {}),
        label: _v25,
        href: `${_v19.Path.TeamLibrary}?library_referrer=sidebar`,
        active: _v3 === _v19.Path.TeamLibrary,
        action: !!_v16.canCreateRootFolders && (0, _v1.jsx)(_v38.NewFolderButton, {
          onClick: () => {
            _v26({
              userId: _v4,
              parentFolderUri: null,
              currentFolderUri: null,
              location: "sidebar"
            }), _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click", 148, {
              copy: "library_plus",
              feature: "video_library",
              location: "sidebar",
              name: "click_plus_button",
              page: _v5,
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
      }), (0, _v1.jsx)(_v7.Flex, {
        flexDirection: "column",
        gap: "2px",
        "data-id": "library_side_nav_folder_container",
        children: _v55 ? _v55.map(_v0 => {
          let {
              canDelete: _v1,
              canEdit: _v2,
              canEditSettings: _v3,
              canInvite: _v4
            } = (0, _v59.getFolderPermissions)(_v0),
            {
              name: _v5,
              uri: _v6,
              metadata: _v7,
              isPrivateToUser: _v8
            } = _v0,
            _v9 = _v7?.connections?.parentFolder,
            _v10 = parseInt(_v6.split("/")?.[2]),
            _v11 = parseInt(_v6.split("/").pop() ?? ""),
            _v12 = _v0 => _v47({
              isPrivateToUser: _v8,
              libraryFolderId: String(_v11),
              libraryFolderContextMenuAction: _v0
            }),
            _v13 = _v16.hasExtraEmbedOptions && _v3,
            _v14 = _v6?.vimeoHttpsUrl + (0, _v20.getFolderPageUriFromApiUri)(_v6),
            _v15 = _v6?.vimeoHttpsUrl + (0, _v20.getFolderAnalyticsPageUriFromApiUri)(_v6),
            _v16 = !_v16.hasProhibitMultipleReviewLinks && !!_v16.hasMultipleReviewLinks,
            {
              canCreateReviewLink: _v17,
              canCopyReviewPageLink: _v18,
              canManageReviewLinks: _v19,
              reviewPageLink: _v20
            } = (0, _v56.getReviewLinkMenuState)({
              hasReviewLinkCapabilities: _v16,
              hasMultipleReviewLinks: !!_v16.hasMultipleReviewLinks,
              reviewLinks: _v0.reviewLinks,
              canUpsell: _v43,
              getReviewPageUrl: _v0 => (0, _v31.getFolderReviewPageUrl)(_v0, _v11, _v10)
            }),
            _v21 = _v0 ? _v36("folder", _v0) : {
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
              _v11(), _v1[0].parentFolder?.uri ? _v13(_v1[0]?.parentFolder?.uri ?? "") : _v15(), "root" !== _v0 && _v13(_v0.uri);
              let _v4 = "root" === _v0 ? _v25 : _v0.name,
                _v5 = "root" === _v0 ? "/library" : (0, _v20.getFolderPageUriFromApiUri)(_v0.uri);
              _v2 && _v3 ? _v10(_v1, {
                label: _v4,
                workspaceName: _v3
              }, () => {
                _v6 && (0, _v60.switchTeam)(_v2, _v6.xsrft).finally(() => {
                  window.location.href = _v5;
                });
              }) : _v9(_v1[0].name, {
                label: _v4,
                link: _v5
              });
            },
            _v26 = (_v0, _v1) => {
              _v8(_v1[0].name, "root" === _v0 ? _v25 : _v0.name);
            };
          return (0, _v1.jsx)(_v35.FolderMenuItem, {
            action: (0, _v1.jsx)(_v30.FolderMenu, {
              canTranslateVideos: _v2 && _v20,
              handleTranslateVideo: () => {
                _v12("translate_videos"), _v38({
                  folderId: _v11,
                  isFolder: !0,
                  folderName: _v5,
                  canTranslateText: _v18,
                  canTranslateDubbing: _v19,
                  onComplete: () => {
                    let _v0 = _v6?.teamUser?.ownerId ?? _v6?.user?.id;
                    _v0 && _v46(_v0);
                  }
                });
              },
              placement: "right-start",
              usePortal: !1,
              size: "sm",
              onClick: () => {
                _v6.BigPictureClient.sendEvent(new _v6.Event("open_folder_overflow", 8, {
                  product: "video_library",
                  path: window.location.pathname,
                  location: "sidebar",
                  folder_id: _v11,
                  is_subfolder: !!_v9,
                  feature: _v39.AnalyticsFeatures.VIDEO_LIBRARY,
                  page: _v5,
                  target_object_location_type: _v0.isPrivateToUser ? "private_folder" : "team_folder",
                  actor_team_role: _v6?.teamUser?.plainTextPermissionLevel ?? null,
                  is_my_videos: _v0.isPrivateToUser && !!_v22,
                  entry_page: "video_library"
                }));
              },
              canShare: _v4 || _v16.canSeeUpsellModalOnShare,
              onShare: () => {
                _v12("share"), _v57({
                  uri: _v6,
                  folder: _v0
                });
              },
              canDelete: _v1,
              onDelete: () => {
                _v12("delete"), _v33?.(_v5, _v11, "sidebar", _v9?.uri, _v10, _v8, !!_v22, _v24), _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click", 148, {
                  copy: "delete",
                  feature: "video_library",
                  location: "sidebar",
                  name: "select_folder_menu_item",
                  page: _v5,
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
                _v12("folder_setting"), _v26({
                  userId: _v10,
                  parentFolderUri: _v9?.uri,
                  currentFolderUri: _v6,
                  location: "sidebar",
                  onSettingsChange: _v56,
                  isEditingFolder: !0,
                  initialColor: _v0?.settings?.color
                }), _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click", 148, {
                  copy: "folder_settings",
                  feature: "video_library",
                  location: "sidebar",
                  name: "select_folder_menu_item",
                  page: _v5,
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
                _v12("folder_setting"), _v27({
                  folderId: _v11,
                  ownerId: _v10,
                  isFolderOwner: _v6?.user?.uri === _v0?.user?.uri,
                  presetId: _v0?.settings?.embedPresetId ?? null,
                  isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
                  displayUpsell: !_v13,
                  location: "sidebar",
                  feature: _v39.AnalyticsFeatures.VIDEO_LIBRARY,
                  page: _v5,
                  onSave: () => {
                    _v7({
                      content: (0, _v13.translate)({
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
                _v12("move"), _v34({
                  activeFolderURI: _v6,
                  feature: _v39.AnalyticsFeatures.VIDEO_LIBRARY,
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
                }), _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click", 148, {
                  copy: "move",
                  feature: "video_library",
                  location: "sidebar",
                  name: "select_folder_menu_item",
                  page: _v5,
                  target: null,
                  type: "general",
                  click_type: null,
                  device_type: null,
                  path: window.location.pathname,
                  third_party_integration: null,
                  target_path: null
                }));
              },
              canBulkPrivacyChange: _v2 && _v39,
              onBulkPrivacyChange: () => {
                _v41({
                  userId: _v10,
                  folderUris: [_v6],
                  folderName: _v5,
                  location: "side_nav_folder_menu",
                  variant: _v40,
                  onSuccess: () => {
                    _v42();
                  }
                });
              },
              canEdit: _v2,
              analyticsPageLink: _v15,
              folderLink: _v14,
              onCopyLink: () => {
                _v12("copy_link"), _v58({
                  folder: _v0,
                  canEditSettings: _v3
                });
              },
              onClickAnalyticsLink: () => {
                _v12("analytics"), _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click", 148, {
                  copy: "analytics",
                  feature: "video_library",
                  location: "sidebar",
                  name: "click_folder_analytics",
                  page: _v5,
                  target: _v15 ?? "",
                  type: "general",
                  click_type: null,
                  device_type: null,
                  path: window.location.pathname,
                  third_party_integration: null,
                  target_path: null
                }));
              },
              hasShareUpsell: _v16.canSeeUpsellModalOnShare,
              hasSlackIntegration: !_v0.useParentSlackSettings,
              isConnectedToSlack: !!_v0.slackIncomingWebhooksId,
              onSlackIntegration: () => {
                _v12("connect_to_slack"), _v35({
                  userId: _v10,
                  hasSlackIntegration: !!_v0.slackIncomingWebhooksId,
                  isSlackNotificationEnabled: !!_v0.isSlackNotificationEnabled,
                  folderId: _v11,
                  folderName: _v5,
                  currentFolderUri: _v6,
                  async updateSubFolderData(_v0) {
                    _v12(_v6), _v14(_v0), _v9?.uri ? _v13(_v9.uri) : _v11();
                  }
                }), _v0?.slackIncomingWebhooksId ? _v37("vimeo.open_connection_settings", -1, {
                  includeActionContext: !0,
                  element: "dropdown",
                  feature: "integrations_settings",
                  location: "sidebar",
                  folderId: _v11,
                  integrationType: "folder_base_connect",
                  parentFolderId: null,
                  isPrivateToMe: _v0.isPrivateToUser,
                  isPinned: _v0.isPinned
                }) : _v37("vimeo.connect_folder", -1, {
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
                _v12("create_review_link"), _v57({
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
                  _v44(_v0 ? () => _v57({
                    uri: _v6,
                    folder: _v0,
                    defaultPanel: "CREATE_REVIEW_LINK_MODAL",
                    editReviewLinkUri: _v0
                  }) : void 0);
                } else _v45(_v11, _v10, _v6);
              },
              canManageReviewLinks: _v19,
              onManageReviewLinks: () => {
                _v12("manage_review_links"), _v57({
                  uri: _v6,
                  folder: _v0,
                  defaultPanel: "REVIEW_LINKS_PANEL"
                });
              },
              hasProhibitMultipleReviewLinks: _v16.hasProhibitMultipleReviewLinks,
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
            hasContentSpaceEnabled: !!_v22,
            hasShareUpsell: !!_v16.canSeeUpsellModalOnShare,
            dropTarget: _v0,
            loadingSideNavFolderURIs: _v2,
            onClick: () => {
              _v1 && _v0?.(), _v48({
                isPrivateToUser: _v8,
                folderUri: _v6
              }), _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click_folder_title", 2, {
                path: window.location.pathname,
                entry_page: "video_library",
                page: _v5,
                location: "sidebar",
                team_owner_id: _v4.toString(),
                team_size: _v6?.teamUser?.currentTeamSize ?? null,
                team_subscription_type: _v6?.teamUser?.accountType ?? null,
                actor_team_role: _v6?.teamUser?.plainTextPermissionLevel ?? null,
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
            baseUrl: _v6?.vimeoHttpsUrl,
            onMoveFolderSuccess: _v25,
            onMoveFolderFailure: _v26,
            teamOwnerId: _v4,
            uploadClipProperties: _v24
          }, _v0.uri);
        }) : (0, _v1.jsx)(_v37.LoadingFolders, {})
      }), !!_v49 && !_v54 && !_v53 && (0, _v1.jsx)(_v36.InfiniteLoadingZone, {
        onVisible: _v59,
        "data-testid": "infinite-loading-zone"
      }, `folders-loading-zone-${_v55?.length}`), !!(_v49 && _v53) && (0, _v1.jsx)(_v21.Spinner, {
        size: "sm",
        marginTop: "1rem",
        marginLeft: "2.75rem"
      })]
    });
  };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = _v0 => (0, _v1.jsx)(_v64.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M8 2a2 2 0 0 0-2 2h11a3 3 0 0 1 3 3v11a2 2 0 0 0 2-2V7a5 5 0 0 0-5-5H8Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Z"
      })]
    })
  });
  var _v66 = _v0.i(0);
  let _v67 = ({
      closeSideNav: _v0,
      hasContentSpaceEnabled: _v1,
      isMobile: _v2,
      label: _v3,
      loadingSideNavFolderURIs: _v4 = new Set(),
      teamOwnerId: _v5
    }) => {
      let _v6 = (0, _v18.useWayfinderPageName)(),
        _v7 = (0, _v5.useContext)(_v34.ViewerContext),
        [_v8, _v9] = (0, _v5.useState)(!0),
        {
          openFolderSettingsModal: _v10
        } = (0, _v44.useFolderSettingsModal)(),
        {
          trackLibraryFolderOpened: _v11
        } = (0, _v29.useLibraryTracking)(),
        {
          data: _v12
        } = (0, _v66.useGetUserFoldersPrivateToMe)({
          where: {
            ownerId: _v5
          },
          select: ["name", "isPinned", "hasSubfolder", "isPrivateToUser", "metadata.connections.folders.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "metadata.interactions.addSubfolder.canAddSubfolders", "privacy.view", "uri"]
        }),
        _v13 = _v12?.metadata.interactions.addSubfolder.canAddSubfolders;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v12 ? (0, _v1.jsx)(_v35.FolderMenuItem, {
          hasSubfolders: _v12.hasSubfolder,
          action: _v13 && (0, _v1.jsx)(_v38.NewFolderButton, {
            onClick: () => {
              _v10({
                userId: _v5,
                parentFolderUri: null,
                currentFolderUri: _v12.uri,
                location: "sidebar"
              });
            },
            isPrivateToMe: !0
          }),
          closeSideNav: _v0,
          label: _v3,
          icon: _v1 ? (0, _v1.jsx)(_v65, {}) : (0, _v1.jsx)(_v63.PersonUser, {}),
          isMobile: _v2,
          isOpen: _v8,
          onClick: () => {
            _v8 || _v9(!0), _v2 && _v0?.(), _v11({
              folderUri: _v12?.uri,
              isPrivateToUser: !0
            });
            let _v0 = _v12?.metadata?.connections?.parentFolder;
            _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click_folder_title", 2, {
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
              folder_id: _v12.uri.split("/").pop() || null,
              is_subfolder: !!_v0,
              folder_share_status: _v12?.privacy?.view === "nobody" ? "not_shared" : "shared",
              is_private_to_me: !0,
              parent_folder_id: _v0?.uri.split("/").pop() ?? null,
              position_row: null,
              is_pinned: _v12?.isPinned ?? null
            }));
          },
          onClickToggle: () => {
            _v9(!_v8);
          },
          hasContentSpaceEnabled: _v1,
          uri: _v12.uri,
          dropTarget: _v12,
          loadingSideNavFolderURIs: _v4
        }, "private_to_me") : (0, _v1.jsx)(_v37.LoadingFolders, {})
      });
    },
    _v68 = () => {
      let _v0,
        _v1,
        {
          loadingSideNavFolderURIs: _v2,
          setIsSideNavOpen: _v3,
          teamOwnerId: _v4
        } = (0, _v5.useContext)(_v17.VideoLibraryLayoutContext),
        _v5 = () => _v3(!1),
        {
          capabilities: _v6
        } = (0, _v11.useCapability)(["hasSharedWithMe"], _v4),
        {
          contentSpaceEnabled: _v7
        } = (0, _v10.useContentSpaceEnabled)(_v4),
        _v8 = (0, _v4.useRouter)(),
        _v9 = (0, _v18.useWayfinderPageName)(),
        {
          isPrivate: _v10
        } = _v8.query,
        [_v11, _v12] = (0, _v5.useState)("true" === _v10),
        [_v13, _v14] = (0, _v5.useState)("false" === _v10),
        _v15 = (0, _v14.useWindowSize)().width <= _v15.BreakPoints.sm,
        _v16 = (_v0 = _v19.Path.SharedWithMe, _v8.pathname === _v0),
        _v17 = window.location.pathname,
        _v18 = (_v1 = _v19.Path.MVV, _v8.pathname === _v1) ? (0, _v20.getFolderIdFromFolderUri)(_v17) : 0,
        {
          data: _v19,
          isLoading: _v20,
          error: _v21
        } = (0, _v12.useGetUserProject)(() => _v4 && _v18 ? {
          where: {
            userId: _v4,
            projectId: _v18
          },
          select: _v19.GET_USER_PROJECT_API_FIELDS
        } : null),
        _v22 = _v19?.metadata?.connections?.ancestorPath ?? [],
        _v23 = _v22.length > 0 ? _v22[_v22.length - 1] : null,
        _v24 = !_v20 && !_v21 && _v23?.name === _v19.SHARED_WITH_ME_DIR_NAME,
        _v25 = _v6.hasSharedWithMe && (_v16 || _v24);
      (0, _v5.useEffect)(() => {
        (void 0 !== _v10 || _v8.pathname === _v19.Path.TeamLibrary) && ("true" === _v10 ? (_v12(!0), _v14(!1)) : (_v14(!0), _v12(!1)));
      }, [_v10, _v8.pathname]);
      let _v26 = _v11 || _v13 || _v8.pathname === _v19.Path.TeamLibrary;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          paddingBottom: "8px",
          gap: "2px",
          children: [(0, _v1.jsx)(_v16.MenuItem, {
            label: (0, _v13.translate)({
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
            icon: (0, _v1.jsx)(_v8.ArrowLeft, {
              width: 25,
              height: 25
            }),
            href: _v19.Path.Home,
            onClick: () => {
              _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click", 148, {
                copy: "back_to_home",
                feature: "lihp",
                location: "sidebar",
                name: "click_back_to_home",
                page: _v9,
                target: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              }));
            }
          }), _v25 ? (0, _v1.jsx)(_v16.MenuItem, {
            icon: (0, _v1.jsx)(_v9.UsersFilled, {}),
            iconSize: "xs",
            label: _v19.SHARED_WITH_ME_DIR_NAME,
            href: _v19.Path.SharedWithMe,
            active: !0,
            dataId: "side_nav_shared_with_me",
            onClick: () => {
              _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.click", 150, {
                copy: "shared with me",
                feature: "shared_with_me",
                location: "sidebar",
                name: "click_shared_with_me",
                page: _v9,
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
            children: _v26 ? _v11 ? (0, _v1.jsx)(_v67, {
              closeSideNav: _v5,
              hasContentSpaceEnabled: _v7,
              isMobile: _v15,
              label: (0, _v13.translate)({
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
              loadingSideNavFolderURIs: _v2,
              teamOwnerId: _v4 ?? 0
            }) : (0, _v1.jsx)(_v62, {
              closeSideNav: _v5,
              isMobile: _v15,
              loadingSideNavFolderURIs: _v2,
              pathname: _v8.pathname,
              teamOwnerId: _v4
            }) : (0, _v1.jsx)(_v37.LoadingFolders, {})
          })]
        })
      });
    };
  _v0.s(["LibrarySideNavContent", 0, _v68], 0);
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = _v0 => (0, _v1.jsx)(_v64.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 7.444A4.444 4.444 0 0 1 7.444 3h9.112A4.444 4.444 0 0 1 21 7.444v9.112A4.444 4.444 0 0 1 16.556 21H7.444A4.444 4.444 0 0 1 3 16.556V7.444ZM17 8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V8Zm-8 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm4 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z",
      fill: "currentColor"
    })
  });
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(633),
    _v89 = _v0.i(0);
  let _v90 = _v0 => (0, _v1.jsx)(_v64.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("g", {
      fill: "currentColor",
      children: (0, _v1.jsx)("path", {
        d: "M21 7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2h18V7ZM21 11h-8v10h4a4 4 0 0 0 4-4v-6ZM11 21V11H3v6a4 4 0 0 0 4 4h4Z"
      })
    })
  });
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0);
  let _v107 = _v0 => (0, _v1.jsx)(_v64.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.495 6.99v10.012h1.433v-4.29h1.432c.788 0 1.433-.637 1.433-1.432V8.422c0-.787-.638-1.432-1.433-1.432h-2.865Zm1.433 4.297h1.432V8.43h-1.432v2.857ZM11.543 9.855V8.422c0-.787-.638-1.432-1.433-1.432H8.677c-.787 0-1.432.637-1.432 1.432v2.858c0 .787.637 1.432 1.432 1.432h1.433v2.858H8.677v-1.433H7.245v1.433c0 .787.637 1.432 1.432 1.432h1.433c.788 0 1.433-.637 1.433-1.432v-2.858c0-.787-.638-1.432-1.433-1.432H8.677V8.422h1.433v1.433h1.433Z"
      }), (0, _v1.jsx)("path", {
        d: "M3.885 11.19a7.74 7.74 0 0 0-1.035.96 9.076 9.076 0 0 1-.953-1.155c.075-.78.24-1.545.495-2.288.188.48.405.93.66 1.343a8.06 8.06 0 0 1 1.23-.698 8.03 8.03 0 0 0-.397 1.838Z"
      }), (0, _v1.jsx)("path", {
        d: "M4.05 13.815a7.574 7.574 0 0 0-.683 1.237 8.11 8.11 0 0 1-1.267-.795 10.567 10.567 0 0 1-.255-2.325c.337.39.682.75 1.057 1.065a9.12 9.12 0 0 1 .945-1.05c0 .63.068 1.26.203 1.868Z"
      }), (0, _v1.jsx)("path", {
        d: "M5.04 16.245c-.12.442-.203.907-.248 1.387a8.697 8.697 0 0 1-1.455-.345 10.122 10.122 0 0 1-.99-2.122c.443.27.885.487 1.343.667.157-.457.345-.892.562-1.297.195.592.465 1.17.795 1.702l-.007.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M6.75 18.24c.03.457.097.922.202 1.402a8.707 8.707 0 0 1-1.492.128 9.862 9.862 0 0 1-1.605-1.703c.502.113.997.18 1.477.21 0-.487.038-.952.12-1.41.375.503.81.968 1.29 1.373h.008ZM4.56 8.655a8.51 8.51 0 0 0-1.29.577 9.101 9.101 0 0 1-.533-1.395c.323-.712.728-1.387 1.2-2.01.023.51.09 1.005.195 1.485.465-.135.93-.225 1.388-.262a8.358 8.358 0 0 0-.968 1.612l.008-.007Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.265 4.942a9.305 9.305 0 0 0-.66 1.658c.48-.323.99-.578 1.485-.788.232-.495.517-.975.862-1.447a10.02 10.02 0 0 0-1.687.585v-.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M22.102 10.995c-.285.42-.614.81-.952 1.155a8.267 8.267 0 0 0-1.035-.96 8.118 8.118 0 0 0-.397-1.838c.412.188.832.42 1.23.698a8.27 8.27 0 0 0 .66-1.343c.255.743.42 1.508.494 2.288Z"
      }), (0, _v1.jsx)("path", {
        d: "M21.9 14.257a8.71 8.71 0 0 1-1.267.795 7.574 7.574 0 0 0-.683-1.237 7.83 7.83 0 0 0 .203-1.868c.33.315.652.66.945 1.05.375-.315.72-.667 1.057-1.065 0 .78-.082 1.56-.255 2.325Z"
      }), (0, _v1.jsx)("path", {
        d: "M20.663 17.287a8.697 8.697 0 0 1-1.456.345 8.247 8.247 0 0 0-.247-1.387c.33-.533.592-1.11.795-1.703.21.398.405.833.563 1.298.45-.18.892-.405 1.342-.668a10.122 10.122 0 0 1-.99 2.123l-.008-.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M18.532 19.77a9.611 9.611 0 0 1-1.492-.128c.105-.48.172-.945.203-1.402.48-.405.915-.863 1.29-1.373.082.45.12.923.12 1.41.48-.03.982-.097 1.477-.21a9.862 9.862 0 0 1-1.605 1.703h.008ZM21.262 7.837c-.142.495-.322.96-.532 1.395a8.51 8.51 0 0 0-1.29-.577 7.997 7.997 0 0 0-.968-1.613c.458.045.923.135 1.388.263.105-.473.172-.975.195-1.485.473.622.878 1.297 1.2 2.01l.008.007Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.902 5.812c.503.21 1.005.473 1.485.788a9.305 9.305 0 0 0-.66-1.658 10.02 10.02 0 0 0-1.687-.585c.338.473.63.96.863 1.448v.007Z"
      })]
    })
  });
  var _v108 = _v0.i(0);
  let _v109 = _v0 => (0, _v1.jsx)(_v64.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Zm9.08.108c-.475-.3-1.08.06-1.08.643v4.497c0 .583.605.944 1.08.645l3.569-2.243c.468-.294.468-1.006 0-1.3L11.08 7.108Z"
      }), (0, _v1.jsx)("path", {
        d: "M5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
      })]
    })
  });
  var _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = _v75.keyframes`
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--vimeo-colors-fill-brand) 60%, transparent); }
  50% { box-shadow: 0 0 0 5px color-mix(in srgb, var(--vimeo-colors-fill-brand) 0%, transparent); }
`;
  var _v114 = _v0.i(0);
  let _v115 = (0, _v71.rem)(12),
    _v116 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v70.Skeleton, {
      height: (0, _v71.rem)(40),
      margin: `${(0, _v71.rem)(1)} 0`,
      borderRadius: _v115,
      width: _v0
    }),
    _v117 = () => (0, _v1.jsx)(_v70.Skeleton, {
      height: (0, _v71.rem)(40),
      width: (0, _v71.rem)(40),
      borderRadius: _v115
    }),
    _v118 = () => (0, _v1.jsx)(_v69.Box, {
      width: (0, _v71.rem)(40),
      height: "1px",
      bg: "lightBlueAlpha.300",
      marginY: (0, _v71.rem)(4)
    }),
    _v119 = ({
      variant: _v0
    }) => {
      let _v1 = "icons" === _v0,
        {
          appSections: _v2,
          hasStarredItems: _v3,
          isInitialLoading: _v4
        } = (() => {
          let {
              setIsSideNavOpen: _v0
            } = (0, _v5.useContext)(_v17.VideoLibraryLayoutContext),
            _v1 = (0, _v96.useIsMobile)(),
            _v2 = (0, _v4.useRouter)(),
            _v3 = (0, _v105.useViewer)(),
            {
              settings: _v4,
              isLoadingResponse: _v5
            } = (0, _v2.useOrionSettings)(),
            _v6 = _v3?.user?.id ?? 0,
            _v7 = _v3?.teamUser?.ownerId ?? _v6,
            {
              trackNewSidebarNavClicked: _v8
            } = (0, _v103.useWatchTracking)(),
            {
              starredItemsData: _v9,
              isLoading: _v10,
              starredListError: _v11
            } = (0, _v112.useStarredItemDataContext)(),
            _v12 = !_v10 && !_v11 && _v9.length > 0,
            {
              capabilities: _v13,
              loading: _v14
            } = (0, _v11.useCapability)(["canContributorAccessShowcase", "hasSharedWithMe", "hasVideoLibraryShowcases", "hasVideoManagerLiveEventsMenu", "hasWatchButton", "hasUseVimeoStreaming"], _v7),
            {
              capabilities: _v15,
              loading: _v16
            } = (0, _v11.useCapability)(["hasSimplifiedEnterpriseAccount"]),
            _v17 = _v3?.teamUser?.plainTextPermissionLevel === "Viewer",
            {
              contentSpaceEnabled: _v18
            } = (0, _v10.useContentSpaceEnabled)(_v7),
            _v19 = _v18 ? (0, _v13.translate)({
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
            }) : (0, _v13.translate)({
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
              data: _v20,
              isLoading: _v21
            } = (0, _v66.useGetUserFoldersPrivateToMe)(() => _v7 && _v18 ? {
              where: {
                ownerId: _v7
              },
              select: ["uri"]
            } : null),
            {
              data: _v22,
              isLoading: _v23
            } = (0, _v98.useGetUserOttSites)(() => _v7 && _v13.hasUseVimeoStreaming ? {
              where: {
                userId: _v7
              },
              select: ["externalAdminUrl"],
              query: {
                direction: "desc",
                sort: "date"
              }
            } : null),
            _v24 = _v22?.data[0]?.externalAdminUrl,
            {
              data: _v25,
              isLoading: _v26
            } = (0, _v99.useGetUserTeamsSharedItems)(() => _v13.hasSharedWithMe && _v3?.user?.id ? {
              select: ["type"],
              where: {
                userId: _v3.user.id
              },
              query: {
                perPage: 1
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            } : null),
            _v27 = !!_v25?.data?.length,
            {
              data: _v28,
              isLoading: _v29
            } = (0, _v97.useGetMePreferences)({
              select: ["rdtim"]
            }),
            {
              maximizeVideoFileTransferAdoption: _v30,
              maximizeReviewAdoption: _v31
            } = (0, _v100.useAdoptionSettings)(),
            {
              openReviewModal: _v32
            } = (0, _v110.useReviewModal)(),
            {
              openTransferFileModal: _v33
            } = (0, _v111.useTransferFileModal)(),
            {
              trackTransferEntryPointClicked: _v34
            } = (0, _v101.useFileTransferAdoptionTracking)(),
            {
              trackReviewEntryPointClicked: _v35
            } = (0, _v102.useMaximizeReviewAdoptionTracking)();
          return {
            appSections: (0, _v5.useMemo)(() => {
              let _v0,
                _v1,
                _v2,
                _v3,
                _v4,
                _v5,
                _v6,
                _v7,
                _v8,
                _v9,
                _v10,
                _v11,
                _v12,
                _v13,
                _v14,
                _v15 = () => {
                  _v1 && _v0(!1);
                },
                _v16 = _v0 => _v8({
                  sidebarNavDestination: _v0,
                  sidebarNavContext: "homepage"
                }),
                _v17 = _v3?.isSimplifiedSite ?? !1,
                _v18 = _v3?.isFromCopyrightRestrictedRegion ?? !1,
                _v19 = !_v16 && !_v3?.isEnterpriseSite && !_v17 && !_v15?.hasSimplifiedEnterpriseAccount && _v13.hasWatchButton && !_v18,
                _v20 = {
                  key: "home",
                  label: (0, _v13.translate)({
                    singular: "Home",
                    dictionary: {
                      es: {
                        singular: "Inicio"
                      },
                      "de-DE": {
                        singular: "Startseite"
                      },
                      "fr-FR": {
                        singular: "Accueil"
                      },
                      "ja-JP": {
                        singular: "ホーム"
                      },
                      "ko-KR": {
                        singular: "홈"
                      },
                      "pt-BR": {
                        singular: "Página Inicial"
                      },
                      "zh-CN": {
                        singular: "主页"
                      }
                    }
                  }),
                  icon: (_v0 = _v19.Path.Home, _v2.pathname === _v0) ? (0, _v1.jsx)(_v85.HomeFilled, {}) : (0, _v1.jsx)(_v84.Home, {}),
                  href: _v19.Path.Home,
                  active: (_v1 = _v19.Path.Home, _v2.pathname === _v1),
                  onClick: () => {
                    _v16("home"), _v15();
                  }
                },
                _v21 = _v20 ? {
                  key: "my_library",
                  label: (0, _v13.translate)({
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
                  icon: (0, _v1.jsx)(_v86.MyLibrary, {}),
                  href: (0, _v20.getFolderPageUriFromApiUri)(_v20.uri),
                  prefetch: !1,
                  active: _v2.query.folderId === `${(0, _v20.getFolderIdFromFolderUri)(_v20.uri)}`,
                  onClick: () => {
                    _v16("my_library");
                  }
                } : null,
                _v22 = {
                  key: "library",
                  label: _v19,
                  icon: (_v2 = _v19.Path.TeamLibrary, _v2.pathname === _v2) ? _v18 ? (0, _v1.jsx)(_v23.TeamLibraryFilled, {}) : (0, _v1.jsx)(_v95.VideosStackFilled, {}) : _v18 ? (0, _v1.jsx)(_v91.TeamLibrary, {}) : (0, _v1.jsx)(_v22.VideosStack, {}),
                  href: `${_v19.Path.TeamLibrary}?library_referrer=sidebar`,
                  active: (_v3 = _v19.Path.TeamLibrary, _v2.pathname === _v3),
                  dataId: "home_side_nav_libary_menu_item",
                  onClick: () => {
                    _v16(_v18 ? "team_library" : "my_library");
                  }
                },
                _v23 = _v13.hasSharedWithMe && _v27 ? {
                  key: "shared_with_me",
                  label: (0, _v13.translate)({
                    singular: "Shared with me",
                    dictionary: {
                      es: {
                        singular: "Compartidos conmigo"
                      },
                      "de-DE": {
                        singular: "Mit mir geteilt"
                      },
                      "fr-FR": {
                        singular: "Partagée avec moi"
                      },
                      "ja-JP": {
                        singular: "共有作品"
                      },
                      "ko-KR": {
                        singular: "나와 공유된 파일"
                      },
                      "pt-BR": {
                        singular: "Compartilhado comigo"
                      },
                      "zh-CN": {
                        singular: "与我分享"
                      }
                    }
                  }),
                  icon: (_v4 = _v19.Path.SharedWithMe, _v2.pathname === _v4) ? (0, _v1.jsx)(_v9.UsersFilled, {}) : (0, _v1.jsx)(_v94.Users, {}),
                  href: _v19.Path.SharedWithMe,
                  prefetch: !1,
                  active: (_v5 = _v19.Path.SharedWithMe, _v2.pathname === _v5),
                  dataId: "side_nav_shared_with_me",
                  onClick: () => {
                    _v16("shared_with_me"), _v15();
                  }
                } : null,
                _v24 = _v13.hasVideoManagerLiveEventsMenu ? {
                  key: "live_events",
                  label: (0, _v13.translate)({
                    singular: "Live events",
                    dictionary: {
                      es: {
                        singular: "Eventos en vivo"
                      },
                      "de-DE": {
                        singular: "Live-Events"
                      },
                      "fr-FR": {
                        singular: "Évènements en direct"
                      },
                      "ja-JP": {
                        singular: "ライブイベント"
                      },
                      "ko-KR": {
                        singular: "라이브 이벤트"
                      },
                      "pt-BR": {
                        singular: "Eventos ao vivo"
                      },
                      "zh-CN": {
                        singular: "直播活动"
                      }
                    }
                  }),
                  icon: (_v6 = _v19.Path.LiveEvents, _v2.pathname === _v6) ? (0, _v1.jsx)(_v81.CameraOnFilled, {}) : (0, _v1.jsx)(_v80.CameraOn, {}),
                  href: _v19.Path.LiveEvents,
                  prefetch: !1,
                  active: (_v7 = _v19.Path.LiveEvents, _v2.pathname === _v7),
                  dataId: "home_side_nav_live_events_menu_item",
                  onClick: () => {
                    _v16("live_events"), _v15();
                  }
                } : null,
                _v25 = !_v5 && _v4.enable_event_series ? {
                  key: "event_series",
                  label: (0, _v13.translate)({
                    singular: "Event series",
                    dictionary: {
                      es: {
                        singular: "Serie de eventos"
                      },
                      "de-DE": {
                        singular: "Veranstaltungsreihe"
                      },
                      "fr-FR": {
                        singular: "Série d'événements"
                      },
                      "ja-JP": {
                        singular: "イベントシリーズ"
                      },
                      "ko-KR": {
                        singular: "이벤트 시리즈"
                      },
                      "pt-BR": {
                        singular: "Série de eventos"
                      },
                      "zh-CN": {
                        singular: "系列活动"
                      }
                    }
                  }),
                  icon: (_v8 = _v19.Path.EventSeries, _v2.pathname === _v8) ? (0, _v1.jsx)(_v79.BrowserWindowFilled, {}) : (0, _v1.jsx)(_v78.BrowserWindow, {}),
                  href: _v19.Path.EventSeries,
                  prefetch: !1,
                  active: (_v9 = _v19.Path.EventSeries, _v2.pathname === _v9),
                  dataId: "home_side_nav_event_series_menu_item",
                  onClick: () => {
                    _v16("event_series"), _v15();
                  }
                } : null,
                _v26 = _v13.hasVideoLibraryShowcases ? {
                  key: "showcases",
                  label: (0, _v13.translate)({
                    singular: "Showcases",
                    dictionary: {
                      es: {
                        singular: "Presentaciones"
                      },
                      "de-DE": {
                        singular: "Präsentationen"
                      },
                      "fr-FR": {
                        singular: "Présentations"
                      },
                      "ja-JP": {
                        singular: "ショーケース"
                      },
                      "ko-KR": {
                        singular: "쇼케이스"
                      },
                      "pt-BR": {
                        singular: "Vitrines"
                      },
                      "zh-CN": {
                        singular: "橱窗"
                      }
                    }
                  }),
                  icon: (_v10 = _v19.Path.Showcases, _v2.pathname === _v10) ? (0, _v1.jsx)(_v90, {}) : (0, _v1.jsx)(_v89._3GridTopLayout, {}),
                  href: _v19.Path.Showcases,
                  prefetch: !1,
                  active: (_v11 = _v19.Path.Showcases, _v2.pathname === _v11),
                  onClick: () => {
                    _v40.BPAnalyticsV2.sendShowcasesLibraryOpenEvent(_v3?.teamUser), _v16("showcases"), _v15();
                  }
                } : null,
                _v27 = () => {
                  _v15();
                },
                _v28 = [_v24, _v25, _v26, _v24 ? {
                  key: "streaming_site",
                  label: (0, _v13.translate)({
                    singular: "Streaming site",
                    dictionary: {
                      es: {
                        singular: "sitio de transmisión"
                      },
                      "de-DE": {
                        singular: "Streaming-Website"
                      },
                      "fr-FR": {
                        singular: "Site de streaming"
                      },
                      "ja-JP": {
                        singular: "ストリーミングサイト"
                      },
                      "ko-KR": {
                        singular: "스트리밍 사이트"
                      },
                      "pt-BR": {
                        singular: "Site de streaming"
                      },
                      "zh-CN": {
                        singular: "流媒体网站"
                      }
                    }
                  }),
                  icon: (0, _v1.jsx)(_v88.PurchaseVideo, {}),
                  href: _v24,
                  dataId: "home_side_nav_streaming_site_menu_item",
                  showActionOnHover: !0,
                  action: (0, _v1.jsx)(_v74.Link, {
                    href: _v24,
                    onClick: _v0 => {
                      _v27(), _v0.stopPropagation();
                    },
                    variant: "secondary",
                    children: (0, _v1.jsx)(_v87.PopOut, {})
                  }),
                  onClick: _v27
                } : null, _v17 ? null : {
                  key: "analytics",
                  label: (0, _v13.translate)({
                    singular: "Analytics",
                    dictionary: {
                      es: {
                        singular: "Análisis"
                      },
                      "de-DE": {
                        singular: "Analytik"
                      },
                      "fr-FR": {
                        singular: "Analyses"
                      },
                      "ja-JP": {
                        singular: "分析"
                      },
                      "ko-KR": {
                        singular: "애널리틱스"
                      },
                      "pt-BR": {
                        singular: "Análises"
                      },
                      "zh-CN": {
                        singular: "分析"
                      }
                    }
                  }),
                  icon: (_v12 = _v19.Path.Analytics, _v2.pathname === _v12) ? (0, _v1.jsx)(_v77, {}) : (0, _v1.jsx)(_v76.Analytics, {}),
                  href: `${_v19.Path.Analytics}?ref=sidebar`,
                  prefetch: !1,
                  onClick: () => {
                    _v16("analytics"), _v15();
                  }
                }, !_v17 && _v7 && _v30 ? {
                  key: "transfer",
                  label: (0, _v13.translate)({
                    singular: "Transfer file",
                    dictionary: {
                      es: {
                        singular: "Transferir archivo"
                      },
                      "de-DE": {
                        singular: "Datei übertragen"
                      },
                      "fr-FR": {
                        singular: "Transférer un fichier"
                      },
                      "ja-JP": {
                        singular: "Transferでファイルを送信"
                      },
                      "ko-KR": {
                        singular: "파일 전송"
                      },
                      "pt-BR": {
                        singular: "Transferir arquivo"
                      },
                      "zh-CN": {
                        singular: "传输文件"
                      }
                    }
                  }),
                  icon: (0, _v1.jsx)(_v83.FileUpload, {}),
                  action: (0, _v1.jsx)(_v104.NewBadge, {}),
                  onClick: () => {
                    _v34({
                      entryPoint: "side_bar"
                    }), _v33("side_bar"), _v15();
                  }
                } : null, !_v17 && _v7 && _v31 ? {
                  key: "review",
                  label: (0, _v13.translate)({
                    singular: "Review",
                    dictionary: {
                      es: {
                        singular: "Revisar"
                      },
                      "de-DE": {
                        singular: "Überprüfung"
                      },
                      "fr-FR": {
                        singular: "Révision"
                      },
                      "ja-JP": {
                        singular: "レビュー"
                      },
                      "ko-KR": {
                        singular: "리뷰"
                      },
                      "pt-BR": {
                        singular: "Revisar"
                      },
                      "zh-CN": {
                        singular: "审阅"
                      }
                    }
                  }),
                  icon: (0, _v1.jsx)(_v82.Chats, {}),
                  action: (0, _v1.jsx)(_v104.NewBadge, {}),
                  onClick: () => {
                    _v35({
                      entryPoint: "side_bar"
                    }), _v32("side_bar"), _v15();
                  }
                } : null, _v4.has_recently_deleted && (!_v3?.user?.capabilities.hasEnterprise || !_v3?.teamUser || _v3.teamUser.permissionLevel <= 2) ? {
                  key: "recently_deleted",
                  label: (0, _v13.translate)({
                    singular: "Recently deleted",
                    dictionary: {
                      es: {
                        singular: "Eliminados recientemente"
                      },
                      "de-DE": {
                        singular: "Kürzlich gelöscht"
                      },
                      "fr-FR": {
                        singular: "Récemment supprimés"
                      },
                      "ja-JP": {
                        singular: "最近削除された項目"
                      },
                      "ko-KR": {
                        singular: "최근 삭제됨"
                      },
                      "pt-BR": {
                        singular: "Excluído recentemente"
                      },
                      "zh-CN": {
                        singular: "最近删除"
                      }
                    }
                  }),
                  icon: (_v13 = _v19.Path.RecentlyDeleted, _v2.pathname === _v13) ? (0, _v1.jsx)(_v93.TrashBinFilled, {}) : (0, _v1.jsx)(_v92.TrashBin, {}),
                  href: _v19.Path.RecentlyDeleted,
                  prefetch: !1,
                  active: (_v14 = _v19.Path.RecentlyDeleted, _v2.pathname === _v14),
                  action: void 0 === _v28 || _v28.rdtim ? void 0 : (0, _v1.jsx)(_v69.Box, {
                    w: (0, _v71.rem)(8),
                    h: (0, _v71.rem)(8),
                    borderRadius: "full",
                    bg: "fill-brand",
                    flexShrink: 0,
                    animation: `${_v113} 1.5s ease-in-out infinite`
                  }),
                  onClick: () => {
                    _v16("recently_deleted"), _v15();
                  }
                } : null].filter(Boolean),
                _v29 = _v19 ? [{
                  key: "watch",
                  label: (0, _v13.translate)({
                    singular: "Watch",
                    dictionary: {
                      es: {
                        singular: "Ver"
                      },
                      "de-DE": {
                        singular: "Anschauen"
                      },
                      "fr-FR": {
                        singular: "Regarder"
                      },
                      "ja-JP": {
                        singular: "鑑賞"
                      },
                      "ko-KR": {
                        singular: "시청하기"
                      },
                      "pt-BR": {
                        singular: "Assistir"
                      },
                      "zh-CN": {
                        singular: "观看"
                      }
                    }
                  }),
                  href: "/watch",
                  icon: (0, _v1.jsx)(_v108.WatchPlay, {}),
                  iconActive: (0, _v1.jsx)(_v109, {}),
                  destination: "watch",
                  isActive: _v0 => "/watch" === _v0
                }, {
                  key: "staff_picks",
                  label: (0, _v13.translate)({
                    singular: "Staff Picks",
                    dictionary: {
                      es: {
                        singular: "Selecciones del equipo"
                      },
                      "de-DE": {
                        singular: "Empfehlungen des Teams"
                      },
                      "fr-FR": {
                        singular: "Sélections de l'équipe"
                      },
                      "ja-JP": {
                        singular: "スタッフのおすすめ"
                      },
                      "ko-KR": {
                        singular: "스태프 픽"
                      },
                      "pt-BR": {
                        singular: "Escolhas da Equipe"
                      },
                      "zh-CN": {
                        singular: "编辑精选"
                      }
                    }
                  }),
                  href: "/channels/staffpicks",
                  icon: (0, _v1.jsx)(_v106.StaffPicks, {}),
                  iconActive: (0, _v1.jsx)(_v107, {}),
                  destination: "staff_picks",
                  isActive: _v0 => _v0.startsWith("/channels/staffpicks")
                }].map(_v0 => ({
                  key: _v0.key,
                  label: _v0.label,
                  icon: _v0.isActive(_v2.pathname) ? _v0.iconActive : _v0.icon,
                  href: _v0.href,
                  prefetch: !1,
                  active: _v0.isActive(_v2.pathname),
                  onClick: () => {
                    _v16(_v0.destination), _v15();
                  }
                })) : [],
                _v30 = _v18 ? [_v22, ...(_v21 ? [_v21] : []), ...(_v23 ? [_v23] : [])] : [_v22, ...(_v23 ? [_v23] : []), ..._v28];
              return [_v29.length > 0 ? [_v20, ..._v29] : [_v20, ..._v30], ...(_v29.length > 0 ? [_v30] : []), ...(_v18 ? [_v28] : [])].filter(_v0 => _v0.length > 0);
            }, [_v1, _v0, _v2, _v8, _v3, _v17, _v7, _v16, _v15, _v13, _v20, _v18, _v19, _v4, _v5, _v24, _v27, _v30, _v31, _v32, _v33, _v34, _v35, _v28]),
            hasStarredItems: _v12,
            isInitialLoading: _v14 || _v16 || _v21 || _v23 || _v29 || _v26
          };
        })(),
        _v5 = (0, _v5.useCallback)(_v0 => _v1 ? _v0.map(_v0 => (0, _v1.jsx)(_v73.PrimaryNavItem, {
          item: _v0,
          variant: "icons"
        }, _v0.key)) : (0, _v1.jsx)(_v72.ResizableSideNav.MenuItems, {
          customStyles: {
            gap: (0, _v71.rem)(2)
          },
          children: _v0.map(_v0 => (0, _v1.jsx)(_v73.PrimaryNavItem, {
            item: _v0,
            variant: "full"
          }, _v0.key))
        }), [_v1]);
      return (0, _v1.jsx)(_v69.Box, {
        style: {
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        },
        ...(_v1 ? {
          alignItems: "center"
        } : {}),
        children: (0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          gap: _v1 ? (0, _v71.rem)(8) : (0, _v71.rem)(2),
          paddingBottom: (0, _v71.rem)(8),
          alignItems: _v1 ? "center" : void 0,
          children: [_v4 ? Array.from({
            length: 6
          }).map((_v0, _v1) => _v1 ? (0, _v1.jsx)(_v117, {}, _v1) : (0, _v1.jsx)(_v116, {
            width: "75%"
          }, _v1)) : _v2.map((_v0, _v1) => (0, _v1.jsxs)(_v5.Fragment, {
            children: [_v1 > 0 && (_v1 ? (0, _v1.jsx)(_v118, {}) : (0, _v1.jsx)(_v72.ResizableSideNav.Divider, {
              my: (0, _v71.rem)(8)
            })), _v5(_v0)]
          }, _v1)), !_v1 && _v3 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v72.ResizableSideNav.Divider, {
              my: (0, _v71.rem)(8)
            }), (0, _v1.jsx)(_v72.ResizableSideNav.Section, {
              children: (0, _v1.jsx)(_v114.StarredItemListContainer, {
                isNewSidebar: !0
              })
            })]
          })]
        })
      });
    };
  _v0.s(["SideNavContent", 0, ({
    surface: _v0
  }) => {
    let {
      settings: _v1
    } = (0, _v2.useOrionSettings)();
    return "home" === _v0 ? _v1.enable_new_sidebar ? (0, _v1.jsx)(_v119, {
      variant: "full"
    }) : (0, _v1.jsx)(_v3.HomeSideNavContent, {}) : (0, _v1.jsx)(_v68, {});
  }], 0);
}