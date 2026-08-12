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
    _v37 = _v0.i(0);
  let _v38 = (_v0, _v1) => _v1 ? `${_v0}:${_v1}` : _v0;
  _v0.s(["getClipRequestId", 0, _v38], 0);
  let _v39 = (0, _v3.forwardRef)(({
    attemptReplace: _v0,
    quota: _v1,
    videoId: _v2,
    clipHash: _v3
  }, _v4) => {
    let {
        currentVersionId: _v5,
        user: _v6
      } = (0, _v37.useVideoData)(_v38(String(_v2), _v3)),
      {
        capabilities: {
          hasMultipleVersions: _v7,
          hasUpsellsForFlatRateTiers: _v8
        }
      } = (0, _v34.useCapability)(["hasUpsellsForFlatRateTiers", "hasMultipleVersions"], _v6?.uri),
      {
        data: _v9
      } = (0, _v35.useGetVideoVersion)(() => _v8 && !1 === _v7 && _v5 ? {
        where: {
          videoId: _v2,
          versionId: _v5
        },
        select: ["filesize"],
        headers: {
          Accept: _v31.API_ACCEPT_HEADER
        }
      } : null),
      _v10 = (0, _v3.useCallback)(_v0 => {
        let {
          files: _v1
        } = _v0.target;
        if (!_v1 || !_v1.length) return;
        let _v2 = _v6?.uploadQuota?.space?.unit === "video_count" || (0, _v36.isFileSizeWithinQuota)(_v1[0].size, _v1, _v7, _v9?.filesize ?? void 0);
        _v0(_v1, _v2), !_v2 && _v4 && "function" != typeof _v4 && _v4.current instanceof HTMLInputElement && (_v4.current.value = "");
      }, [_v4, _v1, _v7, _v0, _v9, _v6?.uploadQuota?.space?.unit]);
    return (0, _v1.jsx)("input", {
      "data-testid": "create-new-ver-file-upload",
      hidden: !0,
      accept: "video/*,.mkv",
      onChange: _v0 => _v10(_v0),
      ref: _v4,
      type: "file"
    });
  });
  _v0.s(["FileUpload", 0, _v39], 0), _v0.s(["VersionList", 0, ({
    videoId: _v0,
    clipHash: _v1,
    canOnlyComment: _v2 = !1,
    shouldRedirectOnUpload: _v3 = !1,
    allowReplace: _v4,
    analyticsProps: _v5,
    showLoading: _v6,
    setIsReplaceOverQuota: _v7,
    setIsNewVersionErrorMessage: _v8,
    activeVersionSequenceNumber: _v9,
    isCurrentVersionEnabled: _v10,
    totalVersionsCount: _v11,
    revalidateVideoData: _v12,
    onVersionRestoreSuccess: _v13,
    reviewId: _v14,
    isVideoProcessing: _v15,
    showDownload: _v16 = !0,
    showRestore: _v17 = !0,
    showDeleteVersion: _v18 = !0,
    showNewVersion: _v19 = !0,
    disableVersionMenu: _v20 = !1
  }) => {
    let [_v21, _v22] = (0, _v3.useState)(!1),
      [_v23, _v24] = (0, _v3.useState)(!1),
      {
        settings: _v25
      } = (0, _v18.useOrionSettings)(),
      {
        addNewVersion: _v26,
        storeVersionList: _v27
      } = (0, _v20.useVersionsStore)(_v0 => ({
        addNewVersion: _v0.addNewVersion,
        storeVersionList: _v0.versionList
      })),
      _v28 = (0, _v32.videoIdFromUri)(_v27.at(0)?.uri),
      _v29 = !_v23 || _v11 < 2 || _v27.length > 0 && _v28 === _v0,
      {
        versions: _v30,
        canLoadMore: _v31,
        isLoading: _v32,
        isLoadingMoreVersion: _v33,
        loadMoreVersions: _v34
      } = (0, _v27.useGetVersionsHook)(_v0, _v29, _v14),
      _v35 = _v25.new_replace_feature && _v27.length > 0 && _v28 === _v0 ? _v27 : _v30,
      _v36 = (0, _v21.useViewer)(),
      [_v37] = (0, _v28.useInfiniteScrollVersion)(_v31 || _v27.length < _v11, _v34),
      [_v38, _v39] = (0, _v3.useState)(null),
      [_v40, _v41] = (0, _v3.useState)(!1),
      {
        userQuota: _v42
      } = (0, _v29.useReplace)(_v0, _v14),
      {
        upload: _v43,
        uploads: _v44
      } = (0, _v19.useUploader)(),
      _v45 = (0, _v2.useRouter)(),
      _v46 = (0, _v3.useRef)(null),
      _v47 = (0, _v3.useRef)(null),
      _v48 = (0, _v3.useRef)(null),
      _v49 = (0, _v24.getVersionNumber)(_v9 || _v31.DEFAULT_VERSION_NUMBER),
      _v50 = _v35?.reduce((_v0, _v1) => Math.max(_v0, _v1.sequenceNumber?.toString().length ?? 0), 1) ?? 1,
      _v51 = _v31.MIN_WIDTH_FOR_SEQUENCE_NUMBER + _v50 * _v31.SEQUENCE_NUMBER_WIDTH_FOR_EACH_DIGIT,
      _v52 = _v14 ? !!_v15 : !_v4,
      _v53 = () => {
        _v46.current && (_v22(!1), _v46.current.click(), _v5 && (0, _v30.bpStartUploadVersion)({
          videoId: _v0,
          viewer: _v36,
          currentVersion: _v49,
          analyticsProps: _v5
        }));
      },
      _v54 = (0, _v3.useRef)(!1),
      {
        baseUrl: _v55,
        jwt: _v56
      } = (0, _v16.useGctlConfig)(),
      _v57 = (0, _v3.useCallback)(() => {
        0 !== _v35.length && (0, _v14.getVideo)({
          headers: {
            Accept: _v31.API_ACCEPT_HEADER,
            Authorization: _v56 ? `jwt ${_v56}` : ""
          },
          baseUrl: _v55,
          where: {
            videoId: _v0
          },
          select: ["metadata.connections.versions.currentUri"]
        }).then(_v0 => {
          let _v1 = (0, _v32.idFromUri)(_v0?.metadata?.connections?.versions?.currentUri);
          (0, _v32.idFromUri)(_v35.at(0)?.uri) < _v1 && (0, _v15.getVideoVersion)({
            headers: {
              Accept: _v31.API_ACCEPT_HEADER,
              Authorization: _v56 ? `jwt ${_v56}` : ""
            },
            baseUrl: _v55,
            where: {
              videoId: _v0,
              versionId: _v1
            },
            select: _v31.VIDEO_VERSION_FIELDS
          }).then(_v0 => _v26(_v0));
        });
      }, [_v26, _v55, _v35, _v56, _v0]);
    return ((0, _v3.useEffect)(() => {
      _v4 || _v6 ? _v4 && _v54.current && (_v54.current = !1, _v57()) : _v54.current = !0;
    }, [_v4, _v57, _v6]), (0, _v10.useOutsideClick)({
      enabled: _v21,
      ref: _v48,
      handler: _v0 => {
        _v47.current && _v0.target && (_v47.current == _v0.target || _v47.current?.contains(_v0.target)) || _v22(!1);
      }
    }), (0, _v3.useEffect)(() => {
      let _v0 = _v44.find(_v24.isUploadActiveOrComplete);
      _v0?.clipId && _v40 && (_v3 ? _v45.replace({
        pathname: `/manage/videos/${_v0?.clipId}`
      }) : (_v12?.(), _v41(!1), _v39(null)));
    }, [_v45, _v44, _v40, _v41, _v3, _v12]), (0, _v3.useEffect)(() => {
      _v41(!1), _v39(null);
    }, []), _v2) ? _v32 ? null : (0, _v1.jsx)(_v11.Text, {
      color: "text-secondary",
      variant: "heading-xs",
      children: _v49
    }) : (0, _v1.jsxs)(_v4.Box, {
      children: [(0, _v1.jsxs)(_v6.Menu, {
        placement: "bottom",
        isOpen: _v21,
        children: [(0, _v1.jsx)(_v7.MenuButton, {
          as: _v5.Button,
          display: "flex",
          variant: "secondary",
          size: "xs",
          fontWeight: 500,
          rightIcon: (0, _v1.jsx)(_v12.ChevronDownSmall, {}),
          "data-testid": "version-menu-button",
          onClick: () => {
            let _v0 = !_v21;
            _v22(_v0), _v23 || _v24(!0), _v0 && _v5 && (0, _v30.bpOpenVersionList)({
              videoId: _v0,
              viewer: _v36,
              currentVersion: _v49,
              analyticsProps: _v5
            });
          },
          ref: _v47,
          isDisabled: _v20,
          children: _v49
        }), (0, _v1.jsx)(_v8.MenuList, {
          ref: _v48,
          p: "0",
          children: (0, _v1.jsx)(_v1.Fragment, {
            children: _v11 < 2 ? (0, _v1.jsx)(_v23.EmptyVersionList, {
              isDisabled: !_v4,
              openFileUpload: _v53
            }) : (0, _v1.jsxs)(_v4.Box, {
              width: "440px",
              height: _v19 ? "369px" : "304px",
              children: [(0, _v1.jsx)(_v4.Box, {
                height: "304px",
                overflowY: "auto",
                p: "sm",
                pb: "0",
                children: (_v32 || _v6) && !_v33 ? (0, _v1.jsx)(_v26.VersionsSkeleton, {
                  width: `${_v51}px`
                }) : (0, _v1.jsxs)(_v9.MenuOptionGroup, {
                  defaultValue: _v49,
                  children: [_v52 && (0, _v1.jsx)(_v26.VersionSkeleton, {
                    width: `${_v51}px`
                  }), _v35?.map((_v0, _v1) => {
                    let _v2 = _v1 === _v35?.length - 1;
                    return _v0.isDeleted ? (0, _v1.jsx)(_v22.DeletedVersion, {
                      index: _v1,
                      isLastElement: _v2,
                      sequenceNumber: _v0.sequenceNumber ?? _v31.DEFAULT_VERSION_NUMBER,
                      isLoadingMoreVersion: _v33,
                      ref: _v37,
                      uri: (0, _v32.formVersionRedirectUri)((0, _v32.idFromUri)(_v0.uri), _v0.toString(), _v1, _v14),
                      setIsVersionMenuActive: _v22,
                      sequenceNumberWidth: _v51
                    }, `${_v0.uri}-deleted`) : (0, _v1.jsx)(_v25.VersionListItem, {
                      uri: _v0.uri,
                      videoId: _v0,
                      clipHash: _v1,
                      reviewId: _v14,
                      duration: _v0?.duration || null,
                      fileName: _v0?.filename,
                      fileSize: _v0?.filesize ?? 0,
                      index: _v1,
                      isActive: _v0?.active,
                      isLastElement: _v2,
                      isLoadingMoreVersion: _v33,
                      createdTime: _v0?.createdTime,
                      uploadDate: _v0?.uploadDate ?? "",
                      userName: _v0?.user?.name ?? "",
                      ref: _v37,
                      versionType: _v0.versionType,
                      versionTranscodeStatus: _v0?.versionTranscodeStatus,
                      downloadConfig: _v0?.downloadConfig,
                      editSession: _v0?.editSession,
                      setIsVersionMenuActive: _v22,
                      thumbnail: _v0?.pictures?.sizes?.[3]?.link ?? _v0?.pictures?.baseLink ?? "",
                      sequenceNumber: _v0?.sequenceNumber ?? null,
                      sequenceNumberWidth: _v51,
                      currentVersion: _v49,
                      analyticsProps: _v5,
                      isCurrentVersionEnabled: _v10,
                      revalidateVideoData: _v12,
                      onVersionRestoreSuccess: _v13,
                      showDownload: _v16,
                      showRestore: _v17,
                      showDeleteVersion: _v18
                    }, _v0.uri);
                  })]
                })
              }), _v19 && (0, _v1.jsx)(_v4.Box, {
                display: "flex",
                justifyContent: "flex-end",
                p: "md",
                background: "fill-blur",
                backdropFilter: "blur(var(--vimeo-blur-lg))",
                children: (0, _v1.jsx)(_v5.Button, {
                  onClick: () => {
                    _v53();
                  },
                  size: "sm",
                  variant: "secondary",
                  leftIcon: (0, _v1.jsx)(_v13.Plus, {}),
                  isDisabled: _v32 || !_v4,
                  children: (0, _v17.translate)({
                    singular: "New version",
                    dictionary: {
                      es: {
                        singular: "Nueva versión"
                      },
                      "de-DE": {
                        singular: "Neue Version"
                      },
                      "fr-FR": {
                        singular: "Nouvelle version"
                      },
                      "ja-JP": {
                        singular: "新しいバージョン"
                      },
                      "ko-KR": {
                        singular: "새 버전"
                      },
                      "pt-BR": {
                        singular: "Nova versão"
                      },
                      "zh-CN": {
                        singular: "新版本"
                      }
                    }
                  })
                })
              })]
            })
          })
        })]
      }), !_v14 && (0, _v1.jsx)(_v39, {
        attemptReplace: (_v0, _v1) => {
          _v1 ? (_v39(_v0), _v7?.(!1)) : (_v7?.(!0), _v8?.(!0));
        },
        ref: _v46,
        videoId: _v0,
        quota: _v42,
        clipHash: _v1
      }, `file-upload-${_v38?.[0].name}-new-version`), (0, _v1.jsx)(_v33.ConfirmUploadModal, {
        onCancel: () => {
          _v40 || _v39(null);
        },
        onConfirm: () => void (_v38 && (_v41(!0), _v43(_v38, {
          uploadType: "replace_clip",
          clipId: _v0
        }), _v5 && (0, _v30.bpCreateVersion)({
          videoId: _v0,
          viewer: _v36,
          currentVersion: _v49,
          analyticsProps: _v5
        }))),
        isOpen: !!_v38 || _v40,
        fileName: _v38 ? _v38[0].name : "",
        isLoading: _v40
      })]
    });
  }], 0);
}