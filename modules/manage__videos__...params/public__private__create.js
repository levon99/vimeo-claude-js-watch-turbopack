{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ["public", "private", "create", "edit", "upload"],
    _v6 = async _v0 => {
      let _v1 = await fetch("/_next/access_token", {
        body: JSON.stringify({
          app_id: 0,
          token: _v0,
          scopes: _v5,
          get_magisto_team_token: 1
        }),
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      });
      if (_v1.ok) {
        let {
          access_token: _v0,
          magisto_team_token: _v1
        } = await _v1.json();
        return {
          ..._v0,
          magisto_team_token: _v1
        };
      }
      throw _v1;
    },
    _v7 = async (_v0, _v1) => {
      let {
        token: _v2,
        magisto_team_token: _v3
      } = await _v6(_v0);
      return await _v8.getAuthResponse(_v1, _v2, _v3);
    };
  class _v8 {
    static getRequest = (_v0, _v1, _v2) => {
      let _v3 = {
        "X-Requested-With": "XMLHttpRequest"
      };
      return _v2 && (_v3.Authorization = _v2), fetch(`//${_v1}${_v0}`, {
        headers: _v3
      }).then(_v0 => {
        if (_v0.ok) return _v0.json().then(_v0 => (0, _v4.camelizeDeep)(_v0));
        throw _v0;
      });
    };
    static request = async (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = {
        "X-Requested-With": "XMLHttpRequest"
      };
      _v3 && (_v5.Authorization = _v3);
      let _v6 = {
        method: _v0,
        headers: _v5
      };
      "POST" === _v0 && _v4 && (_v6.body = _v4);
      let _v7 = await fetch(`//${_v2}${_v1}`, _v6);
      if (_v7.ok) {
        let _v0 = await _v7.json();
        return (0, _v4.camelizeDeep)(_v0);
      }
      throw await _v7.json();
    };
    static duplicateVideo = async (_v0, _v1, _v2) => {
      let {
        hash: _v3,
        vsid: _v4,
        videoTitle: _v5,
        folderUri: _v6,
        shouldSaveToVimeo: _v7
      } = _v2;
      if (!_v3) throw Error("hash param is mandatory");
      let _v8 = new FormData();
      return _v8.append("hash", _v3), _v8.append("vsid", `${_v4}`), _v8.append("video_title", `${_v5}`), _v6 && _v8.append("folder_uri", `${_v6}`), !1 === _v7 && _v8.append("dont_push_vimeo", "1"), await _v8.request("POST", "/api/video/duplicate", _v0, _v1, _v8);
    };
    static getAuthResponse = async (_v0, _v1, _v2) => {
      let _v3 = new FormData();
      _v3.append("method", "VIMEO"), _v3.append("token", _v1), _v3.append("settings", "1"), _v3.append("dont_create", "1"), _v2 && _v3.append("teamToken", _v2);
      let _v4 = await fetch(`//${_v0}/api/auth`, {
        body: _v3,
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (_v4.ok) return _v4;
      throw _v4;
    };
    static removeWatermark = ({
      magistoApiHost: _v0,
      sessionId: _v1,
      videoId: _v2
    }) => _v8.request("POST", `/api/video/watermark/remove/vimeo?video_id=${_v2}`, _v0, _v1).then(_v0 => {
      if ("OK" === _v0.status) return _v0.jobId;
    });
    static checkWatermarkRemovingJobStatus = ({
      magistoApiHost: _v0,
      sessionId: _v1,
      jobId: _v2,
      errorCallback: _v3,
      successCallback: _v4
    }) => _v8.request("GET", `/api/video/upload/check?job=${_v2}`, _v0, _v1).then(_v0 => {
      if (_v0 && "OK" === _v0.status) switch (_v0.jobStatus) {
        case "DONE":
          _v4();
          break;
        case "ERR":
          _v3();
          break;
        case "PRCS":
          setTimeout(() => {
            _v8.checkWatermarkRemovingJobStatus({
              magistoApiHost: _v0,
              sessionId: _v1,
              jobId: _v2,
              errorCallback: _v3,
              successCallback: _v4
            });
          }, 0);
      }
    }).catch(() => {
      _v3();
    });
    static checkRenderingStatus = ({
      vsid: _v0,
      magistoApiHost: _v1,
      sessionId: _v2,
      onProgress: _v3,
      onRenderingDone: _v4,
      onRenderingError: _v5
    }) => _v8.request("GET", `/api/video/progress?vsid=${_v0}`, _v1, _v2).then(_v0 => {
      if (_v0 && "OK" === _v0.status) {
        if (_v0.restored && _v0?.lastError?.errMsg) return _v5?.("", _v0.hash);
        switch (_v0.sessionStatus) {
          case "INIT":
          case "PRCS":
            _v3 && _v0.progress && _v3(_v0.progress), setTimeout(() => {
              _v8.checkRenderingStatus({
                vsid: _v0,
                magistoApiHost: _v1,
                sessionId: _v2,
                onProgress: _v3,
                onRenderingDone: _v4,
                onRenderingError: _v5
              });
            }, 0);
            break;
          case "DRFT":
            _v4 && (_v3 && _v3(100), _v4(_v0.hash));
            break;
          case "ERR":
            throw Error("Error while rendering");
        }
      }
    }).catch(_v0 => {
      _v5 && _v5(_v0);
    });
  }
  _v0.s(["default", () => _v8, "getMagistoAuthResponse", 0, _v7], 0);
  var _v9 = _v0.i(0),
    _v10 = ((_v1 = {})[_v1.BEFORE_MIGRATION = 0] = "BEFORE_MIGRATION", _v1[_v1.DURING_MIGRATION = 1] = "DURING_MIGRATION", _v1[_v1.AFTER_MIGRATION = 2] = "AFTER_MIGRATION", _v1);
  let _v11 = _v3.default.createContext({
    VcVideoMigrationStatus: 0,
    magistoSessionId: "",
    getMagistoAuth: () => {},
    activePackage: void 0
  });
  _v0.s(["MagistoSessionContext", 0, _v11, "VideoMigrationStatus", () => _v10, "default", 0, function ({
    children: _v0
  }) {
    let _v1 = (0, _v3.useRef)(!1),
      [_v2, _v3] = (0, _v3.useState)(""),
      [_v4, _v5] = (0, _v3.useState)(),
      [_v6, _v7] = (0, _v3.useState)(),
      _v8 = (0, _v3.useContext)(_v9.ViewerContext),
      _v9 = !!_v8?.user && !!_v8.user.id,
      _v10 = (0, _v3.useCallback)(() => {
        if (!_v1.current && !_v2 && _v9 && _v8) return _v1.current = !0, _v7(_v8.xsrft, _v8.magistoApiHost).then(_v0 => {
          if (_v0) {
            let _v0 = _v0.headers.get("vmosessionid");
            _v0.json().then(_v0 => {
              _v3(_v0), _v5(_v0.user.video_migration_status), _v7(_v0.active_package);
            });
          }
          _v1.current = !1;
        }).catch(_v0 => {
          _v1.current = !1;
        });
      }, [_v9, _v2, _v8]);
    return (0, _v2.jsx)(_v11.Provider, {
      value: {
        getMagistoAuth: _v10,
        magistoSessionId: _v2,
        VcVideoMigrationStatus: _v4,
        activePackage: _v6
      },
      children: _v0
    });
  }], 0);
}