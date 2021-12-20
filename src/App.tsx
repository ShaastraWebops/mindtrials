import React, { useRef } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import particlesCOnfig from "./particles.json"
import mtLogo from "./images/mtLogo.png"
import shaastraLogo from "./images/shaastraLogo.svg"
import postOne from "./images/Slide2 .png"
import postTwo from "./images/Slide4 .png"
import postThree from "./images/Slide6 .png"
import iben from "./images/IBEN logo.jpeg"
import left from "./images/loadLeft.webp"
import right from "./images/loadRight.webp"
import christina from "./images/christina.png"
import junofy from "./images/junofy.png"
import upskill from "./images/UpSkill Logo vector.png"
import step from "./images/STeP_Logo_Black-01.png"
import relaunch from "./images/relaunch.png"
import gramalaya from "./images/gramalaya.png"
import csbc from "./images/csbc.png"
import gram1 from "./images/gram1.jpeg"
import gram2 from "./images/gram2.png"
import gram3 from "./images/gram3.jpg"
import gram4 from "./images/gram4.jpg"
import gram5 from "./images/gram5.jpeg"
import gram6 from "./images/gram6.jpeg"
import gram7 from "./images/gram7.jpeg"
import gramSurvey from "./images/gramSurvey.png"
import gramPlay from "./images/gramPlay.jpeg"
import gramDemo from "./images/gramDemo.jpeg"
import gramAward from "./images/gramAward.jpg"
import barGraph from "./images/barGraph.svg"
import gramPaintVideo from "./images/video/gramPaint.mp4" 

import {Flex, Image, Grid, GridItem, Box, Heading, Text, ChakraProvider} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons';
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"

import { Autoplay } from 'swiper/core';
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/swiper-bundle.css';
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Scrollbar, Keyboard } from 'swiper/core';

import Typewriter from 'typewriter-effect';

