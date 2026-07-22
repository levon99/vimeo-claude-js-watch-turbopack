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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = (_v0, _v1) => "en" === _v1 ? _v0.replace(/AM/g, "am").replace(/PM/g, "pm") : _v0,
    _v20 = ({
      locale: _v0,
      resetTimestamp: _v1,
      quotaPeriod: _v2,
      quotaUnit: _v3,
      showLastUpdatedDate: _v4,
      isRestrictedQuota: _v5
    }) => {
      if (_v5) return (0, _v13.translate)({
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
      if (_v4) return (0, _v13.translate)({
        singular: "Renews on {DATE} at {TIME}. Updated as of {UPDATED_DATE} at {UPDATED_TIME}",
        replacements: {
          DATE: _v7.format(_v1),
          TIME: _v19(_v8.format(_v1), _v0),
          UPDATED_DATE: _v19(_v8.format(new Date()), _v0),
          UPDATED_TIME: _v19(_v8.format(new Date()), _v0)
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
          if (!_v2 || _v2 === _v18.QUOTA_PERIODS.LIFETIME) return "";
          return (0, _v13.translate)({
            singular: "Limit will reset on {DATE} at {TIME}",
            replacements: {
              DATE: _v7.format(_v1),
              TIME: _v19(_v8.format(_v1), _v0)
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
          if (!_v2 || _v2 === _v18.QUOTA_PERIODS.LIFETIME) return "";
          return (0, _v13.translate)({
            singular: "Expires on {DATE} at {TIME}",
            replacements: {
              DATE: _v7.format(_v1),
              TIME: _v19(_v8.format(_v1), _v0)
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
          if (!_v2 || _v2 === _v18.QUOTA_PERIODS.LIFETIME) return (0, _v13.translate)({
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
          return (0, _v13.translate)({
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
    },
    _v21 = (_v0, _v1) => {
      switch (_v1) {
        case _v18.QUOTA_UNITS.SIZE:
          return (0, _v17.bytesToSize)(_v0).toString();
        case _v18.QUOTA_UNITS.DRM_LICENSE:
          let _v0;
          return isNaN(_v0 = parseFloat(_v0)) || _v0 < 0 ? "0" : _v0 < 0 ? _v0.toString() : new Intl.NumberFormat((0, _v13.getCurrentLocale)(), {
            notation: "compact",
            maximumFractionDigits: 1,
            trailingZeroDisplay: "stripIfInteger"
          }).format(_v0);
        default:
          return _v0.toString();
      }
    },
    _v22 = _v0 => {
      switch (_v0) {
        case "video_count":
          return (0, _v13.translate)({
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
          return (0, _v13.translate)({
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
          return (0, _v13.translate)({
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
          return (0, _v13.translate)({
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
    },
    _v23 = (_v0, _v1, _v2) => {
      let _v3 = _v0 / _v1 * 100;
      return _v3 >= 100 ? {
        baseSegmentWidth: 0,
        highlightSegmentWidth: 100
      } : {
        baseSegmentWidth: Math.max(0, _v2 - _v3),
        highlightSegmentWidth: _v3
      };
    },
    _v24 = _v0 => null === _v0 ? "vimeoBlue.400" : _v0 >= 95 ? "status-destructive-primary" : _v0 >= 75 ? "status-caution-primary" : "vimeoBlue.400",
    _v25 = _v0 => null === _v0 ? "vimeoBlue.700" : _v0 >= 95 ? "red.700" : _v0 >= 75 ? "orange.700" : "vimeoBlue.700",
    _v26 = ({
      showZeroCreditsMessage: _v0,
      isWorkspaceAdminUser: _v1
    }) => _v0 && (_v1 ? (0, _v13.translate)({
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
    }) : (0, _v13.translate)({
      singular: "To get credits, {LINK}contact us{/LINK} or your Account Manager.",
      replacements: {
        LINK: _v0 => (0, _v1.jsx)(_v7.Link, {
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
    }));
  _v0.s(["getLimitLabel", 0, _v22, "getOutOfAICreditsText", 0, _v26, "getQuotaAmount", 0, _v21, "getQuotaBarColor", 0, _v24, "getQuotaBarHighlightColor", 0, _v25, "getQuotaBarSegments", 0, _v23, "renderAiCreditsExpirationDate", 0, (_v0, _v1, _v2) => {
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
    return (0, _v13.translate)({
      singular: "{QUOTA_REMAINING} expire on {DATE} at {TIME}",
      replacements: {
        QUOTA_REMAINING: _v0,
        DATE: _v3.format(_v2),
        TIME: _v19(_v4.format(_v2), _v1)
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
  }, "renderQuotaAnnotation", 0, _v20], 0);
  var _v27 = _v0.i(0);
  let _v28 = ({
      quotaResetDate: _v0,
      locale: _v1,
      quotaPeriod: _v2,
      quotaUnit: _v3,
      isMobile: _v4,
      showLastUpdatedDate: _v5,
      isRestrictedQuota: _v6,
      compact: _v7
    }) => {
      let [_v8, _v9] = (0, _v2.useState)(!1),
        _v10 = _v20({
          locale: _v1,
          resetTimestamp: new Date(_v0 ?? ""),
          quotaPeriod: _v2,
          quotaUnit: _v3,
          showLastUpdatedDate: _v5,
          isRestrictedQuota: _v6
        });
      return _v10 ? (0, _v1.jsx)(_v10.Tooltip, {
        isOpen: _v8,
        textAlign: "left",
        placement: _v4 ? "top" : "right",
        label: _v10,
        children: (0, _v1.jsx)(_v6.Flex, {
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          ...(_v7 ? {
            ml: (0, _v11.rem)(4)
          } : {
            height: "xs",
            width: "xs"
          }),
          children: (0, _v1.jsx)(_v27.InfoCircle, {
            onMouseEnter: () => _v9(!0),
            onMouseLeave: () => _v9(!1),
            onClick: () => _v9(_v0 => !_v0),
            height: _v7 ? (0, _v11.rem)(12) : "2xs",
            width: _v7 ? (0, _v11.rem)(12) : "2xs"
          })
        })
      }) : null;
    },
    _v29 = _v0 => (0, _v1.jsxs)(_v5.Box, {
      as: "svg",
      viewBox: "0 0 22 22",
      fill: "none",
      "aria-hidden": "true",
      role: "presentation",
      ..._v0,
      children: [(0, _v1.jsx)("path", {
        d: "M11.917 4.5835C11.917 5.08967 11.5067 5.5 11.0005 5.5H5.5C4.48759 5.5 3.66717 6.32064 3.66699 7.33301V14.667C3.66717 15.6794 4.48759 16.5 5.5 16.5H16.5C17.5124 16.5 18.3328 15.6794 18.333 14.667V12.834C18.333 12.3275 18.7436 11.917 19.25 11.917C19.7564 11.917 20.167 12.3275 20.167 12.834V14.667C20.1668 16.6919 18.5249 18.333 16.5 18.333H5.5C3.47506 18.333 1.83318 16.6919 1.83301 14.667V7.33301C1.83318 5.30811 3.47506 3.66699 5.5 3.66699H11.0005C11.5067 3.66699 11.917 4.07732 11.917 4.5835Z",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M20.2426 3.67201V2.63542C20.2426 1.93646 19.965 1.26613 19.4707 0.771896C18.9765 0.277659 18.3062 0 17.6072 0C16.9082 0 16.2379 0.277659 15.7437 0.771896C15.2494 1.26613 14.9718 1.93646 14.9718 2.63542V3.67201C14.4592 3.85325 14.0151 4.18862 13.7006 4.63213C13.386 5.07564 13.2164 5.60558 13.2148 6.14931V7.90625C13.2148 8.60521 13.4925 9.27553 13.9867 9.76977C14.481 10.264 15.1513 10.5417 15.8503 10.5417H19.3641C20.0631 10.5417 20.7334 10.264 21.2277 9.76977C21.7219 9.27553 21.9996 8.60521 21.9996 7.90625V6.14931C21.998 5.60558 21.8284 5.07564 21.5138 4.63213C21.1993 4.18862 20.7553 3.85325 20.2426 3.67201ZM16.7287 2.63542C16.7287 2.40243 16.8213 2.17899 16.986 2.01424C17.1508 1.8495 17.3742 1.75694 17.6072 1.75694C17.8402 1.75694 18.0636 1.8495 18.2284 2.01424C18.3931 2.17899 18.4857 2.40243 18.4857 2.63542V3.51389H16.7287V2.63542ZM20.2426 7.90625C20.2426 8.13924 20.1501 8.36268 19.9853 8.52742C19.8206 8.69217 19.5971 8.78472 19.3641 8.78472H15.8503C15.6173 8.78472 15.3938 8.69217 15.2291 8.52742C15.0643 8.36268 14.9718 8.13924 14.9718 7.90625V6.14931C14.9718 5.91632 15.0643 5.69288 15.2291 5.52813C15.3938 5.36339 15.6173 5.27083 15.8503 5.27083H19.3641C19.5971 5.27083 19.8206 5.36339 19.9853 5.52813C20.1501 5.69288 20.2426 5.91632 20.2426 6.14931V7.90625Z",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M9.54883 9.28205C9.54883 8.83691 10.0107 8.56168 10.3743 8.79013L13.1001 10.5029C13.4577 10.7276 13.4577 11.2719 13.1001 11.4966L10.3742 13.2092C10.0107 13.4377 9.54883 13.1624 9.54883 12.7173V9.28205Z",
        fill: "currentColor"
      })]
    }),
    _v30 = ({
      isMobile: _v0,
      onUpgradeClick: _v1,
      quotaAvailable: _v2,
      quotaUsed: _v3,
      totalUsed: _v4,
      totalAvailable: _v5,
      quotaPeriod: _v6,
      lifetimeUnit: _v7,
      periodicUnit: _v8,
      resetDate: _v9,
      showTotal: _v10,
      showUpgrade: _v11,
      showZeroCreditsMessage: _v12,
      isWorkspaceAdminUser: _v13,
      totalRemaining: _v14,
      isAllocated: _v15,
      showProgressBar: _v16 = !0,
      icon: _v17,
      hideQuotaTooltip: _v18,
      limitLabel: _v19,
      showColdStorageWarning: _v20,
      isRestrictedQuota: _v21,
      highlightedValue: _v22,
      compact: _v23,
      showAutoRenewBadge: _v24 = !1
    }) => {
      let {
          trackColdStorageUxClicked: _v25
        } = (0, _v16.useColdStorageTracking)(),
        _v26 = (0, _v12.useColorModeValue)("gray.200", "gray.600");
      _v10 = (!!_v7 && _v10) ?? !1;
      let _v27 = null,
        _v28 = null,
        _v29 = null,
        _v30 = null;
      if (null !== _v3 && null !== _v2 && null !== _v8) {
        _v27 = _v3 && _v21(_v3, _v8), _v28 = _v2 && _v21(_v2, _v8);
        let _v0 = _v3 / _v2 * 100;
        _v29 = Math.min(100, Math.max(+(_v0 > 0), Math.round(_v0))), _v30 = _v14 && _v21(_v14, _v8);
      }
      let _v31 = null,
        _v32 = null,
        _v33 = null;
      if (null !== _v4 && null !== _v5 && null !== _v7) {
        _v31 = _v4 && _v21(_v4, _v7), _v32 = _v5 && _v21(_v5, _v7);
        let _v0 = _v4 / _v5 * 100;
        _v33 = Math.min(100, Math.max(+(_v0 > 0), Math.round(_v0))), _v30 = _v14 && _v21(_v14, _v7);
      }
      let _v34 = _v29;
      null === _v34 && null !== _v33 && (_v34 = _v33, _v27 = _v31, _v28 = _v32), _v27 = Number.isFinite(Number(_v27)) ? Number(_v27).toLocaleString() : _v27, _v28 = Number.isFinite(Number(_v28)) ? Number(_v28).toLocaleString() : _v28;
      let _v35 = _v19 || _v22(_v8 || _v7),
        _v36 = _v13 ? (0, _v13.translate)({
          singular: "{WORKSPACE_USED} used",
          replacements: {
            WORKSPACE_USED: _v27
          },
          dictionary: {
            es: {
              singular: "{WORKSPACE_USED} utilizado"
            },
            "de-DE": {
              singular: "{WORKSPACE_USED} verwendet"
            },
            "fr-FR": {
              singular: "{WORKSPACE_USED} utilisé(s)"
            },
            "ja-JP": {
              singular: "{WORKSPACE_USED}使用済み"
            },
            "ko-KR": {
              singular: "{WORKSPACE_USED} 사용"
            },
            "pt-BR": {
              singular: "Utilizado: {WORKSPACE_USED}"
            },
            "zh-CN": {
              singular: "{WORKSPACE_USED} 已使用"
            }
          }
        }) : (0, _v13.translate)({
          singular: "{USED} of {LIMIT}",
          replacements: {
            USED: _v27,
            LIMIT: _v28
          },
          dictionary: {
            es: {
              singular: "{USED} de {LIMIT}"
            },
            "de-DE": {
              singular: "{USED} von {LIMIT}"
            },
            "fr-FR": {
              singular: "{USED} sur {LIMIT}"
            },
            "ja-JP": {
              singular: "{USED} / {LIMIT}"
            },
            "ko-KR": {
              singular: "{USED}/{LIMIT}"
            },
            "pt-BR": {
              singular: "{USED} de {LIMIT}"
            },
            "zh-CN": {
              singular: "{USED} / {LIMIT}"
            }
          }
        }),
        _v37 = null !== _v34 && _v34 >= 100,
        _v38 = "video_size" === (_v8 || _v7) && null !== _v34 && _v34 >= 95 ? "storage_limit" : "quota",
        _v39 = (0, _v15.buildUpgradePlanUrl)({
          paywallTrigger: "quota_meter_upgrade_button",
          paywallLocation: "quota_meter",
          paywallFeature: _v38
        }, {
          upsell: "quota_meter",
          integration: "none",
          feature: _v37 ? "Storage_at_limit" : "Storage_general",
          paywall: "1",
          upsellFeatureCategory: "Storage",
          upsellSpecificFeature: _v37 ? "Storage_at_limit" : "Storage_general"
        }),
        _v40 = (0, _v2.useCallback)(() => {
          _v1?.(_v8 || _v7, _v34);
        }, [_v1, _v8, _v7, _v34]),
        {
          isEligible: _v41
        } = (0, _v4.useAutoRenewEncouragementEligibility)(),
        _v42 = _v24 && _v41,
        _v43 = () => (0, _v1.jsx)(_v10.Tooltip, {
          label: (0, _v13.translate)({
            singular: "You're over your storage limit. Delete videos to unlock uploads.",
            dictionary: {
              es: {
                singular: "Has superado tu límite de almacenamiento. Elimina vídeos para desbloquear las subidas."
              },
              "de-DE": {
                singular: "Sie haben Ihr Speicherlimit überschritten. Löschen Sie Videos, um Uploads wieder zu aktivieren."
              },
              "fr-FR": {
                singular: "Vous avez dépassé votre quota de stockage. Supprimez des vidéos pour débloquer les mises en ligne."
              },
              "ja-JP": {
                singular: "ストレージ容量の上限を超えています。動画を削除してアップロードを再開してください。"
              },
              "ko-KR": {
                singular: "저장 용량 한도를 초과했습니다. 업로드 잠금을 해제하려면 동영상을 삭제하세요."
              },
              "pt-BR": {
                singular: "Você excedeu seu limite de armazenamento. Exclua vídeos para desbloquear envios."
              },
              "zh-CN": {
                singular: "您已超过存储上限。删除视频以恢复上传权限。"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v7.Link, {
            as: "a",
            href: "/library",
            onClick: () => {
              _v25({
                element: "quota_meter_lock"
              });
            },
            display: "inline-flex",
            alignItems: "center",
            "aria-label": (0, _v13.translate)({
              singular: "You're over your storage limit. Delete videos to unlock uploads.",
              dictionary: {
                es: {
                  singular: "Has superado tu límite de almacenamiento. Elimina vídeos para desbloquear las subidas."
                },
                "de-DE": {
                  singular: "Sie haben Ihr Speicherlimit überschritten. Löschen Sie Videos, um Uploads wieder zu aktivieren."
                },
                "fr-FR": {
                  singular: "Vous avez dépassé votre quota de stockage. Supprimez des vidéos pour débloquer les mises en ligne."
                },
                "ja-JP": {
                  singular: "ストレージ容量の上限を超えています。動画を削除してアップロードを再開してください。"
                },
                "ko-KR": {
                  singular: "저장 용량 한도를 초과했습니다. 업로드 잠금을 해제하려면 동영상을 삭제하세요."
                },
                "pt-BR": {
                  singular: "Você excedeu seu limite de armazenamento. Exclua vídeos para desbloquear envios."
                },
                "zh-CN": {
                  singular: "您已超过存储上限。删除视频以恢复上传权限。"
                }
              }
            }),
            children: (0, _v1.jsx)(_v29, {
              color: "status-destructive-primary",
              boxSize: (0, _v11.rem)(18)
            })
          })
        }),
        _v44 = null !== _v29 && _v29 >= 95 || null !== _v34 && _v34 >= 95,
        _v45 = _v20 ? "red.500" : _v24(_v34),
        _v46 = _v20 ? "red.700" : _v25(_v34),
        {
          baseSegmentWidth: _v47,
          highlightSegmentWidth: _v48
        } = _v22 && _v2 ? _v23(_v22, _v2, _v34) : {
          baseSegmentWidth: 0,
          highlightSegmentWidth: 0
        };
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v5.Box, {
          gap: "sm",
          display: "flex",
          flexDirection: "column",
          ...(!_v23 && {
            paddingX: "md"
          }),
          paddingY: "sm",
          children: [(0, _v1.jsxs)(_v5.Box, {
            gap: "sm",
            display: "flex",
            flexDirection: _v23 ? "row" : "column",
            justifyContent: "space-between",
            alignItems: _v23 ? "center" : "flex-start",
            width: "100%",
            children: [(0, _v1.jsxs)(_v5.Box, {
              display: "flex",
              justifyContent: "space-between",
              ...(_v23 ? {
                flexShrink: 0,
                alignItems: "center"
              } : {
                width: "100%"
              }),
              children: [(0, _v1.jsxs)(_v9.Text, {
                display: "flex",
                variant: "heading-2xs",
                alignItems: "center",
                whiteSpace: _v23 ? "nowrap" : void 0,
                children: [_v35, !_v12 && !_v18 && (0, _v1.jsx)(_v28, {
                  quotaResetDate: _v9 ?? "",
                  locale: (0, _v13.getCurrentLocale)(),
                  quotaPeriod: _v6,
                  quotaUnit: _v8 || _v7,
                  isMobile: _v0,
                  isRestrictedQuota: _v21,
                  compact: _v23
                })]
              }), _v24 && (0, _v1.jsx)(_v3.AccessEndingBadge, {
                surface: "storage_cta"
              }), _v11 && !_v0 && !_v42 && (0, _v1.jsx)(_v14.UpgradeBadge, {
                style: {
                  marginRight: 0
                },
                href: _v1 ? void 0 : _v39,
                onClick: _v40,
                name: "quota_meter_upgrade_button",
                location: "quota_meter"
              })]
            }), _v12 && (0, _v1.jsx)(_v6.Flex, {
              justifyContent: "space-between",
              width: "100%",
              children: (0, _v1.jsx)(_v9.Text, {
                variant: "body-sm",
                color: "text-tertiary",
                "data-testid": "out-of-ai-credits-text",
                children: _v26({
                  showZeroCreditsMessage: !!_v12,
                  isWorkspaceAdminUser: !!_v13
                })
              })
            }), !_v12 && (_v13 ? (0, _v1.jsx)(() => {
              let _v0 = Number(_v30),
                _v1 = Number.isFinite(_v0) ? _v0.toLocaleString() : _v30;
              return _v15 ? (0, _v1.jsx)(_v6.Flex, {
                justifyContent: "space-between",
                width: "100%",
                flexDirection: "column",
                gap: "sm",
                children: (0, _v1.jsxs)(_v6.Flex, {
                  width: "100%",
                  gap: "xs",
                  alignItems: "center",
                  children: [_v17, (0, _v1.jsx)(_v9.Text, {
                    variant: "body-sm",
                    textAlign: "left",
                    color: "text-secondary",
                    children: (0, _v13.translate)({
                      singular: "{WORKSPACE_USED} of {WORKSPACE_LIMIT} limit",
                      replacements: {
                        WORKSPACE_USED: _v27,
                        WORKSPACE_LIMIT: _v28
                      },
                      dictionary: {
                        es: {
                          singular: "{WORKSPACE_USED} de un máximo de {WORKSPACE_LIMIT}"
                        },
                        "de-DE": {
                          singular: "{WORKSPACE_USED} von maximal {WORKSPACE_LIMIT}"
                        },
                        "fr-FR": {
                          singular: "{WORKSPACE_USED} sur une limite de {WORKSPACE_LIMIT}"
                        },
                        "ja-JP": {
                          singular: "{WORKSPACE_USED}/{WORKSPACE_LIMIT}を使用済み"
                        },
                        "ko-KR": {
                          singular: "한도 {WORKSPACE_LIMIT} 중 {WORKSPACE_USED} 사용"
                        },
                        "pt-BR": {
                          singular: "{WORKSPACE_USED} do limite de {WORKSPACE_LIMIT}"
                        },
                        "zh-CN": {
                          singular: "{WORKSPACE_USED} 的 {WORKSPACE_LIMIT} 限额"
                        }
                      }
                    })
                  })]
                })
              }) : (0, _v1.jsxs)(_v6.Flex, {
                justifyContent: "space-between",
                width: "100%",
                flexDirection: "column",
                gap: "sm",
                children: [(0, _v1.jsx)(_v9.Text, {
                  "data-testid": "periodic-quota-info",
                  variant: "body-sm",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 0,
                  children: _v36
                }), (0, _v1.jsxs)(_v6.Flex, {
                  width: "100%",
                  gap: "xs",
                  alignItems: "center",
                  children: [_v17, (0, _v1.jsx)(_v9.Text, {
                    variant: "body-sm",
                    textAlign: "left",
                    color: "text-secondary",
                    children: (0, _v13.translate)({
                      singular: "{WORKSPACE_REMAINING} total remaining ",
                      replacements: {
                        WORKSPACE_REMAINING: _v1
                      },
                      dictionary: {
                        es: {
                          singular: "Quedan {WORKSPACE_REMAINING} en total "
                        },
                        "de-DE": {
                          singular: "{WORKSPACE_REMAINING} insgesamt verbleibend "
                        },
                        "fr-FR": {
                          singular: "{WORKSPACE_REMAINING} restant(s) au total "
                        },
                        "ja-JP": {
                          singular: "残り合計{WORKSPACE_REMAINING} "
                        },
                        "ko-KR": {
                          singular: "총 {WORKSPACE_REMAINING} 남음 "
                        },
                        "pt-BR": {
                          singular: "Total restante: {WORKSPACE_REMAINING} "
                        },
                        "zh-CN": {
                          singular: "剩余总数 {WORKSPACE_REMAINING} "
                        }
                      }
                    })
                  })]
                })]
              });
            }, {}) : (0, _v1.jsx)(() => (0, _v1.jsxs)(_v6.Flex, {
              alignItems: "center",
              ...(_v23 ? {
                flexShrink: 0,
                justifyContent: "flex-end"
              } : {
                width: "100%",
                ...(_v20 ? {
                  justifyContent: "space-between"
                } : {
                  gap: "xs"
                })
              }),
              children: [(0, _v1.jsxs)(_v6.Flex, {
                alignItems: "center",
                gap: "xs",
                children: [_v17, (0, _v1.jsxs)(_v9.Text, {
                  "data-testid": "periodic-quota-info",
                  variant: "body-sm",
                  textAlign: "left",
                  color: _v44 && !_v23 ? "red.500" : "text-secondary",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 0,
                  whiteSpace: _v23 ? "nowrap" : void 0,
                  children: ["week" === _v6 && (0, _v13.translate)({
                    singular: "Weekly",
                    dictionary: {
                      es: {
                        singular: "Semanal"
                      },
                      "de-DE": {
                        singular: "Wöchentlich"
                      },
                      "fr-FR": {
                        singular: "Hebdomadaire"
                      },
                      "ja-JP": {
                        singular: "週間"
                      },
                      "ko-KR": {
                        singular: "주간"
                      },
                      "pt-BR": {
                        singular: "Por semana"
                      },
                      "zh-CN": {
                        singular: "每周"
                      }
                    }
                  }), " ", _v36]
                })]
              }), _v20 && (0, _v1.jsx)(_v43, {})]
            }), {}))]
          }), Number.isFinite(_v34) && _v16 && !_v12 && (_v22 && _v2 ? (0, _v1.jsxs)(_v6.Flex, {
            "data-testid": "mobile-quota-bar",
            height: (0, _v11.rem)(6),
            width: "100%",
            borderRadius: "999px",
            bgColor: _v26,
            overflow: "hidden",
            marginBottom: (0, _v11.rem)(4),
            children: [_v47 > 0 && (0, _v1.jsx)(_v5.Box, {
              height: "100%",
              width: `${_v47}%`,
              minWidth: (0, _v11.rem)(6),
              flexShrink: 1,
              bgColor: _v45
            }), (0, _v1.jsx)(_v10.Tooltip, {
              label: (0, _v13.translate)({
                singular: "This video: {SIZE}",
                replacements: {
                  SIZE: (0, _v17.bytesToSize)(_v22).toString()
                },
                dictionary: {
                  es: {
                    singular: "Este vídeo: {SIZE}"
                  },
                  "de-DE": {
                    singular: "Dieses Video: {SIZE}"
                  },
                  "fr-FR": {
                    singular: "Cette vidéo: {SIZE}"
                  },
                  "ja-JP": {
                    singular: "この動画: {SIZE}"
                  },
                  "ko-KR": {
                    singular: "이 동영상: {SIZE}"
                  },
                  "pt-BR": {
                    singular: "Este vídeo: {SIZE}"
                  },
                  "zh-CN": {
                    singular: "此视频: {SIZE}"
                  }
                }
              }),
              placement: "top",
              children: (0, _v1.jsx)(_v5.Box, {
                height: "100%",
                width: `${_v48}%`,
                minWidth: (0, _v11.rem)(6),
                flexShrink: 0,
                bgColor: _v46,
                borderTopRightRadius: "999px",
                borderBottomRightRadius: "999px",
                cursor: "default"
              })
            })]
          }) : (0, _v1.jsx)(_v8.Progress, {
            "data-testid": "mobile-quota-bar",
            value: _v34,
            size: "xs",
            bgColor: _v26,
            sx: {
              "[role=progressbar]": {
                bgColor: _v45
              }
            },
            marginBottom: (0, _v11.rem)(4)
          })), _v10 && null !== _v33 && (0, _v1.jsx)(_v5.Box, {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            "align-items": "center",
            width: "100%",
            marginTop: (0, _v11.rem)(4),
            children: (0, _v1.jsx)(_v9.Text, {
              "data-testid": "total-quota-info",
              variant: "body-xs",
              textAlign: "left",
              color: _v33 >= 95 ? "red.500" : "text-tertiary",
              display: "flex",
              alignItems: "center",
              children: (0, _v13.translate)({
                singular: "Total {USED} of {LIMIT}",
                replacements: {
                  USED: _v31,
                  LIMIT: _v32
                },
                dictionary: {
                  es: {
                    singular: "Total: {USED} de {LIMIT}"
                  },
                  "de-DE": {
                    singular: "Insgesamt {USED} von {LIMIT}"
                  },
                  "fr-FR": {
                    singular: "Total {USED} de {LIMIT}"
                  },
                  "ja-JP": {
                    singular: "合計 {USED}/{LIMIT}"
                  },
                  "ko-KR": {
                    singular: "총 {USED} / {LIMIT}"
                  },
                  "pt-BR": {
                    singular: "Total {USED} de {LIMIT}"
                  },
                  "zh-CN": {
                    singular: "{LIMIT} 中总计使用了 {USED}"
                  }
                }
              })
            })
          }), _v11 && _v0 && !_v42 && (0, _v1.jsx)(_v9.Text, {
            variant: "body-sm",
            color: "blue.500",
            textDecoration: "underline",
            children: (0, _v1.jsx)(_v7.Link, {
              href: (0, _v15.buildUpgradePlanUrl)({
                paywallTrigger: "quota_meter_mobile_upgrade_button",
                paywallLocation: "quota_meter",
                paywallFeature: _v38
              }, {
                upsell: "quota_meter",
                integration: "none",
                feature: "quota",
                paywall: "1"
              }),
              variant: "brand",
              children: (0, _v13.translate)({
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
              })
            })
          })]
        })
      });
    };
  _v0.s(["QuotaMeter", 0, _v30], 0), _v0.s(["UploadQuotaMeter", 0, ({
    isMobile: _v0,
    onUpgradeClick: _v1,
    quota: _v2,
    showTotal: _v3,
    showUpgrade: _v4,
    isWorkspaceAdminUser: _v5,
    showColdStorageWarning: _v6,
    highlightedValue: _v7,
    limitLabel: _v8,
    compact: _v9,
    showAutoRenewBadge: _v10
  }) => {
    let _v11 = null != _v2.restricted,
      _v12 = (_v11 ? _v2.restricted?.max : _v2.periodic?.max) ?? null,
      _v13 = _v11 ? null : _v2.periodic?.period ?? null,
      _v14 = (_v11 ? _v2.restricted?.used : _v2.periodic?.used) ?? null,
      _v15 = (_v11 ? _v2.restricted?.used : _v2.lifetime?.used) ?? null,
      _v16 = (_v11 ? _v2.restricted?.max : _v2.lifetime?.max) ?? null,
      _v17 = (_v11 ? _v2.restricted?.free : _v2.lifetime?.free) ?? null,
      _v18 = _v11 ? _v2.restricted?.unit : _v2.periodic?.unit || _v2.lifetime?.unit || null;
    return (0, _v1.jsx)(_v30, {
      isMobile: _v0,
      onUpgradeClick: _v1,
      showTotal: _v3,
      showUpgrade: _v4,
      quotaAvailable: _v12,
      quotaUsed: _v14,
      totalUsed: _v15,
      totalAvailable: _v16,
      quotaPeriod: _v13,
      lifetimeUnit: _v18,
      periodicUnit: _v18,
      resetDate: _v2.periodic?.resetDate ?? "",
      isWorkspaceAdminUser: _v5,
      totalRemaining: _v17,
      showProgressBar: !_v5,
      hideQuotaTooltip: _v5,
      showColdStorageWarning: _v6,
      isRestrictedQuota: _v11,
      highlightedValue: _v7 && null != _v14 && _v7 > _v14 ? null : _v7,
      limitLabel: _v8,
      compact: _v9,
      showAutoRenewBadge: _v10
    });
  }], 0);
}