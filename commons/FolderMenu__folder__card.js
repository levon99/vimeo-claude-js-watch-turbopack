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
    _v45 = _v0.i(0);
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
      _v18 = (0, _v44.useAcknowledgeFolderDefaultsIntro)(),
      {
        openFolderSettingsModal: _v19
      } = (0, _v26.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v20
      } = (0, _v32.useSlackIntegrationModal)(),
      {
        openBulkAiModal: _v21
      } = (0, _v4.useBulkAiModal)(),
      {
        openAddFolderToShowcaseModal: _v22,
        closeAddFolderToShowcaseModal: _v23
      } = (0, _v34.useAddFolderToShowcaseModal)(),
      {
        isEnabled: _v24,
        variant: _v25
      } = (0, _v6.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v26
      } = (0, _v5.useBulkPrivacyModal)(),
      _v27 = (0, _v31.useRevalidateVideoListCaches)(),
      _v28 = (0, _v2.useContext)(_v18.ViewerContext),
      _v29 = (0, _v30.usePageName)(),
      {
        getFolderShareLoopTrackingParams: _v30
      } = (0, _v33.useShareLoopTrackingParams)(),
      {
        handleStarMenuState: _v31
      } = (0, _v45.useStarMenuItem)(),
      {
        isItemStarred: _v32,
        onStarClick: _v33,
        ..._v34
      } = _v31("folder", _v0, !0),
      _v35 = (0, _v38.useFolderShareClick)({
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
      _v36 = (0, _v36.useReviewLinkCopiedToast)(),
      _v37 = (0, _v35.useCreateAndCopyFolderReviewLink)((0, _v2.useCallback)((_v0, _v1) => {
        _v36(() => _v35?.("CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v36, _v35])),
      _v38 = (0, _v41.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        uri: _v39,
        name: _v40,
        isPrivateToUser: _v41,
        isPinned: _v42,
        useParentSlackSettings: _v43,
        isSlackNotificationEnabled: _v44,
        slackIncomingWebhooksId: _v45,
        metadata: _v46
      } = _v0,
      {
        capabilities: _v47
      } = (0, _v7.useCapability)(["hasContentSpaceEnabled", "canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canManageTeamCollections"], _v39),
      _v48 = _v28?.teamUser?.ownerId ?? _v28?.user?.id,
      {
        capabilities: _v49
      } = (0, _v7.useCapability)(["canPerformBulkTranslations"], _v48),
      _v50 = !!_v47.canGenerateClipTextTranslation,
      _v51 = !!_v47.canGenerateClipTranslation,
      _v52 = parseInt(_v39.split("/").pop() || ""),
      _v53 = parseInt(_v39.split("/")[2]),
      _v54 = parseInt(_v28?.user?.uri.split("/").pop() || "") === _v53,
      {
        canDelete: _v55,
        canEdit: _v56,
        canEditSettings: _v57,
        canInvite: _v58
      } = (0, _v43.getFolderPermissions)(_v0),
      _v59 = _v0 => {
        _v11({
          isPrivateToUser: _v41,
          libraryFolderId: String(_v52),
          libraryFolderContextMenuAction: _v0
        });
      },
      _v60 = _v56 && (_v51 || _v50) && !!_v49.canPerformBulkTranslations,
      _v61 = _v47.hasExtraEmbedOptions && _v57,
      _v62 = !_v47.hasProhibitMultipleReviewLinks && !!_v47.hasMultipleReviewLinks,
      {
        canCreateReviewLink: _v63,
        canCopyReviewPageLink: _v64,
        canManageReviewLinks: _v65,
        reviewPageLink: _v66
      } = (0, _v37.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v62,
        hasMultipleReviewLinks: !!_v47.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v10.getFolderReviewPageUrl)(_v0, _v52, _v53), [_v52, _v53])
      }),
      _v67 = (0, _v27.useManageShareAction)({
        canEdit: _v57,
        entityUri: _v0.uri,
        location: _v19.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v68 = (0, _v2.useCallback)(() => {
        _v14({
          onManage: _v67
        }), _v21.BPAnalyticsV2.copyFolderLink({
          location: "card",
          element: "ellipses",
          teamUser: _v28?.teamUser,
          folder: _v0,
          webCtx: {
            path: window.location.pathname,
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v14, _v67, _v0, _v28?.teamUser]);
    if (isNaN(_v52) || isNaN(_v53)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v69 = _v46.connections.parentFolder?.uri,
      _v70 = _v28?.vimeoHttpsUrl || "",
      _v71 = `${_v70}${(0, _v42.getFolderPageUriFromApiUri)(_v39)}${_v30(_v29, !!_v0.isPrivateToUser)}`,
      _v72 = _v70 + (0, _v42.getFolderAnalyticsPageUriFromApiUri)(_v39),
      _v73 = () => {
        _v4?.(), _v32 && _v33?.();
      },
      _v74 = Math.max(0, (_v46.connections.items?.total ?? 0) - (_v46.connections.folders?.total ?? 0)),
      _v75 = _v56 && _v47.canManageTeamCollections,
      _v76 = _v74 > 0 && _v75 && _v74 <= 100;
    return (0, _v1.jsx)(_v9.FolderMenu, {
      ..._v9,
      canTranslateVideos: _v60,
      handleTranslateVideo: () => {
        _v59("translate_videos"), (0, _v15.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
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
          ...(0, _v16.buildTeamBpContextFromTeamUser)(_v28?.teamUser)
        }, 1, {
          value: String(1),
          device_type: (0, _v11.default)()
        }), _v21({
          folderId: _v52,
          isFolder: !0,
          folderName: _v40,
          canTranslateText: _v50,
          canTranslateDubbing: _v51,
          onComplete: () => {
            _v48 && _v38(_v48);
          }
        });
      },
      onClick: () => {
        _v3.BigPictureClient.sendEvent(new _v3.Event("open_folder_overflow", 8, {
          product: _v7.product,
          feature: _v7.feature,
          location: _v7.location,
          page: _v29.toUpperCase(),
          path: window.location.pathname,
          folder_id: _v52,
          is_subfolder: !!_v46.connections.parentFolder,
          target_object_location_type: _v41 ? "private folder" : "team folder",
          actor_team_role: null,
          is_my_videos: _v41 && !!_v47.hasContentSpaceEnabled,
          entry_page: (0, _v12.getEntryPage)(document.referrer || "")
        }));
      },
      canShare: _v58 || _v47.canSeeUpsellModalOnShare,
      onShare: _v35,
      canDelete: _v55,
      onDelete: () => {
        _v59("delete"), _v15?.(_v40, _v52, _v7.location, _v69, _v53, _v41, !!_v47.hasContentSpaceEnabled, _v73), _v10((0, _v20.genericClick)({
          copy: "Delete",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v29.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canEditFolderSettings: _v57,
      onFolderDefaults: () => {
        _v59("folder_setting"), _v18(), _v17({
          folderId: _v52,
          ownerId: _v53,
          isFolderOwner: _v54,
          presetId: _v0?.settings?.embedPresetId,
          isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
          displayUpsell: !_v61,
          location: _v7.location,
          feature: _v7.feature,
          page: _v29.toUpperCase(),
          onSave: () => {
            _v13({
              content: _v40.folderDefaultsSaved,
              status: ""
            });
          }
        });
      },
      onFolderSettings: () => {
        _v59("folder_setting"), _v19({
          userId: _v53,
          parentFolderUri: _v69 ?? null,
          currentFolderUri: _v39,
          location: location.toString(),
          onSettingsChange: _v3,
          isEditingFolder: !0,
          initialColor: _v0.settings?.color
        }), _v10((0, _v20.genericClick)({
          copy: "Folder settings",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v29.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canMove: _v55,
      onMove: () => {
        _v59("move"), _v16({
          activeFolderURI: _v39,
          feature: _v7.feature,
          initialDestination: _v69 || _v41 ? void 0 : "root",
          location: _v7.location,
          items: [{
            name: _v40,
            type: "folder",
            parentFolder: _v69 ? {
              uri: _v69,
              isPrivateToUser: _v41
            } : void 0,
            uri: _v39
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
          teamOwnerId: _v53
        }), _v10((0, _v20.genericClick)({
          copy: "move",
          feature: _v7.feature,
          location: _v7.location,
          name: "select_folder_menu_item",
          page: _v29.toUpperCase(),
          target: null,
          target_path: null,
          type: "general"
        }));
      },
      canBulkPrivacyChange: _v56 && _v24,
      onBulkPrivacyChange: () => {
        _v26({
          userId: _v53,
          folderUris: [_v39],
          folderName: _v40,
          location: "folder_card_folder_menu",
          variant: _v25,
          onSuccess: () => {
            _v27();
          }
        });
      },
      canEdit: _v56,
      analyticsPageLink: _v72,
      folderLink: _v71,
      onCopyLink: () => {
        _v59("copy_link"), _v68();
      },
      onClickAnalyticsLink: () => {
        _v59("analytics"), _v10((0, _v20.genericClick)({
          copy: "Analytics",
          feature: "analytics",
          location: _v7.location,
          name: "click_folder_analytics",
          page: _v29.toUpperCase(),
          target: _v72 ?? "",
          type: "general",
          target_path: null
        }));
      },
      hasFolderDefaultsUpsell: !_v61,
      hasShareUpsell: _v47.canSeeUpsellModalOnShare,
      hasSlackIntegration: !_v43,
      isConnectedToSlack: !!_v45,
      onSlackIntegration: () => {
        _v59("connect_to_slack"), _v20({
          userId: _v53,
          hasSlackIntegration: !!_v45,
          isSlackNotificationEnabled: !!_v44,
          folderId: _v52,
          folderName: _v40,
          currentFolderUri: _v39,
          updateSubFolderData: _v6
        }), _v45 ? _v12("vimeo.open_connection_settings", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_settings",
          location: "card",
          folderId: _v52,
          integrationType: "folder_base_connect",
          parentFolderId: _v69 ? Number(_v69.split("/").pop()) : null,
          isPrivateToMe: _v41,
          isPinned: _v42
        }) : _v12("vimeo.connect_folder", -1, {
          includeActionContext: !0,
          element: "dropdown",
          feature: "integrations_connections",
          location: "card",
          folderId: _v52,
          integrationType: "folder_base_connect",
          parentFolderId: _v69 ? Number(_v69.split("/").pop()) : null,
          isPrivateToMe: _v41,
          isPinned: _v42
        });
      },
      onStarClick: _v33 ? () => {
        _v32 || _v59("add_to_starred"), _v33();
      } : void 0,
      canCreateReviewLink: _v63,
      onCreateReviewLink: () => {
        _v59("create_review_link"), _v35?.("CREATE_REVIEW_LINK_MODAL");
      },
      canCopyReviewPageLink: _v64,
      reviewPageLink: _v66,
      onCopyReviewPageLink: () => {
        if (_v59("copy_review_link"), _v66) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v36(_v0 ? () => _v35?.("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v37(_v52, _v53, _v39);
      },
      canManageReviewLinks: _v65,
      hasProhibitMultipleReviewLinks: _v47.hasProhibitMultipleReviewLinks,
      onManageReviewLinks: () => {
        _v59("manage_review_links"), _v35?.("REVIEW_LINKS_PANEL");
      },
      ..._v34,
      onRename: () => {
        _v59("rename"), _v5?.();
      },
      showAddToShowcase: _v75,
      canAddToShowcase: _v76,
      onAddToShowcase: () => {
        _v59("add_to_showcase"), _v22({
          ownerId: _v53,
          onClose: _v23,
          folderId: _v52,
          pageName: _v29,
          pageUrl: window.location.pathname,
          itemCount: _v74
        });
      },
      zIndex: _v39.ACTIONS_MENU_Z_INDEX
    });
  }]);
}