<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
export default {
    data() {
        return {
            name: null,
            phone: null,
            email: null,
            message: null,
            
        }

    },
  methods: {
    sendEmail() {
        
      emailjs.sendForm('service_8axsp6p', 'template_zz2oi7j', this.$refs.form, 'HD34HmPYw8YvoP1lo')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.name = null;
            this.phone = null;
            this.email = null;
            this.message = null;
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Message sent',
            text: 'you will get a feedback wihin few hours',
            showConfirmButton: true,
            timer: 3000
            })
            

        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },
    
  }
}
</script>

<template>


<!-- Start Preloader 
============================================= -->
<div id="preloader">
    <div id="ambrox-preloader" class="ambrox-preloader">
        <div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">
                <span data-text-preloader="G" class="letters-loading">
                    G
                </span>
                <span data-text-preloader="R" class="letters-loading">
                    R
                </span>
                <span data-text-preloader="E" class="letters-loading">
                    E
                </span>
                <span data-text-preloader="A" class="letters-loading">
                    A
                </span>
                <span data-text-preloader="T" class="letters-loading">
                    T
                </span>
                <span data-text-preloader="M" class="letters-loading">
                    M
                </span>
                <span data-text-preloader="A" class="letters-loading">
                    A
                </span>
                <span data-text-preloader="X" class="letters-loading">
                    X
                </span>
            </div>
        </div>
        <div class="loader">
            <div class="row">
                <div class="col-3 loader-section section-left">
                    <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-left">
                    <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-right">
                    <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-right">
                    <div class="bg"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Preloader -->


<!-- Header 
============================================= -->
<header id="home">
    <!-- Start Navigation -->
    <nav class="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">


        <div class="container d-flex justify-content-between align-items-center">            

            <!-- Start Header Navigation -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="index-2.html">
                    <img src="assets/img/logo.png" class="logo" alt="Logo">
                </a>
            </div>
            <!-- End Header Navigation -->

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-menu">

                <img src="assets/img/logo.png" alt="Logo">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i class="fa fa-times"></i>
                </button>
                
                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li>
                        <a class="smooth-menu" href="#home">Home</a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#expertise">expertise</a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#portfolio">portfolio</a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#about">about</a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#blog">blog</a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#contact">contact</a>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->

            <!-- Main Nav -->
        </div>   
        <!-- Overlay screen for menu -->
        <div class="overlay-screen"></div>
        <!-- End Overlay screen for menu -->
    </nav>
    <!-- End Navigation -->
</header>
<!-- End Header -->

<!-- Start Header Fixed 
============================================= -->
<header class="header-fixed">
    <div class="f-flex">
        <div class="logo">
            <a href="#"><img src="assets/img/logo-icon.png" alt="Logo"></a>
        </div>
        <div class="menu">
            <ul class="nav">
                <li>
                    <a class="smooth-menu" href="#home">
                        <i class="fas fa-home"></i>
                        <div class="menu-name">Home</div>
                    </a>
                </li>
                <li>
                    <a class="smooth-menu" href="#services">
                        <i class="fas fa-cog"></i>
                        <div class="menu-name">Services</div>
                    </a>
                </li>
                <li>
                    <a class="smooth-menu" href="#portfolio">
                        <i class="fas fa-briefcase"></i>
                        <div class="menu-name">Portfolio</div>
                    </a>
                </li>
                <li>
                    <a class="smooth-menu" href="#about">
                        <i class="fas fa-user"></i>
                        <div class="menu-name">About</div>
                    </a>
                </li>
                <li>
                    <a class="smooth-menu" href="#resume" >
                        <i class="fas fa-file-alt"></i>
                        <div class="menu-name">Resume</div>
                    </a>
                </li>
                <li>
                    <a class="smooth-menu" href="#contact">
                        <i class="fas fa-comments"></i>
                        <div class="menu-name">Contact</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="video">
            
        </div>
    </div>
</header>
<!-- End Header Fixed -->

