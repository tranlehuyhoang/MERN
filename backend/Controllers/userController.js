import asyncHandler from 'express-async-handler';

const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth user' })
    // throw new Error('Invalid email or password');
})
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'register user' })
})
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'logout user' })
})
const getProfileUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'getProfileUser user' })
})
const updateProfileUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'updateProfileUser user' })
})

export {
    authUser, registerUser, logoutUser, getProfileUser, updateProfileUser
}