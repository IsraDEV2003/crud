import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import exportCSV from "../utils/export-csv.js"


export const getAllUsers = async (req, res) => {
   try {
      const users = await User.findAll()
      const usersClean = users.map( user => ({
         id: user.id,
         firstName: user.firstName,
         email: user.email,
         age: user.age}))
      console.log(usersClean)
      exportCSV(usersClean)
      res.status(200).json(users)
   } catch (err){
      res.status(500).json( {message: "Error fetching users", error: err.message})
   }
}

export const createUser = async (req, res) => {
   const { firstName, email, age, password } = req.body
   const saltRounds = 10
   const hashedPassword = await bcrypt.hash(password, saltRounds)

   try {
      const newUser = await User.create({ firstName, email, age, password: hashedPassword })
      res.status(201).json(newUser)
   } catch (err) {
      res.status(500).json({ message: "Error creating user", error: err.message })
   }
}

export const updateUser = async (req, res) => {
   const { id } = req.params
   const { firstName, email, age, password } = req.body

   try {
      const user = await User.findByPk(id)
      if (!user) {
         return res.status(404).json({ message: "User not found" })
      }

      if (password) {
         const saltRounds = 10
         user.password = await bcrypt.hash(password, saltRounds)
      }

      user.firstName = firstName || user.firstName
      user.email = email || user.email
      user.age = age || user.age

      await user.save()
      res.status(200).json(user)
   } catch (err) {
      res.status(500).json({ message: "Error updating user", error: err.message })
   }
}

export const deleteUser = async (req, res) => {
   const { id } = req.params

   try {
      const user = await User.findByPk(id)
      if (!user) {
         return res.status(404).json({ message: "User not found" })
      }

      await user.destroy()
      res.status(200).json({ message: "User deleted successfully" })
   } catch (err) {
      res.status(500).json({ message: "Error deleting user", error: err.message })
   }
}

export const getUserById = async (req, res) => {
   const { id } = req.params

   try {
      const user = await User.findByPk(id)
      if (!user) {
         return res.status(404).json({ message: "User not found" })
      }
      res.status(200).json(user)
   } catch (err) {
      res.status(500).json({ message: "Error fetching user", error: err.message })
   }
}

