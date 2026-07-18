{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["disabledProperties", "download.height", "download.link", "download.publicName", "download.quality", "download.sizeShort", "download.type", "download.width", "download.videoFileId", "download.size", "editSession.vsid", "editSession.isEditedByTve", "editSession.isMaxResolution", "editSession.status", "editSession.resultVideoHash", "metadata.interactions.hasRestrictedPrivacyOptions.uri", "name", "parentProject.uri", "parentProject.isPrivateToUser", "privacy.view", "privacy.embed", "contentRating", "duration", "status", "user.uri", "vod.id", "link", "usesDrm"];
  _v0.s(["useGetShareMenuVideoData", 0, _v0 => (0, _v1.useGetVideo)(() => _v0 ? {
    where: {
      videoId: _v0
    },
    select: _v2,
    headers: {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    }
  } : null)]);
}