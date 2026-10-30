{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    video: ["3g2", "3gp", "asf", "asx", "avi", "flv", "mov", "mp4", "mpg", "mod", "mts", "m2ts", "wmv", "m4v", "webm", "mpeg", "mts", "m2ts", "m2t", "mkv"],
    image: ["png", "jpg", "jpeg", "jpe", "gif", "tif", "tiff", "bmp", "webp", "svg"],
    audio: ["mp3", "m4a", "aac", "wma", "ogg", "wav"]
  };
  _v0.s(["ALLOWED_AUDIO", 0, [".mp3", ".m4a", ".aac", ".wma", ".ogg", ".wav"], "ALLOWED_HOTSPOT_MEDIA", 0, [".jpg", ".jpeg", ".bmp", ".gif", ".png", ".tif", ".svg"], "ALLOWED_INTRO_OUTRO_MEDIA", 0, [".mp4", ".mov", ".wmv", ".avi", ".flv"], "ALLOWED_MEDIA", 0, [".jpg", ".jpeg", ".bmp", ".gif", ".png", ".mov", ".webm", ".mpg", ".mpeg", ".mp4", ".avi", ".tif", ".mts"], "ALLOWED_THUMBNAIL_IMAGE_FORMATS", 0, [".jpg", ".jpeg", ".png", ".webp"], "FILE_EXTENSIONS", 0, _v3], 0);
  let _v4 = {
      BROWSER: "browser",
      MEDIALIB: "user",
      STICKERLIBITEM: "stickerlibitem",
      GPHOTOS: "gphotos",
      VIMEO: "vimeo",
      SHOPIFY: "shopify",
      BRAND: "brand",
      GETTY: "getty",
      GETTY_IMAGES: "getty_images",
      GETTY_VIDEOS: "getty_videos"
    },
    _v5 = {
      VIDEO: "video",
      IMAGE: "image",
      AUDIO: "audio"
    };
  _v0.s(["UploadMediaOrigin", 0, _v4, "UploadMediaStatus", 0, {
    QUEUED: "queued",
    PROGRESS: "progress",
    SUCCESS: "success",
    ERROR: "error",
    FETCHING_SOURCE: "fetching_source",
    ABORTED: "aborted"
  }, "UploadQueueFileType", 0, _v5], 0);
  let _v6 = _v0 => {
      let _v1 = _v0.substring(_v0.lastIndexOf(".") + 1).toLowerCase();
      return -1 != _v3.video.indexOf(_v1) ? _v5.VIDEO : -1 != _v3.image.indexOf(_v1) ? _v5.IMAGE : -1 != _v3.audio.indexOf(_v1) ? _v5.AUDIO : null;
    },
    _v7 = async (_v0, _v1, _v2) => {
      let _v3 = new FormData();
      Object.keys(_v2).forEach(_v0 => {
        _v3.set(_v0, _v2[_v0]);
      }), _v3.set("file", _v0);
      let _v4 = await fetch(_v1, {
          method: "post",
          body: _v3
        }),
        _v5 = _v4?.headers.get("etag")?.replaceAll('"', "");
      if (!_v5) throw Error(_v2.SOMETHING_WENT_WRONG);
      return _v5;
    };
  _v0.s(["getItemType", 0, (_v0, _v1) => _v0 === _v4.BROWSER ? _v6(_v1.name) : _v1.type, "getUploadTypeBySupportedExtension", 0, _v6, "isProvidedMedia", 0, _v0 => _v0.origin === _v4.GETTY || _v0.origin === _v4.VIMEO || _v0.origin === _v4.SHOPIFY, "updateStoryboardSource", 0, (_v0, _v1, _v2) => {
    let _v3 = _v0.layers.map(_v0 => ({
        ..._v0,
        composition: _v0.composition.map(_v0 => ((0, _v1.isMediaElement)(_v0) || (0, _v1.isSoundElement)(_v0)) && _v0.sourceHash === _v1 ? {
          ..._v0,
          sourceHash: _v2.hash
        } : _v0)
      })),
      _v4 = _v0.sources.findIndex(_v0 => _v0.hash === _v1);
    if (-1 === _v4) throw Error(_v2.SOURCE_NOT_FOUND);
    return [_v3, [..._v0.sources.slice(0, _v4), {
      ..._v0.sources[_v4],
      ..._v2
    }, ..._v0.sources.slice(_v4 + 1)]];
  }, "uploadFileToS3", 0, _v7], 0);
}