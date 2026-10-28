{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => ({
      localization_resource_type: _v0.resourceType,
      localization_resource_id: _v0.resourceId
    }),
    _v4 = (0, _v1.createContext)(null);
  _v0.s(["LocalizationTrackingContext", 0, _v4, "useLocalizationResourceTracking", 0, () => {
    let _v0,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5 = (0, _v1.useContext)(_v4),
      {
        trackLocalizationMainLanguageChanged: _v6,
        trackLocalizationAddLanguagesClicked: _v7,
        trackLocalizationEditClicked: _v8,
        trackLocalizationPublishedToggled: _v9,
        trackLocalizationRemoveClicked: _v10,
        trackLocalizationDeleted: _v11
      } = (_v0 = (0, _v2.usePico)(), _v1 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("localization_main_language_changed", {
          ..._v3(_v0),
          localization_previous_locale: _v0.previousLocale,
          localization_locale: _v0.locale
        });
      }, [_v0]), _v2 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("localization_add_languages_clicked", {
          ..._v3(_v0),
          localization_available_locale_count: _v0.availableLocaleCount
        });
      }, [_v0]), _v3 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("localization_edit_clicked", {
          ..._v3(_v0),
          localization_locale: _v0.locale,
          localization_is_published: _v0.isPublished
        });
      }, [_v0]), _v4 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("localization_published_toggled", {
          ..._v3(_v0),
          localization_locale: _v0.locale,
          localization_new_status: _v0.newStatus
        });
      }, [_v0]), {
        trackLocalizationMainLanguageChanged: _v1,
        trackLocalizationAddLanguagesClicked: _v2,
        trackLocalizationEditClicked: _v3,
        trackLocalizationPublishedToggled: _v4,
        trackLocalizationRemoveClicked: (0, _v1.useCallback)(_v0 => {
          _v0?.track("localization_remove_clicked", {
            ..._v3(_v0),
            localization_locale: _v0.locale
          });
        }, [_v0]),
        trackLocalizationDeleted: (0, _v1.useCallback)(_v0 => {
          _v0?.track("localization_deleted", {
            ..._v3(_v0),
            localization_locale: _v0.locale
          });
        }, [_v0])
      });
    return (0, _v1.useMemo)(() => ({
      trackLocalizationMainLanguageChanged: _v0 => {
        null !== _v5 && _v6({
          ..._v0,
          ..._v5
        });
      },
      trackLocalizationAddLanguagesClicked: _v0 => {
        null !== _v5 && _v7({
          ..._v0,
          ..._v5
        });
      },
      trackLocalizationEditClicked: _v0 => {
        null !== _v5 && _v8({
          ..._v0,
          ..._v5
        });
      },
      trackLocalizationPublishedToggled: _v0 => {
        null !== _v5 && _v9({
          ..._v0,
          ..._v5
        });
      },
      trackLocalizationRemoveClicked: _v0 => {
        null !== _v5 && _v10({
          ..._v0,
          ..._v5
        });
      },
      trackLocalizationDeleted: _v0 => {
        null !== _v5 && _v11({
          ..._v0,
          ..._v5
        });
      }
    }), [_v5, _v6, _v7, _v8, _v9, _v10, _v11]);
  }], 0);
}