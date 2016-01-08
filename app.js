require(['jquery', 'app/envRenderer'], function($, envRenderer) {


  $.getJSON('data.json', function(data) {
    envRenderer(data)
  })

  var selected = []

  $('body').on('click', '.row',  function(event) {
    var elId = $(this).attr('data-id')
      if(event.ctrlKey) {
        if($.inArray(elId, selected)) {
          selected.splice(selected.indexOf(elId), 1)
          $(this).removeClass('selected')
        } else {
          $(this).addClass('selected')
          selected.push(elId)
        }
      } else {
        $(this).toggleClass('selected')
        $('.row').not($(this)).removeClass('selected')
        selected = [elId]
      }

      console.log(selected)
  })

  $('body').on('click', 'h4',  function(event) {
    var ids = []
    var els = $(this).siblings('ul').find('li')
    $('.row').not(els).removeClass('selected')
    els.addClass('selected')

    els.each(function(i, item) {
      ids.push($(item).attr('data-id'))
      selected = ids
    })

    console.log(selected)
  })

});