define(['jquery', 'app/itemRenderer'], function($, itemFactory) {
  return function(data) {

    data.each(function(d) {
      d3.select(this).append('h4').text('Select All')
      d3.select(this).append('ul')
        .call(function(d) {
          itemFactory(d)
        })

    })
  }
})