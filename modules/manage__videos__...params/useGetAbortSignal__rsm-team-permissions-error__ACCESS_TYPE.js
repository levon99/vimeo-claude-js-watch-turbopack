{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ({
    query: _v0
  }) => {
    let _v1 = (0, _v1.useRef)(_v0),
      _v2 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      !_v0 && _v2.current instanceof AbortController && _v2.current.abort();
    }, [_v0]), (0, _v1.useEffect)(() => () => {
      _v2.current?.abort();
    }, []), {
      getAbortSignal: () => (_v0 && _v1.current !== _v0.trim() && (_v1.current = _v0, _v2.current instanceof AbortController && _v2.current.abort(), _v2.current = new AbortController()), _v2.current?.signal)
    };
  };
  _v0.s(["useGetAbortSignal", 0, _v9], 0);
  let _v10 = "rsm-team-permissions-error";
  _v0.s(["ACCESS_TYPE", 0, {
    ANY: "any",
    EXPLICIT: "explicit",
    INHERITED: "inherited"
  }, "useGetTeamPermissions", 0, ({
    query: _v0,
    shouldSkip: _v1
  }) => {
    let _v2 = _v0?.query ?? "",
      {
        resourceType: _v3,
        resourceId: _v4
      } = (0, _v7.useGlobalStore)((0, _v2.useShallow)(({
        resourceProps: _v0
      }) => ({
        resourceType: _v0.resourceType,
        resourceId: _v0.data.id
      }))),
      _v5 = (0, _v7.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasMultiUserSharing),
      _v6 = (0, _v3.useToast)(),
      {
        getAbortSignal: _v7
      } = _v9({
        query: _v2
      }),
      {
        data: _v8,
        isValidating: _v9,
        isLoading: _v10,
        mutate: _v11,
        size: _v12,
        setSize: _v13,
        error: _v14
      } = (0, _v4.useGetResourceResourceIdTeamPermissionsInfinite)(() => {
        let _v0 = _v6.RESOURCE_TYPE_API_MAP[_v3];
        return _v1 instanceof Function && _v1() || !_v0 ? null : {
          select: [..._v6.TEAM_PERMISSIONS_FIELD, ...(_v5 ? ["assignedPermissionPolicy.uri", "assignedPermissionPolicy.name", "assignedPermissionPolicy.displayName"] : [])],
          query: {
            ..._v0
          },
          where: {
            resourceType: _v0,
            resourceId: _v4
          },
          headers: {
            Accept: _v6.API_ACCEPT_HEADER
          },
          signal: _v7()
        };
      }, {
        ..._v6.API_REVALIDATE_OPTIONS,
        errorRetryCount: 3,
        revalidateFirstPage: !1
      });
    (0, _v1.useEffect)(() => {
      _v14?.name !== _v6.ABORT_ERROR && _v14 && (console.error(_v14), _v6.isActive(_v10) || _v6({
        title: (0, _v5.translate)({
          singular: "Oops! Something went wrong!",
          dictionary: {
            es: {
              singular: "¡Ups, algo salió mal!"
            },
            "de-DE": {
              singular: "Hoppla, hier ist was schief gegangen!"
            },
            "fr-FR": {
              singular: "Oups ! Quelque chose a planté !"
            },
            "ja-JP": {
              singular: "エラーが発生しました！"
            },
            "ko-KR": {
              singular: "죄송합니다. 문제가 발생했습니다."
            },
            "pt-BR": {
              singular: "Opa! Alguma coisa deu errado!"
            },
            "zh-CN": {
              singular: "哎呀！出错了！"
            }
          }
        }),
        id: _v10
      }));
    }, [_v14, _v6]);
    let _v15 = (0, _v1.useMemo)(() => {
        if (_v8) {
          let _v0 = _v8.filter(_v0 => !!_v0).flatMap(_v0 => _v2 ? _v0.data.filter(_v0 => (0, _v8.permissionsBySearchKeywordFilter)(_v0.teamEntity, _v2)).flatMap(_v0 => _v0) : _v0.data.flatMap(_v0 => _v0));
          return {
            ..._v8[_v8.length - 1],
            data: _v0 ?? []
          };
        }
      }, [_v8, _v2]),
      _v16 = !!_v8,
      _v17 = !!_v14,
      _v18 = !_v8?.[_v8?.length - 1]?.paging.next,
      _v19 = _v12 > 0 && _v16 && void 0 === _v8[_v12 - 1],
      _v20 = !_v18 && !_v10 && !_v19,
      _v21 = (0, _v1.useCallback)(() => {
        _v19 || _v13(_v12 + 1);
      }, [_v19, _v13, _v12]);
    return {
      teamPermissions: _v15,
      isInitLoading: _v10 && (!_v16 && !_v17 || _v14),
      canLoadMore: _v20,
      isValidating: _v9,
      isDone: _v18,
      isLoadingMore: _v19 && !_v14,
      loadMoreTeamPermissions: _v21,
      revalidateTeamPermissions: _v11,
      page: _v12
    };
  }], 0);
}