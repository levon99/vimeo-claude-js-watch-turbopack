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
    _v10 = _v0.i(0);
  let _v11 = ({
      showInput: _v0,
      toggleInput: _v1,
      onVatSubmitted: _v2,
      isLoading: _v3,
      isVatInvalid: _v4,
      isVatServiceDown: _v5 = !1,
      isSlow: _v6 = !1
    }) => (0, _v1.jsxs)(_v5.Flex, {
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
      }), _v0 && (0, _v1.jsxs)(_v6.Box, {
        as: "form",
        width: "50%",
        textAlign: "right",
        onSubmit: _v2,
        "data-testid": "vat-form",
        children: [(0, _v1.jsx)(_v8.Input, {
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
        }), _v5 && (0, _v1.jsx)(_v7.Text, {
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
        }), _v3 && _v6 && (0, _v1.jsx)(_v7.Text, {
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
        }), (0, _v1.jsx)(_v9.Button, {
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
    _v12 = ({
      vat: _v0,
      isLoading: _v1,
      cancelAppliedVat: _v2
    }) => (0, _v1.jsxs)(_v9.Button, {
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
        })
      }), (0, _v1.jsx)(_v13, {})]
    }),
    _v13 = () => (0, _v1.jsx)(_v6.Box, {
      as: "svg",
      viewBox: "0 0 20 20",
      width: (0, _v4.rem)(14),
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
    let _v2 = (0, _v3.useViewer)(),
      [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, _v6] = (0, _v2.useState)(!1),
      [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v2.useState)(!1),
      [_v11, _v12] = (0, _v2.useState)(!1),
      [_v13, _v14] = (0, _v2.useState)(void 0);
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
    return !_v7 && _v13 ? (0, _v1.jsx)(_v12, {
      vat: _v13,
      isLoading: _v5,
      cancelAppliedVat: () => {
        _v14(void 0), _v1(void 0), _v8(!1);
      }
    }) : (0, _v1.jsx)(_v11, {
      showInput: _v3,
      toggleInput: () => _v4(!_v3),
      onVatSubmitted: _v17,
      isLoading: _v5,
      isVatInvalid: _v7,
      isVatServiceDown: _v9,
      isSlow: _v11
    });
  }], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  _v0.s(["VatContainer", 0, () => {
    let _v0 = (0, _v3.useViewer)(),
      [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, _v6] = (0, _v2.useState)(!1),
      [_v7, _v8] = (0, _v2.useState)(!1),
      [_v9, _v10] = (0, _v2.useState)(!1),
      {
        state: {
          order: _v11,
          billingAddress: _v12,
          isBusinessUserEntity: _v13
        },
        dispatch: _v14
      } = (0, _v16.useStateContext)(),
      [_v15, _v16] = (0, _v14.useUpdateOrderPreview)(),
      [_v17, _v18] = (0, _v2.useState)(_v16.callCount);
    (0, _v2.useEffect)(() => {
      !_v16.loading && _v3 && _v17 !== _v16.callCount && (_v16.error && _v6(!0), _v4(!1), _v18(_v16.callCount));
    }, [_v16, _v16.error, _v3, _v17]);
    let _v19 = _v12?.country ?? _v11?.billingAddress?.country;
    if (!_v0 || !_v11 || !_v19) return null;
    let _v20 = ((_v0, _v1) => {
      for (let _v0 in _v1 = (_v1 + "").toLowerCase(), _v0) if (_v0.hasOwnProperty(_v0) && _v1 == (_v0 + "").toLowerCase()) return _v0[_v0];
    })(_v0.vatConfig?.countries, _v19);
    if (!_v20 || 1 !== _v20) return null;
    async function _v21(_v0, _v1) {
      let _v2 = JSON.stringify({
        return_as_json: !0,
        number: _v1,
        country: _v0,
        token: _v0?.xsrft,
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
    let _v22 = async _v0 => {
      _v0.preventDefault();
      let _v1 = _v0.target.elements.namedItem("vat");
      if (!_v1.value) return;
      _v4(!0), _v6(!1), _v8(!1), _v10(!1);
      let _v2 = setTimeout(() => _v10(!0), 0),
        _v3 = await _v21(_v19, _v1.value);
      if (clearTimeout(_v2), _v10(!1), !1 === _v3) {
        let _v0 = _v1.value;
        _v6(!1), _v13 || _v14({
          type: _v15.ActionTypes.TOGGLE_USER_ENTITY,
          payload: !0
        }), _v15({
          ..._v11,
          vatId: _v0
        });
      } else "service_down" === _v3 ? _v8(!0) : _v6(!0), _v4(!1);
    };
    return _v11.vatId ? (0, _v1.jsx)(_v12, {
      vat: _v11.vatId,
      isLoading: _v3,
      cancelAppliedVat: () => {
        let _v0 = {
          ..._v11
        };
        delete _v0.vatId, _v4(!0), _v15(_v0);
      }
    }) : (0, _v1.jsx)(_v11, {
      showInput: _v1,
      toggleInput: () => _v2(!_v1),
      onVatSubmitted: _v22,
      isLoading: _v3,
      isVatInvalid: _v5,
      isVatServiceDown: _v7,
      isSlow: _v9
    });
  }], 0);
}