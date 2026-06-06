{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      infoStore: ["name", "description"],
      commonStore: ["privacy"],
      tvAppsStore: ["rokuProviderName", "rokuLanguage", "rokuGenres"],
      seoStore: ["seoTitle", "seoDescription", "seoAllowIndexed", "seoKeywords", "addSeoKeywords", "removeSeoKeywords"],
      appearanceStore: ["layout", "theme", "showNav", "showVimeoLogo", "customLogo", "pictures", "brandColor", "embedCustomLogo", "webCustomLogo", "embedBrandColor", "webBrandColor", "allowDownloads", "autoplay", "allowContinuousPlay", "loop", "allowShare", "isFeaturedContentLoading", "isCustomLogoLoading", "hasChosenThumbnail", "hasFeaturedContent", "featuredContentOptionSelected", "useCustomDomain", "hideNav", "hideVimeoLogo", "hideUpcoming", "showVideoDetails", "showVideoPlayerCards", "albumConfig", "thumbnailType"]
    },
    _v3 = (0, _v1.default)((_v0, _v1 = []) => Object.fromEntries(Object.entries(_v0).map(([_v0, _v1]) => [_v0, _v1.filter(_v0 => !_v1.includes(_v0))]))),
    _v4 = (0, _v1.default)(_v0 => {
      let _v1 = {};
      return Object.entries(_v0).forEach(([_v0, _v1]) => {
        _v1[`Showcase${_v0[0].toUpperCase() + _v0.slice(1)}ActionTypeEnum`] = _v1.reduce((_v0, _v1) => (_v0[[_v0.toUpperCase(), ...(_v0 => {
          let _v1 = [],
            _v2 = "";
          for (let _v0 of _v0) _v0 === _v0.toUpperCase() && _v2 ? (_v1.push(_v2), _v2 = _v0) : _v2 += _v0;
          return _v2 && _v1.push(_v2), _v1;
        })(_v1).map(_v0 => _v0.toUpperCase())].join("_")] = `${_v0}.${_v1}`, _v0), {});
      }), _v1;
    }),
    _v5 = _v3(_v2, ["isFeaturedContentLoading", "isCustomLogoLoading", "featuredContentOptionSelected", "useCustomDomain"]),
    _v6 = _v2.appearanceStore,
    _v7 = _v3({
      appearanceStore: _v2.appearanceStore
    }, ["layout", "showVimeoLogo", "hideVimeoLogo", "customLogo", "pictures", "brandColor", "embedCustomLogo", "webCustomLogo", "embedBrandColor", "webBrandColor", "allowContinuousPlay", "autoplay", "loop", "isFeaturedContentLoading", "isCustomLogoLoading", "hasChosenThumbnail", "featuredContentOptionSelected", "useCustomDomain", "showVideoDetails"]).appearanceStore,
    _v8 = _v3({
      appearanceStore: _v2.appearanceStore
    }, ["layout", "theme", "customLogo", "pictures", "brandColor", "embedCustomLogo", "webCustomLogo", "embedBrandColor", "webBrandColor", "allowDownloads", "loop", "allowShare", "isFeaturedContentLoading", "isCustomLogoLoading", "hasChosenThumbnail", "hasFeaturedContent", "featuredContentOptionSelected", "useCustomDomain", "showNav", "hideNav", "showVideoDetails", "showVideoPlayerCards", "albumConfig", "thumbnailType"]).appearanceStore,
    _v9 = _v4(_v2).ShowcaseSeoStoreActionTypeEnum,
    _v10 = _v4(_v2).ShowcaseInfoStoreActionTypeEnum,
    _v11 = _v4(_v2).ShowcaseCommonStoreActionTypeEnum,
    _v12 = _v4(_v2).ShowcaseTvAppsStoreActionTypeEnum,
    _v13 = _v4(_v2).ShowcaseAppearanceStoreActionTypeEnum;
  _v0.s(["AppearanceStoreFields", 0, _v6, "GridDisabledFields", 0, _v8, "PlaylistDisabledFields", 0, _v7, "ShowcaseAppearanceActionTypeEnum", 0, _v13, "ShowcaseCommonActionTypeEnum", 0, _v11, "ShowcaseInfoActionTypeEnum", 0, _v10, "ShowcaseSeoActionTypeEnum", 0, _v9, "ShowcaseTVAppsActionTypeEnum", 0, _v12, "fieldsToTrack", 0, _v5]);
}