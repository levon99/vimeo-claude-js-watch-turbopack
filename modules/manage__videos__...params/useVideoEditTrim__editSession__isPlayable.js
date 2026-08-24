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
  let _v19 = new Date("2025-02-02");
  _v0.s(["useVideoEditTrim", 0, ({
    videoId: _v0,
    videoSourceType: _v1,
    shouldTrackModalView: _v2 = !0
  }) => {
    let [_v3, {
        isLoading: _v4
      }] = (0, _v12.useLazyFetchClipWithFieldsQuery)(),
      _v5 = (0, _v2.useCallback)(() => {
        _v3({
          clipId: _v0,
          fields: ["editSession", "isPlayable", "metadata.editSessionVsid", "metadata.connections.versions.latestIncompleteVersion"]
        });
      }, [_v0, _v3]),
      _v6 = (0, _v17.useAppSelector)(_v16.clipIsPlayableSelector),
      _v7 = (0, _v17.useAppSelector)(_v16.isUploadingSelector),
      _v8 = (0, _v17.useAppSelector)(_v14.clipEditSessionSelector),
      _v9 = (0, _v17.useAppSelector)(_v15.clipMetadataSelector),
      _v10 = (0, _v17.useAppSelector)(_v13.clipDurationSelector),
      _v11 = (0, _v17.useAppSelector)(_v15.clipMetadataInteractionsSelector),
      _v12 = (0, _v17.useAppSelector)(_v14.isRenderFailedSelector),
      _v13 = _v9?.editSessionVsid,
      _v14 = _v11?.createEditor?.uri,
      _v15 = _v11?.transcriptVideoEditor?.uri,
      _v16 = _v11?.trim?.uri,
      _v17 = _v9?.connections?.versions?.createStoryboardId,
      _v18 = (0, _v1.useRouter)(),
      {
        genericBi: _v19
      } = (0, _v8.default)(),
      {
        user: _v20
      } = (0, _v2.useContext)(_v7.ViewerContext) || {
        locale: "en"
      },
      {
        data: _v21,
        error: _v22
      } = (0, _v4.useGetMePreferences)(() => !_v0 || _v7 ? null : {
        select: _v10.SVV_ME_PREFERENCES_FIELDS
      }),
      {
        capabilities: {
          hasTveSupported: _v23
        }
      } = (0, _v3.useCapability)(["hasTveSupported"]),
      {
        data: {
          data: _v24 = null
        } = {},
        error: _v25,
        isLoading: _v26
      } = (0, _v5.useGetVideoVersions)(() => !_v0 || _v7 ? null : {
        where: {
          videoId: _v0
        },
        select: ["active", "createStoryboardId"]
      }),
      {
        hasFiles: _v27,
        isLoading: _v28
      } = (0, _v9.useHasDownloadFiles)(_v0),
      _v29 = _v8?.uploadAttemptIdVersionUri ? (0, _v11.versionIdFromUri)(_v8?.uploadAttemptIdVersionUri) : "",
      _v30 = _v8?.versionUri ? (0, _v11.versionIdFromUri)(_v8?.versionUri) : "",
      _v31 = _v8?.resultVideoHash ?? "",
      _v32 = !!_v8?.vsid,
      _v33 = _v8?.isEditedByTve ?? !1,
      _v34 = !_v8 || void 0 === _v8.status || "done" === _v8.status,
      _v35 = (0, _v2.useMemo)(() => _v20?.createdTime && new Date(_v20.createdTime) < _v19, [_v20?.createdTime]),
      _v36 = !!_v23 && !!_v35,
      _v37 = (_v10 || 0) > 0,
      _v38 = _v24?.[0],
      _v39 = _v38?.active === !1,
      _v40 = !_v9?.connections?.versions?.latestIncompleteVersion,
      _v41 = !_v24 && !_v25,
      _v42 = void 0 === _v14 && _v41 && !_v21 && !_v22,
      _v43 = _v27 && !!_v16,
      _v44 = !_v37 && !!_v14,
      _v45 = _v36 ? !_v39 && !_v37 && !!_v15 : _v43,
      _v46 = _v43 && (_v39 || _v37),
      _v47 = _v26 || _v28 || !!_v25,
      _v48 = !_v4 && (!_v8 && !_v13 || !!_v13 && _v8?.status === "done" && _v40),
      _v49 = !!_v12 || !_v7 && _v34 && _v44 && (_v48 || _v6),
      _v50 = !_v7 && (_v45 && !_v32 || _v33 && _v32);
    (0, _v2.useEffect)(() => {
      !_v36 || window.location.pathname.includes("/trim") && (_v37 || _v18.push(`/create/trimmer?vid=${_v0}`));
    }, [_v36, _v37, _v18, _v0]);
    let _v51 = (0, _v2.useCallback)(({
        location: _v0,
        flow: _v1
      }) => _v19("click_to_edit_video", 7, {
        video_source_type: _v1 ?? null,
        location: _v0,
        flow: _v1,
        template_name: null,
        vsid: _v8?.resultVideoHash || "null",
        clip_id: _v0
      }), [_v19, _v8?.resultVideoHash, _v0, _v1]),
      _v52 = (0, _v2.useCallback)(() => _v19("vimeo.view_edit_modal", 3, {
        location: "edit_modal",
        flow: "svv",
        edit_status: _v49 ? "enable" : "disable",
        trim_status: _v50 ? "enable" : "disable",
        vsid: _v31,
        clip_id: _v0 || null,
        test_segment: "null"
      }), [_v49, _v50, _v31, _v19, _v0]);
    (0, _v2.useEffect)(() => {
      _v2 && _v52();
    }, []);
    let _v53 = (0, _v2.useCallback)((_v0 = !1) => {
      _v51({
        location: _v18.AnalyticsFlow.SVV_PAGE,
        flow: _v18.AnalyticsFlow.SVV_PAGE
      });
      let _v1 = _v17 ? `/create/edit?hash=${_v17}&version_id=${_v30}&vid=${_v0}&upload_attempt_id=${_v29}&useRevision=true${_v0 ? "&transcript=true" : ""}` : `/create/edit?vid=${_v0}&useRevision=true`;
      _v18.push(_v1);
    }, [_v51, _v17, _v30, _v0, _v29, _v18]);
    return (0, _v6.usePoll)(_v5, !_v48, {
      interval: 0
    }), (0, _v2.useEffect)(() => {
      _v5();
    }, [_v5]), (0, _v2.useMemo)(() => ({
      canEdit: _v49,
      isClipCreate: _v32,
      isLoading: _v42,
      onEdit: _v53,
      isLegacyTrimmer: _v46,
      isLegacyTrimmerLoading: _v47,
      isVideoTooLong: _v37,
      isVideoHasBeenRestored: _v39,
      enableTVE: _v36
    }), [_v49, _v32, _v42, _v53, _v46, _v47, _v37, _v39, _v36]);
  }]);
}