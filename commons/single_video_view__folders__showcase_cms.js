{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.getPageName = void 0, _v2.getPageName = function (_v0) {
    if (/manage\/videos\/(\d+)/i.test(_v0)) return "single_video_view";
    if (/\/manage\/folders/i.test(_v0)) return "folders";
    if (/\/manage\/showcases/i.test(_v0)) return "showcase_cms";
    if (/\/upload/i.test(_v0)) return "upload";
    if (/\/manage\/videos/i.test(_v0)) return "video_manager";
    if (/\/manage\/events/i.test(_v0)) return "event_manager";
    if (/\/review\/(\d+)/i.test(_v0)) return "review_page";
    if (/\/user\/(\d+)\/folder\/(\d+)/i.test(_v0)) return "mvv";
    if (/\/(\d+)/i.test(_v0)) return "clip_page";
    if (/search\/library\/(\d+)/i.test(_v0)) return "new_library_search";
    var _v1 = _v0.split(".").pop();
    return /(com|dev)\/?(es|de|fr|jp|pt-br|ko)?\/?$/i.test(_v1) ? "lihp" : _v0;
  };
}