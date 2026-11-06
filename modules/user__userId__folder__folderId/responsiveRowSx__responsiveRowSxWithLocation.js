{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      [`@media screen and (min-width: ${_v2.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(32)} ${(0, _v1.rem)(150)} 8fr 2.5rem`
      },
      [`@media screen and (min-width: ${_v2.bokehTheme.breakpoints.lg})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(32)} ${(0, _v1.rem)(150)} 7.5fr 2fr 2.5rem`
      },
      [`@media screen and (min-width: ${_v3.HIDE_FILE_SIZE_COLUMN_BREAKPOINT})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(32)} ${(0, _v1.rem)(150)} 6fr 1.5fr 2fr 2.5rem`
      },
      [`@media screen and (min-width: ${_v2.bokehTheme.breakpoints.xl})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(32)} ${(0, _v1.rem)(150)} 4fr 2fr 1.5fr 2fr 2.5rem`
      },
      gridTemplateColumns: `${(0, _v1.rem)(150)} 8fr 2.5rem`
    },
    _v5 = {
      ..._v4,
      [`@media screen and (min-width: ${_v2.bokehTheme.breakpoints.xl})`]: {
        gridTemplateColumns: `${(0, _v1.rem)(32)} ${(0, _v1.rem)(150)} 4fr 2.5fr 1.5fr 0fr 2fr 2.5rem`
      }
    };
  _v0.s(["responsiveRowSx", 0, _v4, "responsiveRowSxWithLocation", 0, _v5]);
}