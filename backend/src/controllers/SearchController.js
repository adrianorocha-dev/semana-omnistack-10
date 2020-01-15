const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        // Search for all devs in a 10km radius
        // Filter by techs

        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray, // MongoDB query operator
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ longitude, latitude ],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return res.json({ devs });
    }
}