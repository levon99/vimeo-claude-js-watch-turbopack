{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v0 => ["asc", "desc"].includes(_v0 ?? ""),
    _v9 = _v0 => ["name", "role", "role_and_name"].includes(_v0 ?? "");
  _v0.s(["useOrganizationMembersWithFilters", 0, ({
    organizationUuid: _v0
  }) => {
    let _v1 = (0, _v1.useSearchParams)(),
      _v2 = (0, _v1.usePathname)(),
      {
        replace: _v3
      } = (0, _v2.useRouter)(),
      {
        resetSelection: _v4
      } = (0, _v7.useSelectionContext)(),
      _v5 = _v1.get("page"),
      _v6 = _v1.get("query"),
      _v7 = _v1.get("sort"),
      _v8 = _v1.get("direction"),
      _v9 = _v1.get("roles"),
      _v10 = _v1.get("workspaces"),
      _v11 = _v1.get("status"),
      _v12 = (0, _v3.useMemo)(() => _v5 && parseInt(_v5) ? parseInt(_v5) : 1, [_v5]),
      _v13 = (0, _v3.useMemo)(() => _v6 && _v6?.trim() !== "" ? _v6?.trim() : void 0, [_v6]),
      _v14 = (0, _v3.useMemo)(() => _v9(_v7) ? _v7 : void 0, [_v7]),
      _v15 = (0, _v3.useMemo)(() => _v8(_v8) ? _v8 : "asc", [_v8]),
      _v16 = (0, _v3.useMemo)(() => (0, _v6.validateRolesFilterParam)(_v9, _v5.ORG_MEMBERS_ROLES_FILTER_VALUES), [_v9]),
      _v17 = (0, _v3.useMemo)(() => (_v0 => {
        if (!_v0) return;
        let _v1 = _v0.split(",").map(_v0 => _v0.trim()).filter(_v0 => {
          try {
            if ("none" === _v0) return !0;
            let {
              workspaceUuid: _v0
            } = (0, _v6.parseWorkspaceUri)(_v0);
            return !!_v0;
          } catch {
            return !1;
          }
        });
        return _v1.sort(), _v1.length > 0 ? _v1 : void 0;
      })(_v10), [_v10]),
      _v18 = (0, _v3.useMemo)(() => (0, _v6.validateStatusFilterParam)(_v11), [_v11]),
      _v19 = (0, _v3.useMemo)(() => ({
        page: _v12,
        query: _v13,
        sort: _v14,
        direction: _v15,
        roles: _v16,
        workspaceUris: _v17,
        inviteStatus: _v18
      }), [_v12, _v13, _v14, _v15, _v16, _v17, _v18]),
      _v20 = _v1.toString(),
      _v21 = (0, _v3.useCallback)(_v0 => {
        let _v1 = new URLSearchParams(_v20);
        _v0 > 1 ? _v1.set("page", _v0.toString()) : _v1.delete("page"), _v4(), _v3((0, _v6.buildUrlWithSearchParams)(_v2, _v1), void 0, {
          shallow: !0
        });
      }, [_v3, _v2, _v20, _v4]),
      _v22 = (0, _v3.useCallback)(_v0 => {
        let _v1 = new URLSearchParams(_v20),
          _v2 = _v1.get("query"),
          _v3 = !1;
        (_v2?.trim() ?? "") !== _v0.trim() && (_v1.set("query", _v0), _v3 = !0), "" === _v0.trim() && (_v1.delete("query"), _v3 = !0), _v3 && (_v1.delete("sort"), _v1.delete("direction"), _v1.delete("page")), _v4(), _v3((0, _v6.buildUrlWithSearchParams)(_v2, _v1), void 0, {
          shallow: !0
        });
      }, [_v3, _v2, _v20, _v4]),
      _v23 = (0, _v3.useCallback)(_v0 => {
        let _v1 = new URLSearchParams(_v20);
        if (_v9(_v0)) {
          let _v0 = _v1.get("sort");
          if (_v0 && _v0 === _v0) {
            let _v0 = _v1.get("direction"),
              _v1 = _v8(_v0) && "desc" === _v0 ? "asc" : "desc";
            _v1.set("direction", _v1);
          } else _v1.set("sort", _v0), _v1.set("direction", "desc");
        } else _v1.delete("sort"), _v1.delete("direction");
        _v1.delete("page"), _v4(), _v3((0, _v6.buildUrlWithSearchParams)(_v2, _v1), void 0, {
          shallow: !0
        });
      }, [_v3, _v2, _v20, _v4]),
      _v24 = (0, _v3.useCallback)((_v0, _v1) => {
        let _v2 = new URLSearchParams(_v20);
        _v0.includes("workspaces") && (Array.isArray(_v1.workspaces) ? 0 === _v1.workspaces.length ? _v2.delete("workspaces") : _v2.set("workspaces", _v1.workspaces.join(",")) : _v2.delete("workspaces")), _v0.includes("roles") && (Array.isArray(_v1.roles) && _v1.roles && 0 !== _v1.roles.length ? _v2.set("roles", _v1.roles.join(",")) : _v2.delete("roles")), _v0.includes("status") && (Array.isArray(_v1.status) && _v1.status && 0 !== _v1.status.length ? _v2.set("status", _v1.status.join(",")) : _v2.delete("status")), _v0.length > 0 && (_v2.delete("page"), _v2.delete("sort"), _v2.delete("direction"), _v2.delete("query")), _v3((0, _v6.buildUrlWithSearchParams)(_v2, _v2), void 0, {
          shallow: !0
        }), _v4();
      }, [_v3, _v2, _v20, _v4]),
      _v25 = (0, _v4.useGetOrganizationMembers)(() => _v0 ? {
        where: {
          orgUuid: _v0
        },
        select: ["email", "inviteUrl", "recentlyReminded", "permissionLevel", "role", "status", "uri", "excludeSso", "user.name", "user.pictures.sizes.link", "user.uri"],
        query: {
          page: _v12,
          query: _v13,
          sort: _v14,
          direction: _v15,
          roles: _v16,
          workspaceUris: _v17,
          inviteStatus: 1 === _v18.length ? _v18[0] : void 0,
          perPage: _v5.ORG_MEMBERS_PER_PAGE_ITEM_COUNT
        }
      } : null, {
        revalidateOnFocus: !1
      });
    return (0, _v3.useMemo)(() => ({
      ..._v25,
      handleSetPageTo: _v21,
      handleQueryBy: _v22,
      toggleSortBy: _v23,
      handleFiltersChange: _v24,
      parsedFilters: _v19
    }), [_v25, _v21, _v22, _v23, _v24, _v19]);
  }]);
}