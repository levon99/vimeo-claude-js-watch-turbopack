{
  "use strict";

  let _v1 = {
    MEDIA: "media",
    SOUND: "sound"
  };
  _v0.s(["UploadItemType", 0, _v1], 0);
  var _v2 = _v0.i(0);
  _v0.s(["isImageUploadItem", 0, _v0 => _v0.type === _v2.MediaType.IMAGE, "isMediaUploadItem", 0, _v0 => _v0.type === _v1.MEDIA, "isSoundUploadItem", 0, _v0 => _v0.type === _v1.SOUND, "isVideoUploadItem", 0, _v0 => _v0.type === _v2.MediaType.VIDEO], 0);
}