<!-- Start Banner 
============================================= -->
<div class="auto-height bg-fixed banner-style-one">
    <div class="container">
        <div class="double-items">
            <div class="row align-center">

                <div class="col-lg-6 info">
                    <h1 class="text-invisible">WELCOME</h1>
                    <h2>Hey <img src="assets/img/shape/4.png" alt="Icon"> I'm <span>Greatmax</span></h2>
                    <h3 class="title">
                        <span class="header-caption" id="page-top">
                            <!-- type headline start-->
                            <span class="cd-headline clip is-full-width">
                                <!-- ROTATING TEXT -->
                                <span class="cd-words-wrapper">
                                    <b class="is-visible">Full Stack Developer</b>
                                    <b class="is-hidden">Software Engineer</b>
                                    <!-- <b class="is-hidden">UI/UX Designer</b> -->
                                </span>
                            </span>
                            <!-- type headline end -->
                        </span>
                    </h3>
                    <div class="button mt-55">
                        <a class="btn btn-md circle btn-dark" href="#resume">My Resume</a>
                    </div>
                </div>

                 <div class="col-lg-6 thumb" data-wow-delay="900ms">
                    <img class=" wow fadeInDown" src="assets/img/illustration/4.png" alt="Thumb">
                    <div class="shape-center">
                        <img src="assets/img/shape/7.png" alt="Thumb">
                    </div>
                </div>
                
            </div>
            <div class="personal-social">
                <ul>
                    <li class="linkedin">
                        <a target="_blank" href="https://www.linkedin.com/in/oluwagbenga-ojo/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="twitter">
                        <a target="_blank" href="https://twitter.com/Greatmax_main">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="dribbble">
                        <a target="_blank" href="https://github.com/Greatmax017">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- End Banner -->

<!-- Start Services
============================================= -->
<div id="services" class="services-style-one-area box-layout default-padding bottom-less bg-light">
    <div class="blur-bg"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="site-heading text-center">
                    <h4 class="sub-title">My Expertise</h4>
                    <h2 class="title">What I Do </h2>
                    <div class="devider"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- Single Item -->
            <div class="service-style-one col-lg-4 col-md-6">
                <div class="service-style-one-item">
                    <img src="assets/img/icon/1.png" alt="Icon">
                    <h4>Web Development</h4>
                    <p>
                        I create custom websites and web applications that align with your business goals. From user experience and interface design to database integration and server-side programming, I ensure that every aspect of your website is optimized for performance, security, and scalability.
                    </p>
                </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="service-style-one col-lg-4 col-md-6">
                <div class="service-style-one-item">
                    <img src="assets/img/icon/2.png" alt="Icon">
                    <h4>Consultation</h4>
                    <p>
                        I can help you identify and achieve your business goals through customized solutions. Whether you need guidance on architecture, user experience design or technology stack selection,  With my expertise in development technologies, I can provide insights and recommendations that are tailored to your specific needs
                    </p>
                </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="service-style-one col-lg-4 col-md-6">
                <div class="service-style-one-item">
                    <img src="assets/img/icon/4.png" alt="Icon">
                    <h4>Project Management</h4>
                    <p>
                        I specialize in overseeing Software development projects from start to finish, ensuring that they are delivered on time, within budget, and to the highest quality standards. With my expertise in project management methodologies and tools, I can help you plan, organize, and execute your projects efficiently and effectively. 
                    </p>
                </div>
            </div>
            <!-- End Single Item -->
        </div>
    </div>
    

    <!-- Start Services Single Modal -->
    
    <!-- End Services Single Modal -->

</div>
<!-- End Services -->

