{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata),
    _v4 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.isVimeoCreate),
    _v5 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.aiContent),
    _v6 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.interactions),
    _v7 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.connections?.versions?.total || 0),
    _v8 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.connections.versions?.currentUri),
    _v9 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => (0, _v2.versionIdFromUri)(_v0.clipData.metadata?.connections.versions?.currentUri ?? "")),
    _v10 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.connections.versions?.latestIncompleteVersion),
    _v11 = (0, _v1.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.metadata?.connections.versions?.latestIncompleteVersion ?? _v0.clipData.metadata?.connections.versions?.currentUri);
  _v0.s(["clipMetadataAiContentSelector", 0, _v5, "clipMetadataConnectionsVersionIdSelector", 0, _v9, "clipMetadataConnectionsVersionUriSelector", 0, _v8, "clipMetadataConnectionsVersionsTotalSelector", 0, _v7, "clipMetadataConnectionslatestVersionUriSelector", 0, _v11, "clipMetadataInteractionsSelector", 0, _v6, "clipMetadataIsVimeoCreateSelector", 0, _v4, "clipMetadataLatestIncompleteVersionSelector", 0, _v10, "clipMetadataSelector", 0, _v3]);
}