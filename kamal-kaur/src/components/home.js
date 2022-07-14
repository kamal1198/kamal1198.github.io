import react from 'react';
function Home() {
    return (
        <div style={{ width: "1000px", margin: "10px auto",position: "relative", height: "fit-content" }}>
            <h3 style={{fontSize:"50px",fontFamily:"monospace"}}>I'm</h3>
            <h1 style={{fontSize:"100px",fontFamily:"monospace"}}>KAMAL KAUR</h1>
            <img style={{ position: "absolute", top: "0px", right: "0",height:"100%",margin:"8px 8px 8px 8px"}} src={require("../images/photo.png")} />
            <h3 style={{fontSize:"50px",fontFamily:"monospace"}}>Full Stack Developer</h3>
        </div>
    )
}
export default Home