<!-- Start Portfolio 
============================================= -->
<div id="portfolio" class="portfolio-style-six-area default-padding-top">
    <div class="shape-animated-right">
        <img src="assets/img/shape/1.webp" alt="Shape">
    </div>
    
    <div class="container">
        <div class="heading-left">
            <div class="row align-center">
                <div class="col-lg-5">
                    <div class="left-info">
                        <h5 class="sub-title">Recent Work</h5>
                        <h2 class="title">A small gallery of recent projects.<br> It's only a drop in the ocean comapred to the entire list </h2>
                        <div class="heading-shape">
                            <img src="assets/img/shape/10.png" alt="Shape">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="right-info">
                        <div class="fun-factor-default">
                            <div class="fun-fact">
                                <div class="counter">
                                    <p>+</p><div class="timer" data-to="200" data-speed="2000">200</div>
                                    <!-- <div class="operator">K</div> -->
                                </div>
                                <span class="medium">Completed Project</span>
                            </div>
                            <div class="fun-fact">
                                <div class="counter">
                                    <div class="timer" data-to="94" data-speed="2000">94</div>
                                    <div class="operator">%</div>
                                </div>
                                <span class="medium">Positive Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 gallery-content mb--15">
                <div class="magnific-mix-gallery masonary">
                    <div id="portfolio-grid" class="gallery-items colums-3">
                        <!-- Single Item -->
                        <div class="pf-item">
                            <div class="overlay-content">
                                <img src="assets/img/portfolio/9.png" alt="thumb">
                                <div class="content">
                                    <div class="title">
                                        <span>Trading Terminal</span>
                                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal1"> Web Developemt </a></h5>
                                    </div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal1"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                        <!-- Single Item -->
                        <div class="pf-item">
                            <div class="overlay-content">
                                <img src="assets/img/portfolio/11.png" alt="thumb">
                                <div class="content">
                                    <div class="title">
                                        <span>Client CRM</span>
                                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal2">Web Development</a></h5>
                                    </div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal2"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                        <!-- Single Item -->
                        <div class="pf-item">
                            <div class="overlay-content">
                                <img src="assets/img/portfolio/12.png" alt="thumb">
                                <div class="content">
                                    <div class="title">
                                        <span>Logistics</span>
                                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal3">Business Apps</a></h5>
                                    </div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal3"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                        <!-- Single Item -->
                        <div class="pf-item">
                            <div class="overlay-content">
                                <img src="assets/img/portfolio/14.png" alt="thumb">
                                <div class="content">
                                    <div class="title">
                                        <span>Crypto Currency</span>
                                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal4">Web Development</a></h5>
                                    </div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal4"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                        
                        <!-- Single Item -->
                        <div class="pf-item">
                            <div class="overlay-content">
                                <img src="assets/img/portfolio/13.png" alt="thumb">
                                <div class="content">
                                    <div class="title">
                                        <span>Community Service</span>
                                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal5">Web Development</a></h5>
                                    </div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal5"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- Single Item -->
                        <!-- Single Item -->
                        <div class="pf-item">
                            <div class="overlay-content">
                                <img src="assets/img/portfolio/10.png" alt="thumb">
                                <div class="content">
                                    <div class="title">
                                        <span>Contruction</span>
                                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal6">Website Design</a></h5>
                                    </div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal6"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Start Projects Single Modal1 -->
    <div class="modal fade" id="projectSingleModal1" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="project-details-items">
                        <div class="project-thumb">
                            <img src="assets/img/portfolio/9.png" alt="Thumb">
                        </div>
                        <div class="top-info">
                            <div class="row">
                                <div class="col-xl-12 left-info">
                                    <div class="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div class="content">
                                            <ul class="project-basic-info">
                                                <li>
                                                    Client <span>Neptunefx</span>
                                                </li>
                                                <li>
                                                    Project Type <span>Web Developmet</span>
                                                </li>
                                                <li>
                                                   Project URL <span><a href="https://tradestation.neptunefx.net">tradestation.neptunefx.net</a></span>
                                                </li>
                                                <li>
                                                    City <span>London, United Kingdom</span>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
        
                        <div class="main-content mt-40">
                            
                           
                            <!-- <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/portfolio/99.png" alt="Thumb">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/thumb/2.jpg" alt="Thumb">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Projects Single Modal1 -->

     <!-- Start Projects Single Modal2 -->
     <div class="modal fade" id="projectSingleModal2" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="project-details-items">
                        <div class="project-thumb">
                            <img src="assets/img/portfolio/11.png" alt="Thumb">
                        </div>
                        <div class="top-info">
                            <div class="row">
                                <div class="col-xl-12 left-info">
                                    <div class="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div class="content">
                                            <ul class="project-basic-info">
                                                <li>
                                                    Client <span>Neptunefx</span>
                                                </li>
                                                <li>
                                                    Project Type <span>Web Developmet</span>
                                                </li>
                                                <li>
                                                   Project URL <span><a href="https://crm.neptunefx.net">https://crm.neptunefx.net</a></span>
                                                </li>
                                                <li>
                                                    City <span>London, United Kingdom</span>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
        
                        <div class="main-content mt-40">
                            
                           
                            <!-- <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/portfolio/99.png" alt="Thumb">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/thumb/2.jpg" alt="Thumb">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Projects Single Modal2 -->

 <!-- Start Projects Single Modal3 -->
 <div class="modal fade" id="projectSingleModal3" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="project-details-items">
                        <div class="project-thumb">
                            <img src="assets/img/portfolio/12.png" alt="Thumb">
                        </div>
                        <div class="top-info">
                            <div class="row">
                                <div class="col-xl-12 left-info">
                                    <div class="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div class="content">
                                            <ul class="project-basic-info">
                                                <li>
                                                    Client <span>Eagle Logistics Inc.</span>
                                                </li>
                                                <li>
                                                    Project Type <span>Web Developmet</span>
                                                </li>
                                                <li>
                                                   Project URL <span><a href="https://eagleshipment.com">https://eagleshipment.com</a></span>
                                                </li>
                                                <li>
                                                    City <span>Chicago, USA</span>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
        
                        <div class="main-content mt-40">
                            
                           
                            <!-- <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/portfolio/99.png" alt="Thumb">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/thumb/2.jpg" alt="Thumb">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Projects Single Modal3 -->


