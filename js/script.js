const firstPage= document.querySelector('.firstPage')
const male= document.querySelector('.male')
const female= document.querySelector('.female')

// =============btn========
const maleHomeBtn= document.querySelector('.male-home-btn')
const femaleHomeBtn= document.querySelector('.female-home-btn')
const maleBtn= document.querySelector('.maleBtn')
const femaleBtn= document.querySelector('.femaleBtn')
const maleCalculateBtn= document.querySelector('.male-calculate-btn')
const femaleCalculateBtn= document.querySelector('.female-calculate-btn')


const femaleHeight= document.getElementById('femaleHeight')
const femaleWeight= document.getElementById('femaleWeight')
const maleHeight= document.getElementById('maleHeight')
const maleWeight= document.getElementById('maleWeight')
const heightError= document.querySelector('.heightError')
const weightError= document.querySelector('.weightError')
const result= document.querySelector('.result')

const fheightError= document.querySelector('.fh-error')
const fweightError= document.querySelector('.fw-error')
const fresult= document.querySelector('.female-result')


maleBtn.addEventListener('click', function(){
    firstPage.style.display='none'
    male.style.display='block' 
})

femaleBtn.addEventListener('click', function(){
    firstPage.style.display='none'
    female.style.display='block' 
})

maleCalculateBtn.addEventListener('click', function(){
    if(maleHeight.value===''){
        maleHeight.value=''
        heightError.innerHTML= 'Input field is empty'
    }else if(isNaN(maleHeight.value)){
        heightError.innerHTML= 'Please provide a valid height'
        maleHeight.value=''
    }else{
        heightError.innerHTML= ''
    }

    if(maleWeight.value===''){
        weightError.innerHTML= 'Input field is empty'
        maleWeight.value=''
    }else if(isNaN(maleWeight.value)){
        weightError.innerHTML= 'Please provide a valid weight'
        maleWeight.value=''
    }else{
        weightError.innerHTML= ''
    }


    if(maleHeight.value != '' && maleWeight.value != ''){
        let bmi= (maleWeight.value*2.20462262 / (maleHeight.value**2)*703).toFixed(2)

        if(bmi<18.5){
            result.innerHTML= 'Underweight: '+ bmi
            result.style.color= 'red'
            maleHeight.value=''
            maleWeight.value=''
        }else if(bmi>=18.5 && bmi<=24.9){
            result.innerHTML= 'Healthy Weight: '+ bmi
            result.style.color ='green'
            maleHeight.value=''
            maleWeight.value=''
        }else if(bmi>=25 && bmi<=29.9){
            result.innerHTML= 'Overweight: '+ bmi
            result.style.color= 'red'
            maleHeight.value=''
            maleWeight.value=''
        }else if(bmi>=30){
            result.innerHTML= 'Obesity: '+ bmi
            result.style.color= 'red'
            maleHeight.value=''
            maleWeight.value=''
        }else{
            result.innerHTML=''
        }
    }
})

femaleCalculateBtn.addEventListener('click', function(){
    if(femaleHeight.value===''){
        fheightError.innerHTML= 'Input field is empty'
        femaleHeight.value= ''
    }else if(isNaN(femaleHeight.value)){
        fheightError.innerHTML= 'Please provide a valid height'
        femaleHeight.value= ''
    }else{
        fheightError.innerHTML= ''
    }

    if(femaleWeight.value===''){
        fweightError.innerHTML= 'Input field is empty'
        femaleWeight.value= ''
    }else if(isNaN(femaleWeight.value)){
        fweightError.innerHTML= 'Please provide a valid weight'
        femaleWeight.value= ''
    }else{
        fweightError.innerHTML= ''
    }


    if(femaleHeight.value != '' && femaleWeight.value != ''){
        let bmi= (femaleWeight.value*2.20462262 / (femaleHeight.value**2)*703).toFixed(2)
        fresult.innerHTML= bmi
        if(bmi<18.5){
            fresult.innerHTML= 'Underweight: '+ bmi
            fresult.style.color= 'red'
            femaleHeight.value=''
            femaleWeight.value=''
        }else if(bmi>=18.5 && bmi<=24.9){
            fresult.innerHTML= 'Healthy Weight: '+ bmi
            fresult.style.color= 'green'
            femaleHeight.value=''
            femaleWeight.value=''
        }else if(bmi>=25 && bmi<=29.9){
            fresult.innerHTML= 'Overweight: '+ bmi
            fresult.style.color= 'red'
            femaleHeight.value=''
            femaleWeight.value=''
        }else if(bmi>=30){
            fresult.innerHTML= 'Obesity: '+ bmi
            fresult.style.color= 'red'
            femaleHeight.value=''
            femaleWeight.value=''
        }else{
            fresult.innerHTML=''
        }
    }
})


maleHomeBtn.addEventListener('click', function(){
    male.style.display='none'
    heightError.innerHTML= '' 
    weightError.innerHTML= '' 
    maleHeight.value=''
    maleWeight.value=''
    result.innerHTML=''
    firstPage.style.display='block'
})
femaleHomeBtn.addEventListener('click', function(){
    female.style.display='none' 
    femaleHeight.value=''
    femaleWeight.value=''
    fheightError.innerHTML=''
    fweightError.innerHTML=''
    fresult.innerHTML=''
    firstPage.style.display='block'
})


// BMI = (w ÷ h2) * 703 
// Below 18.5	Underweight
// 18.5 - 24.9	Healthy weight
// 25.0 - 29.9	Overweight
// 30.0 and above	Obesity









// =====================home-Btn============
