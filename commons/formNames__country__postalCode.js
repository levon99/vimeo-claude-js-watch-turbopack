{
  "use strict";

  _v0.s(["formNames", 0, {
    country: "country",
    postalCode: "postalCode"
  }], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["LabelContainer", 0, ({
    labelCopy: _v0,
    children: _v1,
    flex: _v2,
    marginBottom: _v3,
    showAsterisk: _v4 = !0,
    useBoldLabel: _v5 = !1
  }) => (0, _v1.jsxs)(_v2.Box, {
    flex: _v2,
    maxW: "468px",
    width: "100%",
    marginBottom: _v3,
    children: [(0, _v1.jsxs)(_v3.Text, {
      as: "label",
      variant: _v5 ? "heading-xs" : "body-md",
      paddingLeft: "50",
      paddingBottom: "50",
      lineHeight: "2",
      children: [_v0, _v4 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [" ", (0, _v1.jsxs)(_v3.Text, {
          as: "span",
          variant: "body-xl",
          color: "text-primary",
          children: [" ", "*"]
        })]
      })]
    }), _v1]
  })], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = {
      color: "var(--vimeo-colors-text-tertiary)",
      fontFamily: "var(--vimeo-fonts-heading)",
      fontSize: "var(--vimeo-fontSizes-heading-2xs)",
      fontStyle: "normal",
      fontWeight: "var(--vimeo-fontWeights-bold)",
      lineHeight: "var(--vimeo-lineHeights-heading-2xs)",
      letterSpacing: "var(--vimeo-letterSpacings-heading-2xs)"
    },
    _v12 = {
      ..._v11,
      top: (0, _v9.rem)(-8)
    },
    _v13 = {
      color: "var(--vimeo-colors-text-secondary)",
      fontFamily: "var(--vimeo-fonts-body)",
      fontSize: "var(--vimeo-fontSizes-body-md)",
      fontStyle: "normal",
      fontWeight: "var(--vimeo-fontWeights-regular)",
      lineHeight: "var(--vimeo-lineHeights-body-md)",
      letterSpacing: "var(--vimeo-letterSpacings-body-md)"
    },
    _v14 = ({
      label: _v0,
      placeholder: _v1 = _v0,
      value: _v2,
      name: _v3,
      onValueChange: _v4,
      isInvalid: _v5,
      isDisabled: _v6,
      inputMode: _v7,
      autoComplete: _v8,
      children: _v9,
      onFocus: _v10,
      onKeyDown: _v11,
      inputRef: _v12
    }) => (0, _v1.jsxs)(_v2.Box, {
      position: "relative",
      flex: "1",
      minWidth: "0",
      width: "100%",
      "data-has-value": _v2 ? "" : void 0,
      sx: {
        _focusWithin: {
          'label[data-floating-label="true"]': _v12
        },
        '&[data-has-value] label[data-floating-label="true"]': _v12,
        '&:focus-within label[data-invalid="true"], &[data-has-value] label[data-invalid="true"]': {
          color: "var(--vimeo-colors-status-destructive-primary)"
        },
        'label[data-invalid="true"]': {
          color: "var(--vimeo-colors-status-destructive-primary)"
        },
        "& input::placeholder": {
          color: "transparent"
        },
        "& input": {
          backgroundColor: "var(--vimeo-colors-surface)"
        },
        zIndex: 1
      },
      children: [(0, _v1.jsx)(_v7.Input, {
        type: "text",
        name: _v3,
        "aria-label": _v0,
        placeholder: _v1,
        isInvalid: _v5,
        isDisabled: _v6,
        inputMode: _v7,
        autoComplete: _v8,
        value: _v2,
        ref: _v12,
        onFocus: _v10,
        onKeyDown: _v11,
        onChange: _v0 => _v4(_v0.currentTarget.value),
        size: "md",
        height: (0, _v9.rem)(40),
        width: "100%"
      }), (0, _v1.jsx)(_v2.Box, {
        as: "label",
        htmlFor: _v3,
        "data-invalid": _v5 ? "true" : void 0,
        "data-floating-label": "true",
        position: "absolute",
        top: (0, _v9.rem)(10),
        left: (0, _v9.rem)(12),
        paddingX: (0, _v9.rem)(4),
        marginX: (0, _v9.rem)(3),
        backgroundColor: "var(--vimeo-colors-surface)",
        zIndex: 1,
        pointerEvents: "none",
        transformOrigin: "left top",
        transition: "0.2s ease all",
        ..._v13,
        children: _v1
      }), _v9 && (0, _v1.jsx)(_v2.Box, {
        position: "absolute",
        right: (0, _v9.rem)(16),
        top: "50%",
        transform: "translateY(-50%)",
        children: _v9
      })]
    });
  _v0.s(["FloatingInput", 0, _v14, "floatingLabelTypography", 0, _v11, "floatingPlaceholderTypography", 0, _v13], 0);
  let _v15 = ({
      isVatInvalid: _v0,
      isVatServiceDown: _v1,
      isSlow: _v2,
      isLoading: _v3
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0 && (0, _v1.jsx)(_v3.Text, {
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
      }), _v1 && (0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        fontSize: "text-xs",
        color: "status-destructive-primary",
        textAlign: "left",
        marginBottom: "50",
        children: (0, _v10.translate)({
          singular: "We couldn't validate your VAT ID right now — the EU VAT service is temporarily unavailable. Please try again in a moment.",
          dictionary: {
            es: {
              singular: "No hemos podido validar su número de IVA en este momento — el servicio de IVA de la UE está temporalmente fuera de servicio. Por favor, inténtelo de nuevo en unos instantes."
            },
            "de-DE": {
              singular: "Wir konnten Ihre USt-ID gerade nicht validieren — der EU-USt-Dienst ist vorübergehend nicht verfügbar. Bitte versuchen Sie es in einem Moment erneut."
            },
            "fr-FR": {
              singular: "Nous n'avons pas pu valider votre numéro de TVA pour le moment — le service de TVA de l'UE est temporairement indisponible. Veuillez réessayer dans un instant."
            },
            "ja-JP": {
              singular: "現在、VAT IDを検証できませんでした — EUのVATサービスが一時的に利用できません。しばらくしてからもう一度お試しください。"
            },
            "ko-KR": {
              singular: "지금은 귀하의 VAT ID를 검증할 수 없습니다 — EU VAT 서비스가 일시적으로 이용 불가합니다. 잠시 후 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Não conseguimos validar seu número de IVA no momento — o serviço de IVA da UE está temporariamente indisponível. Por favor, tente novamente daqui a pouco."
            },
            "zh-CN": {
              singular: "我们暂时无法验证您的增值税识别号（VAT ID） — 欧盟增值税服务暂时不可用。请稍后再试。"
            }
          }
        })
      }), _v3 && _v2 && (0, _v1.jsx)(_v3.Text, {
        variant: "body-xl",
        fontSize: "text-xs",
        color: "text-tertiary",
        textAlign: "left",
        marginBottom: "50",
        children: (0, _v10.translate)({
          singular: "Validation is taking longer than expected…",
          dictionary: {
            es: {
              singular: "La validación está tardando más de lo esperado…"
            },
            "de-DE": {
              singular: "Die Validierung dauert länger als erwartet…"
            },
            "fr-FR": {
              singular: "La validation prend plus de temps que prévu…"
            },
            "ja-JP": {
              singular: "検証に予想より時間がかかっています…"
            },
            "ko-KR": {
              singular: "검증이 예상보다 오래 걸리고 있습니다…"
            },
            "pt-BR": {
              singular: "A validação está demorando mais do que o esperado…"
            },
            "zh-CN": {
              singular: "验证所需时间比预期更长…"
            }
          }
        })
      })]
    }),
    _v16 = ({
      showInput: _v0,
      toggleInput: _v1,
      onVatSubmitted: _v2,
      isLoading: _v3,
      isVatInvalid: _v4,
      isVatServiceDown: _v5 = !1,
      isSlow: _v6 = !1
    }) => (0, _v1.jsxs)(_v6.Flex, {
      justifyContent: "space-between",
      marginTop: "75",
      marginBottom: "75",
      children: [(0, _v1.jsx)(_v3.Text, {
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
      }), _v0 && (0, _v1.jsxs)(_v2.Box, {
        as: "form",
        width: "50%",
        textAlign: "right",
        onSubmit: _v2,
        "data-testid": "vat-form",
        children: [(0, _v1.jsx)(_v7.Input, {
          name: "vat",
          isInvalid: _v4,
          marginBottom: "75"
        }), (0, _v1.jsx)(_v15, {
          isVatInvalid: _v4,
          isVatServiceDown: _v5,
          isSlow: _v6,
          isLoading: _v3
        }), (0, _v1.jsx)(_v8.Button, {
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
    _v17 = ({
      showInput: _v0,
      onVatSubmitted: _v1,
      isLoading: _v2,
      isVatInvalid: _v3,
      isVatServiceDown: _v4 = !1,
      isSlow: _v5 = !1
    }) => {
      let [_v6, _v7] = (0, _v4.useState)("");
      return (0, _v1.jsx)(_v2.Box, {
        marginTop: (0, _v9.rem)(12),
        width: "100%",
        minWidth: "0",
        children: _v0 && (0, _v1.jsxs)(_v2.Box, {
          as: "form",
          width: "100%",
          minWidth: "0",
          textAlign: "right",
          onSubmit: _v1,
          "data-testid": "vat-form",
          children: [(0, _v1.jsx)(_v14, {
            label: (0, _v10.translate)({
              singular: "VAT number",
              dictionary: {
                es: {
                  singular: "Número de IVA"
                },
                "de-DE": {
                  singular: "Umsatzsteuer-Identifikationsnummer"
                },
                "fr-FR": {
                  singular: "Numéro de TVA"
                },
                "ja-JP": {
                  singular: "VAT番号"
                },
                "ko-KR": {
                  singular: "VAT 번호"
                },
                "pt-BR": {
                  singular: "Número do IVA"
                },
                "zh-CN": {
                  singular: "增值税号"
                }
              }
            }),
            name: "vat",
            value: _v6,
            onValueChange: _v7,
            isInvalid: _v3,
            autoComplete: "off"
          }), (0, _v1.jsx)(_v3.Text, {
            variant: "body-sm",
            color: "text-tertiary",
            textAlign: "left",
            marginTop: (0, _v9.rem)(8),
            marginBottom: (0, _v9.rem)(4),
            display: "block",
            children: (0, _v10.translate)({
              singular: "(optional) — Include national prefix eg. GBXXXXXXXXX",
              dictionary: {
                es: {
                  singular: "(opcional) — Incluya el prefijo nacional, p. ej. GBXXXXXXXXX"
                },
                "de-DE": {
                  singular: "(optional) — Ländervorwahl angeben, z. B. GBXXXXXXXXX"
                },
                "fr-FR": {
                  singular: "(facultatif) — Inclure l’indicatif national p. ex. GBXXXXXXXXX"
                },
                "ja-JP": {
                  singular: "(任意) — 国別プレフィックスを含めてください。例: GBXXXXXXXXX"
                },
                "ko-KR": {
                  singular: "(선택 사항) — 국가 접두사 포함 예: GBXXXXXXXXX"
                },
                "pt-BR": {
                  singular: "(opcional) — Inclua o prefixo nacional, ex. GBXXXXXXXXX"
                },
                "zh-CN": {
                  singular: "(可选) — 包含国家/地区前缀，例如 GBXXXXXXXXX"
                }
              }
            })
          }), (0, _v1.jsx)(_v15, {
            isVatInvalid: _v3,
            isVatServiceDown: _v4,
            isSlow: _v5,
            isLoading: _v2
          }), (0, _v1.jsx)(_v8.Button, {
            type: "submit",
            size: "xs",
            isLoading: _v2,
            variant: "secondary",
            marginTop: (0, _v9.rem)(8),
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
        })
      });
    },
    _v18 = ({
      wetransferInspired: _v0 = !1,
      ..._v1
    }) => _v0 ? (0, _v1.jsx)(_v17, {
      ..._v1
    }) : (0, _v1.jsx)(_v16, {
      ..._v1
    }),
    _v19 = ({
      vat: _v0,
      isLoading: _v1,
      cancelAppliedVat: _v2
    }) => (0, _v1.jsxs)(_v8.Button, {
      "data-testid": "applied-vat-button",
      variant: "secondary",
      isLoading: _v1,
      marginBottom: "100",
      marginTop: "200",
      alignSelf: "flex-start",
      size: "sm",
      fontSize: "text-sm",
      onClick: _v2,
      children: [(0, _v1.jsx)("span", {
        translate: "no",
        children: (0, _v10.translate)({
          singular: "{SPAN}VAT:{/SPAN} {VAT}",
          replacements: {
            SPAN: _v0 => (0, _v1.jsxs)(_v3.Text, {
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
        })
      }), (0, _v1.jsx)(_v20, {})]
    }),
    _v20 = () => (0, _v1.jsx)(_v2.Box, {
      as: "svg",
      viewBox: "0 0 20 20",
      width: (0, _v9.rem)(14),
      marginLeft: "75",
      children: (0, _v1.jsx)("path", {
        d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
        fill: "#1A2E3B",
        fillRule: "evenodd"
      })
    });
  _v0.s(["PaymentMethodVatContainer", 0, ({
    country: _v0,
    onSubmitVatId: _v1
  }) => {
    let _v2 = (0, _v5.useViewer)(),
      [_v3, _v4] = (0, _v4.useState)(!1),
      [_v5, _v6] = (0, _v4.useState)(!1),
      [_v7, _v8] = (0, _v4.useState)(!1),
      [_v9, _v10] = (0, _v4.useState)(!1),
      [_v11, _v12] = (0, _v4.useState)(!1),
      [_v13, _v14] = (0, _v4.useState)(void 0);
    if (!_v0 || !_v2?.vatConfig?.countries) return null;
    let _v15 = ((_v0, _v1) => {
      for (let _v0 in _v1 = (_v1 + "").toLowerCase(), _v0) if (_v0.hasOwnProperty(_v0) && _v1 == (_v0 + "").toLowerCase()) return _v0[_v0];
    })(_v2.vatConfig.countries, _v0);
    if (!_v15 || 1 !== _v15) return null;
    async function _v16(_v0, _v1) {
      let _v2 = JSON.stringify({
        return_as_json: !0,
        number: _v0,
        country: _v1,
        token: _v2?.xsrft,
        save: !1
      });
      try {
        let _v0 = await fetch("/store/validate_vat", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: _v2
        });
        return (await _v0.json()).error;
      } catch {
        return "service_down";
      }
    }
    let _v17 = async _v0 => {
      _v0.preventDefault();
      let _v1 = _v0.target.elements.namedItem("vat");
      if (!_v1.value) return;
      _v6(!0), _v8(!1), _v10(!1), _v12(!1);
      let _v2 = setTimeout(() => _v12(!0), 0),
        _v3 = await _v16(_v1.value, _v0);
      clearTimeout(_v2), _v12(!1), !1 === _v3 ? (_v8(!1), _v6(!1), _v14(_v1.value), _v1(_v1.value)) : ("service_down" === _v3 ? _v10(!0) : _v8(!0), _v6(!1));
    };
    return !_v7 && _v13 ? (0, _v1.jsx)(_v19, {
      vat: _v13,
      isLoading: _v5,
      cancelAppliedVat: () => {
        _v14(void 0), _v1(void 0), _v8(!1);
      }
    }) : (0, _v1.jsx)(_v16, {
      showInput: _v3,
      toggleInput: () => _v4(!_v3),
      onVatSubmitted: _v17,
      isLoading: _v5,
      isVatInvalid: _v7,
      isVatServiceDown: _v9,
      isSlow: _v11
    });
  }], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  _v0.s(["VatContainer", 0, ({
    wetransferInspired: _v0 = !1
  }) => {
    let _v1 = (0, _v5.useViewer)(),
      [_v2, _v3] = (0, _v4.useState)(_v0),
      [_v4, _v5] = (0, _v4.useState)(!1),
      [_v6, _v7] = (0, _v4.useState)(!1),
      [_v8, _v9] = (0, _v4.useState)(!1),
      [_v10, _v11] = (0, _v4.useState)(!1),
      {
        state: {
          order: _v12,
          billingAddress: _v13,
          isBusinessUserEntity: _v14
        },
        dispatch: _v15
      } = (0, _v23.useStateContext)(),
      [_v16, _v17] = (0, _v21.useUpdateOrderPreview)(),
      [_v18, _v19] = (0, _v4.useState)(_v17.callCount);
    (0, _v4.useEffect)(() => {
      !_v17.loading && _v4 && _v18 !== _v17.callCount && (_v17.error && _v7(!0), _v5(!1), _v19(_v17.callCount));
    }, [_v17, _v17.error, _v4, _v18]);
    let _v20 = _v13?.country ?? _v12?.billingAddress?.country;
    if (!_v1 || !_v12 || !_v20) return null;
    let _v21 = 1 === ((_v0, _v1) => {
      for (let _v0 in _v1 = (_v1 + "").toLowerCase(), _v0) if (_v0.hasOwnProperty(_v0) && _v1 == (_v0 + "").toLowerCase()) return _v0[_v0];
    })(_v1.vatConfig?.countries, _v20);
    if (!_v21 && !_v0) return null;
    async function _v22(_v0, _v1) {
      let _v2 = JSON.stringify({
        return_as_json: !0,
        number: _v1,
        country: _v0,
        token: _v1?.xsrft,
        save: !1
      });
      try {
        let _v0 = await fetch("/store/validate_vat", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: _v2
        });
        return (await _v0.json()).error;
      } catch {
        return "service_down";
      }
    }
    let _v23 = async _v0 => {
      _v0.preventDefault();
      let _v1 = _v0.target.elements.namedItem("vat");
      if (!_v1.value) return;
      if (_v5(!0), _v7(!1), _v9(!1), _v11(!1), !_v21) return void _v16({
        ..._v12,
        vatId: _v1.value
      });
      let _v2 = setTimeout(() => _v11(!0), 0),
        _v3 = await _v22(_v20, _v1.value);
      if (clearTimeout(_v2), _v11(!1), !1 === _v3) {
        let _v0 = _v1.value;
        _v7(!1), _v14 || _v15({
          type: _v22.ActionTypes.TOGGLE_USER_ENTITY,
          payload: !0
        }), _v16({
          ..._v12,
          vatId: _v0
        });
      } else "service_down" === _v3 ? _v9(!0) : _v7(!0), _v5(!1);
    };
    return _v12.vatId ? (0, _v1.jsx)(_v19, {
      vat: _v12.vatId,
      isLoading: _v4,
      cancelAppliedVat: () => {
        let _v0 = {
          ..._v12
        };
        delete _v0.vatId, _v5(!0), _v16(_v0);
      }
    }) : (0, _v1.jsx)(_v18, {
      showInput: _v2,
      toggleInput: () => _v3(!_v2),
      onVatSubmitted: _v23,
      isLoading: _v4,
      isVatInvalid: _v6,
      isVatServiceDown: _v8,
      isSlow: _v10,
      wetransferInspired: _v0
    });
  }], 0);
}