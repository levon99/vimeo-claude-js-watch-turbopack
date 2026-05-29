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
  let _v15 = ({
    children: _v0,
    error: _v1
  }) => {
    let _v2 = (0, _v3.useContext)(_v14.ViewerContext);
    if (_v2?.isSimplifiedSite) throw _v1 ?? new _v13.ResourceNotFoundError();
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    });
  };
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = (0, _v16.default)(_v19.Header).attrs({
      size: "1"
    }).withConfig({
      displayName: "style__Header",
      componentId: "sc-34d1e2b6-0"
    })`
  padding-left: ${(0, _v17.rem)(24)};
`,
    _v21 = _v16.default.div.withConfig({
      displayName: "style__Wrapper",
      componentId: "sc-34d1e2b6-1"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
  max-width: 960px;
  min-height: 50vh;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 90px;
`,
    _v22 = (0, _v16.default)(_v18.Spinner).withConfig({
      displayName: "style__LoaderWithMargin",
      componentId: "sc-34d1e2b6-2"
    })`
  margin-top: -${(0, _v17.rem)(163)};
`,
    _v23 = (0, _v16.default)(_v0 => (0, _v1.jsx)("div", {
      ..._v0,
      children: (0, _v1.jsx)(_v22, {
        size: "xl"
      })
    })).withConfig({
      displayName: "style__Loader",
      componentId: "sc-34d1e2b6-3"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`,
    {
      ACTIVITYPAGE_PAGE_SIZE: _v24,
      FA_CONTAINERS: _v25,
      FA_COMPONENTS: _v26,
      FA_KEYWORDS: _v27,
      FOOTER_BUFFER: _v28,
      SCROLL_THROTTLE: _v29
    } = _v6.constants,
    {
      fetchOlderActivities: _v30,
      fetchNewActivities: _v31,
      markAllActivitiesDisplayed: _v32,
      showAllActivitiesDisplayed: _v33
    } = _v5.actions,
    _v34 = (0, _v4.connect)(_v0 => ({
      activities: _v0.activities,
      isRequestingOlderActivities: _v0.isRequestingOlderActivities,
      noOlderActivitiesExist: _v0.noOlderActivitiesExist
    }), _v0 => ({
      fetchOlderActivities: _v0 => _v0(_v30(_v0)),
      fetchNewActivities: () => _v0(_v31()),
      markAllActivitiesDisplayed: () => (_v0(_v33()), _v0(_v32()))
    }))(_v0 => {
      let {
        isRequestingOlderActivities: _v1,
        noOlderActivitiesExist: _v2,
        activities: _v3,
        markAllActivitiesDisplayed: _v4,
        fetchOlderActivities: _v5
      } = _v0;
      (0, _v3.useEffect)(() => (_v5(_v24), () => {
        document.removeEventListener("scroll", _v6);
      }), []), (0, _v3.useEffect)(() => {
        _v3.length > 0 && _v4(), document.addEventListener("scroll", _v6);
      }, [_v3.length]);
      let _v6 = (0, _v2.default)(_v0 => {
        let _v1;
        _v1 || _v2 || (_v1 = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, !(document.body.scrollHeight <= _v1 + window.innerHeight + _v28)) || _v5(_v24);
      }, _v29);
      return (0, _v1.jsxs)(_v21, {
        children: [0 !== _v3.length && (0, _v1.jsx)(_v20, {
          children: (0, _v11.translate)({
            singular: "Activity",
            dictionary: {
              es: {
                singular: "Actividad"
              },
              "de-DE": {
                singular: "Aktivität"
              },
              "fr-FR": {
                singular: "Activité"
              },
              "ja-JP": {
                singular: "アクティビティ"
              },
              "ko-KR": {
                singular: "활동"
              },
              "pt-BR": {
                singular: "Atividade"
              },
              "zh-CN": {
                singular: "活动"
              }
            }
          })
        }), (() => {
          if (0 === _v3.length) return _v1 ? null : (0, _v1.jsx)(_v8.ActivityEmptyState, {
            size: ""
          });
          let _v0 = _v3.map(_v0 => {
            let _v1 = {
              container: _v25.ACTIVITYPAGE,
              component: _v26.ACTIVITY,
              keyword: _v27[_v0.type]
            };
            return _v0.text ? (0, _v1.jsx)(_v7.Container, {
              showCta: !0,
              activity: _v0,
              fatalAttraction: _v1
            }, _v0.id) : null;
          });
          return (0, _v1.jsx)("ol", {
            children: _v0
          });
        })(), _v1 && !_v2 ? (0, _v1.jsx)(_v23, {}) : null]
      });
    });
  (0, _v9.withPageSetup)(() => ({
    props: {
      activities: [],
      isRequestingOlderActivities: !1,
      noOlderActivitiesExist: !1,
      hasThemeSupport: !1,
      metadata: {
        className: "ActivityMetadata"
      }
    }
  }), {
    requireLogin: !0
  }), _v34.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v10.DefaultNavigation, {}), (0, _v1.jsx)(_v15, {
      children: _v0
    }), (0, _v1.jsx)(_v12.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v34], 0);
}