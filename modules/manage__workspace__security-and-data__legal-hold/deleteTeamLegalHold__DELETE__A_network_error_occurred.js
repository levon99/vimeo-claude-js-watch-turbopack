{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
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
  async function _v19({
    baseUrl: _v0,
    where: {
      userId: _v1,
      legalHoldId: _v2
    },
    ..._v3
  }) {
    return (0, _v17.measureLatency)("deleteTeamLegalHold", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/legal_hold/${_v2}`, {
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
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22() {
    let {
        mutate: _v0
      } = (0, _v20.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/legal_hold/${_v0.where.legalHoldId}${(0, _v16.serializeQuery)(_v0)}`, _v19({
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
  async function _v23({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v17.measureLatency)("getTeamLegalHolds", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/legal_holds?${(0, _v18.searchQueryString)(_v3)}&fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
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
  async function _v24({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v17.measureLatency)("postTeamLegalHolds", "POST", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/legal_holds`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v25({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v17.measureLatency)("deleteTeamLegalHolds", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v1}/legal_holds`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(_v22, {
    endpoint: "/teams/:userId/legal_hold/:legalHoldId",
    method: "DELETE"
  });
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  function _v28() {
    let {
        mutate: _v0
      } = (0, _v20.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/legal_holds${(0, _v16.serializeQuery)(_v0)}`, _v23({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v21.useGctlConfig)();
    return (0, _v26.default)(_v2 ? `/teams/${_v2.where.userId}/legal_holds${(0, _v16.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v23({
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
    endpoint: "/teams/:userId/legal_holds",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(_v28, {
    endpoint: "/teams/:userId/legal_holds",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v21.useGctlConfig)();
    return (0, _v27.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/teams/${_v2.where.userId}/legal_holds?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v23({
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
    endpoint: "/teams/:userId/legal_holds",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v21.useGctlConfig)(),
      [_v4, _v5] = (0, _v16.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v24({
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
    endpoint: "/teams/:userId/legal_holds",
    method: "POST"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v21.useGctlConfig)(),
      [_v4, _v5] = (0, _v16.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v25({
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
    endpoint: "/teams/:userId/legal_holds",
    method: "DELETE"
  });
  var _v29 = _v0.i(0),
    _v30 = ((_v1 = {}).Apply = "hold", _v1.Release = "release", _v1),
    _v31 = ((_v2 = {}).Get = "GET", _v2.Post = "POST", _v2.Delete = "DELETE", _v2),
    _v32 = ((_v3 = {})[_v3.CreatedOk = 201] = "CreatedOk", _v3[_v3.DeletedOk = 204] = "DeletedOk", _v3);
  let _v33 = /^https:\/\/vimeo\.com\/(\d+)(\/.+)?$/,
    _v34 = /^https:\/\/vimeo\.com\/manage\/videos\/(\d+)(\/.+)?$/,
    _v35 = /^https:\/\/vimeo\.com\/manage\/(\d+)\/advanced$/;
  (_v4 = {})[_v4.InvalidFile = 0] = "InvalidFile";
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  class _v46 extends Error {
    constructor(_v0) {
      super(_v0), this.message = _v0;
    }
    getMessage() {
      return this.message;
    }
  }
  let _v47 = async (_v0, _v1) => {
      let _v2 = new TextDecoder(),
        _v3 = _v0.stream().getReader(),
        _v4 = [],
        _v5 = await _v3.read().then(function _v0({
          done: _v1,
          value: _v2
        }) {
          if (_v1) return _v4;
          for (let _v0 of _v2.decode(_v2).split(/\r\n|\n/)) _v4.push(_v0.split(","));
          return _v3.read().then(_v0);
        }),
        _v6 = _v5.shift();
      if (_v6.some(_v0 => 0 > _v1.indexOf(_v0))) throw new _v46(_v13.T.InvalidCSVHeaderProvided);
      return _v5.map(_v0 => {
        if (_v0.length > _v6.length) throw new _v46(_v13.T.InvalidCSVProvided);
        let _v1 = (_v0 => {
          let _v1 = Number(_v0);
          if (!isNaN(_v1)) return _v1;
          for (let _v0 of [_v33, _v34, _v35]) {
            let _v0 = _v0.match(_v0);
            if (_v0) {
              _v1 = Number(_v0[1]);
              break;
            }
          }
          return isNaN(_v1) ? null : _v1;
        })(_v0[0]);
        return _v1 ? {
          object_type: "video",
          object_uri: "/videos/" + _v1
        } : null;
      }).filter(_v0 => null !== _v0);
    },
    _v48 = ({
      onDelete: _v0,
      createdTime: _v1,
      clip: {
        name: _v2,
        uri: _v3,
        pictures: _v4
      }
    }) => {
      let _v5 = (_v4?.sizes.length > 0 ? _v4?.sizes[0].link : _v4?.baseLink) || "https://vimeo.com/assets/images_v6/icons/icon_extend_v6_default.png?1650529706",
        _v6 = `https://vimeo.com/${_v3 ? parseInt(_v3.split("/")[2], 10) : 0}`,
        _v7 = (0, _v45.formatDateToNeededLocale)({
          date: new Date(_v1)
        });
      return (0, _v5.jsxs)(_v5.Fragment, {
        children: [(0, _v5.jsx)(_v41.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v5.jsxs)(_v9.Flex, {
            alignItems: "center",
            gap: "200",
            children: [(0, _v5.jsx)(_v42.Thumbnail, {
              image: _v5
            }), (0, _v5.jsx)(_v43.ShrinkableText, {
              variant: "body-md",
              children: _v2
            })]
          })
        }), (0, _v5.jsx)(_v41.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v5.jsx)(_v40.Link, {
            target: "_blank",
            href: _v6,
            variant: "primary",
            fontSize: "inherit",
            children: (0, _v5.jsx)(_v43.ShrinkableText, {
              variant: "body-md",
              children: _v6
            })
          })
        }), (0, _v5.jsx)(_v41.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v5.jsx)(_v43.ShrinkableText, {
            variant: "body-md",
            children: _v7
          })
        }), (0, _v5.jsx)(_v41.TeamSettingsTableCell, {
          children: (0, _v5.jsx)(_v44.ThreeDotsButton, {
            placement: "bottom-end",
            items: [{
              type: "button",
              content: (0, _v5.jsx)(_v39.Text, {
                variant: "body-xl",
                fontSize: "header-xs",
                children: _v13.T.RemoveFromLH
              }),
              callback: _v0,
              idKey: 1
            }]
          })
        })]
      });
    },
    _v49 = [{
      title: _v13.T.VideoName,
      width: "54%"
    }, {
      title: _v13.T.VideoUrl,
      width: "30%"
    }, {
      title: _v13.T.VideoUploadDate,
      width: "16%"
    }, {
      title: "",
      width: (0, _v36.rem)(72)
    }],
    _v50 = ({
      goToPageNumber: _v0,
      totalNoOfPages: _v1,
      legalHoldsWithVideos: _v2,
      legalHoldsResult: _v3,
      onDeleteClick: _v4,
      toolBar: _v5,
      placeholder: _v6
    }) => (0, _v5.jsx)(_v37.TeamSettingsTable, {
      columns: _v49,
      pagination: _v3 ? {
        page: _v3.page,
        totalPages: _v1,
        next: _v3.paging?.next || "",
        previous: _v3.paging?.previous || "",
        goToPageNumber: _v0
      } : _v38.emptyPagination,
      rows: _v2,
      defaultIndexKey: "objectUri",
      renderRow: ({
        row: _v0
      }) => (0, _v5.jsx)(_v48, {
        onDelete: () => _v4(Number(_v0.uri.split("/").pop())),
        ..._v0
      }),
      toolBar: _v5,
      placeholder: _v6
    });
  var _v51 = _v0.i(0),
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
  let _v62 = ({
    fetchLegalHoldsCallback: _v0,
    setCurrentPage: _v1,
    setNoticeMessage: _v2,
    setUploading: _v3,
    currentPage: _v4
  }) => {
    let {
        user: _v5,
        apiUrl: _v6,
        jwt: _v7,
        teamUser: _v8
      } = (0, _v6.useContext)(_v61.ViewerContext),
      [_v9, _v10] = (0, _v6.useState)(_v30.Apply),
      [_v11, _v12] = (0, _v6.useState)(!1),
      _v13 = (0, _v6.useRef)(null),
      _v14 = (0, _v6.useRef)(null),
      _v15 = (0, _v52.useToast)();
    (0, _v53.useOutsideClick)({
      enabled: _v11,
      ref: _v13,
      handler: _v0 => {
        _v14.current && _v0.target && (_v14.current == _v0.target || _v14.current?.contains(_v0.target)) || _v12(!1);
      }
    });
    let _v16 = _v8?.ownerId || _v5.id,
      _v17 = `//${_v6}/teams/${_v16}/legal_holds?jwt_token=${_v7}`,
      _v18 = `//${_v6}/teams/${_v16}/legal_hold/clips/export?jwt_token=${_v7}&filter=csv`,
      _v19 = _v9 === _v30.Apply,
      _v20 = _v9 === _v30.Release,
      _v21 = _v0 => {
        _v0.preventDefault();
        let {
          target: {
            files: _v1
          }
        } = _v0;
        _v1 && _v1.length > 0 && (_v12(!1), _v3(!0), _v47(_v1[0], ["video_url"]).then(_v0 => {
          fetch(`${_v17}`, {
            method: _v19 ? _v31.Post : _v31.Delete,
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(_v0)
          }).then(function (_v0) {
            if (!_v0.ok) throw Error(_v0.statusText);
            return _v0;
          }).then(_v0 => {
            let _v1 = _v19 ? _v32.CreatedOk : _v32.DeletedOk;
            if (_v0.status !== _v1) _v2(_v13.T.ReuploadFileError);else {
              let _v0 = _v20 ? 1 : _v4;
              _v0(_v0).then(() => {
                _v1(_v0), _v15({
                  variant: "success",
                  duration: 0,
                  title: _v19 ? _v13.T.LegalHoldApplied : _v13.T.LegalHoldRemoved
                });
              }), _v14.BigPictureClient.sendEvent(new _v14.Event("vimeo.legal_hold_event", 1, {
                name: _v20 ? "released" : "created",
                object_type: "video",
                objects_count: _v0.length,
                feature: "data_retention_policy"
              }));
            }
            _v3(!1);
          }).catch(() => {
            _v2(_v13.T.ReuploadFileError), _v3(!1);
          });
        }).catch(_v0 => {
          _v2(_v0 instanceof _v46 ? _v0.getMessage() : _v13.T.ReuploadFileError), _v3(!1);
        }));
      };
    return (0, _v5.jsxs)(_v9.Flex, {
      gap: "200",
      justifyContent: "flex-end",
      children: [(0, _v5.jsx)(_v51.Button, {
        as: "a",
        href: _v18,
        id: "download-csv-btn",
        variant: "tertiary",
        leftIcon: (0, _v5.jsx)(_v60.DownloadImport, {}),
        children: _v13.T.DownloadCsv
      }), (0, _v5.jsxs)(_v54.Popover, {
        isOpen: _v11,
        placement: "bottom-end",
        children: [(0, _v5.jsx)(_v58.Portal, {
          children: (0, _v5.jsxs)(_v56.PopoverContent, {
            ref: _v13,
            sx: {
              "& label": {
                width: "100%"
              }
            },
            children: [(0, _v5.jsx)(_v57.FileInput, {
              id: "legal-hold-apply-btn",
              variant: "minimal",
              onClick: () => {
                _v10(_v30.Apply);
              },
              onChange: _v21,
              label: _v13.T.ApplyLH,
              accept: ".csv"
            }, "apply"), (0, _v5.jsx)(_v57.FileInput, {
              id: "legal-hold-release-btn",
              variant: "minimal",
              onClick: () => {
                _v10(_v30.Release);
              },
              onChange: _v21,
              label: _v13.T.RemoveLH,
              accept: ".csv"
            }, "remove")]
          })
        }), (0, _v5.jsx)(_v55.PopoverTrigger, {
          children: (0, _v5.jsx)(_v51.Button, {
            ref: _v14,
            id: "upload-csv-btn",
            variant: "primary",
            rightIcon: (0, _v5.jsx)(_v59.ChevronDownSmall, {
              transform: _v11 ? "rotate(0)" : "rotate(180deg)",
              width: "xs",
              height: "xs"
            }),
            onClick: () => _v12(!_v11),
            children: _v13.T.UploadCsv
          })
        })]
      })]
    });
  };
  _v0.s(["default", 0, ({
    userId: _v0
  }) => {
    let [_v1, _v2] = (0, _v6.useState)(!1),
      [_v3, _v4] = (0, _v6.useState)(""),
      [_v5, _v6] = (0, _v6.useState)(!1),
      {
        totalNoOfPages: _v7,
        setCurrentPage: _v8,
        currentPage: _v9,
        legalHoldsWithVideos: _v10,
        getLegalHoldLoading: _v11,
        legalHolds: _v12,
        legalHoldsResult: _v13,
        fetchLegalHolds: _v14
      } = (({
        userId: _v0,
        setNoticeMessage: _v1
      }) => {
        let [_v2, _v3] = (0, _v6.useState)(1),
          [_v4, {
            error: _v5,
            data: _v6,
            loading: _v7
          }] = _v28(),
          [_v8, {
            error: _v9,
            data: _v10,
            loading: _v11
          }] = (0, _v29.useGetVideosLazy)(),
          _v12 = _v10?.data,
          _v13 = _v6?.data,
          _v14 = _v6 ? Math.ceil(_v6?.total / 8) : 0,
          _v15 = _v0 => _v0 && _v4 ? _v4({
            select: ["objectType", "objectUri", "uri", "createdTime"],
            where: {
              userId: _v0
            },
            query: {
              page: _v0,
              perPage: 8,
              filter: "video"
            }
          }) : Promise.resolve();
        (0, _v6.useEffect)(() => {
          _v15(_v2);
        }, []), (0, _v6.useEffect)(() => {
          _v13 && _v13.length > 0 && _v8({
            where: {
              userId: _v0
            },
            query: {
              uris: _v13.map(_v0 => _v0.objectUri).join(","),
              includeTeamContent: !0
            },
            select: ["pictures.sizes", "pictures.baseLink", "name", "uri"]
          });
        }, [_v13, _v8, _v0]);
        let _v16 = _v13 && _v0 && _v12 ? _v13.map((_v0, _v1) => ({
          ..._v0,
          clip: _v12[_v1]
        })).filter(_v0 => _v0.clip) : [];
        return (0, _v6.useEffect)(() => {
          (_v5 || _v9) && _v1(_v13.T.SomethingWrong);
        }, [_v5, _v1, _v9]), {
          totalNoOfPages: _v14,
          setCurrentPage: _v3,
          currentPage: _v2,
          legalHoldsWithVideos: _v16,
          legalHolds: _v13,
          getLegalHoldLoading: _v7 || _v11,
          legalHoldsResult: _v6,
          fetchLegalHolds: _v15
        };
      })({
        userId: _v0,
        setNoticeMessage: _v4
      }),
      {
        onDeleteClick: _v15,
        deleteLoading: _v16
      } = (({
        currentPage: _v0,
        setNoticeMessage: _v1,
        legalHolds: _v2,
        fetchLegalHolds: _v3,
        setCurrentPage: _v4
      }) => {
        let _v5 = (0, _v6.useRef)(0),
          [_v6, {
            error: _v7,
            callCount: _v8,
            loading: _v9
          }] = _v22();
        return (0, _v6.useEffect)(() => {
          _v7 && _v1(_v13.T.FailedToDeleteLH);
        }, [_v7, _v1]), (0, _v6.useEffect)(() => {
          if (_v5.current < _v8 && !_v9 && !_v7) {
            let _v0 = _v2 && 1 === _v2.length && _v0 > 1 ? _v0 - 1 : _v0;
            _v3(_v0), _v4(_v0), _v5.current = _v8;
          }
        }, [_v8, _v9, _v7]), {
          onDeleteClick: (_v0, _v1) => {
            _v0 ? _v6({
              where: {
                userId: _v0,
                legalHoldId: _v1
              }
            }).then(() => {
              _v14.BigPictureClient.sendEvent(new _v14.Event("vimeo.legal_hold_event", 1, {
                name: "released",
                object_type: "video",
                objects_count: 1,
                feature: "data_retention_policy"
              }));
            }) : _v1(_v13.T.FailedToDeleteLH || "Failed to delete legal hold");
          },
          deleteLoading: _v9
        };
      })({
        userId: _v0,
        currentPage: _v9,
        setNoticeMessage: _v4,
        legalHolds: _v12,
        fetchLegalHolds: _v14,
        setCurrentPage: _v8
      }),
      _v17 = !!(0 === _v10.length || !_v13);
    (0, _v6.useEffect)(() => {
      let _v0 = setTimeout(() => {
        _v6(_v1 || _v11 || _v16);
      }, 100);
      return () => {
        clearTimeout(_v0);
      };
    }, [_v16, _v11, _v1]);
    let _v18 = (0, _v6.useCallback)(_v0 => {
        _v15(_v0, _v0);
      }, [_v15, _v0]),
      _v19 = _v17 ? (0, _v5.jsx)(_v9.Flex, {
        flexDirection: "column",
        alignItems: "center",
        children: (0, _v5.jsx)(_v10.Paragraph, {
          children: _v13.T.NoClipsToBeExpired
        })
      }) : void 0;
    return _v0 ? (0, _v5.jsxs)("div", {
      children: [(0, _v5.jsx)(_v11.SettingsPageContentHeader, {
        title: _v13.T.LegalHold,
        description: _v13.T.LegalHoldDescription,
        notice: {
          status: "info",
          message: _v13.T.LegalHoldNotice
        }
      }), _v3.length > 0 && (0, _v5.jsx)(_v7.Alert, {
        status: "error",
        marginBottom: "200",
        onClose: () => _v4(""),
        children: (0, _v5.jsx)(_v8.AlertDescription, {
          marginTop: "50",
          children: _v3
        })
      }), (0, _v5.jsx)(_v50, {
        onDeleteClick: _v18,
        legalHoldsWithVideos: _v10,
        goToPageNumber: _v0 => {
          _v8(_v0), _v14(_v0);
        },
        legalHoldsResult: _v13,
        totalNoOfPages: _v7,
        toolBar: (0, _v5.jsx)(_v62, {
          setCurrentPage: _v8,
          fetchLegalHoldsCallback: _v14,
          currentPage: _v9,
          setNoticeMessage: _v4,
          setUploading: _v2
        }),
        placeholder: _v5 ? (0, _v5.jsx)(_v12.LoadSpinner, {}) : _v19
      })]
    }) : (0, _v5.jsxs)("div", {
      children: [(0, _v5.jsx)(_v11.SettingsPageContentHeader, {
        title: _v13.T.LegalHold,
        description: _v13.T.LegalHoldDescription
      }), (0, _v5.jsx)(_v7.Alert, {
        status: "error",
        marginBottom: "200",
        children: (0, _v5.jsx)(_v8.AlertDescription, {
          marginTop: "50",
          children: _v13.T.SomethingWentWrong
        })
      })]
    });
  }], 0), _v0.s([], 0);
}