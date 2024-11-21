import React, { useEffect } from 'react'
import Inst from '../assets/Instagram.png' 
import Beha from '../assets/Behance.png'
import Git from '../assets/GitHub.png'
import Link from '../assets/LinkedIn.png'
import Saj from '../assets/sajal.png'
import bg from '../assets/bg1.jpg'
import Button from '@mui/material/Button';
import Dev from '../assets/dev.png'
import Rea from '../assets/rea.png'
import Ht from '../assets/html5.png'
import css from '../assets/css.png'
import boot from '../assets/boot.png'
import jas from '../assets/js.png'
import Fig from '../assets/Figma.png'
import Pho from '../assets/ps.png'
import Gi from '../assets/gitt.png'
import Cont from '../assets/cont1.png'
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';







function Hom() {

    useEffect(() => {
        AOS.init({
            duration: 500, // Duration of animations
            once: true,
        }); // Initialize AOS
    }, []);

  return (


    <>
    
    <div id='sajal1' className='container p-5'>
        <div className='row'>
            <div className='col-md-6'>
              <h1 data-aos="fade-right" data-aos-delay="1000" id='sajal' style={{fontSize:"80px"}}>Saja<span style={{color:"red"}}>l</span></h1>
            </div>
            <div id='iconn' className='col-md-6  d-flex justify-content-end'>
           <a href="https://www.instagram.com/sajalpt/?hl=en"><img id='insta' className='ps-3 mt-4' style={{width:"70px"}}   src={Inst}  alt="" /></a>
           <a href="https://www.behance.net/sajall"> <img id='insta' className='ps-3 mt-4' style={{width:"70px"}} src={Beha} alt="" /></a>
          <a href="https://github.com/Sajalpt"> <img id='insta' className='ps-3 mt-4' style={{width:"70px"}} src={Git} alt="" /> </a>
            <a href="https://www.linkedin.com/in/sajalpt/"><img id='insta' className='ps-3 mt-4' style={{width:"70px"}} src={Link} alt="" /></a>
           
         

            </div>

        </div>


    </div>

    <div style={{backgroundImage:`url(${bg})`}} className='container p-5'>
        <div className='row'>
            <div className='col-md-6'>

                <img id='sajalpic' style={{borderRadius:"30px"}} className='img-fluid' src={Saj} alt="" />
            </div>
            <div  className='col-md-6'>
             <div className='mt-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                <h1 id='web'><span style={{color:"red"}}>W</span>eb Designer <br></br><br /> <span style={{fontSize:"47px"}}><span style={{color:"red"}}>W</span>eb Developer</span></h1><br></br>
                </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                <Button id='btn' style={{backgroundColor:"black",width:"150px",height:"80px",fontSize:"25PX",borderRadius:"100px"}} className='mt-5' variant="contained">WORKS</Button>
                </div>
         

           

        </div>


    </div>
    </div>
 <div  className='container'>
 <h1 id='about' className='text-center'><span style={{fontSize:"30px"}}>A.K.A</span>  SAJAL PT</h1>

<div className='row'>
    <div className='col-md-8'>
       <p className=''>Hello! I’m Sajal PT, a passionate web designer from Calicut, Kerala. I recently graduated with a Bachelor's degree in Computer Applications from Yeldo Mar Baselious College, Kothamangalam, Kochi, in 2024. With a deep-rooted interest in design and technology, I’ve focused on developing my skills in web design, user interfaces, branding, and digital creativity. <br />

As a passionate web designer, I specialize in crafting visually appealing, user-centered websites that deliver seamless digital experiences. I believe that great design is not just about aesthetics; it’s about understanding the unique needs of the client and their audience, and translating those needs into intuitive, functional, and engaging designs. With a keen eye for detail, I work with the latest web technologies and design principles to create responsive, mobile-first websites that look beautiful on any device. Whether it’s an e-commerce platform, a personal blog, or a corporate website, I focus on creating a design that supports the goals of the business while providing an easy and enjoyable experience for users. My design process is collaborative and client-focused, ensuring that each project is tailor-made to reflect the brand’s identity and values. I strive to build designs that not only look great but also improve usability, increase engagement, and drive conversions.</p>
    </div>
    <div className='col-md-4'>
<img className='img-fluid' src={Dev} alt="" />
    </div>

</div>
 </div>

 
 <h1 className='text-center' id='about'>TOOLS</h1>
 <div className='' >
<div className='container'>
    <div className='row'>
        <div className='col-2 col-md-2 d-flex align-item-center justify-content-center'>
        <img id='insta' className='mt-2' style={{width:"80px" ,height:"80px" }} src={Ht} alt="" />
        
        </div>
        <div className='col-2 col-md-2 d d-flex align-item-center justify-content-center'>
        <img id='insta' style={{width:"100px" ,height:"100px" }}  src={boot} alt="" />

</div>
<div className='col-2 col-md-2 d d-flex align-item-center justify-content-center'>
<img id='insta' style={{width:"100px",height:"100px" }} src={Rea} alt="" />
</div>
<div className='col-2 col-md-2 d d-flex align-item-center justify-content-center'>
<img id='insta' style={{width:"90px" ,height:"90px" }} src={Gi} alt="" />
</div>
<div className='col-2 col-md-2 d d-flex align-item-center justify-content-center'>
<img id='insta' className='mt-2' style={{width:"80px" ,height:"80px" }} src={css} alt="" />

</div>
<div className='col-2 col-md-2 d d-flex align-item-center justify-content-center'>
<img id='insta' className='mt-2' style={{width:"80px" ,height:"80px" }} src={jas} alt="" />

</div>

    </div>
    <div className='row'>
        <div className='col-md-2'>
        </div>
        <div className='col-md-2 d-flex align-item-center justify-content-center'>
       

</div>
<div className='col-md-2'>

</div>
<div className='col-md-2'>

</div>
<div className='col-md-2 d-flex align-item-center justify-content-center'>

</div>
<div className='col-md-2'>

</div>

    </div>

</div>
<div className='container'>
    <div className='row'>
        <div className='col-md-2'>

        </div>
        <div className='col-md-2 d-flex align-item-center justify-content-center'>
</div>
<div className='col-md-2'>

</div>
<div className='col-md-2'>

</div>
<div className='col-md-2 d-flex align-item-center justify-content-center'>
</div>
<div className='col-md-2'>

</div>

    </div>
    <div className='row'>
        <div className='col-2 col-md-2'>

        </div>
        <div className='col-2 col-md-2'>

</div>
<div className='col-2 col-md-2 d-flex align-item-center justify-content-center'>
<img id='insta' style={{width:"100px" ,height:"100px" }} src={Fig} alt="" />

</div>
<div className='col-2 col-md-2 d-flex align-item-center justify-content-center'>
<img id='insta' style={{width:"100px" ,height:"100px" }} src={Pho} alt="" />

</div>
<div className='col-2 col-md-2'>

</div>
<div className='col-2 col-md-2'>

</div>

    </div>

</div>


</div>
  <div className='container'>
<div className='row mb-5'>
    <div className='col-md-6 d-flex align-item-center justify-content-center'>
    <img className='img-fluid' src={Cont} alt="" />
    </div>
    <div className='col-md-6 '>
    <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='ms-3' id='about3'>Name</Form.Label>
        <Form.Control style={{backgroundColor:"rgb(199, 196, 196)",height:"60px",borderRadius:"50px",fontSize:"20px"}} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='ms-3' id='about3'>Mobile number</Form.Label>
        <Form.Control style={{backgroundColor:"rgb(199, 196, 196)",height:"60px",borderRadius:"50px",fontSize:"20px"}} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='ms-3' id='about3'>Message</Form.Label>
        <Form.Control style={{backgroundColor:"rgb(199, 196, 196)",height:"130px",borderRadius:"50px",fontSize:"20px"}} placeholder='     Enter your message' as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button id='btn1' style={{backgroundColor:"black",width:"100%",height:"80px",fontSize:"45px",borderRadius:"100px"}} className='mt-2' variant="contained">SUBMIT</Button>

    </div>

</div>


  </div>

  <div id='sajal12' className='container p-5'>
        <div className='row'>
            <div className='col-md-6'>
             
            </div>
            <div id='iconn' className='col-md-6  d-flex justify-content-end'>
           <a href="https://www.instagram.com/sajalpt/?hl=en"><img id='insta' className='ps-3 mt-4' style={{width:"70px"}}   src={Inst}  alt="" /></a>
           <a href="https://www.behance.net/sajall"> <img id='insta' className='ps-3 mt-4' style={{width:"70px"}} src={Beha} alt="" /></a>
          <a href="https://github.com/Sajalpt"> <img id='insta' className='ps-3 mt-4' style={{width:"70px"}} src={Git} alt="" /> </a>
            <a href="https://www.linkedin.com/in/sajalpt/"><img id='insta' className='ps-3 mt-4' style={{width:"70px"}} src={Link} alt="" /></a>
           
         

            </div>

        </div>


    </div>

    </>
  )
}

export default Hom