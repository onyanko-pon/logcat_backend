import express from 'express'
import morgan from 'morgan'
import logs from './api/logs'

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === "development") {
  console.log("start access logging")
  app.use(morgan('combined'))
}

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*");
  next();
})

app.use('/api/logs', logs);

app.listen(3000, () => {
  console.log("Start on port 3000.")
})