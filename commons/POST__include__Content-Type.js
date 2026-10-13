{
  "use strict";

  async function _v1(_v0, _v1) {
    try {
      let _v0 = await fetch(_v1, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: _v0
      }).then(_v0 => _v0.json().then(_v0 => ({
        ..._v0,
        status: _v0.status
      })).catch(() => ({
        status: _v0.status
      })));
      if (_v0.logged_in || _v0.force_redirect && _v0.redirect_url) return _v0;
      throw _v0;
    } catch (_v0) {
      if (429 === _v0.status) return _v0;
      throw _v0;
    }
  }
  _v0.s(["Login", 0, _v1], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v4.default.section.withConfig({
      displayName: "Shared__FormSection",
      componentId: "sc-e0fa4153-0"
    })`
  margin-top: ${(0, _v3.rem)(10)};
`,
    _v9 = (0, _v4.default)(_v5.Button).attrs(({
      format: _v0
    }) => ({
      format: _v0 || "primary",
      size: "lg"
    })).withConfig({
      displayName: "Shared__ContinueButton",
      componentId: "sc-e0fa4153-1"
    })`
  width: 100%;
  &.f2pPilotRegLogin {
    background: var(--vimeo-colors-text-primary);
    margin-top: ${(0, _v3.rem)(24)};
    &:hover {
      background: var(--vimeo-colors-text-primary);
    }
  }
  &.styledCta {
    background: #17d5ff;
    color: #11191d;
    &:hover {
      background: #17d5ff;
      color: #11191d;
    }
  }
`,
    _v10 = _v4.default.div.withConfig({
      displayName: "Shared__OrSeparator",
      componentId: "sc-e0fa4153-2"
    })`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--vimeo-colors-text-tertiary);
  padding: ${(0, _v3.rem)(12)} 0;
  font-size: ${(0, _v3.rem)(14)};
  &::before,
  &::after {
    position: relative;
    width: calc(50% - ${(0, _v3.rem)(16)});
    height: ${(0, _v3.rem)(1)};
    content: '\\a0';
    background-color: var(--vimeo-colors-stroke);
  }
`,
    _v11 = (0, _v4.default)(_v7.Notice).withConfig({
      displayName: "Shared__Notice",
      componentId: "sc-e0fa4153-3"
    })`
  padding-right: ${(0, _v3.rem)(30)};
`,
    _v12 = _v4.default.hr.withConfig({
      displayName: "Shared__HR",
      componentId: "sc-e0fa4153-4"
    })`
  border: 1px solid var(--vimeo-colors-stroke);
  width: 100%;
  margin-bottom: ${(0, _v3.rem)(16)};
`,
    _v13 = _v4.default.form.withConfig({
      displayName: "Shared__Form",
      componentId: "sc-e0fa4153-5"
    })`
  display: flex;
  flex-direction: column;
`,
    _v14 = _v4.default.div.withConfig({
      displayName: "Shared__InputWrapper",
      componentId: "sc-e0fa4153-6"
    })`
  ${({
      order: _v0
    }) => _v0 && _v4.css`
      order: ${_v0};
    `}
  margin-bottom: ${(0, _v3.rem)(16)};
  span[role='alert'] {
    color: var(--vimeo-colors-status-destructive-primary);
  }

  input {
    padding: ${(0, _v3.rem)(16)} ${(0, _v3.rem)(8)};
    &::placeholder {
      color: var(--vimeo-colors-text-tertiary);
      opacity: 0.5;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  &.f2pPilotRegLogin {
    input {
      padding: ${(0, _v3.rem)(8)} ${(0, _v3.rem)(12)};
      border-radius: ${(0, _v3.rem)(8)};
      border: ${(0, _v3.rem)(1)} solid var(--vimeo-colors-stroke);
      &::placeholder {
        color: var(--vimeo-colors-text-tertiary);
      }
    }
  }
  ${({
      formType: _v0
    }) => "underline" === _v0 && _v4.css`
      #email_login {
        text-align: center;
      }
      padding: 8px;
      margin-bottom: 0;
      input {
        padding: 15px;
        font-size: 17px;
        &:focus {
          border-bottom: 2px solid rgba(92, 201, 255, 0.9);
          transition: border-bottom 150ms ease;
        }
      }
    `}
`;
  _v0.s(["ContinueButton", 0, _v9, "Form", 0, _v13, "FormSection", 0, _v8, "HR", 0, _v12, "Input", 0, _v0 => (0, _v2.jsx)(_v14, {
    formType: _v0.formType,
    order: _v0.order,
    children: (0, _v2.jsx)(_v6.Input, {
      floating: !0,
      ..._v0,
      variant: _v0.inputFieldVariant,
      ref: _v0.emailRef,
      children: _v0.children
    })
  }), "Notice", 0, _v11, "OrSeparator", 0, _v10], 0);
}