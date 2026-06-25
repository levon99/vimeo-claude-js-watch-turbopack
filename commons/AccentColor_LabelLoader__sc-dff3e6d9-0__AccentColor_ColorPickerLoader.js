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
    _v21 = _v0.i(0);
  let _v22 = (0, _v5.default)(_v19.LoadingBlock).withConfig({
      displayName: "AccentColor__LabelLoader",
      componentId: "sc-dff3e6d9-0"
    })`
  height: ${(0, _v3.rem)(22)};
  width: 10%;
`,
    _v23 = (0, _v5.default)(_v19.LoadingBlock).withConfig({
      displayName: "AccentColor__ColorPickerLoader",
      componentId: "sc-dff3e6d9-1"
    })`
  height: ${(0, _v3.rem)(60)};
  width: 100%;
`,
    _v24 = () => (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsx)(_v10.Box, {
        children: (0, _v1.jsx)(_v22, {})
      }), (0, _v1.jsx)(_v23, {})]
    }),
    _v25 = ({
      accentColor: _v0,
      resetColor: _v1,
      setAccentColor: _v2,
      sourceImageUrl: _v3,
      shouldAutoSetAccentColor: _v4 = !1,
      disabled: _v5
    }) => {
      let [_v6, _v7] = (0, _v4.useState)(["#909CDC", "#7BD8DB", "#78DD89", "#CCE190"]),
        {
          trackTeamAccentColor: _v8
        } = (0, _v4.useContext)(_v20.ManageTeamAnalytics),
        _v9 = _v0 => {
          _v5 || /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(_v0) && _v0 !== _v0 && (_v2(_v0), _v8({
            color: _v0,
            method: _v8.ColorChangeMethods.Picker
          }));
        };
      return (0, _v4.useEffect)(() => {
        if (_v3) {
          let _v0 = document.createElement("img");
          _v0.setAttribute("crossOrigin", ""), _v0.onload = () => {
            let _v0 = (0, _v8.extractColors)(_v0).filter(Boolean);
            _v4 && _v0.length > 0 && _v2(_v0[0]), _v7(_v0);
          }, _v0.src = _v3;
        }
      }, [_v3, _v7]), (0, _v1.jsxs)(_v11.ColorPickerRoot, {
        positioning: {
          placement: "top"
        },
        value: (0, _v17.parseColor)(_v0),
        onValueChangeEnd: _v0 => _v9(_v0.value.toString("hex")),
        style: {
          flexDirection: "column"
        },
        children: [(0, _v1.jsxs)(_v13.Flex, {
          alignItems: "center",
          marginBottom: (0, _v3.rem)(12),
          children: [(0, _v1.jsx)(_v11.ColorPickerLabel, {
            children: (0, _v1.jsx)(_v10.Box, {
              "data-id": "labelWrapper",
              mr: (0, _v3.rem)(12),
              children: (0, _v1.jsx)(_v14.Header, {
                as: "h6",
                size: "xs",
                color: "text-primary",
                children: _v21.T.AccentColor
              })
            })
          }), (0, _v1.jsx)(_v11.ColorPickerSwatchGroup, {
            children: _v6.map(_v0 => (0, _v1.jsx)(_v11.ColorPickerSwatchTrigger, {
              value: _v0,
              onClick: () => _v9(_v0),
              children: (0, _v1.jsx)(_v11.ColorPickerSwatch, {
                value: _v0,
                boxSize: "2xs",
                sx: {
                  cursor: "pointer",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "stroke"
                }
              })
            }, _v0))
          })]
        }), (0, _v1.jsx)(_v12.ColorPickerControl, {
          children: (0, _v1.jsxs)(_v10.Box, {
            pos: "relative",
            children: [(0, _v1.jsx)(_v11.ColorPickerTrigger, {
              children: (0, _v1.jsx)(_v10.Box, {
                border: "1px solid",
                borderColor: "stroke",
                borderRadius: 3,
                padding: (0, _v3.rem)(14),
                cursor: "pointer",
                children: (0, _v1.jsxs)(_v15.HStack, {
                  gap: 2,
                  children: [(0, _v1.jsx)(_v11.ColorPickerSwatch, {
                    value: _v0,
                    boxSize: "2xs"
                  }), (0, _v1.jsx)(_v14.Header, {
                    size: "xl",
                    children: _v0
                  })]
                })
              })
            }), _v1 && _v1 !== _v0 && (0, _v1.jsx)(_v16.IconButton, {
              pos: "absolute",
              top: (0, _v3.rem)(12),
              right: (0, _v3.rem)(8),
              variant: "tertiary",
              "aria-label": "reset-color",
              icon: (0, _v1.jsx)(_v18.Reset, {}),
              onClick: () => _v9(_v1)
            })]
          })
        }), (0, _v1.jsx)(_v11.ColorPickerPositioner, {
          children: (0, _v1.jsxs)(_v11.ColorPickerContent, {
            children: [(0, _v1.jsx)(_v11.ColorPickerArea, {}), (0, _v1.jsxs)(_v15.HStack, {
              children: [(0, _v1.jsxs)(_v11.ColorPickerChannelSlider, {
                channel: "hue",
                children: [(0, _v1.jsx)(_v11.ColorPickerChannelSliderTrack, {}), (0, _v1.jsx)(_v11.ColorPickerChannelSliderThumb, {})]
              }), (0, _v1.jsx)(_v11.ColorPickerEyeDropperTrigger, {
                size: "sm"
              })]
            }), (0, _v1.jsx)(_v13.Flex, {
              height: "sm",
              children: (0, _v1.jsx)(_v11.ColorPickerChannelInput, {
                channel: "hex",
                onKeyDown: _v0 => {
                  "Enter" === _v0.key && _v9(_v0.target.value);
                }
              })
            })]
          })
        })]
      }, "color-select");
    };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
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
  async function _v40({
    baseUrl: _v0,
    select: _v1,
    where: {
      logoId: _v2
    },
    ..._v3
  }) {
    return (0, _v38.measureLatency)("getMeCustomlogo", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/customlogos/${_v2}?fields=${_v1.map(_v39.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  async function _v41({
    baseUrl: _v0,
    where: {
      logoId: _v1
    },
    ..._v2
  }) {
    return (0, _v38.measureLatency)("deleteMeCustomlogo", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/customlogos/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  function _v45() {
    let {
        mutate: _v0
      } = (0, _v43.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v44.useGctlConfig)(),
      [_v5, _v6] = (0, _v37.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/customlogos/${_v0.where.logoId}${(0, _v37.serializeQuery)(_v0)}`, _v41({
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
  "true" === _v36.default.env.STORYBOOK && (0, _v37.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v44.useGctlConfig)();
    return (0, _v42.default)(_v2 ? `/me/customlogos/${_v2.where.logoId}${(0, _v37.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v40({
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
    endpoint: "/me/customlogos/:logoId",
    method: "GET"
  }), "true" === _v36.default.env.STORYBOOK && (0, _v37.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v43.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v44.useGctlConfig)(),
      [_v5, _v6] = (0, _v37.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/customlogos/${_v0.where.logoId}${(0, _v37.serializeQuery)(_v0)}`, _v40({
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
    endpoint: "/me/customlogos/:logoId",
    method: "GET"
  }), "true" === _v36.default.env.STORYBOOK && (0, _v37.assignMswData)(_v45, {
    endpoint: "/me/customlogos/:logoId",
    method: "DELETE"
  });
  var _v46 = _v0.i(0);
  let _v47 = ["image/png", "image/x-png", "image/jpeg", ".jpg", ".jpeg", ".png"];
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = _v0 => (0, _v1.jsx)(_v53.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7ZM5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5.12l-.978-.783a3 3 0 0 0-3.995.222l-2.425 2.424a1 1 0 0 1-1.357.052l-.793-.679a3 3 0 0 0-3.904 0l-.548.47V7Zm0 9.46V17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2.32l-2.227-1.78a1 1 0 0 0-1.332.073l-2.424 2.425a3 3 0 0 1-4.074.156l-.792-.68a1 1 0 0 0-1.302 0L5 16.46Z"
      })]
    })
  });
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v13.Flex, {
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      p: (0, _v30.rem)(10),
      my: (0, _v30.rem)(12),
      width: (0, _v30.rem)(288),
      height: (0, _v30.rem)(129),
      borderRadius: (0, _v30.rem)(3),
      transition: "border 0.3s ease-out",
      border: `${(0, _v30.rem)(1)} solid`,
      ..._v1,
      children: _v0
    }),
    _v60 = _v5.default.div.withConfig({
      displayName: "styles__LogoPlaceholder",
      componentId: "sc-3e4e2cb3-0"
    })`
  margin-bottom: ${(0, _v3.rem)(12)};
  width: 100%;
  position: relative;
  height: ${(0, _v3.rem)(145)};
  @media (min-width: 600px) {
    height: ${(0, _v3.rem)(160)};
  }
  background-image:
    linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
    linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
    linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: ${(0, _v3.rem)(16)} ${(0, _v3.rem)(16)};
  background-position:
    0 0,
    0 ${(0, _v3.rem)(8)},
    ${(0, _v3.rem)(8)} ${(0, _v3.rem)(-8)},
    ${(0, _v3.rem)(-8)} ${(0, _v3.rem)(0)};

  display: flex;
  justify-content: center;
`,
    _v61 = _v5.default.div.withConfig({
      displayName: "styles__Carousel",
      componentId: "sc-3e4e2cb3-1"
    })`
  position: relative;
  height: ${(0, _v3.rem)(140)};
  @media (min-width: 600px) {
    height: ${(0, _v3.rem)(153)};
  }
`,
    _v62 = (0, _v5.default)("div").withConfig({
      displayName: "styles__LogosCarousalRow",
      componentId: "sc-3e4e2cb3-2"
    })`
  left: ${_v0 => (0, _v3.rem)(46 - (_v0.shouldShift ? _v0.currentLogoIndex : 0) * 243)};
  height: ${(0, _v3.rem)(153)};
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  transition: ${_v0 => _v0.shouldShift ? "left 0.3s ease-out" : "none"};
  @media (min-width: 600px) {
    left: ${_v0 => (0, _v3.rem)(56 - (_v0.shouldShift ? _v0.currentLogoIndex : 0) * 298)};
  }
`,
    _v63 = `0 0 ${(0, _v3.rem)(1)} 0 rgba(0, 0, 0, 0.15), 0 ${(0, _v3.rem)(4)} ${(0, _v3.rem)(4)} 0 rgba(0, 0, 0, 0.04)`,
    _v64 = `0 0 ${(0, _v3.rem)(1)} 0 rgba(0, 0, 0, 0.15), 0 ${(0, _v3.rem)(4)} ${(0, _v3.rem)(8)} 0 rgba(0, 0, 0, 0.2)`,
    _v65 = ({
      isCurrent: _v0,
      isRemovable: _v1,
      onDelete: _v2,
      src: _v3
    }) => (0, _v1.jsx)(_v59, {
      display: "inline-block",
      border: _v0 ? `${(0, _v30.rem)(1)} solid` : "none",
      borderColor: _v0 ? "focus" : "unset",
      background: `url(${_v3}) center/contain no-repeat content-box`,
      mr: (0, _v30.rem)(10),
      boxShadow: _v0 ? _v64 : _v63,
      _hover: {
        button: {
          visibility: "visible"
        }
      },
      children: _v0 && _v1 && (0, _v1.jsx)(_v58.Tooltip, {
        label: _v21.T.Remove,
        children: (0, _v1.jsx)(_v16.IconButton, {
          variant: "secondary",
          position: "absolute",
          top: (0, _v30.rem)(-14),
          right: (0, _v30.rem)(-15),
          "aria-label": "remove slide",
          icon: (0, _v1.jsx)(_v52.CloseX, {}),
          color: "status-destructive-primary",
          size: "xs",
          visibility: "hidden",
          onClick: _v2
        })
      })
    }),
    _v66 = () => (0, _v1.jsx)(_v59, {
      borderColor: "focus",
      boxShadow: _v63,
      children: (0, _v1.jsx)(_v32.Spinner, {
        size: "sm"
      })
    }),
    _v67 = ({
      errorMessage: _v0
    }) => (0, _v1.jsxs)(_v59, {
      borderColor: "status-destructive-primary",
      flexDirection: "column",
      boxShadow: _v63,
      children: [(0, _v1.jsx)(_v57.CircleExclamation, {
        color: "status-destructive-primary",
        boxSize: "xs"
      }), (0, _v1.jsx)(_v31.Paragraph, {
        color: "status-destructive-primary",
        children: _v0
      })]
    }),
    _v68 = ({
      direction: _v0,
      setCurrentLogoIndex: _v1
    }) => (0, _v1.jsx)(_v10.Box, {
      width: (0, _v3.rem)(25),
      height: (0, _v3.rem)(40),
      position: "absolute",
      top: (0, _v3.rem)(50),
      overflow: "hidden",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      left: "left" === _v0 ? `-${(0, _v3.rem)(20)}` : "unset",
      right: "left" === _v0 ? "unset" : `-${(0, _v3.rem)(20)}`,
      borderRadius: "left" === _v0 ? ` 0 ${(0, _v3.rem)(25)} ${(0, _v3.rem)(25)} 0` : `${(0, _v3.rem)(25)} 0 0 ${(0, _v3.rem)(25)}`,
      backgroundColor: "stroke",
      sx: {
        svg: {
          width: "16px !important"
        }
      },
      children: (0, _v1.jsx)(_v16.IconButton, {
        "aria-label": _v0,
        icon: "left" === _v0 ? (0, _v1.jsx)(_v56.ChevronLeft, {}) : (0, _v1.jsx)(_v55.ChevronRight, {}),
        variant: "tertiary",
        onClick: _v1
      })
    }),
    _v69 = ({
      availableLogos: _v0,
      currentLogoIndex: _v1,
      deleteLogo: _v2,
      errorMessage: _v3,
      isLoading: _v4,
      setCurrentLogoIndex: _v5
    }) => {
      let _v6 = _v0.map((_v0, _v1) => {
        let _v2 = _v0.uri.split("/"),
          _v3 = "team_logos" === _v2[3] || "customlogos" === _v2[3];
        return (0, _v1.jsx)(_v65, {
          src: _v0.sizes[0].link,
          isRemovable: _v3,
          isCurrent: _v1 === _v1,
          onDelete: _v2
        }, _v0.uri);
      });
      _v4 && (_v6 = [(0, _v1.jsx)(_v66, {}, "loading-state")]), _v3 && (_v6 = [(0, _v1.jsx)(_v67, {
        errorMessage: _v3
      }, "error-state")]);
      let _v7 = !_v4 && !_v3;
      return (0, _v1.jsxs)(_v61, {
        children: [(0, _v1.jsx)(_v62, {
          currentLogoIndex: _v1,
          shouldShift: _v7,
          children: _v6
        }), _v7 && _v1 > 0 && (0, _v1.jsx)(_v68, {
          direction: "left",
          setCurrentLogoIndex: () => _v5(_v1 - 1)
        }), _v7 && _v1 < _v0.length - 1 && (0, _v1.jsx)(_v68, {
          direction: "right",
          setCurrentLogoIndex: () => _v5(_v1 + 1)
        })]
      });
    },
    _v70 = ({
      availableLogos: _v0,
      currentLogoIndex: _v1,
      deleteLogo: _v2,
      errorMessage: _v3,
      handleImageUpload: _v4,
      isLoading: _v5,
      setCurrentLogoIndex: _v6,
      onSave: _v7,
      onCancel: _v8
    }) => {
      let {
        trackScrollTeamLogo: _v9,
        trackUploadTeamLogoFromModal: _v10,
        trackRemoveTeamLogo: _v11
      } = (0, _v4.useContext)(_v20.ManageTeamAnalytics);
      return (0, _v1.jsxs)(_v51.VStack, {
        p: (0, _v30.rem)(24),
        overflowX: "hidden",
        alignItems: "unset",
        children: [(0, _v1.jsxs)(_v49.ModalHeader, {
          p: 0,
          m: 0,
          children: [(0, _v1.jsxs)(_v14.Header, {
            size: "md",
            padding: 0,
            pb: (0, _v30.rem)(12),
            display: "flex",
            justifyContent: "space-between",
            children: [_v21.T.EditLogo, (0, _v1.jsx)(_v16.IconButton, {
              "aria-label": "dismiss_icon",
              icon: (0, _v1.jsx)(_v52.CloseX, {}),
              size: "xs",
              variant: "tertiary",
              onClick: _v8
            })]
          }), _v0.length > 0 && (0, _v1.jsx)(_v13.Flex, {
            justifyContent: "end",
            children: (0, _v1.jsx)(_v31.Paragraph, {
              children: _v21.T.LogoIndex(_v1, _v0.length)
            })
          })]
        }), (0, _v1.jsxs)(_v13.Flex, {
          flexDirection: "column",
          position: "relative",
          children: [_v0.length || _v3 ? (0, _v1.jsx)(_v69, {
            availableLogos: _v0,
            currentLogoIndex: _v1,
            deleteLogo: () => {
              _v2(), _v11();
            },
            errorMessage: _v3,
            isLoading: _v5,
            setCurrentLogoIndex: _v0 => {
              _v6(_v0), _v9();
            }
          }) : (0, _v1.jsx)(_v60, {}), (0, _v1.jsx)(_v13.Flex, {
            justifyContent: "center",
            sx: {
              label: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }
            },
            children: (0, _v1.jsx)(_v48.FileInput, {
              accept: _v47.join(","),
              variant: "secondary",
              onClick: () => _v10(),
              onChange: _v0 => _v4(_v0.target?.files),
              label: (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v54, {}), _v21.T.Upload]
              })
            })
          })]
        }), (0, _v1.jsx)(_v50.ModalFooter, {
          p: `${(0, _v30.rem)(24)} 0 0 0`,
          children: (0, _v1.jsxs)(_v13.Flex, {
            justifyContent: "end",
            position: "relative",
            gap: (0, _v30.rem)(8),
            children: [(0, _v1.jsx)(_v34.Button, {
              variant: "secondary",
              onClick: _v8,
              children: _v21.T.InviteForm.Cancel
            }), (0, _v1.jsx)(_v34.Button, {
              variant: "primary",
              isDisabled: _v5 || 0 === _v0.length || "" !== _v3,
              onClick: _v7,
              children: _v21.T.CreateFolderForm.Save
            })]
          })
        })]
      });
    },
    _v71 = () => (0, _v1.jsxs)(_v10.Box, {
      pt: (0, _v30.rem)(20),
      mb: (0, _v30.rem)(20),
      children: [(0, _v1.jsx)(_v33.Skeleton, {
        variant: "text",
        width: "10%",
        height: (0, _v30.rem)(20),
        mb: (0, _v30.rem)(12)
      }), (0, _v1.jsx)(_v33.Skeleton, {
        height: (0, _v30.rem)(160),
        mb: (0, _v30.rem)(8)
      })]
    }),
    _v72 = ({
      apiConfig: _v0,
      setTeamLogoUrl: _v1,
      teamLogoUri: _v2,
      disabled: _v3
    }) => {
      let [_v4, _v5] = (0, _v4.useState)([]),
        [_v6, _v7] = (0, _v4.useState)(0),
        [_v8, _v9] = (0, _v4.useState)(!1),
        [_v10, _v11] = (0, _v4.useState)(""),
        [_v12, _v13] = (0, _v4.useState)(!1),
        _v14 = (0, _v4.useRef)(!1),
        _v15 = (0, _v4.useRef)(null),
        {
          trackLogoEditButton: _v16,
          trackLogoModalCancel: _v17,
          trackUploadTeamLogo: _v18
        } = (0, _v4.useContext)(_v20.ManageTeamAnalytics),
        {
          capabilities: {
            canAddPlayerLogo: _v19,
            hasExtraEmbedOptions: _v20
          },
          loading: _v21
        } = (0, _v35.useCapability)(["canAddPlayerLogo", "hasExtraEmbedOptions"], _v0.ownerId),
        _v22 = !_v21 && !!(_v19 || _v20),
        [_v23] = _v45(),
        _v24 = (0, _v4.useCallback)(async () => {
          try {
            let _v0 = await (0, _v8.fetchLogos)(_v0, _v22);
            _v5(_v0);
          } catch (_v0) {
            _v11(_v8.defaultError);
          }
        }, [_v0, _v22]);
      (0, _v4.useEffect)(() => {
        _v14.current && _v4.length && (_v1(_v4[0].sizes[0].link), _v14.current = !1);
      }, [_v4, _v6]), (0, _v4.useEffect)(() => {
        (async () => {
          _v9(!0);
          try {
            let _v0 = await (0, _v8.fetchLogos)(_v0, _v22);
            if (_v5(_v0), _v2) {
              let _v0 = _v0.findIndex(_v0 => _v0.sizes[0].link.split("_")[0].endsWith(_v2));
              -1 !== _v0 && _v7(_v0);
            }
          } catch (_v0) {
            _v11(_v8.defaultError);
          }
          _v9(!1);
        })();
      }, [_v0.ownerId, _v0.apiUrl, _v22]);
      let _v25 = (0, _v4.useCallback)(async _v0 => {
          if (_v11(""), _v0 && 0 !== _v0.length) {
            if (_v0[0].size > _v8.logoUploadLimit || 0 > _v47.indexOf(_v0[0].type)) return void _v11(_v21.T.UseJPEGorPNG);
            _v9(!0);
            try {
              await (0, _v8.uploadLogo)(_v0, _v0[0]), await _v24(), _v7(0);
            } catch (_v0) {
              _v11(_v8.defaultError);
            }
            _v9(!1);
          }
        }, [_v0, _v24, _v11]),
        _v26 = (0, _v4.useCallback)(async () => {
          _v9(!0);
          let _v0 = _v4[_v6].uri;
          try {
            let _v0 = !1;
            if (_v0.includes("/customlogos/")) {
              let _v0 = _v0.match(/\/customlogos\/(\d+)/);
              if (_v0) {
                let _v0 = parseInt(_v0[1], 10);
                await _v23({
                  where: {
                    logoId: _v0
                  }
                }), _v0 = !0;
              }
            } else _v0.includes("/team_logos/") && (_v0 = await (0, _v8.fetchDeleteLogo)(_v0, _v0));
            _v0 && (await _v24());
          } catch (_v0) {
            _v11(_v8.defaultError);
          }
          0 !== _v6 && _v7(_v6 - 1), _v9(!1);
        }, [_v4, _v6, _v0, _v23, _v24]),
        _v27 = () => {
          _v4.filter(_v0 => (0, _v8.teamLogoUrlToUri)(_v0.sizes[0].link) === (0, _v8.teamLogoUrlToUri)(_v2)).length || "" === _v2 || _v1(""), _v13(!1);
        },
        _v28 = async _v0 => {
          _v3 || (_v14.current = !0, await _v25(_v0));
        };
      return (0, _v1.jsxs)(_v10.Box, {
        pt: (0, _v30.rem)(20),
        mb: (0, _v30.rem)(20),
        "data-id": "logoSectionWrapper",
        children: [(0, _v1.jsxs)(_v13.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          mb: (0, _v30.rem)(4),
          children: [(0, _v1.jsx)(_v14.Header, {
            "data-id": "styledHeader",
            size: "md",
            color: _v3 ? "stroke" : void 0,
            children: _v21.T.Logo
          }), _v4.length > 0 && (0, _v1.jsx)(_v34.Button, {
            variant: "secondary",
            onClick: () => {
              _v13(!0), _v16();
            },
            children: _v21.T.Edit
          })]
        }), (0, _v1.jsx)(_v13.Flex, {
          pos: "relative",
          flexDirection: "column",
          children: (0, _v1.jsx)(_v29.Dropzone, {
            accept: _v47.join(","),
            padding: (0, _v30.rem)(30),
            onChange: _v0 => {
              _v28(_v0.target.files ?? _v0.dataTransfer?.files ?? null);
            },
            ref: _v15,
            children: _v8 ? (0, _v1.jsx)(_v32.Spinner, {
              py: (0, _v30.rem)(35)
            }) : _v2 ? (0, _v1.jsx)(_v10.Box, {
              width: "100%",
              height: (0, _v30.rem)(100),
              background: `url(${_v2}) center center / contain no-repeat content-box content-box;`
            }) : (0, _v1.jsxs)(_v10.Box, {
              p: (0, _v30.rem)(10),
              children: [(0, _v1.jsx)(_v14.Header, {
                size: "xs",
                style: {
                  display: "flex",
                  alignItems: "center"
                },
                children: (0, _v46.translate)({
                  singular: "Drag and drop or {UPLOAD}select an image{/UPLOAD}",
                  replacements: {
                    UPLOAD: _v0 => (0, _v1.jsx)(_v10.Box, {
                      ml: (0, _v30.rem)(6),
                      cursor: "pointer",
                      color: "focus",
                      onClick: () => _v15.current && _v15.current.click(),
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "{UPLOAD}Selecciona una imagen{/UPLOAD}, o bien arrástrala y suéltala"
                    },
                    "de-DE": {
                      singular: "Datei per Drag-and-Drop hier ablegen oder {UPLOAD}Bild auswählen{/UPLOAD}"
                    },
                    "fr-FR": {
                      singular: "Glissez-déposez ou {UPLOAD}sélectionnez une image{/UPLOAD}"
                    },
                    "ja-JP": {
                      singular: "画像をドラッグアンドドロップ、または{UPLOAD}画像を選択 {/UPLOAD}"
                    },
                    "ko-KR": {
                      singular: "이미지를 끌어서 놓거나 {UPLOAD}선택하세요{/UPLOAD}"
                    },
                    "pt-BR": {
                      singular: "Arraste e solte ou {UPLOAD}selecione uma imagem{/UPLOAD}"
                    },
                    "zh-CN": {
                      singular: "拖放或{UPLOAD}选择一张图片{/UPLOAD}"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v31.Paragraph, {
                size: "md",
                color: "text-tertiary",
                children: (0, _v46.translate)({
                  singular: "Please use a JPEG or PNG file (limit 5MB).",
                  dictionary: {
                    es: {
                      singular: "Utiliza un archivo JPEG o PNG (límite de 5 MB)."
                    },
                    "de-DE": {
                      singular: "Bitte eine JPEG- oder PNG-Datei verwenden (Begrenzung: 5 MB)."
                    },
                    "fr-FR": {
                      singular: "Veuillez utiliser un fichier JPEG ou PNG (5 Mo max)."
                    },
                    "ja-JP": {
                      singular: "JPEG または PNG ファイルを使用してください（上限5MB）。"
                    },
                    "ko-KR": {
                      singular: "JPEG 또는 PNG 파일을 사용해주세요. (5MB 이하)"
                    },
                    "pt-BR": {
                      singular: "Por favor, use um arquivo JPEG ou PNG (limite de 5MB)."
                    },
                    "zh-CN": {
                      singular: "请使用 JPEG 或 PNG 文件（不超过 5MB）。"
                    }
                  }
                })
              })]
            })
          }, _v2 ?? "placeholder-logodropzone")
        }), (0, _v1.jsxs)(_v26.Modal, {
          "data-id": "editLogoModal",
          isOpen: _v12,
          onClose: _v27,
          children: [(0, _v1.jsx)(_v28.ModalOverlay, {}), (0, _v1.jsx)(_v27.ModalContent, {
            children: (0, _v1.jsx)(_v70, {
              availableLogos: _v4,
              currentLogoIndex: _v6,
              deleteLogo: _v26,
              errorMessage: _v10,
              handleImageUpload: _v25,
              isLoading: _v8,
              setCurrentLogoIndex: _v7,
              onSave: () => {
                _v4.length ? _v1(_v4[_v6].sizes[0].link) : _v1(""), _v13(!1);
              },
              onCancel: () => {
                _v27(), _v17();
              }
            })
          })]
        })]
      });
    },
    _v73 = _v5.css`
  input {
    padding: 0;
    height: ${(0, _v3.rem)(40)};
    font-size: ${(0, _v3.rem)(20)};
    font-weight: bold;
  }
`,
    _v74 = _v5.default.div.withConfig({
      displayName: "TeamNameInput__Wrapper",
      componentId: "sc-b92263e9-0"
    })`
  margin-top: ${(0, _v3.rem)(20)};
  margin-bottom: 0;
  position: relative;

  span {
    margin-bottom: ${(0, _v3.rem)(8)};
  }

  p {
    visibility: hidden;
    margin-bottom: 0;
  }

  &:focus-within p {
    visibility: visible;
  }
  @media (min-width: 600px) {
    margin-top: ${(0, _v3.rem)(40)};
    margin-bottom: ${(0, _v3.rem)(16)};
  }

  ${_v73}
`,
    _v75 = (0, _v5.default)(_v19.LoadingBlock).withConfig({
      displayName: "TeamNameInput__TeamNameLoader",
      componentId: "sc-b92263e9-1"
    })`
  width: 20%;
  height: ${(0, _v3.rem)(32)};
  margin-bottom: ${(0, _v3.rem)(8)};
`,
    _v76 = (0, _v5.default)(_v19.LoadingBlock).withConfig({
      displayName: "TeamNameInput__LineLoader",
      componentId: "sc-b92263e9-2"
    })`
  width: 100%;
  height: ${(0, _v3.rem)(8)};
  margin-bottom: ${(0, _v3.rem)(28)};
`,
    _v77 = () => (0, _v1.jsxs)(_v74, {
      children: [(0, _v1.jsx)(_v75, {}), (0, _v1.jsx)(_v76, {})]
    });
  var _v78 = _v0.i(0);
  let _v79 = ["i", "I", "b", "B", "y", " "];
  var _v80 = _v0.i(0);
  let _v81 = _v5.default.div.withConfig({
      displayName: "styles__ErrorContainer",
      componentId: "sc-4d30c0b7-0"
    })`
  display: flex;
  flex-direction: column;
  gap: ${(0, _v3.rem)(5)};
  position: absolute;
  left: 0;
  width: 100%;
  bottom: ${(0, _v3.rem)(-22)};
  margin-top: ${(0, _v3.rem)(12)};
`,
    _v82 = _v5.default.div.withConfig({
      displayName: "styles__Editor",
      componentId: "sc-4d30c0b7-1"
    })`
  flex: 1;
  cursor: text;
  word-break: break-word;

  font-size: ${(0, _v3.rem)(36)};
  font-weight: 700;
  /**
   * Line height doesn't support rem values so went with pixels
   * 
   * https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#syntax
   */
  line-height: ${42}px;
  letter-spacing: ${(0, _v3.rem)(-.8)};
  hyphens: auto;

  &:empty::before {
    content: attr(placeholder);
  }

  &:focus {
    outline: none;
  }

  /**
   * On Firefox, when a user deletes all the text in a contentEditable element a <br /> tag
   * is inserted as a child element. This is a known issue but I was able to find this hack online.
   *
   * https://tosbourn.com/squash-br-inside-contenteditable/
   *
   * Bug Ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=1513303
   */
  & > br {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }
`,
    _v83 = _v5.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
    _v84 = _v5.default.div.withConfig({
      displayName: "styles__InputButtonsContainer",
      componentId: "sc-4d30c0b7-2"
    })`
  display: flex;
  justify-content: center;
  height: 100%;
  width: ${(0, _v3.rem)(80)};
  padding-right: ${(0, _v3.rem)(12)};
  padding-top: ${(0, _v3.rem)(2)};
  animation: ${_v83} 0.6s ease;
`,
    _v85 = ({
      disabled: _v0,
      hasError: _v1,
      onCancel: _v2,
      onSubmit: _v3,
      setIsHoveringButton: _v4
    }) => (0, _v1.jsxs)(_v84, {
      id: "team-buttons",
      children: [(0, _v1.jsx)(_v16.IconButton, {
        "aria-label": "cancel-name",
        icon: (0, _v1.jsx)(_v52.CloseX, {}),
        variant: "secondary",
        size: "sm",
        id: "team-name-cancel-button",
        isDisabled: _v0,
        onClick: _v0 => {
          _v0.target.focus(), _v2();
        },
        onMouseEnter: () => _v4(!0),
        onMouseLeave: () => _v4(!1),
        mr: (0, _v30.rem)(10)
      }), (0, _v1.jsx)(_v16.IconButton, {
        "aria-label": "save-name",
        icon: (0, _v1.jsx)(_v80.Checkmark, {}),
        variant: "secondary",
        size: "sm",
        id: "team=name-save-button",
        isDisabled: _v0 || _v1,
        onClick: _v0 => {
          _v0.target.focus(), _v3();
        },
        onMouseEnter: () => _v4(!0),
        onMouseLeave: () => _v4(!1)
      })]
    }),
    _v86 = ["input-buttons-cancel", "input-buttons-save"],
    _v87 = ({
      allowNewLines: _v0 = !1,
      className: _v1 = "",
      content: _v2 = "",
      focus: _v3 = !1,
      onCancel: _v4,
      onChange: _v5,
      onSave: _v6,
      onFocusChange: _v7,
      placeholder: _v8,
      resetOnEmpty: _v9 = !1,
      shouldDisplayLinks: _v10 = !0,
      validate: _v11,
      ..._v12
    }) => {
      let _v13 = (0, _v4.useRef)(null),
        [_v14, _v15] = (0, _v4.useState)(_v3),
        [_v16, _v17] = (0, _v4.useState)(0),
        [_v18, _v19] = (0, _v4.useState)(_v2),
        [_v20, _v21] = (0, _v4.useState)(_v2),
        [_v22, _v23] = (0, _v4.useState)(!1),
        [_v24, _v25] = (0, _v4.useState)([]),
        _v26 = () => _v17(_v0 => ++_v0),
        _v27 = () => {
          _v15(!1), _v19(_v20), _v26();
        };
      (0, _v4.useEffect)(() => {
        Array.isArray(_v11) && _v18?.length > 0 && _v25(_v11.map(_v0 => _v0(_v18)).filter(Boolean));
      }, [_v11, _v18]);
      let _v28 = () => {
          if (_v24.length > 0) return;
          let _v0 = _v18 !== _v20;
          if (_v15(!1), !_v0) return;
          if (0 === _v18.length && _v9) return void _v27();
          let _v1 = _v18.trim();
          _v21(_v1), _v19(_v1), _v6(_v1), _v26(), _v7?.(!1);
        },
        [_v29, _v30] = (0, _v4.useState)(!1);
      return (0, _v1.jsxs)(_v13.Flex, {
        border: `${(0, _v30.rem)(2)} solid transparent`,
        borderRadius: (0, _v30.rem)(5),
        position: "relative",
        overflow: _v24.length > 0 ? "initial" : "hidden",
        justifyContent: "space-between",
        alignItems: "center",
        height: (0, _v30.rem)(40),
        borderColor: _v24.length > 0 ? "status-destructive-primary" : _v14 ? "focus" : "none",
        onBlur: _v0 => {
          _v0?.relatedTarget?.id && _v86.includes(_v0.relatedTarget.id) || _v29 ? _v30(!1) : (_v28(), _v7?.(!1));
        },
        onFocus: () => {
          _v22 || (_v15(!0), _v7?.(!0));
        },
        sx: {
          div: {
            _empty: {
              _before: {
                color: "stroke"
              }
            }
          }
        },
        children: [(0, _v1.jsx)(_v82, {
          ref: _v13,
          "aria-readonly": "false",
          role: "textbox",
          onInput: _v0 => {
            _v5?.(_v0?.currentTarget?.innerText || ""), _v19(_v0?.currentTarget?.innerText || "");
          },
          onKeyDown: _v0 => {
            "Enter" === _v0.key && _v0.preventDefault(), (_v0.ctrlKey || _v0.metaKey) && _v79.includes(_v0.key) && _v0.preventDefault();
          },
          onKeyPress: _v0 => {
            _v18?.length > 32 && _v0.preventDefault();
          },
          onPaste: _v0 => {
            _v0.preventDefault();
            let _v1 = _v0.clipboardData.getData("Text");
            if (_v18?.length + _v1.length > 32) return _v0.preventDefault(), !1;
            let _v2 = _v0 ? _v1 : _v1.replace(/[\r\n\v]+/g, " ");
            document.execCommand("insertHTML", !1, _v2);
          },
          className: _v1,
          placeholder: _v8,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          ..._v12,
          children: _v14 ? _v20 : _v10 ? (0, _v1.jsx)(_v78.default, {
            text: _v18,
            linkWordBreakStyle: "normal",
            onClick: _v0 => _v0.stopPropagation(),
            onMouseEnter: () => _v23(!0),
            onMouseLeave: () => _v23(!1)
          }) : _v18
        }, `${_v1}-${_v16}`), _v14 && (0, _v1.jsx)(_v85, {
          onCancel: () => {
            _v4?.(), _v27();
          },
          onSubmit: _v28,
          setIsHoveringButton: _v30,
          hasError: _v24.length > 0,
          disabled: _v18 === _v20
        }), (0, _v1.jsx)(_v81, {
          children: _v24.length > 0 && _v24.map((_v0, _v1) => (0, _v1.jsx)(_v31.Paragraph, {
            size: "md",
            color: "status-destructive-primary",
            children: _v0
          }, `${_v0}-${_v1}`))
        })]
      });
    },
    _v88 = ({
      className: _v0,
      content: _v1 = "",
      shouldDisplayLinks: _v2 = !0,
      ..._v3
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v14.Header, {
        className: _v0,
        size: "lg",
        children: _v2 ? (0, _v1.jsx)(_v78.default, {
          text: _v1
        }) : _v1
      })
    });
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = _v5.default.div.withConfig({
      displayName: "TeamShowcase__ShowcasesWrapper",
      componentId: "sc-39981b12-0"
    })`
  margin-top: ${(0, _v3.rem)(52)};
  max-width: ${(0, _v3.rem)(302)};
`,
    _v92 = (0, _v5.default)(_v19.LoadingBlock).withConfig({
      displayName: "TeamShowcase__LabelLoader",
      componentId: "sc-39981b12-1"
    })`
  height: ${(0, _v3.rem)(20)};
  width: 80%;
`,
    _v93 = _v5.default.div.withConfig({
      displayName: "TeamShowcase__LabelWrapper",
      componentId: "sc-39981b12-2"
    })`
  margin-bottom: 0;
  letter-spacing: ${(0, _v3.rem)(.2)};
  @media (min-width: 600px) {
    margin-bottom: ${(0, _v3.rem)(10)};
  }
`,
    _v94 = (0, _v5.default)(_v19.LoadingBlock).withConfig({
      displayName: "TeamShowcase__SelectLoader",
      componentId: "sc-39981b12-3"
    })`
  width: 100%;
  height: ${(0, _v3.rem)(40)};
  margin-bottom: ${(0, _v3.rem)(8)};
`,
    _v95 = () => (0, _v1.jsxs)(_v91, {
      children: [(0, _v1.jsx)(_v93, {
        children: (0, _v1.jsx)(_v92, {})
      }), (0, _v1.jsx)(_v94, {})]
    }),
    _v96 = ({
      teamShowcaseId: _v0,
      albums: _v1,
      fetchMoreAblums: _v2,
      setTeamShowcaseId: _v3
    }) => {
      let {
          trackOpenTeamShowcaseDropdown: _v4,
          trackSelectTeamShowcase: _v5
        } = (0, _v4.useContext)(_v20.ManageTeamAnalytics),
        _v6 = (0, _v4.useCallback)(_v0 => {
          let _v1 = _v0 && "0" !== _v0 ? parseInt(_v0) : null;
          _v3(_v1), _v5({
            showcase_id: String(_v1)
          });
        }, [_v0]);
      (0, _v4.useEffect)(() => {
        0 === _v1.currentPage && _v2();
      }, []);
      let _v7 = [{
        label: _v21.T.None,
        value: "0",
        disabled: !1
      }].concat(_v1.items.map(_v0 => {
        let _v1 = (0, _v90.getIdFromLink)(_v0.link),
          _v2 = "embed_only" === _v0.privacy.view;
        return {
          label: _v2 ? _v0.name + " (embed only)" : _v0.name,
          value: String(_v1),
          disabled: _v2
        };
      }));
      return (0, _v1.jsxs)(_v91, {
        "data-id": "teamShowcaseSelect",
        children: [(0, _v1.jsx)(_v93, {
          children: (0, _v1.jsx)(_v14.Header, {
            as: "h6",
            size: "xs",
            marginBottom: "10",
            color: "text-primary",
            children: _v21.T.TeamShowcase
          })
        }), (0, _v1.jsx)(_v89.Select, {
          items: _v7,
          disabled: !_v1.items.length,
          value: [_v0 ? String(_v0) : "0"],
          onValueChange: _v0 => {
            _v6(_v0.value[0]);
          },
          onOpenChange: _v0 => {
            _v0.open && _v4({
              showcase_id: String(_v0)
            });
          },
          withPortal: !0
        }, "team_showcase_select")]
      });
    },
    _v97 = "updateField",
    _v98 = "bulkUpdateField",
    _v99 = _v5.default.div.withConfig({
      displayName: "TeamBrandingPage__Wrapper",
      componentId: "sc-ec3d795b-0"
    })`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  h6 {
    font-size: ${(0, _v3.rem)(18)};
  }
`,
    _v100 = [_v0 => _v0.length > 32 ? `${_v0.length}/32` : null],
    _v101 = (_v0, _v1) => {
      switch (_v1.type) {
        case _v97:
          return {
            ..._v0,
            isInitialLoad: !1,
            [_v1.payload.fieldName]: _v1.payload.fieldValue
          };
        case _v98:
          return {
            ..._v0,
            ..._v1.payload
          };
        default:
          return _v0;
      }
    },
    _v102 = (0, _v5.default)(({
      contentEditable: _v0 = !0,
      ..._v1
    }) => _v0 ? (0, _v1.jsx)(_v87, {
      ..._v1
    }) : (0, _v1.jsx)(_v88, {
      ..._v1
    })).attrs({
      variant: "paragraph"
    }).withConfig({
      displayName: "TeamBrandingPage__Title",
      componentId: "sc-ec3d795b-1"
    })`
  font-size: ${(0, _v3.rem)(24)};
  font-weight: 530;
  letter-spacing: ${(0, _v3.rem)(-.8)};
  hyphens: auto;
  color: ${({
      theme: _v0
    }) => _v0.content.color};
`;
  _v0.s(["TeamBrandingPage", 0, ({
    apiConfig: _v0
  }) => {
    let {
        albums: _v1,
        teamInfo: _v2,
        teamCapabilities: {
          hasEnterprise: _v3,
          hasPerSeatPricingModelTeamMember: _v4
        }
      } = (0, _v4.useContext)(_v20.ManageTeamStateCtx),
      _v5 = (0, _v7.useToken)("colors", "blue.500"),
      _v6 = (0, _v4.useRef)(_v2),
      _v7 = {
        ...{
          teamName: _v2.teamData.teamName,
          accentColor: _v5,
          logoUrl: "",
          teamShowcaseId: null,
          isInitialLoad: !0
        }
      },
      [_v8, _v9] = (0, _v4.useReducer)(_v101, _v7),
      {
        teamName: _v10,
        teamShowcaseId: _v11,
        accentColor: _v12,
        logoUrl: _v13,
        isInitialLoad: _v14
      } = _v8,
      {
        updateTeamBrandings: _v15,
        fetchTeamShowcase: _v16,
        updateInvitesRemaining: _v17
      } = (0, _v4.useContext)(_v20.ManageTeamDispatchCtx),
      {
        trackTeamBrandingUpdated: _v18
      } = (0, _v4.useContext)(_v20.ManageTeamAnalytics);
    (0, _v4.useEffect)(() => {
      _v4 && _v17(0);
    }, [_v4]);
    let _v19 = (_v0, _v1) => _v9({
      type: _v97,
      payload: {
        fieldName: _v0,
        fieldValue: _v1
      }
    });
    (0, _v4.useEffect)(() => {
      _v14 || _v20({
        teamName: _v10,
        logoUrl: _v13,
        accentColor: _v12,
        teamShowcaseId: _v11
      });
    }, [_v10, _v13, _v12, _v11]), (0, _v4.useEffect)(() => {
      let {
        teamData: _v0
      } = _v2;
      _v6.current = _v2;
      let [_v1, _v2, _v3, _v4] = [(_v0 => {
        let {
          teamData: {
            logoUri: _v1,
            pictures: _v2
          }
        } = _v0;
        return _v1 && _v2 && _v2.sizes && _v2.sizes.length > 0 ? _v2.sizes[_v2.sizes.length - 1]?.link : "";
      })(_v2), _v0.teamName ?? "", _v0.accentColor && "" !== _v0.accentColor ? _v0.accentColor : _v5, _v0.teamShowcaseId ?? null];
      _v9({
        type: _v98,
        payload: {
          logoUrl: _v1,
          teamName: _v2,
          accentColor: _v3,
          teamShowcaseId: _v4,
          isInitialLoad: !0
        }
      });
    }, [_v2.teamData.id]);
    let _v20 = (0, _v4.useCallback)(_v0 => {
        _v21({
          team_name: _v0.teamName ?? _v10,
          accent_color: _v0.accentColor ?? _v12,
          logo_uri: (0, _v8.teamLogoUrlToUri)(_v0.logoUrl ?? _v13),
          team_showcase_id: _v0.teamShowcaseId ?? _v11
        }), _v22();
      }, [_v10, _v13, _v12, _v11]),
      _v21 = (0, _v4.useCallback)((0, _v2.default)(_v0 => {
        _v15(_v0);
      }, 0), [_v0.jwt, _v2.teamData.id]),
      _v22 = (0, _v4.useCallback)((0, _v2.default)(() => {
        _v18({
          logo_changed: _v2.teamData.logoUri !== (0, _v8.teamLogoUrlToUri)(_v13),
          name_changed: _v2.teamData.teamName !== _v10,
          accent_color_changed: _v2.teamData.accentColor !== _v12,
          team_showcase_changed: _v2.teamData.teamShowcaseId !== _v11
        });
      }, 0), [_v2, _v10, _v13, _v12, _v11]);
    return (0, _v1.jsxs)(_v99, {
      children: [(0, _v1.jsx)(_v9.SettingsPageContentHeader, {
        title: _v21.T.Basics
      }), (0, _v1.jsx)(_v102, {
        "data-id": "teamTitle",
        content: _v10,
        placeholder: _v21.T.EnterTeamName,
        allowNewLines: !1,
        onSave: _v0 => {
          _v19("teamName", _v0);
        },
        validate: _v100
      }), (0, _v1.jsx)(_v6.Divider, {
        mt: (0, _v3.rem)(2)
      }), (0, _v1.jsx)(_v72, {
        apiConfig: _v0,
        teamLogoUri: _v13,
        setTeamLogoUrl: _v0 => _v19("logoUrl", _v0),
        disabled: !1
      }), (0, _v1.jsx)(_v25, {
        accentColor: _v12 ?? _v5,
        resetColor: _v6.current.teamData.accentColor ?? "",
        setAccentColor: _v0 => _v19("accentColor", _v0),
        sourceImageUrl: _v13,
        disabled: !1
      }), _v3 && (0, _v1.jsx)(_v96, {
        albums: _v1,
        teamShowcaseId: _v11,
        setTeamShowcaseId: _v0 => _v19("teamShowcaseId", _v0),
        fetchMoreAblums: _v16
      })]
    });
  }, "TeamBrandingPageLoader", 0, () => (0, _v1.jsxs)(_v99, {
    children: [(0, _v1.jsx)(_v77, {}), (0, _v1.jsx)(_v71, {}), (0, _v1.jsx)(_v24, {}), (0, _v1.jsx)(_v95, {})]
  })], 0);
}