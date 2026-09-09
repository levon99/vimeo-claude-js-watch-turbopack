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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  async function _v31({
    baseUrl: _v0,
    where: {
      category: _v1
    },
    ..._v2
  }) {
    return (0, _v29.measureLatency)("getMeCategory", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/categories/${_v1}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v32({
    baseUrl: _v0,
    where: {
      category: _v1
    },
    ..._v2
  }) {
    return (0, _v29.measureLatency)("putMeCategory", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/categories/${_v1}`, {
        ..._v2,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v33({
    baseUrl: _v0,
    where: {
      category: _v1
    },
    ..._v2
  }) {
    return (0, _v29.measureLatency)("deleteMeCategory", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/categories/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  function _v37(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v34.default)(_v2 ? `/me/categories/${_v2.where.category}${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v31({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  function _v38() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/categories/${_v0.where.category}${(0, _v28.serializeQuery)(_v0)}`, _v32({
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
  function _v39() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/categories/${_v0.where.category}${(0, _v28.serializeQuery)(_v0)}`, _v33({
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
  "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v37, {
    endpoint: "/me/categories/:category",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/categories/${_v0.where.category}${(0, _v28.serializeQuery)(_v0)}`, _v31({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/me/categories/:category",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v38, {
    endpoint: "/me/categories/:category",
    method: "PUT"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v39, {
    endpoint: "/me/categories/:category",
    method: "DELETE"
  }), _v0.s(["useDeleteMeCategory", 0, _v39, "useGetMeCategory", 0, _v37, "usePutMeCategory", 0, _v38], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  async function _v42({
    baseUrl: _v0,
    where: {
      groupId: _v1
    },
    ..._v2
  }) {
    return (0, _v29.measureLatency)("getMeGroup", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/groups/${_v1}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v43({
    baseUrl: _v0,
    where: {
      groupId: _v1
    },
    ..._v2
  }) {
    return (0, _v29.measureLatency)("putMeGroup", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/groups/${_v1}`, {
        ..._v2,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  async function _v44({
    baseUrl: _v0,
    where: {
      groupId: _v1
    },
    ..._v2
  }) {
    return (0, _v29.measureLatency)("deleteMeGroup", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/groups/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  function _v45(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v36.useGctlConfig)();
    return (0, _v34.default)(_v2 ? `/me/groups/${_v2.where.groupId}${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v42({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  function _v46() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/groups/${_v0.where.groupId}${(0, _v28.serializeQuery)(_v0)}`, _v43({
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
  function _v47() {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/groups/${_v0.where.groupId}${(0, _v28.serializeQuery)(_v0)}`, _v44({
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
  function _v48({
    user: _v0,
    source: _v1
  }) {
    var _v2, _v3;
    let _v4,
      _v5 = (0, _v2.useRef)(null),
      {
        updateFollow: _v6,
        isFollowingSubject: _v7
      } = (_v2 = _v0, _v3 = {
        source: _v1
      }, ((_v0, {
        isFollowing: _v1,
        canFollow: _v2,
        source: _v3
      }) => {
        let [_v4, _v5] = (0, _v2.useState)(_v1),
          {
            putHook: _v6,
            deleteHook: _v7,
            getHook: _v8
          } = (_v0 => {
            if (void 0 !== _v0.category) return {
              putHook: _v38,
              deleteHook: _v39,
              getHook: _v37
            };
            if (void 0 !== _v0.channelId) return {
              putHook: _v40.usePutMeChannel,
              deleteHook: _v40.useDeleteMeChannel,
              getHook: _v40.useGetMeChannel
            };
            if (void 0 !== _v0.groupId) return {
              putHook: _v46,
              deleteHook: _v47,
              getHook: _v45
            };
            if (void 0 !== _v0.followUserId) return {
              putHook: _v41.usePutMeFollowing,
              deleteHook: _v41.useDeleteMeFollowing,
              getHook: _v41.useGetMeFollowing
            };
            throw Error("Invalid where type");
          })(_v0),
          [_v9, {
            loading: _v10,
            error: _v11
          }] = _v6(),
          [_v12, {
            loading: _v13,
            error: _v14
          }] = _v7(),
          {
            mutate: _v15,
            isValidating: _v16,
            error: _v17
          } = _v8(() => _v2 ? {
            where: _v0,
            query: {
              source: _v3
            }
          } : null, {
            revalidateOnFocus: !1,
            shouldRetryOnError: !1
          });
        (0, _v2.useEffect)(() => {
          _v16 || _v5(!_v17);
        }, [_v17, _v16]);
        let _v18 = async () => {
            _v5(!_v4), await (_v4 ? _v12 : _v9)({
              where: _v0
            }), _v15();
          },
          _v19 = (0, _v26.useToast)();
        return (0, _v2.useEffect)(() => {
          _v11 && (_v5(!1), _v19({
            title: (0, _v20.translate)({
              singular: "Oops! Something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            }),
            status: "error"
          }));
        }, [_v11, _v19]), (0, _v2.useEffect)(() => {
          _v14 && (_v5(!0), _v19({
            title: (0, _v20.translate)({
              singular: "Oops! Something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            }),
            status: "error"
          }));
        }, [_v14, _v19]), {
          isFollowingSubject: _v4,
          isLoadingFollow: _v16 || _v10 || _v13,
          updateFollow: _v18
        };
      })({
        followUserId: Number((_v4 = (_v2?.uri ?? "").match(/[a-zA-Z0-9]+$/)) ? _v4[0] : "")
      }, {
        isFollowing: _v3?.defaultIsFollowing || _v2?.metadata?.interactions?.follow?.added,
        canFollow: !!_v2 && !_v2.metadata?.interactions?.block?.added,
        source: _v3?.source ?? ""
      })),
      [_v8, _v9] = (0, _v2.useState)(!1);
    return (0, _v2.useLayoutEffect)(() => {
      let _v0 = _v5.current;
      if (_v0) return _v0.addEventListener("mouseover", () => _v9(!0)), _v0.addEventListener("mouseout", () => _v9(!1)), () => {
        _v0.removeEventListener("mouseover", () => _v9(!0)), _v0.removeEventListener("mouseout", () => _v9(!1));
      };
    }, [_v5]), (0, _v1.jsx)(_v4.Button, {
      ref: _v5,
      size: "sm",
      w: "100%",
      onClick: _v0 => {
        _v0.preventDefault(), _v6();
      },
      variant: "secondary",
      children: _v7 ? _v8 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v25.CloseXSmall, {}), (0, _v20.translate)({
          singular: "Unfollow",
          dictionary: {
            es: {
              singular: "Dejar de seguir"
            },
            "de-DE": {
              singular: "Nicht mehr folgen"
            },
            "fr-FR": {
              singular: "Ne plus suivre"
            },
            "ja-JP": {
              singular: "フォロー解除"
            },
            "ko-KR": {
              singular: "팔로우 취소"
            },
            "pt-BR": {
              singular: "Parar de seguir"
            },
            "zh-CN": {
              singular: "取消关注"
            }
          }
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v24.CheckSmall, {}), (0, _v20.translate)({
          singular: "Following",
          dictionary: {
            es: {
              singular: "Siguiendo"
            },
            "de-DE": {
              singular: "Folgt"
            },
            "fr-FR": {
              singular: "Abonné"
            },
            "ja-JP": {
              singular: "フォロー中"
            },
            "ko-KR": {
              singular: "팔로잉"
            },
            "pt-BR": {
              singular: "Seguindo"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        })]
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v20.translate)({
          singular: "Follow",
          dictionary: {
            es: {
              singular: "Seguir"
            },
            "de-DE": {
              singular: "Folgen"
            },
            "fr-FR": {
              singular: "Suivre"
            },
            "ja-JP": {
              singular: "フォロー"
            },
            "ko-KR": {
              singular: "팔로우"
            },
            "pt-BR": {
              singular: "Seguir"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        })
      })
    });
  }
  function _v49({
    label: _v0,
    newTab: _v1,
    onClick: _v2,
    url: _v3,
    children: _v4
  }) {
    return _v3 ? (0, _v1.jsx)("a", {
      href: _v3,
      rel: "noopener noreferrer",
      "aria-label": _v0,
      onClick: _v2,
      target: _v1 ? "_blank" : "_self",
      children: _v4
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v4
    });
  }
  "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v45, {
    endpoint: "/me/groups/:groupId",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v35.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v36.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/groups/${_v0.where.groupId}${(0, _v28.serializeQuery)(_v0)}`, _v42({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/me/groups/:groupId",
    method: "GET"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v46, {
    endpoint: "/me/groups/:groupId",
    method: "PUT"
  }), "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v47, {
    endpoint: "/me/groups/:groupId",
    method: "DELETE"
  }), _v0.s(["useDeleteMeGroup", 0, _v47, "useGetMeGroup", 0, _v45, "usePutMeGroup", 0, _v46], 0), _v0.s(["LinkOrStaticElem", 0, _v49], 0);
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = function ({
    backgroundVideo: _v0,
    elemWidth: _v1,
    isVisible: _v2
  }) {
    let {
        aspectRatio: _v3,
        clipId: _v4,
        configUrl: _v5,
        endTime: _v6,
        firstFrameUrl: _v7,
        startTime: _v8,
        yPosition: _v9
      } = _v0,
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(_v3),
      [_v12, _v13] = (0, _v2.useState)(!0),
      {
        player: _v14
      } = (0, _v51.usePlayer)(_v10, _v4, !0, _v5 || "", !0, "auto");
    (0, _v2.useEffect)(() => {
      let _v0 = () => {
        _v14.currentTime >= _v6 - .501 && (_v14.currentTime = _v8);
      };
      return _v14 && (_v14.currentTime = _v8, _v13(!1), _v11.current = _v14.videoWidth / _v14.videoHeight, _v14.on("timeupdate", _v0)), () => {
        _v14 && _v14.off("timeupdate", _v0);
      };
    }, [_v6, _v14, _v8]), (0, _v2.useEffect)(() => {
      _v14 && (_v2 ? Promise.resolve().then(() => _v14.play()).catch(_v0 => {
        if (_v0?.name === "NoFiles") return void _v13(!0);
        if (_v0 && "AbortError" !== _v0.name) throw _v0;
      }) : _v14.pause());
    }, [_v2, _v14]);
    let _v15 = `${-80 * (_v9 || 50) / 100}px`;
    return (0, _v1.jsxs)(_v50.Box, {
      w: _v1,
      h: 80,
      position: "absolute",
      overflow: "hidden",
      borderTopRadius: "drawer",
      children: [_v12 ? (0, _v1.jsx)(_v50.Box, {
        display: "block",
        sx: {
          video: {
            display: "block",
            width: "100%"
          }
        },
        position: "absolute",
        left: 0,
        right: 0,
        top: _v15,
        children: (0, _v1.jsx)("img", {
          src: _v7,
          alt: _v4.toString(),
          width: _v1,
          height: "auto"
        })
      }) : null, (0, _v1.jsx)(_v50.Box, {
        sx: {
          display: _v12 ? "none" : "block",
          video: {
            display: "block",
            width: "100%"
          }
        },
        position: "absolute",
        left: 0,
        right: 0,
        top: _v15,
        ref: _v10
      })]
    });
  };
  var _v53 = _v0.i(0);
  _v0.s(["UserCard", 0, function ({
    onProfileClick: _v0,
    openDelay: _v1,
    placement: _v2 = "top-start",
    profileUrl: _v3,
    hasFollow: _v4,
    followSource: _v5 = "",
    user: _v6,
    children: _v7,
    ..._v8
  }) {
    let _v9,
      _v10,
      [_v11, _v12] = _v2.default.useState(!1),
      {
        settings: _v13
      } = (0, _v21.useOrionSettings)(),
      _v14 = _v13.enable_search_people_avatar_image_fix ? _v12.Portal : _v2.default.Fragment,
      _v15 = (_v9 = _v6?.metadata?.connections?.followers?.total, (0, _v20.translate)({
        singular: "{COUNT} follower",
        plural: "{COUNT} followers",
        count: _v9,
        replacements: {
          COUNT: (0, _v20.humanize)(_v9 ?? 0)
        },
        dictionary: {
          es: {
            singular: "{COUNT} seguidor",
            plural: "{COUNT} seguidores"
          },
          "de-DE": {
            singular: "{COUNT} Follower",
            plural: "{COUNT} Follower"
          },
          "fr-FR": {
            singular: "{COUNT} abonné",
            plural: "{COUNT} abonnés"
          },
          "ja-JP": {
            singular: "{COUNT} 人のフォロワー",
            plural: "{COUNT} 人のフォロワー"
          },
          "ko-KR": {
            singular: "팔로워 {COUNT}명",
            plural: "팔로워 {COUNT}명"
          },
          "pt-BR": {
            singular: "{COUNT} seguidor",
            plural: "{COUNT} seguidores"
          },
          "zh-CN": {
            singular: "{COUNT} 名粉丝",
            plural: "{COUNT} 名粉丝"
          }
        }
      })),
      _v16 = (_v10 = _v6?.metadata?.publicVideos?.total, (0, _v20.translate)({
        singular: "{COUNT} video",
        plural: "{COUNT} videos",
        count: _v10,
        replacements: {
          COUNT: (0, _v20.humanize)(_v10 ?? 0)
        },
        dictionary: {
          "de-DE": {
            singular: "{COUNT} Video",
            plural: "{COUNT} Videos"
          },
          "fr-FR": {
            singular: "{COUNT} vidéo",
            plural: "{COUNT} vidéos"
          },
          "ja-JP": {
            singular: "{COUNT} 件の動画",
            plural: "{COUNT}件の動画"
          },
          "ko-KR": {
            singular: "동영상 {COUNT}개",
            plural: "동영상 {COUNT}개"
          },
          "pt-BR": {
            singular: "{COUNT} vídeo",
            plural: "{COUNT} vídeos"
          },
          "zh-CN": {
            singular: "{COUNT} 个视频",
            plural: "{COUNT} 个视频"
          }
        }
      })),
      _v17 = void 0 !== _v6?.metadata?.publicVideos?.total,
      _v18 = _v6?.skills ?? [],
      [_v19, _v20] = (0, _v53.getAvatarImages)(_v6?.pictures?.sizes),
      _v21 = (0, _v20.translate)({
        singular: "Link to user profile",
        dictionary: {
          es: {
            singular: "Enlace al perfil del usuario"
          },
          "de-DE": {
            singular: "Link zum Benutzerprofil"
          },
          "fr-FR": {
            singular: "Lien vers le profil de l'utilisateur"
          },
          "ja-JP": {
            singular: "ユーザーのプロフィールにリンク"
          },
          "ko-KR": {
            singular: "사용자 프로필 바로가기"
          },
          "pt-BR": {
            singular: "Link para o perfil do usuário"
          },
          "zh-CN": {
            singular: "链接到用户个人资料"
          }
        }
      }),
      _v22 = _v6?.backgroundVideo?.[0];
    return (0, _v1.jsxs)(_v7.Popover, {
      placement: _v2,
      trigger: "hover",
      openDelay: _v1,
      onOpen: () => _v12(!0),
      onClose: () => _v12(!1),
      ..._v8,
      children: [(0, _v1.jsx)(_v11.PopoverTrigger, {
        children: _v7
      }), (0, _v1.jsx)(_v14, {
        children: (0, _v1.jsxs)(_v9.PopoverContent, {
          w: 320,
          borderRadius: "drawer",
          p: 0,
          onClick: _v0 => _v0.stopPropagation(),
          children: [_v22 && (0, _v19.getPlayerAssetUrls)() ? (0, _v1.jsx)(_v22.PlayerContextProvider, {
            type: _v23.PlayerType.BarebonePlayer,
            assetUrls: (0, _v19.getPlayerAssetUrls)(),
            children: (0, _v1.jsx)(_v10.PopoverHeader, {
              textStyle: "heading-sm",
              display: "flex",
              justifyContent: "space-between",
              children: (0, _v1.jsx)(_v52, {
                backgroundVideo: _v22,
                elemWidth: 320,
                isVisible: _v11
              })
            })
          }) : null, (0, _v1.jsx)(_v8.PopoverBody, {
            px: 50,
            pb: 50,
            children: (0, _v1.jsxs)(_v15.VStack, {
              w: "100%",
              p: 200,
              pt: 400,
              spacing: 200,
              children: [(0, _v1.jsx)(_v49, {
                label: _v21,
                newTab: !0,
                onClick: _v0,
                url: _v3,
                children: (0, _v1.jsx)(_v3.Avatar, {
                  size: "2xl",
                  alt: _v6.name,
                  src: _v19,
                  srcSet: _v20,
                  nameProps: {
                    name: _v6.name
                  }
                })
              }), (0, _v1.jsxs)(_v15.VStack, {
                children: [(0, _v1.jsx)(_v49, {
                  label: _v21,
                  newTab: !0,
                  onClick: _v0,
                  url: _v3,
                  children: (0, _v1.jsx)(_v14.Text, {
                    as: "h4",
                    variant: "heading-md",
                    align: "center",
                    children: _v6.name
                  })
                }), _v6.locationDetails?.formattedAddress && (0, _v1.jsxs)(_v6.HStack, {
                  spacing: 50,
                  textAlign: "center",
                  children: [(0, _v1.jsx)(_v18.UserLocation, {
                    color: "text-secondary"
                  }), (0, _v1.jsx)(_v14.Text, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: _v6.locationDetails?.formattedAddress
                  })]
                })]
              }), _v18.length > 0 ? (0, _v1.jsx)(_v6.HStack, {
                wrap: "wrap",
                justify: "center",
                children: _v18.map(_v0 => (0, _v1.jsx)(_v13.Tag, {
                  size: "sm",
                  fontSize: "text-sm",
                  fontWeight: "regular",
                  cursor: "default",
                  px: 200,
                  children: _v0.name
                }, _v0.name))
              }) : null, (0, _v1.jsxs)(_v15.VStack, {
                w: "100%",
                spacing: 100,
                children: [(0, _v1.jsx)(_v5.Divider, {
                  borderColor: "stroke",
                  _dark: {
                    borderColor: "stroke"
                  }
                }), (0, _v1.jsxs)(_v6.HStack, {
                  spacing: 200,
                  children: [_v17 ? (0, _v1.jsxs)(_v6.HStack, {
                    spacing: 75,
                    children: [(0, _v1.jsx)(_v16.VideosStack, {}), (0, _v1.jsx)(_v14.Text, {
                      variant: "body-xl",
                      fontSize: "text-sm",
                      children: _v16
                    })]
                  }) : null, (0, _v1.jsxs)(_v6.HStack, {
                    spacing: 75,
                    children: [(0, _v1.jsx)(_v17.PersonUser, {}), (0, _v1.jsx)(_v14.Text, {
                      variant: "body-xl",
                      fontSize: "text-sm",
                      children: _v15
                    })]
                  })]
                }), (0, _v1.jsx)(_v5.Divider, {
                  borderColor: "stroke",
                  _dark: {
                    borderColor: "stroke"
                  }
                })]
              }), _v3 ? (0, _v1.jsx)(_v4.Button, {
                as: "a",
                href: _v3,
                rel: "noopener noreferrer",
                target: "_blank",
                "aria-label": (0, _v20.translate)({
                  singular: "View profile",
                  dictionary: {
                    es: {
                      singular: "Ver perfil"
                    },
                    "de-DE": {
                      singular: "Profil anzeigen"
                    },
                    "fr-FR": {
                      singular: "Voir le profil"
                    },
                    "ja-JP": {
                      singular: "プロフィールを見る"
                    },
                    "ko-KR": {
                      singular: "프로필 보기"
                    },
                    "pt-BR": {
                      singular: "Ver perfil"
                    },
                    "zh-CN": {
                      singular: "查看个人资料"
                    }
                  }
                }),
                size: "sm",
                w: "100%",
                onClick: _v0,
                variant: "primary",
                children: (0, _v20.translate)({
                  singular: "View profile",
                  dictionary: {
                    es: {
                      singular: "Ver perfil"
                    },
                    "de-DE": {
                      singular: "Profil anzeigen"
                    },
                    "fr-FR": {
                      singular: "Voir le profil"
                    },
                    "ja-JP": {
                      singular: "プロフィールを見る"
                    },
                    "ko-KR": {
                      singular: "프로필 보기"
                    },
                    "pt-BR": {
                      singular: "Ver perfil"
                    },
                    "zh-CN": {
                      singular: "查看个人资料"
                    }
                  }
                })
              }) : null, _v4 && _v6 && (0, _v1.jsx)(_v48, {
                user: _v6,
                source: _v5
              })]
            })
          })]
        })
      })]
    });
  }], 0);
}