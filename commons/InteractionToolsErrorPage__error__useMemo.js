{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["InteractionToolsErrorPage", 0, function ({
    error: _v0
  }) {
    let [_v1, _v2] = (0, _v2.useMemo)(() => {
      if ((0, _v6.isApiError)(_v0)) switch (_v0.data.body.errorCode) {
        case _v5.EApiErrorCode.NOT_FOUND:
          return [_v4.T_ERROR_NOT_FOUND, _v4.T_ERROR_COUND_NOT_FIND_INTERACTION_ROOM];
        case _v5.EApiErrorCode.REFERRER_NOT_ALLOWED_TO_EMBED:
          return ["", _v4.T_ERROR_REFERRER_NOT_ALLOWED_TO_EMBED];
        case _v5.EApiErrorCode.ROOM_AUTHORIZATION_FAILED_AUTH_VALUES_ARE_INVALID:
          return ["", _v4.T_ERROR_BECAUSE_OF_PRIVACY_CANNOT_JOIN];
      }
      return [_v4.T_ERROR_TECHNICAL_DIFFICULTIES, _v4.T_ERROR_TECHNICAL_DIFFICULTIES_TRY_AGAIN];
    }, [_v0]);
    return (0, _v1.jsx)(_v3.LiveErrorPage, {
      title: _v1,
      message: _v2,
      error: _v0,
      isHeaderEnabled: !1
    });
  }]);
}