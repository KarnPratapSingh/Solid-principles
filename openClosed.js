//code not following openClosed principle:
const questions=[{
    type:'boolean',
    description: 'this video is useful'
},
{
    type:'multipleChoice',
    description:'what is your fav lang?',
    options:['html','java','python']
},
{
    type:'text',
    description:'this is a text'
}];

function printQuiz(questions){
    questions.forEach(question=>{
        console.log(question.description);
        switch(question.type){
            case 'boolean':
                console.log('true')
                console.log('false')
                break;
            case 'multipleChoice':
                question.options.forEach((option,index)=>{
                    console.log(`${index+1}. ${option}`);
                })
                break;
            case 'text':
                console.log('Answer ---------------')
                break;
        }
    })
}

printQuiz(questions);


//same code but following open-closed

class BooleanQuestion{
    constructor(description){
        this.description=description;
    }

    printQuestionChoice(){
        console.log('1. true');
        console.log('2. False');
    }
}

class multipleChoiceQuestion{
    constructor(description, options){
        this.description=description;
        this.options=options;
    }
    printQuestionChoice(){
        this.options.forEach((option, index)=>{
            console.log(`${index+1}. ${option}`);
        })
    }
}

class textQuestion{
    constructor(description){
        this.description=description;
    }

    printQuestionChoice(){
        console.log('Answer:---------------');
    }
}

const questions=[new BooleanQuestion('This video is useful'), 
new multipleChoiceQuestion('What is your fav lang',['css','html','java','python']),
new textQuestion('submit your answer here')];

function printQuiz(questions){
    questions.forEach((question)=>{
        console.log(question.description);
        question.printQuestionChoice();
        console.log('');
    })

}

printQuiz(questions);