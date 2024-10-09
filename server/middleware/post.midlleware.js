import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { GoogleGenerativeAI } from '@google/generative-ai'

export const createPostSummary = asyncHandler(async (req, res, next) => {
  try {
    const { content } = JSON.parse(req.body.post)

    if (!content) {
      throw new ApiError(400, 'Content is required for generating summary')
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const prompt = `Write a 50 words summary about this blog post which will serve as the introduction of the blog, it should be strictly wiithin the word given word limit, post -
    > ${content}`

    const summary = await model.generateContent(prompt)
    if (!summary) {
      throw new ApiError(500, 'Failed to generate summary')
    }
    console.log(summary)
    console.log(summary.response.text())

    req.body.postSummary = summary.response.text()

    next()
  } catch (error) {
    console.error('Error generating summary:', error)
    throw new ApiError(500, 'Error occurred during summary creation')
  }
})
