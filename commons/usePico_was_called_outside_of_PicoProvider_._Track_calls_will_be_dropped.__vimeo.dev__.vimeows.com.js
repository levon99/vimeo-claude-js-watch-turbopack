{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.createContext)({
    track: async () => {
      let _v0 = "usePico() was called outside of <PicoProvider>. Track calls will be dropped.";
      if (console.error(_v0), _v7()) throw Error(_v0);
    }
  });
  function _v7() {
    let _v0 = window.location?.hostname ?? "";
    return "vimeo.dev" === _v0 || _v0.endsWith(".vimeows.com");
  }
  _v0.s(["PicoProvider", 0, ({
    children: _v0,
    syncIntervalMilliseconds: _v1 = 0,
    isDevelopment: _v2
  }) => {
    let _v3 = (0, _v3.useViewer)(),
      {
        user_id: _v4,
        vuid: _v5,
        team_id: _v6,
        team_owner_id: _v7,
        actor_id: _v8,
        organization_id: _v9,
        account_type: _v10,
        is_team_user: _v11,
        is_free_trial: _v12,
        country: _v13,
        is_mobile: _v14
      } = (0, _v5.extractSafeViewerInfo)(_v3),
      _v15 = null != _v3,
      _v16 = (0, _v2.useMemo)(() => _v15 ? {
        user_id: _v4,
        vuid: _v5,
        team_id: _v6,
        team_owner_id: _v7,
        actor_id: _v8,
        organization_id: _v9
      } : null, [_v4, _v5, _v6, _v7, _v8, _v9, _v15]),
      _v17 = (0, _v2.useMemo)(() => _v15 ? {
        account_type: _v10,
        is_team_user: _v11,
        is_free_trial: _v12,
        country: _v13,
        is_mobile: _v14,
        is_in_grace_period: null
      } : null, [_v10, _v11, _v12, _v13, _v14, _v15]),
      _v18 = (0, _v2.useRef)(_v16),
      _v19 = (0, _v2.useRef)(_v17);
    _v18.current = _v16, _v19.current = _v17;
    let {
      proxy: _v20,
      bind: _v21,
      fail: _v22
    } = (0, _v2.useMemo)(() => {
      let _v0;
      return _v0 = {
        type: "buffering",
        buffer: []
      }, {
        proxy: {
          track: async (_v0, _v1, _v2) => {
            switch (_v0.type) {
              case "bound":
                return _v0.pico.track(_v0, _v1, _v2);
              case "buffering":
                _v0.buffer.push([_v0, _v1, _v2]);
                return;
              case "error":
                console.warn(`Discarding event due to init error: ${_v0.error}`);
                return;
            }
          }
        },
        bind: _v0 => {
          let _v1 = "buffering" === _v0.type ? _v0.buffer : [];
          for (let [_v0, _v1, _v2] of (_v0 = {
            type: "bound",
            pico: _v0
          }, _v1)) _v0.track(_v0, _v1, _v2);
        },
        fail: _v0 => {
          let _v1 = "buffering" === _v0.type ? _v0.buffer.length : 0;
          _v0 = {
            type: "error",
            error: _v0
          }, _v1 > 0 && console.warn(`Discarding ${_v1} buffered PicoX events due to init error: ${_v0}`);
        }
      };
    }, []);
    return (0, _v2.useEffect)(() => {
      if (!_v15) return;
      let _v0 = () => ({
          ...(_v18.current ?? {})
        }),
        _v1 = () => {
          let _v0 = null;
          return {
            page: _v0 = window.location.pathname,
            ...(_v19.current ?? {}),
            is_in_grace_period: (0, _v5.deriveIsInGracePeriod)()
          };
        },
        _v2 = _v2 || _v7(),
        _v3 = `https://vimeo.com/flarepoint/${function () {
          let _v0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            _v1 = "";
          for (let _v0 = 0; _v0 < 8; _v0++) _v1 += _v0.charAt(Math.floor(Math.random() * _v0.length));
          return _v1;
        }()}`;
      (async () => {
        try {
          let _v0 = await (0, _v4.createPicoX)({
            additionalIdentifiers: _v0,
            additionalContext: _v1,
            cookieDomain: `.${window.location.hostname.split(".").slice(-2).join(".")}`,
            identificationToken: "c10f1887-7c05-4a9a-9a60-c307825f0f34",
            isDevelopment: _v2,
            syncIntervalMilliseconds: _v1,
            endpoint: _v3
          });
          _v21(_v0);
        } catch (_v0) {
          console.error("Error initializing PicoX client", _v0), _v22(_v0);
        }
      })();
    }, [_v15]), (0, _v1.jsx)(_v6.Provider, {
      value: _v20,
      children: _v0
    });
  }, "usePico", 0, () => (0, _v2.useContext)(_v6)]);
}