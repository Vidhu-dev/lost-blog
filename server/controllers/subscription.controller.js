import { Subscription } from '../models/subscription.models.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'

// subscribe a user
const subscribe = asyncHandler(async (req, res) => {
  const { userId, subscriberId } = req.body

  try {
    const subscription = await Subscription.create({ userId, subscriberId })

    res
      .status(201)
      .json(new ApiResponse(201, subscription, 'Subscribed successfully!'))
  } catch (error) {
    throw new ApiError(400, `Error while subscribing: ${error.message}`)
  }
})

//unsubscribe a user

const unsubscribe = asyncHandler(async (req, res) => {
  const { userId, subscriberId } = req.body
  try {
    const subscription = await Subscription.findOneAndDelete({
      userId,
      subscriberId,
    })

    if (!subscription) {
      throw new ApiError(404, 'Subscription not found')
    }

    res
      .status(200)
      .json(new ApiResponse(200, subscription, 'Unsubscribed successfully!'))
  } catch (error) {
    throw new ApiError(400, `Error while unsubscribing: ${error.message}`)
  }
})

//get all subscription information
const getAllSubscriptions = asyncHandler(async (req, res) => {
  const subscriberID = req.body.user._id
  try {
    const subscriptions = await Subscription.find({ subscriberID })
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          subscriptions,
          'Fetched all subscriptions successfully!'
        )
      )
  } catch (error) {
    throw new ApiError(500, `Error fetching subscriptions: ${error.message}`)
  }
})

//get subscriber count for a user
const getSubscriberCount = asyncHandler(async (req, res) => {
  const subscribedTo = req.user._id
  try {
    const count = await Subscription.countDocuments({ subscribedTo })
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { count },
          'Subscriber count fetched successfully!'
        )
      )
  } catch (error) {
    throw new ApiError(500, `Error fetching subscriber count: ${error.message}`)
  }
})

//get all subscriber name for a user
const getAllSubscribers = asyncHandler(async (req, res) => {
  const subscribedTo = req.body.user._id
  try {
    const subscribers = await Subscription.find({ subscribedTo })
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          subscribers,
          'Fetched all subscribers successfully!'
        )
      )
  } catch (error) {
    throw new ApiError(500, `Error fetching subscribers: ${error.message}`)
  }
})

export {
  subscribe,
  unsubscribe,
  getAllSubscribers,
  getAllSubscriptions,
  getSubscriberCount,
}
