{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["UsageContactUs", 0, () => {
    let _v0 = (0, _v4.translate)({
      singular: "Usage limits for your organization. To increase your limits, please reach out to your Account Manager or {CONTACT_US}contact us{/CONTACT_US}.",
      replacements: {
        CONTACT_US: _v0 => (0, _v1.jsx)(_v2.Link, {
          href: "https://vimeo.com/enterprise/contact-us",
          variant: "brand",
          letterSpacing: "body-md",
          lineHeight: "body-md",
          fontSize: "body-md",
          target: "_blank",
          children: _v0
        }, "contact-support")
      },
      dictionary: {
        es: {
          singular: "Límites de uso para su organización. Para aumentar sus límites, comuníquese con su gerente de la cuenta o {CONTACT_US}contáctenos{/CONTACT_US}."
        },
        "de-DE": {
          singular: "Nutzungsbeschränkungen für Ihre Organisation. Um Ihre Limits zu erhöhen, wenden Sie sich bitte an Ihre Kundenbetreuende oder {CONTACT_US}kontaktieren Sie uns{/CONTACT_US}."
        },
        "fr-FR": {
          singular: "Limites d'utilisation pour votre organisation. Pour augmenter vos limites, veuillez contacter votre responsable de compte ou {CONTACT_US}nous contacter{/CONTACT_US}."
        },
        "ja-JP": {
          singular: "組織の使用制限。制限を引き上げるには、アカウントマネージャーに連絡するか、 {CONTACT_US}こちらにお問い合わせ{/CONTACT_US}ください。"
        },
        "ko-KR": {
          singular: "조직의 사용 한도. 한도를 늘리려면 계정 관리자에게 문의하거나 {CONTACT_US}문의하기{/CONTACT_US}를 클릭하세요."
        },
        "pt-BR": {
          singular: "Limites de uso da sua organização. Para aumentar seus limites, entre em contato com o gerente da conta ou {CONTACT_US}fale conosco{/CONTACT_US}."
        },
        "zh-CN": {
          singular: "您所在组织的使用限制。要提高您的限额，请联系您的客户经理或{CONTACT_US}联系我们{/CONTACT_US}。"
        }
      }
    });
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v3.Text, {
        variant: "body-md",
        size: "2",
        alignSelf: "start",
        children: _v0
      })
    });
  }]);
}