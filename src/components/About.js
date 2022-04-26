import React from 'react'

export default function About(props) {

    var myStyle = {}

    if (props.mode === 'dark') {
        myStyle = {
            color: 'white',
            backgroundColor: props.blackColorCode
        }
    }
    else {
        myStyle = {
            color: 'black',
            backgroundColor: 'white'
        }
    }

    return (
        <>
            <div className="container px-3 py-2" style={myStyle}>

                <h1 className='my-2'>About</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About Developer
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Abhilash Gupta</strong> is the developer of this website. You can know more about him from his <code><a target='_blank' href="https://abhilashgupta.ml" rel="noreferrer">Porfolio Website</a></code>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Reference
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This website is a <strong>practice website</strong> made by following <code><a target='_blank' href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" rel="noreferrer">React Js tutorial playlist</a></code> by CodeWithHarry youtube channel.
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
