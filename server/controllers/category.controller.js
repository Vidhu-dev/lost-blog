import { Category } from '../models/category.models.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'

//create category helper function
const categoryHelper = async (categoryName, description) => {
  if (!categoryName || !description) {
    throw new ApiError(400, 'Invalid category name or description')
  }
  try {
    const category = await Category.create({ categoryName, description })
    return category
  } catch (error) {
    throw new ApiError(400, 'Invalid category name or description')
  }
}

const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find({})
    console.log(categories)
    res
      .status(200)
      .json(new ApiResponse(200, categories, 'All categories fetched!'))
  } catch (error) {
    throw new ApiError(404, 'No categories found')
  }
})

//create multiple categories
const createCategories = asyncHandler(async (req, res) => {
  const { categories } = req.body
  if (!Array.isArray(categories)) {
    throw new ApiError(400, 'Invalid input: categories should be an array')
  }
  console.log('Creating categories...')
  const categoryPromises = categories.map(
    async ({ categoryName, description }) => {
      return await categoryHelper(categoryName, description)
    }
  )
  const createdCategories = await Promise.all(categoryPromises)
  res
    .status(200)
    .json(new ApiResponse(201, { createdCategories }, 'Categories created'))
})

//create one category
const createCategory = asyncHandler(async (req, res) => {
  const { categoryName, description } = req.body
  console.log('Creating category...')
  const category = await categoryHelper(categoryName, description)
  res.status(200).json(new ApiResponse(201, category, 'Category created!'))
})

export { createCategories, createCategory, getCategories }
