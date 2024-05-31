import { Router } from 'express'
import { createTag, getTags, getPostByTag  } from '../controllers/tag.controllers.js'
import { verfiyJWT } from '../middleware/user.middleware.js'

const router = Router()

router.route('/create-tag').post(verfiyJWT, createTag)
router.route('/get-tags').get(verfiyJWT, getTags)
export default router