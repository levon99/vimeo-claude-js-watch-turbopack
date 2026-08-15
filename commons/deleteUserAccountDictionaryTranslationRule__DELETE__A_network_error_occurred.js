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
    _v19 = _v0.i(0);
  async function _v20({
    baseUrl: _v0,
    where: {
      userId: _v1,
      ruleId: _v2
    },
    ..._v3
  }) {
    return (0, _v19.measureLatency)("deleteUserAccountDictionaryTranslationRule", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/account_dictionary/translation_rules/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v21({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      ruleId: _v4
    },
    ..._v5
  }) {
    return (0, _v19.measureLatency)("patchUserAccountDictionaryTranslationRule", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/translation_rules/${_v4}?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v22({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v19.measureLatency)("getUserAccountDictionaryTranslationRules", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/account_dictionary/translation_rules?${(0, _v18.searchQueryString)(_v3)}&fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v23({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v19.measureLatency)("postUserAccountDictionaryTranslationRules", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/translation_rules?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  function _v31(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v24.useGctlConfig)();
    return (0, _v30.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/account_dictionary/translation_rules?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v22({
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
  "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v24.useGctlConfig)();
    return (0, _v28.default)(_v2 ? `/users/${_v2.where.userId}/account_dictionary/translation_rules${(0, _v27.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v22({
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
  }, {
    endpoint: "/users/:userId/account_dictionary/translation_rules",
    method: "GET"
  }), "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v29.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v24.useGctlConfig)(),
      [_v5, _v6] = (0, _v27.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/account_dictionary/translation_rules${(0, _v27.serializeQuery)(_v0)}`, _v22({
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
    endpoint: "/users/:userId/account_dictionary/translation_rules",
    method: "GET"
  }), "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(_v31, {
    endpoint: "/users/:userId/account_dictionary/translation_rules",
    method: "GET"
  }), "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v24.useGctlConfig)(),
      [_v4, _v5] = (0, _v27.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v23({
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
    endpoint: "/users/:userId/account_dictionary/translation_rules",
    method: "POST"
  });
  let _v32 = "instruction",
    _v33 = _v0 => _v0.split("/").pop() ?? "",
    _v34 = _v0 => null === _v0.sourceLanguage && null === _v0.targetLanguage,
    _v35 = ({
      characterLimit: _v0,
      isSaving: _v1,
      ruleText: _v2,
      save: _v3,
      saveError: _v4,
      translations: _v5
    }) => {
      let [_v6, _v7] = (0, _v2.useState)(_v2),
        _v8 = (0, _v2.useRef)(_v2),
        _v9 = (0, _v2.useId)(),
        _v10 = `${_v9}-character-count`;
      (0, _v2.useEffect)(() => {
        _v6 === _v8.current && _v7(_v2), _v8.current = _v2;
      }, [_v6, _v2]);
      let _v11 = (0, _v2.useCallback)(async () => {
          if (_v6.trim() === _v2 || _v1) {
            _v6 !== _v2 && _v7(_v2);
            return;
          }
          await _v3(_v6);
        }, [_v6, _v1, _v2, _v3]),
        _v12 = (0, _v2.useCallback)(() => {
          _v11();
        }, [_v11]),
        _v13 = (0, _v2.useCallback)(_v0 => {
          _v7(_v0.target.value);
        }, []);
      return (0, _v1.jsx)(_v3.Flex, {
        flexDirection: "column",
        marginTop: (0, _v5.rem)(24),
        children: (0, _v1.jsxs)(_v11.FormControl, {
          id: _v9,
          isDisabled: _v1,
          isInvalid: !!_v4,
          children: [(0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: (0, _v5.rem)(4),
            children: [(0, _v1.jsx)(_v12.FormLabel, {
              marginBottom: "0",
              children: _v5.rulesInputLabel
            }), (0, _v1.jsx)(_v14.Text, {
              id: _v10,
              color: "text-secondary",
              variant: "body-md",
              children: _v5.rulesCharacterCount(_v6.length, _v0)
            })]
          }), (0, _v1.jsx)(_v15.Textarea, {
            "aria-describedby": _v10,
            height: (0, _v5.rem)(102),
            maxLength: _v0,
            placeholder: _v5.rulesPlaceholder,
            resize: "vertical",
            size: "sm",
            value: _v6,
            onBlur: _v12,
            onChange: _v13
          }), (0, _v1.jsx)(_v11.FormHelperText, {
            "aria-atomic": "true",
            "aria-live": "polite",
            color: _v4 ? "status-destructive-primary" : "text-tertiary",
            marginTop: (0, _v5.rem)(4),
            children: _v4 ? _v5.rulesSaveError : _v1 ? _v5.rulesSaving : _v5.rulesHelper
          })]
        })
      });
    },
    _v36 = ({
      ownerUserId: _v0,
      translations: _v1
    }) => {
      let {
          ruleText: _v2,
          characterLimit: _v3,
          isLoading: _v4,
          error: _v5,
          isSaving: _v6,
          retry: _v7,
          save: _v8,
          saveError: _v9
        } = (_v0 => {
          let {
              baseUrl: _v1,
              jwt: _v2,
              xVimeoPage: _v3,
              locale: _v4
            } = (0, _v24.useGctlConfig)(),
            _v5 = _v31(() => ({
              select: ["uri", "ruleText", "sourceLanguage", "targetLanguage"],
              where: {
                userId: _v0
              },
              query: {
                ruleType: _v32,
                perPage: 100
              }
            })),
            _v6 = (0, _v25.useGetUser)(() => ({
              select: ["accountDictionaryQuota.customRulesCharacters.limit"],
              where: {
                userId: _v0
              }
            })),
            _v7 = _v6.data?.accountDictionaryQuota?.customRulesCharacters?.limit ?? 0,
            {
              data: _v8,
              error: _v9,
              isLoading: _v10,
              isValidating: _v11,
              mutate: _v12,
              setSize: _v13,
              size: _v14
            } = _v5,
            _v15 = _v8?.[_v8.length - 1],
            _v16 = !!_v15?.paging.next;
          (0, _v2.useEffect)(() => {
            !_v16 || _v11 || _v9 || _v13(_v14 + 1);
          }, [_v9, _v16, _v11, _v13, _v14]);
          let _v17 = (0, _v2.useMemo)(() => _v8?.flatMap(_v0 => _v0.data).filter(_v34) ?? [], [_v8]),
            _v18 = _v17[0],
            [_v19, _v20] = (0, _v2.useState)(!1),
            [_v21, _v22] = (0, _v2.useState)(),
            _v23 = (0, _v2.useMemo)(() => ({
              "Content-Type": "application/json",
              Authorization: _v2 ? `jwt ${_v2}` : "",
              "Vimeo-Page": `${_v3}`,
              "Accept-Language": _v4 ?? "en"
            }), [_v2, _v4, _v3]),
            _v24 = (0, _v2.useCallback)(async _v0 => {
              for (let {
                uri: _v0
              } of _v0) try {
                await _v20({
                  baseUrl: _v1,
                  headers: _v23,
                  where: {
                    userId: _v0,
                    ruleId: _v33(_v0)
                  }
                });
              } catch (_v0) {
                if (!(_v0 instanceof _v18.NetworkError && 404 === _v0.status)) throw _v0;
              }
            }, [_v1, _v23, _v0]),
            _v25 = (0, _v2.useCallback)(async _v0 => {
              let _v1 = _v0.trim();
              _v20(!0), _v22(void 0);
              try {
                "" === _v1 ? await _v24(_v17) : _v18 ? (await _v21({
                  baseUrl: _v1,
                  headers: _v23,
                  select: ["uri"],
                  variables: {
                    ruleText: _v1
                  },
                  where: {
                    userId: _v0,
                    ruleId: _v33(_v18.uri)
                  }
                }), await _v24(_v17.slice(1))) : await _v23({
                  baseUrl: _v1,
                  headers: _v23,
                  select: ["uri"],
                  variables: {
                    ruleType: _v32,
                    sourceLanguage: null,
                    targetLanguage: null,
                    ruleText: _v1
                  },
                  where: {
                    userId: _v0
                  }
                }), await _v12().catch(() => void 0);
              } catch (_v0) {
                _v22(_v0);
              } finally {
                _v20(!1);
              }
            }, [_v1, _v24, _v18, _v17, _v23, _v12, _v0]),
            _v26 = (0, _v2.useCallback)(async () => {
              await _v12();
            }, [_v12]);
          return {
            ruleText: _v18?.ruleText ?? "",
            characterLimit: _v7,
            isLoading: _v10 || _v16 && !_v9,
            error: _v9,
            isSaving: _v19,
            saveError: _v21,
            retry: _v26,
            save: _v25
          };
        })(_v0),
        _v10 = (0, _v2.useCallback)(() => {
          _v7();
        }, [_v7]);
      return (0, _v1.jsx)(_v17.TeamSettingsPageCategory, {
        title: _v1.rulesTitle,
        description: _v1.rulesDescription,
        headingAs: "h2",
        children: _v4 ? (0, _v1.jsx)(_v3.Flex, {
          minHeight: (0, _v5.rem)(168),
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v1.jsx)(_v13.Spinner, {
            label: _v1.rulesLoadingLabel
          })
        }) : _v5 ? (0, _v1.jsx)(_v3.Flex, {
          minHeight: (0, _v5.rem)(168),
          alignItems: "center",
          children: (0, _v1.jsxs)(_v9.AlertRoot, {
            alignItems: "center",
            size: "sm",
            status: "error",
            variant: "error",
            width: "100%",
            children: [(0, _v1.jsx)(_v8.AlertIcon, {
              children: (0, _v1.jsx)(_v16.CircleExclamationFilled, {})
            }), (0, _v1.jsx)(_v7.AlertDescription, {
              flex: "1",
              children: _v1.rulesLoadingError
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              size: "sm",
              onClick: _v10,
              children: _v1.tryAgain
            })]
          })
        }) : (0, _v1.jsx)(_v35, {
          characterLimit: _v3,
          isSaving: _v6,
          ruleText: _v2,
          save: _v8,
          saveError: _v9,
          translations: _v1
        })
      });
    };
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = ({
    dropLabel: _v0,
    uploadLabel: _v1,
    uploadingHint: _v2,
    uploadingLabel: _v3,
    isBusy: _v4,
    onFileSelected: _v5
  }) => {
    let _v6 = (0, _v2.useRef)(null);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.Flex, {
        as: "button",
        type: "button",
        width: "100%",
        minHeight: (0, _v5.rem)(180),
        borderWidth: (0, _v5.rem)(1),
        borderStyle: "dashed",
        borderColor: "stroke",
        background: "transparent",
        color: "text-primary",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: (0, _v5.rem)(4),
        textAlign: "center",
        cursor: _v4 ? "not-allowed" : "pointer",
        disabled: _v4,
        "aria-busy": _v4,
        _hover: _v4 ? void 0 : {
          backgroundColor: "fill-component"
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "focus",
          outlineOffset: (0, _v5.rem)(1)
        },
        onClick: () => _v6.current?.click(),
        onDragOver: _v0 => _v0.preventDefault(),
        onDrop: _v0 => {
          _v0.preventDefault();
          let _v1 = _v0.dataTransfer.files[0];
          !_v4 && _v1 && _v5(_v1);
        },
        children: [_v4 ? (0, _v1.jsx)(_v46.Spinner, {}) : (0, _v1.jsx)(_v45.Upload, {
          boxSize: (0, _v5.rem)(32),
          "aria-hidden": !0
        }), (0, _v1.jsx)(_v14.Text, {
          variant: "heading-sm",
          children: _v4 ? _v3 : _v1
        }), (0, _v1.jsx)(_v14.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v4 ? _v2 : _v0
        })]
      }), (0, _v1.jsx)("input", {
        ref: _v6,
        type: "file",
        hidden: !0,
        "aria-label": _v1,
        accept: ".csv,text/csv",
        disabled: _v4,
        onChange: _v0 => {
          let _v1 = _v0.currentTarget.files?.[0];
          _v0.currentTarget.value = "", _v1 && _v5(_v1);
        }
      })]
    });
  };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = ({
      count: _v0,
      translations: _v1
    }) => (0, _v1.jsx)(_v14.Text, {
      variant: "body-md",
      color: "text-secondary",
      marginBottom: (0, _v5.rem)(16),
      children: _v2.Children.toArray(_v1.csvReviewSummary(_v0 => (0, _v1.jsx)(_v14.Text, {
        as: "span",
        variant: "body-md",
        color: "text-primary",
        fontFamily: "heading",
        children: _v2.Children.toArray(_v0)
      }, "csv-review-count"), _v0))
    }),
    _v64 = ({
      label: _v0,
      value: _v1,
      isDisabled: _v2,
      onChange: _v3
    }) => (0, _v1.jsx)(_v62.Td, {
      padding: 0,
      children: (0, _v1.jsx)(_v61.Input, {
        "aria-label": _v0,
        value: _v1,
        isDisabled: _v2,
        maxLength: 500,
        width: "100%",
        minWidth: 0,
        height: (0, _v5.rem)(44),
        border: 0,
        borderRadius: 0,
        backgroundColor: "fill-surface",
        color: "text-primary",
        textStyle: "body-md",
        paddingX: (0, _v5.rem)(12),
        sx: {
          outline: "none",
          "&:hover": {
            outline: "none"
          }
        },
        _focusVisible: {
          boxShadow: "inset 0 0 0 2px var(--vimeo-colors-text-primary)"
        },
        onChange: _v0 => _v3(_v0.currentTarget.value)
      })
    });
  var _v65 = _v0.g,
    _v66 = [],
    _v67 = [],
    _v68 = "u" > typeof Uint8Array ? Uint8Array : Array,
    _v69 = !1;
  function _v70() {
    _v69 = !0;
    for (var _v0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _v1 = 0, _v2 = _v0.length; _v1 < _v2; ++_v1) _v66[_v1] = _v0[_v1], _v67[_v0.charCodeAt(_v1)] = _v1;
    _v67[45] = 62, _v67[95] = 63;
  }
  function _v71(_v0) {
    _v69 || _v70();
    for (var _v1, _v2 = _v0.length, _v3 = _v2 % 3, _v4 = "", _v5 = [], _v6 = 0, _v7 = _v2 - _v3; _v6 < _v7; _v6 += 0) _v5.push(function (_v0, _v1, _v2) {
      for (var _v3, _v4 = [], _v5 = _v1; _v5 < _v2; _v5 += 3) _v3 = (_v0[_v5] << 16) + (_v0[_v5 + 1] << 8) + _v0[_v5 + 2], _v4.push(_v66[_v3 >> 18 & 63] + _v66[_v3 >> 12 & 63] + _v66[_v3 >> 6 & 63] + _v66[63 & _v3]);
      return _v4.join("");
    }(_v0, _v6, _v6 + 0 > _v7 ? _v7 : _v6 + 0));
    return 1 === _v3 ? (_v4 += _v66[(_v1 = _v0[_v2 - 1]) >> 2], _v4 += _v66[_v1 << 4 & 63], _v4 += "==") : 2 === _v3 && (_v4 += _v66[(_v1 = (_v0[_v2 - 2] << 8) + _v0[_v2 - 1]) >> 10], _v4 += _v66[_v1 >> 4 & 63], _v4 += _v66[_v1 << 2 & 63], _v4 += "="), _v5.push(_v4), _v5.join("");
  }
  function _v72(_v0, _v1, _v2, _v3, _v4) {
    var _v5,
      _v6,
      _v7 = 8 * _v4 - _v3 - 1,
      _v8 = (1 << _v7) - 1,
      _v9 = _v8 >> 1,
      _v10 = -7,
      _v11 = _v2 ? _v4 - 1 : 0,
      _v12 = _v2 ? -1 : 1,
      _v13 = _v0[_v1 + _v11];
    for (_v11 += _v12, _v5 = _v13 & (1 << -_v10) - 1, _v13 >>= -_v10, _v10 += _v7; _v10 > 0; _v5 = 256 * _v5 + _v0[_v1 + _v11], _v11 += _v12, _v10 -= 8);
    for (_v6 = _v5 & (1 << -_v10) - 1, _v5 >>= -_v10, _v10 += _v3; _v10 > 0; _v6 = 256 * _v6 + _v0[_v1 + _v11], _v11 += _v12, _v10 -= 8);
    if (0 === _v5) _v5 = 1 - _v9;else {
      if (_v5 === _v8) return _v6 ? NaN : 1 / 0 * (_v13 ? -1 : 1);
      _v6 += Math.pow(2, _v3), _v5 -= _v9;
    }
    return (_v13 ? -1 : 1) * _v6 * Math.pow(2, _v5 - _v3);
  }
  function _v73(_v0, _v1, _v2, _v3, _v4, _v5) {
    var _v6,
      _v7,
      _v8,
      _v9 = 8 * _v5 - _v4 - 1,
      _v10 = (1 << _v9) - 1,
      _v11 = _v10 >> 1,
      _v12 = 5960464477539062e-23 * (23 === _v4),
      _v13 = _v3 ? 0 : _v5 - 1,
      _v14 = _v3 ? 1 : -1,
      _v15 = +(_v1 < 0 || 0 === _v1 && 1 / _v1 < 0);
    for (isNaN(_v1 = Math.abs(_v1)) || _v1 === 1 / 0 ? (_v7 = +!!isNaN(_v1), _v6 = _v10) : (_v6 = Math.floor(Math.log(_v1) / Math.LN2), _v1 * (_v8 = Math.pow(2, -_v6)) < 1 && (_v6--, _v8 *= 2), _v6 + _v11 >= 1 ? _v1 += _v12 / _v8 : _v1 += _v12 * Math.pow(2, 1 - _v11), _v1 * _v8 >= 2 && (_v6++, _v8 /= 2), _v6 + _v11 >= _v10 ? (_v7 = 0, _v6 = _v10) : _v6 + _v11 >= 1 ? (_v7 = (_v1 * _v8 - 1) * Math.pow(2, _v4), _v6 += _v11) : (_v7 = _v1 * Math.pow(2, _v11 - 1) * Math.pow(2, _v4), _v6 = 0)); _v4 >= 8; _v0[_v2 + _v13] = 255 & _v7, _v13 += _v14, _v7 /= 256, _v4 -= 8);
    for (_v6 = _v6 << _v4 | _v7, _v9 += _v4; _v9 > 0; _v0[_v2 + _v13] = 255 & _v6, _v13 += _v14, _v6 /= 256, _v9 -= 8);
    _v0[_v2 + _v13 - _v14] |= 128 * _v15;
  }
  var _v74 = {}.toString,
    _v75 = Array.isArray || function (_v0) {
      return "[object Array]" == _v74.call(_v0);
    };
  function _v76() {
    return _v78.TYPED_ARRAY_SUPPORT ? 0 : 0;
  }
  function _v77(_v0, _v1) {
    if (_v76() < _v1) throw RangeError("Invalid typed array length");
    return _v78.TYPED_ARRAY_SUPPORT ? (_v0 = new Uint8Array(_v1)).__proto__ = _v78.prototype : (null === _v0 && (_v0 = new _v78(_v1)), _v0.length = _v1), _v0;
  }
  function _v78(_v0, _v1, _v2) {
    if (!_v78.TYPED_ARRAY_SUPPORT && !(this instanceof _v78)) return new _v78(_v0, _v1, _v2);
    if ("number" == typeof _v0) {
      if ("string" == typeof _v1) throw Error("If encoding is specified then the first argument must be a string");
      return _v81(this, _v0);
    }
    return _v79(this, _v0, _v1, _v2);
  }
  function _v79(_v0, _v1, _v2, _v3) {
    if ("number" == typeof _v1) throw TypeError('"value" argument must not be a number');
    return "u" > typeof ArrayBuffer && _v1 instanceof ArrayBuffer ? function (_v0, _v1, _v2, _v3) {
      if (_v1.byteLength, _v2 < 0 || _v1.byteLength < _v2) throw RangeError("'offset' is out of bounds");
      if (_v1.byteLength < _v2 + (_v3 || 0)) throw RangeError("'length' is out of bounds");
      return _v1 = void 0 === _v2 && void 0 === _v3 ? new Uint8Array(_v1) : void 0 === _v3 ? new Uint8Array(_v1, _v2) : new Uint8Array(_v1, _v2, _v3), _v78.TYPED_ARRAY_SUPPORT ? (_v0 = _v1).__proto__ = _v78.prototype : _v0 = _v82(_v0, _v1), _v0;
    }(_v0, _v1, _v2, _v3) : "string" == typeof _v1 ? function (_v0, _v1, _v2) {
      if (("string" != typeof _v2 || "" === _v2) && (_v2 = "utf8"), !_v78.isEncoding(_v2)) throw TypeError('"encoding" must be a valid string encoding');
      var _v3 = 0 | _v85(_v1, _v2),
        _v4 = (_v0 = _v77(_v0, _v3)).write(_v1, _v2);
      return _v4 !== _v3 && (_v0 = _v0.slice(0, _v4)), _v0;
    }(_v0, _v1, _v2) : function (_v0, _v1) {
      if (_v84(_v1)) {
        var _v2,
          _v3 = 0 | _v83(_v1.length);
        return 0 === (_v0 = _v77(_v0, _v3)).length || _v1.copy(_v0, 0, 0, _v3), _v0;
      }
      if (_v1) {
        if ("u" > typeof ArrayBuffer && _v1.buffer instanceof ArrayBuffer || "length" in _v1) {
          return "number" != typeof _v1.length || (_v2 = _v1.length) != _v2 ? _v77(_v0, 0) : _v82(_v0, _v1);
        }
        if ("Buffer" === _v1.type && _v75(_v1.data)) return _v82(_v0, _v1.data);
      }
      throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(_v0, _v1);
  }
  function _v80(_v0) {
    if ("number" != typeof _v0) throw TypeError('"size" argument must be a number');
    if (_v0 < 0) throw RangeError('"size" argument must not be negative');
  }
  function _v81(_v0, _v1) {
    if (_v80(_v1), _v0 = _v77(_v0, _v1 < 0 ? 0 : 0 | _v83(_v1)), !_v78.TYPED_ARRAY_SUPPORT) for (var _v2 = 0; _v2 < _v1; ++_v2) _v0[_v2] = 0;
    return _v0;
  }
  function _v82(_v0, _v1) {
    var _v2 = _v1.length < 0 ? 0 : 0 | _v83(_v1.length);
    _v0 = _v77(_v0, _v2);
    for (var _v3 = 0; _v3 < _v2; _v3 += 1) _v0[_v3] = 255 & _v1[_v3];
    return _v0;
  }
  function _v83(_v0) {
    if (_v0 >= _v76()) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + _v76().toString(16) + " bytes");
    return 0 | _v0;
  }
  function _v84(_v0) {
    return !!(null != _v0 && _v0._isBuffer);
  }
  function _v85(_v0, _v1) {
    if (_v84(_v0)) return _v0.length;
    if ("u" > typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(_v0) || _v0 instanceof ArrayBuffer)) return _v0.byteLength;
    "string" != typeof _v0 && (_v0 = "" + _v0);
    var _v2 = _v0.length;
    if (0 === _v2) return 0;
    for (var _v3 = !1;;) switch (_v1) {
      case "ascii":
      case "latin1":
      case "binary":
        return _v2;
      case "utf8":
      case "utf-8":
      case void 0:
        return _v99(_v0).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * _v2;
      case "hex":
        return _v2 >>> 1;
      case "base64":
        return _v101(_v0).length;
      default:
        if (_v3) return _v99(_v0).length;
        _v1 = ("" + _v1).toLowerCase(), _v3 = !0;
    }
  }
  function _v86(_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6 = !1;
    if ((void 0 === _v1 || _v1 < 0) && (_v1 = 0), _v1 > this.length || ((void 0 === _v2 || _v2 > this.length) && (_v2 = this.length), _v2 <= 0 || (_v2 >>>= 0) <= (_v1 >>>= 0))) return "";
    for (_v0 || (_v0 = "utf8");;) switch (_v0) {
      case "hex":
        return function (_v0, _v1, _v2) {
          var _v3,
            _v4 = _v0.length;
          (!_v1 || _v1 < 0) && (_v1 = 0), (!_v2 || _v2 < 0 || _v2 > _v4) && (_v2 = _v4);
          for (var _v5 = "", _v6 = _v1; _v6 < _v2; ++_v6) {
            _v5 += (_v3 = _v0[_v6]) < 16 ? "0" + _v3.toString(16) : _v3.toString(16);
          }
          return _v5;
        }(this, _v1, _v2);
      case "utf8":
      case "utf-8":
        return _v90(this, _v1, _v2);
      case "ascii":
        return function (_v0, _v1, _v2) {
          var _v3 = "";
          _v2 = Math.min(_v0.length, _v2);
          for (var _v4 = _v1; _v4 < _v2; ++_v4) _v3 += String.fromCharCode(127 & _v0[_v4]);
          return _v3;
        }(this, _v1, _v2);
      case "latin1":
      case "binary":
        return function (_v0, _v1, _v2) {
          var _v3 = "";
          _v2 = Math.min(_v0.length, _v2);
          for (var _v4 = _v1; _v4 < _v2; ++_v4) _v3 += String.fromCharCode(_v0[_v4]);
          return _v3;
        }(this, _v1, _v2);
      case "base64":
        return _v3 = this, _v4 = _v1, _v5 = _v2, 0 === _v4 && _v5 === _v3.length ? _v71(_v3) : _v71(_v3.slice(_v4, _v5));
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return function (_v0, _v1, _v2) {
          for (var _v3 = _v0.slice(_v1, _v2), _v4 = "", _v5 = 0; _v5 < _v3.length; _v5 += 2) _v4 += String.fromCharCode(_v3[_v5] + 256 * _v3[_v5 + 1]);
          return _v4;
        }(this, _v1, _v2);
      default:
        if (_v6) throw TypeError("Unknown encoding: " + _v0);
        _v0 = (_v0 + "").toLowerCase(), _v6 = !0;
    }
  }
  function _v87(_v0, _v1, _v2) {
    var _v3 = _v0[_v1];
    _v0[_v1] = _v0[_v2], _v0[_v2] = _v3;
  }
  function _v88(_v0, _v1, _v2, _v3, _v4) {
    if (0 === _v0.length) return -1;
    if ("string" == typeof _v2 ? (_v3 = _v2, _v2 = 0) : _v2 > 0 ? _v2 = 0 : _v2 < 0 && (_v2 = 0), isNaN(_v2 *= 1) && (_v2 = _v4 ? 0 : _v0.length - 1), _v2 < 0 && (_v2 = _v0.length + _v2), _v2 >= _v0.length) {
      if (_v4) return -1;else _v2 = _v0.length - 1;
    } else if (_v2 < 0) if (!_v4) return -1;else _v2 = 0;
    if ("string" == typeof _v1 && (_v1 = _v78.from(_v1, _v3)), _v84(_v1)) return 0 === _v1.length ? -1 : _v89(_v0, _v1, _v2, _v3, _v4);
    if ("number" == typeof _v1) {
      if (_v1 &= 255, _v78.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf) if (_v4) return Uint8Array.prototype.indexOf.call(_v0, _v1, _v2);else return Uint8Array.prototype.lastIndexOf.call(_v0, _v1, _v2);
      return _v89(_v0, [_v1], _v2, _v3, _v4);
    }
    throw TypeError("val must be string, number or Buffer");
  }
  function _v89(_v0, _v1, _v2, _v3, _v4) {
    var _v5,
      _v6 = 1,
      _v7 = _v0.length,
      _v8 = _v1.length;
    if (void 0 !== _v3 && ("ucs2" === (_v3 = String(_v3).toLowerCase()) || "ucs-2" === _v3 || "utf16le" === _v3 || "utf-16le" === _v3)) {
      if (_v0.length < 2 || _v1.length < 2) return -1;
      _v6 = 2, _v7 /= 2, _v8 /= 2, _v2 /= 2;
    }
    function _v9(_v0, _v1) {
      return 1 === _v6 ? _v0[_v1] : _v0.readUInt16BE(_v1 * _v6);
    }
    if (_v4) {
      var _v10 = -1;
      for (_v5 = _v2; _v5 < _v7; _v5++) if (_v9(_v0, _v5) === _v9(_v1, -1 === _v10 ? 0 : _v5 - _v10)) {
        if (-1 === _v10 && (_v10 = _v5), _v5 - _v10 + 1 === _v8) return _v10 * _v6;
      } else -1 !== _v10 && (_v5 -= _v5 - _v10), _v10 = -1;
    } else for (_v2 + _v8 > _v7 && (_v2 = _v7 - _v8), _v5 = _v2; _v5 >= 0; _v5--) {
      for (var _v11 = !0, _v12 = 0; _v12 < _v8; _v12++) if (_v9(_v0, _v5 + _v12) !== _v9(_v1, _v12)) {
        _v11 = !1;
        break;
      }
      if (_v11) return _v5;
    }
    return -1;
  }
  _v78.TYPED_ARRAY_SUPPORT = void 0 === _v65.TYPED_ARRAY_SUPPORT || _v65.TYPED_ARRAY_SUPPORT, _v76(), _v78.poolSize = 0, _v78._augment = function (_v0) {
    return _v0.__proto__ = _v78.prototype, _v0;
  }, _v78.from = function (_v0, _v1, _v2) {
    return _v79(null, _v0, _v1, _v2);
  }, _v78.TYPED_ARRAY_SUPPORT && (_v78.prototype.__proto__ = Uint8Array.prototype, _v78.__proto__ = Uint8Array, "u" > typeof Symbol && Symbol.species && _v78[Symbol.species]), _v78.alloc = function (_v0, _v1, _v2) {
    return (_v80(_v0), _v0 <= 0) ? _v77(null, _v0) : void 0 !== _v1 ? "string" == typeof _v2 ? _v77(null, _v0).fill(_v1, _v2) : _v77(null, _v0).fill(_v1) : _v77(null, _v0);
  }, _v78.allocUnsafe = function (_v0) {
    return _v81(null, _v0);
  }, _v78.allocUnsafeSlow = function (_v0) {
    return _v81(null, _v0);
  }, _v78.isBuffer = _v103, _v78.compare = function (_v0, _v1) {
    if (!_v84(_v0) || !_v84(_v1)) throw TypeError("Arguments must be Buffers");
    if (_v0 === _v1) return 0;
    for (var _v2 = _v0.length, _v3 = _v1.length, _v4 = 0, _v5 = Math.min(_v2, _v3); _v4 < _v5; ++_v4) if (_v0[_v4] !== _v1[_v4]) {
      _v2 = _v0[_v4], _v3 = _v1[_v4];
      break;
    }
    return _v2 < _v3 ? -1 : +(_v3 < _v2);
  }, _v78.isEncoding = function (_v0) {
    switch (String(_v0).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, _v78.concat = function (_v0, _v1) {
    if (!_v75(_v0)) throw TypeError('"list" argument must be an Array of Buffers');
    if (0 === _v0.length) return _v78.alloc(0);
    if (void 0 === _v1) for (_v2 = 0, _v1 = 0; _v2 < _v0.length; ++_v2) _v1 += _v0[_v2].length;
    var _v2,
      _v3 = _v78.allocUnsafe(_v1),
      _v4 = 0;
    for (_v2 = 0; _v2 < _v0.length; ++_v2) {
      var _v5 = _v0[_v2];
      if (!_v84(_v5)) throw TypeError('"list" argument must be an Array of Buffers');
      _v5.copy(_v3, _v4), _v4 += _v5.length;
    }
    return _v3;
  }, _v78.byteLength = _v85, _v78.prototype._isBuffer = !0, _v78.prototype.swap16 = function () {
    var _v0 = this.length;
    if (_v0 % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
    for (var _v1 = 0; _v1 < _v0; _v1 += 2) _v87(this, _v1, _v1 + 1);
    return this;
  }, _v78.prototype.swap32 = function () {
    var _v0 = this.length;
    if (_v0 % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
    for (var _v1 = 0; _v1 < _v0; _v1 += 4) _v87(this, _v1, _v1 + 3), _v87(this, _v1 + 1, _v1 + 2);
    return this;
  }, _v78.prototype.swap64 = function () {
    var _v0 = this.length;
    if (_v0 % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
    for (var _v1 = 0; _v1 < _v0; _v1 += 8) _v87(this, _v1, _v1 + 7), _v87(this, _v1 + 1, _v1 + 6), _v87(this, _v1 + 2, _v1 + 5), _v87(this, _v1 + 3, _v1 + 4);
    return this;
  }, _v78.prototype.toString = function () {
    var _v0 = 0 | this.length;
    return 0 === _v0 ? "" : 0 == arguments.length ? _v90(this, 0, _v0) : _v86.apply(this, arguments);
  }, _v78.prototype.equals = function (_v0) {
    if (!_v84(_v0)) throw TypeError("Argument must be a Buffer");
    return this === _v0 || 0 === _v78.compare(this, _v0);
  }, _v78.prototype.inspect = function () {
    var _v0 = "";
    return this.length > 0 && (_v0 = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (_v0 += " ... ")), "<Buffer " + _v0 + ">";
  }, _v78.prototype.compare = function (_v0, _v1, _v2, _v3, _v4) {
    if (!_v84(_v0)) throw TypeError("Argument must be a Buffer");
    if (void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = _v0 ? _v0.length : 0), void 0 === _v3 && (_v3 = 0), void 0 === _v4 && (_v4 = this.length), _v1 < 0 || _v2 > _v0.length || _v3 < 0 || _v4 > this.length) throw RangeError("out of range index");
    if (_v3 >= _v4 && _v1 >= _v2) return 0;
    if (_v3 >= _v4) return -1;
    if (_v1 >= _v2) return 1;
    if (_v1 >>>= 0, _v2 >>>= 0, _v3 >>>= 0, _v4 >>>= 0, this === _v0) return 0;
    for (var _v5 = _v4 - _v3, _v6 = _v2 - _v1, _v7 = Math.min(_v5, _v6), _v8 = this.slice(_v3, _v4), _v9 = _v0.slice(_v1, _v2), _v10 = 0; _v10 < _v7; ++_v10) if (_v8[_v10] !== _v9[_v10]) {
      _v5 = _v8[_v10], _v6 = _v9[_v10];
      break;
    }
    return _v5 < _v6 ? -1 : +(_v6 < _v5);
  }, _v78.prototype.includes = function (_v0, _v1, _v2) {
    return -1 !== this.indexOf(_v0, _v1, _v2);
  }, _v78.prototype.indexOf = function (_v0, _v1, _v2) {
    return _v88(this, _v0, _v1, _v2, !0);
  }, _v78.prototype.lastIndexOf = function (_v0, _v1, _v2) {
    return _v88(this, _v0, _v1, _v2, !1);
  };
  function _v90(_v0, _v1, _v2) {
    _v2 = Math.min(_v0.length, _v2);
    for (var _v3 = [], _v4 = _v1; _v4 < _v2;) {
      var _v5,
        _v6,
        _v7,
        _v8,
        _v9 = _v0[_v4],
        _v10 = null,
        _v11 = _v9 > 239 ? 4 : _v9 > 223 ? 3 : _v9 > 191 ? 2 : 1;
      if (_v4 + _v11 <= _v2) switch (_v11) {
        case 1:
          _v9 < 128 && (_v10 = _v9);
          break;
        case 2:
          (192 & (_v5 = _v0[_v4 + 1])) == 128 && (_v8 = (31 & _v9) << 6 | 63 & _v5) > 127 && (_v10 = _v8);
          break;
        case 3:
          _v5 = _v0[_v4 + 1], _v6 = _v0[_v4 + 2], (192 & _v5) == 128 && (192 & _v6) == 128 && (_v8 = (15 & _v9) << 12 | (63 & _v5) << 6 | 63 & _v6) > 0 && (_v8 < 0 || _v8 > 0) && (_v10 = _v8);
          break;
        case 4:
          _v5 = _v0[_v4 + 1], _v6 = _v0[_v4 + 2], _v7 = _v0[_v4 + 3], (192 & _v5) == 128 && (192 & _v6) == 128 && (192 & _v7) == 128 && (_v8 = (15 & _v9) << 18 | (63 & _v5) << 12 | (63 & _v6) << 6 | 63 & _v7) > 0 && _v8 < 0 && (_v10 = _v8);
      }
      null === _v10 ? (_v10 = 0, _v11 = 1) : _v10 > 0 && (_v10 -= 0, _v3.push(_v10 >>> 10 & 0 | 0), _v10 = 0 | 0 & _v10), _v3.push(_v10), _v4 += _v11;
    }
    var _v12 = _v3,
      _v13 = _v12.length;
    if (_v13 <= 0) return String.fromCharCode.apply(String, _v12);
    for (var _v14 = "", _v15 = 0; _v15 < _v13;) _v14 += String.fromCharCode.apply(String, _v12.slice(_v15, _v15 += 0));
    return _v14;
  }
  function _v91(_v0, _v1, _v2) {
    if (_v0 % 1 != 0 || _v0 < 0) throw RangeError("offset is not uint");
    if (_v0 + _v1 > _v2) throw RangeError("Trying to access beyond buffer length");
  }
  function _v92(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (!_v84(_v0)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (_v1 > _v4 || _v1 < _v5) throw RangeError('"value" argument is out of bounds');
    if (_v2 + _v3 > _v0.length) throw RangeError("Index out of range");
  }
  function _v93(_v0, _v1, _v2, _v3) {
    _v1 < 0 && (_v1 = 0 + _v1 + 1);
    for (var _v4 = 0, _v5 = Math.min(_v0.length - _v2, 2); _v4 < _v5; ++_v4) _v0[_v2 + _v4] = (_v1 & 255 << 8 * (_v3 ? _v4 : 1 - _v4)) >>> (_v3 ? _v4 : 1 - _v4) * 8;
  }
  function _v94(_v0, _v1, _v2, _v3) {
    _v1 < 0 && (_v1 = 0 + _v1 + 1);
    for (var _v4 = 0, _v5 = Math.min(_v0.length - _v2, 4); _v4 < _v5; ++_v4) _v0[_v2 + _v4] = _v1 >>> (_v3 ? _v4 : 3 - _v4) * 8 & 255;
  }
  function _v95(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (_v2 + _v3 > _v0.length || _v2 < 0) throw RangeError("Index out of range");
  }
  function _v96(_v0, _v1, _v2, _v3, _v4) {
    return _v4 || _v95(_v0, _v1, _v2, 4), _v73(_v0, _v1, _v2, _v3, 23, 4), _v2 + 4;
  }
  function _v97(_v0, _v1, _v2, _v3, _v4) {
    return _v4 || _v95(_v0, _v1, _v2, 8), _v73(_v0, _v1, _v2, _v3, 52, 8), _v2 + 8;
  }
  _v78.prototype.write = function (_v0, _v1, _v2, _v3) {
    if (void 0 === _v1) _v3 = "utf8", _v2 = this.length, _v1 = 0;else if (void 0 === _v2 && "string" == typeof _v1) _v3 = _v1, _v2 = this.length, _v1 = 0;else if (isFinite(_v1)) _v1 |= 0, isFinite(_v2) ? (_v2 |= 0, void 0 === _v3 && (_v3 = "utf8")) : (_v3 = _v2, _v2 = void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10,
      _v11,
      _v12 = this.length - _v1;
    if ((void 0 === _v2 || _v2 > _v12) && (_v2 = _v12), _v0.length > 0 && (_v2 < 0 || _v1 < 0) || _v1 > this.length) throw RangeError("Attempt to write outside buffer bounds");
    _v3 || (_v3 = "utf8");
    for (var _v13 = !1;;) switch (_v3) {
      case "hex":
        return function (_v0, _v1, _v2, _v3) {
          _v2 = Number(_v2) || 0;
          var _v4 = _v0.length - _v2;
          _v3 ? (_v3 = Number(_v3)) > _v4 && (_v3 = _v4) : _v3 = _v4;
          var _v5 = _v1.length;
          if (_v5 % 2 != 0) throw TypeError("Invalid hex string");
          _v3 > _v5 / 2 && (_v3 = _v5 / 2);
          for (var _v6 = 0; _v6 < _v3; ++_v6) {
            var _v7 = parseInt(_v1.substr(2 * _v6, 2), 16);
            if (isNaN(_v7)) break;
            _v0[_v2 + _v6] = _v7;
          }
          return _v6;
        }(this, _v0, _v1, _v2);
      case "utf8":
      case "utf-8":
        return _v4 = _v1, _v5 = _v2, _v102(_v99(_v0, this.length - _v4), this, _v4, _v5);
      case "ascii":
        return _v6 = _v1, _v7 = _v2, _v102(_v100(_v0), this, _v6, _v7);
      case "latin1":
      case "binary":
        return function (_v0, _v1, _v2, _v3) {
          return _v102(_v100(_v1), _v0, _v2, _v3);
        }(this, _v0, _v1, _v2);
      case "base64":
        return _v8 = _v1, _v9 = _v2, _v102(_v101(_v0), this, _v8, _v9);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return _v10 = _v1, _v11 = _v2, _v102(function (_v0, _v1) {
          for (var _v2, _v3, _v4 = [], _v5 = 0; _v5 < _v0.length && !((_v1 -= 2) < 0); ++_v5) _v3 = (_v2 = _v0.charCodeAt(_v5)) >> 8, _v4.push(_v2 % 256), _v4.push(_v3);
          return _v4;
        }(_v0, this.length - _v10), this, _v10, _v11);
      default:
        if (_v13) throw TypeError("Unknown encoding: " + _v3);
        _v3 = ("" + _v3).toLowerCase(), _v13 = !0;
    }
  }, _v78.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  }, _v78.prototype.slice = function (_v0, _v1) {
    var _v2,
      _v3 = this.length;
    if (_v0 = ~~_v0, _v1 = void 0 === _v1 ? _v3 : ~~_v1, _v0 < 0 ? (_v0 += _v3) < 0 && (_v0 = 0) : _v0 > _v3 && (_v0 = _v3), _v1 < 0 ? (_v1 += _v3) < 0 && (_v1 = 0) : _v1 > _v3 && (_v1 = _v3), _v1 < _v0 && (_v1 = _v0), _v78.TYPED_ARRAY_SUPPORT) (_v2 = this.subarray(_v0, _v1)).__proto__ = _v78.prototype;else {
      var _v4 = _v1 - _v0;
      _v2 = new _v78(_v4, void 0);
      for (var _v5 = 0; _v5 < _v4; ++_v5) _v2[_v5] = this[_v5 + _v0];
    }
    return _v2;
  }, _v78.prototype.readUIntLE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v91(_v0, _v1, this.length);
    for (var _v3 = this[_v0], _v4 = 1, _v5 = 0; ++_v5 < _v1 && (_v4 *= 256);) _v3 += this[_v0 + _v5] * _v4;
    return _v3;
  }, _v78.prototype.readUIntBE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v91(_v0, _v1, this.length);
    for (var _v3 = this[_v0 + --_v1], _v4 = 1; _v1 > 0 && (_v4 *= 256);) _v3 += this[_v0 + --_v1] * _v4;
    return _v3;
  }, _v78.prototype.readUInt8 = function (_v0, _v1) {
    return _v1 || _v91(_v0, 1, this.length), this[_v0];
  }, _v78.prototype.readUInt16LE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 2, this.length), this[_v0] | this[_v0 + 1] << 8;
  }, _v78.prototype.readUInt16BE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 2, this.length), this[_v0] << 8 | this[_v0 + 1];
  }, _v78.prototype.readUInt32LE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 4, this.length), (this[_v0] | this[_v0 + 1] << 8 | this[_v0 + 2] << 16) + 0 * this[_v0 + 3];
  }, _v78.prototype.readUInt32BE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 4, this.length), 0 * this[_v0] + (this[_v0 + 1] << 16 | this[_v0 + 2] << 8 | this[_v0 + 3]);
  }, _v78.prototype.readIntLE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v91(_v0, _v1, this.length);
    for (var _v3 = this[_v0], _v4 = 1, _v5 = 0; ++_v5 < _v1 && (_v4 *= 256);) _v3 += this[_v0 + _v5] * _v4;
    return _v3 >= (_v4 *= 128) && (_v3 -= Math.pow(2, 8 * _v1)), _v3;
  }, _v78.prototype.readIntBE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v91(_v0, _v1, this.length);
    for (var _v3 = _v1, _v4 = 1, _v5 = this[_v0 + --_v3]; _v3 > 0 && (_v4 *= 256);) _v5 += this[_v0 + --_v3] * _v4;
    return _v5 >= (_v4 *= 128) && (_v5 -= Math.pow(2, 8 * _v1)), _v5;
  }, _v78.prototype.readInt8 = function (_v0, _v1) {
    return (_v1 || _v91(_v0, 1, this.length), 128 & this[_v0]) ? -((255 - this[_v0] + 1) * 1) : this[_v0];
  }, _v78.prototype.readInt16LE = function (_v0, _v1) {
    _v1 || _v91(_v0, 2, this.length);
    var _v2 = this[_v0] | this[_v0 + 1] << 8;
    return 0 & _v2 ? 0 | _v2 : _v2;
  }, _v78.prototype.readInt16BE = function (_v0, _v1) {
    _v1 || _v91(_v0, 2, this.length);
    var _v2 = this[_v0 + 1] | this[_v0] << 8;
    return 0 & _v2 ? 0 | _v2 : _v2;
  }, _v78.prototype.readInt32LE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 4, this.length), this[_v0] | this[_v0 + 1] << 8 | this[_v0 + 2] << 16 | this[_v0 + 3] << 24;
  }, _v78.prototype.readInt32BE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 4, this.length), this[_v0] << 24 | this[_v0 + 1] << 16 | this[_v0 + 2] << 8 | this[_v0 + 3];
  }, _v78.prototype.readFloatLE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 4, this.length), _v72(this, _v0, !0, 23, 4);
  }, _v78.prototype.readFloatBE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 4, this.length), _v72(this, _v0, !1, 23, 4);
  }, _v78.prototype.readDoubleLE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 8, this.length), _v72(this, _v0, !0, 52, 8);
  }, _v78.prototype.readDoubleBE = function (_v0, _v1) {
    return _v1 || _v91(_v0, 8, this.length), _v72(this, _v0, !1, 52, 8);
  }, _v78.prototype.writeUIntLE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, _v2 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2) - 1;
      _v92(this, _v0, _v1, _v2, _v4, 0);
    }
    var _v5 = 1,
      _v6 = 0;
    for (this[_v1] = 255 & _v0; ++_v6 < _v2 && (_v5 *= 256);) this[_v1 + _v6] = _v0 / _v5 & 255;
    return _v1 + _v2;
  }, _v78.prototype.writeUIntBE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, _v2 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2) - 1;
      _v92(this, _v0, _v1, _v2, _v4, 0);
    }
    var _v5 = _v2 - 1,
      _v6 = 1;
    for (this[_v1 + _v5] = 255 & _v0; --_v5 >= 0 && (_v6 *= 256);) this[_v1 + _v5] = _v0 / _v6 & 255;
    return _v1 + _v2;
  }, _v78.prototype.writeUInt8 = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 1, 255, 0), _v78.TYPED_ARRAY_SUPPORT || (_v0 = Math.floor(_v0)), this[_v1] = 255 & _v0, _v1 + 1;
  }, _v78.prototype.writeUInt16LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 2, 0, 0), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8) : _v93(this, _v0, _v1, !0), _v1 + 2;
  }, _v78.prototype.writeUInt16BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 2, 0, 0), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 8, this[_v1 + 1] = 255 & _v0) : _v93(this, _v0, _v1, !1), _v1 + 2;
  }, _v78.prototype.writeUInt32LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 4, 0, 0), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1 + 3] = _v0 >>> 24, this[_v1 + 2] = _v0 >>> 16, this[_v1 + 1] = _v0 >>> 8, this[_v1] = 255 & _v0) : _v94(this, _v0, _v1, !0), _v1 + 4;
  }, _v78.prototype.writeUInt32BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 4, 0, 0), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 24, this[_v1 + 1] = _v0 >>> 16, this[_v1 + 2] = _v0 >>> 8, this[_v1 + 3] = 255 & _v0) : _v94(this, _v0, _v1, !1), _v1 + 4;
  }, _v78.prototype.writeIntLE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2 - 1);
      _v92(this, _v0, _v1, _v2, _v4 - 1, -_v4);
    }
    var _v5 = 0,
      _v6 = 1,
      _v7 = 0;
    for (this[_v1] = 255 & _v0; ++_v5 < _v2 && (_v6 *= 256);) _v0 < 0 && 0 === _v7 && 0 !== this[_v1 + _v5 - 1] && (_v7 = 1), this[_v1 + _v5] = (_v0 / _v6 | 0) - _v7 & 255;
    return _v1 + _v2;
  }, _v78.prototype.writeIntBE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2 - 1);
      _v92(this, _v0, _v1, _v2, _v4 - 1, -_v4);
    }
    var _v5 = _v2 - 1,
      _v6 = 1,
      _v7 = 0;
    for (this[_v1 + _v5] = 255 & _v0; --_v5 >= 0 && (_v6 *= 256);) _v0 < 0 && 0 === _v7 && 0 !== this[_v1 + _v5 + 1] && (_v7 = 1), this[_v1 + _v5] = (_v0 / _v6 | 0) - _v7 & 255;
    return _v1 + _v2;
  }, _v78.prototype.writeInt8 = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 1, 127, -128), _v78.TYPED_ARRAY_SUPPORT || (_v0 = Math.floor(_v0)), _v0 < 0 && (_v0 = 255 + _v0 + 1), this[_v1] = 255 & _v0, _v1 + 1;
  }, _v78.prototype.writeInt16LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 2, 0, 0), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8) : _v93(this, _v0, _v1, !0), _v1 + 2;
  }, _v78.prototype.writeInt16BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 2, 0, 0), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 8, this[_v1 + 1] = 255 & _v0) : _v93(this, _v0, _v1, !1), _v1 + 2;
  }, _v78.prototype.writeInt32LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 4, 0, 0), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8, this[_v1 + 2] = _v0 >>> 16, this[_v1 + 3] = _v0 >>> 24) : _v94(this, _v0, _v1, !0), _v1 + 4;
  }, _v78.prototype.writeInt32BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v92(this, _v0, _v1, 4, 0, 0), _v0 < 0 && (_v0 = 0 + _v0 + 1), _v78.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 24, this[_v1 + 1] = _v0 >>> 16, this[_v1 + 2] = _v0 >>> 8, this[_v1 + 3] = 255 & _v0) : _v94(this, _v0, _v1, !1), _v1 + 4;
  }, _v78.prototype.writeFloatLE = function (_v0, _v1, _v2) {
    return _v96(this, _v0, _v1, !0, _v2);
  }, _v78.prototype.writeFloatBE = function (_v0, _v1, _v2) {
    return _v96(this, _v0, _v1, !1, _v2);
  }, _v78.prototype.writeDoubleLE = function (_v0, _v1, _v2) {
    return _v97(this, _v0, _v1, !0, _v2);
  }, _v78.prototype.writeDoubleBE = function (_v0, _v1, _v2) {
    return _v97(this, _v0, _v1, !1, _v2);
  }, _v78.prototype.copy = function (_v0, _v1, _v2, _v3) {
    if (_v2 || (_v2 = 0), _v3 || 0 === _v3 || (_v3 = this.length), _v1 >= _v0.length && (_v1 = _v0.length), _v1 || (_v1 = 0), _v3 > 0 && _v3 < _v2 && (_v3 = _v2), _v3 === _v2 || 0 === _v0.length || 0 === this.length) return 0;
    if (_v1 < 0) throw RangeError("targetStart out of bounds");
    if (_v2 < 0 || _v2 >= this.length) throw RangeError("sourceStart out of bounds");
    if (_v3 < 0) throw RangeError("sourceEnd out of bounds");
    _v3 > this.length && (_v3 = this.length), _v0.length - _v1 < _v3 - _v2 && (_v3 = _v0.length - _v1 + _v2);
    var _v4,
      _v5 = _v3 - _v2;
    if (this === _v0 && _v2 < _v1 && _v1 < _v3) for (_v4 = _v5 - 1; _v4 >= 0; --_v4) _v0[_v4 + _v1] = this[_v4 + _v2];else if (_v5 < 0 || !_v78.TYPED_ARRAY_SUPPORT) for (_v4 = 0; _v4 < _v5; ++_v4) _v0[_v4 + _v1] = this[_v4 + _v2];else Uint8Array.prototype.set.call(_v0, this.subarray(_v2, _v2 + _v5), _v1);
    return _v5;
  }, _v78.prototype.fill = function (_v0, _v1, _v2, _v3) {
    if ("string" == typeof _v0) {
      if ("string" == typeof _v1 ? (_v3 = _v1, _v1 = 0, _v2 = this.length) : "string" == typeof _v2 && (_v3 = _v2, _v2 = this.length), 1 === _v0.length) {
        var _v4,
          _v5 = _v0.charCodeAt(0);
        _v5 < 256 && (_v0 = _v5);
      }
      if (void 0 !== _v3 && "string" != typeof _v3) throw TypeError("encoding must be a string");
      if ("string" == typeof _v3 && !_v78.isEncoding(_v3)) throw TypeError("Unknown encoding: " + _v3);
    } else "number" == typeof _v0 && (_v0 &= 255);
    if (_v1 < 0 || this.length < _v1 || this.length < _v2) throw RangeError("Out of range index");
    if (_v2 <= _v1) return this;
    if (_v1 >>>= 0, _v2 = void 0 === _v2 ? this.length : _v2 >>> 0, _v0 || (_v0 = 0), "number" == typeof _v0) for (_v4 = _v1; _v4 < _v2; ++_v4) this[_v4] = _v0;else {
      var _v6 = _v84(_v0) ? _v0 : _v99(new _v78(_v0, _v3).toString()),
        _v7 = _v6.length;
      for (_v4 = 0; _v4 < _v2 - _v1; ++_v4) this[_v4 + _v1] = _v6[_v4 % _v7];
    }
    return this;
  };
  var _v98 = /[^+\/0-9A-Za-z-_]/g;
  function _v99(_v0, _v1) {
    _v1 = _v1 || 1 / 0;
    for (var _v2, _v3 = _v0.length, _v4 = null, _v5 = [], _v6 = 0; _v6 < _v3; ++_v6) {
      if ((_v2 = _v0.charCodeAt(_v6)) > 0 && _v2 < 0) {
        if (!_v4) {
          if (_v2 > 0 || _v6 + 1 === _v3) {
            (_v1 -= 3) > -1 && _v5.push(239, 191, 189);
            continue;
          }
          _v4 = _v2;
          continue;
        }
        if (_v2 < 0) {
          (_v1 -= 3) > -1 && _v5.push(239, 191, 189), _v4 = _v2;
          continue;
        }
        _v2 = (_v4 - 0 << 10 | _v2 - 0) + 0;
      } else _v4 && (_v1 -= 3) > -1 && _v5.push(239, 191, 189);
      if (_v4 = null, _v2 < 128) {
        if ((_v1 -= 1) < 0) break;
        _v5.push(_v2);
      } else if (_v2 < 0) {
        if ((_v1 -= 2) < 0) break;
        _v5.push(_v2 >> 6 | 192, 63 & _v2 | 128);
      } else if (_v2 < 0) {
        if ((_v1 -= 3) < 0) break;
        _v5.push(_v2 >> 12 | 224, _v2 >> 6 & 63 | 128, 63 & _v2 | 128);
      } else if (_v2 < 0) {
        if ((_v1 -= 4) < 0) break;
        _v5.push(_v2 >> 18 | 240, _v2 >> 12 & 63 | 128, _v2 >> 6 & 63 | 128, 63 & _v2 | 128);
      } else throw Error("Invalid code point");
    }
    return _v5;
  }
  function _v100(_v0) {
    for (var _v1 = [], _v2 = 0; _v2 < _v0.length; ++_v2) _v1.push(255 & _v0.charCodeAt(_v2));
    return _v1;
  }
  function _v101(_v0) {
    return function (_v0) {
      _v69 || _v70();
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = _v0.length;
      if (_v7 % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
      _v5 = "=" === _v0[_v7 - 2] ? 2 : +("=" === _v0[_v7 - 1]), _v6 = new _v68(3 * _v7 / 4 - _v5), _v3 = _v5 > 0 ? _v7 - 4 : _v7;
      var _v8 = 0;
      for (_v1 = 0, _v2 = 0; _v1 < _v3; _v1 += 4, _v2 += 3) _v4 = _v67[_v0.charCodeAt(_v1)] << 18 | _v67[_v0.charCodeAt(_v1 + 1)] << 12 | _v67[_v0.charCodeAt(_v1 + 2)] << 6 | _v67[_v0.charCodeAt(_v1 + 3)], _v6[_v8++] = _v4 >> 16 & 255, _v6[_v8++] = _v4 >> 8 & 255, _v6[_v8++] = 255 & _v4;
      return 2 === _v5 ? (_v4 = _v67[_v0.charCodeAt(_v1)] << 2 | _v67[_v0.charCodeAt(_v1 + 1)] >> 4, _v6[_v8++] = 255 & _v4) : 1 === _v5 && (_v4 = _v67[_v0.charCodeAt(_v1)] << 10 | _v67[_v0.charCodeAt(_v1 + 1)] << 4 | _v67[_v0.charCodeAt(_v1 + 2)] >> 2, _v6[_v8++] = _v4 >> 8 & 255, _v6[_v8++] = 255 & _v4), _v6;
    }(function (_v0) {
      var _v1;
      if ((_v0 = ((_v1 = _v0).trim ? _v1.trim() : _v1.replace(/^\s+|\s+$/g, "")).replace(_v98, "")).length < 2) return "";
      for (; _v0.length % 4 != 0;) _v0 += "=";
      return _v0;
    }(_v0));
  }
  function _v102(_v0, _v1, _v2, _v3) {
    for (var _v4 = 0; _v4 < _v3 && !(_v4 + _v2 >= _v1.length) && !(_v4 >= _v0.length); ++_v4) _v1[_v4 + _v2] = _v0[_v4];
    return _v4;
  }
  function _v103(_v0) {
    var _v1;
    return null != _v0 && (!!_v0._isBuffer || _v104(_v0) || "function" == typeof (_v1 = _v0).readFloatLE && "function" == typeof _v1.slice && _v104(_v1.slice(0, 0)));
  }
  function _v104(_v0) {
    return !!_v0.constructor && "function" == typeof _v0.constructor.isBuffer && _v0.constructor.isBuffer(_v0);
  }
  class _v105 extends Error {
    constructor(_v0, _v1, _v2, ..._v3) {
      for (const _v0 of (Array.isArray(_v1) && (_v1 = _v1.join(" ").trim()), super(_v1), void 0 !== Error.captureStackTrace && Error.captureStackTrace(this, _v105), this.code = _v0, _v3)) for (const _v0 in _v0) {
        const _v0 = _v0[_v0];
        this[_v0] = _v103(_v0) ? _v0.toString(_v2.encoding) : null == _v0 ? _v0 : JSON.parse(JSON.stringify(_v0));
      }
    }
  }
  let _v106 = function (_v0) {
      return "object" == typeof _v0 && null !== _v0 && !Array.isArray(_v0);
    },
    _v107 = function (_v0) {
      let _v1 = [];
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
        let _v0 = _v0[_v0];
        if (null == _v0 || !1 === _v0) _v1[_v0] = {
          disabled: !0
        };else if ("string" == typeof _v0 || "number" == typeof _v0) _v1[_v0] = {
          name: `${_v0}`
        };else if (_v106(_v0)) {
          if ("string" != typeof _v0.name) throw new _v105("CSV_OPTION_COLUMNS_MISSING_NAME", ["Option columns missing name:", `property "name" is required at position ${_v0}`, "when column is an object literal"]);
          _v1[_v0] = _v0;
        } else throw new _v105("CSV_INVALID_COLUMN_DEFINITION", ["Invalid column definition:", "expect a string or a literal object,", `got ${JSON.stringify(_v0)} at position ${_v0}`]);
      }
      return _v1;
    };
  class _v108 {
    constructor(_v0 = 100) {
      this.size = _v0, this.length = 0, this.buf = _v78.allocUnsafe(_v0);
    }
    prepend(_v0) {
      if (_v103(_v0)) {
        let _v0 = this.length + _v0.length;
        if (_v0 >= this.size && (this.resize(), _v0 >= this.size)) throw Error("INVALID_BUFFER_STATE");
        let _v1 = this.buf;
        this.buf = _v78.allocUnsafe(this.size), _v0.copy(this.buf, 0), _v1.copy(this.buf, _v0.length), this.length += _v0.length;
      } else {
        let _v0 = this.length++;
        _v0 === this.size && this.resize();
        let _v1 = this.clone();
        this.buf[0] = _v0, _v1.copy(this.buf, 1, 0, _v0);
      }
    }
    append(_v0) {
      let _v1 = this.length++;
      _v1 === this.size && this.resize(), this.buf[_v1] = _v0;
    }
    clone() {
      return _v78.from(this.buf.slice(0, this.length));
    }
    resize() {
      let _v0 = this.length;
      this.size = 2 * this.size;
      let _v1 = _v78.allocUnsafe(this.size);
      this.buf.copy(_v1, 0, 0, _v0), this.buf = _v1;
    }
    toString(_v0) {
      return _v0 ? this.buf.slice(0, this.length).toString(_v0) : Uint8Array.prototype.slice.call(this.buf.slice(0, this.length));
    }
    toJSON() {
      return this.toString("utf8");
    }
    reset() {
      this.length = 0;
    }
  }
  let _v109 = function (_v0) {
      let _v1 = [32, 9, 10, 13, 12, 11, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].reduce((_v0, _v1) => {
          let _v2 = _v78.from(String.fromCharCode(_v1), _v0.encoding);
          return 63 !== _v1 && 1 === _v2.length && 63 === _v2[0] || _v0.push(_v2), _v0;
        }, []),
        _v2 = new Uint8Array(256);
      for (let _v0 of _v1) _v2[_v0[0]] = 1;
      return {
        bomSkipped: !1,
        bufBytesStart: 0,
        castField: _v0.cast_function,
        commenting: !1,
        delimiterBufPrevious: void 0,
        delimiterDiscovered: !1,
        error: void 0,
        enabled: 1 === _v0.from_line,
        escaping: !1,
        escapeIsQuote: _v103(_v0.escape) && _v103(_v0.quote) && 0 === _v78.compare(_v0.escape, _v0.quote),
        expectedRecordLength: Array.isArray(_v0.columns) ? _v0.columns.length : void 0,
        field: new _v108(20),
        firstLineToHeaders: _v0.cast_first_line_to_header,
        needMoreDataSize: Math.max(null !== _v0.comment ? _v0.comment.length : 0, ...(_v0.delimiter ? _v0.delimiter.map(_v0 => _v0.length) : []), +!!_v0.delimiter_auto, null !== _v0.quote ? _v0.quote.length : 0, ..._v1.map(_v0 => _v0.length)),
        previousBuf: void 0,
        quoting: !1,
        stop: !1,
        rawBuffer: new _v108(100),
        record: [],
        recordHasError: !1,
        record_length: 0,
        recordDelimiterMaxLength: 0 === _v0.record_delimiter.length ? 0 : Math.max(..._v0.record_delimiter.map(_v0 => _v0.length)),
        trimChars: [_v78.from(" ", _v0.encoding)[0], _v78.from("	", _v0.encoding)[0]],
        wasQuoting: !1,
        wasRowDelimiter: !1,
        timchars: _v1,
        timcharFirstBytes: _v2
      };
    },
    _v110 = function (_v0) {
      let _v1 = {};
      for (let _v0 in _v0) _v1[_v0.replace(/([A-Z])/g, function (_v0, _v1) {
        return "_" + _v1.toLowerCase();
      })] = _v0[_v0];
      if (void 0 === _v1.encoding || !0 === _v1.encoding) _v1.encoding = "utf8";else if (null === _v1.encoding || !1 === _v1.encoding) _v1.encoding = null;else if ("string" != typeof _v1.encoding && null !== _v1.encoding) throw new _v105("CSV_INVALID_OPTION_ENCODING", ["Invalid option encoding:", "encoding must be a string or null to return a buffer,", `got ${JSON.stringify(_v1.encoding)}`], _v1);
      if (void 0 === _v1.bom || null === _v1.bom || !1 === _v1.bom) _v1.bom = !1;else if (!0 !== _v1.bom) throw new _v105("CSV_INVALID_OPTION_BOM", ["Invalid option bom:", "bom must be true,", `got ${JSON.stringify(_v1.bom)}`], _v1);
      if (_v1.cast_function = null, void 0 === _v1.cast || null === _v1.cast || !1 === _v1.cast || "" === _v1.cast) _v1.cast = void 0;else if ("function" == typeof _v1.cast) _v1.cast_function = _v1.cast, _v1.cast = !0;else if (!0 !== _v1.cast) throw new _v105("CSV_INVALID_OPTION_CAST", ["Invalid option cast:", "cast must be true or a function,", `got ${JSON.stringify(_v1.cast)}`], _v1);
      if (void 0 === _v1.cast_date || null === _v1.cast_date || !1 === _v1.cast_date || "" === _v1.cast_date) _v1.cast_date = !1;else if (!0 === _v1.cast_date) _v1.cast_date = function (_v0) {
        let _v1 = Date.parse(_v0);
        return isNaN(_v1) ? _v0 : new Date(_v1);
      };else if ("function" != typeof _v1.cast_date) throw new _v105("CSV_INVALID_OPTION_CAST_DATE", ["Invalid option cast_date:", "cast_date must be true or a function,", `got ${JSON.stringify(_v1.cast_date)}`], _v1);
      if (_v1.cast_first_line_to_header = void 0, !0 === _v1.columns) _v1.cast_first_line_to_header = void 0;else if ("function" == typeof _v1.columns) _v1.cast_first_line_to_header = _v1.columns, _v1.columns = !0;else if (Array.isArray(_v1.columns)) _v1.columns = _v107(_v1.columns);else if (void 0 === _v1.columns || null === _v1.columns || !1 === _v1.columns) _v1.columns = !1;else throw new _v105("CSV_INVALID_OPTION_COLUMNS", ["Invalid option columns:", "expect an array, a function or true,", `got ${JSON.stringify(_v1.columns)}`], _v1);
      if (void 0 === _v1.group_columns_by_name || null === _v1.group_columns_by_name || !1 === _v1.group_columns_by_name) _v1.group_columns_by_name = !1;else if (!0 !== _v1.group_columns_by_name) throw new _v105("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", ["Invalid option group_columns_by_name:", "expect an boolean,", `got ${JSON.stringify(_v1.group_columns_by_name)}`], _v1);else if (!1 === _v1.columns) throw new _v105("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", ["Invalid option group_columns_by_name:", "the `columns` mode must be activated."], _v1);
      if (void 0 === _v1.comment || null === _v1.comment || !1 === _v1.comment || "" === _v1.comment) _v1.comment = null;else if ("string" == typeof _v1.comment && (_v1.comment = _v78.from(_v1.comment, _v1.encoding)), !_v103(_v1.comment)) throw new _v105("CSV_INVALID_OPTION_COMMENT", ["Invalid option comment:", "comment must be a buffer or a string,", `got ${JSON.stringify(_v1.comment)}`], _v1);
      if (void 0 === _v1.comment_no_infix || null === _v1.comment_no_infix || !1 === _v1.comment_no_infix) _v1.comment_no_infix = !1;else if (!0 !== _v1.comment_no_infix) throw new _v105("CSV_INVALID_OPTION_COMMENT", ["Invalid option comment_no_infix:", "value must be a boolean,", `got ${JSON.stringify(_v1.comment_no_infix)}`], _v1);
      if (void 0 === _v1.delimiter_auto || null === _v1.delimiter_auto || !1 === _v1.delimiter_auto) _v1.delimiter_auto = !1;else if (!0 === _v1.delimiter_auto) _v1.delimiter_auto = {};else if (!_v106(_v1.delimiter_auto)) throw new _v105("CSV_INVALID_OPTION_DELIMITER_AUTO", ["Invalid option delimiter_auto:", "delimiter_auto must be a boolean or a configuration object,", `got ${JSON.stringify(_v1.delimiter_auto)}`], _v1);
      if (_v1.delimiter_auto) {
        if (void 0 === _v1.delimiter_auto.preferred) _v1.delimiter_auto.preferred = {
          44: 1.8,
          9: 1.8,
          59: 1.6,
          32: 1.6,
          58: 1.5,
          46: 1.4,
          47: 1.4
        };else if (!_v106(_v1.delimiter_auto.preferred)) throw new _v105("CSV_INVALID_OPTION_DELIMITER_AUTO", ["Invalid option delimiter_auto:", "preferred must be an object,", `got ${JSON.stringify(_v1.delimiter_auto.preferred)}`], _v1);
        if (void 0 === _v1.delimiter_auto.score) _v1.delimiter_auto.score = (_v0, _v1) => (_v0.total - _v0.std) * (_v1.preferred[_v0.char_code] || 1);else if ("function" != typeof _v1.delimiter_auto.score) throw new _v105("CSV_INVALID_OPTION_DELIMITER_AUTO", ["Invalid option delimiter_auto:", "score must be a function,", `got ${JSON.stringify(_v1.delimiter_auto.score)}`], _v1);
        if (void 0 === _v1.delimiter_auto.size) _v1.delimiter_auto.size = 0;else if ("number" != typeof _v1.delimiter_auto.size) throw new _v105("CSV_INVALID_OPTION_DELIMITER_AUTO", ["Invalid option delimiter_auto:", "size must be a number,", `got ${JSON.stringify(_v1.delimiter_auto.size)}`], _v1);
      }
      let _v2 = JSON.stringify(_v1.delimiter);
      if (!1 !== _v1.delimiter_auto && (_v1.delimiter = []), Array.isArray(_v1.delimiter) || ((void 0 === _v1.delimiter || null === _v1.delimiter || !1 === _v1.delimiter) && (_v1.delimiter = _v78.from(",", _v1.encoding)), _v1.delimiter = [_v1.delimiter]), _v1.delimiter = _v1.delimiter.map(function (_v0) {
        if ("string" == typeof _v0 && (_v0 = _v78.from(_v0, _v1.encoding)), !_v103(_v0) || 0 === _v0.length) throw new _v105("CSV_INVALID_OPTION_DELIMITER", ["Invalid option delimiter:", "delimiter must be a non empty string or buffer or array of string|buffer,", `got ${_v2}`], _v1);
        return _v0;
      }), void 0 === _v1.escape || !0 === _v1.escape ? _v1.escape = _v78.from('"', _v1.encoding) : "string" == typeof _v1.escape ? _v1.escape = _v78.from(_v1.escape, _v1.encoding) : (null === _v1.escape || !1 === _v1.escape) && (_v1.escape = null), null !== _v1.escape && !_v103(_v1.escape)) throw Error(`Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(_v1.escape)}`);
      if (void 0 === _v1.from || null === _v1.from) _v1.from = 1;else if ("string" == typeof _v1.from && /\d+/.test(_v1.from) && (_v1.from = parseInt(_v1.from)), Number.isInteger(_v1.from)) {
        if (_v1.from < 0) throw Error(`Invalid Option: from must be a positive integer, got ${JSON.stringify(_v0.from)}`);
      } else throw Error(`Invalid Option: from must be an integer, got ${JSON.stringify(_v1.from)}`);
      if (void 0 === _v1.from_line || null === _v1.from_line) _v1.from_line = 1;else if ("string" == typeof _v1.from_line && /\d+/.test(_v1.from_line) && (_v1.from_line = parseInt(_v1.from_line)), Number.isInteger(_v1.from_line)) {
        if (_v1.from_line <= 0) throw Error(`Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(_v0.from_line)}`);
      } else throw Error(`Invalid Option: from_line must be an integer, got ${JSON.stringify(_v0.from_line)}`);
      if (void 0 === _v1.ignore_last_delimiters || null === _v1.ignore_last_delimiters) _v1.ignore_last_delimiters = !1;else if ("number" == typeof _v1.ignore_last_delimiters) _v1.ignore_last_delimiters = Math.floor(_v1.ignore_last_delimiters), 0 === _v1.ignore_last_delimiters && (_v1.ignore_last_delimiters = !1);else if ("boolean" != typeof _v1.ignore_last_delimiters) throw new _v105("CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS", ["Invalid option `ignore_last_delimiters`:", "the value must be a boolean value or an integer,", `got ${JSON.stringify(_v1.ignore_last_delimiters)}`], _v1);
      if (!0 === _v1.ignore_last_delimiters && !1 === _v1.columns) throw new _v105("CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS", ["The option `ignore_last_delimiters`", "requires the activation of the `columns` option"], _v1);
      if (void 0 === _v1.info || null === _v1.info || !1 === _v1.info) _v1.info = !1;else if (!0 !== _v1.info) throw Error(`Invalid Option: info must be true, got ${JSON.stringify(_v1.info)}`);
      if (void 0 === _v1.max_record_size || null === _v1.max_record_size || !1 === _v1.max_record_size) _v1.max_record_size = 0;else if (Number.isInteger(_v1.max_record_size) && _v1.max_record_size >= 0) ;else if ("string" == typeof _v1.max_record_size && /\d+/.test(_v1.max_record_size)) _v1.max_record_size = parseInt(_v1.max_record_size);else throw Error(`Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(_v1.max_record_size)}`);
      if (void 0 === _v1.objname || null === _v1.objname || !1 === _v1.objname) _v1.objname = void 0;else if (_v103(_v1.objname)) {
        if (0 === _v1.objname.length) throw Error("Invalid Option: objname must be a non empty buffer");
        null === _v1.encoding || (_v1.objname = _v1.objname.toString(_v1.encoding));
      } else if ("string" == typeof _v1.objname) {
        if (0 === _v1.objname.length) throw Error("Invalid Option: objname must be a non empty string");
      } else if ("number" == typeof _v1.objname) ;else throw Error(`Invalid Option: objname must be a string or a buffer, got ${_v1.objname}`);
      if (void 0 !== _v1.objname) {
        if ("number" == typeof _v1.objname) {
          if (!1 !== _v1.columns) throw Error("Invalid Option: objname index cannot be combined with columns or be defined as a field");
        } else if (!1 === _v1.columns) throw Error("Invalid Option: objname field must be combined with columns or be defined as an index");
      }
      if (void 0 === _v1.on_record || null === _v1.on_record) _v1.on_record = void 0;else if ("function" != typeof _v1.on_record) throw new _v105("CSV_INVALID_OPTION_ON_RECORD", ["Invalid option `on_record`:", "expect a function,", `got ${JSON.stringify(_v1.on_record)}`], _v1);
      if (void 0 !== _v1.on_skip && null !== _v1.on_skip && "function" != typeof _v1.on_skip) throw Error(`Invalid Option: on_skip must be a function, got ${JSON.stringify(_v1.on_skip)}`);
      if (null === _v1.quote || !1 === _v1.quote || "" === _v1.quote) _v1.quote = null;else if (void 0 === _v1.quote || !0 === _v1.quote ? _v1.quote = _v78.from('"', _v1.encoding) : "string" == typeof _v1.quote && (_v1.quote = _v78.from(_v1.quote, _v1.encoding)), !_v103(_v1.quote)) throw Error(`Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(_v1.quote)}`);
      if (void 0 === _v1.raw || null === _v1.raw || !1 === _v1.raw) _v1.raw = !1;else if (!0 !== _v1.raw) throw Error(`Invalid Option: raw must be true, got ${JSON.stringify(_v1.raw)}`);
      if (void 0 === _v1.record_delimiter) _v1.record_delimiter = [];else if ("string" == typeof _v1.record_delimiter || _v103(_v1.record_delimiter)) {
        if (0 === _v1.record_delimiter.length) throw new _v105("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a non empty string or buffer,", `got ${JSON.stringify(_v1.record_delimiter)}`], _v1);
        _v1.record_delimiter = [_v1.record_delimiter];
      } else if (!Array.isArray(_v1.record_delimiter)) throw new _v105("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a string, a buffer or array of string|buffer,", `got ${JSON.stringify(_v1.record_delimiter)}`], _v1);
      if (_v1.record_delimiter = _v1.record_delimiter.map(function (_v0, _v1) {
        if ("string" == typeof _v0 || _v103(_v0)) {
          if (0 === _v0.length) throw new _v105("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a non empty string or buffer", `at index ${_v1},`, `got ${JSON.stringify(_v0)}`], _v1);
        } else throw new _v105("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a string, a buffer or array of string|buffer", `at index ${_v1},`, `got ${JSON.stringify(_v0)}`], _v1);
        return "string" == typeof _v0 && (_v0 = _v78.from(_v0, _v1.encoding)), _v0;
      }), "boolean" == typeof _v1.relax_column_count) ;else if (void 0 === _v1.relax_column_count || null === _v1.relax_column_count) _v1.relax_column_count = !1;else throw Error(`Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(_v1.relax_column_count)}`);
      if ("boolean" == typeof _v1.relax_column_count_less) ;else if (void 0 === _v1.relax_column_count_less || null === _v1.relax_column_count_less) _v1.relax_column_count_less = !1;else throw Error(`Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(_v1.relax_column_count_less)}`);
      if ("boolean" == typeof _v1.relax_column_count_more) ;else if (void 0 === _v1.relax_column_count_more || null === _v1.relax_column_count_more) _v1.relax_column_count_more = !1;else throw Error(`Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(_v1.relax_column_count_more)}`);
      if ("boolean" == typeof _v1.relax_quotes) ;else if (void 0 === _v1.relax_quotes || null === _v1.relax_quotes) _v1.relax_quotes = !1;else throw Error(`Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(_v1.relax_quotes)}`);
      if ("boolean" == typeof _v1.skip_empty_lines) ;else if (void 0 === _v1.skip_empty_lines || null === _v1.skip_empty_lines) _v1.skip_empty_lines = !1;else throw Error(`Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(_v1.skip_empty_lines)}`);
      if ("boolean" == typeof _v1.skip_records_with_empty_values) ;else if (void 0 === _v1.skip_records_with_empty_values || null === _v1.skip_records_with_empty_values) _v1.skip_records_with_empty_values = !1;else throw Error(`Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(_v1.skip_records_with_empty_values)}`);
      if ("boolean" == typeof _v1.skip_records_with_error) ;else if (void 0 === _v1.skip_records_with_error || null === _v1.skip_records_with_error) _v1.skip_records_with_error = !1;else throw Error(`Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(_v1.skip_records_with_error)}`);
      if (void 0 === _v1.rtrim || null === _v1.rtrim || !1 === _v1.rtrim) _v1.rtrim = !1;else if (!0 !== _v1.rtrim) throw Error(`Invalid Option: rtrim must be a boolean, got ${JSON.stringify(_v1.rtrim)}`);
      if (void 0 === _v1.ltrim || null === _v1.ltrim || !1 === _v1.ltrim) _v1.ltrim = !1;else if (!0 !== _v1.ltrim) throw Error(`Invalid Option: ltrim must be a boolean, got ${JSON.stringify(_v1.ltrim)}`);
      if (void 0 === _v1.trim || null === _v1.trim || !1 === _v1.trim) _v1.trim = !1;else if (!0 !== _v1.trim) throw Error(`Invalid Option: trim must be a boolean, got ${JSON.stringify(_v1.trim)}`);
      if (!0 === _v1.trim && !1 !== _v0.ltrim ? _v1.ltrim = !0 : !0 !== _v1.ltrim && (_v1.ltrim = !1), !0 === _v1.trim && !1 !== _v0.rtrim ? _v1.rtrim = !0 : !0 !== _v1.rtrim && (_v1.rtrim = !1), void 0 === _v1.to || null === _v1.to) _v1.to = -1;else if (-1 !== _v1.to) if ("string" == typeof _v1.to && /\d+/.test(_v1.to) && (_v1.to = parseInt(_v1.to)), Number.isInteger(_v1.to)) {
        if (_v1.to <= 0) throw Error(`Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(_v0.to)}`);
      } else throw Error(`Invalid Option: to must be an integer, got ${JSON.stringify(_v0.to)}`);
      if (void 0 === _v1.to_line || null === _v1.to_line) _v1.to_line = -1;else if (-1 !== _v1.to_line) if ("string" == typeof _v1.to_line && /\d+/.test(_v1.to_line) && (_v1.to_line = parseInt(_v1.to_line)), Number.isInteger(_v1.to_line)) {
        if (_v1.to_line <= 0) throw Error(`Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(_v0.to_line)}`);
      } else throw Error(`Invalid Option: to_line must be an integer, got ${JSON.stringify(_v0.to_line)}`);
      return _v1;
    },
    _v111 = function (_v0, _v1) {
      _v1 || ({
        delimiter_auto: _v1
      } = _v110({
        delimiter_auto: !0
      })), "string" == typeof _v0 && (_v0 = _v78.from(_v0)), _v103(_v0) && (_v0 = (_v0 => {
        let _v1 = [],
          _v2 = _v115({
            delimiter: []
          }).parse(_v0, !0, _v0 => _v1.push(_v0), () => {});
        if (void 0 !== _v2) throw _v2;
        return _v1;
      })(_v0));
      let _v2 = Array(127).fill().map(() => ({
        lines: []
      }));
      return _v0.map(([_v0], _v1) => {
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0.charCodeAt(_v0);
          void 0 === _v2[_v0].lines[_v1] && (_v2[_v0].lines[_v1] = 0), _v2[_v0].lines[_v1]++;
        }
      }), _v2.map((_v0, _v1) => {
        _v0.char_code = _v1, _v0.std = _v112(_v0.lines), _v0.total = _v0.lines.reduce((_v0, _v1) => _v0 + _v1, 0), _v0.preferred = !!_v1.preferred[_v1], _v0.score = _v1.score(_v0, _v1);
      }), String.fromCharCode(_v2.reduce((_v0, _v1) => _v0.score > _v1.score ? _v0 : _v1, {}).char_code);
    },
    _v112 = function (_v0) {
      let _v1 = _v0.length;
      if (0 === _v1) return 0;
      let _v2 = _v0.reduce((_v0, _v1) => _v0 + _v1) / _v1;
      return Math.sqrt(_v0.map(_v0 => Math.pow(_v0 - _v2, 2)).reduce((_v0, _v1) => _v0 + _v1) / _v1);
    },
    _v113 = function (_v0) {
      return _v0.every(_v0 => null == _v0 || _v0.toString && "" === _v0.toString().trim());
    },
    _v114 = {
      utf8: _v78.from([239, 187, 191]),
      utf16le: _v78.from([255, 254])
    },
    _v115 = function (_v0 = {}) {
      let _v1 = _v110(_v0);
      return {
        info: {
          bytes: 0,
          bytes_records: 0,
          comment_lines: 0,
          empty_lines: 0,
          invalid_field_length: 0,
          lines: 1,
          records: 0
        },
        original_options: _v0,
        options: _v1,
        state: _v109(_v1),
        __needMoreData: function (_v0, _v1, _v2) {
          if (_v2) return !1;
          let {
              encoding: _v3,
              escape: _v4,
              quote: _v5
            } = this.options,
            {
              quoting: _v6,
              needMoreDataSize: _v7,
              recordDelimiterMaxLength: _v8
            } = this.state;
          return _v1 - _v0 - 1 < Math.max(_v7, 0 === _v8 ? _v78.from("\r\n", _v3).length : _v8, _v6 ? (null === _v4 ? 0 : _v4.length) + _v5.length : 0, _v6 ? _v5.length + _v8 : 0);
        },
        parse: function (_v0, _v1, _v2, _v3) {
          let _v4,
            _v5,
            {
              bom: _v6,
              comment_no_infix: _v7,
              delimiter_auto: _v8,
              encoding: _v9,
              from_line: _v10,
              ltrim: _v11,
              max_record_size: _v12,
              raw: _v13,
              relax_quotes: _v14,
              rtrim: _v15,
              skip_empty_lines: _v16,
              to: _v17,
              to_line: _v18
            } = this.options,
            {
              comment: _v19,
              escape: _v20,
              quote: _v21,
              record_delimiter: _v22
            } = this.options,
            {
              bomSkipped: _v23,
              delimiterDiscovered: _v24,
              delimiterBufPrevious: _v25,
              rawBuffer: _v26,
              escapeIsQuote: _v27
            } = this.state;
          if (!_v24 && _v8) {
            let _v0;
            if (_v0 = void 0 === _v25 ? _v0 : void 0 !== _v25 && void 0 === _v0 ? _v25 : _v78.concat([_v25, _v0]), _v0 = void 0, _v1 || _v0.length > _v8.size) this.options.delimiter = [_v78.from(_v111(_v0, this.options.delimiter_auto))], this.state.previousBuf = _v0, this.state.delimiterBufPrevious = void 0, this.state.delimiterDiscovered = !0;else {
              this.state.delimiterBufPrevious = _v0;
              return;
            }
          }
          let {
            previousBuf: _v28
          } = this.state;
          if (void 0 === _v28) {
            if (void 0 === _v0) return void _v3();else _v4 = _v0;
          } else _v4 = void 0 !== _v28 && void 0 === _v0 ? _v28 : _v78.concat([_v28, _v0]);
          if (!1 === _v23) if (!1 === _v6) this.state.bomSkipped = !0;else if (_v4.length < 3) {
            if (!1 === _v1) {
              this.state.previousBuf = _v4;
              return;
            }
          } else {
            for (let _v0 in _v114) if (0 === _v114[_v0].compare(_v4, 0, _v114[_v0].length)) {
              let _v0 = _v114[_v0].length;
              this.state.bufBytesStart += _v0, _v4 = _v4.slice(_v0);
              let _v1 = _v110({
                ...this.original_options,
                encoding: _v0
              });
              for (let _v0 in _v1) this.options[_v0] = _v1[_v0];
              ({
                comment: _v19,
                escape: _v20,
                quote: _v21
              } = this.options);
              break;
            }
            this.state.bomSkipped = !0;
          }
          let _v29 = _v4.length;
          for (_v5 = 0; _v5 < _v29 && !this.__needMoreData(_v5, _v29, _v1); _v5++) {
            if (!0 === this.state.wasRowDelimiter && (this.info.lines++, this.state.wasRowDelimiter = !1), -1 !== _v18 && this.info.lines > _v18) {
              this.state.stop = !0, _v3();
              return;
            }
            !1 === this.state.quoting && 0 === _v22.length && this.__autoDiscoverRecordDelimiter(_v4, _v5) && (_v22 = this.options.record_delimiter);
            let _v0 = _v4[_v5];
            if (!0 === _v13 && _v26.append(_v0), (13 === _v0 || 10 === _v0) && !1 === this.state.wasRowDelimiter && (this.state.wasRowDelimiter = !0), !0 === this.state.escaping) this.state.escaping = !1;else {
              if (null !== _v20 && !0 === this.state.quoting && this.__isEscape(_v4, _v5, _v0) && _v5 + _v20.length < _v29) if (_v27) {
                if (this.__isQuote(_v4, _v5 + _v20.length)) {
                  this.state.escaping = !0, _v5 += _v20.length - 1;
                  continue;
                }
              } else {
                this.state.escaping = !0, _v5 += _v20.length - 1;
                continue;
              }
              if (!1 === this.state.commenting && this.__isQuote(_v4, _v5)) if (!0 === this.state.quoting) {
                let _v0 = _v4[_v5 + _v21.length],
                  _v1 = _v15 && this.__isCharTrimable(_v4, _v5 + _v21.length),
                  _v2 = null !== _v19 && this.__compareBytes(_v19, _v4, _v5 + _v21.length, _v0),
                  _v3 = this.__isDelimiter(_v4, _v5 + _v21.length, _v0),
                  _v4 = 0 === _v22.length ? this.__autoDiscoverRecordDelimiter(_v4, _v5 + _v21.length) : this.__isRecordDelimiter(_v0, _v4, _v5 + _v21.length);
                if (null !== _v20 && this.__isEscape(_v4, _v5, _v0) && this.__isQuote(_v4, _v5 + _v20.length)) _v5 += _v20.length - 1;else if (!_v0 || _v3 || _v4 || _v2 || _v1) {
                  this.state.quoting = !1, this.state.wasQuoting = !0, _v5 += _v21.length - 1;
                  continue;
                } else if (!1 === _v14) {
                  let _v0 = this.__error(new _v105("CSV_INVALID_CLOSING_QUOTE", ["Invalid Closing Quote:", `got "${String.fromCharCode(_v0)}"`, `at line ${this.info.lines}`, "instead of delimiter, record delimiter, trimable character", "(if activated) or comment"], this.options, this.__infoField()));
                  if (void 0 !== _v0) return _v0;
                } else this.state.quoting = !1, this.state.wasQuoting = !0, this.state.field.prepend(_v21), _v5 += _v21.length - 1;
              } else if (0 !== this.state.field.length) {
                if (!1 === _v14) {
                  let _v0 = this.__infoField(),
                    _v1 = Object.keys(_v114).map(_v0 => !!_v114[_v0].equals(this.state.field.toString()) && _v0).filter(Boolean)[0],
                    _v2 = this.__error(new _v105("INVALID_OPENING_QUOTE", ["Invalid Opening Quote:", `a quote is found on field ${JSON.stringify(_v0.column)} at line ${_v0.lines}, value is ${JSON.stringify(this.state.field.toString(_v9))}`, _v1 ? `(${_v1} bom)` : void 0], this.options, _v0, {
                      field: this.state.field
                    }));
                  if (void 0 !== _v2) return _v2;
                }
              } else {
                this.state.quoting = !0, _v5 += _v21.length - 1;
                continue;
              }
              if (!1 === this.state.quoting) {
                let _v0 = this.__isRecordDelimiter(_v0, _v4, _v5);
                if (0 !== _v0) {
                  if (this.state.commenting && !1 === this.state.wasQuoting && 0 === this.state.record.length && 0 === this.state.field.length) this.info.comment_lines++;else {
                    if (!1 === this.state.enabled && this.info.lines + +(!0 === this.state.wasRowDelimiter) >= _v10) {
                      this.state.enabled = !0, this.__resetField(), this.__resetRecord(), _v5 += _v0 - 1;
                      continue;
                    }
                    if (!0 === _v16 && !1 === this.state.wasQuoting && 0 === this.state.record.length && 0 === this.state.field.length) {
                      this.info.empty_lines++, _v5 += _v0 - 1;
                      continue;
                    }
                    this.info.bytes = this.state.bufBytesStart + _v5;
                    let _v0 = this.__onField();
                    if (void 0 !== _v0) return _v0;
                    this.info.bytes = this.state.bufBytesStart + _v5 + _v0;
                    let _v1 = this.__onRecord(_v2);
                    if (void 0 !== _v1) return _v1;
                    if (-1 !== _v17 && this.info.records >= _v17) {
                      this.state.stop = !0, _v3();
                      return;
                    }
                  }
                  this.state.commenting = !1, _v5 += _v0 - 1;
                  continue;
                }
                if (this.state.commenting) continue;
                if (null !== _v19 && (!1 === _v7 || 0 === this.state.record.length && 0 === this.state.field.length) && 0 !== this.__compareBytes(_v19, _v4, _v5, _v0)) {
                  this.state.commenting = !0;
                  continue;
                }
                let _v1 = this.__isDelimiter(_v4, _v5, _v0);
                if (0 !== _v1) {
                  this.info.bytes = this.state.bufBytesStart + _v5;
                  let _v0 = this.__onField();
                  if (void 0 !== _v0) return _v0;
                  _v5 += _v1 - 1;
                  continue;
                }
              }
            }
            if (!1 === this.state.commenting && 0 !== _v12 && this.state.record_length + this.state.field.length > _v12) return this.__error(new _v105("CSV_MAX_RECORD_SIZE", ["Max Record Size:", "record exceed the maximum number of tolerated bytes", `of ${_v12}`, `at line ${this.info.lines}`], this.options, this.__infoField()));
            let _v1 = !1 === _v11 || !0 === this.state.quoting || 0 !== this.state.field.length || !this.__isCharTrimable(_v4, _v5),
              _v2 = !1 === _v15 || !1 === this.state.wasQuoting;
            if (!0 === _v1 && !0 === _v2) this.state.field.append(_v0);else {
              if (!0 === _v15 && !this.__isCharTrimable(_v4, _v5)) return this.__error(new _v105("CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE", ["Invalid Closing Quote:", "found non trimable byte after quote", `at line ${this.info.lines}`], this.options, this.__infoField()));
              !1 === _v1 && (_v5 += this.__isCharTrimable(_v4, _v5) - 1);
              continue;
            }
          }
          if (!0 === _v1) {
            if (!0 === this.state.quoting) {
              let _v0 = this.__error(new _v105("CSV_QUOTE_NOT_CLOSED", ["Quote Not Closed:", `the parsing is finished with an opening quote at line ${this.info.lines}`], this.options, this.__infoField()));
              if (void 0 !== _v0) return _v0;
            } else if (!0 === this.state.wasQuoting || 0 !== this.state.record.length || 0 !== this.state.field.length) {
              this.info.bytes = this.state.bufBytesStart + _v5;
              let _v0 = this.__onField();
              if (void 0 !== _v0) return _v0;
              let _v1 = this.__onRecord(_v2);
              if (void 0 !== _v1) return _v1;
            } else !0 === this.state.wasRowDelimiter ? this.info.empty_lines++ : !0 === this.state.commenting && this.info.comment_lines++;
          } else this.state.bufBytesStart += _v5, this.state.previousBuf = _v4.slice(_v5);
          !0 === this.state.wasRowDelimiter && (this.info.lines++, this.state.wasRowDelimiter = !1);
        },
        __onRecord: function (_v0) {
          let {
              columns: _v1,
              group_columns_by_name: _v2,
              encoding: _v3,
              info: _v4,
              from: _v5,
              relax_column_count: _v6,
              relax_column_count_less: _v7,
              relax_column_count_more: _v8,
              raw: _v9,
              skip_records_with_empty_values: _v10
            } = this.options,
            {
              enabled: _v11,
              record: _v12
            } = this.state;
          if (!1 === _v11) return this.__resetRecord();
          let _v13 = _v12.length;
          if (!0 === _v1) return !0 === _v10 && _v113(_v12) ? void this.__resetRecord() : this.__firstLineToColumns(_v12);
          if (!1 === _v1 && 0 === this.info.records && (this.state.expectedRecordLength = _v13), _v13 !== this.state.expectedRecordLength) {
            let _v0 = !1 === _v1 ? new _v105("CSV_RECORD_INCONSISTENT_FIELDS_LENGTH", ["Invalid Record Length:", `expect ${this.state.expectedRecordLength},`, `got ${_v13} on line ${this.info.lines}`], this.options, this.__infoField(), {
              record: _v12
            }) : new _v105("CSV_RECORD_INCONSISTENT_COLUMNS", ["Invalid Record Length:", `columns length is ${_v1.length},`, `got ${_v13} on line ${this.info.lines}`], this.options, this.__infoField(), {
              record: _v12
            });
            if (!0 === _v6 || !0 === _v7 && _v13 < this.state.expectedRecordLength || !0 === _v8 && _v13 > this.state.expectedRecordLength) this.info.invalid_field_length++, this.state.error = _v0;else {
              let _v0 = this.__error(_v0);
              if (_v0) return _v0;
            }
          }
          if (!0 === _v10 && _v113(_v12)) return void this.__resetRecord();
          if (!0 === this.state.recordHasError) {
            this.__resetRecord(), this.state.recordHasError = !1;
            return;
          }
          if (this.info.records++, 1 === _v5 || this.info.records >= _v5) {
            let {
              objname: _v0
            } = this.options;
            if (!1 !== _v1) {
              let _v0 = {};
              for (let _v0 = 0, _v1 = _v12.length; _v0 < _v1; _v0++) void 0 === _v1[_v0] || _v1[_v0].disabled || (!0 === _v2 && void 0 !== _v0[_v1[_v0].name] ? Array.isArray(_v0[_v1[_v0].name]) ? _v0[_v1[_v0].name] = _v0[_v1[_v0].name].concat(_v12[_v0]) : _v0[_v1[_v0].name] = [_v0[_v1[_v0].name], _v12[_v0]] : _v0[_v1[_v0].name] = _v12[_v0]);
              if (!0 === _v9 || !0 === _v4) {
                let _v0 = Object.assign({
                    record: _v0
                  }, !0 === _v9 ? {
                    raw: this.state.rawBuffer.toString(_v3)
                  } : {}, !0 === _v4 ? {
                    info: this.__infoRecord()
                  } : {}),
                  _v1 = this.__push(void 0 === _v0 ? _v0 : [_v0[_v0], _v0], _v0);
                if (_v1) return _v1;
              } else {
                let _v0 = this.__push(void 0 === _v0 ? _v0 : [_v0[_v0], _v0], _v0);
                if (_v0) return _v0;
              }
            } else if (!0 === _v9 || !0 === _v4) {
              let _v0 = Object.assign({
                  record: _v12
                }, !0 === _v9 ? {
                  raw: this.state.rawBuffer.toString(_v3)
                } : {}, !0 === _v4 ? {
                  info: this.__infoRecord()
                } : {}),
                _v1 = this.__push(void 0 === _v0 ? _v0 : [_v12[_v0], _v0], _v0);
              if (_v1) return _v1;
            } else {
              let _v0 = this.__push(void 0 === _v0 ? _v12 : [_v12[_v0], _v12], _v0);
              if (_v0) return _v0;
            }
          }
          this.__resetRecord();
        },
        __firstLineToColumns: function (_v0) {
          let {
            firstLineToHeaders: _v1
          } = this.state;
          try {
            let _v0 = void 0 === _v1 ? _v0 : _v1.call(null, _v0);
            if (!Array.isArray(_v0)) return this.__error(new _v105("CSV_INVALID_COLUMN_MAPPING", ["Invalid Column Mapping:", "expect an array from column function,", `got ${JSON.stringify(_v0)}`], this.options, this.__infoField(), {
              headers: _v0
            }));
            let _v1 = _v107(_v0);
            this.state.expectedRecordLength = _v1.length, this.options.columns = _v1, this.__resetRecord();
            return;
          } catch (_v0) {
            return _v0;
          }
        },
        __resetRecord: function () {
          !0 === this.options.raw && this.state.rawBuffer.reset(), this.state.error = void 0, this.state.record = [], this.state.record_length = 0;
        },
        __onField: function () {
          let {
              cast: _v0,
              encoding: _v1,
              rtrim: _v2,
              max_record_size: _v3
            } = this.options,
            {
              enabled: _v4,
              wasQuoting: _v5
            } = this.state;
          if (!1 === _v4) return this.__resetField();
          let _v6 = this.state.field.toString(_v1);
          if (!0 === _v2 && !1 === _v5 && (_v6 = _v6.trimRight()), !0 === _v0) {
            let [_v0, _v1] = this.__cast(_v6);
            if (void 0 !== _v0) return _v0;
            _v6 = _v1;
          }
          this.state.record.push(_v6), 0 !== _v3 && "string" == typeof _v6 && (this.state.record_length += _v6.length), this.__resetField();
        },
        __resetField: function () {
          this.state.field.reset(), this.state.wasQuoting = !1;
        },
        __push: function (_v0, _v1) {
          let {
            on_record: _v2
          } = this.options;
          if (void 0 !== _v2) {
            let _v0 = this.__infoRecord();
            try {
              _v0 = _v2.call(null, _v0, _v0);
            } catch (_v0) {
              return _v0;
            }
            if (null == _v0) return;
          }
          this.info.bytes_records += this.info.bytes, _v1(_v0);
        },
        __cast: function (_v0) {
          let {
            columns: _v1,
            relax_column_count: _v2
          } = this.options;
          if (!0 === Array.isArray(_v1) && _v2 && this.options.columns.length <= this.state.record.length) return [void 0, void 0];
          if (null !== this.state.castField) try {
            let _v0 = this.__infoField();
            return [void 0, this.state.castField.call(null, _v0, _v0)];
          } catch (_v0) {
            return [_v0];
          }
          if (this.__isFloat(_v0)) return [void 0, parseFloat(_v0)];
          if (!1 !== this.options.cast_date) {
            let _v0 = this.__infoField();
            return [void 0, this.options.cast_date.call(null, _v0, _v0)];
          }
          return [void 0, _v0];
        },
        __compareBytes: function (_v0, _v1, _v2, _v3) {
          if (_v0[0] !== _v3) return 0;
          let _v4 = _v0.length;
          for (let _v0 = 1; _v0 < _v4; _v0++) if (_v0[_v0] !== _v1[_v2 + _v0]) return 0;
          return _v4;
        },
        __isCharTrimable: function (_v0, _v1) {
          let {
              timchars: _v2,
              timcharFirstBytes: _v3
            } = this.state,
            _v4 = _v0[_v1];
          if (void 0 === _v4 || 0 === _v3[_v4]) return 0;
          e: for (let _v0 = 0; _v0 < _v2.length; _v0++) {
            let _v0 = _v2[_v0];
            for (let _v0 = 0; _v0 < _v0.length; _v0++) if (_v0[_v0] !== _v0[_v1 + _v0]) continue e;
            return _v0.length;
          }
          return 0;
        },
        __isDelimiter: function (_v0, _v1, _v2) {
          let {
            delimiter: _v3,
            ignore_last_delimiters: _v4
          } = this.options;
          if (!0 === _v4 && this.state.record.length === this.options.columns.length - 1 || !1 !== _v4 && "number" == typeof _v4 && this.state.record.length === _v4 - 1) return 0;
          e: for (let _v0 = 0; _v0 < _v3.length; _v0++) {
            let _v0 = _v3[_v0];
            if (_v0[0] === _v2) {
              for (let _v0 = 1; _v0 < _v0.length; _v0++) if (_v0[_v0] !== _v0[_v1 + _v0]) continue e;
              return _v0.length;
            }
          }
          return 0;
        },
        __isEscape: function (_v0, _v1, _v2) {
          let {
            escape: _v3
          } = this.options;
          if (null === _v3) return !1;
          let _v4 = _v3.length;
          if (_v3[0] === _v2) {
            for (let _v0 = 0; _v0 < _v4; _v0++) if (_v3[_v0] !== _v0[_v1 + _v0]) return !1;
            return !0;
          }
          return !1;
        },
        __isFloat: function (_v0) {
          return _v0 - parseFloat(_v0) + 1 >= 0;
        },
        __isQuote: function (_v0, _v1) {
          let {
            quote: _v2
          } = this.options;
          if (null === _v2) return !1;
          let _v3 = _v2.length;
          for (let _v0 = 0; _v0 < _v3; _v0++) if (_v2[_v0] !== _v0[_v1 + _v0]) return !1;
          return !0;
        },
        __isRecordDelimiter: function (_v0, _v1, _v2) {
          let {
              record_delimiter: _v3
            } = this.options,
            _v4 = _v3.length;
          e: for (let _v0 = 0; _v0 < _v4; _v0++) {
            let _v0 = _v3[_v0],
              _v1 = _v0.length;
            if (_v0[0] === _v0) {
              for (let _v0 = 1; _v0 < _v1; _v0++) if (_v0[_v0] !== _v1[_v2 + _v0]) continue e;
              return _v0.length;
            }
          }
          return 0;
        },
        __autoDiscoverRecordDelimiter: function (_v0, _v1) {
          let {
              encoding: _v2
            } = this.options,
            _v3 = [_v78.from("\r\n", _v2), _v78.from("\n", _v2), _v78.from("\r", _v2)];
          r: for (let _v0 = 0; _v0 < _v3.length; _v0++) {
            let _v0 = _v3[_v0].length;
            for (let _v0 = 0; _v0 < _v0; _v0++) if (_v3[_v0][_v0] !== _v0[_v1 + _v0]) continue r;
            return this.options.record_delimiter.push(_v3[_v0]), this.state.recordDelimiterMaxLength = _v3[_v0].length, _v3[_v0].length;
          }
          return 0;
        },
        __error: function (_v0) {
          let {
              encoding: _v1,
              raw: _v2,
              skip_records_with_error: _v3
            } = this.options,
            _v4 = "string" == typeof _v0 ? Error(_v0) : _v0;
          if (!_v3) return _v4;
          if (this.state.recordHasError = !0, void 0 !== this.options.on_skip) try {
            this.options.on_skip(_v4, _v2 ? this.state.rawBuffer.toString(_v1) : void 0);
          } catch (_v0) {
            return _v0;
          }
        },
        __infoDataSet: function () {
          return {
            ...this.info,
            columns: this.options.columns
          };
        },
        __infoRecord: function () {
          let {
            columns: _v0,
            raw: _v1,
            encoding: _v2
          } = this.options;
          return {
            ...this.__infoDataSet(),
            bytes_records: this.info.bytes,
            error: this.state.error,
            header: !0 === _v0,
            index: this.state.record.length,
            raw: _v1 ? this.state.rawBuffer.toString(_v2) : void 0
          };
        },
        __infoField: function () {
          let {
              columns: _v0
            } = this.options,
            _v1 = Array.isArray(_v0),
            _v2 = this.info.bytes_records;
          return {
            ...this.__infoRecord(),
            bytes_records: _v2,
            column: !0 === _v1 ? _v0.length > this.state.record.length ? _v0[this.state.record.length].name : null : this.state.record.length,
            quoting: this.state.wasQuoting
          };
        }
      };
    },
    _v116 = function (_v0, _v1 = {}) {
      "string" == typeof _v0 && (_v0 = _v78.from(_v0));
      let _v2 = _v1 && _v1.objname ? Object.create(null) : [],
        _v3 = _v115(_v1),
        _v4 = _v3.parse(_v0, !0, _v0 => {
          void 0 === _v3.options.objname ? _v2.push(_v0) : _v2[_v0[0]] = _v0[1];
        }, () => {});
      if (void 0 !== _v4) throw _v4;
      return _v2;
    },
    _v117 = "source term";
  class _v118 extends Error {
    code;
    constructor(_v0) {
      super(_v0), this.code = _v0;
    }
  }
  let _v119 = _v0 => {
    let _v1;
    try {
      _v1 = _v116(_v0, {
        bom: !0,
        record_delimiter: ["\r\n", "\n", "\r"],
        relax_column_count: !0
      });
    } catch {
      throw new _v118("invalid_csv");
    }
    let _v2 = (_v0 => {
        let _v1 = [],
          _v2 = 1,
          _v3 = 1,
          _v4 = !1,
          _v5 = !1;
        for (let _v0 = 0; _v0 < _v0.length; _v0 += 1) {
          let _v0 = _v0[_v0];
          '"' === _v0 && (_v4 && '"' === _v0[_v0 + 1] ? _v0 += 1 : _v4 = !_v4), /\s/.test(_v0) || (_v5 = !0);
          let _v1 = "\n" === _v0 || "\r" === _v0 && "\n" !== _v0[_v0 + 1];
          !_v4 && _v1 ? (_v1.push({
            isBlank: !_v5,
            line: _v3
          }), _v2 += 1, _v3 = _v2, _v5 = !1) : _v1 && (_v2 += 1);
        }
        return !_v0 || _v0.endsWith("\n") || _v0.endsWith("\r") || _v1.push({
          isBlank: !_v5,
          line: _v3
        }), _v1;
      })(_v0),
      _v3 = _v1[0]?.map(_v0 => _v0.trim().toLowerCase());
    if (!_v3 || 1 !== _v3.length || _v3[0] !== _v117) throw new _v118("invalid_header");
    let _v4 = _v1.slice(1).map((_v0, _v1) => {
      let _v2 = _v2[_v1 + 1];
      return {
        isBlank: _v2?.isBlank ?? !1,
        line: _v2?.line ?? _v1 + 2,
        record: _v0
      };
    });
    if (_v4.filter(({
      isBlank: _v0
    }) => !_v0).length > 0) throw new _v118("too_many_rows");
    let _v5 = [],
      _v6 = [];
    return _v4.forEach(({
      isBlank: _v0,
      line: _v1,
      record: _v2
    }) => {
      if (_v0) return;
      if (1 !== _v2.length) return void _v5.push({
        line: _v1,
        reason: "too_many_columns"
      });
      let _v3 = _v2[0].trim();
      _v3 ? _v6.push({
        line: _v1,
        sourceText: _v3
      }) : _v5.push({
        line: _v1,
        reason: "source_term_required"
      });
    }), {
      failures: _v5,
      terms: _v6
    };
  };
  async function _v120({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v19.measureLatency)("postUserAccountDictionaryGlossaryTermsBatch", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/glossary_terms/batch?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  function _v121() {
    let {
        mutate: _v0
      } = (0, _v29.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v24.useGctlConfig)(),
      [_v5, _v6] = (0, _v27.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/account_dictionary/glossary_terms/batch${(0, _v27.serializeQuery)(_v0)}`, _v120({
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
  "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(_v121, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms/batch",
    method: "POST"
  });
  let _v122 = ["created", "results", "results.errors", "results.errors.message", "results.index", "results.status"],
    _v123 = () => {
      let _v0 = URL.createObjectURL(new Blob([`${_v117}\r
`], {
          type: "text/csv;charset=utf-8"
        })),
        _v1 = document.createElement("a");
      _v1.href = _v0, _v1.download = "glossary-template.csv", document.body.appendChild(_v1), _v1.click(), document.body.removeChild(_v1), URL.revokeObjectURL(_v0);
    },
    _v124 = _v0 => (0, _v1.jsx)(_v4.Link, {
      as: "button",
      type: "button",
      color: "text-primary",
      textDecoration: "underline",
      onClick: _v123,
      children: _v0
    }, "glossary-csv-template-link"),
    _v125 = ({
      ownerUserId: _v0,
      translations: _v1,
      hasExistingTerms: _v2,
      onClose: _v3,
      onImported: _v4
    }) => {
      let _v5 = (_v0 => {
          let [_v1, _v2] = _v121(),
            _v3 = (0, _v2.useRef)(void 0),
            _v4 = (0, _v2.useRef)(0);
          return (0, _v2.useEffect)(() => {
            let _v0 = _v3.current;
            if (_v0 && !_v2.loading && !(_v2.callCount < _v0.callCount)) {
              if (_v3.current = void 0, _v2.error) return void _v0.reject(_v2.error);
              _v2.data && _v0.resolve(_v2.data);
            }
          }, [_v2.callCount, _v2.data, _v2.error, _v2.loading]), (0, _v2.useCallback)(async _v0 => {
            let _v1 = Math.max(_v4.current, _v2.callCount) + 1;
            _v4.current = _v1;
            let _v2 = await new Promise((_v0, _v1) => {
              _v3.current = {
                callCount: _v1,
                resolve: _v0,
                reject: _v1
              }, _v1({
                select: _v122,
                variables: {
                  replaceExisting: !0,
                  terms: _v0.map(({
                    sourceText: _v0
                  }) => ({
                    sourceText: _v0
                  }))
                },
                where: {
                  userId: _v0
                }
              });
            });
            return {
              created: _v2.created,
              failures: _v2.results.flatMap(_v0 => {
                if ("failed" !== _v0.status) return [];
                let _v1 = _v0[_v0.index]?.line;
                return void 0 === _v1 ? [] : _v0.errors.map(({
                  message: _v0
                }) => ({
                  line: _v1,
                  message: _v0
                }));
              })
            };
          }, [_v2.callCount, _v0, _v1]);
        })(_v0),
        [_v6, _v7] = (0, _v2.useState)(),
        [_v8, _v9] = (0, _v2.useState)([]),
        [_v10, _v11] = (0, _v2.useState)(!1),
        [_v12, _v13] = (0, _v2.useState)(!1),
        [_v14, _v15] = (0, _v2.useState)(),
        [_v16, _v17] = (0, _v2.useState)(),
        [_v18, _v19] = (0, _v2.useState)([]),
        _v20 = (0, _v59.useToast)({
          duration: 0
        }),
        _v21 = _v10 || _v12,
        _v22 = !!_v6?.some(_v0 => !_v0.sourceText.trim()),
        _v23 = async _v0 => {
          if (_v15(void 0), _v17(void 0), _v19([]), !_v0.name.toLowerCase().endsWith(".csv")) return void _v15(_v1.glossaryCsvUnsupportedFile);
          if (_v0.size > 0) return void _v15(_v1.glossaryCsvFileTooLarge);
          _v11(!0);
          try {
            let _v0 = _v119(await _v0.text()),
              _v1 = _v0.failures.map(_v0 => ({
                line: _v0.line,
                message: (({
                  reason: _v0
                }) => "source_term_required" === _v0 ? _v1.glossaryCsvSourceTermRequired : _v1.glossaryCsvSingleColumnRequired)(_v0)
              }));
            if (0 === _v0.terms.length) {
              _v17(0), _v19(_v1);
              return;
            }
            _v9(_v1), _v7(_v0.terms);
          } catch (_v0) {
            _v0 instanceof _v118 ? _v15("invalid_header" === _v0.code ? _v1.glossaryCsvInvalidHeader : "too_many_rows" === _v0.code ? _v1.glossaryCsvTooManyRows : _v1.glossaryCsvInvalidFile) : _v15(_v1.glossaryCsvImportError);
          } finally {
            _v11(!1);
          }
        },
        _v24 = async () => {
          if (_v6) {
            _v13(!0), _v15(void 0);
            try {
              let _v0 = _v6.map(_v0 => ({
                  ..._v0,
                  sourceText: _v0.sourceText.trim()
                })),
                _v1 = await _v5(_v0),
                _v2 = [..._v8, ..._v1.failures];
              _v1.created > 0 && (await _v4().catch(() => void 0)), _v2.length > 0 ? (_v7(void 0), _v17(_v1.created), _v19(_v2)) : (_v20({
                title: _v1.glossaryCsvImported(_v1.created)
              }), _v3());
            } catch {
              _v15(_v1.glossaryCsvImportError);
            } finally {
              _v13(!1);
            }
          }
        };
      return (0, _v1.jsxs)(_v47.Modal, {
        isOpen: !0,
        onClose: _v21 ? () => void 0 : _v3,
        closeOnEsc: !_v21,
        closeOnOverlayClick: !_v21,
        children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
          maxWidth: (0, _v5.rem)(480),
          children: [(0, _v1.jsx)(_v51.ModalHeader, {
            paddingBottom: (0, _v5.rem)(16),
            children: _v6 ? _v1.csvReviewTitle : _v1.glossaryCsvTitle
          }), (0, _v1.jsxs)(_v48.ModalBody, {
            paddingX: (0, _v5.rem)(32),
            paddingY: (0, _v5.rem)(24),
            children: [_v6 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v63, {
                count: _v6.length,
                translations: _v1
              }), _v2 && (0, _v1.jsx)(_v37.Box, {
                backgroundColor: "fill-component",
                borderRadius: "sm",
                padding: (0, _v5.rem)(12),
                marginBottom: (0, _v5.rem)(16),
                children: (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: _v1.glossaryCsvReplaceConfirmation
                })
              }), (0, _v1.jsx)(_v54.TableContainer, {
                borderWidth: "1px",
                borderColor: "stroke",
                borderRadius: "sm",
                paddingX: 0,
                maxHeight: (0, _v5.rem)(320),
                overflowY: "auto",
                children: (0, _v1.jsxs)(_v53.Table, {
                  width: "100%",
                  sx: {
                    tableLayout: "fixed"
                  },
                  children: [(0, _v1.jsx)(_v57.Thead, {
                    backgroundColor: "fill-component",
                    children: (0, _v1.jsx)(_v58.Tr, {
                      children: (0, _v1.jsx)(_v56.Th, {
                        children: _v1.glossaryTerm
                      })
                    })
                  }), (0, _v1.jsx)(_v55.Tbody, {
                    children: _v6.map((_v0, _v1) => (0, _v1.jsx)(_v58.Tr, {
                      children: (0, _v1.jsx)(_v64, {
                        label: _v1.glossaryTermNumber(_v1 + 1),
                        value: _v0.sourceText,
                        isDisabled: _v12,
                        onChange: _v0 => {
                          _v7(_v0 => _v0?.map((_v0, _v1) => _v1 === _v1 ? {
                            ..._v0,
                            sourceText: _v0
                          } : _v0));
                        }
                      })
                    }, _v0.line))
                  })]
                })
              }), _v8.length > 0 && (0, _v1.jsxs)(_v37.Box, {
                marginTop: (0, _v5.rem)(16),
                children: [(0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: _v1.glossaryCsvRowsFailed(_v8.length)
                }), _v8.map(({
                  line: _v0,
                  message: _v1
                }) => (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: _v1.glossaryCsvLineError(_v0, _v1)
                }, `${_v0}-${_v1}`))]
              })]
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v1.glossaryCsvInstructions
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                marginBottom: _v2 ? void 0 : (0, _v5.rem)(24),
                children: _v1.glossaryCsvTemplatePrompt(_v124)
              }), _v2 && (0, _v1.jsx)(_v37.Box, {
                backgroundColor: "fill-component",
                borderRadius: "sm",
                padding: (0, _v5.rem)(12),
                marginTop: (0, _v5.rem)(16),
                marginBottom: (0, _v5.rem)(24),
                children: (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: _v1.glossaryCsvReplaceNotice
                })
              }), (0, _v1.jsx)(_v60, {
                dropLabel: _v1.glossaryCsvDropFile,
                uploadLabel: _v1.glossaryCsvUploadFile,
                uploadingHint: _v1.csvUploadingHint,
                uploadingLabel: _v1.csvUploading,
                isBusy: _v10,
                onFileSelected: _v0 => void _v23(_v0)
              })]
            }), _v14 && (0, _v1.jsx)(_v9.Alert, {
              status: "error",
              marginTop: (0, _v5.rem)(16),
              children: (0, _v1.jsx)(_v7.AlertDescription, {
                children: _v14
              })
            }), (0, _v1.jsxs)(_v37.Box, {
              "aria-live": "polite",
              children: [void 0 !== _v16 && (0, _v1.jsxs)(_v37.Box, {
                marginTop: (0, _v5.rem)(16),
                children: [(0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: _v1.glossaryCsvImported(_v16)
                }), _v18.length > 0 && (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: _v1.glossaryCsvRowsFailed(_v18.length)
                })]
              }), _v18.length > 0 && (0, _v1.jsx)(_v37.Box, {
                marginTop: (0, _v5.rem)(8),
                children: _v18.map(({
                  line: _v0,
                  message: _v1
                }) => (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: _v1.glossaryCsvLineError(_v0, _v1)
                }, `${_v0}-${_v1}`))
              })]
            })]
          }), _v6 && (0, _v1.jsxs)(_v50.ModalFooter, {
            gap: (0, _v5.rem)(12),
            children: [(0, _v1.jsx)(_v10.Button, {
              variant: "tertiary",
              isDisabled: _v12,
              onClick: _v3,
              children: _v1.cancel
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "primary",
              isLoading: _v12,
              isDisabled: _v22,
              onClick: () => void _v24(),
              children: _v2 ? _v1.replaceGlossary : _v1.save
            })]
          })]
        })]
      });
    };
  var _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0);
  async function _v137({
    baseUrl: _v0,
    where: {
      userId: _v1,
      termId: _v2
    },
    ..._v3
  }) {
    return (0, _v19.measureLatency)("deleteUserAccountDictionaryGlossaryTerm", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/account_dictionary/glossary_terms/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v138({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      termId: _v4
    },
    ..._v5
  }) {
    return (0, _v19.measureLatency)("patchUserAccountDictionaryGlossaryTerm", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/glossary_terms/${_v4}?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v139({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v19.measureLatency)("getUserAccountDictionaryGlossaryTerms", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/account_dictionary/glossary_terms?${(0, _v18.searchQueryString)(_v3)}&fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v140({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v19.measureLatency)("postUserAccountDictionaryGlossaryTerms", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/glossary_terms?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v141({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v19.measureLatency)("patchUserAccountDictionaryGlossaryTermsReorder", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/account_dictionary/glossary_terms/reorder`, {
        ..._v3,
        method: "PATCH",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  function _v142(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v24.useGctlConfig)();
    return (0, _v28.default)(_v2 ? `/users/${_v2.where.userId}/account_dictionary/glossary_terms${(0, _v27.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v139({
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
  "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(_v142, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v29.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v24.useGctlConfig)(),
      [_v5, _v6] = (0, _v27.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/account_dictionary/glossary_terms${(0, _v27.serializeQuery)(_v0)}`, _v139({
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
  }), "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v24.useGctlConfig)();
    return (0, _v30.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/account_dictionary/glossary_terms?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v139({
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
  }, {
    endpoint: "/users/:userId/account_dictionary/glossary_terms",
    method: "GET"
  }), "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v24.useGctlConfig)(),
      [_v4, _v5] = (0, _v27.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v140({
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
  let _v143 = ["uri", "sourceLanguage", "sourceText"],
    _v144 = _v0 => _v0.split("/").pop() ?? "",
    _v145 = _v0 => _v0.flatMap(_v0 => _v0.uri ? [_v0.uri] : []),
    _v146 = (_v0, _v1) => _v0.length === _v1.length && _v0.every((_v0, _v1) => _v0 === _v1[_v1]),
    _v147 = (_v0, _v1) => {
      let _v2 = new Map(_v0.filter(_v0 => _v0.uri).map(_v0 => [_v0.uri, _v0])),
        _v3 = _v145(_v1),
        _v4 = new Set(_v3),
        _v5 = _v145(_v0).filter(_v0 => _v4.has(_v0));
      return {
        created: _v1.filter(_v0 => !_v0.uri && _v0.sourceText.trim()),
        deleted: _v0.filter(_v0 => _v0.uri && !_v4.has(_v0.uri)),
        orderChanged: !_v146(_v3, _v5),
        updated: _v1.filter(_v0 => {
          if (!_v0.uri) return !1;
          let _v1 = _v2.get(_v0.uri);
          return _v1 && _v1.sourceText !== _v0.sourceText.trim();
        })
      };
    },
    _v148 = (_v0, _v1) => [..._v0.map(_v0 => ({
      ..._v0,
      clientId: _v0.uri ?? _v1()
    })), {
      clientId: _v1(),
      sourceLanguage: null,
      sourceText: ""
    }],
    _v149 = ({
      index: _v0,
      isDisabled: _v1,
      isLast: _v2,
      isSortable: _v3,
      row: _v4,
      translations: _v5,
      onPaste: _v6,
      onRemove: _v7,
      onRemoveKeyDown: _v8,
      onUpdate: _v9
    }) => {
      let {
          attributes: _v10,
          listeners: _v11,
          setActivatorNodeRef: _v12,
          setNodeRef: _v13,
          transform: _v14,
          transition: _v15
        } = (0, _v127.useSortable)({
          id: _v4.clientId,
          disabled: {
            draggable: _v1 || !_v3,
            droppable: !_v3
          }
        }),
        {
          onKeyDown: _v16,
          ..._v17
        } = _v11 ?? {};
      return (0, _v1.jsxs)(_v129.Grid, {
        ref: _v13,
        role: "group",
        position: "relative",
        gridTemplateColumns: `${(0, _v5.rem)(96)} minmax(0, 1fr)`,
        minHeight: (0, _v5.rem)(44),
        borderBottom: _v2 ? void 0 : "1px solid",
        borderColor: "stroke",
        style: {
          transform: _v128.CSS.Transform.toString(_v14),
          transition: _v15
        },
        sx: {
          '&:has(.row-handle:hover), &:has(.row-handle[aria-expanded="true"])': {
            outline: "2px solid var(--vimeo-colors-text-primary)",
            outlineOffset: "-2px"
          }
        },
        children: [_v3 && (0, _v1.jsxs)(_v131.Menu, {
          placement: "left-start",
          strategy: "fixed",
          children: [(0, _v1.jsx)(_v132.MenuButton, {
            as: _v130.IconButton,
            className: "row-handle",
            "aria-label": _v5.removeGlossaryTermNumber(_v0 + 1),
            icon: (0, _v1.jsx)(_v136.EllipsisV, {
              boxSize: 16
            }),
            variant: "primary",
            size: "xs",
            isDisabled: _v1,
            position: "absolute",
            top: (0, _v5.rem)(6),
            left: (0, _v5.rem)(-24),
            width: (0, _v5.rem)(16),
            minWidth: (0, _v5.rem)(16),
            height: (0, _v5.rem)(32),
            padding: 0,
            opacity: 0,
            cursor: _v1 ? "not-allowed" : "grab",
            _focusVisible: {
              opacity: 1
            },
            _expanded: {
              opacity: 1
            },
            _groupHover: {
              opacity: 1
            },
            style: {
              touchAction: "none"
            },
            ..._v17,
            onKeyDown: _v0 => _v8(_v0, _v4.clientId)
          }), (0, _v1.jsx)(_v134.MenuList, {
            minWidth: (0, _v5.rem)(151),
            paddingY: (0, _v5.rem)(8),
            children: (0, _v1.jsx)(_v133.MenuItem, {
              onClick: () => _v7(_v4.clientId),
              children: _v5.removeTerm
            })
          })]
        }), (0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          position: "relative",
          paddingX: (0, _v5.rem)(12),
          borderRight: "1px solid",
          borderColor: "stroke",
          backgroundColor: "fill-component",
          children: [(0, _v1.jsx)(_v14.Text, {
            as: "span",
            variant: "heading-xs",
            color: "text-primary",
            children: _v0 + 1
          }), _v3 && (0, _v1.jsx)(_v130.IconButton, {
            ref: _v12,
            ..._v10,
            "aria-label": _v5.moveGlossaryTermNumber(_v0 + 1),
            icon: (0, _v1.jsx)(_v135.DragV, {}),
            variant: "tertiary",
            size: "xs",
            isDisabled: _v1,
            position: "absolute",
            right: (0, _v5.rem)(4),
            opacity: 0,
            _focusVisible: {
              opacity: 1
            },
            onKeyDown: _v0 => _v16?.(_v0)
          })]
        }), (0, _v1.jsx)(_v61.Input, {
          "aria-label": _v5.glossaryTermNumber(_v0 + 1),
          value: _v4.sourceText,
          maxLength: 500,
          isDisabled: _v1,
          width: "100%",
          minWidth: 0,
          height: (0, _v5.rem)(43),
          border: 0,
          borderRadius: 0,
          backgroundColor: "fill-surface",
          color: "text-primary",
          textStyle: "body-md",
          paddingX: (0, _v5.rem)(12),
          _focusVisible: {
            boxShadow: "inset 0 0 0 2px var(--vimeo-colors-text-primary)"
          },
          onChange: _v0 => _v9(_v4.clientId, _v0.target.value),
          onPaste: _v0 => _v6(_v0, _v0)
        })]
      });
    },
    _v150 = ({
      ownerUserId: _v0,
      translations: _v1,
      onClose: _v2,
      onSaved: _v3,
      isOpen: _v4 = !0,
      onImportCsv: _v5
    }) => {
      let {
          terms: _v6,
          isLoading: _v7,
          isComplete: _v8,
          error: _v9,
          refresh: _v10,
          save: _v11
        } = (_v0 => {
          let {
              baseUrl: _v1,
              jwt: _v2,
              xVimeoPage: _v3,
              locale: _v4
            } = (0, _v24.useGctlConfig)(),
            [_v5, _v6] = (0, _v2.useState)({}),
            _v7 = (0, _v2.useMemo)(() => ({
              "Content-Type": "application/json",
              Authorization: _v2 ? `jwt ${_v2}` : "",
              "Vimeo-Page": `${_v3}`,
              "Accept-Language": _v4 ?? "en"
            }), [_v2, _v4, _v3]),
            _v8 = (0, _v2.useCallback)(async () => {
              let _v0,
                _v1 = [];
              for (let _v0 = 1; _v0 <= 20; _v0 += 1) {
                let _v0 = await _v139({
                  baseUrl: _v1,
                  headers: _v7,
                  select: _v143,
                  where: {
                    userId: _v0
                  },
                  query: {
                    page: _v0,
                    perPage: 100
                  }
                });
                if (_v0 ??= _v0.total, _v1.push(..._v0.data), !_v0.paging.next) break;
              }
              let _v2 = _v145(_v1);
              if (_v1.length !== _v0 || new Set(_v2).size !== _v2.length) throw Error("The complete glossary could not be loaded.");
              return _v1;
            }, [_v1, _v7, _v0]);
          (0, _v2.useEffect)(() => {
            let _v0 = !0;
            return _v8().then(_v0 => {
              _v0 && _v6({
                terms: _v0
              });
            }, _v0 => {
              _v0 && _v6({
                error: _v0
              });
            }), () => {
              _v0 = !1;
            };
          }, [_v8]);
          let _v9 = (0, _v2.useCallback)(async () => {
              let _v0 = await _v8();
              return _v6({
                terms: _v0
              }), _v0;
            }, [_v8]),
            _v10 = (0, _v2.useCallback)(async (_v0, _v1) => {
              let _v2 = _v147(_v0, _v1);
              await Promise.all([..._v2.deleted.map(_v0 => _v137({
                baseUrl: _v1,
                headers: _v7,
                where: {
                  userId: _v0,
                  termId: _v144(_v0.uri ?? "")
                }
              })), ..._v2.updated.map(_v0 => _v138({
                baseUrl: _v1,
                headers: _v7,
                select: ["uri"],
                variables: {
                  sourceText: _v0.sourceText.trim()
                },
                where: {
                  userId: _v0,
                  termId: _v144(_v0.uri ?? "")
                }
              }))]);
              let _v3 = new Map();
              if (_v2.created.length > 0) {
                let _v0 = await _v120({
                  baseUrl: _v1,
                  headers: _v7,
                  select: ["failed", "results"],
                  variables: {
                    terms: _v2.created.map(_v0 => ({
                      sourceLanguage: _v0.sourceLanguage,
                      sourceText: _v0.sourceText.trim()
                    }))
                  },
                  where: {
                    userId: _v0
                  }
                });
                if (_v0.failed > 0) throw Error("Some glossary terms could not be created");
                if (_v0.results?.forEach(_v0 => {
                  let _v1 = _v2.created[_v0.index];
                  _v1 && _v0.uri && _v3.set(_v1, _v0.uri);
                }), _v3.size !== _v2.created.length) throw Error("The batch response did not report every created glossary term");
              }
              let _v4 = _v1.map(_v0 => {
                  let _v1 = _v0.uri ?? _v3.get(_v0);
                  if (!_v1) throw Error("Glossary term could not be resolved for reordering");
                  return _v1;
                }),
                _v5 = new Set(_v145(_v1));
              _v146(_v4, [..._v145(_v0).filter(_v0 => _v5.has(_v0)), ..._v2.created.map(_v0 => _v3.get(_v0) ?? "")]) || (await _v141({
                baseUrl: _v1,
                headers: _v7,
                variables: {
                  termIds: _v4.map(_v144)
                },
                where: {
                  userId: _v0
                }
              })), await _v9().catch(() => void 0);
            }, [_v1, _v7, _v0, _v9]);
          return {
            terms: _v5.terms ?? [],
            isLoading: !_v5.terms && !_v5.error,
            isComplete: !!_v5.terms,
            error: _v5.error,
            refresh: _v9,
            save: _v10
          };
        })(_v0),
        _v12 = (0, _v2.useRef)(0),
        [_v13, _v14] = (0, _v2.useState)([]),
        [_v15, _v16] = (0, _v2.useState)([]),
        [_v17, _v18] = (0, _v2.useState)(!1),
        [_v19, _v20] = (0, _v2.useState)(),
        [_v21, _v22] = (0, _v2.useState)(!1),
        _v23 = (0, _v2.useRef)(!1),
        _v24 = (0, _v59.useToast)({
          title: _v1.changesSaved,
          duration: 0
        }),
        _v25 = (0, _v2.useCallback)(() => `new-glossary-term-${_v12.current++}`, []),
        _v26 = (0, _v126.useSensors)((0, _v126.useSensor)(_v126.PointerSensor, {
          activationConstraint: {
            distance: 8
          }
        }), (0, _v126.useSensor)(_v126.KeyboardSensor, {
          coordinateGetter: _v127.sortableKeyboardCoordinates
        }));
      (0, _v2.useEffect)(() => {
        _v7 || !_v8 || _v9 || _v23.current || (_v14(_v6), _v16(_v148(_v6, _v25)), _v23.current = !0);
      }, [_v8, _v7, _v9, _v25, _v6]);
      let _v27 = (0, _v2.useMemo)(() => _v15.filter(_v0 => _v0.uri || _v0.sourceText.trim()), [_v15]),
        _v28 = (0, _v2.useMemo)(() => _v27.map(_v0 => ({
          uri: _v0.uri,
          sourceLanguage: _v0.sourceLanguage,
          sourceText: _v0.sourceText
        })), [_v27]),
        _v29 = (0, _v2.useMemo)(() => _v15.map(_v0 => _v0.clientId), [_v15]),
        _v30 = _v27.some(_v0 => _v0.uri && !_v0.sourceText.trim()),
        _v31 = _v147(_v13, _v28),
        _v32 = !!(_v31.created.length || _v31.updated.length || _v31.deleted.length || _v31.orderChanged),
        _v33 = _v0 => {
          let _v1 = _v0[_v0.length - 1];
          return _v1 && !_v1.sourceText.trim() ? _v0 : [..._v0, {
            clientId: _v25(),
            sourceLanguage: null,
            sourceText: ""
          }];
        },
        _v34 = (_v0, _v1) => {
          _v16(_v0 => _v33(_v0.map(_v0 => _v0.clientId === _v0 ? {
            ..._v0,
            sourceText: _v1
          } : _v0)));
        },
        _v35 = _v0 => {
          _v16(_v0 => _v33(_v0.filter(_v0 => _v0.clientId !== _v0)));
        },
        _v36 = (0, _v2.useMemo)(() => {
          let _v0 = _v0 => _v15.findIndex(_v0 => _v0.clientId === _v0) + 1;
          return {
            announcements: {
              onDragStart: ({
                active: _v0
              }) => _v1.glossaryTermPickedUp(_v0(_v0.id)),
              onDragOver: ({
                active: _v0,
                over: _v1
              }) => _v1 ? _v1.glossaryTermMoved(_v0(_v0.id), _v0(_v1.id)) : void 0,
              onDragEnd: ({
                active: _v0,
                over: _v1
              }) => _v1 ? _v1.glossaryTermDropped(_v0(_v0.id), _v0(_v1.id)) : _v1.glossaryTermMoveCanceled(_v0(_v0.id)),
              onDragCancel: ({
                active: _v0
              }) => _v1.glossaryTermMoveCanceled(_v0(_v0.id))
            },
            screenReaderInstructions: {
              draggable: _v1.glossaryDragInstructions
            }
          };
        }, [_v15, _v1]),
        _v37 = (_v0, _v1) => {
          "Delete" === _v0.key && (_v0.preventDefault(), _v35(_v1));
        },
        _v38 = (_v0, _v1) => {
          let _v2 = _v0.clipboardData.getData("text");
          if (!/[\r\n]/.test(_v2)) return;
          let _v3 = _v2.trimStart().split(/\r\n|\r|\n/, 1)[0]?.trim().toLowerCase() === _v117 ? _v2 : `${_v117}
${_v2}`;
          try {
            let _v0 = _v119(_v3);
            if (_v0.failures.length > 0 || 0 === _v0.terms.length) return;
            _v0.preventDefault(), _v16(_v0 => {
              let _v1 = _v0.terms.map(({
                sourceText: _v0
              }) => ({
                clientId: _v25(),
                sourceLanguage: null,
                sourceText: _v0
              }));
              return _v33([..._v0.slice(0, _v1), ..._v1, ..._v0.slice(_v1 + 1)]);
            });
          } catch (_v0) {
            if (!(_v0 instanceof _v118)) throw _v0;
          }
        },
        _v39 = _v0 => {
          _v14(_v0), _v16(_v148(_v0, _v25)), _v22(!1);
        },
        _v40 = async () => {
          _v18(!0);
          try {
            _v39(await _v10());
          } catch {
            _v22(!0);
          } finally {
            _v18(!1);
          }
        },
        _v41 = async () => {
          _v18(!0), _v20(void 0);
          try {
            await _v11(_v13, _v28), await _v3().catch(() => void 0), _v24(), _v2();
          } catch (_v0) {
            try {
              _v39(await _v10());
            } catch {
              _v22(!0);
            }
            _v20(_v0 instanceof Error ? _v0 : Error(_v1.changesCouldNotBeSaved));
          } finally {
            _v18(!1);
          }
        };
      return (0, _v1.jsxs)(_v47.Modal, {
        isOpen: _v4,
        closeOnEsc: !_v17,
        closeOnOverlayClick: !_v17,
        onClose: _v17 ? () => void 0 : _v2,
        children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
          width: `calc(100vw - ${(0, _v5.rem)(32)})`,
          maxWidth: (0, _v5.rem)(480),
          height: (0, _v5.rem)(700),
          maxHeight: `calc(100vh - ${(0, _v5.rem)(32)})`,
          children: [(0, _v1.jsx)(_v51.ModalHeader, {
            children: _v1.glossaryTitle
          }), (0, _v1.jsxs)(_v48.ModalBody, {
            overflowY: "auto",
            paddingX: (0, _v5.rem)(32),
            paddingY: (0, _v5.rem)(24),
            children: [(0, _v1.jsx)(_v9.Alert, {
              status: "info",
              marginBottom: (0, _v5.rem)(24),
              children: (0, _v1.jsxs)(_v7.AlertDescription, {
                children: [_v1.glossaryEditorDescription, " ", (0, _v1.jsx)(_v4.Link, {
                  as: "button",
                  type: "button",
                  color: "text-primary",
                  textDecoration: "underline",
                  onClick: _v123,
                  children: _v1.glossaryDownloadTemplate
                })]
              })
            }), _v9 && (0, _v1.jsxs)(_v9.Alert, {
              status: "error",
              marginBottom: (0, _v5.rem)(16),
              children: [(0, _v1.jsx)(_v7.AlertDescription, {
                flex: "1",
                children: _v1.glossaryLoadingError
              }), (0, _v1.jsx)(_v10.Button, {
                variant: "secondary",
                size: "sm",
                onClick: () => void _v10().catch(() => void 0),
                children: _v1.tryAgain
              })]
            }), _v19 && (0, _v1.jsxs)(_v9.Alert, {
              status: "error",
              marginBottom: (0, _v5.rem)(16),
              children: [(0, _v1.jsx)(_v7.AlertDescription, {
                flex: "1",
                children: _v19 instanceof _v18.NetworkError && (404 === _v19.status || 409 === _v19.status) ? _v1.glossaryOrderConflict : _v1.changesCouldNotBeSaved
              }), _v21 && (0, _v1.jsx)(_v10.Button, {
                variant: "secondary",
                size: "sm",
                onClick: _v40,
                children: _v1.tryAgain
              })]
            }), _v7 ? (0, _v1.jsx)(_v3.Flex, {
              minHeight: (0, _v5.rem)(240),
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v1.jsx)(_v46.Spinner, {})
            }) : (0, _v1.jsx)(_v126.DndContext, {
              accessibility: _v36,
              sensors: _v26,
              onDragEnd: ({
                active: _v0,
                over: _v1
              }) => {
                _v1 && _v0.id !== _v1.id && _v16(_v0 => {
                  let _v1 = _v0.findIndex(_v0 => _v0.clientId === _v0.id),
                    _v2 = _v0.findIndex(_v0 => _v0.clientId === _v1.id);
                  return _v1 < 0 || _v2 < 0 ? _v0 : (0, _v127.arrayMove)(_v0, _v1, _v2);
                });
              },
              children: (0, _v1.jsx)(_v127.SortableContext, {
                items: _v29,
                strategy: _v127.verticalListSortingStrategy,
                children: (0, _v1.jsx)(_v37.Box, {
                  border: "1px solid",
                  borderColor: "stroke",
                  borderRadius: "sm",
                  backgroundColor: "fill-surface",
                  children: _v15.map((_v0, _v1) => (0, _v1.jsx)(_v149, {
                    index: _v1,
                    isDisabled: _v17 || !_v8,
                    isLast: _v1 === _v15.length - 1,
                    isSortable: !!(_v0.uri || _v0.sourceText.trim()),
                    row: _v0,
                    translations: _v1,
                    onPaste: _v38,
                    onRemove: _v35,
                    onRemoveKeyDown: _v37,
                    onUpdate: _v34
                  }, _v0.clientId))
                })
              })
            })]
          }), (0, _v1.jsxs)(_v50.ModalFooter, {
            alignItems: {
              base: "stretch",
              sm: "center"
            },
            borderTop: "1px solid",
            borderColor: "stroke",
            flexDirection: {
              base: "column",
              sm: "row"
            },
            gap: (0, _v5.rem)(12),
            children: [_v5 && (0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              leftIcon: (0, _v1.jsx)(_v45.Upload, {}),
              width: {
                base: "100%",
                sm: "auto"
              },
              onClick: _v5,
              isDisabled: _v17,
              children: _v1.uploadCsv
            }), (0, _v1.jsxs)(_v3.Flex, {
              gap: (0, _v5.rem)(12),
              justifyContent: "flex-end",
              marginLeft: {
                base: 0,
                sm: "auto"
              },
              children: [(0, _v1.jsx)(_v10.Button, {
                variant: "tertiary",
                onClick: _v2,
                isDisabled: _v17,
                children: _v1.cancel
              }), (0, _v1.jsx)(_v10.Button, {
                variant: "primary",
                onClick: _v41,
                isLoading: _v17,
                isDisabled: _v7 || !_v8 || !!_v9 || _v21 || _v30 || !_v32,
                children: _v1.save
              })]
            })]
          })]
        })]
      });
    },
    _v151 = ({
      ownerUserId: _v0,
      translations: _v1
    }) => {
      let _v2,
        _v3,
        _v4,
        [_v5, _v6] = (0, _v2.useState)(1),
        [_v7, _v8] = (0, _v2.useState)(!1),
        [_v9, _v10] = (0, _v2.useState)(!1),
        {
          terms: _v11,
          total: _v12,
          page: _v13,
          perPage: _v14,
          quota: _v15,
          isLoading: _v16,
          error: _v17,
          retry: _v18
        } = (_v2 = _v142(() => ({
          select: ["uri", "sourceText"],
          where: {
            userId: _v0
          },
          query: {
            page: _v5,
            perPage: 100
          }
        })), _v3 = (0, _v25.useGetUser)(() => ({
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
        _v19 = _v15?.used ?? _v12,
        _v20 = _v15?.limit ?? 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v17.TeamSettingsPageCategory, {
          title: _v1.glossaryTitle,
          description: _v1.glossaryDescription,
          headingAs: "h2",
          headerActions: !_v16 && !_v17 && (0, _v1.jsxs)(_v3.Flex, {
            gap: (0, _v5.rem)(8),
            children: [(0, _v1.jsx)(_v41.Tooltip, {
              label: _v1.glossaryCsvDescription,
              placement: "top",
              children: (0, _v1.jsx)(_v10.Button, {
                variant: "tertiary",
                size: "sm",
                leftIcon: (0, _v1.jsx)(_v45.Upload, {}),
                onClick: () => _v8(!0),
                children: _v1.csv
              })
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              size: "sm",
              leftIcon: 0 === _v12 ? (0, _v1.jsx)(_v44.Plus, {}) : (0, _v1.jsx)(_v43.EditPencil, {}),
              onClick: () => _v10(!0),
              children: _v12 > 0 ? _v1.edit : _v1.addTerm
            })]
          }),
          children: _v16 ? (0, _v1.jsx)(_v3.Flex, {
            minHeight: (0, _v5.rem)(140),
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v1.jsx)(_v46.Spinner, {})
          }) : _v17 ? (0, _v1.jsxs)(_v9.Alert, {
            status: "error",
            marginTop: (0, _v5.rem)(24),
            alignItems: "center",
            children: [(0, _v1.jsx)(_v7.AlertDescription, {
              flex: "1",
              children: _v1.glossaryLoadingError
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              size: "sm",
              onClick: _v18,
              children: _v1.tryAgain
            })]
          }) : 0 === _v12 ? (0, _v1.jsxs)(_v3.Flex, {
            minHeight: (0, _v5.rem)(140),
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            children: [(0, _v1.jsx)(_v42.ClipboardNotes, {
              boxSize: 32
            }), (0, _v1.jsx)(_v14.Text, {
              variant: "heading-sm",
              marginTop: (0, _v5.rem)(8),
              children: _v1.glossaryEmptyTitle
            }), (0, _v1.jsx)(_v14.Text, {
              variant: "body-sm",
              color: "text-secondary",
              marginTop: (0, _v5.rem)(4),
              children: _v1.glossaryEmptyDescription
            })]
          }) : (0, _v1.jsxs)(_v37.Box, {
            marginTop: (0, _v5.rem)(24),
            children: [(0, _v1.jsx)(_v3.Flex, {
              flexWrap: "wrap",
              gap: (0, _v5.rem)(8),
              children: _v11.map(_v0 => (0, _v1.jsx)(_v40.Tag, {
                size: "sm",
                borderRadius: "md",
                children: (0, _v1.jsx)(_v40.TagLabel, {
                  children: _v0.sourceText
                })
              }, _v0.uri))
            }), _v12 > _v14 && (0, _v1.jsx)(_v3.Flex, {
              justifyContent: "center",
              marginTop: (0, _v5.rem)(24),
              children: (0, _v1.jsx)(_v38.Pagination, {
                size: "sm",
                count: _v12,
                pageSize: _v14,
                page: _v13,
                onPageChange: ({
                  page: _v0
                }) => _v6(_v0)
              })
            }), _v20 > 0 && (0, _v1.jsxs)(_v3.Flex, {
              alignItems: {
                base: "stretch",
                sm: "center"
              },
              backgroundColor: "fill-component",
              borderRadius: "sm",
              flexDirection: {
                base: "column",
                sm: "row"
              },
              gap: (0, _v5.rem)(16),
              marginX: (0, _v5.rem)(-16),
              marginBottom: (0, _v5.rem)(-16),
              marginTop: (0, _v5.rem)(24),
              paddingX: (0, _v5.rem)(24),
              paddingY: (0, _v5.rem)(16),
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "heading-xs",
                whiteSpace: "nowrap",
                children: _v1.glossaryCount(_v19, _v20)
              }), (0, _v1.jsx)(_v39.Progress, {
                "aria-label": _v1.glossaryCount(_v19, _v20),
                flex: "1",
                width: "auto",
                minWidth: 0,
                size: "xs",
                value: Math.min(_v19 / _v20 * 100, 100)
              })]
            })]
          })
        }), _v9 && (0, _v1.jsx)(_v150, {
          ownerUserId: _v0,
          translations: _v1,
          isOpen: !_v7,
          onImportCsv: () => _v8(!0),
          onClose: () => _v10(!1),
          onSaved: async () => {
            _v6(1), await _v18();
          }
        }), _v7 && (0, _v1.jsx)(_v125, {
          ownerUserId: _v0,
          translations: _v1,
          hasExistingTerms: _v12 > 0,
          onClose: () => _v8(!1),
          onImported: async () => {
            _v6(1), await _v18();
          }
        })]
      });
    };
  var _v152 = _v0.i(0),
    _v153 = _v0.i(0);
  let _v154 = _v0 => (0, _v1.jsx)(_v153.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("g", {
        fill: "currentColor",
        children: (0, _v1.jsx)("path", {
          d: "M6.29 19.71a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1.004 1.004 0 1 0-1.42-1.42L8 16.59V8a1 1 0 0 0-2 0v8.59l-2.29-2.3a1.004 1.004 0 1 0-1.42 1.42l4 4ZM17.71 4.29a1 1 0 0 0-.33-.21.94.94 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1.004 1.004 0 0 0 1.42 1.42L16 7.41V16a1 1 0 1 0 2 0V7.41l2.29 2.3a1.004 1.004 0 1 0 1.42-1.42l-4-4Z"
        })
      })
    }),
    _v155 = [{
      feature: "autocaptioning",
      glossary: 950,
      termsTranslations: void 0
    }, {
      feature: "liveCaptioning",
      glossary: 50,
      termsTranslations: void 0
    }, {
      feature: "subtitleTranslation",
      glossary: 0,
      termsTranslations: 0
    }, {
      feature: "liveCaptionTranslation",
      glossary: 0,
      termsTranslations: void 0
    }, {
      feature: "dubbing",
      glossary: void 0,
      termsTranslations: void 0
    }],
    _v156 = ({
      limit: _v0,
      translations: _v1
    }) => (0, _v1.jsx)(_v14.Text, {
      variant: "body-md",
      color: void 0 === _v0 ? "text-tertiary" : "text-primary",
      children: void 0 === _v0 ? _v1.notSupportedYet : _v1.processingLimit(_v0)
    }),
    _v157 = ({
      isOpen: _v0,
      onClose: _v1,
      translations: _v2
    }) => (0, _v1.jsxs)(_v47.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      scrollBehavior: "inside",
      children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
        maxWidth: {
          base: "calc(100vw - 32px)",
          md: (0, _v5.rem)(560)
        },
        width: "100%",
        children: [(0, _v1.jsx)(_v51.ModalHeader, {
          paddingBottom: "2",
          paddingRight: "7",
          children: _v2.limitsByFeatureTitle
        }), (0, _v1.jsx)(_v152.ModalCloseButton, {
          top: "6",
          right: "7"
        }), (0, _v1.jsx)(_v48.ModalBody, {
          paddingTop: "5",
          paddingBottom: "6",
          children: (0, _v1.jsxs)(_v3.Flex, {
            flexDirection: "column",
            gap: "4",
            children: [(0, _v1.jsx)(_v14.Text, {
              variant: "body-md",
              children: _v2.limitsByFeatureDescription
            }), (0, _v1.jsxs)(_v3.Flex, {
              gap: "3",
              alignItems: "center",
              padding: "3",
              borderRadius: "md",
              backgroundColor: "fill-component",
              children: [(0, _v1.jsx)(_v154, {
                boxSize: "6",
                flexShrink: 0,
                color: "text-secondary",
                "aria-hidden": "true"
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v2.orderingExplanation
              })]
            }), (0, _v1.jsx)(_v37.Box, {
              role: "region",
              tabIndex: 0,
              "aria-label": _v2.featureLimitsTableScrollLabel,
              borderRadius: "sm",
              overflowX: "auto",
              _focusVisible: {
                outline: `${(0, _v5.rem)(2)} solid`,
                outlineColor: "focus",
                outlineOffset: (0, _v5.rem)(2)
              },
              children: (0, _v1.jsx)(_v37.Box, {
                minWidth: (0, _v5.rem)(480),
                borderWidth: (0, _v5.rem)(1),
                borderColor: "stroke",
                borderRadius: "sm",
                overflow: "hidden",
                children: (0, _v1.jsxs)(_v53.Table, {
                  variant: "unstyled",
                  width: "100%",
                  "aria-label": _v2.limitsByFeatureTitle,
                  sx: {
                    tableLayout: "fixed",
                    "th, td": {
                      height: (0, _v5.rem)(44),
                      padding: (0, _v5.rem)(12),
                      borderRightWidth: (0, _v5.rem)(1),
                      borderBottomWidth: (0, _v5.rem)(1),
                      borderColor: "stroke",
                      verticalAlign: "middle"
                    },
                    th: {
                      backgroundColor: "fill-component",
                      color: "text-secondary",
                      textStyle: "heading-xs"
                    },
                    "th:last-of-type, td:last-of-type": {
                      borderRightWidth: 0
                    },
                    "tbody tr:last-of-type td": {
                      borderBottomWidth: 0
                    }
                  },
                  children: [(0, _v1.jsx)(_v57.Thead, {
                    children: (0, _v1.jsxs)(_v58.Tr, {
                      children: [(0, _v1.jsx)(_v56.Th, {
                        "aria-label": _v2.featureColumnLabel
                      }), (0, _v1.jsx)(_v56.Th, {
                        children: _v2.glossaryTitle
                      }), (0, _v1.jsx)(_v56.Th, {
                        children: _v2.replacementsTitle
                      })]
                    })
                  }), (0, _v1.jsx)(_v55.Tbody, {
                    children: _v155.map(({
                      feature: _v0,
                      glossary: _v1,
                      termsTranslations: _v2
                    }) => (0, _v1.jsxs)(_v58.Tr, {
                      children: [(0, _v1.jsx)(_v62.Td, {
                        children: (0, _v1.jsx)(_v14.Text, {
                          variant: "heading-xs",
                          children: _v2.featureNames[_v0]
                        })
                      }), (0, _v1.jsx)(_v62.Td, {
                        children: (0, _v1.jsx)(_v156, {
                          limit: _v1,
                          translations: _v2
                        })
                      }), (0, _v1.jsx)(_v62.Td, {
                        children: (0, _v1.jsx)(_v156, {
                          limit: _v2,
                          translations: _v2
                        })
                      })]
                    }, _v0))
                  })]
                })
              })
            })]
          })
        })]
      })]
    });
  var _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0);
  let _v168 = new Map(),
    _v169 = _v0 => _v0.trim().toLowerCase().replaceAll("_", "-"),
    _v170 = (_v0, _v1) => {
      try {
        return (_v0 => {
          let _v1 = _v168.get(_v0);
          if (_v1) return _v1;
          let _v2 = new Intl.DisplayNames([_v0], {
            type: "language"
          });
          return _v168.set(_v0, _v2), _v2;
        })(_v1).of(_v0) ?? _v0.toUpperCase();
      } catch (_v0) {
        if (_v0 instanceof RangeError) return _v0.toUpperCase();
        throw _v0;
      }
    },
    _v171 = _v0 => new Map(_v0.map(({
      code: _v0,
      name: _v1
    }) => [_v169(_v0), _v1])),
    _v172 = (_v0, _v1, _v2) => _v2.get(_v169(_v0)) ?? _v170(_v0, _v1),
    _v173 = ["source language", "source term", "target language", "target term"];
  class _v174 extends Error {
    code;
    constructor(_v0) {
      super(_v0), this.code = _v0;
    }
  }
  let _v175 = _v0 => _v0.trim().toLocaleLowerCase().replaceAll("_", "-");
  var _v176 = _v0.i(0);
  async function _v177({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v19.measureLatency)("postUserAccountDictionaryTranslationRulesBatch", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/account_dictionary/translation_rules/batch?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  let _v178 = ["created", "results", "results.errors", "results.errors.message", "results.index", "results.status"],
    _v179 = (_v0, _v1, _v2) => {
      let _v3 = (_v2?.results ?? []).flatMap(_v0 => {
        if ("failed" !== _v0.status) return [];
        let _v1 = _v0[_v0.index]?.line ?? 0;
        return _v0.errors.length ? _v0.errors.map(({
          message: _v0
        }) => ({
          code: "server",
          line: _v1,
          message: _v0
        })) : [{
          code: "server",
          line: _v1
        }];
      }) ?? [];
      return {
        created: _v2?.created ?? 0,
        failures: [..._v1, ..._v3].sort((_v0, _v1) => _v0.line - _v1.line)
      };
    },
    _v180 = (_v0, _v1) => "column_count" === _v0.code ? _v1.replacementsCsvColumnCountError : "required" === _v0.code ? _v1.replacementsCsvRequiredError : "field_length" === _v0.code ? _v1.replacementsCsvFieldLengthError : "invalid_source_language" === _v0.code ? _v1.replacementsCsvInvalidSourceLanguage(_v0.language) : "invalid_target_language" === _v0.code ? _v1.replacementsCsvInvalidTargetLanguage(_v0.language) : "matching_source_target_language" === _v0.code ? _v1.replacementsCsvMatchingLanguages : _v0.message ?? _v1.replacementsCsvServerError,
    _v181 = ({
      ownerUserId: _v0,
      translations: _v1,
      hasExistingEntries: _v2,
      onClose: _v3,
      onImported: _v4
    }) => {
      let _v5 = (0, _v167.useLocale)(),
        _v6 = (0, _v2.useRef)(null),
        _v7 = (_v0 => {
          let {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v24.useGctlConfig)();
          return (0, _v2.useCallback)(async (_v0, _v1) => {
            let _v2;
            if (0 === _v0.length) return _v179(_v0, _v1);
            let _v3 = {
                "Content-Type": "application/json",
                Authorization: _v2 ? `jwt ${_v2}` : "",
                "Vimeo-Page": `${_v3}`,
                "Accept-Language": _v4 ?? "en"
              },
              _v4 = [],
              _v5 = 1;
            for (;;) {
              let _v0 = await (0, _v176.getLanguages)({
                baseUrl: _v1,
                headers: _v3,
                query: {
                  filter: "texttracks",
                  page: _v5,
                  perPage: 100
                },
                select: ["code"]
              });
              if (_v4.push(..._v0.data.map(({
                code: _v0
              }) => _v0)), !_v0.paging.next) break;
              _v5 += 1;
            }
            let _v6 = (_v2 = new Set(_v4.map(_v175)), _v0.reduce((_v0, _v1) => {
                let _v2 = _v175(_v1.sourceLanguage),
                  _v3 = _v175(_v1.targetLanguage),
                  _v4 = _v2.has(_v2),
                  _v5 = _v2.has(_v3);
                return _v4 || _v0.failures.push({
                  code: "invalid_source_language",
                  language: _v1.sourceLanguage,
                  line: _v1.line
                }), _v5 || _v0.failures.push({
                  code: "invalid_target_language",
                  language: _v1.targetLanguage,
                  line: _v1.line
                }), _v4 && _v5 && _v2 === _v3 ? _v0.failures.push({
                  code: "matching_source_target_language",
                  line: _v1.line
                }) : _v4 && _v5 && _v0.entries.push(_v1), _v0;
              }, {
                entries: [],
                failures: []
              })),
              _v7 = [..._v1, ..._v6.failures];
            if (0 === _v6.entries.length) return _v179(_v6.entries, _v7);
            let _v8 = await _v177({
              baseUrl: _v1,
              headers: _v3,
              select: _v178,
              variables: {
                replaceExisting: !0,
                rules: _v6.entries.map(_v0 => ({
                  replacementText: _v0.replacementText,
                  ruleType: "mapping",
                  sourceLanguage: _v0.sourceLanguage,
                  sourceText: _v0.sourceText,
                  targetLanguage: _v0.targetLanguage
                }))
              },
              where: {
                userId: _v0
              }
            });
            return _v179(_v6.entries, _v7, _v8);
          }, [_v1, _v2, _v4, _v0, _v3]);
        })(_v0),
        [_v8, _v9] = (0, _v2.useState)(),
        [_v10, _v11] = (0, _v2.useState)([]),
        [_v12, _v13] = (0, _v2.useState)(),
        [_v14, _v15] = (0, _v2.useState)(),
        [_v16, _v17] = (0, _v2.useState)(!1),
        [_v18, _v19] = (0, _v2.useState)(!1),
        _v20 = (0, _v59.useToast)({
          title: _v1.replacementsChangesSaved,
          duration: 0
        }),
        _v21 = (0, _v2.useMemo)(() => `data:text/csv;charset=utf-8,${encodeURIComponent(`${_v173.join(",")}\r
`)}`, []),
        _v22 = (0, _v2.useMemo)(() => {
          var _v0;
          let _v1;
          return _v0 = _v8 ?? [], _v1 = new Map(), _v0.forEach((_v0, _v1) => {
            let {
                sourceLanguage: _v2,
                targetLanguage: _v3
              } = _v0,
              _v4 = `${_v2}:${_v3}`,
              _v5 = _v1.get(_v4);
            _v5 || (_v5 = {
              key: _v4,
              sourceLanguage: _v2,
              targetLanguage: _v3,
              rows: []
            }, _v1.set(_v4, _v5)), _v5.rows.push({
              entry: _v0,
              index: _v1
            });
          }), [..._v1.values()];
        }, [_v8]),
        _v23 = !!_v8?.some(_v0 => !_v0.sourceText.trim() || !_v0.replacementText.trim()),
        _v24 = _v16 || _v18;
      (0, _v2.useEffect)(() => {
        (_v14 || _v12) && _v6.current?.focus();
      }, [_v14, _v12]);
      let _v25 = async _v0 => {
          if (_v13(void 0), _v15(void 0), !_v0.name.toLowerCase().endsWith(".csv")) return void _v15("file");
          _v17(!0);
          try {
            let _v0 = (_v0 => {
              let _v1,
                _v2 = (_v0 => {
                  let _v1 = [],
                    _v2 = 1,
                    _v3 = 1,
                    _v4 = !1,
                    _v5 = !1;
                  for (let _v0 = 0; _v0 < _v0.length; _v0 += 1) {
                    let _v0 = _v0[_v0];
                    '"' === _v0 && (_v4 && '"' === _v0[_v0 + 1] ? _v0 += 1 : _v4 = !_v4), /\s/.test(_v0) || (_v5 = !0);
                    let _v1 = "\n" === _v0 || "\r" === _v0 && "\n" !== _v0[_v0 + 1];
                    !_v4 && _v1 ? (_v1.push({
                      isBlank: !_v5,
                      line: _v3
                    }), _v2 += 1, _v3 = _v2, _v5 = !1) : _v1 && (_v2 += 1);
                  }
                  return !_v0 || _v0.endsWith("\n") || _v0.endsWith("\r") || _v1.push({
                    isBlank: !_v5,
                    line: _v3
                  }), _v1;
                })(_v0);
              if (_v2.filter(({
                isBlank: _v0
              }) => !_v0).length - 1 > 0) throw new _v174("too_many_rows");
              try {
                _v1 = _v116(_v0, {
                  bom: !0,
                  record_delimiter: ["\r\n", "\n", "\r"],
                  relax_column_count: !0
                });
              } catch {
                throw new _v174("malformed");
              }
              let _v3 = _v1[0]?.map(_v0 => _v0.trim().toLowerCase());
              if (!_v3) throw new _v174("empty");
              if (_v3.length !== _v173.length || _v3.some((_v0, _v1) => _v0 !== _v173[_v1])) throw new _v174("header");
              let _v4 = _v1.slice(1).map((_v0, _v1) => ({
                isBlank: _v2[_v1 + 1]?.isBlank ?? !1,
                line: _v2[_v1 + 1]?.line ?? _v1 + 2,
                record: _v0
              })).filter(({
                isBlank: _v0
              }) => !_v0);
              if (0 === _v4.length) throw new _v174("empty");
              let _v5 = [],
                _v6 = [];
              return _v4.forEach(({
                line: _v0,
                record: _v1
              }) => {
                if (_v1.length !== _v173.length) return void _v6.push({
                  code: "column_count",
                  line: _v0
                });
                let [_v2, _v3, _v4, _v5] = _v1.map(_v0 => _v0.trim());
                _v2 && _v3 && _v4 && _v5 ? Array.from(_v2).length > 16 || Array.from(_v4).length > 16 || Array.from(_v3).length > 500 || Array.from(_v5).length > 500 ? _v6.push({
                  code: "field_length",
                  line: _v0
                }) : _v5.push({
                  line: _v0,
                  replacementText: _v5,
                  sourceLanguage: _v2,
                  sourceText: _v3,
                  targetLanguage: _v4
                }) : _v6.push({
                  code: "required",
                  line: _v0
                });
              }), {
                entries: _v5,
                failures: _v6
              };
            })(await _v0.text());
            if (0 === _v0.entries.length) return void _v13({
              created: 0,
              failures: _v0.failures
            });
            _v11(_v0.failures), _v9(_v0.entries);
          } catch (_v0) {
            _v15(_v0 instanceof _v174 ? _v0.code : "network");
          } finally {
            _v17(!1);
          }
        },
        _v26 = (_v0, _v1, _v2) => {
          _v9(_v0 => _v0?.map((_v0, _v1) => _v1 === _v0 ? {
            ..._v0,
            [_v1]: _v2
          } : _v0));
        },
        _v27 = async () => {
          if (_v8) {
            _v19(!0), _v15(void 0);
            try {
              let _v0 = _v8.map(_v0 => ({
                  ..._v0,
                  replacementText: _v0.replacementText.trim(),
                  sourceText: _v0.sourceText.trim()
                })),
                _v1 = await _v7(_v0, _v10);
              _v1.created > 0 && (await _v4().catch(() => void 0)), _v1.failures.length > 0 ? (_v9(void 0), _v13(_v1)) : (_v20(), _v3());
            } catch {
              _v15("network");
            } finally {
              _v19(!1);
            }
          }
        };
      return (0, _v1.jsxs)(_v47.Modal, {
        isOpen: !0,
        closeOnEsc: !_v24,
        closeOnOverlayClick: !_v24,
        onClose: _v24 ? () => void 0 : _v3,
        children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
          maxWidth: (0, _v5.rem)(480),
          children: [(0, _v1.jsx)(_v51.ModalHeader, {
            children: _v8 ? _v1.csvReviewTitle : _v1.replacementsCsvImport
          }), (0, _v1.jsxs)(_v48.ModalBody, {
            children: [_v8 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v63, {
                count: _v8.length,
                translations: _v1
              }), _v2 && (0, _v1.jsx)(_v37.Box, {
                backgroundColor: "fill-component",
                borderRadius: "sm",
                padding: (0, _v5.rem)(12),
                marginBottom: (0, _v5.rem)(16),
                children: (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: _v1.replacementsCsvReplaceConfirmation
                })
              }), _v22.map(_v0 => {
                let _v1 = _v170(_v0.targetLanguage, _v5);
                return (0, _v1.jsx)(_v54.TableContainer, {
                  borderWidth: "1px",
                  borderColor: "stroke",
                  borderRadius: "sm",
                  paddingX: 0,
                  marginBottom: (0, _v5.rem)(16),
                  maxHeight: (0, _v5.rem)(320),
                  overflowY: "auto",
                  children: (0, _v1.jsxs)(_v53.Table, {
                    width: "100%",
                    sx: {
                      tableLayout: "fixed"
                    },
                    children: [(0, _v1.jsx)(_v57.Thead, {
                      backgroundColor: "fill-component",
                      children: (0, _v1.jsxs)(_v58.Tr, {
                        children: [(0, _v1.jsx)(_v56.Th, {
                          children: _v1.replacementsOriginalLanguage(_v170(_v0.sourceLanguage, _v5))
                        }), (0, _v1.jsx)(_v56.Th, {
                          children: _v1
                        })]
                      })
                    }), (0, _v1.jsx)(_v55.Tbody, {
                      children: _v0.rows.map(({
                        entry: _v0,
                        index: _v1
                      }, _v2) => (0, _v1.jsxs)(_v58.Tr, {
                        children: [(0, _v1.jsx)(_v64, {
                          label: _v1.replacementsSourceTerm(_v2 + 1),
                          value: _v0.sourceText,
                          isDisabled: _v18,
                          onChange: _v0 => _v26(_v1, "sourceText", _v0)
                        }), (0, _v1.jsx)(_v64, {
                          label: _v1.replacementsTargetTerm(_v1, _v2 + 1),
                          value: _v0.replacementText,
                          isDisabled: _v18,
                          onChange: _v0 => _v26(_v1, "replacementText", _v0)
                        })]
                      }, _v0.line))
                    })]
                  })
                }, _v0.key);
              }), _v10.length > 0 && (0, _v1.jsx)(_v9.Alert, {
                status: "warning",
                marginBottom: (0, _v5.rem)(8),
                alignItems: "flex-start",
                children: (0, _v1.jsxs)(_v37.Box, {
                  children: [(0, _v1.jsx)(_v7.AlertDescription, {
                    children: (0, _v1.jsx)(_v14.Text, {
                      variant: "body-sm",
                      children: _v1.replacementsCsvPartialFailure
                    })
                  }), (0, _v1.jsx)(_v37.Box, {
                    maxHeight: (0, _v5.rem)(120),
                    overflowY: "auto",
                    marginTop: (0, _v5.rem)(8),
                    children: _v10.map((_v0, _v1) => (0, _v1.jsx)(_v14.Text, {
                      variant: "body-sm",
                      children: _v1.replacementsCsvFailureLine(_v0.line, _v180(_v0, _v1))
                    }, `${_v0.line}:${_v1}`))
                  })]
                })
              })]
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v1.replacementsCsvInstructions
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v2.Children.toArray(_v1.replacementsCsvTemplatePrompt(_v0 => (0, _v1.jsx)(_v4.Link, {
                  href: _v21,
                  download: "terms-translations-template.csv",
                  textDecoration: "underline",
                  children: _v2.Children.toArray(_v0)
                }, "csv-template-link")))
              }), _v2 && (0, _v1.jsx)(_v37.Box, {
                backgroundColor: "fill-component",
                borderRadius: "sm",
                padding: (0, _v5.rem)(12),
                marginTop: (0, _v5.rem)(16),
                children: (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: _v1.replacementsCsvReplaceNotice
                })
              }), (0, _v1.jsx)(_v37.Box, {
                marginTop: (0, _v5.rem)(24),
                children: (0, _v1.jsx)(_v60, {
                  dropLabel: _v1.replacementsCsvDropzone,
                  uploadLabel: _v1.replacementsCsvUploadFile,
                  uploadingHint: _v1.csvUploadingHint,
                  uploadingLabel: _v1.csvUploading,
                  isBusy: _v16,
                  onFileSelected: _v0 => void _v25(_v0)
                })
              })]
            }), _v14 && (0, _v1.jsx)(_v9.Alert, {
              ref: _v6,
              status: "error",
              marginTop: (0, _v5.rem)(24),
              tabIndex: -1,
              children: (0, _v1.jsx)(_v7.AlertDescription, {
                children: "empty" === _v14 ? _v1.replacementsCsvEmpty : "header" === _v14 ? _v1.replacementsCsvInvalidHeader : "malformed" === _v14 ? _v1.replacementsCsvMalformed : "too_many_rows" === _v14 ? _v1.replacementsCsvTooManyRows : "file" === _v14 ? _v1.replacementsCsvInvalidFile : _v1.replacementsCsvImportError
              })
            }), _v12 && (0, _v1.jsx)(_v9.Alert, {
              ref: _v6,
              status: _v12.created > 0 ? "warning" : "error",
              marginTop: (0, _v5.rem)(24),
              alignItems: "flex-start",
              tabIndex: -1,
              children: (0, _v1.jsxs)(_v37.Box, {
                children: [(0, _v1.jsxs)(_v7.AlertDescription, {
                  children: [_v12.created > 0 && (0, _v1.jsx)(_v14.Text, {
                    variant: "body-sm",
                    children: _v1.replacementsCsvImported(_v12.created)
                  }), (0, _v1.jsx)(_v14.Text, {
                    variant: "body-sm",
                    children: _v12.created > 0 ? _v1.replacementsCsvPartialFailure : _v1.replacementsCsvAllFailed
                  })]
                }), (0, _v1.jsx)(_v37.Box, {
                  maxHeight: (0, _v5.rem)(160),
                  overflowY: "auto",
                  marginTop: (0, _v5.rem)(8),
                  children: _v12.failures.map((_v0, _v1) => (0, _v1.jsx)(_v14.Text, {
                    variant: "body-sm",
                    children: _v1.replacementsCsvFailureLine(_v0.line, _v180(_v0, _v1))
                  }, `${_v0.line}:${_v1}`))
                })]
              })
            })]
          }), _v8 && (0, _v1.jsxs)(_v50.ModalFooter, {
            gap: (0, _v5.rem)(12),
            children: [(0, _v1.jsx)(_v10.Button, {
              variant: "tertiary",
              isDisabled: _v18,
              onClick: _v3,
              children: _v1.cancel
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "primary",
              isLoading: _v18,
              isDisabled: _v23,
              onClick: () => void _v27(),
              children: _v2 ? _v1.replaceTermsTranslations : _v1.save
            })]
          })]
        })]
      });
    };
  var _v182 = _v0.i(0);
  let _v183 = (_v0, _v1) => _v0.filter(({
      code: _v0
    }) => !_v1.includes(_v0)).map(({
      code: _v0,
      localized: _v1,
      native: _v2
    }) => {
      let _v3 = _v170(_v0, _v0),
        _v4 = _v2 || _v3;
      return {
        label: 0 === _v3.localeCompare(_v0, void 0, {
          sensitivity: "accent"
        }) || 0 === _v4.localeCompare(_v1, void 0, {
          sensitivity: "accent"
        }) ? _v1 : `${_v1} - ${_v4}`,
        value: _v0
      };
    }).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)),
    _v184 = {
      border: 0,
      clip: "rect(0, 0, 0, 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    },
    _v185 = ({
      existingLanguages: _v0,
      languages: _v1,
      translations: _v2,
      onClose: _v3,
      onSelect: _v4
    }) => {
      let _v5 = (0, _v167.useLocale)(),
        [_v6, _v7] = (0, _v2.useState)([]),
        [_v8, _v9] = (0, _v2.useState)(!1),
        _v10 = (0, _v2.useMemo)(() => _v183(_v1, _v0), [_v0, _v1]),
        _v11 = _v10.filter(({
          value: _v0
        }) => !_v6.includes(_v0));
      return (0, _v1.jsxs)(_v47.Modal, {
        isOpen: !0,
        onClose: _v3,
        children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
          maxWidth: (0, _v5.rem)(480),
          children: [(0, _v1.jsx)(_v51.ModalHeader, {
            children: _v2.replacementsAddLanguage
          }), (0, _v1.jsxs)(_v48.ModalBody, {
            overflow: "visible",
            children: [(0, _v1.jsx)(_v14.Text, {
              variant: "body-md",
              color: "text-secondary",
              marginBottom: (0, _v5.rem)(24),
              children: _v2.replacementsTargetLanguageDescription
            }), 0 === _v10.length ? (0, _v1.jsx)(_v9.Alert, {
              status: "info",
              children: (0, _v1.jsx)(_v7.AlertDescription, {
                children: _v2.replacementsNoLanguagesAvailable
              })
            }) : (0, _v1.jsxs)(_v3.Flex, {
              flexDirection: "column",
              gap: (0, _v5.rem)(8),
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "body-sm",
                fontFamily: "heading",
                children: _v2.replacementsLanguages
              }), _v6.map((_v0, _v1) => {
                let _v2 = _v10.filter(({
                    value: _v0
                  }) => _v0 === _v0 || !_v6.includes(_v0)),
                  _v3 = _v10.find(({
                    value: _v0
                  }) => _v0 === _v0)?.label ?? _v0;
                return (0, _v1.jsxs)(_v3.Flex, {
                  gap: (0, _v5.rem)(8),
                  alignItems: "flex-end",
                  children: [(0, _v1.jsx)(_v37.Box, {
                    flex: "1",
                    sx: {
                      '& [data-part="label"]': _v184,
                      '& [role="listbox"]': {
                        maxHeight: (0, _v5.rem)(160),
                        overflowY: "auto"
                      }
                    },
                    children: (0, _v1.jsx)(_v160.Select, {
                      items: _v2,
                      label: _v2.replacementsPendingLanguage(_v1 + 1),
                      value: [_v0],
                      positioning: {
                        placement: "bottom-start",
                        sameWidth: !0,
                        flip: !1
                      },
                      withPortal: !1,
                      onValueChange: ({
                        value: _v0
                      }) => {
                        let _v1 = _v0[0];
                        _v1 && _v7(_v0 => _v0.map((_v0, _v1) => _v1 === _v1 ? _v1 : _v0));
                      },
                      children: _v0 => (0, _v1.jsx)(_v160.SelectItem, {
                        item: _v0,
                        children: (0, _v1.jsx)(_v160.SelectItemText, {
                          children: _v0.label
                        })
                      })
                    })
                  }), (0, _v1.jsx)(_v130.IconButton, {
                    "aria-label": _v2.replacementsRemoveLanguage(_v3),
                    icon: (0, _v1.jsx)(_v161.CloseX, {}),
                    variant: "primary",
                    onClick: () => {
                      _v7(_v0 => _v0.filter(_v0 => _v0 !== _v0));
                    }
                  })]
                }, _v0);
              }), _v11.length > 0 && (0, _v1.jsxs)(_v3.Flex, {
                gap: (0, _v5.rem)(8),
                alignItems: "flex-end",
                children: [(0, _v1.jsx)(_v37.Box, {
                  flex: "1",
                  sx: {
                    '& [data-part="label"]': _v184,
                    '& [role="listbox"]': {
                      maxHeight: (0, _v5.rem)(160),
                      overflowY: "auto"
                    }
                  },
                  children: (0, _v1.jsx)(_v160.Select, {
                    items: _v11,
                    label: _v2.replacementsSelectLanguage,
                    placeholder: _v2.replacementsSelectLanguage,
                    value: [],
                    positioning: {
                      placement: "bottom-start",
                      sameWidth: !0,
                      flip: !1
                    },
                    withPortal: !1,
                    onValueChange: ({
                      value: _v0
                    }) => {
                      let _v1 = _v0[0];
                      _v1 && _v7(_v0 => [..._v0, _v1]);
                    },
                    children: _v0 => (0, _v1.jsx)(_v160.SelectItem, {
                      item: _v0,
                      children: (0, _v1.jsx)(_v160.SelectItemText, {
                        children: _v0.label
                      })
                    })
                  })
                }), (0, _v1.jsx)(_v130.IconButton, {
                  "aria-label": _v2.replacementsRemoveLanguage(_v2.replacementsSelectLanguage),
                  icon: (0, _v1.jsx)(_v161.CloseX, {}),
                  variant: "tertiary",
                  isDisabled: !0
                })]
              })]
            })]
          }), (0, _v1.jsxs)(_v50.ModalFooter, {
            gap: (0, _v5.rem)(8),
            children: [(0, _v1.jsx)(_v10.Button, {
              variant: "tertiary",
              onClick: _v3,
              children: _v2.cancel
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "primary",
              isDisabled: 0 === _v6.length,
              onClick: () => _v9(!0),
              children: _v2.add
            })]
          })]
        }), _v8 && (0, _v1.jsxs)(_v47.Modal, {
          isOpen: !0,
          onClose: () => _v9(!1),
          children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
            maxWidth: (0, _v5.rem)(480),
            children: [(0, _v1.jsx)(_v51.ModalHeader, {
              children: _v2.replacementsNewLanguagesTitle
            }), (0, _v1.jsx)(_v48.ModalBody, {
              children: (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v2.replacementsNewLanguagesDescription(new Intl.ListFormat(_v5, {
                  style: "long",
                  type: "conjunction"
                }).format(_v6.map(_v0 => _v10.find(({
                  value: _v0
                }) => _v0 === _v0)?.label ?? _v0)))
              })
            }), (0, _v1.jsxs)(_v50.ModalFooter, {
              gap: (0, _v5.rem)(8),
              children: [(0, _v1.jsx)(_v10.Button, {
                variant: "tertiary",
                onClick: () => _v9(!1),
                children: _v2.cancel
              }), (0, _v1.jsx)(_v10.Button, {
                variant: "primary",
                onClick: () => _v4(_v6),
                children: _v2.replacementsAddLanguages
              })]
            })]
          })]
        })]
      });
    },
    _v186 = ({
      languageItems: _v0,
      translations: _v1,
      onClose: _v2,
      onSave: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)();
      return (0, _v1.jsxs)(_v47.Modal, {
        isOpen: !0,
        onClose: _v2,
        children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
          maxWidth: (0, _v5.rem)(480),
          children: [(0, _v1.jsx)(_v51.ModalHeader, {
            children: _v1.replacementsNewLanguageTitle
          }), (0, _v1.jsxs)(_v48.ModalBody, {
            overflow: "visible",
            children: [(0, _v1.jsx)(_v14.Text, {
              variant: "body-md",
              color: "text-secondary",
              marginBottom: (0, _v5.rem)(24),
              children: _v1.replacementsNewLanguageDescription
            }), (0, _v1.jsx)(_v37.Box, {
              sx: {
                '& [role="listbox"]': {
                  maxHeight: (0, _v5.rem)(160),
                  overflowY: "auto"
                }
              },
              children: (0, _v1.jsx)(_v160.Select, {
                items: [..._v0],
                label: _v1.replacementsLanguage,
                placeholder: _v1.replacementsSelectLanguage,
                value: void 0 === _v4 ? [] : [_v4],
                positioning: {
                  placement: "bottom-start",
                  sameWidth: !0,
                  flip: !1
                },
                withPortal: !1,
                onValueChange: ({
                  value: _v0
                }) => {
                  let _v1 = _v0[0];
                  _v1 && _v5(_v1);
                },
                children: _v0 => (0, _v1.jsx)(_v160.SelectItem, {
                  item: _v0,
                  children: (0, _v1.jsx)(_v160.SelectItemText, {
                    children: _v0.label
                  })
                })
              })
            })]
          }), (0, _v1.jsxs)(_v50.ModalFooter, {
            gap: (0, _v5.rem)(8),
            children: [(0, _v1.jsx)(_v10.Button, {
              variant: "tertiary",
              onClick: _v2,
              children: _v1.cancel
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "primary",
              isDisabled: void 0 === _v4,
              onClick: () => {
                void 0 !== _v4 && _v3(_v4);
              },
              children: _v1.save
            })]
          })]
        })]
      });
    };
  class _v187 extends Error {
    isConflict;
    snapshot;
    constructor(_v0, _v1) {
      super("Terms translations could not be saved"), this.name = "TermsTranslationsSaveError", this.isConflict = _v0.some(_v0 => _v0 instanceof _v18.NetworkError && 409 === _v0.status), this.snapshot = _v1;
    }
  }
  let _v188 = _v0 => _v0.split("/").pop() ?? "",
    _v189 = _v0 => _v0.flatMap(_v0 => _v0.mappings.map(_v0 => ({
      ..._v0,
      sourceLanguage: _v0.sourceLanguage,
      sourceText: _v0.sourceText.trim(),
      replacementText: _v0.replacementText.trim()
    }))),
    _v190 = (_v0, _v1) => {
      let _v2 = _v189(_v0),
        _v3 = _v189(_v1),
        _v4 = new Map(_v2.filter(_v0 => _v0.uri).map(_v0 => [_v0.uri, _v0])),
        _v5 = new Map(_v3.filter(_v0 => _v0.uri).map(_v0 => [_v0.uri, _v0]));
      return {
        created: _v3.filter(_v0 => !_v0.uri && _v0.sourceText && _v0.replacementText),
        deleted: _v2.filter(_v0 => {
          if (!_v0.uri) return !1;
          let _v1 = _v5.get(_v0.uri);
          return !_v1 || !_v1.sourceText || !_v1.replacementText;
        }),
        updated: _v3.filter(_v0 => {
          if (!_v0.uri || !_v0.sourceText || !_v0.replacementText) return !1;
          let _v1 = _v4.get(_v0.uri);
          return !!(_v1 && (_v1.sourceLanguage !== _v0.sourceLanguage || _v1.sourceText !== _v0.sourceText || _v1.targetLanguage !== _v0.targetLanguage || _v1.replacementText !== _v0.replacementText));
        })
      };
    },
    _v191 = (_v0, _v1) => {
      let _v2 = new Map(),
        _v3 = new Set();
      return _v0.forEach(_v0 => {
        if (!_v0.sourceText || !_v0.targetLanguage || !_v0.replacementText) return;
        let _v1 = _v2.get(_v0.sourceText) ?? {
          mappings: [],
          sourceLanguage: _v1,
          sourceText: _v0.sourceText
        };
        _v1.mappings.push({
          replacementText: _v0.replacementText,
          targetLanguage: _v0.targetLanguage,
          uri: _v0.uri
        }), _v2.set(_v0.sourceText, _v1), _v3.add(_v0.targetLanguage);
      }), {
        rows: Array.from(_v2.values()).map(_v0 => ({
          ..._v0,
          clientId: `${_v0.sourceLanguage}:${_v0.sourceText}`,
          mappings: _v0.mappings.map(_v0 => ({
            ..._v0
          }))
        })),
        targetLanguages: Array.from(_v3)
      };
    },
    _v192 = _v0 => _v0.flatMap(_v0 => "rejected" === _v0.status ? [_v0.reason] : []),
    _v193 = _v0 => `new-terms-translation-row-${_v0}`,
    _v194 = (_v0, _v1, _v2, _v3) => [..._v0.map(_v0 => ({
      ..._v0,
      mappings: _v2.map(_v0 => _v0.mappings.find(_v0 => _v0.targetLanguage === _v0) ?? {
        targetLanguage: _v0,
        replacementText: ""
      })
    })), {
      clientId: _v3,
      mappings: _v2.map(_v0 => ({
        targetLanguage: _v0,
        replacementText: ""
      })),
      sourceLanguage: _v1,
      sourceText: ""
    }],
    _v195 = _v0 => {
      let _v1 = _v0.trim().toLowerCase().replaceAll("_", "-"),
        _v2 = _v1.indexOf("-x-");
      return -1 === _v2 ? _v1 : _v1.slice(0, _v2);
    },
    _v196 = (_v0, _v1, _v2) => `${_v195(_v0)}\u0000${_v1.trim()}\u0000${_v195(_v2)}`,
    _v197 = ({
      editor: _v0,
      sourceLanguage: _v1,
      sourceLanguages: _v2,
      supportedLanguages: _v3,
      translations: _v4,
      onClose: _v5,
      onSaved: _v6,
      onSourceLanguageChange: _v7
    }) => {
      let _v8 = (0, _v167.useLocale)(),
        _v9 = (0, _v2.useMemo)(() => _v171(_v3.map(({
          code: _v0,
          localized: _v1
        }) => ({
          code: _v0,
          name: _v1
        }))), [_v3]),
        _v10 = (0, _v2.useCallback)(_v0 => _v172(_v0, _v8, _v9), [_v9, _v8]),
        _v11 = (0, _v2.useRef)(1),
        _v12 = (0, _v2.useRef)(null),
        _v13 = (0, _v2.useCallback)(() => _v193(_v11.current++), []),
        _v14 = _v0.targetLanguages,
        [_v15, _v16] = (0, _v2.useState)(() => _v194(_v0.rows, _v1, _v14, _v193(0))),
        [_v17, _v18] = (0, _v2.useState)(_v15),
        [_v19, _v20] = (0, _v2.useState)(_v14),
        [_v21, _v22] = (0, _v2.useState)(!1),
        [_v23, _v24] = (0, _v2.useState)(),
        [_v25, _v26] = (0, _v2.useState)(),
        [_v27, _v28] = (0, _v2.useState)(!1),
        [_v29, _v30] = (0, _v2.useState)(),
        [_v31, _v32] = (0, _v2.useState)(!1),
        _v33 = (0, _v2.useRef)(_v0.isLoading ? void 0 : _v1),
        _v34 = (0, _v59.useToast)({
          title: _v4.replacementsChangesSaved,
          duration: 0
        }),
        _v35 = (0, _v2.useMemo)(() => Array.from(new Set([_v1, ..._v2])).map(_v0 => ({
          label: _v10(_v0),
          value: _v0
        })).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label, _v8)), [_v10, _v8, _v1, _v2]),
        _v36 = (0, _v2.useMemo)(() => _v17.filter(_v0 => _v0.sourceText.trim() || _v0.mappings.some(_v0 => _v0.uri || _v0.replacementText.trim())), [_v17]),
        _v37 = _v190(_v15, _v36),
        _v38 = !!(_v37.created.length || _v37.updated.length || _v37.deleted.length),
        _v39 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v194(_v0.rows, _v1, _v0.targetLanguages, _v13());
          _v16(_v1), _v18(_v1), _v20(_v0.targetLanguages);
        }, [_v13, _v1]);
      (0, _v2.useEffect)(() => {
        _v0.isLoading || _v0.error || _v33.current === _v1 || (_v39({
          rows: _v0.rows,
          targetLanguages: _v0.targetLanguages
        }), _v30(void 0), _v32(!1), _v33.current = _v1);
      }, [_v39, _v0.error, _v0.isLoading, _v0.rows, _v0.targetLanguages, _v1]);
      let _v40 = (0, _v2.useCallback)(_v0 => {
          let _v1 = new Set(_v0.rows.flatMap(_v0 => _v0.mappings.flatMap(_v0 => _v0.uri ? [_v0.uri] : []))),
            _v2 = new Map(_v0.rows.flatMap(_v0 => _v0.mappings.flatMap(_v0 => _v0.uri ? [[_v196(_v0.sourceLanguage, _v0.sourceText, _v0.targetLanguage), _v0.uri]] : [])));
          _v16(_v194(_v0.rows, _v1, _v0.targetLanguages, _v13())), _v18(_v0 => _v0.map(_v0 => ({
            ..._v0,
            mappings: _v0.mappings.map(_v0 => ({
              ..._v0,
              uri: (_v0.uri && _v1.has(_v0.uri) ? _v0.uri : void 0) ?? _v2.get(_v196(_v0.sourceLanguage, _v0.sourceText, _v0.targetLanguage))
            }))
          }))), _v20(_v0 => [...new Set([..._v0, ..._v0.targetLanguages])]), _v32(!1);
        }, [_v13, _v1]),
        _v41 = (0, _v2.useCallback)(_v0 => [..._v0, {
          clientId: _v13(),
          mappings: _v19.map(_v0 => ({
            targetLanguage: _v0,
            replacementText: ""
          })),
          sourceLanguage: _v1,
          sourceText: ""
        }], [_v13, _v1, _v19]),
        _v42 = _v0 => {
          _v18(_v0 => {
            let _v1 = _v0.filter(_v0 => _v0.clientId !== _v0);
            return _v1.length ? _v1 : _v41([]);
          });
        },
        _v43 = async () => {
          _v28(!0), _v30(void 0);
          try {
            await _v0.save(_v15, _v36), await _v6().catch(() => void 0), _v34(), _v5();
          } catch (_v0) {
            let _v1 = _v0 instanceof _v187 ? _v0.snapshot : void 0;
            _v1 ? _v40(_v1) : _v32(!0), _v30(_v0);
          } finally {
            _v28(!1);
          }
        },
        _v44 = (_v19.length + 1) * 140 + 44,
        _v45 = async () => {
          _v28(!0);
          try {
            let _v0 = await _v0.refresh();
            _v31 ? _v40(_v0) : _v39(_v0), _v30(void 0);
          } catch {
            _v31 && _v32(!0);
          } finally {
            _v28(!1);
          }
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v47.Modal, {
          isOpen: !0,
          onClose: _v27 ? () => void 0 : _v5,
          closeOnOverlayClick: !_v27,
          children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
            ref: _v12,
            width: `calc(100vw - ${(0, _v5.rem)(32)})`,
            maxWidth: (0, _v5.rem)(700),
            height: `min(${(0, _v5.rem)(700)}, calc(100vh - ${(0, _v5.rem)(32)}))`,
            maxHeight: `calc(100vh - ${(0, _v5.rem)(32)})`,
            children: [(0, _v1.jsx)(_v51.ModalHeader, {
              paddingBottom: (0, _v5.rem)(16),
              children: _v4.replacementsTitle
            }), (0, _v1.jsxs)(_v48.ModalBody, {
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              overflow: "visible",
              paddingX: (0, _v5.rem)(32),
              paddingY: (0, _v5.rem)(24),
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                marginBottom: (0, _v5.rem)(16),
                children: _v4.replacementsEditorDescription
              }), (0, _v1.jsx)(_v37.Box, {
                "aria-live": "polite",
                children: !!(_v0.error || _v29) && (0, _v1.jsxs)(_v9.Alert, {
                  status: "error",
                  marginBottom: (0, _v5.rem)(16),
                  children: [(0, _v1.jsx)(_v7.AlertDescription, {
                    flex: "1",
                    children: _v0.error ? _v4.replacementsLoadingError : _v4.replacementsChangesCouldNotBeSaved
                  }), (_v0.error || _v31) && (0, _v1.jsx)(_v10.Button, {
                    variant: "secondary",
                    size: "sm",
                    isLoading: _v27,
                    onClick: () => void _v45(),
                    children: _v4.tryAgain
                  })]
                })
              }), (0, _v1.jsx)(_v37.Box, {
                width: {
                  base: "100%",
                  md: (0, _v5.rem)(252)
                },
                marginBottom: (0, _v5.rem)(16),
                sx: {
                  '& [role="listbox"]': {
                    maxHeight: (0, _v5.rem)(240),
                    overflowY: "auto"
                  }
                },
                children: (0, _v1.jsx)(_v160.Select, {
                  items: _v35,
                  label: _v4.replacementsSourceLanguage,
                  value: [_v1],
                  size: "md",
                  withPortal: !1,
                  disabled: _v27 || _v0.isLoading || _v38,
                  onValueChange: ({
                    value: _v0
                  }) => {
                    let _v1,
                      _v2 = _v0[0];
                    _v2 && (_v16(_v1 = _v194([], _v2, [], _v13())), _v18(_v1), _v20([]), _v30(void 0), _v32(!1), _v7(_v2));
                  },
                  children: _v0 => (0, _v1.jsx)(_v160.SelectItem, {
                    item: _v0,
                    children: (0, _v1.jsx)(_v160.SelectItemText, {
                      children: _v0.label
                    })
                  })
                })
              }), (0, _v1.jsxs)(_v37.Box, {
                position: "relative",
                flex: "1",
                marginLeft: (0, _v5.rem)(-24),
                width: `calc(100% + ${(0, _v5.rem)(24)})`,
                minHeight: {
                  base: (0, _v5.rem)(160),
                  md: (0, _v5.rem)(260)
                },
                children: [(0, _v1.jsx)(_v54.TableContainer, {
                  height: "100%",
                  width: "100%",
                  maxWidth: "100%",
                  overflowX: "auto",
                  overflowY: "auto",
                  paddingX: 0,
                  "aria-busy": _v0.isLoading,
                  children: (0, _v1.jsx)(_v37.Box, {
                    paddingLeft: (0, _v5.rem)(24),
                    minWidth: (0, _v5.rem)(_v44 + 24),
                    minHeight: "100%",
                    children: (0, _v1.jsx)(_v37.Box, {
                      borderWidth: "1px",
                      borderColor: "stroke",
                      borderRadius: "sm",
                      minHeight: "100%",
                      children: (0, _v1.jsxs)(_v53.Table, {
                        width: "100%",
                        height: "auto",
                        sx: {
                          tableLayout: "fixed",
                          "& th, & td": {
                            borderBottomWidth: "1px",
                            borderColor: "stroke",
                            borderRightWidth: "1px"
                          },
                          "& tr > :last-child": {
                            borderRightWidth: 0
                          }
                        },
                        children: [(0, _v1.jsx)(_v57.Thead, {
                          backgroundColor: "fill-component",
                          children: (0, _v1.jsxs)(_v58.Tr, {
                            height: (0, _v5.rem)(44),
                            children: [(0, _v1.jsx)(_v56.Th, {
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              children: _v4.replacementsOriginalLanguage(_v10(_v1))
                            }), _v19.map(_v0 => {
                              let _v1 = _v10(_v0);
                              return (0, _v1.jsx)(_v56.Th, {
                                children: (0, _v1.jsxs)(_v3.Flex, {
                                  role: "group",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: (0, _v5.rem)(8),
                                  children: [(0, _v1.jsx)(_v37.Box, {
                                    as: "span",
                                    flex: "1",
                                    minWidth: 0,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    children: _v1
                                  }), (0, _v1.jsxs)(_v131.Menu, {
                                    placement: "bottom-end",
                                    strategy: "fixed",
                                    children: [(0, _v1.jsx)(_v132.MenuButton, {
                                      as: _v130.IconButton,
                                      "aria-label": _v4.replacementsLanguageOptions(_v1),
                                      icon: (0, _v1.jsx)(_v136.EllipsisV, {
                                        boxSize: 16
                                      }),
                                      variant: "primary",
                                      size: "xs",
                                      width: (0, _v5.rem)(16),
                                      minWidth: (0, _v5.rem)(16),
                                      height: (0, _v5.rem)(32),
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
                                      isDisabled: _v27 || _v0.isLoading
                                    }), (0, _v1.jsx)(_v182.Portal, {
                                      containerRef: _v12,
                                      children: (0, _v1.jsx)(_v134.MenuList, {
                                        zIndex: "popover",
                                        children: (0, _v1.jsx)(_v133.MenuItem, {
                                          onClick: () => {
                                            _v20(_v0 => _v0.filter(_v0 => _v0 !== _v0)), _v18(_v0 => _v0.map(_v0 => ({
                                              ..._v0,
                                              mappings: _v0.mappings.filter(_v0 => _v0.targetLanguage !== _v0)
                                            })));
                                          },
                                          children: _v4.replacementsDeleteLanguage
                                        })
                                      })
                                    })]
                                  })]
                                })
                              }, _v0);
                            }), (0, _v1.jsx)(_v56.Th, {
                              width: (0, _v5.rem)(44),
                              padding: (0, _v5.rem)(4),
                              children: (0, _v1.jsx)(_v41.Tooltip, {
                                label: _v4.replacementsAddLanguageTooltip,
                                children: (0, _v1.jsx)(_v130.IconButton, {
                                  "aria-label": _v4.replacementsAddLanguage,
                                  icon: (0, _v1.jsx)(_v44.Plus, {}),
                                  variant: "tertiary",
                                  size: "sm",
                                  isDisabled: _v27 || _v0.isLoading,
                                  onClick: () => _v22(!0)
                                })
                              })
                            })]
                          })
                        }), (0, _v1.jsx)(_v55.Tbody, {
                          children: _v17.map((_v0, _v1) => (0, _v1.jsxs)(_v58.Tr, {
                            height: (0, _v5.rem)(44),
                            outline: _v23 === _v0.clientId || _v25 === _v0.clientId ? "2px solid var(--vimeo-colors-text-primary)" : void 0,
                            outlineOffset: "-2px",
                            sx: {
                              "&:hover .remove-row, &:focus-within .remove-row": {
                                opacity: 1
                              }
                            },
                            children: [(0, _v1.jsxs)(_v62.Td, {
                              position: "relative",
                              height: (0, _v5.rem)(44),
                              padding: "0",
                              children: [!!(_v0.sourceText || _v0.mappings.some(_v0 => _v0.uri || _v0.replacementText)) && (0, _v1.jsxs)(_v131.Menu, {
                                placement: "left-start",
                                strategy: "fixed",
                                onOpen: () => _v26(_v0.clientId),
                                onClose: () => _v26(void 0),
                                children: [(0, _v1.jsx)(_v132.MenuButton, {
                                  as: _v130.IconButton,
                                  "aria-label": _v4.replacementsRemoveRow(_v1 + 1),
                                  onMouseEnter: () => _v24(_v0.clientId),
                                  onMouseLeave: () => _v24(void 0),
                                  onFocus: () => _v24(_v0.clientId),
                                  onBlur: () => _v24(void 0),
                                  icon: (0, _v1.jsx)(_v136.EllipsisV, {
                                    boxSize: 16
                                  }),
                                  variant: "primary",
                                  size: "xs",
                                  className: "remove-row",
                                  isDisabled: _v27 || _v0.isLoading,
                                  position: "absolute",
                                  top: (0, _v5.rem)(6),
                                  left: (0, _v5.rem)(-24),
                                  width: (0, _v5.rem)(16),
                                  minWidth: (0, _v5.rem)(16),
                                  height: (0, _v5.rem)(32),
                                  padding: 0,
                                  zIndex: 1,
                                  opacity: 0,
                                  _focusVisible: {
                                    opacity: 1
                                  },
                                  _expanded: {
                                    opacity: 1
                                  },
                                  onKeyDown: _v0 => {
                                    "Delete" === _v0.key && (_v0.preventDefault(), _v42(_v0.clientId));
                                  }
                                }), (0, _v1.jsx)(_v182.Portal, {
                                  containerRef: _v12,
                                  children: (0, _v1.jsx)(_v134.MenuList, {
                                    zIndex: "popover",
                                    minWidth: (0, _v5.rem)(151),
                                    paddingY: (0, _v5.rem)(8),
                                    children: (0, _v1.jsx)(_v133.MenuItem, {
                                      onClick: () => _v42(_v0.clientId),
                                      children: _v4.removeTerm
                                    })
                                  })
                                })]
                              }), (0, _v1.jsx)(_v61.Input, {
                                "aria-label": _v4.replacementsSourceTerm(_v1 + 1),
                                value: _v0.sourceText,
                                placeholder: _v4.replacementsEnterTerm,
                                maxLength: 500,
                                width: "100%",
                                minWidth: 0,
                                height: (0, _v5.rem)(44),
                                border: 0,
                                borderRadius: 0,
                                backgroundColor: "transparent",
                                paddingX: (0, _v5.rem)(12),
                                paddingY: (0, _v5.rem)(12),
                                _focus: {
                                  boxShadow: "none"
                                },
                                _focusVisible: {
                                  boxShadow: "inset 0 0 0 2px var(--vimeo-colors-text-primary)"
                                },
                                isDisabled: _v27 || _v0.isLoading,
                                onChange: _v0 => {
                                  var _v1, _v2;
                                  return _v1 = _v0.clientId, _v2 = _v0.currentTarget.value, void _v18(_v0 => {
                                    let _v1 = _v0.map(_v0 => _v0.clientId === _v1 ? {
                                        ..._v0,
                                        sourceText: _v2
                                      } : _v0),
                                      _v2 = _v1[_v1.length - 1];
                                    return _v2?.sourceText.trim() ? _v41(_v1) : _v1;
                                  });
                                }
                              })]
                            }), _v19.map(_v0 => {
                              let _v1 = _v0.mappings.find(_v0 => _v0.targetLanguage === _v0);
                              return (0, _v1.jsx)(_v62.Td, {
                                height: (0, _v5.rem)(44),
                                padding: "0",
                                children: (0, _v1.jsx)(_v61.Input, {
                                  "aria-label": _v4.replacementsTargetTerm(_v10(_v0), _v1 + 1),
                                  value: _v1?.replacementText ?? "",
                                  placeholder: _v0.sourceText.trim() ? _v4.replacementsEnterTerm : void 0,
                                  maxLength: 500,
                                  width: "100%",
                                  minWidth: 0,
                                  height: (0, _v5.rem)(44),
                                  border: 0,
                                  borderRadius: 0,
                                  backgroundColor: "transparent",
                                  paddingX: (0, _v5.rem)(12),
                                  paddingY: (0, _v5.rem)(12),
                                  _focus: {
                                    boxShadow: "none"
                                  },
                                  _focusVisible: {
                                    boxShadow: "inset 0 0 0 2px var(--vimeo-colors-text-primary)"
                                  },
                                  isDisabled: _v27 || _v0.isLoading || !_v0.sourceText.trim(),
                                  onChange: _v0 => {
                                    var _v1, _v2;
                                    return _v1 = _v0.clientId, _v2 = _v0.currentTarget.value, void _v18(_v0 => _v0.map(_v0 => _v0.clientId === _v1 ? {
                                      ..._v0,
                                      mappings: _v0.mappings.map(_v0 => _v0.targetLanguage === _v0 ? {
                                        ..._v0,
                                        replacementText: _v2
                                      } : _v0)
                                    } : _v0));
                                  }
                                })
                              }, _v0);
                            }), (0, _v1.jsx)(_v62.Td, {
                              width: (0, _v5.rem)(44),
                              height: (0, _v5.rem)(44),
                              padding: (0, _v5.rem)(4)
                            })]
                          }, _v0.clientId))
                        })]
                      })
                    })
                  })
                }), _v0.isLoading && (0, _v1.jsx)(_v3.Flex, {
                  position: "absolute",
                  inset: "0",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  children: (0, _v1.jsx)(_v46.Spinner, {})
                })]
              })]
            }), (0, _v1.jsxs)(_v50.ModalFooter, {
              justifyContent: "space-between",
              alignItems: {
                base: "stretch",
                sm: "center"
              },
              flexDirection: {
                base: "column",
                sm: "row"
              },
              paddingTop: (0, _v5.rem)(16),
              paddingBottom: (0, _v5.rem)(24),
              children: [(0, _v1.jsx)(_v10.Button, {
                variant: "secondary",
                width: {
                  base: "100%",
                  sm: "auto"
                },
                isDisabled: _v27 || _v0.isLoading,
                onClick: () => _v22(!0),
                children: _v4.replacementsAddLanguage
              }), (0, _v1.jsxs)(_v3.Flex, {
                gap: (0, _v5.rem)(8),
                justifyContent: "flex-end",
                children: [(0, _v1.jsx)(_v10.Button, {
                  variant: "tertiary",
                  isDisabled: _v27,
                  onClick: _v5,
                  children: _v4.cancel
                }), (0, _v1.jsx)(_v10.Button, {
                  variant: "primary",
                  isLoading: _v27,
                  isDisabled: _v0.isLoading || !!_v0.error || _v31 || !_v38,
                  onClick: _v43,
                  children: _v4.save
                })]
              })]
            })]
          })]
        }), _v21 && (0, _v1.jsx)(_v185, {
          existingLanguages: [_v1, ..._v19],
          languages: _v3,
          translations: _v4,
          onClose: () => _v22(!1),
          onSelect: _v0 => {
            _v20(_v0 => [..._v0, ..._v0]), _v18(_v0 => _v0.map(_v0 => ({
              ..._v0,
              mappings: [..._v0.mappings, ..._v0.map(_v0 => _v15.find(_v0 => _v0.clientId === _v0.clientId)?.mappings.find(_v0 => _v0.targetLanguage === _v0) ?? {
                targetLanguage: _v0,
                replacementText: ""
              })]
            }))), _v22(!1);
          }
        })]
      });
    },
    _v198 = ({
      initialSourceLanguage: _v0,
      mode: _v1 = "edit",
      ownerUserId: _v2,
      sourceLanguages: _v3,
      supportedLanguages: _v4,
      translations: _v5,
      onClose: _v6,
      onSaved: _v7
    }) => "create" === _v1 ? (0, _v1.jsx)(_v200, {
      initialSourceLanguage: _v0,
      ownerUserId: _v2,
      sourceLanguages: _v3,
      supportedLanguages: _v4,
      translations: _v5,
      onClose: _v6,
      onSaved: _v7
    }) : (0, _v1.jsx)(_v199, {
      initialSourceLanguage: _v0,
      ownerUserId: _v2,
      sourceLanguages: _v3,
      supportedLanguages: _v4,
      translations: _v5,
      onClose: _v6,
      onSaved: _v7
    }),
    _v199 = ({
      initialSourceLanguage: _v0,
      ownerUserId: _v1,
      sourceLanguages: _v2,
      supportedLanguages: _v3,
      translations: _v4,
      onClose: _v5,
      onSaved: _v6
    }) => {
      let [_v7, _v8] = (0, _v2.useState)(_v0),
        _v9 = ((_v0, _v1) => {
          let {
              baseUrl: _v2,
              jwt: _v3,
              xVimeoPage: _v4,
              locale: _v5
            } = (0, _v24.useGctlConfig)(),
            {
              data: _v6,
              error: _v7,
              isLoading: _v8,
              isValidating: _v9,
              mutate: _v10,
              setSize: _v11,
              size: _v12
            } = _v31({
              select: ["replacementText", "sourceLanguage", "sourceText", "targetLanguage", "uri"],
              where: {
                userId: _v0
              },
              query: {
                perPage: 100,
                ruleType: "mapping",
                sourceLanguage: _v1
              }
            }, {
              revalidateOnFocus: !1
            }),
            _v13 = _v6?.[_v6.length - 1],
            _v14 = !!_v13?.paging.next;
          (0, _v2.useEffect)(() => {
            !_v14 || _v9 || _v7 || _v11(_v12 + 1);
          }, [_v7, _v14, _v9, _v11, _v12]);
          let _v15 = (0, _v2.useMemo)(() => _v191(_v6?.flatMap(_v0 => _v0.data) ?? [], _v1), [_v6, _v1]),
            _v16 = (0, _v2.useMemo)(() => ({
              "Content-Type": "application/json",
              Authorization: _v3 ? `jwt ${_v3}` : "",
              "Vimeo-Page": `${_v4}`,
              "Accept-Language": _v5 ?? "en"
            }), [_v3, _v5, _v4]),
            _v17 = (0, _v2.useCallback)(async () => {
              let _v0 = await _v10();
              for (; _v0?.[_v0.length - 1]?.paging.next;) {
                let _v0 = await _v11(_v0.length + 1);
                if (!_v0 || _v0.length <= _v0.length) throw Error("Unable to load every terms translation page");
                _v0 = _v0;
              }
              return _v191(_v0?.flatMap(_v0 => _v0.data) ?? [], _v1);
            }, [_v10, _v11, _v1]),
            _v18 = (0, _v2.useCallback)(async (_v0, _v1) => {
              let _v2 = _v190(_v0, _v1);
              try {
                let _v0 = await Promise.allSettled(_v2.deleted.map(_v0 => _v20({
                    baseUrl: _v2,
                    headers: _v16,
                    where: {
                      userId: _v0,
                      ruleId: _v188(_v0.uri ?? "")
                    }
                  }))),
                  _v1 = _v192(_v0);
                if (_v1.length) throw _v1;
                let _v2 = await Promise.allSettled(_v2.updated.map(_v0 => _v21({
                    baseUrl: _v2,
                    headers: _v16,
                    select: ["uri"],
                    variables: {
                      sourceLanguage: _v0.sourceLanguage,
                      sourceText: _v0.sourceText,
                      targetLanguage: _v0.targetLanguage,
                      replacementText: _v0.replacementText
                    },
                    where: {
                      userId: _v0,
                      ruleId: _v188(_v0.uri ?? "")
                    }
                  }))),
                  _v3 = _v192(_v2);
                if (_v3.length) throw _v3;
                let _v4 = await Promise.allSettled(_v2.created.map(_v0 => _v23({
                    baseUrl: _v2,
                    headers: _v16,
                    select: ["uri"],
                    variables: {
                      ruleType: "mapping",
                      sourceLanguage: _v0.sourceLanguage,
                      sourceText: _v0.sourceText,
                      targetLanguage: _v0.targetLanguage,
                      replacementText: _v0.replacementText
                    },
                    where: {
                      userId: _v0
                    }
                  }))),
                  _v5 = _v192(_v4);
                if (_v5.length) throw _v5;
              } catch (_v0) {
                let _v1;
                try {
                  _v1 = await _v17();
                } catch {}
                throw new _v187(Array.isArray(_v0) ? _v0 : [_v0], _v1);
              }
              return _v17().catch(() => void 0);
            }, [_v2, _v16, _v0, _v17]);
          return {
            rows: _v15.rows,
            targetLanguages: _v15.targetLanguages,
            isLoading: _v8 || _v14 && !_v7,
            error: _v7,
            refresh: _v17,
            save: _v18
          };
        })(_v1, _v7);
      return (0, _v1.jsx)(_v197, {
        editor: _v9,
        sourceLanguage: _v7,
        sourceLanguages: _v2,
        supportedLanguages: _v3,
        translations: _v4,
        onClose: _v5,
        onSaved: _v6,
        onSourceLanguageChange: _v8
      });
    },
    _v200 = ({
      sourceLanguages: _v0,
      supportedLanguages: _v1,
      translations: _v2,
      ..._v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(),
        _v6 = _v183(_v1, _v0);
      return 0 === _v6.length ? (0, _v1.jsxs)(_v47.Modal, {
        isOpen: !0,
        onClose: _v3.onClose,
        children: [(0, _v1.jsx)(_v52.ModalOverlay, {}), (0, _v1.jsxs)(_v49.ModalContent, {
          width: `calc(100vw - ${(0, _v5.rem)(32)})`,
          maxWidth: (0, _v5.rem)(700),
          children: [(0, _v1.jsx)(_v51.ModalHeader, {
            children: _v2.replacementsTitle
          }), (0, _v1.jsx)(_v48.ModalBody, {
            children: (0, _v1.jsx)(_v9.Alert, {
              status: "info",
              children: (0, _v1.jsx)(_v7.AlertDescription, {
                flex: "1",
                children: _v2.replacementsNoLanguagesAvailable
              })
            })
          }), (0, _v1.jsx)(_v50.ModalFooter, {
            children: (0, _v1.jsx)(_v10.Button, {
              variant: "tertiary",
              onClick: _v3.onClose,
              children: _v2.cancel
            })
          })]
        })]
      }) : void 0 === _v4 ? (0, _v1.jsx)(_v186, {
        languageItems: _v6,
        translations: _v2,
        onClose: _v3.onClose,
        onSave: _v5
      }) : (0, _v2.createElement)(_v199, {
        ..._v3,
        key: _v4,
        initialSourceLanguage: _v4,
        sourceLanguages: _v6.map(({
          value: _v0
        }) => _v0),
        supportedLanguages: _v1,
        translations: _v2
      });
    };
  async function _v201({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v19.measureLatency)("getUserAccountDictionaryTranslationRulesMatrix", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/account_dictionary/translation_rules/matrix?${(0, _v18.searchQueryString)(_v3)}&fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  function _v202(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v24.useGctlConfig)();
    return (0, _v28.default)(_v2 ? `/users/${_v2.where.userId}/account_dictionary/translation_rules/matrix${(0, _v27.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v201({
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
  "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(_v202, {
    endpoint: "/users/:userId/account_dictionary/translation_rules/matrix",
    method: "GET"
  }), "true" === _v26.default.env.STORYBOOK && (0, _v27.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v29.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v24.useGctlConfig)(),
      [_v5, _v6] = (0, _v27.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/account_dictionary/translation_rules/matrix${(0, _v27.serializeQuery)(_v0)}`, _v201({
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
  let _v203 = "__new-translations-set__",
    _v204 = ({
      ownerUserId: _v0,
      translations: _v1
    }) => {
      let _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = (0, _v167.useLocale)(),
        [_v8, _v9] = (0, _v2.useState)(1),
        [_v10, _v11] = (0, _v2.useState)("en"),
        [_v12, _v13] = (0, _v2.useState)(""),
        [_v14, _v15] = (0, _v2.useState)(""),
        [_v16, _v17] = (0, _v2.useState)(!1),
        _v18 = (0, _v166.useDebouncedValue)(_v14, 300),
        [_v19, _v20] = (0, _v2.useState)(),
        _v21 = (0, _v165.useGetVideosTranslationsLanguages)({
          query: {
            type: "subtitling",
            perPage: 100
          },
          select: ["code", "localized", "native"]
        }, {
          revalidateOnFocus: !1
        }),
        _v22 = (0, _v2.useMemo)(() => _v21.data?.data ?? [], [_v21.data?.data]),
        _v23 = (0, _v2.useMemo)(() => _v171(_v22.map(({
          code: _v0,
          localized: _v1
        }) => ({
          code: _v0,
          name: _v1
        }))), [_v22]),
        _v24 = (0, _v2.useCallback)(_v0 => _v172(_v0, _v7, _v23), [_v23, _v7]),
        [_v25, _v26] = (0, _v2.useState)(!1),
        {
          rows: _v27,
          sourceLanguages: _v28,
          targetLanguages: _v29,
          total: _v30,
          page: _v31,
          perPage: _v32,
          quota: _v33,
          isInitialLoading: _v34,
          hasData: _v35,
          error: _v36,
          retry: _v37
        } = (_v2 = _v18.trim(), _v3 = _v202(() => ({
          select: ["data.mappings.replacementText", "data.mappings.targetLanguage", "data.sourceLanguage", "data.sourceText", "page", "perPage", "sourceLanguages", "sourceTotal", "targetLanguages", "total"],
          where: {
            userId: _v0
          },
          query: {
            sourceLanguage: _v10,
            page: _v8,
            perPage: 10,
            ...(_v2.length > 0 ? {
              search: _v2
            } : {})
          }
        }), {
          keepPreviousData: !0
        }), _v4 = (0, _v25.useGetUser)(() => ({
          select: ["accountDictionaryQuota.languageReplacementTerms.limit"],
          where: {
            userId: _v0
          }
        })), _v5 = _v4.data?.accountDictionaryQuota?.languageReplacementTerms?.limit, _v6 = (0, _v2.useCallback)(async () => {
          await _v3.mutate(), await _v4.mutate().catch(() => void 0);
        }, [_v3, _v4]), {
          rows: _v3.data?.data ?? [],
          sourceLanguages: _v3.data?.sourceLanguages ?? [],
          targetLanguages: _v3.data?.targetLanguages ?? [],
          total: _v3.data?.total ?? 0,
          page: _v3.data?.page ?? _v8,
          perPage: _v3.data?.perPage ?? 10,
          quota: void 0 === _v5 ? void 0 : {
            used: _v3.data?.sourceTotal ?? 0,
            limit: _v5
          },
          isLoading: _v3.isLoading,
          isInitialLoading: _v3.isLoading && void 0 === _v3.data,
          hasData: void 0 !== _v3.data,
          error: _v3.error,
          retry: _v6
        }),
        _v38 = _v33?.used ?? _v30,
        _v39 = _v33?.limit ?? 0,
        _v40 = _v14.trim().length > 0,
        _v41 = _v28.length > 0,
        _v42 = _v29.length + 1,
        _v43 = _v28.includes(_v10) ? _v28 : [_v10, ..._v28],
        _v44 = [{
          label: _v1.replacementsNewTranslationsSet,
          value: _v203
        }, ..._v43.map(_v0 => ({
          label: _v24(_v0),
          value: _v0
        })).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label, _v7))],
        _v45 = _v28.join("\0");
      if (_v45 !== _v12) {
        _v13(_v45);
        let _v0 = _v28[0];
        _v0 && !_v28.includes(_v10) && (_v11(_v0), _v9(1));
      }
      let _v46 = _v0 => {
          _v15(_v0), _v9(1);
        },
        _v47 = (_v0, _v1) => {
          _v20({
            mode: _v0,
            sourceLanguage: _v1
          });
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v17.TeamSettingsPageCategory, {
          title: _v1.replacementsTitle,
          description: _v1.replacementsDescription,
          descriptionMaxWidth: (0, _v5.rem)(297),
          headingAs: "h2",
          headerActionsShouldWrap: !0,
          headerActions: !_v34 && !(_v36 && !_v35) && (0, _v1.jsxs)(_v3.Flex, {
            gap: (0, _v5.rem)(8),
            flexWrap: "wrap",
            children: [(0, _v1.jsx)(_v10.Button, {
              leftIcon: (0, _v1.jsx)(_v45.Upload, {}),
              variant: "tertiary",
              size: "sm",
              onClick: () => _v26(!0),
              children: _v1.csv
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              size: "sm",
              leftIcon: (0, _v1.jsx)(_v44.Plus, {}),
              isLoading: _v21.isLoading,
              onClick: () => _v47("create", "en"),
              children: _v1.replacementsNewTranslationsSet
            })]
          }),
          children: _v34 ? (0, _v1.jsx)(_v3.Flex, {
            minHeight: (0, _v5.rem)(180),
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v1.jsx)(_v46.Spinner, {})
          }) : _v36 && !_v35 ? (0, _v1.jsxs)(_v9.Alert, {
            status: "error",
            marginTop: (0, _v5.rem)(24),
            alignItems: "center",
            children: [(0, _v1.jsx)(_v7.AlertDescription, {
              flex: "1",
              children: _v1.replacementsLoadingError
            }), (0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              size: "sm",
              onClick: _v37,
              children: _v1.tryAgain
            })]
          }) : 0 !== _v30 || _v40 || _v41 ? (0, _v1.jsxs)(_v37.Box, {
            marginTop: (0, _v5.rem)(24),
            children: [_v16 || _v40 ? (0, _v1.jsxs)(_v3.Flex, {
              gap: (0, _v5.rem)(8),
              alignItems: "center",
              marginBottom: (0, _v5.rem)(24),
              children: [(0, _v1.jsxs)(_v158.InputGroup, {
                size: "sm",
                flex: "1",
                children: [(0, _v1.jsx)(_v159.InputLeftElement, {
                  pointerEvents: "none",
                  children: (0, _v1.jsx)(_v163.SearchMagnifier, {
                    boxSize: 20,
                    color: "text-secondary"
                  })
                }), (0, _v1.jsx)(_v61.Input, {
                  autoFocus: !0,
                  value: _v14,
                  onChange: _v0 => _v46(_v0.currentTarget.value),
                  onBlur: () => {
                    0 === _v14.trim().length && _v17(!1);
                  },
                  placeholder: _v1.replacementsSearchPlaceholder,
                  "aria-label": _v1.replacementsSearchLabel,
                  paddingLeft: (0, _v5.rem)(40)
                })]
              }), (0, _v1.jsx)(_v130.IconButton, {
                "aria-label": _v1.replacementsClearSearch,
                icon: (0, _v1.jsx)(_v161.CloseX, {}),
                size: "sm",
                variant: "tertiary",
                onClick: () => {
                  _v46(""), _v17(!1);
                }
              })]
            }) : (0, _v1.jsxs)(_v3.Flex, {
              gap: (0, _v5.rem)(8),
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginBottom: (0, _v5.rem)(24),
              children: [_v41 ? (0, _v1.jsx)(_v37.Box, {
                width: "fit-content",
                maxWidth: {
                  base: "100%",
                  md: (0, _v5.rem)(280)
                },
                children: (0, _v1.jsx)(_v160.Select, {
                  items: _v44,
                  value: [],
                  placeholder: _v1.replacementsTranslationsSetValue(_v24(_v10)),
                  leftIcon: (0, _v1.jsx)(_v162.CommentList, {}),
                  size: "sm",
                  onValueChange: ({
                    value: _v0
                  }) => {
                    let _v1 = _v0[0];
                    if ("string" == typeof _v1) {
                      if (_v1 === _v203) return void _v47("create", "en");
                      _v11(_v1), _v9(1);
                    }
                  },
                  children: _v0 => _v0.value === _v203 ? (0, _v1.jsx)(_v160.SelectItem, {
                    item: _v0,
                    children: (0, _v1.jsxs)(_v3.Flex, {
                      alignItems: "center",
                      gap: (0, _v5.rem)(8),
                      children: [(0, _v1.jsx)(_v44.Plus, {
                        boxSize: 16
                      }), (0, _v1.jsx)(_v160.SelectItemText, {
                        children: _v0.label
                      })]
                    })
                  }) : (0, _v1.jsx)(_v160.SelectItem, {
                    item: _v0,
                    children: (0, _v1.jsx)(_v160.SelectItemText, {
                      children: _v0.label
                    })
                  })
                })
              }) : (0, _v1.jsx)(_v37.Box, {}), (0, _v1.jsxs)(_v3.Flex, {
                gap: (0, _v5.rem)(8),
                alignItems: "center",
                children: [(0, _v1.jsx)(_v130.IconButton, {
                  "aria-label": _v1.replacementsOpenSearch,
                  icon: (0, _v1.jsx)(_v163.SearchMagnifier, {
                    boxSize: 20
                  }),
                  size: "sm",
                  variant: "tertiary",
                  onClick: () => _v17(!0)
                }), (0, _v1.jsx)(_v10.Button, {
                  variant: "primary",
                  size: "sm",
                  leftIcon: (0, _v1.jsx)(_v44.Plus, {}),
                  onClick: () => _v47(_v41 ? "edit" : "create", _v10),
                  children: _v1.addTerm
                })]
              })]
            }), 0 === _v30 ? (0, _v1.jsxs)(_v3.Flex, {
              minHeight: (0, _v5.rem)(140),
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: _v40 ? "body-md" : "heading-sm",
                color: "text-secondary",
                children: _v40 ? _v1.replacementsNoResults : _v1.replacementsEmptyTitle
              }), !_v40 && (0, _v1.jsx)(_v14.Text, {
                variant: "body-sm",
                color: "text-secondary",
                marginTop: (0, _v5.rem)(4),
                children: _v1.replacementsEmptyDescription
              })]
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v54.TableContainer, {
                borderWidth: "1px",
                borderColor: "stroke",
                borderRadius: "md",
                children: (0, _v1.jsxs)(_v53.Table, {
                  width: "100%",
                  minWidth: (0, _v5.rem)(140 * _v42),
                  sx: {
                    tableLayout: "fixed"
                  },
                  children: [(0, _v1.jsx)(_v57.Thead, {
                    backgroundColor: "fill-component",
                    children: (0, _v1.jsxs)(_v58.Tr, {
                      children: [(0, _v1.jsx)(_v56.Th, {
                        children: _v24(_v10)
                      }), _v29.map(_v0 => (0, _v1.jsx)(_v56.Th, {
                        children: _v24(_v0)
                      }, _v0))]
                    })
                  }), (0, _v1.jsx)(_v55.Tbody, {
                    children: _v27.map(_v0 => {
                      let _v1 = new Map(_v0.mappings.map(_v0 => [_v0.targetLanguage, _v0.replacementText]));
                      return (0, _v1.jsxs)(_v58.Tr, {
                        height: (0, _v5.rem)(60),
                        position: "relative",
                        cursor: "pointer",
                        tabIndex: 0,
                        onClick: () => _v47("edit", _v0.sourceLanguage),
                        onKeyDown: _v0 => {
                          var _v1, _v2;
                          return _v1 = _v0, _v2 = _v0.sourceLanguage, void (("Enter" === _v1.key || " " === _v1.key) && (_v1.preventDefault(), _v47("edit", _v2)));
                        },
                        sx: {
                          "&:hover .edit-row, &:focus-within .edit-row, &:focus .edit-row": {
                            opacity: 1
                          }
                        },
                        children: [(0, _v1.jsxs)(_v62.Td, {
                          fontFamily: "heading",
                          children: [_v0.sourceText, (0, _v1.jsx)(_v10.Button, {
                            className: "edit-row",
                            position: "absolute",
                            right: (0, _v5.rem)(16),
                            top: "50%",
                            transform: "translateY(-50%)",
                            opacity: 0,
                            _focusVisible: {
                              opacity: 1
                            },
                            variant: "secondary",
                            size: "sm",
                            leftIcon: (0, _v1.jsx)(_v43.EditPencil, {}),
                            "aria-label": _v1.replacementsEditTerm(_v0.sourceText),
                            onClick: _v0 => {
                              _v0.stopPropagation(), _v47("edit", _v0.sourceLanguage);
                            },
                            children: _v1.edit
                          })]
                        }), _v29.map(_v0 => (0, _v1.jsx)(_v62.Td, {
                          color: "text-secondary",
                          children: _v1.get(_v0) ?? "-"
                        }, _v0))]
                      }, `${_v0.sourceLanguage}:${_v0.sourceText}`);
                    })
                  })]
                })
              }), _v30 > _v32 && (0, _v1.jsx)(_v3.Flex, {
                justifyContent: "center",
                marginTop: (0, _v5.rem)(24),
                children: (0, _v1.jsx)(_v38.Pagination, {
                  size: "sm",
                  count: _v30,
                  pageSize: _v32,
                  page: _v31,
                  onPageChange: ({
                    page: _v0
                  }) => _v9(_v0)
                })
              })]
            }), _v39 > 0 && (0, _v1.jsxs)(_v3.Flex, {
              marginTop: (0, _v5.rem)(24),
              marginX: (0, _v5.rem)(-16),
              paddingX: (0, _v5.rem)(24),
              paddingY: (0, _v5.rem)(16),
              gap: (0, _v5.rem)(16),
              alignItems: "center",
              backgroundColor: "fill-component",
              borderRadius: "sm",
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "heading-xs",
                whiteSpace: "nowrap",
                children: _v1.replacementsCount(_v38, _v39)
              }), (0, _v1.jsx)(_v39.Progress, {
                flex: "1",
                width: "auto",
                minWidth: 0,
                value: Math.min(_v38 / _v39 * 100, 100),
                size: "xs"
              }), (0, _v1.jsxs)(_v14.Text, {
                variant: "body-sm",
                whiteSpace: "nowrap",
                children: [_v1.needMorePrompt, " ", (0, _v1.jsx)(_v4.Link, {
                  href: "/enterprise/contact-us",
                  color: "text-primary",
                  textDecoration: "underline",
                  children: _v1.contactSales
                })]
              })]
            })]
          }) : (0, _v1.jsxs)(_v3.Flex, {
            minHeight: (0, _v5.rem)(140),
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            children: [(0, _v1.jsx)(_v164.Translate, {
              boxSize: 32,
              color: "text-secondary",
              marginBottom: (0, _v5.rem)(16)
            }), (0, _v1.jsx)(_v14.Text, {
              variant: "heading-sm",
              children: _v1.replacementsEmptyTitle
            }), (0, _v1.jsx)(_v14.Text, {
              variant: "body-sm",
              color: "text-secondary",
              marginTop: (0, _v5.rem)(4),
              children: _v1.replacementsEmptyDescription
            })]
          })
        }), _v19 && (0, _v1.jsx)(_v198, {
          initialSourceLanguage: _v19.sourceLanguage,
          mode: _v19.mode,
          ownerUserId: _v0,
          sourceLanguages: _v28,
          supportedLanguages: _v22,
          translations: _v1,
          onClose: () => _v20(void 0),
          onSaved: async () => {
            _v9(1), await _v37();
          }
        }), _v25 && (0, _v1.jsx)(_v181, {
          ownerUserId: _v0,
          translations: _v1,
          hasExistingEntries: _v41,
          onClose: () => _v26(!1),
          onImported: async () => {
            _v9(1), await _v37();
          }
        })]
      });
    };
  var _v205 = _v0.i(0);
  let _v206 = {
      SOURCE_LANGUAGE: "source language",
      SOURCE_TERM: "source term",
      TARGET_LANGUAGE: "target language",
      TARGET_TERM: "target term"
    },
    _v207 = ({
      ownerUserId: _v0
    }) => {
      let [_v1, _v2] = (0, _v2.useState)(!1),
        _v3 = (0, _v2.useMemo)(() => ({
          title: (0, _v205.translate)({
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
          description: (0, _v205.translate)({
            singular: "Define your brand names, product terms, and acronyms once, and they'll be applied consistently across all AI-generated content.",
            dictionary: {
              es: {
                singular: "Define los nombres de tus marcas, los términos de producto y los acrónimos una sola vez, y se aplicarán de manera consistente en todo el contenido generado por IA."
              },
              "de-DE": {
                singular: "Definieren Sie Ihre Markennamen, Produktbegriffe und Akronyme einmal, und sie werden konsequent in allen KI-generierten Inhalten angewendet."
              },
              "fr-FR": {
                singular: "Définissez une fois les noms de marque, les termes de produit et les acronymes, et ils seront appliqués de manière cohérente dans l'ensemble du contenu généré par l'IA."
              },
              "ja-JP": {
                singular: "ブランド名、製品用語、略語を一度定義しておくと、AI生成コンテンツ全体で一貫して適用されます."
              },
              "ko-KR": {
                singular: "브랜드명, 제품 용어 및 약어를 한 번 정의하면 모든 AI 생성 콘텐츠에 일관되게 적용됩니다."
              },
              "pt-BR": {
                singular: "Defina seus nomes de marca, termos de produto e siglas uma vez, e eles serão aplicados de forma consistente em todo o conteúdo gerado por IA."
              },
              "zh-CN": {
                singular: "只需定义一次您的品牌名称、产品术语和首字母缩略词，它们就会在所有 AI 生成的内容中保持一致地应用。"
              }
            }
          }),
          limitsSummary: (0, _v205.translate)({
            singular: "Some features have terms limits.",
            dictionary: {
              es: {
                singular: "Algunas funciones tienen límites en los términos."
              },
              "de-DE": {
                singular: "Einige Funktionen haben Begrenzungen für Begriffe."
              },
              "fr-FR": {
                singular: "Certaines fonctionnalités ont des limites de termes."
              },
              "ja-JP": {
                singular: "一部の機能には用語の制限があります。"
              },
              "ko-KR": {
                singular: "일부 기능에는 용어 제한이 있습니다."
              },
              "pt-BR": {
                singular: "Alguns recursos têm limites de termos."
              },
              "zh-CN": {
                singular: "某些功能有术语数量限制。"
              }
            }
          }),
          learnMore: (0, _v205.translate)({
            singular: "Learn more",
            dictionary: {
              es: {
                singular: "Ver más"
              },
              "de-DE": {
                singular: "Mehr dazu"
              },
              "fr-FR": {
                singular: "En savoir plus "
              },
              "ja-JP": {
                singular: "詳細を見る"
              },
              "ko-KR": {
                singular: "자세히 보기"
              },
              "pt-BR": {
                singular: "Saiba mais"
              },
              "zh-CN": {
                singular: "了解更多"
              }
            }
          }),
          notice: (0, _v205.translate)({
            singular: "Dictionary support for dubbing is coming soon — for now, your terms apply to AI Transcription and Subtitle Translations.",
            dictionary: {
              es: {
                singular: "El soporte de diccionario para el doblaje llegará pronto — por ahora, tus términos se aplican a la transcripción por IA y a las traducciones de subtítulos."
              },
              "de-DE": {
                singular: "Wörterbuchunterstützung für die Synchronisation kommt bald — vorerst gelten Ihre Begriffe für KI-Transkription und Untertitelübersetzungen."
              },
              "fr-FR": {
                singular: "La prise en charge des dictionnaires pour le doublage arrive bientôt — pour l'instant, vos termes s'appliquent à la Transcription par IA et aux Traductions de sous-titres."
              },
              "ja-JP": {
                singular: "吹き替え向けの辞書サポートは近日対応予定です — 現時点では、用語はAI文字起こしおよび字幕翻訳に適用されます。"
              },
              "ko-KR": {
                singular: "더빙용 사전 지원은 곧 제공될 예정입니다 — 현재로서는 귀하의 용어가 AI 전사 및 자막 번역에 적용됩니다."
              },
              "pt-BR": {
                singular: "Suporte a dicionário para dublagem será disponibilizado em breve — por enquanto, seus termos se aplicam à Transcrição por IA e às Traduções de Legendas."
              },
              "zh-CN": {
                singular: "配音的词典支持即将推出 — 目前，您的术语适用于 AI 转写和字幕翻译。"
              }
            }
          }),
          glossaryTitle: (0, _v205.translate)({
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
          glossaryDescription: (0, _v205.translate)({
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
          glossaryCount: (_v0, _v1) => (0, _v205.translate)({
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
          glossaryEmptyTitle: (0, _v205.translate)({
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
          glossaryEmptyDescription: (0, _v205.translate)({
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
          glossaryTerm: (0, _v205.translate)({
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
          glossaryEditorDescription: (0, _v205.translate)({
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
          glossaryDownloadTemplate: (0, _v205.translate)({
            singular: "Download template",
            dictionary: {
              es: {
                singular: "Descargar plantilla"
              },
              "de-DE": {
                singular: "Vorlage herunterladen"
              },
              "fr-FR": {
                singular: "Télécharger le modèle"
              },
              "ja-JP": {
                singular: "テンプレートをダウンロード"
              },
              "ko-KR": {
                singular: "템플릿 다운로드"
              },
              "pt-BR": {
                singular: "Baixar modelo"
              },
              "zh-CN": {
                singular: "下载模板"
              }
            }
          }),
          glossaryTermNumber: _v0 => (0, _v205.translate)({
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
          moveGlossaryTermNumber: _v0 => (0, _v205.translate)({
            singular: "Move glossary term {NUMBER}",
            replacements: {
              NUMBER: _v0
            },
            dictionary: {
              es: {
                singular: "Mover término del glosario {NUMBER}"
              },
              "de-DE": {
                singular: "Glossarbegriff {NUMBER} verschieben"
              },
              "fr-FR": {
                singular: "Déplacer le terme du glossaire {NUMBER}"
              },
              "ja-JP": {
                singular: "用語集の用語 {NUMBER} を移動"
              },
              "ko-KR": {
                singular: "용어집 항목 {NUMBER} 이동"
              },
              "pt-BR": {
                singular: "Mover termo do glossário {NUMBER}"
              },
              "zh-CN": {
                singular: "移动词汇表术语 {NUMBER}"
              }
            }
          }),
          glossaryDragInstructions: (0, _v205.translate)({
            singular: "To move a glossary term, press Space. Use the arrow keys to choose a new position, then press Space again to drop.",
            dictionary: {
              es: {
                singular: "Para mover un término del glosario, pulse Space. Use las teclas de flecha para elegir una nueva posición, luego pulse Space de nuevo para soltar."
              },
              "de-DE": {
                singular: "Um einen Glossarbegriff zu verschieben, drücken Sie die Leertaste. Verwenden Sie die Pfeiltasten, um eine neue Position auszuwählen, und drücken Sie dann erneut die Leertaste, um abzulegen."
              },
              "fr-FR": {
                singular: "Pour déplacer un terme du glossaire, appuyez sur Espace. Utilisez les touches fléchées pour choisir une nouvelle position, puis appuyez de nouveau sur Espace pour le déposer."
              },
              "ja-JP": {
                singular: "用語集の用語を移動するには Space キーを押します。矢印キーで新しい位置を選び、もう一度 Space キーを押して配置してください。"
              },
              "ko-KR": {
                singular: "용어집 항목을 이동하려면 Space 키를 누르세요. 화살표 키로 새 위치를 선택한 다음 Space 키를 다시 눌러 놓으세요."
              },
              "pt-BR": {
                singular: "Para mover um termo do glossário, pressione a barra de espaço. Use as teclas de seta para escolher uma nova posição e pressione a barra de espaço novamente para soltar."
              },
              "zh-CN": {
                singular: "要移动词汇表术语，请按空格键。使用方向键选择新位置，然后再次按空格键放下。"
              }
            }
          }),
          glossaryTermPickedUp: _v0 => (0, _v205.translate)({
            singular: "Picked up glossary term {NUMBER}.",
            replacements: {
              NUMBER: _v0
            },
            dictionary: {
              es: {
                singular: "Se recogió el término del glosario {NUMBER}."
              },
              "de-DE": {
                singular: "Glossarbegriff {NUMBER} aufgenommen."
              },
              "fr-FR": {
                singular: "Le terme du glossaire {NUMBER} a été saisi."
              },
              "ja-JP": {
                singular: "用語集の用語 {NUMBER} を選択しました。"
              },
              "ko-KR": {
                singular: "용어집 항목 {NUMBER}을(를) 집었습니다."
              },
              "pt-BR": {
                singular: "Iniciado o arraste do termo do glossário {NUMBER}."
              },
              "zh-CN": {
                singular: "已拿起词汇表术语 {NUMBER}。"
              }
            }
          }),
          glossaryTermMoved: (_v0, _v1) => (0, _v205.translate)({
            singular: "Glossary term {FROM} moved to position {TO}.",
            replacements: {
              FROM: _v0,
              TO: _v1
            },
            dictionary: {
              es: {
                singular: "El término del glosario {FROM} se movió a la posición {TO}."
              },
              "de-DE": {
                singular: "Glossarbegriff {FROM} wurde an Position {TO} verschoben."
              },
              "fr-FR": {
                singular: "Le terme du glossaire {FROM} a été déplacé à la position {TO}."
              },
              "ja-JP": {
                singular: "用語集の用語 {FROM} が位置 {TO} に移動しました。"
              },
              "ko-KR": {
                singular: "용어집 항목 {FROM}이(가) 위치 {TO}로 이동되었습니다."
              },
              "pt-BR": {
                singular: "O termo do glossário {FROM} foi movido para a posição {TO}."
              },
              "zh-CN": {
                singular: "词汇表术语 {FROM} 已移动到位置 {TO}。"
              }
            }
          }),
          glossaryTermDropped: (_v0, _v1) => (0, _v205.translate)({
            singular: "Glossary term {FROM} was dropped at position {TO}.",
            replacements: {
              FROM: _v0,
              TO: _v1
            },
            dictionary: {
              es: {
                singular: "El término del glosario {FROM} se soltó en la posición {TO}."
              },
              "de-DE": {
                singular: "Glossarbegriff {FROM} wurde an Position {TO} abgelegt."
              },
              "fr-FR": {
                singular: "Le terme du glossaire {FROM} a été déposé à la position {TO}."
              },
              "ja-JP": {
                singular: "用語集の用語 {FROM} が位置 {TO} に配置されました。"
              },
              "ko-KR": {
                singular: "용어집 항목 {FROM}이(가) 위치 {TO}에 놓였습니다."
              },
              "pt-BR": {
                singular: "O termo do glossário {FROM} foi solto na posição {TO}."
              },
              "zh-CN": {
                singular: "词汇表术语 {FROM} 已放置在位置 {TO}。"
              }
            }
          }),
          glossaryTermMoveCanceled: _v0 => (0, _v205.translate)({
            singular: "Moving glossary term {NUMBER} was canceled.",
            replacements: {
              NUMBER: _v0
            },
            dictionary: {
              es: {
                singular: "Se canceló el movimiento del término del glosario {NUMBER}."
              },
              "de-DE": {
                singular: "Das Verschieben des Glossarbegriffs {NUMBER} wurde abgebrochen."
              },
              "fr-FR": {
                singular: "Le déplacement du terme du glossaire {NUMBER} a été annulé."
              },
              "ja-JP": {
                singular: "用語集の用語 {NUMBER} の移動はキャンセルされました。"
              },
              "ko-KR": {
                singular: "용어집 항목 {NUMBER} 이동이 취소되었습니다."
              },
              "pt-BR": {
                singular: "A movimentação do termo do glossário {NUMBER} foi cancelada."
              },
              "zh-CN": {
                singular: "移动词汇表术语 {NUMBER} 已被取消。"
              }
            }
          }),
          glossaryOrderConflict: (0, _v205.translate)({
            singular: "The glossary changed while you were editing. Review the latest terms and try again.",
            dictionary: {
              es: {
                singular: "El glosario cambió mientras estabas editando. Revisa los términos más recientes y vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Das Glossar hat sich geändert, während Sie es bearbeitet haben. Überprüfen Sie die aktuellen Begriffe und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Le glossaire a été modifié pendant que vous étiez en train d’éditer. Consultez les derniers termes et réessayez."
              },
              "ja-JP": {
                singular: "編集中に用語集が変更されました。最新の用語を確認して、もう一度お試しください。"
              },
              "ko-KR": {
                singular: "편집하는 동안 용어집이 변경되었습니다. 최신 용어를 확인한 후 다시 시도하세요."
              },
              "pt-BR": {
                singular: "O glossário mudou enquanto você editava. Revise os termos mais recentes e tente novamente."
              },
              "zh-CN": {
                singular: "在您编辑时词汇表已更改。请查看最新术语并重试。"
              }
            }
          }),
          glossaryLoadingError: (0, _v205.translate)({
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
          glossaryCsvTitle: (0, _v205.translate)({
            singular: "Import CSV",
            dictionary: {
              es: {
                singular: "Importar CSV"
              },
              "de-DE": {
                singular: "CSV importieren"
              },
              "fr-FR": {
                singular: "Importer un fichier CSV"
              },
              "ja-JP": {
                singular: "CSVをインポート"
              },
              "ko-KR": {
                singular: "CSV 가져오기"
              },
              "pt-BR": {
                singular: "Importar CSV"
              },
              "zh-CN": {
                singular: "导入 CSV"
              }
            }
          }),
          glossaryCsvDescription: (0, _v205.translate)({
            singular: "Upload a CSV with a single source term column.",
            dictionary: {
              es: {
                singular: "Suba un CSV con una sola columna de términos fuente."
              },
              "de-DE": {
                singular: "Laden Sie eine CSV mit genau einer Spalte für Quellbegriffe hoch."
              },
              "fr-FR": {
                singular: "Téléversez un CSV contenant une seule colonne de termes source."
              },
              "ja-JP": {
                singular: "ソース用語の列が1つだけあるCSVをアップロードしてください。"
              },
              "ko-KR": {
                singular: "단일 원본 용어 열이 포함된 CSV를 업로드하세요."
              },
              "pt-BR": {
                singular: "Envie um CSV com uma única coluna de termo de origem."
              },
              "zh-CN": {
                singular: "上传仅包含单个源术语列的 CSV。"
              }
            }
          }),
          glossaryCsvInstructions: (0, _v205.translate)({
            singular: "Upload a CSV with a single source term column.",
            dictionary: {
              es: {
                singular: "Suba un CSV con una sola columna de términos fuente."
              },
              "de-DE": {
                singular: "Laden Sie eine CSV mit genau einer Spalte für Quellbegriffe hoch."
              },
              "fr-FR": {
                singular: "Téléversez un CSV contenant une seule colonne de termes source."
              },
              "ja-JP": {
                singular: "ソース用語の列が1つだけあるCSVをアップロードしてください。"
              },
              "ko-KR": {
                singular: "단일 원본 용어 열이 포함된 CSV를 업로드하세요."
              },
              "pt-BR": {
                singular: "Envie um CSV com uma única coluna de termo de origem."
              },
              "zh-CN": {
                singular: "上传仅包含单个源术语列的 CSV。"
              }
            }
          }),
          glossaryCsvReplaceNotice: (0, _v205.translate)({
            singular: "Uploading a CSV replaces all existing glossary terms.",
            dictionary: {
              es: {
                singular: "Subir un CSV reemplaza todos los términos existentes del glosario."
              },
              "de-DE": {
                singular: "Das Hochladen einer CSV ersetzt alle vorhandenen Glossarbegriffe."
              },
              "fr-FR": {
                singular: "Le téléversement d'un fichier CSV remplace tous les termes existants du glossaire."
              },
              "ja-JP": {
                singular: "CSVをアップロードすると既存のすべての用語集の用語が置き換わります。"
              },
              "ko-KR": {
                singular: "CSV 업로드 시 기존의 모든 용어집 항목이 대체됩니다."
              },
              "pt-BR": {
                singular: "O envio de um CSV substitui todos os termos do glossário existentes."
              },
              "zh-CN": {
                singular: "上传 CSV 会替换所有现有的词汇表术语。"
              }
            }
          }),
          glossaryCsvReplaceConfirmation: (0, _v205.translate)({
            singular: "Saving will replace all existing glossary terms with the terms in this CSV.",
            dictionary: {
              es: {
                singular: "Al guardar se reemplazarán todos los términos existentes del glosario por los términos de este CSV."
              },
              "de-DE": {
                singular: "Durch das Speichern werden alle vorhandenen Glossarbegriffe durch die Begriffe in dieser CSV ersetzt."
              },
              "fr-FR": {
                singular: "L'enregistrement remplacera tous les termes du glossaire existants par les termes de ce fichier CSV."
              },
              "ja-JP": {
                singular: "保存すると、このCSVにある用語で既存の用語集の項目がすべて置き換えられます。"
              },
              "ko-KR": {
                singular: "저장하면 이 CSV에 있는 용어로 기존 용어집의 모든 항목이 대체됩니다."
              },
              "pt-BR": {
                singular: "Ao salvar, todos os termos do glossário existentes serão substituídos pelos termos deste CSV."
              },
              "zh-CN": {
                singular: "保存将用此 CSV 中的术语替换所有现有的词汇表条目."
              }
            }
          }),
          glossaryCsvTemplatePrompt: _v0 => (0, _v205.translate)({
            singular: "{LINK}Download the template{/LINK} file to start.",
            replacements: {
              LINK: _v0
            },
            dictionary: {
              es: {
                singular: "{LINK}Descargue la plantilla{/LINK} para comenzar."
              },
              "de-DE": {
                singular: "{LINK}Laden Sie die Vorlagendatei herunter{/LINK}, um zu beginnen."
              },
              "fr-FR": {
                singular: "{LINK}Téléchargez le fichier modèle{/LINK} pour commencer."
              },
              "ja-JP": {
                singular: "{LINK}テンプレートをダウンロード{/LINK}して開始してください。"
              },
              "ko-KR": {
                singular: "{LINK}템플릿 파일을 다운로드{/LINK}하여 시작하세요."
              },
              "pt-BR": {
                singular: "{LINK}Baixe o arquivo de modelo{/LINK} para começar."
              },
              "zh-CN": {
                singular: "{LINK}下载模板{/LINK} 文件即可开始。"
              }
            }
          }),
          glossaryCsvUploadFile: (0, _v205.translate)({
            singular: "Upload file",
            dictionary: {
              es: {
                singular: "Subir archivo"
              },
              "de-DE": {
                singular: "Datei hochladen"
              },
              "fr-FR": {
                singular: "Mettre le fichier en ligne"
              },
              "ja-JP": {
                singular: "ファイルをアップロードする"
              },
              "ko-KR": {
                singular: "파일 업로드"
              },
              "pt-BR": {
                singular: "Carregar arquivo"
              },
              "zh-CN": {
                singular: "上传文件"
              }
            }
          }),
          glossaryCsvDropFile: (0, _v205.translate)({
            singular: "Drop file here or click to browse file.",
            dictionary: {
              es: {
                singular: "Suelte el archivo aquí o haga clic para examinar el archivo."
              },
              "de-DE": {
                singular: "Datei hier ablegen oder klicken, um eine Datei auszuwählen."
              },
              "fr-FR": {
                singular: "Déposez le fichier ici ou cliquez pour parcourir le fichier."
              },
              "ja-JP": {
                singular: "ファイルをここにドロップするか、クリックして参照してください。"
              },
              "ko-KR": {
                singular: "파일을 여기에 놓거나 클릭하여 찾아보세요."
              },
              "pt-BR": {
                singular: "Solte o arquivo aqui ou clique para procurar o arquivo."
              },
              "zh-CN": {
                singular: "将文件拖到此处或点击以浏览文件。"
              }
            }
          }),
          csvReviewTitle: (0, _v205.translate)({
            singular: "Review",
            dictionary: {
              es: {
                singular: "Revisar"
              },
              "de-DE": {
                singular: "Überprüfung"
              },
              "fr-FR": {
                singular: "Révision"
              },
              "ja-JP": {
                singular: "レビュー"
              },
              "ko-KR": {
                singular: "리뷰"
              },
              "pt-BR": {
                singular: "Revisar"
              },
              "zh-CN": {
                singular: "审阅"
              }
            }
          }),
          csvReviewSummary: (_v0, _v1) => (0, _v205.translate)({
            count: _v1,
            singular: "{STRONG}{COUNT} term{/STRONG} was found. Confirm the terms look correct, or adjust them now.",
            plural: "{STRONG}{COUNT} terms{/STRONG} were found. Confirm the terms look correct, or adjust them now.",
            replacements: {
              STRONG: _v0,
              COUNT: _v1
            },
            dictionary: {
              es: {
                singular: "Se encontró {STRONG}{COUNT} término{/STRONG}. Confirme que el término esté correcto o ajústelo ahora.",
                plural: "Se encontraron {STRONG}{COUNT} términos{/STRONG}. Confirme que los términos estén correctos o ajústelos ahora."
              },
              "de-DE": {
                singular: "{STRONG}{COUNT} Begriff{/STRONG} wurde gefunden. Bestätigen Sie, dass der Begriff korrekt ist, oder passen Sie ihn jetzt an.",
                plural: "{STRONG}{COUNT} Begriffe{/STRONG} wurden gefunden. Bestätigen Sie, dass die Begriffe korrekt sind, oder passen Sie sie jetzt an."
              },
              "fr-FR": {
                singular: "{STRONG}{COUNT} terme{/STRONG} a été trouvé. Confirmez que le terme est correct, ou modifiez-le maintenant.",
                plural: "{STRONG}{COUNT} termes{/STRONG} ont été trouvés. Confirmez que les termes sont corrects, ou modifiez-les maintenant."
              },
              "ja-JP": {
                singular: "{STRONG}{COUNT}件の用語{/STRONG}が見つかりました。 確認して用語が正しいことを確認するか、今すぐ調整してください。",
                plural: "{STRONG}{COUNT}件の用語{/STRONG}が見つかりました。 確認して用語が正しいことを確認するか、今すぐ調整してください。"
              },
              "ko-KR": {
                singular: "{STRONG}{COUNT}개의 용어{/STRONG}가 발견되었습니다. 용어가 올바른지 확인하거나 지금 조정하세요.",
                plural: "{STRONG}{COUNT}개의 용어{/STRONG}가 발견되었습니다. 용어가 올바른지 확인하거나 지금 조정하세요."
              },
              "pt-BR": {
                singular: "{STRONG}{COUNT} termo{/STRONG} foi encontrado. Confirme se o termo parece correto, ou ajuste-o agora.",
                plural: "{STRONG}{COUNT} termos{/STRONG} foram encontrados. Confirme se os termos parecem corretos, ou ajuste-os agora."
              },
              "zh-CN": {
                singular: "{STRONG}{COUNT} 个术语{/STRONG} 已找到. 请确认这些术语是否正确, 或立即进行调整.",
                plural: "{STRONG}{COUNT} 个术语{/STRONG} 已找到. 请确认这些术语是否正确, 或立即进行调整."
              }
            }
          }),
          csvUploading: (0, _v205.translate)({
            singular: "Uploading...",
            dictionary: {
              es: {
                singular: "Subiendo..."
              },
              "de-DE": {
                singular: "Hochladevorgang läuft ..."
              },
              "fr-FR": {
                singular: "Transfert..."
              },
              "ja-JP": {
                singular: "アップロード中..."
              },
              "ko-KR": {
                singular: "업로드 중..."
              },
              "pt-BR": {
                singular: "Carregando..."
              },
              "zh-CN": {
                singular: "正在上传..."
              }
            }
          }),
          csvUploadingHint: (0, _v205.translate)({
            singular: "Big files might take up to a minute.",
            dictionary: {
              es: {
                singular: "Los archivos grandes pueden tardar hasta un minuto."
              },
              "de-DE": {
                singular: "Bei großen Dateien kann es bis zu einer Minute dauern."
              },
              "fr-FR": {
                singular: "Les gros fichiers peuvent prendre jusqu'à une minute."
              },
              "ja-JP": {
                singular: "大きなファイルは最大で1分かかる場合があります。"
              },
              "ko-KR": {
                singular: "큰 파일은 최대 1분 정도 걸릴 수 있습니다."
              },
              "pt-BR": {
                singular: "Arquivos grandes podem demorar até um minuto."
              },
              "zh-CN": {
                singular: "大文件可能需要最多一分钟."
              }
            }
          }),
          glossaryCsvUnsupportedFile: (0, _v205.translate)({
            singular: "Upload a CSV file.",
            dictionary: {
              es: {
                singular: "Suba un archivo CSV."
              },
              "de-DE": {
                singular: "Laden Sie eine CSV-Datei hoch."
              },
              "fr-FR": {
                singular: "Téléversez un fichier CSV."
              },
              "ja-JP": {
                singular: "CSVファイルをアップロードしてください。"
              },
              "ko-KR": {
                singular: "CSV 파일을 업로드하세요."
              },
              "pt-BR": {
                singular: "Envie um arquivo CSV."
              },
              "zh-CN": {
                singular: "上传 CSV 文件。"
              }
            }
          }),
          glossaryCsvFileTooLarge: (0, _v205.translate)({
            singular: "The CSV file is too large. Upload a file under 5 MB.",
            dictionary: {
              es: {
                singular: "El archivo CSV es demasiado grande. Suba un archivo de menos de 5 MB."
              },
              "de-DE": {
                singular: "Die CSV-Datei ist zu groß. Laden Sie eine Datei unter 5 MB hoch."
              },
              "fr-FR": {
                singular: "Le fichier CSV est trop volumineux. Téléversez un fichier de moins de 5 Mo."
              },
              "ja-JP": {
                singular: "CSVファイルが大きすぎます。5 MB未満のファイルをアップロードしてください。"
              },
              "ko-KR": {
                singular: "CSV 파일이 너무 큽니다. 5 MB 미만의 파일을 업로드하세요."
              },
              "pt-BR": {
                singular: "O arquivo CSV é muito grande. Envie um arquivo com menos de 5 MB."
              },
              "zh-CN": {
                singular: "CSV 文件过大。请上传小于 5 MB 的文件。"
              }
            }
          }),
          glossaryCsvInvalidFile: (0, _v205.translate)({
            singular: "The CSV file is invalid.",
            dictionary: {
              es: {
                singular: "El archivo CSV no es válido."
              },
              "de-DE": {
                singular: "Die CSV-Datei ist ungültig."
              },
              "fr-FR": {
                singular: "Le fichier CSV est invalide."
              },
              "ja-JP": {
                singular: "CSVファイルが無効です。"
              },
              "ko-KR": {
                singular: "CSV 파일이 유효하지 않습니다."
              },
              "pt-BR": {
                singular: "O arquivo CSV é inválido."
              },
              "zh-CN": {
                singular: "CSV 文件无效。"
              }
            }
          }),
          glossaryCsvInvalidHeader: (0, _v205.translate)({
            singular: "The CSV must contain a single source term column.",
            dictionary: {
              es: {
                singular: "El CSV debe contener una sola columna de términos fuente."
              },
              "de-DE": {
                singular: "Die CSV muss genau eine Spalte mit Quellbegriffen enthalten."
              },
              "fr-FR": {
                singular: "Le CSV doit contenir une seule colonne de termes source."
              },
              "ja-JP": {
                singular: "CSVにはソース用語の列を1つだけ含める必要があります。"
              },
              "ko-KR": {
                singular: "CSV는 단일 원본 용어 열만 포함해야 합니다."
              },
              "pt-BR": {
                singular: "O CSV deve conter uma única coluna de termo de origem."
              },
              "zh-CN": {
                singular: "CSV 必须包含单个源术语列。"
              }
            }
          }),
          glossaryCsvTooManyRows: (0, _v205.translate)({
            singular: "The CSV can contain at most 1,000 terms.",
            dictionary: {
              es: {
                singular: "El CSV puede contener como máximo 1,000 términos."
              },
              "de-DE": {
                singular: "Die CSV darf höchstens 1.000 Begriffe enthalten."
              },
              "fr-FR": {
                singular: "Le CSV peut contenir au maximum 1 000 termes."
              },
              "ja-JP": {
                singular: "CSVには最大1,000件の用語を含めることができます。"
              },
              "ko-KR": {
                singular: "CSV에는 최대 1,000개의 용어만 포함할 수 있습니다."
              },
              "pt-BR": {
                singular: "O CSV pode conter no máximo 1,000 termos."
              },
              "zh-CN": {
                singular: "CSV 最多可包含 1,000 个术语。"
              }
            }
          }),
          glossaryCsvSourceTermRequired: (0, _v205.translate)({
            singular: "A source term is required.",
            dictionary: {
              es: {
                singular: "Se requiere un término fuente."
              },
              "de-DE": {
                singular: "Ein Quellbegriff ist erforderlich."
              },
              "fr-FR": {
                singular: "Un terme source est requis."
              },
              "ja-JP": {
                singular: "ソース用語は必須です。"
              },
              "ko-KR": {
                singular: "원본 용어는 필수입니다."
              },
              "pt-BR": {
                singular: "Um termo de origem é obrigatório."
              },
              "zh-CN": {
                singular: "必须提供源术语。"
              }
            }
          }),
          glossaryCsvSingleColumnRequired: (0, _v205.translate)({
            singular: "Each row must contain one source term.",
            dictionary: {
              es: {
                singular: "Cada fila debe contener un término fuente."
              },
              "de-DE": {
                singular: "Jede Zeile muss genau einen Quellbegriff enthalten."
              },
              "fr-FR": {
                singular: "Chaque ligne doit contenir un terme source."
              },
              "ja-JP": {
                singular: "各行には1つのソース用語が必要です。"
              },
              "ko-KR": {
                singular: "각 행에는 하나의 원본 용어가 포함되어야 합니다."
              },
              "pt-BR": {
                singular: "Cada linha deve conter um termo de origem."
              },
              "zh-CN": {
                singular: "每行必须包含一个源术语。"
              }
            }
          }),
          glossaryCsvImportError: (0, _v205.translate)({
            singular: "The CSV could not be imported.",
            dictionary: {
              es: {
                singular: "No se pudo importar el CSV."
              },
              "de-DE": {
                singular: "Die CSV konnte nicht importiert werden."
              },
              "fr-FR": {
                singular: "Le CSV n'a pas pu être importé."
              },
              "ja-JP": {
                singular: "CSVをインポートできませんでした。"
              },
              "ko-KR": {
                singular: "CSV를 가져올 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível importar o CSV."
              },
              "zh-CN": {
                singular: "无法导入 CSV。"
              }
            }
          }),
          glossaryCsvImported: _v0 => 0 === _v0 ? (0, _v205.translate)({
            singular: "No terms imported",
            dictionary: {
              es: {
                singular: "No se importaron términos"
              },
              "de-DE": {
                singular: "Es wurden keine Begriffe importiert."
              },
              "fr-FR": {
                singular: "Aucun terme importé"
              },
              "ja-JP": {
                singular: "用語はインポートされませんでした。"
              },
              "ko-KR": {
                singular: "가져온 용어가 없습니다."
              },
              "pt-BR": {
                singular: "Nenhum termo importado"
              },
              "zh-CN": {
                singular: "未导入任何术语"
              }
            }
          }) : (0, _v205.translate)({
            singular: "{COUNT} term imported",
            plural: "{COUNT} terms imported",
            count: _v0,
            replacements: {
              COUNT: _v0
            },
            dictionary: {
              es: {
                singular: "{COUNT} término importado",
                plural: "{COUNT} términos importados"
              },
              "de-DE": {
                singular: "{COUNT} Begriff importiert",
                plural: "{COUNT} Begriffe importiert"
              },
              "fr-FR": {
                singular: "{COUNT} terme importé",
                plural: "{COUNT} termes importés"
              },
              "ja-JP": {
                singular: "{COUNT}件の用語がインポートされました",
                plural: "{COUNT}件の用語がインポートされました"
              },
              "ko-KR": {
                singular: "{COUNT}개의 용어가 가져와졌습니다.",
                plural: "{COUNT}개의 용어가 가져와졌습니다."
              },
              "pt-BR": {
                singular: "{COUNT} termo importado",
                plural: "{COUNT} termos importados"
              },
              "zh-CN": {
                singular: "{COUNT} 个术语已导入",
                plural: "{COUNT} 个术语已导入"
              }
            }
          }),
          glossaryCsvRowsFailed: _v0 => (0, _v205.translate)({
            singular: "{COUNT} row could not be imported",
            plural: "{COUNT} rows could not be imported",
            count: _v0,
            replacements: {
              COUNT: _v0
            },
            dictionary: {
              es: {
                singular: "{COUNT} fila no se pudo importar",
                plural: "{COUNT} filas no se pudieron importar"
              },
              "de-DE": {
                singular: "{COUNT} Zeile konnte nicht importiert werden",
                plural: "{COUNT} Zeilen konnten nicht importiert werden"
              },
              "fr-FR": {
                singular: "{COUNT} ligne n'a pas pu être importée",
                plural: "{COUNT} lignes n'ont pas pu être importées"
              },
              "ja-JP": {
                singular: "{COUNT}行をインポートできませんでした",
                plural: "{COUNT}行をインポートできませんでした"
              },
              "ko-KR": {
                singular: "{COUNT}개의 행을 가져올 수 없습니다.",
                plural: "{COUNT}개의 행을 가져올 수 없습니다."
              },
              "pt-BR": {
                singular: "{COUNT} linha não pôde ser importada",
                plural: "{COUNT} linhas não puderam ser importadas"
              },
              "zh-CN": {
                singular: "{COUNT} 行无法导入",
                plural: "{COUNT} 行无法导入"
              }
            }
          }),
          glossaryCsvLineError: (_v0, _v1) => (0, _v205.translate)({
            singular: "Line {LINE}: {MESSAGE}",
            replacements: {
              LINE: _v0,
              MESSAGE: _v1
            },
            dictionary: {
              es: {
                singular: "Línea {LINE}: {MESSAGE}"
              },
              "de-DE": {
                singular: "Zeile {LINE}: {MESSAGE}"
              },
              "fr-FR": {
                singular: "Ligne {LINE}: {MESSAGE}"
              },
              "ja-JP": {
                singular: "行 {LINE}: {MESSAGE}"
              },
              "ko-KR": {
                singular: "행 {LINE}: {MESSAGE}"
              },
              "pt-BR": {
                singular: "Linha {LINE}: {MESSAGE}"
              },
              "zh-CN": {
                singular: "第{LINE}行: {MESSAGE}"
              }
            }
          }),
          csv: (0, _v205.translate)("CSV"),
          addTerm: (0, _v205.translate)({
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
          edit: (0, _v205.translate)({
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
          uploadCsv: (0, _v205.translate)({
            singular: "Upload CSV",
            dictionary: {
              es: {
                singular: "Subir archivo CSV"
              },
              "de-DE": {
                singular: "CSV-Datei hochladen"
              },
              "fr-FR": {
                singular: "Importer un fichier CSV"
              },
              "ja-JP": {
                singular: "CSVをアップロード"
              },
              "ko-KR": {
                singular: "CSV 업로드"
              },
              "pt-BR": {
                singular: "Carregar CSV"
              },
              "zh-CN": {
                singular: "上传 CSV"
              }
            }
          }),
          removeTerm: (0, _v205.translate)({
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
          removeGlossaryTermNumber: _v0 => (0, _v205.translate)({
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
          cancel: (0, _v205.translate)({
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
          save: (0, _v205.translate)({
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
          replaceGlossary: (0, _v205.translate)({
            singular: "Replace glossary",
            dictionary: {
              es: {
                singular: "Reemplazar glosario"
              },
              "de-DE": {
                singular: "Glossar ersetzen"
              },
              "fr-FR": {
                singular: "Remplacer le glossaire"
              },
              "ja-JP": {
                singular: "用語集を置換"
              },
              "ko-KR": {
                singular: "용어집 교체"
              },
              "pt-BR": {
                singular: "Substituir glossário"
              },
              "zh-CN": {
                singular: "替换词汇表"
              }
            }
          }),
          replaceTermsTranslations: (0, _v205.translate)({
            singular: "Replace terms translations",
            dictionary: {
              es: {
                singular: "Reemplazar traducciones de términos"
              },
              "de-DE": {
                singular: "Begriffübersetzungen ersetzen"
              },
              "fr-FR": {
                singular: "Remplacer les traductions des termes"
              },
              "ja-JP": {
                singular: "用語の翻訳を置換"
              },
              "ko-KR": {
                singular: "용어 번역 교체"
              },
              "pt-BR": {
                singular: "Substituir traduções de termos"
              },
              "zh-CN": {
                singular: "替换术语翻译"
              }
            }
          }),
          changesSaved: (0, _v205.translate)({
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
          changesCouldNotBeSaved: (0, _v205.translate)({
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
          close: (0, _v205.translate)({
            singular: "Close",
            dictionary: {
              es: {
                singular: "Cerrar"
              },
              "de-DE": {
                singular: "Schließen"
              },
              "fr-FR": {
                singular: "Fermer "
              },
              "ja-JP": {
                singular: "閉じる"
              },
              "ko-KR": {
                singular: "닫기"
              },
              "pt-BR": {
                singular: "Fechar"
              },
              "zh-CN": {
                singular: "关闭"
              }
            }
          }),
          tryAgain: (0, _v205.translate)({
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
          replacementsTitle: (0, _v205.translate)({
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
          replacementsDescription: (0, _v205.translate)({
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
          replacementsCount: (_v0, _v1) => (0, _v205.translate)({
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
          replacementsSearchPlaceholder: (0, _v205.translate)({
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
          replacementsSearchLabel: (0, _v205.translate)({
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
          replacementsOpenSearch: (0, _v205.translate)({
            singular: "Open search",
            dictionary: {
              es: {
                singular: "Abrir búsqueda"
              },
              "de-DE": {
                singular: "Suche öffnen"
              },
              "fr-FR": {
                singular: "Ouvrir la recherche"
              },
              "ja-JP": {
                singular: "検索を開く"
              },
              "ko-KR": {
                singular: "검색 열기"
              },
              "pt-BR": {
                singular: "Abrir pesquisa"
              },
              "zh-CN": {
                singular: "打开搜索"
              }
            }
          }),
          replacementsSourceLanguage: (0, _v205.translate)({
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
          replacementsTranslationsSet: (0, _v205.translate)({
            singular: "Translations set",
            dictionary: {
              es: {
                singular: "Conjunto de traducciones"
              },
              "de-DE": {
                singular: "Übersetzungsset"
              },
              "fr-FR": {
                singular: "Ensemble de traductions"
              },
              "ja-JP": {
                singular: "翻訳セット"
              },
              "ko-KR": {
                singular: "번역 세트"
              },
              "pt-BR": {
                singular: "Conjunto de traduções"
              },
              "zh-CN": {
                singular: "翻译集"
              }
            }
          }),
          replacementsTranslationsSetValue: _v0 => (0, _v205.translate)({
            singular: "Translations set: {LANGUAGE}",
            replacements: {
              LANGUAGE: _v0
            },
            dictionary: {
              es: {
                singular: "Conjunto de traducciones: {LANGUAGE}"
              },
              "de-DE": {
                singular: "Übersetzungen festgelegt: {LANGUAGE}"
              },
              "fr-FR": {
                singular: "Jeu de traductions : {LANGUAGE}"
              },
              "ja-JP": {
                singular: "翻訳セット: {LANGUAGE}"
              },
              "ko-KR": {
                singular: "번역 설정: {LANGUAGE}"
              },
              "pt-BR": {
                singular: "Conjunto de traduções: {LANGUAGE}"
              },
              "zh-CN": {
                singular: "翻译已设置: {LANGUAGE}"
              }
            }
          }),
          replacementsClearSearch: (0, _v205.translate)({
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
          replacementsEditorDescription: (0, _v205.translate)({
            singular: "Choose the language your content is spoken in, add your terms, and set how each should appear in the languages you translate to. Leave a language blank and the AI translates it as usual.",
            dictionary: {
              es: {
                singular: "Elige el idioma en el que se habla tu contenido, agrega tus términos y define cómo debe aparecer cada uno en los idiomas a los que traduzcas. Deja un idioma en blanco y la IA lo traducirá como de costumbre."
              },
              "de-DE": {
                singular: "Wählen Sie die Sprache, in der Ihr Inhalt gesprochen wird, fügen Sie Ihre Begriffe hinzu und legen Sie fest, wie jeder Begriff in den Zielsprachen erscheinen soll. Lassen Sie eine Sprache leer, und die KI übersetzt wie gewohnt."
              },
              "fr-FR": {
                singular: "Choisissez la langue dans laquelle votre contenu est parlé, ajoutez vos termes et définissez l'apparence de chacun dans les langues vers lesquelles vous traduisez. Laissez une langue vide et l'IA la traduira comme d'habitude."
              },
              "ja-JP": {
                singular: "コンテンツが話されている言語を選択し、用語を追加して、翻訳先言語ごとにどのように表示されるかを設定してください。言語を空欄のままにすると、AIが通常どおり翻訳します。"
              },
              "ko-KR": {
                singular: "콘텐츠가 사용되는 원어를 선택하고 용어를 추가한 다음 번역 대상 언어에서 각 용어가 어떻게 표시될지 설정하세요. 언어를 비워두면 AI가 평소처럼 번역합니다."
              },
              "pt-BR": {
                singular: "Escolha o idioma em que seu conteúdo é falado, adicione seus termos e defina como cada um deve aparecer nos idiomas para os quais você traduz. Deixe um idioma em branco e a IA traduzirá normalmente."
              },
              "zh-CN": {
                singular: "选择您的内容所使用的语言，添加术语，并为每个目标翻译语言设置其显示方式。将某个语言项留空，AI 会照常翻译。"
              }
            }
          }),
          replacementsOriginalLanguage: _v0 => (0, _v205.translate)({
            singular: "{LANGUAGE} (original)",
            replacements: {
              LANGUAGE: _v0
            },
            dictionary: {
              "de-DE": {
                singular: "{LANGUAGE} (Original)"
              },
              "fr-FR": {
                singular: "{LANGUAGE} (originale)"
              },
              "ja-JP": {
                singular: "{LANGUAGE} (原文)"
              },
              "ko-KR": {
                singular: "{LANGUAGE} (원본)"
              },
              "zh-CN": {
                singular: "{LANGUAGE} (原文)"
              }
            }
          }),
          replacementsSourceTerm: _v0 => (0, _v205.translate)({
            singular: "Source term {NUMBER}",
            replacements: {
              NUMBER: _v0
            },
            dictionary: {
              es: {
                singular: "Término de origen {NUMBER}"
              },
              "de-DE": {
                singular: "Quellbegriff {NUMBER}"
              },
              "fr-FR": {
                singular: "Terme source {NUMBER}"
              },
              "ja-JP": {
                singular: "ソース用語 {NUMBER}"
              },
              "ko-KR": {
                singular: "원본 용어 {NUMBER}"
              },
              "pt-BR": {
                singular: "Termo de origem {NUMBER}"
              },
              "zh-CN": {
                singular: "源术语 {NUMBER}"
              }
            }
          }),
          replacementsTargetTerm: (_v0, _v1) => (0, _v205.translate)({
            singular: "{LANGUAGE} translation for source term {NUMBER}",
            replacements: {
              LANGUAGE: _v0,
              NUMBER: _v1
            },
            dictionary: {
              es: {
                singular: "{LANGUAGE} traducción para el término de origen {NUMBER}"
              },
              "de-DE": {
                singular: "{LANGUAGE}-Übersetzung für Quellbegriff {NUMBER}"
              },
              "fr-FR": {
                singular: "Traduction en {LANGUAGE} pour le terme source {NUMBER}"
              },
              "ja-JP": {
                singular: "{LANGUAGE} のソース用語 {NUMBER} の翻訳"
              },
              "ko-KR": {
                singular: "{LANGUAGE}의 원본 용어 {NUMBER} 번역"
              },
              "pt-BR": {
                singular: "{LANGUAGE} tradução para o termo de origem {NUMBER}"
              },
              "zh-CN": {
                singular: "{LANGUAGE} 对源术语 {NUMBER} 的翻译"
              }
            }
          }),
          replacementsAddLanguage: (0, _v205.translate)({
            singular: "Add language",
            dictionary: {
              es: {
                singular: "Agregar idioma"
              },
              "de-DE": {
                singular: "Sprache hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter une langue"
              },
              "ja-JP": {
                singular: "言語を追加"
              },
              "ko-KR": {
                singular: "언어 추가"
              },
              "pt-BR": {
                singular: "Adicionar idioma"
              },
              "zh-CN": {
                singular: "添加语言"
              }
            }
          }),
          replacementsAddLanguageTooltip: (0, _v205.translate)({
            singular: "Add a new language to set language-specific replacements for the terms that need it.",
            dictionary: {
              es: {
                singular: "Agregar un nuevo idioma para establecer reemplazos específicos por idioma para los términos que lo necesiten."
              },
              "de-DE": {
                singular: "Fügen Sie eine neue Sprache hinzu, um sprachspezifische Ersetzungen für Begriffe vorzunehmen, die sie benötigen."
              },
              "fr-FR": {
                singular: "Ajoutez une nouvelle langue pour définir des remplacements spécifiques à la langue pour les termes qui en ont besoin."
              },
              "ja-JP": {
                singular: "必要な用語の言語別置換を設定するために、新しい言語を追加してください。"
              },
              "ko-KR": {
                singular: "필요한 용어에 대해 언어별 대체 문구를 설정하려면 새 언어를 추가하세요."
              },
              "pt-BR": {
                singular: "Adicione um novo idioma para definir substituições específicas por idioma para os termos que precisam delas."
              },
              "zh-CN": {
                singular: "添加一种新语言，以便为需要的术语设置特定语言的替换。"
              }
            }
          }),
          replacementsNewTranslationsSet: (0, _v205.translate)({
            singular: "New translations set",
            dictionary: {
              es: {
                singular: "Nuevo conjunto de traducciones"
              },
              "de-DE": {
                singular: "Neues Übersetzungsset"
              },
              "fr-FR": {
                singular: "Nouvel ensemble de traductions"
              },
              "ja-JP": {
                singular: "新しい翻訳セット"
              },
              "ko-KR": {
                singular: "새 번역 세트"
              },
              "pt-BR": {
                singular: "Novo conjunto de traduções"
              },
              "zh-CN": {
                singular: "新的翻译集"
              }
            }
          }),
          replacementsNewLanguageTitle: (0, _v205.translate)({
            singular: "New language",
            dictionary: {
              es: {
                singular: "Nuevo idioma"
              },
              "de-DE": {
                singular: "Neue Sprache"
              },
              "fr-FR": {
                singular: "Nouvelle langue"
              },
              "ja-JP": {
                singular: "新しい言語"
              },
              "ko-KR": {
                singular: "새 언어"
              },
              "pt-BR": {
                singular: "Novo idioma"
              },
              "zh-CN": {
                singular: "新语言"
              }
            }
          }),
          replacementsNewLanguageDescription: (0, _v205.translate)({
            singular: "Select a source language and create a new set of terms for videos spoken in that language.",
            dictionary: {
              es: {
                singular: "Seleccione un idioma de origen y cree un nuevo conjunto de términos para los videos hablados en ese idioma."
              },
              "de-DE": {
                singular: "Wählen Sie eine Ausgangssprache und erstellen Sie einen neuen Satz von Begriffen für Videos, die in dieser Sprache gesprochen werden."
              },
              "fr-FR": {
                singular: "Sélectionnez une langue source et créez un nouvel ensemble de termes pour les vidéos parlées dans cette langue."
              },
              "ja-JP": {
                singular: "ソース言語を選択し、その言語で話される動画向けの新しい用語セットを作成してください。"
              },
              "ko-KR": {
                singular: "원본 언어를 선택하고 해당 언어로 말하는 동영상에 사용할 새 용어 세트를 만드세요."
              },
              "pt-BR": {
                singular: "Selecione um idioma de origem e crie um novo conjunto de termos para vídeos falados nesse idioma."
              },
              "zh-CN": {
                singular: "选择源语言并为以该语言配音的视频创建一组新术语。"
              }
            }
          }),
          replacementsNewLanguagesTitle: (0, _v205.translate)({
            singular: "New languages",
            dictionary: {
              es: {
                singular: "Nuevos idiomas"
              },
              "de-DE": {
                singular: "Neue Sprachen"
              },
              "fr-FR": {
                singular: "Nouvelles langues"
              },
              "ja-JP": {
                singular: "新しい言語"
              },
              "ko-KR": {
                singular: "새 언어"
              },
              "pt-BR": {
                singular: "Novos idiomas"
              },
              "zh-CN": {
                singular: "新语言"
              }
            }
          }),
          replacementsNewLanguagesDescription: _v0 => (0, _v205.translate)({
            singular: "You're about to add {LANGUAGES}. All existing terms will translate normally unless you manually edit it.",
            replacements: {
              LANGUAGES: _v0
            },
            dictionary: {
              es: {
                singular: "Estás a punto de agregar {LANGUAGES}. Todos los términos existentes se traducirán normalmente a menos que los edites manualmente."
              },
              "de-DE": {
                singular: "Sie sind dabei, {LANGUAGES} hinzuzufügen. Alle vorhandenen Begriffe werden normal übersetzt, es sei denn, Sie bearbeiten sie manuell."
              },
              "fr-FR": {
                singular: "Vous êtes sur le point d'ajouter {LANGUAGES}. Tous les termes existants seront traduits normalement à moins que vous ne les modifiiez manuellement."
              },
              "ja-JP": {
                singular: "{LANGUAGES} を追加しようとしています。既存の用語は手動で編集しない限り通常どおり翻訳されます。"
              },
              "ko-KR": {
                singular: "{LANGUAGES}을 추가하려고 합니다. 기존의 모든 용어는 사용자가 수동으로 편집하지 않는 한 정상적으로 번역됩니다."
              },
              "pt-BR": {
                singular: "Você está prestes a adicionar {LANGUAGES}. Todos os termos existentes serão traduzidos normalmente, a menos que você os edite manualmente."
              },
              "zh-CN": {
                singular: "您即将添加 {LANGUAGES}。所有现有术语将照常翻译，除非您手动编辑它。"
              }
            }
          }),
          replacementsAddLanguages: (0, _v205.translate)({
            singular: "Add languages",
            dictionary: {
              es: {
                singular: "Agregar idiomas"
              },
              "de-DE": {
                singular: "Sprachen hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter des langues"
              },
              "ja-JP": {
                singular: "言語を追加"
              },
              "ko-KR": {
                singular: "언어 추가"
              },
              "pt-BR": {
                singular: "Adicionar idiomas"
              },
              "zh-CN": {
                singular: "添加语言"
              }
            }
          }),
          replacementsDeleteLanguage: (0, _v205.translate)({
            singular: "Delete language",
            dictionary: {
              es: {
                singular: "Eliminar idioma"
              },
              "de-DE": {
                singular: "Sprache löschen"
              },
              "fr-FR": {
                singular: "Supprimer la langue"
              },
              "ja-JP": {
                singular: "言語を削除"
              },
              "ko-KR": {
                singular: "언어 삭제"
              },
              "pt-BR": {
                singular: "Excluir idioma"
              },
              "zh-CN": {
                singular: "删除语言"
              }
            }
          }),
          replacementsLanguageOptions: _v0 => (0, _v205.translate)({
            singular: "Options for {LANGUAGE}",
            replacements: {
              LANGUAGE: _v0
            },
            dictionary: {
              es: {
                singular: "Opciones para {LANGUAGE}"
              },
              "de-DE": {
                singular: "Optionen für {LANGUAGE}"
              },
              "fr-FR": {
                singular: "Options pour {LANGUAGE}"
              },
              "ja-JP": {
                singular: "{LANGUAGE} のオプション"
              },
              "ko-KR": {
                singular: "{LANGUAGE} 옵션"
              },
              "pt-BR": {
                singular: "Opções para {LANGUAGE}"
              },
              "zh-CN": {
                singular: "为 {LANGUAGE} 的选项"
              }
            }
          }),
          replacementsTargetLanguageDescription: (0, _v205.translate)({
            singular: "Adding a language lets you define a language-specific replacement for every term. Leave a language blank and the AI translates it as usual.",
            dictionary: {
              es: {
                singular: "Al agregar un idioma, puedes definir una sustitución específica para cada término en ese idioma. Deja un idioma en blanco y la IA lo traducirá como de costumbre."
              },
              "de-DE": {
                singular: "Durch das Hinzufügen einer Sprache können Sie für jeden Begriff eine sprachspezifische Ersetzung festlegen. Lassen Sie eine Sprache leer, und die KI übersetzt wie gewohnt."
              },
              "fr-FR": {
                singular: "L'ajout d'une langue vous permet de définir un remplacement spécifique à une langue pour chaque terme. Laissez une langue vide et l'IA la traduira comme d'habitude."
              },
              "ja-JP": {
                singular: "言語を追加すると、各用語に対して言語ごとの置換を定義できます。言語を空欄のままにすると、AIが通常どおり翻訳します。"
              },
              "ko-KR": {
                singular: "언어를 추가하면 각 용어에 대해 언어별 대체어를 정의할 수 있습니다. 언어를 비워두면 AI가 평소처럼 번역합니다."
              },
              "pt-BR": {
                singular: "Adicionar um idioma permite definir uma substituição específica por idioma para cada termo. Deixe um idioma em branco e a IA traduzirá normalmente."
              },
              "zh-CN": {
                singular: "添加语言可让您为每个术语定义特定语言的替代项。将某个语言项留空，AI 会照常翻译。"
              }
            }
          }),
          replacementsLanguage: (0, _v205.translate)({
            singular: "Language",
            dictionary: {
              es: {
                singular: "Idioma"
              },
              "de-DE": {
                singular: "Sprache"
              },
              "fr-FR": {
                singular: "Langue"
              },
              "ja-JP": {
                singular: "言語"
              },
              "ko-KR": {
                singular: "언어"
              },
              "pt-BR": {
                singular: "Idioma"
              },
              "zh-CN": {
                singular: "语言"
              }
            }
          }),
          replacementsLanguages: (0, _v205.translate)({
            singular: "Languages",
            dictionary: {
              es: {
                singular: "Idiomas"
              },
              "de-DE": {
                singular: "Sprachen"
              },
              "fr-FR": {
                singular: "Langues"
              },
              "ja-JP": {
                singular: "言語"
              },
              "ko-KR": {
                singular: "언어"
              },
              "pt-BR": {
                singular: "Idiomas"
              }
            }
          }),
          replacementsPendingLanguage: _v0 => (0, _v205.translate)({
            singular: "Language {NUMBER}",
            replacements: {
              NUMBER: _v0
            },
            dictionary: {
              es: {
                singular: "Idioma {NUMBER}"
              },
              "de-DE": {
                singular: "Sprache {NUMBER}"
              },
              "fr-FR": {
                singular: "Langue {NUMBER}"
              },
              "ja-JP": {
                singular: "言語 {NUMBER}"
              },
              "ko-KR": {
                singular: "언어 {NUMBER}"
              },
              "pt-BR": {
                singular: "Idioma {NUMBER}"
              },
              "zh-CN": {
                singular: "语言 {NUMBER}"
              }
            }
          }),
          replacementsRemoveLanguage: _v0 => (0, _v205.translate)({
            singular: "Remove {LANGUAGE}",
            replacements: {
              LANGUAGE: _v0
            },
            dictionary: {
              es: {
                singular: "Eliminar {LANGUAGE}"
              },
              "de-DE": {
                singular: "{LANGUAGE} entfernen"
              },
              "fr-FR": {
                singular: "Supprimer {LANGUAGE}"
              },
              "ja-JP": {
                singular: "{LANGUAGE} を削除"
              },
              "ko-KR": {
                singular: "{LANGUAGE} 제거"
              },
              "pt-BR": {
                singular: "Remover {LANGUAGE}"
              },
              "zh-CN": {
                singular: "移除 {LANGUAGE}"
              }
            }
          }),
          replacementsSelectLanguage: (0, _v205.translate)({
            singular: "Select language",
            dictionary: {
              es: {
                singular: "Seleccionar el idioma"
              },
              "de-DE": {
                singular: "Sprache aussuchen"
              },
              "fr-FR": {
                singular: "Sélectionner la langue"
              },
              "ja-JP": {
                singular: "言語を選択"
              },
              "ko-KR": {
                singular: "언어 선택"
              },
              "pt-BR": {
                singular: "Selecione o idioma"
              },
              "zh-CN": {
                singular: "选择语言"
              }
            }
          }),
          replacementsNoLanguagesAvailable: (0, _v205.translate)({
            singular: "No additional languages are available.",
            dictionary: {
              es: {
                singular: "No hay idiomas adicionales disponibles."
              },
              "de-DE": {
                singular: "Es stehen keine zusätzlichen Sprachen zur Verfügung."
              },
              "fr-FR": {
                singular: "Aucune langue supplémentaire n'est disponible."
              },
              "ja-JP": {
                singular: "追加できる言語はありません。"
              },
              "ko-KR": {
                singular: "추가 가능한 언어가 없습니다."
              },
              "pt-BR": {
                singular: "Não há idiomas adicionais disponíveis."
              },
              "zh-CN": {
                singular: "没有其他可用语言。"
              }
            }
          }),
          replacementsLanguagesLoadingError: (0, _v205.translate)({
            singular: "Unable to load languages.",
            dictionary: {
              es: {
                singular: "No se pudieron cargar los idiomas."
              },
              "de-DE": {
                singular: "Sprachen konnten nicht geladen werden."
              },
              "fr-FR": {
                singular: "Impossible de charger les langues."
              },
              "ja-JP": {
                singular: "言語を読み込めませんでした。"
              },
              "ko-KR": {
                singular: "언어를 불러올 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível carregar os idiomas."
              },
              "zh-CN": {
                singular: "无法加载语言。"
              }
            }
          }),
          replacementsRemoveRow: _v0 => (0, _v205.translate)({
            singular: "Remove source term {NUMBER}",
            replacements: {
              NUMBER: _v0
            },
            dictionary: {
              es: {
                singular: "Eliminar término fuente {NUMBER}"
              },
              "de-DE": {
                singular: "Quellbegriff {NUMBER} entfernen"
              },
              "fr-FR": {
                singular: "Supprimer le terme source {NUMBER}"
              },
              "ja-JP": {
                singular: "ソース用語 {NUMBER} を削除"
              },
              "ko-KR": {
                singular: "원본 용어 {NUMBER} 제거"
              },
              "pt-BR": {
                singular: "Remover termo de origem {NUMBER}"
              },
              "zh-CN": {
                singular: "移除源术语 {NUMBER}"
              }
            }
          }),
          replacementsEditTerm: _v0 => (0, _v205.translate)({
            singular: "Edit {TERM}",
            replacements: {
              TERM: _v0
            },
            dictionary: {
              es: {
                singular: "Editar {TERM}"
              },
              "de-DE": {
                singular: "Bearbeiten von {TERM}"
              },
              "fr-FR": {
                singular: "Modifier {TERM}"
              },
              "ja-JP": {
                singular: "{TERM} を編集"
              },
              "ko-KR": {
                singular: "{TERM} 편집"
              },
              "pt-BR": {
                singular: "Editar {TERM}"
              },
              "zh-CN": {
                singular: "编辑 {TERM}"
              }
            }
          }),
          replacementsEnterTerm: (0, _v205.translate)({
            singular: "Enter term",
            dictionary: {
              es: {
                singular: "Ingrese término"
              },
              "de-DE": {
                singular: "Begriff eingeben"
              },
              "fr-FR": {
                singular: "Saisissez le terme"
              },
              "ja-JP": {
                singular: "用語を入力"
              },
              "ko-KR": {
                singular: "용어 입력"
              },
              "pt-BR": {
                singular: "Insira o termo"
              },
              "zh-CN": {
                singular: "输入术语"
              }
            }
          }),
          replacementsChangesSaved: (0, _v205.translate)({
            singular: "Terms translations saved",
            dictionary: {
              es: {
                singular: "Traducciones de los términos guardadas."
              },
              "de-DE": {
                singular: "Begriffübersetzungen wurden gespeichert."
              },
              "fr-FR": {
                singular: "Traductions des termes enregistrées"
              },
              "ja-JP": {
                singular: "用語の翻訳を保存しました"
              },
              "ko-KR": {
                singular: "용어 번역이 저장되었습니다"
              },
              "pt-BR": {
                singular: "Traduções dos termos salvas"
              },
              "zh-CN": {
                singular: "术语翻译已保存。"
              }
            }
          }),
          replacementsChangesCouldNotBeSaved: (0, _v205.translate)({
            singular: "Terms translations could not be saved",
            dictionary: {
              es: {
                singular: "No se pudieron guardar las traducciones de los términos."
              },
              "de-DE": {
                singular: "Begriffübersetzungen konnten nicht gespeichert werden."
              },
              "fr-FR": {
                singular: "Les traductions des termes n'ont pas pu être enregistrées"
              },
              "ja-JP": {
                singular: "用語の翻訳を保存できませんでした"
              },
              "ko-KR": {
                singular: "용어 번역을 저장할 수 없습니다"
              },
              "pt-BR": {
                singular: "Não foi possível salvar as traduções dos termos"
              },
              "zh-CN": {
                singular: "术语翻译无法保存。"
              }
            }
          }),
          replacementsCsvImport: (0, _v205.translate)({
            singular: "Import CSV",
            dictionary: {
              es: {
                singular: "Importar CSV"
              },
              "de-DE": {
                singular: "CSV importieren"
              },
              "fr-FR": {
                singular: "Importer un fichier CSV"
              },
              "ja-JP": {
                singular: "CSVをインポート"
              },
              "ko-KR": {
                singular: "CSV 가져오기"
              },
              "pt-BR": {
                singular: "Importar CSV"
              },
              "zh-CN": {
                singular: "导入 CSV"
              }
            }
          }),
          replacementsCsvInstructions: (0, _v205.translate)({
            singular: "Upload a CSV with the following columns: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}. Use the language codes supported for captions, such as en, pt-BR, or zh-HK.",
            replacements: _v206,
            dictionary: {
              es: {
                singular: "Suba un CSV con las siguientes columnas: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}. Utilice los códigos de idioma compatibles con los subtítulos, como en, pt-BR o zh-HK."
              },
              "de-DE": {
                singular: "Laden Sie eine CSV-Datei mit den folgenden Spalten hoch: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}. Verwenden Sie die für Untertitel unterstützten Sprachcodes, z. B. en, pt-BR oder zh-HK."
              },
              "fr-FR": {
                singular: "Téléversez un CSV avec les colonnes suivantes : {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}. Utilisez les codes de langue pris en charge pour les sous-titres, tels que en, pt-BR ou zh-HK."
              },
              "ja-JP": {
                singular: "次の列を含むCSVをアップロードしてください: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}. キャプションでサポートされている言語コードを使用してください, 例: en, pt-BR, または zh-HK."
              },
              "ko-KR": {
                singular: "다음 열을 포함한 CSV를 업로드하세요: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}. 캡션에 지원되는 언어 코드를 사용하세요(예: en, pt-BR, zh-HK)."
              },
              "pt-BR": {
                singular: "Faça o upload de um CSV com as seguintes colunas: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}. Use os códigos de idioma compatíveis com legendas, como en, pt-BR ou zh-HK."
              },
              "zh-CN": {
                singular: "上传一个 CSV，包含以下列：{SOURCE_LANGUAGE}、{SOURCE_TERM}、{TARGET_LANGUAGE}、{TARGET_TERM}。使用支持字幕的语言代码，例如 en、pt-BR 或 zh-HK。"
              }
            }
          }),
          replacementsCsvReplaceNotice: (0, _v205.translate)({
            singular: "Uploading a CSV replaces all existing terms translations.",
            dictionary: {
              es: {
                singular: "Al subir un CSV se reemplazarán todas las traducciones de términos existentes."
              },
              "de-DE": {
                singular: "Beim Hochladen einer CSV werden alle vorhandenen Begriffübersetzungen ersetzt."
              },
              "fr-FR": {
                singular: "Le téléchargement d'un fichier CSV remplace toutes les traductions de termes existantes."
              },
              "ja-JP": {
                singular: "CSVをアップロードすると、既存の用語の翻訳がすべて置き換えられます。"
              },
              "ko-KR": {
                singular: "CSV를 업로드하면 기존의 모든 용어 번역이 대체됩니다."
              },
              "pt-BR": {
                singular: "Ao enviar um CSV, serão substituídas todas as traduções de termos existentes."
              },
              "zh-CN": {
                singular: "上传 CSV 会替换所有现有的术语翻译."
              }
            }
          }),
          replacementsCsvReplaceConfirmation: (0, _v205.translate)({
            singular: "Saving will replace all existing terms translations with the entries in this CSV.",
            dictionary: {
              es: {
                singular: "Al guardar se reemplazarán todas las traducciones de términos existentes por las entradas de este CSV."
              },
              "de-DE": {
                singular: "Durch das Speichern werden alle vorhandenen Begriffübersetzungen durch die Einträge in dieser CSV ersetzt."
              },
              "fr-FR": {
                singular: "L'enregistrement remplacera toutes les traductions de termes existantes par les entrées de ce fichier CSV."
              },
              "ja-JP": {
                singular: "保存すると、このCSVのエントリで既存の用語の翻訳がすべて置き換えられます。"
              },
              "ko-KR": {
                singular: "저장하면 이 CSV의 항목으로 기존의 모든 용어 번역이 대체됩니다."
              },
              "pt-BR": {
                singular: "Ao salvar, todas as traduções de termos existentes serão substituídas pelas entradas deste CSV."
              },
              "zh-CN": {
                singular: "保存将用此 CSV 中的条目替换所有现有的术语翻译."
              }
            }
          }),
          replacementsCsvTemplatePrompt: _v0 => (0, _v205.translate)({
            singular: "{A}Download the template{/A} file to start.",
            replacements: {
              A: _v0
            },
            dictionary: {
              es: {
                singular: "{A}Descargue la plantilla{/A} para comenzar."
              },
              "de-DE": {
                singular: "{A}Laden Sie die Vorlagendatei herunter{/A}, um zu beginnen."
              },
              "fr-FR": {
                singular: "{A}Téléchargez le fichier modèle{/A} pour commencer."
              },
              "ja-JP": {
                singular: "{A}テンプレートをダウンロード{/A}して始めてください。"
              },
              "ko-KR": {
                singular: "{A}템플릿 파일을 다운로드{/A}하여 시작하세요."
              },
              "pt-BR": {
                singular: "{A}Baixe o arquivo de modelo{/A} para começar."
              },
              "zh-CN": {
                singular: "要开始，请{A}下载模板{/A}文件。"
              }
            }
          }),
          replacementsCsvUploadFile: (0, _v205.translate)({
            singular: "Upload file",
            dictionary: {
              es: {
                singular: "Subir archivo"
              },
              "de-DE": {
                singular: "Datei hochladen"
              },
              "fr-FR": {
                singular: "Mettre le fichier en ligne"
              },
              "ja-JP": {
                singular: "ファイルをアップロードする"
              },
              "ko-KR": {
                singular: "파일 업로드"
              },
              "pt-BR": {
                singular: "Carregar arquivo"
              },
              "zh-CN": {
                singular: "上传文件"
              }
            }
          }),
          replacementsCsvDropzone: (0, _v205.translate)({
            singular: "Drop file here or click to browse file.",
            dictionary: {
              es: {
                singular: "Suelte el archivo aquí o haga clic para examinar el archivo."
              },
              "de-DE": {
                singular: "Datei hier ablegen oder klicken, um eine Datei auszuwählen."
              },
              "fr-FR": {
                singular: "Déposez le fichier ici ou cliquez pour parcourir le fichier."
              },
              "ja-JP": {
                singular: "ファイルをここにドロップするか、クリックして参照してください。"
              },
              "ko-KR": {
                singular: "파일을 여기에 놓거나 클릭하여 찾아보세요."
              },
              "pt-BR": {
                singular: "Solte o arquivo aqui ou clique para procurar o arquivo."
              },
              "zh-CN": {
                singular: "将文件拖到此处或点击以浏览文件。"
              }
            }
          }),
          replacementsCsvImported: _v0 => (0, _v205.translate)({
            singular: "{COUNT} row imported",
            plural: "{COUNT} rows imported",
            count: _v0,
            replacements: {
              COUNT: _v0
            },
            dictionary: {
              es: {
                singular: "{COUNT} fila importada",
                plural: "{COUNT} filas importadas"
              },
              "de-DE": {
                singular: "{COUNT} Zeile importiert",
                plural: "{COUNT} Zeilen importiert"
              },
              "fr-FR": {
                singular: "{COUNT} ligne importée",
                plural: "{COUNT} lignes importées"
              },
              "ja-JP": {
                singular: "{COUNT} 行がインポートされました。",
                plural: "{COUNT} 行がインポートされました。"
              },
              "ko-KR": {
                singular: "{COUNT}개의 행을 가져왔습니다.",
                plural: "{COUNT}개의 행을 가져왔습니다."
              },
              "pt-BR": {
                singular: "{COUNT} linha importada",
                plural: "{COUNT} linhas importadas"
              },
              "zh-CN": {
                singular: "{COUNT} 行已导入",
                plural: "{COUNT} 行已导入"
              }
            }
          }),
          replacementsCsvPartialFailure: (0, _v205.translate)({
            singular: "Some rows could not be imported.",
            dictionary: {
              es: {
                singular: "Algunas filas no se pudieron importar."
              },
              "de-DE": {
                singular: "Einige Zeilen konnten nicht importiert werden."
              },
              "fr-FR": {
                singular: "Certaines lignes n'ont pas pu être importées."
              },
              "ja-JP": {
                singular: "一部の行はインポートできませんでした。"
              },
              "ko-KR": {
                singular: "일부 행을 가져오지 못했습니다."
              },
              "pt-BR": {
                singular: "Algumas linhas não puderam ser importadas."
              },
              "zh-CN": {
                singular: "部分行无法导入。"
              }
            }
          }),
          replacementsCsvAllFailed: (0, _v205.translate)({
            singular: "No rows were imported.",
            dictionary: {
              es: {
                singular: "No se importaron filas."
              },
              "de-DE": {
                singular: "Es wurden keine Zeilen importiert."
              },
              "fr-FR": {
                singular: "Aucune ligne n'a été importée."
              },
              "ja-JP": {
                singular: "行はインポートされませんでした。"
              },
              "ko-KR": {
                singular: "행이 하나도 가져오지 못했습니다."
              },
              "pt-BR": {
                singular: "Nenhuma linha foi importada."
              },
              "zh-CN": {
                singular: "未导入任何行。"
              }
            }
          }),
          replacementsCsvFailureLine: (_v0, _v1) => (0, _v205.translate)({
            singular: "Line {LINE}: {MESSAGE}",
            replacements: {
              LINE: _v0,
              MESSAGE: _v1
            },
            dictionary: {
              es: {
                singular: "Línea {LINE}: {MESSAGE}"
              },
              "de-DE": {
                singular: "Zeile {LINE}: {MESSAGE}"
              },
              "fr-FR": {
                singular: "Ligne {LINE}: {MESSAGE}"
              },
              "ja-JP": {
                singular: "行 {LINE}: {MESSAGE}"
              },
              "ko-KR": {
                singular: "행 {LINE}: {MESSAGE}"
              },
              "pt-BR": {
                singular: "Linha {LINE}: {MESSAGE}"
              },
              "zh-CN": {
                singular: "第{LINE}行: {MESSAGE}"
              }
            }
          }),
          replacementsCsvEmpty: (0, _v205.translate)({
            singular: "The CSV file is empty.",
            dictionary: {
              es: {
                singular: "El archivo CSV está vacío."
              },
              "de-DE": {
                singular: "Die CSV-Datei ist leer."
              },
              "fr-FR": {
                singular: "Le fichier CSV est vide."
              },
              "ja-JP": {
                singular: "CSVファイルが空です。"
              },
              "ko-KR": {
                singular: "CSV 파일이 비어 있습니다."
              },
              "pt-BR": {
                singular: "O arquivo CSV está vazio."
              },
              "zh-CN": {
                singular: "CSV 文件为空。"
              }
            }
          }),
          replacementsCsvInvalidHeader: (0, _v205.translate)({
            singular: "The CSV header must be: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}.",
            replacements: _v206,
            dictionary: {
              es: {
                singular: "El encabezado del CSV debe ser: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}."
              },
              "de-DE": {
                singular: "Der CSV-Header muss lauten: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}."
              },
              "fr-FR": {
                singular: "L'en-tête du CSV doit être : {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}."
              },
              "ja-JP": {
                singular: "CSV のヘッダーは: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM} である必要があります。"
              },
              "ko-KR": {
                singular: "CSV 헤더는 다음이어야 합니다: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}."
              },
              "pt-BR": {
                singular: "O cabeçalho do CSV deve ser: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}."
              },
              "zh-CN": {
                singular: "CSV 头部必须为: {SOURCE_LANGUAGE}, {SOURCE_TERM}, {TARGET_LANGUAGE}, {TARGET_TERM}."
              }
            }
          }),
          replacementsCsvMalformed: (0, _v205.translate)({
            singular: "The CSV contains malformed quoted content.",
            dictionary: {
              es: {
                singular: "El CSV contiene contenido entrecomillado malformado."
              },
              "de-DE": {
                singular: "Die CSV-Datei enthält fehlerhaft formatierte, in Anführungszeichen gesetzte Inhalte."
              },
              "fr-FR": {
                singular: "Le fichier CSV contient du contenu entre guillemets mal formé."
              },
              "ja-JP": {
                singular: "CSV に引用の形式が不正な内容が含まれています。"
              },
              "ko-KR": {
                singular: "CSV에 잘못된 따옴표 형식의 내용이 포함되어 있습니다."
              },
              "pt-BR": {
                singular: "O CSV contém conteúdo entre aspas malformado."
              },
              "zh-CN": {
                singular: "CSV 包含格式错误的引号内容。"
              }
            }
          }),
          replacementsCsvInvalidFile: (0, _v205.translate)({
            singular: "Select a CSV file.",
            dictionary: {
              es: {
                singular: "Seleccione un archivo CSV."
              },
              "de-DE": {
                singular: "Wählen Sie eine CSV-Datei aus."
              },
              "fr-FR": {
                singular: "Sélectionnez un fichier CSV."
              },
              "ja-JP": {
                singular: "CSVファイルを選択してください。"
              },
              "ko-KR": {
                singular: "CSV 파일을 선택하세요."
              },
              "pt-BR": {
                singular: "Selecione um arquivo CSV."
              },
              "zh-CN": {
                singular: "请选择 CSV 文件。"
              }
            }
          }),
          replacementsCsvImportError: (0, _v205.translate)({
            singular: "The CSV could not be imported.",
            dictionary: {
              es: {
                singular: "No se pudo importar el CSV."
              },
              "de-DE": {
                singular: "Die CSV konnte nicht importiert werden."
              },
              "fr-FR": {
                singular: "Le CSV n'a pas pu être importé."
              },
              "ja-JP": {
                singular: "CSVをインポートできませんでした。"
              },
              "ko-KR": {
                singular: "CSV를 가져올 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível importar o CSV."
              },
              "zh-CN": {
                singular: "无法导入 CSV。"
              }
            }
          }),
          replacementsCsvColumnCountError: (0, _v205.translate)({
            singular: "The row must contain exactly four columns.",
            dictionary: {
              es: {
                singular: "La fila debe contener exactamente cuatro columnas."
              },
              "de-DE": {
                singular: "Die Zeile muss genau vier Spalten enthalten."
              },
              "fr-FR": {
                singular: "La ligne doit contenir exactement quatre colonnes."
              },
              "ja-JP": {
                singular: "その行は正確に4列でなければなりません。"
              },
              "ko-KR": {
                singular: "해당 행은 정확히 네 개의 열을 포함해야 합니다."
              },
              "pt-BR": {
                singular: "A linha deve conter exatamente quatro colunas."
              },
              "zh-CN": {
                singular: "该行必须正好包含四列。"
              }
            }
          }),
          replacementsCsvRequiredError: (0, _v205.translate)({
            singular: "All four columns are required.",
            dictionary: {
              es: {
                singular: "Las cuatro columnas son obligatorias."
              },
              "de-DE": {
                singular: "Alle vier Spalten sind erforderlich."
              },
              "fr-FR": {
                singular: "Les quatre colonnes sont requises."
              },
              "ja-JP": {
                singular: "4 列すべてが必須です。"
              },
              "ko-KR": {
                singular: "네 개의 열 모두 필요합니다."
              },
              "pt-BR": {
                singular: "As quatro colunas são obrigatórias."
              },
              "zh-CN": {
                singular: "所有四列均为必填。"
              }
            }
          }),
          replacementsCsvFieldLengthError: (0, _v205.translate)({
            singular: "One or more fields exceed the maximum length.",
            dictionary: {
              es: {
                singular: "Uno o más campos exceden la longitud máxima."
              },
              "de-DE": {
                singular: "Ein oder mehrere Felder überschreiten die maximale Länge."
              },
              "fr-FR": {
                singular: "Un ou plusieurs champs dépassent la longueur maximale."
              },
              "ja-JP": {
                singular: "1つ以上のフィールドが最大長を超えています。"
              },
              "ko-KR": {
                singular: "하나 이상의 필드가 최대 길이를 초과합니다."
              },
              "pt-BR": {
                singular: "Um ou mais campos excedem o comprimento máximo."
              },
              "zh-CN": {
                singular: "一个或多个字段超出最大长度。"
              }
            }
          }),
          replacementsCsvInvalidSourceLanguage: _v0 => (0, _v205.translate)({
            singular: "{LANGUAGE} is not a supported source language code.",
            replacements: {
              LANGUAGE: _v0
            },
            dictionary: {
              es: {
                singular: "{LANGUAGE} no es un código de idioma de origen compatible."
              },
              "de-DE": {
                singular: "{LANGUAGE} ist kein unterstützter Quellsprachcode."
              },
              "fr-FR": {
                singular: "{LANGUAGE} n'est pas un code de langue source pris en charge."
              },
              "ja-JP": {
                singular: "{LANGUAGE} はサポートされているソース言語コードではありません."
              },
              "ko-KR": {
                singular: "{LANGUAGE}은(는) 지원되는 소스 언어 코드가 아닙니다."
              },
              "pt-BR": {
                singular: "{LANGUAGE} não é um código de idioma de origem suportado."
              },
              "zh-CN": {
                singular: "{LANGUAGE} 不是受支持的源语言代码。"
              }
            }
          }),
          replacementsCsvInvalidTargetLanguage: _v0 => (0, _v205.translate)({
            singular: "{LANGUAGE} is not a supported target language code.",
            replacements: {
              LANGUAGE: _v0
            },
            dictionary: {
              es: {
                singular: "{LANGUAGE} no es un código de idioma de destino compatible."
              },
              "de-DE": {
                singular: "{LANGUAGE} ist kein unterstützter Zielsprachcode."
              },
              "fr-FR": {
                singular: "{LANGUAGE} n'est pas un code de langue cible pris en charge."
              },
              "ja-JP": {
                singular: "{LANGUAGE} はサポートされているターゲット言語コードではありません."
              },
              "ko-KR": {
                singular: "{LANGUAGE}은(는) 지원되는 대상 언어 코드가 아닙니다."
              },
              "pt-BR": {
                singular: "{LANGUAGE} não é um código de idioma de destino suportado."
              },
              "zh-CN": {
                singular: "{LANGUAGE} 不是受支持的目标语言代码。"
              }
            }
          }),
          replacementsCsvMatchingLanguages: (0, _v205.translate)({
            singular: "Source and target languages must be different.",
            dictionary: {
              es: {
                singular: "Los idiomas de origen y destino deben ser diferentes."
              },
              "de-DE": {
                singular: "Quell- und Zielsprache müssen unterschiedlich sein."
              },
              "fr-FR": {
                singular: "La langue source et la langue cible doivent être différentes."
              },
              "ja-JP": {
                singular: "ソース言語とターゲット言語は異なる必要があります。"
              },
              "ko-KR": {
                singular: "원본 언어와 대상 언어는 서로 달라야 합니다."
              },
              "pt-BR": {
                singular: "Os idiomas de origem e destino devem ser diferentes."
              },
              "zh-CN": {
                singular: "源语言和目标语言必须不同。"
              }
            }
          }),
          replacementsCsvTooManyRows: (0, _v205.translate)({
            singular: "Only 1,000 rows can be imported at once.",
            dictionary: {
              es: {
                singular: "Solo se pueden importar 1,000 filas a la vez."
              },
              "de-DE": {
                singular: "Es können nur 1,000 Zeilen gleichzeitig importiert werden."
              },
              "fr-FR": {
                singular: "Seules 1,000 lignes peuvent être importées à la fois."
              },
              "ja-JP": {
                singular: "一度にインポートできるのは最大1,000行です。"
              },
              "ko-KR": {
                singular: "한 번에 최대 1,000개의 행만 가져올 수 있습니다."
              },
              "pt-BR": {
                singular: "Somente 1.000 linhas podem ser importadas de cada vez."
              },
              "zh-CN": {
                singular: "一次最多只能导入 1,000 行。"
              }
            }
          }),
          replacementsCsvServerError: (0, _v205.translate)({
            singular: "The row could not be imported.",
            dictionary: {
              es: {
                singular: "No se pudo importar la fila."
              },
              "de-DE": {
                singular: "Die Zeile konnte nicht importiert werden."
              },
              "fr-FR": {
                singular: "La ligne n'a pas pu être importée."
              },
              "ja-JP": {
                singular: "その行はインポートできませんでした。"
              },
              "ko-KR": {
                singular: "해당 행을 가져오지 못했습니다."
              },
              "pt-BR": {
                singular: "A linha não pôde ser importada."
              },
              "zh-CN": {
                singular: "该行无法导入。"
              }
            }
          }),
          replacementsEmptyTitle: (0, _v205.translate)({
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
          replacementsEmptyDescription: (0, _v205.translate)({
            singular: "Start adding your first term translation.",
            dictionary: {
              es: {
                singular: "Comienza a agregar la traducción de tu primer término."
              },
              "de-DE": {
                singular: "Fügen Sie Ihre erste Begriffsübersetzung hinzu."
              },
              "fr-FR": {
                singular: "Commencez à ajouter la traduction de votre premier terme."
              },
              "ja-JP": {
                singular: "最初の用語の翻訳を追加し始めましょう。"
              },
              "ko-KR": {
                singular: "첫 용어 번역 추가를 시작하세요."
              },
              "pt-BR": {
                singular: "Comece adicionando sua primeira tradução de termo."
              },
              "zh-CN": {
                singular: "开始添加您的第一个术语翻译。"
              }
            }
          }),
          replacementsNoResults: (0, _v205.translate)({
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
          replacementsLoadingError: (0, _v205.translate)({
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
          add: (0, _v205.translate)({
            singular: "Add",
            dictionary: {
              es: {
                singular: "Agregar"
              },
              "de-DE": {
                singular: "Hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter"
              },
              "ja-JP": {
                singular: "追加"
              },
              "ko-KR": {
                singular: "추가"
              },
              "pt-BR": {
                singular: "Adicionar"
              },
              "zh-CN": {
                singular: "添加"
              }
            }
          }),
          import: (0, _v205.translate)({
            singular: "Import",
            dictionary: {
              es: {
                singular: "IMPORTAR"
              },
              "de-DE": {
                singular: "Importieren"
              },
              "fr-FR": {
                singular: "Importer"
              },
              "ja-JP": {
                singular: "インポート"
              },
              "ko-KR": {
                singular: "가져오기"
              },
              "pt-BR": {
                singular: "Importar"
              },
              "zh-CN": {
                singular: "导入"
              }
            }
          }),
          needMorePrompt: (0, _v205.translate)({
            singular: "Need more?",
            dictionary: {
              es: {
                singular: "¿Necesitas más?"
              },
              "de-DE": {
                singular: "Brauchen Sie mehr?"
              },
              "fr-FR": {
                singular: "Besoin de plus ?"
              },
              "ja-JP": {
                singular: "もっと必要ですか?"
              },
              "ko-KR": {
                singular: "더 필요하신가요?"
              },
              "pt-BR": {
                singular: "Precisa de mais?"
              },
              "zh-CN": {
                singular: "需要更多?"
              }
            }
          }),
          contactSales: (0, _v205.translate)({
            singular: "Contact Sales",
            dictionary: {
              es: {
                singular: "Comunicarse con Ventas"
              },
              "de-DE": {
                singular: "Sales-Team kontaktieren"
              },
              "fr-FR": {
                singular: "Service commercial"
              },
              "ja-JP": {
                singular: "営業チームへ問い合わせる"
              },
              "ko-KR": {
                singular: "영업팀에 문의"
              },
              "pt-BR": {
                singular: "Falar com vendas"
              },
              "zh-CN": {
                singular: "联系销售"
              }
            }
          }),
          rulesTitle: (0, _v205.translate)({
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
          rulesDescription: (0, _v205.translate)({
            singular: "Add your own instructions in plain language to guide how words are captioned or translated. (example: always spell out numbers under ten).",
            dictionary: {
              es: {
                singular: "Agrega tus propias instrucciones en lenguaje sencillo para guiar cómo se subtitulan o traducen las palabras. (ejemplo: siempre escribe con letras los números menores de diez)."
              },
              "de-DE": {
                singular: "Fügen Sie Ihre eigenen Anweisungen in einfacher Sprache hinzu, um zu steuern, wie Wörter untertitelt oder übersetzt werden. (Beispiel: Zahlen unter zehn immer ausschreiben)."
              },
              "fr-FR": {
                singular: "Ajoutez vos propres instructions en langage clair pour guider la façon dont les mots sont sous-titrés ou traduits. (exemple: écrivez toujours en toutes lettres les nombres inférieurs à dix)."
              },
              "ja-JP": {
                singular: "語句のキャプション付けや翻訳の方法を案内するため、わかりやすい言葉で独自の指示を追加してください (例: 10未満の数字は常に綴りで表記する)."
              },
              "ko-KR": {
                singular: "단순한 언어로 자체 지침을 추가하여 단어가 자막 처리되거나 번역되는 방식을 안내하세요. (예: 열 미만의 숫자는 항상 철자로 쓰세요)."
              },
              "pt-BR": {
                singular: "Adicione suas próprias instruções em linguagem simples para orientar como as palavras são legendadas ou traduzidas. (exemplo: sempre escreva por extenso os números menores que dez)."
              },
              "zh-CN": {
                singular: "使用简单明了的语言添加您自己的说明，以指导字幕或翻译如何处理词语。 (例如：始终将十以下的数字拼写出来。)"
              }
            }
          }),
          rulesInputLabel: (0, _v205.translate)({
            singular: "Rules",
            dictionary: {
              es: {
                singular: "Reglas"
              },
              "de-DE": {
                singular: "Regeln"
              },
              "fr-FR": {
                singular: "Règles"
              },
              "ja-JP": {
                singular: "ルール"
              },
              "ko-KR": {
                singular: "규칙"
              },
              "pt-BR": {
                singular: "Regras"
              },
              "zh-CN": {
                singular: "规则"
              }
            }
          }),
          rulesCharacterCount: (_v0, _v1) => (0, _v205.translate)({
            singular: "{USED}/{LIMIT}",
            replacements: {
              USED: _v0,
              LIMIT: _v1
            }
          }),
          rulesPlaceholder: (0, _v205.translate)({
            singular: "Describe any rules with simple words",
            dictionary: {
              es: {
                singular: "Describe cualquier regla con palabras sencillas"
              },
              "de-DE": {
                singular: "Beschreiben Sie Regeln mit einfachen Worten"
              },
              "fr-FR": {
                singular: "Décrivez les règles en termes simples"
              },
              "ja-JP": {
                singular: "ルールはわかりやすい言葉で説明してください"
              },
              "ko-KR": {
                singular: "규칙을 간단한 단어로 설명하세요"
              },
              "pt-BR": {
                singular: "Descreva quaisquer regras com palavras simples"
              },
              "zh-CN": {
                singular: "用简单词语描述任何规则"
              }
            }
          }),
          rulesHelper: (0, _v205.translate)({
            singular: "Write one rule per line.",
            dictionary: {
              es: {
                singular: "Escriba una regla por línea."
              },
              "de-DE": {
                singular: "Schreiben Sie eine Regel pro Zeile."
              },
              "fr-FR": {
                singular: "Écrivez une règle par ligne."
              },
              "ja-JP": {
                singular: "ルールは1行に1つずつ記述してください。"
              },
              "ko-KR": {
                singular: "규칙을 한 줄에 하나씩 작성하세요."
              },
              "pt-BR": {
                singular: "Escreva uma regra por linha."
              },
              "zh-CN": {
                singular: "每行写一条规则。"
              }
            }
          }),
          rulesSaving: (0, _v205.translate)({
            singular: "Saving...",
            dictionary: {
              es: {
                singular: "Guardando..."
              },
              "de-DE": {
                singular: "Speichern..."
              },
              "fr-FR": {
                singular: "Enregistrement..."
              },
              "ja-JP": {
                singular: "保存中..."
              },
              "ko-KR": {
                singular: "저장 중..."
              },
              "pt-BR": {
                singular: "Salvando..."
              },
              "zh-CN": {
                singular: "正在保存..."
              }
            }
          }),
          rulesLoadingLabel: (0, _v205.translate)({
            singular: "Loading custom rules",
            dictionary: {
              es: {
                singular: "Cargando reglas personalizadas"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Regeln werden geladen"
              },
              "fr-FR": {
                singular: "Chargement des règles personnalisées"
              },
              "ja-JP": {
                singular: "カスタムルールを読み込み中"
              },
              "ko-KR": {
                singular: "사용자 지정 규칙을 불러오는 중"
              },
              "pt-BR": {
                singular: "Carregando regras personalizadas"
              },
              "zh-CN": {
                singular: "正在加载自定义规则"
              }
            }
          }),
          rulesLoadingError: (0, _v205.translate)({
            singular: "Unable to load custom rules.",
            dictionary: {
              es: {
                singular: "No se pudieron cargar las reglas personalizadas."
              },
              "de-DE": {
                singular: "Benutzerdefinierte Regeln konnten nicht geladen werden."
              },
              "fr-FR": {
                singular: "Impossible de charger les règles personnalisées."
              },
              "ja-JP": {
                singular: "カスタムルールを読み込めませんでした."
              },
              "ko-KR": {
                singular: "사용자 지정 규칙을 불러올 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível carregar as regras personalizadas."
              },
              "zh-CN": {
                singular: "无法加载自定义规则."
              }
            }
          }),
          rulesSaveError: (0, _v205.translate)({
            singular: "Changes could not be saved.",
            dictionary: {
              es: {
                singular: "No se pudieron guardar los cambios."
              },
              "de-DE": {
                singular: "Änderungen konnten nicht gespeichert werden."
              },
              "fr-FR": {
                singular: "Les modifications n'ont pas pu être enregistrées."
              },
              "ja-JP": {
                singular: "変更を保存できませんでした."
              },
              "ko-KR": {
                singular: "변경 사항을 저장할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível salvar as alterações."
              },
              "zh-CN": {
                singular: "更改无法保存."
              }
            }
          }),
          limitsByFeatureTitle: (0, _v205.translate)({
            singular: "Limits by feature",
            dictionary: {
              es: {
                singular: "Límites por función"
              },
              "de-DE": {
                singular: "Grenzwerte nach Funktion"
              },
              "fr-FR": {
                singular: "Limites par fonctionnalité"
              },
              "ja-JP": {
                singular: "機能ごとの制限"
              },
              "ko-KR": {
                singular: "기능별 제한"
              },
              "pt-BR": {
                singular: "Limites por recurso"
              },
              "zh-CN": {
                singular: "各功能限制"
              }
            }
          }),
          limitsByFeatureDescription: (0, _v205.translate)({
            singular: "Each feature uses a limited number of words during processing. You can add more words, up to your account's maximum limit, but only the first entries within the processing limit are applied.",
            dictionary: {
              es: {
                singular: "Cada función utiliza un número limitado de palabras durante el procesamiento. Puedes añadir más palabras, hasta el límite máximo de tu cuenta, pero solo se aplican las primeras entradas dentro del límite de procesamiento."
              },
              "de-DE": {
                singular: "Jede Funktion verwendet während der Verarbeitung eine begrenzte Anzahl von Wörtern. Sie können bis zum maximalen Limit Ihres Kontos weitere Wörter hinzufügen, aber es werden nur die ersten Einträge innerhalb der Verarbeitungsgrenze berücksichtigt."
              },
              "fr-FR": {
                singular: "Chaque fonctionnalité utilise un nombre limité de mots lors du traitement. Vous pouvez ajouter davantage de mots, jusqu'à la limite maximale de votre compte, mais seules les premières entrées incluses dans la limite de traitement sont prises en compte."
              },
              "ja-JP": {
                singular: "各機能は処理中に使用する語数が制限されています。アカウントの最大上限まで語を追加できますが、処理の制限内で先頭にあるエントリのみが適用されます。"
              },
              "ko-KR": {
                singular: "각 기능은 처리 중에 제한된 수의 단어를 사용합니다. 계정의 최대 한도까지 단어를 추가할 수 있지만 처리 한도 내에서 앞에 있는 항목만 적용됩니다."
              },
              "pt-BR": {
                singular: "Cada recurso utiliza um número limitado de palavras durante o processamento. Você pode adicionar mais palavras, até o limite máximo da sua conta, mas apenas as primeiras entradas dentro do limite de processamento são aplicadas."
              },
              "zh-CN": {
                singular: "每项功能在处理时使用的词汇数量有限。您可以添加更多词汇，最多不超过您账户的最大限制，但只有位于处理限制范围内的前几条条目会被应用。"
              }
            }
          }),
          orderingExplanation: (0, _v205.translate)({
            singular: "Words are selected by order, top to bottom. To include or leave out specific words, reorder the list so the ones you want come first.",
            dictionary: {
              es: {
                singular: "Las palabras se seleccionan por orden, de arriba hacia abajo. Para incluir o excluir palabras específicas, reordene la lista para que las que desee aparezcan primero."
              },
              "de-DE": {
                singular: "Wörter werden der Reihenfolge nach von oben nach unten ausgewählt. Um bestimmte Wörter einzuschließen oder auszuschließen, ordnen Sie die Liste so um, dass die gewünschten Wörter zuerst stehen."
              },
              "fr-FR": {
                singular: "Les mots sont sélectionnés dans l’ordre, de haut en bas. Pour inclure ou exclure des mots spécifiques, réorganisez la liste de façon à ce que ceux que vous souhaitez viennent en tête."
              },
              "ja-JP": {
                singular: "単語は上から下の順に選択されます。特定の単語を含めるまたは除外するには、リストの順序を並べ替え、含めたい単語が先に来るようにしてください。"
              },
              "ko-KR": {
                singular: "단어는 위에서 아래 순서로 선택됩니다. 특정 단어를 포함하거나 제외하려면 목록의 순서를 변경하여 원하는 항목이 먼저 오도록 하세요."
              },
              "pt-BR": {
                singular: "As palavras são selecionadas por ordem, de cima para baixo. Para incluir ou excluir palavras específicas, reordene a lista para que as que você deseja venham primeiro."
              },
              "zh-CN": {
                singular: "词语按从上到下的顺序被选中。要包含或排除特定词语，请重新排序列表，使所需词语排在前面。"
              }
            }
          }),
          featureLimitsTableScrollLabel: (0, _v205.translate)({
            singular: "Feature limits table. Scroll horizontally to view all columns.",
            dictionary: {
              es: {
                singular: "Tabla de límites de funciones. Desplácese horizontalmente para ver todas las columnas."
              },
              "de-DE": {
                singular: "Tabelle der Funktionslimits. Scrollen Sie horizontal, um alle Spalten anzuzeigen."
              },
              "fr-FR": {
                singular: "Tableau des limites des fonctionnalités. Faites défiler horizontalement pour voir toutes les colonnes."
              },
              "ja-JP": {
                singular: "機能制限テーブル。すべての列を表示するには横にスクロールしてください。"
              },
              "ko-KR": {
                singular: "기능 제한 표입니다. 모든 열을 보려면 가로로 스크롤하십시오."
              },
              "pt-BR": {
                singular: "Tabela de limites de recursos. Role horizontalmente para ver todas as colunas."
              },
              "zh-CN": {
                singular: "功能限制表。水平滚动以查看所有列。"
              }
            }
          }),
          featureColumnLabel: (0, _v205.translate)({
            singular: "Feature",
            dictionary: {
              es: {
                singular: "Función"
              },
              "de-DE": {
                singular: "Funktion"
              },
              "fr-FR": {
                singular: "Fonctionnalité"
              },
              "ja-JP": {
                singular: "機能"
              },
              "ko-KR": {
                singular: "기능"
              },
              "pt-BR": {
                singular: "Recurso"
              },
              "zh-CN": {
                singular: "功能"
              }
            }
          }),
          featureNames: {
            autocaptioning: (0, _v205.translate)({
              singular: "Autocaptioning",
              dictionary: {
                es: {
                  singular: "Generación automática de subtítulos"
                },
                "de-DE": {
                  singular: "Automatische Untertitelung"
                },
                "fr-FR": {
                  singular: "Sous-titrage automatique"
                },
                "ja-JP": {
                  singular: "自動キャプション"
                },
                "ko-KR": {
                  singular: "자동 자막"
                },
                "pt-BR": {
                  singular: "Legendas automáticas"
                },
                "zh-CN": {
                  singular: "自动生成字幕"
                }
              }
            }),
            liveCaptioning: (0, _v205.translate)({
              singular: "Live captioning",
              dictionary: {
                es: {
                  singular: "Subtitulación en tiempo real"
                },
                "de-DE": {
                  singular: "Live-Untertitelung"
                },
                "fr-FR": {
                  singular: "Sous-titrage en direct"
                },
                "ja-JP": {
                  singular: "ライブキャプション"
                },
                "ko-KR": {
                  singular: "실시간 자막"
                },
                "pt-BR": {
                  singular: "Legendas ao vivo"
                },
                "zh-CN": {
                  singular: "实时字幕"
                }
              }
            }),
            subtitleTranslation: (0, _v205.translate)({
              singular: "Subtitle translation",
              dictionary: {
                es: {
                  singular: "Traducción de subtítulos"
                },
                "de-DE": {
                  singular: "Untertitelübersetzung"
                },
                "fr-FR": {
                  singular: "Traduction de sous-titres"
                },
                "ja-JP": {
                  singular: "字幕翻訳"
                },
                "ko-KR": {
                  singular: "자막 번역"
                },
                "pt-BR": {
                  singular: "Tradução de legendas"
                },
                "zh-CN": {
                  singular: "字幕翻译"
                }
              }
            }),
            liveCaptionTranslation: (0, _v205.translate)({
              singular: "Live caption translation",
              dictionary: {
                es: {
                  singular: "Traducción de subtítulos en tiempo real"
                },
                "de-DE": {
                  singular: "Live-Untertitelübersetzung"
                },
                "fr-FR": {
                  singular: "Traduction de sous-titres en direct"
                },
                "ja-JP": {
                  singular: "ライブキャプション翻訳"
                },
                "ko-KR": {
                  singular: "실시간 자막 번역"
                },
                "pt-BR": {
                  singular: "Tradução de legendas ao vivo"
                },
                "zh-CN": {
                  singular: "实时字幕翻译"
                }
              }
            }),
            dubbing: (0, _v205.translate)({
              singular: "Dubbing",
              dictionary: {
                es: {
                  singular: "Doblaje"
                },
                "de-DE": {
                  singular: "Synchronisation"
                },
                "fr-FR": {
                  singular: "Doublage"
                },
                "ja-JP": {
                  singular: "吹き替え"
                },
                "ko-KR": {
                  singular: "더빙"
                },
                "pt-BR": {
                  singular: "Dublagem"
                },
                "zh-CN": {
                  singular: "配音"
                }
              }
            })
          },
          notSupportedYet: (0, _v205.translate)({
            singular: "not supported yet",
            dictionary: {
              es: {
                singular: "todavía no es compatible"
              },
              "de-DE": {
                singular: "noch nicht unterstützt"
              },
              "fr-FR": {
                singular: "pas encore pris en charge"
              },
              "ja-JP": {
                singular: "まだサポートされていません"
              },
              "ko-KR": {
                singular: "아직 지원되지 않습니다"
              },
              "pt-BR": {
                singular: "ainda não é suportado"
              },
              "zh-CN": {
                singular: "尚不支持"
              }
            }
          }),
          processingLimit: _v0 => (0, _v205.translate)({
            count: _v0,
            singular: "{COUNT} word",
            plural: "{COUNT} words",
            replacements: {
              COUNT: _v0.toLocaleString()
            },
            dictionary: {
              es: {
                singular: "{COUNT} palabra",
                plural: "{COUNT} palabras"
              },
              "de-DE": {
                singular: "{COUNT} Wort",
                plural: "{COUNT} Wörter"
              },
              "fr-FR": {
                singular: "{COUNT} mot",
                plural: "{COUNT} mots"
              },
              "ja-JP": {
                singular: "{COUNT}語",
                plural: "{COUNT}語"
              },
              "ko-KR": {
                singular: "{COUNT}개의 단어",
                plural: "{COUNT}개의 단어"
              },
              "pt-BR": {
                singular: "{COUNT} palavra",
                plural: "{COUNT} palavras"
              },
              "zh-CN": {
                singular: "{COUNT} 个词",
                plural: "{COUNT} 个词"
              }
            }
          }),
          replacementsNewLanguage: (0, _v205.translate)({
            singular: "New language",
            dictionary: {
              es: {
                singular: "Nuevo idioma"
              },
              "de-DE": {
                singular: "Neue Sprache"
              },
              "fr-FR": {
                singular: "Nouvelle langue"
              },
              "ja-JP": {
                singular: "新しい言語"
              },
              "ko-KR": {
                singular: "새 언어"
              },
              "pt-BR": {
                singular: "Novo idioma"
              },
              "zh-CN": {
                singular: "新语言"
              }
            }
          })
        }), []);
      return (0, _v1.jsxs)(_v3.Flex, {
        width: "100%",
        maxWidth: (0, _v5.rem)(640),
        margin: "0 auto",
        flexDirection: "column",
        paddingBottom: (0, _v5.rem)(48),
        children: [(0, _v1.jsx)(_v6.SettingsPageContentHeader, {
          title: _v3.title,
          description: (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v3.description, " ", _v3.limitsSummary, " ", (0, _v1.jsx)(_v4.Link, {
              as: "button",
              type: "button",
              color: "text-primary",
              textDecoration: "underline",
              onClick: () => _v2(!0),
              children: _v3.learnMore
            })]
          }),
          notice: {
            status: "info",
            message: _v3.notice
          }
        }), (0, _v1.jsxs)(_v3.Flex, {
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v151, {
            ownerUserId: _v0,
            translations: _v3
          }), (0, _v1.jsx)(_v204, {
            ownerUserId: _v0,
            translations: _v3
          }), (0, _v1.jsx)(_v36, {
            ownerUserId: _v0,
            translations: _v3
          })]
        }), (0, _v1.jsx)(_v157, {
          isOpen: _v1,
          onClose: () => _v2(!1),
          translations: _v3
        })]
      });
    };
  var _v208 = _v0.i(0),
    _v209 = _v0.i(0),
    _v210 = _v0.i(0);
  _v0.s(["AccountDictionaryRoute", 0, ({
    ownerUserId: _v0
  }) => {
    let {
      settings: _v1,
      isLoadingResponse: _v2
    } = (0, _v209.useOrionSettings)();
    return _v2 ? (0, _v1.jsx)(_v46.Spinner, {}) : _v1.enable_account_wide_dictionary_management ? (0, _v1.jsx)(_v207, {
      ownerUserId: _v0
    }) : (0, _v1.jsx)(_v210.ErrorPage, {
      error: new _v208.ResourceNotFoundError()
    });
  }], 0);
}