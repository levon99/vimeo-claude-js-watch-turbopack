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
    _v12 = _v0.i(0);
  _v0.s(["ReviewLinksPanel", 0, ({
    videoName: _v0
  }) => {
    let _v1 = (0, _v12.useGlobalStore)(({
        clip: _v0
      }) => _v0.clipId),
      _v2 = (0, _v12.useGlobalStore)(({
        util: _v0
      }) => _v0.trackingContextConfig?.location) ?? "panel",
      {
        reviewLinks: _v3,
        isLoading: _v4
      } = (0, _v7.useGetReviewLinks)(Number(_v1), "clip"),
      {
        trackReviewLinksDisplayed: _v5,
        trackShareReviewButtonClicked: _v6
      } = (0, _v4.useDistributionTracking)();
    (0, _v5.usePicoEffect)(() => {
      if (!_v1 || _v4) return !1;
      _v5({
        clipId: String(_v1),
        reviewLinksCount: _v3.length
      });
    }, [_v4, _v3.length, _v1], {
      once: !0
    });
    let [_v7, _v8] = (0, _v2.useState)(),
      [_v9, _v10] = (0, _v2.useState)(),
      _v11 = (0, _v2.useRef)(void 0),
      _v12 = (0, _v2.useCallback)(_v0 => {
        _v11.current = _v0, _v10(_v0);
      }, []),
      {
        isUpdatingDefault: _v13,
        showAutoReviewLinkModal: _v14,
        handleAutoReviewLinkView: _v15,
        enableAutoReviewLink: _v16
      } = (0, _v8.useIsFirstReviewLink)(),
      {
        isOpen: _v17,
        onOpen: _v18,
        onClose: _v19
      } = (0, _v3.useDisclosure)(),
      {
        isOpen: _v20,
        onOpen: _v21,
        onClose: _v22
      } = (0, _v3.useDisclosure)(),
      _v23 = async () => {
        await _v16(), _v22();
      },
      _v24 = () => {
        _v8(void 0), _v10(void 0), _v19();
      },
      _v25 = (0, _v2.useCallback)(() => {
        let _v0 = _v11.current;
        _v11.current = void 0, "edit" !== _v0 && _v1 && _v6({
          clipId: String(_v1),
          shareReviewType: "create",
          shareSurface: _v2
        }), _v18();
      }, [_v1, _v2, _v6, _v18]);
    return (0, _v1.jsxs)(_v11.PanelErrorBoundary, {
      children: [(0, _v1.jsx)(_v6.ReviewLinks, {
        resourceId: Number(_v1),
        resourceType: "clip",
        setCreateReviewLinkScreen: _v25,
        setReviewLinkData: _v8,
        setReviewLinkModalMode: _v12,
        hideFooter: !0
      }), (0, _v1.jsx)(_v9.CreateReviewLinkModal, {
        resourceId: Number(_v1),
        resourceType: "clip",
        resourceName: _v0,
        onCancel: _v24,
        onSubmit: () => {
          _v14 && (_v15(), _v21()), _v24();
        },
        onClose: _v24,
        isOpen: _v17,
        reviewLinkData: _v7,
        reviewLinkModalMode: _v9
      }), (0, _v1.jsx)(_v10.CreateAutoReviewLinksModal, {
        onConfirm: _v23,
        onClose: _v22,
        isLoading: _v13,
        isOpen: _v20
      })]
    });
  }]);
}