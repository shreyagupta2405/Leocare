import React from 'react'
import Navbar from './Components/Navbar';
import Button from './Components/Button';
import SlideShow from './Components/Slideshow';
import Card from './Components/Card';
import Testimonial from './Components/Testimonial';
import './Components/main.css';

const App = () => {
    return (<div>
    {/* navbar */}
    <Navbar />
    <div className='div1'>SHOW YOU CARE, CHANGE THEIR WORLD 
        <Button content="Donate Now" variant="red" />
        </div>
        <div className="text-center container">
    {/*slideshow properties:
    - autoPlay => can be ture, false (default: false)
    - activeSlideDuration => can be in milliseconds (default: 3000)
    - interactionMode => can be:
    (swipe => change slides by swiping to right or left) or
    (hover => pause a slide on hover)
    (default is swipe)
    - alignCaption => can be center, left, right (default: center)
    - alignIndicators => can be center, left, right (default: center)
    - indicatorsColor => allows you to change the indicators color (default: #fff) 
    - useRightLeftTriangles => can be true or false (defalut: false) 
    - rightTriangleColor or leftTriangleColor => set the background color of the right and the left triangles (default: #fff)
    - rightIcon or leftIcon => set the right or left icon (it can be "svg" or "fontawesome icon") if you want to change the color use inline styles on the icon as follow:
    (for svg) =>  style={{fill: "#000"}} defalut is black
    (for fontawesome) => style={{color: "#000"}} default is black (don't forget to add fontawesome to your project) */}
    
    <SlideShow
      autoPlay={true}
      activeSlideDuration={3000}
      interactionMode="swipe"
      alignCaption="center"
      alignIndicators="center"
      indicatorsColor="#fff"
      useRightLeftTriangles={true}
      rightTriangleColor="#fff"
      leftTriangleColor="#fff"
    >
      <div>
        <div className="carousel-caption">
        </div>
      </div>
      <div>
        <div className="carousel-caption">
        </div>
      </div>
      <div>
        <div className="carousel-caption">
        </div>
      </div>
    </SlideShow>
  </div>
  <div className='div2'>The journey to change the world starts with one step.</div>
 
 {/* card component */}
  <div>
    <div className='div3'>What we do</div>
    <div className='cards'>
         <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
          <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
          <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
      </div> 
  </div>
  {/* blog posts */}
  <div>
    <div className='div3'>Blog Posts</div>
    <div className='cards'>
         <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
          <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
          <Card
          img='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler' />
      </div> 
  </div>
  <div style={{justifyContent:'center'}}>
  <Button content="Donate Now" variant="red" />
  </div>
  <br></br>
  {/* testimonial */}
  <div>
  <Testimonial />
  </div>
  
   



  
</div>)
}

export default App;