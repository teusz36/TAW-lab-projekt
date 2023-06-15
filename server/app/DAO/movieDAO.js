import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const movieSchema = new mongoose.Schema({
    title: {type: String},
    year: {type: Number},
    image: {type: String},
    description: {type: String},
}, {
    collection: 'movies'
});
movieSchema.plugin(uniqueValidator);

const MovieModel = mongoose.model('movies', movieSchema);

async function query() {
    const result = await MovieModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return MovieModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new MovieModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return MovieModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}

async function deleteMovieById(id) {
    return await MovieModel.deleteOne({_id: id})
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    deleteMovieById: deleteMovieById,

    model: MovieModel
};
