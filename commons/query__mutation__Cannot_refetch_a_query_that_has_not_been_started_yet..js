{
  var _v3 = _v0.e && _v0.e.__spreadArray || function (_v0, _v1) {
      for (var _v2 = 0, _v3 = _v1.length, _v4 = _v0.length; _v2 < _v3; _v2++, _v4++) _v0[_v4] = _v1[_v2];
      return _v0;
    },
    _v4 = Object.create,
    _v5 = Object.defineProperty,
    _v6 = Object.defineProperties,
    _v7 = Object.getOwnPropertyDescriptor,
    _v8 = Object.getOwnPropertyDescriptors,
    _v9 = Object.getOwnPropertyNames,
    _v10 = Object.getOwnPropertySymbols,
    _v11 = Object.getPrototypeOf,
    _v12 = Object.prototype.hasOwnProperty,
    _v13 = Object.prototype.propertyIsEnumerable,
    _v14 = function (_v0, _v1, _v2) {
      return _v1 in _v0 ? _v5(_v0, _v1, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _v2
      }) : _v0[_v1] = _v2;
    },
    _v15 = function (_v0, _v1) {
      for (var _v2 in _v1 || (_v1 = {})) _v12.call(_v1, _v2) && _v14(_v0, _v2, _v1[_v2]);
      if (_v10) for (var _v3 = 0, _v4 = _v10(_v1); _v3 < _v4.length; _v3++) _v13.call(_v1, _v2 = _v4[_v3]) && _v14(_v0, _v2, _v1[_v2]);
      return _v0;
    },
    _v16 = function (_v0, _v1) {
      return _v6(_v0, _v8(_v1));
    },
    _v17 = function (_v0) {
      return _v5(_v0, "__esModule", {
        value: !0
      });
    },
    _v18 = function (_v0, _v1, _v2) {
      if (_v1 && "object" == typeof _v1 || "function" == typeof _v1) for (var _v3 = function (_v0) {
          _v12.call(_v0, _v0) || "default" === _v0 || _v5(_v0, _v0, {
            get: function () {
              return _v1[_v0];
            },
            enumerable: !(_v2 = _v7(_v1, _v0)) || _v2.enumerable
          });
        }, _v4 = 0, _v5 = _v9(_v1); _v4 < _v5.length; _v4++) _v3(_v5[_v4]);
      return _v0;
    },
    _v19 = function (_v0) {
      return _v18(_v17(_v5(null != _v0 ? _v4(_v11(_v0)) : {}, "default", _v0 && _v0.__esModule && "default" in _v0 ? {
        get: function () {
          return _v0.default;
        },
        enumerable: !0
      } : {
        value: _v0,
        enumerable: !0
      })), _v0);
    };
  _v17(_v2), function (_v0, _v1) {
    for (var _v2 in _v1) _v5(_v0, _v2, {
      get: _v1[_v2],
      enumerable: !0
    });
  }(_v2, {
    ApiProvider: function () {
      return _v49;
    },
    createApi: function () {
      return _v50;
    },
    reactHooksModule: function () {
      return _v43;
    },
    reactHooksModuleName: function () {
      return _v42;
    }
  });
  var _v20 = _v19(_v0.r(0)),
    _v21 = _v19(_v0.r(0)),
    _v22 = _v19(_v0.r(0)),
    _v23 = _v19(_v0.r(0)),
    _v24 = _v19(_v0.r(0)),
    _v25 = _v19(_v0.r(0));
  function _v26(_v0, _v1, _v2, _v3) {
    var _v4 = (0, _v25.useMemo)(function () {
        return {
          queryArgs: _v0,
          serialized: "object" == typeof _v0 ? _v1({
            queryArgs: _v0,
            endpointDefinition: _v2,
            endpointName: _v3
          }) : _v0
        };
      }, [_v0, _v1, _v2, _v3]),
      _v5 = (0, _v25.useRef)(_v4);
    return (0, _v25.useEffect)(function () {
      _v5.current.serialized !== _v4.serialized && (_v5.current = _v4);
    }, [_v4]), _v5.current.serialized === _v4.serialized ? _v5.current.queryArgs : _v0;
  }
  var _v27 = Symbol(),
    _v28 = _v19(_v0.r(0)),
    _v29 = _v19(_v0.r(0));
  function _v30(_v0) {
    var _v1 = (0, _v28.useRef)(_v0);
    return (0, _v28.useEffect)(function () {
      (0, _v29.shallowEqual)(_v1.current, _v0) || (_v1.current = _v0);
    }, [_v0]), (0, _v29.shallowEqual)(_v1.current, _v0) ? _v1.current : _v0;
  }
  var _v31,
    _v32,
    _v33 = _v19(_v0.r(0)),
    _v34 = WeakMap ? new WeakMap() : void 0,
    _v35 = function (_v0) {
      var _v1 = _v0.endpointName,
        _v2 = _v0.queryArgs,
        _v3 = "",
        _v4 = null == _v34 ? void 0 : _v34.get(_v2);
      if ("string" == typeof _v4) _v3 = _v4;else {
        var _v5 = JSON.stringify(_v2, function (_v0, _v1) {
          return (0, _v33.isPlainObject)(_v1) ? Object.keys(_v1).sort().reduce(function (_v0, _v1) {
            return _v0[_v1] = _v1[_v1], _v0;
          }, {}) : _v1;
        });
        (0, _v33.isPlainObject)(_v2) && (null == _v34 || _v34.set(_v2, _v5)), _v3 = _v5;
      }
      return _v1 + "(" + _v3 + ")";
    },
    _v36 = "u" > typeof window && window.document && window.document.createElement ? _v22.useLayoutEffect : _v22.useEffect,
    _v37 = function (_v0) {
      return _v0;
    },
    _v38 = function (_v0) {
      return _v0.isUninitialized ? _v16(_v15({}, _v0), {
        isUninitialized: !1,
        isFetching: !0,
        isLoading: void 0 === _v0.data,
        status: _v23.QueryStatus.pending
      }) : _v0;
    };
  function _v39(_v0) {
    return _v0.replace(_v0[0], _v0[0].toUpperCase());
  }
  function _v40(_v0) {
    for (var _v1 = [], _v2 = 1; _v2 < arguments.length; _v2++) _v1[_v2 - 1] = arguments[_v2];
    Object.assign.apply(Object, _v3([_v0], _v1));
  }
  (_v32 = _v31 || (_v31 = {})).query = "query", _v32.mutation = "mutation";
  var _v41 = _v19(_v0.r(0)),
    _v42 = Symbol(),
    _v43 = function (_v0) {
      var _v1 = void 0 === _v0 ? {} : _v0,
        _v2 = _v1.batch,
        _v3 = void 0 === _v2 ? _v41.batch : _v2,
        _v4 = _v1.useDispatch,
        _v5 = void 0 === _v4 ? _v41.useDispatch : _v4,
        _v6 = _v1.useSelector,
        _v7 = void 0 === _v6 ? _v41.useSelector : _v6,
        _v8 = _v1.useStore,
        _v9 = void 0 === _v8 ? _v41.useStore : _v8,
        _v10 = _v1.unstable__sideEffectsInRender,
        _v11 = void 0 !== _v10 && _v10;
      return {
        name: _v42,
        init: function (_v0, _v1, _v2) {
          var _v3 = function (_v0) {
              var _v1 = _v0.api,
                _v2 = _v0.moduleOptions,
                _v3 = _v2.batch,
                _v4 = _v2.useDispatch,
                _v5 = _v2.useSelector,
                _v6 = _v2.useStore,
                _v7 = _v0.serializeQueryArgs,
                _v8 = _v0.context,
                _v9 = _v2.unstable__sideEffectsInRender ? function (_v0) {
                  return _v0();
                } : _v22.useEffect;
              return {
                buildQueryHooks: function (_v0) {
                  var _v1 = function (_v0, _v1) {
                      var _v2 = void 0 === _v1 ? {} : _v1,
                        _v3 = _v2.refetchOnReconnect,
                        _v4 = _v2.refetchOnFocus,
                        _v5 = _v2.refetchOnMountOrArgChange,
                        _v6 = _v2.skip,
                        _v7 = _v2.pollingInterval,
                        _v8 = _v1.endpoints[_v0].initiate,
                        _v9 = _v4(),
                        _v10 = _v26(void 0 !== _v6 && _v6 ? _v23.skipToken : _v0, _v35, _v8.endpointDefinitions[_v0], _v0),
                        _v11 = _v30({
                          refetchOnReconnect: _v3,
                          refetchOnFocus: _v4,
                          pollingInterval: void 0 === _v7 ? 0 : _v7
                        }),
                        _v12 = (0, _v22.useRef)(!1),
                        _v13 = (0, _v22.useRef)(),
                        _v14 = _v13.current || {},
                        _v15 = _v14.queryCacheKey,
                        _v16 = _v14.requestId,
                        _v17 = !1;
                      _v15 && _v16 && (_v17 = !!_v9(_v1.internalActions.internal_probeSubscription({
                        queryCacheKey: _v15,
                        requestId: _v16
                      })));
                      var _v18 = !_v17 && _v12.current;
                      return _v9(function () {
                        _v12.current = _v17;
                      }), _v9(function () {
                        _v18 && (_v13.current = void 0);
                      }, [_v18]), _v9(function () {
                        var _v0,
                          _v1 = _v13.current;
                        if (_v10 === _v23.skipToken) return null == _v1 || _v1.unsubscribe(), void (_v13.current = void 0);
                        var _v2 = null == (_v0 = _v13.current) ? void 0 : _v0.subscriptionOptions;
                        _v1 && _v1.arg === _v10 ? _v11 !== _v2 && _v1.updateSubscriptionOptions(_v11) : (null == _v1 || _v1.unsubscribe(), _v13.current = _v9(_v8(_v10, {
                          subscriptionOptions: _v11,
                          forceRefetch: _v5
                        })));
                      }, [_v9, _v8, _v5, _v10, _v11, _v18]), (0, _v22.useEffect)(function () {
                        return function () {
                          var _v0;
                          null == (_v0 = _v13.current) || _v0.unsubscribe(), _v13.current = void 0;
                        };
                      }, []), (0, _v22.useMemo)(function () {
                        return {
                          refetch: function () {
                            var _v0;
                            if (!_v13.current) throw Error("Cannot refetch a query that has not been started yet.");
                            return null == (_v0 = _v13.current) ? void 0 : _v0.refetch();
                          }
                        };
                      }, []);
                    },
                    _v2 = function (_v0) {
                      var _v1 = void 0 === _v0 ? {} : _v0,
                        _v2 = _v1.refetchOnReconnect,
                        _v3 = _v1.refetchOnFocus,
                        _v4 = _v1.pollingInterval,
                        _v5 = _v1.endpoints[_v0].initiate,
                        _v6 = _v4(),
                        _v7 = (0, _v22.useState)(_v27),
                        _v8 = _v7[0],
                        _v9 = _v7[1],
                        _v10 = (0, _v22.useRef)(),
                        _v11 = _v30({
                          refetchOnReconnect: _v2,
                          refetchOnFocus: _v3,
                          pollingInterval: void 0 === _v4 ? 0 : _v4
                        });
                      _v9(function () {
                        var _v0, _v1;
                        _v11 !== (null == (_v0 = _v10.current) ? void 0 : _v0.subscriptionOptions) && (null == (_v1 = _v10.current) || _v1.updateSubscriptionOptions(_v11));
                      }, [_v11]);
                      var _v12 = (0, _v22.useRef)(_v11);
                      _v9(function () {
                        _v12.current = _v11;
                      }, [_v11]);
                      var _v13 = (0, _v22.useCallback)(function (_v0, _v1) {
                        var _v2;
                        return void 0 === _v1 && (_v1 = !1), _v3(function () {
                          var _v0;
                          null == (_v0 = _v10.current) || _v0.unsubscribe(), _v10.current = _v2 = _v6(_v5(_v0, {
                            subscriptionOptions: _v12.current,
                            forceRefetch: !_v1
                          })), _v9(_v0);
                        }), _v2;
                      }, [_v6, _v5]);
                      return (0, _v22.useEffect)(function () {
                        return function () {
                          var _v0;
                          null == (_v0 = null == _v10 ? void 0 : _v10.current) || _v0.unsubscribe();
                        };
                      }, []), (0, _v22.useEffect)(function () {
                        _v8 === _v27 || _v10.current || _v13(_v8, !0);
                      }, [_v8, _v13]), (0, _v22.useMemo)(function () {
                        return [_v13, _v8];
                      }, [_v13, _v8]);
                    },
                    _v3 = function (_v0, _v1) {
                      var _v2 = void 0 === _v1 ? {} : _v1,
                        _v3 = _v2.skip,
                        _v4 = _v2.selectFromResult,
                        _v5 = _v1.endpoints[_v0].select,
                        _v6 = _v26(void 0 !== _v3 && _v3 ? _v23.skipToken : _v0, _v7, _v8.endpointDefinitions[_v0], _v0),
                        _v7 = (0, _v22.useRef)(),
                        _v8 = (0, _v22.useMemo)(function () {
                          return (0, _v21.createSelector)([_v5(_v6), function (_v0, _v1) {
                            return _v1;
                          }, function (_v0) {
                            return _v6;
                          }], _v10);
                        }, [_v5, _v6]),
                        _v9 = (0, _v22.useMemo)(function () {
                          return _v4 ? (0, _v21.createSelector)([_v8], _v4) : _v8;
                        }, [_v8, _v4]),
                        _v10 = _v5(function (_v0) {
                          return _v9(_v0, _v7.current);
                        }, _v24.shallowEqual),
                        _v11 = _v8(_v6().getState(), _v7.current);
                      return _v36(function () {
                        _v7.current = _v11;
                      }, [_v11]), _v10;
                    };
                  return {
                    useQueryState: _v3,
                    useQuerySubscription: _v1,
                    useLazyQuerySubscription: _v2,
                    useLazyQuery: function (_v0) {
                      var _v1 = _v2(_v0),
                        _v2 = _v1[0],
                        _v3 = _v1[1],
                        _v4 = _v3(_v3, _v16(_v15({}, _v0), {
                          skip: _v3 === _v27
                        })),
                        _v5 = (0, _v22.useMemo)(function () {
                          return {
                            lastArg: _v3
                          };
                        }, [_v3]);
                      return (0, _v22.useMemo)(function () {
                        return [_v2, _v4, _v5];
                      }, [_v2, _v4, _v5]);
                    },
                    useQuery: function (_v0, _v1) {
                      var _v2 = _v1(_v0, _v1),
                        _v3 = _v3(_v0, _v15({
                          selectFromResult: _v0 === _v23.skipToken || (null == _v1 ? void 0 : _v1.skip) ? void 0 : _v38
                        }, _v1));
                      return (0, _v22.useDebugValue)({
                        data: _v3.data,
                        status: _v3.status,
                        isLoading: _v3.isLoading,
                        isSuccess: _v3.isSuccess,
                        isError: _v3.isError,
                        error: _v3.error
                      }), (0, _v22.useMemo)(function () {
                        return _v15(_v15({}, _v3), _v2);
                      }, [_v3, _v2]);
                    }
                  };
                },
                buildMutationHook: function (_v0) {
                  return function (_v0) {
                    var _v1 = void 0 === _v0 ? {} : _v0,
                      _v2 = _v1.selectFromResult,
                      _v3 = void 0 === _v2 ? _v37 : _v2,
                      _v4 = _v1.fixedCacheKey,
                      _v5 = _v1.endpoints[_v0],
                      _v6 = _v5.select,
                      _v7 = _v5.initiate,
                      _v8 = _v4(),
                      _v9 = (0, _v22.useState)(),
                      _v10 = _v9[0],
                      _v11 = _v9[1];
                    (0, _v22.useEffect)(function () {
                      return function () {
                        (null == _v10 ? void 0 : _v10.arg.fixedCacheKey) || null == _v10 || _v10.reset();
                      };
                    }, [_v10]);
                    var _v12 = (0, _v22.useCallback)(function (_v0) {
                        var _v1 = _v8(_v7(_v0, {
                          fixedCacheKey: _v4
                        }));
                        return _v11(_v1), _v1;
                      }, [_v8, _v7, _v4]),
                      _v13 = (_v10 || {}).requestId,
                      _v14 = _v5((0, _v22.useMemo)(function () {
                        return (0, _v21.createSelector)([_v6({
                          fixedCacheKey: _v4,
                          requestId: null == _v10 ? void 0 : _v10.requestId
                        })], _v3);
                      }, [_v6, _v10, _v3, _v4]), _v24.shallowEqual),
                      _v15 = null == _v4 ? null == _v10 ? void 0 : _v10.arg.originalArgs : void 0,
                      _v16 = (0, _v22.useCallback)(function () {
                        _v3(function () {
                          _v10 && _v11(void 0), _v4 && _v8(_v1.internalActions.removeMutationResult({
                            requestId: _v13,
                            fixedCacheKey: _v4
                          }));
                        });
                      }, [_v8, _v4, _v10, _v13]);
                    (0, _v22.useDebugValue)({
                      endpointName: _v14.endpointName,
                      data: _v14.data,
                      status: _v14.status,
                      isLoading: _v14.isLoading,
                      isSuccess: _v14.isSuccess,
                      isError: _v14.isError,
                      error: _v14.error
                    });
                    var _v17 = (0, _v22.useMemo)(function () {
                      return _v16(_v15({}, _v14), {
                        originalArgs: _v15,
                        reset: _v16
                      });
                    }, [_v14, _v15, _v16]);
                    return (0, _v22.useMemo)(function () {
                      return [_v12, _v17];
                    }, [_v12, _v17]);
                  };
                },
                usePrefetch: function (_v0, _v1) {
                  var _v2 = _v4(),
                    _v3 = _v30(_v1);
                  return (0, _v22.useCallback)(function (_v0, _v1) {
                    return _v2(_v1.util.prefetch(_v0, _v0, _v15(_v15({}, _v3), _v1)));
                  }, [_v0, _v2, _v3]);
                }
              };
              function _v10(_v0, _v1, _v2) {
                if ((null == _v1 ? void 0 : _v1.endpointName) && _v0.isUninitialized) {
                  var _v3 = _v1.endpointName,
                    _v4 = _v8.endpointDefinitions[_v3];
                  _v7({
                    queryArgs: _v1.originalArgs,
                    endpointDefinition: _v4,
                    endpointName: _v3
                  }) === _v7({
                    queryArgs: _v2,
                    endpointDefinition: _v4,
                    endpointName: _v3
                  }) && (_v1 = void 0);
                }
                var _v5 = _v0.isSuccess ? _v0.data : null == _v1 ? void 0 : _v1.data;
                void 0 === _v5 && (_v5 = _v0.data);
                var _v6 = void 0 !== _v5,
                  _v7 = _v0.isLoading,
                  _v8 = !_v6 && _v7,
                  _v9 = _v0.isSuccess || _v7 && _v6;
                return _v16(_v15({}, _v0), {
                  data: _v5,
                  currentData: _v0.data,
                  isFetching: _v7,
                  isLoading: _v8,
                  isSuccess: _v9
                });
              }
            }({
              api: _v0,
              moduleOptions: {
                batch: _v3,
                useDispatch: _v5,
                useSelector: _v7,
                useStore: _v9,
                unstable__sideEffectsInRender: _v11
              },
              serializeQueryArgs: _v1.serializeQueryArgs,
              context: _v2
            }),
            _v4 = _v3.buildQueryHooks,
            _v5 = _v3.buildMutationHook;
          return _v40(_v0, {
            usePrefetch: _v3.usePrefetch
          }), _v40(_v2, {
            batch: _v3
          }), {
            injectEndpoint: function (_v0, _v1) {
              if (_v1.type === _v31.query) {
                var _v2 = _v4(_v0),
                  _v3 = _v2.useQuery,
                  _v4 = _v2.useLazyQuery;
                _v40(_v0.endpoints[_v0], {
                  useQuery: _v3,
                  useLazyQuery: _v4,
                  useLazyQuerySubscription: _v2.useLazyQuerySubscription,
                  useQueryState: _v2.useQueryState,
                  useQuerySubscription: _v2.useQuerySubscription
                }), _v0["use" + _v39(_v0) + "Query"] = _v3, _v0["useLazy" + _v39(_v0) + "Query"] = _v4;
              } else if (_v1.type === _v31.mutation) {
                var _v5 = _v5(_v0);
                _v40(_v0.endpoints[_v0], {
                  useMutation: _v5
                }), _v0["use" + _v39(_v0) + "Mutation"] = _v5;
              }
            }
          };
        }
      };
    };
  _v18(_v2, _v19(_v0.r(0)));
  var _v44 = _v19(_v0.r(0)),
    _v45 = _v19(_v0.r(0)),
    _v46 = _v19(_v0.r(0)),
    _v47 = _v19(_v0.r(0)),
    _v48 = _v19(_v0.r(0));
  function _v49(_v0) {
    var _v1 = _v46.default.useState(function () {
      var _v0;
      return (0, _v44.configureStore)({
        reducer: ((_v0 = {})[_v0.api.reducerPath] = _v0.api.reducer, _v0),
        middleware: function (_v0) {
          return _v0().concat(_v0.api.middleware);
        }
      });
    })[0];
    return (0, _v45.useEffect)(function () {
      return !1 === _v0.setupListeners ? void 0 : (0, _v48.setupListeners)(_v1.dispatch, _v0.setupListeners);
    }, [_v0.setupListeners, _v1.dispatch]), _v46.default.createElement(_v47.Provider, {
      store: _v1,
      context: _v0.context
    }, _v0.children);
  }
  var _v50 = (0, _v20.buildCreateApi)((0, _v20.coreModule)(), _v43());
}