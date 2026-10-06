{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
      color: "var(--vimeo-colors-text-tertiary)",
      fontFamily: "var(--vimeo-fonts-heading)",
      fontSize: "var(--vimeo-fontSizes-heading-2xs)",
      fontStyle: "normal",
      fontWeight: "var(--vimeo-fontWeights-bold)",
      lineHeight: "var(--vimeo-lineHeights-heading-2xs)",
      letterSpacing: "var(--vimeo-letterSpacings-heading-2xs)"
    },
    _v6 = {
      ..._v5,
      top: (0, _v4.rem)(-8),
      transform: "translateY(0)"
    },
    _v7 = {
      color: "var(--vimeo-colors-text-secondary)",
      fontFamily: "var(--vimeo-fonts-body)",
      fontSize: "var(--vimeo-fontSizes-body-md)",
      fontStyle: "normal",
      fontWeight: "var(--vimeo-fontWeights-regular)",
      lineHeight: "var(--vimeo-lineHeights-body-md)",
      letterSpacing: "var(--vimeo-letterSpacings-body-md)"
    };
  _v0.s(["FloatingInput", 0, ({
    label: _v0,
    placeholder: _v1 = _v0,
    value: _v2,
    name: _v3,
    onValueChange: _v4,
    isInvalid: _v5,
    isDisabled: _v6,
    inputMode: _v7,
    autoComplete: _v8,
    isRequired: _v9,
    "aria-describedby": _v10,
    "data-testid": _v11,
    children: _v12,
    onFocus: _v13,
    onBlur: _v14,
    onKeyDown: _v15,
    inputRef: _v16,
    height: _v17 = (0, _v4.rem)(40)
  }) => (0, _v1.jsxs)(_v2.Box, {
    position: "relative",
    flex: "1",
    minWidth: "0",
    width: "100%",
    "data-has-value": _v2 ? "" : void 0,
    sx: {
      _focusWithin: {
        'label[data-floating-label="true"]': _v6
      },
      '&[data-has-value] label[data-floating-label="true"]': _v6,
      '&:focus-within label[data-invalid="true"], &[data-has-value] label[data-invalid="true"]': {
        color: "var(--vimeo-colors-status-destructive-primary)"
      },
      'label[data-invalid="true"]': {
        color: "var(--vimeo-colors-status-destructive-primary)"
      },
      "& input::placeholder": {
        color: "transparent"
      },
      "& input": {
        backgroundColor: "var(--vimeo-colors-surface)"
      },
      zIndex: 1
    },
    children: [(0, _v1.jsx)(_v3.Input, {
      type: "text",
      name: _v3,
      "aria-label": _v0,
      placeholder: _v1,
      isInvalid: _v5,
      isDisabled: _v6,
      isRequired: _v9,
      "aria-describedby": _v10,
      inputMode: _v7,
      autoComplete: _v8,
      "data-testid": _v11,
      value: _v2,
      ref: _v16,
      onFocus: _v13,
      onBlur: _v14,
      onKeyDown: _v15,
      onChange: _v0 => _v4(_v0.currentTarget.value),
      size: "md",
      height: _v17,
      width: "100%"
    }), (0, _v1.jsx)(_v2.Box, {
      as: "label",
      htmlFor: _v3,
      "data-invalid": _v5 ? "true" : void 0,
      "data-floating-label": "true",
      position: "absolute",
      top: "50%",
      left: (0, _v4.rem)(12),
      paddingX: (0, _v4.rem)(4),
      marginX: (0, _v4.rem)(3),
      backgroundColor: "var(--vimeo-colors-surface)",
      zIndex: 1,
      pointerEvents: "none",
      transformOrigin: "left top",
      transition: "0.2s ease all",
      transform: "translateY(-50%)",
      ..._v7,
      children: _v1
    }), _v12 && (0, _v1.jsx)(_v2.Box, {
      position: "absolute",
      right: (0, _v4.rem)(16),
      top: "50%",
      transform: "translateY(-50%)",
      children: _v12
    })]
  }), "floatingLabelTypography", 0, _v5, "floatingPlaceholderTypography", 0, _v7]);
}