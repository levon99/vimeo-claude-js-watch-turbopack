{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useGetCreator", 0, () => {
    let {
        resourceCreatorTeamUserUri: _v0,
        userId: _v1,
        user: _v2
      } = (0, _v4.useGlobalStore)((0, _v1.useShallow)(({
        resourceProps: _v0
      }) => ({
        resourceCreatorTeamUserUri: _v0.data.resourceCreatorTeamUserUri,
        userId: _v0.data.userId,
        user: _v0.data.user
      }))),
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v2.useGetUserTeamUser)(() => _v0 ? {
        select: ["user.name", "user.pictures", "user.uri", "email"],
        where: {
          userId: _v1,
          teamUserId: (0, _v5.getMemberIdFromUri)(_v0)
        }
      } : null);
    return (() => {
      if (_v4) return;
      if (_v3 && _v3.user) return {
        name: _v3.user.name,
        avatarSrc: _v3.user.pictures?.sizes[0].link || _v3.DEFAULT_AVATAR_SRC,
        email: _v3.email
      };
      let {
        name: _v0,
        email: _v1,
        pictures: _v2,
        uri: _v3
      } = _v2;
      return {
        name: _v0,
        email: _v1,
        avatarSrc: _v2?.sizes[0].link || _v3.DEFAULT_AVATAR_SRC,
        uri: _v3
      };
    })();
  }]);
}