<!-- Start Projects Single Modal4 -->
<div class="modal fade" id="projectSingleModal4" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="project-details-items">
                        <div class="project-thumb">
                            <img src="assets/img/portfolio/14.png" alt="Thumb">
                        </div>
                        <div class="top-info">
                            <div class="row">
                                <div class="col-xl-12 left-info">
                                    <div class="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div class="content">
                                            <ul class="project-basic-info">
                                                <li>
                                                    Client <span>Lentrade.org</span>
                                                </li>
                                                <li>
                                                    Project Type <span>Web development</span>
                                                </li>
                                                <li>
                                                   Project URL <span><a href="https://lentoken.com/">https://lentoken.com/</a></span>
                                                </li>
                                                <li>
                                                    City <span>Berlin, Germany</span>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
        
                        <div class="main-content mt-40">
                            
                           
                            <!-- <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/portfolio/99.png" alt="Thumb">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/thumb/2.jpg" alt="Thumb">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Projects Single Modal4 -->


<!-- Start Projects Single Modal5 -->
<div class="modal fade" id="projectSingleModal5" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="project-details-items">
                        <div class="project-thumb">
                            <img src="assets/img/portfolio/13.png" alt="Thumb">
                        </div>
                        <div class="top-info">
                            <div class="row">
                                <div class="col-xl-12 left-info">
                                    <div class="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div class="content">
                                            <ul class="project-basic-info">
                                                <li>
                                                    Client <span>Toyyibah Associated Limited</span>
                                                </li>
                                                <li>
                                                    Project Type <span>Web Development</span>
                                                </li>
                                                <li>
                                                   Project URL <span><a href="http://247artisan.com/">http://247artisan.com</a></span>
                                                </li>
                                                <li>
                                                    City <span>Lagos, Nigeria</span>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
        
                        <div class="main-content mt-40">
                            
                           
                            <!-- <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/portfolio/99.png" alt="Thumb">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/thumb/2.jpg" alt="Thumb">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Projects Single Modal5 -->



 <!-- Start Projects Single Modal6 -->
 <div class="modal fade" id="projectSingleModal6" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="project-details-items">
                        <div class="project-thumb">
                            <img src="assets/img/portfolio/10.png" alt="Thumb">
                        </div>
                        <div class="top-info">
                            <div class="row">
                                <div class="col-xl-12 left-info">
                                    <div class="project-info mt-md-50 mt-xs-40 mb-40">
                                        <div class="content">
                                            <ul class="project-basic-info">
                                                <li>
                                                    Client <span>Toyyibah Associated Limited</span>
                                                </li>
                                                <li>
                                                    Project Type <span>Web Design</span>
                                                </li>
                                                <li>
                                                   Project URL <span><a href="http://toyyibah.com/">http://toyyibah.com</a></span>
                                                </li>
                                                <li>
                                                    City <span>Lagos, Nigeria</span>
                                                </li>
                                            </ul>
                                        
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
        
                        <div class="main-content mt-40">
                            
                           
                            <!-- <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/portfolio/99.png" alt="Thumb">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/thumb/2.jpg" alt="Thumb">
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Projects Single Modal6 -->
    









