{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      WebexProduction: 0,
      WebexDevelopment: 0,
      ZoomProduction: 0,
      ZoomDevelopment: 0,
      MSTeamProduction: 0,
      MSTeamDevelopment: 0,
      GoogleMeetDevelopment: 0,
      GoogleMeetProduction: 0,
      DropboxProduction: 0,
      DropboxDevelopment: 0
    },
    _v3 = {
      name: "Zoom",
      getHeaderText: () => (0, _v1.translate)({
        singular: "Connected to Zoom",
        dictionary: {
          es: {
            singular: "Conectado a Zoom"
          },
          "de-DE": {
            singular: "Mit Zoom verbunden"
          },
          "fr-FR": {
            singular: "Connecté à Zoom"
          },
          "ja-JP": {
            singular: "Zoomに接続されました"
          },
          "ko-KR": {
            singular: "Zoom에 연결되었습니다."
          },
          "pt-BR": {
            singular: "Conectado ao Zoom"
          },
          "zh-CN": {
            singular: "已连接到 Zoom"
          }
        }
      }),
      getSubHeaderText: () => (0, _v1.translate)({
        singular: "Your Zoom videos will automatically be stored in your Vimeo account.",
        dictionary: {
          es: {
            singular: "Sus videos de Zoom se guardarán automáticamente en su cuenta de Vimeo."
          },
          "de-DE": {
            singular: "Ihre Zoom-Videos werden automatisch in Ihrem Vimeo-Konto gespeichert."
          },
          "fr-FR": {
            singular: "Vos vidéos Zoom seront automatiquement stockées dans votre compte Vimeo."
          },
          "ja-JP": {
            singular: "Zoomの動画が自動的にVimeoアカウントに保存されるようになります。"
          },
          "ko-KR": {
            singular: "Zoom 동영상은 Vimeo 계정에 자동으로 저장됩니다."
          },
          "pt-BR": {
            singular: "Seus vídeos do Zoom serão armazenados automaticamente na sua conta do Vimeo."
          },
          "zh-CN": {
            singular: "您的 Zoom 视频将自动存储在您的 Vimeo 帐户中。"
          }
        }
      }),
      appUUID: "2e4622bd-d6f4-4011-a57a-3c64bc495f27"
    },
    _v4 = {
      name: "Webex",
      getHeaderText: () => (0, _v1.translate)({
        singular: "Connected to Webex",
        dictionary: {
          es: {
            singular: "Conectado a Webex"
          },
          "de-DE": {
            singular: "Mit Webex verbunden"
          },
          "fr-FR": {
            singular: "Connecté à Webex"
          },
          "ja-JP": {
            singular: "Webexに接続されました"
          },
          "ko-KR": {
            singular: "Webex에 연결되었습니다."
          },
          "pt-BR": {
            singular: "Conectado ao Webex"
          },
          "zh-CN": {
            singular: "已连接到 Webex"
          }
        }
      }),
      getSubHeaderText: () => (0, _v1.translate)({
        singular: "Your Webex videos will automatically be stored in your Vimeo account.",
        dictionary: {
          es: {
            singular: "Sus videos de Webex se guardarán automáticamente en su cuenta de Vimeo."
          },
          "de-DE": {
            singular: "Ihre Webex-Videos werden automatisch in Ihrem Vimeo-Konto gespeichert."
          },
          "fr-FR": {
            singular: "Vos vidéos Webex seront automatiquement stockées dans votre compte Vimeo."
          },
          "ja-JP": {
            singular: "Webexの動画が自動的にVimeoアカウントに保存されるようになります。"
          },
          "ko-KR": {
            singular: "Webex 동영상은 Vimeo 계정에 자동으로 저장됩니다."
          },
          "pt-BR": {
            singular: "Seus vídeos do Webex serão armazenados automaticamente na sua conta do Vimeo ."
          },
          "zh-CN": {
            singular: "您的 Webex 视频将自动存储在您的 Vimeo 帐户中。"
          }
        }
      }),
      appUUID: "ae19a00e-5bc7-4a71-8da8-144666e31e76"
    },
    _v5 = {
      name: "Google Meet",
      getHeaderText: () => (0, _v1.translate)({
        singular: "Connected to Google Meet",
        dictionary: {
          es: {
            singular: "Conectado a Google Meet"
          },
          "de-DE": {
            singular: "Mit Google Meet verbunden"
          },
          "fr-FR": {
            singular: "Connecté à Google Meet"
          },
          "ja-JP": {
            singular: "Google Meetに接続されました"
          },
          "ko-KR": {
            singular: "Google Meet에 연결되었습니다."
          },
          "pt-BR": {
            singular: "Conectado ao Google Meet"
          },
          "zh-CN": {
            singular: "已连接到 Google Meet"
          }
        }
      }),
      getSubHeaderText: () => (0, _v1.translate)({
        singular: "Your Google Meet videos will automatically be stored in your Vimeo account.",
        dictionary: {
          es: {
            singular: "Sus videos de Google Meet se guardarán automáticamente en su cuenta de Vimeo."
          },
          "de-DE": {
            singular: "Ihre Google Meet-Videos werden automatisch in Ihrem Vimeo-Konto gespeichert."
          },
          "fr-FR": {
            singular: "Vos vidéos Google Meet seront automatiquement stockées dans votre compte Vimeo."
          },
          "ja-JP": {
            singular: "Google Meetの動画が自動的にVimeoアカウントに保存されるようになります。"
          },
          "ko-KR": {
            singular: "Google Meet 동영상은 Vimeo 계정에 자동으로 저장됩니다."
          },
          "pt-BR": {
            singular: "Seus vídeos do Google Meet serão armazenados automaticamente na sua conta do Vimeo."
          },
          "zh-CN": {
            singular: "您的 Google Meet 视频将自动存储在您的 Vimeo 帐户中。"
          }
        }
      }),
      appUUID: "5153ca9f-0424-499f-8050-a19911e8a37f"
    },
    _v6 = {
      name: "Dropbox",
      getHeaderText: () => (0, _v1.translate)({
        singular: "Connected to Dropbox",
        dictionary: {
          es: {
            singular: "Conectado a Dropbox"
          },
          "de-DE": {
            singular: "Mit Dropbox verbunden"
          },
          "fr-FR": {
            singular: "Connecté à Dropbox"
          },
          "ja-JP": {
            singular: "Dropboxに接続されました"
          },
          "ko-KR": {
            singular: "Dropbox에 연결되었습니다."
          },
          "pt-BR": {
            singular: "Conectado ao Dropbox"
          },
          "zh-CN": {
            singular: "已连接到 Dropbox"
          }
        }
      }),
      getSubHeaderText: () => (0, _v1.translate)({
        singular: "Your Dropbox videos will automatically be stored in your Vimeo account.",
        dictionary: {
          es: {
            singular: "Sus videos de Dropbox se guardarán automáticamente en su cuenta de Vimeo."
          },
          "de-DE": {
            singular: "Ihre Dropbox-Videos werden automatisch in Ihrem Vimeo-Konto gespeichert."
          },
          "fr-FR": {
            singular: "Vos vidéos Dropbox seront automatiquement stockées dans votre compte Vimeo."
          },
          "ja-JP": {
            singular: "Dropboxの動画が自動的にVimeoアカウントに保存されるようになります。"
          },
          "ko-KR": {
            singular: "Dropbox 동영상은 Vimeo 계정에 자동으로 저장됩니다."
          },
          "pt-BR": {
            singular: "Seus vídeos do Dropbox serão armazenados automaticamente na sua conta do Vimeo."
          },
          "zh-CN": {
            singular: "您的 Dropbox 视频将自动存储在您的 Vimeo 帐户中。"
          }
        }
      }),
      appUUID: "d9bc1e0c-b702-4e83-8332-1a45c1b51771"
    },
    _v7 = {
      name: "MS Team",
      getHeaderText: _v0 => _v0 ? (0, _v1.translate)({
        singular: "Your team can now connect to Microsoft Teams",
        dictionary: {
          es: {
            singular: "Su equipo ahora puede conectarse a Microsoft Teams"
          },
          "de-DE": {
            singular: "Ihr Team kann sich jetzt mit Microsoft Teams verbinden."
          },
          "fr-FR": {
            singular: "Votre équipe peut maintenant se connecter à Microsoft Teams"
          },
          "ja-JP": {
            singular: "チームはMicrosoft Teamsに接続できるようになりました"
          },
          "ko-KR": {
            singular: "이제 회원님의 팀은 Microsoft Teams에 연결할 수 있습니다."
          },
          "pt-BR": {
            singular: "Sua equipe agora pode se conectar ao Microsoft Teams"
          },
          "zh-CN": {
            singular: "您的团队现在可以连接到 Microsoft Teams"
          }
        }
      }) : (0, _v1.translate)({
        singular: "Connected to Microsoft Teams",
        dictionary: {
          es: {
            singular: "Conectado a Microsoft Teams"
          },
          "de-DE": {
            singular: "Mit Microsoft Teams verbunden"
          },
          "fr-FR": {
            singular: "Connecté à Microsoft Teams"
          },
          "ja-JP": {
            singular: "Microsoft Teamsに接続されました"
          },
          "ko-KR": {
            singular: "Microsoft Teams에 연결되었습니다."
          },
          "pt-BR": {
            singular: "Conectado ao Microsoft Teams"
          },
          "zh-CN": {
            singular: "已连接到 Microsoft Teams"
          }
        }
      }),
      getSubHeaderText: _v0 => _v0 ? (0, _v1.translate)({
        singular: "Have team members check their Microsoft Teams chat to log in to Vimeo to finish setting up their connection.",
        dictionary: {
          es: {
            singular: "Pídales a los miembros del equipo que revisen su chat de Microsoft Teams para iniciar sesión en Vimeo y terminar de configurar su conexión."
          },
          "de-DE": {
            singular: "Bitten Sie die Teammitglieder, ihren Microsoft Teams-Chat zu überprüfen, um sich bei Vimeo anzumelden und die Einrichtung ihrer Verbindung abzuschließen."
          },
          "fr-FR": {
            singular: "Demandez aux collaborateurs de vérifier leur conversation Microsoft Teams pour se connecter à Vimeo et finaliser la configuration de leur connexion."
          },
          "ja-JP": {
            singular: "Microsoft Teamsのチャットを確認し、Vimeoにログインして、接続の設定を完了するようチームメンバーにお伝えください。"
          },
          "ko-KR": {
            singular: "팀원이 Microsoft Teams 채팅을 확인하여 Vimeo에 로그인하고, 연결 설정을 완료하도록 하세요."
          },
          "pt-BR": {
            singular: "Peça para os integrante da equipe verificarem o chat do Microsoft Team para fazer login no Vimeo e concluir a configuração da conexão."
          },
          "zh-CN": {
            singular: "请团队成员检查他们的 Microsoft Teams 聊天记录，以登录 Vimeo 并完成连接设置。"
          }
        }
      }) : (0, _v1.translate)({
        singular: "Your Microsoft Teams videos will automatically be stored in your Vimeo account.",
        dictionary: {
          es: {
            singular: "Sus videos de Microsoft Teams se guardarán automáticamente en su cuenta de Vimeo."
          },
          "de-DE": {
            singular: "Ihre Microsoft-Teams-Videos werden automatisch in Ihrem Vimeo-Konto gespeichert."
          },
          "fr-FR": {
            singular: "Vos vidéos Microsoft Teams seront automatiquement stockées dans votre compte Vimeo."
          },
          "ja-JP": {
            singular: "Microsoft Teamsの動画が自動的にVimeoアカウントに保存されるようになります。"
          },
          "ko-KR": {
            singular: "Microsoft Teams 동영상은 Vimeo 계정에 자동으로 저장됩니다."
          },
          "pt-BR": {
            singular: "Seus vídeos do Microsoft Teams serão armazenados automaticamente na sua conta do Vimeo."
          },
          "zh-CN": {
            singular: "您的 Microsoft Teams 视频将自动存储在您的 Vimeo 帐户中。"
          }
        }
      }),
      appUUID: "e6d05247-f3ba-403d-86fc-90bc4f84f36f"
    },
    _v8 = {
      [_v2.ZoomProduction]: _v3,
      [_v2.ZoomDevelopment]: _v3,
      [_v2.WebexProduction]: _v4,
      [_v2.WebexDevelopment]: _v4,
      [_v2.GoogleMeetProduction]: _v5,
      [_v2.GoogleMeetDevelopment]: _v5,
      [_v2.DropboxProduction]: _v6,
      [_v2.DropboxDevelopment]: _v6,
      [_v2.MSTeamProduction]: _v7,
      [_v2.MSTeamDevelopment]: _v7
    };
  _v0.s(["PARTNER_APP_ID", 0, _v2, "PARTNER_CONFIG", 0, _v8, "isValidAppId", 0, _v0 => _v0 in _v8]);
}