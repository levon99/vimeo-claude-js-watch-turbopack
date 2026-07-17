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
    _v20 = _v0.i(0);
  function _v21({
    icon: _v0,
    title: _v1,
    description: _v2
  }) {
    return (0, _v1.jsxs)(_v4.Flex, {
      gap: (0, _v6.rem)(6),
      alignItems: "flex-start",
      w: "100%",
      children: [(0, _v1.jsx)(_v16.Box, {
        display: "flex",
        flexShrink: 0,
        color: "text-primary",
        children: _v0
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        flex: "1 0 0",
        minW: 0,
        children: [(0, _v1.jsx)(_v17.Text, {
          variant: "heading-xs",
          color: "text-primary",
          children: _v1
        }), (0, _v1.jsx)(_v17.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v2
        })]
      })]
    });
  }
  function _v22({
    agencyUserId: _v0
  }) {
    let {
        displayName: _v1,
        avatarSrc: _v2,
        isLoading: _v3
      } = (0, _v9.useAgencyIdentity)(_v0),
      _v4 = _v3 ? (0, _v20.translate)({
        singular: "You’ve been invited to join Vimeo",
        dictionary: {
          es: {
            singular: "Has sido invitado a unirte a Vimeo"
          },
          "de-DE": {
            singular: "Du wurdest eingeladen, Vimeo beizutreten"
          },
          "fr-FR": {
            singular: "Vous avez été invité à rejoindre Vimeo"
          },
          "ja-JP": {
            singular: "Vimeo に招待されました"
          },
          "ko-KR": {
            singular: "Vimeo에 초대되었습니다"
          },
          "pt-BR": {
            singular: "Você foi convidado a se juntar ao Vimeo"
          },
          "zh-CN": {
            singular: "您已被邀请加入 Vimeo"
          }
        }
      }) : (0, _v20.translate)({
        singular: "{name} invited you to join Vimeo to manage content for you.",
        replacements: {
          name: _v1
        },
        dictionary: {
          es: {
            singular: "{name} te invitó a unirte a Vimeo para gestionar contenido en tu nombre."
          },
          "de-DE": {
            singular: "{name} hat dich eingeladen, Vimeo beizutreten, um Inhalte für dich zu verwalten."
          },
          "fr-FR": {
            singular: "{name} vous a invité à rejoindre Vimeo pour gérer du contenu à votre place."
          },
          "ja-JP": {
            singular: "{name} があなたのコンテンツを管理するために Vimeo に招待しました。"
          },
          "ko-KR": {
            singular: "{name}님이 귀하의 콘텐츠 관리를 위해 Vimeo에 초대했습니다."
          },
          "pt-BR": {
            singular: "{name} convidou você para se juntar ao Vimeo para gerenciar conteúdo em seu nome."
          },
          "zh-CN": {
            singular: "{name} 邀请您加入 Vimeo 来为您管理内容。"
          }
        }
      });
    return (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      alignItems: "center",
      gap: (0, _v6.rem)(32),
      w: "100%",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        alignItems: "center",
        gap: (0, _v6.rem)(8),
        w: "100%",
        children: [(0, _v1.jsx)(_v16.Box, {
          p: (0, _v6.rem)(8),
          borderRadius: (0, _v6.rem)(16),
          overflow: "hidden",
          children: (0, _v1.jsx)(_v15.Avatar, {
            size: "xl",
            shape: "full",
            src: _v2,
            alt: _v1
          })
        }), (0, _v1.jsx)(_v17.Text, {
          variant: "heading-md",
          color: "text-primary",
          textAlign: "center",
          children: _v4
        })]
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        alignItems: "flex-start",
        gap: (0, _v6.rem)(16),
        w: "100%",
        p: (0, _v6.rem)(12),
        borderRadius: (0, _v6.rem)(16),
        background: "lightBlueAlpha.400",
        children: [(0, _v1.jsx)(_v21, {
          icon: (0, _v1.jsx)(_v19.ShieldCheck, {
            boxSize: (0, _v6.rem)(20)
          }),
          title: (0, _v20.translate)({
            singular: "You have full control",
            dictionary: {
              es: {
                singular: "Tienes control total"
              },
              "de-DE": {
                singular: "Du hast volle Kontrolle"
              },
              "fr-FR": {
                singular: "Vous avez le contrôle total"
              },
              "ja-JP": {
                singular: "あなたは完全な権限を持っています"
              },
              "ko-KR": {
                singular: "모든 권한을 가지고 있습니다"
              },
              "pt-BR": {
                singular: "Você tem controle total"
              },
              "zh-CN": {
                singular: "您拥有完全控制权"
              }
            }
          }),
          description: (0, _v20.translate)({
            singular: "You’re the owner of the account. You see every action and can remove admins at any time.",
            dictionary: {
              es: {
                singular: "Eres el propietario de la cuenta. Ves cada acción y puedes eliminar administradores en cualquier momento."
              },
              "de-DE": {
                singular: "Du bist der Inhaber des Kontos. Du siehst jede Aktion und kannst Administratoren jederzeit entfernen."
              },
              "fr-FR": {
                singular: "Vous êtes le propriétaire du compte. Vous voyez chaque action et pouvez supprimer des administrateurs à tout moment."
              },
              "ja-JP": {
                singular: "あなたはアカウントのオーナーです。すべての操作を確認でき、管理者をいつでも削除できます。"
              },
              "ko-KR": {
                singular: "귀하는 계정의 소유자입니다. 모든 작업을 확인할 수 있으며 언제든 관리자를 제거할 수 있습니다."
              },
              "pt-BR": {
                singular: "Você é o proprietário da conta. Você vê todas as ações e pode remover administradores a qualquer momento."
              },
              "zh-CN": {
                singular: "您是该账户的所有者。您可以查看所有操作，并可随时移除管理员。"
              }
            }
          })
        }), (0, _v1.jsx)(_v21, {
          icon: (0, _v1.jsx)(_v18.Eye, {
            boxSize: (0, _v6.rem)(20)
          }),
          title: (0, _v20.translate)({
            singular: "What they can do",
            dictionary: {
              es: {
                singular: "Lo que pueden hacer"
              },
              "de-DE": {
                singular: "Was sie tun können"
              },
              "fr-FR": {
                singular: "Ce qu'ils peuvent faire"
              },
              "ja-JP": {
                singular: "できること"
              },
              "ko-KR": {
                singular: "그들이 할 수 있는 작업"
              },
              "pt-BR": {
                singular: "O que eles podem fazer"
              },
              "zh-CN": {
                singular: "他们可以做什么"
              }
            }
          }),
          description: (0, _v20.translate)({
            singular: "They can upload, organize, and update your videos directly, so you skip the file transfers and email threads",
            dictionary: {
              es: {
                singular: "Pueden subir, organizar y actualizar tus videos directamente, así te ahorras las transferencias de archivos y los hilos de correo electrónico"
              },
              "de-DE": {
                singular: "Sie können deine Videos direkt hochladen, organisieren und aktualisieren, sodass du dir Dateiübertragungen und E-Mail-Threads sparst"
              },
              "fr-FR": {
                singular: "Ils peuvent téléverser, organiser et mettre à jour vos vidéos directement, vous évitant ainsi les transferts de fichiers et les fils d'e-mails."
              },
              "ja-JP": {
                singular: "彼らはあなたの動画を直接アップロード、整理、更新できるので、ファイル転送やメールのやり取りを省けます"
              },
              "ko-KR": {
                singular: "그들은 파일 전송과 이메일 교환 없이 동영상을 직접 업로드, 정리 및 업데이트할 수 있습니다"
              },
              "pt-BR": {
                singular: "Eles podem carregar, organizar e atualizar seus vídeos diretamente, assim você evita transferências de arquivos e trocas de e-mails"
              },
              "zh-CN": {
                singular: "他们可以直接上传、整理和更新您的视频，从而免去文件传输和邮件往来"
              }
            }
          })
        })]
      })]
    });
  }
  let _v23 = "/home";
  function _v24({
    agencyUserId: _v0
  }) {
    return (0, _v3.useEffect)(() => {
      window.sessionStorage.setItem("redirectUrl", _v23);
    }, []), (0, _v1.jsx)(_v14.AuthModal, {
      authType: "join",
      disableDismiss: !0,
      isFullScreen: !0,
      redirectUrl: _v23,
      banner: (0, _v1.jsx)(_v22, {
        agencyUserId: _v0
      })
    });
  }
  function _v25(_v0) {
    return Array.isArray(_v0) ? _v0[0] ?? "" : _v0 ?? "";
  }
  (0, _v7.withPageSetup)(async () => ({
    props: {
      layoutOptions: {
        globalNotifications: !1
      }
    }
  }), {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = (0, _v13.useViewer)(),
      _v2 = (0, _v12.useHasMounted)(),
      {
        payload: _v3,
        set: _v4
      } = (0, _v10.useManagedAccountsInvite)(),
      {
        trackAcceptPageOpened: _v5
      } = (0, _v11.useManagedAccountsTracking)(),
      _v6 = (0, _v3.useRef)(!1),
      _v7 = _v1?.user != null;
    (0, _v3.useEffect)(() => {
      if (!_v0.isReady || _v6.current) return;
      _v6.current = !0;
      let _v0 = function (_v0) {
        let _v1 = _v25(_v0);
        if (!/^\d+$/.test(_v1)) return null;
        let _v2 = Number(_v1);
        return Number.isSafeInteger(_v2) && _v2 > 0 ? _v2 : null;
      }(_v0.query.userId);
      if (null === _v0) return void _v0.replace(_v7 ? "/home" : "/join");
      let _v1 = (0, _v8.normalizeManagedAccountsSource)(_v25(_v0.query.s)) ?? (_v3?.agencyUserId === _v0 ? _v3.s : null);
      _v4({
        agencyUserId: _v0,
        s: _v1
      }), _v5({
        invitingUserId: _v0,
        attribution: _v1
      });
    }, [_v0.isReady, _v0, _v4, _v5, _v3, _v7]), (0, _v3.useEffect)(() => {
      _v0.isReady && _v7 && _v0.replace("/home");
    }, [_v0.isReady, _v0, _v7]);
    let _v8 = _v2 && !_v7 ? _v3?.agencyUserId ?? null : null,
      _v9 = (0, _v9.useAgencyIdentity)(_v8);
    return !_v2 || _v7 || null == _v3 || _v9.isLoading ? (0, _v1.jsx)(_v4.Flex, {
      minH: "100vh",
      w: "100%",
      alignItems: "center",
      justifyContent: "center",
      p: (0, _v6.rem)(24),
      children: (0, _v1.jsx)(_v5.Spinner, {})
    }) : (0, _v1.jsx)(_v24, {
      agencyUserId: _v3.agencyUserId
    });
  }], 0);
}