</div>
<!-- End Portfolio -->

<!-- Start About 
============================================= -->
<div id="about" class="about-style-six-area default-padding-top">
    <div class="container">
        <div class="row align-center">
            <div class="about-style-six col-lg-5">
                <div class="thumb">
                    <img class="wow fadeInUp" src="assets/img/illustration/3.png" alt="Thumb">
                </div>
            </div>
            <div class="about-style-six col-lg-6 offset-lg-1">
                <h4 class="sub-title">About Me</h4>
                <!-- <h2 class="title">I can develop <br> that help people</h2> -->
                <p>
                    I'm Oluwagbenga Ojo, but you can call me Greatmax. With over 7 years of experience in full-stack development, I've built everything from regular websites and dashboards to complex applications and open source libraries. My expertise spans across various stacks such as Laravel, PHP, JavaScript, Vue.js, Nuxt.js, HTML, CSS, Bootstrap, Python, REST API, WebSockets, Web3, AWS, and more.
                </p>
                <p>
                    One of my strongest qualities as a developer is my ability to write clean and modern code that's both fast and maintainable. I take pride in my work and always strive to exceed expectations, whether it's meeting tight deadlines or collaborating closely with clients to understand their vision and deliver high-quality solutions.
                </p>
                <p>If you're looking for a reliable and skilled developer who's passionate about building great products, then look no further. Let's work together to bring your ideas to life!</p>
                
                <!-- <div class="skill-list">
                    <ul>
                        <li>
                            <div class="icon">
                                <i class="fab fa-wordpress"></i>
                            </div>
                            <div class="content">
                                <h4>Professional WordPress Developer</h4>
                                <span>Top Rated – Upwork</span>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div class="content">
                                <h4>Senior HTML Developer</h4>
                                <span>Level Two Seller -  Fiverr</span>
                            </div>
                        </li>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>
</div>
<!-- End About -->

