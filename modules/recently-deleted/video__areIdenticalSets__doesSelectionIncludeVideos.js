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
    _v18 = _v0.i(0);
  let _v19 = (_v0, _v1) => 0 === _v1.size || _v1.size === _v0.length,
    _v20 = (_v0, _v1, _v2) => 0 !== _v1.size && (_v1.size === _v0.length || _v1.has(_v2)),
    _v21 = (_v0, _v1, _v2) => {
      let _v3 = new Set(_v1);
      return _v3.has(_v2) ? _v3.delete(_v2) : _v3.add(_v2), _v3;
    },
    _v22 = (_v0, _v1) => _v19(_v0, _v1) || _v1.has("video"),
    _v23 = (_v0, _v1) => {
      if (_v1.has("video")) return _v1;
      let _v2 = new Set(_v1);
      return _v2.add("video"), _v2;
    };
  _v0.s(["areIdenticalSets", 0, (_v0, _v1) => {
    if (_v0.size !== _v1.size) return !1;
    for (let _v0 of _v0) if (!_v1.has(_v0)) return !1;
    return !0;
  }, "doesSelectionIncludeVideos", 0, _v22, "excludeVideosFromSelection", 0, (_v0, _v1) => {
    if (_v19(_v0, _v1)) return new Set(_v0.filter(_v0 => "video" !== _v0));
    let _v2 = new Set(_v1);
    return _v2.delete("video"), _v2;
  }, "getContentTypeApiFilterParam", 0, (_v0, _v1) => {
    if (!_v19(_v0, _v1) && 1 === _v1.size) return [..._v1][0];
  }, "includeVideosInSelection", 0, _v23, "isContentTypeOptionChecked", 0, _v20, "isContentTypeSelectionDefault", 0, _v19, "passesContentTypeSelection", 0, (_v0, _v1, _v2) => !!_v19(_v1, _v2) || (_v0.file ? _v2.has("file") : _v0.video ? _v2.has("video") : _v0.folder ? _v2.has("folder") : !_v0.showcase || _v2.has("showcase")), "toggleContentTypeSelection", 0, _v21, "toggleContentTypeSelectionWithAvailabilityAwareFolder", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v21(_v0, _v1, _v2);
    return _v3 && "folder" === _v2 && !_v1.has("folder") && _v4.has("folder") && !_v4.has("video") ? _v23(_v0, _v4) : _v4;
  }], 0);
  let _v24 = _v0 => !!_v0 && _v0.has("restricted") && !_v0.has("available"),
    _v25 = _v0 => !!_v0 && _v0.has("available") && !_v0.has("restricted");
  _v0.s(["ContentTypeFilter", 0, ({
    filter: _v0,
    options: _v1,
    isDisabled: _v2 = !1,
    onToggleType: _v3,
    videoSubmenu: _v4
  }) => {
    let _v5 = (0, _v2.useRef)(null),
      _v6 = (0, _v2.useRef)(_v4),
      [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v2.useState)({
        top: 0,
        left: 0
      }),
      _v11 = (0, _v2.useRef)(null),
      _v12 = () => {
        _v11.current && (clearTimeout(_v11.current), _v11.current = null);
      },
      _v13 = (0, _v2.useCallback)(() => {
        let _v0 = _v5.current;
        if (!_v0) return;
        let _v1 = _v0.getBoundingClientRect();
        _v10({
          top: _v1.top + _v1.height / 2,
          left: _v1.right - 6
        });
      }, []),
      _v14 = (0, _v2.useCallback)(() => {
        _v6.current && (_v12(), _v13(), _v8(!0));
      }, [_v13]),
      _v15 = (0, _v2.useCallback)(() => {
        _v12(), _v11.current = setTimeout(() => {
          _v8(!1);
        }, 200);
      }, []);
    (0, _v2.useEffect)(() => {
      _v6.current = _v4;
    }, [_v4]), (0, _v2.useEffect)(() => () => {
      _v12();
    }, []), (0, _v2.useEffect)(() => {
      if (!_v7) return;
      let _v0 = () => {
        _v13();
      };
      return window.addEventListener("scroll", _v0, !0), window.addEventListener("resize", _v0), () => {
        window.removeEventListener("scroll", _v0, !0), window.removeEventListener("resize", _v0);
      };
    }, [_v7, _v13]);
    let _v16 = _v22(_v1, _v0),
      _v17 = !1,
      _v18 = !1;
    if (_v4) {
      let _v0 = _v4.videoAvailabilityFilter.has("restricted"),
        _v1 = _v4.videoAvailabilityFilter.has("available");
      _v16 ? _v0 !== _v1 ? (_v17 = !1, _v18 = !0) : (_v17 = !!_v0 && !!_v1 || !1, _v18 = !1) : (_v17 = !1, _v18 = !1);
    }
    let _v19 = (_v0, _v1) => {
      let _v2 = _v20(_v1, _v0, _v0);
      return (0, _v1.jsx)(_v11.Box, {
        width: "100%",
        _hover: {
          backgroundColor: "fill-component-hover",
          borderRadius: "0.5rem"
        },
        "data-testid": `content-type-filter-${_v0}`,
        children: (0, _v1.jsx)(_v12.Checkbox, {
          paddingX: "sm",
          borderRadius: "sm",
          width: "100%",
          size: "md",
          isChecked: _v2,
          isDisabled: _v2,
          onChange: () => {
            _v3(_v0);
          },
          children: (0, _v1.jsx)(_v11.Box, {
            padding: "sm",
            children: (0, _v1.jsx)(_v8.Text, {
              variant: "body-md",
              children: _v1
            })
          })
        })
      }, String(_v0));
    };
    return (0, _v1.jsxs)(_v4.Menu, {
      isLazy: !0,
      placement: "bottom-end",
      closeOnSelect: !1,
      children: [(0, _v1.jsx)(_v10.Tooltip, {
        label: (0, _v17.translate)({
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
        isDisabled: !_v2,
        children: (0, _v1.jsx)(_v5.MenuButton, {
          as: _v7.Button,
          isDisabled: _v2,
          variant: "tertiary",
          rightIcon: (0, _v1.jsx)(_v15.ChevronDownSmall, {}),
          "data-id": "content-type-filter",
          children: ((_v0, _v1, _v2) => {
            let _v3 = _v1.size,
              _v4 = _v0.length;
            if (0 === _v3) return (0, _v17.translate)({
              singular: "Type",
              dictionary: {
                es: {
                  singular: "Tipo"
                },
                "de-DE": {
                  singular: "Typ"
                },
                "ja-JP": {
                  singular: "タイプ"
                },
                "ko-KR": {
                  singular: "유형"
                },
                "pt-BR": {
                  singular: "Tipo"
                },
                "zh-CN": {
                  singular: "类型"
                }
              }
            });
            if (_v3 === _v4) {
              let _v0 = 2 === _v0.length && _v0.includes("folder") && _v0.includes("video");
              return _v1.has("folder") && _v1.has("video") && _v0 && (_v24(_v2) || _v25(_v2)) ? (0, _v17.translate)({
                singular: "Multiple types",
                dictionary: {
                  es: {
                    singular: "Múltiples tipos"
                  },
                  "de-DE": {
                    singular: "Mehrere Typen"
                  },
                  "fr-FR": {
                    singular: "Plusieurs types"
                  },
                  "ja-JP": {
                    singular: "複数の種類"
                  },
                  "ko-KR": {
                    singular: "여러 유형"
                  },
                  "pt-BR": {
                    singular: "Vários tipos"
                  },
                  "zh-CN": {
                    singular: "多种类型"
                  }
                }
              }) : _v24(_v2) ? (0, _v17.translate)({
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
              }) : _v25(_v2) ? (0, _v17.translate)({
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
              }) : (0, _v17.translate)({
                singular: "All types",
                dictionary: {
                  es: {
                    singular: "Vocal e instrumental"
                  },
                  "de-DE": {
                    singular: "Alle Typen"
                  },
                  "fr-FR": {
                    singular: "Tous types"
                  },
                  "ja-JP": {
                    singular: "すべてのタイプ"
                  },
                  "ko-KR": {
                    singular: "모든 유형"
                  },
                  "pt-BR": {
                    singular: "Todos os tipos"
                  },
                  "zh-CN": {
                    singular: "所有类型"
                  }
                }
              });
            }
            if (_v2 && _v2.has("restricted") && _v2.has("available") && _v22(_v0, _v1)) return (0, _v17.translate)({
              singular: "Videos",
              dictionary: {
                "fr-FR": {
                  singular: "Vidéos"
                },
                "ja-JP": {
                  singular: "動画"
                },
                "ko-KR": {
                  singular: "동영상"
                },
                "pt-BR": {
                  singular: "Vídeos"
                },
                "zh-CN": {
                  singular: "视频"
                }
              }
            });
            if (_v3 > 1) return (0, _v17.translate)({
              singular: "Multiple types",
              dictionary: {
                es: {
                  singular: "Múltiples tipos"
                },
                "de-DE": {
                  singular: "Mehrere Typen"
                },
                "fr-FR": {
                  singular: "Plusieurs types"
                },
                "ja-JP": {
                  singular: "複数の種類"
                },
                "ko-KR": {
                  singular: "여러 유형"
                },
                "pt-BR": {
                  singular: "Vários tipos"
                },
                "zh-CN": {
                  singular: "多种类型"
                }
              }
            });
            let _v5 = [..._v1][0];
            return "video" === _v5 && _v24(_v2) ? (0, _v17.translate)({
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
            }) : "video" === _v5 && _v25(_v2) ? (0, _v17.translate)({
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
            }) : _v18.CONTENT_TYPE_FILTER_OPTIONS_BY_VALUE[_v5].label;
          })(_v1, _v0, _v4?.videoAvailabilityFilter)
        })
      }), (0, _v1.jsx)(_v6.MenuList, {
        width: (0, _v9.rem)(237),
        "data-testid": "filter-menu",
        children: (0, _v1.jsx)(_v11.Box, {
          children: _v1.map(_v0 => {
            let _v1 = _v18.CONTENT_TYPE_FILTER_OPTIONS_BY_VALUE[_v0].label;
            return "video" === _v0 ? ((_v0, _v1) => {
              if (!_v4) return _v19(_v0, _v1);
              let {
                videoAvailabilityFilter: _v2,
                setVideoAvailabilityFilter: _v3,
                showRestrictedOption: _v4,
                showAvailableOption: _v5
              } = _v4;
              return (0, _v1.jsxs)(_v11.Box, {
                onPointerLeave: _v15,
                onPointerEnter: () => {
                  _v12(), _v14();
                },
                children: [(0, _v1.jsx)(_v11.Box, {
                  width: "100%",
                  _hover: {
                    backgroundColor: "fill-component-hover",
                    borderRadius: "0.5rem"
                  },
                  children: (0, _v1.jsxs)(_v13.Flex, {
                    ref: _v5,
                    alignItems: "center",
                    gap: 4,
                    width: "100%",
                    padding: "sm",
                    "data-testid": "content-type-filter-video-row",
                    children: [(0, _v1.jsx)(_v12.Checkbox, {
                      flexShrink: 0,
                      size: "md",
                      isDisabled: _v2,
                      isChecked: _v17,
                      isIndeterminate: _v18,
                      onChange: () => {
                        _v4.onVideoParentCheckboxClick();
                      }
                    }), (0, _v1.jsxs)(_v14.HStack, {
                      spacing: 3,
                      flex: 1,
                      justifyContent: "space-between",
                      children: [(0, _v1.jsx)(_v8.Text, {
                        variant: "body-md",
                        children: _v1
                      }), (0, _v1.jsx)(_v16.ChevronRightSmall, {
                        width: (0, _v9.rem)(20),
                        height: (0, _v9.rem)(20)
                      })]
                    })]
                  })
                }), _v7 && "u" > typeof document && (0, _v3.createPortal)((0, _v1.jsxs)(_v11.Box, {
                  position: "fixed",
                  top: _v9.top,
                  left: _v9.left,
                  zIndex: 0,
                  bgColor: "surface",
                  borderRadius: "md",
                  boxShadow: "lg",
                  minWidth: (0, _v9.rem)(217),
                  padding: "xs",
                  sx: {
                    transform: "translateY(-50%)"
                  },
                  onPointerEnter: () => {
                    _v12();
                  },
                  onPointerLeave: _v15,
                  children: [_v4 && (0, _v1.jsx)(_v11.Box, {
                    width: "100%",
                    _hover: {
                      backgroundColor: "fill-component-hover",
                      borderRadius: "0.5rem"
                    },
                    "data-testid": "video-availability-filter-restricted",
                    children: (0, _v1.jsx)(_v12.Checkbox, {
                      paddingX: "sm",
                      borderRadius: "sm",
                      width: "100%",
                      size: "md",
                      isChecked: _v2.has("restricted"),
                      onChange: () => {
                        _v3("restricted");
                      },
                      children: (0, _v1.jsx)(_v11.Box, {
                        padding: "sm",
                        children: (0, _v1.jsx)(_v8.Text, {
                          variant: "body-md",
                          children: (0, _v17.translate)({
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
                  }), _v5 && (0, _v1.jsx)(_v11.Box, {
                    width: "100%",
                    _hover: {
                      backgroundColor: "fill-component-hover",
                      borderRadius: "0.5rem"
                    },
                    "data-testid": "video-availability-filter-available",
                    children: (0, _v1.jsx)(_v12.Checkbox, {
                      paddingX: "sm",
                      borderRadius: "sm",
                      width: "100%",
                      size: "md",
                      isChecked: _v2.has("available"),
                      onChange: () => {
                        _v3("available");
                      },
                      children: (0, _v1.jsx)(_v11.Box, {
                        padding: "sm",
                        children: (0, _v1.jsx)(_v8.Text, {
                          variant: "body-md",
                          children: (0, _v17.translate)({
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
            })(_v0, _v1) : _v19(_v0, _v1);
          })
        })
      })]
    });
  }], 0);
}