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
    _v16 = _v0.i(0);
  function _v17(_v0, _v1) {
    let [_v2, {
        loading: _v3
      }] = (0, _v15.usePostLeadCaptureResourceIdForm)(),
      [_v4, {
        loading: _v5,
        error: _v6
      }] = (0, _v15.usePatchLeadCaptureResourceIdForm)(),
      [_v7, {
        data: _v8,
        loading: _v9,
        callCount: _v10
      }] = (0, _v15.useGetLeadCaptureResourceIdFormLazy)(),
      _v11 = _v6 && _v6?.status === 404,
      _v12 = (0, _v2.useCallback)(() => {
        _v0 && _v7({
          select: ["enabled", "registrationData", "placement"],
          where: {
            resourceType: _v13.ENTITY_TO_PATH_MAP[_v1],
            resourceId: _v0
          }
        });
      }, [_v0, _v1, _v7]);
    (0, _v2.useEffect)(() => {
      _v12();
    }, [_v0, _v1, _v12, _v7]), (0, _v2.useEffect)(() => {
      _v11 && !_v5 && _v2({
        where: {
          resourceId: _v0,
          resourceType: _v13.ENTITY_TO_PATH_MAP[_v1]
        },
        variables: {
          enabled: !0
        },
        select: ["enabled"]
      });
    }, [_v0, _v1, _v11, _v5, _v2]);
    let _v13 = (0, _v16.useConfigStore)(_v0 => _v0.setLeadCaptureForm),
      _v14 = (0, _v2.useCallback)(_v0 => (_v13({
        enabled: _v0
      }), _v4({
        select: ["enabled"],
        where: {
          resourceType: _v13.ENTITY_TO_PATH_MAP[_v1],
          resourceId: _v0
        },
        variables: {
          enabled: _v0
        }
      })), [_v0, _v1, _v4]);
    return (0, _v2.useEffect)(() => {
      _v13({
        enabled: !!_v8?.enabled
      });
    }, [_v8?.enabled]), (0, _v2.useEffect)(() => {
      _v8 && _v16.useConfigStore.setState({
        leadCaptureFormEntityId: _v0
      });
    }, [_v8, _v0]), (0, _v2.useEffect)(() => {
      _v13({
        placement: _v8?.placement || ""
      });
    }, [_v8?.placement]), {
      regCount: _v8?.registrationData?.total || 0,
      fetch: _v12,
      toggleForm: _v14,
      loading: _v9 && _v10 < 1 || _v5 || _v3
    };
  }
  _v0.s(["useEntityLeadCapture", 0, _v17], 0);
  var _v18 = _v0.i(0);
  _v0.s(["GatesBanner", 0, function ({
    videoId: _v0,
    videoLink: _v1
  }) {
    let _v2 = (0, _v3.useHistory)(),
      {
        loading: _v3
      } = _v17(_v0 + "", _v13.ENTITY_TYPE.VIDEO),
      _v4 = (0, _v16.useConfigStore)(_v0 => _v0.leadCaptureForm.enabled),
      _v5 = (0, _v16.useConfigStore)(_v0 => _v0.leadCaptureForm.placement),
      [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = (0, _v11.useIsMobile)(),
      _v9 = (0, _v2.useMemo)(() => {
        switch (_v5) {
          case _v18.PLACEMENT_TYPES.afterVideo:
            return _v14.default.NotchAfterVideo;
          case _v18.PLACEMENT_TYPES.beforeVideo:
            return _v14.default.NotchBeforeVideo;
          case _v18.PLACEMENT_TYPES.duringVideo:
          default:
            return _v14.default.NotchDuringVideo;
        }
      }, [_v5]);
    return _v3 || !_v4 || _v6 || _v8 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v6.Flex, {
      position: "absolute",
      top: 0,
      w: "100%",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "banner",
      children: (0, _v1.jsxs)(_v6.Flex, {
        bg: "#252D35A3",
        borderRadius: `0 0 ${(0, _v7.rem)(12)} ${(0, _v7.rem)(12)}`,
        alignItems: "center",
        lineHeight: (0, _v7.rem)(20),
        height: (0, _v7.rem)(40),
        minWidth: 0,
        backdropFilter: "blur(50px)",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          alignItems: "center",
          px: "200",
          minWidth: 0,
          children: [(0, _v1.jsx)(_v10.Registration, {
            color: "#F9FAFB",
            width: (0, _v7.rem)(20),
            mr: "75"
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            color: "#F9FAFB",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            children: _v9
          })]
        }), (0, _v1.jsx)(_v4.Box, {
          p: "50",
          borderWidth: `0 ${(0, _v7.rem)(1)}`,
          borderColor: "#BEE3F829",
          children: (0, _v1.jsx)(_v5.Button, {
            variant: "tertiary",
            onClick: () => {
              _v2.replace(`${_v1}/registration?section=${_v18.SECTION_TYPES.FORM}`);
            },
            border: 0,
            height: (0, _v7.rem)(32),
            _hover: {
              backgroundColor: "#4a6c7d33"
            },
            children: (0, _v1.jsx)(_v8.Text, {
              variant: "body-md",
              fontWeight: "bold",
              letterSpacing: "-.2px",
              color: "#F9FAFB",
              children: (0, _v12.translate)({
                singular: "Customize form",
                dictionary: {
                  es: {
                    singular: "Personalizar formulario"
                  },
                  "de-DE": {
                    singular: "Formular anpassen"
                  },
                  "fr-FR": {
                    singular: "Personnaliser le formulaire"
                  },
                  "ja-JP": {
                    singular: "フォームのカスタマイズ"
                  },
                  "ko-KR": {
                    singular: "양식 사용자 지정"
                  },
                  "pt-BR": {
                    singular: "Personalizar o formulário"
                  },
                  "zh-CN": {
                    singular: "自定义表单"
                  }
                }
              })
            })
          })
        }), (0, _v1.jsx)(_v4.Box, {
          m: "50",
          display: "block",
          boxSizing: "border-box",
          children: (0, _v1.jsx)(_v5.Button, {
            variant: "tertiary",
            onClick: () => _v7(!0),
            border: 0,
            height: (0, _v7.rem)(32),
            width: (0, _v7.rem)(38),
            color: "#F9FAFB",
            _hover: {
              backgroundColor: "#4a6c7d33"
            },
            children: (0, _v1.jsx)(_v9.CloseX, {
              display: "block",
              boxSize: (0, _v7.rem)(20)
            })
          })
        })]
      })
    });
  }], 0);
}