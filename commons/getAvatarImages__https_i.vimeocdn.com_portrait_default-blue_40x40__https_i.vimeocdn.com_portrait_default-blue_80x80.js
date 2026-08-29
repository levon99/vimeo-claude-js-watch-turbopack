{
  "use strict";

  _v0.s(["getAvatarImages", 0, _v0 => {
    let _v1 = _v0?.find(_v0 => 72 === _v0.width)?.link || _v0?.[1]?.link || "https://i.vimeocdn.com/portrait/default-blue_40x40",
      _v2 = _v0?.find(_v0 => 144 === _v0.width)?.link || _v0?.[2]?.link || "https://i.vimeocdn.com/portrait/default-blue_80x80";
    return [_v1, `${_v2} 2x`];
  }]);
}