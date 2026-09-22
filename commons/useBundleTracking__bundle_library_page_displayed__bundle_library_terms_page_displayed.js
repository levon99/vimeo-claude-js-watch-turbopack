{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useBundleTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_library_page_displayed", {
          bundle_library_unlock_status: _v0.unlockStatus,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice ?? null,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_library_terms_page_displayed", {
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice ?? null
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(() => {
        _v0?.track("bundle_library_terms_page_redirected", {});
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_redeem_modal_open_click", {
          product_id: _v0.productId
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_redeem_modal_displayed", {
          product_id: _v0.productId,
          bundle_redeem_modal_code_available: _v0.codeAvailable,
          bundle_redeem_modal_has_picker: _v0.hasPicker
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_redeem_modal_close", {
          product_id: _v0.productId
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_redeem_platform_select", {
          product_id: _v0.productId,
          bundle_redeem_platform: _v0.platform
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_redeem_action_click", {
          product_id: _v0.productId,
          bundle_redeem_platform: _v0.platform,
          bundle_redeem_action: _v0.action
        });
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_redeem_store_click", {
          product_id: _v0.productId,
          bundle_redeem_platform: _v0.platform
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_product_code_fetch_result", {
          product_id: _v0.productId,
          result: _v0.result,
          source: _v0.source,
          ...(void 0 !== _v0.errorReason ? {
            error_reason: _v0.errorReason
          } : {}),
          ...(void 0 !== _v0.httpStatus ? {
            http_status: _v0.httpStatus
          } : {})
        });
      }, [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_product_coming_soon_hover", {
          product_id: _v0.productId
        });
      }, [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_welcome_card_displayed", {
          bundle_type: _v0.bundleType,
          periodicity: _v0.periodicity,
          currency: _v0.currency
        });
      }, [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_welcome_card_cta_click", {
          bundle_type: _v0.bundleType,
          periodicity: _v0.periodicity,
          currency: _v0.currency
        });
      }, [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_promo_tile_displayed", {
          surface: _v0.surface,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          has_subscription: _v0.hasSubscription,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_promo_tile_cta_click", {
          surface: _v0.surface,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          has_subscription: _v0.hasSubscription,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_promo_card_displayed", {
          surface: _v0.surface,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          unlock_status: _v0.unlockStatus,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_offer_displayed", {
          surface: _v0.surface,
          unit: _v0.unit,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_promo_card_cta_click", {
          surface: _v0.surface,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          unlock_status: _v0.unlockStatus,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_intro_modal_displayed", {
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_offer_toggled", {
          surface: _v0.surface,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          is_bundle_active: _v0.isBundleActive
        });
      }, [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_intro_modal_cta_click", {
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]),
      _v22 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_offer_link_click", {
          surface: _v0.surface,
          link: _v0.link
        });
      }, [_v0]),
      _v23 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_intro_modal_dismissed", {
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          dismiss_method: _v0.dismissMethod,
          experiment_key: _v0.experimentKey
        });
      }, [_v0]);
    return {
      trackBundleLibraryPageDisplayed: _v1,
      trackBundleLibraryTermsPageDisplayed: _v2,
      trackBundleLibraryTermsPageRedirected: _v3,
      trackBundleRedeemModalOpenClick: _v4,
      trackBundleRedeemModalDisplayed: _v5,
      trackBundleRedeemModalClose: _v6,
      trackBundleRedeemPlatformSelect: _v7,
      trackBundleRedeemActionClick: _v8,
      trackBundleRedeemStoreClick: _v9,
      trackBundleProductCodeFetchResult: _v10,
      trackBundleProductComingSoonHover: _v11,
      trackBundleWelcomeCardDisplayed: _v12,
      trackBundleWelcomeCardCtaClick: _v13,
      trackBundlePromoTileDisplayed: _v14,
      trackBundlePromoTileCtaClick: _v15,
      trackBundlePromoCardDisplayed: _v16,
      trackBundlePromoCardCtaClick: _v18,
      trackBundleIntroModalDisplayed: _v19,
      trackBundleIntroModalCtaClick: _v21,
      trackBundleIntroModalDismissed: _v23,
      trackBundleOfferDisplayed: _v17,
      trackBundleOfferToggled: _v20,
      trackBundleOfferLinkClick: _v22,
      trackBundleOfferCtaClick: (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_offer_cta_click", {
          surface: _v0.surface,
          cta: _v0.cta,
          bundle_included: _v0.bundleIncluded
        });
      }, [_v0]),
      trackBundleConverted: (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_converted", {
          conversion_path: _v0.conversionPath,
          bundle_type: _v0.bundleType,
          experiment_key: _v0.experimentKey
        });
      }, [_v0])
    };
  }]);
}