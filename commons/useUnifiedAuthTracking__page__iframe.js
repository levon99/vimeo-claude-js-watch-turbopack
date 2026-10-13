{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = () => void 0,
    _v5 = (_v0, ..._v1) => {
      try {
        return _v0.track(..._v1).catch(_v4), !0;
      } catch {
        return !1;
      }
    };
  _v0.s(["useUnifiedAuthTracking", 0, _v0 => {
    let _v1 = (0, _v3.usePico)(),
      _v2 = (0, _v1.useMemo)(() => null == _v0 ? null : (0, _v2.authAttributionPayload)(_v0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        if (null === _v1) return;
        let _v1 = "page" === _v0.surfaceType || "iframe" === _v0.surfaceType ? "immediate" : "scheduled";
        _v5(_v1, "auth_entry_triggered", (0, _v2.authAttributionPayload)(_v0), void 0, {
          delivery: _v1
        });
      }, [_v1]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v1 && _v5(_v1, "unified_auth_displayed", {
        ..._v2,
        unified_auth_flow_id: _v0.flowId,
        unified_auth_type: _v0.authType,
        unified_auth_viewer_auth_status: _v0.viewerAuthStatus,
        referrer_page: _v0.referrerPage,
        unified_auth_is_full_screen: _v0.isFullScreen,
        unified_auth_is_simplified_site: _v0.isSimplifiedSite
      }), [_v2, _v1]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v5(_v1, "unified_auth_button_clicked", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_step: _v0.step,
          unified_auth_element: _v0.element
        });
      }, [_v1]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v5(_v1, "unified_auth_email_resolved", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_resolved_step: _v0.resolvedStep
        });
      }, [_v1]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v5(_v1, "unified_auth_completed", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_method: _v0.method,
          unified_auth_outcome: _v0.outcome
        });
      }, [_v1]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v5(_v1, "unified_auth_error", {
          unified_auth_flow_id: _v0.flowId,
          unified_auth_step: _v0.step,
          unified_auth_error_reason: _v0.reason
        });
      }, [_v1]);
    return (0, _v1.useMemo)(() => ({
      trackAuthEntryTriggered: _v3,
      trackUnifiedAuthDisplayed: _v4,
      trackUnifiedAuthButtonClicked: _v5,
      trackUnifiedAuthEmailResolved: _v6,
      trackUnifiedAuthCompleted: _v7,
      trackUnifiedAuthError: _v8
    }), [_v3, _v4, _v5, _v6, _v7, _v8]);
  }]);
}