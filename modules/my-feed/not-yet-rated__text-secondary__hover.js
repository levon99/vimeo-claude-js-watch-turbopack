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
    _v9 = _v0.i(0);
  function _v10() {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v8.Show, {
        below: "md",
        children: (0, _v1.jsx)(_v2.Badge, {
          variant: "not-yet-rated",
          size: "sm",
          color: "text-secondary",
          borderColor: "text-secondary",
          children: "Ad"
        })
      }), (0, _v1.jsx)(_v8.Show, {
        above: "md",
        children: (0, _v1.jsxs)(_v4.Popover, {
          placement: "top",
          trigger: "hover",
          children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
            children: (0, _v1.jsx)(_v2.Badge, {
              variant: "not-yet-rated",
              size: "sm",
              color: "text-secondary",
              borderColor: "text-secondary",
              children: (0, _v3.translate)({
                singular: "Ad",
                dictionary: {
                  es: {
                    singular: "Anuncio"
                  },
                  "de-DE": {
                    singular: "Werbung"
                  },
                  "fr-FR": {
                    singular: "PUB"
                  },
                  "ja-JP": {
                    singular: "広告"
                  },
                  "ko-KR": {
                    singular: "광고"
                  },
                  "pt-BR": {
                    singular: "Anúncio"
                  },
                  "zh-CN": {
                    singular: "广告"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v6.PopoverContent, {
            maxW: 320,
            py: 75,
            px: 100,
            children: (0, _v1.jsx)(_v5.PopoverBody, {
              children: (0, _v1.jsx)(_v9.Text, {
                textAlign: "center",
                variant: "body-md",
                children: (0, _v3.translate)({
                  singular: "This video contains an advertisement.",
                  dictionary: {
                    es: {
                      singular: "Este video contiene un anuncio."
                    },
                    "de-DE": {
                      singular: "Dieses Video enthält Werbung."
                    },
                    "fr-FR": {
                      singular: "Cette vidéo contient une publicité."
                    },
                    "ja-JP": {
                      singular: "この動画には広告が含まれています。"
                    },
                    "ko-KR": {
                      singular: "이 동영상은 광고를 포함하고 있습니다."
                    },
                    "pt-BR": {
                      singular: "Este vídeo contém um anúncio."
                    },
                    "zh-CN": {
                      singular: "本视频包含广告。"
                    }
                  }
                })
              })
            })
          })]
        })
      })]
    });
  }
  var _v11 = _v0.i(0);
  function _v12({
    aiContent: _v0
  }) {
    let _v1,
      _v2 = _v0?.visual || _v0?.visualAuto,
      _v3 = _v0?.audio || _v0?.audioAuto;
    if (!_v2 && !_v3) return null;
    let _v4 = {
      LINE_BREAK: () => (0, _v1.jsx)("br", {}),
      LINK: _v0 => (0, _v1.jsx)(_v11.Box, {
        _hover: {
          cursor: "pointer"
        },
        as: "a",
        textDecoration: "underline",
        href: "https://vimeo.com/help/zendesk_sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/25551485186833/",
        target: "_blank",
        rel: "noopener noreferrer",
        children: _v0
      })
    };
    switch (!0) {
      case !_v2 && !_v3:
        break;
      case _v2 && _v3:
        _v1 = (0, _v3.translate)({
          singular: "This video contains audio and visuals that were edited or generated using AI. {LINE_BREAK}{LINK}Learn more{/LINK}",
          replacements: _v4,
          dictionary: {
            es: {
              singular: "Este video contiene audio e imágenes que se editaron o generaron con IA. {LINE_BREAK}{LINK}Más información{/LINK}"
            },
            "de-DE": {
              singular: "Dieses Video enthält Audio- und Bildmaterial, das mithilfe von KI bearbeitet oder generiert wurde. {LINE_BREAK}{LINK}Mehr erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Cette vidéo contient du son et des éléments visuels qui ont été modifiés ou générés à l'aide de l'IA. {LINE_BREAK}{LINK}En savoir plus{/LINK}"
            },
            "ja-JP": {
              singular: "この動画には、AIを使用して編集または生成された音声とビジュアルが含まれています。{LINE_BREAK}{LINK}詳細を見る{/LINK}"
            },
            "ko-KR": {
              singular: "이 동영상에는 AI를 사용하여 편집하거나 생성한 오디오 및 영상이 포함되어 있습니다. {LINE_BREAK}{LINK}자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "O vídeo contém áudio e imagens que foram editados ou gerados com IA. {LINE_BREAK}{LINK}Saiba mais{/LINK}"
            },
            "zh-CN": {
              singular: "本视频包含使用 AI 编辑或生成的音频和视觉效果。{LINE_BREAK}{LINK}了解更多{/LINK}"
            }
          }
        });
        break;
      case _v2 && !_v3:
        _v1 = (0, _v3.translate)({
          singular: "This video contains visuals that were edited or generated using AI. {LINE_BREAK}{LINK}Learn more{/LINK}",
          replacements: _v4,
          dictionary: {
            es: {
              singular: "Este video contiene imágenes que se editaron o generaron con IA. {LINE_BREAK}{LINK}Más información{/LINK}"
            },
            "de-DE": {
              singular: "Dieses Video enthält Bilder, die mit KI bearbeitet oder generiert wurden. {LINE_BREAK}{LINK}Mehr erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Cette vidéo contient des éléments visuels qui ont été modifiés ou générés à l'aide de l'IA. {LINE_BREAK}{LINK}En savoir plus{/LINK}"
            },
            "ja-JP": {
              singular: "この動画には、AIを使用して編集または生成されたビジュアルが含まれています。{LINE_BREAK}{LINK}詳細を見る{/LINK}"
            },
            "ko-KR": {
              singular: "이 동영상에는 AI를 사용하여 편집하거나 생성한 영상이 포함되어 있습니다. {LINE_BREAK}{LINK}자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "O vídeo contém elementos visuais que foram editados ou gerados com IA. {LINE_BREAK}{LINK}Saiba mais{/LINK}"
            },
            "zh-CN": {
              singular: "本视频包含使用 AI 编辑或生成的视觉效果。{LINE_BREAK}{LINK}了解更多{/LINK}"
            }
          }
        });
        break;
      case !_v2 && _v3:
        _v1 = (0, _v3.translate)({
          singular: "This video contains audio that was edited or generated using AI. {LINE_BREAK}{LINK}Learn more{/LINK}",
          replacements: _v4,
          dictionary: {
            es: {
              singular: "Este video contiene audio que se editó o generó con IA. {LINE_BREAK}{LINK}Más información{/LINK}"
            },
            "de-DE": {
              singular: "Dieses Video enthält Audio, das mit KI bearbeitet oder generiert wurde. {LINE_BREAK}{LINK}Mehr erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Cette vidéo contient du son qui a été modifié ou généré à l'aide de l'IA. {LINE_BREAK}{LINK}En savoir plus{/LINK}"
            },
            "ja-JP": {
              singular: "この動画には、AIを使用して編集または生成された音声が含まれています。{LINE_BREAK}{LINK}詳細を見る{/LINK}"
            },
            "ko-KR": {
              singular: "이 동영상에는 AI를 사용하여 편집하거나 생성한 오디오가 포함되어 있습니다. {LINE_BREAK}{LINK}자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "O vídeo contém áudio que foi editado ou gerado com IA. {LINE_BREAK}{LINK}Saiba mais{/LINK}"
            },
            "zh-CN": {
              singular: "本视频包含使用 AI 编辑或生成的音频。{LINE_BREAK}{LINK}了解更多{/LINK}"
            }
          }
        });
    }
    if (!_v1) return null;
    let _v5 = (0, _v1.jsx)(_v2.Badge, {
      variant: "not-yet-rated",
      size: "sm",
      color: "text-secondary",
      borderColor: "text-secondary",
      children: (0, _v3.translate)({
        singular: "Includes AI",
        dictionary: {
          es: {
            singular: "Incluye IA"
          },
          "de-DE": {
            singular: "Enthält KI"
          },
          "fr-FR": {
            singular: "Inclut l'IA"
          },
          "ja-JP": {
            singular: "AIを含む"
          },
          "ko-KR": {
            singular: "AI 포함"
          },
          "pt-BR": {
            singular: "Inclui IA"
          },
          "zh-CN": {
            singular: "包括人工智能"
          }
        }
      })
    });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v8.Show, {
        below: "md",
        children: _v5
      }), (0, _v1.jsx)(_v8.Show, {
        above: "md",
        children: (0, _v1.jsxs)(_v4.Popover, {
          placement: "top",
          trigger: "hover",
          children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
            children: _v5
          }), (0, _v1.jsx)(_v6.PopoverContent, {
            maxW: 320,
            py: 75,
            px: 100,
            children: (0, _v1.jsx)(_v5.PopoverBody, {
              children: (0, _v1.jsx)(_v9.Text, {
                textAlign: "left",
                variant: "body-md",
                children: _v1
              })
            })
          })]
        })
      })]
    });
  }
  var _v13 = _v0.i(0);
  function _v14() {
    let {
      colorMode: _v0
    } = (0, _v13.useColorMode)();
    return (0, _v1.jsx)(_v1.Fragment, {
      children: "dark" === _v0 ? (0, _v1.jsxs)("svg", {
        width: "76",
        height: "20",
        viewBox: "0 0 76 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "dolby-vision",
        children: [(0, _v1.jsx)("rect", {
          x: "0.5",
          y: "0.5",
          width: "75",
          height: "19",
          stroke: "#8D97A3"
        }), (0, _v1.jsx)("path", {
          d: "M48.546 13.1704H48.5673L51.1545 6.26065H51.8146L48.8867 13.937H48.1947L45.2881 6.26065H45.9589L48.546 13.1704ZM53.4223 6.71846C53.4223 6.46294 53.2093 6.27129 52.9751 6.27129C52.7622 6.27129 52.5386 6.45229 52.5386 6.71846C52.5386 6.98463 52.7515 7.16562 52.9751 7.16562C53.2093 7.15497 53.4223 6.97398 53.4223 6.71846ZM53.2839 8.62423H52.6876V13.937H53.2839V8.62423ZM57.9045 9.48662C57.5851 8.93298 56.9463 8.63488 56.2117 8.63488C55.3387 8.63488 54.4976 9.07139 54.4976 10.0402C54.4976 11.9141 57.4254 11.0836 57.4254 12.4571C57.4254 13.1597 56.8079 13.4472 56.1798 13.4472C55.5623 13.4472 55.0193 13.1172 54.7318 12.67L54.2634 13.0107C54.6999 13.6495 55.4239 13.9476 56.1798 13.9476C57.0954 13.9476 58.0004 13.4898 58.0004 12.4251C58.0004 11.6053 57.3829 11.2114 56.3182 10.9772C55.4877 10.7962 55.0512 10.5939 55.0512 10.019C55.0512 9.3908 55.6581 9.14592 56.1904 9.14592C56.7547 9.14592 57.2019 9.41209 57.4574 9.83796L57.9045 9.48662ZM59.8955 6.70781C59.8955 6.45229 59.6826 6.26065 59.4483 6.26065C59.2354 6.26065 59.0118 6.44164 59.0118 6.70781C59.0118 6.97398 59.2247 7.15497 59.4483 7.15497C59.6719 7.14433 59.8955 6.96333 59.8955 6.70781ZM59.7677 8.62423H59.1396V13.9263H59.7677V8.62423ZM66.0387 11.2753C66.0387 9.74214 64.9527 8.62423 63.377 8.62423C61.8226 8.62423 60.7259 9.73149 60.7259 11.2753C60.7259 12.7978 61.8119 13.937 63.377 13.937C64.9421 13.937 66.0387 12.7978 66.0387 11.2753ZM65.4318 11.2753C65.4318 12.4784 64.6439 13.4046 63.377 13.4046C62.1207 13.4046 61.3328 12.4784 61.3328 11.2753C61.3328 10.0722 62.1207 9.13527 63.377 9.13527C64.6439 9.13527 65.4318 10.0828 65.4318 11.2753ZM67.0182 8.62423C67.0501 8.96492 67.0608 9.63567 67.0608 9.91249V13.9263H67.657V11.2327C67.657 9.82731 68.4448 9.12463 69.3285 9.12463C70.4358 9.12463 70.7552 9.94443 70.7552 10.9452V13.937H71.3408V10.7323C71.3408 9.53985 70.7765 8.63488 69.4563 8.63488C68.7004 8.63488 67.9444 9.08204 67.6463 9.77408H67.625C67.625 9.50791 67.6037 8.92234 67.5824 8.63488H67.0182V8.62423ZM4 13.9263H5.12856C7.23661 13.9263 8.96139 12.2015 8.96139 10.0935C8.96139 7.98542 7.24726 6.26065 5.12856 6.26065H4V13.9263ZM14.9023 6.26065H13.7737C11.6657 6.26065 9.94089 7.98542 9.94089 10.0935C9.94089 12.2015 11.6657 13.9263 13.7737 13.9263H14.9023V6.26065ZM23.8243 10.0935C23.8243 12.2122 22.1101 13.9263 19.9914 13.9263H17.2233V6.26065H19.9914C22.1101 6.26065 23.8243 7.97478 23.8243 10.0935ZM22.6638 10.0935C22.6638 8.62423 21.4607 7.42114 19.9914 7.42114H18.3838V12.7658H19.9914C21.4607 12.7658 22.6638 11.5627 22.6638 10.0935ZM29.7332 11.2753C29.7332 12.7445 28.5408 13.9263 27.0822 13.9263C25.6236 13.9263 24.4311 12.7339 24.4311 11.2753C24.4311 9.81667 25.6236 8.62423 27.0822 8.62423C28.5408 8.62423 29.7332 9.80602 29.7332 11.2753ZM28.6685 11.2646C28.6685 10.3809 27.9446 9.66761 27.0715 9.66761C26.1985 9.66761 25.4745 10.3809 25.4745 11.2646C25.4745 12.1483 26.1878 12.8616 27.0715 12.8616C27.9552 12.8723 28.6685 12.159 28.6685 11.2646ZM30.4785 13.937H31.639V6.26065H30.4785V13.937ZM37.9525 11.2753C37.9525 12.7445 36.7601 13.9263 35.3015 13.9263C34.7372 13.9263 34.2155 13.7453 33.779 13.4472V13.9263H32.6185V6.25H33.779V9.09269C34.2049 8.79458 34.7372 8.61358 35.3015 8.61358C36.7707 8.62423 37.9525 9.81667 37.9525 11.2753ZM36.8985 11.2646C36.8985 10.3809 36.1745 9.66761 35.3015 9.66761C34.5988 9.66761 33.9919 10.1254 33.779 10.7642C33.7258 10.9239 33.6938 11.0943 33.6938 11.2646C33.6938 11.4456 33.7258 11.6053 33.779 11.765C33.9919 12.4038 34.5881 12.8616 35.3015 12.8616C36.1852 12.8723 36.8985 12.159 36.8985 11.2646ZM42.2112 8.62423L40.6994 12.0312L39.1875 8.62423H37.9206L40.0712 13.4579L39.5495 14.6396C39.4111 14.9484 39.0385 15.0975 38.7297 14.9591L38.5594 14.8845L38.0909 15.9386L38.4955 16.1195C39.2514 16.4602 40.1457 16.1089 40.4758 15.353C40.4758 15.3423 43.2227 9.2098 43.4888 8.62423H42.2112Z",
          fill: "#8D97A3"
        })]
      }) : (0, _v1.jsxs)("svg", {
        width: "76",
        height: "20",
        viewBox: "0 0 76 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": "dolby-vision",
        children: [(0, _v1.jsx)("rect", {
          x: "0.5",
          y: "0.5",
          width: "75",
          height: "19",
          stroke: "#727C86"
        }), (0, _v1.jsx)("path", {
          d: "M48.546 13.1704H48.5673L51.1545 6.26065H51.8146L48.8867 13.937H48.1947L45.2881 6.26065H45.9589L48.546 13.1704ZM53.4223 6.71846C53.4223 6.46294 53.2093 6.27129 52.9751 6.27129C52.7622 6.27129 52.5386 6.45229 52.5386 6.71846C52.5386 6.98463 52.7515 7.16562 52.9751 7.16562C53.2093 7.15497 53.4223 6.97398 53.4223 6.71846ZM53.2839 8.62423H52.6876V13.937H53.2839V8.62423ZM57.9045 9.48662C57.5851 8.93298 56.9463 8.63488 56.2117 8.63488C55.3387 8.63488 54.4976 9.07139 54.4976 10.0402C54.4976 11.9141 57.4254 11.0836 57.4254 12.4571C57.4254 13.1597 56.8079 13.4472 56.1798 13.4472C55.5623 13.4472 55.0193 13.1172 54.7318 12.67L54.2634 13.0107C54.6999 13.6495 55.4239 13.9476 56.1798 13.9476C57.0954 13.9476 58.0004 13.4898 58.0004 12.4251C58.0004 11.6053 57.3829 11.2114 56.3182 10.9772C55.4877 10.7962 55.0512 10.5939 55.0512 10.019C55.0512 9.3908 55.6581 9.14592 56.1904 9.14592C56.7547 9.14592 57.2019 9.41209 57.4574 9.83796L57.9045 9.48662ZM59.8955 6.70781C59.8955 6.45229 59.6826 6.26065 59.4483 6.26065C59.2354 6.26065 59.0118 6.44164 59.0118 6.70781C59.0118 6.97398 59.2247 7.15497 59.4483 7.15497C59.6719 7.14433 59.8955 6.96333 59.8955 6.70781ZM59.7677 8.62423H59.1396V13.9263H59.7677V8.62423ZM66.0387 11.2753C66.0387 9.74214 64.9527 8.62423 63.377 8.62423C61.8226 8.62423 60.7259 9.73149 60.7259 11.2753C60.7259 12.7978 61.8119 13.937 63.377 13.937C64.9421 13.937 66.0387 12.7978 66.0387 11.2753ZM65.4318 11.2753C65.4318 12.4784 64.6439 13.4046 63.377 13.4046C62.1207 13.4046 61.3328 12.4784 61.3328 11.2753C61.3328 10.0722 62.1207 9.13527 63.377 9.13527C64.6439 9.13527 65.4318 10.0828 65.4318 11.2753ZM67.0182 8.62423C67.0501 8.96492 67.0608 9.63567 67.0608 9.91249V13.9263H67.657V11.2327C67.657 9.82731 68.4448 9.12463 69.3285 9.12463C70.4358 9.12463 70.7552 9.94443 70.7552 10.9452V13.937H71.3408V10.7323C71.3408 9.53985 70.7765 8.63488 69.4563 8.63488C68.7004 8.63488 67.9444 9.08204 67.6463 9.77408H67.625C67.625 9.50791 67.6037 8.92234 67.5824 8.63488H67.0182V8.62423ZM4 13.9263H5.12856C7.23661 13.9263 8.96139 12.2015 8.96139 10.0935C8.96139 7.98542 7.24726 6.26065 5.12856 6.26065H4V13.9263ZM14.9023 6.26065H13.7737C11.6657 6.26065 9.94089 7.98542 9.94089 10.0935C9.94089 12.2015 11.6657 13.9263 13.7737 13.9263H14.9023V6.26065ZM23.8243 10.0935C23.8243 12.2122 22.1101 13.9263 19.9914 13.9263H17.2233V6.26065H19.9914C22.1101 6.26065 23.8243 7.97478 23.8243 10.0935ZM22.6638 10.0935C22.6638 8.62423 21.4607 7.42114 19.9914 7.42114H18.3838V12.7658H19.9914C21.4607 12.7658 22.6638 11.5627 22.6638 10.0935ZM29.7332 11.2753C29.7332 12.7445 28.5408 13.9263 27.0822 13.9263C25.6236 13.9263 24.4311 12.7339 24.4311 11.2753C24.4311 9.81667 25.6236 8.62423 27.0822 8.62423C28.5408 8.62423 29.7332 9.80602 29.7332 11.2753ZM28.6685 11.2646C28.6685 10.3809 27.9446 9.66761 27.0715 9.66761C26.1985 9.66761 25.4745 10.3809 25.4745 11.2646C25.4745 12.1483 26.1878 12.8616 27.0715 12.8616C27.9552 12.8723 28.6685 12.159 28.6685 11.2646ZM30.4785 13.937H31.639V6.26065H30.4785V13.937ZM37.9525 11.2753C37.9525 12.7445 36.7601 13.9263 35.3015 13.9263C34.7372 13.9263 34.2155 13.7453 33.779 13.4472V13.9263H32.6185V6.25H33.779V9.09269C34.2049 8.79458 34.7372 8.61358 35.3015 8.61358C36.7707 8.62423 37.9525 9.81667 37.9525 11.2753ZM36.8985 11.2646C36.8985 10.3809 36.1745 9.66761 35.3015 9.66761C34.5988 9.66761 33.9919 10.1254 33.779 10.7642C33.7258 10.9239 33.6938 11.0943 33.6938 11.2646C33.6938 11.4456 33.7258 11.6053 33.779 11.765C33.9919 12.4038 34.5881 12.8616 35.3015 12.8616C36.1852 12.8723 36.8985 12.159 36.8985 11.2646ZM42.2112 8.62423L40.6994 12.0312L39.1875 8.62423H37.9206L40.0712 13.4579L39.5495 14.6396C39.4111 14.9484 39.0385 15.0975 38.7297 14.9591L38.5594 14.8845L38.0909 15.9386L38.4955 16.1195C39.2514 16.4602 40.1457 16.1089 40.4758 15.353C40.4758 15.3423 43.2227 9.2098 43.4888 8.62423H42.2112Z",
          fill: "#727C86"
        })]
      })
    });
  }
  _v0.s(["VideoBadges", 0, ({
    isStreaming: _v0,
    isRatedMature: _v1,
    is360Video: _v2,
    isDolbyVision: _v3,
    isHdr10: _v4,
    isHdr10Plus: _v5,
    aiContent: _v6,
    isAdvert: _v7
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [_v0 ? (0, _v1.jsx)(_v2.Badge, {
      variant: "mature",
      size: "sm",
      children: (0, _v3.translate)({
        singular: "LIVE",
        dictionary: {
          es: {
            singular: "En directo"
          },
          "fr-FR": {
            singular: "DIRECT"
          },
          "pt-BR": {
            singular: "AO VIVO"
          },
          "zh-CN": {
            singular: "直播"
          }
        }
      })
    }) : null, _v1 ? (0, _v1.jsx)(_v2.Badge, {
      variant: "mature",
      size: "sm",
      children: (0, _v3.translate)({
        singular: "Mature",
        dictionary: {
          es: {
            singular: "Para adultos"
          },
          "de-DE": {
            singular: "Nicht jugendfrei"
          },
          "fr-FR": {
            singular: "Adulte"
          },
          "ja-JP": {
            singular: "成人向け"
          },
          "ko-KR": {
            singular: "성인"
          },
          "pt-BR": {
            singular: "Adulto"
          },
          "zh-CN": {
            singular: "成人"
          }
        }
      })
    }) : null, _v2 ? (0, _v1.jsx)(_v2.Badge, {
      variant: "not-yet-rated",
      size: "sm",
      color: "text-secondary",
      borderColor: "text-secondary",
      children: "360"
    }) : null, _v3 ? (0, _v1.jsx)(_v14, {}) : null, _v4 ? (0, _v1.jsx)(_v2.Badge, {
      variant: "not-yet-rated",
      size: "sm",
      color: "text-secondary",
      borderColor: "text-secondary",
      children: "HDR 10"
    }) : null, _v5 ? (0, _v1.jsx)(_v2.Badge, {
      variant: "not-yet-rated",
      size: "sm",
      color: "text-secondary",
      borderColor: "text-secondary",
      children: "HDR 10+"
    }) : null, _v6 ? (0, _v1.jsx)(_v12, {
      aiContent: _v6
    }) : null, _v7 ? (0, _v1.jsx)(_v10, {}) : null]
  })], 0);
}