import fs from 'fs'
import appRoot from 'app-root-path'

type LogData = {
  name: string,
  text: string
}

type LogConfig = {
  name: string
  filePath: string
}
type Json = {
  logs: LogConfig[]
}

async function getLogList(): Promise<LogConfig[]> {
  const jsonStr: string = await fs.readFileSync(process.env.LOGS_CAT_CONFIG_PATH ?? `${appRoot}/logs-cat.json`, 'utf-8')
  const json: Json = JSON.parse(jsonStr)
  return json.logs
}

async function getLogData(logFileName: string): Promise<LogData|null> {
  const logConfigs: LogConfig[] = await getLogList()

  const logConfig = logConfigs.find((config: LogConfig) => {
    return config.name === logFileName
  })

  if (!logConfig) {
    return null
  }

  const logStr: string = await fs.readFileSync(logConfig.filePath, 'utf-8')

  return {
    name: logConfig.name,
    text: logStr
  }
}

async function deleteLogData(logFileName: string) {
  const logConfigs: LogConfig[] = await getLogList()

  const logConfig = logConfigs.find((config: LogConfig) => {
    return config.name === logFileName
  })

  if (!logConfig) {
    return false
  }

  try {
    await fs.writeFileSync(logConfig.filePath, "")
    return true
  } catch (e) {
    return false
  }
}

export { getLogList, getLogData, deleteLogData }
export type { LogData }
