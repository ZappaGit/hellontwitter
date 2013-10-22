/**
 * Module dependencies.
 */

var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'cxkD270VZASAMwP5ISJVuw',
  consumer_secret:'jWOvyIiy4p1MdiPlwlRUBFZU0wwHTpMXmgtldxxIzQ',
  access_token_key: '251729133-12IhiAmDW9Fe2VO00uLZEuwcHMlu5vw1wd9pH8qg',
  access_token_secret: 'WG2ahSAVAhgUt3louWYj2RpqfkR449igZVepMHkdECM'
});


//twit.verifyCredentials( function(err,data) {
//    console.log(data);
//  });
twit.updateStatus('Test tweet from ntwitter/' + twitter.version,
    function ( err, data) {
      console.log(data);
  });

twit.search('nodejs OR #node', {}, function(err, data) {
  console.log(data);
});

twit.stream('statuses/sample', function(stream) {
  stream.on('data', function(data){
    console.log(data);
  })
});
