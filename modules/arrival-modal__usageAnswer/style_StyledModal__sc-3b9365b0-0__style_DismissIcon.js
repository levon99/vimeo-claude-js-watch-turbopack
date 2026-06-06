{
  "use strict";

  var _v1,
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
    _v14 = _v0.i(0);
  let _v15 = (0, _v7.default)(_v10.Modal).withConfig({
      displayName: "style__StyledModal",
      componentId: "sc-3b9365b0-0"
    })`
  max-width: ${(0, _v6.rem)(535)};
  width: ${(0, _v6.rem)(535)};
  max-height: ${(0, _v6.rem)(524)};
  border-radius: ${(0, _v6.rem)(8)};
  padding: 0;
  overflow: hidden;
  background-color: white;
`,
    _v16 = (0, _v7.default)(_v11.DismissX).withConfig({
      displayName: "style__DismissIcon",
      componentId: "sc-3b9365b0-1"
    })`
  position: absolute;
  top: ${(0, _v6.rem)(12)};
  right: ${(0, _v6.rem)(12)};
  width: ${(0, _v6.rem)(20)};
  height: ${(0, _v6.rem)(20)};
  z-index: 1;
  cursor: pointer;

  &:hover {
    width: ${(0, _v6.rem)(20)};
    height: ${(0, _v6.rem)(20)};
    top: ${(0, _v6.rem)(12)};
    right: ${(0, _v6.rem)(12)};
  }
`,
    _v17 = (0, _v7.default)(_v12.Sparkle).withConfig({
      displayName: "style__SparkleIcon",
      componentId: "sc-3b9365b0-2"
    })`
  height: ${(0, _v6.rem)(24)};
  margin-right: ${(0, _v6.rem)(8)};
  vertical-align: middle;
  top: -${(0, _v6.rem)(2)};
  position: relative;
`,
    _v18 = _v7.default.div.withConfig({
      displayName: "style__ArrivalModalDiv",
      componentId: "sc-3b9365b0-3"
    })`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  & > div {
    width: 100%;
  }
`,
    _v19 = (0, _v7.default)(_v9.Button).withConfig({
      displayName: "style__ArrivalModalButton",
      componentId: "sc-3b9365b0-4"
    })`
  margin-top: 16px;
  margin-bottom: 24px;
  border-radius: 6px;
  width: ${(0, _v6.rem)(99)};
  height: ${(0, _v6.rem)(32)};
`,
    _v20 = (0, _v7.default)(_v14.Header).withConfig({
      displayName: "style__ArrivalHeader",
      componentId: "sc-3b9365b0-5"
    })`
  &&& {
    padding: ${(0, _v6.rem)(20)};
    font-size: ${(0, _v6.rem)(16)};
    margin-bottom: 0;
    vertical-align: middle;
    color: ${(0, _v8.slate)(800)};
    font-weight: 500;
    letter-spacing: -0.4px;
  }
`,
    _v21 = (0, _v7.default)(_v14.Header).withConfig({
      displayName: "style__ArrivalContentHeader",
      componentId: "sc-3b9365b0-6"
    })`
  &&& {
    margin-bottom: ${(0, _v6.rem)(12)};
    font-size: ${(0, _v6.rem)(22)};
    font-weight: 700;
    line-height: ${(0, _v6.rem)(28)};
    letter-spacing: ${(0, _v6.rem)(-.08)};
    color: ${(0, _v8.slate)(800)};
  }
`,
    _v22 = _v7.default.div.withConfig({
      displayName: "style__ArrivalContentDiv",
      componentId: "sc-3b9365b0-7"
    })`
  padding: ${(0, _v6.rem)(20)};
`,
    _v23 = (0, _v7.default)(_v13.Paragraph).withConfig({
      displayName: "style__ArrivalContentDescription",
      componentId: "sc-3b9365b0-8"
    })`
  && {
    font-size: ${(0, _v6.rem)(14)};
    font-weight: 400;
    color: ${(0, _v8.slate)(800)};
    line-height: ${(0, _v6.rem)(20)};
  }
`,
    _v24 = _v7.default.img.withConfig({
      displayName: "style__ArrivalMediaImg",
      componentId: "sc-3b9365b0-9"
    })`
  ${({
      fullImage: _v0
    }) => _v0 ? `
    height: 100%;
    width: 100%;
    ` : `
    height: ${(0, _v6.rem)(234)};
    width: ${(0, _v6.rem)(416)};
    `}
  max-height: ${(0, _v6.rem)(304)};
  object-fit: cover;
  object-position: top;
`,
    _v25 = _v7.keyframes`
    from {
        background-position: 100% 0;
    }
    to {
        background-position: -100% 0;
    }
`,
    _v26 = _v7.css`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.02) 25%,
    rgba(0, 0, 0, 0.04) 50%,
    rgba(0, 0, 0, 0.02) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 200%;
  animation: ${_v25} 2.5s linear infinite;
  transiton: 200ms;
`;
  _v7.default.div.withConfig({
    displayName: "style__ArrivalMediaLoading",
    componentId: "sc-3b9365b0-10"
  })`
  width: 100%;
  position: relative;
  height: ${(0, _v6.rem)(304)};
  ${_v26}
  animation-delay: 500ms;
`;
  let _v27 = _v7.default.div.withConfig({
    displayName: "style__ArrivalMediaContainer",
    componentId: "sc-3b9365b0-11"
  })`
  ${({
    isVideo: _v0
  }) => _v0 ? `background-color: white;
      height: ${(0, _v6.rem)(310)};
    ` : `background-color: #fcefc1;
      height: ${(0, _v6.rem)(304)};`}
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  _v0.s(["ArrivalContentDescription", 0, _v23, "ArrivalContentDiv", 0, _v22, "ArrivalContentHeader", 0, _v21, "ArrivalHeader", 0, _v20, "ArrivalMediaContainer", 0, _v27, "ArrivalMediaImg", 0, _v24, "ArrivalModalButton", 0, _v19, "ArrivalModalDiv", 0, _v18, "DismissIcon", 0, _v16, "SparkleIcon", 0, _v17, "StyledModal", 0, _v15], 0);
  let _v28 = ({
    isVideo: _v0,
    mediaURL: _v1,
    fullImage: _v2
  }) => {
    let [_v3, _v4] = (0, _v3.useState)(!0),
      _v5 = (0, _v3.useRef)(null),
      _v6 = () => {
        _v4(!1);
      };
    return (0, _v3.useEffect)(() => {
      _v5.current && _v5.current.complete && _v6();
    }, []), (0, _v2.jsx)(_v27, {
      isVideo: _v0,
      children: _v0 ? (0, _v2.jsx)("iframe", {
        src: _v1,
        frameBorder: "0",
        allow: "autoplay",
        height: "100%",
        width: "100%"
      }) : (0, _v2.jsx)(_v24, {
        ref: _v5,
        style: {
          display: _v3 ? "none" : "block"
        },
        src: _v1,
        onLoad: _v6,
        fullImage: _v2
      })
    });
  };
  function _v29({
    title: _v0,
    description: _v1,
    header: _v2,
    ..._v3
  }) {
    return (0, _v2.jsxs)("div", {
      id: "ArrivalModalContent",
      children: [_v2 && (0, _v2.jsxs)(_v20, {
        children: [(0, _v2.jsx)(_v17, {}), _v2]
      }), (0, _v2.jsx)(_v28, {
        ..._v3
      }), (0, _v2.jsxs)(_v22, {
        children: [(0, _v2.jsx)(_v21, {
          children: _v0
        }), (0, _v2.jsx)(_v23, {
          children: _v1
        })]
      })]
    });
  }
  var _v30 = ((_v1 = {}).watch = "watch", _v1.upload = "upload", _v1.record = "record", _v1.livestream = "livestream", _v1.create = "create", _v1.lihp_upload = "lihp_upload", _v1.lihp_record = "lihp_record", _v1.lihp_live = "lihp_live", _v1.lihp_create = "lihp_create", _v1.lihp_edit = "lihp_edit", _v1);
  _v0.s(["ModalType", () => _v30], 0);
  let _v31 = {
    [_v30.watch]: {
      isVideo: !1,
      mediaURL: "https://i.vimeocdn.com/custom_asset/8250364e09e7ab305280f438a9658717",
      fullImage: !0,
      title: (0, _v5.translate)({
        singular: "Welcome! We're so glad you're here!",
        dictionary: {
          es: {
            singular: "¡Bienvenido! ¡Estamos muy contentos de que estés aquí!"
          },
          "de-DE": {
            singular: "Herzlich willkommen! Schön, dass du da bist!"
          },
          "fr-FR": {
            singular: "Bienvenue ! Quel plaisir de vous accueillir !"
          },
          "ja-JP": {
            singular: "Vimeoへようこそ！"
          },
          "ko-KR": {
            singular: "반갑습니다! 환영합니다!"
          },
          "pt-BR": {
            singular: "Boas-vindas! Estamos felizes em ver você aqui!"
          },
          "zh-CN": {
            singular: "欢迎！很高兴在这里见到您！"
          }
        }
      }),
      description: (0, _v5.translate)({
        singular: "There's an incredible amount of content to watch on Vimeo. We recommend getting started by checking out the Staff Picks (super awesome videos selected by Vimeo staff). ",
        dictionary: {
          es: {
            singular: "Hay una cantidad increíble de contenido para ver en Vimeo. Para empezar, te recomendamos eches un vistazo a los Staff Picks (videos impresionantes seleccionados por el equipo de Vimeo). "
          },
          "de-DE": {
            singular: "Auf Vimeo gibt es unglaublich viele Inhalte anzusehen. Wir empfehlen dir, dir zunächst die Staff Picks anzusehen (das sind tolle Videos, die von der Vimeo-Crew ausgewählt wurden). "
          },
          "fr-FR": {
            singular: "Sur Vimeo, une quantité incroyable de contenus vous attend. Notre conseil : commencez par jeter un œil aux Staff Picks (des vidéos fantastiques, sélectionnées par notre équipe). "
          },
          "ja-JP": {
            singular: "Vimeoは豊富なコンテンツで溢れています。まず、スタッフピック（Vimeoのスタッフが厳選した素晴らしい動画）をチェックしてみることをおすすめします。 "
          },
          "ko-KR": {
            singular: "Vimeo에는 믿을 수 없을 정도로 많은 콘텐츠가 있습니다. 스태프 픽(Vimeo 직원이 엄선한 훌륭한 동영상)을 둘러보며 시작해보세요. "
          },
          "pt-BR": {
            singular: "Assista a uma quantidade incrível de conteúdo no Vimeo. Recomendamos que você comece conferindo os Staff Picks (vídeos incríveis selecionados pela Equipe Vimeo). "
          },
          "zh-CN": {
            singular: "Vimeo 上有大量内容可供观看。我们建议您从“Staff Picks”（由 Vimeo 员工精选的超赞视频）开始观看。 "
          }
        }
      })
    },
    [_v30.upload]: {
      isVideo: !1,
      mediaURL: "https://i.vimeocdn.com/custom_asset/33d32ed2811777a58a06a06db7b922fa",
      fullImage: !1,
      title: (0, _v5.translate)({
        singular: "Welcome! We're so glad you're here!",
        dictionary: {
          es: {
            singular: "¡Bienvenido! ¡Estamos muy contentos de que estés aquí!"
          },
          "de-DE": {
            singular: "Herzlich willkommen! Schön, dass du da bist!"
          },
          "fr-FR": {
            singular: "Bienvenue ! Quel plaisir de vous accueillir !"
          },
          "ja-JP": {
            singular: "Vimeoへようこそ！"
          },
          "ko-KR": {
            singular: "반갑습니다! 환영합니다!"
          },
          "pt-BR": {
            singular: "Boas-vindas! Estamos felizes em ver você aqui!"
          },
          "zh-CN": {
            singular: "欢迎！很高兴在这里见到您！"
          }
        }
      }),
      description: (0, _v5.translate)({
        singular: "Let's get started by uploading your very first video. Simply drag and drop a video onto this page and watch your video seamlessly upload to your account! Yup, it's that simple.",
        dictionary: {
          es: {
            singular: "Empecemos por subir tu primer video. Simplemente tienes que arrastrar y soltar un video en esta página y ver cómo se sube sin problemas a tu cuenta. Así de simple."
          },
          "de-DE": {
            singular: "Legen wir los und laden dein allererstes Video hoch. Ziehe einfach ein Video per Drag-and-Drop auf diese Seite und sieh zu, wie es ganz mühelos in deinem Konto hochgeladen wird! So einfach geht das."
          },
          "fr-FR": {
            singular: "Commençons par mettre en ligne votre toute première vidéo. Il vous suffit de la glisser-déposer sur cette page pour qu'elle soit ajoutée à votre compte. Un vrai jeu d'enfant !"
          },
          "ja-JP": {
            singular: "最初の動画をアップロードすることから始めてみましょう。このページに動画をドラッグ＆ドロップするだけで、アカウントに動画がスムーズにアップロードされるのを見ることができます。とても簡単です。"
          },
          "ko-KR": {
            singular: "이제 첫 동영상을 업로드해볼까요? 이 페이지에 동영상을 끌어다 놓기만 하면 동영상이 계정에 원활하게 업로드되는 것을 볼 수 있습니다! 아주 간단하죠?"
          },
          "pt-BR": {
            singular: "Vamos começar carregando seu primeiro vídeo. Basta arrastar e soltar um vídeo nesta página e ele será carregado sem nenhum problema para sua conta! É simples assim mesmo."
          },
          "zh-CN": {
            singular: "首先，请上传您的第一个视频。只需将视频拖放到此页面，即可无缝上传到您的账户！没错，就是这么简单。"
          }
        }
      })
    },
    [_v30.create]: {
      isVideo: !1,
      mediaURL: "https://i.vimeocdn.com/custom_asset/e426525351c0f315b68f9d7c264a3b89",
      fullImage: !0,
      title: (0, _v5.translate)({
        singular: "Welcome! We're so glad you're here!",
        dictionary: {
          es: {
            singular: "¡Bienvenido! ¡Estamos muy contentos de que estés aquí!"
          },
          "de-DE": {
            singular: "Herzlich willkommen! Schön, dass du da bist!"
          },
          "fr-FR": {
            singular: "Bienvenue ! Quel plaisir de vous accueillir !"
          },
          "ja-JP": {
            singular: "Vimeoへようこそ！"
          },
          "ko-KR": {
            singular: "반갑습니다! 환영합니다!"
          },
          "pt-BR": {
            singular: "Boas-vindas! Estamos felizes em ver você aqui!"
          },
          "zh-CN": {
            singular: "欢迎！很高兴在这里见到您！"
          }
        }
      }),
      description: (0, _v5.translate)({
        singular: "Let's get started by creating your very first video.",
        dictionary: {
          es: {
            singular: "Empecemos por crear tu primer video."
          },
          "de-DE": {
            singular: "Legen wir los und erstellen dein allererstes Video."
          },
          "fr-FR": {
            singular: "Commençons par créer votre toute première vidéo."
          },
          "ja-JP": {
            singular: "最初の動画を作成することから始めてみましょう。"
          },
          "ko-KR": {
            singular: "이제 첫 동영상을 만들어볼까요?"
          },
          "pt-BR": {
            singular: "Vamos começar criando seu primeiro vídeo."
          },
          "zh-CN": {
            singular: "首先，请创建您的第一个视频。"
          }
        }
      })
    },
    [_v30.livestream]: {
      isVideo: !1,
      mediaURL: "https://i.vimeocdn.com/custom_asset/e6da4d25b9d2ec6bcdb8c5c4efa7f0b2",
      fullImage: !0,
      title: (0, _v5.translate)({
        singular: "Welcome! We're so glad you're here!",
        dictionary: {
          es: {
            singular: "¡Bienvenido! ¡Estamos muy contentos de que estés aquí!"
          },
          "de-DE": {
            singular: "Herzlich willkommen! Schön, dass du da bist!"
          },
          "fr-FR": {
            singular: "Bienvenue ! Quel plaisir de vous accueillir !"
          },
          "ja-JP": {
            singular: "Vimeoへようこそ！"
          },
          "ko-KR": {
            singular: "반갑습니다! 환영합니다!"
          },
          "pt-BR": {
            singular: "Boas-vindas! Estamos felizes em ver você aqui!"
          },
          "zh-CN": {
            singular: "欢迎！很高兴在这里见到您！"
          }
        }
      }),
      description: (0, _v5.translate)({
        singular: "Let's get started by showing you how to create a live event. This is just a demo, so feel free to explore as much as you'd like. (Don't worry, we won't go live until you're actually ready.)",
        dictionary: {
          es: {
            singular: "Comencemos por mostrarte cómo crear un evento en vivo. Esto es solo una demostración, así que no dudes en explorar todo lo que quieras. (No te preocupes, no transmitiremos en vivo hasta que estés realmente preparado)."
          },
          "de-DE": {
            singular: "Legen wir los, indem wir dir zeigen, wie du ein Live-Event erstellen kannst. Das ist nur eine Demo – probiere also gerne so viel herum, wie du möchtest. (Keine Sorge, du gehst erst dann live auf Sendung, wenn du wirklich bereit bist.)"
          },
          "fr-FR": {
            singular: "Commençons par apprendre à créer un événement en direct. Ce n'est qu'une démo, alors n'hésitez pas à laisser parler votre créativité. (Et pas d'inquiétude : nous ne passerons au live que lorsque vous serez prêt.)"
          },
          "ja-JP": {
            singular: "最初に、ライブイベントの作成方法をご紹介します。これはデモ版です。お好きなようにご覧いただけます。（準備が整うまでは、ライブ配信にはなりませんのでご安心ください。）"
          },
          "ko-KR": {
            singular: "라이브 이벤트 생성 방법을 먼저 보여드리겠습니다. 이 데모에서 얼마든지 자유롭게 둘러보세요. (회원님이 준비되면 라이브를 시작할 테니 걱정하지 마세요!)"
          },
          "pt-BR": {
            singular: "Vamos começar mostrando como criar um evento ao vivo. Como se trata somente de uma demonstração, fique à vontade para explorar o quanto quiser. (Não se preocupe, só entraremos ao vivo quando tudo estiver pronto.)"
          },
          "zh-CN": {
            singular: "首先让我们向您展示如何创建直播活动。这只是一个演示，因此请尽情探索各种功能。（别担心，我们不会开始直播，直到您真正做好准备为止。）"
          }
        }
      })
    },
    [_v30.record]: {
      isVideo: !1,
      mediaURL: "https://i.vimeocdn.com/custom_asset/8da55c40248a4235be8e705123ed987d",
      fullImage: !1,
      title: (0, _v5.translate)({
        singular: "Welcome! We're so glad you're here!",
        dictionary: {
          es: {
            singular: "¡Bienvenido! ¡Estamos muy contentos de que estés aquí!"
          },
          "de-DE": {
            singular: "Herzlich willkommen! Schön, dass du da bist!"
          },
          "fr-FR": {
            singular: "Bienvenue ! Quel plaisir de vous accueillir !"
          },
          "ja-JP": {
            singular: "Vimeoへようこそ！"
          },
          "ko-KR": {
            singular: "반갑습니다! 환영합니다!"
          },
          "pt-BR": {
            singular: "Boas-vindas! Estamos felizes em ver você aqui!"
          },
          "zh-CN": {
            singular: "欢迎！很高兴在这里见到您！"
          }
        }
      }),
      description: (0, _v5.translate)({
        singular: "Let's get started by recording your very first video. Click the 'Start Recording' button above to get the ball rolling. Yup, it's that simple!",
        dictionary: {
          es: {
            singular: "Empecemos por grabar tu primer video. Haz clic en el botón Comenzar a grabar más arriba para ponerte en marcha. Así de simple."
          },
          "de-DE": {
            singular: "Legen wir los und nehmen dein allererstes Video auf. Klicke oben auf den Button „Aufnahme starten“, um zu beginnen. So einfach geht das."
          },
          "fr-FR": {
            singular: "Commençons par enregistrer votre toute première vidéo. Cliquez sur le bouton « Lancer l'enregistrement » pour ouvrir le bal. Un vrai jeu d'enfant !"
          },
          "ja-JP": {
            singular: "最初の動画を録画することから始めてみましょう。上にある「録画開始」ボタンをクリックするだけで始められます。とても簡単です！"
          },
          "ko-KR": {
            singular: "이제 첫 동영상을 녹화해볼까요? 위에 있는 '녹화 시작' 버튼을 클릭하여 녹화를 시작하세요. 아주 간단하죠?"
          },
          "pt-BR": {
            singular: "Vamos começar gravando seu primeiro vídeo. Clique no botão “Iniciar gravação” acima para dar o pontapé inicial. É simples assim mesmo!"
          },
          "zh-CN": {
            singular: "首先，请录制您的第一个视频。点击上方的“开始录制”按钮开始录制。没错，就是这么简单！"
          }
        }
      })
    },
    [_v30.lihp_upload]: {
      isVideo: !0,
      mediaURL: "https://player.vimeo.com/video/745041187?h=eea378bfa1&amp;badge=0&amp;player_id=0&amp;app_id=58479;autoplay=1",
      fullImage: !1,
      title: "Get started with uploading",
      description: "Upload your videos directly from your computer or through a cloud-based application. Customize your privacy settings and then share or embed your videos anywhere.",
      header: "Upload a video",
      isGetStartedModal: !0
    },
    [_v30.lihp_record]: {
      isVideo: !0,
      mediaURL: "https://player.vimeo.com/video/745035178?h=eea378bfa1&amp;badge=0&amp;player_id=0&amp;app_id=58479;autoplay=1",
      fullImage: !1,
      title: "Get started with recording",
      description: "Accelerate team communication with our webcam and screen record Google Chrome extension. Send status updates, product demos, or explain complex workflows in a fraction of the time it takes to send an email.",
      header: "Record your screen",
      isGetStartedModal: !0
    },
    [_v30.lihp_live]: {
      isVideo: !0,
      mediaURL: "https://player.vimeo.com/video/745041234?h=eea378bfa1&amp;badge=0&amp;player_id=0&amp;app_id=58479;autoplay=1",
      fullImage: !1,
      title: "Get started with a virtual event",
      description: "Host virtual events to bring people together — no matter where they are in the world. Easily add registration forms, live chat, polls, and more to drive engagement and interaction.",
      header: "Host a virtual event",
      isGetStartedModal: !0
    },
    [_v30.lihp_create]: {
      isVideo: !0,
      mediaURL: "https://player.vimeo.com/video/745040533?h=eea378bfa1&amp;badge=0&amp;player_id=0&amp;app_id=58479;autoplay=1",
      fullImage: !1,
      title: "Get started with creating a video",
      description: "Create videos for any occasion with our easy-to-use video maker. Choose from our thousands of customizable templates or start from scratch.  Then share, embed, or download your video — all from the same platform.",
      header: "Create a video",
      isGetStartedModal: !0
    },
    [_v30.lihp_edit]: {
      isVideo: !0,
      mediaURL: "https://player.vimeo.com/video/745041150?h=ea807033da&amp;badge=0&amp;player_id=0&amp;app_id=58479;autoplay=1",
      fullImage: !1,
      title: "Get started with editing",
      description: "Edit your videos right in Vimeo with our easy-to-use editing tools. Once you have uploaded a video, you can trim footage, change privacy settings, create gifs, and more.",
      header: "Edit a video",
      isGetStartedModal: !0
    }
  };
  _v0.s(["default", 0, ({
    usageAnswer: _v0,
    modalContentByAnswer: _v1 = _v31
  }) => {
    let _v2 = _v1[_v0],
      _v3 = _v2.isGetStartedModal ? "getstarted_modal" : "arrival_modal",
      _v4 = _v2.isGetStartedModal ? _v0 : `logged_in_${_v0}`,
      _v5 = _v2.isGetStartedModal ? `getstarted_modal_open_${_v0.replace("lihp_", "")}` : `arrival_modal_${_v0}`;
    return (0, _v3.useEffect)(() => {
      _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.impression", 20, {
        feature: "lihp",
        location: _v3,
        name: _v5,
        page: _v4,
        type: "general"
      }));
    }, [_v0, _v4, _v5, _v3]), (0, _v2.jsx)(_v29, {
      ..._v2
    });
  }], 0);
}