/**
 * Created by lee on 16/7/16.
 */

require.config({
  paths: {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min"
  }
});

require(['./upload', 'jquery'], function(upload, $) {
  $(document).ready(function() {
    upload.upload();
  });
});
