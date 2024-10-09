import { Router } from 'express'
import { verfiyJWT } from '../middleware/user.middleware.js'
import {
  getAllPost,
  getPostsByUser,
  getPostsByCategory,
  getTopRatedPosts,
} from '../controllers/post.controller.js'
import { getPostByTag } from '../controllers/tag.controller.js'
const router = new Router()

router.route('/get-all-posts').get(verfiyJWT, getAllPost)
router.route('/user/:username').get(getPostsByUser)
router.route('/category/:categoryName').get(getPostsByCategory)
router.route('/tag/:tagName').get(getPostByTag)
router.route('/getTopRatedPosts').get(verfiyJWT, getTopRatedPosts)

export default router
