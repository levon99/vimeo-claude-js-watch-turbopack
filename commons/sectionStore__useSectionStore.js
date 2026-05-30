{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v1.createImmerStore)(_v0 => ({
    selectedSection: _v2.SECTION_TYPES.FORM,
    setSelectedSection: _v0 => _v0({
      selectedSection: _v0
    })
  }), "sectionStore");
  _v0.s(["useSectionStore", 0, _v3]);
}