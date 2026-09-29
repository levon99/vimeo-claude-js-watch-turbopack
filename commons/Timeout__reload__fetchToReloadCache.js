{
  "use strict";

  let _v1 = 0,
    _v2 = 0,
    _v3 = async (_v0, _v1, _v2, _v3) => {
      if (Date.now() >= _v2) throw Error("Timeout");
      let _v4 = await _v0();
      return _v1(_v4) ? (await new Promise(_v0 => setTimeout(_v0, _v3)), await _v3(_v0, _v1, _v2, _v3)) : _v4;
    },
    _v4 = async _v0 => {
      try {
        return await fetch(_v0);
      } catch (_v0) {
        return await fetch(_v0, {
          cache: "reload"
        });
      }
    };
  _v0.s(["fetchToReloadCache", 0, _v4, "rtkPoll", 0, ({
    url: _v0,
    fetchWithBaseQuery: _v1,
    shouldKeepPolling: _v2,
    timeout: _v3 = _v1,
    interval: _v4 = _v2
  }) => (({
    fetch: _v0,
    shouldKeepPolling: _v1,
    timeout: _v2 = _v1,
    interval: _v3 = _v2
  }) => _v3(_v0, _v1, Date.now() + _v2, _v3))({
    fetch: () => _v1(_v0),
    shouldKeepPolling: _v2,
    timeout: _v3,
    interval: _v4
  })], 0);
}