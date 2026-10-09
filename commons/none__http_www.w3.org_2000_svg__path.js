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
  let _v19 = (_v0, _v1) => {
      let _v2 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.htmlLocalizations),
        _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.defaultLocale),
        _v4 = (0, _v14.useFormLocale)();
      return (0, _v16.resolveLocalizedPageCopy)({
        authored: _v2
      }, _v0, _v4, _v1, _v3);
    },
    _v20 = (_v0, _v1) => {
      let _v2 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.htmlLocalizations),
        _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.selectedLanguage),
        _v4 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.defaultLocale);
      if (_v3 === _v4) return _v1;
      let _v5 = _v2?.[_v0]?.[_v3];
      if (_v5?.tagsUnresolved || _v5?.tagsResolved) return _v5.tagsUnresolved ?? _v5.tagsResolved;
      let _v6 = _v2?.[_v0]?.[_v16.FALLBACK_LOCALE]?.tagsUnresolved ?? _v2?.[_v0]?.[_v16.FALLBACK_LOCALE]?.tagsResolved ?? (_v4 === _v16.FALLBACK_LOCALE ? _v1 : void 0);
      return (0, _v16.getLocalizedStockPageCopy)(_v6, _v3) ?? _v1;
    },
    _v21 = () => {
      let {
          patchLeadCapture: _v0
        } = (0, _v15.usePatchLeadCapture)(),
        _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.selectedLanguage);
      return (0, _v2.useCallback)((_v0, _v1, _v2 = "") => {
        if (_v1 === _v17.useGlobalStore.getState().leadCapture.defaultLocale) return void _v0(`${_v0}.tagsUnresolved`, _v2);
        let {
          htmlLocalizations: _v3
        } = _v17.useGlobalStore.getState().leadCapture;
        _v2 !== _v3?.[_v0]?.[_v1]?.tagsUnresolved && _v0(_v18.HTML_LOCALIZATIONS_KEY, (0, _v16.setLocalizedPageCopy)(_v3, _v0, _v1, _v2));
      }, [_v0, _v1]);
    };
  var _v22 = _v0.i(0);
  let _v23 = (0, _v2.forwardRef)((_v0, _v1) => (0, _v1.jsxs)("svg", {
      ref: _v1,
      width: "33",
      height: "32",
      viewBox: "0 0 33 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ..._v0,
      children: [(0, _v1.jsx)("path", {
        d: "M32 10.0104C32 9.62815 32 9.24593 31.9985 8.8637C31.997 8.54222 31.9926 8.21926 31.9837 7.89778C31.9644 7.19704 31.923 6.48889 31.7985 5.79556C31.6726 5.09185 31.4652 4.43704 31.1393 3.79704C30.8193 3.16889 30.4015 2.59407 29.9037 2.09481C29.4044 1.59704 28.8311 1.17926 28.2015 0.859259C27.563 0.533333 26.9082 0.327407 26.2044 0.201481C25.5111 0.077037 24.803 0.0355556 24.1022 0.0162963C23.7807 0.00740741 23.4578 0.00444444 23.1363 0.00148148C22.7541 0 22.3719 0 21.9896 0H10.0104C9.62815 0 9.24593 0 8.8637 0.00148148C8.54222 0.00296296 8.21926 0.00740741 7.89778 0.0162963C7.19704 0.0355556 6.48889 0.077037 5.79556 0.201481C5.09185 0.327407 4.43704 0.534815 3.79852 0.859259C3.17037 1.17926 2.59407 1.59704 2.0963 2.09481C1.59704 2.59407 1.18074 3.16741 0.860741 3.79704C0.534815 4.43704 0.328889 5.09185 0.201481 5.79556C0.0770371 6.48889 0.0355556 7.19704 0.0177778 7.89778C0.00888889 8.21926 0.00444444 8.54222 0.00296296 8.8637C0 9.24593 0 9.62815 0 10.0104V21.9896C0 22.3719 0 22.7541 0.00296296 23.1363C0.00444444 23.4578 0.00888889 23.7807 0.0177778 24.1022C0.037037 24.803 0.0785185 25.5111 0.202963 26.2044C0.328889 26.9081 0.536296 27.5644 0.862222 28.203C1.18222 28.8311 1.6 29.4059 2.09778 29.9037C2.59556 30.403 3.17037 30.8207 3.8 31.1407C4.43852 31.4667 5.09333 31.6726 5.79704 31.7985C6.49037 31.923 7.19852 31.9644 7.89926 31.9837C8.22074 31.9926 8.5437 31.9956 8.86519 31.9985C9.24741 32 9.62963 32 10.0119 32H21.9911C22.3733 32 22.7556 32 23.1378 31.9985C23.4593 31.997 23.7822 31.9926 24.1037 31.9837C24.8044 31.9644 25.5126 31.923 26.2059 31.7985C26.9096 31.6726 27.5644 31.4652 28.203 31.1407C28.8311 30.8207 29.4059 30.403 29.9052 29.9037C30.4044 29.4059 30.8207 28.8311 31.1407 28.203C31.4667 27.563 31.6726 26.9081 31.8 26.2044C31.9244 25.5111 31.9659 24.8044 31.9852 24.1022C31.9941 23.7807 31.997 23.4578 32 23.1363C32.0015 22.7541 32.0015 22.3719 32.0015 21.9896V10.0104H32Z",
        fill: "white"
      }), (0, _v1.jsx)("path", {
        d: "M11.9441 26.179V11.2915H11.319L7.52637 13.8026V14.4382L11.276 11.9834H11.3204V26.1804H11.9441V26.179Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        d: "M15.6494 11.2915V11.8619H23.8272V11.9063L17.2598 26.1804H17.962L24.4746 11.8945V11.2915H15.6494Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        d: "M5.8143 8.3721V5.15284H5.82615L7.09875 8.04321H7.52098L8.78913 5.15284H8.80395V8.3721H9.22617V4.1084H8.77876L7.31801 7.5247H7.30616L5.84096 4.10988H5.39355V8.3721H5.8143V8.3721Z",
        fill: "#FF0000"
      }), (0, _v1.jsx)("path", {
        d: "M11.5209 5.0459C10.6306 5.0459 10.1357 5.6933 10.1357 6.57033V6.89181C10.1357 7.77329 10.6261 8.42365 11.5209 8.42365C12.4143 8.42365 12.9017 7.77329 12.9017 6.89181V6.57033C12.9032 5.6933 12.4084 5.0459 11.5209 5.0459ZM11.5209 5.44886C12.1017 5.44886 12.4424 5.88293 12.4424 6.59255V6.86811C12.4424 7.5807 12.1017 8.01477 11.5209 8.01477C10.9358 8.01477 10.5965 7.57773 10.5965 6.86811V6.59255C10.5965 5.88441 10.9372 5.44886 11.5209 5.44886Z",
        fill: "#FF0000"
      }), (0, _v1.jsx)("path", {
        d: "M13.7627 8.37188H14.222V6.36742C14.222 5.89927 14.4783 5.46668 15.0783 5.46668C15.5908 5.46668 15.9197 5.77631 15.9197 6.33483V8.36892H16.379V6.2652C16.379 5.47112 15.8753 5.04297 15.2012 5.04297C14.6634 5.04297 14.3568 5.32445 14.2353 5.54371H14.222V5.0963H13.7627V8.37188Z",
        fill: "#FF0000"
      }), (0, _v1.jsx)("path", {
        d: "M18.4932 5.04308C17.6799 5.04308 17.1836 5.67715 17.1836 6.56456V6.89937C17.1836 7.80307 17.6429 8.42084 18.4932 8.42084C18.9629 8.42084 19.2991 8.18381 19.474 7.86085H19.4858V8.37047H19.9199V3.88013H19.4606V5.56753H19.4488C19.2903 5.28456 18.9525 5.04308 18.4932 5.04308ZM18.5347 5.45345C19.1154 5.45345 19.4725 5.90975 19.4725 6.5853V6.889C19.4725 7.5927 19.1258 8.01344 18.5406 8.01344C18.0221 8.01344 17.6443 7.63566 17.6443 6.88604V6.58974C17.6429 5.8253 18.028 5.45345 18.5347 5.45345Z",
        fill: "#FF0000"
      }), (0, _v1.jsx)("path", {
        d: "M22.7626 7.94662H22.7745V8.3718H23.2219V6.09626C23.2219 5.42367 22.7286 5.0459 22.0471 5.0459C21.2885 5.0459 20.8974 5.44293 20.8589 6.01182H21.2929C21.33 5.66515 21.5774 5.44293 22.0278 5.44293C22.493 5.44293 22.7626 5.69034 22.7626 6.14959V6.50218H21.8722C21.1255 6.50515 20.7314 6.86811 20.7314 7.43403C20.7314 8.03403 21.1655 8.42513 21.8011 8.42513C22.3004 8.42365 22.6056 8.20884 22.7626 7.94662ZM21.9093 8.0281C21.5404 8.0281 21.2055 7.83106 21.2055 7.42514C21.2055 7.10662 21.4085 6.87848 21.887 6.87848H22.7626V7.28144C22.7626 7.72143 22.3967 8.0281 21.9093 8.0281Z",
        fill: "#FF0000"
      }), (0, _v1.jsx)("path", {
        d: "M26.6062 5.09912H26.1158L25.181 7.8369H25.1647L24.2299 5.09912H23.7188L24.941 8.42356L24.8787 8.62356C24.7825 8.96134 24.6165 9.15838 24.2313 9.15838C24.1602 9.15838 24.0432 9.14949 23.9913 9.13912V9.53023C24.0728 9.54208 24.1943 9.55542 24.3039 9.55542C24.941 9.55542 25.1602 9.11838 25.3321 8.64579L25.4254 8.40134L26.6062 5.09912Z",
        fill: "#FF0000"
      })]
    })),
    _v24 = (0, _v2.forwardRef)((_v0, _v1) => (0, _v1.jsxs)("svg", {
      ref: _v1,
      width: "33",
      height: "32",
      viewBox: "0 0 33 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ..._v0,
      children: [(0, _v1.jsx)("path", {
        d: "M24.4886 7.5791H7.64648V24.4212H24.4886V7.5791Z",
        fill: "white"
      }), (0, _v1.jsx)("path", {
        d: "M24.4883 31.9998L32.0672 24.4209H24.4883V31.9998Z",
        fill: "#EA4335"
      }), (0, _v1.jsx)("path", {
        d: "M32.0672 7.5791H24.4883V24.4212H32.0672V7.5791Z",
        fill: "#FBBC04"
      }), (0, _v1.jsx)("path", {
        d: "M24.4886 24.4209H7.64648V31.9998H24.4886V24.4209Z",
        fill: "#00ADEF"
      }), (0, _v1.jsx)("path", {
        d: "M0.0664062 24.4209V29.4735C0.0664062 30.8693 1.19693 31.9998 2.59272 31.9998H7.64535V24.4209H0.0664062Z",
        fill: "#00ADEF"
      }), (0, _v1.jsx)("path", {
        d: "M32.0672 7.57895V2.52632C32.0672 1.13053 30.9367 0 29.5409 0H24.4883V7.57895H32.0672Z",
        fill: "#1967D2"
      }), (0, _v1.jsx)("path", {
        d: "M24.4875 0H2.59272C1.19693 0 0.0664062 1.13053 0.0664062 2.52632V24.4211H7.64535V7.57895H24.4875V0Z",
        fill: "#4285F4"
      }), (0, _v1.jsx)("path", {
        d: "M11.1 20.6439C10.4706 20.2186 10.0348 19.5976 9.79688 18.7765L11.2579 18.1744C11.3906 18.6797 11.6221 19.0713 11.9527 19.3491C12.2811 19.627 12.6811 19.7639 13.1485 19.7639C13.6264 19.7639 14.0369 19.6186 14.38 19.3281C14.7232 19.0376 14.8958 18.667 14.8958 18.2186C14.8958 17.7597 14.7148 17.3849 14.3527 17.0944C13.9906 16.8039 13.5358 16.6586 12.9927 16.6586H12.1485V15.2123H12.9063C13.3737 15.2123 13.7674 15.086 14.0874 14.8334C14.4074 14.5807 14.5674 14.2355 14.5674 13.7955C14.5674 13.4039 14.4242 13.0923 14.1379 12.8586C13.8516 12.6249 13.4895 12.507 13.0495 12.507C12.62 12.507 12.279 12.6207 12.0263 12.8502C11.7739 13.0803 11.5841 13.3708 11.4748 13.6944L10.0285 13.0923C10.22 12.5491 10.5716 12.0691 11.0874 11.6544C11.6032 11.2397 12.2621 11.0312 13.0621 11.0312C13.6537 11.0312 14.1863 11.1449 14.6579 11.3744C15.1295 11.6039 15.5 11.9218 15.7674 12.326C16.0348 12.7323 16.1674 13.187 16.1674 13.6923C16.1674 14.2081 16.0432 14.6439 15.7948 15.0018C15.5463 15.3597 15.2411 15.6334 14.879 15.8249V15.9113C15.3465 16.104 15.7527 16.4206 16.0537 16.827C16.359 17.2376 16.5127 17.7281 16.5127 18.3007C16.5127 18.8734 16.3674 19.3849 16.0769 19.8334C15.7863 20.2818 15.3842 20.6355 14.8748 20.8923C14.3632 21.1491 13.7885 21.2797 13.1506 21.2797C12.4116 21.2818 11.7295 21.0691 11.1 20.6439V20.6439ZM20.0748 13.3934L18.4706 14.5534L17.6685 13.3365L20.5463 11.2607H21.6495V21.0523H20.0748V13.3934Z",
        fill: "#4285F4"
      })]
    })),
    _v25 = (0, _v2.forwardRef)((_v0, _v1) => (0, _v1.jsxs)("svg", {
      ref: _v1,
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ..._v0,
      children: [(0, _v1.jsx)("path", {
        d: "M31.9989 16.8661C32.0006 16.6139 31.8713 16.3792 31.658 16.2473H31.6543L31.6409 16.2398L20.5526 9.62485C20.5047 9.59225 20.455 9.56245 20.4037 9.53561C19.9756 9.313 19.467 9.313 19.0389 9.53561C18.9876 9.56246 18.9379 9.59225 18.8901 9.62485L7.80176 16.2398L7.78838 16.2473C7.44948 16.4597 7.34559 16.9088 7.55633 17.2503C7.61842 17.3509 7.70395 17.4348 7.80548 17.4946L18.8938 24.1095C18.9419 24.1418 18.9915 24.1716 19.0427 24.1988C19.4708 24.4214 19.9793 24.4214 20.4075 24.1988C20.4586 24.1716 20.5083 24.1419 20.5563 24.1095L31.6447 17.4946C31.8662 17.3644 32.0014 17.1245 31.9989 16.8661Z",
        fill: "#0A2767"
      }), (0, _v1.jsx)("path", {
        d: "M9.09526 12.4494H16.3719V19.1716H9.09526V12.4494ZM30.5114 5.6162V2.5412C30.5289 1.77238 29.9251 1.13463 29.1622 1.11621H10.2793C9.51641 1.13463 8.91258 1.77238 8.93006 2.5412V5.6162L20.0928 8.61618L30.5114 5.6162Z",
        fill: "#0364B8"
      }), (0, _v1.jsx)("path", {
        d: "M8.92969 5.61597H16.3716V12.3659H8.92969V5.61597Z",
        fill: "#0078D4"
      }), (0, _v1.jsx)("path", {
        d: "M23.8129 5.61597H16.3711V12.3659L23.8129 19.1159H30.5106V12.3659L23.8129 5.61597Z",
        fill: "#28A8EA"
      }), (0, _v1.jsx)("path", {
        d: "M16.3711 12.3665H23.8129V19.1164H16.3711V12.3665Z",
        fill: "#0078D4"
      }), (0, _v1.jsx)("path", {
        d: "M16.3711 19.116H23.8129V25.8659H16.3711V19.116Z",
        fill: "#0364B8"
      }), (0, _v1.jsx)("path", {
        d: "M9.09473 19.1721H16.3714V25.2831H9.09473V19.1721Z",
        fill: "#14447D"
      }), (0, _v1.jsx)("path", {
        d: "M23.8135 19.116H30.5111V25.8659H23.8135V19.116Z",
        fill: "#0078D4"
      }), (0, _v1.jsx)("path", {
        d: "M31.6587 17.4535L31.6446 17.461L20.5562 23.7459C20.5078 23.7759 20.4587 23.8044 20.4073 23.8299C20.219 23.9203 20.0145 23.9713 19.806 23.9799L19.2003 23.6229C19.1491 23.597 19.0994 23.5682 19.0514 23.5367L7.81424 17.0732H7.80903L7.44141 16.8662V29.5891C7.44714 30.438 8.13438 31.1215 8.97665 31.1161H30.4881C30.5007 31.1161 30.5119 31.1101 30.5253 31.1101C30.7032 31.0987 30.8786 31.0618 31.0462 31.0006C31.1186 30.9697 31.1886 30.9331 31.2553 30.8911C31.3052 30.8626 31.3908 30.8004 31.3908 30.8004C31.772 30.5161 31.9976 30.0671 31.9995 29.5892V16.8662C31.9993 17.1096 31.869 17.3339 31.6587 17.4535Z",
        fill: "url(#paint0_linear_3907_433502)"
      }), (0, _v1.jsx)("path", {
        opacity: "0.5",
        d: "M31.4042 16.8162V17.5962L19.8098 25.6414L7.8061 17.0787C7.8061 17.0746 7.80276 17.0712 7.79865 17.0712L6.69727 16.4037V15.8412L7.15122 15.8337L8.11121 16.3887L8.13353 16.3962L8.21539 16.4487C8.21539 16.4487 19.4972 22.9362 19.527 22.9512L19.9586 23.2062C19.9958 23.1912 20.033 23.1762 20.0777 23.1612C20.1 23.1462 31.2777 16.8087 31.2777 16.8087L31.4042 16.8162Z",
        fill: "#0A2767"
      }), (0, _v1.jsx)("path", {
        d: "M31.6587 17.4535L31.6445 17.4617L20.5562 23.7467C20.5078 23.7767 20.4587 23.8052 20.4073 23.8307C19.9767 24.0427 19.4731 24.0427 19.0425 23.8307C18.9915 23.8052 18.9418 23.7772 18.8936 23.7467L7.80531 17.4617L7.79192 17.4535C7.57784 17.3365 7.44363 17.1116 7.44141 16.8662V29.5892C7.44674 30.4379 8.13373 31.1215 8.97585 31.1162C8.97587 31.1162 8.97588 31.1162 8.97592 31.1162H30.465C31.3071 31.1216 31.9942 30.4379 31.9995 29.5892C31.9995 29.5892 31.9995 29.5892 31.9995 29.5892V16.8662C31.9992 17.1096 31.869 17.3339 31.6587 17.4535Z",
        fill: "#1490DF"
      }), (0, _v1.jsx)("path", {
        opacity: "0.1",
        d: "M20.7181 23.6541L20.5521 23.7478C20.504 23.7787 20.4543 23.807 20.4033 23.8326C20.2204 23.923 20.0216 23.976 19.8184 23.9885L24.0371 29.0165L31.3964 30.8038C31.5981 30.6503 31.7585 30.4484 31.863 30.2165L20.7181 23.6541Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        opacity: "0.05",
        d: "M21.4697 23.228L20.5521 23.7478C20.504 23.7786 20.4543 23.8069 20.4033 23.8325C20.2204 23.923 20.0216 23.976 19.8184 23.9885L21.7949 29.4807L31.3986 30.8015C31.777 30.5152 31.9997 30.0663 31.9999 29.5895V29.4252L21.4697 23.228Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        d: "M8.99675 31.1162H30.4628C30.7931 31.1179 31.1152 31.0128 31.3818 30.8162L19.1995 23.6245C19.1483 23.5986 19.0986 23.5698 19.0507 23.5382L7.81349 17.0747H7.80828L7.44141 16.8662V29.5457C7.44057 30.4123 8.13692 31.1154 8.99675 31.1162C8.99673 31.1162 8.99673 31.1162 8.99675 31.1162Z",
        fill: "#28A8EA"
      }), (0, _v1.jsx)("path", {
        opacity: "0.1",
        d: "M17.86 8.49046V24.4879C17.8587 25.0488 17.5203 25.553 17.0042 25.7629C16.8443 25.8322 16.6721 25.8679 16.4981 25.8679H7.44141V7.86571H8.92978V7.11572H16.4982C17.25 7.11859 17.8584 7.73278 17.86 8.49046Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        opacity: "0.2",
        d: "M17.1159 9.24053V25.238C17.1177 25.4191 17.0796 25.5985 17.0042 25.763C16.7976 26.2763 16.3037 26.6132 15.754 26.6157H7.44141V7.86579H15.754C15.9699 7.8636 16.1827 7.91788 16.3717 8.02329C16.8279 8.25492 17.1157 8.72573 17.1159 9.24053Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        opacity: "0.2",
        d: "M17.1158 9.24053V23.738C17.1122 24.4954 16.5054 25.1092 15.754 25.1158H7.44141V7.86579H15.754C15.9699 7.8636 16.1827 7.91788 16.3716 8.02329C16.8278 8.25492 17.1157 8.72573 17.1158 9.24053Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        opacity: "0.2",
        d: "M16.3717 9.24046V23.7379C16.3709 24.4964 15.7624 25.112 15.0098 25.1157H7.44141V7.86572H15.0098C15.7624 7.86613 16.3721 8.4813 16.3717 9.23972C16.3717 9.23997 16.3717 9.24022 16.3717 9.24046Z",
        fill: "black"
      }), (0, _v1.jsx)("path", {
        d: "M1.36409 7.86572H15.008C15.7614 7.86572 16.3721 8.48123 16.3721 9.24046V22.9909C16.3721 23.7502 15.7614 24.3657 15.008 24.3657H1.36409C0.610717 24.3657 0 23.7502 0 22.9909V9.24046C0 8.48123 0.610735 7.86572 1.36409 7.86572Z",
        fill: "url(#paint1_linear_3907_433502)"
      }), (0, _v1.jsx)("path", {
        d: "M4.26242 13.6322C4.59862 12.9103 5.14129 12.3062 5.82075 11.8975C6.57322 11.4633 7.42996 11.2469 8.29666 11.272C9.09995 11.2544 9.89259 11.4596 10.588 11.8652C11.2419 12.2582 11.7685 12.834 12.1039 13.5227C12.4692 14.2816 12.6513 15.1169 12.6353 15.9602C12.653 16.8416 12.4656 17.7149 12.0883 18.5102C11.7448 19.2236 11.2015 19.8199 10.5255 20.2254C9.80327 20.6435 8.9812 20.8541 8.14857 20.8344C7.32813 20.8544 6.51801 20.6468 5.80662 20.2344C5.14711 19.841 4.6139 19.2645 4.27062 18.5739C3.90313 17.826 3.7189 17.0002 3.73332 16.1657C3.71801 15.2918 3.89889 14.4258 4.26242 13.6322ZM5.92344 17.7047C6.10269 18.1611 6.40667 18.5569 6.80009 18.8462C7.20081 19.1285 7.68065 19.2741 8.16939 19.2617C8.68987 19.2824 9.20292 19.1319 9.63097 18.8327C10.0194 18.5443 10.3154 18.1474 10.4823 17.6912C10.6689 17.1817 10.761 16.642 10.7539 16.099C10.7597 15.5507 10.6732 15.0055 10.4979 14.4865C10.3432 14.0179 10.0567 13.6046 9.67339 13.297C9.25606 12.9836 8.7444 12.8247 8.22445 12.847C7.72513 12.8339 7.23454 12.9807 6.82316 13.2662C6.42308 13.5568 6.11334 13.9561 5.93014 14.4175C5.52373 15.4751 5.52162 16.6471 5.92418 17.7062L5.92344 17.7047Z",
        fill: "white"
      }), (0, _v1.jsx)("path", {
        d: "M23.8135 5.61597H30.5111V12.3659H23.8135V5.61597Z",
        fill: "#50D9FF"
      }), (0, _v1.jsxs)("defs", {
        children: [(0, _v1.jsxs)("linearGradient", {
          id: "paint0_linear_3907_433502",
          x1: "19.7205",
          y1: "16.8662",
          x2: "19.7205",
          y2: "31.1162",
          gradientUnits: "userSpaceOnUse",
          children: [(0, _v1.jsx)("stop", {
            stopColor: "#35B8F1"
          }), (0, _v1.jsx)("stop", {
            offset: "1",
            stopColor: "#28A8EA"
          })]
        }), (0, _v1.jsxs)("linearGradient", {
          id: "paint1_linear_3907_433502",
          x1: "2.84417",
          y1: "6.79153",
          x2: "13.6531",
          y2: "25.3671",
          gradientUnits: "userSpaceOnUse",
          children: [(0, _v1.jsx)("stop", {
            stopColor: "#1784D9"
          }), (0, _v1.jsx)("stop", {
            offset: "0.5",
            stopColor: "#107AD5"
          }), (0, _v1.jsx)("stop", {
            offset: "1",
            stopColor: "#0A63C9"
          })]
        })]
      })]
    }));
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = () => {
      let _v0 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.isEventDateVisible),
        _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.entity.schedule),
        _v2 = (0, _v28.fromISO)(_v1?.startTime),
        _v3 = (0, _v28.fromISO)(_v1?.endTime),
        _v4 = (0, _v28.isSameDate)(new Date(_v1?.startTime || ""), new Date(_v1?.endTime || "")),
        _v5 = (0, _v22.useViewerStrings)(),
        _v6 = (0, _v14.useFormLocale)(),
        _v7 = (0, _v30.useLocale)(),
        _v8 = _v6 === _v29.Locales.en ? _v7 : _v6,
        _v9 = (0, _v17.useGlobalStore)(_v0 => _v0.setSelectedNonEditableField);
      return _v0 && _v2.isValid && _v1 ? (0, _v1.jsx)(_v31.StylableNonEditText, {
        fieldName: _v26.NON_EDIT_FIELDS.EVENT_DATE,
        children: _v4 ? (0, _v1.jsxs)(_v33, {
          size: "6",
          onClick: () => _v9(_v26.NON_EDIT_FIELDS.EVENT_DATE),
          children: [`${(0, _v28.formatLongDate)(_v2, _v8)} `, (0, _v1.jsxs)("div", {
            children: [(0, _v1.jsx)("span", {
              children: (0, _v28.formatTime)(_v2, _v8)
            }), _v3.isValid ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)("span", {
                children: " - "
              }), (0, _v1.jsx)("span", {
                children: (0, _v28.formatTime)(_v3, _v8)
              }), (0, _v1.jsx)("span", {
                children: ` ${(0, _v28.getTimeZone)(_v8)}`
              })]
            }) : (0, _v1.jsx)("span", {
              children: ` ${(0, _v28.getTimeZone)(_v8)}`
            })]
          })]
        }) : (0, _v1.jsxs)(_v33, {
          size: "6",
          onClick: () => _v9(_v26.NON_EDIT_FIELDS.EVENT_DATE),
          children: [_v5.dateAtTime((0, _v28.formatLongDate)(_v2, _v8), (0, _v28.formatTime)(_v2, _v8)), (0, _v1.jsx)("span", {
            children: ` ${(0, _v28.getTimeZone)(_v8)}`
          }), _v3.isValid && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)("div", {
              children: _v5.To
            }), (0, _v1.jsx)("span", {
              children: _v5.dateAtTime((0, _v28.formatLongDate)(_v3, _v8), (0, _v28.formatTime)(_v3, _v8))
            }), (0, _v1.jsx)("span", {
              children: ` ${(0, _v28.getTimeZone)(_v8)}`
            })]
          })]
        })
      }) : null;
    },
    _v33 = _v0 => (0, _v1.jsx)(_v27.Header, {
      mb: "sm",
      fontSize: "body-lg",
      fontWeight: "bold",
      size: "xl",
      ..._v0,
      children: _v0.children
    });
  var _v34 = _v0.i(0);
  let _v35 = _v34.Mark.create({
      name: "textStyle",
      priority: 101,
      addOptions: () => ({
        HTMLAttributes: {},
        mergeNestedSpanStyles: !1
      }),
      parseHTML() {
        return [{
          tag: "span",
          getAttrs: _v0 => !!_v0.hasAttribute("style") && (this.options.mergeNestedSpanStyles && (_v0 => {
            if (!_v0.children.length) return;
            let _v1 = _v0.querySelectorAll("span");
            _v1 && _v1.forEach(_v0 => {
              var _v1, _v2;
              let _v3 = _v0.getAttribute("style"),
                _v4 = null == (_v2 = null == (_v1 = _v0.parentElement) ? void 0 : _v1.closest("span")) ? void 0 : _v2.getAttribute("style");
              _v0.setAttribute("style", `${_v4};${_v3}`);
            });
          })(_v0), {})
        }];
      },
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["span", (0, _v34.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          removeEmptyTextStyle: () => ({
            tr: _v0
          }) => {
            let {
              selection: _v1
            } = _v0;
            return _v0.doc.nodesBetween(_v1.from, _v1.to, (_v0, _v1) => {
              if (_v0.isTextblock) return !0;
              _v0.marks.filter(_v0 => _v0.type === this.type).some(_v0 => Object.values(_v0.attrs).some(_v0 => !!_v0)) || _v0.removeMark(_v1, _v1 + _v0.nodeSize, this.type);
            }), !0;
          }
        };
      }
    }),
    _v36 = _v34.Extension.create({
      name: "fontFamily",
      addOptions: () => ({
        types: ["textStyle"]
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.types,
          attributes: {
            fontFamily: {
              default: null,
              parseHTML: _v0 => _v0.style.fontFamily,
              renderHTML: _v0 => _v0.fontFamily ? {
                style: `font-family: ${_v0.fontFamily}`
              } : {}
            }
          }
        }];
      },
      addCommands: () => ({
        setFontFamily: _v0 => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          fontFamily: _v0
        }).run(),
        unsetFontFamily: () => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          fontFamily: null
        }).removeEmptyTextStyle().run()
      })
    });
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
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
    _v52 = _v0.i(0);
  let _v53 = ({
    editor: _v0,
    position: _v1,
    disabled: _v2 = !1
  }) => {
    let _v3 = _v0?.getAttributes("link").href,
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(_v3),
      [_v8, _v9] = (0, _v2.useState)(!1),
      _v10 = (0, _v2.useRef)(null);
    return ((0, _v2.useEffect)(() => {
      _v7(_v3), _v5(!1);
    }, [_v3, _v7]), void 0 == _v1 || _v2) ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v3.Box, {
      position: "fixed",
      top: _v1.top,
      left: _v1.left,
      zIndex: 100,
      children: [(0, _v1.jsxs)(_v4.Flex, {
        mb: (0, _v10.rem)(10),
        p: "xs",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "shadow-sm",
        background: "background",
        border: `${(0, _v10.rem)(1)} solid`,
        borderColor: "surface",
        borderRadius: "sm",
        opacity: +!!_v4,
        children: [(0, _v1.jsx)(_v43.Input, {
          mr: "sm",
          fontSize: "body-lg",
          ref: _v10,
          onChange: _v0 => {
            let _v1 = _v0.target.value;
            _v7((0, _v7.isValidUrl)((0, _v7.appendProtocol)(_v1)) ? (0, _v7.appendProtocol)(_v1) : _v1);
          },
          value: _v6,
          placeholder: _v52.default.AddALink,
          size: "sm",
          onFocus: () => _v9(!0),
          onBlur: () => _v9(!1),
          isInvalid: _v6?.length && !(0, _v7.isValidUrl)(_v6) && !_v8
        }), _v6 !== _v3 || void 0 == _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v42.IconButton, {
            onClick: () => _v5(!1),
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v46.CloseXSmall, {}),
            "aria-label": "Close"
          }), (0, _v1.jsx)(_v42.IconButton, {
            onClick: () => {
              _v0?.chain().focus().setLink({
                href: _v6
              }).run(), _v5(!1);
            },
            isDisabled: !(0, _v7.isValidUrl)(_v6),
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v45.Checkmark, {}),
            "aria-label": "Link"
          })]
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v42.IconButton, {
            variant: "tertiary",
            onClick: () => {
              _v0?.chain().focus().unsetLink().run(), _v5(!1), _v7("");
            },
            size: "sm",
            "aria-label": "Unlink",
            icon: (0, _v1.jsx)(_v49.LinkBroken, {})
          }), (0, _v1.jsx)(_v42.IconButton, {
            onClick: () => {
              window.open(_v3, "_blank");
            },
            size: "sm",
            "aria-label": "Open",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v50.PopOut, {})
          })]
        })]
      }), (0, _v1.jsxs)(_v4.Flex, {
        width: (0, _v10.rem)(190),
        justifyContent: "space-around",
        background: "background",
        border: `${(0, _v10.rem)(1)} solid`,
        borderColor: "surface",
        borderRadius: "sm",
        boxShadow: "shadow-sm",
        py: "xs",
        children: [(0, _v1.jsx)(_v42.IconButton, {
          variant: _v0?.isActive("bold") ? "secondary" : "tertiary",
          onClick: () => {
            _v0?.chain().focus().toggleBold().run(), _v5(!1);
          },
          "aria-label": "Bold",
          icon: (0, _v1.jsx)(_v44.Bold, {})
        }), (0, _v1.jsx)(_v42.IconButton, {
          variant: _v0?.isActive("italic") ? "secondary" : "tertiary",
          onClick: () => {
            _v0?.chain().focus().toggleItalic().run(), _v5(!1);
          },
          "aria-label": "Italic",
          icon: (0, _v1.jsx)(_v47.Italic, {})
        }), (0, _v1.jsx)(_v42.IconButton, {
          variant: _v0?.isActive("underline") ? "secondary" : "tertiary",
          onClick: () => {
            _v0?.chain().focus().toggleUnderline().run(), _v5(!1);
          },
          "aria-label": "Underline",
          icon: (0, _v1.jsx)(_v51.Underline, {})
        }), (0, _v1.jsx)(_v42.IconButton, {
          variant: _v0?.isActive("link") ? "secondary" : "tertiary",
          onClick: () => {
            _v5(!_v4), setTimeout(() => {
              _v10?.current?.focus();
            }, 0);
          },
          "aria-label": "Link",
          icon: (0, _v1.jsx)(_v48.Link, {})
        })]
      })]
    });
  };
  var _v54 = _v10;
  let _v55 = ({
    children: _v0,
    padding: _v1 = (0, _v54.rem)(4),
    lineHeight: _v2 = 1.2,
    borderRadius: _v3 = (0, _v54.rem)(5),
    border: _v4 = `${(0, _v54.rem)(2)} solid`,
    borderColor: _v5,
    onKeyDown: _v6,
    editor: _v7,
    ..._v8
  }) => (0, _v1.jsx)(_v3.Box, {
    as: _v38.EditorContent,
    sx: {
      "> div": {
        outline: "none",
        padding: _v1,
        lineHeight: _v2,
        borderRadius: _v3
      },
      ul: {
        listStyleType: "disc",
        paddingLeft: (0, _v54.rem)(25)
      },
      ol: {
        listStyleType: "decimal",
        paddingLeft: (0, _v54.rem)(25)
      },
      a: {
        textDecoration: "underline"
      },
      border: _v4,
      borderColor: _v5 ?? _v8.isFocused ? "blue.500" : "transparent",
      borderRadius: _v3,
      listStyle: "revert"
    },
    width: "100%",
    _hover: {
      borderColor: _v8.$showColorOnHover ? "blue.500" : ""
    },
    onKeyDown: _v6,
    editor: _v7,
    ..._v8,
    children: _v0
  });
  var _v56 = _v26,
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = _v34.Extension.create({
      name: "pasteHandler",
      addOptions: () => ({
        stripStyles: !1
      }),
      addProseMirrorPlugins() {
        return [new _v58.Plugin({
          key: new _v58.PluginKey("pasteHandler"),
          props: {
            handlePaste: (_v0, _v1) => {
              if (this.options.stripStyles) {
                _v1.preventDefault();
                let _v0 = _v1.clipboardData,
                  _v1 = _v0?.getData("text/plain") || "";
                if (_v1) {
                  let {
                      state: _v0,
                      dispatch: _v1
                    } = _v0,
                    {
                      tr: _v2
                    } = _v0;
                  return _v1(_v2.insertText(_v1)), !0;
                }
              }
              return !1;
            }
          }
        })];
      }
    }),
    _v60 = _v34.Mark.create({
      name: "underline",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML: () => [{
        tag: "u"
      }, {
        style: "text-decoration",
        consuming: !1,
        getAttrs: _v0 => !!_v0.includes("underline") && {}
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["u", (0, _v34.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          setUnderline: () => ({
            commands: _v0
          }) => _v0.setMark(this.name),
          toggleUnderline: () => ({
            commands: _v0
          }) => _v0.toggleMark(this.name),
          unsetUnderline: () => ({
            commands: _v0
          }) => _v0.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-u": () => this.editor.commands.toggleUnderline(),
          "Mod-U": () => this.editor.commands.toggleUnderline()
        };
      }
    }),
    _v61 = _v34.Extension.create({
      name: "color",
      addOptions: () => ({
        types: ["textStyle"]
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.types,
          attributes: {
            color: {
              parseHTML: _v0 => _v0.style.color,
              renderHTML: _v0 => _v0.color ? {
                style: `color: ${_v0.color}`
              } : {}
            }
          }
        }];
      },
      addCommands: () => ({
        setColor: _v0 => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          color: _v0
        }).run(),
        unsetColor: () => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          color: null
        }).removeEmptyTextStyle().run()
      })
    }),
    _v62 = _v34.Extension.create({
      name: "fontSize",
      addOptions: () => ({
        types: ["textStyle"]
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.types,
          attributes: {
            fontSize: {
              default: null,
              parseHTML: _v0 => _v0.style.fontSize.replace(/['"]+/g, ""),
              renderHTML: _v0 => _v0.fontSize ? {
                style: `font-size: ${_v0.fontSize}`
              } : {}
            }
          }
        }];
      },
      addCommands: () => ({
        setFontSize: _v0 => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          fontSize: _v0
        }).run(),
        unsetFontSize: () => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          fontSize: null
        }).removeEmptyTextStyle().run()
      })
    }),
    _v63 = _v34.Extension.create({
      name: "textAlign",
      addOptions: () => ({
        types: [],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "inherit"
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.types,
          attributes: {
            textAlign: {
              default: this.options.defaultAlignment,
              parseHTML: _v0 => _v0.style.textAlign || this.options.defaultAlignment,
              renderHTML: _v0 => _v0.textAlign === this.options.defaultAlignment ? {
                style: "text-align: inherit"
              } : {
                style: `text-align: ${_v0.textAlign}`
              }
            }
          }
        }];
      },
      addCommands() {
        return {
          setTextAlign: _v0 => ({
            commands: _v0
          }) => !!this.options.alignments.includes(_v0) && this.options.types.every(_v0 => _v0.updateAttributes(_v0, {
            textAlign: _v0
          })),
          unsetTextAlign: () => ({
            commands: _v0
          }) => this.options.types.every(_v0 => _v0.resetAttributes(_v0, "textAlign"))
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
          "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
          "Mod-Shift-r": () => this.editor.commands.setTextAlign("right")
        };
      }
    }),
    _v64 = _v34.Extension.create({
      name: "characterCount",
      addOptions: () => ({
        limit: _v26.RTF_STYLABLE_TEXT_DEFAULT_LIMIT
      }),
      addStorage: () => ({
        characters: () => 0
      }),
      onBeforeCreate() {
        this.storage.characters = _v0 => (_v0?.node || this.editor.state.doc).textContent.length;
      },
      addProseMirrorPlugins() {
        return [new _v58.Plugin({
          key: new _v58.PluginKey("characterCount"),
          filterTransaction: (_v0, _v1) => {
            let _v2 = this.options.limit;
            if (!_v0.docChanged || 0 === _v2 || null == _v2 || _v0.getMeta(_v26.CHARACTER_LIMIT_BYPASS_META)) return !0;
            let _v3 = this.storage.characters({
                node: _v1.doc
              }),
              _v4 = this.storage.characters({
                node: _v0.doc
              });
            if (_v4 <= _v2 || _v3 > _v2 && _v4 > _v2 && _v4 <= _v3) return !0;
            if (_v3 > _v2 && _v4 > _v2 && _v4 > _v3 || !_v0.getMeta("paste")) return !1;
            let _v5 = _v0.selection.$head.pos;
            return _v0.deleteRange(_v5 - (_v4 - _v2), _v5), this.storage.characters({
              node: _v0.doc
            }) <= _v2;
          }
        })];
      }
    }),
    _v65 = _v34.Extension.create({
      name: "no_new_line",
      addProseMirrorPlugins: () => [new _v58.Plugin({
        key: new _v58.PluginKey("eventHandler"),
        props: {
          handleKeyDown: (_v0, _v1) => {
            if (_v1.key === _v26.KEY_CODES.ENTER && !_v1.shiftKey) return !0;
          }
        }
      })]
    }),
    _v66 = (0, _v2.forwardRef)(({
      content: _v0,
      fontSize: _v1 = _v56.RTF_TEXT_SIZES_KEYS.regular,
      maxCharacter: _v2 = 0,
      overRideFontSize: _v3 = !1,
      onBlur: _v4 = () => void 0,
      onFocus: _v5 = () => void 0,
      saveChanges: _v6 = () => void 0
    }, _v7) => {
      let {
          currentPageType: _v8
        } = (0, _v2.useContext)(_v11.CurrentPageContext),
        [_v9, _v10] = (0, _v2.useState)(0),
        _v11 = (0, _v17.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v12 = (0, _v57.useRtfStore)(_v0 => _v0.setRtfType),
        _v13 = (0, _v57.useRtfStore)(_v0 => _v0.setSelected),
        _v14 = (0, _v57.useRtfStore)(_v0 => _v0.setCallback),
        {
          editor: _v15,
          setEditor: _v16
        } = (0, _v13.useRichTextContext)(),
        [_v17, _v18] = (0, _v2.useState)(void 0),
        _v19 = (0, _v2.useRef)(null),
        _v20 = (0, _v38.useEditor)({
          extensions: [_v39.default, _v35, _v36, _v60, _v61, _v37.default.configure({
            openOnClick: !1
          }), _v62, _v63.configure({
            types: ["heading", "paragraph"],
            alignments: ["left", "center", "right", "justify"]
          }), _v64.configure({
            limit: _v8 === _v56.PAGE_TYPES.ADMIN ? _v2 : 0
          })],
          content: `${_v40.default.sanitize(_v0, {
            ADD_ATTR: ["target"]
          })}`,
          onFocus: () => {
            _v5(), _v24();
          },
          onBlur: _v4,
          onSelectionUpdate: () => {
            _v22();
          },
          editable: !1
        }),
        _v21 = _v20 === _v15,
        _v22 = (0, _v2.useCallback)(() => {
          let _v0 = window.getSelection(),
            _v1 = _v0?.rangeCount ? _v0.getRangeAt(0) : null,
            _v2 = _v1?.cloneRange().getBoundingClientRect();
          void 0 == _v1 || void 0 == _v2 || _v1?.startOffset === _v1?.endOffset ? _v18(void 0) : _v18({
            top: _v2.top - 100,
            left: _v2.left - 100
          });
        }, []),
        _v23 = (0, _v2.useCallback)(_v0 => {
          _v20?.chain().insertContent(_v0).focus().run(), _v6();
        }, [_v20, _v6]),
        _v24 = (0, _v2.useCallback)(() => {
          _v11(_v56.SIDE_MENU_CONTENT.TEXT_RTF_STYLING), _v12("text"), _v16(_v20), _v13({
            textColor: "#FF00FE"
          }), _v14({
            onPersonalisedTag: _v23,
            onFontChange: _v6,
            onSizeChange: _v6,
            onStyleChange: _v6,
            onAlignChange: _v6,
            onBulletedList: _v6,
            onNumberedList: _v6,
            onTextColorChange: _v6
          });
        }, [_v20, _v23, _v6, _v14, _v16, _v12, _v13, _v11]);
      return (0, _v41.useOutsideClick)({
        ref: _v19,
        handler: () => _v18(void 0)
      }), (0, _v2.useEffect)(() => {
        _v3 || _v20?.chain().selectAll().setFontSize(_v56.RTF_TEXT_SIZES.find(_v0 => _v0.key === _v1)?.value || "16px").run();
      }, [_v20, _v1, _v3]), (0, _v2.useEffect)(() => {
        _v8 === _v56.PAGE_TYPES.ADMIN && _v20?.setOptions({
          editable: !0
        });
      }, [_v8, _v20]), (0, _v2.useImperativeHandle)(_v7, () => ({
        getHTML: () => _v20?.getHTML(),
        setHTML: _v0 => _v20?.chain().setMeta(_v56.CHARACTER_LIMIT_BYPASS_META, !0).setContent(_v0).run()
      })), (0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        width: "100%",
        ref: _v19,
        children: [(0, _v1.jsx)(_v53, {
          disabled: !_v21,
          editor: _v20,
          position: _v17
        }), (0, _v1.jsx)(_v55, {
          isFocused: _v21,
          editor: _v20,
          $showColorOnHover: _v8 === _v56.PAGE_TYPES.ADMIN,
          onKeyDown: () => _v10(_v20?.state.doc.textContent.length ?? 0)
        }), (0, _v1.jsxs)(_v3.Box, {
          pt: (0, _v10.rem)(2),
          width: "100%",
          fontSize: "body-sm",
          textAlign: "right",
          color: "slate.300",
          visibility: _v21 && _v9 >= Math.floor(_v2 / 2) ? "visible" : "hidden",
          children: [_v2 - (_v20?.state.doc.textContent.length || 0), " ", _v52.default.Characters]
        })]
      });
    });
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v26;
  let _v71 = _v67.keyframes`
    0% {
        width: 0;
        background: rgba(255, 255, 255, 0.05);
    }
    100% {
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
    }
`,
    _v72 = (0, _v2.forwardRef)(({
      duration: _v0 = _v70.DEFAULT_COUNTDOWN_TIMER,
      startOnComponentMount: _v1 = !0,
      onTimeout: _v2
    }, _v3) => {
      let {
          timer: _v4,
          isRunning: _v5,
          isFinished: _v6,
          startTimer: _v7,
          clearTimer: _v8
        } = (_v0 => {
          let {
              progressInterval: _v1 = 0,
              enableProgress: _v2 = !0
            } = {},
            [_v3, _v4] = (0, _v2.useState)(!1),
            [_v5, _v6] = (0, _v2.useState)(!1),
            _v7 = (0, _v2.useRef)(null),
            _v8 = (0, _v2.useRef)(null),
            _v9 = (0, _v2.useRef)(0),
            _v10 = (0, _v2.useRef)(0),
            _v11 = (0, _v2.useRef)(_v0);
          _v11.current = _v0;
          let _v12 = (() => {
              let [, _v0] = (0, _v2.useReducer)(_v0 => _v0 + 1, 0);
              return _v0;
            })(),
            _v13 = (_v0, _v1) => {
              _v9.current = _v0, _v10.current = (_v1 - _v0) / _v1, _v12();
            },
            _v14 = () => {
              _v7.current && clearInterval(_v7.current), _v8.current && clearTimeout(_v8.current), _v4(!1);
            };
          return {
            startTimer: ({
              duration: _v0
            }) => {
              (_v14(), _v0 < _v1) ? console.error(`Duration (${_v0}) should be greater than progress interval (${_v1})`) : (_v13(_v0, _v0), _v7.current = setInterval(() => {
                _v13(_v9.current - _v1, _v0), _v2 && _v11.current({
                  done: !1,
                  timer: _v9.current,
                  progress: _v9.current / _v0
                }), _v12();
              }, _v1), _v8.current = setTimeout(() => {
                _v13(0, _v0), _v11.current({
                  done: !0,
                  timer: _v9.current,
                  progress: 1
                }), _v14(), _v6(!0);
              }, _v0), _v4(!0), _v6(!1));
            },
            clearTimer: _v14,
            timer: _v9.current,
            progress: _v10.current,
            isRunning: _v3,
            isFinished: _v5
          };
        })(_v0 => {
          _v0.done && _v2?.();
        }),
        _v9 = (0, _v22.useViewerStrings)(),
        _v10 = (0, _v2.useMemo)(() => (_v5 || _v6 ? _v4 : _v0) / 0, [_v4, _v5, _v6, _v0]);
      return (0, _v2.useEffect)(() => (_v1 && _v7({
        duration: _v0
      }), _v8), []), (0, _v2.useImperativeHandle)(_v3, () => ({
        startTimer() {
          _v7({
            duration: _v0
          });
        }
      })), (0, _v1.jsxs)(_v3.Box, {
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "xs",
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        justifyContent: "center",
        p: "6px 10px 6px 12px",
        position: "relative",
        children: [(0, _v1.jsx)(_v3.Box, {
          animation: `${_v71} ${_v0}ms linear`,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "xs",
          height: "100%",
          left: "0",
          pointerEvents: "none",
          position: "absolute",
          top: "0",
          width: "100%"
        }), (0, _v1.jsx)(_v68.Text, {
          variant: "body-xl",
          fontSize: "body-md",
          fontWeight: "bold",
          lineHeight: "20px",
          mr: "6px",
          children: _v9.VideoWillPlayIn(_v10)
        }), (0, _v1.jsx)(_v69.ArrowRight, {})]
      });
    });
  var _v73 = _v0.i(0);
  let _v74 = _v0 => (0, _v1.jsx)(_v4.Flex, {
      width: _v0.maxWidth ? `min(${(0, _v10.rem)(_v0.maxWidth)}, 100%)` : `min(${(0, _v10.rem)(605)}, 100%)`,
      maxHeight: "100%",
      flexDir: "column",
      ..._v0,
      sx: {
        "::webkit-scrollbar": {
          display: "none"
        },
        "-ms-overflow-style": "none",
        scrollbarWidth: "none"
      },
      children: _v0.children
    }),
    _v75 = _v0 => {
      let [_v1] = (0, _v73.useMediaQuery)("(max-width: 768px)");
      return (0, _v1.jsx)(_v4.Flex, {
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflow: _v0.isMiniaturePreview ? "hidden" : "",
        justifyContent: "center",
        px: _v1 ? "sm" : (0, _v10.rem)(80),
        alignItems: _v1 || _v0.previewMode === _v26.PREVIEW_MODE.MOBILE ? "center" : "left" === _v0.align ? "flex-start" : "right" === _v0.align ? "flex-end" : "center",
        textAlign: _v1 || _v0.previewMode === _v26.PREVIEW_MODE.MOBILE ? "center" : _v0.align,
        sx: {
          a: {
            alignSelf: "left" === _v0.align ? "start" : "right" === _v0.align ? "end" : "center"
          }
        },
        flexDir: "column",
        ..._v0,
        children: _v0.children
      });
    },
    _v76 = ({
      src: _v0
    }) => (0, _v1.jsx)(_v3.Box, {
      as: "img",
      maxHeight: (0, _v10.rem)(56),
      mx: "xs",
      maxWidth: "100%",
      src: _v0,
      alt: ""
    }),
    _v77 = _v0 => (0, _v1.jsx)(_v9.Link, {
      p: `${(0, _v10.rem)(18)} 0`,
      border: `${(0, _v10.rem)(2)} solid`,
      borderRadius: "sm",
      borderColor: "transparent",
      _hover: {
        borderColor: _v0.showColorOnHover ? "blue.500" : "transparent"
      },
      ..._v0,
      children: _v0.children
    }),
    _v78 = () => {
      let _v0 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.logo),
        _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.alignment),
        _v2 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.isEventDateSetToCalendar),
        _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.confirmationPageDescription.tagsUnresolved || ""),
        _v4 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.confirmationPageDescription.tagsResolved || ""),
        _v5 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.confirmationPageTitle.tagsUnresolved || ""),
        _v6 = _v19("confirmationPageTitle", (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.confirmationPageTitle.tagsResolved || "")),
        _v7 = _v19("confirmationPageDescription", _v4),
        _v8 = _v20("confirmationPageTitle", _v5),
        _v9 = _v20("confirmationPageDescription", _v3),
        _v10 = (0, _v17.useGlobalStore)(_v0 => _v0.entityType),
        _v11 = (0, _v22.useViewerStrings)(),
        _v12 = (0, _v17.useGlobalStore)(_v0 => _v0.entity.schedule),
        _v13 = _v21(),
        _v14 = _v21(),
        _v15 = (0, _v17.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v16 = (0, _v2.useRef)(null),
        _v17 = (0, _v2.useRef)(null),
        {
          editor: _v18,
          setEditor: _v19
        } = (0, _v13.useRichTextContext)(),
        _v20 = (0, _v17.useGlobalStore)(_v0 => _v0.calendarLinks),
        {
          previewMode: _v21
        } = (0, _v2.useContext)(_v12.PreviewContext),
        {
          currentPageType: _v22
        } = (0, _v2.useContext)(_v11.CurrentPageContext),
        {
          isMiniaturePreview: _v23
        } = (0, _v12.usePreviewContext)(),
        _v24 = "title",
        _v25 = "description",
        _v26 = (0, _v2.useCallback)(_v0 => {
          _v22 !== _v26.PAGE_TYPES.REGISTRATION && (_v0 === _v24 && _v16.current?.getHTML() !== _v8 && _v13("confirmationPageTitle", _v5, _v16.current?.getHTML()), _v0 === _v25 && _v17.current?.getHTML() !== _v9 && _v14("confirmationPageDescription", _v3, _v17.current?.getHTML()));
        }, [_v9, _v8, _v22, _v13, _v14]);
      return (0, _v2.useEffect)(() => {
        if (_v22 === _v26.PAGE_TYPES.ADMIN) {
          let _v0 = _v18?.view.state.selection;
          _v16.current?.setHTML(_v8), _v0 && _v18?.chain().setTextSelection({
            from: _v0.from,
            to: _v0.to
          }).run();
        }
      }, [_v8, _v22]), (0, _v2.useEffect)(() => {
        _v22 === _v26.PAGE_TYPES.REGISTRATION && _v16.current?.setHTML(_v6);
      }, [_v6, _v22]), (0, _v2.useEffect)(() => {
        if (_v22 === _v26.PAGE_TYPES.ADMIN) {
          let _v0 = _v18?.view.state.selection;
          _v17.current?.setHTML(_v9), _v0 && _v18?.chain().setTextSelection({
            from: _v0.from,
            to: _v0.to
          }).run();
        }
      }, [_v9, _v22]), (0, _v2.useEffect)(() => {
        _v22 === _v26.PAGE_TYPES.REGISTRATION && _v17.current?.setHTML(_v7);
      }, [_v7, _v22]), (0, _v1.jsx)(_v75, {
        previewMode: _v21,
        onMouseDownCapture: _v0 => {
          _v0.target == _v0.currentTarget && (_v15(_v26.SIDE_MENU_CONTENT.SETTINGS), _v19(null));
        },
        align: _v1,
        isMiniaturePreview: _v23,
        children: (0, _v1.jsxs)(_v74, {
          pt: "3xl",
          pb: (0, _v10.rem)(98),
          children: [_v0.isActive && (0, _v1.jsx)(_v77, {
            onClick: () => {
              _v22 === _v26.PAGE_TYPES.ADMIN && _v15(_v26.SIDE_MENU_CONTENT.LOGO);
            },
            showColorOnHover: _v22 === _v26.PAGE_TYPES.ADMIN,
            variant: "minimal",
            ...(_v0.isLinkActive && (_v0.customLink?.length ?? 0) > 0 && _v22 === _v26.PAGE_TYPES.REGISTRATION ? {
              href: _v0.customLink || "",
              target: "_blank"
            } : {}),
            children: (0, _v1.jsx)(_v76, {
              src: _v0.url
            })
          }), _v10 === _v6.ENTITY_TYPE.VIDEO && (0, _v1.jsx)(_v3.Box, {
            cursor: "pointer",
            position: "absolute",
            right: "1.5rem",
            top: "1.5rem",
            children: (0, _v1.jsx)(_v72, {
              duration: 0,
              onTimeout: () => {}
            })
          }), (0, _v1.jsx)(_v66, {
            ref: _v16,
            saveChanges: () => _v26(_v24),
            onBlur: () => _v26(_v24),
            maxCharacter: _v26.RTF_CONFIRMATION_TITLE_TEXT_LIMIT,
            overRideFontSize: !0,
            content: _v22 === _v26.PAGE_TYPES.ADMIN ? _v8 : _v6
          }), (0, _v1.jsx)(_v3.Box, {
            px: "xs",
            children: (0, _v1.jsx)(_v32, {})
          }), (0, _v1.jsx)(_v66, {
            ref: _v17,
            saveChanges: () => _v26(_v25),
            onBlur: () => _v26(_v25),
            overRideFontSize: !0,
            content: _v22 === _v26.PAGE_TYPES.ADMIN ? _v9 : _v7
          }), _v2 && _v12 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v31.StylableNonEditText, {
              fieldName: _v26.NON_EDIT_FIELDS.ADD_TO_CALENDAR,
              children: (0, _v1.jsx)(_v3.Box, {
                as: "span",
                mb: (0, _v10.rem)(6),
                px: (0, _v10.rem)(5),
                border: `${(0, _v10.rem)(2)} solid`,
                borderColor: "transparent",
                onClick: () => {
                  _v15(_v26.SIDE_MENU_CONTENT.SETTINGS);
                },
                children: _v11.AddToCalendar
              })
            }), (0, _v1.jsxs)(_v4.Flex, {
              gap: (0, _v10.rem)(32),
              justifyContent: _v21 === _v26.PREVIEW_MODE.MOBILE ? "center" : "left" === _v1 ? "flex-start" : "right" === _v1 ? "flex-end" : "center",
              border: `${(0, _v10.rem)(2)} solid`,
              borderColor: "transparent",
              px: (0, _v10.rem)(5),
              children: [(0, _v1.jsx)(_v9.Link, {
                cursor: "pointer",
                href: _v20?.google ?? void 0,
                target: "_blank",
                variant: "minimal",
                children: (0, _v1.jsx)(_v24, {})
              }), (0, _v1.jsx)(_v9.Link, {
                cursor: "pointer",
                href: _v20?.outlook ?? void 0,
                target: "_blank",
                variant: "minimal",
                children: (0, _v1.jsx)(_v25, {})
              }), (0, _v1.jsx)(_v9.Link, {
                cursor: "pointer",
                href: _v20?.ical ?? void 0,
                target: "_blank",
                variant: "minimal",
                children: (0, _v1.jsx)(_v23, {})
              })]
            })]
          })]
        })
      });
    };
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  async function _v83({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      resourceType: _v3,
      resourceId: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v82.measureLatency)("postLeadCaptureResourceIdLogin", "POST", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v3}/${_v4}/login?${(0, _v80.searchQueryString)(_v5)}&fields=${_v1.map(_v80.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "POST",
        body: JSON.stringify((0, _v80.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v80.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v80.deepCamelCase)(_v1);
    });
  }
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  function _v86() {
    let {
        mutate: _v0
      } = (0, _v84.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v85.useGctlConfig)(),
      [_v5, _v6] = (0, _v81.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/${_v0.where.resourceType}/${_v0.where.resourceId}/login${(0, _v81.serializeQuery)(_v0)}`, _v83({
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
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = (0, _v2.createContext)({
      features: {
        [_v26.FEATURES.CONFIRMATION_VIEW]: !0
      },
      setFeatures: () => void 0
    }),
    _v91 = _v0 => (0, _v2.useContext)(_v90).features[_v0];
  _v0.s(["FeatureFlowProvider", 0, ({
    children: _v0,
    type: _v1
  }) => {
    let _v2 = (0, _v2.useMemo)(() => ({
      [_v26.FEATURES.CONFIRMATION_VIEW]: _v1 !== _v6.ENTITY_TYPE.SHOWCASE
    }), [_v1]);
    return (0, _v1.jsx)(_v90.Provider, {
      value: {
        features: _v2
      },
      children: _v0
    });
  }, "useFeatureFlow", 0, _v91], 0);
  var _v92 = _v0.i(0);
  let _v93 = () => {
    let _v0 = (0, _v17.useGlobalStore)(_v0 => _v0.entityId),
      _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.entityType),
      _v2 = (0, _v17.useGlobalStore)(_v0 => _v0.setLeadCaptureProperties),
      _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.authRoomPassword),
      _v4 = (0, _v17.useGlobalStore)(_v0 => _v0.pageReferrer),
      [_v5, _v6] = (0, _v92.useGetLeadCaptureResourceIdFormLazy)(),
      _v7 = (0, _v2.useCallback)(_v0 => {
        if (_v1) {
          let _v0 = (0, _v88.getEntityCookiePassword)(_v0, _v1) ?? _v3;
          _v5({
            where: {
              resourceId: _v0,
              resourceType: _v6.ENTITY_TO_PATH_MAP[_v1]
            },
            select: ["confirmationPageDescription", "confirmationPageTitle", "htmlLocalizations"],
            query: {
              ...(_v0 && {
                leadId: _v0
              }),
              ...(_v0 && {
                password: _v0
              }),
              ...(_v4 && {
                referrer: _v4
              })
            }
          });
        }
      }, [_v0, _v1, _v3, _v5, _v4]);
    return (0, _v2.useEffect)(() => {
      let {
        loading: _v0,
        data: _v1
      } = _v6;
      !_v0 && _v1 && (_v2(_v26.PREVIEW_HTML_KEYS.confirmationPageTitle, _v1?.confirmationPageTitle), _v2(_v26.PREVIEW_HTML_KEYS.confirmationPageDescription, _v1?.confirmationPageDescription), _v2("htmlLocalizations", (0, _v16.canonicalizeLocaleKeys)(_v1.htmlLocalizations)));
    }, [_v1, _v6, _v2]), {
      refreshConfirmationPageHTML: _v7,
      refreshConfirmationPageHTMLState: _v6
    };
  };
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0);
  let _v99 = ({
    role: _v0,
    textType: _v1,
    loading: _v2 = !1,
    ..._v3
  }) => {
    var _v4;
    let _v5,
      _v6,
      _v7,
      _v8,
      {
        currentPageType: _v9
      } = (0, _v2.useContext)(_v11.CurrentPageContext),
      _v10 = (0, _v17.useGlobalStore)(_v0 => _v0.setSideMenuType),
      _v11 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.primaryButtonStyle),
      _v12 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.secondaryButtonStyle),
      _v13 = _v0 === _v26.BUTTON_ROLES.PRIMARY ? _v11 : _v12,
      {
        textColor: _v14,
        buttonColor: _v15,
        type: _v16,
        style: _v17
      } = _v13,
      [_v18, _v19] = (0, _v2.useState)(),
      _v20 = (0, _v98.useIsBokeh)(),
      _v21 = (_v4 = _v13[_v1] ?? "", _v5 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.buttonLocalizations), _v6 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.defaultLocale), _v7 = (0, _v14.useFormLocale)(), _v8 = (0, _v16.resolveLocalizedButtonText)({
        authored: _v5
      }, _v1, _v7, _v4, _v6), _v5?.[_v1]?.[_v7] != null || _v7 === _v6 ? _v8 : (0, _v16.translateStockButtonLabel)(_v4, _v7));
    (0, _v2.useEffect)(() => {
      _v0 === _v26.BUTTON_ROLES.PRIMARY ? _v19(_v11) : _v19(_v12);
    }, [_v0]);
    let _v22 = (0, _v57.useRtfStore)(_v0 => _v0.setButtonRole),
      _v23 = (0, _v57.useRtfStore)(_v0 => _v0.setButtonTextType),
      _v24 = (0, _v57.useRtfStore)(_v0 => _v0.buttonLivePreview),
      _v25 = _v24.showPreview && _v24.selectedButton?.role === _v0 && _v24.selectedButton.textType === _v1 ? _v24.text : void 0,
      [_v26, _v27] = (0, _v2.useState)(),
      [_v28, _v29] = (0, _v2.useState)();
    return (0, _v2.useEffect)(() => {
      _v29(_v0 => ({
        ..._v0,
        color: _v18?.textColor
      }));
    }, [_v18]), (0, _v2.useEffect)(() => {
      let _v0 = (0, _v95.default)(_v28, ["fontWeight", "fontStyle", "textDecoration"]);
      _v17?.includes(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.BOLD) && (_v0.fontWeight = 700), _v17?.includes(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.ITALIC) && (_v0.fontStyle = "italic"), _v17?.includes(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.UNDERLINE) && (_v0.textDecoration = "underline"), _v29(_v0);
    }, [_v17]), (0, _v2.useEffect)(() => {
      _v29(_v0 => ({
        ..._v0,
        color: _v24.showPreview && _v24.selectedButton?.role === _v0 && _v24.selectedButton.textType === _v1 ? _v24.textColor : _v14
      }));
    }, [_v14, _v24, _v0, _v1]), (0, _v2.useEffect)(() => {
      let _v0 = {
          ..._v26
        },
        _v1 = _v24.showPreview && _v24.selectedButton?.role === _v0 && _v24.selectedButton.textType === _v1 ? _v24.buttonColor : _v15;
      _v16 === _v26.RTF_BUTTON_TYPES_VALUES.SOLID ? (delete _v0.border, _v0.backgroundColor = _v1) : (_v0.backgroundColor = "transparent", _v0.border = `1px solid ${_v1}`), _v27(_v0);
    }, [_v16, _v15, _v24, _v0, _v1]), (0, _v1.jsxs)(_v3.Box, {
      width: "100%",
      height: (0, _v10.rem)(40),
      position: "relative",
      role: "group",
      children: [_v9 === _v26.PAGE_TYPES.ADMIN && (0, _v1.jsx)(_v3.Box, {
        as: "span",
        position: "absolute",
        right: (0, _v10.rem)(2),
        zIndex: 1,
        top: (0, _v10.rem)(-16),
        backgroundColor: "surface",
        visibility: "hidden",
        borderRadius: "sm",
        _groupHover: {
          visibility: "visible"
        },
        children: (0, _v1.jsx)(_v96.Button, {
          leftIcon: (0, _v1.jsx)(_v97.EditPencil, {
            color: "text-primary"
          }),
          size: "sm",
          variant: "secondary",
          onClick: () => {
            _v10(_v26.SIDE_MENU_CONTENT.BUTTON_RTF_STYLING), _v23(_v1), _v22(_v0);
          },
          children: _v52.default.Edit
        })
      }), (0, _v1.jsx)(_v3.Box, {
        as: "button",
        height: (0, _v10.rem)(40),
        width: "100%",
        fontSize: "body-md",
        m: "auto",
        borderRadius: "sm",
        border: 0,
        cursor: "pointer",
        ..._v3,
        style: _v26,
        children: _v2 ? (0, _v1.jsx)(_v5.Spinner, {
          ml: "45%",
          size: _v20 ? "sm" : "md",
          color: _v14 || "#FFFFFF"
        }) : (0, _v1.jsx)("p", {
          style: _v28,
          children: _v25 ?? _v21
        })
      })]
    });
  };
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = _v67.keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`,
    _v105 = `${_v104} 0.5s`,
    _v106 = (0, _v2.forwardRef)(({
      error: _v0,
      topOffset: _v1 = 54
    }, _v2) => {
      let _v3 = (0, _v2.useRef)(null);
      return (0, _v2.useImperativeHandle)(_v2, () => ({
        shakeError() {
          _v3.current && (_v3.current.style.animation = "none"), setTimeout(() => {
            _v3.current && (_v3.current.style.animation = "");
          }, 0);
        }
      })), (0, _v1.jsx)(_v3.Box, {
        ref: _v3,
        animation: _v105,
        zIndex: 100,
        bg: "red.500",
        color: "white",
        textAlign: "left",
        position: "absolute",
        top: (0, _v10.rem)(_v1),
        p: (0, _v10.rem)(6),
        borderRadius: "xs",
        fontWeight: "medium",
        fontSize: "body-xs",
        letterSpacing: (0, _v10.rem)(.4),
        children: _v0
      });
    });
  var _v107 = _v0.i(0);
  let _v108 = ({
      text: _v0,
      children: _v1,
      tipPlacement: _v2 = "top",
      disabled: _v3 = !1,
      gutter: _v4 = 0,
      fontSize: _v5 = 14,
      ..._v6
    }) => {
      let _v7 = (0, _v2.useRef)(null),
        [_v8, _v9] = (0, _v2.useState)(!1);
      return (0, _v2.useEffect)(() => {
        let _v0 = () => {
          let _v0 = _v7.current;
          _v0 && _v9(_v0.scrollWidth > _v0.clientWidth);
        };
        return requestAnimationFrame(_v0), window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
      }, [_v0, _v1]), (0, _v1.jsx)(_v107.Tooltip, {
        isDisabled: !_v8 || _v3,
        label: _v0,
        closeOnScroll: !0,
        fontSize: _v5,
        placement: _v2,
        gutter: _v4,
        children: (0, _v1.jsx)(_v68.Text, {
          ref: _v7,
          variant: "body-xl",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: _v5,
          ..._v6,
          children: _v1 || _v0
        })
      });
    },
    _v109 = (0, _v2.forwardRef)(({
      value: _v0,
      placeholder: _v1,
      required: _v2,
      autoFocus: _v3,
      validator: _v4,
      onBlur: _v5,
      onEnterKeyPressed: _v6,
      errorMessage: _v7
    }, _v8) => {
      let [_v9, _v10] = (0, _v2.useState)(),
        [_v11, _v12] = (0, _v2.useState)(""),
        _v13 = (0, _v2.useRef)(null),
        _v14 = (0, _v2.useRef)(null),
        _v15 = (0, _v14.useFormLocale)(),
        _v16 = _v0 => {
          _v5?.(_v0), _v17(_v0);
        },
        _v17 = _v0 => {
          let _v1 = _v4?.(_v0 || "");
          return _v1 ? (_v10(_v1), _v13.current?.shakeError(), !1) : (_v10(void 0), !0);
        };
      return (0, _v2.useEffect)(() => {
        _v12(_v0 || ""), _v0 && _v17(_v0);
      }, [_v0]), (0, _v2.useImperativeHandle)(_v8, () => ({
        validate: () => _v17(_v11),
        getValue: () => _v11 || ""
      })), (0, _v2.useEffect)(() => {
        _v10(_v7), _v13.current?.shakeError();
      }, [_v7]), (0, _v2.useEffect)(() => {
        _v3 && setTimeout(() => {
          _v14.current?.focus();
        }, 100);
      }, [_v3, _v14]), (0, _v1.jsx)(_v3.Box, {
        position: "relative",
        overflowY: "visible",
        children: (0, _v1.jsxs)(_v103.LightMode, {
          children: [(0, _v1.jsx)(_v112, {
            ref: _v14,
            bg: "white",
            color: "black",
            isInvalid: !!_v9,
            onFocus: _v0 => _v0.target.select(),
            onBlur: _v0 => {
              _v16(_v0.target.value);
            },
            onKeyDown: _v0 => {
              _v0.key === _v26.KEY_CODES.ENTER && _v6?.(_v11 || "");
            },
            maxLength: _v26.REGISTRATION_FORM_MAX_CHARACTERS,
            onChange: _v0 => {
              (0, _v94.hasAutoFilled)(_v0) && _v16(_v0.target.value), _v12(_v0.target.value);
            },
            size: "sm",
            value: _v11,
            "aria-required": _v2,
            id: _v1,
            height: (0, _v10.rem)(55),
            pt: "lg",
            borderRadius: "sm",
            placeholder: " ",
            "aria-labelledby": `${_v1}-label`,
            $_css: _v111
          }), (0, _v1.jsx)(_v101.FormLabel, {
            htmlFor: _v1,
            sx: _v110,
            children: (0, _v1.jsxs)(_v102.HStack, {
              cursor: "text",
              onClick: () => _v14.current?.focus(),
              children: [(0, _v1.jsx)(_v108, {
                text: (0, _v16.translateFieldName)(_v1, _v15),
                color: "text-secondary"
              }), _v2 && (0, _v1.jsx)(_v3.Box, {
                color: "red.500",
                children: "*"
              })]
            })
          }), _v9 && (0, _v1.jsx)(_v106, {
            error: _v9,
            ref: _v13
          })]
        })
      });
    }),
    _v110 = {
      position: "absolute",
      top: "50%",
      left: (0, _v10.rem)(12),
      px: "1",
      transform: "translateY(-50%)",
      transition: "all 0.2s ease-out",
      width: "90%"
    },
    _v111 = {
      transform: "translateY(-50%)",
      top: (0, _v10.rem)(16),
      left: (0, _v10.rem)(6)
    };
  var _v112 = (0, _v100.default)(_v43.Input).withConfig({
    displayName: "Input___StyledBokehInput",
    componentId: "sc-50fe83b1-0"
  })(_v0 => ({
    "&:focus + label, &:not(:placeholder-shown) + label": _v0.$_css
  }));
  _v0.i(0);
  var _v113 = _v0.i(0);
  let _v114 = () => {
    let _v0 = (0, _v14.useFormLocale)(),
      _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.privacyPolicyVersion || 1),
      _v2 = (0, _v17.useGlobalStore)(_v0 => _v0.entityType),
      _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.privacyPolicyUrl),
      _v4 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.hasActiveCrmExportConnection),
      _v5 = (0, _v2.useMemo)(() => {
        switch (_v2) {
          case _v6.ENTITY_TYPE.VIDEO:
          case _v6.ENTITY_TYPE.SHOWCASE:
            return _v26.PRIVACY_POLICY_VERSION.V2;
          case _v6.ENTITY_TYPE.EVENT:
          default:
            return _v1;
        }
      }, [_v1, _v2]),
      _v6 = (0, _v2.useCallback)(_v0 => (0, _v1.jsx)(_v9.Link, {
        href: _v3 || _v26.VIMEO_PRIVACY_POLICY_LINK,
        target: "_blank",
        rel: "noreferrer",
        children: _v0
      }), [_v3]),
      _v7 = (0, _v2.useCallback)(_v0 => (0, _v1.jsx)(_v9.Link, {
        href: _v26.VIMEO_TERMS_OF_SERVICE_LINK,
        target: "_blank",
        rel: "noreferrer",
        children: _v0
      }), []),
      _v8 = (0, _v2.useMemo)(() => _v3 ? _v4 ? (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the video owner and their connected service providers. I also acknowledge the video owner's {PP}Privacy Policy{/PP}.",
        replacements: {
          PP: _v6
        },
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario del video y sus proveedores de servicios conectados. También acepto la {PP}Política de privacidad{/PP} del propietario del video."
          },
          "de-DE": {
            singular: "Mir ist bewusst, dass meine Anzeigeaktivitäten mit dem Videobesitzenden und den angeschlossenen Dienstanbietern geteilt werden. Ich erkenne außerdem die {PP}Datenschutzerklärung{/PP} des Videobesitzenden an."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la vidéo et ses fournisseurs de services connectés. Je reconnais également avoir pris connaissance de la {PP}Politique de confidentialité{/PP} du propriétaire de la vidéo."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティが動画の所有者とそれらに関連するサービスプロバイダーと共有されることに同意します。また、動画の所有者の{PP}プライバシーポリシー{/PP}にも同意します。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 동영상 소유자 및 연결된 서비스 제공업체와 공유된다는 것을 이해합니다. 또한 동영상 소유자의 {PP}개인정보보호 정책{/PP}에 동의합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário do vídeo e seus provedores de serviço conectados. Também concordo com a {PP}Política de Privacidade{/PP} do proprietário do vídeo."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与视频所有者及其相关服务提供商共享。我还承认视频所有者的{PP}隐私政策{/PP}。"
          }
        }
      }) : (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the video owner and I acknowledge the video owner's {PP}Privacy Policy{/PP}.",
        replacements: {
          PP: _v6
        },
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario del video y acepto la {PP}Política de privacidad{/PP} del propietario del video."
          },
          "de-DE": {
            singular: "Mir ist bekannt, dass meine Aktivitäten mit dem Eigentümer des Videos geteilt werden und ich erkenne die {PP}Datenschutzrichtlinien{/PP} des Videobesitzenden an."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la vidéo et j'accepte la {PP}Politique de confidentialité{/PP} de ce dernier."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティが動画の所有者と共有されることを理解し、動画の所有者の{PP}プライバシーポリシー{/PP}に同意します。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 동영상 소유자와 공유된다는 것을 이해하며, 동영상 소유자의 {PP}개인정보보호 정책{/PP}에 동의합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário do vídeo e concordo com a {PP}Política de Privacidade{/PP} do proprietário do vídeo."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与视频所有者共享，并且我承认视频所有者的{PP}隐私政策{/PP}。"
          }
        }
      }) : _v4 ? (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the video owner and their connected service providers.",
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario del video y sus proveedores de servicios conectados."
          },
          "de-DE": {
            singular: "Mir ist bewusst, dass meine Anzeigeaktivitäten mit dem Videobesitzenden und den angeschlossenen Dienstanbietern geteilt werden."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la vidéo et ses prestataires de services connectés."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティが動画の所有者とそれらに関連するサービスプロバイダーと共有されることに同意します。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 동영상 소유자 및 연결된 서비스 제공업체와 공유된다는 것을 이해합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário do vídeo e seus provedores de serviço conectados."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与视频所有者及其相关服务提供商共享。"
          }
        }
      }) : (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the video owner.",
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario del video."
          },
          "de-DE": {
            singular: "Ich verstehe, dass meine Anzeigeaktivitäten mit dem Videobesitzenden geteilt werden."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la vidéo."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティが動画の所有者と共有されることを理解しています。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 동영상 소유자와 공유된다는 것을 이해합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário do vídeo."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与视频所有者共享。"
          }
        }
      }), [_v6, _v4, _v0, _v3]),
      _v9 = (0, _v2.useMemo)(() => _v3 ? _v4 ? (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the showcase owner and their connected service providers. I also acknowledge the showcase owner's {PP}Privacy Policy{/PP}.",
        replacements: {
          PP: _v6
        },
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario de la presentación y sus proveedores de servicios conectados. También acepto la {PP}Política de privacidad{/PP} del propietario de la presentación."
          },
          "de-DE": {
            singular: "Mir ist bewusst, dass meine Anzeigeaktivitäten mit dem Präsentationsbesitzer und den angeschlossenen Dienstanbietern geteilt werden. Ich erkenne außerdem die {PP}Datenschutzerklärung{/PP} des Präsentationsinhabers an."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la présentation et ses prestataires de services connectés. Je reconnais également avoir pris connaissance de la {PP}Politique de confidentialité{/PP} du propriétaire de la présentation."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティがショーケースの所有者とそれらに関連するサービスプロバイダーと共有されることに同意します。また、ショーケースの所有者の{PP}プライバシーポリシー{/PP}にも同意します。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 쇼케이스 소유자 및 연결된 서비스 제공업체와 공유된다는 것을 이해합니다. 또한 쇼케이스 소유자의 {PP}개인정보보호 정책{/PP}에 동의합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário da vitrine e seus provedores de serviço conectados. Também concordo com a {PP}Política de Privacidade{/PP} do proprietário da vitrine."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与展示所有者及其相关服务提供商共享。我还承认展示所有者的{PP}隐私政策{/PP}。"
          }
        }
      }) : (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the showcase owner and I acknowledge the showcase owner's {PP}Privacy Policy{/PP}.",
        replacements: {
          PP: _v6
        },
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario de la presentación y acepto la {PP}Política de privacidad{/PP} del propietario de la presentación."
          },
          "de-DE": {
            singular: "Ich verstehe, dass meine Anzeigeaktivität mit dem Präsentationseigentümer geteilt wird und ich die {PP}Datenschutzrichtlinie{/PP} des Präsentationseigentümers anerkenne."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la présentation et j'accepte la {PP}Politique de confidentialité{/PP} de ce dernier."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティがショーケースの所有者と共有されることを理解し、ショーケースの所有者の{PP}プライバシーポリシー{/PP}に同意します。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 쇼케이스 소유자와 공유된다는 것을 이해하며, 쇼케이스 소유자의 {PP}개인정보보호 정책{/PP}에 동의합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário da vitrine e concordo com a {PP}Política de Privacidade{/PP} do proprietário da vitrine."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与展示所有者共享，并且我承认展示所有者的{PP}隐私政策{/PP}。"
          }
        }
      }) : _v4 ? (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the showcase owner and their connected service providers.",
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario de la presentación y sus proveedores de servicios conectados."
          },
          "de-DE": {
            singular: "Ich bin mir bewusst, dass meine Anzeigeaktivitäten mit dem Eigentümer der Präsentation und den angeschlossenen Dienstanbietern geteilt werden."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la présentation et ses prestataires de services connectés."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティがショーケースの所有者とそれらに関連するサービスプロバイダーと共有されることに同意します。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 쇼케이스 소유자 및 연결된 서비스 제공업체와 공유된다는 것을 이해합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário da vitrine e seus provedores de serviço conectados."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与展示所有者及其相关服务提供商共享。"
          }
        }
      }) : (0, _v87.translate)({
        locale: _v0,
        singular: "I understand that my viewing activity will be shared with the showcase owner.",
        dictionary: {
          es: {
            singular: "Entiendo que mi actividad de visualización se compartirá con el propietario de la presentación."
          },
          "de-DE": {
            singular: "Ich verstehe, dass meine Anzeigeaktivitäten mit dem Showcase-Besitzer geteilt werden."
          },
          "fr-FR": {
            singular: "Je comprends que mon activité de visionnage sera partagée avec le propriétaire de la présentation."
          },
          "ja-JP": {
            singular: "私は、私の視聴アクティビティがショーケースの所有者と共有されることを理解しています。"
          },
          "ko-KR": {
            singular: "내 시청 활동이 쇼케이스 소유자와 공유된다는 것을 이해합니다."
          },
          "pt-BR": {
            singular: "Estou ciente de que minha atividade de visualização será compartilhada com o proprietário da vitrine."
          },
          "zh-CN": {
            singular: "我了解我的观看活动将与展示所有者共享。"
          }
        }
      }), [_v6, _v4, _v0, _v3]),
      _v10 = (0, _v2.useMemo)(() => {
        switch (_v5) {
          case _v26.PRIVACY_POLICY_VERSION.V1:
            return (0, _v87.translate)({
              locale: _v0,
              singular: "I agree that the host will see my viewing activities for this webinar, and I agree to {TS}Vimeo’s Terms of Service{/TS} and {PP}Privacy Policy{/PP}.",
              replacements: {
                TS: _v7,
                PP: _v6
              },
              dictionary: {
                es: {
                  singular: "Acepto que el anfitrión vea mis actividades de visualización de este seminario web y estoy de acuerdo con los {TS}Términos de servicio{/TS} y la {PP}Política de privacidad{/PP} de Vimeo."
                },
                "de-DE": {
                  singular: "Ich bin damit einverstanden, dass dem Host die Zuschaueraktivitäten für dieses Webinar angezeigt werden, und akzeptiere die {TS}Nutzungsbedingungen von Vimeo{/TS} sowie die {PP}Datenschutzrichtlinie{/PP}."
                },
                "fr-FR": {
                  singular: "J'accepte que l'hôte voie mes activités de visionnage pour ce webinaire et j'accepte les {TS}Conditions d'utilisation de Vimeo{/TS} et la {PP} Politique de confidentialité{/PP}."
                },
                "ja-JP": {
                  singular: "私は、主催者がこのウェビナーについての私の視聴活動を見ることに同意します。また、私は、{TS}Vimeoの利用規約{/TS}と{PP}プライバシーポリシー{/PP}に同意します。"
                },
                "ko-KR": {
                  singular: "호스트가 이 웨비나에 대한 내 시청 활동을 보는 데 동의하고, {TS}Vimeo의 서비스 약관{/TS} 및 {PP}개인정보보호 정책{/PP}에 동의합니다."
                },
                "pt-BR": {
                  singular: "Concordo que o anfitrião verá minhas atividades de visualização para este webinar e concordo com os {TS}Termos de Serviço{/TS} e {PP}Política de Privacidade{/PP} do Vimeo."
                },
                "zh-CN": {
                  singular: "我同意主持人将看到我在本次网络研讨会上的观看活动，并且我同意 {TS}Vimeo 的服务条款{/TS}和{PP}隐私政策{/PP}。"
                }
              }
            });
          case _v26.PRIVACY_POLICY_VERSION.V2:
            if (_v3) return _v4 ? (0, _v87.translate)({
              locale: _v0,
              singular: "I understand that my viewing activity will be shared with the event host and their connected service providers. I also acknowledge the host's {PP}Privacy Policy{/PP}.",
              replacements: {
                PP: _v6
              },
              dictionary: {
                es: {
                  singular: "Entiendo que mi actividad de visualización se compartirá con el anfitrión del evento y sus proveedores de servicios conectados. También acepto la {PP}Política de privacidad{/PP} del anfitrión."
                },
                "de-DE": {
                  singular: "Ich bin mir bewusst, dass meine Sehaktivitäten mit dem Veranstalter und den mit ihm verbundenen Dienstleistern geteilt werden. Außerdem erkenne ich die {PP}Datenschutzerklärung{/PP} des Hosts an."
                },
                "fr-FR": {
                  singular: "Je comprends que mon activité de visionnage sera partagée avec l'organisateur de l'événement et ses fournisseurs de services connectés. Je reconnais également avoir pris connaissance de la {PP}Politique de confidentialité{/PP} de l'hôte."
                },
                "ja-JP": {
                  singular: "私は、私の視聴アクティビティがイベント主催者とそれらに関連するサービスプロバイダーと共有されることに同意します。また、イベント主催者の{PP}プライバシーポリシー{/PP}にも同意します。"
                },
                "ko-KR": {
                  singular: "내 시청 활동이 이벤트 호스트 및 연결된 서비스 제공업체와 공유된다는 것을 이해합니다. 또한 호스트의 {PP}개인정보보호 정책{/PP}에 동의합니다."
                },
                "pt-BR": {
                  singular: "Estou ciente de que minha atividade de visualização será compartilhada com o organizador do evento e seus provedores de serviço conectados. Também concordo com a {PP}Política de Privacidade{/PP} do organizador."
                },
                "zh-CN": {
                  singular: "我了解我的观看活动将与活动主办方及其相关服务提供商共享。我还承认主办方的{PP}隐私政策{/PP}。"
                }
              }
            }) : (0, _v87.translate)({
              locale: _v0,
              singular: "I understand that my viewing activity will be shared with the event host and I acknowledge the host's {PP}Privacy Policy{/PP}.",
              replacements: {
                PP: _v6
              },
              dictionary: {
                es: {
                  singular: "Entiendo que mi actividad de visualización se compartirá con el anfitrión del evento y acepto la {PP}Política de privacidad{/PP} del anfitrión."
                },
                "de-DE": {
                  singular: "Mir ist bekannt, dass meine Zuschauendenaktivitäten an den Veranstalter weitergegeben werden, und ich erkenne die {PP}Datenschutzerklärung{/PP} des Hosts an."
                },
                "fr-FR": {
                  singular: "Je comprends que mon activité de visionnage sera partagée avec l’hôte de l’événement et je reconnais avoir pris connaissance de la {PP}Politique de confidentialité{/PP} de l’hôte."
                },
                "ja-JP": {
                  singular: "私は、私の視聴アクティビティがイベント主催者と共有されることを理解し、主催者の{PP}プライバシーポリシー{/PP}に同意します。"
                },
                "ko-KR": {
                  singular: "내 시청 활동이 이벤트 호스트와 공유된다는 것을 이해하며, 호스트의 {PP}개인정보보호 정책{/PP}에 동의합니다."
                },
                "pt-BR": {
                  singular: "Estou ciente de que minha atividade de visualização será compartilhada com o organizador do evento e concordo com a {PP}Política de Privacidade{/PP} do organizador."
                },
                "zh-CN": {
                  singular: "我了解我的观看活动将与活动主办方共享，并且我承认主办方的{PP}隐私政策{/PP}。"
                }
              }
            });
            return _v4 ? (0, _v87.translate)({
              locale: _v0,
              singular: "I understand that my viewing activity will be shared with the event host and their connected service providers.",
              dictionary: {
                es: {
                  singular: "Entiendo que mi actividad de visualización se compartirá con el anfitrión del evento y sus proveedores de servicios conectados."
                },
                "de-DE": {
                  singular: "Ich bin mir bewusst, dass meine Sehaktivitäten mit dem Veranstalter und den mit ihm verbundenen Dienstleistern geteilt werden."
                },
                "fr-FR": {
                  singular: "Je comprends que mon activité de visionnage sera partagée avec l'hôte de l'événement et ses prestataires de services connectés."
                },
                "ja-JP": {
                  singular: "私は、私の視聴アクティビティがイベント主催者とそれらに関連するサービスプロバイダーと共有されることに同意します。"
                },
                "ko-KR": {
                  singular: "내 시청 활동이 이벤트 호스트 및 연결된 서비스 제공업체와 공유된다는 것을 이해합니다."
                },
                "pt-BR": {
                  singular: "Estou ciente de que minha atividade de visualização será compartilhada com o organizador do evento e seus provedores de serviço conectados."
                },
                "zh-CN": {
                  singular: "我了解我的观看活动将与活动主办方及其相关服务提供商共享。"
                }
              }
            }) : (0, _v87.translate)({
              locale: _v0,
              singular: "I understand that my viewing activity will be shared with the event host.",
              dictionary: {
                es: {
                  singular: "Entiendo que mi actividad de visualización se compartirá con el anfitrión del evento."
                },
                "de-DE": {
                  singular: "Ich verstehe, dass meine Zuschauendenaktivitäten mit dem Veranstalter geteilt werden."
                },
                "fr-FR": {
                  singular: "Je comprends que mon activité de visionnage sera partagée avec l'hôte de l'événement."
                },
                "ja-JP": {
                  singular: "私は、私の視聴アクティビティがイベント主催者と共有されることを理解しています。"
                },
                "ko-KR": {
                  singular: "내 시청 활동이 이벤트 호스트와 공유된다는 것을 이해합니다."
                },
                "pt-BR": {
                  singular: "Estou ciente que minha atividade de visualização será compartilhada com o organizador do evento."
                },
                "zh-CN": {
                  singular: "我了解我的观看活动将与活动主办方共享。"
                }
              }
            });
        }
      }, [_v5, _v7, _v6, _v0, _v3, _v4]),
      _v11 = (0, _v2.useMemo)(() => {
        switch (_v2) {
          case _v6.ENTITY_TYPE.VIDEO:
            return _v8;
          case _v6.ENTITY_TYPE.EVENT:
            return _v10;
          case _v6.ENTITY_TYPE.SHOWCASE:
            return _v9;
          default:
            return _v10;
        }
      }, [_v2, _v8, _v10]);
    return (0, _v2.useMemo)(() => ({
      version: _v5,
      copy: _v11
    }), [_v5, _v11]);
  };
  _v0.s(["usePrivacyPolicy", 0, _v114], 0);
  var _v115 = _v0.i(0);
  let _v116 = (0, _v2.forwardRef)(({
      label: _v0,
      error: _v1 = !1,
      onChange: _v2,
      validator: _v3,
      ..._v4
    }, _v5) => {
      let _v6 = (0, _v2.useRef)(null),
        _v7 = (0, _v2.useMemo)(() => (0, _v18.makeId)(10), []),
        [_v8, _v9] = (0, _v2.useState)(!1),
        [_v10, _v11] = (0, _v2.useState)(""),
        _v12 = (0, _v2.useRef)(null),
        _v13 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.primaryButtonStyle.buttonColor) || "rgba(0, 173, 239)",
        _v14 = _v0 => {
          let _v1 = _v3?.(_v0 ?? !1);
          return _v1 ? (_v11(_v1), _v12.current?.shakeError(), !1) : (_v11(""), !0);
        };
      return (0, _v2.useImperativeHandle)(_v5, () => ({
        validate: () => _v14(_v6.current?.checked),
        getValue: () => ""
      })), (0, _v1.jsxs)(_v4.Flex, {
        sx: {
          ".container": {
            display: "block",
            position: "relative",
            paddingLeft: (0, _v10.rem)(22),
            marginBottom: (0, _v10.rem)(22),
            cursor: "pointer",
            fontSize: (0, _v10.rem)(22),
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none"
          },
          ".container input": {
            position: "absolute",
            opacity: 0,
            cursor: "pointer",
            height: 0,
            width: 0
          },
          ".checkmark": {
            position: "absolute",
            top: (0, _v10.rem)(1),
            left: (0, _v10.rem)(1),
            justifyContent: "center",
            alignItems: "center",
            height: (0, _v10.rem)(20),
            width: (0, _v10.rem)(20),
            backgroundColor: "#eee",
            borderRadius: (0, _v10.rem)(4)
          },
          ".container input:checked ~ .checkmark": {
            backgroundColor: _v13
          },
          ".checkmark:after": {
            content: "''",
            position: "absolute",
            display: "none"
          },
          ".container input:checked ~ .checkmark:after": {
            display: "block"
          },
          ".container .checkmark:after": {
            left: (0, _v10.rem)(8),
            top: (0, _v10.rem)(4),
            width: (0, _v10.rem)(4.5),
            height: (0, _v10.rem)(10.5),
            border: "solid white",
            borderWidth: `0 ${(0, _v10.rem)(2.1)} ${(0, _v10.rem)(2.1)} 0`,
            WebkitTransform: "rotate(45deg)",
            msTransform: "rotate(45deg)",
            transform: "rotate(45deg)"
          }
        },
        children: [(0, _v1.jsx)(_v115.Center, {
          p: "px",
          boxSize: (0, _v10.rem)(26),
          mr: (0, _v10.rem)(10),
          borderRadius: "input-xs",
          border: `${(0, _v10.rem)(2)} solid`,
          borderColor: _v8 ? _v13 : _v1 || _v10?.length > 0 ? "#e22b12" : "transparent",
          _hover: {
            borderColor: _v13
          },
          children: (0, _v1.jsxs)("label", {
            className: "container",
            children: [(0, _v1.jsx)("input", {
              type: "checkbox",
              style: {
                margin: 0
              },
              id: _v7,
              ref: _v6,
              onKeyDown: _v0 => {
                _v0.key === _v26.KEY_CODES.ENTER && _v6.current?.click();
              },
              onFocus: () => _v9(!0),
              onBlur: () => _v9(!1),
              onChange: _v0 => {
                _v2?.(_v0), _v14(_v0.target.checked);
              },
              ..._v4
            }), (0, _v1.jsx)("span", {
              className: "checkmark"
            })]
          })
        }), (0, _v1.jsx)(_v115.Center, {
          as: "label",
          htmlFor: _v7,
          children: _v0
        }), !!_v10 && (0, _v1.jsx)(_v106, {
          topOffset: 28,
          ref: _v12,
          error: _v10
        })]
      });
    }),
    _v117 = (0, _v2.forwardRef)(({
      checked: _v0,
      onChange: _v1,
      error: _v2
    }, _v3) => {
      let _v4 = (0, _v2.useRef)(null),
        {
          copy: _v5,
          version: _v6
        } = _v114(),
        _v7 = (0, _v22.useViewerStrings)(),
        _v8 = 2 === _v6 ? _v26.PENDO_DATA_ID.PRIVACY_POLICY_V2 : _v26.PENDO_DATA_ID.PRIVACY_POLICY_V1;
      return (() => {
        let _v0 = (0, _v17.useGlobalStore)(_v0 => _v0.entityId),
          _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.entityType),
          {
            currentPageType: _v2
          } = (0, _v2.useContext)(_v11.CurrentPageContext),
          [_v3, {
            data: _v4,
            loading: _v5,
            called: _v6
          }] = (0, _v92.useGetLeadCaptureResourceIdFormLazy)();
        (0, _v2.useEffect)(() => {
          _v5 || _v6 || _v2 === _v26.PAGE_TYPES.ADMIN && _v1 === _v6.ENTITY_TYPE.EVENT && _v3({
            where: {
              resourceId: _v0,
              resourceType: _v6.ENTITY_TO_PATH_MAP[_v1]
            },
            select: ["has_previous_lc_form_with_privacy_policy_v1"]
          });
        }, [_v2, _v0, _v5, _v6]), (0, _v2.useEffect)(() => {
          if (!_v4) return;
          let {
            hasPreviousLcFormWithPrivacyPolicyV1: _v0 = !1
          } = _v4;
          _v113.PendoClient.updateOptions({
            visitor: {
              client_is_returning_cg_user: _v0
            }
          });
        }, [_v4]);
      })(), (0, _v2.useImperativeHandle)(_v3, () => ({
        shakeError() {
          _v4.current?.shakeError();
        }
      })), (0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        children: [(0, _v1.jsx)(_v116, {
          "data-id": _v8,
          error: _v2,
          checked: _v0,
          onChange: _v0 => {
            _v1(_v0.target.checked);
          },
          "aria-label": "Vimeo’s Terms of Service and Privacy Policy",
          label: (0, _v1.jsx)(_v31.StylableNonEditText, {
            fieldName: _v26.NON_EDIT_FIELDS.PRIVACY_POLICY,
            children: (0, _v1.jsx)(_v3.Box, {
              fontSize: "body-sm",
              fontWeight: "normal",
              lineHeight: (0, _v10.rem)(18),
              textAlign: "left",
              cursor: "pointer",
              sx: {
                a: {
                  textDecoration: "underline",
                  fontSize: (0, _v10.rem)(11),
                  color: "blue.500"
                },
                "a:hover": {
                  color: "blue.500 !important"
                }
              },
              children: _v5
            })
          })
        }), _v2 && (0, _v1.jsx)(_v106, {
          topOffset: 28,
          ref: _v4,
          error: _v7.OptingInIsRequired
        })]
      });
    }),
    _v118 = ({
      setLeadUuid: _v0
    }) => {
      let _v1 = _v21(),
        _v2 = (0, _v14.useFormLocale)(),
        _v3 = (0, _v22.useViewerStrings)(),
        _v4 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.logo),
        _v5 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.alignment),
        _v6 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.loginPageTitle.tagsResolved),
        _v7 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.loginPageTitle.tagsUnresolved) || "",
        _v8 = _v19("loginPageTitle", _v6),
        _v9 = _v20("loginPageTitle", _v7),
        _v10 = (0, _v17.useGlobalStore)(_v0 => _v0.setEmailAddressCached),
        _v11 = (0, _v17.useGlobalStore)(_v0 => _v0.emailAddressCached),
        _v12 = (0, _v17.useGlobalStore)(_v0 => _v0.entityType),
        _v13 = (0, _v17.useGlobalStore)(_v0 => _v0.entityId),
        {
          currentPageType: _v14
        } = (0, _v2.useContext)(_v11.CurrentPageContext),
        _v15 = (0, _v2.useRef)(null),
        _v16 = (0, _v17.useGlobalStore)(_v0 => _v0.setSideMenuType),
        {
          previewMode: _v17
        } = (0, _v2.useContext)(_v12.PreviewContext),
        _v18 = (0, _v2.useRef)(null),
        {
          editor: _v19,
          setEditor: _v20
        } = (0, _v13.useRichTextContext)(),
        _v21 = (0, _v17.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
        {
          setPreviewType: _v22
        } = (0, _v2.useContext)(_v12.PreviewContext),
        [_v23, _v24] = _v86(),
        _v25 = (0, _v79.useToast)(),
        _v26 = (0, _v17.useGlobalStore)(_v0 => _v0.authRoomPassword),
        _v27 = (0, _v17.useGlobalStore)(_v0 => _v0.pageReferrer),
        {
          refreshConfirmationPageHTML: _v28,
          refreshConfirmationPageHTMLState: _v29
        } = _v93(),
        [_v30, _v31] = (0, _v2.useState)(!1),
        _v32 = (0, _v2.useRef)(null),
        [_v33, _v34] = (0, _v2.useState)(!1),
        [_v35, _v36] = (0, _v2.useState)(!1),
        [_v37, _v38] = (0, _v2.useState)(),
        {
          isMiniaturePreview: _v39
        } = (0, _v12.usePreviewContext)(),
        _v40 = _v91(_v26.FEATURES.CONFIRMATION_VIEW),
        _v41 = (0, _v2.useCallback)(() => {
          _v18.current?.getHTML() !== _v9 && _v14 === _v26.PAGE_TYPES.ADMIN && _v1("loginPageTitle", _v7, _v18.current?.getHTML());
        }, [_v14, _v9, _v7, _v1]),
        _v42 = async () => {
          let _v0 = _v15.current?.validate();
          if ((_v34(!_v35), _v32.current?.shakeError(), _v0) && _v35) {
            let _v0;
            if (_v14 === _v26.PAGE_TYPES.ADMIN) return void _v22(_v26.PREVIEW_TYPE.CONFIRMATION);
            _v0 = (0, _v88.getEntityCookiePassword)(_v13, _v12) ?? _v26, _v38(void 0), _v23({
              select: [],
              query: {
                ...(_v0 && {
                  password: _v0
                }),
                ...(_v27 && {
                  referrer: _v27
                })
              },
              variables: {
                email: _v15.current?.getValue() || ""
              },
              where: {
                resourceId: _v13,
                resourceType: _v6.ENTITY_TO_PATH_MAP[_v12]
              }
            });
          }
        },
        _v43 = () => {
          _v22(_v26.PREVIEW_TYPE.FORM), _v21(0);
        };
      return (0, _v2.useEffect)(() => {
        let {
          loading: _v0,
          data: _v1
        } = _v24;
        if (!_v0 && _v1) {
          if (_v40) _v28((0, _v89.getLastUuidFromUri)(_v1.uri));else {
            let _v0 = (0, _v89.getLastUuidFromUri)(_v1?.uri);
            (0, _v88.setCookie)(_v13, _v0), _v0?.(_v0);
          }
          _v31(!0);
        }
      }, [_v24, _v13, _v0, _v22]), (0, _v2.useEffect)(() => {
        let {
            data: _v0
          } = _v24,
          _v1 = (0, _v89.getLastUuidFromUri)(_v0?.uri);
        _v30 && !_v29.loading && _v29.data && _v0 && _v1 && ((0, _v88.setCookie)(_v13, _v1), _v0 && _v0(_v1), _v22(_v26.PREVIEW_TYPE.CONFIRMATION), _v21(0));
      }, [_v29, _v22, _v0, _v30, _v24, _v13]), (0, _v2.useEffect)(() => {
        if (_v14 === _v26.PAGE_TYPES.ADMIN) {
          let _v0 = _v19?.view.state.selection;
          _v18.current?.setHTML(_v9), _v0 && _v19?.chain().setTextSelection({
            from: _v0.from,
            to: _v0.to
          }).run();
        }
      }, [_v9, _v14]), (0, _v2.useEffect)(() => {
        _v14 === _v26.PAGE_TYPES.REGISTRATION && _v18.current?.setHTML(_v8);
      }, [_v14, _v8]), (0, _v2.useEffect)(() => {
        _v15.current && (_v15.current.value = _v11);
      }, []), (0, _v2.useEffect)(() => {
        let {
          loading: _v0,
          error: _v1
        } = _v24;
        _v1 && !_v0 && _v1?.res?.json().then(_v0 => {
          switch ((0, _v80.deepCamelCase)(_v0).errorCode) {
            case _v26.LOGIN_ERROR_CODES.NOT_REGISTERED:
              _v38(_v3.RegisterToSignIn);
              break;
            case _v26.LOGIN_ERROR_CODES.INVALID_EMAIL:
              _v38(_v3.InvalidEmailAddress);
              break;
            default:
              _v25({
                title: _v3.UhOhThereWasAProblem,
                status: "error"
              });
          }
        });
      }, [_v24.error, _v29.error]), (0, _v1.jsx)(_v75, {
        previewMode: _v17,
        onMouseDownCapture: _v0 => {
          _v0.target == _v0.currentTarget && (_v16(_v26.SIDE_MENU_CONTENT.SETTINGS), _v20(null));
        },
        align: _v5,
        isMiniaturePreview: _v39,
        children: (0, _v1.jsxs)(_v74, {
          pt: "3xl",
          pb: (0, _v10.rem)(98),
          maxWidth: _v26.PREVIEW_FORM_FIELDS_WIDTH + 8,
          children: [_v4.isActive && (0, _v1.jsx)(_v77, {
            showColorOnHover: _v14 === _v26.PAGE_TYPES.ADMIN,
            variant: "minimal",
            ...(_v4.isLinkActive && (_v4.customLink?.length ?? 0) > 0 && _v14 === _v26.PAGE_TYPES.REGISTRATION ? {
              href: _v4.customLink || "",
              target: "_blank"
            } : {}),
            onClick: () => {
              _v14 === _v26.PAGE_TYPES.ADMIN && _v16(_v26.SIDE_MENU_CONTENT.LOGO);
            },
            children: (0, _v1.jsx)(_v76, {
              src: _v4.url
            })
          }), (0, _v1.jsxs)(_v3.Box, {
            px: "xs",
            children: [(0, _v1.jsx)(_v66, {
              ref: _v18,
              saveChanges: _v41,
              onBlur: _v41,
              content: _v14 === _v26.PAGE_TYPES.ADMIN ? _v9 : _v8,
              maxCharacter: _v26.RTF_STYLABLE_TEXT_DEFAULT_LIMIT,
              overRideFontSize: !0
            }), (0, _v1.jsx)(_v32, {}), (0, _v1.jsx)(_v109, {
              autoFocus: !0,
              validator: (0, _v94.getValidator)(_v26.FORM_FIELD_NAME_VALUES.EMAIL, _v3),
              ref: _v15,
              onBlur: _v0 => {
                _v10(_v0);
              },
              value: _v11,
              placeholder: _v26.FORM_FIELD_NAME_VALUES.EMAIL,
              onEnterKeyPressed: _v42,
              errorMessage: _v37
            }), (0, _v1.jsx)(_v3.Box, {
              mt: (0, _v10.rem)(10),
              children: (0, _v1.jsx)(_v117, {
                ref: _v32,
                error: _v33,
                checked: _v35,
                onChange: _v0 => {
                  _v36(_v0), _v34(!_v0);
                }
              })
            }), (0, _v1.jsx)(_v3.Box, {
              mt: (0, _v10.rem)(10),
              children: (0, _v1.jsx)(_v99, {
                onClick: _v42,
                role: _v26.BUTTON_ROLES.PRIMARY,
                textType: _v26.BUTTON_TEXT_TYPE.LOGIN,
                loading: _v24.loading,
                disabled: _v24.loading
              })
            }), (0, _v1.jsx)(_v3.Box, {
              mt: (0, _v10.rem)(10),
              children: (0, _v1.jsx)(_v31.StylableNonEditText, {
                fieldName: _v26.NON_EDIT_FIELDS.DO_NOT_HAVE_ACCOUNT,
                children: (0, _v1.jsx)(_v68.Text, {
                  variant: "body-md",
                  children: (0, _v87.translate)({
                    singular: "Not signed up? {LINK}Register{/LINK}",
                    locale: _v2,
                    replacements: {
                      LINK: _v0 => (0, _v1.jsx)(_v3.Box, {
                        as: "u",
                        cursor: "pointer",
                        tabIndex: 0,
                        onKeyDown: _v0 => _v0.key === _v26.KEY_CODES.ENTER && _v22(_v26.PREVIEW_TYPE.FORM),
                        onClick: _v43,
                        children: _v0
                      })
                    },
                    dictionary: {
                      es: {
                        singular: "¿No se ha inscrito? {LINK}Registrarse{/LINK}"
                      },
                      "de-DE": {
                        singular: "Du hast noch kein Konto? {LINK}Registrieren{/LINK}"
                      },
                      "fr-FR": {
                        singular: "Vous n'êtes pas encore inscrit ? {LINK}S'inscrire{/LINK}"
                      },
                      "ja-JP": {
                        singular: "サインアップしていない場合は、{LINK}登録{/LINK}してください"
                      },
                      "ko-KR": {
                        singular: "회원가입을 하지 않으셨나요? {LINK}등록하기{/LINK}"
                      },
                      "pt-BR": {
                        singular: "Não se inscreveu? {LINK}Cadastre-se{/LINK}"
                      },
                      "zh-CN": {
                        singular: "尚未注册？{LINK}注册{/LINK}"
                      }
                    }
                  })
                })
              })
            })]
          })]
        })
      });
    };
  async function _v119({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      resourceType: _v3,
      resourceId: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v82.measureLatency)("putLeadCaptureResourceIdRegistrants", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v3}/${_v4}/registrants?${(0, _v80.searchQueryString)(_v5)}&fields=${_v1.map(_v80.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "PUT",
        body: JSON.stringify((0, _v80.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v80.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v80.deepCamelCase)(_v1);
    });
  }
  _v0.i(0), _v0.i(0);
  var _v120 = _v0.i(0);
  let _v121 = ({
    currentStep: _v0,
    totalStep: _v1
  }) => {
    let _v2 = (0, _v22.useViewerStrings)(),
      _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.primaryButtonStyle.buttonColor),
      _v4 = (0, _v57.useRtfStore)(_v0 => _v0.buttonLivePreview.showPreview),
      _v5 = (0, _v57.useRtfStore)(_v0 => _v0.buttonLivePreview.selectedButton),
      _v6 = (0, _v57.useRtfStore)(_v0 => _v0.buttonLivePreview.buttonColor),
      _v7 = (_v4 && _v5?.role === _v26.BUTTON_ROLES.PRIMARY ? _v6 : _v3) || "blue.500";
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.Box, {
        pb: "sm",
        fontSize: "body-lg",
        zIndex: 100,
        pointerEvents: "none",
        children: _v2.StepXofY(_v0, _v1)
      }), (0, _v1.jsx)(_v120.Progress, {
        pointerEvents: "none",
        zIndex: 1,
        colorScheme: _v7,
        sx: {
          "[role=progressbar]": {
            bgColor: _v7
          }
        },
        size: "xs",
        value: _v0 / _v1 * 100,
        background: "gray.100"
      })]
    });
  };
  var _v122 = _v0.i(0);
  let _v123 = _v0 => (0, _v1.jsx)(_v122.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M18.562 14.634 14 12l4.562-2.634a1 1 0 0 0-1-1.732L13 10.268V5a1 1 0 0 0-2 0v5.268L6.438 7.634a1 1 0 0 0-1 1.732L10 12l-4.562 2.634a1 1 0 0 0 1 1.732L11 13.732V19a1 1 0 0 0 2 0v-5.268l4.562 2.634a1 1 0 0 0 1-1.732Z",
      fill: "currentColor"
    })
  });
  _v0.s(["Asterisk", 0, _v123], 0);
  let _v124 = (0, _v2.forwardRef)(({
    content: _v0,
    editable: _v1 = !1,
    maxCharacter: _v2 = 0,
    scrollTopOnBlur: _v3 = !1,
    onBlur: _v4 = () => void 0,
    onFocus: _v5 = () => void 0,
    onKeyDown: _v6 = () => void 0,
    onSelectionUpdate: _v7 = () => void 0,
    onUpdate: _v8 = () => void 0,
    ..._v9
  }, _v10) => {
    let _v11 = (0, _v2.useRef)(null),
      _v12 = (0, _v38.useEditor)({
        extensions: [_v39.default, _v35, _v36, _v60, _v61, _v65, _v37.default.configure({
          openOnClick: !1
        }), _v63.configure({
          types: ["heading", "paragraph"],
          alignments: ["left", "center", "right", "justify"]
        }), _v64.configure({
          limit: _v1 ? _v2 : 0
        }), _v59.configure({
          stripStyles: !0
        })],
        content: `${_v40.default.sanitize(_v0, {
          ADD_ATTR: ["target"]
        })}`,
        onFocus: () => {
          _v5();
        },
        onBlur: () => {
          _v4(_v12?.getHTML()), _v3 && _v11.current && (_v11.current.scrollTop = 0);
        },
        onUpdate: _v8,
        onSelectionUpdate: _v7,
        editable: _v1
      });
    return (0, _v2.useImperativeHandle)(_v10, () => ({
      getHTML: () => _v12?.getHTML(),
      setHTML: _v0 => _v12?.chain().setMeta(_v26.CHARACTER_LIMIT_BYPASS_META, !0).setContent(_v0).run(),
      addLink(_v0) {
        _v12?.chain().focus().setLink({
          href: _v0
        }).run();
      },
      removeLink() {
        _v12?.chain().focus().unsetLink().run();
      },
      getEditor: () => _v12,
      focus() {
        _v12?.chain().focus().selectAll().run();
      },
      getText: () => _v12?.getText()
    })), (0, _v1.jsx)(_v4.Flex, {
      fontSize: (0, _v10.rem)(14),
      ref: _v11,
      ..._v9,
      children: (0, _v1.jsx)(_v55, {
        editor: _v12,
        padding: 0,
        onKeyDown: _v6,
        cursor: "pointer",
        border: "none"
      })
    });
  });
  _v0.s(["EditableTextWithRTF", 0, _v124], 0);
  let _v125 = (0, _v2.forwardRef)(({
    index: _v0,
    isRequired: _v1,
    label: _v2,
    color: _v3,
    onChange: _v4
  }, _v5) => {
    let _v6 = (0, _v57.useRtfStore)(_v0 => _v0.fieldLivePreview.showPreview),
      _v7 = (0, _v57.useRtfStore)(_v0 => _v0.fieldLivePreview.color),
      _v8 = (0, _v57.useRtfStore)(_v0 => _v0.fieldLivePreview.index),
      {
        currentPageType: _v9
      } = (0, _v2.useContext)(_v11.CurrentPageContext),
      _v10 = (0, _v17.useGlobalStore)(_v0 => _v0.setSideMenuType),
      _v11 = (0, _v17.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
      _v12 = (0, _v2.useRef)(null),
      _v13 = (0, _v22.useViewerStrings)(),
      _v14 = _v6 && _v0 === _v8 ? _v7 : _v3;
    return (0, _v2.useEffect)(() => {
      let _v0 = _v12.current?.getHTML();
      _v2 && _v0 && _v2 !== _v0 && _v12.current?.setHTML(_v2);
    }, [_v2]), (0, _v1.jsx)(_v3.Box, {
      position: "relative",
      children: (0, _v1.jsx)(_v116, {
        ref: _v5,
        label: (0, _v1.jsx)(_v4.Flex, {
          border: `${(0, _v10.rem)(2)} solid`,
          borderColor: "transparent",
          borderRadius: (0, _v10.rem)(8),
          color: _v14,
          _hover: {
            borderColor: _v9 === _v26.PAGE_TYPES.ADMIN ? _v26.COLORS.VIMEO_BLUE : "transparent"
          },
          onClick: () => {
            _v9 === _v26.PAGE_TYPES.ADMIN && (_v11(_v0), _v10(_v26.SIDE_MENU_CONTENT.CHECKBOX_STYLING));
          },
          children: (0, _v1.jsxs)(_v4.Flex, {
            textAlign: "left",
            color: _v14,
            overflow: "hidden",
            wordBreak: "break-word",
            sx: {
              a: {
                textDecorationColor: "white"
              }
            },
            children: [(0, _v1.jsx)(_v124, {
              ref: _v12,
              fontSize: (0, _v10.rem)(11),
              content: _v2
            }), _v1 && (0, _v1.jsx)(_v123, {
              marginLeft: (0, _v10.rem)(4),
              boxSize: (0, _v10.rem)(10),
              color: "red",
              verticalAlign: "top"
            })]
          })
        }),
        validator: (0, _v94.getValidator)(_v2, _v13, _v1),
        onChange: _v4
      })
    });
  });
  var _v126 = _v0.i(0);
  let _v127 = (0, _v2.forwardRef)(({
      options: _v0 = [],
      placeholder: _v1,
      selected: _v2,
      required: _v3,
      autoFocus: _v4,
      onSelectedChanged: _v5,
      validator: _v6
    }, _v7) => {
      let [_v8, _v9] = (0, _v2.useState)(),
        [_v10, _v11] = (0, _v2.useState)(),
        [_v12, _v13] = (0, _v2.useState)(!1),
        _v14 = (0, _v2.useRef)(null),
        _v15 = (0, _v2.useRef)(null),
        _v16 = _v0 => {
          let _v1 = _v6?.(_v0 || "");
          return _v1 ? (_v11(_v1), _v14.current?.shakeError(), !1) : (_v11(void 0), !0);
        };
      return (0, _v2.useEffect)(() => {
        _v9(_v2);
      }, [_v2]), (0, _v2.useEffect)(() => {
        _v4 && _v15.current?.focus();
      }, [_v4, _v15]), (0, _v2.useImperativeHandle)(_v7, () => ({
        validate: () => _v16(_v8?.optionValue ?? _v8?.optionLabel),
        getValue: () => _v8?.optionValue ?? _v8?.optionLabel ?? ""
      })), (0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        children: [(0, _v1.jsxs)(_v3.Box, {
          as: "select",
          ref: _v15,
          width: "100%",
          height: (0, _v10.rem)(55),
          onChange: _v0 => {
            let _v1 = _v0.target.value,
              _v2 = _v0.find(_v0 => (_v0.optionValue ?? _v0.optionLabel) === _v1);
            _v5?.(_v2), _v9?.(_v2), _v16(_v1);
          },
          opacity: 0,
          onFocus: () => _v13(!0),
          onBlur: () => _v13(!1),
          outline: "none",
          "aria-label": _v1 + " dropdown",
          value: _v8?.optionValue ?? _v8?.optionLabel,
          "aria-required": _v3,
          color: "black",
          background: "white",
          children: [(0, _v1.jsx)(_v3.Box, {
            as: "option",
            value: "",
            selected: !0,
            children: _v1
          }), _v0.map((_v0, _v1) => (0, _v1.jsx)(_v3.Box, {
            as: "option",
            value: _v0.optionValue ?? _v0.optionLabel,
            children: _v0?.optionLabel
          }, _v0.optionCid ?? _v0.optionLabel + _v1))]
        }), (0, _v1.jsxs)(_v3.Box, {
          borderRadius: "sm",
          height: (0, _v10.rem)(55),
          textAlign: "left",
          pl: "sm",
          fontSize: "body-sm",
          border: `${_v10 || _v12 ? (0, _v10.rem)(2) : (0, _v10.rem)(1)} solid`,
          borderColor: void 0 !== _v10 ? "red.500" : _v12 ? "blue.500" : "grayscale.200",
          background: "white",
          color: "slate.500",
          width: "100%",
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          children: [_v8 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v4.Flex, {
              alignItems: "center",
              width: "90%",
              children: [(0, _v1.jsx)(_v3.Box, {
                pt: (0, _v10.rem)(7),
                fontSize: "body-md",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                children: _v1
              }), _v3 && (0, _v1.jsx)(_v128, {})]
            }), (0, _v1.jsx)(_v3.Box, {
              fontSize: "body-md",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "90%",
              textColor: "black",
              children: _v8.optionLabel
            })]
          }) : (0, _v1.jsxs)(_v4.Flex, {
            alignItems: "center",
            width: "90%",
            height: "100%",
            children: [(0, _v1.jsx)(_v3.Box, {
              fontSize: "body-md",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              children: _v1
            }), _v3 && (0, _v1.jsx)(_v128, {})]
          }), (0, _v1.jsx)(_v3.Box, {
            position: "absolute",
            top: (0, _v10.rem)(15),
            right: (0, _v10.rem)(10),
            children: (0, _v1.jsx)(_v126.ChevronDown, {
              width: (0, _v10.rem)(18)
            })
          })]
        }), _v10 && (0, _v1.jsx)(_v106, {
          error: _v10,
          ref: _v14
        })]
      });
    }),
    _v128 = () => (0, _v1.jsx)(_v3.Box, {
      as: "span",
      pl: (0, _v10.rem)(2),
      color: "red.500",
      children: "*"
    }),
    _v129 = ({
      field: _v0,
      value: _v1,
      onSaveValue: _v2,
      fieldElementRefs: _v3,
      index: _v4,
      autoFocus: _v5 = !0,
      onEnterKeyPressed: _v6,
      errorMessage: _v7
    }) => {
      let _v8 = (0, _v14.useFormLocale)(),
        _v9 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.defaultLocale),
        _v10 = (0, _v22.useViewerStrings)();
      if (!_v0) return null;
      let _v11 = (0, _v16.resolveLocalizedField)(_v0, _v8, _v9);
      return (0, _v1.jsx)(_v130, {
        children: (() => {
          let {
            type: _v0,
            name: _v1,
            metadata: _v2,
            isRequired: _v3
          } = _v11;
          switch (_v0) {
            case _v26.CustomFieldTypes.Text:
              return (0, _v1.jsx)(_v109, {
                onBlur: _v0 => {
                  _v2(_v0);
                },
                onEnterKeyPressed: _v0 => _v6(_v0),
                autoFocus: _v5,
                ref: _v0 => {
                  _v3[_v4] = _v0;
                },
                value: "string" == typeof _v1 ? _v1 : void 0,
                placeholder: _v1,
                required: _v3,
                validator: (0, _v94.getValidator)(_v1, _v10, _v3),
                errorMessage: _v7
              });
            case _v26.CustomFieldTypes.Dropdown:
              {
                let _v0 = null != _v1 && "object" == typeof _v1 ? _v2?.options?.find(_v0 => (_v0.optionValue ?? _v0.optionLabel) === (_v1.optionValue ?? _v1.optionLabel)) : void 0;
                return (0, _v1.jsx)(_v127, {
                  onSelectedChanged: _v0 => {
                    _v2(_v0);
                  },
                  autoFocus: _v5,
                  ref: _v0 => {
                    _v3[_v4] = _v0;
                  },
                  selected: _v0,
                  placeholder: _v1,
                  required: _v11.isRequired,
                  options: _v2?.options || [],
                  validator: (0, _v94.getValidator)(_v1, _v10, _v3)
                });
              }
            case _v26.CustomFieldTypes.Checkbox:
              return (0, _v1.jsx)(_v125, {
                index: _v4,
                label: _v11.metadata?.description || "",
                isRequired: _v11.isRequired,
                color: _v11.metadata?.color || "white",
                ref: _v0 => {
                  _v3[_v4] = _v0;
                },
                onChange: _v0 => _v2(_v0.target.checked)
              });
            case _v26.CustomFieldTypes.Description:
              return (0, _v1.jsx)(_v68.Text, {
                variant: "body-md",
                textAlign: "center",
                width: "100%",
                children: _v1
              });
            default:
              return null;
          }
        })()
      });
    },
    _v130 = _v0 => (0, _v1.jsx)(_v3.Box, {
      mb: "md",
      width: "100%",
      mt: (0, _v10.rem)(2),
      ..._v0,
      children: _v0.children
    }),
    _v131 = "30px",
    _v132 = _v67.keyframes`
  0%{
    transform: translateY(0);
    opacity: 1;
  }
  100%{
    transform: translateY(-${_v131});
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`,
    _v133 = _v67.keyframes`
  0% {
    transform: translateY(${_v131});
     opacity: 0;
   }
   100% {
    transform: translateY(0);
     opacity: 1;
   }
`,
    _v134 = _v67.keyframes`
0% {
    transform: translateY(-${_v131});
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,
    _v135 = _v67.keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(${_v131});
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`,
    _v136 = ({
      onSaveValue: _v0,
      onEnterKeyPressed: _v1,
      onCheckboxChecked: _v2,
      onNextClick: _v3,
      onMultiStepSubmit: _v4,
      fieldElementRefs: _v5,
      agreeCheckboxRef: _v6,
      animationDirection: _v7,
      inputtedData: _v8,
      agreeCheckboxChecked: _v9,
      agreeCheckboxNotCheckedError: _v10,
      checkValidEmailStateLoading: _v11,
      apiError: _v12,
      disableButton: _v13,
      autoFocus: _v14
    }) => {
      let _v15 = (0, _v17.useGlobalStore)(_v0 => _v0.currentSelectedFieldIndex),
        _v16 = (0, _v17.useGlobalStore)(_v0 => _v0.lastSelectedFieldIndex),
        _v17 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        _v18 = (0, _v2.useRef)([]),
        {
          setPreviewType: _v19
        } = (0, _v2.useContext)(_v12.PreviewContext),
        _v20 = (0, _v14.useFormLocale)(),
        _v21 = (0, _v17.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex);
      return (0, _v1.jsxs)(_v3.Box, {
        pt: "sm",
        children: [(0, _v1.jsx)(_v3.Box, {
          position: "relative",
          width: "100%",
          minHeight: (0, _v10.rem)(_v18.current[_v15]?.clientHeight || 60),
          overflow: "visible",
          zIndex: 1,
          children: _v17.map((_v0, _v1) => {
            let _v2 = _v1 === _v15;
            return (0, _v1.jsx)(_v3.Box, {
              ref: _v0 => {
                _v18.current[_v1] = _v0;
              },
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              animation: "up" === _v7.current ? _v2 ? `${_v133} .2s forwards` : `${_v132} .2s forwards` : _v2 ? `${_v134} .2s forwards` : `${_v135} .2s forwards`,
              visibility: [_v15, _v16].includes(_v1) ? "visible" : "hidden",
              children: (0, _v1.jsx)(_v129, {
                value: _v8.find(_v0 => _v0.cid === _v0?.cid)?.value,
                onSaveValue: _v0 => _v0(_v0, _v1),
                onEnterKeyPressed: _v0 => _v1(_v0, _v0.cid),
                fieldElementRefs: _v5.current,
                field: _v0,
                index: _v1,
                autoFocus: _v14 && _v2,
                errorMessage: _v0?.name === _v26.FORM_FIELD_NAME_VALUES.EMAIL ? _v12 : ""
              })
            }, _v0.cid);
          })
        }), _v15 === _v17.length - 1 && (0, _v1.jsx)(_v117, {
          ref: _v6,
          checked: _v9,
          error: _v10,
          onChange: _v0 => _v2(_v0)
        }), (0, _v1.jsxs)(_v137, {
          children: [0 !== _v15 && (0, _v1.jsx)(_v4.Flex, {
            flex: 1,
            children: (0, _v1.jsx)(_v99, {
              disabled: 0 === _v15 || _v13,
              onClick: () => {
                _v7.current = "down", _v21(_v15 - 1);
              },
              role: _v26.BUTTON_ROLES.SECONDARY,
              textType: _v26.BUTTON_TEXT_TYPE.BACK
            })
          }), (0, _v1.jsxs)(_v4.Flex, {
            flex: 1,
            children: [_v15 < _v17.length - 1 && (0, _v1.jsx)(_v99, {
              role: _v26.BUTTON_ROLES.PRIMARY,
              onClick: _v3,
              textType: _v26.BUTTON_TEXT_TYPE.NEXT,
              loading: _v11,
              disabled: _v11
            }), _v15 === _v17.length - 1 && (0, _v1.jsx)(_v99, {
              role: _v26.BUTTON_ROLES.PRIMARY,
              onClick: _v4,
              textType: _v26.BUTTON_TEXT_TYPE.REGISTER,
              loading: _v13,
              disabled: _v13
            })]
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          mt: "md",
          children: (0, _v1.jsx)(_v31.StylableNonEditText, {
            fieldName: _v26.NON_EDIT_FIELDS.ALREADY_REGISTERED,
            children: (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: (0, _v1.jsx)(_v68.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "Already registered? {LINK}Sign in{/LINK}",
                  locale: _v20,
                  replacements: {
                    LINK: _v0 => (0, _v1.jsx)(_v3.Box, {
                      as: "u",
                      cursor: "pointer",
                      tabIndex: 0,
                      onKeyDown: _v0 => _v0.key === _v26.KEY_CODES.ENTER && _v19(_v26.PREVIEW_TYPE.LOGIN_SCREEN),
                      onClick: () => _v19(_v26.PREVIEW_TYPE.LOGIN_SCREEN),
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "¿Ya está registrado? {LINK}Inicie sesión{/LINK}"
                    },
                    "de-DE": {
                      singular: "Schon registriert? {LINK}Einloggen{/LINK}"
                    },
                    "fr-FR": {
                      singular: "Déjà inscrit(e) ? {LINK}Connectez-vous{/LINK}"
                    },
                    "ja-JP": {
                      singular: "すでにご登録済みですか？ {LINK}ログイン{/LINK}"
                    },
                    "ko-KR": {
                      singular: "이미 가입하셨나요? {LINK}로그인{/LINK}"
                    },
                    "pt-BR": {
                      singular: "Já se inscreveu? {LINK}Faça o login{/LINK}"
                    },
                    "zh-CN": {
                      singular: "已经注册？{LINK}登录{/LINK}"
                    }
                  }
                })
              })
            })
          })
        })]
      });
    },
    _v137 = _v0 => (0, _v1.jsx)(_v4.Flex, {
      justifyContent: "center",
      width: "100%",
      gap: (0, _v10.rem)(8),
      pt: (0, _v10.rem)(6),
      alignItems: "center",
      ..._v0,
      children: _v0.children
    }),
    _v138 = ({
      onSaveValue: _v0,
      onEnterKeyPressed: _v1,
      onCheckboxChecked: _v2,
      onSingleStepSubmit: _v3,
      fieldElementRefs: _v4,
      agreeCheckboxRef: _v5,
      inputtedData: _v6,
      autoFocus: _v7,
      apiError: _v8,
      agreeCheckboxNotCheckedError: _v9,
      agreeCheckboxChecked: _v10,
      disableButton: _v11
    }) => {
      let {
          setPreviewType: _v12
        } = (0, _v2.useContext)(_v12.PreviewContext),
        _v13 = (0, _v14.useFormLocale)(),
        _v14 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.customFields);
      return (0, _v1.jsxs)(_v3.Box, {
        py: "md",
        children: [_v14.map((_v0, _v1) => (0, _v1.jsx)(_v129, {
          value: _v6.find(_v0 => _v0.cid === _v0?.cid)?.value,
          onSaveValue: _v0 => _v0(_v0, _v1),
          onEnterKeyPressed: _v0 => _v1(_v0, _v0.cid),
          fieldElementRefs: _v4.current,
          field: _v0,
          index: _v1,
          autoFocus: !1,
          errorMessage: _v0?.name === _v26.FORM_FIELD_NAME_VALUES.EMAIL ? _v8 : ""
        }, _v0.cid)), (0, _v1.jsx)(_v117, {
          ref: _v5,
          error: _v9,
          checked: _v10,
          onChange: _v0 => _v2(_v0)
        }), (0, _v1.jsx)(_v139, {
          children: (0, _v1.jsx)(_v99, {
            role: _v26.BUTTON_ROLES.PRIMARY,
            onClick: _v3,
            textType: _v26.BUTTON_TEXT_TYPE.REGISTER,
            loading: _v11,
            disabled: _v11
          })
        }), (0, _v1.jsx)(_v3.Box, {
          mt: "md",
          children: (0, _v1.jsx)(_v31.StylableNonEditText, {
            fieldName: _v26.NON_EDIT_FIELDS.ALREADY_REGISTERED,
            children: (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: (0, _v1.jsx)(_v68.Text, {
                variant: "body-md",
                children: (0, _v87.translate)({
                  singular: "Already registered? {LINK}Sign in{/LINK}",
                  locale: _v13,
                  replacements: {
                    LINK: _v0 => (0, _v1.jsx)(_v3.Box, {
                      as: "u",
                      cursor: "pointer",
                      tabIndex: 0,
                      onKeyDown: _v0 => _v0.key === _v26.KEY_CODES.ENTER && _v12(_v26.PREVIEW_TYPE.LOGIN_SCREEN),
                      onClick: () => _v12(_v26.PREVIEW_TYPE.LOGIN_SCREEN),
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "¿Ya está registrado? {LINK}Inicie sesión{/LINK}"
                    },
                    "de-DE": {
                      singular: "Schon registriert? {LINK}Einloggen{/LINK}"
                    },
                    "fr-FR": {
                      singular: "Déjà inscrit(e) ? {LINK}Connectez-vous{/LINK}"
                    },
                    "ja-JP": {
                      singular: "すでにご登録済みですか？ {LINK}ログイン{/LINK}"
                    },
                    "ko-KR": {
                      singular: "이미 가입하셨나요? {LINK}로그인{/LINK}"
                    },
                    "pt-BR": {
                      singular: "Já se inscreveu? {LINK}Faça o login{/LINK}"
                    },
                    "zh-CN": {
                      singular: "已经注册？{LINK}登录{/LINK}"
                    }
                  }
                })
              })
            })
          })
        })]
      });
    },
    _v139 = _v0 => (0, _v1.jsx)(_v4.Flex, {
      justifyContent: "center",
      width: "100%",
      gap: (0, _v10.rem)(8),
      pt: (0, _v10.rem)(6),
      alignItems: "center",
      ..._v0,
      children: _v0.children
    }),
    _v140 = ({
      setLeadUuid: _v0
    }) => {
      let _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.alignment),
        _v2 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.layout),
        _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.joinPageTitle.tagsResolved),
        _v4 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.joinPageTitle.tagsUnresolved) || "",
        _v5 = _v19("joinPageTitle", _v3),
        _v6 = _v20("joinPageTitle", _v4),
        _v7 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.logo),
        _v8 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        _v9 = (0, _v2.useRef)(null),
        _v10 = (0, _v17.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v11 = _v21(),
        {
          editor: _v12,
          setEditor: _v13
        } = (0, _v13.useRichTextContext)(),
        _v14 = (0, _v17.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
        _v15 = (0, _v17.useGlobalStore)(_v0 => _v0.currentSelectedFieldIndex),
        _v16 = (0, _v17.useGlobalStore)(_v0 => _v0.setEmailAddressCached),
        _v17 = (0, _v17.useGlobalStore)(_v0 => _v0.emailAddressCached),
        {
          previewMode: _v18
        } = (0, _v2.useContext)(_v12.PreviewContext),
        _v19 = (0, _v2.useRef)("up"),
        _v20 = (0, _v2.useRef)([]),
        [_v21, _v22] = (0, _v2.useState)(!1),
        [_v23, _v24] = (0, _v2.useState)(!1),
        [_v25, _v26] = (0, _v2.useState)(),
        _v27 = (0, _v2.useRef)(null),
        [_v28, _v29] = _v86(),
        {
          isMiniaturePreview: _v30
        } = (0, _v12.usePreviewContext)(),
        [_v31, _v32] = (0, _v2.useState)([]),
        _v33 = (0, _v17.useGlobalStore)(_v0 => _v0.entityType),
        _v34 = (0, _v17.useGlobalStore)(_v0 => _v0.entityId),
        _v35 = (0, _v17.useGlobalStore)(_v0 => _v0.authRoomPassword),
        _v36 = (0, _v17.useGlobalStore)(_v0 => _v0.pageReferrer),
        {
          currentPageType: _v37
        } = (0, _v2.useContext)(_v11.CurrentPageContext),
        {
          setPreviewType: _v38,
          autoFocusField: _v39
        } = (0, _v2.useContext)(_v12.PreviewContext),
        _v40 = _v91(_v26.FEATURES.CONFIRMATION_VIEW),
        _v41 = (0, _v22.useViewerStrings)(),
        [_v42, _v43] = (0, _v2.useState)(_v37 === _v26.PAGE_TYPES.REGISTRATION && _v39),
        [_v44, _v45] = function () {
          let {
              baseUrl: _v0,
              jwt: _v1,
              xVimeoPage: _v2,
              locale: _v3
            } = (0, _v85.useGctlConfig)(),
            [_v4, _v5] = (0, _v81.useInternalState)();
          return [(0, _v2.useCallback)(async _v0 => {
            _v5({
              type: "REQUEST"
            });
            try {
              let _v0 = await _v119({
                ..._v0,
                baseUrl: _v0,
                headers: {
                  ..._v0.headers,
                  "Content-Type": "application/json",
                  Authorization: _v1 ? `jwt ${_v1}` : "",
                  "Vimeo-Page": `${_v2}`,
                  "Accept-Language": _v3 ?? "en"
                }
              });
              _v5({
                type: "SUCCESS",
                payload: _v0
              });
            } catch (_v0) {
              _v5({
                type: "FAILURE",
                payload: _v0
              });
            }
          }, [_v0, _v2, _v1, _v3, _v5]), _v4];
        }(),
        {
          refreshConfirmationPageHTML: _v46,
          refreshConfirmationPageHTMLState: _v47
        } = _v93(),
        [_v48, _v49] = (0, _v2.useState)(!1),
        _v50 = (0, _v79.useToast)(),
        _v51 = _v45.loading || _v47.loading,
        _v52 = (0, _v2.useCallback)(() => {
          _v9.current?.getHTML() !== _v6 && _v37 === _v26.PAGE_TYPES.ADMIN && _v11("joinPageTitle", _v4, _v9.current?.getHTML());
        }, [_v37, _v6, _v4, _v11]),
        _v53 = (_v0, _v1) => {
          let _v2 = _v31.findIndex(_v0 => _v0.cid === _v1),
            _v3 = [..._v31];
          _v2 >= 0 ? _v3[_v2] = {
            cid: _v1,
            value: _v0
          } : _v3.push({
            cid: _v1,
            value: _v0
          }), _v32(_v3);
          let _v4 = _v8.find(_v0 => _v0.cid === _v1);
          _v4?.name === _v26.FORM_FIELD_NAME_VALUES.EMAIL && _v16(_v0);
        },
        _v54 = async () => {
          let _v0 = _v20.current[_v15],
            _v1 = _v8[_v15];
          if (_v26(void 0), _v1?.type === _v26.CustomFieldTypes.Description || _v0?.validate()) if (_v1.name === _v26.FORM_FIELD_NAME_VALUES.EMAIL && _v37 === _v26.PAGE_TYPES.REGISTRATION) {
            let _v0 = (0, _v88.getEntityCookiePassword)(_v34, _v33) ?? _v35;
            await _v28({
              select: [],
              query: {
                ...(_v0 && {
                  password: _v0
                }),
                ...(_v36 && {
                  referrer: _v36
                })
              },
              variables: {
                email: _v0?.getValue() || ""
              },
              where: {
                resourceId: _v34,
                resourceType: _v6.ENTITY_TO_PATH_MAP[_v33]
              }
            });
          } else _v19.current = "up", _v14(_v15 + 1);
        },
        _v55 = async () => {
          let _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9;
          _v37 === _v26.PAGE_TYPES.ADMIN ? _v38(_v26.PREVIEW_TYPE.CONFIRMATION) : (_v26(void 0), _v0 = _v8.find(_v0 => _v0.name === _v26.FORM_FIELD_NAME_VALUES.FIRST_NAME)?.cid, _v1 = _v8.find(_v0 => _v0.name === _v26.FORM_FIELD_NAME_VALUES.LAST_NAME)?.cid, _v2 = _v8.find(_v0 => _v0.name === _v26.FORM_FIELD_NAME_VALUES.EMAIL)?.cid, _v3 = _v31.find(_v0 => _v0.cid === _v0)?.value, _v4 = _v31.find(_v0 => _v0.cid === _v1)?.value, _v5 = _v31.find(_v0 => _v0.cid === _v2)?.value, _v6 = [_v26.FORM_FIELD_NAME_VALUES.EMAIL, _v26.FORM_FIELD_NAME_VALUES.FIRST_NAME, _v26.FORM_FIELD_NAME_VALUES.LAST_NAME], _v7 = _v8.filter(_v0 => !_v6.includes(_v0.name) && _v0.type !== _v26.CustomFieldTypes.Description).map(_v0 => {
            var _v1;
            let _v2;
            return {
              [_v0.name]: (_v1 = _v0.cid, "string" == typeof (_v2 = _v31.find(_v0 => _v0.cid === _v1)?.value) || "boolean" == typeof _v2 ? _v2 : _v2?.optionValue ?? _v2?.optionLabel)
            };
          }), _v8 = {}, _v7.forEach(_v0 => {
            for (let [, _v0] of Object.entries(_v0)) ("string" == typeof _v0 && _v0.length > 0 || "boolean" == typeof _v0 && _v0) && (_v8 = {
              ..._v8,
              ..._v0
            });
          }), _v9 = (0, _v88.getEntityCookiePassword)(_v34, _v33) ?? _v35, _v44({
            where: {
              resourceId: _v34,
              resourceType: _v6.ENTITY_TO_PATH_MAP[_v33]
            },
            select: [],
            query: {
              ...(_v9 && {
                password: _v9
              }),
              ...(_v36 && {
                referrer: _v36
              })
            },
            variables: {
              firstName: _v3,
              lastName: _v4,
              email: _v5,
              data: JSON.stringify(_v8),
              sourceMetadata: {
                url: window.location.href
              },
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
          }));
        },
        _v56 = async () => {
          let _v0 = _v8.every((_v0, _v1) => _v0.type === _v26.CustomFieldTypes.Description || _v20.current[_v1]?.validate() === !0);
          _v24(!_v21), _v27.current?.shakeError(), _v21 && _v0 && _v55();
        },
        _v57 = async () => {
          let _v0 = _v8[_v8.length - 1],
            _v1 = _v0?.type === _v26.CustomFieldTypes.Description || _v20.current[_v8.length - 1]?.validate();
          _v24(!_v21), _v27.current?.shakeError(), _v21 && _v1 && _v55();
        },
        _v58 = _v0 => {
          _v22(_v0), _v24(!_v0);
        },
        _v59 = (_v0, _v1) => {
          void 0 !== _v0 && void 0 !== _v1 && _v53(_v0, _v1), _v15 < _v8.length - 1 ? _v54() : _v57();
        },
        _v60 = (_v0, _v1) => {
          _v53(_v0, _v8[_v1].cid), _v43(!0);
        };
      (0, _v2.useEffect)(() => {
        let {
          error: _v0,
          data: _v1,
          loading: _v2
        } = _v29;
        !_v2 && (_v0 || _v1) && async function () {
          try {
            let _v0 = await _v0?.res?.json(),
              _v1 = (0, _v80.deepCamelCase)(_v0)?.errorCode;
            if (_v1 === _v26.LOGIN_ERROR_CODES.INVALID_EMAIL) return void _v26(_v41.InvalidEmailAddress);
            if (_v1?.uri || _v1 === _v26.LOGIN_ERROR_CODES.NOT_REGISTERED) {
              let _v0 = _v17.useGlobalStore.getState().currentSelectedFieldIndex + 1;
              _v19.current = "up", _v14(_v0);
            }
          } catch (_v0) {}
        }();
      }, [_v29, _v14, _v41.InvalidEmailAddress]), (0, _v2.useEffect)(() => {
        if (_v37 === _v26.PAGE_TYPES.ADMIN) {
          let _v0 = _v12?.view.state.selection;
          _v9.current?.setHTML(_v6), _v0 && _v12?.chain().setTextSelection({
            from: _v0.from,
            to: _v0.to
          }).run();
        }
      }, [_v6, _v37]), (0, _v2.useEffect)(() => {
        _v37 === _v26.PAGE_TYPES.REGISTRATION && _v9.current?.setHTML(_v5);
      }, [_v5, _v37]), (0, _v2.useEffect)(() => {
        _v15 > _v8.length - 1 && _v14(Math.max(_v8.length - 1, 0));
      }, [_v8]), (0, _v2.useEffect)(() => {
        let _v0 = _v8.find(_v0 => _v0.name === _v26.FORM_FIELD_NAME_VALUES.EMAIL)?.cid;
        void 0 !== _v0 && _v32([{
          cid: _v0,
          value: _v17
        }]);
      }, []), (0, _v2.useEffect)(() => {
        _v24(!1);
      }, [_v2]), (0, _v2.useEffect)(() => {
        !async function () {
          try {
            let {
                error: _v0
              } = _v45,
              _v1 = await _v0?.res?.json(),
              _v2 = (0, _v80.deepCamelCase)(_v1)?.errorCode;
            _v26.REGISTRATION_FULL_ERROR_CODE.includes(_v2) ? _v38(_v26.PREVIEW_TYPE.FORM_FULL) : (_v0 || _v47.error) && (_v2 === _v26.LOGIN_ERROR_CODES.INVALID_EMAIL ? _v26(_v41.InvalidEmailAddress) : _v50({
              title: _v41.UhOhThereWasAProblem,
              status: "error"
            }));
          } catch (_v0) {}
        }();
      }, [_v45.error, _v47.error]), (0, _v2.useEffect)(() => {
        !_v45.loading && _v45.data?.uri && (_v40 ? _v46((0, _v89.getLastUuidFromUri)(_v45.data.uri)) : ((0, _v88.setCookie)(_v34, (0, _v89.getLastUuidFromUri)(_v45.data.uri)), _v0?.((0, _v89.getLastUuidFromUri)(_v45.data.uri))), _v49(!0));
      }, [_v45, _v34, _v40, _v38, _v0]), (0, _v2.useEffect)(() => {
        _v48 && !_v47.loading && _v47.data && _v45.data?.uri && ((0, _v88.setCookie)(_v34, (0, _v89.getLastUuidFromUri)(_v45.data.uri)), _v0 && _v0((0, _v89.getLastUuidFromUri)(_v45.data.uri)), _v38(_v26.PREVIEW_TYPE.CONFIRMATION), _v14(0));
      }, [_v47, _v38, _v0, _v34, _v48, _v45]);
      let _v61 = (0, _v2.useRef)(_v31);
      return _v61.current = _v31, (0, _v2.useEffect)(() => {
        let _v0 = [];
        _v61.current.forEach(_v0 => {
          let _v1 = _v8.find(_v0 => _v0.cid === _v0.cid)?.type,
            _v2 = _v1 === _v26.CustomFieldTypes.Text && "string" == typeof _v0.value,
            _v3 = _v1 === _v26.CustomFieldTypes.Dropdown && "object" == typeof _v0.value,
            _v4 = _v1 === _v26.CustomFieldTypes.Checkbox && "boolean" == typeof _v0.value;
          (_v2 || _v3 || _v4) && _v0.push(_v0);
        }), _v0.length !== _v61.current.length && _v32(_v0);
      }, [_v8]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v75, {
          previewMode: _v18,
          align: _v1,
          onMouseDownCapture: _v0 => {
            _v0.target == _v0.currentTarget && (_v10(_v26.SIDE_MENU_CONTENT.SETTINGS), _v13(null));
          },
          isMiniaturePreview: _v30,
          children: (0, _v1.jsxs)(_v74, {
            py: "3xl",
            maxWidth: _v26.PREVIEW_FORM_FIELDS_WIDTH + 8,
            children: [_v7.isActive && (0, _v1.jsx)(_v77, {
              showColorOnHover: _v37 === _v26.PAGE_TYPES.ADMIN,
              variant: "minimal",
              ...(_v7.isLinkActive && (_v7.customLink?.length ?? 0) > 0 && _v37 === _v26.PAGE_TYPES.REGISTRATION ? {
                href: _v7.customLink || "",
                target: "_blank"
              } : {}),
              children: (0, _v1.jsx)(_v76, {
                src: _v7.url
              })
            }), (0, _v1.jsx)(_v66, {
              ref: _v9,
              saveChanges: _v52,
              onBlur: _v52,
              overRideFontSize: !0,
              content: _v37 === _v26.PAGE_TYPES.ADMIN ? _v6 : _v5
            }), (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: (0, _v1.jsx)(_v32, {})
            }), (0, _v1.jsx)(_v3.Box, {
              px: "xs",
              children: _v2 === _v26.FORM_LAYOUT_OPTIONS.SINGLE_STEP_FORM ? (0, _v1.jsx)(_v138, {
                onSaveValue: _v60,
                onEnterKeyPressed: _v59,
                onCheckboxChecked: _v58,
                onSingleStepSubmit: _v56,
                fieldElementRefs: _v20,
                agreeCheckboxRef: _v27,
                inputtedData: _v31,
                autoFocus: _v42,
                apiError: _v25,
                agreeCheckboxNotCheckedError: _v23,
                agreeCheckboxChecked: _v21,
                disableButton: _v51
              }) : (0, _v1.jsx)(_v136, {
                animationDirection: _v19,
                inputtedData: _v31,
                onSaveValue: _v60,
                onEnterKeyPressed: _v59,
                fieldElementRefs: _v20,
                agreeCheckboxRef: _v27,
                agreeCheckboxChecked: _v21,
                agreeCheckboxNotCheckedError: _v23,
                onCheckboxChecked: _v58,
                onNextClick: _v54,
                checkValidEmailStateLoading: _v29.loading,
                onMultiStepSubmit: _v57,
                disableButton: _v51,
                autoFocus: _v42,
                apiError: _v25
              })
            })]
          })
        }), _v2 === _v26.FORM_LAYOUT_OPTIONS.MULTI_STEP_FORM && (0, _v1.jsx)(_v3.Box, {
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          pb: (0, _v10.rem)(26),
          px: "lg",
          pointerEvents: "none",
          children: (0, _v1.jsx)(_v121, {
            currentStep: _v15 + 1,
            totalStep: _v8.length
          })
        })]
      });
    },
    _v141 = () => {
      let _v0 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.logo),
        _v1 = (0, _v17.useGlobalStore)(_v0 => _v0.leadCapture.alignment),
        _v2 = (0, _v17.useGlobalStore)(_v0 => _v0.entity.title),
        {
          previewMode: _v3
        } = (0, _v2.useContext)(_v12.PreviewContext),
        {
          setPreviewType: _v4
        } = (0, _v2.useContext)(_v12.PreviewContext),
        {
          isMiniaturePreview: _v5
        } = (0, _v12.usePreviewContext)(),
        _v6 = (0, _v14.useFormLocale)(),
        _v7 = (0, _v22.useViewerStrings)();
      return (0, _v1.jsx)(_v75, {
        previewMode: _v3,
        align: _v1,
        isMiniaturePreview: _v5,
        children: (0, _v1.jsxs)(_v74, {
          pb: (0, _v10.rem)(98),
          children: [_v0.isActive && (0, _v1.jsx)(_v77, {
            variant: "minimal",
            ...(_v0.isLinkActive && (_v0.customLink?.length ?? 0) > 0 && {
              href: _v0.customLink || "",
              target: "_blank"
            }),
            children: (0, _v1.jsx)(_v3.Box, {
              as: "img",
              maxHeight: (0, _v10.rem)(56),
              mb: "md",
              mx: "sm",
              src: _v0.url
            })
          }), (0, _v1.jsxs)(_v27.Header, {
            variant: "heading-2xl",
            lineHeight: (0, _v10.rem)(41.7),
            letterSpacing: (0, _v10.rem)(-1.2),
            size: "xl",
            children: [(0, _v1.jsx)("p", {
              children: _v7.RegistrationFullMessage
            }), (0, _v1.jsx)(_v68.Text, {
              variant: "body-xl",
              mt: "sm",
              fontSize: "heading-lg",
              fontWeight: "normal",
              children: _v2
            })]
          }), (0, _v1.jsx)(_v3.Box, {
            pt: "md",
            pl: "xs",
            pr: "xs",
            children: (0, _v1.jsx)(_v32, {})
          }), (0, _v1.jsx)(_v3.Box, {
            px: "xs",
            mt: "md",
            children: (0, _v1.jsx)(_v68.Text, {
              variant: "body-sm",
              children: (0, _v87.translate)({
                singular: "Already registered? {LINK}Sign in{/LINK}",
                locale: _v6,
                replacements: {
                  LINK: _v0 => (0, _v1.jsx)(_v3.Box, {
                    as: "u",
                    cursor: "pointer",
                    tabIndex: 0,
                    onKeyPress: _v0 => _v0.key === _v26.KEY_CODES.ENTER && _v4(_v26.PREVIEW_TYPE.LOGIN_SCREEN),
                    onClick: () => _v4(_v26.PREVIEW_TYPE.LOGIN_SCREEN),
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: "¿Ya está registrado? {LINK}Inicie sesión{/LINK}"
                  },
                  "de-DE": {
                    singular: "Schon registriert? {LINK}Einloggen{/LINK}"
                  },
                  "fr-FR": {
                    singular: "Déjà inscrit(e) ? {LINK}Connectez-vous{/LINK}"
                  },
                  "ja-JP": {
                    singular: "すでにご登録済みですか？ {LINK}ログイン{/LINK}"
                  },
                  "ko-KR": {
                    singular: "이미 가입하셨나요? {LINK}로그인{/LINK}"
                  },
                  "pt-BR": {
                    singular: "Já se inscreveu? {LINK}Faça o login{/LINK}"
                  },
                  "zh-CN": {
                    singular: "已经注册？{LINK}登录{/LINK}"
                  }
                }
              })
            })
          })]
        })
      });
    };
  _v0.s(["Preview", 0, ({
    setLeadUuid: _v0
  }) => {
    let {
        previewType: _v1
      } = (0, _v2.useContext)(_v12.PreviewContext),
      {
        currentPageType: _v2
      } = (0, _v2.useContext)(_v11.CurrentPageContext),
      _v3 = (0, _v17.useGlobalStore)(_v0 => _v0.presetLoading),
      _v4 = (0, _v17.useGlobalStore)(_v0 => _v0.entityType);
    return (0, _v2.useEffect)(() => {
      setTimeout(() => {
        _v2 === _v26.PAGE_TYPES.ADMIN && (0, _v7.setLocationQuery)(_v6.LOCATION_STATE.PREVIEW_TYPE, _v1);
      }, 0);
    }, [_v1, _v2]), (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      height: "100%",
      "aria-busy": _v3,
      children: [(0, _v1.jsx)(_v4.Flex, {
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        flexWrap: "wrap",
        inert: _v3 || void 0,
        children: (0, _v1.jsxs)(_v8.BackgroundWrapper, {
          disableBackground: _v1 === _v26.PREVIEW_TYPE.FORM_FULL,
          children: [_v1 === _v26.PREVIEW_TYPE.CONFIRMATION && _v4 !== _v6.ENTITY_TYPE.SHOWCASE && (0, _v1.jsx)(_v78, {}), _v1 === _v26.PREVIEW_TYPE.LOGIN_SCREEN && (0, _v1.jsx)(_v118, {
            setLeadUuid: _v0
          }), _v1 === _v26.PREVIEW_TYPE.FORM && (0, _v1.jsx)(_v140, {
            setLeadUuid: _v0
          }), _v1 === _v26.PREVIEW_TYPE.FORM_FULL && (0, _v1.jsx)(_v141, {})]
        })
      }), _v3 && (0, _v1.jsx)(_v4.Flex, {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
        children: (0, _v1.jsx)(_v5.Spinner, {})
      })]
    });
  }], 0);
}