{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => Promise.reject("not implemented yet"),
    _v8 = {
      REVIEW_LINKS_PANEL: _v4.ShareModalState.Review,
      INVITE_PANEL: _v4.ShareModalState.Default,
      CREATE_REVIEW_LINK_MODAL: _v4.ShareModalState.CreateReviewLink
    },
    _v9 = {
      folderUri: "",
      location: "",
      isOpen: !1,
      defaultPanel: void 0,
      editReviewLinkUri: void 0,
      onCreateReviewLinkSuccess: _v7
    },
    _v10 = (0, _v2.default)(async () => {
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
    _v11 = _v3.default.createContext({
      state: _v9,
      openShareFolderModal: _v7
    });
  _v0.s(["ShareFolderModalContext", 0, _v11, "default", 0, function ({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v3.useState)(_v9),
      _v3 = (_v0, _v1, _v2, _v3, _v4) => {
        _v2({
          folderUri: _v0,
          location: _v1,
          isOpen: !0,
          defaultPanel: _v2,
          editReviewLinkUri: _v3,
          onCreateReviewLinkSuccess: _v4
        });
      },
      _v4 = () => {
        _v2(_v9);
      },
      _v5 = _v3.default.useMemo(() => ({
        state: _v1,
        openShareFolderModal: _v3
      }), [_v1]),
      _v6 = /projects/.test(_v1.folderUri),
      _v7 = `${_v1.folderUri.split("/").pop()}`,
      _v8 = (0, _v3.useCallback)(_v0 => _v5.embeddableStore.set(_v7, _v0), [_v7]);
    return (0, _v1.jsxs)(_v11.Provider, {
      value: _v5,
      children: [_v0, _v6 && (0, _v1.jsx)(_v10, {
        page: "library",
        uri: _v1.folderUri,
        entryPoint: encodeURIComponent(_v1.location),
        isResourceShareModalOpen: _v1.isOpen,
        closeResourceShareModal: _v4,
        modalState: _v8[_v1.defaultPanel] ?? void 0,
        editReviewLinkUri: _v1.editReviewLinkUri
      }), !_v6 && (0, _v1.jsx)(_v6.VideoShareViewModule, {
        clipId: _v7,
        isOpen: _v1.isOpen,
        onClose: _v4,
        defaultPanel: _v1.defaultPanel,
        editReviewLinkUri: _v1.editReviewLinkUri,
        onCreateReviewLinkSuccess: _v1.onCreateReviewLinkSuccess,
        onEmbedChange: _v8,
        transferInlineLinkSurface: "video_setting",
        reviewLinkSurface: "video_setting"
      })]
    });
  }]);
}