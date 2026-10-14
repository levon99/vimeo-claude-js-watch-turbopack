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
    _v33 = _v0.i(0);
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
    let {
        trackLibraryFolderContextMenuActionClicked: _v10
      } = (0, _v6.useLibraryTracking)(),
      _v11 = (0, _v17.useNotification)(),
      _v12 = (0, _v11.useCopyFolderLinkToast)(),
      {
        openDeleteFolderModal: _v13
      } = (0, _v12.useDeleteFolderModal)(),
      {
        openMoveModal: _v14
      } = (0, _v16.useMoveModal)(),
      {
        openFolderDefaultsModal: _v15
      } = (0, _v13.useFolderDefaultsModal)(),
      _v16 = (0, _v32.useAcknowledgeFolderDefaultsIntro)(),
      {
        openFolderSettingsModal: _v17
      } = (0, _v14.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v18
      } = (0, _v20.useSlackIntegrationModal)(),
      {
        openBulkAiModal: _v19
      } = (0, _v3.useBulkAiModal)(),
      {
        openAddFolderToShowcaseModal: _v20,
        closeAddFolderToShowcaseModal: _v21
      } = (0, _v22.useAddFolderToShowcaseModal)(),
      {
        openBulkPrivacyModal: _v22
      } = (0, _v4.useBulkPrivacyModal)(),
      _v23 = (0, _v19.useRevalidateVideoListCaches)(),
      _v24 = (0, _v2.useContext)(_v9.ViewerContext),
      _v25 = (0, _v18.usePageName)(),
      {
        getFolderShareLoopTrackingParams: _v26
      } = (0, _v21.useShareLoopTrackingParams)(),
      {
        handleStarMenuState: _v27
      } = (0, _v33.useStarMenuItem)(),
      {
        isItemStarred: _v28,
        onStarClick: _v29,
        ..._v30
      } = _v27("folder", _v0, !0),
      _v31 = (0, _v26.useFolderShareClick)({
        folder: _v0,
        analytics: {
          ..._v7,
          shareModalEntryPoint: _v10.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT
        }
      }),
      _v32 = (0, _v24.useReviewLinkCopiedToast)(),
      _v33 = (0, _v23.useCreateAndCopyFolderReviewLink)((0, _v2.useCallback)((_v0, _v1) => {
        _v32(() => _v31?.("CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v32, _v31])),
      _v34 = (0, _v29.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        uri: _v35,
        name: _v36,
        isPrivateToUser: _v37,
        useParentSlackSettings: _v38,
        isSlackNotificationEnabled: _v39,
        slackIncomingWebhooksId: _v40,
        metadata: _v41
      } = _v0,
      {
        capabilities: _v42
      } = (0, _v5.useCapability)(["hasContentSpaceEnabled", "canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canManageTeamCollections"], _v35),
      _v43 = _v24?.teamUser?.ownerId ?? _v24?.user?.id,
      {
        capabilities: _v44
      } = (0, _v5.useCapability)(["canPerformBulkTranslations"], _v43),
      _v45 = !!_v42.canGenerateClipTextTranslation,
      _v46 = !!_v42.canGenerateClipTranslation,
      _v47 = parseInt(_v35.split("/").pop() || ""),
      _v48 = parseInt(_v35.split("/")[2]),
      _v49 = parseInt(_v24?.user?.uri.split("/").pop() || "") === _v48,
      {
        canDelete: _v50,
        canEdit: _v51,
        canEditSettings: _v52,
        canInvite: _v53
      } = (0, _v31.getFolderPermissions)(_v0),
      _v54 = _v0 => {
        _v10({
          isPrivateToUser: _v37,
          libraryFolderId: String(_v47),
          libraryFolderContextMenuAction: _v0
        });
      },
      _v55 = _v51 && (_v46 || _v45) && !!_v44.canPerformBulkTranslations,
      _v56 = _v42.hasExtraEmbedOptions && _v52,
      _v57 = !_v42.hasProhibitMultipleReviewLinks && !!_v42.hasMultipleReviewLinks,
      {
        canCreateReviewLink: _v58,
        canCopyReviewPageLink: _v59,
        canManageReviewLinks: _v60,
        reviewPageLink: _v61
      } = (0, _v25.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v57,
        hasMultipleReviewLinks: !!_v42.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v8.getFolderReviewPageUrl)(_v0, _v47, _v48), [_v47, _v48])
      }),
      _v62 = (0, _v15.useManageShareAction)({
        canEdit: _v52,
        entityUri: _v0.uri,
        location: _v10.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v63 = (0, _v2.useCallback)(() => {
        _v12({
          onManage: _v62
        });
      }, [_v12, _v62]);
    if (isNaN(_v47) || isNaN(_v48)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v64 = _v41.connections.parentFolder?.uri,
      _v65 = _v24?.vimeoHttpsUrl || "",
      _v66 = `${_v65}${(0, _v30.getFolderPageUriFromApiUri)(_v35)}${_v26(_v25, !!_v0.isPrivateToUser)}`,
      _v67 = _v65 + (0, _v30.getFolderAnalyticsPageUriFromApiUri)(_v35),
      _v68 = () => {
        _v4?.(), _v28 && _v29?.();
      },
      _v69 = Math.max(0, (_v41.connections.items?.total ?? 0) - (_v41.connections.folders?.total ?? 0)),
      _v70 = _v51 && _v42.canManageTeamCollections,
      _v71 = _v69 > 0 && _v70 && _v69 <= 100;
    return (0, _v1.jsx)(_v7.FolderMenu, {
      ..._v9,
      canTranslateVideos: _v55,
      handleTranslateVideo: () => {
        _v54("translate_videos"), _v19({
          folderId: _v47,
          isFolder: !0,
          folderName: _v36,
          canTranslateText: _v45,
          canTranslateDubbing: _v46,
          onComplete: () => {
            _v43 && _v34(_v43);
          }
        });
      },
      canShare: _v53 || _v42.canSeeUpsellModalOnShare,
      onShare: _v31,
      canDelete: _v50,
      onDelete: () => {
        _v54("delete"), _v13?.(_v36, _v47, _v7.location, _v64, _v48, _v37, !!_v42.hasContentSpaceEnabled, _v68);
      },
      canEditFolderSettings: _v52,
      onFolderDefaults: () => {
        _v54("folder_setting"), _v16(), _v15({
          folderId: _v47,
          ownerId: _v48,
          isFolderOwner: _v49,
          presetId: _v0?.settings?.embedPresetId,
          isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
          displayUpsell: !_v56,
          location: _v7.location,
          feature: _v7.feature,
          page: _v25.toUpperCase(),
          onSave: () => {
            _v11({
              content: _v28.folderDefaultsSaved,
              status: ""
            });
          }
        });
      },
      onFolderSettings: () => {
        _v54("folder_setting"), _v17({
          userId: _v48,
          parentFolderUri: _v64 ?? null,
          currentFolderUri: _v35,
          location: location.toString(),
          onSettingsChange: _v3,
          isEditingFolder: !0,
          initialColor: _v0.settings?.color
        });
      },
      canMove: _v50,
      onMove: () => {
        _v54("move"), _v14({
          activeFolderURI: _v35,
          feature: _v7.feature,
          initialDestination: _v64 || _v37 ? void 0 : "root",
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
          teamOwnerId: _v48
        });
      },
      canBulkPrivacyChange: _v51,
      onBulkPrivacyChange: () => {
        _v22({
          userId: _v48,
          folderUris: [_v35],
          folderName: _v36,
          location: "folder_card_folder_menu",
          onSuccess: () => {
            _v23();
          }
        });
      },
      canEdit: _v51,
      analyticsPageLink: _v67,
      folderLink: _v66,
      onCopyLink: () => {
        _v54("copy_link"), _v63();
      },
      onClickAnalyticsLink: () => {
        _v54("analytics");
      },
      hasFolderDefaultsUpsell: !_v56,
      hasShareUpsell: _v42.canSeeUpsellModalOnShare,
      hasSlackIntegration: !_v38,
      isConnectedToSlack: !!_v40,
      onSlackIntegration: () => {
        _v54("connect_to_slack"), _v18({
          userId: _v48,
          hasSlackIntegration: !!_v40,
          isSlackNotificationEnabled: !!_v39,
          folderId: _v47,
          folderName: _v36,
          currentFolderUri: _v35,
          updateSubFolderData: _v6
        });
      },
      onStarClick: _v29 ? () => {
        _v28 || _v54("add_to_starred"), _v29();
      } : void 0,
      canCreateReviewLink: _v58,
      onCreateReviewLink: () => {
        _v54("create_review_link"), _v31?.("CREATE_REVIEW_LINK_MODAL");
      },
      canCopyReviewPageLink: _v59,
      reviewPageLink: _v61,
      onCopyReviewPageLink: () => {
        if (_v54("copy_review_link"), _v61) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v32(_v0 ? () => _v31?.("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v33(_v47, _v48, _v35);
      },
      canManageReviewLinks: _v60,
      hasProhibitMultipleReviewLinks: _v42.hasProhibitMultipleReviewLinks,
      onManageReviewLinks: () => {
        _v54("manage_review_links"), _v31?.("REVIEW_LINKS_PANEL");
      },
      ..._v30,
      onRename: () => {
        _v54("rename"), _v5?.();
      },
      showAddToShowcase: _v70,
      canAddToShowcase: _v71,
      onAddToShowcase: () => {
        _v54("add_to_showcase"), _v20({
          ownerId: _v48,
          onClose: _v21,
          folderId: _v47,
          pageName: _v25,
          pageUrl: window.location.pathname,
          itemCount: _v69
        });
      },
      zIndex: _v27.ACTIONS_MENU_Z_INDEX
    });
  }]);
}