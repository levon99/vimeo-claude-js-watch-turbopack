{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v0 => (0, _v1.jsx)(_v7.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "m14.83 11.29-4.24-4.24a.999.999 0 0 0-1.42 0 1 1 0 0 0 0 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41.999.999 0 0 0 .71.29.998.998 0 0 0 .71-.29l4.24-4.24a.997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325Z",
      fill: "currentColor"
    })
  });
  var _v9 = _v0.i(0);
  let _v10 = ({
    label: _v0,
    href: _v1,
    key: _v2
  }, _v3, _v4) => {
    let _v5 = _v3 === _v4.length - 1,
      _v6 = _v5 ? {
        fontWeight: 500
      } : {
        color: "text-secondary",
        fontWeight: 500
      },
      _v7 = _v5 ? (0, _v1.jsx)(_v5.Header, {
        sx: _v6,
        size: "xs",
        children: _v0
      }, `${_v2}-crumb`) : (0, _v1.jsx)(_v5.Header, {
        sx: _v6,
        size: "xs",
        color: "text-secondary",
        children: (0, _v1.jsx)(_v2.default, {
          title: _v0,
          href: _v1,
          children: _v0
        })
      }, `${_v2}-crumb`);
    return _v5 ? [_v7] : [_v7, (0, _v1.jsx)(_v8, {
      color: "text-secondary"
    }, `${_v2}-chevron`)];
  };
  _v0.s(["default", 0, ({
    length: _v0,
    depthLimit: _v1
  }) => {
    let {
        pathname: _v2
      } = (0, _v3.useRouter)(),
      _v3 = _v2.startsWith("/manage/workspace"),
      _v4 = (0, _v4.useMemo)(() => {
        let _v0 = {
          Home: (0, _v9.translate)({
            singular: "Home",
            dictionary: {
              es: {
                singular: "Inicio"
              },
              "de-DE": {
                singular: "Startseite"
              },
              "fr-FR": {
                singular: "Accueil"
              },
              "ja-JP": {
                singular: "ホーム"
              },
              "ko-KR": {
                singular: "홈"
              },
              "pt-BR": {
                singular: "Página Inicial"
              },
              "zh-CN": {
                singular: "主页"
              }
            }
          }),
          TeamManagement: (0, _v9.translate)({
            singular: "Team management",
            dictionary: {
              es: {
                singular: "Gestión de equipos"
              },
              "de-DE": {
                singular: "Verwaltung des Teams"
              },
              "fr-FR": {
                singular: "Gestion d'équipe"
              },
              "ja-JP": {
                singular: "チーム管理"
              },
              "ko-KR": {
                singular: "팀 관리"
              },
              "pt-BR": {
                singular: "Gerenciamento de equipe"
              },
              "zh-CN": {
                singular: "团队管理"
              }
            }
          }),
          Settings: (0, _v9.translate)({
            singular: "Settings",
            dictionary: {
              es: {
                singular: "Configuración"
              },
              "de-DE": {
                singular: "Einstellungen"
              },
              "fr-FR": {
                singular: "Paramètres"
              },
              "ja-JP": {
                singular: "設定"
              },
              "ko-KR": {
                singular: "설정"
              },
              "pt-BR": {
                singular: "Configurações"
              },
              "zh-CN": {
                singular: "设置"
              }
            }
          }),
          Branding: (0, _v9.translate)({
            singular: "Branding",
            dictionary: {
              es: {
                singular: "Marca"
              },
              "fr-FR": {
                singular: "Image de marque"
              },
              "ja-JP": {
                singular: "ブランディング"
              },
              "ko-KR": {
                singular: "브랜딩"
              },
              "pt-BR": {
                singular: "Marca"
              },
              "zh-CN": {
                singular: "品牌设计"
              }
            }
          }),
          Groups: (0, _v9.translate)({
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
          Members: (0, _v9.translate)({
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
          }),
          TeamMembersAccess: (0, _v9.translate)({
            singular: "Team member’s access",
            dictionary: {
              es: {
                singular: "Acceso de los miembros del equipo"
              },
              "de-DE": {
                singular: "Zugang für Teammitglieder"
              },
              "fr-FR": {
                singular: "Accès des collaborateurs"
              },
              "ja-JP": {
                singular: "チームメンバーのアクセス権"
              },
              "ko-KR": {
                singular: "팀원의 액세스 권한"
              },
              "pt-BR": {
                singular: "Acessos do integrante da equipe"
              },
              "zh-CN": {
                singular: "团队成员的访问权限"
              }
            }
          }),
          LegalHold: (0, _v9.translate)({
            singular: "Legal hold",
            dictionary: {
              es: {
                singular: "Retención legal"
              },
              "de-DE": {
                singular: "Gesetzliche Aufbewahrungspflicht"
              },
              "fr-FR": {
                singular: "Conservation à des fins juridiques"
              },
              "ja-JP": {
                singular: "リーガルホールド"
              },
              "ko-KR": {
                singular: "법적 보존"
              },
              "pt-BR": {
                singular: "Retenção legal"
              },
              "zh-CN": {
                singular: "依法保留"
              }
            }
          }),
          DataRetention: (0, _v9.translate)({
            singular: "Data retention",
            dictionary: {
              es: {
                singular: "Conservación de datos"
              },
              "de-DE": {
                singular: "Vorratsdatenspeicherung"
              },
              "fr-FR": {
                singular: "Conservation des données"
              },
              "ja-JP": {
                singular: "データ保持"
              },
              "ko-KR": {
                singular: "데이터 보존"
              },
              "pt-BR": {
                singular: "Retenção de dados"
              },
              "zh-CN": {
                singular: "数据保留"
              }
            }
          }),
          HistoryAndRecovery: (0, _v9.translate)({
            singular: "History and recovery",
            dictionary: {
              es: {
                singular: "Historial y recuperación"
              },
              "de-DE": {
                singular: "Geschichte und Wiederherstellung"
              },
              "fr-FR": {
                singular: "Historique et récupération"
              },
              "ja-JP": {
                singular: "履歴と復元"
              },
              "ko-KR": {
                singular: "기록 및 복구"
              },
              "pt-BR": {
                singular: "Histórico e recuperação"
              },
              "zh-CN": {
                singular: "历史记录与恢复"
              }
            }
          }),
          WebinarViewerAnonymization: (0, _v9.translate)({
            singular: "Webinar viewer anonymization",
            dictionary: {
              es: {
                singular: "Anonimización de espectadores del seminario web"
              },
              "de-DE": {
                singular: "Anonymisierung von Webinar-Zuschauern"
              },
              "fr-FR": {
                singular: "Anonymisation des spectateurs du webinaire"
              },
              "ja-JP": {
                singular: "ウェビナー視聴者の匿名化"
              },
              "ko-KR": {
                singular: "웨비나 시청자 익명화"
              },
              "pt-BR": {
                singular: "Anonimização de visualizadores do webinar"
              },
              "zh-CN": {
                singular: "网络研讨会观看者匿名化"
              }
            }
          }),
          SingleSignOn: (0, _v9.translate)({
            singular: "Single sign-on (SSO)",
            dictionary: {
              es: {
                singular: "Inicio de sesión único (SSO)"
              },
              "de-DE": {
                singular: "Single-Sign-on (SSO)"
              },
              "fr-FR": {
                singular: "Authentification unique (SSO)"
              },
              "ja-JP": {
                singular: "シングルサインオン (SSO)"
              },
              "ko-KR": {
                singular: "싱글 사인온 (SSO)"
              },
              "pt-BR": {
                singular: "Autenticação Única (SSO)"
              },
              "zh-CN": {
                singular: "单点登录 (SSO)"
              }
            }
          }),
          ClipExtension: (0, _v9.translate)({
            singular: "Clip extension",
            dictionary: {
              es: {
                singular: "Extensión del clip"
              },
              "de-DE": {
                singular: "Clip-Verlängerung"
              },
              "fr-FR": {
                singular: "Extension du clip"
              },
              "ja-JP": {
                singular: "クリップの延長"
              },
              "ko-KR": {
                singular: "클립 기간 연장"
              },
              "pt-BR": {
                singular: "Extensão de clipe"
              },
              "zh-CN": {
                singular: "剪辑延期"
              }
            }
          }),
          AuditLogs: (0, _v9.translate)({
            singular: "Audit logs",
            dictionary: {
              es: {
                singular: "Registros de auditoría"
              },
              "de-DE": {
                singular: "Audit-Protokolle"
              },
              "fr-FR": {
                singular: "Journaux d'audit"
              },
              "ja-JP": {
                singular: "監査ログ"
              },
              "ko-KR": {
                singular: "감사 로그"
              },
              "pt-BR": {
                singular: "Registros de fiscalização"
              },
              "zh-CN": {
                singular: "审计日志"
              }
            }
          }),
          PrivacyRestrictionsByRole: (0, _v9.translate)({
            singular: "Privacy restrictions by role",
            dictionary: {
              es: {
                singular: "Restricciones de privacidad por rol"
              },
              "de-DE": {
                singular: "Datenschutzeinschränkungen nach Rolle"
              },
              "fr-FR": {
                singular: "Restrictions de confidentialité par rôle"
              },
              "ja-JP": {
                singular: "役割別のプライバシー制限"
              },
              "ko-KR": {
                singular: "역할별 프라이버시 제한"
              },
              "pt-BR": {
                singular: "Restrições de privacidade por função"
              },
              "zh-CN": {
                singular: "按角色划分的隐私限制"
              }
            }
          }),
          ReviewPagePrivacy: (0, _v9.translate)({
            singular: "Review page privacy",
            dictionary: {
              es: {
                singular: "Privacidad de la página de revisión"
              },
              "de-DE": {
                singular: "Datenschutzeinstellungen der Seite überprüfen"
              },
              "fr-FR": {
                singular: "Confidentialité de la page d'avis"
              },
              "ja-JP": {
                singular: "レビューページのプライバシー"
              },
              "ko-KR": {
                singular: "리뷰 페이지 프라이버시"
              },
              "pt-BR": {
                singular: "Privacidade da página de revisão"
              },
              "zh-CN": {
                singular: "评论页面隐私"
              }
            }
          }),
          Allowlist: (0, _v9.translate)({
            singular: "Allowlist",
            dictionary: {
              es: {
                singular: "Lista de permitidos"
              },
              "de-DE": {
                singular: "Zulassungsliste"
              },
              "fr-FR": {
                singular: "Liste d'admissibilité"
              },
              "ja-JP": {
                singular: "許可リスト"
              },
              "ko-KR": {
                singular: "허용 목록"
              },
              "pt-BR": {
                singular: "Lista de permissão"
              },
              "zh-CN": {
                singular: "允许列表"
              }
            }
          }),
          Usage: (0, _v9.translate)({
            singular: "Usage",
            dictionary: {
              es: {
                singular: "Uso"
              },
              "de-DE": {
                singular: "Nutzung"
              },
              "fr-FR": {
                singular: "Utilisation"
              },
              "ja-JP": {
                singular: "使用状況"
              },
              "ko-KR": {
                singular: "사용량"
              },
              "pt-BR": {
                singular: "Uso"
              },
              "zh-CN": {
                singular: "使用情况"
              }
            }
          })
        };
        return [{
          key: "/manage",
          href: "/",
          label: _v0.Home,
          priority: 1
        }, {
          key: "manage/team",
          href: "/manage/team",
          label: _v0.TeamManagement,
          priority: 2
        }, {
          key: "settings",
          href: "/manage/team/settings",
          label: _v0.Settings,
          priority: 3
        }, {
          key: "branding",
          href: "/manage/team/branding",
          label: _v0.Branding,
          priority: 3
        }, {
          key: "usage",
          href: "/manage/team/usage",
          label: _v0.Usage,
          priority: 3
        }, {
          key: "groups",
          href: "/manage/team/groups",
          label: _v0.Groups,
          priority: 3
        }, {
          key: "members",
          href: _v3 ? "/manage/workspace/members" : "/manage/team/members",
          label: _v0.Members,
          priority: 3
        }, {
          key: "shared-resources",
          href: "/manage/team/members",
          label: _v0.TeamMembersAccess,
          priority: 4
        }, {
          key: "team-library",
          href: "/manage/team/members",
          label: _v0.TeamMembersAccess,
          priority: 4
        }, {
          key: "my-library",
          href: "/manage/team/members",
          label: _v0.TeamMembersAccess,
          priority: 4
        }, {
          key: "legal-hold",
          href: "/manage/team/settings/legal-hold",
          label: _v0.LegalHold,
          priority: 4
        }, {
          key: "data-retention",
          href: "/manage/team/settings/data-retention",
          label: _v0.DataRetention,
          priority: 4
        }, {
          key: "history",
          href: "/manage/team/settings/history",
          label: _v0.HistoryAndRecovery,
          priority: 4
        }, {
          key: "webinar-viewer-anonymisation",
          href: "/manage/team/settings/webinar-viewer-anonymisation",
          label: _v0.WebinarViewerAnonymization,
          priority: 4
        }, {
          key: "sso",
          href: "/manage/team/settings/sso",
          label: _v0.SingleSignOn,
          priority: 4
        }, {
          key: "clip-extension",
          href: "/manage/team/settings/clip-extension",
          label: _v0.ClipExtension,
          priority: 4
        }, {
          key: "audit-logs",
          href: "/manage/team/settings/audit-logs",
          label: _v0.AuditLogs,
          priority: 4
        }, {
          key: "privacy-restrictions",
          href: "/manage/team/settings/privacy-restrictions",
          label: _v0.PrivacyRestrictionsByRole,
          priority: 4
        }, {
          key: "review-page-privacy",
          href: "/manage/team/settings/review-page-privacy",
          label: _v0.ReviewPagePrivacy,
          priority: 4
        }, {
          key: "allowlist",
          href: "/manage/team/settings/allowlist",
          label: _v0.Allowlist,
          priority: 4
        }];
      }, []),
      _v5 = window.location.pathname,
      _v6 = (0, _v4.useMemo)(() => {
        let _v0 = _v4.filter(({
          key: _v0,
          priority: _v1
        }) => {
          let _v2 = _v5.lastIndexOf(_v0) >= 0;
          return _v0 ? _v2 && _v1 > _v0 : _v2;
        }).sort(({
          priority: _v0
        }, {
          priority: _v1
        }) => _v0 > _v1 ? 1 : -1);
        return _v1 ? _v0.some(_v0 => _v0.priority >= _v1) ? _v0.map(_v10) : [] : _v0.map(_v10);
      }, [_v4, _v1, _v5, _v0]);
    return _v6.length ? (0, _v1.jsx)(_v6.HStack, {
      gap: 0,
      children: _v6
    }) : null;
  }], 0);
}