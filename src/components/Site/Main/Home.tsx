import { Component } from 'react';
import {Jumbotron, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,Card, CardTitle, CardText, CardLink } from "reactstrap";
import image from "./assets/mamabear pic.jpg"



interface HomeProps  {
token: string


}

interface HomeState {
activeIndex: any,
animating: boolean,
newIndex: any
}


  

class Home extends Component <HomeProps, HomeState>{
    constructor(props: HomeProps) {
        super(props);
        this.state = {activeIndex: 0, animating: false, newIndex: "" }
    }
    
style = {width: "900px", border: "solid", color: "#582B11"}


 items = [
  {
    
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620590796/chicco_stroller_tdz7vj.jpg',
    altText: 'Chicco Travel System',
    caption: 'Chicco Bravo Trio Travel System'
    
   
  },
  {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620591005/graco_car_seaet_kmeg0n.png',
    altText: 'Slide 2',
    caption: 'Gracco 4Ever DLX ',
   
    
  },
  {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620616560/white_noise_maker_hyzfl3.jpg',
    altText: 'Hatch White Noise Maker',
    caption: ' Hatch White Noise Maker',
      
  },
  {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/v1620591242/boppy_pillow_re0vdi.jpg',
    altText: 'Boppy Pillow',
    caption: 'Boppy Pillow',
     
  },
  {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620616759/munchkin_gate_wfzald.jpg',
    altText: 'Munchkin Easy Close',
    caption: 'Munchkin Easy Close Baby Gate',
      
    
  },
  {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620591476/Skip_hop_diaper_bag_iucg58.jpg',
    altText: 'Skip Hop Mainframe Diaper Backpack',
    caption: 'Skip Hop Mainframe Diaper Backpack',
      
  },
    {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620591721/rocker_b8pxw5.jpg',
    altText: '4moms mamaRoo 4 Infant Seat',
    caption: '4moms mamaRoo 4 Infant Seat',
     
  },
    {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620663168/photos-RBP/formula_machine_fsnogg.jpg',
    altText: 'Baby Brezza Formula Dispenser',
    caption: 'Baby Brezza Formula Dispenser',
  
    
    
  },
    {
    className: "slide-img", src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620591616/keep_sake_book_dfr8hb.jpg',
    altText: 'Artifact Uprising Baby Board Book',
    caption: 'Artifact Uprising Baby Board Book',
    
  }, 
   {
   className: "slide-img",  src: 'https://res.cloudinary.com/dqaf1fih0/image/upload/c_scale,h_400,w_500/v1620591955/mama_bear_shirt_ckuamo.jpg',
    altText: 'Mama Bear Products',
    caption: 'Mama Bear Products',
     
  }

];


  next = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  }

  goToIndex = () => {
    if (this.state.animating) return;
    this.setState({activeIndex: this.state.newIndex});
  }


slides = this.items.map((item) => {
    return (
        
      <CarouselItem className="carousel-img"
        onExiting={() => this.setState({animating: true})}
        onExited={() => this.setState({animating: false})}
        key={item.src}
      >
          
        <img src={item.src} alt={item.altText} />
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        {/* <Button>Direct Me to Website</Button> */}
        
      </CarouselItem>
    );
  });

render() {


    return (
        <div className="main">

            <Jumbotron className="home">
                <img src={image}style = {this.style}></img>
                <h1>Mama Bear's Den</h1>
                <p>Mama Life is hard. Especially when it comes to remebering everything. Mama Bear's Den helps you keep a store list of all the products you need to get for baby bear and you.</p>
               
            </Jumbotron>


        
 <Carousel 
      activeIndex={this.state.activeIndex}
      next={this.next}
      previous={this.previous}
    >
        
      {/* <CarouselIndicators items={this.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} /> */}
      
      {this.slides}
    
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      
    </Carousel>

    <br></br>
 <br></br>
  <br></br>
   <br></br>
    <br></br>
      <br></br>

    <h1>Interested In These Items?</h1>

<Card body className="product-links">
        <CardTitle tag="h5">Chicco Travel System</CardTitle>
        <CardText>Bravo Trio Stroller</CardText>
        <CardLink href="https://www.chiccousa.com/shop-our-products/travel-systems/all-travel-systems/bravo-trio-travel-system/79632.html?dwvar_79632_color=Camden&cgid=gear_travel_systems_all#start=1">Buy Now</CardLink>
      </Card>
      <Card body className="product-links">
        <CardTitle tag="h5">Gracco Car Seat</CardTitle>
        <CardText>Gracco 4Ever DLX 4-in-1 Car Seat</CardText>
        <CardLink href="https://www.gracobaby.com/car-seats/all-in-one-car-seats/4ever-dlx-4-in-1-car-seat/SAP_2074900.html">Buy Now</CardLink>
      </Card>
      <Card body className="product-links">
        <CardTitle tag="h5">Hatch White Noise Maker</CardTitle>
        <CardText>Hatch Rest Sound Machine</CardText>
         <CardLink href="https://www.hatch.co/rest?gclid=Cj0KCQjws-OEBhCkARIsAPhOkIZ1UYMplRQghs4ANPoomPUVllq_b1F-E_eBGNsKoQMnkWDirw24dDkaAhdTEALw_wcB">Buy Now</CardLink>
      </Card>
 <Card body className="product-links">
        <CardTitle tag="h5">Boppy Nursing Pillow</CardTitle>
        <CardText>Boppy Pillow</CardText>
         <CardLink href="https://www.boppy.com/products/boppy-classic-feeding-infant-support-pillow">Buy Now</CardLink>
      </Card>
       <Card body className="product-links">
        <CardTitle tag="h5">Munchkin Easy Close</CardTitle>
        <CardText>Baby Gate</CardText>
         <CardLink href="https://www.munchkin.com/safety/gates.html">Buy Now</CardLink>
      </Card>
       <Card body className="product-links">
        <CardTitle tag="h5">Skip Hop Mainframe Diaper Backpack</CardTitle>
        <CardText>Mainframe Diaper Backpack</CardText>
         <CardLink href="https://www.skiphop.com/skiphop-diaper-bags/V_200150.html">Buy Now</CardLink>
      </Card>
       <Card body className="product-links">
        <CardTitle tag="h5">mamaRoo4 infant seat</CardTitle>
        <CardText>Bouncer</CardText>
         <CardLink href="https://www.4moms.com/products/mamaroo">Buy Now</CardLink>
      </Card>
       <Card body className="product-links">
        <CardTitle tag="h5">Baby Brezza Pro Advance</CardTitle>
        <CardText>Formula Dispenser</CardText>
         <CardLink href="https://babybrezza.com/products/formula-pro-advanced">Buy Now</CardLink>
      </Card>
       <Card body className="product-links">
        <CardTitle tag="h5">Artifact Uprising Baby Board Book</CardTitle>
        <CardText>Customized Baby Book</CardText>
         <CardLink href="https://www.artifactuprising.com/photo-books/baby-board-book">Buy Now</CardLink>
      </Card>
       <Card body className="product-links">
        <CardTitle tag="h5">Mama Bear Clothing</CardTitle>
        <CardText>Clothing</CardText>
         <CardLink href="https://www.amazon.com/b?ie=UTF8&node=18990963011">Buy Now</CardLink>
      </Card>

     

        </div>
    )
    }
}

export default Home;



