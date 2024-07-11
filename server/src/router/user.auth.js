import express from 'express'
import { Router } from 'express'
import { hello, login, signin,all  } from '../controllers/auth.controllers.js';

const router = Router()

router.get("/hello", hello);
  
  
router.post("/login", login)


router.post("/signin", signin);

router.get("/all", all);
  

export default router