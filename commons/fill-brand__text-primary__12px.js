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
    _v17 = _v0.i(0);
  let _v18 = ({
      label: _v0
    }) => (0, _v1.jsx)(_v7.Tag, {
      size: "sm",
      bg: "fill-brand",
      color: "text-primary",
      borderRadius: "sm",
      h: (0, _v10.rem)(16),
      px: (0, _v10.rem)(6),
      flexShrink: 0,
      children: (0, _v1.jsx)(_v7.TagLabel, {
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "1",
        children: _v0
      })
    }),
    _v19 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v9.Tooltip, {
      placement: "right-start",
      maxW: (0, _v10.rem)(320),
      label: (0, _v1.jsxs)(_v2.Box, {
        p: (0, _v10.rem)(4),
        children: [(0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v10.rem)(8),
          mb: (0, _v10.rem)(8),
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: _v17.dubbingModelPro
          }), (0, _v1.jsx)(_v18, {
            label: _v17.newBadge
          })]
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-sm",
          mb: (0, _v10.rem)(12),
          children: _v17.dubbingProTooltipDescription
        }), (0, _v1.jsxs)(_v6.Stack, {
          gap: (0, _v10.rem)(8),
          mb: (0, _v10.rem)(12),
          children: [(0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: (0, _v10.rem)(8),
            children: [(0, _v1.jsx)(_v14.MicOn, {
              boxSize: (0, _v10.rem)(16)
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "body-sm",
              children: _v17.dubbingProTooltipFeatureVoice
            })]
          }), (0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: (0, _v10.rem)(8),
            children: [(0, _v1.jsx)(_v15.SoundWaves, {
              boxSize: (0, _v10.rem)(16)
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "body-sm",
              children: _v17.dubbingProTooltipFeatureEmotion
            })]
          }), (0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: (0, _v10.rem)(8),
            children: [(0, _v1.jsx)(_v12.Globe, {
              boxSize: (0, _v10.rem)(16)
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "body-sm",
              children: _v17.dubbingProTooltipFeatureLanguages
            })]
          }), (0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: (0, _v10.rem)(8),
            children: [(0, _v1.jsx)(_v11.BookOpen, {
              boxSize: (0, _v10.rem)(16)
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "body-sm",
              children: _v17.dubbingProTooltipFeatureDictionary
            })]
          })]
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-xs",
          color: "text-secondary",
          children: _v17.dubbingProTooltipFootnote
        })]
      }),
      children: _v0
    });
  _v0.s(["DubbingModelRows", 0, ({
    value: _v0,
    onChange: _v1,
    priceV1: _v2,
    priceV2: _v3,
    badgeLabel: _v4 = _v17.newBadge,
    showProTooltip: _v5 = !0
  }) => (0, _v1.jsx)(_v5.RadioGroup, {
    value: _v0,
    onChange: _v0 => _v1(_v0),
    children: (0, _v1.jsxs)(_v6.Stack, {
      gap: (0, _v10.rem)(8),
      children: [(0, _v1.jsxs)(_v3.Flex, {
        h: (0, _v10.rem)(40),
        px: (0, _v10.rem)(12),
        borderRadius: "md",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "v2" === _v0 ? "text-tertiary" : "input-stroke",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        onClick: () => _v1("v2"),
        "data-id": "ai_menu_model_pro",
        children: [(0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v10.rem)(8),
          minWidth: 0,
          children: [(0, _v1.jsx)(_v4.Radio, {
            value: "v2"
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: _v17.dubbingModelPro
          }), (0, _v1.jsx)(_v18, {
            label: _v4
          }), _v5 && (0, _v1.jsx)(_v19, {
            children: (0, _v1.jsx)(_v2.Box, {
              as: "span",
              display: "inline-flex",
              cursor: "pointer",
              children: (0, _v1.jsx)(_v13.InfoCircle, {
                boxSize: "2xs",
                color: "text-secondary"
              })
            })
          })]
        }), (0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v10.rem)(4),
          color: "text-secondary",
          flexShrink: 0,
          children: [(0, _v1.jsx)(_v16.VimeoCoin, {
            boxSize: (0, _v10.rem)(16)
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            children: _v17.creditsPerMinCompact(_v3)
          })]
        })]
      }), (0, _v1.jsxs)(_v3.Flex, {
        h: (0, _v10.rem)(40),
        px: (0, _v10.rem)(12),
        borderRadius: "md",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "v1" === _v0 ? "text-tertiary" : "input-stroke",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        onClick: () => _v1("v1"),
        "data-id": "ai_menu_model_legacy",
        children: [(0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v10.rem)(8),
          children: [(0, _v1.jsx)(_v4.Radio, {
            value: "v1"
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: _v17.dubbingModelLegacy
          })]
        }), (0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v10.rem)(4),
          color: "text-secondary",
          children: [(0, _v1.jsx)(_v16.VimeoCoin, {
            boxSize: (0, _v10.rem)(16)
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            children: _v17.creditsPerMinCompact(_v2)
          })]
        })]
      })]
    })
  })]);
}