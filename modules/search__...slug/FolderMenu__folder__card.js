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
    _v44 = _v0.i(0);
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
      } = (0, _v32.useSlackIntegrationModal)(),
      {
        openBulkAiModal: _v20
      } = (0, _v4.useBulkAiModal)(),
      {
        openAddFolderToShowcaseModal: _v21,
        closeAddFolderToShowcaseModal: _v22
      } = (0, _v34.useAddFolderToShowcaseModal)(),
      {
        isEnabled: _v23,
        variant: _v24
      } = (0, _v6.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v25
      } = (0, _v5.useBulkPrivacyModal)(),
      _v26 = (0, _v31.useRevalidateVideoListCaches)(),
      _v27 = (0, _v2.useContext)(_v18.ViewerContext),
      _v28 = (0, _v30.usePageName)(),
      {
        getFolderShareLoopTrackingParams: _v29
      } = (0, _v33.useShareLoopTrackingParams)(),
      {
        handleStarMenuState: _v30
      } = (0, _v44.useStarMenuItem)(),
      {
        isItemStarred: _v31,
        onStarClick: _v32,
        ..._v33
      } = _v30("folder", _v0, !0),
      _v34 = (0, _v38.useFolderShareClick)({
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
      _v35 = (0, _v36.useReviewLinkCopiedToast)(),
      _v36 = (0, _v35.useCreateAndCopyFolderReviewLink)((0, _v2.useCallback)((_v0, _v1) => {
        _v35(() => _v34?.("CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v35, _v34])),
      _v37 = (0, _v41.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        uri: _v38,
        name: _v39,
        isPrivateToUser: _v40,
        isPinned: _v41,
        useParentSlackSettings: _v42,
        isSlackNotificationEnabled: _v43,
        slackIncomingWebhooksId: _v44,
        metadata: _v45
      } = _v0,
      {
        capabilities: _v46
      } = (0, _v7.useCapability)(["hasContentSpaceEnabled", "canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canManageTeamCollections"], _v38),
      _v47 = _v27?.teamUser?.ownerId ?? _v27?.user?.id,
      {
        capabilities: _v48
      } = (0, _v7.useCapability)(["canPerformBulkTranslations"], _v47),
      _v49 = !!_v46.canGenerateClipTextTranslation,
      _v50 = !!_v46.canGenerateClipTranslation,
      _v51 = parseInt(_v38.split("/").pop() || ""),
      _v52 = parseInt(_v38.split("/")[2]),
      _v53 = parseInt(_v27?.user?.uri.split("/").pop() || "") === _v52,
      {
        canDelete: _v54,
        canEdit: _v55,
        canEditSettings: _v56,
        canInvite: _v57
      } = (0, _v43.getFolderPermissions)(_v0),
      _v58 = _v0 => {
        _v11({
          isPrivateToUser: _v40,
          libraryFolderId: String(_v51),
          libraryFolderContextMenuAction: _v0
        });
      },
      _v59 = _v55 && (_v50 || _v49) && !!_v48.canPerformBulkTranslations,
      _v60 = _v46.hasExtraEmbedOptions && _v56,
      _v61 = !_v46.hasProhibitMultipleReviewLinks && !!_v46.hasMultipleReviewLinks,
      {
        canCreateReviewLink: _v62,
        canCopyReviewPageLink: _v63,
        canManageReviewLinks: _v64,
        reviewPageLink: _v65
      } = (0, _v37.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v61,
        hasMultipleReviewLinks: !!_v46.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v10.getFolderReviewPageUrl)(_v0, _v51, _v52), [_v51, _v52])
      }),
      _v66 = (0, _v27.useManageShareAction)({
        canEdit: _v56,
        entityUri: _v0.uri,
        location: _v19.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v67 = (0, _v2.useCallback)(() => {
        _v14({
          onManage: _v66
        }), _v21.BPAnalyticsV2.copyFolderLink({
          location: "card",
          element: "ellipses",
          teamUser: _v27?.teamUser,
          folder: _v0,
          webCtx: {
            path: window.location.pathname,
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v14, _v66, _v0, _v27?.teamUser]);
    if (isNaN(_v51) || isNaN(_v52)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v68 = _v45.connections.parentFolder?.uri,
      _v69 = _v27?.vimeoHttpsUrl || "",
      _v70 = `${_v69}${(0, _v42.getFolderPageUriFromApiUri)(_v38)}${_v29(_v28, !!_v0.isPrivateToUser)}`,
      _v71 = _v69 + (0, _v42.getFolderAnalyticsPageUriFromApiUri)(_v38),
      _v72 = () => {
        _v4?.(), _v31 && _v32?.();
      },
      _v73 = Math.max(0, (_v45.connections.items?.total ?? 0) - (_v45.connections.folders?.total ?? 0)),
      _v74 = _v55 && _v46.canManageTeamCollections,
      _v75 = _v73 > 0 && _v74 && _v73 <= 100;
    return (0, _v1.jsx)(_v9.FolderMenu, {
      ..._v9,
      canTranslateVideos: _v59,
      handleTranslateVideo: () => {
        _v58("translate_videos"), (0, _v15.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
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
          ...(0, _v16.buildTeamBpContextFromTeamUser)(_v27?.teamUser)
        }, 1, {
          value: String(1),
          device_type: (0, _v11.default)()
        }), _v20({
          folderId: _v51,
          isFolder: !0,
          folderName: _v39,
          canTranslateText: _v49,
          canTranslateDubbing: _v50,
          onComplete: () => {
            _v47 && _v37(_v47);
          }
        });
      },
      onClick: () => {
        _v3.BigPictureClient.sendEvent(new _v3.Event("open_folder_overflow", 8, {
          product: _v7.product,
          feature: _v7.feature,
          location: _v7.location,
          page: _v28.toUpperCase(),
          path: window.location.pathname,
          folder_id: _v51,
          is_subfolder: !!_v45.connections.parentFolder,
          target_object_location_type: _v40 ? "private folder" : "team folder",
          actor_team_role: null,
          is_my_videos: _v40 && !!_v46.hasContentSpaceEnabled,
          entry_page: (0, _v12.getEntryPage)(document.referrer || "")
        }));
      },
      canShare: _v57 || _v46.canSeeUpsellModalOnShare,
      onShare: _v34,
      canDelete: _v54,
      onDelete: () => {
        _v58("delete"), _v15?.(_v39, _v51, _v7.location, _v68, _v52, _v40, !!_v46.hasContentSpaceEnabled, _v72), _v10((0, _v20.genericClick)({
          copy: "Delete",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v28.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canEditFolderSettings: _v56,
      onFolderDefaults: () => {
        _v58("folder_setting"), _v17({
          folderId: _v51,
          ownerId: _v52,
          isFolderOwner: _v53,
          presetId: _v0?.settings?.embedPresetId,
          isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
          displayUpsell: !_v60,
          location: _v7.location,
          feature: _v7.feature,
          page: _v28.toUpperCase(),
          onSave: () => {
            _v13({
              content: _v40.folderDefaultsSaved,
              status: ""
            });
          }
        });
      },
      onFolderSettings: () => {
        _v58("folder_setting"), _v18({
          userId: _v52,
          parentFolderUri: _v68 ?? null,
          currentFolderUri: _v38,
          location: location.toString(),
          onSettingsChange: _v3,
          isEditingFolder: !0,
          initialColor: _v0.settings?.color
        }), _v10((0, _v20.genericClick)({
          copy: "Folder settings",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v28.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canMove: _v54,
      onMove: () => {
        _v58("move"), _v16({
          activeFolderURI: _v38,
          feature: _v7.feature,
          location: _v7.location,
          items: [{
            name: _v39,
            type: "folder",
            parentFolder: _v68 ? {
              uri: _v68,
              isPrivateToUser: _v40
            } : void 0,
            uri: _v38
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
          teamOwnerId: _v52
        }), _v10((0, _v20.genericClick)({
          copy: "move",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v28.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canBulkPrivacyChange: _v55 && _v23,
      onBulkPrivacyChange: () => {
        _v25({
          userId: _v52,
          folderUris: [_v38],
          folderName: _v39,
          location: "folder_card_folder_menu",
          variant: _v24,
          onSuccess: () => {
            _v26();
          }
        });
      },
      canEdit: _v55,
      analyticsPageLink: _v71,
      folderLink: _v70,
      onCopyLink: () => {
        _v58("copy_link"), _v67();
      },
      onClickAnalyticsLink: () => {
        _v58("analytics"), _v10((0, _v20.genericClick)({
          copy: "Analytics",
          feature: "analytics",
          location: _v7.location,
          name: "click_folder_analytics",
          page: _v28.toUpperCase(),
          target: _v71 ?? "",
          type: "general",
          target_path: null
        }));
      },
      hasFolderDefaultsUpsell: !_v60,
      hasShareUpsell: _v46.canSeeUpsellModalOnShare,
      hasSlackIntegration: !_v42,
      isConnectedToSlack: !!_v44,
      onSlackIntegration: () => {
        _v58("connect_to_slack"), _v19({
          userId: _v52,
          hasSlackIntegration: !!_v44,
          isSlackNotificationEnabled: !!_v43,
          folderId: _v51,
          folderName: _v39,
          currentFolderUri: _v38,
          updateSubFolderData: _v6
        }), _v44 ? _v12("vimeo.open_connection_settings", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_settings",
          location: "card",
          folderId: _v51,
          integrationType: "folder_base_connect",
          parentFolderId: _v68 ? Number(_v68.split("/").pop()) : null,
          isPrivateToMe: _v40,
          isPinned: _v41
        }) : _v12("vimeo.connect_folder", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_connections",
          location: "card",
          folderId: _v51,
          integrationType: "folder_base_connect",
          parentFolderId: _v68 ? Number(_v68.split("/").pop()) : null,
          isPrivateToMe: _v40,
          isPinned: _v41
        });
      },
      onStarClick: _v32 ? () => {
        _v31 || _v58("add_to_starred"), _v32();
      } : void 0,
      canCreateReviewLink: _v62,
      onCreateReviewLink: () => {
        _v58("create_review_link"), _v34?.("CREATE_REVIEW_LINK_MODAL");
      },
      canCopyReviewPageLink: _v63,
      reviewPageLink: _v65,
      onCopyReviewPageLink: () => {
        if (_v58("copy_review_link"), _v65) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v35(_v0 ? () => _v34?.("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v36(_v51, _v52, _v38);
      },
      canManageReviewLinks: _v64,
      hasProhibitMultipleReviewLinks: _v46.hasProhibitMultipleReviewLinks,
      onManageReviewLinks: () => {
        _v58("manage_review_links"), _v34?.("REVIEW_LINKS_PANEL");
      },
      ..._v33,
      onRename: () => {
        _v58("rename"), _v5?.();
      },
      showAddToShowcase: _v74,
      canAddToShowcase: _v75,
      onAddToShowcase: () => {
        _v58("add_to_showcase"), _v21({
          ownerId: _v52,
          onClose: _v22,
          folderId: _v51,
          pageName: _v28,
          pageUrl: window.location.pathname,
          itemCount: _v73
        });
      },
      zIndex: _v39.ACTIONS_MENU_Z_INDEX
    });
  }]);
}