{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useBillingTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("settings_billing_page_displayed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          b2b_banner: _v0?.b2bBanner ?? !1,
          b2c_card: _v0?.b2cCard ?? !1
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancel_plan_button_clicked", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancel_subscription_popup_displayed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          flow_variant: _v0?.flowVariant ?? null,
          is_uploader: _v0?.isUploader ?? null
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancel_subscription_popup_dismissed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("auto_renew_switched_off", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("auto_renew_switched_on", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_survey_answered", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          answer: _v0?.answer ?? null
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_full_text_reason_answered", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          answer: _v0?.answer ?? null
        });
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_book_call_button_clicked", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_offer_accepted", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_lapsing_clip_selection_displayed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_lapsing_clip_selection_proceeded", {
          tier: _v0.tier ?? null,
          periodicity: _v0.periodicity ?? null,
          is_over_limit: _v0.isOverLimit
        });
      }, [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_offer_dismissed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_lapsing_clip_selection_deselect_all_clicked", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_lapsing_clip_warning_displayed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_lapsing_clip_warning_back_clicked", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_lapsing_clip_warning_confirmed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_page_payment_method_dropdown_clicked", {});
      }, [_v0]),
      _v19 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_page_payment_method_clicked", {});
      }, [_v0]),
      _v20 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_page_past_purchases_clicked", {});
      }, [_v0]),
      _v21 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_page_change_plan_clicked", {});
      }, [_v0]),
      _v22 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_page_add_seats_clicked", {});
      }, [_v0]),
      _v23 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_page_repackaging_learn_more_clicked", {});
      }, [_v0]),
      _v24 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_b2b_modal_displayed", {});
      }, [_v0]),
      _v25 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_b2b_modal_dismissed", {});
      }, [_v0]),
      _v26 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_b2b_modal_explore_plans_clicked", {});
      }, [_v0]),
      _v27 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("settings_billing_b2b_modal_contact_support_clicked", {});
      }, [_v0]),
      _v28 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("repackaging_modal_displayed", {
          tier: _v0?.tier ?? null
        });
      }, [_v0]),
      _v29 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("repackaging_modal_dismissed", {
          tier: _v0?.tier ?? null
        });
      }, [_v0]),
      _v30 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("settings_billing_page_downgrade_clicked", {
          new_plan: _v0.newPlan,
          new_periodicity: _v0.newPeriodicity
        });
      }, [_v0]),
      _v31 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancel_subscription_dowgrade_modal_displayed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          offer_kind: _v0?.offerKind ?? null,
          target_tier: _v0?.targetTier ?? null,
          discount_percent: _v0?.discountPercent ?? null
        });
      }, [_v0]),
      _v32 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancel_subscription_dowgrade_clicked", {
          current_plan: _v0.currentPlan ?? null,
          new_plan: _v0.newPlan,
          new_periodicity: _v0.newPeriodicity,
          offer_kind: _v0.offerKind ?? null,
          discount_percent: _v0.discountPercent ?? null
        });
      }, [_v0]),
      _v33 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancel_subscription_dowgrade_skipped", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          offer_kind: _v0?.offerKind ?? null,
          target_tier: _v0?.targetTier ?? null
        });
      }, [_v0]),
      _v34 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_confirmed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          flow_variant: _v0?.flowVariant ?? null,
          had_downgrade_offer: _v0?.hadDowngradeOffer ?? !1
        });
      }, [_v0]),
      _v35 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_keep_plan_clicked", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          step: _v0?.step ?? null
        });
      }, [_v0]),
      _v36 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_back_clicked", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null,
          from_step: _v0?.fromStep ?? null
        });
      }, [_v0]),
      _v37 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_first_video_interstitial_displayed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v38 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_first_video_action_clicked", {
          tier: _v0.tier ?? null,
          periodicity: _v0.periodicity ?? null,
          action: _v0.action
        });
      }, [_v0]),
      _v39 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cancellation_first_video_skipped", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v40 = (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("account_menu_billing_clicked", {});
      }, [_v0]),
      _v41 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("update_payment_method_page_displayed", {
          payment_form_type: _v0.paymentFormType
        });
      }, [_v0]),
      _v42 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("update_payment_method_submitted", {
          success: _v0.success,
          payment_form_type: _v0.paymentFormType,
          error_message: _v0.success ? null : _v0.errorMessage ?? null
        });
      }, [_v0]),
      _v43 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("withdraw_button_clicked", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v44 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("withdraw_modal_open", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      _v45 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("withdraw_modal_closed", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]);
    return {
      trackAccountMenuBillingClicked: _v40,
      trackBillingPageDisplayed: _v1,
      trackCancelPlanButtonClicked: _v2,
      trackCancelSubscriptionPopupDisplayed: _v3,
      trackCancelSubscriptionPopupDismissed: _v4,
      trackAutoRenewSwitchedOff: _v5,
      trackAutoRenewSwitchedOn: _v6,
      trackCancellationSurveyAnswered: _v7,
      trackCancellationFullTextReasonAnswered: _v8,
      trackCancellationBookCallButtonClicked: _v9,
      trackCancellationLapsingClipSelectionDisplayed: _v11,
      trackCancellationLapsingClipSelectionProceeded: _v12,
      trackCancellationLapsingClipSelectionDeselectAllClicked: _v14,
      trackCancellationLapsingClipWarningDisplayed: _v15,
      trackCancellationLapsingClipWarningBackClicked: _v16,
      trackCancellationLapsingClipWarningConfirmed: _v17,
      trackCancellationOfferAccepted: _v10,
      trackCancellationOfferDismissed: _v13,
      trackBillingPagePaymentMethodClicked: _v19,
      trackBillingPagePaymentMethodDropdownClicked: _v18,
      trackBillingPagePastPurchasesClicked: _v20,
      trackBillingPageChangePlanClicked: _v21,
      trackBillingPageAddSeatsClicked: _v22,
      trackBillingPageRepackagingLearnMoreClicked: _v23,
      trackBillingB2bModalDisplayed: _v24,
      trackBillingB2bModalDismissed: _v25,
      trackBillingB2bModalExplorePlansClicked: _v26,
      trackBillingB2bModalContactSupportClicked: _v27,
      trackRepackagingModalDisplayed: _v28,
      trackRepackagingModalDismissed: _v29,
      trackBillingPageDowngradeClicked: _v30,
      trackCancelSubscriptionDowngradeModalDisplayed: _v31,
      trackCancelSubscriptionDowngradeClicked: _v32,
      trackCancelSubscriptionDowngradeSkipped: _v33,
      trackCancellationConfirmed: _v34,
      trackCancellationKeepPlanClicked: _v35,
      trackCancellationBackClicked: _v36,
      trackCancellationFirstVideoInterstitialDisplayed: _v37,
      trackCancellationFirstVideoActionClicked: _v38,
      trackCancellationFirstVideoSkipped: _v39,
      trackUpdatePaymentMethodPageDisplayed: _v41,
      trackUpdatePaymentMethodSubmitted: _v42,
      trackWithdrawButtonClicked: _v43,
      trackWithdrawModalOpen: _v44,
      trackWithdrawModalClosed: _v45,
      trackWithdrawRequested: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("withdraw_requested", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0]),
      trackWithdrawAbandoned: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("withdraw_abandoned", {
          tier: _v0?.tier ?? null,
          periodicity: _v0?.periodicity ?? null
        });
      }, [_v0])
    };
  }]);
}