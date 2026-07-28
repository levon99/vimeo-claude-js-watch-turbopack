{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8() {
    let {
        mutate: _v0
      } = (0, _v6.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v7.useGctlConfig)(),
      [_v5, _v6] = (0, _v4.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/versions/${_v0.where.versionId}/restore${(0, _v4.serializeQuery)(_v0)}`, (0, _v5.postVideoVersionRestore)({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v3.default.env.STORYBOOK && (0, _v4.assignMswData)(_v8, {
    endpoint: "/videos/:videoId/versions/:versionId/restore",
    method: "POST"
  });
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["useRestoreVersion", 0, () => {
    let _v0 = (0, _v2.useToast)(),
      {
        addNewVersion: _v1,
        versionList: _v2
      } = (0, _v10.useVersionsStore)(_v0 => ({
        addNewVersion: _v0.addNewVersion,
        versionList: _v0.versionList
      })),
      [_v3, {
        error: _v4,
        loading: _v5,
        called: _v6,
        data: _v7
      }] = _v8(),
      _v8 = "restore-version-toast";
    return (0, _v1.useEffect)(() => {
      _v7 && _v2.length > 0 && (0, _v12.idFromUri)(_v2[0].uri) < (0, _v12.idFromUri)(_v7.uri) && _v1(_v7);
    }, [_v7, _v1, _v2]), (0, _v1.useEffect)(() => {
      _v6 && !_v5 && (_v4 ? _v0({
        id: _v8,
        title: (0, _v9.translate)({
          singular: "Unable to restore",
          dictionary: {
            es: {
              singular: "No se puede restaurar"
            },
            "de-DE": {
              singular: "Wiederherstellung nicht möglich"
            },
            "fr-FR": {
              singular: "Restauration impossible"
            },
            "ja-JP": {
              singular: "復元できません"
            },
            "ko-KR": {
              singular: "복원할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível restaurar"
            },
            "zh-CN": {
              singular: "无法恢复"
            }
          }
        }),
        duration: _v12.TOAST_DURATION,
        isClosable: !1,
        variant: "warning"
      }) : _v0.isActive(_v8) || _v0({
        id: _v8,
        title: (0, _v9.translate)({
          singular: "Version restored",
          dictionary: {
            es: {
              singular: "Versión restaurada"
            },
            "de-DE": {
              singular: "Version wiederhergestellt"
            },
            "fr-FR": {
              singular: "Version restaurée"
            },
            "ja-JP": {
              singular: "バージョンを復元しました"
            },
            "ko-KR": {
              singular: "버전이 복원되었습니다."
            },
            "pt-BR": {
              singular: "Versão restaurada"
            },
            "zh-CN": {
              singular: "版本已恢复"
            }
          }
        }),
        duration: _v12.TOAST_DURATION,
        isClosable: !1
      }));
    }, [_v6, _v5, _v4, _v0]), {
      restoreVersion: (_v0, _v1) => _v3({
        where: {
          videoId: _v0,
          versionId: _v1
        },
        headers: {
          Accept: _v11.API_ACCEPT_HEADER
        },
        select: _v11.VIDEO_VERSION_FIELDS
      }),
      isRestoreInProgress: _v5,
      isRestoreCalled: _v6,
      restoredVersion: _v7
    };
  }], 0);
}