<!-- Start Resume 
============================================= -->
<div id="resume" class="resume-area default-padding-top">
    <div class="shape-right-top-extra">
        <img src="assets/img/shape/14.png" alt="Shape">
    </div>
    <div class="container">
        <div class="experience-content-box">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">

                    <div class="nav nav-tabs text-center resume-tab-navs" id="nav-tab" role="tablist">

                        <button class="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                            Biography <strong>01</strong>
                        </button>
                        <button class="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                            Skills <strong>02</strong>
                        </button>
                        <button class="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                            Education <strong>03</strong>
                        </button>

                    </div>

                    <div class="tab-content resume-tab-content" id="nav-tabContent">
                        <!-- Single Item -->
                        <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="biography-table">
                                        <li>
                                            <h5>Name</h5>
                                            <p>
                                                Oluwagbenga Ojo
                                            </p>
                                        </li>
                                        <li>
                                            <h5>LinkedIn</h5>
                                            <p>
                                                <a href="https://www.linkedin.com/in/oluwagbenga-ojo/"> @oluwagbenga-ojo</a>
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Age</h5>
                                            <p>
                                                27
                                            </p>
                                        </li>
                                        <li>
                                            <h5>City</h5>
                                            <p>
                                                Lagos
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Email</h5>
                                            <p>
                                               techgbenga@gmail.com
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Phone</h5>
                                            <p>
                                               <a href="tel+2349034222932"> +2349034222932</a>
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Twitter</h5>
                                            <p>
                                                <a target="_blank" href="https://twitter.com/Greatmax_main"> @Greatmax_main</a>
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Freelance</h5>
                                            <p>
                                                Available
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->

                        <!-- Single Item -->
                        <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                            <div class="row align-center">
                                <div class="col-lg-12">
                                    <ul class="skill-table">
                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-laravel"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Laravel</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>85%</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" data-width="85"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-python"></i>
                                                       
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Python</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>81%</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" data-width="81"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-js"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Javascript</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>84%</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" data-width="84"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-vuejs"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Vue js</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>85%</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" data-width="85"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-js"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Nuxt js</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>83%</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" data-width="83"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-php"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>PHP</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>90%</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" data-width="90"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="row align-center">
                                                <div class="col-lg-2">
                                                    <div class="icon">
                                                        <i class="fab fa-html5"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <h4>Advance frontend development</h4>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="progress-box">
                                                        <h5>92%</h5>
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" data-width="92"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->

                        <!-- Single Item -->
                        <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="education-table">
                                        <li>
                                            <h4>B. Tech in  Software Engineering</h4>
                                            <h5>Federal University of Technology Akure</h5>
                                            <span>2018 - 2023</span>
                                            <p>
                                                A degree program focused on software design and development, equipping graduates with the knowledge and skills necessary for a career in software engineering. 
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Diploma in Website Development</h4>
                                            <h5>Federal Ministry of Information & Communications </h5>
                                            <span>2015 - 2016</span>
                                            <p>
                                                This training provided students with a solid foundation in web technologies and helped develop practical skills in designing, building, and deploying websites using industry-standard tools and frameworks.
                                            </p>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->


                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Resume -->

<!-- Start Pricing 
============================================= -->
<!-- <div id="pricing" class="pricing-area default-padding-top">
    <div class="container">
        <div class="pricing-box">
            <div class="row">
                <div class="col-lg-5">
                    <div class="heading-left">
                        <div class="left-info">
                            <h5 class="sub-title">Pricing</h5>
                            <h2 class="title">The best pricing plans <br> to get your best</h2>
                            <div class="heading-shape">
                                <img src="assets/img/shape/10.png" alt="Shape">
                            </div>
                        </div>
                    </div>
                    <div class="save-ammount mt-100 mt-md-50">
                        <h4>Save up to <strong>50%</strong> with your every order</h4>
                        <img src="assets/img/shape/2.webp" alt="Thumb">
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="pricing-style-one">
                        <div class="conntent">
                            <h4>WordPress Development</h4>
                            <ul>
                                <li>1 Page with Elementor</li>
                                <li>Design Customization</li>
                                <li>Responsive Design</li>
                            </ul>
                            <a class="btn mt-25 btn-sm circle btn-theme" href="#contact">Order Now</a>
                        </div>
                        <div class="price">
                            <h2><sup>$</sup>48</h2>
                            <i class="fab fa-wordpress"></i>
                        </div>
                    </div>
                    <div class="pricing-style-one">
                        <div class="conntent">
                            <h4>Static frontend design</h4>
                            <ul>
                                <li>2 Page with Bootstrap5</li>
                                <li>Design implement</li>
                                <li>Responsive Design</li>
                            </ul>
                            <a class="btn mt-25 btn-sm circle btn-dark" href="#contact">Order Now</a>
                        </div>
                        <div class="price">
                            <h2><sup>$</sup>24</h2>
                            <i class="fab fa-html5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->
<!-- End Pricing Area -->

