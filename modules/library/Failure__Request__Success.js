{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = ((_v1 = _v5 || {})[_v1.Failure = 0] = "Failure", _v1[_v1.Request = 1] = "Request", _v1[_v1.Success = 2] = "Success", _v1);
  let _v6 = (_v0, _v1) => {
      switch (_v1.type) {
        case 0:
          return {
            ..._v0,
            error: _v1.payload,
            loading: !1
          };
        case 1:
          return {
            ..._v0,
            called: !0,
            loading: !0
          };
        case 2:
          return {
            ..._v0,
            error: null,
            loading: !1
          };
      }
    },
    _v7 = {
      called: !1,
      error: null,
      loading: !1
    },
    _v8 = (0, _v4.translate)({
      singular: "Something went wrong. Please try again.",
      dictionary: {
        es: {
          singular: "Algo salió mal. Inténtalo de nuevo."
        },
        "de-DE": {
          singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
        },
        "fr-FR": {
          singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
        },
        "ja-JP": {
          singular: "エラーが発生しました。 再度お試しください。"
        },
        "ko-KR": {
          singular: "문제가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Alguma coisa deu errado. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "出错了。请重试。"
        }
      }
    });
  _v0.s(["useMoveItem", 0, () => {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v3.useGctlConfig)(),
      [_v4, _v5] = (0, _v2.useReducer)(_v6, _v7);
    return [(0, _v2.useCallback)(async ({
      folderId: _v0,
      ownerId: _v1,
      moveToRoot: _v2,
      moveToWorkspace: _v3,
      targetItems: _v4
    }) => {
      if ((_v0 || _v3) && _v1 && _v4) {
        _v5({
          type: 1
        });
        try {
          let _v0;
          if (_v2) _v0 = await fetch(`${_v0}/users/${_v1}/projects/${_v0}/items?uris=${_v4.map(_v0 => _v0.uri).join(",")}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: _v1 ? `jwt ${_v1}` : "",
              "Vimeo-Page": `${_v2}`,
              "Accept-Language": _v3 ?? "en"
            },
            method: "DELETE"
          });else if (_v3) {
            let _v0 = {
              items: _v4
            };
            _v0 && (_v0.destination_folder_id = _v0), _v0 = await fetch(`${_v0}/workspaces/${_v1}/items`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: _v1 ? `jwt ${_v1}` : "",
                "Vimeo-Page": `${_v2}`,
                "Accept-Language": _v3 ?? "en"
              },
              method: "POST",
              body: JSON.stringify(_v0)
            });
          } else _v0 = await fetch(`${_v0}/users/${_v1}/projects/${_v0}/items`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: _v1 ? `jwt ${_v1}` : "",
              "Vimeo-Page": `${_v2}`,
              "Accept-Language": _v3 ?? "en"
            },
            method: "POST",
            body: JSON.stringify({
              items: _v4
            })
          });
          if (204 === _v0.status) return void _v5({
            type: 2
          });
          let _v1 = await _v0.json();
          if (_v1.error) return void _v5({
            type: 0,
            payload: _v1.error
          });
          _v5({
            type: 2
          });
        } catch (_v0) {
          _v5({
            type: 0,
            payload: _v8
          });
        }
      }
    }, [_v0, _v1, _v2, _v3]), _v4];
  }]);
}