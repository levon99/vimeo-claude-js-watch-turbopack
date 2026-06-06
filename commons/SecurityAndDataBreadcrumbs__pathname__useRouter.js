{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["SecurityAndDataBreadcrumbs", 0, () => {
    let {
        pathname: _v0
      } = (0, _v2.useRouter)(),
      _v1 = (0, _v8.getTranslations)(),
      _v2 = _v0.startsWith(_v7.ORGANIZATION_SETTINGS_ROUTES.SECURITY_AND_DATA),
      _v3 = (0, _v3.useMemo)(() => {
        switch (_v0) {
          case _v7.WORKSPACE_SETTINGS_ROUTES.PRIVACY_RESTRICTIONS:
          case _v7.ORGANIZATION_SETTINGS_ROUTES.PRIVACY_RESTRICTIONS:
            return _v1.PrivacyRestrictions;
          case _v7.WORKSPACE_SETTINGS_ROUTES.REVIEW_PAGE_SETTINGS:
          case _v7.ORGANIZATION_SETTINGS_ROUTES.REVIEW_PAGE_SETTINGS:
            return _v1.ReviewPageSettings;
          case _v7.WORKSPACE_SETTINGS_ROUTES.AUDIT_LOGS:
          case _v7.ORGANIZATION_SETTINGS_ROUTES.AUDIT_LOGS:
            return _v1.AuditLogs;
          case _v7.ORGANIZATION_SETTINGS_ROUTES.ALLOWLIST:
            return _v1.Allowlist;
          case _v7.ORGANIZATION_SETTINGS_ROUTES.SSO:
            return _v1.SingleSignOn;
          case _v7.WORKSPACE_SETTINGS_ROUTES.DATA_RETENTION:
          case _v7.WORKSPACE_SETTINGS_ROUTES.DATA_RETENTION_CREATE:
            return _v1.DataRetentionPolicies;
          case _v7.WORKSPACE_SETTINGS_ROUTES.CLIP_EXTENSION:
            return _v1.ClipExtension;
          case _v7.WORKSPACE_SETTINGS_ROUTES.HISTORY_AND_RECOVERY:
            return _v1.HistoryAndRecovery;
          case _v7.WORKSPACE_SETTINGS_ROUTES.LEGAL_HOLDS:
            return _v1.LegalHolds;
          default:
            return "";
        }
      }, [_v1, _v0]);
    return (0, _v1.jsxs)(_v4.Breadcrumb, {
      m: "lg",
      separator: (0, _v1.jsx)(_v6.ChevronRightSmall, {}),
      children: [(0, _v1.jsx)(_v4.BreadcrumbItem, {
        children: (0, _v1.jsx)(_v5.BreadcrumbLink, {
          href: _v2 ? _v7.ORGANIZATION_SETTINGS_ROUTES.SECURITY_AND_DATA : _v7.WORKSPACE_SETTINGS_ROUTES.SECURITY_AND_DATA,
          children: _v1.SecurityAndData
        })
      }), (0, _v1.jsx)(_v4.BreadcrumbItem, {
        isCurrentPage: !0,
        children: (0, _v1.jsx)(_v5.BreadcrumbLink, {
          children: _v3
        })
      })]
    });
  }], 0);
}