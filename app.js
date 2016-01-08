require(['jquery', 'app/envRenderer'], function($, envRenderer) {


  $.getJSON('data.json', function(data) {
    envRenderer(data)
  })
});