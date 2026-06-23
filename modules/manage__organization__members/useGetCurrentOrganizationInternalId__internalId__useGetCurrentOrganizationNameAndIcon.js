{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useGetCurrentOrganizationInternalId", 0, ({
    organizationUuid: _v0
  }) => (0, _v1.useGetOrganization)(() => _v0 ? {
    select: ["internalId"],
    where: {
      orgUuid: _v0
    }
  } : null, {
    revalidateOnFocus: !1,
    revalidateIfStale: !1
  }), "useGetCurrentOrganizationNameAndIcon", 0, ({
    organizationUuid: _v0
  }) => (0, _v1.useGetOrganization)(() => _v0 ? {
    select: ["displayName", "icon.uri", "icon.sizes.width", "icon.sizes.link"],
    where: {
      orgUuid: _v0
    }
  } : null, {
    revalidateOnFocus: !1,
    revalidateIfStale: !1
  }), "useGetCurrentOrganizationSeatDetails", 0, ({
    organizationUuid: _v0
  }) => (0, _v1.useGetOrganization)(() => _v0 ? {
    where: {
      orgUuid: _v0
    },
    select: ["seatDetails"]
  } : null, {
    revalidateOnFocus: !1,
    revalidateIfStale: !1
  }), "useGetCurrentOrganizationSize", 0, ({
    organizationUuid: _v0
  }) => (0, _v1.useGetOrganization)(() => _v0 ? {
    select: ["orgSize"],
    where: {
      orgUuid: _v0
    }
  } : null, {
    revalidateOnFocus: !1,
    revalidateIfStale: !1
  })]);
}