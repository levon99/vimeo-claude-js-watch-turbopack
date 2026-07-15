{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      pickerTokens: {
        0: "",
        0: "",
        0: "",
        0: {
          clientId: "",
          developerKey: ""
        }
      },
      quota: {
        available: 0,
        free: 0,
        used: 0,
        totalCap: {
          free: 0,
          available: 0
        }
      },
      folders: [],
      owner: null,
      teamUsers: [],
      teamConfigs: [],
      defaultFolderId: null
    },
    _v5 = "UPDATE_CONFIG",
    _v6 = "ERROR",
    _v7 = _v0 => ({
      type: _v5,
      payload: _v0
    }),
    _v8 = (_v0, _v1) => {
      switch (_v1.type) {
        case "FETCH":
          return {
            ..._v0,
            loading: !0
          };
        case _v5:
          return {
            ..._v0,
            loading: !1,
            config: _v1.payload
          };
        case _v6:
          return {
            ..._v0,
            loading: !1,
            error: _v1.payload
          };
        default:
          return _v0;
      }
    },
    _v9 = _v0 => _v0 ? `UPLOAD_PAGE_CONFIG_${_v0}` : "UPLOAD_PAGE_CONFIG";
  _v0.s(["useUploadPageConfig", 0, (_v0, _v1) => {
    let _v2 = (0, _v1.useContext)(_v3.CacheContext),
      [_v3, _v4] = (0, _v1.useReducer)(_v8, {
        loading: !0,
        config: _v4,
        error: null
      });
    return (0, _v1.useEffect)(() => {
      let _v0 = async () => {
        let _v0 = await fetch(`/upload_action?action=get_config_data&user_id=${_v0}${_v1 ? `&folder_id=${_v1}` : ""}`, {
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            }
          }),
          _v1 = await _v0.json();
        if ("object" == typeof _v1 && null !== _v1 && "display_message" in _v1) _v4({
          type: _v6,
          payload: _v1
        });else {
          let _v0 = (0, _v2.camelizeDeep)(_v1);
          _v2?.set(_v9(_v0), _v0), _v4(_v7(_v0));
        }
      };
      if (_v0) {
        let _v0 = _v2?.get(_v9(_v0));
        _v0 ? _v4(_v7(_v0)) : _v0();
      }
    }, [_v2, _v1, _v0]), _v3;
  }]);
}