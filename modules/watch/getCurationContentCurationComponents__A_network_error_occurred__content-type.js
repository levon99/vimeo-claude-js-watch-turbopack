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
    _v25 = _v0.i(0);
  async function _v26({
    baseUrl: _v0,
    select: _v1,
    where: {
      contentId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v24.measureLatency)("getCurationContentCurationComponents", "GET", async () => {
      let _v0 = await fetch(`${_v0}/curation_content/${_v2}/curation_components?${(0, _v25.searchQueryString)(_v3)}&fields=${_v1.map(_v25.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v25.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v25.deepCamelCase)(_v1);
    });
  }
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  function _v32(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v31.useGctlConfig)();
    return (0, _v27.default)(_v2 ? `/curation_content/${_v2.where.contentId}/curation_components${(0, _v29.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v26({
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
  "true" === _v23.default.env.STORYBOOK && (0, _v29.assignMswData)(_v32, {
    endpoint: "/curation_content/:contentId/curation_components",
    method: "GET"
  }), "true" === _v23.default.env.STORYBOOK && (0, _v29.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v31.useGctlConfig)(),
      [_v5, _v6] = (0, _v29.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/curation_content/${_v0.where.contentId}/curation_components${(0, _v29.serializeQuery)(_v0)}`, _v26({
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
    endpoint: "/curation_content/:contentId/curation_components",
    method: "GET"
  }), "true" === _v23.default.env.STORYBOOK && (0, _v29.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v31.useGctlConfig)();
    return (0, _v30.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/curation_content/${_v2.where.contentId}/curation_components?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v26({
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
    endpoint: "/curation_content/:contentId/curation_components",
    method: "GET"
  });
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
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
    _v48 = _v0.i(0);
  let _v49 = () => (0, _v1.jsx)(_v35.Box, {
      className: "staff-pick-badge",
      position: "absolute",
      top: "10",
      left: "10",
      width: "72px",
      height: "72px",
      transition: "opacity 0.2s ease",
      children: (0, _v1.jsx)(_v39.bokeh.img, {
        src: "https://f.vimeocdn.com/p/images/badges/1.svg",
        alt: "Staff Pick"
      })
    }),
    _v50 = ({
      location: _v0
    }) => (0, _v1.jsxs)(_v35.Box, {
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      children: [(0, _v1.jsx)(_v48.UserLocation, {
        boxSize: "xs",
        color: "text-secondary"
      }), (0, _v1.jsx)(_v44.Text, {
        variant: {
          base: "body-md",
          l: "body-lg",
          "2xl": "body-lg"
        },
        color: "text-secondary",
        children: _v0
      })]
    }),
    _v51 = ({
      variant: _v0,
      size: _v1
    }) => "video" === _v0 ? (0, _v1.jsx)(_v46.Button, {
      leftIcon: (0, _v1.jsx)(_v47.PlayFilled, {}),
      variant: "secondary",
      size: _v1
    }) : (0, _v1.jsx)(_v46.Button, {
      leftIcon: (0, _v1.jsx)(_v47.PlayFilled, {}),
      variant: "secondary",
      size: _v1,
      w: "100%",
      children: "Featured video"
    }),
    _v52 = ({
      title: _v0,
      subtitle: _v1,
      curationStatement: _v2,
      variant: _v3,
      location: _v4,
      isStaffPick: _v5,
      creatorCredit: _v6
    }) => (0, _v1.jsxs)(_v35.Box, {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 50%)",
      transition: "background 0.3s ease",
      sx: {
        "&:hover": {
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%)"
        },
        "&:hover .hover-content": {
          display: "block",
          opacity: 1,
          maxHeight: "200px"
        },
        "&:hover .staff-pick-badge": {
          opacity: 0
        }
      },
      children: [_v5 && "video" === _v3 && (0, _v1.jsx)(_v49, {}), (0, _v1.jsx)(_v41.DarkMode, {
        children: (0, _v1.jsx)(_v13.Flex, {
          padding: "sm",
          alignItems: "flex-start",
          zIndex: "1",
          flexDirection: "column",
          children: (0, _v1.jsxs)(_v42.VStack, {
            spacing: "xs",
            alignItems: "flex-start",
            padding: "xs",
            width: "100%",
            children: [(0, _v1.jsx)(_v43.Header, {
              as: "h3",
              size: {
                base: "md",
                "2xl": "lg"
              },
              color: "text-primary",
              children: _v0
            }), "creator" === _v3 && _v4 && (0, _v1.jsx)(_v50, {
              location: _v4
            }), "video" === _v3 && _v6 && (0, _v1.jsx)(_v35.Box, {
              className: "hover-content",
              sx: {
                display: "none",
                opacity: 0,
                maxHeight: 0,
                overflow: "hidden",
                transition: "opacity 0.2s ease, max-height 0.2s ease"
              },
              children: (0, _v1.jsx)(_v44.Text, {
                variant: {
                  lg: "body-md",
                  "2xl": "body-lg"
                },
                color: "text-secondary",
                textAlign: "left",
                children: _v6
              })
            }), "video" === _v3 && _v1 && (0, _v1.jsx)(_v35.Box, {
              className: "hover-content",
              sx: {
                display: "none",
                opacity: 0,
                maxHeight: 0,
                overflow: "hidden",
                transition: "opacity 0.2s ease, max-height 0.2s ease"
              },
              children: (0, _v1.jsx)(_v45.Badge, {
                variant: "timestamp",
                size: "sm",
                _dark: {
                  bg: "grayAlpha.600"
                },
                children: _v1
              })
            }), _v2 && (0, _v1.jsx)(_v35.Box, {
              className: "hover-content",
              sx: {
                display: "none",
                opacity: 0,
                maxHeight: 0,
                overflow: "hidden",
                transition: "opacity 0.2s ease, max-height 0.2s ease"
              },
              children: (0, _v1.jsx)(_v44.Text, {
                variant: {
                  lg: "body-md",
                  "2xl": "body-lg"
                },
                color: "text-primary",
                textAlign: "left",
                children: _v2
              })
            }), (0, _v1.jsx)(_v35.Box, {
              marginTop: "xs",
              width: "100%",
              children: (0, _v1.jsx)(_v51, {
                variant: _v3,
                size: {
                  lg: "sm",
                  "2xl": "md"
                }
              })
            })]
          })
        })
      })]
    }),
    _v53 = ({
      title: _v0,
      subtitle: _v1,
      curationStatement: _v2,
      variant: _v3,
      location: _v4,
      isStaffPick: _v5,
      creatorCredit: _v6
    }) => {
      let [_v7, _v8] = (0, _v11.useState)(!1);
      return (0, _v1.jsx)(_v35.Box, {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: _v7 ? "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%)" : "linear-gradient(0deg, #000 25%, rgba(0, 0, 0, 0.00) 75%)",
        transition: "background 0.3s ease",
        children: (0, _v1.jsx)(_v41.DarkMode, {
          children: (0, _v1.jsxs)(_v42.VStack, {
            spacing: "50",
            px: "100",
            pb: "200",
            alignItems: "flex-start",
            zIndex: "1",
            width: "100%",
            children: [_v5 && "video" === _v3 && (0, _v1.jsx)(_v35.Box, {
              opacity: +!_v7,
              transition: "opacity 0.2s ease",
              children: (0, _v1.jsx)(_v49, {})
            }), (0, _v1.jsx)(_v43.Header, {
              as: "h3",
              size: "md",
              color: "text-primary",
              children: _v0
            }), "creator" === _v3 && _v4 && (0, _v1.jsx)(_v50, {
              location: _v4
            }), "video" === _v3 && _v6 && (0, _v1.jsx)(_v44.Text, {
              variant: "body-md",
              color: "text-secondary",
              textAlign: "left",
              children: _v6
            }), "video" === _v3 && _v1 && (0, _v1.jsx)(_v45.Badge, {
              variant: "timestamp",
              size: "sm",
              _dark: {
                bg: "grayAlpha.600"
              },
              children: _v1
            }), _v2 && (0, _v1.jsx)(_v44.Text, {
              variant: "body-md",
              color: "text-primary",
              textAlign: "left",
              noOfLines: _v7 ? void 0 : 3,
              children: _v2
            }), _v2 && (0, _v1.jsx)(_v39.bokeh.span, {
              as: "button",
              color: "text-secondary",
              cursor: "pointer",
              fontSize: "body-md",
              display: "inline",
              background: "none",
              padding: "0",
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation(), _v8(!_v7);
              },
              children: _v7 ? "Show less" : "Show more"
            }), (0, _v1.jsx)(_v35.Box, {
              marginTop: "xs",
              width: "100%",
              children: (0, _v1.jsx)(_v51, {
                variant: _v3,
                size: "sm"
              })
            })]
          })
        })
      });
    },
    _v54 = ({
      src: _v0,
      title: _v1,
      subtitle: _v2,
      curationStatement: _v3,
      videoLink: _v4,
      variant: _v5,
      location: _v6,
      isStaffPick: _v7 = !1,
      creatorCredit: _v8,
      onCardClick: _v9,
      ..._v10
    }) => {
      let _v11 = (0, _v36.useBreakpointValue)({
          base: !0,
          md: !0,
          lg: !1
        }),
        _v12 = {
          title: _v1,
          subtitle: _v2,
          curationStatement: _v3,
          variant: _v5,
          location: _v6,
          isStaffPick: _v7,
          creatorCredit: _v8
        };
      return (0, _v1.jsx)(_v13.Flex, {
        borderRadius: "xl",
        padding: "sm",
        _hover: {
          background: "fill-component-hover"
        },
        children: (0, _v1.jsxs)(_v40.Card, {
          as: "a",
          href: _v4,
          target: "_blank",
          rel: "noopener noreferrer",
          position: "relative",
          gap: {
            base: "md",
            md: "lg"
          },
          justifyContent: "flex-end",
          border: "0.5px solid",
          borderColor: "stroke",
          borderRadius: "md",
          overflow: "hidden",
          aspectRatio: "9/16",
          onClick: _v9,
          ..._v10,
          children: [(0, _v1.jsx)(_v39.bokeh.img, {
            alt: `${_v1} thumbnail`,
            src: _v0,
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }), _v11 ? (0, _v1.jsx)(_v53, {
            ..._v12
          }) : (0, _v1.jsx)(_v52, {
            ..._v12
          })]
        })
      });
    };
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = () => (0, _v1.jsx)(_v40.Card, {
    position: "relative",
    p: {
      base: "md",
      md: "lg"
    },
    gap: {
      base: "md",
      md: "lg"
    },
    border: "0.5px solid",
    borderColor: "stroke",
    borderRadius: "md",
    overflow: "hidden",
    aspectRatio: "9/16",
    width: {
      base: "280px",
      sm: "300px",
      md: "100%"
    },
    flex: {
      base: "none",
      md: "auto"
    },
    minWidth: {
      base: "280px",
      md: "auto"
    },
    children: (0, _v1.jsx)(_v56.Skeleton, {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "0",
      left: "0"
    })
  });
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = ({
      children: _v0,
      numColumns: _v1 = {
        md: 3,
        lg: 4,
        "3xl": 5
      },
      onCarouselSwipe: _v2
    }) => {
      let _v3 = (0, _v36.useBreakpointValue)({
          base: !0,
          md: !1
        }),
        _v4 = (0, _v59.useHorizontalScrollSettle)({
          enabled: !0 === _v3 && void 0 !== _v2,
          onSettle: _v2
        });
      return _v3 ? (0, _v1.jsx)(_v13.Flex, {
        ref: _v4,
        overflowX: "auto",
        overscrollBehavior: "contain auto",
        gap: "xs",
        marginLeft: "-md",
        marginRight: "-md",
        paddingLeft: "sm",
        paddingRight: "sm",
        paddingBottom: "sm",
        sx: {
          "-webkit-overflow-scrolling": "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        children: _v0
      }) : (0, _v1.jsx)(_v58.PlaylistGrid, {
        numColumns: _v1,
        gap: {
          base: 0,
          lg: "xs"
        },
        pl: 0,
        pr: 0,
        pb: "md",
        marginLeft: "-xs",
        marginRight: "-xs",
        children: _v0
      });
    },
    _v61 = _v0 => {
      let _v1 = "video" === _v0.sourceType;
      return {
        src: _v0.artUrl,
        title: _v0.title,
        subtitle: _v1 ? _v0.shortTitle : void 0,
        curationStatement: _v0.sourceDescription,
        videoLink: _v1 ? `/${_v0.sourceId}` : _v0.videoUrl ?? `/${_v0.sourceId}`,
        variant: _v1 ? "video" : "creator",
        location: _v1 ? void 0 : _v0.shortTitle,
        isStaffPick: _v1,
        creatorCredit: _v1 ? _v0.sourceTitle : void 0
      };
    },
    _v62 = ["uri", "title", "shortTitle", "artUrl", "sourceDescription", "sourceTitle", "sourceId", "sourceType", "videoUrl"];
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ({
    carousel: _v0,
    sectionIndex: _v1,
    shouldPreload: _v2,
    onIntersection: _v3,
    onVideosLoaded: _v4,
    isFirst: _v5 = !1
  }) => {
    let {
        trackWatchSectionImpression: _v6,
        trackWatchSectionFollowState: _v7,
        trackWatchSectionCarouselNavigated: _v8,
        trackWatchVideoThumbnailImpression: _v9,
        trackWatchVideoThumbnailClicked: _v10
      } = (0, _v16.useWatchTracking)(),
      [_v11, _v12] = (0, _v11.useState)(0),
      {
        ref: _v13,
        isVisible: _v14
      } = (({
        threshold: _v0 = .01,
        rootMargin: _v1 = "0px",
        onIntersect: _v2
      } = {}) => {
        let _v3 = (0, _v11.useRef)(null),
          [_v4, _v5] = (0, _v11.useState)(!1),
          _v6 = (0, _v11.useCallback)(() => {
            _v2?.();
          }, [_v2]);
        return (0, _v11.useEffect)(() => {
          if (!window.IntersectionObserver) return;
          let _v0 = new IntersectionObserver(_v0 => {
            _v0.some(_v0 => _v0.isIntersecting) && !_v4 && (_v5(!0), _v6());
          }, {
            threshold: _v0,
            rootMargin: _v1
          });
          return _v3.current && _v0.observe(_v3.current), () => _v0.disconnect();
        }, [_v4, _v6, _v0, _v1]), {
          ref: _v3,
          isVisible: _v4
        };
      })({
        threshold: .01,
        onIntersect: _v3
      }),
      _v15 = (0, _v34.toWatchSection)(_v0),
      _v16 = (0, _v64.idFromUri)(_v0.uri) > 0 ? String((0, _v64.idFromUri)(_v0.uri)) : null,
      _v17 = (0, _v11.useRef)(!1),
      _v18 = (0, _v11.useRef)(new Set());
    (0, _v11.useEffect)(() => {
      _v14 && !_v17.current && (_v17.current = !0, _v6({
        watchSection: _v15,
        watchSectionId: _v16,
        watchSectionPosition: _v1 + 1
      }), _v7({
        watchSection: _v15,
        watchSectionId: _v16,
        watchSectionFollowable: !1,
        watchSectionIsFollowing: !1
      }));
    }, [_v14, _v0, _v6, _v7, _v15, _v16, _v1]);
    let _v19 = (0, _v36.useBreakpointValue)({
        base: !0,
        md: !1
      }),
      _v20 = (0, _v36.useBreakpointValue)({
        base: 10,
        md: 3,
        lg: 4,
        "3xl": 5
      }) || 4,
      _v21 = (0, _v11.useCallback)(({
        direction: _v0,
        page: _v1
      }) => {
        _v8({
          watchSection: _v15,
          watchSectionId: _v16,
          watchSectionDirection: _v0,
          watchSectionPage: _v1,
          watchSectionMethod: "swipe"
        });
      }, [_v8, _v15, _v16]);
    (0, _v11.useEffect)(() => {
      _v12(0);
    }, [_v20]);
    let {
        cards: _v22,
        isLoading: _v23,
        isEmpty: _v24
      } = (({
        carouselId: _v0,
        enabled: _v1
      }) => {
        let {
            data: _v2,
            isLoading: _v3
          } = _v32(() => _v1 ? {
            where: {
              contentId: _v0
            },
            select: _v62,
            query: {
              parentType: "carousel"
            }
          } : null, {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1
          }),
          _v4 = (_v2?.data ?? []).map(_v61),
          _v5 = !_v3 && 0 === _v4.length;
        return {
          cards: _v4,
          isLoading: _v3,
          isEmpty: _v5
        };
      })({
        carouselId: (0, _v64.idFromUri)(_v0.uri),
        enabled: _v14 || _v2
      }),
      _v25 = (0, _v11.useCallback)(() => {
        let _v0 = _v22.filter(_v0 => "video" === _v0.variant);
        _v0.length > 0 && _v4?.(_v15, _v0.map(_v0 => _v0.videoLink.replace(/^\//, "").split("?")[0]));
      }, [_v22, _v4, _v15]);
    (0, _v11.useEffect)(() => {
      !_v23 && _v22.length > 0 && _v25();
    }, [_v23, _v22, _v25]);
    let _v26 = (_v11 + 1) * _v20 > _v22.length && _v22.length > _v20 ? _v22.length - _v20 : _v11 * _v20,
      _v27 = ((_v0, _v1) => {
        if (_v1 === Math.ceil(_v0.length / _v20) - 1 && _v0.length > _v20) {
          let _v0 = Math.max(0, _v0.length - _v20);
          return _v0.slice(_v0, _v0.length);
        }
        let _v2 = _v1 * _v20;
        return _v0.slice(_v2, _v2 + _v20);
      })(_v22, _v11);
    return (0, _v1.jsxs)(_v35.Box, {
      ref: _v13,
      children: [(_v2 || _v14) && !_v23 && _v22.length > 0 && (0, _v1.jsx)(_v2.default, {
        children: _v22.slice(0, _v20).map(_v0 => (0, _v1.jsx)("link", {
          rel: "prefetch",
          as: "image",
          href: _v0.src
        }, `prefetch-${_v0.videoLink}`))
      }), (0, _v1.jsxs)(_v37.Playlist, {
        w: "100%",
        gap: "sm",
        minHeight: "300px",
        children: [(0, _v1.jsx)(_v38.PlaylistHeader, {
          header: {
            text: _v0.title,
            to: void 0
          },
          pt: _v5 ? 0 : void 0,
          children: !_v19 && _v22.length > _v20 && (0, _v1.jsx)(_v13.Flex, {
            marginLeft: "auto",
            children: (0, _v1.jsx)(_v55.NavigationButtons, {
              disablePrevButton: 0 === _v11,
              disableNextButton: _v11 >= Math.ceil(_v22.length / _v20) - 1,
              onPrevClick: () => {
                _v8({
                  watchSection: _v15,
                  watchSectionId: _v16,
                  watchSectionDirection: "previous",
                  watchSectionPage: Math.max(0, _v11 - 1)
                }), _v12(_v0 => Math.max(0, _v0 - 1));
              },
              onNextClick: () => {
                _v8({
                  watchSection: _v15,
                  watchSectionId: _v16,
                  watchSectionDirection: "next",
                  watchSectionPage: _v11 + 1
                }), _v12(_v0 => _v0 + 1);
              }
            })
          })
        }), (0, _v1.jsx)(_v60, {
          numColumns: {
            md: 3,
            lg: 4,
            "3xl": 5
          },
          onCarouselSwipe: _v21,
          children: _v23 || _v24 ? Array.from({
            length: _v20
          }).map((_v0, _v1) => (0, _v1.jsx)(_v57, {}, _v1)) : _v27.map((_v0, _v1) => (0, _v1.jsx)(_v65.ThumbnailImpressionTracker, {
            onImpression: () => {
              if ("video" !== _v0.variant) return;
              let _v0 = _v0.videoLink.replace(/^\//, "").split("?")[0];
              _v18.current.has(_v0) || (_v18.current.add(_v0), _v9({
                clipId: _v0,
                watchSection: _v15,
                watchSectionId: _v16,
                watchVideoPosition: _v26 + _v1 + 1
              }));
            },
            children: (0, _v1.jsx)(_v54, {
              ..._v0,
              videoLink: _v16 ? (0, _v63.appendProvenanceParams)(_v0.videoLink, _v16, _v26 + _v1 + 1) : _v0.videoLink,
              width: {
                base: "280px",
                sm: "300px",
                md: "100%"
              },
              flex: {
                base: "none",
                md: "auto"
              },
              minWidth: {
                base: "280px",
                md: 0
              },
              ...("video" === _v0.variant ? {
                onCardClick: () => {
                  _v10({
                    clipId: _v0.videoLink.replace(/^\//, "").split("?")[0],
                    watchSection: _v15,
                    watchSectionId: _v16,
                    watchVideoPosition: _v26 + _v1 + 1
                  });
                }
              } : {})
            })
          }, _v0.videoLink ?? `card-${_v1}`))
        })]
      })]
    });
  };
  var _v67 = _v0.i(0);
  let _v68 = ({
    authModalType: _v0,
    setShowLoginJoinModal: _v1,
    onSectionReached: _v2
  }) => {
    let _v3 = (0, _v20.useOptionalViewer)(),
      {
        trackWatchPageLineupRendered: _v4
      } = (0, _v16.useWatchTracking)(),
      {
        data: _v5
      } = _v32(() => _v3 ? {
        where: {
          contentId: 1
        },
        select: ["uri", "title", "type", "flairUrl", "artUrl", "shortTitle", "sourceDescription", "sourceTitle", "showCard", "link", "metadata.interactions.follow.added", "sourceId", "sourceType", "metadata.connections.videos.total", "metadata.connections.users.total"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v6 = _v5?.data,
      _v7 = (0, _v33.useMarginXValue)(),
      [_v8, _v9] = (0, _v11.useState)(null),
      _v10 = (0, _v11.useRef)(!1),
      _v11 = (0, _v11.useRef)({}),
      [_v12, _v13] = (0, _v11.useState)(!1),
      _v14 = (0, _v11.useCallback)((_v0, _v1) => {
        _v11.current[_v0] = _v1;
      }, []);
    (0, _v11.useEffect)(() => {
      if (!_v6 || 0 === _v6.length || _v12) return;
      if (0 === _v6.map(_v0 => (0, _v34.toWatchSection)(_v0)).filter(_v0 => !(_v0 in _v11.current)).length) return void _v13(!0);
      let _v0 = window.setTimeout(() => {
        _v13(!0);
      }, 0);
      return () => {
        window.clearTimeout(_v0);
      };
    }, [_v6, _v12]);
    let _v15 = _v6?.filter(_v0 => "popular" === _v0.sourceType).length ?? 0,
      _v16 = void 0 === _v6 || 0 === _v6.length ? "editorial" : _v15 === _v6.length ? "popular" : _v15 > 0 ? "mixed" : "editorial";
    (0, _v17.usePicoEffect)(() => !!_v6 && 0 !== _v6.length && !!_v12 && !_v10.current && (_v10.current = !0, _v4({
      watchLineupSections: JSON.stringify(_v6.map(_v0 => ({
        slug: (0, _v34.toWatchSection)(_v0),
        type: _v0.type,
        sourceType: _v0.sourceType,
        sourceId: _v0.sourceId
      }))),
      watchLineupClipIdsBySection: JSON.stringify(Object.fromEntries(_v6.map(_v0 => {
        let _v1 = (0, _v34.toWatchSection)(_v0);
        return [_v1, _v11.current[_v1] ?? []];
      }))),
      watchLineupRankingSource: _v16
    }), !0), [_v6, _v12], {
      once: !0
    });
    let _v17 = _v6?.[0]?.type === "carousel";
    return (0, _v1.jsx)(_v13.Flex, {
      flexDir: "column",
      gap: {
        base: "sm",
        md: "lg",
        xl: "2xl"
      },
      mx: _v7,
      minHeight: "400px",
      children: _v6?.map((_v0, _v1) => "carousel" === _v0.type ? (0, _v1.jsx)(_v66, {
        carousel: _v0,
        sectionIndex: _v1,
        shouldPreload: _v1 - 1 === _v8,
        onIntersection: () => {
          _v9(_v1), _v2?.();
        },
        onVideosLoaded: _v14,
        isFirst: _v17 && 0 === _v1
      }, _v0.uri) : (0, _v1.jsx)(_v67.WatchPlaylist, {
        curationComponent: _v0,
        setShowLoginJoinModal: _v1,
        authModalType: _v0,
        widgetPlacement: _v1 + 2,
        shouldPreload: _v1 - 1 === _v8,
        onIntersection: () => {
          _v9(_v1), _v2?.();
        },
        onVideosLoaded: _v14
      }, _v0.uri))
    });
  };
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  async function _v73({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v24.measureLatency)("getPromotedVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/promoted_videos?${(0, _v25.searchQueryString)(_v2)}&fields=${_v1.map(_v25.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v25.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v25.deepCamelCase)(_v1);
    });
  }
  function _v74(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v31.useGctlConfig)();
    return (0, _v27.default)(_v2 ? `/promoted_videos${(0, _v29.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v73({
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
  "true" === _v23.default.env.STORYBOOK && (0, _v29.assignMswData)(_v74, {
    endpoint: "/promoted_videos",
    method: "GET"
  }), "true" === _v23.default.env.STORYBOOK && (0, _v29.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v31.useGctlConfig)(),
      [_v5, _v6] = (0, _v29.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/promoted_videos${(0, _v29.serializeQuery)(_v0)}`, _v73({
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
    endpoint: "/promoted_videos",
    method: "GET"
  }), "true" === _v23.default.env.STORYBOOK && (0, _v29.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v31.useGctlConfig)();
    return (0, _v30.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/promoted_videos?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v73({
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
    endpoint: "/promoted_videos",
    method: "GET"
  });
  var _v75 = _v0.i(0);
  let _v76 = _v0 => (0, _v1.jsxs)(_v39.bokeh.svg, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 162 62",
      fill: "gray.50",
      ..._v0,
      children: [(0, _v1.jsx)("path", {
        d: "M45.5 14h-12v4h4v30h4V18h4zm-26.2 2.1v15c0 1.1.9 2 2 2h6v11h-4v-7h-4v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-15c0-1.1-.9-2-2-2h-6v-11h4v7h4v-9c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2zM57.1 48h4l-4-34h-7l-4 34h4l.9-8h5.1l1 8zm-5.6-12l2.1-17.8 2 17.8h-4.1zm23-18v-4h-12v34h4V33h6v-4h-6V18zm14 0v-4h-12v34h4V33h6v-4h-6V18zm8-4v34h4V33h6c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2h-10zm8 15h-4V18h4v11zm6-15h4v34h-4zm6 2v30c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-9h-4v7h-4V18h4v7h4v-9c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2zm27-2h-4l-5 14.1V14h-4v34h4V33.8l5 14.2h4l-6-17z"
      }), (0, _v1.jsx)("path", {
        className: "st0",
        d: "M6.1 44.7s-1-.7-2-1.5-1.9-1.6-1.9-1.6-.1-.4-.2-1.1c-.1-.7-.2-1.6-.3-2.5-.1-.9-.1-1.8-.2-2.5v-1.1s.9.9 1.8 1.7c.9.8 1.8 1.7 1.8 1.7s0 .4.1 1.1c.1.7.2 1.5.3 2.4.2 1.7.6 3.4.6 3.4zm4-4.1s-.7.9-1.4 1.9l-1.4 2S7 42.8 6.8 41c-.1-.9-.2-1.7-.3-2.4-.1-.6-.1-1.1-.1-1.1L8 35.7c.8-.8 1.6-1.7 1.6-1.7v1c0 .6.1 1.5.1 2.3.1.8.2 1.7.2 2.3.2.6.2 1 .2 1zM5 35.9s-.9-.8-1.8-1.7c-.9-.9-1.7-1.8-1.7-1.8v-3.6c0-.9.1-1.8.1-2.5s.1-1.1.1-1.1.8 1 1.6 1.9l1.6 1.8v3.5c0 1.8.1 3.5.1 3.5zm4.5-3.6s-.8.8-1.6 1.7l-1.6 1.8s-.1-1.7-.1-3.5v-3.5s.9-.8 1.8-1.7l1.8-1.6s0 .4-.1 1c0 .6-.1 1.5-.1 2.3v2.3c-.1.8-.1 1.2-.1 1.2zM5 27.1s-.8-.9-1.6-1.9c-.8-1-1.5-2-1.5-2s0-.5.1-1.1c.1-.7.2-1.6.3-2.5.2-1.8.6-3.6.6-3.6s.7 1.1 1.3 2.1l1.4 2s-.1.4-.1 1.1c-.1.7-.2 1.5-.3 2.4-.1 1.8-.2 3.5-.2 3.5zM9.8 24s-.9.7-1.8 1.5l-1.8 1.6s.1-1.7.2-3.5c.1-.9.2-1.7.3-2.4.1-.6.1-1.1.1-1.1s1-.7 1.9-1.4c1-.7 2-1.3 2-1.3s-.3 1.6-.5 3.3c-.1.8-.2 1.6-.3 2.3 0 .6-.1 1-.1 1zm-3.9-5.7s-.7-1-1.3-2.1c-.7-1-1.3-2.1-1.3-2.1s.4-1.8.9-3.6S5.3 7 5.3 7s.5 1.2 1 2.3c.5 1.1 1.1 2.2 1.1 2.2s-.5 1.7-.9 3.4c-.2.9-.4 1.7-.5 2.4 0 .6-.1 1-.1 1zm5.2-2.4s-1 .6-2 1.3l-2 1.4s.1-.4.2-1.1c.1-.6.3-1.5.5-2.3l.8-3.4s1-.6 2.1-1.2 2.1-1 2.1-1-.5 1.5-1 3.1c-.3 1.6-.7 3.2-.7 3.2zm.6 45.5s-1.2-.4-2.3-.8c-1.2-.4-2.3-1-2.3-1s-.8-1.7-1.4-3.5c-.7-1.8-1.2-3.6-1.2-3.6s1.1.7 2.2 1.3c1.1.6 2.2 1.1 2.2 1.1s.6 1.7 1.3 3.3c.6 1.6 1.5 3.2 1.5 3.2zm2.6-5.1l-.8 2.2c-.4 1.1-.7 2.3-.7 2.3s-.8-1.5-1.6-3.1c-.7-1.6-1.3-3.2-1.3-3.2l1-2.2c.6-1.1 1.1-2.1 1.1-2.1s.5 1.6 1 3.1c.7 1.6 1.3 3 1.3 3zm-6.1-3s-1.1-.6-2.1-1.2C5 51.5 4 50.8 4 50.8s-.5-1.8-.8-3.6c-.2-.9-.3-1.8-.5-2.5-.1-.7-.2-1.1-.2-1.1s1 .8 2 1.5l2 1.4.8 3.4c.3 1.7.9 3.4.9 3.4zm3.5-4.6s-.6 1-1.2 2.1c-.6 1-1.1 2.1-1.1 2.1s-.5-1.6-1-3.3l-.8-3.4s.7-1 1.3-2c.7-1 1.4-1.9 1.4-1.9s.1.4.2 1 .2 1.4.4 2.2l.8 3.2zM8.3 10.8s-.2-1.4-.4-2.9-.2-3-.2-3 1.1-1 2.3-2c.6-.5 1.2-.9 1.6-1.2.4-.3.7-.5.7-.5v2.9c0 1.4.1 2.8.1 2.8s-1.1.9-2.1 1.9c-1 .9-2 2-2 2zm147.2 33.7l-1.4-2c-.7-1-1.4-1.9-1.4-1.9s.1-.4.1-1c.1-.6.1-1.4.2-2.3.1-.8.1-1.7.1-2.3v-1l1.6 1.8 1.6 1.8s0 .4-.1 1.1c-.1.6-.2 1.5-.3 2.4-.1 1.7-.4 3.4-.4 3.4zm5.1-2.9s-.9.8-1.9 1.6c-1 .8-2 1.5-2 1.5s.3-1.7.5-3.5c.1-.9.2-1.8.3-2.4.1-.7.1-1.1.1-1.1s.9-.8 1.8-1.7c.9-.8 1.8-1.7 1.8-1.7v1.1c0 .7-.1 1.6-.2 2.5-.1.9-.2 1.8-.3 2.5 0 .8-.1 1.2-.1 1.2zm-4.1-5.7l-1.6-1.8c-.8-.9-1.6-1.7-1.6-1.7v-3.3c0-.8-.1-1.7-.1-2.3 0-.6-.1-1-.1-1l1.8 1.6c.9.8 1.8 1.7 1.8 1.7v3.5c-.1 1.5-.2 3.3-.2 3.3zm4.8-3.4s-.8.9-1.7 1.8c-.9.9-1.8 1.7-1.8 1.7s.1-1.8.1-3.5V29l1.6-1.8c.8-.9 1.6-1.9 1.6-1.9s0 .5.1 1.1c0 .7.1 1.6.1 2.5v3.6zm-4.8-5.3l-1.8-1.6c-.9-.8-1.8-1.5-1.8-1.5s0-.4-.1-1-.2-1.4-.3-2.3c-.2-1.6-.5-3.3-.5-3.3s1 .6 2 1.3c1 .7 1.9 1.4 1.9 1.4s.1.4.1 1.1c.1.6.2 1.5.3 2.4.2 1.7.2 3.5.2 3.5zm4.4-3.9s-.7 1-1.5 2-1.6 1.9-1.6 1.9-.1-1.8-.3-3.5c-.1-.9-.2-1.8-.3-2.4-.1-.7-.1-1.1-.1-1.1l1.4-2c.7-1 1.3-2.1 1.3-2.1s.4 1.8.6 3.6c.1.9.2 1.8.3 2.5.2.6.2 1.1.2 1.1zm-5.3-4.7l-2-1.4c-1-.7-2-1.3-2-1.3s-.3-1.6-.8-3.2c-.4-1.6-1-3.1-1-3.1s1.1.5 2.1 1c1.1.5 2.1 1.2 2.1 1.2s.5 1.7.8 3.4c.2.8.4 1.7.5 2.3.2.6.3 1.1.3 1.1zm3.9-4.5s-.6 1.1-1.3 2.1c-.7 1.1-1.3 2.1-1.3 2.1s-.1-.4-.2-1.1c-.1-.7-.3-1.5-.5-2.4-.4-1.7-.9-3.4-.9-3.4s.6-1.1 1.1-2.2c.5-1.1 1-2.3 1-2.3s.6 1.8 1.1 3.6c.6 1.8 1 3.6 1 3.6zM150 60.8s-.3-1.2-.7-2.3l-.8-2.2s.7-1.4 1.2-3c.6-1.5 1-3.1 1-3.1s.6 1 1.1 2.1l1 2.2s-.6 1.6-1.3 3.2c-.7 1.6-1.5 3.1-1.5 3.1zm5.7-1.2s-1.2.5-2.3 1c-1.2.4-2.3.8-2.3.8s.9-1.6 1.6-3.2c.7-1.6 1.3-3.3 1.3-3.3s1.1-.5 2.2-1.1c1.1-.6 2.2-1.3 2.2-1.3s-.5 1.8-1.2 3.6-1.5 3.5-1.5 3.5zm-2.3-6.7s-.5-1.1-1.1-2.1c-.6-1.1-1.2-2.1-1.2-2.1s.4-1.6.7-3.2c.2-.8.3-1.6.4-2.2.1-.6.2-1 .2-1s.7.9 1.4 1.9c.7 1 1.3 2 1.3 2s-.3 1.7-.8 3.4c-.4 1.6-.9 3.3-.9 3.3zm5.5-2.2s-1.1.7-2.1 1.3c-1.1.6-2.1 1.2-2.1 1.2s.6-1.7 1-3.4l.8-3.4 2-1.4c1-.7 2-1.5 2-1.5s-.1.5-.2 1.1c-.1.7-.3 1.6-.5 2.5-.5 1.8-.9 3.6-.9 3.6zm-4.4-39.9s-1-1.1-2-2.1-2.1-1.9-2.1-1.9.1-1.4.1-2.8V1.1s.3.2.7.5c.5.3 1 .8 1.6 1.2 1.2.9 2.3 2 2.3 2l-.2 3-.4 3z"
      })]
    }),
    _v77 = _v0 => (0, _v1.jsxs)(_v39.bokeh.svg, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 120 47",
      fill: "gray.50",
      ..._v0,
      children: [(0, _v1.jsx)("path", {
        d: "M1 12.76s.5.69 1 1.36l1.06 1.31.21-1.33.24-1.33s-.51-.67-1-1.36l-1-1.41s-.17.68-.31 1.37-.2 1.39-.2 1.39zM7.56 11.42s-.74.36-1.45.76-1.45.82-1.45.82l-.24 1.3-.2 1.3 1.4-.89c.7-.43 1.42-.83 1.42-.83s.11-.62.24-1.23.28-1.23.28-1.23zM1.89 8.64s.45.73.93 1.43 1 1.39 1 1.39.14-.66.3-1.31.34-1.3.34-1.3-.46-.72-.93-1.44l-.87-1.48-.4 1.35zM8.55 7.78L7 8.44c-.76.34-1.5.71-1.5.71s-.18.63-.33 1.28-.3 1.28-.3 1.28.72-.41 1.46-.78 1.47-.73 1.47-.73L8.19 9zM.35 16.95l1.13 1.28c.56.63 1.16 1.23 1.16 1.23s0-.67.11-1.34.14-1.34.14-1.34l-1.1-1.29-1.06-1.33-.2 1.39zM6.83 15.13l-1.4.87-1.38.92s-.08.65-.14 1.31-.11 1.31-.11 1.31.65-.51 1.33-1l1.35-.93.16-1.25zM0 21.16s.59.61 1.22 1.2L2.5 23.5v-1.35-1.35s-.5-.58-1.12-1.2L.22 18.35l-.1 1.4c-.05.71-.12 1.41-.12 1.41zM6.36 18.88L5 19.84c-.67.49-1.31 1-1.31 1v2.64l1.26-1.08c.63-.53 1.28-1 1.28-1s0-.63.06-1.26zM0 25.38l1.3 1.11 1.32 1.05s-.06-.67-.08-1.34l-.05-1.35-1.24-1.12C.62 23.17 0 22.57 0 22.57V25.38zM6.18 22.65s-.64.52-1.26 1.06l-1.23 1.11.05 1.32c0 .66.08 1.32.08 1.32L5 26.29l1.2-1.12v-1.26c0-.63-.02-1.26-.02-1.26zM.33 29.59s.68.52 1.38 1 1.39 1 1.39 1-.1-.67-.18-1.33-.15-1.34-.15-1.34-.69-.5-1.35-1L.1 26.79l.1 1.4zM6.26 26.43l-1.17 1.15c-.59.58-1.15 1.19-1.15 1.19s.05.66.14 1.31l.18 1.31s.53-.64 1.09-1.25 1.12-1.2 1.12-1.2l-.12-1.25zM.93 33.78s.71.47 1.44.91l1.46.85-.28-1.32-.24-1.32s-.7-.45-1.41-.9-1.4-1-1.4-1 .09.7.2 1.39.23 1.39.23 1.39zM6.62 30.19s-.56.6-1.09 1.23-1.06 1.28-1.06 1.28L4.7 34l.3 1.28L6 34c.5-.65 1-1.28 1-1.28s-.12-.62-.21-1.24-.17-1.29-.17-1.29zM1.83 37.91l1.51.8c.75.39 1.52.74 1.52.74s-.2-.64-.37-1.29l-.34-1.3L2.67 36l-1.47-.84.3 1.38zM7.24 33.92l-1 1.3-1 1.35s.16.64.33 1.28.43 1.26.43 1.26.43-.71.9-1.39l.93-1.35-.3-1.22zM3 42s.78.36 1.56.69 1.57.63 1.57.63-.2-.67-.43-1.32-.43-1.27-.43-1.27-.78-.33-1.54-.73l-1.53-.73.4 1.35zM8.14 37.59L7.24 39c-.45.7-.86 1.41-.86 1.41s.2.63.43 1.25l.46 1.24s.38-.74.79-1.46.83-1.44.83-1.44l-.39-1.2zM4.53 45.91s.8.3 1.61.57l1.61.52-.55-1.23-.53-1.24s-.79-.28-1.58-.59-1.58-.65-1.58-.65.24.66.5 1.32.52 1.3.52 1.3zM9.3 41.18s-.41.71-.8 1.43-.76 1.47-.76 1.47l.51 1.21.54 1.2.7-1.49c.35-.74.73-1.47.73-1.47s-.25-.58-.47-1.17-.45-1.18-.45-1.18zM8.17 4.27V2.15c0-1.07.11-2.15.11-2.15s-.79.74-1.54 1.53-1.5 1.61-1.5 1.61v2.2c0 1.09.13 2.17.13 2.17s.66-.85 1.35-1.67 1.45-1.57 1.45-1.57zM113 13.89s.72.4 1.42.83l1.4.89-.2-1.3-.24-1.3s-.72-.42-1.44-.82-1.45-.76-1.45-.76.15.61.27 1.23l.24 1.23zM118.45 10s-.47.72-1 1.41-1 1.36-1 1.36l.24 1.33.21 1.33 1.1-1.31c.53-.67 1-1.36 1-1.36s-.12-.69-.27-1.38-.28-1.38-.28-1.38zM112.14 10.2s.74.35 1.47.73 1.46.78 1.46.78-.14-.64-.3-1.28-.33-1.28-.33-1.28-.74-.37-1.5-.71l-1.5-.66.37 1.22zM117.34 5.93l-.86 1.48c-.43.73-.9 1.43-.9 1.43s.19.65.34 1.3.3 1.31.3 1.31.5-.68 1-1.39.93-1.43.93-1.43l-.37-1.36zM113.51 17.62l1.35.93c.68.48 1.33 1 1.33 1s0-.66-.11-1.31-.14-1.31-.14-1.31l-1.37-.93-1.4-.87.18 1.24zM119.27 14.16l-1.06 1.33-1.1 1.29s.08.67.14 1.34.11 1.34.11 1.34.59-.6 1.16-1.23l1.13-1.28-.17-1.4zM113.79 21.39s.65.5 1.28 1l1.26 1.08v-1.32-1.32s-.64-.52-1.31-1l-1.32-1 .09 1.26c-.02.67 0 1.3 0 1.3zM119.78 18.35l-1.16 1.25c-.58.62-1.19 1.2-1.19 1.2v2.7l1.24-1.15c.62-.58 1.22-1.2 1.22-1.2s0-.7-.07-1.4zM113.8 25.17l1.2 1.12 1.17 1.17s.05-.66.08-1.32l.05-1.32-1.24-1.11c-.61-.54-1.26-1.06-1.26-1.06v2.52zM120 22.57s-.61.6-1.24 1.17l-1.27 1.12-.05 1.35c0 .67-.08 1.34-.08 1.34l1.32-1.05 1.3-1.11v-1.41c0-.71.02-1.41.02-1.41zM113.53 28.94s.57.59 1.12 1.2 1.09 1.25 1.09 1.25.1-.65.18-1.31.14-1.31.14-1.31-.56-.61-1.15-1.19l-1.17-1.15-.09 1.26zM119.9 26.79l-1.33 1.07c-.66.53-1.35 1-1.35 1s-.06.67-.15 1.34l-.18 1.33s.71-.46 1.39-1 1.38-1 1.38-1l.13-1.4zM113 32.68s.53.63 1 1.28l1 1.32.3-1.28.24-1.3s-.52-.65-1.06-1.27-1.09-1.23-1.09-1.23-.08.62-.18 1.25-.21 1.23-.21 1.23zM119.5 31s-.69.5-1.4 1-1.41.92-1.41.92l-.24 1.32-.28 1.32 1.46-.85c.73-.44 1.44-.91 1.44-.91s.13-.69.23-1.39l.2-1.41zM112.19 36.37l.93 1.35c.46.69.9 1.39.9 1.39s.2-.63.37-1.27.33-1.28.33-1.28l-1-1.35-1-1.3-.27 1.23zM118.8 35.16l-1.47.87-1.48.82s-.16.65-.34 1.3-.37 1.29-.37 1.29.77-.36 1.52-.74l1.51-.8.33-1.37zM111.11 40s.43.7.83 1.41.79 1.46.79 1.46.24-.61.46-1.24.43-1.25.43-1.25-.41-.72-.86-1.41l-.9-1.37-.36 1.21zM117.8 39.27l-1.53.76c-.76.37-1.54.71-1.54.71s-.2.64-.43 1.27-.47 1.26-.47 1.26.79-.3 1.57-.63S117 42 117 42l.43-1.34zM109.78 43.52s.38.73.73 1.47l.69 1.51.54-1.2.51-1.21s-.37-.75-.76-1.47-.8-1.43-.8-1.43-.21.59-.45 1.18-.46 1.15-.46 1.15zM116.49 43.29s-.78.34-1.58.65-1.58.59-1.58.59l-.53 1.24-.55 1.23 1.61-.52c.81-.27 1.61-.57 1.61-.57s.28-.65.53-1.3.49-1.32.49-1.32zM114.76 3.15s-.73-.83-1.5-1.61S111.72 0 111.72 0s.07 1.08.1 2.15 0 2.12 0 2.12.71.77 1.41 1.59 1.35 1.67 1.35 1.67.09-1.08.13-2.17.05-2.21.05-2.21z"
      }), (0, _v1.jsx)("path", {
        d: "M18 28.06v4.08h2.56v-7.62H17a2 2 0 0 1-2-2V13.6a1.93 1.93 0 0 1 2-2h4.6a2 2 0 0 1 2 2v5h-3v-3.98H18v6.87h3.6a2 2 0 0 1 2 2v9.67a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2v-5.1zM28 14.62h-2.7v-3h8.42v3H31v20.55h-3zM41 30.55h-3.36l-.47 4.62h-3l2.49-23.58H42l2.43 23.58h-3zm-3-3h2.7l-1.35-12.9zM46.34 35.17V11.58h7.58v3h-4.55v6.5h3.2v3h-3.2v11zM55.94 35.17V11.58h7.58v3H59v6.5h3.2v3H59v11zM68.81 11.58h6.6a2 2 0 0 1 2 2v8.86a2 2 0 0 1-2 2h-3.57v10.73h-3V11.58zm5.59 3h-2.56v6.81h2.56zM79.46 11.58h3v23.59h-3zM90.78 18.66v-4h-2.56v17.48h2.56v-4.08h3v5.12a2 2 0 0 1-2 2h-4.57a2 2 0 0 1-2-2V13.6a2.07 2.07 0 0 1 2-2h4.58a2 2 0 0 1 2 2v5.05zM99.07 11.58v8.86l2.36-8.86h3.2l-3.2 11L105 35.17h-3.13l-2.8-10.31v10.31H96V11.58zM42.77 38.89h2.75a.84.84 0 0 1 .84.84v3.12a.84.84 0 0 1-.84.83H44v3.19h-1.23v-8zm2.33 1.26H44v2.27h1.06zM49.52 43.68h-1.07v3.19h-1.26v-8h2.59a.84.84 0 0 1 .84.84v2.59a.67.67 0 0 1-.43.69.83.83 0 0 1 .59.83v3.07h-1.26zm-1.06-1.26h.91v-2.27h-.91zM55.14 46.88h-3.25v-8H55v1.26h-1.84v2h1.33v1.26h-1.33v2.17h2zM60.44 46.88v-4.32l-1 3.19h-1l-1-3.19v4.31h-1.3v-8h1.26l1.5 4.61 1.56-4.61h1.24v8zM62.81 38.89h1.26v8h-1.26zM68.44 46.88h-3.25v-8h3.15v1.26h-1.88v2h1.33v1.26h-1.33v2.17h2zM71.75 43.68h-1.07v3.19h-1.26v-8H72a.84.84 0 0 1 .84.84v2.59a.67.67 0 0 1-.43.69.83.83 0 0 1 .59.83v3.07h-1.25zm-1.06-1.26h.91v-2.27h-.91zM77.38 46.88h-3.25v-8h3.15v1.26h-1.89v2h1.33v1.26h-1.33v2.17h2z"
      })]
    }),
    _v78 = ({
      flairType: _v0,
      ..._v1
    }) => {
      switch (_v0) {
        case "staff_pick":
          return (0, _v1.jsx)(_v76, {
            ..._v1
          });
        case "staff_pick_premiere":
          return (0, _v1.jsx)(_v77, {
            ..._v1
          });
        default:
          return (0, _v1.jsx)(_v35.Box, {
            ..._v1,
            visibility: "hidden"
          });
      }
    },
    _v79 = "watch-hero-carousel",
    _v80 = () => {
      let _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8 = (0, _v20.useOptionalViewer)(),
        {
          trackWatchHeroButtonClicked: _v9,
          trackWatchHeroSlideImpression: _v10,
          trackWatchHeroCarouselNavigated: _v11,
          trackWatchHeroClicked: _v12
        } = (0, _v16.useWatchTracking)(),
        {
          heroRef: _v13,
          registerSlideCandidate: _v14
        } = (_v0 = (0, _v11.useRef)(null), _v1 = (0, _v11.useRef)(new Set()), _v2 = (0, _v11.useRef)(null), _v3 = (0, _v11.useRef)(null), _v4 = (0, _v11.useRef)(!1), _v5 = (0, _v11.useRef)(!0), _v6 = (0, _v11.useCallback)(() => {
          null !== _v2.current && (window.clearTimeout(_v2.current), _v2.current = null);
        }, []), _v7 = (0, _v11.useCallback)(() => {
          let _v0 = _v3.current;
          if (null === _v0 || _v1.current.has(_v0.page) || !_v5.current || !_v4.current) return;
          let _v1 = () => {
            _v1.current.add(_v0.page), _v3.current = null, _v2.current = null, _v0.fire();
          };
          "user" === _v0.method ? _v1() : null === _v2.current && (_v2.current = window.setTimeout(() => {
            _v2.current = null, _v3.current === _v0 && _v5.current && _v4.current && _v1();
          }, 0));
        }, []), (0, _v11.useEffect)(() => {
          _v5.current = "visible" === document.visibilityState;
          let _v0 = () => {
            _v5.current = "visible" === document.visibilityState, _v5.current ? _v7() : _v6();
          };
          document.addEventListener("visibilitychange", _v0);
          let _v1 = _v0.current,
            _v2 = new IntersectionObserver(_v0 => {
              let _v1 = _v0[_v0.length - 1];
              _v4.current = void 0 !== _v1 && _v1.intersectionRatio >= .5, _v4.current ? _v7() : _v6();
            }, {
              threshold: [.5]
            });
          return null !== _v1 && _v2.observe(_v1), () => {
            document.removeEventListener("visibilitychange", _v0), _v2.disconnect(), _v6(), _v3.current = null;
          };
        }, [_v7, _v6]), {
          heroRef: _v0,
          registerSlideCandidate: (0, _v11.useCallback)(_v0 => {
            _v1.current.has(_v0.page) || (_v3.current = _v0, _v6(), _v7());
          }, [_v7, _v6])
        }),
        {
          data: _v15,
          isLoading: _v16
        } = _v74(() => _v8 ? {
          select: ["artUrl", "description", "flairType", "video.link", "video.name", "video.uri", "video.user.link", "video.user.name", "video.user.pictures"]
        } : null),
        _v17 = (0, _v33.useMarginXValue)({
          base: "2rem"
        }),
        _v18 = (0, _v36.useBreakpointValue)({
          base: (0, _v72.rem)(16),
          lg: (0, _v72.rem)(24)
        }),
        _v19 = (0, _v36.useBreakpointValue)({
          base: !0,
          md: !1
        }),
        _v20 = (0, _v11.useRef)(!1),
        _v21 = (0, _v11.useRef)(null),
        _v22 = (0, _v11.useRef)(null),
        _v23 = (0, _v11.useRef)(0),
        _v24 = (0, _v11.useRef)(!1),
        _v25 = (0, _v11.useCallback)(_v0 => {
          _v21.current = {
            method: _v0,
            at: Date.now()
          };
        }, []),
        _v26 = (0, _v11.useCallback)(() => {
          _v22.current = Date.now();
        }, []),
        _v27 = (0, _v11.useCallback)(_v0 => {
          0 !== _v0.deltaX && _v26();
        }, [_v26]),
        _v28 = (0, _v11.useCallback)(_v0 => {
          let _v1 = _v0 => {
            let _v1 = document.getElementById(_v79);
            if (!_v1 || !_v1.contains(_v0)) return !1;
            let _v2 = _v0 instanceof Element ? _v0 : _v0.parentElement;
            return null !== _v2 && null !== _v2.closest('[data-part="item-group"], [data-part="indicator-group"]');
          };
          if ("ArrowLeft" === _v0.key || "ArrowRight" === _v0.key) {
            _v0.target instanceof Node && _v1(_v0.target) && _v25("arrow");
            return;
          }
          ["Home", "End"].includes(_v0.key) && _v0.target instanceof Node && _v1(_v0.target) && _v26();
        }, [_v25, _v26]);
      (0, _v11.useLayoutEffect)(() => (window.addEventListener("keydown", _v28, !0), () => window.removeEventListener("keydown", _v28, !0)), [_v28]);
      let _v29 = (0, _v11.useMemo)(() => _v15?.data?.filter(_v0 => _v0.video), [_v15]),
        _v30 = (0, _v11.useCallback)(_v0 => {
          if (_v29 && _v29[_v0]) return (0, _v64.idFromUri)(_v29[_v0].video.uri);
        }, [_v29]);
      (0, _v11.useEffect)(() => {
        if (_v8 && !_v16 && !_v20.current) {
          _v20.current = !0;
          let _v0 = _v30(0);
          _v14({
            page: 0,
            method: "initial",
            fire: () => {
              (0, _v34.trackWidgetViewEvent)({
                videoId: _v0,
                viewer: _v8,
                widgetName: "promoted_video_hero",
                widgetPlacement: 1
              }), void 0 !== _v0 && _v10({
                clipId: String(_v0),
                watchHeroSlideIndex: 0,
                watchHeroSlideMethod: "initial"
              });
            }
          });
        }
      }, [_v30, _v16, _v8, _v14, _v10]);
      let _v31 = (0, _v11.useCallback)(_v0 => {
          let _v1 = _v23.current;
          _v23.current = _v0.page;
          let _v2 = Date.now(),
            _v3 = _v30(_v0.page),
            _v4 = _v21.current,
            _v5 = null !== _v4 && _v2 - _v4.at < 0,
            _v6 = _v22.current,
            _v7 = !_v19 && !_v5 && null !== _v6 && _v2 - _v6 < 0,
            _v8 = !_v19 && !_v5 && !_v7;
          if (_v21.current = null, _v22.current = null, void 0 === _v3 || !_v5 && !_v19 && !_v8) return;
          let _v9 = _v5 || _v19 || _v7 ? "user" : "autoplay";
          _v5 && _v0.page !== _v1 && _v11({
            watchHeroDirection: _v0.page > _v1 ? "next" : "previous",
            watchHeroMethod: _v4.method,
            watchHeroSlideIndex: _v0.page
          }), _v14({
            page: _v0.page,
            method: _v9,
            fire: () => {
              (0, _v34.trackWidgetViewEvent)({
                videoId: _v3,
                viewer: _v8,
                widgetName: "promoted_video_hero",
                widgetPlacement: 1
              }), _v10({
                clipId: String(_v3),
                watchHeroSlideIndex: _v0.page,
                watchHeroSlideMethod: _v9
              });
            }
          });
        }, [_v30, _v19, _v14, _v10, _v11, _v8]),
        _v32 = (0, _v63.useCommunityLoopParams)(),
        _v33 = {
          base: "linear-gradient(0deg, #000 15%, rgba(0, 0, 0, 0.00) 75%)",
          lg: "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 75%)"
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v2.default, {
          children: _v29?.slice(0, 3).map(_v0 => (0, _v1.jsx)("link", {
            rel: "preload",
            as: "image",
            fetchPriority: "high",
            href: _v0.artUrl
          }, `preload-${_v0.video.uri}`))
        }), (0, _v1.jsx)(_v35.Box, {
          ref: _v13,
          onWheel: _v27,
          children: _v16 ? (0, _v1.jsx)(_v56.Skeleton, {
            height: {
              base: (0, _v72.rem)(432),
              lg: (0, _v72.rem)(400),
              xl: (0, _v72.rem)(480)
            },
            marginX: _v17,
            width: "unset"
          }) : (0, _v1.jsxs)(_v71.Carousel, {
            ids: {
              root: _v79
            },
            slideCount: _v29?.length || 0,
            height: {
              base: (0, _v72.rem)(432),
              lg: (0, _v72.rem)(400),
              "2xl": (0, _v72.rem)(480)
            },
            padding: _v17,
            spacing: _v18,
            sx: {
              '> [data-part="item-group"]': {
                overscrollBehaviorY: "unset !important"
              }
            },
            onPageChange: _v31,
            ...(!_v19 && {
              autoplay: {
                delay: 0
              }
            }),
            children: [(0, _v1.jsxs)(_v71.CarouselControl, {
              width: "100%",
              display: {
                base: "none",
                md: "flex"
              },
              children: [(0, _v1.jsx)(_v71.CarouselPrevTrigger, {
                height: "100% !important",
                size: "lg",
                bg: "transparent",
                borderRadius: "unset",
                sx: {
                  svg: {
                    opacity: .6
                  },
                  _hover: {
                    backgroundColor: "unset !important",
                    svg: {
                      opacity: 1
                    }
                  }
                },
                width: {
                  base: (0, _v72.rem)(32),
                  xl: (0, _v72.rem)(48)
                },
                zIndex: "2",
                onClick: () => {
                  _v25("arrow");
                }
              }), (0, _v1.jsx)(_v71.CarouselNextTrigger, {
                height: "100% !important",
                size: "lg",
                bg: "transparent",
                borderRadius: "unset",
                sx: {
                  svg: {
                    opacity: .6
                  },
                  _hover: {
                    backgroundColor: "unset !important",
                    svg: {
                      opacity: 1
                    }
                  }
                },
                width: {
                  base: (0, _v72.rem)(32),
                  xl: (0, _v72.rem)(48)
                },
                zIndex: "2",
                justifyContent: "flex-end",
                onClick: () => {
                  _v25("arrow");
                }
              })]
            }), (0, _v1.jsx)(_v71.CarouselItemGroup, {
              width: "100%",
              marginBottom: {
                base: "xl",
                lg: "unset"
              },
              overscrollBehaviorX: "contain",
              overscrollBehaviorY: "unset",
              sx: {
                "> [data-inview]": {
                  opacity: 1,
                  transition: "opacity 0.5s ease-in",
                  ".meta": {
                    transition: "visibility 0.5s ease-in",
                    visibility: "visible"
                  }
                }
              },
              children: _v29?.map((_v0, _v1) => (0, _v1.jsx)(_v71.CarouselItem, {
                index: _v1,
                borderRadius: "md",
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                opacity: .25,
                transition: "opacity 0.5s ease-out",
                children: (0, _v1.jsxs)(_v69.default, {
                  href: (0, _v63.appendProvenanceParams)(`${_v0.video.link}${_v32}`, "hero", _v1 + 1),
                  onClick: () => {
                    _v24.current || _v12({
                      clipId: String((0, _v64.idFromUri)(_v0.video.uri)),
                      watchHeroSlideIndex: _v1,
                      watchHeroElement: "image"
                    }), _v24.current = !1, (0, _v34.trackCarouselVideoClickEvent)({
                      copy: null,
                      target: _v0.video.link,
                      videoId: (0, _v64.idFromUri)(_v0.video.uri),
                      viewer: _v8
                    });
                  },
                  children: [(0, _v1.jsx)(_v35.Box, {
                    backgroundImage: `url(${_v0.artUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    role: "img"
                  }), (0, _v1.jsx)(_v35.Box, {
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "100%",
                    background: _v33
                  }), (0, _v1.jsxs)(_v13.Flex, {
                    position: "absolute",
                    bottom: {
                      base: "md",
                      md: "xl",
                      xl: "3xl"
                    },
                    left: {
                      base: "md",
                      md: "xl",
                      xl: "3xl"
                    },
                    right: {
                      base: "md",
                      md: "xl",
                      xl: "3xl"
                    },
                    direction: "column",
                    gap: {
                      base: "sm",
                      xl: "md"
                    },
                    transition: "visibility 0.5s ease-in",
                    visibility: "hidden",
                    className: "meta",
                    maxW: "45rem",
                    children: [(0, _v1.jsx)(_v78, {
                      flairType: _v0.flairType,
                      width: {
                        base: (0, _v72.rem)(85),
                        xl: (0, _v72.rem)(106)
                      },
                      height: {
                        base: (0, _v72.rem)(32),
                        xl: (0, _v72.rem)(40)
                      }
                    }), (0, _v1.jsx)(_v43.Header, {
                      as: "p",
                      size: {
                        base: "md",
                        sm: "lg",
                        md: "xl",
                        "2xl": "2xl"
                      },
                      pb: "2px",
                      color: "gray.50",
                      noOfLines: 3,
                      children: _v0.video.name
                    }), (0, _v1.jsx)("object", {
                      children: (0, _v1.jsxs)(_v13.Flex, {
                        gap: "sm",
                        alignItems: "center",
                        as: _v69.default,
                        href: _v0.video.user.link,
                        width: "fit-content",
                        marginTop: "-2px",
                        onClick: _v0 => {
                          _v0.stopPropagation(), (0, _v34.trackCreatorNameClick)({
                            target: _v0.video.user.link,
                            viewer: _v8,
                            widgetName: "promoted_video_hero",
                            widgetPlacement: 1
                          });
                        },
                        children: [(0, _v1.jsx)(_v35.Box, {
                          children: (0, _v1.jsx)(_v70.Avatar, {
                            size: "xs",
                            src: _v0.video.user?.pictures?.sizes.find(_v0 => _v0.width > 42)?.link,
                            alt: "avatar",
                            nameProps: {
                              name: _v0.video.user?.name ?? ""
                            }
                          })
                        }), (0, _v1.jsx)(_v43.Header, {
                          size: "xs",
                          color: "gray.50",
                          children: _v0.video.user?.name
                        })]
                      })
                    }), _v0.description && (0, _v1.jsx)(_v44.Text, {
                      variant: {
                        base: "body-md",
                        xl: "body-lg"
                      },
                      color: "gray.50",
                      noOfLines: 3,
                      children: _v0.description
                    }), (0, _v1.jsx)(_v41.DarkMode, {
                      children: (0, _v1.jsx)(_v46.Button, {
                        variant: "primary",
                        leftIcon: (0, _v1.jsx)(_v47.PlayFilled, {}),
                        width: {
                          base: "unset",
                          md: "fit-content"
                        },
                        as: "a",
                        href: (0, _v63.appendProvenanceParams)(`${_v0.video.link}${_v32}`, "hero", _v1 + 1),
                        onClick: () => {
                          (0, _v34.trackCarouselVideoClickEvent)({
                            copy: "watch",
                            target: _v0.video.link,
                            videoId: (0, _v64.idFromUri)(_v0.video.uri),
                            viewer: _v8
                          }), _v24.current = !0, _v9({
                            clipId: String((0, _v64.idFromUri)(_v0.video.uri))
                          }), _v12({
                            clipId: String((0, _v64.idFromUri)(_v0.video.uri)),
                            watchHeroSlideIndex: _v1,
                            watchHeroElement: "button"
                          });
                        },
                        children: (0, _v75.translate)({
                          singular: "Watch",
                          dictionary: {
                            es: {
                              singular: "Ver"
                            },
                            "de-DE": {
                              singular: "Anschauen"
                            },
                            "fr-FR": {
                              singular: "Regarder"
                            },
                            "ja-JP": {
                              singular: "鑑賞"
                            },
                            "ko-KR": {
                              singular: "시청하기"
                            },
                            "pt-BR": {
                              singular: "Assistir"
                            },
                            "zh-CN": {
                              singular: "观看"
                            }
                          }
                        })
                      })
                    })]
                  })]
                })
              }, _v0.video.uri))
            }), (0, _v1.jsx)(_v71.CarouselIndicatorGroup, {
              bottom: {
                base: "0",
                lg: "5%"
              },
              height: "30px",
              children: _v29?.map((_v0, _v1) => (0, _v1.jsx)(_v71.CarouselIndicator, {
                bgColor: {
                  base: "text-secondary",
                  lg: "whiteAlpha.500"
                },
                index: _v1,
                size: "sm",
                height: "8px",
                width: "8px",
                sx: {
                  "&[data-current]": {
                    bgColor: {
                      base: "text-primary",
                      lg: "white"
                    },
                    height: "12px",
                    width: "12px"
                  },
                  _hover: {
                    bgColor: {
                      base: "text-primary",
                      lg: "white"
                    }
                  }
                },
                onClick: () => {
                  _v25("dot");
                }
              }, _v1))
            })]
          })
        })]
      });
    },
    _v81 = () => "u" > typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
    _v82 = () => {
      let [_v0] = (0, _v11.useState)(_v81);
      return _v0;
    },
    _v83 = _v0 => {
      let _v1 = _v0?.parentElement;
      for (; _v1;) {
        let {
          overflowY: _v0
        } = window.getComputedStyle(_v1);
        if ("auto" === _v0 || "scroll" === _v0) return _v1;
        _v1 = _v1.parentElement;
      }
      return window;
    },
    _v84 = _v0 => _v0 instanceof Window ? _v0.scrollY : _v0.scrollTop;
  function _v85(_v0, _v1, _v2, _v3) {
    let {
        trackWatchPageExited: _v4
      } = (0, _v16.useWatchTracking)(),
      _v5 = (0, _v10.useRouter)(),
      _v6 = (0, _v11.useRef)(0),
      _v7 = (0, _v11.useRef)(0),
      _v8 = (0, _v11.useRef)(!1),
      _v9 = (0, _v11.useRef)(null),
      _v10 = (0, _v11.useRef)(null),
      _v11 = (0, _v11.useRef)(0),
      _v12 = (0, _v11.useRef)(null),
      _v13 = (0, _v11.useRef)(null);
    (0, _v11.useEffect)(() => {
      _v6.current = Date.now();
      let _v0 = () => {
        "visible" === document.visibilityState ? _v12.current = Date.now() : null !== _v12.current && (_v11.current += Date.now() - _v12.current, _v12.current = null);
      };
      "visible" === document.visibilityState && (_v12.current = Date.now()), document.addEventListener("visibilitychange", _v0);
      let _v1 = _v83(_v0.current);
      _v10.current = _v1;
      let _v2 = () => {
        null === _v9.current && (_v9.current = window.requestAnimationFrame(() => {
          _v9.current = null, (() => {
            let _v0 = _v10.current;
            if (null === _v0) return;
            let _v1 = _v84(_v0);
            _v1 > _v7.current && (_v7.current = _v1);
          })();
        }));
      };
      return _v1.addEventListener("scroll", _v2, {
        passive: !0
      }), () => {
        document.removeEventListener("visibilitychange", _v0), _v1.removeEventListener("scroll", _v2), null !== _v9.current && window.cancelAnimationFrame(_v9.current);
      };
    }, [_v0]), (0, _v11.useEffect)(() => {
      null !== _v13.current && (window.clearTimeout(_v13.current), _v13.current = null);
      let _v0 = _v0 => {
          if (_v0 instanceof PageTransitionEvent && "pagehide" === _v0.type && _v0.persisted || _v8.current) return;
          _v8.current = !0;
          let _v1 = _v10.current ?? window;
          0 === _v7.current && (_v7.current = _v84(_v1));
          let _v2 = _v11.current + (null !== _v12.current ? Date.now() - _v12.current : 0);
          _v4({
            watchTimeOnPageMs: Date.now() - _v6.current,
            watchActiveTimeMs: _v2,
            watchMaxScrollDepthPercent: ((_v0, _v1) => {
              if (!(_v1 instanceof Window)) {
                let {
                  clientHeight: _v0,
                  scrollHeight: _v1
                } = _v1;
                return _v1 <= _v0 ? 100 : Math.min(100, Math.round((_v0 + _v0) / _v1 * 100));
              }
              let _v2 = document.documentElement;
              return _v2.scrollHeight - window.innerHeight <= 0 ? 100 : Math.min(100, Math.round((_v0 + window.innerHeight) / _v2.scrollHeight * 100));
            })(_v7.current, _v1),
            watchSectionsReached: _v1.current,
            watchPageArm: _v2,
            watchVisitId: _v3,
            sendImmediately: !0
          });
        },
        _v1 = _v0 => {
          _v0.persisted && (_v6.current = Date.now(), _v11.current = 0, _v12.current = "visible" === document.visibilityState ? Date.now() : null);
        };
      return window.addEventListener("pagehide", _v0), window.addEventListener("pageshow", _v1), _v5.events.on("beforeHistoryChange", _v0), () => {
        window.removeEventListener("pagehide", _v0), window.removeEventListener("pageshow", _v1), _v5.events.off("beforeHistoryChange", _v0), null !== _v13.current && window.clearTimeout(_v13.current), _v13.current = window.setTimeout(() => {
          _v13.current = null, _v0();
        }, 0);
      };
    }, [_v4, _v1, _v5.events, _v2, _v3]);
  }
  let _v86 = (0, _v8.default)(async () => {
    let {
      LoginJoinModal: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    }
  });
  function _v87({
    playerAssetUrls: _v0
  }) {
    let _v1 = (0, _v20.useOptionalViewer)(),
      _v2 = (0, _v11.useRef)(null),
      _v3 = (0, _v11.useRef)(0),
      _v4 = (0, _v11.useRef)(null);
    (0, _v11.useEffect)(() => {
      _v4.current = (0, _v16.getLandingUrl)();
    }, []);
    let _v5 = (0, _v11.useCallback)(() => {
        _v3.current += 1;
      }, []),
      _v6 = _v82();
    _v85(_v2, _v3, "control", _v6);
    let [_v7, _v8] = (0, _v11.useState)(!1),
      [_v9, _v10] = (0, _v11.useState)("join"),
      _v11 = (0, _v9.usePathname)(),
      _v12 = (0, _v10.useRouter)(),
      {
        trackWatchPageDisplayed: _v13
      } = (0, _v16.useWatchTracking)();
    return (0, _v17.usePicoEffect)(() => null !== _v1 && (_v13({
      referrerPage: (0, _v15.deriveReferrerPage)(),
      watchPageViewerAuthStatus: (0, _v15.deriveViewerAuthStatus)(_v1),
      watchPageArm: "control",
      watchPageUrl: _v4.current ?? void 0,
      watchVisitId: _v6,
      sendImmediately: !0
    }), !0), [_v1], {
      once: !0
    }), (0, _v1.jsxs)(_v13.Flex, {
      ref: _v2,
      flexDir: "column",
      gap: "lg",
      children: [(0, _v1.jsx)(_v80, {}), (0, _v1.jsx)(_v88, {
        type: _v19.PlayerType.BarebonePlayer,
        assetUrls: _v0,
        children: (0, _v1.jsx)(_v68, {
          setShowLoginJoinModal: _v8,
          authModalType: _v9,
          onSectionReached: _v5
        })
      }), null !== _v1 && !_v1?.user && (0, _v1.jsx)(_v22.LoggedOutBanner, {}), (0, _v1.jsx)(_v12.ThemeProvider, {
        theme: _v14.themes.light,
        children: (0, _v1.jsx)(_v86, {
          isShowing: _v7,
          type: _v9,
          onDismiss: () => _v8(!1),
          xsrft: _v1?.xsrft ?? "",
          updateInitialType: _v10,
          redirectUrl: _v11,
          onSuccess: () => {
            _v12.reload();
          },
          bpData: {
            feature: "watch",
            pageName: "watch",
            product: "community"
          }
        })
      }), (0, _v1.jsx)(_v21.FooterContainer, {
        viewer: _v1,
        onLoginSuccess: () => _v12.reload()
      })]
    });
  }
  let _v88 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v18.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = ({
      track: _v0,
      children: _v1
    }) => {
      let _v2 = (0, _v95.useImpressionOnce)(_v0);
      return (0, _v1.jsx)("div", {
        ref: _v2,
        children: _v1
      });
    },
    _v97 = ["staffpick", "staffpick-premiere", "staffpick-best-of-the-year", "staffpick-best-of-the-month"],
    _v98 = ["skeleton-1", "skeleton-2", "skeleton-3", "skeleton-4", "skeleton-5", "skeleton-6"],
    _v99 = ({
      curationComponent: _v0,
      videos: _v1,
      isLoading: _v2,
      isDone: _v3,
      loadMore: _v4,
      widgetPlacement: _v5,
      arm: _v6,
      shouldTrackImpression: _v7
    }) => {
      let _v8 = (0, _v20.useOptionalViewer)(),
        {
          trackWatchVideoThumbnailClicked: _v9,
          trackWatchVideoThumbnailImpression: _v10
        } = (0, _v16.useWatchTracking)(),
        _v11 = (0, _v63.useCommunityLoopParams)(),
        _v12 = (0, _v34.toWatchSection)(_v0),
        _v13 = (0, _v64.idFromUri)(_v0.uri) > 0 ? String((0, _v64.idFromUri)(_v0.uri)) : null,
        _v14 = (0, _v11.useRef)(null);
      return (0, _v11.useEffect)(() => {
        if (!window.IntersectionObserver || _v3) return;
        let _v0 = new IntersectionObserver(_v0 => {
          _v0.some(_v0 => _v0.isIntersecting) && _v4();
        }, {
          rootMargin: "800px"
        });
        return _v14.current && _v0.observe(_v14.current), () => _v0.disconnect();
      }, [_v3, _v2, _v4]), (0, _v1.jsxs)(_v13.Flex, {
        flexDir: "column",
        gap: "lg",
        children: [(0, _v1.jsx)(_v90.SimpleGrid, {
          columns: {
            base: 1,
            sm: 2,
            lg: 3
          },
          gap: "sm",
          w: "100%",
          children: _v2 ? _v98.map(_v0 => (0, _v1.jsx)(_v93.VideoCardSkeleton, {}, _v0)) : _v1.map((_v0, _v1) => {
            let _v2 = (0, _v75.translate)({
                singular: "{COUNT} view",
                plural: "{COUNT} views",
                count: _v0?.stats?.plays ?? 0,
                replacements: {
                  COUNT: (0, _v75.humanize)(_v0?.stats?.plays ?? 0)
                },
                dictionary: {
                  es: {
                    singular: "{COUNT} vista",
                    plural: "{COUNT} vistas"
                  },
                  "de-DE": {
                    singular: "{COUNT} Ansicht",
                    plural: "{COUNT} Ansichten"
                  },
                  "fr-FR": {
                    singular: "{COUNT} vue",
                    plural: "{COUNT} vues"
                  },
                  "ja-JP": {
                    singular: "視聴回数: {COUNT}",
                    plural: "視聴回数: {COUNT}"
                  },
                  "ko-KR": {
                    singular: "{COUNT}회",
                    plural: "{COUNT}회"
                  },
                  "pt-BR": {
                    singular: "{COUNT} visualização",
                    plural: "{COUNT} visualizações"
                  },
                  "zh-CN": {
                    singular: "{COUNT} 观看",
                    plural: "{COUNT} 次观看"
                  }
                }
              }),
              _v3 = _v0?.stats?.plays ? _v2 : "",
              _v4 = _v0.badge?.type && _v97.includes(_v0.badge.type),
              _v5 = _v1 + 1;
            return (0, _v1.jsx)(_v96, {
              track: () => {
                let _v0 = String((0, _v64.idFromUri)(_v0.uri));
                _v7(_v0) && _v10({
                  clipId: _v0,
                  watchSection: _v12,
                  watchSectionId: _v13,
                  watchVideoPosition: _v5,
                  watchPageArm: _v6
                });
              },
              children: (0, _v1.jsx)(_v91.VideoCard, {
                title: _v0.name,
                href: _v13 ? (0, _v63.appendProvenanceParams)(`${_v0.link}${_v11}`, _v13, _v1 + 1) : `${_v0.link}${_v11}`,
                thumbnailSrc: _v0.pictures?.sizes[0].link,
                subtitle: _v3,
                avatarSrc: _v0.user.pictures?.sizes[0].link || "",
                avatarName: _v0.user.name,
                hasFollow: !0,
                followSource: "Watch",
                tagText: (0, _v92.secondsToDisplay)(_v0.duration),
                tagTextStyles: {
                  opacity: 0,
                  _groupHover: {
                    opacity: 1
                  },
                  _groupFocusWithin: {
                    opacity: 1
                  },
                  transition: "opacity 0.2s ease"
                },
                configUrl: _v0.configUrl ?? "",
                clipId: (0, _v64.idFromUri)(_v0.uri),
                creator: {
                  name: _v0.user.name,
                  link: _v0.user.link,
                  user: _v0.user,
                  onClick: () => {
                    _v8 && (0, _v34.trackCreatorNameClick)({
                      target: _v0.user.link,
                      viewer: _v8,
                      widgetName: _v0.title,
                      widgetPlacement: _v5
                    });
                  }
                },
                shouldUseNextLink: !1,
                onClick: () => {
                  _v8 && (0, _v34.trackPlaylistVideoClick)({
                    target: _v0.link,
                    videoId: (0, _v64.idFromUri)(_v0.uri),
                    viewer: _v8,
                    widgetName: _v0.title,
                    widgetPlacement: _v5
                  }), _v9({
                    clipId: String((0, _v64.idFromUri)(_v0.uri)),
                    watchSection: _v12,
                    watchSectionId: _v13,
                    watchVideoPosition: _v5,
                    watchPageArm: _v6
                  });
                },
                titleStyles: {
                  maxWidth: {
                    base: "15rem",
                    md: "calc(100% - 2.5rem)"
                  },
                  minWidth: "9rem"
                },
                ...(_v4 && {
                  topLeftDecoration: (0, _v1.jsx)(_v94.StaffPickBadge, {})
                })
              })
            }, _v0.uri);
          })
        }), !_v3 && !_v2 && (0, _v1.jsx)(_v90.SimpleGrid, {
          ref: _v14,
          columns: {
            base: 1,
            sm: 2,
            lg: 3
          },
          gap: "sm",
          w: "100%",
          children: _v98.slice(0, 3).map(_v0 => (0, _v1.jsx)(_v93.VideoCardSkeleton, {}, _v0))
        }), !_v2 && 0 === _v1.length && (0, _v1.jsx)(_v13.Flex, {
          justifyContent: "center",
          py: "2xl",
          children: (0, _v75.translate)({
            singular: "No videos found",
            dictionary: {
              es: {
                singular: "No se han encontrado vídeos"
              },
              "de-DE": {
                singular: "Keine Videos gefunden"
              },
              "fr-FR": {
                singular: "Aucune vidéo trouvée"
              },
              "ja-JP": {
                singular: "動画が見つかりませんでした"
              },
              "ko-KR": {
                singular: "동영상을 찾을 수 없습니다"
              },
              "pt-BR": {
                singular: "Nenhum vídeo encontrado"
              },
              "zh-CN": {
                singular: "未找到视频"
              }
            }
          })
        })]
      });
    };
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0);
  let _v118 = "showcases",
    _v119 = "channels",
    _v120 = "groups",
    _v121 = (0, _v8.default)(async () => {
      let {
        PublicChannels: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v122 = (0, _v8.default)(async () => {
      let {
        PublicGroups: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v123 = ({
      canAddToCollections: _v0,
      videoId: _v1,
      videoName: _v2,
      isMobile: _v3,
      onAction: _v4
    }) => {
      let {
          openAddToShowcaseModal: _v5,
          closeAddToShowcaseModal: _v6
        } = (0, _v116.useAddToShowcaseModal)(),
        _v7 = (0, _v117.useViewer)(),
        _v8 = _v7?.user?.id ?? 0,
        _v9 = _v7?.isFromCopyrightRestrictedRegion ?? !0,
        _v10 = [{
          id: _v1,
          name: _v2 || "video",
          type: "video"
        }],
        [_v11, _v12] = (0, _v11.useState)(""),
        _v13 = _v0 => {
          _v0 && (_v4("collections_open"), _v0 === _v118 ? _v5({
            onClose: () => {
              _v6(), _v12("");
            },
            showcaseItems: _v10,
            ownerId: _v8,
            pageName: "watch",
            pageUrl: window.location.href,
            isPublic: !0
          }) : _v12(_v0));
        };
      return _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v108.Menu, {
          children: [(0, _v1.jsx)(_v114.Tooltip, {
            label: (0, _v75.translate)({
              singular: "Add to collections",
              dictionary: {
                es: {
                  singular: "Agregar a las colecciones"
                },
                "de-DE": {
                  singular: "Zu Sammlungen hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter aux collections"
                },
                "ja-JP": {
                  singular: "コレクションに追加"
                },
                "ko-KR": {
                  singular: "컬렉션에 추가"
                },
                "pt-BR": {
                  singular: "Adicionar às coleções"
                },
                "zh-CN": {
                  singular: "添加到合集中"
                }
              }
            }),
            isDisabled: _v3,
            placement: "top",
            children: (0, _v1.jsx)(_v109.MenuButton, {
              as: _v107.IconButton,
              "aria-label": (0, _v75.translate)({
                singular: "Add to collections",
                dictionary: {
                  es: {
                    singular: "Agregar a las colecciones"
                  },
                  "de-DE": {
                    singular: "Zu Sammlungen hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter aux collections"
                  },
                  "ja-JP": {
                    singular: "コレクションに追加"
                  },
                  "ko-KR": {
                    singular: "컬렉션에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar às coleções"
                  },
                  "zh-CN": {
                    singular: "添加到合集中"
                  }
                }
              }),
              variant: "tertiary",
              size: "sm",
              icon: (0, _v1.jsx)(_v115.HoverAnimatedIcon, {
                iconName: "3-layers"
              }),
              onFocus: _v0 => _v0.preventDefault()
            })
          }), (0, _v1.jsxs)(_v113.MenuList, {
            children: [(0, _v1.jsxs)(_v111.MenuGroup, {
              title: (0, _v75.translate)({
                singular: "Add to",
                dictionary: {
                  es: {
                    singular: "Añadir a"
                  },
                  "de-DE": {
                    singular: "Hinzufügen zu"
                  },
                  "fr-FR": {
                    singular: "Ajouter à"
                  },
                  "ja-JP": {
                    singular: "追加"
                  },
                  "ko-KR": {
                    singular: "다음에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar a"
                  },
                  "zh-CN": {
                    singular: "添加到"
                  }
                }
              }),
              children: [(0, _v1.jsx)(_v112.MenuItem, {
                onClick: () => _v13(_v118),
                children: (0, _v75.translate)({
                  singular: "Showcase",
                  dictionary: {
                    es: {
                      singular: "Presentaciones"
                    },
                    "de-DE": {
                      singular: "Präsentation"
                    },
                    "fr-FR": {
                      singular: "Présentation"
                    },
                    "ja-JP": {
                      singular: "作品集"
                    },
                    "ko-KR": {
                      singular: "쇼케이스"
                    },
                    "pt-BR": {
                      singular: "Vitrine"
                    },
                    "zh-CN": {
                      singular: "橱窗"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v112.MenuItem, {
                onClick: () => _v13(_v119),
                children: (0, _v75.translate)({
                  singular: "Channel",
                  dictionary: {
                    es: {
                      singular: "Canal"
                    },
                    "de-DE": {
                      singular: "Kanal"
                    },
                    "fr-FR": {
                      singular: "Chaîne"
                    },
                    "ja-JP": {
                      singular: "チャンネル"
                    },
                    "ko-KR": {
                      singular: "채널"
                    },
                    "pt-BR": {
                      singular: "Canal"
                    },
                    "zh-CN": {
                      singular: "频道"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v112.MenuItem, {
                onClick: () => _v13(_v120),
                children: (0, _v75.translate)({
                  singular: "Group",
                  dictionary: {
                    es: {
                      singular: "Grupo"
                    },
                    "de-DE": {
                      singular: "Gruppe"
                    },
                    "fr-FR": {
                      singular: "Groupe"
                    },
                    "ja-JP": {
                      singular: "グループ"
                    },
                    "ko-KR": {
                      singular: "그룹"
                    },
                    "pt-BR": {
                      singular: "Grupo"
                    },
                    "zh-CN": {
                      singular: "群组"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v110.MenuDivider, {}), !_v9 && (0, _v1.jsx)(_v112.MenuItem, {
              onClick: () => {
                window.location.href = `/${_v1}/collections/`;
              },
              children: (0, _v75.translate)({
                singular: "Explore collections",
                dictionary: {
                  es: {
                    singular: "Explora las colecciones"
                  },
                  "de-DE": {
                    singular: "Kollektionen entdecken"
                  },
                  "fr-FR": {
                    singular: "Explorez des collections"
                  },
                  "ja-JP": {
                    singular: "コレクション全体を探索してみる"
                  },
                  "ko-KR": {
                    singular: "컬렉션 탐색"
                  },
                  "pt-BR": {
                    singular: "Explore coleções"
                  },
                  "zh-CN": {
                    singular: "浏览收藏集"
                  }
                }
              })
            })]
          })]
        }), _v11 === _v119 ? (0, _v1.jsx)(_v121, {
          onClose: () => _v12(""),
          videoId: _v1,
          videoName: _v2 || "video",
          ownerId: _v8,
          pageName: "watch"
        }) : null, _v11 === _v120 ? (0, _v1.jsx)(_v122, {
          onClose: () => _v12(""),
          videoId: _v1,
          videoName: _v2 || "video",
          ownerId: _v8,
          pageName: "watch"
        }) : null]
      }) : null;
    },
    _v124 = ({
      videoLink: _v0,
      totalComments: _v1,
      isMobile: _v2,
      onAction: _v3
    }) => {
      let _v4 = `${_v0}#comments`,
        _v5 = _v0 => {
          _v0.preventDefault(), _v3("comment_open"), window.open(_v4, "_blank", "noopener,noreferrer");
        };
      return (0, _v1.jsx)(_v114.Tooltip, {
        label: (0, _v75.translate)({
          singular: "Comments",
          dictionary: {
            es: {
              singular: "Comentarios"
            },
            "de-DE": {
              singular: "Kommentare"
            },
            "fr-FR": {
              singular: "Commentaires"
            },
            "ja-JP": {
              singular: "コメント"
            },
            "ko-KR": {
              singular: "소감"
            },
            "pt-BR": {
              singular: "Comentários"
            },
            "zh-CN": {
              singular: "评论"
            }
          }
        }),
        isDisabled: _v2,
        placement: "top",
        children: _v1 ? (0, _v1.jsx)(_v46.Button, {
          as: "a",
          href: _v4,
          variant: "tertiary",
          size: "sm",
          leftIcon: (0, _v1.jsx)(_v115.HoverAnimatedIcon, {
            iconName: "comment"
          }),
          onClick: _v5,
          "data-type": "icon-button",
          children: (0, _v75.humanize)(_v1)
        }) : (0, _v1.jsx)(_v107.IconButton, {
          as: "a",
          "aria-label": (0, _v75.translate)({
            singular: "Comments",
            dictionary: {
              es: {
                singular: "Comentarios"
              },
              "de-DE": {
                singular: "Kommentare"
              },
              "fr-FR": {
                singular: "Commentaires"
              },
              "ja-JP": {
                singular: "コメント"
              },
              "ko-KR": {
                singular: "소감"
              },
              "pt-BR": {
                singular: "Comentários"
              },
              "zh-CN": {
                singular: "评论"
              }
            }
          }),
          href: _v4,
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v115.HoverAnimatedIcon, {
            iconName: "comment"
          }),
          onClick: _v5
        })
      });
    };
  var _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0);
  let _v129 = ({
    initialState: _v0,
    canLike: _v1,
    videoId: _v2,
    totalLikes: _v3,
    isMobile: _v4,
    onAction: _v5
  }) => {
    let [_v6, _v7] = (0, _v11.useState)(null),
      [_v8, {
        loading: _v9,
        error: _v10
      }] = (0, _v128.usePutUserLike)(),
      [_v11, {
        loading: _v12,
        error: _v13
      }] = (0, _v128.useDeleteUserLike)(),
      _v14 = (0, _v117.useViewer)(),
      _v15 = (0, _v125.useToast)(),
      _v16 = _v9 || _v12;
    (0, _v11.useEffect)(() => {
      (_v10 || _v13) && _v15({
        title: (0, _v75.translate)({
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
        status: "error",
        icon: (0, _v1.jsx)(_v126.CircleExclamationFilled, {})
      });
    }, [_v10, _v13, _v15]);
    let _v17 = _v16 ? _v6 ?? _v0 : !_v10 && (!!_v13 || (_v6 ?? _v0));
    if (!_v1) return null;
    let _v18 = _v0 === _v17 ? _v3 : _v17 ? _v3 + 1 : Math.max(_v3 - 1, 0);
    return (0, _v1.jsx)(_v127.AnimatedLikeButton, {
      isLiked: _v17,
      isLoading: _v16,
      disableTooltips: _v4,
      onLikeClick: () => {
        _v14?.user?.id && (_v17 ? (_v7(!1), _v5("unlike"), _v11({
          where: {
            userId: _v14.user.id,
            videoId: _v2
          }
        })) : (_v7(!0), _v5("like"), _v8({
          where: {
            userId: _v14.user.id,
            videoId: _v2
          }
        })));
      },
      likesCount: _v18
    });
  };
  var _v130 = _v0.i(0),
    _v131 = _v0.i(0);
  let _v132 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v131.Link, {
      href: "/settings/viewing_preferences",
      target: "_blank",
      variant: "brand",
      fontSize: "body-md",
      children: _v0
    }, "settings_link"),
    _v133 = ({
      onConfirm: _v0
    }) => {
      let _v1 = (0, _v117.useViewer)(),
        _v2 = _v1?.contentViewingPrefs.allowContentRatingBypass;
      return (0, _v1.jsxs)(_v130.Center, {
        w: "100%",
        h: "100%",
        borderRadius: ["none", "none", "lg"],
        flexDirection: "column",
        gap: {
          base: "sm",
          md: "md"
        },
        padding: {
          base: "md",
          md: "3xl"
        },
        blur: "80px",
        bgColor: "fill-surface",
        children: [(0, _v1.jsxs)(_v42.VStack, {
          textAlign: "center",
          gap: {
            base: "xs",
            md: "sm"
          },
          children: [(0, _v1.jsx)(_v43.Header, {
            size: "md",
            children: (0, _v75.translate)({
              singular: "Mature content",
              dictionary: {
                es: {
                  singular: "Contenido para adultos"
                },
                "de-DE": {
                  singular: "Inhalte für Erwachsene"
                },
                "fr-FR": {
                  singular: "Contenu réservé aux adultes"
                },
                "ja-JP": {
                  singular: "成人向けコンテンツ"
                },
                "ko-KR": {
                  singular: "성인용 콘텐츠"
                },
                "pt-BR": {
                  singular: "Conteúdo maduro"
                },
                "zh-CN": {
                  singular: "成人内容"
                }
              }
            })
          }), (0, _v1.jsxs)(_v44.Text, {
            variant: "body-md",
            children: [_v2 ? (0, _v75.translate)({
              singular: "This video may contain profanity, sexually suggestive content, drugs or alcohol use, nudity, or violence.",
              dictionary: {
                es: {
                  singular: "Este vídeo puede contener lenguaje soez, contenido sexualmente sugerente, consumo de drogas o alcohol, desnudez o violencia."
                },
                "de-DE": {
                  singular: "Dieses Video kann obszöne Sprache, sexuell anzügliche Inhalte, Drogen- oder Alkoholkonsum, Nacktheit oder Gewalt enthalten."
                },
                "fr-FR": {
                  singular: "Cette vidéo peut contenir des propos grossiers, du contenu à connotation sexuelle, de la consommation de drogues ou d'alcool, de la nudité ou de la violence."
                },
                "ja-JP": {
                  singular: "この動画には、不適切な言葉、性的示唆を含む表現、薬物やアルコールの使用、ヌード、または暴力が含まれている可能性があります。"
                },
                "ko-KR": {
                  singular: "이 동영상에는 욕설, 성적으로 암시적인 내용, 약물 또는 알코올 사용, 누드 또는 폭력이 포함될 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este vídeo pode conter palavrões, conteúdo sexualmente sugestivo, uso de drogas ou álcool, nudez ou violência."
                },
                "zh-CN": {
                  singular: "该视频可能包含亵渎言语、性暗示、药物或酒精使用、裸露或暴力内容。"
                }
              }
            }) : (0, _v75.translate)({
              singular: "This video is not available due to your permissions",
              dictionary: {
                es: {
                  singular: "Este vídeo no está disponible debido a tus permisos"
                },
                "de-DE": {
                  singular: "Dieses Video ist aufgrund Ihrer Zugriffsrechte nicht verfügbar"
                },
                "fr-FR": {
                  singular: "Cette vidéo n'est pas disponible en raison de vos autorisations"
                },
                "ja-JP": {
                  singular: "この動画はアクセス権限により利用できません"
                },
                "ko-KR": {
                  singular: "이 동영상은 권한으로 인해 이용할 수 없습니다"
                },
                "pt-BR": {
                  singular: "Este vídeo não está disponível devido às suas permissões"
                },
                "zh-CN": {
                  singular: "由于权限限制，您无法访问此视频"
                }
              }
            }), " ", _v2 && (0, _v75.translate)({
              singular: "You can {A}update your mature content preferences{/A} at any time.",
              replacements: {
                A: _v132
              },
              dictionary: {
                es: {
                  singular: "Puedes {A}actualizar tus preferencias de contenido para adultos{/A} en cualquier momento."
                },
                "de-DE": {
                  singular: "Sie können {A}Ihre Einstellungen für Inhalte für Erwachsene aktualisieren{/A} jederzeit."
                },
                "fr-FR": {
                  singular: "Vous pouvez {A}mettre à jour vos préférences de contenu réservé aux adultes{/A} à tout moment."
                },
                "ja-JP": {
                  singular: "いつでも{A}成人向けコンテンツの設定を更新できます{/A}。"
                },
                "ko-KR": {
                  singular: "언제든지 {A}성인용 콘텐츠 환경설정을 업데이트{/A}할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Você pode {A}atualizar suas preferências de conteúdo maduro{/A} a qualquer momento."
                },
                "zh-CN": {
                  singular: "您可以随时{A}更新您的成人内容偏好{/A}。"
                }
              }
            })]
          })]
        }), _v2 && (0, _v1.jsx)(_v46.Button, {
          size: {
            base: "sm",
            md: "md"
          },
          onClick: _v0,
          variant: "primary",
          children: (0, _v75.translate)({
            singular: "Show me the video",
            dictionary: {
              es: {
                singular: "Muéstrame el vídeo"
              },
              "de-DE": {
                singular: "Video anzeigen"
              },
              "fr-FR": {
                singular: "Afficher la vidéo"
              },
              "ja-JP": {
                singular: "動画を表示"
              },
              "ko-KR": {
                singular: "동영상을 보여주세요"
              },
              "pt-BR": {
                singular: "Mostrar o vídeo"
              },
              "zh-CN": {
                singular: "显示视频"
              }
            }
          })
        })]
      });
    };
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0);
  let _v136 = ({
      setShowThumbnail: _v0,
      name: _v1,
      playerEmbedUrl: _v2,
      watchReferrer: _v3,
      onPlaybackStart: _v4,
      player: _v5,
      setPlayer: _v6
    }) => {
      let [_v7, _v8] = (0, _v11.useState)(!1),
        [_v9, _v10] = (0, _v11.useState)(!0),
        _v11 = (0, _v11.useRef)(null),
        _v12 = (0, _v11.useRef)(!1),
        _v13 = (0, _v11.useRef)(!1),
        _v14 = _v135.EmbedPlayerUtility.createEmbedUrl(_v2, _v3 ? {
          referrer: _v3
        } : void 0);
      return (0, _v11.useEffect)(() => {
        if (!window.IntersectionObserver) return;
        let _v0 = new IntersectionObserver(_v0 => {
          _v8(_v0.some(_v0 => _v0.isIntersecting));
        }, {
          threshold: .8
        });
        return _v11.current && _v0.observe(_v11.current), () => {
          _v0.disconnect();
        };
      }, []), (0, _v11.useEffect)(() => ((async () => {
        if (_v5) if (_v7 && !_v12.current) try {
          await _v5.setMuted(_v9), _v13.current = !0, await _v5.play();
        } catch {
          _v13.current = !1, _v12.current = !0, _v0(!0);
        } else _v13.current = !1, await _v5.pause();
      })(), () => {
        _v5?.pause();
      }), [_v7, _v9, _v5, _v0]), (0, _v1.jsx)(_v13.Flex, {
        h: "100%",
        ref: _v11,
        children: (0, _v1.jsx)(_v134.EmbedPlayer, {
          title: _v1,
          src: _v14,
          onPlayerAPIReady: _v0 => {
            _v6(_v0);
          },
          onLoaded: () => {
            _v0(!1);
          },
          onPlay: () => {
            _v4?.(_v13.current);
          },
          onVolumechange: _v0 => {
            _v10(_v0.muted || 0 === _v0.volume);
          },
          onError: () => {
            _v0(!0);
          }
        })
      });
    },
    _v137 = ({
      videoId: _v0,
      name: _v1,
      thumbnail: _v2,
      playerEmbedUrl: _v3,
      watchReferrer: _v4,
      onPlaybackStart: _v5,
      player: _v6,
      setPlayer: _v7,
      topLeftDecoration: _v8,
      contentRating: _v9
    }) => {
      let _v10 = (0, _v117.useViewer)(),
        [_v11, _v12] = (0, _v11.useState)(() => (0, _v103.getIsInitiallyBlocked)(_v10, _v9)),
        _v13 = (0, _v11.useRef)(null),
        [_v14, _v15] = (0, _v11.useState)(!1),
        [_v16, _v17] = (0, _v11.useState)(!0);
      return (0, _v11.useEffect)(() => {
        if (!window.IntersectionObserver || _v14) return;
        let _v0 = new IntersectionObserver(_v0 => {
          _v0.some(_v0 => _v0.isIntersecting) && (_v15(!0), _v0.disconnect());
        }, {
          rootMargin: "400px"
        });
        return _v13.current && _v0.observe(_v13.current), () => _v0.disconnect();
      }, [_v14]), (0, _v1.jsxs)(_v35.Box, {
        borderRadius: ["none", "none", "lg"],
        borderWidth: "1px",
        borderColor: "stroke",
        minW: "100%",
        aspectRatio: _v2.aspectRatio,
        position: "relative",
        overflow: "hidden",
        ref: _v13,
        "data-id": `feed-player-area-${_v0}`,
        children: [_v8 && (0, _v1.jsx)(_v13.Flex, {
          position: "absolute",
          top: "2",
          left: "2",
          zIndex: 1,
          children: _v8
        }), _v11 ? (0, _v1.jsx)(_v133, {
          onConfirm: () => {
            _v12(!1);
          }
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v14 && _v3 && (0, _v1.jsx)(_v136, {
            setShowThumbnail: _v17,
            name: _v1,
            playerEmbedUrl: _v3,
            watchReferrer: _v4,
            onPlaybackStart: _v5,
            player: _v6,
            setPlayer: _v7
          }), (0, _v1.jsx)(_v35.Box, {
            as: "img",
            alt: "",
            src: _v2.src,
            srcSet: _v2.srcset,
            sizes: "(min-width: 1536px) 912px, (min-width: 992px) 592px, (min-width: 768px) 672px, 100vw",
            display: _v16 ? "block" : "none",
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            aspectRatio: _v2.aspectRatio,
            objectFit: "cover"
          })]
        })]
      });
    };
  var _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  let _v140 = ({
    canReport: _v0,
    videoId: _v1,
    isMobile: _v2,
    onAction: _v3
  }) => {
    let {
      isOpen: _v4,
      onClose: _v5,
      onOpen: _v6
    } = (0, _v138.useDisclosure)();
    return _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v114.Tooltip, {
        label: (0, _v75.translate)({
          singular: "Report",
          dictionary: {
            es: {
              singular: "Denunciar"
            },
            "de-DE": {
              singular: "Melden"
            },
            "fr-FR": {
              singular: "Signaler"
            },
            "ja-JP": {
              singular: "通報"
            },
            "ko-KR": {
              singular: "신고"
            },
            "pt-BR": {
              singular: "Denunciar"
            },
            "zh-CN": {
              singular: "报告"
            }
          }
        }),
        isDisabled: _v2,
        placement: "top",
        children: (0, _v1.jsx)(_v107.IconButton, {
          "aria-label": (0, _v75.translate)({
            singular: "Report",
            dictionary: {
              es: {
                singular: "Denunciar"
              },
              "de-DE": {
                singular: "Melden"
              },
              "fr-FR": {
                singular: "Signaler"
              },
              "ja-JP": {
                singular: "通報"
              },
              "ko-KR": {
                singular: "신고"
              },
              "pt-BR": {
                singular: "Denunciar"
              },
              "zh-CN": {
                singular: "报告"
              }
            }
          }),
          onClick: () => {
            _v3("report_open"), _v6();
          },
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v115.HoverAnimatedIcon, {
            iconName: "flag"
          })
        })
      }), (0, _v1.jsx)(_v139.ReportVideoModal, {
        clipId: _v1.toString(),
        isOpen: _v4,
        onClose: _v5,
        onSubmitReport: () => void 0
      })]
    }) : null;
  };
  var _v141 = _v0.i(0);
  let _v142 = (0, _v8.default)(async () => {
      let {
        VideoShareModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v143 = ({
      videoId: _v0,
      player: _v1,
      isMobile: _v2,
      onAction: _v3
    }) => {
      let [_v4, _v5] = (0, _v11.useState)(!1),
        [_v6, _v7] = (0, _v11.useState)(0);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v114.Tooltip, {
          label: (0, _v75.translate)({
            singular: "Share",
            dictionary: {
              es: {
                singular: "Compartir"
              },
              "de-DE": {
                singular: "Teilen"
              },
              "fr-FR": {
                singular: "Partager"
              },
              "ja-JP": {
                singular: "共有"
              },
              "ko-KR": {
                singular: "공유"
              },
              "pt-BR": {
                singular: "Compartilhar"
              },
              "zh-CN": {
                singular: "分享"
              }
            }
          }),
          isDisabled: _v2,
          placement: "top",
          children: (0, _v1.jsx)(_v107.IconButton, {
            "aria-label": (0, _v75.translate)({
              singular: "Share",
              dictionary: {
                es: {
                  singular: "Compartir"
                },
                "de-DE": {
                  singular: "Teilen"
                },
                "fr-FR": {
                  singular: "Partager"
                },
                "ja-JP": {
                  singular: "共有"
                },
                "ko-KR": {
                  singular: "공유"
                },
                "pt-BR": {
                  singular: "Compartilhar"
                },
                "zh-CN": {
                  singular: "分享"
                }
              }
            }),
            onClick: _v0 => {
              (async () => {
                let _v0 = 0;
                try {
                  await _v1?.pause(), _v0 = (await _v1?.getCurrentTime()) ?? 0;
                } catch {}
                _v7(_v0), _v3("share_open"), _v5(!0), _v0.currentTarget?.blur();
              })();
            },
            variant: "tertiary",
            size: "sm",
            icon: (0, _v1.jsx)(_v141.Share, {})
          })
        }), (0, _v1.jsx)(_v142, {
          uri: `video/${_v0}`,
          page: "watch",
          entryPoint: null,
          isResourceShareModalOpen: _v4,
          closeResourceShareModal: () => {
            _v5(!1);
          },
          getPlayerCurrentTime: () => _v6,
          showPrivacyRedesign: !0
        })]
      });
    };
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0);
  let _v146 = ({
    initialState: _v0,
    canWatchLater: _v1,
    videoId: _v2,
    isMobile: _v3,
    onAction: _v4
  }) => {
    let [_v5, _v6] = (0, _v11.useState)(null),
      [_v7, {
        loading: _v8,
        error: _v9
      }] = (0, _v145.usePutUserWatchlater)(),
      [_v10, {
        loading: _v11,
        error: _v12
      }] = (0, _v145.useDeleteUserWatchlater)(),
      _v13 = _v8 || _v11,
      _v14 = (0, _v117.useViewer)(),
      _v15 = (0, _v125.useToast)();
    (0, _v11.useEffect)(() => {
      (_v9 || _v12) && _v15({
        title: (0, _v75.translate)({
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
        status: "error",
        icon: (0, _v1.jsx)(_v126.CircleExclamationFilled, {})
      });
    }, [_v9, _v12, _v15]);
    let _v16 = _v13 || null === _v9 && null === _v12 ? _v5 ?? _v0 : !_v9;
    return _v1 ? (0, _v1.jsx)(_v114.Tooltip, {
      label: _v16 ? (0, _v75.translate)({
        singular: "Remove from Watch later",
        dictionary: {
          es: {
            singular: "Quitar de la lista “Ver después”"
          },
          "de-DE": {
            singular: "Aus „Später anschauen“ entfernen"
          },
          "fr-FR": {
            singular: "Supprimer de la liste Regarder plus tard"
          },
          "ja-JP": {
            singular: "「後で見る」から削除"
          },
          "ko-KR": {
            singular: "나중에 보기에서 제거"
          },
          "pt-BR": {
            singular: "Remover da lista Assistir Depois"
          },
          "zh-CN": {
            singular: "从稍后观看中移除"
          }
        }
      }) : (0, _v75.translate)({
        singular: "Add to Watch later",
        dictionary: {
          es: {
            singular: 'Agregar a "Ver después"'
          },
          "de-DE": {
            singular: 'Zu „Später anschauen" hinzufügen'
          },
          "fr-FR": {
            singular: "Ajouter à la liste Regarder plus tard"
          },
          "ja-JP": {
            singular: "後で見るに追加"
          },
          "ko-KR": {
            singular: "나중에 보기"
          },
          "pt-BR": {
            singular: "Adicionar ao Assistir Depois"
          },
          "zh-CN": {
            singular: "添加到稍后观看"
          }
        }
      }),
      isDisabled: _v3,
      placement: "top",
      closeOnClick: !1,
      children: (0, _v1.jsx)(_v107.IconButton, {
        "aria-label": _v16 ? (0, _v75.translate)({
          singular: "Remove from Watch later",
          dictionary: {
            es: {
              singular: "Quitar de la lista “Ver después”"
            },
            "de-DE": {
              singular: "Aus „Später anschauen“ entfernen"
            },
            "fr-FR": {
              singular: "Supprimer de la liste Regarder plus tard"
            },
            "ja-JP": {
              singular: "「後で見る」から削除"
            },
            "ko-KR": {
              singular: "나중에 보기에서 제거"
            },
            "pt-BR": {
              singular: "Remover da lista Assistir Depois"
            },
            "zh-CN": {
              singular: "从稍后观看中移除"
            }
          }
        }) : (0, _v75.translate)({
          singular: "Add to Watch later",
          dictionary: {
            es: {
              singular: 'Agregar a "Ver después"'
            },
            "de-DE": {
              singular: 'Zu „Später anschauen" hinzufügen'
            },
            "fr-FR": {
              singular: "Ajouter à la liste Regarder plus tard"
            },
            "ja-JP": {
              singular: "後で見るに追加"
            },
            "ko-KR": {
              singular: "나중에 보기"
            },
            "pt-BR": {
              singular: "Adicionar ao Assistir Depois"
            },
            "zh-CN": {
              singular: "添加到稍后观看"
            }
          }
        }),
        onClick: () => {
          _v14?.user?.id && (_v16 ? (_v6(!1), _v4("watch_later_remove"), _v10({
            where: {
              userId: _v14.user.id,
              videoId: _v2
            }
          })) : (_v6(!0), _v4("watch_later"), _v7({
            where: {
              userId: _v14.user.id,
              videoId: _v2
            }
          })));
        },
        isLoading: _v13,
        variant: "tertiary",
        size: "sm",
        icon: _v16 ? (0, _v1.jsx)(_v144.ClockFilled, {}) : (0, _v1.jsx)(_v115.HoverAnimatedIcon, {
          iconName: "clock"
        })
      })
    }) : null;
  };
  var _v147 = _v0.i(0);
  let _v148 = (0, _v11.createContext)("control"),
    _v149 = _v148.Provider,
    _v150 = ["staffpick", "staffpick-premiere", "staffpick-best-of-the-year", "staffpick-best-of-the-month"],
    _v151 = ({
      video: _v0,
      curationComponent: _v1,
      widgetPlacement: _v2,
      videoPosition: _v3,
      shouldTrackImpression: _v4
    }) => {
      let _v5 = (0, _v20.useOptionalViewer)(),
        _v6 = (0, _v11.useContext)(_v148),
        {
          trackWatchVideoThumbnailClicked: _v7,
          trackWatchVideoThumbnailImpression: _v8,
          trackWatchFeedActionClicked: _v9,
          trackWatchFeedVideoPlayed: _v10,
          trackWatchSectionFollowClicked: _v11
        } = (0, _v16.useWatchTracking)(),
        _v12 = (0, _v63.useCommunityLoopParams)(),
        [_v13, _v14] = (0, _v11.useState)(null),
        [_v15] = (0, _v100.useMediaQuery)("(max-width: 767px)"),
        _v16 = _v15 && (_v105.safeNavigator?.maxTouchPoints ?? 0) > 0,
        _v17 = (0, _v64.idFromUri)(_v0.uri),
        _v18 = _v0.user?.metadata?.interactions?.follow,
        _v19 = _v0.badge?.type && _v150.includes(_v0.badge.type),
        {
          isFollowing: _v20,
          isLoadingFollow: _v21,
          updateFollow: _v22
        } = ((_v0, _v1, _v2) => {
          let [_v3, _v4] = (0, _v11.useState)(null),
            [_v5, {
              loading: _v6,
              error: _v7
            }] = (0, _v147.usePutMeFollowing)(),
            [_v8, {
              loading: _v9,
              error: _v10
            }] = (0, _v147.useDeleteMeFollowing)(),
            {
              mutate: _v11,
              isValidating: _v12,
              error: _v13
            } = (0, _v147.useGetMeFollowing)(() => _v1 ? {
              where: {
                followUserId: _v0
              },
              query: {
                source: "Watch feed"
              }
            } : null, {
              revalidateOnFocus: !1,
              shouldRetryOnError: !1,
              revalidateIfStale: !1,
              revalidateOnMount: !1
            });
          (0, _v11.useEffect)(() => {
            _v12 || void 0 === _v13 || _v4(!_v13);
          }, [_v13, _v12]);
          let _v14 = (0, _v125.useToast)();
          (0, _v11.useEffect)(() => {
            (_v7 || _v10) && _v14({
              title: (0, _v75.translate)({
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
            });
          }, [_v7, _v10, _v14]);
          let _v15 = _v6 || _v9 ? _v3 ?? _v2 : !_v7 && (!!_v10 || (_v3 ?? _v2));
          return {
            isFollowing: _v15,
            isLoadingFollow: _v12 || _v6 || _v9,
            updateFollow: () => {
              _v4(!_v15), (_v15 ? _v8 : _v5)({
                where: {
                  followUserId: _v0
                }
              }).then(() => {
                _v11();
              });
            }
          };
        })((0, _v64.idFromUri)(_v0.user?.uri), null != _v18, _v18?.added === !0),
        _v23 = (0, _v34.toWatchSection)(_v1),
        _v24 = (0, _v64.idFromUri)(_v1.uri) > 0 ? String((0, _v64.idFromUri)(_v1.uri)) : null,
        _v25 = _v0 => {
          _v9({
            clipId: _v17.toString(),
            watchFeedAction: _v0,
            watchSection: _v23,
            watchSectionId: _v24,
            watchVideoPosition: _v3,
            watchPageArm: _v6
          });
        },
        _v26 = (0, _v95.useImpressionOnce)(() => {
          let _v0 = _v17.toString();
          _v4(_v0) && _v8({
            clipId: _v0,
            watchSection: _v23,
            watchSectionId: _v24,
            watchVideoPosition: _v3,
            watchPageArm: _v6
          });
        }),
        _v27 = (0, _v11.useMemo)(() => {
          let _v0 = [_v6, _v3, _v24 ?? ""].join(".");
          return `${window.location.origin}/watch?wctx=${_v0}`;
        }, [_v6, _v3, _v24]),
        _v28 = (0, _v11.useRef)(!1),
        _v29 = _v0.contentRating ?? [],
        _v30 = _v29.some(_v0 => _v103.MATURE_CONTENT.includes(_v0)),
        _v31 = _v29.includes("advertisement"),
        _v32 = _v0.privacy?.view === "anybody",
        _v33 = !!(_v0.page?.like && _v0.metadata?.interactions?.like?.showCount),
        _v34 = !!(_v0.page?.watchLater && _v0.metadata?.interactions?.watchlater),
        _v35 = !!(_v0.page?.comments && _v0.metadata?.interactions?.interact),
        [_v36, _v37] = (0, _v11.useMemo)(() => (0, _v106.getAvatarImages)(_v0.user?.pictures?.sizes), [_v0.user?.pictures?.sizes]),
        _v38 = (0, _v102.getThumbnail)(_v0.pictures?.sizes),
        _v39 = () => {
          _v5 && _v0.user?.link && (0, _v34.trackCreatorNameClick)({
            target: _v0.user.link,
            viewer: _v5,
            widgetName: _v1.title,
            widgetPlacement: _v2
          });
        };
      return (0, _v1.jsxs)(_v42.VStack, {
        ref: _v26,
        w: "100%",
        gap: "md",
        alignItems: "start",
        children: [(0, _v1.jsx)(_v137, {
          videoId: _v17,
          name: _v0.name,
          thumbnail: _v38,
          playerEmbedUrl: _v0.playerEmbedUrl ?? "",
          watchReferrer: _v27,
          onPlaybackStart: _v0 => {
            _v28.current || (_v28.current = !0, _v10({
              clipId: _v17.toString(),
              watchSection: _v23,
              watchSectionId: _v24,
              watchVideoPosition: _v3,
              watchPageArm: _v6,
              isAutoplay: _v0
            }));
          },
          player: _v13,
          setPlayer: _v14,
          topLeftDecoration: _v19 ? (0, _v1.jsx)(_v94.StaffPickBadge, {}) : void 0,
          contentRating: _v29
        }), (0, _v1.jsxs)(_v13.Flex, {
          w: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "sm",
          children: [(0, _v1.jsxs)(_v13.Flex, {
            alignItems: "center",
            gap: "sm",
            minW: 0,
            children: [(0, _v1.jsx)("a", {
              href: _v0.user?.link ?? void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: _v39,
              children: (0, _v1.jsx)(_v70.Avatar, {
                alt: _v0.user?.name ?? "",
                size: "sm",
                src: _v36,
                srcSet: _v37,
                nameProps: {
                  name: _v0.user?.name ?? ""
                }
              })
            }), (0, _v1.jsx)(_v44.Text, {
              as: "a",
              href: _v0.user?.link ?? void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              variant: "body-md",
              isTruncated: !0,
              maxW: "16rem",
              onClick: _v39,
              _hover: {
                textDecoration: "underline"
              },
              children: _v0.user?.name ?? ""
            }), _v18 && (!_v20 || _v21) && (0, _v1.jsx)(_v46.Button, {
              size: "xs",
              variant: "secondary",
              onClick: () => {
                _v11({
                  watchSection: _v23,
                  watchSectionId: _v24,
                  watchChannelName: _v0.user?.name ?? null,
                  watchChannelId: (0, _v64.idFromUri)(_v0.user?.uri) > 0 ? (0, _v64.idFromUri)(_v0.user?.uri) : null,
                  watchSectionFollowEffect: _v20 ? "unfollow" : "follow",
                  watchPageArm: _v6
                }), _v22();
              },
              isLoading: _v21,
              children: (0, _v75.translate)({
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
            })]
          }), (0, _v1.jsxs)(_v13.Flex, {
            alignItems: "center",
            flexWrap: "wrap",
            children: [(0, _v1.jsxs)(_v13.Flex, {
              alignItems: "center",
              gap: "xs",
              children: [(0, _v1.jsx)(_v129, {
                initialState: _v0.metadata?.interactions?.like?.added,
                canLike: _v33,
                videoId: _v17,
                totalLikes: _v0.metadata?.connections?.likes?.total ?? 0,
                isMobile: _v16,
                onAction: _v25
              }), _v35 && (0, _v1.jsx)(_v124, {
                videoLink: _v0.link,
                totalComments: _v0.metadata?.connections?.comments?.total ?? 0,
                isMobile: _v16,
                onAction: _v25
              })]
            }), (0, _v1.jsxs)(_v13.Flex, {
              alignItems: "center",
              gap: "xs",
              ml: "lg",
              children: [_v0.page?.share && (0, _v1.jsx)(_v143, {
                videoId: _v17,
                player: _v13,
                isMobile: _v16,
                onAction: _v25
              }), (0, _v1.jsx)(_v123, {
                canAddToCollections: !!(_v0.page?.collections && _v32 && _v0.privacy?.add),
                videoId: _v17,
                videoName: _v0.name,
                isMobile: _v16,
                onAction: _v25
              }), (0, _v1.jsx)(_v146, {
                initialState: _v0.metadata?.interactions?.watchlater?.added,
                canWatchLater: _v34,
                videoId: _v17,
                isMobile: _v16,
                onAction: _v25
              }), (0, _v1.jsx)(_v140, {
                canReport: !!(_v0.metadata?.interactions?.flagClip && _v32),
                videoId: _v17,
                isMobile: _v16,
                onAction: _v25
              })]
            })]
          })]
        }), (0, _v1.jsxs)(_v42.VStack, {
          w: "100%",
          gap: "md",
          alignItems: "start",
          children: [(0, _v1.jsxs)(_v13.Flex, {
            alignItems: "baseline",
            gap: "sm",
            flexWrap: "wrap",
            children: [(0, _v1.jsx)(_v44.Text, {
              as: "a",
              href: `${_v0.link}${_v12}`,
              variant: "heading-sm",
              onClick: _v0 => {
                _v0.preventDefault(), (async () => {
                  let _v0 = 0;
                  try {
                    _v13 && (await _v13.pause(), _v0 = await _v13.getCurrentTime());
                  } catch {}
                  _v5 && (0, _v34.trackPlaylistVideoClick)({
                    target: _v0.link,
                    videoId: _v17,
                    viewer: _v5,
                    widgetName: _v1.title,
                    widgetPlacement: _v2
                  }), _v7({
                    clipId: _v17.toString(),
                    watchSection: _v23,
                    watchSectionId: _v24,
                    watchVideoPosition: _v3,
                    watchPageArm: _v6
                  }), window.open(`${_v0.link}${_v12}#t=${_v0}`, "_blank", "noopener,noreferrer");
                })();
              },
              _hover: {
                textDecoration: "underline"
              },
              children: _v0.name
            }), (0, _v1.jsx)(_v44.Text, {
              variant: "body-xs",
              color: "text-secondary",
              children: (0, _v92.fromNow)(new Date(_v0.createdTime))
            }), _v30 && (0, _v1.jsx)(_v45.Badge, {
              variant: "mature",
              size: "sm",
              children: (0, _v75.translate)({
                singular: "Mature",
                dictionary: {
                  es: {
                    singular: "Para adultos"
                  },
                  "de-DE": {
                    singular: "Nicht jugendfrei"
                  },
                  "fr-FR": {
                    singular: "Adulte"
                  },
                  "ja-JP": {
                    singular: "成人向け"
                  },
                  "ko-KR": {
                    singular: "성인"
                  },
                  "pt-BR": {
                    singular: "Adulto"
                  },
                  "zh-CN": {
                    singular: "成人"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v104.VideoBadges, {
            isStreaming: !1,
            isRatedMature: !1,
            is360Video: _v0.spatial?.stereoFormat != null && "mono" !== _v0.spatial.stereoFormat,
            isDolbyVision: _v0.embed?.badges?.dolbyVision,
            isHdr10: _v0.embed?.badges?.hdr_10,
            isHdr10Plus: _v0.embed?.badges?.hdr_10Plus,
            aiContent: _v0.metadata?.aiContent,
            isAdvert: _v31
          }), _v0.descriptionHtml && "<br />\n" !== _v0.descriptionHtml ? (0, _v1.jsx)(_v35.Box, {
            w: "100%",
            children: (0, _v1.jsx)(_v101.DetailsDescription, {
              description: _v0.descriptionHtml
            })
          }) : null]
        })]
      });
    },
    _v152 = ["skeleton-post-1", "skeleton-post-2", "skeleton-post-3"],
    _v153 = ["skeleton-action-1", "skeleton-action-2", "skeleton-action-3", "skeleton-action-4", "skeleton-action-5"],
    _v154 = ({
      keyName: _v0
    }) => (0, _v1.jsxs)(_v42.VStack, {
      w: "100%",
      gap: "md",
      alignItems: "start",
      children: [(0, _v1.jsx)(_v56.Skeleton, {
        w: "100%",
        h: "auto",
        aspectRatio: "16/9",
        borderRadius: "lg"
      }), (0, _v1.jsxs)(_v13.Flex, {
        w: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v13.Flex, {
          alignItems: "center",
          gap: "sm",
          minW: 0,
          children: [(0, _v1.jsx)(_v56.Skeleton, {
            w: "2rem",
            h: "2rem",
            borderRadius: "full",
            flexShrink: 0
          }), (0, _v1.jsx)(_v56.Skeleton, {
            w: "10rem",
            h: "1.25rem",
            borderRadius: "sm"
          }), (0, _v1.jsx)(_v56.Skeleton, {
            w: "4.5rem",
            h: "1.5rem",
            borderRadius: "sm"
          })]
        }), (0, _v1.jsx)(_v13.Flex, {
          alignItems: "center",
          gap: "xs",
          ml: "lg",
          children: _v153.map(_v0 => (0, _v1.jsx)(_v56.Skeleton, {
            w: "2rem",
            h: "2rem",
            borderRadius: "sm"
          }, _v0))
        })]
      }), (0, _v1.jsxs)(_v42.VStack, {
        w: "100%",
        gap: "xs",
        alignItems: "start",
        children: [(0, _v1.jsx)(_v56.Skeleton, {
          w: "100%",
          h: "1.25rem",
          borderRadius: "sm"
        }), (0, _v1.jsx)(_v56.Skeleton, {
          w: "60%",
          h: "1.25rem",
          borderRadius: "sm"
        })]
      })]
    }, _v0),
    _v155 = ({
      curationComponent: _v0,
      videos: _v1,
      isLoading: _v2,
      isDone: _v3,
      loadMore: _v4,
      widgetPlacement: _v5,
      shouldTrackImpression: _v6
    }) => {
      let _v7 = (0, _v11.useRef)(null);
      return (0, _v11.useEffect)(() => {
        if (!window.IntersectionObserver || _v3) return;
        let _v0 = new IntersectionObserver(_v0 => {
          _v0.some(_v0 => _v0.isIntersecting) && _v4();
        }, {
          rootMargin: "800px"
        });
        return _v7.current && _v0.observe(_v7.current), () => _v0.disconnect();
      }, [_v3, _v2, _v4]), (0, _v1.jsxs)(_v13.Flex, {
        flexDir: "column",
        gap: "2xl",
        w: "100%",
        maxW: {
          base: "100%",
          xl: "calc(100% - 2 * 7.5rem)"
        },
        mx: "auto",
        children: [_v2 && 0 === _v1.length ? _v152.map(_v0 => (0, _v1.jsx)(_v154, {
          keyName: _v0
        }, _v0)) : _v1.map((_v0, _v1) => (0, _v1.jsx)(_v151, {
          video: _v0,
          curationComponent: _v0,
          widgetPlacement: _v5,
          videoPosition: _v1 + 1,
          shouldTrackImpression: _v6
        }, _v0.uri)), !_v3 && !_v2 && (0, _v1.jsx)(_v13.Flex, {
          ref: _v7,
          justifyContent: "center",
          py: "md",
          children: (0, _v1.jsx)(_v56.Skeleton, {
            w: "100%",
            aspectRatio: "16/9",
            borderRadius: "lg"
          })
        }), !_v2 && 0 === _v1.length && (0, _v1.jsx)(_v13.Flex, {
          justifyContent: "center",
          py: "2xl",
          children: (0, _v75.translate)({
            singular: "No videos found",
            dictionary: {
              es: {
                singular: "No se han encontrado vídeos"
              },
              "de-DE": {
                singular: "Keine Videos gefunden"
              },
              "fr-FR": {
                singular: "Aucune vidéo trouvée"
              },
              "ja-JP": {
                singular: "動画が見つかりませんでした"
              },
              "ko-KR": {
                singular: "동영상을 찾을 수 없습니다"
              },
              "pt-BR": {
                singular: "Nenhum vídeo encontrado"
              },
              "zh-CN": {
                singular: "未找到视频"
              }
            }
          })
        })]
      });
    };
  var _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0);
  let _v161 = (_v0, _v1) => _v0 && _v1 ? "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)" : _v0 ? "linear-gradient(to right, transparent, black 48px)" : _v1 ? "linear-gradient(to right, black calc(100% - 48px), transparent)" : "none",
    _v162 = ({
      categories: _v0,
      activeIndex: _v1,
      onSelect: _v2,
      arm: _v3
    }) => {
      let _v4 = (0, _v11.useRef)(null),
        [_v5, _v6] = (0, _v11.useState)(!1),
        [_v7, _v8] = (0, _v11.useState)(!1),
        _v9 = (0, _v11.useRef)(0),
        {
          trackWatchCategoryTabClicked: _v10,
          trackWatchSectionCarouselNavigated: _v11
        } = (0, _v16.useWatchTracking)(),
        _v12 = (0, _v11.useCallback)(() => {
          let _v0 = _v4.current;
          _v0 && (_v6(_v0.scrollLeft > 0), _v8(_v0.scrollLeft + _v0.clientWidth < _v0.scrollWidth - 1));
        }, []);
      (0, _v11.useEffect)(() => {
        _v12();
        let _v0 = _v4.current;
        if (_v0) return _v0.addEventListener("scroll", _v12, {
          passive: !0
        }), window.addEventListener("resize", _v12), () => {
          _v0.removeEventListener("scroll", _v12), window.removeEventListener("resize", _v12);
        };
      }, [_v12, _v0]);
      let _v13 = _v0 => {
        _v4.current?.scrollBy({
          left: "left" === _v0 ? -240 : 240,
          behavior: "smooth"
        }), _v9.current += 1, _v11({
          watchSection: "category_tabs",
          watchSectionId: null,
          watchSectionDirection: "left" === _v0 ? "previous" : "next",
          watchSectionPage: _v9.current,
          watchPageArm: _v3
        });
      };
      return (0, _v1.jsxs)(_v13.Flex, {
        alignItems: "center",
        w: "100%",
        children: [_v5 && (0, _v1.jsx)(_v107.IconButton, {
          "aria-label": "Scroll to previous categories",
          size: "md",
          variant: "tertiary",
          bg: "whiteAlpha.700",
          borderRadius: "md",
          icon: (0, _v1.jsx)(_v157.ChevronLeftSmall, {}),
          marginRight: 8,
          flexShrink: 0,
          sx: {
            _dark: {
              bg: "gray.800",
              _hover: {
                bg: "lightBlueAlpha.300"
              },
              _active: {
                bg: "lightBlueAlpha.300"
              }
            }
          },
          onClick: () => _v13("left")
        }), (0, _v1.jsx)(_v13.Flex, {
          ref: _v4,
          gap: "sm",
          w: "100%",
          overflowX: "auto",
          sx: {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            maskImage: _v161(_v5, _v7),
            WebkitMaskImage: _v161(_v5, _v7)
          },
          children: _v0.map((_v0, _v1) => {
            let _v2 = _v1 === _v1,
              _v3 = "popular" === _v0.sourceType ? "trending" : "channel" !== _v0.sourceType ? "other" : _v0.sourceId === _v160.STAFF_PICKS_CHANNEL_ID ? "staff_picks" : _v0.sourceId === _v160.STAFF_PICKS_PREMIERES_CHANNEL_ID ? "premieres" : "other";
            return (0, _v1.jsx)(_v46.Button, {
              size: "md",
              variant: "tertiary",
              bg: _v2 ? "button-tertiary-hover" : "whiteAlpha.700",
              borderRadius: "md",
              fontFamily: "body",
              flexShrink: 0,
              sx: _v2 ? {
                bg: "button-tertiary-hover",
                _dark: {
                  bg: "button-tertiary-hover"
                },
                _hover: {
                  bg: "button-tertiary-hover"
                },
                _active: {
                  bg: "button-tertiary-hover"
                }
              } : {
                _dark: {
                  bg: "gray.800",
                  _hover: {
                    bg: "lightBlueAlpha.300"
                  },
                  _active: {
                    bg: "lightBlueAlpha.300"
                  }
                }
              },
              onClick: () => {
                let _v0;
                (_v0 = _v0[_v1]) && _v10({
                  watchSection: (0, _v34.toWatchSection)(_v0),
                  watchSectionId: (0, _v64.idFromUri)(_v0.uri) > 0 ? String((0, _v64.idFromUri)(_v0.uri)) : null,
                  watchCategoryTabPosition: _v1 + 1,
                  watchPageArm: _v3
                }), _v2(_v1);
              },
              children: (0, _v1.jsxs)(_v13.Flex, {
                alignItems: "center",
                gap: "xs",
                children: ["staff_picks" === _v3 && (0, _v1.jsx)(_v159.StaffPicks, {}), "trending" === _v3 && (0, _v1.jsx)(_v156.ChartUp, {}), "premieres" === _v3 && "SP Premieres", "staff_picks" === _v3 && "Staff Picks", "trending" === _v3 && "Trending", "other" === _v3 && (_v0.title || "Untitled")]
              })
            }, _v0.uri);
          })
        }), _v7 && (0, _v1.jsx)(_v107.IconButton, {
          "aria-label": "Scroll to see more categories",
          size: "md",
          variant: "tertiary",
          bg: "whiteAlpha.700",
          borderRadius: "md",
          icon: (0, _v1.jsx)(_v158.ChevronRightSmall, {}),
          marginLeft: 8,
          flexShrink: 0,
          sx: {
            _dark: {
              bg: "gray.800",
              _hover: {
                bg: "lightBlueAlpha.300"
              },
              _active: {
                bg: "lightBlueAlpha.300"
              }
            }
          },
          onClick: () => _v13("right")
        })]
      });
    },
    _v163 = ["uri", "title", "sourceType", "sourceId"];
  var _v164 = _v0.i(0);
  let _v165 = _v0 => `watch_tabbed_snapshot:${_v0}`,
    _v166 = (0, _v72.rem)(64);
  function _v167({
    playerAssetUrls: _v0,
    arm: _v1
  }) {
    let _v2 = (0, _v20.useOptionalViewer)(),
      [_v3, _v4] = (0, _v11.useState)(null),
      _v5 = (0, _v10.useRouter)(),
      _v6 = (0, _v33.useMarginXValue)({
        base: (0, _v72.rem)(12),
        md: (0, _v72.rem)(24),
        xl: (0, _v72.rem)(24)
      }),
      _v7 = (0, _v11.useRef)(null),
      _v8 = _v82(),
      _v9 = (0, _v11.useRef)(null);
    (0, _v11.useEffect)(() => {
      _v9.current = (0, _v16.getLandingUrl)();
    }, []);
    let _v10 = (0, _v11.useRef)(new Set()),
      _v11 = (0, _v11.useCallback)(_v0 => {
        _v10.current.add(_v0);
      }, []),
      _v12 = (0, _v11.useRef)(0);
    (0, _v11.useEffect)(() => {
      _v12.current = _v10.current.size;
    });
    let _v13 = (0, _v11.useRef)(new Set()),
      _v14 = (0, _v11.useCallback)(_v0 => !_v13.current.has(_v0) && (_v13.current.add(_v0), !0), []);
    _v85(_v7, _v12, _v1, _v8);
    let {
      trackWatchPageDisplayed: _v15
    } = (0, _v16.useWatchTracking)();
    (0, _v17.usePicoEffect)(() => null !== _v2 && (_v15({
      referrerPage: (0, _v15.deriveReferrerPage)(),
      watchPageViewerAuthStatus: (0, _v15.deriveViewerAuthStatus)(_v2),
      watchPageArm: _v1,
      watchPageUrl: _v9.current ?? void 0,
      watchVisitId: _v8,
      sendImmediately: !0
    }), !0), [_v2], {
      once: !0
    });
    let {
        data: _v16
      } = _v32(() => _v2 ? {
        where: {
          contentId: 1
        },
        select: [..._v163]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v17 = (0, _v11.useMemo)(() => _v16?.data ?? [], [_v16]),
      _v18 = function (_v0, _v1) {
        let [_v2] = (0, _v11.useState)(() => ((_v0, _v1) => {
          if (!(() => {
            if ("u" < typeof performance) return !1;
            let [_v0] = performance.getEntriesByType("navigation");
            return void 0 !== _v0 && "navigation" === _v0.entryType && "back_forward" === _v0.type;
          })()) return null;
          try {
            let _v0 = window.sessionStorage.getItem(_v165(_v0));
            return null === _v0 ? null : ((_v0, _v1) => {
              try {
                let _v0 = JSON.parse(_v0);
                if ("object" != typeof _v0 || null === _v0 || _v0.arm !== _v1) return null;
                return {
                  arm: _v1,
                  categoryId: "number" == typeof _v0.categoryId ? _v0.categoryId : null,
                  pageCount: "number" == typeof _v0.pageCount ? _v0.pageCount : 0,
                  scrollTop: "number" == typeof _v0.scrollTop ? _v0.scrollTop : 0
                };
              } catch {
                return null;
              }
            })(_v0, _v1);
          } catch {
            return null;
          }
        })(_v0, _v1));
        return (0, _v11.useEffect)(() => {
          null !== _v2 && (_v0 => {
            try {
              window.sessionStorage.removeItem(_v165(_v0));
            } catch {}
          })(_v0);
        }, [_v0, _v2]), _v2;
      }(_v5.asPath, _v1),
      _v19 = (0, _v11.useMemo)(() => {
        if (null === _v18 || null === _v18.categoryId || 0 === _v17.length) return 0;
        let _v0 = _v17.findIndex(_v0 => (0, _v64.idFromUri)(_v0.uri) === _v18.categoryId);
        return _v0 > 0 ? _v0 : 0;
      }, [_v18, _v17]),
      _v20 = _v3 ?? _v19,
      _v21 = _v17[_v20] ?? null,
      _v22 = _v21 ? (0, _v64.idFromUri)(_v21.uri) : null;
    (0, _v11.useEffect)(() => {
      0 !== _v17.length && _v11(_v20);
    }, [_v17.length, _v20, _v11]);
    let {
      videos: _v23,
      isLoading: _v24,
      isDone: _v25,
      loadMore: _v26,
      pageCount: _v27,
      setPageCount: _v28
    } = (_v0 => {
      let {
          data: _v1,
          setSize: _v2,
          isLoading: _v3
        } = (0, _v164.useGetCurationComponentVideosInfinite)(() => null === _v0 ? null : {
          where: {
            componentId: _v0
          },
          select: ["name", "link", "pictures.sizes.link", "pictures.sizes.width", "pictures.sizes.height", "uri", "stats.plays", "user.link", "user.name", "user.pictures.sizes.link", "duration", "createdTime", "configUrl", "badge.type", "contentRating", "descriptionHtml", "playerEmbedUrl", "spatial.stereoFormat", "embed.badges", "metadata.aiContent", "metadata.connections.likes.total", "metadata.connections.comments.total", "metadata.interactions.like", "metadata.interactions.watchlater", "metadata.interactions.flagClip", "metadata.interactions.interact", "page.share", "page.watchLater", "page.like", "page.collections", "page.comments", "privacy.add", "privacy.view", "user.metadata.interactions.follow", "user.uri"],
          query: {
            sizes: "960,640,360",
            perPage: 12
          }
        }, {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1,
          revalidateFirstPage: !1
        }),
        _v4 = _v1?.flatMap(_v0 => _v0.data) ?? [],
        _v5 = !_v3 && !_v1?.[_v1.length - 1]?.paging?.next,
        _v6 = (0, _v11.useCallback)(() => {
          _v2(_v0 => _v0 + 1);
        }, [_v2]),
        _v7 = (0, _v11.useCallback)(_v0 => {
          _v2(Math.max(1, _v0));
        }, [_v2]);
      return {
        videos: _v4,
        isLoading: _v3,
        isDone: _v5,
        loadMore: _v6,
        pageCount: _v1?.length ?? 0,
        setPageCount: _v7
      };
    })(_v22);
    !function ({
      rootRef: _v0,
      asPath: _v1,
      arm: _v2,
      activeCategoryId: _v3,
      pageCount: _v4
    }) {
      let _v5 = (0, _v10.useRouter)();
      (0, _v11.useEffect)(() => {
        let _v0 = () => {
          var _v0 = {
            arm: _v2,
            categoryId: _v3,
            pageCount: _v4,
            scrollTop: _v84(_v83(_v0.current))
          };
          try {
            window.sessionStorage.setItem(_v165(_v1), JSON.stringify(_v0));
          } catch {}
        };
        return window.addEventListener("pagehide", _v0), _v5.events.on("beforeHistoryChange", _v0), () => {
          window.removeEventListener("pagehide", _v0), _v5.events.off("beforeHistoryChange", _v0);
        };
      }, [_v1, _v2, _v0, _v5.events, _v3, _v4]);
    }({
      rootRef: _v7,
      asPath: _v5.asPath,
      arm: _v1,
      activeCategoryId: _v22,
      pageCount: _v27
    });
    let _v29 = (0, _v11.useRef)(!1);
    (0, _v11.useEffect)(() => {
      null === _v18 || null === _v18.categoryId || _v22 === _v18.categoryId && !_v29.current && (_v29.current = !0, _v18.pageCount > 1 && _v28(_v18.pageCount));
    }, [_v18, _v22, _v28]);
    let _v30 = (0, _v11.useRef)(!1);
    (0, _v11.useEffect)(() => {
      if (null !== _v18 && null !== _v18.categoryId && _v22 === _v18.categoryId && !_v30.current && !(!_v25 && _v27 < Math.max(1, _v18.pageCount))) {
        var _v0, _v1;
        _v30.current = !0, _v0 = _v83(_v7.current), _v1 = _v18.scrollTop, _v0 instanceof Window ? _v0.scrollTo(0, _v1) : _v0.scrollTop = _v1;
      }
    }, [_v18, _v22, _v25, _v27, _v7]);
    let _v31 = (0, _v11.useCallback)(_v0 => {
      _v4(_v0), _v11(_v0);
    }, [_v11]);
    return (0, _v1.jsx)(_v149, {
      value: _v1,
      children: (0, _v1.jsx)(_v89.AddToShowcaseModalContextProvider, {
        children: (0, _v1.jsxs)(_v13.Flex, {
          ref: _v7,
          flexDir: "column",
          gap: "lg",
          minHeight: "100%",
          flexGrow: 1,
          children: [(0, _v1.jsx)(_v168, {
            type: _v19.PlayerType.BarebonePlayer,
            assetUrls: _v0,
            children: (0, _v1.jsxs)(_v13.Flex, {
              flexDir: "column",
              mx: _v6,
              pb: "2xl",
              flexGrow: 1,
              children: [(0, _v1.jsx)(_v35.Box, {
                position: "sticky",
                top: _v166,
                zIndex: 1,
                bg: "background",
                w: "100%",
                pt: "lg",
                pb: "lg",
                children: (0, _v1.jsx)(_v162, {
                  categories: _v17,
                  activeIndex: _v20,
                  onSelect: _v31,
                  arm: _v1
                })
              }), _v21 && ("t2" === _v1 ? (0, _v1.jsx)(_v155, {
                curationComponent: _v21,
                videos: _v23,
                isLoading: _v24,
                isDone: _v25,
                loadMore: _v26,
                widgetPlacement: _v20 + 2,
                shouldTrackImpression: _v14
              }) : (0, _v1.jsx)(_v99, {
                curationComponent: _v21,
                videos: _v23,
                isLoading: _v24,
                isDone: _v25,
                loadMore: _v26,
                widgetPlacement: _v20 + 2,
                arm: _v1,
                shouldTrackImpression: _v14
              }))]
            })
          }), null !== _v2 && !_v2?.user && (0, _v1.jsx)(_v22.LoggedOutBanner, {})]
        })
      })
    });
  }
  let _v168 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v18.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  function _v169({
    playerAssetUrls: _v0
  }) {
    let {
      settings: _v1
    } = (0, _v7.useOrionSettings)();
    return "t1" === _v1.watch_page_categories_arm ? (0, _v1.jsx)(_v167, {
      playerAssetUrls: _v0,
      arm: "t1"
    }) : "t2" === _v1.watch_page_categories_arm ? (0, _v1.jsx)(_v167, {
      playerAssetUrls: _v0,
      arm: "t2"
    }) : (0, _v1.jsx)(_v87, {
      playerAssetUrls: _v0
    });
  }
  let _v170 = ({
    playerAssetUrls: _v0
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsxs)(_v2.default, {
      children: [(0, _v1.jsx)("title", {
        children: (0, _v6.translate)({
          singular: "Watch Free Videos, Films, and Shorts - No Ads",
          dictionary: {
            es: {
              singular: "Vea videos, películas y cortos gratis, sin anuncios"
            },
            "de-DE": {
              singular: "Sehen Sie sich kostenlose Videos, Filme und Kurzfilme an – ohne Werbung"
            },
            "fr-FR": {
              singular: "Regardez des vidéos, des films et des courts métrages gratuits, sans publicité"
            },
            "ja-JP": {
              singular: "無料で動画、映画、短編を視聴 - 広告なし"
            },
            "ko-KR": {
              singular: "무료 동영상, 영화, 단편 등 다양한 동영상을 광고 없이 시청하세요."
            },
            "pt-BR": {
              singular: "Assista a vídeos, filmes e curtas-metragens gratuitos — sem anúncios"
            },
            "zh-CN": {
              singular: "观看免费视频、电影和短片——无广告"
            }
          }
        })
      }), (0, _v1.jsx)("meta", {
        name: "description",
        content: (0, _v6.translate)({
          singular: "Explore free online videos, films, shorts, documentaries, and more, all streaming in HD. Discover comedy, documentaries, animation, drama, Staff Picks, and more videos.",
          dictionary: {
            es: {
              singular: "Explore videos, películas, cortometrajes, documentales y más en línea, toda la transmisión en HD de forma gratuita. Descubra comedias, documentales, animación, drama, Staff Picks y más videos."
            },
            "de-DE": {
              singular: "Entdecken Sie kostenlose Online-Videos, Filme, Kurzfilme, Dokumentarfilme und mehr, die alle in HD gestreamt werden. Zur Auswahl stehen Kategorien wie Comedy, Dokumentarfilme, Animation, Drama, Staff Picks und weitere Videos."
            },
            "fr-FR": {
              singular: "Découvrez des vidéos, des films, des courts métrages, des documentaires gratuits en ligne et plus encore, tous diffusés en HD. Découvrez des comédies, des documentaires, des animations, des drames, des Staff Picks et plus encore."
            },
            "ja-JP": {
              singular: "すべてHDでストリーミングされる無料のオンライン動画、映画、短編、ドキュメンタリーなどをご覧ください。コメディ、ドキュメンタリー、アニメーション、ドラマ、スタッフピック、その他の動画を楽しめます。"
            },
            "ko-KR": {
              singular: "HD로 스트리밍되는 무료 온라인 동영상, 영화, 단편, 다큐멘터리 등을 탐색하세요. 코미디, 다큐멘터리, 애니메이션, 드라마, 스태프 픽 등 다양한 동영상을 만나보실 수 있습니다."
            },
            "pt-BR": {
              singular: "Explore vídeos, filmes, curtas, documentários e muito mais, tudo online, gratuito e em alta definição (HD). Descubra vídeos de comédia, documentários, animação, drama, Staff Picks e muito mais."
            },
            "zh-CN": {
              singular: "探索免费在线视频、电影、短片、纪录片等，全部以 HD 格式播放。探索喜剧、纪录片、动画、戏剧、Staff Picks 和更多视频。"
            }
          }
        })
      }), (0, _v1.jsx)("meta", {
        property: "og:title",
        content: (0, _v6.translate)({
          singular: "Watch Free Videos, Films, and Shorts - No Ads",
          dictionary: {
            es: {
              singular: "Vea videos, películas y cortos gratis, sin anuncios"
            },
            "de-DE": {
              singular: "Sehen Sie sich kostenlose Videos, Filme und Kurzfilme an – ohne Werbung"
            },
            "fr-FR": {
              singular: "Regardez des vidéos, des films et des courts métrages gratuits, sans publicité"
            },
            "ja-JP": {
              singular: "無料で動画、映画、短編を視聴 - 広告なし"
            },
            "ko-KR": {
              singular: "무료 동영상, 영화, 단편 등 다양한 동영상을 광고 없이 시청하세요."
            },
            "pt-BR": {
              singular: "Assista a vídeos, filmes e curtas-metragens gratuitos — sem anúncios"
            },
            "zh-CN": {
              singular: "观看免费视频、电影和短片——无广告"
            }
          }
        })
      }), (0, _v1.jsx)("meta", {
        property: "al:ios:app_name",
        content: "Vimeo"
      }), (0, _v1.jsx)("meta", {
        property: "al:ios:app_store_id",
        content: "425194759"
      }), (0, _v1.jsx)("meta", {
        property: "al:ios:url",
        content: "vimeo://app.vimeo.com/explore"
      }), (0, _v1.jsx)("meta", {
        property: "al:android:app_name",
        content: "Vimeo"
      }), (0, _v1.jsx)("meta", {
        property: "al:android:package",
        content: "com.vimeo.android.videoapp"
      }), (0, _v1.jsx)("meta", {
        property: "al:android:url",
        content: "vimeo://app.vimeo.com/explore"
      }), (0, _v1.jsx)("meta", {
        property: "al:web:should_fallback",
        content: "true"
      }), (0, _v1.jsx)("link", {
        rel: "canonical",
        href: "https://vimeo.com/watch"
      })]
    }), (0, _v1.jsx)(_v169, {
      playerAssetUrls: _v0
    })]
  });
  _v170.getLayout = _v3.getLayout, (0, _v5.withPageSetup)(async _v0 => (await (0, _v4.isFromCopyrightRestrictedRegion)(_v0)) ? {
    redirect: {
      destination: "/europeanfilmacademy",
      permanent: !1
    }
  } : {
    props: {
      hasThemeSupport: !0,
      hasPlayerAPI: !0
    }
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v170], 0);
}