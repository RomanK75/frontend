import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="container">
      <div className="row avatar-row">
        <div className="col-md-4">
          <h1>About</h1>
          <p className='p-typing'>Окончил курс Full-stack разработчика на Python От
          образовательно платформы НЕТОЛОГИЯ, опыт
          коммерческой разработки отсутствует. Есть пара пет проектов
          - интернет магазин (React,Redux - backend реализован парой
          ручек на js) , ТГ бот - онлайн-кинотеатр ( Aiogram, db - tortoise ).
          Быстро учусь, готов слушать, задавать тонну вопрос и
          развиваться в профессиональной сфере. Предпочтения по
          языкам - python,typescript но конечно же готов выучить любой
          язык, фреймворк. Коммуникабелен, стрессоустойчив.</p>
        </div>
        <div className="col-md-6">
          <div className="card card-avatar">
            <img className="card-img-top img-avatar" src="./src/assets/avatar.jpg" alt="Title" />
            <div className="card-body">
              <hr />
              <h4 className="card-title typewriter">Колесников Роман</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores commodi tempora aut quos voluptatibus, odit voluptatem obcaecati magni error. Ipsa repudiandae sint earum nemo dignissimos magni hic beatae quo adipisci.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About