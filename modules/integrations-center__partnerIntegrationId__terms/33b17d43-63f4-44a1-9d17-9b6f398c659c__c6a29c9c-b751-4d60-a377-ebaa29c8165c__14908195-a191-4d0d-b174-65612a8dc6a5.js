{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      ADOBE_MEDIA_ENCODER: "33b17d43-63f4-44a1-9d17-9b6f398c659c",
      ADOBE_PREMIERE_PRO: "c6a29c9c-b751-4d60-a377-ebaa29c8165c",
      ASANA: "14908195-a191-4d0d-b174-65612a8dc6a5",
      BOX: "dd4ced47-b5aa-4214-b64c-1417ef7a23ac",
      CONSTANT_CONTACT: "30e2803d-034c-42e2-909c-76ffcc7022e8",
      DROPBOX: "f821c8a9-86ff-44ab-b311-4b2bb6f06030",
      DROPBOX_AUTO_UPLOAD: "d9bc1e0c-b702-4e83-8332-1a45c1b51771",
      FIGMA: "1b3bc940-4c05-4539-baac-41e54b2e6e09",
      GODADDY: "9c71c5f3-60a2-4485-9b0b-697474f9c934",
      GOOGLE_DRIVE: "fac1422b-1d71-4c90-a12a-ebc612f8eb88",
      HUBSPOT: "90d8ae7d-cde2-4ac2-b5b4-0e8d7df0969b",
      KEAP: "1bf76656-c131-40b5-8e51-e9dfd1a4a260",
      LINKEDIN_LIVE: "84abae6a-09d3-4b54-b164-e08e8c9068d1",
      MAILCHIMP: "9620184d-799d-4b14-8a3e-c2a6dfd723ac",
      MARKETO: "0b06fe9d-a6b0-4863-933f-6948ceb84d2c",
      PATREON: "81e30646-5eab-4e47-90d8-b0cd9a0efab6",
      TWITTER: "6cbfaa65-aaec-4993-a97c-62cf61d418a2",
      TIKTOK_FOR_BUSINESS: "3d542496-659c-4296-9834-b1ed303967fe",
      TUMBLR: "acbeab33-c1bb-4b70-8c51-5d4f9fc3e031",
      SHOPIFY: "e707d445-5208-4245-a5dd-ff952ad36126",
      WEBEX: "ae19a00e-5bc7-4a71-8da8-144666e31e76",
      WIX: "dabd1bc3-3720-42c4-87c3-01549cda5e0f",
      YOUTUBE: "bc3bc371-b8b0-4e24-b42c-35fd8df548df",
      ZOOM_TO_VIMEO: "2e4622bd-d6f4-4011-a57a-3c64bc495f27",
      FRAME_IO: "97d93df5-da72-437e-bf8d-9f191b4ed793",
      HUBSPOT_MEDIA_BRIDGE: "4ae419e6-11c3-4cd4-ba51-8c178c44a9a0",
      LINKEDIN: "28cab0d3-19ba-43ff-8883-a24bd2dd132f",
      SALESCLOUD_CRM: "1adcf9f0-ace9-43ca-a624-f25d7ce5f9d9",
      CAMPAIGN_MONITOR: "9039e128-99b9-4ec0-b8c1-ddc2cfc933ae",
      FACEBOOK: "3010d07b-ee4c-4f06-a6ef-d4f054f1065d",
      MS_TEAMS: "e6d05247-f3ba-403d-86fc-90bc4f84f36f",
      GOOGLE_MEET: "5153ca9f-0424-499f-8050-a19911e8a37f",
      ADOBE_EXPRESS: "c2a97c5e-b47f-4351-8990-766fec2c25e2",
      KAPWING: "777335c8-1246-4a42-b7ab-cdb842e78bab",
      LIGHTWORKS: "b0c40cb2-0006-438b-a537-dd6452f3cbaa",
      POWTOON: "9492a532-4cf3-4b06-9db5-004c2ca0409f",
      SCREENFLOW: "1c685cdb-e987-4cf8-8e64-23c3627ca862",
      HEYGEN: "baa6a258-ca48-424b-80f7-ffdcc5353916",
      WORDPRESS: "650b7e44-9d09-4e28-ba38-e5d97d2df4c3"
    },
    _v3 = [_v2.MAILCHIMP, _v2.SALESCLOUD_CRM, _v2.HUBSPOT, _v2.HUBSPOT_MEDIA_BRIDGE, _v2.MARKETO, _v2.CONSTANT_CONTACT, _v2.CAMPAIGN_MONITOR, _v2.KEAP],
    _v4 = [_v2.FACEBOOK, _v2.YOUTUBE, _v2.LINKEDIN, _v2.GOOGLE_DRIVE, _v2.DROPBOX, _v2.ZOOM_TO_VIMEO, _v2.GOOGLE_MEET, _v2.MS_TEAMS, _v2.LINKEDIN_LIVE, _v2.FIGMA, _v2.ADOBE_PREMIERE_PRO, _v2.ADOBE_MEDIA_ENCODER],
    _v5 = {
      [_v2.MAILCHIMP]: {
        connect: {
          url: "/settings/marketing/provider/mailchimp",
          showTerms: !0
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "mailchimp"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "You'll need a Vimeo paid plan to sync your registration forms with Mailchimp, and an Enterprise plan to track viewer data within Mailchimp",
            dictionary: {
              es: {
                singular: "Necesitará un plan de pago de Vimeo para sincronizar sus formularios de inscripción con Mailchimp y un plan Enterprise para hacer un seguimiento de los datos de los espectadores dentro de Mailchimp"
              },
              "de-DE": {
                singular: "Sie benötigen einen kostenpflichtigen Vimeo-Tarif, um Ihre Registrierungsformulare mit Mailchimp zu synchronisieren, und einen Enterprise-Tarif, um Zuschauerdaten in Mailchimp zu verfolgen."
              },
              "fr-FR": {
                singular: "Vous avez besoin d'un abonnement Vimeo payant pour synchroniser vos formulaires d'inscription avec Mailchimp, et d'un abonnement Entreprise pour suivre les données sur les spectateurs dans Mailchimp."
              },
              "ja-JP": {
                singular: "登録フォームをMailchimpと同期するにはVimeoの有料プランが必要です。また、Mailchimp内で視聴者データを追跡するにはEnterpriseプランが必要です"
              },
              "ko-KR": {
                singular: "Mailchimp와 등록 양식을 동기화하려면 Vimeo 유료 요금제가 필요하며, Mailchimp의 뷰어 데이터를 추적하려면 Enterprise 요금제가 필요합니다."
              },
              "pt-BR": {
                singular: "Você precisa de um plano pago do Vimeo para sincronizar seus formulários de inscrição com o Mailchimp e de um plano Enterprise para rastrear os dados dos espectadores no Mailchimp"
              },
              "zh-CN": {
                singular: "您需要一个 Vimeo 付费套餐来将您的注册表单与 Mailchimp 同步，还需要一个 Enterprise 套餐才能在 Mailchimp 中跟踪观众数据"
              }
            }
          }),
          requiredCapability: "marketingSettings"
        }
      },
      [_v2.SALESCLOUD_CRM]: {
        connect: {
          url: "/settings/marketing/provider/salescloud",
          showTerms: !0
        },
        modify: {
          type: "SettingsPrivacyRestrictions"
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "salescloud"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "This integration is available exclusively on our Enterprise plan",
            dictionary: {
              es: {
                singular: "Esta integración está disponible exclusivamente en nuestro plan Enterprise"
              },
              "de-DE": {
                singular: "Diese Integration ist ausschließlich in unserem Enterprise-Plan verfügbar"
              },
              "fr-FR": {
                singular: "Cette intégration est disponible exclusivement avec notre abonnement Entreprise."
              },
              "ja-JP": {
                singular: "この統合は、Enterpriseプランでのみご利用いただけます"
              },
              "ko-KR": {
                singular: "이 통합은 당사의 Enterprise 요금제에서만 사용 가능합니다."
              },
              "pt-BR": {
                singular: "Esta integração está disponível apenas no plano Enterprise."
              },
              "zh-CN": {
                singular: "此集成仅在我们的 Enterprise 套餐中提供"
              }
            }
          }),
          requiredCapabilityFn: _v0 => _v0.marketingSettingsEnterprise && _v0.salescloudCrm
        }
      },
      [_v2.HUBSPOT]: {
        connect: {
          url: "/settings/marketing/provider/hubspot",
          showTerms: !0
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "hubspot"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "You'll need a Vimeo paid plan to sync your registration forms with Hubspot, and an Enterprise plan to track viewer data within Hubspot",
            dictionary: {
              es: {
                singular: "Necesitará un plan de pago de Vimeo para sincronizar sus formularios de inscripción con Hubspot y un plan Enterprise para hacer un seguimiento de los datos de los espectadores dentro de Hubspot"
              },
              "de-DE": {
                singular: "Sie benötigen einen kostenpflichtigen Vimeo-Tarif, um Ihre Registrierungsformulare mit HubSpot zu synchronisieren, und einen Enterprise-Tarif, um Zuschauerdaten innerhalb von HubSpot zu verfolgen."
              },
              "fr-FR": {
                singular: "Vous avez besoin d'un abonnement Vimeo payant pour synchroniser vos formulaires d'inscription avec Hubspot, et d'un abonnement Entreprise pour suivre les données sur les spectateurs dans Hubspot."
              },
              "ja-JP": {
                singular: "登録フォームをHubspotと同期するにはVimeoの有料プランが必要です。また、Hubspot内で視聴者データを追跡するにはEnterpriseプランが必要です"
              },
              "ko-KR": {
                singular: "Hubspot과 등록 양식을 동기화하려면 Vimeo 유료 요금제가 필요하며, Hubspot의 뷰어 데이터를 추적하려면 Enterprise 요금제가 필요합니다."
              },
              "pt-BR": {
                singular: "Você precisa de um plano pago do Vimeo para sincronizar seus formulários de inscrição com o Hubspot e de um plano Enterprise para rastrear os dados dos espectadores no Hubspot"
              },
              "zh-CN": {
                singular: "您需要 Vimeo 付费套餐才能将您的注册表单与 Hubspot 同步，还需要一个 Enterprise 套餐才能在 Hubspot 中跟踪观众数据"
              }
            }
          }),
          requiredCapability: "marketingSettings"
        }
      },
      [_v2.HUBSPOT_MEDIA_BRIDGE]: {
        connect: {
          url: "/settings/marketing/provider/hubspot_media_bridge",
          showTerms: !0
        },
        modify: {
          type: "SettingsHubspotMediaBridge"
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "hubspot_media_bridge"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "This integration is available on Advanced plans and above",
            dictionary: {
              es: {
                singular: "Esta integración está disponible para los planes Advanced y superiores"
              },
              "de-DE": {
                singular: "Diese Integration ist in den Advanced-Tarifen und höher verfügbar."
              },
              "fr-FR": {
                singular: "Cette intégration est disponible pour les abonnements Advanced et supérieurs"
              },
              "ja-JP": {
                singular: "この統合はAdvanced以上のプランで利用可能です"
              },
              "ko-KR": {
                singular: "이 통합은 Advanced 요금제 이상에서 사용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Esta integração está disponível em planos Advanced e superiores"
              },
              "zh-CN": {
                singular: "此集成适用于 Advanced 套餐及以上版本"
              }
            }
          }),
          requiredCapabilityFn: _v0 => _v0.marketingSettings && _v0.connectToHubspotMediaBridge
        }
      },
      [_v2.MARKETO]: {
        connect: {
          url: "/integrations-center/marketo/connect",
          showTerms: !0
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "marketo"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "This integration is available exclusively on our Enterprise plan",
            dictionary: {
              es: {
                singular: "Esta integración está disponible exclusivamente en nuestro plan Enterprise"
              },
              "de-DE": {
                singular: "Diese Integration ist ausschließlich in unserem Enterprise-Plan verfügbar"
              },
              "fr-FR": {
                singular: "Cette intégration est disponible exclusivement avec notre abonnement Entreprise."
              },
              "ja-JP": {
                singular: "この統合は、Enterpriseプランでのみご利用いただけます"
              },
              "ko-KR": {
                singular: "이 통합은 당사의 Enterprise 요금제에서만 사용 가능합니다."
              },
              "pt-BR": {
                singular: "Esta integração está disponível apenas no plano Enterprise."
              },
              "zh-CN": {
                singular: "此集成仅在我们的 Enterprise 套餐中提供"
              }
            }
          }),
          requiredCapabilityFn: _v0 => !(!_v0.marketingSettingsEnterprise || !_v0.enterprise && (_v0.liveEventLeadUpsell || _v0.liveEventLeadAnalyticsUpsell))
        }
      },
      [_v2.CONSTANT_CONTACT]: {
        connect: {
          url: "/settings/marketing/provider/constant_contact_v3",
          showTerms: !0
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "constant_contact_v3"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "You'll need a Vimeo paid plan to sync your registration forms with Constant Contact, and an Enterprise plan to track viewer data within Constant Contact",
            dictionary: {
              es: {
                singular: "Necesitará un plan pago de Vimeo para sincronizar sus formularios de registro con Constant Contact y un plan Enterprise para hacer un seguimiento de los datos de los espectadores dentro de Constant Contact"
              },
              "de-DE": {
                singular: "Sie benötigen einen kostenpflichtigen Vimeo-Tarif, um Ihre Registrierungsformulare mit Constant Contact zu synchronisieren, und einen Enterprise-Tarif, um Zuschauerdaten innerhalb von Constant Contact zu verfolgen."
              },
              "fr-FR": {
                singular: "Vous avez besoin d'un abonnement Vimeo payant pour synchroniser vos formulaires d'inscription avec Constant Contact, et d'un abonnement Entreprise pour suivre les données sur les spectateurs dans Constant Contact."
              },
              "ja-JP": {
                singular: "登録フォームをConstant Contactと同期するにはVimeoの有料プランが必要です。また、Constant Contact内で視聴者データを追跡するにはEnterpriseプランが必要です"
              },
              "ko-KR": {
                singular: "Constant Contact와 등록 양식을 동기화하려면 Vimeo 유료 요금제가 필요하며, Constant Contact의 뷰어 데이터를 추적하려면 Enterprise 요금제가 필요합니다."
              },
              "pt-BR": {
                singular: "Você precisa de um plano pago do Vimeo para sincronizar seus formulários de inscrição com o Constant Contact e de um plano Enterprise para rastrear os dados dos espectadores no Constant Contact"
              },
              "zh-CN": {
                singular: "您需要一个 Vimeo 付费套餐才能将您的注册表单与 Constant Contact 同步，还需要一个 Enterprise 套餐才能在 Constant Contact 中跟踪观众数据"
              }
            }
          }),
          requiredCapability: "marketingSettings"
        }
      },
      [_v2.CAMPAIGN_MONITOR]: {
        connect: {
          url: "/settings/marketing/provider/campaign_monitor",
          showTerms: !0
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "campaign_monitor"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "You'll need a Vimeo paid plan to sync your registration forms with Campaign Monitor, and an Enterprise plan to track viewer data within Campaign Monitor",
            dictionary: {
              es: {
                singular: "Necesitará un plan de pago de Vimeo para sincronizar sus formularios de inscripción con Campaign Monitor y un plan Enterprise para hacer un seguimiento de los datos de los espectadores dentro de Campaign Monitor"
              },
              "de-DE": {
                singular: "Sie benötigen einen kostenpflichtigen Vimeo-Tarif, um Ihre Registrierungsformulare mit Campaign Monitor zu synchronisieren, und einen Enterprise-Tarif, um Zuschauerdaten innerhalb von Campaign Monitor zu verfolgen."
              },
              "fr-FR": {
                singular: "Vous avez besoin d'un abonnement Vimeo payant pour synchroniser vos formulaires d'inscription avec Campaign Monitor, et d'un abonnement Entreprise pour suivre les données sur les spectateurs dans Campaign Monitor."
              },
              "ja-JP": {
                singular: "登録フォームをCampaign Monitorと同期するにはVimeoの有料プランが必要です。また、Campaign Monitor内で視聴者データを追跡するにはEnterpriseプランが必要です"
              },
              "ko-KR": {
                singular: "Campaign Monitor와 등록 양식을 동기화하려면 Vimeo 유료 요금제가 필요하며, Campaign Monitor의 뷰어 데이터를 추적하려면 Enterprise 요금제가 필요합니다."
              },
              "pt-BR": {
                singular: "Você precisa de um plano pago do Vimeo para sincronizar seus formulários de inscrição com o Campaign Monitor e de um plano Enterprise para rastrear os dados dos espectadores no Campaign Monitor"
              },
              "zh-CN": {
                singular: "您需要一个 Vimeo 付费套餐来将您的注册表单与 Campaign Monitor 同步，还需要一个 Enterprise 套餐才能在 Campaign Monitor 中跟踪观众数据"
              }
            }
          }),
          requiredCapability: "marketingSettings"
        }
      },
      [_v2.KEAP]: {
        connect: {
          url: "/settings/marketing/provider/infusionsoft",
          showTerms: !0
        },
        disconnect: {
          url: "/settings?action=email_service_provider_disconnect",
          payload: {
            service: "infusionsoft"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "You'll need a Vimeo paid plan to sync your registration forms with Keap, and an Enterprise plan to track viewer data within Keap",
            dictionary: {
              es: {
                singular: "Necesitará un plan de pago de Vimeo para sincronizar sus formularios de inscripción con Keap y un plan Enterprise para hacer un seguimiento de los datos de los espectadores dentro de Keap"
              },
              "de-DE": {
                singular: "Sie benötigen einen kostenpflichtigen Vimeo-Tarif, um Ihre Registrierungsformulare mit Keap zu synchronisieren, und einen Enterprise-Tarif, um Zuschauerdaten innerhalb von Keap zu verfolgen."
              },
              "fr-FR": {
                singular: "Vous avez besoin d'un abonnement Vimeo payant pour synchroniser vos formulaires d'inscription avec Keap, et d'un abonnement Entreprise pour suivre les données sur les spectateurs dans Keap."
              },
              "ja-JP": {
                singular: "登録フォームをKeapと同期するにはVimeoの有料プランが必要です。また、Keap内で視聴者データを追跡するにはEnterpriseプランが必要です"
              },
              "ko-KR": {
                singular: "Keap과 등록 양식을 동기화하려면 Vimeo 유료 요금제가 필요하며, Keap의 뷰어 데이터를 추적하려면 Enterprise 요금제가 필요합니다."
              },
              "pt-BR": {
                singular: "Você precisa de um plano pago do Vimeo para sincronizar seus formulários de inscrição com o Keap e de um plano Enterprise para rastrear os dados dos espectadores no Keap"
              },
              "zh-CN": {
                singular: "您需要一个 Vimeo 付费套餐来将您的注册表单与 Keap 同步，还需要一个 Enterprise 套餐才能在 Keap 中跟踪观众数据"
              }
            }
          }),
          requiredCapability: "marketingSettings"
        }
      },
      [_v2.FACEBOOK]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=facebook&action=connect&live=1"
        },
        modify: {
          type: "SettingsAutoPublish",
          method: "post",
          url: "/settings/apps?action=modify",
          payload: {
            service: "facebook"
          }
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "facebook"
          }
        }
      },
      [_v2.YOUTUBE]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=youtube&action=connect&live=1"
        },
        modify: {
          type: "SettingsPrivacyRestrictions"
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "youtube"
          }
        }
      },
      [_v2.TWITTER]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=twitter&action=connect&live=1"
        },
        modify: {
          type: "SettingsAutoPublish",
          method: "post",
          url: "/settings/apps?action=modify",
          payload: {
            service: "twitter"
          }
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "twitter"
          }
        }
      },
      [_v2.LINKEDIN]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=linkedin_pts&action=connect&live=1"
        },
        modify: {
          type: "SettingsAutoPublish",
          method: "post",
          url: "/settings/apps?action=modify",
          payload: {
            service: "linkedin_pts"
          }
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "linkedin_pts"
          }
        }
      },
      [_v2.LINKEDIN_LIVE]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=linkedin&action=connect&live=1"
        },
        modify: {
          type: "SettingsPrivacyRestrictions"
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "linkedin"
          }
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "This integration is available on Advanced plans and above",
            dictionary: {
              es: {
                singular: "Esta integración está disponible para los planes Advanced y superiores"
              },
              "de-DE": {
                singular: "Diese Integration ist in den Advanced-Tarifen und höher verfügbar."
              },
              "fr-FR": {
                singular: "Cette intégration est disponible pour les abonnements Advanced et supérieurs"
              },
              "ja-JP": {
                singular: "この統合はAdvanced以上のプランで利用可能です"
              },
              "ko-KR": {
                singular: "이 통합은 Advanced 요금제 이상에서 사용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Esta integração está disponível em planos Advanced e superiores"
              },
              "zh-CN": {
                singular: "此集成适用于 Advanced 套餐及以上版本"
              }
            }
          }),
          requiredTier: "advanced"
        }
      },
      [_v2.TUMBLR]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=tumblr&action=connect&live=1"
        },
        modify: {
          type: "SettingsPrivacyRestrictions"
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "tumblr"
          }
        }
      },
      [_v2.TIKTOK_FOR_BUSINESS]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=tiktok&action=connect&live=1"
        },
        modify: {
          type: "SettingsPrivacyRestrictions"
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "tiktok"
          }
        }
      },
      [_v2.DROPBOX_AUTO_UPLOAD]: {
        connect: {
          method: "post",
          url: "/settings/apps?service=dropbox&action=connect&live=1"
        },
        modify: {
          type: "SettingsDropboxAutoUpload"
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "dropbox"
          }
        }
      },
      [_v2.SHOPIFY]: {
        connect: {
          url: "/integrations-center/shopify/connect"
        },
        modify: {
          type: "SettingsShopify"
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "shopify"
          }
        }
      },
      [_v2.ZOOM_TO_VIMEO]: {
        connect: {
          url: "https://autoarchive-uploader.vimeo.com/init_zoom_auth",
          enterpriseUrl: "https://autoarchive-uploader.vimeo.work/init_zoom_auth",
          ciUrl: "https://autoarchive-uploader-dev.vimeows.com/init_zoom_auth"
        },
        modify: {
          type: "SettingsAutoArchive"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.WEBEX]: {
        connect: {
          url: "https://autoarchive-uploader.vimeo.com/init_webex_auth",
          enterpriseUrl: "https://autoarchive-uploader.vimeo.work/init_webex_auth",
          ciUrl: "https://autoarchive-uploader-dev.vimeows.com/init_webex_auth"
        },
        modify: {
          type: "SettingsAutoArchive"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.MS_TEAMS]: {
        connect: {
          url: "https://autoarchive-uploader.vimeo.com/init_ms_teams_admin_auth",
          enterpriseUrl: "https://autoarchive-uploader.vimeo.work/init_ms_teams_admin_auth"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        },
        modify: {
          type: "SettingsAutoArchive"
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "This integration is available exclusively on our Enterprise plan",
            dictionary: {
              es: {
                singular: "Esta integración está disponible exclusivamente en nuestro plan Enterprise"
              },
              "de-DE": {
                singular: "Diese Integration ist ausschließlich in unserem Enterprise-Plan verfügbar"
              },
              "fr-FR": {
                singular: "Cette intégration est disponible exclusivement avec notre abonnement Entreprise."
              },
              "ja-JP": {
                singular: "この統合は、Enterpriseプランでのみご利用いただけます"
              },
              "ko-KR": {
                singular: "이 통합은 당사의 Enterprise 요금제에서만 사용 가능합니다."
              },
              "pt-BR": {
                singular: "Esta integração está disponível apenas no plano Enterprise."
              },
              "zh-CN": {
                singular: "此集成仅在我们的 Enterprise 套餐中提供"
              }
            }
          }),
          requiredCapability: "marketingSettingsEnterprise"
        }
      },
      [_v2.GOOGLE_MEET]: {
        connect: {
          url: "https://autoarchive-uploader.vimeo.com/init_google_meet_auth",
          enterpriseUrl: "https://autoarchive-uploader.vimeo.work/init_google_meet_auth",
          ciUrl: "https://autoarchive-uploader-dev.vimeows.com/init_google_meet_auth"
        },
        modify: {
          type: "SettingsAutoArchive"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.DROPBOX]: {
        connect: {
          url: "/home?show-import-modal=true"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.GOOGLE_DRIVE]: {
        connect: {
          url: "/home?show-import-modal=true"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.BOX]: {
        connect: {
          url: "/home?show-import-modal=true"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.FRAME_IO]: {
        connect: {
          url: "https://support.frame.io/en/articles/511580-publish-to-vimeo",
          text: (0, _v1.translate)({
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
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.FIGMA]: {
        connect: {
          url: "https://www.figma.com/community/plugin/1039957324840667051/vimeo-record",
          text: (0, _v1.translate)({
            singular: "Connect on Figma",
            dictionary: {
              es: {
                singular: "Conéctese en Figma"
              },
              "de-DE": {
                singular: "Auf Figma verbinden"
              },
              "fr-FR": {
                singular: "Connectez-vous sur Figma"
              },
              "ja-JP": {
                singular: "Figmaでつながる"
              },
              "ko-KR": {
                singular: "Figma 연결"
              },
              "pt-BR": {
                singular: "Conecte-se ao Figma"
              },
              "zh-CN": {
                singular: "在 Figma 上连接"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.ASANA]: {
        connect: {
          url: "https://asana.com/apps/vimeo",
          text: (0, _v1.translate)({
            singular: "Connect on Asana",
            dictionary: {
              es: {
                singular: "Conéctese en Asana"
              },
              "de-DE": {
                singular: "Auf Asana verbinden"
              },
              "fr-FR": {
                singular: "Connectez-vous sur Asana"
              },
              "ja-JP": {
                singular: "Asanaでつながる"
              },
              "ko-KR": {
                singular: "Asana 연결"
              },
              "pt-BR": {
                singular: "Conecte-se no Asana"
              },
              "zh-CN": {
                singular: "在 Asana 上连接"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.PATREON]: {
        connect: {
          url: "https://www.patreon.com/en-GB/apps/vimeo"
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        },
        upsell: {
          message: (0, _v1.translate)({
            singular: "You'll need a Standard plan to upload and an Enterprise plan to live-stream",
            dictionary: {
              es: {
                singular: "Necesitará un plan Standard para subir videos y un plan Enterprise para transmitir en vivo"
              },
              "de-DE": {
                singular: "Sie benötigen einen Standard-Tarif zum Hochladen und einen Enterprise-Tarif zum Livestreamen"
              },
              "fr-FR": {
                singular: "Vous avez besoin d'un abonnement Standard pour mettre en ligne et d'un abonnement Entreprise pour diffuser en direct."
              },
              "ja-JP": {
                singular: "アップロードにはStandardプラン、ライブストリームにはEnterpriseプランが必要です。"
              },
              "ko-KR": {
                singular: "업로드에는 Standard 요금제가 필요하며, 라이브 스트리밍을 위해서는 Enterprise 요금제가 필요합니다."
              },
              "pt-BR": {
                singular: "Você precisa de um plano Standard para fazer carregamentos e de um plano Enterprise para transmissão ao vivo"
              },
              "zh-CN": {
                singular: "您需要 Standard 套餐才能上传，需要 Enterprise 套餐才能直播"
              }
            }
          }),
          requiredTier: "pro"
        }
      },
      [_v2.ADOBE_MEDIA_ENCODER]: {
        connect: {
          url: "https://www.adobe.com/download/media-encoder",
          text: (0, _v1.translate)({
            singular: "Connect on Adobe",
            dictionary: {
              es: {
                singular: "Conéctese en Adobe"
              },
              "de-DE": {
                singular: "Auf Adobe verbinden"
              },
              "fr-FR": {
                singular: "Connectez-vous sur Adobe"
              },
              "ja-JP": {
                singular: "Adobeでつながる"
              },
              "ko-KR": {
                singular: "Adobe 연결"
              },
              "pt-BR": {
                singular: "Conecte-se no Adobe"
              },
              "zh-CN": {
                singular: "在 Adobe 上连接"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.ADOBE_PREMIERE_PRO]: {
        connect: {
          url: "https://exchange.adobe.com/apps/cc/100354/vimeo-panel",
          text: (0, _v1.translate)({
            singular: "Connect on Adobe",
            dictionary: {
              es: {
                singular: "Conéctese en Adobe"
              },
              "de-DE": {
                singular: "Auf Adobe verbinden"
              },
              "fr-FR": {
                singular: "Connectez-vous sur Adobe"
              },
              "ja-JP": {
                singular: "Adobeでつながる"
              },
              "ko-KR": {
                singular: "Adobe 연결"
              },
              "pt-BR": {
                singular: "Conecte-se no Adobe"
              },
              "zh-CN": {
                singular: "在 Adobe 上连接"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=disconnect",
          payload: {
            service: "adobe_premiere_pro"
          }
        }
      },
      [_v2.GODADDY]: {
        connect: {
          url: "https://help.vimeo.com/hc/en-us/articles/12427445684625-Vimeo-integration-on-GoDaddy",
          text: (0, _v1.translate)({
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
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.WIX]: {
        connect: {
          url: "https://help.vimeo.com/hc/en-us/articles/12427450906129-About-Create-s-integration-with-Wix",
          text: (0, _v1.translate)({
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
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.ADOBE_EXPRESS]: {
        connect: {
          url: "https://new.express.adobe.com/add-ons?addOnId=w3mk49j39&_branch_match_id=1329189482788829198&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zJT0otLkgsyi7ILy7RSywo0MvJzMvWDwmy9E0yD4lw80myT0xJ8c%2FzTLEtN87NNrHMMrZUqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAleG33VcAAAA%3D",
          text: (0, _v1.translate)({
            singular: "Connect on Adobe Express",
            dictionary: {
              es: {
                singular: "Conectar en Adobe Express"
              },
              "de-DE": {
                singular: "Verbinden auf Adobe Express"
              },
              "fr-FR": {
                singular: "Se connecter à Adobe Express"
              },
              "ja-JP": {
                singular: "Adobe Expressで接続"
              },
              "ko-KR": {
                singular: "Adobe Express에서 연결하기"
              },
              "pt-BR": {
                singular: "Conecte-se ao Adobe Express"
              },
              "zh-CN": {
                singular: "在 Adobe Express 上连接"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.KAPWING]: {
        connect: {
          url: "https://www.kapwing.com/studio/editor",
          text: (0, _v1.translate)({
            singular: "Connect on Kapwing",
            dictionary: {
              es: {
                singular: "Conectar en Kapwing"
              },
              "de-DE": {
                singular: "Verbinden auf Kapwing"
              },
              "fr-FR": {
                singular: "Se connecter à Kapwing"
              },
              "ja-JP": {
                singular: "Kapwingで接続"
              },
              "ko-KR": {
                singular: "Kapwing에서 연결하기"
              },
              "pt-BR": {
                singular: "Conecte-se ao Kapwing"
              },
              "zh-CN": {
                singular: "在 Kapwing 上连接"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.LIGHTWORKS]: {
        connect: {
          url: "https://lwks.com/guides/exporting",
          text: (0, _v1.translate)({
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
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.POWTOON]: {
        connect: {
          url: "https://powtoonsupport.powtoon.com/hc/en-gb/articles/11597430183441-Uploading-Your-Powtoon-to-Vimeo",
          text: (0, _v1.translate)({
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
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.SCREENFLOW]: {
        connect: {
          url: "https://support.telestream.net/s/article/ScreenFlow-Publish-to-Vimeo",
          text: (0, _v1.translate)({
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
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.HEYGEN]: {
        connect: {
          url: "https://help.vimeo.com/hc/en-us/articles/38698675360273-How-to-use-the-HeyGen-integration-with-my-Vimeo-account",
          text: (0, _v1.translate)({
            singular: "Connect your accounts",
            dictionary: {
              es: {
                singular: "Conectar sus cuentas"
              },
              "de-DE": {
                singular: "Ihre Konten verknüpfen"
              },
              "fr-FR": {
                singular: "Connectez vos comptes"
              },
              "ja-JP": {
                singular: "アカウントを接続"
              },
              "ko-KR": {
                singular: "계정 연결하기"
              },
              "pt-BR": {
                singular: "Conecte suas contas"
              },
              "zh-CN": {
                singular: "连接您的帐户"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      [_v2.WORDPRESS]: {
        connect: {
          url: "https://wordpress.org/plugins/vimeo/",
          text: (0, _v1.translate)({
            singular: "Connect on WordPress",
            dictionary: {
              es: {
                singular: "Conectar en WordPress"
              },
              "de-DE": {
                singular: "Verbinden auf WordPress"
              },
              "fr-FR": {
                singular: "Se connecter à WordPress"
              },
              "ja-JP": {
                singular: "WordPressで接続"
              },
              "ko-KR": {
                singular: "WordPress에서 연결하기"
              },
              "pt-BR": {
                singular: "Conecte-se ao WordPress"
              },
              "zh-CN": {
                singular: "在 WordPress 上连接"
              }
            }
          })
        },
        disconnect: {
          url: "/settings/apps?action=remove_app"
        }
      },
      default: {
        disconnect: {
          method: "post",
          url: "/settings/apps?action=remove_app",
          text: (0, _v1.translate)({
            singular: "Disconnect",
            dictionary: {
              es: {
                singular: "Desconectar"
              },
              "de-DE": {
                singular: "Verbindung unterbrechen"
              },
              "fr-FR": {
                singular: "Se déconnecter"
              },
              "ja-JP": {
                singular: "接続解除"
              },
              "ko-KR": {
                singular: "연결 해제"
              },
              "pt-BR": {
                singular: "Desconectar"
              },
              "zh-CN": {
                singular: "取消关联"
              }
            }
          })
        }
      }
    };
  _v0.s(["APP_CONFIG", 0, _v5, "FEATURED_APPS_UUID", 0, _v4, "MARKTING_APPS_UUID", 0, _v3, "PARTNER_ID", 0, _v2]);
}