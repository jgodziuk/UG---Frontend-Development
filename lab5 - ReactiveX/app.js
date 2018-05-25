var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function(x){
        return q.val();
    })
    .switchMap(function(x){
        return searchWikipedia(x);
    })
    .do(function(x){
        //console.log(x);
    })
    .subscribe(function(x){
        console.log(x);
        $('#results').empty();
        x[1].forEach(function(value, index) { 
            $('#results').append('<a href="'+x[3][index]+'"><div class="singleResult">'+value+'<br/><p>'+x[2][index]+'</p></div></a>');
        });
        
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}