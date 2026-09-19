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
          bundle_price: _v0.bundlePrice ?? null
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_product_redeem_click", {
          product_id: _v0.productId
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_product_show_code_click", {
          product_id: _v0.productId
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_product_code_fetch_result", {
          product_id: _v0.productId,
          result: _v0.result,
          source: _v0.source
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_product_coming_soon_hover", {
          product_id: _v0.productId
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_welcome_card_displayed", {
          bundle_type: _v0.bundleType,
          periodicity: _v0.periodicity,
          currency: _v0.currency
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_welcome_card_cta_click", {
          bundle_type: _v0.bundleType,
          periodicity: _v0.periodicity,
          currency: _v0.currency
        });
      }, [_v0]);
    return {
      trackBundleLibraryPageDisplayed: _v1,
      trackBundleProductRedeemClick: _v2,
      trackBundleProductShowCodeClick: _v3,
      trackBundleProductCodeFetchResult: _v4,
      trackBundleProductComingSoonHover: _v5,
      trackBundleWelcomeCardDisplayed: _v6,
      trackBundleWelcomeCardCtaClick: _v7,
      trackBundlePromoTileDisplayed: (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_promo_tile_displayed", {
          surface: _v0.surface,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          has_subscription: _v0.hasSubscription
        });
      }, [_v0]),
      trackBundlePromoTileCtaClick: (0, _v1.useCallback)(_v0 => {
        _v0?.track("bundle_promo_tile_cta_click", {
          surface: _v0.surface,
          bundle_type: _v0.bundleType,
          bundle_price: _v0.bundlePrice,
          has_subscription: _v0.hasSubscription
        });
      }, [_v0])
    };
  }]);
}