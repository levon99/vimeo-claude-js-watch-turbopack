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
    _v57 = _v0.i(0);
  let _v58 = ({
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
    let _v23 = (0, _v51.useWayfinderPageName)(),
      _v24 = (0, _v4.useContext)(_v31.ViewerContext),
      _v25 = _v24?.teamUser?.ownerId ?? _v24?.user?.id,
      _v26 = (0, _v3.useRouter)(),
      _v27 = (0, _v18.getFolderPageUriFromApiUri)(_v21),
      _v28 = (0, _v18.getUserIdFromFolderUri)(_v21),
      _v29 = (0, _v18.getFolderIdFromFolderUri)(_v21),
      _v30 = (0, _v44.useNotification)(),
      [_v31, _v32] = (0, _v4.useState)(!1),
      [_v33, _v34] = (0, _v4.useState)(_v13),
      _v35 = (0, _v33.useOrionSetting)("enable_rename_folder"),
      _v36 = (0, _v52.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolder: _v37,
        revalidateFolderItems: _v38,
        revalidateSetOfFolderItems: _v39,
        revalidateTopLevelFolders: _v40
      } = (0, _v45.useRevalidate)(),
      {
        draggableItemIsHovering: _v41,
        dropRef: _v42
      } = (0, _v56.useDropFolder)({
        dropTargetType: _v54.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: _v3,
        allowedDropEffect: _v54.ALLOWED_DROP_EFFECTS.MOVE,
        dropFileForUploadConfig: null != _v25 && _v3?.metadata?.interactions?.uploadVideo ? {
          targetUserId: _v25,
          folderId: _v29,
          folderName: _v33,
          uploadClipProperties: _v20,
          surface: (0, _v55.getLibraryUploadSurface)({
            contentSpaceEnabled: _v7,
            isPrivateToUser: _v3?.isPrivateToUser
          })
        } : void 0
      }),
      {
        capabilities: _v43
      } = (0, _v9.useCapability)(["canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks"], _v28),
      {
        capabilities: _v44
      } = (0, _v9.useCapability)(["canPerformBulkTranslations"], _v25),
      _v45 = !!_v43.canGenerateClipTextTranslation,
      _v46 = !!_v43.canGenerateClipTranslation,
      _v47 = (_v46 || _v45) && !!_v44.canPerformBulkTranslations,
      _v48 = (0, _v29.useCanUpSell)(),
      {
        openShareFolderModal: _v49
      } = (0, _v48.useShareFolderModal)(),
      _v50 = (0, _v37.useCopyFolderLinkToast)(),
      {
        isEnabled: _v51,
        copyFolderShareLink: _v52
      } = (0, _v27.useCopyFolderShareLink)(),
      _v53 = (0, _v42.useManageShareActionBuilder)(),
      _v54 = (0, _v46.useReviewLinkCopiedToast)(),
      _v55 = (0, _v38.useCreateAndCopyFolderReviewLink)((0, _v4.useCallback)((_v0, _v1) => {
        _v54(() => _v49?.(_v0, "sidebar", "CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v54, _v49])),
      [_v56, _v57] = (0, _v4.useState)(""),
      {
        openBulkAiModal: _v58
      } = (0, _v20.useBulkAiModal)(),
      {
        openBulkPrivacyModal: _v59
      } = (0, _v21.useBulkPrivacyModal)(),
      [_v60, _v61] = (0, _v4.useState)(_v11),
      {
        openDeleteFolderModal: _v62
      } = (0, _v39.useDeleteFolderModal)(),
      {
        openMoveModal: _v63
      } = (0, _v43.useMoveModal)(),
      {
        openFolderDefaultsModal: _v64
      } = (0, _v40.useFolderDefaultsModal)(),
      {
        openFolderSettingsModal: _v65
      } = (0, _v41.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v66
      } = (0, _v49.useSlackIntegrationModal)(),
      {
        open: _v67,
        close: _v68
      } = (0, _v50.useUpsellModal)(),
      {
        handleStarMenuState: _v69
      } = (0, _v57.useStarMenuItem)(),
      {
        trackLibraryFolderOpened: _v70
      } = (0, _v25.useLibraryTracking)();
    (0, _v4.useEffect)(() => {
      _v34(_v13);
    }, [_v13]);
    let {
        mutate: _v71,
        data: _v72,
        size: _v73,
        setSize: _v74,
        error: _v75
      } = (0, _v32.useGetUserProjectItemsInfinite)(() => _v60 || _v11 ? {
        where: {
          userId: _v28,
          projectId: _v29
        },
        select: _v23.LEVEL_SUBFOLDER_FIELDS,
        query: {
          filter: "folder",
          perPage: 100,
          sort: "alphabetical"
        }
      } : null),
      {
        isDone: _v76,
        isLoadingMore: _v77
      } = (0, _v30.getInfiniteRequestLoadingState)({
        data: _v72,
        error: _v75,
        size: _v73,
        itemsPerPage: 100
      });
    (0, _v4.useEffect)(() => {
      (_v60 || _v11) && _v72 && !_v76 && !_v77 && _v74(_v73 + 1);
    }, [_v60, _v11, _v72, _v76, _v77, _v73, _v74]);
    let _v78 = (0, _v4.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v71(_v0 => _v0?.map(_v0 => ({
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
      }, [_v71]),
      _v79 = _v0 ? _v4.default.cloneElement(_v0, {
        onRename: () => {
          _v32(!0);
        }
      }) : null;
    if (_v72 && 0 === _v72[0].total) return (0, _v1.jsx)(_v34.ExpandableMenuItem, {
      action: _v79,
      active: _v26.query.folderId === `${_v29}`,
      hasActiveColor: _v6,
      hoverColor: "text-primary",
      href: _v27,
      icon: _v10,
      isEditing: _v31,
      label: _v35 && _v31 ? (0, _v1.jsx)(_v36.FolderEditableTitle, {
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
    let _v80 = _v72?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data)?.filter(_v0 => _v0.folder),
      _v81 = _v0 => {
        _v38(_v0?.parentFolder?.uri ?? ""), _v78(_v0);
      },
      _v82 = (_v0, _v1, _v2) => {
        _v49?.(_v0.uri, "sidebar", _v1, _v2);
      };
    return (0, _v1.jsx)(_v34.ExpandableMenuItem, {
      action: _v79,
      active: _v26.query.folderId === `${_v29}`,
      hasActiveColor: _v6,
      hasToggle: _v9,
      icon: _v10,
      hoverColor: "text-primary",
      href: _v27,
      onClick: _v15,
      id: `folder-menu-item-button-${_v21}`,
      isEditing: _v31,
      isLoading: !!_v14 && _v14.has(_v21) || (_v60 || _v11) && !_v72,
      isFetching: (_v60 || _v11) && !_v72,
      label: _v35 && _v31 ? (0, _v1.jsx)(_v36.FolderEditableTitle, {
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
      children: _v80?.map(({
        folder: _v0
      }) => {
        let _v1 = parseInt(_v0?.uri.split("/").pop()),
          _v2 = parseInt(_v0?.uri.split("/")?.[2] ?? ""),
          _v3 = _v0?.metadata?.connections?.parentFolder,
          _v4 = _v0?.uri && (_v1 ?? _v24?.vimeoHttpsUrl) + (0, _v18.getFolderPageUriFromApiUri)(_v0?.uri),
          _v5 = _v0?.uri && _v1 + (0, _v18.getFolderAnalyticsPageUriFromApiUri)(_v0.uri),
          {
            canDelete: _v6,
            canEdit: _v7,
            canEditSettings: _v8,
            canInvite: _v9
          } = (0, _v53.getFolderPermissions)(_v0),
          _v10 = _v43.hasExtraEmbedOptions && _v8,
          _v11 = !_v43.hasProhibitMultipleReviewLinks && !!_v43.hasMultipleReviewLinks,
          {
            canCreateReviewLink: _v12,
            canCopyReviewPageLink: _v13,
            canManageReviewLinks: _v14,
            reviewPageLink: _v15
          } = (0, _v47.getReviewLinkMenuState)({
            hasReviewLinkCapabilities: _v11,
            hasMultipleReviewLinks: !!_v43.hasMultipleReviewLinks,
            reviewLinks: _v0?.reviewLinks,
            canUpsell: _v48,
            getReviewPageUrl: _v0 => (0, _v28.getFolderReviewPageUrl)(_v0, _v1, _v2)
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
          },
          _v20 = (_v0 = !0) => {
            _v50({
              isSuccess: _v0,
              onManage: _v53({
                canEdit: _v8,
                entityUri: _v0?.uri ?? "",
                location: "sidebar",
                panel: "INVITE_PANEL"
              })
            });
          };
        return (0, _v1.jsx)(_v58, {
          folderId: _v1,
          folderOwnerId: _v2,
          action: _v0 && (0, _v1.jsx)(_v26.FolderMenu, {
            canTranslateVideos: _v47,
            handleTranslateVideo: () => {
              _v58({
                folderId: _v1,
                isFolder: !0,
                folderName: _v56,
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
              _v57(_v0.name);
            },
            size: "sm",
            canShare: _v9 || _v43.canSeeUpsellModalOnShare,
            onShare: () => {
              _v43.canSeeUpsellModalOnShare ? _v67({
                tracking: {
                  params: {
                    feature: _v35.AnalyticsFeatures.VIDEO_LIBRARY,
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
              }) : _v82(_v0);
            },
            canDelete: _v6,
            onDelete: () => {
              _v62?.(_v0?.name, parseInt(_v0?.uri?.split("/")?.pop() || ""), "sidebar", _v0?.metadata?.connections?.parentFolder.uri, parseInt(_v0?.uri.split("/")?.[2]), _v0.isPrivateToUser, !!_v7, _v19);
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
                    content: (0, _v11.translate)({
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
                onSettingsChange: _v81,
                isEditingFolder: !0,
                initialColor: _v0?.settings?.color
              });
            },
            canMove: _v6,
            onMove: () => {
              _v63({
                activeFolderURI: _v0.uri,
                feature: _v35.AnalyticsFeatures.VIDEO_LIBRARY,
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
              });
            },
            canBulkPrivacyChange: _v7,
            onBulkPrivacyChange: () => {
              _v59({
                userId: _v2,
                folderUris: [_v0.uri],
                folderName: _v0.name,
                location: "side_nav_folder_menu"
              });
            },
            analyticsPageLink: _v5,
            folderLink: _v4,
            onCopyLink: _v20,
            onCopyLinkAsync: _v51 ? () => _v52(_v1, _v4 ?? "", _v20) : void 0,
            onClickAnalyticsLink: () => void 0,
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
              });
            },
            canCreateReviewLink: _v12,
            onCreateReviewLink: () => {
              _v82(_v0, "CREATE_REVIEW_LINK_MODAL");
            },
            canCopyReviewPageLink: _v13,
            reviewPageLink: _v15,
            onCopyReviewPageLink: () => {
              if (_v15) {
                let _v0 = _v0?.reviewLinks?.[0]?.uri;
                _v54(_v0 ? () => _v82(_v0, "CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
              } else _v55(_v1, _v2, _v0?.uri);
            },
            canManageReviewLinks: _v14,
            onManageReviewLinks: () => {
              _v43.canSeeUpsellModalOnShare ? _v67({
                tracking: {
                  params: {
                    feature: _v35.AnalyticsFeatures.VIDEO_LIBRARY,
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
              }) : _v82(_v0, "REVIEW_LINKS_PANEL");
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
            _v12 && _v2?.(), _v70({
              folderUri: _v0?.uri,
              isPrivateToUser: _v0?.isPrivateToUser
            });
          },
          baseUrl: _v1,
          onMoveFolderSuccess: _v17,
          onMoveFolderFailure: _v18,
          uploadClipProperties: _v20
        }, _v0?.uri);
      })
    });
  };
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = () => (0, _v1.jsx)(_v60.Box, {
    padding: `${(0, _v62.rem)(10)} ${(0, _v62.rem)(0)}`,
    children: Array(6).fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v60.Box, {
      display: "grid",
      gridTemplateColumns: `${(0, _v62.rem)(32)} ${_v1 % 2 == 0 ? "50%" : "80%"}`,
      gridGap: (0, _v62.rem)(10),
      padding: `${(0, _v62.rem)(8)} ${(0, _v62.rem)(0)}`,
      children: [(0, _v1.jsx)(_v61.Skeleton, {
        borderRadius: "40%",
        height: (0, _v62.rem)(28),
        width: (0, _v62.rem)(28)
      }), (0, _v1.jsx)(_v61.Skeleton, {
        borderRadius: (0, _v62.rem)(20),
        height: (0, _v62.rem)(28)
      })]
    }, `side-nav-loading-folders-block-${_v1}`))
  });
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ({
    onClick: _v0,
    isPrivateToMe: _v1 = !1
  }) => (0, _v1.jsx)(_v65.Tooltip, {
    label: (0, _v11.translate)({
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
    children: (0, _v1.jsx)(_v64.IconButton, {
      variant: "tertiary",
      icon: (0, _v1.jsx)(_v66.Plus, {}),
      onClick: _v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v0();
      },
      size: "sm",
      "aria-label": (0, _v11.translate)({
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
  });
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = ({
    closeSideNav: _v0,
    isMobile: _v1,
    loadingSideNavFolderURIs: _v2 = new Set(),
    pathname: _v3,
    teamOwnerId: _v4
  }) => {
    let _v5 = (0, _v51.useWayfinderPageName)(),
      _v6 = (0, _v4.useContext)(_v31.ViewerContext),
      _v7 = (0, _v44.useNotification)(),
      {
        notifyItemMoveFailure: _v8,
        notifyItemMoveSuccess: _v9,
        notifyItemMoveToWorkspaceSuccess: _v10
      } = (0, _v44.useNotifications)(),
      {
        revalidateTopLevelFolders: _v11,
        revalidateFolder: _v12,
        revalidateFolderItems: _v13,
        revalidateSetOfFolderItems: _v14,
        revalidateRootItems: _v15
      } = (0, _v45.useRevalidate)(),
      {
        capabilities: _v16,
        ready: _v17
      } = (0, _v9.useCapability)(["canCreateRootFolders", "canSeeUpsellModalOnShare", "hasExtraEmbedOptions", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canPerformBulkTranslations"], _v4),
      _v18 = !!_v16.canGenerateClipTextTranslation,
      _v19 = !!_v16.canGenerateClipTranslation,
      _v20 = (_v19 || _v18) && !!_v16.canPerformBulkTranslations,
      {
        loading: _v21,
        contentSpaceEnabled: _v22
      } = (0, _v8.useContentSpaceEnabled)(_v4),
      {
        listingParams: _v23
      } = (0, _v22.usePrivateToMeFolderListingParams)(_v4),
      _v24 = (0, _v69.useTeamUploadClipProperties)(_v4),
      _v25 = !_v17 || _v21 ? "" : _v22 ? (0, _v11.translate)({
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
      }) : (0, _v11.translate)({
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
      } = (0, _v41.useFolderSettingsModal)(),
      {
        openFolderDefaultsModal: _v27
      } = (0, _v40.useFolderDefaultsModal)(),
      {
        open: _v28,
        close: _v29
      } = (0, _v50.useUpsellModal)(),
      {
        openShareFolderModal: _v30
      } = (0, _v48.useShareFolderModal)(),
      _v31 = (0, _v37.useCopyFolderLinkToast)(),
      {
        isEnabled: _v32,
        copyFolderShareLink: _v33
      } = (0, _v27.useCopyFolderShareLink)(),
      _v34 = (0, _v42.useManageShareActionBuilder)(),
      {
        openDeleteFolderModal: _v35
      } = (0, _v39.useDeleteFolderModal)(),
      {
        openMoveModal: _v36
      } = (0, _v43.useMoveModal)(),
      {
        openSlackIntegrationModal: _v37
      } = (0, _v49.useSlackIntegrationModal)(),
      {
        handleStarMenuState: _v38
      } = (0, _v57.useStarMenuItem)(),
      {
        openBulkAiModal: _v39
      } = (0, _v20.useBulkAiModal)(),
      {
        openBulkPrivacyModal: _v40
      } = (0, _v21.useBulkPrivacyModal)(),
      _v41 = (0, _v68.useRevalidateVideoListCaches)(),
      _v42 = (0, _v29.useCanUpSell)(),
      _v43 = (0, _v46.useReviewLinkCopiedToast)(),
      _v44 = (0, _v38.useCreateAndCopyFolderReviewLink)((0, _v4.useCallback)((_v0, _v1) => {
        _v43(() => _v30?.(_v0, "sidebar", "CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v43, _v30])),
      _v45 = (0, _v52.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        trackLibraryFolderContextMenuActionClicked: _v46,
        trackLibraryFolderOpened: _v47
      } = (0, _v25.useLibraryTracking)(),
      {
        data: _v48,
        size: _v49,
        setSize: _v50,
        error: _v51
      } = (0, _v24.useGetUserProjectsInfinite)(() => !_v4 || _v21 ? null : {
        where: {
          userId: _v4
        },
        select: _v23.LEVEL_FOLDER_FIELDS,
        query: {
          ..._v23,
          perPage: 100,
          topLevelOnly: !0
        }
      }, {
        revalidateOnFocus: !1
      }),
      {
        isLoadingMore: _v52,
        isDone: _v53
      } = (0, _v30.getInfiniteRequestLoadingState)({
        data: _v48,
        error: _v51,
        size: _v49,
        itemsPerPage: 100
      }),
      _v54 = _v48?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data)?.filter(_v0 => !!_v0),
      _v55 = () => {
        _v11(), _v15();
      },
      _v56 = (0, _v4.useCallback)(({
        uri: _v0,
        defaultPanel: _v1,
        editReviewLinkUri: _v2
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
        });else _v30?.(_v0, "sidebar", _v1, _v2);
      }, [_v29, _v30, _v28, _v16.canSeeUpsellModalOnShare]),
      _v57 = (0, _v4.useCallback)(({
        folder: _v0,
        canEditSettings: _v1
      }, _v2 = !0) => {
        _v31({
          isSuccess: _v2,
          onManage: _v34({
            canEdit: _v1,
            entityUri: _v0.uri,
            location: "sidebar",
            panel: "INVITE_PANEL"
          })
        });
      }, [_v31, _v34]),
      _v58 = (0, _v4.useCallback)(() => {
        _v50(_v0 => _v0 + 1);
      }, [_v50]);
    return (0, _v1.jsxs)(_v5.Flex, {
      flexDirection: "column",
      gap: "2px",
      children: [(0, _v1.jsx)(_v14.MenuItem, {
        label: _v25,
        href: `${_v17.Path.TeamLibrary}?library_referrer=sidebar`,
        active: _v3 === _v17.Path.TeamLibrary,
        action: !!_v16.canCreateRootFolders && (0, _v1.jsx)(_v67, {
          onClick: () => {
            _v26({
              userId: _v4,
              parentFolderUri: null,
              currentFolderUri: null,
              location: "sidebar"
            });
          }
        }),
        onClick: () => {
          _v1 && _v0?.();
        }
      }), (0, _v1.jsx)(_v5.Flex, {
        flexDirection: "column",
        gap: "2px",
        "data-id": "library_side_nav_folder_container",
        children: _v54 ? _v54.map(_v0 => {
          let {
              canDelete: _v1,
              canEdit: _v2,
              canEditSettings: _v3,
              canInvite: _v4
            } = (0, _v53.getFolderPermissions)(_v0),
            {
              name: _v5,
              uri: _v6,
              metadata: _v7,
              isPrivateToUser: _v8
            } = _v0,
            _v9 = _v7?.connections?.parentFolder,
            _v10 = parseInt(_v6.split("/")?.[2]),
            _v11 = parseInt(_v6.split("/").pop() ?? ""),
            _v12 = _v0 => _v46({
              isPrivateToUser: _v8,
              libraryFolderId: String(_v11),
              libraryFolderContextMenuAction: _v0
            }),
            _v13 = _v16.hasExtraEmbedOptions && _v3,
            _v14 = _v6?.vimeoHttpsUrl + (0, _v18.getFolderPageUriFromApiUri)(_v6),
            _v15 = _v6?.vimeoHttpsUrl + (0, _v18.getFolderAnalyticsPageUriFromApiUri)(_v6),
            _v16 = !_v16.hasProhibitMultipleReviewLinks && !!_v16.hasMultipleReviewLinks,
            {
              canCreateReviewLink: _v17,
              canCopyReviewPageLink: _v18,
              canManageReviewLinks: _v19,
              reviewPageLink: _v20
            } = (0, _v47.getReviewLinkMenuState)({
              hasReviewLinkCapabilities: _v16,
              hasMultipleReviewLinks: !!_v16.hasMultipleReviewLinks,
              reviewLinks: _v0.reviewLinks,
              canUpsell: _v42,
              getReviewPageUrl: _v0 => (0, _v28.getFolderReviewPageUrl)(_v0, _v11, _v10)
            }),
            _v21 = _v0 ? _v38("folder", _v0) : {
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
                _v5 = "root" === _v0 ? "/library" : (0, _v18.getFolderPageUriFromApiUri)(_v0.uri);
              _v2 && _v3 ? _v10(_v1, {
                label: _v4,
                workspaceName: _v3
              }, () => {
                _v6 && (0, _v70.switchTeam)(_v2, _v6.xsrft).finally(() => {
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
          return (0, _v1.jsx)(_v58, {
            action: (0, _v1.jsx)(_v26.FolderMenu, {
              canTranslateVideos: _v2 && _v20,
              handleTranslateVideo: () => {
                _v12("translate_videos"), _v39({
                  folderId: _v11,
                  isFolder: !0,
                  folderName: _v5,
                  canTranslateText: _v18,
                  canTranslateDubbing: _v19,
                  onComplete: () => {
                    let _v0 = _v6?.teamUser?.ownerId ?? _v6?.user?.id;
                    _v0 && _v45(_v0);
                  }
                });
              },
              placement: "right-start",
              usePortal: !1,
              size: "sm",
              canShare: _v4 || _v16.canSeeUpsellModalOnShare,
              onShare: () => {
                _v12("share"), _v56({
                  uri: _v6,
                  folder: _v0
                });
              },
              canDelete: _v1,
              onDelete: () => {
                _v12("delete"), _v35?.(_v5, _v11, "sidebar", _v9?.uri, _v10, _v8, !!_v22, _v24);
              },
              canEditFolderSettings: _v3,
              onFolderSettings: () => {
                _v12("folder_setting"), _v26({
                  userId: _v10,
                  parentFolderUri: _v9?.uri,
                  currentFolderUri: _v6,
                  location: "sidebar",
                  onSettingsChange: _v55,
                  isEditingFolder: !0,
                  initialColor: _v0?.settings?.color
                });
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
                  feature: _v35.AnalyticsFeatures.VIDEO_LIBRARY,
                  page: _v5,
                  onSave: () => {
                    _v7({
                      content: (0, _v11.translate)({
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
                _v12("move"), _v36({
                  activeFolderURI: _v6,
                  feature: _v35.AnalyticsFeatures.VIDEO_LIBRARY,
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
                });
              },
              canBulkPrivacyChange: _v2,
              onBulkPrivacyChange: () => {
                _v40({
                  userId: _v10,
                  folderUris: [_v6],
                  folderName: _v5,
                  location: "side_nav_folder_menu",
                  onSuccess: () => {
                    _v41();
                  }
                });
              },
              canEdit: _v2,
              analyticsPageLink: _v15,
              folderLink: _v14,
              onCopyLink: _v0 => {
                _v12("copy_link"), _v57({
                  folder: _v0,
                  canEditSettings: _v3
                }, _v0);
              },
              onCopyLinkAsync: _v32 ? () => {
                _v12("copy_link"), _v33(_v11, _v14, _v0 => _v57({
                  folder: _v0,
                  canEditSettings: _v3
                }, _v0));
              } : void 0,
              onClickAnalyticsLink: () => {
                _v12("analytics");
              },
              hasShareUpsell: _v16.canSeeUpsellModalOnShare,
              hasSlackIntegration: !_v0.useParentSlackSettings,
              isConnectedToSlack: !!_v0.slackIncomingWebhooksId,
              onSlackIntegration: () => {
                _v12("connect_to_slack"), _v37({
                  userId: _v10,
                  hasSlackIntegration: !!_v0.slackIncomingWebhooksId,
                  isSlackNotificationEnabled: !!_v0.isSlackNotificationEnabled,
                  folderId: _v11,
                  folderName: _v5,
                  currentFolderUri: _v6,
                  async updateSubFolderData(_v0) {
                    _v12(_v6), _v14(_v0), _v9?.uri ? _v13(_v9.uri) : _v11();
                  }
                });
              },
              onStarClick: _v23 ? () => {
                _v22 || _v12("add_to_starred"), _v23();
              } : void 0,
              canCreateReviewLink: _v17,
              onCreateReviewLink: () => {
                _v12("create_review_link"), _v56({
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
                  _v43(_v0 ? () => _v56({
                    uri: _v6,
                    folder: _v0,
                    defaultPanel: "CREATE_REVIEW_LINK_MODAL",
                    editReviewLinkUri: _v0
                  }) : void 0);
                } else _v44(_v11, _v10, _v6);
              },
              canManageReviewLinks: _v19,
              onManageReviewLinks: () => {
                _v12("manage_review_links"), _v56({
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
              _v1 && _v0?.(), _v47({
                isPrivateToUser: _v8,
                folderUri: _v6
              });
            },
            baseUrl: _v6?.vimeoHttpsUrl,
            onMoveFolderSuccess: _v25,
            onMoveFolderFailure: _v26,
            teamOwnerId: _v4,
            uploadClipProperties: _v24
          }, _v0.uri);
        }) : (0, _v1.jsx)(_v63, {})
      }), !!_v48 && !_v53 && !_v52 && (0, _v1.jsx)(_v59.InfiniteLoadingZone, {
        onVisible: _v58,
        "data-testid": "infinite-loading-zone"
      }, `folders-loading-zone-${_v54?.length}`), !!(_v48 && _v52) && (0, _v1.jsx)(_v19.Spinner, {
        size: "sm",
        marginTop: "1rem",
        marginLeft: "2.75rem"
      })]
    });
  };
  var _v72 = _v0.i(0);
  let _v73 = ({
      closeSideNav: _v0,
      hasContentSpaceEnabled: _v1,
      isMobile: _v2,
      label: _v3,
      loadingSideNavFolderURIs: _v4 = new Set(),
      teamOwnerId: _v5
    }) => {
      let [_v6, _v7] = (0, _v4.useState)(!0),
        {
          openFolderSettingsModal: _v8
        } = (0, _v41.useFolderSettingsModal)(),
        {
          trackLibraryFolderOpened: _v9
        } = (0, _v25.useLibraryTracking)(),
        {
          data: _v10
        } = (0, _v72.useGetUserFoldersPrivateToMe)({
          where: {
            ownerId: _v5
          },
          select: ["name", "isPinned", "hasSubfolder", "isPrivateToUser", "metadata.connections.folders.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "metadata.interactions.addSubfolder.canAddSubfolders", "privacy.view", "uri"]
        }),
        _v11 = _v10?.metadata.interactions.addSubfolder.canAddSubfolders;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v10 ? (0, _v1.jsx)(_v58, {
          hasSubfolders: _v10.hasSubfolder,
          action: _v11 && (0, _v1.jsx)(_v67, {
            onClick: () => {
              _v8({
                userId: _v5,
                parentFolderUri: null,
                currentFolderUri: _v10.uri,
                location: "sidebar"
              });
            },
            isPrivateToMe: !0
          }),
          closeSideNav: _v0,
          label: _v3,
          isMobile: _v2,
          isOpen: _v6,
          onClick: () => {
            _v6 || _v7(!0), _v2 && _v0?.(), _v9({
              folderUri: _v10?.uri,
              isPrivateToUser: !0
            });
          },
          onClickToggle: () => {
            _v7(!_v6);
          },
          hasContentSpaceEnabled: _v1,
          uri: _v10.uri,
          dropTarget: _v10,
          loadingSideNavFolderURIs: _v4
        }, "private_to_me") : (0, _v1.jsx)(_v63, {})
      });
    },
    _v74 = ({
      hideBackToHome: _v0 = !1
    }) => {
      let _v1,
        _v2,
        {
          loadingSideNavFolderURIs: _v3,
          setIsSideNavOpen: _v4,
          teamOwnerId: _v5
        } = (0, _v4.useContext)(_v15.VideoLibraryLayoutContext),
        _v6 = () => _v4(!1),
        {
          capabilities: _v7
        } = (0, _v9.useCapability)(["hasSharedWithMe"], _v5),
        {
          contentSpaceEnabled: _v8,
          notTeamGatedContentSpaceEnabled: _v9,
          loading: _v10
        } = (0, _v8.useContentSpaceEnabled)(_v5),
        _v11 = (0, _v3.useRouter)(),
        _v12 = (0, _v16.useIsPrivateFolder)(),
        [_v13, _v14] = (0, _v4.useState)(!0 === _v12),
        [_v15, _v16] = (0, _v4.useState)(!1 === _v12),
        _v17 = (0, _v12.useWindowSize)().width <= _v13.BreakPoints.sm,
        _v18 = (_v1 = _v17.Path.SharedWithMe, _v11.pathname === _v1),
        _v19 = (_v2 = _v17.Path.MVV, _v11.pathname === _v2) ? (0, _v18.getFolderIdFromFolderUri)(_v11.asPath) : 0,
        {
          data: _v20,
          isLoading: _v21,
          error: _v22
        } = (0, _v10.useGetUserProject)(() => _v5 && _v19 ? {
          where: {
            userId: _v5,
            projectId: _v19
          },
          select: _v17.GET_USER_PROJECT_API_FIELDS
        } : null),
        _v23 = _v20?.metadata?.connections?.ancestorPath ?? [],
        _v24 = _v23.length > 0 ? _v23[_v23.length - 1] : null,
        _v25 = !_v21 && !_v22 && _v24?.name === _v17.SHARED_WITH_ME_DIR_NAME,
        _v26 = _v7.hasSharedWithMe && (_v18 || _v25);
      (0, _v4.useEffect)(() => {
        (void 0 !== _v12 || _v11.pathname === _v17.Path.TeamLibrary) && (!0 === _v12 ? (_v14(!0), _v16(!1)) : (_v16(!0), _v14(!1)));
      }, [_v12, _v11.pathname]);
      let _v27 = !_v10 && _v9 && !_v8,
        _v28 = _v13 || _v15 || _v11.pathname === _v17.Path.TeamLibrary;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          paddingBottom: "8px",
          gap: "2px",
          children: [!_v0 && (0, _v1.jsx)(_v14.MenuItem, {
            label: (0, _v11.translate)({
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
            icon: (0, _v1.jsx)(_v6.ArrowLeft, {
              width: 25,
              height: 25
            }),
            href: _v17.Path.Home
          }), _v26 ? (0, _v1.jsx)(_v14.MenuItem, {
            icon: (0, _v1.jsx)(_v7.UsersFilled, {}),
            iconSize: "xs",
            label: _v17.SHARED_WITH_ME_DIR_NAME,
            href: _v17.Path.SharedWithMe,
            active: !0,
            dataId: "side_nav_shared_with_me",
            onClick: () => void 0
          }) : (0, _v1.jsx)(_v1.Fragment, {
            children: _v28 ? _v27 || !_v13 || _v10 ? (0, _v1.jsx)(_v71, {
              closeSideNav: _v6,
              isMobile: _v17,
              loadingSideNavFolderURIs: _v3,
              pathname: _v11.pathname,
              teamOwnerId: _v5
            }) : (0, _v1.jsx)(_v73, {
              closeSideNav: _v6,
              hasContentSpaceEnabled: _v8,
              isMobile: _v17,
              label: (0, _v11.translate)({
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
            }) : (0, _v1.jsx)(_v63, {})
          })]
        })
      });
    };
  _v0.s(["LibrarySideNavContent", 0, _v74], 0);
  var _v75 = _v0.i(0);
  _v0.s(["SideNavContent", 0, ({
    surface: _v0
  }) => {
    let _v1 = (0, _v2.useSideNavCollapsed)();
    return "home" === _v0 ? (0, _v1.jsx)(_v75.HomePrimaryNavbar, {
      variant: _v1 ? "icons" : "full"
    }) : (0, _v1.jsx)(_v74, {
      hideBackToHome: !0
    });
  }], 0);
}