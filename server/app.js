import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)

app.use(express.json({ limit: '18kb' }))
app.use(express.urlencoded({ extended: true, limit: '18kb' }))
app.use(cookieParser())
app.use(express.static('public'))

//routes
import userRouter from './routes/user.routes.js'
import postRouter from './routes/post.routes.js'
import postsRouter from './routes/posts.routes.js'
import tagRouter from './routes/tag.routes.js'
import categoryRouter from './routes/category.routes.js'

//routes declration
app.use('/api/v1/users', userRouter)
app.use('/api/v1/post', postRouter)
app.use('/api/v1/posts', postsRouter)
app.use('/api/v1/tags', tagRouter)
app.use('/api/v1/category', categoryRouter)
export { app }
