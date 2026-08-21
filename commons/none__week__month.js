{
  "use strict";

  _v0.i(0);
  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.i(0);
  var _v13 = _v0.i(0),
    _v14 = ((_v1 = {}).NONE = "none", _v1.DAY = "day", _v1.WEEK = "week", _v1.MONTH = "month", _v1.YEAR = "year", _v1),
    _v15 = ((_v2 = {}).DATE = "date", _v2.VIDEO = "video", _v2.REGION = "region", _v2.SOURCE_URL = "source_url", _v2.DEVICE = "device", _v2.BANDWIDTH = "bandwidth", _v2.STREAMING_TYPE = "streaming_type", _v2.BANDWIDTH_VIDEO = "bandwidth_video", _v2.TEXT_TRACK = "text_track", _v2.AUDIO_TRACK = "audio_track", _v2),
    _v16 = ((_v3 = {})[_v3.INTIAL_DATA = 0] = "INTIAL_DATA", _v3[_v3.SET_FILTER_LIST = 1] = "SET_FILTER_LIST", _v3[_v3.UPDATE_FILTERS = 2] = "UPDATE_FILTERS", _v3[_v3.RESET_FILTERS = 3] = "RESET_FILTERS", _v3[_v3.SET_GRAPH_ITEMS = 4] = "SET_GRAPH_ITEMS", _v3[_v3.UPDATE_DATE_RANGE = 5] = "UPDATE_DATE_RANGE", _v3[_v3.SET_PRIMARY_DIMENSION = 6] = "SET_PRIMARY_DIMENSION", _v3[_v3.ERROR_STATE_UPDATE = 7] = "ERROR_STATE_UPDATE", _v3[_v3.UPDATE_LOADING_STATE = 8] = "UPDATE_LOADING_STATE", _v3[_v3.UPDATE_USER_IN_USE = 9] = "UPDATE_USER_IN_USE", _v3[_v3.SET_AGGREGATE_INTERVAL = 10] = "SET_AGGREGATE_INTERVAL", _v3[_v3.SET_USER_PREFERENCES = 11] = "SET_USER_PREFERENCES", _v3[_v3.SET_REPORT_TYPE = 12] = "SET_REPORT_TYPE", _v3),
    _v17 = ((_v4 = {}).DASHBOARD = "dashboard", _v4.VIDEO = "video", _v4.ENGAGEMENT = "engagement", _v4.REGION = "region", _v4.SOURCE = "source", _v4.DEVICE = "device", _v4.DATE = "date", _v4.BANDWIDTH_DATE = "bandwidth_date", _v4.STREAMING_TYPE = "streaming_type", _v4.BANDWIDTH_VIDEO = "bandwidth_video", _v4.SINGLE_VIDEO = "single_video", _v4.TEAM = "team", _v4.VIDEO_RATING = "video_rating", _v4),
    _v18 = ((_v5 = {}).DATE = "date", _v5.SOURCE_URL = "embed_domains", _v5.DEVICE = "device", _v5.REGION = "region", _v5.STREAMING_TYPE = "streaming_type", _v5.CONTENT = "content", _v5.MEMBER = "member", _v5.AUDIO_LANGUAGE = "audio_language", _v5.AUDIO_TYPE_AND_PROVENANCE = "audio_type_and_provenance", _v5.TEXT_LANGUAGE = "text_language", _v5.TEXT_TYPE_AND_PROVENANCE = "text_type_and_provenance", _v5.WORKSPACES = "workspaces", _v5.CUSTOM_METADATA = "custom_metadata", _v5),
    _v19 = ((_v6 = {}).VIMEO = "vimeo", _v6.BANDWIDTH = "bandwidth", _v6);
  _v0.s(["AggregateIntervalType", () => _v14, "Filters", () => _v18, "REPORT_ACTION_TYPE", () => _v16, "ReportGroup", () => _v19, "Reports", () => _v17, "TablePayloadItemType", () => _v15], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = (0, _v13.translate)({
      singular: "View by date",
      dictionary: {
        es: {
          singular: "Ver por fecha"
        },
        "de-DE": {
          singular: "Nach Datum anzeigen"
        },
        "fr-FR": {
          singular: "Afficher par date"
        },
        "ja-JP": {
          singular: "日付順に表示"
        },
        "ko-KR": {
          singular: "날짜별로 보기"
        },
        "pt-BR": {
          singular: "Ver por data"
        },
        "zh-CN": {
          singular: "按日期查看"
        }
      }
    }),
    _v25 = (0, _v13.translate)({
      singular: "View by video",
      dictionary: {
        es: {
          singular: "Ver por video"
        },
        "de-DE": {
          singular: "Nach Video anzeigen"
        },
        "fr-FR": {
          singular: "Afficher par vidéo"
        },
        "ja-JP": {
          singular: "動画順に表示"
        },
        "ko-KR": {
          singular: "동영상별로 보기"
        },
        "pt-BR": {
          singular: "Ver por vídeo"
        },
        "zh-CN": {
          singular: "通过视频查看"
        }
      }
    }),
    _v26 = (0, _v13.translate)({
      singular: "Avg. percent watched",
      dictionary: {
        es: {
          singular: "Porcentaje promedio visto"
        },
        "de-DE": {
          singular: "Prozent angeschaut (Durchschnitt)"
        },
        "fr-FR": {
          singular: "Pourcentage moyen de lecture"
        },
        "ja-JP": {
          singular: "平均視聴率"
        },
        "ko-KR": {
          singular: "평균 시청 시간"
        },
        "pt-BR": {
          singular: "Média de porcentagem assistida"
        },
        "zh-CN": {
          singular: "平均观看百分比"
        }
      }
    }),
    _v27 = (0, _v13.translate)({
      singular: "How much of a video team members watch per view, on average",
      dictionary: {
        es: {
          singular: "Cuántos minutos de video ven los miembros del equipo por vista en promedio"
        },
        "de-DE": {
          singular: "Wie viel Teammitglieder im Durchschnitt pro Ansicht eines Videos anschauen"
        },
        "fr-FR": {
          singular: "Durée moyenne de visionnage d'une vidéo par les collaborateurs"
        },
        "ja-JP": {
          singular: "1回の視聴でチームメンバーが動画をどれくらい視聴しているか（平均）"
        },
        "ko-KR": {
          singular: "팀원들이 조회당 평균적으로 시청한 동영상의 양"
        },
        "pt-BR": {
          singular: "Quanto tempo do vídeo integrantes de equipes assistem por visualização, em média"
        },
        "zh-CN": {
          singular: "团队成员平均每次观看的视频进度"
        }
      }
    }),
    _v28 = (0, _v13.translate)({
      singular: "How much of a video this team member watches per view, on average",
      dictionary: {
        es: {
          singular: "Cuántos minutos de video ve este miembro del equipo por vista en promedio"
        },
        "de-DE": {
          singular: "Wie viel dieses Teammitglied im Durchschnitt pro Ansicht eines Videos anschaut"
        },
        "fr-FR": {
          singular: "Durée moyenne de visionnage d'une vidéo par ce collaborateur"
        },
        "ja-JP": {
          singular: "1回の視聴でこのチームメンバーが動画をどれくらい視聴しているか（平均）"
        },
        "ko-KR": {
          singular: "이 팀원이 조회당 평균적으로 시청한 동영상의 양"
        },
        "pt-BR": {
          singular: "Quanto tempo do vídeo este integrante de equipe assiste por visualização, em média"
        },
        "zh-CN": {
          singular: "此团队成员平均每次观看的视频进度"
        }
      }
    }),
    _v29 = (0, _v13.translate)({
      singular: "How much of this video team members watch per view, on average",
      dictionary: {
        es: {
          singular: "Cuántos minutos de este video ven los miembros del equipo por vista en promedio"
        },
        "de-DE": {
          singular: "Wie viel von diesem Video Teammitglieder im Durchschnitt pro Ansicht anschauen"
        },
        "fr-FR": {
          singular: "Durée moyenne de visionnage de cette vidéo par les collaborateurs"
        },
        "ja-JP": {
          singular: "1回の視聴でチームメンバーがこの動画をどれくらい視聴しているか（平均）"
        },
        "ko-KR": {
          singular: "팀원들이 조회당 이 동영상을 평균적으로 시청한 양"
        },
        "pt-BR": {
          singular: "Quanto tempo deste vídeo integrantes de equipes assistem por visualização, em média"
        },
        "zh-CN": {
          singular: "团队成员平均每次观看此视频的进度"
        }
      }
    });
  (0, _v13.translate)({
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
  }), (0, _v13.translate)({
    singular: "Download CSV",
    dictionary: {
      es: {
        singular: "Descargar archivo CSV"
      },
      "de-DE": {
        singular: "CSV herunterladen"
      },
      "fr-FR": {
        singular: "Télécharger le fichier CSV"
      },
      "ja-JP": {
        singular: "CSVをダウンロード"
      },
      "ko-KR": {
        singular: "CSV 다운로드"
      },
      "pt-BR": {
        singular: "Baixar CSV"
      },
      "zh-CN": {
        singular: "下载 CSV"
      }
    }
  }), (0, _v13.translate)({
    singular: "Members",
    dictionary: {
      es: {
        singular: "Miembros"
      },
      "de-DE": {
        singular: "Mitglieder"
      },
      "fr-FR": {
        singular: "Membres"
      },
      "ja-JP": {
        singular: "メンバー"
      },
      "ko-KR": {
        singular: "멤버"
      },
      "pt-BR": {
        singular: "Membros"
      },
      "zh-CN": {
        singular: "成员"
      }
    }
  });
  let _v30 = (0, _v13.translate)({
      singular: "Team members",
      dictionary: {
        es: {
          singular: "Miembros del equipo"
        },
        "de-DE": {
          singular: "Teammitglieder"
        },
        "fr-FR": {
          singular: "Membres de l'équipe"
        },
        "ja-JP": {
          singular: "チームメンバー"
        },
        "ko-KR": {
          singular: "팀 구성원"
        },
        "pt-BR": {
          singular: "Membros da equipe"
        },
        "zh-CN": {
          singular: "团队成员"
        }
      }
    }),
    _v31 = (0, _v13.translate)({
      singular: "Name",
      dictionary: {
        es: {
          singular: "Nombre"
        },
        "fr-FR": {
          singular: "Nom"
        },
        "ja-JP": {
          singular: "名前"
        },
        "ko-KR": {
          singular: "이름"
        },
        "pt-BR": {
          singular: "Nome"
        },
        "zh-CN": {
          singular: "姓名"
        }
      }
    });
  (0, _v13.translate)({
    singular: "Team views",
    dictionary: {
      es: {
        singular: "Vistas del equipo"
      },
      "de-DE": {
        singular: "Aufrufe des Teams"
      },
      "fr-FR": {
        singular: "Visionnage de l'équipe"
      },
      "ja-JP": {
        singular: "チームの視聴数"
      },
      "ko-KR": {
        singular: "팀 조회수"
      },
      "pt-BR": {
        singular: "Visualizações da equipe"
      },
      "zh-CN": {
        singular: "团队观看量"
      }
    }
  });
  let _v32 = (0, _v13.translate)({
      singular: "Total",
      dictionary: {
        "de-DE": {
          singular: "Insgesamt"
        },
        "ja-JP": {
          singular: "合計"
        },
        "ko-KR": {
          singular: "총계"
        },
        "zh-CN": {
          singular: "总计"
        }
      }
    }),
    _v33 = (0, _v13.translate)({
      singular: "Total views",
      dictionary: {
        es: {
          singular: "Vistas totales"
        },
        "de-DE": {
          singular: "Gesamtaufrufe"
        },
        "fr-FR": {
          singular: "Total des vues"
        },
        "ja-JP": {
          singular: "総再生回数"
        },
        "ko-KR": {
          singular: "총 조회수"
        },
        "pt-BR": {
          singular: "Total de visualizações"
        },
        "zh-CN": {
          singular: "总观看次数"
        }
      }
    }),
    _v34 = (0, _v13.translate)({
      singular: "Number of times team members played videos in the Library",
      dictionary: {
        es: {
          singular: "Cantidad de veces que los miembros del equipo han reproducido videos en la Biblioteca"
        },
        "de-DE": {
          singular: "Wie oft Teammitglieder Videos in der Bibliothek abgespielt haben"
        },
        "fr-FR": {
          singular: "Nombre de fois où les membres de l'équipe ont visionné des vidéos dans la bibliothèque"
        },
        "ja-JP": {
          singular: "チームメンバーがライブラリ内の動画を再生した回数"
        },
        "ko-KR": {
          singular: "팀원이 라이브러리에서 동영상을 재생한 횟수"
        },
        "pt-BR": {
          singular: "Número de vezes que os integrantes da equipe reproduziram vídeos na Biblioteca"
        },
        "zh-CN": {
          singular: "团队成员在视频库中播放视频的次数"
        }
      }
    }),
    _v35 = (0, _v13.translate)({
      singular: "Number of times team members played this video",
      dictionary: {
        es: {
          singular: "Cantidad de veces que los miembros del equipo han reproducido este video"
        },
        "de-DE": {
          singular: "Wie oft Teammitglieder dieses Video abgespielt haben"
        },
        "fr-FR": {
          singular: "Nombre de fois où les collaborateurs ont visionné cette vidéo"
        },
        "ja-JP": {
          singular: "チームメンバーがこの動画を再生した回数"
        },
        "ko-KR": {
          singular: "팀원이 이 동영상을 재생한 횟수"
        },
        "pt-BR": {
          singular: "Número de vezes que os integrantes da equipe assistiram a este vídeo"
        },
        "zh-CN": {
          singular: "团队成员播放此视频的次数"
        }
      }
    }),
    _v36 = (0, _v13.translate)({
      singular: "Number of times this team member has played videos in the Library",
      dictionary: {
        es: {
          singular: "Cantidad de veces que este miembro del equipo ha reproducido videos en la Biblioteca"
        },
        "de-DE": {
          singular: "Wie oft dieses Teammitglied Videos in der Bibliothek abgespielt hat"
        },
        "fr-FR": {
          singular: "Nombre de fois où ce collaborateur a lu des vidéos dans la bibliothèque"
        },
        "ja-JP": {
          singular: "このチームメンバーがライブラリ内の動画を再生した回数"
        },
        "ko-KR": {
          singular: "이 팀원이 라이브러리에서 동영상을 재생한 횟수"
        },
        "pt-BR": {
          singular: "Número de vezes que este integrante da equipe reproduziu vídeos na Biblioteca"
        },
        "zh-CN": {
          singular: "此团队成员在视频库中播放视频的次数"
        }
      }
    }),
    _v37 = (0, _v13.translate)({
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
    }),
    _v38 = (0, _v13.translate)({
      singular: "View breakdown by",
      dictionary: {
        es: {
          singular: "Ver desglose por"
        },
        "de-DE": {
          singular: "Aufgliederung anzeigen nach"
        },
        "fr-FR": {
          singular: "Voir la répartition par"
        },
        "ja-JP": {
          singular: "内訳を表示："
        },
        "ko-KR": {
          singular: "기준별 상세 분류 보기"
        },
        "pt-BR": {
          singular: "Ver detalhamento por"
        },
        "zh-CN": {
          singular: "查看分类统计"
        }
      }
    }),
    _v39 = (0, _v13.translate)({
      singular: "Views",
      dictionary: {
        es: {
          singular: "Vistas"
        },
        "de-DE": {
          singular: "Ansichten"
        },
        "fr-FR": {
          singular: "Vues"
        },
        "ja-JP": {
          singular: "視聴数"
        },
        "ko-KR": {
          singular: "조회 수"
        },
        "pt-BR": {
          singular: "Visualizações"
        },
        "zh-CN": {
          singular: "观看量"
        }
      }
    }),
    _v40 = (0, _v13.translate)({
      singular: "Number of times videos were played",
      dictionary: {
        es: {
          singular: "Cantidad de veces que se reprodujeron los videos"
        },
        "de-DE": {
          singular: "Wie oft Videos abgespielt wurden"
        },
        "fr-FR": {
          singular: "Nombre de fois que les vidéos ont été lues"
        },
        "ja-JP": {
          singular: "動画が再生された回数"
        },
        "ko-KR": {
          singular: "동영상이 재생된 횟수"
        },
        "pt-BR": {
          singular: "Número de vezes que os vídeos foram reproduzidos"
        },
        "zh-CN": {
          singular: "视频播放次数"
        }
      }
    });
  (0, _v13.translate)({
    singular: "Number of times team members played this video",
    dictionary: {
      es: {
        singular: "Cantidad de veces que los miembros del equipo han reproducido este video"
      },
      "de-DE": {
        singular: "Wie oft Teammitglieder dieses Video abgespielt haben"
      },
      "fr-FR": {
        singular: "Nombre de fois où les collaborateurs ont visionné cette vidéo"
      },
      "ja-JP": {
        singular: "チームメンバーがこの動画を再生した回数"
      },
      "ko-KR": {
        singular: "팀원이 이 동영상을 재생한 횟수"
      },
      "pt-BR": {
        singular: "Número de vezes que os integrantes da equipe assistiram a este vídeo"
      },
      "zh-CN": {
        singular: "团队成员播放此视频的次数"
      }
    }
  });
  let _v41 = (0, _v13.translate)({
      singular: "Viewers",
      dictionary: {
        es: {
          singular: "Espectadores"
        },
        "de-DE": {
          singular: "Zuschauer"
        },
        "fr-FR": {
          singular: "Spectateurs"
        },
        "ja-JP": {
          singular: "視聴者"
        },
        "ko-KR": {
          singular: "뷰어"
        },
        "pt-BR": {
          singular: "Espectadores"
        },
        "zh-CN": {
          singular: "观众"
        }
      }
    }),
    _v42 = (0, _v13.translate)({
      singular: "Number of viewers who viewed videos",
      dictionary: {
        es: {
          singular: "Cantidad de espectadores que vieron los videos"
        },
        "de-DE": {
          singular: "Anzahl der Zuschauenden, die Videos angesehen haben"
        },
        "fr-FR": {
          singular: "Nombre de spectateurs ayant regardé les vidéos"
        },
        "ja-JP": {
          singular: "動画の視聴者数"
        },
        "ko-KR": {
          singular: "동영상을 조회한 뷰어 수"
        },
        "pt-BR": {
          singular: "Número de espectadores que visualizaram vídeos"
        },
        "zh-CN": {
          singular: "观看视频的观众人数"
        }
      }
    }),
    _v43 = (0, _v13.translate)({
      singular: "Number of team members that viewed this video",
      dictionary: {
        es: {
          singular: "Cantidad de miembros del equipo que han visto este video"
        },
        "de-DE": {
          singular: "Anzahl der Teammitglieder, die dieses Video angesehen haben"
        },
        "fr-FR": {
          singular: "Nombre de collaborateurs qui ont visionné cette vidéo"
        },
        "ja-JP": {
          singular: "この動画を視聴したチームメンバー数"
        },
        "ko-KR": {
          singular: "이 동영상을 조회한 팀원의 수"
        },
        "pt-BR": {
          singular: "Número de integrantes da equipe que assistiram a este vídeo"
        },
        "zh-CN": {
          singular: "观看过此视频的团队成员人数"
        }
      }
    });
  (0, _v13.translate)({
    singular: "Viewers on team",
    dictionary: {
      es: {
        singular: "Espectadores en el equipo"
      },
      "de-DE": {
        singular: "Zuschauende im Team"
      },
      "fr-FR": {
        singular: "Spectateurs de l'équipe"
      },
      "ja-JP": {
        singular: "チーム内の視聴者"
      },
      "ko-KR": {
        singular: "팀 뷰어"
      },
      "pt-BR": {
        singular: "Espectadores da equipe"
      },
      "zh-CN": {
        singular: "团队中的观众"
      }
    }
  });
  let _v44 = (0, _v13.translate)({
      singular: "Number of videos with at least one view",
      dictionary: {
        es: {
          singular: "Cantidad de videos con al menos una visualización"
        },
        "de-DE": {
          singular: "Anzahl der Videos mit mindestens einem Aufruf"
        },
        "fr-FR": {
          singular: "Nombre de vidéos avec au moins une vue"
        },
        "ja-JP": {
          singular: "1回以上視聴された動画の数"
        },
        "ko-KR": {
          singular: "조회수가 1회 이상인 동영상 개수"
        },
        "pt-BR": {
          singular: "Número de vídeos com pelo menos uma visualização"
        },
        "zh-CN": {
          singular: "至少观看过一次的视频数量"
        }
      }
    }),
    _v45 = (0, _v13.translate)({
      singular: "Videos viewed",
      dictionary: {
        es: {
          singular: "Videos vistos"
        },
        "de-DE": {
          singular: "Angesehene Videos"
        },
        "fr-FR": {
          singular: "Vidéos visionnées"
        },
        "ja-JP": {
          singular: "視聴した動画"
        },
        "ko-KR": {
          singular: "조회 동영상"
        },
        "pt-BR": {
          singular: "Vídeos visualizados"
        },
        "zh-CN": {
          singular: "已观看视频"
        }
      }
    }),
    _v46 = (0, _v13.translate)({
      singular: "Number of videos with at least one view",
      dictionary: {
        es: {
          singular: "Cantidad de videos con al menos una visualización"
        },
        "de-DE": {
          singular: "Anzahl der Videos mit mindestens einem Aufruf"
        },
        "fr-FR": {
          singular: "Nombre de vidéos avec au moins une vue"
        },
        "ja-JP": {
          singular: "1回以上視聴された動画の数"
        },
        "ko-KR": {
          singular: "조회수가 1회 이상인 동영상 개수"
        },
        "pt-BR": {
          singular: "Número de vídeos com pelo menos uma visualização"
        },
        "zh-CN": {
          singular: "至少观看过一次的视频数量"
        }
      }
    });
  (0, _v13.translate)({
    singular: "Last updated",
    dictionary: {
      es: {
        singular: "Fecha de la última actualización"
      },
      "de-DE": {
        singular: "Letztes Update"
      },
      "fr-FR": {
        singular: "Dernière mise à jour"
      },
      "ja-JP": {
        singular: "最終更新"
      },
      "ko-KR": {
        singular: "마지막 업데이트"
      },
      "pt-BR": {
        singular: "Última atualização"
      },
      "zh-CN": {
        singular: "最后更新"
      }
    }
  });
  let _v47 = (0, _v13.translate)({
      singular: "Upgrade for access to all analytics reports",
      dictionary: {
        es: {
          singular: "Actualización para acceder a todos los informes de análisis"
        },
        "de-DE": {
          singular: "Upgrade für den Zugang zu allen Analytik-Berichten"
        },
        "fr-FR": {
          singular: "Passez au niveau supérieur pour accéder à tous les rapports d'analyse"
        },
        "ja-JP": {
          singular: "すべての分析レポートにアクセスするにはアップグレードしてください"
        },
        "ko-KR": {
          singular: "업그레이드하여 모든 분석 보고서에 액세스하세요"
        },
        "pt-BR": {
          singular: "Atualize para ter acesso a todos os relatórios de análises"
        },
        "zh-CN": {
          singular: "升级后可访问所有分析报告"
        }
      }
    }),
    _v48 = (0, _v13.translate)({
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
    });
  (0, _v13.translate)({
    singular: "REPORTS",
    dictionary: {
      es: {
        singular: "INFORMES"
      },
      "de-DE": {
        singular: "BERICHTE"
      },
      "fr-FR": {
        singular: "RAPPORTS"
      },
      "ja-JP": {
        singular: "レポート"
      },
      "ko-KR": {
        singular: "리포트"
      },
      "pt-BR": {
        singular: "RELATÓRIOS"
      },
      "zh-CN": {
        singular: "报告"
      }
    }
  });
  let _v49 = {
      header: (0, _v13.translate)({
        singular: "Export report CSV",
        dictionary: {
          es: {
            singular: "Exportar informe a CSV"
          },
          "de-DE": {
            singular: "Bericht als CSV exportieren."
          },
          "fr-FR": {
            singular: "Exporter le rapport CSV"
          },
          "ja-JP": {
            singular: "レポートCSVをエクスポート"
          },
          "ko-KR": {
            singular: "CSV 보고서 내보내기"
          },
          "pt-BR": {
            singular: "Exportar relatório como arquivo CSV"
          },
          "zh-CN": {
            singular: "导出报告为 CSV"
          }
        }
      }),
      close: (0, _v13.translate)({
        singular: "Close",
        dictionary: {
          es: {
            singular: "Cerrar"
          },
          "de-DE": {
            singular: "Schließen"
          },
          "fr-FR": {
            singular: "Fermer "
          },
          "ja-JP": {
            singular: "閉じる"
          },
          "ko-KR": {
            singular: "닫기"
          },
          "pt-BR": {
            singular: "Fechar"
          },
          "zh-CN": {
            singular: "关闭"
          }
        }
      }),
      exportProcessing: (0, _v13.translate)({
        singular: "Export processing. You may leave this page.",
        dictionary: {
          es: {
            singular: "Exportación en proceso. Puede salir de esta página."
          },
          "de-DE": {
            singular: "Exportvorgang läuft. Sie können diese Seite verlassen."
          },
          "fr-FR": {
            singular: "Exportation en cours de traitement. Vous pouvez quitter cette page."
          },
          "ja-JP": {
            singular: "エクスポートを処理しています。このページから離れても構いません。"
          },
          "ko-KR": {
            singular: "내보내기를 처리하고 있습니다. 이 페이지에서 나가셔도 좋습니다."
          },
          "pt-BR": {
            singular: "Processando exportação. Você pode sair da página."
          },
          "zh-CN": {
            singular: "导出正在处理中。您可以离开此页面。"
          }
        }
      }),
      unableToExport: (0, _v13.translate)({
        singular: "Unable to export. Try again.",
        dictionary: {
          es: {
            singular: "No se puede exportar. Inténtelo de nuevo."
          },
          "de-DE": {
            singular: "Kann nicht exportiert werden. Nochmal versuchen."
          },
          "fr-FR": {
            singular: "Exportation impossible. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "エクスポートできません。もう一度お試しください。"
          },
          "ko-KR": {
            singular: "내보내기를 처리할 수 없습니다. 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Não foi possível exportar. Tente novamente."
          },
          "zh-CN": {
            singular: "无法导出。请重试。"
          }
        }
      }),
      unableToExportUseEmail: (0, _v13.translate)({
        singular: "Unable to export. Try again or export to email.",
        dictionary: {
          es: {
            singular: "No se puede exportar. Inténtelo de nuevo o expórtelo a un correo electrónico."
          },
          "de-DE": {
            singular: "Kann nicht exportiert werden. Erneut versuchen oder als E-Mail exportieren."
          },
          "fr-FR": {
            singular: "Exportation impossible. Réessayez ou exportez vers une adresse e-mail."
          },
          "ja-JP": {
            singular: "エクスポートできません。再試行するか、メールにエクスポートしてください。"
          },
          "ko-KR": {
            singular: "내보내기를 처리할 수 없습니다. 다시 시도하거나 이메일로 내보내세요."
          },
          "pt-BR": {
            singular: "Não foi possível exportar. Tente novamente ou exporte para o e-mail."
          },
          "zh-CN": {
            singular: "无法导出。请重试或导出到电子邮件。"
          }
        }
      }),
      emailExport: (0, _v13.translate)({
        singular: "Export to email",
        dictionary: {
          es: {
            singular: "Exportar a su correo electrónico"
          },
          "de-DE": {
            singular: "In eine E-Mail exportieren"
          },
          "fr-FR": {
            singular: "Exporter vers l'e-mail"
          },
          "ja-JP": {
            singular: "メールにエクスポート"
          },
          "ko-KR": {
            singular: "이메일로 내보내기"
          },
          "pt-BR": {
            singular: "Exportar para e-mail"
          },
          "zh-CN": {
            singular: "导出到电子邮件"
          }
        }
      }),
      download: (0, _v13.translate)({
        singular: "Download",
        dictionary: {
          es: {
            singular: "Descargar"
          },
          "de-DE": {
            singular: "Herunterladen"
          },
          "fr-FR": {
            singular: "Télécharger "
          },
          "ja-JP": {
            singular: "ダウンロード"
          },
          "ko-KR": {
            singular: "다운로드"
          },
          "pt-BR": {
            singular: "Baixar"
          },
          "zh-CN": {
            singular: "下载"
          }
        }
      }),
      reliableForAll: (0, _v13.translate)({
        singular: "Reliable for all file sizes",
        dictionary: {
          es: {
            singular: "Confiable para todos los tamaños de archivo"
          },
          "de-DE": {
            singular: "Zuverlässig für alle Dateigrößen"
          },
          "fr-FR": {
            singular: "Fiable pour toutes les tailles de fichiers"
          },
          "ja-JP": {
            singular: "すべてのファイルサイズで高い信頼性"
          },
          "ko-KR": {
            singular: "모든 파일 크기에 대해 신뢰할 수 있습니다."
          },
          "pt-BR": {
            singular: "Confiável para todos os tamanhos de arquivo"
          },
          "zh-CN": {
            singular: "无论文件大小都很可靠"
          }
        }
      }),
      fasterForSmaller: (0, _v13.translate)({
        singular: "Faster for smaller datasets",
        dictionary: {
          es: {
            singular: "Más rápido para conjuntos de datos más pequeños"
          },
          "de-DE": {
            singular: "Schneller für kleinere Datensätze."
          },
          "fr-FR": {
            singular: "Plus rapide pour les ensembles de données plus petits."
          },
          "ja-JP": {
            singular: "データセットが小さいほど高速"
          },
          "ko-KR": {
            singular: "작은 데이터 세트의 경우 더 빠릅니다."
          },
          "pt-BR": {
            singular: "Mais rápido para conjuntos de dados menores"
          },
          "zh-CN": {
            singular: "较小数据集的处理速度更快"
          }
        }
      }),
      emailAddress: _v0 => (0, _v13.translate)({
        singular: "This may take a few minutes. If email is selected, we'll send the report to {EMAIL}.",
        replacements: {
          EMAIL: _v0
        },
        dictionary: {
          es: {
            singular: "Esto puede tardar unos minutos. Si se selecciona el correo electrónico, le enviaremos el informe a {EMAIL}."
          },
          "de-DE": {
            singular: "Das kann ein paar Minuten dauern. Falls E-Mail ausgewählt ist, senden wir den Bericht an {EMAIL}."
          },
          "fr-FR": {
            singular: "Cela peut prendre quelques minutes. Si l'option e-mail est sélectionnée, nous enverrons le rapport à l'adresse {EMAIL}."
          },
          "ja-JP": {
            singular: "少々お待ちください。メールが選択された場合、レポートを{EMAIL}に送信します。"
          },
          "ko-KR": {
            singular: "몇 분 정도 걸릴 수 있습니다. 이메일을 선택하면 보고서가 {EMAIL}(으)로 전송됩니다."
          },
          "pt-BR": {
            singular: "Isso pode levar alguns minutos. Se você selecionar e-mail, enviaremos o relatório para {EMAIL}."
          },
          "zh-CN": {
            singular: "这可能需要几分钟时间。如果选择了电子邮件，我们将把报告发送到 {EMAIL}。"
          }
        }
      }),
      dateRange: (_v0, _v1) => (0, _v13.translate)({
        singular: "Date range: {START_DATE} - {END_DATE}",
        replacements: {
          START_DATE: _v0,
          END_DATE: _v1
        },
        dictionary: {
          es: {
            singular: "Intervalo de fechas: {START_DATE} - {END_DATE}"
          },
          "de-DE": {
            singular: "Datumsbereich: {START_DATE} – {END_DATE}"
          },
          "fr-FR": {
            singular: "Période : {START_DATE} - {END_DATE}"
          },
          "ja-JP": {
            singular: "日付範囲：{START_DATE} - {END_DATE}"
          },
          "ko-KR": {
            singular: "기간: {START_DATE} ~ {END_DATE}"
          },
          "pt-BR": {
            singular: "Intervalo de Datas: {START_DATE} a {END_DATE}"
          },
          "zh-CN": {
            singular: "日期范围：{START_DATE} - {END_DATE}"
          }
        }
      }),
      reportExport: _v0 => ({
        [_v17.VIDEO]: () => (0, _v13.translate)({
          singular: "The video report will be exported with the following filters applied:",
          dictionary: {
            es: {
              singular: "El informe de video será exportado con los siguientes filtros aplicados:"
            },
            "de-DE": {
              singular: "Der Videobericht wird mit den folgenden Filtern exportiert:"
            },
            "fr-FR": {
              singular: "Le rapport vidéo sera exporté avec les filtres suivants appliqués :"
            },
            "ja-JP": {
              singular: "動画レポートは、以下のフィルターが適用された状態でエクスポートされます。"
            },
            "ko-KR": {
              singular: "동영상 보고서는 다음 필터가 적용된 상태로 내보내집니다."
            },
            "pt-BR": {
              singular: "O relatório de vídeo será exportado com os seguintes filtros aplicados:"
            },
            "zh-CN": {
              singular: "将在应用以下筛选条件后导出视频报告："
            }
          }
        }),
        [_v17.REGION]: () => (0, _v13.translate)({
          singular: "The region report will be exported with the following filters applied:",
          dictionary: {
            es: {
              singular: "El informe de la región será exportado con los siguientes filtros aplicados:"
            },
            "de-DE": {
              singular: "Der Regionenbericht wird mit den folgenden Filtern exportiert:"
            },
            "fr-FR": {
              singular: "Le rapport de région sera exporté avec les filtres suivants appliqués :"
            },
            "ja-JP": {
              singular: "地域レポートは、以下のフィルターが適用された状態でエクスポートされます"
            },
            "ko-KR": {
              singular: "지역 보고서는 다음 필터가 적용된 상태로 내보내집니다."
            },
            "pt-BR": {
              singular: "O relatório da região será exportado com os seguintes filtros aplicados:"
            },
            "zh-CN": {
              singular: "将在应用以下筛选条件后导出区域报告："
            }
          }
        }),
        [_v17.SOURCE]: () => (0, _v13.translate)({
          singular: "The source report will be exported with the following filters applied:",
          dictionary: {
            es: {
              singular: "El informe de fuentes será exportado con los siguientes filtros aplicados:"
            },
            "de-DE": {
              singular: "Der Quellbericht wird mit den folgenden Filtern exportiert werden:"
            },
            "fr-FR": {
              singular: "Le rapport source sera exporté avec les filtres suivants appliqués :"
            },
            "ja-JP": {
              singular: "ソースレポートは、以下のフィルターが適用された状態でエクスポートされます。"
            },
            "ko-KR": {
              singular: "소스 보고서는 다음 필터가 적용된 상태로 내보내집니다."
            },
            "pt-BR": {
              singular: "O relatório de origem será exportado com os seguintes filtros aplicados:"
            },
            "zh-CN": {
              singular: "将在应用以下筛选条件后导出来源报告："
            }
          }
        }),
        [_v17.DEVICE]: () => (0, _v13.translate)({
          singular: "The device report will be exported with the following filters applied:",
          dictionary: {
            es: {
              singular: "El informe del dispositivo será exportado con los siguientes filtros aplicados:"
            },
            "de-DE": {
              singular: "Der Gerätebericht wird mit den folgenden Filtern exportiert:"
            },
            "fr-FR": {
              singular: "Le rapport de l'appareil sera exporté avec les filtres suivants appliqués :"
            },
            "ja-JP": {
              singular: "デバイスレポートは、次のフィルターが適用された状態でエクスポートされます。"
            },
            "ko-KR": {
              singular: "장치 보고서는 다음 필터가 적용된 상태로 내보내집니다."
            },
            "pt-BR": {
              singular: "O relatório do dispositivo será exportado com os seguintes filtros aplicados:"
            },
            "zh-CN": {
              singular: "将在应用以下筛选条件后导出设备报告："
            }
          }
        }),
        [_v17.DATE]: () => (0, _v13.translate)({
          singular: "The date report will be exported with the following filters applied:",
          dictionary: {
            es: {
              singular: "El informe por fecha será exportado con los siguientes filtros aplicados:"
            },
            "de-DE": {
              singular: "Der Bericht wird mit den folgenden Datumsfiltern exportiert:"
            },
            "fr-FR": {
              singular: "Le rapport de date sera exporté avec les filtres suivants appliqués :"
            },
            "ja-JP": {
              singular: "日付レポートは、以下のフィルターが適用された状態でエクスポートされます。"
            },
            "ko-KR": {
              singular: "날짜 보고서는 다음 필터가 적용된 상태로 내보내집니다."
            },
            "pt-BR": {
              singular: "O relatório de data será exportado com os seguintes filtros aplicados:"
            },
            "zh-CN": {
              singular: "将在应用以下筛选条件后导出日期报告："
            }
          }
        }),
        [_v17.TEAM]: () => (0, _v13.translate)({
          singular: "The team report will be exported with the following filters applied:",
          dictionary: {
            es: {
              singular: "El informe del equipo será exportado con los siguientes filtros aplicados:"
            },
            "de-DE": {
              singular: "Der Teambericht wird mit den folgenden Filtern exportiert:"
            },
            "fr-FR": {
              singular: "Le rapport d'équipe sera exporté avec les filtres suivants appliqués :"
            },
            "ja-JP": {
              singular: "チームレポートは、以下のフィルターが適用された状態でエクスポートされます。"
            },
            "ko-KR": {
              singular: "팀 보고서는 다음 필터가 적용된 상태로 내보내집니다."
            },
            "pt-BR": {
              singular: "O relatório da equipe será exportado com os seguintes filtros aplicados:"
            },
            "zh-CN": {
              singular: "将在应用以下筛选条件后导出团队报告："
            }
          }
        })
      })[_v0](),
      filterRow: (_v0, _v1) => ({
        [_v23.Filters.CONTENT]: () => (0, _v13.translate)({
          singular: "Content: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Contenido: {NAMES}"
            },
            "de-DE": {
              singular: "Inhalt: {NAMES}"
            },
            "fr-FR": {
              singular: "Contenu : {NAMES}"
            },
            "ja-JP": {
              singular: "コンテンツ：{NAMES}"
            },
            "ko-KR": {
              singular: "콘텐츠: {NAMES}"
            },
            "pt-BR": {
              singular: "Conteúdo: {NAMES}"
            },
            "zh-CN": {
              singular: "内容：{NAMES}"
            }
          }
        }),
        [_v23.Filters.SOURCE_URL]: () => (0, _v13.translate)({
          singular: "Source: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Fuente: {NAMES}"
            },
            "de-DE": {
              singular: "Quelle: {NAMES}"
            },
            "fr-FR": {
              singular: "Source : {NAMES}"
            },
            "ja-JP": {
              singular: "出典：{NAMES}"
            },
            "ko-KR": {
              singular: "출처: {NAMES}"
            },
            "pt-BR": {
              singular: "Fonte: {NAMES}"
            },
            "zh-CN": {
              singular: "来源：{NAMES}"
            }
          }
        }),
        [_v23.Filters.DEVICE]: () => (0, _v13.translate)({
          singular: "Device: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Dispositivo: {NAMES}"
            },
            "de-DE": {
              singular: "Gerät: {NAMES}"
            },
            "fr-FR": {
              singular: "Appareil : {NAMES}"
            },
            "ja-JP": {
              singular: "デバイス：{NAMES}"
            },
            "ko-KR": {
              singular: "디바이스: {NAMES}"
            },
            "pt-BR": {
              singular: "Dispositivo: {NAMES}"
            },
            "zh-CN": {
              singular: "设备：{NAMES}"
            }
          }
        }),
        [_v23.Filters.REGION]: () => (0, _v13.translate)({
          singular: "Region: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Región: {NAMES}"
            },
            "fr-FR": {
              singular: "Région : {NAMES}"
            },
            "ja-JP": {
              singular: "地域：{NAMES}"
            },
            "ko-KR": {
              singular: "지역: {NAMES}"
            },
            "pt-BR": {
              singular: "Região: {NAMES}"
            },
            "zh-CN": {
              singular: "地区：{NAMES}"
            }
          }
        }),
        [_v23.Filters.STREAMING_TYPE]: () => (0, _v13.translate)({
          singular: "Type: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Tipo: {NAMES}"
            },
            "de-DE": {
              singular: "Typ: {NAMES}"
            },
            "fr-FR": {
              singular: "Type : {NAMES}"
            },
            "ja-JP": {
              singular: "タイプ：{NAMES}"
            },
            "ko-KR": {
              singular: "유형: {NAMES}"
            },
            "pt-BR": {
              singular: "Tipo: {NAMES}"
            },
            "zh-CN": {
              singular: "类型：{NAMES}"
            }
          }
        }),
        [_v23.Filters.MEMBER]: () => (0, _v13.translate)({
          singular: "Member: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Miembro: {NAMES}"
            },
            "de-DE": {
              singular: "Mitglied: {NAMES}"
            },
            "fr-FR": {
              singular: "Membre : {NAMES}"
            },
            "ja-JP": {
              singular: "メンバー：{NAMES}"
            },
            "ko-KR": {
              singular: "멤버: {NAMES}"
            },
            "pt-BR": {
              singular: "Membro: {NAMES}"
            },
            "zh-CN": {
              singular: "成员：{NAMES}"
            }
          }
        }),
        [_v23.Filters.TEXT_LANGUAGE]: () => (0, _v13.translate)({
          singular: "Subtitles and captions language: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Idioma de subtítulos y leyendas: {NAMES}"
            },
            "de-DE": {
              singular: "Sprache der Untertitel und erweiterten Untertitel: {NAMES}"
            },
            "fr-FR": {
              singular: "Langue des sous-titres et des sous-titres SME : {NAMES}"
            },
            "ja-JP": {
              singular: "字幕とキャプションの言語：{NAMES}"
            },
            "ko-KR": {
              singular: "자막 및 캡션 언어: {NAMES}"
            },
            "pt-BR": {
              singular: "Idioma de legendas e closed captions: {NAMES}"
            },
            "zh-CN": {
              singular: "字幕和隐藏式字幕语言：{NAMES}"
            }
          }
        }),
        [_v23.Filters.TEXT_TYPE_AND_PROVENANCE]: () => (0, _v13.translate)({
          singular: "Subtitles and captions type: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Tipo de subtítulos y leyendas: {NAMES}"
            },
            "de-DE": {
              singular: "Typ der Untertitel und erweiterten Untertitel: {NAMES}"
            },
            "fr-FR": {
              singular: "Type de sous-titres et de sous-titres SME : {NAMES}"
            },
            "ja-JP": {
              singular: "字幕とキャプションのタイプ：{NAMES}"
            },
            "ko-KR": {
              singular: "자막 및 캡션 유형: {NAMES}"
            },
            "pt-BR": {
              singular: "Tipo de legendas e closed captions: {NAMES}"
            },
            "zh-CN": {
              singular: "字幕和字幕说明类型：{NAMES}"
            }
          }
        }),
        [_v23.Filters.AUDIO_LANGUAGE]: () => (0, _v13.translate)({
          singular: "Audio track language: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Idioma de la pista de audio: {NAMES}"
            },
            "de-DE": {
              singular: "Audiosprachspur: {NAMES}"
            },
            "fr-FR": {
              singular: "Langue de la piste audio : {NAMES}"
            },
            "ja-JP": {
              singular: "オーディオトラックの言語：{NAMES}"
            },
            "ko-KR": {
              singular: "오디오 트랙 언어: {NAMES}"
            },
            "pt-BR": {
              singular: "Idioma da faixa de áudio: {NAMES}"
            },
            "zh-CN": {
              singular: "音轨语言：{NAMES}"
            }
          }
        }),
        [_v23.Filters.AUDIO_TYPE_AND_PROVENANCE]: () => (0, _v13.translate)({
          singular: "Audio track type: {NAMES}",
          replacements: {
            NAMES: _v1
          },
          dictionary: {
            es: {
              singular: "Tipo de pista de audio: {NAMES}"
            },
            "de-DE": {
              singular: "Audiospurtyp: {NAMES}"
            },
            "fr-FR": {
              singular: "Type de piste audio : {NAMES}"
            },
            "ja-JP": {
              singular: "オーディオトラックのタイプ：{NAMES}"
            },
            "ko-KR": {
              singular: "오디오 트랙 유형: {NAMES}"
            },
            "pt-BR": {
              singular: "Tipo de faixa de áudio: {NAMES}"
            },
            "zh-CN": {
              singular: "音轨类型：{NAMES}"
            }
          }
        })
      })[_v0](),
      filterRowOverflow: (_v0, _v1, _v2) => ({
        [_v23.Filters.CONTENT]: () => (0, _v13.translate)({
          singular: "Content: {NAMES} + {OVERFLOW} more",
          replacements: {
            NAMES: _v1,
            OVERFLOW: _v2
          },
          dictionary: {
            es: {
              singular: "Contenido: {NAMES} + {OVERFLOW} más"
            },
            "de-DE": {
              singular: "Inhalt: {NAMES} + {OVERFLOW} mehr"
            },
            "fr-FR": {
              singular: "Contenu : {NAMES} + {OVERFLOW} de plus"
            },
            "ja-JP": {
              singular: "コンテンツ：{NAMES} + その他{OVERFLOW}件"
            },
            "ko-KR": {
              singular: "콘텐츠: {NAMES} + {OVERFLOW}개 더 보기"
            },
            "pt-BR": {
              singular: "Conteúdo: {NAMES} e mais {OVERFLOW}"
            },
            "zh-CN": {
              singular: "内容：{NAMES} + {OVERFLOW} 更多"
            }
          }
        }),
        [_v23.Filters.SOURCE_URL]: () => (0, _v13.translate)({
          singular: "Source: {NAMES} + {OVERFLOW} more",
          replacements: {
            NAMES: _v1,
            OVERFLOW: _v2
          },
          dictionary: {
            es: {
              singular: "Fuente: {NAMES} + {OVERFLOW} más"
            },
            "de-DE": {
              singular: "Quelle: {NAMES} + {OVERFLOW} mehr"
            },
            "fr-FR": {
              singular: "Source : {NAMES} + {OVERFLOW} de plus"
            },
            "ja-JP": {
              singular: "出典：{NAMES} + その他{OVERFLOW}件"
            },
            "ko-KR": {
              singular: "출처: {NAMES} + {OVERFLOW}곳 더 보기"
            },
            "pt-BR": {
              singular: "Fonte: {NAMES} e mais {OVERFLOW}"
            },
            "zh-CN": {
              singular: "来源：{NAMES} + {OVERFLOW} 更多"
            }
          }
        }),
        [_v23.Filters.REGION]: () => (0, _v13.translate)({
          singular: "Region: {NAMES} + {OVERFLOW} more",
          replacements: {
            NAMES: _v1,
            OVERFLOW: _v2
          },
          dictionary: {
            es: {
              singular: "Región: {NAMES} + {OVERFLOW} más"
            },
            "de-DE": {
              singular: "Region: {NAMES} + {OVERFLOW} weitere"
            },
            "fr-FR": {
              singular: "Région : {NAMES} + {OVERFLOW} de plus"
            },
            "ja-JP": {
              singular: "地域：{NAMES} + その他{OVERFLOW}件"
            },
            "ko-KR": {
              singular: "지역: {NAMES} + {OVERFLOW}곳 더 보기"
            },
            "pt-BR": {
              singular: "Região: {NAMES} + {OVERFLOW} mais"
            },
            "zh-CN": {
              singular: "地区：{NAMES} + {OVERFLOW} 更多"
            }
          }
        }),
        [_v23.Filters.TEXT_LANGUAGE]: () => (0, _v13.translate)({
          singular: "Subtitles and captions language: {NAMES} + {OVERFLOW} more",
          replacements: {
            NAMES: _v1,
            OVERFLOW: _v2
          },
          dictionary: {
            es: {
              singular: "Idioma de los subtítulos y leyendas: {NAMES} y {OVERFLOW} más"
            },
            "de-DE": {
              singular: "Sprache der Untertitel und erweiterten Untertitel: {NAMES} + {OVERFLOW} weitere"
            },
            "fr-FR": {
              singular: "Langue des sous-titres et des sous-titres SME : {NAMES} + {OVERFLOW} autre(s)"
            },
            "ja-JP": {
              singular: "字幕とキャプションの言語：{NAMES} + 他{OVERFLOW}言語"
            },
            "ko-KR": {
              singular: "자막 및 캡션 언어: {NAMES} + {OVERFLOW} 추가"
            },
            "pt-BR": {
              singular: "Idioma de legendas e closed captions: {NAMES} e mais {OVERFLOW}"
            },
            "zh-CN": {
              singular: "字幕和字幕语言：{NAMES} + {OVERFLOW} 种语言"
            }
          }
        }),
        [_v23.Filters.TEXT_TYPE_AND_PROVENANCE]: () => (0, _v13.translate)({
          singular: "Subtitles and captions type: {NAMES} + {OVERFLOW} more",
          replacements: {
            NAMES: _v1,
            OVERFLOW: _v2
          },
          dictionary: {
            es: {
              singular: "Tipo de subtítulos y leyendas: {NAMES} y {OVERFLOW} más"
            },
            "de-DE": {
              singular: "Typ der Untertitel und erweiterten Untertitel: {NAMES} + {OVERFLOW} weitere"
            },
            "fr-FR": {
              singular: "Type de sous-titres et de sous-titres SME : {NAMES} + {OVERFLOW} autre(s)"
            },
            "ja-JP": {
              singular: "字幕とキャプションの種類：{NAMES} + 他{OVERFLOW}件"
            },
            "ko-KR": {
              singular: "자막 및 캡션 유형: {NAMES} + {OVERFLOW} 추가"
            },
            "pt-BR": {
              singular: "Tipo de legendas e legendas ocultas: {NAMES} e mais {OVERFLOW}"
            },
            "zh-CN": {
              singular: "字幕和字幕类型：{NAMES} + {OVERFLOW} 种类型"
            }
          }
        }),
        [_v23.Filters.AUDIO_LANGUAGE]: () => (0, _v13.translate)({
          singular: "Audio track language: {NAMES} + {OVERFLOW} more",
          replacements: {
            NAMES: _v1,
            OVERFLOW: _v2
          },
          dictionary: {
            es: {
              singular: "Idioma de la pista de audio: {NAMES} y {OVERFLOW} más"
            },
            "de-DE": {
              singular: "Audiosprachspur: {NAMES} + {OVERFLOW} weitere"
            },
            "fr-FR": {
              singular: "Langue de la piste audio : {NAMES} + {OVERFLOW} autre(s)"
            },
            "ja-JP": {
              singular: "オーディオトラックの言語：{NAMES} + 他{OVERFLOW}言語"
            },
            "ko-KR": {
              singular: "오디오 트랙 언어: {NAMES} + {OVERFLOW} 추가"
            },
            "pt-BR": {
              singular: "Idioma da faixa de áudio: {NAMES} e mais {OVERFLOW}"
            },
            "zh-CN": {
              singular: "音轨语言：{NAMES} + {OVERFLOW} 种语言"
            }
          }
        }),
        [_v23.Filters.AUDIO_TYPE_AND_PROVENANCE]: () => (0, _v13.translate)({
          singular: "Audio track type: {NAMES} + {OVERFLOW} more",
          replacements: {
            NAMES: _v1,
            OVERFLOW: _v2
          },
          dictionary: {
            es: {
              singular: "Tipo de pista de audio: {NAMES} y {OVERFLOW} más"
            },
            "de-DE": {
              singular: "Audiospurtyp: {NAMES} + {OVERFLOW} weitere"
            },
            "fr-FR": {
              singular: "Type de piste audio : {NAMES} + {OVERFLOW} autre(s)"
            },
            "ja-JP": {
              singular: "オーディオトラックの種類：{NAMES} + 他{OVERFLOW}件"
            },
            "ko-KR": {
              singular: "오디오 트랙 유형: {NAMES} + {OVERFLOW} 추가"
            },
            "pt-BR": {
              singular: "Tipo de faixa de áudio: {NAMES} e mais {OVERFLOW}"
            },
            "zh-CN": {
              singular: "音轨类型：{NAMES} + {OVERFLOW} 种类型"
            }
          }
        })
      })[_v0](),
      secondaryDimensionInfo: _v0 => {
        let _v1 = {
          [_v15.DATE]: () => (0, _v13.translate)({
            singular: "Breakdown by date will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por fecha."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Datum wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La répartition par date ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "日付別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "날짜별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por data não será aplicado."
              },
              "zh-CN": {
                singular: "按日期划分将不适用。"
              }
            }
          }),
          [_v15.DEVICE]: () => (0, _v13.translate)({
            singular: "Breakdown by device will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por dispositivo."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Gerät wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La répartition par appareil ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "デバイス別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "기기별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por dispositivo não será aplicado."
              },
              "zh-CN": {
                singular: "按设备划分将不适用。"
              }
            }
          }),
          [_v15.REGION]: () => (0, _v13.translate)({
            singular: "Breakdown by region will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por región."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Region wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La ventilation par région ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "地域別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "지역별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por região não será aplicado."
              },
              "zh-CN": {
                singular: "按区域划分将不适用。"
              }
            }
          }),
          [_v15.SOURCE_URL]: () => (0, _v13.translate)({
            singular: "Breakdown by source URL will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por URL de origen."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Quell-URL wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La répartition par URL source ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "ソースURL別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "소스 URL별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por URL de origem não será aplicado."
              },
              "zh-CN": {
                singular: "按来源网址划分将不适用。"
              }
            }
          }),
          [_v15.VIDEO]: () => (0, _v13.translate)({
            singular: "Breakdown by video will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por video."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Video wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La répartition par vidéo ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "動画別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "동영상별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por vídeo não será aplicado."
              },
              "zh-CN": {
                singular: "按视频划分将不适用。"
              }
            }
          }),
          [_v15.STREAMING_TYPE]: () => (0, _v13.translate)({
            singular: "Breakdown by streaming type will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por tipo de transmisión."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Streamingtyp wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La répartition par type de streaming ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "ストリーミングタイプ別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "스트리밍 유형별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por tipo de transmissão não será aplicado."
              },
              "zh-CN": {
                singular: "按流类型划分将不适用。"
              }
            }
          }),
          [_v15.TEXT_TRACK]: () => (0, _v13.translate)({
            singular: "Breakdown by subtitles and captions will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por subtítulos y leyendas."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Untertiteln und erweiterten Untertiteln wird nicht angewendet."
              },
              "fr-FR": {
                singular: "La répartition par sous-titres et sous-titres (SME) ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "字幕とキャプション別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "자막 및 캡션별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por legendas e closed captions (CC) não será aplicado."
              },
              "zh-CN": {
                singular: "按字幕和标题划分将不适用。"
              }
            }
          }),
          [_v15.AUDIO_TRACK]: () => (0, _v13.translate)({
            singular: "Breakdown by audio track will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por pista de audio."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Audiospur wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La répartition par piste audio ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "オーディオトラック別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "오디오 트랙별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por faixa de áudio não será aplicado."
              },
              "zh-CN": {
                singular: "按音轨划分将不适用。"
              }
            }
          }),
          [_v15.BANDWIDTH_VIDEO]: () => (0, _v13.translate)({
            singular: "Breakdown by video will not be applied.",
            dictionary: {
              es: {
                singular: "No se aplicará el desglose por video."
              },
              "de-DE": {
                singular: "Eine Aufschlüsselung nach Video wird nicht vorgenommen."
              },
              "fr-FR": {
                singular: "La répartition par vidéo ne sera pas appliquée."
              },
              "ja-JP": {
                singular: "動画別の内訳は適用されません。"
              },
              "ko-KR": {
                singular: "동영상별 세부 분류는 적용되지 않습니다."
              },
              "pt-BR": {
                singular: "O detalhamento por vídeo não será aplicado."
              },
              "zh-CN": {
                singular: "按视频划分将不适用。"
              }
            }
          })
        };
        return _v1[_v0]?.();
      }
    },
    _v50 = (0, _v13.translate)({
      singular: "No data to show yet",
      dictionary: {
        es: {
          singular: "Aún no hay datos que mostrar"
        },
        "de-DE": {
          singular: "Noch keine Daten vorhanden"
        },
        "fr-FR": {
          singular: "Aucune donnée n’est encore disponible"
        },
        "ja-JP": {
          singular: "表示するデータはまだありません"
        },
        "ko-KR": {
          singular: "아직 표시할 데이터가 없습니다."
        },
        "pt-BR": {
          singular: "Ainda não há dados para mostrar"
        },
        "zh-CN": {
          singular: "暂无数据可显示"
        }
      }
    }),
    _v51 = (0, _v13.translate)({
      singular: "Yesterday",
      dictionary: {
        es: {
          singular: "Ayer"
        },
        "de-DE": {
          singular: "Gestern"
        },
        "fr-FR": {
          singular: "Hier"
        },
        "ja-JP": {
          singular: "昨日"
        },
        "ko-KR": {
          singular: "어제"
        },
        "pt-BR": {
          singular: "Ontem"
        },
        "zh-CN": {
          singular: "昨天"
        }
      }
    }),
    _v52 = (0, _v13.translate)({
      singular: "Today",
      dictionary: {
        es: {
          singular: "Hoy"
        },
        "de-DE": {
          singular: "Heute"
        },
        "fr-FR": {
          singular: "Aujourd'hui"
        },
        "ja-JP": {
          singular: "今日"
        },
        "ko-KR": {
          singular: "오늘"
        },
        "pt-BR": {
          singular: "Hoje"
        },
        "zh-CN": {
          singular: "今天"
        }
      }
    }),
    _v53 = (0, _v13.translate)({
      singular: "Select date range",
      dictionary: {
        es: {
          singular: "Selecciona el rango de fechas"
        },
        "de-DE": {
          singular: "Datumsbereich auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner une période"
        },
        "ja-JP": {
          singular: "期間を選択"
        },
        "ko-KR": {
          singular: "기간 선택"
        },
        "pt-BR": {
          singular: "Selecione o período"
        }
      }
    }),
    _v54 = _v0 => (0, _v13.translate)({
      singular: "Last {count} day",
      plural: "Last {count} days",
      replacements: {
        count: _v0
      },
      count: _v0,
      dictionary: {
        es: {
          singular: "Último {count} día",
          plural: "Últimos {count} días"
        },
        "de-DE": {
          singular: "Letzter {count} Tag",
          plural: "Letzte {count} Tage"
        },
        "fr-FR": {
          singular: "{count} dernier jour",
          plural: "{count} derniers jours"
        },
        "ja-JP": {
          singular: "過去{count}日間",
          plural: "過去 {count}日間"
        },
        "ko-KR": {
          singular: "최근 {count}일",
          plural: "최근 {count}일"
        },
        "pt-BR": {
          singular: "Último {count} dia",
          plural: "Últimos {count} dias"
        },
        "zh-CN": {
          singular: "过去 {count} 天",
          plural: "过去 {count} 天"
        }
      }
    }),
    _v55 = (0, _v13.translate)({
      singular: "All dates",
      dictionary: {
        es: {
          singular: "Todas las fechas"
        },
        "de-DE": {
          singular: "Alle Daten"
        },
        "fr-FR": {
          singular: "Toutes les dates"
        },
        "ja-JP": {
          singular: "すべての日付"
        },
        "ko-KR": {
          singular: "전체 날짜"
        },
        "pt-BR": {
          singular: "Todas as datas"
        },
        "zh-CN": {
          singular: "所有日期"
        }
      }
    }),
    _v56 = (0, _v13.translate)({
      singular: "All devices",
      dictionary: {
        es: {
          singular: "Todos los dispositivos"
        },
        "de-DE": {
          singular: "Alle Geräte"
        },
        "fr-FR": {
          singular: "Tous les appareils"
        },
        "ja-JP": {
          singular: "すべてのデバイス"
        },
        "ko-KR": {
          singular: "모든 디바이스"
        },
        "pt-BR": {
          singular: "Todos os dispositivos"
        },
        "zh-CN": {
          singular: "所有设备"
        }
      }
    }),
    _v57 = (0, _v13.translate)({
      singular: "All source URLs",
      dictionary: {
        es: {
          singular: "Todas las URL de origen"
        },
        "de-DE": {
          singular: "Alle Quell-URLs"
        },
        "fr-FR": {
          singular: "Toutes les URL source"
        },
        "ja-JP": {
          singular: "すべてのソースURL"
        },
        "ko-KR": {
          singular: "모든 소스 URL"
        },
        "pt-BR": {
          singular: "Todos os URLs de origem"
        },
        "zh-CN": {
          singular: "所有来源 URL"
        }
      }
    }),
    _v58 = (0, _v13.translate)({
      singular: "All regions",
      dictionary: {
        es: {
          singular: "Todas las regiones"
        },
        "de-DE": {
          singular: "Alle Regionen"
        },
        "fr-FR": {
          singular: "Toutes les régions"
        },
        "ja-JP": {
          singular: "すべての地域"
        },
        "ko-KR": {
          singular: "모든 지역"
        },
        "pt-BR": {
          singular: "Todas as regiões"
        },
        "zh-CN": {
          singular: "所有区域"
        }
      }
    }),
    _v59 = (0, _v13.translate)({
      singular: "All videos",
      dictionary: {
        es: {
          singular: "Todos los videos"
        },
        "de-DE": {
          singular: "Alle Videos"
        },
        "fr-FR": {
          singular: "Toutes les vidéos"
        },
        "ja-JP": {
          singular: "すべての動画"
        },
        "ko-KR": {
          singular: "모든 동영상"
        },
        "pt-BR": {
          singular: "Todos os vídeos"
        },
        "zh-CN": {
          singular: "所有视频"
        }
      }
    }),
    _v60 = (0, _v13.translate)({
      singular: "All streaming types",
      dictionary: {
        es: {
          singular: "Todos los tipos de transmisión"
        },
        "de-DE": {
          singular: "Alle Streaming-Typen"
        },
        "fr-FR": {
          singular: "Tous les types de streaming"
        },
        "ja-JP": {
          singular: "すべてのストリーミングタイプ"
        },
        "ko-KR": {
          singular: "모든 스트리밍 유형"
        },
        "pt-BR": {
          singular: "Todos os tipos de transmissão"
        },
        "zh-CN": {
          singular: "所有流媒体类型"
        }
      }
    }),
    _v61 = (0, _v13.translate)({
      singular: "All languages",
      dictionary: {
        es: {
          singular: "Todos los idiomas"
        },
        "de-DE": {
          singular: "Alle Sprachen"
        },
        "fr-FR": {
          singular: "Toutes les langues"
        },
        "ja-JP": {
          singular: "すべての言語"
        },
        "ko-KR": {
          singular: "모든 언어"
        },
        "pt-BR": {
          singular: "Todos os idiomas"
        },
        "zh-CN": {
          singular: "所有语言"
        }
      }
    }),
    _v62 = (0, _v13.translate)({
      singular: "Completions",
      dictionary: {
        es: {
          singular: "Finalizaciones"
        },
        "de-DE": {
          singular: "Vervollständigungen"
        },
        "fr-FR": {
          singular: "Complétions"
        },
        "ja-JP": {
          singular: "完了数"
        },
        "ko-KR": {
          singular: "완료"
        },
        "pt-BR": {
          singular: "Conclusões"
        },
        "zh-CN": {
          singular: "完成情况"
        }
      }
    }),
    _v63 = (0, _v13.translate)({
      singular: "Number of times more than 95% of a video was watched",
      dictionary: {
        es: {
          singular: "Cantidad de veces que se vio más del 95 % de un video"
        },
        "de-DE": {
          singular: "Wie oft ein Video zu 95 % angesehen wurde"
        },
        "fr-FR": {
          singular: "Nombre de fois où plus de 95 % d'une vidéo a été regardée"
        },
        "ja-JP": {
          singular: "動画の95%以上が視聴された回数"
        },
        "ko-KR": {
          singular: "동영상의 95% 이상이 시청된 횟수"
        },
        "pt-BR": {
          singular: "Número de vezes que mais de 95% de um vídeo foi visualizado"
        },
        "zh-CN": {
          singular: "视频观看超过 95% 的次数"
        }
      }
    }),
    _v64 = (0, _v13.translate)({
      singular: "Net percent completed",
      dictionary: {
        es: {
          singular: "Porcentaje neto completado"
        },
        "de-DE": {
          singular: "Netto-Prozentsatz abgeschlossen"
        },
        "fr-FR": {
          singular: "Pourcentage net achevé"
        },
        "ja-JP": {
          singular: "純完了率"
        },
        "ko-KR": {
          singular: "순 완료율"
        },
        "pt-BR": {
          singular: "Percentual líquido concluído"
        },
        "zh-CN": {
          singular: "完成净百分比"
        }
      }
    }),
    _v65 = (0, _v13.translate)({
      singular: "Percent of the video watched, across all videos viewed, not including rewatched parts",
      dictionary: {
        es: {
          singular: "Porcentaje del video visualizado, en todos los videos visualizados, sin incluir las partes que se han vuelto a ver"
        },
        "de-DE": {
          singular: "Prozentsatz des angesehenen Videos über alle angesehenen Videos hinweg, ohne die erneut angesehene Teile"
        },
        "fr-FR": {
          singular: "Pourcentage de la vidéo qui a été visionné, sur l'ensemble des vidéos regardées, sans inclure les parties revisionnées"
        },
        "ja-JP": {
          singular: "視聴された動画すべての中で、再視聴部分を除く視聴済みの動画の割合"
        },
        "ko-KR": {
          singular: "조회된 모든 동영상의 평균 시청 비율(재시청 부분 제외)"
        },
        "pt-BR": {
          singular: "Porcentagem do vídeo assistida, em todos os vídeos visualizados, sem incluir partes assistidas mais de uma vez"
        },
        "zh-CN": {
          singular: "已观看视频所占百分比，涵盖所有观看过的视频，不包括重看的部分"
        }
      }
    }),
    _v66 = (0, _v13.translate)({
      singular: "Percent of the video that was watched, not including rewatched parts",
      dictionary: {
        es: {
          singular: "Porcentaje del video que se visualizó, sin incluir las partes que se han vuelto a ver"
        },
        "de-DE": {
          singular: "Prozentsatz des Videos, der angesehen wurde, ohne die erneut angesehenen Teile"
        },
        "fr-FR": {
          singular: "Pourcentage de la vidéo qui a été visionné, sans inclure les parties revisionnées"
        },
        "ja-JP": {
          singular: "再視聴部分を除く視聴済みの動画の割合"
        },
        "ko-KR": {
          singular: "시청된 동영상의 비율(재시청 부분 제외)"
        },
        "pt-BR": {
          singular: "Porcentagem do vídeo que foi assistida, sem incluir as partes assistidas mais de uma vez"
        },
        "zh-CN": {
          singular: "已观看视频所占百分比，不包括重看的部分"
        }
      }
    }),
    _v67 = (0, _v13.translate)({
      singular: "Net time completed",
      dictionary: {
        es: {
          singular: "Tiempo neto finalizado"
        },
        "de-DE": {
          singular: "Nettozeit abgeschlossen"
        },
        "fr-FR": {
          singular: "Temps net écoulé"
        },
        "ja-JP": {
          singular: "純完了時間"
        },
        "ko-KR": {
          singular: "순 완료 시간"
        },
        "pt-BR": {
          singular: "Tempo líquido concluído"
        },
        "zh-CN": {
          singular: "完成净用时"
        }
      }
    }),
    _v68 = (0, _v13.translate)({
      singular: "How much was watched across all videos viewed, not including rewatched parts",
      dictionary: {
        es: {
          singular: "Total de tiempo visualizado en todos los videos, sin incluir las partes que se han vuelto a ver"
        },
        "de-DE": {
          singular: "Wie viel wurde über alle angesehenen Videos hinweg angesehen, ohne die erneut angesehenen Teile"
        },
        "fr-FR": {
          singular: "La part visionnée pour l'ensemble des vidéos regardées, sans compter les parties revisionnées"
        },
        "ja-JP": {
          singular: "再視聴した部分を除く視聴済み動画すべての視聴時間の合計"
        },
        "ko-KR": {
          singular: "재생된 모든 동영상의 총 시청 시간(재시청 부분 제외)"
        },
        "pt-BR": {
          singular: "Total de tempo assistido em todos os vídeos visualizados, sem incluir partes assistidas mais de uma vez"
        },
        "zh-CN": {
          singular: "所有观看过的视频观看量，不包括重看的部分"
        }
      }
    }),
    _v69 = (0, _v13.translate)({
      singular: "How much of the video was watched, not including rewatched parts",
      dictionary: {
        es: {
          singular: "Cuánto se vio del video, sin incluir las partes que se han vuelto a ver"
        },
        "de-DE": {
          singular: "Wie viel vom Video angesehen wurde, ohne die erneut angesehenen Teile"
        },
        "fr-FR": {
          singular: "La part de la vidéo qui a été visionnée, sans inclure les parties revisionnées"
        },
        "ja-JP": {
          singular: "再視聴部分を除く動画の視聴時間"
        },
        "ko-KR": {
          singular: "동영상에서 시청한 부분의 길이(재시청 부분 제외)"
        },
        "pt-BR": {
          singular: "Quanto do vídeo foi assistido, sem incluir as partes assistidas mais de uma vez"
        },
        "zh-CN": {
          singular: "视频的观看时长，不包括重看的部分"
        }
      }
    }),
    _v70 = (0, _v13.translate)({
      singular: "Total time watched",
      dictionary: {
        es: {
          singular: "Tiempo total visto"
        },
        "de-DE": {
          singular: "Zeit, die das Video insgesamt angesehen wurde"
        },
        "fr-FR": {
          singular: "Temps de visionnage"
        },
        "ja-JP": {
          singular: "総視聴時間"
        },
        "ko-KR": {
          singular: "총 시청 시간"
        },
        "pt-BR": {
          singular: "Tempo total assistido"
        },
        "zh-CN": {
          singular: "总观看时间"
        }
      }
    }),
    _v71 = (0, _v13.translate)({
      singular: "Sum of total viewing progress, not including rewatched parts",
      dictionary: {
        es: {
          singular: "Suma del progreso total de visualización, sin incluir las partes que se han vuelto a ver"
        },
        "de-DE": {
          singular: "Summe des gesamten Sehfortschritts, ohne erneut gesehene Teile"
        },
        "fr-FR": {
          singular: "Somme de la progression totale du visionnage, sans compter les parties revues"
        },
        "ja-JP": {
          singular: "再視聴した部分を除く視聴状況の合計"
        },
        "ko-KR": {
          singular: "재시청 부분을 제외한 총 시청 진행률 합계"
        },
        "pt-BR": {
          singular: "Soma do progresso total de visualização, sem incluir as partes assistidas mais de uma vez"
        },
        "zh-CN": {
          singular: "总观看进度总和，不包括重复观看的部分"
        }
      }
    }),
    _v72 = (0, _v13.translate)({
      singular: "Back to settings",
      dictionary: {
        es: {
          singular: "Volver a la configuración"
        },
        "de-DE": {
          singular: "Zurück zu den Einstellungen"
        },
        "fr-FR": {
          singular: "Retour aux paramètres"
        },
        "ja-JP": {
          singular: "設定に戻る"
        },
        "ko-KR": {
          singular: "설정으로 돌아가기"
        },
        "pt-BR": {
          singular: "Voltar às configurações"
        },
        "zh-CN": {
          singular: "返回设置"
        }
      }
    });
  (0, _v13.translate)({
    singular: "Workspace",
    dictionary: {
      es: {
        singular: "Espacio de trabajo"
      },
      "fr-FR": {
        singular: "Espace de travail"
      },
      "ja-JP": {
        singular: "ワークスペース"
      },
      "ko-KR": {
        singular: "작업 공간"
      },
      "pt-BR": {
        singular: "Espaço de trabalho"
      },
      "zh-CN": {
        singular: "工作空间"
      }
    }
  });
  let _v73 = (0, _v13.translate)({
      singular: "Back to home",
      dictionary: {
        es: {
          singular: "Volver al inicio"
        },
        "de-DE": {
          singular: "Zurück zur Startseite"
        },
        "fr-FR": {
          singular: "Retour à l'accueil"
        },
        "ja-JP": {
          singular: "ホームに戻る"
        },
        "ko-KR": {
          singular: "홈으로 돌아가기"
        },
        "pt-BR": {
          singular: "Voltar à página inicial"
        },
        "zh-CN": {
          singular: "返回主页"
        }
      }
    }),
    _v74 = (0, _v13.translate)({
      singular: "Reports",
      dictionary: {
        es: {
          singular: "Informes"
        },
        "de-DE": {
          singular: "BERICHTE"
        },
        "fr-FR": {
          singular: "RAPPORTS"
        },
        "ja-JP": {
          singular: "レポート"
        },
        "ko-KR": {
          singular: "리포트"
        },
        "pt-BR": {
          singular: "Relatórios"
        },
        "zh-CN": {
          singular: "报告"
        }
      }
    }),
    _v75 = (0, _v13.translate)({
      singular: "Learn how metrics are calculated",
      dictionary: {
        es: {
          singular: "Aprenda cómo se calculan las métricas"
        },
        "de-DE": {
          singular: "Erfahren, wie Metriken berechnet werden"
        },
        "fr-FR": {
          singular: "Découvrez comment nous calculons les indicateurs"
        },
        "ja-JP": {
          singular: "指標の計算方法を見る"
        },
        "ko-KR": {
          singular: "메트릭 계산 방법 알아보기"
        },
        "pt-BR": {
          singular: "Saiba como as métricas são calculadas"
        },
        "zh-CN": {
          singular: "了解如何计算指标"
        }
      }
    }),
    _v76 = (0, _v13.translate)({
      singular: "View video details",
      dictionary: {
        es: {
          singular: "Ver los detalles del video"
        },
        "de-DE": {
          singular: "Videodetails anzeigen"
        },
        "fr-FR": {
          singular: "Voir les détails"
        },
        "ja-JP": {
          singular: "動画の詳細を見る"
        },
        "ko-KR": {
          singular: "동영상 세부 정보 보기"
        },
        "pt-BR": {
          singular: "Ver detalhes do vídeo"
        },
        "zh-CN": {
          singular: "查看视频详情"
        }
      }
    }),
    _v77 = (0, _v13.translate)({
      singular: "The report will display a graph showing total video engagement for the time period selected.",
      dictionary: {
        es: {
          singular: "El informe mostrará un gráfico que presenta la interacción total del video para el período de tiempo seleccionado."
        },
        "de-DE": {
          singular: "Der Bericht zeigt ein Diagramm mit dem gesamten Video‑Engagement für den ausgewählten Zeitraum."
        },
        "fr-FR": {
          singular: "Le rapport affichera un graphique montrant l'engagement total des vidéos pour la période sélectionnée."
        },
        "ja-JP": {
          singular: "レポートは、選択した期間の動画合計エンゲージメントを示すグラフを表示します。"
        },
        "ko-KR": {
          singular: "보고서에는 선택한 기간 동안의 총 동영상 참여도를 보여주는 그래프가 표시됩니다."
        },
        "pt-BR": {
          singular: "O relatório exibirá um gráfico mostrando o engajamento total dos vídeos para o período selecionado."
        },
        "zh-CN": {
          singular: "报告将显示所选时间段内的视频总参与度图表。"
        }
      }
    }),
    _v78 = (0, _v13.translate)({
      singular: "Engagement is a measure of views, not viewers. In reporting the engagement data, we divide the video into 100 equal parts and count the views in each 100th. There is no distinction between one viewer watching a 100th part 5 times, and five viewers watching it 1 time.",
      dictionary: {
        es: {
          singular: "La interacción es una medida de visualizaciones, no de espectadores. Al informar los datos de interacción, dividimos el video en 100 partes iguales y contamos las visualizaciones en cada centésima. No hay distinción entre un espectador que ve una centésima parte 5 veces y cinco espectadores que la ven 1 vez."
        },
        "de-DE": {
          singular: "Engagement misst Aufrufe, nicht Zuschauer. Zur Darstellung der Engagement‑Daten teilen wir das Video in 100 gleiche Teile und zählen die Aufrufe in jedem Hundertstel. Es wird nicht unterschieden, ob ein Zuschauer ein Hundertstel fünfmal ansieht oder fünf Zuschauer es jeweils einmal ansehen."
        },
        "fr-FR": {
          singular: "L'engagement est une mesure de vues, pas de spectateurs. Pour établir le rapport d'engagement, nous divisons la vidéo en 100 parties égales et comptons les vues dans chaque centième. Il n'y a aucune distinction entre un spectateur regardant un centième 5 fois et cinq spectateurs le regardant 1 fois."
        },
        "ja-JP": {
          singular: "エンゲージメントは視聴回数（views）の指標であり、視聴者数（viewers）ではありません。エンゲージメントデータでは、動画を100等分し、各1%区間ごとの視聴回数をカウントします。ある1%区間を1人の視聴者が5回再生した場合と5人の視聴者がそれぞれ1回再生した場合は区別されません。"
        },
        "ko-KR": {
          singular: "참여도는 조회수(views)를 측정한 값으로, 시청자 수(viewers)를 의미하지 않습니다. 참여 데이터 보고 시 동영상을 100개의 동일한 구간으로 나누어 각 1% 구간의 조회수를 집계합니다. 한 명의 시청자가 어떤 1% 구간을 5회 시청한 것과 다섯 명의 시청자가 각 1회씩 시청한 것은 구분하지 않습니다."
        },
        "pt-BR": {
          singular: "Engajamento é uma medida de visualizações, não de visualizadores. Ao reportar os dados de engajamento, dividimos o vídeo em 100 partes iguais e contamos as visualizações em cada centésimo. Não há distinção entre um visualizador assistindo a um centésimo 5 vezes e cinco visualizadores assistindo a ele 1 vez."
        },
        "zh-CN": {
          singular: "参与度衡量的是观看次数，而非观看者人数。在报告参与度数据时，我们将视频划分为100个相等部分，并统计每个百分点的观看次数。一次观看某一百分点五次的一个观众，与五个各观看一次该百分点的观众，在统计上没有区别。"
        }
      }
    }),
    _v79 = (0, _v13.translate)({
      singular: "Also, engagement is a measure of views at particular points in a video, not video views. Repeated views at a particular point by scrubbing back and watching again will increase engagement at that point but not video views.",
      dictionary: {
        es: {
          singular: "Además, la interacción mide las visualizaciones en puntos concretos del video, no las reproducciones completas del video. Las visualizaciones repetidas en un punto concreto al retroceder y volver a ver aumentarán la interacción en ese punto pero no las reproducciones del video."
        },
        "de-DE": {
          singular: "Außerdem misst Engagement die Aufrufe an bestimmten Stellen eines Videos, nicht die Videoaufrufe. Wiederholtes Zurückspulen und erneutes Abspielen einer bestimmten Stelle erhöht das Engagement an dieser Stelle, aber nicht die Gesamtzahl der Videoaufrufe."
        },
        "fr-FR": {
          singular: "De plus, l'engagement mesure les vues à des points précis d'une vidéo, et non les vues globales de la vidéo. Des visionnages répétés à un point donné, dus à un retour en arrière et à un nouvel affichage, augmenteront l'engagement à cet endroit mais pas le nombre total de vues de la vidéo."
        },
        "ja-JP": {
          singular: "また、エンゲージメントは動画内の特定のポイントにおける視聴回数の指標であり、動画全体の再生回数ではありません。シークして同じ箇所を繰り返し再生すると、そのポイントのエンゲージメントは増えますが、動画全体の再生回数は増えません。"
        },
        "ko-KR": {
          singular: "또한 참여도는 동영상의 특정 시점에서의 조회수를 측정한 것이지 전체 동영상 조회수(video views)가 아닙니다. 되감아서 특정 지점을 반복 시청하면 해당 지점의 참여도는 증가하지만 전체 동영상 조회수는 증가하지 않습니다."
        },
        "pt-BR": {
          singular: "Além disso, engajamento é uma medida de visualizações em pontos específicos do vídeo, não de visualizações totais do vídeo. Visualizações repetidas em um ponto específico ao retroceder e assistir novamente aumentarão o engajamento nesse ponto, mas não as visualizações do vídeo."
        },
        "zh-CN": {
          singular: "此外，参与度衡量的是视频中特定位置的观看次数，而不是视频播放次数。通过拖动进度条回看并重复观看某一位置，会增加该位置的参与度，但不会增加视频播放次数。"
        }
      }
    }),
    _v80 = (0, _v13.translate)({
      singular: "When multiple videos are selected, the report displays the aggregated number of views for each percentage point across all selected videos. To enable comparison across videos of different durations, each video is normalized into 100 percentage segments, and views are aggregated by matching percentage position rather than by absolute time.",
      dictionary: {
        es: {
          singular: "Cuando se seleccionan varios videos, el informe muestra el número agregado de visualizaciones para cada punto porcentual en todos los videos seleccionados. Para permitir la comparación entre videos de distintas duraciones, cada video se normaliza en 100 segmentos porcentuales y las visualizaciones se agregan correspondiendo la posición porcentual en lugar del tiempo absoluto."
        },
        "de-DE": {
          singular: "Wenn mehrere Videos ausgewählt sind, zeigt der Bericht die aggregierte Anzahl der Aufrufe für jeden Prozentpunkt über alle ausgewählten Videos. Um Vergleiche zwischen Videos mit unterschiedlicher Länge zu ermöglichen, wird jedes Video in 100 Prozent‑Segmente normalisiert, und die Aufrufe werden nach übereinstimmender Prozentposition statt nach absoluter Zeit zusammengefasst."
        },
        "fr-FR": {
          singular: "Lorsque plusieurs vidéos sont sélectionnées, le rapport affiche le nombre total de vues agrégé pour chaque point en pourcentage sur l'ensemble des vidéos sélectionnées. Pour permettre la comparaison entre des vidéos de durées différentes, chaque vidéo est normalisée en 100 segments de pourcentage, et les vues sont agrégées en fonction de la position en pourcentage correspondante plutôt qu'en fonction du temps absolu."
        },
        "ja-JP": {
          singular: "複数の動画が選択されている場合、レポートは選択された全動画の各パーセンテージ点ごとの視聴回数を集計して表示します。異なる長さの動画を比較できるように、各動画は100のパーセンテージセグメントに正規化され、絶対時間ではなくパーセンテージ位置を基準に視聴回数が集計されます。"
        },
        "ko-KR": {
          singular: "여러 동영상을 선택하면 보고서에는 선택된 모든 동영상에 대해 각 백분율 지점별로 집계된 조회수가 표시됩니다. 서로 길이가 다른 동영상 간 비교를 가능하게 하기 위해 각 동영상은 100개의 백분율 세그먼트로 정규화되며, 절대 시간 기준이 아니라 백분율 위치를 맞춰 조회수를 합산합니다."
        },
        "pt-BR": {
          singular: "Quando múltiplos vídeos são selecionados, o relatório exibe o número agregado de visualizações para cada ponto percentual em todos os vídeos selecionados. Para permitir a comparação entre vídeos com durações diferentes, cada vídeo é normalizado em 100 segmentos percentuais, e as visualizações são agregadas por posição percentual correspondente em vez de por tempo absoluto."
        },
        "zh-CN": {
          singular: "当选择多个视频时，报告会显示所有选中视频在每个百分比点的汇总观看次数。为便于比较不同时长的视频，每个视频均被标准化为100个百分比段，并按百分比位置（而非绝对时间）聚合观看次数。"
        }
      }
    }),
    _v81 = (0, _v13.translate)({
      singular: "Axis legend",
      dictionary: {
        es: {
          singular: "Leyenda del eje"
        },
        "de-DE": {
          singular: "Achsenbeschriftung"
        },
        "fr-FR": {
          singular: "Légende de l'axe"
        },
        "ja-JP": {
          singular: "軸の凡例"
        },
        "ko-KR": {
          singular: "축 범례"
        },
        "pt-BR": {
          singular: "Legenda do eixo"
        },
        "zh-CN": {
          singular: "坐标轴图例"
        }
      }
    }),
    _v82 = (0, _v13.translate)({
      singular: "Y-axis:",
      dictionary: {
        es: {
          singular: "Eje Y:"
        },
        "de-DE": {
          singular: "Y-Achse:"
        },
        "fr-FR": {
          singular: "Axe Y :"
        },
        "ja-JP": {
          singular: "Y軸："
        },
        "ko-KR": {
          singular: "Y축:"
        },
        "pt-BR": {
          singular: "Eixo Y:"
        },
        "zh-CN": {
          singular: "Y 轴："
        }
      }
    }),
    _v83 = (0, _v13.translate)({
      singular: "X-axis:",
      dictionary: {
        es: {
          singular: "Eje X:"
        },
        "de-DE": {
          singular: "X-Achse:"
        },
        "fr-FR": {
          singular: "Axe X :"
        },
        "ja-JP": {
          singular: "X軸："
        },
        "ko-KR": {
          singular: "X축:"
        },
        "pt-BR": {
          singular: "Eixo X:"
        },
        "zh-CN": {
          singular: "X 轴："
        }
      }
    }),
    _v84 = (0, _v13.translate)({
      singular: "Number of views at each point",
      dictionary: {
        es: {
          singular: "Número de visualizaciones en cada punto"
        },
        "de-DE": {
          singular: "Anzahl der Aufrufe an jedem Punkt"
        },
        "fr-FR": {
          singular: "Nombre de vues à chaque point"
        },
        "ja-JP": {
          singular: "各時点の再生回数"
        },
        "ko-KR": {
          singular: "각 지점의 조회수"
        },
        "pt-BR": {
          singular: "Número de visualizações em cada ponto"
        },
        "zh-CN": {
          singular: "每个点的观看次数"
        }
      }
    }),
    _v85 = (0, _v13.translate)({
      singular: "Percentage point of the video(s)",
      dictionary: {
        es: {
          singular: "Punto porcentual del video(s)"
        },
        "de-DE": {
          singular: "Prozentpunkt des/der Videos"
        },
        "fr-FR": {
          singular: "Point en pourcentage de la vidéo (ou des vidéos)"
        },
        "ja-JP": {
          singular: "動画のパーセンテージ位置"
        },
        "ko-KR": {
          singular: "동영상의 백분율 지점"
        },
        "pt-BR": {
          singular: "Ponto percentual do(s) vídeo(s)"
        },
        "zh-CN": {
          singular: "视频的百分比点"
        }
      }
    }),
    _v86 = (0, _v13.translate)({
      singular: "Average completion rate",
      dictionary: {
        es: {
          singular: "Tasa promedio de finalización"
        },
        "de-DE": {
          singular: "Durchschnittliche Abschlussrate"
        },
        "fr-FR": {
          singular: "Taux moyen d'achèvement"
        },
        "ja-JP": {
          singular: "平均完了率"
        },
        "ko-KR": {
          singular: "평균 완료율"
        },
        "pt-BR": {
          singular: "Taxa média de conclusão"
        },
        "zh-CN": {
          singular: "平均完成率"
        }
      }
    }),
    _v87 = (0, _v13.translate)({
      singular: "% of video",
      dictionary: {
        es: {
          singular: "% del video"
        },
        "de-DE": {
          singular: "% des Videos"
        },
        "fr-FR": {
          singular: "% de la vidéo"
        },
        "ja-JP": {
          singular: "動画の割合 (%)"
        },
        "ko-KR": {
          singular: "동영상의 %"
        },
        "pt-BR": {
          singular: "% do vídeo"
        },
        "zh-CN": {
          singular: "视频百分比"
        }
      }
    }),
    _v88 = (0, _v13.translate)({
      singular: "Video URL",
      dictionary: {
        es: {
          singular: "URL del video"
        },
        "de-DE": {
          singular: "Video-URL"
        },
        "fr-FR": {
          singular: "URL de la vidéo"
        },
        "ja-JP": {
          singular: "動画 URL"
        },
        "ko-KR": {
          singular: "동영상 URL"
        },
        "pt-BR": {
          singular: "URL do Vídeo"
        },
        "zh-CN": {
          singular: "视频 URL"
        }
      }
    }),
    _v89 = (0, _v13.translate)({
      singular: "Video title",
      dictionary: {
        es: {
          singular: "Título del video"
        },
        "de-DE": {
          singular: "Videotitel"
        },
        "fr-FR": {
          singular: "Titre de la vidéo"
        },
        "ja-JP": {
          singular: "動画タイトル"
        },
        "ko-KR": {
          singular: "동영상 제목"
        },
        "pt-BR": {
          singular: "Título do vídeo"
        },
        "zh-CN": {
          singular: "视频标题"
        }
      }
    }),
    _v90 = (0, _v13.translate)({
      singular: "Video upload date",
      dictionary: {
        es: {
          singular: "Fecha de subida del video"
        },
        "de-DE": {
          singular: "Upload-Datum des Videos"
        },
        "fr-FR": {
          singular: "Date de mise en ligne de la vidéo"
        },
        "ja-JP": {
          singular: "動画のアップロード日"
        },
        "ko-KR": {
          singular: "동영상 업로드 날짜"
        },
        "pt-BR": {
          singular: "Data de envio do vídeo"
        },
        "zh-CN": {
          singular: "视频上传日期"
        }
      }
    });
  _v0.s(["T_ALL_DATES", 0, _v55, "T_ALL_DEVICES", 0, _v56, "T_ALL_LANGUAGES", 0, _v61, "T_ALL_REGIONS", 0, _v58, "T_ALL_SOURCES", 0, _v57, "T_ALL_STREAMING_TYPES", 0, _v60, "T_ALL_VIDEOS", 0, _v59, "T_AVG_COMPLETION_RATE", 0, _v86, "T_AVG_PERCENT_WATCHED", 0, _v26, "T_AVG_PERCENT_WATCHED_MEMBER_TOOLTIP", 0, _v28, "T_AVG_PERCENT_WATCHED_TOOLTIP", 0, _v27, "T_AVG_PERCENT_WATCHED_VIDEO_TOOLTIP", 0, _v29, "T_AXIS_LEGEND", 0, _v81, "T_BACK_TO_HOME", 0, _v73, "T_BACK_TO_SETTINGS", 0, _v72, "T_BASIC_UPSELL", 0, _v47, "T_COMPLETIONS", 0, _v62, "T_COMPLETIONS_TOOLTIP", 0, _v63, "T_ENGAGEMENT_INFO_GRAPH", 0, _v77, "T_ENGAGEMENT_INFO_MEASURE", 0, _v78, "T_ENGAGEMENT_INFO_MULTI_VIDEO", 0, _v80, "T_ENGAGEMENT_INFO_SCRUBBING", 0, _v79, "T_ERROR_MESSAGE", 0, () => (0, _v13.translate)({
    singular: "Some data did not load. {A}Refresh{/A} this page and contact support if problem persists.",
    replacements: {
      A: _v0 => (0, _v20.jsx)("a", {
        href: "",
        children: _v0
      })
    },
    dictionary: {
      es: {
        singular: "Algunos datos no se cargaron. {A}Actualice{/A} esta página y póngase en contacto con el servicio de asistencia si el problema persiste."
      },
      "de-DE": {
        singular: "Einige Daten wurden nicht geladen. {A}Aktualisiere{/A} diese Seite und kontaktiere den Support, falls das Problem weiterhin besteht."
      },
      "fr-FR": {
        singular: "Certaines données n'ont pas été chargées. {A}Rechargez{/A} cette page et contactez l'assistance si le problème persiste."
      },
      "ja-JP": {
        singular: "一部のデータが読み込まれませんでした。このページを{A}更新{/A}してください。問題が解決しない場合はサポートにお問い合わせください。"
      },
      "ko-KR": {
        singular: "일부 데이터가 로드되지 않았습니다. 문제가 지속되면 이 페이지를 {A}새로 고침{/A}하고 지원팀에 문의하세요."
      },
      "pt-BR": {
        singular: "Alguns dados não foram carregados. {A}Atualize{/A} esta página e fale com o suporte se o problema persistir."
      },
      "zh-CN": {
        singular: "某些数据未加载。{A}刷新{/A}此页面，如果问题仍然存在，请与支持人员联系。"
      }
    }
  }), "T_EXPORT_CSV_MODAL", 0, _v49, "T_LAST_N_DAYS", 0, _v54, "T_MEMBERS", 0, _v30, "T_NAME", 0, _v31, "T_NET_PERCENT_COMPLETED", 0, _v64, "T_NET_PERCENT_COMPLETED_DETAIL_TOOLTIP", 0, _v66, "T_NET_PERCENT_COMPLETED_TOOLTIP", 0, _v65, "T_NET_TIME_COMPLETED", 0, _v67, "T_NET_TIME_COMPLETED_DETAIL_TOOLTIP", 0, _v69, "T_NET_TIME_COMPLETED_TOOLTIP", 0, _v68, "T_NO_DATA", 0, _v50, "T_OF_PAGES_STYLED", 0, (_v0, _v1, _v2) => (0, _v13.translate)({
    singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}of {totalCount}{/Secondary}",
    plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}of {totalCount}{/Secondary}",
    replacements: {
      Bold: _v0 => (0, _v20.jsx)(_v21.Box, {
        color: "text-primary",
        fontWeight: "500",
        marginRight: "0.25rem",
        children: _v0
      }),
      Secondary: _v0 => (0, _v20.jsx)(_v21.Box, {
        color: "text-secondary",
        fontWeight: "400",
        children: _v0
      }),
      startCount: _v0,
      endCount: _v1,
      totalCount: _v2
    },
    dictionary: {
      es: {
        singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}de {totalCount}{/Secondary}",
        plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}de {totalCount}{/Secondary}"
      },
      "de-DE": {
        singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}von {totalCount}{/Secondary}",
        plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}von {totalCount}{/Secondary}"
      },
      "fr-FR": {
        singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}de {totalCount}{/Secondary}",
        plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}de {totalCount}{/Secondary}"
      },
      "ja-JP": {
        singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}/{totalCount}{/Secondary}件",
        plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}/{totalCount}{/Secondary}件"
      },
      "ko-KR": {
        singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}/ {totalCount}{/Secondary}",
        plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}/ {totalCount}{/Secondary}"
      },
      "pt-BR": {
        singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}de {totalCount}{/Secondary}",
        plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}de {totalCount}{/Secondary}"
      },
      "zh-CN": {
        singular: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}/{totalCount}{/Secondary}",
        plural: "{Bold}{startCount} - {endCount}{/Bold} {Secondary}/{totalCount}{/Secondary}"
      }
    }
  }), "T_PERCENT_OF_VIDEO", 0, _v87, "T_REPORTS_SIDE_NAV", 0, _v74, "T_SELECT_DATE_RANGE", 0, _v53, "T_SNAPSHOT_MEMBERS_COUNT", 0, (_v0, _v1) => {
    let _v2 = (0, _v22.formatNumber)({
      value: _v0,
      locale: _v1
    });
    return (0, _v13.translate)({
      singular: "out of {count} team member",
      plural: "out of {count} team members",
      replacements: {
        count: _v2
      },
      count: _v0,
      dictionary: {
        es: {
          singular: "de {count} miembros del equipo",
          plural: "de {count} miembros del equipo"
        },
        "de-DE": {
          singular: "von {count} Teammitglied",
          plural: "von {count} Teammitgliedern"
        },
        "fr-FR": {
          singular: "sur {count} collaborateur",
          plural: "sur {count} collaborateurs"
        },
        "ja-JP": {
          singular: "{count}人のチームメンバー中",
          plural: "{count}人のチームメンバー中"
        },
        "ko-KR": {
          singular: "팀원 {count}명 중에서",
          plural: "팀원 {count}명 중에서"
        },
        "pt-BR": {
          singular: "de {count} integrante de equipe",
          plural: "de {count} integrantes de equipes"
        },
        "zh-CN": {
          singular: "来自 {count} 名团队成员",
          plural: "共 {count} 名团队成员"
        }
      }
    });
  }, "T_SNAPSHOT_VIDEOS_COUNT", 0, (_v0, _v1) => {
    let _v2 = (0, _v22.formatNumber)({
      value: _v0,
      locale: _v1
    });
    return (0, _v13.translate)({
      singular: "out of {count} video in Library",
      plural: "out of {count} videos in Library",
      replacements: {
        count: _v2
      },
      count: _v0,
      dictionary: {
        es: {
          singular: "de {count} videos en la biblioteca",
          plural: "de {count} videos en la biblioteca"
        },
        "de-DE": {
          singular: "von {count} Video in der Bibliothek",
          plural: "von {count} Videos in der Bibliothek"
        },
        "fr-FR": {
          singular: "sur {count} vidéo de la bibliothèque",
          plural: "sur {count} vidéos de la bibliothèque"
        },
        "ja-JP": {
          singular: "ライブラリ内の{count}本の動画中",
          plural: "ライブラリ内の{count}本の動画中"
        },
        "ko-KR": {
          singular: "라이브러리의 동영상 {count}개 중에서",
          plural: "라이브러리에 있는 동영상 전체 {count}개 중에서"
        },
        "pt-BR": {
          singular: "de {count} vídeo na Biblioteca",
          plural: "de {count} vídeos na Biblioteca"
        },
        "zh-CN": {
          singular: "视频库中共有 {count} 个视频",
          plural: "视频库中共有 {count} 个视频"
        }
      }
    });
  }, "T_STREAMED_ON_DATE", 0, _v0 => (0, _v13.translate)({
    singular: "Streamed on {DATE}",
    replacements: {
      DATE: _v0
    },
    dictionary: {
      es: {
        singular: "Transmitido el {DATE}"
      },
      "de-DE": {
        singular: "Gestreamt auf {DATE}"
      },
      "fr-FR": {
        singular: "Diffusée le {DATE}"
      },
      "ja-JP": {
        singular: "{DATE}でストリーミングされました"
      },
      "ko-KR": {
        singular: "{DATE}에서 스트리밍됩니다."
      },
      "pt-BR": {
        singular: "Transmitido em {DATE}"
      },
      "zh-CN": {
        singular: "已于 {DATE} 流式播放"
      }
    }
  }), "T_TEAM_HC_LINK", 0, _v75, "T_TODAY", 0, _v52, "T_TOTAL", 0, _v32, "T_TOTAL_TIME_WATCHED", 0, _v70, "T_TOTAL_TIME_WATCHED_TOOLTIP", 0, _v71, "T_TOTAL_VIEWS", 0, _v33, "T_TOTAL_VIEWS_MEMBER_TOOLTIP", 0, _v36, "T_TOTAL_VIEWS_TOOLTIP", 0, _v34, "T_TOTAL_VIEWS_VIDEO_TOOLTIP", 0, _v35, "T_UPGRADE", 0, _v48, "T_UPLOADED_DATE", 0, _v0 => (0, _v13.translate)({
    singular: "Uploaded {DATE}",
    replacements: {
      DATE: _v0
    },
    dictionary: {
      es: {
        singular: "Subido {DATE}"
      },
      "de-DE": {
        singular: "Hochgeladen {DATE}"
      },
      "fr-FR": {
        singular: "Mise en ligne {DATE}"
      },
      "ja-JP": {
        singular: "{DATE} アップロード済み"
      },
      "ko-KR": {
        singular: "{DATE} 업로드"
      },
      "pt-BR": {
        singular: "Carregou {DATE}"
      },
      "zh-CN": {
        singular: "{DATE} 已上传"
      }
    }
  }), "T_VIDEOS", 0, _v37, "T_VIDEOS_VIEWED", 0, _v45, "T_VIDEOS_VIEWED_MEMBER_TOOLTIP", 0, _v46, "T_VIDEOS_VIEWED_TOOLTIP", 0, _v44, "T_VIDEO_TITLE", 0, _v89, "T_VIDEO_UPLOAD_DATE", 0, _v90, "T_VIDEO_URL", 0, _v88, "T_VIEWERS", 0, _v41, "T_VIEWERS_TOOLTIP", 0, _v42, "T_VIEWERS_VIDEO_TOOLTIP", 0, _v43, "T_VIEWS", 0, _v39, "T_VIEWS_AT_POINT", 0, (_v0, _v1, _v2) => (0, _v13.translate)({
    singular: "{VIEWS} views recorded at the {PERCENT}% point of the video",
    plural: "{VIEWS} views recorded at the {PERCENT}% point of the videos",
    replacements: {
      VIEWS: _v0,
      PERCENT: _v1
    },
    count: _v2,
    dictionary: {
      es: {
        singular: "Se registró {VIEWS} vista en el punto {PERCENT}% del video",
        plural: "Se registraron {VIEWS} vistas en el punto {PERCENT}% del video"
      },
      "de-DE": {
        singular: "{VIEWS} Aufruf wurde am {PERCENT}% Punkt des Videos erfasst",
        plural: "{VIEWS} Aufrufe wurden am {PERCENT}% Punkt des Videos erfasst"
      },
      "fr-FR": {
        singular: "{VIEWS} vue enregistrée à {PERCENT}% de la vidéo",
        plural: "{VIEWS} vues enregistrées à {PERCENT}% de la vidéo"
      },
      "ja-JP": {
        singular: "{VIEWS} 回の再生が動画の {PERCENT}% の地点で記録されました",
        plural: "{VIEWS} 回の再生が複数の動画の {PERCENT}% の地点で記録されました"
      },
      "ko-KR": {
        singular: "{VIEWS} 조회수가 비디오의 {PERCENT}% 지점에서 기록되었습니다",
        plural: "{VIEWS} 조회수가 비디오들의 {PERCENT}% 지점에서 기록되었습니다"
      },
      "pt-BR": {
        singular: "{VIEWS} visualização registrada no ponto de {PERCENT}% do vídeo",
        plural: "{VIEWS} visualizações registradas no ponto de {PERCENT}% dos vídeos"
      },
      "zh-CN": {
        singular: "{VIEWS} 次观看记录在视频的 {PERCENT}% 处",
        plural: "{VIEWS} 次观看记录在视频的 {PERCENT}% 处"
      }
    }
  }), "T_VIEWS_TOOLTIP", 0, _v40, "T_VIEW_BREAKDOWN_BY", 0, _v38, "T_VIEW_BY_DATE", 0, _v24, "T_VIEW_BY_VIDEO", 0, _v25, "T_VIEW_VIDEO_DETAILS", 0, _v76, "T_X_AXIS", 0, _v83, "T_X_AXIS_LABEL", 0, _v85, "T_YESTERDAY", 0, _v51, "T_Y_AXIS", 0, _v82, "T_Y_AXIS_LABEL", 0, _v84], 0);
  let _v91 = (0, _v13.translate)({
    singular: "Report Total",
    dictionary: {
      es: {
        singular: "Total del informe"
      },
      "de-DE": {
        singular: "Gesamtbericht"
      },
      "fr-FR": {
        singular: "Total"
      },
      "ja-JP": {
        singular: "レポート合計"
      },
      "ko-KR": {
        singular: "리포트 합계"
      },
      "pt-BR": {
        singular: "Relatórios Totais"
      },
      "zh-CN": {
        singular: "报告总计"
      }
    }
  });
  var _v92 = ((_v7 = {})[_v7.NOT_SORTABLE = 0] = "NOT_SORTABLE", _v7[_v7.SORTABLE = 1] = "SORTABLE", _v7[_v7.ASCENDING_ORDER = 2] = "ASCENDING_ORDER", _v7[_v7.DECENDING_ORDER = 3] = "DECENDING_ORDER", _v7);
  let _v93 = "dashboard",
    _v94 = "date",
    _v95 = "region",
    _v96 = "source",
    _v97 = "device",
    _v98 = "video",
    _v99 = "engagement",
    _v100 = "bandwidth",
    _v101 = "team",
    _v102 = "video_rating";
  _v17.VIDEO, _v17.DATE, _v17.REGION, _v17.SOURCE, _v17.DEVICE;
  let _v103 = {
      [_v17.VIDEO]: "content",
      [_v17.DATE]: "days",
      [_v17.REGION]: "countries",
      [_v17.SOURCE]: "embed_domains",
      [_v17.DEVICE]: "device_types",
      [_v17.VIDEO_RATING]: "content"
    },
    _v104 = {
      [_v18.SOURCE_URL]: "embed_domains",
      [_v18.DEVICE]: "device_types",
      [_v18.REGION]: "countries",
      [_v18.STREAMING_TYPE]: "streaming_types",
      [_v18.CONTENT]: "content",
      [_v18.MEMBER]: "member",
      [_v18.TEXT_LANGUAGE]: "text_track_languages",
      [_v18.TEXT_TYPE_AND_PROVENANCE]: "text_track_types_and_provenances",
      [_v18.AUDIO_LANGUAGE]: "audio_track_languages",
      [_v18.AUDIO_TYPE_AND_PROVENANCE]: "audio_track_types_and_provenances",
      [_v18.WORKSPACES]: "workspaces",
      [_v18.CUSTOM_METADATA]: "custom_metadata"
    },
    _v105 = {
      [_v17.DASHBOARD]: _v19.VIMEO,
      [_v17.VIDEO]: _v19.VIMEO,
      [_v17.ENGAGEMENT]: _v19.VIMEO,
      [_v17.DATE]: _v19.VIMEO,
      [_v17.REGION]: _v19.VIMEO,
      [_v17.SOURCE]: _v19.VIMEO,
      [_v17.DEVICE]: _v19.VIMEO,
      [_v17.STREAMING_TYPE]: _v19.VIMEO,
      [_v17.BANDWIDTH_DATE]: _v19.BANDWIDTH,
      [_v17.BANDWIDTH_VIDEO]: _v19.BANDWIDTH,
      [_v17.SINGLE_VIDEO]: _v19.VIMEO,
      [_v17.TEAM]: _v19.VIMEO,
      [_v17.VIDEO_RATING]: _v19.VIMEO
    };
  _v17.BANDWIDTH_VIDEO, _v17.BANDWIDTH_DATE;
  let _v106 = {
      division: "past",
      group: "days",
      count: 365
    },
    _v107 = [{
      label: _v51,
      value: "yesterday"
    }, {
      label: _v52,
      value: "today"
    }, {
      label: _v54(7),
      value: {
        division: "past",
        group: "days",
        count: 7
      }
    }, {
      label: _v54(30),
      value: {
        division: "past",
        group: "days",
        count: 30
      }
    }, {
      label: _v54(365),
      value: _v106
    }],
    _v108 = [{
      label: _v54(365),
      value: _v106
    }],
    _v109 = {
      [_v17.DASHBOARD]: _v107,
      [_v17.DATE]: _v107,
      [_v17.VIDEO]: _v107,
      [_v17.ENGAGEMENT]: _v107,
      [_v17.REGION]: _v107,
      [_v17.SOURCE]: _v107,
      [_v17.DEVICE]: _v107,
      [_v17.BANDWIDTH_DATE]: _v108,
      [_v17.STREAMING_TYPE]: _v107,
      [_v17.BANDWIDTH_VIDEO]: _v107,
      [_v17.SINGLE_VIDEO]: _v107,
      [_v17.TEAM]: _v107,
      [_v17.VIDEO_RATING]: _v107
    },
    _v110 = {
      [_v93]: (0, _v13.translate)({
        singular: "Dashboard",
        dictionary: {
          es: {
            singular: "Panel"
          },
          "fr-FR": {
            singular: "Tableau de bord"
          },
          "ja-JP": {
            singular: "ダッシュボード"
          },
          "ko-KR": {
            singular: "대시보드"
          },
          "pt-BR": {
            singular: "Painel de Controle"
          },
          "zh-CN": {
            singular: "仪表板"
          }
        }
      }),
      [_v94]: (0, _v13.translate)({
        singular: "Date Report",
        dictionary: {
          es: {
            singular: "Informe por fecha"
          },
          "de-DE": {
            singular: "Datumsbericht"
          },
          "fr-FR": {
            singular: "Rapport par date"
          },
          "ja-JP": {
            singular: "日付レポート"
          },
          "ko-KR": {
            singular: "날짜 리포트"
          },
          "pt-BR": {
            singular: "Relatório de Datas"
          },
          "zh-CN": {
            singular: "日期报告"
          }
        }
      }),
      [_v95]: (0, _v13.translate)({
        singular: "Region Report",
        dictionary: {
          es: {
            singular: "Informe por región"
          },
          "de-DE": {
            singular: "Regionsbericht"
          },
          "fr-FR": {
            singular: "Rapport par région"
          },
          "ja-JP": {
            singular: "地域レポート"
          },
          "ko-KR": {
            singular: "지역 리포트"
          },
          "pt-BR": {
            singular: "Relatório de Região"
          },
          "zh-CN": {
            singular: "区域报告"
          }
        }
      }),
      [_v97]: (0, _v13.translate)({
        singular: "Device Report",
        dictionary: {
          es: {
            singular: "Informe por dispositivo"
          },
          "de-DE": {
            singular: "Gerätebericht"
          },
          "fr-FR": {
            singular: "Rapport par appareil"
          },
          "ja-JP": {
            singular: "デバイスレポート"
          },
          "ko-KR": {
            singular: "기기 리포트"
          },
          "pt-BR": {
            singular: "Relatório de Dispositivo"
          },
          "zh-CN": {
            singular: "设备报告"
          }
        }
      }),
      [_v96]: (0, _v13.translate)({
        singular: "Source URL Report",
        dictionary: {
          es: {
            singular: "Informe por URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL-Bericht"
          },
          "fr-FR": {
            singular: "Rapport par URL source"
          },
          "ja-JP": {
            singular: "ソースURLレポート"
          },
          "ko-KR": {
            singular: "소스 URL 리포트"
          },
          "pt-BR": {
            singular: "Relatório de URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL 报告"
          }
        }
      }),
      [_v98]: (0, _v13.translate)({
        singular: "Video Report",
        dictionary: {
          es: {
            singular: "Informe por video"
          },
          "de-DE": {
            singular: "Video-Bericht"
          },
          "fr-FR": {
            singular: "Rapport par vidéo"
          },
          "ja-JP": {
            singular: "動画レポート"
          },
          "ko-KR": {
            singular: "동영상 리포트"
          },
          "pt-BR": {
            singular: "Relatório de Vídeo"
          },
          "zh-CN": {
            singular: "视频报告"
          }
        }
      }),
      [_v99]: (0, _v13.translate)({
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
      [_v100]: (0, _v13.translate)({
        singular: "Bandwidth Report",
        dictionary: {
          es: {
            singular: "Informe de ancho de banda"
          },
          "de-DE": {
            singular: "Bandbreitenbericht"
          },
          "fr-FR": {
            singular: "Rapport de bande passante"
          },
          "ja-JP": {
            singular: "帯域幅レポート"
          },
          "ko-KR": {
            singular: "대역폭 리포트"
          },
          "pt-BR": {
            singular: "Relatório de Largura de Banda"
          },
          "zh-CN": {
            singular: "带宽报告"
          }
        }
      }),
      BANDWIDTH_VIDEO: (0, _v13.translate)({
        singular: "Bandwidth by video",
        dictionary: {
          es: {
            singular: "Ancho de banda por video"
          },
          "de-DE": {
            singular: "Bandbreite nach Video"
          },
          "fr-FR": {
            singular: "Bande passante par vidéo"
          },
          "ja-JP": {
            singular: "動画ごとの帯域幅"
          },
          "ko-KR": {
            singular: "동영상별 대역폭"
          },
          "pt-BR": {
            singular: "Largura de banda por vídeo"
          },
          "zh-CN": {
            singular: "按视频划分的带宽"
          }
        }
      }),
      [_v101]: (0, _v13.translate)({
        singular: "Team Report",
        dictionary: {
          es: {
            singular: "Informe del equipo"
          },
          "de-DE": {
            singular: "Team-Bericht"
          },
          "fr-FR": {
            singular: "Rapport d'équipe"
          },
          "ja-JP": {
            singular: "チームレポート"
          },
          "ko-KR": {
            singular: "팀 보고서"
          },
          "pt-BR": {
            singular: "Relatório da equipe"
          },
          "zh-CN": {
            singular: "团队报告"
          }
        }
      }),
      [_v102]: (0, _v13.translate)({
        singular: "Video Rating",
        dictionary: {
          es: {
            singular: "Calificación del vídeo"
          },
          "de-DE": {
            singular: "Video-Bewertung"
          },
          "fr-FR": {
            singular: "Évaluation de la vidéo"
          },
          "ja-JP": {
            singular: "動画の評価"
          },
          "ko-KR": {
            singular: "동영상 평점"
          },
          "pt-BR": {
            singular: "Avaliação do vídeo"
          },
          "zh-CN": {
            singular: "视频评分"
          }
        }
      })
    },
    _v111 = "shares",
    _v112 = "unique_loads",
    _v113 = "unique_viewers",
    _v114 = "averageviewduration",
    _v115 = "averageviewpercentage",
    _v116 = "totalviewduration",
    _v117 = "liveBandwidth",
    _v118 = "videoBandwidth",
    _v119 = "combinedBandwidth",
    _v120 = "meanSecondsWatched",
    _v121 = "totalSecondsWatched",
    _v122 = "meanPercentWatched",
    _v123 = "totalSecondsWatchedIncludingRepeats";
  var _v124 = ((_v8 = {})[_v8.mobile = 0] = "mobile", _v8[_v8.tablet = 1] = "tablet", _v8[_v8.desktop = 2] = "desktop", _v8[_v8.tv = 3] = "tv", _v8[_v8.other = 4] = "other", _v8[_v8.unknown = 5] = "unknown", _v8);
  let _v125 = {
    0: (0, _v13.translate)({
      singular: "Phone",
      dictionary: {
        es: {
          singular: "Teléfono"
        },
        "de-DE": {
          singular: "Telefon"
        },
        "fr-FR": {
          singular: "téléphonique"
        },
        "ja-JP": {
          singular: "電話"
        },
        "ko-KR": {
          singular: "전화"
        },
        "pt-BR": {
          singular: "Telefone"
        },
        "zh-CN": {
          singular: "手机"
        }
      }
    }),
    1: (0, _v13.translate)({
      singular: "Tablet",
      dictionary: {
        es: {
          singular: "Tableta"
        },
        "fr-FR": {
          singular: "Tablette"
        },
        "ja-JP": {
          singular: "タブレット"
        },
        "ko-KR": {
          singular: "태블릿"
        },
        "zh-CN": {
          singular: "平板电脑"
        }
      }
    }),
    2: (0, _v13.translate)({
      singular: "Desktop",
      dictionary: {
        es: {
          singular: "Escritorio"
        },
        "ja-JP": {
          singular: "デスクトップ"
        },
        "ko-KR": {
          singular: "데스크탑"
        },
        "pt-BR": {
          singular: "Computadores de mesa"
        },
        "zh-CN": {
          singular: "桌面"
        }
      }
    }),
    3: (0, _v13.translate)({
      singular: "TV apps",
      dictionary: {
        es: {
          singular: "Apps para televisores"
        },
        "de-DE": {
          singular: "TV-Apps"
        },
        "fr-FR": {
          singular: "Apps pour TV"
        },
        "ja-JP": {
          singular: "TV アプリ"
        },
        "ko-KR": {
          singular: "TV 앱"
        },
        "pt-BR": {
          singular: "Aplicativos para TV"
        },
        "zh-CN": {
          singular: "电视应用程序"
        }
      }
    }),
    4: (0, _v13.translate)({
      singular: "Other",
      dictionary: {
        es: {
          singular: "Otro"
        },
        "de-DE": {
          singular: "Sonstiges"
        },
        "fr-FR": {
          singular: "Autre"
        },
        "ja-JP": {
          singular: "その他"
        },
        "ko-KR": {
          singular: "기타"
        },
        "pt-BR": {
          singular: "Outro"
        },
        "zh-CN": {
          singular: "其他"
        }
      }
    }),
    5: (0, _v13.translate)({
      singular: "Unknown",
      dictionary: {
        es: {
          singular: "Desconocido"
        },
        "de-DE": {
          singular: "Unbekannt"
        },
        "fr-FR": {
          singular: "Inconnu"
        },
        "ja-JP": {
          singular: "不明"
        },
        "ko-KR": {
          singular: "알 수 없음"
        },
        "pt-BR": {
          singular: "Desconhecido"
        },
        "zh-CN": {
          singular: "未知"
        }
      }
    })
  };
  (0, _v13.translate)({
    singular: "years",
    dictionary: {
      es: {
        singular: "años"
      },
      "de-DE": {
        singular: "Jahre"
      },
      "fr-FR": {
        singular: "années"
      },
      "ja-JP": {
        singular: "年"
      },
      "ko-KR": {
        singular: "년"
      },
      "pt-BR": {
        singular: "anos"
      },
      "zh-CN": {
        singular: "年"
      }
    }
  }), (0, _v13.translate)({
    singular: "days",
    dictionary: {
      es: {
        singular: "días"
      },
      "de-DE": {
        singular: "Tage"
      },
      "fr-FR": {
        singular: "jours"
      },
      "ja-JP": {
        singular: "日"
      },
      "ko-KR": {
        singular: "일"
      },
      "pt-BR": {
        singular: "dias"
      },
      "zh-CN": {
        singular: "天"
      }
    }
  }), (0, _v13.translate)({
    singular: "hours",
    dictionary: {
      es: {
        singular: "horas"
      },
      "de-DE": {
        singular: "Stunden"
      },
      "fr-FR": {
        singular: "heures"
      },
      "ja-JP": {
        singular: "時間"
      },
      "ko-KR": {
        singular: "시간"
      },
      "pt-BR": {
        singular: "horas"
      },
      "zh-CN": {
        singular: "小时"
      }
    }
  }), (0, _v13.translate)({
    singular: "minutes",
    dictionary: {
      es: {
        singular: "minutos"
      },
      "de-DE": {
        singular: "Minuten"
      },
      "ja-JP": {
        singular: "分"
      },
      "ko-KR": {
        singular: "분"
      },
      "pt-BR": {
        singular: "minutos"
      },
      "zh-CN": {
        singular: "分钟"
      }
    }
  }), (0, _v13.translate)({
    singular: "seconds",
    dictionary: {
      es: {
        singular: "segundos"
      },
      "de-DE": {
        singular: "sekunden"
      },
      "fr-FR": {
        singular: "secondes"
      },
      "ja-JP": {
        singular: "秒"
      },
      "ko-KR": {
        singular: "초"
      },
      "pt-BR": {
        singular: "segundos"
      },
      "zh-CN": {
        singular: "秒"
      }
    }
  });
  let _v126 = {
      tv: (0, _v13.translate)({
        singular: "TV apps",
        dictionary: {
          es: {
            singular: "Apps para televisores"
          },
          "de-DE": {
            singular: "TV-Apps"
          },
          "fr-FR": {
            singular: "Apps pour TV"
          },
          "ja-JP": {
            singular: "TV アプリ"
          },
          "ko-KR": {
            singular: "TV 앱"
          },
          "pt-BR": {
            singular: "Aplicativos para TV"
          },
          "zh-CN": {
            singular: "电视应用程序"
          }
        }
      }),
      ie: (0, _v13.translate)({
        singular: "IE",
        dictionary: {
          "pt-BR": {
            singular: "Internet Explorer"
          }
        }
      }),
      ios: (0, _v13.translate)("iOS"),
      "mac os x": (0, _v13.translate)("Mac OS X"),
      bb10: (0, _v13.translate)("BB10"),
      "apple tv": (0, _v13.translate)("Apple TV"),
      "generic smarttv": (0, _v13.translate)({
        singular: "Generic Smart TV",
        dictionary: {
          es: {
            singular: "Televisores inteligentes"
          },
          "de-DE": {
            singular: "Typischer Smart TV"
          },
          "fr-FR": {
            singular: "TV connectées standard"
          },
          "ja-JP": {
            singular: "基本的なスマートテレビ"
          },
          "ko-KR": {
            singular: "일반 스마트 TV"
          },
          "pt-BR": {
            singular: "Smart TV genérica"
          },
          "zh-CN": {
            singular: "通用智能电视"
          }
        }
      }),
      "pivos xios xs": (0, _v13.translate)("Pivos XIOS XS"),
      "minix neo x8h plus": (0, _v13.translate)({
        singular: "Minix NEO X8-H Plus",
        dictionary: {
          "ja-JP": {
            singular: "Minix NEO x8-H Plus"
          }
        }
      }),
      "roku dvp": (0, _v13.translate)("Roku DVP"),
      "timing power rk3188": (0, _v13.translate)({
        singular: "Timing Power RK3188",
        dictionary: {
          "de-DE": {
            singular: "Timing Power-RK3188"
          }
        }
      })
    },
    _v127 = {
      plays: (0, _v13.translate)({
        singular: "Views",
        dictionary: {
          es: {
            singular: "Vistas"
          },
          "de-DE": {
            singular: "Ansichten"
          },
          "fr-FR": {
            singular: "Vues"
          },
          "ja-JP": {
            singular: "視聴数"
          },
          "ko-KR": {
            singular: "조회 수"
          },
          "pt-BR": {
            singular: "Visualizações"
          },
          "zh-CN": {
            singular: "观看量"
          }
        }
      }),
      finishes: (0, _v13.translate)({
        singular: "Finishes",
        dictionary: {
          es: {
            singular: "Finalizaciones"
          },
          "de-DE": {
            singular: "Abgespielt"
          },
          "fr-FR": {
            singular: "Lectures complètes"
          },
          "ja-JP": {
            singular: "全編鑑賞"
          },
          "ko-KR": {
            singular: "시청 완료"
          },
          "pt-BR": {
            singular: "Reproduções Finalizadas"
          },
          "zh-CN": {
            singular: "完播"
          }
        }
      }),
      likes: (0, _v13.translate)({
        singular: "Likes",
        dictionary: {
          es: {
            singular: "Me gusta"
          },
          "fr-FR": {
            singular: "J'aime"
          },
          "ja-JP": {
            singular: "いいね"
          },
          "ko-KR": {
            singular: "좋아하기"
          },
          "pt-BR": {
            singular: "Curtidas"
          },
          "zh-CN": {
            singular: "赞"
          }
        }
      }),
      comments: (0, _v13.translate)({
        singular: "Comments",
        dictionary: {
          es: {
            singular: "Comentarios"
          },
          "de-DE": {
            singular: "Kommentare"
          },
          "fr-FR": {
            singular: "Commentaires"
          },
          "ja-JP": {
            singular: "コメント"
          },
          "ko-KR": {
            singular: "소감"
          },
          "pt-BR": {
            singular: "Comentários"
          },
          "zh-CN": {
            singular: "评论"
          }
        }
      }),
      loads: (0, _v13.translate)({
        singular: "Impressions",
        dictionary: {
          es: {
            singular: "Impresiones"
          },
          "de-DE": {
            singular: "Impressionen"
          },
          "fr-FR": {
            singular: "Chargements"
          },
          "ja-JP": {
            singular: "インプレッション"
          },
          "ko-KR": {
            singular: "노출 수"
          },
          "pt-BR": {
            singular: "Impressões"
          },
          "zh-CN": {
            singular: "展示量"
          }
        }
      }),
      [_v112]: (0, _v13.translate)({
        singular: "Unique impressions",
        dictionary: {
          es: {
            singular: "Impresiones únicas"
          },
          "de-DE": {
            singular: "Eindeutige Impressionen"
          },
          "fr-FR": {
            singular: "Chargements uniques"
          },
          "ja-JP": {
            singular: "ユニークインプレッション"
          },
          "ko-KR": {
            singular: "순 노출 수"
          },
          "pt-BR": {
            singular: "Impressões únicas"
          },
          "zh-CN": {
            singular: "独特印象"
          }
        }
      }),
      [_v113]: (0, _v13.translate)({
        singular: "Unique viewers",
        dictionary: {
          es: {
            singular: "Espectadores únicos"
          },
          "de-DE": {
            singular: "Eindeutige Zuschauende"
          },
          "fr-FR": {
            singular: "Spectateurs uniques"
          },
          "ja-JP": {
            singular: "ユニーク視聴者数"
          },
          "ko-KR": {
            singular: "순 시청자 수"
          },
          "pt-BR": {
            singular: "Visualizações únicas"
          },
          "zh-CN": {
            singular: "独立观众数"
          }
        }
      }),
      download: (0, _v13.translate)({
        singular: "Download",
        dictionary: {
          es: {
            singular: "Descargar"
          },
          "de-DE": {
            singular: "Herunterladen"
          },
          "fr-FR": {
            singular: "Télécharger "
          },
          "ja-JP": {
            singular: "ダウンロード"
          },
          "ko-KR": {
            singular: "다운로드"
          },
          "pt-BR": {
            singular: "Baixar"
          },
          "zh-CN": {
            singular: "下载"
          }
        }
      }),
      downloads: (0, _v13.translate)({
        singular: "Downloads",
        dictionary: {
          es: {
            singular: "Descargas"
          },
          "fr-FR": {
            singular: "Téléchargements"
          },
          "ja-JP": {
            singular: "ダウンロード"
          },
          "ko-KR": {
            singular: "다운로드"
          },
          "zh-CN": {
            singular: "下载"
          }
        }
      }),
      GROUP_TYPE_EMBED_PATH: (0, _v13.translate)({
        singular: "Source URL",
        dictionary: {
          es: {
            singular: "URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL"
          },
          "fr-FR": {
            singular: "URL source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL"
          }
        }
      }),
      GROUP_TYPE_EMBED_DOMAIN: (0, _v13.translate)({
        singular: "Source URL",
        dictionary: {
          es: {
            singular: "URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL"
          },
          "fr-FR": {
            singular: "URL source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL"
          }
        }
      }),
      GROUP_TYPE_DEVICE_TYPE: (0, _v13.translate)({
        singular: "Device",
        dictionary: {
          es: {
            singular: "Dispositivo"
          },
          "de-DE": {
            singular: "Gerät"
          },
          "fr-FR": {
            singular: "Appareil"
          },
          "ja-JP": {
            singular: "デバイス"
          },
          "ko-KR": {
            singular: "기기"
          },
          "pt-BR": {
            singular: "Dispositivo"
          },
          "zh-CN": {
            singular: "设备"
          }
        }
      }),
      device: (0, _v13.translate)({
        singular: "Device",
        dictionary: {
          es: {
            singular: "Dispositivo"
          },
          "de-DE": {
            singular: "Gerät"
          },
          "fr-FR": {
            singular: "Appareil"
          },
          "ja-JP": {
            singular: "デバイス"
          },
          "ko-KR": {
            singular: "기기"
          },
          "pt-BR": {
            singular: "Dispositivo"
          },
          "zh-CN": {
            singular: "设备"
          }
        }
      }),
      watched: (0, _v13.translate)({
        singular: "Avg. % watched",
        dictionary: {
          es: {
            singular: "% promedio visto"
          },
          "de-DE": {
            singular: "% angeschaut (Durchschnitt)"
          },
          "fr-FR": {
            singular: "Moy. de % regardé"
          },
          "ja-JP": {
            singular: "平均視聴率"
          },
          "ko-KR": {
            singular: "평균 시청 %"
          },
          "pt-BR": {
            singular: "% Média assistida"
          },
          "zh-CN": {
            singular: "平均观看百分比"
          }
        }
      }),
      dashboard: (0, _v13.translate)({
        singular: "Dashboard",
        dictionary: {
          es: {
            singular: "Panel"
          },
          "fr-FR": {
            singular: "Tableau de bord"
          },
          "ja-JP": {
            singular: "ダッシュボード"
          },
          "ko-KR": {
            singular: "대시보드"
          },
          "pt-BR": {
            singular: "Painel de Controle"
          },
          "zh-CN": {
            singular: "仪表板"
          }
        }
      }),
      date: (0, _v13.translate)({
        singular: "Date",
        dictionary: {
          es: {
            singular: "Fecha"
          },
          "de-DE": {
            singular: "Datum"
          },
          "fr-FR": {
            singular: "Date "
          },
          "ja-JP": {
            singular: "日付"
          },
          "ko-KR": {
            singular: "날짜"
          },
          "pt-BR": {
            singular: "Data"
          },
          "zh-CN": {
            singular: "日期"
          }
        }
      }),
      region: (0, _v13.translate)({
        singular: "Region",
        dictionary: {
          es: {
            singular: "Región"
          },
          "fr-FR": {
            singular: "Région"
          },
          "ja-JP": {
            singular: "地域"
          },
          "ko-KR": {
            singular: "지역"
          },
          "pt-BR": {
            singular: "Região"
          },
          "zh-CN": {
            singular: "区域"
          }
        }
      }),
      video: (0, _v13.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      engagement: (0, _v13.translate)({
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
      platform: (0, _v13.translate)({
        singular: "Platform",
        dictionary: {
          es: {
            singular: "Plataforma"
          },
          "de-DE": {
            singular: "Plattform"
          },
          "fr-FR": {
            singular: "Plateforme"
          },
          "ja-JP": {
            singular: "プラットフォーム"
          },
          "ko-KR": {
            singular: "플랫폼"
          },
          "pt-BR": {
            singular: "Plataforma"
          },
          "zh-CN": {
            singular: "平台"
          }
        }
      }),
      source: (0, _v13.translate)({
        singular: "Source",
        dictionary: {
          es: {
            singular: "Fuente"
          },
          "de-DE": {
            singular: "Quelle"
          },
          "ja-JP": {
            singular: "ソース"
          },
          "ko-KR": {
            singular: "소스"
          },
          "pt-BR": {
            singular: "Fonte"
          },
          "zh-CN": {
            singular: "来源"
          }
        }
      }),
      type: (0, _v13.translate)({
        singular: "Type",
        dictionary: {
          es: {
            singular: "Tipo"
          },
          "de-DE": {
            singular: "Typ"
          },
          "ja-JP": {
            singular: "タイプ"
          },
          "ko-KR": {
            singular: "유형"
          },
          "pt-BR": {
            singular: "Tipo"
          },
          "zh-CN": {
            singular: "类型"
          }
        }
      }),
      streamingType: (0, _v13.translate)({
        singular: "Streaming type",
        dictionary: {
          es: {
            singular: "Tipo de transmisión"
          },
          "de-DE": {
            singular: "Streamingtyp"
          },
          "fr-FR": {
            singular: "Type de streaming"
          },
          "ja-JP": {
            singular: "ストリーミングタイプ"
          },
          "ko-KR": {
            singular: "스트리밍 유형"
          },
          "pt-BR": {
            singular: "Tipo de transmissão"
          },
          "zh-CN": {
            singular: "直播类型"
          }
        }
      }),
      subtitlesAndCaptions: (0, _v13.translate)({
        singular: "Subtitles and captions",
        dictionary: {
          es: {
            singular: "Subtítulos y leyendas"
          },
          "de-DE": {
            singular: "Überschriften und Untertitel"
          },
          "fr-FR": {
            singular: "Sous-titres et légendes"
          },
          "ja-JP": {
            singular: "字幕とキャプション"
          },
          "ko-KR": {
            singular: "자막 및 캡션"
          },
          "pt-BR": {
            singular: "Legendas e closed captions (cc)"
          }
        }
      }),
      audioTrack: (0, _v13.translate)({
        singular: "Audio track",
        dictionary: {
          es: {
            singular: "Pista de audio"
          },
          "de-DE": {
            singular: "Audiospur"
          },
          "fr-FR": {
            singular: "Piste audio"
          },
          "ja-JP": {
            singular: "オーディオトラック"
          },
          "ko-KR": {
            singular: "audiotrack"
          },
          "pt-BR": {
            singular: "Faixa de áudio"
          },
          "zh-CN": {
            singular: "音轨"
          }
        }
      }),
      live: (0, _v13.translate)({
        singular: "Live Events",
        dictionary: {
          es: {
            singular: "Eventos en vivo"
          },
          "de-DE": {
            singular: "Live-Events"
          },
          "fr-FR": {
            singular: "Événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベント"
          },
          "ko-KR": {
            singular: "라이브 이벤트"
          },
          "pt-BR": {
            singular: "Eventos ao vivo"
          },
          "zh-CN": {
            singular: "直播活动"
          }
        }
      }),
      combinedBandwidth: (0, _v13.translate)({
        singular: "Total",
        dictionary: {
          "de-DE": {
            singular: "Insgesamt"
          },
          "ja-JP": {
            singular: "合計"
          },
          "ko-KR": {
            singular: "총계"
          },
          "zh-CN": {
            singular: "总计"
          }
        }
      }),
      liveBandwidth: (0, _v13.translate)({
        singular: "Live Events",
        dictionary: {
          es: {
            singular: "Eventos en vivo"
          },
          "de-DE": {
            singular: "Live-Events"
          },
          "fr-FR": {
            singular: "Événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベント"
          },
          "ko-KR": {
            singular: "라이브 이벤트"
          },
          "pt-BR": {
            singular: "Eventos ao vivo"
          },
          "zh-CN": {
            singular: "直播活动"
          }
        }
      }),
      videoBandwidth: (0, _v13.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      name: (0, _v13.translate)({
        singular: "Name",
        dictionary: {
          es: {
            singular: "Nombre"
          },
          "fr-FR": {
            singular: "Nom"
          },
          "ja-JP": {
            singular: "名前"
          },
          "ko-KR": {
            singular: "이름"
          },
          "pt-BR": {
            singular: "Nome"
          },
          "zh-CN": {
            singular: "姓名"
          }
        }
      }),
      third_party_impressions: (0, _v13.translate)({
        singular: "Third-party impressions",
        dictionary: {
          es: {
            singular: "Impresiones de terceros"
          },
          "de-DE": {
            singular: "Impressionen von Drittanbietern"
          },
          "fr-FR": {
            singular: "Impressions tierces"
          },
          "ja-JP": {
            singular: "サードパーティのインプレッション"
          },
          "ko-KR": {
            singular: "타사 노출수"
          },
          "pt-BR": {
            singular: "Impressões de terceiros"
          },
          "zh-CN": {
            singular: "第三方展示量"
          }
        }
      }),
      export: (0, _v13.translate)({
        singular: "Export data",
        dictionary: {
          es: {
            singular: "Exportar datos"
          },
          "de-DE": {
            singular: "Daten exportieren"
          },
          "fr-FR": {
            singular: "Exporter les données"
          },
          "ja-JP": {
            singular: "データをエクスポート"
          },
          "ko-KR": {
            singular: "데이터 내보내기"
          },
          "pt-BR": {
            singular: "Exportar dados"
          },
          "zh-CN": {
            singular: "导出数据"
          }
        }
      }),
      drm_licenses_used: (0, _v13.translate)({
        singular: "DRM licenses used",
        dictionary: {
          es: {
            singular: "Licencias de DRM utilizadas"
          },
          "de-DE": {
            singular: "DRM-Lizenzen verwendet"
          },
          "fr-FR": {
            singular: "Licences DRM utilisées"
          },
          "ja-JP": {
            singular: "使用済みのDRMライセンス"
          },
          "ko-KR": {
            singular: "사용된 DRM 라이선스"
          },
          "pt-BR": {
            singular: "Licenças DRM usadas"
          },
          "zh-CN": {
            singular: "已使用的 DRM 许可证"
          }
        }
      }),
      total: (0, _v13.translate)({
        singular: "Total",
        dictionary: {
          "de-DE": {
            singular: "Insgesamt"
          },
          "ja-JP": {
            singular: "合計"
          },
          "ko-KR": {
            singular: "총계"
          },
          "zh-CN": {
            singular: "总计"
          }
        }
      }),
      totalTimeWatchedInclRepeats: (0, _v13.translate)({
        singular: "Total time watched (incl. repeats)",
        dictionary: {
          es: {
            singular: "Tiempo total visto (incl. repeticiones)"
          },
          "de-DE": {
            singular: "Gesamte Sehdauer (inkl. Wiederholungen)"
          },
          "fr-FR": {
            singular: "Durée totale de visionnage ( répétitions incluses)"
          },
          "ja-JP": {
            singular: "総視聴時間（リピート含む）"
          },
          "ko-KR": {
            singular: "총 시청 시간(반복 포함)"
          },
          "pt-BR": {
            singular: "Tempo total assistido (incl. repetições)"
          },
          "zh-CN": {
            singular: "总观看时间（包括重复观看时间）"
          }
        }
      }),
      totalThumbsVotes: (0, _v13.translate)({
        singular: "Total thumbs votes",
        dictionary: {
          es: {
            singular: "Total de votos de pulgares"
          },
          "de-DE": {
            singular: "Gesamtzahl der Daumen-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes (pouces)"
          },
          "ja-JP": {
            singular: "サム評価の合計投票数"
          },
          "ko-KR": {
            singular: "총 좋아요·싫어요 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos (thumbs)"
          },
          "zh-CN": {
            singular: "点赞与点踩票数总计"
          }
        }
      }),
      totalThumbsUpVotes: (0, _v13.translate)({
        singular: "Total thumbs up votes",
        dictionary: {
          es: {
            singular: "Total de votos de pulgares arriba"
          },
          "de-DE": {
            singular: "Gesamtzahl der Daumen-hoch-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes pouce vers le haut"
          },
          "ja-JP": {
            singular: "高評価（サムズアップ）の合計投票数"
          },
          "ko-KR": {
            singular: "총 좋아요 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos de thumbs up"
          },
          "zh-CN": {
            singular: "点赞票数总计"
          }
        }
      }),
      totalThumbsDownVotes: (0, _v13.translate)({
        singular: "Total thumbs down votes",
        dictionary: {
          es: {
            singular: "Total de votos de pulgares abajo"
          },
          "de-DE": {
            singular: "Gesamtzahl der Daumen-runter-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes pouce vers le bas"
          },
          "ja-JP": {
            singular: "低評価（サムズダウン）の合計投票数"
          },
          "ko-KR": {
            singular: "총 싫어요 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos de thumbs down"
          },
          "zh-CN": {
            singular: "点踩票数总计"
          }
        }
      }),
      avgThumbsRating: (0, _v13.translate)({
        singular: "Avg. thumbs rating",
        dictionary: {
          es: {
            singular: "Valoración media (pulgares)"
          },
          "de-DE": {
            singular: "Durchschnittliche Daumenbewertung"
          },
          "fr-FR": {
            singular: "Évaluation moyenne (pouces)"
          },
          "ja-JP": {
            singular: "平均サム評価"
          },
          "ko-KR": {
            singular: "평균 추천 평점"
          },
          "pt-BR": {
            singular: "Avaliação média (thumbs)"
          },
          "zh-CN": {
            singular: "平均点赞评分"
          }
        }
      }),
      totalStarsVotes: (0, _v13.translate)({
        singular: "Total stars votes",
        dictionary: {
          es: {
            singular: "Total de votos (estrellas)"
          },
          "de-DE": {
            singular: "Gesamtanzahl der Sternebewertungen"
          },
          "fr-FR": {
            singular: "Nombre total de votes (étoiles)"
          },
          "ja-JP": {
            singular: "星の投票総数"
          },
          "ko-KR": {
            singular: "총 별점 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos em estrelas"
          },
          "zh-CN": {
            singular: "星级投票总数"
          }
        }
      }),
      totalOneStarVotes: (0, _v13.translate)({
        singular: "Total 1-star votes",
        dictionary: {
          es: {
            singular: "Total de votos de 1 estrella"
          },
          "de-DE": {
            singular: "Gesamtzahl der 1-Sterne-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes 1 étoile"
          },
          "ja-JP": {
            singular: "1つ星の合計投票数"
          },
          "ko-KR": {
            singular: "총 1성 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos de 1 estrela"
          },
          "zh-CN": {
            singular: "1 星票数总计"
          }
        }
      }),
      totalTwoStarVotes: (0, _v13.translate)({
        singular: "Total 2-stars votes",
        dictionary: {
          es: {
            singular: "Total de votos de 2 estrellas"
          },
          "de-DE": {
            singular: "Gesamtzahl der 2-Sterne-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes 2 étoiles"
          },
          "ja-JP": {
            singular: "2つ星の合計投票数"
          },
          "ko-KR": {
            singular: "총 2성 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos de 2 estrelas"
          },
          "zh-CN": {
            singular: "2 星票数总计"
          }
        }
      }),
      totalThreeStarVotes: (0, _v13.translate)({
        singular: "Total 3-stars votes",
        dictionary: {
          es: {
            singular: "Total de votos de 3 estrellas"
          },
          "de-DE": {
            singular: "Gesamtzahl der 3-Sterne-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes 3 étoiles"
          },
          "ja-JP": {
            singular: "3つ星の合計投票数"
          },
          "ko-KR": {
            singular: "총 3성 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos de 3 estrelas"
          },
          "zh-CN": {
            singular: "3 星票数总计"
          }
        }
      }),
      totalFourStarVotes: (0, _v13.translate)({
        singular: "Total 4-stars votes",
        dictionary: {
          es: {
            singular: "Total de votos de 4 estrellas"
          },
          "de-DE": {
            singular: "Gesamtzahl der 4-Sterne-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes 4 étoiles"
          },
          "ja-JP": {
            singular: "4つ星の合計投票数"
          },
          "ko-KR": {
            singular: "총 4성 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos de 4 estrelas"
          },
          "zh-CN": {
            singular: "4 星票数总计"
          }
        }
      }),
      totalFiveStarVotes: (0, _v13.translate)({
        singular: "Total 5-stars votes",
        dictionary: {
          es: {
            singular: "Total de votos de 5 estrellas"
          },
          "de-DE": {
            singular: "Gesamtzahl der 5-Sterne-Stimmen"
          },
          "fr-FR": {
            singular: "Total des votes 5 étoiles"
          },
          "ja-JP": {
            singular: "5つ星の合計投票数"
          },
          "ko-KR": {
            singular: "총 5성 투표 수"
          },
          "pt-BR": {
            singular: "Total de votos de 5 estrelas"
          },
          "zh-CN": {
            singular: "5 星票数总计"
          }
        }
      }),
      avgStarsRating: (0, _v13.translate)({
        singular: "Avg. stars rating",
        dictionary: {
          es: {
            singular: "Valoración media (estrellas)"
          },
          "de-DE": {
            singular: "Durchschnittliche Sternebewertung"
          },
          "fr-FR": {
            singular: "Note moyenne (étoiles)"
          },
          "ja-JP": {
            singular: "平均星評価"
          },
          "ko-KR": {
            singular: "평균 별점"
          },
          "pt-BR": {
            singular: "Média de avaliação em estrelas"
          },
          "zh-CN": {
            singular: "平均星级评分"
          }
        }
      })
    },
    _v128 = {
      plays: (0, _v13.translate)({
        singular: "The number of sessions in which a video starts playing.",
        dictionary: {
          es: {
            singular: "La cantidad de sesiones en que se empieza a reproducir un video."
          },
          "de-DE": {
            singular: "Die Anzahl der Sitzungen, in denen ein Video abgespielt wird."
          },
          "fr-FR": {
            singular: "Le nombre de sessions lors desquelles la lecture d'une vidéo démarre."
          },
          "ja-JP": {
            singular: "動画が再生を開始したセッションの数。"
          },
          "ko-KR": {
            singular: "동영상 재생이 시작되는 세션의 수"
          },
          "pt-BR": {
            singular: "O número de sessões em que um vídeo começa a ser reproduzido."
          },
          "zh-CN": {
            singular: "视频开始播放的会话次数。"
          }
        }
      }),
      finishes: (0, _v13.translate)({
        singular: "The number of sessions in which a video is played within 2 seconds of completion.",
        dictionary: {
          es: {
            singular: "La cantidad de sesiones en las que se reproduce un video a menos de 2 segundos de su finalización."
          },
          "de-DE": {
            singular: "Die Anzahl der Sitzungen, in denen ein Video innerhalb von 2 Sekunden nach Fertigstellung abgespielt wird."
          },
          "fr-FR": {
            singular: "Le nombre de sessions lors desquelles une vidéo est lue jusqu'aux 2 dernières secondes précédant la fin de la vidéo."
          },
          "ja-JP": {
            singular: "動画が最初から最後の2秒前まで再生されたセッションの数。"
          },
          "ko-KR": {
            singular: "동영상이 완료된 후 2초 이내에 재생된 세션 수"
          },
          "pt-BR": {
            singular: "O número de sessões em que um vídeo é reproduzido, chegando a até 2 segundos do final."
          },
          "zh-CN": {
            singular: "视频播放到 2 秒钟内即可完播的会话次数。"
          }
        }
      }),
      loads: (0, _v13.translate)({
        singular: "The number of sessions in which a video player is loaded.",
        dictionary: {
          es: {
            singular: "La cantidad de sesiones en que se carga un reproductor de video."
          },
          "de-DE": {
            singular: "Die Anzahl der Sitzungen, in denen ein Videoplayer geladen wird."
          },
          "fr-FR": {
            singular: "Le nombre de sessions lors desquelles un player vidéo est chargé."
          },
          "ja-JP": {
            singular: "動画プレーヤーがロードされたセッションの数。"
          },
          "ko-KR": {
            singular: "동영상 플레이어가 로드된 세션의 수"
          },
          "pt-BR": {
            singular: "O número de sessões em que um player de vídeo é carregado."
          },
          "zh-CN": {
            singular: "加载视频播放器的会话数。"
          }
        }
      }),
      [_v112]: (0, _v13.translate)({
        singular: "The number of people who have loaded a video player given the filters applied.",
        dictionary: {
          es: {
            singular: "La cantidad de personas que han cargado un reproductor de video según los filtros aplicados."
          },
          "de-DE": {
            singular: "Die Anzahl der Personen, die gemäß der angewandten Filter einen Video-Player geladen haben."
          },
          "fr-FR": {
            singular: "Le nombre de personnes qui ont chargé un player vidéo en fonction des filtres appliqués."
          },
          "ja-JP": {
            singular: "フィルターを適用して動画プレーヤーをロードした人の数。"
          },
          "ko-KR": {
            singular: "적용된 필터에 따라 동영상 플레이어를 로드한 사람의 수"
          },
          "pt-BR": {
            singular: "O número de pessoas que carregaram um player de vídeo de acordo com os filtros aplicados."
          },
          "zh-CN": {
            singular: "使用筛选条件加载视频播放器的人数。"
          }
        }
      }),
      [_v113]: (0, _v13.translate)({
        singular: "The number of people who have watched a video given the filters applied.",
        dictionary: {
          es: {
            singular: "La cantidad de personas que han visto un video según los filtros aplicados."
          },
          "de-DE": {
            singular: "Die Anzahl der Personen, die gemäß der angewandten Filter ein Video angesehen haben."
          },
          "fr-FR": {
            singular: "Le nombre de personnes qui ont regardé une vidéo en fonction des filtres appliqués."
          },
          "ja-JP": {
            singular: "フィルターで条件を絞った後の動画視聴者数。"
          },
          "ko-KR": {
            singular: "필터가 적용된 동영상을 본 사람의 수"
          },
          "pt-BR": {
            singular: "O número de pessoas que assistiram a um vídeo de acordo com os filtros aplicados."
          },
          "zh-CN": {
            singular: "在应用过滤器的情况下观看过视频的人数。"
          }
        }
      }),
      downloads: (0, _v13.translate)({
        singular: "The number of times a download is initiated.",
        dictionary: {
          es: {
            singular: "El número de veces que se inicia una descarga."
          },
          "de-DE": {
            singular: "Wie oft ein Download gestartet wurde."
          },
          "fr-FR": {
            singular: "Le nombre de fois où un téléchargement est initié."
          },
          "ja-JP": {
            singular: "動画のダウンロードボタンがクリックされた回数を表します。"
          },
          "ko-KR": {
            singular: "다운로드가 시작된 횟수"
          },
          "pt-BR": {
            singular: "O número de vezes que um carregamento é iniciado."
          },
          "zh-CN": {
            singular: "启动下载的次数。"
          }
        }
      }),
      [_v115]: (0, _v13.translate)({
        singular: "The total time watched divided by the video’s length.",
        dictionary: {
          es: {
            singular: "El tiempo total visto dividido por la duración del video."
          },
          "de-DE": {
            singular: "Die Gesamtdauer der Videobetrachtung, geteilt durch die Länge des Videos."
          },
          "fr-FR": {
            singular: "Le temps total de lecture divisé par la longueur de la vidéo."
          },
          "ja-JP": {
            singular: "合計視聴時間を動画の長さで割ったもの。"
          },
          "ko-KR": {
            singular: "총 시청 시간을 동영상 길이로 나눈 값"
          },
          "pt-BR": {
            singular: "O tempo total assistido dividido pela duração do vídeo."
          },
          "zh-CN": {
            singular: "总观看时间除以视频时长。"
          }
        }
      }),
      [_v114]: (0, _v13.translate)({
        singular: "The total time watched divided by the number of sessions.",
        dictionary: {
          es: {
            singular: "El tiempo total visto dividido por la cantidad de sesiones."
          },
          "de-DE": {
            singular: "Die Gesamtdauer der Videobetrachtung, geteilt durch die Anzahl der Sitzungen."
          },
          "fr-FR": {
            singular: "Le temps total de lecture divisé par le nombre de sessions."
          },
          "ja-JP": {
            singular: "合計視聴時間をセッション数で割ったもの。"
          },
          "ko-KR": {
            singular: "총 시청 시간을 세션 수로 나눈 값"
          },
          "pt-BR": {
            singular: "O tempo total assistido dividido pelo número de sessões."
          },
          "zh-CN": {
            singular: "总观看时间除以会话数。"
          }
        }
      }),
      [_v116]: (0, _v13.translate)({
        singular: "Total time watched for a video across all sessions.",
        dictionary: {
          es: {
            singular: "El tiempo total visto de un video en todas las sesiones."
          },
          "de-DE": {
            singular: "Gesamtdauer der Videobetrachtung über alle Sitzungen hinweg."
          },
          "fr-FR": {
            singular: "Le temps total de lecture d'une vidéo pour toutes les sessions."
          },
          "ja-JP": {
            singular: "すべてのセッションで動画を視聴した合計時間。"
          },
          "ko-KR": {
            singular: "모든 세션에서 동영상을 시청한 총 시간"
          },
          "pt-BR": {
            singular: "O tempo total assistido de um vídeo em todas as sessões."
          },
          "zh-CN": {
            singular: "所有会话观看视频的总时长。"
          }
        }
      }),
      videoBandwidth: (0, _v13.translate)({
        singular: "Bandwidth consumed by your published videos (in Gigabytes)",
        dictionary: {
          es: {
            singular: "Ancho de banda consumido por tus videos publicados (en gigabytes)"
          },
          "de-DE": {
            singular: "Von deinen veröffentlichten Videos verbrauchte Bandbreite (in Gigabytes)"
          },
          "fr-FR": {
            singular: "Bande passante consommée par vos vidéos publiées (en gigaoctets)"
          },
          "ja-JP": {
            singular: "公開動画で消費される帯域幅（ギガバイト単位）"
          },
          "ko-KR": {
            singular: "게시된 동영상에 사용된 대역폭(GB)"
          },
          "pt-BR": {
            singular: "Largura de banda consumida pelos seus vídeos publicados (em GB)"
          },
          "zh-CN": {
            singular: "您发布的视频所消耗的带宽（以 GB 为单位）"
          }
        }
      }),
      liveBandwidth: (0, _v13.translate)({
        singular: "Bandwidth consumed by your live events (in Gigabytes)",
        dictionary: {
          es: {
            singular: "Ancho de banda consumido por tus eventos en vivo (en gigabytes)"
          },
          "de-DE": {
            singular: "Von deinen Live-Events verbrauchte Bandbreite (in Gigabytes)"
          },
          "fr-FR": {
            singular: "Bande passante consommée par vos événements en direct (en gigaoctets)"
          },
          "ja-JP": {
            singular: "ライブイベントで消費される帯域幅（ギガバイト単位）"
          },
          "ko-KR": {
            singular: "라이브 이벤트에 사용된 대역폭(GB)"
          },
          "pt-BR": {
            singular: "Largura de banda consumida pelos seus eventos ao vivo (em GB)"
          },
          "zh-CN": {
            singular: "直播活动消耗的带宽（以 GB 为单位）"
          }
        }
      }),
      combinedBandwidth: (0, _v13.translate)({
        singular: "Total bandwidth consumed by your published videos and live events (in Gigabytes)",
        dictionary: {
          es: {
            singular: "Ancho de banda total consumido por tus videos publicados y eventos en vivo (en gigabytes)"
          },
          "de-DE": {
            singular: "Von deinen veröffentlichten Videos und Live-Events insgesamt verbrauchte Bandbreite (in Gigabytes)"
          },
          "fr-FR": {
            singular: "Bande passante totale consommée par vos vidéos publiées et vos événements en direct (en gigaoctets)"
          },
          "ja-JP": {
            singular: "公開動画とライブイベントで消費される合計帯域幅（ギガバイト単位）"
          },
          "ko-KR": {
            singular: "게시된 동영상 및 라이브 이벤트에 사용된 총 대역폭(GB)"
          },
          "pt-BR": {
            singular: "Largura de banda total consumida pelos seus vídeos publicados e eventos ao vivo (em GB)"
          },
          "zh-CN": {
            singular: "您发布的视频和直播活动消耗的总带宽（以 GB 计）"
          }
        }
      }),
      third_party_impressions: (0, _v13.translate)({
        singular: "Number of times a video has been loaded by a non-Vimeo video player",
        dictionary: {
          es: {
            singular: "Cantidad de veces que un reproductor de video que no es de Vimeo ha cargado un video"
          },
          "de-DE": {
            singular: "Wie oft ein Video von einem Video-Player geladen wurde, der nicht von Vimeo stammt"
          },
          "fr-FR": {
            singular: "Nombre de fois où une vidéo a été chargée par un player vidéo autre que Vimeo"
          },
          "ja-JP": {
            singular: "Vimeo以外の動画プレーヤーによって動画が読み込まれた回数"
          },
          "ko-KR": {
            singular: "Vimeo가 아닌 동영상 플레이어에서 동영상을 로드한 횟수"
          },
          "pt-BR": {
            singular: "O número de vezes que um vídeo foi carregado por um reprodutor de vídeo que não é do Vimeo"
          },
          "zh-CN": {
            singular: "非 Vimeo 视频播放器加载视频的次数"
          }
        }
      }),
      drm_licenses_used: (0, _v13.translate)({
        singular: "DRM licenses used of total available on this account",
        dictionary: {
          es: {
            singular: "Licencias de DRM utilizadas del total disponible en esta cuenta"
          },
          "de-DE": {
            singular: "DRM-Lizenzen von insgesamt für dieses Konto verfügbaren DRM-Lizenzen"
          },
          "fr-FR": {
            singular: "Licences DRM utilisées sur le total des licences disponibles sur ce compte"
          },
          "ja-JP": {
            singular: "このアカウントで利用可能なDRMライセンスのうち使用済みの数"
          },
          "ko-KR": {
            singular: "이 계정의 전체 DRM 라이선스 중 사용된 라이선스"
          },
          "pt-BR": {
            singular: "Licenças de DRM usadas do total disponível nesta conta"
          },
          "zh-CN": {
            singular: "此帐户可用的 DRM 许可证总数中已使用的数量"
          }
        }
      }),
      likes: (0, _v13.translate)({
        singular: "The number of likes on a video.",
        dictionary: {
          es: {
            singular: "La cantidad de \"me gusta' en un video."
          },
          "de-DE": {
            singular: "Die Anzahl von Likes für ein Video."
          },
          "fr-FR": {
            singular: "Le nombre de mentions « J'aime » sur une vidéo."
          },
          "ja-JP": {
            singular: "動画のいいね数。"
          },
          "ko-KR": {
            singular: "동영상의 좋아요 개수"
          },
          "pt-BR": {
            singular: "O número de curtidas em um vídeo."
          },
          "zh-CN": {
            singular: "视频获得的点赞数。"
          }
        }
      }),
      comments: (0, _v13.translate)({
        singular: "The number of comments on a video.",
        dictionary: {
          es: {
            singular: "La cantidad de comentarios en un video."
          },
          "de-DE": {
            singular: "Die Anzahl der Kommentare zu einem Video."
          },
          "fr-FR": {
            singular: "Le nombre de commentaires sur une vidéo."
          },
          "ja-JP": {
            singular: "動画のコメント数。"
          },
          "ko-KR": {
            singular: "동영상에 달린 댓글 수"
          },
          "pt-BR": {
            singular: "O número de comentários em um vídeo."
          },
          "zh-CN": {
            singular: "视频的评论数量。"
          }
        }
      }),
      totalTimeWatchedInclRepeats: (0, _v13.translate)({
        singular: "Total time watched for a video including repeat viewing of all or parts of the video.",
        dictionary: {
          es: {
            singular: "Tiempo total visto de un video, incluidas las visualizaciones repetidas de todo el video o partes de este."
          },
          "de-DE": {
            singular: "Gesamte Sehdauer eines Videos, einschließlich wiederholter Wiedergabe des gesamten Videos oder von Teilen davon."
          },
          "fr-FR": {
            singular: "Durée totale de visionnage d'une vidéo, y compris le visionnage répété de la vidéo ou d'une partie de celle-ci."
          },
          "ja-JP": {
            singular: "動画の全編または一部の繰り返し視聴を含む、動画の合計視聴時間。"
          },
          "ko-KR": {
            singular: "동영상의 전체 또는 일부 반복 시청을 포함하여 동영상을 시청한 총 시간입니다."
          },
          "pt-BR": {
            singular: "O tempo total assistido de um vídeo, incluindo a visualização repetida de todo o vídeo ou partes dele."
          },
          "zh-CN": {
            singular: "视频的总观看时间，包括重复观看全部或部分视频的时间。"
          }
        }
      }),
      uniqueViews: (0, _v13.translate)({
        singular: "The number of times a viewer has initiated playback on a video.",
        dictionary: {
          es: {
            singular: "El número de veces que un espectador ha iniciado la reproducción de un video."
          },
          "de-DE": {
            singular: "Die Häufigkeit, mit der ein Zuschauender die Wiedergabe eines Videos gestartet hat."
          },
          "fr-FR": {
            singular: "Le nombre de fois qu'un spectateur a lancé la lecture d'une vidéo."
          },
          "ja-JP": {
            singular: "視聴者が動画の再生を開始した回数。"
          },
          "ko-KR": {
            singular: "동영상에서 뷰어가 재생을 시작한 횟수."
          },
          "pt-BR": {
            singular: "O número de vezes que um espectador iniciou a reprodução de um vídeo."
          },
          "zh-CN": {
            singular: "观众启动视频回放的次数。"
          }
        }
      }),
      uniqueViewers2025: (0, _v13.translate)({
        singular: "The number of viewers that have played a video. Each viewer is counted once, even if they have played the video multiple times.",
        dictionary: {
          es: {
            singular: "El número de espectadores que han reproducido un video. Cada espectador se cuenta una sola vez, incluso si ha reproducido el video varias veces."
          },
          "de-DE": {
            singular: "Die Anzahl der Zuschauenden, die ein Video abgespielt haben. Jeder Zuschauende wird einmal gezählt, selbst wenn er das Video mehrmals abgespielt hat."
          },
          "fr-FR": {
            singular: "Le nombre de spectateurs ayant regardé une vidéo. Chaque spectateur est compté une fois, même s'il a visionné la vidéo plusieurs fois."
          },
          "ja-JP": {
            singular: "動画を再生した視聴者の数。動画を複数回再生した場合でも、各視聴者は1回としてカウントされます。"
          },
          "ko-KR": {
            singular: "동영상을 재생한 뷰어 수. 뷰어가 동영상을 여러 번 재생하더라도 각 뷰어는 한 번만 계산됩니다."
          },
          "pt-BR": {
            singular: "O número de espectadores que reproduziram um vídeo. Cada espectador é contabilizado uma única vez, mesmo que tenha assistido ao vídeo várias vezes."
          },
          "zh-CN": {
            singular: "播放过视频的观众数量。每位观众只计算一次，即使他们多次播放了视频。"
          }
        }
      }),
      total: (0, _v13.translate)({
        singular: "Total based on all of the applied filters.",
        dictionary: {
          es: {
            singular: "Total basado en todos los filtros aplicados."
          },
          "de-DE": {
            singular: "Der Gesamtwert basiert auf allen angewendeten Filtern."
          },
          "fr-FR": {
            singular: "Total établi en fonction de tous les filtres appliqués."
          },
          "ja-JP": {
            singular: "適用されたすべてのフィルターに基づく合計数。"
          },
          "ko-KR": {
            singular: "적용된 모든 필터를 기반으로 한 총합입니다."
          },
          "pt-BR": {
            singular: "Total com base em todos os filtros aplicados."
          },
          "zh-CN": {
            singular: "根据应用的所有过滤器得出的总数。"
          }
        }
      }),
      completionRate: (0, _v13.translate)({
        singular: "The proportion of views in which the video was finished (finishes / views). Finishes are the number of sessions in which a video is played within 2 seconds of completion.",
        dictionary: {
          es: {
            singular: "La proporción de visualizaciones en las que se completó el vídeo (finalizaciones / visualizaciones). Las finalizaciones son el número de sesiones en las que un vídeo se reproduce hasta el final o a menos de 2 segundos de este."
          },
          "de-DE": {
            singular: "Der Anteil der Aufrufe, bei denen das Video beendet wurde (finishes / views). Finishes sind die Anzahl der Sitzungen, in denen ein Video bis spätestens 2 Sekunden vor dem Ende abgespielt wurde."
          },
          "fr-FR": {
            singular: "La proportion des vues pour lesquelles la vidéo a été terminée (finishes / views). Les « finishes » correspondent au nombre de sessions durant lesquelles une vidéo a été lue jusqu'à 2 secondes de la fin."
          },
          "ja-JP": {
            singular: "動画が最後まで再生された割合（finishes / views）。Finishes は、動画の再生が終了時点から2秒以内に到達したセッションの数です。"
          },
          "ko-KR": {
            singular: "비디오가 끝까지 재생된 조회수의 비율(완주수 / 조회수). 완주수는 비디오 재생이 완료 시점에서 2초 이내에 도달한 세션 수입니다."
          },
          "pt-BR": {
            singular: "A proporção de visualizações em que o vídeo foi finalizado (finalizações / visualizações). Finalizações são o número de sessões em que um vídeo é reproduzido até, no máximo, 2 segundos antes do término."
          },
          "zh-CN": {
            singular: "视频被完整观看的比例 (完成次数 / 观看次数)。完成次数是指在距视频结束 2 秒内播放的视频会话次数。"
          }
        }
      })
    },
    _v129 = {
      ..._v127,
      "video.name": "Name",
      "watched.mean_percent": "Avg. % watched",
      "watched.total_seconds": "Total time watched",
      [_v111]: (0, _v13.translate)({
        singular: "Shares",
        dictionary: {
          es: {
            singular: "Compartido"
          },
          "de-DE": {
            singular: "Geteilte Inhalte"
          },
          "fr-FR": {
            singular: "Partages"
          },
          "ja-JP": {
            singular: "シェア"
          },
          "ko-KR": {
            singular: "공유"
          },
          "pt-BR": {
            singular: "Compartilhamentos"
          },
          "zh-CN": {
            singular: "分享"
          }
        }
      }),
      [_v116]: (0, _v13.translate)({
        singular: "Total time watched",
        dictionary: {
          es: {
            singular: "Tiempo total visto"
          },
          "de-DE": {
            singular: "Zeit, die das Video insgesamt angesehen wurde"
          },
          "fr-FR": {
            singular: "Temps de visionnage"
          },
          "ja-JP": {
            singular: "総視聴時間"
          },
          "ko-KR": {
            singular: "총 시청 시간"
          },
          "pt-BR": {
            singular: "Tempo total assistido"
          },
          "zh-CN": {
            singular: "总观看时间"
          }
        }
      }),
      [_v115]: (0, _v13.translate)({
        singular: "Avg. % watched",
        dictionary: {
          es: {
            singular: "% promedio visto"
          },
          "de-DE": {
            singular: "% angeschaut (Durchschnitt)"
          },
          "fr-FR": {
            singular: "Moy. de % regardé"
          },
          "ja-JP": {
            singular: "平均視聴率"
          },
          "ko-KR": {
            singular: "평균 시청 %"
          },
          "pt-BR": {
            singular: "% Média assistida"
          },
          "zh-CN": {
            singular: "平均观看百分比"
          }
        }
      }),
      [_v114]: (0, _v13.translate)({
        singular: "Avg. time watched",
        dictionary: {
          es: {
            singular: "Tiempo promedio de reproducción"
          },
          "de-DE": {
            singular: "Zeit, die das Video im Durchschnitt angesehen wurde"
          },
          "fr-FR": {
            singular: "Durée de visionnage moy."
          },
          "ja-JP": {
            singular: "平均視聴時間"
          },
          "ko-KR": {
            singular: "평균 시청 시간"
          },
          "pt-BR": {
            singular: "Tempo Médio Assistido"
          },
          "zh-CN": {
            singular: "平均观看时间"
          }
        }
      })
    },
    _v130 = {
      Live: (0, _v13.translate)({
        singular: "Live",
        dictionary: {
          es: {
            singular: "En vivo"
          },
          "fr-FR": {
            singular: "Direct"
          },
          "ja-JP": {
            singular: "ライブ"
          },
          "ko-KR": {
            singular: "라이브"
          },
          "pt-BR": {
            singular: "Ao vivo"
          },
          "zh-CN": {
            singular: "直播"
          }
        }
      }),
      Non_live: (0, _v13.translate)({
        singular: "Non live",
        dictionary: {
          es: {
            singular: "En diferido"
          },
          "de-DE": {
            singular: "Nicht live"
          },
          "fr-FR": {
            singular: "En différé"
          },
          "ja-JP": {
            singular: "通常配信"
          },
          "ko-KR": {
            singular: "라이브가 아닌 동영상"
          },
          "pt-BR": {
            singular: "Gravado"
          },
          "zh-CN": {
            singular: "非直播"
          }
        }
      })
    },
    _v131 = {
      [_v15.DATE]: (0, _v13.translate)({
        singular: "Date",
        dictionary: {
          es: {
            singular: "Fecha"
          },
          "de-DE": {
            singular: "Datum"
          },
          "fr-FR": {
            singular: "Date "
          },
          "ja-JP": {
            singular: "日付"
          },
          "ko-KR": {
            singular: "날짜"
          },
          "pt-BR": {
            singular: "Data"
          },
          "zh-CN": {
            singular: "日期"
          }
        }
      }),
      [_v15.DEVICE]: (0, _v13.translate)({
        singular: "Device",
        dictionary: {
          es: {
            singular: "Dispositivo"
          },
          "de-DE": {
            singular: "Gerät"
          },
          "fr-FR": {
            singular: "Appareil"
          },
          "ja-JP": {
            singular: "デバイス"
          },
          "ko-KR": {
            singular: "기기"
          },
          "pt-BR": {
            singular: "Dispositivo"
          },
          "zh-CN": {
            singular: "设备"
          }
        }
      }),
      [_v15.REGION]: (0, _v13.translate)({
        singular: "Region",
        dictionary: {
          es: {
            singular: "Región"
          },
          "fr-FR": {
            singular: "Région"
          },
          "ja-JP": {
            singular: "地域"
          },
          "ko-KR": {
            singular: "지역"
          },
          "pt-BR": {
            singular: "Região"
          },
          "zh-CN": {
            singular: "区域"
          }
        }
      }),
      [_v15.SOURCE_URL]: (0, _v13.translate)({
        singular: "Source URL",
        dictionary: {
          es: {
            singular: "URL de origen"
          },
          "de-DE": {
            singular: "Quell-URL"
          },
          "fr-FR": {
            singular: "URL source"
          },
          "ja-JP": {
            singular: "ソースURL"
          },
          "ko-KR": {
            singular: "소스 URL"
          },
          "pt-BR": {
            singular: "URL de Origem"
          },
          "zh-CN": {
            singular: "源 URL"
          }
        }
      }),
      [_v15.VIDEO]: (0, _v13.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      [_v15.STREAMING_TYPE]: (0, _v13.translate)({
        singular: "Streaming Type",
        dictionary: {
          es: {
            singular: "Tipo de transmisión"
          },
          "de-DE": {
            singular: "Streaming-Typ"
          },
          "fr-FR": {
            singular: "Type de streaming"
          },
          "ja-JP": {
            singular: "ストリーミングタイプ"
          },
          "ko-KR": {
            singular: "스트리밍 유형"
          },
          "pt-BR": {
            singular: "Tipo de transmissão"
          },
          "zh-CN": {
            singular: "直播类型"
          }
        }
      }),
      [_v15.TEXT_TRACK]: (0, _v13.translate)({
        singular: "Subtitles and captions",
        dictionary: {
          es: {
            singular: "Subtítulos y leyendas"
          },
          "de-DE": {
            singular: "Überschriften und Untertitel"
          },
          "fr-FR": {
            singular: "Sous-titres et légendes"
          },
          "ja-JP": {
            singular: "字幕とキャプション"
          },
          "ko-KR": {
            singular: "자막 및 캡션"
          },
          "pt-BR": {
            singular: "Legendas e closed captions (cc)"
          }
        }
      }),
      [_v15.AUDIO_TRACK]: (0, _v13.translate)({
        singular: "Audio track",
        dictionary: {
          es: {
            singular: "Pista de audio"
          },
          "de-DE": {
            singular: "Audiospur"
          },
          "fr-FR": {
            singular: "Piste audio"
          },
          "ja-JP": {
            singular: "オーディオトラック"
          },
          "ko-KR": {
            singular: "audiotrack"
          },
          "pt-BR": {
            singular: "Faixa de áudio"
          },
          "zh-CN": {
            singular: "音轨"
          }
        }
      })
    },
    _v132 = {
      [_v14.DAY]: (0, _v13.translate)({
        singular: "Day",
        dictionary: {
          es: {
            singular: "Día",
            plural: "Días"
          },
          "de-DE": {
            singular: "Tag",
            plural: "Tage"
          },
          "fr-FR": {
            singular: "Jour",
            plural: "Jours"
          },
          "ja-JP": {
            singular: "日",
            plural: "日"
          },
          "ko-KR": {
            singular: "일",
            plural: "일"
          },
          "pt-BR": {
            singular: "Dia",
            plural: "Dias"
          },
          "zh-CN": {
            singular: "天",
            plural: "天"
          }
        }
      }),
      [_v14.WEEK]: (0, _v13.translate)({
        singular: "Week",
        dictionary: {
          es: {
            singular: "Semana",
            plural: "Semanas"
          },
          "de-DE": {
            singular: "Woche",
            plural: "Wochen"
          },
          "fr-FR": {
            singular: "Semaine",
            plural: "Semaines"
          },
          "ja-JP": {
            singular: "週",
            plural: "週間"
          },
          "ko-KR": {
            singular: "주",
            plural: "주"
          },
          "pt-BR": {
            singular: "Semana",
            plural: "Semanas"
          },
          "zh-CN": {
            singular: "周",
            plural: "周"
          }
        }
      }),
      [_v14.MONTH]: (0, _v13.translate)({
        singular: "Month",
        dictionary: {
          es: {
            singular: "Mes",
            plural: "Meses"
          },
          "de-DE": {
            singular: "Monat",
            plural: "Monate"
          },
          "fr-FR": {
            singular: "Mois",
            plural: "Mois"
          },
          "ja-JP": {
            singular: "か月",
            plural: "か月"
          },
          "ko-KR": {
            singular: "개월",
            plural: "개월"
          },
          "pt-BR": {
            singular: "Mês",
            plural: "Meses"
          },
          "zh-CN": {
            singular: "月",
            plural: "月"
          }
        }
      }),
      [_v14.YEAR]: (0, _v13.translate)({
        singular: "Year",
        dictionary: {
          es: {
            singular: "Año",
            plural: "Años"
          },
          "de-DE": {
            singular: "Jahr",
            plural: "Jahre"
          },
          "fr-FR": {
            singular: "An",
            plural: "Ans"
          },
          "ja-JP": {
            singular: "年",
            plural: "年"
          },
          "ko-KR": {
            singular: "년",
            plural: "년"
          },
          "pt-BR": {
            singular: "Ano",
            plural: "Anos"
          },
          "zh-CN": {
            singular: "年",
            plural: "年"
          }
        }
      })
    };
  (0, _v13.translate)({
    singular: "Video",
    dictionary: {
      "fr-FR": {
        singular: "Vidéo"
      },
      "ja-JP": {
        singular: "動画"
      },
      "ko-KR": {
        singular: "동영상"
      },
      "pt-BR": {
        singular: "Vídeo"
      },
      "zh-CN": {
        singular: "视频"
      }
    }
  });
  let _v133 = [_v119, _v117, _v118],
    _v134 = ["plays", _v111, "likes", "comments", _v116, _v115, _v114],
    _v135 = {
      [_v95]: (0, _v13.translate)({
        singular: "Upgrade to break down your data in even more ways, including by region/state and city.",
        dictionary: {
          es: {
            singular: "Actualiza tu cuenta para analizar tu información de muchas más maneras, incluso por región/estado y ciudad."
          },
          "de-DE": {
            singular: "Mit einem Upgrade deines Tarifs kannst du deine Daten noch weiter aufschlüsseln – z. B. nach Region/Bundesland und Stadt."
          },
          "fr-FR": {
            singular: "Mettez votre abonnement à niveau pour analyser vos données de façon plus approfondie, y compris par région et par ville."
          },
          "ja-JP": {
            singular: "アップグレードすると、地域や都市別など、さまざまな方法でデータをより細かく分析することができます。"
          },
          "ko-KR": {
            singular: "업그레이드하여 지역/주 및 도시를 비롯한 훨씬 다양한 방식으로 데이터를 분류하세요."
          },
          "pt-BR": {
            singular: "Faça upgrade e obtenha dados ainda mais detalhados, incluindo região/estado e cidade."
          },
          "zh-CN": {
            singular: "升级后，可按地区/州和城市等更多方式细分数据。"
          }
        }
      }),
      [_v97]: (0, _v13.translate)({
        singular: "Upgrade to break down your data in even more ways, including by device type, browser, and OS.",
        dictionary: {
          es: {
            singular: "Actualiza tu cuenta para analizar tu información de muchas más maneras, incluso por tipo de dispositivo, explorador y sistema operativo."
          },
          "de-DE": {
            singular: "Mit einem Upgrade deines Tarifs kannst du deine Daten noch weiter aufgliedern – z. B. nach Gerätetyp, Browser und Betriebssystem."
          },
          "fr-FR": {
            singular: "Mettez votre abonnement à niveau pour analyser vos données de façon plus approfondie, y compris par type d'appareil, navigateur et système d'exploitation."
          },
          "ja-JP": {
            singular: "アップグレードすると、デバイスタイプやブラウザー、OS別など、さまざまな方法でデータをより細かく分析することができます。"
          },
          "ko-KR": {
            singular: "업그레이드하여 기기 유형, 브라우저 및 OS를 비롯한 훨씬 다양한 방식으로 데이터를 분류하세요."
          },
          "pt-BR": {
            singular: "Faça upgrade e obtenha dados ainda mais detalhados, incluindo tipo de dispositivo, navegador e sistema operacional."
          },
          "zh-CN": {
            singular: "升级后，可按设备类型、浏览器和操作系统等更多方式查看细分数据。"
          }
        }
      }),
      export: (0, _v13.translate)({
        singular: "Upgrade to export data",
        dictionary: {
          es: {
            singular: "Suba de categoría para exportar datos"
          },
          "de-DE": {
            singular: "Upgraden, um Daten zu exportieren"
          },
          "fr-FR": {
            singular: "Passez à un forfait supérieur pour exporter des données"
          },
          "ja-JP": {
            singular: "アップグレードしてデータをエクスポート"
          },
          "ko-KR": {
            singular: "데이터를 내보내려면 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Faça upgrade para exportar dados"
          },
          "zh-CN": {
            singular: "升级以导出数据"
          }
        }
      })
    },
    _v136 = (0, _v13.translate)({
      singular: "Bandwidth is the data that gets used when someone interacts with your video content. Many factors can count toward your bandwidth usage. The more popular your video is, and the more times it is loaded and played, the more bandwidth you will be using.",
      dictionary: {
        es: {
          singular: "El ancho de banda son los datos que se utilizan cuando alguien interactúa con tu contenido de video. Hay muchos factores que afectan tu uso del ancho de banda. Cuanto más popular sea tu video, y cuantas más veces se cargue y reproduzca, más ancho de banda usarás."
        },
        "de-DE": {
          singular: "Als Bandbreite wird das Datenvolumen bezeichnet, das genutzt wird, wenn jemand mit deinen Videoinhalten interagiert. Viele Faktoren können zu deiner Bandbreitennutzung beitragen. Je beliebter dein Video ist und je häufiger es geladen und abgespielt wird, desto mehr Bandbreite nutzt du."
        },
        "fr-FR": {
          singular: "La bande passante représente les données utilisées lorsqu'un utilisateur interagit avec votre contenu vidéo. De nombreux facteurs influent sur votre utilisation de la bande passante. Plus votre vidéo est populaire, chargée et lue, plus vous utilisez de bande passante."
        },
        "ja-JP": {
          singular: "帯域幅は、誰かがあなたの動画コンテンツに関わる際に使用されるデータです。多くの要因が帯域幅の使用にカウントされます。動画の人気が高くなり、読み込みと再生回数が増えるほど、使用する帯域幅が増えます。"
        },
        "ko-KR": {
          singular: "대역폭은 누군가가 동영상 콘텐츠와 상호 작용할 때 사용되는 데이터입니다. 많은 요인이 대역폭 사용량에 포함될 수 있습니다. 동영상의 인기가 높을수록, 로드 및 재생 횟수가 많을수록 더 많은 대역폭을 사용하게 됩니다."
        },
        "pt-BR": {
          singular: "Largura de banda são os dados que são usados quando alguém interage com seu conteúdo de vídeo. Muitos fatores podem contar para o seu uso de largura de banda. Quanto mais popular for o seu vídeo, e quanto mais vezes ele for carregado e reproduzido, mais largura de banda você usará."
        },
        "zh-CN": {
          singular: "带宽是用户与您的视频内容互动时使用的数据量。许多因素都可以计入您的带宽使用量。您的视频越受欢迎，加载和播放的次数越多，您使用的带宽就越多。"
        }
      }
    });
  (0, _v13.translate)({
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
  });
  let _v137 = Object.values({
      VIDEO_REPORT_BANNER: "vav2rm"
    }),
    _v138 = {
      TEAM_ACTIVITY_ANALYTICS: "taa"
    };
  Object.values(_v138);
  let _v139 = (0, _v13.translate)({
      singular: "Bandwidth (GB)",
      dictionary: {
        es: {
          singular: "Ancho de banda (GB)"
        },
        "de-DE": {
          singular: "Bandbreite (GB)"
        },
        "fr-FR": {
          singular: "Bande passante (Go)"
        },
        "ja-JP": {
          singular: "帯域幅 (GB)"
        },
        "ko-KR": {
          singular: "대역폭 (GB)"
        },
        "pt-BR": {
          singular: "Largura de banda (GB)"
        },
        "zh-CN": {
          singular: "带宽 (GB)"
        }
      }
    }),
    _v140 = {
      meanPercentWatched: 0,
      uniqueMembers: 0,
      uniqueVideos: 0,
      views: 0
    },
    _v141 = {
      DAY: "day",
      WEEK: "week",
      MONTH: "month",
      YEAR: "year"
    },
    _v142 = {
      PLUS: "PLUS",
      MINUS: "MINUS"
    };
  _v0.s(["AGGREGATE_INTERVALS", 0, _v132, "API_FIELD_KEY_WATCHED_MEAN_PERCENT", 0, _v122, "API_FIELD_KEY_WATCHED_MEAN_SECOND", 0, _v120, "API_FIELD_KEY_WATCHED_SUM_SECOND", 0, _v121, "API_FIELD_KEY_WATCHED_SUM_SECOND_WITH_REPEATS", 0, _v123, "BANDWIDTH_GRAPH_YAXIS_TEXT", 0, _v139, "BANDWIDTH_INFO_TEXT", 0, _v136, "BANDWIDTH_REPORT_SORT_MAP", 0, {
    [_v119]: "combined_bandwidth",
    [_v117]: "live_bandwidth",
    [_v118]: "video_bandwidth"
  }, "BANDWIDTH_REPORT_TABLE_FIELDS", 0, _v133, "CALENDAR_PRESETS", 0, _v109, "DATE_GROUP_BY", 0, _v141, "DATE_LINE_ID", 0, "date-line-id", "DATE_LINE_NAME", 0, "Total", "DATE_OPERATOR", 0, _v142, "DEFAULT_VIDEO_THUMBNAIL", 0, "https://i.vimeocdn.com/video/default.jpg", "DEVICE_DISPLAY_MAP", 0, _v125, "DEVICE_NAMES_DISPLAY_MAP", 0, _v126, "DEVICE_TYPES", () => _v124, "DISPLAY_MAP", 0, _v127, "FILTER_LIST_STRING_MAP", 0, _v104, "MAX_NO_OF_VIDEOS_FOR_NETWORK_TRANSFER", 0, 0, "MULTI_LINE_GRAPH_COLORS", 0, ["var(--vimeo-colors-vimeoBlue-400)", "var(--vimeo-colors-orange-400)", "var(--vimeo-colors-purple-400)", "var(--vimeo-colors-green-400)", "var(--vimeo-colors-red-400)", "var(--vimeo-colors-yellow-400)", "var(--vimeo-colors-red-200)", "var(--vimeo-colors-vimeoBlue-600)", "var(--vimeo-colors-green-200)", "var(--vimeo-colors-blue-400)"], "NON_TOURPOINT_USER_PREFERENCES", 0, _v138, "REPORT_GROUP_BY_FILTER_MAP", 0, _v103, "REPORT_GROUP_MAP", 0, _v105, "REPORT_LINKS", 0, ["video", "engagement", "region", "source", "device", "date"], "REPORT_NAME_DISPLAY_MAP", 0, _v110, "REPORT_TYPE_BANDWIDTH", 0, _v100, "REPORT_TYPE_DASHBOARD", 0, _v93, "REPORT_TYPE_DATE", 0, _v94, "REPORT_TYPE_DEVICE", 0, _v97, "REPORT_TYPE_ENGAGEMENT", 0, _v99, "REPORT_TYPE_REGION", 0, _v95, "REPORT_TYPE_SOURCE", 0, _v96, "REPORT_TYPE_TEAM", 0, _v101, "REPORT_TYPE_VIDEO", 0, _v98, "REPORT_TYPE_VIDEO_RATING", 0, _v102, "SOCIAL_DISPLAY_MAP", 0, _v129, "SORT_VALUE", () => _v92, "STREAMING_TYPES_DISPLAY_MAP", 0, _v130, "TABLE_FIELD_MINUTES_WATCHED", 0, "minutes_watched", "TABLE_FIELD_SOCIAL_MEAN_PERCENT_WATCHED", 0, _v115, "TABLE_FIELD_SOCIAL_MEAN_WATCH_TIME", 0, _v114, "TABLE_FIELD_SOCIAL_TOTAL_TIME_WATCHED", 0, _v116, "TABLE_FIELD_VIEWS", 0, "views", "TABLE_HEADERS_INFO_DISPLAY_MAP", 0, _v128, "TABLE_SEGMENT_NAME_DISPLAY_MAP", 0, _v131, "TOTAL_ROW_ID", 0, "total-row-id", "TOTAL_ROW_NAME", 0, _v91, "TOUR_POINT_USER_PREFERENCES_KEYS", 0, _v137, "UNIFIED_REPORT_TABLE_FIELDS", 0, _v134, "UPSELL_TEXT", 0, _v135, "ZERO_FILL_TEAM_ANALYTICS_ITEM", 0, _v140], 0);
  let _v143 = [{
      name: "name",
      apiName: "start_date",
      displayName: (0, _v13.translate)({
        singular: "Month",
        dictionary: {
          es: {
            singular: "Mes",
            plural: "Meses"
          },
          "de-DE": {
            singular: "Monat",
            plural: "Monate"
          },
          "fr-FR": {
            singular: "Mois",
            plural: "Mois"
          },
          "ja-JP": {
            singular: "か月",
            plural: "か月"
          },
          "ko-KR": {
            singular: "개월",
            plural: "개월"
          },
          "pt-BR": {
            singular: "Mês",
            plural: "Meses"
          },
          "zh-CN": {
            singular: "月",
            plural: "月"
          }
        }
      }),
      isVisible: !0,
      isSortable: !1
    }, {
      name: "liveBandwidth",
      apiName: "liveBandwidth",
      displayName: (0, _v13.translate)({
        singular: "Live Events (GB)",
        dictionary: {
          es: {
            singular: "Eventos en vivo (GB)"
          },
          "de-DE": {
            singular: "Live-Events (GB)"
          },
          "fr-FR": {
            singular: "Événements en direct (Go)"
          },
          "ja-JP": {
            singular: "ライブイベント (GB)"
          },
          "ko-KR": {
            singular: "라이브 이벤트 (GB)"
          },
          "pt-BR": {
            singular: "Eventos ao Vivo (GB)"
          },
          "zh-CN": {
            singular: "直播活动 (GB)"
          }
        }
      }),
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => Number(parseFloat(_v0 + "")?.toFixed(1)).toLocaleString()
    }, {
      name: "videoBandwidth",
      apiName: "videoBandwidth",
      displayName: (0, _v13.translate)({
        singular: "Video On Demand (GB)",
        dictionary: {
          es: {
            singular: "Video on Demand (GB)"
          },
          "fr-FR": {
            singular: "Vidéo à la demande (Go)"
          },
          "ja-JP": {
            singular: "オンデマンド動画 (GB)"
          },
          "ko-KR": {
            singular: "동영상 온디맨드 (GB)"
          },
          "pt-BR": {
            singular: "Vídeo Sob Demanda (GB)"
          },
          "zh-CN": {
            singular: "视频点播 (GB)"
          }
        }
      }),
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => Number(parseFloat(_v0 + "")?.toFixed(1)).toLocaleString()
    }, {
      name: "combinedBandwidth",
      apiName: "combinedBandwidth",
      displayName: (0, _v13.translate)({
        singular: "Total (GB)",
        dictionary: {
          "de-DE": {
            singular: "Gesamt (GB)"
          },
          "fr-FR": {
            singular: "Total (Go)"
          },
          "ja-JP": {
            singular: "合計 (GB)"
          },
          "ko-KR": {
            singular: "총계 (GB)"
          },
          "zh-CN": {
            singular: "总计 (GB)"
          }
        }
      }),
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => Number(parseFloat(_v0 + "")?.toFixed(1)).toLocaleString()
    }],
    _v144 = [{
      name: "cid",
      apiName: "metadata.connections.video.uri",
      isVisible: !1,
      isSortable: !1
    }, {
      name: "createdTime",
      apiName: "metadata.connections.video.createdTime",
      isVisible: !1,
      isSortable: !1
    }, {
      name: "thumbnail",
      apiName: "metadata.connections.video.pictures.sizes",
      isVisible: !1,
      isSortable: !1
    }, {
      name: "name",
      apiName: "dimensionName",
      isVisible: !0,
      isSortable: !1
    }, {
      name: "liveBandwidth",
      apiName: "liveBandwidth",
      displayName: (0, _v13.translate)({
        singular: "Live Events (GB)",
        dictionary: {
          es: {
            singular: "Eventos en vivo (GB)"
          },
          "de-DE": {
            singular: "Live-Events (GB)"
          },
          "fr-FR": {
            singular: "Événements en direct (Go)"
          },
          "ja-JP": {
            singular: "ライブイベント (GB)"
          },
          "ko-KR": {
            singular: "라이브 이벤트 (GB)"
          },
          "pt-BR": {
            singular: "Eventos ao Vivo (GB)"
          },
          "zh-CN": {
            singular: "直播活动 (GB)"
          }
        }
      }),
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => Number(parseFloat(_v0 + "")?.toFixed(2)).toLocaleString()
    }, {
      name: "videoBandwidth",
      apiName: "videoBandwidth",
      displayName: (0, _v13.translate)({
        singular: "Video On Demand (GB)",
        dictionary: {
          es: {
            singular: "Video on Demand (GB)"
          },
          "fr-FR": {
            singular: "Vidéo à la demande (Go)"
          },
          "ja-JP": {
            singular: "オンデマンド動画 (GB)"
          },
          "ko-KR": {
            singular: "동영상 온디맨드 (GB)"
          },
          "pt-BR": {
            singular: "Vídeo Sob Demanda (GB)"
          },
          "zh-CN": {
            singular: "视频点播 (GB)"
          }
        }
      }),
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => Number(parseFloat(_v0 + "")?.toFixed(2)).toLocaleString()
    }, {
      name: "combinedBandwidth",
      apiName: "combinedBandwidth",
      displayName: (0, _v13.translate)({
        singular: "Total (GB)",
        dictionary: {
          "de-DE": {
            singular: "Gesamt (GB)"
          },
          "fr-FR": {
            singular: "Total (Go)"
          },
          "ja-JP": {
            singular: "合計 (GB)"
          },
          "ko-KR": {
            singular: "총계 (GB)"
          },
          "zh-CN": {
            singular: "总计 (GB)"
          }
        }
      }),
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => Number(parseFloat(_v0 + "")?.toFixed(2)).toLocaleString()
    }],
    _v145 = [{
      name: "plays",
      apiName: "views",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }, {
      name: "drm_licenses_used",
      apiName: "drmLicensesUsed",
      isVisible: !0,
      isSortable: !0,
      hideWhenEmpty: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }, {
      name: "loads",
      apiName: "impressions",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }, {
      name: "third_party_impressions",
      apiName: "thirdPartyImpressions",
      isVisible: !0,
      isSortable: !0,
      hideWhenEmpty: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }, {
      name: "unique_loads",
      apiName: "uniqueImpressions",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }, {
      name: "unique_viewers",
      apiName: "uniqueViewers",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }, {
      name: "totalviewduration",
      apiName: "totalSecondsWatched",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : (0, _v11.formatDuration)(0 * Number(_v0))
    }, {
      name: "averageviewduration",
      apiName: "meanSecondsWatched",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : (0, _v11.formatDuration)(0 * Number(_v0))
    }, {
      name: "averageviewpercentage",
      apiName: "meanPercentWatched",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toFixed(0).toLocaleString() + "%"
    }, {
      name: "finishes",
      apiName: "finishes",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }, {
      name: "downloads",
      apiName: "downloads",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? "-" : Number(_v0).toLocaleString()
    }],
    _v146 = [{
      name: "cid",
      apiName: "metadata.connections.video.uri",
      isVisible: !1,
      isSortable: !1
    }, {
      name: "created_time",
      apiName: "metadata.connections.video.createdTime",
      isVisible: !1,
      isSortable: !1
    }, {
      name: "thumbnail",
      apiName: "thumbnail",
      isVisible: !1,
      isSortable: !1
    }, {
      name: "name",
      apiName: "metadata.connections.video.title",
      isVisible: !0,
      isSortable: !1
    }, ..._v145, {
      name: "likes",
      apiName: "metadata.connections.video.likes",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? 0 : Number(_v0).toLocaleString()
    }, {
      name: "comments",
      apiName: "metadata.connections.video.comments",
      isVisible: !0,
      isSortable: !0,
      totalFormatter: _v0 => isNaN(_v0) || 0 > Number(_v0) ? 0 : Number(_v0).toLocaleString()
    }],
    _v147 = [{
      name: "name",
      apiName: "embedDomain,embedDomainPath",
      isVisible: !0,
      isSortable: !1
    }, ..._v145],
    _v148 = [{
      name: "name",
      apiName: "countryCode,countryName",
      isVisible: !0,
      isSortable: !1
    }, ..._v145],
    _v149 = [{
      name: "name",
      apiName: "deviceType",
      isVisible: !0,
      isSortable: !1
    }, ..._v145],
    _v150 = [{
      name: "name",
      apiName: "startDate,endDate",
      isVisible: !0,
      isSortable: !1
    }, ..._v145],
    _v151 = [{
      name: "name",
      apiName: "streamingType",
      isVisible: !0,
      isSortable: !1
    }, ..._v145],
    _v152 = [_v150, _v146, _v149, _v148, _v147, _v151, _v143];
  _v0.s(["ALL_TABLE_FIELDS", 0, _v152, "DateReportTableFields", 0, _v150, "DeviceReportTableFields", 0, _v149, "RegionReportTableFields", 0, _v148, "SourceReportTableFields", 0, _v147, "VideoReportTableFields", 0, _v146, "getTableFieldsByReportType", 0, _v0 => {
    switch (_v0) {
      case _v17.DATE:
        return _v150;
      case _v17.VIDEO:
        return _v146;
      case _v17.DEVICE:
        return _v149;
      case _v17.REGION:
        return _v148;
      case _v17.SOURCE:
        return _v147;
      case _v17.BANDWIDTH_DATE:
        return _v143;
      case _v17.BANDWIDTH_VIDEO:
        return _v144;
      case _v17.STREAMING_TYPE:
        return _v151;
    }
    throw Error(`[VA] Invalid Report Types to getTableFields for ${_v0}`);
  }], 0);
  let _v153 = _v0 => {
      let _v1 = new Map();
      return _v1.set("plays", "views"), _v1.set("uniqueViewers", "unique_viewers"), _v1.set("uniqueImpressions", "unique_impressions"), _v1.set("meanPercentWatched", "mean_percent_watched"), _v1.set("meanSecondsWatched", "mean_seconds_watched"), _v1.set("totalSecondsWatched", "total_seconds_watched"), _v1.set("thirdPartyImpressions", "third_party_impressions"), _v1.set("drmLicensesUsed", "drm_licenses_used"), _v1.has(_v0) ? _v1.get(_v0) : _v0;
    },
    _v154 = (_v0, _v1) => _v0[_v1] && _v0[_v1].map ? _v0[_v1].map(_v0 => _v0.id).join(",") : "",
    _v155 = _v0 => _v104[_v0],
    _v156 = (_v0, _v1, _v2, _v3) => {
      let _v4 = new Date(_v0);
      return _v1 === _v141.DAY && (_v2 === _v142.PLUS ? _v4.setDate(_v4.getDate() + _v3) : _v4.setDate(_v4.getDate() - _v3)), _v1 === _v141.WEEK && (_v2 === _v142.PLUS ? _v4.setDate(_v4.getDate() + 7 * _v3) : _v4.setDate(_v4.getDate() - 7 * _v3)), _v1 === _v141.MONTH && (_v2 === _v142.PLUS ? _v4.setUTCMonth(_v4.getUTCMonth() + _v3) : _v4.setUTCMonth(_v4.getUTCMonth() - _v3)), _v1 === _v141.YEAR && (_v2 === _v142.PLUS ? _v4.setFullYear(_v4.getFullYear() + _v3) : _v4.setFullYear(_v4.getFullYear() - _v3)), _v4;
    },
    _v157 = (_v0, _v1, _v2) => {
      if (_v1 === _v141.MONTH) {
        let _v0 = new Date(_v0.getFullYear(), _v0.getMonth() + 1, 1),
          _v1 = new Date(_v0.getFullYear(), _v0.getMonth(), 1);
        return "START" === _v2 ? _v1.toISOString().slice(0, 10) : _v0.toISOString().slice(0, 10);
      }
      if (_v1 !== _v141.WEEK) return _v0.toISOString().slice(0, 10);
      {
        let _v0 = new Date(_v0.getFullYear(), 0, 1),
          _v1 = Math.floor((_v0.valueOf() - _v0.valueOf()) / 0),
          _v2 = 7 * Math.ceil((_v0.getDay() + 1 + _v1) / 7) - 7,
          _v3 = new Date(_v0);
        _v3.setDate(_v3.getDate() + _v2);
        let _v4 = new Date(_v0);
        return _v4.setDate(_v4.getDate() + _v2 + 1), "START" === _v2 ? _v4.toISOString().slice(0, 10) : _v3.toISOString().slice(0, 10);
      }
    };
  _v0.s(["formatPercent", 0, (_v0, _v1 = 1) => _v0 ? +parseFloat(`${_v0}`).toFixed(_v1) : 0, "getDateRangeArray", 0, (_v0, _v1, _v2) => {
    let _v3 = [],
      _v4 = _v9.DateTime.fromISO(_v0),
      _v5 = _v9.DateTime.fromISO(_v1);
    for (_v2 === _v14.MONTH && (_v4 = _v4.set({
      day: 1
    })); _v4.startOf("day") <= _v5.startOf("day");) switch (_v3.push((0, _v10.getFormattedStringFromDateObj)(_v4.toJSDate(), "YYYY-MM-DD")), _v2) {
      case _v14.DAY:
        _v4 = _v4.plus({
          day: 1
        });
        break;
      case _v14.MONTH:
        _v4 = _v4.plus({
          month: 1
        }).set({
          day: 1
        });
        break;
      default:
        console.error("VIA | Wrong time interval");
    }
    return _v3;
  }, "getFiltersObject", 0, (_v0, _v1) => _v0.reduce((_v0, _v1) => _v1[_v1]?.length > 0 ? {
    ..._v0,
    ["filter_" + _v104[_v1]]: _v1[_v1].map(_v0 => _v0.id).join(",")
  } : _v0, {}), "getFiltersObjectForAPI", 0, (_v0, _v1) => _v0.reduce((_v0, _v1) => _v1[_v1.filterKey] && _v1[_v1.filterKey].length > 0 ? {
    ..._v0,
    ["filter_" + _v155(_v1.filterKey)]: _v154(_v1, _v1.filterKey)
  } : _v0, {}), "getGraphDateLabel", 0, ({
    dateString: _v0,
    selectedDateSegment: _v1,
    range: _v2
  }) => {
    let _v3 = _v0 && (0, _v10.getDateObjFromFormat)(_v0, "YYYY-MM-DD"),
      _v4 = _v1 ? (_v0 => {
        switch (_v0) {
          case _v14.YEAR:
            return "YYYY";
          case _v14.MONTH:
            return "MMM YYYY";
          default:
            return "MMM DD, YYYY";
        }
      })(_v1) : "MMM DD, YYYY",
      _v5 = _v0 && _v3 && (0, _v10.getFormattedStringFromDateObj)(_v3, _v4);
    if (_v1 === _v14.WEEK && _v2?.start_date && _v2?.end_date) {
      let {
          start_date: _v0,
          end_date: _v1
        } = _v2,
        _v2 = (0, _v10.getDateObjFromFormat)(_v0, "YYYY-MM-DD"),
        _v3 = (0, _v10.getDateObjFromFormat)(_v1, "YYYY-MM-DD"),
        _v4 = (0, _v10.getFormattedStringFromDateObj)(_v2, _v4),
        _v5 = (0, _v10.getFormattedStringFromDateObj)(_v3, _v4);
      return `${_v4} - ${_v5}`;
    }
    return _v5;
  }, "getGroupByTimeLiteral", 0, (_v0, _v1) => {
    let _v2 = _v1.diff(_v0, "days");
    return _v2.days < 50 ? "day" : _v2.days > 720 ? "year" : _v2.days > 180 ? "month" : "week";
  }, "getMemberDetailReportUrlPath", 0, _v0 => `${_v0?.uri?.slice(1, _v0?.uri?.length)}`, "getSortValueForApi", 0, (_v0, _v1) => _v152.flatMap(_v0 => _v0.filter(_v0 => "name" === _v0.name).map(_v0 => _v0.apiName)).includes(_v0) ? _v153(_v1) : _v153(_v0), "getTeamsFiltersObject", 0, (_v0, _v1) => _v0.reduce((_v0, _v1) => _v1[_v1] && _v1[_v1].length > 0 ? {
    ..._v0,
    ["filter_" + _v155(_v1)]: _v154(_v1, _v1)
  } : _v0, {}), "getTotalRowColor", 0, () => "var(--vimeo-colors-text-primary)", "getValueToDisplay", 0, (_v0, _v1 = "") => {
    if (0 > Number(_v0)) return (0, _v12.logError)("Got -ve Value to Display for Graph", null, {
      value: _v0,
      dimensionName: _v1
    }), "-";
    switch (_v1) {
      case _v122:
      case _v115:
        return parseFloat(_v0).toFixed(1) + "%";
      case _v120:
      case _v121:
      case _v123:
      case _v114:
      case _v116:
        return (0, _v11.formatDuration)(0 * Number(_v0));
      default:
        return (0, _v11.aggregateNumberToString)(Number(_v0), 1);
    }
  }, "getVideoDetailReportUrlPath", 0, _v0 => `${_v0?.uri?.slice(1, _v0?.uri?.length)}`, "getZeroFilledGraphData", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v3 ?? [],
      _v5 = _v157(new Date(Date.parse(_v1)), _v2, "END"),
      _v6 = _v157(new Date(Date.parse(_v0)), _v2, "START"),
      _v7 = _v4?.find(_v0 => _v0?.range?.endDate === _v5),
      _v8 = _v4?.find(_v0 => _v0?.range?.startDate === _v6);
    if (!_v7) {
      let _v0 = _v156(Date.parse(_v5), _v2, "MINUS", 1);
      _v4?.unshift({
        ..._v140,
        range: {
          startDate: _v0.toISOString().slice(0, 10),
          endDate: _v5
        }
      });
    }
    if (!_v8) {
      let _v0 = _v156(Date.parse(_v6), _v2, "PLUS", 1);
      _v4?.push({
        ..._v140,
        range: {
          startDate: _v6,
          endDate: _v0.toISOString().slice(0, 10)
        }
      });
    }
    let _v9 = [];
    return _v4?.forEach((_v0, _v1) => {
      let _v2,
        _v3 = _v4?.[_v1 - 1]?.range?.endDate,
        _v4 = _v0?.range?.endDate,
        _v5 = (_v2 = _v3 && _v4 ? ((_v0, _v1, _v2) => {
          let _v3 = [],
            _v4 = _v0;
          for (; _v4 > _v1;) _v4 !== _v0 && _v3.push(_v4), _v4 = _v156(_v4.valueOf(), _v2, _v142.MINUS, 1);
          return _v3;
        })(new Date(Date.parse(_v3)), new Date(Date.parse(_v4)), _v2) : [], _v2.map(_v0 => {
          let _v1 = _v156(_v0.valueOf(), _v2, _v142.MINUS, 1),
            _v2 = _v156(_v0.valueOf(), _v2, _v142.MINUS, 0);
          return _v2 === _v141.WEEK && _v1.setDate(_v1.getDate() + 1), {
            ..._v140,
            range: {
              startDate: _v1.toISOString().slice(0, 10),
              endDate: _v2.toISOString().slice(0, 10)
            }
          };
        }));
      _v5?.length && _v9.push(..._v5), _v9.push(_v0);
    }), _v9;
  }, "shouldShowContentLimitAppliedNotice", 0, (_v0, _v1) => ("/analytics" === _v1 || "/analytics/device" === _v1 || "/analytics/region" === _v1 || "/analytics/date" === _v1 || "/analytics/source" === _v1) && _v0, "sortHandler", 0, (_v0, _v1, _v2) => _v2.sort((_v0, _v1) => {
    let _v2 = Number;
    "name" === _v0 && (_v2 = _v0 => (0, _v10.getDateObjFromFormat)(_v0, "YYYY-MM-DD"));
    let _v3 = _v2(_v0[_v0]),
      _v4 = _v2(_v1[_v0]);
    return _v1 === _v92.ASCENDING_ORDER ? _v3 >= _v4 ? 1 : -1 : _v3 <= _v4 ? 1 : -1;
  }), "tableFieldsToGraphMetrics", 0, _v0 => _v0.filter(_v0 => _v0.isSortable).map(_v0 => ({
    label: _v129[_v0.name],
    value: _v0.apiName
  }))], 0);
}