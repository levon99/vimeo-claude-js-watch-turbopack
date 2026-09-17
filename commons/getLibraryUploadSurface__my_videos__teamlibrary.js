{
  "use strict";

  _v0.s(["getLibraryUploadSurface", 0, function ({
    contentSpaceEnabled: _v0,
    isPrivateToUser: _v1
  }) {
    return _v0 ? _v1 ? "my_videos" : "teamlibrary" : "library";
  }]);
}