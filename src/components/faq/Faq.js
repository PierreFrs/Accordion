import React from 'react'
import { useState } from 'react';
import Question from './Question';
import {questions} from './data'
import { RiQuestionnaireFill } from 'react-icons/ri';
import './Faq.scss';

const Faq = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredQuestions = questions.filter(
        (question) => question.title.toLowerCase().includes(searchQuery.toLowerCase()) || question.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className='faq-sec'>
        <div className="container faq">
            <div className="title --center-all">
                <RiQuestionnaireFill className="icon" size={30} color={"orangered"}/>
                <h1 className='--mb2'>FAQ</h1>
                <p className='--text-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit veritatis ea eveniet tenetur porro culpa labore voluptates, nisi aliquam rem. Eius praesentium est dolor perspiciatis temporibus ex, quo eligendi atque?</p>
                <input type="text" placeholder='Search FAQs' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className="questions --center-all">
                {filteredQuestions.map((question) => (
                    <Question key={question.id} title={question.title} answer={question.answer}/>
                ))}
                
            </div>
        </div>
        
    </section>
  )
}

export default Faq