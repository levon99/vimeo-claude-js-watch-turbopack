{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createSlice)({
      name: "stage",
      initialState: {
        guides: {
          isShow: !1,
          isSnap: !0,
          activeGuides: []
        },
        size: {
          width: 0,
          height: 0
        }
      },
      reducers: {
        setSizeAction: (_v0, _v1) => {
          _v0.size = {
            ..._v1.payload
          };
        },
        setIsSnapStageAction: (_v0, _v1) => {
          _v0.guides.isSnap = _v1.payload;
        },
        setIsShowGuidesStageAction: (_v0, _v1) => {
          _v0.guides.isShow = _v1.payload;
        },
        setActiveGuidesStageAction: (_v0, _v1) => {
          _v0.guides.activeGuides = _v1.payload;
        }
      }
    }),
    {
      setSizeAction: _v3,
      setIsSnapStageAction: _v4,
      setIsShowGuidesStageAction: _v5,
      setActiveGuidesStageAction: _v6
    } = _v2.actions,
    _v7 = _v2.reducer,
    _v8 = (0, _v1.createSelector)(_v0 => _v0.stage, _v0 => _v0.size),
    _v9 = (0, _v1.createSelector)(_v0 => _v0.stage, _v0 => _v0.guides.activeGuides);
  _v0.s(["activeStageGuidesSelector", 0, _v9, "default", 0, _v7, "setActiveGuidesStageAction", 0, _v6, "setIsShowGuidesStageAction", 0, _v5, "setIsSnapStageAction", 0, _v4, "setSizeAction", 0, _v3, "stageSizeSelector", 0, _v8]);
}