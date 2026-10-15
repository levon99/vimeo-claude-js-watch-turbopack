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
    _v13 = _v0.i(0);
  let _v14 = ["agenticSearchTrialExpiresOn"],
    _v15 = (0, _v2.createContext)(!1),
    _v16 = (0, _v2.createContext)(null);
  _v0.s(["SmartSearchAnnouncement", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v9.useOrionLoading)(),
      _v2 = (0, _v10.useOrionSetting)("enable_smart_search_intro_announcement"),
      {
        acknowledge: _v3,
        isActive: _v4
      } = (0, _v3.useAnnouncement)({
        id: "smart_search_intro",
        isEligible: !_v1 && _v2
      }),
      _v5 = function () {
        let _v0 = (0, _v2.useContext)(_v13.ViewerContext),
          _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
          {
            data: _v2
          } = (0, _v12.useGetUser)(() => _v1 ? {
            where: {
              userId: _v1
            },
            select: _v14
          } : null);
        return _v2?.agenticSearchTrialExpiresOn ?? void 0;
      }(),
      _v6 = (0, _v11.useViewer)(),
      _v7 = (0, _v2.useRef)(null),
      _v8 = (0, _v7.useBreakpointValue)({
        base: "bottom-end",
        lg: "bottom-start"
      }),
      _v9 = (0, _v2.useCallback)(() => {
        _v3(), _v7.current?.();
      }, [_v3]);
    return (0, _v1.jsx)(_v16.Provider, {
      value: _v7,
      children: (0, _v1.jsx)(_v15.Provider, {
        value: !0,
        children: (0, _v1.jsx)(_v4.AnnouncementPopover, {
          isOpen: _v4,
          trackingId: "smart_search",
          anchorWithinChildren: !0,
          onAcknowledge: _v9,
          onClose: _v3,
          showCloseButton: !0,
          placement: _v8,
          acknowledgeLabel: (0, _v8.translate)({
            singular: "Try new smart search",
            dictionary: {
              es: {
                singular: "Prueba la nueva búsqueda inteligente"
              },
              "de-DE": {
                singular: "Probieren Sie die neue intelligente Suche aus"
              },
              "fr-FR": {
                singular: "Essayez la nouvelle recherche intelligente"
              },
              "ja-JP": {
                singular: "新しいスマート検索を試す"
              },
              "ko-KR": {
                singular: "새로운 스마트 검색 사용해 보기"
              },
              "pt-BR": {
                singular: "Experimente a nova busca inteligente"
              },
              "zh-CN": {
                singular: "试用全新智能搜索"
              }
            }
          }),
          badge: (0, _v1.jsx)(_v5.Badge, {
            variant: "new",
            size: "sm",
            children: (0, _v1.jsx)(_v6.Text, {
              color: "text-primary",
              variant: "heading-2xs",
              children: (0, _v8.translate)({
                singular: "New",
                dictionary: {
                  es: {
                    singular: "Nuevo"
                  },
                  "de-DE": {
                    singular: "Neu"
                  },
                  "fr-FR": {
                    singular: "Nouveau"
                  },
                  "ja-JP": {
                    singular: "新規作成"
                  },
                  "ko-KR": {
                    singular: "신규"
                  },
                  "pt-BR": {
                    singular: "Novo"
                  },
                  "zh-CN": {
                    singular: "新"
                  }
                }
              })
            })
          }),
          title: (0, _v8.translate)({
            singular: "Find any video or moment with the new smart search",
            dictionary: {
              es: {
                singular: "Encuentra cualquier vídeo o momento con la nueva búsqueda inteligente"
              },
              "de-DE": {
                singular: "Finden Sie jedes Video oder jeden Moment mit der neuen intelligenten Suche"
              },
              "fr-FR": {
                singular: "Trouvez n'importe quelle vidéo ou moment grâce à la nouvelle recherche intelligente"
              },
              "ja-JP": {
                singular: "新しいスマート検索で、あらゆる動画や瞬間を見つける"
              },
              "ko-KR": {
                singular: "새로운 스마트 검색으로 원하는 비디오나 장면을 찾아보세요"
              },
              "pt-BR": {
                singular: "Encontre qualquer vídeo ou momento com a nova busca inteligente"
              },
              "zh-CN": {
                singular: "使用全新智能搜索查找任何视频或片段"
              }
            }
          }),
          body: (0, _v8.translate)({
            singular: "The new smart search analyzes visuals, transcripts, titles, and details to take you straight to the exact moment you're looking for.",
            dictionary: {
              es: {
                singular: "La nueva búsqueda inteligente analiza imágenes, transcripciones, títulos y detalles para llevarte directamente al momento exacto que estás buscando."
              },
              "de-DE": {
                singular: "Die neue intelligente Suche analysiert visuelle Inhalte, Transkripte, Titel und Details, um Sie direkt zum genauen Moment zu führen, den Sie suchen."
              },
              "fr-FR": {
                singular: "La nouvelle recherche intelligente analyse les éléments visuels, les transcriptions, les titres et les détails pour vous amener directement au moment exact que vous recherchez."
              },
              "ja-JP": {
                singular: "新しいスマート検索は映像、トランスクリプト、タイトル、詳細を解析し、探している正確な瞬間へ直接案内します。"
              },
              "ko-KR": {
                singular: "새로운 스마트 검색은 시각적 요소, 전사, 제목 및 세부 정보를 분석하여 찾고자 하는 정확한 순간으로 바로 안내합니다."
              },
              "pt-BR": {
                singular: "A nova busca inteligente analisa visuais, transcrições, títulos e detalhes para levá-lo diretamente ao momento exato que você procura."
              },
              "zh-CN": {
                singular: "全新的智能搜索会分析视频画面、转录文本、标题和详细信息，直接带您定位到所需的确切时刻。"
              }
            }
          }),
          note: _v5 ? (0, _v8.translate)({
            singular: "Complimentary access until {DATE}",
            replacements: {
              DATE: ((_v0, _v1 = "en-US") => {
                let _v2 = _v0.split("-"),
                  _v3 = Number(_v2[0]),
                  _v4 = Number(_v2[1]) - 1,
                  _v5 = Number(_v2[2]);
                if (Number.isNaN(_v3) || Number.isNaN(_v4) || Number.isNaN(_v5)) return _v0;
                let _v6 = new Date(_v3, _v4, _v5);
                if (_v1.toLowerCase().startsWith("en")) {
                  let _v0 = _v6.toLocaleDateString(_v1, {
                    month: "long"
                  });
                  return `${(_v0 => {
                    let _v1 = _v0 % 100;
                    if (_v1 >= 11 && _v1 <= 13) return `${_v0}th`;
                    switch (_v0 % 10) {
                      case 1:
                        return `${_v0}st`;
                      case 2:
                        return `${_v0}nd`;
                      case 3:
                        return `${_v0}rd`;
                      default:
                        return `${_v0}th`;
                    }
                  })(_v5)} ${_v0} ${_v3}`;
                }
                return new Intl.DateTimeFormat(_v1, {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }).format(_v6);
              })(_v5, _v6?.locale)
            },
            dictionary: {
              es: {
                singular: "Acceso de cortesía hasta {DATE}"
              },
              "de-DE": {
                singular: "Kostenfreier Zugang bis {DATE}"
              },
              "fr-FR": {
                singular: "Accès gratuit jusqu'au {DATE}"
              },
              "ja-JP": {
                singular: "無料でご利用いただけます {DATE}まで"
              },
              "ko-KR": {
                singular: "무료 이용 가능: {DATE}까지"
              },
              "pt-BR": {
                singular: "Acesso gratuito até {DATE}"
              },
              "zh-CN": {
                singular: "免费访问至 {DATE}"
              }
            }
          }) : void 0,
          children: _v0
        })
      })
    });
  }, "SmartSearchAnnouncementAnchorContext", 0, _v15, "SmartSearchAnnouncementOpenContext", 0, _v16], 0);
}