function purchase(present) {
    console.log('Buying ' + present);
}
function build(gift) {
    console.log('Building ' + gift);
}

var jack = {};
_.extend(jack, Backbone.Events);

jack.on('birthday party presents', purchase);
jack.on('presents', build);