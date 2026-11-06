{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v3.measureLatency)("getUserProjectVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/videos?${(0, _v4.searchQueryString)(_v4)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v6({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    ..._v4
  }) {
    return (0, _v3.measureLatency)("putUserProjectVideos", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/videos`, {
        ..._v4,
        method: "PUT",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v7({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    ..._v4
  }) {
    return (0, _v3.measureLatency)("deleteUserProjectVideos", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/videos`, {
        ..._v4,
        method: "DELETE",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  _v0.s(["deleteUserProjectVideos", 0, _v7, "getUserProjectVideos", 0, _v5, "putUserProjectVideos", 0, _v6], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = /^\/(?:user|users)\/(\d+)\/(?:folder|folders|projects)\/(\d+)\/?$/,
    _v14 = /^\/manage\/folders\/(\d+)\/?$/,
    _v15 = async (_v0, _v1) => {
      let _v2 = await _v5({
        baseUrl: _v1.baseUrl,
        where: {
          userId: _v0.ownerId,
          projectId: _v0.folderId
        },
        select: ["uri"],
        query: {
          filterPrivacy: "private,unlisted,password,team,hide-from-vimeo",
          perPage: 1
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: _v1.jwt ? `jwt ${_v1.jwt}` : "",
          "Vimeo-Page": `${_v1.xVimeoPage}`,
          "Accept-Language": _v1.locale ?? "en"
        }
      });
      return null != _v2 && _v2.total > 0;
    };
  _v0.s(["useFolderProtectedVideosWarning", 0, () => {
    let _v0 = (0, _v9.useOrionSetting)("sharing_folders"),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      _v5 = (0, _v10.useViewer)(),
      {
        logError: _v6
      } = (0, _v11.useErrorTracking)(),
      _v7 = _v5?.teamUser?.ownerId ?? _v5?.user?.id;
    return {
      warnIfProtectedVideos: (0, _v1.useCallback)(_v0 => {
        if (!_v0) return;
        let _v1 = ((_v0, _v1) => {
          try {
            let {
                pathname: _v0
              } = new URL(_v0, _v2.safeWindow?.location.origin),
              _v1 = _v0.match(_v13);
            if (null !== _v1) return {
              ownerId: Number(_v1[1]),
              folderId: Number(_v1[2])
            };
            let _v2 = _v0.match(_v14);
            if (null !== _v2 && void 0 !== _v1) return {
              ownerId: _v1,
              folderId: Number(_v2[1])
            };
            return null;
          } catch {
            return null;
          }
        })(_v0, _v7);
        if (null === _v1) return void _v6(Error("Unable to resolve folder for the protected-videos check"), {
          additionalData: {
            folderUrl: _v0
          }
        });
        if ((0, _v12.readWarnedFolderIds)().includes(_v1.folderId)) return;
        let _v2 = _v12.useFolderProtectedVideosWarningStore.getState().protectedVideosByFolder.get(_v1.folderId);
        if (!1 === _v2) return;
        let _v3 = _v12.useFolderProtectedVideosWarningStore.getState().startRequest();
        !0 === _v2 ? _v12.useFolderProtectedVideosWarningStore.getState().showWarning(_v1.folderId, _v3) : _v15(_v1, {
          baseUrl: _v1,
          jwt: _v2,
          xVimeoPage: _v3,
          locale: _v4
        }).then(_v0 => {
          let _v1 = _v12.useFolderProtectedVideosWarningStore.getState();
          _v1.recordCheck(_v1.folderId, _v0), _v0 && _v1.showWarning(_v1.folderId, _v3);
        }).catch(_v0 => {
          _v6(_v0 instanceof Error ? _v0 : Error(String(_v0)), {
            additionalData: {
              action: "folder-protected-videos-warning"
            }
          });
        });
      }, [_v0, _v7, _v1, _v2, _v3, _v4, _v6])
    };
  }], 0);
}