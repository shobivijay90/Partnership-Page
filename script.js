$(document).ready(function () {
  let btnMouseOver = {
    backgroundColor: 'orange',
    boxShadow: '5px 5px 10px gray'
  }

  let btnMouseOut = {
    backgroundColor: '',
    boxShadow: ''
  }

  $('.explore').mouseover(function () {
    $(this).css(btnMouseOver)
  })

  $('.explore').mouseout(function () {
    $(this).css(btnMouseOut)
  })
})
