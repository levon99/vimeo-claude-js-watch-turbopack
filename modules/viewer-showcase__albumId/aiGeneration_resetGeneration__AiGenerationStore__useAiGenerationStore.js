{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      video_details: null,
      chapters: null,
      highlights: null,
      ask_ai: null,
      translate: null
    },
    _v4 = (0, _v1.create)()((0, _v2.devtools)((_v0, _v1) => ({
      generationIds: {
        ..._v3
      },
      startGeneration: _v0 => {
        let _v1 = crypto.randomUUID();
        return _v0(_v0 => ({
          generationIds: {
            ..._v0.generationIds,
            [_v0]: _v1
          }
        }), void 0, `aiGeneration/startGeneration:${_v0}`), _v1;
      },
      getGenerationId: _v0 => _v1().generationIds[_v0],
      resetGeneration: _v0 => {
        _v0 ? _v0(_v0 => ({
          generationIds: {
            ..._v0.generationIds,
            [_v0]: null
          }
        }), void 0, `aiGeneration/resetGeneration:${_v0}`) : _v0({
          generationIds: {
            ..._v3
          }
        }, void 0, "aiGeneration/resetGeneration");
      }
    }), {
      name: "AiGenerationStore",
      enabled: !1
    }));
  _v0.s(["useAiGenerationStore", 0, _v4]);
}