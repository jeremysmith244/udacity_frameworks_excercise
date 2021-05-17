var default_options = {
    open: "*(",
    close: ")*",
};

var template = function(str, options = default_options) {

    var template_str = "return ";
    var inputs = [];

    left = str.split(options.open);
    left.forEach(left_el => {
        right = left_el.split(options.close); 
        if (right.length == 1) { 
            template_str += "'" + right + "'";
        } else {
            inputs.push(right[0]);
            template_str += "+ data." + right[0] + "+";
            template_str += "'" + right[1] + "'";
        };
    });

    return new Function("data", template_str);
};

var temp = "My face is *(adjective)* and *(smell)*!";
var data = {adjective:"cool", smell: "fresh"};
var replace = template(temp);
console.log(replace(data));

var temp = "My cat is a <=color=>, <=breed=>...";
var data = {color:"black", breed: "tabby"};
options = {open:"<=",close:"=>"};
var replace = template(temp, options);
console.log(replace(data));