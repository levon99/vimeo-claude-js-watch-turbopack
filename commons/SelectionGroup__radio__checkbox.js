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
    _v10 = _v0.i(0);
  let [_v11, _v12] = (0, _v4.createStylesContext)("SelectionGroup"),
    _v13 = ({
      onChange: _v0,
      ..._v1
    }) => {
      let {
          getRadioProps: _v2,
          getRootProps: _v3
        } = (0, _v5.useRadioGroup)({
          onChange: _v0,
          ..._v1
        }),
        _v4 = _v12(),
        {
          children: _v5,
          ..._v6
        } = _v1;
      return (0, _v1.jsx)(_v6.chakra.div, {
        __css: _v4.radioSelectionGroup,
        ..._v3(),
        ..._v6,
        children: _v10.default.Children.map(_v5, (_v0, _v1) => _v10.default.cloneElement(_v0, {
          key: _v1,
          variant: "radio",
          ..._v2({
            value: _v0.props.value
          })
        }))
      });
    },
    _v14 = _v0 => {
      let {
          getCheckboxProps: _v1
        } = (0, _v7.useCheckboxGroup)(_v0),
        _v2 = _v12(),
        {
          children: _v3,
          onChange: _v4,
          defaultValue: _v5,
          ..._v6
        } = _v0;
      return (0, _v1.jsx)(_v6.chakra.div, {
        __css: _v2.checkboxSelectionGroup,
        ..._v6,
        children: _v10.default.Children.map(_v3, (_v0, _v1) => _v10.default.cloneElement(_v0, {
          key: _v1,
          variant: "checkbox",
          ..._v1({
            value: _v0.props.value
          })
        }))
      });
    },
    _v15 = (0, _v2.forwardRef)(({
      variant: _v0,
      ..._v1
    }, _v2) => (0, _v1.jsxs)(_v1.Fragment, {
      children: ["radio" === _v0 && (0, _v1.jsx)(_v17, {
        ref: _v2,
        ..._v1
      }), "checkbox" === _v0 && (0, _v1.jsx)(_v16, {
        ref: _v2,
        ..._v1
      })]
    })),
    _v16 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => {
      let {
          getCheckboxProps: _v3,
          getInputProps: _v4,
          getLabelProps: _v5,
          htmlProps: _v6
        } = (0, _v9.useCheckbox)(_v1),
        _v7 = _v12();
      return (0, _v1.jsxs)(_v6.chakra.label, {
        ..._v3(),
        __css: _v7.checkboxSelectionItem,
        ..._v6,
        children: [(0, _v1.jsx)("input", {
          ref: _v2,
          ..._v4()
        }), (0, _v1.jsx)(_v6.chakra.span, {
          ..._v5(),
          children: _v0
        })]
      });
    }),
    _v17 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => {
      let {
          getInputProps: _v3,
          getRadioProps: _v4,
          htmlProps: _v5,
          getLabelProps: _v6
        } = (0, _v8.useRadio)(_v1),
        _v7 = _v12();
      return (0, _v1.jsxs)(_v6.chakra.label, {
        ..._v4(),
        __css: _v7.radioSelectionItem,
        ..._v5,
        children: [(0, _v1.jsx)("input", {
          ref: _v2,
          ..._v3()
        }), (0, _v1.jsx)(_v6.chakra.span, {
          ..._v6(),
          children: _v0
        })]
      });
    });
  _v0.s(["SelectionGroup", 0, ({
    size: _v0 = "md",
    variant: _v1 = "checkbox",
    ..._v2
  }) => {
    let _v3 = (0, _v3.useMultiStyleConfig)("SelectionGroup", {
      size: _v0
    });
    return (0, _v1.jsxs)(_v11, {
      value: _v3,
      children: ["radio" === _v1 && (0, _v1.jsx)(_v13, {
        ..._v2
      }), "checkbox" === _v1 && (0, _v1.jsx)(_v14, {
        ..._v2
      })]
    });
  }, "SelectionItem", 0, _v15]);
}