const {Router} = require("express")
const {registerUser, getUsers, loginUser} = require("../controller/user_controller")

const router = Router()

router.post("/register", registerUser)
router.get("/register", getUsers)
router.post("/login", loginUser)

module.exports = router