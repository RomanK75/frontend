import getImageUrl from "../../utils/imgImport"

const Courses = () => {
  const courses = [
    {name : 'Нетология', logo: getImageUrl('netology.png')},
    {name : 'cs50', logo: getImageUrl('cs50-black.png')},
    {name : 'freeCodeCamp', logo: getImageUrl('freecode.png')},
    {name : 'codeacademy', logo: getImageUrl('academy.png')},
    {name : 'SQL academy', logo: getImageUrl('sqlacademy.svg')},
  ]
  return (
    <div className="container light-container">
      <h1 className="text-center">Оконченные курсы</h1>
        <div className="row mt-5 ">
          {courses.map((course,index) => (
          <div key={index} className="col text-center mb-3 mx-3">
            <div className="rounded-circle mb-2 d-flex align-items-center justify-content-center bg-white">
              <img src={course.logo} alt={course.name}  style={{ width: "200px", height: "200px", objectFit: 'contain' }} />
            </div>
            <h5>{course.name}</h5>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Courses