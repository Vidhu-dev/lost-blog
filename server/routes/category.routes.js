import { Router } from 'express'
import {
  createCategories,
  createCategory,
} from '../controllers/category.controllers.js'
import { verfiyJWT } from '../middleware/user.middleware.js'

const router = Router()

router.route('/create-category').post(verfiyJWT, createCategory)
router.route('/create-categories').post(verfiyJWT, createCategories)
export default router
