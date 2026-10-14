{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7(_v0, _v1, _v2, _v3) {
    let _v4 = _v1 ? `jwt ${_v1}` : `bearer ${_v2}`,
      _v5 = _v3 ? function (_v0) {
        let _v1 = "?",
          _v2 = Object.keys(_v0);
        for (let _v0 = 0; _v0 < _v2.length; _v0++) {
          let _v0 = _v2[_v0],
            _v1 = _v0[_v0];
          _v1 && (_v1 += 0 !== _v0 ? `&${(0, _v6.default)(_v0)}=${encodeURIComponent(_v1)}` : `${(0, _v6.default)(_v0)}=${encodeURIComponent(_v1)}`);
        }
        return _v1;
      }(_v3) : "",
      _v6 = await fetch(`https://${_v0}/upload/config${_v5}`, {
        headers: {
          Authorization: _v4
        }
      });
    if (200 !== _v6.status) throw Error(_v6.statusText);
    return _v6.json();
  }
  let _v8 = /vuid=(\w+\.\w+);?/;
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = _v2.default.createContext({
    addUploadLifecycleListener: () => () => null
  });
  _v0.s(["UploadLifecycleContext", 0, _v11, "UploaderProvider", 0, function (_v0) {
    let {
        basicAuthToken: _v1,
        children: _v2,
        enableNonVideoUploadFakeDoor: _v3,
        enableUniversalHosting: _v4,
        maxSimultaneousUploads: _v5,
        onNonVideoUploadAttempt: _v6
      } = _v0,
      [_v7] = (0, _v2.useState)(() => (0, _v10.createUploadStore)({
        enableUniversalHosting: _v4,
        enableNonVideoUploadFakeDoor: _v3,
        onNonVideoUploadAttempt: _v6,
        maxSimultaneousUploads: _v5
      }));
    !function (_v0, {
      basicAuthToken: _v1,
      maxSimultaneousUploads: _v2
    }) {
      let _v3 = (0, _v5.useViewer)(),
        _v4 = (0, _v3.useStore)(_v0, _v0 => _v0.hasBeenInitialized),
        _v5 = (0, _v3.useStore)(_v0, _v0 => _v0.loading),
        _v6 = !!_v3?.user;
      (0, _v2.useEffect)(() => {
        _v6 && !_v0.getState().hasBeenInitialized && _v0.getState().setHasBeenInitialized();
      }, [_v0, _v6]), (0, _v2.useEffect)(() => {
        _v0.getState().setJwt(_v3?.jwt);
      }, [_v0, _v3?.jwt]), (0, _v2.useEffect)(() => {
        _v0.getState().setMaxSimultaneousUploads(_v2);
      }, [_v0, _v2]), (0, _v2.useEffect)(() => {
        let _v0 = async () => {
          _v0.getState().setLoading(!0);
          try {
            let _v0,
              _v1 = (window.location.search || window.location.search).substr(1).split("&").map(_v0 => _v0.split("=")).filter(([_v0]) => /\S/.test(_v0)).reduce((_v0, [_v1, _v2]) => ({
                ..._v0,
                [_v1]: _v2
              }), {}),
              _v2 = await _v7(_v3?.apiUrl ?? "", _v3?.jwt, _v1, _v1),
              _v3 = _v3?.xsrft ? {
                ..._v2,
                xsrft: _v3.xsrft
              } : _v2;
            _v0.getState().setService(_v3.service), _v3.vuid || (_v3.vuid = (_v0 = document.cookie.match(_v8)) && _v0.length >= 2 ? _v0[1] : "");
            let _v4 = _v0.getState().getMaxSimultaneousUploads(),
              _v5 = new _v4.default({
                ..._v3,
                max_simultaneous_uploads: _v4 ?? _v3.max_simultaneous_uploads,
                embeddableUploaderVersion: "3.0.0"
              }, void 0);
            _v0.getState().registerEngine(_v5), _v0.getState().setMaxSimultaneousUploads(_v4);
          } catch (_v0) {
            console.error("Error configuring uploader: ", _v0);
          } finally {
            _v0.getState().setLoading(!1);
          }
        };
        _v4 && !_v0.getState().hasEngine() && !_v5 && _v3?.apiUrl && (_v3?.jwt || _v1) && _v0();
      }, [_v0, _v4, _v5, _v3?.apiUrl, _v3?.jwt, _v3?.xsrft, _v1, _v2]), (0, _v2.useEffect)(() => () => _v0.getState().resetListeners(), [_v0]);
    }(_v7, {
      basicAuthToken: _v1,
      maxSimultaneousUploads: _v5
    }), (0, _v2.useEffect)(() => {
      _v7.getState().setProviderOptions({
        enableUniversalHosting: _v4,
        enableNonVideoUploadFakeDoor: _v3,
        onNonVideoUploadAttempt: _v6
      });
    }, [_v7, _v4, _v3, _v6]);
    let _v8 = (0, _v2.useMemo)(() => ({
      addUploadLifecycleListener: _v7.getState().addUploadLifecycleListener
    }), [_v7]);
    return (0, _v1.jsx)(_v9.UploaderStoreContext.Provider, {
      value: _v7,
      children: (0, _v1.jsx)(_v11.Provider, {
        value: _v8,
        children: _v2
      })
    });
  }], 0);
}