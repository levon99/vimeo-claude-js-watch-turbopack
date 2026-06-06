{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useIsRepackagedFree", 0, () => {
    let _v0 = (0, _v2.useViewer)(),
      _v1 = _v0?.user?.id,
      {
        data: _v2,
        isLoading: _v3
      } = (0, _v1.useGetUserSettingsBillingMembership)(() => _v1 ? {
        select: ["productId"],
        where: {
          userId: Number(_v1)
        }
      } : null);
    return {
      isRepackagedFree: _v2?.productId === 0,
      isLoading: _v3
    };
  }]);
}