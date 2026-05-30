{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["UploadDropzone", 0, function ({
    children: _v0,
    className: _v1,
    folderId: _v2,
    targetUserId: _v3,
    onDrop: _v4,
    onDragEnd: _v5,
    onDragLeave: _v6,
    onDragOver: _v7,
    disabled: _v8 = !1,
    preserveWrapperWhenDisabled: _v9 = !1,
    style: _v10,
    ..._v11
  }) {
    let {
      upload: _v12
    } = (0, _v3.useUploader)();
    return _v8 && !_v9 ? (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    }) : (0, _v1.jsx)(_v2.Dropzone, {
      className: _v1,
      onDragOver: _v8 ? void 0 : _v7,
      onDragLeave: _v8 ? void 0 : _v6,
      onChange: _v0 => {
        if (!_v8) {
          if (_v4) _v4(_v0);else {
            let _v0 = _v0.target.files;
            _v0 && _v12(_v0, {
              folderId: _v2,
              targetUserId: _v3
            });
          }
          _v5 && _v5(_v0);
        }
      },
      style: _v10,
      ..._v11,
      children: _v0
    });
  }]);
}