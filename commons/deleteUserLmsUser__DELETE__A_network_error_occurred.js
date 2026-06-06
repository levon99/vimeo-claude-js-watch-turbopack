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
      userId: _v1,
      lmsUserId: _v2
    },
    ..._v3
  }) {
    return (0, _v29.measureLatency)("deleteUserLmsUser", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/lms/users/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v30.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v30.deepCamelCase)(_v1);
    });
  }
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  function _v34() {
    let {
        mutate: _v0
      } = (0, _v32.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v33.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/lms/users/${_v0.where.lmsUserId}${(0, _v28.serializeQuery)(_v0)}`, _v31({
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
  "true" === _v27.default.env.STORYBOOK && (0, _v28.assignMswData)(_v34, {
    endpoint: "/users/:userId/lms/users/:lmsUserId",
    method: "DELETE"
  }), _v0.s(["ManageLearnerModal", 0, ({
    onClose: _v0,
    ownerId: _v1,
    lmsUserEmail: _v2
  }) => {
    let _v3 = (0, _v18.useToast)(),
      [_v4, _v5] = (0, _v2.useState)(null),
      {
        isLoading: _v6,
        isQueryLoading: _v7,
        learners: _v8,
        error: _v9,
        canLoadMore: _v10,
        loadMore: _v11,
        reload: _v12,
        query: _v13,
        learnersTotalCount: _v14
      } = (0, _v26.useGetLearners)(_v1, _v2, "not_grouped"),
      _v15 = (0, _v2.useCallback)(() => {
        _v3({
          duration: _v21.NOTIFICATION_DURATION,
          title: _v23.T.SomethingWentWrong
        });
      }, [_v3]),
      {
        removeLmsUser: _v16
      } = (({
        userId: _v0,
        handleError: _v1,
        handleSuccess: _v2
      }) => {
        let [_v3, {
            error: _v4,
            loading: _v5
          }] = _v34(),
          _v6 = (0, _v2.useRef)(!1),
          _v7 = (0, _v2.useCallback)(_v0 => {
            _v3({
              where: {
                userId: _v0,
                lmsUserId: _v0
              }
            }), _v6.current = !0;
          }, [_v3, _v0]);
        return (0, _v2.useEffect)(() => {
          _v6.current && !_v5 && (_v6.current = !1, _v4 ? _v1(_v4) : _v2());
        }, [_v4, _v1, _v2, _v5]), (0, _v2.useMemo)(() => ({
          loading: _v5,
          removeLmsUser: _v7
        }), [_v7, _v5]);
      })({
        userId: _v1,
        handleError: () => _v15(),
        handleSuccess: (0, _v2.useCallback)(() => {
          _v3({
            duration: _v21.NOTIFICATION_DURATION,
            title: _v23.T.LmsUserRemoved
          }), _v5(null), _v12();
        }, [_v3, _v5, _v12])
      });
    (0, _v2.useEffect)(() => {
      _v9 && (_v15(), _v14 || _v0());
    }, [_v9, _v14, _v0, _v3, _v15]);
    let _v17 = (0, _v25.useElementScrollListener)({
        bottomOffset: 25,
        handler: (0, _v2.useCallback)(() => {
          _v10 && _v11();
        }, [_v10, _v11])
      }),
      _v18 = 0 === _v14 || !!_v13.length && !_v6 && 0 === _v8.length;
    return _v7 && 0 === _v14 ? (0, _v1.jsxs)(_v3.Modal, {
      isOpen: !0,
      onClose: _v0,
      children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsx)(_v12.Center, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "tooltip",
        children: (0, _v1.jsx)(_v11.Spinner, {})
      })]
    }) : (0, _v1.jsxs)(_v3.Modal, {
      isOpen: !0,
      onClose: _v0,
      children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        width: "100%",
        maxW: (0, _v10.rem)(480),
        children: [(0, _v1.jsxs)(_v6.ModalHeader, {
          paddingBottom: "0",
          paddingRight: "600",
          children: [(0, _v1.jsx)(_v22.ShrinkableText, {
            variant: "heading-md",
            as: "h3",
            children: _v23.T.ManageLearnersModalTitle
          }), (0, _v1.jsx)(_v8.ModalCloseButton, {})]
        }), (0, _v1.jsxs)(_v7.ModalBody, {
          paddingBottom: "300",
          paddingTop: "200",
          children: [(0, _v1.jsxs)(_v15.Box, {
            maxHeight: (0, _v10.rem)(280),
            overflowY: "auto",
            ref: _v17,
            children: [_v7 && (0, _v1.jsx)(_v12.Center, {
              height: "100%",
              paddingY: "500",
              children: (0, _v1.jsx)(_v11.Spinner, {})
            }), !_v7 && _v8.map((_v0, _v1) => {
              let _v2 = _v0?.user?.name || _v23.T.AnonymousLearner,
                _v3 = _v0?.user?.pictures?.sizes.find(_v0 => 72 === _v0.width)?.link,
                _v4 = _v0.learnerIds ? _v0.learnerIds.join(", ") : _v0.learnerId,
                _v5 = _v4 === _v0?.uri;
              return (0, _v1.jsxs)(_v13.Flex, {
                width: "100%",
                gap: "75",
                paddingY: "75",
                position: "relative",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: "75",
                sx: {
                  "& button": {
                    opacity: 0,
                    transition: "opacity 0.5s ease"
                  },
                  "&:hover button": {
                    opacity: 1
                  }
                },
                children: [(0, _v1.jsxs)(_v13.Flex, {
                  alignItems: "center",
                  overflow: "hidden",
                  children: [(0, _v1.jsx)(_v14.Avatar, {
                    size: "sm",
                    alt: _v2,
                    src: _v3,
                    nameProps: {
                      name: _v2
                    }
                  }), (0, _v1.jsxs)(_v15.Box, {
                    paddingLeft: "75",
                    overflow: "hidden",
                    children: [(0, _v1.jsx)(_v22.ShrinkableText, {
                      variant: "heading-xs",
                      children: _v2
                    }), (0, _v1.jsx)(_v22.ShrinkableText, {
                      variant: "body-md",
                      color: "text-secondary",
                      children: (0, _v1.jsxs)(_v1.Fragment, {
                        children: ["ID: ", _v4]
                      })
                    })]
                  })]
                }), (0, _v1.jsx)(_v19.Button, {
                  size: "sm",
                  variant: "secondary",
                  onClick: () => {
                    var _v0 = _v0?.uri || "";
                    try {
                      _v5(_v0), _v16((0, _v24.getIdFromUri)(_v0));
                    } catch {
                      _v5(null), _v15();
                    }
                  },
                  isLoading: _v5,
                  isDisabled: _v5,
                  children: _v23.T.Remove
                }), _v1 + 1 < _v8.length && (0, _v1.jsx)(_v16.Divider, {
                  borderColor: "stroke",
                  position: "absolute",
                  left: "0",
                  bottom: "0"
                })]
              }, _v4);
            }), !_v7 && _v10 && (0, _v1.jsxs)(_v13.Flex, {
              width: "100%",
              gap: "75",
              paddingY: "75",
              position: "relative",
              alignItems: "center",
              justifyContent: "flex-start",
              children: [(0, _v1.jsx)(_v17.Skeleton, {
                width: (0, _v10.rem)(32),
                height: (0, _v10.rem)(32),
                variant: "circle"
              }), (0, _v1.jsxs)(_v15.Box, {
                children: [(0, _v1.jsx)(_v17.Skeleton, {
                  width: (0, _v10.rem)(150),
                  height: (0, _v10.rem)(16),
                  variant: "text",
                  marginBottom: "75"
                }), (0, _v1.jsx)(_v17.Skeleton, {
                  width: (0, _v10.rem)(100),
                  height: (0, _v10.rem)(16),
                  variant: "text"
                })]
              })]
            })]
          }), _v18 && (0, _v1.jsxs)(_v12.Center, {
            gap: "50",
            flexFlow: "column",
            width: "100%",
            paddingBottom: "200",
            paddingTop: "500",
            children: [(0, _v1.jsx)(_v20.PersonUser, {
              width: "sm",
              height: "sm"
            }), (0, _v1.jsx)(_v9.Text, {
              variant: "heading-xs",
              children: _v23.T.NoLearnersFound
            })]
          })]
        })]
      })]
    });
  }], 0);
}