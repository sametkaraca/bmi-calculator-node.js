const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const ejs = require('ejs')

let BMIText=''

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('pages/index',{BMIText});
});

app.post('/', (req,res) =>{

    let height = Math.floor(req.body.inputHeight)
    let weight = Math.floor(req.body.inputWeight)
    let bmi = weight/(height/100*height/100)

    if (bmi < 15) {
        BMIText = "Underweight"
    } else if (bmi<18.5) {
        BMIText = "Normal"
    }
    else if (bmi<25) {
        BMIText = "Overweight"
    }
    else if (bmi<30) {
        BMIText = "Obese"
    }
    
    else {
        BMIText = "Extremely Obese"
    }
    res.redirect('/')
})

app.listen(port, console.log("Listening port " + port))