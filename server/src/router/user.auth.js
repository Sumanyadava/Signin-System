import express from 'express'
import { Router } from 'express'
import { hello, login, signin,all,updateUser  } from '../controllers/auth.controllers.js';

const router = Router()

router.get("/hello", hello);
router.get("/all", all);
  
  

router.post("/login", login) 
router.post("/signin", signin);
router.put("/update",updateUser)
  

export default router