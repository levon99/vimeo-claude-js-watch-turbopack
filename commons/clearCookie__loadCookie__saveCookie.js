{
  "use strict";

  _v0.s(["clearCookie", 0, (_v0, _v1 = "/") => {
    window.document.cookie = `${_v0}=; Path=${_v1}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  }, "loadCookie", 0, (_v0, _v1) => {
    let _v2 = _v1 ?? window.document.cookie,
      _v3 = `; ${_v2}`.split(`; ${_v0}=`);
    return 2 === _v3.length ? _v3.pop()?.split(";")?.[0] : null;
  }, "saveCookie", 0, ({
    name: _v0,
    value: _v1,
    path: _v2,
    domain: _v3,
    maxAge: _v4,
    secure: _v5,
    sameSite: _v6
  }) => {
    let _v7 = `${_v0}=${_v1}`;
    _v2 && (_v7 += `;path=${_v2}`), _v3 && (_v7 += `;domain=${_v3}`), _v4 && (_v7 += `;max-age=${_v4}`), _v5 && (_v7 += ";secure"), _v6 && (_v7 += `;samesite=${_v6}`), window.document.cookie = _v7;
  }]);
}