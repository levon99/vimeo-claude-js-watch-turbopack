{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v1.default.div.withConfig({
    displayName: "styles__PlanCardContainer",
    componentId: "sc-34df3cd4-0"
  })`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: ${(0, _v2.rem)(20)};
  border: ${(0, _v2.rem)(2)} solid
    ${({
    theme: _v0
  }) => _v0?.modal?.planCard?.border || "var(--vimeo-colors-stroke)"};
  background: var(--vimeo-colors-fill-surface);
  max-width: 19.5rem;
  position: relative;

  &.recommended {
    border: 4px solid #8a5ee8;
    border-top: none;
  }
`;
  let _v5 = _v1.default.div.withConfig({
      displayName: "styles__PlanHeader",
      componentId: "sc-34df3cd4-1"
    })`
  max-height: 4rem;
`,
    _v6 = _v1.default.div.withConfig({
      displayName: "styles__PlanTitle",
      componentId: "sc-34df3cd4-2"
    })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v2.rem)(22)};
  line-height: 120%;
  letter-spacing: ${(0, _v2.rem)(-.8)};
  font-weight: 700;
`,
    _v7 = _v1.default.p.withConfig({
      displayName: "styles__PlanSubTitle",
      componentId: "sc-34df3cd4-3"
    })`
  margin-top: 0.125rem;
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v2.rem)(14)};
  font-weight: 400;
  letter-spacing: 0.03rem;
  line-height: 120%;
`;
  _v1.default.div.withConfig({
    displayName: "styles__PlanPriceContainer",
    componentId: "sc-34df3cd4-4"
  })`
  padding: 0.25rem 0rem 0rem 0rem;
  height: ${(0, _v2.rem)(94)};
`, _v1.default.div.withConfig({
    displayName: "styles__PlanPrice",
    componentId: "sc-34df3cd4-5"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v2.rem)(36)};
  font-weight: 700;
  line-height: 120%;
  letter-spacing: ${(0, _v2.rem)(-1.2)};
`, _v1.default.p.withConfig({
    displayName: "styles__PlanBillingInfo",
    componentId: "sc-34df3cd4-6"
  })`
  color: ${({
    theme: _v0
  }) => _v0?.modal?.secondaryText || "var(--vimeo-colors-text-secondary)"};
  font-size: ${(0, _v2.rem)(12)};
  font-weight: 400;
  line-height: 120%;
`;
  let _v8 = _v1.default.div.withConfig({
    displayName: "styles__PlansFeaturesContainer",
    componentId: "sc-34df3cd4-7"
  })`
  padding-top: 4px;
`;
  _v1.default.div.withConfig({
    displayName: "styles__FeaturesText",
    componentId: "sc-34df3cd4-8"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 128.5%;
  letter-spacing: -0.00875rem;
`;
  let _v9 = _v1.default.ul.withConfig({
      displayName: "styles__FeaturesWrapper",
      componentId: "sc-34df3cd4-9"
    })`
  list-style-type: disc;
  list-style-position: outside;
  padding: 0;
`,
    _v10 = _v1.default.li.withConfig({
      displayName: "styles__FeatureList",
      componentId: "sc-34df3cd4-10"
    })`
  color: var(--vimeo-colors-text-primary);
  display: flex;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  list-style-type: none;
  padding: 0.25rem 0;
  letter-spacing: ${(0, _v2.rem)(.1)};
  column-gap: ${(0, _v2.rem)(4)};
`;
  _v1.default.div.withConfig({
    displayName: "styles__EnterprisePricingInfo",
    componentId: "sc-34df3cd4-11"
  })`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  height: 3rem;
  padding-top: 0.25rem;
  color: ${(0, _v3.slate)(900)};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
  let _v11 = _v1.default.div.withConfig({
    displayName: "styles__RecommendedBadge",
    componentId: "sc-34df3cd4-12"
  })`
  position: absolute;
  top: -1.5rem;
  left: ${(0, _v2.rem)(-4)};
  padding: 0.125rem 0.25rem 0.5rem;
  border-radius: ${(0, _v2.rem)(20)};
  background: #8a5ee8;
  color: #fff;
  font-size: ${(0, _v2.rem)(12)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: ${(0, _v2.rem)(.24)};
  z-index: -1;
  height: ${(0, _v2.rem)(75)};
  width: 100%;
  text-align: center;
  box-sizing: content-box;
`;
  _v1.default.div.withConfig({
    displayName: "styles__TalkToOurTeam",
    componentId: "sc-34df3cd4-13"
  })`
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v2.rem)(16)};
  line-height: ${(0, _v2.rem)(18)};
  font-weight: 500;
  margin-bottom: ${(0, _v2.rem)(19)};
  margin-left: ${(0, _v2.rem)(6)};
`;
  let _v12 = _v1.default.div.withConfig({
      displayName: "styles__PlanQuotaContainer",
      componentId: "sc-34df3cd4-14"
    })`
  font-size: ${(0, _v2.rem)(14)};
  font-style: normal;
  font-weight: 500;
  line-height: ${(0, _v2.rem)(20)};
  color: var(--vimeo-colors-text-primary);
`,
    _v13 = _v1.default.div.withConfig({
      displayName: "styles__StorageQuotaContainer",
      componentId: "sc-34df3cd4-15"
    })`
  display: flex;
  row-gap: ${(0, _v2.rem)(4)};
  flex-direction: column;
`,
    _v14 = _v1.default.div.withConfig({
      displayName: "styles__StyledRow",
      componentId: "sc-34df3cd4-16"
    })`
  display: flex;
  column-gap: ${(0, _v2.rem)(4)};
  > div {
    display: flex;
    align-items: flex-start;
  }
`;
  _v1.default.div.withConfig({
    displayName: "styles__ToolTipWrapper",
    componentId: "sc-34df3cd4-17"
  })`
  height: ${(0, _v2.rem)(16)} !important;
  margin: auto 0;
  padding: 0 !important;
`, (0, _v1.default)(_v4.Tip).withConfig({
    displayName: "styles__StyledTip",
    componentId: "sc-34df3cd4-18"
  })`
  font-size: ${(0, _v2.rem)(14)};
  fontweight: 400;
  line-height: ${(0, _v2.rem)(16)};
  letter-spacing: ${(0, _v2.rem)(.1)};
`, _v0.s(["FeatureList", 0, _v10, "FeaturesWrapper", 0, _v9, "PlanHeader", 0, _v5, "PlanQuotaContainer", 0, _v12, "PlanSubTitle", 0, _v7, "PlanTitle", 0, _v6, "PlansFeaturesContainer", 0, _v8, "RecommendedBadge", 0, _v11, "StorageQuotaContainer", 0, _v13, "StyledRow", 0, _v14]);
}