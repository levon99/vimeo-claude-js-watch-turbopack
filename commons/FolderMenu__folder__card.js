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
    _v41 = _v0.i(0);
  _v0.s(["FolderMenu", 0, function ({
    folder: _v0,
    onMoveSuccess: _v1,
    onMoveFailure: _v2,
    onSettingsChange: _v3,
    onDelete: _v4,
    onRename: _v5,
    onSlackIntegrationComplete: _v6,
    analytics: _v7,
    libraryType: _v8,
    ..._v9
  }) {
    let _v10 = (0, _v12.useAnalyticsEvent)(),
      {
        trackLibraryFolderContextMenuActionClicked: _v11
      } = (0, _v8.useLibraryTracking)(),
      {
        sendEvent: _v12
      } = (0, _v22.useAnalyticsEvents)(),
      _v13 = (0, _v27.useNotification)(),
      {
        openDeleteFolderModal: _v14
      } = (0, _v23.useDeleteFolderModal)(),
      {
        openMoveModal: _v15
      } = (0, _v26.useMoveModal)(),
      {
        openFolderDefaultsModal: _v16
      } = (0, _v24.useFolderDefaultsModal)(),
      {
        openFolderSettingsModal: _v17
      } = (0, _v25.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v18
      } = (0, _v29.useSlackIntegrationModal)(),
      {
        openBulkAiModal: _v19
      } = (0, _v4.useBulkAiModal)(),
      {
        openAddFolderToShowcaseModal: _v20,
        closeAddFolderToShowcaseModal: _v21
      } = (0, _v31.useAddFolderToShowcaseModal)(),
      _v22 = (0, _v6.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v23
      } = (0, _v5.useBulkPrivacyModal)(),
      _v24 = (0, _v2.useContext)(_v18.ViewerContext),
      _v25 = (0, _v28.usePageName)(),
      {
        getFolderShareLoopTrackingParams: _v26
      } = (0, _v30.useShareLoopTrackingParams)(),
      {
        handleStarMenuState: _v27
      } = (0, _v41.useStarMenuItem)(),
      {
        isItemStarred: _v28,
        onStarClick: _v29,
        ..._v30
      } = _v27("folder", _v0, !0),
      _v31 = (0, _v35.useFolderShareClick)({
        folder: _v0,
        analytics: {
          ..._v7,
          shareModalEntryPoint: _v19.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT
        },
        analyticsV2: {
          location: "card",
          element: "ellipses"
        }
      }),
      _v32 = (0, _v33.useReviewLinkCopiedToast)(),
      _v33 = (0, _v32.useCreateAndCopyFolderReviewLink)((0, _v2.useCallback)((_v0, _v1) => {
        _v32(() => _v31?.("CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v32, _v31])),
      _v34 = (0, _v38.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        uri: _v35,
        name: _v36,
        isPrivateToUser: _v37,
        isPinned: _v38,
        useParentSlackSettings: _v39,
        isSlackNotificationEnabled: _v40,
        slackIncomingWebhooksId: _v41,
        metadata: _v42
      } = _v0,
      {
        capabilities: _v43
      } = (0, _v7.useCapability)(["hasContentSpaceEnabled", "canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canManageTeamCollections"], _v35),
      _v44 = _v24?.teamUser?.ownerId ?? _v24?.user?.id,
      {
        capabilities: _v45
      } = (0, _v7.useCapability)(["canPerformBulkTranslations"], _v44),
      _v46 = !!_v43.canGenerateClipTextTranslation,
      _v47 = !!_v43.canGenerateClipTranslation,
      _v48 = parseInt(_v35.split("/").pop() || ""),
      _v49 = parseInt(_v35.split("/")[2]),
      _v50 = parseInt(_v24?.user?.uri.split("/").pop() || "") === _v49,
      {
        canDelete: _v51,
        canEdit: _v52,
        canEditSettings: _v53,
        canInvite: _v54
      } = (0, _v40.getFolderPermissions)(_v0),
      _v55 = _v0 => {
        _v11({
          isPrivateToUser: _v37,
          libraryFolderId: String(_v48),
          libraryFolderContextMenuAction: _v0
        });
      },
      _v56 = _v52 && (_v47 || _v46) && !!_v45.canPerformBulkTranslations,
      _v57 = _v43.hasExtraEmbedOptions && _v53,
      _v58 = !_v43.hasProhibitMultipleReviewLinks && !!_v43.hasMultipleReviewLinks,
      {
        canCreateReviewLink: _v59,
        canCopyReviewPageLink: _v60,
        canManageReviewLinks: _v61,
        reviewPageLink: _v62
      } = (0, _v34.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v58,
        hasMultipleReviewLinks: !!_v43.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v10.getFolderReviewPageUrl)(_v0, _v48, _v49), [_v48, _v49])
      }),
      _v63 = (0, _v2.useCallback)(() => {
        _v13({
          content: _v37.linkCopySuccess
        }), _v21.BPAnalyticsV2.copyFolderLink({
          location: "card",
          element: "ellipses",
          teamUser: _v24?.teamUser,
          folder: _v0,
          webCtx: {
            path: window.location.pathname,
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v13, _v0, _v24?.teamUser]);
    if (isNaN(_v48) || isNaN(_v49)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v64 = _v42.connections.parentFolder?.uri,
      _v65 = _v24?.vimeoHttpsUrl || "",
      _v66 = `${_v65}${(0, _v39.getFolderPageUriFromApiUri)(_v35)}${_v26(_v25, !!_v0.isPrivateToUser)}`,
      _v67 = _v65 + (0, _v39.getFolderAnalyticsPageUriFromApiUri)(_v35),
      _v68 = () => {
        _v4?.(), _v28 && _v29?.();
      },
      _v69 = Math.max(0, (_v42.connections.items?.total ?? 0) - (_v42.connections.folders?.total ?? 0)),
      _v70 = _v52 && _v43.canManageTeamCollections,
      _v71 = _v69 > 0 && _v70 && _v69 <= 100;
    return (0, _v1.jsx)(_v9.FolderMenu, {
      ..._v9,
      canTranslateVideos: _v56,
      handleTranslateVideo: () => {
        _v55("translate_videos"), (0, _v15.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
          ...(0, _v17.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v13.buildProductAnalyticsBpContext)({
            product: "ai",
            feature: "ai_bulk_translate",
            location: "card",
            copy: "translate"
          }),
          ...(0, _v14.buildWebBpContext)({
            page_name: "video_library"
          }),
          ...(0, _v16.buildTeamBpContextFromTeamUser)(_v24?.teamUser)
        }, 1, {
          value: String(1),
          device_type: (0, _v11.default)()
        }), _v19({
          folderId: _v48,
          isFolder: !0,
          folderName: _v36,
          canTranslateText: _v46,
          canTranslateDubbing: _v47,
          onComplete: () => {
            _v44 && _v34(_v44);
          }
        });
      },
      onClick: () => {
        _v3.BigPictureClient.sendEvent(new _v3.Event("open_folder_overflow", 8, {
          product: _v7.product,
          feature: _v7.feature,
          location: _v7.location,
          page: _v25.toUpperCase(),
          path: window.location.pathname,
          folder_id: _v48,
          is_subfolder: !!_v42.connections.parentFolder,
          target_object_location_type: _v37 ? "private folder" : "team folder",
          actor_team_role: null,
          is_my_videos: _v37 && !!_v43.hasContentSpaceEnabled,
          entry_page: (0, _v12.getEntryPage)(document.referrer || "")
        }));
      },
      canShare: _v54 || _v43.canSeeUpsellModalOnShare,
      onShare: _v31,
      canDelete: _v51,
      onDelete: () => {
        _v55("delete"), _v14?.(_v36, _v48, _v7.location, _v64, _v49, _v37, !!_v43.hasContentSpaceEnabled, _v68), _v10((0, _v20.genericClick)({
          copy: "Delete",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v25.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canEditFolderSettings: _v53,
      onFolderDefaults: () => {
        _v55("folder_setting"), _v16({
          folderId: _v48,
          ownerId: _v49,
          isFolderOwner: _v50,
          presetId: _v0?.settings?.embedPresetId,
          isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
          displayUpsell: !_v57,
          location: _v7.location,
          feature: _v7.feature,
          page: _v25.toUpperCase(),
          onSave: () => {
            _v13({
              content: _v37.folderDefaultsSaved,
              status: ""
            });
          }
        });
      },
      onFolderSettings: () => {
        _v55("folder_setting"), _v17({
          userId: _v49,
          parentFolderUri: _v64 ?? null,
          currentFolderUri: _v35,
          location: location.toString(),
          onSettingsChange: _v3,
          isEditingFolder: !0,
          initialColor: _v0.settings?.color
        }), _v10((0, _v20.genericClick)({
          copy: "Folder settings",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v25.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canMove: _v51,
      onMove: () => {
        _v55("move"), _v15({
          activeFolderURI: _v35,
          feature: _v7.feature,
          location: _v7.location,
          items: [{
            name: _v36,
            type: "folder",
            parentFolder: _v64 ? {
              uri: _v64,
              isPrivateToUser: _v37
            } : void 0,
            uri: _v35
          }],
          onMoveSuccess: ({
            selectedDestination: _v0,
            items: _v1,
            destinationWorkspaceId: _v2,
            destinationWorkspaceName: _v3
          }) => {
            _v1?.(_v0, _v1, _v2, _v3);
          },
          onMoveFailure: ({
            selectedDestination: _v0,
            items: _v1
          }) => {
            _v2?.(_v0, _v1);
          },
          teamOwnerId: _v49
        }), _v10((0, _v20.genericClick)({
          copy: "move",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v25.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canBulkPrivacyChange: _v52 && _v22,
      onBulkPrivacyChange: () => {
        _v23({
          folderUris: [_v35],
          folderName: _v36,
          onSuccess: () => {}
        });
      },
      canEdit: _v52,
      analyticsPageLink: _v67,
      folderLink: _v66,
      onCopyLink: () => {
        _v55("copy_link"), _v63();
      },
      onClickAnalyticsLink: () => {
        _v55("analytics"), _v10((0, _v20.genericClick)({
          copy: "Analytics",
          feature: "analytics",
          location: _v7.location,
          name: "click_folder_analytics",
          page: _v25.toUpperCase(),
          target: _v67 ?? "",
          type: "general",
          target_path: null
        }));
      },
      hasFolderDefaultsUpsell: !_v57,
      hasShareUpsell: _v43.canSeeUpsellModalOnShare,
      hasSlackIntegration: !_v39,
      isConnectedToSlack: !!_v41,
      onSlackIntegration: () => {
        _v55("connect_to_slack"), _v18({
          userId: _v49,
          hasSlackIntegration: !!_v41,
          isSlackNotificationEnabled: !!_v40,
          folderId: _v48,
          folderName: _v36,
          currentFolderUri: _v35,
          updateSubFolderData: _v6
        }), _v41 ? _v12("vimeo.open_connection_settings", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_settings",
          location: "card",
          folderId: _v48,
          integrationType: "folder_base_connect",
          parentFolderId: _v64 ? Number(_v64.split("/").pop()) : null,
          isPrivateToMe: _v37,
          isPinned: _v38
        }) : _v12("vimeo.connect_folder", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_connections",
          location: "card",
          folderId: _v48,
          integrationType: "folder_base_connect",
          parentFolderId: _v64 ? Number(_v64.split("/").pop()) : null,
          isPrivateToMe: _v37,
          isPinned: _v38
        });
      },
      onStarClick: _v29 ? () => {
        _v28 || _v55("add_to_starred"), _v29();
      } : void 0,
      canCreateReviewLink: _v59,
      onCreateReviewLink: () => {
        _v55("create_review_link"), _v31?.("CREATE_REVIEW_LINK_MODAL");
      },
      canCopyReviewPageLink: _v60,
      reviewPageLink: _v62,
      onCopyReviewPageLink: () => {
        if (_v55("copy_review_link"), _v62) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v32(_v0 ? () => _v31?.("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v33(_v48, _v49, _v35);
      },
      canManageReviewLinks: _v61,
      hasProhibitMultipleReviewLinks: _v43.hasProhibitMultipleReviewLinks,
      onManageReviewLinks: () => {
        _v55("manage_review_links"), _v31?.("REVIEW_LINKS_PANEL");
      },
      ..._v30,
      onRename: () => {
        _v55("rename"), _v5?.();
      },
      showAddToShowcase: _v70,
      canAddToShowcase: _v71,
      onAddToShowcase: () => {
        _v55("add_to_showcase"), _v20({
          ownerId: _v49,
          onClose: _v21,
          folderId: _v48,
          pageName: _v25,
          pageUrl: window.location.pathname,
          itemCount: _v69
        });
      },
      zIndex: _v36.ACTIONS_MENU_Z_INDEX
    });
  }]);
}