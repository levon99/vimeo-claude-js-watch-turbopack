{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = _v0 => (0, _v1.jsx)(_v8.Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ..._v0,
    children: _v0.children
  });
  _v0.s(["PurchaseSeatsModal", 0, _v0 => {
    let [_v1, _v2] = (0, _v2.useState)(!0),
      {
        triggeredFrom: _v3,
        analyticsData: _v4
      } = _v0;
    return (0, _v2.useEffect)(() => {
      if (_v4 && _v4.teamInfo && _v3) {
        let {
          teamInfo: _v0,
          folderId: _v1,
          clipId: _v2,
          subscriptionType: _v3,
          planType: _v4,
          isTrial: _v5
        } = _v4;
        (0, _v6.purchaseSeatEvents)(_v0).purchaseSeatsTriggeredEvent({
          feature: (0, _v7.getEventFeature)(_v3),
          location: _v5.EVENT_LOCATION[_v3],
          folder_id: _v1,
          clip_id: _v2,
          subscription_type: _v3,
          plan_type: _v4,
          is_trial: _v5
        });
      }
    }, []), (0, _v1.jsxs)(_v3.Modal, {
      isOpen: _v0.isActive,
      onClose: _v0.onClose,
      children: [(_v0.hasScreen ?? !0) && (0, _v1.jsx)(_v4.ModalOverlay, {}), (({
        analyticsData: _v0,
        canUsePaymentsService: _v1,
        initSeatsPurchase: _v2 = 1,
        isTrial: _v3,
        maxSeatsPurchase: _v4 = 60,
        minSeatsPurchase: _v5 = 1,
        onCancel: _v6,
        onClose: _v7,
        onPurchaseFailure: _v8 = () => null,
        onPurchaseSuccess: _v9 = () => null,
        ownerId: _v10,
        productId: _v11,
        setBackdropCloseActive: _v12,
        triggeredFrom: _v13,
        userId: _v14
      }) => {
        var _v15;
        let _v16,
          _v17 = {
            [_v5.PURCHASE_TRIGGERED_FROM.BILLING_PAGE_ADD_SEATS]: _v3 ? _v21.default.AddSeats : _v21.default.CompletePurchase,
            [_v5.PURCHASE_TRIGGERED_FROM.INVITE_MODAL]: _v3 ? _v21.default.AddInvite : _v21.default.PurchaseInvite,
            [_v5.PURCHASE_TRIGGERED_FROM.RESOURCE_SHARE_MODAL]: _v3 ? _v21.default.AddInvite : _v21.default.PurchaseInvite,
            [_v5.PURCHASE_TRIGGERED_FROM.FOLDER_SHARE_MODAL]: _v3 ? _v21.default.AddInvite : _v21.default.PurchaseInvite,
            [_v5.PURCHASE_TRIGGERED_FROM.VIDEO_SHARE_MODAL]: _v3 ? _v21.default.AddInvite : _v21.default.PurchaseInvite,
            [_v5.PURCHASE_TRIGGERED_FROM.ROLE_CHANGE_MENU]: _v3 ? _v21.default.AddSeats : _v21.default.CompletePurchase,
            [_v5.PURCHASE_TRIGGERED_FROM.UPSELL_BANNER]: _v3 ? _v21.default.AddSeats : _v21.default.CompletePurchase,
            [_v5.PURCHASE_TRIGGERED_FROM.ONBOARDING_INVITES]: _v3 ? _v21.default.AddInvite : _v21.default.PurchaseInvite
          },
          _v18 = {
            [_v5.PURCHASE_TRIGGERED_FROM.ONBOARDING_INVITES]: _v21.default.InvitesViewersFree
          },
          _v19 = _v0?.teamInfo,
          _v20 = _v19?.seatDetails,
          _v21 = _v20?.additionalPurchasedCount || 0,
          _v22 = _v20?.basePlanCount || 1,
          _v23 = _v0 && _v0?.planTier ? _v5.tiers[_v0?.planTier] : "",
          [_v24, _v25] = (0, _v2.useState)(_v2),
          [_v26, _v27] = (0, _v2.useState)(null),
          [_v28, _v29] = (0, _v2.useState)({
            increase: 0,
            decrease: 0
          }),
          {
            additionalSeatPrice: _v30,
            basePlanPrice: _v31,
            billingPeriod: _v32,
            billingPlanId: _v33,
            currency: _v34,
            endDate: _v35,
            hasAutoRenew: _v36,
            isExpired: _v37,
            isPayPal: _v38,
            paymentInUse: _v39,
            paymentMethods: _v40,
            paymentMethodsData: _v41,
            paymentMethodsError: _v42,
            paymentMethodsLoading: _v43,
            pricePerSeat: _v44,
            seatCount: _v45,
            setPaymentInUse: _v46,
            subscriptionId: _v47,
            subtotalWithCurrencyPerSeat: _v48
          } = (0, _v23.default)({
            ownerId: _v10,
            canUsePaymentsService: _v1,
            canFetchPaymentMethods: !0
          }),
          {
            pricingQuoteData: _v49,
            quoteError: _v50,
            isQuoteLoading: _v51
          } = (0, _v22.default)({
            billingPlanId: _v33,
            canUsePaymentsService: _v1,
            currency: _v34,
            numberOfSeats: _v24,
            ownerId: _v10,
            pricePerSeat: _v44,
            productId: _v11,
            subscriptionId: _v47
          }),
          {
            capturePaymentCallCount: _v52 = 0,
            capturePaymentError: _v53,
            capturePaymentLoading: _v54,
            handleCapturePayment: _v55,
            paymentData: _v56
          } = (0, _v24.default)({
            billingPlanId: _v33,
            canUsePaymentsService: _v1,
            numberOfSeats: _v24,
            ownerId: _v10,
            paymentInUse: _v39,
            productId: _v11,
            subscriptionId: _v47
          });
        (0, _v2.useEffect)(() => {
          _v50 ? _v27(_v5.NOTICE_TYPES.BILLING_FETCH_FAILED) : _v53 ? _v27(_v5.NOTICE_TYPES.PAYMENT_FAILED) : _v27(null);
        }, [_v50, _v53]), (0, _v2.useEffect)(() => {
          if (!_v54 && _v52 > 0) if (_v53) {
            if (_v8(), _v0 && _v0.teamInfo && _v13) {
              let {
                teamInfo: _v0
              } = _v0;
              (0, _v6.purchaseSeatEvents)(_v0).purchaseSeatsFailure({
                feature: (0, _v7.getEventFeature)(_v13),
                location: _v5.EVENT_LOCATION[_v13],
                failure_reason: _v5.PURCHASE_FAILURE_REASON.UNKNOWN
              });
            }
          } else _v56?.paypalRedirectUrl ? (_v58(), _v59(), window.location.href = _v56.paypalRedirectUrl) : (_v9(_v24), _v58(), _v59(), _v57());
        }, [_v52, _v54, _v53]), (0, _v2.useEffect)(() => {
          _v12(!_v54);
        }, [_v54]);
        let _v57 = () => {
            if (_v0 && _v0.teamInfo && _v13) {
              let {
                clipId: _v0,
                folderId: _v1,
                isTrial: _v2,
                planType: _v3,
                subscriptionType: _v4,
                teamInfo: _v5
              } = _v0;
              (0, _v6.purchaseSeatEvents)(_v5).trackSeatCountUpdation({
                feature: (0, _v7.getEventFeature)(_v13),
                location: _v5.EVENT_LOCATION[_v13],
                increase_seat_count: _v28.increase,
                decrease_seat_count: _v28.decrease,
                subscription_type: _v4,
                folder_id: _v1,
                clip_id: _v0,
                plan_type: _v3,
                is_trial: _v2
              });
            }
            _v7();
          },
          _v58 = () => {
            if (_v0 && _v0.teamInfo && _v13) {
              let {
                teamInfo: _v0,
                priorSeats: _v1,
                folderId: _v2,
                clipId: _v3,
                subscriptionType: _v4,
                planType: _v5,
                isTrial: _v6
              } = _v0;
              (0, _v6.purchaseSeatEvents)(_v0).confirmPurchaseEvent({
                feature: (0, _v7.getEventFeature)(_v13),
                location: _v5.EVENT_LOCATION[_v13],
                seats_purchased: _v24,
                product_id: _v11,
                prior_seats: _v1,
                resulting_seats: _v1 + _v24,
                folder_id: _v2,
                clip_id: _v3,
                subscription_type: _v4,
                plan_type: _v5,
                is_trial: _v6
              });
              let _v7 = _v56?.order?.orderId ?? null;
              "string" == typeof _v7 && (0, _v6.purchaseSeatEvents)(_v0).trackCompletedOrder(_v7);
            }
          },
          _v59 = () => {
            let _v0,
              _v1 = ((_v0 = window)._gtm = _v0._gtm || [], _v0._gtm),
              _v2 = JSON.parse(_v56?.gtmData ?? "{}");
            _v2.page_type = "Settings", _v1.push(_v2);
          },
          _v60 = _v49 ? _v49.subTotalDisplay : "--",
          _v61 = _v49 ? _v49.estimatedTaxDisplay : "--",
          _v62 = _v49 ? _v49?.proration?.amount.match(/(\d|\.|\,)+/) : null,
          _v63 = _v49 ? `-${_v49?.proration?.amountDisplay}` : "--",
          _v64 = _v49 ? _v49.totalPriceDisplay : "--",
          _v65 = new Date(String(_v35)),
          _v66 = _v65.toLocaleDateString(navigator.language || "en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
          });
        _v65.setDate(_v65.getDate() + 1);
        let _v67 = (_v45 ?? 0) + _v24,
          _v68 = null != _v31 && null != _v30 ? _v31 + Math.max(0, _v67 - 1) * _v30 : _v67 * (_v44 ?? 0),
          _v69 = (0, _v7.formatAmountWithCurrency)(_v68, _v34 ?? "", 2),
          _v70 = (0, _v2.useRef)(null);
        return (0, _v1.jsxs)(_v13.ModalContent, {
          children: [(0, _v1.jsx)(_v14.ModalHeader, {
            children: (0, _v1.jsx)(_v9.Header, {
              as: "h5",
              size: "sm",
              color: "text-primary",
              children: _v21.default.PurchaseAdditionalSeats
            })
          }), (0, _v1.jsx)(_v15.ModalCloseButton, {
            onClick: _v57
          }), _v26 && (0, _v1.jsx)(_v25.default, {
            noticeType: _v26
          }), (0, _v1.jsxs)(_v12.ModalBody, {
            children: [(0, _v1.jsx)(_v28, {
              children: _v44 && _v49 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v8.Box, {
                  flexDirection: "column",
                  children: [(0, _v1.jsxs)(_v16.Text, {
                    variant: "body-md",
                    children: [_v21.default.NumberOfSeats, " "]
                  }), (0, _v1.jsx)(_v16.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: _v21.default.PricePerSeat((0, _v7.formatAmountWithCurrency)(_v44, _v34 ?? "", 0))
                  })]
                }), (0, _v1.jsxs)(_v18.NumberInput, {
                  maxW: (0, _v17.rem)(78),
                  defaultValue: _v24,
                  min: _v5,
                  max: _v4,
                  onChange: _v0 => _v25(parseInt(_v0)),
                  isDisabled: _v54,
                  children: [(0, _v1.jsx)(_v18.NumberInputField, {}), (0, _v1.jsxs)(_v18.NumberInputStepper, {
                    children: [(0, _v1.jsx)(_v18.NumberIncrementStepper, {
                      onClick: () => _v29({
                        ..._v28,
                        increase: _v28.increase + 1
                      })
                    }), (0, _v1.jsx)(_v18.NumberDecrementStepper, {
                      onClick: () => _v29({
                        ..._v28,
                        decrease: _v28.decrease + 1
                      })
                    })]
                  })]
                })]
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.LeftColumnLoader, {}), (0, _v1.jsx)(_v27.RightColumnLoader, {})]
              })
            }), (0, _v1.jsx)(_v28, {
              marginTop: (0, _v17.rem)(8),
              children: _v43 || _v51 || !_v49 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.LeftColumnLoader, {}), (0, _v1.jsx)(_v27.RightColumnLoader, {})]
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v8.Box, {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  verticalAlign: "middle",
                  gap: (0, _v17.rem)(8),
                  children: [(0, _v1.jsx)(_v16.Text, {
                    variant: "heading-xs",
                    children: _v21.default.PaymentMethod
                  }), (0, _v1.jsx)(_v8.Box, {
                    as: "span",
                    ref: _v70,
                    children: (0, _v1.jsx)(_v11.Tooltip, {
                      label: _v21.default.PaymentMethodTip,
                      placement: "bottom",
                      portalProps: {
                        containerRef: _v70
                      },
                      children: (0, _v1.jsx)(_v8.Box, {
                        display: "flex",
                        as: "span",
                        children: (0, _v1.jsx)(_v20.InfoCircle, {
                          h: (0, _v17.rem)(16),
                          w: (0, _v17.rem)(16),
                          color: "text-tertiary"
                        })
                      })
                    })
                  })]
                }), (_v15 = !!_v41, _v16 = (() => {
                  if (_v40) {
                    for (let _v0 = 0; _v0 < _v40?.length; _v0++) if (!(0, _v7.isPaymentExpired)(_v40[_v0])) return !1;
                  }
                  return !0;
                })(), _v15 && _v20 ? (0, _v1.jsx)(_v26.SelectPaymentMethod, {
                  activePaymentMethod: _v39,
                  edit: !1,
                  status: !0,
                  paymentMethods: _v40 ?? [],
                  onSelect: _v0 => {
                    let _v1 = _v40?.find(_v0 => (0, _v7.getIdFromUri)(_v0.uri) === _v0);
                    _v1 && _v46(_v1);
                  },
                  isOperationOngoing: !1,
                  trackAddPaymentMethod: () => {
                    _v0 && (0, _v6.purchaseSeatEvents)(_v0.teamInfo).trackBillingPageEvents(_v5.BILLING_EVENTS.ADD_PAYMENT_METHOD, {
                      location: "checkout_modal_dropdown"
                    });
                  },
                  trackOpenSelectDropdown: () => {
                    _v0 && (0, _v6.purchaseSeatEvents)(_v0.teamInfo).trackBillingPageEvents(_v5.BILLING_EVENTS.OPEN_CARD_DROPDOWN, {
                      location: "checkout_modal_dropdown"
                    });
                  },
                  hasPaymentExpired: _v37,
                  allPaymentMethodsExpired: _v16,
                  addNewPaymentMethod: !_v39
                }) : (0, _v1.jsx)(_v27.InfoTextTypeB, {
                  children: "--"
                }))]
              })
            }), (0, _v1.jsx)(_v28, {
              children: _v43 || _v51 || !_v49 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.LeftColumnLoader, {}), (0, _v1.jsx)(_v27.RightColumnLoader, {})]
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v27.FlexGrouping, {
                  children: [(0, _v1.jsx)(_v27.InfoTextTypeB, {
                    children: _v21.default.Subtotal
                  }), (0, _v1.jsx)(_v8.Box, {
                    ref: _v70,
                    children: (0, _v1.jsx)(_v11.Tooltip, {
                      label: _v21.default.SubtotalTip(_v48, _v32),
                      placement: "bottom",
                      portalProps: {
                        containerRef: _v70
                      },
                      children: (0, _v1.jsx)(_v27.StyledInfoButton, {
                        variant: "hyperminimal",
                        icon: (0, _v1.jsx)(_v19.CircleInfoSmall, {}),
                        iconPosition: "right",
                        size: "sm"
                      })
                    })
                  })]
                }), (0, _v1.jsx)(_v27.InfoTextTypeB, {
                  children: _v60
                })]
              })
            }), _v62 && !!parseFloat(_v62[0]) && (0, _v1.jsx)(_v28, {
              children: _v43 || _v51 || !_v49 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.LeftColumnLoader, {}), (0, _v1.jsx)(_v27.RightColumnLoader, {})]
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v27.FlexGrouping, {
                  children: [(0, _v1.jsx)(_v27.InfoTextTypeASuccess, {
                    children: _v21.default.BillingAdjustment
                  }), (0, _v1.jsx)(_v8.Box, {
                    ref: _v70,
                    children: (0, _v1.jsx)(_v11.Tooltip, {
                      label: _v21.default.BillingAdjustmentTip,
                      placement: "bottom",
                      portalProps: {
                        containerRef: _v70
                      },
                      children: (0, _v1.jsx)(_v27.StyledInfoButton, {
                        variant: "hyperminimal",
                        icon: (0, _v1.jsx)(_v19.CircleInfoSmall, {}),
                        iconPosition: "right",
                        size: "sm"
                      })
                    })
                  })]
                }), (0, _v1.jsx)(_v27.InfoTextTypeASuccess, {
                  children: _v63
                })]
              })
            }), (0, _v1.jsx)(_v28, {
              children: _v43 || _v51 || !_v49 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.LeftColumnLoader, {}), (0, _v1.jsx)(_v27.RightColumnLoader, {})]
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.InfoTextTypeB, {
                  children: _v21.default.Tax
                }), (0, _v1.jsx)(_v27.InfoTextTypeB, {
                  children: _v61
                })]
              })
            }), (0, _v1.jsx)(_v27.DividerMargin, {}), (0, _v1.jsx)(_v27.TotalDueWrapper, {
              children: (0, _v1.jsx)(_v28, {
                children: _v43 || _v51 || !_v49 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v3 ? (0, _v1.jsx)(_v27.LeftColumnLoaderNoMargin, {}) : (0, _v1.jsx)(_v27.LeftColumnLoader, {}), _v3 ? (0, _v1.jsx)(_v27.RightColumnLoaderNoMargin, {}) : (0, _v1.jsx)(_v27.RightColumnLoader, {})]
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v16.Text, {
                    variant: "heading-sm",
                    children: _v21.default.DueToday
                  }), _v3 ? (0, _v1.jsxs)("div", {
                    children: [(0, _v1.jsx)(_v16.Text, {
                      as: "s",
                      variant: "heading-sm",
                      children: _v60
                    }), (0, _v1.jsx)(_v16.Text, {
                      variant: "heading-sm",
                      children: _v64
                    })]
                  }) : (0, _v1.jsx)(_v16.Text, {
                    variant: "heading-sm",
                    children: _v64
                  })]
                })
              })
            }), _v3 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [!_v43 && _v49 && _v44 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.DividerMargin, {}), (0, _v1.jsx)("div", {
                  children: (0, _v1.jsx)(_v27.HeaderNotBolded, {
                    size: "7",
                    children: _v21.default.SubscriptionStartsOn((_v65.getMonth() + 1).toString().padStart(2, "0") + "/" + _v65.getDate().toString().padStart(2, "0") + "/" + _v65.getFullYear().toString().substring(2))
                  })
                }), (0, _v1.jsxs)(_v28, {
                  children: [(0, _v1.jsx)(_v27.HeaderNotBolded, {
                    size: "7",
                    children: _v21.default.BasePlanPlusSeats(_v23, _v22)
                  }), (0, _v1.jsx)(_v27.HeaderNotBolded, {
                    size: "7",
                    children: _v48
                  })]
                }), (0, _v1.jsxs)(_v28, {
                  children: [(0, _v1.jsx)(_v27.HeaderNotBolded, {
                    size: "7",
                    children: _v21.default.AdditionalSeats(_v24 + _v21)
                  }), (0, _v1.jsxs)(_v27.HeaderNotBolded, {
                    size: "7",
                    children: ["+", " ", (0, _v7.formatAmountWithCurrency)((_v24 + _v21) * _v44, _v34 ?? "", 2)]
                  })]
                })]
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v27.LeftColumnLoader, {}), (0, _v1.jsx)(_v27.RightColumnLoader, {})]
              }), (0, _v1.jsx)(_v27.DividerMargin, {}), (0, _v1.jsx)(_v28, {
                marginBottom: (0, _v17.rem)(16),
                children: _v43 || _v51 || !_v49 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v27.DueAtSubscriptionLeftColumnLoader, {}), (0, _v1.jsx)(_v27.DueAtSubscriptionRightColumnLoader, {})]
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v9.Header, {
                    as: "h6",
                    size: "xs",
                    children: _v21.default.DueAtSubscriptionStart
                  }), (0, _v1.jsx)(_v9.Header, {
                    as: "h6",
                    size: "xs",
                    children: (0, _v7.formatAmountWithCurrency)(((_v45 ?? 0) + _v24) * (_v44 ?? 0), _v34 ?? "", 2)
                  })]
                })
              })]
            }), _v43 || _v51 || !_v49 ? (0, _v1.jsx)(_v1.Fragment, {
              children: (0, _v1.jsx)(_v27.Loader, {
                trial: _v3
              })
            }) : (0, _v1.jsxs)(_v27.AdditionalInfoContainer, {
              children: [(0, _v1.jsx)(_v16.Text, {
                marginTop: (0, _v17.rem)(16),
                marginBottom: (0, _v17.rem)(8),
                variant: "body-sm",
                color: "text-secondary",
                children: _v3 ? _v21.default.TermsConditionsTrial("/terms", "/privacy", _v69, _v66, _v32 ? "monthly" === _v32.toLowerCase() || "month" === _v32.toLowerCase() ? _v21.default.Month : _v21.default.Year : "", () => void 0, () => void 0) : _v36 ? _v21.default.TermsConditionsOptedIn("/terms", "/privacy", _v69, _v32 ? "monthly" === _v32.toLowerCase() || "month" === _v32.toLowerCase() ? _v21.default.Month : _v21.default.Year : "", () => void 0, () => void 0) : _v21.default.TermsConditionsOptedOut("/terms", "/privacy", _v69, () => void 0, () => void 0)
              }), _v3 ? (0, _v1.jsx)(_v16.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v21.default.TrialReceiptInfo
              }) : (0, _v1.jsx)(_v16.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v21.default.ReceiptInfo
              })]
            }), (0, _v1.jsx)(_v10.Button, {
              onClick: _v55,
              isDisabled: _v51 || !!_v50 || !!_v42 || _v54 || _v43 || _v37 || !_v39,
              isLoading: _v54,
              size: "md",
              type: "button",
              width: "100%",
              children: _v38 && !_v1 ? _v21.default.ContinueToPayPal : _v13 && _v17[_v13] ? _v17[_v13] : _v21.default.Cancel
            }), (0, _v1.jsx)(_v27.StyledCancelButton, {
              onClick: () => _v6 ? _v6() : _v57(),
              fluid: !0,
              size: "md",
              variant: "minimalTransparent",
              format: "basic",
              type: "button",
              disabled: _v54,
              children: _v13 && _v18[_v13] ? _v18[_v13] : _v21.default.Cancel
            }), _v38 && (0, _v1.jsx)(_v27.AdditionalInfoContainer, {
              children: (0, _v1.jsx)(_v27.InfoTextPrivacy, {
                children: _v3 ? _v21.default.PayPayTrialInfo : _v21.default.PayPayRedirctInfo
              })
            })]
          })]
        });
      })({
        ..._v0,
        setBackdropCloseActive: _v2
      })]
    });
  }], 0);
}