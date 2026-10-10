{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "UPDATE_CONFIG",
    _v3 = "ERROR",
    _v4 = _v0 => ({
      type: _v2,
      payload: _v0
    }),
    _v5 = _v0 => _v0 ? `UPLOAD_PAGE_CONFIG_${_v0}` : "UPLOAD_PAGE_CONFIG",
    _v6 = async (_v0, _v1) => (await fetch(`/upload_action?action=get_config_data&user_id=${_v0}${_v1 ? `&folder_id=${_v1}` : ""}`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })).json(),
    _v7 = async ({
      userId: _v0,
      folderId: _v1,
      cache: _v2,
      dispatch: _v3,
      isWebControllerError: _v4
    }) => {
      if (!_v0) return;
      let _v5 = _v2?.get(_v5(_v0));
      if (_v5) return void _v3(_v4(_v5));
      let _v6 = await _v6(_v0, _v1);
      if (_v4(_v6)) _v3({
        type: _v3,
        payload: _v6
      });else {
        let _v0 = (0, _v1.camelizeDeep)(_v6);
        _v2?.set(_v5(_v0), _v0), _v3(_v4(_v0));
      }
    };
  _v0.s(["configReducer", 0, (_v0, _v1) => {
    switch (_v1.type) {
      case "FETCH":
        return {
          ..._v0,
          loading: !0
        };
      case _v2:
        return {
          ..._v0,
          loading: !1,
          config: _v1.payload
        };
      case _v3:
        return {
          ..._v0,
          loading: !1,
          error: _v1.payload
        };
      default:
        return _v0;
    }
  }, "initialConfigFetchState", 0, {
    loading: !0,
    config: {
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
    error: null
  }, "loadUploadPageConfig", 0, _v7]);
}