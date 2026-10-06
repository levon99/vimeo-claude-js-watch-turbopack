{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getFileSizeTooltip", 0, _v0 => {
    if (!_v0 || "UPLOAD" === _v0 || "QUOTA_EXEMPT_USER" === _v0) return null;
    switch (_v0) {
      case "QUOTA_EXEMPT_CLIP":
        return _v1.VideoFileSizeTooltips.QuotaExemptClip;
      case "VIMEO_RECORD":
        return _v1.VideoFileSizeTooltips.VimeoRecord;
      case "VIMEO_CREATE":
        return _v1.VideoFileSizeTooltips.VimeoCreate;
      case "STOCK":
        return _v1.VideoFileSizeTooltips.StockVideo;
      case "PROCESSING":
        return _v1.VideoFileSizeTooltips.Processing;
      default:
        return null;
    }
  }]);
}