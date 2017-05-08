$( document ).ready(function() {



});


function padTokens(s, n) {
  var o = s.toPrecision(n);
  while (o.length < n) {
    o = " " + o;
  }
  return o;
}
