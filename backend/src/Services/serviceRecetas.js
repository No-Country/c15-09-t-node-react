const { Recetas } = require('../db')
const { Op } = require('sequelize')
const cloudinary = require('cloudinary').v2
const multer = require('multer')
const upload = multer({ dest: 'uploads' })

const RectasServices = {

  getAllRecetas: async () => {
    try {
      const recetas = await Recetas.findAll()

      if (recetas.length === 0) {
        return 'There are not recipes in the Data Base'
      }
      return recetas
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recipes')
    }
  },
  getRecetaById: async (id) => {
    try {
      const response = await Recetas.findByPk(id, { include: { all: true, nested: true } })

      if (!response) {
        return 'Cannot find the Recipe ID'
      }
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recipes')
    }
  },
  updateReceta: async (id, updateData) => {
    try {
      const receta = await Recetas.findByPk(id)

      if (!receta) {
        throw new Error(`Cannot update recipe with id: ${id} `)
      }

      const updatedRecipe = await Recetas.update(updateData)

      return updatedRecipe
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recipe')
    }
  },
  deleteReceta: async (id) => {
    try {
      const response = await Recetas.findByPk(id)
      if (!response) {
        throw new Error('Recipe not found')
      }
      await response.update({ isActive: false })

      return 'User offline mode'
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching recepie')
    }
  },
  createImg: async (req, res) => {
    return new Promise((resolve, reject) => {
      upload.single('image')(req, res, async function (err) {
        if (err) {
          console.log(err)
        } else {
          try {
            const result = await cloudinary.uploader.upload(req.file.path)
            resolve(result)
          } catch (error) {
            reject(error.message)
          }
        }
      })
    })
  },
  createNewReceta: async (recipeData, img) => {
    try {
      if (!recipeData || !img) {
        return 'Recipe information invalid'
      }
      const {
        name,
        author,
        type,
        alcoholByVolume,
        originalGravity,
        finalGravity,
        ibu,
        colorSRM,
        batchSize,
        mashWaterAmount,
        spargeWaterAmount,
        boilSize,
        boilTime,
        mashTemperature,
        mashTime,
        mashOutTemperature,
        mashOutTime,
        primaryFermentationTemperature,
        primaryFermentationTime,
        seccondaryFermentationTemperature,
        seccondaryFermentationTime,
        notes,
        EstiloId,
        UserId
      } = recipeData

      const newRecipe = await Recetas.create({
        name,
        author,
        image: img,
        type,
        alcoholByVolume,
        originalGravity,
        finalGravity,
        ibu,
        colorSRM,
        batchSize,
        mashWaterAmount,
        spargeWaterAmount,
        boilSize,
        boilTime,
        mashTemperature,
        mashTime,
        mashOutTemperature,
        mashOutTime,
        primaryFermentationTemperature,
        primaryFermentationTime,
        seccondaryFermentationTemperature,
        seccondaryFermentationTime,
        notes,
        EstiloId,
        UserId
      })
      if (newRecipe) {
        return 'Recipe Created Successfully'
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching Recipe')
    }
  }
}

module.exports = RectasServices
