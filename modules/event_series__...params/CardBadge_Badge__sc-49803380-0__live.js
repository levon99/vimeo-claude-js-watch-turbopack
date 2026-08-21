{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v3.default.span.withConfig({
    displayName: "CardBadge__Badge",
    componentId: "sc-49803380-0"
  })`
  display: inline-block;
  padding: ${(0, _v2.rem)(4)};
  font-size: ${_v0 => "sm" === _v0.size ? `${(0, _v2.rem)(10)}` : `${(0, _v2.rem)(14)}`};
  font-weight: 700;
  line-height: 1.2;
  border-radius: ${(0, _v2.rem)(4)};
  text-shadow: none;
  text-align: center;
  text-transform: capitalize;
  white-space: nowrap;
  letter-spacing: 0.02rem;
  vertical-align: middle;
  outline: none;
  text-decoration: none;
  color: inherit;
  ${function ({
    format: _v0
  }) {
    switch (_v0) {
      case "live":
        return _v3.css`
        color: ${_v4.bokehTheme.colors.white};
        background: ${_v4.bokehTheme.colors.red["500"]};
      `;
      case "live-inactive":
        return _v3.css`
        color: ${_v4.bokehTheme.colors.white};
        background-color: rgba(0, 0, 0, 0.7);
      `;
      case "upgrade":
        return _v3.css`
        color: ${_v4.bokehTheme.colors.white};
        background: linear-gradient(270deg, #12a3ab 0%, #18a57f 49.59%, #1fa84d 100%);
      `;
      default:
        return "";
    }
  }};
`;
  _v0.s(["CardBadge", 0, function ({
    format: _v0,
    forwardRef: _v1,
    ..._v2
  }) {
    return (0, _v1.jsx)(_v5, {
      format: _v0,
      ref: _v1,
      ..._v2
    });
  }]);
}