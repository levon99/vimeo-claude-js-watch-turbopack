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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = _v0 => {
      if (!_v0) return 0;
      let _v1 = _v0.split("/"),
        _v2 = _v1[_v1.length - 1].split(":")[0];
      return isNaN(Number(_v2)) ? 0 : Number(_v2);
    },
    _v29 = ["clip.contentRating", "clip.descriptionHtml", "clip.link", "clip.name", "clip.pictures.sizes", "clip.privacy.view", "clip.releaseTime", "clip.uri", "ondemandPage.description", "ondemandPage.link", "ondemandPage.name", "time", "type", "user.name", "user.uri", "category.link", "category.name", "category.uri", "channel.link", "channel.name", "channel.uri", "group.link", "group.name", "group.uri", "tag.name", "tag.uri"],
    _v30 = {
      loop: 1,
      like: 0,
      watch_later: 0,
      share: 0,
      ask_ai: 0,
      collections: 0,
      title: 0,
      byline: 0,
      portrait: 0,
      badge: 1,
      play_button_position: "bottom",
      progress_bar: 1,
      volume: 1,
      quality_selector: 1,
      cc: 1,
      speed: 1,
      fullscreen: 1,
      transcript: 0,
      pip: 0,
      vimeo_logo: 0
    },
    _v31 = {
      UPLOAD: "upload",
      APPEARANCE: "appearance",
      LIKE: "like",
      CHANNEL: "channel",
      GROUP: "group",
      TAG: "tag",
      ONDEMAND_PUBLISH: "ondemand",
      CATEGORY_FEATURED: "category"
    },
    _v32 = {
      FACEBOOK: "facebook_feed",
      TWITTER: "twitter_timeline",
      SHARE: "share"
    },
    _v33 = {
      ..._v31,
      ..._v32
    },
    _v34 = new Map(),
    _v35 = [{
      copy: () => (0, _v10.translate)({
        singular: "All",
        dictionary: {
          es: {
            singular: "Todos"
          },
          "de-DE": {
            singular: "Alle"
          },
          "fr-FR": {
            singular: "Tout"
          },
          "ja-JP": {
            singular: "すべて"
          },
          "ko-KR": {
            singular: "모두"
          },
          "pt-BR": {
            singular: "Tudo"
          },
          "zh-CN": {
            singular: "全部"
          }
        }
      }),
      value: void 0,
      emptyState: {
        icon: _v21.Compass,
        title: () => (0, _v10.translate)({
          singular: "Let’s find something you’ll love",
          dictionary: {
            es: {
              singular: "Busquemos algo que le encantará"
            },
            "de-DE": {
              singular: "Lassen Sie uns etwas finden, das Sie lieben werden"
            },
            "fr-FR": {
              singular: "Trouvons quelque chose que vous allez adorer"
            },
            "ja-JP": {
              singular: "気に入るものを見つけましょう"
            },
            "ko-KR": {
              singular: "마음에 드는 것을 찾아보세요."
            },
            "pt-BR": {
              singular: "Vamos encontrar algo que você vai adorar"
            },
            "zh-CN": {
              singular: "让我们为您找到您会喜欢的内容"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "Build your personalized feed by following creators, video channels, and topics that speak to you",
          dictionary: {
            es: {
              singular: "Cree su feed personalizado siguiendo a los creadores, los canales de video y los temas que le interesen"
            },
            "de-DE": {
              singular: "Stellen Sie Ihren persönlichen Feed zusammen, indem Sie Autoren, Videokanälen und Themen folgen, die Sie ansprechen"
            },
            "fr-FR": {
              singular: "Créez votre flux personnalisé en suivant des créateurs, des chaînes vidéo et des sujets qui vous intéressent."
            },
            "ja-JP": {
              singular: "あなたに響くクリエイター、ビデオチャンネル、トピックをフォローして、パーソナライズされたフィードを作成しましょう"
            },
            "ko-KR": {
              singular: "좋아하는 크리에이터, 동영상 채널 및 주제를 팔로우해 커스텀 피드를 만드세요."
            },
            "pt-BR": {
              singular: "Construa seu feed personalizado seguindo criadores, canais de vídeo e tópicos que te interessam"
            },
            "zh-CN": {
              singular: "关注您感兴趣的创作者、视频频道和主题，建立您的个性化信息源"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Explore",
          dictionary: {
            es: {
              singular: "Explora"
            },
            "de-DE": {
              singular: "Entdecken"
            },
            "fr-FR": {
              singular: "Explorer"
            },
            "ja-JP": {
              singular: "検索"
            },
            "ko-KR": {
              singular: "탐색"
            },
            "zh-CN": {
              singular: "探索"
            }
          }
        }),
        buttonLink: "/watch"
      }
    }, {
      copy: () => (0, _v10.translate)({
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
      value: "likes",
      emptyState: {
        icon: _v23.Heart,
        title: () => (0, _v10.translate)({
          singular: "Nothing to watch yet",
          dictionary: {
            es: {
              singular: "No hay nada para ver todavía"
            },
            "de-DE": {
              singular: "Hier gibt es aktuell noch nichts zu sehen."
            },
            "fr-FR": {
              singular: "Rien à regarder pour le moment"
            },
            "ja-JP": {
              singular: "まだ視聴するものがありません"
            },
            "ko-KR": {
              singular: "아직 동영상이 없습니다."
            },
            "pt-BR": {
              singular: "Nada para assistir ainda"
            },
            "zh-CN": {
              singular: "暂无可观看的内容"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "When someone you follow likes a video, it appears here in your Feed",
          dictionary: {
            es: {
              singular: "Cuando a alguien a quien sigue le gusta un video, aparece aquí en su fuente"
            },
            "de-DE": {
              singular: "Wenn jemandem, dem Sie folgen, ein Video gefällt, erscheint es hier in Ihrem Feed."
            },
            "fr-FR": {
              singular: "Lorsqu'une personne que vous suivez aime une vidéo, celle-ci apparaît ici, dans votre fil d'actualité"
            },
            "ja-JP": {
              singular: "フォローしている人が動画に「いいね」をすると、その動画はこのフィードに表示されます"
            },
            "ko-KR": {
              singular: "여러분이 팔로우하는 사람이 어떤 동영상을 좋아하면 해당 동영상이 여기 피드에 표시됩니다."
            },
            "pt-BR": {
              singular: "Quando uma pessoa que você segue curte um vídeo, aparece aqui no seu feed"
            },
            "zh-CN": {
              singular: "当您关注的某人点赞某个视频时，该视频就会出现在您的订阅源（Feed）中"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Explore Vimeo",
          dictionary: {
            es: {
              singular: "Explorar Vimeo"
            },
            "de-DE": {
              singular: "Vimeo erkunden"
            },
            "fr-FR": {
              singular: "Explorer Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoを探検する"
            },
            "ko-KR": {
              singular: "Vimeo 둘러보기"
            },
            "pt-BR": {
              singular: "Explorar o Vimeo"
            },
            "zh-CN": {
              singular: "探索 Vimeo"
            }
          }
        }),
        buttonLink: "/watch"
      }
    }, {
      copy: () => (0, _v10.translate)({
        singular: "Uploads",
        dictionary: {
          es: {
            singular: "Subidas"
          },
          "fr-FR": {
            singular: "Mises en ligne"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregamentos"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      }),
      value: "uploads",
      emptyState: {
        icon: _v9.Feed,
        title: () => (0, _v10.translate)({
          singular: "Nothing to watch yet",
          dictionary: {
            es: {
              singular: "No hay nada para ver todavía"
            },
            "de-DE": {
              singular: "Hier gibt es aktuell noch nichts zu sehen."
            },
            "fr-FR": {
              singular: "Rien à regarder pour le moment"
            },
            "ja-JP": {
              singular: "まだ視聴するものがありません"
            },
            "ko-KR": {
              singular: "아직 동영상이 없습니다."
            },
            "pt-BR": {
              singular: "Nada para assistir ainda"
            },
            "zh-CN": {
              singular: "暂无可观看的内容"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "When someone you follow likes a video, it appears here in your Feed",
          dictionary: {
            es: {
              singular: "Cuando a alguien a quien sigue le gusta un video, aparece aquí en su fuente"
            },
            "de-DE": {
              singular: "Wenn jemandem, dem Sie folgen, ein Video gefällt, erscheint es hier in Ihrem Feed."
            },
            "fr-FR": {
              singular: "Lorsqu'une personne que vous suivez aime une vidéo, celle-ci apparaît ici, dans votre fil d'actualité"
            },
            "ja-JP": {
              singular: "フォローしている人が動画に「いいね」をすると、その動画はこのフィードに表示されます"
            },
            "ko-KR": {
              singular: "여러분이 팔로우하는 사람이 어떤 동영상을 좋아하면 해당 동영상이 여기 피드에 표시됩니다."
            },
            "pt-BR": {
              singular: "Quando uma pessoa que você segue curte um vídeo, aparece aqui no seu feed"
            },
            "zh-CN": {
              singular: "当您关注的某人点赞某个视频时，该视频就会出现在您的订阅源（Feed）中"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Explore Vimeo",
          dictionary: {
            es: {
              singular: "Explorar Vimeo"
            },
            "de-DE": {
              singular: "Vimeo erkunden"
            },
            "fr-FR": {
              singular: "Explorer Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoを探検する"
            },
            "ko-KR": {
              singular: "Vimeo 둘러보기"
            },
            "pt-BR": {
              singular: "Explorar o Vimeo"
            },
            "zh-CN": {
              singular: "探索 Vimeo"
            }
          }
        }),
        buttonLink: "/watch"
      }
    }, {
      copy: () => (0, _v10.translate)({
        singular: "Appearances",
        dictionary: {
          es: {
            singular: "Participaciones"
          },
          "de-DE": {
            singular: "Erscheinungsbild"
          },
          "fr-FR": {
            singular: "Participations"
          },
          "ja-JP": {
            singular: "出演者"
          },
          "ko-KR": {
            singular: "출연"
          },
          "pt-BR": {
            singular: "Aparições"
          },
          "zh-CN": {
            singular: "出现"
          }
        }
      }),
      value: "appears",
      emptyState: {
        icon: _v24.Star,
        title: () => (0, _v10.translate)({
          singular: "No appearances yet",
          dictionary: {
            es: {
              singular: "Todavía no hay apariciones"
            },
            "de-DE": {
              singular: "Noch keine Auftritte"
            },
            "fr-FR": {
              singular: "Aucune apparition pour le moment"
            },
            "ja-JP": {
              singular: "まだ出演がありません"
            },
            "ko-KR": {
              singular: "아직 표시할 내용이 없습니다."
            },
            "pt-BR": {
              singular: "Ainda não aparece nada"
            },
            "zh-CN": {
              singular: "暂无出镜记录"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "When someone you follow gets credited in a video, it appears here in your Feed",
          dictionary: {
            es: {
              singular: "Cuando alguien a quien sigue aparece en los créditos de un video, aparece aquí en su fuente"
            },
            "de-DE": {
              singular: "Wenn jemand, dem Sie folgen, in einem Video erwähnt wird, erscheint es hier in Ihrem Feed."
            },
            "fr-FR": {
              singular: "Lorsqu'une personne que vous suivez est créditée dans une vidéo, elle apparaît ici dans votre fil d'actualité"
            },
            "ja-JP": {
              singular: "フォローしている人が動画にクレジットされると、このフィードに表示されます"
            },
            "ko-KR": {
              singular: "여러분이 팔로우하는 사람이 동영상에서 크레딧을 받으면 피드에 표시됩니다."
            },
            "pt-BR": {
              singular: "Quando alguém que você segue recebe crédito em um vídeo, aparece aqui no seu feed"
            },
            "zh-CN": {
              singular: "当您关注的某人在视频中获得认可时，该视频就会出现在您的订阅源（Feed）中"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Explore Vimeo",
          dictionary: {
            es: {
              singular: "Explorar Vimeo"
            },
            "de-DE": {
              singular: "Vimeo erkunden"
            },
            "fr-FR": {
              singular: "Explorer Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoを探検する"
            },
            "ko-KR": {
              singular: "Vimeo 둘러보기"
            },
            "pt-BR": {
              singular: "Explorar o Vimeo"
            },
            "zh-CN": {
              singular: "探索 Vimeo"
            }
          }
        }),
        buttonLink: "/watch"
      }
    }, {
      copy: () => (0, _v10.translate)({
        singular: "Channels",
        dictionary: {
          es: {
            singular: "Canales"
          },
          "de-DE": {
            singular: "Kanäle"
          },
          "fr-FR": {
            singular: "Chaînes"
          },
          "ja-JP": {
            singular: "チャンネル"
          },
          "ko-KR": {
            singular: "채널"
          },
          "pt-BR": {
            singular: "Canais"
          },
          "zh-CN": {
            singular: "频道"
          }
        }
      }),
      value: "channel",
      emptyState: {
        icon: _v26.TvRetro,
        title: () => (0, _v10.translate)({
          singular: "You’re not following any channels yet",
          dictionary: {
            es: {
              singular: "Aún no sigue ningún canal"
            },
            "de-DE": {
              singular: "Sie folgen bisher noch keinen Kanälen"
            },
            "fr-FR": {
              singular: "Vous ne suivez encore aucune chaîne"
            },
            "ja-JP": {
              singular: "まだどのチャンネルもフォローしていません"
            },
            "ko-KR": {
              singular: "아직 팔로우하는 채널이 없습니다."
            },
            "pt-BR": {
              singular: "Você ainda não segue nenhum canal"
            },
            "zh-CN": {
              singular: "您尚未关注任何频道"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "Channels organize videos by theme. They can be published by the team at Vimeo or by community members.",
          dictionary: {
            es: {
              singular: "Los canales organizan videos por tema. Pueden ser publicados por el equipo de Vimeo o por miembros de la comunidad."
            },
            "de-DE": {
              singular: "In den Kanälen sind die Videos nach Themen organisiert. Sie können vom Vimeo-Team oder von Community-Mitgliedern veröffentlicht werden."
            },
            "fr-FR": {
              singular: "Les chaînes organisent les vidéos par thème. Elles peuvent être publiées par l'équipe de Vimeo ou par les membres de la communauté."
            },
            "ja-JP": {
              singular: "チャンネルはテーマごとに動画を整理します。Vimeoのチームまたはコミュニティメンバーが公開できます。"
            },
            "ko-KR": {
              singular: "채널은 주제별로 동영상을 정리합니다. Vimeo 팀 또는 커뮤니티 멤버 동영상을 게시할 수 있습니다."
            },
            "pt-BR": {
              singular: "Os canais organizam os vídeos por tema. Eles podem ser publicados pela equipe do Vimeo ou pelos membros da comunidade."
            },
            "zh-CN": {
              singular: "频道按主题组织视频。它们可以由 Vimeo 团队或社区成员发布。"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Go to Channels",
          dictionary: {
            es: {
              singular: "Ir a Canales"
            },
            "de-DE": {
              singular: "Zu den Kanälen"
            },
            "fr-FR": {
              singular: "Accéder aux chaînes"
            },
            "ja-JP": {
              singular: "チャンネルに移動"
            },
            "ko-KR": {
              singular: "채널로 이동"
            },
            "pt-BR": {
              singular: "Ir para Canais"
            },
            "zh-CN": {
              singular: "前往频道"
            }
          }
        }),
        buttonLink: "/channels"
      }
    }, {
      copy: () => (0, _v10.translate)({
        singular: "Groups",
        dictionary: {
          es: {
            singular: "Grupos"
          },
          "de-DE": {
            singular: "Gruppen"
          },
          "fr-FR": {
            singular: "Groupes"
          },
          "ja-JP": {
            singular: "グループ"
          },
          "ko-KR": {
            singular: "그룹"
          },
          "pt-BR": {
            singular: "Grupos"
          },
          "zh-CN": {
            singular: "群组"
          }
        }
      }),
      value: "group",
      emptyState: {
        icon: _v27.Users,
        title: () => (0, _v10.translate)({
          singular: "You’re not following any groups yet",
          dictionary: {
            es: {
              singular: "Todavía no sigue a ningún grupo"
            },
            "de-DE": {
              singular: "Sie folgen bisher noch keinen Gruppen"
            },
            "fr-FR": {
              singular: "Vous ne suivez encore aucun groupe"
            },
            "ja-JP": {
              singular: "まだどのグループもフォローしていません"
            },
            "ko-KR": {
              singular: "아직 팔로우하는 그룹이 없습니다."
            },
            "pt-BR": {
              singular: "Você ainda não segue nenhum grupo"
            },
            "zh-CN": {
              singular: "您尚未关注任何群组"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "Groups bring people together for conversations about videos and other things they like",
          dictionary: {
            es: {
              singular: "Los grupos reúnen a las personas para conversar sobre videos y otras cosas que les gustan."
            },
            "de-DE": {
              singular: "Gruppen bringen Menschen zusammen, um sich über Videos und andere Dinge auszutauschen, die ihnen gefallen."
            },
            "fr-FR": {
              singular: "Les groupes rassemblent des personnes qui discutent de vidéos et de leurs centres d'intérêt"
            },
            "ja-JP": {
              singular: "グループは集まって動画やその他の好きなものについて会話ができる場です"
            },
            "ko-KR": {
              singular: "그룹은 사람들이 동영상이나 좋아하는 다양한 주제로 소통할 수 있는 공간입니다."
            },
            "pt-BR": {
              singular: "Os grupos reúnem as pessoas para conversas sobre vídeos e outras coisas de que elas gostam"
            },
            "zh-CN": {
              singular: "群组将人们聚集在一起，讨论视频和他们喜欢的其他内容"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Go to Groups",
          dictionary: {
            es: {
              singular: "Vaya a Grupos"
            },
            "de-DE": {
              singular: "Zu den Gruppen"
            },
            "fr-FR": {
              singular: "Accéder aux groupes"
            },
            "ja-JP": {
              singular: "グループに移動"
            },
            "ko-KR": {
              singular: "그룹으로 이동"
            },
            "pt-BR": {
              singular: "Ir para Grupos"
            },
            "zh-CN": {
              singular: "前往群组"
            }
          }
        }),
        buttonLink: "/groups"
      }
    }, {
      copy: () => (0, _v10.translate)({
        singular: "Tags",
        dictionary: {
          es: {
            singular: "Etiquetas"
          },
          "fr-FR": {
            singular: "Étiquettes"
          },
          "ja-JP": {
            singular: "タグ"
          },
          "ko-KR": {
            singular: "태그"
          },
          "pt-BR": {
            singular: "Etiquetas"
          },
          "zh-CN": {
            singular: "标签"
          }
        }
      }),
      value: "tagged_with",
      emptyState: {
        icon: _v0 => (0, _v1.jsx)(_v25.Icon, {
          viewBox: "0 0 24 24",
          ..._v0,
          fill: "none",
          children: (0, _v1.jsx)("path", {
            d: "m21.12 10.71-8.41-8.42A.999.999 0 0 0 12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L21.12 15a3 3 0 0 0 0-4.24v-.05Zm-1.41 2.82-6.18 6.17a1 1 0 0 1-1.41 0L4 11.59V4h7.59l8.12 8.12a1.001 1.001 0 0 1 0 1.41Z",
            fill: "currentColor"
          })
        }),
        title: () => (0, _v10.translate)({
          singular: "You’re not following any tags yet",
          dictionary: {
            es: {
              singular: "Aún no sigue ninguna etiqueta"
            },
            "de-DE": {
              singular: "Sie folgen bisher noch keinen Tags"
            },
            "fr-FR": {
              singular: "Vous ne suivez encore aucune étiquette"
            },
            "ja-JP": {
              singular: "まだどのタグもフォローしていません"
            },
            "ko-KR": {
              singular: "아직 팔로우하는 태그가 없습니다."
            },
            "pt-BR": {
              singular: "Você ainda não segue nenhuma etiqueta"
            },
            "zh-CN": {
              singular: "您尚未关注任何标签"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "Tags are keywords that describe video content and make it easier to find specific topics when searching",
          dictionary: {
            es: {
              singular: "Las etiquetas son palabras clave que describen el contenido de los videos y facilitan encontrar temas específicos al buscar."
            },
            "de-DE": {
              singular: "Tags sind Schlüsselwörter, die dazu dienen, Videoinhalte zu beschreiben, und das Auffinden bestimmter Themen bei der Suche erleichtern."
            },
            "fr-FR": {
              singular: "Les étiquettes sont des mots-clés qui décrivent le contenu de la vidéo et facilitent la recherche de thèmes spécifiques"
            },
            "ja-JP": {
              singular: "タグは動画コンテンツを説明するキーワードで、検索時に特定のトピックを見つけやすくします。"
            },
            "ko-KR": {
              singular: "태그는 동영상 콘텐츠를 설명하고 검색할 때 특정 주제를 더 쉽게 찾을 수 있도록 하는 키워드입니다."
            },
            "pt-BR": {
              singular: "As etiquetas são palavras-chave que descrevem o conteúdo do vídeo e tornam fácil localizar tópicos específicos durante pesquisas"
            },
            "zh-CN": {
              singular: "标签是描述视频内容的关键字，方便在搜索时更轻松地找到特定主题"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Explore Vimeo",
          dictionary: {
            es: {
              singular: "Explorar Vimeo"
            },
            "de-DE": {
              singular: "Vimeo erkunden"
            },
            "fr-FR": {
              singular: "Explorer Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoを探検する"
            },
            "ko-KR": {
              singular: "Vimeo 둘러보기"
            },
            "pt-BR": {
              singular: "Explorar o Vimeo"
            },
            "zh-CN": {
              singular: "探索 Vimeo"
            }
          }
        }),
        buttonLink: "/watch"
      }
    }, {
      copy: () => (0, _v10.translate)({
        singular: "Categories",
        dictionary: {
          es: {
            singular: "Categorías"
          },
          "de-DE": {
            singular: "Kategorien"
          },
          "fr-FR": {
            singular: "Catégories"
          },
          "ja-JP": {
            singular: "カテゴリー"
          },
          "ko-KR": {
            singular: "카테고리"
          },
          "pt-BR": {
            singular: "Categorias"
          },
          "zh-CN": {
            singular: "类别"
          }
        }
      }),
      value: "category_featured",
      emptyState: {
        icon: _v22.GridView,
        title: () => (0, _v10.translate)({
          singular: "You’re not following any categories yet",
          dictionary: {
            es: {
              singular: "Aún no sigue ninguna categoría."
            },
            "de-DE": {
              singular: "Sie folgen bisher noch keinen Kategorien"
            },
            "fr-FR": {
              singular: "Vous ne suivez pas encore de catégories"
            },
            "ja-JP": {
              singular: "まだどのカテゴリーもフォローしていません"
            },
            "ko-KR": {
              singular: "아직 팔로우하는 카테고리가 없습니다."
            },
            "pt-BR": {
              singular: "Você ainda não segue nenhuma categoria"
            },
            "zh-CN": {
              singular: "您尚未关注任何类别"
            }
          }
        }),
        description: () => (0, _v10.translate)({
          singular: "Categories are curated by Vimeo to highlight topics you might like",
          dictionary: {
            es: {
              singular: "Las categorías son seleccionadas por Vimeo para resaltar los temas que le podrían gustar."
            },
            "de-DE": {
              singular: "Kategorien werden von Vimeo kuratiert, um Themen hervorzuheben, die Ihnen gefallen könnten."
            },
            "fr-FR": {
              singular: "Les catégories sont sélectionnées par Vimeo pour mettre en avant des thèmes que vous pourriez apprécier"
            },
            "ja-JP": {
              singular: "カテゴリーはVimeoによってキュレート済みであり、興味を持たれそうなトピックをハイライトします"
            },
            "ko-KR": {
              singular: "관심사에 맞는 주제를 소개하기 위해 Vimeo에서 카테고리를 선별했습니다."
            },
            "pt-BR": {
              singular: "As categorias reúnem conteúdo selecionado pelo Vimeo e destacam tópicos que você talvez curta"
            },
            "zh-CN": {
              singular: "类别由 Vimeo 精心策划，以突出显示您可能喜欢的主题"
            }
          }
        }),
        buttonLabel: () => (0, _v10.translate)({
          singular: "Go to Categories",
          dictionary: {
            es: {
              singular: "Ir a Categorías"
            },
            "de-DE": {
              singular: "Zu den Kategorien"
            },
            "fr-FR": {
              singular: "Allez aux catégories"
            },
            "ja-JP": {
              singular: "カテゴリーに移動"
            },
            "ko-KR": {
              singular: "카테고리로 이동"
            },
            "pt-BR": {
              singular: "Ir para Categorias"
            },
            "zh-CN": {
              singular: "前往类别"
            }
          }
        }),
        buttonLink: "/categories"
      }
    }],
    _v36 = ["language", "drugs", "nudity", "violence"],
    _v37 = ({
      filterIndex: _v0,
      setFilterIndex: _v1
    }) => {
      let _v2 = (0, _v2.useRef)(null),
        _v3 = (0, _v2.useRef)(null),
        [_v4, _v5] = (0, _v2.useState)(!1);
      return (0, _v18.useOutsideClick)({
        enabled: _v4,
        ref: _v2,
        handler: _v0 => {
          _v3.current && _v0.target && (_v3.current == _v0.target || _v3.current?.contains(_v0.target)) || _v5(!1);
        }
      }), (0, _v1.jsxs)(_v14.Menu, {
        isOpen: _v4,
        children: [(0, _v1.jsx)(_v15.MenuButton, {
          as: _v8.Button,
          ref: _v3,
          rightIcon: (0, _v1.jsx)(_v20.ChevronDown, {
            boxSize: "sm"
          }),
          variant: "tertiary",
          borderRadius: "md",
          size: "md",
          onClick: () => _v5(!_v4),
          children: _v35[_v0].copy()
        }), (0, _v1.jsx)(_v16.MenuList, {
          children: (0, _v1.jsx)(_v19.MenuOptionGroup, {
            title: (0, _v10.translate)({
              singular: "Filter by",
              dictionary: {
                es: {
                  singular: "Filtrar por"
                },
                "de-DE": {
                  singular: "Filtern nach"
                },
                "fr-FR": {
                  singular: "Filtrer par"
                },
                "ja-JP": {
                  singular: "フィルター条件:"
                },
                "ko-KR": {
                  singular: "필터 기준"
                },
                "pt-BR": {
                  singular: "Filtrar por"
                },
                "zh-CN": {
                  singular: "按以下条件筛选"
                }
              }
            }),
            type: "radio",
            defaultValue: _v35[0].copy(),
            children: _v35.map(({
              copy: _v0
            }, _v1) => (0, _v1.jsx)(_v17.MenuItemOption, {
              value: _v0(),
              onClick: () => {
                _v1(_v1), _v5(!1);
              },
              isChecked: _v0 === _v1,
              children: _v0()
            }, _v0()))
          })
        })]
      });
    };
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = () => {
      let _v0 = null;
      return "u" > typeof document && document.referrer && (_v0 = (0, _v44.getPageNameFromPath)(new URL(document.referrer).pathname)), {
        referrer_page_name: _v0,
        ...(document.referrer && {
          referrer: document.referrer
        })
      };
    },
    _v56 = (_v0, _v1, _v2, _v3, _v4, _v5) => ({
      ...(_v1.view_type ? (0, _v52.buildViewBpContext)({
        view_type: _v1.view_type,
        feature: null
      }) : {}),
      ...(_v1.action_type ? (0, _v46.buildActionBpContext)({
        action_type: _v1.action_type,
        feature: null
      }) : {}),
      ...(0, _v48.buildProductAnalyticsBpContext)({
        product: "community",
        device_type: (0, _v45.default)(),
        ..._v2
      }),
      ...(0, _v53.buildWebBpContext)({
        page_name: "my_feed",
        path: window.location.pathname,
        ..._v3
      }),
      ...(_v4?.video_id ? (0, _v51.buildVideoBpContext)(_v4) : {}),
      ...(_v5 ? (0, _v47.buildCommunityBpContext)(_v5) : {}),
      ...(0, _v49.buildTeamBpContextFromTeamUser)(_v0?.teamUser),
      ...(0, _v50.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        managed_user_id: null,
        app_id: null,
        integration_type: null,
        partner_bucket: null,
        is_partner: null
      })
    }),
    _v57 = (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = _v56(_v0, {
        action_type: "click"
      }, {
        flow: "share" === _v4 ? "share_video_link" : null,
        entity_type: "video",
        element: "button",
        location: "bottom_panel",
        feature: _v4,
        copy: "collections" === _v4 ? "Add to collections" : _v4
      }, void 0, {
        video_id: _v1
      }, {
        object_actor_type: _v2,
        object_placement: _v3
      });
      (0, _v54.sendBpEventWithContexts)("vimeo.open_distribution_options", _v5, 16, {
        distribution_type: _v4,
        is_internal: !1,
        ...(0, _v54.createNullObject)(["collection_type", "distribution_tab", "embed_config", "embed_custom_dimensions", "embed_layout", "embed_playback_toggles_off", "embed_playback_toggles_on", "is_send_email_notification", "lms_completion_threshold", "lms_scoring_method", "lms_technical_standard", "number_of_items", "sharee_email", "sharee_entity_permission", "sharee_id", "sharee_team_permission", "target_file_details", "target_quality", "target_resolution", "target_transcript_language"])
      });
    },
    _v58 = (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = _v56(_v0, {
        action_type: "click"
      }, {
        flow: {
          groups: "group",
          channels: "channel",
          showcases: "showcase",
          explore: null
        }[_v4],
        entity_type: "video",
        element: "button",
        location: "dropdown",
        feature: "collections",
        copy: _v4
      }, void 0, {
        video_id: _v1
      }, {
        object_actor_type: _v2,
        object_placement: _v3
      });
      (0, _v54.sendBpEventWithContexts)("vimeo.distribute_content", _v5, 16, {
        distribution_type: "collections",
        is_internal: !1,
        number_of_items: 1,
        ...(0, _v54.createNullObject)(["target_quality", "target_resolution", "target_file_details", "embed_config", "embed_custom_dimensions", "sharee_id", "sharee_entity_permission", "sharee_team_permission", "is_send_email_notification", "sharee_email", "collection_type", "target_transcript_language", "embed_layout", "embed_playback_toggles_on", "embed_playback_toggles_off", "distribution_tab", "lms_completion_threshold", "lms_scoring_method", "lms_technical_standard"])
      });
    },
    _v59 = ({
      isAutoplayEnabled: _v0,
      setIsAutoplayEnabled: _v1
    }) => {
      let [_v2, _v3] = (0, _v2.useState)(!1),
        [_v4, {
          data: _v5
        }] = (0, _v43.useGetMePreferencesLazy)(),
        [_v6] = (0, _v43.usePatchMePreferences)(),
        _v7 = (0, _v5.useViewer)();
      return (0, _v2.useEffect)(() => {
        _v5 && _v1(_v5.myFeedAutoplay);
      }, [_v1, _v5]), (0, _v2.useEffect)(() => {
        _v4({
          select: ["myFeedAutoplay"]
        });
      }, []), (0, _v1.jsxs)(_v14.Menu, {
        isOpen: _v2,
        onClose: () => _v3(!1),
        placement: "bottom-end",
        gutter: 8,
        closeOnSelect: !0,
        children: [(0, _v1.jsx)(_v15.MenuButton, {
          as: _v38.IconButton,
          icon: (0, _v1.jsx)(_v42.SettingsGear, {}),
          variant: "tertiary",
          size: "md",
          onClick: () => _v3(!_v2),
          "data-id": "feed-page-gear-icon"
        }), (0, _v1.jsxs)(_v16.MenuList, {
          children: [(0, _v1.jsx)(_v17.MenuItemOption, {
            name: "autoplay",
            type: "checkbox",
            isChecked: !!_v0,
            onClick: () => {
              _v6({
                variables: {
                  myFeedAutoplay: Number(!_v0)
                },
                select: ["myFeedAutoplay"]
              }), _v3(!1), _v1(Number(!_v0));
            },
            children: (0, _v10.translate)({
              singular: "Autoplay videos",
              dictionary: {
                es: {
                  singular: "Reproducción automática de videos"
                },
                "de-DE": {
                  singular: "Videos automatisch abspielen"
                },
                "fr-FR": {
                  singular: "Lecture automatique des vidéos"
                },
                "ja-JP": {
                  singular: "動画を自動再生"
                },
                "ko-KR": {
                  singular: "동영상 자동 재생"
                },
                "pt-BR": {
                  singular: "Reprodução automática de vídeos"
                },
                "zh-CN": {
                  singular: "自动播放视频"
                }
              }
            })
          }), (0, _v1.jsx)(_v40.MenuDivider, {}), (0, _v1.jsx)(_v39.MenuItem, {
            as: "a",
            href: "/feedmanager",
            icon: (0, _v1.jsx)(_v41.PopOutFilled, {}),
            onClick: () => {
              let _v0;
              _v0 = _v56(_v7, {
                action_type: "click"
              }, {
                element: "dropdown",
                location: "top_navigation_bar",
                feature: "my_feed",
                copy: "Manage feed"
              }, {
                target: "feed_manager"
              }), (0, _v54.sendBpEventWithContexts)("vimeo.select_manage_setting", _v0);
            },
            children: (0, _v10.translate)({
              singular: "Manage Feed",
              dictionary: {
                es: {
                  singular: "Administrar la fuente"
                },
                "de-DE": {
                  singular: "Feed verwalten"
                },
                "fr-FR": {
                  singular: "Gérer le flux"
                },
                "ja-JP": {
                  singular: "フィードを管理"
                },
                "ko-KR": {
                  singular: "피드 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar feed"
                },
                "zh-CN": {
                  singular: "管理订阅源（Feed）"
                }
              }
            })
          })]
        })]
      });
    },
    _v60 = ({
      hideTools: _v0,
      filterIndex: _v1,
      setFilterIndex: _v2,
      isAutoplayEnabled: _v3,
      setIsAutoplayEnabled: _v4
    }) => (0, _v1.jsxs)(_v12.Flex, {
      justifyContent: "space-between",
      w: "100%",
      px: {
        base: "lg",
        md: 0
      },
      gap: "xs",
      children: [(0, _v1.jsx)(_v13.Header, {
        size: "xl",
        children: (0, _v10.translate)({
          singular: "Feed",
          dictionary: {
            es: {
              singular: "Fuente"
            },
            "fr-FR": {
              singular: "Flux"
            },
            "ja-JP": {
              singular: "フィード"
            },
            "ko-KR": {
              singular: "피드"
            }
          }
        })
      }), !_v0 && (0, _v1.jsxs)(_v12.Flex, {
        gap: "sm",
        children: [_v2 && (0, _v1.jsx)(_v37, {
          filterIndex: _v1 ?? 0,
          setFilterIndex: _v2
        }), _v4 && (0, _v1.jsx)(_v59, {
          isAutoplayEnabled: _v3 ?? 0,
          setIsAutoplayEnabled: _v4
        })]
      })]
    });
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = ({
      title: _v0,
      description: _v1,
      buttons: _v2,
      Icon: _v3
    }) => (0, _v1.jsx)(_v62.Center, {
      gap: "md",
      flexGrow: 1,
      children: (0, _v1.jsx)(_v12.Flex, {
        padding: "3xl",
        gap: "md",
        children: (0, _v1.jsx)(_v61.Box, {
          w: "100%",
          borderRadius: "lg",
          gap: "md",
          paddingX: "3xl",
          paddingY: "lg",
          position: "relative",
          children: (0, _v1.jsxs)(_v62.Center, {
            gap: "md",
            flexDirection: "column",
            children: [(0, _v1.jsxs)(_v62.Center, {
              gap: {
                base: "xs",
                sm: "sm"
              },
              flexDirection: "column",
              children: [(0, _v1.jsx)(_v3, {
                boxSize: "2xl"
              }), (0, _v1.jsx)(_v13.Header, {
                size: "xl",
                textAlign: "center",
                children: _v0
              }), (0, _v1.jsx)(_v63.Text, {
                variant: "body-lg",
                textAlign: "center",
                color: "text-secondary",
                children: _v1
              })]
            }), (0, _v1.jsx)(_v62.Center, {
              gap: "sm",
              children: _v2
            })]
          })
        })
      })
    }),
    _v65 = (0, _v6.default)(async () => {
      let {
        LoginJoinModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v66 = () => {
      let _v0 = (0, _v5.useViewer)(),
        [_v1, _v2] = (0, _v2.useState)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v60, {
          hideTools: !0
        }), (0, _v1.jsx)(_v64, {
          Icon: _v9.Feed,
          title: (0, _v10.translate)({
            singular: "Remarkable creators. Daily inspiration.",
            dictionary: {
              es: {
                singular: "Creadores notables. Inspiración diaria."
              },
              "de-DE": {
                singular: "Bemerkenswerte Creators. Tägliche Inspiration."
              },
              "fr-FR": {
                singular: "Des créateurs remarquables. Une inspiration quotidienne."
              },
              "ja-JP": {
                singular: "注目のクリエイターたち。日々のインスピレーション。"
              },
              "ko-KR": {
                singular: "주목할 만한 크리에이터들. 매일의 영감."
              },
              "pt-BR": {
                singular: "Criadores inspirados. Inspiração diária."
              },
              "zh-CN": {
                singular: "杰出创建者。每日灵感。"
              }
            }
          }),
          description: (0, _v10.translate)({
            singular: "Log in to follow your favorite creators and topics. Their latest content will appear right here in your Feed.",
            dictionary: {
              es: {
                singular: "Inicie sesión para seguir a sus creadores y temas favoritos. Su contenido más reciente aparecerá aquí en su fuente."
              },
              "de-DE": {
                singular: "Melden Sie sich an, um Ihren bevorzugten Creators und Themen zu folgen. Ihre neuesten Inhalte werden direkt hier in Ihrem Feed erscheinen."
              },
              "fr-FR": {
                singular: "Connectez-vous pour suivre vos créateurs et vos thèmes préférés. Le contenu le plus récent apparaîtra ici, dans votre fil d'actualité."
              },
              "ja-JP": {
                singular: "ログインしてお気に入りのクリエイターとトピックをフォローしましょう。最新のコンテンツはこのフィードに表示されます。"
              },
              "ko-KR": {
                singular: "좋아하는 크리에이터와 주제를 팔로우하려면 로그인하세요. 최신 콘텐츠가 여기 피드에 바로 표시됩니다."
              },
              "pt-BR": {
                singular: "Faça login para seguir seus criadores e tópicos favoritos. O conteúdo mais recente deles aparecerá bem aqui no seu feed."
              },
              "zh-CN": {
                singular: "登录以关注您喜爱的创建者和主题。他们的最新内容将会出现在您的订阅源（Feed）中。"
              }
            }
          }),
          buttons: [(0, _v1.jsx)(_v8.Button, {
            onClick: () => {
              _v2("login");
            },
            size: "md",
            variant: "secondary",
            children: (0, _v10.translate)({
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
          }, "login"), (0, _v1.jsx)(_v8.Button, {
            onClick: () => {
              _v2("join");
            },
            size: "md",
            variant: "primary",
            children: (0, _v10.translate)({
              singular: "Join for free",
              dictionary: {
                es: {
                  singular: "Únase gratis"
                },
                "de-DE": {
                  singular: "Kostenlos anmelden"
                },
                "fr-FR": {
                  singular: "Inscription gratuite"
                },
                "ja-JP": {
                  singular: "無料で登録"
                },
                "ko-KR": {
                  singular: "무료 가입"
                },
                "pt-BR": {
                  singular: "Inscrição grátis"
                },
                "zh-CN": {
                  singular: "免费加入"
                }
              }
            })
          }, "join")]
        }), (0, _v1.jsx)(_v7.ThemeProvider, {
          theme: _v11.themes.light,
          children: (0, _v1.jsx)(_v65, {
            isShowing: !!_v1,
            type: _v1 ?? "join",
            onDismiss: () => _v2(void 0),
            xsrft: _v0?.xsrft || "",
            updateInitialType: _v2,
            redirectUrl: window.location.pathname,
            onSuccess: () => {
              window.location.reload();
            }
          })
        })]
      });
    };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0);
  let _v75 = ({
    onDismiss: _v0
  }) => {
    let {
      emptyState: {
        icon: _v1,
        title: _v2,
        description: _v3,
        buttonLabel: _v4,
        buttonLink: _v5
      }
    } = _v35[0];
    return (0, _v1.jsxs)(_v61.Box, {
      w: "100%",
      borderRadius: "lg",
      gap: "md",
      paddingX: "3xl",
      paddingY: "lg",
      bgColor: "surface",
      position: "relative",
      children: [_v0 && (0, _v1.jsx)(_v74.CloseButton, {
        variant: "tertiary",
        size: "sm",
        position: "absolute",
        top: "1rem",
        right: "1rem",
        "aria-label": (0, _v10.translate)({
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
        onClick: _v0
      }), (0, _v1.jsxs)(_v62.Center, {
        gap: "md",
        flexDirection: "column",
        children: [(0, _v1.jsxs)(_v62.Center, {
          gap: {
            base: "xs",
            md: "sm"
          },
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v1, {
            boxSize: "lg"
          }), (0, _v1.jsx)(_v13.Header, {
            size: "md",
            textAlign: "center",
            children: _v2()
          }), (0, _v1.jsx)(_v63.Text, {
            variant: "body-md",
            textAlign: "center",
            color: "text-secondary",
            children: _v3()
          })]
        }), (0, _v1.jsx)(_v8.Button, {
          as: "a",
          href: _v5,
          size: "sm",
          variant: "primary",
          children: _v4()
        })]
      })]
    });
  };
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = () => (0, _v1.jsxs)(_v72.VStack, {
      w: "100%",
      gap: "md",
      alignItems: "start",
      children: [(0, _v1.jsxs)(_v12.Flex, {
        paddingX: ["md", "md", 0],
        gap: "sm",
        alignItems: "center",
        w: "100%",
        children: [(0, _v1.jsx)(_v76.Skeleton, {
          variant: "circle",
          boxSize: "2rem"
        }), (0, _v1.jsx)(_v76.Skeleton, {
          h: "2rem"
        })]
      }), (0, _v1.jsx)(_v76.Skeleton, {
        w: "100%",
        h: "unset",
        aspectRatio: 16 / 9
      }), (0, _v1.jsxs)(_v77.Stack, {
        paddingX: ["md", "md", 0],
        gap: "sm",
        w: "100%",
        children: [(0, _v1.jsx)(_v76.Skeleton, {
          h: "2rem"
        }), (0, _v1.jsx)(_v76.Skeleton, {
          h: "1rem",
          w: "75%"
        }), (0, _v1.jsx)(_v76.Skeleton, {
          h: "1rem",
          w: "75%"
        })]
      })]
    }),
    _v79 = ({
      count: _v0 = 5
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: Array(_v0).fill(null).map((_v0, _v1) => (0, _v1.jsx)(_v78, {}, _v1))
    }),
    _v80 = ({
      isLoading: _v0,
      onLoadMore: _v1
    }) => {
      let _v2 = (0, _v2.useRef)(null);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v2.current;
        if (!window.IntersectionObserver || !_v0) return;
        let _v1 = new IntersectionObserver(([_v0]) => {
          _v0.isIntersecting && !_v0 && _v1();
        });
        return _v0 && _v1.observe(_v0), () => {
          _v0 && _v1.unobserve(_v0);
        };
      }, [_v2, _v1]), (0, _v1.jsx)(_v72.VStack, {
        w: "100%",
        ref: _v2,
        gap: ["xl", "xl", "xl", "3xl"],
        children: (0, _v1.jsx)(_v79, {})
      });
    };
  var _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = ({
    timeStamp: _v0,
    isShort: _v1
  }) => {
    let _v2 = new Date(_v0),
      _v3 = (0, _v86.useLocale)(),
      _v4 = new Intl.DateTimeFormat(_v3, {
        dateStyle: "full",
        timeStyle: "short"
      }).format(_v2);
    return (0, _v1.jsx)("time", {
      dateTime: _v2.toString(),
      title: _v4,
      children: (0, _v85.fromNow)(_v2, {
        shorten: _v1
      })
    });
  };
  var _v88 = _v0.i(0);
  let _v89 = _v0 => _v0.replace(/<br\s*\/?>\s*$/, "").replace(/\n\s*$/, "").replace(/\s+$/, ""),
    _v90 = ({
      line: _v0 = 1,
      text: _v1 = "",
      showMoreString: _v2,
      customStyle: _v3
    }) => {
      let _v4 = (0, _v2.useRef)(null),
        _v5 = (0, _v2.useRef)(null),
        _v6 = (0, _v2.useRef)(void 0),
        [_v7, _v8] = (0, _v2.useState)(0),
        [_v9, _v10] = (0, _v2.useState)(!1);
      (0, _v2.useEffect)(() => {
        let _v0 = document.createElement("canvas");
        if (!_v4.current) return;
        let _v1 = window.getComputedStyle(_v4.current),
          _v2 = [_v1.fontWeight, _v1.fontStyle, _v1.fontSize, _v1.fontFamily].join(" ");
        _v5.current = _v0.getContext("2d"), _v5.current && (_v5.current.font = _v2), _v8(_v0 => _v0 + 1);
        let _v3 = () => {
          _v6.current && window.cancelAnimationFrame(_v6.current), _v6.current = window.requestAnimationFrame(() => {
            if (!_v4.current || !_v5.current) return;
            _v94.clear();
            let _v0 = window.getComputedStyle(_v4.current);
            _v5.current.font = [_v0.fontWeight, _v0.fontStyle, _v0.fontSize, _v0.fontFamily, _v0.letterSpacing].join(" "), _v8(_v0 => _v0 + 1);
          });
        };
        return window.addEventListener("resize", _v3), () => {
          window.removeEventListener("resize", _v3), _v6.current && window.cancelAnimationFrame(_v6.current);
        };
      }, []);
      let _v11 = _v95(_v4.current, _v5.current, _v2, _v1, _v9, _v0),
        [_v12] = (0, _v88.useToken)("semanticTokens", ["colors.text-secondary"]),
        _v13 = _v11 ?? _v89(_v1);
      return (0, _v1.jsx)(_v61.Box, {
        fontSize: "text-sm",
        lineHeight: "text-sm",
        ref: _v4,
        overflow: "hidden",
        onClick: () => _v10(!0),
        dangerouslySetInnerHTML: {
          __html: _v13
        },
        sx: {
          ..._v3,
          "& .read_more": {
            color: _v12,
            _hover: {
              cursor: "pointer"
            }
          }
        }
      });
    },
    _v91 = /<([^\s>]+)/,
    _v92 = /<[^>]*>/g,
    _v93 = _v0 => {
      let _v1 = _v0.match(_v91);
      return _v1 ? _v1[1] : null;
    },
    _v94 = new Map(),
    _v95 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      if (!_v0 || !_v5 || !_v3.length) return "";
      let _v6 = _v0.getBoundingClientRect().width;
      if (0 === _v6) return "";
      let _v7 = _v0 => {
          if (!_v1) return 0;
          if (_v94.has(_v0)) return _v94.get(_v0) ?? 0;
          let _v1 = _v0.replace(_v92, ""),
            _v2 = _v1.measureText(_v1).width;
          return _v94.set(_v0, _v2), _v2;
        },
        _v8 = _v6 - _v7("...") - _v7(" " + _v2),
        _v9 = (_v0 => {
          let _v1 = _v89(_v0),
            _v2 = [],
            _v3 = 0;
          for (; _v3 < _v1.length;) if ("<" === _v1[_v3]) {
            let _v0 = _v1.indexOf(">", _v3);
            -1 === _v0 && (_v0 = _v1.length);
            let _v1 = _v1.substring(_v3, _v0 + 1);
            "<br>" === _v1 || "<br/>" === _v1 || "<br />" === _v1 || "</p>" === _v1 || _v1.startsWith("<p") ? _v2.push({
              type: "linebreak",
              content: _v1
            }) : _v2.push({
              type: "tag",
              content: _v1,
              isClosing: _v1.startsWith("</")
            }), _v3 = _v0 + 1;
          } else {
            let _v0 = _v1.indexOf("<", _v3);
            -1 === _v0 && (_v0 = _v1.length);
            let _v1 = _v1.substring(_v3, _v0);
            _v1 && _v2.push({
              type: "text",
              content: _v1
            }), _v3 = _v0;
          }
          return _v2;
        })(_v3),
        _v10 = [],
        _v11 = [],
        _v12 = "";
      _v9.forEach((_v0, _v1) => {
        "linebreak" === _v0.type ? (_v11.length > 0 && (_v10.push({
          content: _v12,
          items: [..._v11]
        }), _v11 = [], _v12 = ""), _v1 < _v9.length - 1 && _v11.push(_v0)) : (_v11.push(_v0), "text" === _v0.type && (_v12 += _v0.content));
      }), _v11.length > 0 && _v10.push({
        content: _v12,
        items: _v11
      });
      let _v13 = _v4 ? Number.MAX_SAFE_INTEGER : _v5,
        _v14 = "",
        _v15 = [],
        _v16 = 0,
        _v17 = !1;
      for (let _v0 = 0; _v0 < _v10.length; _v0++) {
        let _v0 = _v10[_v0],
          _v1 = _v0.items.every(_v0 => "tag" === _v0.type && !_v0.isClosing && !["<br>", "<br/>", "<br />"].includes(_v0.content)),
          _v2 = _v0.content.trim().length > 0;
        if (!_v2 && _v1) {
          for (let _v0 of _v0.items) if (_v14 += _v0.content, "tag" === _v0.type) {
            if (_v0.isClosing) _v15.pop();else if (!_v0.content.includes("/>") && !_v0.content.startsWith("<!")) {
              let _v0 = _v93(_v0.content);
              _v0 && _v15.push(_v0);
            }
          }
          continue;
        }
        let _v3 = 0;
        if ((_v2 || _v0.items.some(_v0 => "linebreak" === _v0.type && ["<br>", "<br/>", "<br />"].includes(_v0.content))) && (_v3 = 1), _v2) {
          let _v0 = _v0.content.split(/\s+/).filter(_v0 => _v0.length > 0),
            _v1 = 1,
            _v2 = 0;
          for (let _v0 of _v0) {
            let _v0 = _v7(_v0 + " ");
            _v2 + _v0 <= _v6 ? _v2 += _v0 : (_v1++, _v2 = _v0);
          }
          _v3 = Math.max(_v3, _v1);
        }
        if (_v16 + _v3 > _v13 || _v16 + _v3 === _v13 && _v0 < _v10.length - 1) {
          let _v0 = _v13 - _v16;
          if (_v0 > 0) {
            let _v0 = 1,
              _v1 = "",
              _v2 = "";
            for (let _v0 of _v0.items) {
              if ("text" === _v0.type) {
                let _v0 = _v0.content.split(/(\s+)/);
                for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                  let _v0 = _v0[_v0];
                  if (!_v0) continue;
                  let _v1 = _v0 < _v0 ? _v6 : _v8;
                  if (_v7(_v2 + _v0) <= _v1) _v2 += _v0;else if (_v0 < _v0) _v1 += _v2, _v0++, _v2 = /^\s+$/.test(_v0) ? "" : _v0;else {
                    _v1 += _v2, _v17 = !0;
                    break;
                  }
                }
                if (_v17) {
                  _v14 += _v1;
                  break;
                }
                _v2 && (_v1 += _v2, _v2 = "");
              } else if ("tag" === _v0.type) {
                if (_v1 += _v0.content, _v0.isClosing) _v15.pop();else if (!_v0.content.includes("/>") && !_v0.content.startsWith("<!")) {
                  let _v0 = _v93(_v0.content);
                  _v0 && _v15.push(_v0);
                }
              } else if ("linebreak" === _v0.type) {
                if (["<br>", "<br/>", "<br />"].includes(_v0.content) && (_v2 = "", ++_v0 > _v0)) {
                  _v17 = !0;
                  break;
                }
                _v1 += _v0.content;
              }
              if (_v17) break;
            }
            _v17 || (_v14 += _v1);
          }
          _v17 = !0;
          break;
        }
        for (let _v0 of (_v16 + _v3 === _v13 && _v0 === _v10.length - 1 && (_v17 = !1), _v16 += _v3, _v0.items)) if (_v14 += _v0.content, "tag" === _v0.type) {
          if (_v0.isClosing) _v15.pop();else if (!_v0.content.includes("/>") && !_v0.content.startsWith("<!")) {
            let _v0 = _v93(_v0.content);
            _v0 && _v15.push(_v0);
          }
        }
      }
      if (!_v17) return _v89(_v3);
      let _v18 = ["a", "span", "em", "i", "strong", "b", "u", "code", "mark", "small", "sub", "sup"],
        _v19 = "";
      for (; _v15.length > 0;) {
        let _v0 = _v15.pop();
        if (void 0 === _v0) break;
        let _v1 = _v0.toLowerCase();
        _v18.includes(_v1) ? _v14 += `</${_v0}>` : _v19 += `</${_v0}>`;
      }
      return _v14 += `<span class="read_more">... ${_v2}</span>`, _v14 += _v19;
    },
    _v96 = ({
      description: _v0
    }) => {
      let _v1 = !_v0?.startsWith('<p class="first">'),
        _v2 = {
          p: {
            mb: 200
          }
        };
      return _v1 && (_v2 = {
        a: {
          color: "blue.500"
        },
        ol: {
          paddingLeft: "400",
          listStyleType: "auto"
        },
        ul: {
          paddingLeft: "400",
          listStyleType: "unset"
        }
      }), (0, _v1.jsx)(_v90, {
        line: 2,
        text: _v0,
        showMoreString: (0, _v10.translate)({
          singular: "Show more",
          dictionary: {
            es: {
              singular: "Mostrar más"
            },
            "de-DE": {
              singular: "Mehr anzeigen"
            },
            "fr-FR": {
              singular: "Afficher plus"
            },
            "ja-JP": {
              singular: "その他を表示する"
            },
            "ko-KR": {
              singular: "더 보기"
            },
            "pt-BR": {
              singular: "Mostar mais"
            },
            "zh-CN": {
              singular: "显示更多"
            }
          }
        }),
        customStyle: _v2
      });
    },
    _v97 = ({
      player: _v0,
      activityType: _v1,
      position: _v2,
      videoLink: _v3,
      videoId: _v4,
      videoName: _v5,
      videoDescription: _v6,
      videoCreatedTime: _v7,
      isRatedMature: _v8,
      is360Video: _v9,
      isDolbyVision: _v10,
      isHdr10: _v11,
      isHdr10Plus: _v12,
      aiContent: _v13,
      isAdvert: _v14,
      isLoading: _v15
    }) => {
      let _v16 = (0, _v5.useViewer)();
      return (0, _v1.jsxs)(_v77.Stack, {
        paddingLeft: ["md", "md", 0],
        paddingRight: ["md", "md", 0],
        gap: "sm",
        w: "100%",
        children: [(0, _v1.jsx)(_v13.Header, {
          size: "md",
          children: (0, _v1.jsx)(_v83.Link, {
            href: _v3,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: async _v0 => {
              let _v1;
              _v0.preventDefault();
              let _v2 = 0;
              try {
                _v0 && (await _v0.pause(), _v2 = await _v0.getCurrentTime());
              } catch (_v0) {}
              window.open(`${_v3}#t=${_v2}`, "_blank"), _v1 = _v56(_v16, {
                action_type: "click"
              }, {
                entity_type: "video",
                element: "link",
                location: "header",
                feature: "my_feed"
              }, {
                target: _v3,
                target_path: "viewer_home"
              }, {
                video_id: _v4
              }, {
                object_actor_type: _v1,
                object_placement: _v2
              }), (0, _v54.sendBpEventWithContexts)("vimeo.open_video", _v1);
            },
            children: _v5
          })
        }), (0, _v1.jsxs)(_v82.HStack, {
          flexWrap: "wrap",
          gap: 50,
          children: [(0, _v1.jsx)(_v63.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: (0, _v1.jsx)(_v87, {
              timeStamp: _v7,
              isShort: !1
            })
          }), _v15 ? (0, _v1.jsx)(_v76.Skeleton, {
            height: "100%",
            width: "4rem"
          }) : (0, _v1.jsx)(_v84.VideoBadges, {
            isStreaming: !1,
            isRatedMature: _v8,
            is360Video: _v9,
            isDolbyVision: _v10,
            isHdr10: _v11,
            isHdr10Plus: _v12,
            aiContent: _v13,
            isAdvert: _v14
          })]
        }), _v6 && "<br />\n" !== _v6 ? (0, _v1.jsx)(_v96, {
          description: _v6
        }) : null]
      });
    };
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = "showcases",
    _v104 = "channels",
    _v105 = "groups",
    _v106 = (0, _v6.default)(async () => {
      let {
        PublicChannels: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v107 = (0, _v6.default)(async () => {
      let {
        PublicGroups: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v108 = ({
      videoId: _v0,
      title: _v1,
      isMobile: _v2,
      activityType: _v3,
      position: _v4
    }) => {
      let {
          openAddToShowcaseModal: _v5,
          closeAddToShowcaseModal: _v6
        } = (0, _v102.useAddToShowcaseModal)(),
        _v7 = (0, _v5.useViewer)(),
        _v8 = _v7?.user?.id ?? 0,
        _v9 = _v7?.isFromCopyrightRestrictedRegion ?? !0,
        _v10 = [{
          id: _v0,
          name: _v1 || "video",
          type: "video"
        }],
        [_v11, _v12] = (0, _v2.useState)(""),
        _v13 = _v0 => {
          _v0 && (_v0 === _v103 ? (_v58(_v7, _v0, _v3, _v4, _v103), _v5({
            onClose: () => {
              _v6(), _v12("");
            },
            showcaseItems: _v10,
            ownerId: _v8,
            pageName: "my_feed",
            pageUrl: window.location.href,
            isPublic: !0
          })) : (_v12(_v0), _v58(_v7, _v0, _v3, _v4, _v0)));
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v14.Menu, {
          children: [(0, _v1.jsx)(_v100.Tooltip, {
            label: (0, _v10.translate)({
              singular: "Add to collections",
              dictionary: {
                es: {
                  singular: "Agregar a las colecciones"
                },
                "de-DE": {
                  singular: "Zu Sammlungen hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter aux collections"
                },
                "ja-JP": {
                  singular: "コレクションに追加"
                },
                "ko-KR": {
                  singular: "컬렉션에 추가"
                },
                "pt-BR": {
                  singular: "Adicionar às coleções"
                },
                "zh-CN": {
                  singular: "添加到合集中"
                }
              }
            }),
            placement: "top",
            isDisabled: _v2,
            children: (0, _v1.jsx)(_v15.MenuButton, {
              as: _v38.IconButton,
              variant: "tertiary",
              size: "sm",
              icon: (0, _v1.jsx)(_v101.HoverAnimatedIcon, {
                iconName: "3-layers"
              }),
              onFocus: _v0 => _v0.preventDefault(),
              title: "Collections button",
              onClick: () => {
                _v57(_v7, _v0, _v3, _v4, "collections");
              }
            })
          }), (0, _v1.jsxs)(_v16.MenuList, {
            children: [(0, _v1.jsxs)(_v99.MenuGroup, {
              title: (0, _v10.translate)({
                singular: "Add to",
                dictionary: {
                  es: {
                    singular: "Añadir a"
                  },
                  "de-DE": {
                    singular: "Hinzufügen zu"
                  },
                  "fr-FR": {
                    singular: "Ajouter à"
                  },
                  "ja-JP": {
                    singular: "追加"
                  },
                  "ko-KR": {
                    singular: "다음에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar a"
                  },
                  "zh-CN": {
                    singular: "添加到"
                  }
                }
              }),
              children: [(0, _v1.jsx)(_v39.MenuItem, {
                onClick: () => _v13?.(_v103),
                children: (0, _v10.translate)({
                  singular: "Showcase",
                  dictionary: {
                    es: {
                      singular: "Presentaciones"
                    },
                    "de-DE": {
                      singular: "Präsentation"
                    },
                    "fr-FR": {
                      singular: "Présentation"
                    },
                    "ja-JP": {
                      singular: "作品集"
                    },
                    "ko-KR": {
                      singular: "쇼케이스"
                    },
                    "pt-BR": {
                      singular: "Vitrine"
                    },
                    "zh-CN": {
                      singular: "橱窗"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v39.MenuItem, {
                onClick: () => _v13?.(_v104),
                children: (0, _v10.translate)({
                  singular: "Channel",
                  dictionary: {
                    es: {
                      singular: "Canal"
                    },
                    "de-DE": {
                      singular: "Kanal"
                    },
                    "fr-FR": {
                      singular: "Chaîne"
                    },
                    "ja-JP": {
                      singular: "チャンネル"
                    },
                    "ko-KR": {
                      singular: "채널"
                    },
                    "pt-BR": {
                      singular: "Canal"
                    },
                    "zh-CN": {
                      singular: "频道"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v39.MenuItem, {
                onClick: () => _v13?.(_v105),
                children: (0, _v10.translate)({
                  singular: "Group",
                  dictionary: {
                    es: {
                      singular: "Grupo"
                    },
                    "de-DE": {
                      singular: "Gruppe"
                    },
                    "fr-FR": {
                      singular: "Groupe"
                    },
                    "ja-JP": {
                      singular: "グループ"
                    },
                    "ko-KR": {
                      singular: "그룹"
                    },
                    "pt-BR": {
                      singular: "Grupo"
                    },
                    "zh-CN": {
                      singular: "群组"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v40.MenuDivider, {}), !_v9 && (0, _v1.jsx)(_v39.MenuItem, {
              onClick: () => {
                _v58(_v7, _v0, _v3, _v4, "explore"), window.location.href = `/${_v0}/collections/`;
              },
              children: (0, _v10.translate)({
                singular: "Explore collections",
                dictionary: {
                  es: {
                    singular: "Explora las colecciones"
                  },
                  "de-DE": {
                    singular: "Kollektionen entdecken"
                  },
                  "fr-FR": {
                    singular: "Explorez des collections"
                  },
                  "ja-JP": {
                    singular: "コレクション全体を探索してみる"
                  },
                  "ko-KR": {
                    singular: "컬렉션 탐색"
                  },
                  "pt-BR": {
                    singular: "Explore coleções"
                  },
                  "zh-CN": {
                    singular: "浏览收藏集"
                  }
                }
              })
            })]
          })]
        }), _v11 === _v104 ? (0, _v1.jsx)(_v106, {
          onClose: () => _v12(""),
          videoId: _v0,
          videoName: _v1 || "video",
          ownerId: _v8,
          pageName: "viewer_home"
        }) : null, _v11 === _v105 ? (0, _v1.jsx)(_v107, {
          onClose: () => _v12(""),
          videoId: _v0,
          videoName: _v1 || "video",
          ownerId: _v8,
          pageName: "viewer_home"
        }) : null]
      });
    },
    _v109 = ({
      videoLink: _v0,
      isMobile: _v1,
      totalComments: _v2,
      videoId: _v3,
      activityType: _v4,
      position: _v5
    }) => {
      let _v6 = (0, _v5.useViewer)(),
        _v7 = `${_v0}#comments`,
        _v8 = () => {
          let _v0;
          _v0 = _v56(_v6, {
            action_type: "click"
          }, {
            entity_type: "video",
            element: "button",
            location: "bottom_panel",
            feature: "comments"
          }, {
            target: "viewer_home",
            target_path: _v0
          }, {
            video_id: _v3
          }, {
            object_actor_type: _v4,
            object_placement: _v5
          }), (0, _v54.sendBpEventWithContexts)("vimeo.open_comments", _v0);
        };
      return (0, _v1.jsx)(_v100.Tooltip, {
        label: (0, _v10.translate)({
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
        placement: "top",
        isDisabled: _v1,
        children: _v2 ? (0, _v1.jsx)(_v8.Button, {
          as: "a",
          href: _v7,
          variant: "tertiary",
          size: "sm",
          leftIcon: (0, _v1.jsx)(_v101.HoverAnimatedIcon, {
            iconName: "comment"
          }),
          onClick: _v8,
          children: _v2
        }) : (0, _v1.jsx)(_v38.IconButton, {
          as: "a",
          "aria-label": "Comments button",
          title: "Comments button",
          href: _v7,
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v101.HoverAnimatedIcon, {
            iconName: "comment"
          }),
          onClick: _v8
        })
      });
    };
  var _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = ({
    isMobile: _v0,
    videoId: _v1,
    activityType: _v2,
    position: _v3
  }) => {
    let _v4 = (0, _v5.useViewer)(),
      {
        data: _v5
      } = (0, _v81.useGetVideo)(() => _v1 ? {
        where: {
          videoId: _v1
        },
        select: ["download"]
      } : null, {
        revalidateOnFocus: !1
      }),
      _v6 = _v5?.download ?? [],
      _v7 = _v1 ? _v6.sort((_v0, _v1) => "source" === _v0.quality ? 0 : _v1.height - _v0.height) : [],
      {
        data: _v8
      } = (0, _v112.useGetVideoTexttracks)(() => _v1 ? {
        where: {
          videoId: _v1
        },
        select: ["active", "displayLanguage", "id", "language", "type", "link"],
        query: {
          perPage: 100
        }
      } : null, {
        revalidateOnFocus: !1,
        shouldRetryOnError: !1
      }),
      _v9 = _v8?.data.filter(_v0 => _v0.active && ("captions" === _v0.type || "subtitles" === _v0.type)) || [],
      {
        isOpen: _v10,
        onOpen: _v11,
        onClose: _v12
      } = (0, _v110.useDisclosure)();
    return 0 === _v7.length && 0 === _v9.length ? null : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v100.Tooltip, {
        label: (0, _v10.translate)({
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
        placement: "top",
        isDisabled: _v0,
        children: (0, _v1.jsx)(_v38.IconButton, {
          "aria-label": "Download button",
          onClick: () => {
            _v11(), _v57(_v4, _v1, _v2, _v3, "download");
          },
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v101.HoverAnimatedIcon, {
            iconName: "download-import"
          }),
          children: (0, _v10.translate)({
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
          })
        })
      }), (0, _v1.jsx)(_v111.DownloadList, {
        showAsModal: !0,
        isOpen: _v10,
        videoFiles: _v7,
        texttracks: _v9,
        onClose: _v12,
        videoId: _v1.toString()
      })]
    });
  };
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0);
  let _v118 = ({
    isMobile: _v0,
    initialState: _v1,
    videoId: _v2,
    totalLikes: _v3,
    activityType: _v4,
    position: _v5
  }) => {
    let [_v6, _v7] = (0, _v2.useState)(_v1),
      [_v8, {
        loading: _v9,
        error: _v10
      }] = (0, _v117.usePutUserLike)(),
      [_v11, {
        loading: _v12,
        error: _v13
      }] = (0, _v117.useDeleteUserLike)(),
      _v14 = (0, _v5.useViewer)(),
      _v15 = (0, _v114.useToast)(),
      _v16 = async () => {
        if (_v14?.user?.id) {
          let _v0;
          _v0 = _v56(_v14, {
            action_type: "click"
          }, {
            entity_type: "video",
            element: "button",
            location: "bottom_panel",
            feature: "like"
          }, void 0, {
            video_id: _v2
          }, {
            object_actor_type: _v4,
            object_placement: _v5
          }), (0, _v54.sendBpEventWithContexts)("vimeo.select_like_button", _v0), _v6 ? (_v7(!1), await _v11({
            where: {
              userId: _v14.user.id,
              videoId: _v2
            }
          })) : (_v7(!0), await _v8({
            where: {
              userId: _v14.user.id,
              videoId: _v2
            }
          }));
        }
      };
    (0, _v2.useEffect)(() => {
      _v10 && (_v7(!1), _v15({
        title: (0, _v10.translate)({
          singular: "Oops! Something went wrong. Please try again.",
          dictionary: {
            es: {
              singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
            },
            "de-DE": {
              singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
            },
            "fr-FR": {
              singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
            },
            "ja-JP": {
              singular: "エラーが発生しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "哎呀，出错了。请重试。"
            }
          }
        }),
        status: "error",
        icon: (0, _v1.jsx)(_v115.CircleExclamationFilled, {})
      }));
    }, [_v10, _v15]), (0, _v2.useEffect)(() => {
      _v13 && (_v7(!0), _v15({
        title: (0, _v10.translate)({
          singular: "Oops! Something went wrong. Please try again.",
          dictionary: {
            es: {
              singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
            },
            "de-DE": {
              singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
            },
            "fr-FR": {
              singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
            },
            "ja-JP": {
              singular: "エラーが発生しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "哎呀，出错了。请重试。"
            }
          }
        }),
        status: "error",
        icon: (0, _v1.jsx)(_v115.CircleExclamationFilled, {})
      }));
    }, [_v13, _v15]);
    let _v17 = _v1 === _v6 ? _v3 : _v6 ? _v3 + 1 : Math.max(_v3 - 1, 0);
    return (0, _v1.jsx)(_v116.AnimatedLikeButton, {
      isLiked: _v6,
      isLoading: _v9 || _v12,
      disableTooltips: _v0,
      onLikeClick: _v16,
      likesCount: _v17
    });
  };
  var _v119 = _v0.i(0);
  let _v120 = ({
      isMobile: _v0,
      videoId: _v1,
      activityType: _v2,
      position: _v3
    }) => {
      let {
          isOpen: _v4,
          onClose: _v5,
          onOpen: _v6
        } = (0, _v110.useDisclosure)(),
        _v7 = (0, _v5.useViewer)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v100.Tooltip, {
          label: (0, _v10.translate)({
            singular: "Report",
            dictionary: {
              es: {
                singular: "Denunciar"
              },
              "de-DE": {
                singular: "Melden"
              },
              "fr-FR": {
                singular: "Signaler"
              },
              "ja-JP": {
                singular: "通報"
              },
              "ko-KR": {
                singular: "신고"
              },
              "pt-BR": {
                singular: "Denunciar"
              },
              "zh-CN": {
                singular: "报告"
              }
            }
          }),
          placement: "top",
          isDisabled: _v0,
          children: (0, _v1.jsx)(_v38.IconButton, {
            "aria-label": "Report button",
            onClick: () => {
              let _v0;
              _v6(), _v0 = _v56(_v7, {
                action_type: "click"
              }, {
                element: "button",
                location: "bottom_panel",
                feature: "flag_report",
                modal_name: "flag_report_modal",
                flow: null,
                copy: "Report"
              }, void 0, {
                video_id: _v1
              }, {
                object_actor_type: _v2,
                object_placement: _v3
              }), (0, _v54.sendBpEventWithContexts)("vimeo.open_flag_report_modal", _v0);
            },
            variant: "tertiary",
            size: "sm",
            icon: (0, _v1.jsx)(_v101.HoverAnimatedIcon, {
              iconName: "flag"
            }),
            children: (0, _v10.translate)({
              singular: "Report",
              dictionary: {
                es: {
                  singular: "Denunciar"
                },
                "de-DE": {
                  singular: "Melden"
                },
                "fr-FR": {
                  singular: "Signaler"
                },
                "ja-JP": {
                  singular: "通報"
                },
                "ko-KR": {
                  singular: "신고"
                },
                "pt-BR": {
                  singular: "Denunciar"
                },
                "zh-CN": {
                  singular: "报告"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v119.GranularReportVideoModal, {
          onSubmitReport: () => {
            let _v0;
            _v0 = _v56(_v7, {
              action_type: "click"
            }, {
              element: "button",
              location: "bottom_panel",
              feature: "flag_report",
              modal_name: "flag_report_modal",
              flow: null,
              copy: "Submit"
            }, void 0, {
              video_id: _v1
            }, {
              object_actor_type: _v2,
              object_placement: _v3
            }), (0, _v54.sendBpEventWithContexts)("vimeo.submit_flag_report", _v0);
          },
          clipId: _v1.toString(),
          isOpen: _v4,
          onClose: _v5
        })]
      });
    },
    _v121 = (0, _v6.default)(async () => {
      let {
        VideoShareModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v122 = ({
      isMobile: _v0,
      player: _v1,
      videoId: _v2,
      activityType: _v3,
      position: _v4
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(!1),
        [_v7, _v8] = (0, _v2.useState)(0),
        _v9 = (0, _v5.useViewer)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v100.Tooltip, {
          label: (0, _v10.translate)({
            singular: "Share",
            dictionary: {
              es: {
                singular: "Compartir"
              },
              "de-DE": {
                singular: "Teilen"
              },
              "fr-FR": {
                singular: "Partager"
              },
              "ja-JP": {
                singular: "共有"
              },
              "ko-KR": {
                singular: "공유"
              },
              "pt-BR": {
                singular: "Compartilhar"
              },
              "zh-CN": {
                singular: "分享"
              }
            }
          }),
          placement: "top",
          isDisabled: _v0,
          children: (0, _v1.jsx)(_v38.IconButton, {
            "aria-label": "Share button",
            title: "Share button",
            onClick: async _v0 => {
              await _v1?.pause(), _v8((await _v1?.getCurrentTime()) ?? 0), _v6(!0), _v0.currentTarget?.blur(), _v57(_v9, _v2, _v3, _v4, "share");
            },
            variant: "tertiary",
            size: "sm",
            icon: (0, _v1.jsx)(_v101.HoverAnimatedIcon, {
              iconName: "send"
            })
          })
        }), (0, _v1.jsx)(_v121, {
          uri: `video/${_v2}`,
          page: "my_feed",
          entryPoint: null,
          isResourceShareModalOpen: _v5,
          closeResourceShareModal: () => {
            _v6(!1);
          },
          getPlayerCurrentTime: () => _v7,
          showPrivacyRedesign: !0
        })]
      });
    };
  var _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0);
  async function _v128({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      videoId: _v3
    },
    ..._v4
  }) {
    return (0, _v126.measureLatency)("getUserWatchlater", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/watchlater/${_v3}?fields=${_v1.map(_v127.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v127.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v127.deepCamelCase)(_v1);
    });
  }
  async function _v129({
    baseUrl: _v0,
    where: {
      userId: _v1,
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v126.measureLatency)("putUserWatchlater", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/watchlater/${_v2}?${(0, _v127.searchQueryString)(_v3)}`, {
        ..._v4,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v127.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v127.deepCamelCase)(_v1);
    });
  }
  async function _v130({
    baseUrl: _v0,
    where: {
      userId: _v1,
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v126.measureLatency)("deleteUserWatchlater", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/watchlater/${_v2}?${(0, _v127.searchQueryString)(_v3)}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v127.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v127.deepCamelCase)(_v1);
    });
  }
  var _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0);
  function _v134() {
    let {
        mutate: _v0
      } = (0, _v132.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v133.useGctlConfig)(),
      [_v5, _v6] = (0, _v125.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/watchlater/${_v0.where.videoId}${(0, _v125.serializeQuery)(_v0)}`, _v129({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  function _v135() {
    let {
        mutate: _v0
      } = (0, _v132.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v133.useGctlConfig)(),
      [_v5, _v6] = (0, _v125.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/watchlater/${_v0.where.videoId}${(0, _v125.serializeQuery)(_v0)}`, _v130({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v133.useGctlConfig)();
    return (0, _v131.default)(_v2 ? `/users/${_v2.where.userId}/watchlater/${_v2.where.videoId}${(0, _v125.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v128({
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
  }, {
    endpoint: "/users/:userId/watchlater/:videoId",
    method: "GET"
  }), "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v132.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v133.useGctlConfig)(),
      [_v5, _v6] = (0, _v125.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/watchlater/${_v0.where.videoId}${(0, _v125.serializeQuery)(_v0)}`, _v128({
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
    endpoint: "/users/:userId/watchlater/:videoId",
    method: "GET"
  }), "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(_v134, {
    endpoint: "/users/:userId/watchlater/:videoId",
    method: "PUT"
  }), "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(_v135, {
    endpoint: "/users/:userId/watchlater/:videoId",
    method: "DELETE"
  });
  let _v136 = ({
      isMobile: _v0,
      initialState: _v1,
      videoId: _v2,
      activityType: _v3,
      position: _v4
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(_v1),
        [_v7, {
          loading: _v8,
          error: _v9
        }] = _v134(),
        [_v10, {
          loading: _v11,
          error: _v12
        }] = _v135(),
        _v13 = (0, _v5.useViewer)(),
        _v14 = (0, _v114.useToast)(),
        _v15 = async () => {
          let _v0;
          _v13?.user?.id && (_v6(!_v5), _v0 = _v56(_v13, {
            action_type: "click"
          }, {
            entity_type: "video",
            element: "button",
            location: "bottom_panel",
            feature: "watch_later"
          }, void 0, {
            video_id: _v2
          }, {
            object_actor_type: _v3,
            object_placement: _v4
          }), (0, _v54.sendBpEventWithContexts)("vimeo.select_watch_later_button", _v0), _v5 ? await _v10({
            where: {
              userId: _v13?.user?.id,
              videoId: _v2
            }
          }) : await _v7({
            where: {
              userId: _v13?.user?.id,
              videoId: _v2
            }
          }));
        };
      return (0, _v2.useEffect)(() => {
        _v9 && (_v6(!1), _v14({
          title: (0, _v10.translate)({
            singular: "Oops! Something went wrong. Please try again.",
            dictionary: {
              es: {
                singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
              },
              "fr-FR": {
                singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
              },
              "ja-JP": {
                singular: "エラーが発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "哎呀，出错了。请重试。"
              }
            }
          }),
          status: "error",
          icon: (0, _v1.jsx)(_v115.CircleExclamationFilled, {})
        }));
      }, [_v9, _v14]), (0, _v2.useEffect)(() => {
        _v12 && (_v6(!0), _v14({
          title: (0, _v10.translate)({
            singular: "Oops! Something went wrong. Please try again.",
            dictionary: {
              es: {
                singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
              },
              "fr-FR": {
                singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
              },
              "ja-JP": {
                singular: "エラーが発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "哎呀，出错了。请重试。"
              }
            }
          }),
          status: "error",
          icon: (0, _v1.jsx)(_v115.CircleExclamationFilled, {})
        }));
      }, [_v12, _v14]), (0, _v1.jsx)(_v100.Tooltip, {
        label: _v5 ? (0, _v10.translate)({
          singular: "Remove from Watch later",
          dictionary: {
            es: {
              singular: "Quitar de la lista “Ver después”"
            },
            "de-DE": {
              singular: "Aus „Später anschauen“ entfernen"
            },
            "fr-FR": {
              singular: "Supprimer de la liste Regarder plus tard"
            },
            "ja-JP": {
              singular: "「後で見る」から削除"
            },
            "ko-KR": {
              singular: "나중에 보기에서 제거"
            },
            "pt-BR": {
              singular: "Remover da lista Assistir Depois"
            },
            "zh-CN": {
              singular: "从稍后观看中移除"
            }
          }
        }) : (0, _v10.translate)({
          singular: "Add to Watch later",
          dictionary: {
            es: {
              singular: 'Agregar a "Ver después"'
            },
            "de-DE": {
              singular: 'Zu „Später anschauen" hinzufügen'
            },
            "fr-FR": {
              singular: "Ajouter à la liste Regarder plus tard"
            },
            "ja-JP": {
              singular: "後で見るに追加"
            },
            "ko-KR": {
              singular: "나중에 보기"
            },
            "pt-BR": {
              singular: "Adicionar ao Assistir Depois"
            },
            "zh-CN": {
              singular: "添加到稍后观看"
            }
          }
        }),
        isDisabled: _v0,
        placement: "top",
        closeOnClick: !1,
        children: (0, _v1.jsx)(_v38.IconButton, {
          "aria-label": "Watch later button",
          onClick: _v15,
          isLoading: _v8 || _v11,
          variant: "tertiary",
          size: "sm",
          icon: _v5 ? (0, _v1.jsx)(_v123.ClockFilled, {}) : (0, _v1.jsx)(_v101.HoverAnimatedIcon, {
            iconName: "clock"
          }),
          children: (0, _v10.translate)({
            singular: "Watch later",
            dictionary: {
              es: {
                singular: "Ver después"
              },
              "de-DE": {
                singular: "Später anschauen"
              },
              "fr-FR": {
                singular: "Regarder plus tard"
              },
              "ja-JP": {
                singular: "後で見る"
              },
              "ko-KR": {
                singular: "나중에 보기"
              },
              "pt-BR": {
                singular: "Assistir depois"
              },
              "zh-CN": {
                singular: "稍后观看"
              }
            }
          })
        })
      });
    },
    _v137 = ({
      engagements: _v0,
      player: _v1,
      title: _v2,
      videoLink: _v3,
      activityType: _v4,
      position: _v5,
      videoId: _v6,
      isLoading: _v7
    }) => {
      let [_v8] = (0, _v98.useMediaQuery)("(max-width: 767px)"),
        _v9 = "ontouchstart" in window || navigator.maxTouchPoints > 0,
        _v10 = _v8 && _v9,
        {
          canShare: _v11,
          canLike: _v12,
          canWatchlater: _v13,
          canDownload: _v14,
          canComment: _v15,
          canAddToCollections: _v16,
          canReport: _v17,
          isOnWatchList: _v18,
          liked: _v19,
          totalLikes: _v20,
          totalComments: _v21
        } = _v0;
      return _v7 ? (0, _v1.jsx)(_v12.Flex, {
        gap: "xs",
        paddingX: {
          base: "md",
          md: 0
        },
        children: (0, _v1.jsx)(_v76.Skeleton, {
          h: "2rem",
          w: "10rem"
        })
      }) : (0, _v1.jsxs)(_v12.Flex, {
        gap: "xs",
        paddingX: {
          base: "md",
          md: 0
        },
        children: [_v11 && (0, _v1.jsx)(_v122, {
          isMobile: _v10,
          player: _v1,
          videoId: _v6,
          activityType: _v4,
          position: _v5
        }), _v12 && (0, _v1.jsx)(_v118, {
          isMobile: _v10,
          initialState: _v19,
          videoId: _v6,
          totalLikes: _v20,
          activityType: _v4,
          position: _v5
        }), _v15 && (0, _v1.jsx)(_v109, {
          videoLink: _v3,
          isMobile: _v10,
          totalComments: _v21,
          videoId: _v6,
          activityType: _v4,
          position: _v5
        }), _v16 && (0, _v1.jsx)(_v108, {
          videoId: _v6,
          title: _v2,
          isMobile: _v10,
          activityType: _v4,
          position: _v5
        }), _v13 && (0, _v1.jsx)(_v136, {
          initialState: _v18,
          isMobile: _v10,
          videoId: _v6,
          activityType: _v4,
          position: _v5
        }), _v14 && (0, _v1.jsx)(_v113, {
          videoId: _v6,
          isMobile: _v10,
          activityType: _v4,
          position: _v5
        }), _v17 && (0, _v1.jsx)(_v120, {
          videoId: _v6,
          isMobile: _v10,
          activityType: _v4,
          position: _v5
        })]
      });
    };
  var _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0);
  let _v142 = ({
    user: _v0,
    onProfileClick: _v1,
    children: _v2
  }) => _v0.link ? (0, _v1.jsx)(_v141.UserCard, {
    user: _v0,
    profileUrl: _v0.link,
    openDelay: 500,
    onProfileClick: _v1,
    children: (0, _v1.jsx)(_v83.Link, {
      target: "_blank",
      href: _v0.link,
      children: _v2
    })
  }) : (0, _v1.jsx)(_v1.Fragment, {
    children: _v2
  });
  var _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0);
  let _v146 = ({
      subject: _v0,
      onProfileClick: _v1,
      textVariant: _v2
    }) => {
      let {
          data: _v3
        } = (0, _v145.useGetUser)(() => _v0.id ? {
          where: {
            userId: _v0.id
          },
          select: ["backgroundVideo", "link", "locationDetails.formattedAddress", "membership.badge", "metadata.connections.followers.total", "metadata.publicVideos.total", "metadata.interactions.follow", "pictures.sizes", "profileDiscovery", "skills.name"]
        } : null, {
          shouldRetryOnError: !1,
          revalidateOnFocus: !1
        }),
        _v4 = {
          ..._v0,
          ..._v3,
          link: (_v3?.profileDiscovery && _v3?.link) ?? ""
        };
      return (0, _v1.jsx)(_v142, {
        user: _v4,
        onProfileClick: _v1,
        children: (0, _v1.jsx)(_v63.Text, {
          variant: _v2,
          color: "text-primary",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          children: _v0.name
        })
      });
    },
    _v147 = ({
      activityType: _v0,
      subject: _v1,
      likes: _v2,
      textVariant: _v3,
      onProfileClick: _v4
    }) => {
      let _v5;
      if (!_v1 || _v0 === _v31.UPLOAD || _v0 === _v31.ONDEMAND_PUBLISH) return (0, _v1.jsx)(_v1.Fragment, {});
      let _v6 = _v0 => (0, _v1.jsx)(_v63.Text, {
        variant: _v3,
        color: "text-secondary",
        whiteSpace: "nowrap",
        children: _v0
      });
      switch (_v0) {
        case _v31.APPEARANCE:
        case _v31.LIKE:
          _v5 = (0, _v1.jsx)(_v146, {
            subject: _v1,
            textVariant: _v3,
            onProfileClick: _v4
          });
          break;
        default:
          _v5 = (0, _v1.jsx)(_v83.Link, {
            target: "_blank",
            href: _v1.link,
            children: (0, _v1.jsxs)(_v63.Text, {
              variant: _v3,
              color: "text-primary",
              whiteSpace: "nowrap",
              children: [_v0 === _v31.TAG ? "#" : "", _v1.name]
            })
          });
      }
      switch (_v0) {
        case _v31.APPEARANCE:
          return (0, _v10.translate)({
            singular: "{CREATOR_NAME} {A}is credited{/A}",
            replacements: {
              A: _v6,
              CREATOR_NAME: _v5
            },
            dictionary: {
              es: {
                singular: "{CREATOR_NAME} {A}se acredita{/A}"
              },
              "de-DE": {
                singular: "{CREATOR_NAME} {A}wird Ihnen gutgeschrieben{/A}."
              },
              "fr-FR": {
                singular: "{CREATOR_NAME} {A}est mentionné(e){/A}"
              },
              "ja-JP": {
                singular: "{CREATOR_NAME}{A}がクレジットされました{/A}"
              },
              "ko-KR": {
                singular: "{CREATOR_NAME} 님이 {A}크레딧에 오름{/A}"
              },
              "pt-BR": {
                singular: "{CREATOR_NAME} {A}recebeu crédito{/A}"
              },
              "zh-CN": {
                singular: "{CREATOR_NAME} {A}署名{/A}。"
              }
            }
          });
        case _v31.LIKE:
          return (0, _v10.translate)({
            singular: "{A}Liked by{/A} {FOLLOWED_USER}",
            plural: "{A}Liked by{/A} {FOLLOWED_USER} {A}and{/A} {B}{COUNT} others{/B}",
            count: Math.max(1, _v2),
            replacements: {
              A: _v6,
              FOLLOWED_USER: _v5,
              B: _v0 => (0, _v1.jsx)(_v63.Text, {
                variant: _v3,
                color: "text-primary",
                whiteSpace: "nowrap",
                children: _v0
              }),
              COUNT: _v2 - 1
            },
            dictionary: {
              es: {
                singular: "{A}Le gusta a{/A} {FOLLOWED_USER}",
                plural: "{A}Les gusta a{/A} {FOLLOWED_USER} {A}y{/A} {B}a {COUNT} más{/B}"
              },
              "de-DE": {
                singular: "{A}Gefällt{/A} {FOLLOWED_USER}",
                plural: "{A}Gefällt{/A} {FOLLOWED_USER} {A}und{/A} {B}{COUNT} anderen{/B}"
              },
              "fr-FR": {
                singular: "{A}Aimé par{/A} {FOLLOWED_USER}",
                plural: "{A}Aimé par{/A} {FOLLOWED_USER} {A}et{/A} {B}{COUNT} autres{/B}"
              },
              "ja-JP": {
                singular: "{FOLLOWED_USER}{A}がいいねしました{/A}",
                plural: "{FOLLOWED_USER} {A}と{/A} {B}その他{COUNT}人が{/B}{A}いいねしました{/A}"
              },
              "ko-KR": {
                singular: "{FOLLOWED_USER} 님이 {A}좋아함{/A}",
                plural: "{FOLLOWED_USER}{A} 님과{/A} {B}{COUNT}명{/B}이 {A}좋아함{/A}"
              },
              "pt-BR": {
                singular: "{A}Curtido por{/A} {FOLLOWED_USER}",
                plural: "{A}Curtido por{/A} {FOLLOWED_USER} {A}e{/A} {B}{COUNT} outras pessoas{/B}"
              },
              "zh-CN": {
                singular: "{A} {/A} {FOLLOWED_USER} 点赞",
                plural: "{A}{/A} {FOLLOWED_USER} {A}和其他{/A} {B} {COUNT} 位用户点赞{/B}"
              }
            }
          });
        case _v31.CHANNEL:
        case _v31.GROUP:
          return (0, _v10.translate)({
            singular: "{A}Added to{/A} {COLLECTION_NAME}",
            replacements: {
              A: _v6,
              COLLECTION_NAME: _v5
            },
            dictionary: {
              es: {
                singular: "{A}Se agregó a{/A} {COLLECTION_NAME}"
              },
              "de-DE": {
                singular: "{A}wurde zu{/A} {COLLECTION_NAME}hinzugefügt."
              },
              "fr-FR": {
                singular: "{A}Ajouté à{/A} {COLLECTION_NAME}"
              },
              "ja-JP": {
                singular: "{COLLECTION_NAME}{A}に追加されました{/A}"
              },
              "ko-KR": {
                singular: "{COLLECTION_NAME} {A}컬렉션에 추가됨{/A}"
              },
              "pt-BR": {
                singular: "{A}Adicionado a{/A} {COLLECTION_NAME}"
              },
              "zh-CN": {
                singular: "{A} 已添加到 {/A} {COLLECTION_NAME}"
              }
            }
          });
        case _v31.TAG:
          return (0, _v10.translate)({
            singular: "{A}Tagged with{/A} {TAG_NAME}",
            replacements: {
              A: _v6,
              TAG_NAME: _v5
            },
            dictionary: {
              es: {
                singular: "{A}Etiquetado con{/A} {TAG_NAME}"
              },
              "de-DE": {
                singular: "{A}Markiert mit{/A} {TAG_NAME}"
              },
              "fr-FR": {
                singular: "{A}Marqué avec les mots-clés{/A} {TAG_NAME}"
              },
              "ja-JP": {
                singular: "{TAG_NAME}{A}でタグ付けされました{/A}"
              },
              "ko-KR": {
                singular: "{TAG_NAME} {A}태그 지정{/A}"
              },
              "pt-BR": {
                singular: "{A}Marcado com{/A} {TAG_NAME}"
              },
              "zh-CN": {
                singular: "{A}标记为 {/A} {TAG_NAME}"
              }
            }
          });
        case _v31.CATEGORY_FEATURED:
          return (0, _v10.translate)({
            singular: "{A}Featured in{/A} {CATEGORY_NAME}",
            replacements: {
              A: _v6,
              CATEGORY_NAME: _v5
            },
            dictionary: {
              es: {
                singular: "{A}Destacado en{/A} {CATEGORY_NAME}"
              },
              "de-DE": {
                singular: "{A}Vorgestellt in{/A} {CATEGORY_NAME}"
              },
              "fr-FR": {
                singular: "{A}Disponible dans{/A} {CATEGORY_NAME}"
              },
              "ja-JP": {
                singular: "{CATEGORY_NAME}{A}で紹介されました{/A}"
              },
              "ko-KR": {
                singular: "{CATEGORY_NAME}에 {A}소개됨{/A}"
              },
              "pt-BR": {
                singular: "{A}Apresentado em{/A} {CATEGORY_NAME}"
              },
              "zh-CN": {
                singular: "{A}精选于 {/A} {CATEGORY_NAME}"
              }
            }
          });
        default:
          return "Performed an action";
      }
    },
    _v148 = ({
      creator: _v0,
      followButton: _v1,
      activityType: _v2,
      subject: _v3,
      likes: _v4,
      activityTime: _v5,
      onProfileClick: _v6
    }) => {
      let _v7 = (0, _v2.useRef)(null),
        [_v8, _v9] = (0, _v2.useState)(!1),
        _v10 = (0, _v2.useRef)(null);
      (0, _v2.useEffect)(() => {
        let _v0 = new ResizeObserver(() => {
          if (_v10.current) {
            let {
              offsetLeft: _v0
            } = _v10.current;
            _v9(0 === _v0);
          }
        });
        return _v7.current && _v0.observe(_v7.current), () => _v0.disconnect();
      }, []);
      let _v11 = ["body-sm", "body-sm", "body-md"];
      return (0, _v1.jsxs)(_v12.Flex, {
        gap: "xs",
        alignItems: ["start", "start", "center"],
        flexGrow: "1",
        flexDirection: ["column", "column", "row"],
        flexWrap: "wrap",
        position: "relative",
        ref: _v7,
        minW: 0,
        children: [(0, _v1.jsxs)(_v12.Flex, {
          gap: "sm",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v142, {
            user: _v0,
            onProfileClick: _v6,
            children: (0, _v1.jsx)(_v63.Text, {
              variant: ["heading-2xs", "heading-2xs", "heading-xs"],
              children: _v0.name
            })
          }), _v0.membership?.badge?.text && (0, _v1.jsx)(_v143.Badge, {
            size: "sm",
            variant: _v0.membership?.badge.type ?? "default",
            children: _v0.membership?.badge.text
          }), (0, _v1.jsx)(_v144.Show, {
            above: "md",
            children: _v1
          })]
        }), (0, _v1.jsxs)(_v12.Flex, {
          gap: "xs",
          ref: _v10,
          maxW: "100%",
          children: [(0, _v1.jsx)(_v63.Text, {
            variant: _v11,
            color: "text-secondary",
            display: _v8 ? "none" : "block",
            children: "·"
          }), (0, _v1.jsx)(_v147, {
            activityType: _v2,
            subject: _v3,
            likes: _v4,
            textVariant: _v11,
            onProfileClick: _v6
          }), _v2 !== _v33.UPLOAD && _v2 !== _v33.ONDEMAND_PUBLISH && (0, _v1.jsx)(_v63.Text, {
            variant: _v11,
            color: "text-secondary",
            children: "·"
          }), (0, _v1.jsx)(_v63.Text, {
            variant: _v11,
            color: "text-secondary",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v87, {
              timeStamp: _v5,
              isShort: !0
            })
          })]
        })]
      });
    };
  var _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0);
  async function _v155({
    baseUrl: _v0,
    where: {
      word: _v1
    },
    ..._v2
  }) {
    return (0, _v126.measureLatency)("getMeTag", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/tags/${_v1}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v127.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v127.deepCamelCase)(_v1);
    });
  }
  async function _v156({
    baseUrl: _v0,
    where: {
      word: _v1
    },
    ..._v2
  }) {
    return (0, _v126.measureLatency)("putMeTag", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/tags/${_v1}`, {
        ..._v2,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v127.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v127.deepCamelCase)(_v1);
    });
  }
  async function _v157({
    baseUrl: _v0,
    where: {
      word: _v1
    },
    ..._v2
  }) {
    return (0, _v126.measureLatency)("deleteMeTag", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/tags/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v127.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v127.deepCamelCase)(_v1);
    });
  }
  function _v158(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v133.useGctlConfig)();
    return (0, _v131.default)(_v2 ? `/me/tags/${_v2.where.word}${(0, _v125.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v155({
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
  function _v159() {
    let {
        mutate: _v0
      } = (0, _v132.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v133.useGctlConfig)(),
      [_v5, _v6] = (0, _v125.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/tags/${_v0.where.word}${(0, _v125.serializeQuery)(_v0)}`, _v156({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  function _v160() {
    let {
        mutate: _v0
      } = (0, _v132.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v133.useGctlConfig)(),
      [_v5, _v6] = (0, _v125.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/tags/${_v0.where.word}${(0, _v125.serializeQuery)(_v0)}`, _v157({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(_v158, {
    endpoint: "/me/tags/:word",
    method: "GET"
  }), "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v132.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v133.useGctlConfig)(),
      [_v5, _v6] = (0, _v125.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/tags/${_v0.where.word}${(0, _v125.serializeQuery)(_v0)}`, _v155({
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
    endpoint: "/me/tags/:word",
    method: "GET"
  }), "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(_v159, {
    endpoint: "/me/tags/:word",
    method: "PUT"
  }), "true" === _v124.default.env.STORYBOOK && (0, _v125.assignMswData)(_v160, {
    endpoint: "/me/tags/:word",
    method: "DELETE"
  });
  let _v161 = (_v0, _v1, _v2) => {
      let [_v3, _v4] = (0, _v2.useState)(_v0),
        {
          putHook: _v5,
          deleteHook: _v6,
          getHook: _v7
        } = (_v0 => {
          if (void 0 !== _v0.category) return {
            putHook: _v151.usePutMeCategory,
            deleteHook: _v151.useDeleteMeCategory,
            getHook: _v151.useGetMeCategory
          };
          if (void 0 !== _v0.channelId) return {
            putHook: _v152.usePutMeChannel,
            deleteHook: _v152.useDeleteMeChannel,
            getHook: _v152.useGetMeChannel
          };
          if (void 0 !== _v0.groupId) return {
            putHook: _v154.usePutMeGroup,
            deleteHook: _v154.useDeleteMeGroup,
            getHook: _v154.useGetMeGroup
          };
          if (void 0 !== _v0.word) return {
            putHook: _v159,
            deleteHook: _v160,
            getHook: _v158
          };
          if (void 0 !== _v0.followUserId) return {
            putHook: _v153.usePutMeFollowing,
            deleteHook: _v153.useDeleteMeFollowing,
            getHook: _v153.useGetMeFollowing
          };
          throw Error("Invalid where type");
        })(_v2),
        [_v8, {
          loading: _v9,
          error: _v10
        }] = _v5(),
        [_v11, {
          loading: _v12,
          error: _v13
        }] = _v6(),
        {
          mutate: _v14,
          isValidating: _v15,
          error: _v16
        } = _v7(() => _v1 ? {
          where: _v2,
          query: {
            source: "My feed"
          }
        } : null, {
          revalidateOnFocus: !1,
          shouldRetryOnError: !1
        });
      (0, _v2.useEffect)(() => {
        _v15 || _v4(!_v16);
      }, [_v16, _v15]);
      let _v17 = async () => {
          _v4(!_v3), await (_v3 ? _v11 : _v8)({
            where: _v2
          }), _v14();
        },
        _v18 = (0, _v114.useToast)();
      return (0, _v2.useEffect)(() => {
        _v10 && (_v4(!1), _v18({
          title: (0, _v10.translate)({
            singular: "Oops! Something went wrong. Please try again.",
            dictionary: {
              es: {
                singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
              },
              "fr-FR": {
                singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
              },
              "ja-JP": {
                singular: "エラーが発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "哎呀，出错了。请重试。"
              }
            }
          }),
          status: "error"
        }));
      }, [_v10, _v18]), (0, _v2.useEffect)(() => {
        _v13 && (_v4(!0), _v18({
          title: (0, _v10.translate)({
            singular: "Oops! Something went wrong. Please try again.",
            dictionary: {
              es: {
                singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
              },
              "fr-FR": {
                singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
              },
              "ja-JP": {
                singular: "エラーが発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "哎呀，出错了。请重试。"
              }
            }
          }),
          status: "error"
        }));
      }, [_v13, _v18]), {
        isFollowingSubject: _v3,
        isLoadingFollow: _v15 || _v9 || _v12,
        updateFollow: _v17
      };
    },
    _v162 = ({
      subjectName: _v0,
      where: _v1
    }) => {
      let {
        isFollowingSubject: _v2,
        isLoadingFollow: _v3,
        updateFollow: _v4
      } = _v161(!0, !0, _v1);
      return (0, _v1.jsx)(_v39.MenuItem, {
        icon: _v2 ? (0, _v1.jsx)(_v149.CloseXCircle, {}) : void 0,
        onClick: _v4,
        isDisabled: _v3,
        children: _v2 ? (0, _v10.translate)({
          singular: "Unfollow {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}",
          replacements: {
            CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME: _v0
          },
          dictionary: {
            es: {
              singular: "Deje de seguir a {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            },
            "de-DE": {
              singular: "{CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME} nicht mehr folgen"
            },
            "fr-FR": {
              singular: "Ne plus suivre {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            },
            "ja-JP": {
              singular: "{CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}のフォローを解除"
            },
            "ko-KR": {
              singular: "{CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}님 팔로우 취소"
            },
            "pt-BR": {
              singular: "Parar de seguir {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            },
            "zh-CN": {
              singular: "取消关注 {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            }
          }
        }) : (0, _v10.translate)({
          singular: "Follow {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}",
          replacements: {
            CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME: _v0
          },
          dictionary: {
            es: {
              singular: "Siga a {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            },
            "de-DE": {
              singular: "Folgen Sie {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            },
            "fr-FR": {
              singular: "Suivre {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            },
            "ja-JP": {
              singular: "{CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}をフォロー"
            },
            "ko-KR": {
              singular: "{CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME} 팔로우하기"
            },
            "pt-BR": {
              singular: "Seguir {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            },
            "zh-CN": {
              singular: "关注 {CHANNEL_OR_GROUP_OR_CATEGORY_OR_TAG_NAME}"
            }
          }
        })
      });
    },
    _v163 = ({
      isFollowingCreator: _v0,
      isLoadingFollowCreator: _v1,
      creatorName: _v2,
      updateFollowCreator: _v3,
      activityType: _v4,
      subjectId: _v5,
      subjectName: _v6
    }) => {
      let _v7 = [];
      switch (_v0 && _v7.push((0, _v1.jsx)(_v39.MenuItem, {
        icon: (0, _v1.jsx)(_v149.CloseXCircle, {}),
        onClick: _v3,
        isDisabled: _v1,
        children: (0, _v10.translate)({
          singular: "Unfollow {CREATOR_NAME}",
          replacements: {
            CREATOR_NAME: _v2
          },
          dictionary: {
            es: {
              singular: "Deje de seguir a {CREATOR_NAME}"
            },
            "de-DE": {
              singular: "{CREATOR_NAME} nicht mehr folgen"
            },
            "fr-FR": {
              singular: "Ne plus suivre {CREATOR_NAME}"
            },
            "ja-JP": {
              singular: "{CREATOR_NAME}のフォローを解除"
            },
            "ko-KR": {
              singular: "{CREATOR_NAME}님 팔로우 취소"
            },
            "pt-BR": {
              singular: "Parar de seguir {CREATOR_NAME}"
            },
            "zh-CN": {
              singular: "取消关注 {CREATOR_NAME}"
            }
          }
        })
      })), _v4) {
        case _v31.GROUP:
          _v7.push((0, _v1.jsx)(_v162, {
            subjectName: _v6,
            where: {
              groupId: _v5
            }
          }));
          break;
        case _v31.CHANNEL:
          _v7.push((0, _v1.jsx)(_v162, {
            subjectName: _v6,
            where: {
              channelId: _v5
            }
          }));
          break;
        case _v31.CATEGORY_FEATURED:
          _v7.push((0, _v1.jsx)(_v162, {
            subjectName: _v6,
            where: {
              category: _v6
            }
          }));
          break;
        case _v31.TAG:
          _v7.push((0, _v1.jsx)(_v162, {
            subjectName: _v6,
            where: {
              word: _v6
            }
          }));
      }
      return 0 === _v7.length ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v14.Menu, {
        children: [(0, _v1.jsx)(_v15.MenuButton, {
          as: _v38.IconButton,
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v150.EllipsisV, {}),
          onFocus: _v0 => _v0.preventDefault(),
          title: "Overflow menu"
        }), (0, _v1.jsx)(_v16.MenuList, {
          children: _v7
        })]
      });
    },
    _v164 = ({
      creator: _v0,
      activityType: _v1,
      subject: _v2,
      activityTime: _v3,
      likes: _v4,
      position: _v5,
      videoId: _v6
    }) => {
      let _v7 = (0, _v5.useViewer)(),
        {
          isFollowingSubject: _v8,
          isLoadingFollow: _v9,
          updateFollow: _v10
        } = _v161(_v0.isFollowing, _v0.canFollow, {
          followUserId: parseInt(_v0.id)
        }),
        [_v11, _v12] = (0, _v140.getAvatarImages)(_v0.pictures?.sizes),
        _v13 = _v0.canFollow && (!_v8 || _v9) && (0, _v1.jsx)(_v8.Button, {
          size: "xs",
          variant: "secondary",
          onClick: () => {
            let _v0;
            _v10(), _v0 = _v56(_v7, {
              action_type: "click"
            }, {
              entity_type: "user",
              element: "button",
              location: "bottom_panel",
              feature: "follow"
            }, void 0, {
              video_id: _v6
            }, {
              object_actor_type: _v1,
              object_placement: _v5
            }), (0, _v54.sendBpEventWithContexts)("vimeo.select_follow_button", _v0);
          },
          isLoading: _v9,
          children: (0, _v10.translate)({
            singular: "Follow",
            dictionary: {
              es: {
                singular: "Seguir"
              },
              "de-DE": {
                singular: "Folgen"
              },
              "fr-FR": {
                singular: "Suivre"
              },
              "ja-JP": {
                singular: "フォロー"
              },
              "ko-KR": {
                singular: "팔로우"
              },
              "pt-BR": {
                singular: "Seguir"
              },
              "zh-CN": {
                singular: "关注"
              }
            }
          })
        }),
        _v14 = () => {
          let _v0;
          _v0 = _v56(_v7, {
            action_type: "click"
          }, {
            entity_type: "user",
            element: "button",
            location: "header",
            feature: "profile"
          }, {
            target: "user_profile",
            target_path: _v0.link
          }, {
            video_id: _v6
          }, {
            object_actor_type: _v1,
            object_placement: _v5
          }), (0, _v54.sendBpEventWithContexts)("vimeo.select_user_profile_button", _v0);
        };
      return (0, _v1.jsxs)(_v12.Flex, {
        paddingLeft: ["md", "md", 0],
        paddingRight: ["md", "md", 0],
        gap: "sm",
        alignItems: "center",
        w: "100%",
        children: [(0, _v1.jsx)(_v142, {
          user: _v0,
          onProfileClick: _v14,
          children: (0, _v1.jsx)(_v138.Avatar, {
            alt: _v0.name,
            nameProps: {
              color: "blue.500",
              name: _v0.name
            },
            size: "sm",
            src: _v11,
            srcSet: _v12
          })
        }), (0, _v1.jsx)(_v148, {
          creator: _v0,
          followButton: _v13,
          activityType: _v1,
          subject: _v2,
          likes: _v4,
          activityTime: _v3,
          onProfileClick: _v14
        }), (0, _v1.jsx)(_v139.Hide, {
          above: "md",
          children: _v13
        }), (0, _v1.jsx)(_v163, {
          isFollowingCreator: _v8,
          isLoadingFollowCreator: _v9,
          creatorName: _v0.name,
          updateFollowCreator: _v10,
          activityType: _v1,
          subjectId: _v2.id,
          subjectName: _v2.name
        })]
      });
    },
    _v165 = ({
      videoId: _v0,
      contentRating: _v1,
      privacy: _v2,
      activityType: _v3,
      position: _v4,
      onConfirm: _v5
    }) => {
      let _v6 = (0, _v5.useViewer)(),
        _v7 = _v6?.contentViewingPrefs.allowContentRatingBypass;
      (0, _v2.useEffect)(() => {
        let _v0;
        _v6 && (_v0 = _v56(_v6, {
          view_type: "pageview"
        }, {
          location: "my_feed_widget",
          modal_name: "content_rating_modal",
          feature: "content_rating"
        }, _v55(), {
          video_id: _v0,
          video_privacy: _v2,
          content_rating: _v1
        }, {
          object_actor_type: _v3,
          object_placement: _v4
        }), (0, _v54.sendBpEventWithContexts)("vimeo.page_load", _v0));
      }, [_v3, _v1, _v4, _v2, _v0, _v6]);
      let _v8 = _v0 => {
        let _v1;
        _v1 = _v56(_v6, {
          action_type: "click"
        }, {
          location: "my_feed_widget",
          modal_name: "content_rating_modal",
          feature: "content_rating",
          element: "button",
          copy: _v0
        }, _v55(), {
          video_id: _v0,
          video_privacy: _v2,
          content_rating: _v1
        }, {
          object_actor_type: _v3,
          object_placement: _v4
        }), (0, _v54.sendBpEventWithContexts)("vimeo.select_content_rating_alert", _v1);
      };
      return (0, _v1.jsxs)(_v62.Center, {
        w: "100%",
        h: "100%",
        borderRadius: {
          md: "lg"
        },
        borderWidth: {
          md: "1px"
        },
        borderColor: "stroke",
        flexDirection: "column",
        gap: {
          base: "sm",
          md: "md"
        },
        padding: {
          base: "md",
          md: "3xl"
        },
        blur: "80px",
        bgColor: "fill-surface",
        children: [(0, _v1.jsxs)(_v72.VStack, {
          textAlign: "center",
          gap: {
            base: "xs",
            md: "sm"
          },
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "md",
            children: (0, _v10.translate)({
              singular: "Mature content",
              dictionary: {
                es: {
                  singular: "Contenido para adultos"
                },
                "de-DE": {
                  singular: "Inhalte mit Jugendfilter"
                },
                "fr-FR": {
                  singular: "Contenu pour adultes"
                },
                "ja-JP": {
                  singular: "成人向けコンテンツ"
                },
                "ko-KR": {
                  singular: "성인 콘텐츠"
                },
                "pt-BR": {
                  singular: "Conteúdo adulto"
                },
                "zh-CN": {
                  singular: "成人内容"
                }
              }
            })
          }), (0, _v1.jsxs)(_v63.Text, {
            variant: "body-md",
            children: [_v7 ? (0, _v10.translate)({
              singular: "This video may contain profanity, sexually suggestive content, drugs or alcohol use, nudity, or violence.",
              dictionary: {
                es: {
                  singular: "Este video puede contener blasfemias, contenido sexualmente sugerente, consumo de drogas o alcohol, desnudos o violencia."
                },
                "de-DE": {
                  singular: "Dieses Video kann Obszönitäten, sexuell anzügliche Inhalte, Drogen oder Alkoholkonsum, Nacktheit oder Gewalt enthalten."
                },
                "fr-FR": {
                  singular: "Cette vidéo peut contenir du contenu à caractère injurieux, sexuellement suggestif, relatif à la drogue ou à l'alcool, ainsi que de la nudité ou de la violence."
                },
                "ja-JP": {
                  singular: "この動画には、冒涜的な表現、性的示唆を与えるコンテンツ、薬物やアルコールの使用、ヌード、暴力が含まれている可能性があります。"
                },
                "ko-KR": {
                  singular: "이 동영상에는 욕설, 성적 표현, 약물 또는 알코올 사용, 과도한 노출 또는 폭력이 포함될 수 있습니다."
                },
                "pt-BR": {
                  singular: "Esse vídeo pode conter palavrões, conteúdo sexualmente sugestivo, uso de drogas ou álcool, nudez ou violência."
                },
                "zh-CN": {
                  singular: "此视频可能包含粗言秽语、性暗示、吸毒或酗酒、裸体或暴力的内容。"
                }
              }
            }) : (0, _v10.translate)({
              singular: "This video is not available due to your permissions",
              dictionary: {
                es: {
                  singular: "Este video no está disponible debido a sus permisos."
                },
                "de-DE": {
                  singular: "Dieses Video ist aufgrund Ihrer Berechtigungen nicht verfügbar."
                },
                "fr-FR": {
                  singular: "Cette vidéo n'est pas disponible en raison de vos autorisations"
                },
                "ja-JP": {
                  singular: "この動画はお客様の権限により視聴できません"
                },
                "ko-KR": {
                  singular: "권한이 없어 이 동영상을 시청할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Este vídeo não está disponível devido às suas permissões"
                },
                "zh-CN": {
                  singular: "由于您的权限问题，此视频不可用"
                }
              }
            }), " ", _v7 && (0, _v10.translate)({
              singular: "You can {A}update your mature content preferences{/A} at any time.",
              replacements: {
                A: _v0 => (0, _v1.jsx)(_v83.Link, {
                  onClick: () => {
                    _v8("You can update your mature content preferences at any time.");
                  },
                  href: "/settings/viewing_preferences",
                  target: "_blank",
                  variant: "brand",
                  fontSize: "body-md",
                  children: _v0
                }, "settings_link")
              },
              dictionary: {
                es: {
                  singular: "Puede {A}actualizar sus preferencias de contenido para adultos{/A} en cualquier momento."
                },
                "de-DE": {
                  singular: "Sie können {A}Ihre Einstellungen für nicht jugendfreie Inhalte{/A} jederzeit aktualisieren."
                },
                "fr-FR": {
                  singular: "Vous pouvez {A}mettre à jour vos préférences en matière de contenu pour adultes{/A} à tout moment."
                },
                "ja-JP": {
                  singular: "いつでも{A}成人向けコンテンツの設定をアップデート{/A}することができます。"
                },
                "ko-KR": {
                  singular: "언제든지 {A}성인 콘텐츠 개인 설정을 업데이트{/A}할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Você pode {A}atualizar suas preferências de conteúdo adulto{/A} a qualquer momento."
                },
                "zh-CN": {
                  singular: "您可以随时{A}更新您的成人内容偏好{/A}。"
                }
              }
            })]
          })]
        }), _v7 && (0, _v1.jsx)(_v8.Button, {
          size: {
            base: "sm",
            md: "md"
          },
          onClick: () => {
            _v5(), _v8("Show me the video");
          },
          variant: "primary",
          children: (0, _v10.translate)({
            singular: "Show me the video",
            dictionary: {
              es: {
                singular: "Mostrar el video"
              },
              "de-DE": {
                singular: "Zeige mir das Video"
              },
              "fr-FR": {
                singular: "Montrez-moi la vidéo"
              },
              "ja-JP": {
                singular: "動画を見る"
              },
              "ko-KR": {
                singular: "동영상 표시"
              },
              "pt-BR": {
                singular: "Mostre-me o vídeo"
              },
              "zh-CN": {
                singular: "为我展示视频"
              }
            }
          })
        })]
      });
    };
  var _v166 = _v0.i(0),
    _v167 = _v0.i(0);
  let _v168 = ({
      setShowThumbnail: _v0,
      name: _v1,
      playerEmbedUrl: _v2,
      isMuted: _v3,
      setIsMuted: _v4,
      player: _v5,
      setPlayer: _v6,
      autoplay: _v7 = !0
    }) => {
      let [_v8, _v9] = (0, _v2.useState)(!1),
        _v10 = (0, _v2.useRef)(null),
        _v11 = (0, _v2.useRef)(!1),
        _v12 = _v167.EmbedPlayerUtility.createEmbedUrl(_v2);
      return (0, _v2.useEffect)(() => {
        if (!window.IntersectionObserver) return;
        let _v0 = new IntersectionObserver(_v0 => {
          _v9(_v0.some(_v0 => _v0.isIntersecting));
        }, {
          threshold: .8
        });
        return _v0 && _v10.current && _v0.observe(_v10.current), () => {
          _v0.disconnect();
        };
      }, []), (0, _v2.useEffect)(() => ((async () => {
        if (_v5) if (_v8 && !_v11.current && _v7) try {
          await _v5.setMuted(_v3), await _v5.play();
        } catch (_v0) {
          _v11.current = !0;
        } else await _v5.pause();
      })(), () => {
        _v5?.pause();
      }), [_v8, _v3, _v5, _v7]), (0, _v1.jsx)(_v12.Flex, {
        className: "my-feed-player",
        h: "100%",
        ref: _v10,
        children: (0, _v1.jsx)(_v166.EmbedPlayer, {
          title: _v1,
          src: _v12,
          onPlayerAPIReady: _v0 => {
            _v6(_v0);
          },
          onLoaded: () => {
            _v0(!1);
          },
          onVolumechange: _v0 => {
            _v4(_v0.muted || 0 === _v0.volume);
          },
          onError: () => {
            _v0(!0);
          }
        })
      });
    },
    _v169 = ({
      isMuted: _v0,
      setIsMuted: _v1,
      player: _v2,
      setPlayer: _v3,
      autoplay: _v4,
      playerEmbedUrl: _v5,
      name: _v6,
      thumbnail: _v7
    }) => {
      let [_v8, _v9] = (0, _v2.useState)(!0);
      return (0, _v1.jsxs)(_v61.Box, {
        borderRadius: ["none", "none", "lg"],
        borderWidth: "1px",
        borderColor: "stroke",
        minW: "100%",
        aspectRatio: _v7.aspectRatio,
        position: "relative",
        overflow: "hidden",
        children: [_v5 && (0, _v1.jsx)(_v168, {
          setShowThumbnail: _v9,
          name: _v6,
          playerEmbedUrl: _v5,
          isMuted: _v0,
          setIsMuted: _v1,
          player: _v2,
          setPlayer: _v3,
          autoplay: _v4
        }), (0, _v1.jsx)(_v61.Box, {
          as: "img",
          alt: "",
          src: _v7.src,
          srcSet: _v7.srcset,
          display: _v8 ? "block" : "none",
          sizes: "(min-width: 1536px) 912px, (min-width: 992px) 592px, (min-width: 768px) 672px, 100vw",
          position: "relative",
          inset: "0",
          width: "100%",
          height: "100%",
          borderRadius: "lg",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#1A365D14",
          aspectRatio: _v7.aspectRatio,
          objectFit: "cover"
        })]
      });
    },
    _v170 = ({
      videoId: _v0,
      isMuted: _v1,
      setIsMuted: _v2,
      player: _v3,
      setPlayer: _v4,
      activityType: _v5,
      position: _v6,
      autoplay: _v7,
      contentRating: _v8,
      privacy: _v9,
      playerEmbedUrl: _v10,
      name: _v11,
      thumbnail: _v12
    }) => {
      let _v13 = (0, _v5.useViewer)(),
        [_v14, _v15] = (0, _v2.useState)(!!_v13 && ((_v0, _v1) => {
          let _v2 = JSON.stringify([_v1, _v0?.user?.id]),
            _v3 = _v34.get(_v2);
          if (void 0 !== _v3) return _v3;
          let _v4 = _v0?.contentViewingPrefs.contentRatingList;
          if (!_v4?.length || !_v1 || _v1.includes("safe")) return _v34.set(_v2, !1), !1;
          let _v5 = !_v1.every(_v0 => "advertisement" === _v0 || _v4.includes(_v0)),
            _v6 = !_v1?.includes("unrated") && !_v0?.contentViewingPrefs.allowContentRatingBypass,
            _v7 = _v5 || _v6;
          return _v34.set(_v2, _v7), _v7;
        })(_v13, _v8));
      return (0, _v1.jsx)(_v61.Box, {
        borderRadius: ["none", "none", "lg"],
        borderWidth: "1px",
        borderColor: "stroke",
        minW: "100%",
        aspectRatio: _v12.aspectRatio,
        position: "relative",
        overflow: "hidden",
        children: _v14 ? (0, _v1.jsx)(_v165, {
          videoId: _v0,
          contentRating: _v8,
          privacy: _v9,
          activityType: _v5,
          position: _v6,
          onConfirm: () => {
            _v15(!1);
          }
        }) : (0, _v1.jsx)(_v169, {
          playerEmbedUrl: _v10,
          name: _v11,
          thumbnail: _v12,
          isMuted: _v1,
          setIsMuted: _v2,
          player: _v3,
          setPlayer: _v4,
          autoplay: _v7
        })
      });
    },
    _v171 = ({
      activity: _v0,
      isMuted: _v1,
      setIsMuted: _v2,
      position: _v3,
      autoplay: _v4
    }) => {
      let _v5 = (0, _v5.useViewer)(),
        _v6 = (_v0 => {
          var _v1;
          let _v2,
            _v3,
            _v4,
            _v5 = _v0.clip;
          switch (_v0.type) {
            case _v33.UPLOAD:
            case _v33.ONDEMAND_PUBLISH:
              _v4 = _v5.user;
              break;
            case _v33.APPEARANCE:
            case _v33.LIKE:
              _v4 = _v0.user;
              break;
            case _v33.CHANNEL:
              _v4 = _v0.channel;
              break;
            case _v33.GROUP:
              _v4 = _v0.group;
              break;
            case _v33.TAG:
              _v4 = {
                link: `/tag:${_v0.tag?.name}`,
                name: _v0.tag?.name,
                uri: _v0.tag?.uri
              };
              break;
            case _v33.CATEGORY_FEATURED:
              _v4 = _v0.category;
          }
          return {
            video: {
              id: _v28(_v5.uri),
              name: _v0.ondemandPage?.name ?? _v5.name,
              contentRating: _v5.contentRating,
              createdTime: _v5.releaseTime,
              description: _v0.ondemandPage?.description ?? _v5.descriptionHtml,
              link: _v0.ondemandPage?.link ?? _v5.link,
              privacy: _v5.privacy.view,
              thumbnail: (_v2 = (_v1 = _v5.pictures?.sizes)[0], _v3 = 16 / 9, _v2 && _v2.width && _v2.height && (_v3 = Math.max(_v2.width / _v2.height, 1)), {
                src: _v2?.link || "https://i.vimeocdn.com/video/default_295x166.jpg",
                aspectRatio: _v3,
                srcset: _v1?.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ")
              })
            },
            time: _v0.type === _v31.UPLOAD ? _v5.releaseTime : _v0.time,
            type: _v0.type,
            subject: {
              ..._v4,
              name: _v4?.name ?? "",
              link: _v4?.link ?? "",
              id: _v28(_v4?.uri)
            }
          };
        })(_v0),
        [_v7, _v8] = (0, _v2.useState)(null),
        _v9 = _v6.video,
        _v10 = (0, _v2.useRef)(null),
        _v11 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        if (!window.IntersectionObserver) return;
        let _v0 = new IntersectionObserver(_v0 => {
          if (_v0.some(_v0 => _v0.isIntersecting) && !_v11.current) {
            var _v1;
            let _v0;
            _v1 = _v9.id, _v0 = _v56(_v5, {
              view_type: "impression"
            }, {
              entity_type: "widget",
              element: "widget",
              location: "header",
              feature: "my_feed"
            }, void 0, {
              video_id: _v1
            }, {
              object_actor_type: _v6.type,
              object_placement: _v3
            }), (0, _v54.sendBpEventWithContexts)("vimeo.feed_unit_impression", _v0), _v11.current = !0;
          }
        }, {
          threshold: .2
        });
        return _v0 && _v10.current && _v0.observe(_v10.current), () => {
          _v0.disconnect();
        };
      }, [_v6.type, _v3, _v9.id, _v5]);
      let {
          data: _v12,
          isLoading: _v13
        } = (0, _v81.useGetVideo)(() => _v9.id ? {
          where: {
            videoId: _v9.id
          },
          select: ["embed.badges", "metadata.aiContent", "metadata.connections.comments.total", "metadata.connections.likes.total", "metadata.interactions.flagClip", "metadata.interactions.interact", "metadata.interactions.like.added", "metadata.interactions.like.showCount", "metadata.interactions.watchlater.uri", "metadata.interactions.watchlater.added", "page.collections", "page.comments", "page.like", "page.share", "page.watchLater", "playerEmbedUrl", "privacy.add", "privacy.download", "spatial.stereoFormat", "user.backgroundVideo", "user.link", "user.locationDetails.formattedAddress", "user.membership.badge", "user.metadata.connections.followers.total", "user.metadata.publicVideos.total", "user.metadata.interactions.follow", "user.name", "user.pictures.sizes", "user.profileDiscovery", "user.skills.name", "user.uri"]
        } : null, {
          revalidateOnFocus: !1
        }),
        _v14 = _v12?.user && {
          ..._v12.user,
          link: _v12.user.profileDiscovery && _v12.user.link || "",
          id: _v12.user.uri.split("/")[2],
          canFollow: !!_v12.user.metadata.interactions.follow,
          isFollowing: !!_v12.user.metadata.interactions.follow?.added
        };
      return (0, _v1.jsxs)(_v72.VStack, {
        w: "100%",
        gap: "md",
        alignItems: "start",
        ref: _v10,
        children: [_v14 ? (0, _v1.jsx)(_v164, {
          creator: _v14,
          activityTime: _v6.time,
          activityType: _v6.type,
          subject: _v6.subject,
          likes: _v12?.metadata?.connections?.likes?.total || 0,
          position: _v3,
          videoId: _v9.id
        }) : (0, _v1.jsx)(_v76.Skeleton, {
          h: "2rem"
        }), (0, _v1.jsx)(_v170, {
          videoId: _v9.id,
          isMuted: _v1,
          setIsMuted: _v2,
          player: _v7,
          setPlayer: _v8,
          activityType: _v6.type,
          position: _v3,
          autoplay: _v4,
          contentRating: _v9.contentRating,
          privacy: _v9.privacy,
          playerEmbedUrl: _v12?.playerEmbedUrl || "",
          name: _v9.name,
          thumbnail: _v9.thumbnail
        }), (0, _v1.jsx)(_v97, {
          videoLink: _v9.link,
          player: _v7,
          activityType: _v6.type,
          position: _v3,
          videoId: _v9.id,
          videoName: _v9.name,
          videoDescription: _v9.description,
          videoCreatedTime: _v9.createdTime,
          isRatedMature: _v9.contentRating.some(_v0 => _v36.includes(_v0)),
          is360Video: !!_v12?.spatial?.stereoFormat,
          isDolbyVision: _v12?.embed?.badges.dolbyVision,
          isHdr10: _v12?.embed?.badges.hdr_10,
          isHdr10Plus: _v12?.embed?.badges.hdr_10Plus,
          aiContent: _v12?.metadata.aiContent,
          isAdvert: _v9.contentRating.includes("advertisement"),
          isLoading: _v13
        }), (0, _v1.jsx)(_v137, {
          engagements: {
            canShare: !!_v12?.page?.share,
            canLike: !!(_v12?.metadata?.interactions?.like?.showCount && _v12?.page?.like),
            liked: !!_v12?.metadata?.interactions?.like?.added,
            canComment: !!(_v12?.page?.comments && _v12?.metadata?.interactions?.interact),
            canAddToCollections: !!(_v12?.page?.collections && "anybody" === _v9.privacy && _v12?.privacy?.add),
            canWatchlater: !!(_v12?.metadata?.interactions?.watchlater && _v12?.page?.watchLater),
            isOnWatchList: !!_v12?.metadata?.interactions?.watchlater?.added,
            canDownload: !!_v12?.privacy?.download,
            canReport: !!(_v12?.metadata?.interactions?.flagClip && "anybody" === _v9.privacy),
            totalLikes: _v12?.metadata?.connections?.likes?.total || 0,
            totalComments: _v12?.metadata?.connections?.comments?.total || 0
          },
          player: _v7,
          title: _v9.name,
          videoLink: _v9.link,
          activityType: _v6.type,
          position: _v3,
          videoId: _v9.id,
          isLoading: _v13
        })]
      });
    },
    _v172 = "ptfec",
    _v173 = ({
      activities: _v0,
      done: _v1,
      isLoadingMore: _v2,
      onLoadMore: _v3,
      autoplay: _v4
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(!0),
        [_v7, _v8] = (0, _v2.useState)(!1),
        [_v9, {
          called: _v10,
          data: _v11,
          loading: _v12
        }] = (0, _v43.useGetMePreferencesLazy)(),
        [_v13, {
          called: _v14
        }] = (0, _v43.usePatchMePreferences)();
      return (0, _v2.useEffect)(() => {
        _v10 || _v9({
          select: [_v172]
        });
      }, [_v9, _v10]), (0, _v2.useEffect)(() => {
        if (_v10 && !_v12 && _v11 && !_v14) {
          let _v0 = _v11[_v172];
          _v0 < 3 && (_v8(!0), _v13({
            select: [_v172],
            variables: {
              [_v172]: _v0 + 1
            }
          }));
        }
      }, [_v10, _v11, _v12, _v14, _v13]), (0, _v1.jsxs)(_v72.VStack, {
        w: "100%",
        gap: ["xl", "xl", "xl", "3xl"],
        children: [_v7 && (0, _v1.jsx)(_v75, {
          onDismiss: () => {
            _v13({
              select: [_v172],
              variables: {
                [_v172]: 3
              }
            }), _v8(!1);
          }
        }, "explore-card"), _v0.map((_v0, _v1) => (0, _v1.jsx)(_v73.ErrorBoundary, {
          errorPage: () => (0, _v1.jsx)("div", {}),
          children: (0, _v1.jsx)(_v171, {
            activity: _v0,
            isMuted: _v5,
            setIsMuted: _v6,
            position: _v1 + 1,
            autoplay: _v4
          }, `post-${_v1}`)
        }, `boundary-${_v1}`)).concat(_v1 ? (0, _v1.jsx)(_v61.Box, {
          margin: "2.5rem 0 3rem",
          padding: "0 1.25rem"
        }, "done") : (0, _v1.jsx)(_v80, {
          isLoading: _v2,
          onLoadMore: _v3
        }, "infinite-loading-zone"))]
      });
    },
    _v174 = ({
      filterIndex: _v0
    }) => {
      if (0 === _v0) return (0, _v1.jsx)(_v75, {});
      let {
        emptyState: {
          icon: _v1,
          title: _v2,
          description: _v3,
          buttonLabel: _v4,
          buttonLink: _v5
        }
      } = _v35[_v0];
      return (0, _v1.jsx)(_v64, {
        title: _v2(),
        description: _v3(),
        buttons: [(0, _v1.jsx)(_v8.Button, {
          as: "a",
          href: _v5,
          size: "md",
          variant: "secondary",
          children: _v4()
        }, "cta")],
        Icon: _v1
      });
    },
    _v175 = () => {
      let _v0 = (0, _v5.useViewer)(),
        _v1 = (0, _v2.useRef)(!1),
        [_v2, _v3] = (0, _v2.useState)(1),
        [_v4, _v5] = (0, _v2.useState)(0),
        [_v6, _v7] = (0, _v2.useState)([]),
        [_v8, {
          data: _v9,
          loading: _v10,
          called: _v11
        }] = (0, _v67.useGetUserFeedLazy)(),
        _v12 = (0, _v2.useRef)(1),
        _v13 = (0, _v2.useRef)(null),
        [_v14, _v15] = (0, _v2.useState)(!1),
        _v16 = _v0 => {
          var _v1, _v2, _v3;
          let _v4 = (_v1 = _v0?.user?.id ?? 0, _v2 = _v12.current, _v3 = _v13.current, _v1 ? {
            select: _v29,
            where: {
              userId: _v1
            },
            query: {
              perPage: 10,
              page: _v2,
              ...(_v3 ? {
                offset: _v3
              } : {}),
              sizes: ["960", "640", "360"],
              ...(_v35[_v0].value ? {
                type: _v35[_v0].value
              } : {}),
              ..._v30
            }
          } : null);
          _v4 && _v8 && _v8(_v4);
        };
      (0, _v2.useEffect)(() => {
        if (_v0?.user?.id && !_v1.current) {
          let _v0;
          _v0 = _v56(_v0, {
            view_type: "pageview"
          }, {
            entity_type: "widget",
            element: "widget",
            location: "header",
            feature: "my_feed"
          }, _v55()), (0, _v54.sendBpEventWithContexts)("vimeo.feed_page_load", _v0), _v1.current = !0;
        }
      }, [_v0]), (0, _v2.useEffect)(() => {
        if (_v9) {
          let _v0 = [_v9].reduce((_v0, _v1) => _v1 && _v1.data ? [..._v0, ..._v1.data.filter(_v0 => !Object.keys(_v32).includes(_v0.type))] : _v0, []);
          _v7(_v0 => [..._v0, ..._v0]);
          let _v1 = _v9.paging?.next;
          if (_v1) {
            let _v0 = new URL("https://vimeo.com" + _v1);
            _v13.current = _v0.searchParams.get("offset"), _v12.current = parseInt(_v0.searchParams.get("page") || "1", 10);
          } else _v15(!0);
        }
      }, [_v9]);
      let _v17 = _v11 && _v9?.data?.length === 0 && _v9?.page === 1 && !_v10 || (0, _v68.shouldShowInDevelopmentFeature)("force_empty_state");
      return (0, _v1.jsx)(_v69.NotificationContextProvider, {
        children: (0, _v1.jsxs)(_v71.AddToShowcaseModalContextProvider, {
          children: [(0, _v1.jsx)(_v60, {
            hideTools: !1,
            filterIndex: _v4,
            setFilterIndex: _v0 => {
              _v5(_v0), _v12.current = 1, _v13.current = null, _v7([]), _v15(!1), _v16(_v0);
            },
            isAutoplayEnabled: _v2,
            setIsAutoplayEnabled: _v3
          }), _v17 && (0, _v1.jsx)(_v174, {
            filterIndex: _v4
          }), (0, _v1.jsx)(_v173, {
            activities: _v6,
            done: _v14,
            isLoadingMore: _v10,
            onLoadMore: () => {
              _v10 || _v16(_v4);
            },
            autoplay: !!_v2
          }), (0, _v1.jsx)(_v70.GlobalNotification, {})]
        })
      });
    };
  var _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0);
  let _v179 = {
      base: "100%",
      md: 720,
      lg: 640,
      "2xl": 960
    },
    _v180 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useContext)(_v177.SideNavWidthContext),
        _v2 = (0, _v178.useWindowSize)().width,
        _v3 = (0, _v176.useBreakpointValue)(_v179),
        _v4 = (_v2 - ("number" == typeof _v3 ? _v3 : _v2)) / 2,
        _v5 = _v4 > _v1;
      return (0, _v1.jsxs)(_v12.Flex, {
        justifyContent: _v5 ? "end" : "center",
        flexGrow: 1,
        marginRight: _v5 ? `${_v4}px` : void 0,
        children: [(0, _v1.jsx)(_v77.Stack, {
          w: _v179,
          gap: "xl",
          children: (0, _v1.jsx)(_v72.VStack, {
            px: {
              base: 0,
              md: "lg"
            },
            py: {
              base: "md",
              md: "2xl",
              lg: "lg"
            },
            gap: {
              base: "xl",
              lg: "2xl"
            },
            flexGrow: 1,
            children: _v0
          })
        }), " "]
      });
    },
    _v181 = () => {
      let _v0 = (0, _v5.useViewer)();
      return _v0 ? (0, _v1.jsx)(_v180, {
        children: _v0.user ? (0, _v1.jsx)(_v175, {}) : (0, _v1.jsx)(_v66, {})
      }) : (0, _v1.jsx)(_v1.Fragment, {});
    };
  var _v182 = _v0.i(0),
    _v183 = _v0.i(0);
  let _v184 = () => {
    let _v0 = (0, _v2.useContext)(_v183.ViewerContext),
      {
        capabilities: _v1,
        ready: _v2
      } = (0, _v4.useCapability)(["hasSimplifiedEnterpriseAccount"]);
    return _v0?.isFromCopyrightRestrictedRegion || _v0?.isSimplifiedSite || _v0?.isEnterpriseSite ? (0, _v1.jsx)(_v182.PageNotAvailablePage, {}) : _v0?.user && !_v2 ? null : _v1.hasSimplifiedEnterpriseAccount ? (0, _v1.jsx)(_v182.PageNotAvailablePage, {}) : (0, _v1.jsx)(_v181, {});
  };
  _v184.getLayout = _v3.getLayout, _v0.s(["__N_SSG", 0, !0, "default", 0, _v184], 0);
}