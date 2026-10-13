{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useGetFileUploadThumbnail", 0, _v0 => {
    let {
        uploads: _v1
      } = (0, _v3.useUploader)(),
      _v2 = (0, _v1.useMemo)(() => {
        let _v0 = null != _v0 ? _v1.find(_v0 => _v0.publicId === _v0) : void 0;
        return _v0?.file instanceof File ? _v0.file : void 0;
      }, [_v1, _v0]);
    return (0, _v2.useFilePreviewUrl)(_v2);
  }]);
}