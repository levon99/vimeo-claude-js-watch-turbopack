{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useUserTeamMembers", 0, _v0 => {
    let _v1 = (0, _v4.useViewer)(),
      {
        data: _v2,
        error: _v3,
        size: _v4,
        setSize: _v5
      } = (0, _v2.useGetUserTeammembersInfinite)(() => _v1?.user ? {
        where: {
          userId: _v1?.teamUser?.ownerId || _v1?.user?.id
        },
        query: {
          perPage: 25,
          sort: "name",
          query: _v0 || ""
        },
        select: ["active", "user.name", "user.pictures.sizes", "user.uri"]
      } : null),
      {
        isDone: _v6,
        isLoadingMore: _v7,
        isLoadingInitialData: _v8
      } = (0, _v3.getInfiniteRequestLoadingState)({
        data: _v2,
        error: _v3,
        size: _v4,
        itemsPerPage: 25
      });
    return {
      users: (0, _v1.useMemo)(() => {
        let _v0 = new Set(),
          _v1 = [];
        return _v2 && _v2.forEach(_v0 => {
          _v0?.data?.forEach(_v0 => {
            let _v1 = _v0?.user?.uri?.split("/")?.pop(),
              _v2 = _v0?.active,
              _v3 = !!_v0?.user?.name && _v0?.user?.name.length > 0,
              _v4 = !!(_v1 && _v0.has(_v1)),
              _v5 = _v0?.user?.pictures?.sizes?.[0]?.link ?? "";
            _v1 && _v2 && _v3 && !_v4 && (_v0.add(_v1), _v1.push({
              name: _v0?.user?.name || "",
              userId: _v1,
              avatarLink: _v5
            }));
          });
        }), _v1;
      }, [_v2]),
      error: _v3,
      isLoadingMore: _v7,
      isLoadingInitialData: _v8,
      isDone: _v6,
      setSize: _v5,
      size: _v4
    };
  }]);
}