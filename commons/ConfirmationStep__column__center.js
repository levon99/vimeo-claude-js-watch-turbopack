{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["ConfirmationStep", 0, ({
    onDone: _v0,
    doneLabel: _v1 = (0, _v7.doneLabel)()
  }) => (0, _v1.jsxs)(_v4.Flex, {
    direction: "column",
    align: "center",
    textAlign: "center",
    py: "300",
    children: [(0, _v1.jsx)(_v2.Box, {
      mb: "200",
      fontSize: "2rem",
      children: (0, _v1.jsx)(_v6.CircleCheckFilled, {})
    }), (0, _v1.jsx)(_v5.Text, {
      variant: "body-xl",
      fontWeight: "medium",
      mb: "100",
      children: (0, _v7.confirmationTitle)()
    }), (0, _v1.jsx)(_v5.Text, {
      variant: "body-md",
      color: "text-secondary",
      mb: "300",
      children: (0, _v7.confirmationBody)()
    }), (0, _v1.jsx)(_v3.Button, {
      variant: "primary",
      size: "md",
      onClick: _v0,
      children: _v1
    })]
  })]);
}