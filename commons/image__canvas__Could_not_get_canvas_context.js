{
  "use strict";

  async function _v1(_v0, _v1) {
    try {
      let _v0 = await fetch(_v0, {
        signal: _v1
      });
      if (!_v0.ok) throw Error(`Failed to fetch image: ${_v0.status} ${_v0.statusText}`);
      let _v1 = await _v0.blob();
      if (!_v1.type.startsWith("image/")) throw Error(`Invalid content type: ${_v1.type}`);
      let _v2 = new Image(),
        _v3 = document.createElement("canvas"),
        _v4 = _v3.getContext("2d");
      if (!_v4) throw Error("Could not get canvas context");
      return new Promise((_v0, _v1) => {
        _v2.onload = () => {
          try {
            _v3.width = 8, _v3.height = 8, _v4.drawImage(_v2, 0, 0, 8, 8);
            let _v0 = _v4.getImageData(0, 0, 8, 8).data,
              _v1 = [],
              _v2 = 0;
            for (let _v0 = 0; _v0 < _v0.length; _v0 += 4) {
              let _v0 = Math.round(.299 * _v0[_v0] + .587 * _v0[_v0 + 1] + .114 * _v0[_v0 + 2]);
              _v1.push(_v0), _v2 += _v0;
            }
            let _v3 = _v2 / _v1.length,
              _v4 = "";
            for (let _v0 of _v1) _v4 += _v0 >= _v3 ? "1" : "0";
            _v0(_v4);
          } catch (_v0) {
            _v1(_v0);
          }
        }, _v2.onerror = () => {
          _v1(Error("Failed to load image"));
        }, _v2.src = URL.createObjectURL(_v1);
      });
    } catch (_v0) {
      throw _v0;
    }
  }
  async function _v2(_v0, _v1, _v2) {
    try {
      let [_v0, _v1] = await Promise.all([_v1(_v0, _v2), _v1(_v1, _v2)]),
        _v2 = function (_v0, _v1) {
          if (_v0.length !== _v1.length) return _v0.length;
          let _v2 = 0;
          for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0[_v0] !== _v1[_v0] && _v2++;
          return _v2;
        }(_v0, _v1),
        _v3 = _v0.length;
      return (_v3 - _v2) / _v3 * 100 >= 95;
    } catch (_v0) {
      return console.error("Error comparing images:", _v0), !1;
    }
  }
  async function _v3(_v0, _v1, _v2 = 0) {
    if (!_v0 || !_v1) return null;
    let _v3 = new AbortController(),
      _v4 = new Promise(_v0 => {
        setTimeout(() => {
          _v3.abort(), _v0(null);
        }, _v2);
      }),
      _v5 = [];
    for (let _v0 of _v1) for (let _v0 of _v0.logos || []) {
      let _v0 = (async () => {
        try {
          if (await _v2(_v0, _v0.picture.baseLink, _v3.signal)) return {
            brandkitId: _v0.uri.split("/").at(-1) || "",
            matchingLogo: {
              uri: _v0.uri,
              url: _v0.picture.baseLink
            }
          };
          throw Error("No match");
        } catch (_v0) {
          throw _v0;
        }
      })();
      _v5.push(_v0);
    }
    try {
      if (0 === _v5.length) return null;
      let _v0 = Promise.any(_v5),
        _v1 = await Promise.race([_v0, _v4]);
      if (_v3.abort(), null === _v1) return null;
      return _v1;
    } catch (_v0) {
      if (_v0?.constructor?.name === "AggregateError") return null;
      return console.warn("Error in visual matching:", _v0), null;
    }
  }
  _v0.s(["extractIdsFromLogoUri", 0, function (_v0) {
    let _v1 = _v0.match(/\/brandkits\/([^\/]+)\/logos\/([^\/]+)/);
    return _v1 ? {
      kitUuid: _v1[1],
      logoId: _v1[2]
    } : null;
  }, "extractLogoHash", 0, _v0 => {
    let _v1 = _v0.match(/\/brand_logo\/(.*?)\?/);
    return _v1 ? _v1[1] : null;
  }, "generateFileName", 0, (_v0, _v1) => {
    let _v2 = _v0.replace(/\.[^/.]+$/, "").replace(/\s+/g, "_").toLowerCase().slice(0, 20);
    return `${_v2}.${_v1}`;
  }, "getVisualMatchingBrandkitLogo", 0, _v3]);
}