{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  (0, _v2.default)(_v4.Button).withConfig({
    displayName: "TeamSwitcher.style__Button",
    componentId: "sc-7c5ae6d1-0"
  })`
  width: ${(0, _v1.rem)(210)};
  border: ${(0, _v1.rem)(1)} solid ${({
    theme: _v0
  }) => _v0.formats.secondary};
  border-radius: ${(0, _v1.rem)(3)};
  padding: ${(0, _v1.rem)(7)} ${(0, _v1.rem)(12)};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  height: ${(0, _v1.rem)(42)};
  svg {
    width: ${(0, _v1.rem)(17)};
  }
  span {
    display: flex;
    justify-content: space-between;
  }
  &:hover,
  &:focus-within,
  &:focus,
  &:active {
    background-color: ${({
    theme: _v0
  }) => _v0.item.bg};
  }
`, (0, _v2.default)(_v5.Pop.Item).withConfig({
    displayName: "TeamSwitcher.style__PopItem",
    componentId: "sc-7c5ae6d1-1"
  })`
  width: ${(0, _v1.rem)(210)};
  display: flex;
  align-items: center;
  min-height: ${(0, _v1.rem)(45)};
  background-color: ${({
    theme: _v0
  }) => _v0.item.bg};
  svg {
    top: auto;
    width: ${(0, _v1.rem)(20)};
  }

  p {
    padding-left: ${(0, _v1.rem)(8)};
  }
`, _v2.default.div.withConfig({
    displayName: "TeamSwitcher.style__ListWrapper",
    componentId: "sc-7c5ae6d1-2"
  })`
  max-height: ${(0, _v1.rem)(185)};
  overflow-y: auto;
`, (0, _v2.default)(_v6.ChevronDown).withConfig({
    displayName: "TeamSwitcher.style__ChevronDown",
    componentId: "sc-7c5ae6d1-3"
  })`
  width: ${(0, _v1.rem)(22)};
  path {
    fill: ${(0, _v3.slate)(500)};
  }
`, _v2.default.div.withConfig({
    displayName: "TeamSwitcher.style__ItemWrapper",
    componentId: "sc-7c5ae6d1-4"
  })`
  display: flex;
  align-items: center;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
  let _v8 = (0, _v2.default)(_v7.Paragraph).withConfig({
    displayName: "TeamSwitcher.style__Paragraph",
    componentId: "sc-7c5ae6d1-5"
  })`
  margin: ${(0, _v1.rem)(1)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
  (0, _v2.default)(_v8).withConfig({
    displayName: "TeamSwitcher.style__ParagraphLabel",
    componentId: "sc-7c5ae6d1-6"
  })`
  color: ${({
    theme: _v0
  }) => _v0.description.color1};
`, _v2.default.div.withConfig({
    displayName: "TeamSwitcher.style__TextWrapper",
    componentId: "sc-7c5ae6d1-7"
  })`
  display: flex;
  flex-direction: column;
`;
  let _v9 = _v2.default.img.withConfig({
    displayName: "TeamSwitcher.style__TeamLogo",
    componentId: "sc-7c5ae6d1-8"
  })`
  max-width: ${(0, _v1.rem)(42)};
  max-height: ${(0, _v1.rem)(30)};
`;
  _v2.default.div.withConfig({
    displayName: "TeamSwitcher.style__IconWrapper",
    componentId: "sc-7c5ae6d1-9"
  })`
  margin-right: ${(0, _v1.rem)(10)};
  display: flex;
  align-items: center;
`, _v0.s(["TeamLogo", 0, _v9]);
}