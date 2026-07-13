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
    _v24 = _v0.i(0);
  async function _v25({
    baseUrl: _v0,
    select: _v1,
    where: {
      contentId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v23.measureLatency)("getCurationContentCurationComponents", "GET", async () => {
      let _v0 = await fetch(`${_v0}/curation_content/${_v2}/curation_components?${(0, _v24.searchQueryString)(_v3)}&fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  var _v26 = _v0.i(0),
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
      } = (0, _v30.useGctlConfig)();
    return (0, _v26.default)(_v2 ? `/curation_content/${_v2.where.contentId}/curation_components${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v25({
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
  "true" === _v22.default.env.STORYBOOK && (0, _v28.assignMswData)(_v31, {
    endpoint: "/curation_content/:contentId/curation_components",
    method: "GET"
  }), "true" === _v22.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v27.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v30.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/curation_content/${_v0.where.contentId}/curation_components${(0, _v28.serializeQuery)(_v0)}`, _v25({
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
  }), "true" === _v22.default.env.STORYBOOK && (0, _v28.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v30.useGctlConfig)();
    return (0, _v29.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/curation_content/${_v2.where.contentId}/curation_components?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v25({
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
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
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
    _v46 = _v0.i(0);
  let _v47 = () => (0, _v1.jsx)(_v33.Box, {
      className: "staff-pick-badge",
      position: "absolute",
      top: "10",
      left: "10",
      width: "72px",
      height: "72px",
      transition: "opacity 0.2s ease",
      children: (0, _v1.jsx)(_v37.bokeh.img, {
        src: "https://f.vimeocdn.com/p/images/badges/1.svg",
        alt: "Staff Pick"
      })
    }),
    _v48 = ({
      location: _v0
    }) => (0, _v1.jsxs)(_v33.Box, {
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      children: [(0, _v1.jsx)(_v46.UserLocation, {
        boxSize: "xs",
        color: "text-secondary"
      }), (0, _v1.jsx)(_v42.Text, {
        variant: {
          base: "body-md",
          l: "body-lg",
          "2xl": "body-lg"
        },
        color: "text-secondary",
        children: _v0
      })]
    }),
    _v49 = ({
      variant: _v0,
      size: _v1
    }) => "video" === _v0 ? (0, _v1.jsx)(_v44.Button, {
      leftIcon: (0, _v1.jsx)(_v45.PlayFilled, {}),
      variant: "secondary",
      size: _v1
    }) : (0, _v1.jsx)(_v44.Button, {
      leftIcon: (0, _v1.jsx)(_v45.PlayFilled, {}),
      variant: "secondary",
      size: _v1,
      w: "100%",
      children: "Featured video"
    }),
    _v50 = ({
      title: _v0,
      subtitle: _v1,
      curationStatement: _v2,
      variant: _v3,
      location: _v4,
      isStaffPick: _v5,
      creatorCredit: _v6
    }) => (0, _v1.jsxs)(_v33.Box, {
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
      children: [_v5 && "video" === _v3 && (0, _v1.jsx)(_v47, {}), (0, _v1.jsx)(_v39.DarkMode, {
        children: (0, _v1.jsx)(_v12.Flex, {
          padding: "sm",
          alignItems: "flex-start",
          zIndex: "1",
          flexDirection: "column",
          children: (0, _v1.jsxs)(_v40.VStack, {
            spacing: "xs",
            alignItems: "flex-start",
            padding: "xs",
            width: "100%",
            children: [(0, _v1.jsx)(_v41.Header, {
              as: "h3",
              size: {
                base: "md",
                "2xl": "lg"
              },
              color: "text-primary",
              children: _v0
            }), "creator" === _v3 && _v4 && (0, _v1.jsx)(_v48, {
              location: _v4
            }), "video" === _v3 && _v6 && (0, _v1.jsx)(_v33.Box, {
              className: "hover-content",
              sx: {
                display: "none",
                opacity: 0,
                maxHeight: 0,
                overflow: "hidden",
                transition: "opacity 0.2s ease, max-height 0.2s ease"
              },
              children: (0, _v1.jsx)(_v42.Text, {
                variant: {
                  lg: "body-md",
                  "2xl": "body-lg"
                },
                color: "text-secondary",
                textAlign: "left",
                children: _v6
              })
            }), "video" === _v3 && _v1 && (0, _v1.jsx)(_v33.Box, {
              className: "hover-content",
              sx: {
                display: "none",
                opacity: 0,
                maxHeight: 0,
                overflow: "hidden",
                transition: "opacity 0.2s ease, max-height 0.2s ease"
              },
              children: (0, _v1.jsx)(_v43.Badge, {
                variant: "timestamp",
                size: "sm",
                _dark: {
                  bg: "grayAlpha.600"
                },
                children: _v1
              })
            }), _v2 && (0, _v1.jsx)(_v33.Box, {
              className: "hover-content",
              sx: {
                display: "none",
                opacity: 0,
                maxHeight: 0,
                overflow: "hidden",
                transition: "opacity 0.2s ease, max-height 0.2s ease"
              },
              children: (0, _v1.jsx)(_v42.Text, {
                variant: {
                  lg: "body-md",
                  "2xl": "body-lg"
                },
                color: "text-primary",
                textAlign: "left",
                children: _v2
              })
            }), (0, _v1.jsx)(_v33.Box, {
              marginTop: "xs",
              width: "100%",
              children: (0, _v1.jsx)(_v49, {
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
    _v51 = ({
      title: _v0,
      subtitle: _v1,
      curationStatement: _v2,
      variant: _v3,
      location: _v4,
      isStaffPick: _v5,
      creatorCredit: _v6
    }) => {
      let [_v7, _v8] = (0, _v10.useState)(!1);
      return (0, _v1.jsx)(_v33.Box, {
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
        children: (0, _v1.jsx)(_v39.DarkMode, {
          children: (0, _v1.jsxs)(_v40.VStack, {
            spacing: "50",
            px: "100",
            pb: "200",
            alignItems: "flex-start",
            zIndex: "1",
            width: "100%",
            children: [_v5 && "video" === _v3 && (0, _v1.jsx)(_v33.Box, {
              opacity: +!_v7,
              transition: "opacity 0.2s ease",
              children: (0, _v1.jsx)(_v47, {})
            }), (0, _v1.jsx)(_v41.Header, {
              as: "h3",
              size: "md",
              color: "text-primary",
              children: _v0
            }), "creator" === _v3 && _v4 && (0, _v1.jsx)(_v48, {
              location: _v4
            }), "video" === _v3 && _v6 && (0, _v1.jsx)(_v42.Text, {
              variant: "body-md",
              color: "text-secondary",
              textAlign: "left",
              children: _v6
            }), "video" === _v3 && _v1 && (0, _v1.jsx)(_v43.Badge, {
              variant: "timestamp",
              size: "sm",
              _dark: {
                bg: "grayAlpha.600"
              },
              children: _v1
            }), _v2 && (0, _v1.jsx)(_v42.Text, {
              variant: "body-md",
              color: "text-primary",
              textAlign: "left",
              noOfLines: _v7 ? void 0 : 3,
              children: _v2
            }), _v2 && (0, _v1.jsx)(_v37.bokeh.span, {
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
            }), (0, _v1.jsx)(_v33.Box, {
              marginTop: "xs",
              width: "100%",
              children: (0, _v1.jsx)(_v49, {
                variant: _v3,
                size: "sm"
              })
            })]
          })
        })
      });
    },
    _v52 = ({
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
      let _v11 = (0, _v34.useBreakpointValue)({
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
      return (0, _v1.jsx)(_v12.Flex, {
        borderRadius: "xl",
        padding: "sm",
        _hover: {
          background: "fill-component-hover"
        },
        children: (0, _v1.jsxs)(_v38.Card, {
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
          children: [(0, _v1.jsx)(_v37.bokeh.img, {
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
          }), _v11 ? (0, _v1.jsx)(_v51, {
            ..._v12
          }) : (0, _v1.jsx)(_v50, {
            ..._v12
          })]
        })
      });
    };
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = () => (0, _v1.jsx)(_v38.Card, {
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
    children: (0, _v1.jsx)(_v54.Skeleton, {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "0",
      left: "0"
    })
  });
  var _v56 = _v0.i(0);
  let _v57 = ({
      children: _v0,
      numColumns: _v1 = {
        md: 3,
        lg: 4,
        "3xl": 5
      }
    }) => (0, _v34.useBreakpointValue)({
      base: !0,
      md: !1
    }) ? (0, _v1.jsx)(_v12.Flex, {
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
    }) : (0, _v1.jsx)(_v56.PlaylistGrid, {
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
    }),
    _v58 = _v0 => {
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
    _v59 = ["uri", "title", "shortTitle", "artUrl", "sourceDescription", "sourceTitle", "sourceId", "sourceType", "videoUrl"];
  var _v60 = _v0.i(0);
  let _v61 = ({
    carousel: _v0,
    shouldPreload: _v1,
    onIntersection: _v2,
    isFirst: _v3 = !1
  }) => {
    let [_v4, _v5] = (0, _v10.useState)(0),
      {
        ref: _v6,
        isVisible: _v7
      } = (({
        threshold: _v0 = .01,
        rootMargin: _v1 = "0px",
        onIntersect: _v2
      } = {}) => {
        let _v3 = (0, _v10.useRef)(null),
          [_v4, _v5] = (0, _v10.useState)(!1),
          _v6 = (0, _v10.useCallback)(() => {
            _v2?.();
          }, [_v2]);
        return (0, _v10.useEffect)(() => {
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
        onIntersect: _v2
      }),
      _v8 = (0, _v34.useBreakpointValue)({
        base: !0,
        md: !1
      }),
      _v9 = (0, _v34.useBreakpointValue)({
        base: 10,
        md: 3,
        lg: 4,
        "3xl": 5
      }) || 4;
    (0, _v10.useEffect)(() => {
      _v5(0);
    }, [_v9]);
    let {
      cards: _v10,
      isLoading: _v11,
      isEmpty: _v12
    } = (({
      carouselId: _v0,
      enabled: _v1
    }) => {
      let {
          data: _v2,
          isLoading: _v3
        } = _v31(() => _v1 ? {
          where: {
            contentId: _v0
          },
          select: _v59,
          query: {
            parentType: "carousel"
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        }),
        _v4 = (_v2?.data ?? []).map(_v58),
        _v5 = !_v3 && 0 === _v4.length;
      return {
        cards: _v4,
        isLoading: _v3,
        isEmpty: _v5
      };
    })({
      carouselId: (0, _v60.idFromUri)(_v0.uri),
      enabled: _v7 || _v1
    });
    return (0, _v1.jsxs)(_v33.Box, {
      ref: _v6,
      children: [(_v1 || _v7) && !_v11 && _v10.length > 0 && (0, _v1.jsx)(_v2.default, {
        children: _v10.slice(0, _v9).map(_v0 => (0, _v1.jsx)("link", {
          rel: "prefetch",
          as: "image",
          href: _v0.src
        }, `prefetch-${_v0.videoLink}`))
      }), (0, _v1.jsxs)(_v35.Playlist, {
        w: "100%",
        gap: "sm",
        minHeight: "300px",
        children: [(0, _v1.jsx)(_v36.PlaylistHeader, {
          header: {
            text: _v0.title,
            to: void 0
          },
          pt: _v3 ? 0 : void 0,
          children: !_v8 && _v10.length > _v9 && (0, _v1.jsx)(_v12.Flex, {
            marginLeft: "auto",
            children: (0, _v1.jsx)(_v53.NavigationButtons, {
              disablePrevButton: 0 === _v4,
              disableNextButton: _v4 >= Math.ceil(_v10.length / _v9) - 1,
              onPrevClick: () => _v5(_v0 => Math.max(0, _v0 - 1)),
              onNextClick: () => _v5(_v0 => _v0 + 1)
            })
          })
        }), (0, _v1.jsx)(_v57, {
          numColumns: {
            md: 3,
            lg: 4,
            "3xl": 5
          },
          children: _v11 || _v12 ? Array.from({
            length: _v9
          }).map((_v0, _v1) => (0, _v1.jsx)(_v55, {}, _v1)) : ((_v0, _v1) => {
            if (_v1 === Math.ceil(_v0.length / _v9) - 1 && _v0.length > _v9) {
              let _v0 = Math.max(0, _v0.length - _v9);
              return _v0.slice(_v0, _v0.length);
            }
            let _v2 = _v1 * _v9;
            return _v0.slice(_v2, _v2 + _v9);
          })(_v10, _v4).map((_v0, _v1) => (0, _v1.jsx)(_v52, {
            ..._v0,
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
            }
          }, _v0.videoLink ?? `card-${_v1}`))
        })]
      })]
    });
  };
  var _v62 = _v0.i(0);
  let _v63 = ({
    authModalType: _v0,
    setShowLoginJoinModal: _v1
  }) => {
    let _v2 = (0, _v19.useOptionalViewer)(),
      {
        data: _v3
      } = _v31(() => _v2 ? {
        where: {
          contentId: 1
        },
        select: ["uri", "title", "type", "flairUrl", "artUrl", "shortTitle", "sourceDescription", "sourceTitle", "showCard", "link", "metadata.interactions.follow.added", "sourceId", "sourceType", "metadata.connections.videos.total", "metadata.connections.users.total"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v4 = _v3?.data,
      _v5 = (0, _v32.useMarginXValue)(),
      [_v6, _v7] = (0, _v10.useState)(null),
      _v8 = _v4?.[0]?.type === "carousel";
    return (0, _v1.jsx)(_v12.Flex, {
      flexDir: "column",
      gap: {
        base: "sm",
        md: "lg",
        xl: "2xl"
      },
      mx: _v5,
      minHeight: "400px",
      children: _v4?.map((_v0, _v1) => "carousel" === _v0.type ? (0, _v1.jsx)(_v61, {
        carousel: _v0,
        shouldPreload: _v1 - 1 === _v6,
        onIntersection: () => _v7(_v1),
        isFirst: _v8 && 0 === _v1
      }, _v0.uri) : (0, _v1.jsx)(_v62.WatchPlaylist, {
        curationComponent: _v0,
        setShowLoginJoinModal: _v1,
        authModalType: _v0,
        widgetPlacement: _v1 + 2,
        shouldPreload: _v1 - 1 === _v6,
        onIntersection: () => _v7(_v1)
      }, _v0.uri))
    });
  };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  async function _v68({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v23.measureLatency)("getPromotedVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/promoted_videos?${(0, _v24.searchQueryString)(_v2)}&fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  function _v69(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v30.useGctlConfig)();
    return (0, _v26.default)(_v2 ? `/promoted_videos${(0, _v28.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v68({
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
  "true" === _v22.default.env.STORYBOOK && (0, _v28.assignMswData)(_v69, {
    endpoint: "/promoted_videos",
    method: "GET"
  }), "true" === _v22.default.env.STORYBOOK && (0, _v28.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v27.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v30.useGctlConfig)(),
      [_v5, _v6] = (0, _v28.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/promoted_videos${(0, _v28.serializeQuery)(_v0)}`, _v68({
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
  }), "true" === _v22.default.env.STORYBOOK && (0, _v28.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v30.useGctlConfig)();
    return (0, _v29.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/promoted_videos?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v68({
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
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = _v0 => (0, _v1.jsxs)(_v37.bokeh.svg, {
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
    _v74 = _v0 => (0, _v1.jsxs)(_v37.bokeh.svg, {
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
    _v75 = ({
      flairType: _v0,
      ..._v1
    }) => {
      switch (_v0) {
        case "staff_pick":
          return (0, _v1.jsx)(_v73, {
            ..._v1
          });
        case "staff_pick_premiere":
          return (0, _v1.jsx)(_v74, {
            ..._v1
          });
        default:
          return (0, _v1.jsx)(_v33.Box, {
            ..._v1,
            visibility: "hidden"
          });
      }
    },
    _v76 = () => {
      let _v0 = (0, _v19.useOptionalViewer)(),
        {
          trackWatchHeroButtonClicked: _v1
        } = (0, _v16.useWatchTracking)(),
        {
          data: _v2,
          isLoading: _v3
        } = _v69(() => _v0 ? {
          select: ["artUrl", "description", "flairType", "video.link", "video.name", "video.uri", "video.user.link", "video.user.name", "video.user.pictures"]
        } : null),
        _v4 = (0, _v32.useMarginXValue)({
          base: "2rem"
        }),
        _v5 = (0, _v34.useBreakpointValue)({
          base: (0, _v67.rem)(16),
          lg: (0, _v67.rem)(24)
        }),
        _v6 = (0, _v10.useRef)(!1),
        [_v7, _v8] = (0, _v10.useState)(0),
        _v9 = (0, _v10.useMemo)(() => _v2?.data?.filter(_v0 => _v0.video), [_v2]),
        _v10 = (0, _v10.useCallback)(_v0 => {
          if (_v9 && _v9[_v0]) return (0, _v60.idFromUri)(_v9[_v0].video.uri);
        }, [_v9]);
      (0, _v10.useEffect)(() => {
        !_v0 || _v3 || _v6.current || (_v6.current = !0, (0, _v72.trackWidgetViewEvent)({
          videoId: _v10(0),
          viewer: _v0,
          widgetName: "promoted_video_hero",
          widgetPlacement: 1
        }));
      }, [_v10, _v3, _v0]);
      let _v11 = (0, _v34.useBreakpointValue)({
          base: !0,
          md: !1
        }),
        _v12 = (0, _v71.useCommunityLoopParams)();
      if (_v3) return (0, _v1.jsx)(_v54.Skeleton, {
        height: {
          base: (0, _v67.rem)(432),
          lg: (0, _v67.rem)(400),
          xl: (0, _v67.rem)(480)
        },
        marginX: _v4,
        width: "unset"
      });
      let _v13 = {
        base: "linear-gradient(0deg, #000 15%, rgba(0, 0, 0, 0.00) 75%)",
        lg: "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 75%)"
      };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v2.default, {
          children: _v9?.slice(0, 3).map(_v0 => (0, _v1.jsx)("link", {
            rel: "preload",
            as: "image",
            fetchPriority: "high",
            href: _v0.artUrl
          }, `preload-${_v0.video.uri}`))
        }), (0, _v1.jsxs)(_v66.Carousel, {
          slideCount: _v9?.length || 0,
          height: {
            base: (0, _v67.rem)(432),
            lg: (0, _v67.rem)(400),
            "2xl": (0, _v67.rem)(480)
          },
          padding: _v4,
          spacing: _v5,
          sx: {
            '> [data-part="item-group"]': {
              overscrollBehaviorY: "unset !important"
            }
          },
          onPageChange: _v0 => {
            _v8(_v0.page), (0, _v72.trackWidgetViewEvent)({
              videoId: _v10(_v0.page),
              viewer: _v0,
              widgetName: "promoted_video_hero",
              widgetPlacement: 1
            });
          },
          ...(!_v11 && {
            autoplay: {
              delay: 0
            }
          }),
          children: [(0, _v1.jsxs)(_v66.CarouselControl, {
            width: "100%",
            display: {
              base: "none",
              md: "flex"
            },
            children: [(0, _v1.jsx)(_v66.CarouselPrevTrigger, {
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
                base: (0, _v67.rem)(32),
                xl: (0, _v67.rem)(48)
              },
              zIndex: "2"
            }), (0, _v1.jsx)(_v66.CarouselNextTrigger, {
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
                base: (0, _v67.rem)(32),
                xl: (0, _v67.rem)(48)
              },
              zIndex: "2",
              justifyContent: "flex-end"
            })]
          }), (0, _v1.jsx)(_v66.CarouselItemGroup, {
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
            children: _v9?.map((_v0, _v1) => (0, _v1.jsx)(_v66.CarouselItem, {
              index: _v1,
              borderRadius: "md",
              width: "100%",
              height: "100%",
              position: "relative",
              overflow: "hidden",
              opacity: .25,
              transition: "opacity 0.5s ease-out",
              children: (0, _v1.jsxs)(_v64.default, {
                href: `${_v0.video.link}${_v12}`,
                onClick: () => {
                  (0, _v72.trackCarouselVideoClickEvent)({
                    copy: null,
                    target: _v0.video.link,
                    videoId: (0, _v60.idFromUri)(_v0.video.uri),
                    viewer: _v0
                  });
                },
                children: [(0, _v1.jsx)(_v33.Box, {
                  backgroundImage: `url(${_v0.artUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  role: "img"
                }), (0, _v1.jsx)(_v33.Box, {
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "100%",
                  background: _v13
                }), (0, _v1.jsxs)(_v12.Flex, {
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
                  children: [(0, _v1.jsx)(_v75, {
                    flairType: _v0.flairType,
                    width: {
                      base: (0, _v67.rem)(85),
                      xl: (0, _v67.rem)(106)
                    },
                    height: {
                      base: (0, _v67.rem)(32),
                      xl: (0, _v67.rem)(40)
                    }
                  }), (0, _v1.jsx)(_v41.Header, {
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
                    children: (0, _v1.jsxs)(_v12.Flex, {
                      gap: "sm",
                      alignItems: "center",
                      as: _v64.default,
                      href: _v0.video.user.link,
                      width: "fit-content",
                      marginTop: "-2px",
                      onClick: () => (0, _v72.trackCreatorNameClick)({
                        target: _v0.video.user.link,
                        viewer: _v0,
                        widgetName: "promoted_video_hero",
                        widgetPlacement: 1
                      }),
                      children: [(0, _v1.jsx)(_v33.Box, {
                        children: (0, _v1.jsx)(_v65.Avatar, {
                          size: "xs",
                          src: _v0.video.user?.pictures?.sizes.find(_v0 => _v0.width > 42)?.link,
                          alt: "avatar",
                          nameProps: {
                            name: _v0.video.user?.name ?? ""
                          }
                        })
                      }), (0, _v1.jsx)(_v41.Header, {
                        size: "xs",
                        color: "gray.50",
                        children: _v0.video.user?.name
                      })]
                    })
                  }), _v0.description && (0, _v1.jsx)(_v42.Text, {
                    variant: {
                      base: "body-md",
                      xl: "body-lg"
                    },
                    color: "gray.50",
                    noOfLines: 3,
                    children: _v0.description
                  }), (0, _v1.jsx)(_v39.DarkMode, {
                    children: (0, _v1.jsx)(_v44.Button, {
                      variant: "primary",
                      leftIcon: (0, _v1.jsx)(_v45.PlayFilled, {}),
                      width: {
                        base: "unset",
                        md: "fit-content"
                      },
                      as: "a",
                      href: `${_v0.video.link}${_v12}`,
                      onClick: () => {
                        (0, _v72.trackCarouselVideoClickEvent)({
                          copy: "watch",
                          target: _v0.video.link,
                          videoId: (0, _v60.idFromUri)(_v0.video.uri),
                          viewer: _v0
                        }), _v1({
                          clipId: String((0, _v60.idFromUri)(_v0.video.uri))
                        });
                      },
                      children: (0, _v70.translate)({
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
          }), (0, _v1.jsx)(_v66.CarouselIndicatorGroup, {
            bottom: {
              base: "0",
              lg: "5%"
            },
            height: "30px",
            children: _v9?.map((_v0, _v1) => (0, _v1.jsx)(_v66.CarouselIndicator, {
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
              }
            }, _v1))
          })]
        })]
      });
    },
    _v77 = (0, _v7.default)(async () => {
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
  function _v78({
    playerAssetUrls: _v0
  }) {
    let _v1 = (0, _v19.useOptionalViewer)(),
      [_v2, _v3] = (0, _v10.useState)(!1),
      [_v4, _v5] = (0, _v10.useState)("join"),
      _v6 = (0, _v8.usePathname)(),
      _v7 = (0, _v9.useRouter)(),
      {
        trackWatchPageDisplayed: _v8
      } = (0, _v16.useWatchTracking)();
    return (0, _v15.usePicoEffect)(() => {
      if (!_v1) return !1;
      _v8({
        referrerPage: (0, _v14.deriveReferrerPage)(),
        watchPageViewerAuthStatus: (0, _v14.deriveViewerAuthStatus)(_v1)
      });
    }, [_v1], {
      once: !0
    }), (0, _v1.jsxs)(_v12.Flex, {
      flexDir: "column",
      gap: "lg",
      children: [(0, _v1.jsx)(_v76, {}), (0, _v1.jsx)(_v79, {
        type: _v18.PlayerType.BarebonePlayer,
        assetUrls: _v0,
        children: (0, _v1.jsx)(_v63, {
          setShowLoginJoinModal: _v3,
          authModalType: _v4
        })
      }), null !== _v1 && !_v1?.user && (0, _v1.jsx)(_v21.LoggedOutBanner, {}), (0, _v1.jsx)(_v11.ThemeProvider, {
        theme: _v13.themes.light,
        children: (0, _v1.jsx)(_v77, {
          isShowing: _v2,
          type: _v4,
          onDismiss: () => _v3(!1),
          xsrft: _v1?.xsrft || "",
          updateInitialType: _v5,
          redirectUrl: _v6,
          onSuccess: () => {
            _v7.reload();
          },
          bpData: {
            feature: "watch",
            pageName: "watch",
            product: "community"
          }
        })
      }), (0, _v1.jsx)(_v20.FooterContainer, {
        viewer: _v1,
        onLoginSuccess: () => _v7.reload()
      })]
    });
  }
  let _v79 = ({
      children: _v0,
      assetUrls: _v1,
      type: _v2
    }) => _v1 ? (0, _v1.jsx)(_v17.PlayerContextProvider, {
      assetUrls: _v1,
      type: _v2,
      children: _v0
    }) : _v0,
    _v80 = ({
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
      }), (0, _v1.jsx)(_v78, {
        playerAssetUrls: _v0
      })]
    });
  _v80.getLayout = _v3.getLayout, (0, _v5.withPageSetup)(async _v0 => (await (0, _v4.isFromCopyrightRestrictedRegion)(_v0)) ? {
    redirect: {
      destination: "/europeanfilmacademy",
      permanent: !1
    }
  } : {
    props: {
      hasThemeSupport: !0,
      hasPlayerAPI: !0,
      omitEsi: !0
    }
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v80], 0);
}