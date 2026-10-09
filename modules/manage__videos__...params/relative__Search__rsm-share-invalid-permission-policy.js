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
  let _v19 = {
    position: "relative",
    zIndex: 10
  };
  _v0.s(["Search", 0, () => {
    let _v0 = (0, _v2.useRef)(null),
      _v1 = (0, _v2.useRef)(null),
      _v2 = (0, _v2.useContext)(_v15.RefsState),
      [_v3, _v4] = (0, _v2.useState)({
        value: "",
        hasError: !1
      }),
      [_v5, _v6] = (0, _v2.useState)(!1),
      _v7 = (0, _v9.useToast)(),
      {
        modalContentRef: _v8
      } = _v2,
      _v9 = _v3.value.trim(),
      _v10 = (0, _v10.useDebouncedValue)(_v9, 500),
      {
        teamPermissions: _v11
      } = (0, _v16.useGlobalStore)((0, _v3.useShallow)(({
        teamPermissions: _v0
      }) => ({
        teamPermissions: _v0.data
      }))),
      {
        hasEnterprise: _v12,
        canSeeUpsellModalOnShare: _v13,
        hasTeamInvite: _v14,
        contentSpaceEnabled: _v15,
        isCapabilitiesLoaded: _v16
      } = (0, _v16.useGlobalStore)((0, _v3.useShallow)(({
        capabilities: _v0
      }) => ({
        hasEnterprise: _v0.data.hasEnterprise,
        canSeeUpsellModalOnShare: _v0.data.canSeeUpsellModalOnShare,
        hasTeamInvite: _v0.data.hasTeamInvite,
        contentSpaceEnabled: _v0.data.contentSpaceEnabled,
        isCapabilitiesLoaded: _v0.isCapabilitiesLoaded
      }))),
      _v17 = (0, _v16.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v18 = (0, _v16.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.data.isPrivateToUser),
      _v19 = (0, _v16.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.isMobileOrTab),
      {
        addNewEmailAddress: _v20,
        addNewMember: _v21,
        setShouldSendEmail: _v22
      } = (0, _v16.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions),
      _v23 = (0, _v16.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setMainScreen),
      _v24 = (0, _v2.useCallback)(_v0 => {
        if (_v0) {
          if (!_v0.applicablePermissionPolicies?.length) {
            let _v0 = "rsm-share-invalid-permission-policy";
            _v7.isActive(_v0) || _v7({
              title: (0, _v11.translate)({
                singular: "You cannot share with this user.",
                dictionary: {
                  es: {
                    singular: "No puede compartir con este usuario."
                  },
                  "de-DE": {
                    singular: "Keine Freigabe für diesen Nutzer möglich."
                  },
                  "fr-FR": {
                    singular: "Vous ne pouvez pas partager avec cet utilisateur."
                  },
                  "ja-JP": {
                    singular: "このユーザーと共有することはできません。"
                  },
                  "ko-KR": {
                    singular: "이 사용자와는 공유할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Você não pode compartilhar com esse usuário."
                  },
                  "zh-CN": {
                    singular: "您无法与此用户分享。"
                  }
                }
              }),
              id: _v0
            });
            return;
          }
          let _v0 = (0, _v18.getPermissionLevels)(_v17, {
            ..._v0,
            applicablePermissionPolicies: _v0?.applicablePermissionPolicies ?? []
          });
          _v21(_v0, _v0), _v23(_v17.ShareModalState.Invitation);
          return;
        }
        if (_v9) {
          if (_v9.length > 0 && !(0, _v18.validateEmail)(_v9)) {
            _v4(_v0 => ({
              ..._v0,
              hasError: !0
            }));
            let _v0 = "rsm-share-invalid-email";
            _v7.isActive(_v0) || _v7({
              title: (0, _v11.translate)({
                singular: "Please enter a valid email address",
                dictionary: {
                  es: {
                    singular: "Introduce una dirección de correo electrónico válida."
                  },
                  "de-DE": {
                    singular: "Bitte gib eine gültige E-Mail-Adresse an"
                  },
                  "fr-FR": {
                    singular: "Veuillez saisir une adresse e-mail valide"
                  },
                  "ja-JP": {
                    singular: "正しいメールアドレスを入力してください"
                  },
                  "ko-KR": {
                    singular: "올바른 이메일 주소를 입력하세요."
                  },
                  "pt-BR": {
                    singular: "Digite um endereço de e-mail válido"
                  },
                  "zh-CN": {
                    singular: "请输入有效的电子邮件地址"
                  }
                }
              }),
              id: _v0
            });
            return;
          }
          if (!_v14) {
            let _v0 = "rsm-share-no-team-invite";
            _v7.isActive(_v0) || _v7({
              title: (0, _v11.translate)({
                singular: "Enter an existing member or group name",
                dictionary: {
                  es: {
                    singular: "Introduzca el nombre de un miembro o grupo existente"
                  },
                  "de-DE": {
                    singular: "Geben Sie einen bestehenden Mitglieds- oder Gruppennamen ein"
                  },
                  "fr-FR": {
                    singular: "Saisissez le nom d'un membre ou d'un groupe existant"
                  },
                  "ja-JP": {
                    singular: "既存のメンバーまたはグループ名を入力してください"
                  },
                  "ko-KR": {
                    singular: "기존 멤버 또는 그룹 이름을 입력하세요."
                  },
                  "pt-BR": {
                    singular: "Informe o nome de um grupo ou membro existente"
                  },
                  "zh-CN": {
                    singular: "请输入现有成员或群组名称"
                  }
                }
              }),
              id: _v0,
              variant: "warning"
            });
            return;
          }
          _v20([_v9]), _v22(!0), _v23(_v17.ShareModalState.Invitation), _v4({
            value: "",
            hasError: !1
          });
        }
      }, [_v9, _v14, _v20, _v17, _v22, _v23, _v21, _v7]);
    (0, _v2.useEffect)(() => {
      let _v0 = _v11?.data?.find(_v0 => _v9 && _v0.teamEntity.email === _v9);
      _v0 && (_v24(_v0), _v23(_v17.ShareModalState.Invitation));
    }, [_v9, _v11?.data]);
    let _v25 = _v12 ? (0, _v11.translate)({
        singular: "Add name, group or email",
        dictionary: {
          es: {
            singular: "Agregar nombre, grupo o correo electrónico"
          },
          "de-DE": {
            singular: "Name, Gruppe oder E-Mail-Adresse eingeben"
          },
          "fr-FR": {
            singular: "Ajouter un nom, un groupe ou une adresse e-mail"
          },
          "ja-JP": {
            singular: "名前、グループ、またはEメールを追加"
          },
          "ko-KR": {
            singular: "이름, 그룹 또는 이메일 추가"
          },
          "pt-BR": {
            singular: "Adicione nome, grupo ou e-mail"
          },
          "zh-CN": {
            singular: "添加名称、群组或电子邮件"
          }
        }
      }) : (0, _v11.translate)({
        singular: "Add name or email",
        dictionary: {
          es: {
            singular: "Agregar nombre o correo electrónico"
          },
          "de-DE": {
            singular: "Name oder E-Mail eingeben"
          },
          "fr-FR": {
            singular: "Ajouter un nom ou une adresse e-mail"
          },
          "ja-JP": {
            singular: "名前またはメールアドレスを追加"
          },
          "ko-KR": {
            singular: "이름 또는 이메일 추가"
          },
          "pt-BR": {
            singular: "Adicionar nome ou e-mail"
          },
          "zh-CN": {
            singular: "添加名字或电子邮件"
          }
        }
      }),
      _v26 = !_v16 || _v13 || !_v15 && _v18;
    return (0, _v12.default)([_v0, _v1], () => {
      setTimeout(() => {
        _v6(!1);
      }, 0);
    }, null, [_v0, _v1, _v6]), (0, _v1.jsx)(_v4.Box, {
      sx: _v19,
      children: (0, _v1.jsxs)(_v5.Popover, {
        placement: "bottom-start",
        isOpen: _v9.length > 0 || _v5,
        initialFocusRef: _v0,
        isLazy: !0,
        matchWidth: !0,
        lazyBehavior: "unmount",
        gutter: 0,
        children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
          children: (0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v13.SearchInput, {
              nameInputTextRef: _v0,
              onEnterKeyDown: () => {
                _v24();
              },
              nameInput: _v3,
              onNameInputUpdate: _v0 => {
                _v4(_v0);
              },
              nameInputPlaceholderText: _v25,
              canSeeUpsellModalOnShare: _v13,
              isDisabled: _v26,
              isMobile: _v19,
              setIsInputFocused: _v6
            })
          })
        }), (0, _v1.jsx)(_v8.Portal, {
          containerRef: _v8,
          children: (0, _v1.jsx)(_v6.PopoverContent, {
            ref: _v1,
            children: (0, _v1.jsx)(_v14.SearchResultContainer, {
              searchQuery: _v10,
              onInviteNewMember: _v24,
              isSearchInputFocused: _v5
            })
          })
        })]
      })
    });
  }]);
}