{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      event: "live_events",
      folder: "projects",
      showcase: "albums",
      video: "videos"
    },
    _v4 = {
      video: [".*\\/folders\\/root.*", ".*\\/projects\\/\\d+\\/items.*", ".*\\/videos\\/\\d+.*"],
      folder: [".*\\/folders\\/root.*", ".*\\/projects\\/\\d+\\/items.*", ".*\\/projects.*topLevelOnly=true.*", ".*\\/projects\\/\\d+.*"],
      showcase: [".*\\/albums.*"],
      event: [".*\\/live_events.*"]
    },
    _v5 = (_v0, _v1) => {
      let _v2 = _v0.match(RegExp(`(?:^|\\/)${_v1}\\/(\\d+)(?:$|\\/)`));
      return _v2?.[1] ?? null;
    },
    _v6 = (_v0, {
      entity: _v1,
      uri: _v2,
      title: _v3,
      titleField: _v4
    }) => {
      if (Array.isArray(_v0)) {
        let _v0 = !1,
          _v1 = _v0.map(_v0 => {
            let _v1 = _v6(_v0, {
              entity: _v1,
              uri: _v2,
              title: _v3,
              titleField: _v4
            });
            return _v1 !== _v0 && (_v0 = !0), _v1;
          });
        return _v0 ? _v1 : _v0;
      }
      if ("object" != typeof _v0 || null === _v0) return _v0;
      let _v5 = _v0,
        _v6 = !1;
      for (let [_v0, _v1] of ("string" == typeof _v0.uri && ((_v0, _v1, _v2) => {
        if (_v1 === _v2) return !0;
        let _v3 = _v3[_v0],
          _v4 = _v5(_v1, _v3),
          _v5 = _v5(_v2, _v3);
        return !!_v4 && _v4 === _v5;
      })(_v1, _v0.uri, _v2) && _v0[_v4] !== _v3 && (_v5 = {
        ..._v5,
        [_v4]: _v3
      }, _v6 = !0), Object.entries(_v5))) {
        let _v0 = _v6(_v1, {
          entity: _v1,
          uri: _v2,
          title: _v3,
          titleField: _v4
        });
        _v0 !== _v1 && (_v6 || (_v5 = {
          ..._v5
        }, _v6 = !0), _v5[_v0] = _v0);
      }
      return _v6 ? _v5 : _v0;
    };
  _v0.s(["useUpdateContentTitleCache", 0, function () {
    let _v0 = (0, _v2.default)();
    return (0, _v1.useCallback)(({
      entity: _v0,
      uri: _v1,
      title: _v2
    }) => {
      let _v3 = "event" === _v0 ? "title" : "name",
        _v4 = _v0 => ((_v0, {
          entity: _v1,
          uri: _v2,
          title: _v3,
          titleField: _v4
        }) => _v6(_v0, {
          entity: _v1,
          uri: _v2,
          title: _v3,
          titleField: _v4
        }))(_v0, {
          entity: _v0,
          uri: _v1,
          title: _v2,
          titleField: _v3
        });
      return Promise.all(_v4[_v0].map(_v0 => _v0(_v0, _v4, !1)));
    }, [_v0]);
  }]);
}