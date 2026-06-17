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
    _v9 = _v0.i(0);
  let _v10 = ({
    organizationInternalId: _v0
  }) => {
    let _v1 = (0, _v9.getTranslations)(),
      {
        data: _v2
      } = (0, _v7.useGetUser)(() => _v0 ? {
        where: {
          userId: _v0
        },
        select: ["metadata.connections.teamMembers.roles"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      });
    return _v0 && _v2 ? (0, _v1.jsx)(_v8.SingleSignOnPage, {
      scimAppWarning: _v1.OnlyTheOrganizationOwnerCanSetUpApiApps,
      userId: _v0,
      rolesInfo: _v2.metadata?.connections?.teamMembers?.roles
    }) : (0, _v1.jsx)(_v6.Center, {
      children: (0, _v1.jsx)(_v5.Spinner, {})
    });
  };
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = ({
    organizationInternalId: _v0
  }) => (0, _v1.jsxs)(_v2.VStack, {
    alignItems: "flex-start",
    gap: 0,
    children: [(0, _v1.jsx)(_v11.SecurityAndDataBreadcrumbs, {}), (0, _v1.jsx)(_v10, {
      organizationInternalId: _v0
    })]
  });
  (0, _v3.withPageSetup)(_v12.getOrgAndWspUuidServerSideProps, {
    requireLogin: !0
  }), _v13.getLayout = (_v0, _v1) => (0, _v4.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v13], 0);
}