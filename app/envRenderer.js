define(['jquery', 'libs/d3', 'app/listRenderer'], function($, d3, listFactory) {
  return function(data) {
    var env = data.environments

    function renderEnv() {
      d3.select('body').selectAll('.enviroments')
        .data(env)
        .enter()
        .append('div')
        .classed('enviroment', true)
        .call(function(d) {
          d.append('h2').text(function(d) {
            return d.name
          })

          listFactory(d)
        })
    }

    renderEnv()

  }
})