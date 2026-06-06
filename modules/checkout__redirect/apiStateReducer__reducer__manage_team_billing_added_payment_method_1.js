{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (_v0, {
      type: _v1,
      payload: _v2
    }) => {
      switch (_v1) {
        case _v6.ActionTypes.FETCH_PRODUCT:
          return {
            ..._v0,
            subscriptionProduct: _v2
          };
        case _v6.ActionTypes.ORDER_SUBMIT:
        case _v6.ActionTypes.ORDER_PREVIEW:
          return {
            ..._v0,
            order: _v2
          };
        case _v6.ActionTypes.PAYMENT_METHODS:
          return {
            ..._v0,
            paymentMethods: _v2
          };
        case _v6.ActionTypes.PAYMENT_ALERT:
        case _v6.ActionTypes.PAYMENT_ALERT:
          return {
            ..._v0,
            paymentAlert: _v2
          };
        case _v6.ActionTypes.TOGGLE_USER_ENTITY:
          return {
            ..._v0,
            isBusinessUserEntity: _v2
          };
        case _v6.ActionTypes.SELECT_PAYMENT_METHOD:
          return {
            ..._v0,
            selectedPaymentMethod: _v2
          };
        case _v6.ActionTypes.SET_BILLING_ADDRESS:
          return {
            ..._v0,
            billingAddress: _v2
          };
        case _v6.ActionTypes.SET_BILLING_PLAN:
          return {
            ..._v0,
            billingPlan: _v2
          };
        case _v6.ActionTypes.FETCH_SUBSCRIPTION:
          return {
            ..._v0,
            currentSubscription: _v2
          };
        case _v6.ActionTypes.SET_CHECKOUT_TYPE:
          return {
            ..._v0,
            checkoutType: _v2
          };
        case _v6.ActionTypes.TOOGLE_AUTORENEWAL_OPT_IN:
          return {
            ..._v0,
            autorenewalOptInRequirement: _v2
          };
        case _v6.ActionTypes.SET_CREATOR_PRODUCT_THUMBNAIL_URL:
          return {
            ..._v0,
            creatorProductThumbnailUrl: _v2
          };
        case _v6.ActionTypes.SET_CREATOR_PRODUCT_TITLE_PAGE_URL:
          return {
            ..._v0,
            creatorProductTitlePageUrl: _v2
          };
        case _v6.ActionTypes.TOGGLE_STORE_PAYMENT_METHOD:
          return {
            ..._v0,
            storePaymentMethod: _v2
          };
        case _v6.ActionTypes.TOGGLE_IS_ALT_ANNUAL_PLAN_SELECTED:
          return {
            ..._v0,
            isAltAnnualPlanSelected: _v2
          };
        default:
          return _v0;
      }
    },
    _v10 = (_v0, {
      type: _v1,
      payload: _v2
    }) => {
      switch (_v1) {
        case _v6.ApiActionTypes.ORDER_PREVIEW:
          return {
            ..._v0,
            orderPreview: _v2
          };
        case _v6.ApiActionTypes.SUBMIT_ORDER:
          return {
            ..._v0,
            submitOrder: _v2
          };
        default:
          return _v0;
      }
    };
  _v0.s(["apiStateReducer", 0, _v10, "reducer", 0, _v9], 0);
  let _v11 = ({
      paymentMethodId: _v0,
      billingAddress: _v1,
      vatId: _v2
    }) => {
      let [_v3, {
          data: _v4,
          loading: _v5,
          error: _v6
        }] = (0, _v7.useSubmitPaymentMethod)(),
        _v7 = _v2.default.useRef(!1);
      return _v4 && !_v5 && (window.location.href = "/manage/team/billing?added_payment_method=1"), (0, _v2.useEffect)(() => {
        _v3 && !_v7.current && (_v7.current = !0, _v3(_v0, _v6.PaymentFormTypes.TYPE_CREDIT_CARD, !1, _v2, _v1));
      }, [_v3, _v0, _v2, _v1]), (0, _v1.jsx)(_v3.Box, {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        children: (0, _v1.jsx)(_v4.Spinner, {})
      });
    },
    _v12 = ({
      checkoutState: _v0,
      paymentMethodId: _v1
    }) => {
      let [_v2, _v3] = (0, _v2.useReducer)(_v9, {
          ..._v8.initialState,
          ..._v0
        }),
        [_v4, _v5] = (0, _v2.useReducer)(_v10, _v8.initialApiState);
      return (0, _v1.jsx)(_v8.ApiStateContext.Provider, {
        value: {
          state: _v4,
          dispatch: _v5
        },
        children: (0, _v1.jsx)(_v8.StateContext.Provider, {
          value: {
            state: _v2,
            dispatch: _v3
          },
          children: (0, _v1.jsx)(_v13, {
            paymentMethodId: _v1
          })
        })
      });
    },
    _v13 = ({
      paymentMethodId: _v0
    }) => {
      let {
          state: {
            order: _v1
          }
        } = (0, _v8.useStateContext)(),
        [_v2] = (0, _v7.useSubmitOrder)(),
        _v3 = _v2.default.useRef(!1);
      return (0, _v2.useEffect)(() => {
        _v1 && !_v3.current && (_v3.current = !0, _v2({
          ..._v1,
          paymentMethodId: _v0
        }));
      }, [_v1, _v0, _v2]), (0, _v1.jsx)(_v3.Box, {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        children: (0, _v1.jsx)(_v4.Spinner, {})
      });
    };
  _v0.s(["RedirectContainer", 0, function ({
    redirectUrl: _v0,
    success: _v1,
    addedPaymentMethod: _v2,
    paymentMethodId: _v3
  }) {
    let [_v4] = (0, _v7.useTrackCheckoutFormAction)(),
      _v5 = sessionStorage.getItem(_v2 ? "addPmState" : "checkoutState");
    _v5 || (window.location.href = _v0), _v4(_v5.CHECKOUT_FORM_ACTION_TYPE_LAND, "redirect");
    let _v6 = JSON.parse(_v5 || "{}");
    return _v1 && _v3 ? _v2 ? (0, _v1.jsx)(_v11, {
      paymentMethodId: _v3,
      billingAddress: _v6?.billingAddress,
      vatId: _v6?.vatId
    }) : (0, _v1.jsx)(_v12, {
      checkoutState: _v6,
      paymentMethodId: _v3
    }) : (window.location.href = _v0, null);
  }], 0);
}