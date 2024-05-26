import mongoose from 'mongoose'

const subscriptionSchema = mongoose.Schema({
  subscriberID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subscribedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export const Subscription = mongoose.model('Subscription', subscriptionSchema)
