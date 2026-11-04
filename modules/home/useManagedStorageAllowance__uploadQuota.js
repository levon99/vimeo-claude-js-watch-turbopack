{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ["B", "KB", "MB", "GB", "TB"];
  _v0.s(["useManagedStorageAllowance", 0, () => {
    let _v0 = (0, _v2.useViewer)(),
      _v1 = _v0?.user?.id ?? null,
      {
        data: _v2
      } = (0, _v1.useGetMe)(() => null === _v1 ? null : {
        select: ["uploadQuota"]
      }),
      _v3 = _v2?.uploadQuota?.restricted?.max ?? null,
      _v4 = null !== _v3 && _v3 > 0 ? (_v0 => {
        let _v1 = _v0,
          _v2 = 0;
        for (; _v1 >= 0 && _v2 < _v3.length - 1; _v2++) _v1 /= 0;
        return `${Math.round(_v1)} ${_v3[_v2]}`;
      })(_v3) : "";
    return {
      maxBytes: _v3,
      allowanceLabel: _v4
    };
  }]);
}