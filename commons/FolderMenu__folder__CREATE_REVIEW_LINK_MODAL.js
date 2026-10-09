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
    _v34 = _v0.i(0);
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
      } = (0, _v7.useLibraryTracking)(),
      _v11 = (0, _v18.useNotification)(),
      _v12 = (0, _v12.useCopyFolderLinkToast)(),
      {
        openDeleteFolderModal: _v13
      } = (0, _v13.useDeleteFolderModal)(),
      {
        openMoveModal: _v14
      } = (0, _v17.useMoveModal)(),
      {
        openFolderDefaultsModal: _v15
      } = (0, _v14.useFolderDefaultsModal)(),
      _v16 = (0, _v33.useAcknowledgeFolderDefaultsIntro)(),
      {
        openFolderSettingsModal: _v17
      } = (0, _v15.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v18
      } = (0, _v21.useSlackIntegrationModal)(),
      {
        openBulkAiModal: _v19
      } = (0, _v3.useBulkAiModal)(),
      {
        openAddFolderToShowcaseModal: _v20,
        closeAddFolderToShowcaseModal: _v21
      } = (0, _v23.useAddFolderToShowcaseModal)(),
      {
        isEnabled: _v22,
        variant: _v23
      } = (0, _v5.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v24
      } = (0, _v4.useBulkPrivacyModal)(),
      _v25 = (0, _v20.useRevalidateVideoListCaches)(),
      _v26 = (0, _v2.useContext)(_v10.ViewerContext),
      _v27 = (0, _v19.usePageName)(),
      {
        getFolderShareLoopTrackingParams: _v28
      } = (0, _v22.useShareLoopTrackingParams)(),
      {
        handleStarMenuState: _v29
      } = (0, _v34.useStarMenuItem)(),
      {
        isItemStarred: _v30,
        onStarClick: _v31,
        ..._v32
      } = _v29("folder", _v0, !0),
      _v33 = (0, _v27.useFolderShareClick)({
        folder: _v0,
        analytics: {
          ..._v7,
          shareModalEntryPoint: _v11.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT
        }
      }),
      _v34 = (0, _v25.useReviewLinkCopiedToast)(),
      _v35 = (0, _v24.useCreateAndCopyFolderReviewLink)((0, _v2.useCallback)((_v0, _v1) => {
        _v34(() => _v33?.("CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v34, _v33])),
      _v36 = (0, _v30.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        uri: _v37,
        name: _v38,
        isPrivateToUser: _v39,
        useParentSlackSettings: _v40,
        isSlackNotificationEnabled: _v41,
        slackIncomingWebhooksId: _v42,
        metadata: _v43
      } = _v0,
      {
        capabilities: _v44
      } = (0, _v6.useCapability)(["hasContentSpaceEnabled", "canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canManageTeamCollections"], _v37),
      _v45 = _v26?.teamUser?.ownerId ?? _v26?.user?.id,
      {
        capabilities: _v46
      } = (0, _v6.useCapability)(["canPerformBulkTranslations"], _v45),
      _v47 = !!_v44.canGenerateClipTextTranslation,
      _v48 = !!_v44.canGenerateClipTranslation,
      _v49 = parseInt(_v37.split("/").pop() || ""),
      _v50 = parseInt(_v37.split("/")[2]),
      _v51 = parseInt(_v26?.user?.uri.split("/").pop() || "") === _v50,
      {
        canDelete: _v52,
        canEdit: _v53,
        canEditSettings: _v54,
        canInvite: _v55
      } = (0, _v32.getFolderPermissions)(_v0),
      _v56 = _v0 => {
        _v10({
          isPrivateToUser: _v39,
          libraryFolderId: String(_v49),
          libraryFolderContextMenuAction: _v0
        });
      },
      _v57 = _v53 && (_v48 || _v47) && !!_v46.canPerformBulkTranslations,
      _v58 = _v44.hasExtraEmbedOptions && _v54,
      _v59 = !_v44.hasProhibitMultipleReviewLinks && !!_v44.hasMultipleReviewLinks,
      {
        canCreateReviewLink: _v60,
        canCopyReviewPageLink: _v61,
        canManageReviewLinks: _v62,
        reviewPageLink: _v63
      } = (0, _v26.useReviewLinkMenuState)({
        hasReviewLinkCapabilities: _v59,
        hasMultipleReviewLinks: !!_v44.hasMultipleReviewLinks,
        reviewLinks: _v0.reviewLinks,
        getReviewPageUrl: (0, _v2.useCallback)(_v0 => (0, _v9.getFolderReviewPageUrl)(_v0, _v49, _v50), [_v49, _v50])
      }),
      _v64 = (0, _v16.useManageShareAction)({
        canEdit: _v54,
        entityUri: _v0.uri,
        location: _v11.SHARE_RESOURCE_FOLDER_CARD_OVERFLOW_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v65 = (0, _v2.useCallback)(() => {
        _v12({
          onManage: _v64
        });
      }, [_v12, _v64]);
    if (isNaN(_v49) || isNaN(_v50)) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v66 = _v43.connections.parentFolder?.uri,
      _v67 = _v26?.vimeoHttpsUrl || "",
      _v68 = `${_v67}${(0, _v31.getFolderPageUriFromApiUri)(_v37)}${_v28(_v27, !!_v0.isPrivateToUser)}`,
      _v69 = _v67 + (0, _v31.getFolderAnalyticsPageUriFromApiUri)(_v37),
      _v70 = () => {
        _v4?.(), _v30 && _v31?.();
      },
      _v71 = Math.max(0, (_v43.connections.items?.total ?? 0) - (_v43.connections.folders?.total ?? 0)),
      _v72 = _v53 && _v44.canManageTeamCollections,
      _v73 = _v71 > 0 && _v72 && _v71 <= 100;
    return (0, _v1.jsx)(_v8.FolderMenu, {
      ..._v9,
      canTranslateVideos: _v57,
      handleTranslateVideo: () => {
        _v56("translate_videos"), _v19({
          folderId: _v49,
          isFolder: !0,
          folderName: _v38,
          canTranslateText: _v47,
          canTranslateDubbing: _v48,
          onComplete: () => {
            _v45 && _v36(_v45);
          }
        });
      },
      canShare: _v55 || _v44.canSeeUpsellModalOnShare,
      onShare: _v33,
      canDelete: _v52,
      onDelete: () => {
        _v56("delete"), _v13?.(_v38, _v49, _v7.location, _v66, _v50, _v39, !!_v44.hasContentSpaceEnabled, _v70);
      },
      canEditFolderSettings: _v54,
      onFolderDefaults: () => {
        _v56("folder_setting"), _v16(), _v15({
          folderId: _v49,
          ownerId: _v50,
          isFolderOwner: _v51,
          presetId: _v0?.settings?.embedPresetId,
          isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
          displayUpsell: !_v58,
          location: _v7.location,
          feature: _v7.feature,
          page: _v27.toUpperCase(),
          onSave: () => {
            _v11({
              content: _v29.folderDefaultsSaved,
              status: ""
            });
          }
        });
      },
      onFolderSettings: () => {
        _v56("folder_setting"), _v17({
          userId: _v50,
          parentFolderUri: _v66 ?? null,
          currentFolderUri: _v37,
          location: location.toString(),
          onSettingsChange: _v3,
          isEditingFolder: !0,
          initialColor: _v0.settings?.color
        });
      },
      canMove: _v52,
      onMove: () => {
        _v56("move"), _v14({
          activeFolderURI: _v37,
          feature: _v7.feature,
          initialDestination: _v66 || _v39 ? void 0 : "root",
          location: _v7.location,
          items: [{
            name: _v38,
            type: "folder",
            parentFolder: _v66 ? {
              uri: _v66,
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
          teamOwnerId: _v50
        });
      },
      canBulkPrivacyChange: _v53 && _v22,
      onBulkPrivacyChange: () => {
        _v24({
          userId: _v50,
          folderUris: [_v37],
          folderName: _v38,
          location: "folder_card_folder_menu",
          variant: _v23,
          onSuccess: () => {
            _v25();
          }
        });
      },
      canEdit: _v53,
      analyticsPageLink: _v69,
      folderLink: _v68,
      onCopyLink: () => {
        _v56("copy_link"), _v65();
      },
      onClickAnalyticsLink: () => {
        _v56("analytics");
      },
      hasFolderDefaultsUpsell: !_v58,
      hasShareUpsell: _v44.canSeeUpsellModalOnShare,
      hasSlackIntegration: !_v40,
      isConnectedToSlack: !!_v42,
      onSlackIntegration: () => {
        _v56("connect_to_slack"), _v18({
          userId: _v50,
          hasSlackIntegration: !!_v42,
          isSlackNotificationEnabled: !!_v41,
          folderId: _v49,
          folderName: _v38,
          currentFolderUri: _v37,
          updateSubFolderData: _v6
        });
      },
      onStarClick: _v31 ? () => {
        _v30 || _v56("add_to_starred"), _v31();
      } : void 0,
      canCreateReviewLink: _v60,
      onCreateReviewLink: () => {
        _v56("create_review_link"), _v33?.("CREATE_REVIEW_LINK_MODAL");
      },
      canCopyReviewPageLink: _v61,
      reviewPageLink: _v63,
      onCopyReviewPageLink: () => {
        if (_v56("copy_review_link"), _v63) {
          let _v0 = _v0.reviewLinks?.[0]?.uri;
          _v34(_v0 ? () => _v33?.("CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
        } else _v35(_v49, _v50, _v37);
      },
      canManageReviewLinks: _v62,
      hasProhibitMultipleReviewLinks: _v44.hasProhibitMultipleReviewLinks,
      onManageReviewLinks: () => {
        _v56("manage_review_links"), _v33?.("REVIEW_LINKS_PANEL");
      },
      ..._v32,
      onRename: () => {
        _v56("rename"), _v5?.();
      },
      showAddToShowcase: _v72,
      canAddToShowcase: _v73,
      onAddToShowcase: () => {
        _v56("add_to_showcase"), _v20({
          ownerId: _v50,
          onClose: _v21,
          folderId: _v49,
          pageName: _v27,
          pageUrl: window.location.pathname,
          itemCount: _v71
        });
      },
      zIndex: _v28.ACTIONS_MENU_Z_INDEX
    });
  }]);
}