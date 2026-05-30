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
    _v15 = _v0.i(0);
  _v0.s(["ContentViewingPrefsForm", 0, function ({
    filters: _v0,
    customFilters: _v1,
    token: _v2,
    selected: _v3,
    onClose: _v4
  }) {
    let _v5 = (0, _v13.useToast)(),
      _v6 = Object.values(_v1).reduce((_v0, _v1) => ((_v1.rating & _v3) == 0 && _v0.add(_v1.rating.toString()), _v0), new Set()),
      _v7 = _v3 !== _v0.everything.rating && _v3 !== _v0.safest.rating ? "" : _v3.toString(),
      [_v8, _v9] = (0, _v2.useState)(_v7),
      [_v10, _v11] = (0, _v2.useState)(_v6),
      [_v12, _v13] = (0, _v2.useState)(!1),
      _v14 = Object.keys(_v0),
      _v15 = Object.keys(_v1),
      _v16 = _v8 !== _v0.everything.rating.toString() && _v8 !== _v0.safest.rating.toString();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v10.ModalBody, {
        children: (0, _v1.jsxs)(_v7.Stack, {
          spacing: (0, _v14.rem)(10),
          children: [(0, _v1.jsxs)(_v3.Paragraph, {
            size: "md",
            children: [(0, _v15.translate)({
              singular: "Choose what types of videos you do and do not want to see on Vimeo.",
              dictionary: {
                es: {
                  singular: "Elija qué tipo de videos quiere o no quiere ver en Vimeo."
                },
                "de-DE": {
                  singular: "Suche dir aus, was für Videos du bei Vimeo sehen oder nicht sehen möchtest."
                },
                "fr-FR": {
                  singular: "Choisissez le type de vidéos que vous souhaitez voir ou pas sur Vimeo. "
                },
                "ja-JP": {
                  singular: "Vimeo上でどういう種類の動画が見たいか選択してください。"
                },
                "ko-KR": {
                  singular: "Vimeo에서 보고 싶거나 보고 싶지 않은 내용을 선택하세요."
                },
                "pt-BR": {
                  singular: "Escolha quais são os tipos de vídeos que você quer ou não ver no Vimeo."
                },
                "zh-CN": {
                  singular: "选择您希望或不希望在 Vimeo 上看到的视频类型。"
                }
              }
            }), " ", (0, _v15.translate)({
              singular: "Learn more about what constitutes mature content in our {A}FAQ{/A}.",
              replacements: {
                A: _v0 => (0, _v1.jsx)(_v4.Link, {
                  variant: "inline-primary",
                  href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426157083537-Content-ratings",
                  isExternal: !0,
                  fontSize: "md",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Obtenga más información sobre qué hace parte del contenido para adultos en nuestras {A}preguntas frecuentes{/A}. "
                },
                "de-DE": {
                  singular: "In unserem {A}FAQ-Bereich{/A} kannst du mehr über Inhalte erfahren, die nicht für Minderjährige geeignet sind."
                },
                "fr-FR": {
                  singular: "Pour en savoir plus sur ce qui constitue un contenu pour adultes, consultez notre {A}FAQ{/A}."
                },
                "ja-JP": {
                  singular: "成人向けコンテンツについては{A}よくある質問{/A}をご覧ください。"
                },
                "ko-KR": {
                  singular: "어떠한 내용이 성인 콘텐츠에 해당하는지 {A}FAQ{/A}에서 자세히 알아보세요."
                },
                "pt-BR": {
                  singular: "Saiba mais sobre o que é conteúdo adulto nas nossas {A}Perguntas Frequentes{/A}."
                },
                "zh-CN": {
                  singular: "请参阅我们的{A}常见问题解答{/A}，详细了解哪些内容会构成成人内容。"
                }
              }
            })]
          }), (0, _v1.jsx)(_v5.RadioGroup, {
            onChange: _v0 => {
              let _v1;
              _v9(_v0), _v1 = Object.values(_v1).map(_v0 => _v0.rating.toString()), _v0 || _v11(new Set(_v1));
            },
            value: _v8,
            children: (0, _v1.jsx)(_v7.Stack, {
              children: _v14.map(_v0 => {
                let _v1 = _v0[_v0];
                return (0, _v1.jsx)(_v6.Radio, {
                  value: _v1.rating.toString(),
                  children: _v1.name
                }, _v1.name);
              })
            })
          }), _v16 && (0, _v1.jsx)(_v8.CheckboxGroup, {
            children: (0, _v1.jsx)(_v7.Stack, {
              paddingLeft: "md",
              children: _v15.map(_v0 => {
                let _v1 = _v1[_v0];
                return (0, _v1.jsx)(_v9.Checkbox, {
                  id: _v1.rating.toString(),
                  isChecked: _v10.has(_v1.rating.toString()),
                  onChange: _v0 => {
                    if (_v0.target.checked) {
                      let _v0 = new Set(_v10);
                      _v0.add(_v1.rating.toString()), _v11(_v0);
                    } else {
                      let _v0 = new Set(_v10);
                      _v0.delete(_v1.rating.toString()), _v11(_v0);
                    }
                  },
                  children: _v1.name
                }, `${_v0}-${_v1.rating}`);
              })
            })
          })]
        })
      }), (0, _v1.jsx)(_v11.ModalFooter, {
        children: (0, _v1.jsx)(_v12.Button, {
          variant: "primary",
          onClick: () => {
            _v13(!0);
            let _v0 = {
              token: _v2
            };
            _v16 ? _v0.content_ratings = Array.from(_v10).map(_v0 => parseInt(_v0)) : _v0.content_rating = parseInt(_v8), fetch("/settings", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
              },
              body: Object.keys(_v0).reduce((_v0, _v1) => {
                let _v2 = _v0[_v1];
                return Array.isArray(_v2) ? [..._v0, ..._v2.map((_v0, _v1) => {
                  let _v2 = `${_v1}[${_v1}]`;
                  return `${encodeURIComponent(_v2)}=${encodeURIComponent(String(_v0))}`;
                })] : (_v0.push(`${encodeURIComponent(_v1)}=${encodeURIComponent(String(_v2))}`), _v0);
              }, []).join("&")
            }).then(_v0 => {
              _v13(!1), _v0.ok ? (_v5({
                title: (0, _v15.translate)({
                  singular: "Your preferences were successfully updated.",
                  dictionary: {
                    es: {
                      singular: "Sus preferencias se actualizaron correctamente."
                    },
                    "de-DE": {
                      singular: "Ihre Einstellungen wurden erfolgreich aktualisiert."
                    },
                    "fr-FR": {
                      singular: "Vos préférences ont été mises à jour."
                    },
                    "ja-JP": {
                      singular: "設定が正常に更新されました。"
                    },
                    "ko-KR": {
                      singular: "기본 설정이 성공적으로 업데이트되었습니다."
                    },
                    "pt-BR": {
                      singular: "Suas preferências foram atualizadas com sucesso."
                    },
                    "zh-CN": {
                      singular: "您的偏好设置已成功更新。"
                    }
                  }
                }),
                status: "success"
              }), _v4(), window.location.reload()) : _v5({
                title: (0, _v15.translate)({
                  singular: "Sorry, something went wrong. Please try again.",
                  dictionary: {
                    es: {
                      singular: "Lo sentimos, algo salió mal. Inténtelo de nuevo."
                    },
                    "de-DE": {
                      singular: "Es tut uns leid. Hier ist etwas schiefgelaufen. Bitte versuche es erneut."
                    },
                    "fr-FR": {
                      singular: "Une erreur s'est produite. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "申し訳ありません、エラーが発生しました。 再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "죄송합니다, 문제가 발생했습니다. 다시 시도해 주세요."
                    },
                    "pt-BR": {
                      singular: "Desculpe, algo deu errado. Tente novamente."
                    },
                    "zh-CN": {
                      singular: "抱歉，出错了。请重试。"
                    }
                  }
                }),
                status: "error"
              });
            });
          },
          isLoading: _v12,
          children: (0, _v15.translate)({
            singular: "Apply changes",
            dictionary: {
              es: {
                singular: "Aplicar cambios"
              },
              "de-DE": {
                singular: "Änderungen speichern"
              },
              "fr-FR": {
                singular: "Enregistrer les modifications"
              },
              "ja-JP": {
                singular: "変更を適用"
              },
              "ko-KR": {
                singular: "변경 내용 적용"
              },
              "pt-BR": {
                singular: "Aplicar alterações"
              },
              "zh-CN": {
                singular: "应用更改"
              }
            }
          })
        })
      })]
    });
  }]);
}