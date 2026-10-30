{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useGetVideoOwnerCapabilities", 0, function () {
    let _v0 = (0, _v4.useGlobalStore)(({
        util: _v0
      }) => _v0.actions.setVideoOwnerCapabilitiesReady),
      _v1 = (0, _v4.useGlobalStore)(({
        util: _v0
      }) => _v0.isVideoOwnerCapabilitiesReady),
      {
        data: _v2
      } = (0, _v3.useGetVideoSharingData)(),
      _v3 = _v2?.user?.uri,
      _v4 = (0, _v2.useCapability)(_v3 ? ["canAddCustomUrl", "canAllowDownloads", "canCreateEmbeddedPlaylists", "canCreateLiveEvents", "canCustomizeAlbums", "canHideVideos", "canLmsExport", "canSeeUpsellModalOnShare", "canUnlistVideo", "canUsePaymentsService", "contentSpaceEnabled", "hasEnterprise", "hasExtraEmbedOptions", "hasPerSeatPricingModelTeamMember", "hasPrivateModeOff", "hasRestrictedPrivacyOptions", "hasShowcasePasswordPrivacyUpsell", "hasShowcaseTeamPrivacy", "hasSunsetHideFromVimeo", "hasTeamInvite", "hasUpsellsForFlatRateTiers", "hasVideoInEmail", "hasVideoPasswordPrivacyUpsell", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks"] : [], _v3 ?? "skip");
    return (0, _v1.useEffect)(() => {
      _v4.ready && _v3 && _v0();
    }, [_v4.ready, _v3, _v0]), {
      isVideoOwnerCapabilitiesReady: !!_v3 && _v1,
      videoOwnerCapabilities: _v4.capabilities
    };
  }]);
}