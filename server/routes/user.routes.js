import { Router } from 'express'
import { upload } from '../middleware/multer.middleware.js'
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from '../controllers/user.controller.js'
import { verfiyJWT } from '../middleware/user.middleware.js'
const router = Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

// Protected routes
router.route('/logout').post(verfiyJWT, logoutUser)
router.route('/refresh-token').post(refreshAccessToken)

export default router
