{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v1.default.div.withConfig({
      displayName: "styles__PlanHeader",
      componentId: "sc-34df3cd4-0"
    })`
  max-height: 4rem;
`,
    _v4 = _v1.default.div.withConfig({
      displayName: "styles__PlanTitle",
      componentId: "sc-34df3cd4-1"
    })`
  color: var(--vimeo-colors-text-primary);
  font-family: var(--vimeo-fonts-heading);
  font-size: ${(0, _v2.rem)(20)};
  line-height: 140%;
  letter-spacing: -0.8px;
  font-weight: 500;
`,
    _v5 = _v1.default.p.withConfig({
      displayName: "styles__PlanSubTitle",
      componentId: "sc-34df3cd4-2"
    })`
  margin-top: 0.125rem;
  color: var(--vimeo-colors-text-primary);
  font-size: ${(0, _v2.rem)(14)};
  font-weight: 400;
  letter-spacing: 0.03rem;
  line-height: 120%;
`,
    _v6 = _v1.default.div.withConfig({
      displayName: "styles__PlansFeaturesContainer",
      componentId: "sc-34df3cd4-3"
    })`
  padding-top: 4px;
`,
    _v7 = _v1.default.ul.withConfig({
      displayName: "styles__FeaturesWrapper",
      componentId: "sc-34df3cd4-4"
    })`
  list-style-type: disc;
  list-style-position: outside;
  padding: 0;
`,
    _v8 = _v1.default.li.withConfig({
      displayName: "styles__FeatureList",
      componentId: "sc-34df3cd4-5"
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
`,
    _v9 = _v1.default.div.withConfig({
      displayName: "styles__RecommendedBadge",
      componentId: "sc-34df3cd4-6"
    })`
  position: absolute;
  top: -1.5rem;
  left: ${(0, _v2.rem)(-4)};
  padding: 0.125rem 0.25rem 0.5rem;
  border-radius: ${(0, _v2.rem)(20)};
  background: #8a5ee8;
  color: #fff;
  font-family: var(--vimeo-fonts-heading);
  font-size: ${(0, _v2.rem)(12)};
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.36px;
  z-index: -1;
  height: ${(0, _v2.rem)(75)};
  width: 100%;
  text-align: center;
  box-sizing: content-box;
`,
    _v10 = _v1.default.div.withConfig({
      displayName: "styles__PlanQuotaContainer",
      componentId: "sc-34df3cd4-7"
    })`
  font-size: ${(0, _v2.rem)(14)};
  font-style: normal;
  font-weight: 500;
  line-height: ${(0, _v2.rem)(20)};
  color: var(--vimeo-colors-text-primary);
`,
    _v11 = _v1.default.div.withConfig({
      displayName: "styles__StorageQuotaContainer",
      componentId: "sc-34df3cd4-8"
    })`
  display: flex;
  row-gap: ${(0, _v2.rem)(4)};
  flex-direction: column;
`,
    _v12 = _v1.default.div.withConfig({
      displayName: "styles__StyledRow",
      componentId: "sc-34df3cd4-9"
    })`
  display: flex;
  column-gap: ${(0, _v2.rem)(4)};
  > div {
    display: flex;
    align-items: flex-start;
  }
`;
  _v0.s(["FeatureList", 0, _v8, "FeaturesWrapper", 0, _v7, "PlanHeader", 0, _v3, "PlanQuotaContainer", 0, _v10, "PlanSubTitle", 0, _v5, "PlanTitle", 0, _v4, "PlansFeaturesContainer", 0, _v6, "RecommendedBadge", 0, _v9, "StorageQuotaContainer", 0, _v11, "StyledRow", 0, _v12]);
}