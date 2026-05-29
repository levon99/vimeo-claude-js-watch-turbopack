{
  "use strict";

  _v0.s([], 0), _v0.s(["HistoryPage", () => _v58], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v9.measureLatency)("postVideoRestoreAll", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/restore-all`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.userId}/restore-all${(0, _v8.serializeQuery)(_v0)}`, _v11({
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
  "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(_v14, {
    endpoint: "/videos/:userId/restore-all",
    method: "POST"
  });
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  async function _v21({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v9.measureLatency)("getUserVideosDeleted", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/videos/deleted?${(0, _v10.searchQueryString)(_v3)}&fields=${_v1.map(_v10.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/videos/deleted${(0, _v8.serializeQuery)(_v0)}`, _v21({
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
  "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v22.default)(_v2 ? `/users/${_v2.where.userId}/videos/deleted${(0, _v8.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v21({
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
    endpoint: "/users/:userId/videos/deleted",
    method: "GET"
  }), "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(_v24, {
    endpoint: "/users/:userId/videos/deleted",
    method: "GET"
  }), "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v13.useGctlConfig)();
    return (0, _v23.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/videos/deleted?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v21({
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
    endpoint: "/users/:userId/videos/deleted",
    method: "GET"
  });
  let _v25 = "recoverable",
    _v26 = "unrecoverable",
    _v27 = {
      failedList: _v19.T.FailedList,
      failedRecover: _v19.T.FailedRecover,
      videoRecovered: _v19.T.ClipRecovered
    },
    _v28 = {
      totalPages: 0,
      page: 1,
      next: "",
      previous: ""
    },
    _v29 = ({
      showNotification: _v0
    }) => {
      let [_v1, {
          error: _v2,
          data: _v3,
          loading: _v4
        }] = _v24(),
        [_v5, _v6] = (0, _v2.useState)([]),
        [_v7, _v8] = (0, _v2.useState)(_v28),
        _v9 = () => _v6([]);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v3?.data;
        _v8(_v3 && !_v2 ? {
          totalPages: Math.ceil(_v3.total / _v3.perPage),
          page: _v3.page || 1,
          next: _v3.paging.next || "",
          previous: _v3.paging.previous || ""
        } : _v28), _v6(_v0 && !_v2 ? _v0 : []);
      }, [_v3, _v2, _v6, _v8]), (0, _v2.useEffect)(() => {
        _v2 && _v0(_v27.failedList);
      }, [_v2]), {
        getDeletedVideos: ({
          page: _v0 = 1,
          recoveryStatus: _v1,
          dateFrom: _v2,
          dateTo: _v3,
          userId: _v4
        }) => (_v9(), _v1({
          select: ["videoId", "thumbnailUrl", "deletedOn", "reasonName", "title", "uploaderName"],
          where: {
            userId: _v4
          },
          query: {
            dateTo: _v3,
            dateFrom: _v2,
            page: _v0,
            reason: "data_retention",
            perPage: 8,
            filter: _v1
          }
        })),
        error: _v2,
        data: _v5,
        loading: _v4,
        cleanResultData: _v9,
        pagination: {
          ..._v7,
          goToPageNumber: _v0 => _v8(_v0 => ({
            ..._v0,
            page: _v0
          }))
        }
      };
    };
  var _v30 = _v0.i(0);
  async function _v31({
    baseUrl: _v0,
    variables: _v1,
    ..._v2
  }) {
    return (0, _v9.measureLatency)("postVideosRestore", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/restore`, {
        ..._v2,
        method: "POST",
        body: JSON.stringify((0, _v10.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  function _v32() {
    let {
        mutate: _v0
      } = (0, _v12.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v13.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/restore${(0, _v8.serializeQuery)(_v0)}`, _v31({
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
  "true" === _v7.default.env.STORYBOOK && (0, _v8.assignMswData)(_v32, {
    endpoint: "/videos/restore",
    method: "POST"
  });
  let _v33 = (_v0, _v1) => !!_v0 && !!_v1 && _v0.getFullYear() === _v1.getFullYear() && _v0.getMonth() === _v1.getMonth() && _v0.getDate() === _v1.getDate();
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = ({
      thumbnailUrl: _v0,
      title: _v1,
      reasonName: _v2,
      uploaderName: _v3,
      deletedOn: _v4,
      onPopOverClick: _v5,
      isRecoveredStatus: _v6,
      videoId: _v7,
      loadingVideoId: _v8
    }) => {
      let _v9 = _v0 || _v15.EMPTY_THUMBNAIL_SRC;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v38.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: "200",
            children: [(0, _v1.jsx)(_v37.Thumbnail, {
              image: _v9
            }), (0, _v1.jsx)(_v39.ShrinkableText, {
              variant: "body-md",
              children: _v1
            })]
          })
        }), (0, _v1.jsx)(_v38.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v39.ShrinkableText, {
            variant: "body-md",
            children: _v2
          })
        }), (0, _v1.jsx)(_v38.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v39.ShrinkableText, {
            variant: "body-md",
            children: _v3
          })
        }), (0, _v1.jsx)(_v38.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v39.ShrinkableText, {
            variant: "body-md",
            children: (0, _v18.formatDateToNeededLocale)({
              date: new Date(_v4)
            })
          })
        }), _v6 && (0, _v1.jsx)(_v38.TeamSettingsTableCell, {
          textAlign: "right",
          children: (0, _v1.jsx)(_v36.Button, {
            maxWidth: "100%",
            variant: "secondary",
            className: "recover-video-btn",
            isLoading: _v8 === _v7,
            isDisabled: !!(_v8 && _v8 !== _v7),
            onClick: () => {
              _v5(_v7);
            },
            children: (0, _v1.jsx)(_v39.ShrinkableText, {
              variant: "heading-xs",
              children: _v19.T.RecoverVideo
            })
          })
        })]
      });
    },
    _v41 = [{
      title: _v19.T.VideoTitle,
      width: "43%"
    }, {
      title: _v19.T.PolicyName,
      width: "28%"
    }, {
      title: _v19.T.Uploader,
      width: "15%"
    }, {
      title: _v19.T.DeletedOn,
      width: "14%"
    }],
    _v42 = ({
      onPopOverClick: _v0,
      loadingVideoId: _v1,
      list: _v2,
      isRecoveredStatus: _v3,
      pagination: _v4,
      toolBar: _v5,
      placeholder: _v6
    }) => {
      let _v7 = (0, _v2.useMemo)(() => _v3 ? _v41.concat({
        title: "",
        width: (0, _v34.rem)(118)
      }) : _v41, [_v3]);
      return (0, _v1.jsx)(_v35.TeamSettingsTable, {
        columns: _v7,
        pagination: _v4,
        rows: _v2,
        defaultIndexKey: "videoId",
        renderRow: ({
          row: _v0
        }) => (0, _v1.jsx)(_v40, {
          loadingVideoId: _v1,
          isRecoveredStatus: _v3,
          onPopOverClick: _v0,
          ..._v0
        }),
        placeholder: _v6,
        toolBar: _v5
      });
    };
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = ({
    isModalOpen: _v0,
    onModalClick: _v1,
    onModalClose: _v2
  }) => (0, _v1.jsxs)(_v43.Modal, {
    size: "md",
    isOpen: _v0,
    onClose: () => void 0,
    children: [(0, _v1.jsx)(_v48.ModalOverlay, {}), (0, _v1.jsxs)(_v45.ModalContent, {
      children: [(0, _v1.jsxs)(_v47.ModalHeader, {
        position: "relative",
        children: [(0, _v1.jsx)(_v4.Header, {
          size: "md",
          children: _v19.T.RecoverVideo
        }), (0, _v1.jsx)(_v49.ModalCloseButton, {
          onClick: () => _v2()
        })]
      }), (0, _v1.jsx)(_v44.ModalBody, {
        children: (0, _v1.jsx)(_v5.Paragraph, {
          size: "md",
          children: _v19.T.ModalText
        })
      }), (0, _v1.jsxs)(_v46.ModalFooter, {
        children: [(0, _v1.jsx)(_v36.Button, {
          variant: "secondary",
          onClick: () => _v2(),
          children: _v19.T.ModalHeaderButtonCancelText
        }), (0, _v1.jsx)(_v36.Button, {
          variant: "primary",
          onClick: () => _v1(),
          children: _v19.T.ModalHeaderButtonAcceptText
        })]
      })]
    })]
  });
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = ({
      setRecoveredStatus: _v0,
      isRecoveredStatus: _v1,
      exportUri: _v2,
      isListEmpty: _v3,
      onDateChange: _v4,
      dateRange: _v5,
      onRecoverAllClick: _v6,
      recovering: _v7
    }) => {
      let _v8 = (0, _v18.getDateMinusCurrent)(30);
      return (0, _v1.jsxs)(_v3.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v52.Tabs, {
          variant: "inlay",
          onChange: _v0 => {
            _v0(0 === _v0);
          },
          sx: {
            "& button": {
              paddingX: 200,
              whiteSpace: "nowrap",
              fontSize: "body-md"
            }
          },
          children: (0, _v1.jsxs)(_v53.TabList, {
            children: [(0, _v1.jsx)(_v51.Tab, {
              children: _v19.T.LastThirtyDays
            }), (0, _v1.jsx)(_v51.Tab, {
              children: _v19.T.PastThirtyDays
            }), (0, _v1.jsx)(_v52.TabIndicator, {})]
          })
        }), _v1 ? (0, _v1.jsxs)(_v3.Flex, {
          gap: "200",
          children: [(0, _v1.jsx)(_v36.Button, {
            variant: "primary",
            onClick: _v6,
            isDisabled: _v3 || _v7,
            children: _v7 ? _v19.T.RecoveringAllVideos : _v19.T.RecoverAll
          }), (0, _v1.jsx)(_v54.ExportCsvButton, {
            disabled: _v3,
            variant: "primary",
            uri: _v2
          })]
        }) : (0, _v1.jsxs)(_v3.Flex, {
          gap: "md",
          children: [(0, _v1.jsx)(_v55.RangePicker, {
            value: _v5,
            onDateChange: _v4,
            maxDate: _v8,
            defaultButtonText: _v19.T.SelectDate
          }), (0, _v1.jsx)(_v54.ExportCsvButton, {
            variant: "primary",
            uri: _v2
          })]
        })]
      });
    },
    _v57 = ({
      isModalOpen: _v0,
      onModalClick: _v1,
      onModalClose: _v2,
      isLoading: _v3
    }) => (0, _v1.jsxs)(_v43.Modal, {
      size: "md",
      isOpen: _v0,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v48.ModalOverlay, {}), (0, _v1.jsxs)(_v45.ModalContent, {
        children: [(0, _v1.jsxs)(_v47.ModalHeader, {
          position: "relative",
          children: [(0, _v1.jsx)(_v4.Header, {
            size: "md",
            children: _v19.T.RecoverAllVideosModalHeader
          }), (0, _v1.jsx)(_v49.ModalCloseButton, {
            onClick: _v2
          })]
        }), (0, _v1.jsx)(_v44.ModalBody, {
          children: (0, _v1.jsx)(_v5.Paragraph, {
            size: "md",
            children: _v19.T.RecoverAllVideosModalText
          })
        }), (0, _v1.jsxs)(_v46.ModalFooter, {
          children: [(0, _v1.jsx)(_v36.Button, {
            variant: "secondary",
            onClick: _v2,
            disabled: _v3,
            children: _v19.T.ModalHeaderButtonCancelText
          }), (0, _v1.jsx)(_v36.Button, {
            variant: "primary",
            onClick: _v1,
            isLoading: _v3,
            children: _v19.T.RecoverAllVideosModalConfirm
          })]
        })]
      })]
    }),
    _v58 = ({
      userId: _v0
    }) => {
      let [_v1, _v2] = (0, _v2.useState)(!0),
        [_v3, _v4] = (0, _v2.useState)(!1),
        [_v5, _v6] = (0, _v2.useState)(0),
        _v7 = (0, _v6.useToast)(),
        _v8 = (0, _v2.useCallback)(_v0 => {
          _v7({
            duration: _v15.NOTIFICATION_DURATION,
            title: _v0
          });
        }, [_v7]),
        [_v9, _v10] = _v14(),
        _v11 = (0, _v2.useCallback)(async () => {
          try {
            localStorage.setItem("RestoreAllLastClick" + _v0, String(Date.now())), _v6(60);
          } catch (_v0) {
            console.error(_v0);
          } finally {
            await _v9({
              where: {
                userId: _v0.toString()
              }
            });
          }
        }, [_v9, _v0]);
      (0, _v2.useEffect)(() => {
        !_v10.data || _v10.loading || _v10.error ? _v10.error && _v8(_v19.T.RecoverAllVideosError) : (_v4(!1), _v8(_v19.T.RecoverAllVideosSuccess));
      }, [_v10.data, _v10.loading, _v10.error, _v8]), (0, _v2.useEffect)(() => {
        try {
          let _v0 = localStorage.getItem("RestoreAllLastClick" + _v0);
          if (!_v0) return;
          let _v1 = Number(_v0);
          if (Number.isNaN(_v1)) return;
          let _v2 = Math.ceil((Date.now() - _v1) / 0);
          _v2 < 60 && _v6(Math.ceil(60 - _v2));
        } catch (_v0) {
          console.error(_v0);
        }
      }, [_v0]);
      let {
          unRecoverablePlaceholderMessage: _v12,
          onDateChange: _v13,
          dateRange: _v14,
          unRecoverableList: _v15,
          unRecoverableListLoading: _v16,
          pagination: _v17
        } = (({
          isRecoveredStatus: _v0,
          showNotification: _v1,
          userId: _v2
        }) => {
          let [_v3, _v4] = (0, _v2.useState)(!1),
            [_v5, _v6] = (0, _v2.useState)({
              startDate: void 0,
              endDate: void 0
            }),
            {
              getDeletedVideos: _v7,
              data: _v8,
              loading: _v9,
              cleanResultData: _v10,
              pagination: _v11
            } = _v29({
              showNotification: _v1
            });
          return (0, _v2.useEffect)(() => {
            !_v0 && _v2 && _v7({
              recoveryStatus: _v26,
              dateTo: (0, _v18.formatDateForApi)(_v5.endDate),
              dateFrom: (0, _v18.formatDateForApi)(_v5.startDate),
              page: _v11.page,
              userId: _v2
            });
          }, [_v11.page, _v2]), {
            unRecoverablePlaceholderMessage: (0, _v2.useMemo)(() => _v0 || _v9 || _v8.length ? null : _v3 ? _v19.T.NoResultsForThisPage : _v19.T.SelectDateRangeText, [_v3, _v0, _v8.length, _v9]),
            onDateChange: ({
              startDate: _v0,
              endDate: _v1
            }) => {
              _v33(_v0, _v5.startDate) && _v33(_v1, _v5.endDate) || (_v6({
                startDate: _v0,
                endDate: _v1
              }), _v4(!0), _v7({
                recoveryStatus: _v26,
                dateTo: (0, _v18.formatDateForApi)(_v1),
                dateFrom: (0, _v18.formatDateForApi)(_v0),
                userId: _v2
              }));
            },
            cleanUnRecoverableData: _v10,
            dateRange: _v5,
            unRecoverableList: _v8,
            unRecoverableListLoading: _v9,
            pagination: _v11
          };
        })({
          isRecoveredStatus: _v1,
          showNotification: _v8,
          userId: _v0
        }),
        {
          isModalOpen: _v18,
          onPopOverClick: _v19,
          closeModal: _v20,
          recoverableList: _v21,
          recoverableListLoading: _v22,
          recoverVideo: _v23,
          recoverablePagination: _v24,
          loadingVideoId: _v25
        } = (({
          showNotification: _v0,
          isRecoveredStatus: _v1,
          userId: _v2
        }) => {
          let _v3 = (0, _v2.useRef)(""),
            [_v4, _v5] = (0, _v2.useState)(!1),
            {
              getDeletedVideos: _v6,
              data: _v7,
              loading: _v8,
              pagination: _v9
            } = _v29({
              showNotification: _v0
            }),
            _v10 = (_v0, _v1) => _v6({
              recoveryStatus: _v25,
              dateFrom: (0, _v18.formatDateForApi)((0, _v18.getDateMinusCurrent)(30)),
              dateTo: (0, _v18.formatDateForApi)(new Date()),
              page: _v0,
              userId: _v1
            });
          (0, _v2.useLayoutEffect)(() => {
            _v1 && _v2 && _v10(_v9.page, _v2);
          }, [_v1, _v9.page, _v2]);
          let {
              onRecover: _v11,
              recoverVideoLoading: _v12
            } = (({
              showNotification: _v0,
              page: _v1,
              goToPageNumber: _v2,
              videoListLength: _v3,
              getDeletedVideosByPage: _v4,
              userId: _v5
            }) => {
              let _v6 = (0, _v2.useRef)(0),
                [_v7, {
                  error: _v8,
                  callCount: _v9,
                  loading: _v10
                }] = _v32();
              return (0, _v2.useEffect)(() => {
                _v8 && _v0(_v27.failedRecover);
              }, [_v8]), (0, _v2.useEffect)(() => {
                !(_v6.current < _v9) || _v10 || _v8 || (1 === _v3 && _v1 > 1 ? _v2(_v1 - 1) : _v4(_v1, _v5), _v0(_v27.videoRecovered), _v6.current = _v9);
              }, [_v9, _v10, _v8]), {
                onRecover: _v0 => {
                  _v7({
                    variables: {
                      uri: `/videos/${_v0}`
                    }
                  });
                },
                recoverVideoLoading: _v10
              };
            })({
              showNotification: _v0,
              page: _v9.page,
              goToPageNumber: _v9.goToPageNumber,
              videoListLength: _v7?.length,
              getDeletedVideosByPage: _v10,
              userId: _v2
            }),
            _v13 = () => {
              _v5(!1);
            };
          return {
            isModalOpen: _v4,
            onPopOverClick: _v0 => {
              _v5(!0), _v3.current = _v0;
            },
            closeModal: _v13,
            recoverableList: _v7,
            recoverableListLoading: _v8,
            recoverVideo: () => {
              _v13(), _v30.BigPictureClient.sendEvent(new _v30.Event("vimeo.click", 48, {
                page: "data_retention_history",
                location: "video_list",
                target: "history/page/path",
                name: "recover_video",
                copy: "Recover video",
                feature: "data_retention",
                type: "general"
              })), _v11(_v3.current);
            },
            recoverablePagination: _v9,
            loadingVideoId: _v12 ? _v3.current : null
          };
        })({
          showNotification: _v8,
          isRecoveredStatus: _v1,
          userId: _v0
        }),
        _v26 = (({
          status: _v0,
          userId: _v1
        }) => {
          let {
            apiUrl: _v2,
            jwt: _v3
          } = (0, _v2.useContext)(_v20.ViewerContext);
          return `//${_v2}/users/${_v1}/videos/deleted/export?reason=data_retention&filter=${_v0}&jwt_token=${_v3}`;
        })({
          status: _v1 ? _v25 : _v26,
          userId: _v0
        }),
        _v27 = _v1 ? _v21 : _v15,
        _v28 = !!_v27.length,
        _v29 = _v1 ? _v24 : _v17,
        _v30 = !_v28 || _v12 ? (0, _v1.jsxs)(_v3.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v4.Header, {
            size: "lg",
            children: _v19.T.NothingHereYet
          }), _v12 && (0, _v1.jsx)(_v5.Paragraph, {
            children: _v12
          })]
        }) : null;
      return (0, _v18.formatDateToNeededLocale)({
        date: new Date()
      }), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.SettingsPageContentHeader, {
          title: _v19.T.HistoryAndRecovery,
          description: _v1 ? _v19.T.RecoveredVideosText(30) : _v19.T.NotRecoveredVideosText(30)
        }), (0, _v1.jsx)(_v42, {
          loadingVideoId: _v25,
          pagination: _v29,
          isRecoveredStatus: _v1,
          list: _v27,
          onPopOverClick: _v19,
          placeholder: !_v28 && (_v16 || _v22) ? (0, _v1.jsx)(_v17.LoadSpinner, {}) : _v30,
          toolBar: (0, _v1.jsx)(_v56, {
            setRecoveredStatus: _v2,
            isRecoveredStatus: _v1,
            exportUri: _v26,
            isListEmpty: !_v28,
            onDateChange: _v13,
            dateRange: _v14,
            onRecoverAllClick: () => _v4(!0),
            recovering: _v5 > 0
          })
        }), (0, _v1.jsx)(_v50, {
          isModalOpen: _v18,
          onModalClick: _v23,
          onModalClose: _v20
        }), _v3 && (0, _v1.jsx)(_v57, {
          isModalOpen: _v3,
          onModalClick: _v11,
          onModalClose: () => _v4(!1),
          isLoading: _v10.loading
        })]
      });
    };
}