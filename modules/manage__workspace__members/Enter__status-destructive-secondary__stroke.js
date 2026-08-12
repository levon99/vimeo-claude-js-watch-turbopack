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
  let _v15 = [" ", ",", ";", "Enter", "Tab"],
    _v16 = ({
      emailObject: _v0,
      handleEmailRemoval: _v1
    }) => {
      let _v2 = _v0.errorMessages.length ? "status-destructive-secondary" : "stroke";
      return (0, _v1.jsxs)(_v9.Tag, {
        backgroundColor: _v2,
        _dark: {
          backgroundColor: _v2
        },
        height: "fit-content",
        maxWidth: "98%",
        size: "md",
        children: [(0, _v1.jsx)(_v9.TagLabel, {
          style: {
            WebkitLineClamp: 5
          },
          children: _v0.value
        }), (0, _v1.jsx)(_v9.TagCloseButton, {
          onClick: () => _v1(_v0.id),
          children: (0, _v1.jsx)(_v12.CloseX, {})
        })]
      }, _v0.id);
    };
  _v0.s(["EmailAddressInput", 0, ({
    currentEmail: _v0,
    emails: _v1,
    handleOnBlur: _v2,
    handleEmailChange: _v3,
    handleEmailRemoval: _v4,
    handleErrorChange: _v5,
    validateAndStoreEmail: _v6,
    onEmailAddressHeightChange: _v7
  }) => {
    let [_v8, _v9] = (0, _v2.useState)(0),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v14.getTranslations)(),
      _v12 = _v0.length > _v13.MAX_LENGTH_OF_EMAIL_ADDRESS,
      _v13 = _v1.filter(_v0 => _v0.errorMessages.length > 0),
      _v14 = _v12 || _v13.length > 0,
      _v15 = _v1.length > _v13.MAX_ALLOWED_EMAIL_INVITES,
      _v16 = _v10.current?.parentElement?.getBoundingClientRect().width ?? 0,
      _v17 = _v10?.current?.offsetHeight ?? 0;
    return (0, _v2.useEffect)(() => {
      _v9(_v17), _v7?.(_v17);
    }, [_v1, _v17, _v7]), (0, _v2.useEffect)(() => {
      _v5(_v14 || _v15 || !_v1.length && !_v0.length);
    }, [_v0.length, _v1.length, _v5, _v15, _v14]), (0, _v1.jsxs)(_v11.VStack, {
      alignItems: "start",
      gap: "xs",
      flex: 1,
      minWidth: 0,
      children: [(0, _v1.jsxs)(_v4.HStack, {
        children: [(0, _v1.jsx)(_v3.Header, {
          size: "xs",
          children: _v11.AddEmails
        }), (0, _v1.jsxs)(_v10.Text, {
          color: "text-secondary",
          fontWeight: "350",
          variant: "body-md",
          children: ["(", _v11.MaxOfValue(_v13.MAX_ALLOWED_EMAIL_INVITES), ")"]
        })]
      }), (0, _v1.jsxs)(_v6.InputGroup, {
        height: "auto",
        width: "100%",
        children: [(0, _v1.jsx)(_v7.InputLeftElement, {
          flexWrap: "wrap",
          gap: "xs",
          height: "auto",
          justifyContent: "flex-start",
          paddingLeft: "sm",
          paddingTop: _v1.length ? "sm" : "0",
          ref: _v10,
          width: "inherit",
          children: _v1.map(_v0 => (0, _v1.jsx)(_v16, {
            emailObject: _v0,
            handleEmailRemoval: _v4
          }, _v0.id))
        }), (0, _v1.jsx)(_v5.Input, {
          height: (0, _v8.rem)(40 + _v8),
          isInvalid: _v14,
          maxLength: _v13.MAX_LENGTH_OF_EMAIL_ADDRESS + 1,
          onBlur: _v2,
          onChange: _v3,
          onKeyDown: _v0 => {
            _v15.includes(_v0.key) && _v0.trim() && (_v0.preventDefault?.(), _v6());
          },
          paddingLeft: "md",
          paddingTop: (0, _v8.rem)(_v8),
          placeholder: _v1.length ? void 0 : _v11.AddEmailsToInvite,
          size: "md",
          value: _v0,
          variant: "default",
          width: (0, _v8.rem)(432)
        })]
      }), _v13.map(_v0 => _v0.errorMessages.map(_v0 => (0, _v1.jsx)(_v10.Text, {
        color: "status-destructive-primary",
        maxWidth: (0, _v8.rem)(_v16),
        variant: "body-md",
        children: _v0
      }, _v0))), _v15 && (0, _v1.jsx)(_v10.Text, {
        color: "status-destructive-primary",
        maxWidth: (0, _v8.rem)(_v16),
        variant: "body-md",
        children: _v11.CannotAcceptMoreThanTenEmailAddresses
      }), _v12 && (0, _v1.jsx)(_v10.Text, {
        color: "status-destructive-primary",
        maxWidth: (0, _v8.rem)(_v16),
        variant: "body-md",
        children: _v11.EmailAddressMaxLengthReached(_v13.MAX_LENGTH_OF_EMAIL_ADDRESS)
      })]
    });
  }]);
}