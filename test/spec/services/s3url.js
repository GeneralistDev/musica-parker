'use strict';

describe('Service: s3url', function () {

  // load the service's module
  beforeEach(module('musicaParkerApp'));

  // instantiate service
  var s3url;
  beforeEach(inject(function (_s3url_) {
    s3url = _s3url_;
  }));

  it('should do something', function () {
    expect(!!s3url).toBe(true);
  });

});
