{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData),
    _v3 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipId),
    _v4 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipHash),
    _v5 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.manageLink),
    _v6 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.hasMandatoryEmailCapture ?? !1),
    _v7 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.isInitialized),
    _v8 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.connections.privateComments?.total),
    _v9 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.connections.comments?.total),
    _v10 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.link),
    _v11 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.duration),
    _v12 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.width),
    _v13 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.height),
    _v14 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.name);
  (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.description ?? void 0), (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.createdTime);
  let _v15 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.fields),
    _v16 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.parentProject),
    _v17 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.hasTextTracks),
    _v18 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.hasAudioTracks),
    _v19 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.type),
    _v20 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.showSvvTimecodedComments),
    _v21 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.embed?.uri),
    _v22 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.allowMultipleReviewLinks),
    _v23 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.customMetadata);
  _v0.s(["allowMultipleReviewLinksSelector", 0, _v22, "clipCustomMetadataSelector", 0, _v23, "clipDurationSelector", 0, _v11, "clipEmbedPresetUriSelector", 0, _v21, "clipHasAudioTracksSelector", 0, _v18, "clipHasMandatoryEmailCaptureSelector", 0, _v6, "clipHasTextTracksSelector", 0, _v17, "clipHashSelector", 0, _v4, "clipHeightSelector", 0, _v13, "clipIdSelector", 0, _v3, "clipIsInitializedSelector", 0, _v7, "clipLinkSelector", 0, _v10, "clipManageLinkSelector", 0, _v5, "clipNameSelector", 0, _v14, "clipParentProjectSelector", 0, _v16, "clipPrivateCommentsCountSelector", 0, _v8, "clipPublicCommentsCountSelector", 0, _v9, "clipSelector", 0, _v2, "clipTypeSelector", 0, _v19, "clipWidthSelector", 0, _v12, "fetchedClipFieldsSelector", 0, _v15, "showSvvTimecodedCommentsSelector", 0, _v20]);
}