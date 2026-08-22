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
    _v38 = _v0.i(0);
  let _v39 = ({
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
    let [_v21, _v22] = (0, _v5.useState)(!1),
      {
        versionList: _v23,
        addNewVersion: _v24
      } = (0, _v25.useVersionsStore)(_v0 => ({
        versionList: _v0.versionList,
        addNewVersion: _v0.addNewVersion
      }));
    (0, _v23.useInitVersionsStore)({
      videoId: _v0,
      enabled: 0 === _v23.length,
      fields: _v35.VIDEO_VERSION_FIELDS,
      acceptHeader: _v35.API_ACCEPT_HEADER,
      itemsPerPage: 50,
      reviewId: _v14,
      password: (0, _v36.getReviewPasswordHashFromCookie)(_v14)
    });
    let {
        canLoadMore: _v25,
        loadMoreVersions: _v26,
        isLoadingMore: _v27
      } = (({
        videoId: _v0,
        enabled: _v1,
        fields: _v2,
        acceptHeader: _v3,
        itemsPerPage: _v4,
        reviewId: _v5,
        password: _v6
      }) => {
        let [_v7, _v8] = (0, _v5.useState)(void 0),
          {
            versionList: _v9,
            addVersions: _v10
          } = (0, _v25.useVersionsStore)(_v0 => ({
            versionList: _v0.versionList,
            addVersions: _v0.addVersions
          })),
          {
            data: _v11
          } = (0, _v24.useGetVideoVersions)(() => _v1 && _v0 && void 0 !== _v7 ? {
            where: {
              videoId: _v0
            },
            select: _v2,
            query: {
              perPage: _v4,
              includeDeletedVersions: !0,
              beforeVersionId: _v7,
              reviewId: _v5,
              password: _v6
            },
            headers: {
              Accept: _v3
            }
          } : null, {
            revalidateOnFocus: !1,
            shouldRetryOnError: !1
          }),
          _v12 = _v11?.data;
        return (0, _v5.useEffect)(() => {
          _v12 && _v10(_v12);
        }, [_v12, _v10]), {
          canLoadMore: !!_v11?.paging?.next,
          loadMoreVersions: () => {
            let _v0 = (_v0 => {
              if (!_v0) return 0;
              let _v1 = _v0.split("/").pop();
              return isNaN(Number(_v1)) ? 0 : Number(_v1);
            })(_v9.at(-1)?.uri);
            _v0 && _v7 !== _v0 && _v8(_v0);
          },
          isLoadingMore: void 0 === _v11 && void 0 !== _v7
        };
      })({
        videoId: _v0,
        enabled: _v23.length > 0,
        fields: _v35.VIDEO_VERSION_FIELDS,
        acceptHeader: _v35.API_ACCEPT_HEADER,
        itemsPerPage: 5,
        reviewId: _v14,
        password: (0, _v36.getReviewPasswordHashFromCookie)(_v14)
      }),
      _v28 = (0, _v26.useViewer)(),
      [_v29] = (0, _v32.useInfiniteScrollVersion)(_v25 || _v23.length < _v11, _v26),
      [_v30, _v31] = (0, _v5.useState)(null),
      [_v32, _v33] = (0, _v5.useState)(!1),
      {
        userQuota: _v34
      } = (0, _v33.useReplace)(_v0, _v14),
      {
        upload: _v35
      } = (0, _v22.useUploader)(),
      {
        trackReplaceVersion: _v36
      } = (0, _v20.useVideoManageTracking)(),
      _v37 = (0, _v5.useRef)(null);
    (0, _v21.useUploadLifecycle)((_v0, _v1) => {
      if ("replace_clip" !== _v1.uploadType || _v1.clipId !== String(_v0) || _v37.current === _v1.id) return;
      let _v2 = "completed" === _v0 ? "succeeded" : "failed" === _v0 ? "failed" : null;
      _v2 && (_v37.current = _v1.id, _v36({
        clipId: _v1.clipId,
        location: "version_dropdown",
        versionId: null,
        filename: _v1.file.name,
        filesize: _v1.file.size,
        uploadStatus: _v0,
        versionTranscodeStatus: null,
        status: _v2,
        error: "failed" === _v2 ? _v1.error ?? null : null
      }));
    }, [_v36, _v0]);
    let _v38 = (0, _v4.useRouter)(),
      _v39 = (0, _v5.useRef)(null),
      _v40 = (0, _v5.useRef)(null),
      _v41 = (0, _v5.useRef)(null),
      _v42 = (0, _v29.getVersionNumber)(_v9 || _v35.DEFAULT_VERSION_NUMBER),
      _v43 = _v23?.reduce((_v0, _v1) => Math.max(_v0, _v1.sequenceNumber?.toString().length ?? 0), 1) ?? 1,
      _v44 = _v35.MIN_WIDTH_FOR_SEQUENCE_NUMBER + _v43 * _v35.SEQUENCE_NUMBER_WIDTH_FOR_EACH_DIGIT,
      _v45 = _v23.some(_v0 => "in_progress" === _v0.versionTranscodeStatus),
      _v46 = (_v14 ? !!_v15 : !_v4) && !_v45,
      _v47 = () => {
        _v39.current && (_v22(!1), _v39.current.click(), _v5 && (0, _v34.bpStartUploadVersion)({
          videoId: _v0,
          viewer: _v28,
          currentVersion: _v42,
          analyticsProps: _v5
        }));
      },
      _v48 = (0, _v5.useRef)(!1),
      {
        baseUrl: _v49,
        jwt: _v50
      } = (0, _v18.useGctlConfig)(),
      _v51 = (0, _v5.useCallback)(() => {
        0 !== _v23.length && (0, _v16.getVideo)({
          headers: {
            Accept: _v35.API_ACCEPT_HEADER,
            Authorization: _v50 ? `jwt ${_v50}` : ""
          },
          baseUrl: _v49,
          where: {
            videoId: _v0
          },
          select: ["metadata.connections.versions.currentUri"]
        }).then(_v0 => {
          let _v1 = (0, _v36.idFromUri)(_v0?.metadata?.connections?.versions?.currentUri);
          (0, _v36.idFromUri)(_v23.at(0)?.uri) < _v1 && (0, _v17.getVideoVersion)({
            headers: {
              Accept: _v35.API_ACCEPT_HEADER,
              Authorization: _v50 ? `jwt ${_v50}` : ""
            },
            baseUrl: _v49,
            where: {
              videoId: _v0,
              versionId: _v1
            },
            select: _v35.VIDEO_VERSION_FIELDS
          }).then(_v24);
        });
      }, [_v24, _v49, _v23, _v50, _v0]);
    return ((0, _v5.useEffect)(() => {
      _v4 || _v6 ? _v4 && _v48.current && (_v48.current = !1, _v51()) : _v48.current = !0;
    }, [_v4, _v51, _v6]), (0, _v12.useOutsideClick)({
      enabled: _v21,
      ref: _v41,
      handler: _v0 => {
        _v40.current && _v0.target && (_v40.current == _v0.target || _v40.current?.contains(_v0.target)) || _v22(!1);
      }
    }), (0, _v21.useUploadLifecycle)((_v0, _v1) => {
      _v32 && (0, _v29.isUploadActiveOrComplete)(_v1) && _v1.clipId && (_v3 ? _v38.replace({
        pathname: `/manage/videos/${_v1.clipId}`
      }) : (_v12?.(), _v33(!1), _v31(null)));
    }, [_v32, _v3, _v38, _v12]), _v2) ? (0, _v1.jsx)(_v13.Text, {
      color: "text-secondary",
      variant: "heading-xs",
      children: _v42
    }) : (0, _v1.jsxs)(_v6.Box, {
      children: [(0, _v1.jsxs)(_v8.Menu, {
        placement: "bottom",
        isOpen: _v21,
        children: [(0, _v1.jsx)(_v9.MenuButton, {
          as: _v7.Button,
          display: "flex",
          variant: "secondary",
          size: "xs",
          fontWeight: 500,
          rightIcon: (0, _v1.jsx)(_v14.ChevronDownSmall, {}),
          "data-testid": "version-menu-button",
          onClick: () => {
            let _v0 = !_v21;
            _v22(_v0), _v0 && _v5 && (0, _v34.bpOpenVersionList)({
              videoId: _v0,
              viewer: _v28,
              currentVersion: _v42,
              analyticsProps: _v5
            });
          },
          ref: _v40,
          isDisabled: _v20,
          children: _v42
        }), (0, _v1.jsx)(_v10.MenuList, {
          ref: _v41,
          p: "0",
          children: (0, _v1.jsx)(_v1.Fragment, {
            children: _v11 < 2 ? (0, _v1.jsx)(_v28.EmptyVersionList, {
              isDisabled: !_v4,
              openFileUpload: _v47
            }) : (0, _v1.jsxs)(_v6.Box, {
              width: "440px",
              height: _v19 ? "369px" : "304px",
              children: [(0, _v1.jsx)(_v6.Box, {
                height: "304px",
                overflowY: "auto",
                p: "sm",
                pb: "0",
                children: 0 === _v23.length || _v6 && !_v45 ? (0, _v1.jsx)(_v31.VersionsSkeleton, {
                  width: `${_v44}px`
                }) : (0, _v1.jsxs)(_v11.MenuOptionGroup, {
                  defaultValue: _v42,
                  children: [_v46 && (0, _v1.jsx)(_v31.VersionSkeleton, {
                    width: `${_v44}px`
                  }), _v23?.map((_v0, _v1) => {
                    let _v2 = _v1 === _v23?.length - 1;
                    return _v0.isDeleted ? (0, _v1.jsx)(_v27.DeletedVersion, {
                      index: _v1,
                      isLastElement: _v2,
                      sequenceNumber: _v0.sequenceNumber ?? _v35.DEFAULT_VERSION_NUMBER,
                      isLoadingMoreVersion: _v27,
                      ref: _v29,
                      uri: (0, _v36.formVersionRedirectUri)((0, _v36.idFromUri)(_v0.uri), _v0.toString(), _v1, _v14),
                      setIsVersionMenuActive: _v22,
                      sequenceNumberWidth: _v44
                    }, `${_v0.uri}-deleted`) : (0, _v1.jsx)(_v30.VersionListItem, {
                      uri: _v0.uri,
                      videoId: _v0,
                      clipHash: _v1,
                      reviewId: _v14,
                      duration: _v0?.duration || null,
                      fileName: _v0?.filename ?? "",
                      fileSize: _v0?.filesize ?? 0,
                      index: _v1,
                      isActive: _v0?.active ?? !1,
                      isLastElement: _v2,
                      isLoadingMoreVersion: _v27,
                      createdTime: _v0?.createdTime,
                      uploadDate: _v0?.uploadDate ?? "",
                      userName: _v0?.user?.name ?? "",
                      ref: _v29,
                      versionType: _v0.versionType ?? "regular",
                      versionTranscodeStatus: _v0?.versionTranscodeStatus,
                      uploadStatus: _v0?.upload?.status ?? null,
                      downloadConfig: _v0?.downloadConfig,
                      editSession: _v0?.editSession?.status ? {
                        status: _v0.editSession.status
                      } : void 0,
                      setIsVersionMenuActive: _v22,
                      thumbnail: _v0?.pictures?.sizes?.[3]?.link ?? _v0?.pictures?.baseLink ?? "",
                      sequenceNumber: _v0?.sequenceNumber ?? null,
                      sequenceNumberWidth: _v44,
                      currentVersion: _v42,
                      nextVersionSequenceNumber: (0, _v29.getNextVersionSequenceNumber)(_v23),
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
              }), _v19 && (0, _v1.jsx)(_v6.Box, {
                display: "flex",
                justifyContent: "flex-end",
                p: "md",
                background: "fill-blur",
                backdropFilter: "blur(var(--vimeo-blur-lg))",
                children: (0, _v1.jsx)(_v7.Button, {
                  onClick: () => {
                    _v47();
                  },
                  size: "sm",
                  variant: "secondary",
                  leftIcon: (0, _v1.jsx)(_v15.Plus, {}),
                  isDisabled: 0 === _v23.length || !_v4,
                  children: (0, _v19.translate)({
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
      }), !_v14 && (0, _v1.jsx)(_v38.FileUpload, {
        attemptReplace: (_v0, _v1) => {
          _v1 ? (_v31(_v0), _v7?.(!1)) : (_v7?.(!0), _v8?.(!0));
        },
        ref: _v39,
        videoId: _v0,
        quota: _v34,
        clipHash: _v1
      }, `file-upload-${_v30?.[0].name}-new-version`), (0, _v1.jsx)(_v37.ConfirmUploadModal, {
        onCancel: () => {
          _v32 || _v31(null);
        },
        onConfirm: () => void (_v30 && (_v33(!0), _v35(_v30, {
          uploadType: "replace_clip",
          clipId: _v0
        }), _v5 && (0, _v34.bpCreateVersion)({
          videoId: _v0,
          viewer: _v28,
          currentVersion: _v42,
          analyticsProps: _v5
        }))),
        isOpen: !!_v30 || _v32,
        fileName: _v30 ? _v30[0].name : "",
        isLoading: _v32
      })]
    });
  };
  _v0.s(["VersionListPicker", 0, _v0 => {
    let {
      settings: _v1
    } = (0, _v2.useOrionSettings)();
    return _v1.new_replace_feature ? (0, _v1.jsx)(_v39, {
      ..._v0
    }) : (0, _v1.jsx)(_v3.VersionList, {
      ..._v0
    });
  }], 0);
}