<!-- Start Brand
============================================= -->
<div class="brand-style-one-area text-center default-padding-top">
    <div class="container">
        <div class="brand-style-one">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand5col swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper align-center">
                            <!-- Single Item -->
                            <div class="swiper-slide">
                                <img src="assets/img/logo/6.png" alt="Thumb">
                            </div>
                            <!-- End Single Item -->
                            <!-- Single Item -->
                            <div class="swiper-slide">
                                <img src="assets/img/logo/7.png" alt="Thumb">
                            </div>
                            <!-- End Single Item -->
                            <!-- Single Item -->
                            <div class="swiper-slide">
                                <img src="assets/img/logo/8.png" alt="Thumb">
                            </div>
                            <!-- End Single Item -->
                            <!-- Single Item -->
                            <div class="swiper-slide">
                                <img src="assets/img/logo/9.png" alt="Thumb">
                            </div>
                            <!-- End Single Item -->
                            <!-- Single Item -->
                            <div class="swiper-slide">
                                <img src="assets/img/logo/10.png" alt="Thumb">
                            </div>
                            <!-- End Single Item -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Brand -->
        </div>
    </div>
</div>
<!-- End Brand -->



<!-- Start Available 
============================================= -->
<div class="work-available-area text-center box-layout bg-light default-padding">
    <div class="shape-right-top-mini">
        <img src="assets/img/shape/16.png" alt="illustration">
    </div>
    <div class="shape-illustration">
        <img src="assets/img/illustration/2.png" alt="illustration">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="work-available">
                    <h2 class="title">I'm <strong>available</strong> for <br> freelance work</h2>
                    <a class="btn btn-md circle btn-theme smooth-menu" href="#contact">Hire me now</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Available -->



<!-- Start Contact Area 
============================================= -->
<div id="contact" class="contact-area shape-less default-padding overflow-hidden">
    <h2 class="text-shade">Contact</h2>
    <div class="container">
        <div class="contact-content">
            <div class="row align-center">

                


                <div class="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                    <div class="form-box">
                        <h2>Leave a Message? </h2>
                        <!-- <p>
                            It's all about the humans behind a brand and those experiencing it, br we're right there. In the middle performance quick.
                        </p> -->
                        <form ref="form" @submit.prevent="sendEmail">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input class="form-control" name="name" id="name" v-model="name" placeholder="Name" type="text">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input class="form-control" name="emil" id="email" v-model="email" placeholder="Email*" type="email">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input class="form-control" name="phone" id="phone" v-model="phone" placeholder="Phone" type="text">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group comments">
                                        <textarea class="form-control" name="message" id="message" v-model="message" placeholder="About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <button type="submit" name="submit" id="send">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                            <!-- Alert Message -->
                            <div class="col-lg-12 alert-notification">
                                <div id="message" class="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-4 offset-lg-1 info">
                    <div class="content">
                        <ul>
                            <li class="contact-info-list wow fadeInUp">
                                <div class="icon">
                                    <i class="fas fa-envelope-open-text"></i>
                                </div>
                                <div class="info">
                                    <p>Email</p>
                                    <h5>
                                        <a href="mailto:techgbenga@gmail.com">techgbenga@gmail.com</a> 
                                        <br> 
                                        <a href="mailto:greatmax@shadownetsolutions.com">greatmax@shadownetsolutions.com</a>
                                    </h5>
                                </div>
                            </li>
                            <li class="contact-info-list wow fadeInUp" data-wow-delay="300ms">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="info">
                                    <p>Address</p>
                                    <h5>
                                        21 Road, <br> Festac, <br> Lagos
                                    </h5>
                                </div>
                            </li>
                            <li class="contact-info-list wow fadeInUp" data-wow-delay="500ms">
                                <div class="icon">
                                    <i class="fas fa-headphones-alt"></i>
                                </div>
                                <div class="info">
                                    <p>Phone</p>
                                    <h5>
                                        <a href="tel:+2349034222932">+2349034222932</a> 
                                        <!-- <br><a href="tel:+4733378901">+99-34-8878-9989</a> -->
                                    </h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<!-- End Contact Area -->

<!-- Start Footer 
============================================= -->
<footer class="bg-dark text-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <ul class="footer-social">
                    <li class="linkedin">
                        <a target="_blank" href="https://www.linkedin.com/in/oluwagbenga-ojo/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="twitter">
                        <a target="_blank" href="https://twitter.com/Greatmax_main">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="github">
                        <a target="_blank" href="https://github.com/Greatmax017">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-6 text-end">
                <p>&copy; 2023 Shadownet Solutions. All Rights Reserved</p>
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->

</template>

