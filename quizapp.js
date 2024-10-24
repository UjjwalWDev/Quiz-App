const questions =[
    {
        'que':'which of the following is a markup language',
        'a':'HTML',
         'b':'CSS',
         'c':'JAVASCRIPT',
         'd':'PHP',
         'correct':'a'
    },

    {
        'que':'which year was javascript was laumched?',
        'a':'1994',
         'b':'1995',
         'c':'2002',
         'd':'none of the above',
         'correct':'b'
    },

    {
        'que':' what does CSS stands for?',
        'a':'HYPERTEXT MARKUP LANGUAGE',
         'b':'CASCADING STYLE SHEET',
         'c':'JAVASCRIPT',
         'd':'PHP',
         'correct':'b'
    }
]
let index=0;
let total=questions.length
let right=0
let wrong=0 

const quesbox =document.getElementById("quesbox")
const optionInputs=document.querySelectorAll('.options')
    const loadquestion=()=>{
        if(index === total ){
            return endQuiz()
        }
        reset()
        const data =questions[index]
        quesbox.innerText=`
        ${index+1}) ${data.que}`
        optionInputs[0].nextElementSibling.innerText=data.a;
        optionInputs[1].nextElementSibling.innerText=data.b;
        optionInputs[2].nextElementSibling.innerText=data.c;
        optionInputs[3].nextElementSibling.innerText=data.d;
    }
    const sumbitquiz=() =>{
        const data =questions[index]
        const ans=getAnswer()
        if(ans===data.correct){
            right++
        }
        else{
            wrong ++
        }
        index++
        loadquestion()
        return;
    }
    const getAnswer =()=>{
        let answer;
        optionInputs.forEach(
            (input)=>{
                if(input.checked){
                    answer = input.value
                }
            }
        )
        return answer
    }

    const reset=()=>{
        optionInputs.forEach(
            (input) =>{
                input.checked=false
            }
        )

    }
    const endQuiz =()=>{
        document.getElementById("box").innerHTML=`
        <div class="style">
        <h3>Thank you for playing the Quiz</h3>
        <h2>${right} / ${total} are correct</h2>
        </div>
        `
    }
loadquestion()