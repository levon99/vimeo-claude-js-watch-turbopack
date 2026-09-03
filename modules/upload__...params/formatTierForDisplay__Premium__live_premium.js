{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (_v0, _v1) => "en" === _v1 ? _v0.replace(/AM/g, "am").replace(/PM/g, "pm") : _v0;
  _v0.s(["formatTierForDisplay", 0, _v0 => {
    switch (_v0) {
      case "live_premium":
        return "Premium";
      case "live_pro":
        return "PRO Live";
      case "live_business":
        return "Business Live";
      case "pro":
        return "PRO";
      case "pro_unlimited":
        return "PRO Unlimited";
      case "plus":
        return "Plus";
      case "producer":
        return "Producer";
      case "business":
        return "Business";
      case "enterprise":
        return "Enterprise";
      case "custom_self_serve":
      case "custom":
        return "Custom";
      case "ott_custom":
        return "OTT Custom";
      case "free":
        return "Free";
      case "basic":
        return "Basic";
      default:
        return _v0.replace(/_/g, " ").replace(/\b\w/g, _v0 => _v0.toUpperCase());
    }
  }, "getLimitLabel", 0, _v0 => {
    switch (_v0) {
      case "video_count":
        return (0, _v3.translate)({
          singular: "Videos",
          dictionary: {
            "fr-FR": {
              singular: "Vidéos"
            },
            "ja-JP": {
              singular: "動画"
            },
            "ko-KR": {
              singular: "동영상"
            },
            "pt-BR": {
              singular: "Vídeos"
            },
            "zh-CN": {
              singular: "视频"
            }
          }
        });
      case "video_size":
      default:
        return (0, _v3.translate)({
          singular: "Storage",
          dictionary: {
            es: {
              singular: "Almacenamiento:"
            },
            "de-DE": {
              singular: "Speicherplatz"
            },
            "fr-FR": {
              singular: "Stockage"
            },
            "ja-JP": {
              singular: "ストレージ"
            },
            "ko-KR": {
              singular: "저장 공간"
            },
            "pt-BR": {
              singular: "Armazenamento"
            },
            "zh-CN": {
              singular: "存储"
            }
          }
        });
      case "ai_token":
        return (0, _v3.translate)({
          singular: "AI credits",
          dictionary: {
            es: {
              singular: "Créditos de IA"
            },
            "de-DE": {
              singular: "AI-Credits"
            },
            "fr-FR": {
              singular: "Crédits IA"
            },
            "ja-JP": {
              singular: "AIクレジット"
            },
            "ko-KR": {
              singular: "AI 크레딧"
            },
            "pt-BR": {
              singular: "Créditos de IA"
            },
            "zh-CN": {
              singular: "AI 积分"
            }
          }
        });
      case "drm_license":
        return (0, _v3.translate)({
          singular: "DRM licenses",
          dictionary: {
            es: {
              singular: "Licencias de DRM"
            },
            "de-DE": {
              singular: "DRM-Lizenzen"
            },
            "fr-FR": {
              singular: "Licences DRM"
            },
            "ja-JP": {
              singular: "DRMライセンス"
            },
            "ko-KR": {
              singular: "DRM 라이선스"
            },
            "pt-BR": {
              singular: "Licenças DRM"
            },
            "zh-CN": {
              singular: "DRM 许可证"
            }
          }
        });
    }
  }, "getOutOfAICreditsText", 0, ({
    showZeroCreditsMessage: _v0,
    isWorkspaceAdminUser: _v1
  }) => _v0 && (_v1 ? (0, _v3.translate)({
    singular: "To get credits, contact your Organization Admin.",
    dictionary: {
      es: {
        singular: "Para obtener créditos, póngase en contacto con el administrador de su organización."
      },
      "de-DE": {
        singular: "Um Credits zu erhalten, wenden Sie sich an Ihren Organisationsadmin."
      },
      "fr-FR": {
        singular: "Pour obtenir des crédits, contactez l’administrateur de votre organisation."
      },
      "ja-JP": {
        singular: "クレジットを取得するには、組織の管理者にお問い合わせください。"
      },
      "ko-KR": {
        singular: "크레딧을 받으려면 조직 관리자에게 문의하세요."
      },
      "pt-BR": {
        singular: "Para obter créditos, entre em contato com o administrador da sua organização."
      },
      "zh-CN": {
        singular: "要获取积分，请联系您的组织管理员。"
      }
    }
  }) : (0, _v3.translate)({
    singular: "To get credits, {LINK}contact us{/LINK} or your Account Manager.",
    replacements: {
      LINK: _v0 => (0, _v1.jsx)(_v2.Link, {
        href: "https://vimeo.com/enterprise/contact-us",
        target: "_blank",
        variant: "brand",
        children: _v0
      })
    },
    dictionary: {
      es: {
        singular: "Para obtener créditos, {LINK}contáctenos{/LINK} o contacte a su gerente de la cuenta."
      },
      "de-DE": {
        singular: "Um Guthaben zu erhalten, {LINK}kontaktieren Sie uns{/LINK} oder Ihren Kundenbetreuenden."
      },
      "fr-FR": {
        singular: "Pour obtenir des crédits, {LINK}contactez-nous{/LINK} ou contactez votre responsable de compte."
      },
      "ja-JP": {
        singular: "クレジットを取得するには、{LINK}こちらからお問い合わせ{/LINK}いただくか、アカウントマネージャーにご連絡ください。"
      },
      "ko-KR": {
        singular: "크레딧을 받으려면 {LINK}Vimeo에 문의{/LINK}하거나 계정 관리자에게 문의하세요."
      },
      "pt-BR": {
        singular: "Para obter créditos, {LINK}entre em contato conosco{/LINK} ou com o seu gerente da conta."
      },
      "zh-CN": {
        singular: "要获取积分，请{LINK}联系我们{/LINK}或您的客户经理。"
      }
    }
  })), "getQuotaAmount", 0, (_v0, _v1) => {
    switch (_v1) {
      case _v5.QUOTA_UNITS.SIZE:
        return (0, _v4.bytesToSize)(_v0).toString();
      case _v5.QUOTA_UNITS.DRM_LICENSE:
        let _v0;
        return isNaN(_v0 = parseFloat(_v0)) || _v0 < 0 ? "0" : _v0 < 0 ? _v0.toString() : new Intl.NumberFormat((0, _v3.getCurrentLocale)(), {
          notation: "compact",
          maximumFractionDigits: 1,
          trailingZeroDisplay: "stripIfInteger"
        }).format(_v0);
      default:
        return _v0.toString();
    }
  }, "getQuotaBarColor", 0, _v0 => null === _v0 ? "vimeoBlue.400" : _v0 >= 95 ? "status-destructive-primary" : _v0 >= 75 ? "status-caution-primary" : "vimeoBlue.400", "getQuotaBarHighlightColor", 0, _v0 => null === _v0 ? "vimeoBlue.700" : _v0 >= 95 ? "red.700" : _v0 >= 75 ? "orange.700" : "vimeoBlue.700", "getQuotaBarSegments", 0, (_v0, _v1, _v2) => {
    let _v3 = _v0 / _v1 * 100;
    return _v3 >= 100 ? {
      baseSegmentWidth: 0,
      highlightSegmentWidth: 100
    } : {
      baseSegmentWidth: Math.max(0, _v2 - _v3),
      highlightSegmentWidth: _v3
    };
  }, "renderAiCreditsExpirationDate", 0, (_v0, _v1, _v2) => {
    let _v3 = Intl.DateTimeFormat(_v1, {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      _v4 = Intl.DateTimeFormat(_v1, {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
      });
    return (0, _v3.translate)({
      singular: "{QUOTA_REMAINING} expire on {DATE} at {TIME}",
      replacements: {
        QUOTA_REMAINING: _v0,
        DATE: _v3.format(_v2),
        TIME: _v6(_v4.format(_v2), _v1)
      },
      dictionary: {
        es: {
          singular: "{QUOTA_REMAINING} vencen el {DATE} a las {TIME}"
        },
        "de-DE": {
          singular: "{QUOTA_REMAINING} laufen am {DATE} um {TIME} ab"
        },
        "fr-FR": {
          singular: "{QUOTA_REMAINING} expirent le {DATE} à {TIME}"
        },
        "ja-JP": {
          singular: "{QUOTA_REMAINING}の有効期限は{DATE}の{TIME}に切れます"
        },
        "ko-KR": {
          singular: "{QUOTA_REMAINING}은(는) {DATE} {TIME}에 만료됩니다."
        },
        "pt-BR": {
          singular: "{QUOTA_REMAINING} expiram em {DATE} às {TIME}"
        },
        "zh-CN": {
          singular: "{QUOTA_REMAINING} 将于 {DATE} {TIME} 到期"
        }
      }
    });
  }, "renderQuotaAnnotation", 0, ({
    locale: _v0,
    resetTimestamp: _v1,
    quotaPeriod: _v2,
    quotaUnit: _v3,
    showLastUpdatedDate: _v4,
    isRestrictedQuota: _v5
  }) => {
    if (_v5) return (0, _v3.translate)({
      singular: "Storage used out of account total.{LINE_BREAK}Public, non-embeddable videos don't count.",
      replacements: {
        LINE_BREAK: () => (0, _v1.jsx)("br", {})
      },
      dictionary: {
        es: {
          singular: "Almacenamiento utilizado del total de la cuenta.{LINE_BREAK}Los vídeos públicos que no se pueden incrustar no cuentan."
        },
        "de-DE": {
          singular: "Genutzter Speicher des Kontos insgesamt.{LINE_BREAK}Öffentliche, nicht einbettbare Videos werden nicht angerechnet."
        },
        "fr-FR": {
          singular: "Stockage utilisé sur le total du compte.{LINE_BREAK}Les vidéos publiques non intégrables ne sont pas prises en compte."
        },
        "ja-JP": {
          singular: "アカウント合計に対する使用済みストレージ量.{LINE_BREAK}公開で埋め込み不可の動画は含まれません."
        },
        "ko-KR": {
          singular: "계정 전체 저장 용량 중 사용된 저장 공간입니다.{LINE_BREAK}공개된 임베드 불가 비디오는 포함되지 않습니다."
        },
        "pt-BR": {
          singular: "Armazenamento usado do total da conta.{LINE_BREAK}Vídeos públicos não incorporáveis não contam."
        },
        "zh-CN": {
          singular: "账户总存储量中已使用的存储空间。{LINE_BREAK}公开且不可嵌入的视频不计入。"
        }
      }
    });
    let _v6 = Intl.DateTimeFormat(_v0, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
      }),
      _v7 = Intl.DateTimeFormat(_v0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      _v8 = Intl.DateTimeFormat(_v0, {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
      });
    if (_v4) return (0, _v3.translate)({
      singular: "Renews on {DATE} at {TIME}. Updated as of {UPDATED_DATE} at {UPDATED_TIME}",
      replacements: {
        DATE: _v7.format(_v1),
        TIME: _v6(_v8.format(_v1), _v0),
        UPDATED_DATE: _v6(_v8.format(new Date()), _v0),
        UPDATED_TIME: _v6(_v8.format(new Date()), _v0)
      },
      dictionary: {
        es: {
          singular: "Se renovará el {DATE} a las {TIME}. Se actualizó el {UPDATED_DATE} a las {UPDATED_TIME}."
        },
        "de-DE": {
          singular: "Wird am {DATE} um {TIME} verlängert. Aktualisiert am {UPDATED_DATE} um {UPDATED_TIME}"
        },
        "fr-FR": {
          singular: "Renouvellement le {DATE} à {TIME}. Dernière mise à jour le {UPDATED_DATE} à {UPDATED_TIME}."
        },
        "ja-JP": {
          singular: "{DATE}の{TIME}に更新されます。以前更新されたのは{UPDATED_DATE} {UPDATED_TIME}です。"
        },
        "ko-KR": {
          singular: "{DATE} {TIME}에 갱신됩니다. {UPDATED_DATE} {UPDATED_TIME}에 업데이트되었습니다."
        },
        "pt-BR": {
          singular: "Renova em {DATE} às {TIME}. Atualizado em {UPDATED_DATE} às {UPDATED_TIME}"
        },
        "zh-CN": {
          singular: "将于 {DATE} {TIME} 更新从 {UPDATED_DATE}开始更新至 {UPDATED_TIME}。"
        }
      }
    });
    switch (_v3) {
      case "video_count":
      case "video_size":
        if (!_v2 || _v2 === _v5.QUOTA_PERIODS.LIFETIME) return "";
        return (0, _v3.translate)({
          singular: "Limit will reset on {DATE} at {TIME}",
          replacements: {
            DATE: _v7.format(_v1),
            TIME: _v6(_v8.format(_v1), _v0)
          },
          dictionary: {
            es: {
              singular: "El límite se restablecerá el {DATE} a las {TIME}"
            },
            "de-DE": {
              singular: "Das Limit wird am {DATE} um {TIME} zurückgesetzt"
            },
            "fr-FR": {
              singular: "La limite sera réinitialisée le {DATE} à {TIME}"
            },
            "ja-JP": {
              singular: "上限は{DATE}の{TIME}にリセットされます"
            },
            "ko-KR": {
              singular: "한도는 {DATE} {TIME}에 초기화됩니다."
            },
            "pt-BR": {
              singular: "O limite será renovado em {DATE} às {TIME}"
            },
            "zh-CN": {
              singular: "限额将于 {DATE} {TIME} 重置"
            }
          }
        });
      case "ai_token":
        if (!_v2 || _v2 === _v5.QUOTA_PERIODS.LIFETIME) return "";
        return (0, _v3.translate)({
          singular: "Expires on {DATE} at {TIME}",
          replacements: {
            DATE: _v7.format(_v1),
            TIME: _v6(_v8.format(_v1), _v0)
          },
          dictionary: {
            es: {
              singular: "Expira el {DATE} a las {TIME}"
            },
            "de-DE": {
              singular: "Läuft am {DATE} um {TIME} ab"
            },
            "fr-FR": {
              singular: "Expire le {DATE} à {TIME}"
            },
            "ja-JP": {
              singular: "有効期限は {DATE} の {TIME} に切れます"
            },
            "ko-KR": {
              singular: "{DATE} {TIME}에 만료됩니다"
            },
            "pt-BR": {
              singular: "Expira em {DATE} às {TIME}"
            },
            "zh-CN": {
              singular: "将于 {DATE} {TIME} 到期"
            }
          }
        });
      case "drm_license":
        if (!_v2 || _v2 === _v5.QUOTA_PERIODS.LIFETIME) return (0, _v3.translate)({
          singular: "DRM licenses used out of account total.",
          dictionary: {
            es: {
              singular: "Licencias de DRM utilizadas del total de la cuenta."
            },
            "de-DE": {
              singular: "Vom dem Konto insgesamt verwendete DRM-Lizenzen."
            },
            "fr-FR": {
              singular: "Licences DRM utilisées par rapport au total du compte."
            },
            "ja-JP": {
              singular: "アカウントの合計のうち使用されたDRMライセンス。"
            },
            "ko-KR": {
              singular: "계정에서 사용한 DRM 라이선스 총 개수."
            },
            "pt-BR": {
              singular: "Licenças DRM usadas do total da conta."
            },
            "zh-CN": {
              singular: "帐户总数中已使用的 DRM 许可证。"
            }
          }
        });
        return (0, _v3.translate)({
          singular: "DRM licenses used out of account total.{LINE_BREAK}Renews on {DATETIME}",
          replacements: {
            DATETIME: _v6.format(_v1),
            LINE_BREAK: () => (0, _v1.jsx)("br", {})
          },
          dictionary: {
            es: {
              singular: "Licencias de DRM utilizadas del total de la cuenta.{LINE_BREAK}Se renuevan el {DATETIME}"
            },
            "de-DE": {
              singular: "Vom dem Konto insgesamt verwendete DRM-Lizenzen.{LINE_BREAK} Verlängerung am {DATETIME}"
            },
            "fr-FR": {
              singular: "Licences DRM utilisées par rapport au total du compte.{LINE_BREAK}Renouvellement le {DATETIME}"
            },
            "ja-JP": {
              singular: "アカウントの合計のうち使用されたDRMライセンス。{LINE_BREAK}{DATETIME}に更新。"
            },
            "ko-KR": {
              singular: "계정에서 사용한 DRM 라이선스 총 개수.{LINE_BREAK}{DATETIME}에 갱신"
            },
            "pt-BR": {
              singular: "Licenças de DRM usadas do total da conta.{LINE_BREAK}Renova em {DATETIME}"
            },
            "zh-CN": {
              singular: "帐户总数中已使用的 DRM 许可证。{LINE_BREAK}{DATETIME} 更新"
            }
          }
        });
      default:
        return;
    }
  }], 0);
}