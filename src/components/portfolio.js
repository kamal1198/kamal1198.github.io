import react from 'react';
import Projectcard from './projectcard'

function Portfolio(){
    const projects=[
        {
            id:1,
            title:"Password Generator",
            description:"This app generates password for you accourding to how much lengthy you would want it to be.",
githublink:"https://github.com/kamal1198/password-res",
image:"passgen"
        },
        {
        id:2,
            title:"Quiz code",
            description:"This app lets you take a quiz.",
githublink:"https://github.com/kamal1198/quiz-repo",
image:"quiz"
        },
        {
            id:3,
            title:"Weather Forecast",
            description:"This app lets you view weather of any city you search.",
            githublink:"https://github.com/kamal1198/weatherreport",
            image:"weather"
        },
        {
            id:4,
            title:"cine-review",
            description:"This is a Github group Project. This app lets you view latest movies as display and movie reviews of searched movies.",
            githublink:"https://github.com/lyf703331869/cine-review",
            image:"cinereview"
        },
    ]
    return(
        <div>{projects.map(({id,title,description,githublink,image})=>(
<Projectcard title={title}description={description} key={id} link={githublink} image={image}/>
        ))}</div>
    )
}
export default Portfolio