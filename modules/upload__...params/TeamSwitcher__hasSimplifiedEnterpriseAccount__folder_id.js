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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  _v0.s(["TeamSwitcher", 0, ({
    selectTeam: _v0,
    selectFolder: _v1,
    selectedTeamId: _v2,
    selectedFolder: _v3,
    isLoading: _v4,
    teams: _v5,
    disabled: _v6,
    onTeamsDropdownShown: _v7
  }) => {
    let _v8 = (0, _v8.useIsBokeh)(),
      _v9 = (0, _v2.useContext)(_v18.ViewerContext),
      _v10 = _v5.find(_v0 => _v0.id === _v2),
      _v11 = (0, _v2.useRef)(null),
      _v12 = _v10 ? _v10.id : _v9?.user?.id,
      {
        capabilities: {
          hasSimplifiedEnterpriseAccount: _v13
        },
        loading: _v14
      } = (0, _v7.useCapability)(["hasSimplifiedEnterpriseAccount"]),
      _v15 = !_v14 && !_v13,
      _v16 = _v2 !== _v11.current,
      _v17 = new URLSearchParams(window.location.search).get("folder_id"),
      {
        data: _v18,
        isValidating: _v19
      } = (0, _v11.useGetUserProject)(() => _v12 && _v17 ? {
        where: {
          userId: _v12,
          projectId: parseInt(_v17)
        },
        select: ["isPrivateToUser", "metadata.connections.ancestorPath", "metadata.connections.folders.total", "metadata.connections.folders.uri", "metadata.interactions.uploadVideo.uri", "privacy", "user", "name", "uri"]
      } : null),
      {
        data: _v20
      } = (0, _v12.useGetUserTeam)(() => _v12 ? {
        where: {
          userId: _v12
        },
        select: ["pictures.sizes"],
        query: {
          sizes: "40"
        }
      } : null),
      _v21 = _v20?.pictures?.sizes?.[0]?.link,
      {
        data: _v22,
        isValidating: _v23,
        error: _v24
      } = (0, _v10.useGetUserFoldersDefault)(() => _v12 ? {
        where: {
          userId: _v12
        },
        select: ["isPrivateToUser", "metadata.connections.ancestorPath", "metadata.connections.folders.total", "metadata.connections.folders.uri", "privacy", "name", "uri"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v25 = !!(_v18 && _v18.metadata?.interactions.uploadVideo?.uri);
    return (0, _v2.useEffect)(() => {
      _v18 && _v18.user?.uri === `/users/${_v2}` && _v25 && _v1(_v18);
    }, [_v18, _v2, _v25, _v1]), (0, _v2.useEffect)(() => {
      !_v23 && (_v22 || _v24) && _v16 && (_v24 && 410 === _v24.status && _v1(null), _v22 && _v1(_v22), _v11.current = _v2);
    }, [_v2, _v1, _v22, _v23, _v24, _v16]), (0, _v1.jsxs)(_v4.Flex, {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "md",
      position: "relative",
      left: "0",
      right: "0",
      flexDirection: ["column", "row"],
      gap: "md",
      className: "notranslate",
      children: [_v15 && _v10 && (_v8 ? (0, _v1.jsx)(_v15.TeamListDropdownBokeh, {
        items: _v5,
        selectedId: _v10.id,
        selectItem: _v0,
        onOpenChange: ({
          open: _v0
        }) => _v0 && _v7?.(_v10)
      }) : (0, _v1.jsx)(_v14.TeamListDropdown, {
        disabled: _v6,
        isLoading: _v4,
        icon: _v21 ? (0, _v1.jsx)(_v3.Box, {
          maxWidth: (0, _v6.rem)(42),
          maxHeight: (0, _v6.rem)(30),
          children: (0, _v1.jsx)("img", {
            width: "100%",
            height: "100%",
            src: _v21,
            alt: "team-logo"
          })
        }) : _v10 ? (0, _v1.jsx)(_v3.Box, {
          maxWidth: (0, _v6.rem)(42),
          maxHeight: (0, _v6.rem)(30),
          children: (0, _v1.jsx)(_v16.TeamLogo, {
            label: _v10.title
          })
        }) : null,
        items: _v5,
        selectedId: _v10.id,
        selectItem: _v0,
        onDropdownShown: () => _v7?.(_v10)
      })), (0, _v1.jsxs)(_v4.Flex, {
        alignItems: "center",
        flexDirection: ["column", "row"],
        gap: "md",
        children: [!!(_v5.length && _v15 && _v10) && (0, _v1.jsx)(_v5.Paragraph, {
          size: "lg",
          children: `${(0, _v13.translate)({
            singular: "to",
            dictionary: {
              es: {
                singular: "a"
              },
              "de-DE": {
                singular: "An"
              },
              "fr-FR": {
                singular: "À"
              },
              "ja-JP": {
                singular: "送信先"
              },
              "ko-KR": {
                singular: "대상"
              },
              "pt-BR": {
                singular: "Para"
              },
              "zh-CN": {
                singular: "至"
              }
            }
          })}`
        }), (0, _v1.jsx)(_v9.FolderSelect, {
          disabled: _v6,
          userId: _v12 || 0,
          isLoading: _v23 && _v19,
          selectedFolder: _v3,
          selectedFolderURI: _v3?.uri ?? null,
          permissionAction: "folder.upload_video",
          canSelectRoot: _v9?.user?.id === _v2 || _v10?.role === _v17.TeamUserPermissionLevel.Admin,
          onChange: _v1
        })]
      })]
    });
  }]);
}