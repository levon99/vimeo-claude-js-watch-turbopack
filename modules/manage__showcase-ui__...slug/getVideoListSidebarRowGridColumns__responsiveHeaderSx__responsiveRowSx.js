{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      [`@media screen and (min-width: ${_v2.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(16)} ${(0, _v1.rem)(130)} 4fr 0.5fr`
      },
      [`@media screen and (min-width: ${_v2.bokehTheme.breakpoints.lg})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(16)} ${(0, _v1.rem)(130)} 4fr 1.5fr 2fr 0.5fr`
      }
    },
    _v4 = {
      [`@media screen and (min-width: ${_v2.bokehTheme.breakpoints.lg})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(162)} 4fr 1.5fr 2fr 0.5fr`
      }
    };
  _v0.s(["getVideoListSidebarRowGridColumns", 0, (_v0, _v1, _v2) => _v0 ? `${(0, _v1.rem)(16)} ${(0, _v1.rem)(72)} 2.5fr ${_v1 ? (0, _v1.rem)(20) : ""} ${(0, _v1.rem)(60)}` : `${(0, _v1.rem)(16)} ${(0, _v1.rem)(72)} 4fr 3fr ${_v2 ? (0, _v1.rem)(120) : (0, _v1.rem)(85)}`, "responsiveHeaderSx", 0, _v4, "responsiveRowSx", 0, _v3]);
}