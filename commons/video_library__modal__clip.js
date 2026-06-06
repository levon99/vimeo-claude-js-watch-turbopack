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
    _v46 = _v0.i(0);
  let _v47 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v45.useViewer)(),
      _v2 = (0, _v46.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions),
      {
        isEnabled: _v3
      } = (0, _v24.useEnableFolderBulkPrivacy)();
    return (0, _v1.jsx)(_v32.DownloadModalProvider, {
      children: (0, _v1.jsx)(_v43.UpsellModalProvider, {
        children: (0, _v1.jsx)(_v31.DeleteVideoModalContextProvider, {
          children: (0, _v1.jsx)(_v35.LiveEventDeleteModalProvider, {
            children: (0, _v1.jsx)(_v27.AddToShowcaseModalContextProvider, {
              children: (0, _v1.jsx)(_v26.AddFolderToShowcaseModalContextProvider, {
                children: (0, _v1.jsx)(_v37.MoveModalContextProvider, {
                  children: (0, _v1.jsx)(_v34.FolderSettingsContextProvider, {
                    children: (0, _v1.jsx)(_v30.default, {
                      children: (0, _v1.jsx)(_v41.SlackIntegrationContextProvider, {
                        children: (0, _v1.jsx)(_v28.BulkPrivacyModalContextProvider, {
                          children: (0, _v1.jsx)(_v29.BulkShareInChinaModalContextProvider, {
                            children: (0, _v1.jsx)(_v36.ManageFeaturedFoldersModalContextProvider, {
                              children: (0, _v1.jsx)(_v38.ReorderFeaturedFOldersModalContextProvider, {
                                children: (0, _v1.jsx)(_v22.BulkAiModalProvider, {
                                  onJobActionComplete: _v0 => {
                                    let _v1 = _v1?.teamUser?.ownerId ?? _v1?.user?.id;
                                    _v1 && _v2(_v1, _v0);
                                  },
                                  children: (0, _v1.jsx)(_v39.default, {
                                    children: (0, _v1.jsx)(_v40.ShowcaseDeleteModalProvider, {
                                      children: (0, _v1.jsx)(_v33.FolderDefaultsModalContextProvider, {
                                        children: (0, _v1.jsx)(_v44.VideoPrivacyModalContextProvider, {
                                          children: (0, _v1.jsxs)(_v42.ThumbnailChangeModalContextProvider, {
                                            children: [_v0, (0, _v1.jsx)(_v25.BulkSentimentModalHost, {}), _v3 && (0, _v1.jsx)(_v23.BulkPrivacyModalHost, {})]
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  _v0.s(["default", 0, _v47], 0);
  var _v48 = _v0.i(0),
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
    _v64 = _v0.i(0);
  let _v65 = (0, _v4.createContext)({
      openReviewModal: () => {}
    }),
    _v66 = ({
      clipId: _v0
    }) => ((0, _v62.useInitGlobalStore)({
      clipId: String(_v0),
      trackingContextConfig: {
        pageName: "video_library",
        location: "modal"
      }
    }), (0, _v1.jsx)(_v61.ReviewLinksPanel, {})),
    _v67 = ({
      reviewClipId: _v0,
      canCreateReviewLinks: _v1,
      trackDismissal: _v2,
      onDone: _v3
    }) => _v1 ? (0, _v1.jsx)(_v58.CreateReviewLinkModal, {
      isOpen: !0,
      resourceId: _v0,
      resourceType: "clip",
      onCancel: () => {
        _v2("create_review_link_modal"), _v3();
      },
      onClose: () => {
        _v2("create_review_link_modal"), _v3();
      },
      onSubmit: _v3,
      inlineShareFlow: !0
    }) : (0, _v1.jsxs)(_v49.Modal, {
      isOpen: !0,
      onClose: () => {
        _v2("review_links_panel"), _v3();
      },
      children: [(0, _v1.jsx)(_v53.ModalOverlay, {}), (0, _v1.jsxs)(_v51.ModalContent, {
        width: (0, _v54.rem)(480),
        maxW: (0, _v54.rem)(480),
        children: [(0, _v1.jsx)(_v52.ModalHeader, {
          display: "flex",
          alignItems: "center",
          gap: "2",
          pb: "4",
          children: (0, _v1.jsx)(_v60.HeaderContent, {
            showBackButton: !1,
            showPlusButton: !1,
            disablePlusButton: !0,
            onCloseButtonClick: () => {
              _v2("review_links_panel"), _v3();
            },
            children: (0, _v55.translate)({
              singular: "Review links",
              dictionary: {
                es: {
                  singular: "Enlaces de revisión"
                },
                "de-DE": {
                  singular: "Review-Links"
                },
                "fr-FR": {
                  singular: "Liens de révision"
                },
                "ja-JP": {
                  singular: "レビューリンク"
                },
                "ko-KR": {
                  singular: "리뷰 링크"
                },
                "pt-BR": {
                  singular: "Links de revisão"
                },
                "zh-CN": {
                  singular: "评论链接"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v50.ModalBody, {
          children: (0, _v1.jsx)(_v63.VideoShareViewStoreProvider, {
            children: (0, _v1.jsx)(_v66, {
              clipId: _v0
            })
          })
        })]
      })]
    }),
    _v68 = ({
      clipId: _v0,
      onResult: _v1
    }) => {
      let {
          isLoading: _v2,
          canCreateReviewLinks: _v3
        } = (0, _v57.useGetReviewLinks)(_v0, "clip"),
        _v4 = (0, _v4.useRef)(!1);
      return (0, _v4.useEffect)(() => {
        _v2 || _v4.current || (_v4.current = !0, _v1(_v3));
      }, [_v2, _v3, _v1]), null;
    },
    _v69 = ({
      teamOwnerId: _v0,
      trackDismissal: _v1,
      onVideoConfirmed: _v2,
      onClose: _v3
    }) => {
      let [_v4, _v5] = (0, _v4.useState)(!0),
        [_v6, _v7] = (0, _v4.useState)(null),
        [_v8, _v9] = (0, _v4.useState)(null),
        _v10 = (0, _v4.useRef)(!1),
        _v11 = (0, _v4.useRef)(null),
        _v12 = (0, _v4.useCallback)(_v0 => {
          _v9(_v0), _v11.current?.();
        }, []),
        _v13 = (0, _v4.useCallback)(async _v0 => {
          if (!_v0) return;
          let _v1 = Number(_v0.split("/").pop());
          _v1 && (_v10.current = !0, _v2(), _v7(_v1), await new Promise(_v0 => {
            _v11.current = _v0;
          }));
        }, [_v2]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v59.VideoListModal, {
          closeVideoModal: () => {
            _v10.current ? (_v10.current = !1, _v5(!1)) : (_v1("select_video_modal"), _v3());
          },
          isVideoListModalOpen: _v4,
          resourceId: 0,
          resourceOwnerId: _v0,
          type: "create_review_link",
          selectedVideo: null,
          onSuccess: _v13
        }), null !== _v6 && null === _v8 && (0, _v1.jsx)(_v68, {
          clipId: _v6,
          onResult: _v12
        }), null !== _v6 && null !== _v8 && (0, _v1.jsx)(_v67, {
          reviewClipId: _v6,
          canCreateReviewLinks: _v8,
          trackDismissal: _v1,
          onDone: _v3
        })]
      });
    },
    _v70 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v64.useViewer)(),
        _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        [_v3, _v4] = (0, _v4.useState)(!1),
        [_v5, _v6] = (0, _v4.useState)(null),
        {
          trackReviewCtaDismissed: _v7,
          trackReviewEntryPointVideoConfirmed: _v8
        } = (0, _v56.useMaximizeReviewAdoptionTracking)(),
        _v9 = (0, _v4.useCallback)(_v0 => {
          _v6(_v0), _v4(!0);
        }, []),
        _v10 = (0, _v4.useCallback)(_v0 => {
          _v5 && _v7({
            dismissalStage: _v0,
            entryPoint: _v5
          });
        }, [_v5, _v7]),
        _v11 = (0, _v4.useCallback)(() => {
          _v5 && _v8({
            entryPoint: _v5
          });
        }, [_v5, _v8]);
      return (0, _v1.jsxs)(_v65.Provider, {
        value: {
          openReviewModal: _v9
        },
        children: [_v0, _v3 && (0, _v1.jsx)(_v69, {
          teamOwnerId: _v2,
          trackDismissal: _v10,
          onVideoConfirmed: _v11,
          onClose: () => _v4(!1)
        })]
      });
    };
  _v0.s(["ReviewModalProvider", 0, _v70, "useReviewModal", 0, () => (0, _v4.useContext)(_v65)], 0);
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = (0, _v4.createContext)({
      openTransferFileModal: () => {}
    }),
    _v75 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v64.useViewer)(),
        _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        _v3 = (0, _v71.useToast)(),
        [_v4, _v5] = (0, _v4.useState)(!1),
        [_v6, _v7] = (0, _v4.useState)(null),
        [_v8, _v9] = (0, _v4.useState)(null),
        {
          trackTransferEntryPointVideoConfirmed: _v10,
          trackTransferCtaDismissed: _v11
        } = (0, _v72.useFileTransferAdoptionTracking)(),
        {
          data: _v12,
          isLoading: _v13
        } = (0, _v73.useGetUnlockedVideo)(() => _v6 ? {
          where: {
            videoId: _v6
          },
          select: ["fileTransfer.link"]
        } : null),
        _v14 = !!_v6 && !_v13 && void 0 !== _v12,
        _v15 = (0, _v4.useRef)(!1);
      (0, _v4.useEffect)(() => {
        if (!_v14 || _v15.current) return;
        _v15.current = !0;
        let _v0 = _v12?.fileTransfer?.link;
        _v0 ? (_v8 && _v10({
          entryPoint: _v8
        }), window.open(_v0, "_blank")) : _v3({
          title: (0, _v55.translate)({
            singular: "File transfer is not available for this video.",
            dictionary: {
              es: {
                singular: "La transferencia de archivos no está disponible para este vídeo."
              },
              "de-DE": {
                singular: "Dateiübertragung ist für dieses Video nicht verfügbar."
              },
              "fr-FR": {
                singular: "Le transfert de fichier n’est pas disponible pour cette vidéo."
              },
              "ja-JP": {
                singular: "この動画ではファイル転送は利用できません。"
              },
              "ko-KR": {
                singular: "이 동영상에서는 파일 전송을 사용할 수 없습니다."
              },
              "pt-BR": {
                singular: "A transferência de arquivo não está disponível para este vídeo."
              },
              "zh-CN": {
                singular: "此视频不支持文件传输。"
              }
            }
          }),
          variant: "warning"
        }), _v7(null);
      }, [_v14, _v12, _v3, _v10, _v8]);
      let _v16 = (0, _v4.useCallback)(_v0 => {
        _v9(_v0), _v5(!0);
      }, []);
      return (0, _v1.jsxs)(_v74.Provider, {
        value: {
          openTransferFileModal: _v16
        },
        children: [_v0, _v4 && (0, _v1.jsx)(_v59.VideoListModal, {
          closeVideoModal: () => {
            _v8 && _v11({
              dismissalStage: "select_video_modal",
              entryPoint: _v8
            }), _v5(!1);
          },
          isVideoListModalOpen: _v4,
          resourceId: 0,
          resourceOwnerId: _v2,
          type: "video_file_transfer",
          selectedVideo: null,
          onSuccess: _v0 => {
            if (_v0) {
              let _v0 = Number(_v0.split("/").pop());
              _v0 && (_v15.current = !1, _v7(_v0), _v5(!1));
            }
          }
        })]
      });
    };
  _v0.s(["TransferFileModalProvider", 0, _v75, "useTransferFileModal", 0, () => (0, _v4.useContext)(_v74)], 0);
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v4.useContext)(_v79.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = _v1?.user?.id,
      {
        data: _v4,
        error: _v5,
        mutate: _v6,
        isLoading: _v7,
        size: _v8,
        setSize: _v9
      } = (0, _v77.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
        select: ["uri", "name", "status", ..._v80.LIST_QUERY_FIELDS],
        where: {
          userId: _v2,
          teamMemberId: _v3
        },
        query: {
          perPage: _v80.PER_PAGE_DATA,
          sort: "created_on",
          direction: "desc"
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4"
        }
      } : null, {
        revalidateOnFocus: !1,
        errorRetryCount: 0
      }),
      _v10 = _v4?.flatMap(_v0 => _v0.data).filter(_v0 => _v0.status === _v80.STARRED_ITEM_STATUS_ACTIVE),
      {
        isLoadingMore: _v11,
        isDone: _v12
      } = (0, _v78.getInfiniteRequestLoadingState)({
        data: _v4,
        itemsPerPage: _v80.PER_PAGE_DATA,
        size: _v8
      });
    return (0, _v1.jsx)(_v81.StarredItemsDataContext.Provider, {
      value: {
        starredListData: _v10,
        mutateStarredItemsData: _v6,
        fetchNextPageItems: () => {
          _v9(_v8 + 1);
        },
        starredListError: _v5,
        isLoading: _v7,
        starredListResponse: _v4,
        isLoadingMore: _v11,
        isDone: _v12
      },
      children: _v0
    });
  };
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v4.useContext)(_v79.ViewerContext),
        _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        _v3 = _v1?.user?.id,
        {
          data: _v4,
          mutate: _v5
        } = (0, _v77.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
          select: ["video.uri", "folder.uri", "uri", "type"],
          where: {
            userId: _v2,
            teamMemberId: _v3
          },
          query: {
            perPage: 100
          }
        } : null, {
          revalidateOnFocus: !1,
          errorRetryCount: 0
        });
      return (0, _v1.jsx)(_v84.StarredItemUriContext.Provider, {
        value: {
          starredItemsUri: (0, _v83.organiseStarredItemData)(_v4 && _v4[0]?.data),
          mutateStarredItemsUri: _v5,
          starredItemsUriData: _v4
        },
        children: _v0
      });
    },
    _v86 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v85, {
      children: (0, _v1.jsx)(_v82, {
        children: _v0
      })
    });
  var _v87 = _v0.i(0);
  function _v88({
    overlayStyle: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v87.Box, {
      position: "absolute",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      width: "100%",
      backgroundColor: "blackAlpha.600",
      _dark: {
        backgroundColor: "blackAlpha.800"
      },
      zIndex: 0,
      height: _v0.height
    }) : null;
  }
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = "video-library:wayfinder-side-nav-open",
    _v95 = _v0 => {
      if (!_v0) return;
      let _v1 = window.localStorage.getItem(`${_v94}:${_v0}`);
      return "true" === _v1 || "false" !== _v1 && void 0;
    };
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0);
  let _v111 = _v0 => (0, _v1.jsx)(_v110.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 4a2 2 0 0 1 2-2h9a5 5 0 0 1 5 5v9a2 2 0 0 1-2 2V7a3 3 0 0 0-3-3H6Zm-4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Zm5.896 2.557c0-1.137.938-2.059 2.094-2.059 1.157 0 2.094.922 2.094 2.059 0 .785-.447 1.468-1.105 1.815 1.133.399 1.943 1.464 1.943 2.714a.415.415 0 0 1-.419.412H7.477a.415.415 0 0 1-.418-.412c0-1.25.81-2.315 1.942-2.714a2.054 2.054 0 0 1-1.105-1.815Z",
      fill: "currentColor"
    })
  });
  var _v112 = _v0.i(0),
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
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0);
  let _v147 = ({
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
    let _v23 = (0, _v101.useWayfinderPageName)(),
      _v24 = (0, _v4.useContext)(_v79.ViewerContext),
      _v25 = _v24?.teamUser?.ownerId ?? _v24?.user?.id,
      _v26 = (0, _v3.useRouter)(),
      _v27 = (0, _v107.getFolderPageUriFromApiUri)(_v21),
      _v28 = (0, _v107.getUserIdFromFolderUri)(_v21),
      _v29 = (0, _v107.getFolderIdFromFolderUri)(_v21),
      _v30 = (0, _v137.useNotification)(),
      [_v31, _v32] = (0, _v4.useState)(!1),
      [_v33, _v34] = (0, _v4.useState)(_v13),
      {
        settings: _v35
      } = (0, _v118.useOrionSettings)(),
      _v36 = (0, _v46.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        revalidateFolder: _v37,
        revalidateFolderItems: _v38,
        revalidateSetOfFolderItems: _v39,
        revalidateTopLevelFolders: _v40
      } = (0, _v138.useRevalidate)(),
      {
        draggableItemIsHovering: _v41,
        dropRef: _v42
      } = (0, _v145.useDropFolder)({
        dropTargetType: _v144.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: _v3,
        allowedDropEffect: _v144.ALLOWED_DROP_EFFECTS.MOVE,
        dropFileForUploadConfig: null != _v25 && _v3?.metadata?.interactions?.uploadVideo ? {
          targetUserId: _v25,
          folderId: _v29,
          folderName: _v33,
          uploadClipProperties: _v20
        } : void 0
      }),
      {
        capabilities: _v43
      } = (0, _v13.useCapability)(["canSeeUpsellModalOnShare", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasExtraEmbedOptions", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks"], _v28),
      {
        capabilities: _v44
      } = (0, _v13.useCapability)(["canPerformBulkTranslations"], _v25),
      _v45 = !!_v43.canGenerateClipTextTranslation,
      _v46 = !!_v43.canGenerateClipTranslation,
      _v47 = (_v46 || _v45) && !!_v44.canPerformBulkTranslations,
      _v48 = (0, _v116.useCanUpSell)(),
      {
        openShareFolderModal: _v49
      } = (0, _v141.useShareFolderModal)(),
      _v50 = (0, _v130.useCopyFolderLinkToast)(),
      _v51 = (0, _v135.useManageShareActionBuilder)(),
      _v52 = (0, _v139.useReviewLinkCopiedToast)(),
      _v53 = (0, _v131.useCreateAndCopyFolderReviewLink)((0, _v4.useCallback)((_v0, _v1) => {
        _v52(() => _v49?.(_v0, "sidebar", "CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v52, _v49])),
      [_v54, _v55] = (0, _v4.useState)(""),
      {
        openBulkAiModal: _v56
      } = (0, _v22.useBulkAiModal)(),
      [_v57, _v58] = (0, _v4.useState)(_v11),
      {
        openDeleteFolderModal: _v59
      } = (0, _v132.useDeleteFolderModal)(),
      {
        openMoveModal: _v60
      } = (0, _v136.useMoveModal)(),
      {
        openFolderDefaultsModal: _v61
      } = (0, _v133.useFolderDefaultsModal)(),
      {
        openFolderSettingsModal: _v62
      } = (0, _v134.useFolderSettingsModal)(),
      {
        openSlackIntegrationModal: _v63
      } = (0, _v142.useSlackIntegrationModal)(),
      {
        open: _v64,
        close: _v65
      } = (0, _v100.useUpsellModal)(),
      {
        handleStarMenuState: _v66
      } = (0, _v146.useStarMenuItem)(),
      {
        sendEvent: _v67
      } = (0, _v129.useAnalyticsEvents)(),
      {
        trackLibraryFolderOpened: _v68
      } = (0, _v113.useLibraryTracking)();
    (0, _v4.useEffect)(() => {
      _v34(_v13);
    }, [_v13]);
    let {
        mutate: _v69,
        data: _v70,
        size: _v71,
        setSize: _v72,
        error: _v73
      } = (0, _v117.useGetUserProjectItemsInfinite)(() => _v57 || _v11 ? {
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
        isDone: _v74,
        isLoadingMore: _v75
      } = (0, _v78.getInfiniteRequestLoadingState)({
        data: _v70,
        error: _v73,
        size: _v71,
        itemsPerPage: 100
      });
    (0, _v4.useEffect)(() => {
      (_v57 || _v11) && _v70 && !_v74 && !_v75 && _v72(_v71 + 1);
    }, [_v57, _v11, _v70, _v74, _v75, _v71, _v72]);
    let _v76 = (0, _v4.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v69(_v0 => _v0?.map(_v0 => ({
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
      }, [_v69]),
      _v77 = _v0 ? _v4.default.cloneElement(_v0, {
        onRename: () => {
          _v32(!0);
        }
      }) : null;
    if (_v70 && 0 === _v70[0].total) return (0, _v1.jsx)(_v125.ExpandableMenuItem, {
      action: _v77,
      active: _v26.query.folderId === `${_v29}`,
      hasActiveColor: _v6,
      hoverColor: "text-primary",
      href: _v27,
      icon: _v10,
      isEditing: _v31,
      label: _v35.enable_rename_folder && _v31 ? (0, _v1.jsx)(_v128.FolderEditableTitle, {
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
    let _v78 = _v70?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data)?.filter(_v0 => _v0.folder),
      _v79 = _v0 => {
        _v38(_v0?.parentFolder?.uri ?? ""), _v76(_v0);
      },
      _v80 = (_v0, _v1, _v2) => {
        _v127.BPAnalyticsV2.openFolderShare({
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
    return (0, _v1.jsx)(_v125.ExpandableMenuItem, {
      action: _v77,
      active: _v26.query.folderId === `${_v29}`,
      hasActiveColor: _v6,
      hasToggle: _v9,
      icon: _v10,
      hoverColor: "text-primary",
      href: _v27,
      onClick: _v15,
      id: `folder-menu-item-button-${_v21}`,
      isEditing: _v31,
      isLoading: !!_v14 && _v14.has(_v21) || (_v57 || _v11) && !_v70,
      isFetching: (_v57 || _v11) && !_v70,
      label: _v35.enable_rename_folder && _v31 ? (0, _v1.jsx)(_v128.FolderEditableTitle, {
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
      onClickToggle: () => _v16 ? _v16() : _v58(!_v57),
      isOpen: _v16 ? _v11 : _v57,
      ..._v22,
      children: _v78?.map(({
        folder: _v0
      }) => {
        let _v1 = parseInt(_v0?.uri.split("/").pop()),
          _v2 = parseInt(_v0?.uri.split("/")?.[2] ?? ""),
          _v3 = _v0?.metadata?.connections?.parentFolder,
          _v4 = _v0?.uri && (_v1 ?? _v24?.vimeoHttpsUrl) + (0, _v107.getFolderPageUriFromApiUri)(_v0?.uri),
          _v5 = _v0?.uri && _v1 + (0, _v107.getFolderAnalyticsPageUriFromApiUri)(_v0.uri),
          {
            canDelete: _v6,
            canEdit: _v7,
            canEditSettings: _v8,
            canInvite: _v9
          } = (0, _v143.getFolderPermissions)(_v0),
          _v10 = _v43.hasExtraEmbedOptions && _v8,
          _v11 = !_v43.hasProhibitMultipleReviewLinks && !!_v43.hasMultipleReviewLinks,
          {
            canCreateReviewLink: _v12,
            canCopyReviewPageLink: _v13,
            canManageReviewLinks: _v14,
            reviewPageLink: _v15
          } = (0, _v140.getReviewLinkMenuState)({
            hasReviewLinkCapabilities: _v11,
            hasMultipleReviewLinks: !!_v43.hasMultipleReviewLinks,
            reviewLinks: _v0?.reviewLinks,
            canUpsell: _v48,
            getReviewPageUrl: _v0 => (0, _v115.getFolderReviewPageUrl)(_v0, _v1, _v2)
          }),
          _v16 = _v0 ? _v66("folder", _v0) : {
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
        return (0, _v1.jsx)(_v147, {
          folderId: _v1,
          folderOwnerId: _v2,
          action: _v0 && (0, _v1.jsx)(_v114.FolderMenu, {
            canTranslateVideos: _v47,
            handleTranslateVideo: () => {
              (0, _v122.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
                ...(0, _v124.buildActionBpContext)({
                  action_type: "click",
                  feature: null
                }),
                ...(0, _v120.buildProductAnalyticsBpContext)({
                  product: "ai",
                  feature: "ai_bulk_translate",
                  location: "sidebar",
                  copy: "translate"
                }),
                ...(0, _v121.buildWebBpContext)({
                  page_name: "video_library"
                }),
                ...(0, _v123.buildTeamBpContextFromTeamUser)(_v24?.teamUser)
              }, 1, {
                value: String(1),
                device_type: (0, _v119.default)()
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
              _v55(_v0.name), _v9.BigPictureClient.sendEvent(new _v9.Event("open_folder_overflow", 8, {
                product: "video_library",
                path: window.location.pathname,
                location: "sidebar",
                folder_id: _v1,
                is_subfolder: !!_v3,
                feature: _v126.AnalyticsFeatures.VIDEO_LIBRARY,
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
              _v43.canSeeUpsellModalOnShare ? _v64({
                tracking: {
                  params: {
                    feature: _v126.AnalyticsFeatures.VIDEO_LIBRARY,
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
                onClose: _v65
              }) : _v80(_v0);
            },
            canDelete: _v6,
            onDelete: () => {
              _v59?.(_v0?.name, parseInt(_v0?.uri?.split("/")?.pop() || ""), "sidebar", _v0?.metadata?.connections?.parentFolder.uri, parseInt(_v0?.uri.split("/")?.[2]), _v0.isPrivateToUser, !!_v7, _v19), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
              _v61({
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
                    content: (0, _v55.translate)({
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
              _v62({
                userId: parseInt(_v0?.uri.split("/")?.[2]),
                parentFolderUri: _v0?.metadata?.connections?.parentFolder.uri,
                currentFolderUri: _v0.uri,
                location: "sidebar",
                onSettingsChange: _v79,
                isEditingFolder: !0,
                initialColor: _v0?.settings?.color
              }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
              _v60({
                activeFolderURI: _v0.uri,
                feature: _v126.AnalyticsFeatures.VIDEO_LIBRARY,
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
              }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
              }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
              _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
              _v63({
                userId: parseInt(_v0?.uri.split("/")?.[2]),
                hasSlackIntegration: !!_v0?.slackIncomingWebhooksId,
                isSlackNotificationEnabled: !!_v0?.isSlackNotificationEnabled,
                folderId: _v1,
                folderName: _v0?.name || "",
                currentFolderUri: _v0?.uri || "",
                async updateSubFolderData(_v0) {
                  _v37(_v21), _v39(_v0), _v3?.uri ? _v38(_v3.uri) : _v40();
                }
              }), _v0?.slackIncomingWebhooksId ? _v67("vimeo.open_connection_settings", -1, {
                includeActionContext: !0,
                element: "dropdown",
                feature: "integrations_settings",
                location: "sidebar",
                folderId: _v1,
                integrationType: "folder_base_connect",
                parentFolderId: null,
                isPrivateToMe: _v0.isPrivateToUser,
                isPinned: _v0.isPinned
              }) : _v67("vimeo.connect_folder", -1, {
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
              _v80(_v0, "CREATE_REVIEW_LINK_MODAL");
            },
            canCopyReviewPageLink: _v13,
            reviewPageLink: _v15,
            onCopyReviewPageLink: () => {
              if (_v15) {
                let _v0 = _v0?.reviewLinks?.[0]?.uri;
                _v52(_v0 ? () => _v80(_v0, "CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
              } else _v53(_v1, _v2, _v0?.uri);
            },
            canManageReviewLinks: _v14,
            onManageReviewLinks: () => {
              _v43.canSeeUpsellModalOnShare ? _v64({
                tracking: {
                  params: {
                    feature: _v126.AnalyticsFeatures.VIDEO_LIBRARY,
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
                onClose: _v65
              }) : _v80(_v0, "REVIEW_LINKS_PANEL");
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
            _v12 && _v2?.(), _v68({
              folderUri: _v0?.uri,
              isPrivateToUser: _v0?.isPrivateToUser
            }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click_folder_title", 2, {
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
  var _v148 = _v0.i(0);
  let _v149 = () => (0, _v1.jsx)(_v87.Box, {
    padding: `${(0, _v54.rem)(10)} ${(0, _v54.rem)(0)}`,
    children: Array(6).fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v87.Box, {
      display: "grid",
      gridTemplateColumns: `${(0, _v54.rem)(32)} ${_v1 % 2 == 0 ? "50%" : "80%"}`,
      gridGap: (0, _v54.rem)(10),
      padding: `${(0, _v54.rem)(8)} ${(0, _v54.rem)(0)}`,
      children: [(0, _v1.jsx)(_v148.Skeleton, {
        borderRadius: "40%",
        height: (0, _v54.rem)(28),
        width: (0, _v54.rem)(28)
      }), (0, _v1.jsx)(_v148.Skeleton, {
        borderRadius: (0, _v54.rem)(20),
        height: (0, _v54.rem)(28)
      })]
    }, `side-nav-loading-folders-block-${_v1}`))
  });
  var _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0);
  let _v153 = ({
    onClick: _v0,
    isPrivateToMe: _v1 = !1
  }) => (0, _v1.jsx)(_v150.Tooltip, {
    label: (0, _v55.translate)({
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
    children: (0, _v1.jsx)(_v152.Button, {
      variant: "minimalTransparent",
      format: "basic",
      icon: (0, _v1.jsx)(_v151.Plus, {}),
      onClick: _v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v0();
      },
      size: "sm",
      "aria-label": (0, _v55.translate)({
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
  var _v154 = _v0.i(0);
  let _v155 = {
    view: "nobody",
    embed: "private",
    comments: "nobody",
    add: !1,
    download: !1
  };
  function _v156(_v0) {
    let _v1 = (0, _v4.useContext)(_v79.ViewerContext),
      _v2 = _v1?.user?.teamUserPermissionLevel === "Uploader",
      {
        data: _v3
      } = (0, _v154.useGetUser)(() => _v0 ? {
        select: ["preferences.videos"],
        where: {
          userId: _v0
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      {
        capabilities: _v4
      } = (0, _v13.useCapability)(["canAllowDownloads"], _v0 ?? void 0),
      _v5 = _v3?.preferences?.videos?.privacy;
    return (0, _v4.useMemo)(() => {
      if (_v0) return _v2 ? {
        privacy: _v155,
        spatial: {}
      } : {
        content_rating: _v3?.preferences?.videos?.rating,
        password: _v3?.preferences?.videos?.password,
        privacy: _v5 ? {
          ..._v5,
          download: _v4.canAllowDownloads ? _v5.download : void 0
        } : {},
        spatial: {}
      };
    }, [_v0, _v2, _v3, _v5, _v4.canAllowDownloads]);
  }
  _v0.s(["useTeamUploadClipProperties", 0, _v156], 0);
  var _v157 = _v0.i(0);
  let _v158 = ({
    closeSideNav: _v0,
    isMobile: _v1,
    loadingSideNavFolderURIs: _v2 = new Set(),
    pathname: _v3,
    teamOwnerId: _v4
  }) => {
    let _v5 = (0, _v101.useWayfinderPageName)(),
      _v6 = (0, _v4.useContext)(_v79.ViewerContext),
      _v7 = (0, _v137.useNotification)(),
      {
        notifyItemMoveFailure: _v8,
        notifyItemMoveSuccess: _v9,
        notifyItemMoveToWorkspaceSuccess: _v10
      } = (0, _v137.useNotifications)(),
      {
        revalidateTopLevelFolders: _v11,
        revalidateFolder: _v12,
        revalidateFolderItems: _v13,
        revalidateSetOfFolderItems: _v14,
        revalidateRootItems: _v15
      } = (0, _v138.useRevalidate)(),
      {
        capabilities: _v16,
        ready: _v17
      } = (0, _v13.useCapability)(["canCreateRootFolders", "canSeeUpsellModalOnShare", "hasContentSpaceEnabled", "hasExtraEmbedOptions", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasProhibitMultipleReviewLinks", "hasMultipleReviewLinks", "canPerformBulkTranslations"], _v4),
      _v18 = !!_v16.canGenerateClipTextTranslation,
      _v19 = !!_v16.canGenerateClipTranslation,
      _v20 = (_v19 || _v18) && !!_v16.canPerformBulkTranslations,
      _v21 = _v156(_v4),
      _v22 = _v17 ? _v16?.hasContentSpaceEnabled ? (0, _v55.translate)({
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
      }) : (0, _v55.translate)({
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
      }) : "",
      {
        openFolderSettingsModal: _v23
      } = (0, _v134.useFolderSettingsModal)(),
      {
        openFolderDefaultsModal: _v24
      } = (0, _v133.useFolderDefaultsModal)(),
      {
        open: _v25,
        close: _v26
      } = (0, _v100.useUpsellModal)(),
      {
        openShareFolderModal: _v27
      } = (0, _v141.useShareFolderModal)(),
      _v28 = (0, _v130.useCopyFolderLinkToast)(),
      _v29 = (0, _v135.useManageShareActionBuilder)(),
      {
        openDeleteFolderModal: _v30
      } = (0, _v132.useDeleteFolderModal)(),
      {
        openMoveModal: _v31
      } = (0, _v136.useMoveModal)(),
      {
        openSlackIntegrationModal: _v32
      } = (0, _v142.useSlackIntegrationModal)(),
      {
        handleStarMenuState: _v33
      } = (0, _v146.useStarMenuItem)(),
      {
        sendEvent: _v34
      } = (0, _v129.useAnalyticsEvents)(),
      {
        openBulkAiModal: _v35
      } = (0, _v22.useBulkAiModal)(),
      {
        isEnabled: _v36,
        variant: _v37
      } = (0, _v24.useEnableFolderBulkPrivacy)(),
      {
        openBulkPrivacyModal: _v38
      } = (0, _v23.useBulkPrivacyModal)(),
      _v39 = (0, _v116.useCanUpSell)(),
      _v40 = (0, _v139.useReviewLinkCopiedToast)(),
      _v41 = (0, _v131.useCreateAndCopyFolderReviewLink)((0, _v4.useCallback)((_v0, _v1) => {
        _v40(() => _v27?.(_v0, "sidebar", "CREATE_REVIEW_LINK_MODAL", _v1));
      }, [_v40, _v27])),
      _v42 = (0, _v46.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        trackLibraryFolderContextMenuActionClicked: _v43,
        trackLibraryFolderOpened: _v44
      } = (0, _v113.useLibraryTracking)(),
      {
        data: _v45,
        size: _v46,
        setSize: _v47,
        error: _v48
      } = (0, _v112.useGetUserProjectsInfinite)(() => _v4 ? {
        where: {
          userId: _v4
        },
        select: ["isPinned", "isPrivateToUser", "hasSubfolder", "metadata.connections.folders.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.delete", "metadata.interactions.invite", "metadata.interactions.edit", "metadata.interactions.editSettings", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "name", "privacy.view", "isSlackNotificationEnabled", "reviewLinks.uri", "settings.color", "settings.embedPresetId", "settings.isEmbedPresetInheritanceEnabled", "slackIncomingWebhooksId", "uri", "useParentSlackSettings", "user.uri"],
        query: {
          excludePrivateToMeFolder: !0,
          perPage: 100,
          topLevelOnly: !0
        }
      } : null, {
        revalidateAll: !0
      }),
      {
        isLoadingMore: _v49,
        isDone: _v50
      } = (0, _v78.getInfiniteRequestLoadingState)({
        data: _v45,
        error: _v48,
        size: _v46,
        itemsPerPage: 100
      });
    (0, _v4.useEffect)(() => {
      !_v45 || _v50 || _v49 || _v47(_v46 + 1);
    }, [_v45, _v50, _v49, _v46, _v47]);
    let _v51 = _v45?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data)?.filter(_v0 => !!_v0),
      _v52 = () => {
        _v11(), _v15();
      },
      _v53 = (0, _v4.useCallback)(({
        uri: _v0,
        folder: _v1,
        defaultPanel: _v2,
        editReviewLinkUri: _v3
      }) => {
        _v16.canSeeUpsellModalOnShare ? _v25({
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
          onClose: _v26
        }) : _v27?.(_v0, "sidebar", _v2, _v3), _v127.BPAnalyticsV2.openFolderShare({
          location: "sidebar",
          element: "ellipses",
          teamUser: _v6?.teamUser,
          folder: _v1,
          webCtx: {
            path: window.location.pathname,
            page_name: _v1.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v26, _v27, _v25, _v16.canSeeUpsellModalOnShare]),
      _v54 = (0, _v4.useCallback)(({
        folder: _v0,
        canEditSettings: _v1
      }) => {
        _v28({
          onManage: _v29({
            canEdit: _v1,
            entityUri: _v0.uri,
            location: "sidebar",
            panel: "INVITE_PANEL"
          })
        }), _v127.BPAnalyticsV2.copyFolderLink({
          location: "sidebar",
          element: "ellipses",
          teamUser: _v6?.teamUser,
          folder: _v0,
          webCtx: {
            page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
          }
        });
      }, [_v28, _v29, _v6?.teamUser]);
    return (0, _v1.jsxs)(_v10.Flex, {
      flexDirection: "column",
      gap: "2px",
      children: [(0, _v1.jsx)(_v106.MenuItem, {
        icon: _v16?.hasContentSpaceEnabled ? (0, _v1.jsx)(_v111, {}) : (0, _v1.jsx)(_v109.VideosStack, {}),
        label: _v22,
        href: `${_v93.Path.TeamLibrary}?library_referrer=sidebar`,
        active: _v3 === _v93.Path.TeamLibrary,
        action: !!_v16.canCreateRootFolders && (0, _v1.jsx)(_v153, {
          onClick: () => {
            _v23({
              userId: _v4,
              parentFolderUri: null,
              currentFolderUri: null,
              location: "sidebar"
            }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
      }), (0, _v1.jsx)(_v10.Flex, {
        flexDirection: "column",
        gap: "2px",
        "data-id": "library_side_nav_folder_container",
        children: _v51 ? _v51.map(_v0 => {
          let {
              canDelete: _v1,
              canEdit: _v2,
              canEditSettings: _v3,
              canInvite: _v4
            } = (0, _v143.getFolderPermissions)(_v0),
            {
              name: _v5,
              uri: _v6,
              metadata: _v7,
              isPrivateToUser: _v8
            } = _v0,
            _v9 = _v7?.connections?.parentFolder,
            _v10 = parseInt(_v6.split("/")?.[2]),
            _v11 = parseInt(_v6.split("/").pop() ?? ""),
            _v12 = !!_v16.hasContentSpaceEnabled,
            _v13 = _v0 => _v43({
              isPrivateToUser: _v8,
              libraryFolderId: String(_v11),
              libraryFolderContextMenuAction: _v0
            }),
            _v14 = _v16.hasExtraEmbedOptions && _v3,
            _v15 = _v6?.vimeoHttpsUrl + (0, _v107.getFolderPageUriFromApiUri)(_v6),
            _v16 = _v6?.vimeoHttpsUrl + (0, _v107.getFolderAnalyticsPageUriFromApiUri)(_v6),
            _v17 = !_v16.hasProhibitMultipleReviewLinks && !!_v16.hasMultipleReviewLinks,
            {
              canCreateReviewLink: _v18,
              canCopyReviewPageLink: _v19,
              canManageReviewLinks: _v20,
              reviewPageLink: _v21
            } = (0, _v140.getReviewLinkMenuState)({
              hasReviewLinkCapabilities: _v17,
              hasMultipleReviewLinks: !!_v16.hasMultipleReviewLinks,
              reviewLinks: _v0.reviewLinks,
              canUpsell: _v39,
              getReviewPageUrl: _v0 => (0, _v115.getFolderReviewPageUrl)(_v0, _v11, _v10)
            }),
            _v22 = _v0 ? _v33("folder", _v0) : {
              isItemStarred: !1,
              onStarClick: void 0
            },
            {
              isItemStarred: _v23,
              onStarClick: _v24
            } = _v22,
            _v25 = () => {
              _v23 && _v24?.();
            },
            _v26 = (_v0, _v1, _v2, _v3) => {
              _v11(), _v1[0].parentFolder?.uri ? _v13(_v1[0]?.parentFolder?.uri ?? "") : _v15(), "root" !== _v0 && _v13(_v0.uri);
              let _v4 = "root" === _v0 ? _v22 : _v0.name,
                _v5 = "root" === _v0 ? "/library" : (0, _v107.getFolderPageUriFromApiUri)(_v0.uri);
              _v2 && _v3 ? _v10(_v1, {
                label: _v4,
                workspaceName: _v3
              }, () => {
                _v6 && (0, _v157.switchTeam)(_v2, _v6.xsrft).finally(() => {
                  window.location.href = _v5;
                });
              }) : _v9(_v1[0].name, {
                label: _v4,
                link: _v5
              });
            },
            _v27 = (_v0, _v1) => {
              _v8(_v1[0].name, "root" === _v0 ? _v22 : _v0.name);
            };
          return (0, _v1.jsx)(_v147, {
            action: (0, _v1.jsx)(_v114.FolderMenu, {
              canTranslateVideos: _v2 && _v20,
              handleTranslateVideo: () => {
                _v13("translate_videos"), _v35({
                  folderId: _v11,
                  isFolder: !0,
                  folderName: _v5,
                  canTranslateText: _v18,
                  canTranslateDubbing: _v19,
                  onComplete: () => {
                    let _v0 = _v6?.teamUser?.ownerId ?? _v6?.user?.id;
                    _v0 && _v42(_v0);
                  }
                });
              },
              placement: "right-start",
              usePortal: !1,
              size: "sm",
              onClick: () => {
                _v9.BigPictureClient.sendEvent(new _v9.Event("open_folder_overflow", 8, {
                  product: "video_library",
                  path: window.location.pathname,
                  location: "sidebar",
                  folder_id: _v11,
                  is_subfolder: !!_v9,
                  feature: _v126.AnalyticsFeatures.VIDEO_LIBRARY,
                  page: _v5,
                  target_object_location_type: _v0.isPrivateToUser ? "private_folder" : "team_folder",
                  actor_team_role: _v6?.teamUser?.plainTextPermissionLevel ?? null,
                  is_my_videos: _v0.isPrivateToUser && !!_v12,
                  entry_page: "video_library"
                }));
              },
              canShare: _v4 || _v16.canSeeUpsellModalOnShare,
              onShare: () => {
                _v13("share"), _v53({
                  uri: _v6,
                  folder: _v0
                });
              },
              canDelete: _v1,
              onDelete: () => {
                _v13("delete"), _v30?.(_v5, _v11, "sidebar", _v9?.uri, _v10, _v8, !!_v12, _v25), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
                _v13("folder_setting"), _v23({
                  userId: _v10,
                  parentFolderUri: _v9?.uri,
                  currentFolderUri: _v6,
                  location: "sidebar",
                  onSettingsChange: _v52,
                  isEditingFolder: !0,
                  initialColor: _v0?.settings?.color
                }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
                _v13("folder_setting"), _v24({
                  folderId: _v11,
                  ownerId: _v10,
                  isFolderOwner: _v6?.user?.uri === _v0?.user?.uri,
                  presetId: _v0?.settings?.embedPresetId ?? null,
                  isInheritanceEnabled: _v0?.settings?.isEmbedPresetInheritanceEnabled,
                  displayUpsell: !_v14,
                  location: "sidebar",
                  feature: _v126.AnalyticsFeatures.VIDEO_LIBRARY,
                  page: _v5,
                  onSave: () => {
                    _v7({
                      content: (0, _v55.translate)({
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
                _v13("move"), _v31({
                  activeFolderURI: _v6,
                  feature: _v126.AnalyticsFeatures.VIDEO_LIBRARY,
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
                    _v26(_v0, _v1, _v2, _v3);
                  },
                  onMoveFailure: ({
                    selectedDestination: _v0,
                    items: _v1
                  }) => {
                    _v27(_v0, _v1);
                  },
                  teamOwnerId: _v10
                }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
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
              canBulkPrivacyChange: _v2 && _v36,
              onBulkPrivacyChange: () => {
                _v38({
                  userId: _v10,
                  folderUris: [_v6],
                  folderName: _v5,
                  location: "side_nav_folder_menu",
                  variant: _v37,
                  onSuccess: () => {}
                });
              },
              canEdit: _v2,
              analyticsPageLink: _v16,
              folderLink: _v15,
              onCopyLink: () => {
                _v13("copy_link"), _v54({
                  folder: _v0,
                  canEditSettings: _v3
                });
              },
              onClickAnalyticsLink: () => {
                _v13("analytics"), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
                  copy: "analytics",
                  feature: "video_library",
                  location: "sidebar",
                  name: "click_folder_analytics",
                  page: _v5,
                  target: _v16 ?? "",
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
                _v13("connect_to_slack"), _v32({
                  userId: _v10,
                  hasSlackIntegration: !!_v0.slackIncomingWebhooksId,
                  isSlackNotificationEnabled: !!_v0.isSlackNotificationEnabled,
                  folderId: _v11,
                  folderName: _v5,
                  currentFolderUri: _v6,
                  async updateSubFolderData(_v0) {
                    _v12(_v6), _v14(_v0), _v9?.uri ? _v13(_v9.uri) : _v11();
                  }
                }), _v0?.slackIncomingWebhooksId ? _v34("vimeo.open_connection_settings", -1, {
                  includeActionContext: !0,
                  element: "dropdown",
                  feature: "integrations_settings",
                  location: "sidebar",
                  folderId: _v11,
                  integrationType: "folder_base_connect",
                  parentFolderId: null,
                  isPrivateToMe: _v0.isPrivateToUser,
                  isPinned: _v0.isPinned
                }) : _v34("vimeo.connect_folder", -1, {
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
              onStarClick: _v24 ? () => {
                _v23 || _v13("add_to_starred"), _v24();
              } : void 0,
              canCreateReviewLink: _v18,
              onCreateReviewLink: () => {
                _v13("create_review_link"), _v53({
                  uri: _v6,
                  folder: _v0,
                  defaultPanel: "CREATE_REVIEW_LINK_MODAL"
                });
              },
              canCopyReviewPageLink: _v19,
              reviewPageLink: _v21,
              onCopyReviewPageLink: () => {
                if (_v13("copy_review_link"), _v21) {
                  let _v0 = _v0.reviewLinks?.[0]?.uri;
                  _v40(_v0 ? () => _v53({
                    uri: _v6,
                    folder: _v0,
                    defaultPanel: "CREATE_REVIEW_LINK_MODAL",
                    editReviewLinkUri: _v0
                  }) : void 0);
                } else _v41(_v11, _v10, _v6);
              },
              canManageReviewLinks: _v20,
              onManageReviewLinks: () => {
                _v13("manage_review_links"), _v53({
                  uri: _v6,
                  folder: _v0,
                  defaultPanel: "REVIEW_LINKS_PANEL"
                });
              },
              hasProhibitMultipleReviewLinks: _v16.hasProhibitMultipleReviewLinks,
              ..._v22
            }),
            closeSideNav: _v0,
            folderId: _v11,
            folderOwnerId: _v10,
            hasActiveColor: !0,
            hasSubfolders: _v0.hasSubfolder,
            isMobile: _v1,
            label: _v0?.name ?? "",
            uri: _v0.uri,
            hasContentSpaceEnabled: !!_v16.hasContentSpaceEnabled,
            hasShareUpsell: !!_v16.canSeeUpsellModalOnShare,
            dropTarget: _v0,
            loadingSideNavFolderURIs: _v2,
            onClick: () => {
              _v1 && _v0?.(), _v44({
                isPrivateToUser: _v8,
                folderUri: _v6
              }), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click_folder_title", 2, {
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
            onMoveFolderSuccess: _v26,
            onMoveFolderFailure: _v27,
            teamOwnerId: _v4,
            uploadClipProperties: _v21
          }, _v0.uri);
        }) : (0, _v1.jsx)(_v149, {})
      }), !!(_v45 && _v49) && (0, _v1.jsx)(_v108.Spinner, {
        size: "sm",
        marginTop: "1rem",
        marginLeft: "2.75rem"
      })]
    });
  };
  var _v159 = _v0.i(0);
  let _v160 = _v0 => (0, _v1.jsx)(_v110.Icon, {
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
  var _v161 = _v0.i(0);
  let _v162 = ({
      closeSideNav: _v0,
      hasContentSpaceEnabled: _v1,
      isMobile: _v2,
      label: _v3,
      loadingSideNavFolderURIs: _v4 = new Set(),
      teamOwnerId: _v5
    }) => {
      let _v6 = (0, _v101.useWayfinderPageName)(),
        _v7 = (0, _v4.useContext)(_v79.ViewerContext),
        [_v8, _v9] = (0, _v4.useState)(!0),
        {
          openFolderSettingsModal: _v10
        } = (0, _v134.useFolderSettingsModal)(),
        {
          trackLibraryFolderOpened: _v11
        } = (0, _v113.useLibraryTracking)(),
        {
          data: _v12
        } = (0, _v161.useGetUserFoldersPrivateToMe)({
          where: {
            ownerId: _v5
          },
          select: ["name", "isPinned", "hasSubfolder", "isPrivateToUser", "metadata.connections.folders.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.moveVideo", "metadata.interactions.uploadVideo", "metadata.interactions.addSubfolder.canAddSubfolders", "privacy.view", "uri"]
        }),
        _v13 = _v12?.metadata.interactions.addSubfolder.canAddSubfolders;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v12 ? (0, _v1.jsx)(_v147, {
          hasSubfolders: _v12.hasSubfolder,
          action: _v13 && (0, _v1.jsx)(_v153, {
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
          icon: _v1 ? (0, _v1.jsx)(_v160, {}) : (0, _v1.jsx)(_v159.PersonUser, {}),
          isMobile: _v2,
          isOpen: _v8,
          onClick: () => {
            _v8 || _v9(!0), _v2 && _v0?.(), _v11({
              folderUri: _v12?.uri,
              isPrivateToUser: !0
            });
            let _v0 = _v12?.metadata?.connections?.parentFolder;
            _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click_folder_title", 2, {
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
        }, "private_to_me") : (0, _v1.jsx)(_v149, {})
      });
    },
    _v163 = ({
      closeSideNav: _v0,
      loadingSideNavFolderURIs: _v1,
      teamOwnerId: _v2
    }) => {
      let _v3,
        _v4,
        {
          capabilities: _v5
        } = (0, _v13.useCapability)(["hasContentSpaceEnabled", "hasSharedWithMe"], _v2),
        _v6 = (0, _v3.useRouter)(),
        _v7 = (0, _v101.useWayfinderPageName)(),
        {
          isPrivate: _v8
        } = _v6.query,
        [_v9, _v10] = (0, _v4.useState)("true" === _v8),
        [_v11, _v12] = (0, _v4.useState)("false" === _v8),
        _v13 = (0, _v90.useWindowSize)().width <= _v91.BreakPoints.sm,
        _v14 = (_v3 = _v93.Path.SharedWithMe, _v6.pathname === _v3),
        _v15 = window.location.pathname,
        _v16 = (_v4 = _v93.Path.MVV, _v6.pathname === _v4) ? (0, _v107.getFolderIdFromFolderUri)(_v15) : 0,
        {
          data: _v17,
          isLoading: _v18,
          error: _v19
        } = (0, _v105.useGetUserProject)(() => _v2 && _v16 ? {
          where: {
            userId: _v2,
            projectId: _v16
          },
          select: _v93.GET_USER_PROJECT_API_FIELDS
        } : null),
        _v20 = _v17?.metadata?.connections?.ancestorPath ?? [],
        _v21 = _v20.length > 0 ? _v20[_v20.length - 1] : null,
        _v22 = !_v18 && !_v19 && _v21?.name === _v93.SHARED_WITH_ME_DIR_NAME,
        _v23 = _v5.hasSharedWithMe && (_v14 || _v22);
      (0, _v4.useEffect)(() => {
        (void 0 !== _v8 || _v6.pathname === _v93.Path.TeamLibrary) && ("true" === _v8 ? (_v10(!0), _v12(!1)) : (_v12(!0), _v10(!1)));
      }, [_v8, _v6.pathname]);
      let _v24 = _v9 || _v11 || _v6.pathname === _v93.Path.TeamLibrary;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v10.Flex, {
          flexDirection: "column",
          paddingBottom: "8px",
          gap: "2px",
          children: [(0, _v1.jsx)(_v106.MenuItem, {
            label: (0, _v55.translate)({
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
            icon: (0, _v1.jsx)(_v103.ArrowLeft, {
              width: 25,
              height: 25
            }),
            href: _v93.Path.Home,
            onClick: () => {
              _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 148, {
                copy: "back_to_home",
                feature: "lihp",
                location: "sidebar",
                name: "click_back_to_home",
                page: _v7,
                target: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              }));
            }
          }), _v23 ? (0, _v1.jsx)(_v106.MenuItem, {
            icon: (0, _v1.jsx)(_v104.UsersFilled, {}),
            iconSize: "xs",
            label: _v93.SHARED_WITH_ME_DIR_NAME,
            href: _v93.Path.SharedWithMe,
            active: !0,
            dataId: "side_nav_shared_with_me",
            onClick: () => {
              _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.click", 150, {
                copy: "shared with me",
                feature: "shared_with_me",
                location: "sidebar",
                name: "click_shared_with_me",
                page: _v7,
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
            children: _v24 ? _v9 ? (0, _v1.jsx)(_v162, {
              closeSideNav: _v0,
              hasContentSpaceEnabled: !!_v5.hasContentSpaceEnabled,
              isMobile: _v13,
              label: (0, _v55.translate)({
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
              loadingSideNavFolderURIs: _v1,
              teamOwnerId: _v2 ?? 0
            }) : (0, _v1.jsx)(_v158, {
              closeSideNav: _v0,
              isMobile: _v13,
              loadingSideNavFolderURIs: _v1,
              pathname: _v6.pathname,
              teamOwnerId: _v2
            }) : (0, _v1.jsx)(_v149, {})
          })]
        })
      });
    };
  _v0.s(["LibrarySideNavContent", 0, _v163], 0);
  var _v164 = _v0.i(0);
  function _v165({
    featuresList: _v0
  }) {
    return (0, _v1.jsx)(_v10.Flex, {
      direction: "column",
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v10.Flex, {
        margin: `${(0, _v54.rem)(8)} 0`,
        color: "white",
        fontWeight: 500,
        children: [(0, _v1.jsx)(_v164.Checkmark, {
          position: "relative",
          top: (0, _v54.rem)(4),
          width: (0, _v54.rem)(20),
          height: (0, _v54.rem)(20),
          marginRight: (0, _v54.rem)(8),
          color: "white"
        }), _v0]
      }, `feature-${_v1}`))
    });
  }
  let _v166 = ({
      isOpen: _v0,
      isMobile: _v1,
      loadingSideNavFolderURIs: _v2,
      onClose: _v3,
      onResize: _v4,
      sideNavContent: _v5,
      showWatchMenuItemAtTheBottom: _v6,
      teamOwnerId: _v7,
      playerAssetUrls: _v8
    }) => {
      let _v9 = (0, _v4.useContext)(_v79.ViewerContext),
        {
          open: _v10,
          close: _v11
        } = (0, _v100.useUpsellModal)(),
        _v12 = (0, _v101.useWayfinderPageName)();
      return (0, _v1.jsx)(_v167, {
        type: _v97.PlayerType.BarebonePlayer,
        assetUrls: _v8,
        children: (0, _v1.jsx)(_v99.WayfinderSideNav, {
          isOpen: _v0,
          isMobile: _v1,
          onClose: _v3,
          onResize: _v4,
          page: _v12,
          onUpgradeClick: (_v0, _v1 = 0) => {
            let _v2 = _v9?.user?.account === "enterprise",
              _v3 = _v168(_v1),
              _v4 = null !== _v1 && _v1 >= 100,
              _v5 = "video_size" === _v0 && null !== _v1 && _v1 >= 95;
            _v0 = "ai_token" === (_v0 = "default" === _v3 ? "default" : _v0 || "default") ? "ai_token" : "storage", _v10({
              tracking: {
                params: {
                  feature: _v4 ? "Storage_at_limit" : "Storage_general",
                  location: "sidebar",
                  page: _v12,
                  upsell_name: "quota_meter"
                },
                paywallTracking: {
                  paywallTrigger: _v4 ? "sidenav_quota_meter_at_limit_button" : "sidenav_quota_meter_general_button",
                  paywallLocation: "sidenav_quota_meter",
                  paywallType: "popup",
                  paywallFeature: _v5 ? "storage_limit" : "quota"
                }
              },
              templateType: _v2 ? "enterprise" : "default",
              modalConfig: _v2 ? {
                mkcCode: "108877",
                enterpriseTitle: _v102.enterpriseHeader[_v3]?.[_v0] || "",
                enterpriseSubtitle: _v169(_v3, _v0),
                customFeaturesList: "default" === _v3 ? (0, _v1.jsx)(_v165, {
                  featuresList: _v102.enterpriseDefaultFeaturesList
                }) : "ai_token" === _v0 ? (0, _v1.jsx)(_v165, {
                  featuresList: _v102.enterpriseAiFeaturesList
                }) : (0, _v1.jsx)(_v165, {
                  featuresList: _v102.enterpriseStorageFeaturesList
                })
              } : _v4 ? _v98.quotaModalAtLimitConfig : _v98.quotaModalConfig,
              onClose: _v11
            });
          },
          showWatchMenuItem: _v6 && !!_v5,
          teamOwnerId: _v7,
          children: _v5 ?? (0, _v1.jsx)(_v163, {
            closeSideNav: _v3,
            loadingSideNavFolderURIs: _v2,
            teamOwnerId: _v7
          })
        })
      });
    },
    _v167 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v96.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v168 = _v0 => null === _v0 || _v0 < 75 ? "default" : _v0 < 95 ? "reaching" : "reached",
    _v169 = (_v0, _v1) => "default" === _v0 ? _v102.enterpriseDefaultDescription : "ai_token" === _v1 ? _v102.enterpriseAiDescription : _v102.enterpriseStorageDescription,
    _v170 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).DefaultNavigation
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v171 = (0, _v4.createContext)({
      isPersonalTeamFolderAdminView: !1,
      setIsPersonalTeamFolderAdminView: () => {},
      isSideNavOpen: !1,
      setIsSideNavOpen: () => {},
      loadingSideNavFolderURIs: new Set(""),
      setLoadingSideNavFolderURIs: () => {},
      shouldShowSideNav: !1,
      isScrolling: !1
    });
  _v0.s(["VideoLibraryLayout", 0, ({
    children: _v0,
    hasSideNav: _v1 = !1,
    hasGlobalSearch: _v2,
    sideNavContent: _v3,
    playerAssetUrls: _v4,
    isReviewPage: _v5,
    hasThemeSupport: _v6 = !0,
    hasUploader: _v7 = !1,
    alwaysMinimiseSearch: _v8 = !1
  }) => {
    let _v9,
      _v10 = (0, _v45.useViewer)(),
      _v11 = (0, _v3.useRouter)(),
      [_v12, _v13] = (0, _v11.useToken)("breakpoints", ["lg", "sm"]),
      [_v14] = (0, _v12.useMediaQuery)([`(max-width: ${_v12})`]),
      [_v15] = (0, _v12.useMediaQuery)([`(max-width: ${_v13})`]),
      {
        uploads: _v16
      } = (0, _v16.useUploader)(),
      _v17 = (0, _v76.useUpsellAnalyticsPage)(),
      {
        userId: _v18
      } = _v11.query,
      _v19 = _v18 && !Array.isArray(_v18) ? parseInt(_v18, 10) : _v10?.teamUser?.ownerId,
      _v20 = _v10?.user?.id,
      _v21 = _v10?.teamUser?.ownerId ?? _v20,
      {
        capabilities: _v22
      } = (0, _v13.useCapability)(["privateModeOff"], _v19),
      {
        capabilities: _v23
      } = (0, _v13.useCapability)(["canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation"], _v21),
      _v24 = !!_v23.canGenerateClipTextTranslation,
      _v25 = (!!_v23.canGenerateClipTranslation || _v24) && !!_v23.canPerformBulkTranslations,
      {
        isOpen: _v26,
        handleToggleState: _v27
      } = (_v0 => {
        let _v1 = (0, _v90.useWindowSize)(),
          _v2 = (0, _v4.useContext)(_v79.ViewerContext),
          [_v3, _v4] = (0, _v89.useGetUserPreferencesLazy)(),
          _v5 = (0, _v92.usePageName)() !== _v93.PAGE.SEARCH,
          [_v6, _v7] = (0, _v4.useState)(_v1.width >= _v91.BreakPoints.lg && !!_v5 && (_v95(_v2?.user?.id) ?? !0)),
          [_v8] = (0, _v89.usePatchUserPreferences)(),
          _v9 = _v1.width >= _v91.BreakPoints.md;
        return (0, _v4.useEffect)(() => {
          _v1.width <= _v91.BreakPoints.sm && _v7(!1);
        }, [_v1]), (0, _v4.useEffect)(() => {
          if (_v9 && _v5 && !_v0) {
            let _v0 = _v4?.data?.wsns;
            if ("boolean" == typeof _v0 && (_v7(_v0), _v2?.user?.id)) try {
              window.localStorage.setItem(`${_v94}:${_v2.user.id}`, _v0 ? "true" : "false");
            } catch (_v0) {}
          }
        }, [_v4?.data, _v0]), (0, _v4.useEffect)(() => {
          if (!_v2?.user?.id) return;
          let _v0 = _v95(_v2.user.id);
          "boolean" == typeof _v0 && _v9 && _v5 && !_v0 && _v7(_v0), _v3({
            select: ["wsns"],
            where: {
              userId: _v2.user.id
            }
          });
        }, [_v2?.user?.id]), {
          isOpen: _v6,
          handleToggleState: () => {
            if (!_v2?.user?.id) return;
            let _v0 = !_v6;
            _v9 && _v8({
              select: [],
              where: {
                userId: _v2.user.id
              },
              variables: {
                wsns: +!_v6
              }
            });
            try {
              window.localStorage.setItem(`${_v94}:${_v2.user.id}`, _v0 ? "true" : "false");
            } catch (_v0) {}
            _v7(_v0);
          }
        };
      })(_v5),
      _v28 = (0, _v46.useActivityCenterStore)(_v0 => _v0.inProgressJobs),
      _v29 = (0, _v46.useActivityCenterStore)(_v0 => _v0.isVisible),
      _v30 = (0, _v46.useActivityCenterStore)(_v0 => _v0.doneJobs),
      _v31 = (0, _v46.useActivityCenterStore)(_v0 => _v0.hide),
      _v32 = (0, _v46.useActivityCenterStore)(_v0 => _v0.fetchBatchSessions);
    (0, _v4.useEffect)(() => {
      _v21 && _v25 && _v32(_v21);
    }, [_v32, _v21, _v25]);
    let [_v33, _v34] = (0, _v4.useState)(!0),
      [_v35, _v36] = (0, _v4.useState)(_v1),
      [_v37, _v38] = (0, _v4.useState)(!1),
      [_v39, _v40] = (0, _v4.useState)(new Set()),
      [_v41, _v42] = (0, _v4.useState)(""),
      [_v43, _v44] = (0, _v4.useState)(!1),
      [_v45, _v46] = (0, _v4.useState)(!1),
      [_v47, _v48] = (0, _v4.useState)(null),
      _v49 = (0, _v4.useRef)(null),
      _v50 = (0, _v4.useRef)(null);
    (0, _v17.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v42(_v1.clipId);
    }, []), (0, _v4.useEffect)(() => {
      _v16.length && (_v44(!0), _v9.BigPictureClient.sendEvent(new _v9.Event("vimeo.embeddable_uploader_start", 1, {
        number_of_files: _v16.length,
        page: _v17
      })));
    }, [_v16.length, _v17]);
    let {
        data: _v51
      } = (0, _v14.useGetUserWorkspaces)(() => _v20 ? {
        where: {
          userId: _v20
        },
        select: ["displayName", "teamOwnerId", "tier", "uri", "untranslatedUserRole"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v52 = _v19 ?? _v20,
      _v53 = (_v9 = _v51?.data, _v9?.find(_v0 => _v0.teamOwnerId === _v52)),
      _v54 = !!_v53;
    (0, _v4.useEffect)(() => {
      _v53?.teamOwnerId && _v50.current?.addEventData && _v50.current.addEventData({
        team_owner_id: _v53.teamOwnerId,
        team_size: null,
        team_subscription_type: _v53?.tier,
        actor_team_role: _v53?.untranslatedUserRole
      });
    }, [_v53?.tier, _v53?.teamOwnerId, _v53?.untranslatedUserRole]), (0, _v4.useEffect)(() => {
      _v37 || _v5 ? _v36(!1) : _v36(_v1 || _v54);
    }, [_v1, _v54, _v37, _v5]), (0, _v4.useEffect)(() => {
      _v34(!_v14);
    }, [_v14]), (0, _v4.useEffect)(() => (window.addEventListener("scroll", _v55), () => {
      window.removeEventListener("scroll", _v55);
    }), []), (0, _v4.useEffect)(() => {
      let _v0 = _v49.current?.scrollHeight;
      _v14 && _v26 && _v0 ? _v48({
        height: _v0
      }) : _v48(null);
    }, [_v14, _v26, _v45]);
    let _v55 = () => {
        _v49.current && (_v49.current.scrollTop >= 5 ? _v46(!0) : _v46(!1));
      },
      _v56 = window,
      _v57 = _v53?.teamOwnerId ?? 0;
    return (0, _v1.jsxs)(_v5.DndProvider, {
      backend: _v6.HTML5Backend,
      context: _v56,
      children: [(0, _v1.jsx)(_v48.default, {
        children: (0, _v1.jsx)(_v18.AnalyticsEventProvider, {
          ref: _v50,
          eventData: {
            product: "Video Library"
          },
          children: (0, _v1.jsx)(_v47, {
            children: (0, _v1.jsxs)(_v15.OmnisearchContextProvider, {
              children: [(0, _v1.jsx)(_v86, {
                children: (0, _v1.jsx)(_v75, {
                  children: (0, _v1.jsx)(_v70, {
                    children: (0, _v1.jsx)(_v171.Provider, {
                      value: {
                        isSideNavOpen: !!_v26,
                        setIsSideNavOpen: _v27,
                        isPersonalTeamFolderAdminView: _v37,
                        setIsPersonalTeamFolderAdminView: _v38,
                        loadingSideNavFolderURIs: _v39,
                        setLoadingSideNavFolderURIs: _v40,
                        shouldShowSideNav: _v35,
                        isScrolling: _v45
                      },
                      children: (0, _v1.jsxs)(_v10.Flex, {
                        overflow: "hidden",
                        height: "100vh",
                        width: "100vw",
                        children: [_v35 && (0, _v1.jsx)(_v166, {
                          isOpen: !!_v26,
                          isMobile: _v14,
                          loadingSideNavFolderURIs: _v39,
                          onClose: _v27,
                          sideNavContent: _v3,
                          showWatchMenuItemAtTheBottom: !!_v10?.isFromCopyrightRestrictedRegion,
                          teamOwnerId: _v57,
                          playerAssetUrls: _v4
                        }), (0, _v1.jsx)(_v10.Flex, {
                          flexDir: "column",
                          flex: "1 1 auto",
                          width: _v33 ? "50%" : "100%",
                          transition: "width 180ms ease-in-out 180ms",
                          children: (0, _v1.jsxs)(_v10.Flex, {
                            ref: _v49,
                            onScroll: _v55,
                            flexDir: "column",
                            minHeight: "100vh",
                            position: "relative",
                            overflowY: _v47 ? "hidden" : "auto",
                            children: [(0, _v1.jsx)(_v170, {
                              hasSearch: _v2,
                              alwaysMinimiseSearch: _v8,
                              isSideNavActive: !!_v26,
                              setIsSideNavActive: _v35 ? _v27 : void 0,
                              hasThemeSupport: _v6,
                              hasUploader: _v7
                            }), _v0, (0, _v1.jsx)(_v88, {
                              overlayStyle: _v47
                            }), (0, _v1.jsxs)(_v8.ActivitiesContainer, {
                              isShowing: _v29 || _v43,
                              isMobile: _v15,
                              children: [(0, _v1.jsx)(_v7.AiActivityCenter, {
                                inProgressJobs: _v28,
                                onClose: _v31,
                                doneJobs: _v30
                              }), (_v43 || _v16.length > 0) && (0, _v1.jsx)(_v21.ProgressToastContainer, {
                                isShowing: _v43,
                                uploadClipId: _v41,
                                setShowProgressToast: _v44,
                                setUploadClipId: _v42,
                                isMobile: _v14,
                                teamOwnerId: String(_v57),
                                page: _v17,
                                isPrivateModeOn: !_v22.privateModeOff
                              })]
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              }), (0, _v1.jsx)(_v20.default, {})]
            })
          })
        })
      }), (0, _v1.jsx)(_v19.DragPreview, {})]
    });
  }, "VideoLibraryLayoutContext", 0, _v171], 0);
}