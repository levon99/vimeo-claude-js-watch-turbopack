{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      [_v0.i(0).SVV_ACTION_TYPE.UPDATE_DATE_RANGE]: (_v0, _v1) => {
        let {
          startDate: _v2,
          endDate: _v3
        } = _v1.payload;
        return {
          ..._v0,
          startDate: _v2,
          endDate: _v3
        };
      }
    },
    _v5 = (_v0, _v1) => _v4[_v1.type] ? _v4[_v1.type](_v0, _v1) : _v0,
    _v6 = (0, _v3.createContext)(null),
    _v7 = () => {
      let _v0 = _v2.DateTime.utc();
      return {
        startDate: _v0.minus({
          days: 30
        }).startOf("day"),
        endDate: _v0.endOf("day")
      };
    };
  _v0.s(["SvvDateRangeProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v3.useReducer)(_v5, _v7());
    return (0, _v1.jsx)(_v6.Provider, {
      value: {
        state: _v1,
        dispatch: _v2
      },
      children: _v0
    });
  }, "useSvvDateRange", 0, () => {
    let _v0 = (0, _v3.useContext)(_v6),
      [_v1, _v2] = (0, _v3.useReducer)(_v5, _v7());
    return _v0 ?? {
      state: _v1,
      dispatch: _v2
    };
  }], 0);
}