import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => {
  return (
    <div className="container light-container ">
      <VerticalTimeline lineColor={'black'}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">API</h3>
          <h4 className="vertical-timeline-element-subtitle">REST API</h4>
          <p>Придерживаюсь основных принципов REST при работе с API</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">ООП</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Объеектно ориентиированное программиирование
          </h4>
          <p>Знаю основные прнципы и приминяю их на практике</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">Data types</h3>
          <p>
            Во всех своих проектах использую строгую типизацию данных для уменьшения ошибок в коде
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">Bots</h3>
          <h4 className="vertical-timeline-element-subtitle">Aiogram, Telegraf</h4>
          <p>Есть опыт написания ботов на популярных фреймворках для соц сетей</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">Web Scraping</h3>
          <h4 className="vertical-timeline-element-subtitle">Selenium, bs4, Puppeteer</h4>
          <p>
            Знаком с основными фреймворками и умею их применять на практике,есть опыт обхода
            cloudflare
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">MVC & SPA</h3>
          <h4 className="vertical-timeline-element-subtitle">Django & React</h4>
          <p>
            Django - роутинг, представление(view), работа с ОРМ, настройка админ панели, авторизация
          </p>
          <p>React - стейт, хуки, конетекст менеджер (Redux & Context API)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">Bundlers</h3>
          <h4 className="vertical-timeline-element-subtitle">Vite & Webpack</h4>
          <p>
            Применяю бандлеры в своих проекта, приемущественно vite из-за простоты и скорости, но
            так же есть опыт написания .webpackconfig
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">Tests</h3>
          <h4 className="vertical-timeline-element-subtitle">Jest</h4>
          <p>
            Знаком с test driven development (TDD), умею писать тест и рабоать с покрытием кейсов
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          intersectionObserverProps={{ threshold: 0.5 }}
        >
          <h3 className="vertical-timeline-element-title">CMS</h3>
          <h4 className="vertical-timeline-element-subtitle">WordPress & Tilda</h4>
          <p>Базовое знакомство с CMS, работа с плагинами, основы PHP</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
