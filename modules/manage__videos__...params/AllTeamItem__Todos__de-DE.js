{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["AllTeamItem", 0, ({
    currentPermissions: _v0,
    assignedPermission: _v1,
    applicablePermissionPolicies: _v2,
    interactions: _v3,
    updatePermission: _v4,
    removePermission: _v5,
    isLoading: _v6
  }) => {
    let _v7 = (0, _v6.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.totalTeamMembers),
      _v8 = (0, _v2.translate)({
        singular: "All",
        dictionary: {
          es: {
            singular: "Todos"
          },
          "de-DE": {
            singular: "Alle"
          },
          "fr-FR": {
            singular: "Tout"
          },
          "ja-JP": {
            singular: "すべて"
          },
          "ko-KR": {
            singular: "모두"
          },
          "pt-BR": {
            singular: "Tudo"
          },
          "zh-CN": {
            singular: "全部"
          }
        }
      }),
      _v9 = _v7 ?? 0,
      _v10 = (0, _v2.translate)({
        singular: "{COUNT} member",
        plural: "{COUNT} members",
        count: _v9,
        replacements: {
          COUNT: _v9
        },
        dictionary: {
          es: {
            singular: "{COUNT} miembro",
            plural: "{COUNT} miembros"
          },
          "de-DE": {
            singular: "{COUNT} Mitglied",
            plural: "{COUNT} Mitglieder"
          },
          "fr-FR": {
            singular: " {COUNT} membre",
            plural: "{COUNT} membres"
          },
          "ja-JP": {
            singular: "{COUNT} 人のメンバー",
            plural: "メンバー{COUNT}人"
          },
          "ko-KR": {
            singular: "회원 {COUNT}명",
            plural: "멤버 {COUNT}명"
          },
          "pt-BR": {
            singular: "{COUNT} membro",
            plural: "{COUNT} membros"
          },
          "zh-CN": {
            singular: "{COUNT} 名成员",
            plural: "{COUNT} 名成员"
          }
        }
      });
    return (0, _v1.jsx)(_v3.ItemBox, {
      iconBox: (0, _v1.jsx)(_v7.AllTeamIcon, {}),
      headerTitle: _v8,
      subHeaderTitle: _v10,
      rightTrigger: _v3?.remove ? (0, _v1.jsx)(_v4.ResourceShareModalRoleMenu, {
        onDelete: _v5,
        onSelect: _v4,
        applicablePermissionPolicies: _v2,
        assignedPermission: _v1,
        currentPermissions: _v0,
        canBeRemoved: !!_v3?.remove,
        isLoading: _v6
      }) : (0, _v1.jsx)(_v5.RoleMenuHeader, {
        children: _v0.displayName
      })
    });
  }], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["TeamGroupItem", 0, _v0 => {
    let {
        teamEntity: _v1,
        currentPermissions: _v2,
        assignedPermission: _v3,
        applicablePermissionPolicies: _v4,
        interactions: _v5,
        isLoading: _v6,
        updatePermission: _v7,
        removePermission: _v8
      } = _v0,
      _v9 = (0, _v6.useGlobalStore)(({
        screen: _v0
      }) => _v0.main),
      _v10 = (0, _v8.useContext)(_v9.ViewerContext),
      _v11 = (0, _v2.translate)({
        singular: "{COUNT} member",
        plural: "{COUNT} members",
        count: _v1.metadata.connections.teamGroup?.totalUsers,
        replacements: {
          COUNT: _v1.metadata.connections.teamGroup?.totalUsers
        },
        dictionary: {
          es: {
            singular: "{COUNT} miembro",
            plural: "{COUNT} miembros"
          },
          "de-DE": {
            singular: "{COUNT} Mitglied",
            plural: "{COUNT} Mitglieder"
          },
          "fr-FR": {
            singular: " {COUNT} membre",
            plural: "{COUNT} membres"
          },
          "ja-JP": {
            singular: "{COUNT} 人のメンバー",
            plural: "メンバー{COUNT}人"
          },
          "ko-KR": {
            singular: "회원 {COUNT}명",
            plural: "멤버 {COUNT}명"
          },
          "pt-BR": {
            singular: "{COUNT} membro",
            plural: "{COUNT} membros"
          },
          "zh-CN": {
            singular: "{COUNT} 名成员",
            plural: "{COUNT} 名成员"
          }
        }
      }),
      _v12 = _v1.metadata.connections.user?.uri === _v10?.user?.uri;
    return (0, _v1.jsx)(_v3.ItemBox, {
      iconBox: (0, _v1.jsx)(_v11.GroupIcon, {}),
      headerTitle: _v1.displayName ?? "",
      subHeaderTitle: _v11,
      rightTrigger: _v2 ? _v12 || _v9 === _v10.ShareModalState.InheritedAccessList ? (0, _v1.jsx)(_v5.RoleMenuHeader, {
        children: _v2.displayName
      }) : _v4 && _v4.length > 0 ? (0, _v1.jsx)(_v4.ResourceShareModalRoleMenu, {
        onDelete: _v8,
        onSelect: _v7,
        applicablePermissionPolicies: _v4,
        currentPermissions: _v2,
        assignedPermission: _v3,
        canBeRemoved: !!_v5.remove,
        isLoading: _v6
      }) : null : null
    });
  }], 0);
}