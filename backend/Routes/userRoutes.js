import  express, { Router }  from "express";
import { Delete_Profile, LoginController, Profile_Update_Controller, RegisterController, UserdasboardController } from "../Controllers/UserController.js";
import { Requireverifuser } from "../Middlewares/authMiddleware.js";

const app=express();

const router=Router();

router.post('/register',RegisterController);
router.post('/login',LoginController);

//user dashboard
router.get('/user-dashboard',Requireverifuser,UserdasboardController);
router.put('/user-profile-update/:id',Requireverifuser,Profile_Update_Controller)
router.delete('/user-profile-delete/:id',Requireverifuser,Delete_Profile)

//Admin dashboard




export default router;