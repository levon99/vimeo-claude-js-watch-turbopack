{
  "use strict";

  _v0.s(["getPageName", 0, _v0 => {
    let _v1 = /manage\/videos\/(\d+)/i.test(_v0) ? "single_video_view" : /\/manage\/folders/i.test(_v0) ? "folders" : /\/manage\/showcases/i.test(_v0) ? "showcase_cms" : /\/upload/i.test(_v0) ? "upload_page" : /\/manage\/videos/i.test(_v0) ? "video_manager" : /\/manage\/events/i.test(_v0) ? "event_manager" : /\/review\/(\d+)/i.test(_v0) ? "review_page" : /\/(\d+)/i.test(_v0) ? "clip_page" : /\/upgrade/i.test(_v0) ? "upgrade_page" : /\/watch$/i.test(_v0) ? "watch" : null;
    return _v1 || ("/" === _v0 || "" === _v0 ? "ss_lihp" : "/home" === _v0 ? "ss_lihp_mw" : _v0);
  }]);
}