import {script, load} from "./script"

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow, Keyboard, Autoplay]);

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})
interface Props {}
function App(props: Props) {
  script();
  load();

  return (
    <div className="body">
      <Particles id="particles-js" params={particlesCOnfig} />
      <Flex position="absolute" top="0" left="0" width="100vw" height="100vh" alignItems="center" className="load-flex" zIndex="10">
      <div className="load-slide-left"><Image src={left} position="absolute" objectFit="contain" width="50vw" height="100vh" left="10vw"></Image></div>
        <div className="load-slide-right"><Image src={right} width="50vw" height="100vh" objectFit="contain" position="absolute" right="10vw"></Image>
        <a href='https://www.freepik.com/vectors/school'>School vector created by macrovector_official - www.freepik.com</a></div>
      </Flex>
      <header hidden>
        <Flex width="20vw" justifyContent="space-between" alignItems="center" className="header-image" padding="0.5vw" marginLeft="2vw">
          <a href="#landing"><Image src={mtLogo} boxSize="3.5vw" width="fit-content"></Image></a>
        </Flex>
        <Flex width="80vw" justifyContent="space-between" alignItems="center" padding="0vw 2vw"  className="header-menu">
          <a href="#aboutus">ABOUT US</a>
          <a href="#events">EVENTS</a>
          <a href="#partners">PARTNERS</a>
          <a href="#prev">PREVIOUS INITIATIVES</a>
          <a href="#contact">CONTACT US</a>
        </Flex>
      </header>
      <section id="landing" className="landing">
      <Image src={shaastraLogo} boxSize="8vw"></Image>
          <h1>MIND TRIALS</h1>
          <Typewriter
            options={{
              strings: ['Why do we think the way we do?', 'Why do we take mental shortcuts?', 'Why do we support opinions as they become more popular?'
            , 'Why do we find thinking out-of-the-box so difficult?'],
              autoStart: true,
              loop: true,
            }}
          />
          <Grid rowGap="1vw" textAlign="center" marginTop="4vw" className="home-btns">
            <GridItem padding="1vw"backgroundColor="rgb(23, 16, 53)" color="white" borderRadius="25px"><a href="#aboutus">EXPLORE</a></GridItem>
            <GridItem padding="1.5vw" backgroundColor="rgb(23, 16, 53)" color="white" borderRadius="15px">
               <b><a href="https://dare2compete.com/competition/nudge-it-shaastra-2022-indian-institute-of-technology-iit-madras-194510?lb=VO6N4Bx" target="_blank">Click Here</a></b> <br /> To know more about NUDGE-IT
            </GridItem>
          </Grid>
      </section>
      <section id="aboutus" className="aboutus">
        <h1>ABOUT US</h1>
      </section>
      <section>
        <div className="aboutus-info">
        <div className="shaastra">
        <h2>MIND TRIALS</h2>
            <p>Science suggests we’re hardwired to deceive ourselves. <br /> Do we have a way out? <br />
              <br />Mind Trials, an initiative of Shaastra 2022, sets out to explore the domain of Behavioral Science and its 
              potential in influencing the way we think and act in the real world. We are powered by a passion to generate solutions 
              inspired by Behavioural Design in tackling some of the pressing social issues that plague the nation. <br /><br />
              Alongside, we seek to alert the public to some dangerous fallouts of the many mental shortcuts we all use to get 
              through everyday lives. For the coming months, we have in store diverse events and campaigns catering to anyone even 
              remotely interested in making a qualitative change to their life and decisions.  <br /><br />
              Shaastra Mind Trials welcomes you to join us on our enterprise to make meaningful social change, one behavioural 
              solution at a time.
            </p>
        </div>
        <div className="mt">
        <h2>SHAASTRA</h2>
            <p>Shaastra is the annual technical festival of Indian Institute of Technology Madras. The festival is traditionally held 
              over four days and four nights during the first week of January. Being the first in the world to be ISO
              certified and completely student run with a footfall of over 50,000, Shaastra 
              stands out from the rest in being the largest and one of the most unique tech 
              festivals ever celebrated in India and the world. All of this is fuelled by our 
              seamless passion: the “Spirit of Engineering”.  <br /><br />
              We, at Shaastra, believe in Innovation. To truly achieve this goal, every year we have a brand-new department formed with 
              the sole intention of breaking thresholds and moving forward. In light of that, this year, we, at Mind Trials, aspire to bring 
              about a change in the society through behavioral science and create awareness about the same. 
            </p>
        </div>
        <div className="bs">
          <h2>BEHAVIORAL SCIENCE</h2>
          <p>We now know that people often fail - in shockingly predictable ways - to act in their own best interests. The young and 
            fledgling domain of Behavioral science steps in to explain and tweak this irrationality inherent in our minds, for the 
            better. <br /> <br />
            From nudging people towards socially optimal choices to guiding international welfare and sustainability strategies, 
            the vast realm of behavioural science has a track record of driving changes in diverse arenas spanning environment, 
            preventive health, diversity and inclusion, financial well-being and much more. <br /><br />
            Fuelled by a deep understanding of human behaviour, this field helps design and execute plans tailor-made to tackle the 
            imperfections of the world out there. <br /><br /> Find fascinating initiatives in Behavioural Science below.
          </p>
        </div>
        </div>
      

        <div className="bs-wrapper-flex">
        <Flex flexDirection="column" className="bs-flex one">
            <div className="flip-card">
            <div className="flip-card-inner">
              <a href="https://warwick.ac.uk/research/priorities/behaviour-brain-society/research/wbit/" target="_blank">
                <div className="flip-card-front">
                  <h2>WARWICK BEHAVIOURAL INSIGHTS TEAM SUMMIT</h2>
                </div>
              </a>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <a href="https://www.worldbank.org/en/programs/embed" target="_blank">
                <div className="flip-card-front">
                  <h2>WORLD BANK MIND BEHAVIOR AND DEVELOPMENT (eMBeD) TEAM</h2>
                </div>
                </a>
              </div>
            </div>
          </Flex>
          <Flex flexDirection="column" className="bs-flex two">
            <div className="flip-card">
              <div className="flip-card-inner">
                <a href="https://www.ideas42.org/wp-content/uploads/2018/04/Project-Brief_Offering-Rewards-to-Safe-Drivers.pdf" target="_blank">
                <div className="flip-card-front">
                  <h2>Reducing road fatalities through loss aversion in South Africa <br /><br />  AN IDEAS42 STUDY</h2>
                </div>
                </a>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <a href="https://www.ideas42.org/wp-content/uploads/2019/04/I42-1020_ABPaper_FINAL-DIGITAL.pdf" target="_blank">
                <div className="flip-card-front">
                  <h2>Increasing saving deposits in the Philippines <br /><br />  AN IDEAS42 STUDY</h2>
                </div>
                </a>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <a href="https://www.nudgestock.co.uk/" target="_blank">
                <div className="flip-card-front">
                  <h2>NUDGESTOCK 2021</h2>
                </div>
                </a>
              </div>
            </div>
          </Flex>
          <Flex flexDirection="column" className="bs-flex three">
            <div className="flip-card">
              <div className="flip-card-inner">
                <a href="https://iben.co.in/" target="_blank">
                <div className="flip-card-front">
                  <h2>INDIA BEHAVIOURAL ECONOMICS NETWORK</h2>
                </div>
                </a>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <a href="https://livinggoods.org/what-we-do/mhealth/" target="_blank">
                <div className="flip-card-front">
                  <h2>Digital health tools and the Pandemic <br /><br />  in BUSIA, THIKA by LIVING GOODS AND MEDIC</h2>
                </div>
                </a>
              </div>
            </div>
          </Flex>
        </div>
      </section>
      <section id="events" className="events">
        <h1>EVENTS</h1>
        
        <a href='https://www.freepik.com/vectors/people' target={"_blank"}>Created by rawpixel.com - www.freepik.com</a>
      </section>
      <section className="events-info">
        <div className="survey-div"> 
          <h2>SURVEY</h2>
          <Flex flexDirection="row" justifyContent="space-between" alignItems="center" className="survey-flex">
            <p className="survey-info"><em>Do your <b>decisions</b> depend on how <b>options are presented</b> to you?</em> <br />
              <em>Do you have a <b>harder time choosing</b> when you have <b>more options</b> ?</em> <br />
              <em>Do you place a disproportionately <b>high value</b> on things <b>you helped create</b> ?</em> <br /><br />
              In a routine conversation with your friend, in the short five seconds before you skip ads on youtube, or in making the 
              biggest or most trivial decisions in life, you are under the influence of a Biased mind. <br /><br />
              <em>Find yourself shaking your head in disagreement?</em> <br /><br />
              <em> Or are you curious to know how you often get tricked by your own brain?</em> <br /><br />
              Either way, we ran a survey designed to capture the quirks of human behaviour in a fun, exciting 10-minute experiment. 
              And here is what we found. 
              <br /><br />
              <div className="button mt-link">
                <em><a href="https://www.instagram.com/p/CSErBpMo9ar/?utm_source=ig_web_button_share_sheet" target="_blank">Check out our instagram post</a> <ChevronRightIcon></ChevronRightIcon> </em>
              </div>
              </p>
              <Swiper 
                pagination={{clickable: true}}
                centeredSlides={true}
                className="surveySwiper"
                breakpoints={
                  {
                    1100: {
                      direction: "vertical",
                    },
                    200: {
                      direction: "horizontal",
                  }
                }
                }
              >
                <SwiperSlide>
                  <Image src={postOne} boxSize="22vw"></Image>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={postTwo} boxSize="22vw" ></Image>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={postThree} boxSize="22vw"></Image>
                </SwiperSlide>
              </Swiper>
          </Flex>
        </div>
        <div className="theme-reveal">
          <h2>HEURISTICALLY SPEAKING</h2>
          <Flex width="80vw" margin="0 auto" className="theme-flex" justifyContent="center" alignItems="center">
            <p>Clouded by biases, we not only make the less optimal choices but also remain blind to the irrationality of our actions. 
                <br /><br />
                Building on the results of our Survey, we invited our audience to a participatory session involving multiple experiments 
                and group activities designed to alert people to the blind spots in our behavioural responses.  <br /><br />
                This two-hour session on Cognitive Biases also saw the audience engage with <b>Dr. Christina Gravert</b>.
                The event was concluded with a talk by <b>Dr. Junofy Anto Rozarina</b> and the annoucement of the case study competition.
                Prefaced by a short segue to the field and its relevance today, the event cemented Mind Trials’ commitment to 
                popularising the use of Behavioural Science for social good. 
                <br /> <br />
                <div className="button mt-link">
                  <em><a href="https://youtu.be/qCEMRPA_tpE" target={"_blank"}>Check out the event</a> <ChevronRightIcon></ChevronRightIcon> </em>
                </div>
              </p>
            <Flex width="40%" flexDirection="column" justifyContent="space-between" margin="auto" alignItems="center" height="100%" className="theme-pic-flex">
              <Image src={christina} width="24vw" height="auto" margin="2vh 0"></Image>
              <Image src={junofy} width="24vw" height="auto" margin="2vh 0"></Image>
            </Flex>
          </Flex>
        </div>
        <div className="competition">

          <h2>NUDGE-IT</h2>
          <Flex justifyContent="space-between" className="competition-flex">
            <p>Staying committed to our mission of using Behavioural insights for the public good, Mind Trials invites you to join us in 
              our two-month-long nudge-developing programme spanning three parallel tracks, wherein select solutions from the event will 
              be implemented in the real world and tested for their efficacy. <br /><br />
              Organized in collaboration with the India Behavioural Economics Network (IBEN), a leading behavioural science organization 
              in India, the programme shall focus on bringing together students and professionals passionate about this field to innovate 
              and create practical solutions in our three focus sectors: <b>NUTRITION</b>, <b>SANITATION</b> and <b>ROAD SAFETY</b>. <br /><br /> 
              The winners of the competition would not only get to see their suggestions implemented in real-time but will also be invited 
              to Shaastra 2022 to present their solutions to the industry, academia and general public.  
              <br /> <br />
              <div className="button mt-link">
              <em><a href="https://youtube.com/playlist?list=PLT4Wldw_lvk0wVSDc0z1Q3eIGOFvJs3pa" target="_blank">Check out the workshop</a> <ChevronRightIcon></ChevronRightIcon> </em>
              </div>
            </p>
              <Flex flexDirection="column" className="competition-pts" justifyContent="space-between" margin="4vw 0" width="34vw">
                  <div>Behavioural Design introductory Workshop</div>
                  <div>Two-round case-study competition</div>
                  <div>Personalised mentorship for finalists</div>
                  <div>Implementation of winner's solutions</div>
                  <div>Presentation at Shaastra</div>
              </Flex>
          </Flex>
            <Flex className="timeline-wrapper" justifyContent="space-between" >
                  <Flex flexDirection="column" height="20vw" width="15vw" alignItems="center" className="timeline" justifyContent="center">
                    <p>REGISTRATION CLOSES</p>
                    <p className="timeline-date">Sept 18</p>
                  </Flex>
                  <Flex flexDirection="column" height="20vw" width="15vw"  alignItems="center" className="timeline" justifyContent="center">
                    <p>ROUND 1 ENDS</p>
                    <p className="timeline-date">Sept 30</p>
                  </Flex>
                  <Flex flexDirection="column" height="20vw" width="15vw"  alignItems="center" className="timeline" justifyContent="center">
                    <p>ROUND 2 ENDS</p>
                    <p className="timeline-date">Oct 31</p>
                  </Flex>
                  <Flex flexDirection="column" justifyContent="center" height="20vw" width="15vw"  alignItems="center" className="timeline">
                    <p>IMPLEMENTATION</p>
                    <p className="timeline-date">Nov 1</p>
                 </Flex>
                 <Flex flexDirection="column" justifyContent="center" height="20vw" width="15vw"  alignItems="center" className="timeline">
                    <p>SHAASTRA</p>
                    <p className="timeline-date">Jan 13 - Jan 16</p>
                 </Flex>
            </Flex>
            <div className="button">
              <a href="https://dare2compete.com/competition/nudge-it-shaastra-2022-indian-institute-of-technology-iit-madras-194510?lb=olKRCDy" target="_blank">VIEW MORE</a>
              </div>
            <Box className='impli' marginTop={"10vh"}>
              <Box position="relative" marginBottom={"2vh"}>
                <Swiper
                  slidesPerView={1}
                  autoplay={{delay: 1500}}
                >
                  <SwiperSlide><Image borderRadius={"24px"} width="80vw" height={"80vh"} objectFit={"cover"} src={gram1}></Image></SwiperSlide>
                  <SwiperSlide><Image borderRadius={"24px"} width="80vw" height="80vh" objectFit={"cover"} src={gram2}></Image></SwiperSlide>
                  <SwiperSlide><Image borderRadius={"24px"} width="80vw" height="80vh" objectFit={"cover"} src={gram3}></Image></SwiperSlide>
                  <SwiperSlide><Image borderRadius={"24px"} width="80vw" height="80vh" objectFit={"cover"} src={gram4}></Image></SwiperSlide>
                  <SwiperSlide><Image borderRadius={"24px"} width="80vw" height="80vh" objectFit={"cover"} src={gram5}></Image></SwiperSlide>
                  <SwiperSlide><Image borderRadius={"24px"} width="80vw" height="80vh" objectFit={"cover"} src={gram6}></Image></SwiperSlide>
                  <SwiperSlide><Image borderRadius={"24px"} width="80vw" height="80vh" objectFit={"cover"} src={gram7}></Image></SwiperSlide>
                </Swiper>
                <Box zIndex={1} borderRadius={"24px"} position="absolute" top="0" left="0" content="" backgroundColor={"rgba(0, 0, 0, 0.6)"} width="80vw" height="80vh"></Box>
                <Flex backdropBlur={"30px"} flexDirection={"column"} color="white" zIndex={2} borderRadius={"24px"} position="absolute" top="0" left="0" justifyContent={"center"} alignItems={"center"} width="80vw" height="80vh">
                  <Heading marginBottom="2vh">Nudge In Action</Heading>
                  <Flex className='impli-small-text' fontSize={["4vw","1.5vw"]} justifyContent={"center"}><em>the implementation initiative of Mind Trials</em></Flex>
                </Flex>
              </Box>
              <Flex fontWeight={"bold"} width="100%" justifyContent={"flex-end"} color="black" marginBottom={"4vh"}>
                <div className='link'>
                  <em> <a href="https://www.instagram.com/p/CXpl4BNPfU3/?utm_source=ig_web_copy_link" target="_blank">Check out our instagram post</a> <ChevronRightIcon></ChevronRightIcon></em>
                </div>
              </Flex>
              <Text backdropBlur={"30px"} position={"relative"} width="90vw" textAlign="center" margin="auto" className='impli-intro'> 
                  With a goal to ensure better sanitation practices, Mind Trials collaborated with Gramalaya - 
                  a well accomplished NGO in the realm of sanitation in southern India, having turned villages and 
                  slums into open-defecation free areas, to implement the solutions from Nudge-It. <br /><br />
                  '<em><b>Nudge In Action</b></em>', the implementation phase of Nudge-It, kick started in November 2021 by setting up 
                  nudges to change sanitation behaviour in rural Tamil Nadu. The targeted areas are <em>Vadakku Immanampatti </em> 
                  and <em>Rajagiri</em> villages near Pudukkottai in Tamil Nadu. In the target areas, behavioural nudges such as 
                  redesigning toilets and public spaces, audio-visual nudges and empowering community members to lead 
                  awareness events, were carried out to encourage 100% usage of toilets and sustenance of proper hygiene 
                  practices.
                  <br /> <br />
                  Various behavioral concepts like framing effect, IKEA effect, operant conditioning, etc were employed in the 
                  interventions.
              </Text>
              <Flex flexDirection="row"  width="80vw" justifyContent={"space-between"} alignItems={"center"} className='impli-flex' marginBottom={'4vh'}>
                <Text>
                    Statistics of the villages show that around 80% of the men use toilets. We, at Mind Trials, aim to bring
                    this percentage to 100%. 
                </Text>
                <Image src={barGraph} objectFit={"contain"}></Image>
              </Flex>
              <Flex width="80vw" justifyContent={"space-between"} alignItems={"center"} className='impli-flex' marginBottom={'4vh'}>
                  <Image src={gramSurvey} boxSize={"25vw"} objectFit={"cover"}></Image>
                  <Text width={"50%"} textAlign={"right"}>
                    A pre-intervention survey was conducted with 95 households to assess the sanitation behaviour of the 
                    population of the rural areas taken up. Behavioral analysis was done by the participants to develop innovative nudges to change sanitation behaviour.
                  </Text>
              </Flex>
              <Flex width="80vw" justifyContent={"space-between"} alignItems={"center"} className='impli-flex left' marginBottom={'4vh'}>
                  <Text width={"50%"}>
                    Street plays were performed by the youth of the rural population, story about a daughter educating her father 
                    about the aftermath of open defecation. This uses the transtheoretical model of decision making. The model posits that a behaviour change has 6 stages: precontemplation, 
                    contemplation, preparation, action, maintenance and termination. The play aims to catch the target 
                    population at the contemplation stage and influence decision makeing heuristics. 
                  </Text>
                  <Image src={gramPlay} boxSize={"25vw"} objectFit={"cover"}></Image>
              </Flex>
              <Flex width="80vw" justifyContent={"space-between"} alignItems={"center"} className='video' marginBottom={'4vh'}>
                  <Box boxSize={"30vw"}>
                    <video src={gramPaintVideo} width="100%" height="100%" muted={true} autoPlay={true} loop={true}>
                    </video>
                  </Box>
                  <Text width={"30%"}>
                    Toilets were repainted using color psychology. Behavioral assessment showed that the target 
                    population, mainly men, preferred open defecation because they are more accustomed to the environment of open defecation fields. To mimic the 
                    environment and make toilets more comfortable for the individuals, toilets were repainted with elements 
                    of nature. In addition, posters were also painted to act as visual nudges. All this was done with the 
                    help of community members, thereby employing IKEA effect. 
                    <br /> <br />
                    A blackboard is also maintained to display negative information pertaining to toilet usage. 
                    This intervention acts as a negative reinforcement. As toilet usage increases, the data can be 
                    swapped to display positive statistics. This also creates the idea that using toilets is the social 
                    norm.
                  </Text>
              </Flex>
              <Flex width="80vw" justifyContent={"space-between"} alignItems={"center"} className='impli-flex left' marginBottom={'4vh'}>
                  <Text width={"50%"}>
                    Demonstrations were also conducted to create awareness about the aftermath of open defecation. 
                    This uses the theory of reasoned action. The theory states that the intention of behaviour change 
                    plays a huge role in behavior change. The intervention aims to influence the intention of the 
                    behaviour change, i.e. using toilets.
                  </Text>
                  <Image src={gramDemo} boxSize={"25vw"} objectFit={"cover"}></Image>
              </Flex>
              <Flex width="80vw" justifyContent={"space-between"} alignItems={"center"} className='impli-flex' marginBottom={'4vh'}>
                  <Image src={gramAward} boxSize={"25vw"} objectFit={"cover"}></Image>
                  <Text width={"50%"} textAlign={"right"}>
                    Lastly, households that maintained their toilets, each member of the household using the toilet and following proper 
                    hygiene practices, were awarded. This acts as positive reinforcement, a part of operant conditioning and encourages
                    them to sustain the behaviour. 
                  </Text>
              </Flex>
            </Box>
        </div>
      </section>
      <section id="partners" className="partners">
          <h1>OUR PARTNERS</h1>
          <Flex width="80%" margin="auto" justifyContent="center" alignItems="center" className="partner-flex">
            <Box width="45%"><a href="https://iben.co.in/" className="partner-flex-out" target="_blank"><Image src={iben} margin="auto" width="60%" height="auto"></Image></a></Box>
            <Box width="45%"><a href="https://gramalaya.org/" className="partner-flex-out" target="_blank"><Image src={gramalaya} width="90%" height="auto" margin="auto"></Image></a></Box>
            <Box width="45%"><a href="https://forms.gle/ge15CUNHHh9RknLeA" className="partner-flex-out" target="_blank"><Image src={csbc} width="60%" height="auto" margin="auto"></Image></a></Box>
          </Flex>
      </section>
      <section id="prev" className="prev">
        <h1>PREVIOUS</h1>
        <Swiper
          className="prevSwiper"
          centeredSlides={true}
          grabCursor={true}
          effect= 'coverflow'
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier":1,
            "slideShadows": true
          }}
          pagination={{clickable:true}}
          keyboard={{"enabled": true}}
          breakpoints={{
            1100: {
              spaceBetween: 50,
            },
            200 : {
              // slidesPerView: 1,
              initialSlide: 0,
              effect: 'slide',
              // centeredSlides: true,
              grabCursor: true,
              spaceBetween: 70,
            },
          }}>
            <SwiperSlide>
              <h2><Image src={upskill} height="8vh" width="auto"></Image></h2>
              <p>Formed with the vision of revolutionizing school level CS education in India, UpSkill worked to introduce robust 
                Computational Thinking skills at an early age among students. UpSkill organised events, workshops and 
                discussions to help CS educators get acquainted with efficient pedagogies in the domain, to improve computational 
                thinking skills among students, and to guide school admins on implementing a coding curriculum.</p>
            </SwiperSlide>
            <SwiperSlide>
              <h2><Image src={step} height="8vh" width="auto"></Image></h2>
              <p>Shaastra Technology & Policy was the first engineering technical fest to venture into the public policy domain by 
                organizing a Policymaking Challenge. It added a whole new dimension to the quest of creating impact through Shaastra. 
                Shaastra took to taking up societal challenges and utilise the power of technology and public policy to provide solutions 
                to the masses.</p>
            </SwiperSlide>
            <SwiperSlide>
              <h2><Image src={relaunch} height="8vh" width="auto"></Image></h2>
              <p>Shaastra Relaunch aimed at solving the enormous but surmountable problem of helping women professionals to get back to 
                their careers after a hiatus. With Relaunch, we aspired to be the spark that brings out the dormant skills of women who 
                have taken a break from their professional careers, dust themselves off and start afresh. </p>
            </SwiperSlide>
        </Swiper>
        <h1>INITIATIVES</h1>
      </section>
      <section id="contact" className="contact">
          
      <div className="contact-bg"></div>
          <h1>CONTACT US</h1>
          <p>mindtrials@shaastra.org</p>
          <Flex width="50vw" margin="0px auto" justifyContent="space-between" alignItems="center" className="poc">
            <div>
              <h3>Vir Karan</h3>
              <p>+91 80088 73918</p>
            </div>
            <div>
              <h3>Mahboob Ali</h3>
              <p>+91 92073 17647</p>
            </div>
          </Flex>
          <p className="follow">FOLLOW US
            <a href="https://www.instagram.com/shaastra_iitm/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} color="white"></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/Shaastra/" target="_blank"><FontAwesomeIcon icon={faFacebook} color="white"></FontAwesomeIcon></a> 
            <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="white"></FontAwesomeIcon></a></p>
          <p>Designed by Krithikaa, Shaastra Webops 2022 <br /> Mind Trials © All rights reserved</p>
      </section>
    </div>
  );
}

export default App;
