{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["ActivitiesContainer", 0, ({
    children: _v0,
    maxHeight: _v1,
    isShowing: _v2 = !1,
    isMobile: _v3
  }) => _v2 ? (0, _v1.jsx)(_v2.Grid, {
    pointerEvents: "none",
    templateColumns: "1fr",
    maxHeight: _v1,
    gridAutoFlow: "row",
    alignContent: "flex-end",
    zIndex: _v2 ? "40" : "0",
    position: "fixed",
    left: _v3 ? "50%" : "auto",
    top: _v1 ? "unset" : (0, _v3.rem)(64),
    transform: _v3 ? "translateX(-50%)" : "none",
    right: _v3 ? "auto" : (0, _v3.rem)(30),
    bottom: (0, _v3.rem)(52),
    gap: (0, _v3.rem)(8),
    sx: {
      "& > div": {
        height: "100%"
      },
      "& > *": {
        pointerEvents: "auto"
      }
    },
    children: _v0
  }) : null], 0);
  var _v4 = _v0.i(0),
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
    _v32 = _v0.i(0);
  let _v33 = ["publicId", "contentType", "privacy", "password", "allowDownloads"],
    _v34 = ({
      isOpen: _v0,
      publicId: _v1,
      ownerId: _v2,
      onClose: _v3
    }) => {
      let {
          data: _v4,
          error: _v5,
          isLoading: _v6,
          mutate: _v7
        } = (0, _v30.useGetUserFile)(() => _v0 ? {
          where: {
            userId: _v2,
            fileId: _v1
          },
          select: _v33
        } : null),
        _v8 = _v4 ? {
          publicId: _v4.publicId,
          contentType: _v4.contentType ?? null,
          privacy: _v4.privacy,
          password: _v4.password,
          allowDownloads: _v4.allowDownloads
        } : void 0,
        _v9 = (0, _v5.useCallback)(() => void _v7(), [_v7]);
      return (0, _v1.jsxs)(_v22.Modal, {
        isOpen: _v0,
        onClose: _v3,
        children: [(0, _v1.jsx)(_v27.ModalOverlay, {}), (0, _v1.jsxs)(_v25.ModalContent, {
          children: [(0, _v1.jsx)(_v26.ModalHeader, {
            children: (0, _v1.jsx)(_v21.Header, {
              size: "md",
              children: (0, _v31.translate)({
                singular: "Share",
                dictionary: {
                  es: {
                    singular: "Compartir"
                  },
                  "de-DE": {
                    singular: "Teilen"
                  },
                  "fr-FR": {
                    singular: "Partager"
                  },
                  "ja-JP": {
                    singular: "共有"
                  },
                  "ko-KR": {
                    singular: "공유"
                  },
                  "pt-BR": {
                    singular: "Compartilhar"
                  },
                  "zh-CN": {
                    singular: "分享"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v24.ModalCloseButton, {}), (0, _v1.jsx)(_v23.ModalBody, {
            children: _v8 ? (0, _v1.jsx)(_v32.FileShareSettings, {
              file: _v8,
              onChanged: _v9,
              ownerId: _v2,
              shareSurface: "modal"
            }) : _v6 ? (0, _v1.jsx)(_v20.Flex, {
              alignItems: "center",
              justifyContent: "center",
              paddingY: "2xl",
              children: (0, _v1.jsx)(_v28.Spinner, {
                size: "md"
              })
            }) : (0, _v1.jsxs)(_v20.Flex, {
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "md",
              children: [(0, _v1.jsx)(_v29.Text, {
                color: "text-secondary",
                variant: "body-md",
                children: (0, _v31.translate)({
                  singular: "Something went wrong",
                  dictionary: {
                    es: {
                      singular: "Se ha producido un error"
                    },
                    "de-DE": {
                      singular: "Hier ist etwas schief gelaufen"
                    },
                    "fr-FR": {
                      singular: "Quelque chose a planté"
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました"
                    },
                    "ko-KR": {
                      singular: "문제가 발생했습니다"
                    },
                    "pt-BR": {
                      singular: "Alguma coisa deu errado"
                    },
                    "zh-CN": {
                      singular: "出错了"
                    }
                  }
                })
              }), null != _v5 && (0, _v1.jsx)(_v19.Button, {
                variant: "secondary",
                onClick: () => void _v7(),
                children: (0, _v31.translate)({
                  singular: "Try again",
                  dictionary: {
                    es: {
                      singular: "Intentar de nuevo"
                    },
                    "de-DE": {
                      singular: "Nochmal versuchen"
                    },
                    "fr-FR": {
                      singular: "Veuillez réessayer"
                    },
                    "ja-JP": {
                      singular: "再試行してください"
                    },
                    "ko-KR": {
                      singular: "다시 시도하세요"
                    },
                    "pt-BR": {
                      singular: "Tente de novo"
                    },
                    "zh-CN": {
                      singular: "再试一次"
                    }
                  }
                })
              })]
            })
          })]
        })]
      });
    };
  _v0.s(["FileShareModal", 0, _v34], 0);
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = {
    view: void 0,
    password: void 0
  };
  _v0.s(["ProgressToastContainer", 0, ({
    isShowing: _v0,
    uploadClipId: _v1,
    setUploadClipId: _v2,
    setShowProgressToast: _v3,
    isMobile: _v4,
    teamOwnerId: _v5,
    page: _v6,
    isPrivateModeOn: _v7
  }) => {
    let _v8,
      _v9,
      _v10 = (0, _v17.useViewer)(),
      _v11 = (0, _v4.useRouter)(),
      {
        contentSpaceEnabled: _v12
      } = (0, _v7.useContentSpaceEnabled)(_v5),
      {
        mutate: _v13
      } = (0, _v11.useUserQuotaApi)(),
      _v14 = (_v8 = _v10?.teamUser?.teamName, _v9 = _v10?.teamUser?.isWorkspace, _v38.DEFAULT_PRIVACY_OPTIONS.reduce((_v0, _v1) => (_v0[_v1.privacy] = {
        title: _v1.privacy === _v38.DEFAULT_PRIVACY_VALUES.TEAM ? (0, _v39.getTeamPrivacyTranslation)(_v8, _v9) : _v1.title,
        description: _v1.description ?? "",
        icon: _v38.VIDEO_PRIVACY_ICON_MAP[_v1.privacy]?.icon
      }, _v0), {})),
      _v15 = (0, _v13.useUploads)(),
      _v16 = (0, _v13.useUploaderSummary)(),
      [_v17] = (0, _v9.usePatchUserItems)(),
      [_v18] = (0, _v8.usePatchUserFiles)(),
      {
        open: _v19,
        close: _v20
      } = (0, _v36.useUpsellModal)(),
      [_v21, _v22] = (0, _v5.useState)(_v41),
      [_v23, _v24] = (0, _v5.useState)(void 0),
      [_v25, _v26] = (0, _v5.useState)(null),
      [_v27, _v28] = (0, _v5.useState)(null),
      [_v29, _v30] = (0, _v5.useState)({
        clipId: "",
        privacy: _v41.view
      }),
      {
        showEmbedToggle: _v31,
        isEmbeddable: _v32,
        onEmbedToggle: _v33,
        clearEmbeddable: _v34
      } = (0, _v14.useUploadEmbeddable)({
        userId: _v10?.teamUser?.ownerId ?? _v10?.user?.id ?? 0,
        hasRestrictedStorage: _v10?.user?.uploadQuota?.restricted != null,
        defaultEmbedPreference: _v10?.user?.preferences?.videos?.privacy?.embed,
        onQuotaRevalidate: () => _v13(void 0, {
          revalidate: !0
        })
      }),
      _v35 = (0, _v5.useCallback)(_v0 => {
        _v25 && _v15.embeddableStore.set(_v25, _v0);
      }, [_v25]),
      {
        data: _v36
      } = (0, _v10.useGetVideo)(() => _v1 ? {
        where: {
          videoId: _v1
        },
        select: ["allowedPrivacies", "app.uri", "customMetadata", "manageLink", "uri", "parentProject.isPrivateToUser", "password", "privacy", "metadata.interactions.hasRestrictedPrivacyOptions"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      {
        isLocked: _v37,
        showLockedToast: _v38
      } = (0, _v37.useVideoMetadataLock)(_v36),
      _v39 = "/home" === _v11.pathname || "/wayfinder-home" === _v11.pathname,
      _v40 = (0, _v40.getPrivacyChangePageSource)(_v11.pathname),
      _v41 = _v39 ? "homepage" : (0, _v18.getLibraryUploadSurface)({
        contentSpaceEnabled: _v12,
        isPrivateToUser: _v36?.parentProject?.isPrivateToUser
      }),
      _v42 = _v10?.user?.capabilities?.hasEnterprise && _v10.team?.ownerId === _v10.user.id,
      _v43 = _v10?.teamUser?.accountType === "enterprise" || _v42,
      _v44 = (0, _v5.useMemo)(() => {
        if (!_v36) return [];
        let _v0 = _v36.metadata.interactions.hasRestrictedPrivacyOptions,
          _v1 = _v36.parentProject?.isPrivateToUser;
        return _v7 || _v0 || _v1 || _v43 ? Object.keys(_v14).filter(_v0 => _v36.allowedPrivacies?.find(_v0 => _v0 === _v0)).map(_v0 => ({
          value: _v0,
          label: _v14[_v0].title,
          showUpgradeBadge: !1
        })) : _v14.hasOwnProperty(_v36.privacy.view) ? Object.keys(_v14).map(_v0 => {
          let _v1 = _v36.allowedPrivacies?.find(_v0 => _v0 === _v0);
          return {
            value: _v0,
            label: _v14[_v0].title,
            showUpgradeBadge: !_v1
          };
        }) : [];
      }, [_v36, _v7, _v43, _v14]),
      _v45 = (_v0, _v1) => {
        if (_v0 || _v1) {
          if (_v37) return void _v38();
          if (_v44.find(_v0 => _v0.value === _v0 && _v0.showUpgradeBadge)) {
            var _v2;
            (_v2 = `${_v0}_privacy`) && _v19({
              tracking: {
                params: {
                  feature: "privacy",
                  location: "embeddable_uploader",
                  page: _v6,
                  upsell_name: _v2
                },
                paywallTracking: {
                  paywallTrigger: `upload_progress_toast_${_v2}_button`,
                  paywallLocation: "embeddable_uploader",
                  paywallType: "popup",
                  paywallFeature: "privacy"
                }
              },
              onClose: _v20
            });
          } else {
            let _v0 = _v15.filter(_v0 => _v0.clipId).map(_v0 => _v0.clipId).map(_v0 => `/videos/${_v0}`).join(),
              _v1 = {
                privacy: {}
              };
            _v0 && (_v1.privacy.view = _v0), _v1 && (_v1.password = _v1), _v17({
              where: {
                userId: _v10?.teamUser?.ownerId ?? _v10?.user?.id ?? 0
              },
              query: {
                uris: _v0
              },
              variables: _v1
            }).then(() => {
              _v22({
                view: _v0,
                password: _v1
              });
            });
          }
        }
      },
      _v46 = _v0 => {
        let _v1 = _v15.filter(_v0 => _v0.uploadType === _v16.TYPES.FILE).map(_v0 => _v0.publicId).filter(_v0 => !!_v0).map(_v0 => `/files/${_v0}`).join(",");
        "" !== _v1 && _v18({
          where: {
            userId: _v10?.teamUser?.ownerId ?? _v10?.user?.id ?? 0
          },
          query: {
            uris: _v1
          },
          variables: {
            privacy: _v0
          }
        });
      },
      _v47 = (0, _v5.useRef)(_v38);
    (0, _v5.useEffect)(() => {
      _v47.current = _v38;
    }, [_v38]);
    let _v48 = (0, _v5.useCallback)(_v0 => {
        _v0.clipId === _v1 && _v37 ? _v47.current() : _v0.clipId ? _v26(_v0.clipId) : _v0.publicId && _v28(_v0.publicId);
      }, [_v37, _v1]),
      _v49 = (0, _v5.useCallback)(_v0 => {
        _v0.clipId ? _v11.push(`/manage/videos/${_v0.clipId}${_v4 ? "" : "/privacy"}`) : _v0.publicId && _v11.push(`/manage/files/${_v0.publicId}`);
      }, [_v4, _v11]),
      _v50 = (0, _v5.useCallback)(_v0 => {
        _v0.clipId ? _v11.push(`/manage/videos/${_v0.clipId}`) : _v0.publicId && _v11.push(`/manage/files/${_v0.publicId}`);
      }, [_v11]);
    return ((0, _v5.useEffect)(() => {
      _v16.isComplete && (_v45(_v21.view, _v21.password), _v23 && _v46(_v23));
    }, [_v16.isComplete]), 0 === _v15.length) ? null : (0, _v1.jsxs)(_v6.Box, {
      width: "100%",
      height: "100%",
      children: [(0, _v1.jsx)(_v6.Box, {
        pointerEvents: "auto",
        left: _v4 ? "50%" : "auto",
        right: _v4 ? "none" : (0, _v3.rem)(30),
        bottom: (0, _v3.rem)(52),
        children: (0, _v1.jsx)(_v12.ProgressWidgetModule, {
          isShowing: _v0,
          page: _v6,
          uploadSurface: _v41,
          revalidatePrivacy: _v29,
          showPrivacySettings: !_v37,
          getPrivacyState: () => ({
            view: _v21.view ?? _v36?.privacy.view,
            password: _v21.password ?? _v36?.password
          }),
          setPrivacy: _v0 => {
            _v45(_v0.view, _v0.password), _v30({
              clipId: "",
              privacy: _v41.view
            });
          },
          onClose: () => {
            _v3(!1), _v22(_v41), _v24(void 0), _v2(""), _v30({
              clipId: "",
              privacy: _v41.view
            }), _v34();
          },
          onFilePrivacyChange: _v0 => {
            ("nobody" === _v0 || "team" === _v0 || "unlisted" === _v0) && (_v24(_v0), _v46(_v0));
          },
          onShareClick: _v48,
          onUploadClick: _v49,
          onEditClick: _v50,
          showEmbedToggle: _v31,
          isEmbeddable: _v32,
          onEmbedToggle: _v33
        })
      }), _v25 && (0, _v1.jsx)(_v35.VideoShareViewModule, {
        clipId: _v25,
        isOpen: !!_v25,
        onClose: () => _v26(null),
        onPrivacyChange: _v0 => _v30({
          clipId: _v25 || "",
          privacy: _v0.view
        }),
        onEmbedChange: _v35,
        privacyChangePageSource: _v40,
        privacyChangeEntryPoint: "share_button",
        transferInlineLinkSurface: "home_upload_completed"
      }), _v27 && (0, _v1.jsx)(_v34, {
        isOpen: !0,
        publicId: _v27,
        ownerId: _v10?.teamUser?.ownerId ?? _v10?.user?.id ?? 0,
        onClose: () => _v28(null)
      })]
    });
  }], 0);
}