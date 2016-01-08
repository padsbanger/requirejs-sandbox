define(['jquery'], function($) {
  return function(data) {

    data.each(function(d) {
      var data = d.artifacts
      , self = this

      $.each(data, function(i, item) {
        $(self).append('<li class="row" data-id='+item.id+'>'+item.name+'</li>')
      })

    })

  }
})
