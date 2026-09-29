{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v1.createApi)({
      reducerPath: "transitionsApi",
      baseQuery: _v3.baseQuery,
      endpoints: _v0 => ({
        fetchTransitionLibrary: _v0.query({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
          },
          query: () => ({
            url: "create/transitions"
          }),
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        })
      })
    }),
    {
      useFetchTransitionLibraryQuery: _v5
    } = _v4;
  _v0.s(["isTransitionsLibraryLoadedSelector", 0, _v0 => _v4.endpoints.fetchTransitionLibrary.select()(_v0).isSuccess, "transitionsApi", 0, _v4, "useFetchTransitionLibraryQuery", 0, _v5], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v1.createApi)({
      reducerPath: "videoParentFolderApi",
      baseQuery: (0, _v7.baseQueryFactory)({
        getBaseUrl: () => `//${_v6.default.vimeoApiUrl}/`,
        prepareHeaders: _v0 => (_v0.set("Accept", "application/vnd.vimeo.*; version=3.4.2"), _v0.set("Authorization", `jwt ${_v6.default.jwt}`), _v0),
        credentials: "same-origin"
      }),
      endpoints: _v0 => ({
        fetchVideoParentFolder: _v0.query({
          query: _v0 => ({
            url: `videos/${_v0}?fields=parent_project.uri`
          }),
          transformResponse: _v0 => _v0.parent_project?.uri
        })
      })
    }),
    {
      useLazyFetchVideoParentFolderQuery: _v9
    } = _v8;
  _v0.s(["videoParentFolderApi", 0, _v8], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = (0, _v10.createListenerMiddleware)();
  _v15.startListening({
    matcher: (0, _v10.isAnyOf)(_v14.addElementAction, _v14.addElementToLayerAction, _v14.addElementToLayerWithOffsetAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2
        } = _v1,
        _v3 = _v0.payload.element;
      (0, _v11.isMediaElement)(_v3) && (_v3.creditInfo?.artist || _v3.creditInfo?.collectionName) && _v2((0, _v14.generateCreditsAction)());
    }
  }), _v15.startListening({
    matcher: (0, _v10.isAnyOf)(_v14.updateElementAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getState: _v3
        } = _v1,
        {
          ceId: _v4
        } = _v0.payload,
        _v5 = _v3().storyboard,
        _v6 = (0, _v13.getElementByIdFromStoryboard)(_v4, _v5);
      (0, _v11.isMediaElement)(_v6) && (_v6.creditInfo?.artist || _v6.creditInfo?.collectionName) && _v2((0, _v14.generateCreditsAction)());
    }
  }), _v15.startListening({
    matcher: (0, _v10.isAnyOf)(_v14.deleteElementAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getOriginalState: _v3
        } = _v1,
        {
          ceId: _v4
        } = _v0.payload,
        _v5 = _v3().storyboard,
        _v6 = (0, _v13.getElementByIdFromStoryboard)(_v4, _v5);
      (0, _v11.isMediaElement)(_v6) && (_v6.creditInfo?.artist || _v6.creditInfo?.collectionName) && _v2((0, _v14.generateCreditsAction)());
    }
  }), _v15.startListening({
    matcher: (0, _v10.isAnyOf)(_v14.replaceElementAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getOriginalState: _v3
        } = _v1,
        {
          ceId: _v4,
          element: _v5
        } = _v0.payload,
        _v6 = _v3().storyboard,
        _v7 = (0, _v13.getElementByIdFromStoryboard)(_v4, _v6);
      ((0, _v11.isMediaElement)(_v7) && (_v7.creditInfo?.artist || _v7.creditInfo?.collectionName) || (0, _v11.isMediaElement)(_v5) && (_v5.creditInfo?.artist || _v5.creditInfo?.collectionName)) && _v2((0, _v14.generateCreditsAction)());
    }
  }), _v15.startListening({
    matcher: (0, _v10.isAnyOf)(_v14.updateStoryboardAction, _v14.updateOrientationAction),
    effect: async (_v0, _v1) => {
      let {
        dispatch: _v2
      } = _v1;
      _v2((0, _v14.generateCreditsAction)());
    }
  }), _v15.startListening({
    matcher: (0, _v10.isAnyOf)(_v14.addElementsToLayersWithOffsetMapAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2
        } = _v1,
        {
          elementsData: _v3
        } = _v0.payload,
        _v4 = !1;
      for (let _v0 = 0; _v0 < _v3.length && !_v4; _v0++) for (let _v0 = 0; _v0 < _v3[_v0].elements.length; _v0++) {
        let _v0 = _v3[_v0].elements[_v0];
        if ((0, _v11.isMediaElement)(_v0) && (_v0.creditInfo?.artist || _v0.creditInfo?.collectionName)) {
          _v4 = !0;
          break;
        }
      }
      _v4 && _v2((0, _v14.generateCreditsAction)());
    }
  }), _v15.startListening({
    matcher: (0, _v10.isAnyOf)(_v14.updateElementsAction, _v14.splitElementsAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getOriginalState: _v3,
          getState: _v4
        } = _v1,
        {
          elements: _v5,
          splitMap: _v6
        } = _v0.payload,
        _v7 = !1,
        _v8 = _v3(),
        _v9 = _v4();
      _v5 && (_v7 = _v5.some(_v0 => {
        if (!(0, _v11.isMediaElement)(_v0)) return !1;
        let _v1 = (0, _v13.getElementByIdFromStoryboard)(_v0.id, _v8.storyboard),
          _v2 = (0, _v11.isMediaElement)(_v1) && (_v1.creditInfo?.artist || _v1.creditInfo?.collectionName),
          _v3 = _v0.creditInfo?.artist || _v0.creditInfo?.collectionName;
        return _v2 || _v3;
      })), _v6 && !_v7 && (_v7 = _v6.some(_v0 => {
        let _v1 = _v0.ceId,
          _v2 = (0, _v13.getElementByIdFromStoryboard)(_v1, _v8.storyboard);
        return (0, _v11.isMediaElement)(_v2) && (0, _v12.getCreditText)(_v2);
      })), _v7 || (_v7 = _v9.storyboard.layers.some(_v0 => _v0.composition.some(_v0 => (0, _v11.isMediaElement)(_v0) && (0, _v12.getCreditText)(_v0)))), _v7 && _v2((0, _v14.generateCreditsAction)());
    }
  });
  let _v16 = _v15.middleware;
  _v0.s(["default", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = new WeakSet();
  _v0.s(["faultyStateMiddleware", 0, ({
    getState: _v0
  }) => _v0 => _v0 => {
    let _v1 = _v0(_v0);
    return _v0().storyboard.layers.forEach(_v0 => {
      _v19.has(_v0) || (_v19.add(_v0), _v0.composition.forEach(_v0 => {
        !_v19.has(_v0) && (_v19.add(_v0), null === _v0.compositionTiming && _v17.LogService.sendLog("compositionTiming is null", _v18.LogComponent.EDITOR_ERROR, {
          actionType: _v0.type,
          actionPayload: _v0.payload,
          elementId: _v0.id,
          elementType: _v0.type
        }), (0, _v11.isSoundElement)(_v0) && null === _v0.effects && _v17.LogService.sendLog("sound element effects field is null", _v18.LogComponent.EDITOR_ERROR, {
          actionType: _v0.type,
          actionPayload: _v0.payload,
          elementId: _v0.id,
          elementType: _v0.type
        }));
      }));
    }), _v1;
  }], 0);
}