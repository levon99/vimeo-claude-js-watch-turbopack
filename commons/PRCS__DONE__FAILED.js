{
  "use strict";

  let _v1 = {
      PROCESSING: "PRCS",
      DONE: "DONE",
      FAILED: "FAILED",
      LANG_NOT_SUPPORTED: "LANG_NOT_SUPPORTED",
      NO_SPEECH: "NO_SPEECH"
    },
    _v2 = {
      REQUESTED: "requested",
      [_v1.FAILED]: "unable_to_load",
      [_v1.DONE]: "presented",
      [_v1.LANG_NOT_SUPPORTED]: "unsupported_language",
      [_v1.NO_SPEECH]: "no_speech_detected"
    };
  _v0.s(["BrowserNativeTextSelectionType", 0, {
    RANGE: "Range",
    CARET: "Caret",
    NONE: "None"
  }, "FetchTranscriptStep", 0, {
    START: "start",
    ABORT: "aborted",
    EXTRACT_AUDIO: "extract_audio",
    GENERATE_TRANSCRIPT: "generate_transcript",
    POLL_TRANSCRIPT: "poll_transcript",
    FETCH_WORDS: "fetch_words",
    FAILED: "failed",
    FINISH: "finish"
  }, "FetchTranscriptStepStatus", 0, {
    START: "start",
    DONE: "done"
  }, "TextSelectionDirection", 0, {
    FORWARD: "forward",
    BACKWARD: "backward",
    NONE: "none"
  }, "TranscriptApiQueryError", 0, {
    CANCEL: "CANCEL",
    AUDIO: "AUDIO",
    TRANSCRIPT: "TRANSCRIPT",
    TRANSCRIPT_POLL: "TRANSCRIPT_POLL"
  }, "TranscriptItemFocusType", 0, {
    SOFT: "soft",
    FULL: "full",
    NONE: "none"
  }, "TranscriptSelectionType", 0, {
    DELETED: "deleted",
    EXISTING: "existing",
    COMBINED: "combined",
    NONE: "none"
  }, "TranscriptServiceType", 0, {
    LIBRARY: "source_transcript",
    UPLOADS: "audio_transcript_backend_upload"
  }, "TranscriptStatus", 0, _v1, "TranscriptStatusBiMap", 0, _v2]);
}