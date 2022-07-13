import react from 'react';
import Projectcard from './projectcard'

function Portfolio(){
    const projects=[
        {
            id:1,
            title:"password generator",
            description:"description of project 1",
githublink:"https://github.com/kamal1198/password-res"
        },
        {
        id:2,
            title:"quiz code",
            description:"description of project 2",
githublink:"https://github.com/kamal1198/quiz-repo"
        },
        {
            id:3,
            title:"planner",
            description:"description of project 3",
            githublink:"https://github.com/kamal1198/planner-"
        },
        {
            id:4,
            title:"cine-review",
            description:"description of project 4",
            githublink:"https://github.com/lyf703331869/cine-review"
        },
    ]
    return(
        <div>{projects.map(({id,title,description,githublink})=>(
<Projectcard title={title}description={description} key={id} link={githublink}/>
        ))}</div>
    )
}
export default Portfolio