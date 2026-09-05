{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["FolderEditableTitle", 0, function ({
    folderId: _v0,
    folderOwnerId: _v1,
    setCurrentTitle: _v2,
    setIsEditingContentTitle: _v3,
    ..._v4
  }) {
    let [_v5] = (0, _v3.usePatchUserProject)(),
      _v6 = (0, _v4.useNotification)(),
      _v7 = (0, _v5.useUpdateContentTitleCache)();
    return (0, _v1.jsx)(_v2.EditableTitle, {
      onChange: _v0 => {
        _v2(_v0);
      },
      onCancel: () => {
        _v3(!1);
      },
      onSubmit: _v0 => {
        _v0 !== _v4.value && _v5({
          where: {
            userId: _v1,
            projectId: _v0
          },
          select: ["name"],
          variables: {
            name: _v0
          }
        }).then(() => {
          _v7({
            entity: "folder",
            uri: `/users/${_v1}/projects/${_v0}`,
            title: _v0
          }), _v6({
            content: "Folder title updated"
          });
        }), _v3(!1);
      },
      fontSize: "header-xs",
      fontWeight: "bold",
      ..._v4
    });
  }]);
}