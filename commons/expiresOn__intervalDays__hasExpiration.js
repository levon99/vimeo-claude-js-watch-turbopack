{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ["url", "expiresOn", "intervalDays", "hasExpiration", "revokedAt"],
    _v8 = _v0 => `${_v2.safeWindow?.location.origin ?? ""}${_v0}`,
    _v9 = (_v0, _v1) => {
      let _v2 = _v1.indexOf("?");
      return -1 === _v2 ? _v0 : `${_v0}${_v1.slice(_v2)}`;
    },
    _v10 = async _v0 => {
      try {
        if (_v2.safeNavigator?.clipboard?.writeText) return await _v2.safeNavigator.clipboard.writeText(_v0), !0;
      } catch {}
      return (0, _v5.default)(_v0);
    },
    _v11 = async (_v0, _v1) => (await _v10(_v0)) ? {
      success: !0,
      source: "share_link"
    } : {
      success: await _v10(_v1),
      source: "canonical_fallback"
    };
  _v0.s(["FOLDER_SHARE_LINK_FIELDS", 0, _v7, "useCopyFolderShareLink", 0, () => {
    let _v0 = (0, _v4.useOrionSetting)("sharing_folders"),
      [_v1, {
        data: _v2,
        error: _v3,
        loading: _v4,
        called: _v5
      }] = (0, _v3.usePostFolderFolderShareLink)(),
      _v6 = (0, _v1.useRef)(null),
      _v7 = (0, _v1.useRef)(null),
      [_v8, _v9] = (0, _v1.useState)(null),
      {
        warnIfProtectedVideos: _v10
      } = (0, _v6.useFolderProtectedVideosWarning)(),
      _v11 = (0, _v1.useMemo)(() => _v2?.url != null ? _v8(_v2.url) : null, [_v2]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        _v6.current = _v0, _v1({
          where: {
            projectId: _v0.folderId
          },
          select: _v7
        });
      }, [_v1]),
      _v13 = (0, _v1.useCallback)(() => {
        let _v0 = _v7.current;
        null !== _v0 && (_v7.current = null, _v12(_v0));
      }, [_v12]);
    (0, _v1.useEffect)(() => {
      let _v0 = _v6.current;
      if (null === _v0 || !_v5 || _v4) return;
      _v6.current = null;
      let _v1 = null == _v3 && null != _v2 && null != _v2.revokedAt,
        _v2 = null != _v3 || _v2?.url == null || _v1 ? null : _v9(_v8(_v2.url), _v0.canonicalUrl);
      null !== _v2 && _v9(_v0.folderId), (_v2 ? _v11(_v2, _v0.canonicalUrl) : _v10(_v0.canonicalUrl).then(_v0 => ({
        success: _v0,
        source: "canonical_fallback"
      }))).then(({
        success: _v0,
        source: _v1
      }) => _v0.onComplete?.(_v0, _v1)), _v13();
    }, [_v5, _v4, _v3, _v2, _v13]);
    let _v14 = (0, _v1.useCallback)((_v0, _v1, _v2) => {
      if (!_v0) return void _v10(_v1).then(_v0 => _v2?.(_v0, "canonical_fallback"));
      if (_v10(_v1), null != _v11 && _v8 === _v0) return void _v11(_v9(_v11, _v1), _v1).then(({
        success: _v0,
        source: _v1
      }) => _v2?.(_v0, _v1));
      let _v3 = {
        folderId: _v0,
        canonicalUrl: _v1,
        onComplete: _v2
      };
      null === _v6.current ? _v12(_v3) : _v7.current = _v3;
    }, [_v0, _v11, _v8, _v12, _v10]);
    return {
      isEnabled: _v0,
      shareUrl: _v11,
      linkFolderId: _v8,
      copyFolderShareLink: _v14,
      copyCanonicalUrl: (0, _v1.useCallback)((_v0, _v1) => {
        _v10(_v0), _v10(_v0).then(_v0 => _v1?.(_v0, "canonical_fallback"));
      }, [_v10])
    };
  }, "withOrigin", 0, _v8]);
}