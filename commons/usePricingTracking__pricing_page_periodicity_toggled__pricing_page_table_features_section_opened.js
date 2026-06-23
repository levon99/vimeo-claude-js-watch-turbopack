{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["usePricingTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("pricing_page_periodicity_toggled", {
          selected_periodicity: _v0.selectedPeriodicity
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("pricing_page_table_features_section_opened", {
          section: _v0.section
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("pricing_page_plan_selected", {
          plan: _v0.plan,
          periodicity: _v0.periodicity,
          free_trial: _v0.freeTrial
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("pricing_page_see_business_tiers_clicked", {
          entry_point: _v0.entryPoint
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("pricing_page_see_individual_tiers_clicked", {
          entry_point: _v0.entryPoint
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("user_scheduled_downgrade", {
          current_plan: _v0.currentPlan,
          new_plan: _v0.newPlan,
          new_periodicity: _v0.newPeriodicity
        });
      }, [_v0]);
    return {
      trackPricingPagePeriodicityToggled: _v1,
      trackPricingPageTableFeaturesSectionOpened: _v2,
      trackPricingPagePlanSelected: _v3,
      trackPricingPageSeeBusinessTiersClicked: _v4,
      trackPricingPageSeeIndividualTiersClicked: _v5,
      trackUserScheduledDowngrade: _v6,
      trackDowngradeModalDowngradeClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("downgrade_modal_downgrade_clicked", {
          current_plan: _v0.currentPlan,
          target_plan: _v0.targetPlan,
          target_periodicity: _v0.targetPeriodicity
        });
      }, [_v0]),
      trackDowngradeFailed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("downgrade_failed", {
          current_plan: _v0.currentPlan,
          target_plan: _v0.targetPlan,
          target_periodicity: _v0.targetPeriodicity,
          error_message: _v0.errorMessage ?? null
        });
      }, [_v0])
    };
  }]);
}