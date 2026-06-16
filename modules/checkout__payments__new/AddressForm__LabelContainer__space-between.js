{
  "use strict";

  _v0.s(["AddressForm", () => _v24, "LabelContainer", () => _v25], 0);
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
    _v14 = _v0.i(0);
  let _v15 = ({
      showInput: _v0,
      toggleInput: _v1,
      onVatSubmitted: _v2,
      isLoading: _v3,
      isVatInvalid: _v4
    }) => (0, _v1.jsxs)(_v4.Flex, {
      justifyContent: "space-between",
      marginTop: "75",
      marginBottom: "75",
      children: [(0, _v1.jsx)(_v7.Text, {
        as: "a",
        onClick: _v1,
        variant: "body-md",
        marginTop: "100",
        marginBottom: "50",
        cursor: "pointer",
        sx: {
          "&:hover": {
            color: "blue.600"
          }
        },
        children: (0, _v10.translate)({
          singular: "Add VAT ID (optional)",
          dictionary: {
            es: {
              singular: "Agregue el número de identificación del IVA (opcional)"
            },
            "de-DE": {
              singular: "USt-Nummer hinzufügen (optional)"
            },
            "fr-FR": {
              singular: "Ajouter un numéro de TVA (facultatif)"
            },
            "ja-JP": {
              singular: "VAT IDを追加（任意）"
            },
            "ko-KR": {
              singular: "VAT ID 추가(선택 사항)"
            },
            "pt-BR": {
              singular: "Adicionar VAT ID (opcional)"
            },
            "zh-CN": {
              singular: "添加 VAT ID（可选）"
            }
          }
        })
      }), _v0 && (0, _v1.jsxs)(_v5.Box, {
        as: "form",
        width: "50%",
        textAlign: "right",
        onSubmit: _v2,
        "data-testid": "vat-form",
        children: [(0, _v1.jsx)(_v6.Input, {
          name: "vat",
          isInvalid: _v4,
          marginBottom: "75"
        }), _v4 && (0, _v1.jsx)(_v7.Text, {
          variant: "body-xl",
          fontSize: "text-xs",
          color: "status-destructive-primary",
          textAlign: "left",
          marginBottom: "50",
          children: (0, _v10.translate)({
            singular: "That vat id is invalid. Try entering it again.",
            dictionary: {
              es: {
                singular: "Ese número de identificación del IVA no es válido. Intente introducirlo de nuevo."
              },
              "de-DE": {
                singular: "Diese Umsatzsteuer-Identifikationsnummer ist ungültig. Versuche, ihn erneut einzugeben."
              },
              "fr-FR": {
                singular: "Ce numéro de TVA n'est pas valide. Veuillez essayer de le saisir à nouveau."
              },
              "ja-JP": {
                singular: "そのVAT IDは無効です。再入力してください。"
              },
              "ko-KR": {
                singular: "해당 VAT ID는 유효하지 않습니다. 다시 입력해주세요."
              },
              "pt-BR": {
                singular: "A identificação do VAT ID é inválida; informe novamente."
              },
              "zh-CN": {
                singular: "该 VAT ID 无效。请重试。"
              }
            }
          })
        }), (0, _v1.jsx)(_v14.Button, {
          type: "submit",
          size: "xs",
          isLoading: _v3,
          variant: "secondary",
          marginBottom: "75",
          children: (0, _v10.translate)({
            singular: "Apply VAT",
            dictionary: {
              es: {
                singular: "Aplicar IVA"
              },
              "de-DE": {
                singular: "Mehrwertsteuer anwenden"
              },
              "fr-FR": {
                singular: "Appliquer la TVA"
              },
              "ja-JP": {
                singular: "VATを適用する"
              },
              "ko-KR": {
                singular: "VAT 적용"
              },
              "pt-BR": {
                singular: "Aplicar VAT"
              },
              "zh-CN": {
                singular: "应用 VAT"
              }
            }
          })
        })]
      })]
    }),
    _v16 = ({
      vat: _v0,
      isLoading: _v1,
      cancelAppliedVat: _v2
    }) => (0, _v1.jsxs)(_v14.Button, {
      "data-testid": "applied-vat-button",
      variant: "secondary",
      isLoading: _v1,
      marginBottom: "100",
      marginTop: "200",
      alignSelf: "flex-start",
      size: "sm",
      fontSize: "text-sm",
      onClick: _v2,
      children: [(0, _v10.translate)({
        singular: "{SPAN}VAT:{/SPAN} {VAT}",
        replacements: {
          SPAN: _v0 => (0, _v1.jsxs)(_v7.Text, {
            variant: "body-xl",
            as: "span",
            color: "status-positive-primary",
            fontWeight: "bold",
            fontSize: "text-sm",
            children: [_v0, " "]
          }),
          VAT: _v0
        },
        dictionary: {
          es: {
            singular: "{SPAN}IVA:{/SPAN} {VAT}"
          },
          "de-DE": {
            singular: "{SPAN}MwSt.:{/SPAN} {VAT}"
          },
          "fr-FR": {
            singular: "{SPAN}TVA :{/SPAN} {VAT}"
          },
          "ja-JP": {
            singular: "{SPAN}付加価値税：{/SPAN} {VAT}"
          },
          "zh-CN": {
            singular: "{SPAN}VAT：{/SPAN}{VAT}"
          }
        }
      }), (0, _v1.jsx)(_v17, {})]
    }),
    _v17 = () => (0, _v1.jsx)(_v5.Box, {
      as: "svg",
      viewBox: "0 0 20 20",
      width: (0, _v13.rem)(14),
      marginLeft: "75",
      children: (0, _v1.jsx)("path", {
        d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
        fill: "#1A2E3B",
        fillRule: "evenodd"
      })
    }),
    _v18 = ({
      country: _v0,
      onSubmitVatId: _v1
    }) => {
      let _v2 = (0, _v12.useViewer)(),
        [_v3, _v4] = (0, _v3.useState)(!1),
        [_v5, _v6] = (0, _v3.useState)(!1),
        [_v7, _v8] = (0, _v3.useState)(!1),
        [_v9, _v10] = (0, _v3.useState)(void 0);
      if (!_v0 || !_v2?.vatConfig?.countries) return null;
      let _v11 = ((_v0, _v1) => {
        for (let _v0 in _v1 = (_v1 + "").toLowerCase(), _v0) if (_v0.hasOwnProperty(_v0) && _v1 == (_v0 + "").toLowerCase()) return _v0[_v0];
      })(_v2.vatConfig.countries, _v0);
      if (!_v11 || 1 !== _v11) return null;
      async function _v12(_v0, _v1) {
        let _v2 = JSON.stringify({
            return_as_json: !0,
            number: _v0,
            country: _v1,
            token: _v2?.xsrft,
            save: !1
          }),
          _v3 = await fetch("/store/validate_vat", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            },
            body: _v2
          });
        return !1 === (await _v3.json()).error;
      }
      let _v13 = async _v0 => {
        _v0.preventDefault();
        let _v1 = _v0.target.elements.namedItem("vat");
        _v1.value && (_v6(!0), (await _v12(_v1.value, _v0)) ? (_v8(!1), _v6(!1), _v10(_v1.value), _v1(_v1.value)) : (_v8(!0), _v6(!1)));
      };
      return !_v7 && _v9 ? (0, _v1.jsx)(_v16, {
        vat: _v9,
        isLoading: _v5,
        cancelAppliedVat: () => {
          _v10(void 0), _v1(void 0), _v8(!1);
        }
      }) : (0, _v1.jsx)(_v15, {
        showInput: _v3,
        toggleInput: () => _v4(!_v3),
        onVatSubmitted: _v13,
        isLoading: _v5,
        isVatInvalid: _v7
      });
    };
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = () => {
    let _v0 = (0, _v12.useViewer)(),
      [_v1, _v2] = (0, _v3.useState)(!1),
      [_v3, _v4] = (0, _v3.useState)(!1),
      [_v5, _v6] = (0, _v3.useState)(!1),
      {
        state: {
          order: _v7,
          billingAddress: _v8,
          isBusinessUserEntity: _v9
        },
        dispatch: _v10
      } = (0, _v21.useStateContext)(),
      [_v11, _v12] = (0, _v20.useUpdateOrderPreview)(),
      [_v13, _v14] = (0, _v3.useState)(_v12.callCount);
    (0, _v3.useEffect)(() => {
      !_v12.loading && _v3 && _v13 !== _v12.callCount && (_v12.error && _v6(!0), _v4(!1), _v14(_v12.callCount));
    }, [_v12, _v12.error, _v3, _v13]);
    let _v15 = _v8?.country ?? _v7?.billingAddress?.country;
    if (!_v0 || !_v7 || !_v15) return null;
    let _v16 = ((_v0, _v1) => {
      for (let _v0 in _v1 = (_v1 + "").toLowerCase(), _v0) if (_v0.hasOwnProperty(_v0) && _v1 == (_v0 + "").toLowerCase()) return _v0[_v0];
    })(_v0.vatConfig?.countries, _v15);
    if (!_v16 || 1 !== _v16) return null;
    async function _v17(_v0, _v1) {
      let _v2 = JSON.stringify({
          return_as_json: !0,
          number: _v1,
          country: _v0,
          token: _v0?.xsrft,
          save: !1
        }),
        _v3 = await fetch("/store/validate_vat", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: _v2
        });
      return !1 === (await _v3.json()).error;
    }
    let _v18 = async _v0 => {
      _v0.preventDefault();
      let _v1 = _v0.target.elements.namedItem("vat");
      if (_v1.value) if (_v4(!0), await _v17(_v15, _v1.value)) {
        let _v0 = _v1.value;
        _v6(!1), _v9 || _v10({
          type: _v19.ActionTypes.TOGGLE_USER_ENTITY,
          payload: !0
        }), _v11({
          ..._v7,
          vatId: _v0
        });
      } else _v6(!0), _v4(!1);
    };
    return _v7.vatId ? (0, _v1.jsx)(_v16, {
      vat: _v7.vatId,
      isLoading: _v3,
      cancelAppliedVat: () => {
        let _v0 = {
          ..._v7
        };
        delete _v0.vatId, _v4(!0), _v11(_v0);
      }
    }) : (0, _v1.jsx)(_v15, {
      showInput: _v1,
      toggleInput: () => _v2(!_v1),
      onVatSubmitted: _v18,
      isLoading: _v3,
      isVatInvalid: _v5
    });
  };
  var _v23 = _v0.i(0);
  let _v24 = ({
      billingAddress: _v0,
      postalCodeIsInvalid: _v1,
      onPostalCodeChange: _v2,
      onCountryChange: _v3,
      onCountryClick: _v4,
      onSubmitVatId: _v5,
      isCheckout: _v6 = !0,
      showAsRequired: _v7,
      bspStyling: _v8 = !1
    }) => {
      let [_v9, _v10] = (0, _v3.useState)(""),
        _v11 = (0, _v3.useMemo)(() => (0, _v2.default)(_v0 => {
          _v2(_v0);
        }, 600), [_v2]);
      (0, _v3.useEffect)(() => {
        if (!_v9 && !_v0?.postalCode) return;
        let _v0 = _v0?.country;
        return "US" !== _v0 && "CA" !== _v0 && _v9 ? void _v10("") : (_v9 !== _v0?.postalCode && _v11(_v9), () => {
          _v11.cancel();
        });
      }, [_v9, _v0, _v11]);
      let _v12 = (0, _v1.jsx)(_v22, {});
      return _v6 || void 0 === _v5 || (_v12 = (0, _v1.jsx)(_v18, {
        country: _v0?.country,
        onSubmitVatId: _v5
      })), (0, _v1.jsxs)(_v5.Box, {
        flexWrap: "wrap",
        width: "100%",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          as: "form",
          "data-testid": "address-form",
          gap: _v8 ? "100" : "75",
          alignItems: "center",
          flexDirection: _v8 ? "row" : {
            base: "column",
            lg: "row"
          },
          width: "100%",
          children: [(0, _v1.jsx)(_v25, {
            flex: "1",
            labelCopy: (0, _v10.translate)({
              singular: "Country",
              dictionary: {
                es: {
                  singular: "País"
                },
                "de-DE": {
                  singular: "Land"
                },
                "fr-FR": {
                  singular: "Pays"
                },
                "ja-JP": {
                  singular: "国"
                },
                "ko-KR": {
                  singular: "국가"
                },
                "pt-BR": {
                  singular: "País"
                },
                "zh-CN": {
                  singular: "国家/地区"
                }
              }
            }),
            showAsterisk: _v7,
            useBoldLabel: _v8,
            children: (0, _v1.jsx)(_v8.Select, {
              name: _v11.formNames.country,
              value: _v0?.country ? [_v0?.country] : void 0,
              onValueChange: _v0 => _v3(_v0.value[0]),
              items: Object.keys(_v23.countries).map(_v0 => ({
                value: _v0,
                label: _v23.countries[_v0].name
              })).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)),
              onClick: () => {
                _v4?.();
              }
            })
          }), _v0?.country && _v23.countries[_v0?.country]?.subdivisions && (0, _v1.jsx)(_v25, {
            flex: "1",
            labelCopy: _v0?.country === "US" ? (0, _v10.translate)({
              singular: "Zip code",
              dictionary: {
                es: {
                  singular: "Código postal"
                },
                "de-DE": {
                  singular: "Postleitzahl"
                },
                "fr-FR": {
                  singular: "Code postal"
                },
                "ja-JP": {
                  singular: "郵便番号"
                },
                "ko-KR": {
                  singular: "우편 번호"
                },
                "pt-BR": {
                  singular: "Código postal"
                },
                "zh-CN": {
                  singular: "邮政编码"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Postal code",
              dictionary: {
                es: {
                  singular: "Código postal"
                },
                "de-DE": {
                  singular: "PLZ"
                },
                "fr-FR": {
                  singular: "Code postal"
                },
                "ja-JP": {
                  singular: "郵便番号"
                },
                "ko-KR": {
                  singular: "우편 번호"
                },
                "pt-BR": {
                  singular: "Código postal"
                },
                "zh-CN": {
                  singular: "邮政编码"
                }
              }
            }),
            showAsterisk: _v7,
            useBoldLabel: _v8,
            children: (0, _v1.jsx)(_v6.Input, {
              type: "text",
              isInvalid: _v1,
              onChange: _v0 => _v10(_v0.currentTarget.value),
              size: "md",
              name: _v11.formNames.postalCode,
              value: _v9
            })
          })]
        }), _v12]
      });
    },
    _v25 = ({
      labelCopy: _v0,
      children: _v1,
      flex: _v2,
      marginBottom: _v3,
      showAsterisk: _v4 = !0,
      useBoldLabel: _v5 = !1
    }) => (0, _v1.jsxs)(_v5.Box, {
      flex: _v2,
      maxW: (0, _v9.rem)(468),
      width: "100%",
      marginBottom: _v3,
      children: [(0, _v1.jsxs)(_v7.Text, {
        as: "label",
        variant: _v5 ? "heading-xs" : "body-md",
        paddingLeft: "50",
        paddingBottom: "50",
        lineHeight: "2",
        children: [_v0, _v4 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [" ", (0, _v1.jsxs)(_v7.Text, {
            as: "span",
            variant: "body-xl",
            color: "text-primary",
            children: [" ", "*"]
          })]
        })]
      }), _v1]
    });
}