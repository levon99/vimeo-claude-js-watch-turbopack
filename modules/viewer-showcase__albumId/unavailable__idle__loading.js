{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      status: "unavailable",
      error: null
    },
    _v3 = {
      status: "idle",
      error: null
    },
    _v4 = {
      status: "loading",
      error: null
    },
    _v5 = {
      status: "ready",
      error: null
    },
    _v6 = _v3,
    _v7 = null,
    _v8 = new WeakSet(),
    _v9 = new Set(),
    _v10 = () => window.Vimeo?.Player != null,
    _v11 = _v0 => {
      _v0 !== _v6 && (_v6 = _v0, _v9.forEach(_v0 => _v0()));
    },
    _v12 = _v0 => (_v9.add(_v0), () => {
      _v9.delete(_v0);
    }),
    _v13 = () => _v6,
    _v14 = () => _v3,
    _v15 = _v0 => _v10() ? (_v11(_v5), Promise.resolve()) : null !== _v7 ? _v7 : (_v11(_v4), _v7 = new Promise((_v0, _v1) => {
      let _v2 = (_v0 => {
          for (let _v0 of document.querySelectorAll("script[src]")) if (_v0.getAttribute("src") === _v0 && !_v8.has(_v0)) return _v0;
          return null;
        })(_v0),
        _v3 = _v2 ?? document.createElement("script"),
        _v4 = null,
        _v5 = () => {
          _v3.removeEventListener("load", _v6), _v3.removeEventListener("error", _v7), null !== _v4 && clearTimeout(_v4);
        };
      function _v6() {
        _v5(), _v10() ? _v0() : (_v8.add(_v3), _v1(Error("Player API script loaded but window.Vimeo.Player is missing")));
      }
      function _v7() {
        _v5(), _v8.add(_v3), null === _v2 && _v3.remove(), _v1(Error("Player API script failed to load"));
      }
      _v3.addEventListener("load", _v6), _v3.addEventListener("error", _v7), null === _v2 ? (_v3.src = _v0, _v3.async = !0, document.head.appendChild(_v3)) : _v4 = setTimeout(() => {
        _v5(), _v8.add(_v3), _v1(Error("Timed out waiting for an existing Player API script"));
      }, 0);
    }).then(() => {
      _v7 = null, _v11(_v5);
    }, _v0 => {
      throw _v7 = null, _v11({
        status: "error",
        error: _v0 instanceof Error ? _v0.message : String(_v0)
      }), _v0;
    }));
  _v0.s(["UNAVAILABLE_PLAYER_API_STATE", 0, _v2, "getPlayerApiState", 0, _v13, "getServerPlayerApiState", 0, _v14, "isPlayerApiPresent", 0, _v10, "loadPlayerApi", 0, _v15, "subscribeToPlayerApi", 0, _v12], 0), _v0.s(["usePlayerApi", 0, _v0 => {
    let _v1 = (0, _v1.useSyncExternalStore)(_v12, _v13, _v14);
    return (0, _v1.useEffect)(() => {
      null !== _v0 && _v15(_v0).catch(() => void 0);
    }, [_v0]), null === _v0 ? _v2 : _v1;
  }], 0);
}