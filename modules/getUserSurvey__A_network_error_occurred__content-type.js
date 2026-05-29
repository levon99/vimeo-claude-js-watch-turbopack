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
  async function _v19({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      surveyType: _v3
    },
    ..._v4
  }) {
    return (0, _v17.measureLatency)("getUserSurvey", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/surveys/${_v3}?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  async function _v20({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      surveyType: _v4
    },
    ..._v5
  }) {
    return (0, _v17.measureLatency)("putUserSurvey", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/surveys/${_v4}?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PUT",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v23.useGctlConfig)();
    return (0, _v21.default)(_v2 ? `/users/${_v2.where.userId}/surveys/${_v2.where.surveyType}${(0, _v16.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v19({
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
  }
  function _v25() {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/surveys/${_v0.where.surveyType}${(0, _v16.serializeQuery)(_v0)}`, _v20({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(_v24, {
    endpoint: "/users/:userId/surveys/:surveyType",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/surveys/${_v0.where.surveyType}${(0, _v16.serializeQuery)(_v0)}`, _v19({
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
  }, {
    endpoint: "/users/:userId/surveys/:surveyType",
    method: "GET"
  }), "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(_v25, {
    endpoint: "/users/:userId/surveys/:surveyType",
    method: "PUT"
  });
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = "web_reg_2024",
    _v37 = {
      market: _v32.ChartUp,
      communicate: _v34.Users,
      showcase: _v35.VideosStack,
      manage: () => (0, _v1.jsx)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M28 3H8C5.23857 3 3 5.23857 3 7.99999V18.174C3 20.9355 5.23858 23.174 8 23.174H28C30.7614 23.174 33 20.9355 33 18.1741V8C33 5.23858 30.7614 3 28 3ZM8 0C3.58172 0 0 3.58172 0 7.99999V18.174C0 22.5923 3.58172 26.174 8 26.174H28C32.4183 26.174 36 22.5923 36 18.1741V8C36 3.58172 32.4183 0 28 0H8ZM22.1653 14.0697C22.9204 13.6325 22.9204 12.5423 22.1653 12.1052L16.9395 9.07973C16.1829 8.64166 15.2358 9.18766 15.2358 10.062V16.1128C15.2358 16.9872 16.1829 17.5332 16.9395 17.0951L22.1653 14.0697ZM3 31H8V33H3L3 31ZM0 31C0 29.3431 1.34315 28 3 28H8C9.65685 28 11 29.3431 11 31V33C11 34.6569 9.65685 36 8 36H3C1.34315 36 0 34.6569 0 33V31ZM20.5 31H15.5V33H20.5V31ZM15.5 28C13.8431 28 12.5 29.3431 12.5 31V33C12.5 34.6569 13.8431 36 15.5 36H20.5C22.1569 36 23.5 34.6569 23.5 33V31C23.5 29.3431 22.1569 28 20.5 28H15.5ZM28 31H33V33H28V31ZM25 31C25 29.3431 26.3431 28 28 28H33C34.6569 28 36 29.3431 36 31V33C36 34.6569 34.6569 36 33 36H28C26.3431 36 25 34.6569 25 33V31Z",
          fill: "currentColor"
        })
      }),
      deliver: _v33.Send,
      watch: () => (0, _v1.jsx)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.4103 16.29H23.9428V11.2144H21.4103V16.29ZM23.9428 8.68189H18.8672V26.4411H21.3997V18.8331H23.9322C25.3367 18.8331 26.4753 17.6945 26.4753 16.29V11.2144C26.4753 9.8098 25.3367 8.68189 23.9322 8.68189H23.9428ZM17.186 13.7468V11.2144C17.186 9.8098 16.0474 8.68189 14.6535 8.68189H12.121C10.7165 8.68189 9.58856 9.82044 9.58856 11.2144V16.29C9.58856 17.6945 10.7271 18.8331 12.121 18.8331H14.6535V23.9087H12.121V21.3762H9.58856V23.9087C9.58856 25.3132 10.7271 26.4411 12.121 26.4411H14.6535C16.0581 26.4411 17.186 25.3026 17.186 23.9087V18.8331C17.186 17.4285 16.0474 16.29 14.6535 16.29H12.121V11.2144H14.6535V13.7468H17.186ZM3.60851 16.1197C3.60851 16.1197 3.1084 16.4921 2.66149 16.9178C2.19331 17.3434 1.76768 17.8222 1.76768 17.8222C1.76768 17.8222 1.31013 17.3647 0.895146 16.8433C0.458879 16.3325 0.0864554 15.7686 0.0864554 15.7686C0.0864554 15.7686 0.182221 14.7258 0.405675 13.7149C0.607848 12.6934 0.958989 11.7145 0.958989 11.7145C0.958989 11.7145 1.21436 12.3529 1.50166 12.9488C1.77832 13.5447 2.12946 14.098 2.12946 14.098C2.12946 14.098 2.65085 13.7256 3.20417 13.4276C3.75748 13.119 4.30016 12.8637 4.30016 12.8637C4.30016 12.8637 4.0235 13.6511 3.85325 14.4704C3.67236 15.2897 3.59787 16.1197 3.59787 16.1197H3.60851ZM3.89581 20.7803C3.89581 20.7803 3.54467 21.2911 3.25737 21.8337C2.94879 22.3871 2.69342 22.9723 2.69342 22.9723C2.69342 22.9723 2.10818 22.685 1.55487 22.3232C0.980271 21.9721 0.448238 21.5571 0.448238 21.5571C0.448238 21.5571 0.203502 20.5462 0.107736 19.5034C-0.0199517 18.4713 0.00133018 17.4285 0.00133018 17.4285C0.00133018 17.4285 0.448237 17.9499 0.916426 18.4181C1.37397 18.8969 1.87409 19.3119 1.87409 19.3119C1.87409 19.3119 2.25715 18.7905 2.68278 18.333C3.1084 17.8648 3.54467 17.4498 3.54467 17.4498C3.54467 17.4498 3.53403 18.2904 3.62979 19.1204C3.71492 19.9503 3.90645 20.7697 3.90645 20.7697L3.89581 20.7803ZM5.65152 25.0898C5.65152 25.0898 5.49191 25.675 5.3855 26.2922C5.25781 26.9093 5.21525 27.5478 5.21525 27.5478C5.21525 27.5478 4.56617 27.4626 3.92773 27.303C3.28929 27.1541 2.62957 26.9413 2.62957 26.9413C2.62957 26.9413 2.0869 26.0581 1.65063 25.1111C1.20372 24.164 0.884505 23.1745 0.884505 23.1745C0.884505 23.1745 1.48038 23.5256 2.06562 23.8235C2.67213 24.1215 3.25737 24.3556 3.25737 24.3556C3.25737 24.3556 3.47018 23.7384 3.71492 23.1745C3.97029 22.5892 4.25759 22.0678 4.25759 22.0678C4.25759 22.0678 4.52361 22.8659 4.87475 23.6214C5.22589 24.3769 5.66216 25.0898 5.66216 25.0898H5.65152ZM8.69475 28.6225C8.69475 28.6225 8.72667 29.2184 8.82243 29.8568C8.9182 30.4633 9.05653 31.1124 9.05653 31.1124C9.05653 31.1124 8.42873 31.2188 7.75837 31.2826C7.10929 31.3358 6.41765 31.3465 6.41765 31.3465C6.41765 31.3465 5.6196 30.6761 4.90667 29.9206C4.19375 29.1652 3.57659 28.3352 3.57659 28.3352C3.57659 28.3352 4.23631 28.4948 4.89603 28.5799C5.55575 28.6757 6.19419 28.7076 6.19419 28.7076C6.19419 28.7076 6.19419 28.0585 6.24739 27.4414C6.28996 26.8136 6.40701 26.2177 6.40701 26.2177C6.40701 26.2177 6.90712 26.8881 7.48171 27.4946C8.05631 28.1011 8.69475 28.6438 8.69475 28.6438V28.6225ZM4.80027 11.6294C4.80027 11.6294 4.21503 11.8209 3.65108 12.0869C3.08712 12.3423 2.51252 12.6509 2.51252 12.6509C2.51252 12.6509 2.23587 12.0763 1.99113 11.4485C1.7464 10.8313 1.56551 10.1716 1.56551 10.1716C1.56551 10.1716 1.98049 9.21392 2.53381 8.33075C3.0552 7.43693 3.70428 6.60696 3.70428 6.60696C3.70428 6.60696 3.72556 7.27732 3.83197 7.94768C3.90645 8.6074 4.05542 9.2352 4.05542 9.2352C4.05542 9.2352 4.67258 9.05431 5.28974 8.94791C5.89625 8.82022 6.51341 8.76701 6.51341 8.76701C6.51341 8.76701 5.99202 9.42674 5.57703 10.1503C5.14077 10.8632 4.80027 11.6294 4.80027 11.6294ZM6.05586 5.04278C6.05586 5.04278 5.68344 5.76635 5.39614 6.5112C5.08756 7.23476 4.88539 7.99025 4.88539 7.99025C4.88539 7.99025 5.52383 7.55398 6.19419 7.21348C6.85391 6.86234 7.52427 6.58568 7.52427 6.58568C7.52427 6.58568 7.59876 6.42607 7.72645 6.18133C7.84349 5.92596 8.02438 5.60674 8.21592 5.28752C8.39681 4.95766 8.60962 4.64908 8.77987 4.41498C8.95012 4.18089 9.05653 4.02128 9.05653 4.02128C9.05653 4.02128 8.865 4.07448 8.58834 4.14897C8.30104 4.22345 7.92862 4.32986 7.5562 4.46819C7.17313 4.59588 6.80071 4.7342 6.52405 4.86189C6.2474 4.97894 6.05586 5.06407 6.05586 5.06407V5.04278ZM35.9135 15.7792C35.9135 15.7792 35.5411 16.3432 35.1049 16.8539C34.6899 17.3647 34.2323 17.8329 34.2323 17.8329C34.2323 17.8329 33.7961 17.354 33.3385 16.9284C32.8916 16.5028 32.3915 16.1303 32.3915 16.1303C32.3915 16.1303 32.317 15.3004 32.1361 14.481C31.9659 13.6617 31.6892 12.8743 31.6892 12.8743C31.6892 12.8743 32.2425 13.119 32.7852 13.4383C33.3385 13.7362 33.8599 14.1086 33.8599 14.1086C33.8599 14.1086 34.211 13.5553 34.4877 12.9594C34.775 12.3636 35.0304 11.7251 35.0304 11.7251C35.0304 11.7251 35.3815 12.7041 35.5943 13.7256C35.8284 14.7364 35.9135 15.7792 35.9135 15.7792ZM35.5518 21.5677C35.5518 21.5677 35.0197 21.9827 34.4345 22.3339C33.8812 22.6956 33.2959 22.9829 33.2959 22.9829C33.2959 22.9829 33.0406 22.3871 32.732 21.8444C32.4447 21.2911 32.0936 20.791 32.0936 20.791C32.0936 20.791 32.2851 19.9823 32.3702 19.1417C32.4766 18.3117 32.4553 17.4711 32.4553 17.4711C32.4553 17.4711 32.8916 17.8861 33.3172 18.3542C33.7429 18.8118 34.1259 19.3332 34.1259 19.3332C34.1259 19.3332 34.626 18.9182 35.0836 18.4394C35.5411 17.9712 35.9987 17.4498 35.9987 17.4498C35.9987 17.4498 36.02 18.4926 35.8923 19.5247C35.7859 20.5569 35.5518 21.5784 35.5518 21.5784V21.5677ZM33.3598 26.9413C33.3598 26.9413 32.7107 27.1541 32.0616 27.303C31.4232 27.4626 30.7741 27.5478 30.7741 27.5478C30.7741 27.5478 30.7209 26.9093 30.6039 26.2922C30.4975 25.675 30.3378 25.0898 30.3378 25.0898C30.3378 25.0898 30.7741 24.3769 31.1253 23.6214C31.4764 22.8659 31.7424 22.0678 31.7424 22.0678C31.7424 22.0678 32.0191 22.5892 32.2851 23.1745C32.5298 23.7384 32.7426 24.3662 32.7426 24.3662C32.7426 24.3662 33.3385 24.1215 33.9344 23.8342C34.5196 23.5362 35.1155 23.1851 35.1155 23.1851C35.1155 23.1851 34.7963 24.1747 34.3494 25.1217C33.9131 26.0687 33.3704 26.9519 33.3704 26.9519L33.3598 26.9413ZM29.5824 31.3358C29.5824 31.3358 28.8907 31.3358 28.2416 31.272C27.5713 31.2082 26.9435 31.1018 26.9435 31.1018C26.9435 31.1018 27.0818 30.4633 27.1776 29.8462C27.2627 29.2184 27.3053 28.6118 27.3053 28.6118C27.3053 28.6118 27.9543 28.0798 28.5183 27.4626C29.0929 26.8561 29.593 26.1858 29.593 26.1858C29.593 26.1858 29.71 26.7923 29.7526 27.4094C29.8058 28.0266 29.8058 28.6757 29.8058 28.6757C29.8058 28.6757 30.4442 28.6331 31.104 28.548C31.7637 28.4629 32.4234 28.3033 32.4234 28.3033C32.4234 28.3033 31.8063 29.1439 31.0827 29.8994C30.3698 30.6548 29.5717 31.3252 29.5717 31.3252L29.5824 31.3358ZM34.4132 10.1716C34.4132 10.1716 34.2323 10.8313 33.9876 11.4485C33.7429 12.0763 33.4662 12.6509 33.4662 12.6509C33.4662 12.6509 32.8916 12.3423 32.3276 12.0869C31.7637 11.8209 31.1785 11.6294 31.1785 11.6294C31.1785 11.6294 30.8486 10.8632 30.4017 10.1503C29.9867 9.42674 29.4653 8.76701 29.4653 8.76701C29.4653 8.76701 30.0825 8.82022 30.689 8.94791C31.3061 9.05431 31.9233 9.2352 31.9233 9.2352C31.9233 9.2352 32.0723 8.6074 32.1468 7.94768C32.2425 7.28796 32.2744 6.60696 32.2744 6.60696C32.2744 6.60696 32.9129 7.42629 33.4449 8.32011C33.9876 9.20328 34.4132 10.1609 34.4132 10.1609V10.1716ZM28.4651 6.58568C28.4651 6.58568 29.1354 6.8517 29.7952 7.21348C30.4655 7.55398 31.104 7.99025 31.104 7.99025C31.104 7.99025 30.9018 7.2454 30.5932 6.5112C30.3059 5.77699 29.9335 5.04278 29.9335 5.04278C29.9335 5.04278 29.742 4.95766 29.4653 4.84061C29.1886 4.71292 28.8162 4.5746 28.4438 4.44691C28.0714 4.30858 27.699 4.20217 27.4117 4.12769C27.135 4.0532 26.9435 4 26.9435 4C26.9435 4 27.0499 4.15961 27.2201 4.3937C27.3797 4.6278 27.5926 4.93638 27.7841 5.26624C27.9863 5.58546 28.1565 5.90468 28.2736 6.16005C28.3906 6.40479 28.4757 6.5644 28.4757 6.5644L28.4651 6.58568Z",
          fill: "currentColor"
        })
      })
    },
    _v38 = ({
      answers: _v0,
      selectedAnswer: _v1,
      onSelectAnswer: _v2,
      shouldShowIcon: _v3,
      alignment: _v4
    }) => {
      let _v5 = (0, _v31.useColorModeValue)("gray.900", "gray.50"),
        _v6 = "2px solid";
      return (0, _v1.jsx)(_v30.SimpleGrid, {
        spacing: "4",
        templateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        paddingTop: "4",
        children: _v0.map(_v0 => {
          let _v1 = _v37[_v0.id],
            _v2 = _v1?.id === _v0.id;
          return (0, _v1.jsxs)(_v8.Flex, {
            as: "button",
            flexDirection: "column",
            alignItems: "center" === _v4 ? "center" : "flex-start",
            textAlign: _v4,
            bgColor: _v2 ? "fill-surface" : "fill-component",
            minHeight: _v3 ? "176px" : "82px",
            borderRadius: "sm",
            padding: "4",
            paddingTop: "5",
            _hover: {
              bgColor: "fill-component-hover"
            },
            _focusVisible: {
              outline: _v6,
              outlineColor: _v5
            },
            onClick: () => {
              _v2(_v0);
            },
            tabIndex: 0,
            outline: _v2 ? _v6 : "none",
            outlineColor: _v2 ? _v5 : "transparent",
            color: _v2 || !_v1 ? "text-primary" : "text-secondary",
            children: [_v3 ? (0, _v1.jsx)(_v1, {
              boxSize: "md"
            }) : null, (0, _v1.jsx)(_v14.Text, {
              variant: "heading-sm",
              marginTop: "3",
              marginBottom: "1",
              children: _v0.label
            }), (0, _v1.jsx)(_v14.Text, {
              variant: "body-md",
              children: _v0.description
            })]
          }, _v0.id);
        })
      });
    };
  var _v39 = _v0.i(0);
  let _v40 = () => (0, _v1.jsxs)(_v8.Flex, {
    children: [(0, _v1.jsxs)(_v39.Box, {
      id: "loading-background",
      w: "15rem",
      h: "100vh",
      bgColor: "slate.50",
      children: [(0, _v1.jsx)(_v39.Box, {
        h: "4rem",
        padding: "4",
        children: (0, _v1.jsx)(_v27.Logo, {
          width: "106px",
          height: "36px"
        })
      }), (0, _v1.jsx)(_v39.Box, {
        children: [1, 2, 3].map(_v0 => (0, _v1.jsxs)(_v8.Flex, {
          padding: "4",
          gap: "6",
          children: [(0, _v1.jsx)(_v39.Box, {
            w: "1.5rem",
            h: "1.5rem",
            bgColor: "#BDCAD3",
            borderRadius: "sm"
          }), (0, _v1.jsx)(_v39.Box, {
            w: "124px",
            h: "1.5rem",
            bgColor: "#BDCAD3",
            borderRadius: "sm"
          })]
        }, _v0))
      })]
    }), (0, _v1.jsx)(_v39.Box, {
      w: "calc(100% - 240px)",
      h: "100vh",
      bgColor: "white",
      children: (0, _v1.jsx)(_v8.Flex, {
        h: "4rem",
        gap: "6",
        padding: "4",
        paddingLeft: "6",
        paddingRight: "6",
        justifyContent: "flex-end",
        children: (0, _v1.jsxs)(_v8.Flex, {
          gap: "3",
          children: [(0, _v1.jsx)(_v39.Box, {
            w: "2rem",
            h: "2rem",
            bgColor: "#BDCAD3",
            borderRadius: "sm"
          }), (0, _v1.jsx)(_v39.Box, {
            w: "2rem",
            h: "2rem",
            bgColor: "#BDCAD3",
            borderRadius: "sm"
          }), (0, _v1.jsx)(_v39.Box, {
            w: "88px",
            h: "2rem",
            bgColor: "#BDCAD3",
            borderRadius: "sm"
          }), (0, _v1.jsx)(_v39.Box, {
            w: "2rem",
            h: "2rem",
            bgColor: "#BDCAD3",
            borderRadius: "100px"
          })]
        })
      })
    })]
  });
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = "onboarding_survey",
    _v50 = _v0 => (0, _v43.buildProductAnalyticsBpContext)({
      product: "web_onboarding",
      feature: "onboarding_survey",
      location: "page_area",
      modal_name: null,
      flow: null,
      element: null,
      copy: _v0,
      device_type: (0, _v41.default)(),
      is_user_facing_data: null,
      entity_type: null
    }),
    _v51 = (0, _v47.buildWebBpContext)({
      page_name: "registration_survey",
      path: "/survey/web_reg_2024"
    }),
    _v52 = _v0 => (0, _v44.buildTeamBpContext)({
      is_team_member: _v0
    }),
    _v53 = (0, _v45.buildThirdPartyIntegrationBpContext)({
      integration_id: null,
      integration_name: null,
      is_partner: null
    }),
    _v54 = (_v0, _v1, _v2) => {
      (0, _v48.sendBpEventWithContexts)("vimeo.survey_select_option", {
        ..._v50(_v1.labelUntranslated),
        ..._v51,
        ..._v52(_v2),
        ..._v53,
        ...(0, _v42.buildActionBpContext)({
          action_type: "click",
          feature: null
        })
      }, 2, {
        survey_name: _v49,
        test_id: 0,
        version_name: _v36,
        question_group: _v0.id,
        question_name: _v0.questionUntranslated,
        question_description: _v0.descriptionUntranslated,
        question_id: "1",
        button_type: "answer",
        answer_group: _v1.id,
        answer_name: _v1.labelUntranslated,
        answer_description: _v1.descriptionUntranslated,
        answer_id: _v1.bpAnswerId,
        answer_position: _v1.bpAnswerPosition
      });
    };
  var _v55 = _v0.i(0);
  let _v56 = !1,
    _v57 = () => {
      let _v0 = (0, _v6.useRouter)(),
        [_v1, _v2] = (0, _v2.useState)(null),
        [_v3, _v4] = _v2.default.useState([]),
        _v5 = (0, _v2.useContext)(_v29.ViewerContext),
        _v6 = _v5?.user?.id,
        _v7 = (0, _v28.useWindowSize)(),
        {
          data: _v8,
          isLoading: _v9
        } = _v24(() => _v6 ? {
          where: {
            userId: _v6.toString(),
            surveyType: _v36
          },
          select: ["questions"]
        } : null),
        _v10 = _v8?.questions[0]?.answers[_v8?.questions[0]?.answers.length - 1];
      (0, _v2.useEffect)(() => {
        if (_v8?.questions[0]?.answers && !_v56) {
          var _v0, _v1;
          let _v0,
            _v1 = (_v0 => {
              for (let _v0 = _v0.length - 1; _v0 > 0; _v0--) {
                let _v0 = Math.floor(Math.random() * (_v0 + 1));
                [_v0[_v0], _v0[_v0]] = [_v0[_v0], _v0[_v0]];
              }
              return _v0;
            })((_v8?.questions[0]?.answers.slice(0, -1)).map((_v0, _v1) => ({
              ..._v0,
              bpAnswerId: _v1 + 1
            }))).map((_v0, _v1) => ({
              ..._v0,
              bpAnswerPosition: _v1 + 1
            }));
          _v4(_v1), _v56 = !0;
          let _v2 = _v1.find(_v0 => _v0.isSelected);
          _v2 && _v2(_v2), _v0 = _v8.questions[0], _v1 = _v5?.user?.isTeamUser ?? !1, _v0 = {
            survey_name: _v49,
            test_id: 0,
            version_name: _v36,
            question_group: _v0.id,
            question_name: _v0.questionUntranslated,
            question_description: _v0.descriptionUntranslated,
            question_id: "1"
          }, (0, _v48.sendBpEventWithContexts)("vimeo.user_survey_impression", {
            ..._v50(_v0.questionUntranslated),
            ..._v51,
            ...(0, _v46.buildViewBpContext)({
              view_type: "pageview",
              feature: null
            }),
            ..._v52(_v1),
            ..._v53
          }, 1, _v0);
        }
      }, [_v8, _v5?.user?.isTeamUser]);
      let [_v11, {
          loading: _v12
        }] = _v25(),
        _v13 = async _v0 => {
          if (_v6 && _v0 && _v8?.questions[0]) {
            if (_v0.id === _v10?.id) _v54(_v8.questions[0], _v0, _v5?.user?.isTeamUser ?? !1);else {
              var _v1, _v2;
              _v1 = _v8.questions[0], _v2 = _v5?.user?.isTeamUser ?? !1, (0, _v48.sendBpEventWithContexts)("vimeo.survey_navigation_option", {
                ..._v50("Continue"),
                ..._v51,
                ..._v52(_v2),
                ..._v53,
                ...(0, _v42.buildActionBpContext)({
                  action_type: "click",
                  feature: null
                })
              }, 2, {
                survey_name: _v49,
                test_id: 0,
                version_name: _v36,
                question_group: _v1.id,
                question_name: _v1.questionUntranslated,
                question_description: _v1.descriptionUntranslated,
                question_id: "1",
                button_type: "submit",
                answer_group: _v0.id,
                answer_name: _v0.labelUntranslated,
                answer_description: _v0.descriptionUntranslated,
                answer_id: _v0.bpAnswerId,
                answer_position: _v0.bpAnswerPosition
              });
            }
            await _v11({
              where: {
                userId: _v6.toString(),
                surveyType: _v36
              },
              select: ["questions"],
              variables: [{
                id: _v8.questions[0].id,
                answers: [{
                  id: _v0.id,
                  position: _v0.bpAnswerPosition
                }]
              }]
            }), _v0.push((0, _v55.getRedirectUrl)());
          }
        };
      if (_v9 || !_v8?.questions[0]) return (0, _v1.jsx)(_v40, {});
      let _v14 = _v7.width < 769,
        _v15 = _v7.width <= 480;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v40, {}), (0, _v1.jsxs)(_v9.Modal, {
          isOpen: !0,
          size: _v14 ? "full" : "xl",
          onClose: () => "onClose is required by Modal",
          closeOnOverlayClick: !1,
          isCentered: !0,
          motionPreset: "none",
          children: [(0, _v1.jsx)(_v13.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
            padding: _v15 ? "lg" : "xl",
            textAlign: _v15 ? "left" : "center",
            borderRadius: "xs",
            sx: _v14 ? {} : {
              maxW: "768px"
            },
            children: [(0, _v1.jsxs)(_v10.ModalBody, {
              px: "1",
              children: [_v14 ? (0, _v1.jsx)(_v8.Flex, {
                h: "4rem",
                justifyContent: "flex-start",
                children: (0, _v1.jsx)(_v27.Logo, {
                  width: "106px",
                  height: "36px",
                  color: "currentColor"
                })
              }) : null, (0, _v1.jsx)(_v14.Text, {
                variant: "heading-lg",
                color: "text-primary",
                children: _v8?.questions[0]?.question
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-primary",
                paddingTop: "4",
                children: _v8?.questions[0]?.description
              }), (0, _v1.jsx)(_v38, {
                answers: _v3,
                selectedAnswer: _v1,
                onSelectAnswer: _v0 => {
                  _v2(_v0 => _v0?.id === _v0.id ? null : _v0), _v0 && _v8?.questions[0] && _v54(_v8.questions[0], _v0, _v5?.user?.isTeamUser ?? !1);
                },
                shouldShowIcon: !_v15,
                alignment: _v15 ? "left" : "center"
              })]
            }), (0, _v1.jsxs)(_v12.ModalFooter, {
              paddingBottom: "0",
              paddingRight: "0",
              children: [(0, _v1.jsx)(_v7.Button, {
                size: "md",
                variant: "secondary",
                onClick: () => {
                  _v10 && _v13({
                    ..._v10,
                    bpAnswerId: _v8?.questions[0]?.answers.length,
                    bpAnswerPosition: _v8?.questions[0]?.answers.length
                  });
                },
                isLoading: _v12 && !_v1,
                children: _v10?.label
              }), (0, _v1.jsx)(_v7.Button, {
                size: "md",
                variant: "primary",
                isDisabled: !_v1,
                onClick: () => {
                  _v13(_v1);
                },
                isLoading: _v12 && !!_v1,
                children: (0, _v26.translate)({
                  singular: "Continue",
                  dictionary: {
                    es: {
                      singular: "Continuar"
                    },
                    "de-DE": {
                      singular: "Weiter"
                    },
                    "fr-FR": {
                      singular: "Continuer"
                    },
                    "ja-JP": {
                      singular: "次へ"
                    },
                    "ko-KR": {
                      singular: "계속"
                    },
                    "pt-BR": {
                      singular: "Continuar"
                    },
                    "zh-CN": {
                      singular: "继续"
                    }
                  }
                })
              })]
            })]
          })]
        })]
      });
    };
  _v0.s(["__N_SSG", 0, !0, "default", 0, () => {
    if (!(0, _v2.useContext)(_v29.ViewerContext)) return null;
    let _v0 = (0, _v3.createLocalStorageManager)("bokeh-color-mode");
    return (0, _v1.jsx)(_v4.ThemeProvider, {
      theme: _v5.bokehTheme,
      colorModeManager: _v0,
      children: (0, _v1.jsx)(_v57, {})
    });
  }], 0);
}