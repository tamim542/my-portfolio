import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pasport from '../image/pasport.jpg';
import informal from '../image/informal.jpg';
import project1 from '../image/project1.PNG';
import project2 from '../image/project2.PNG';
import project3 from '../image/project3.PNG';
import project4 from '../image/project4.PNG';
import project5 from '../image/project5.PNG';




import { GoMarkGithub } from "react-icons/go";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
//import pro1 from '../ProjectsDetail/Project1/Project1';

import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            {/* -------------------header section--------------------- */}

        <div className='nav-bar'>
            <div className='nav-side'>

                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Portfolio</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#about-section">About</a>
                                <a className="nav-link" href="#skills">Skills</a>
                                <a className="nav-link" href="#project">Projects</a>
                                <a className="nav-link" href="#resume">Resume</a>
                                <a className="nav-link" href="#contact">Contact</a>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            </div>

            {/* -------------------!content section--------------- */}
            <div className="bgColor">
                <div className="content" id='a-img'>
                    <h4>Hello, my name is</h4>
                    <h1>Md. Tauhidul Islam <span className='last-name'>Bhuiyan</span></h1>
                    <h3 style={{ marginBottom: '20px' }}>I'am a Web Developer.</h3>

                    {/* ---------------resume section--------------- */}

                    <a className='resume-style' href='https://drive.google.com/file/d/1wHZfCBQy2bh2dBvplvqZ5hWbpijg07Cj/view?usp=sharing' download target='_blank'> Download Resume </a><br></br>
                    {/* <Link to="../image/MdTauhidulIslamBhuiyan.pdf" target="_blank" download>Download</Link> */}

                </div>
                <div className="pasport-img" id='b-img'>
                    <img className='img-radius' src={pasport}></img>
                </div>
            </div>


            {/*-------- ----About section start---------- */}

            <section className="about" id="about-section">
                <div className="main">
                    <img className='informal-img' src={informal} />
                    <div className="about-text">
                        <h2>About Me</h2>
                        <h5>Developer <span>& Designer</span></h5>
                        <p>I am a front-end web developer. I completed my bachelor degree in Computer Science & Engineering from East-West University. Recent I have learnt web development Particularly frontend technology. At present I also learn backend technology. Because I want to be a full stack web developer. And I want to do job minimum two years in this profession. Then I will shift to competitive programming. It's my passion that one day I will be a best programmer.</p>
                        <button type="button">Let's Talk</button>
                    </div>
                </div>
            </section>

            {/*-------- ----skill section start---------- */}

           
                        
                   
   
            <div className='skill-section' id='skills'>
            <h2 style={{color:'white',fontWeight:'bolder',fontSize: '55px',textAlign:'center',paddingTop:'40px'}}>My Skills</h2>
                <div className='margin-card'>
            <div class="img-border" >
            <h2 style={{color:'white',fontWeight:'bolder',fontSize: '35px',textAlign:'center',paddingTop:'3px'}}>Front-End</h2>
               <div style={{paddingLeft:'60px'}}>
                <div className='inner-card'>

                <p className='skill-name'>HTML</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>CSS</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>Bootstrap</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>React-Bootstrap</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>Tailwind</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>JavaScript</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>React.js</p>
                </div>
                </div>
               
            </div>
            <div class="img-border" >
                
            <h2 style={{color:'white',fontWeight:'bolder',fontSize: '35px',textAlign:'center',paddingTop:'3px'}}>Backend</h2>
            <div style={{paddingLeft:'60px'}}>
                <div className='inner-card'>

                <p className='skill-name'>Node.js</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>Express.js</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>MongoDB</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>MySql</p>
                </div>
                </div>
            </div>
            <div class="img-border" >
                
            <h2 style={{color:'white',fontWeight:'bolder',fontSize: '35px',textAlign:'center',paddingTop:'3px'}}>Tools</h2>
            <div style={{paddingLeft:'60px'}}>
                <div className='inner-card'>

                <p className='skill-name'>Visual Stdio Code</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>Github</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>Firebase</p>
                </div>
                <div className='inner-card'>

                <p className='skill-name'>Heroku</p>
                </div>
               </div>
                </div>
            </div>
            
            </div>
          
           
            {/*-------- ----skill section end---------- */}

            {/* -----my project section ----------- */}
            <section id='project'>
                <div class="projects">
                    <div class="title">
                    <h2 style={{color:'white',fontWeight:'bolder',fontSize: '55px',textAlign:'center',paddingTop:'40px',paddingBottom:'40px'}}>My Projects</h2>
                    </div>

                    {/* ---------------project card--------------- */}

                    <div className='container'>
                        <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 '>


                            <div className='col'> <div className='card h-100 '>
                                <Card style={{}}>
                                    <Card.Img variant="top" src={project1} />
                                    <Card.Body>
                                        <Card.Title>Inventory Management System</Card.Title>
                                        <Card.Text> • To Develop this Project is used a Protected Route for Myitem, Inventory, Additem page
                                            • For Authentication used Google Firebase and React Firebase Hooks
                                            • Email Verification and Reset Password and For SignIn Provide two Method Email Password
                                            and Google SignIn Method
                                        </Card.Text>

                                        <Card.Title>React.js, Node.js, MongoDB</Card.Title>

                                        <Card.Text>
                                            <a href='https://assignment-11-warehouse.web.app/'>Live Site || </a>
                                            <a href='https://github.com/tamim542/-warehouse-management-client-side_assignment-11'>Github Repository Client Site || </a>
                                            <a href='https://github.com/tamim542/warehouse-management-server-side_assignment-11'>Github Repository Server Site </a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div></div>
                            <div className='col'> <div className='card h-100'>
                                <Card style={{}}>
                                    <Card.Img variant="top" src={project2} />
                                    <Card.Body>
                                        <Card.Title>Product Management System</Card.Title>
                                        <Card.Text>• To Develop this Project is used a Protected Route for Purchase page and For this project is
                                            used Nested Route for DashBoard
                                            • For Authentication used Google Firebase and React Firebase Hooks
                                            • An Admin can make another admin from user For SignIn Provide two Method Email
                                            Password and Google SignIn Method
                                        </Card.Text>

                                        <Card.Title>HTML, CSS, Tailwind , DaisyUI, React.js, Node.js, MongoDB </Card.Title>

                                        <Card.Text>
                                            <a href='https://assignment-12-c52ba.web.app/'>Live Site || </a>
                                            <a href='https://github.com/tamim542/-manufacturer-website-client-side_assignment-12'>Github Repository Client Site || </a>
                                            <a href='https://github.com/tamim542/-manufacturer-website-server-side_assignment-12'>Github Repository Server Site </a>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div></div>
                            <div className='col'> <div className='card h-100'>
                                <Card style={{}}>
                                    <Card.Img variant="top" src={project3} />
                                    <Card.Body>
                                        <Card.Title>Photography Services Website</Card.Title>
                                        <Card.Text>• To develop this project is used a Protected Route for checkOut page
                                            • For SignIn Provide two Method Email Password and Google SignIn Method
                                            • Responsive Mobile and Desktop for Home page and For Deploy use Netlify Hosting </Card.Text>
                                        <Card.Text>

                                        </Card.Text>
                                        <Card.Title>HTML, CSS, Bootstrap, React-Bootstrap, React.js, Firebase</Card.Title>

                                        <Card.Text>
                                            <a href='https://regal-moxie-a06e7c.netlify.app/'>Live Site || </a>
                                            <a href='https://github.com/tamim542/-independent-service-provider_assignment-10'>Github Repository Client Site</a>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div></div>
                            <div className='col'> <div className='card h-100'>
                                <Card style={{}}>
                                    <Card.Img variant="top" src={project4} />
                                    <Card.Body>
                                        <Card.Title>Car Reviews Website</Card.Title>
                                        <Card.Text>• To develop this project is used React.js Framework
                                            • This is car review website everyone can review their product
                                            • Who gives their product review their profile will show on the homepage and For Deploy use Netlify Hosting </Card.Text>
                                        <Card.Text>

                                        </Card.Text>
                                        <Card.Title>HTML, CSS, Bootstrap React.js</Card.Title>

                                        <Card.Text>
                                            <a href='https://famous-rabanadas-78b3d4.netlify.app/'>Live Site || </a>
                                            <a href='https://github.com/tamim542/product-analysis_assignment-9'>Github Repository Client Site</a>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div></div>
                            <div className='col'> <div className='card h-100'>
                                <Card style={{}}>
                                    <Card.Img variant="top" src={project5} />
                                    <Card.Body>
                                        <Card.Title>Online Shop</Card.Title>
                                        <Card.Text>• To develop this project is used React.js Framework
                                            • Loaded Data from Api, You can order multiple Product and show add to card
                                            • From multiple products If you want to selecte one then You can randomly choose one.</Card.Text>
                                        <Card.Text>

                                        </Card.Text>
                                        <Card.Title>HTML, CSS, Bootstrap, React.js, </Card.Title>

                                        <Card.Text>
                                            <a href='https://sprightly-sprite-bd4eb9.netlify.app/'>Live Site || </a>
                                            <a href='https://github.com/tamim542/lucky-one_assignment-8'>Github Repository Client Site </a>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div></div>

                        </div>
                    </div>

                    {/* ---------------card end--------------- */}






                </div>

            </section>


            {/* ------------contact form---------------- */}

            <div className='contact-div'>
            <h2 style={{color:'white',fontWeight:'bolder',fontSize: '55px',textAlign:'center',paddingTop:'40px'}}>My Skills</h2>
                <section id='contact' className='contact-form'>
                    <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><span style={{ color: 'white' }}>Name </span></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Write Your Name" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><span style={{ color: 'white' }}>Email address</span></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"><span style={{ color: 'white' }}>Write your Message</span></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className='' type="button">Submit</button>
                    </form>
                </section>

            </div>

            {/* <!------footer start---------> */}
	<footer>
		<p>Md. Tauhidul Islam Bhuiyan</p>
		<p>Get For more Information Click Social Icon:</p>
		<div class="social">
			<a href="https://github.com/tamim542" target='_blank'><GoMarkGithub/></a>
			<a href="https://www.linkedin.com/in/md-tauhidul-islam-bhuiyan-828524221/" target='_blank'><FaLinkedin/></a>
			<a href="https://www.facebook.com/profile.php?id=100005169857774" target='_blank'><FaFacebookSquare/></a>
		</div>
		<p class="end">CopyRight By Md. Tauhidul Islam Bhuiyan</p>
	</footer>



        </div>

    );
};

export default Home;