{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getDisplayRoleMapping", 0, () => {
    let _v0 = (0, _v2.getTranslations)();
    return {
      [_v1.ORGANIZATION_ROLES.OWNER]: _v0.OrganizationOwnerRole,
      [_v1.ORGANIZATION_ROLES.ADMIN]: _v0.OrganizationAdminRole
    };
  }, "getRolesForRoleSelector", 0, () => {
    let _v0 = (0, _v2.getTranslations)();
    return [{
      description: _v0.ViewerDescription,
      label: _v0.ViewerLabel,
      value: _v1.ALLOWED_ROLES_FOR_INVITE.VIEWER
    }, {
      description: _v0.ContributorDescription,
      label: _v0.ContributorLabel,
      value: _v1.ALLOWED_ROLES_FOR_INVITE.CONTRIBUTOR
    }, {
      description: _v0.ContributorPlusDescription,
      label: _v0.ContributorPlusLabel,
      value: _v1.ALLOWED_ROLES_FOR_INVITE.CONTRIBUTOR_PLUS
    }, {
      description: _v0.AdminDescription,
      label: _v0.AdminLabel,
      value: _v1.ALLOWED_ROLES_FOR_INVITE.ADMIN
    }];
  }], 0);
  var _v3 = _v0.i(0),
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
    _v14 = _v0.i(0);
  _v0.s(["RoleSelector", 0, function ({
    allowedRoles: _v0,
    onRoleChange: _v1,
    selectedRole: _v2,
    isDisabled: _v3 = !1,
    isLoading: _v4 = !1,
    menuProps: _v5,
    ..._v6
  }) {
    let _v7 = _v0.find(_v0 => _v0.value === _v2);
    return (0, _v3.jsxs)(_v6.Menu, {
      placement: "bottom-end",
      ..._v5,
      children: [(0, _v3.jsx)(_v7.MenuButton, {
        as: _v4.Button,
        isDisabled: _v3,
        isLoading: _v4,
        rightIcon: (0, _v3.jsx)(_v14.ChevronDownSmall, {}),
        variant: "secondary",
        size: "sm",
        ..._v6,
        children: (0, _v3.jsx)(_v11.Text, {
          variant: "heading-xs",
          children: _v7?.label
        })
      }), (0, _v3.jsx)(_v9.MenuList, {
        height: (0, _v10.rem)(332),
        position: "relative",
        children: _v0.map(_v0 => {
          let _v1;
          return (0, _v3.jsx)(_v8.MenuItem, {
            onClick: (_v1 = _v0.value, () => {
              _v1 !== _v2 && _v1(_v1);
            }),
            style: {
              whiteSpace: "normal"
            },
            children: (0, _v3.jsxs)(_v5.HStack, {
              gap: (0, _v10.rem)(10),
              children: [(0, _v3.jsxs)(_v12.VStack, {
                alignItems: "flex-start",
                gap: "0",
                maxW: (0, _v10.rem)(294),
                children: [(0, _v3.jsx)(_v11.Text, {
                  variant: "heading-xs",
                  children: _v0.label
                }), (0, _v3.jsx)(_v11.Text, {
                  color: "text-secondary",
                  fontWeight: "350",
                  variant: "body-md",
                  children: _v0.description
                })]
              }), _v2 === _v0.value && (0, _v3.jsx)(_v13.Checkmark, {
                boxSize: (0, _v10.rem)(20)
              })]
            })
          }, _v0.value);
        })
      })]
    });
  }], 0);
}