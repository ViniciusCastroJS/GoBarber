import express from 'express'

const app = express();
app.use(express.json())

app.get('/',
  (request, response) => { response.json({message: 'hello'})}
)

app.listen(3333, 
    () => console.log('Servidor Rodando!')
  )