{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["allowedPrivacies", "customMetadata", "manageLink", "name", "uri", "user.uri", "user.email", "user.name", "user.link", "user.pictures", "user.membership.type", "user.metadata.connections.teamMembers.total", "user.metadata.connections.teamMembers.invitesRemaining", "user.metadata.connections.portfolios.options", "parentProject.uri", "parentProject.isPrivateToUser", "password", "pictures", "privacy", "link", "customUrl", "disabledProperties", "embed.html", "embed.uri", "width", "height", "duration", "editSession.isMusicLicensed", "metadata.isScreenRecord", "contentRating", "metadata.connections.resourceCreatorTeamUser", "metadata.interactions.canUpdatePrivacyToPublic", "metadata.interactions.edit", "metadata.interactions.invite", "metadata.interactions.viewPrivacy", "usesDrm", "filesSize", "fileTransfer.link", "vod.id"];
  function _v5(_v0) {
    return _v0 ? {
      where: {
        videoId: _v0
      },
      select: _v4,
      headers: {
        Accept: "application/vnd.vimeo.*;version=3.4.2"
      }
    } : null;
  }
  _v0.s(["useGetVideoSharingData", 0, function () {
    let {
        clipId: _v0,
        clipHash: _v1
      } = (0, _v2.useGlobalStore)(({
        clip: _v0
      }) => _v0),
      _v2 = (0, _v3.getClipRequestId)(_v0, _v1);
    return (0, _v1.useGetUnlockedVideo)(() => _v5(_v2));
  }, "useGetVideoSharingDataForClip", 0, function (_v0, _v1) {
    let _v2 = _v0 ? (0, _v3.getClipRequestId)(String(_v0), _v1) : void 0;
    return (0, _v1.useGetUnlockedVideo)(() => _v5(_v2));
  }]);
}