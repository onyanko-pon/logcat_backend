import express from 'express'
import { getLogList, getLogData, deleteLogData } from '../../libs/Log'
import type  { LogData } from '../../libs/Log'

type Log = {
  name: string,
  text: string
}

type Data = {
  log: Log
} | {
  message: string
}

type LogConfig = {
  name: string
}

type ResLogList = {
  logs: LogConfig[]
}

async function getList(
  req: express.Request,
  res: express.Response<ResLogList>
) {

  const logConfigs = await getLogList()
  const logs: LogConfig[] = logConfigs.map((config: any) => {
    return {
      name: config.name
    }
  })
  res.status(200).json({ logs })
}

const getLogFileName = (req: express.Request) : string | null => {
  const data = req.params.logFileName
  if (typeof data === "string") {
    return data
  }
  return null
}

async function getLog(
  req: express.Request,
  res: express.Response<Data>
) {

  const logFileName: string | null = getLogFileName(req)

  if (!logFileName) {
    return res.status(400).json({message: "logfilename is not setted."})
  }

  const logData: LogData | null = await getLogData(logFileName)
  if (!logData) {
    return res.status(404).json({ message: "logfile is not found." })
  }

  return res.status(200).json({ log: { name: logFileName, text: logData.text } })

}

async function deleteLog(
  req: express.Request,
  res: express.Response<Data>
) {
  const logFileName: string | null = getLogFileName(req)

  if (!logFileName) {
    return res.status(400).json({ message: "logfilename is not setted." })
  }
  const result: boolean = await deleteLogData(logFileName)
  if (!result) {
    return res.status(404).json({ message: "logfile is not found." })
  }

  return res.status(200).json({ log: { name: logFileName, text: "" } })
}

export { getList, deleteLog, getLog }
