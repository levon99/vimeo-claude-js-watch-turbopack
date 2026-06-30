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
    _v11 = _v0.i(0);
  async function _v12({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v10.measureLatency)("getTeamDataRetentionVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/videos?${(0, _v11.searchQueryString)(_v3)}&fields=${_v1.map(_v11.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18() {
    let {
        mutate: _v0
      } = (0, _v14.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/videos${(0, _v15.serializeQuery)(_v0)}`, _v12({
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
  }
  "true" === _v9.default.env.STORYBOOK && (0, _v15.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v17.useGctlConfig)();
    return (0, _v13.default)(_v2 ? `/teams/${_v2.where.userId}/data_retention/videos${(0, _v15.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v12({
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
    endpoint: "/teams/:userId/data_retention/videos",
    method: "GET"
  }), "true" === _v9.default.env.STORYBOOK && (0, _v15.assignMswData)(_v18, {
    endpoint: "/teams/:userId/data_retention/videos",
    method: "GET"
  }), "true" === _v9.default.env.STORYBOOK && (0, _v15.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v17.useGctlConfig)();
    return (0, _v16.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/teams/${_v2.where.userId}/data_retention/videos?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v12({
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
    endpoint: "/teams/:userId/data_retention/videos",
    method: "GET"
  });
  var _v19 = _v0.i(0);
  async function _v20({
    baseUrl: _v0,
    where: {
      userId: _v1,
      extensionId: _v2
    },
    ..._v3
  }) {
    return (0, _v10.measureLatency)("deleteTeamDataRetentionExtension", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/data_retention/extensions/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  async function _v21({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      extensionId: _v3
    },
    ..._v4
  }) {
    return (0, _v10.measureLatency)("patchTeamDataRetentionExtension", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/data_retention/extensions/${_v3}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v11.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  function _v22() {
    let {
        mutate: _v0
      } = (0, _v14.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/extensions/${_v0.where.extensionId}${(0, _v15.serializeQuery)(_v0)}`, _v20({
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
  function _v23() {
    let {
        mutate: _v0
      } = (0, _v14.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/extensions/${_v0.where.extensionId}${(0, _v15.serializeQuery)(_v0)}`, _v21({
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
  "true" === _v9.default.env.STORYBOOK && (0, _v15.assignMswData)(_v22, {
    endpoint: "/teams/:userId/data_retention/extensions/:extensionId",
    method: "DELETE"
  }), "true" === _v9.default.env.STORYBOOK && (0, _v15.assignMswData)(_v23, {
    endpoint: "/teams/:userId/data_retention/extensions/:extensionId",
    method: "PATCH"
  });
  var _v24 = _v0.i(0);
  async function _v25({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v10.measureLatency)("postTeamDataRetentionExtensions", "POST", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v3}/data_retention/extensions?fields=${_v1.map(_v11.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v11.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  function _v26() {
    let {
        mutate: _v0
      } = (0, _v14.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/data_retention/extensions${(0, _v15.serializeQuery)(_v0)}`, _v25({
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
  "true" === _v9.default.env.STORYBOOK && (0, _v15.assignMswData)(_v26, {
    endpoint: "/teams/:userId/data_retention/extensions",
    method: "POST"
  });
  var _v27 = _v0.i(0),
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
  let _v40 = ({
      row: _v0,
      onPopOverExtensionRemoveClick: _v1,
      onPopOverEditExtensionClick: _v2
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v35.TeamSettingsTableCell, {
        children: (0, _v1.jsxs)(_v27.Flex, {
          alignItems: "center",
          gap: "200",
          children: [(0, _v1.jsx)(_v36.Thumbnail, {
            image: _v0.video?.pictures?.sizes?.[0]?.link || _v6.EMPTY_THUMBNAIL_SRC
          }), (0, _v1.jsxs)(_v27.Flex, {
            flexFlow: "row",
            height: "100%",
            justifyContent: "left",
            overflow: "hidden",
            children: [_v0.videoExtension && (0, _v1.jsx)(_v33.Badge, {
              size: "sm",
              variant: "success",
              marginRight: (0, _v29.rem)(5),
              children: (0, _v1.jsx)(_v37.ShrinkableText, {
                variant: "body-sm",
                children: _v8.T.ClipScheduleExtended
              })
            }), (0, _v1.jsx)(_v37.ShrinkableText, {
              variant: "body-md",
              children: _v0.video.name
            })]
          })]
        })
      }), (0, _v1.jsx)(_v35.TeamSettingsTableCell, {
        overflow: "hidden",
        children: (0, _v1.jsx)(_v37.ShrinkableText, {
          variant: "body-md",
          children: _v0.dataRetentionPolicy?.title
        })
      }), (0, _v1.jsx)(_v35.TeamSettingsTableCell, {
        overflow: "hidden",
        children: (0, _v1.jsx)(_v37.ShrinkableText, {
          variant: "body-md",
          children: (0, _v39.formatDateToNeededLocale)({
            date: new Date(_v0.expiresOn)
          })
        })
      }), (0, _v1.jsx)(_v35.TeamSettingsTableCell, {
        justifyContent: "flex-end",
        children: (0, _v1.jsx)(_v38.ThreeDotsButton, {
          placement: "bottom-end",
          items: [{
            type: "button",
            content: (0, _v1.jsx)(_v34.Text, {
              variant: "body-xl",
              fontSize: "header-xs",
              children: _v8.T.ExtendSchedule
            }),
            callback: () => _v2(_v0.video.uri),
            idKey: 1,
            id: "extend-schedule-btn"
          }, ...(_v0.videoExtension ? [{
            type: "divider",
            idKey: 2
          }, {
            type: "button",
            content: (0, _v1.jsx)(_v34.Text, {
              variant: "body-xl",
              fontSize: "header-xs",
              color: "status-destructive-primary",
              children: _v8.T.RemoveExtension
            }),
            callback: () => _v1(_v0.video.uri),
            idKey: 3,
            id: "remove-extension-btn"
          }] : [])]
        })
      })]
    }),
    _v41 = [{
      title: _v8.T.VideoTitle,
      width: "53%"
    }, {
      title: _v8.T.PolicyName,
      width: "30%"
    }, {
      title: _v8.T.ExpiresOn,
      width: "17%"
    }, {
      title: "",
      width: (0, _v29.rem)(72)
    }],
    _v42 = ({
      list: _v0,
      pagination: _v1,
      shouldRenderPagination: _v2,
      onPopOverExtensionRemoveClick: _v3,
      onPopOverEditExtensionClick: _v4,
      toolBar: _v5,
      isLoading: _v6
    }) => {
      var _v7;
      return (0, _v1.jsx)(_v30.TeamSettingsTable, {
        columns: _v41,
        renderRow: ({
          row: _v0
        }) => _v0.video && (0, _v1.jsx)(_v40, {
          onPopOverExtensionRemoveClick: _v3,
          onPopOverEditExtensionClick: _v4,
          row: _v0
        }),
        pagination: _v2 ? _v1 : _v31.emptyPagination,
        rows: _v0,
        toolBar: _v5,
        placeholder: (_v7 = !_v0 || 0 === _v0.length, _v6 ? (0, _v1.jsx)(_v32.LoadSpinner, {}) : _v7 ? (0, _v1.jsx)(_v27.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: (0, _v1.jsx)(_v28.Paragraph, {
            children: _v8.T.NoClipsToBeExpired
          })
        }) : null)
      });
    };
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = ({
    userId: _v0,
    isLoading: _v1,
    clipsWithExtensionsOnly: _v2,
    onClipsWithExtensionsOnlyChange: _v3
  }) => (0, _v1.jsxs)(_v27.Flex, {
    justifyContent: "space-between",
    alignItems: "center",
    children: [(0, _v1.jsxs)(_v27.Flex, {
      alignItems: "center",
      gap: "200",
      paddingLeft: "75",
      children: [(0, _v1.jsx)(_v43.Switch, {
        size: "sm",
        id: "clips-with-extensions-checkbox",
        isDisabled: _v1,
        isChecked: _v2,
        onChange: _v3
      }), (0, _v1.jsx)(_v34.Text, {
        variant: "heading-xs",
        children: _v8.T.ShowClipsWithExtensions
      })]
    }), (0, _v1.jsx)(_v44.ExportCsvButton, {
      variant: "primary",
      disabled: _v1,
      uri: ((_v0, _v1) => {
        let {
          apiUrl: _v2,
          jwt: _v3
        } = (0, _v2.useContext)(_v45.ViewerContext);
        return `//${_v2}/teams/${_v1}/data_retention/videos/export?${"only_with_extensions=" + (_v0 ? "true" : "false")}&filter=csv&jwt_token=${_v3}`;
      })(_v2, _v0)
    })]
  });
  var _v47 = _v0.i(0),
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
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = _v61.object().shape({
      durationAmount: _v61.number().required().when(["durationUnits"], (_v0, _v1) => _v0 === _v6.DAYS ? _v1.min(7, _v8.T.PolicyMinMessage(7)) : _v1.min(1, _v8.T.DurationMustBePositive)).when(["durationUnits"], (_v0, _v1) => _v0 === _v6.YEARS ? _v1.max(50, _v8.T.PolicyMaxMessage) : _v0 === _v6.MONTHS ? _v1.max(600, _v8.T.PolicyMaxMessage) : _v1.max(0, _v8.T.PolicyMaxMessage)),
      durationUnits: _v61.string().oneOf([_v6.DAYS, _v6.MONTHS, _v6.YEARS])
    }),
    _v63 = [{
      value: _v6.DAYS,
      label: _v8.T.Days
    }, {
      value: _v6.MONTHS,
      label: _v8.T.Months
    }, {
      value: _v6.YEARS,
      label: _v8.T.Years
    }],
    _v64 = ({
      onChangeForm: _v0,
      prolongationPeriod: _v1
    }) => {
      let [_v2, _v3] = (0, _v2.useState)(_v1),
        [_v4, _v5] = (0, _v2.useState)(null),
        _v6 = _v0 => _v4?.path === _v0,
        _v7 = async () => {
          try {
            let _v0 = await _v62.validate(_v2);
            _v0(_v0), _v5(null);
          } catch (_v0) {
            _v5(_v0), _v0(null);
          }
        };
      return (0, _v1.jsxs)(_v56.Box, {
        marginBottom: "300",
        children: [(0, _v1.jsxs)(_v27.Flex, {
          children: [(0, _v1.jsx)(_v56.Box, {
            width: (0, _v29.rem)(101),
            marginRight: "200",
            children: (0, _v1.jsx)(_v60.Input, {
              isInvalid: _v6("durationAmount"),
              size: "sm",
              type: "text",
              value: _v2.durationAmount,
              onChange: _v0 => {
                let _v1 = parseInt(_v0.target.value);
                _v3({
                  ..._v2,
                  durationAmount: isNaN(_v1) ? 0 : _v1
                });
              },
              onBlur: _v7,
              maxLength: 5
            })
          }), (0, _v1.jsx)(_v56.Box, {
            width: (0, _v29.rem)(123),
            sx: {
              "& button": {
                height: "sm",
                borderColor: _v6("durationUnits") ? "status-destructive-primary" : void 0,
                minWidth: (0, _v29.rem)(100),
                span: {
                  paddingTop: (0, _v29.rem)(2)
                }
              }
            },
            children: (0, _v1.jsx)(_v58.Select, {
              name: "duration-units-select",
              id: "duration-units-select",
              size: "sm",
              value: [_v2.durationUnits],
              onValueChange: _v0 => {
                var _v1;
                return _v1 = _v0.value[0], void _v3({
                  ..._v2,
                  durationUnits: _v1
                });
              },
              onBlur: _v7,
              items: _v63
            })
          })]
        }), (0, _v1.jsx)(_v57.FormControl, {
          isInvalid: _v6("durationAmount") || _v6("durationUnits"),
          children: (0, _v1.jsx)(_v59.FormErrorMessage, {
            children: _v4?.message
          })
        })]
      });
    },
    _v65 = ({
      fieldName: _v0,
      content: _v1,
      hasMargin: _v2 = !0
    }) => (0, _v1.jsxs)(_v56.Box, {
      marginBottom: _v2 ? "300" : "0",
      children: [(0, _v1.jsx)(_v47.Header, {
        variant: "heading-xs",
        marginBottom: "75",
        size: "xl",
        children: _v0
      }), (0, _v1.jsx)(_v28.Paragraph, {
        variant: "body-md",
        color: "text-secondary",
        marginBottom: "75",
        children: _v1
      })]
    }),
    _v66 = ({
      isModalOpen: _v0,
      onModalClick: _v1,
      onModalClose: _v2,
      editExtensionLoading: _v3,
      clipPreviewElement: _v4,
      prolongationPeriod: _v5
    }) => {
      let {
        onConfirmModal: _v6,
        setProlongation: _v7,
        disabledConfirmButton: _v8,
        newExpDate: _v9
      } = (({
        onModalClick: _v0,
        prolongationPeriodDefault: _v1,
        clipPreviewElement: _v2
      }) => {
        let [_v3, _v4] = (0, _v2.useState)(_v1),
          [_v5, _v6] = (0, _v2.useState)(""),
          _v7 = !_v3?.durationAmount;
        return (0, _v2.useEffect)(() => {
          _v3 && _v2 ? _v6((0, _v39.formatDateToNeededLocale)({
            date: (0, _v39.addDays)(new Date(_v2.expiresOn), (0, _v39.dateToDays)(_v3))
          })) : _v6("");
        }, [_v3, _v2]), {
          onConfirmModal: () => {
            _v3 && _v2 && _v0((0, _v39.daysToSeconds)((0, _v39.dateToDays)(_v3)));
          },
          setProlongation: _v0 => _v4(_v0),
          disabledConfirmButton: _v7,
          newExpDate: _v5,
          setNewExpDate: _v6
        };
      })({
        onModalClick: _v1,
        prolongationPeriodDefault: _v5,
        clipPreviewElement: _v4
      });
      return (0, _v1.jsxs)(_v48.Modal, {
        size: "md",
        isOpen: _v0,
        onClose: () => void 0,
        children: [(0, _v1.jsx)(_v53.ModalOverlay, {}), (0, _v1.jsxs)(_v50.ModalContent, {
          children: [(0, _v1.jsxs)(_v52.ModalHeader, {
            position: "relative",
            children: [(0, _v1.jsx)(_v47.Header, {
              variant: "heading-md",
              size: "xl",
              children: _v8.T.ExtendSchedule
            }), (0, _v1.jsx)(_v55.ModalCloseButton, {
              onClick: () => _v2()
            })]
          }), (0, _v1.jsxs)(_v49.ModalBody, {
            paddingTop: "300",
            children: [(0, _v1.jsx)(_v65, {
              fieldName: _v8.T.VideoTitle,
              content: _v4?.video.name
            }), (0, _v1.jsx)(_v65, {
              fieldName: _v8.T.PolicyName,
              content: _v4?.dataRetentionPolicy?.title
            }), (0, _v1.jsx)(_v65, {
              fieldName: _v8.T.CurrentExpirationDate,
              content: _v4 ? (0, _v39.formatDateToNeededLocale)({
                date: new Date(_v4.expiresOn)
              }) : ""
            }), (0, _v1.jsx)(_v47.Header, {
              size: "xs",
              marginBottom: "200",
              children: _v8.T.ExtendClipDurationBy
            }), (0, _v1.jsx)(_v64, {
              prolongationPeriod: _v5,
              onChangeForm: _v7
            }), (0, _v1.jsx)(_v65, {
              fieldName: _v8.T.NewExpirationDate,
              content: _v9,
              hasMargin: !1
            })]
          }), (0, _v1.jsxs)(_v51.ModalFooter, {
            children: [(0, _v1.jsx)(_v54.Button, {
              variant: "secondary",
              onClick: () => _v2(),
              children: _v8.T.ModalHeaderButtonCancelText
            }), (0, _v1.jsx)(_v54.Button, {
              isLoading: _v3,
              variant: "primary",
              onClick: _v6,
              isDisabled: _v8,
              children: _v8.T.Confirm
            })]
          })]
        })]
      });
    },
    _v67 = ({
      isModalOpen: _v0,
      onModalClick: _v1,
      onModalClose: _v2,
      extensionRemoveLoading: _v3
    }) => (0, _v1.jsxs)(_v48.Modal, {
      size: "md",
      isOpen: _v0,
      onClose: () => void 0,
      children: [(0, _v1.jsx)(_v53.ModalOverlay, {}), (0, _v1.jsxs)(_v50.ModalContent, {
        children: [(0, _v1.jsxs)(_v52.ModalHeader, {
          position: "relative",
          children: [(0, _v1.jsxs)(_v47.Header, {
            size: "md",
            children: [" ", _v8.T.RemoveExtension]
          }), (0, _v1.jsx)(_v55.ModalCloseButton, {
            onClick: () => _v2()
          })]
        }), (0, _v1.jsx)(_v49.ModalBody, {
          children: (0, _v1.jsx)(_v28.Paragraph, {
            size: "md",
            children: _v8.T.RemoveExtensionModalText
          })
        }), (0, _v1.jsxs)(_v51.ModalFooter, {
          children: [(0, _v1.jsx)(_v54.Button, {
            variant: "secondary",
            onClick: () => _v2(),
            children: _v8.T.ModalHeaderButtonCancelText
          }), (0, _v1.jsx)(_v54.Button, {
            isLoading: _v3,
            variant: "destructive",
            onClick: () => _v1(),
            children: _v8.T.Remove
          })]
        })]
      })]
    });
  _v0.s(["default", 0, ({
    userId: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(null),
      [_v5, _v6] = (0, _v2.useState)(null),
      _v7 = (0, _v5.useToast)(),
      _v8 = _v0 => {
        _v7({
          duration: _v6.NOTIFICATION_DURATION,
          title: _v0
        });
      },
      {
        editExtensionModalOpen: _v9,
        deleteExtensionModalOpen: _v10,
        closeEditExtensionModal: _v11,
        closeDeleteExtensionModal: _v12,
        openEditExtensionModal: _v13,
        openDeleteExtensionModal: _v14
      } = (() => {
        let [_v0, _v1] = (0, _v2.useState)(!1),
          [_v2, _v3] = (0, _v2.useState)(!1);
        return {
          editExtensionModalOpen: _v0,
          deleteExtensionModalOpen: _v2,
          openEditExtensionModal: () => {
            _v1(!0);
          },
          openDeleteExtensionModal: () => {
            _v3(!0);
          },
          closeEditExtensionModal: () => {
            _v1(!1);
          },
          closeDeleteExtensionModal: () => {
            _v3(!1);
          }
        };
      })(),
      {
        dataRetentionVideosList: _v15,
        shouldRenderPagination: _v16,
        getPagination: _v17,
        resetList: _v18,
        fetchLoading: _v19
      } = (({
        userId: _v0,
        onlyWithExtensions: _v1
      }) => {
        let [_v2, _v3] = (0, _v2.useState)(1),
          [_v4, _v5] = (0, _v2.useState)(),
          [_v6, _v7] = _v18(),
          _v8 = _v7?.data,
          _v9 = (0, _v2.useRef)(_v6);
        _v9.current = _v6, (0, _v2.useEffect)(() => {
          let _v0 = _v8?.data;
          _v0?.length && _v5(_v0);
        }, [_v8?.data]);
        let _v10 = (0, _v2.useCallback)(() => {
          _v0 && _v9.current && _v9.current({
            select: ["video.uri", "video.name", "video.pictures.sizes.link", "dataRetentionPolicy.title", "dataRetentionPolicy.uri", "videoExtension", "expiresOn"],
            where: {
              userId: _v0
            },
            query: {
              page: _v2,
              perPage: _v19.DATA_RETENTION_PER_PAGE,
              onlyWithExtensions: _v1
            }
          });
        }, [_v0, _v2, _v1]);
        return (0, _v2.useEffect)(_v10, [_v2, _v10]), {
          dataRetentionVideosList: _v4,
          shouldRenderPagination: () => {
            let _v0 = _v8?.data,
              _v1 = _v8?.page || 0;
            return (_v0?.length || 0) >= _v19.DATA_RETENTION_PER_PAGE || _v1 > 1;
          },
          getPagination: () => {
            let _v0 = _v8 ? Math.ceil(_v8.total / _v19.DATA_RETENTION_PER_PAGE) : 0;
            return {
              page: _v8?.page || 0,
              totalPages: _v0,
              next: _v8?.paging?.next || "",
              previous: _v8?.paging?.previous || "",
              goToPageNumber: _v3
            };
          },
          resetList: (_v0 = !1) => {
            _v3(1), _v5([]), _v0 && _v10();
          },
          fetchLoading: _v7.loading
        };
      })({
        userId: _v0,
        onlyWithExtensions: _v1
      }),
      {
        deleteError: _v20,
        onDeleteExtension: _v21,
        deleteLoading: _v22
      } = (({
        userId: _v0,
        selectedClipPreviewForDelete: _v1,
        onDeleteExtensionSuccess: _v2
      }) => {
        let [_v3, _v4] = (0, _v2.useState)(!1),
          [_v5, _v6] = _v22(),
          [_v7, _v8] = (0, _v2.useState)(0);
        return (0, _v2.useEffect)(() => {
          let {
            loading: _v0,
            error: _v1,
            called: _v2,
            callCount: _v3
          } = _v6;
          _v4(!!_v1), !_v2 || _v0 || _v1 || _v3 === _v7 || (_v8(_v7 + 1), _v2());
        }, [_v2, _v6, _v1, _v7]), {
          deleteError: _v3,
          onDeleteExtension: () => {
            if (_v1) {
              let _v0 = (0, _v24.extensionUriToId)(_v1.videoExtension?.uri ?? void 0);
              _v0 && _v5({
                where: {
                  userId: _v0,
                  extensionId: _v0
                }
              });
            }
          },
          deleteLoading: _v6?.loading
        };
      })({
        userId: _v0,
        selectedClipPreviewForDelete: _v5,
        onDeleteExtensionSuccess: () => {
          _v8(_v8.T.ExtensionRemoved), _v12(), _v18(!0);
        }
      }),
      {
        editError: _v23,
        onEditExtension: _v24,
        editExtensionLoading: _v25
      } = (({
        userId: _v0,
        selectedClipPreviewForEdit: _v1,
        onEditExtensionSuccess: _v2
      }) => {
        let [_v3, _v4] = (0, _v2.useState)(!1),
          [_v5, _v6] = (0, _v2.useState)(0),
          [_v7, _v8] = (0, _v2.useState)(0),
          [_v9, _v10] = _v26(),
          [_v11, _v12] = _v23();
        return (0, _v2.useEffect)(() => {
          let {
            loading: _v0,
            error: _v1,
            called: _v2,
            data: _v3,
            callCount: _v4
          } = _v10;
          _v4(!!_v1), _v1 && _v2 && !_v0 && !_v1 && _v3 && _v4 !== _v5 && (_v6(_v5 + 1), _v2());
        }, [_v2, _v10, _v1, _v5]), (0, _v2.useEffect)(() => {
          let {
            loading: _v0,
            error: _v1,
            called: _v2,
            callCount: _v3
          } = _v12;
          _v4(!!_v1), !_v2 || _v0 || _v1 || _v3 === _v7 || (_v8(_v7 + 1), _v2());
        }, [_v2, _v7, _v12]), {
          editError: _v3,
          onEditExtension: _v0 => {
            if (!_v1) return;
            let _v1 = _v1.videoExtension && (0, _v24.extensionUriToId)(_v1.videoExtension.uri ?? void 0);
            if (_v1) _v11({
              where: {
                userId: _v0,
                extensionId: _v1
              },
              variables: {
                extendBy: _v1?.videoExtension?.extendBy ?? 0 + _v0
              }
            });else {
              let _v0 = (0, _v24.clipUriToId)(_v1.video.uri),
                _v1 = (0, _v24.policyUriToId)(_v1?.dataRetentionPolicy?.uri);
              _v0 && _v1 && _v9({
                where: {
                  userId: _v0
                },
                select: ["uri", "extendBy", "createdTime"],
                variables: {
                  objectType: "video",
                  objectId: _v0,
                  policyId: _v1,
                  extendBy: _v0
                }
              });
            }
          },
          editExtensionLoading: _v10?.loading || _v12?.loading
        };
      })({
        userId: _v0,
        selectedClipPreviewForEdit: _v3,
        onEditExtensionSuccess: () => {
          _v8(_v8.T.ClipScheduleExtended), _v11(), _v18(!0);
        }
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.SettingsPageContentHeader, {
        title: _v8.T.ClipExtension,
        description: _v8.T.ClipExtensionHeaderDescription
      }), (_v20 || _v23) && (0, _v1.jsx)(_v3.Alert, {
        status: "error",
        marginBottom: "md",
        children: (0, _v1.jsx)(_v4.AlertDescription, {
          marginTop: "xs",
          children: _v8.T.SomethingWentWrong
        })
      }), (0, _v1.jsx)(_v42, {
        list: _v15,
        pagination: _v17(),
        shouldRenderPagination: _v16(),
        onPopOverExtensionRemoveClick: _v0 => {
          if (_v15) {
            let _v0 = _v15.find(_v0 => _v0.video.uri === _v0);
            _v0 && (_v6(_v0), _v14());
          }
        },
        onPopOverEditExtensionClick: _v0 => {
          if (_v15) {
            let _v0 = _v15.find(_v0 => _v0.video.uri === _v0);
            _v0 && (_v4(_v0), _v13());
          }
        },
        toolBar: (0, _v1.jsx)(_v46, {
          userId: _v0,
          isLoading: _v19,
          clipsWithExtensionsOnly: _v1,
          onClipsWithExtensionsOnlyChange: () => {
            _v2(!_v1), _v18();
          }
        }),
        isLoading: _v19
      }), (0, _v1.jsx)(_v67, {
        isModalOpen: _v10,
        onModalClick: _v21,
        onModalClose: _v12,
        extensionRemoveLoading: _v22
      }), (0, _v1.jsx)(_v66, {
        prolongationPeriod: {
          durationAmount: 7,
          durationUnits: _v6.DAYS
        },
        clipPreviewElement: _v3,
        isModalOpen: _v9,
        onModalClick: _v24,
        onModalClose: _v11,
        editExtensionLoading: _v25
      })]
    });
  }], 0), _v0.s([], 0);
}