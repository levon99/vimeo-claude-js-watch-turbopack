{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ["uri", "link", "baseLink"];
  async function _v8({
    baseUrl: _v0,
    headers: _v1,
    userId: _v2,
    liveEventId: _v3,
    upload: _v4,
    activate: _v5 = !0
  }) {
    let _v6 = await (0, _v3.postUserLiveEventPictures)({
      baseUrl: _v0,
      headers: _v1,
      where: {
        userId: _v2,
        liveEventId: _v3
      },
      select: _v7
    });
    if (!_v6?.link) throw new _v6.LiveError("Thumbnail upload link missing in create response.", {
      code: _v5.ELiveErrorCode.API_ERROR
    });
    let _v7 = await fetch(_v6.link, {
      method: "PUT",
      body: _v4.body,
      headers: {
        "Content-Type": _v4.contentType
      }
    });
    if (!_v7.ok) throw new _v1.NetworkError("Thumbnail upload failed.", _v7.status, _v7);
    let _v8 = (0, _v4.parseThumbnailIdFromUrl)(_v6.uri);
    if (_v8 <= 0) throw new _v6.LiveError("Could not resolve thumbnail id from created picture.", {
      code: _v5.ELiveErrorCode.API_ERROR
    });
    return _v5 && (await (0, _v2.patchUserLiveEventPicture)({
      baseUrl: _v0,
      headers: _v1,
      where: {
        userId: _v2,
        liveEventId: _v3,
        thumbnailId: _v8
      },
      select: ["uri", "active"],
      variables: {
        active: !0
      }
    })), {
      picture: _v6,
      thumbnailId: _v8
    };
  }
  _v0.s(["uploadEventPicture", 0, _v8]);
}