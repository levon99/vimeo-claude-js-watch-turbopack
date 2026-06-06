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
    _v24 = _v0.i(0);
  let _v25 = ({
      searchString: _v0,
      onSearchChange: _v1,
      onSearchClear: _v2,
      placeholder: _v3,
      disabled: _v4
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(_v0),
        [_v7, _v8] = (0, _v3.useState)(_v0);
      _v7 !== _v0 && (_v8(_v0), _v6(_v0));
      let _v9 = (0, _v3.useRef)(null),
        _v10 = 0;
      return _v5 && (_v10 += 32), (0, _v1.jsx)(_v5.Flex, {
        justify: "right",
        align: "center",
        gap: 10,
        children: (0, _v1.jsxs)(_v21.InputGroup, {
          size: "md",
          children: [(0, _v1.jsx)(_v22.InputLeftElement, {
            children: (0, _v1.jsx)(_v24.SearchMagnifier, {
              boxSize: "20px",
              color: "text-secondary"
            })
          }), (0, _v1.jsx)(_v20.Input, {
            isDisabled: _v4,
            id: "search",
            w: (0, _v15.rem)(300),
            pr: _v10,
            role: "search",
            autoComplete: "false",
            type: "search",
            placeholder: _v3,
            _placeholder: {
              color: "text-secondary"
            },
            sx: {
              "::-webkit-search-cancel-button": {
                WebkitAppearance: "none"
              }
            },
            ref: _v9,
            value: _v5,
            onChange: _v0 => {
              _v6(_v0.currentTarget.value), _v1(_v0.currentTarget.value);
            }
          }), (0, _v1.jsx)(_v22.InputRightElement, {
            w: _v10,
            mr: "xs",
            justifyContent: "space-between",
            children: _v5 && (0, _v1.jsx)(_v23.CloseXCircleFilled, {
              onClick: () => {
                _v6(""), _v2();
              },
              boxSize: "20px",
              color: "text-primary",
              ml: "sm"
            })
          })]
        })
      });
    },
    _v26 = ({
      appliedFilters: _v0,
      onFiltersApplied: _v1,
      onClearFilters: _v2,
      disabled: _v3
    }) => {
      let _v4 = (0, _v3.useRef)(null),
        _v5 = (0, _v3.useRef)(null),
        [_v6, _v7] = (0, _v3.useState)(!1),
        [_v8, _v9] = (0, _v3.useState)(_v0),
        [_v10, _v11] = (0, _v3.useState)(_v0),
        [_v12, _v13] = (0, _v3.useState)("");
      _v10 !== _v0 && (_v11(_v0), _v9(_v0));
      let _v14 = _v12.length > 0 ? _v8.filter(_v0 => _v0.label.toLowerCase().includes(_v12.toLowerCase())) : _v8;
      (0, _v16.useOutsideClick)({
        enabled: _v6,
        ref: _v4,
        handler: _v0 => {
          _v5.current && _v0.target && (_v5.current == _v0.target || _v5.current?.contains(_v0.target)) || _v7(!1);
        }
      });
      let _v15 = () => !_v8.some(_v0 => _v0.applied);
      return (0, _v1.jsxs)(_v12.Popover, {
        isOpen: _v6,
        placement: "bottom-start",
        children: [(0, _v1.jsx)(_v14.PopoverTrigger, {
          children: (0, _v1.jsx)(_v11.IconButton, {
            isDisabled: _v3,
            onClick: () => _v7(!_v6),
            ref: _v5,
            "aria-label": "open-modifiers",
            isActive: _v6,
            size: "md",
            icon: _v15() ? (0, _v1.jsx)(_v17.FiltersLevers, {}) : (0, _v1.jsx)(_v18.FiltersLeversFilled, {}),
            variant: "secondary",
            sx: {
              svg: {
                width: (0, _v15.rem)(25),
                height: (0, _v15.rem)(21)
              }
            }
          })
        }), (0, _v1.jsx)(_v13.PopoverContent, {
          padding: "75",
          borderRadius: "md",
          maxWidth: (0, _v15.rem)(318),
          children: (0, _v1.jsxs)(_v5.Flex, {
            ref: _v4,
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v25, {
              searchString: _v12,
              onSearchChange: _v0 => _v13(_v0),
              onSearchClear: () => _v13(""),
              placeholder: _v19.T.Search
            }), (0, _v1.jsx)(_v5.Flex, {
              flexDirection: "column",
              alignItems: "start",
              width: "100%",
              maxHeight: (0, _v15.rem)(400),
              overflowY: "auto",
              children: _v14.map(_v0 => (0, _v1.jsx)(_v10.Checkbox, {
                alignSelf: "flex-start",
                padding: "75",
                id: "filter-" + _v0.label + "-" + _v0.value,
                onChange: () => {
                  _v9(_v8.map(_v0 => _v0.value === _v0.value ? {
                    ..._v0,
                    applied: !_v0.applied
                  } : _v0));
                },
                isChecked: _v0.applied,
                children: _v0.label
              }, _v0.value))
            }, 1), (0, _v1.jsxs)(_v5.Flex, {
              gap: "75",
              paddingTop: "75",
              width: "100%",
              justifyContent: "flex-end",
              children: [(0, _v1.jsx)(_v9.Button, {
                size: "sm",
                isDisabled: _v15(),
                variant: "tertiary",
                onClick: () => {
                  _v2(), _v9(_v8.map(_v0 => (_v0.applied = !1, _v0))), _v7(!1);
                },
                children: _v19.T.ClearAll
              }), (0, _v1.jsx)(_v9.Button, {
                size: "sm",
                variant: "primary",
                onClick: () => {
                  _v7(!1), _v1(_v8);
                },
                children: _v15() ? _v19.T.Apply : _v19.T.AppliedEvents(_v8.filter(_v0 => _v0.applied).length)
              })]
            })]
          })
        })]
      });
    };
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = {
      Apply: (0, _v30.translate)({
        singular: "Apply",
        dictionary: {
          es: {
            singular: "Aplicar"
          },
          "de-DE": {
            singular: "Anwenden"
          },
          "fr-FR": {
            singular: "Appliquer"
          },
          "ja-JP": {
            singular: "適用する"
          },
          "ko-KR": {
            singular: "적용"
          },
          "pt-BR": {
            singular: "Aplicar"
          },
          "zh-CN": {
            singular: "应用"
          }
        }
      }),
      AreYouSure: (0, _v30.translate)({
        singular: "Are you sure?",
        dictionary: {
          es: {
            singular: "¿Estás seguro(a)?"
          },
          "de-DE": {
            singular: "Bist du dir sicher?"
          },
          "fr-FR": {
            singular: "Êtes-vous sûr ?"
          },
          "ja-JP": {
            singular: "よろしいですか？"
          },
          "ko-KR": {
            singular: "정말로 실행할까요?"
          },
          "pt-BR": {
            singular: "Você tem certeza?"
          },
          "zh-CN": {
            singular: "您确定吗？"
          }
        }
      }),
      AuditLogs: (0, _v30.translate)({
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
      AuditLogsEnable: (0, _v30.translate)({
        singular: "Enable audit logs",
        dictionary: {
          es: {
            singular: "Activar registros de auditoría"
          },
          "de-DE": {
            singular: "Audit-Protokolle aktivieren"
          },
          "fr-FR": {
            singular: "Activer les journaux d'audit"
          },
          "ja-JP": {
            singular: "監査ログを有効にする"
          },
          "ko-KR": {
            singular: "감사 로그 활성화"
          },
          "pt-BR": {
            singular: "Habilitar registros de fiscalização"
          },
          "zh-CN": {
            singular: "启用审核日志"
          }
        }
      }),
      AuditLogsDisableWarning: [(0, _v30.translate)({
        singular: "When you disable audit logs, you will no longer be able to view existing logs in your account and Vimeo will no longer log your users' activity.",
        dictionary: {
          es: {
            singular: "Cuando desactives los registros de auditoría, ya no podrás ver los registros existentes en tu cuenta y Vimeo dejará de registrar la actividad de tus usuarios."
          },
          "de-DE": {
            singular: "Wenn Sie Audit-Protokolle deaktivieren, können Sie vorhandene Protokolle in Ihrem Konto nicht mehr einsehen und Vimeo protokolliert die Aktivitäten Ihrer Benutzer nicht mehr."
          },
          "fr-FR": {
            singular: "Lorsque vous désactivez les journaux d'audit, vous ne pourrez plus consulter les journaux existants de votre compte et Vimeo n'enregistrera plus l'activité de vos utilisateurs."
          },
          "ja-JP": {
            singular: "監査ログを無効にすると、アカウント内の既存のログを表示できなくなり、Vimeoはユーザーのアクティビティを記録しなくなります。"
          },
          "ko-KR": {
            singular: "감사 로그를 비활성화하면 계정에 있는 기존 로그를 더 이상 볼 수 없으며 Vimeo는 더 이상 사용자의 활동을 기록하지 않습니다."
          },
          "pt-BR": {
            singular: "Ao desativar os logs de auditoria, você não poderá mais visualizar os logs existentes na sua conta e o Vimeo deixará de registrar a atividade dos seus usuários."
          },
          "zh-CN": {
            singular: "当您禁用审计日志时，您将无法查看帐户中现有的日志，Vimeo 也将不再记录您用户的活动。"
          }
        }
      }), (0, _v30.translate)({
        singular: "You will not be able to retroactively view any activity from the period when audit logs has been turned off.",
        dictionary: {
          es: {
            singular: "No podrás ver de forma retroactiva ninguna actividad correspondiente al periodo en el que los registros de auditoría estuvieron desactivados."
          },
          "de-DE": {
            singular: "Sie können rückwirkend keine Aktivitäten aus dem Zeitraum einsehen, in dem die Audit-Protokolle deaktiviert waren."
          },
          "fr-FR": {
            singular: "Vous ne pourrez pas consulter rétroactivement l'activité provenant de la période pendant laquelle les journaux d'audit ont été désactivés."
          },
          "ja-JP": {
            singular: "監査ログをオフにしていた期間のアクティビティを遡って表示することはできません。"
          },
          "ko-KR": {
            singular: "감사 로그가 비활성화된 기간의 활동을 소급하여 볼 수 없습니다."
          },
          "pt-BR": {
            singular: "Você não poderá visualizar retroativamente nenhuma atividade do período em que os logs de auditoria estiveram desativados."
          },
          "zh-CN": {
            singular: "您将无法回溯查看审计日志关闭期间的任何活动。"
          }
        }
      })],
      AuditLogsPageDescription: (0, _v30.translate)({
        singular: "Audit logs create a historical and sequential record of your users' activity in your Vimeo account. They contain a record of the events that occurred, the time they occurred, the responsible users or services, and the impacted entities.",
        dictionary: {
          es: {
            singular: "Los registros de auditoría crean un registro histórico y secuencial de la actividad de sus usuarios en su cuenta de Vimeo. Contienen un registro de los sucesos ocurridos, el momento en que se produjeron, los usuarios o servicios responsables y las entidades afectadas."
          },
          "de-DE": {
            singular: "Audit Logs erstellen eine historische und fortlaufende Aufzeichnung der Aktivitäten Ihrer Benutzer in Ihrem Vimeo-Konto. Sie enthalten eine Aufzeichnung der aufgetretenen Ereignisse, den Zeitpunkt ihres Auftretens, die verantwortlichen Benutzer oder Dienste und die betroffenen Entitäten."
          },
          "fr-FR": {
            singular: "Les journaux d'audit créent un enregistrement historique et séquentiel de l'activité de vos utilisateurs dans votre compte Vimeo. Ils contiennent un registre des événements qui se sont produits et à quelle heure, des utilisateurs ou services responsables et des entités concernées."
          },
          "ja-JP": {
            singular: "監査ログでは、Vimeoアカウントにおけるユーザーのアクティビティの連続的な履歴が作成されます。これには、発生したイベント、発生時刻、そのイベントを発生させたユーザーまたはサービス、影響を受けるエンティティの記録が含まれます。"
          },
          "ko-KR": {
            singular: "감사 로그는 Vimeo 계정에서 사용자 활동에 대한 과거 및 순차적 기록을 생성합니다. 여기에는 발생한 이벤트, 발생한 시간, 책임이 있는 사용자 또는 서비스, 영향을 받은 엔터티에 대한 기록이 포함됩니다."
          },
          "pt-BR": {
            singular: "Os registros de auditoria criam um registro histórico e sequencial da atividade dos seus usuários na sua conta do Vimeo. Eles contêm um registro dos eventos que ocorreram, da hora em que ocorreram, dos usuários ou serviços responsáveis e das entidades afetadas."
          },
          "zh-CN": {
            singular: "审计日志按顺序记录您的 Vimeo 账户中的用户活动。包含发生的事件、发生的时间、责任用户或服务，以及受影响的实体。"
          }
        }
      }),
      User: (0, _v30.translate)({
        singular: "User",
        dictionary: {
          es: {
            singular: "Usuario"
          },
          "de-DE": {
            singular: "Benutzer"
          },
          "fr-FR": {
            singular: "Utilisateur"
          },
          "ja-JP": {
            singular: "ユーザー"
          },
          "ko-KR": {
            singular: "사용자"
          },
          "pt-BR": {
            singular: "Usuário"
          },
          "zh-CN": {
            singular: "用户"
          }
        }
      }),
      ClearAll: (0, _v30.translate)({
        singular: "Clear all",
        dictionary: {
          es: {
            singular: "Borrar todo"
          },
          "de-DE": {
            singular: "Alle löschen"
          },
          "fr-FR": {
            singular: "Tout supprimer"
          },
          "ja-JP": {
            singular: "すべて削除"
          },
          "ko-KR": {
            singular: "모두 지우기"
          },
          "pt-BR": {
            singular: "Limpar tudo"
          },
          "zh-CN": {
            singular: "清除全部"
          }
        }
      }),
      EventName: (0, _v30.translate)({
        singular: "Event name",
        dictionary: {
          es: {
            singular: "Nombre del evento"
          },
          "de-DE": {
            singular: "Name des Events"
          },
          "fr-FR": {
            singular: "Nom de l'événement"
          },
          "ja-JP": {
            singular: "イベント名"
          },
          "ko-KR": {
            singular: "이벤트 이름"
          },
          "pt-BR": {
            singular: "Nome do evento"
          },
          "zh-CN": {
            singular: "事件名称"
          }
        }
      }),
      Privacy: (0, _v30.translate)({
        singular: "Privacy",
        dictionary: {
          es: {
            singular: "Privacidad"
          },
          "de-DE": {
            singular: "Datenschutz"
          },
          "fr-FR": {
            singular: "Confidentialité "
          },
          "ja-JP": {
            singular: "プライバシー"
          },
          "ko-KR": {
            singular: "프라이버시"
          },
          "pt-BR": {
            singular: "Privacidade"
          },
          "zh-CN": {
            singular: "隐私"
          }
        }
      }),
      AffectedObjects: (0, _v30.translate)({
        singular: "Affected objects",
        dictionary: {
          es: {
            singular: "Objetos afectados"
          },
          "de-DE": {
            singular: "Betroffene Objekte"
          },
          "fr-FR": {
            singular: "Éléments concernés"
          },
          "ja-JP": {
            singular: "影響を受けるオブジェクト"
          },
          "ko-KR": {
            singular: "영향을 받는 개체"
          },
          "pt-BR": {
            singular: "Elementos afetados"
          },
          "zh-CN": {
            singular: "受影响对象"
          }
        }
      }),
      Date: (0, _v30.translate)({
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
      ExportToCsv: (0, _v30.translate)({
        singular: "Export to CSV",
        dictionary: {
          es: {
            singular: "Exportar a CSV"
          },
          "de-DE": {
            singular: "In CSV exportieren"
          },
          "fr-FR": {
            singular: "Exporter au format .CSV"
          },
          "ja-JP": {
            singular: "CSVにエクスポート"
          },
          "ko-KR": {
            singular: "CSV로 내보내기"
          },
          "pt-BR": {
            singular: "Exportar para CSV"
          },
          "zh-CN": {
            singular: "导出为 CSV"
          }
        }
      }),
      FilterBy: (0, _v30.translate)({
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
      Location: (0, _v30.translate)({
        singular: "Location",
        dictionary: {
          es: {
            singular: "Ubicación"
          },
          "de-DE": {
            singular: "Ort"
          },
          "fr-FR": {
            singular: "Localisation"
          },
          "ja-JP": {
            singular: "位置情報"
          },
          "ko-KR": {
            singular: "위치"
          },
          "pt-BR": {
            singular: "Local"
          },
          "zh-CN": {
            singular: "位置"
          }
        }
      }),
      NoEntries: (0, _v30.translate)({
        singular: "No entries found",
        dictionary: {
          es: {
            singular: "No se encontraron entradas"
          },
          "de-DE": {
            singular: "Keine Einträge gefunden"
          },
          "fr-FR": {
            singular: "Aucun résultat"
          },
          "ja-JP": {
            singular: "エントリが見つかりません"
          },
          "ko-KR": {
            singular: "항목을 찾을 수 없습니다"
          },
          "pt-BR": {
            singular: "Nenhuma entrada encontrada"
          },
          "zh-CN": {
            singular: "未找到条目"
          }
        }
      }),
      NotLogging: (0, _v30.translate)({
        singular: "Vimeo is not currently logging your account activity.",
        dictionary: {
          es: {
            singular: "Vimeo no registra actualmente la actividad de su cuenta."
          },
          "de-DE": {
            singular: "Derzeit protokolliert Vimeo Ihre Kontoaktivitäten nicht."
          },
          "fr-FR": {
            singular: "Vimeo n'enregistre pas actuellement l'activité de votre compte."
          },
          "ja-JP": {
            singular: "Vimeoは現在、お客様のアカウントのアクティビティを記録していません。"
          },
          "ko-KR": {
            singular: "Vimeo는 현재 계정 활동을 기록하지 않고 있습니다."
          },
          "pt-BR": {
            singular: "No momento, o Vimeo não está registrando a atividade da sua conta."
          },
          "zh-CN": {
            singular: "Vimeo 目前没有记录您的帐户活动。"
          }
        }
      }),
      SelectDate: (0, _v30.translate)({
        singular: "Select Date",
        dictionary: {
          es: {
            singular: "Seleccionar fecha"
          },
          "de-DE": {
            singular: "Datum auswählen"
          },
          "fr-FR": {
            singular: "Sélectionner la date"
          },
          "ja-JP": {
            singular: "日付を選択"
          },
          "ko-KR": {
            singular: "날짜 선택"
          },
          "pt-BR": {
            singular: "Selecionar data"
          },
          "zh-CN": {
            singular: "选择日期"
          }
        }
      }),
      TrySearchDifferent: (0, _v30.translate)({
        singular: "Try searching something different or change the date range.",
        dictionary: {
          es: {
            singular: "Intenta buscar algo diferente o cambia el rango de fechas."
          },
          "de-DE": {
            singular: "Versuchen Sie eine andere Suche oder ändern Sie den Datumsbereich."
          },
          "fr-FR": {
            singular: "Essayez une recherche différente ou modifiez la plage de dates."
          },
          "ja-JP": {
            singular: "別のキーワードで検索するか、日付範囲を変更してください。"
          },
          "ko-KR": {
            singular: "다른 검색어로 시도하거나 날짜 범위를 변경해 보세요."
          },
          "pt-BR": {
            singular: "Tente procurar algo diferente ou altere o intervalo de datas."
          },
          "zh-CN": {
            singular: "尝试搜索其他内容或更改日期范围。"
          }
        }
      }),
      ResetView: (0, _v30.translate)({
        singular: "Reset view",
        dictionary: {
          es: {
            singular: "Restablecer vista"
          },
          "de-DE": {
            singular: "Ansicht zurücksetzen"
          },
          "fr-FR": {
            singular: "Réinitialiser la vue"
          },
          "ja-JP": {
            singular: "表示をリセット"
          },
          "ko-KR": {
            singular: "보기 재설정"
          },
          "pt-BR": {
            singular: "Redefinir visualização"
          },
          "zh-CN": {
            singular: "重置视图"
          }
        }
      }),
      ToEnableAuditLogs: (0, _v30.translate)({
        singular: "To enable audit logs, toggle the switch above.",
        dictionary: {
          es: {
            singular: "Para habilitar los registros de auditoría, deslice el botón de alternancia que está arriba."
          },
          "de-DE": {
            singular: "Um Audit-Protokolle zu aktivieren, schalten Sie den Schalter oben um."
          },
          "fr-FR": {
            singular: "Pour activer les journaux d'audit, basculez le bouton ci-dessus."
          },
          "ja-JP": {
            singular: "監査ログを有効にするには、上のスイッチを切り替えます。"
          },
          "ko-KR": {
            singular: "감사 로그를 사용 설정하려면 위의 스위치를 켜세요."
          },
          "pt-BR": {
            singular: "Para habilitar logs de auditoria, alterne o botão acima."
          },
          "zh-CN": {
            singular: "如需启用审核日志，请切换以上开关。"
          }
        }
      }),
      Workspaces: (0, _v30.translate)({
        singular: "Workspaces",
        dictionary: {
          es: {
            singular: "Espacios de trabajo"
          },
          "fr-FR": {
            singular: "Espaces de travail"
          },
          "ja-JP": {
            singular: "ワークスペース"
          },
          "ko-KR": {
            singular: "워크스페이스"
          },
          "pt-BR": {
            singular: "Espaços de trabalho"
          },
          "zh-CN": {
            singular: "工作区"
          }
        }
      }),
      Today: (0, _v30.translate)({
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
      Yesterday: (0, _v30.translate)({
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
      lastXDays: _v0 => (0, _v30.translate)({
        singular: "Last {COUNT} days",
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "Últimos {COUNT} días"
          },
          "de-DE": {
            singular: "Letzte {COUNT} Tage"
          },
          "fr-FR": {
            singular: "{COUNT} derniers jours"
          },
          "ja-JP": {
            singular: "過去 {COUNT}日間"
          },
          "ko-KR": {
            singular: "최근 {COUNT}일"
          },
          "pt-BR": {
            singular: "Últimos {COUNT} dias"
          },
          "zh-CN": {
            singular: "过去 {COUNT} 天"
          }
        }
      }),
      CurrentMonth: (0, _v30.translate)({
        singular: "Current month",
        dictionary: {
          es: {
            singular: "Mes actual"
          },
          "de-DE": {
            singular: "Aktueller Monat"
          },
          "fr-FR": {
            singular: "Ce mois-ci"
          },
          "ja-JP": {
            singular: "今月"
          },
          "ko-KR": {
            singular: "이번 달"
          },
          "pt-BR": {
            singular: "Mês atual"
          },
          "zh-CN": {
            singular: "本月"
          }
        }
      }),
      LastMonth: (0, _v30.translate)({
        singular: "Last month",
        dictionary: {
          es: {
            singular: "Último mes"
          },
          "de-DE": {
            singular: "Letzter Monat"
          },
          "fr-FR": {
            singular: "Le mois dernier"
          },
          "ja-JP": {
            singular: "先月"
          },
          "ko-KR": {
            singular: "지난달"
          },
          "pt-BR": {
            singular: "Mês passado"
          },
          "zh-CN": {
            singular: "上月"
          }
        }
      }),
      ChangesSaved: (0, _v30.translate)({
        singular: "Changes saved",
        dictionary: {
          es: {
            singular: "Guardamos los cambios"
          },
          "de-DE": {
            singular: "Änderungen wurden gespeichert"
          },
          "fr-FR": {
            singular: "Changements sauvegardés"
          },
          "ja-JP": {
            singular: "変更内容が保存されました"
          },
          "ko-KR": {
            singular: "변경 사항 저장 완료"
          },
          "pt-BR": {
            singular: "Alterações salvas"
          },
          "zh-CN": {
            singular: "已保存更改"
          }
        }
      }),
      AuditLogMadeByStaff: (0, _v30.translate)({
        singular: "This event was done by a Vimeo agent on your behalf.",
        dictionary: {
          es: {
            singular: "Este evento fue realizado por un agente de Vimeo en su nombre."
          },
          "de-DE": {
            singular: "Dieses Ereignis wurde von einem Vimeo-Agenten in Ihrem Namen durchgeführt."
          },
          "fr-FR": {
            singular: "Cet événement a été réalisé par un agent Vimeo pour votre compte."
          },
          "ja-JP": {
            singular: "このイベントはあなたに代わってVimeoのエージェントによって行われました。"
          },
          "ko-KR": {
            singular: "이 이벤트는 귀하를 대신하여 Vimeo 에이전트가 수행했습니다."
          },
          "pt-BR": {
            singular: "Este evento foi realizado por um agente do Vimeo em seu nome."
          },
          "zh-CN": {
            singular: "该事件已由 Vimeo 代理代表您完成。"
          }
        }
      }),
      SearchByUser: (0, _v30.translate)({
        singular: "Search by user",
        dictionary: {
          es: {
            singular: "Buscar por usuario"
          },
          "de-DE": {
            singular: "Nach Benutzer suchen"
          },
          "fr-FR": {
            singular: "Rechercher par utilisateur"
          },
          "ja-JP": {
            singular: "ユーザーで検索"
          },
          "ko-KR": {
            singular: "사용자별 검색"
          },
          "pt-BR": {
            singular: "Pesquisar por usuário"
          },
          "zh-CN": {
            singular: "按用户搜索"
          }
        }
      })
    },
    {
      startOfMonth: _v32
    } = _v28.BokehDate,
    _v33 = ({
      disabled: _v0,
      handleViewEventsClick: _v1,
      dateRange: _v2
    }) => {
      let _v3 = (0, _v3.useCallback)(({
          startDate: _v0,
          endDate: _v1
        }) => {
          _v0 && _v1 && _v1({
            startDate: _v0,
            endDate: _v1
          });
        }, [_v1]),
        _v4 = (0, _v3.useMemo)(() => {
          let _v0, _v1, _v2, _v3, _v4;
          return _v0 = new Date(), _v3 = (_v2 = _v32(_v1 = (0, _v8.jsDateToCalendarDate)(_v0))).subtract({
            days: 1
          }), _v4 = _v32(_v3), [{
            label: _v31.Today,
            value: "today"
          }, {
            label: _v31.Yesterday,
            value: "yesterday"
          }, {
            label: _v31.lastXDays(7),
            value: {
              division: "past",
              group: "days",
              count: 6
            }
          }, {
            label: _v31.lastXDays(30),
            value: {
              division: "past",
              group: "days",
              count: 30
            }
          }, {
            label: _v31.lastXDays(365),
            value: {
              division: "past",
              group: "days",
              count: 364
            }
          }, {
            label: _v31.CurrentMonth,
            range: [_v2, _v1]
          }, {
            label: _v31.LastMonth,
            range: [_v4, _v3]
          }];
        }, []),
        _v5 = new Date(),
        _v6 = new Date();
      return _v6.setFullYear(_v5.getFullYear() - 1), (0, _v1.jsx)(_v5.Flex, {
        gap: "100",
        justifyContent: "flex-end",
        children: (0, _v1.jsx)(_v29.RangePicker, {
          disabled: _v0,
          presets: _v4,
          placement: "bottom-start",
          onDateChange: _v3,
          maxDate: _v5,
          minDate: _v6,
          value: _v2,
          defaultButtonText: _v31.SelectDate
        })
      });
    };
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
    ownerId: _v0,
    orgUuid: _v1,
    workspaceUuid: _v2,
    onAuditLogsSettingLoaded: _v3,
    onTeamSettingLoading: _v4
  }) => {
    let [_v5, _v6] = (0, _v3.useState)(!1),
      [_v7, _v8] = (0, _v3.useState)(!1),
      _v9 = (0, _v35.useToast)(),
      {
        teamSettingsResult: _v10,
        teamSettingsLoading: _v11,
        teamSettingsError: _v12
      } = (0, _v42.useGetTeamSettings)({
        userId: _v0,
        orgUuid: _v1,
        workspaceUuid: _v2,
        settings: ["auditLogs"]
      }),
      {
        teamSettingsUpdateError: _v13,
        teamSettingsUpdateLoading: _v14,
        onUpdateSetting: _v15
      } = (0, _v40.useUpdateTeamSettings)({
        userId: _v0,
        orgUuid: _v1,
        workspaceUuid: _v2
      });
    (0, _v3.useEffect)(() => {
      _v10 && (_v6(_v10.auditLogs), _v3(_v10.auditLogs));
    }, [_v3, _v10]), (0, _v3.useEffect)(() => {
      (_v12 || _v13) && _v9({
        duration: _v27.NOTIFICATION_DURATION,
        title: (0, _v30.translate)({
          singular: "Something went wrong. Please try again.",
          dictionary: {
            es: {
              singular: "Algo salió mal. Inténtalo de nuevo."
            },
            "de-DE": {
              singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
            },
            "fr-FR": {
              singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
            },
            "ja-JP": {
              singular: "エラーが発生しました。 再度お試しください。"
            },
            "ko-KR": {
              singular: "문제가 발생했습니다. 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Alguma coisa deu errado. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "出错了。请重试。"
            }
          }
        })
      });
    }, [_v12, _v13, _v9]), (0, _v3.useEffect)(() => {
      _v4(_v14 || _v11);
    }, [_v14, _v11, _v4]);
    let _v16 = () => _v8(!1),
      _v17 = (0, _v3.useCallback)(() => {
        if (!_v14 && !_v13) {
          let _v0 = !_v5;
          _v15({
            auditLogs: _v0
          }), _v6(_v0), _v3(_v0);
        }
      }, [_v5, _v3, _v15, _v13, _v14]);
    return (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      paddingLeft: "75",
      overflow: "hidden",
      children: [(0, _v1.jsx)(_v34.Switch, {
        isDisabled: _v11 || _v14,
        onChange: _v5 ? () => _v8(!0) : _v17,
        isChecked: _v5,
        size: "md"
      }), (0, _v1.jsx)(_v39.Box, {
        paddingY: "50",
        children: (0, _v1.jsxs)(_v36.Modal, {
          size: "md",
          isOpen: _v7,
          onClose: () => void 0,
          children: [(0, _v1.jsx)(_v37.ModalOverlay, {}), (0, _v1.jsx)(_v38.ModalContent, {
            children: (0, _v1.jsx)(_v41.ConfirmModalContent, {
              closeModal: _v16,
              onConfirmed: () => {
                _v16(), _v17(), _v9({
                  duration: _v27.NOTIFICATION_DURATION,
                  title: _v31.ChangesSaved
                });
              },
              headerText: _v31.AreYouSure,
              contentText: _v31.AuditLogsDisableWarning.map((_v0, _v1) => (0, _v1.jsxs)("span", {
                children: [(0, _v1.jsx)("br", {}), _v0, (0, _v1.jsx)("br", {})]
              }, _v1)),
              confirmButtonVariant: "destructive"
            })
          })]
        })
      })]
    });
  };
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = ({
    orgUuid: _v0,
    disabled: _v1,
    workspacesUrisInitState: _v2,
    onWorkspaceFilterChange: _v3
  }) => {
    let {
        data: _v4,
        isLoading: _v5
      } = (0, _v51.useGetOrganizationWorkspacesInfinite)(() => _v0 ? {
        select: ["uri", "displayName", "icon"],
        where: {
          orgUuid: _v0
        }
      } : null),
      [_v6, _v7] = (0, _v3.useState)(_v2),
      [_v8, _v9] = (0, _v3.useState)(_v2.length),
      [_v10, _v11] = (0, _v3.useState)(_v2);
    _v10 !== _v2 && (_v11(_v2), _v7(_v2), _v9(_v2.length));
    let {
        popoverContainerRef: _v12,
        isOpen: _v13,
        onClose: _v14,
        onToggle: _v15
      } = (0, _v53.usePopoverOutsideClick)(),
      _v16 = (0, _v3.useMemo)(() => _v4?.flatMap(_v0 => _v0.data) ?? [], [_v4]);
    return (0, _v1.jsx)(_v39.Box, {
      ref: _v12,
      as: "div",
      children: (0, _v1.jsxs)(_v12.Popover, {
        isOpen: _v13,
        onClose: _v14,
        placement: "bottom-start",
        isLazy: !0,
        children: [(0, _v1.jsx)(_v14.PopoverTrigger, {
          children: (0, _v1.jsxs)(_v9.Button, {
            isDisabled: _v1 || _v5,
            isLoading: _v5,
            onClick: _v15,
            variant: "secondary",
            rightIcon: (0, _v1.jsx)(_v50.ChevronDownSmall, {}),
            fontWeight: "500",
            children: [_v31.Workspaces, " ", _v8 ? "(" + _v8 + ")" : ""]
          })
        }), (0, _v1.jsxs)(_v13.PopoverContent, {
          children: [(0, _v1.jsx)(_v48.PopoverBody, {
            children: (0, _v1.jsx)(_v44.CheckboxGroup, {
              value: _v6,
              onChange: _v0 => {
                _v7([..._v0]);
              },
              children: (0, _v1.jsx)(_v47.VStack, {
                align: "start",
                minW: (0, _v15.rem)(200),
                gap: "md",
                m: "sm",
                children: _v16.map(_v0 => (0, _v1.jsx)(_v10.Checkbox, {
                  size: "md",
                  id: _v0.uri,
                  value: _v0.uri,
                  children: (0, _v1.jsxs)(_v45.HStack, {
                    children: [(0, _v1.jsx)(_v52.WorkspaceLogo, {
                      borderRadius: "input-xs",
                      boxSize: "xs",
                      fallbackAvatarSize: "xs",
                      label: _v0.displayName,
                      logoUrl: _v0.icon?.sizes[0]?.link
                    }), (0, _v1.jsx)(_v46.Text, {
                      variant: "body-md",
                      children: _v0.displayName
                    })]
                  })
                }, _v0.uri))
              })
            })
          }), (0, _v1.jsx)(_v49.PopoverFooter, {
            children: (0, _v1.jsxs)(_v39.Box, {
              display: "flex",
              justifyContent: "end",
              width: "100%",
              gap: "sm",
              children: [(0, _v1.jsx)(_v9.Button, {
                isDisabled: 0 === _v6.length,
                variant: "secondary",
                size: "sm",
                onClick: () => {
                  _v6.length && (_v7([]), _v9(0), _v3([])), _v14();
                },
                children: _v31.ClearAll
              }), (0, _v1.jsx)(_v9.Button, {
                variant: "primary",
                size: "sm",
                onClick: () => {
                  _v9(_v6.length), _v3(_v6), _v14();
                },
                children: _v31.Apply
              })]
            })
          })]
        })]
      })
    });
  };
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  async function _v64({
    baseUrl: _v0,
    select: _v1,
    where: {
      orgUuid: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v62.measureLatency)("getOrganizationAuditLogs", "GET", async () => {
      let _v0 = await fetch(`${_v0}/organizations/${_v2}/audit_logs?${(0, _v63.searchQueryString)(_v3)}&fields=${_v1.map(_v63.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v63.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v63.deepCamelCase)(_v1);
    });
  }
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  function _v70() {
    let {
        mutate: _v0
      } = (0, _v66.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v69.useGctlConfig)(),
      [_v5, _v6] = (0, _v67.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/organizations/${_v0.where.orgUuid}/audit_logs${(0, _v67.serializeQuery)(_v0)}`, _v64({
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
  }
  async function _v71({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v62.measureLatency)("getTeamAuditLogs", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teams/${_v2}/audit_logs?${(0, _v63.searchQueryString)(_v3)}&fields=${_v1.map(_v63.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v63.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v63.deepCamelCase)(_v1);
    });
  }
  function _v72() {
    let {
        mutate: _v0
      } = (0, _v66.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v69.useGctlConfig)(),
      [_v5, _v6] = (0, _v67.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/teams/${_v0.where.userId}/audit_logs${(0, _v67.serializeQuery)(_v0)}`, _v71({
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
  }
  async function _v73({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v62.measureLatency)("getWorkspaceAuditLogs", "GET", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/audit_logs?${(0, _v63.searchQueryString)(_v3)}&fields=${_v1.map(_v63.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v63.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v63.deepCamelCase)(_v1);
    });
  }
  function _v74() {
    let {
        mutate: _v0
      } = (0, _v66.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v69.useGctlConfig)(),
      [_v5, _v6] = (0, _v67.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/audit_logs${(0, _v67.serializeQuery)(_v0)}`, _v73({
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
  }
  "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v69.useGctlConfig)();
    return (0, _v65.default)(_v2 ? `/organizations/${_v2.where.orgUuid}/audit_logs${(0, _v67.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v64({
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
    endpoint: "/organizations/:orgUuid/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(_v70, {
    endpoint: "/organizations/:orgUuid/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v69.useGctlConfig)();
    return (0, _v68.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/organizations/${_v2.where.orgUuid}/audit_logs?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v64({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/organizations/:orgUuid/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v69.useGctlConfig)();
    return (0, _v65.default)(_v2 ? `/teams/${_v2.where.userId}/audit_logs${(0, _v67.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v71({
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
    endpoint: "/teams/:userId/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(_v72, {
    endpoint: "/teams/:userId/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v69.useGctlConfig)();
    return (0, _v68.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/teams/${_v2.where.userId}/audit_logs?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v71({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/teams/:userId/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v69.useGctlConfig)();
    return (0, _v65.default)(_v2 ? `/workspaces/${_v2.where.workspaceUuid}/audit_logs${(0, _v67.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v73({
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
    endpoint: "/workspaces/:workspaceUuid/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(_v74, {
    endpoint: "/workspaces/:workspaceUuid/audit_logs",
    method: "GET"
  }), "true" === _v61.default.env.STORYBOOK && (0, _v67.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v69.useGctlConfig)();
    return (0, _v68.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/workspaces/${_v2.where.workspaceUuid}/audit_logs?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v73({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/workspaces/:workspaceUuid/audit_logs",
    method: "GET"
  });
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  let _v79 = _v0 => (0, _v1.jsx)(_v78.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      children: [(0, _v1.jsx)("path", {
        d: "M 0 9 C 0 4.03125 4.03125 0 9 0 L 15 0 C 19.96875 0 24 4.03125 24 9 L 24 15 C 24 19.96875 19.96875 24 15 24 L 9 24 C 4.03125 24 0 19.96875 0 15 Z M 0 9 ",
        fillRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        d: "M 12 4.5 C 14.648438 4.5 16.207031 5.445312 17.074219 6.800781 C 17.910156 8.113281 18 9.664062 18 10.636719 L 16.800781 10.636719 C 16.800781 9.722656 16.707031 8.546875 16.101562 7.601562 C 15.527344 6.699219 14.386719 5.863281 12 5.863281 C 9.613281 5.863281 8.472656 6.699219 7.898438 7.601562 C 7.292969 8.546875 7.199219 9.722656 7.199219 10.636719 L 6 10.636719 C 6 9.664062 6.089844 8.113281 6.925781 6.800781 C 7.792969 5.445312 9.351562 4.5 12 4.5 Z M 12 4.5 ",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M 16.800781 16.773438 C 16.800781 16.394531 17.070312 16.089844 17.398438 16.089844 C 17.730469 16.089844 18 16.394531 18 16.773438 C 18 18.277344 16.925781 19.5 15.601562 19.5 L 12 19.5 C 11.667969 19.5 11.398438 19.195312 11.398438 18.816406 C 11.398438 18.441406 11.667969 18.136719 12 18.136719 L 15.601562 18.136719 C 16.261719 18.136719 16.800781 17.527344 16.800781 16.773438 Z M 16.800781 16.773438 ",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M 13.800781 12.683594 C 13.800781 11.550781 14.605469 10.636719 15.601562 10.636719 L 18 10.636719 L 18 16.773438 L 15.601562 16.773438 C 14.605469 16.773438 13.800781 15.855469 13.800781 14.726562 Z M 13.800781 12.683594 ",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M 10.199219 14.726562 C 10.199219 15.855469 9.394531 16.773438 8.398438 16.773438 L 6.601562 16.773438 C 6.269531 16.773438 6 16.46875 6 16.089844 L 6 10.636719 L 8.398438 10.636719 C 9.394531 10.636719 10.199219 11.550781 10.199219 12.683594 Z M 10.199219 14.726562 ",
        fill: "currentColor"
      })]
    })
  });
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v80.TeamSettingsTableCell, {
      overflow: "hidden",
      children: (0, _v1.jsx)(_v81.ShrinkableText, {
        variant: "body-md",
        children: _v0
      })
    }),
    _v83 = {
      "&:empty:before": {
        content: '"\\200b"'
      }
    },
    _v84 = ({
      title: _v0,
      subtitle: _v1,
      byStaff: _v2,
      avaSrc: _v3,
      avaSrcSet: _v4
    }) => (0, _v1.jsx)(_v80.TeamSettingsTableCell, {
      overflow: "hidden",
      children: (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "row",
        overflow: "hidden",
        gap: (0, _v15.rem)(12),
        alignItems: "center",
        children: [(0, _v1.jsx)(_v5.Flex, {
          flexDirection: "column",
          overflow: "hidden",
          minWidth: (0, _v15.rem)(32),
          children: (0, _v1.jsx)(_v76.Avatar, {
            size: "sm",
            alt: _v0 || "-",
            src: _v3,
            srcSet: _v4,
            nameProps: {
              name: _v0 || "-"
            }
          })
        }), (0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          overflow: "hidden",
          children: [(0, _v1.jsxs)(_v39.Box, {
            display: "flex",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v81.ShrinkableText, {
              variant: "heading-xs",
              sx: _v83,
              children: _v0
            }), _v2 && (0, _v1.jsx)(_v77.Tooltip, {
              closeOnScroll: !0,
              placement: "top",
              label: _v31.AuditLogMadeByStaff,
              children: (0, _v1.jsx)(_v79, {
                marginLeft: (0, _v15.rem)(6),
                width: (0, _v15.rem)(18),
                color: "black",
                height: (0, _v15.rem)(18),
                bgColor: "fill-brand",
                rounded: 7
              })
            })]
          }), (0, _v1.jsx)(_v81.ShrinkableText, {
            variant: "body-md",
            color: "text-secondary",
            sx: _v83,
            children: _v1
          })]
        })]
      })
    }),
    _v85 = ({
      auditLog: _v0
    }) => {
      var _v1;
      let _v2,
        _v3,
        _v4 = new Date(_v0.createdTime).toLocaleDateString(),
        _v5 = _v0.actorUserEmail.length ? _v0.actorUserEmail : "-",
        _v6 = _v0.actorUserName ? _v0.actorUserName : "-",
        _v7 = _v0?.byStaff || !1,
        [_v8, _v9] = (_v1 = _v0?.actorUserPictures?.sizes, _v2 = _v1?.find(_v0 => 72 === _v0.width)?.link || _v1?.[1]?.link || "https://i.vimeocdn.com/portrait/default-blue_40x40", _v3 = _v1?.find(_v0 => 144 === _v0.width)?.link || _v1?.[2]?.link || "https://i.vimeocdn.com/portrait/default-blue_80x80", [_v2, `${_v3} 2x`]),
        _v10 = _v0?.objectLink;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v84, {
          title: _v6,
          subtitle: _v5,
          byStaff: _v7,
          avaSrc: _v8,
          avaSrcSet: _v9
        }), (0, _v1.jsx)(_v82, {
          children: _v0.eventNameTranslated
        }), (0, _v1.jsx)(_v82, {
          children: _v0?.privacyView || "-"
        }), (0, _v1.jsx)(_v82, {
          children: _v10 ? (0, _v1.jsx)(_v75.Link, {
            href: _v10,
            target: "_blank",
            children: _v0.title
          }) : _v0.title || "-"
        }), (0, _v1.jsx)(_v82, {
          children: _v4
        }), (0, _v1.jsx)(_v82, {
          children: _v0.actorLocation || "-"
        })]
      });
    },
    _v86 = [{
      title: _v31.User,
      width: "28%"
    }, {
      title: _v31.EventName,
      width: "18%"
    }, {
      title: _v31.Privacy,
      width: "10%"
    }, {
      title: _v31.AffectedObjects,
      width: "18%"
    }, {
      title: _v31.Date,
      width: "13%"
    }, {
      title: _v31.Location,
      width: "13%"
    }],
    _v87 = ({
      userId: _v0,
      orgUuid: _v1,
      workspaceUuid: _v2,
      toolBar: _v3,
      areAuditLogsEnabled: _v4,
      dateFrom: _v5,
      dateTo: _v6,
      workspaceUris: _v7,
      eventNameFilters: _v8,
      searchString: _v9,
      resetView: _v10
    }) => {
      let {
          loading: _v11,
          auditLogsList: _v12,
          listIsEmpty: _v13,
          shouldRenderPagination: _v14,
          pagination: _v15
        } = (({
          areAuditLogsEnabled: _v0,
          userId: _v1,
          orgUuid: _v2,
          workspaceUuid: _v3,
          dateTo: _v4,
          dateFrom: _v5,
          workspaceUris: _v6,
          eventNameFilters: _v7,
          searchString: _v8
        }) => {
          let [_v9, _v10] = _v72(),
            [_v11, _v12] = _v70(),
            [_v13, _v14] = _v74(),
            [_v15, _v16] = (0, _v3.useState)(1),
            [_v17, _v18] = (0, _v3.useState)(),
            _v19 = _v2 ? _v12?.data : _v3 ? _v14?.data : _v10?.data,
            _v20 = _v2 ? _v12.loading : _v10.loading;
          (0, _v3.useEffect)(() => {
            let _v0 = _v19?.data;
            _v0?.length && _v18(_v0);
          }, [_v19?.data]), (0, _v3.useEffect)(() => {
            _v16(1);
          }, [_v4, _v5, _v6, _v7, _v8?.length]);
          let _v21 = (0, _v3.useCallback)(() => {
            if (_v0 && (_v1 || _v2 || _v3 || _v7.length || _v8?.length) && _v5 && _v4) {
              let _v0 = ["actorUserName", "actorUserEmail", "actorUserPictures.sizes", "eventNameTranslated", "title", "privacyView", "createdTime", "actorLocation", "uri", "byStaff", "objectLink"],
                _v1 = {
                  page: _v15,
                  perPage: 25,
                  dateFrom: _v5,
                  dateTo: _v4,
                  eventName: _v7.join(","),
                  search: _v8
                };
              _v2 ? (_v1.workspaceUris = _v6, _v11({
                select: _v0,
                query: _v1,
                where: {
                  orgUuid: _v2
                }
              })) : _v1 ? _v9({
                select: _v0,
                query: _v1,
                where: {
                  userId: _v1
                }
              }) : _v3 && _v13({
                select: _v0,
                query: _v1,
                where: {
                  workspaceUuid: _v3
                }
              });
            }
          }, [_v11, _v9, _v13, _v1, _v2, _v3, _v6, _v7, _v8, _v15, _v5, _v4, _v0]);
          (0, _v3.useEffect)(_v21, [_v21]);
          let _v22 = _v19 ? Math.ceil(_v19.total / 25) : 0,
            _v23 = _v19?.data,
            _v24 = _v19?.page || 0,
            _v25 = _v23?.length || 0,
            _v26 = _v23 && 0 === _v23.length;
          return {
            loading: _v20,
            auditLogsList: _v17,
            setAuditLogsList: _v18,
            setCurrentPage: _v16,
            listIsEmpty: _v26,
            shouldRenderPagination: !_v26 && _v25 >= 25 || _v24 > 1,
            pagination: {
              totalPages: _v22,
              page: _v19?.page || 0,
              next: _v19?.paging?.next || "",
              previous: _v19?.paging?.previous || "",
              goToPageNumber: _v16
            }
          };
        })({
          areAuditLogsEnabled: _v4,
          userId: _v0,
          orgUuid: _v1,
          workspaceUuid: _v2,
          dateFrom: _v5,
          dateTo: _v6,
          workspaceUris: _v7,
          eventNameFilters: _v8,
          searchString: _v9
        }),
        _v16 = _v4 ? _v13 ? (0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          alignItems: "center",
          width: (0, _v15.rem)(300),
          justifyContent: "center",
          children: [(0, _v1.jsx)(_v58.FileSearchAlt, {
            height: (0, _v15.rem)(60),
            width: (0, _v15.rem)(60),
            marginBottom: (0, _v15.rem)(10)
          }), (0, _v1.jsx)(_v56.Header, {
            justifyContent: "center",
            size: "lg",
            marginBottom: (0, _v15.rem)(10),
            children: _v31.NoEntries
          }), (0, _v1.jsx)(_v57.Paragraph, {
            marginBottom: (0, _v15.rem)(20),
            align: "center",
            children: _v31.TrySearchDifferent
          }), _v10 && (0, _v1.jsx)(_v9.Button, {
            onClick: () => _v10(),
            children: _v31.ResetView
          })]
        }) : null : (0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v56.Header, {
            size: "lg",
            children: _v31.NotLogging
          }), (0, _v1.jsx)(_v57.Paragraph, {
            children: _v31.ToEnableAuditLogs
          })]
        });
      return (0, _v1.jsx)(_v39.Box, {
        marginBottom: "500",
        children: (0, _v1.jsx)(_v59.TeamSettingsTable, {
          columns: _v86,
          ...(_v14 ? {
            pagination: _v15
          } : {}),
          rows: _v12,
          renderRow: ({
            row: _v0
          }) => (0, _v1.jsx)(_v85, {
            auditLog: _v0
          }, _v0.uri),
          toolBar: _v3,
          placeholder: _v11 ? (0, _v1.jsx)(_v60.LoadSpinner, {}) : _v16,
          tableStyle: {
            "& tr td": {
              borderBottom: "none"
            },
            "& tr th": {
              borderBottom: "none",
              backgroundColor: "fill-blur"
            },
            "& tr th:first-child": {
              borderRadius: `${(0, _v15.rem)(12)} 0 0 ${(0, _v15.rem)(12)}`
            },
            "& tr th:last-child": {
              borderRadius: `0 ${(0, _v15.rem)(12)} ${(0, _v15.rem)(12)} 0`
            }
          }
        })
      });
    },
    _v88 = (0, _v2.default)((_v0, _v1) => _v1(_v0), 0);
  _v0.s(["default", 0, ({
    ownerId: _v0,
    orgUuid: _v1,
    workspaceUuid: _v2
  }) => {
    if ([_v0, _v1, _v2].filter(_v0 => void 0 !== _v0).length > 1) throw Error("Page can be available only for ownerId or orgUuid, not both at a time");
    let [_v3, _v4] = (0, _v3.useState)(!0),
      [_v5, _v6] = (0, _v3.useState)(!0),
      [_v7, _v8] = (0, _v3.useState)({
        startDate: (0, _v8.getDateMinusCurrent)(30),
        endDate: new Date()
      }),
      [_v9, _v10] = (0, _v3.useState)([]),
      [_v11, _v12] = (0, _v3.useState)(_v27.EVENT_NAMES_FILTER_LIST.sort((_v0, _v1) => _v0.label.localeCompare(_v1.label))),
      [_v13, _v14] = (0, _v3.useState)(""),
      _v15 = !_v5 || _v3,
      _v16 = (0, _v3.useCallback)(_v0 => {
        _v6(_v0);
      }, []),
      _v17 = (0, _v3.useCallback)(_v0 => {
        _v4(_v0);
      }, []),
      _v18 = _v11.filter(_v0 => _v0.applied),
      _v19 = (0, _v8.formatDateForAuditLogExport)(_v7.startDate),
      _v20 = (0, _v8.formatDateForAuditLogExport)(_v7.endDate),
      _v21 = ((_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
        let _v8 = (0, _v55.useViewer)(),
          _v9 = _v8?.apiUrl,
          _v10 = _v8?.jwt,
          _v11 = encodeURIComponent(_v7 ?? "");
        if (_v3) return `//${_v9}/teams/${_v3}/audit_logs/export?date_from=${_v0}&date_to=${_v1}&search=${_v11}&jwt_token=${_v10}&filter=csv&event_name=${_v6?.join(",")}`;
        if (_v4) {
          let _v0 = _v2.length ? _v2.join(",") : "";
          return `//${_v9}/organizations/${_v4}/audit_logs/export?date_from=${_v0}&date_to=${_v1}&search=${_v11}&jwt_token=${_v10}&filter=csv&workspace_uris=${_v0}&event_name=${_v6?.join(",")}`;
        }
        if (_v5) return `//${_v9}/workspaces/${_v5}/audit_logs/export?date_from=${_v0}&date_to=${_v1}&search=${_v11}&jwt_token=${_v10}&filter=csv&event_name=${_v6?.join(",")}`;
        throw Error("Cannot determine export URL.");
      })(_v19, _v20, _v9, _v0, _v1, _v2, _v11.filter(_v0 => _v0.applied).map(_v0 => _v0.value), _v13),
      _v22 = () => {
        _v12(_v27.EVENT_NAMES_FILTER_LIST);
      };
    return (0, _v3.useEffect)(() => {
      _v88.cancel(), _v88(_v13, _v14);
    }, [_v13]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.SettingsPageContentHeader, {
        title: (0, _v1.jsxs)(_v5.Flex, {
          justify: "space-between",
          align: "center",
          children: [_v31.AuditLogs, (0, _v1.jsx)(_v43, {
            onAuditLogsSettingLoaded: _v16,
            onTeamSettingLoading: _v17,
            ownerId: _v0,
            orgUuid: _v1,
            workspaceUuid: _v2
          })]
        }),
        description: _v31.AuditLogsPageDescription
      }), (0, _v1.jsx)(_v87, {
        toolBar: (0, _v1.jsxs)(_v5.Flex, {
          justify: "space-between",
          align: "center",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            justify: "right",
            align: "center",
            gap: 10,
            children: [(0, _v1.jsx)(_v26, {
              disabled: _v15,
              appliedFilters: _v11,
              onFiltersApplied: _v0 => {
                _v11.some((_v0, _v1) => _v0.applied !== _v0[_v1].applied) && _v12(_v0);
              },
              onClearFilters: _v22
            }), _v1 && (0, _v1.jsx)(_v54, {
              orgUuid: _v1,
              disabled: _v15,
              workspacesUrisInitState: _v9,
              onWorkspaceFilterChange: _v0 => _v10(_v0)
            }), (0, _v1.jsx)(_v33, {
              handleViewEventsClick: _v8,
              disabled: _v15,
              dateRange: _v7
            })]
          }), (0, _v1.jsxs)(_v5.Flex, {
            justify: "left",
            align: "center",
            gap: 10,
            children: [(0, _v1.jsx)(_v25, {
              disabled: _v15,
              searchString: _v13,
              onSearchChange: _v0 => _v88(_v0, _v14),
              onSearchClear: () => {
                _v88.cancel(), _v14("");
              },
              placeholder: _v31.SearchByUser
            }), (0, _v1.jsx)(_v6.ExportCsvButton, {
              onClick: () => {
                _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 107, {
                  copy: _v31.ExportToCsv,
                  feature: "export_csv",
                  location: "audit_logs",
                  name: "audit_logs_export_csv_click",
                  page: "audit_logs_export",
                  target: null,
                  target_path: _v21,
                  path: window.location.pathname,
                  type: "general",
                  click_type: null,
                  device_type: null,
                  third_party_integration: null
                }));
              },
              disabled: _v15 || !_v21,
              uri: _v15 ? "javascript:void(0);" : _v21,
              variant: "primary"
            })]
          })]
        }),
        userId: _v0,
        orgUuid: _v1,
        workspaceUuid: _v2,
        areAuditLogsEnabled: _v5,
        dateFrom: _v19,
        dateTo: _v20,
        workspaceUris: _v9,
        eventNameFilters: _v18.map(_v0 => _v0.value),
        searchString: _v13,
        resetView: () => {
          _v22(), _v14(""), _v10([]), _v8({
            startDate: (0, _v8.getDateMinusCurrent)(30),
            endDate: new Date()
          });
        }
      })]
    });
  }], 0);
}