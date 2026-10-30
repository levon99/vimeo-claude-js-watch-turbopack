{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = [_v3.notificationName.missingWebGL, _v3.notificationName.partnerConnect],
    _v5 = (0, _v2.createSlice)({
      name: "alert",
      initialState: {
        active: !1,
        title: "This is an example alert",
        content: "Image size should be less than 10MB",
        primaryButtonConfig: {
          content: "Ok",
          onClick: () => ({})
        },
        secondaryButtonConfig: {
          content: "Cancel",
          onClick: () => ({})
        },
        showX: !0,
        notificationName: "this_is_an_example_alert",
        showAgainConfig: void 0
      },
      reducers: {
        showAlertAction: (_v0, _v1) => {
          if (_v4.includes(_v0.notificationName)) return;
          let {
            title: _v2,
            content: _v3,
            primaryButtonConfig: _v4,
            secondaryButtonConfig: _v5,
            showX: _v6,
            onDismiss: _v7,
            notificationName: _v8,
            errorCode: _v9,
            errorName: _v10,
            via: _v11,
            showAgainConfig: _v12
          } = _v1.payload;
          _v0.active = !0, _v0.title = _v2, _v0.content = _v3, _v0.primaryButtonConfig = _v4, _v0.secondaryButtonConfig = _v5, _v0.showX = _v6, _v0.onDismiss = _v7, _v0.notificationName = _v8, _v0.errorCode = _v9, _v0.errorName = _v10, _v0.via = _v11, _v0.showAgainConfig = _v12;
        },
        hideAlertAction: _v0 => {
          _v4.includes(_v0.notificationName) || (_v0.active = !1, _v0.title = void 0, _v0.primaryButtonConfig = void 0, _v0.secondaryButtonConfig = void 0, _v0.showX = !0, _v0.onDismiss = void 0, _v0.errorCode = void 0, _v0.errorName = void 0, _v0.via = void 0, _v0.showAgainConfig = void 0);
        }
      }
    }),
    {
      showAlertAction: _v6,
      hideAlertAction: _v7
    } = _v5.actions,
    _v8 = _v5.reducer,
    _v9 = (0, _v1.createSelector)(_v0 => _v0.alert, _v0 => _v0);
  _v0.s(["alertSelector", 0, _v9, "default", 0, _v8, "hideAlertAction", 0, _v7, "isAlertVisibleSelector", 0, _v0 => _v0.alert.active, "showAlertAction", 0, _v6]);
}