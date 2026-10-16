{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = [["Queries", [["/demo/gctl/query", "Query"], ["/demo/gctl/conditional", "Conditional Query"], ["/demo/gctl/lazy-query", "Lazy Query"], ["/demo/gctl/infinite-query", "Infinite Query"], ["/demo/gctl/mutation", "Mutation"]]], ["Config", [["/demo/gctl/suspense", "Suspense"]]]];
  var _v6 = (0, _v2.default)("div").withConfig({
      displayName: "components___StyledDiv",
      componentId: "sc-188f0d1e-0"
    })`
              display: flex;
              flex-flow: column;
              margin-bottom: 1rem;
            `,
    _v7 = (0, _v2.default)("nav").withConfig({
      displayName: "components___StyledNav",
      componentId: "sc-188f0d1e-1"
    })`
        padding: 2rem 1.5rem;
        background-color: var(--vimeo-colors-gray-50);
      `,
    _v8 = (0, _v2.default)("main").withConfig({
      displayName: "components___StyledMain",
      componentId: "sc-188f0d1e-2"
    })`
      padding: 2rem 4rem;
    `,
    _v9 = (0, _v2.default)("div").withConfig({
      displayName: "components___StyledDiv2",
      componentId: "sc-188f0d1e-3"
    })`
      width: 100vw;
      height: calc(100vh - 63px);
      overflow: auto;
      position: relative;
      display: grid;
      grid-template-columns: 14rem auto;
      grid-tempalte-rows: auto auto;

      &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        content: ' ';
        box-shadow: inset 0 10px 8px -6px hsla(0, 0%, 0%, 0.25);
      }
    `,
    _v10 = (0, _v2.default)("div").withConfig({
      displayName: "components___StyledDiv3",
      componentId: "sc-188f0d1e-4"
    })`display: flex; flex-direction: column; align-items: start; gap: 1rem;`,
    _v11 = (0, _v2.default)("div").withConfig({
      displayName: "components___StyledDiv4",
      componentId: "sc-188f0d1e-5"
    })`max-width: 64ch; line-height: 1.5;`,
    _v12 = (0, _v2.default)("ul").withConfig({
      displayName: "components___StyledUl",
      componentId: "sc-188f0d1e-6"
    })`
      display: grid;
      border-bottom: 1px solid var(--vimeo-colors-gray-100);
    `,
    _v13 = (0, _v2.default)("li").withConfig({
      displayName: "components___StyledLi",
      componentId: "sc-188f0d1e-7"
    })`
      display: grid;
      align-content: start;
      gap: 0.25rem 1rem;
      padding: 1rem 0;
      border-top: 1px solid var(--vimeo-colors-gray-100);
      grid:
        'i t' 1rem
        'i d' auto / min-content auto;
    `,
    _v14 = (0, _v2.default)("img").withConfig({
      displayName: "components___StyledImg",
      componentId: "sc-188f0d1e-8"
    })`
      grid-area: i;
      width: 8rem;
      height: calc(8rem * (9 / 16));
      object-fit: cover;
    `,
    _v15 = (0, _v2.default)("div").withConfig({
      displayName: "components___StyledDiv5",
      componentId: "sc-188f0d1e-9"
    })`
      grid-area: d;
      font-size: 0.825em;
      max-width: 80ch;
    `,
    _v16 = (0, _v2.default)("span").withConfig({
      displayName: "components___StyledSpan",
      componentId: "sc-188f0d1e-10"
    })`
      font-size: 0.875em;
      font-weight: 600;
      color: var(--vimeo-colors-gray-300);
    `;
  _v0.s(["List", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v12, {
    children: _v0
  }), "ListItem", 0, ({
    children: _v0,
    className: _v1
  }) => (0, _v1.jsx)(_v13, {
    className: _v1,
    children: _v0
  }), "ListItemDescription", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v15, {
    children: _v0
  }), "Main", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v8, {
    children: _v0
  }), "Muted", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v16, {
    children: _v0
  }), "PageDescription", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v11, {
    children: _v0
  }), "PageLayout", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v9, {
    children: _v0
  }), "SectionLayout", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v10, {
    children: _v0
  }), "Sidebar", 0, ({
    activePath: _v0
  }) => (0, _v1.jsx)(_v7, {
    children: _v5.map(([_v0, _v1]) => (0, _v1.jsxs)(_v6, {
      children: [(0, _v1.jsx)(_v4.Header, {
        size: "xs",
        style: {
          color: "var(--vimeo-colors-gray-400)",
          fontWeight: 800
        },
        children: _v0
      }), _v1.map(([_v0, _v1]) => (0, _v1.jsx)(_v3.default, {
        href: _v0,
        style: {
          fontWeight: 800,
          padding: "0.5rem",
          textDecoration: "none",
          color: _v0 === _v0 ? "var(--vimeo-colors-vimeoBlue-800)" : "var(--vimeo-colors-vimeoBlue-400)"
        },
        children: _v1
      }, `ITEM:${_v1}`))]
    }, `GROUP:${_v0}`))
  }), "Thumbnail", 0, ({
    srcSet: _v0
  }) => (0, _v1.jsx)(_v14, {
    srcSet: _v0
  })]);
}