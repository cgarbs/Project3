const { Schema, model } = require('mongoose')

const serverSchema = new Schema({
    title: String,
    users: { type: Schema.Types.ObjectId, ref: 'User' },
    messages: { type: Schema.Types.ObjectId, ref: 'Message' },
})

module.exports = model('Server', serverSchema)