const router = require("express").Router();
const auth=require("../middleware/auth")



router.get("/details", auth, (req, res) => {
	res.status(200).json({ message: "user authenticated.",
	
 });
});

module.exports=router;



