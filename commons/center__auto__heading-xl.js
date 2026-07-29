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
  function _v19({
    isOpen: _v0,
    onClose: _v1,
    onAddClientAccount: _v2
  }) {
    return (0, _v1.jsxs)(_v7.Modal, {
      isCentered: !0,
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        borderRadius: (0, _v13.rem)(24),
        maxW: (0, _v13.rem)(560),
        pt: (0, _v13.rem)(16),
        children: [(0, _v1.jsx)(_v9.ModalCloseButton, {
          right: (0, _v13.rem)(20),
          top: (0, _v13.rem)(20)
        }), (0, _v1.jsx)(_v8.ModalBody, {
          px: (0, _v13.rem)(24),
          py: 0,
          children: (0, _v1.jsxs)(_v15.VStack, {
            align: "center",
            spacing: (0, _v13.rem)(40),
            py: (0, _v13.rem)(24),
            mx: "auto",
            w: (0, _v13.rem)(490),
            maxW: "100%",
            children: [(0, _v1.jsxs)(_v15.VStack, {
              align: "center",
              spacing: (0, _v13.rem)(16),
              w: "100%",
              children: [(0, _v1.jsx)(_v14.Text, {
                as: "h2",
                variant: "heading-xl",
                color: "text-primary",
                textAlign: "center",
                w: "100%",
                children: (0, _v18.translate)({
                  singular: "Add client accounts",
                  dictionary: {
                    es: {
                      singular: "Añadir cuentas de clientes"
                    },
                    "de-DE": {
                      singular: "Kundenkonten hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter des comptes clients"
                    },
                    "ja-JP": {
                      singular: "クライアントアカウントを追加"
                    },
                    "ko-KR": {
                      singular: "클라이언트 계정 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar contas de clientes"
                    },
                    "zh-CN": {
                      singular: "添加客户帐户"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "heading-sm",
                color: "text-secondary",
                textAlign: "center",
                w: "100%",
                children: (0, _v18.translate)({
                  singular: "Add a client account to access their content, embeds, and analytics without ever logging out.",
                  dictionary: {
                    es: {
                      singular: "Añade una cuenta de cliente para acceder a su contenido, incrustaciones y analíticas sin cerrar nunca sesión."
                    },
                    "de-DE": {
                      singular: "Fügen Sie ein Kundenkonto hinzu, um auf deren Inhalte, Einbettungen und Analysen zuzugreifen, ohne sich jemals abmelden zu müssen."
                    },
                    "fr-FR": {
                      singular: "Ajoutez un compte client pour accéder à leur contenu, leurs lecteurs intégrés et leurs analyses sans jamais vous déconnecter."
                    },
                    "ja-JP": {
                      singular: "クライアントのアカウントを追加すると、ログアウトすることなくそのコンテンツ、埋め込み、分析にアクセスできます。"
                    },
                    "ko-KR": {
                      singular: "클라이언트 계정을 추가하면 로그아웃하지 않고도 해당 계정의 콘텐츠, 임베드 및 분석에 접근할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Adicione a conta de um cliente para acessar o conteúdo, as incorporações e as análises dele sem precisar sair da sua conta."
                    },
                    "zh-CN": {
                      singular: "添加客户帐户以在不退出登录的情况下访问他们的内容、嵌入和分析。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v6.Flex, {
              aspectRatio: 16 / 9,
              borderRadius: (0, _v13.rem)(20),
              overflow: "hidden",
              w: "100%",
              children: (0, _v1.jsx)(_v17.EmbedPlayer, {
                title: (0, _v18.translate)({
                  singular: "Add client accounts",
                  dictionary: {
                    es: {
                      singular: "Añadir cuentas de clientes"
                    },
                    "de-DE": {
                      singular: "Kundenkonten hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter des comptes clients"
                    },
                    "ja-JP": {
                      singular: "クライアントアカウントを追加"
                    },
                    "ko-KR": {
                      singular: "클라이언트 계정 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar contas de clientes"
                    },
                    "zh-CN": {
                      singular: "添加客户帐户"
                    }
                  }
                }),
                src: "https://player.vimeo.com/video/1201236397?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
                style: {
                  width: "100%",
                  height: "100%"
                }
              })
            })]
          })
        }), (0, _v1.jsx)(_v11.ModalFooter, {
          justifyContent: "center",
          px: (0, _v13.rem)(24),
          pt: (0, _v13.rem)(20),
          pb: (0, _v13.rem)(32),
          children: (0, _v1.jsx)(_v5.Button, {
            leftIcon: (0, _v1.jsx)(_v16.PlusSmall, {}),
            onClick: _v2,
            size: "lg",
            variant: "primary",
            width: (0, _v13.rem)(433),
            maxW: "100%",
            children: (0, _v18.translate)({
              singular: "Add client account",
              dictionary: {
                es: {
                  singular: "Agregar cuenta de cliente"
                },
                "de-DE": {
                  singular: "Kundenkonto hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter un compte client"
                },
                "ja-JP": {
                  singular: "クライアントアカウントを追加"
                },
                "ko-KR": {
                  singular: "클라이언트 계정 추가"
                },
                "pt-BR": {
                  singular: "Adicionar conta do cliente"
                },
                "zh-CN": {
                  singular: "添加客户账户"
                }
              }
            })
          })
        })]
      })]
    });
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = _v0 => (0, _v1.jsx)(_v31.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M16 20H8a3 3 0 0 1-3-3V7a1 1 0 0 0-2 0v10a5 5 0 0 0 5 5h8a1 1 0 0 0 0-2Zm5-11.06a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19h-.09L14.06 2H10a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8.94Zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1V5.41ZM19 15a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3v5Z",
      fill: "currentColor"
    })
  });
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  function _v36() {
    let {
      baseUrl: _v0,
      jwt: _v1
    } = (0, _v35.useGctlConfig)();
    return {
      sendInvite: (0, _v2.useCallback)(async _v0 => {
        let _v1 = await fetch(`${_v0 ?? ""}/users/managed_accounts/invite`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : ""
          },
          body: JSON.stringify({
            email: _v0
          })
        });
        if (!_v1.ok) throw Error(`Managed-accounts invite send failed with status ${_v1.status}.`);
      }, [_v0, _v1])
    };
  }
  _v0.s(["useSendManagedInvite", 0, _v36], 0);
  let _v37 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function _v38({
    isOpen: _v0,
    onClose: _v1,
    onInvited: _v2
  }) {
    let _v3 = (0, _v4.useViewer)(),
      _v4 = (0, _v30.useToast)(),
      {
        sendInvite: _v5
      } = _v36(),
      {
        trackInviteEmailSent: _v6,
        trackInviteLinkCopied: _v7
      } = (0, _v3.useManagedAccountsTracking)(),
      [_v8, _v9] = (0, _v2.useState)(""),
      [_v10, _v11] = (0, _v2.useState)(!1),
      _v12 = _v37.test(_v8.trim()),
      _v13 = (0, _v2.useMemo)(() => {
        let _v0 = _v3?.user?.id;
        return void 0 === _v0 ? "" : `${window.location.origin}${(0, _v34.getManagedAccountsAcceptPath)(_v0)}?s=link`;
      }, [_v3?.user?.id]),
      _v14 = (0, _v2.useCallback)(async () => {
        if (_v12 && !_v10) {
          _v11(!0);
          try {
            await _v5(_v8.trim()), _v9(""), _v2(), _v6(), _v4({
              status: "success",
              title: (0, _v18.translate)({
                singular: "Invite sent",
                dictionary: {
                  es: {
                    singular: "Invitación enviada"
                  },
                  "de-DE": {
                    singular: "Einladung wurde abgeschickt"
                  },
                  "fr-FR": {
                    singular: "Invitation envoyée"
                  },
                  "ja-JP": {
                    singular: "招待を送信しました"
                  },
                  "ko-KR": {
                    singular: "초대장 전송 완료"
                  },
                  "pt-BR": {
                    singular: "Convite enviado!"
                  },
                  "zh-CN": {
                    singular: "邀请已发送"
                  }
                }
              })
            });
          } catch {
            _v4({
              status: "error",
              title: (0, _v18.translate)({
                singular: "Couldn't send invite, try again",
                dictionary: {
                  es: {
                    singular: "No se pudo enviar la invitación. Inténtalo de nuevo"
                  },
                  "de-DE": {
                    singular: "Einladung konnte nicht gesendet werden. Versuchen Sie es erneut."
                  },
                  "fr-FR": {
                    singular: "Impossible d'envoyer l'invitation, réessayez"
                  },
                  "ja-JP": {
                    singular: "招待を送信できませんでした。もう一度お試しください。"
                  },
                  "ko-KR": {
                    singular: "초대 전송에 실패했습니다. 다시 시도하세요."
                  },
                  "pt-BR": {
                    singular: "Não foi possível enviar o convite, tente novamente"
                  },
                  "zh-CN": {
                    singular: "邀请发送失败，请重试"
                  }
                }
              })
            });
          } finally {
            _v11(!1);
          }
        }
      }, [_v12, _v10, _v5, _v8, _v2, _v4, _v6]),
      _v15 = (0, _v2.useCallback)(async () => {
        if (!_v13) return;
        let _v0 = !1;
        try {
          navigator.clipboard?.writeText && (await navigator.clipboard.writeText(_v13), _v0 = !0);
        } catch {
          _v0 = !1;
        }
        _v0 || (_v0 = (0, _v33.default)(_v13)), _v0 ? (_v2(), _v7(), _v4({
          status: "success",
          title: (0, _v18.translate)({
            singular: "Link copied",
            dictionary: {
              es: {
                singular: "Vínculo copiado"
              },
              "de-DE": {
                singular: "Link kopiert"
              },
              "fr-FR": {
                singular: "Lien copié"
              },
              "ja-JP": {
                singular: "リンクがコピーされました"
              },
              "ko-KR": {
                singular: "링크가 복사됐습니다"
              },
              "pt-BR": {
                singular: "Link copiado"
              },
              "zh-CN": {
                singular: "链接已复制"
              }
            }
          })
        })) : _v4({
          status: "warning",
          title: (0, _v18.translate)({
            singular: "Link failed to copy",
            dictionary: {
              es: {
                singular: "No se pudo copiar el enlace"
              },
              "de-DE": {
                singular: "Link wurde nicht kopiert"
              },
              "fr-FR": {
                singular: "Impossible de copier le lien"
              },
              "ja-JP": {
                singular: "リンクをコピーできませんでした"
              },
              "ko-KR": {
                singular: "링크 복사를 실패했습니다"
              },
              "pt-BR": {
                singular: "Falha ao copiar o link"
              },
              "zh-CN": {
                singular: "链接复制失败"
              }
            }
          })
        });
      }, [_v13, _v2, _v4, _v7]);
    return (0, _v1.jsxs)(_v7.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        maxW: (0, _v13.rem)(500),
        borderRadius: "xl",
        children: [(0, _v1.jsxs)(_v29.ModalHeader, {
          display: "flex",
          alignItems: "flex-start",
          gap: (0, _v13.rem)(10),
          pt: (0, _v13.rem)(24),
          pb: "sm",
          pl: (0, _v13.rem)(24),
          pr: (0, _v13.rem)(28),
          m: 0,
          children: [(0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: (0, _v13.rem)(4),
            flex: "1 0 0",
            minW: 0,
            justify: "center",
            children: [(0, _v1.jsx)(_v23.Box, {
              children: (0, _v1.jsx)(_v22.Badge, {
                size: "sm",
                variant: "new",
                children: (0, _v18.translate)({
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
            }), (0, _v1.jsx)(_v25.Header, {
              as: "h2",
              size: "md",
              m: 0,
              children: (0, _v18.translate)({
                singular: "Send your invite",
                dictionary: {
                  es: {
                    singular: "Envía tu invitación"
                  },
                  "de-DE": {
                    singular: "Senden Sie Ihre Einladung"
                  },
                  "fr-FR": {
                    singular: "Envoyez votre invitation"
                  },
                  "ja-JP": {
                    singular: "招待を送信"
                  },
                  "ko-KR": {
                    singular: "초대를 보내세요"
                  },
                  "pt-BR": {
                    singular: "Enviar seu convite"
                  },
                  "zh-CN": {
                    singular: "发送您的邀请"
                  }
                }
              })
            }), (0, _v1.jsx)(_v14.Text, {
              variant: "body-md",
              color: "text-primary",
              children: (0, _v18.translate)({
                singular: "Share the invite with your client so they can accept and appear in your account menu.",
                dictionary: {
                  es: {
                    singular: "Comparte la invitación con tu cliente para que pueda aceptarla y aparecer en el menú de tu cuenta."
                  },
                  "de-DE": {
                    singular: "Teilen Sie die Einladung mit Ihrem Kunden, damit Ihr Kunde die Einladung annehmen kann und im Menü Ihres Kontos erscheint."
                  },
                  "fr-FR": {
                    singular: "Partagez l'invitation avec votre client afin qu'il puisse l'accepter et qu'il apparaisse dans le menu de votre compte."
                  },
                  "ja-JP": {
                    singular: "招待をクライアントと共有し、クライアントが承諾するとアカウントメニューに表示されます。"
                  },
                  "ko-KR": {
                    singular: "클라이언트에게 초대를 공유하면 수락 후 귀하의 계정 메뉴에 해당 클라이언트가 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "Compartilhe o convite com seu cliente para que ele possa aceitar e aparecer no menu da sua conta."
                  },
                  "zh-CN": {
                    singular: "将邀请分享给客户，以便他们接受并出现在您的帐户菜单中。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v9.ModalCloseButton, {
            position: "static",
            borderRadius: (0, _v13.rem)(6),
            boxSize: (0, _v13.rem)(32)
          })]
        }), (0, _v1.jsx)(_v8.ModalBody, {
          px: (0, _v13.rem)(24),
          py: (0, _v13.rem)(20),
          m: 0,
          children: (0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "2xl",
            width: "100%",
            children: [(0, _v1.jsxs)(_v6.Flex, {
              direction: "column",
              gap: (0, _v13.rem)(20),
              width: "100%",
              children: [(0, _v1.jsxs)(_v23.Box, {
                width: "100%",
                children: [(0, _v1.jsx)(_v14.Text, {
                  as: "label",
                  htmlFor: "managed-invite-email",
                  display: "block",
                  variant: "heading-xs",
                  color: "text-primary",
                  mb: "sm",
                  children: (0, _v18.translate)({
                    singular: "Send invite by email",
                    dictionary: {
                      es: {
                        singular: "Enviar invitación por correo electrónico"
                      },
                      "de-DE": {
                        singular: "Einladung per E-Mail senden"
                      },
                      "fr-FR": {
                        singular: "Envoyer l'invitation par e-mail"
                      },
                      "ja-JP": {
                        singular: "メールで招待を送信"
                      },
                      "ko-KR": {
                        singular: "이메일로 초대 보내기"
                      },
                      "pt-BR": {
                        singular: "Enviar convite por e-mail"
                      },
                      "zh-CN": {
                        singular: "通过电子邮件发送邀请"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v27.InputGroup, {
                  children: [(0, _v1.jsx)(_v26.Input, {
                    id: "managed-invite-email",
                    size: "md",
                    type: "email",
                    placeholder: (0, _v18.translate)("name@company.com"),
                    value: _v8,
                    onChange: _v0 => _v9(_v0.target.value),
                    pr: (0, _v13.rem)(120)
                  }), (0, _v1.jsx)(_v28.InputRightElement, {
                    width: "auto",
                    pr: (0, _v13.rem)(6),
                    children: (0, _v1.jsx)(_v5.Button, {
                      size: "sm",
                      variant: "secondary",
                      isDisabled: !_v12 || _v10,
                      isLoading: _v10,
                      onClick: _v14,
                      children: (0, _v18.translate)({
                        singular: "Send invite",
                        dictionary: {
                          es: {
                            singular: "Enviar la invitación"
                          },
                          "de-DE": {
                            singular: "Einladung versenden"
                          },
                          "fr-FR": {
                            singular: "Envoyer une invitation"
                          },
                          "ja-JP": {
                            singular: "招待状を送る"
                          },
                          "ko-KR": {
                            singular: "초대장 보내기"
                          },
                          "pt-BR": {
                            singular: "Enviar convite"
                          },
                          "zh-CN": {
                            singular: "发送邀请"
                          }
                        }
                      })
                    })
                  })]
                })]
              }), (0, _v1.jsxs)(_v6.Flex, {
                align: "center",
                justify: "center",
                gap: (0, _v13.rem)(20),
                width: "100%",
                children: [(0, _v1.jsx)(_v24.Divider, {
                  borderColor: "stroke"
                }), (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  whiteSpace: "nowrap",
                  children: (0, _v18.translate)({
                    singular: "OR",
                    dictionary: {
                      es: {
                        singular: "O"
                      },
                      "de-DE": {
                        singular: "ODER"
                      },
                      "fr-FR": {
                        singular: "OU"
                      },
                      "ja-JP": {
                        singular: "または"
                      },
                      "ko-KR": {
                        singular: "또는"
                      },
                      "pt-BR": {
                        singular: "OU"
                      },
                      "zh-CN": {
                        singular: "或"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v24.Divider, {
                  borderColor: "stroke"
                })]
              }), (0, _v1.jsxs)(_v23.Box, {
                width: "100%",
                children: [(0, _v1.jsx)(_v14.Text, {
                  as: "label",
                  htmlFor: "managed-invite-link",
                  display: "block",
                  variant: "heading-xs",
                  color: "text-primary",
                  mb: "sm",
                  children: (0, _v18.translate)({
                    singular: "Copy invitation link",
                    dictionary: {
                      es: {
                        singular: "Copiar enlace de invitación"
                      },
                      "de-DE": {
                        singular: "Einladungslink kopieren"
                      },
                      "fr-FR": {
                        singular: "Copier le lien d'invitation"
                      },
                      "ja-JP": {
                        singular: "招待リンクをコピー"
                      },
                      "ko-KR": {
                        singular: "초대 링크 복사"
                      },
                      "pt-BR": {
                        singular: "Copiar link de convite"
                      },
                      "zh-CN": {
                        singular: "复制邀请链接"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v27.InputGroup, {
                  children: [(0, _v1.jsx)(_v26.Input, {
                    id: "managed-invite-link",
                    size: "md",
                    readOnly: !0,
                    value: _v13,
                    pr: (0, _v13.rem)(120)
                  }), (0, _v1.jsx)(_v28.InputRightElement, {
                    width: "auto",
                    pr: (0, _v13.rem)(6),
                    children: (0, _v1.jsx)(_v5.Button, {
                      size: "sm",
                      variant: "secondary",
                      leftIcon: (0, _v1.jsx)(_v32, {
                        boxSize: "2xs"
                      }),
                      isDisabled: !_v13,
                      onClick: _v15,
                      children: (0, _v18.translate)({
                        singular: "Copy link",
                        dictionary: {
                          es: {
                            singular: "Copiar vínculo"
                          },
                          "de-DE": {
                            singular: "Link kopieren"
                          },
                          "fr-FR": {
                            singular: "Copier le lien"
                          },
                          "ja-JP": {
                            singular: "リンクをコピー"
                          },
                          "ko-KR": {
                            singular: "링크 복사"
                          },
                          "pt-BR": {
                            singular: "Copiar link"
                          },
                          "zh-CN": {
                            singular: "复制链接"
                          }
                        }
                      })
                    })
                  })]
                })]
              })]
            }), (0, _v1.jsx)(_v20.Alert, {
              status: "info",
              borderRadius: "lg",
              alignItems: "flex-start",
              gap: (0, _v13.rem)(12),
              children: (0, _v1.jsx)(_v21.AlertDescription, {
                fontSize: "body-sm",
                color: "text-primary",
                children: (0, _v18.translate)({
                  singular: "You'll have Admin access to their account. They're still the Owner, so billing stays with them and they can remove your access whenever needed.",
                  dictionary: {
                    es: {
                      singular: "Tendrás acceso como Administrador a su cuenta. El cliente sigue siendo el Propietario, por lo que la facturación queda a su cargo y puede eliminar tu acceso cuando lo necesite."
                    },
                    "de-DE": {
                      singular: "Sie erhalten Administratorzugang zu ihrem Konto. Sie bleiben weiterhin Eigentümer; die Abrechnung bleibt bei ihnen und sie können Ihren Zugriff jederzeit entfernen."
                    },
                    "fr-FR": {
                      singular: "Vous aurez un accès Administrateur à leur compte. Le client reste le propriétaire, donc la facturation reste à sa charge et il peut supprimer votre accès à tout moment."
                    },
                    "ja-JP": {
                      singular: "あなたはそのアカウントに対してAdminアクセス権を持ちます。所有者は引き続きOwnerのままなので、請求は所有者に残り、必要に応じていつでもあなたのアクセスを解除できます。"
                    },
                    "ko-KR": {
                      singular: "귀하는 해당 계정에 대해 관리자(Admin) 권한을 갖게 됩니다. 그들은 여전히 소유자(Owner)이므로 결제 책임은 그들에게 있으며, 필요 시 언제든 귀하의 접근 권한을 제거할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Você terá acesso de administrador à conta do cliente. Ele(a) continua como proprietário(a), então o faturamento permanece com ele(a) e ele(a) pode remover seu acesso quando necessário."
                    },
                    "zh-CN": {
                      singular: "您将获得其帐户的管理员访问权限。他们仍然是所有者，计费仍由他们承担，并且他们可以在需要时移除您的访问权限。"
                    }
                  }
                })
              })
            })]
          })
        }), (0, _v1.jsx)(_v11.ModalFooter, {
          children: (0, _v1.jsx)(_v5.Button, {
            variant: "primary",
            size: "md",
            onClick: _v1,
            children: (0, _v18.translate)({
              singular: "Done",
              dictionary: {
                es: {
                  singular: "Hecho"
                },
                "de-DE": {
                  singular: "Fertig"
                },
                "fr-FR": {
                  singular: "Terminé"
                },
                "ja-JP": {
                  singular: "完了"
                },
                "ko-KR": {
                  singular: "완료"
                },
                "pt-BR": {
                  singular: "Feito"
                },
                "zh-CN": {
                  singular: "已存档"
                }
              }
            })
          })
        })]
      })]
    });
  }
  var _v39 = _v0.i(0);
  function _v40({
    onClose: _v0,
    ctaSource: _v1
  }) {
    let _v2 = (0, _v4.useViewer)(),
      {
        setHasInvited: _v3
      } = (0, _v39.useHasInvitedFlag)(_v2?.user?.id),
      {
        trackPreInviteModalShown: _v4,
        trackInviteModalShown: _v5
      } = (0, _v3.useManagedAccountsTracking)(),
      [_v6, _v7] = (0, _v2.useState)("intermediate"),
      _v8 = (0, _v2.useCallback)(() => _v7("invite"), []),
      _v9 = (0, _v2.useRef)(!1),
      _v10 = (0, _v2.useRef)(!1);
    return ((0, _v2.useEffect)(() => {
      "intermediate" !== _v6 || _v9.current ? "invite" !== _v6 || _v10.current || (_v10.current = !0, _v5({
        ctaSource: _v1
      })) : (_v9.current = !0, _v4({
        ctaSource: _v1
      }));
    }, [_v6, _v1, _v4, _v5]), "intermediate" === _v6) ? (0, _v1.jsx)(_v19, {
      isOpen: !0,
      onClose: _v0,
      onAddClientAccount: _v8
    }) : (0, _v1.jsx)(_v38, {
      isOpen: !0,
      onClose: _v0,
      onInvited: _v3
    });
  }
  _v0.s(["ManagedAccountsInviteFlow", 0, _v40], 0);
  var _v41 = _v0.i(0);
  function _v42({
    isOpen: _v0,
    onClose: _v1,
    onCtaClick: _v2
  }) {
    return (0, _v1.jsxs)(_v7.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        "data-testid": "managed-accounts-promo-popup",
        bg: "surface",
        borderRadius: (0, _v13.rem)(24),
        maxW: (0, _v13.rem)(538),
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v9.ModalCloseButton, {
          top: (0, _v13.rem)(20),
          right: (0, _v13.rem)(20),
          onClick: _v1
        }), (0, _v1.jsx)(_v8.ModalBody, {
          padding: 0,
          paddingTop: (0, _v13.rem)(16),
          children: (0, _v1.jsx)(_v6.Flex, {
            flexDirection: "column",
            alignItems: "center",
            paddingX: (0, _v13.rem)(24),
            children: (0, _v1.jsxs)(_v6.Flex, {
              flexDirection: "column",
              alignItems: "center",
              gap: (0, _v13.rem)(40),
              paddingY: (0, _v13.rem)(24),
              width: (0, _v13.rem)(490),
              maxW: "100%",
              children: [(0, _v1.jsxs)(_v6.Flex, {
                flexDirection: "column",
                alignItems: "center",
                gap: (0, _v13.rem)(16),
                width: "100%",
                children: [(0, _v1.jsx)(_v25.Header, {
                  size: "xl",
                  textAlign: "center",
                  color: "text-primary",
                  width: "100%",
                  marginTop: "lg",
                  children: (0, _v18.translate)({
                    singular: "Managing videos for a client?",
                    dictionary: {
                      es: {
                        singular: "¿Gestionas vídeos para un cliente?"
                      },
                      "de-DE": {
                        singular: "Verwalten Sie Videos für einen Kunden?"
                      },
                      "fr-FR": {
                        singular: "Vous gérez des vidéos pour un client ?"
                      },
                      "ja-JP": {
                        singular: "クライアントの動画を管理していますか？"
                      },
                      "ko-KR": {
                        singular: "클라이언트를 위해 동영상을 관리하고 계신가요?"
                      },
                      "pt-BR": {
                        singular: "Gerenciando vídeos para um cliente?"
                      },
                      "zh-CN": {
                        singular: "为客户管理视频吗？"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v14.Text, {
                  variant: "body-md",
                  textAlign: "center",
                  color: "text-secondary",
                  width: "100%",
                  children: (0, _v18.translate)({
                    singular: "Manage their content, embeds, and analytics without leaving your own login",
                    dictionary: {
                      es: {
                        singular: "Gestiona su contenido, incrustaciones y analíticas sin salir de tu cuenta"
                      },
                      "de-DE": {
                        singular: "Verwalten Sie deren Inhalte, Einbettungen und Analysen, ohne Ihren eigenen Login zu verlassen."
                      },
                      "fr-FR": {
                        singular: "Gérez leur contenu, leurs lecteurs intégrés et leurs analyses sans quitter votre propre session."
                      },
                      "ja-JP": {
                        singular: "自分のログインを保持したまま、クライアントのコンテンツ、埋め込み、分析を管理できます。"
                      },
                      "ko-KR": {
                        singular: "로그인 상태를 유지한 채 그들의 콘텐츠, 임베드 및 분석을 관리하세요."
                      },
                      "pt-BR": {
                        singular: "Gerencie o conteúdo, as incorporações e as análises deles sem sair do seu próprio login"
                      },
                      "zh-CN": {
                        singular: "在不退出您当前登录的情况下管理他们的内容、嵌入和分析"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v41.Image, {
                src: "https://i.vimeocdn.com/custom_asset/e82b90401091dc7aeab9387a3f94ecbb?region=us",
                alt: "",
                borderRadius: (0, _v13.rem)(20),
                width: (0, _v13.rem)(420),
                maxW: "100%",
                height: (0, _v13.rem)(256),
                objectFit: "cover",
                overflow: "hidden"
              })]
            })
          })
        }), (0, _v1.jsx)(_v6.Flex, {
          flexDirection: "column",
          alignItems: "center",
          bg: "surface",
          paddingTop: (0, _v13.rem)(20),
          paddingBottom: (0, _v13.rem)(32),
          paddingX: (0, _v13.rem)(24),
          children: (0, _v1.jsx)(_v5.Button, {
            "data-testid": "managed-accounts-promo-cta",
            variant: "primary",
            size: "lg",
            width: (0, _v13.rem)(420),
            maxW: "100%",
            onClick: _v2,
            children: (0, _v18.translate)({
              singular: "Start managing clients now",
              dictionary: {
                es: {
                  singular: "Empieza a gestionar clientes ahora"
                },
                "de-DE": {
                  singular: "Beginnen Sie jetzt mit der Verwaltung von Kunden"
                },
                "fr-FR": {
                  singular: "Commencez à gérer des clients dès maintenant"
                },
                "ja-JP": {
                  singular: "今すぐクライアントの管理を開始"
                },
                "ko-KR": {
                  singular: "지금 바로 클라이언트 관리 시작하기"
                },
                "pt-BR": {
                  singular: "Comece a gerenciar clientes agora"
                },
                "zh-CN": {
                  singular: "立即开始管理客户"
                }
              }
            })
          })
        })]
      })]
    });
  }
  _v0.s(["PromoPopup", 0, _v42], 0);
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  _v0.s(["ManagedAccountsPromo", 0, function () {
    let _v0 = (0, _v44.usePromoEligibility)(),
      {
        canShow: _v1,
        markShown: _v2
      } = (0, _v43.usePromoCooldown)(),
      {
        trackPromoShown: _v3
      } = (0, _v3.useManagedAccountsTracking)(),
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v0 && !_v8.current && _v1() && (_v8.current = !0, _v2(), _v5(!0), _v3({
        source: "promo_popup"
      }));
    }, [_v0, _v1, _v2, _v3]);
    let _v9 = (0, _v2.useCallback)(() => _v5(!1), []),
      _v10 = (0, _v2.useCallback)(() => {
        _v5(!1), _v7(!0);
      }, []),
      _v11 = (0, _v2.useCallback)(() => _v7(!1), []);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v42, {
        isOpen: _v4,
        onClose: _v9,
        onCtaClick: _v10
      }), _v6 && (0, _v1.jsx)(_v40, {
        ctaSource: "promo_popup",
        onClose: _v11
      })]
    });
  }], 0);
}