{
  "use strict";

  let _v1 = _v0 => parseInt(_v0.split("/")[2], 10),
    _v2 = _v0 => parseInt(_v0.split("/")[4], 10);
  _v0.s(["getFolderAnalyticsPageUriFromApiUri", 0, _v0 => {
    let _v1 = _v2(_v0);
    return `/analytics?filter_content=/folders/${_v1}`;
  }, "getFolderIdFromFolderUri", 0, _v2, "getFolderPageUriFromApiUri", 0, _v0 => _v0.replace("users", "user").replace("projects", "folder").replace("folders", "folder"), "getIdsFromFolderUri", 0, _v0 => ({
    folderId: _v2(_v0),
    userId: _v1(_v0)
  }), "getUserIdFromFolderUri", 0, _v1]);
}