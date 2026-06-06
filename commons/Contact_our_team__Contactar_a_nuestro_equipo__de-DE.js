{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v5.translate)({
      singular: "Contact our team",
      dictionary: {
        es: {
          singular: "Contactar a nuestro equipo"
        },
        "de-DE": {
          singular: "Unser Team kontaktieren"
        },
        "fr-FR": {
          singular: "Contacter notre équipe"
        },
        "ja-JP": {
          singular: "チームに問い合わせる"
        },
        "ko-KR": {
          singular: "Vimeo 팀에 문의하기"
        },
        "pt-BR": {
          singular: "Fale com nossa equipe"
        },
        "zh-CN": {
          singular: "联系我们的团队"
        }
      }
    }),
    _v7 = "Vimeo Enterprise - Contact Sales",
    _v8 = "#FFF",
    _v9 = "#000000",
    _v10 = "loading",
    _v11 = "ready",
    _v12 = "error",
    _v13 = ({
      src: _v0,
      href: _v1
    }) => {
      let [_v2, _v3] = (0, _v3.useState)(_v0 || _v1 ? _v10 : "idle");
      return (0, _v3.useEffect)(() => {
        let _v0 = document.querySelector(_v0 ? `script[src="${_v0}"]` : `link[href="${_v1}"]`);
        if (_v0) _v3(_v0.getAttribute("data-status") || _v10);else if (_v0 ? ((_v0 = document.createElement("script")).src = _v0, _v0.async = !0) : _v1 && ((_v0 = document.createElement("link")).href = _v1, _v0.rel = "stylesheet"), _v0) {
          _v0.setAttribute("data-status", _v10), document.body.appendChild(_v0);
          let _v0 = _v0 => {
            _v0?.setAttribute("data-status", "load" === _v0.type ? _v11 : _v12);
          };
          _v0.addEventListener("load", _v0), _v0.addEventListener("error", _v0);
        }
        let _v1 = _v0 => {
          _v3("load" === _v0.type ? _v11 : _v12);
        };
        if (_v0 && _v0?.getAttribute?.("data-status") !== _v11) return _v0.addEventListener("load", _v1), _v0.addEventListener("error", _v1), () => {
          _v0 && (_v0.removeEventListener("load", _v1), _v0.removeEventListener("error", _v1));
        };
      }, [_v0, _v1]), {
        loaded: _v2 === _v11,
        error: _v2 === _v12
      };
    },
    _v14 = _v0 => {
      _v0.classList.add("placeholder");
    },
    _v15 = _v0 => {
      _v0.classList.remove("placeholder");
    },
    _v16 = _v4.default.div.withConfig({
      displayName: "MarketoForm__FormContainer",
      componentId: "sc-9a2144c0-0"
    })`
  width: 100%;
  max-width: ${_v0 => _v0.formMaxWidth ? _v0.formMaxWidth : "480px"};
  .mktoForm {
    // NOTE: Needed to override some styling by the css added by marketo
    width: 100% !important;
    padding: ${_v0 => _v0.formPadding ? _v0.formPadding : "6px"} !important;

    .mktoFormCol {
      margin-bottom: ${_v0 => _v0?.theme?.formColBottomSpacing || "10px"} !important;
    }
    .mktoFormCol,
    .mktoFieldWrap {
      float: none !important;
    }
    .mktoOffset,
    .mktoGutter {
      display: none;
    }

    ${({
      theme: _v0
    }) => _v0?.inputFieldPlaceHolderPaddingX && _v4.css`
        select.mktoField {
          padding-left: ${_v0?.inputFieldPlaceHolderPaddingX} !important;
        }
      `}

    ${({
      theme: _v0
    }) => _v0?.inputBoxBorderColor && _v4.css`
        select,
        input {
          border: 1px solid ${_v0?.inputBoxBorderColor} !important;
        }
      `}

    ${({
      theme: _v0
    }) => _v0?.inputPlaceholderColor && _v4.css`
        input::placeholder {
          color: ${_v0?.inputPlaceholderColor} !important;
        }
      `}
    
      ${({
      theme: _v0
    }) => _v0?.inputPlaceholderBackgroundColor && _v4.css`
        select.mktoField {
          background-color: ${_v0?.inputPlaceholderBackgroundColor} !important;
        }
      `}

    select.mktoField {
      color: ${_v0 => _v0?.theme?.inputTextColor} !important;
    }

    input,
    select {
      ${({
      theme: _v0
    }) => _v0?.inputPlaceholderBackgroundColor && _v4.css`
          background-color: ${_v0?.inputPlaceholderBackgroundColor} !important;
        `}
      height: 40px !important;
      font-size: ${_v0 => _v0?.theme?.inputFieldPlaceHolderFontSize || "14px"} !important;
      box-shadow: none !important;
      width: 100% !important;
      border-radius: 3px !important;
      padding: 0 ${_v0 => _v0?.theme?.inputFieldPlaceHolderPaddingX || "10px"} !important;
      color: ${_v0 => _v0?.theme?.inputTextColor} !important;
      @media screen and (min-width: 480px) {
        height: 48px !important;
      }
      ${_v0 => {
      if (_v0?.theme?.inputFieldSpacingY) return `margin-top: ${_v0?.theme?.inputFieldSpacingY} !important;
            margin-bottom: ${_v0?.theme?.inputFieldSpacingY} !important;`;
    }}
    }

    select.placeholder {
      ${_v0 => `color: ${_v0?.theme?.placeholder} !important;`}
    }

    .mktoCheckboxList {
      ${_v0 => {
      if (_v0?.theme?.checkboxListSpacingTop) return `margin-top: ${_v0?.theme?.checkboxListSpacingTop} !important;`;
    }}
      &.mktoHasWidth {
        ${_v0 => {
      if (_v0?.theme?.checkboxListpaddingRight) return `padding-right: ${_v0?.theme?.checkboxListpaddingRight} !important;`;
    }}
      }
      label {
        ${_v0 => {
      if (_v0?.theme?.checkboxLabelFontSize) return `
            font-size: ${_v0?.theme?.checkboxLabelFontSize};`;
    }}

        ${_v0 => {
      if (_v0?.theme?.checkboxLabelFontWeight) return `font-weight: ${_v0?.theme?.checkboxLabelFontWeight} !important;`;
    }}

      ${_v0 => {
      if (_v0?.theme?.checkboxLabelWidth) return `width: ${_v0?.theme?.checkboxLabelWidth} !important;`;
    }}

      ${_v0 => {
      if (_v0?.theme?.checkboxLabelLineHeight) return `line-height: ${_v0?.theme?.checkboxLabelLineHeight} !important;`;
    }}
      }

      ${({
      theme: _v0
    }) => _v0?.checkboxInputMarginTop && _v4.css`
          input {
            margin-top: ${_v0?.checkboxInputMarginTop} !important;
          }
        `}
    }
    ${({
      theme: _v0
    }) => _v0?.inputFieldSpacingY && _v4.css`
        .mktoField {
          margin-top: ${_v0?.inputFieldSpacingY} !important;
          margin-bottom: ${_v0?.inputFieldSpacingY} !important;
        }
      `}

    input[type='checkbox'] {
      height: 20px !important;
    }
    .mktoButtonRow {
      width: 100%;
      .mktoButtonWrap.mktoShadow {
        display: flex;
        margin: 0 !important;
        justify-content: center;
      }
    }
    .mktoLabel {
      display: none !important;
    }
    .mktoButtonRow button.mktoButton,
    .mktoButtonRow button.mktoButton:hover {
      padding: 0 4%;
      background: ${_v0 => _v0.submitButtonColor ? _v0.submitButtonColor : "#00ADEF"} !important;
      box-shadow: none !important;
      height: ${_v0 => _v0?.theme?.submitButtonMaxHeight || "52px"} !important;
      font-size: ${_v0 => _v0?.theme?.submitButtonFontSize || "16px"} !important;
      color: ${_v0 => _v0?.theme?.submitButtonTextColor || _v8} !important;
      border-radius: ${_v0 => _v0.buttonBorderRadius ? _v0.buttonBorderRadius : "10px"} !important;

      padding: 0 26px !important;
      font-weight: ${_v0 => _v0?.theme?.submitButtonFontWeight || "400"} !important;
      text-shadow: none !important;
      min-width: 200px !important;

      ${_v0 => "full-width" === _v0.submitButtonType ? `
            max-width: 100% !important;
            width: 100% !important;
          ` : _v0.submitButtonType && "default" !== _v0.submitButtonType ? void 0 : `
            max-width: fit-content !important;
            width: auto !important;
          `}
      &:hover {
        background: ${_v0 => _v0.submitButtonHoverColor || "#26B9F1"} !important;
      }
    }

    input[type='checkbox'] + label:before {
      box-shadow: none;
    }

    .iti {
      width: 100%;
      &.iti--allow-dropdown {
        margin-top: 0 !important;
      }
      input#Phone {
        width: 100%;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
      .iti__country span {
        color: ${_v9};
        display: inline-block;
        margin-left: 5px !important;
        width: auto !important;
      }
      .iti__flag-container,
      .iti__flag-box {
        width: auto !important;
      }
      .iti__selected-flag {
        padding-left: 10px !important;
      }
      .iti__flag {
        width: 20px !important;
      }
      .iti__arrow {
        margin-left: 5px !important;
        width: 6px !important;
      }
    }
    ${({
      checkboxLabelColor: _v0
    }) => _v0 && _v4.css`
        .mktoCheckboxList label,
        .mktoHtmlText * {
          color: ${_v0} !important;
        }
      `}
  }
  .mktoForm.mktoLayoutAbove,
  .mktoForm.mktoLayoutAbove .mktoLogicalField {
    input,
    select {
      border: 1px solid #dedede !important;
    }
  }
`,
    _v17 = _v4.default.div.withConfig({
      displayName: "MarketoForm__LoaderContainer",
      componentId: "sc-9a2144c0-1"
    })`
  display: ${({
      show: _v0
    }) => _v0 ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
`,
    _v18 = (0, _v3.memo)(({
      addChiliPiper: _v0,
      formIds: _v1,
      showForm: _v2 = !0,
      webformId: _v3 = _v7,
      submitText: _v4 = _v6,
      loader: _v5 = null,
      baseUrl: _v6 = "//lp.vimeo.com",
      munchkinId: _v7 = "582-GOU-684",
      locale: _v8 = "en",
      onSuccess: _v9 = () => {},
      tenantSubdomain: _v10 = "livestream",
      tenantRouter: _v11 = "marketo-router",
      className: _v12,
      name: _v13,
      userId: _v14,
      country: _v15,
      vuid: _v16,
      checkboxLabelColor: _v17,
      isLoggedIn: _v18,
      formPadding: _v19,
      submitButtonType: _v20,
      submitButtonColor: _v21,
      submitButtonHoverColor: _v22,
      formMaxWidth: _v23,
      buttonBorderRadius: _v24,
      theme: _v25
    }) => {
      let _v26 = (0, _v2.useRouter)(),
        [_v27, _v28] = (0, _v3.useState)(null),
        [_v29, _v30] = (0, _v3.useState)(!0),
        [_v31, _v32] = (0, _v3.useState)(!1),
        _v33 = (0, _v3.useRef)(null),
        _v34 = (0, _v3.useMemo)(() => _v1[_v8] || _v1.en, [_v8, JSON.stringify(_v1)]),
        _v35 = (0, _v3.useRef)(_v9),
        {
          loaded: _v36
        } = _v13({
          href: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css"
        }),
        {
          loaded: _v37
        } = _v13({
          href: "https://lp.vimeo.com/rs/582-GOU-684/images/intl-form.css"
        }),
        {
          loaded: _v38
        } = _v13({
          src: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"
        }),
        {
          loaded: _v39
        } = _v13({
          src: _v0 ? "https://js.chilipiper.com/marketing.js" : ""
        }),
        {
          loaded: _v40
        } = _v13({
          src: "//lp.vimeo.com/js/forms2/js/forms2.min.js"
        });
      return (0, _v3.useEffect)(() => {
        if (_v26.isReady && _v31 && _v2) {
          let _v0 = window;
          _v0?.MktoForms2 && !_v27 && (_v30(!0), _v33.current && (_v33.current.id = `mktoForm_${_v34}`), _v0.MktoForms2.loadForm(_v6, _v7, _v34, _v0 => {
            if (_v0) {
              let _v0, _v1, _v2, _v3;
              _v33.current.id = "", _v28(_v0.getFormElem()[0]), _v30(!1), ((_v0, _v1, _v2, _v3, _v4, _v5) => {
                let {
                    utm_source: _v6,
                    utm_medium: _v7,
                    utm_campaign: _v8,
                    utm_content: _v9,
                    utm_adgroup: _v10,
                    utm_term: _v11,
                    mkc: _v12,
                    gclid: _v13,
                    vcid: _v14,
                    fbclid: _v15
                  } = _v1.query,
                  _v16 = (() => {
                    let _v0 = window.localStorage.getItem("__landing_page");
                    if (_v0) try {
                      let _v0 = JSON.parse(_v0);
                      if (_v0.t && new Date().getTime() - _v0.t >= 0) return;
                      return _v0.p;
                    } catch (_v0) {
                      return;
                    }
                  })(),
                  _v17 = (_v0 => {
                    if (!_v0) return {};
                    let _v1 = _v0.indexOf("?");
                    if (-1 === _v1) return {};
                    let _v2 = _v0.substring(_v1 + 1).split("&"),
                      _v3 = {};
                    return _v2.forEach(_v0 => {
                      let _v1 = _v0.split("=");
                      2 === _v1.length && (_v3[_v1[0]] = encodeURIComponent(_v1[1]));
                    }), _v3;
                  })(_v16),
                  _v18 = {
                    utm_source__c: _v6 || _v17.utm_source,
                    utm_medium__c: _v7 || _v17.utm_medium,
                    utm_campaign__c: _v8 || _v17.utm_campaign,
                    utm_adgroup__c: _v10 || _v17.utm_adgroup,
                    utm_term__c: _v11 || _v17.utm_term,
                    utm_content__c: _v9 || _v17.utm_content,
                    mkc: _v12 || _v17.mkc,
                    GCLID__c: _v13 || _v17.gclid,
                    VCID__c: _v14 || _v17.vcid,
                    FBCLID__c: _v15 || _v17.fbclid,
                    vuid__c: "function" == typeof _v4 ? _v4() : _v4,
                    Web_Form_ID__c: _v3,
                    Landing_Page_URL__c: _v16,
                    Page_URL__c: window.location.origin + window.location.pathname
                  };
                void 0 !== _v2 && (_v18.Logged_In__c = _v2), void 0 !== _v5 && (_v18.mkto_Vimeo_User_ID = _v5), _v0.addHiddenFields(_v18);
              })(_v0, _v26, _v18, _v3, _v16, _v14), (_v0 = _v0.getFormElem()[0].querySelector("button.mktoButton")) && (_v0.innerHTML = _v4), _v2 = window, (_v3 = _v0.getFormElem()[0].querySelector("#Phone")) && (_v1 = _v2.intlTelInput(_v3, {
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
                autoPlaceholder: "aggressive",
                nationalMode: !1,
                separateDialCode: !1,
                initialCountry: _v15 || ""
              }), _v0.addHiddenFields({
                mktoCountry: _v1.getSelectedCountryData().name
              }), _v3.addEventListener("countrychange", () => {
                _v0.setValues({
                  mktoCountry: _v1.getSelectedCountryData().name
                });
              })), _v0.onValidate(() => {
                if (!_v1) return void _v0.submittable(!0);
                let _v0 = _v0.getFormElem().find("#Phone");
                if (_v1.isValidNumber()) _v0.submittable(!0);else {
                  let _v0 = _v1.getSelectedCountryData();
                  0 == _v1.getValidationError() ? (_v3.value = _v1.getNumber(), _v0.submittable(!0)) : (_v0.showErrorMessage((0, _v5.translate)({
                    singular: "Must be a valid {NAME} phone number.",
                    replacements: {
                      NAME: _v0.name
                    },
                    dictionary: {
                      es: {
                        singular: "Debe ser un número de teléfono válido en {NAME}."
                      },
                      "de-DE": {
                        singular: "Muss eine gültige {NAME}-Telefonnummer sein."
                      },
                      "fr-FR": {
                        singular: "Doit être un numéro de téléphone valide ({NAME})."
                      },
                      "ja-JP": {
                        singular: "有効な {NAME} の電話番号である必要があります。"
                      },
                      "ko-KR": {
                        singular: "유효한 {NAME} 전화번호여야 합니다."
                      },
                      "pt-BR": {
                        singular: "Deve ser um número de telefone dos {NAME} válido."
                      },
                      "zh-CN": {
                        singular: "必须是有效的 {NAME} 手机号码。"
                      }
                    }
                  }), _v0), _v0.submittable(!1));
                }
              }), _v0.onSuccess(() => (_v0 && "en" === _v8 && _v0.ChiliPiper.submit(_v10, _v11, {
                map: !0
              }), _v35.current?.(), !1));
            }
          }));
        }
      }, [_v26.isReady, _v31, _v2]), (0, _v3.useEffect)(() => {
        _v35.current = _v9;
      }, [_v9]), (0, _v3.useEffect)(() => {
        _v36 && _v37 && _v38 && _v40 && (!_v0 || _v39) && _v32(!0);
      }, [_v0, _v39, _v40, _v37, _v38, _v36]), (0, _v3.useEffect)(() => {
        if (_v27 && _v13 && _v2) {
          let _v0, _v1, _v2;
          var _v0 = _v27.getElementsByTagName("select");
          if (_v0) for (let _v0 of _v0) "" === _v0.value && _v14(_v0), _v0.addEventListener("change", () => {
            "" === _v0.value ? _v14(_v0) : _v15(_v0);
          });
          _v0 = (_v0 => {
            if (!_v0) return {
              firstName: "",
              lastName: ""
            };
            let _v1 = _v0.indexOf(" ");
            return -1 === _v1 ? {
              firstName: _v0,
              lastName: ""
            } : {
              firstName: _v0.slice(0, _v1),
              lastName: _v0.slice(_v1 + 1)
            };
          })(_v13), (_v1 = _v27.querySelector("#FirstName")) && (_v1.value = _v0.firstName), (_v2 = _v27.querySelector("#LastName")) && (_v2.value = _v0.lastName);
        }
      }, [_v27, _v13, _v2]), (0, _v1.jsxs)(_v16, {
        className: _v12,
        checkboxLabelColor: _v17,
        formPadding: _v19,
        submitButtonType: _v20,
        submitButtonColor: _v21,
        submitButtonHoverColor: _v22,
        formMaxWidth: _v23,
        buttonBorderRadius: _v24,
        theme: _v25,
        children: [(0, _v1.jsx)(_v17, {
          show: _v29 || !_v2,
          children: _v5
        }), _v8 && _v2 && (0, _v1.jsx)("form", {
          ref: _v33
        })]
      });
    }),
    _v19 = _v4.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
  _v4.default.div.withConfig({
    displayName: "MarketoModal__Underlay",
    componentId: "sc-1b2d3551-0"
  })`
  position: fixed;
  ${({
    show: _v0
  }) => _v0 ? _v4.css`
          display: flex;
          animation: 500ms ${_v19};
        ` : "display:none;"}
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
  overflow: auto;
  z-index: 100;
  padding-top: 0;
  @media screen and (min-width: 480px) {
    justify-content: center;
  }
  // NOTE: When the window height increases by 16 or more than the modal height,
  // vertically center the modal in the available height. This will keep
  // in the modal in the center when the available height is more than the
  // modal height.
  @media screen and (min-height: ${800}px) {
    align-items: center;
  }
`, _v4.default.div.withConfig({
    displayName: "MarketoModal__Modal",
    componentId: "sc-1b2d3551-1"
  })`
  max-width: 480px;
  padding: 0;
  width: 100%;
  background: ${_v8};
  min-height: 100vh;
  height: ${784}px;
  @media screen and (min-width: 480px) {
    border-radius: 8px;
  }
  @media screen and (min-height: ${800}px) {
    min-height: initial;
  }
`, _v4.default.div.withConfig({
    displayName: "MarketoModal__Header",
    componentId: "sc-1b2d3551-2"
  })`
  width: 100%;
  padding-left: 10px;
  position: relative;
  align-items: center;
  justify-content: left;
  display: flex;
  background: #f2f4f5;
  border-bottom: 1px solid #d0d8db;
  height: 60px;
  padding: 0 30px 0 20px;
  @media screen and (min-width: 480px) {
    border-radius: 8px 8px 0 0;
    justify-content: center;
    padding: 0 20px;
  }
`, _v4.default.div.withConfig({
    displayName: "MarketoModal__CrossButton",
    componentId: "sc-1b2d3551-3"
  })`
  flex-shrink: 0;
  flex-grow: 0;
  width: 26px;
  height: 26px;
  position: absolute;
  right: 15px;
  top: 15px;
  background: ${_v9};
  border-radius: 50%;
  padding: 4px 0 0 7px;
  text-align: left;
  cursor: pointer;
`, _v4.default.h3.withConfig({
    displayName: "MarketoModal__Heading",
    componentId: "sc-1b2d3551-4"
  })`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2;
  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
`, _v4.default.div.withConfig({
    displayName: "MarketoModal__ModalContent",
    componentId: "sc-1b2d3551-5"
  })`
  padding: 25px 10px 10px;
  @media screen and (min-width: 480px) {
    padding: 25px 20px 20px;
  }
`, _v0.s(["default", 0, _v18], 0);
}