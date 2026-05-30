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
  }], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["NewBadge", 0, ({
    fontSize: _v0 = "body-xs"
  }) => (0, _v5.jsx)(_v6.Box, {
    as: "span",
    bg: "vimeoBlue.400",
    color: "black",
    borderRadius: (0, _v7.rem)(4),
    px: (0, _v7.rem)(6),
    py: (0, _v7.rem)(2),
    fontSize: _v0,
    fontWeight: "semibold",
    lineHeight: "1.2",
    children: (0, _v8.translate)({
      singular: "New",
      dictionary: {
        es: {
          singular: "Nuevo"
        },
        "de-DE": {
          singular: "Neu"
        },
        "fr-FR": {
          singular: "Nouveau"
        },
        "ja-JP": {
          singular: "新規作成"
        },
        "ko-KR": {
          singular: "신규"
        },
        "pt-BR": {
          singular: "Novo"
        },
        "zh-CN": {
          singular: "新"
        }
      }
    })
  })], 0);
}