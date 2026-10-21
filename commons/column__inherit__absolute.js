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
    _v23 = _v0.i(0);
  let _v24 = ({
      hasError: _v0,
      isMobile: _v1 = !1,
      trend: _v2,
      startDate: _v3,
      endDate: _v4,
      isActive: _v5
    }) => {
      let _v6 = (0, _v2.useContext)(_v9.ViewerContext),
        _v7 = (0, _v23.getTrendType)(_v2);
      return _v0 ? (0, _v1.jsxs)(_v17.Flex, {
        height: "100%",
        flexDirection: _v1 ? "row" : "column",
        position: _v1 ? "inherit" : "absolute",
        justifyContent: _v1 ? "inherit" : "space-between",
        textAlign: "end",
        alignItems: "end",
        marginLeft: "auto",
        children: [(0, _v1.jsx)(_v19.CircleExclamation, {
          height: "1.125rem",
          color: "status-destructive-primary"
        }), (0, _v1.jsx)(_v4.Text, {
          variant: "body-xs",
          color: "text-secondary",
          marginLeft: "0.25rem",
          minWidth: "5.688rem",
          sx: {
            textWrap: "pretty"
          },
          children: _v13.translations.dataError
        })]
      }) : (0, _v1.jsxs)(_v17.Flex, {
        height: "100%",
        flexDirection: _v1 ? "row" : "column",
        position: _v1 ? "inherit" : "absolute",
        justifyContent: _v1 ? "inherit" : "space-between",
        textAlign: "end",
        alignItems: "end",
        display: _v5 ? "flex" : "none",
        marginLeft: "auto",
        _groupHover: {
          display: "inherit",
          transition: "display 0.3s ease-in-out"
        },
        children: [!_v1 && (0, _v1.jsx)(_v3.Box, {
          minHeight: "1.375rem",
          children: (0, _v1.jsx)(_v22.TrendIcon, {
            trendType: _v7,
            width: "1.25rem"
          })
        }), (0, _v1.jsx)(_v4.Text, {
          variant: "body-xl",
          color: "text-secondary",
          marginLeft: "0.25rem",
          minWidth: "5.688rem",
          fontSize: "0.688rem",
          sx: {
            textWrap: "pretty"
          },
          children: _v13.translations.fromPrevious((0, _v1.jsxs)(_v3.Box, {
            as: "span",
            fontWeight: "700",
            lineHeight: "0.839rem",
            color: "text-primary",
            children: [(0, _v23.getTrendSymbol)(_v7), " ", _v6 && (0, _v21.formatNumber)({
              value: _v2,
              locale: _v6.locale,
              style: "percent",
              notation: "compact",
              signDisplay: "never"
            })]
          }), (0, _v20.timeBetween)(_v3.toJSDate(), _v4.toJSDate(), {
            shorten: !0
          }))
        })]
      });
    },
    _v25 = ({
      hasError: _v0,
      isLoading: _v1,
      trend: _v2,
      startDate: _v3,
      endDate: _v4,
      isActive: _v5
    }) => {
      let _v6 = (0, _v23.getTrendType)(_v2);
      return _v1 ? (0, _v1.jsx)(_v3.Box, {
        height: "3.5rem",
        maxWidth: "3.5rem",
        width: "100%",
        marginTop: "-0.25rem",
        children: (0, _v1.jsx)(_v7.BokehSkeleton, {
          height: "100%",
          width: "100%",
          borderRadius: "0.5rem"
        })
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [!_v0 && (0, _v1.jsx)(_v17.Flex, {
          display: _v5 ? "none" : "inherit",
          height: {
            base: "2rem",
            lg: "3rem",
            xl: "3.5rem"
          },
          width: {
            base: "2rem",
            lg: "3rem",
            xl: "3.5rem"
          },
          justifyContent: "center",
          alignItems: "center",
          borderRadius: {
            base: "0.5rem",
            lg: "0.625rem",
            xl: "0.75rem"
          },
          alignSelf: "center",
          _groupHover: {
            display: "none",
            transition: "display 0.3s ease-in-out"
          },
          children: (0, _v1.jsx)(_v22.TrendIcon, {
            trendType: _v6,
            width: "1.5rem"
          })
        }), (0, _v1.jsx)(_v24, {
          hasError: _v0,
          trend: _v2,
          startDate: _v3,
          endDate: _v4,
          isActive: _v5
        })]
      });
    };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useContext)(_v9.ViewerContext);
    return (0, _v1.jsx)(_v4.Text, {
      variant: "body-xl",
      fontSize: "1.375rem",
      fontWeight: "700",
      color: "text-primary",
      marginTop: {
        base: "0",
        lg: "-0.2rem",
        xl: "-0.3rem"
      },
      children: _v1 && "number" == typeof _v0 ? (0, _v27.formatDisplayNumber)(_v0, _v1.locale) : 0
    });
  };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = ({
      content: _v0,
      isMobile: _v1 = !1
    }) => {
      let _v2 = (0, _v6.useColorModeValue)("slate.500", "grayscale.200");
      return (0, _v1.jsx)(_v29.Tooltip, {
        label: _v0,
        variant: "simple",
        fontSize: "0.875rem",
        placement: "top",
        children: (0, _v1.jsx)(_v3.Box, {
          as: "span",
          position: "relative",
          children: (0, _v1.jsx)(_v30.InfoCircle, {
            position: "absolute",
            width: "0.9rem",
            color: _v2,
            left: "0.2rem",
            top: {
              base: _v1 ? "-0.1rem" : "-0.3rem",
              xl: "-0.2rem"
            }
          })
        })
      });
    },
    _v32 = ({
      isActive: _v0,
      isLoading: _v1,
      hasTrendsError: _v2,
      onClick: _v3,
      startDate: _v4,
      endDate: _v5,
      dataKey: _v6,
      trend: _v7,
      value: _v8
    }) => {
      let _v9 = (0, _v26.useMetricColors)(),
        _v10 = (0, _v6.useColorModeValue)("slate.100", "grayscale.600"),
        _v11 = (0, _v6.useColorModeValue)("slate.50", "grayscale.800");
      return (0, _v1.jsxs)(_v17.Flex, {
        as: "button",
        role: "group",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "none",
        width: "100%",
        minWidth: "11.688rem",
        position: "relative",
        borderRadius: "0.75rem",
        height: "4.375rem",
        padding: "0.75rem 1rem",
        cursor: "pointer",
        background: _v0 ? _v10 : _v11,
        _last: {
          marginBottom: 0
        },
        _hover: {
          background: _v10,
          transition: "0.5s ease-in-out"
        },
        disabled: _v1,
        onClick: _v3,
        "aria-label": _v13.translations[_v6],
        children: [(0, _v1.jsxs)(_v3.Box, {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          children: [(0, _v1.jsxs)(_v17.Flex, {
            position: "relative",
            zIndex: 1,
            children: [(0, _v1.jsx)(_v3.Box, {
              background: _v9[_v6],
              height: "0.375rem",
              width: "0.375rem",
              borderRadius: "50%",
              marginRight: "0.25rem",
              marginTop: "0.35rem"
            }), (0, _v1.jsx)(_v18.Header, {
              size: "xs",
              color: "text-primary",
              sx: {
                textWrap: "nowrap"
              },
              marginBottom: "0",
              fontSize: {
                base: "0.75rem",
                xl: "0.875rem"
              },
              children: _v13.translations[_v6]
            }), (0, _v1.jsx)(_v31, {
              content: _v13.translations.tooltip[_v6]
            })]
          }), _v1 ? (0, _v1.jsx)(_v7.BokehSkeleton, {
            height: "2.25rem",
            width: "5.688rem",
            borderRadius: "0.5rem"
          }) : (0, _v1.jsx)(_v3.Box, {
            marginTop: {
              base: "0.3rem",
              xl: "0.2rem"
            },
            children: (0, _v1.jsx)(_v28, {
              children: _v8
            })
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "flex-end",
          width: "100%",
          alignSelf: "center",
          position: "relative",
          height: "100%",
          children: (0, _v1.jsx)(_v25, {
            isLoading: _v1,
            hasError: _v2,
            startDate: _v4,
            endDate: _v5,
            trend: _v7,
            isActive: _v0
          })
        })]
      });
    };
  var _v33 = _v0.i(0);
  _v0.s(["Overview", 0, ({
    filters: _v0,
    userId: _v1,
    width: _v2,
    header: _v3,
    isExternal: _v4 = !1,
    maxWidth: _v5,
    onMetricCardClick: _v6,
    onHeaderClick: _v7
  }) => {
    let _v8 = (0, _v2.useContext)(_v9.ViewerContext),
      _v9 = (0, _v8.useWindowSize)(),
      _v10 = _v2 ? _v2 <= _v15.BREAKPOINTS[620] : _v9.width <= _v15.BREAKPOINTS[907],
      [_v11, _v12] = (0, _v2.useState)("views"),
      _v13 = (0, _v6.useColorModeValue)("slate.50", "grayscale.800"),
      _v14 = (0, _v6.useColorModeValue)("#D5DADC", "grayscale.600");
    (0, _v2.useEffect)(() => {
      _v10 && !_v11 && _v12("views");
    }, [_v10, _v11]);
    let {
        data: _v15,
        isGraphDataLoading: _v16,
        isNumbersDataLoading: _v17,
        error: {
          graphDataError: _v18,
          trendsDataError: _v19,
          errorMessage: _v20
        }
      } = (0, _v12.useOverviewData)(_v1, _v0),
      _v21 = _v0 => (_v6?.(_v0), _v11 === _v0) ? _v12(void 0) : _v12(_v0),
      _v22 = _v11 && _v15?.numbersData?.[_v11];
    return _v8?.teamUser || _v8?.user && _v8?.user?.metadata?.connections?.videos?.total > 0 ? (0, _v1.jsxs)(_v33.Widget, {
      header: {
        to: _v3 ? "/analytics?ref=homepage_widget" : "/analytics/video",
        title: _v3 || _v13.translations.overview,
        bpTarget: _v3 ? "Dashboard" : "Video Report"
      },
      isExternal: !!_v3,
      isMobile: _v10,
      errorMessage: _v20,
      maxHeight: "21.875rem",
      name: _v16.WidgetName.ANALYTICS_OVERVIEW,
      maxWidth: _v5,
      onHeaderClick: _v7,
      children: [_v10 && _v11 && (0, _v1.jsxs)(_v3.Box, {
        display: "flex",
        flexDirection: "column",
        marginBottom: _v10 ? "" : "1rem",
        children: [(0, _v1.jsx)(_v3.Box, {
          margin: "0.5rem 0",
          children: (0, _v1.jsx)(_v4.Text, {
            variant: "body-xl",
            fontSize: "0.688rem",
            color: "text-secondary",
            children: _v13.translations.dateRange(_v0?.startDate, _v0?.endDate, _v8.locale)
          })
        }), (0, _v1.jsxs)(_v3.Box, {
          fontWeight: 700,
          color: "text-primary",
          children: [_v13.translations.data[_v11](_v22, (0, _v1.jsx)(_v28, {
            children: _v22 || "-"
          })), (0, _v1.jsx)(_v31, {
            isMobile: _v10,
            content: _v13.translations.tooltip[_v11]
          })]
        }), (0, _v1.jsx)(_v24, {
          hasError: !!_v19,
          isMobile: !0,
          trend: _v15?.trends?.[_v11] || 0,
          startDate: _v0?.startDate,
          endDate: _v0?.endDate
        })]
      }), (0, _v1.jsxs)(_v3.Box, {
        children: [!_v10 && (0, _v1.jsx)(_v3.Box, {
          marginTop: "-1rem",
          marginBottom: "0.85rem",
          children: (0, _v1.jsx)(_v4.Text, {
            variant: "body-xl",
            fontSize: "0.688rem",
            color: "text-secondary",
            children: _v13.translations.dateRange(_v0?.startDate, _v0?.endDate, _v8.locale)
          })
        }), (0, _v1.jsxs)(_v3.Box, {
          display: "grid",
          gap: _v10 ? "0" : "1rem",
          gridTemplateColumns: _v10 ? "1fr" : "minmax(68%, 1fr) minmax(187px, 308px)",
          gridTemplateRows: _v10 ? "9.625rem 3rem" : "",
          maxHeight: _v2 && _v10 ? "12.875rem" : "18.75rem",
          children: [_v16 ? (0, _v1.jsx)(_v7.BokehSkeleton, {
            height: "100%",
            width: "100%",
            borderRadius: "0.5rem"
          }) : (0, _v1.jsx)(_v11.Graph, {
            hasError: !!_v18,
            data: _v15?.graphData?.data,
            isMobile: _v10,
            selectedDataKey: _v11,
            dateFilters: {
              endDate: _v0.endDate,
              startDate: _v0.startDate
            }
          }), (0, _v1.jsx)(_v3.Box, {
            display: "flex",
            gap: "0.5rem",
            flexDirection: _v10 ? "row" : "column",
            justifyContent: _v10 ? "center" : "space-between",
            overflowX: "auto",
            overscrollBehavior: "contain",
            marginTop: _v10 ? "-0.4rem" : "inherit",
            children: Object.keys(_v14.DataKey).map(_v0 => _v10 ? (0, _v1.jsx)(_v5.Button, {
              variant: "solid",
              onClick: () => _v21(_v14.DataKey[_v0]),
              isDisabled: _v11 === _v14.DataKey[_v0],
              overflow: "unset",
              background: _v13,
              fontSize: "0.75rem",
              _hover: {
                background: _v14
              },
              _disabled: {
                background: _v14,
                opacity: 1,
                cursor: "default"
              },
              children: _v13.translations[_v14.DataKey[_v0]]
            }, _v0) : (0, _v1.jsx)(_v32, {
              isActive: _v11 === _v14.DataKey[_v0],
              isLoading: _v17,
              hasTrendsError: !!_v19,
              onClick: () => _v21(_v14.DataKey[_v0]),
              startDate: _v0?.startDate,
              endDate: _v0?.endDate,
              trend: _v15?.trends?.[_v14.DataKey[_v0]],
              dataKey: _v14.DataKey[_v0],
              value: _v15?.numbersData?.[_v14.DataKey[_v0]]
            }, _v0))
          })]
        })]
      })]
    }) : (0, _v1.jsx)(_v10.EmptyState, {
      header: _v3,
      isMobile: _v10,
      isExternal: _v4
    });
  }], 0);
}