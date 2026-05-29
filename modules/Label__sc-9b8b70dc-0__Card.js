{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v2,
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = _v6.default.label.withConfig({
    displayName: "Label",
    componentId: "sc-9b8b70dc-0"
  })``;
  var _v13 = _v0.i(0);
  let _v14 = (0, _v6.default)(_v13.Card).withConfig({
      displayName: "Card",
      componentId: "sc-59b95ba0-0"
    })``,
    _v15 = (0, _v6.default)(_v0 => (0, _v1.jsx)(_v14, {
      ..._v0,
      children: (0, _v1.jsx)(_v12, {
        children: _v0.children
      })
    })).withConfig({
      displayName: "InputCard",
      componentId: "sc-1fed32e7-0"
    })`
  ${_v12} {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 1.5rem;

    div {
      margin: 0;
      display: block;
    }
  }

  &:after {
    top: 0;
    padding: 0;
    height: 100%;
  }
`;
  var _v16 = _v0.i(0);
  let _v17 = (0, _v6.default)(_v16.Radio).withConfig({
      displayName: "Radio",
      componentId: "sc-a69a968a-0"
    })``,
    _v18 = ({
      id: _v0,
      name: _v1,
      label: _v2,
      children: _v3,
      selected: _v4,
      checked: _v5,
      value: _v6 = "",
      dataSet: _v7,
      onChange: _v8,
      ..._v9
    }) => (0, _v1.jsxs)(_v15, {
      ..._v9,
      isSelected: _v4 === _v6,
      children: [(0, _v1.jsx)(_v17, {
        id: _v0,
        name: _v1,
        label: _v2,
        checked: _v5 || _v4 === _v6,
        value: _v6,
        onChange: _v8
      }), _v3]
    });
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = _v6.default.div.withConfig({
      displayName: "Spinner__SpinnerWrapper",
      componentId: "sc-a578e8e3-0"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(0, _v22.rem)(204)};
  max-height: ${(0, _v22.rem)(360)};
  text-align: center;
`,
    _v25 = () => (0, _v1.jsx)(_v24, {
      children: (0, _v1.jsx)(_v23.Spinner, {})
    });
  var _v26 = _v0.i(0);
  let _v27 = (0, _v6.default)(({
    hidden: _v0,
    ..._v1
  }) => (0, _v1.jsx)("div", {
    hidden: _v0,
    children: (0, _v1.jsx)(_v26.TextArea, {
      label: "",
      ..._v1
    })
  })).withConfig({
    displayName: "TextInput",
    componentId: "sc-596c0816-0"
  })`
  display: ${({
    hidden: _v0
  }) => _v0 ? "none" : "block"};
  width: 100%;

  &:focus {
    border-color: initial;
    box-shadow: none;
  }
  textarea {
    resize: vertical;
    min-height: 3rem;
    max-height: 6rem;
    margin-top: 0.5rem;
  }
`;
  var _v28 = _v0.i(0);
  class _v29 extends _v4.default.Component {
    state = {
      isLoading: !0,
      isOptOutSubmitting: !1,
      selected: "",
      comments: {},
      question: "",
      answers: [],
      daysUntilExpiration: 0,
      hasLegacyPricing: !1,
      redirectToPromo: !1
    };
    async componentDidMount() {
      let _v0 = await (0, _v7.getOptOutData)(),
        _v1 = (0, _v8.camelize)(_v0);
      this.setState(() => ({
        isLoading: !1,
        question: _v1.question,
        answers: _v1.answers.map(_v0 => ({
          id: _v0.id,
          name: "answer",
          value: _v0.id,
          label: _v0.label,
          hasTextarea: !!_v0.hasTextarea,
          dataSet: _v0.dataSet
        })),
        daysUntilExpiration: _v1.daysUntilExpiration,
        hasLegacyPricing: _v1.hasLegacyPricing
      }));
    }
    handleSelect = _v0 => {
      this.setState({
        selected: _v0
      });
    };
    handleCommentChange = _v0 => {
      let {
        value: _v1
      } = _v0.target;
      _v0.stopPropagation(), this.setState(_v0 => ({
        comments: {
          ..._v0.comments,
          [_v0.selected]: _v1
        }
      }));
    };
    handleSubmit = () => {
      this.setState({
        isOptOutSubmitting: !0
      });
      let {
          selected: _v0,
          comments: _v1
        } = this.state,
        _v2 = this.props?.viewer?.xsrft ?? "",
        _v3 = _v1[_v0] || "";
      (0, _v7.logRequest)({
        token: _v2,
        reason: _v0,
        comment: _v3
      }), window.location.href = "/settings/billing/membership_plan";
    };
    handleOptOutClick = () => {
      let {
        selected: _v0,
        hasLegacyPricing: _v1,
        daysUntilExpiration: _v2
      } = this.state;
      "too_expensive" === _v0 && !_v1 && _v2 < 90 ? this.setState({
        redirectToPromo: !0
      }) : this.handleSubmit();
    };
    render() {
      let {
        isLoading: _v0,
        isOptOutSubmitting: _v1,
        question: _v2,
        answers: _v3,
        selected: _v4,
        comments: _v5,
        redirectToPromo: _v6
      } = this.state;
      return _v6 ? (0, _v1.jsx)(_v5.Redirect, {
        to: "/cancel/offer"
      }) : _v0 ? (0, _v1.jsx)(_v10.Page, {
        children: (0, _v1.jsx)(_v25, {})
      }) : (0, _v1.jsxs)(_v30, {
        children: [(0, _v1.jsxs)("header", {
          children: [(0, _v1.jsx)(_v20.H2, {
            centered: !0,
            children: "Cancellation Confirmed"
          }), (0, _v1.jsx)(_v21.Text, {
            style: {
              display: "block"
            },
            centered: !0,
            children: (0, _v9.translate)({
              singular: "Your subscription has been cancelled. You will not be billed again. You may take a screenshot of this confirmation page for your records. Before you go, can you tell us why you are cancelling?",
              dictionary: {
                es: {
                  singular: "Tu suscripción se ha cancelado. No se te volverá a facturar. Puedes tomar una captura de pantalla de esta página de confirmación para tus registros. Antes de irte, ¿puedes decirnos por qué cancelas la suscripción?"
                },
                "de-DE": {
                  singular: "Dein Abo wurde gekündigt. Du wirst keine weiteren Rechnungen erhalten. Du kannst von dieser Bestätigung eine Bildschirmaufnahme machen und diese verwahren. Bevor du uns verlässt, würdest du uns sagen, aus welchem Grund du dein Abo gekündigt hast?"
                },
                "fr-FR": {
                  singular: "Votre abonnement a été résilié. Vous ne serez plus facturé(e). Si vous le souhaitez, vous pouvez prendre une capture d'écran de cette page de confirmation. Avant de partir, pouvez-vous nous indiquer pourquoi vous résiliez votre abonnement ?"
                },
                "ja-JP": {
                  singular: "サブスクリプションがキャンセルされました。再度請求されることはありません。記録用に、この確認ページのスクリーンショットを保存してください。最後に、キャンセルされる理由をお聞かせいただけますか？"
                },
                "ko-KR": {
                  singular: "회원님의 구독이 취소되었습니다. 이제 구독 요금이 더 이상 청구되지 않습니다. 본 확인 페이지를 캡처하여 기록을 보관하실 수 있습니다. 떠나시기 전에 구독을 취소한 이유에 대해 알려주시겠어요?"
                },
                "pt-BR": {
                  singular: "Sua assinatura foi cancelada. Você não receberá mais faturas. Você pode fazer uma captura de tela desta página de confirmação para guardar nos seus registros. Antes de finalizar, gostaríamos de saber o motivo do cancelamento."
                },
                "zh-CN": {
                  singular: "您的订阅已取消。您将不会再收到账单。您可以截取此确认页面的屏幕截图作为记录。在您离开之前，可以告诉我们您取消订阅的原因吗？"
                }
              }
            })
          })]
        }), (0, _v1.jsx)("section", {
          children: _v3.map(_v0 => {
            let {
                id: _v1,
                name: _v2,
                label: _v3,
                value: _v4,
                hasTextarea: _v5
              } = _v0,
              _v6 = _v4 === _v4;
            return (0, _v1.jsx)(_v18, {
              id: _v1,
              name: _v2,
              label: _v3,
              value: _v4,
              selected: _v4,
              onChange: () => this.handleSelect(_v4),
              children: _v5 && (0, _v1.jsx)(_v27, {
                id: _v1,
                defaultValue: _v5[_v4] || "",
                hidden: !_v6,
                onChange: this.handleCommentChange
              })
            }, _v1);
          })
        }), (0, _v1.jsxs)("footer", {
          children: [(0, _v1.jsx)(_v19.Button, {
            disabled: _v1,
            onClick: () => {
              (0, _v28.default)("surveyCancel", {
                ref_path: window.location.pathname,
                target: "/settings"
              }), window.location.href = "/settings";
            },
            children: (0, _v9.translate)({
              singular: "Return to settings",
              dictionary: {
                es: {
                  singular: "Volver a la configuración "
                },
                "de-DE": {
                  singular: "Zurück zu Einstellungen"
                },
                "fr-FR": {
                  singular: "Revenir aux paramètres"
                },
                "ja-JP": {
                  singular: "設定に戻る"
                },
                "ko-KR": {
                  singular: "설정으로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar para configurações"
                },
                "zh-CN": {
                  singular: "返回设置"
                }
              }
            })
          }), (0, _v1.jsx)(_v19.Button, {
            loading: _v1,
            variant: "outline",
            disabled: !_v4,
            onClick: _v0 => {
              let _v1 = _v3.find(({
                  value: _v0
                }) => _v0 === _v4),
                _v2 = (0, _v3.default)(_v1, "dataSet.index") || 0;
              _v0.preventDefault(), (0, _v28.default)("surveyContinue", {
                ref_path: window.location.pathname,
                target: "/settings",
                keyword: `option:${_v4}|index:${_v2}`
              }), this.handleOptOutClick();
            },
            children: (0, _v9.translate)({
              singular: "Submit",
              dictionary: {
                es: {
                  singular: "Enviar"
                },
                "de-DE": {
                  singular: "Senden"
                },
                "fr-FR": {
                  singular: "Envoyer"
                },
                "ja-JP": {
                  singular: "送信"
                },
                "ko-KR": {
                  singular: "제출"
                },
                "pt-BR": {
                  singular: "Enviar"
                },
                "zh-CN": {
                  singular: "提交"
                }
              }
            })
          })]
        })]
      });
    }
  }
  let _v30 = (0, _v6.default)(_v10.Page).withConfig({
    displayName: "Reason__PageStyled",
    componentId: "sc-7b9b4fdb-0"
  })`
  width: 100%;
  max-width: 500px;

  section {
    display: grid;
    grid-gap: 1rem;
    margin: 1.5rem 0;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    justify-content: stretch;
    align-content: stretch;

    @media (min-width: ${_v11.TABLET}) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = _v0 => {
    let _v1 = (0, _v2.useContext)(_v34.ViewerContext);
    return (0, _v1.jsx)(_v29, {
      ..._v0,
      viewer: _v1
    });
  };
  _v36.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v32.RainbowRibbon, {}), (0, _v1.jsx)(_v35.ReactRouterLayout, {
      path: "/cancel/reason",
      children: _v0
    }), (0, _v1.jsx)(_v33.MinimalFooterLayout, {})]
  }), (0, _v31.withPageSetup)({
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v36], 0);
}