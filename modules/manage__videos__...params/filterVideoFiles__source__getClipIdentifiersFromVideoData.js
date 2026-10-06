{
  "use strict";

  let _v1 = _v0 => _v0 => _v0.length > _v0 ? `${_v0.length}/${_v0}` : null;
  _v1(128), _v1(0);
  let _v2 = _v0 => _v0 ? parseInt(_v0.split("/")[2], 10) : 0,
    _v3 = /\b((?:https?:\/\/)([a-z0-9\-]+[.])(?:[a-z0-9\-]+[.])?([a-z]{2,4}(\/)?)((?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+)?(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])?)/i,
    _v4 = /\b((?:mailto:)([a-z0-9\-]+[@])(?:[a-z0-9\-]+[.])?([a-z]{2,4}(\/)?)((?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+)?(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])?)/i;
  _v0.s(["filterVideoFiles", 0, _v0 => _v0.filter(_v0 => ["hd", "sd", "source", "uhd"].includes(_v0.quality)).sort((_v0, _v1) => "source" === _v0.quality ? 1 : "source" === _v1.quality ? -1 : (_v1.height ?? 0) - (_v0.height ?? 0)), "getClipIdentifiersFromVideoData", 0, _v0 => {
    if (_v0?.manageLink) {
      let _v0 = _v0.manageLink.split("/"),
        _v1 = Number(_v0[3]);
      if (!isNaN(_v1) && _v1 > 0) return {
        clipId: _v1,
        clipHash: _v0[4]
      };
    }
    return _v0?.uri ? {
      clipId: _v2(_v0.uri),
      clipHash: (_v0 => {
        let _v1 = /\/videos\//;
        if (_v0.match(_v1)?.length == 1) return _v0.replace(_v1, "").split(":")[1];
      })(_v0.uri)
    } : {
      clipId: 0
    };
  }, "getParentPath", 0, _v0 => _v0 ? _v0.replace("users", "user").replace("projects", "folder") : "/", "getPermissionToFolder", 0, _v0 => _v0?.delete?.uri ? "manage" : _v0?.edit?.uri ? "edit" : _v0?.canComment ? "comment" : _v0?.view?.uri ? "view" : null, "idFromUri", 0, _v2, "isValidUrl", 0, _v0 => _v0.startsWith("mailto:") ? _v4.test(_v0) : _v3.test(_v0), "versionIdFromUri", 0, _v0 => {
    if (!_v0) return null;
    let _v1 = _v0.split("/") || [];
    return parseInt(_v1[_v1.length - 1]);
  }]);
}