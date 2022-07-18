import express from 'express'
const app = express()
const PORT = 5000
 

app.get('/' , (req, res) =>{ 
    const {first = 0 ,  second = 0, operator = '+'} = req.query 
    let total = 0
    console.log(operator)

    if(operator === '-') {
        total = parseInt(first) - parseInt(second)
    }else if(operator === '*'){
        total = parseInt(first) * parseInt(second)
    }else if(operator === '/'){
        total = parseInt(first) / parseInt(second)
    }else {
        total = parseInt(first) + parseInt(second)
    }
    res.status(200).send({ 
        success : 'true',
        total 
    })
})

app.listen(
    PORT, () => console.log(`Server is rynning on:http://localhost/${PORT}`)
)
