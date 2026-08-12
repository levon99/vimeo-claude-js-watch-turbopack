{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.createContext)({
    previewType: _v5.PREVIEW_TYPE.FORM,
    previewMode: _v5.PREVIEW_MODE.WEB,
    previewDetails: {},
    autoFocusField: !0,
    isMiniaturePreview: !1,
    setPreviewType: () => void 0,
    setPreviewMode: () => void 0,
    setPreviewDetails: () => void 0,
    setIsMiniaturePreview: () => void 0
  });
  _v0.s(["PreviewContext", 0, _v7, "PreviewContextProvider", 0, ({
    children: _v0,
    ..._v1
  }) => {
    let {
        trackLiveStreamRegistrationPreviewChanged: _v2
      } = (0, _v4.useLiveStreamBroadcasterTracking)(),
      [_v3, _v4] = (0, _v2.useState)(_v5.PREVIEW_TYPE.FORM),
      [_v5, _v6] = (0, _v2.useState)(_v5.PREVIEW_MODE.WEB),
      [_v7, _v8] = (0, _v2.useState)({}),
      [_v9, _v10] = (0, _v2.useState)(_v1.isMiniaturePreview || !1),
      _v11 = _v1.previewType,
      _v12 = _v1.onPreviewTypeChanged,
      _v13 = _v1.pageType !== _v5.PAGE_TYPES.ADMIN && (_v1.autoFocusField ?? !0),
      _v14 = (0, _v2.useCallback)(_v0 => {
        if (_v4(_v0), _v12?.(_v0), _v6.useGlobalStore.getState().entityType === _v3.ENTITY_TYPE.EVENT) {
          let _v0 = {
            [_v5.PREVIEW_TYPE.FORM]: "form",
            [_v5.PREVIEW_TYPE.FORM_FULL]: "form",
            [_v5.PREVIEW_TYPE.CONFIRMATION]: "confirmation",
            [_v5.PREVIEW_TYPE.LOGIN_SCREEN]: "sign_in_screen"
          }[_v0];
          _v0 && _v2({
            liveStreamPreviewType: _v0
          });
        }
      }, [_v4, _v12, _v2]);
    return (0, _v2.useEffect)(() => {
      _v11 && _v4(_v11);
    }, [_v11, _v4]), (0, _v1.jsx)(_v7.Provider, {
      value: {
        previewType: _v3,
        previewMode: _v5,
        previewDetails: _v7,
        isMiniaturePreview: _v9,
        autoFocusField: _v13,
        setPreviewMode: _v6,
        setPreviewType: _v14,
        setPreviewDetails: _v8,
        setIsMiniaturePreview: _v10
      },
      children: _v0
    });
  }, "usePreviewContext", 0, () => (0, _v2.useContext)(_v7)]);
}