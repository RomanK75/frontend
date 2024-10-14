import { NodesType } from '../src/types/types'

const nodes:NodesType = [{
  id: 1,
  data:{
    title: 'TypeScript',
    nodeImage: './src/assets/ts.png',
    childrenNode: [],
    text: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    percentage: 85
  }
},{
  id: 2,
  data:{  
    title: 'Python',
    nodeImage: './src/assets/python.png',
    childrenNode: [7],
    text: 'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming. Python’s elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.',
    percentage: 80
  }
}, {
  id: 4,
  data:{  
    title: 'React',
    nodeImage: './src/assets/react.png',
    parentsNode: 1,
    text: 'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    percentage: 70
  }
}, {
  id: 5,
  data:{  
    title: 'RestAPI',
    nodeImage: './src/assets/drf.png',
    parentsNode: 1,
    text:'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.',
    percentage: 60
  }
}, {
  id: 6,
  data:{  
    title: 'Next.js',
    nodeImage: './src/assets/nextJs.png',
    parentsNode: 1,
    text:'The React Framework for the Web. Used by some of the world\'s largest companies, Next.js enables you to create high-quality web applications with the power of React components.',
    percentage: 50
  }
}, {
  id: 7,
  data:{  
    title: 'Django',
    nodeImage: './src/assets/django.png',
    parentsNode: 2,
    text:'Vite is a fast and minimalistic web framework for building modern web applications.',
    percentage: 68
  }
}, {
  id: 8,
  data:{  
    title: 'MySQL',
    nodeImage: './src/assets/mysql.png',
    parentsNode: 2,
    percentage: 70
}},{
  id: 9,
  data:{  
    title: 'PostgreSQL',
    nodeImage: './src/assets/psql.png',
    parentsNode: 2,
    percentage: 65
  }
}, {
  id: 10,
  data:{  
    title: 'Bootstrap',
    nodeImage: './src/assets/bs5.png',
    parentsNode: 2,
    percentage: 80
  }
}];

export default nodes