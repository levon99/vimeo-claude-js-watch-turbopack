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
    _v16 = _v0.i(0);
  let _v17 = new Date("2025-02-02");
  _v0.s(["useVideoEditTrim", 0, ({
    videoId: _v0
  }) => {
    let [_v1, {
        isLoading: _v2
      }] = (0, _v11.useLazyFetchClipWithFieldsQuery)(),
      _v3 = (0, _v2.useCallback)(() => {
        _v1({
          clipId: _v0,
          fields: ["editSession", "isPlayable", "metadata.editSessionVsid", "metadata.connections.versions.latestIncompleteVersion"]
        });
      }, [_v0, _v1]),
      _v4 = (0, _v16.useAppSelector)(_v15.clipIsPlayableSelector),
      _v5 = (0, _v16.useAppSelector)(_v15.isUploadingSelector),
      _v6 = (0, _v16.useAppSelector)(_v13.clipEditSessionSelector),
      _v7 = (0, _v16.useAppSelector)(_v14.clipMetadataSelector),
      _v8 = (0, _v16.useAppSelector)(_v12.clipDurationSelector),
      _v9 = (0, _v16.useAppSelector)(_v14.clipMetadataInteractionsSelector),
      _v10 = (0, _v16.useAppSelector)(_v13.isRenderFailedSelector),
      _v11 = _v7?.editSessionVsid,
      _v12 = _v9?.createEditor?.uri,
      _v13 = _v9?.trim?.uri,
      _v14 = _v7?.connections?.versions?.createStoryboardId,
      _v15 = (0, _v1.useRouter)(),
      {
        user: _v16
      } = (0, _v2.useContext)(_v7.ViewerContext) || {
        locale: "en"
      },
      {
        data: _v17,
        error: _v18
      } = (0, _v4.useGetMePreferences)(() => !_v0 || _v5 ? null : {
        select: _v9.SVV_ME_PREFERENCES_FIELDS
      }),
      {
        capabilities: {
          hasTveSupported: _v19
        }
      } = (0, _v3.useCapability)(["hasTveSupported"]),
      {
        data: {
          data: _v20 = null
        } = {},
        error: _v21,
        isLoading: _v22
      } = (0, _v5.useGetVideoVersions)(() => !_v0 || _v5 ? null : {
        where: {
          videoId: _v0
        },
        select: ["active", "createStoryboardId"]
      }),
      {
        hasFiles: _v23,
        isLoading: _v24
      } = (0, _v8.useHasDownloadFiles)(_v0),
      _v25 = _v6?.uploadAttemptIdVersionUri ? (0, _v10.versionIdFromUri)(_v6?.uploadAttemptIdVersionUri) : "",
      _v26 = _v6?.versionUri ? (0, _v10.versionIdFromUri)(_v6?.versionUri) : "",
      _v27 = !!_v6?.vsid,
      _v28 = !_v6 || void 0 === _v6.status || "done" === _v6.status,
      _v29 = (0, _v2.useMemo)(() => _v16?.createdTime && new Date(_v16.createdTime) < _v17, [_v16?.createdTime]),
      _v30 = !!_v19 && !!_v29,
      _v31 = (_v8 || 0) > 0,
      _v32 = _v20?.[0],
      _v33 = _v32?.active === !1,
      _v34 = !_v7?.connections?.versions?.latestIncompleteVersion,
      _v35 = !_v20 && !_v21,
      _v36 = void 0 === _v12 && _v35 && !_v17 && !_v18,
      _v37 = !_v31 && !!_v12,
      _v38 = _v23 && !!_v13 && (_v33 || _v31),
      _v39 = _v22 || _v24 || !!_v21,
      _v40 = !_v2 && (!_v6 && !_v11 || !!_v11 && _v6?.status === "done" && _v34),
      _v41 = !!_v10 || !_v5 && _v28 && _v37 && (_v40 || _v4);
    (0, _v2.useEffect)(() => {
      !_v30 || window.location.pathname.includes("/trim") && (_v31 || _v15.push(`/create/trimmer?vid=${_v0}`));
    }, [_v30, _v31, _v15, _v0]);
    let _v42 = (0, _v2.useCallback)((_v0 = !1) => {
      let _v1 = _v14 ? `/create/edit?hash=${_v14}&version_id=${_v26}&vid=${_v0}&upload_attempt_id=${_v25}&useRevision=true${_v0 ? "&transcript=true" : ""}` : `/create/edit?vid=${_v0}&useRevision=true`;
      _v15.push(_v1);
    }, [_v14, _v26, _v0, _v25, _v15]);
    return (0, _v6.usePoll)(_v3, !_v40, {
      interval: 0
    }), (0, _v2.useEffect)(() => {
      _v3();
    }, [_v3]), (0, _v2.useMemo)(() => ({
      canEdit: _v41,
      isClipCreate: _v27,
      isLoading: _v36,
      onEdit: _v42,
      isLegacyTrimmer: _v38,
      isLegacyTrimmerLoading: _v39,
      isVideoTooLong: _v31,
      isVideoHasBeenRestored: _v33,
      enableTVE: _v30
    }), [_v41, _v27, _v36, _v42, _v38, _v39, _v31, _v33, _v30]);
  }]);
}