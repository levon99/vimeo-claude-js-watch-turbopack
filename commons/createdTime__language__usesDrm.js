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
    _v18 = _v0.i(0);
  function _v19(_v0) {
    return _v0.split("/").pop();
  }
  var _v20 = _v0.i(0);
  let _v21 = ["createdTime", "language", "usesDrm", "metadata.interactions.translations", "metadata.interactions.edit.uri", "metadata.connections.versions.currentUri", "metadata.connections.versions.latestIncompleteVersion", "user.uri", "user.preferences.videos.keepSourceFiles"];
  var _v22 = _v0.i(0);
  let _v23 = (_v0, _v1 = {}) => {
    let {
        allowDownloadOriginal: _v2 = !0,
        allowAudioDownload: _v3 = !1
      } = _v1,
      _v4 = _v0 => "source" === _v0 ? 0 : "audio" === _v0 ? 2 : 1,
      _v5 = ["hd", "sd", "uhd"];
    return _v3 && _v5.push("audio"), _v2 && _v5.push("source"), _v0.filter(_v0 => _v5.includes(_v0.quality)).sort((_v0, _v1) => {
      let _v2 = _v4(_v0.quality),
        _v3 = _v2 - _v4(_v1.quality);
      return 0 !== _v3 ? _v3 : 1 === _v2 ? _v1.height - _v0.height : 0;
    });
  };
  _v0.s(["filterVideoFilesForKnownResolutionThenSortAlphabetically", 0, _v23], 0);
  let _v24 = ["download.height", "download.link", "download.quality", "download.rendition", "download.type", "download.width", "download.sizeShort", "download.publicName", "download.videoFileId"];
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  class _v29 extends Error {
    _data;
    constructor(_v0, _v1 = "General error.") {
      let _v2,
        _v3 = ["Video tagging error.", _v1];
      if (_v0 instanceof _v29) _v3 = [_v0.message], _v2 = _v0;else if (_v0 instanceof Error) _v3.push(_v0.message), _v2 = _v0;else if ("object" == typeof _v0) try {
        _v3.push(JSON.stringify(_v0, null, 2));
      } catch {} else "string" == typeof _v0 && _v3.push(_v0);
      super(_v3.join(" "), {
        cause: _v2
      }), this._data = _v0, this.name = this.constructor.name;
    }
    get data() {
      return this._data;
    }
  }
  let _v30 = async (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = await fetch(`//${_v1}/videos/${_v0}/tag_job`, {
        method: "POST",
        headers: {
          Authorization: `jwt ${_v2}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          flow: _v4,
          video_file_id: _v3
        })
      });
      if (_v5.ok) {
        let _v0 = await _v5.json();
        return (0, _v28.camelizeDeep)(_v0);
      }
      {
        let _v0 = (await _v5.json()).catch(() => ({
          empty: !0
        }));
        throw _v0.status = _v5.status, new _v29(_v0, "Bad response.");
      }
    },
    _v31 = async (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = await fetch(`//${_v1}/videos/${_v0}/tag_job/${_v3}?filename=${_v4}`, {
        method: "GET",
        headers: {
          Authorization: `jwt ${_v2}`
        }
      });
      if (_v5.ok) {
        let _v0 = await _v5.json();
        return (0, _v28.camelizeDeep)(_v0);
      }
      {
        let _v0 = (await _v5.json()).catch(() => ({
          empty: !0
        }));
        throw _v0.status = _v5.status, new _v29(_v0, "Bad response.");
      }
    };
  var _v32 = _v0.i(0),
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
  _v0.s(["DownloadFilesContent", 0, ({
    files: _v0,
    handleClick: _v1,
    videoID: _v2,
    versionUri: _v3,
    clipRequestId: _v4,
    location: _v5,
    className: _v6,
    pageName: _v7,
    usesDrm: _v8,
    audioTracksSelector: _v9 = !0,
    reviewId: _v10
  }) => {
    let [_v11, _v12] = (0, _v2.useState)({
        value: _v13.VALUE_ORIGINAL_AUDIO_TRACK,
        label: _v13.VALUE_ORIGINAL_AUDIO_TRACK,
        isAIGenerated: !1,
        isOriginalAudio: !0
      }),
      _v13 = _v11.value,
      {
        settings: _v14
      } = (0, _v11.useOrionSettings)(),
      _v15 = (0, _v2.useMemo)(() => _v23(_v0, {
        allowAudioDownload: _v14.enable_audio_download
      }), [_v0, _v14.enable_audio_download]),
      [_v16, _v17] = (0, _v2.useState)(!1),
      _v18 = _v4 ?? (_v2 ? `${_v2}` : void 0),
      _v19 = (0, _v2.useMemo)(() => _v3 ? Number(_v19(_v3)) : void 0, [_v3]),
      _v20 = (0, _v12.useViewer)(),
      _v21 = _v9 && !!_v20?.user && !_v10,
      _v22 = (_v20?.teamUser ? _v20.teamUser.hasPaid : _v20?.user?.capabilities?.hasPaid) ?? !1,
      {
        usesDrm: _v23,
        mostRecentVersion: _v24,
        isFetching: _v25,
        hasVideoTranslations: _v26,
        videoLanguage: _v27,
        clipMetadataError: _v28,
        canEdit: _v29,
        isOwner: _v30,
        videoCreatedTime: _v31,
        keepSourceFiles: _v32
      } = function ({
        videoId: _v0,
        disabled: _v1
      }) {
        let _v2 = (0, _v12.useViewer)(),
          {
            data: _v3,
            error: _v4,
            isLoading: _v5,
            isValidating: _v6
          } = (0, _v18.useGetVideo)(() => !_v0 || _v1 ? null : {
            where: (0, _v20.mapVideoIdTypeForGCTL)(_v0),
            select: _v21,
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.10"
            }
          }),
          _v7 = !!_v3?.metadata?.interactions?.translations?.uri,
          _v8 = !!_v3?.metadata?.interactions?.edit?.uri,
          _v9 = _v3?.metadata?.connections?.versions?.currentUri,
          _v10 = _v3?.metadata?.connections?.versions ?? [],
          _v11 = (0, _v2.useMemo)(() => _v3?.metadata?.connections?.versions?.currentUri ? Number(_v19(_v3?.metadata.connections.versions.currentUri)) : void 0, [_v3?.metadata?.connections?.versions?.currentUri]),
          _v12 = _v3?.user?.uri,
          _v13 = !!(_v12 && _v12 === _v2?.user?.uri);
        return {
          hasVideoTranslations: _v7,
          mostRecentVersion: _v11 && _v11 >= 0 ? _v11 : void 0,
          currentVideoUri: _v9,
          allVideoVersions: _v10,
          isFetching: _v5 || _v6,
          videoLanguage: _v3?.language,
          usesDrm: _v3?.usesDrm,
          clipMetadataError: _v4,
          canEdit: _v13 || _v8,
          isOwner: _v13,
          videoCreatedTime: _v3?.createdTime,
          keepSourceFiles: _v3?.user?.preferences?.videos?.keepSourceFiles
        };
      }({
        disabled: !_v21,
        videoId: _v18
      }),
      _v33 = _v19 ?? _v24,
      _v34 = !_v25 && void 0 === _v33;
    !function ({
      appType: _v0,
      modalLocation: _v1 = null,
      pageName: _v2 = null,
      userId: _v3 = null,
      userLocale: _v4 = null,
      videoId: _v5 = null,
      allowAudioTracksSelector: _v6 = null,
      isUserInAudioTrackSelectorTest: _v7 = null
    }, _v8 = !0) {
      (0, _v2.useEffect)(() => {
        (0, _v44.updateTrackingConfig)({
          APP_TYPE: _v0,
          USER_ID: _v3,
          USER_LOCALE: _v4,
          MODAL_LOCATION: _v1,
          PAGE_NAME: _v2,
          VIDEO_ID: _v5,
          ALLOW_AUDIOTRACK_SELECTOR: _v6,
          IS_AB_TEST: _v7
        }), _v8 && (0, _v44.updateDatadogGlobals)((0, _v44.getApplicationGlobals)());
      }, [_v0, _v8, _v1, _v2, _v3, _v4, _v5, _v6, _v7]);
    }({
      appType: _v42.APP_TYPE,
      userId: _v20?.user?.id,
      userLocale: _v20?.locale,
      modalLocation: _v5 ?? _v7,
      videoId: _v18,
      allowAudioTracksSelector: _v21,
      pageName: _v7
    }, !1);
    let _v35 = _v13 === _v13.VALUE_ORIGINAL_AUDIO_TRACK,
      _v36 = _v35 ? void 0 : _v13,
      {
        onDownloadClick: _v37,
        loadingButtons: _v38
      } = function ({
        location: _v0,
        pageName: _v1,
        handleClick: _v2,
        videoID: _v3,
        audiotrackUri: _v4
      }) {
        let _v5,
          [_v6, _v7] = (0, _v2.useState)([]),
          {
            shouldTagVideo: _v8,
            tagVideo: _v9
          } = function () {
            let [_v0, _v1] = (0, _v2.useState)({}),
              _v2 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3, _v4, _v5) => new Promise((_v0, _v1) => {
                let _v2 = null;
                _v31(_v0, _v1, _v2, _v3, _v4).then(_v0 => {
                  "success" === _v0.status && _v0.downloadUrl ? (_v1({
                    ..._v0,
                    [_v5]: _v0.downloadUrl
                  }), _v2 && clearTimeout(_v2), _v0(_v0.downloadUrl)) : "failed" === _v0.status ? _v1(new _v29(_v0, 'Received status is "failed".')) : _v2 = setTimeout(() => _v2(_v0, _v1, _v2, _v3, _v4, _v5).then(_v0 => _v0(_v0)).catch(_v0 => _v1(_v0)), 500);
                }).catch(_v0 => _v1(new _v29(_v0, "Failed to fetch tagging job status.")));
              }), [_v0]);
            return {
              shouldTagVideo: (_v0, _v1) => "svv" === _v1 && _v0.size && _v0.size <= 0,
              tagVideo: (0, _v2.useCallback)((_v0, _v1, _v2, _v3, _v4) => new Promise((_v0, _v1) => {
                let _v2 = _v0[_v3];
                _v2 ? _v0(_v2) : _v30(_v2, _v0, _v1, _v3, _v4).then(_v0 => {
                  "failed" === _v0.status && _v1(new _v29(_v0, 'Received status is "failed".')), _v0.downloadUrl ? (_v1({
                    ..._v0,
                    [_v3]: _v0.downloadUrl
                  }), _v0(_v0.downloadUrl)) : _v2(_v2, _v0, _v1, _v0.id, _v0.filename, _v3).then(_v0 => _v0(_v0)).catch(_v0 => _v1(new _v29(_v0, "Failed to fetch job status.")));
                }).catch(_v0 => _v1(new _v29(_v0, "Failed to trigger tagging job.")));
              }), [_v2, _v0])
            };
          }(),
          {
            trackVideoDownloadStarted: _v10
          } = (_v5 = (0, _v27.usePico)(), {
            trackVideoDownloadStarted: (0, _v2.useCallback)(_v0 => {
              null !== _v5 && _v5.track("video_download_started", {
                video_id: null != _v0.videoId ? String(_v0.videoId) : null,
                file_quality: _v0.fileQuality,
                file_rendition: _v0.fileRendition
              });
            }, [_v5])
          }),
          _v11 = (0, _v2.useContext)(_v33.ViewerContext),
          _v12 = (0, _v25.useRouter)().asPath,
          _v13 = (0, _v26.useToast)(),
          _v14 = (0, _v2.useCallback)(() => {
            let _v0 = "download-files-download-started";
            _v13.isActive(_v0) || _v13({
              id: _v0,
              title: (0, _v10.translate)({
                singular: "Download started",
                dictionary: {
                  es: {
                    singular: "Descarga iniciada"
                  },
                  "de-DE": {
                    singular: "Download gestartet"
                  },
                  "fr-FR": {
                    singular: "Téléchargement lancé"
                  },
                  "ja-JP": {
                    singular: "ダウンロードが開始されました"
                  },
                  "ko-KR": {
                    singular: "다운로드가 시작되었습니다"
                  },
                  "pt-BR": {
                    singular: "Download iniciado"
                  },
                  "zh-CN": {
                    singular: "下载已开始"
                  }
                }
              }),
              variant: "success",
              duration: 0,
              isClosable: !0
            });
          }, [_v13]);
        return {
          onDownloadClick: (0, _v2.useCallback)((_v0, _v1) => _v0 => {
            var _v1, _v2, _v3, _v4;
            let _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13;
            _v1 = _v3 ?? 0, _v2 = _v0.quality, _v3 = _v0.rendition, _v4 = _v11?.teamUser, _v5 = (0, _v35.buildActionBpContext)({
              action_type: "click",
              feature: null
            }), _v6 = (0, _v37.buildVideoBpContext)({
              video_id: _v1,
              video_owner_id: _v4?.ownerId ?? null
            }), _v7 = (0, _v36.buildProductAnalyticsBpContext)({
              product: "distribution",
              feature: "download",
              location: "modal",
              modal_name: "download_modal",
              flow: "download_video_file",
              element: "button",
              is_user_facing_data: !1,
              entity_type: "video",
              copy: null,
              device_type: (0, _v34.default)()
            }), _v8 = (0, _v40.buildThirdPartyIntegrationBpContext)({
              is_integration: !1,
              integration_id: null,
              integration_name: null,
              managed_user_id: null,
              app_id: null,
              integration_type: null,
              partner_bucket: null,
              is_partner: null
            }), _v9 = (0, _v41.buildWebBpContext)({
              page_name: _v1 ?? "viewer_home",
              referrer_page_name: "svv" === _v0 ? "single_video_view" : null,
              target: null,
              target_path: null,
              path: _v12 ?? null,
              copy: "Download"
            }), _v10 = (_v0 => {
              if (!_v0 || _v0.ownerId === _v0.userId) return "owner";
              if ("Admin" === _v0.plainTextPermissionLevel) return "admin";
              if ("Contributor" === _v0.plainTextPermissionLevel) return "contributor";
              if ("ContributorPlus" === _v0.plainTextPermissionLevel) return "contributor_plus";
              if ("Viewer" === _v0.plainTextPermissionLevel) return "viewer";else return null;
            })(_v4), _v11 = (0, _v39.buildTeamBpContext)({
              is_team_member: !!_v4?.ownerId,
              team_owner_id: _v4?.ownerId ?? null,
              team_id: _v4?.teamId ?? null,
              team_subscription_type: _v4?.accountType ?? null,
              team_size: _v4?.currentTeamSize ?? null,
              team_role: _v10
            }), _v12 = {
              ..._v5,
              ..._v6,
              ..._v7,
              ..._v11,
              ..._v8,
              ..._v9
            }, _v13 = {
              distribution_type: "download",
              target_quality: _v2,
              target_resolution: _v3,
              target_file_details: null,
              number_of_items: 1,
              embed_config: null,
              embed_custom_dimensions: null,
              is_internal: !1,
              target_transcript_language: null,
              audio_language_selected_for_download: _v1.label,
              is_ai_translated: _v1.isAIGenerated,
              is_original_language_downloaded: _v1.isOriginalAudio,
              collection_type: null,
              distribution_tab: null,
              embed_layout: null,
              embed_playback_toggles_off: null,
              embed_playback_toggles_on: null,
              is_send_email_notification: null,
              lms_completion_threshold: null,
              lms_scoring_method: null,
              lms_technical_standard: null,
              sharee_email: null,
              sharee_entity_permission: null,
              sharee_id: null,
              sharee_team_permission: null
            }, (0, _v38.sendBpEventWithContexts)("vimeo.distribute_content", _v12, 18, _v13), _v10({
              videoId: null != _v3 ? String(_v3) : null,
              fileQuality: _v0.quality ?? null,
              fileRendition: _v0.rendition ?? null
            }), _v2 && _v2(_v0), _v14(), _v11?.apiUrl && _v11?.jwt && _v0 && _v3 && !_v4 && _v8(_v0, _v0) && (_v0.preventDefault(), _v7([..._v6, _v0.link]), _v9(_v11.apiUrl, _v11.jwt, _v3, _v0.videoFileId?.toString() ?? "").then(_v0 => {
              _v0 ? (0, _v32.downloadFile)(_v0) : (0, _v32.downloadFile)(`${_v0.link}`), _v7([..._v6.filter(_v0 => _v0 !== _v0.link)]);
            }).catch(_v0 => {
              (0, _v43.trackError)(_v0, {
                videoID: _v3,
                audiotrackUri: _v4,
                hint: "Failed to complete video-tagging job.",
                trackingTag: _v42.TRACKED_ERRORS.FAILED_VIDEO_TAGGING
              }), (0, _v32.downloadFile)(`${_v0.link}`), _v7([..._v6.filter(_v0 => _v0 !== _v0.link)]);
            }));
          }, [_v4, _v2, _v6, _v0, _v1, _v12, _v8, _v14, _v9, _v10, _v3, _v11?.apiUrl, _v11?.jwt, _v11?.teamUser]),
          loadingButtons: _v6
        };
      }({
        location: _v5,
        pageName: _v7,
        handleClick: _v1,
        videoID: _v2,
        audiotrackUri: _v36,
        allowAudioTracksSelector: _v21
      }),
      {
        downloadableFiles: _v39,
        getVideoFiles: _v40,
        isValidating: _v41,
        isLoading: _v42,
        videoFilesError: _v43
      } = function ({
        videoId: _v0,
        disabled: _v1,
        allowAudioDownload: _v2
      }) {
        let {
          error: _v3,
          mutate: _v4,
          data: _v5,
          isLoading: _v6,
          isValidating: _v7
        } = (0, _v18.useGetVideo)(() => !_v0 || _v1 ? null : {
          where: (0, _v20.mapVideoIdTypeForGCTL)(_v0),
          select: _v24,
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          }
        }, {
          refreshWhenHidden: !1,
          revalidateOnFocus: !1,
          shouldRetryOnError: !1
        });
        return {
          downloadableFiles: (0, _v2.useMemo)(() => _v23(_v5?.download ?? [], {
            allowAudioDownload: _v2
          }), [_v5?.download, _v2]),
          videoFilesError: _v3,
          getVideoFiles: _v4,
          isLoading: _v6,
          isValidating: _v7,
          isFetching: _v6 || _v7
        };
      }({
        videoId: _v18,
        disabled: !_v21,
        allowAudioDownload: _v14.enable_audio_download
      }),
      {
        downloadableFiles: _v44,
        downloadsError: _v45,
        getDownloads: _v46,
        isDownloadsValidating: _v47,
        isDownloadsLoading: _v48
      } = function ({
        videoId: _v0,
        versionId: _v1,
        disabled: _v2,
        audiotrackUri: _v3,
        allowAudioDownload: _v4
      }) {
        var _v5;
        let {
            error: _v6,
            mutate: _v7,
            data: _v8,
            isLoading: _v9,
            isValidating: _v10
          } = (0, _v22.useGetVideoVersionDownloads)(() => {
            if (!_v0 || !_v1 || _v2) return null;
            let _v0 = _v3?.split("/").pop();
            return {
              where: {
                ...(0, _v20.mapVideoIdTypeForGCTL)(_v0),
                versionId: _v1
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.10"
              },
              query: {
                audiotrackId: _v0
              }
            };
          }, {
            keepPreviousData: !0,
            refreshWhenHidden: !1,
            revalidateOnFocus: !1,
            shouldRetryOnError: !1
          }),
          _v11 = "object" == typeof (_v5 = _v8) && null !== _v5 && Array.isArray(_v8.download);
        return {
          downloadableFiles: (0, _v2.useMemo)(() => _v11 ? _v23(_v8.download, {
            allowDownloadOriginal: !_v3,
            allowAudioDownload: _v4 && !_v3
          }) : [], [_v3, _v4, _v8, _v11]),
          downloadsError: _v6,
          getDownloads: _v7,
          isDownloadsLoading: _v9,
          isDownloadsValidating: _v10,
          hasValidResponse: _v11
        };
      }({
        versionId: _v33,
        videoId: _v18,
        disabled: !_v21,
        audiotrackUri: _v36,
        allowAudioDownload: _v14.enable_audio_download
      });
    (0, _v2.useEffect)(() => {
      _v36 && _v46();
    }, [_v36, _v46]);
    let _v49 = _v35 && !_v43 && !_v42,
      _v50 = (0, _v2.useMemo)(() => _v35 ? _v49 ? _v39 : _v15 : null, [_v49, _v35, _v39, _v15]),
      _v51 = _v48 || _v42 || _v25,
      _v52 = (0, _v2.useMemo)(() => _v21 ? _v51 && _v50 ? {
        files: _v50
      } : _v51 ? {
        isLoading: !0,
        files: []
      } : (_v34 || _v45) && _v50 ? {
        files: _v50,
        isFallback: !0
      } : {
        files: _v44
      } : {
        files: _v15
      }, [_v51, _v21, _v15, _v34, _v45, _v50, _v44]),
      _v53 = _v52.files,
      _v54 = function ({
        isOwner: _v0,
        canKeepSourceFiles: _v1,
        videoFiles: _v2,
        keepSourceFiles: _v3,
        videoCreatedTime: _v4,
        disabled: _v5
      }) {
        let {
          settings: _v6
        } = (0, _v11.useOrionSettings)();
        return (0, _v2.useMemo)(() => {
          if (!_v6.enable_original_download_banner || _v5 || !_v0 || !_v1 || _v3) return {
            show: !1
          };
          let _v0 = _v4 ? Math.ceil((new Date(_v4).getTime() + 0 - Date.now()) / 0) : null;
          return _v2.find(_v0 => "source" === _v0.quality) ? null !== _v0 && _v0 > 0 ? {
            show: !0,
            variant: "countdown",
            daysRemaining: _v0
          } : {
            show: !1
          } : null !== _v0 && _v0 > 0 ? {
            show: !0,
            variant: "countdown",
            daysRemaining: _v0
          } : {
            show: !0,
            variant: "unavailable"
          };
        }, [_v6.enable_original_download_banner, _v5, _v0, _v1, _v2, _v3, _v4]);
      }({
        isOwner: _v30,
        canKeepSourceFiles: _v22,
        videoFiles: _v53,
        keepSourceFiles: _v32,
        videoCreatedTime: _v31,
        disabled: !_v21
      }),
      _v55 = _v52.isFallback,
      _v56 = 0 === _v53.length && !_v52.isLoading;
    !function ({
      versionIsMissing: _v0,
      clipMetadataError: _v1,
      videoFilesError: _v2,
      downloadsError: _v3,
      videoID: _v4,
      versionId: _v5,
      selectedAudioTrack: _v6,
      isFallbackLinksUsed: _v7,
      isNoLinksToShow: _v8,
      allowAudioTracksSelector: _v9
    }) {
      (0, _v2.useEffect)(() => {
        if (_v9 && !_v4) {
          let _v0 = "Video ID is missing.";
          (0, _v43.trackError)(Error(_v0), {
            versionId: _v5,
            videoID: _v4,
            hint: _v0,
            trackingTag: _v42.TRACKED_ERRORS.VIDEO_ID_MISSING
          });
        }
      }, [_v4, _v5, _v9]), (0, _v2.useEffect)(() => {
        if (_v3) {
          let _v0 = _v6.split("/").pop();
          (0, _v43.trackError)(_v3, {
            videoID: _v4,
            versionId: _v5,
            selectedAudioTrack: _v6,
            trackId: _v0,
            hint: "Failed to fetch DL links for video and audio-track.",
            method: "useGetVideoVersionDownloads",
            trackingTag: _v42.TRACKED_ERRORS.FETCH_DL_LINKS_FAILED
          });
        }
      }, [_v6, _v3, _v4, _v5]), (0, _v2.useEffect)(() => {
        _v2 && (0, _v43.trackError)(_v2, {
          videoID: _v4,
          hint: "Failed to fetch main DL links for video.",
          method: "useGetVideo",
          trackingTag: _v42.TRACKED_ERRORS.FETCH_CLIP_FAILED
        });
      }, [_v2, _v4]), (0, _v2.useEffect)(() => {
        _v9 && _v1 && (0, _v43.trackError)(_v1, {
          versionId: _v5,
          videoID: _v4,
          hint: "Failed to fetch clip's metadata.",
          method: "useGetVideoMetadata",
          trackingTag: _v42.TRACKED_ERRORS.FETCH_CLIP_METADATA_FAILED
        });
      }, [_v9, _v1, _v5, _v4]), (0, _v2.useEffect)(() => {
        if (_v9 && _v0) {
          let _v0 = "Version ID is missing.";
          (0, _v43.trackError)(Error(_v0), {
            versionIsMissing: _v0,
            videoID: _v4,
            hint: _v0,
            trackingTag: _v42.TRACKED_ERRORS.VIDEO_VERSION_ID_MISSING
          });
        }
      }, [_v9, _v0, _v4]), (0, _v2.useEffect)(() => {
        if (_v9 && (_v8 || _v7)) {
          let _v0 = _v8 ? "No download links to show." : "Used fallback links.";
          (0, _v43.trackError)(Error(_v0), {
            videoID: _v4,
            versionId: _v5,
            isNoLinksToShow: _v8,
            isFallbackLinksUsed: _v7,
            selectedAudioTrack: _v6,
            trackingTag: _v8 ? _v42.TRACKED_ERRORS.UI_NO_LINKS_TO_SHOW : _v42.TRACKED_ERRORS.UI_USED_FALLBACK_LINKS
          });
        }
      }, [_v9, _v8, _v5, _v4, _v6, _v7]);
    }({
      versionIsMissing: _v34,
      clipMetadataError: _v28,
      videoFilesError: _v43,
      downloadsError: _v45,
      videoID: _v18,
      versionId: _v33,
      selectedAudioTrack: _v13,
      isFallbackLinksUsed: _v55,
      isNoLinksToShow: _v56,
      allowAudioTracksSelector: _v21
    });
    let _v57 = (0, _v2.useCallback)(() => {
        _v12({
          value: _v13.VALUE_ORIGINAL_AUDIO_TRACK,
          label: _v13.VALUE_ORIGINAL_AUDIO_TRACK,
          isAIGenerated: !1,
          isOriginalAudio: !0
        });
      }, []),
      _v58 = (0, _v2.useCallback)(() => {
        _v40(), _v46();
      }, [_v46, _v40]),
      _v59 = (0, _v2.useCallback)(() => {
        _v16 && _v36 ? _v57() : (_v58(), _v17(!0)), _v45.trackingHandle.downloadLinks.userRetriesGetLinks({
          audiotrackUri: _v36
        });
      }, [_v36, _v57, _v58, _v16]),
      _v60 = (0, _v2.useCallback)(_v0 => {
        _v45.trackingHandle.audioTrackSelector.userSelectedAudioTrack(_v0), _v12(_v0);
      }, []),
      _v61 = _v21 && _v56 && _v45;
    return (0, _v2.useEffect)(() => {
      _v61 && _v45.trackingHandle.downloadLinks.onLinksRetryRendered();
    }, [_v61]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(_v23 || _v8) && (0, _v1.jsx)(_v14.DrmAlert, {}), (0, _v1.jsxs)(_v6.Flex, {
        gap: "1.75rem",
        direction: "column",
        className: _v6,
        children: [_v21 && (0, _v1.jsx)(_v13.AudioTrackSelector, {
          videoID: _v18,
          setSelectedAudioTrack: _v60,
          selectedAudioTrack: _v13,
          versionId: _v33,
          videoLanguage: _v27,
          hasVideoTranslations: _v26,
          hasEditRights: _v29
        }), _v61 && (0, _v1.jsx)(_v16.TryAgainAlert, {
          isLoading: _v47 || _v41,
          onRetry: _v59
        }), _v52.isLoading && (0, _v1.jsx)(_v4.Center, {
          w: "100%",
          h: "100%",
          margin: "auto",
          children: (0, _v1.jsx)(_v5.Spinner, {
            size: "md"
          })
        }), _v56 && !_v45 ? (0, _v1.jsx)(_v17.WaitProcessing, {}) : _v53.map(_v0 => (0, _v1.jsxs)(_v6.Flex, {
          align: "center",
          justify: "space-between",
          id: `download-file-${_v0.link}`,
          children: [(0, _v1.jsxs)(_v6.Flex, {
            gap: "0.75rem",
            align: "center",
            children: [(0, _v1.jsx)(_v8.Paragraph, {
              size: "lg",
              fontWeight: "500",
              minW: "3.13rem",
              children: "source" === _v0.quality ? (0, _v10.translate)({
                singular: "Original",
                dictionary: {
                  "ja-JP": {
                    singular: "オリジナルサイズ"
                  },
                  "ko-KR": {
                    singular: "오리지널"
                  },
                  "zh-CN": {
                    singular: "原创"
                  }
                }
              }) : "audio" === _v0.quality ? (0, _v10.translate)({
                singular: "Audio",
                dictionary: {
                  "ja-JP": {
                    singular: "オーディオ"
                  },
                  "ko-KR": {
                    singular: "오디오"
                  },
                  "pt-BR": {
                    singular: "Áudio"
                  },
                  "zh-CN": {
                    singular: "音频"
                  }
                }
              }) : _v0.publicName
            }), (0, _v1.jsxs)(_v6.Flex, {
              gap: "xs",
              children: [(0, _v1.jsx)(_v8.Paragraph, {
                size: "sm",
                color: "text-secondary",
                children: _v0.sizeShort
              }), "audio" !== _v0.quality && (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v8.Paragraph, {
                  size: "sm",
                  color: "text-secondary",
                  children: "|"
                }), (0, _v1.jsxs)(_v8.Paragraph, {
                  size: "sm",
                  color: "text-secondary",
                  children: [_v0.width, " x ", _v0.height]
                })]
              })]
            })]
          }), (0, _v1.jsx)(_v7.IconButton, {
            "aria-label": (0, _v10.translate)({
              singular: "Download",
              dictionary: {
                es: {
                  singular: "Descargar"
                },
                "de-DE": {
                  singular: "Herunterladen"
                },
                "fr-FR": {
                  singular: "Télécharger "
                },
                "ja-JP": {
                  singular: "ダウンロード"
                },
                "ko-KR": {
                  singular: "다운로드"
                },
                "pt-BR": {
                  singular: "Baixar"
                },
                "zh-CN": {
                  singular: "下载"
                }
              }
            }),
            as: "a",
            href: `${_v0.link}`,
            variant: "secondary",
            icon: (0, _v1.jsx)(_v9.DownloadImport, {}),
            isDisabled: _v52.isLoading,
            isLoading: -1 !== _v38.indexOf(_v0.link),
            onClick: _v37(_v0, _v11)
          })]
        }, `${_v13}-${_v0.link}`)), _v54.show && (0, _v1.jsx)(_v3.Box, {
          mt: "-0.25rem",
          mb: "-1rem",
          children: (0, _v1.jsx)(_v15.SourceFileBanner, {
            ..._v54
          })
        })]
      })]
    });
  }], 0);
}