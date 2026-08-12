{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useAdoptionSettings", 0, function () {
    var _v0;
    let {
        settings: _v1,
        isLoadingResponse: _v2
      } = (0, _v4.useOrionSettings)(),
      _v3 = (0, _v3.useViewer)(),
      _v4 = (_v0 = _v3?.teamUser, (0, _v1.useMemo)(() => _v0?.accountType === _v2.AccountType.Enterprise, [_v0?.accountType]));
    return {
      maximizeVideoFileTransferAdoption: !_v4 && _v1.maximize_video_file_transfer_adoption,
      maximizeReviewAdoption: !_v4 && _v1.maximize_review_adoption,
      isLoadingResponse: _v2
    };
  }]);
}