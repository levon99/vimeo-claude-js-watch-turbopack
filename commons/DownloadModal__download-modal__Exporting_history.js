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
  _v0.s(["DownloadModal", 0, function ({
    id: _v0 = (0, _v16.createDomName)("download-modal"),
    header: _v1,
    prefix: _v2,
    isOpen: _v3,
    history: _v4,
    onDownload: _v5,
    onClose: _v6
  }) {
    let _v7 = (0, _v12.useLogger)("DownloadModal"),
      _v8 = (0, _v13.useGctlConfig)(),
      [_v9, _v10] = (0, _v2.useState)(!1),
      [_v11, _v12] = (0, _v2.useState)(() => _v4.find(_v0 => !_v0.streamingOn)?.uri ?? ""),
      _v13 = (0, _v2.useMemo)(() => _v4.sort((_v0, _v1) => _v0.streamingOn && _v1.streamingOn ? _v1.streamingOn - _v0.streamingOn : 1).map(_v0 => ({
        label: _v0.streamingOn ? (0, _v18.exportDateFormatter)(navigator.language).format(0 * _v0.streamingOn) : _v15.T_CURRENT_SESSION,
        value: _v0.uri
      })), [_v4]),
      _v14 = (0, _v2.useMemo)(() => _v4.reduce((_v0, _v1) => (_v0[_v1.uri] = _v1, _v0), {}), [_v4]),
      _v15 = (0, _v2.useCallback)(({
        value: _v0
      }) => {
        _v12(_v0[0]);
      }, [_v12]),
      _v16 = (0, _v2.useCallback)(async () => {
        let _v0 = _v14[_v11];
        if (_v0) {
          _v7.info("Exporting history:", _v2, _v0), _v5(_v0), _v10(!0);
          try {
            let _v0 = await (0, _v14.downloadInteractionHistoryByConnection)({
                connection: _v0,
                gctlConfig: _v8
              }),
              _v1 = `${_v2 ? _v2 + "_" : ""}${new Date(_v0.streamingOn ? 0 * _v0.streamingOn : Date.now()).toLocaleString()}_${_v0.id}.csv`;
            (0, _v17.downloadFileByBlob)(_v1, _v0);
          } catch (_v0) {
            _v7.error("Failed to load history item:", _v2, _v0, _v0);
          } finally {
            _v10(!1);
          }
        } else _v7.error("Failed to download exported item - no selected value for:", _v11, _v14);
      }, [_v14, _v11, _v7, _v2, _v5, _v8]);
    return (0, _v2.useEffect)(() => {
      _v11 || _v12(_v4.find(_v0 => !_v0.streamingOn)?.uri ?? "");
    }, [_v4, _v11]), (0, _v1.jsxs)(_v4.Modal, {
      id: _v0,
      returnFocusOnClose: !1,
      isOpen: _v3,
      onClose: _v6,
      children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        width: (0, _v3.rem)(400),
        children: [(0, _v1.jsx)(_v6.ModalHeader, {
          id: (0, _v16.createDomName)(_v0, "header"),
          children: _v1
        }), (0, _v1.jsx)(_v7.ModalBody, {
          paddingTop: (0, _v3.rem)(4),
          children: (0, _v1.jsx)(_v11.Select, {
            id: (0, _v16.createDomName)(_v0, "select"),
            className: (0, _v16.createDomName)(_v0, "select"),
            size: "sm",
            items: _v13,
            value: _v11 ? [_v11] : void 0,
            onValueChange: _v15,
            children: _v0 => (0, _v1.jsx)(_v11.SelectItem, {
              className: (0, _v16.createDomName)(_v0, "select-option"),
              children: (0, _v1.jsx)(_v11.SelectItemText, {
                children: _v0.label
              })
            }, _v0.value)
          })
        }), (0, _v1.jsxs)(_v9.ModalFooter, {
          children: [(0, _v1.jsx)(_v10.Button, {
            id: (0, _v16.createDomName)(_v0, "cancel-button"),
            size: "md",
            variant: "secondary",
            onClick: _v6,
            children: _v15.T_CANCEL
          }), (0, _v1.jsx)(_v10.Button, {
            id: (0, _v16.createDomName)(_v0, "download-button"),
            size: "md",
            variant: "primary",
            isLoading: _v9,
            onClick: _v16,
            children: _v15.T_DOWNLOAD
          })]
        })]
      })]
    });
  }]);
}