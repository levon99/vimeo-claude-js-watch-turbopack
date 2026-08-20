{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.status),
    _v3 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.isPlayable),
    _v4 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData?.transcode?.status),
    _v5 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => "available" !== _v0.clipData.status && !_v0.clipData.isPlayable),
    _v6 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.live?.status);
  _v0.s(["clipIsPlayableSelector", 0, _v3, "clipLiveStatusSelector", 0, _v6, "clipStatusSelector", 0, _v2, "clipTranscodeStatusSelector", 0, _v4, "isUploadingSelector", 0, _v5]);
}