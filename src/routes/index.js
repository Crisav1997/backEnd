import { Router } from "express";
import api_router from './api/'


const index_router = Router()

index_router.use('/api',api_router)
index_router.use('/',views_router)

export default router