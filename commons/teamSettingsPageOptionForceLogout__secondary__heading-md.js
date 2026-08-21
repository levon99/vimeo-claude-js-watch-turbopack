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
    _v10 = _v0.i(0);
  let _v11 = ({
    contextObj: _v0,
    type: _v1
  }) => {
    let _v2 = (0, _v10.getTranslations)(),
      [_v3, _v4] = (0, _v2.useState)(!1),
      _v5 = (0, _v2.useRef)(!1),
      _v6 = (0, _v6.useToast)(),
      {
        forceLogout: _v7,
        state: _v8
      } = (0, _v2.useContext)(_v0);
    (0, _v2.useEffect)(() => {
      _v5.current && (_v8.error ? (_v6({
        title: _v2.SomethingWentWrong,
        duration: 0
      }), _v5.current = !1) : _v8.loading || (_v9(), window.location.reload()));
    }, [_v2.SomethingWentWrong, _v8.error, _v8.loading, _v6]);
    let _v9 = () => {
      _v4(!1);
    };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.TeamSettingsPageOptionCustom, {
        title: _v2.LogOutAll,
        description: "org" === _v1 ? _v2.LogOutAllDescriptionOrgWs : _v2.LogOutAllDescription,
        dataId: "teamSettingsPageOptionForceLogout",
        children: (0, _v1.jsx)(_v3.Button, {
          size: "sm",
          variant: "secondary",
          onClick: () => _v4(!0),
          isLoading: _v8.loading,
          children: _v2.ForceLogOut
        })
      }), (0, _v1.jsx)(_v9.SessionControlModal, {
        isOpen: _v3,
        onClose: _v9,
        header: (0, _v1.jsx)(_v4.Header, {
          variant: "heading-md",
          size: "xl",
          children: _v2.ForceLogOutModalTitle
        }),
        body: (0, _v1.jsx)(_v5.Paragraph, {
          variant: "body-md",
          color: "text-secondary",
          children: _v2.ForceLogOutModalDescription
        }),
        footer: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v3.Button, {
            variant: "tertiary",
            onClick: _v9,
            children: _v2.Cancel
          }), (0, _v1.jsx)(_v3.Button, {
            variant: "destructive",
            isLoading: _v8.loading,
            onClick: () => {
              _v7(), _v5.current = !0;
            },
            children: _v2.ForceLogOut
          })]
        })
      })]
    });
  };
  _v0.s(["TeamSettingsForceLogout", 0, ({
    type: _v0,
    orgUuid: _v1,
    ownerId: _v2
  }) => "team" === _v0 && _v2 ? (0, _v1.jsx)(_v8.ForceLogoutContextProviderTeam, {
    ownerId: _v2,
    children: (0, _v1.jsx)(_v11, {
      contextObj: _v8.ForceLogoutContextTeam,
      type: _v0
    })
  }) : "org" === _v0 && _v1 ? (0, _v1.jsx)(_v8.ForceLogoutContextProviderOrg, {
    orgUuid: _v1,
    children: (0, _v1.jsx)(_v11, {
      contextObj: _v8.ForceLogoutContextOrg,
      type: _v0
    })
  }) : null]);
}