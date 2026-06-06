{
  "use strict";

  let _v1 = ["video/mp4;codecs=avc1", "video/webm;codecs=avc1,opus"],
    _v2 = () => _v1.find(MediaRecorder.isTypeSupported) ?? "video/webm",
    _v3 = _v0 => _v0.startsWith("video/mp4");
  _v0.s(["getMimeType", 0, _v2, "isMp4MimeType", 0, _v3], 0), _v0.s(["getLocalIntegrationSupported", 0, () => !!_v3(_v2())], 0);
}