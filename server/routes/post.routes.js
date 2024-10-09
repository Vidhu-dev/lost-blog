import { Router } from 'express'
import { verfiyJWT } from '../middleware/user.middleware.js'
import { upload } from '../middleware/multer.middleware.js'
import { unlikePost } from '../controllers/like.controller.js'
import {
  createPost,
  changePostCoverImage,
  updatePostField,
  deletePost,
  getAllPost,
  getPostsByUser,
  getPostsByCategory,
  getPost,
} from '../controllers/post.controller.js'
import { getPostByTag } from '../controllers/tag.controller.js'
import { createPostSummary } from '../middleware/post.midlleware.js'
// import {
//   comment,
//   deleteComment,
//   getAllPostComments,
// } from '../models/comment.models.js'
const router = new Router()

router.route('/create-post').post(
  upload.fields([
    {
      name: 'coverImage',
      maxCount: 1,
    },
  ]),
  verfiyJWT,
  createPostSummary,
  createPost
)

// router.route('/:postId/cover-image').post(changePostCoverImage)
// router.route('/update-post').patch(updatePostField)
// router.route('/delete-post').delete(deletePost)
router.route('/get-post/:id').get(verfiyJWT, getPost);

//like and unlike
// router.route('/like-post').post(verfiyJWT, likePost)
// router.route('/unlike-post').delete(verfiyJWT, unlikePost)

// //comment

// router.route('/comment').post(verfiyJWT, comment)
// router.route('delete-comment').delete(verfiyJWT, deleteComment)
// router.route('get-coomments').get(getAllPostComments)
export default router
