import {
  subscribe,
  unsubscribe,
  getAllSubscribers,
  getAllSubscriptions,
  getSubscriberCount,
} from '../controllers/subscription.controller.js'
import { Router } from 'express'
import { verfiyJWT } from '../middleware/user.middleware.js'
const router = new Router()

router.route('/subscribe').post(verfiyJWT, subscribe)
router.route('/unsubscribe').post(verfiyJWT, unsubscribe)
router.route('/get-all-subscribers').post(verfiyJWT, getAllSubscribers)
router.route('/get-all-subscriptions').post(verfiyJWT, getAllSubscriptions)
router.route('/get-subscriber-count').post(verfiyJWT, getSubscriberCount)
export default router
