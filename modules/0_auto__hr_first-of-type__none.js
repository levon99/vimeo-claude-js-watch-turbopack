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
    _v12 = _v0.i(0);
  let _v13 = ({
    workspaceInternalId: _v0,
    workspaceUuid: _v1
  }) => {
    let _v2 = (0, _v12.getTranslations)();
    return (0, _v1.jsxs)(_v2.Box, {
      maxW: _v9.SETTING_PAGES_MAX_WIDTH,
      width: "100%",
      margin: "0 auto",
      sx: {
        "hr:first-of-type": {
          display: "none"
        }
      },
      children: [(0, _v1.jsx)(_v10.SettingsPageContentHeader, {
        title: _v2.ELearning,
        description: _v2.ELearningDescription
      }), (0, _v1.jsx)(_v11.TeamSettingsPageCategory, {
        children: (0, _v1.jsx)(_v8.LMSTeamSettings, {
          workspaceUuid: _v1,
          userId: _v0
        })
      })]
    });
  };
  var _v14 = _v0.i(0);
  let _v15 = ({
    workspaceUuid: _v0,
    workspaceInternalId: _v1
  }) => {
    let {
      data: _v2,
      isLoading: _v3
    } = (0, _v5.useGetUserCapabilities)(() => _v1 ? {
      where: {
        userId: _v1
      },
      select: ["lmsExport"]
    } : null);
    if (_v3) return (0, _v1.jsx)(_v6.Spinner, {});
    if (_v2?.lmsExport === !1) throw new _v3.UnauthorizedError();
    return (0, _v1.jsx)(_v2.Box, {
      paddingTop: "lg",
      children: (0, _v1.jsx)(_v13, {
        workspaceInternalId: _v1,
        workspaceUuid: _v0
      })
    });
  };
  (0, _v4.withPageSetup)(_v14.getWspServerSideProps, {
    requireLogin: !0
  }), _v15.getLayout = (_v0, _v1) => (0, _v7.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v15], 0);
}