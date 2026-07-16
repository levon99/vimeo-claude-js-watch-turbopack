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
  let _v9 = _v8.createGlobalStyle`
  ${_v0 => _v0.isBokeh && _v8.css`
      #teamInfo,
      #profile_dropdown .invite-members-button {
        align-items: center;
        padding-block: 0px;
        padding-inline: 16px;
        border-radius: 12px;
        border: unset;
        color: ${_v0.theme?.name === "light" ? "var(--vimeo-colors-gray-900)" : "var(--vimeo-colors-gray-50)"};
        background: ${_v0.theme?.name === "light" ? "var(--vimeo-colors-darkBlueAlpha-200)" : "var(--vimeo-colors-lightBlueAlpha-300)"};

        &:hover {
          background: ${_v0.theme?.name === "light" ? "var(--vimeo-colors-darkBlueAlpha-300)" : "var(--vimeo-colors-lightBlueAlpha-400)"};
        }
      }

      #profile_dropdown .team-switcher-loading-container {
        --input-font-size: var(--vimeo-fontSizes-input-md);
        --input-height: var(--vimeo-sizes-md);
        --input-border-radius: var(--vimeo-radii-input-md);
        --input-padding: var(--vimeo-space-input-md);
        height: var(--input-height);
        font-size: var(--input-font-size);
        border: 1px solid var(--vimeo-colors-input-stroke);
        border-radius: var(--input-border-radius);
        color: var(--vimeo-colors-text-primary);
        background-color: var(--vimeo-colors-surface);
        transition: 120ms ease-in-out;
        width: 100%;
        box-shadow: rgb(0, 173, 239) 0px 0px 0px 0px;

        & .team-switcher-loader {
          background: ${_v0 => _v0.theme?.name === "light" ? "linear-gradient(290deg, var(--vimeo-colors-gray-100) 10%, var(--vimeo-colors-gray-200) 50%, var(--vimeo-colors-gray-100) 90%)" : "linear-gradient(290deg, var(--vimeo-colors-gray-800) 10%, var(--vimeo-colors-gray-700) 50%, var(--vimeo-colors-gray-800) 90%)"};
        }
      }

      #profileLogo {
        height: 24px !important;
        width: 24px;
      }

      /** Menu content styles */
      #profile_dropdown,
      .user-submenu,
      .team-switcher-popover {
        border: unset;
        outline: transparent solid 2px;
        outline-offset: 2px;
        max-height: fit-content;
        backdrop-filter: blur(var(--vimeo-blur-lg));
        z-index: var(--vimeo-zIndices-dropdown);
        border-radius: var(--vimeo-radii-md);
        box-shadow: var(
          --vimeo-shadows-md,
          0px 0px 24px -5px rgba(0, 0, 0, 0.16),
          0px 0px 4px 0px rgba(0, 0, 0, 0.08)
        );
        padding: var(--vimeo-space-2);
        background: ${_v0 => _v0.theme?.name === "dark" ? "var(--vimeo-colors-gray-700)" : "var(--vimeo-colors-gray-50)"};
      }

      .team-switcher-popover {
        background: ${_v0 => _v0.theme?.name === "dark" ? "var(--vimeo-colors-gray-800)" : "var(--vimeo-colors-gray-50)"};
      }

      /** Menu item default styles */
      #profile_dropdown li a,
      .user-submenu li a,
      .team-switcher-item {
        text-decoration: none;
        color: var(--vimeo-colors-text-primary);
        user-select: none;
        display: flex;
        width: 100%;
        align-items: center;
        text-align: start;
        flex: 0 0 auto;
        outline: transparent solid 2px;
        outline-offset: 2px;
        background: transparent;
        padding: var(--vimeo-space-2);
        cursor: pointer;
        font-size: var(--vimeo-fontSizes-body-md);
        font-weight: normal;
        border-radius: var(--vimeo-radii-sm);
      }

      /** Menu item hover styles */
      #profile_dropdown li:hover,
      .team-switcher-item:hover {
        background: ${_v0 => _v0.theme?.name === "dark" ? "var(--vimeo-colors-lightBlueAlpha-300)" : "var(--vimeo-colors-darkBlueAlpha-200)"};
        color: ${_v0 => _v0.theme?.name === "dark" ? "white" : "var(--vimeo-colors-gray-900)"};
      }

      /** Menu item selected styles */
      #profile_dropdown .list-item-selected li,
      #profile_dropdown .user-profile-link:hover {
        background: ${_v0 => _v0.theme?.name === "dark" ? "var(--vimeo-colors-lightBlueAlpha-300)" : "var(--vimeo-colors-darkBlueAlpha-200)"};
      }

      /** Select styles */
      #profile_dropdown .team-switcher-dropdown {
        height: var(--input-height);
        font-size: var(--input-font-size);
        padding-block: 0px;
        border: 1px solid var(--vimeo-colors-input-stroke);
        border-radius: var(--input-border-radius);
        color: var(--vimeo-colors-text-primary);
        background-color: var(--vimeo-colors-surface);
        transition: 120ms ease-in-out;
        width: 100%;
        margin: 0px;
        overflow: visible;
        line-height: 1.5;
        overflow-wrap: break-word;
        box-shadow: rgb(0, 173, 239) 0px 0px 0px 0px;
        cursor: pointer;
        appearance: none;
        --input-font-size: var(--vimeo-fontSizes-input-md);
        --input-height: var(--vimeo-sizes-md);
        --input-border-radius: var(--vimeo-radii-input-md);
        --input-padding: var(--vimeo-space-input-md);
        display: flex;
        justify-content: space-between;
        align-items: center;

        > div {
          align-items: center;
        }
      }

      /** Tooltip styles */
      #profile_dropdown .tooltip-body {
        border: unset;
        font-size: var(--vimeo-fontSizes-body-md);
        background-color: ${_v0.theme?.name === "dark" ? "var(--vimeo-colors-gray-600)" : "var(--vimeo-colors-gray-200)"};
        text-align: center;
        border-radius: var(--vimeo-radii-sm);
        padding-block: var(--vimeo-space-1);
        padding-inline: var(--vimeo-space-3);
        color: var(--vimeo-colors-text-primary);
        z-index: var(--vimeo-zIndices-tooltip);
        backdrop-filter: blur(var(--vimeo-blur-md));
      }

      /** Center the two paragraph elements */
      #profile_dropdown .tooltip-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}
