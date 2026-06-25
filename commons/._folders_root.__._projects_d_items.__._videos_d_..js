{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = [".*\\/folders\\/root.*", ".*\\/projects\\/\\d+\\/items.*", ".*\\/videos\\/\\d+.*", ".*\\/videos\\/watch_history.*", ".*\\/users\\/\\d+\\/items.*"],
    _v10 = _v0 => "object" == typeof _v0 && null !== _v0,
    _v11 = /^\/videos\/\d+(?::[a-zA-Z0-9]+)?$/,
    _v12 = (_v0, {
      uri: _v1,
      patch: _v2
    }) => {
      var _v3;
      if (Array.isArray(_v0)) {
        let _v0 = !1,
          _v1 = _v0.map(_v0 => {
            let _v1 = _v12(_v0, {
              uri: _v1,
              patch: _v2
            });
            return _v1 !== _v0 && (_v0 = !0), _v1;
          });
        return _v0 ? _v1 : _v0;
      }
      if (!_v10(_v0)) return _v0;
      let _v4 = _v0,
        _v5 = !1;
      if ("string" == typeof _v0.uri && ((_v3 = _v0.uri) === _v1 || _v11.test(_v3) && _v11.test(_v1) && (0, _v8.idFromUri)(_v3) === (0, _v8.idFromUri)(_v1))) {
        let _v0 = _v10(_v0.privacy) ? _v0.privacy : {},
          _v1 = {
            ..._v0,
            ...(void 0 !== _v2.privacy ? {
              view: _v2.privacy
            } : {}),
            ...(void 0 !== _v2.embed ? {
              embed: _v2.embed
            } : {})
          };
        (_v1.view !== _v0.view || _v1.embed !== _v0.embed) && (_v4 = {
          ..._v4,
          privacy: _v1
        }, _v5 = !0);
        let _v2 = _v2.password,
          _v3 = _v0.password,
          _v4 = null === _v2 && null != _v3,
          _v5 = "string" == typeof _v2 && _v2 !== _v3;
        (_v4 || _v5) && (_v4 = {
          ..._v4,
          password: _v2
        }, _v5 = !0), void 0 !== _v2.isColdStorage && _v0.isColdStorage !== _v2.isColdStorage && (_v4 = {
          ..._v4,
          isColdStorage: _v2.isColdStorage
        }, _v5 = !0);
      }
      for (let [_v0, _v1] of Object.entries(_v4)) {
        let _v0 = _v12(_v1, {
          uri: _v1,
          patch: _v2
        });
        _v0 !== _v1 && (_v5 || (_v4 = {
          ..._v4
        }, _v5 = !0), _v4[_v0] = _v0);
      }
      return _v5 ? _v4 : _v0;
    };
  function _v13() {
    let _v0 = (0, _v7.useMatchMutate)();
    return (0, _v3.useCallback)(({
      uri: _v0,
      ..._v1
    }) => {
      let _v2 = _v0 => ((_v0, {
        uri: _v1,
        patch: _v2
      }) => _v12(_v0, {
        uri: _v1,
        patch: _v2
      }))(_v0, {
        uri: _v0,
        patch: _v1
      });
      return Promise.all(_v9.map(_v0 => _v0(_v0, _v2, !1)));
    }, [_v0]);
  }
  _v0.s(["shouldClearColdStorageLock", 0, ({
    isColdStorage: _v0,
    privacy: _v1,
    embed: _v2
  }) => !0 === _v0 && "anybody" === _v1 && "private" === _v2, "useRevalidateVideoListCaches", 0, function () {
    let _v0 = (0, _v7.useMatchMutate)();
    return (0, _v3.useCallback)(() => Promise.all(_v9.map(_v0 => _v0(_v0, void 0, !0))), [_v0]);
  }, "useUpdateVideoPrivacyCache", 0, _v13], 0);
  let _v14 = () => Promise.reject(Error("not implemented yet")),
    _v15 = {
      REVIEW_LINKS_PANEL: _v4.ShareModalState.Review,
      INVITE_PANEL: _v4.ShareModalState.Default,
      CREATE_REVIEW_LINK_MODAL: _v4.ShareModalState.CreateReviewLink
    },
    _v16 = {
      folderUri: "",
      location: "",
      isOpen: !1,
      defaultPanel: void 0,
      editReviewLinkUri: void 0,
      onCreateReviewLinkSuccess: _v14
    },
    _v17 = (0, _v2.default)(async () => {
      let {
        FolderShareModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v18 = _v3.default.createContext({
      state: _v16,
      openShareFolderModal: _v14
    });
  _v0.s(["ShareFolderModalContext", 0, _v18, "default", 0, function ({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v3.useState)(_v16),
      _v3 = _v13(),
      _v4 = (_v0, _v1, _v2, _v3, _v4) => {
        _v2({
          folderUri: _v0,
          location: _v1,
          isOpen: !0,
          defaultPanel: _v2,
          editReviewLinkUri: _v3,
          onCreateReviewLinkSuccess: _v4
        });
      },
      _v5 = () => {
        _v2(_v16);
      },
      _v6 = _v3.default.useMemo(() => ({
        state: _v1,
        openShareFolderModal: _v4
      }), [_v1]),
      _v7 = /projects/.test(_v1.folderUri),
      _v8 = `${_v1.folderUri.split("/").pop()}`,
      _v9 = (0, _v3.useCallback)(_v0 => _v5.embeddableStore.set(_v8, _v0), [_v8]);
    return (0, _v1.jsxs)(_v18.Provider, {
      value: _v6,
      children: [_v0, _v7 && (0, _v1.jsx)(_v17, {
        page: "library",
        uri: _v1.folderUri,
        entryPoint: encodeURIComponent(_v1.location),
        isResourceShareModalOpen: _v1.isOpen,
        closeResourceShareModal: _v5,
        modalState: _v15[_v1.defaultPanel] ?? void 0,
        editReviewLinkUri: _v1.editReviewLinkUri
      }), !_v7 && (0, _v1.jsx)(_v6.VideoShareViewModule, {
        clipId: _v8,
        isOpen: _v1.isOpen,
        onClose: _v5,
        defaultPanel: _v1.defaultPanel,
        editReviewLinkUri: _v1.editReviewLinkUri,
        onCreateReviewLinkSuccess: _v1.onCreateReviewLinkSuccess,
        onEmbedChange: _v9,
        onPrivacyChange: ({
          view: _v0
        }) => {
          _v0 && _v3({
            uri: _v1.folderUri,
            privacy: _v0
          });
        },
        transferInlineLinkSurface: "video_setting",
        reviewLinkSurface: "video_setting"
      })]
    });
  }], 0);
}