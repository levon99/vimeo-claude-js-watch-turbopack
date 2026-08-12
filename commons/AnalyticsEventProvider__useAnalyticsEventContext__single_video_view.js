{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v1.createContext)({});
  function _v6() {
    return (0, _v1.useContext)(_v5);
  }
  let _v7 = (0, _v1.forwardRef)(function ({
    children: _v0,
    eventData: _v1
  }, _v2) {
    let _v3 = _v6(),
      [_v4, _v5] = (0, _v1.useState)(() => ({
        ..._v3,
        ..._v1
      }));
    return (0, _v1.useEffect)(() => {
      _v5(_v0 => ({
        ..._v0,
        ..._v3,
        ..._v1
      }));
    }, [JSON.stringify(_v1), JSON.stringify(_v3)]), (0, _v1.useImperativeHandle)(_v2, () => ({
      addEventData(_v0) {
        _v5(_v0 => ({
          ..._v0,
          ..._v0
        }));
      }
    })), (0, _v4.jsx)(_v5.Provider, {
      value: _v4,
      children: _v0
    });
  });
  _v0.s(["AnalyticsEventProvider", 0, _v7, "useAnalyticsEventContext", 0, _v6], 0);
  let _v8 = _v0 => {
    if (/manage\/videos\/(\d+)/i.test(_v0)) return "single_video_view";
    if (/\/manage\/folders/i.test(_v0)) return "folders";
    if (/\/manage\/showcases/i.test(_v0)) return "showcase_cms";
    if (/\/upload/i.test(_v0)) return "upload";
    if (/\/manage\/videos/i.test(_v0)) return "video_manager";
    if (/\/manage\/events/i.test(_v0)) return "event_manager";
    if (/\/create\/templates/i.test(_v0)) return "templates";
    if (/\/review\/(\d+)/i.test(_v0)) return "review_page";
    if (/\/user\/(\d+)\/folder\/(\d+)/i.test(_v0)) return "mvv";
    if (/\/(\d+)/i.test(_v0)) return "clip_page";
    let _v1 = _v0.split(".").pop();
    return /(com|dev)\/?(es|de|fr|jp|pt-br|ko)?\/?$/i.test(_v1) ? "lihp" : _v0;
  };
  _v0.s(["getEntryPage", 0, _v8, "useAnalyticsEvent", 0, function () {
    let _v0 = _v6(),
      _v1 = (0, _v3.usePage)(),
      _v2 = {
        path: window.location.pathname,
        entry_page: _v8(window.document.referrer),
        page: _v1
      };
    return (0, _v1.useCallback)(({
      eventName: _v0,
      version: _v1,
      fields: _v2 = {},
      defaultEventFields: _v3 = {},
      globalAnalyticsToInclude: _v4 = ["path", "entry_page", "page", "product"]
    }) => {
      let _v5 = {};
      Object.keys(_v3).map(function (_v0) {
        _v0.hasOwnProperty(_v0) ? _v5[_v0] = _v0[_v0] : _v5[_v0] = _v3[_v0];
      });
      let _v6 = {};
      _v4.forEach(_v0 => {
        "product" === _v0 ? _v6[_v0] = _v0.product ?? "" : _v6[_v0] = _v2[_v0];
      }), _v2.BigPictureClient.sendEvent(new _v2.Event(_v0, _v1, {
        ..._v6,
        ..._v5,
        ..._v2
      }));
    }, [Object.values(_v2).join(), Object.values(_v0).join()]);
  }], 0);
}