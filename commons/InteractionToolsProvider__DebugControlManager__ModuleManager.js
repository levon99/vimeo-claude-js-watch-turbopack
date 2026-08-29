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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = [_v5.DebugControlManager, _v6.ModuleManager, _v15.TrackingManager, _v13.InteractionSessionManager, _v7.InteractionFirebaseManager, _v14.NotificationManager, _v9.ChatManager, _v11.QnAManager, _v10.PollManager, _v12.ReactionManager],
    _v18 = [..._v17, _v8.AudienceSpeakersManager],
    _v19 = (0, _v2.createProvider)(_v17),
    _v20 = (0, _v2.createProvider)(_v18);
  _v0.s(["InteractionToolsProvider", 0, function ({
    children: _v0,
    initialState: _v1,
    pageProps: _v2 = null
  }) {
    (0, _v16.useScopeViewerProvision)(), (0, _v3.useScopeGctlProvision)();
    let _v3 = _v1?.interaction?.isOnsite && _v1?.interaction?.isAudienceSpeakerEnabled ? _v20 : _v19;
    return (0, _v1.jsx)(_v4.LiveGlobalsProvider, {
      initialState: _v1,
      pageProps: _v2,
      children: (0, _v1.jsx)(_v3, {
        initialState: _v1,
        children: _v0
      })
    });
  }]);
}