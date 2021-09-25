const express = require('express')
const app = express()
const path = require('path')

const ProductsRoutes = require('./routes/productos.routes')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded());

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/api/productos', ProductsRoutes)
app.use((req, res, next) => {
    res.status(404).json({msg: 'Pagina No Encontrada'})
})

app.listen(3001, () => {
    console.log('Escuchando Puerto: ', 3001)
})
