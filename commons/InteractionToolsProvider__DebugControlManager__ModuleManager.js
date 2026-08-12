{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = [_v5.DebugControlManager, _v6.ModuleManager, _v14.TrackingManager, _v12.InteractionSessionManager, _v7.InteractionFirebaseManager, _v13.NotificationManager, _v8.ChatManager, _v10.QnAManager, _v9.PollManager, _v11.ReactionManager],
    _v17 = (0, _v2.createProvider)(_v16);
  _v0.s(["InteractionToolsProvider", 0, function ({
    children: _v0,
    initialState: _v1,
    pageProps: _v2 = null
  }) {
    return (0, _v15.useScopeViewerProvision)(), (0, _v3.useScopeGctlProvision)(), (0, _v1.jsx)(_v4.LiveGlobalsProvider, {
      initialState: _v1,
      pageProps: _v2,
      children: (0, _v1.jsx)(_v17, {
        initialState: _v1,
        children: _v0
      })
    });
  }]);
}