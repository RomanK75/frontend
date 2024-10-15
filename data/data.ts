import { NodesType,CategriesType } from '../src/types/types'


const data:NodesType = [{
  id: 1,
  data:{
    title: 'typescript',
    nodeImage: './src/assets/typescript.png',
    percentage: 83,
  }
},{
  id: 2,
  data : {
    title: 'Python',
    nodeImage: './src/assets/python-240.png',
    percentage: 81,
  }
}, {
  id: 4,
  data:{  
    title: 'React',
    nodeImage: './src/assets/react-js.png',
    percentage: 78,
  }
}, {
  id: 5,
  data:{  
    title: 'Rest framework',
    nodeImage: './src/assets/api.png',
    percentage: 58,

  }
}, {
  id: 6,
  data:{  
    title: 'Node.js',
    nodeImage: './src/assets/icons8-node-js-256.png',
    percentage: 76,

  }
}, {
  id: 7,
  data:{  
    title: 'Django',
    nodeImage: './src/assets/dj.png',
    percentage: 66,
  }
}, {
  id: 8,
  data:{  
    title: 'MySQL',
    nodeImage: './src/assets/mysql.png',
    percentage: 75,


}},{
  id: 9,
  data:{  
    title: 'PostgreSQL',
    nodeImage: './src/assets/psql.png',
    percentage: 72,
  }
}, {
  id: 10,
  data:{  
    title: 'Bootstrap',
    nodeImage: './src/assets/bs5.png',
    percentage: 68,
  }
}, {
  id: 11,
  data:{  
    title: 'PHP',
    nodeImage: './src/assets/docker.png',
    percentage: 29,
  }
}, {
  id: 12,
  data:{  
    title: 'Java',
    percentage: 34,
}}, {
  id: 13,
  data : {
    title: 'Git', 
    percentage: 84,
  }
}, {
  id: 14,
  data : {
    title: 'Redux', 
    percentage: 72,
  }
}, {
  id: 15,
  data : {
    title: 'MongoDB', 
    percentage: 27,
  }}, {
    id: 16,
    data : {
      title: 'Next.js', 
      percentage: 67,
    }
  }]






const nodes:NodesType = data.filter((node) => [1,2,3,4,5,6,7,8,9,10].includes(node.id));





const categories:CategriesType = [{
  id : 1,
  title : 'Languages',
  childrenNodes : [2,3,4,11,12]
}, {
  id : 2,
  title : 'Frameworks',
  childrenNodes : [7,6,5,4,16]
}, {
  id : 3,
  title : 'Databases',
  childrenNodes : [8,9,15]
}, {
  id : 4,
  title : 'DevTools',
  childrenNodes : [10,13,14]
}]

export {nodes, categories,data}