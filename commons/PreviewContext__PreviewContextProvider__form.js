{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (0, _v2.createContext)({
      previewType: _v7.PREVIEW_TYPE.FORM,
      previewMode: _v7.PREVIEW_MODE.WEB,
      previewDetails: {},
      autoFocusField: !0,
      isMiniaturePreview: !1,
      setPreviewType: () => void 0,
      setPreviewMode: () => void 0,
      setPreviewDetails: () => void 0,
      setIsMiniaturePreview: () => void 0
    }),
    _v10 = () => (0, _v2.useContext)(_v9);
  _v0.s(["PreviewContext", 0, _v9, "PreviewContextProvider", 0, ({
    children: _v0,
    ..._v1
  }) => {
    let {
        trackLiveStreamRegistrationPreviewChanged: _v2
      } = (0, _v6.useLiveStreamBroadcasterTracking)(),
      [_v3, _v4] = (0, _v2.useState)(_v7.PREVIEW_TYPE.FORM),
      [_v5, _v6] = (0, _v2.useState)(_v7.PREVIEW_MODE.WEB),
      [_v7, _v8] = (0, _v2.useState)({}),
      [_v9, _v10] = (0, _v2.useState)(_v1.isMiniaturePreview || !1),
      _v11 = _v1.previewType,
      _v12 = _v1.onPreviewTypeChanged,
      _v13 = _v1.pageType !== _v7.PAGE_TYPES.ADMIN && (_v1.autoFocusField ?? !0),
      _v14 = (0, _v2.useCallback)(_v0 => {
        if (_v4(_v0), _v12?.(_v0), _v8.useGlobalStore.getState().entityType === _v5.ENTITY_TYPE.EVENT) {
          let _v0 = {
            [_v7.PREVIEW_TYPE.FORM]: "form",
            [_v7.PREVIEW_TYPE.FORM_FULL]: "form",
            [_v7.PREVIEW_TYPE.CONFIRMATION]: "confirmation",
            [_v7.PREVIEW_TYPE.LOGIN_SCREEN]: "sign_in_screen"
          }[_v0];
          _v0 && _v2({
            liveStreamPreviewType: _v0
          });
        }
      }, [_v4, _v12, _v2]);
    return (0, _v2.useEffect)(() => {
      _v11 && _v4(_v11);
    }, [_v11, _v4]), (0, _v1.jsx)(_v9.Provider, {
      value: {
        previewType: _v3,
        previewMode: _v5,
        previewDetails: _v7,
        isMiniaturePreview: _v9,
        autoFocusField: _v13,
        setPreviewMode: _v6,
        setPreviewType: _v14,
        setPreviewDetails: _v8,
        setIsMiniaturePreview: _v10
      },
      children: _v0
    });
  }, "usePreviewContext", 0, _v10], 0);
  let _v11 = (0, _v2.createContext)({
      currentPageType: _v7.PAGE_TYPES.REGISTRATION,
      setCurrentPageType: () => void 0
    }),
    _v12 = () => (0, _v2.useContext)(_v11);
  _v0.s(["CurrentPageContext", 0, _v11, "CurrentPageContextProvider", 0, ({
    children: _v0,
    pageType: _v1
  }) => (0, _v1.jsx)(_v11.Provider, {
    value: {
      currentPageType: _v1,
      setCurrentPageType: () => void 0
    },
    children: _v0
  }), "useCurrentPageContext", 0, _v12], 0);
  var _v13 = _v0.i(0),
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
  let _v24 = Object.values(_v23.Locales);
  var _v25 = _v0.i(0);
  let _v26 = () => {
    let {
        currentPageType: _v0
      } = _v12(),
      {
        isMiniaturePreview: _v1
      } = _v10(),
      _v2 = (0, _v8.useGlobalStore)(_v0 => _v0.selectedLanguage),
      _v3 = (0, _v8.useGlobalStore)(_v0 => _v0.viewerLanguage),
      _v4 = function (_v0) {
        if (!_v0) return _v23.Locales.en;
        let _v1 = _v24.find(_v0 => _v0.valueOf() === _v0);
        if (_v1) return _v1;
        let _v2 = _v0.split("-")[0]?.toLowerCase();
        return _v2 ? _v24.find(_v0 => _v0.split("-")[0]?.toLowerCase() === _v2) ?? _v23.Locales.en : _v23.Locales.en;
      }((0, _v25.useLocale)());
    return _v0 !== _v7.PAGE_TYPES.REGISTRATION || _v1 ? _v2 : _v3 ?? _v4;
  };
  _v0.s(["useFormLocale", 0, _v26], 0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = () => {
      let _v0 = (0, _v8.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        _v1 = (0, _v8.useGlobalStore)(_v0 => _v0.setViewerLanguage),
        _v2 = _v26(),
        _v3 = (0, _v27.getTranslatedLocales)(_v0);
      if (0 === _v3.length) return null;
      let _v4 = (0, _v27.resolveSelectedLocale)(_v2, _v3);
      return (0, _v1.jsxs)(_v16.Menu, {
        placement: "bottom-end",
        children: [(0, _v1.jsx)(_v17.MenuButton, {
          as: _v15.Button,
          "aria-label": _v28.default.ChangeLanguage,
          leftIcon: (0, _v1.jsx)(_v22.GlobeAlt, {
            boxSize: (0, _v4.rem)(18)
          }),
          rightIcon: (0, _v1.jsx)(_v21.ChevronDownSmall, {
            boxSize: (0, _v4.rem)(18)
          }),
          size: "sm",
          variant: "tertiary",
          color: "white",
          background: "rgba(0,0,0,0.2)",
          _hover: {
            background: "rgba(0,0,0,0.35)"
          },
          _active: {
            background: "rgba(0,0,0,0.35)"
          },
          children: (0, _v27.getLanguageNativeName)(_v4)
        }), (0, _v1.jsx)(_v19.MenuList, {
          children: (0, _v1.jsx)(_v20.MenuOptionGroup, {
            value: _v4,
            type: "radio",
            onChange: _v0 => _v1(String(_v0)),
            children: [_v27.DEFAULT_LANGUAGE, ..._v3].map(_v0 => (0, _v1.jsx)(_v18.MenuItemOption, {
              value: _v0,
              children: (0, _v27.getLanguageNativeName)(_v0)
            }, _v0))
          })
        })]
      });
    },
    _v30 = (0, _v0.i(0).createImmerStore)((_v0, _v1) => ({
      rtfType: "text",
      buttonRole: _v7.BUTTON_ROLES.PRIMARY,
      buttonTextType: _v7.BUTTON_TEXT_TYPE.LOGIN,
      selected: {},
      buttonLivePreview: {
        showPreview: !1
      },
      nonEditTextLivePreview: {
        showPreview: !1
      },
      fieldLivePreview: {
        showPreview: !1
      },
      setButtonRole: _v0 => _v0({
        buttonRole: _v0
      }),
      setButtonTextType: _v0 => _v0({
        buttonTextType: _v0
      }),
      setCallback: _v0 => _v0({
        ..._v0
      }),
      setRtfType: _v0 => _v0({
        rtfType: _v0
      }),
      setSelected: _v0 => _v0({
        selected: {
          ..._v1().selected,
          ..._v0
        }
      }),
      setButtonLivePreview: ({
        buttonColor: _v0,
        textColor: _v1,
        selectedButton: _v2,
        text: _v3
      }) => _v0({
        buttonLivePreview: {
          showPreview: !0,
          buttonColor: _v0,
          textColor: _v1,
          selectedButton: _v2,
          text: _v3
        }
      }),
      clearButtonLivePreview: () => _v0({
        buttonLivePreview: {
          showPreview: !1
        }
      }),
      setNonEditTextLivePreview: ({
        color: _v0,
        selectedField: _v1
      }) => _v0({
        nonEditTextLivePreview: {
          showPreview: !0,
          color: _v0,
          selectedField: _v1
        }
      }),
      setSelectedFieldLivePreview: ({
        color: _v0,
        index: _v1
      }) => _v0({
        fieldLivePreview: {
          showPreview: !0,
          color: _v0,
          index: _v1
        }
      }),
      clearNonEditTextLivePreview: () => _v0({
        nonEditTextLivePreview: {
          showPreview: !1
        }
      }),
      clearSelectedFieldLivePreview: () => _v0({
        fieldLivePreview: {
          showPreview: !1
        }
      })
    }), "rtfStore");
  _v0.s(["useRtfStore", 0, _v30], 0);
  let _v31 = ({
    children: _v0,
    fieldName: _v1
  }) => {
    let _v2 = (0, _v8.useGlobalStore)(_v0 => _v0.leadCapture.nonEditableTextStyle),
      {
        currentPageType: _v3
      } = (0, _v2.useContext)(_v11),
      _v4 = (0, _v8.useGlobalStore)(_v0 => _v0.setSideMenuType),
      [_v5, _v6] = (0, _v2.useState)(_v7.COLORS.WHITE),
      _v7 = (0, _v8.useGlobalStore)(_v0 => _v0.setSelectedNonEditableField),
      _v8 = _v30(_v0 => _v0.nonEditTextLivePreview);
    return _v2?.[_v1]?.color, (0, _v2.useEffect)(() => {
      _v8.showPreview && _v8.selectedField === _v1 ? _v6(_v8.color) : _v6(_v2?.[_v1]?.color);
    }, [_v1, _v8, _v2]), (0, _v1.jsx)(_v3.Box, {
      border: `${(0, _v4.rem)(2)} solid`,
      borderColor: "transparent",
      borderRadius: "sm",
      color: _v5,
      _hover: {
        borderColor: _v3 === _v7.PAGE_TYPES.ADMIN ? _v7.COLORS.VIMEO_BLUE : "transparent"
      },
      onClick: () => {
        _v3 === _v7.PAGE_TYPES.ADMIN && (_v7(_v1), _v4(_v7.SIDE_MENU_CONTENT.NON_EDIT_TEXT_STYLING));
      },
      children: _v0
    });
  };
  _v0.s(["StylableNonEditText", 0, _v31], 0);
  let _v32 = () => {
    let _v0 = (0, _v8.useGlobalStore)(_v0 => _v0.leadCapture.isSkippable),
      _v1 = (0, _v8.useGlobalStore)(_v0 => _v0.leadCapture.layout),
      _v2 = (0, _v8.useGlobalStore)(_v0 => _v0.entityType),
      {
        currentPageType: _v3
      } = (0, _v2.useContext)(_v11),
      {
        previewType: _v4,
        setPreviewType: _v5,
        isMiniaturePreview: _v6
      } = (0, _v2.useContext)(_v9),
      _v7 = _v1 === _v7.FORM_LAYOUT_OPTIONS.SINGLE_STEP_FORM && _v4 === _v7.PREVIEW_TYPE.FORM,
      _v8 = _v3 === _v7.PAGE_TYPES.REGISTRATION && !_v6,
      _v9 = _v4 !== _v7.PREVIEW_TYPE.CONFIRMATION && _v0 && _v2 === _v5.ENTITY_TYPE.VIDEO,
      _v10 = () => {
        _v3 === _v7.PAGE_TYPES.REGISTRATION && _v5(_v7.PREVIEW_TYPE.LOGIN_SCREEN);
      };
    return (0, _v1.jsxs)(_v13.Flex, {
      position: "absolute",
      top: (0, _v4.rem)(16),
      right: (0, _v4.rem)(16),
      "font-weight": 700,
      "font-size": (0, _v4.rem)(14),
      alignItems: "center",
      gap: (0, _v4.rem)(4),
      children: [_v7 && (0, _v1.jsx)(_v31, {
        fieldName: _v7.NON_EDIT_FIELDS.LOG_IN,
        children: (0, _v1.jsx)(_v3.Box, {
          borderRadius: (0, _v4.rem)(40),
          py: "xs",
          px: (0, _v4.rem)(17),
          cursor: "pointer",
          tabIndex: 0,
          onClick: _v10,
          onKeyDown: _v0 => _v0.key === _v7.KEY_CODES.ENTER && _v10(),
          children: _v28.default.SignIn
        })
      }), _v9 && (0, _v1.jsx)(_v31, {
        fieldName: _v7.NON_EDIT_FIELDS.SKIP_TO_VIDEO,
        children: (0, _v1.jsxs)(_v13.Flex, {
          background: "rgba(0,0,0,0.2)",
          borderRadius: "xs",
          py: "xs",
          ps: (0, _v4.rem)(10),
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "body-md",
          height: (0, _v4.rem)(32),
          children: [(0, _v1.jsx)(_v3.Box, {
            mr: (0, _v4.rem)(3),
            mt: (0, _v4.rem)(1),
            children: _v28.default.SkipToVideo
          }), (0, _v1.jsx)(_v14.ArrowRightFilled, {
            width: (0, _v4.rem)(18)
          })]
        })
      }), _v8 && (0, _v1.jsx)(_v29, {})]
    });
  };
  _v0.s(["BackgroundWrapper", 0, ({
    children: _v0 = {},
    disableBackground: _v1 = !1
  }) => {
    let _v2,
      _v3,
      _v4 = (0, _v8.useGlobalStore)(_v0 => _v0.leadCapture.background),
      _v5 = (0, _v8.useGlobalStore)(_v0 => _v0.entityType),
      _v6 = (0, _v8.useGlobalStore)(_v0 => _v0.setSideMenuType),
      _v7 = (0, _v8.useGlobalStore)(_v0 => _v0.backgroundColorLivePreview),
      _v8 = (0, _v2.useRef)(null),
      _v9 = `${_v8.current?.offsetWidth}x${_v8.current?.offsetHeight}`,
      {
        previewMode: _v10,
        isMiniaturePreview: _v11,
        setPreviewDetails: _v12
      } = (0, _v2.useContext)(_v9),
      _v13 = (0, _v8.useGlobalStore)(_v0 => _v0.entity),
      {
        currentPageType: _v14
      } = _v12(),
      _v15 = _v14 === _v7.PAGE_TYPES.ADMIN && !_v11,
      _v16 = (0, _v2.useMemo)(() => {
        if (_v1 || !_v4.isActive) return "";
        if (_v5 === _v5.ENTITY_TYPE.VIDEO && _v4.useThumbnail) {
          let _v0 = _v13.pictures?.sizes.reduce((_v0, _v1) => _v1.width > _v0.width ? _v1 : _v0, {
            width: 0,
            link: ""
          })?.link || "";
          return `url(${_v0})`;
        }
        return `url(${_v4.urlHigh})`;
      }, [_v4.isActive, _v4.urlHigh, _v4.useThumbnail, _v1, _v13.pictures?.sizes, _v5]);
    return (0, _v2.useEffect)(() => {
      let _v0 = setTimeout(() => {
        _v12({
          width: _v8.current?.offsetWidth,
          height: _v8.current?.offsetHeight,
          boundingBox: _v8.current?.getBoundingClientRect()
        });
      }, 200);
      return () => clearTimeout(_v0);
    }, [_v10, _v8, _v9]), (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: _v7.PREVIEW_MODE_SIZE[_v10].width,
      height: _v7.PREVIEW_MODE_SIZE[_v10].height,
      transition: "width 0.15s, height 0.15s",
      background: "#141414",
      color: "white",
      ref: _v8,
      children: [(0, _v1.jsx)(_v3.Box, {
        position: "absolute",
        "z-index": 0,
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        style: (() => {
          let _v0 = {};
          switch (_v4.style) {
            case _v7.BACKGROUND_STYLE.FILL:
              _v0 = {
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              };
              break;
            case _v7.BACKGROUND_STYLE.FIT:
              _v0 = {
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
              };
              break;
            case _v7.BACKGROUND_STYLE.TILE:
              _v0 = {
                backgroundSize: "64px"
              };
          }
          return {
            backgroundImage: _v16,
            ..._v0
          };
        })()
      }), (0, _v1.jsx)(_v3.Box, {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        "z-index": 0,
        style: {
          backgroundColor: _v1 ? "" : (_v2 = _v7.hexCode || _v4.hexCode, _v3 = _v7.opacity || _v4.opacity, `${_v2}${Math.floor(_v3 / 100 * 255).toString(16).padStart(2, "0")}`)
        }
      }), (0, _v1.jsx)(_v3.Box, {
        width: "100%",
        height: `calc(100% - ${(0, _v4.rem)(40 * !!_v15)})`,
        position: "relative",
        backgroundBlendMode: "darken",
        overflowX: "auto",
        mt: (0, _v4.rem)(40 * !!_v15),
        onMouseDownCapture: _v0 => {
          _v0.target == _v0.currentTarget && _v6(_v7.SIDE_MENU_CONTENT.SETTINGS);
        },
        children: (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v0, (0, _v1.jsx)(_v32, {})]
        })
      })]
    });
  }], 0);
  let _v33 = (0, _v2.createContext)({
    editor: null,
    setEditor: () => null
  });
  _v0.s(["RichTextContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(null);
    return (0, _v1.jsx)(_v33.Provider, {
      value: {
        editor: _v1,
        setEditor: _v2
      },
      children: _v0
    });
  }, "useRichTextContext", 0, () => (0, _v2.useContext)(_v33)], 0);
}