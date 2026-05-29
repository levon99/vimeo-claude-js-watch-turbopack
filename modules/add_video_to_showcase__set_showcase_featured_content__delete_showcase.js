{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      ADD_VIDEO_TO_SHOWCASE: "add_video_to_showcase",
      SET_SHOWCASE_FEATURED_CONTENT: "set_showcase_featured_content"
    },
    _v3 = {
      ADD_VIDEO_TO_SHOWCASE: _v2.ADD_VIDEO_TO_SHOWCASE,
      DELETE_SHOWCASE: "delete_showcase",
      RESOURCE_SHARE_MODAL: "resource_share_modal",
      SET_SHOWCASE_FEATURED_CONTENT: _v2.SET_SHOWCASE_FEATURED_CONTENT,
      EVENT_CREATION_MODAL_UPGRADE: "event_creation_modal_upgrade",
      UPGRADE_PLAN: "upgrade_plan",
      MOBILE_SETTINGS_VIEW: "mobile_settings_view",
      DELETE_EVENT: "delete_event",
      EVENT_CREATION_MODAL: "event_creation_modal",
      SAVE_WITHOUT_PREMIUM: "save_without_premium"
    },
    _v4 = {
      DESCRIPTION: (0, _v1.translate)({
        singular: "Join the web’s most supportive community of creators and get high-quality tools for hosting, sharing, and streaming videos in gorgeous HD and 4K with no ads.",
        dictionary: {
          es: {
            singular: "Únete a la comunidad de creadores más acogedora de la red y obtén herramientas de alta calidad para alojar, compartir y emitir videos en continuo en alta definición y 4K sin anuncios."
          },
          "de-DE": {
            singular: "Komm an Board zu der hilfreichsten Community im ganzen Internet und erhalte qualitativ hochwertige Tools für Hosten, Teilen und Streamen von Videos in wunderschönem HD und 4K ganz ohne Werbung."
          },
          "fr-FR": {
            singular: "Rejoignez la communauté de créateurs de vidéos la plus passionnée du Web, et bénéficiez d'outils de grande qualité pour héberger, partager et streamer vos vidéos en sublime HD et 4k sans pubs."
          },
          "ja-JP": {
            singular: " ウェブで最も協力的なクリエイターコミュニティで、HDや4K動画のホスティング、共有、ストリーミングなど、たくさんのパワフルなツールを広告無しで活用しよう。"
          },
          "ko-KR": {
            singular: "웹에서 가장 풍부한 지원을 제공하는 창작가 커뮤니티와 함께하여 광고 없는 멋진 HD 및 4K 동영상을 호스팅, 공유 및 스트리밍할 수 있는 고품질 도구들을 만나보세요."
          },
          "pt-BR": {
            singular: "Junte-se à comunidade de criadores mais prestativa da web e obtenha ferramentas de alta qualidade para hospedar, compartilhar e transmitir vídeos, em incrível Alta Definição (HD) e em 4K, sem anúncios."
          },
          "zh-CN": {
            singular: "加入网络上最有支持力的创作者社区，获取优质工具来托管、分享和直播精美的高清和 4K 视频，而且没有广告。"
          }
        }
      })
    };
  (0, _v1.translate)({
    singular: "First Video Thumbnail",
    dictionary: {
      es: {
        singular: "Miniatura del primer video"
      },
      "de-DE": {
        singular: "Erstes Video-Vorschaubild"
      },
      "fr-FR": {
        singular: "Première vignette vidéo"
      },
      "ja-JP": {
        singular: "最初の動画のサムネイル"
      },
      "ko-KR": {
        singular: "첫 번째 동영상 섬네일"
      },
      "pt-BR": {
        singular: "Primeira miniatura do vídeo"
      },
      "zh-CN": {
        singular: "第一个视频缩略图"
      }
    }
  }), (0, _v1.translate)({
    singular: "Custom Image",
    dictionary: {
      es: {
        singular: "Imagen personalizada"
      },
      "de-DE": {
        singular: "Selbst ausgewähltes Bild "
      },
      "fr-FR": {
        singular: "Image personnalisée"
      },
      "ja-JP": {
        singular: "カスタム画像"
      },
      "ko-KR": {
        singular: "커스텀 이미지"
      },
      "pt-BR": {
        singular: "Imagem customizada"
      },
      "zh-CN": {
        singular: "自定义图片"
      }
    }
  });
  let _v5 = {
      MODAL_HEADER: (0, _v1.translate)({
        singular: "Premium features will be removed",
        dictionary: {
          es: {
            singular: "Se eliminarán las funciones de Premium"
          },
          "de-DE": {
            singular: "Premium-Features werden entfernt"
          },
          "fr-FR": {
            singular: "Les fonctionnalités Premium seront supprimées"
          },
          "ja-JP": {
            singular: "Premium機能は削除されます"
          },
          "ko-KR": {
            singular: "프리미엄 기능이 제거될 예정입니다."
          },
          "pt-BR": {
            singular: "Os recursos Premium serão removidos"
          },
          "zh-CN": {
            singular: "高级功能将被移除"
          }
        }
      }),
      MODAL_CONTENT_BODY: (0, _v1.translate)({
        singular: "You’ve been trying out premium features that will be unavailable after saving. To keep all your customizations,",
        dictionary: {
          es: {
            singular: "Ha estado probando las funciones de Premium que no estarán disponibles después de guardar. Para conservar todas sus personalizaciones,"
          },
          "de-DE": {
            singular: "Sie haben Premium-Funktionen ausprobiert, die nach dem Speichern nicht mehr verfügbar sein werden. Um alle Ihre Anpassungen beizubehalten,"
          },
          "fr-FR": {
            singular: "Vous avez essayé des fonctionnalités premium qui ne seront plus disponibles après l'enregistrement. Pour conserver toutes vos personnalisations,"
          },
          "ja-JP": {
            singular: "保存後に利用できなくなるPremium機能を試用中です。すべてのカスタマイズを維持するためには、"
          },
          "ko-KR": {
            singular: "지금까지 사용해보신 프리미엄 기능은 저장 후에는 더 이상 이용하실 수 없습니다. 모든 사용자 지정 사항을 유지하려면"
          },
          "pt-BR": {
            singular: "Você tem experimentado recursos premium que ficarão indisponíveis após salvar. Para preservar todas as suas personalizações,"
          },
          "zh-CN": {
            singular: "您一直在试用高级功能，保存后将无法使用。要保留您所有的自定义设置，"
          }
        }
      }),
      MODAL_CONTENT_BODY_UPGRADE_TEXT: (0, _v1.translate)({
        singular: "upgrade to Standard",
        dictionary: {
          es: {
            singular: "actualice a Standard"
          },
          "de-DE": {
            singular: "Upgrade auf Standard vornehmen"
          },
          "fr-FR": {
            singular: "Passer à Standard"
          },
          "ja-JP": {
            singular: "Standardにアップグレード"
          },
          "ko-KR": {
            singular: "Standard로 업그레이드하세요."
          },
          "pt-BR": {
            singular: "faça upgrade para o plano Standard"
          },
          "zh-CN": {
            singular: "升级到 Standard"
          }
        }
      }),
      CANCEL: (0, _v1.translate)({
        singular: "Cancel",
        dictionary: {
          es: {
            singular: "Cancelar"
          },
          "de-DE": {
            singular: "Abbrechen"
          },
          "fr-FR": {
            singular: "Annuler"
          },
          "ja-JP": {
            singular: "キャンセル"
          },
          "ko-KR": {
            singular: "취소"
          },
          "pt-BR": {
            singular: "Cancelar"
          },
          "zh-CN": {
            singular: "取消"
          }
        }
      }),
      SUBMIT: (0, _v1.translate)({
        singular: "Save free version",
        dictionary: {
          es: {
            singular: "Guarde la versión gratuita"
          },
          "de-DE": {
            singular: "Kostenlose Version speichern"
          },
          "fr-FR": {
            singular: "Sauvegardez la version gratuite"
          },
          "ja-JP": {
            singular: "無料版を保存"
          },
          "ko-KR": {
            singular: "무료 버전을 저장하세요."
          },
          "pt-BR": {
            singular: "Salvar versão gratuita"
          },
          "zh-CN": {
            singular: "保存免费版本"
          }
        }
      }),
      CONTENT_ADDING_KEY: "addingPremiumFeatures",
      CONTENT_REMOVING_KEY: "removingPremiumFeatures"
    },
    _v6 = {
      CONTENT_BODY: (0, _v1.translate)({
        singular: "Create customized Roku Channels and Fire TV apps where you can send this showcase",
        dictionary: {
          es: {
            singular: "Cree canales Roku personalizados y aplicaciones de Amazon Fire TV donde pueda enviar esta presentación"
          },
          "de-DE": {
            singular: "Erstellen benutzerdefinierter Roku-Kanäle und Fire TV-Apps, an die Sie diese Präsentation senden können"
          },
          "fr-FR": {
            singular: "Créez des chaînes Roku et des applications Fire TV personnalisées sur lesquelles vous pourrez envoyer cette présentation"
          },
          "ja-JP": {
            singular: "カスタマイズされたRokuチャンネルとFire TVアプリを作成して、このショーケースを送信しましょう"
          },
          "ko-KR": {
            singular: "이 쇼케이스를 보낼 커스텀 Roku 채널과 Fire TV 앱을 만드세요."
          },
          "pt-BR": {
            singular: "Crie canais Roku e aplicativos para Fire TV personalizados para instalar sua vitrine"
          },
          "zh-CN": {
            singular: "创建自定义的 Roku 频道和 Fire TV 应用，您可以在其中发送此展示内容"
          }
        }
      }),
      UPGRADE_BTN_TEXT: (0, _v1.translate)({
        singular: "Upgrade",
        dictionary: {
          es: {
            singular: "Actualizar"
          },
          "de-DE": {
            singular: "Upgraden"
          },
          "fr-FR": {
            singular: "Mettre à niveau"
          },
          "ja-JP": {
            singular: "アップグレード"
          },
          "ko-KR": {
            singular: "업그레이드"
          },
          "zh-CN": {
            singular: "升级"
          }
        }
      }),
      LEARN_MORE_BTN_TEXT: (0, _v1.translate)({
        singular: "Learn more",
        dictionary: {
          es: {
            singular: "Ver más"
          },
          "de-DE": {
            singular: "Mehr dazu"
          },
          "fr-FR": {
            singular: "En savoir plus "
          },
          "ja-JP": {
            singular: "詳細を見る"
          },
          "ko-KR": {
            singular: "자세히 보기"
          },
          "pt-BR": {
            singular: "Saiba mais"
          },
          "zh-CN": {
            singular: "了解更多"
          }
        }
      }),
      LEARN_MORE_HREF_URL: "https://help.vimeo.com/hc/en-us/articles/12426274566161-Send-a-showcase-to-a-custom-TV-channel-Roku-Amazon-Fire-TV"
    },
    _v7 = {
      HEADER: (0, _v1.translate)({
        singular: "These settings change how all videos in this showcase are viewed",
        dictionary: {
          es: {
            singular: "Estas configuraciones cambian la forma de visualización de todos los videos de esta presentación."
          },
          "de-DE": {
            singular: "Diese Einstellungen ändern, wie alle Videos in dieser Präsentation angezeigt werden."
          },
          "fr-FR": {
            singular: "Ces paramètres modifient l'affichage de toutes les vidéos de cette présentation"
          },
          "ja-JP": {
            singular: "これらの設定は、このショーケース内のすべての動画の表示方法を変更します。"
          },
          "ko-KR": {
            singular: "이 설정은 이 쇼케이스의 모든 동영상의 시청 방식을 변경합니다."
          },
          "pt-BR": {
            singular: "Essas configurações alteram a forma como todos os vídeos da vitrine são visualizados"
          },
          "zh-CN": {
            singular: "这些设置会更改此展示中所有视频的观看方式"
          }
        }
      }),
      BEHAVIOR: (0, _v1.translate)({
        singular: "Behavior",
        dictionary: {
          es: {
            singular: "Comportamiento"
          },
          "de-DE": {
            singular: "Verhalten"
          },
          "fr-FR": {
            singular: "Comportement"
          },
          "ja-JP": {
            singular: "動作"
          },
          "ko-KR": {
            singular: "동작"
          },
          "pt-BR": {
            singular: "Comportamento"
          },
          "zh-CN": {
            singular: "行为"
          }
        }
      }),
      ENGAGEMENT: (0, _v1.translate)({
        singular: "Engagement",
        dictionary: {
          es: {
            singular: "Interacción"
          },
          "de-DE": {
            singular: "Interaktion"
          },
          "fr-FR": {
            singular: "Implication"
          },
          "ja-JP": {
            singular: "エンゲージメント"
          },
          "ko-KR": {
            singular: "참여"
          },
          "pt-BR": {
            singular: "Engajamento"
          },
          "zh-CN": {
            singular: "参与度"
          }
        }
      }),
      NOW_PLAYING: (0, _v1.translate)({
        singular: "Now playing",
        dictionary: {
          es: {
            singular: "Se están viendo ahora"
          },
          "de-DE": {
            singular: "Jetzt spielt"
          },
          "fr-FR": {
            singular: "À l'affiche"
          },
          "ja-JP": {
            singular: "再生中"
          },
          "ko-KR": {
            singular: "현재 재생 중"
          },
          "pt-BR": {
            singular: "Reproduzindo"
          },
          "zh-CN": {
            singular: "正在播放"
          }
        }
      }),
      VIDEO_GRID: (0, _v1.translate)({
        singular: "Video grid",
        dictionary: {
          es: {
            singular: "Cuadrícula de video"
          },
          "de-DE": {
            singular: "Videoraster"
          },
          "fr-FR": {
            singular: "Grille vidéo"
          },
          "ja-JP": {
            singular: "動画グリッド"
          },
          "ko-KR": {
            singular: "동영상 그리드"
          },
          "pt-BR": {
            singular: "Grade de vídeo"
          },
          "zh-CN": {
            singular: "视频网格"
          }
        }
      })
    },
    _v8 = {
      DISPLAY: (0, _v1.translate)({
        singular: "Display",
        dictionary: {
          es: {
            singular: "Mostrar"
          },
          "de-DE": {
            singular: "Anzeigen"
          },
          "fr-FR": {
            singular: "Afficher"
          },
          "ja-JP": {
            singular: "表示"
          },
          "ko-KR": {
            singular: "표시"
          },
          "pt-BR": {
            singular: "Exibir"
          },
          "zh-CN": {
            singular: "显示"
          }
        }
      }),
      CONTENT: (0, _v1.translate)({
        singular: "Content",
        dictionary: {
          es: {
            singular: "Contenido"
          },
          "de-DE": {
            singular: "Inhalt"
          },
          "fr-FR": {
            singular: "Contenu"
          },
          "ja-JP": {
            singular: "コンテンツ"
          },
          "ko-KR": {
            singular: "콘텐츠"
          },
          "pt-BR": {
            singular: "Conteúdo"
          },
          "zh-CN": {
            singular: "内容"
          }
        }
      }),
      CUSTOMIZATION: (0, _v1.translate)({
        singular: "Customization",
        dictionary: {
          es: {
            singular: "Personalización"
          },
          "de-DE": {
            singular: "Anpassung"
          },
          "fr-FR": {
            singular: "Personnalisation"
          },
          "ja-JP": {
            singular: "カスタマイズ機能"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Personalização"
          },
          "zh-CN": {
            singular: "定制"
          }
        }
      }),
      GRID_SIZE_SMALL: "s",
      GRID_SIZE_MEDIUM: "m",
      GRID_SIZE_LARGE: "l",
      GRID_SIZE_EXTRA_LARGE: "xl"
    };
  (0, _v1.translate)({
    singular: "Video thumbnail",
    dictionary: {
      es: {
        singular: "Miniatura de vídeo"
      },
      "de-DE": {
        singular: "Video-Vorschaubild"
      },
      "fr-FR": {
        singular: "Vignette vidéo"
      },
      "ja-JP": {
        singular: "動画サムネイル"
      },
      "ko-KR": {
        singular: "동영상 섬네일"
      },
      "pt-BR": {
        singular: "Miniatura de foto do vídeo"
      },
      "zh-CN": {
        singular: "视频缩略图"
      }
    }
  }), (0, _v1.translate)({
    singular: "Custom image",
    dictionary: {
      es: {
        singular: "Imagen personalizada"
      },
      "de-DE": {
        singular: "Selbst ausgewähltes Bild "
      },
      "fr-FR": {
        singular: "Image personnalisée"
      },
      "ja-JP": {
        singular: "カスタム画像"
      },
      "ko-KR": {
        singular: "커스텀 이미지"
      },
      "pt-BR": {
        singular: "Imagem customizada"
      },
      "zh-CN": {
        singular: "自定义图片"
      }
    }
  }), _v0.s(["AppearanceLayoutEnum", 0, {
    LIVE: "live",
    PLAYLIST: "playlist",
    FEATURED: "featured",
    PLAYER: "player",
    GRID: "grid",
    DEFAULT: "default"
  }, "AppearanceThemeEnum", 0, {
    LIGHT: "standard",
    DARK: "dark"
  }, "ConfigItemDefaultValue", 0, {
    IS_UPGRADE: !1
  }, "ConfigItemEnum", 0, {
    VALUE: "value",
    IS_UPGRADE: "isUpgrade"
  }, "DRAWER_ROUTES", 0, {
    SETTINGS: ["info", "seo", "registration", "tv-apps-roku"],
    LAYOUT: ["layout", "navigation", "featured", "video-grid"],
    PLAYBACK: ["playback"]
  }, "DefaultSeoSearchPreview", 0, _v4, "DetailSourceEnum", 0, {
    SHOWCASE: "Showcase",
    VIDEO: "Video"
  }, "FEATURED_CONTENT_LOGO_KEY", 0, {
    PRIMARY: 2,
    SECONDARY: 0
  }, "FocusInputFieldsType", 0, {
    INFO_NAME: "name",
    INFO_DESCRIPTION: "description",
    SEO_TITLE: "seoTitle",
    SEO_DESCRIPTION: "seoDescription",
    TVAPPS_PROVIDER_NAME: "rokuProviderName"
  }, "LinkDestinations", 0, {
    SEO_SEARCH_RESULTS: "https://vimeo.zendesk.com/hc/en-us/articles/360032785152",
    TV_APPS_GUIDE: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426274566161",
    APPEARANCE_LAYOUT_GUIDE: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/33744075444625-Get-to-know-the-redesigned-showcase-experience"
  }, "ModalConfigEnum", 0, {
    SHOWCASE_MKCCODE: "mkcCode_showcase"
  }, "ModalType", 0, _v3, "NestedStoreKeyEnum", 0, {
    ALBUM_CONFIG: "albumConfig"
  }, "PlayBackEnum", 0, _v7, "PremiumAppearanceFields", 0, {
    APPEARANCESTORE_SHOW_NAV: "showNav",
    APPEARANCESTORE_ALLOW_DOWNLOADS: "allowDownloads",
    APPEARANCESTORE_WEB_BRAND_COLOR: "webBrandColor",
    APPEARANCESTORE_WEB_CUSTOM_LOGO: "webCustomLogo",
    APPEARANCESTORE_LOOP: "loop",
    APPEARANCESTORE_VIMEO_LOGO: "showVimeoLogo",
    APPEARANCESTORE_CONTINUOUS_PLAY: "autoplay",
    APPEARANCESTORE_EMBED_CUSTOM_LOGO: "embedCustomLogo",
    APPEARANCESTORE_EMBED_BRAND_COLOR: "embedBrandColor",
    SEOSTORE_SEO_ALLOW_INDEXED: "seoAllowIndexed"
  }, "PreviewMode", 0, {
    WEB: "web",
    MOBILE: "mobile"
  }, "ResetTypeEnum", 0, {
    CANCELLED: "Cancelled",
    SAVED: "Saved"
  }, "SaveWithoutPremiumModalEnum", 0, _v5, "ShowcaseActionTypeEnum", 0, {
    NOACTION: ""
  }, "ShowcaseFormMaxCharLength", 0, {
    SEO_TITLE: 128,
    SEO_DESCRIPTION: 0,
    INFO_TITLE: 255,
    INFO_DESCRIPTION: 0,
    TVAPPS_PROVIDER_NAME: 128
  }, "ShowcaseImageUploadType", 0, {
    CUSTOM_LOGO: "custom_logo",
    FEATURED_CONTENT: "featured_content"
  }, "ShowcaseLoadingType", 0, {
    SIDE_DRAWER: "showcase_side_drawer",
    CONTENT_AREA: "showcase_content_area"
  }, "ShowcasePageCustomProperty", 0, {
    LOADING_TYPE: "loadingType",
    ENABLE_FLEX: "enableFlex",
    ENABLE_DIVIDER: "enableDivider"
  }, "ShowcaseRouteMap", 0, {
    BASE_URL: "/manage/showcases/",
    INDEX: "/",
    DEFAULT: "*",
    INFO: "/info",
    PLAYBACK: "/playback",
    LAYOUT: "/layout",
    LAYOUT_NAVIGATION: "/layout/navigation",
    LAYOUT_FEATURED: "/layout/featured",
    LAYOUT_VIDEO_GRID: "/layout/video-grid",
    SEO: "/seo",
    REGISTRATION: "/registration",
    ROKU_TV_APPS: "/tv-apps-roku",
    AMAZON_TV_APPS: "/tv-apps-amazon",
    TV_APPS: "/(tv-apps-roku|tv-apps-amazon)",
    CUSTOMIZATION: "/customization",
    LIST: "/list",
    MAIN_CONTENT_LIST: "/(info|seo|registration|tv-apps-roku|tv-apps-amazon|list|analytics)",
    MAIN_CONTENT_LIST_NEW_ROUTES: "/(info|playback|layout|layout/navigation|layout/featured|layout/video-grid|seo|registration|tv-apps-roku|tv-apps-amazon|list|analytics)",
    MAIN_CONTENT_WEB_LAYOUT: "/(customization|web-layout)",
    MAIN_CONTENT_AB_TEST_NEW_ROUTES: "/(info|playback|layout|layout/navigation|layout/featured|layout/video-grid|seo|registration|tv-apps-roku|tv-apps-amazon|customization|web-layout|analytics)",
    MAIN_CONTENT_AB_TEST: "/(info|seo|registration|tv-apps-roku|tv-apps-amazon|customization|web-layout|analytics)",
    WEB_LAYOUT: "/web-layout",
    ANALYTICS: "/analytics"
  }, "ShowcaseTVAppsFeedUrlType", 0, {
    ROKU: "roku",
    AMAZON: "amazon.xml"
  }, "ShowcaseTVAppsPrivacy", 0, {
    PRIVATE: "private",
    PASSWORD: "password"
  }, "ShowcaseTVAppsPrivacyView", 0, {
    ANYBODY: "anybody",
    DISABLE: "disable",
    STOCK: "stock"
  }, "ShowcaseTVAppsTabIdxEnum", 0, {
    ROKU: 0,
    AMAZON: 1
  }, "SideDrawerHeaderKeyEnum", 0, {
    INFO: "info",
    SEO: "seo",
    TV_APPS: "tv-apps",
    CUSTOMIZATION: "customization",
    REGISTRATION: "registration",
    ANALYTICS: "analytics",
    PLAYBACK: "playback",
    LAYOUT: "layout"
  }, "SideDrawerHeaderNestedKeyEnum", 0, {
    LAYOUT_NAVIGATION: "navigation",
    LAYOUT_FEATURED: "featured",
    LAYOUT_VIDEO_GRID: "video-grid"
  }, "SideDrawerHeaderNestedKeyPathnameEnum", 0, {
    LAYOUT_NAVIGATION: "/navigation",
    LAYOUT_FEATURED: "/featured",
    LAYOUT_VIDEO_GRID: "/video-grid"
  }, "TVAppsProviderNameEnum", 0, {
    ROKU: "Roku",
    AMAZON: "Amazon"
  }, "TVAppsUpgradeDisplayEnum", 0, _v6, "TextCtaAlginmentEnum", 0, {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right"
  }, "ThumbnailTypeEnum", 0, {
    NO_UPLOAD: 0,
    VIDEO: 1,
    IMAGE: 3
  }, "UndoRedoBtnEnum", 0, {
    UNDO: "Undo",
    REDO: "Redo"
  }, "UploadControlItemEnum", 0, {
    EMBED_CUSTOM_LOGO: "EMBED_CUSTOM_LOGO",
    WEB_CUSTOM_LOGO: "WEB_CUSTOM_LOGO",
    FEATURED_CONTENT: "FEATURED_CONTENT"
  }, "VideoCardsEnum", 0, {
    THUMBNAIL: "Thumbnail",
    PLAYER: "Player"
  }, "VideoGridEnum", 0, _v8, "VideoListModalType", 0, _v2, "VideoType", 0, {
    LIVE: "live"
  }]);
}