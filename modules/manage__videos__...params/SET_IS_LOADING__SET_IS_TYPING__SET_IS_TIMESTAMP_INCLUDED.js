{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "SET_IS_LOADING",
    _v6 = "SET_IS_TYPING",
    _v7 = "SET_IS_TIMESTAMP_INCLUDED",
    _v8 = "SET_LINK_TO_COPY",
    _v9 = (_v0, _v1, _v2) => _v0[_v1] === _v2 ? _v0 : {
      ..._v0,
      [_v1]: _v2
    },
    _v10 = (_v0, _v1) => {
      switch (_v1.type) {
        case _v5:
          return _v9(_v0, "isLoading", _v1.payload);
        case _v6:
          return _v9(_v0, "isTyping", _v1.payload);
        case _v7:
          return _v9(_v0, "isTimestampIncluded", _v1.payload);
        case _v8:
          return _v9(_v0, "linkToCopy", _v1.payload);
        default:
          return _v0;
      }
    };
  _v0.s(["CustomUrlContextProvider", 0, function ({
    children: _v0,
    linkToCopy: _v1,
    timestampParam: _v2,
    playerCurrentTime: _v3,
    teamUsersRole: _v4
  }) {
    let _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      [_v10, _v11] = (0, _v2.useReducer)(_v10, {
        ...(0, _v3.initState)(),
        linkToCopy: _v1,
        timestampParam: _v2 ?? "",
        playerCurrentTime: _v3 ?? 0,
        teamUsersRole: _v4 ?? ""
      }),
      _v12 = (_v5 = (0, _v2.useCallback)(_v0 => {
        _v11({
          type: _v5,
          payload: _v0
        });
      }, [_v11]), _v6 = (0, _v2.useCallback)(_v0 => {
        _v11({
          type: _v6,
          payload: _v0
        });
      }, [_v11]), _v7 = (0, _v2.useCallback)(_v0 => {
        _v11({
          type: _v7,
          payload: _v0
        });
      }, [_v11]), _v8 = (0, _v2.useCallback)(_v0 => {
        _v11({
          type: _v8,
          payload: _v0
        });
      }, [_v11]), _v9 = (0, _v2.useCallback)(async (_v0, _v1) => {
        let _v2 = new URL(_v0 ? (0, _v4.getTimestampedUrl)(_v10.linkToCopy, _v10.timestampParam, _v10.playerCurrentTime) : _v10.linkToCopy);
        for (let [_v0, _v1] of Object.entries({
          share: "copy",
          ..._v1
        })) _v2.searchParams.append(_v0, _v1);
        await navigator.clipboard.writeText(_v2.toString());
      }, [_v10.linkToCopy, _v10.timestampParam, _v10.playerCurrentTime]), (0, _v2.useMemo)(() => ({
        setIsLoading: _v5,
        setIsTyping: _v6,
        setIsTimestampIncluded: _v7,
        setLinkToCopy: _v8,
        copyUrlLink: _v9
      }), [_v9, _v5, _v7, _v6, _v8])),
      {
        setLinkToCopy: _v13
      } = _v12;
    return (0, _v2.useEffect)(() => {
      _v13(_v1);
    }, [_v1]), (0, _v1.jsx)(_v3.CustomUrlDispatcherCtx.Provider, {
      value: _v12,
      children: (0, _v1.jsx)(_v3.CustomUrlStateCtx.Provider, {
        value: _v10,
        children: _v0
      })
    });
  }], 0);
}