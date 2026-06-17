{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.buildStorageKeySuffix = _v2.decodePrecomputedFlag = _v2.ConfigurationWireHelper = _v2.DefaultEventDispatcher = _v2.BatchEventProcessor = _v2.newDefaultEventDispatcher = _v2.DEFAULT_EVENT_DISPATCHER_BATCH_SIZE = _v2.DEFAULT_EVENT_DISPATCHER_CONFIG = _v2.BoundedEventQueue = _v2.FormatEnum = _v2.VariationType = _v2.assignmentCacheValueToString = _v2.assignmentCacheKeyToString = _v2.LRUInMemoryAssignmentCache = _v2.NonExpiringInMemoryAssignmentCache = _v2.MemoryOnlyConfigurationStore = _v2.HybridConfigurationStore = _v2.MemoryStore = _v2.EppoPrecomputedClient = _v2.validation = _v2.HttpClient = _v2.FlagConfigRequestor = _v2.ApiEndpoints = _v2.constants = _v2.EppoClient = _v2.EppoAssignmentLogger = _v2.AbstractAssignmentCache = _v2.applicationLogger = _v2.loggerPrefix = void 0, _v2.ApiEndpoints = _v0.r(0).default;
  let _v3 = _v0.r(0);
  Object.defineProperty(_v2, "applicationLogger", {
    enumerable: !0,
    get: function () {
      return _v3.logger;
    }
  }), Object.defineProperty(_v2, "loggerPrefix", {
    enumerable: !0,
    get: function () {
      return _v3.loggerPrefix;
    }
  });
  let _v4 = _v0.r(0);
  Object.defineProperty(_v2, "AbstractAssignmentCache", {
    enumerable: !0,
    get: function () {
      return _v4.AbstractAssignmentCache;
    }
  }), Object.defineProperty(_v2, "assignmentCacheKeyToString", {
    enumerable: !0,
    get: function () {
      return _v4.assignmentCacheKeyToString;
    }
  }), Object.defineProperty(_v2, "assignmentCacheValueToString", {
    enumerable: !0,
    get: function () {
      return _v4.assignmentCacheValueToString;
    }
  });
  let _v5 = _v0.r(0);
  Object.defineProperty(_v2, "LRUInMemoryAssignmentCache", {
    enumerable: !0,
    get: function () {
      return _v5.LRUInMemoryAssignmentCache;
    }
  });
  let _v6 = _v0.r(0);
  Object.defineProperty(_v2, "NonExpiringInMemoryAssignmentCache", {
    enumerable: !0,
    get: function () {
      return _v6.NonExpiringInMemoryAssignmentCache;
    }
  }), _v2.EppoClient = _v0.r(0).default, _v2.EppoPrecomputedClient = _v0.r(0).default, _v2.FlagConfigRequestor = _v0.r(0).default;
  let _v7 = _v0.r(0);
  Object.defineProperty(_v2, "HybridConfigurationStore", {
    enumerable: !0,
    get: function () {
      return _v7.HybridConfigurationStore;
    }
  });
  let _v8 = _v0.r(0);
  Object.defineProperty(_v2, "MemoryStore", {
    enumerable: !0,
    get: function () {
      return _v8.MemoryStore;
    }
  }), Object.defineProperty(_v2, "MemoryOnlyConfigurationStore", {
    enumerable: !0,
    get: function () {
      return _v8.MemoryOnlyConfigurationStore;
    }
  });
  let _v9 = _v0.r(0);
  Object.defineProperty(_v2, "ConfigurationWireHelper", {
    enumerable: !0,
    get: function () {
      return _v9.ConfigurationWireHelper;
    }
  }), _v2.constants = _v0.r(0);
  let _v10 = _v0.r(0);
  Object.defineProperty(_v2, "decodePrecomputedFlag", {
    enumerable: !0,
    get: function () {
      return _v10.decodePrecomputedFlag;
    }
  });
  let _v11 = _v0.r(0);
  Object.defineProperty(_v2, "EppoAssignmentLogger", {
    enumerable: !0,
    get: function () {
      return _v11.EppoAssignmentLogger;
    }
  }), _v2.BatchEventProcessor = _v0.r(0).default;
  let _v12 = _v0.r(0);
  Object.defineProperty(_v2, "BoundedEventQueue", {
    enumerable: !0,
    get: function () {
      return _v12.BoundedEventQueue;
    }
  });
  let _v13 = _v0.r(0);
  _v2.DefaultEventDispatcher = _v13.default, Object.defineProperty(_v2, "DEFAULT_EVENT_DISPATCHER_CONFIG", {
    enumerable: !0,
    get: function () {
      return _v13.DEFAULT_EVENT_DISPATCHER_CONFIG;
    }
  }), Object.defineProperty(_v2, "DEFAULT_EVENT_DISPATCHER_BATCH_SIZE", {
    enumerable: !0,
    get: function () {
      return _v13.DEFAULT_EVENT_DISPATCHER_BATCH_SIZE;
    }
  }), Object.defineProperty(_v2, "newDefaultEventDispatcher", {
    enumerable: !0,
    get: function () {
      return _v13.newDefaultEventDispatcher;
    }
  }), _v2.HttpClient = _v0.r(0).default;
  let _v14 = _v0.r(0);
  Object.defineProperty(_v2, "VariationType", {
    enumerable: !0,
    get: function () {
      return _v14.VariationType;
    }
  }), Object.defineProperty(_v2, "FormatEnum", {
    enumerable: !0,
    get: function () {
      return _v14.FormatEnum;
    }
  });
  let _v15 = _v0.r(0);
  Object.defineProperty(_v2, "buildStorageKeySuffix", {
    enumerable: !0,
    get: function () {
      return _v15.buildStorageKeySuffix;
    }
  }), _v2.validation = _v0.r(0);
}