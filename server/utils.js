
var moment = require('moment');

var Image = require('./models/image');

// increment num of embeded views of native/embeded image, given the id
module.exports.incrementEmbededViews = function(id){

    Image.findOne({id: id}, function(error, image){

        if (error) {
            console.log("Error on finding image " + error);
            return;
        } else if (!image) {
            console.log("No image found");
            return;
        }

        image.viewsEmbeded = image.viewsEmbeded + 1;
        image.save();
    });
};

// increment num of embeded views of website page, given the id
module.exports.incrementWebsiteViews = function(id){

    Image.findOne({id: id}, function(error, image){

        if (error) {
            console.log("Error on finding image " + error);
            return;
        } else if (!image) {
            console.log("No image found");
            return;
        }

        image.viewsWebsite = image.viewsWebsite + 1;
        image.save();
    });
};
