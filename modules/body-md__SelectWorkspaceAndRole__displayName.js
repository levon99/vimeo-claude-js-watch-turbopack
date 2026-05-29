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
  let _v16 = _v0 => (0, _v1.jsx)(_v7.SelectItem, {
    children: (0, _v1.jsxs)(_v5.HStack, {
      gap: (0, _v6.rem)(10),
      children: [(0, _v1.jsx)(_v15.WorkspaceLogo, {
        label: _v0.label,
        logoUrl: _v0.iconUrl
      }), (0, _v1.jsx)(_v8.Text, {
        fontWeight: "350",
        variant: "body-md",
        children: _v0.label
      })]
    })
  });
  _v0.s(["SelectWorkspaceAndRole", 0, ({
    handleSelectedRoleChange: _v0,
    handleSelectedWorkspaceUriChange: _v1,
    handleWorkspacesAddition: _v2,
    listOfWorkspaces: _v3,
    orgUuid: _v4,
    selectedRole: _v5,
    selectedWorkspaceUri: _v6
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(1),
      _v9 = (0, _v12.getTranslations)(),
      _v10 = (0, _v13.getRolesForRoleSelector)(),
      _v11 = (0, _v2.useRef)(!0),
      _v12 = (0, _v2.useRef)(!1),
      [_v13, {
        data: _v14
      }] = (0, _v10.useGetOrganizationWorkspacesLazy)();
    (0, _v2.useEffect)(() => {
      1 === _v7 && _v3.length || _v4 && _v11.current && (1 === _v7 || _v14?.paging?.next) && (_v13({
        select: ["displayName", "icon", "internalId", "uri"],
        where: {
          orgUuid: _v4
        },
        query: {
          page: _v7,
          perPage: _v11.PER_PAGE_WORKSPACES
        }
      }), _v11.current = !1, _v12.current = !0);
    }, [_v14?.paging?.next, _v13, _v3.length, _v4, _v7]), (0, _v2.useEffect)(() => {
      _v12.current && _v14?.page === _v7 && _v14?.data?.length && (_v2(_v14.data), _v11.current = !0, _v12.current = !1, _v14?.paging?.next && _v8(_v0 => _v0 + 1));
    }, [_v14, _v2, _v7]);
    let _v15 = _v3.map(_v0 => ({
        label: _v0.displayName,
        iconUrl: _v0.icon?.sizes[0]?.link,
        value: _v0.uri
      })),
      _v16 = _v15.find(_v0 => _v0.value === _v6);
    return (0, _v1.jsxs)(_v9.VStack, {
      alignItems: "flex-start",
      gap: "xs",
      children: [(0, _v1.jsx)(_v4.Header, {
        size: "xs",
        children: _v9.AddToAWorkspace
      }), (0, _v1.jsxs)(_v5.HStack, {
        width: "100%",
        gap: "md",
        children: [(0, _v1.jsx)(_v3.Box, {
          paddingLeft: (0, _v6.rem)(2),
          width: "100%",
          children: (0, _v1.jsx)(_v7.Select, {
            disabled: !_v15.length,
            items: _v15,
            leftIcon: _v16 ? (0, _v1.jsx)(_v15.WorkspaceLogo, {
              label: _v16.label,
              logoUrl: _v16.iconUrl
            }) : void 0,
            onValueChange: _v0 => _v1(_v0.value[0]),
            placeholder: _v9.SelectWorkspace,
            size: "md",
            value: [_v6],
            children: _v16
          })
        }), (0, _v1.jsx)(_v5.HStack, {
          justifyContent: "end",
          children: (0, _v1.jsx)(_v14.RoleSelector, {
            allowedRoles: _v10,
            borderRadius: "md",
            height: (0, _v6.rem)(40),
            onRoleChange: _v0,
            selectedRole: _v5
          })
        })]
      })]
    });
  }]);
}