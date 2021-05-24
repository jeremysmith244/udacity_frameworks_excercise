var EventTracker = function(name) {

    this.name = name;
    this.events = [];
    this.callbacks = {};
    this.notifies = {};

    this.on = function(event, callback) {
        if (!this.events.includes(event)){
            this.events.push(event);
        }
        this.callbacks[event] = callback;
    }
    this.notify = function(object, event) {
        if (!this.events.includes(event)){
            this.events.push(event);
        }
        this.notifies[event] = object;
    }
    this.trigger = function(event, data) {
        if (!this.events.includes(event)){
            console.log('Event ' + event + ' not a callback or notify of object!');
            return 0;
        }
        if (event in this.callbacks) {
            this.callbacks[event](data);
        } 
        if (event in this.notifies) {
            this.notifies[event].trigger(event, data);
        }
        return 1;
    }
}

et = new EventTracker('onTrack');
et2 = new EventTracker('offTrack');

var what_to_do = function(data) {
    console.log('You should do ' + data);
}
var what_not_to_do = function(data) {
    console.log('Whatever you do, dont ' + data);
}

et.on('punch', what_to_do);
et2.on('punch', what_not_to_do);

et.notify(et2, 'punch');

et.trigger('punch', 'run like hell!');