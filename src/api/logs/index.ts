import express from 'express'
import { getList, deleteLog, getLog } from './routes'

const router = express.Router()

router.get('', getList)
router.get('/:logFileName', getLog)
router.delete('/:logFileName', deleteLog)

export default router