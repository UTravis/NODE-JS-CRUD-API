import mongoose from "mongoose";

const schema = mongoose.Schema;

const musicLogSchema = new schema({
    song : {
        type : String,
        required : true
    },
    album : {
        type : String,
        required : true
    },
    artist : {
        type: String,
        required : true
    }
}, {timestamps : true})

const musicLogModel = mongoose.model('Log', musicLogSchema);

export default musicLogModel;