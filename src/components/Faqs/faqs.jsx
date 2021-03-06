import './faqs.css'
import React from 'react';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const data =[
{
  question:'Why use our Resume Builder?',
  answer: 'It’s fast, it’s easy, and it can make a professional, full-page resume for anyone. Regardless of how much work experience you have, how long you went to school, or what skills you possess, our software was designed by certified resume writers to generate a complete resume for every kind of job seeker.'
},
{
  question:'What should I put on my resume?',
  answer: 'There are five main sections that every resume should include: Contact Info, Resume Introduction, Professional Experience, Education, and Skills. However, keep in mind that depending your industry, you may need include additional sections on your resume. For example, nurses should include a section about their professional licenses and certifications—which you can add easily in our resume builder. To learn more about what to put on your resume, visit our resume writing guide.'
},
{
  question:'Why do I need a different resume for every job application?',
  answer: 'No two jobs are exactly alike. Even if you apply for two positions with the exact same title, it’s extremely likely that each company highlights different skills and traits in the job description. Remember, the responsibilities of a “Sales Associate” at one store may look very different at another. That’s why we recommend that before you send out an application, you tailor your resume to address the specific requirements in the job description. Usually this can cause job seekers a lot of headaches, but our resume creator allows you to build dozens of fully-customized resumes in a fraction of the time.'
},
{
  question:'What if I need a cover letter for my resume?',
  answer: 'If you need a matching cover letter for your resume, then you’ve come to right place. Along with our resume generator, we also offer a state-of-the-art cover letter builder. The best part is that if you sign up for an RG account, you get unlimited access to both! In under ten minutes you can have a compatible resume and cover letter, and be ready to apply to the job of your dreams.'
},
{
  question:'Which resume builder template should I use?',
  answer: 'The resume template you choose is largely based on your personal preference and the impression you want to give to hiring managers. We design every template so that it’s flexible enough to suit any industry, level of experience and education, or skillset. So no matter which template you choose, you can be confident that it’s optimized to highlight your unique experiences and abilities.'
},

{
  question:'Are there any examples of a good resume I can look at?',
  answer: 'Yes, we offer an extensive library of free resume examples. Our resume library covers all industries and 90+ job titles. Each sample has been meticulously written by our resume experts to demonstrate what an ideal resume in every industry should cover. If you aren’t sure what to include in your resume, or if you just need some inspiration to get started, we highly encourage you to visit our free resume example library.'
}
]


function Accordion() {
  const [selected, setselected] = useState(null)
    const toggle = (i) =>{
      if (selected === i) {
        return setselected(null)
      }
      setselected(i)
    }
    return (
      <section className="faq">
        <div className="container">
          <header className="section-header">
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
          </header>
            <div className="faqs mx-auto cursor-pointer">
              {data.map((item, i) => (
                <div className="" key={item.question}>
                    <div className="d-flex align-items-center justify-content-between" onClick={() => toggle(i)}>
                        <h4 className="faqs-title py-2" >
                        {item.question}
                        </h4>
                        <div className="mb-2">
                        {selected === i ?  <FaAngleUp className=''/> :  <FaAngleDown className=''/>}  
                        </div>
                       
                    </div>
                    <div className={selected === i ? 'contents show pb-2 text-secondary' : 'contents'} >
                          {item.answer}
                    </div>
                </div>
                ))}
            </div>
        </div>

    </section>
    )
  }
  export default Accordion ;

