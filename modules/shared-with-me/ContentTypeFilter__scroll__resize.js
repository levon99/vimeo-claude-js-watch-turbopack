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
  _v0.s(["ContentTypeFilter", 0, ({
    filter: _v0,
    options: _v1,
    page: _v2 = "",
    isDisabled: _v3 = !1,
    onToggleType: _v4,
    videoSubmenu: _v5
  }) => {
    let _v6 = (0, _v19.useViewer)(),
      _v7 = _v6?.teamUser,
      _v8 = (0, _v2.useRef)(null),
      _v9 = (0, _v2.useRef)(_v5),
      [_v10, _v11] = (0, _v2.useState)(!1),
      [_v12, _v13] = (0, _v2.useState)({
        top: 0,
        left: 0
      }),
      _v14 = (0, _v2.useRef)(null),
      _v15 = () => {
        _v14.current && (clearTimeout(_v14.current), _v14.current = null);
      },
      _v16 = (0, _v2.useCallback)(() => {
        let _v0 = _v8.current;
        if (!_v0) return;
        let _v1 = _v0.getBoundingClientRect();
        _v13({
          top: _v1.top + _v1.height / 2,
          left: _v1.right - 6
        });
      }, []),
      _v17 = (0, _v2.useCallback)(() => {
        _v9.current && (_v15(), _v16(), _v11(!0));
      }, [_v16]),
      _v18 = (0, _v2.useCallback)(() => {
        _v15(), _v14.current = setTimeout(() => {
          _v11(!1);
        }, 200);
      }, []);
    (0, _v2.useEffect)(() => {
      _v9.current = _v5;
    }, [_v5]), (0, _v2.useEffect)(() => () => {
      _v15();
    }, []), (0, _v2.useEffect)(() => {
      if (!_v10) return;
      let _v0 = () => {
        _v16();
      };
      return window.addEventListener("scroll", _v0, !0), window.addEventListener("resize", _v0), () => {
        window.removeEventListener("scroll", _v0, !0), window.removeEventListener("resize", _v0);
      };
    }, [_v10, _v16]);
    let _v19 = (0, _v22.doesSelectionIncludeVideos)(_v1, _v0),
      _v20 = !1,
      _v21 = !1;
    if (_v5) {
      let _v0 = _v5.videoAvailabilityFilter.has("restricted"),
        _v1 = _v5.videoAvailabilityFilter.has("available");
      _v19 ? _v0 !== _v1 ? (_v20 = !1, _v21 = !0) : (_v20 = !!_v0 && !!_v1 || !1, _v21 = !1) : (_v20 = !1, _v21 = !1);
    }
    let _v22 = (_v0, _v1) => {
      let _v2 = (0, _v22.isContentTypeOptionChecked)(_v1, _v0, _v0);
      return (0, _v1.jsx)(_v12.Box, {
        width: "100%",
        _hover: {
          backgroundColor: "fill-component-hover",
          borderRadius: "0.5rem"
        },
        "data-testid": `content-type-filter-${_v0}`,
        children: (0, _v1.jsx)(_v13.Checkbox, {
          paddingX: "sm",
          borderRadius: "sm",
          width: "100%",
          size: "md",
          isChecked: _v2,
          isDisabled: _v3,
          onChange: () => {
            _v4(_v0), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 137, {
              page: _v2,
              location: "subheader",
              target: "library",
              name: "apply_filter_content_type",
              copy: _v1.toLowerCase(),
              feature: "video_library",
              type: "general",
              target_path: null,
              click_type: null,
              device_type: null,
              path: window.location.pathname,
              third_party_integration: null
            })), _v23.FilterBPEvents.sendApplyFilterEvent("content_type", _v2, _v7, "desktop");
          },
          children: (0, _v1.jsx)(_v12.Box, {
            padding: "sm",
            children: (0, _v1.jsx)(_v9.Text, {
              variant: "body-md",
              children: _v1
            })
          })
        })
      }, String(_v0));
    };
    return (0, _v1.jsxs)(_v5.Menu, {
      isLazy: !0,
      placement: "bottom-end",
      closeOnSelect: !1,
      onOpen: () => {
        _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 91, {
          page: _v2,
          location: "subheader",
          target: "filter popup",
          name: "filter_content_type",
          copy: "type",
          feature: "video_library",
          type: "general",
          target_path: null,
          click_type: null,
          device_type: null,
          path: window.location.pathname,
          third_party_integration: null
        })), _v23.FilterBPEvents.sendOpenFilterEvent("content_type", _v2, _v7, "desktop");
      },
      children: [(0, _v1.jsx)(_v11.Tooltip, {
        label: (0, _v18.translate)({
          singular: "Selected filters only apply to videos",
          dictionary: {
            es: {
              singular: "Los filtros seleccionados solo se aplican a los videos"
            },
            "de-DE": {
              singular: "Ausgewählte Filter gelten nur für Videos"
            },
            "fr-FR": {
              singular: "Les filtres sélectionnés s'appliquent uniquement aux vidéos."
            },
            "ja-JP": {
              singular: "選択したフィルターは動画にのみ適用されます"
            },
            "ko-KR": {
              singular: "선택한 필터는 동영상에만 적용됩니다."
            },
            "pt-BR": {
              singular: "Os filtros selecionados aplicam-se apenas aos vídeos"
            },
            "zh-CN": {
              singular: "所选过滤器仅适用于视频"
            }
          }
        }),
        placement: "top",
        isDisabled: !_v3,
        children: (0, _v1.jsx)(_v6.MenuButton, {
          as: _v8.Button,
          isDisabled: _v3,
          variant: "tertiary",
          rightIcon: (0, _v1.jsx)(_v16.ChevronDownSmall, {}),
          "data-id": "content-type-filter",
          children: (0, _v21.getContentTypeFilterTriggerLabel)(_v1, _v0, _v5?.videoAvailabilityFilter)
        })
      }), (0, _v1.jsx)(_v7.MenuList, {
        width: (0, _v10.rem)(237),
        "data-testid": "filter-menu",
        children: (0, _v1.jsx)(_v12.Box, {
          children: _v1.map(_v0 => {
            let _v1 = _v20.CONTENT_TYPE_FILTER_OPTIONS_BY_VALUE[_v0].label;
            return "video" === _v0 ? ((_v0, _v1) => {
              if (!_v5) return _v22(_v0, _v1);
              let {
                videoAvailabilityFilter: _v2,
                setVideoAvailabilityFilter: _v3,
                showRestrictedOption: _v4,
                showAvailableOption: _v5
              } = _v5;
              return (0, _v1.jsxs)(_v12.Box, {
                onPointerLeave: _v18,
                onPointerEnter: () => {
                  _v15(), _v17();
                },
                children: [(0, _v1.jsx)(_v12.Box, {
                  width: "100%",
                  _hover: {
                    backgroundColor: "fill-component-hover",
                    borderRadius: "0.5rem"
                  },
                  children: (0, _v1.jsxs)(_v14.Flex, {
                    ref: _v8,
                    alignItems: "center",
                    gap: 4,
                    width: "100%",
                    padding: "sm",
                    "data-testid": "content-type-filter-video-row",
                    children: [(0, _v1.jsx)(_v13.Checkbox, {
                      flexShrink: 0,
                      size: "md",
                      isDisabled: _v3,
                      isChecked: _v20,
                      isIndeterminate: _v21,
                      onChange: () => {
                        _v5.onVideoParentCheckboxClick(), _v23.FilterBPEvents.sendApplyFilterEvent("content_type", _v2, _v7, "desktop");
                      }
                    }), (0, _v1.jsxs)(_v15.HStack, {
                      spacing: 3,
                      flex: 1,
                      justifyContent: "space-between",
                      children: [(0, _v1.jsx)(_v9.Text, {
                        variant: "body-md",
                        children: _v1
                      }), (0, _v1.jsx)(_v17.ChevronRightSmall, {
                        width: (0, _v10.rem)(20),
                        height: (0, _v10.rem)(20)
                      })]
                    })]
                  })
                }), _v10 && "u" > typeof document && (0, _v3.createPortal)((0, _v1.jsxs)(_v12.Box, {
                  position: "fixed",
                  top: _v12.top,
                  left: _v12.left,
                  zIndex: 0,
                  bgColor: "surface",
                  borderRadius: "md",
                  boxShadow: "lg",
                  minWidth: (0, _v10.rem)(217),
                  padding: "xs",
                  sx: {
                    transform: "translateY(-50%)"
                  },
                  onPointerEnter: () => {
                    _v15();
                  },
                  onPointerLeave: _v18,
                  children: [_v4 && (0, _v1.jsx)(_v12.Box, {
                    width: "100%",
                    _hover: {
                      backgroundColor: "fill-component-hover",
                      borderRadius: "0.5rem"
                    },
                    "data-testid": "video-availability-filter-restricted",
                    children: (0, _v1.jsx)(_v13.Checkbox, {
                      paddingX: "sm",
                      borderRadius: "sm",
                      width: "100%",
                      size: "md",
                      isChecked: _v2.has("restricted"),
                      onChange: () => {
                        _v3("restricted"), _v23.FilterBPEvents.sendApplyFilterEvent("content_type", _v2, _v7, "desktop");
                      },
                      children: (0, _v1.jsx)(_v12.Box, {
                        padding: "sm",
                        children: (0, _v1.jsx)(_v9.Text, {
                          variant: "body-md",
                          children: (0, _v18.translate)({
                            singular: "Restricted videos",
                            dictionary: {
                              es: {
                                singular: "Vídeos restringidos"
                              },
                              "de-DE": {
                                singular: "Eingeschränkte Videos"
                              },
                              "fr-FR": {
                                singular: "Vidéos restreintes"
                              },
                              "ja-JP": {
                                singular: "閲覧制限のある動画"
                              },
                              "ko-KR": {
                                singular: "제한된 동영상"
                              },
                              "pt-BR": {
                                singular: "Vídeos restritos"
                              },
                              "zh-CN": {
                                singular: "受限视频"
                              }
                            }
                          })
                        })
                      })
                    })
                  }), _v5 && (0, _v1.jsx)(_v12.Box, {
                    width: "100%",
                    _hover: {
                      backgroundColor: "fill-component-hover",
                      borderRadius: "0.5rem"
                    },
                    "data-testid": "video-availability-filter-available",
                    children: (0, _v1.jsx)(_v13.Checkbox, {
                      paddingX: "sm",
                      borderRadius: "sm",
                      width: "100%",
                      size: "md",
                      isChecked: _v2.has("available"),
                      onChange: () => {
                        _v3("available"), _v23.FilterBPEvents.sendApplyFilterEvent("content_type", _v2, _v7, "desktop");
                      },
                      children: (0, _v1.jsx)(_v12.Box, {
                        padding: "sm",
                        children: (0, _v1.jsx)(_v9.Text, {
                          variant: "body-md",
                          children: (0, _v18.translate)({
                            singular: "Available videos",
                            dictionary: {
                              es: {
                                singular: "Vídeos disponibles"
                              },
                              "de-DE": {
                                singular: "Verfügbare Videos"
                              },
                              "fr-FR": {
                                singular: "Vidéos disponibles"
                              },
                              "ja-JP": {
                                singular: "利用可能な動画"
                              },
                              "ko-KR": {
                                singular: "사용 가능한 동영상"
                              },
                              "pt-BR": {
                                singular: "Vídeos disponíveis"
                              },
                              "zh-CN": {
                                singular: "可用视频"
                              }
                            }
                          })
                        })
                      })
                    })
                  })]
                }), document.body)]
              }, String(_v0));
            })(_v0, _v1) : _v22(_v0, _v1);
          })
        })
      })]
    });
  }]);
}