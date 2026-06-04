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
    _v43 = _v0.i(0);
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
      _v13 = (0, _v29.useNotification)(),
      _v14 = (0, _v23.useCopyFolderLinkToast)(),
      {
        openDeleteFolderModal: _v15
      } = (0, _v24.useDeleteFolderModal)(),
      {
        openMoveModal: _v16
      } = (0, _v28.useMoveModal)(),
      {
        openFolderDefaultsModal: _v17
      } = (0, _v25.useFolderDefaultsModal)(),
      {
        openFolderSettingsModal: _v18
      } = (0, _v26.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v19
      } = (0, _v31.useSlackIntegrationModal)(),
      {
        openBulkAiModal: _v20
      } = (0, _v4.useBulkAiModal)(),
      {
        openAddFolderToShowcaseModal: _v21,
        closeAddFolderToShowcaseModal: _v22
      } = (0, _v33.useAddFolderToShowcaseModal)(),
      {
        isEnabled: _v23,
        variant: _v24
      } = (0, _v6.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v25
      } = (0, _v5.useBulkPrivacyModal)(),
      _v26 = (0, _v2.useContext)(_v18.ViewerContext),
      _v27 = (0, _v30.usePageName)(),
      {
        getFolderShareLoopTrackingParams: _v28
      } = (0, _v32.useShareLoopTrackingParams)(),
      {
        handleStarMenuState: _v29
      } = (0, _v43.useStarMenuItem)(),
      {
        isItemStarred: _v30,
        onStarClick: _v31,
        ..._v32
      } = _v29("folder", _v0, !0),
      _v33 = (0, _v37.useFolderShareClick)({
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
      _v34 = (0, _v35.useReviewLinkCopiedToast)(),
      _v35 = (0, _v34.useCreateAndCopyFolderReviewLink)((0, _v2.useCallback)((_v0, _v1) => {
        _v34(() => _v33?.("CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v34, _v33])),
      _v36 = (0, _v40.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        uri: _v37,
        name: _v38,
        isPrivateToUser: _v39,
        isPinned: _v40,
        useParentSlackSettings: _v41,
        isSlackNotificationEnabled: _v42,
        slackIncomingWebhooksId: _v43,
        metadata: _v44
      } = _v0,
      {
        capabilities: _v45
      } = (0, _v7.useCapability)(["hasContentSpaceEnabled", "canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canManageTeamCollections"], _v37),
      _v46 = _v26?.teamUser?.ownerId ?? _v26?.user?.id,
      {
        capabilities: _v47
      } = (0, _v7.useCapability)(["canPerformBulkTranslations"], _v46),
      _v48 = !!_v45.canGenerateClipTextTranslation,
      _v49 = !!_v45.canGenerateClipTranslation,
      _v50 = parseInt(_v37.split("/").pop() || ""),
      _v51 = parseInt(_v37.split("/")[2]),
      _v52 = parseInt(_v26?.user?.uri.split("/").pop() || "") === _v51,
      {
        canDelete: _v53,
        canEdit: _v54,
        canEditSettings: _v55,
        canInvite: _v56
      } = (0, _v42.getFolderPermissions)(_v0),
      _v57 = _v0 => {
        _v11({
          isPrivateToUser: _v39,
          libraryFolderId: String(_v50),
          libraryFolderContextMenuAction: _v0
        });
      },
      _v58 = _v54 && (_v49 || _v48) && !!_v47.canPerformBulkTranslations,
      _v59 = _v45.hasExtraEmbedOptions && _v55,
      _v60 = !_v45.hasProhibitMultipleReviewLinks && !!_v45.hasMultipleReviewLinks,
      {
        canCreateReviewLink: _v61,
        canCopyReviewPageLink: _v62,
        canManageReviewLinks: _v63,
        reviewPageLink: _v64
      } = (0, _v36.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v60,
        hasMultipleReviewLinks: !!_v45.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v10.getFolderReviewPageUrl)(_v0, _v50, _v51), [_v50, _v51])
      }),
      _v65 = (0, _v27.useManageShareAction)({
        canEdit: _v55,
        entityUri: _v0.uri,
        location: _v19.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v66 = (0, _v2.useCallback)(() => {
        _v14({
          onManage: _v65
        }), _v21.BPAnalyticsV2.copyFolderLink({
          location: "card",
          element: "ellipses",
          teamUser: _v26?.teamUser,
          folder: _v0,
          webCtx: {
            path: window.location.pathname,
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v14, _v65, _v0, _v26?.teamUser]);
    if (isNaN(_v50) || isNaN(_v51)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v67 = _v44.connections.parentFolder?.uri,
      _v68 = _v26?.vimeoHttpsUrl || "",
      _v69 = `${_v68}${(0, _v41.getFolderPageUriFromApiUri)(_v37)}${_v28(_v27, !!_v0.isPrivateToUser)}`,
      _v70 = _v68 + (0, _v41.getFolderAnalyticsPageUriFromApiUri)(_v37),
      _v71 = () => {
        _v4?.(), _v30 && _v31?.();
      },
      _v72 = Math.max(0, (_v44.connections.items?.total ?? 0) - (_v44.connections.folders?.total ?? 0)),
      _v73 = _v54 && _v45.canManageTeamCollections,
      _v74 = _v72 > 0 && _v73 && _v72 <= 100;
    return (0, _v1.jsx)(_v9.FolderMenu, {
      ..._v9,
      canTranslateVideos: _v58,
      handleTranslateVideo: () => {
        _v57("translate_videos"), (0, _v15.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
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
          ...(0, _v16.buildTeamBpContextFromTeamUser)(_v26?.teamUser)
        }, 1, {
          value: String(1),
          device_type: (0, _v11.default)()
        }), _v20({
          folderId: _v50,
          isFolder: !0,
          folderName: _v38,
          canTranslateText: _v48,
          canTranslateDubbing: _v49,
          onComplete: () => {
            _v46 && _v36(_v46);
          }
        });
      },
      onClick: () => {
        _v3.BigPictureClient.sendEvent(new _v3.Event("open_folder_overflow", 8, {
          product: _v7.product,
          feature: _v7.feature,
          location: _v7.location,
          page: _v27.toUpperCase(),
          path: window.location.pathname,
          folder_id: _v50,
          is_subfolder: !!_v44.connections.parentFolder,
          target_object_location_type: _v39 ? "private folder" : "team folder",
          actor_team_role: null,
          is_my_videos: _v39 && !!_v45.hasContentSpaceEnabled,
          entry_page: (0, _v12.getEntryPage)(document.referrer || "")
        }));
      },
      canShare: _v56 || _v45.canSeeUpsellModalOnShare,
      onShare: _v33,
      canDelete: _v53,
      onDelete: () => {
        _v57("delete"), _v15?.(_v38, _v50, _v7.location, _v67, _v51, _v39, !!_v45.hasContentSpaceEnabled, _v71), _v10((0, _v20.genericClick)({
          copy: "Delete",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v27.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canEditFolderSettings: _v55,
      onFolderDefaults: () => {
        _v57("folder_setting"), _v17({
          folderId: _v50,
          ownerId: _v51,
          isFolderOwner: _v52,
          presetId: _v0?.settings?.embedPresetId,
          isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
          displayUpsell: !_v59,
          location: _v7.location,
          feature: _v7.feature,
          page: _v27.toUpperCase(),
          onSave: () => {
            _v13({
              content: _v39.folderDefaultsSaved,
              status: ""
            });
          }
        });
      },
      onFolderSettings: () => {
        _v57("folder_setting"), _v18({
          userId: _v51,
          parentFolderUri: _v67 ?? null,
          currentFolderUri: _v37,
          location: location.toString(),
          onSettingsChange: _v3,
          isEditingFolder: !0,
          initialColor: _v0.settings?.color
        }), _v10((0, _v20.genericClick)({
          copy: "Folder settings",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v27.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canMove: _v53,
      onMove: () => {
        _v57("move"), _v16({
          activeFolderURI: _v37,
          feature: _v7.feature,
          location: _v7.location,
          items: [{
            name: _v38,
            type: "folder",
            parentFolder: _v67 ? {
              uri: _v67,
              isPrivateToUser: _v39
            } : void 0,
            uri: _v37
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
          teamOwnerId: _v51
        }), _v10((0, _v20.genericClick)({
          copy: "move",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v27.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canBulkPrivacyChange: _v54 && _v23,
      onBulkPrivacyChange: () => {
        _v25({
          userId: _v51,
          folderUris: [_v37],
          folderName: _v38,
          variant: _v24,
          onSuccess: () => {}
        });
      },
      canEdit: _v54,
      analyticsPageLink: _v70,
      folderLink: _v69,
      onCopyLink: () => {
        _v57("copy_link"), _v66();
      },
      onClickAnalyticsLink: () => {
        _v57("analytics"), _v10((0, _v20.genericClick)({
          copy: "Analytics",
          feature: "analytics",
          location: _v7.location,
          name: "click_folder_analytics",
          page: _v27.toUpperCase(),
          target: _v70 ?? "",
          type: "general",
          target_path: null
        }));
      },
      hasFolderDefaultsUpsell: !_v59,
      hasShareUpsell: _v45.canSeeUpsellModalOnShare,
      hasSlackIntegration: !_v41,
      isConnectedToSlack: !!_v43,
      onSlackIntegration: () => {
        _v57("connect_to_slack"), _v19({
          userId: _v51,
          hasSlackIntegration: !!_v43,
          isSlackNotificationEnabled: !!_v42,
          folderId: _v50,
          folderName: _v38,
          currentFolderUri: _v37,
          updateSubFolderData: _v6
        }), _v43 ? _v12("vimeo.open_connection_settings", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_settings",
          location: "card",
          folderId: _v50,
          integrationType: "folder_base_connect",
          parentFolderId: _v67 ? Number(_v67.split("/").pop()) : null,
          isPrivateToMe: _v39,
          isPinned: _v40
        }) : _v12("vimeo.connect_folder", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_connections",
          location: "card",
          folderId: _v50,
          integrationType: "folder_base_connect",
          parentFolderId: _v67 ? Number(_v67.split("/").pop()) : null,
          isPrivateToMe: _v39,
          isPinned: _v40
        });
      },
      onStarClick: _v31 ? () => {
        _v30 || _v57("add_to_starred"), _v31();
      } : void 0,
      canCreateReviewLink: _v61,
      onCreateReviewLink: () => {
        _v57("create_review_link"), _v33?.("CREATE_REVIEW_LINK_MODAL");
      },
      canCopyReviewPageLink: _v62,
      reviewPageLink: _v64,
      onCopyReviewPageLink: () => {
        if (_v57("copy_review_link"), _v64) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v34(_v0 ? () => _v33?.("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v35(_v50, _v51, _v37);
      },
      canManageReviewLinks: _v63,
      hasProhibitMultipleReviewLinks: _v45.hasProhibitMultipleReviewLinks,
      onManageReviewLinks: () => {
        _v57("manage_review_links"), _v33?.("REVIEW_LINKS_PANEL");
      },
      ..._v32,
      onRename: () => {
        _v57("rename"), _v5?.();
      },
      showAddToShowcase: _v73,
      canAddToShowcase: _v74,
      onAddToShowcase: () => {
        _v57("add_to_showcase"), _v21({
          ownerId: _v51,
          onClose: _v22,
          folderId: _v50,
          pageName: _v27,
          pageUrl: window.location.pathname,
          itemCount: _v72
        });
      },
      zIndex: _v38.ACTIONS_MENU_Z_INDEX
    });
  }]);
}