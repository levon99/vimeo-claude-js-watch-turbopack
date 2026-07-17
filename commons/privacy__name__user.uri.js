{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ["privacy", "name", "user.uri", "user.uploadQuota.space.free", "user.uploadQuota.space.unit", "metadata.interactions.edit", "metadata.connections.versions.currentUri", "metadata.connections.versions.sequenceNumber", "metadata.connections.versions.totalIncludingDeleted", "user.capabilities.hasEnterprise", "parentProject.uri", "parentProject.metadata.interactions.canComment", "parentProject.metadata.interactions.delete.uri", "parentProject.metadata.interactions.edit.uri", "parentProject.metadata.interactions.view.uri", "contentRating", "reviewStatus", "descriptionHtml", "width", "height", "status"];
  _v0.s(["useVideoData", 0, (_v0, _v1) => {
    let _v2 = (0, _v2.useViewer)(),
      {
        data: _v3,
        isLoading: _v4,
        error: _v5
      } = (0, _v1.useGetUnlockedVideo)(() => {
        if (!_v2) return null;
        let _v0 = (0, _v4.getReviewPasswordHashFromCookie)(_v1);
        return {
          where: {
            videoId: _v0
          },
          query: {
            reviewId: _v1,
            password: _v0
          },
          select: _v5,
          headers: {
            Accept: _v3.API_ACCEPT_HEADER
          }
        };
      }, {
        revalidateOnFocus: !1
      }),
      _v6 = (0, _v4.idFromUri)(_v3?.metadata?.connections?.versions?.currentUri),
      _v7 = _v3?.metadata?.connections?.versions?.sequenceNumber ?? _v3.DEFAULT_VERSION_NUMBER,
      _v8 = _v3?.metadata?.connections?.versions?.totalIncludingDeleted ?? 0;
    return {
      videoData: _v3,
      videoDataLoading: _v4 || !_v3,
      user: _v3?.user,
      currentVersionId: _v6,
      hasEnterprise: !!_v3?.user?.capabilities?.hasEnterprise,
      error: _v5,
      sequenceNumber: _v7,
      totalVersionsCount: _v8
    };
  }]);
}