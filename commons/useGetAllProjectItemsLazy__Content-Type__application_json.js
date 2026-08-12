{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
      pending: !1,
      loading: !0,
      complete: !1,
      projectItems: [],
      currentPage: 1,
      totalPages: 1,
      error: void 0
    },
    _v6 = (_v0, _v1) => {
      switch (_v1.type) {
        case 0:
          return {
            ..._v0,
            projectItems: _v0.projectItems.concat(_v1.payload.projectItems),
            complete: !0,
            loading: !1,
            pending: !1
          };
        case 2:
          return {
            ..._v0,
            projectItems: _v0.projectItems.concat(_v1.payload.projectItems),
            totalPages: _v1.payload.totalPages,
            currentPage: _v1.payload.nextPage,
            pending: !1
          };
        case 1:
          return {
            ..._v0,
            error: _v1.payload.error,
            complete: !0,
            loading: !1,
            pending: !1
          };
        case 3:
          return {
            ..._v0,
            pending: !0
          };
        case 4:
          return _v5;
        default:
          return _v0;
      }
    };
  _v0.s(["useGetAllProjectItemsLazy", 0, _v0 => {
    let _v1 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v2,
        xVimeoPage: _v3,
        jwt: _v4,
        locale: _v5
      } = (0, _v3.useGctlConfig)(),
      _v6 = (0, _v4.usePrevious)(_v1?.where.userId),
      [_v7, _v8] = (0, _v1.useReducer)(_v6, _v5),
      _v9 = (0, _v1.useRef)(void 0);
    return (0, _v1.useEffect)(() => {
      _v6 !== _v1?.where.userId && (_v9.current && (_v9.current.abort(), _v9.current = void 0), _v8({
        type: 4
      }));
    }, [_v6, _v1?.where.userId]), {
      getProjectItems: (0, _v1.useCallback)(async () => {
        let _v0 = [];
        _v9.current = new AbortController();
        for (let _v0 = _v7.currentPage; _v0 <= _v7.currentPage + 3 && !(_v0 > _v7.totalPages); _v0++) if (_v1) {
          let _v0 = (0, _v2.getUserProjectItems)({
            ..._v1,
            baseUrl: _v2,
            query: {
              ..._v1.query,
              page: _v0,
              perPage: 100
            },
            headers: {
              ..._v1.headers,
              "Content-Type": "application/json",
              Authorization: _v4 ? `jwt ${_v4}` : "",
              "Vimeo-Page": `${_v3}`,
              "Accept-Language": _v5 ?? "en"
            },
            signal: _v9.current?.signal
          });
          _v0.push(_v0);
        }
        try {
          let _v0, _v1, _v2, _v3;
          _v8({
            type: 3
          });
          let _v4 = (await Promise.all(_v0)).reduce((_v0, _v1) => ({
              totalPages: Math.ceil(_v1.total / 100),
              projectItems: _v0.projectItems.concat(_v1.data),
              lastPage: _v1.page > _v0.lastPage ? _v1.page : _v0.lastPage
            }), {
              totalPages: 1,
              projectItems: [],
              lastPage: 1
            }),
            _v5 = _v4.lastPage === _v4.totalPages ? (_v0 = _v4.projectItems, {
              type: 0,
              payload: {
                projectItems: _v0
              }
            }) : (_v1 = _v4.projectItems, _v2 = _v4.lastPage + 1, _v3 = _v4.totalPages, {
              type: 2,
              payload: {
                projectItems: _v1,
                nextPage: _v2,
                totalPages: _v3
              }
            });
          _v8(_v5);
        } catch (_v0) {
          if ("AbortError" === _v0.name) return;
          _v8({
            type: 1,
            payload: {
              error: _v0 instanceof Error ? _v0 : Error("Something went wrong.")
            }
          });
        }
      }, [_v2, _v4, _v5, _v1, _v7.currentPage, _v7.totalPages, _v3]),
      state: _v7
    };
  }], 0), _v0.s(["getAllSubfoldersOptions", 0, (_v0, _v1) => {
    if (!_v0 || !_v1) return null;
    let _v2 = _v1.uri.split("/");
    return {
      where: {
        userId: parseInt(_v2[2]),
        projectId: parseInt(_v2[4])
      },
      query: {
        filter: "folder"
      },
      select: ["folder.isPrivateToUser", "folder.metadata.connections.folders.total", "folder.metadata.connections.ancestorPath", "folder.privacy", "folder.name", "folder.uri"]
    };
  }, "getUserItemsInfiniteOptions", 0, (_v0, _v1) => _v1 ? {
    query: {
      filter: "folder",
      perPage: 20,
      query: _v1,
      queryFields: "title"
    },
    select: ["folder.isPrivateToUser", "folder.metadata.connections.ancestorPath", "folder.metadata.connections.folders.total", "folder.metadata.interactions.invite.uri", "folder.privacy", "folder.name", "folder.uri"],
    where: {
      userId: _v0
    }
  } : null, "getUserProjectsInfiniteOptions", 0, (_v0, _v1, _v2, _v3) => _v1 || _v3 ? null : {
    query: {
      ...(_v2 ?? {
        excludePrivateToMeFolder: !0
      }),
      perPage: 20,
      topLevelOnly: !0,
      permissionAction: "folder.view"
    },
    select: ["isPrivateToUser", "metadata.connections.ancestorPath", "metadata.connections.folders.total", "metadata.connections.folders.uri", "privacy", "name", "uri"],
    where: {
      userId: _v0
    }
  }], 0);
}