{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = "/settings/videos/upload_defaults",
    _v9 = _v0 => _v0 => (0, _v1.jsx)(_v2.default, {
      href: _v0,
      children: (0, _v1.jsx)(_v4.Link, {
        variant: "inline-primary",
        as: "span",
        sx: {
          fontSize: "inherit"
        },
        children: _v0
      })
    }),
    _v10 = {
      "to-defaults": _v0 => (0, _v6.translate)({
        singular: "To manage defaults settings of videos, reviews or viewer permissions, visit the {LINK}defaults page.{/LINK}",
        replacements: {
          LINK: _v9(_v0)
        },
        dictionary: {
          es: {
            singular: "Para administrar la configuración predeterminada de videos, reseñas o permisos de espectadores, visite la {LINK}página de valores predeterminados.{/LINK}"
          },
          "de-DE": {
            singular: "Um die Standardeinstellungen für Videos, Reviews oder Betrachterberechtigungen zu verwalten, besuchen Sie die {LINK}Seite für Standardeinstellungen.{/LINK}"
          },
          "fr-FR": {
            singular: "Pour gérer les paramètres par défaut des vidéos, des revues ou des autorisations des spectateurs, rendez-vous sur la {LINK}page des paramètres par défaut.{/LINK}"
          },
          "ja-JP": {
            singular: "動画、レビュー、または視聴者の権限の既定設定を管理するには、{LINK}既定設定ページ{/LINK}にアクセスしてください。"
          },
          "ko-KR": {
            singular: "비디오, 리뷰 또는 시청자 권한의 기본 설정을 관리하려면 {LINK}기본값 페이지를 방문하세요.{/LINK}"
          },
          "pt-BR": {
            singular: "Para gerenciar as configurações padrão de vídeos, revisões ou permissões de espectadores, visite a {LINK}página de configurações padrão.{/LINK}"
          },
          "zh-CN": {
            singular: "要管理视频、审阅或观看者权限的默认设置，请访问{LINK}默认设置页面。{/LINK}"
          }
        }
      }),
      "to-presets": _v0 => (0, _v6.translate)({
        singular: "To manage presets of embeds, video player and video page theme, visit the {LINK}presets page.{/LINK}",
        replacements: {
          LINK: _v9(_v0)
        },
        dictionary: {
          es: {
            singular: "Para administrar los preajustes de las incrustaciones, del reproductor de vídeo y del tema de la página de vídeo, visite la {LINK}página de preajustes.{/LINK}"
          },
          "de-DE": {
            singular: "Um Voreinstellungen für Einbettungen, den Videoplayer und das Design der Videoseite zu verwalten, besuchen Sie die {LINK}Seite für Voreinstellungen.{/LINK}"
          },
          "fr-FR": {
            singular: "Pour gérer les préréglages des intégrations, du lecteur vidéo et du thème de la page vidéo, rendez-vous sur la {LINK}page des préréglages.{/LINK}"
          },
          "ja-JP": {
            singular: "埋め込み、動画プレーヤー、動画ページのテーマのプリセットを管理するには、{LINK}プリセットページ{/LINK}にアクセスしてください。"
          },
          "ko-KR": {
            singular: "임베드, 비디오 플레이어 및 비디오 페이지 테마의 프리셋을 관리하려면 {LINK}프리셋 페이지를 방문하세요.{/LINK}"
          },
          "pt-BR": {
            singular: "Para gerenciar as predefinições de incorporações, do player de vídeo e do tema da página de vídeo, visite a {LINK}página de predefinições.{/LINK}"
          },
          "zh-CN": {
            singular: "要管理嵌入、视频播放器和视频页面主题的预设，请访问{LINK}预设页面。{/LINK}"
          }
        }
      })
    };
  _v0.s(["PresetsDefaultsCrossLink", 0, ({
    direction: _v0,
    scope: _v1
  }) => {
    let {
        settings: _v2
      } = (0, _v7.useOrionSettings)(),
      _v3 = (({
        direction: _v0,
        flags: _v1,
        scope: _v2
      }) => "workspace" === _v2 ? "to-presets" === _v0 ? "/manage/workspace/presets" : _v1.enableWorkspaceDefaultsPage ? "/manage/workspace/defaults" : "/manage/workspace/basics" : "to-defaults" === _v0 ? _v1.enableTeamDefaultsPage ? "/manage/team/defaults" : _v8 : _v1.enableTeamPresetsPage ? "/manage/team/presets" : _v8)({
        direction: _v0,
        scope: _v1,
        flags: {
          enableTeamDefaultsPage: _v2.enable_team_defaults_page,
          enableTeamPresetsPage: _v2.enable_team_presets_page,
          enableWorkspaceDefaultsPage: _v2.enable_workspace_defaults_page
        }
      });
    return (0, _v1.jsx)(_v3.Box, {
      alignSelf: "flex-start",
      children: (0, _v1.jsx)(_v5.Paragraph, {
        variant: "body-md",
        color: "text-primary",
        children: _v10[_v0](_v3)
      })
    });
  }], 0);
}