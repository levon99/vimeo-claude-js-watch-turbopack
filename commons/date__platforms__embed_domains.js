{
  "use strict";

  let _v1 = {
      DATE: "date",
      PLATFORM: "platforms",
      SOURCE_URL: "embed_domains",
      DEVICE: "device",
      REGION: "region",
      STREAMING_TYPE: "streaming_type",
      CONTENT: "content",
      MEMBER: "member",
      AUDIO_LANGUAGE: "audio_language",
      AUDIO_TYPE_AND_PROVENANCE: "audio_type_and_provenance",
      TEXT_LANGUAGE: "text_language",
      TEXT_TYPE_AND_PROVENANCE: "text_type_and_provenance",
      WORKSPACES: "workspaces"
    },
    _v2 = {
      [_v1.PLATFORM]: "platforms",
      [_v1.SOURCE_URL]: "embed_domains",
      [_v1.DEVICE]: "device_types",
      [_v1.REGION]: "countries",
      [_v1.STREAMING_TYPE]: "streaming_types",
      [_v1.CONTENT]: "content",
      [_v1.TEXT_LANGUAGE]: "text_track_languages",
      [_v1.TEXT_TYPE_AND_PROVENANCE]: "text_track_types_and_provenances",
      [_v1.AUDIO_LANGUAGE]: "audio_track_languages",
      [_v1.AUDIO_TYPE_AND_PROVENANCE]: "audio_track_types_and_provenances",
      [_v1.WORKSPACES]: "workspaces"
    };
  _v0.s(["AggregateInterval", 0, {
    NONE: "none",
    DAY: "day",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year"
  }, "FILTER_LIST_STRING_MAP", 0, _v2, "Filters", 0, _v1]);
}