{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["FolderItemDragWrapper", 0, _v0 => {
    let {
        type: _v1,
        uri: _v2,
        parentFolderUri: _v3,
        children: _v4,
        thumbnail: _v5,
        canDrag: _v6,
        isSelected: _v7 = !1,
        selectedItemURIs: _v8 = new Set(),
        onDrop: _v9,
        isPrivateToUser: _v10 = !1,
        setIsUploadDropzoneEnabled: _v11
      } = _v0,
      {
        isDragging: _v12,
        dragRef: _v13,
        preview: _v14,
        getEmptyImage: _v15
      } = (0, _v3.useDragFolderItem)(_v1, _v2, _v3, _v5, _v7, _v8, _v9, _v10, _v11);
    return (0, _v2.useEffect)(() => {
      _v14(_v15());
    }, []), (0, _v2.useEffect)(() => {
      _v12 && _v11?.(!1);
    }, [_v12]), _v6 ? (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)("div", {
        ref: _v0 => {
          _v13(_v0);
        },
        children: (0, _v2.cloneElement)(_v4, {
          isDragging: _v12
        })
      }, _v2)
    }) : (0, _v1.jsx)("div", {
      draggable: "false",
      onDragStart: _v0 => _v0.preventDefault(),
      children: _v4
    });
  }]);
}