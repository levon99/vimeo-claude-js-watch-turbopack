{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (_v0, _v1) => _v1 ? `${_v0}:${_v1}` : _v0,
    _v6 = /^(http(s)?\:)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(localhost|(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?))(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
  _v0.s(["getClipRequestId", 0, _v5, "getHashFromVideoEmbedCode", 0, _v0 => {
    let _v1 = _v0.match(/(\?h=)\w{3,}[&,"]/);
    if (!_v1) return null;
    let [_v2] = _v1;
    return _v2.replace(/[?h=&"]/g, "");
  }, "getMemberIdFromUri", 0, _v0 => {
    let _v1 = _v0.split("/");
    return parseInt(_v1[_v1.length - 1]);
  }, "getUserIdFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/\/users\/(\d+)/);
    return _v1 ? parseInt(_v1[1], 10) : 0;
  }, "idFromUri", 0, _v0 => _v0 ? parseInt(_v0.split("/")[2], 10) : 0, "sanitizeUrl", 0, _v0 => _v0.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\s/g, "").split("/")[0].toLowerCase(), "validateUrl", 0, _v0 => {
    if (!_v0) return;
    let _v1 = _v0.trim();
    return _v1 && !_v1.match(/^(http(s)?\:)?\/\//) && (_v1 = `https://${_v1}`), _v1.length < 250 && _v6.test(_v1);
  }], 0);
  let _v7 = ["allowedPrivacies", "customMetadata", "manageLink", "name", "uri", "user.uri", "user.email", "user.name", "user.link", "user.pictures", "user.membership.type", "user.metadata.connections.teamMembers.total", "user.metadata.connections.teamMembers.invitesRemaining", "user.metadata.connections.portfolios.options", "parentProject.uri", "parentProject.isPrivateToUser", "password", "pictures", "privacy", "link", "customUrl", "disabledProperties", "embed.html", "embed.uri", "width", "height", "duration", "editSession.isMusicLicensed", "metadata.isScreenRecord", "contentRating", "metadata.connections.resourceCreatorTeamUser", "metadata.interactions.canUpdatePrivacyToPublic", "metadata.interactions.edit", "metadata.interactions.invite", "metadata.interactions.viewPrivacy", "usesDrm", "filesSize", "fileTransfer.link", "vod.id"];
  function _v8(_v0) {
    return _v0 ? {
      where: {
        videoId: _v0
      },
      select: _v7,
      headers: {
        Accept: "application/vnd.vimeo.*;version=3.4.2"
      }
    } : null;
  }
  function _v9() {
    let {
        clipId: _v0,
        clipHash: _v1
      } = (0, _v4.useGlobalStore)(({
        clip: _v0
      }) => _v0),
      _v2 = _v5(_v0, _v1);
    return (0, _v3.useGetUnlockedVideo)(() => _v8(_v2));
  }
  _v0.s(["useGetVideoSharingData", 0, _v9, "useGetVideoSharingDataForClip", 0, function (_v0, _v1) {
    let _v2 = _v0 ? _v5(String(_v0), _v1) : void 0;
    return (0, _v3.useGetUnlockedVideo)(() => _v8(_v2));
  }], 0), _v0.s(["useGetVideoOwnerCapabilities", 0, function () {
    let _v0 = (0, _v4.useGlobalStore)(({
        util: _v0
      }) => _v0.actions.setVideoOwnerCapabilitiesReady),
      _v1 = (0, _v4.useGlobalStore)(({
        util: _v0
      }) => _v0.isVideoOwnerCapabilitiesReady),
      {
        data: _v2
      } = _v9(),
      _v3 = _v2?.user?.uri,
      _v4 = (0, _v2.useCapability)(_v3 ? ["canAddCustomUrl", "canAllowDownloads", "canCreateEmbeddedPlaylists", "canCreateLiveEvents", "canCustomizeAlbums", "canHideVideos", "canLmsExport", "canSeeUpsellModalOnShare", "canUnlistVideo", "canUsePaymentsService", "contentSpaceEnabled", "hasEnterprise", "hasExtraEmbedOptions", "hasPerSeatPricingModelTeamMember", "hasPrivateModeOff", "hasRestrictedPrivacyOptions", "hasShowcasePasswordPrivacyUpsell", "hasShowcaseTeamPrivacy", "hasSunsetHideFromVimeo", "hasTeamInvite", "hasUpsellsForFlatRateTiers", "hasVideoInEmail", "hasVideoPasswordPrivacyUpsell", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks"] : [], _v3 ?? "skip");
    return (0, _v1.useEffect)(() => {
      _v4.ready && _v3 && _v0();
    }, [_v4.ready, _v3, _v0]), {
      isVideoOwnerCapabilitiesReady: !!_v3 && _v1,
      videoOwnerCapabilities: _v4.capabilities
    };
  }], 0);
}