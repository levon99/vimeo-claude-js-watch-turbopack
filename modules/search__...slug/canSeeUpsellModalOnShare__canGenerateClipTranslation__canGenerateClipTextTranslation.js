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
    action: _v0,
    baseUrl: _v1,
    closeSideNav: _v2,
    dropTarget: _v3,
    folderId: _v4,
    folderOwnerId: _v5,
    hasActiveColor: _v6,
    hasContentSpaceEnabled: _v7,
    hasShareUpsell: _v8 = !1,
    hasSubfolders: _v9,
    icon: _v10,
    isOpen: _v11 = !1,
    isMobile: _v12 = !1,
    label: _v13,
    loadingSideNavFolderURIs: _v14 = new Set(),
    onClick: _v15,
    onClickToggle: _v16,
    onMoveFolderSuccess: _v17,
    onMoveFolderFailure: _v18,
    teamOwnerId: _v19,
    uploadClipProperties: _v20,
    uri: _v21,
    ..._v22
  }) => {
    let _v23 = (0, _v43.useWayfinderPageName)(),
      _v24 = (0, _v3.useContext)(_v23.ViewerContext),
      _v25 = _v24?.teamUser?.ownerId ?? _v24?.user?.id,
      _v26 = (0, _v2.useRouter)(),
      _v27 = (0, _v45.getFolderPageUriFromApiUri)(_v21),
      _v28 = (0, _v45.getUserIdFromFolderUri)(_v21),
      _v29 = (0, _v45.getFolderIdFromFolderUri)(_v21),
      _v30 = (0, _v36.useNotification)(),
      [_v31, _v32] = (0, _v3.useState)(!1),
      [_v33, _v34] = (0, _v3.useState)(_v13),
      {
        settings: _v35
      } = (0, _v11.useOrionSettings)(),
      _v36 = (0, _v44.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolder: _v37,
        revalidateFolderItems: _v38,
        revalidateSetOfFolderItems: _v39,
        revalidateTopLevelFolders: _v40
      } = (0, _v37.useRevalidate)(),
      {
        draggableItemIsHovering: _v41,
        dropRef: _v42
      } = (0, _v49.useDropFolder)({
        dropTargetType: _v47.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: _v3,
        allowedDropEffect: _v47.ALLOWED_DROP_EFFECTS.MOVE,
        dropFileForUploadConfig: null != _v25 && _v3?.metadata?.interactions?.uploadVideo ? {
          targetUserId: _v25,
          folderId: _v29,
          folderName: _v33,
          uploadClipProperties: _v20,
          surface: (0, _v48.getLibraryUploadSurface)({
            contentSpaceEnabled: _v7,
            isPrivateToUser: _v3?.isPrivateToUser
          })
        } : void 0
      }),
      {
        capabilities: _v43
      } = (0, _v8.useCapability)(["canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks"], _v28),
      {
        capabilities: _v44
      } = (0, _v8.useCapability)(["canPerformBulkTranslations"], _v25),
      _v45 = !!_v43.canGenerateClipTextTranslation,
      _v46 = !!_v43.canGenerateClipTranslation,
      _v47 = (_v46 || _v45) && !!_v44.canPerformBulkTranslations,
      _v48 = (0, _v15.useCanUpSell)(),
      {
        openShareFolderModal: _v49
      } = (0, _v40.useShareFolderModal)(),
      _v50 = (0, _v29.useCopyFolderLinkToast)(),
      _v51 = (0, _v34.useManageShareActionBuilder)(),
      _v52 = (0, _v38.useReviewLinkCopiedToast)(),
      _v53 = (0, _v30.useCreateAndCopyFolderReviewLink)((0, _v3.useCallback)((_v0, _v1) => {
        _v52(() => _v49?.(_v0, "sidebar", "CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v52, _v49])),
      [_v54, _v55] = (0, _v3.useState)(""),
      {
        openBulkAiModal: _v56
      } = (0, _v5.useBulkAiModal)(),
      {
        isEnabled: _v57,
        variant: _v58
      } = (0, _v7.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v59
      } = (0, _v6.useBulkPrivacyModal)(),
      [_v60, _v61] = (0, _v3.useState)(_v11),
      {
        openDeleteFolderModal: _v62
      } = (0, _v31.useDeleteFolderModal)(),
      {
        openMoveModal: _v63
      } = (0, _v35.useMoveModal)(),
      {
        openFolderDefaultsModal: _v64
      } = (0, _v32.useFolderDefaultsModal)(),
      {
        openFolderSettingsModal: _v65
      } = (0, _v33.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v66
      } = (0, _v41.useSlackIntegrationModal)(),
      {
        open: _v67,
        close: _v68
      } = (0, _v42.useUpsellModal)(),
      {
        handleStarMenuState: _v69
      } = (0, _v50.useStarMenuItem)(),
      {
        sendEvent: _v70
      } = (0, _v28.useAnalyticsEvents)(),
      {
        trackLibraryFolderOpened: _v71
      } = (0, _v12.useLibraryTracking)();
    (0, _v3.useEffect)(() => {
      _v34(_v13);
    }, [_v13]);
    let {
        mutate: _v72,
        data: _v73,
        size: _v74,
        setSize: _v75,
        error: _v76
      } = (0, _v9.useGetUserProjectItemsInfinite)(() => _v60 || _v11 ? {
        where: {
          userId: _v28,
          projectId: _v29
        },
        select: ["folder.isPinned", "folder.isPrivateToUser", "folder.isSlackNotificationEnabled", "folder.hasSubfolder", "folder.metadata.connections.folders.uri", "folder.metadata.connections.parentFolder.uri", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.moveVideo", "folder.metadata.interactions.uploadVideo", "folder.metadata.interactions.edit", "folder.name", "folder.privacy.view", "folder.uri", "folder.reviewLinks.uri", "folder.settings.color", "folder.settings.embedPresetId", "folder.settings.isEmbedPresetInheritanceEnabled", "folder.slackIncomingWebhooksId", "folder.useParentSlackSettings", "folder.user.uri"],
        query: {
          filter: "folder",
          perPage: 100,
          sort: "alphabetical"
        }
      } : null),
      {
        isDone: _v77,
        isLoadingMore: _v78
      } = (0, _v17.getInfiniteRequestLoadingState)({
        data: _v73,
        error: _v76,
        size: _v74,
        itemsPerPage: 100
      });
    (0, _v3.useEffect)(() => {
      (_v60 || _v11) && _v73 && !_v77 && !_v78 && _v75(_v74 + 1);
    }, [_v60, _v11, _v73, _v77, _v78, _v74, _v75]);
    let _v79 = (0, _v3.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v72(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.folder?.uri === _v2 ? {
            ..._v0,
            folder: {
              ..._v0.folder,
              name: _v0,
              settings: {
                ..._v0.folder.settings,
                color: _v1
              }
            }
          } : _v0)
        })), !1);
      }, [_v72]),
      _v80 = _v0 ? _v3.default.cloneElement(_v0, {
        onRename: () => {
          _v32(!0);
        }
      }) : null;
    if (_v73 && 0 === _v73[0].total) return (0, _v1.jsx)(_v24.ExpandableMenuItem, {
      action: _v80,
      active: _v26.query.folderId === `${_v29}`,
      hasActiveColor: _v6,
      hoverColor: "text-primary",
      href: _v27,
      icon: _v10,
      isEditing: _v31,
      label: _v35.enable_rename_folder && _v31 ? (0, _v1.jsx)(_v27.FolderEditableTitle, {
        folderId: _v4 ?? 0,
        folderOwnerId: _v5 ?? 0,
        isEditing: _v31,
        setCurrentTitle: _v34,
        setIsEditingContentTitle: _v32,
        value: _v33,
        fontSize: "header-xs",
        fontWeight: "bold"
      }) : _v33,
      onClick: _v15,
      id: `folder-menu-item-button-${_v21}`,
      isLoading: !!_v14 && _v14.has(_v21),
      toggleId: `expandable-menu-item-toggle-${_v21}`,
      draggableItemIsHovering: _v41,
      dropRef: _v42,
      showActionOnHover: !0,
      ..._v22
    });
    let _v81 = _v73?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data)?.filter(_v0 => _v0.folder),
      _v82 = _v0 => {
        _v38(_v0?.parentFolder?.uri ?? ""), _v79(_v0);
      },
      _v83 = (_v0, _v1, _v2) => {
        _v26.BPAnalyticsV2.openFolderShare({
          location: "sidebar",
          element: "ellipses",
          teamUser: _v24?.teamUser,
          folder: _v0,
          webCtx: {
            path: window.location.pathname,
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        }), _v49?.(_v0.uri, "sidebar", _v1, _v2);
      };
    return (0, _v1.jsx)(_v24.ExpandableMenuItem, {
      action: _v80,
      active: _v26.query.folderId === `${_v29}`,
      hasActiveColor: _v6,
      hasToggle: _v9,
      icon: _v10,
      hoverColor: "text-primary",
      href: _v27,
      onClick: _v15,
      id: `folder-menu-item-button-${_v21}`,
      isEditing: _v31,
      isLoading: !!_v14 && _v14.has(_v21) || (_v60 || _v11) && !_v73,
      isFetching: (_v60 || _v11) && !_v73,
      label: _v35.enable_rename_folder && _v31 ? (0, _v1.jsx)(_v27.FolderEditableTitle, {
        folderId: _v4 ?? 0,
        folderOwnerId: _v5 ?? 0,
        isEditing: _v31,
        setCurrentTitle: _v34,
        setIsEditingContentTitle: _v32,
        value: _v33,
        fontSize: "header-xs",
        fontWeight: "bold"
      }) : _v33,
      toggleId: `expandable-menu-item-toggle-${_v21}`,
      draggableItemIsHovering: _v41,
      dropRef: _v42,
      showActionOnHover: !0,
      onClickToggle: () => _v16 ? _v16() : _v61(!_v60),
      isOpen: _v16 ? _v11 : _v60,
      ..._v22,
      children: _v81?.map(({
        folder: _v0
      }) => {
        let _v1 = parseInt(_v0?.uri.split("/").pop()),
          _v2 = parseInt(_v0?.uri.split("/")?.[2] ?? ""),
          _v3 = _v0?.metadata?.connections?.parentFolder,
          _v4 = _v0?.uri && (_v1 ?? _v24?.vimeoHttpsUrl) + (0, _v45.getFolderPageUriFromApiUri)(_v0?.uri),
          _v5 = _v0?.uri && _v1 + (0, _v45.getFolderAnalyticsPageUriFromApiUri)(_v0.uri),
          {
            canDelete: _v6,
            canEdit: _v7,
            canEditSettings: _v8,
            canInvite: _v9
          } = (0, _v46.getFolderPermissions)(_v0),
          _v10 = _v43.hasExtraEmbedOptions && _v8,
          _v11 = !_v43.hasProhibitMultipleReviewLinks && !!_v43.hasMultipleReviewLinks,
          {
            canCreateReviewLink: _v12,
            canCopyReviewPageLink: _v13,
            canManageReviewLinks: _v14,
            reviewPageLink: _v15
          } = (0, _v39.getReviewLinkMenuState)({
            hasReviewLinkCapabilities: _v11,
            hasMultipleReviewLinks: !!_v43.hasMultipleReviewLinks,
            reviewLinks: _v0?.reviewLinks,
            canUpsell: _v48,
            getReviewPageUrl: _v0 => (0, _v14.getFolderReviewPageUrl)(_v0, _v1, _v2)
          }),
          _v16 = _v0 ? _v69("folder", _v0) : {
            isItemStarred: !1,
            onStarClick: void 0
          },
          {
            isItemStarred: _v17,
            onStarClick: _v18
          } = _v16,
          _v19 = () => {
            _v17 && _v18?.();
          };
        return (0, _v1.jsx)(_v51, {
          folderId: _v1,
          folderOwnerId: _v2,
          action: _v0 && (0, _v1.jsx)(_v13.FolderMenu, {
            canTranslateVideos: _v47,
            handleTranslateVideo: () => {
              (0, _v20.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
                ...(0, _v22.buildActionBpContext)({
                  action_type: "click",
                  feature: null
                }),
                ...(0, _v18.buildProductAnalyticsBpContext)({
                  product: "ai",
                  feature: "ai_bulk_translate",
                  location: "sidebar",
                  copy: "translate"
                }),
                ...(0, _v19.buildWebBpContext)({
                  page_name: "video_library"
                }),
                ...(0, _v21.buildTeamBpContextFromTeamUser)(_v24?.teamUser)
              }, 1, {
                value: String(1),
                device_type: (0, _v16.default)()
              }), _v56({
                folderId: _v1,
                isFolder: !0,
                folderName: _v54,
                canTranslateText: _v45,
                canTranslateDubbing: _v46,
                onComplete: () => {
                  let _v0 = _v24?.teamUser?.ownerId ?? _v24?.user?.id;
                  _v0 && _v36(_v0);
                }
              });
            },
            placement: "right-start",
            usePortal: !1,
            onClick: () => {
              _v55(_v0.name), _v4.BigPictureClient.sendEvent(new _v4.Event("open_folder_overflow", 8, {
                product: "video_library",
                path: window.location.pathname,
                location: "sidebar",
                folder_id: _v1,
                is_subfolder: !!_v3,
                feature: _v25.AnalyticsFeatures.VIDEO_LIBRARY,
                page: _v23,
                target_object_location_type: _v0.isPrivateToUser ? "private_folder" : "team_folder",
                actor_team_role: _v24?.teamUser?.plainTextPermissionLevel ?? null,
                is_my_videos: _v0.isPrivateToUser && !!_v7,
                entry_page: "video_library"
              }));
            },
            size: "sm",
            canShare: _v9 || _v43.canSeeUpsellModalOnShare,
            onShare: () => {
              _v43.canSeeUpsellModalOnShare ? _v67({
                tracking: {
                  params: {
                    feature: _v25.AnalyticsFeatures.VIDEO_LIBRARY,
                    location: "sidebar",
                    page: _v23,
                    upsell_name: "folder_share"
                  },
                  paywallTracking: {
                    paywallTrigger: "folder_sidenav_menu_share_button",
                    paywallLocation: "folder_library_sidebar",
                    paywallType: "popup",
                    paywallFeature: "collaboration"
                  }
                },
                onClose: _v68
              }) : _v83(_v0);
            },
            canDelete: _v6,
            onDelete: () => {
              _v62?.(_v0?.name, parseInt(_v0?.uri?.split("/")?.pop() || ""), "sidebar", _v0?.metadata?.connections?.parentFolder.uri, parseInt(_v0?.uri.split("/")?.[2]), _v0.isPrivateToUser, !!_v7, _v19), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 148, {
                copy: "delete",
                feature: "video_library",
                location: "sidebar",
                name: "select_folder_menu_item",
                page: _v23,
                target: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              }));
            },
            canEdit: _v7,
            canEditFolderSettings: _v8,
            onFolderDefaults: () => {
              _v64({
                folderId: _v1,
                ownerId: _v2,
                isFolderOwner: _v24?.user?.uri === _v0?.user?.uri,
                presetId: _v0?.settings?.embedPresetId ?? null,
                isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
                displayUpsell: !_v10,
                location: "sidebar",
                feature: "video_library",
                page: _v23,
                onSave: () => {
                  _v30({
                    content: (0, _v10.translate)({
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
            onFolderSettings: () => {
              _v65({
                userId: parseInt(_v0?.uri.split("/")?.[2]),
                parentFolderUri: _v0?.metadata?.connections?.parentFolder.uri,
                currentFolderUri: _v0.uri,
                location: "sidebar",
                onSettingsChange: _v82,
                isEditingFolder: !0,
                initialColor: _v0?.settings?.color
              }), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 148, {
                copy: "folder_settings",
                feature: "video_library",
                location: "sidebar",
                name: "select_folder_menu_item",
                page: _v23,
                target: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              }));
            },
            canMove: _v6,
            onMove: () => {
              _v63({
                activeFolderURI: _v0.uri,
                feature: _v25.AnalyticsFeatures.VIDEO_LIBRARY,
                location: "sidebar",
                items: [{
                  name: _v0.name,
                  type: "folder",
                  parentFolder: _v3?.uri ? {
                    uri: _v3.uri ?? "",
                    isPrivateToUser: _v0.isPrivateToUser
                  } : void 0,
                  uri: _v0.uri
                }],
                onMoveSuccess: ({
                  selectedDestination: _v0,
                  items: _v1,
                  destinationWorkspaceId: _v2,
                  destinationWorkspaceName: _v3
                }) => {
                  _v17?.(_v0, _v1, _v2, _v3);
                },
                onMoveFailure: ({
                  selectedDestination: _v0,
                  items: _v1
                }) => {
                  _v18?.(_v0, _v1);
                },
                teamOwnerId: parseInt(_v0?.uri.split("/")?.[2])
              }), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 148, {
                copy: "move",
                feature: "video_library",
                location: "sidebar",
                name: "select_folder_menu_item",
                page: _v23,
                target: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              }));
            },
            canBulkPrivacyChange: _v7 && _v57,
            onBulkPrivacyChange: () => {
              _v59({
                userId: _v2,
                folderUris: [_v0.uri],
                folderName: _v0.name,
                location: "side_nav_folder_menu",
                variant: _v58
              });
            },
            analyticsPageLink: _v5,
            folderLink: _v4,
            onCopyLink: () => {
              _v50({
                onManage: _v51({
                  canEdit: _v8,
                  entityUri: _v0.uri,
                  location: "sidebar",
                  panel: "INVITE_PANEL"
                })
              }), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 148, {
                copy: "copy_link",
                feature: "video_library",
                location: "sidebar",
                name: "copy_folder_link",
                page: _v23,
                target: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              }));
            },
            onClickAnalyticsLink: () => {
              _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 148, {
                copy: "analytics",
                feature: "video_library",
                location: "sidebar",
                name: "click_folder_analytics",
                page: _v23,
                target: _v5 ?? "",
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              }));
            },
            hasShareUpsell: _v43.canSeeUpsellModalOnShare,
            hasSlackIntegration: !_v0?.useParentSlackSettings,
            isConnectedToSlack: !!_v0?.slackIncomingWebhooksId,
            onSlackIntegration: () => {
              _v66({
                userId: parseInt(_v0?.uri.split("/")?.[2]),
                hasSlackIntegration: !!_v0?.slackIncomingWebhooksId,
                isSlackNotificationEnabled: !!_v0?.isSlackNotificationEnabled,
                folderId: _v1,
                folderName: _v0?.name || "",
                currentFolderUri: _v0?.uri || "",
                async updateSubFolderData(_v0) {
                  _v37(_v21), _v39(_v0), _v3?.uri ? _v38(_v3.uri) : _v40();
                }
              }), _v0?.slackIncomingWebhooksId ? _v70("vimeo.open_connection_settings", -1, {
                includeActionContext: !0,
                element: "dropdown",
                feature: "integrations_settings",
                location: "sidebar",
                folderId: _v1,
                integrationType: "folder_base_connect",
                parentFolderId: null,
                isPrivateToMe: _v0.isPrivateToUser,
                isPinned: _v0.isPinned
              }) : _v70("vimeo.connect_folder", -1, {
                includeActionContext: !0,
                element: "dropdown",
                feature: "integrations_connections",
                location: "sidebar",
                folderId: _v1,
                integrationType: "folder_base_connect",
                parentFolderId: null,
                isPrivateToMe: _v0?.isPrivateToUser,
                isPinned: _v0?.isPinned
              });
            },
            canCreateReviewLink: _v12,
            onCreateReviewLink: () => {
              _v83(_v0, "CREATE_REVIEW_LINK_MODAL");
            },
            canCopyReviewPageLink: _v13,
            reviewPageLink: _v15,
            onCopyReviewPageLink: () => {
              if (_v15) {
                let _v0 = _v0?.reviewLinks?.[0]?.uri;
                _v52(_v0 ? () => _v83(_v0, "CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
              } else _v53(_v1, _v2, _v0?.uri);
            },
            canManageReviewLinks: _v14,
            onManageReviewLinks: () => {
              _v43.canSeeUpsellModalOnShare ? _v67({
                tracking: {
                  params: {
                    feature: _v25.AnalyticsFeatures.VIDEO_LIBRARY,
                    location: "sidebar",
                    page: _v23,
                    upsell_name: "folder_share"
                  },
                  paywallTracking: {
                    paywallTrigger: "folder_sidenav_menu_review_links_button",
                    paywallLocation: "folder_library_sidebar",
                    paywallType: "popup",
                    paywallFeature: "collaboration"
                  }
                },
                onClose: _v68
              }) : _v83(_v0, "REVIEW_LINKS_PANEL");
            },
            hasProhibitMultipleReviewLinks: _v43.hasProhibitMultipleReviewLinks,
            onStarClick: _v18,
            ..._v16
          }),
          hasSubfolders: _v0?.hasSubfolder || !1,
          label: _v0?.name ?? "",
          uri: _v0?.uri || "",
          hasContentSpaceEnabled: _v7,
          hasShareUpsell: _v8,
          dropTarget: _v0,
          loadingSideNavFolderURIs: _v14,
          onClick: () => {
            _v12 && _v2?.(), _v71({
              folderUri: _v0?.uri,
              isPrivateToUser: _v0?.isPrivateToUser
            }), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click_folder_title", 2, {
              path: window.location.pathname,
              entry_page: "video_library",
              page: _v23,
              location: "sidebar",
              team_owner_id: _v19?.toString() ?? null,
              team_size: _v24?.teamUser?.currentTeamSize ?? null,
              team_subscription_type: _v24?.teamUser?.accountType ?? null,
              actor_team_role: _v24?.teamUser?.plainTextPermissionLevel ?? null,
              product: "video_library",
              actor_resource_role: null,
              folder_id: _v0?.uri.split("/").pop() ?? null,
              is_subfolder: !!_v3,
              folder_share_status: _v0?.privacy?.view === "nobody" ? "not_shared" : "shared",
              is_private_to_me: _v0?.isPrivateToUser ?? null,
              parent_folder_id: _v3?.uri.split("/").pop() ?? null,
              position_row: null,
              is_pinned: _v0?.isPinned ?? null
            }));
          },
          baseUrl: _v1,
          onMoveFolderSuccess: _v17,
          onMoveFolderFailure: _v18,
          uploadClipProperties: _v20
        }, _v0?.uri);
      })
    });
  };
  _v0.s(["FolderMenuItem", 0, _v51], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  _v0.s(["LoadingFolders", 0, () => (0, _v1.jsx)(_v52.Box, {
    padding: `${(0, _v54.rem)(10)} ${(0, _v54.rem)(0)}`,
    children: Array(6).fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v52.Box, {
      display: "grid",
      gridTemplateColumns: `${(0, _v54.rem)(32)} ${_v1 % 2 == 0 ? "50%" : "80%"}`,
      gridGap: (0, _v54.rem)(10),
      padding: `${(0, _v54.rem)(8)} ${(0, _v54.rem)(0)}`,
      children: [(0, _v1.jsx)(_v53.Skeleton, {
        borderRadius: "40%",
        height: (0, _v54.rem)(28),
        width: (0, _v54.rem)(28)
      }), (0, _v1.jsx)(_v53.Skeleton, {
        borderRadius: (0, _v54.rem)(20),
        height: (0, _v54.rem)(28)
      })]
    }, `side-nav-loading-folders-block-${_v1}`))
  })], 0);
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  _v0.s(["NewFolderButton", 0, ({
    onClick: _v0,
    isPrivateToMe: _v1 = !1
  }) => (0, _v1.jsx)(_v55.Tooltip, {
    label: (0, _v10.translate)({
      singular: "New folder",
      dictionary: {
        es: {
          singular: "Carpeta nueva"
        },
        "de-DE": {
          singular: "Neuer Ordner"
        },
        "fr-FR": {
          singular: "Nouveau dossier"
        },
        "ja-JP": {
          singular: "新しいフォルダー"
        },
        "ko-KR": {
          singular: "새 폴더"
        },
        "pt-BR": {
          singular: "Nova pasta"
        },
        "zh-CN": {
          singular: "新文件夹"
        }
      }
    }),
    placement: "top",
    children: (0, _v1.jsx)(_v57.Button, {
      variant: "minimalTransparent",
      format: "basic",
      icon: (0, _v1.jsx)(_v56.Plus, {}),
      onClick: _v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v0();
      },
      size: "sm",
      "aria-label": (0, _v10.translate)({
        singular: "New folder",
        dictionary: {
          es: {
            singular: "Carpeta nueva"
          },
          "de-DE": {
            singular: "Neuer Ordner"
          },
          "fr-FR": {
            singular: "Nouveau dossier"
          },
          "ja-JP": {
            singular: "新しいフォルダー"
          },
          "ko-KR": {
            singular: "새 폴더"
          },
          "pt-BR": {
            singular: "Nova pasta"
          },
          "zh-CN": {
            singular: "新文件夹"
          }
        }
      }),
      id: `${_v1 ? "private-to-me" : "library"}-new-folder-button`
    })
  })], 0);
}