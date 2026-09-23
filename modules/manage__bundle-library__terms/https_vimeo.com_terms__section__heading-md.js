{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v4.rem)(60),
    _v9 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v7.useViewer)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v5.DefaultNavigation, {
          hasSearch: !1,
          isSideNavActive: !1
        }), _v0, (0, _v1.jsx)(_v3.Box, {
          height: _v8,
          children: _v1 && (0, _v1.jsx)(_v6.EssentialFooter, {
            ..._v1,
            enableQuotaMenu: !1
          })
        })]
      });
    };
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = "https://vimeo.com/terms",
    _v17 = (0, _v4.rem)(800),
    _v18 = (0, _v4.rem)(16),
    _v19 = (0, _v4.rem)(40),
    _v20 = ({
      title: _v0,
      children: _v1
    }) => (0, _v1.jsxs)(_v3.Box, {
      as: "section",
      marginTop: _v19,
      children: [(0, _v1.jsx)(_v13.Header, {
        as: "h2",
        variant: "heading-md",
        marginBottom: _v18,
        children: _v0
      }), _v1]
    }),
    _v21 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v15.Text, {
      variant: "body-lg",
      marginBottom: _v18,
      children: _v0
    }),
    _v22 = () => (0, _v1.jsx)(_v12.Flex, {
      justifyContent: "center",
      paddingX: {
        base: (0, _v4.rem)(20),
        md: (0, _v4.rem)(40)
      },
      paddingY: (0, _v4.rem)(48),
      children: (0, _v1.jsxs)(_v3.Box, {
        width: "100%",
        maxWidth: _v17,
        children: [(0, _v1.jsx)(_v13.Header, {
          as: "h1",
          variant: "heading-lg",
          children: "Bundle Promotion Terms & Conditions"
        }), (0, _v1.jsx)(_v3.Box, {
          as: "section",
          marginTop: _v19,
          children: (0, _v1.jsxs)(_v21, {
            children: ["These Bundle Promotion Terms & Conditions apply to promotional access to selected products within our group’s portfolio (the ", (0, _v1.jsx)("strong", {
              children: "“Participating Products”"
            }), ") made available to eligible Vimeo subscribers (the ", (0, _v1.jsx)("strong", {
              children: "“Promotion”"
            }), ")."]
          })
        }), (0, _v1.jsxs)(_v20, {
          title: "1. Eligibility and Promotion",
          children: [(0, _v1.jsx)(_v21, {
            children: "The Promotion is available to eligible Vimeo subscribers and allows you to redeem promotional access to selected products."
          }), (0, _v1.jsx)(_v21, {
            children: "The Participating Products, applicable plans or tiers, and additional details are identified in the offer presented to you."
          }), (0, _v1.jsx)(_v21, {
            children: "If an additional fee applies to the Promotion, the applicable price and billing period will be shown to you before you purchase or activate the Promotion."
          })]
        }), (0, _v1.jsxs)(_v20, {
          title: "2. Redemption",
          children: [(0, _v1.jsx)(_v21, {
            children: "Once you activate the Promotion, you’ll receive a promotional code for each Participating Product available to you. You can use each code to activate your promotional access by following the relevant Participating Product’s standard account creation and activation process."
          }), (0, _v1.jsx)(_v21, {
            children: "Promotional codes cannot be applied to an existing paid subscription to the same Participating Product."
          }), (0, _v1.jsx)(_v21, {
            children: "Codes are personal, non-transferable, may only be used once and may not be sold or resold. They have no cash value and cannot be exchanged for cash or credit."
          })]
        }), (0, _v1.jsxs)(_v20, {
          title: "3. Duration of Promotional Access",
          children: [(0, _v1.jsx)(_v21, {
            children: "You can redeem your promotional codes at any time during your then-current Vimeo subscription term."
          }), (0, _v1.jsx)(_v21, {
            children: "For each code you redeem, your promotional access to the relevant Participating Product will run from the date of redemption until the end of that Vimeo subscription term. The duration of access may therefore vary depending on when you redeem each code and the time remaining on your eligible Vimeo subscription."
          }), (0, _v1.jsx)(_v21, {
            children: "Eligibility for the Promotion during your current subscription term does not guarantee that the Promotion will remain available for any subsequent renewal term."
          })]
        }), (0, _v1.jsxs)(_v20, {
          title: "4. Changes to the Promotion",
          children: [(0, _v1.jsx)(_v21, {
            children: "We may change, suspend or discontinue the Promotion, including by changing the Participating Products, plans or tiers made available through it."
          }), (0, _v1.jsx)(_v21, {
            children: "If we make changes or discontinue the Promotion after you have activated or purchased it, we’ll give you notice. Any promotional access you have already redeemed will continue until the end of your then-current Vimeo subscription term, subject to these Terms & Conditions."
          })]
        }), (0, _v1.jsxs)(_v20, {
          title: "5. Ending Your Vimeo Subscription",
          children: [(0, _v1.jsx)(_v21, {
            children: "Your promotional access is linked to your eligible Vimeo subscription. If that subscription ends, any promotional access you have redeemed will also end."
          }), (0, _v1.jsx)(_v21, {
            children: "You’ll then revert to the free version of the relevant Participating Product, where available, unless you separately purchase a subscription to that product."
          })]
        }), (0, _v1.jsxs)(_v20, {
          title: "6. Applicable Terms",
          children: [(0, _v1.jsxs)(_v21, {
            children: ["Your underlying Vimeo subscription remains governed by the applicable", " ", (0, _v1.jsx)(_v14.Link, {
              href: _v16,
              variant: "brand",
              isExternal: !0,
              children: "Vimeo Terms of Service"
            }), "."]
          }), (0, _v1.jsxs)(_v21, {
            children: ["These Bundle Promotion Terms & Conditions govern your participation in the Promotion.", " ", (0, _v1.jsx)("strong", {
              children: "By activating or purchasing the Promotion, you agree to be bound by these Bundle Promotion Terms & Conditions."
            })]
          }), (0, _v1.jsxs)(_v21, {
            children: ["If these Bundle Promotion Terms & Conditions conflict with the", " ", (0, _v1.jsx)(_v14.Link, {
              href: _v16,
              variant: "brand",
              isExternal: !0,
              children: "Vimeo Terms of Service"
            }), " ", "on a matter specifically relating to the Promotion, these Bundle Promotion Terms & Conditions will apply to that matter."]
          }), (0, _v1.jsx)(_v21, {
            children: "Your use of each Participating Product is separately governed by that product’s applicable Terms of Service and Privacy Policy, which will be presented to you as part of the activation process for your acknowledgement and acceptance."
          })]
        })]
      })
    });
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (0, _v4.rem)(64),
    _v28 = () => {
      let _v0 = (0, _v10.useRouter)(),
        {
          isLoadingResponse: _v1
        } = (0, _v25.useOrionSettings)(),
        _v2 = (0, _v23.useBundleOffer)(),
        {
          trackBundleLibraryTermsPageDisplayed: _v3,
          trackBundleLibraryTermsPageRedirected: _v4
        } = (0, _v26.useBundleTracking)(),
        _v5 = (0, _v11.useRef)(!1),
        _v6 = (0, _v11.useRef)(!1);
      return ((0, _v11.useEffect)(() => {
        if (!_v1) {
          if ("disabled" === _v2.status) {
            if (_v6.current) return;
            _v6.current = !0, _v4(), _v0.replace("/");
            return;
          }
          _v5.current || (_v5.current = !0, _v3({
            bundleType: _v2.bundleType,
            bundlePrice: _v2.price
          }));
        }
      }, [_v1, _v2, _v0, _v3, _v4]), _v1) ? (0, _v1.jsx)(_v12.Flex, {
        minHeight: `calc(100vh - ${_v27})`,
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v24.Spinner, {})
      }) : "disabled" === _v2.status ? null : (0, _v1.jsx)(_v22, {});
    },
    _v29 = () => (0, _v1.jsx)(_v28, {});
  (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v29.getLayout = _v0 => (0, _v1.jsx)(_v9, {
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v29], 0);
}