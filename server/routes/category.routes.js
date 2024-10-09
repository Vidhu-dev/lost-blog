import { Router } from 'express'
import {
  createCategories,
  createCategory,
  getCategories
} from '../controllers/category.controller.js'
import { verfiyJWT } from '../middleware/user.middleware.js'

const router = Router()

router.route('/create-category').post(verfiyJWT, createCategory)
router.route('/create-categories').post(verfiyJWT, createCategories)
router.route('/get-categories').get(verfiyJWT, getCategories)
export default router
