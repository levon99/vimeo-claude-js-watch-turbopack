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
    _v12 = _v0.i(0);
  function _v13() {
    return (0, _v1.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "52",
      height: "52",
      viewBox: "0 0 52 52",
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M10.3784 22.75H6.04508C5.47045 22.75 4.91935 22.9783 4.51302 23.3846C4.10669 23.7909 3.87842 24.342 3.87842 24.9167C3.87842 25.4913 4.10669 26.0424 4.51302 26.4487C4.91935 26.855 5.47045 27.0833 6.04508 27.0833H10.3784C10.9531 27.0833 11.5042 26.855 11.9105 26.4487C12.3168 26.0424 12.5451 25.4913 12.5451 24.9167C12.5451 24.342 12.3168 23.7909 11.9105 23.3846C11.5042 22.9783 10.9531 22.75 10.3784 22.75ZM46.7351 16.5967V16.4667C46.1143 15.7079 45.3299 15.0993 44.4407 14.6866C43.5514 14.2739 42.5803 14.0676 41.6001 14.0833H24.4184C22.8264 14.069 21.2844 14.6395 20.0851 15.6867C18.9649 16.6736 18.2285 18.0238 18.0051 19.5L16.0984 30.3333C15.9345 31.2689 15.9775 32.229 16.2246 33.1461C16.4716 34.0632 16.9167 34.9151 17.5284 35.6417C18.1369 36.3658 18.8962 36.9485 19.7532 37.3489C20.6101 37.7493 21.5442 37.9579 22.4901 37.96H39.6934C41.2388 37.9834 42.7419 37.4553 43.9331 36.4706C45.1243 35.4858 45.9257 34.1088 46.1934 32.5867L48.1001 21.7533C48.2503 20.8461 48.2062 19.9174 47.9709 19.0285C47.7356 18.1396 47.3144 17.3107 46.7351 16.5967ZM40.7984 18.4167L33.4318 24.3967C32.9962 24.7477 32.4417 24.9167 31.8844 24.8682C31.3271 24.8197 30.8102 24.5576 30.4418 24.1367L25.3934 18.4167H40.7984ZM41.8384 31.785C41.7507 32.2937 41.4843 32.7544 41.087 33.0841C40.6898 33.4138 40.1879 33.5908 39.6718 33.5833H22.4901C22.1754 33.5807 21.8651 33.5095 21.5808 33.3748C21.2964 33.2401 21.0448 33.0451 20.8434 32.8033C20.6415 32.5628 20.4943 32.2813 20.412 31.9783C20.3297 31.6752 20.3143 31.3579 20.3668 31.0483L22.1001 21.2333L27.1918 26.9967C28.3 28.2563 29.8524 29.0386 31.5242 29.1799C33.196 29.3213 34.8577 28.8107 36.1618 27.755L43.6151 21.6667L41.8384 31.785ZM12.5451 14.0833H6.04508C5.47045 14.0833 4.91935 14.3116 4.51302 14.7179C4.10669 15.1243 3.87842 15.6754 3.87842 16.25C3.87842 16.8246 4.10669 17.3757 4.51302 17.7821C4.91935 18.1884 5.47045 18.4167 6.04508 18.4167H12.5451C13.1197 18.4167 13.6708 18.1884 14.0771 17.7821C14.4835 17.3757 14.7118 16.8246 14.7118 16.25C14.7118 15.6754 14.4835 15.1243 14.0771 14.7179C13.6708 14.3116 13.1197 14.0833 12.5451 14.0833Z",
        fill: "#85D672"
      })
    });
  }
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = {
      action_type: "",
      currency: null,
      device_type: null,
      discount_offer: null,
      duration: null,
      is_discount: null,
      is_new_pricing: null,
      loading_time: null,
      path: null,
      plan_selected: null,
      price: null,
      promo_code_id: null,
      purchase_type: null,
      target_path: null,
      upgrade_flags: null,
      upsell_name: null
    },
    _v17 = () => {
      let _v0 = (0, _v2.useRouter)(),
        _v1 = _v0?.query?.tracking_param,
        {
          colorMode: _v2
        } = (0, _v7.useColorMode)(),
        _v3 = (0, _v8.useTheme)(),
        _v4 = _v1 ? JSON.parse(decodeURIComponent(_v1)) : {},
        _v5 = (0, _v5.useContext)(_v12.ViewerContext),
        [_v6, _v7] = (0, _v5.useState)(!1);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14.GlobalStyles, {}), (0, _v1.jsxs)(_v14.StyledContainer, {
          themeMode: _v2,
          children: [!_v6 && _v5 && (0, _v1.jsxs)(_v14.MarketoFormContainer, {
            children: [(0, _v1.jsx)(_v14.StyledFormHeader, {
              themeMode: _v2,
              element: "h3",
              size: "3",
              children: (0, _v9.translate)({
                singular: "Connect with our team",
                dictionary: {
                  es: {
                    singular: "Ponte en contacto con nuestro equipo"
                  },
                  "de-DE": {
                    singular: "Tritt mit unserem Team in Kontakt"
                  },
                  "fr-FR": {
                    singular: "Échangez avec notre équipe"
                  },
                  "ja-JP": {
                    singular: "Vimeoのチームとつながる"
                  },
                  "ko-KR": {
                    singular: "Vimeo 팀에 문의하세요."
                  },
                  "pt-BR": {
                    singular: "Fale com nossa equipe"
                  },
                  "zh-CN": {
                    singular: "与我们的团队联系"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.default, {
              theme: {
                ...((_v0, _v1) => {
                  let {
                      semanticTokens: {
                        colors: _v2
                      }
                    } = _v1,
                    _v3 = {
                      checkboxListpaddingRight: (0, _v4.rem)(0),
                      checkboxInputMarginTop: (0, _v4.rem)(0),
                      checkboxLabelLineHeight: (0, _v4.rem)(21.56),
                      checkboxLabelWidth: "100%",
                      checkboxLabelFontWeight: "400",
                      formColBottomSpacing: (0, _v4.rem)(0),
                      inputFieldPlaceHolderPaddingX: (0, _v4.rem)(14),
                      inputFieldSpacingY: (0, _v4.rem)(6),
                      checkboxListSpacingTop: (0, _v4.rem)(14),
                      checkboxLabelFontSize: (0, _v4.rem)(14),
                      inputFieldPlaceHolderFontSize: (0, _v4.rem)(16),
                      submitButtonFontWeight: "700",
                      submitButtonFontSize: (0, _v4.rem)(14),
                      submitButtonMaxHeight: (0, _v4.rem)(40),
                      submitButtonTextColor: "var(--vimeo-colors-white)",
                      inputPlaceholderColor: "var(--vimeo-colors-text-secondary)",
                      inputBoxBorderColor: "var(--vimeo-colors-input-stroke)",
                      inputPlaceholderBackgroundColor: "var(--vimeo-colors-input-fill)",
                      formDropDownTextColor: "var(--vimeo-colors-text-secondary)"
                    },
                    _v4 = {
                      inputTextColor: _v2["text-primary"].default,
                      placeholder: _v2["text-tertiary"].default
                    },
                    _v5 = {
                      inputTextColor: _v2["text-primary"]._dark,
                      placeholder: _v2.grayscale["400"]
                    };
                  return {
                    ..._v3,
                    ...("light" === _v0 ? _v4 : _v5)
                  };
                })(_v2, _v3)
              },
              checkboxLabelColor: "var(--vimeo-colors-text-primary)",
              buttonBorderRadius: (0, _v4.rem)(8),
              formMaxWidth: (0, _v4.rem)(504),
              submitButtonColor: "var(--vimeo-colors-upsell-primary)",
              submitButtonHoverColor: "dark" === _v2 ? "#fcfafa" : "#444F58",
              formPadding: (0, _v4.rem)(0),
              submitButtonType: "full-width",
              onSuccess: () => {
                _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo.upgrade_action", 15, {
                  ..._v16,
                  ..._v4,
                  copy: "Contact our Team",
                  feature: "upgrade_cta",
                  location: "upsell_modal",
                  page: window.parent.location.pathname,
                  target: window.parent.location.pathname,
                  path: window.parent.location.href
                })), _v7(!0);
              },
              formIds: {
                en: 0,
                es: 0,
                "de-DE": 0,
                "fr-FR": 0,
                "ja-JP": 0,
                "ko-KR": 0,
                "pt-BR": 0
              },
              locale: _v5.locale || "en",
              name: _v5.user?.name,
              userId: _v5.user?.id,
              country: _v5.location,
              tenantRouter: "in_product_enterprise_router",
              webformId: "logged_in_modal_premium",
              showForm: !!_v5
            })]
          }), _v6 && (0, _v1.jsx)(_v15.default, {
            icon: (0, _v1.jsx)(_v13, {}),
            iconTopSpacing: (0, _v4.rem)(40),
            topSpacing: (0, _v4.rem)(0),
            buttonTopSpacing: (0, _v4.rem)(24),
            buttonColor: "dark" === _v2 ? (0, _v10.slate)(900) : _v10.white,
            buttonBgColor: "dark" === _v2 ? _v10.white : (0, _v10.slate)(900),
            bottomBorderRadius: (0, _v4.rem)(10),
            eventName: "vimeo.upgrade_action",
            sendPostMessage: !0,
            thankYouTextFontWeight: "700",
            thankYouTextColor: "dark" === _v2 ? _v10.white : (0, _v10.slate)(900),
            friendlyTextColor: "dark" === _v2 ? (0, _v10.grayscale)(240) : (0, _v10.slate)(540),
            friendlyTextFontWeight: "400",
            textContainerMaxWidth: (0, _v4.rem)(456),
            buttonFontSize: (0, _v4.rem)(14),
            decodedTrackingParameters: _v4,
            eventVersion: 15
          })]
        })]
      });
    };
  (0, _v3.withPageSetup)(() => ({
    props: {
      isIframe: !0,
      layoutOptions: {
        globalNotifications: !1
      },
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    omitEsi: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useRouter)();
    return _v0?.query?.modal ? (0, _v1.jsx)(_v17, {}) : null;
  }], 0);
}