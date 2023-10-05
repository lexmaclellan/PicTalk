const { Schema, Types } = require('mongoose')

const tagSchema = new Schema({
    tagId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    name: {
        type: String,
        required: true,
        maxlength: 75
    }
})

module.exports = tagSchema