{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useMigrationProgressWidget", 0, function (_v0) {
    let {
        migrationStarted: _v1,
        explicitlyCreatedTeam: _v2,
        hasData: _v3
      } = (0, _v4.useLibraryMigrationState)(_v0),
      _v4 = _v1 && !_v2,
      _v5 = _v1 && _v2,
      [_v6, _v7] = (0, _v1.useState)(!1),
      [_v8, _v9] = (0, _v1.useState)(!1),
      [_v10, _v11] = (0, _v1.useState)(!1),
      [_v12, _v13] = (0, _v1.useState)(!1),
      [_v14, _v15] = (0, _v1.useState)(!1),
      [_v16, _v17] = (0, _v1.useState)(null);
    _v4 !== _v14 && (_v15(_v4), _v4 && _v10 && _v11(!1)), _v3 && (null === _v16 ? _v17(_v5) : _v5 !== _v16 && (_v17(_v5), _v5 && (_v13(!0), _v9(!1)))), (0, _v1.useEffect)(() => {
      if (!_v4) return;
      let _v0 = window.setTimeout(() => _v11(!0), 0);
      return () => window.clearTimeout(_v0);
    }, [_v4]);
    let _v18 = _v4 || _v12 && !_v8,
      _v19 = _v4 ? _v10 ? "finalizing" : "setup" : "completed",
      {
        trackTeamLibraryMigrationWidgetDisplayed: _v20,
        trackTeamLibraryMigrationRunInBackgroundClicked: _v21,
        trackTeamLibraryMigrationOpenTeamLibraryClicked: _v22,
        trackTeamLibraryMigrationWidgetDismissed: _v23
      } = (0, _v2.useContentSpaceTracking)(),
      _v24 = (0, _v1.useRef)(!1);
    (0, _v3.usePicoEffect)(() => {
      if (_v18) {
        if ("completed" === _v19) {
          if (_v24.current) return;
          _v24.current = !0;
        }
        _v20({
          phase: _v19
        });
      }
    }, [_v18 ? _v19 : null]);
    let _v25 = (0, _v1.useCallback)(() => _v7(_v0 => !_v0), []),
      _v26 = (0, _v1.useCallback)(() => {
        _v21(), _v7(!0);
      }, [_v21]),
      _v27 = (0, _v1.useCallback)(() => {
        _v23({
          phase: _v19
        }), _v9(!0);
      }, [_v23, _v19]);
    return {
      visible: _v18,
      phase: _v19,
      collapsed: _v6,
      onToggleCollapse: _v25,
      onRunInBackground: _v26,
      onDismiss: _v27,
      onOpenTeamLibrary: (0, _v1.useCallback)(() => {
        _v22(), _v9(!0), window.location.assign("/library");
      }, [_v22])
    };
  }]);
}