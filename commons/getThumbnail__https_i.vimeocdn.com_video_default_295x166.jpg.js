{
  "use strict";

  _v0.s(["getThumbnail", 0, _v0 => {
    let _v1 = _v0[0],
      _v2 = 16 / 9;
    return _v1 && _v1.width && _v1.height && (_v2 = Math.max(_v1.width / _v1.height, 1)), {
      src: _v1?.link || "https://i.vimeocdn.com/video/default_295x166.jpg",
      aspectRatio: _v2,
      srcset: _v0?.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ")
    };
  }]);
}