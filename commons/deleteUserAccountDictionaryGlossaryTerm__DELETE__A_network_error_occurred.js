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
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  async function _v40({
    baseUrl: _v0,
    where: {
      userId: _v1,
      termId: _v2
    },
    ..._v3
  }) {
    return (0, _v38.measureLatency)("deleteUserAccountDictionaryGlossaryTerm", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/account_dictionary/glossary_terms/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  async function _v41({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      termId: _v4
    },
    ..._v5
  }) {
    return (0, _v38.measureLatency)("patchUserAccountDictionaryGlossaryTerm", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/glossary_terms/${_v4}?fields=${_v1.map(_v39.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v39.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  async function _v42({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v38.measureLatency)("postUserAccountDictionaryGlossaryTermsBatch", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/glossary_terms/batch?fields=${_v1.map(_v39.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v39.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  async function _v46({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v38.measureLatency)("getUserAccountDictionaryGlossaryTerms", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/account_dictionary/glossary_terms?${(0, _v39.searchQueryString)(_v3)}&fields=${_v1.map(_v39.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  async function _v47({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v38.measureLatency)("postUserAccountDictionaryGlossaryTerms", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/glossary_terms?fields=${_v1.map(_v39.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v39.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  function _v51(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v43.useGctlConfig)();
    return (0, _v48.default)(_v2 ? `/users/${_v2.where.userId}/account_dictionary/glossary_terms${(0, _v45.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v46({
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
  function _v52(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v43.useGctlConfig)();
    return (0, _v50.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/account_dictionary/glossary_terms?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v46({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }
  "true" === _v44.default.env.STORYBOOK && (0, _v45.assignMswData)(_v51, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v44.default.env.STORYBOOK && (0, _v45.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v43.useGctlConfig)(),
      [_v5, _v6] = (0, _v45.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/account_dictionary/glossary_terms${(0, _v45.serializeQuery)(_v0)}`, _v46({
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
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v44.default.env.STORYBOOK && (0, _v45.assignMswData)(_v52, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v44.default.env.STORYBOOK && (0, _v45.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v43.useGctlConfig)(),
      [_v4, _v5] = (0, _v45.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v47({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "POST"
  });
  var _v53 = _v0.i(0);
  let _v54 = _v0 => _v0.split("/").pop() ?? "",
    _v55 = (_v0, _v1) => {
      let _v2 = new Map(_v0.filter(_v0 => _v0.uri).map(_v0 => [_v0.uri, _v0])),
        _v3 = new Map(_v1.filter(_v0 => _v0.uri).map(_v0 => [_v0.uri, _v0]));
      return {
        created: _v1.filter(_v0 => !_v0.uri && _v0.sourceText.trim()),
        deleted: _v0.filter(_v0 => _v0.uri && !_v3.has(_v0.uri)),
        updated: _v1.filter(_v0 => {
          if (!_v0.uri) return !1;
          let _v1 = _v2.get(_v0.uri);
          return _v1 && _v1.sourceText !== _v0.sourceText.trim();
        })
      };
    },
    _v56 = (_v0, _v1) => [..._v0.map(_v0 => ({
      ..._v0,
      clientId: _v0.uri ?? _v1()
    })), {
      clientId: _v1(),
      sourceLanguage: null,
      sourceText: ""
    }],
    _v57 = ({
      ownerUserId: _v0,
      translations: _v1,
      onClose: _v2,
      onSaved: _v3
    }) => {
      let {
          terms: _v4,
          isLoading: _v5,
          error: _v6,
          refresh: _v7,
          save: _v8
        } = (_v0 => {
          let {
              baseUrl: _v1,
              jwt: _v2,
              xVimeoPage: _v3,
              locale: _v4
            } = (0, _v43.useGctlConfig)(),
            {
              data: _v5,
              error: _v6,
              isLoading: _v7,
              isValidating: _v8,
              mutate: _v9,
              setSize: _v10,
              size: _v11
            } = _v52({
              select: ["uri", "sourceLanguage", "sourceText"],
              where: {
                userId: _v0
              },
              query: {
                perPage: 100
              }
            }, {
              revalidateOnFocus: !1
            }),
            _v12 = _v5?.[_v5.length - 1],
            _v13 = !!_v12?.paging.next;
          (0, _v2.useEffect)(() => {
            !_v13 || _v8 || _v6 || _v10(_v11 + 1);
          }, [_v6, _v13, _v8, _v10, _v11]);
          let _v14 = (0, _v2.useMemo)(() => _v5?.flatMap(_v0 => _v0.data) ?? [], [_v5]),
            _v15 = (0, _v2.useCallback)(async (_v0, _v1) => {
              let _v2 = _v55(_v0, _v1),
                _v3 = {
                  "Content-Type": "application/json",
                  Authorization: _v2 ? `jwt ${_v2}` : "",
                  "Vimeo-Page": `${_v3}`,
                  "Accept-Language": _v4 ?? "en"
                };
              if (await Promise.all([..._v2.deleted.map(_v0 => _v40({
                baseUrl: _v1,
                headers: _v3,
                where: {
                  userId: _v0,
                  termId: _v54(_v0.uri ?? "")
                }
              })), ..._v2.updated.map(_v0 => _v41({
                baseUrl: _v1,
                headers: _v3,
                select: ["uri"],
                variables: {
                  sourceText: _v0.sourceText.trim()
                },
                where: {
                  userId: _v0,
                  termId: _v54(_v0.uri ?? "")
                }
              }))]), _v2.created.length > 0 && (await _v42({
                baseUrl: _v1,
                headers: _v3,
                select: ["failed"],
                variables: {
                  terms: _v2.created.map(_v0 => ({
                    sourceLanguage: _v0.sourceLanguage,
                    sourceText: _v0.sourceText.trim()
                  }))
                },
                where: {
                  userId: _v0
                }
              })).failed > 0) throw Error("Some glossary terms could not be created");
              await _v9().catch(() => void 0);
            }, [_v1, _v2, _v4, _v9, _v0, _v3]);
          return {
            terms: _v14,
            isLoading: _v7 || _v13 && !_v6,
            error: _v6,
            refresh: (0, _v2.useCallback)(async () => {
              let _v0 = await _v9();
              return _v0?.flatMap(_v0 => _v0.data) ?? [];
            }, [_v9]),
            save: _v15
          };
        })(_v0),
        _v9 = (0, _v2.useRef)(0),
        [_v10, _v11] = (0, _v2.useState)([]),
        [_v12, _v13] = (0, _v2.useState)([]),
        [_v14, _v15] = (0, _v2.useState)(!1),
        [_v16, _v17] = (0, _v2.useState)(),
        [_v18, _v19] = (0, _v2.useState)(!1),
        _v20 = (0, _v2.useRef)(!1),
        _v21 = (0, _v36.useToast)({
          title: _v1.changesSaved,
          duration: 0
        }),
        _v22 = (0, _v2.useCallback)(() => `new-glossary-term-${_v9.current++}`, []);
      (0, _v2.useEffect)(() => {
        _v5 || _v6 || _v20.current || (_v11(_v4), _v13(_v56(_v4, _v22)), _v20.current = !0);
      }, [_v5, _v6, _v22, _v4]);
      let _v23 = (0, _v2.useMemo)(() => _v12.filter(_v0 => _v0.uri || _v0.sourceText.trim()), [_v12]),
        _v24 = (0, _v2.useMemo)(() => _v23.map(_v0 => ({
          uri: _v0.uri,
          sourceLanguage: _v0.sourceLanguage,
          sourceText: _v0.sourceText
        })), [_v23]),
        _v25 = _v23.some(_v0 => _v0.uri && !_v0.sourceText.trim()),
        _v26 = _v55(_v10, _v24),
        _v27 = !!(_v26.created.length || _v26.updated.length || _v26.deleted.length),
        _v28 = _v0 => {
          _v13(_v0 => {
            let _v1 = _v0.filter(_v0 => _v0.clientId !== _v0),
              _v2 = _v1[_v1.length - 1];
            return !_v2 || _v2.sourceText.trim() ? [..._v1, {
              clientId: _v22(),
              sourceLanguage: null,
              sourceText: ""
            }] : _v1;
          });
        },
        _v29 = (0, _v2.useCallback)(() => {
          _v7();
        }, [_v7]),
        _v30 = (0, _v2.useCallback)(_v0 => {
          _v11(_v0), _v13(_v56(_v0, _v22)), _v19(!1);
        }, [_v22]),
        _v31 = (0, _v2.useCallback)(async () => {
          _v15(!0);
          try {
            _v30(await _v7());
          } catch {
            _v19(!0);
          } finally {
            _v15(!1);
          }
        }, [_v30, _v7]),
        _v32 = async () => {
          _v15(!0), _v17(void 0);
          try {
            await _v8(_v10, _v24), await _v3().catch(() => void 0), _v21(), _v2();
          } catch (_v0) {
            try {
              _v30(await _v7());
            } catch {
              _v19(!0);
            }
            _v17(_v0 instanceof Error ? _v0 : Error(_v1.changesCouldNotBeSaved));
          } finally {
            _v15(!1);
          }
        };
      return (0, _v1.jsxs)(_v30.Modal, {
        isOpen: !0,
        closeOnEsc: !_v14,
        closeOnOverlayClick: !_v14,
        onClose: _v14 ? () => void 0 : _v2,
        children: [(0, _v1.jsx)(_v35.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
          width: `calc(100vw - ${(0, _v4.rem)(32)})`,
          maxWidth: (0, _v4.rem)(480),
          height: (0, _v4.rem)(700),
          maxHeight: `calc(100vh - ${(0, _v4.rem)(32)})`,
          children: [(0, _v1.jsx)(_v34.ModalHeader, {
            children: _v1.glossaryTitle
          }), (0, _v1.jsxs)(_v31.ModalBody, {
            overflowY: "auto",
            paddingX: (0, _v4.rem)(32),
            paddingY: (0, _v4.rem)(24),
            children: [_v6 && (0, _v1.jsxs)(_v7.Alert, {
              status: "error",
              marginBottom: (0, _v4.rem)(16),
              children: [(0, _v1.jsx)(_v8.AlertDescription, {
                flex: "1",
                children: _v1.glossaryLoadingError
              }), (0, _v1.jsx)(_v10.Button, {
                variant: "secondary",
                size: "sm",
                onClick: _v29,
                children: _v1.tryAgain
              })]
            }), _v16 && (0, _v1.jsxs)(_v7.Alert, {
              status: "error",
              marginBottom: (0, _v4.rem)(16),
              children: [(0, _v1.jsx)(_v8.AlertDescription, {
                flex: "1",
                children: _v1.changesCouldNotBeSaved
              }), _v18 && (0, _v1.jsx)(_v10.Button, {
                variant: "secondary",
                size: "sm",
                onClick: _v31,
                children: _v1.tryAgain
              })]
            }), _v5 ? (0, _v1.jsx)(_v3.Flex, {
              minHeight: (0, _v4.rem)(240),
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v1.jsx)(_v22.Spinner, {})
            }) : (0, _v1.jsx)(_v9.Box, {
              border: "1px solid",
              borderColor: "stroke",
              borderRadius: "sm",
              backgroundColor: "fill-surface",
              children: _v12.map((_v0, _v1) => (0, _v1.jsxs)(_v23.Grid, {
                role: "group",
                position: "relative",
                gridTemplateColumns: `${(0, _v4.rem)(96)} minmax(0, 1fr)`,
                minHeight: (0, _v4.rem)(44),
                borderBottom: _v1 === _v12.length - 1 ? void 0 : "1px solid",
                borderColor: "stroke",
                sx: {
                  '&:has(.row-handle:hover), &:has(.row-handle[aria-expanded="true"])': {
                    outline: "2px solid var(--vimeo-colors-text-primary)",
                    outlineOffset: "-2px"
                  }
                },
                children: [!!(_v0.uri || _v0.sourceText) && (0, _v1.jsxs)(_v26.Menu, {
                  placement: "left-start",
                  strategy: "fixed",
                  children: [(0, _v1.jsx)(_v27.MenuButton, {
                    className: "row-handle",
                    as: _v24.IconButton,
                    "aria-label": _v1.removeGlossaryTermNumber(_v1 + 1),
                    icon: (0, _v1.jsx)(_v37.EllipsisV, {
                      boxSize: 16
                    }),
                    variant: "primary",
                    size: "xs",
                    isDisabled: _v14,
                    position: "absolute",
                    top: (0, _v4.rem)(6),
                    left: (0, _v4.rem)(-24),
                    width: (0, _v4.rem)(16),
                    minWidth: (0, _v4.rem)(16),
                    height: (0, _v4.rem)(32),
                    padding: 0,
                    opacity: 0,
                    _focusVisible: {
                      opacity: 1
                    },
                    _expanded: {
                      opacity: 1
                    },
                    _groupHover: {
                      opacity: 1
                    },
                    onKeyDown: _v0 => {
                      var _v1;
                      return _v1 = _v0.clientId, void ("Delete" === _v0.key && (_v0.preventDefault(), _v28(_v1)));
                    }
                  }), (0, _v1.jsx)(_v29.MenuList, {
                    minWidth: (0, _v4.rem)(151),
                    paddingY: (0, _v4.rem)(8),
                    children: (0, _v1.jsx)(_v28.MenuItem, {
                      onClick: () => _v28(_v0.clientId),
                      children: _v1.removeTerm
                    })
                  })]
                }), (0, _v1.jsx)(_v3.Flex, {
                  alignItems: "center",
                  paddingX: (0, _v4.rem)(12),
                  borderRight: "1px solid",
                  borderColor: "stroke",
                  backgroundColor: "fill-component",
                  children: (0, _v1.jsx)(_v15.Text, {
                    as: "span",
                    variant: "heading-xs",
                    color: "text-primary",
                    children: _v1 + 1
                  })
                }), (0, _v1.jsx)(_v25.Input, {
                  "aria-label": _v1.glossaryTermNumber(_v1 + 1),
                  value: _v0.sourceText,
                  maxLength: 500,
                  isDisabled: _v14,
                  width: "100%",
                  minWidth: 0,
                  height: (0, _v4.rem)(43),
                  border: 0,
                  borderRadius: 0,
                  backgroundColor: "fill-surface",
                  color: "text-primary",
                  textStyle: "body-md",
                  paddingX: (0, _v4.rem)(12),
                  _focusVisible: {
                    boxShadow: "inset 0 0 0 2px var(--vimeo-colors-text-primary)"
                  },
                  onChange: _v0 => {
                    var _v1, _v2;
                    return _v1 = _v0.clientId, _v2 = _v0.target.value, void _v13(_v0 => {
                      let _v1 = _v0.map(_v0 => _v0.clientId === _v1 ? {
                          ..._v0,
                          sourceText: _v2
                        } : _v0),
                        _v2 = _v1[_v1.length - 1];
                      return _v2?.sourceText.trim() ? [..._v1, {
                        clientId: _v22(),
                        sourceLanguage: null,
                        sourceText: ""
                      }] : _v1;
                    });
                  }
                })]
              }, _v0.clientId))
            })]
          }), (0, _v1.jsxs)(_v33.ModalFooter, {
            gap: (0, _v4.rem)(12),
            justifyContent: "flex-end",
            borderTop: "1px solid",
            borderColor: "stroke",
            children: [(0, _v1.jsx)(_v10.Button, {
              variant: "tertiary",
              onClick: _v2,
              isDisabled: _v14,
              children: _v1.cancel
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "primary",
              onClick: _v32,
              isLoading: _v14,
              isDisabled: _v5 || !!_v6 || _v18 || _v25 || !_v27,
              children: _v1.save
            })]
          })]
        })]
      });
    },
    _v58 = ({
      ownerUserId: _v0,
      translations: _v1
    }) => {
      let _v2,
        _v3,
        _v4,
        [_v5, _v6] = (0, _v2.useState)(1),
        [_v7, _v8] = (0, _v2.useState)(!1),
        {
          terms: _v9,
          total: _v10,
          page: _v11,
          perPage: _v12,
          quota: _v13,
          isLoading: _v14,
          error: _v15,
          retry: _v16
        } = (_v2 = _v51(() => ({
          select: ["uri", "sourceText"],
          where: {
            userId: _v0
          },
          query: {
            page: _v5,
            perPage: 100
          }
        })), _v3 = (0, _v53.useGetUser)(() => ({
          select: ["accountDictionaryQuota.glossaryTerms.used", "accountDictionaryQuota.glossaryTerms.limit"],
          where: {
            userId: _v0
          }
        })), _v4 = (0, _v2.useCallback)(async () => {
          await Promise.all([_v2.mutate(), _v3.mutate()]);
        }, [_v2, _v3]), {
          terms: _v2.data?.data ?? [],
          total: _v2.data?.total ?? 0,
          page: _v2.data?.page ?? _v5,
          perPage: _v2.data?.perPage ?? 100,
          quota: _v3.data?.accountDictionaryQuota?.glossaryTerms,
          isLoading: _v2.isLoading || _v3.isLoading && !_v2.error,
          error: _v2.error,
          retry: _v4
        }),
        _v17 = _v13?.used ?? _v10,
        _v18 = _v13?.limit ?? 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v6.TeamSettingsPageCategory, {
          title: _v1.glossaryTitle,
          description: _v1.glossaryDescription,
          headingAs: "h2",
          headerActions: !_v14 && !_v15 && (0, _v1.jsx)(_v10.Button, {
            variant: "secondary",
            size: "sm",
            leftIcon: 0 === _v10 ? (0, _v1.jsx)(_v21.PlusSmall, {}) : void 0,
            onClick: () => _v8(!0),
            children: _v10 > 0 ? _v1.edit : _v1.addTerm
          }),
          children: _v14 ? (0, _v1.jsx)(_v3.Flex, {
            minHeight: (0, _v4.rem)(140),
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v1.jsx)(_v22.Spinner, {})
          }) : _v15 ? (0, _v1.jsxs)(_v7.Alert, {
            status: "error",
            marginTop: (0, _v4.rem)(24),
            alignItems: "center",
            children: [(0, _v1.jsx)(_v8.AlertDescription, {
              flex: "1",
              children: _v1.glossaryLoadingError
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              size: "sm",
              onClick: _v16,
              children: _v1.tryAgain
            })]
          }) : 0 === _v10 ? (0, _v1.jsxs)(_v3.Flex, {
            minHeight: (0, _v4.rem)(140),
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            children: [(0, _v1.jsx)(_v20.ClipboardNotes, {
              boxSize: 32
            }), (0, _v1.jsx)(_v15.Text, {
              variant: "heading-sm",
              marginTop: (0, _v4.rem)(8),
              children: _v1.glossaryEmptyTitle
            }), (0, _v1.jsx)(_v15.Text, {
              variant: "body-sm",
              color: "text-secondary",
              marginTop: (0, _v4.rem)(4),
              children: _v1.glossaryEmptyDescription
            })]
          }) : (0, _v1.jsxs)(_v9.Box, {
            marginTop: (0, _v4.rem)(24),
            children: [_v18 > 0 && (0, _v1.jsxs)(_v9.Box, {
              marginBottom: (0, _v4.rem)(16),
              children: [(0, _v1.jsx)(_v15.Text, {
                variant: "body-sm",
                color: "text-secondary",
                marginBottom: (0, _v4.rem)(6),
                children: _v1.glossaryCount(_v17, _v18)
              }), (0, _v1.jsx)(_v12.Progress, {
                value: Math.min(_v17 / _v18 * 100, 100),
                size: "sm"
              })]
            }), (0, _v1.jsxs)(_v19.Table, {
              width: "100%",
              children: [(0, _v1.jsx)(_v17.Thead, {
                children: (0, _v1.jsx)(_v18.Tr, {
                  children: (0, _v1.jsx)(_v16.Th, {
                    children: _v1.glossaryTerm
                  })
                })
              }), (0, _v1.jsx)(_v13.Tbody, {
                children: _v9.map(_v0 => (0, _v1.jsx)(_v18.Tr, {
                  children: (0, _v1.jsx)(_v14.Td, {
                    children: _v0.sourceText
                  })
                }, _v0.uri))
              })]
            }), _v10 > _v12 && (0, _v1.jsx)(_v3.Flex, {
              justifyContent: "center",
              marginTop: (0, _v4.rem)(24),
              children: (0, _v1.jsx)(_v11.Pagination, {
                size: "sm",
                count: _v10,
                pageSize: _v12,
                page: _v11,
                onPageChange: ({
                  page: _v0
                }) => _v6(_v0)
              })
            })]
          })
        }), _v7 && (0, _v1.jsx)(_v57, {
          ownerUserId: _v0,
          translations: _v1,
          onClose: () => _v8(!1),
          onSaved: async () => {
            _v6(1), await _v16();
          }
        })]
      });
    };
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  let _v68 = new Map(),
    _v69 = (_v0, _v1) => {
      try {
        return (_v0 => {
          let _v1 = _v68.get(_v0);
          if (_v1) return _v1;
          let _v2 = new Intl.DisplayNames([_v0], {
            type: "language"
          });
          return _v68.set(_v0, _v2), _v2;
        })(_v1).of(_v0) ?? _v0.toUpperCase();
      } catch (_v0) {
        if (_v0 instanceof RangeError) return _v0.toUpperCase();
        throw _v0;
      }
    };
  async function _v70({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v38.measureLatency)("getUserAccountDictionaryTranslationRulesMatrix", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/account_dictionary/translation_rules/matrix?${(0, _v39.searchQueryString)(_v3)}&fields=${_v1.map(_v39.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  function _v71(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v43.useGctlConfig)();
    return (0, _v48.default)(_v2 ? `/users/${_v2.where.userId}/account_dictionary/translation_rules/matrix${(0, _v45.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v70({
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
  "true" === _v44.default.env.STORYBOOK && (0, _v45.assignMswData)(_v71, {
    endpoint: "/users/:userId/account_dictionary/translation_rules/matrix",
    method: "GET"
  }), "true" === _v44.default.env.STORYBOOK && (0, _v45.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v43.useGctlConfig)(),
      [_v5, _v6] = (0, _v45.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/account_dictionary/translation_rules/matrix${(0, _v45.serializeQuery)(_v0)}`, _v70({
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
    endpoint: "/users/:userId/account_dictionary/translation_rules/matrix",
    method: "GET"
  });
  let _v72 = ({
    ownerUserId: _v0,
    translations: _v1
  }) => {
    let _v2,
      _v3,
      _v4,
      _v5,
      _v6 = (0, _v67.useLocale)(),
      [_v7, _v8] = (0, _v2.useState)(1),
      [_v9, _v10] = (0, _v2.useState)("en"),
      [_v11, _v12] = (0, _v2.useState)(""),
      {
        rows: _v13,
        sourceLanguages: _v14,
        targetLanguages: _v15,
        total: _v16,
        page: _v17,
        perPage: _v18,
        quota: _v19,
        isInitialLoading: _v20,
        hasData: _v21,
        error: _v22,
        retry: _v23
      } = (_v2 = (0, _v66.useDebouncedValue)(_v11, 300).trim(), _v3 = _v71(() => ({
        select: ["data.mappings.replacementText", "data.mappings.targetLanguage", "data.sourceLanguage", "data.sourceText", "page", "perPage", "sourceLanguages", "targetLanguages", "total"],
        where: {
          userId: _v0
        },
        query: {
          sourceLanguage: _v9,
          page: _v7,
          perPage: 10,
          ...(_v2.length > 0 ? {
            search: _v2
          } : {})
        }
      }), {
        keepPreviousData: !0
      }), _v4 = (0, _v53.useGetUser)(() => ({
        select: ["accountDictionaryQuota.languageReplacementTerms.used", "accountDictionaryQuota.languageReplacementTerms.limit"],
        where: {
          userId: _v0
        }
      })), _v5 = (0, _v2.useCallback)(async () => {
        await _v3.mutate(), await _v4.mutate().catch(() => void 0);
      }, [_v3, _v4]), {
        rows: _v3.data?.data ?? [],
        sourceLanguages: _v3.data?.sourceLanguages ?? [],
        targetLanguages: _v3.data?.targetLanguages ?? [],
        total: _v3.data?.total ?? 0,
        page: _v3.data?.page ?? _v7,
        perPage: _v3.data?.perPage ?? 10,
        quota: _v4.data?.accountDictionaryQuota?.languageReplacementTerms,
        isLoading: _v3.isLoading,
        isInitialLoading: _v3.isLoading && void 0 === _v3.data,
        hasData: void 0 !== _v3.data,
        error: _v3.error,
        retry: _v5
      }),
      _v24 = _v19?.used ?? _v16,
      _v25 = _v19?.limit ?? 0,
      _v26 = _v11.trim().length > 0,
      _v27 = _v14.length > 0,
      _v28 = _v15.length + 1,
      _v29 = (_v14.includes(_v9) ? _v14 : [_v9, ..._v14]).map(_v0 => ({
        label: _v69(_v0, _v6),
        value: _v0
      })),
      _v30 = _v0 => {
        _v12(_v0), _v8(1);
      };
    return (0, _v1.jsx)(_v6.TeamSettingsPageCategory, {
      title: _v1.replacementsTitle,
      description: _v1.replacementsDescription,
      headingAs: "h2",
      children: _v20 ? (0, _v1.jsx)(_v3.Flex, {
        minHeight: (0, _v4.rem)(180),
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v22.Spinner, {})
      }) : _v22 && !_v21 ? (0, _v1.jsxs)(_v7.Alert, {
        status: "error",
        marginTop: (0, _v4.rem)(24),
        alignItems: "center",
        children: [(0, _v1.jsx)(_v59.AlertIcon, {}), (0, _v1.jsx)(_v8.AlertDescription, {
          flex: "1",
          children: _v1.replacementsLoadingError
        }), (0, _v1.jsx)(_v10.Button, {
          variant: "secondary",
          size: "sm",
          onClick: _v23,
          children: _v1.tryAgain
        })]
      }) : 0 !== _v16 || _v26 || _v27 ? (0, _v1.jsxs)(_v9.Box, {
        marginTop: (0, _v4.rem)(24),
        children: [_v29.length > 1 && (0, _v1.jsx)(_v9.Box, {
          width: {
            base: "100%",
            md: (0, _v4.rem)(252)
          },
          marginBottom: (0, _v4.rem)(24),
          children: (0, _v1.jsx)(_v62.Select, {
            items: _v29,
            label: _v1.replacementsSourceLanguage,
            value: [_v9],
            size: "sm",
            onValueChange: ({
              value: _v0
            }) => {
              let _v1 = _v0[0];
              "string" == typeof _v1 && (_v10(_v1), _v8(1));
            },
            children: _v0 => (0, _v1.jsx)(_v62.SelectItem, {
              item: _v0,
              children: (0, _v1.jsx)(_v62.SelectItemText, {
                children: _v0.label
              })
            })
          })
        }), (0, _v1.jsxs)(_v3.Flex, {
          gap: (0, _v4.rem)(8),
          alignItems: "center",
          marginBottom: (0, _v4.rem)(24),
          children: [(0, _v1.jsxs)(_v60.InputGroup, {
            size: "sm",
            children: [(0, _v1.jsx)(_v61.InputLeftElement, {
              pointerEvents: "none",
              children: (0, _v1.jsx)(_v65.SearchMagnifier, {
                boxSize: 20,
                color: "text-secondary"
              })
            }), (0, _v1.jsx)(_v25.Input, {
              value: _v11,
              onChange: _v0 => _v30(_v0.currentTarget.value),
              placeholder: _v1.replacementsSearchPlaceholder,
              "aria-label": _v1.replacementsSearchLabel,
              paddingLeft: (0, _v4.rem)(40)
            })]
          }), _v26 && (0, _v1.jsx)(_v24.IconButton, {
            "aria-label": _v1.replacementsClearSearch,
            icon: (0, _v1.jsx)(_v64.CloseX, {}),
            size: "sm",
            variant: "tertiary",
            onClick: () => _v30("")
          })]
        }), 0 === _v16 ? (0, _v1.jsxs)(_v3.Flex, {
          minHeight: (0, _v4.rem)(140),
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          children: [(0, _v1.jsx)(_v15.Text, {
            variant: _v26 ? "body-md" : "heading-sm",
            color: "text-secondary",
            children: _v26 ? _v1.replacementsNoResults : _v1.replacementsEmptyTitle
          }), !_v26 && (0, _v1.jsx)(_v15.Text, {
            variant: "body-sm",
            color: "text-secondary",
            marginTop: (0, _v4.rem)(4),
            children: _v1.replacementsEmptyDescription
          })]
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v63.TableContainer, {
            borderWidth: "1px",
            borderColor: "stroke",
            borderRadius: "md",
            children: (0, _v1.jsxs)(_v19.Table, {
              width: "100%",
              minWidth: (0, _v4.rem)(Math.max(592, 196 * _v28)),
              sx: {
                tableLayout: "fixed"
              },
              children: [(0, _v1.jsx)(_v17.Thead, {
                backgroundColor: "fill-component",
                children: (0, _v1.jsxs)(_v18.Tr, {
                  children: [(0, _v1.jsx)(_v16.Th, {
                    children: _v69(_v9, _v6)
                  }), _v15.map(_v0 => (0, _v1.jsx)(_v16.Th, {
                    children: _v69(_v0, _v6)
                  }, _v0))]
                })
              }), (0, _v1.jsx)(_v13.Tbody, {
                children: _v13.map(_v0 => {
                  let _v1 = new Map(_v0.mappings.map(_v0 => [_v0.targetLanguage, _v0.replacementText]));
                  return (0, _v1.jsxs)(_v18.Tr, {
                    height: (0, _v4.rem)(60),
                    children: [(0, _v1.jsx)(_v14.Td, {
                      fontFamily: "heading",
                      children: _v0.sourceText
                    }), _v15.map(_v0 => (0, _v1.jsx)(_v14.Td, {
                      color: "text-secondary",
                      children: _v1.get(_v0) ?? "-"
                    }, _v0))]
                  }, `${_v0.sourceLanguage}:${_v0.sourceText}`);
                })
              })]
            })
          }), _v16 > _v18 && (0, _v1.jsx)(_v3.Flex, {
            justifyContent: "center",
            marginTop: (0, _v4.rem)(24),
            children: (0, _v1.jsx)(_v11.Pagination, {
              size: "sm",
              count: _v16,
              pageSize: _v18,
              page: _v17,
              onPageChange: ({
                page: _v0
              }) => _v8(_v0)
            })
          })]
        }), _v25 > 0 && (0, _v1.jsxs)(_v3.Flex, {
          marginTop: (0, _v4.rem)(24),
          paddingX: (0, _v4.rem)(24),
          paddingY: (0, _v4.rem)(16),
          gap: (0, _v4.rem)(16),
          alignItems: "center",
          backgroundColor: "fill-component",
          borderRadius: "sm",
          children: [(0, _v1.jsx)(_v15.Text, {
            variant: "heading-xs",
            whiteSpace: "nowrap",
            children: _v1.replacementsCount(_v24, _v25)
          }), (0, _v1.jsx)(_v12.Progress, {
            flex: "1",
            width: "auto",
            minWidth: 0,
            value: Math.min(_v24 / _v25 * 100, 100),
            size: "xs"
          })]
        })]
      }) : (0, _v1.jsxs)(_v3.Flex, {
        minHeight: (0, _v4.rem)(140),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        children: [(0, _v1.jsx)(_v15.Text, {
          variant: "heading-sm",
          children: _v1.replacementsEmptyTitle
        }), (0, _v1.jsx)(_v15.Text, {
          variant: "body-sm",
          color: "text-secondary",
          marginTop: (0, _v4.rem)(4),
          children: _v1.replacementsEmptyDescription
        })]
      })
    });
  };
  var _v73 = _v0.i(0);
  let _v74 = ({
    ownerUserId: _v0
  }) => {
    let {
      translations: _v1,
      rulesSection: _v2
    } = (0, _v2.useMemo)(() => {
      let _v0 = {
        title: (0, _v73.translate)({
          singular: "Custom dictionary",
          dictionary: {
            es: {
              singular: "Diccionario personalizado"
            },
            "de-DE": {
              singular: "Benutzerdefiniertes Wörterbuch"
            },
            "fr-FR": {
              singular: "Dictionnaire personnalisé"
            },
            "ja-JP": {
              singular: "カスタム辞書"
            },
            "ko-KR": {
              singular: "사용자 지정 사전"
            },
            "pt-BR": {
              singular: "Dicionário personalizado"
            },
            "zh-CN": {
              singular: "自定义词典"
            }
          }
        }),
        description: (0, _v73.translate)({
          singular: "Define your brand names, product terms, and acronyms once, and they will be applied consistently across AI-generated content.",
          dictionary: {
            es: {
              singular: "Defina los nombres de su marca, términos de producto y acrónimos una vez, y se aplicarán de forma coherente en todo el contenido generado por IA."
            },
            "de-DE": {
              singular: "Definieren Sie Ihre Markennamen, Produktbegriffe und Akronyme einmal, und sie werden konsistent in KI-generierten Inhalten angewendet."
            },
            "fr-FR": {
              singular: "Définissez une fois vos noms de marque, termes produits et acronymes, et ils seront appliqués de manière cohérente à l'ensemble du contenu généré par l'IA."
            },
            "ja-JP": {
              singular: "ブランド名、製品用語、頭字語を一度定義すれば、AI生成コンテンツ全体に一貫して適用されます。"
            },
            "ko-KR": {
              singular: "브랜드 이름, 제품 용어 및 약어를 한 번 정의하면 AI 생성 콘텐츠 전반에 걸쳐 일관되게 적용됩니다."
            },
            "pt-BR": {
              singular: "Defina os nomes da sua marca, termos de produto e siglas uma vez, e eles serão aplicados de forma consistente em conteúdos gerados por IA."
            },
            "zh-CN": {
              singular: "一次性定义您的品牌名称、产品术语和首字母缩略词，它们将在 AI 生成的所有内容中保持一致应用。"
            }
          }
        }),
        notice: (0, _v73.translate)({
          singular: "Dictionary support for dubbing is coming soon. For now, your terms apply to transcripts, captions, and translations.",
          dictionary: {
            es: {
              singular: "El soporte de diccionario para doblaje llegará pronto. Por ahora, sus términos se aplican a transcripciones, subtítulos y traducciones."
            },
            "de-DE": {
              singular: "Wörterbuchunterstützung für das Dubbing kommt bald. Bis dahin gelten Ihre Begriffe für Transkripte, Untertitel und Übersetzungen."
            },
            "fr-FR": {
              singular: "La prise en charge d'un dictionnaire pour le doublage arrive bientôt. Pour l'instant, vos termes s'appliquent aux transcriptions, aux sous-titres et aux traductions."
            },
            "ja-JP": {
              singular: "吹替（ダビング）向けの辞書サポートはまもなく提供されます。現時点では、用語は書き起こし、キャプション、および翻訳に適用されます。"
            },
            "ko-KR": {
              singular: "더빙을 위한 사전 지원이 곧 제공될 예정입니다. 현재로서는 용어가 전사, 자막 및 번역에 적용됩니다."
            },
            "pt-BR": {
              singular: "O suporte a dicionário para dublagem chegará em breve. Por enquanto, seus termos se aplicam a transcrições, legendas e traduções."
            },
            "zh-CN": {
              singular: "配音词典支持即将推出。目前，您的术语适用于转录、字幕和翻译。"
            }
          }
        }),
        glossaryTitle: (0, _v73.translate)({
          singular: "Glossary",
          dictionary: {
            es: {
              singular: "Glosario"
            },
            "de-DE": {
              singular: "Glossar"
            },
            "fr-FR": {
              singular: "Glossaire"
            },
            "ja-JP": {
              singular: "用語集"
            },
            "ko-KR": {
              singular: "용어집"
            },
            "pt-BR": {
              singular: "Glossário"
            },
            "zh-CN": {
              singular: "术语表"
            }
          }
        }),
        glossaryDescription: (0, _v73.translate)({
          singular: "Ensures specific terms are spelled and capitalized correctly during AI generation.",
          dictionary: {
            es: {
              singular: "Garantiza que los términos específicos estén escritos y capitalizados correctamente durante la generación por IA."
            },
            "de-DE": {
              singular: "Stellt sicher, dass bestimmte Begriffe während der KI-Generierung korrekt geschrieben und bezüglich der Groß-/Kleinschreibung korrekt sind."
            },
            "fr-FR": {
              singular: "Garantit que les termes spécifiques sont orthographiés et capitalisés correctement lors de la génération par l'IA."
            },
            "ja-JP": {
              singular: "AI生成時に特定の用語の綴りや大文字・小文字の表記が正しく維持されることを保証します。"
            },
            "ko-KR": {
              singular: "AI 생성 과정에서 특정 용어의 철자와 대소문자가 올바르게 적용되도록 합니다."
            },
            "pt-BR": {
              singular: "Garante que termos específicos sejam soletrados e capitalizados corretamente durante a geração por IA."
            },
            "zh-CN": {
              singular: "确保在 AI 生成过程中特定术语的拼写和大小写正确。"
            }
          }
        }),
        glossaryCount: (_v0, _v1) => (0, _v73.translate)({
          singular: "{USED}/{LIMIT} terms",
          replacements: {
            USED: _v0,
            LIMIT: _v1
          },
          dictionary: {
            es: {
              singular: "{USED}/{LIMIT} términos"
            },
            "de-DE": {
              singular: "{USED}/{LIMIT} Begriffe"
            },
            "fr-FR": {
              singular: "{USED}/{LIMIT} termes"
            },
            "ja-JP": {
              singular: "{USED}/{LIMIT} 件の用語"
            },
            "ko-KR": {
              singular: "{USED}/{LIMIT}개의 용어"
            },
            "pt-BR": {
              singular: "{USED}/{LIMIT} termos"
            },
            "zh-CN": {
              singular: "{USED}/{LIMIT} 个术语"
            }
          }
        }),
        glossaryEmptyTitle: (0, _v73.translate)({
          singular: "No terms added yet.",
          dictionary: {
            es: {
              singular: "Aún no se han añadido términos."
            },
            "de-DE": {
              singular: "Noch keine Begriffe hinzugefügt."
            },
            "fr-FR": {
              singular: "Aucun terme ajouté pour le moment."
            },
            "ja-JP": {
              singular: "用語がまだ追加されていません。"
            },
            "ko-KR": {
              singular: "아직 용어가 추가되지 않았습니다."
            },
            "pt-BR": {
              singular: "Nenhum termo adicionado ainda."
            },
            "zh-CN": {
              singular: "尚未添加任何术语。"
            }
          }
        }),
        glossaryEmptyDescription: (0, _v73.translate)({
          singular: "Start adding your custom glossary",
          dictionary: {
            es: {
              singular: "Comience a agregar su glosario personalizado"
            },
            "de-DE": {
              singular: "Beginnen Sie mit dem Hinzufügen Ihres eigenen Glossars"
            },
            "fr-FR": {
              singular: "Commencez à ajouter votre glossaire personnalisé"
            },
            "ja-JP": {
              singular: "カスタム用語集の追加を始めましょう"
            },
            "ko-KR": {
              singular: "맞춤 용어집 추가를 시작하세요"
            },
            "pt-BR": {
              singular: "Comece a adicionar seu glossário personalizado"
            },
            "zh-CN": {
              singular: "开始添加您的自定义术语表"
            }
          }
        }),
        glossaryTerm: (0, _v73.translate)({
          singular: "Term",
          dictionary: {
            es: {
              singular: "Término"
            },
            "de-DE": {
              singular: "Begriff"
            },
            "fr-FR": {
              singular: "Terme"
            },
            "ja-JP": {
              singular: "用語"
            },
            "ko-KR": {
              singular: "용어"
            },
            "pt-BR": {
              singular: "Termo"
            },
            "zh-CN": {
              singular: "术语"
            }
          }
        }),
        glossaryEditorDescription: (0, _v73.translate)({
          singular: "You can paste a CSV-formatted list into the first input field to enter multiple terms at once.",
          dictionary: {
            es: {
              singular: "Puede pegar una lista en formato CSV en el primer campo de entrada para introducir varios términos a la vez."
            },
            "de-DE": {
              singular: "Sie können eine im CSV-Format vorliegende Liste in das erste Eingabefeld einfügen, um mehrere Begriffe auf einmal einzugeben."
            },
            "fr-FR": {
              singular: "Vous pouvez coller une liste au format CSV dans le premier champ de saisie pour saisir plusieurs termes à la fois."
            },
            "ja-JP": {
              singular: "複数の用語を一度に入力するには、CSV形式のリストを最初の入力欄に貼り付けることができます。"
            },
            "ko-KR": {
              singular: "여러 용어를 한 번에 입력하려면 CSV 형식의 목록을 첫 번째 입력 필드에 붙여넣을 수 있습니다."
            },
            "pt-BR": {
              singular: "Você pode colar uma lista formatada em CSV no primeiro campo de entrada para inserir vários termos de uma só vez."
            },
            "zh-CN": {
              singular: "您可以将 CSV 格式的列表粘贴到第一个输入字段，以一次输入多个术语。"
            }
          }
        }),
        glossaryTermNumber: _v0 => (0, _v73.translate)({
          singular: "Glossary term {NUMBER}",
          replacements: {
            NUMBER: _v0
          },
          dictionary: {
            es: {
              singular: "Término del glosario {NUMBER}"
            },
            "de-DE": {
              singular: "Glossarbegriff {NUMBER}"
            },
            "fr-FR": {
              singular: "Terme du glossaire {NUMBER}"
            },
            "ja-JP": {
              singular: "用語集の用語 {NUMBER}"
            },
            "ko-KR": {
              singular: "용어집 항목 {NUMBER}"
            },
            "pt-BR": {
              singular: "Termo do glossário {NUMBER}"
            },
            "zh-CN": {
              singular: "词汇表术语 {NUMBER}"
            }
          }
        }),
        glossaryLoadingError: (0, _v73.translate)({
          singular: "Unable to load the glossary.",
          dictionary: {
            es: {
              singular: "No se pudo cargar el glosario."
            },
            "de-DE": {
              singular: "Das Glossar konnte nicht geladen werden."
            },
            "fr-FR": {
              singular: "Impossible de charger le glossaire."
            },
            "ja-JP": {
              singular: "用語集を読み込めませんでした。"
            },
            "ko-KR": {
              singular: "용어집을 불러올 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível carregar o glossário."
            },
            "zh-CN": {
              singular: "无法加载词汇表。"
            }
          }
        }),
        addTerm: (0, _v73.translate)({
          singular: "Add term",
          dictionary: {
            es: {
              singular: "Agregar término"
            },
            "de-DE": {
              singular: "Begriff hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter un terme"
            },
            "ja-JP": {
              singular: "用語を追加"
            },
            "ko-KR": {
              singular: "용어 추가"
            },
            "pt-BR": {
              singular: "Adicionar termo"
            },
            "zh-CN": {
              singular: "添加术语"
            }
          }
        }),
        edit: (0, _v73.translate)({
          singular: "Edit",
          dictionary: {
            es: {
              singular: "Editar"
            },
            "de-DE": {
              singular: "Bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier"
            },
            "ja-JP": {
              singular: "編集"
            },
            "ko-KR": {
              singular: "편집"
            },
            "pt-BR": {
              singular: "Editar"
            },
            "zh-CN": {
              singular: "编辑"
            }
          }
        }),
        removeTerm: (0, _v73.translate)({
          singular: "Remove term",
          dictionary: {
            es: {
              singular: "Eliminar término"
            },
            "de-DE": {
              singular: "Begriff entfernen"
            },
            "fr-FR": {
              singular: "Supprimer le terme"
            },
            "ja-JP": {
              singular: "用語を削除"
            },
            "ko-KR": {
              singular: "용어 제거"
            },
            "pt-BR": {
              singular: "Remover termo"
            },
            "zh-CN": {
              singular: "移除术语"
            }
          }
        }),
        removeGlossaryTermNumber: _v0 => (0, _v73.translate)({
          singular: "Remove glossary term {NUMBER}",
          replacements: {
            NUMBER: _v0
          },
          dictionary: {
            es: {
              singular: "Eliminar término del glosario {NUMBER}"
            },
            "de-DE": {
              singular: "Glossarbegriff {NUMBER} entfernen"
            },
            "fr-FR": {
              singular: "Supprimer le terme du glossaire {NUMBER}"
            },
            "ja-JP": {
              singular: "用語集の用語 {NUMBER} を削除"
            },
            "ko-KR": {
              singular: "용어집 항목 {NUMBER} 제거"
            },
            "pt-BR": {
              singular: "Remover termo do glossário {NUMBER}"
            },
            "zh-CN": {
              singular: "删除术语表条目 {NUMBER}"
            }
          }
        }),
        cancel: (0, _v73.translate)({
          singular: "Cancel",
          dictionary: {
            es: {
              singular: "Cancelar"
            },
            "de-DE": {
              singular: "Abbrechen"
            },
            "fr-FR": {
              singular: "Annuler"
            },
            "ja-JP": {
              singular: "キャンセル"
            },
            "ko-KR": {
              singular: "취소"
            },
            "pt-BR": {
              singular: "Cancelar"
            },
            "zh-CN": {
              singular: "取消"
            }
          }
        }),
        save: (0, _v73.translate)({
          singular: "Save",
          dictionary: {
            es: {
              singular: "Guardar"
            },
            "de-DE": {
              singular: "Speichern"
            },
            "fr-FR": {
              singular: "Enregistrer"
            },
            "ja-JP": {
              singular: "保存"
            },
            "ko-KR": {
              singular: "저장"
            },
            "pt-BR": {
              singular: "Salvar"
            },
            "zh-CN": {
              singular: "保存"
            }
          }
        }),
        changesSaved: (0, _v73.translate)({
          singular: "Changes saved",
          dictionary: {
            es: {
              singular: "Guardamos los cambios"
            },
            "de-DE": {
              singular: "Änderungen wurden gespeichert"
            },
            "fr-FR": {
              singular: "Changements sauvegardés"
            },
            "ja-JP": {
              singular: "変更内容が保存されました"
            },
            "ko-KR": {
              singular: "변경 사항 저장 완료"
            },
            "pt-BR": {
              singular: "Alterações salvas"
            },
            "zh-CN": {
              singular: "已保存更改"
            }
          }
        }),
        changesCouldNotBeSaved: (0, _v73.translate)({
          singular: "Changes could not be saved",
          dictionary: {
            es: {
              singular: "No se pudieron guardar los cambios"
            },
            "de-DE": {
              singular: "Änderungen konnten nicht gespeichert werden"
            },
            "fr-FR": {
              singular: "Les modifications n'ont pas pu être enregistrées"
            },
            "ja-JP": {
              singular: "変更を保存できませんでした"
            },
            "ko-KR": {
              singular: "변경 사항이 저장되지 않았습니다"
            },
            "pt-BR": {
              singular: "As alterações não puderam ser salvas"
            },
            "zh-CN": {
              singular: "无法保存更改"
            }
          }
        }),
        tryAgain: (0, _v73.translate)({
          singular: "Try again",
          dictionary: {
            es: {
              singular: "Intentar de nuevo"
            },
            "de-DE": {
              singular: "Nochmal versuchen"
            },
            "fr-FR": {
              singular: "Veuillez réessayer"
            },
            "ja-JP": {
              singular: "再試行してください"
            },
            "ko-KR": {
              singular: "다시 시도하세요"
            },
            "pt-BR": {
              singular: "Tente de novo"
            },
            "zh-CN": {
              singular: "再试一次"
            }
          }
        }),
        replacementsTitle: (0, _v73.translate)({
          singular: "Terms translations",
          dictionary: {
            es: {
              singular: "Traducciones de términos"
            },
            "de-DE": {
              singular: "Übersetzungen der Begriffe"
            },
            "fr-FR": {
              singular: "Traductions des termes"
            },
            "ja-JP": {
              singular: "用語の翻訳"
            },
            "ko-KR": {
              singular: "용어 번역"
            },
            "pt-BR": {
              singular: "Traduções de termos"
            },
            "zh-CN": {
              singular: "术语翻译"
            }
          }
        }),
        replacementsDescription: (0, _v73.translate)({
          singular: "Controls how specific terms are translated, or kept unchanged, across languages.",
          dictionary: {
            es: {
              singular: "Controla cómo se traducen términos específicos, o se mantienen sin cambios, entre idiomas."
            },
            "de-DE": {
              singular: "Steuert, wie bestimmte Begriffe über Sprachen hinweg übersetzt oder unverändert beibehalten werden."
            },
            "fr-FR": {
              singular: "Contrôle la manière dont des termes spécifiques sont traduits ou maintenus inchangés d'une langue à l'autre."
            },
            "ja-JP": {
              singular: "特定の用語を各言語でどのように翻訳するか、あるいは原語のままにするかを制御します。"
            },
            "ko-KR": {
              singular: "특정 용어가 여러 언어에서 어떻게 번역되거나 변경 없이 유지될지를 제어합니다."
            },
            "pt-BR": {
              singular: "Controla como termos específicos são traduzidos, ou mantidos inalterados, entre idiomas."
            },
            "zh-CN": {
              singular: "控制特定术语在各语言中的翻译方式或是否保持不变。"
            }
          }
        }),
        replacementsCount: (_v0, _v1) => (0, _v73.translate)({
          singular: "{USED}/{LIMIT} terms",
          replacements: {
            USED: _v0,
            LIMIT: _v1
          },
          dictionary: {
            es: {
              singular: "{USED}/{LIMIT} términos"
            },
            "de-DE": {
              singular: "{USED}/{LIMIT} Begriffe"
            },
            "fr-FR": {
              singular: "{USED}/{LIMIT} termes"
            },
            "ja-JP": {
              singular: "{USED}/{LIMIT} 件の用語"
            },
            "ko-KR": {
              singular: "{USED}/{LIMIT}개의 용어"
            },
            "pt-BR": {
              singular: "{USED}/{LIMIT} termos"
            },
            "zh-CN": {
              singular: "{USED}/{LIMIT} 个术语"
            }
          }
        }),
        replacementsSearchPlaceholder: (0, _v73.translate)({
          singular: "Search term",
          dictionary: {
            es: {
              singular: "Término de búsqueda"
            },
            "de-DE": {
              singular: "Suchbegriff"
            },
            "fr-FR": {
              singular: "Terme de recherche"
            },
            "ja-JP": {
              singular: "検索語"
            },
            "ko-KR": {
              singular: "검색어"
            },
            "pt-BR": {
              singular: "Termo de pesquisa"
            },
            "zh-CN": {
              singular: "搜索术语"
            }
          }
        }),
        replacementsSearchLabel: (0, _v73.translate)({
          singular: "Search terms translations",
          dictionary: {
            es: {
              singular: "Traducciones de términos de búsqueda"
            },
            "de-DE": {
              singular: "Übersetzungen der Suchbegriffe"
            },
            "fr-FR": {
              singular: "Traductions des termes de recherche"
            },
            "ja-JP": {
              singular: "検索用語の翻訳"
            },
            "ko-KR": {
              singular: "검색어 번역"
            },
            "pt-BR": {
              singular: "Traduções de termos de pesquisa"
            },
            "zh-CN": {
              singular: "搜索术语翻译"
            }
          }
        }),
        replacementsSourceLanguage: (0, _v73.translate)({
          singular: "Source language",
          dictionary: {
            es: {
              singular: "Idioma de origen"
            },
            "de-DE": {
              singular: "Ausgangssprache"
            },
            "fr-FR": {
              singular: "Langue source"
            },
            "ja-JP": {
              singular: "ソース言語"
            },
            "ko-KR": {
              singular: "원본 언어"
            },
            "pt-BR": {
              singular: "Idioma de origem"
            },
            "zh-CN": {
              singular: "源语言"
            }
          }
        }),
        replacementsClearSearch: (0, _v73.translate)({
          singular: "Clear search",
          dictionary: {
            es: {
              singular: "Borrar búsqueda"
            },
            "de-DE": {
              singular: "Suche löschen"
            },
            "fr-FR": {
              singular: "Effacer la recherche"
            },
            "ja-JP": {
              singular: "検索をクリア"
            },
            "ko-KR": {
              singular: "검색 지우기"
            },
            "pt-BR": {
              singular: "Limpar pesquisa"
            },
            "zh-CN": {
              singular: "清除搜索"
            }
          }
        }),
        replacementsEmptyTitle: (0, _v73.translate)({
          singular: "No language replacements yet.",
          dictionary: {
            es: {
              singular: "Aún no hay reemplazos de idioma."
            },
            "de-DE": {
              singular: "Noch keine Sprachersetzungen vorhanden."
            },
            "fr-FR": {
              singular: "Aucun remplacement de langue pour le moment."
            },
            "ja-JP": {
              singular: "まだ言語の置換はありません。"
            },
            "ko-KR": {
              singular: "아직 언어 대체 항목이 없습니다."
            },
            "pt-BR": {
              singular: "Ainda não há substituições de idioma."
            },
            "zh-CN": {
              singular: "尚无语言替换。"
            }
          }
        }),
        replacementsEmptyDescription: (0, _v73.translate)({
          singular: "Add terms to control how they are translated across languages.",
          dictionary: {
            es: {
              singular: "Agrega términos para controlar cómo se traducen entre idiomas."
            },
            "de-DE": {
              singular: "Fügen Sie Begriffe hinzu, um deren Übersetzung zwischen Sprachen zu steuern."
            },
            "fr-FR": {
              singular: "Ajoutez des termes pour contrôler la manière dont ils sont traduits entre les langues."
            },
            "ja-JP": {
              singular: "用語を追加して、言語間での翻訳方法を制御します。"
            },
            "ko-KR": {
              singular: "용어를 추가하여 여러 언어에서 번역되는 방식을 제어하세요."
            },
            "pt-BR": {
              singular: "Adicione termos para controlar como eles são traduzidos entre idiomas."
            },
            "zh-CN": {
              singular: "添加术语以控制其在不同语言中的翻译方式。"
            }
          }
        }),
        replacementsNoResults: (0, _v73.translate)({
          singular: "No matching terms found.",
          dictionary: {
            es: {
              singular: "No se encontraron términos coincidentes."
            },
            "de-DE": {
              singular: "Keine passenden Begriffe gefunden."
            },
            "fr-FR": {
              singular: "Aucun terme correspondant trouvé."
            },
            "ja-JP": {
              singular: "該当する用語は見つかりませんでした。"
            },
            "ko-KR": {
              singular: "일치하는 용어가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum termo correspondente encontrado."
            },
            "zh-CN": {
              singular: "未找到匹配的术语。"
            }
          }
        }),
        replacementsLoadingError: (0, _v73.translate)({
          singular: "Unable to load terms translations.",
          dictionary: {
            es: {
              singular: "No se pueden cargar las traducciones de términos."
            },
            "de-DE": {
              singular: "Begriffsübersetzungen konnten nicht geladen werden."
            },
            "fr-FR": {
              singular: "Impossible de charger les traductions des termes."
            },
            "ja-JP": {
              singular: "用語の翻訳を読み込めませんでした。"
            },
            "ko-KR": {
              singular: "용어 번역을 불러올 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível carregar as traduções dos termos."
            },
            "zh-CN": {
              singular: "无法加载术语翻译。"
            }
          }
        }),
        rulesTitle: (0, _v73.translate)({
          singular: "Custom rules",
          dictionary: {
            es: {
              singular: "Reglas personalizadas"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Regeln"
            },
            "fr-FR": {
              singular: "Règles personnalisées"
            },
            "ja-JP": {
              singular: "カスタムルール"
            },
            "ko-KR": {
              singular: "사용자 지정 규칙"
            },
            "pt-BR": {
              singular: "Regras personalizadas"
            },
            "zh-CN": {
              singular: "自定义规则"
            }
          }
        }),
        rulesDescription: (0, _v73.translate)({
          singular: "Adds plain-language instructions for AI translations.",
          dictionary: {
            es: {
              singular: "Añade instrucciones en lenguaje sencillo para las traducciones por IA."
            },
            "de-DE": {
              singular: "Fügt leicht verständliche Anweisungen für KI-Übersetzungen hinzu."
            },
            "fr-FR": {
              singular: "Ajoute des instructions en langage clair pour les traductions par l'IA."
            },
            "ja-JP": {
              singular: "AI 翻訳向けにわかりやすい指示を追加します。"
            },
            "ko-KR": {
              singular: "AI 번역을 위한 평이한 언어 지침을 추가합니다."
            },
            "pt-BR": {
              singular: "Adiciona instruções em linguagem simples para traduções por IA."
            },
            "zh-CN": {
              singular: "为 AI 翻译添加通俗易懂的说明。"
            }
          }
        })
      };
      return {
        translations: _v0,
        rulesSection: {
          title: _v0.rulesTitle,
          description: _v0.rulesDescription
        }
      };
    }, []);
    return (0, _v1.jsxs)(_v3.Flex, {
      width: "100%",
      maxWidth: (0, _v4.rem)(640),
      margin: "0 auto",
      flexDirection: "column",
      paddingBottom: (0, _v4.rem)(48),
      children: [(0, _v1.jsx)(_v5.SettingsPageContentHeader, {
        title: _v1.title,
        description: _v1.description,
        notice: {
          status: "info",
          message: _v1.notice
        }
      }), (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        children: [(0, _v1.jsx)(_v58, {
          ownerUserId: _v0,
          translations: _v1
        }), (0, _v1.jsx)(_v72, {
          ownerUserId: _v0,
          translations: _v1
        }), (0, _v1.jsx)(_v6.TeamSettingsPageCategory, {
          title: _v2.title,
          description: _v2.description,
          headingAs: "h2"
        })]
      })]
    });
  };
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  _v0.s(["AccountDictionaryRoute", 0, ({
    ownerUserId: _v0
  }) => {
    let {
      settings: _v1,
      isLoadingResponse: _v2
    } = (0, _v76.useOrionSettings)();
    return _v2 ? (0, _v1.jsx)(_v22.Spinner, {}) : _v1.enable_account_wide_dictionary_management ? (0, _v1.jsx)(_v74, {
      ownerUserId: _v0
    }) : (0, _v1.jsx)(_v77.ErrorPage, {
      error: new _v75.ResourceNotFoundError()
    });
  }], 0);
}