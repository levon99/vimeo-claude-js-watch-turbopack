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
  let _v17 = ({
    children: _v0,
    isFilterApplied: _v1,
    label: _v2,
    subtitle: _v3,
    onOpen: _v4
  }) => (0, _v1.jsx)(_v11.AccordionItem, {
    minWidth: (0, _v15.rem)(300),
    children: ({
      isExpanded: _v0
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v14.Flex, {
        onClick: () => {
          _v0 || _v4?.();
        },
        children: (0, _v1.jsxs)(_v12.AccordionButton, {
          transition: "background .25s",
          background: _v0 ? "fill-component" : "transparent",
          children: [(0, _v1.jsx)(_v4.Stack, {
            spacing: "xs",
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v5.Text, {
                fontWeight: "500",
                variant: "heading-sm",
                paddingLeft: "sm",
                textAlign: "left",
                children: _v2
              }), _v3 && (0, _v1.jsx)(_v5.Text, {
                variant: "body-sm",
                color: "text-secondary",
                paddingLeft: "sm",
                children: _v3
              })]
            })
          }), (0, _v1.jsxs)(_v14.Flex, {
            alignItems: "center",
            gap: ".5rem",
            children: [_v1 && (0, _v1.jsx)(_v14.Flex, {
              boxSize: ".5rem",
              borderRadius: "round",
              background: "fill-brand"
            }), (0, _v1.jsx)(_v16.ChevronDownSmall, {
              transform: _v0 ? "rotate(180deg)" : "none",
              boxSize: "1.25rem"
            })]
          })]
        })
      }), (0, _v1.jsx)(_v13.AccordionPanel, {
        paddingTop: "xs",
        children: _v0
      })]
    })
  });
  _v0.s(["MobileFilter", 0, _v17], 0), _v0.s(["MobileContentTypeFilter", 0, ({
    filter: _v0,
    onToggle: _v1,
    options: _v2,
    isDisabled: _v3 = !1,
    page: _v4 = "",
    videoSubmenu: _v5
  }) => {
    let _v6,
      _v7 = (0, _v7.useViewer)(),
      _v8 = _v7?.teamUser,
      _v9 = (_v6 = (0, _v6.translate)({
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
      }), (0, _v9.isContentTypeSelectionDefault)(_v2, _v0) ? _v6 : 1 === _v0.size ? _v6 + " (1)" : _v6 + " (" + _v0.size + ")"),
      _v10 = _v3 ? (0, _v6.translate)({
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
      }) : void 0,
      _v11 = (0, _v9.doesSelectionIncludeVideos)(_v2, _v0),
      _v12 = !1,
      _v13 = !1;
    if (_v5) {
      let _v0 = _v5.videoAvailabilityDraft.has("restricted"),
        _v1 = _v5.videoAvailabilityDraft.has("available");
      _v11 ? _v0 !== _v1 ? (_v12 = !1, _v13 = !0) : (_v12 = !!_v0 && !!_v1 || !1, _v13 = !1) : (_v12 = !1, _v13 = !1);
    }
    return (0, _v1.jsx)(_v17, {
      label: _v9,
      subtitle: _v10,
      onOpen: () => {
        _v10.FilterBPEvents.sendOpenFilterEvent("content_type", _v4, _v8, "mobile");
      },
      children: (0, _v1.jsx)(_v4.Stack, {
        children: _v2.map(_v0 => {
          let _v1 = _v8.CONTENT_TYPE_FILTER_OPTIONS_BY_VALUE[_v0].label;
          if ("video" === _v0 && _v5) return (0, _v1.jsxs)(_v2.Box, {
            children: [(0, _v1.jsx)(_v3.Checkbox, {
              padding: "sm",
              size: "md",
              isDisabled: _v3,
              isChecked: _v12,
              isIndeterminate: _v13,
              onChange: () => {
                _v5.onVideoParentCheckboxClick(), _v10.FilterBPEvents.sendApplyFilterEvent("content_type", _v4, _v8, "mobile");
              },
              children: (0, _v1.jsx)(_v5.Text, {
                variant: "body-md",
                children: _v1
              })
            }), _v11 && (_v5.showRestrictedOption || _v5.showAvailableOption) && (0, _v1.jsxs)(_v4.Stack, {
              paddingTop: "sm",
              paddingLeft: "md",
              spacing: "sm",
              children: [_v5.showRestrictedOption && (0, _v1.jsx)(_v3.Checkbox, {
                size: "md",
                isChecked: _v5.videoAvailabilityDraft.has("restricted"),
                onChange: () => {
                  _v5.onVideoAvailabilityChange("restricted"), _v10.FilterBPEvents.sendApplyFilterEvent("content_type", _v4, _v8, "mobile");
                },
                children: (0, _v1.jsx)(_v5.Text, {
                  variant: "body-md",
                  children: (0, _v6.translate)({
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
              }), _v5.showAvailableOption && (0, _v1.jsx)(_v3.Checkbox, {
                size: "md",
                isChecked: _v5.videoAvailabilityDraft.has("available"),
                onChange: () => {
                  _v5.onVideoAvailabilityChange("available"), _v10.FilterBPEvents.sendApplyFilterEvent("content_type", _v4, _v8, "mobile");
                },
                children: (0, _v1.jsx)(_v5.Text, {
                  variant: "body-md",
                  children: (0, _v6.translate)({
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
              })]
            })]
          }, "video");
          let _v2 = (0, _v9.isContentTypeOptionChecked)(_v2, _v0, _v0);
          return (0, _v1.jsx)(_v3.Checkbox, {
            padding: "sm",
            size: "md",
            isDisabled: _v3,
            isChecked: _v2,
            onChange: () => {
              _v1(_v0), _v10.FilterBPEvents.sendApplyFilterEvent("content_type", _v4, _v8, "mobile");
            },
            children: (0, _v1.jsx)(_v5.Text, {
              variant: "body-md",
              children: _v1
            })
          }, String(_v0));
        })
      })
    });
  }], 0);
}