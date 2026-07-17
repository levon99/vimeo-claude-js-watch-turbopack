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
    _v17 = _v0.i(0);
  async function _v18({
    baseUrl: _v0,
    where: {
      resourceType: _v1
    },
    ..._v2
  }) {
    return (0, _v16.measureLatency)("getSsoMeta", "GET", async () => {
      let _v0 = await fetch(`${_v0}/sso/${_v1}/meta`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v22.useGctlConfig)();
    return (0, _v19.default)(_v2 ? `/sso/${_v2.where.resourceType}/meta${(0, _v21.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v18({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v15.default.env.STORYBOOK && (0, _v21.assignMswData)(_v23, {
    endpoint: "/sso/:resourceType/meta",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v21.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v20.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v22.useGctlConfig)(),
      [_v5, _v6] = (0, _v21.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/sso/${_v0.where.resourceType}/meta${(0, _v21.serializeQuery)(_v0)}`, _v18({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/sso/:resourceType/meta",
    method: "GET"
  });
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = ({
      text: _v0,
      href: _v1,
      ..._v2
    }) => (0, _v1.jsx)(_v12.Link, {
      target: "_blank",
      variant: "inline-primary",
      fontSize: "inherit",
      color: "inherit",
      href: _v1,
      ..._v2,
      children: _v0
    }, _v1?.replace("/", "_")),
    _v27 = (0, _v24.translate)({
      singular: "Something went wrong. Please try again.",
      dictionary: {
        es: {
          singular: "Algo salió mal. Inténtalo de nuevo."
        },
        "de-DE": {
          singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
        },
        "fr-FR": {
          singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
        },
        "ja-JP": {
          singular: "エラーが発生しました。 再度お試しください。"
        },
        "ko-KR": {
          singular: "문제가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Alguma coisa deu errado. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "出错了。请重试。"
        }
      }
    }),
    _v28 = _v0 => ({
      terms: _v0 => (0, _v1.jsx)(_v26, {
        href: "/terms",
        onClick: () => {},
        text: _v0
      }),
      privacy: _v0 => (0, _v1.jsx)(_v26, {
        href: "/privacy",
        onClick: () => {},
        text: _v0
      }),
      cookies: _v0 => (0, _v1.jsx)(_v26, {
        href: "/cookie_policy",
        onClick: () => {},
        text: _v0
      }),
      copyright: _v0 => (0, _v1.jsx)(_v26, {
        href: "/dmca",
        onClick: () => {},
        text: _v0
      }),
      privacyChoices: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v26, {
          href: "/",
          onClick: _v0 => {
            _v0.preventDefault();
            let _v1 = window;
            _v0 && _v1?.transcend && _v1.transcend.showConsentManager({
              viewState: "GDPR" === _v0 ? "AcceptOrRejectAll" : "DoNotSellExplainer"
            });
          },
          text: _v0
        }), (0, _v1.jsx)(_v1.Fragment, {
          children: " | "
        })]
      }),
      USStatePrivacy: _v0 => (0, _v1.jsx)(_v26, {
        href: "/privacy/us-state-privacy",
        onClick: () => {},
        text: _v0
      }),
      impressum: _v0 => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v1.Fragment, {
          children: " | "
        }), (0, _v1.jsx)(_v26, {
          href: "/leo/guidelines/impressum",
          onClick: () => {},
          text: _v0
        })]
      })
    });
  var _v29 = _v0.i(0);
  let _v30 = ({
      isChina: _v0,
      showPrivacyChoices: _v1,
      showImpressum: _v2,
      regime: _v3
    }) => {
      let {
        terms: _v4,
        privacy: _v5,
        privacyChoices: _v6,
        USStatePrivacy: _v7,
        copyright: _v8,
        cookies: _v9,
        impressum: _v10
      } = _v28(_v3);
      if (_v0) {
        let _v0 = (0, _v24.translate)({
            singular: "© {YEAR} VideoJi, Inc. All rights reserved. {TERMS}Terms{/TERMS} | {PRIVACY}Privacy{/PRIVACY}",
            replacements: {
              YEAR: new Date().getFullYear().toString(),
              TERMS: _v4,
              PRIVACY: _v5,
              COPYRIGHT: _v8,
              COOKIES: _v9
            },
            dictionary: {
              es: {
                singular: "© {YEAR} VideoJi, Inc. Todos los derechos reservados. {TERMS}Términos{/TERMS} | {PRIVACY}Privacidad{/PRIVACY}"
              },
              "de-DE": {
                singular: "© {YEAR} VideoJi, Inc. Alle Rechte vorbehalten. {TERMS}Bedingungen{/TERMS} | {PRIVACY}Datenschutz{/PRIVACY}"
              },
              "fr-FR": {
                singular: "© {YEAR} VideoJi, Inc. Tous droits réservés. {TERMS}Conditions d'utilisation{/TERMS} | {PRIVACY}Confidentialité{/PRIVACY}"
              },
              "ja-JP": {
                singular: "© {YEAR} VideoJi, Inc. All rights reserved.（不許複製・禁無断転載）{TERMS}利用規約{/TERMS} | {PRIVACY}プライバシー{/PRIVACY}"
              },
              "ko-KR": {
                singular: "© {YEAR} VideoJi, Inc. All rights reserved. {TERMS}약관{/TERMS} | {PRIVACY}개인정보 보호{/PRIVACY}"
              },
              "pt-BR": {
                singular: "© {YEAR} VideoJi, Inc. Todos os direitos reservados. {TERMS}Termos{/TERMS} | {PRIVACY}Privacidade{/PRIVACY}"
              },
              "zh-CN": {
                singular: "© {YEAR} VideoJi, Inc. 保留所有权利。{TERMS}条款 {/TERMS} | {PRIVACY}隐私{/PRIVACY}"
              }
            }
          }),
          _v1 = (0, _v1.jsx)(_v26, {
            href: "https://beian.miit.gov.cn/",
            rel: "noreferrer",
            target: "_blank",
            text: "京ICP备19007319号-125"
          }),
          _v2 = (0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            children: [(0, _v1.jsx)(_v29.Box, {
              as: "img",
              height: (0, _v7.rem)(16),
              width: "auto",
              marginRight: "50",
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFQklEQVRYw+3Wa1BUdRjH8SOpMeg4WhZGpDIxiaaTeUFgWrxE4AVRQJGlRRAVIV1JkbgMgQLi5AVBQSVLSp0xlEAUKBEEFZCrCstll8UV2AV2YbmoGCrYv31+R95UL5pmmtamZ+bz6rz5nvOc/5zDcX9jGLs/iTxuyvIlWYkRFeTHA2HVRFtzfhthTG5KuH96/vUgNlC4mMgyw1NJit/aAXLKazYje9xtIMZ/OZz50gW+9hcNkvoLEemEPbnrSP47QYwxQ5Ifv54RqzcXwFFvSyjaOhfavN8F7Y5ZcC/HH9JOB4LNa9Zw5YA76OZV8vIGMdZtSp7cDrtOnOavYiQhTAiPwi1AMtIQaqyngsxpBtw2GAGDKfaQmpUAa6xc4Vfp4UtEdzAMycsT9JQ1Tyctl/2eEkuTlYysF/rCUNxMqDEzgTqzSXBnpgnIHCzgjvEEuD52DLBr3rA1MAaWmNtB582wdtIljZ9G9D+IPU6aTxIPBjHCcXvg3CEh9K2fDLWvjIH6D6fwTIyheuwEqLUyhzLOALq8pkN+bgRw3HY4FBsMzxojZxP9DequLjAlQwVrbpIjhyIY4UYGQ/buhdBqPxlk3Gion2IMDQIz3kJe/ZS34I7uHkmD7VSQVgYDNyIAwsNCgfXGXoOBPjP9DKrOCAogA2etGTmTHAMcFwFZye7wS5QlVHGjoEw4A2qPCUBZ6AzNcQ5Q/YYRdO+YB1U3dsDwypLio4FJ3ECryIzWz6Cm3NgTRHN8HiPF6eHAGSbAdh8feFZkB7krzaHE9h2o85sDsiAbkIsXQMN+e2CtGyF0kzdwXCgU5++D/ouLQFV4OEU/g2Q/iNuIPNaKkQflAWBqexxGjhLDVUcL6IwSQN3SGVChe6FJg9dckCx6D1QBliDZLIAxo7eA8eyv4KE0BJqTrHkZvnL9DJKn+Twmt0NsGGHZy2Dn3kQYfsQ53Hh4/r4RNGz8AIpdzKEuaAF0RC2E57MmQgE3ATjuM/CPiANW7AqSfQJQ5vk362eQKmd3JrmXsoSRocpNIMnbB9zbceDIWUPmuHFQNMkISqa9DpUvNK6YDpW2s8DfwBK48WFQnhMCgzUBoLy0BrRVe5P0NWjPLdKUsJiR1tR1wGp8IeZwMgx/SrgRvjxuAziNcwLvyathLOcJHLflhRDYGRYFrNET2rJ5yvPLoas0tOj/oL8UpC4JHyTSU+6MNCS4gvKoAB5WiKG+MAQSg0WwLXQ/ZJ3xhao0FxB5hYCbUwAEfhEF3Td8QP2dAOQnPwFlxgrolUVq9TPoaX+ZB2nLc2Gk6awj1MU78HZZwJMid2Byb550JQwVO0NfxlJgdz14vWKeRAiK6DlQF28PLZdcoLNcBIO92bb6GTQ8Q/13RURT6tlH2gvXMlITLYD6uI+gp2ozdF0VQXumM6ivCqGvahM8kPiDItkeGo8tB025GFQ3xFrSr06zI3/4yde7oN7m0sWk5eKWDqK5JWJQvAHac9ygq3Adr9gTNNc3QG85rzPfHe5/7wDtPwuhp/Zz6CjyhaZzwi6ivfetHdH/oP77+3PJQOsuRnqkQdCa4wWqyx6gyecpL64GTaEX7ycXUJz4GJp1B4O0X/Hg0Xp1tFV+8Ei1k6c5coHofxBrrzQinbKYo0SVJ+wn6iurGHlY5gY911aDJnMFaHXXiDp9GQyvtKfUA9QFTtBZ7gPdit0tpFd9OpwwFmlA9D/o9yNLDpxIKmI8PMnNSNtviCLVpYTITzrXEGWaq4qos0WgOPdpCenIF+eRrurjB4k0PXopYZG6gMg/D/gNBUxhAbSAmKMAAAAASUVORK5CYII="
            }), (0, _v1.jsx)(_v26, {
              href: "https://beian.mps.gov.cn/#/query/webSearch?code=11010502055965",
              rel: "noreferrer",
              target: "_blank",
              text: "京公网安备11010502055965号"
            })]
          });
        return (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v0, " | ", _v1, " | ", _v2]
        });
      }
      return (0, _v24.translate)({
        singular: "© {YEAR} Vimeo.com, Inc. All rights reserved. {TERMS}Terms{/TERMS} | {PRIVACY}Privacy{/PRIVACY} | {PRIVACY_CHOICES}Your Privacy Choices{/PRIVACY_CHOICES}{US_STATE_PRIVACY}U.S. State Privacy{/US_STATE_PRIVACY} | {COPYRIGHT}Copyright{/COPYRIGHT} | {COOKIES}Cookies{/COOKIES}{IMPRESSUM}Impressum{/IMPRESSUM}",
        replacements: {
          YEAR: new Date().getFullYear().toString(),
          TERMS: _v4,
          PRIVACY: _v5,
          PRIVACY_CHOICES: _v1 || _v3 ? _v6 : () => null,
          US_STATE_PRIVACY: _v7,
          COPYRIGHT: _v8,
          COOKIES: _v9,
          IMPRESSUM: _v2 ? _v10 : () => null
        },
        dictionary: {
          es: {
            singular: "©{YEAR} Vimeo.com, Inc. Todos los derechos reservados. {TERMS}Términos{/TERMS} | {PRIVACY}Privacidad{/PRIVACY} | {PRIVACY_CHOICES}Sus opciones de privacidad{/PRIVACY_CHOICES}{US_STATE_PRIVACY}Privacidad estatal de EE. UU. {/US_STATE_PRIVACY} | {COPYRIGHT}Derechos de autor{/COPYRIGHT} | {COOKIES}Cookies{/COOKIES}{IMPRESSUM}Impressum{/IMPRESSUM}"
          },
          "de-DE": {
            singular: "© {YEAR} Vimeo.com, Inc. Alle Rechte vorbehalten. {TERMS}Nutzungsbedingungen{/TERMS} | {PRIVACY}Datenschutz{/PRIVACY} | {PRIVACY_CHOICES}Ihre Datenschutzeinstellungen{/PRIVACY_CHOICES}{US_STATE_PRIVACY}Datenschutz in US-Bundesstaaten{/US_STATE_PRIVACY} | {COPYRIGHT}Copyright{/COPYRIGHT} | {COOKIES}Cookies{/COOKIES}{IMPRESSUM}Impressum{/IMPRESSUM}"
          },
          "fr-FR": {
            singular: "© {YEAR} Vimeo.com, Inc. Tous droits réservés. {TERMS}Conditions d'utilisation{/TERMS} | {PRIVACY}Confidentialité{/PRIVACY} | {PRIVACY_CHOICES}Vos choix en matière de confidentialité{/PRIVACY_CHOICES}{US_STATE_PRIVACY}Confidentialité des États américains{/US_STATE_PRIVACY} | {COPYRIGHT}Droit d'auteur{/COPYRIGHT} | {COOKIES}Cookies{/COOKIES}{IMPRESSUM}Mentions légales{/IMPRESSUM}"
          },
          "ja-JP": {
            singular: "© {YEAR} Vimeo.com, Inc. All rights reserved.（不許複製・禁無断転載）{TERMS}利用規約{/TERMS} | {PRIVACY}プライバシー{/PRIVACY} | {PRIVACY_CHOICES}お客様のプライバシー選択{/PRIVACY_CHOICES}{US_STATE_PRIVACY}米国州のプライバシー{/US_STATE_PRIVACY} | {COPYRIGHT}著作権{/COPYRIGHT} | {COOKIES}Cookie{/COOKIES}{IMPRESSUM}サイトポリシー{/IMPRESSUM}"
          },
          "ko-KR": {
            singular: "© {YEAR} Vimeo.com, Inc. All rights reserved. {TERMS}이용 약관{/TERMS} | {PRIVACY}개인정보보호{/PRIVACY} | 사용자의 개인정보보호 선택 {PRIVACY_CHOICES}{/PRIVACY_CHOICES}{US_STATE_PRIVACY}미국 개인정보보호{/US_STATE_PRIVACY} | {COPYRIGHT}저작권{/COPYRIGHT} | {COOKIES}쿠키{/COOKIES}{IMPRESSUM}소유권{/IMPRESSUM}"
          },
          "pt-BR": {
            singular: "© {YEAR} Vimeo.com, Inc. Todos os direitos reservados. {TERMS}Termos{/TERMS} | {PRIVACY}Privacidade{/PRIVACY} | {PRIVACY_CHOICES}Suas opções de privacidade{/PRIVACY_CHOICES}{US_STATE_PRIVACY}Leis estaduais de privacidade dos EUA{/US_STATE_PRIVACY} | {COPYRIGHT}Direitos autorais{/COPYRIGHT} | {COOKIES}Cookies{/COOKIES}{IMPRESSUM}Impressum{/IMPRESSUM}"
          },
          "zh-CN": {
            singular: "© {YEAR} Vimeo.com, Inc. 保留所有权利。{TERMS}条款{/TERMS} | {PRIVACY}隐私{/PRIVACY} | {PRIVACY_CHOICES}您的隐私选择{/PRIVACY_CHOICES}{US_STATE_PRIVACY}美国各州隐私{/US_STATE_PRIVACY} | {COPYRIGHT}版权{/COPYRIGHT} | {COOKIES}Cookie {/COOKIES}{IMPRESSUM}版权说明{/IMPRESSUM}"
          }
        }
      });
    },
    _v31 = ({
      isChina: _v0,
      showPrivacyChoices: _v1,
      showImpressum: _v2,
      showForbidden: _v3 = !1
    }) => {
      let {
          data: _v4,
          isLoading: _v5,
          error: _v6
        } = _v23(() => _v3 ? null : {
          where: {
            resourceType: "owner"
          }
        }),
        _v7 = (0, _v8.useToast)();
      (0, _v2.useEffect)(() => {
        _v6 && !_v3 && _v7({
          duration: 0,
          title: _v27
        });
      }, [_v6, _v7, _v3]);
      let [_v8, _v9] = (0, _v2.useState)(null);
      if ((0, _v2.useEffect)(() => {
        let _v0 = () => {
          let {
            airgap: _v0
          } = window;
          try {
            let _v0 = _v0?.getRegimes?.();
            _v0?.has("GDPR") ? _v0?.ready(() => _v9("GDPR")) : _v0?.has("CPRA") && _v0?.ready(() => _v9("CPRA"));
          } catch (_v0) {
            console.error("Airgap regime check failed", _v0);
          }
        };
        if ("complete" !== document.readyState) return window.addEventListener("load", _v0), () => window.removeEventListener("load", _v0);
        _v0();
      }, []), _v5 && !_v3) return (0, _v1.jsx)(_v3.default, {});
      let _v10 = _v4?.ownerName || "",
        _v11 = _v4?.ownerImage,
        _v12 = _v0 => {
          if (_v0.preventDefault(), _v4?.signInUrl) {
            let _v0 = window.location.pathname;
            window.location.href = _v4.signInUrl + `&prev_page=${encodeURIComponent(_v0)}`;
          } else window.location.href = "/log_in";
        },
        _v13 = _v4?.signInUrl,
        _v14 = ((_v0, _v1) => {
          let {
            terms: _v2,
            privacy: _v3
          } = _v28();
          return _v1 ? (0, _v24.translate)({
            singular: "Contact your organization's admin for help",
            dictionary: {
              es: {
                singular: "Póngase en contacto con el administrador de su organización para obtener ayuda"
              },
              "de-DE": {
                singular: "Wenden Sie sich an den Administrator Ihrer Organisation, um Hilfe zu erhalten"
              },
              "fr-FR": {
                singular: "Contactez l'administrateur de votre organisation pour obtenir de l'aide"
              },
              "ja-JP": {
                singular: "組織の管理者に支援を依頼してください"
              },
              "ko-KR": {
                singular: "도움이 필요하시면 고객님 회사의 관리자에게 문의하세요."
              },
              "pt-BR": {
                singular: "Peça ajuda ao administrador da sua organização"
              },
              "zh-CN": {
                singular: "联系贵组织的管理员寻求帮助"
              }
            }
          }) : _v0 ? (0, _v24.translate)({
            singular: "By logging in to VideoJi, you agree to our {TERMS}Terms of Service{/TERMS} and acknowledge our {PRIVACY}Privacy Policy{/PRIVACY}.",
            replacements: {
              TERMS: _v2,
              PRIVACY: _v3
            },
            dictionary: {
              es: {
                singular: "Al iniciar sesión en VideoJi, acepta nuestros {TERMS}Términos de servicio{/TERMS} y nuestra {PRIVACY}Política de privacidad{/PRIVACY}."
              },
              "de-DE": {
                singular: "Indem Sie sich bei VideoJi anmelden, stimmen Sie unseren {TERMS}Nutzungsbedingungen{/TERMS} zu und erkennen unsere {PRIVACY}Datenschutzrichtlinie{/PRIVACY} an."
              },
              "fr-FR": {
                singular: "En vous connectant à VideoJi, vous acceptez nos {TERMS}Conditions de service{/TERMS} et reconnaissez notre {PRIVACY}Politique de confidentialité{/PRIVACY}."
              },
              "ja-JP": {
                singular: "VideoJiにログインすると、当社の{TERMS}利用規約{/TERMS}に同意し、当社の{PRIVACY}プライバシーポリシー{/PRIVACY}を承認したものとみなされます。"
              },
              "ko-KR": {
                singular: "VideoJi에 로그인하면 당사의 {TERMS}서비스 약관{/TERMS}에 동의하고 {PRIVACY}개인정보 처리방침{/PRIVACY}을 인정하는 것입니다."
              },
              "pt-BR": {
                singular: "Ao entrar no VideoJi, você concorda com nossos {TERMS}Termos de Serviço{/TERMS} e aceita nossa {PRIVACY}Política de Privacidade{/PRIVACY}."
              },
              "zh-CN": {
                singular: "登录 VideoJi 即表示您同意我们的{TERMS}服务条款{/TERMS}并认可我们的{PRIVACY}隐私政策{/PRIVACY}。"
              }
            }
          }) : (0, _v24.translate)({
            singular: "By logging in to Vimeo, you agree to our {TERMS}Terms of Service{/TERMS} and acknowledge our {PRIVACY}Privacy Policy{/PRIVACY}.",
            replacements: {
              TERMS: _v2,
              PRIVACY: _v3
            },
            dictionary: {
              es: {
                singular: "Al iniciar sesión en Vimeo, acepta nuestros {TERMS}Términos de servicio{/TERMS} y nuestra {PRIVACY}Política de privacidad{/PRIVACY}."
              },
              "de-DE": {
                singular: "Indem Sie sich bei Vimeo anmelden, stimmen Sie unseren {TERMS}Nutzungsbedingungen{/TERMS} zu und bestätigen unsere {PRIVACY}Datenschutzrichtlinie{/PRIVACY}."
              },
              "fr-FR": {
                singular: "En vous connectant à Vimeo, vous acceptez nos {TERMS}Conditions de service{/TERMS} et reconnaissez notre {PRIVACY}Politique de confidentialité{/PRIVACY}."
              },
              "ja-JP": {
                singular: "Vimeoにログインすると、当社の{TERMS}利用規約{/TERMS}に同意し、当社の{PRIVACY}プライバシーポリシー{/PRIVACY}を承認したものとみなされます。"
              },
              "ko-KR": {
                singular: "Vimeo에 로그인하면 Vimeo의 {TERMS}서비스 약관{/TERMS}에 동의하고 {PRIVACY}개인정보 처리방침{/PRIVACY}을 인정하는 것입니다."
              },
              "pt-BR": {
                singular: "Ao fazer login no Vimeo, você concorda com nossos {TERMS}Termos de Serviço{/TERMS} e aceita nossa {PRIVACY}Política de Privacidade{/PRIVACY}."
              },
              "zh-CN": {
                singular: "登录 Vimeo 即表示您同意我们的{TERMS}服务条款{/TERMS}并认可我们的{PRIVACY}隐私政策{/PRIVACY}。"
              }
            }
          });
        })(_v0, _v3),
        _v15 = (0, _v24.translate)({
          singular: "Log in to {TITLE}",
          replacements: {
            TITLE: _v10
          },
          dictionary: {
            es: {
              singular: "Inicie sesión en {TITLE}"
            },
            "de-DE": {
              singular: "Melde dich an bei {TITLE}"
            },
            "fr-FR": {
              singular: "Connectez-vous à {TITLE}"
            },
            "ja-JP": {
              singular: "{TITLE}にログイン"
            },
            "ko-KR": {
              singular: "{TITLE}에 로그인"
            },
            "pt-BR": {
              singular: "Faça login em {TITLE}"
            },
            "zh-CN": {
              singular: "登录 {TITLE}"
            }
          }
        }),
        _v16 = (0, _v24.translate)({
          singular: "You can't access this account from your current IP address.",
          dictionary: {
            es: {
              singular: "No puede acceder a esta cuenta desde su dirección IP actual."
            },
            "de-DE": {
              singular: "Sie können von Ihrer aktuellen IP-Adresse aus nicht auf dieses Konto zugreifen."
            },
            "fr-FR": {
              singular: "Vous ne pouvez pas accéder à ce compte depuis votre adresse IP actuelle."
            },
            "ja-JP": {
              singular: "使用中のIPアドレスからはこのアカウントにアクセスできません。"
            },
            "ko-KR": {
              singular: "현재 IP 주소로는 이 계정에 액세스할 수 없습니다."
            },
            "pt-BR": {
              singular: "Você não pode acessar a conta pelo seu endereço IP atual."
            },
            "zh-CN": {
              singular: "您无法从当前 IP 地址访问此帐户。"
            }
          }
        });
      return (0, _v1.jsx)(_v9.ToastProvider, {
        children: (0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          minHeight: "100vh",
          position: "relative",
          backgroundColor: "background",
          children: [!_v0 && (0, _v1.jsx)(_v10.Center, {
            as: "a",
            cursor: "pointer",
            position: "absolute",
            left: (0, _v7.rem)(16),
            top: (0, _v7.rem)(16),
            width: (0, _v7.rem)(76),
            height: (0, _v7.rem)(40),
            borderRadius: (0, _v7.rem)(8),
            backgroundColor: "fill-brand",
            href: "/",
            children: (0, _v1.jsx)(_v25.VimeoLogo, {
              width: (0, _v7.rem)(60),
              height: (0, _v7.rem)(17),
              style: {
                marginBottom: (0, _v7.rem)(4)
              }
            })
          }), (0, _v1.jsx)(_v10.Center, {
            width: "100%",
            flex: "1 1 0",
            flexFlow: "column",
            children: (0, _v1.jsxs)(_v5.Flex, {
              maxWidth: (0, _v7.rem)(520),
              paddingX: {
                base: (0, _v7.rem)(30),
                sm: (0, _v7.rem)(80)
              },
              paddingY: (0, _v7.rem)(60),
              borderRadius: (0, _v7.rem)(20),
              backgroundColor: "fill-surface",
              flexFlow: "column",
              alignItems: "center",
              children: [_v11 && (0, _v1.jsx)(_v14.Image, {
                src: _v11,
                alt: _v10,
                marginX: "auto",
                marginBottom: "2xl",
                display: "block",
                maxWidth: (0, _v7.rem)(260),
                width: "auto",
                maxHeight: (0, _v7.rem)(200),
                height: "auto"
              }), (0, _v1.jsx)(_v6.Header, {
                variant: "heading-lg",
                size: "xl",
                textAlign: "center",
                marginBottom: _v3 ? "200" : (0, _v7.rem)(36),
                children: _v3 ? _v16 : _v15
              }), (0, _v1.jsx)(_v11.Text, {
                variant: "body-md",
                color: "text-secondary",
                mb: _v3 ? 0 : "4",
                textAlign: "center",
                children: _v14
              }), !_v3 && _v13 && (0, _v1.jsx)(_v13.Button, {
                variant: "primary",
                size: "lg",
                isDisabled: !_v4?.signInUrl,
                onClick: _v12,
                marginBottom: "4",
                children: (0, _v24.translate)({
                  singular: "Log in with SSO",
                  dictionary: {
                    es: {
                      singular: "Iniciar sesión con SSO"
                    },
                    "de-DE": {
                      singular: "Mit SSO einloggen"
                    },
                    "fr-FR": {
                      singular: "Se connecter avec l'authentification unique"
                    },
                    "ja-JP": {
                      singular: "SSOでログイン"
                    },
                    "ko-KR": {
                      singular: "SSO로 로그인"
                    },
                    "pt-BR": {
                      singular: "Fazer login com SSO"
                    },
                    "zh-CN": {
                      singular: "使用 SSO 登录"
                    }
                  }
                })
              }), !_v3 && !_v13 && (0, _v1.jsx)(_v13.Button, {
                variant: "primary",
                size: "lg",
                onClick: _v12,
                children: (0, _v24.translate)({
                  singular: "Log in",
                  dictionary: {
                    es: {
                      singular: "Iniciar sesión"
                    },
                    "de-DE": {
                      singular: "Anmelden"
                    },
                    "fr-FR": {
                      singular: "Se connecter"
                    },
                    "ja-JP": {
                      singular: "ログイン"
                    },
                    "ko-KR": {
                      singular: "로그인"
                    },
                    "pt-BR": {
                      singular: "Entrar"
                    },
                    "zh-CN": {
                      singular: "登录"
                    }
                  }
                })
              }), !_v3 && _v13 && (0, _v1.jsx)(_v11.Text, {
                variant: "body-md",
                textAlign: "center",
                children: (0, _v24.translate)({
                  singular: "{SIGN_IN_LINK}Log in{/SIGN_IN_LINK} with email and password",
                  replacements: {
                    SIGN_IN_LINK: _v0 => (0, _v1.jsx)(_v12.Link, {
                      href: "/log_in",
                      variant: "inline-primary",
                      fontSize: "inherit",
                      color: "inherit",
                      children: _v0
                    }, "sign_in")
                  },
                  dictionary: {
                    es: {
                      singular: "{SIGN_IN_LINK}Inicie sesión{/SIGN_IN_LINK} con un correo electrónico y contraseña"
                    },
                    "de-DE": {
                      singular: "Mit E-Mail und Passwort {SIGN_IN_LINK}anmelden{/SIGN_IN_LINK}"
                    },
                    "fr-FR": {
                      singular: "{SIGN_IN_LINK}Se connecter{/SIGN_IN_LINK} avec une adresse e-mail et un mot de passe"
                    },
                    "ja-JP": {
                      singular: "Eメールとパスワードで{SIGN_IN_LINK}ログイン{/SIGN_IN_LINK}"
                    },
                    "ko-KR": {
                      singular: "이메일과 비밀번호로 {SIGN_IN_LINK}로그인{/SIGN_IN_LINK}"
                    },
                    "pt-BR": {
                      singular: "{SIGN_IN_LINK}Entrar{/SIGN_IN_LINK} com e-mail e senha"
                    },
                    "zh-CN": {
                      singular: "{SIGN_IN_LINK}登录{/SIGN_IN_LINK}使用电子邮箱和密码"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v11.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: (0, _v1.jsx)(_v10.Center, {
              margin: (0, _v7.rem)(20),
              flexWrap: "wrap",
              gap: "50",
              children: (0, _v1.jsx)(_v30, {
                isChina: _v0,
                showPrivacyChoices: _v1,
                showImpressum: _v2,
                regime: _v8
              })
            })
          })]
        })
      });
    };
  _v0.s(["EnterpriseLohpContainer", 0, ({
    showForbidden: _v0 = !1
  }) => {
    let _v1 = (0, _v2.useContext)(_v4.ViewerContext),
      _v2 = _v1?.isSimplifiedSite || !1,
      _v3 = _v1?.termsShowPrivacyChoices || !1,
      _v4 = _v1?.impressumQualifies || !1;
    return _v1 ? (0, _v1.jsx)(_v31, {
      isChina: _v2,
      showPrivacyChoices: _v3,
      showImpressum: _v4,
      showForbidden: _v0
    }) : (0, _v1.jsx)(_v3.default, {});
  }], 0);
}