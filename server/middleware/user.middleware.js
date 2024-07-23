import { User } from '../models/user.models.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/ApiError.js'
export const verfiyJWT = asyncHandler(async (req, res, next) => {
  try {
    // const token = req.cookies?.accessToken
    const token = req.body.accessToken
    if (!token) {
      throw new ApiError(401, 'Unauthorized request')
    }

    const decodedTokenInInfo = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    )

    const user = User.findById(decodedTokenInInfo._id)
    if (!user) {
      throw new ApiError(401, 'Invalid access token')
    }
    req.user = user
    next()
  } catch (error) {
    throw new ApiError(400, error.message || 'Inavlid access token')
  }
})
