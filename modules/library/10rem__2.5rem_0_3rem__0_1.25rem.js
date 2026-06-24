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
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = ({
      layout: _v0,
      isLoading: _v1,
      onLoadMore: _v2
    }) => {
      let _v3 = (0, _v5.useRef)(null),
        _v4 = (0, _v81.useOnScreen)(_v3);
      return ((0, _v5.useEffect)(() => {
        _v4 && !_v1 && _v2();
      }, [_v1, _v4, _v2]), _v0 === _v51.LAYOUT.LIST) ? (0, _v1.jsx)(_v78.Box, {
        height: "10rem",
        ref: _v3,
        children: (0, _v1.jsx)(_v80.LoadingStateList, {})
      }) : (0, _v1.jsx)(_v78.Box, {
        height: "10rem",
        ref: _v3
      });
    },
    _v83 = _v0 => {
      let {
        layout: _v1,
        isLoadingMore: _v2,
        canLoadMore: _v3 = !1,
        onActivate: _v4,
        isDropzoneEnabled: _v5 = !1,
        page: _v6 = ""
      } = _v0;
      return _v3 ? (0, _v1.jsx)(_v82, {
        layout: _v1,
        isLoading: _v2,
        onLoadMore: _v4
      }) : _v5 && !_v2 ? (0, _v1.jsx)(_v79.UploadDropzoneHint, {
        page: _v6
      }) : (0, _v1.jsx)(_v78.Box, {
        margin: "2.5rem 0 3rem",
        padding: "0 1.25rem"
      });
    };
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = (0, _v89.default)(() => _v0.A(0).then(_v0 => _v0.FolderSettingsModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v92 = (0, _v5.createContext)({
      setModalContextState: () => console.log("noop")
    }),
    _v93 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v5.useState)({
          activeModal: null,
          activeModalState: null
        }),
        _v3 = (0, _v5.useContext)(_v90.ViewerContext),
        _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
        {
          activeModal: _v5,
          activeModalState: _v6
        } = _v1;
      return (0, _v1.jsxs)(_v92.Provider, {
        value: {
          setModalContextState: _v2
        },
        children: [_v0, "FolderSettings" === _v5 && _v4 && (0, _v1.jsx)(_v91, {
          closeModal: () => _v2({
            activeModal: null,
            activeModalState: null
          }),
          currentFolderUri: null,
          isOpen: !0,
          location: _v6.location,
          parentFolderUri: null,
          userId: _v4
        })]
      });
    },
    _v94 = (0, _v5.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v95 = ({
      owner: _v0,
      set360SourceType: _v1,
      threeSixtyType: _v2
    }) => {
      let {
          setModalContextState: _v3
        } = (0, _v5.useContext)(_v92),
        _v4 = (0, _v87.useTeamUploadClipProperties)(_v0.id);
      return (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v5.Suspense, {
          fallback: (0, _v1.jsx)(_v78.Box, {
            paddingTop: "25vh",
            children: (0, _v1.jsx)(_v85.Spinner, {
              size: "xl"
            })
          }),
          children: (0, _v1.jsxs)(_v78.Box, {
            maxWidth: "100%",
            width: "100%",
            children: [(0, _v1.jsx)(_v94, {
              uploadClipProperties: _v4,
              uploadType: "UPLOAD",
              owner: _v0,
              selectedFolderId: null,
              selectedFolder: null,
              libraryEmptyStateContent: (0, _v1.jsxs)(_v7.Flex, {
                flexDirection: "column",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v10.TeamLibrary, {
                  width: (0, _v84.rem)(64),
                  height: (0, _v84.rem)(64)
                }), (0, _v1.jsx)(_v86.Text, {
                  variant: "heading-lg",
                  margin: `${(0, _v84.rem)(16)} 0`,
                  children: (0, _v20.translate)({
                    singular: "Add content to share with your team",
                    dictionary: {
                      es: {
                        singular: "Agregue contenido para compartirlo con su equipo"
                      },
                      "de-DE": {
                        singular: "Fügen Sie Inhalte hinzu, um sie mit Ihrem Team zu teilen"
                      },
                      "fr-FR": {
                        singular: "Ajoutez du contenu afin de le partager avec votre équipe"
                      },
                      "ja-JP": {
                        singular: "チームで共有するコンテンツを追加"
                      },
                      "ko-KR": {
                        singular: "팀과 공유할 콘텐츠를 추가하세요."
                      },
                      "pt-BR": {
                        singular: "Adicione conteúdo para compartilhar com sua equipe"
                      },
                      "zh-CN": {
                        singular: "添加内容以与团队共享"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v78.Box, {
                  width: "65%",
                  children: (0, _v1.jsx)(_v86.Text, {
                    variant: "body-lg",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v20.translate)({
                      singular: "Create a folder or drop videos to upload",
                      dictionary: {
                        es: {
                          singular: "Cree una carpeta o suelte los videos para subirlos"
                        },
                        "de-DE": {
                          singular: "Erstellen Sie einen Ordner oder ziehen Sie Videos zum Hochladen hierher"
                        },
                        "fr-FR": {
                          singular: "Créez un dossier ou glissez-déposez des vidéos pour les mettre en ligne"
                        },
                        "ja-JP": {
                          singular: "フォルダーを作成するか動画をドロップしてアップロード"
                        },
                        "ko-KR": {
                          singular: "폴더를 만들거나 업로드할 동영상을 끌어다 놓으세요."
                        },
                        "pt-BR": {
                          singular: "Crie uma pasta ou carregue um vídeo"
                        },
                        "zh-CN": {
                          singular: "创建文件夹或拖放视频以上传"
                        }
                      }
                    })
                  })
                })]
              }),
              onNewFolderOpen: () => {
                _v3({
                  activeModal: "FolderSettings",
                  activeModalState: {
                    location: "empty_state"
                  }
                });
              }
            }), (0, _v1.jsx)(_v88.EmptyStateDropzoneFooter, {
              set360SourceType: _v1,
              threeSixtyType: _v2
            })]
          })
        })
      });
    };
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0);
  let _v98 = ({
    cta: _v0,
    header: _v1,
    icon: _v2,
    subheader: _v3
  }) => (0, _v1.jsxs)(_v7.Flex, {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    children: [_v2, (0, _v1.jsxs)(_v7.Flex, {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      margin: `${(0, _v84.rem)(16)} 0`,
      gap: "md",
      children: ["string" == typeof _v1 ? (0, _v1.jsx)(_v96.Header, {
        size: "lg",
        children: _v1
      }) : _v1, "string" == typeof _v3 ? (0, _v1.jsx)(_v97.Paragraph, {
        size: "lg",
        color: "text-secondary",
        marginBottom: "0",
        children: _v3
      }) : _v3]
    }), _v0]
  });
  _v98.SubheaderText = ({
    children: _v0
  }) => (0, _v1.jsx)(_v97.Paragraph, {
    size: "lg",
    color: "text-secondary",
    marginBottom: "0",
    children: _v0
  });
  let _v99 = ({
    isContributor: _v0 = !1
  }) => (0, _v1.jsx)(_v98, {
    header: (0, _v20.translate)({
      singular: "This space is empty",
      dictionary: {
        es: {
          singular: "Este espacio está vacío"
        },
        "de-DE": {
          singular: "Dieser Bereich ist leer"
        },
        "fr-FR": {
          singular: "Cet espace est vide"
        },
        "ja-JP": {
          singular: "このスペースは空です"
        },
        "ko-KR": {
          singular: "이 공간은 비어 있습니다."
        },
        "pt-BR": {
          singular: "Este espaço está vazio"
        },
        "zh-CN": {
          singular: "这个空间是空的"
        }
      }
    }),
    icon: (0, _v1.jsx)(_v10.TeamLibrary, {
      width: "64px",
      height: "64px"
    }),
    subheader: _v0 ? (0, _v20.translate)({
      singular: "Trying to add team content? Upload to My library and share with an admin.",
      dictionary: {
        es: {
          singular: "¿Intenta agregar contenido del equipo? Súbalo a Mi biblioteca y compártalo con un administrador."
        },
        "de-DE": {
          singular: "Versuchen Sie, Teaminhalte hinzuzufügen? In „Meine Bibliothek“ hochladen und mit einem Administrator teilen."
        },
        "fr-FR": {
          singular: "Vous essayez d'ajouter du contenu concernant votre équipe ? Téléchargez-le dans Ma bibliothèque et partagez-le avec un administrateur."
        },
        "ja-JP": {
          singular: "チームコンテンツを追加しようとしていますか？マイライブラリにアップロードして、管理者と共有してください。"
        },
        "ko-KR": {
          singular: "팀 콘텐츠를 추가하려 하시나요? 내 라이브러리에 업로드하고 관리자와 공유하세요."
        },
        "pt-BR": {
          singular: "Tentando adicionar conteúdo para a equipe? Carregue em Minha biblioteca e compartilhe com um administrador."
        },
        "zh-CN": {
          singular: "尝试添加团队内容？上传到我的视频库并与管理员共享。"
        }
      }
    }) : (0, _v20.translate)({
      singular: "No team content has been added yet",
      dictionary: {
        es: {
          singular: "Aún no se ha agregado ningún contenido del equipo"
        },
        "de-DE": {
          singular: "Es wurden noch keine Teaminhalte hinzugefügt"
        },
        "fr-FR": {
          singular: "Aucun contenu d'équipe n'a été ajouté"
        },
        "ja-JP": {
          singular: "チームコンテンツはまだ追加されていません"
        },
        "ko-KR": {
          singular: "아직 팀 콘텐츠가 추가되지 않았습니다."
        },
        "pt-BR": {
          singular: "Nenhum conteúdo de equipe foi adicionado ainda"
        },
        "zh-CN": {
          singular: "尚未添加团队内容"
        }
      }
    })
  });
  var _v100 = _v0.i(0);
  let _v101 = () => {
    let {
        setModalContextState: _v0
      } = (0, _v5.useContext)(_v92),
      _v1 = (0, _v5.useContext)(_v90.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        capabilities: _v3
      } = (0, _v16.useCapability)(["hasContentSpaceEnabled"], _v2),
      {
        trackLibraryNewFolderClicked: _v4
      } = (0, _v26.useLibraryTracking)();
    return (0, _v1.jsx)(_v100.NewFolderButton, {
      onClick: () => {
        _v4({
          libraryType: (0, _v27.deriveLibraryType)({
            hasContentSpaceEnabled: !!_v3.hasContentSpaceEnabled
          })
        }), _v0({
          activeModal: "FolderSettings",
          activeModalState: {
            location: "library_header"
          }
        });
      },
      dataTestId: "library-header-new-folder-button",
      dataTestIdMobile: "library-header-new-folder-button-mobile",
      dataId: "vl_library-header-new-folder-button",
      dataIdMobile: "vl_library-header-new-folder-button-mobile"
    });
  };
  var _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0);
  let _v127 = "header",
    _v128 = "video card",
    _v129 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      isEnterprise: _v2,
      items: _v3,
      libraryTitle: _v4,
      loadingFolderURIs: _v5 = new Set(),
      onCopyVideo: _v6,
      onFolderSettingsChange: _v7,
      onMoreInfo: _v8,
      onMoveFolderSuccess: _v9,
      onMoveFolderFailure: _v10,
      removeItem: _v11,
      selectedItemURIs: _v12,
      selectItem: _v13,
      setIsUploadDropzoneEnabled: _v14,
      sort: _v15,
      isLoading: _v16 = !1
    }) => {
      let _v17 = (0, _v109.useIsBokeh)(),
        _v18 = (0, _v5.useContext)(_v90.ViewerContext),
        {
          notifyItemMoveSuccess: _v19,
          notifyItemMoveToWorkspaceSuccess: _v20
        } = (0, _v46.useNotifications)(),
        _v21 = (0, _v34.useAnalyticsEvent)(),
        _v22 = _v111.BPAnalyticsV2.useContentManagamentHoverEvent(),
        _v23 = (0, _v114.usePageName)(),
        {
          getDisplayDateWithTime: _v24
        } = (0, _v121.useFormatDateTime)(),
        _v25 = (0, _v124.useVideoPrivacyBadgeHandlers)({
          surface: "card"
        }),
        _v26 = _v18?.teamUser?.ownerId ?? _v18?.user?.id,
        _v27 = (0, _v87.useTeamUploadClipProperties)(_v26),
        {
          capabilities: _v28
        } = (0, _v16.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasContentSpaceEnabled"], _v26),
        _v29 = (0, _v27.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v28.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v30
        } = (0, _v26.useLibraryTracking)(),
        _v31 = !!_v28.canSeeUpsellModalOnShare,
        _v32 = !!_v28.hasVideoReviewPageDemo,
        _v33 = !!_v28.hasMultipleReviewLinks;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!!_v3?.length && _v3.map((_v0, _v1) => {
          if (_v0.video) {
            let _v0 = _v0.video,
              _v1 = _v0.isSelected,
              _v2 = !!_v0.metadata?.interactions?.edit?.uri,
              _v3 = _v0.isColdStorage ?? !1,
              _v4 = !!_v0.canMoveToProject && !_v3,
              _v5 = _v3 ? "" : _v2 ? _v0.manageLink : _v0.link,
              _v6 = (0, _v117.getTimestampBySort)(_v15.type, _v0.lastUserActionEventDate ?? "", _v0.createdTime),
              {
                videoPrivacy: _v7,
                variant: _v8,
                onPrivacyBadgeClick: _v9,
                openLockedVideoPaywall: _v10,
                tooltipLabel: _v11
              } = _v25(_v0);
            return (0, _v1.jsx)(_v105.AnalyticsEventProvider, {
              eventData: {
                location: _v128,
                video_privacy: _v0.privacy?.view,
                video_id: String((0, _v113.idFromUri)(_v0.uri)),
                video_app_id: (0, _v113.idFromUri)(_v0.app?.uri) ? String((0, _v113.idFromUri)(_v0.app?.uri)) : null,
                is_video_password_protected: !!_v0.password,
                video_embed_privacy: _v0.privacy?.embed,
                team_owner_id: String((0, _v113.idFromUri)(_v0.user.uri)),
                team_subscription_type: _v0.user.account
              },
              children: (0, _v1.jsx)(_v115.FolderItemDragWrapper, {
                type: _v104.ITEM_TYPES.ROOT_VIDEO,
                uri: _v0.uri,
                parentFolderUri: "root",
                thumbnail: _v0.pictures.sizes[1].link,
                canDrag: _v4,
                isSelected: !!_v1,
                selectedItemURIs: _v12,
                onDrop: _v1,
                setIsUploadDropzoneEnabled: _v14,
                children: (0, _v1.jsx)(_v123.VideoCard, {
                  title: _v0.name,
                  subtitle: _v24(_v6),
                  href: _v5 ?? "",
                  isDefaultPicture: _v0.pictures?.defaultPicture,
                  thumbnailSrc: _v0.pictures?.sizes[3].link,
                  avatarSrc: _v0.uploader?.pictures?.sizes[1].link,
                  avatarName: _v0.uploader?.name,
                  tagText: (0, _v110.secondsToDisplay)(_v0.duration),
                  isSelectable: _v0.isSelectable,
                  titleStyles: {
                    maxWidth: _v51.CONTENT_CARD_TITLE_MAX_WIDTH
                  },
                  isSelected: _v1,
                  configUrl: _v0.configUrl ?? "",
                  clipId: (0, _v113.idFromUri)(_v0?.uri),
                  pageName: _v23,
                  isColdStorage: _v3,
                  lockedTooltipLabel: _v125.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
                  onLockedClick: _v3 ? _v10 : void 0,
                  onToggleSelected: () => {
                    _v21((0, _v74.genericClick)({
                      copy: `${_v12.size}`,
                      feature: _v74.AnalyticsFeatures.VIDEO_LIBRARY,
                      location: "video_card",
                      name: "select_item",
                      page: _v23,
                      target: _v0.isSelected ? "de-selected" : "selected",
                      type: "general",
                      target_path: null,
                      click_type: null,
                      device_type: null
                    }, 91)), _v0.isSelected ? _v0(_v0.uri, _v1, _v3) : _v13(_v0.uri, _v1, _v3);
                  },
                  hoverActions: (0, _v1.jsx)(_v120.HoverActions, {
                    type: "video",
                    entity: _v0,
                    canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v31),
                    hasMoreInfo: !0,
                    onMoreInfo: () => _v8(_v0.uri)
                  }),
                  actionsMenu: (0, _v1.jsx)(_v118.VideoMenu, {
                    video: _v0,
                    feature: _v74.AnalyticsFeatures.VIDEO_LIBRARY,
                    onCopyVideo: _v6 ? () => _v6(_v0) : void 0,
                    onMoreInfo: () => _v8(_v0.uri),
                    onMoveSuccess: ({
                      selectedDestination: _v0,
                      video: _v1,
                      destinationWorkspaceId: _v2,
                      destinationWorkspaceName: _v3
                    }) => {
                      if (_v0(_v1.uri, _v1, _v3), _v11?.(_v1.uri, "video"), _v2 && _v3) {
                        let _v0 = "root" === _v0 ? _v4 : _v0.name,
                          _v1 = "root" === _v0 ? "/library" : (0, _v71.getFolderPageUriFromApiUri)(_v0.uri);
                        _v20(_v1.name, {
                          label: _v0,
                          workspaceName: _v3
                        }, () => {
                          _v18 && (0, _v102.switchTeam)(_v2, _v18.xsrft).finally(() => {
                            window.location.href = _v1;
                          });
                        });
                      } else "root" !== _v0 && _v19(_v1.name, {
                        label: _v0.name,
                        link: (0, _v71.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    },
                    onDelete: () => {
                      _v0(_v0.uri, _v1, _v3), _v11?.(_v0.uri, "video"), _v21(_v74.VideoActionAnalytics.clickDeleteVideo({
                        live_event_id: null,
                        origin_folder_id: null,
                        origin_type: null,
                        is_my_videos: null,
                        location: _v128
                      }));
                    },
                    analytics: {
                      location: "card",
                      element: "ellipses"
                    },
                    vimeoClickAnalytics: {
                      location: "video_card"
                    },
                    hasMoreInfo: !0,
                    hasReviewPageLinkUpsell: _v32,
                    hasUpsellInShareModal: _v31,
                    hasMultipleReviewLinks: _v33
                  }),
                  onClick: () => {
                    _v107.BigPictureClient.sendEvent(new _v107.Event("vimeo.click_video_card", 2, {
                      path: window.location.href,
                      entry_page: "team-library",
                      page: "team-library",
                      location: _v128,
                      video_id: String((0, _v113.idFromUri)(_v0.uri)),
                      video_privacy: _v0.privacy?.view,
                      video_embed_privacy: _v0.privacy?.embed,
                      is_preset_applied: null,
                      is_video_password_protected: !!_v0.password,
                      video_app_id: (0, _v113.idFromUri)(_v0.app?.uri) ? String((0, _v113.idFromUri)(_v0.app?.uri)) : null,
                      team_owner_id: String((0, _v113.idFromUri)(_v0.user.uri)),
                      team_size: _v18?.teamUser?.currentTeamSize ?? null,
                      team_subscription_type: _v18?.teamUser?.accountType ?? null,
                      actor_team_role: _v18?.teamUser?.plainTextPermissionLevel ?? null,
                      product: "Video Library",
                      video_type: null,
                      actor_resource_role: null,
                      target: null,
                      position_row: null,
                      position_column: null,
                      layout: "grid"
                    }));
                  },
                  onMouseEnter: () => {
                    _v22({
                      entityType: "video",
                      pageName: "video_library"
                    });
                  },
                  videoPrivacy: _v7,
                  privacyBadgeVariant: _v8,
                  privacyBadgeTooltip: _v11,
                  onPrivacyBadgeClick: _v9
                })
              })
            }, _v0.uri);
          }
          if (_v0.folder) {
            let _v0 = parseInt(_v0.folder.uri.split("/")?.[2]),
              _v1 = parseInt(_v0.folder.uri.split("/")[4]),
              _v2 = _v15.type === _v51.SORT_OPTION.CREATED ? _v0.folder.createdTime : _v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime;
            return (0, _v1.jsx)(_v116.FolderDropWrapper, {
              dropTarget: _v0.folder,
              dropTargetType: _v104.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v104.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: null != _v26 ? {
                targetUserId: _v26,
                folderId: _v1,
                folderName: _v0.folder.name,
                uploadClipProperties: _v27
              } : void 0,
              children: _v17 ? (0, _v1.jsx)(_v122.DroppableFolderCard, {
                title: _v0.folder?.name,
                subtitle: _v24(_v2),
                folderId: _v1,
                folderOwnerId: _v0,
                tagText: (0, _v126.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
                titleStyles: {
                  maxWidth: _v51.CONTENT_CARD_TITLE_MAX_WIDTH
                },
                href: (0, _v71.getFolderPageUriFromApiUri)(_v0.folder.uri),
                backgroundColor: _v0.folder.settings?.color,
                hoverActions: (0, _v1.jsx)(_v120.HoverActions, {
                  type: "folder",
                  entity: _v0.folder
                }),
                pageName: _v23,
                actionsMenu: (0, _v1.jsx)(_v119.FolderMenu, {
                  folder: _v0.folder,
                  onSettingsChange: _v7,
                  onMoveSuccess: _v9,
                  onMoveFailure: _v10,
                  analytics: {
                    product: "Workflow",
                    feature: "video_library",
                    location: "folder_card"
                  },
                  libraryType: _v29
                }),
                onClick: () => {
                  _v107.BigPictureClient.sendEvent(new _v107.Event("vimeo.click_folder_card", 3, {
                    path: window.location.href,
                    entry_page: "team-library",
                    page: "team-library",
                    location: "folder card",
                    team_owner_id: String(_v0),
                    team_size: _v18?.teamUser?.currentTeamSize ?? null,
                    team_subscription_type: _v18?.teamUser?.accountType ?? null,
                    actor_team_role: _v18?.teamUser?.plainTextPermissionLevel ?? null,
                    product: "Video Library",
                    actor_resource_role: null,
                    folder_id: _v0.folder?.uri.split("/").pop() ?? null,
                    is_subfolder: null,
                    folder_share_status: null,
                    is_private_to_me: null,
                    parent_folder_id: null,
                    position_row: null,
                    position_column: null,
                    customizations: null,
                    layout: "grid"
                  })), _v30({
                    folderUri: _v0.folder?.uri,
                    isPrivateToUser: _v0.folder?.isPrivateToUser
                  });
                },
                onMouseEnter: () => {
                  _v22({
                    entityType: "folder",
                    pageName: "video_library"
                  });
                }
              }) : (0, _v1.jsx)(_v112.FolderCard, {
                id: `folder-card-${_v0.folder.uri?.split("/")?.pop()}`,
                folderOwnerId: _v0,
                onSettingsChange: _v7,
                isLoading: !!_v5 && _v5.has(_v0.folder.uri),
                headerSize: "6",
                subheaderSize: 100,
                baseUrl: _v18?.vimeoHttpsUrl || "",
                isEnterprise: _v2,
                ..._v0.folder
              }, _v0.folder.uri)
            }, _v0.folder.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }), _v16 && (0, _v1.jsx)(_v108.LoadingCardsGrid, {})]
      });
    };
  function _v130({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    isEnterprise: _v2,
    items: _v3 = [],
    libraryTitle: _v4,
    loadingFolderURIs: _v5 = new Set(),
    onCopyVideo: _v6,
    onMoreInfo: _v7,
    onFolderSettingsChange: _v8,
    onMoveFolderSuccess: _v9,
    onMoveFolderFailure: _v10,
    removeItem: _v11,
    selectedItemURIs: _v12,
    selectItem: _v13,
    setIsUploadDropzoneEnabled: _v14,
    sort: _v15,
    isLoading: _v16 = !1
  }) {
    return (0, _v1.jsx)(_v105.AnalyticsEventProvider, {
      eventData: {
        location: "center",
        product: "Video Library",
        position_column: null
      },
      children: (0, _v1.jsx)(_v106.ContentGrid, {
        children: (0, _v1.jsx)(_v106.ContentGrid.Body, {
          children: (0, _v1.jsx)(_v129, {
            deselectItem: _v0,
            handleMoveItemsOnDrop: _v1,
            loadingFolderURIs: _v5,
            isEnterprise: _v2,
            items: _v3,
            libraryTitle: _v4,
            onCopyVideo: _v6,
            onFolderSettingsChange: _v8,
            onMoreInfo: _v7,
            onMoveFolderSuccess: _v9,
            onMoveFolderFailure: _v10,
            removeItem: _v11,
            selectedItemURIs: _v12,
            selectItem: _v13,
            setIsUploadDropzoneEnabled: _v14,
            sort: _v15,
            isLoading: _v16
          })
        })
      })
    });
  }
  var _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0);
  let _v141 = ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.createdTime", "video.customMetadata", "video.duration", "video.download.link", "video.download.type", "video.download.width", "video.download.height", "video.download.quality", "video.download.size", "video.download.publicName", "video.download.sizeShort", "video.embed.html", "video.embed.sentimentWidgets", "video.filesSize", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.add", "video.privacy.comments", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.reviewPage", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "folder.createdTime", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.name", "folder.uri", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.slackIncomingWebhooksId", "type"],
    _v142 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v3,
      hasMultipleReviewLinks: _v4,
      items: _v5,
      libraryTitle: _v6,
      loadingFolderURIs: _v7,
      onCopyVideo: _v8,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      removeItem: _v11,
      selectedItemURIs: _v12,
      selectItem: _v13,
      setIsUploadDropzoneEnabled: _v14,
      shouldShowPrivacy: _v15 = !1,
      shouldShowFileSize: _v16 = !1,
      sort: _v17
    }) => {
      let {
          notifyItemMoveSuccess: _v18,
          notifyItemMoveToWorkspaceSuccess: _v19
        } = (0, _v46.useNotifications)(),
        _v20 = (0, _v34.useAnalyticsEvent)(),
        _v21 = (0, _v114.usePageName)(),
        {
          getDisplayDateWithTime: _v22
        } = (0, _v121.useFormatDateTime)(),
        _v23 = (0, _v5.useContext)(_v90.ViewerContext),
        {
          settings: _v24
        } = (0, _v23.useOrionSettings)(),
        _v25 = (0, _v124.useVideoPrivacyBadgeHandlers)({
          surface: "list"
        }),
        _v26 = _v23?.teamUser?.ownerId ?? _v23?.user?.id,
        {
          capabilities: _v27
        } = (0, _v16.useCapability)(["hasContentSpaceEnabled"], _v26),
        _v28 = (0, _v27.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v27.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v29
        } = (0, _v26.useLibraryTracking)(),
        _v30 = (0, _v87.useTeamUploadClipProperties)(_v26);
      return (0, _v1.jsx)(_v78.Box, {
        children: _v5?.length ? _v5?.map((_v0, _v1) => {
          if (_v0.video) {
            let {
                video: _v0
              } = _v0,
              {
                duration: _v1,
                link: _v2,
                name: _v3,
                pictures: _v4,
                manageLink: _v5,
                uri: _v6,
                filesSize: _v7
              } = _v0,
              _v8 = _v17.type === _v51.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v9 = _v7 && _v7.totalSize > 0 ? (0, _v133.bytesToSize)(_v7.totalSize, 1) : "0MB",
              _v10 = (0, _v138.getFileSizeTooltip)(_v7?.fileSizeType),
              _v11 = _v4?.sizes[3].link,
              _v12 = _v0.isColdStorage ?? !1,
              _v13 = !!_v0.canMoveToProject && !_v12,
              {
                videoPrivacy: _v14,
                variant: _v15,
                onPrivacyBadgeClick: _v16,
                openLockedVideoPaywall: _v17,
                tooltipLabel: _v18
              } = _v25(_v0);
            return (0, _v1.jsx)(_v139.DraggableListVideo, {
              uri: _v6,
              title: _v3,
              clipId: (0, _v113.idFromUri)(_v6),
              canRename: !0,
              thumbnail: (0, _v1.jsx)(_v132.VideoThumbnail, {
                alt: _v3,
                badgeText: (0, _v110.secondsToDisplay)(_v1),
                isDefaultPicture: _v4?.defaultPicture,
                thumbnailSrc: _v11,
                isLocked: _v12
              }),
              thumbnailSrc: _v11,
              timestamp: _v22(_v8),
              privacy: _v15 ? (0, _v1.jsx)(_v131.ContentCard.VideoPrivacyBadge, {
                videoPrivacy: _v14,
                variant: _v15,
                layout: "inline",
                onClick: _v16,
                tooltipLabel: _v18,
                isDimmed: _v12
              }) : "",
              href: _v12 ? "" : _v5 ?? _v2,
              isLocked: _v12,
              isSelectable: _v0.isSelectable,
              isSelected: _v0.isSelected,
              lockedTooltipLabel: _v125.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v12 ? _v17 : void 0,
              pageName: _v21,
              onClick: () => {
                _v107.BigPictureClient.sendEvent(new _v107.Event("vimeo.click_video_card", 2, {
                  path: window.location.href,
                  entry_page: "team-library",
                  page: "team-library",
                  location: _v74.AnalyticsLocations.VIDEO_LIST,
                  video_id: String((0, _v113.idFromUri)(_v0.uri)),
                  video_privacy: _v0.privacy?.view,
                  video_embed_privacy: _v0.privacy?.embed,
                  is_preset_applied: null,
                  is_video_password_protected: !!_v0.password,
                  video_app_id: (0, _v113.idFromUri)(_v0.app?.uri) ? String((0, _v113.idFromUri)(_v0.app?.uri)) : null,
                  team_owner_id: String((0, _v113.idFromUri)(_v0.user.uri)),
                  team_size: _v23?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v23?.teamUser?.accountType ?? null,
                  actor_team_role: _v23?.teamUser?.plainTextPermissionLevel ?? null,
                  product: "Video Library",
                  video_type: null,
                  actor_resource_role: null,
                  target: null,
                  position_row: null,
                  position_column: null,
                  layout: "list"
                }));
              },
              onToggleSelected: () => {
                _v20((0, _v74.genericClick)({
                  copy: `${_v12.size}`,
                  feature: _v74.AnalyticsFeatures.VIDEO_LIBRARY,
                  location: _v74.AnalyticsLocations.VIDEO_LIST,
                  name: "select_item",
                  page: _v21,
                  target: _v0.isSelected ? "de-selected" : "selected",
                  type: "general",
                  target_path: null,
                  click_type: null,
                  device_type: null
                }, 91)), _v0.isSelected ? _v0(_v6, _v1, _v5) : _v13(_v6, _v1, _v5);
              },
              shouldShowFileSize: _v16,
              fileSizeTooltip: _v10 ?? void 0,
              fileSize: _v9,
              hoverActions: (0, _v1.jsx)(_v136.ListViewHoverActionsContainer, {
                disableHoverBackground: _v0.isColdStorage,
                children: (0, _v1.jsx)(_v134.TopRightDecoration, {
                  video: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list",
                  canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v2),
                  shareEventAnalyticsOverride: {
                    page: "LIBRARY"
                  },
                  hasVideoInfo: !0,
                  onVideoInfo: () => _v9(_v0.uri)
                })
              }),
              menuButton: (0, _v1.jsx)(_v118.VideoMenu, {
                video: _v0,
                feature: _v74.AnalyticsFeatures.VIDEO_LIBRARY,
                hasMoreInfo: !0,
                hasReviewPageLinkUpsell: _v3,
                hasUpsellInShareModal: _v2,
                hasMultipleReviewLinks: _v4,
                onCopyVideo: _v8 ? () => _v8(_v0) : void 0,
                onMoreInfo: () => _v9(_v0.uri),
                onMoveSuccess: ({
                  selectedDestination: _v0,
                  video: _v1,
                  destinationWorkspaceId: _v2,
                  destinationWorkspaceName: _v3
                }) => {
                  if (_v0(_v1.uri, _v1, _v5), _v11?.(_v1.uri, "video"), _v2 && _v3) {
                    let _v0 = "root" === _v0 ? _v6 : _v0.name,
                      _v1 = "root" === _v0 ? "/library" : (0, _v71.getFolderPageUriFromApiUri)(_v0.uri);
                    _v19(_v1.name, {
                      label: _v0,
                      workspaceName: _v3
                    }, () => {
                      _v23 && (0, _v102.switchTeam)(_v2, _v23.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v18(_v1.name, {
                    label: _v0.name,
                    link: (0, _v71.getFolderPageUriFromApiUri)(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v5), _v11?.(_v0.uri, "video"), _v20(_v74.VideoActionAnalytics.clickDeleteVideo({
                    live_event_id: null,
                    origin_folder_id: null,
                    origin_type: null,
                    is_my_videos: null,
                    location: _v74.AnalyticsLocations.VIDEO_LIST
                  }));
                },
                analytics: {
                  location: "video_list",
                  element: "ellipses"
                },
                vimeoClickAnalytics: {
                  location: "video_list"
                }
              }),
              onDragBegin: () => {
                _v14?.(!1);
              },
              onDragEnd: _v1,
              type: _v104.ITEM_TYPES.ROOT_VIDEO,
              selectedItemURIs: _v12,
              canDrag: _v13,
              parentFolderUri: "root",
              v2PageName: "video_library"
            }, _v6);
          }
          if (_v0.folder && _v0.folder.uri) {
            let {
                folder: _v0
              } = _v0,
              _v1 = _v17.type === _v51.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v2 = parseInt(_v0.uri.split("/")?.[2]),
              _v3 = parseInt(_v0.folder.uri.split("/")[4]);
            return (0, _v1.jsx)(_v140.DroppableListFolder, {
              dropTarget: _v0,
              dropTargetType: _v104.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v104.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: _v24.enable_list_view_folder_upload && null != _v26 ? {
                targetUserId: _v26,
                folderId: _v3,
                folderName: _v0.name,
                uploadClipProperties: _v30
              } : void 0,
              isLoading: !!_v7 && _v7.has(_v0.uri),
              href: (0, _v71.getFolderPageUriFromApiUri)(_v0.uri),
              title: _v0.name,
              thumbnail: (0, _v1.jsx)(_v137.FolderRowThumbnail, {
                backgroundColor: _v0.settings?.color
              }),
              subTitle: (0, _v126.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
              timestamp: _v22(_v1),
              privacy: _v15 ? "—" : "",
              shouldShowFileSize: _v16,
              pageName: _v21,
              fileSize: "—",
              folderId: _v3,
              canRename: !0,
              folderOwnerId: _v2,
              hoverActions: (0, _v1.jsx)(_v136.ListViewHoverActionsContainer, {
                children: (0, _v1.jsx)(_v135.FolderTopRightDecoration, {
                  folder: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list"
                })
              }),
              menuButton: (0, _v1.jsx)(_v119.FolderMenu, {
                folder: _v0,
                analytics: {
                  product: "Video Library",
                  feature: "video_library",
                  location: "folder_card"
                },
                onMoveSuccess: _v10,
                libraryType: _v28
              }),
              onClick: () => {
                _v107.BigPictureClient.sendEvent(new _v107.Event("vimeo.click_folder_card", 3, {
                  path: window.location.href,
                  entry_page: "mvv",
                  page: "mvv",
                  location: _v74.AnalyticsLocations.FOLDER_LIST,
                  team_owner_id: String(_v2),
                  team_size: _v23?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v23?.teamUser?.accountType ?? null,
                  actor_team_role: _v23?.teamUser?.plainTextPermissionLevel ?? null,
                  product: "Video Library",
                  actor_resource_role: null,
                  folder_id: _v0.folder?.uri.split("/").pop() ?? null,
                  is_subfolder: null,
                  folder_share_status: null,
                  is_private_to_me: null,
                  parent_folder_id: null,
                  position_row: null,
                  position_column: null,
                  customizations: null,
                  layout: "list"
                })), _v29({
                  folderUri: _v0.folder?.uri,
                  isPrivateToUser: _v0.folder?.isPrivateToUser
                });
              },
              v2PageName: "video_library"
            }, _v0.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }) : (0, _v1.jsx)(_v7.Flex, {
          direction: "column",
          width: "100%",
          gap: "sm",
          children: (0, _v1.jsx)(_v80.LoadingStateList, {})
        })
      });
    };
  function _v143({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    hasFolderShareUpsell: _v2,
    hasReviewPageUpsell: _v3,
    hasMultipleReviewLinks: _v4,
    items: _v5,
    libraryTitle: _v6,
    loadingFolderURIs: _v7 = new Set(),
    onCopyVideo: _v8,
    onMoreInfo: _v9,
    onMoveFolderSuccess: _v10,
    selectedItemURIs: _v11 = new Set(),
    selectItem: _v12,
    setIsUploadDropzoneEnabled: _v13,
    shouldShowPrivacy: _v14 = !1,
    shouldShowFileSize: _v15 = !1,
    sort: _v16
  }) {
    return (0, _v1.jsx)(_v142, {
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      libraryTitle: _v6,
      loadingFolderURIs: _v7,
      items: _v5,
      onCopyVideo: _v8,
      selectItem: _v12,
      selectedItemURIs: _v11,
      shouldShowPrivacy: _v14,
      shouldShowFileSize: _v15,
      setIsUploadDropzoneEnabled: _v13,
      sort: _v16,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v3,
      hasMultipleReviewLinks: _v4
    });
  }
  function _v144({
    canUpload: _v0,
    deselectItem: _v1,
    handleMoveItemsOnDrop: _v2,
    hasFolderShareUpsell: _v3,
    hasReviewPageUpsell: _v4,
    hasMultipleReviewLinks: _v5,
    isEnterprise: _v6,
    items: _v7,
    loadingFolderURIs: _v8 = new Set(),
    onCopyVideo: _v9,
    onFolderSettingsChange: _v10,
    onMoreInfo: _v11,
    removeItem: _v12,
    selectedItemURIs: _v13,
    selectItem: _v14,
    setIsUploadDropzoneEnabled: _v15,
    shouldShowPrivacy: _v16 = !1,
    shouldShowFileSize: _v17 = !1,
    sort: _v18,
    layout: _v19,
    isLoading: _v20 = !1,
    hasContentSpaceEnabled: _v21
  }) {
    let _v22 = (0, _v5.useContext)(_v90.ViewerContext),
      _v23 = _v22?.teamUser?.ownerId ?? _v22?.user?.id,
      _v24 = (0, _v87.useTeamUploadClipProperties)(_v23),
      _v25 = _v21 ? (0, _v20.translate)({
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
      }) : (0, _v20.translate)({
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
        notifyItemMoveSuccess: _v26,
        notifyItemMoveToWorkspaceSuccess: _v27,
        notifyItemMoveFailure: _v28
      } = (0, _v46.useNotifications)(),
      {
        revalidateTopLevelFolders: _v29,
        revalidateFolderItems: _v30,
        revalidateRootItems: _v31
      } = (0, _v44.useRevalidate)(),
      _v32 = (_v0, _v1, _v2, _v3) => {
        _v29(), _v1[0].parentFolder?.uri ? _v30(_v1[0]?.parentFolder?.uri ?? "") : _v31(), "root" !== _v0 && _v30(_v0.uri);
        let _v4 = "root" === _v0 ? _v25 : _v0.name,
          _v5 = "root" === _v0 ? "/library" : (0, _v71.getFolderPageUriFromApiUri)(_v0.uri);
        _v2 && _v3 ? _v27(_v1[0].name, {
          label: _v4,
          workspaceName: _v3
        }, () => {
          _v22 && (0, _v102.switchTeam)(_v2, _v22.xsrft).finally(() => {
            window.location.href = _v5;
          });
        }) : _v26(_v1[0].name, {
          label: _v4,
          link: _v5
        });
      },
      {
        draggableItemIsHovering: _v33,
        dropRef: _v34
      } = (0, _v103.useDropFolder)({
        dropTargetType: _v104.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: void 0,
        allowedDropEffect: null,
        dropFileForUploadConfig: null != _v23 && _v0 ? {
          targetUserId: _v23,
          folderId: void 0,
          folderName: _v25,
          uploadClipProperties: _v24
        } : void 0
      });
    return (0, _v1.jsx)(_v78.Box, {
      height: "100%",
      width: "100%",
      ref: _v34,
      backgroundColor: _v33 ? "rgba(23, 213, 255, 0.06)" : "transparent",
      borderColor: _v33 ? "vimeoBlue.500" : "transparent",
      borderRadius: "lg",
      borderWidth: ".125rem",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
      children: _v19 === _v51.LAYOUT.GRID ? (0, _v1.jsx)(_v130, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        isEnterprise: _v6,
        items: _v7,
        libraryTitle: _v25,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        onFolderSettingsChange: _v10,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v32,
        onMoveFolderFailure: (_v0, _v1) => {
          _v28(_v1[0].name, "root" === _v0 ? _v25 : _v0.name);
        },
        removeItem: _v12,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        sort: _v18,
        isLoading: _v20
      }) : (0, _v1.jsx)(_v143, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        hasFolderShareUpsell: _v3,
        hasReviewPageUpsell: _v4,
        hasMultipleReviewLinks: _v5,
        items: _v7,
        libraryTitle: _v25,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        shouldShowPrivacy: _v16,
        shouldShowFileSize: _v17,
        sort: _v18,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v32
      })
    });
  }
  let _v145 = ["video", "folder"];
  function _v146({
    playerAssetUrls: _v0,
    viewer: _v1
  }) {
    let {
        step: _v2,
        handleDismiss: _v3,
        handleCtaClick: _v4,
        handleErrorClose: _v5
      } = (0, _v69.useViewerAiUpsellModal)("library"),
      [_v6, _v7] = (0, _v5.useState)(null),
      _v8 = (0, _v9.useToast)(),
      [_v9, _v10] = (0, _v49.useSortPreference)(_v51.DEFAULT_SORT, _v51.VL_SORT_LOCAL_STORAGE_KEY),
      [_v11, _v12] = (0, _v50.useDateDisplayPreference)(_v51.DEFAULT_DATE_DISPLAY, _v51.VL_DATE_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v5.useState)(null),
      [_v15, _v16] = (0, _v5.useState)(!1),
      _v17 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      [_v18, _v19] = (0, _v5.useState)(!1),
      [_v20, _v21] = (0, _v5.useState)(!1),
      _v22 = _v17 && _v1 ? {
        apiUrl: _v1.apiUrl,
        jwt: _v1.jwt,
        ownerId: _v17
      } : void 0,
      _v23 = (0, _v34.useAnalyticsEvent)(),
      {
        trackLibraryPageDisplayed: _v24,
        trackLibraryViewChanged: _v25,
        trackLibraryFilterApplied: _v26,
        trackLibrarySortChanged: _v27
      } = (0, _v26.useLibraryTracking)(),
      _v28 = (0, _v4.useRouter)(),
      _v29 = {
        alphabetical_asc: "title_a_to_z",
        alphabetical_desc: "title_z_to_a",
        last_user_action_event_date_desc: "last_modified",
        last_user_action_event_date_asc: "first_modified",
        date_desc: "last_added",
        date_asc: "first_added",
        duration_desc: "longest",
        duration_asc: "shortest"
      },
      {
        capabilities: _v30,
        ready: _v31
      } = (0, _v16.useCapability)(["canCreateRootFolders", "canAddTeamMembers", "canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "hasEnterprise", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasVideoLibraryEmbeddableUploader"], `/users/${_v17}`),
      {
        loading: _v32,
        contentSpaceEnabled: _v33
      } = (0, _v14.useContentSpaceEnabled)(`/users/${_v17}`),
      {
        listingParams: _v34
      } = (0, _v15.usePrivateToMeFolderListingParams)(`/users/${_v17}`),
      _v35 = !!_v30.canGenerateClipTextTranslation,
      _v36 = (!!_v30.canGenerateClipTranslation || _v35) && !!_v30.canPerformBulkTranslations,
      {
        revalidateRootItems: _v37,
        revalidateTopLevelFolders: _v38
      } = (0, _v44.useRevalidate)(),
      {
        setLoadingSideNavFolderURIs: _v39
      } = (0, _v5.useContext)(_v47.VideoLibraryLayoutContext),
      _v40 = (0, _v46.useNotification)(),
      {
        notifyItemMoveSuccess: _v41
      } = (0, _v46.useNotifications)(),
      _v42 = (0, _v5.useRef)(() => void 0),
      {
        openCopyVideoModal: _v43,
        copyVideoModal: _v44
      } = (0, _v66.useCopyVideoFlow)({
        onAfterCopySuccess: (_v0, _v1) => _v42.current(_v1.uri, _v0)
      }),
      _v45 = _v1?.teamUser?.plainTextPermissionLevel,
      _v46 = _v17 === _v1?.user?.id || "Admin" === _v45,
      _v47 = (0, _v31.useGracePeriodBillingUi)({
        orionFlag: "enable_library_grace_period_notifications",
        layout: {
          type: "library"
        }
      }),
      {
        hasColdStorage: _v48
      } = (0, _v76.useUserHasColdStorageVideos)({
        forceEligible: _v47.isStorageSuspended
      }),
      _v49 = !!_v30.coldStorageClips && _v46 || _v48 && _v46,
      {
        settings: _v50
      } = (0, _v23.useOrionSettings)(),
      _v51 = _v50?.cold_privacy_enabled ?? !1,
      {
        hasColdPrivacy: _v52,
        isLoading: _v53
      } = (0, _v75.useUserHasColdPrivacyVideos)({
        enabled: _v51 || _v48
      }),
      _v54 = _v51 && _v52,
      _v55 = (0, _v41.useContentTypeFilter)([..._v145]),
      _v56 = !(0, _v73.isContentTypeSelectionDefault)(_v145, _v55.value) && !(0, _v73.doesSelectionIncludeVideos)(_v145, _v55.value),
      _v57 = !(0, _v73.isContentTypeSelectionDefault)(_v145, _v55.draft) && !(0, _v73.doesSelectionIncludeVideos)(_v145, _v55.draft),
      _v58 = (0, _v43.useVideoAvailabilityFilter)(),
      _v59 = (0, _v40.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v54 ? ["cold_privacy"] : [])], !!_v30?.hasTeamPrivacy),
      _v60 = [..._v59.value],
      _v61 = _v59.value.has("cold_privacy"),
      _v62 = (0, _v73.doesSelectionIncludeVideos)(_v145, _v55.value) && _v58.value.has("restricted") !== _v58.value.has("available") || _v61,
      _v63 = (0, _v42.useCreatedByFilter)(),
      _v64 = !!_v59.isFilterActive || !!_v63.isFilterActive || !!_v58.isFilterActive,
      _v65 = !!_v59.isFilterActive || !!_v63.isFilterActive,
      _v66 = !!_v59.isDraftActive || !!_v63.isDraftActive,
      _v67 = !!_v59.isFilterActive || !!_v63.isFilterActive,
      _v68 = !!_v59.isDraftActive || !!_v63.isDraftActive,
      [_v69, _v70] = (0, _v5.useState)(!0),
      [_v71, _v72] = (0, _v48.useLayoutPreference)(),
      _v73 = !!_v30.canCreateRootFolders,
      _v74 = !!(_v69 && _v46),
      _v75 = _v50?.enable_new_library_drag_and_drop_upload ?? !1,
      _v76 = _v50?.enable_content_space_team_gate ?? !1,
      _v77 = (_v1?.teamUser?.currentTeamSize ?? 0) === 0,
      _v78 = _v48 || _v54,
      _v79 = _v74 && !_v75,
      _v80 = !!_v30.hasEnterprise,
      _v81 = !_v31 || _v32 ? "" : _v33 ? (0, _v20.translate)({
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
      }) : (0, _v20.translate)({
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
      });
    (0, _v33.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v37();
    }, []), (0, _v22.useOttRedirect)({
      toast: _v8,
      config: {
        message: (0, _v20.translate)({
          singular: "Team library videos are now managed on Vimeo",
          dictionary: {
            es: {
              singular: "Los videos de la biblioteca del equipo ahora se administran en Vimeo"
            },
            "de-DE": {
              singular: "Videos der Teambibliothek werden jetzt auf Vimeo verwaltet"
            },
            "fr-FR": {
              singular: "Les vidéos de la bibliothèque de l'équipe sont désormais gérées sur Vimeo"
            },
            "ja-JP": {
              singular: "チームライブラリの動画がVimeoで管理されるようになりました"
            },
            "ko-KR": {
              singular: "이제 팀 라이브러리 동영상은 Vimeo에서 관리됩니다."
            },
            "pt-BR": {
              singular: "Os vídeos da biblioteca da equipe agora são gerenciados no Vimeo"
            },
            "zh-CN": {
              singular: "团队视频库的视频现在在 Vimeo 上管理"
            }
          }
        })
      }
    });
    let _v82 = (0, _v17.useIsMobile)(),
      _v83 = !!_v33,
      _v84 = !_v46 && _v83,
      {
        data: _v85,
        mutate: _v86,
        setSize: _v87,
        size: _v88
      } = (0, _v19.useGetUserFoldersRootInfinite)(() => {
        let _v0 = _v59.isFilterActive && !_v62 ? _v60.join(",") : void 0,
          _v1 = _v63.isFilterActive ? [..._v63.value].map(_v0 => _v0.userId) : void 0,
          _v2 = _v1?.length ? _v1.join(",") : void 0,
          _v3 = (0, _v73.getContentTypeApiFilterParam)(_v145, _v55.value);
        return _v17 && _v31 && !_v32 ? {
          where: {
            userId: _v17
          },
          select: _v141,
          query: {
            direction: _v9.direction,
            excludePersonalTeamFolder: _v33,
            flattenPrivateToMe: _v34.flattenPrivateToMe,
            excludeSharedVideos: _v84,
            includeColdStorageClips: _v49,
            ...(_v3 && {
              filter: _v3
            }),
            clipPrivacyFilters: _v0,
            clipCreatedByFilters: _v2,
            noPadding: !0,
            perPage: 25,
            sort: _v9.type,
            responsive: !0
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4"
          }
        } : null;
      }),
      _v89 = (0, _v5.useMemo)(() => _v85 ? _v85.flatMap(_v0 => {
        if (!_v0) return [];
        let _v1 = _v0.data.filter(_v0 => (0, _v72.passesLibraryItemClientFilters)({
          clipPrivacyFilter: _v59.value,
          contentTypeOptions: _v145,
          contentTypeSelection: _v55.value,
          item: _v0,
          shouldUseClientPipeline: _v62,
          videoAvailabilityFilter: _v58.value
        }));
        return [{
          ..._v0,
          data: _v1
        }];
      }) : _v85, [_v59.value, _v55.value, _v85, _v62, _v58.value]),
      _v90 = (0, _v5.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v86(_v0 => _v0?.map(_v0 => ({
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
      }, [_v86]),
      _v91 = (0, _v5.useCallback)((_v0, _v1) => {
        _v86(_v0 => _v0 ? _v0.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
            ..._v0,
            video: _v1(_v0.video)
          } : _v0)
        })) : _v0, !1);
      }, [_v86]),
      _v92 = (0, _v5.useCallback)((_v0, _v1) => {
        let _v2 = !1;
        _v86(_v0 => {
          let _v1 = (0, _v70.insertOptimisticVideoCopy)(_v0, _v0, _v1);
          return _v2 = _v1.inserted, _v1.pages;
        }, !1), _v2 || _v37();
      }, [_v86, _v37]);
    (0, _v5.useEffect)(() => {
      _v42.current = _v92;
    }, [_v92]);
    let _v93 = (0, _v5.useCallback)((_v0, _v1) => {
        _v86(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => _v0?.[_v1]?.uri !== _v0)
        })), !1);
      }, [_v86]),
      _v94 = (0, _v5.useCallback)(_v0 => {
        _v86(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => {
            let _v1 = _v0.video?.uri || _v0.folder?.uri || _v0.liveEvent?.uri;
            return !!_v1 && !_v0.has(_v1);
          })
        })), !1);
      }, [_v86]),
      [_v95, {
        enhancedSelectItem: _v96,
        enhancedDeselectItem: _v97,
        selectAllItems: _v98,
        deselectAllItems: _v99,
        shiftKeyChange: _v100
      }] = (0, _v77.useSelectedItems)(),
      _v101 = (0, _v5.useCallback)(() => {
        let _v0 = _v55.value,
          _v1 = (0, _v73.isContentTypeOptionChecked)(_v145, _v0, "video"),
          _v2 = _v58.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v99();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v55.setSelection((0, _v73.includeVideosInSelection)(_v145, _v0)), _v58.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v55.setSelection((0, _v73.excludeVideosFromSelection)(_v145, _v0)), _v58.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v58.setValue(_v5());
        if (_v3 && _v4) {
          _v58.clearFilter(), _v55.setSelection((0, _v73.excludeVideosFromSelection)(_v145, _v0));
          return;
        }
      }, [_v55, _v99, _v58]),
      _v102 = (0, _v5.useCallback)(() => {
        let _v0 = _v55.draft,
          _v1 = (0, _v73.isContentTypeOptionChecked)(_v145, _v0, "video"),
          _v2 = _v58.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v99();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v55.setSelection((0, _v73.includeVideosInSelection)(_v145, _v0), !0), _v58.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v55.setSelection((0, _v73.excludeVideosFromSelection)(_v145, _v0), !0), _v58.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v58.setDraft(_v5());
        if (_v3 && _v4) {
          _v58.setDraft(new Set()), _v55.setSelection((0, _v73.excludeVideosFromSelection)(_v145, _v0), !0);
          return;
        }
      }, [_v55, _v99, _v58]),
      _v103 = _v48 || _v48 ? {
        onVideoParentCheckboxClick: _v101,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v55.value;
          (0, _v73.isContentTypeOptionChecked)(_v145, _v1, "video") || _v55.setSelection((0, _v73.includeVideosInSelection)(_v145, _v1)), _v58.updateFilterValues(_v0);
        },
        showAvailableOption: _v48,
        showRestrictedOption: _v48,
        videoAvailabilityFilter: _v58.value
      } : void 0,
      _v104 = _v48 || _v48 ? {
        onVideoParentCheckboxClick: _v102,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v55.draft;
          (0, _v73.isContentTypeOptionChecked)(_v145, _v1, "video") || _v55.setSelection((0, _v73.includeVideosInSelection)(_v145, _v1), !0), _v58.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v48,
        showRestrictedOption: _v48,
        videoAvailabilityDraft: _v58.draft
      } : void 0,
      _v105 = (0, _v5.useRef)(!1),
      _v106 = (0, _v5.useCallback)(_v0 => {
        "Shift" === _v0.key && (_v105.current = !_v105.current, _v100(_v105.current));
      }, [_v105, _v100]);
    (0, _v5.useEffect)(() => (window.addEventListener("keydown", _v106), window.addEventListener("keyup", _v106), () => {
      window.removeEventListener("keydown", _v106), window.removeEventListener("keyup", _v106);
    }), [_v106]), (0, _v5.useEffect)(() => {
      _v82 || _v16(!1);
    }, [_v82]);
    let _v107 = _v28.query.filter;
    (0, _v5.useEffect)(() => {
      !_v48 || "string" != typeof _v107 || "locked" !== _v107.toLowerCase() || (!_v58.value.has("restricted") || _v58.value.has("available")) && (_v55.setSelection(new Set(["video", "folder"])), _v58.setValue(new Set(["restricted"])));
    }, [_v107, _v48]);
    let _v108 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      _v108.current || !_v54 || "string" != typeof _v107 || "cold_privacy" === _v107.toLowerCase() && (_v108.current = !0, _v59.value.has("cold_privacy") || _v59.updateFilterValues("cold_privacy"));
    }, [_v107, _v54]), (0, _v5.useEffect)(() => {
      if (!_v48 || (0, _v43.isVideoAvailabilityFilterExplicitlyEngaged)(_v58.value)) return;
      let _v0 = _v55.value;
      if (1 !== _v0.size || !_v0.has("video") || (_v55.setSelection(new Set()), !_v28.isReady)) return;
      let _v1 = _v28.query.filter;
      if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
      let _v2 = {
        ..._v28.query
      };
      delete _v2.filter, _v28.replace({
        pathname: _v28.pathname,
        query: _v2
      }, void 0, {
        shallow: !0
      });
    }, [_v58.value, _v55.value, _v48, _v28.isReady, _v28.pathname, _v28.query.filter]);
    let _v109 = _v95.selectedItemURIs,
      _v110 = (0, _v5.useMemo)(() => _v89?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
        let _v1 = (0, _v18.camelizeString)(_v0.type);
        return _v0[_v1]?.uri;
      })), [_v89]),
      {
        allItems: _v111,
        canMoveSelection: _v112,
        canDeleteSelection: _v113,
        canChangePrivacySelection: _v114,
        canAddToShowcasesSelection: _v115,
        hasColdStorageSelection: _v116,
        hasLegalHoldSelection: _v117,
        hasReachedMaxSelectionForMove: _v118,
        hasReachedMaxSelectionForPrivacy: _v119,
        hasReachedMaxSelectionForSentimentWidget: _v120,
        hasReachedMaxSelectionForShowcases: _v121,
        canSelectURIs: _v122,
        selectedItems: _v123
      } = (0, _v39.useBulkItems)({
        canDeleteItem: _v0 => !!_v0?.video?.metadata?.interactions?.delete,
        canMoveItem: _v0 => !!_v0?.video?.canMoveToProject,
        canChangeItemPrivacy: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        canAddToShowcases: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        hasLegalHold: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri,
        items: _v110,
        selectedURIs: _v109,
        allowColdStorageDeletion: !0
      }),
      _v124 = !!_v30.canManageTeamCollections && _v115,
      _v125 = (0, _v5.useCallback)(() => {
        _v98(_v111, _v122);
      }, [_v111, _v122, _v98]),
      [_v126] = (0, _v45.useMoveItem)(),
      [_v127, _v128] = (0, _v5.useState)(new Set());
    (0, _v5.useEffect)(() => {
      !_v82 && _v65 && _v55.setSelection(new Set(["video"]));
    }, [_v82, _v65]), (0, _v5.useEffect)(() => {
      _v66 && _v55.setSelection(new Set(["video"]), !0);
    }, [_v66]);
    let _v129 = _v1?.vimeoHttpsUrl ? _v1?.vimeoHttpsUrl + "/analytics" : void 0,
      _v130 = _v1?.teamUser,
      {
        isDone: _v131,
        isLoadingInitialData: _v132,
        isLoadingMore: _v133
      } = (0, _v32.getInfiniteRequestLoadingState)({
        data: _v85,
        itemsPerPage: 25,
        size: _v88
      }),
      _v134 = _v111?.length === 0,
      _v135 = !!_v55.isFilterApplied,
      _v136 = !_v84,
      _v137 = _v135 || _v64 || (0, _v43.isVideoAvailabilityFilterExplicitlyEngaged)(_v58.value),
      _v138 = _v62 ? _v110?.length : _v89?.[0]?.total,
      _v139 = !_v134 || _v137,
      _v140 = _v46 && !!_v129,
      _v141 = !!_v30.hasVideoLibraryEmbeddableUploader && _v46 && !!_v17,
      _v142 = !!_v30.canCreateRootFolders,
      _v143 = _v139 && (_v140 || _v141 || _v142);
    return (0, _v25.usePicoEffect)(() => {
      if (!_v31 || void 0 === _v138) return !1;
      let _v0 = (0, _v27.deriveLibraryReferrerPage)(_v28.query.library_referrer);
      _v24({
        libraryType: (0, _v27.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v33
        }),
        libraryItemCount: _v138,
        referrerPage: _v0
      });
    }, [_v31, _v138, _v33, _v28.query.library_referrer], {
      once: !0
    }), (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v22 && (0, _v1.jsx)(_v13.StartYourTeamFlow, {
        apiConfig: _v22,
        defaultTeamName: _v1?.user?.name ?? "",
        isOpen: _v18,
        onClose: () => _v19(!1)
      }), _v22 && (0, _v1.jsx)(_v12.DropYourTeamModal, {
        apiConfig: _v22,
        isOpen: _v20,
        onClose: () => _v21(!1),
        onDropped: () => window.location.reload()
      }), (0, _v1.jsx)(_v93, {
        children: (0, _v1.jsxs)(_v61.Page, {
          children: [(0, _v1.jsxs)(_v61.Page.Main, {
            children: [(0, _v1.jsxs)(_v61.Page.StickyTop, {
              children: [_v47.banner, (0, _v1.jsx)(_v24.ReverseTrialLateBanner, {
                hostLocation: "library"
              }), _v78 && (0, _v1.jsx)(_v21.ColdStorageBanner, {
                surface: "library",
                hasColdStorage: _v48,
                hasColdPrivacy: _v54,
                hasColdPrivacyForTracking: _v52,
                isColdPrivacyLoading: _v53
              }), (0, _v1.jsx)(_v60.PageHeader, {
                actions: _v143 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v140 && _v129 && (0, _v1.jsx)(_v38.AnalyticsButton, {
                    analyticsLink: _v129,
                    location: _v127,
                    page: "library",
                    name: "click_library_analytics",
                    dataTestId: "library-header-analytics-button"
                  }), _v141 && _v17 && (0, _v1.jsx)(_v37.UploadButton, {
                    paywallTrigger: "library_header_upload_button",
                    targetUserId: _v17,
                    testIdPrefix: "library-header-upload-button",
                    onClick: () => _v23((0, _v74.genericClick)({
                      copy: "Upload",
                      feature: "video_library",
                      location: _v127,
                      name: "click_upload_button",
                      page: "library",
                      target: null,
                      target_path: null,
                      click_type: null,
                      device_type: null,
                      type: "general"
                    }, 91))
                  }), _v142 && (0, _v1.jsx)(_v101, {}), _v22 && _v76 && !_v32 && _v77 && (_v33 ? (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v8.IconButton, {
                      "aria-label": (0, _v20.translate)({
                        singular: "Drop your team",
                        dictionary: {
                          es: {
                            singular: "Retirar tu equipo"
                          },
                          "fr-FR": {
                            singular: "Déposez votre équipe"
                          },
                          "pt-BR": {
                            singular: "Remova sua equipe"
                          }
                        }
                      }),
                      "data-testid": "library-header-drop-your-team-button-mobile",
                      display: {
                        base: "inline-flex",
                        md: "none"
                      },
                      icon: (0, _v1.jsx)(_v10.TeamLibrary, {}),
                      variant: "secondary",
                      size: "md",
                      onClick: () => _v21(!0)
                    }), (0, _v1.jsx)(_v6.Button, {
                      "data-testid": "library-header-drop-your-team-button",
                      display: {
                        base: "none",
                        md: "inline-flex"
                      },
                      variant: "secondary",
                      size: "md",
                      onClick: () => _v21(!0),
                      children: (0, _v20.translate)({
                        singular: "Drop your team",
                        dictionary: {
                          es: {
                            singular: "Retirar tu equipo"
                          },
                          "fr-FR": {
                            singular: "Déposez votre équipe"
                          },
                          "pt-BR": {
                            singular: "Remova sua equipe"
                          }
                        }
                      })
                    })]
                  }) : _v30.canAddTeamMembers ? (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v8.IconButton, {
                      "aria-label": (0, _v20.translate)({
                        singular: "Start your team",
                        dictionary: {
                          es: {
                            singular: "Comience su equipo"
                          },
                          "de-DE": {
                            singular: "Baue dein Team auf"
                          },
                          "fr-FR": {
                            singular: "Lancer votre équipe"
                          },
                          "ja-JP": {
                            singular: "チームを始める"
                          },
                          "ko-KR": {
                            singular: "팀 꾸리기"
                          },
                          "pt-BR": {
                            singular: "Crie sua equipe"
                          },
                          "zh-CN": {
                            singular: "组建团队"
                          }
                        }
                      }),
                      "data-testid": "library-header-start-your-team-button-mobile",
                      display: {
                        base: "inline-flex",
                        md: "none"
                      },
                      icon: (0, _v1.jsx)(_v10.TeamLibrary, {}),
                      variant: "secondary",
                      size: "md",
                      onClick: () => _v19(!0)
                    }), (0, _v1.jsx)(_v6.Button, {
                      "data-testid": "library-header-start-your-team-button",
                      display: {
                        base: "none",
                        md: "inline-flex"
                      },
                      variant: "secondary",
                      size: "md",
                      onClick: () => _v19(!0),
                      children: (0, _v20.translate)({
                        singular: "Start your team",
                        dictionary: {
                          es: {
                            singular: "Comience su equipo"
                          },
                          "de-DE": {
                            singular: "Baue dein Team auf"
                          },
                          "fr-FR": {
                            singular: "Lancer votre équipe"
                          },
                          "ja-JP": {
                            singular: "チームを始める"
                          },
                          "ko-KR": {
                            singular: "팀 꾸리기"
                          },
                          "pt-BR": {
                            singular: "Crie sua equipe"
                          },
                          "zh-CN": {
                            singular: "组建团队"
                          }
                        }
                      })
                    })]
                  }) : null)]
                }) : void 0,
                bottomBar: (0, _v1.jsxs)(_v53.FilterSortBar, {
                  checkbox: (0, _v1.jsx)(_v62.CheckboxItemCount, {
                    hasCheckbox: !!_v122.size,
                    isChecked: !!_v109.size,
                    isDisabled: !_v122.size,
                    isIndeterminate: !!_v109.size && _v109.size < _v122.size,
                    isLoading: _v132,
                    onChange: () => {
                      _v109.size ? _v99() : _v125();
                    },
                    selectedItemCount: _v109.size,
                    subtitle: !!_v138 && (_v137 ? (0, _v20.translate)({
                      count: _v138,
                      singular: "{NUM_ITEMS} result",
                      plural: "{NUM_ITEMS} results",
                      replacements: {
                        NUM_ITEMS: _v138
                      },
                      dictionary: {
                        es: {
                          singular: "{NUM_ITEMS} resultado",
                          plural: "{NUM_ITEMS} resultados"
                        },
                        "de-DE": {
                          singular: "{NUM_ITEMS} Ergebnis",
                          plural: "{NUM_ITEMS} Ergebnisse"
                        },
                        "fr-FR": {
                          singular: "{NUM_ITEMS} résultat",
                          plural: "{NUM_ITEMS} résultats"
                        },
                        "ja-JP": {
                          singular: "{NUM_ITEMS}件の検索結果",
                          plural: "{NUM_ITEMS} 件の結果"
                        },
                        "ko-KR": {
                          singular: "검색 결과 {NUM_ITEMS}건",
                          plural: "결과 {NUM_ITEMS}개"
                        },
                        "pt-BR": {
                          singular: "{NUM_ITEMS} resultado",
                          plural: "{NUM_ITEMS} resultados"
                        },
                        "zh-CN": {
                          singular: "{NUM_ITEMS} 个结果",
                          plural: "{NUM_ITEMS} 个结果"
                        }
                      }
                    }) : (0, _v20.translate)({
                      count: _v138,
                      singular: "{NUM_ITEMS} item",
                      plural: "{NUM_ITEMS} items",
                      replacements: {
                        NUM_ITEMS: _v138
                      },
                      dictionary: {
                        es: {
                          singular: "{NUM_ITEMS} elemento",
                          plural: "{NUM_ITEMS} elementos"
                        },
                        "de-DE": {
                          singular: "{NUM_ITEMS} Element",
                          plural: "{NUM_ITEMS} Elemente"
                        },
                        "fr-FR": {
                          singular: "{NUM_ITEMS} élément",
                          plural: "{NUM_ITEMS} éléments"
                        },
                        "ja-JP": {
                          singular: "{NUM_ITEMS} 件のアイテム",
                          plural: "{NUM_ITEMS} 件のアイテム"
                        },
                        "ko-KR": {
                          singular: "{NUM_ITEMS}개 항목",
                          plural: "{NUM_ITEMS}개 항목"
                        },
                        "pt-BR": {
                          singular: "{NUM_ITEMS} iten",
                          plural: "{NUM_ITEMS} itens"
                        },
                        "zh-CN": {
                          singular: "{NUM_ITEMS} 项",
                          plural: "{NUM_ITEMS} 项"
                        }
                      }
                    }))
                  }),
                  layout: _v71,
                  setLayout: _v0 => {
                    _v72(_v0), _v25({
                      libraryType: (0, _v27.deriveLibraryType)({
                        hasContentSpaceEnabled: !!_v33
                      }),
                      libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                    });
                  },
                  shouldHideViewControls: _v134 && !_v137,
                  sort: _v9,
                  setSort: _v0 => {
                    let _v1 = `${_v9.type.toLowerCase()}_${_v9.direction.toLowerCase()}`,
                      _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                    if (_v10(_v0), _v2 !== _v1) {
                      let _v0 = _v29[_v2];
                      _v0 && _v27({
                        libraryType: (0, _v27.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v33
                        }),
                        libraryNewSort: _v0
                      });
                    }
                  },
                  setDateDisplay: _v12,
                  sortOptions: _v51.SORT_OPTIONS,
                  isLayoutToggleDisabled: _v134,
                  children: [_v82 && _v136 && (0, _v1.jsxs)(_v7.Flex, {
                    children: [(0, _v1.jsx)(_v55.MobileFilterButton, {
                      isFilterApplied: _v137,
                      onClick: () => {
                        _v16(!0);
                      }
                    }), (0, _v1.jsxs)(_v56.MobileFilterDrawer, {
                      isFilterApplied: _v137,
                      isOpen: _v15,
                      onApplyFilters: () => {
                        let _v0, _v1, _v2, _v3;
                        _v99();
                        let _v4 = (0, _v27.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v33
                          }),
                          _v5 = !(0, _v73.areIdenticalSets)(_v55.draft, _v55.value),
                          _v6 = _v59.isDraftActive && _v59.isDraftUpdated(),
                          _v7 = _v58.isDraftActive && _v58.isDraftUpdated(),
                          _v8 = _v63.isDraftActive && _v63.isDraftUpdated();
                        _v55.commitDraft(), _v59.commitDraft(), _v58.commitDraft(), _v63.commitDraft(), _v0 = !(0, _v73.areIdenticalSets)(_v55.draft, _v55.value), _v1 = _v59.isDraftActive && _v59.isDraftUpdated(), _v2 = _v58.isDraftActive && _v58.isDraftUpdated(), _v3 = _v63.isDraftActive && _v63.isDraftUpdated(), _v0 && _v52.FilterBPEvents.sendApplyFilterEvent("content_type", _v81, _v130, "mobile"), _v1 && _v52.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v81, _v130, "mobile"), _v2 && _v52.FilterBPEvents.sendApplyFilterEvent("content_type", _v81, _v130, "mobile"), _v3 && _v52.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v81, _v130, "mobile"), _v5 && _v26({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v6 && _v26({
                          libraryType: _v4,
                          libraryFilterType: "privacy"
                        }), _v7 && _v26({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v8 && _v26({
                          libraryType: _v4,
                          libraryFilterType: "created_by"
                        }), _v16(!1);
                      },
                      onClearFilters: () => {
                        _v99(), _v55.clearFilter(), _v59.clearFilter(), _v58.clearFilter(), _v63.clearFilter(), _v63.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      onClose: () => {
                        _v55.clearDraft(), _v59.clearDraft(), _v58.clearDraft(), _v63.clearDraft(), _v63.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      children: [(0, _v1.jsx)(_v57.MobileContentTypeFilter, {
                        filter: _v55.draft,
                        onToggle: _v0 => {
                          let _v1 = (0, _v73.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v145, _v55.draft, _v0, (0, _v43.isVideoAvailabilityFilterExplicitlyEngaged)(_v58.draft));
                          _v55.setSelection(_v1, !0), (0, _v73.doesSelectionIncludeVideos)(_v145, _v1) || _v58.setDraft(new Set());
                        },
                        options: _v145,
                        page: _v81,
                        isDisabled: _v68,
                        videoSubmenu: _v104
                      }), _v136 && (0, _v1.jsxs)(_v1.Fragment, {
                        children: [(0, _v1.jsx)(_v58.MobileClipPrivacyFilter, {
                          filter: [..._v59.draft],
                          onChange: _v0 => {
                            _v59.updateFilterValues(_v0, !0);
                          },
                          options: _v59.options,
                          page: _v81,
                          isDisabled: _v57
                        }), !_v63.shouldHideFilter && (0, _v1.jsx)(_v59.MobileCreatedByFilter, {
                          filter: [..._v63.draft],
                          onChange: _v0 => {
                            _v63.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v63.createdByUsersSearchTerm,
                          setSearchQuery: _v63.setCreatedByUsersSearchTerm,
                          options: _v63.createdByUsers,
                          page: _v81,
                          isDisabled: _v57,
                          isLoadingInitialData: _v63.membersLoadingInitialData,
                          isLoadingMore: _v63.membersLoadingMore,
                          isDone: _v63.membersDone,
                          onLoadMore: _v63.loadMoreMembers
                        })]
                      })]
                    })]
                  }), !_v82 && _v136 && _v137 && (0, _v1.jsx)(_v64.ClearAllFiltersButton, {
                    onClick: () => {
                      _v99(), _v55.clearFilter(), _v59.clearFilter(), _v58.clearFilter(), _v63.clearFilter();
                    }
                  }), !_v82 && _v136 && (0, _v1.jsx)(_v54.ContentTypeFilter, {
                    filter: _v55.value,
                    onToggleType: _v0 => {
                      _v99();
                      let _v1 = (0, _v73.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v145, _v55.value, _v0, (0, _v43.isVideoAvailabilityFilterExplicitlyEngaged)(_v58.value));
                      (0, _v73.areIdenticalSets)(_v1, _v55.value) || _v26({
                        libraryType: (0, _v27.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v33
                        }),
                        libraryFilterType: "type"
                      }), _v55.setSelection(_v1), (0, _v73.doesSelectionIncludeVideos)(_v145, _v1) || _v58.clearFilter();
                    },
                    options: _v145,
                    page: _v81,
                    isDisabled: _v67,
                    videoSubmenu: _v103
                  }), !_v82 && _v136 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v63.ClipPrivacyTypeFilter, {
                      filter: [..._v59.value],
                      setFilter: _v0 => {
                        _v99(), _v59.updateFilterValues(_v0), _v26({
                          libraryType: (0, _v27.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v33
                          }),
                          libraryFilterType: "privacy"
                        });
                      },
                      options: _v59.options,
                      page: _v81,
                      isDisabled: _v56
                    }), !_v63.shouldHideFilter && (0, _v1.jsx)(_v65.CreatedByFilter, {
                      filter: [..._v63.value],
                      setFilter: _v0 => {
                        _v99(), _v63.setFilterValues(_v0), _v26({
                          libraryType: (0, _v27.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v33
                          }),
                          libraryFilterType: "created_by"
                        });
                      },
                      searchQuery: _v63.createdByUsersSearchTerm,
                      setSearchQuery: _v63.setCreatedByUsersSearchTerm,
                      options: _v63.createdByUsers,
                      page: _v81,
                      isDisabled: _v56,
                      isLoadingInitialData: _v63.membersLoadingInitialData,
                      isLoadingMore: _v63.membersLoadingMore,
                      isDone: _v63.membersDone,
                      onLoadMore: _v63.loadMoreMembers
                    })]
                  })]
                }),
                isTitleLoading: !_v31,
                title: _v81
              }), "LIST_LAYOUT" === _v71 && !_v134 && (0, _v1.jsx)(_v35.BokehListHeader, {
                setSort: _v10,
                sort: _v9,
                shouldShowPrivacy: _v73,
                shouldShowFileSize: !0,
                setDateDisplay: _v12,
                dateDisplay: _v11
              })]
            }), _v134 ? (0, _v1.jsx)(_v7.Flex, {
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              children: _v137 ? (0, _v1.jsx)(_v67.FilterEmptyState, {}) : _v30.canCreateRootFolders ? (0, _v1.jsx)(_v95, {
                owner: {
                  id: _v17 ?? 0
                },
                set360SourceType: _v14,
                threeSixtyType: _v13
              }) : (0, _v1.jsx)(_v99, {
                isContributor: "Contributor" === _v45 || "ContributorPlus" === _v45
              })
            }) : (0, _v1.jsx)(_v36.UploadDropzone, {
              className: "library-upload-dropzone",
              targetUserId: _v17 ?? 0,
              disabled: !_v79 || _v134 && _v30.canCreateRootFolders,
              topPosition: 205,
              destinationText: (0, _v20.translate)({
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
              }),
              children: (0, _v1.jsx)(_v147, {
                assetUrls: _v0,
                type: _v29.PlayerType.BarebonePlayer,
                children: (0, _v1.jsx)(_v144, {
                  canUpload: _v74,
                  deselectItem: _v97,
                  handleMoveItemsOnDrop: ({
                    dropTarget: _v0,
                    items: _v1
                  }) => {
                    let _v2 = new Set("");
                    _v2.add(_v0.uri), _v128(_v2), _v39(_v2);
                    let [,, _v3,, _v4] = _v0.uri.split("/");
                    _v126({
                      ownerId: parseInt(_v3, 10),
                      folderId: parseInt(_v4, 10),
                      targetItems: _v1
                    }).then(() => {
                      1 === _v1.length ? (_v97(_v1[0].uri, 0, _v111 || []), _v93(_v1[0].uri, "video")) : (_v99(), _v94(_v109)), _v41(null, {
                        label: _v0.name,
                        link: (0, _v71.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    }).catch(_v0 => {
                      _v40({
                        content: _v0,
                        status: "error"
                      });
                    }).finally(() => {
                      _v128(new Set()), _v39(new Set());
                    });
                  },
                  hasFolderShareUpsell: !!_v30.canSeeUpsellModalOnShare,
                  hasReviewPageUpsell: !!_v30.hasVideoReviewPageDemo,
                  hasMultipleReviewLinks: !!_v30.hasMultipleReviewLinks,
                  items: _v111,
                  layout: _v71,
                  loadingFolderURIs: _v127,
                  onCopyVideo: _v43,
                  onFolderSettingsChange: _v0 => {
                    _v90(_v0), _v38();
                  },
                  onMoreInfo: _v7,
                  removeItem: _v93,
                  selectedItemURIs: _v109,
                  selectItem: _v96,
                  shouldShowPrivacy: _v73,
                  shouldShowFileSize: !0,
                  sort: _v9,
                  isEnterprise: _v80,
                  setIsUploadDropzoneEnabled: _v70,
                  isLoading: _v132 || !!_v133,
                  hasContentSpaceEnabled: !!_v33
                })
              })
            }), (0, _v1.jsx)(_v83, {
              layout: _v71,
              canLoadMore: !_v131,
              isLoadingMore: _v132 || !!_v133,
              onActivate: () => _v87(_v88 + 1),
              isDropzoneEnabled: _v74 && !(_v134 && _v30.canCreateRootFolders),
              page: _v81
            })]
          }), _v6 && (0, _v1.jsx)(_v61.Page.Panel, {
            children: (0, _v1.jsx)(_v30.ResourceSidePanel, {
              isOpen: !0,
              onClose: () => _v7(null),
              onVideoPrivacyChange: ({
                view: _v0
              }) => _v91(_v6, _v0 => ({
                ..._v0,
                privacy: {
                  ..._v0.privacy,
                  view: _v0
                }
              })),
              pageName: "video_library",
              uri: _v6
            })
          })]
        })
      }), (0, _v1.jsx)(_v68.ViewerAiUpsellModal, {
        step: _v2,
        onDismiss: _v3,
        onCtaClick: _v4,
        onErrorClose: _v5
      }), _v44, _v47.modal, (0, _v1.jsx)(_v11.BulkActions, {
        canUseBulkTranslation: _v36,
        canAddToShowcases: _v124,
        canMoveSelection: _v112,
        canDeleteSelection: _v113,
        canChangePrivacySelection: _v114,
        canPublishContentToChina: _v30.regionalDeliveryPublishContentToChina && _v114,
        hasColdStorageSelection: _v116,
        hasLegalHoldSelection: _v117,
        hasReachedMaxSelectionForMove: _v118,
        hasReachedMaxSelectionForPrivacy: _v119,
        hasReachedMaxSelectionForSentimentWidget: _v120,
        hasReachedMaxSelectionForShowcases: _v121,
        deselectAllItems: _v99,
        removeItems: _v94,
        selectedItems: _v123,
        selectedItemURIs: _v109,
        teamOwnerId: _v17,
        isPrivateModeOn: !_v30.privateModeOff
      })]
    });
  }
  let _v147 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v28.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v148 = _v0.i(0),
    _v149 = _v0.i(0);
  let _v150 = ({
    playerAssetUrls: _v0
  }) => {
    let _v1 = (0, _v149.useViewer)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v146, {
        playerAssetUrls: _v0,
        viewer: _v1
      }), (0, _v1.jsx)(_v3.ManagedAccountsPromo, {}), (0, _v1.jsx)(_v148.VimeoReviewUpsellPromo, {})]
    });
  };
  _v150.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v47.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    children: _v0
  }), (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0,
      hasPlayerAPI: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v150], 0);
}