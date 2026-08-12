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
    _v14 = _v0.i(0);
  let _v15 = "#C8EDFF";
  var _v16 = _v0.i(0);
  let _v17 = _v11.default.div.withConfig({
      displayName: "index.styles__SSOLoginCompleteContainer",
      componentId: "sc-e90a1403-0"
    })`
  display: flex;
  height: 100vh;
  @media (max-width: ${_v16.TABLET}) {
    background: ${_v15};
  }
`,
    _v18 = _v11.default.div.withConfig({
      displayName: "index.styles__Left",
      componentId: "sc-e90a1403-1"
    })`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
`,
    _v19 = _v11.default.div.withConfig({
      displayName: "index.styles__Right",
      componentId: "sc-e90a1403-2"
    })`
  background: ${_v15};
  flex: 2;

  @media (max-width: ${_v16.TABLET}) {
    flex-grow: 0;
  }
`,
    _v20 = _v11.default.div.withConfig({
      displayName: "index.styles__CTABlock",
      componentId: "sc-e90a1403-3"
    })`
  background: ${_v12.white};
  padding: ${(0, _v10.rem)(27)};
  text-align: center;
  max-width: ${(0, _v10.rem)(441)};
  border-radius: ${(0, _v10.rem)(8)};

  @media (max-width: ${_v16.TABLET}) {
    box-shadow:
      0px 10px 6.2px -4.95px rgba(0, 0, 0, 0.06),
      0px 0px 10.2px 0.55px rgba(0, 0, 0, 0.02);
  }
`,
    _v21 = (0, _v11.default)(_v13.Button).withConfig({
      displayName: "index.styles__ButtonStyled",
      componentId: "sc-e90a1403-4"
    })`
  margin: ${(0, _v10.rem)(24)} 0;
  width: 100%;
`,
    _v22 = _v11.default.img.withConfig({
      displayName: "index.styles__Logo",
      componentId: "sc-e90a1403-5"
    })`
  width: 40%;
  margin-bottom: ${(0, _v10.rem)(16)};
`,
    _v23 = _v11.default.p.withConfig({
      displayName: "index.styles__Description",
      componentId: "sc-e90a1403-6"
    })`
  color: ${"#566F82"};
  text-align: left;
  font-size: smaller;
  line-height: ${(0, _v10.rem)(19)};
`,
    _v24 = (0, _v11.default)(_v14.VimeoLogo).withConfig({
      displayName: "index.styles__VimeoCompanyLogo",
      componentId: "sc-e90a1403-7"
    })`
  @media (min-width: ${_v16.TABLET}) {
    position: absolute;
    top: ${(0, _v10.rem)(20)};
    left: ${(0, _v10.rem)(20)};
  }

  @media (max-width: ${_v16.TABLET}) {
    margin: ${(0, _v10.rem)(10)} auto;
    display: block;
  }
`;
  var _v25 = _v0.i(0);
  let _v26 = {
      CompleteLogin: (0, _v25.translate)({
        singular: "Complete login",
        dictionary: {
          es: {
            singular: "Completar inicio sesión"
          },
          "de-DE": {
            singular: "Anmeldung abschließen"
          },
          "fr-FR": {
            singular: "Terminer la connexion"
          },
          "ja-JP": {
            singular: "ログインを完了"
          },
          "ko-KR": {
            singular: "로그인 완료하기"
          },
          "pt-BR": {
            singular: "Concluir login"
          },
          "zh-CN": {
            singular: "完成登录"
          }
        }
      }),
      AccountAdded: _v0 => (0, _v25.translate)({
        singular: "Your Vimeo account has been added to {TEAM_NAME}",
        replacements: {
          TEAM_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Tu cuenta de Vimeo se ha agregado a {TEAM_NAME}."
          },
          "de-DE": {
            singular: "Dein Vimeo-Konto wurde hinzugefügt zu {TEAM_NAME}"
          },
          "fr-FR": {
            singular: "Votre compte Vimeo a été ajouté à {TEAM_NAME}"
          },
          "ja-JP": {
            singular: "お使いのVimeoアカウントが{TEAM_NAME}に追加されました"
          },
          "ko-KR": {
            singular: "회원님의 Vimeo 계정이 {TEAM_NAME}에 추가되었습니다"
          },
          "pt-BR": {
            singular: "Sua conta do Vimeo foi adicionada a {TEAM_NAME}"
          },
          "zh-CN": {
            singular: "您的 Vimeo 账户已添加到 {TEAM_NAME}"
          }
        }
      }),
      Description: (0, _v25.translate)({
        singular: "All content on your Vimeo account is viewable by your organization. If you're currently storing personal content on your account, consider downloading and then deleting this content and uploading it to a personal Vimeo account.",
        dictionary: {
          es: {
            singular: "Tu organización puede ver todo el contenido en tu cuenta de Vimeo. Si actualmente almacenas contenido personal en tu cuenta, considera descargar este contenido y luego eliminarlo y subirlo a una cuenta de Vimeo personal."
          },
          "de-DE": {
            singular: "Sämtliche Inhalte auf deinem Vimeo-Konto sind für deine Organisation sichtbar. Wenn sich derzeit persönliche Inhalte in deinem Konto befinden, solltest du diese Inhalte herunterladen, von diesem Konto löschen und auf ein persönliches Vimeo-Konto hochladen."
          },
          "fr-FR": {
            singular: "Tout le contenu de votre compte Vimeo est visible par votre entreprise. Si vous stockez actuellement du contenu personnel sur ce compte, pensez à le télécharger puis à le supprimer, et éventuellement à le mettre en ligne sur un compte Vimeo privé."
          },
          "ja-JP": {
            singular: "Vimeoのアカウントにあるすべてのコンテンツは、所属する組織に表示されます。現在アカウントに個人的なコンテンツを保存している場合は、このコンテンツをダウンロードしてから削除し、個人のVimeoアカウントにアップロードすることを検討してください。"
          },
          "ko-KR": {
            singular: "회원님의 Vimeo 계정에 있는 모든 콘텐츠를 조직에서 볼 수 있습니다. 현재 회원님의 계정에 개인 콘텐츠를 저장하고 있다면 해당 콘텐츠를 다운로드한 다음 삭제하고 개인 Vimeo 계정에 업로드하는 것이 좋습니다."
          },
          "pt-BR": {
            singular: "Toda a organização pode ver o conteúdo na sua conta do Vimeo. Se você armazena conteúdo pessoal na sua conta, considere baixar e excluir esse conteúdo e depois carregá-lo para uma conta pessoal do Vimeo."
          },
          "zh-CN": {
            singular: "您的组织可以查看您的 Vimeo 账户中的所有内容。如果您目前在账户中存储了个人内容，请考虑下载并删除这些内容，然后上传到个人 Vimeo 账户。"
          }
        }
      })
    },
    _v27 = () => {
      let _v0 = (0, _v3.useContext)(_v9.ViewerContext),
        _v1 = (0, _v2.useRouter)(),
        _v2 = _v1?.query?.prev_page,
        {
          capabilities: {
            hasActiveSsoTeamMember: _v3
          },
          loading: _v4,
          ready: _v5
        } = (0, _v4.useCapability)(["hasActiveSsoTeamMember"], _v0?.teamUser?.ownerId),
        {
          data: _v6
        } = (0, _v6.useGetUserTeam)(() => _v0 && _v0?.teamUser ? {
          where: {
            userId: _v0.teamUser.ownerId
          },
          select: ["pictures.sizes"]
        } : null);
      return _v1 && _v5 && !_v3 && _v1.push("/"), (0, _v1.jsx)(_v1.Fragment, {
        children: _v3 && !_v4 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v24, {
            width: 100,
            height: 30
          }), (0, _v1.jsxs)(_v17, {
            children: [(0, _v1.jsx)(_v18, {
              children: (0, _v1.jsxs)(_v20, {
                children: [(0, _v1.jsx)(_v22, {
                  src: _v6?.pictures?.sizes?.[3]?.link ?? _v0?.teamUser?.imageUrl ?? _v0?.user?.pictures.sizes?.[7]?.link,
                  alt: _v0?.teamUser?.displayName
                }), (0, _v1.jsx)("h2", {
                  children: _v26.AccountAdded(_v0?.teamUser?.displayName ?? "")
                }), (0, _v1.jsx)(_v21, {
                  format: "primary",
                  onClick: () => {
                    let _v0 = _v2 ? String(_v2) : "/";
                    _v1.push((0, _v8.isVimeoRedirectableUrl)(_v0) ? _v0 : "/");
                  },
                  children: _v26.CompleteLogin
                }), (0, _v1.jsx)(_v23, {
                  children: _v26.Description
                })]
              })
            }), (0, _v1.jsx)(_v19, {})]
          })]
        }) : (0, _v1.jsx)(_v7.default, {})
      });
    };
  (0, _v5.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v27.getLayout = _v0 => (0, _v1.jsx)("div", {
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v27], 0);
}