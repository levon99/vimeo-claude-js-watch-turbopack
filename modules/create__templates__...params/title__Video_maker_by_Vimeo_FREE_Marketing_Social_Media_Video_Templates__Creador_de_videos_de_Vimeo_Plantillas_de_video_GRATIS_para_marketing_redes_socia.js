{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    playerAssetUrls: _v0,
    history: _v1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsxs)(_v2.default, {
      children: [(0, _v1.jsx)("title", {
        children: (0, _v5.translate)({
          singular: "Video maker by Vimeo | FREE Marketing & Social Media Video Templates",
          dictionary: {
            es: {
              singular: "Creador de videos de Vimeo | Plantillas de video GRATIS para marketing & redes sociales"
            },
            "de-DE": {
              singular: "Video Maker von Vimeo | KOSTENLOSE Marketing- und Social-Media-Video-Vorlagen"
            },
            "fr-FR": {
              singular: "Créateur de vidéos par Vimeo | MODÈLES DE VIDÉOS GRATUITS POUR LE MARKETING & LES RÉSEAUX SOCIAUX"
            },
            "ja-JP": {
              singular: "Vimeoによるビデオメーカー | 無料のマーケティング＆ソーシャルメディア用ビデオテンプレート"
            },
            "ko-KR": {
              singular: "Vimeo의 비디오 메이커 | 무료 마케팅 및 소셜 미디어 비디오 템플릿"
            },
            "pt-BR": {
              singular: "Criador de vídeos do Vimeo | MODELOS GRATUITOS de vídeo para Marketing e Mídias Sociais"
            },
            "zh-CN": {
              singular: "Vimeo 出品的视频制作器 | 免费营销与社交媒体视频模板"
            }
          }
        })
      }), (0, _v1.jsx)("meta", {
        name: "description",
        content: (0, _v5.translate)({
          singular: "Create stunning videos in minutes with Vimeo's Free Video Maker tool. Choose from hundreds of templates or create your own.",
          dictionary: {
            es: {
              singular: "Crea videos impresionantes en minutos con la herramienta Free Video Maker de Vimeo. Elige entre cientos de plantillas o crea la tuya."
            },
            "de-DE": {
              singular: "Erstellen Sie in wenigen Minuten beeindruckende Videos mit dem kostenlosen Video Maker-Tool von Vimeo. Wählen Sie aus Hunderten von Vorlagen oder erstellen Sie Ihre eigene."
            },
            "fr-FR": {
              singular: "Créez des vidéos époustouflantes en quelques minutes avec l'outil Free Video Maker de Vimeo. Choisissez parmi des centaines de modèles ou créez le vôtre."
            },
            "ja-JP": {
              singular: "Vimeoの無料ビデオメーカーで、数分で魅力的なビデオを作成できます。何百ものテンプレートから選ぶか、自分で作成できます。"
            },
            "ko-KR": {
              singular: "Vimeo의 무료 비디오 메이커 도구로 몇 분 만에 멋진 비디오를 만드세요. 수백 개의 템플릿 중에서 선택하거나 직접 만들어 보세요."
            },
            "pt-BR": {
              singular: "Crie vídeos impressionantes em minutos com a ferramenta Free Video Maker gratuita do Vimeo. Escolha entre centenas de modelos ou crie o seu próprio."
            },
            "zh-CN": {
              singular: "使用 Vimeo 的免费视频制作工具，几分钟内即可打造令人惊艳的视频。可从数百个模板中选择，或创建您自己的模板。"
            }
          }
        })
      }), (0, _v1.jsx)("link", {
        rel: "canonical",
        href: "https://vimeo.com/create/templates"
      }), (0, _v1.jsx)("link", {
        rel: "manifest",
        href: "/vimeocreate_manifest"
      })]
    }), (0, _v1.jsx)(_v6.VimeoCreateDefaultSetup, {
      playerAssetUrls: _v0,
      history: _v1
    })]
  });
  (0, _v3.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.path;
    return {
      props: {
        path: `/create/${_v1}`,
        layoutOptions: {
          globalNotifications: !1
        },
        hasUploader: !1,
        hasThemeSupport: !1
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0,
    inlineCreatePreloads: !0,
    inlineMagistoResources: !0
  }), _v8.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.DefaultNavigation, {
      fixed: !1,
      hasThemeSupport: !1
    }), (0, _v1.jsx)(_v7.ReactRouterLayout, {
      path: "/create/templates",
      children: _v0
    })]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v8], 0);
}