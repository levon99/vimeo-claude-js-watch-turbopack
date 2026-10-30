{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (_v0, _v1) => {
    let {
        history: _v2,
        location: _v3
      } = window,
      _v4 = new URLSearchParams(_v3.search);
    _v4.set(_v0, _v1), _v2.replaceState(_v2.state, "", `${_v3.origin}${_v3.pathname}?${_v4.toString()}`);
  };
  _v0.s(["JSONtoBlobURL", 0, _v0 => {
    let _v1 = new Blob([JSON.stringify(_v0)], {
      type: "application/json"
    });
    return URL.createObjectURL(_v1);
  }, "addUrlParams", 0, (_v0, _v1) => {
    let _v2 = `${_v0}=${_v1}`,
      {
        history: _v3,
        location: _v4
      } = window;
    _v3.replaceState(_v3.state, "", _v4.href + "&" + `${_v2}`);
  }, "getFolderId", 0, () => {
    let _v0 = Number(new URLSearchParams(window.location.search).get("folder_id"));
    return isNaN(_v0) ? null : _v0;
  }, "getFolderIdFromUri", 0, (_v0 = "") => {
    let _v1 = Number(_v0?.match(/(\d)+/g)?.[1]);
    return isNaN(_v1) ? null : _v1;
  }, "getMandatoryVimeoVideoId", 0, () => {
    let _v0 = (0, _v1.getVimeoVideoId)();
    if ("number" != typeof _v0) throw Error(`vid query parameter is missing in URL ${window.location.href}`);
    return _v0;
  }, "getVimeoVideoIdString", 0, () => {
    let _v0 = new URLSearchParams(window.location.search).get("vid");
    return null !== _v0 && /^\d+$/.test(_v0) ? _v0 : null;
  }, "isDataUrl", 0, _v0 => (void 0 === _v0 && _v4.default.sendLog(_v3.MISSING_DATA_URL, _v5.LogComponent.EDITOR_ERROR), _v0?.startsWith("data")), "isLocalUrl", 0, _v0 => (void 0 === _v0 && _v4.default.sendLog(_v3.MISSING_LOCAL_URL, _v5.LogComponent.EDITOR_ERROR), _v0?.startsWith("blob")), "partnerRouteToPreview", 0, _v0 => {
    let _v1 = window.location.href,
      _v2 = _v1.match(/\/apps\/(\d+)\//);
    if (_v2 && _v2[1]) {
      let _v0 = _v2[1],
        _v1 = new URL(_v1);
      _v1.search = "", _v1.pathname = `/apps/${_v0}/preview/${_v0}`, _v1.searchParams.append("container", _v2.PRODUCT.EDITOR), window.location.href = _v1.href;
    } else window.location.href = window.location.host;
  }, "replaceUrlParams", 0, _v6, "setHashUrlParam", 0, _v0 => {
    (_v0 => {
      let {
          history: _v1,
          location: _v2
        } = window,
        _v3 = new URLSearchParams(_v2.search);
      _v0.forEach(_v0 => {
        _v3.has(_v0) && _v3.delete(_v0);
      }), _v1.replaceState(_v1.state, "", `${_v2.origin}${_v2.pathname}?${_v3.toString()}`);
    })(["blank", "et"]), _v6("hash", _v0);
  }]);
}