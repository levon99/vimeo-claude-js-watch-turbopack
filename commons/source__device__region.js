{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    embed_domains: "source",
    device: "device",
    region: "region",
    streaming_type: "view_type",
    text_language: "subtitles_and_captions_language",
    text_type_and_provenance: "subtitles_and_caption_type",
    audio_language: "audio_track_language",
    audio_type_and_provenance: "audio_track_type"
  };
  _v0.s(["useAnalyticsTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("analytics_page_displayed", {
        referrer_page: function () {
          {
            let _v0 = new URLSearchParams(window.location.search).get("ref");
            if (_v0) return _v0;
          }
          if ("u" < typeof document || !document.referrer) return "direct";
          try {
            let _v0 = new URL(document.referrer).pathname;
            if ("/" === _v0 || "/home" === _v0 || "/home/" === _v0) return "homepage";
            if (_v0.startsWith("/manage/videos/")) return "video_manage";
            if (_v0.startsWith("/analytics")) return "analytics";
            return _v0;
          } catch {
            return "direct";
          }
        }()
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_report_viewed", {
        analytics_report_type: _v0.analyticsReportType
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_date_range_changed", {
        analytics_report_type: _v0.analyticsReportType
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_data_exported", {
        analytics_report_type: _v0.analyticsReportType,
        analytics_data_exported_target: _v0.analyticsDataExportedTarget
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return !1;
        let _v1 = new Set(_v0.activeFilterKeys.map(_v0 => _v3[_v0]).filter(Boolean));
        return _v0.track("analytics_filter_applied", {
          analytics_report_type: _v0.analyticsReportType,
          analytics_filter_category_source: _v1.has("source"),
          analytics_filter_category_device: _v1.has("device"),
          analytics_filter_category_region: _v1.has("region"),
          analytics_filter_category_view_type: _v1.has("view_type"),
          analytics_filter_category_subtitles_and_captions_language: _v1.has("subtitles_and_captions_language"),
          analytics_filter_category_subtitles_and_caption_type: _v1.has("subtitles_and_caption_type"),
          analytics_filter_category_audio_track_language: _v1.has("audio_track_language"),
          analytics_filter_category_audio_track_type: _v1.has("audio_track_type")
        }), !0;
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_export_data_clicked", {
        analytics_report_type: _v0.analyticsReportType
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("analytics_content_filter_changed", {}), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_metric_changed", {
        analytics_report_type: _v0.analyticsReportType,
        analytics_new_metric: _v0.analyticsNewMetric
      }), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_granularity_changed", {
        analytics_report_type: _v0.analyticsReportType,
        analytics_new_granularity: _v0.analyticsNewGranularity
      }), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_breakdown_changed", {
        analytics_report_type: _v0.analyticsReportType,
        analytics_breakdown_value: _v0.analyticsBreakdownValue
      }), !0), [_v0]);
    return {
      trackAnalyticsPageDisplayed: _v1,
      trackAnalyticsReportViewed: _v2,
      trackAnalyticsDateRangeChanged: _v3,
      trackAnalyticsDataExported: _v4,
      trackAnalyticsExportDataClicked: _v6,
      trackAnalyticsFilterApplied: _v5,
      trackAnalyticsContentFilterChanged: _v7,
      trackAnalyticsMetricChanged: _v8,
      trackAnalyticsGranularityChanged: _v9,
      trackAnalyticsBreakdownChanged: _v10,
      trackAnalyticsBandwidthViewChanged: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("analytics_bandwidth_view_changed", {
        analytics_bandwidth_view: _v0.analyticsBandwidthView
      }), !0), [_v0]),
      trackVideoAnalyticsPageDisplayed: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("video_analytics_page_displayed", {
        clip_id: _v0.clipId
      }), !0), [_v0])
    };
  }]);
}