{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["FolderDropWrapper", 0, _v0 => {
    let {
        dropTarget: _v1,
        dropTargetType: _v2,
        allowedDropEffect: _v3,
        children: _v4,
        dropFileForUploadConfig: _v5
      } = _v0,
      {
        draggableItemIsHovering: _v6,
        dropRef: _v7
      } = (0, _v3.useDropFolder)({
        dropTargetType: _v2,
        dropTarget: _v1,
        allowedDropEffect: _v3,
        dropFileForUploadConfig: _v5
      });
    return (0, _v1.jsx)("div", {
      ref: _v0 => {
        _v7(_v0);
      },
      children: (0, _v2.cloneElement)(_v4, {
        draggableItemIsHovering: _v6
      })
    }, _v1.uri);
  }]);
}