{
  "use strict";

  var _v1,
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
    _v16 = _v0.i(0);
  let _v17 = ({
    text: _v0,
    locationsList: _v1,
    activeIndex: _v2,
    onClick: _v3
  }) => (0, _v2.jsx)(_v12.Flex, {
    position: "absolute",
    background: "white",
    color: "black",
    zIndex: 10,
    width: "100%",
    mt: "0.5rem",
    maxHeight: (0, _v3.rem)(96),
    sx: {
      listStyle: "none !important"
    },
    shadow: "md",
    overflow: "hidden",
    borderRadius: "0.25rem",
    children: (0, _v2.jsxs)(_v12.Flex, {
      flexDirection: "column",
      overflow: "auto",
      width: "100%",
      py: "0.5rem",
      children: [_v1.map((_v0, _v1) => (0, _v2.jsxs)(_v12.Flex, {
        position: "relative",
        onClick: () => _v3(_v0),
        backgroundColor: _v1 === _v2 ? "gray.100" : "",
        _hover: {
          backgroundColor: "gray.100"
        },
        p: "0.5rem",
        cursor: "pointer",
        children: [(0, _v2.jsx)(_v14.LocationPin, {
          height: "1rem",
          width: "1rem",
          transform: "translateY(3px)",
          mr: "0.25rem"
        }), (0, _v2.jsx)(_v13.Text, {
          variant: "body-md",
          children: (0, _v2.jsx)(_v15.default, {
            input: _v0,
            suggestion: _v0.formattedAddress
          })
        })]
      }, `city_${_v1}_${_v0.placeId}`)), (0, _v2.jsx)(_v12.Flex, {
        px: "0.5rem",
        children: (0, _v2.jsx)(_v16.default, {
          searchText: _v0
        })
      })]
    })
  });
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = ((_v1 = _v24 || {})[_v1.TAB = 9] = "TAB", _v1[_v1.ENTER = 13] = "ENTER", _v1[_v1.ESC = 27] = "ESC", _v1[_v1.UP = 38] = "UP", _v1[_v1.DOWN = 40] = "DOWN", _v1);
  let _v25 = (0, _v4.forwardRef)(({
      onChange: _v0,
      onIndexUpdate: _v1,
      onEnter: _v2,
      onDismiss: _v3,
      value: _v4,
      placeholder: _v5 = "",
      onTab: _v6,
      onFocus: _v7,
      isValid: _v8 = !0,
      isSearch: _v9,
      label: _v10,
      inputIcon: _v11,
      className: _v12,
      style: _v13
    }, _v14) => (0, _v2.jsxs)(_v2.Fragment, {
      children: [_v10 && (0, _v2.jsx)(_v23.Header, {
        size: "6",
        children: _v10
      }), (0, _v2.jsxs)(_v26, {
        children: [!_v8 && (0, _v2.jsx)(_v29, {}), _v8 && _v11 && _v4 && (0, _v2.jsx)(_v28, {
          children: _v11
        }), (0, _v2.jsx)(_v30, {
          type: "text",
          placeholder: _v5,
          onChange: _v0 => _v0(_v0.target.value),
          onKeyDown: _v0 => {
            40 === _v0.keyCode ? (_v1(1), _v0.preventDefault()) : 38 === _v0.keyCode ? (_v1(-1), _v0.preventDefault()) : _v6 && (27 === _v0.keyCode || 9 === _v0.keyCode) ? _v6() : 13 === _v0.keyCode && (_v2(), _v0.preventDefault());
          },
          value: _v4,
          status: _v8 ? "neutral" : "negative",
          hasIcon: _v4 && (0, _v4.isValidElement)(_v11) || !_v8,
          onFocus: () => _v7 && _v7(),
          ref: _v14,
          className: _v12,
          style: _v13
        }), _v9 && !_v4 && (0, _v2.jsx)(_v31, {
          format: "secondary",
          icon: (0, _v2.jsx)(_v22.Search, {})
        }), _v4 && (0, _v2.jsx)(_v31, {
          format: "secondary",
          icon: (0, _v2.jsx)(_v21.DismissX, {}),
          onClick: _v3
        })]
      })]
    })),
    _v26 = _v5.default.div.withConfig({
      displayName: "LocationInputField__InputFieldWrapper",
      componentId: "sc-3de6c16b-0"
    })`
  position: relative;
`,
    _v27 = _v5.css`
  transition: 120ms ease-in-out;
  position: absolute;
  left: ${(0, _v3.rem)(9)};
  z-index: 2;
  height: ${(0, _v3.rem)(35)};
  display: flex;
  flex-shrink: 0;
  align-items: center;
`,
    _v28 = _v5.default.div.withConfig({
      displayName: "LocationInputField__IconWrapper",
      componentId: "sc-3de6c16b-1"
    })`
  ${_v27};
  left: ${(0, _v3.rem)(13)};
  height: 100%;
  justify-content: center;
`,
    _v29 = (0, _v5.default)(_v20.CircleInfoSmall).withConfig({
      displayName: "LocationInputField__ErrorCircle",
      componentId: "sc-3de6c16b-2"
    })`
  ${_v27}
  width: ${(0, _v3.rem)(18)};
  path {
    fill: ${_v7.bokehTheme.colors.red["600"]};
  }
`,
    _v30 = (0, _v5.default)(_v19.Input).withConfig({
      displayName: "LocationInputField__CustomInputField",
      componentId: "sc-3de6c16b-3"
    })`
  font-size: ${(0, _v3.rem)(14)};

  input {
    padding-right: ${(0, _v3.rem)(30)};
    &::-ms-clear {
      width: 0;
      height: 0;
    }
    ${({
      hasIcon: _v0
    }) => _v0 ? _v5.css`
            padding-left: ${(0, _v3.rem)(26)};
          ` : _v5.css`
            border: ${(0, _v3.rem)(1)} solid rgba(0, 0, 0, 0.5);
          `}
  }
`,
    _v31 = (0, _v5.default)(_v18.Button).withConfig({
      displayName: "LocationInputField__IconButton",
      componentId: "sc-3de6c16b-4"
    })`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  border-color: transparent;
  background-color: transparent;

  &:hover:not(:active) {
    background-color: transparent;
    border-color: transparent;
  }

  svg path {
    fill: ${_v7.bokehTheme.colors.gray["500"]};
  }
`;
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = (0, _v4.forwardRef)(({
      onChange: _v0,
      onIndexUpdate: _v1,
      onEnter: _v2,
      onDismiss: _v3,
      value: _v4,
      placeholder: _v5 = "",
      onTab: _v6,
      onFocus: _v7,
      isValid: _v8 = !0,
      isSearch: _v9,
      label: _v10,
      inputIcon: _v11,
      className: _v12,
      style: _v13
    }, _v14) => {
      let _v15 = _v4 && (0, _v4.isValidElement)(_v11) || !_v8;
      return (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v13.Text, {
          variant: "heading-xs",
          mb: "0.5rem",
          children: _v10
        }), (0, _v2.jsxs)(_v6.Box, {
          width: "100%",
          position: "relative",
          children: [!_v8 && (0, _v2.jsx)(_v38, {
            isError: !0,
            children: (0, _v2.jsx)(_v35.InfoCircle, {
              color: "red"
            })
          }), _v8 && _v11 && _v4 && (0, _v2.jsx)(_v38, {
            children: _v11
          }), (0, _v2.jsx)(_v33.Input, {
            ref: _v14,
            value: _v4,
            onChange: _v0 => _v0(_v0.target.value),
            onKeyDown: _v0 => {
              "ArrowDown" === _v0.key ? (_v1(1), _v0.preventDefault()) : "ArrowUp" === _v0.key ? (_v1(-1), _v0.preventDefault()) : _v6 && ("Esc" === _v0.key || "Tab" === _v0.code) ? _v6() : "Enter" === _v0.key && (_v2(), _v0.preventDefault());
            },
            onFocus: _v7,
            placeholder: _v5,
            className: _v12,
            sx: _v13,
            isInvalid: !_v8,
            paddingRight: (0, _v3.rem)(30),
            paddingLeft: _v15 ? (0, _v3.rem)(28) : "0.5rem",
            width: "100%"
          }), _v9 && !_v4 && (0, _v2.jsx)(_v32.IconButton, {
            "aria-label": "search",
            variant: "tertiary",
            icon: (0, _v2.jsx)(_v36.SearchMagnifier, {})
          }), _v4 && (0, _v2.jsx)(_v32.IconButton, {
            "aria-label": "clear",
            variant: "tertiary",
            icon: (0, _v2.jsx)(_v34.CloseX, {}),
            onClick: _v3,
            position: "absolute",
            right: "0.5rem",
            size: "xs",
            top: 0,
            bottom: 0,
            m: "auto"
          })]
        })]
      });
    }),
    _v38 = ({
      children: _v0,
      isError: _v1
    }) => (0, _v2.jsx)(_v12.Flex, {
      transition: "120ms ease-in-out",
      position: "absolute",
      left: "0.5rem",
      zIndex: 2,
      height: "1rem",
      top: 0,
      bottom: 0,
      margin: "auto",
      flexShrink: 0,
      alignItems: "center",
      color: _v1 ? "red.600" : "text.primary",
      sx: {
        "> *": {
          width: "1rem",
          height: "1rem"
        }
      },
      children: _v0
    });
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  class _v41 {
    placesObj;
    constructor(_v0) {
      this.placesObj = _v0;
    }
    getLocation(_v0, _v1 = ["address_components", "formatted_address", "geometry.location", "place_id", "types"]) {
      if (_v0) {
        let _v0 = {
          placeId: _v0,
          fields: _v1,
          sessionToken: _v40.default.token
        };
        return new Promise(_v0 => {
          this.placesObj.getDetails(_v0, (_v0, _v1) => {
            _v0(this.locationDetailsCallback(_v0, _v1));
          });
        });
      }
      return Promise.reject("PlaceId is missing");
    }
    getNameAndIsoCode(_v0, _v1, _v2) {
      _v0[_v1] = _v2.long_name, _v2.short_name.length < 10 && (_v0[`${_v1}IsoCode`] = _v2.short_name);
    }
    locationDetailsCallback(_v0, _v1) {
      if (_v0 && _v1 === _v39.PlacesServiceStatus.OK) {
        let _v0 = {
          formattedAddress: _v0.formatted_address,
          latitude: _v0.geometry.location.lat(),
          longitude: _v0.geometry.location.lng(),
          placeId: _v0.place_id
        };
        return _v0.address_components.forEach(_v0 => {
          _v0.types.includes("locality") || _v0.types.includes("administrative_area_level_3") ? _v0.city = _v0.long_name : _v0.types.includes("sublocality_level_1") ? _v0.subLocality = _v0.long_name : _v0.types.includes("neighborhood") ? _v0.neighborhood = _v0.long_name : _v0.types.includes("administrative_area_level_1") ? this.getNameAndIsoCode(_v0, "state", _v0) : _v0.types.includes("country") && this.getNameAndIsoCode(_v0, "country", _v0);
        }), _v40.default.clearToken(), _v0;
      }
    }
  }
  let _v42 = _v4.default.forwardRef(({
      value: _v0,
      onChange: _v1,
      isTouched: _v2,
      errorMsg: _v3,
      children: _v4,
      setTouched: _v5,
      useBokeh: _v6,
      ..._v7
    }, _v8) => {
      let {
          googlePlaces: _v9
        } = (0, _v4.useContext)(_v10.GoogleMapContext),
        _v10 = _v0 => _v0 && ["formattedAddress", "latitude", "longitude"].every({}.hasOwnProperty.bind(_v0)),
        _v11 = () => _v10(_v0) && _v0.formattedAddress || "",
        [_v12, _v13] = (0, _v4.useState)(null),
        [_v14, _v15] = (0, _v4.useState)(""),
        [_v16, _v17] = (0, _v4.useState)(0),
        [_v18, _v19] = (0, _v4.useState)(!1),
        [_v20, _v21] = (0, _v4.useState)(_v2),
        [, _v22] = (0, _v4.useState)(),
        _v23 = (0, _v8.default)(_v14),
        _v24 = (0, _v4.useRef)(null),
        _v25 = (0, _v4.useRef)(null),
        _v26 = !(_v3 && _v20 && "" === _v14);
      (0, _v4.useEffect)(() => {
        _v8 && ("function" == typeof _v8 ? _v8(_v25.current) : _v8.current = _v25.current);
      }, [_v8]), (0, _v4.useEffect)(() => {
        _v21(_v2);
      }, [_v2]), (0, _v4.useEffect)(() => {
        _v15(_v11), _v13(_v10(_v0) ? _v0 : null);
      }, [_v0]);
      let _v27 = (_v0 = "", _v1 = !1) => {
        _v15(_v0), _v17(0), _v19(_v1);
      };
      (0, _v9.default)(_v24, () => {
        !_v6 && (_v27(_v12 ? _v12.formattedAddress : ""), _v20 && _v5 && _v5(!0));
      }, null, [_v20, _v12]);
      let _v28 = _v0 => {
          let _v1 = _v16 + _v0;
          _v1 >= 0 && _v1 < _v23.length && _v17(_v1);
        },
        _v29 = () => {
          _v25.current?.focus(), _v1(), _v13(null), _v27();
        },
        _v30 = () => {
          _v27(_v12 ? _v12.formattedAddress : ""), _v5 && _v5(!0);
        },
        _v31 = _v0 => {
          var _v1;
          _v25.current?.focus(), _v27(_v0.formattedAddress), (_v1 = _v0.placeId, _v9 ? new _v41(_v9).getLocation(_v1) : Promise.reject("It seems Google API is not set in context or initialized properly")).then(_v0 => {
            _v0 && (_v13(_v0), _v1(_v0));
          }).catch(_v0 => {
            _v13(null), _v15(""), _v1(), _v17(0), _v22(_v0);
          });
        },
        _v32 = () => {
          _v16 >= 0 && _v16 < _v23.length && _v31(_v23[_v16]);
        };
      return (0, _v2.jsxs)(_v2.Fragment, {
        children: [_v6 ? (0, _v2.jsxs)(_v6.Box, {
          width: "100%",
          position: "relative",
          children: [(0, _v2.jsx)(_v37, {
            ..._v7,
            ref: _v25,
            value: _v14,
            onChange: _v0 => {
              _v5 && _v5(!0), _v27(_v0, !0);
            },
            onDismiss: _v29,
            onEnter: _v32,
            onIndexUpdate: _v28,
            onTab: _v30,
            onFocus: () => {
              _v19(!0), _v21(!0);
            },
            isValid: _v26
          }), _v23.length > 0 && _v18 && (0, _v2.jsx)(_v17, {
            text: _v14,
            locationsList: _v23,
            activeIndex: _v16,
            onClick: _v31
          }), !_v26 && (0, _v2.jsx)(_v44, {
            children: _v3
          })]
        }) : (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsxs)(_v43, {
            ref: _v24,
            children: [(0, _v2.jsx)(_v25, {
              ..._v7,
              ref: _v25,
              value: _v14,
              onChange: _v0 => {
                _v5 && _v5(!0), _v27(_v0, !0);
              },
              onDismiss: _v29,
              onEnter: _v32,
              onIndexUpdate: _v28,
              onTab: _v30,
              onFocus: () => {
                _v19(!0), _v21(!0);
              },
              isValid: _v26
            }), _v23.length > 0 && _v18 && (0, _v2.jsx)(_v11.default, {
              text: _v14,
              locationsList: _v23,
              activeIndex: _v16,
              onClick: _v31
            })]
          }), !_v26 && (0, _v2.jsx)(_v44, {
            children: _v3
          })]
        }), _v4 && _v4(() => _v21(!0))]
      });
    }),
    _v43 = _v5.default.div.withConfig({
      displayName: "LocationAutocomplete__AutoCompleteWrapper",
      componentId: "sc-42700416-0"
    })`
  padding: 0;
  position: relative;
`,
    _v44 = _v5.default.div.withConfig({
      displayName: "LocationAutocomplete__ErrorMsg",
      componentId: "sc-42700416-1"
    })`
  padding-top: ${(0, _v3.rem)(5)};
  color: ${_v7.bokehTheme.colors.red["600"]};
  font-size: ${(0, _v3.rem)(12)};
`;
  _v0.s(["default", 0, _v42], 0);
}