const { Schema, model, ObjectId } = require('mongoose')

const messageSchema = new Schema({
    input: String,
    from: { type: Schema.Types.ObjectId, ref: 'User' },
    date: {
        type: String,
        default: Date.now,
    },
})

module.exports = model('Message', messageSchema)