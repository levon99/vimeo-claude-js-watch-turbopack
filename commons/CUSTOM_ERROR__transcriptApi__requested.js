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
    _v9 = _v0.i(0);
  let _v10 = "CUSTOM_ERROR",
    _v11 = (0, _v1.createApi)({
      reducerPath: "transcriptApi",
      baseQuery: _v9.baseQuery,
      endpoints: _v0 => ({
        getTranscriptForSource: _v0.query({
          extraOptions: {
            apiServer: _v9.ApiServer.VIMEO,
            isRetryOnError: !0
          },
          queryFn: async ({
            sourceHash: _v0,
            isLibrarySource: _v1,
            storyboardId: _v2,
            signal: _v3
          }, _v4, _v5, _v6) => {
            let _v7 = _v1,
              _v8 = null,
              _v9 = "",
              _v10 = (_v0, _v1) => {
                _v3.default.sendAction(_v2.FetchTranscript, {
                  step: _v0,
                  status: _v1,
                  sourceHash: _v0
                });
              };
            if (_v10(_v5.FetchTranscriptStep.START), (0, _v6.sendTrackTranscriptProcessStep)(_v0, "requested"), _v3.aborted) return _v10(_v5.FetchTranscriptStep.ABORT), {
              error: {
                status: _v10,
                error: _v9 = _v3.reason
              }
            };
            let _v11 = `sources/${_v0}/storyboards/${_v2}/audio_artifact`,
              _v12 = `users/${_v4.default.teamOwnerId}/sources/${_v0}/transcript`,
              _v13 = _v1 ? _v5.TranscriptServiceType.LIBRARY : _v5.TranscriptServiceType.UPLOADS;
            if (!_v1) {
              _v10(_v5.FetchTranscriptStep.EXTRACT_AUDIO, _v5.FetchTranscriptStepStatus.START);
              let _v0 = await (0, _v7.rtkPoll)({
                url: _v11,
                fetchWithBaseQuery: _v0 => _v6({
                  url: _v0,
                  signal: _v3,
                  method: "post"
                }),
                shouldKeepPolling: _v0 => !_v3.aborted && _v0.data?.artifact.status !== _v5.TranscriptStatus.DONE
              });
              _v7 = _v0.data?.artifact.status === _v5.TranscriptStatus.DONE, _v10(_v5.FetchTranscriptStep.EXTRACT_AUDIO, _v7 ? _v5.FetchTranscriptStepStatus.DONE : _v5.FetchTranscriptStep.FAILED);
            }
            if (_v7) {
              _v10(_v5.FetchTranscriptStep.GENERATE_TRANSCRIPT, _v5.FetchTranscriptStepStatus.START);
              let _v0 = await _v6({
                url: _v12,
                method: "post",
                body: {
                  source_hash: _v0,
                  storyboard_id: _v2,
                  type: _v13
                },
                signal: _v3
              });
              if (_v0.data) {
                let _v0 = _v0.data.transcriptions[0],
                  _v1 = {
                    id: _v0.id,
                    status: _v0.status,
                    words: []
                  };
                if (_v1.status !== _v5.TranscriptStatus.PROCESSING) _v10(_v5.FetchTranscriptStep.GENERATE_TRANSCRIPT, _v1.status), _v0.url && (_v1.words = await (0, _v8.fetchTranscriptWordsUrl)(_v0.url, _v3)), _v8 = _v1;else {
                  let _v0 = _v0.id,
                    _v1 = `users/${_v4.default.teamOwnerId}/transcriptions/${_v0}`;
                  _v10(_v5.FetchTranscriptStep.POLL_TRANSCRIPT, _v5.FetchTranscriptStepStatus.START);
                  let _v2 = await (0, _v7.rtkPoll)({
                    url: _v1,
                    fetchWithBaseQuery: _v0 => _v6({
                      url: _v0,
                      signal: _v3
                    }),
                    shouldKeepPolling: _v0 => !_v3.aborted && _v0.data?.transcriptions[0].status === _v5.TranscriptStatus.PROCESSING
                  });
                  if (_v2.data) {
                    let _v0 = _v2.data.transcriptions[0];
                    _v10(_v5.FetchTranscriptStep.POLL_TRANSCRIPT, _v0.status), _v1.status = _v0.status, _v0.url && (_v1.words = await (0, _v8.fetchTranscriptWordsUrl)(_v0.url, _v3)), _v8 = _v1;
                  } else _v9 = _v5.TranscriptApiQueryError.TRANSCRIPT_POLL;
                }
              } else _v9 = _v5.TranscriptApiQueryError.TRANSCRIPT;
            } else _v9 = _v5.TranscriptApiQueryError.AUDIO;
            return (_v3.aborted && (_v9 = _v3.reason), _v8) ? (_v10(_v5.FetchTranscriptStep.FINISH, _v8.status), _v8.status !== _v5.TranscriptStatus.PROCESSING && (0, _v6.sendTrackTranscriptProcessStep)(_v0, _v5.TranscriptStatusBiMap[_v8.status]), {
              data: _v8
            }) : (_v9 !== _v5.TranscriptApiQueryError.CANCEL && (_v10(_v5.FetchTranscriptStep.FAILED, _v9), (0, _v6.sendTrackTranscriptProcessStep)(_v0, "unable_to_load")), {
              error: {
                status: _v10,
                error: _v9
              }
            });
          }
        })
      })
    }),
    {
      useLazyGetTranscriptForSourceQuery: _v12
    } = _v11;
  _v0.s(["transcriptApi", 0, _v11, "useLazyGetTranscriptForSourceQuery", 0, _v12]);
}