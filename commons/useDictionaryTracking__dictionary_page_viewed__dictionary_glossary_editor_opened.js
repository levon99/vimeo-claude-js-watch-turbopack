{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDictionaryTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_page_viewed", {
          dictionary_management_surface: _v0.managementSurface
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_glossary_editor_opened", {
          dictionary_has_existing_terms: _v0.hasExistingTerms
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_glossary_saved", {
          dictionary_created_count: _v0.createdCount,
          dictionary_updated_count: _v0.updatedCount,
          dictionary_deleted_count: _v0.deletedCount,
          dictionary_reordered: _v0.reordered,
          dictionary_glossary_term_count: _v0.glossaryTermCount
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_glossary_csv_imported", {
          dictionary_import_mode: _v0.importMode,
          dictionary_imported_count: _v0.importedCount,
          dictionary_created_count: _v0.createdCount,
          dictionary_failed_count: _v0.failedCount
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_terms_translations_editor_opened", {
          dictionary_editor_mode: _v0.mode,
          dictionary_source_language: _v0.sourceLanguage
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_terms_translations_saved", {
          dictionary_created_count: _v0.createdCount,
          dictionary_updated_count: _v0.updatedCount,
          dictionary_deleted_count: _v0.deletedCount,
          dictionary_source_language: _v0.sourceLanguage,
          dictionary_target_language_count: _v0.targetLanguageCount
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_terms_translations_csv_imported", {
          dictionary_import_mode: _v0.importMode,
          dictionary_imported_count: _v0.importedCount,
          dictionary_created_count: _v0.createdCount,
          dictionary_failed_count: _v0.failedCount,
          dictionary_source_language_count: _v0.sourceLanguageCount
        });
      }, [_v0]);
    return {
      trackDictionaryCustomRulesSaved: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_custom_rules_saved", {
          dictionary_rule_character_count: _v0.ruleCharacterCount,
          dictionary_had_existing_rules: _v0.hadExistingRules
        });
      }, [_v0]),
      trackDictionaryGlossaryCsvImported: _v4,
      trackDictionaryGlossaryEditorOpened: _v2,
      trackDictionaryGlossarySaved: _v3,
      trackDictionaryPageViewed: _v1,
      trackDictionaryTermsTranslationsCsvImported: _v7,
      trackDictionaryTermsTranslationsEditorOpened: _v5,
      trackDictionaryTermsTranslationsSaved: _v6,
      trackDictionaryUseCustomDictionaryToggled: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("dictionary_use_custom_dictionary_toggled", {
          dictionary_enabled: _v0.enabled,
          dictionary_surface: _v0.surface
        });
      }, [_v0])
    };
  }]);
}