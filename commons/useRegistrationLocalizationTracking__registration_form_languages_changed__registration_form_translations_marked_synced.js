{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useRegistrationLocalizationTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("registration_form_languages_changed", {
          registration_form_entity_type: _v0.entityType,
          registration_form_entity_id: _v0.entityId,
          registration_form_added_languages: _v0.addedLanguages,
          registration_form_removed_languages: _v0.removedLanguages,
          registration_form_enabled_languages_count: _v0.enabledLanguagesCount
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("registration_form_translations_marked_synced", {
          registration_form_entity_type: _v0.entityType,
          registration_form_entity_id: _v0.entityId,
          registration_form_languages: _v0.languages,
          registration_form_language_count: _v0.languages.length
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("registration_form_ai_translation_completed", {
          registration_form_entity_type: _v0.entityType,
          registration_form_entity_id: _v0.entityId,
          registration_form_translation_trigger: _v0.trigger,
          registration_form_source_language: _v0.sourceLanguage,
          registration_form_target_languages: _v0.targetLanguages,
          registration_form_target_language_count: _v0.targetLanguages.length,
          registration_form_success: _v0.success,
          registration_form_failed_language_count: _v0.failedLanguageCount
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("registration_form_saved", {
          registration_form_entity_type: _v0.entityType,
          registration_form_entity_id: _v0.entityId,
          registration_form_save_action: _v0.action,
          registration_form_enabled_languages_count: _v0.enabledLanguagesCount,
          registration_form_has_unsynced_languages: _v0.hasUnsyncedLanguages
        });
      }, [_v0]);
    return {
      trackRegistrationFormLanguagesChanged: _v1,
      trackRegistrationFormTranslationsMarkedSynced: _v2,
      trackRegistrationFormAiTranslationCompleted: _v3,
      trackRegistrationFormSaved: _v4,
      trackRegistrationFormMainLanguageChanged: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("registration_form_main_language_changed", {
          registration_form_entity_type: _v0.entityType,
          registration_form_entity_id: _v0.entityId,
          registration_form_previous_main_language: _v0.previousMainLanguage,
          registration_form_main_language: _v0.mainLanguage,
          registration_form_enabled_languages_count: _v0.enabledLanguagesCount
        });
      }, [_v0]),
      trackRegistrationFormLanguageChanged: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("registration_form_language_changed", {
          registration_form_entity_type: _v0.entityType,
          registration_form_entity_id: _v0.entityId,
          registration_form_previous_language: _v0.previousLanguage,
          registration_form_language: _v0.language,
          registration_form_detected_language: _v0.detectedLanguage,
          registration_form_available_languages: _v0.availableLanguages,
          registration_form_available_language_count: _v0.availableLanguages.length,
          registration_form_is_main_language: _v0.isMainLanguage,
          registration_form_language_surface: _v0.surface
        });
      }, [_v0])
    };
  }]);
}