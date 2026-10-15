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
    _v13 = _v0.i(0);
  _v0.s(["ReportFlowEmbed", 0, ({
    report: _v0,
    onDone: _v1,
    doneLabel: _v2,
    headerAction: _v3,
    footerAction: _v4,
    onLoadError: _v5
  }) => {
    let {
        externalHandoffUrl: _v6,
        error: _v7
      } = _v0,
      _v8 = (0, _v2.useRef)(!1);
    return ((0, _v2.useEffect)(() => {
      void 0 === _v7 || _v8.current || (_v8.current = !0, _v5?.());
    }, [_v7, _v5]), "confirmation" === _v0.step) ? (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      justify: "center",
      minH: "100vh",
      w: "100%",
      maxW: "640px",
      mx: "auto",
      px: "300",
      py: "300",
      children: (0, _v1.jsx)(_v10.ConfirmationStep, {
        onDone: _v1,
        doneLabel: _v2
      })
    }) : (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      flex: "1",
      maxH: "100vh",
      w: "100%",
      maxW: "640px",
      mx: "auto",
      px: "300",
      py: "300",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        gap: "100",
        mb: "200",
        children: [_v0.canGoBack ? (0, _v1.jsx)(_v6.IconButton, {
          "aria-label": (0, _v11.backLabel)(),
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v9.ArrowLeft, {}),
          onClick: _v0.onBack
        }) : null, (0, _v1.jsxs)(_v3.Box, {
          flex: "1",
          minW: "0",
          children: [(0, _v1.jsx)(_v5.Header, {
            as: "h1",
            size: "md",
            children: _v0.title
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v0.subtitle
          })]
        }), _v3]
      }), (0, _v1.jsx)(_v7.Progress, {
        value: _v0.progress,
        size: "xs",
        mb: "200",
        sx: {
          "& > div": {
            transitionProperty: "width",
            transitionDuration: "300ms"
          }
        }
      }), (0, _v1.jsx)(_v3.Box, {
        flex: "1 1 0%",
        minH: "0",
        overflow: "auto",
        children: (0, _v1.jsx)(_v12.ReportBody, {
          isLoading: _v0.isLoading,
          hasData: _v0.hasData,
          error: _v0.error,
          step: _v0.step,
          currentOptions: _v0.currentOptions,
          selected: _v0.selected,
          onSelectNode: _v0.onSelectNode,
          onDone: _v1,
          commsOptOut: _v0.commsOptOut
        })
      }), _v0.showFooter ? (0, _v1.jsx)(_v3.Box, {
        pt: "300",
        children: (0, _v1.jsx)(_v13.ReportFooter, {
          submitLabel: _v0.submitLabel,
          submitDisabled: _v0.submitDisabled,
          onSubmit: () => {
            null === _v6 ? _v0.onSubmit() : window.location.assign(_v6);
          },
          help: _v0.help,
          action: _v4
        })
      }) : null]
    });
  }], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  _v0.s(["useReportEmbedCompletion", 0, _v0 => {
    let _v1 = (0, _v14.useRouter)();
    return _v0 => {
      (0, _v15.emitReportComplete)(_v0) || _v1.push(_v0);
    };
  }], 0);
}