`,
    _v10 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).ContentFilterModal
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v11 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).LanguageSelectModal
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v12 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v13 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).StartYourTeamFlow
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v14 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).ManagedAccountsInviteFlow
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v15 = (0, _v2.default)(async () => ({
      default: (await _v0.A(0)).PromoPopup
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v16 = _v0 => {
      let _v1 = (0, _v4.useIsBokeh)(),
        _v2 = (0, _v7.useViewer)(),
        [_v3, _v4] = (0, _v3.useState)(null),
        [_v5, _v6] = (0, _v3.useState)("navbar"),
        _v7 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
        _v8 = _v2?.apiUrl && null != _v7 ? {
          apiUrl: _v2.apiUrl,
          jwt: _v2.jwt,
          ownerId: _v7
        } : void 0,
        _v9 = (0, _v3.useCallback)(() => {
          (0, _v6.clearPostSurveyRedirect)();
          let _v0 = _v2?.xsrft;
          fetch("/log_out", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(_v0 ? {
              token: _v0
            } : {}).toString(),
            credentials: "same-origin"
          }).catch(() => void 0).finally(() => {
            window.location.href = "/";
          });
        }, [_v2?.xsrft]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v9, {
          isBokeh: _v1
        }), _v0.children({
          setModal: _v4
        }), _v2?.contentViewingPrefs && (0, _v1.jsx)(_v10, {
          active: "content_viewing_prefs" === _v3,
          activeSet: _v0 => _v4(_v0),
          token: _v2.xsrft,
          contentViewingPrefs: _v2.contentViewingPrefs
        }), "language" === _v3 && _v2 && (0, _v1.jsx)(_v11, {
          active: !0,
          activeSet: _v0 => _v4(_v0),
          locale: _v2.locale,
          locales: _v2.locales,
          localeLabels: _v2.localeLabels,
          token: _v2.xsrft
        }), "upsell" === _v3 && (0, _v1.jsx)(_v12, {
          apiUrl: _v2?.apiUrl,
          onClose: () => _v4(null),
          templateType: "default",
          tracking: {
            params: {
              feature: "teams",
              location: "top_navigation_bar",
              page: (0, _v5.getPageNameFromPath)(window.location.pathname, _v2?.user) || "ss_lihp",
              upsell_name: "start_team",
              integration: "none"
            },
            paywallTracking: {
              paywallTrigger: "top_navigation_account_menu_start_team_button",
              paywallLocation: "top_navigation",
              paywallType: "popup",
              paywallFeature: "teams"
            }
          },
          userConfig: {
            jwt: _v2?.jwt,
            userId: _v2?.user?.id
          },
          modalConfig: {
            mkcCode: "unified-top-nav-legacy"
          }
        }), "start_your_team" === _v3 && _v8 && (0, _v1.jsx)(_v13, {
          isOpen: !0,
          apiConfig: _v8,
          defaultTeamName: _v2?.user?.name ?? "",
          entryPoint: "account_menu",
          onClose: () => _v4(null)
        }), "add_client_account" === _v3 && (0, _v1.jsx)(_v14, {
          ctaSource: _v5,
          onClose: () => {
            _v4(null), _v6("navbar");
          }
        }), "logout_promo" === _v3 && (0, _v1.jsx)(_v15, {
          isOpen: !0,
          onClose: _v9,
          onCtaClick: () => {
            _v6("logout_promo"), _v4("add_client_account");
          }
        })]
      });
    },
    _v17 = (0, _v2.default)(async () => {
      let {
        AccountMenu: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["AccountMenuWithModals", 0, ({
    hasThemeSupport: _v0 = !0,
    onConfirmTeamSwitch: _v1
  }) => (0, _v1.jsx)(_v16, {
    children: ({
      setModal: _v0
    }) => (0, _v1.jsx)(_v17, {
      setModal: _v0 => _v0(_v0),
      hasThemeSupport: _v0,
      onConfirmTeamSwitch: _v1
    })
  })], 0);
}