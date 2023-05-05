import React from 'react'
import Question from './Question';
import {questions} from './data'
import { RiQuestionnaireFill } from 'react-icons/ri';

const Faq = () => {
  return (
    <section className='faq-sec'>
        <div className="container faq">
            <div className="title --center-all">
                <RiQuestionnaireFill size={30} color={"orangered"}/>
                <h1 className='--mb2'>FAQ</h1>
                <p className='--text-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit veritatis ea eveniet tenetur porro culpa labore voluptates, nisi aliquam rem. Eius praesentium est dolor perspiciatis temporibus ex, quo eligendi atque?</p>
            </div>
            <div className="questions --center-all">
                {questions.map((question) => (
                    <Question key={question.id} title={question.title} answer={question.answer}/>
                ))}
                
            </div>
        </div>
        
    </section>
  )
}

export default Faq